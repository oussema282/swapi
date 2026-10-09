# Shop Simulator Telegram Bot

A Python Telegram bot that uses Playwright to operate an administrator cash-register page in a browser game.

## Implemented flows

- **Create account**: asks for a game username, generates a cryptographically secure 6-digit password, creates the player through the website, and sends the credentials back in a protected Telegram message.
- **Deposit**: accepts and confirms an amount, then deposits it into the Telegram user's linked game account.
- **Withdraw**: accepts and confirms an amount, then withdraws it from the linked account.
- **Change password**: generates a new 6-digit password, changes it on the website, and privately sends it to the player.
- **Doody CSV**: stores accounts in `data/doody.csv` and audit records in `data/doody_transactions.csv`. Administrators can download them using `/doody` and `/transactions`.
- **Admin status**: `/status` reports browser readiness and account/transaction counts.

Every privileged browser operation logs into a fresh, isolated browser context. Operations are serialized to reduce race conditions in the game's admin panel. A website action counts as successful only when its configured success selector becomes visible.

## Important security note

`doody.csv` contains game passwords in plaintext because that was part of the requested workflow. The bot creates it with mode `0600` and its directory with mode `0700`, but plaintext is still sensitive:

- never commit or email this file;
- restrict SSH and server users;
- keep encrypted backups;
- rotate the game administrator password if it is exposed;
- migrate to an encrypted database before supporting many users.

Deposits and withdrawals are automatic and restricted to the game account linked to the requesting Telegram ID. This implementation **does not verify a real-money payment**. If “deposit” means real money, do not enable it until a signed payment-provider webhook or manual administrator approval is added.

## 1. Requirements

- Python 3.11 or newer
- A Linux server capable of running a permanent process
- Chromium and its OS libraries
- A Telegram bot token from BotFather
- Authorization to automate the game administrator website

A Hostinger **VPS** is recommended. Shared web hosting often does not allow permanent Python workers or Playwright/Chromium. Run `bash scripts/check_host.sh` on the target host; if there is no SSH, no Python process manager/systemd, or no ability to install Chromium libraries, move the bot to a VPS.

## 2. Local installation

```bash
cd bot
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
playwright install --with-deps chromium
cp .env.example .env
chmod 600 .env
```

On systems where you cannot use `playwright install --with-deps`, ask the server administrator to install the listed OS dependencies, then run `playwright install chromium` as the same user that will run the bot.

## 3. Configure the website selectors

Edit `bot/.env`; do not modify the repository's existing root `.env`. Replace every example value in `.env.example`.

Required secret/configuration groups:

1. `TELEGRAM_BOT_TOKEN` and numeric `TELEGRAM_ADMIN_IDS`.
2. `GAME_BASE_URL`, `GAME_LOGIN_URL`, and game administrator credentials.
3. Login, cash-register, account-creation, deposit, withdrawal, and password-change selectors.
4. A unique success selector for every flow.

Prefer selectors owned by the application:

```text
#username
[data-testid="deposit-submit"]
form[name="new-player"] input[name="password"]
```

Avoid fragile selectors such as `div:nth-child(4) > button:nth-child(2)`. Playwright also accepts explicit selectors such as `xpath=//button[@name='deposit']`, but stable IDs or `data-testid` attributes are better.

To inspect the website interactively:

```bash
source .venv/bin/activate
playwright codegen https://your-game.example/login
```

Do not share a recording, screenshot, trace, or `.env` that reveals the administrator password. If a workflow has extra steps—an iframe, account autocomplete, second confirmation dialog, PIN, CAPTCHA, or one-time code—the adapter in `shop_bot/automation.py` must be updated before deployment. The bot intentionally does not bypass CAPTCHA or 2FA.

For a controlled local selector test, set:

```dotenv
BROWSER_HEADLESS=false
BROWSER_SLOW_MO_MS=300
```

Set headless mode back to `true` for the VPS. Failure screenshots are off by default because they can contain private information.

## 4. Run tests and start

From `bot/` with the virtual environment active:

```bash
python -m unittest discover -s tests -v
python -m shop_bot
```

In Telegram:

1. Send `/start`.
2. Create a test account.
3. Test the smallest allowed deposit and withdrawal against a disposable game account.
4. Test password change and confirm the old password no longer works.
5. As an administrator, test `/status`, `/doody`, and `/transactions`.

Do not test financial operations against a production account until all success selectors and audit behavior have been verified.

## 5. Data and recovery behavior

- Account creation is first recorded as `pending`; it becomes `active` only after website confirmation.
- Transactions are recorded as `pending`, then `success` or `failed`.
- If the game website succeeds but the CSV update fails, the bot warns the player **not to retry**. An administrator must reconcile the pending row against the website.
- Only one bot process may use a Doody directory. Two replicas can corrupt the logical workflow even though each write is atomic.
- Back up `bot/data/` while the bot is stopped, or migrate to PostgreSQL before scaling.

## 6. Hostinger VPS deployment

The exact package commands depend on the Ubuntu version. A typical deployment is:

```bash
# Upload/clone the project to /opt/shop-simulator-bot first.
cd /opt/shop-simulator-bot/bot
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
playwright install --with-deps chromium
cp .env.example .env
chmod 600 .env
# Fill .env without committing it.
python -m unittest discover -s tests -v
```

Create a dedicated unprivileged `shopbot` user, ensure it owns the bot directory, and install `deploy/shop-simulator-bot.service.example` as a systemd unit after replacing paths/users if needed:

```bash
sudo cp deploy/shop-simulator-bot.service.example /etc/systemd/system/shop-simulator-bot.service
sudo systemctl daemon-reload
sudo systemctl enable --now shop-simulator-bot
sudo systemctl status shop-simulator-bot
sudo journalctl -u shop-simulator-bot -f
```

Install Chromium as the same user that runs the service, or define a shared `PLAYWRIGHT_BROWSERS_PATH`. Keep only one service instance running.

## 7. Safe development with a Hermes agent

Give Hermes one small change at a time and make it verify the result. A useful prompt template is:

```text
Read bot/README.md and the existing code first. Implement only: <one change>.
Never print, commit, or rewrite bot/.env, doody.csv, Telegram tokens, or game credentials.
Keep Telegram users tied to their own stored game account.
Preserve pending/success/failed audit records and website success-selector checks.
Run: cd bot && python -m unittest discover -s tests -v
Show me the changed files, test result, and any new environment variable names only.
```

Good next increments:

1. Add mocked Playwright tests using saved, secret-free HTML fixtures.
2. Add an administrator reconciliation command for `pending` operations.
3. Encrypt game passwords at rest and decrypt only for an authorized export.
4. Replace CSV storage with PostgreSQL when running more than one process.
5. Add rate limits and per-user daily deposit/withdrawal limits.
6. Add signed payment webhooks if deposits correspond to real money.
7. Add monitoring/alerts for repeated login or selector failures.

Never ask an agent to “fix everything” while giving it production credentials. Use a staging administrator account and disposable player accounts first.
