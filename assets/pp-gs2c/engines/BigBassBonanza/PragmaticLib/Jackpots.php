<?php

namespace VanguardLTE\Games\BigBassBonanza\PragmaticLib;

use Illuminate\Support\Facades\DB;

class Jackpots
{
    public static function toJP($bet, $jpgs){
        $toJackpots = 0;
        // per-row atomic increment — upsert() with composite conflict target
        // breaks on sqlite (no matching UNIQUE constraint)
        foreach ($jpgs as $jpg) {
            $add = $bet * ($jpg->percent / 100);
            DB::table('jpg')->where('id', $jpg->id)->increment('balance', $add);
            $toJackpots += $add;
        }
        return $toJackpots;
    }
}
