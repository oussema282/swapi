# Telegram Payment Agent (Replit-ready subproject)

This folder consolidates the Telegram workflow and the tested Playwright admin selectors into one application. It does not include the old CSV queue, Hermes files, copied databases, screenshots, or account exports.

## Runtime overview

- `app.bot` collects account and deposit requests in Telegram.
- `app.db` stores users and jobs in SQLite and enforces duplicate-reference and single-pending-request checks.
- `app.worker` runs in the same process as the bot, verifies the payment, then applies an admin balance top-up only after exact status, amount, phone, reference, and balance-delta checks pass.
- `app.sites` contains the Playwright automation. The admin selectors migrated from the supplied tested flow are defaults, and can be overridden with environment variables.
- Any unexpected/ambiguous result goes to manual review; deposits are never automatically retried after a remote submit.

## Important limitations before live use

1. The payment verifier's URL, selectors, credentials, and exact success/failure status strings were not present in the supplied configuration. Add them as Replit Secrets before the bot can pass `app.check_config`.
2. Admin selectors can change. The balance selector is used as the positive confirmation: the observed balance must increase by exactly the submitted amount. Validate this on a site sandbox first.
3. The bot token and website credentials previously appeared in the shared archive. **Rotate them before deployment.** This project intentionally contains no real credentials. Never commit `.env`, Replit Secrets, screenshots, SQLite files, or player CSVs.
4. Keep one Replit instance running. Telegram long polling and the SQLite worker are designed for a single process/instance.
5. Replit local storage may not be durable across deployments. Back up the SQLite database or use persistent storage before handling real transactions.

## Local setup

Use Python 3.11 or newer:

```bash
cd telegram_payment_agent
python -m venv .venv
source .venv/bin/activate       # Windows: .venv\\Scripts\\Activate.ps1
python -m pip install -r requirements.txt
python -m playwright install chromium
cp .env.example .env            # Windows: Copy-Item .env.example .env
```

Generate a new Fernet key locally, then put it in `.env` (or Replit Secrets):

```bash
python -c 'from cryptography.fernet import Fernet; print(Fernet.generate_key().decode())'
```

Edit the environment values. Do not put real credentials in GitHub. Check configuration:

```bash
python -m app.check_config
```

Start the bot and its integrated worker:

```bash
python -m app.main
```

## Replit setup

This project lives in the `telegram_payment_agent/` subfolder so the existing `swapi` web app's root run configuration is not replaced. In Replit:

1. Import the GitHub repository.
2. Create a project-local virtual environment and install dependencies in the Shell (Replit's Nix-managed system Python may reject global `pip install`):
   ```bash
   cd telegram_payment_agent
   python -m venv .venv
   source .venv/bin/activate
   python -m pip install -r requirements.txt
   python -m playwright install chromium
   ```
3. Add the environment variables listed in `.env.example` using **Tools → Secrets** (or the Secrets panel). Do not paste the token or passwords into source files or chat.
4. Set the Replit Run command to:
   ```bash
   bash telegram_payment_agent/replit_start.sh
   ```
   The wrapper checks configuration before starting the integrated bot and worker.
5. Run `cd telegram_payment_agent && python -m app.check_config` before starting the bot.

If Chromium fails to launch because a system library is missing, install the required Playwright browser dependencies in the Replit environment; the bot intentionally stops rather than processing jobs without its browser worker.

## Replit Secrets

At minimum, configure:

- `BOT_TOKEN`: a newly rotated Telegram bot token.
- `FERNET_KEY`: a newly generated Fernet key. Losing it makes encrypted pending account passwords unrecoverable.
- `ADMIN_USERNAME`, `ADMIN_PASSWORD`: admin-site credentials.
- `D17_DESTINATION`, `EDINAR_DESTINATION`, and/or `BANK_DESTINATION`: only the payment methods actually supported.
- `VERIFIER_BASE_URL`, `VERIFIER_FORM_URL`, and all required `VERIFIER_*_SELECTOR` values.
- `VERIFIER_SUCCESS_TEXTS` and `VERIFIER_FAILURE_TEXTS`: exact strings shown by the verifier, comma-separated. Matching is exact after whitespace/case normalization; substrings are never treated as success.
- `ADMIN_CHAT_IDS`: optional comma-separated Telegram IDs for operational alerts.

`ADMIN_BASE_URL` defaults to the site address observed in the supplied project. Admin selectors are prefilled from that project but should be checked against the live site's current DOM. Set `ADMIN_CREATE_PHONE_SELECTOR` only if the new-account page actually has a phone input.

## Safety settings

Live credit mode is enabled by default once all Replit Secrets and site selectors are configured: `DRY_RUN=false`, `MIN_DEPOSIT=1`, and `MAX_DEPOSIT=1`. The worker rechecks the amount range. Set the Replit Secret `DRY_RUN=true` to run verification without changing the admin balance. Before live use, rotate exposed credentials, verify the exact verifier status strings and selectors in a sandbox, and start with the one-unit cap; raise it only after a successful end-to-end test.

The worker uses exact verifier statuses and exact phone/reference/amount matches. It also reads the account balance before and after a top-up, and requires the exact expected increase. A timeout after submission is manual review—not a signal to retry.

## Tests

From this folder:

```bash
python -m unittest discover -s tests -v
```

The tests cover decimal parsing, status classification, request deduplication, job claiming, and monotonic deposit state transitions. They do not replace an end-to-end test against authorized sandbox sites.
