-- w_games table schema as recovered from the 8.5open d60.sql dump (2022).
-- Reference for sql/w_games-17-pack-v2-games.sql — same 33-column order.

CREATE TABLE `w_games` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `shop_id` int(11) NOT NULL DEFAULT '0',
  `jpg_id` int(11) NOT NULL DEFAULT '0',
  `label` varchar(55) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `device` int(11) NOT NULL DEFAULT '1',
  `gamebank` varchar(55) COLLATE utf8mb4_unicode_ci DEFAULT 'slots',
  `chanceFirepot1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `chanceFirepot2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `chanceFirepot3` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fireCount1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fireCount2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fireCount3` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lines_percent_config_spin` text COLLATE utf8mb4_unicode_ci,
  `lines_percent_config_spin_bonus` text COLLATE utf8mb4_unicode_ci,
  `lines_percent_config_bonus` text COLLATE utf8mb4_unicode_ci,
  `lines_percent_config_bonus_bonus` text COLLATE utf8mb4_unicode_ci,
  `rezerv` varchar(55) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `cask` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `advanced` text COLLATE utf8mb4_unicode_ci,
  `bet` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `scaleMode` enum('','showAll','exactFit') COLLATE utf8mb4_unicode_ci NOT NULL,
  `slotViewState` enum('','Normal','HideUI') COLLATE utf8mb4_unicode_ci NOT NULL,
  `view` int(11) NOT NULL DEFAULT '0',
  `denomination` decimal(20,2) NOT NULL DEFAULT '1.00',
  `category_temp` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `original_id` int(11) NOT NULL DEFAULT '0',
  `bids` int(11) NOT NULL DEFAULT '0',
  `stat_in` decimal(20,4) NOT NULL DEFAULT '0.0000',
  `stat_out` decimal(20,4) NOT NULL DEFAULT '0.0000',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

ALTER TABLE `w_games`
  ADD PRIMARY KEY (`id`);
