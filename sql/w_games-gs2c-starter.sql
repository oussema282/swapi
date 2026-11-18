-- =====================================================================
-- w_games rows for the 3 gs2c Pragmatic Play starter games
-- (GatesofOlympus, SugarRush, SweetBonanza).
-- These rows do NOT exist in the 8.5open d60 dump -> plain INSERT.
-- Applied to database.sqlite AFTER sqlite_convert.py (sqlite syntax).
-- Column list mirrors sql/w_games-17-pack-v2-games.sql exactly.
-- view=1 (published), shop_id=1, device=2 (desktop+mobile), gamebank='slots'.
-- Requires: engines in app/Games/<Name>, clients in public/games/<Name>/gs2c,
--           blades in resources/views/frontend/games/list/<Name>.blade.php.
-- =====================================================================

INSERT OR IGNORE INTO w_games
  (id, name, title, shop_id, jpg_id, label, device, gamebank,
   chanceFirepot1, chanceFirepot2, chanceFirepot3,
   fireCount1, fireCount2, fireCount3,
   lines_percent_config_spin, lines_percent_config_spin_bonus,
   lines_percent_config_bonus, lines_percent_config_bonus_bonus,
   rezerv, cask, advanced, bet, scaleMode, slotViewState, view,
   denomination, category_temp, original_id, bids, stat_in, stat_out,
   created_at, updated_at)
VALUES
  (9101, 'GatesofOlympus', 'Gates of Olympus', 1, 0, NULL, 2, 'slots',
   NULL, NULL, NULL, NULL, NULL, NULL,
   NULL, NULL, NULL, NULL,
   4, '', 'a:0:{}', '0.01, 0.02, 0.05, 0.10, 0.20', '', '', 1,
   1.00, NULL, 0, 3, 0.0000, 0.0000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (9102, 'SugarRush', 'Sugar Rush', 1, 0, NULL, 2, 'slots',
   NULL, NULL, NULL, NULL, NULL, NULL,
   NULL, NULL, NULL, NULL,
   4, '', 'a:0:{}', '0.01, 0.02, 0.05, 0.10, 0.20', '', '', 1,
   1.00, NULL, 0, 3, 0.0000, 0.0000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (9103, 'SweetBonanza', 'Sweet Bonanza', 1, 0, NULL, 2, 'slots',
   NULL, NULL, NULL, NULL, NULL, NULL,
   NULL, NULL, NULL, NULL,
   4, '', 'a:0:{}', '0.01, 0.02, 0.05, 0.10, 0.20', '', '', 1,
   1.00, NULL, 0, 3, 0.0000, 0.0000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

UPDATE w_games SET view = 1, shop_id = 1, device = 2, gamebank = 'slots'
  WHERE name IN ('GatesofOlympus', 'SugarRush', 'SweetBonanza');
