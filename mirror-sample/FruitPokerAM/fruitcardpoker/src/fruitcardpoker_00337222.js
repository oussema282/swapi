
var gameController;
var gameWS=new WebSocket(serverString);

 /*------WS ADDON--------*/
        
        
        
       
        setInterval(function(){
		//
		var j='A/u350,0';
		var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"FruitPokerAM"}';j=tmpPar;
		gameWS.send(j);	
		},5000);
		
		
	
		gameWS.onmessage=function(k){

		    var tmpMess=k.data.split("#");

			if(tmpMess[0]=='UPDATE'  && gameController.win<=0 && gameController.wpn.fed!=undefined){
			
			if(gameController.isj!=parseInt(tmpMess[1])){
				
			gameController.isj=parseInt(tmpMess[1]);	
		
			gameController.wpn.fed.ybw("creditd", "#pmb", [gameController.jwd(tmpMess[1]), true]);	
			
			}
			
			
			
			
			
			}	
			
		}
		
		/*--------------*/

/////////////////

function fkh() {
    this.key = "Info";
    this.uut = "DEPOSIT";
    this.audio = "AUDIO";
    this.kbq = "TIP";
    this.rze = "TURBO";
    this.cec = "STATISTIC";
    this.rhf = "HISTORY";
    this.fqs = "SHORTCUTS";
    this.drj = "HELP";
    this.ghw = "PAYTABLE";
    this.language = "LANGUAGE";
    this.nnr = ">>";
    this.vki = "<<";
    this.jhr = "Fullscreen is not supported!"
}

function bmt() {
    this.qby = "MINIMUM BET IS";
    this.ayt = "MAX BET";
    this.xoe = "MIN.BET";
    this.iva = "MAX.BET";
    this.vpv = "BET";
    this.start = "START";
    this.drj = "HELP";
    this.ghw = "PAYTABLE";
    this.sii = "MENU";
    this.hal = "MORE|GAMES";
    this.jdl = "STOP";
    this.isj = "CREDIT";
    this.djp = "GAME OVER";
    this.pbn = "WINNER!";
    this.bbk = "GOOD LUCK!";
    this.win = "WIN";
    this.eem = "LAST WIN";
    this.iej = "COLLECT";
    this.pfw = "COLLECT";
    this.fnv = "GAMBLE";
    this.apw = "AUTO|START";
    this.gpe = "HALF|GAMBLE";
    this.akx = "EXIT";
    this.ztq = "START GAME";
    this.vvu = "CHOOSE BET";
    this.vqr = "HALF";
    this.ret = "RETURN|TO GAME";
    this.qkl = "Total Win";
    this.wax = "Warning";
    this.ugg = "TOTAL";
    this.qab = "PLEASE WAIT ...";
    this.nhh = "More Games";
    this.rze = "SPEED";
    this.bms = "Malfunction voids all pays and plays.";
    this.xqa = "CONTINUE";
    this.zkr = "AUTOSTART";
    this.iml = "PAYTABLE";
    this.lvo = "GAMBLE";
    this.left = "LEFT";
    this.zzj = "RIGHT";
    this.ok = "OK";
    this.wfp = "CANCEL";
    this.ika = "Gamble";
    this.ehv = "Half";
    this.cae = "GAME RULES";
    this.zji = "GAME RULES";
    this.cje = "Bonus!";
    this.ljk = "BONUS";
    this.rtz = "PRESS ANY KEY TO CONTINUE";
    this.sar = "NOT ENOUGH CREDIT!";
    this.ojv = "wins";
    this.alh = "V A L U E";
    this.of = "OF";
    this.rml = "TOUCH THE SCREEN TO CONTINUE";
    this.ydi = "LOADING ...";
    this.ley = "LOADING HISTORY ...";
    this.yvn = "Communication Error";
    this.gff = "You have reached one of the limits!";
    this.hpg = "You have reached the maximum amount of free games!";
    this.ftt = "Game will be closed";
    this.gnz = "Game will be restarted";
    this.qec = "WON";
    this.error = "ERROR";
    this.emo = "FREEPLAY";
    this.kno = "AUTO";
    this.gsx = "GAME ID";
    this.fuw = "Playing Time";
    this.piu = "last";
    this.qqw = "games";
    this.uut = "DEPOSIT";
    this.audio = "AUDIO";
    this.asj = "MUSIC";
    this.dtv = "FULLSCREEN";
    this.okp = "FULLSCREEN";
    this.language = "LANGUAGE";
    this.klj = "Do not show again";
    this.waa = "Sounds can not be loaded!";
    this.qjz = "Resources missing!";
    this.ywc = "Play without sound?";
    this.imo = "SETTINGS";
    this.nkg = "Please turn your device!";
    this.key = "INFO";
    this.fqm = "Please disable PRIVATE MODE in your browser to play the game.";
    this.goq = "This game is optimized for Google Chrome.";
    this.mwb = "Please use the current version of";
    this.ayy = "Unfortunately this browser is not fully supported.";
    this.gub = "This game can not be started in freeplay mode!";
    this.qsg = "Turn your device to the portrait mode to play like on a real slot machine!";
    this.zfs = "Adjust the game interface to your needs!";
    this.mxo = "SELECT THE CORRECT COLOR TO DOUBLE THE WIN";
    this.hzb = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.bxy = "GAMBLE FOR A CHANCE TO INCREASE THE WIN";
    this.cec = "Statistic";
    this.kxt = "Total Games";
    this.mne = "Total Bets";
    this.kxl = "Total Wins";
    this.maa = "Total Play Time";
    this.dby = "I have read this message";
    this.wvv = "EXIT|GAME";
    this.rhf = "History";
    this.jzh = "No games played.";
    this.state = "STATE";
    this.zjv = "Main Game";
    this.gos = "Auto Collected";
    this.qoz = "Collected";
    this.jpq = "Bonusspins";
    this.fbv = "Respin";
    this.tje = "Bonus";
    this.lqk = "First Deal";
    this.szu = "Second Deal";
    this.aet = "Third Deal";
    this.xim = "AUTOSTART SETTINGS";
    this.dig = "Amount of games:";
    this.zdp = "Stop autostart";
    this.uxt = "Credit lower than:";
    this.ote = "Credit higher than:";
    this.thh = "Win higher than:";
    this.igq = "The autostart will be stopped at the beginning of the bonus.";
    this.trw = "Share on Facebook";
    this.osa = "FOR MORE INFORMATION, SEE THE GAME RULES.";
    this.zrd = "Reality Check";
    this.lhl = "You have requested a Reality Check.";
    this.esk = "Press HISTORY to view your game history.";
    this.vji = "Game break";
    this.yqm = "Game limits";
    this.noe = "Self test";
    this.wcc = "No connection to the gaming server!";
    this.bas = "Connection attempts";
    this.jvf = "Login failed!";
    this.kaa = "Active session already exists!";
    this.elg = "THE THEORETICAL RETURN TO THE PLAYER FOR THIS GAME IS XY."
}
bmt.prototype = new fkh;

function rzc() {
    this.qby = "РњРРќРРњРђР›Р¬РќРђРЇ РЎРўРђР’РљРђ -";
    this.ayt = "РњРђРљРЎ.|РЎРўРђР’РљРђ";
    this.xoe = "РњРРќ.РЎРўAР’РљРђ";
    this.iva = "РњРђРљРЎ.РЎРўAР’РљРђ";
    this.vpv = "РЎРўРђР’РљРђ";
    this.start = "РЎРўРђР Рў";
    this.drj = "РџРћРњРћР©Р¬";
    this.ghw = "РўРђР‘Р›РР¦Рђ Р’Р«РџР›РђРў";
    this.sii = "РњР•РќР®";
    this.hal = "Р”Р РЈР“РР•|РР“Р Р«";
    this.jdl = "РЎРўРћРџ";
    this.isj = "РљР Р•Р”РРў";
    this.djp = "РљРћРќР•Р¦ РР“Р Р«";
    this.pbn = "РџРћР‘Р•Р”РРўР•Р›Р¬!";
    this.bbk = "Р–Р•Р›РђР•Рњ РЈР”РђР§Р!";
    this.win = "Р’Р«РР“Р Р«РЁ";
    this.eem = "РџРћРЎР›Р•Р”. Р’Р«РР“Р Р«РЁ";
    this.ojv = "РІС‹Р№РіСЂС‹С€Рё";
    this.iej = "Р—РђР‘Р РђРўР¬|Р’Р«РР“Р Р«РЁ";
    this.pfw = "Р—РђР‘Р РђРўР¬ Р’Р«РР“Р Р«РЁ";
    this.fnv = "РР“Р Рђ|РќРђ|Р РРЎРљ";
    this.apw = "РђР’РўРћ|РР“Р Рђ";
    this.gpe = "РЈРњР•РќР¬РЁРРўР¬|Р РРЎРљ";
    this.of = "Р’Р«РљР›.";
    this.akx = "Р’Р«РҐРћР”";
    this.ztq = "РќРђР–РњРРўР• РЎРўРђР Рў";
    this.vvu = "Р’Р«Р‘Р•Р РРўР• РЎРўРђР’РљРЈ";
    this.vqr = "Р’Р—РЇРўР¬|1/2";
    this.rtz = "РќРђР–РњР Р›Р®Р‘РЈР® РљР›РђР’РРЁРЈ, Р§РўРћР‘Р« РџР РћР”РћР›Р–РРўР¬";
    this.rml = "РџР РРљРћРЎРќРРўР•РЎР¬ Рљ Р­РљР РђРќРЈ Р”Р›РЇ РџР РћР”РћР›Р–Р•РќРРЇ";
    this.ret = "РћР‘Р РђРўРќРћ|Р’ Р“Р›РђР’РќРЈР®|РР“Р РЈ";
    this.awp = "РњРЅРѕР¶РёС‚РµР»СЊ РґР»СЏ Р‘РѕРЅСѓСЃР°";
    this.nhz = "Р‘РћРќРЈРЎ РЎРўРђР Рў Р’Р«РР“Р Р«РЁ:";
    this.qkl = "РћР‘Р©РР™ Р’Р«РР“Р Р«РЁ";
    this.ydi = "Р—Р°РіСЂСѓР·РєР° ...";
    this.ley = "Р—Р°РіСЂСѓР·РєР° РСЃС‚РѕСЂРёРё ...";
    this.error = "РћРЁРР‘РљРђ";
    this.sar = "РќР• Р”РћРЎРўРђРўРћР§РќРћ РљР Р•Р”РРўРђ.";
    this.gff = "Р”РѕСЃС‚РёРіРЅСѓС‚ РѕРґРёРЅ РёР· Р»РёРјРёС‚РѕРІ!";
    this.wax = "Р’РЅРёРјР°РЅРёРµ";
    this.yvn = "РѕС€РёР±РєР° РѕР±РјРµРЅР° РґР°РЅРЅС‹С…";
    this.hpg = "Р’С‹ РїРѕР»СѓС‡РёР»Рё РјР°РєСЃРёРјР°Р»СЊРЅРѕРµ РєРѕР»РёС‡РµСЃС‚РІРѕ СЃРІРѕР±РѕРґРЅС‹С… РёРіСЂ!";
    this.ftt = "РРіСЂР° Р·Р°РєР°РЅС‡РёРІР°РµС‚СЃСЏ";
    this.gnz = "РРіСЂР° РЅР°С‡РёРЅР°РµС‚СЃСЏ Р·Р°РЅРѕРІРѕ";
    this.cje = "Р‘РѕРЅСѓСЃ!";
    this.ljk = "Р‘РћРќРЈРЎ";
    this.qec = "Р’Р«РР“Р Р«РЁ";
    this.ugg = "Р’РЎР•Р“Рћ";
    this.qab = "РџРѕР¶Р°Р»СѓР№СЃС‚Р° РїРѕРґРѕР¶РґРёС‚Рµ ...";
    this.error = "РћРЁРР‘РљРђ";
    this.emo = "FREEPLAY";
    this.nhh = "Р’Р«Р‘РћР  РР“Р Р«";
    this.gsx = "GAME ID";
    this.fuw = "Playing Time";
    this.piu = "РїРѕСЃР»РµРґРЅСЏСЏ";
    this.qqw = "РёРіСЂС‹";
    this.uut = "Р”Р•РџРћР—РРў";
    this.audio = "Р—РІСѓРє";
    this.asj = "РњРЈР—Р«РљРђ";
    this.rze = "РЎРљРћР РћРЎРўР¬";
    this.dtv = "РџРћР›РќРћР­РљР РђРќРќР«Р™";
    this.okp = "РџРћР›РќРћР­РљР РђРќРќР«Р™";
    this.language = "РЇР—Р«Рљ";
    this.bms = "РџР Р РќР•РРЎРџР РђР’РќРћРЎРўР Р’РЎР• РР“Р Р« Р Р’Р«РР“Р Р«РЁР РђРќРќРЈР›РР РЈР®РўРЎРЇ.";
    this.xqa = "РџР РћР”РћР›Р–РРўР¬";
    this.klj = "Р‘РѕР»СЊС€Рµ РЅРµ РїРѕРєР°Р·С‹РІР°С‚СЊ";
    this.zkr = "РђР’РўРћРР“Р Рђ";
    this.iml = "РўРђР‘Р›РР¦Рђ Р’Р«РџР›РђРў";
    this.lvo = "РР“Р Рђ РќРђ Р РРЎРљ";
    this.waa = "Р—РІСѓРє РЅРµ Р·Р°РіСЂСѓР¶Р°РµС‚СЃСЏ!";
    this.qjz = "Р РµСЃСѓСЂСЃС‹ РѕС‚СЃСѓС‚СЃС‚РІСѓСЋС‚!";
    this.ywc = "РРіСЂР°С‚СЊ Р±РµР· Р·РІСѓРєР°?";
    this.imo = "РќРђРЎРўР РћР™РљРђ";
    this.nkg = "РџРѕРІРµСЂРЅРёС‚Рµ, РїРѕР¶Р°Р»СѓР№СЃС‚Р°, РІР°С€Рµ СѓСЃС‚СЂРѕР№СЃС‚РІРѕ!";
    this.left = "Р›Р•Р’Рћ";
    this.zzj = "РџР РђР’Рћ";
    this.kno = "РђР’РўРћ";
    this.alh = "V A L U E";
    this.key = "РРќР¤РћР РњРђР¦РРЇ";
    this.fqm = "Р’С‹РєР»СЋС‡РёС‚Рµ, РїРѕР¶Р°Р»СѓР№СЃС‚Р°, Р§РђРЎРўРќР«Р™ Р Р•Р–РРњ РІ Р±СЂР°СѓР·РµСЂРµ,С‡С‚РѕР±С‹ РЅР°С‡Р°С‚СЊ РёРіСЂСѓ.";
    this.goq = "РќР°СЃС‚РѕСЏС‰Р°СЏ РёРіСЂР° РѕРїС‚РёРјРёР·РёСЂРѕРІР°РЅР° РґР»СЏ Google Chrome.";
    this.mwb = "РСЃРїРѕР»СЊР·СѓР№С‚Рµ, РїРѕР¶Р°Р»СѓР№СЃС‚Р°, Р°РєС‚СѓР°Р»СЊРЅСѓСЋ РІРµСЂСЃРёСЋ";
    this.ayy = "Рљ СЃРѕР¶Р°Р»РµРЅРёСЋ РЅРµС‚ РїРѕР»РЅРѕР№ РїРѕРґРґРµСЂР¶РєРё Р±СЂР°СѓР·РµСЂР°.";
    this.gub = "Р—Р°РїСѓСЃРє СЌС‚РѕР№ РёРіСЂС‹ РІ СЂРµР¶РёРјРµ СЃРІРѕР±РѕРґРЅС‹С… РёРіСЂ РЅРµРІРѕР·РјРѕР¶РµРЅ!";
    this.qsg = "РџРѕРІРµСЂРЅРёС‚Рµ РїСЂРёР±РѕСЂ РІ РїРѕР»РѕР¶РµРЅРёРµ РїРѕСЂС‚СЂРµС‚РЅРѕРіРѕ СЂРµР¶РёРјР° РґР»СЏ РёРіСЂС‹ РєР°Рє РЅР° РЅР°СЃС‚РѕСЏС‰РµРј РёРіСЂР°Р»СЊРЅРѕРј Р°РІС‚РѕРјР°С‚Рµ!";
    this.zfs = "РџСЂРёСЃРїРѕСЃРѕР±СЊ РёРЅС‚РµСЂС„РµР№СЃ Рє СЃРІРѕРёРј РїРѕС‚СЂРµР±РЅРѕСЃС‚СЏРј!";
    this.osa = "Р”РћРџРћР›РќРРўР•Р›Р¬РќРЈР® РРќР¤РћР РњРђР¦РР® Р’Р« РњРћР–Р•РўР• РџРћР›РЈР§РРўР¬ Р’ РџР РђР’РР›РђРҐ РР“Р Р«.";
    this.zrd = "РџСЂРѕРІРµСЂРєСѓ СЂРµР°Р»СЊРЅРѕСЃС‚Рё";
    this.lhl = "Р’С‹ Р·Р°РїСЂРѕСЃРёР»Рё РїСЂРѕРІРµСЂРєСѓ СЂРµР°Р»СЊРЅРѕСЃС‚Рё.";
    this.esk = "РќР°Р¶РјРёС‚Рµ РРЎРўРћР РРЇ, С‡С‚РѕР±С‹ РїРѕСЃРјРѕС‚СЂРµС‚СЊ СЃРІРѕСЋ РёСЃС‚РѕСЂРёСЋ РёРіСЂС‹.";
    this.vji = "Game break";
    this.yqm = "Game limits";
    this.noe = "Self test";
    this.wcc = "РќРµС‚ СЃРІСЏР·Рё СЃ РёРіСЂРѕРІС‹Рј СЃРµСЂРІРµСЂРѕРј!";
    this.bas = "РџРѕРїС‹С‚РєРё СЃРІСЏР·Рё";
    this.jvf = "РѕС€РёР±РєР° РїСЂРё РІС…РѕРґРµ РІ СЃРёСЃС‚РµРјСѓ!";
    this.kaa = "РЎРµР°РЅСЃ РёРіСЂС‹ СѓР¶Рµ РЅР°С‡Р°Р»СЃСЏ!";
    this.cae = "РџР РђР’РР›Рђ РР“Р Р«";
    this.zji = "РџР РђР’РР›Рђ РР“Р Р«";
    this.mxo = "Р’Р«Р‘Р•Р РРўР• РџР РђР’РР›Р¬РќРЈР® РњРђРЎРўР¬, Р§РўРћР‘Р« РЈР”Р’РћРРўР¬ Р’Р«РР“Р Р«РЁ";
    this.hzb = "Р’Р«Р‘Р•Р РРўР• РџР РђР’РР›Р¬РќРЈР® РњРђРЎРўР¬, Р§РўРћР‘Р« РЈР’Р•Р›РР§РРўР¬ Р’Р«РР“Р Р«РЁ Р’ 4 Р РђР—Рђ.";
    this.bxy = "РЎРўРђР’Р¬РўР• РќРђ Р РРЎРљ, Р§РўРћР‘Р« РЈР’Р•Р›РР§РРўР¬ Р’Р«РР“Р Р«РЁ.";
    this.cec = "РЎС‚Р°С‚СѓСЃ";
    this.kxt = "РєРѕР»РёС‡РµСЃС‚РІРѕ РёРіСЂ";
    this.mne = "РІСЃСЏ СЃС‚Р°РІРєР°";
    this.kxl = "РѕР±С‰РёР№ РІС‹РёРіСЂС‹С€";
    this.maa = "РѕР±С‰РµРµ РІСЂРµРјСЏ РёРіСЂС‹";
    this.dby = "РЇ СЃРѕРѕР±С‰РµРЅРёРµ РїСЂРѕС‡РёС‚Р°Р».";
    this.wvv = "РР“Р РЈ|Р—РђРљРћРќР§РРўР¬";
    this.ok = "OK";
    this.rhf = "РСЃС‚РѕСЂРёСЏ";
    this.jzh = "РЅРµС‚ РёСЃС‚РѕСЂРёРё.";
    this.state = "STATE";
    this.zjv = "Main Game";
    this.gos = "Auto Collected";
    this.qoz = "Collected";
    this.jpq = "Bonusspins";
    this.ika = "Gamble";
    this.ehv = "Half";
    this.fbv = "Respin";
    this.tje = "Bonus";
    this.lqk = "First Deal";
    this.szu = "Second Deal";
    this.aet = "Third Deal";
    this.wfp = "РР—РњР•РќРРўР¬";
    this.xim = "РќРђРЎРўР РћР™РљРђ РђР’РўРћРЎРўРђР РўРђ";
    this.dig = "РљРѕР»РёС‡РµСЃС‚РІРѕ РёРіСЂ:";
    this.zdp = "РђРІС‚РѕСЃС‚Р°СЂС‚ РѕСЃС‚Р°РЅРѕРІРёС‚СЊ";
    this.uxt = "РљСЂРµРґРёС‚ РЅРёР¶Рµ, С‡РµРј:";
    this.ote = "РљСЂРµРґРёС‚ РІС‹С€Рµ, С‡РµРј:";
    this.thh = "Р’С‹РёРіСЂС‹С€ РІС‹С€Рµ, С‡РµРј:";
    this.igq = "РђРІС‚РѕСЃС‚Р°СЂС‚ РїСЂРµСЂС‹РІР°РµС‚СЃСЏ, РµСЃР»Рё РЅР°С‡РёРЅР°РµС‚СЃСЏ Р±РѕРЅСѓСЃРЅР°СЏ РёРіСЂР°.";
    this.trw = "РџРѕРґРµР»РёСЃСЊ РІ С„РµР№СЃР±СѓРє";
    this.elg = "РўР•РћР Р•РўРР§Р•РЎРљРђРЇ Р’Р«РџР›РђРўРђ РР“Р РћРљРЈ РЎРћРЎРўРђР’Р›РЇР•Рў Р’ Р­РўРћР™ РР“Р Р• XY."
}
rzc.prototype = new fkh;

function tsh() {
    this.qby = "APUESTA MГЌNIMA ES";
    this.ayt = "APUESTA|MГЃXIMA";
    this.xoe = "APUESTA MГЌN.";
    this.iva = "APUESTA MГЃX.";
    this.vpv = "APUESTA";
    this.start = "JUGAR";
    this.drj = "AYUDA";
    this.ghw = "PLAN DE|GANANCIAS";
    this.sii = "MENU";
    this.hal = "MAS|JUEGOS";
    this.jdl = "PARADA";
    this.isj = "CREDITOS";
    this.djp = "FIN DEL JUEGO";
    this.pbn = "ВЎGANADOR!";
    this.bbk = "ВЎMUCHA SUERTE!";
    this.win = "PREMIO";
    this.eem = "ULTIMOS PREMIO";
    this.ojv = "gana";
    this.iej = "COBRAR";
    this.pfw = "COBRAR";
    this.fnv = "RIESGO";
    this.apw = "AUTO|JUGAR";
    this.gpe = "MEDIA|APUESTA";
    this.of = "DE";
    this.akx = "SALIR";
    this.ztq = "ВЎPULSE JUGAR!";
    this.vvu = "ELIJA SU APUESTA";
    this.vqr = "MITAD";
    this.rtz = "PULSE UNA TECLA PARA CONTINUAR";
    this.rml = "TOCAR LA PANTALLA PARA CONTINUAR";
    this.ret = "VOLVER|AL JUEGO";
    this.qkl = "Premio total";
    this.ydi = "CARGANDO ...";
    this.ley = "CARGANDO HISTORIAL ...";
    this.sar = "No hay bastante CREDITO";
    this.gff = "ВЎHa alcanzado uno de los limites!";
    this.wax = "Advertencia";
    this.yvn = "Error de comunicaciГіn";
    this.hpg = "ВЎHa alcanzado la mГЎxima cantidad de juegos gratis!";
    this.ftt = "El juego se cerrarГЎ";
    this.gnz = "El juego se reiniciarГЎ";
    this.cje = "ВЎBONUS!";
    this.ljk = "BONUS";
    this.qec = "GANADO";
    this.ugg = "TOTAL";
    this.mgd = "TURBO SI";
    this.ahh = "TURBO NO";
    this.qab = "POR FAVOR ESPERE ...";
    this.error = "ERROR";
    this.emo = "FREEPLAY";
    this.nhh = "MAS JUEGOS";
    this.gsx = "ID DE JUEGO";
    this.fuw = "Playing Time";
    this.piu = "ultimos";
    this.qqw = "juegos";
    this.uut = "DEPГ“SITO";
    this.audio = "AUDIO";
    this.asj = "MГљSICA";
    this.rze = "VELOCIDAD";
    this.dtv = "PANTALLA COMPLETA";
    this.okp = "PANTALLA|COMPLETA";
    this.language = "IDIOMA";
    this.bms = "UN MAL FUNCIONAMIENTO ANULA TODA JUGADA Y TODO PAGO.";
    this.xqa = "ADELANTE";
    this.klj = "No mostrar de nuevo";
    this.zkr = "AUTOJUGAR";
    this.iml = "PLAN DE GANANCIAS";
    this.lvo = "RIESGO";
    this.waa = "No se pueden cargar los sonidos.";
    this.qjz = "Faltan recursos.";
    this.ywc = "ВїJugar sin sonido?";
    this.imo = "AJUSTES";
    this.alh = "V A L U E";
    this.nkg = "ВЎEncienda su dispositivo!";
    this.left = "IZQUIERDA";
    this.zzj = "DERECHA";
    this.kno = "AUTOMГЃTICO";
    this.key = "INFORMACIГ“N";
    this.fqm = "Desactive el MODO PRIVADO en su explorador para jugar el juego.";
    this.goq = "Este juego estГЎ optimizado para Google Chrome.";
    this.mwb = "Use la versiГіn actual de";
    this.ayy = "Desafortunadamente, este explorador no es compatible.";
    this.gub = "ВЎEste juego no puede iniciarse en modo de juego libre!";
    this.qsg = "ВЎGire el dispositivo a posiciГіn vertical como en la mГЎquina tragamonedas real!";
    this.zfs = "ВЎAjuste la interfaz del juego a sus necesidades!";
    this.osa = "PARA MГЃS INFORMACIГ“N MIRE LAS REGLAS DEL JUEGO.";
    this.zrd = "Reality Check";
    this.lhl = "Has solicitado un Reality Check.";
    this.esk = "Pulsa HISTORIAL para visualizar tu historial de juego.";
    this.vji = "Game break";
    this.yqm = "Game limits";
    this.noe = "Self test";
    this.wcc = "ВЎNo hay conexiГіn con el servidor de juegos!";
    this.bas = "Intentos de conexiГіn";
    this.jvf = "ВЎNo pudo iniciarse la sesiГіn!";
    this.kaa = "ВЎYa existe una sesiГіn activa!";
    this.cae = "REGLAS DEL JUEGO";
    this.zji = "REGLAS|DEL JUEGO";
    this.mxo = "SELECCIONAR EL COLOR CORRECTO PARA DOBLAR EL PREMIO";
    this.hzb = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.bxy = "JUGAR UNA POSIBILIDAD DE MULTIPLICAR LA GANANCIA";
    this.cec = "ESTADO";
    this.kxt = "NГєmero de juegos";
    this.mne = "Apuesta total";
    this.kxl = "Ganancia total";
    this.maa = "Tiempo total de juego";
    this.dby = "He leГ­do el mensaje.";
    this.wvv = "TERMINAR|JUEGO";
    this.ok = "OK";
    this.rhf = "HISTORIAL";
    this.jzh = "AГєn no hay juegos.";
    this.state = "Estado";
    this.zjv = "Juego principal";
    this.gos = "Ganancia automГЎtica";
    this.qoz = "Ganancia";
    this.jpq = "BONUSSPINS";
    this.ika = "Apuesta";
    this.ehv = "Mitad";
    this.fbv = "Respin";
    this.tje = "Bonus";
    this.lqk = "Primera mano";
    this.szu = "Segunda mano";
    this.aet = "Tercera mano";
    this.wfp = "CANCELAR";
    this.xim = "CONFIGURACIONES DE JUEGO AUTOMГЃTICO";
    this.dig = "Cantidad de juegos:";
    this.zdp = "Detener juego automГЎtico";
    this.uxt = "CrГ©dito menor que:";
    this.ote = "CrГ©dito mayor que:";
    this.thh = "Ganancia mayor que:";
    this.igq = "El juego automГЎtico se detendrГЎ al principio del bonus.";
    this.trw = "Compartir en Facebook";
    this.elg = "EL PORCENTAJE TEГ“RICO DE DEVOLUCIГ“N AL JUGADOR PARA ESTE JUEGO ES XY."
}
tsh.prototype = new fkh;

function gtv() {
    this.qby = "MINIMALER EINSATZ IST";
    this.ayt = "MAX. EINSATZ";
    this.xoe = "MIN. EINSATZ";
    this.iva = "MAX. EINSATZ";
    this.vpv = "EINSATZ";
    this.start = "START";
    this.drj = "HILFE";
    this.ghw = "GEWINNPLAN";
    this.sii = "MENГњ";
    this.hal = "MEHR|SPIELE";
    this.isj = "GUTHABEN";
    this.djp = "SPIEL ENDE";
    this.pbn = "GEWINNER!";
    this.bbk = "VIEL GLГњCK!";
    this.win = "GEWINN";
    this.eem = "LETZTER GEWINN";
    this.ojv = "gewinnt";
    this.iej = "NEHMEN";
    this.pfw = "NEHMEN";
    this.fnv = "RISIKO";
    this.apw = "AUTO|START";
    this.gpe = "HALF|GAMBLE";
    this.jdl = "STOP";
    this.of = "VON";
    this.akx = "EXIT";
    this.ztq = "START DRГњCKEN";
    this.vvu = "EINSATZ WГ„HLEN";
    this.vqr = "TEILEN";
    this.rtz = "DRГњCKE EINE TASTE UM FORTZUFAHREN";
    this.rml = "BERГњHRE DEN BILDSCHIRM UM FORTZUFAHREN";
    this.ret = "ZURГњCK|ZUM SPIEL";
    this.qkl = "Gesamt Gewinn";
    this.ydi = "LГ„DT ...";
    this.ley = "LГ„DT HISTORIE ...";
    this.sar = "NICHT GENUG GUTHABEN!";
    this.wax = "Achtung";
    this.yvn = "Kommunikationsfehler";
    this.gff = "Sie haben eines der Limits erreicht!";
    this.hpg = "Sie haben die maximale Anzahl an Freispielen erreicht!";
    this.ftt = "Das Spiel wird beendet";
    this.gnz = "Das Spiel wird neu gestartet";
    this.cje = "Bonus!";
    this.ljk = "BONUS";
    this.qec = "GEWONNEN";
    this.ugg = "TOTAL";
    this.qab = "BITTE WARTEN ...";
    this.error = "FEHLER";
    this.emo = "FREEPLAY";
    this.nhh = "MEHR|SPIELE";
    this.gsx = "SPIEL ID";
    this.fuw = "Spielzeit";
    this.piu = "Letzten";
    this.qqw = "Spiele";
    this.uut = "GUTHABEN";
    this.audio = "AUDIO";
    this.asj = "MUSIK";
    this.rze = "SPEED";
    this.dtv = "VOLLBILD";
    this.okp = "VOLLBILD";
    this.language = "SPRACHE";
    this.bms = "Bei GerГ¤testГ¶rung keine Haftung.";
    this.xqa = "WEITER";
    this.klj = "Nicht noch einmal anzeigen";
    this.zkr = "AUTOSTART";
    this.lvo = "RISIKO";
    this.iml = "GEWINNPLAN";
    this.waa = "Sounds kГ¶nnen nicht geladen werden!";
    this.qjz = "Ressourcen fehlen!";
    this.ywc = "Ohne Ton spielen?";
    this.imo = "EINSTELL.";
    this.nkg = "Bitte drehen sie ihr GerГ¤t!";
    this.left = "LINKS";
    this.zzj = "RECHTS";
    this.kno = "AUTOM.";
    this.alh = "V A L U E";
    this.key = "INFO";
    this.fqm = "Bitte deaktivieren sie den PRIVATEN MODUS im Browser um das Spiel zu starten";
    this.goq = "Dieses Spiel ist optimiert fГјr Google Chrome.";
    this.mwb = "Bitte benutzen sie die aktuelle Version von";
    this.ayy = "Leider wird dieser Browser nicht unterstГјtzt.";
    this.gub = "Dieses Spiel kann nicht im Freispiel-Modus gestartet werden!";
    this.qsg = "Drehen sie ihr GerГ¤t in den Portraitmodus, um wie auf einem echten Automaten zu spielen!";
    this.zfs = "Passe die SpieloberflГ¤che deinen BedГјrfnissen an!";
    this.osa = "ZUSГ„TZLICHE INFORMATION FINDEN SIE IN DEN SPIELREGELN.";
    this.zrd = "Reality Check";
    this.lhl = "Du hast einen Reality Check angefordert.";
    this.esk = "DrГјcke HISTORIE um deine Spielhistorie anzuzeigen.";
    this.vji = "Spielpause";
    this.yqm = "Spiellimits";
    this.noe = "Selbsttest";
    this.wcc = "Keine Verbindung zum Gameserver!";
    this.bas = "Verbindungsversuche";
    this.jvf = "Anmeldung fehlgeschlagen!";
    this.kaa = "Es ist bereits eine Session aktiv!";
    this.cae = "SPIELREGELN";
    this.zji = "SPIELREGELN";
    this.mxo = "WГ„HLE DIE RICHTIGE FARBE UM DEN GEWINN ZU VERDOPPELN";
    this.hzb = "WГ„HLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.bxy = "DRГњCKE RISIKO FГњR EINE CHANCE DEN GEWINN ZU VERVIELFACHEN";
    this.cec = "Statistik";
    this.kxt = "Anzahl der Spiele";
    this.mne = "Gesamteinsatz";
    this.kxl = "Gesamtgewinn";
    this.maa = "Gesamtspielzeit";
    this.dby = "Ich habe die Nachricht gelesen";
    this.wvv = "SPIEL|BEENDEN";
    this.ok = "OK";
    this.rhf = "Historie";
    this.jzh = "Es existieren noch keine Spiele.";
    this.state = "STATUS";
    this.zjv = "Hauptspiel";
    this.gos = "Auto. Nehmen";
    this.qoz = "Genommen";
    this.jpq = "Bonusspins";
    this.ika = "Risiko";
    this.ehv = "Halb";
    this.fbv = "Respin";
    this.tje = "Bonus";
    this.lqk = "Erster Deal";
    this.szu = "Zweiter Deal";
    this.aet = "Dritter Deal";
    this.wfp = "ABBRUCH";
    this.xim = "AUTOSTART EINSTELLUNGEN";
    this.dig = "Anzahl der Spiele: ";
    this.zdp = "Autostart anhalten";
    this.uxt = "Guthaben niedriger als:";
    this.ote = "Guthaben hГ¶her als:";
    this.thh = "Gewinn hГ¶her als:";
    this.igq = "Der Autostart wird am Bonusbeginn gestoppt.";
    this.trw = "Auf Facebook teilen";
    this.elg = "DIE THEORETISCHE AUSZAHLUNG AN DEN SPIELER FГњR DIESES SPIEL BETRГ„GT XY."
}
gtv.prototype = new fkh;

function ban() {
    this.qby = "MINIMUM BANKO";
    this.ayt = "MAKS. BANKO";
    this.xoe = "MIN. BANKO";
    this.iva = "MAKS. BANKO";
    this.vpv = "BANKO";
    this.start = "BAЕћLAT";
    this.drj = "YARDIM";
    this.ghw = "KazanГ§ planД±";
    this.sii = "MENГњ";
    this.hal = "DAHA Г‡OK|OYUN";
    this.jdl = "DUR";
    this.isj = "KREDI";
    this.djp = "OYUN BД°TTД°";
    this.pbn = "KAZANDINIZ!";
    this.bbk = "BOL ЕћANSLAR!";
    this.win = "KAZANГ‡";
    this.eem = "SON KAZANГ‡";
    this.ojv = "kazanД±r";
    this.iej = "ALMAK";
    this.pfw = "ALMAK";
    this.fnv = "RIZIKO";
    this.apw = "OTOMATД°K|BAЕћLATMA";
    this.gpe = "YARI|RIZIKO";
    this.of = "VEREN";
    this.akx = "Г‡IKIЕћ";
    this.ztq = "BAЕћLAT TUЕћUNA BASINIZ";
    this.vvu = "BANKO SEГ‡Д°NД°Z";
    this.vqr = "ALMAK|1/2";
    this.rtz = "DEVAM ETMEK IГ‡IN KLAVYEDE HER HANGI BIR YERE BASINIZ";
    this.rml = "DEVAM ETMEK Д°Г‡Д°N EKRANA DOKUN";
    this.ret = "OYUNA|GERI";
    this.qkl = "Toplam kazanГ§";
    this.ydi = "YГњKLГњYOR ...";
    this.ley = "GEГ‡MIЕћI YГњKLГњYOR ...";
    this.sar = "YETERSД°Z KREDД°.";
    this.gff = "Limitlerin birine ulaЕџtД±nД±z!";
    this.wax = "Dikkat";
    this.yvn = "Д°letiЕџim hatasД±";
    this.hpg = "Maksimum bedava oyun sayД±sД±na ulaЕџmД±Еџ bulunuyorsunuz!";
    this.ftt = "Oyun sonlandД±rД±lД±yor";
    this.gnz = "Oyun yeniden baЕџlatД±lД±yor";
    this.cje = "Bedava oyun primi!";
    this.ljk = "PRД°M";
    this.qec = "KAZANDINIZ";
    this.ugg = "TOPLAM";
    this.qab = "LГњTFEN BEKLEYIN ...";
    this.error = "HATA";
    this.emo = "FREEPLAY";
    this.nhh = "DAHA Г‡OK OYUN";
    this.gsx = "OYUN ID";
    this.fuw = "OYUN SГњRESД°";
    this.piu = "Son";
    this.qqw = "oyun";
    this.uut = "BAKIYE";
    this.audio = "AUDIO";
    this.asj = "MГњZIK";
    this.rze = "HД±Z";
    this.dtv = "TAM EKRAN";
    this.okp = "TAM EKRAN";
    this.language = "LISAN";
    this.bms = "CIHAZ ARIZALANDIДћINDA MESULIYET KABUL EDILMEZ.";
    this.xqa = "DEVAM";
    this.klj = "Tekrar gГ¶sterme";
    this.zkr = "OTOMATД°K|BAЕћLATMA";
    this.lvo = "RIZIKO";
    this.iml = "KazanГ§ planД±";
    this.waa = "Sesler yГјklenemiyorlar!";
    this.qjz = "Kaynaklar eksik!";
    this.ywc = "Sessiz oynayacak mД±sД±nД±z?";
    this.imo = "AYARLAR";
    this.nkg = "LГјtfen cihazД±nД±nД± dГ¶ndГјrГјn!";
    this.left = "SOL";
    this.zzj = "SAДћ";
    this.kno = "OTOMATIK";
    this.alh = "V A L U E";
    this.key = "BILGI";
    this.fqm = "Oyunu baЕџlatmak iГ§in lГјtfen aДџ tarayД±cД±nД±zda Г–ZEL MOD'u kapatД±nД±z.";
    this.goq = "Bu oyun Google Chrome iГ§in optimize edilmiЕџtir.";
    this.mwb = "'nin gГјncel versiyonunu kullanД±n";
    this.ayy = "Maalesef bu aДџ tarayД±cД±sД± tam olarak desteklenmiyor.";
    this.gub = "Bu oyunun serbest modunda baЕџlatД±lmasД± mГјmkГјn deДџildir!";
    this.qsg = "CihazД±nД±zД± portre moduna Г§evirerek gerГ§ek bir otomatikte oynar gibi oynayД±n!";
    this.zfs = "Oyun yГјzeyini kendi ihtiyaГ§larД±na gГ¶re dГјzenle!";
    this.osa = "DAHA FAZLA BД°LGД°YД° OYUN KURALLARINDA BULABД°LД°RSД°NД°Z.";
    this.zrd = "Reality Check";
    this.lhl = "Reality Check talebinde bulundun.";
    this.esk = "Oyun geГ§miЕџini gГ¶rmek iГ§in GEГ‡MД°Ећ tuЕџuna bas.";
    this.vji = "Game break";
    this.yqm = "Game limits";
    this.noe = "Self test";
    this.wcc = "Oyun server'ine baДџlantД± yok!";
    this.bas = "BaДџlantД± denemeleri";
    this.jvf = "GiriЕџ hatasД±!";
    this.kaa = "Aktif bir oturumunuz bulunuyor!";
    this.cae = "OYUNUN KURALLARД±";
    this.zji = "OYUNUN|KURALLARД±";
    this.mxo = "DOДћRU RENGД° SEГ‡EREK KAZANCININ Д°KД°YE KATLARSIN";
    this.hzb = "DOДћRU KART RENGД°NД° SEГ‡EREK KAZANCINI DГ–RDE KATLARSIN.";
    this.bxy = "KAZANCI KATLAMA ЕћANSI Д°Г‡Д°N GAMBLE (RД°SK)";
    this.cec = "Д°statistik";
    this.kxt = "Toplam oyunlar";
    this.mne = "Toplam bankolar";
    this.kxl = "Toplam kazanГ§lar";
    this.maa = "Toplam oyun sГјresi";
    this.dby = "Bu mesajД± okudum.";
    this.wvv = "OYUNU|KAPAT";
    this.ok = "OK";
    this.rhf = "GEГ‡MД°Ећ";
    this.jzh = "HenГјz hiГ§ bir oyun yok.";
    this.state = "STATГњ";
    this.zjv = "Ana oyun";
    this.gos = "Otomatik olarak kazandД±nД±z";
    this.qoz = "ToplandД±";
    this.jpq = "Prim oyunlar";
    this.ika = "Riziko";
    this.ehv = "YarД±m";
    this.fbv = "Respin";
    this.tje = "Prim";
    this.lqk = "Д°lk anlaЕџma";
    this.szu = "Д°kinci anlaЕџma";
    this.aet = "ГњГ§ГјncГј anlaЕџma";
    this.wfp = "Д°PTAL";
    this.xim = "OTOMATIK BAЕћLAT AYARLARД±";
    this.dig = "Oyun sayД±sД±:";
    this.zdp = "Otomatik baЕџlatmayД± durdur";
    this.uxt = "Kredi bundan dГјЕџГјktГјr:";
    this.ote = "Kredi bundan yГјksektir:";
    this.thh = "KazanГ§ bundan yГјksektir:";
    this.igq = "Otomatik baЕџlatma prim baЕџlangД±cД±nda durduruluyor.";
    this.trw = "Facebook'ta paylaЕџ";
    this.elg = "OYUNCUYA TEORIK OLARAK Г–DENECEK MEBLAДћ % XY ORANД±NDADД±R."
}
ban.prototype = new fkh;

function har() {
    this.qby = "MINIMГЃLNГЌ SГЃZKA JE";
    this.ayt = "MAX. SГЃZKA";
    this.xoe = "MIN. SГЃZKA";
    this.iva = "MAX. SГЃZKA";
    this.vpv = "SГЃZKA";
    this.start = "START";
    this.drj = "POMOC";
    this.ghw = "VГќHERNГЌ PLГЃN";
    this.sii = "MENU";
    this.hal = "DALЕ ГЌ|HRY";
    this.jdl = "STOP";
    this.isj = "KREDIT";
    this.djp = "KONEC HRY";
    this.pbn = "VГЌTEZ!";
    this.bbk = "HODNE Е TESTГЌ!";
    this.win = "VГќHRA";
    this.eem = "POSL. VГќHRA";
    this.ojv = "vyhrГЎvГЎ";
    this.iej = "VEZMI";
    this.pfw = "VEZMI";
    this.fnv = "HRA";
    this.apw = "AUTO|START";
    this.gpe = "POLOVICNГЌ|HRA";
    this.of = "Z";
    this.akx = "VГќSTUP";
    this.ztq = "START HRY";
    this.vvu = "VYBRAT SГЃZKU";
    this.vqr = "POLOVINA";
    this.rtz = "POKRACUJ DOTEKEM OBRAZOVKY";
    this.rml = "PRO POKRAДЊOVГЃNГЌ SE DOTKNДљTE OBRAZOVKY";
    this.ret = "ZPET|DO HRY";
    this.qkl = "CelkovГЎ vГЅhra";
    this.ydi = "NAHRГЃVГЃM ...";
    this.ley = "NAHRГЃVГЃM HISTORII ...";
    this.sar = "NedostatecnГЅ kredit.";
    this.gff = "DosГЎhli jste jednoho z limitЕЇ!";
    this.wax = "VarovГЎnГ­";
    this.yvn = "Chyba komunikace";
    this.hpg = "DosГЎhli jste maximГЎlnГ­ho poДЌtu her zdarma!";
    this.ftt = "Hra se zavЕ™e";
    this.gnz = "Hra se restartuje";
    this.cje = "Bonus!";
    this.ljk = "BONUS";
    this.qec = "VYHRГЃL";
    this.ugg = "CELKOVГЃ";
    this.qab = "ДЊEKEJTE PROSГЌM ...";
    this.error = "ERROR";
    this.emo = "FREEPLAY";
    this.nhh = "DALЕ ГЌ HRY";
    this.gsx = "ID HRY";
    this.fuw = "HRACГЌ DOBA";
    this.piu = "PoslednГ­";
    this.qqw = "hry";
    this.uut = "MГЌT K DOBRU";
    this.audio = "AUDIO";
    this.asj = "MUZIKA";
    this.rze = "RYCHLOST";
    this.dtv = "FULLSCREEN";
    this.okp = "FULLSCREEN";
    this.language = "ЕEДЊ";
    this.bms = "PЕ™i poruЕЎe jsou vЕЎechny hry a vГЅhry neplatnГ©.";
    this.xqa = "POKRAДЊUJ";
    this.klj = "Nezobrazujte znovu";
    this.zkr = "AUTOSTART";
    this.lvo = "HRA";
    this.iml = "VГќHERNГЌ PLГЃN";
    this.waa = "Zvuk nelze nahrГЎt!";
    this.qjz = "ChybГ­ zdroje!";
    this.ywc = "HrГЎt bez zvuku?";
    this.imo = "NASTAVENГЌ";
    this.alh = "V A L U E";
    this.nkg = "OtoДЌte svГ© zaЕ™Г­zenГ­, prosГ­m!";
    this.left = "VLEVO";
    this.zzj = "VPRAVO";
    this.kno = "AUTO";
    this.key = "INFORMACE";
    this.fqm = "Abyste mohli hrГЎt hru, vypnД›te SOUKROMГќ REЕЅIM ve svГ©m prohlГ­ЕѕeДЌi, prosГ­m.";
    this.goq = "Tato hra je optimalizovanГЎ pro Google Chrome.";
    this.mwb = "PouЕѕijte aktuГЎlnГ­ verzi";
    this.ayy = "Tento prohlГ­ЕѕeДЌ nenГ­ bohuЕѕel plnД› podporovГЎn.";
    this.gub = "Tuto hru nelze spustit v reЕѕimu hry zdarma!";
    this.qsg = "OtoДЌte zaЕ™Г­zenГ­ tak, aby zobrazilo hru jako na skuteДЌnГ©m automatu!";
    this.zfs = "Nastavte rozhranГ­ hry svГЅm potЕ™ebГЎm!";
    this.osa = "VГЌCE INFORMACГЌ NALEZNETE V PRAVIDLECH HRY.";
    this.zrd = "Reality Check";
    this.lhl = "PoЕѕГЎdali jste o kontrolu reality.";
    this.esk = "Pro zobrazenГ­ vaЕЎГ­ hernГ­ historie stisknД›te HISTORIE.";
    this.vji = "Game break";
    this.yqm = "Game limits";
    this.noe = "Self test";
    this.wcc = "ЕЅГЎdnГ© pЕ™ipojenГ­ k hernГ­mu serveru!";
    this.bas = "Pokusy o pЕ™ipojenГ­";
    this.jvf = "PЕ™ihlГЎЕЎenГ­ se nezdaЕ™ilo!";
    this.kaa = "AktivnГ­ relace jiЕѕ existuje!";
    this.cae = "PRAVIDLA HRY";
    this.zji = "PRAVIDLA HRY";
    this.mxo = "VYBRAT SPRГЃVNOU BARVU KE ZDVOJNГЃSOBENГЌ VГќHRY";
    this.hzb = "VYBRAT SPRГЃVNOU BARVU KARTY KE ZДЊTYЕNГЃSOBENГЌ VГќHRY";
    this.bxy = "VSADIT NA Е ANCI ZVГќЕ IT VГќHRU";
    this.cec = "Statistika";
    this.kxt = "Celkem hry";
    this.mne = "Celkem sГЎzky";
    this.kxl = "Celkem vГЅhry";
    this.maa = "CelkovГЎ hracГ­ doba";
    this.dby = "ZprГЎvu jsem ДЌetl/a.";
    this.wvv = "UKONДЊIT|HRU";
    this.ok = "OK";
    this.rhf = "HISTORIE";
    this.jzh = "ЕЅГЎdnГ© odehranГ© hry.";
    this.state = "STATUS";
    this.zjv = "HlavnГ­ hra";
    this.gos = "Automaticky vybrГЎno";
    this.qoz = "VybrГЎno";
    this.jpq = "Bonusspins";
    this.ika = "Hra";
    this.ehv = "Polovina";
    this.fbv = "Respin";
    this.tje = "Bonus";
    this.lqk = "PrvnГ­ vyloЕѕenГ­";
    this.szu = "DruhГ© vyloЕѕenГ­";
    this.aet = "TЕ™etГ­ vyloЕѕenГ­";
    this.wfp = "ZRUЕ IT";
    this.xim = "NASTAVENГЌ AUTOMATICKГ‰HO STARTU";
    this.dig = "MnoЕѕstvГ­ her:";
    this.zdp = "Zastavit automatickГЅ start";
    this.uxt = "Kredit niЕѕЕЎГ­ neЕѕ:";
    this.ote = "Kredit vyЕЎЕЎГ­ neЕѕ:";
    this.thh = "VГЅhra vyЕЎЕЎГ­ neЕѕ:";
    this.igq = "AutomatickГЅ start se zastavГ­ na zaДЌГЎtku bonusu.";
    this.trw = "SdГ­let na Facebooku";
    this.elg = "TEORETICKГЃ NГЃVRATNOST HRГЃДЊI V TГ‰TO HЕE JE XY."
}
har.prototype = new fkh;

function rvm() {
    this.qby = "MIINIMUMPANUS ON";
    this.ayt = "MAX PANUS";
    this.xoe = "MIN PANUS";
    this.iva = "MAX PANUS";
    this.vpv = "PANUS";
    this.start = "START";
    this.drj = "ABI";
    this.ghw = "VГ•IDU TABEL";
    this.sii = "MENГњГњ";
    this.hal = "VALI|MГ„NG";
    this.jdl = "STOPP";
    this.isj = "KREDIIT";
    this.djp = "MГ„NG ON LГ•PPENUD!";
    this.pbn = "OLED VГ•ITNUD!";
    this.bbk = "SOOVIME EDU!";
    this.win = "VГ•IT";
    this.eem = "EELMINE VГ•IT";
    this.iej = "VГ•TA|VГ•IT";
    this.pfw = "VГ•TA VГ•IT";
    this.fnv = "DUUBEL|DAMINE";
    this.apw = "AUTO|START";
    this.gpe = "POOLITA|DUUBELDA";
    this.of = "OF";
    this.akx = "VГ„LJA";
    this.ztq = "ALUSTA MГ„NGU";
    this.vvu = "VALI PANUS";
    this.vqr = "POOLIK";
    this.rtz = "JГ„TKAMISEKS VAJUTAGE ГњKSKГ•IK MILLIST NUPPU";
    this.ret = "TAGASI|MГ„NGU";
    this.qkl = "KoguvГµit";
    this.sar = "POLE PIISAVALT KREDIITI.";
    this.cje = "Boonus!";
    this.ljk = "BOONUS";
    this.qab = "PALUN OODAKE ...";
    this.nhh = "Vali MГ¤ng";
    this.audio = "HELI";
    this.asj = "MUUSIKA";
    this.rze = "KIIRUS";
    this.dtv = "TГ„ISEKRAAN";
    this.okp = "TГ„ISEKRAAN";
    this.bms = "RIKKE KORRAL KГ•IK MГ„NGUD JA VГ•IDUD TГњHISTATAKSE.";
    this.fup = "MГ„NGU LГ•PP";
    this.language = "KEEL";
    this.cae = "MГ„NGUREEGLID";
    this.zji = "MГ„NGUREEGLID";
    this.ydi = "LAADIMINE ...";
    this.ley = "AJALOO LAADIMINE ...";
    this.gff = "Oled saavutanud Гјhe limiitidest!";
    this.wax = "Hoiatus";
    this.yvn = "Гњhenduse viga";
    this.hpg = "Te olete jГµudnud tasuta mГ¤ngude maksimaalse arvuni!";
    this.ftt = "MГ¤ng suletakse";
    this.gnz = "MГ¤ng taaskГ¤ivitatakse";
    this.rml = "JГ„TKAMISEKS PUUDUTA EKRAANI";
    this.imo = "SГ„TTED";
    this.alh = "V A L U E";
    this.nkg = "PГ¶Г¶rake oma seadet!";
    this.key = "INFO";
    this.fqm = "MГ¤ngu mГ¤ngimiseks keelake oma brauseris PRIVAATREЕЅIIM.";
    this.goq = "See mГ¤ng on optimeeritud Google Chrome jaoks.";
    this.mwb = "Palun kasutage praeguse versiooni";
    this.ayy = "Kahjuks ei toetata seda brauserit tГ¤ielikult.";
    this.gub = "Seda mГ¤ngu ei saa tasuta mГ¤ngimise reЕѕiimis kГ¤ivitada!";
    this.left = "VASAK";
    this.zzj = "PAREM";
    this.kno = "AUTOMAATNE";
    this.qec = "VГ•ITIS";
    this.ojv = "vГµidetud";
    this.ugg = "KOKKU";
    this.error = "VIGA";
    this.emo = "TASUTA MГ„NG";
    this.gsx = "MГ„NGU ID";
    this.fuw = "MГ„NGUAEG";
    this.piu = "Viimased";
    this.qqw = "mГ¤ngu";
    this.uut = "SISSEMAKSE";
    this.mxo = "VГ•IDU DUUBELDAMISEKS VALI Г•IGE VГ„RV";
    this.hzb = "VГ•IDU NELJAKORDISTAMISEKS VALI Г•IGE MAST";
    this.bxy = "RISKI, ET SUURENDADA OMA VГ•ITU";
    this.cec = "Statistika";
    this.kxt = "MГ¤nge kokku";
    this.mne = "Kogupanus";
    this.kxl = "KoguvГµit";
    this.maa = "MГ¤nguaeg kokku";
    this.dby = "Olen seda teadet lugenud.";
    this.wvv = "MГ„NGU|LГ•PP";
    this.rhf = "Ajalugu";
    this.jzh = "Гњhtegi mГ¤ngu ei ole mГ¤ngitud.";
    this.state = "OLEK";
    this.zjv = "PГµhimГ¤ng";
    this.gos = "Automaatne vГ¤ljavГµtt";
    this.qoz = "VГ¤lja vГµetud";
    this.jpq = "Bonusspins";
    this.ika = "Gamble";
    this.ehv = "Pool";
    this.fbv = "Respin";
    this.tje = "Boonus";
    this.lqk = "Esimene jagamine";
    this.szu = "Teine jagamine";
    this.aet = "Kolmas jagamine";
    this.xqa = "JГ„TKA";
    this.klj = "Г„ra seda enam nГ¤ita";
    this.zkr = "AUTOSTART";
    this.lvo = "DUUBEL DAMINE";
    this.iml = "VГ•IDU TABEL";
    this.waa = "Helisid ei saa laadida!";
    this.qjz = "Ressursid puuduvad!";
    this.ywc = "Soovid mГ¤ngida ilma helideta?";
    this.qsg = "Keera seade vertikaalasendisse, et mГ¤ngida nagu pГ¤ris mГ¤nguautomaadil!";
    this.zfs = "Kohanda mГ¤nguliidest vastavalt oma vajadustele!";
    this.osa = "VAATA LISAINFOT MГ„NGUREEGLITEST.";
    this.wfp = "TГњHISTA";
    this.xim = "AUTOMAATKГ„IVITUSE SГ„TTED";
    this.dig = "MГ¤ngude arv:";
    this.zdp = "Peata automaatkГ¤ivitus";
    this.uxt = "Krediit madalam kui:";
    this.ote = "Krediit kГµrgem kui:";
    this.thh = "VГµit suurem kui:";
    this.igq = "AutomaatkГ¤ivitus peatatakse boonuse alguses.";
    this.trw = "Jaga Facebookis";
    this.ok = "OK";
    this.zrd = "Reality Check";
    this.lhl = "Olete soovinud reaalsuskontrolli.";
    this.esk = "Oma mГ¤nguajaloo vaatamiseks vajutage AJALUGU.";
    this.vji = "Game break";
    this.yqm = "Game limits";
    this.noe = "Self test";
    this.wcc = "Puudub Гјhendus mГ¤nguserveriga!";
    this.bas = "Гњhenduskatsed";
    this.jvf = "Sisselogimine nurjus!";
    this.kaa = "Aktiivne seanss on juba olemas!";
    this.elg = "SELLE MГ„NGU MГ„NGIJA TEOREETILINE TULU ON XY."
}
rvm.prototype = new fkh;

function mjd() {
    this.qby = "О¤Оџ О•О›AО§О™ОЈО¤Оџ ОЈО¤ОџIО§О—ОњО‘ О•IОќО‘О™";
    this.ayt = "ОњEО“О™ОЈО¤Оџ ОЈО¤ОџIО§О—ОњО‘";
    this.xoe = "EО›О‘О§. ОЈО¤ОџО™О§О—ОњО‘";
    this.iva = "ОњО•О“. ОЈО¤ОџО™О§О—ОњО‘";
    this.vpv = "ОЈО¤ОџIО§О—ОњО‘";
    this.start = "EОќО‘ОЎОћО—";
    this.drj = "О’ОџHОО•О™О‘";
    this.ghw = "О IОќО‘ОљО‘ОЈ ОљО•ОЎО”О©Оќ";
    this.sii = "ОњО•ОќОџY";
    this.hal = "О О•ОЎО™ОЈ.|О О‘О™О§ОќIО”О™О‘";
    this.jdl = "ОЈО¤ОџО ";
    this.isj = "О IОЈО¤О©ОЈО—";
    this.djp = "TEО›ОџОЈ О О‘О™О§ОќО™О”О™ОџY!";
    this.pbn = "ОќО™ОљО—О¤О—ОЈ!";
    this.bbk = "ОљО‘О›О— О¤ОҐО§О—!";
    this.win = "ОљEОЎО”ОџОЈ";
    this.eem = "О¤О•О›О•ОҐО¤О‘IОџ ОљEОЎО”ОџОЈ";
    this.iej = "О О‘ОЎО‘О›О‘О’H";
    this.pfw = "О О‘ОЎО‘О›О‘О’H";
    this.fnv = "О¤О–ОџО“AОЎО©";
    this.apw = "О‘ОҐО¤OОњО‘О¤О—|EОќО‘ОЎОћО—";
    this.gpe = "О О‘ОЎО‘О›О‘О’H|О¤О–ОџО“AОЎО©";
    this.of = "О‘О O";
    this.akx = "EОћОџО”ОџОЈ";
    this.ztq = "О‘ОЎО§О™О–О•О™ О О‘О™О§ОќО™О”О™";
    this.vvu = "О•О О™О›О•ОћО¤О• ОЈО¤ОџО™О§О—ОњО‘";
    this.vqr = "О О‘ОЎО‘О›О‘О’H|1/2";
    this.rtz = "О AО¤О—ОЈО• EОќО‘ О О›HОљО¤ОЎОџ О“О™О‘ ОќО‘ ОЈОҐОќО•О§IОЈО•О™ОЈ";
    this.ret = "EО О™ОЈО¤ОЎОџО¦H|ОЈО¤Оџ|О О‘О™О§ОќIО”О™";
    this.qkl = "ОЈОҐОќОџО›О™ОљO ОљEОЎО”ОџОЈ";
    this.sar = "О”О•Оќ О‘ОЎОљО•О¤H О IОЈО¤О©ОЈО—.";
    this.cje = "ОњПЂПЊОЅОїП…Пѓ!";
    this.ljk = "ОњО OОќОџОҐОЈ";
    this.qab = "О О‘ОЎО‘ОљО‘О›О© О О•ОЎО™ОњEОќО•О¤О• ...";
    this.nhh = "О О•ОЎО™ОЈ.|О О‘О™О§ОќIО”О™О‘";
    this.audio = "О—О§ОџОЈ";
    this.asj = "ОњОџОҐОЈО™ОљО‰";
    this.rze = "О¤О‘О§YО¤О—О¤О‘";
    this.dtv = "О О›О—ОЎО—ОЈ ОџООџОќО—";
    this.okp = "О О›О—ОЎО—ОЈ|ОџООџОќО—";
    this.bms = "ОЈО• О О•ОЎО™О О¤О©ОЈО— О’О›О‘О’О—ОЈ О¤О—ОЈ ОЈОҐОЈОљО•ОҐО—ОЈ О”О•Оќ О‘ОќО‘О›О‘ОњО’О‘ОќОџОҐОњО• ОљО‘ОњО™О‘ О•ОҐООҐОќО—.";
    this.language = "О“О›О©ОЈОЈО‘";
    this.ugg = "ОЈYОќОџО›Оџ";
    this.cae = "ОљО‘ОќОЊОќО•П‚ О О‘О™О§ОќО™О”О™ОџОЋ";
    this.zji = "ОљО‘ОќОЊОќО•П‚|О О‘О™О§ОќО™О”О™ОџОЋ";
    this.ydi = "О¦ОџОЎО¤О©ОЈО— ...";
    this.ley = "О¦ОџОЎО¤О©ОЈО— О™ОЈО¤ОџОЎО™ОљОџОҐ...";
    this.gff = "ОћОµПЂОµПЃО¬ПѓО±П„Оµ ОєО¬ПЂОїО№Ої ПЊПЃО№Ої!";
    this.wax = "О ПЃОїОµО№ОґОїПЂОїОЇО·ПѓО·";
    this.yvn = "ОЈП†О¬О»ОјО± ОµПЂО№ОєОїО№ОЅП‰ОЅОЇО±П‚";
    this.hpg = "О¦П„О¬ПѓО±П„Оµ ПѓП„Ої О±ОЅПЋП„О±П„Ої ПЊПЃО№Ої ОґП‰ПЃОµО¬ОЅ ПЂО±О№П‡ОЅО№ОґО№ПЋОЅ!";
    this.ftt = "О¤Ої ПЂО±О№П‡ОЅОЇОґО№ ОёО± П„ОµПЃОјО±П„О№ПѓП„ОµОЇ";
    this.gnz = "О¤Ої ПЂО±О№П‡ОЅОЇОґО№ ОёО± ОµОєОєО№ОЅО·ОёОµОЇ ОµОє ОЅО­ОїП…";
    this.rml = "О‘О“О“О™ОћО¤О• О¤О—Оќ ОџООџОќО— О“О™О‘ ОќО‘ ОЈОҐОќО•О§О™ОЈО•О¤О•";
    this.imo = "ОЎОҐООњО™ОЈО•О™ОЈ";
    this.alh = "V A L U E";
    this.nkg = "О О±ПЃО±ОєО±О»ОїПЌОјОµ, ПЂОµПЃО№ПѓП„ПЃО­П€П„Оµ П„О· ПѓП…ПѓОєОµП…О® ПѓО±П‚!";
    this.key = "О О›О—ОЎОџО¦ОџОЎОЉО•П‚";
    this.fqm = "О О±ПЃО±ОєО±О»ОїПЌОјОµ, О±ПЂОµОЅОµПЃОіОїПЂОїО№О®ПѓП„Оµ П„О· О»ОµО№П„ОїП…ПЃОіОЇО± PRIVATE MODE П„ОїП… ПЂПЃОїОіПЃО¬ОјОјО±П„ОїП‚ ПЂОµПЃО№О®ОіО·ПѓО·П‚, ПЂПЃОїОєОµО№ОјО­ОЅОїП… ОЅО± ОµОєОєО№ОЅО·ОёОµОЇ П„Ої ПЂО±О№П‡ОЅОЇОґО№.";
    this.goq = "О‘П…П„ПЊ П„Ої ПЂО±О№П‡ОЅОЇОґО№ О­П‡ОµО№ ОІОµО»П„О№ПѓП„ОїПЂОїО№О·ОёОµОЇ ОіО№О± Google Chrome.";
    this.mwb = "О О±ПЃО±ОєО±О»ОїПЌОјОµ, П‡ПЃО·ПѓО№ОјОїПЂОїО№О®ПѓП„Оµ П„О·ОЅ П„ПЃО­П‡ОїП…ПѓО± О­ОєОґОїПѓО· П„ОїП…";
    this.ayy = "О”П…ПѓП„П…П‡ПЋП‚, О±П…П„ПЊ П„Ої ПЂПЃПЊОіПЃО±ОјОјО± ПЂОµПЃО№О®ОіО·ПѓО·П‚ ОґОµОЅ П…ПЂОїПѓП„О·ПЃОЇО¶ОµП„О±О№ ПЂО»О®ПЃП‰П‚.";
    this.gub = "О‘П…П„ПЊ П„Ої ПЂО±О№П‡ОЅОЇОґО№ ОґОµОЅ ОјПЂОїПЃОµОЇ ОЅО± ОґО№ОµОѕО±П‡ОёОµОЇ ПѓП„О· ОґП‰ПЃОµО¬ОЅ О»ОµО№П„ОїП…ПЃОіОЇО±!";
    this.left = "О‘ОЎО™ОЈО¤О•ОЎA";
    this.zzj = "О”О•ОћО™A";
    this.kno = "AОҐО¤OОњО‘О¤Оџ";
    this.qec = "ОљEОЎО”О™ОЈО•";
    this.ojv = "ОєОµПЃОґОЇО¶ОµО№";
    this.error = "ОЈО¦О‘О›ОњО‘";
    this.emo = "О”О©ОЎО•AОќ О О‘О™О§ОќIО”О™";
    this.gsx = "О¤О‘ОҐО¤ОџО¤О—О¤О‘ О О‘О™О§ОќО™О”О™ОџОҐ";
    this.fuw = "О§ОЎОџОќОџОЈ О О‘О™О§ОќО™О”О™ОџОҐ";
    this.piu = "О¤ОµО»ОµП…П„О±ОЇО±";
    this.qqw = "ПЂО±О№П‡ОЅОЇОґО№О±";
    this.uut = "О О™ОЈО¤О©О¤О™ОљO ОҐО OО›ОџО™О Оџ";
    this.mxo = "О•О О™О›О•ОћО¤О• О¤Оџ ОЈО©ОЈО¤Оџ О§ОЎО©ОњО‘ О“О™О‘ ОќО‘ О”О™О О›О‘ОЈО™О‘ОЈО•О¤О• О¤Оџ ОљО•ОЎО”ОџОЈ ОЈО‘ОЈ";
    this.hzb = "О•О О™О›О•ОћО¤О• О¤Оџ ОЈО©ОЈО¤Оџ О§ОЎО©ОњО‘ О¦ОҐО›О›ОџОҐ О“О™О‘ ОќО‘ О¤О•О¤ОЎО‘О О›О‘ОЈО™О‘ОЈО•О¤О• О¤Оџ ОљО•ОЎО”ОџОЈ ОЈО‘ОЈ";
    this.bxy = "О ОџОќО¤О‘ОЎО•О¤О• О“О™О‘ ОќО‘ О•О§О•О¤О• О¤О—Оќ О•ОҐОљО‘О™ОЎО™О‘ О ОџО›О›О‘О О›О‘ОЈО™О‘ОЈОњОџОҐ О¤ОџОҐ ОљО•ОЎО”ОџОҐОЈ ОЈО‘ОЈ";
    this.cec = "ОЈП„О±П„О№ПѓП„О№ОєО¬";
    this.kxt = "ОЈПЌОЅОїО»Ої ПЂО±О№П‡ОЅО№ОґО№ПЋОЅ";
    this.mne = "ОЈП…ОЅОїО»О№ОєПЊ ПЂОїОЅП„О¬ПЃО№ПѓОјО±";
    this.kxl = "ОЈП…ОЅОїО»О№ОєПЊ ОєО­ПЃОґОїП‚";
    this.maa = "ОЈП…ОЅОїО»О№ОєПЊП‚ П‡ПЃПЊОЅОїП‚ ПЂО±О№П‡ОЅО№ОґО№ОїПЌ";
    this.dby = "EП‡П‰ ОґО№О±ОІО¬ПѓОµО№ П„Ої ОјО®ОЅП…ОјО±.";
    this.wvv = "О›О—ОћО—|О О‘О™О§ОќО™О”О™ОџОҐ";
    this.rhf = "О™ОЈО¤ОџОЎО™ОљОџ";
    this.jzh = "О‘ОєПЊОјО· ОґОµОЅ П…ПЂО¬ПЃП‡ОµО№ ОєО¬ПЂОїО№Ої ПЂО±О№П‡ОЅОЇОґО№.";
    this.state = "ОљО‘О¤AОЈО¤О‘ОЈО—";
    this.zjv = "ОљПЌПЃО№Ої ПЂО±О№П‡ОЅОЇОґО№";
    this.gos = "О‘П…П„ПЊОјО±П„О· О»О®П€О·";
    this.qoz = "О•О»О®П†ОёО·ПѓО±ОЅ";
    this.jpq = "Bonusspins";
    this.ika = "О¤О¶ОїОіО¬ПЃП‰";
    this.ehv = "HОјО№ПѓП…";
    this.fbv = "Respin";
    this.tje = "ОњПЂПЊОЅОїП…Пѓ";
    this.lqk = "О ПЃПЋП„Ої ОјОїОЇПЃО±ПѓОјО±";
    this.szu = "О”ОµПЌП„ОµПЃОї ОјОїОЇПЃО±ПѓОјО±";
    this.aet = "О¤ПЃОЇП„Ої ОјОїОЇПЃО±ПѓОјО±";
    this.xqa = "ОЈОҐОќО€О§О•О™О‘";
    this.klj = "ОќО± ОјО·ОЅ ПЂПЃОїОІО»О·ОёОµОЇ ОѕО±ОЅО¬";
    this.zkr = "О‘ОҐО¤ОџОњО‘О¤О—|О•ОќО‘ОЎОћО—";
    this.lvo = "О¤О–ОџО“AОЎО©";
    this.iml = "О IОќО‘ОљО‘ОЈ ОљО•ОЎО”О©Оќ";
    this.waa = "О— П†ПЊПЃП„П‰ПѓО· О®П‡П‰ОЅ ОґОµОЅ ОµОЇОЅО±О№ ОµП†О№ОєП„О®!";
    this.qjz = "О›ОµОЇПЂОїП…ОЅ ПЂПЊПЃОїО№!";
    this.ywc = "О О±О№П‡ОЅОЇОґО№ П‡П‰ПЃОЇП‚ О®П‡Ої?";
    this.qsg = "О“П…ПЃОЇПѓП„Оµ П„О· ПѓП…ПѓОєОµП…О® ПѓО±П‚ ПѓОµ О»ОµО№П„ОїП…ПЃОіОЇО± ПЂОїПЃП„ПЃО­П„ОїП… ОіО№О± ОЅО± ПЂО±ОЇОѕОµП„Оµ ПЊПЂП‰П‚ ПѓОµ ОјО№О± ПЂПЃО±ОіОјО±П„О№ОєО® ОјО·П‡О±ОЅО® slot!";
    this.zfs = "О ПЃОїПѓО¬ПЃОјОїПѓОµ П„О·ОЅ ОµПЂО№П†О¬ОЅОµО№О± ОµПЃОіО±ПѓОЇО±П‚ ПѓП„О№П‚ ПЂПЃОїП„О№ОјО®ПѓОµО№П‚ ПѓОїП…!";
    this.osa = "О“О™О‘ О О•ОЎО™ОЈОЈОЊО¤О•ОЎО•ОЈ О О›О—ОЎОџО¦ОџОЎОЉО•ОЈ, О”О•ОЉО¤О• О¤ОџОҐОЈ ОљО‘ОќОџОќО™ОЈОњОџОЋОЈ О¤ОџОҐ О О‘О™О§ОќО™О”О™ОџОЋ.";
    this.wfp = "О‘ОљОЋОЎО©ОЈО—";
    this.xim = "ОЎОҐООњО‰ОЈО•О™П‚ AUTOSTART";
    this.dig = "О‘ПЃО№ОёОјПЊП‚ ПЂО±О№П‡ОЅО№ОґО№ПЋОЅ:";
    this.zdp = "О”О№О±ОєОїПЂО® autostart";
    this.uxt = "ОњОїОЅО¬ОґОµП‚ П‡О±ОјО·О»ПЊП„ОµПЃО± О±ПЂПЊ:";
    this.ote = "ОњОїОЅО¬ОґОµП‚ П…П€О·О»ПЊП„ОµПЃОµП‚ О±ПЂПЊ:";
    this.thh = "ОљО­ПЃОґОїП‚ П…П€О·О»ПЊП„ОµПЃОї О±ПЂПЊ:";
    this.igq = "О¤Ої autostart ОёО± ПѓП„О±ОјО±П„О®ПѓОµО№ ОјОµ П„Ої ОѕОµОєОЇОЅО·ОјО± П„ОїП… ОјПЂПЊОЅОїП…П‚.";
    this.trw = "ОљОїО№ОЅОїПЂОїОЇО·ПѓО· ПѓП„Ої Facebook";
    this.ok = "OK";
    this.zrd = "О­О»ОµОіП‡Ої ПЂПЃО±ОіОјО±П„О№ОєПЊП„О·П„О±П‚";
    this.lhl = "О–О·П„О®ПѓО±П„Оµ П„ОїОЅ О­О»ОµОіП‡Ої ПЂПЃО±ОіОјО±П„О№ОєПЊП„О·П„О±П‚.";
    this.esk = "О О±П„О®ПѓП„Оµ П„Ої О™ОЈО¤ОџОЎО™ОљОџ ОіО№О± ОЅО± ОґОµОЇП„Оµ П„Ої О№ПѓП„ОїПЃО№ОєПЊ П„П‰ОЅ ПЂО±О№П‡ОЅО№ОґО№ПЋОЅ ПѓО±П‚.";
    this.vji = "Game break";
    this.yqm = "Game limits";
    this.noe = "Self test";
    this.wcc = "О”ОµОЅ П…ПЂО¬ПЃП‡ОµО№ ПѓПЌОЅОґОµПѓО· ОјОµ П„Ої ОґО№О±ОєОїОјО№ПѓП„О® ПЂО±О№П‡ОЅО№ОґО№ОїПЌ!";
    this.bas = "О ПЃОїПѓПЂО¬ОёОµО№ОµП‚ ПѓПЌОЅОґОµПѓО·П‚";
    this.jvf = "О— ПѓПЌОЅОґОµПѓО· О±ПЂО­П„П…П‡Оµ!";
    this.kaa = "О— ОµОЅОµПЃОіО® ПѓП…ОЅОµОґПЃОЇО± П…ПЂО¬ПЃП‡ОµО№ О®ОґО·!";
    this.elg = "О— ОО•О©ОЎО—О¤О™ОљО‰ О•О О™ОЈО¤ОЎОџО¦О‰ ОЈО¤ОџОќ О О‘ОЉОљО¤О— О“О™О‘ О‘ОҐО¤ОЊ О¤Оџ О О‘О™О§ОќОЉО”О™ О•ОЉОќО‘О™ XY."
}
mjd.prototype = new fkh;

function znh() {
    this.qby = "РњРРќ. Р—РђР›РћР“ Р•";
    this.ayt = "РњРђРљРЎ. Р—РђР›РћР“";
    this.xoe = "РњРРќРРњ. Р—РђР›РћР“";
    this.iva = "РњРђРљРЎ. Р—РђР›РћР“";
    this.vpv = "Р—РђР›РћР“";
    this.start = "РЎРўРђР Рў";
    this.drj = "РџРћРњРћР©";
    this.ghw = "РџР›РђРќ РќРђ|РџР•Р§РђР›Р‘РРўР•";
    this.sii = "РњР•РќР®";
    this.hal = "РџРћР’Р•Р§Р•|РР“Р Р";
    this.jdl = "РЎРўРћРџ";
    this.isj = "РљР Р•Р”РРў";
    this.djp = "РР“Р РђРўРђ Р—РђР’РЄР РЁР";
    this.pbn = "РџР•Р§Р•Р›РРўР•!";
    this.bbk = "РЈРЎРџР•РҐ!";
    this.win = "РџР•Р§РђР›Р‘Рђ";
    this.eem = "РџРћРЎР›.РџР•Р§РђР›Р‘Рђ";
    this.iej = "РџР РР‘РР РђРќР•";
    this.pfw = "РџР РР‘РР РђРќР•";
    this.fnv = "Р”РЈР‘Р›РР РђРќР•";
    this.apw = "РђР’РўРћ|РЎРўРђР Рў";
    this.gpe = "Р”Р•Р›Р•РќР•|Р”РЈР‘Р›.";
    this.of = "РћРў";
    this.akx = "РР—РҐРћР”";
    this.ztq = "Р—РђРџРћР§РќР•РўР• РР“Р РђРўРђ";
    this.vvu = "РР—Р‘Р•Р Р•РўР• Р—РђР›РћР“";
    this.vqr = "Р”Р•Р›Р•РќР•";
    this.rtz = "РќРђРўРРЎРќР•РўР• РќРЇРљРћР™ Р‘РЈРўРћРќ Р—Рђ Р”Рђ РџР РћР”РЄР›Р–РРўР•";
    this.ret = "Р’Р РЄР©РђРќР•|РљРЄРњ|РР“Р РђРўРђ";
    this.qkl = "РћР‘Р©Рђ РџР•Р§РђР›Р‘Рђ";
    this.sar = "РќР• Р”РћРЎРўРђРўРЄР§Р•Рќ РљР Р•Р”РРў.";
    this.cje = "Р‘РѕРЅСѓСЃ!";
    this.ljk = "Р‘РћРќРЈРЎ";
    this.qab = "РњРћР›РЇ РР—Р§РђРљРђР™РўР• ...";
    this.nhh = "РџРѕРІРµС‡Рµ РРіСЂРё";
    this.rze = "РўРЈР Р‘Рћ";
    this.bms = "РџРћР’Р Р•Р”Рђ РђРќРЈР›РР Рђ Р’РЎРР§РљР Р—РђР›РђР“РђРќРРЇ Р РџР›РђР©РђРќРРЇ.";
    this.language = "Р•Р—РРљ";
    this.cae = "РџР РђР’РР›Рђ РќРђ РР“Р РђРўРђ";
    this.zji = "РџР РђР’РР›Рђ|РќРђ РР“Р РђРўРђ";
    this.ydi = "Р—РђР Р•Р–Р”РђРќР• ...";
    this.ley = "Р—РђР Р•Р–Р”РђРќР• РќРђ РРЎРўРћР РРЇ ...";
    this.gff = "Р”РѕСЃС‚РёРіРЅР° РµРґРёРЅ РѕС‚ Р»РёРјРёС‚РёС‚Рµ!";
    this.wax = "РџСЂРµРґСѓРїСЂРµР¶РґРµРЅРёРµ";
    this.yvn = "РљРѕРјСѓРЅРёРєР°С†РёРѕРЅРЅР° РіСЂРµС€РєР°";
    this.hpg = "Р”РѕСЃС‚РёРіРЅР°Р»Рё СЃС‚Рµ РјР°РєСЃРёРјР°Р»РЅРёСЏ Р±СЂРѕР№ Р±РµР·РїР»Р°С‚РЅРё РёРіСЂРё!";
    this.ftt = "РРіСЂР°С‚Р° С‰Рµ Р±СЉРґРµ Р·Р°С‚РІРѕСЂРµРЅР°";
    this.gnz = "РРіСЂР°С‚Р° С‰Рµ Р±СЉРґРµ СЂРµСЃС‚Р°СЂС‚РёСЂР°РЅР°";
    this.rml = "Р”РћРљРћРЎРќР•РўР• Р•РљР РђРќРђ, Р—Рђ Р”Рђ РџР РћР”РЄР›Р–РРўР•";
    this.imo = "РќРђРЎРўР РћР™РљР";
    this.alh = "V A L U E";
    this.nkg = "РњРѕР»СЏ, РІРєР»СЋС‡РµС‚Рµ СѓСЃС‚СЂРѕР№СЃС‚РІРѕС‚Рѕ!";
    this.key = "РРќР¤РћР РњРђР¦РРЇ";
    this.fqm = "РњРѕР»СЏ, РґРµР°РєС‚РёРІРёСЂР°Р№С‚Рµ Р§РђРЎРўР•Рќ Р Р•Р–РРњ РЅР° Р±СЂР°СѓР·СЉСЂР°, Р·Р° РґР° РёРіСЂР°РµС‚Рµ РёРіСЂР°С‚Р°.";
    this.goq = "РўР°Р·Рё РёРіСЂР° Рµ РѕРїС‚РёРјРёР·РёСЂР°РЅР° Р·Р° Google Chrome.";
    this.mwb = "РњРѕР»СЏ, РёР·РїРѕР»Р·РІР°Р№С‚Рµ С‚РµРєСѓС‰Р°С‚Р° РІРµСЂСЃРёСЏ РЅР°";
    this.ayy = "Р—Р° СЃСЉР¶Р°Р»РµРЅРёРµ С‚РѕР·Рё Р±СЂР°СѓР·СЉСЂ РЅРµ СЃРµ РїРѕРґРґСЉСЂР¶Р° РЅР°РїСЉР»РЅРѕ.";
    this.gub = "РўР°Р·Рё РёРіСЂР° РЅРµ РјРѕР¶Рµ РґР° СЃРµ СЃС‚Р°СЂС‚РёСЂР° РІ СЂРµР¶РёРј РЅР° СЃРІРѕР±РѕРґРЅР° РёРіСЂР°!";
    this.left = "Р›РЇР’Рђ";
    this.zzj = "Р”РЇРЎРќРђ";
    this.kno = "РђР’РўРћ";
    this.qec = "РЎРџР•Р§Р•Р›Р•РќРћ";
    this.ojv = "РїРµС‡Р°Р»Р±Рё";
    this.ugg = "РћР‘Р©Рћ";
    this.error = "Р“Р Р•РЁРљРђ";
    this.emo = "Р‘Р•Р—РџР›РђРўРќРђ РР“Р Рђ";
    this.audio = "Р—Р’РЈРљ";
    this.asj = "РњРЈР—РРљРђ";
    this.dtv = "РџРЄР›Р•Рќ Р•РљР РђРќ";
    this.okp = "РџРЄР›Р•Рќ|Р•РљР РђРќ";
    this.gsx = "РР” РќРђ РР“Р Рђ";
    this.fuw = "Р’Р Р•РњР• РќРђ РР“Р Рђ";
    this.piu = "РџРѕСЃР»РµРґРЅРё";
    this.qqw = "РёРіСЂРё";
    this.uut = "Р”Р•РџРћР—РРў";
    this.mxo = "РР—Р‘Р•Р Р РџР РђР’РР›РќРђРўРђ Р‘РћРЇ, Р—Рђ Р”Рђ РЈР”Р’РћРРЁ РџР•Р§РђР›Р‘РђРўРђ";
    this.hzb = "РР—Р‘Р•Р Р РџР РђР’РР›РќРђРўРђ Р‘РћРЇ, Р—Рђ Р”Рђ РЈР§Р•РўР’РћР РРЁ РџР•Р§РђР›Р‘РђРўРђ";
    this.bxy = "РР“Р РђР™ Р—Рђ РЁРђРќРЎ Р”Рђ РЈР’Р•Р›РР§РРЁ РџР•Р§РђР›Р‘РђРўРђ";
    this.cec = "РЎС‚Р°С‚РёСЃС‚РёРєР°";
    this.kxt = "РћР±С‰Рѕ РёРіСЂРё";
    this.mne = "РћР±С‰Рѕ Р·Р°Р»РѕРі";
    this.kxl = "РћР±С‰Рѕ РїРµС‡Р°Р»Р±Рё";
    this.maa = "РћР±С‰Рѕ РІСЂРµРјРµ РЅР° РёРіСЂР°";
    this.dby = "РџСЂРѕС‡РµС‚РѕС… С‚РѕРІР° СЃСЉРѕР±С‰РµРЅРёРµ.";
    this.wvv = "РР—РҐРћР”|РћРў|РР“Р РђРўРђ";
    this.rhf = "РРЎРўРћР РРЇ";
    this.jzh = "РќСЏРјР° РёРіСЂР°РЅРё РёРіСЂРё.";
    this.state = "РЎРўРђРўРЈРЎ";
    this.zjv = "РћСЃРЅРѕРІРЅР° РёРіСЂР°";
    this.gos = "РђРІС‚РѕРјР°С‚РёС‡РЅРѕ СЃСЉР±СЂР°РЅРё";
    this.qoz = "РЎСЉР±СЂР°РЅРё";
    this.jpq = "Р‘РѕРЅСѓСЃ-РёРіСЂРё";
    this.ika = "Р”СѓР±Р»РёСЂР°РЅРµ";
    this.ehv = "РџРѕР»РѕРІРёРЅР°";
    this.fbv = "Respin";
    this.tje = "Р‘РѕРЅСѓСЃ";
    this.lqk = "РџСЉСЂРІРѕ СЂР°Р·РґР°РІР°РЅРµ";
    this.szu = "Р’С‚РѕСЂРѕ СЂР°Р·РґР°РІР°РЅРµ";
    this.aet = "РўСЂРµС‚Рѕ СЂР°Р·РґР°РІР°РЅРµ";
    this.xqa = "РџР РћР”РЄР›Р–Р•РќРР•";
    this.klj = "РќРµ РїРѕРєР°Р·РІР°Р№ РѕС‚РЅРѕРІРѕ";
    this.zkr = "AUTOSTART";
    this.lvo = "Р”РЈР‘Р›РР РђРќР•";
    this.iml = "РџР›РђРќ РќРђ РџР•Р§РђР›Р‘РРўР•";
    this.waa = "Р—РІСѓРєСЉС‚ РЅРµ РјРѕР¶Рµ РґР° Р±СЉРґРµ Р·Р°СЂРµРґРµРЅ!";
    this.qjz = "Р›РёРїСЃРІР°С‚ СЂРµСЃСѓСЂСЃРё!";
    this.ywc = "РРіСЂР° Р±РµР· Р·РІСѓРє?";
    this.qsg = "Р—Р°РІСЉСЂС‚РµС‚Рµ СѓСЃС‚СЂРѕР№СЃС‚РІРѕС‚Рѕ СЃРё РІ РїРѕСЂС‚СЂРµС‚РµРЅ СЂРµР¶РёРј, Р·Р° РґР° РёРіСЂР°РµС‚Рµ РєР°С‚Рѕ РЅР° РёСЃС‚РёРЅСЃРєР° СЃР»РѕС‚ РјР°С€РёРЅР°!";
    this.zfs = "РќР°СЃС‚СЂРѕР№С‚Рµ РёРЅС‚РµСЂС„РµР№СЃР° РЅР° РёРіСЂР°С‚Р° СЃРїРѕСЂРµРґ СЃРІРѕРёС‚Рµ РЅСѓР¶РґРё!";
    this.osa = "Р—Рђ РџРћР’Р•Р§Р• РРќР¤РћР РњРђР¦РРЇ Р’РР–РўР• РџР РђР’РР›РђРўРђ РќРђ РР“Р РђРўРђ.";
    this.wfp = "РР—Р§РРЎРўР’РђРќР•";
    this.xim = "РќРђРЎРўР РћР™РљР РќРђ РђР’РўРћРњРђРўРР§РќРћРўРћ РЎРўРђР РўРР РђРќР•";
    this.dig = "Р‘СЂРѕР№ РёРіСЂРё:";
    this.zdp = "РЎРїСЂРё Р°РІС‚РѕРјР°С‚РёС‡РЅРёСЏ СЃС‚Р°СЂС‚";
    this.uxt = "РљСЂРµРґРёС‚ РїРѕ-РјР°Р»СЉРє РѕС‚:";
    this.ote = "РљСЂРµРґРёС‚ РїРѕ-РІРёСЃРѕРє РѕС‚:";
    this.thh = "РЎРїРµС‡РµР»Рё РїРѕРІРµС‡Рµ РѕС‚:";
    this.igq = "РђРІС‚РѕРјР°С‚РёС‡РЅРѕС‚Рѕ СЃС‚Р°СЂС‚РёСЂР°РЅРµ С‰Рµ Р±СЉРґРµ СЃРїСЂСЏРЅРѕ РІ РЅР°С‡Р°Р»РѕС‚Рѕ РЅР° Р±РѕРЅСѓСЃР°.";
    this.trw = "РЎРїРѕРґРµР»Рё РІСЉРІ Facebook";
    this.ok = "OK";
    this.zrd = "Reality Check";
    this.lhl = "Р—Р°СЏРІРёР»Рё СЃС‚Рµ РїСЂРѕРІРµСЂРєР° РЅР° СЂРµР°Р»РЅРѕСЃС‚С‚Р°.";
    this.esk = "РќР°С‚РёСЃРЅРµС‚Рµ РРЎРўРћР РРЇ, Р·Р° РґР° РІРёРґРёС‚Рµ С…СЂРѕРЅРѕР»РѕРіРёСЏС‚Р° СЃРё РЅР° РёРіСЂР°.";
    this.vji = "Game break";
    this.yqm = "Game limits";
    this.noe = "Self test";
    this.wcc = "РќСЏРјР° РІСЂСЉР·РєР° СЃ РіРµР№РјРёРЅРі СЃСЉСЂРІСЉСЂР°!";
    this.bas = "РћРїРёС‚Рё Р·Р° СЃРІСЉСЂР·РІР°РЅРµ";
    this.jvf = "РќРµСѓСЃРїРµС€РЅРѕ РІР»РёР·Р°РЅРµ!";
    this.kaa = "Р’РµС‡Рµ СЃСЉС‰РµСЃС‚РІСѓРІР° Р°РєС‚РёРІРЅР° СЃРµСЃРёСЏ!";
    this.elg = "РўР•РћР Р•РўРР§РќРђРўРђ Р’РЄР—Р’Р РђР©РђР•РњРћРЎРў РќРђ РР“Р РђР§Рђ Р—Рђ РўРђР—Р РР“Р Рђ Р• XY."
}
znh.prototype = new fkh;

function iqd() {
    this.qby = "бѓ›бѓбѓњбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ¤бѓЎбѓќбѓњбѓ бѓђбѓ бѓбѓЎ";
    this.ayt = "бѓ›бѓђбѓҐбѓЎбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ¤бѓЎбѓќбѓњбѓ";
    this.xoe = "бѓ›бѓбѓњбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ¤бѓЎбѓќбѓњбѓ";
    this.iva = "бѓ›бѓђбѓҐбѓЎбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ¤бѓЎбѓќбѓњбѓ";
    this.vpv = "бѓ¤бѓЎбѓќбѓњбѓ";
    this.start = "бѓ“бѓђбѓ¬бѓ§бѓ”бѓ‘бѓђ";
    this.drj = "бѓ“бѓђбѓ®бѓ›бѓђбѓ бѓ”бѓ‘бѓђ";
    this.ghw = "бѓ’бѓђбѓ“бѓђбѓ®бѓ“бѓбѓЎ бѓ›бѓ бѓбѓЄбѓ®бѓ•бѓ”бѓљбѓ";
    this.sii = "бѓ›бѓ”бѓњбѓбѓЈ";
    this.hal = "бѓ›бѓ”бѓўбѓ|бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ";
    this.jdl = "бѓ’бѓђбѓ©бѓ”бѓ бѓ”бѓ‘бѓђ";
    this.isj = "бѓ™бѓ бѓ”бѓ“бѓбѓўбѓ";
    this.djp = "бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓ“бѓђбѓЎбѓ бѓЈбѓљбѓ”бѓ‘бѓЈбѓљбѓбѓђ";
    this.pbn = "бѓ’бѓђбѓ›бѓђбѓ бѓЇбѓ•бѓ”бѓ‘бѓЈбѓљбѓ!";
    this.bbk = "бѓ’бѓбѓЎбѓЈбѓ бѓ•бѓ”бѓ‘бѓ— бѓ¬бѓђбѓ бѓ›бѓђбѓўбѓ”бѓ‘бѓђбѓЎ!";
    this.win = "бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.eem = "бѓ‘бѓќбѓљбѓќ бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.iej = "бѓЁбѓ”бѓ’бѓ бѓќбѓ•бѓ”бѓ‘бѓђ";
    this.pfw = "бѓЁбѓ”бѓ’бѓ бѓќбѓ•бѓ”бѓ‘бѓђ";
    this.fnv = "бѓђбѓ–бѓђбѓ бѓўбѓ";
    this.apw = "бѓђбѓ•бѓўбѓќ|бѓ“бѓђбѓ¬бѓ§бѓ”бѓ‘бѓђ";
    this.gpe = "бѓњбѓђбѓ®бѓ”бѓ•бѓђбѓ бѓ";
    this.akx = "бѓ’бѓђбѓ›бѓќбѓЎбѓ•бѓљбѓђ";
    this.ztq = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ“бѓђбѓ¬бѓ§бѓ”бѓ‘бѓђ";
    this.vvu = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓ¤бѓЎбѓќбѓњбѓ";
    this.vqr = "бѓњбѓђбѓ®бѓ”бѓ•бѓђбѓ бѓ";
    this.ret = "бѓ—бѓђбѓ›бѓђбѓЁбѓ–бѓ”|бѓ“бѓђбѓ‘бѓ бѓЈбѓњбѓ”бѓ‘бѓђ";
    this.qkl = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.wax = "бѓ’бѓђбѓ¤бѓ бѓ—бѓ®бѓбѓљбѓ”бѓ‘бѓђ";
    this.ugg = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ";
    this.qab = "бѓ’бѓ—бѓ®бѓќбѓ•бѓ—, бѓ“бѓђбѓ”бѓљбѓќбѓ“бѓќбѓ— ...";
    this.nhh = "бѓ›бѓ”бѓўбѓ бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ";
    this.rze = "бѓўбѓЈбѓ бѓ‘бѓќ";
    this.bms = "бѓ’бѓђбѓЈбѓ›бѓђбѓ бѓ—бѓђбѓќбѓ‘бѓбѓЎ бѓЁбѓ”бѓ›бѓ—бѓ®бѓ•бѓ”бѓ•бѓђбѓЁбѓ бѓ§бѓ•бѓ”бѓљбѓђ бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ бѓ“бѓђ бѓњбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ бѓ¬бѓђбѓбѓЁбѓљбѓ”бѓ‘бѓђ.";
    this.xqa = "бѓ’бѓђбѓ’бѓ бѓ«бѓ”бѓљбѓ”бѓ‘бѓђ";
    this.zkr = "бѓђбѓ•бѓўбѓќ бѓ“бѓђбѓ¬бѓ§бѓ”бѓ‘бѓђ";
    this.iml = "бѓ’бѓђбѓ“бѓђбѓ®бѓ“бѓбѓЎ бѓ›бѓ бѓбѓЄбѓ®бѓ•бѓ”бѓљбѓ";
    this.lvo = "бѓђбѓ–бѓђбѓ бѓўбѓ";
    this.left = "бѓ›бѓђбѓ бѓЄбѓ®бѓњбѓбѓ•";
    this.zzj = "бѓ›бѓђбѓ бѓЇбѓ•бѓњбѓбѓ•";
    this.kno = "бѓђбѓ•бѓўбѓќбѓ›бѓђбѓўбѓЈбѓ бѓђбѓ“";
    this.ok = "бѓ™бѓ";
    this.wfp = "бѓ’бѓђбѓЈбѓҐбѓ›бѓ”бѓ‘бѓђ";
    this.ika = "бѓђбѓ–бѓђбѓ бѓўбѓ";
    this.ehv = "бѓњбѓђбѓ®бѓ”бѓ•бѓђбѓ бѓ";
    this.cae = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ¬бѓ”бѓЎбѓ”бѓ‘бѓ";
    this.zji = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ¬бѓ”бѓЎбѓ”бѓ‘бѓ";
    this.cje = "BONUS!";
    this.ljk = "бѓ‘бѓќбѓњбѓЈбѓЎ";
    this.rtz = "бѓ“бѓђбѓђбѓ­бѓбѓ бѓ”бѓ— бѓњбѓ”бѓ‘бѓбѓЎбѓ›бѓбѓ”бѓ  бѓ¦бѓбѓљбѓђбѓ™бѓЎ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓ’бѓ бѓ«бѓ”бѓљбѓќбѓ—";
    this.sar = "бѓђбѓ бѓђ бѓЎбѓђбѓ™бѓ›бѓђбѓ бѓбѓЎбѓ бѓ™бѓ бѓ”бѓ“бѓбѓўбѓ.";
    this.rml = "бѓЁбѓ”бѓ”бѓ®бѓ”бѓ— бѓ”бѓ™бѓ бѓђбѓњбѓЎ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓ’бѓ бѓ«бѓ”бѓљбѓќбѓ—";
    this.ydi = "бѓ©бѓђбѓўбѓ•бѓбѓ бѓ—бѓ•бѓбѓЎ  ...";
    this.ley = "бѓ©бѓђбѓўбѓ•бѓбѓ бѓ—бѓ•бѓбѓЎ  бѓбѓЎбѓўбѓќбѓ бѓбѓђ  ...";
    this.yvn = "бѓЎбѓђбѓ™бѓќбѓ›бѓЈбѓњбѓбѓ™бѓђбѓЄбѓбѓќ бѓЁбѓ”бѓЄбѓ“бѓќбѓ›бѓђ";
    this.gff = "бѓ—бѓҐбѓ•бѓ”бѓњ бѓ”бѓ бѓ— бѓ”бѓ бѓ—бѓ бѓљбѓбѓ›бѓбѓўбѓ бѓђбѓ›бѓќбѓ¬бѓЈбѓ бѓ”бѓ—!";
    this.hpg = "бѓ—бѓҐбѓ•бѓ”бѓњ бѓЈбѓ¤бѓђбѓЎбѓќ бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓбѓЎ бѓ›бѓђбѓҐбѓЎбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ бѓђбѓќбѓ“бѓ”бѓњбѓќбѓ‘бѓбѓЎ бѓљбѓбѓ›бѓбѓўбѓ бѓЈбѓ™бѓ•бѓ” бѓђбѓ›бѓќбѓ¬бѓЈбѓ бѓ”бѓ—!";
    this.ftt = "бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓ“бѓђбѓЎбѓ бѓЈбѓљбѓ“бѓ”бѓ‘бѓђ";
    this.gnz = "бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓ’бѓђбѓ“бѓђбѓбѓўбѓ•бѓбѓ бѓ—бѓ”бѓ‘бѓђ";
    this.qec = "бѓ›бѓќбѓ’бѓ”бѓ‘бѓЈбѓљбѓбѓђ";
    this.ojv = "wins";
    this.alh = "V A L U E";
    this.error = "бѓЁбѓ”бѓЄбѓ“бѓќбѓ›бѓђ";
    this.emo = "бѓЈбѓ¤бѓђбѓЎбѓќ бѓ—бѓђбѓ›бѓђбѓЁбѓ";
    this.gsx = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ  бѓњбѓќбѓ›бѓ”бѓ бѓ";
    this.fuw = "бѓЎбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓќ бѓ“бѓ бѓќ";
    this.piu = "бѓ‘бѓќбѓљбѓќ ";
    this.qqw = "бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ";
    this.uut = "бѓ“бѓ”бѓћбѓќбѓ–бѓбѓўбѓ";
    this.audio = "бѓ®бѓ›бѓђ";
    this.asj = "бѓ›бѓЈбѓЎбѓбѓ™бѓђ";
    this.dtv = "бѓЎбѓ бѓЈбѓљбѓ бѓ”бѓ™бѓ бѓђбѓњбѓ";
    this.okp = "бѓЎбѓ бѓЈбѓљбѓ бѓ”бѓ™бѓ бѓђбѓњбѓ";
    this.language = "бѓ”бѓњбѓбѓЎ";
    this.klj = "бѓ›бѓќбѓ›бѓђбѓ•бѓђбѓљбѓЁбѓ бѓђбѓ¦бѓђбѓ  бѓ©бѓ•бѓ”бѓњбѓ”бѓ‘бѓђ";
    this.waa = "бѓ®бѓ›бѓбѓЎ бѓ©бѓђбѓўбѓ•бѓбѓ бѓ—бѓ•бѓђ бѓ•бѓ”бѓ  бѓ®бѓ”бѓ бѓ®бѓ“бѓ”бѓ‘бѓђ!";
    this.qjz = "бѓђбѓ бѓђбѓЎбѓђбѓ™бѓ›бѓђбѓ бѓбѓЎбѓ бѓ бѓ”бѓЎбѓЈбѓ бѓЎбѓ”бѓ‘бѓ!";
    this.ywc = "бѓ’бѓбѓњбѓ“бѓђбѓ— бѓ®бѓ›бѓбѓЎ бѓ’бѓђбѓ бѓ”бѓЁбѓ” бѓбѓ—бѓђбѓ›бѓђбѓЁбѓќбѓ—?";
    this.nkg = "бѓ’бѓ—бѓ®бѓќбѓ•бѓ— бѓ›бѓќбѓђбѓ‘бѓ бѓЈбѓњбѓќбѓ— бѓ—бѓҐбѓ•бѓ”бѓњбѓ бѓ›бѓќбѓ¬бѓ§бѓќбѓ‘бѓбѓљбѓќбѓ‘бѓђ!";
    this.fqm = "бѓ’бѓ—бѓ®бѓќбѓ•бѓ—, бѓ’бѓђбѓ›бѓќбѓ бѓ—бѓќбѓ— бѓћбѓбѓ бѓђбѓ“бѓ бѓ бѓ”бѓџбѓбѓ›бѓ бѓ—бѓҐбѓ•бѓ”бѓњбѓЎ бѓ‘бѓ бѓђбѓЈбѓ–бѓ”бѓ бѓЁбѓ бѓ бѓќбѓ› бѓЁбѓ”бѓ«бѓљбѓќбѓ— бѓ—бѓђбѓ›бѓђбѓЁбѓ.";
    this.goq = "бѓ”бѓЎ бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓќбѓћбѓўбѓбѓ›бѓбѓ–бѓбѓ бѓ”бѓ‘бѓЈбѓљбѓбѓђ Google Chrome-бѓбѓЎбѓђбѓ—бѓ•бѓбѓЎ.";
    this.unv = "бѓ’бѓ—бѓ®бѓќбѓ•бѓ— бѓ’бѓђбѓ›бѓќбѓбѓ§бѓ”бѓњбѓќбѓ—";
    this.sqi = "-бѓбѓЎ бѓ›бѓбѓ›бѓ“бѓбѓњбѓђбѓ бѓ” бѓ•бѓ”бѓ бѓЎбѓбѓђ";
    this.ayy = "бѓЎбѓђбѓ›бѓ¬бѓЈбѓ®бѓђбѓ бѓќбѓ“, бѓђбѓ› бѓ‘бѓ бѓђбѓЈбѓ–бѓ”бѓ бѓ–бѓ” бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓЎбѓ бѓЈбѓљбѓђбѓ“ бѓ•бѓ”бѓ  бѓ®бѓ”бѓ бѓ®бѓ“бѓ”бѓ‘бѓђ.";
    this.gub = "бѓђбѓ› бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓЈбѓ¤бѓђбѓЎбѓќбѓ“ бѓЁбѓ”бѓЈбѓ«бѓљбѓ”бѓ‘бѓ”бѓљбѓбѓђ!";
    this.qsg = "бѓ©бѓђбѓ бѓ—бѓ”бѓ— бѓ—бѓҐбѓ•бѓ”бѓњбѓ бѓ›бѓќбѓ¬бѓ§бѓќбѓ‘бѓбѓљбѓќбѓ‘бѓђ бѓћбѓќбѓ бѓўбѓ бѓ”бѓўбѓбѓЎ бѓ бѓ”бѓџбѓбѓ›бѓ–бѓ” бѓ бѓќбѓ› бѓбѓ—бѓђбѓ›бѓђбѓЁбѓќбѓ— бѓбѓЎбѓ” бѓ—бѓбѓ—бѓҐбѓќбѓЎ бѓ бѓ”бѓђбѓљбѓЈбѓ  бѓЎбѓљбѓќбѓў бѓ›бѓќбѓ¬бѓ§бѓќбѓ‘бѓбѓљбѓќбѓ‘бѓђбѓ–бѓ” бѓ—бѓђбѓ›бѓђбѓЁбѓќбѓ‘бѓ“бѓ”бѓ—!";
    this.zfs = "бѓ›бѓќбѓђбѓ бѓ’бѓ”бѓ— бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓбѓњбѓўбѓ”бѓ бѓ¤бѓ”бѓбѓЎбѓ бѓ—бѓҐбѓ•бѓ”бѓњбѓЎ бѓЎбѓђбѓ­бѓбѓ бѓќбѓ”бѓ‘бѓ”бѓ‘бѓЎ!";
    this.mxo = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓЎбѓ¬бѓќбѓ бѓ бѓ¤бѓ”бѓ бѓ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓќбѓ бѓ›бѓђбѓ’бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.hzb = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓ™бѓђбѓ бѓўбѓбѓЎ бѓЎбѓ¬бѓќбѓ бѓ бѓ¤бѓ”бѓ бѓ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓќбѓ—бѓ®бѓ›бѓђбѓ’бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.bxy = "бѓ“бѓђбѓ“бѓ”бѓ— бѓ¤бѓЎбѓќбѓњбѓ бѓ бѓќбѓ› бѓ’бѓђбѓ–бѓђбѓ бѓ“бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓбѓЎ бѓЁбѓђбѓњбѓЎбѓ";
    this.kxt = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ";
    this.mne = "бѓ¤бѓЎбѓќбѓњбѓ бѓ›бѓ—бѓљбѓбѓђбѓњбѓђбѓ“";
    this.kxl = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.maa = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ бѓЎбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓќ бѓ“бѓ бѓќ";
    this.dby = "бѓ›бѓ” бѓ’бѓђбѓ•бѓ”бѓЄбѓђбѓњбѓ бѓђбѓ› бѓ’бѓ–бѓђбѓ•бѓњбѓбѓљбѓЎ.";
    this.wvv = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ|бѓ“бѓђбѓ›бѓ—бѓђбѓ•бѓ бѓ”бѓ‘бѓђ";
    this.rhf = "бѓ›бѓќбѓ•бѓљбѓ”бѓњбѓ”бѓ‘бѓбѓЎ бѓ©бѓђбѓњбѓђбѓ¬бѓ”бѓ бѓ";
    this.jzh = "бѓњбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ бѓђбѓ  бѓђбѓ бѓбѓЎ.";
    this.state = "бѓ›бѓ“бѓ’бѓќбѓ›бѓђбѓ бѓ”бѓќбѓ‘бѓђ";
    this.zjv = "бѓ«бѓбѓ бѓбѓ—бѓђбѓ“бѓ бѓ—бѓђбѓ›бѓђбѓЁбѓ";
    this.gos = "бѓђбѓ•бѓўбѓќбѓ›бѓђбѓўбѓЈбѓ бѓђбѓ“ бѓЁбѓ”бѓ’бѓ бѓќбѓ•бѓ”бѓ‘бѓђ";
    this.qoz = "бѓђбѓ¦бѓ”бѓ‘бѓЈбѓљ бѓбѓҐбѓњбѓђ";
    this.lqk = "бѓћбѓбѓ бѓ•бѓ”бѓљбѓ бѓ“бѓђбѓ бѓбѓ’бѓ”бѓ‘бѓђ";
    this.szu = "бѓ›бѓ”бѓќбѓ бѓ” бѓ“бѓђбѓ бѓбѓ’бѓ”бѓ‘бѓђ";
    this.aet = "бѓ›бѓ”бѓЎбѓђбѓ›бѓ” бѓ“бѓђбѓ бѓбѓ’бѓ”бѓ‘бѓђ";
    this.xim = "бѓђбѓ•бѓўбѓќбѓ’бѓђбѓ›бѓЁбѓ•бѓ”бѓ‘бѓбѓЎ бѓћбѓђбѓ бѓђбѓ›бѓ”бѓўбѓ бѓ”бѓ‘бѓ";
    this.dig = "бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓбѓЎ бѓ бѓђбѓќбѓ“бѓ”бѓњбѓќбѓ‘бѓђ:";
    this.zdp = "бѓЁбѓ”бѓђбѓ©бѓ”бѓ бѓ”бѓ— бѓђбѓ•бѓўбѓќбѓ’бѓђбѓ›бѓЁбѓ•бѓ”бѓ‘бѓ";
    this.uxt = "бѓ™бѓ бѓ”бѓ“бѓбѓўбѓ бѓЈбѓ¤бѓ бѓќ бѓ“бѓђбѓ‘бѓђбѓљбѓ бѓ•бѓбѓ“бѓ бѓ”:";
    this.ote = "бѓ™бѓ бѓ”бѓ“бѓбѓўбѓ бѓЈбѓ¤бѓ бѓќ бѓ›бѓђбѓ¦бѓђбѓљбѓ бѓ•бѓбѓ“бѓ бѓ”:";
    this.thh = "бѓ›бѓќбѓбѓ’бѓ”бѓ— бѓЈбѓ¤бѓ бѓќ бѓ›бѓ”бѓўбѓ бѓ•бѓбѓ“бѓ бѓ”:";
    this.igq = "бѓђбѓ•бѓўбѓќбѓ’бѓђбѓ›бѓЁбѓ•бѓ”бѓ‘бѓ бѓЁбѓ”бѓ©бѓ”бѓ бѓ“бѓ”бѓ‘бѓђ бѓ‘бѓќбѓњбѓЈбѓЎбѓбѓЎ бѓ“бѓђбѓЎбѓђбѓ¬бѓ§бѓбѓЎбѓЁбѓ.";
    this.trw = "бѓ’бѓђбѓђбѓ–бѓбѓђбѓ бѓ”бѓ— бѓ¤бѓ”бѓбѓЎбѓ‘бѓЈбѓҐбѓ–бѓ”";
    this.cec = "бѓЎбѓўбѓђбѓўбѓбѓЎбѓўбѓбѓ™бѓђ";
    this.of = "/";
    this.jpq = "Bonus бѓ—бѓђбѓ›бѓђбѓЁбѓ";
    this.tje = "бѓ‘бѓќбѓњбѓЈбѓЎбѓ";
    this.key = "бѓбѓњбѓ¤бѓќбѓ бѓ›бѓђбѓЄбѓбѓђ";
    this.imo = "бѓћбѓђбѓ бѓђбѓ›бѓ”бѓўбѓ .";
    this.fbv = "бѓ®бѓ”бѓљбѓђбѓ®бѓљбѓђ бѓ“бѓђбѓўбѓ бѓбѓђбѓљбѓ”бѓ‘бѓбѓЎ";
    this.osa = "бѓ›бѓ”бѓўбѓ бѓбѓњбѓ¤бѓќбѓ бѓ›бѓђбѓЄбѓбѓбѓЎбѓђбѓ—бѓ•бѓбѓЎ, бѓбѓ®бѓбѓљбѓ”бѓ— бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ¬бѓ”бѓЎбѓ”бѓ‘бѓ.";
    this.zrd = "бѓ бѓ”бѓђбѓљбѓќбѓ‘бѓбѓЎ бѓЁбѓ”бѓ›бѓќбѓ¬бѓ›бѓ”бѓ‘бѓђ";
    this.lhl = "бѓ—бѓҐбѓ•бѓ”бѓњ бѓ›бѓќбѓбѓ—бѓ®бѓќбѓ•бѓ”бѓ— бѓ бѓ”бѓђбѓљбѓќбѓ‘бѓбѓЎ бѓЁбѓ”бѓ›бѓќбѓ¬бѓ›бѓ”бѓ‘бѓђ.";
    this.esk = "бѓ—бѓҐбѓ•бѓ”бѓњбѓ бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓбѓЎбѓўбѓќбѓ бѓбѓбѓЎ бѓЎбѓђбѓњбѓђбѓ®бѓђбѓ•бѓђбѓ“ бѓ“бѓђбѓђбѓ­бѓбѓ бѓ”бѓ— бѓ›бѓќбѓ•бѓљбѓ”бѓњбѓ”бѓ‘бѓбѓЎ бѓ©бѓђбѓњбѓђбѓ¬бѓ”бѓ бѓ-бѓЎ.";
    this.vji = "Game break";
    this.yqm = "Game limits";
    this.noe = "Self test";
    this.wcc = "бѓЎбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓќ бѓЎбѓ”бѓ бѓ•бѓ”бѓ бѓ–бѓ” бѓ“бѓђбѓ™бѓђбѓ•бѓЁбѓбѓ бѓ”бѓ‘бѓђ бѓ•бѓ”бѓ  бѓ›бѓќбѓ®бѓ”бѓ бѓ®бѓ“бѓђ!";
    this.bas = "бѓ“бѓђбѓ™бѓђбѓ•бѓЁбѓбѓ бѓ”бѓ‘бѓбѓЎ бѓ›бѓЄбѓ“бѓ”бѓљбѓќбѓ‘бѓ”бѓ‘бѓ";
    this.jvf = "бѓЁбѓ”бѓЎбѓ•бѓљбѓђ бѓ•бѓ”бѓ  бѓ›бѓќбѓ®бѓ”бѓ бѓ®бѓ“бѓђ!";
    this.kaa = "бѓђбѓҐбѓўбѓбѓЈбѓ бѓ бѓЎбѓ”бѓЎбѓбѓђ бѓЈбѓ™бѓ•бѓ” бѓђбѓ бѓЎбѓ”бѓ‘бѓќбѓ‘бѓЎ!";
    this.elg = "бѓ—бѓ”бѓќбѓ бѓбѓЈбѓљбѓ бѓ“бѓђбѓ‘бѓ бѓЈбѓњбѓ”бѓ‘бѓђ бѓ›бѓќбѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ–бѓ” бѓђбѓ› бѓ—бѓђбѓ›бѓђбѓЁбѓЁбѓ бѓђбѓ бѓбѓЎ XY."
}
iqd.prototype = new fkh;

function fqv() {
    this.qby = "A MINIMUM TГ‰T";
    this.ayt = "MAXIMUM TГ‰T";
    this.xoe = "MIN. TГ‰T";
    this.iva = "MAX. TГ‰T";
    this.vpv = "TГ‰T";
    this.start = "START";
    this.drj = "SГљGГ“";
    this.ghw = "SГљGГ“";
    this.sii = "MENГњ";
    this.hal = "MENГњ";
    this.jdl = "STOP";
    this.isj = "HITEL";
    this.djp = "A JГЃTГ‰KNAK VГ‰GE";
    this.pbn = "NYEREMГ‰NY!";
    this.bbk = "SOK SZERENCSГ‰T!";
    this.win = "NYEREMГ‰NY";
    this.eem = "UTOLSГ“ NYER.";
    this.iej = "FELГЌR";
    this.pfw = "FELГЌR";
    this.fnv = "SZORZГЃS";
    this.apw = "AUTO|START";
    this.gpe = "FELEZГ‰S";
    this.akx = "KILГ‰PГ‰S";
    this.ztq = "START";
    this.vvu = "VГЃLASSZON TГ‰TET";
    this.vqr = "FELEZГ‰S";
    this.ret = "VISSZA A|JГЃTГ‰KHOZ";
    this.qkl = "Г–sszes NyeremГ©ny";
    this.wax = "FigyelmeztetГ©s";
    this.ugg = "Г–SSZES";
    this.qab = "KГ‰REM VГЃRJON ...";
    this.nhh = "MenГј";
    this.rze = "SEBESSГ‰G";
    this.bms = "A MEGHIBГЃSODГЃS Г‰RVГ‰NYTELENГЌT MINDEN JГЃTГ‰KOT Г‰S KIFIZETГ‰ST.";
    this.xqa = "TOVГЃBB";
    this.zkr = "AUTOSTART";
    this.iml = "SГљGГ“";
    this.lvo = "SZORZГЃS";
    this.left = "BAL";
    this.zzj = "JOBB";
    this.ok = "OK";
    this.wfp = "MГ‰GSEM";
    this.ika = "SzorzГЎs";
    this.ehv = "FelezГ©s";
    this.cae = "JГЃTГ‰KSZABГЃLYOK";
    this.zji = "JГЃTГ‰KSZABГЃLYOK";
    this.cje = "BГіnusz!";
    this.ljk = "BГ“NUSZ";
    this.rtz = "A FOLYTATГЃSHOZ NYOMJON MEG EGY GOMBOT";
    this.sar = "NINCS ELГ‰G HITEL";
    this.alh = "V A L U E";
    this.ojv = "nyeremГ©nyek";
    this.of = "/";
    this.rml = "Г‰RINTSE MEG A KГ‰PERNYЕђT A FOLYTATГЃSHOZ";
    this.ydi = "BETГ–LTГ‰SE ...";
    this.ley = "JГЃTГ‰K TГ–RTГ‰NET BETГ–LTГ‰SE ...";
    this.yvn = "KommunikГЎciГіs hiba";
    this.gff = "ElГ©rte az egyik limitet!";
    this.hpg = "ElГ©rte a szabad jГЎtГ©kok maximum szГЎmГЎt!";
    this.ftt = "A jГЎtГ©k megГЎllГ­tva";
    this.gnz = "JГЎtГ©k Гєjraindul";
    this.qec = "NYERT";
    this.error = "HIBA";
    this.emo = "FREEPLAY";
    this.kno = "AUTO";
    this.gsx = "JГЃTГ‰K ID";
    this.fuw = "JГЎtГ©k IdЕ‘";
    this.piu = "utolsГі";
    this.qqw = "jГЎtГ©k";
    this.uut = "HITEL";
    this.audio = "HANG";
    this.asj = "ZENE";
    this.dtv = "TELJES KГ‰PERNYЕђ";
    this.okp = "TELJES KГ‰PERNYЕђ";
    this.language = "NYELV";
    this.klj = "Ne mutassa mГ©gegyszer";
    this.waa = "A hangot nem lehet betГ¶lteni!";
    this.qjz = "ForrГЎsok hiГЎnyoznak!";
    this.ywc = "JГЎtГ©k hang nГ©lkГјl?";
    this.imo = "BEГЃLLГЌTГЃS";
    this.nkg = "KГ©rjГјk fordГ­tsa el a kГ©szГјlГ©ket!";
    this.key = "INFГ“";
    this.fqm = "A jГЎtГ©khoz kГ©rem tiltsa le a PrivГЎt BГ¶ngГ©szГ©s mГіdot a bГ¶ngГ©szЕ‘jГ©ben.";
    this.goq = "Ez a jГЎtГ©k Google Chrome bГ¶ngГ©szЕ‘re van optimalizГЎlva.";
    this.unv = "KГ©rjГјk hasznГЎlja a(z)";
    this.sqi = " legГєjabb verziГіjГЎt!";
    this.ayy = "Sajnos ez a bГ¶ngГ©szЕ‘ nem teljesen tГЎmogatott.";
    this.gub = "Ez a jГЎtГ©k nem indГ­thatГі FreePlay mГіdban!";
    this.qsg = "FordГ­tsa a kГ©szГјlГ©kГ©t ГЎllГі mГіdba, hogy Гєgy jГЎtsszon, mint egy igazi nyerЕ‘gГ©pen!";
    this.zfs = "ГЃllГ­tsa be a jГЎtГ©k felГјletГ©t az Г–n igГ©nyeinek megfelelЕ‘en!";
    this.mxo = "VГЃLASSZA KI A MEGFELELЕђ SZГЌNT, HOGY MEGDUPLГЃZZA A NYEREMГ‰NYT";
    this.hzb = "VГЃLASSZA KI A MEGFELELЕђ KГЃRTYASZГЌNT, HOGY MEGNГ‰GYSZEREZZE A NYEREMГ‰NYT";
    this.bxy = "SZORZГЃS EGY LEHETЕђSГ‰G, HOGY NГ–VELJE A NYEREMГ‰NYT";
    this.cec = "Statisztika";
    this.kxt = "Г–sszes JГЎtГ©k";
    this.mne = "Г–sszes TГ©t";
    this.kxl = "Г–sszes NyeremГ©ny";
    this.maa = "Г–sszes JГЎtГ©k IdЕ‘";
    this.dby = "Elolvastam az Гјzenetet.";
    this.wvv = "KILГ‰PГ‰S";
    this.rhf = "ElЕ‘zmГ©nyek";
    this.jzh = "Nincsenek jГЎtГ©kok.";
    this.state = "STГЃTUSZ";
    this.zjv = "FЕ‘ JГЎtГ©k";
    this.gos = "Autom. FelГ­rГЎs";
    this.qoz = "FelГ­rva";
    this.jpq = "BГіnusz jГЎtГ©k";
    this.fbv = "Respin";
    this.tje = "BГіnusz";
    this.lqk = "ElsЕ‘ LeosztГЎs";
    this.szu = "MГЎsodik LeosztГЎs";
    this.aet = "Harmadik LeosztГЎs";
    this.xim = "AUTOSTART BEГЃLLГЌTГЃS";
    this.dig = "JГЎtГ©kok szГЎma:";
    this.zdp = "Stop autostart";
    this.uxt = "A hitel kevesebb, mint:";
    this.ote = "A hitel tГ¶bb, mint:";
    this.thh = "A nyeremГ©ny tГ¶bb, mint:";
    this.igq = "Az AUTOSTART funkciГі kikapcsolГіdik a bГіnusz jГЎtГ©k kezdetГ©n.";
    this.trw = "MegosztГЎs a Facebook-on";
    this.osa = "KIEGГ‰SZГЌTЕђ TГЃJГ‰KOZTATГЃST A JГЃTГ‰KSZABГЃLYOKBAN TALГЃL.";
    this.zrd = "Reality Check";
    this.lhl = "Г–n egy valГіsГЎg-ellenЕ‘rzГ©st kГ©rt.";
    this.esk = "Nyomja meg az ELЕђZMГ‰NYEK lehetЕ‘sГ©get, hogy megtekintse a jГЎtГ©ka elЕ‘zmГ©nyeit.";
    this.vji = "Game break";
    this.yqm = "Game limits";
    this.noe = "Self test";
    this.wcc = "Nincs kapcsolat a jГЎtГ©k-szerverrel!";
    this.bas = "KapcsolГіdГЎsi prГіbГЎlkozГЎs";
    this.jvf = "BejelentkezГ©si hiba!";
    this.kaa = "Egy szekciГі mГЎr aktГ­v!";
    this.elg = "A JГЃTГ‰KOSNAK AZ ELVI KIFIZETГ‰S Г–SSZEGE EBBEN A JГЃTГ‰KBAN XY."
}
fqv.prototype = new fkh;

function pbx() {
    this.qby = "MIZA MINIMД‚ ESTE";
    this.ayt = "MIZA MAXIMД‚";
    this.xoe = "MIZA MIN.";
    this.iva = "MIZA MAX.";
    this.vpv = "MIZД‚";
    this.start = "START";
    this.drj = "AJUTOR";
    this.ghw = "LISTA|CГ‚ЕћTIGURI";
    this.sii = "MENIU";
    this.hal = "MENIUL|JOCULUI";
    this.jdl = "STOP";
    this.isj = "CREDIT";
    this.djp = "SFГ‚RЕћIT JOCUL";
    this.pbn = "CГ‚ЕћTIGД‚TOR!";
    this.bbk = "MULT NOROC!";
    this.win = "CГ‚ЕћTIG";
    this.eem = "ULTIMUL CГ‚ЕћTIG";
    this.iej = "COLECTA";
    this.pfw = "COLECTA";
    this.fnv = "JOC";
    this.apw = "AUTO|START";
    this.gpe = "COLECTARE|1/2";
    this.akx = "IEЕћIRE";
    this.ztq = "APД‚SAЕўI START";
    this.vvu = "ALEGEЕўI MIZA";
    this.vqr = "COLECTARE|1/2";
    this.ret = "ГЋNAPOI|LA JOC";
    this.qkl = "CГўЕџtig total";
    this.wax = "Avertizare";
    this.ugg = "TOTAL";
    this.qab = "AЕћTEPTAЕўI VД‚ ROG ...";
    this.nhh = "Meniul Jocului";
    this.rze = "VITEZД‚";
    this.bms = "FД‚RД‚ GARANЕўIE LA DEFECTAREA APARATULUI.";
    this.xqa = "CONTINUARE";
    this.zkr = "AUTOSTART";
    this.iml = "LISTA CГ‚ЕћTIGURI";
    this.lvo = "JOC";
    this.left = "STГ‚NGA";
    this.zzj = "DREAPTA";
    this.ok = "OK";
    this.wfp = "ГЋNTRERUPERE";
    this.ika = "Joc";
    this.ehv = "Colectare 1/2";
    this.cae = "REGULILE JOCULUI";
    this.zji = "REGULILE|JOCULUI";
    this.cje = "Bonus!";
    this.ljk = "BONUS";
    this.rtz = "PENTRU CONTINUARE APASД‚ PE UN BUTON";
    this.sar = "CREDIT INSUFICIENT.";
    this.ojv = "cГўЕџtigДѓ";
    this.alh = "V A L U E";
    this.of = "DIN";
    this.rml = "ATINGEИљI ECRANUL PENTRU A CONTINUA";
    this.ydi = "ГЋNCARCД‚ ...";
    this.ley = "ГЋNCARCД‚ ISTORIC ...";
    this.yvn = "Eroare de comunicare";
    this.gff = "AЕЈi atins una dintre limite!";
    this.hpg = "AЕЈi atins numДѓrul maxim de jocuri gratis!";
    this.ftt = "Jocul se Г®ncheie";
    this.gnz = "Jocul se restarteazДѓ";
    this.qec = "CГ‚ЕћTIGAT";
    this.error = "EROARE";
    this.emo = "FREEPLAY";
    this.kno = "AUTO";
    this.gsx = "ID JOC";
    this.fuw = "TIMP DE JOC";
    this.piu = "ultimele";
    this.qqw = "jocuri";
    this.uut = "CREDIT";
    this.audio = "AUDIO";
    this.asj = "MUZICД‚";
    this.dtv = "ECRAN COMPLET";
    this.okp = "ECRAN|COMPLET";
    this.language = "LIMBA";
    this.klj = "Nu reafiИ™aИ›i";
    this.waa = "Sunetele nu pot fi Г®ncДѓrcate!";
    this.qjz = "Lipsesc resurse!";
    this.ywc = "JucaЕЈi fДѓrДѓ sunet?";
    this.imo = "SETД‚RI";
    this.nkg = "VДѓ rugДѓm opriЕЈi aparatul!";
    this.key = "INFO";
    this.fqm = "VДѓ rugДѓm dezactivaЕЈi PRIVATE MODE Г®n browser-ul dvs. pentru a juca.";
    this.goq = "Acest joc este optimizat pentru Google Chrome.";
    this.mwb = "VДѓ rugДѓm utilizaЕЈi versiunea actualДѓ";
    this.ayy = "Din pДѓcate acest browser nu este sprijinit complet.";
    this.gub = "Acest joc nu poate fi pornit Г®n modul freeplay!";
    this.qsg = "TreceЕЈi aparatul dvs. Г®n modul portret, pentru a juca ca la o maЕџinДѓ automatДѓ!";
    this.zfs = "AjusteazДѓ interfaЕЈa de joc nevoilor dvs!";
    this.mxo = "SELECTEAZД‚ CULOAREA CORECTД‚ PENTRU DUBLAREA CГ‚ЕћTIGULUI";
    this.hzb = "SELECTEAZД‚ CULOAREA CORECTД‚ A CД‚RЕўII PENTRU A CГ‚ЕћTIGA DE 4 ORI";
    this.bxy = "JOACД‚ PENTRU ЕћANSA DE A CREЕћTE PROFITUL";
    this.cec = "StatisticДѓ";
    this.kxt = "NumДѓr jocuri";
    this.mne = "Pariuri totale";
    this.kxl = "CГўЕџtig total";
    this.maa = "Timp total de joc";
    this.dby = "Am citit mesajul.";
    this.wvv = "ГЋNCHEIERE|JOC";
    this.rhf = "ISTORIC";
    this.jzh = "Nu existДѓ jocuri.";
    this.state = "STATUT";
    this.zjv = "Joc principal";
    this.gos = "Auto colectare";
    this.qoz = "Colectat";
    this.jpq = "Bonusspins";
    this.fbv = "Respin";
    this.tje = "Bonus";
    this.lqk = "Primul Deal";
    this.szu = "Al doilea deal";
    this.aet = "Al treilea deal";
    this.xim = "SETД‚RI AUTOSTART";
    this.dig = "NumДѓrul jocurilor:";
    this.zdp = "Oprire autostart";
    this.uxt = "Credit sub:";
    this.ote = "Credit peste:";
    this.thh = "CГўИ™tig peste:";
    this.igq = "Autostart se va opti la Г®nceperea bonusului.";
    this.trw = "Distribuie Facebook";
    this.osa = "PENTRU INFORMAЕўII SUPLIMENTARE, VEZI REGULILE JOCULUI.";
    this.zrd = "Reality Check";
    this.lhl = "Ai cerut un Reality Check.";
    this.esk = "ApasДѓ ISTORIC pentru a vedea istoricul tДѓu de joc.";
    this.vji = "Game break";
    this.yqm = "Game limits";
    this.noe = "Self test";
    this.wcc = "FДѓrДѓ conexiune la serverul de jocuri!";
    this.bas = "Tentative de conectare";
    this.jvf = "Conectare nereuЕџitДѓ!";
    this.kaa = "ExistДѓ deja o sesiune activДѓ!";
    this.elg = "DECONTAREA TEORETICД‚ CД‚TRE JUCД‚TORI A ACESTUI JOC ESTE DE XY."
}
pbx.prototype = new fkh;

function qhn() {
    this.qby = "MГЌNIMA APOSTA Г‰";
    this.ayt = "MГЃX. APOSTA";
    this.xoe = "MГЌN. APOSTA";
    this.iva = "MГЃX. APOSTA";
    this.vpv = "APOSTA";
    this.start = "PARTIDA";
    this.drj = "AJUDA";
    this.ghw = "ESQUEMA|DE PAGOS";
    this.sii = "MENU";
    this.hal = "SELEГ‡ГѓO|DE JOGOS";
    this.jdl = "PARADA";
    this.isj = "CRГ‰DITO";
    this.djp = "FIM DO JOGO";
    this.pbn = "VENCEDOR!";
    this.bbk = "BOA SORTE!";
    this.win = "GANHO";
    this.eem = "ULTIMO GANHO";
    this.iej = "COLETAR";
    this.pfw = "COLETAR";
    this.fnv = "JOGADA";
    this.apw = "AUTO|PARTIDA";
    this.gpe = "METADE";
    this.akx = "SAГЌDA";
    this.ztq = "PREMIR PARTIDA";
    this.vvu = "SELECIONAR APOSTA";
    this.vqr = "METADE";
    this.ret = "VOLTAR|PARA|O JOGO";
    this.qkl = "Ganho total";
    this.wax = "Aviso";
    this.ugg = "TOTAL";
    this.qab = "AGUARDE POR FAVOR ...";
    this.nhh = "SeleГ§ГЈo de jogos";
    this.rze = "VELOCIDADE";
    this.bms = "NГѓO SE ASSUME RESPONSABILIDADE POR AVARIAS NA MГЃQUINA.";
    this.xqa = "CONTINUAR";
    this.zkr = "AUTOPARTIDA";
    this.iml = "ESQUEMA DE PAGOS";
    this.lvo = "JOGADA";
    this.left = "ESQUERDA";
    this.zzj = "DIREITA";
    this.ok = "OK";
    this.wfp = "CANCELAR";
    this.ika = "Jogada";
    this.ehv = "Metade";
    this.cae = "REGRAS DO JOGO";
    this.zji = "REGRAS|DO JOGO";
    this.cje = "Bonus!";
    this.ljk = "BONUS";
    this.rtz = "PREMIR QUALQUER TECLA PARA CONTINUAR";
    this.sar = "NГѓO HГЃ CRГ‰DITO SUFICIENTE!";
    this.ojv = "ganha";
    this.alh = "V A L U E";
    this.of = "DE";
    this.rml = "TOCAR NA TELA PARA CONTINUAR";
    this.ydi = "CARREGANDO ...";
    this.ley = "CARREGANDO HISTГ“RICO ...";
    this.yvn = "Erro de comunicaГ§ГЈo";
    this.gff = "AlcanГ§ou um dos limities!";
    this.hpg = "AlcanГ§ou a quantidade mГЎxima de jogos livres!";
    this.ftt = "O jogo serГЎ encerrado";
    this.gnz = "O jogo serГЎ reiniciado";
    this.qec = "GANHOU";
    this.error = "ERRO";
    this.emo = "FREEPLAY";
    this.kno = "AUTO";
    this.gsx = "ID JOGO";
    this.fuw = "Playing Time";
    this.piu = "Гљltimos";
    this.qqw = "jogos";
    this.uut = "DEPOSIT";
    this.audio = "AUDIO";
    this.asj = "MUSIC";
    this.dtv = "TELA CHEIA";
    this.okp = "TELA|CHEIA";
    this.language = "IDIOMA";
    this.klj = "NГЈo exibir novamente";
    this.waa = "Sounds nГЈo podem ser carregados!";
    this.qjz = "Faltam recursos!";
    this.ywc = "Jogar sem som?";
    this.imo = "AJUSTES";
    this.nkg = "Favor girar o seu aparelho!";
    this.key = "INFORMAГ‡ГѓO";
    this.fqm = "Favor desativar o MODO PRIVADO no browser para iniciar o jogo.";
    this.goq = "Este jogo Г© otimizado por Google Chrome.";
    this.mwb = "Favor usar a versГЈo atual de";
    this.ayy = "Infelizmente este browser nГЈo Г© completamente suportado.";
    this.gub = "Este jogo nГЈo pode ser iniciado no modo de jogo livre!";
    this.qsg = "Girar o seu aparelho para o modo de portrait, para jogar como em uma mГЎquina real!";
    this.zfs = "Adapte a interface do jogo Г s suas necessidades!";
    this.mxo = "ESCOLHA A COR CERTA PARA DOBRAR O GANHO";
    this.hzb = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.bxy = "GAMBLE PARA A CHANCE DE AUMENTAR O GANHO";
    this.cec = "EstatГ­sticas";
    this.kxt = "NГєmero de jogos";
    this.mne = "Aposta total";
    this.kxl = "Ganho total";
    this.maa = "Tempo total do jogo";
    this.dby = "Eu lГ­ esta mensagem.";
    this.wvv = "ENCERRAR|JOGO";
    this.rhf = "HISTГ“RICO";
    this.jzh = "Ainda nГЈo existem jogos.";
    this.state = "ESTADO";
    this.zjv = "Jogo principal";
    this.gos = "Coletado automaticamente";
    this.qoz = "Coletado";
    this.jpq = "Bonusspins";
    this.fbv = "Respin";
    this.tje = "Bonus";
    this.lqk = "Primeiro Deal";
    this.szu = "Segundo Deal";
    this.aet = "Terceiro Deal";
    this.xim = "AJUSTES AUTOPARTIDA";
    this.dig = "NГєmero de jogos:";
    this.zdp = "Parar autopartida";
    this.uxt = "CrГ©dito menor do que:";
    this.ote = "CrГ©dito maior do que:";
    this.thh = "Ganho maior do que:";
    this.igq = "O autopartida serГЎ parado no inГ­cio do bonus.";
    this.trw = "Participar no Facebook";
    this.osa = "PARA MAIS INFORMAГ‡Г•ES, CONSULTE AS REGRAS DO JOGO.";
    this.zrd = "Reality Check";
    this.lhl = "Solicitaste um Reality Check.";
    this.esk = "Pressione HISTГ“RICO para ver seu histГіrico de jogos.";
    this.vji = "Game break";
    this.yqm = "Game limits";
    this.noe = "Self test";
    this.wcc = "Nenhuma conexГЈo com o servidor do jogo!";
    this.bas = "Tentativas de conexГЈo";
    this.jvf = "Login falhou!";
    this.kaa = "Ja existe uma sessГЈo ativa!";
    this.elg = "O PAGAMENTO TEГ“RICO AO JOGADOR PARA ESTE JOGO Г‰ DE XY."
}
qhn.prototype = new fkh;

function mtj() {
    this.qby = "LA MISE MINIMALE EST DE";
    this.ayt = "MISE MAX.";
    this.xoe = "MISE MINI";
    this.iva = "MISE MAX.";
    this.vpv = "MISE";
    this.start = "DEPART";
    this.drj = "AIDE";
    this.ghw = "TABLEAU|DES PAIEMENTS";
    this.sii = "MENU";
    this.hal = "PLUS|DE JEUX";
    this.jdl = "ARRГЉTEZ";
    this.isj = "CRГ‰DIT";
    this.djp = "FIN DU JEU";
    this.pbn = "GAGNANT!";
    this.bbk = "BONNE CHANCE!";
    this.win = "GAIN";
    this.eem = "DERNIER GAIN";
    this.iej = "ENCAISSER";
    this.pfw = "ENCAISSER";
    this.fnv = "DOUBLER";
    this.apw = "AUTO|LANCER";
    this.gpe = "ENCAISSER|MOITIГ‰";
    this.akx = "SORTIE";
    this.ztq = "APPUYEZ SUR START";
    this.vvu = "CHOISIR LA MISE";
    this.vqr = "ENCAISSER|MOITIГ‰";
    this.ret = "RETOUR|AU JEU";
    this.qkl = "Gain total";
    this.wax = "Avertissement";
    this.ugg = "TOTALE";
    this.qab = "ATTENDEZ S'IL VOUS PLAГЋT ...";
    this.nhh = "Plus de jeux";
    this.rze = "VITESSE";
    this.bms = "ГЃ L'OCCASION DВґERREUR DВґAPPAREIL DГ‰CLINER TOUTE RESPONSABILITГ‰.";
    this.xqa = "CONTINUER";
    this.zkr = "AUTO LANCER";
    this.iml = "TABLEAU DES PAIEMENTS";
    this.lvo = "DOUBLER";
    this.left = "GAUCHE";
    this.zzj = "DROITE";
    this.ok = "OK";
    this.wfp = "ANNULER";
    this.ika = "Doubler";
    this.ehv = "Encaisser moitiГ©";
    this.cae = "RГ€GLES DU JEU";
    this.zji = "RГ€GLES DU JEU";
    this.cje = "Bonus!";
    this.ljk = "BONUS";
    this.rtz = "APPUYEZ SUR UNE TOUCHE POUR CONTINUER";
    this.sar = "PAS ASSEZ DE CRГ‰DIT";
    this.ojv = "gagne";
    this.alh = "V A L U E";
    this.of = "SUR";
    this.rml = "EFFLEURE L'Г‰CRAN POUR CONTINUER";
    this.ydi = "CHARGEMENT EN COURS ...";
    this.ley = "CHARGEMENT DE L'HISTORIQUE EN COURS ...";
    this.yvn = "Erreur de communication";
    this.gff = "Vous avez atteint une des limites!";
    this.hpg = "Vous avez atteint le nombre maximum des jeux gratuits!";
    this.ftt = "Le jeu sera terminГ©";
    this.gnz = "Le jeu sera dГ©marrГ© de nouveau";
    this.qec = "GAGNГ‰";
    this.error = "ERREUR";
    this.emo = "JEU GRATUIT";
    this.kno = "AUTO";
    this.gsx = "ID DU JEU";
    this.fuw = "TEMPS DE JEU";
    this.piu = "Les";
    this.qqw = "derniers jeux";
    this.uut = "AVOIR";
    this.audio = "AUDIO";
    this.asj = "MUSIQUE";
    this.dtv = "PLEIN Г‰CRAN";
    this.okp = "PLEIN|Г‰CRAN";
    this.language = "LANGUE";
    this.klj = "Ne pas afficher encore une fois";
    this.waa = "Impossible de charger des sounds!";
    this.qjz = "Manque de ressources!";
    this.ywc = "Jouer sans son?";
    this.imo = "CONFIGUR.";
    this.nkg = "Merci de tourner votre matГ©riel!";
    this.key = "INFO";
    this.fqm = "Veuillez dГ©sactiver le MODE PRIVГ‰ dans le navigateur afin de dГ©marrer le jeu.";
    this.goq = "Ce jeu est optimisГ© pour Google Chrome.";
    this.mwb = "Veuilllez utiliser la version Г  jour de";
    this.ayy = "Malheureusement, ce browser n'est intГ©gralement supportГ©.";
    this.gub = "Impossible de dГ©marrer ce jeu au mode jeu gratuit!";
    this.qsg = "Tournez votre matГ©riel dans le mode portrait pour jouer comme sur une vГ©ritable machine!";
    this.zfs = "Adapte l'interface de jeu Г  tes besoins!";
    this.mxo = "CHOISIS LA BONNE COULEUR AFIN DE DOUBLER LE GAIN";
    this.hzb = "CHOISIS LA BONNE COULEUR DE LA CARTE AFIN DE QUADRUPLER LE GAIN";
    this.bxy = "GAMBLE POUR LA CHANCE DE MULTIPLIER LE GAIN";
    this.cec = "Statistiques";
    this.kxt = "Nombre des jeux";
    this.mne = "Total des mises";
    this.kxl = "Gain total";
    this.maa = "Temps total du jeu";
    this.dby = "J'ai lu le message";
    this.wvv = "TERMINER|LE JEU";
    this.rhf = "Historique";
    this.jzh = "Il n'y a pas encore de jeux jouГ©s.";
    this.state = "Г‰TAT";
    this.zjv = "Jeu principal";
    this.gos = "Pris automatiquement";
    this.qoz = "Pris";
    this.jpq = "Bonusspins";
    this.fbv = "Respin";
    this.tje = "Bonus";
    this.lqk = "Premier Deal";
    this.szu = "DeuxiГЁme Deal";
    this.aet = "TroisiГЁme Deal";
    this.xim = "AUTOSTART CONFIGURATION";
    this.dig = "Nombre des jeux:";
    this.zdp = "ArrГЄter autostart";
    this.uxt = "CrГ©dit infГ©rieur Г :";
    this.ote = "CrГ©dit supГ©rieur Г :";
    this.thh = "Gain supГ©rieur Г :";
    this.igq = "L'autostart est arrГЄtГ© au dГ©but du bonus.";
    this.trw = "Partager sur Facebook";
    this.osa = "POUR PLUS D'INFORMATIONS, CONSULTEZ LES RГ€GLES DU JEU.";
    this.zrd = "Reality Check";
    this.lhl = "Tu as demandГ© un Reality Check.";
    this.esk = "Appuie sur HISTORIQUE pour afficher ton historique de jeu.";
    this.vji = "Game break";
    this.yqm = "Game limits";
    this.noe = "Self test";
    this.wcc = "Aucune connexion avec le gaming serveur!";
    this.bas = "Tentatives de connexion";
    this.jvf = "Connexion Г©chouГ©e!";
    this.kaa = "Il y a dГ©jГ  une session active!";
    this.elg = "LE VERSEMENT THГ‰ORIQUE AU JOUEUR POUR CE JEU S'Г‰LГ€VE ГЂ XY."
}
mtj.prototype = new fkh;

function unm() {
    this.qby = "NAJMANJI ULOG JE";
    this.ayt = "MAX ULOG";
    this.xoe = "MIN. ULOG";
    this.iva = "MAKS. ULOG";
    this.vpv = "ULOG";
    this.start = "START";
    this.drj = "POMOД†";
    this.ghw = "LISTA DOBITAKA";
    this.sii = "IZBORNIK";
    this.hal = "VIЕ E|IGARA";
    this.jdl = "STOP";
    this.isj = "KREDIT";
    this.djp = "KRAJ IGRE";
    this.pbn = "DOBITAK!";
    this.bbk = "SRETNO!";
    this.win = "DOBITAK";
    this.eem = "ZADNJI DOBITAK";
    this.iej = "UPIЕ I";
    this.pfw = "UPIЕ I";
    this.fnv = "DUPLANJE";
    this.apw = "AUTO|START";
    this.gpe = "UZMI|1/2";
    this.akx = "IZLAZ";
    this.ztq = "PRITISNITE START";
    this.vvu = "BIRAJTE ULOG";
    this.vqr = "UZMI|1/2";
    this.ret = "POVRATAK|U IGRU";
    this.qkl = "Ukupni dobitci";
    this.wax = "Upozorenje";
    this.ugg = "UKUPNI";
    this.qab = "MOLIMO PRIДЊEKAJTE ...";
    this.nhh = "ViЕЎe igara";
    this.rze = "BRZINA";
    this.bms = "Kod kvara na ureД‘aju nema jamstva.";
    this.xqa = "DALJE";
    this.zkr = "AUTOSTART";
    this.iml = "LISTA DOBITAKA";
    this.lvo = "DUPLANJE";
    this.left = "LIJEVA";
    this.zzj = "DESNA";
    this.ok = "OK";
    this.wfp = "PREKID";
    this.ika = "Duplanje";
    this.ehv = "Uzmi 1/2";
    this.cae = "PRAVILA IGRE";
    this.zji = "PRAVILA IGRE";
    this.cje = "Bonus!";
    this.ljk = "BONUS";
    this.rtz = "ZA NASTAVITI PRITISNITE BILO KOJU TIPKU";
    this.sar = "NEMATE DOVOLJNO KREDITA.";
    this.ojv = "dobici";
    this.alh = "V A L U E";
    this.of = "OD";
    this.rml = "ZA NASTAVAK DODIRNITE ZASLON";
    this.ydi = "UДЊITAVANJA ...";
    this.ley = "POVIJEST UДЊITAVANJA ...";
    this.yvn = "Komunikacijska pogreЕЎka";
    this.gff = "Dostigli ste jednu od graniДЌnih vrijednosti!";
    this.hpg = "Dostigli ste maksimum besplatnih igara!";
    this.ftt = "Igra se zatvara";
    this.gnz = "Igra se iznova uДЌitava";
    this.qec = "OSVOJENO";
    this.error = "POGREЕ KA";
    this.emo = "FREEPLAY";
    this.kno = "AUTO";
    this.gsx = "ID IGRE";
    this.fuw = "Vrijeme igre";
    this.piu = "posljednjih";
    this.qqw = "igara";
    this.uut = "DEPOZIT";
    this.audio = "ZVUKA";
    this.asj = "GLAZBA";
    this.dtv = "PUN ZASLON";
    this.okp = "PUN ZASLON";
    this.language = "JEZIKA";
    this.klj = "Ne prikazuj ponovo";
    this.waa = "Zvukovi se ne mogu uДЌitati!";
    this.qjz = "Nedostaju resursi!";
    this.ywc = "ЕЅelite li igrati uz zvuk?";
    this.imo = "POSTAVKE";
    this.nkg = "UkljuДЌite svoj ureД‘aj!";
    this.key = "INFORMACIJE";
    this.fqm = "Molimo deaktivirajte PRIVATNI MOD u VaЕЎem pregledniku kako biste mogli igrati";
    this.goq = "Ova igra je optimizirana za Google Chrome.";
    this.mwb = "Molimo koristite se trenutnom inaДЌicom";
    this.ayy = "NaЕѕalost ovaj preglednik nije u potpunosti podrЕѕan";
    this.gub = "Ova se igra ne moЕѕe pokrenuti u reЕѕimu slobodne igre!";
    this.qsg = "Podesite svoj ureД‘aj na portretni format kako biste igrali kao na pravoma automatu!";
    this.zfs = "Prilagodite suДЌelje igre svojim potrebama!";
    this.mxo = "ODABERI PRAVU BOJU I TIME UDVOSTRUДЊI DOBITAK";
    this.hzb = "ODABERI PRAVI ZNAK I TIME UДЊETVEROSTRUДЊI DOBITAK";
    this.bxy = "KOCKANJEM OSVOJI Е ANSU ZA POVEД†ANJE DOBITKA";
    this.cec = "Statistike";
    this.kxt = "Ukupno igara";
    this.mne = "Ukupni ulog";
    this.kxl = "Ukupno dobitaka";
    this.maa = "Ukupno vrijeme igre";
    this.dby = "ProДЌitao sam ovu poruku";
    this.wvv = "IZLAZ|IZ IGRE";
    this.rhf = "Povijest";
    this.jzh = "Nema odigranih igara.";
    this.state = "STANJE";
    this.zjv = "Glavna igra";
    this.gos = "Auto. pokupljeno";
    this.qoz = "Pokupljeno";
    this.jpq = "Besplatne igre";
    this.fbv = "Dodatne okretaje";
    this.tje = "Bonus";
    this.lqk = "Prvo dijeljenje";
    this.szu = "Drugo dijeljenje";
    this.aet = "TreД‡e dijeljenje";
    this.xim = "POSTAVKE AUTOMATSKE IGRE";
    this.dig = "Ukupno igara:";
    this.zdp = "Zaustavljanje automatske igre";
    this.uxt = "Kredit manji od:";
    this.ote = "Kredit veД‡i od:";
    this.thh = "Dobitak veД‡i od:";
    this.igq = "Automatska igra Д‡e se zaustaviti na poДЌetku besplatne igre.";
    this.trw = "Podijeli na Facebooku";
    this.osa = "ZA VIЕ E INFORMACIJA POGLEDAJTE PRAVILA IGRE.";
    this.zrd = "Reality Check";
    this.lhl = "ZatraЕѕili ste Reality Check.";
    this.esk = "Pritisni POVIJEST za pregled prijaЕЎnjih igara.";
    this.vji = "Game break";
    this.yqm = "Game limits";
    this.noe = "Self test";
    this.wcc = "Nema konekcije sa serverom za igranje!";
    this.bas = "PokuЕЎaji povezivanja";
    this.jvf = "Prijavljivanje nije uspjelo!";
    this.kaa = "Aktivna sesija veД‡ postoji!";
    this.elg = "TEORETSKI POVRATAK NA IGRAДЊA ZA OVU IGRU JE XY."
}
unm.prototype = new fkh;

function tws() {
    this.qby = "MINIMA PUNTATA Г€";
    this.ayt = "PUNTATA MASSIMA";
    this.xoe = "MIN. PUNTATA";
    this.iva = "MASS. PUNTATA";
    this.vpv = "PUNTATA";
    this.start = "START";
    this.drj = "AIUTO";
    this.ghw = "TABELLA VINCITE";
    this.sii = "MENU";
    this.hal = "SCELTA|GIOCHI";
    this.jdl = "STOP";
    this.isj = "CREDITO";
    this.djp = "FINE PARTITA";
    this.pbn = "VINCITORE!";
    this.bbk = "BUONA FORTUNA!";
    this.win = "VINCITA";
    this.eem = "ULTIMA VINCITA";
    this.iej = "INCASSA";
    this.pfw = "INCASSA";
    this.fnv = "GAMBLE";
    this.apw = "AUTO|START";
    this.gpe = "METГЂ";
    this.akx = "FINE";
    this.ztq = "PREMI START";
    this.vvu = "SCEGLI PUNTATA";
    this.vqr = "METГЂ";
    this.ret = "RITORNO|AL GIOCO";
    this.qkl = "Totale vincita";
    this.wax = "Attenzione";
    this.ugg = "TOTALE";
    this.qab = "ATTENDERE PREGO ...";
    this.nhh = "Scelta Giochi";
    this.rze = "VELOCITГЂ";
    this.bms = "In caso di malfunzionamento nessuna responsabilitГ  assunta.";
    this.xqa = "CONTINUA";
    this.zkr = "AUTOSTART";
    this.iml = "TABELLA VINCITE";
    this.lvo = "GAMBLE";
    this.left = "SINISTRA";
    this.zzj = "DESTRA";
    this.ok = "OK";
    this.wfp = "CANCELLA";
    this.ika = "Gamble";
    this.ehv = "MetГ ";
    this.cae = "REGOLAMENTO";
    this.zji = "REGOLAMENTO";
    this.cje = "Bonus!";
    this.ljk = "BONUS";
    this.rtz = "PREMI UN TASTO PER CONTINUARE";
    this.sar = "CREDITO INSUFFICIENTE!";
    this.ojv = "vince";
    this.alh = "V A L U E";
    this.of = "DI";
    this.rml = "TOCCARE LO SCHERMO PER CONTINUARE";
    this.ydi = "STA CARICANDO ...";
    this.ley = "STA CARICANDO LA CRONACA ...";
    this.yvn = "Errore di comunicazione";
    this.gff = "Hai raggiunto uno dei limiti!";
    this.hpg = "Hai raggiunto il numero massimo di free games!";
    this.ftt = "La partita sta terminando";
    this.gnz = "La partita sta ripartendo";
    this.qec = "VINTO";
    this.error = "ERRORE";
    this.emo = "FREEPLAY";
    this.kno = "AUTO";
    this.gsx = "GAME ID";
    this.fuw = "Durata del gioco";
    this.piu = "Ultime partite";
    this.qqw = "";
    this.uut = "DEPOSITO";
    this.audio = "AUDIO";
    this.asj = "MUSICA";
    this.dtv = "SCHERMO INTERO";
    this.okp = "SCHERMO INTERO";
    this.language = "LINGUA";
    this.klj = "Non mostrare di nuovo";
    this.waa = "Suoni non caricabili!";
    this.qjz = "Mancano risorse!";
    this.ywc = "Giocare senza suoni?";
    this.imo = "SETTAGGI";
    this.nkg = "Prego girare l'apparecchio!";
    this.key = "INFO";
    this.fqm = "Prego disattivare il MODO PRIVATO nel browser per iniziare la partita";
    this.goq = "La partita ГЁ ottimizzata per Google Chrome.";
    this.mwb = "Prego utilizzare la versione attuale di";
    this.ayy = "Purtroppo il presente browser non viene supportato interamente";
    this.gub = "Impossibile avviare questa partita nel modo freeplay!";
    this.qsg = "Girare l'apparecchio nel modo ritratto per giocare come su un apparecchio vero!";
    this.zfs = "Aggiusta l'interfaccia del gioco come ti piace!";
    this.mxo = "SCEGLI IL COLORE GIUSTO PER RADDOPPIARE LA VINCITA";
    this.hzb = "SCEGLI IL SEME GIUSTO PER QUADRUPLARE LA VINCITA";
    this.bxy = "GAMBLE PER L'OPPORTUNITГЂ DI AUMENTARE LA VINCITA";
    this.cec = "Statistica";
    this.kxt = "Totale partite";
    this.mne = "Totale puntata";
    this.kxl = "Totale vincita";
    this.maa = "Totale durata del gioco";
    this.dby = "Ho letto il messaggio";
    this.wvv = "TERMINARE|LA PARTITA";
    this.rhf = "Cronaca";
    this.jzh = "Nessuna partita giocata.";
    this.state = "STATO";
    this.zjv = "Partita principale";
    this.gos = "Raccolto autom.";
    this.qoz = "Raccolto";
    this.jpq = "Bonusspin";
    this.fbv = "Respin";
    this.tje = "Bonus";
    this.lqk = "Primo deal";
    this.szu = "Secondo deal";
    this.aet = "Terzo deal";
    this.xim = "SETTAGGI AUTOSTART";
    this.dig = "Numero di partite:";
    this.zdp = "Fermare l'autostart";
    this.uxt = "Credito piГ№ basso di:";
    this.ote = "Credito piГ№ alto di:";
    this.thh = "Vincita piГ№ alta di:";
    this.igq = "L'autostart si ferma all'inizio del bonus.";
    this.trw = "Dividi su facebook";
    this.osa = "PER ULTERIORI INFORMAZIONI CONSULTARE LE REGOLE DI GIOCO.";
    this.zrd = "Reality Check";
    this.lhl = "Avete richiesto un Reality Check.";
    this.esk = "Premere CRONACA per mostrare la cronaca della giocata.";
    this.vji = "Game break";
    this.yqm = "Game limits";
    this.noe = "Self test";
    this.wcc = "Nessuna connessione al gaming server!";
    this.bas = "Tentativi di connessione";
    this.jvf = "Login fallito!";
    this.kaa = "Г€ giГ  attiva una seduta!";
    this.elg = "IL PAGAMENTO TEORICO DI QUESTO GIOCO IN FAVORE DEL GIOCATORE AMMONTA A XY."
}
tws.prototype = new fkh;

function bsa() {
    this.qby = "MIN. INSATSEN Г„R";
    this.ayt = "MAXIMAL INSATS";
    this.xoe = "MIN. INSATS";
    this.iva = "MAX. INSATS";
    this.vpv = "INSATS";
    this.start = "STARTA";
    this.drj = "HJГ„LP";
    this.ghw = "VINSTTABELL";
    this.sii = "MENY";
    this.hal = "FLER|SPEL";
    this.jdl = "STOPP";
    this.isj = "KREDIT";
    this.djp = "SPELET Г„R SLUT";
    this.pbn = "VINNARE!";
    this.bbk = "LYCKA TILL!";
    this.win = "VINN";
    this.eem = "SENASTE VINSTEN";
    this.iej = "INKASSERA";
    this.pfw = "INKASSERA";
    this.fnv = "DUBBLERA";
    this.apw = "AUTO|START";
    this.gpe = "HГ„LFTEN|1/2";
    this.akx = "AVSLUTA";
    this.ztq = "TRYCK PГ… STARTA";
    this.vvu = "VГ„LJ INSATS";
    this.vqr = "HГ„LFTEN";
    this.ret = "Г…TERGГ…|TILL SPELET";
    this.qkl = "Total Vinst";
    this.wax = "Varning";
    this.ugg = "TOTALT";
    this.qab = "VAR VГ„NLIG VГ„NTA ...";
    this.nhh = "Fler spel";
    this.rze = "TEMPO";
    this.bms = "Vid tekniskt fel annulleras alla insatser och spel.";
    this.xqa = "FORTSГ„TT";
    this.zkr = "AUTOSTART";
    this.iml = "VINSTTABELL";
    this.lvo = "DUBBLERA";
    this.left = "VГ„NSTER";
    this.zzj = "HГ–GER";
    this.ok = "OK";
    this.wfp = "AVBRYT";
    this.ika = "Dubblering";
    this.ehv = "HГ¤lften";
    this.cae = "SPELREGLER";
    this.zji = "SPELREGLER";
    this.cje = "Bonus!";
    this.ljk = "BONUS";
    this.rtz = "TRYCK PГ… EN KNAPP FГ–R ATT FORTSГ„TTA";
    this.sar = "FГ–R LГ…GT SALDO!";
    this.ojv = "vinster";
    this.alh = "V A L U E";
    this.of = "AV";
    this.rml = "PEKA PГ… SKГ„RMEN FГ–R ATT FORTSГ„TTA";
    this.ydi = "LГ„SER ...";
    this.ley = "LГ„SER IN HISTORIKEN ...";
    this.yvn = "Kommunikationsfel";
    this.gff = "Du har nГҐtt en av grГ¤nserna!";
    this.hpg = "Du har nГҐtt det maximala antalet gratisspel!";
    this.ftt = "Spelet avslutas";
    this.gnz = "Spelet startas om";
    this.qec = "VUNNA";
    this.error = "FEL";
    this.emo = "GRATISSPEL";
    this.kno = "AUTO";
    this.gsx = "SPEL-ID";
    this.fuw = "SPELTID";
    this.piu = "senaste";
    this.qqw = "spelen";
    this.uut = "INSГ„TTNING";
    this.audio = "LJUD";
    this.asj = "MUSIK";
    this.dtv = "HELSKГ„RM";
    this.okp = "HELSKГ„RM";
    this.language = "SPRГ…K";
    this.klj = "Visa inte igen";
    this.waa = "Ljud kan inte laddas!";
    this.qjz = "Resurser saknas!";
    this.ywc = "Spela utan ljud?";
    this.imo = "INSTГ„LLN.";
    this.nkg = "VГ¤nd din enhet!";
    this.key = "INFO";
    this.fqm = "Avaktivera PRIVATLГ„GET i din webblГ¤sare fГ¶r att spela spelet.";
    this.goq = "Det hГ¤r spelet Г¤r optimerat fГ¶r Google Chrome.";
    this.mwb = "AnvГ¤nd den senaste versionen av";
    this.ayy = "TyvГ¤rr stГ¶ds inte den hГ¤r webblГ¤saren fullt ut.";
    this.gub = "Det hГ¤r spelet kan inte startas i gratisspelslГ¤get!";
    this.qsg = "HГҐll din enhet i portrГ¤ttlГ¤ge fГ¶r att spela som pГҐ en riktig spelautomat!";
    this.zfs = "Anpassa spelgrГ¤nssnittet efter dina behov!";
    this.mxo = "VГ„LJ RГ„TT FГ„RG FГ–R ATT DUBBLA VINSTEN";
    this.hzb = "VГ„LJ RГ„TT FГ„RGSVIT FГ–R ATT FYRDUBBLA VINSTEN";
    this.bxy = "SPELA FГ–R ATT FГ… CHANSEN ATT Г–KA VINSTEN";
    this.cec = "Statistik";
    this.kxt = "Totalt antal spel";
    this.mne = "Totalinsats";
    this.kxl = "Totalvinst";
    this.maa = "Total speltid";
    this.dby = "Jag har lГ¤st detta meddelande";
    this.wvv = "AVSLUTA|SPELET";
    this.rhf = "Historik";
    this.jzh = "Inga spel har spelats.";
    this.state = "STATUS";
    this.zjv = "Huvudspel";
    this.gos = "Auto. Inkasserat";
    this.qoz = "Inkasserat";
    this.jpq = "Bonusspinn";
    this.fbv = "Respin";
    this.tje = "Bonus";
    this.lqk = "FГ¶rsta given";
    this.szu = "Andra given";
    this.aet = "Tredje given";
    this.xim = "AUTOSPELINSTГ„LLNINGAR";
    this.dig = "Antal spelrundor:";
    this.zdp = "Stoppa automatiskt spel";
    this.uxt = "Saldo lГ¤gre Г¤n:";
    this.ote = "Saldo hГ¶gre Г¤n:";
    this.thh = "Vinst hГ¶gre Г¤n:";
    this.igq = "Autospelen kommer att stoppas dГҐ bonusen startar.";
    this.trw = "Dela pГҐ Facebook";
    this.osa = "SE SPELREGLERNA FГ–R MER INFORMATION.";
    this.zrd = "Reality Check";
    this.lhl = "Du har begГ¤rt att fГҐ en statusuppdatering.";
    this.esk = "Tryck pГҐ HISTORIK fГ¶r att visa din spelhistorik.";
    this.vji = "Spelpaus";
    this.yqm = "SpelgrГ¤nser";
    this.noe = "SjГ¤lvtest";
    this.wcc = "Ingen anslutning till spelservern!";
    this.bas = "AnslutningsfГ¶rsГ¶k";
    this.jvf = "Inloggningen misslyckades!";
    this.kaa = "Det finns redan en aktiv session!";
    this.elg = "DEN TEORETISKA Г…TERBETALNINGEN TILL SPELAREN FГ–R DET HГ„R SPELET Г„R XY."
}
bsa.prototype = new fkh;

function szt() {
    this.awu = "HELD";
    this.mjl = "RED";
    this.urx = "BLACK";
    this.wur = "HIGH";
    this.gqj = "LOW";
    this.owj = "DEAL CARDS";
    this.isf = "HOLD CARDS";
    this.san = "DRAW CARDS";
    this.eki = "five equivalent cards (only possible with a wild card)";
    this.dao = "ace - king - queen - jack - ten of the same suit";
    this.tue = "STRAIGHT with cards of the same suit";
    this.rpb = "four cards of the same rank";
    this.jyq = "combination of THREE OF A KIND and a PAIR";
    this.woh = "five cards of the same suit";
    this.shk = "five cards in rank order, but not of the same suit";
    this.bzk = "three cards of the same rank";
    this.ozk = "two distinct pairs and any 5th card";
    this.vhk = "two jacks, queens, kings or aces";
    this.bqj = "four cards of the same suit with any 5th card";
    this.uqj = "straight with ace in the center";
    this.pdy = "combination of figures which contains jack, queen and king";
    this.vcs = "sequence with even or odd successive values";
    this.ulr = "ROYAL FLUSH containing a wild card";
    this.lcs = "four twos with any other card";
    this.gjw = "four 5's, 6's, 7's, 8's, 9's, 10's, JACK's, QUEEN's OR KING's";
    this.lcu = "four 2's, 3's or 4's with any other card";
    this.dtt = "four aces with any other card";
    this.jnt = "four 2's, 3's OR 4's with an Ace 2,3 or 4";
    this.osz = "four Aces with 2, 3 or 4";
    this.hzk = "two Kings or Aces";
    this.zaj = "two tens, jacks, queens, kings or aces";
    this.rrv = "FIVE OF A KIND";
    this.ebq = "ROYAL FLUSH";
    this.syc = "STRAIGHT FLUSH";
    this.ibr = "FOUR OF A KIND";
    this.yov = "FULL HOUSE";
    this.nav = "FLUSH";
    this.xxw = "STRAIGHT";
    this.xto = "THREE OF A KIND";
    this.yej = "TWO PAIRS";
    this.ylj = "HIGH PAIR";
    this.trv = "FOUR FLUSH";
    this.pug = "POKER";
    this.hjh = "SKIP STRAIGHT";
    this.nux = "BLAZE";
    this.dmc = "CORNER STRAIGHT";
    this.oia = "TENS OR BETTER";
    this.rxz = "JACKS OR BETTER";
    this.mjb = "KINGS OR BETTER";
    this.tnh = "WILD ROYAL FLUSH";
    this.weu = "FOUR DEUCES";
    this.fzs = "FOUR 5 TO KING";
    this.zrk = "FOUR 2 TO 4";
    this.tkv = "FOUR ACES";
    this.xzp = "FOUR LOW WITH LOW";
    this.ksv = "FOUR ACES WITH 2, 3 OR 4";
    this.ufn = "GAMBLE AGAIN OR COLLECT?";
    this.ksr = "SELECT A CARD";
    this.qvi = "If selected card is higher than dealer: WIN!";
    this.dbq = "If selected card is lower than dealer: lose";
    this.spj = "If selected card is same as dealer: tie";
    this.ryt = "ACE is highest, two is lowest, no wild cards.";
    this.jly = "TIE";
    this.iun = "PLAYER";
    this.qbh = "DEALER";
    this.evo = "BEAT THE DEALER TO DOUBLE THE WIN";
    this.rbu = "SELECT THE CORRECT VALUE TO DOUBLE THE WIN"
}
szt.prototype = new bmt;

function qax() {
    this.awu = "РЈРґРµСЂР¶Р°С‚СЊ";
    this.mjl = "РљР РђРЎРќР«Р™";
    this.urx = "BLACK";
    this.wur = "РљР РЈРџРќРђРЇ";
    this.gqj = "РњР•Р›РљРђРЇ";
    this.owj = "Р РђР—Р”Р•Р›РРўР¬ РљРђР РўР«";
    this.isf = "РЈР”Р•Р Р–РђРўР¬ РљРђР РўР«";
    this.san = "Р’Р—РЇРўР¬ РљРђР РўР«";
    this.eki = "РџСЏС‚СЊ РєР°СЂС‚ РѕРґРЅРѕРіРѕ РЅРѕРјРёРЅР°Р»Р° (РѕРґРЅР° РёР· РЅРёС… РґР¶РѕРєРµСЂ)";
    this.dao = "РўСѓР· - РєРѕСЂРѕР»СЊ - РґР°РјР° - РІР°Р»РµС‚ - 10 РѕРґРЅРѕР№ РјР°СЃС‚Рё";
    this.tue = "STRAIGHT РѕРґРЅРѕР№ РјР°СЃС‚Рё";
    this.rpb = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ РѕРґРЅРѕРіРѕ РЅРѕРјРёРЅР°Р»Р°";
    this.jyq = "РўСЂРё РєР°СЂС‚С‹ РѕРґРЅРѕРіРѕ РЅРѕРјРёРЅР°Р»Р° Рё РѕРґРЅР° РїР°СЂР°";
    this.woh = "РџСЏС‚СЊ РєР°СЂС‚ РѕРґРЅРѕР№ РјР°СЃС‚Рё";
    this.shk = "РџСЏС‚СЊ РєР°СЂС‚ РїРѕ РїРѕСЂСЏРґРєСѓ, РЅРѕ РЅРµ РѕРґРЅРѕР№ РјР°СЃС‚Рё";
    this.bzk = "РўСЂРё РєР°СЂС‚С‹ РѕРґРЅРѕРіРѕ РЅРѕРјРёРЅР°Р»Р°";
    this.ozk = "Р”РІРµ РїР°СЂС‹ Рё РѕРґРЅР° РґРѕРїРѕР». РєР°СЂС‚Р°";
    this.vhk = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ РѕРґРЅРѕР№ РјР°СЃС‚Рё Рё РѕРґРЅР° РґРѕРїРѕР». РєР°СЂС‚Р°";
    this.bqj = "Р”РІР° РІР°Р»РµС‚Р°, РґРІРµ РґР°РјС‹, РґРІР° РєРѕСЂРѕР»СЏ РёР»Рё С‚СѓР·Р°";
    this.uqj = "РџСЏС‚СЊ РєР°СЂС‚ РїРѕ РїРѕСЂСЏРґРєСѓ С‡РµСЂРµР· С‚СѓР· (3-2-Рў-Рљ-Р”)";
    this.pdy = "РљРѕРјР±РёРЅР°С†РёСЏ РёР· РєР°СЂС‚ СЃ РєР°СЂС‚РёРЅРєР°РјРё: РґРІРµ РІР°Р»РµС‚Р°, РґРІРµ РґР°РјС‹ Рё РєРѕСЂРѕР»СЊ";
    this.vcs = "РџСЏС‚СЊ С‡РµС‚РЅС‹С… РёР»Рё РїСЏС‚СЊ РЅРµ С‡РµС‚РЅС‹С… РєР°СЂС‚ РїРѕ РїРѕСЂСЏРґРєСѓ";
    this.ulr = "ROYAL FLUSH СЃ РґР¶РѕРєРµСЂРѕРј";
    this.lcs = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ 2 Рё РѕРґРЅР° РґРѕРїРѕР». РєР°СЂС‚Р°";
    this.gjw = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ 5, 6, 7, 8, 9, 10, РІР°Р»РµС‚, РґР°РјР° РёР»Рё РєРѕСЂРѕР»СЊ";
    this.lcu = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ 2, 3 РёР»Рё 4 СЃ Р»СЋР±РѕР№ РґРѕРїРѕР». РєР°СЂС‚РѕР№.";
    this.dtt = "Р§РµС‚С‹СЂРµ С‚СѓР·Р° Рё РѕРґРЅР° РґРѕРїРѕР». РєР°СЂС‚Р°";
    this.jnt = "Р§РµС‚С‹СЂРµ РґРІРѕР№РєРё, С‚СЂРѕР№РєРё РёР»Рё С‡РµС‚РІРµСЂРєРё СЃ С‚СѓР·РѕРј, РґРІРѕР№РєРѕР№, С‚СЂРѕР№РєРѕР№ РёР»Рё С‡РµС‚РІРµСЂРєРѕР№";
    this.osz = "Р§РµС‚С‹СЂРµ С‚СѓР·Р° СЃ 2, 3 РёР»Рё 4";
    this.hzk = "Р”РІР° РєРѕСЂРѕР»СЏ РёР»Рё С‚СѓР·Р°";
    this.zaj = "Р”РІРµ РєР°СЂС‚С‹ 10, РІР°Р»РµС‚, РґР°РјР°, РєРѕСЂРѕР»СЊ РёР»Рё С‚СѓР·";
    this.rrv = "FIVE OF A KIND";
    this.ebq = "ROYAL FLUSH";
    this.syc = "STRAIGHT FLUSH";
    this.ibr = "FOUR OF A KIND";
    this.yov = "FULL HOUSE";
    this.nav = "FLUSH";
    this.xxw = "STRAIGHT";
    this.xto = "THREE OF A KIND";
    this.yej = "TWO PAIRS";
    this.ylj = "HIGH PAIR";
    this.trv = "FOUR FLUSH";
    this.pug = "POKER";
    this.hjh = "SKIP STRAIGHT";
    this.nux = "BLAZE";
    this.dmc = "CORNER STRAIGHT";
    this.oia = "TENS OR BETTER";
    this.rxz = "JACKS OR BETTER";
    this.mjb = "KINGS OR BETTER";
    this.tnh = "WILD ROYAL FLUSH";
    this.weu = "FOUR DEUCES";
    this.fzs = "FOUR 5 TO KING";
    this.zrk = "FOUR 2 TO 4";
    this.tkv = "FOUR ACES";
    this.xzp = "FOUR LOW WITH LOW";
    this.ksv = "FOUR ACES WITH 2, 3 OR 4";
    this.ufn = "РЈРґРІРѕРёС‚СЊ РёР»Рё РІР·СЏС‚СЊ?";
    this.ksr = "Р’Р«Р‘Р•Р РРўР• РљРђР РўРЈ";
    this.qvi = "Р•СЃР»Рё Р’Р°С€Рё РєР°СЂС‚С‹ РєСЂСѓРїРЅРµРµ, С‡РµРј РєР°СЂС‚С‹ РґРёР»РµСЂР°, Р’С‹ РІС‹РёРіСЂР°РµС‚Рµ!";
    this.dbq = "Р•СЃР»Рё Р’Р°С€Рё РєР°СЂС‚С‹ РјРµР»СЊС‡Рµ, С‡РµРј РєР°СЂС‚С‹ РґРёР»РµСЂР°, Р’С‹ РЅРµ РІС‹РёРіСЂР°РµС‚Рµ";
    this.spj = "Р•СЃР»Рё РґРѕСЃС‚РѕРёРЅСЃС‚РІРѕ Р’Р°С€РёС… РєР°СЂС‚ СЂР°РІРЅРѕ РєР°СЂС‚Р°Рј РґРёР»РµСЂР°, СЌС‚Рѕ РѕР·РЅР°С‡Р°РµС‚ РЅРёС‡СЊСЋ";
    this.ryt = "РўРЈР— СЃР°РјР°СЏ РєСЂСѓРїРЅР°СЏ, Р”Р’Рђ СЃР°РјР°СЏ РјРµР»РєР°СЏ РєР°СЂС‚Р°, РЅРµС‚ РґР¶РѕРєРµСЂРѕРІ.";
    this.evo = "Р’Р«РР“Р РђР™РўР• РЈ Р РђР—Р”РђР®Р©Р•Р“Рћ, Р§РўРћР‘Р« РЈР”Р’РћРРўР¬ Р’Р«РР“Р Р«РЁ";
    this.jly = "Р РћР’РќРћ";
    this.iun = "РР“Р РћРљ";
    this.qbh = "DEALER";
    this.rbu = "Р’Р«Р‘Р•Р РРўР• РџР РђР’РР›Р¬РќР«Р™ РќРћРњРРќРђР›, Р§РўРћР‘Р« РЈР”Р’РћРРўР¬ Р’Р«РР“Р Р«РЁ."
}
qax.prototype = new rzc;

function ted() {
    this.awu = "PARAR";
    this.mjl = "ROJO";
    this.urx = "NEGRO";
    this.wur = "ALTO";
    this.gqj = "BAJO";
    this.owj = "DAR CARTAS";
    this.isf = "RETENER CARTAS";
    this.san = "DAR CARTAS";
    this.eki = "Cinco cartas iguales (sГіlo posible con el comodin)";
    this.dao = "As - rey - dama - sota - 10 del mismo color";
    this.tue = "STRAIGHT del mismo color";
    this.uqj = "Escalera con as en el centro";
    this.pdy = "CombinaciГіn de figuras con sota, dama y rey";
    this.rpb = "Cuatro cartas del mismo valor";
    this.vcs = "Secuencia de cinco cartas pares o impares de valores sucesivos";
    this.jyq = "CombinaciГіn entre THREE OF A KIND y PAIR";
    this.woh = "Cinco cartas del mismo color";
    this.shk = "Cinco cartas puestas en orden pero no del mismo color";
    this.bzk = "Tres cartas equivalentes";
    this.ozk = "Dos pares diferentes y una quinta carta";
    this.vhk = "Cuatro cartas del mismo color con una quinta carta";
    this.bqj = "Dos sotas, damas, reyes o ases";
    this.ulr = "ROYAL FLUSH con comodin";
    this.lcs = "Cuatro doses con otra carta";
    this.gjw = "Cuatro 5, 6, 7, 8, 9, 10, sotas, damas o reyes";
    this.lcu = "Cuatro de dos, de tres o de cuatro con otra carta";
    this.dtt = "Cuatro ases con otra carta";
    this.jnt = "Cuatro 2, 3 o 4 con un as, una 2, 3 o 4";
    this.osz = "Cuatro ases con una 2, 3 o 4";
    this.hzk = "Dos reyes o dos ases";
    this.zaj = "Dos 10, sotas, damas, reyes o ases";
    this.rrv = "FIVE OF A KIND";
    this.ebq = "ROYAL FLUSH";
    this.syc = "STRAIGHT FLUSH";
    this.ibr = "FOUR OF A KIND";
    this.yov = "FULL HOUSE";
    this.nav = "FLUSH";
    this.xxw = "STRAIGHT";
    this.xto = "THREE OF A KIND";
    this.yej = "TWO PAIRS";
    this.ylj = "HIGH PAIR";
    this.trv = "FOUR FLUSH";
    this.pug = "POKER";
    this.hjh = "SKIP STRAIGHT";
    this.nux = "BLAZE";
    this.dmc = "CORNER STRAIGHT";
    this.oia = "TENS OR BETTER";
    this.rxz = "JACKS OR BETTER";
    this.mjb = "KINGS OR BETTER";
    this.tnh = "WILD ROYAL FLUSH";
    this.weu = "FOUR DEUCES";
    this.fzs = "FOUR 5 TO KING";
    this.zrk = "FOUR 2 TO 4";
    this.tkv = "FOUR ACES";
    this.xzp = "FOUR LOW WITH LOW";
    this.ksv = "FOUR ACES WITH 2, 3 OR 4";
    this.ufn = "Arriesgar otra vez o tomar el premio?";
    this.ksr = "Tome una carta";
    this.qvi = "Si la carta es mГЎs alta que la del crupier: hay premio!";
    this.dbq = "Si la carta elegida es mГЎs baja que la del crupier: no hay premio!";
    this.spj = "Si la carta elegida es la misma que la del crupier: QUEDA IGUAL";
    this.ryt = "ACE es la mГЎs alta, dos es la mГЎs baja, no hay comodin.";
    this.evo = "GANAR LA MANO PARA DOBLAR EL PREMIO";
    this.rbu = "SELECCIONAR EL VALOR CORRECTO PARA DOBLAR EL PREMIO";
    this.jly = "IGUAL";
    this.iun = "JUGADOR";
    this.qbh = "MANO"
}
ted.prototype = new tsh;

function jdp() {
    this.awu = "HALTEN";
    this.mjl = "ROT";
    this.urx = "SCHWARZ";
    this.wur = "HOCH";
    this.gqj = "TIEF";
    this.owj = "KARTEN GEBEN";
    this.isf = "KARTEN HALTEN";
    this.san = "KARTEN GEBEN";
    this.eki = "FГјnf gleiche Karten (nur mit Joker mГ¶glich)";
    this.dao = "Ass - KГ¶nig - Dame - Buben - 10er der selben Farbe";
    this.tue = "STRAIGHT in der selben Farbe";
    this.rpb = "Vier wertgleiche Karten";
    this.jyq = "Kombination aus THREE OF A KIND und PAIR";
    this.woh = "FГјnf Karten mit der selben Farbe";
    this.shk = "FГјnf Karten in geordneter Reihenfolge, ohne der selben Farbe";
    this.bzk = "Drei gleichwertige Karten";
    this.ozk = "Zwei verschiedene Paare und eine 5. Karte";
    this.vhk = "Zwei Buben, Damen, KГ¶nige oder Assen";
    this.bqj = "Vier Karten der selben Farbe mit einer 5. Karte";
    this.uqj = "Straight mit Ass in der Mitte";
    this.pdy = "Bildkarten welche Bube, Dame und KГ¶nig enthalten";
    this.vcs = "FГјnf gerade oder ungerade aufeinanderfolgende Werte";
    this.ulr = "ROYAL FLUSH mit Joker";
    this.lcs = "Vier Zweier mit einer anderen Karte";
    this.gjw = "Vier 5er, 6er, 7er, 8er, 9er, 10er, Buben, Damen oder KГ¶nige";
    this.lcu = "Vier 2er,3er oder 4er mit einer anderen Karte";
    this.dtt = "Vier Assen mit einer anderen Karte";
    this.jnt = "Vier 2er, 3er oder 4er mit einer As, einem 2er, 3er oder 4er";
    this.osz = "Vier Assen mit einer 2, 3 oder 4";
    this.hzk = "Zwei KГ¶nige oder zwei Assen";
    this.zaj = "Zwei 10er, Buben, Damen, KГ¶nige oder Assen";
    this.rrv = "FIVE OF A KIND";
    this.ebq = "ROYAL FLUSH";
    this.syc = "STRAIGHT FLUSH";
    this.ibr = "FOUR OF A KIND";
    this.yov = "FULL HOUSE";
    this.nav = "FLUSH";
    this.xxw = "STRAIGHT";
    this.xto = "THREE OF A KIND";
    this.yej = "TWO PAIRS";
    this.ylj = "HIGH PAIR";
    this.trv = "FOUR FLUSH";
    this.pug = "POKER";
    this.hjh = "SKIP STRAIGHT";
    this.nux = "BLAZE";
    this.dmc = "CORNER STRAIGHT";
    this.oia = "TENS OR BETTER";
    this.rxz = "JACKS OR BETTER";
    this.mjb = "KINGS OR BETTER";
    this.tnh = "WILD ROYAL FLUSH";
    this.weu = "FOUR DEUCES";
    this.fzs = "FOUR 5 TO KING";
    this.zrk = "FOUR 2 TO 4";
    this.tkv = "FOUR ACES";
    this.xzp = "FOUR LOW WITH LOW";
    this.ksv = "FOUR ACES WITH 2, 3 OR 4";
    this.ufn = "NOCHEINMAL GAMBELN ODER GEWINN NEHMEN?";
    this.ksr = "NIMM EINE KARTE";
    this.qvi = "Wenn die gewГ¤hlte Karte hГ¶her ist als die vom Dealer: Gewinn!";
    this.dbq = "Wenn die gewГ¤hlte Karte niedriger ist als die vom Dealer: Kein Gewinn";
    this.spj = "Wenn die gewГ¤hlte Karte die selbe ist wie die vom Dealer: GLEICH";
    this.ryt = "Ass ist die hГ¶chste Karte, Zwei die niedrigste, keine Joker.";
    this.evo = "BESIEGE DEN GEBER UM DEN GEWINN ZU VERDOPPELN";
    this.rbu = "WГ„HLE DEN RICHTIGEN WERT UM DEN GEWINN ZU VERDOPPELN";
    this.jly = "GLEICH";
    this.iun = "SPIELER";
    this.qbh = "GEBER"
}
jdp.prototype = new gtv;

function vre() {
    this.awu = "TUTUNUZ";
    this.mjl = "KIRMIZI";
    this.urx = "SIYAH";
    this.wur = "YГњKSEK";
    this.gqj = "DERIN";
    this.owj = "KARTLARI VERД°NД°Z";
    this.isf = "KARTLARI TUTUNUZ";
    this.san = "KARTLARI VERД°NД°Z";
    this.eki = "BeЕџ ayni kartlar (tek jokerle mГјmkГјn)";
    this.dao = "Ass - papaz - dama - valeler - 10lar ayni renkli";
    this.tue = "STRAIGHT ayni renkli";
    this.rpb = "DГ¶rt ayni deДџerde olan kartlar";
    this.jyq = "Kombinasyon THREE OF A KIND ve PAIR le";
    this.woh = "BeЕџ ayni renkli kartlar";
    this.shk = "BeЕџ kartlar dГјzenli bir sД±ralamada, ayni renk siz";
    this.bzk = "ГњГ§ ayni deДџerinde olan kartlar";
    this.ozk = "Iki deДџiЕџik Г§iftle ve bir 5. kart";
    this.vhk = "Iki valeler, damalar, papazlar veya asslar";
    this.bqj = "Ayni renkten dГ¶rt kart ve bir 5. kart";
    this.uqj = "AsвЂ™Д± ortada olan Straight";
    this.pdy = "Vale, kД±z ve papaz gГ¶steren resimli kartlar";
    this.vcs = "Arka arkaya beЕџ Г§ift veya tek deДџer";
    this.ulr = "ROYAL FLUSH  joker le";
    this.lcs = "DГ¶rt ikili baЕџka bir kartla";
    this.gjw = "DГ¶rt 5вЂ™li, 6вЂ™lД±, 7вЂ™li, 8вЂ™li, 9вЂ™lu, 10вЂ™lu, vale, kД±z veya papaz";
    this.lcu = "DГ¶rt 2ler,3ler veya 4ler baЕџka bir kartla";
    this.dtt = "DГ¶rt as baЕџka bir kartla";
    this.jnt = "Bir as ile bir 2'li, 3'lГј veya 4'lГј ile dГ¶rt adet 2'li, 3'lГј veya 4'lГј";
    this.osz = "2,3 veya 4 ile dГ¶rt as";
    this.hzk = "Iki papazlar veya iki asslar";
    this.zaj = "Iki 10lar, valeler, damalar, papazlar veya asslar";
    this.rrv = "FIVE OF A KIND";
    this.ebq = "ROYAL FLUSH";
    this.syc = "STRAIGHT FLUSH";
    this.ibr = "FOUR OF A KIND";
    this.yov = "FULL HOUSE";
    this.nav = "FLUSH";
    this.xxw = "STRAIGHT";
    this.xto = "THREE OF A KIND";
    this.yej = "TWO PAIRS";
    this.ylj = "HIGH PAIR";
    this.trv = "FOUR FLUSH";
    this.pug = "POKER";
    this.hjh = "SKIP STRAIGHT";
    this.nux = "BLAZE";
    this.dmc = "CORNER STRAIGHT";
    this.oia = "TENS OR BETTER";
    this.rxz = "JACKS OR BETTER";
    this.mjb = "KINGS OR BETTER";
    this.tnh = "WILD ROYAL FLUSH";
    this.weu = "FOUR DEUCES";
    this.fzs = "FOUR 5 TO KING";
    this.zrk = "FOUR 2 TO 4";
    this.tkv = "FOUR ACES";
    this.xzp = "FOUR LOW WITH LOW";
    this.ksv = "FOUR ACES WITH 2, 3 OR 4";
    this.ufn = "Bir daha riziko veya kazanГ§Д± alД±nД±z?";
    this.ksr = "Bir kart al";
    this.qvi = "SeГ§ilen kart DealerвЂ™inkinden yГјksekse: KazanГ§!";
    this.dbq = "SeГ§ilen kart DealerвЂ™inkinden dГјЕџГјkse: KazanГ§ yok";
    this.spj = "SeГ§ilen kart DealerвЂ™inkiyle aynД± ise: PAT";
    this.ryt = "ACE is highest, two is lowest, Joker yok";
    this.evo = "KAДћITLARI DAДћITANI YENEREK KAZANCINI Д°KД°YE KATLAYABД°LД°RSД°N";
    this.jly = "AYNI";
    this.iun = "OYUNCU";
    this.qbh = "DEALER";
    this.rbu = "DOДћRU DEДћERД° SEГ‡EREK KAZANCINI Д°KД°YE KATLARSIN"
}
vre.prototype = new ban;

function jvg() {
    this.awu = "DRЕЅET";
    this.mjl = "CERVENГЃ";
    this.urx = "CERNГЃ";
    this.wur = "VELKГЃ";
    this.gqj = "MALГЃ";
    this.owj = "DГЃT KARTY";
    this.isf = "KARTY DRЕЅET";
    this.san = "DГЃT KARTY";
    this.eki = "Pet stejnГЅch karet(moЕѕnГ© pouze s Jokerem)";
    this.dao = "Eso - krГЎl - krГЎlovna - kluk - desГ­tka stejnГ© barvy";
    this.tue = "STRAIGHT s kartami stejnГ© barvy";
    this.rpb = "Ctyri karty stejnГ© hodnoty";
    this.jyq = "Kombinace z THREE OF A KIND a PAIR";
    this.woh = "Pet karet stejnГ© barvy";
    this.shk = "Pet karet usporГЎdanГЅch v rade, ale ne stejnГ© barvy";
    this.bzk = "Tri karty stejnГ© hodnoty";
    this.ozk = "Dve odliЕЎnГ© dvojice a 5. karta";
    this.vhk = "Dva klucii, krГЎlovny, krГЎlovГ© nebo esa";
    this.bqj = "Ctyrii karty stejnГ© barvy s 5. kartou";
    this.uqj = "postupka s esem uprostred";
    this.pdy = "kombinace obsahujГ­cГ­ pouze postavy (jack, queen  a king)";
    this.vcs = "postupka vytvorenГЎ ze sudГЅch nebo lichГЅch za sebou nГЎsledujГ­cГ­ch cГ­sel";
    this.ulr = "ROYAL FLUSH s Jokerem";
    this.lcs = "Ctyri dvojky s jinou kartou";
    this.gjw = "ДЊtyЕ™i 5ky, 6ky, 7ky,8ky,9ky,10ky, kluci,krГЎlovny nebo krГЎlovГ©";
    this.lcu = "ДЊtyЕ™i 2ky,3ky nebo 4ky s dalЕЎГ­ kartou";
    this.dtt = "ДЊtyri Esa s dalЕЎГ­ kartou";
    this.jnt = "ДЊtyЕ™i 2, 3 nebo 4 s Esem, 2,3 nebo 4";
    this.osz = "ДЊtyЕ™i Esa s jednou 2,3 nebo 4";
    this.hzk = "Dva KrГЎlovГ© nebo dvД› Esa";
    this.zaj = "Dve desГ­tky, kluci, krГЎlovny, krГЎlovГ© nebo esa";
    this.rrv = "FIVE OF A KIND";
    this.ebq = "ROYAL FLUSH";
    this.syc = "STRAIGHT FLUSH";
    this.ibr = "FOUR OF A KIND";
    this.yov = "FULL HOUSE";
    this.nav = "FLUSH";
    this.xxw = "STRAIGHT";
    this.xto = "THREE OF A KIND";
    this.yej = "TWO PAIRS";
    this.ylj = "HIGH PAIR";
    this.trv = "FOUR FLUSH";
    this.pug = "POKER";
    this.hjh = "SKIP STRAIGHT";
    this.nux = "BLAZE";
    this.dmc = "CORNER STRAIGHT";
    this.oia = "TENS OR BETTER";
    this.rxz = "JACKS OR BETTER";
    this.mjb = "KINGS OR BETTER";
    this.tnh = "WILD ROYAL FLUSH";
    this.weu = "FOUR DEUCES";
    this.fzs = "FOUR 5 TO KING";
    this.zrk = "FOUR 2 TO 4";
    this.tkv = "FOUR ACES";
    this.xzp = "FOUR LOW WITH LOW";
    this.ksv = "FOUR ACES WITH 2, 3 OR 4";
    this.ufn = "HRГЃT ZNOVU NEBO VZГЌT VГќHRU?";
    this.ksr = "ZVOL KARTU";
    this.qvi = "Je-li zvolenГЎ karta vyЕЎЕЎГ­ neЕѕ dealerova: VГЅhra!";
    this.dbq = "Je-li  zvolenГЎ karta niЕѕЕЎiГ­ neЕѕ dealerova: ЕЅГЎdnГЎ vГЅhra!";
    this.spj = "Je-li  zvolenГЎ karta shodnГЎ s dealerovou: nerozhodnГЅ vГЅsledek";
    this.ryt = "Eso je nejvyЕЎЕЎГ­, dvД› je nejniЕѕЕЎГ­, ЕѕГЎdnГ© divokГ© karty.";
    this.evo = "PORAZIT DEALERA KE ZDVOJNГЃSOBENГЌ VГќHRY";
    this.rbu = "VYBRAT SPRГЃVNOU HODNOTU KE ZDVOJNГЃSOBENГЌ VГќHRY";
    this.jly = "STEJNГ‰";
    this.iun = "HRГЃДЊ";
    this.qbh = "DEALER"
}
jvg.prototype = new har;

function chy() {
    this.awu = "HOIA";
    this.mjl = "PUNANE";
    this.urx = "MUST";
    this.wur = "KГ•RGE";
    this.gqj = "MADAL";
    this.owj = "JAGA KAARDID";
    this.isf = "HOIA KAARTE";
    this.san = "JAGA KAARDID";
    this.eki = "viis vГµrdvГ¤Г¤rset kaarti (vГµimalik ainult koos Wild kaardiga)";
    this.dao = "sama masti Г¤ss - kuningas - emand - soldat - kГјmme";
    this.tue = "RIDA samavГ¤rvi kaartidest";
    this.rpb = "neli sama vГ¤Г¤rtusega kaarti";
    this.jyq = "kombinatsioon KOLMIK ja PAAR";
    this.woh = "viis sama vГ¤rvi kaarti";
    this.shk = "viis jГ¤rjestikust, kuid erivГ¤rvi kaarti";
    this.bzk = "kolm vГµrdvГ¤Г¤rset kaarti";
    this.ozk = "kaks kindlat paari ja ГјkskГµik milline viies kaart";
    this.vhk = "kaks soldatit, emandat, kuningat vГµi Г¤ssa";
    this.bqj = "neli sama vГ¤rvi kaarti koos ГјkskГµik millise viienda kaardiga";
    this.ulr = "KUNINGLIK MASTIRIDA, mis sisaldab Wild kaarti";
    this.lcs = "neli kahte koos ГјkskГµik millise muu kaardiga";
    this.gjw = "neli viite, kuute, seitset, kaheksat, Гјheksat, kГјmmet, Soldatit, Emandat vГµi Kuningat";
    this.lcu = "neli kahte, kolme vГµi nelja koos ГјkskГµik millise muu kaardiga";
    this.dtt = "neli Г¤ssa ГјkskГµik millise muu kaardiga";
    this.jnt = "Neli 2-te, 3-e vГµi 4-ja koos 2, 3, vГµi 4";
    this.osz = "Neli Г¤ssa ja 2, 3, vГµi 4";
    this.hzk = "kaks Kuningat vГµi Г„ssa";
    this.zaj = "kaks kГјmmet, soldatit, emandat, kuningat vГµi Г¤ssa";
    this.rrv = "FIVE OF A KIND";
    this.ebq = "ROYAL FLUSH";
    this.syc = "STRAIGHT FLUSH";
    this.ibr = "FOUR OF A KIND";
    this.yov = "FULL HOUSE";
    this.nav = "FLUSH";
    this.xxw = "STRAIGHT";
    this.xto = "THREE OF A KIND";
    this.yej = "TWO PAIRS";
    this.ylj = "HIGH PAIR";
    this.trv = "FOUR FLUSH";
    this.pug = "POKER";
    this.hjh = "SKIP STRAIGHT";
    this.nux = "BLAZE";
    this.dmc = "CORNER STRAIGHT";
    this.oia = "TENS OR BETTER";
    this.rxz = "JACKS OR BETTER";
    this.mjb = "KINGS OR BETTER";
    this.tnh = "WILD ROYAL FLUSH";
    this.weu = "FOUR DEUCES";
    this.fzs = "FOUR 5 TO KING";
    this.zrk = "FOUR 2 TO 4";
    this.tkv = "FOUR ACES";
    this.xzp = "FOUR LOW WITH LOW";
    this.ksv = "FOUR ACES WITH 2, 3 OR 4";
    this.jly = "VIIK";
    this.iun = "PLAYER";
    this.qbh = "DEALER";
    this.ufn = "MГ„NGI VEEL VГ•I VГ•TA VГ•IT?";
    this.qvi = "Kui valitud kaart on suurem kui diileril: OLED VГ•ITNUD!";
    this.dbq = "Kui valitud kaart on vГ¤iksem kui diileril: kaotad";
    this.spj = "Kui valitud kaart on diileri kaardiga vГµrdne: viik";
    this.ryt = "Г„SS on kГµrgeim, kaks madalaim, metsikuid kaarte ei ole.";
    this.uqj = "rida Г¤ssaga keskel";
    this.pdy = "kombinatsioon soldatist, emandast ja kuningast";
    this.vcs = "kaheste vahedega rida";
    this.ksr = "VALI KAART";
    this.evo = "VГ•IDA DIILERIT, ET KAHEKORDISTADA OMA VГ•IT";
    this.rbu = "VГ•IDU DUUBELDAMISEKS VALI Г•IGE VГ„Г„RTUS"
}
chy.prototype = new rvm;

function nmu() {
    this.awu = "ОљОЎО‘О¤О—ОЈО¤О•";
    this.mjl = "ОљОџОљОљО™ОќОџ";
    this.urx = "ОњО‘ОҐОЎОџ";
    this.wur = "ОҐОЁО—О›Оџ";
    this.gqj = "О§О‘ОњО—О›Оџ";
    this.owj = "ОњОџО™ОЎО‘ОЈО¤О• О§О‘ОЎО¤О™О‘";
    this.isf = "ОљОЎО‘О¤О—ОЈО¤О• О§О‘ОЎО¤О™О‘";
    this.san = "О¤ОЎО‘О’О—ОћО¤О• О§О‘ОЎО¤О™О‘";
    this.eki = "ПЂО­ОЅП„Оµ ОЇОґО№О± П‡О±ПЃП„О№О¬ (ОјПЊОЅО· ПЂО№ОёО±ОЅПЊП„О·П„О± ОјОµ П„Ої Joker)";
    this.dao = "О¬ПѓПѓОїП‚ - ПЃО®ОіО±П‚ - ОЅП„О¬ОјО± - ОІО±О»О­П‚ - ОґО­ОєО± О±ПЂПЊ П„Ої ОЇОґО№Ої П‡ПЃПЋОјО±";
    this.tue = "STRAIGHT ОјОµ П‡О±ПЃП„О№О¬ О±ПЂПЊ П„Ої ОЇОґО№Ої П‡ПЃПЋОјО±";
    this.rpb = "П„О­ПѓПѓОµПЃО± П‡О±ПЃП„О№О¬ ОјОµ П„О·ОЅ ОЇОґО№О± О±ОѕОЇО±";
    this.jyq = "ПѓП…ОЅОґП…О±ПѓОјПЊП‚ О±ПЂПЊ THREE OF A KIND ОєО±О№ О­ОЅО± PAIR";
    this.woh = "ПЂО­ОЅП„Оµ П‡О±ПЃП„О№О¬ ОјОµ П„Ої ОЇОґО№Ої П‡ПЃПЋОјО±";
    this.shk = "ПЂО­ОЅП„Оµ П‡О±ПЃП„О№О¬ ПѓОµ О±ПЌОѕОїП…ПѓО± ПѓОµО№ПЃО¬, О±О»О»О¬ ПЊП‡О№ ОЇОґО№Ої П‡ПЃПЋОјО±";
    this.bzk = "П„ПЃОЇО± П‡О±ПЃП„О№О¬ ОЇОґО№О±П‚ О±ОѕОЇО±П‚";
    this.ozk = "ОґПЌОї ОґО№О±П†ОїПЃОµП„О№ОєО¬ О¶ОµП…ОіО¬ПЃО№О± ОєО±О№ ОїПЂОїО№ОїОґО®ПЂОїП„Оµ ПЂО­ОјПЂП„Ої П‡О±ПЃП„ОЇ";
    this.vhk = "ОґПЌОї ОІО±О»О­ОґОµП‚, ОЅП„О¬ОјОµП‚, ПЃО®ОіОµП‚ О® О¬ПѓПѓОїО№";
    this.bqj = "П„О­ПѓПѓОµПЃО± П‡О±ПЃП„О№О¬ О±ПЂПЊ П„Ої ОЇОґО№Ої П‡ПЃПЋОјО± ОјО±О¶ОЇ ОјОµ ОєО¬ОёОµ ПЂО­ОјПЂП„О· ОєО¬ПЃП„О±";
    this.uqj = "Straight ОјОµ О¬ПѓПѓОї ПѓП„Ої ОєО­ОЅП„ПЃОї";
    this.pdy = "ПѓП…ОЅОґО№О±ПѓОјПЊП‚ О±ПЂПЊ П†О№ОіОїПЌПЃОµП‚ ПЂОїП… ОІОіО±ОЇОЅОµО№ ОІО±О»О­П‚, ОЅП„О¬ОјО± ОєО±О№ ПЃО®ОіО±П‚";
    this.vcs = "ПѓОµО№ПЃО¬ ОјО±О¶ОЇ ОјОµ ОјОїОЅО¬ О® О¶П…ОіО¬ О­П‡ОµО№ ОґО№О±ОґОїП‡О№ОєО® О±ОѕОЇО±";
    this.ulr = "ROYAL FLUSH ПЂОµПЃО№О­П‡ОµО№ ОєО±О№ Joker";
    this.lcs = "П„О­ПѓПѓОµПЃО± ОґП…О¬ПЃО№О± ОјО±О¶ОЇ ОјОµ ОєО¬ОёОµ О¬О»О»О· ОєО¬ПЃП„О±";
    this.gjw = "П„О­ПѓПѓОµПЃО± 5's, 6's,7's, 8's, 9's, 10's, О’О‘О›О•О”О•ОЈ, ОќО¤О‘ОњО•ОЈ О® ОЎО—О“О•ОЈ";
    this.lcu = "О¤О­ПѓПѓОµПЃО± 2's О® 4's ОјО±О¶ОЇ ОјОµ ОєО¬ОёОµ О¬О»О»О· ОєО¬ПЃП„О±";
    this.dtt = "П„О­ПѓПѓОµПЃО№П‚ О¬ПѓПѓОїО№ ОјО±О¶ОЇ ОјОµ ОєО¬ОёОµ О¬О»О»О· ОєО¬ПЃП„О±";
    this.jnt = "О¤О­ПѓПѓОµПЃО± 2О¬ПЃО№О±, 3О¬ПЃО№О± О® 4О¬ПЃО№О± ОјО±О¶ОЇ ОјОµ О­ОЅО±ОЅ О†ПѓПѓОї, О­ОЅО± 2О¬ПЃО№, 3О¬ПЃО№ О® 4О¬ПЃО№";
    this.osz = "О¤О­ПѓПѓОµПЃО№П‚ О¬ПѓПѓОїО№ ОјО±О¶ОЇ ОјОµ О­ОЅО± 2, 3 О® 4";
    this.hzk = "ОґПЌОї ОЎО®ОіОµП‚ О® О†ПѓПѓОїО№";
    this.zaj = "ОґПЌОї ОґОµОєО¬ПЃО№О±, ОІО±О»О­ОґОµП‚, ОЅП„О¬ОјОµП‚, ПЃО®ОіОµП‚ О® О¬ПѓПѓОїО№";
    this.rrv = "FIVE OF A KIND";
    this.ebq = "ROYAL FLUSH";
    this.syc = "STRAIGHT FLUSH";
    this.ibr = "FOUR OF A KIND";
    this.yov = "FULL HOUSE";
    this.nav = "FLUSH";
    this.xxw = "STRAIGHT";
    this.xto = "THREE OF A KIND";
    this.yej = "TWO PAIRS";
    this.ylj = "HIGH PAIR";
    this.trv = "FOUR FLUSH";
    this.pug = "POKER";
    this.hjh = "SKIP STRAIGHT";
    this.nux = "BLAZE";
    this.dmc = "CORNER STRAIGHT";
    this.oia = "TENS OR BETTER";
    this.rxz = "JACKS OR BETTER";
    this.mjb = "KINGS OR BETTER";
    this.tnh = "WILD ROYAL FLUSH";
    this.weu = "FOUR DEUCES";
    this.fzs = "FOUR 5 TO KING";
    this.zrk = "FOUR 2 TO 4";
    this.tkv = "FOUR ACES";
    this.xzp = "FOUR LOW WITH LOW";
    this.ksv = "FOUR ACES WITH 2, 3 OR 4";
    this.evo = "ОљО•ОЎО”О™ОЈО¤О• О¤ОџОќ ОќО¤О™О›О•ОЎ О“О™О‘ ОќО‘ О”О™О О›О‘ОЈО™О‘ОЈО•О¤О• О¤Оџ ОљО•ОЎО”ОџОЈ ОЈО‘ОЈ";
    this.jly = "О™ОЈОџО О‘О›О™О‘";
    this.iun = "О О‘IО§О¤О—ОЈ";
    this.qbh = "ОќО¤HО›О•ОЎ";
    this.ufn = "ОћО‘ОќA ОЎIОЈОљОџ H О О‘ОЎО‘О›О‘О’H;";
    this.qvi = "О‘ОЅ О­П‡ОµП„Оµ П‡О±ПЃП„ОЇ ОјОµОіО±О»ПЌП„ОµПЃОї О±ПЂПЊ П„ОїОЅ ОєПЃОїП…ПЂО№О­ПЃО·: ОљО•ОЎО”О™О–О•О¤О•!";
    this.dbq = "О‘ОЅ О­П‡ОµП„Оµ П‡О±ПЃП„ОЇ ОјО№ОєПЃПЊП„ОµПЃОї О±ПЂПЊ П„ОїОЅ ОєПЃОїП…ПЂО№О­ПЃО·: О§О‘ОќО•О¤О•!";
    this.spj = "О‘ОЅ О­П‡ОµП„Оµ П„Ої ОЇОґО№Ої П‡О±ПЃП„ОЇ ОјОµ П„ОїОЅ ОєПЃОїП…ПЂО№О­ПЃО·: О№ПѓОїОІО±ОёОјО®П„Оµ";
    this.ryt = "О‘ПѓПѓОїП‚ ОµОЇОЅО±О№ П„Ої ОјОµОіО±О»ПЌП„ОµПЃОї, ОґПЌОї ОµОЇОЅО±О№ П„Ої ОјО№ОєПЃПЊП„ОµПЃОї, ОґОµОЅ П…ПЂО¬ПЃП‡ОµО№ О¤О¶ПЊОєОµПЃ";
    this.ksr = "О•О О™О›EОћО¤О• ОљAОЎО¤О‘";
    this.rbu = "О•О О™О›О•ОћО¤О• О¤О— ОЈО©ОЈО¤О— О‘ОћО™О‘ О“О™О‘ ОќО‘ О”О™О О›О‘ОЈО™О‘ОЈО•О¤О• О¤Оџ ОљО•ОЎО”ОџОЈ ОЈО‘ОЈ"
}
nmu.prototype = new mjd;

function iqe() {
    this.awu = "Р—РђР”РЄР Р–РђРќР";
    this.mjl = "Р§Р•Р Р’Р•РќРђ";
    this.urx = "Р§Р•Р РќРђ";
    this.wur = "Р“РћР›РЇРњРђ";
    this.gqj = "РњРђР›РљРђ";
    this.owj = "Р РђР—Р”РђР’РђРќР• РќРђ РљРђР РўРРўР•";
    this.isf = "Р—РђРџРђР—Р•РўР• РљРђР РўР";
    this.san = "РР—РўР•Р“Р›Р•РўР• РљРђР РўР";
    this.eki = "РїРµС‚ РµРґРЅР°РєРІРё РєР°СЂС‚Рё (СЃР°РјРѕ СЃ РґР¶РѕРєРµСЂ)";
    this.dao = "РђСЃРµ - РџРѕРї - Р”Р°РјР° - Р’Р°Р»Рµ - 10 РѕС‚ РµРґРёРЅ Рё СЃСЉС‰ С†РІСЏС‚";
    this.tue = "РљР•РќРўРђ СЃ РєР°СЂС‚Рё РѕС‚ РµРґРёРЅ Рё СЃСЉС‰ С†РІСЏС‚";
    this.rpb = "С‡РµС‚РёСЂРё РєР°СЂС‚Рё СЃ РµРґРЅР° Рё СЃСЉС‰Р° СЃС‚РѕР№РЅРѕСЃС‚";
    this.jyq = "РєРѕРјР±РёРЅР°С†РёСЏ РѕС‚ С‚СЂРё РµРґРЅР°РєРІРё РєР°СЂС‚Рё Рё РµРґРёРЅ С‡РёС„С‚";
    this.woh = "РїРµС‚ РµРґРЅР°РєРІРё РєР°СЂС‚Рё";
    this.shk = "РїРµС‚ РїРѕСЂРµРґРЅРё РєР°СЂС‚Рё, РЅРѕ РѕС‚ СЂР°Р·Р»РёС‡РµРЅ С†РІСЏС‚";
    this.bzk = "С‚СЂРё РєР°СЂС‚Рё СЃ РµРґРЅР° Рё СЃСЉС‰Р° СЃС‚РѕР№РЅРѕСЃС‚";
    this.ozk = "РґРІРµ СЂР°Р·Р»РёС‡РЅРё РґРІРѕР№РєРё Рё РЅСЏРєРѕСЏ РґСЂСѓРіР° 5-С‚Р° РєР°СЂС‚Р°";
    this.vhk = "РґРІРµ Р’Р°Р»РµС‚Р°, Р”Р°РјРё, РџРѕРїР° РёР»Рё РђСЃР°";
    this.bqj = "С‡РµС‚РёСЂРё РєР°СЂС‚Рё РѕС‚ РµРґРёРЅ Рё СЃСЉС‰ С†РІСЏС‚ СЃ РЅСЏРєРѕСЏ РґСЂСѓРіР° РєР°СЂС‚Р°";
    this.ulr = "РљР•РќРў Р¤Р›Р•РЁ Р РћРЇР› СЃ РґР¶РѕРєРµСЂ";
    this.lcs = "С‡РµС‚РёСЂРё 2-РєРё СЃ РЅСЏРєРѕСЏ РґСЂСѓРіР° РєР°СЂС‚Р°";
    this.gjw = "С‡РµС‚РёСЂРё 5-С†Рё, 6-С†Рё, 7-С†Рё, 8-С†Рё, 9-РєРё, 10-РєРё, Р’РђР›Р•РўРђ, Р”РђРњР РёР»Рё РџРћРџРћР’Р•";
    this.lcu = "С‡РµС‚РёСЂРё 2-РєРё, 3-РєРё РёР»Рё 4-РєРё СЃ РЅСЏРєРѕСЏ РґСЂСѓРіР° РєР°СЂС‚Р°";
    this.dtt = "С‡РµС‚РёСЂРё РђСЃР° СЃ РЅСЏРєРѕСЏ РґСЂСѓРіР° РєР°СЂС‚Р°";
    this.jnt = "С‡РµС‚РёСЂРё 2-РєРё, 3-РєРё, РёР»Рё 4-РєРё СЃ РђСЃ, 2-РєР°, 3-РєР° РёР»Рё 4-РєР°";
    this.osz = "С‡РµС‚РёСЂРё РђСЃР° СЃ 2-РєР°, 3-РєР° РёР»Рё 4-РєР°";
    this.hzk = "РґРІР° РџРѕРїР° РёР»Рё РђСЃР°";
    this.zaj = "РґРІРµ 10-РєРё, Р’Р°Р»РµС‚Р°, Р”Р°РјРё, РџРѕРїР° РёР»Рё РђСЃР°";
    this.rrv = "FIVE OF A KIND";
    this.ebq = "ROYAL FLUSH";
    this.syc = "STRAIGHT FLUSH";
    this.ibr = "FOUR OF A KIND";
    this.yov = "FULL HOUSE";
    this.nav = "FLUSH";
    this.xxw = "STRAIGHT";
    this.xto = "THREE OF A KIND";
    this.yej = "TWO PAIRS";
    this.ylj = "HIGH PAIR";
    this.trv = "FOUR FLUSH";
    this.pug = "POKER";
    this.hjh = "SKIP STRAIGHT";
    this.nux = "BLAZE";
    this.dmc = "CORNER STRAIGHT";
    this.oia = "TENS OR BETTER";
    this.rxz = "JACKS OR BETTER";
    this.mjb = "KINGS OR BETTER";
    this.tnh = "WILD ROYAL FLUSH";
    this.weu = "FOUR DEUCES";
    this.fzs = "FOUR 5 TO KING";
    this.zrk = "FOUR 2 TO 4";
    this.tkv = "FOUR ACES";
    this.xzp = "FOUR LOW WITH LOW";
    this.ksv = "FOUR ACES WITH 2, 3 OR 4";
    this.jly = "РќР•Р Р•РЁР•РќРћ";
    this.iun = "РР“Р РђР§";
    this.qbh = "Р”РР›РЄР ";
    this.ufn = "Р”РЈР‘Р›РР РђР™РўР• РћРўРќРћР’Рћ РР›Р РџР РР‘Р•Р Р•РўР•?";
    this.qvi = "РђРєРѕ РёР·Р±СЂР°РЅР°С‚Р° РєР°СЂС‚Р° Рµ РїРѕ-РіРѕР»СЏРјР° РѕС‚ РєР°СЂС‚Р°С‚Р° РЅР° РґРёР»СЉСЂР°:РџР•Р§Р•Р›РРўР•!";
    this.dbq = "РђРєРѕ РёР·Р±СЂР°РЅР°С‚Р° РєР°СЂС‚Р° Рµ РїРѕ-РјР°Р»РєР° РѕС‚ РґРёР»СЉСЂРѕРІР°С‚Р°:Р“РЈР‘РРўР•";
    this.spj = "РђРєРѕ РёР·Р±СЂР°РЅР°С‚Р° Рµ СЃСЉС‰Р°С‚Р°:РќРµСЂРµС€РµРЅРѕ";
    this.ryt = "РђСЃ Рµ РЅР°Р№-РіРѕР»СЏРјР°С‚Р°, 2-РєР° Рµ РЅР°Р№-РјР°Р»РєР°С‚Р°, Р±РµР· РґР¶РѕРєРµСЂ РєР°СЂС‚Рё.";
    this.uqj = "РїРµС‚ РїРѕСЂРµРґРЅРё РєР°СЂС‚Рё СЃ РђСЃ РІ СЃСЂРµРґР°С‚Р°";
    this.pdy = "РєРѕРјР±РёРЅР°С†РёСЏ РѕС‚ РєР°СЂС‚Рё РІ РєРѕРёС‚Рѕ РёРјР°(K -Q -J -РџРѕРї, Р”Р°РјР°, Р’Р°Р»Рµ)";
    this.vcs = "РїРµС‚ РєР°СЂС‚Рё СЃ С‡РµС‚РЅРё РёР»Рё РЅРµС‡РµС‚РЅРё СЃС‚РѕР№РЅРѕСЃС‚Рё";
    this.ksr = "Р—РђР”Р РЄР–РўР• РљРђР РўР";
    this.evo = "РџРћР‘Р•Р”Р Р”РР›РЄР Рђ, Р—Рђ Р”Рђ РЈР”Р’РћРРЁ РџР•Р§РђР›Р‘РђРўРђ";
    this.rbu = "РР—Р‘Р•Р Р РџР РђР’РР›РќРђРўРђ РЎРўРћР™РќРћРЎРў, Р—Рђ Р”Рђ РЈР”Р’РћРРЁ РџР•Р§РђР›Р‘РђРўРђ"
}
iqe.prototype = new znh;

function gnr() {
    this.awu = "бѓ“бѓђбѓбѓ­бѓбѓ бѓ”бѓ—";
    this.mjl = "бѓ¬бѓбѓ—бѓ”бѓљбѓ";
    this.urx = "бѓЁбѓђбѓ•бѓ";
    this.wur = "бѓ›бѓђбѓ¦бѓђбѓљбѓ";
    this.gqj = "бѓ“бѓђбѓ‘бѓљбѓђ";
    this.owj = "бѓђбѓбѓ¦бѓ”бѓ— бѓ‘бѓђбѓ бѓђбѓ—бѓ";
    this.isf = "бѓ“бѓђбѓбѓ­бѓбѓ бѓ”бѓ— бѓ‘бѓђбѓ бѓђбѓ—бѓ”бѓ‘бѓ";
    this.san = "бѓђбѓбѓ¦бѓ”бѓ— бѓ‘бѓђбѓ бѓђбѓ—бѓ";
    this.eki = "бѓ®бѓЈбѓ—бѓ бѓбѓ’бѓбѓ•бѓ” бѓ›бѓњбѓбѓЁбѓ•бѓњбѓ”бѓљбѓќбѓ‘бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ (бѓЁбѓ”бѓЎбѓђбѓ«бѓљбѓќбѓђ бѓ›бѓќбѓћбѓќбѓ•бѓ”бѓ‘бѓЈбѓљ бѓбѓҐбѓњбѓђбѓЎ бѓ›бѓ®бѓќбѓљбѓќбѓ“ бѓЇбѓќбѓ™бѓ”бѓ бѓбѓ—)";
    this.dao = "бѓбѓ’бѓбѓ•бѓ” бѓ¤бѓ”бѓ бѓбѓЎ бѓўбѓЈбѓ–бѓ - бѓ›бѓ”бѓ¤бѓ” - бѓ“бѓђбѓ›бѓђ - бѓ•бѓђбѓљбѓ”бѓўбѓ - бѓђбѓ—бѓбѓђбѓњбѓ";
    this.tue = "Straight бѓбѓ’бѓбѓ•бѓ” бѓ¤бѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ”бѓ‘бѓбѓ—";
    this.rpb = "бѓбѓ’бѓбѓ•бѓ” бѓбѓ”бѓ бѓђбѓ бѓҐбѓбѓбѓЎ бѓќбѓ—бѓ®бѓ бѓ™бѓђбѓ бѓўбѓ";
    this.jyq = "Three Of A Kind-бѓбѓЎбѓђ бѓ“бѓђ бѓ”бѓ бѓ—бѓ Pair-бѓбѓЎ бѓ™бѓќбѓ›бѓ‘бѓбѓњбѓђбѓЄбѓбѓђ";
    this.woh = "бѓ®бѓЈбѓ—бѓ бѓ”бѓ бѓ—бѓ бѓ“бѓђ бѓбѓ’бѓбѓ•бѓ” бѓ¤бѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ";
    this.shk = "бѓ®бѓЈбѓ—бѓ бѓ—бѓђбѓњбѓ›бѓбѓ›бѓ“бѓ”бѓ•бѓ бѓЈбѓљбѓ бѓ™бѓђбѓ бѓўбѓ";
    this.bzk = "бѓЎбѓђбѓ›бѓ бѓ—бѓђбѓњбѓђбѓ‘бѓђбѓ бѓ бѓ™бѓђбѓ бѓўбѓ";
    this.ozk = "бѓќбѓ бѓ бѓќбѓ  бѓ—бѓђбѓњбѓђбѓ‘бѓђбѓ  бѓ™бѓђбѓ бѓўбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.vhk = "бѓќбѓ бѓ бѓ—бѓђбѓњбѓђбѓ‘бѓђбѓ бѓ бѓ™бѓђбѓ бѓўбѓ бѓ•бѓђбѓљбѓ”бѓўбѓбѓ— бѓ–бѓ”бѓ•бѓбѓ—бѓ™бѓ”бѓњ";
    this.bqj = "бѓќбѓ—бѓ®бѓ бѓЎбѓ®бѓ•бѓђбѓ“бѓђбѓЎбѓ®бѓ•бѓђ бѓ”бѓ бѓ—бѓ бѓ“бѓђ бѓбѓ’бѓбѓ•бѓ” бѓ¤бѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ";
    this.uqj = "Straight бѓЁбѓЈбѓђбѓЁбѓ бѓўбѓЈбѓ–бѓбѓ—";
    this.pdy = "5 бѓњбѓђбѓ®бѓђбѓўбѓбѓђбѓњбѓ бѓ™бѓђбѓ бѓўбѓ";
    this.vcs = "Straight бѓЎбѓђбѓ“бѓђбѓЄ бѓ§бѓќбѓ•бѓ”бѓљбѓ бѓ›бѓ”бѓќбѓ бѓ” бѓ™бѓђбѓ бѓўбѓ бѓђбѓ™бѓљбѓбѓђ";
    this.ulr = "ROYAL FLUSH бѓ бѓќбѓ›бѓ”бѓљбѓбѓЄ бѓЁбѓ”бѓбѓЄбѓђбѓ•бѓЎ бѓЇбѓќбѓ™бѓ”бѓ бѓЎ";
    this.lcs = "бѓќбѓ—бѓ®бѓ бѓќбѓ бѓбѓђбѓњбѓ бѓњбѓ”бѓ‘бѓбѓЎбѓ›бѓбѓ”бѓ  бѓЎбѓ®бѓ•бѓђ бѓ™бѓђбѓ бѓўбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.gjw = "бѓќбѓ—бѓ®бѓ 5-бѓбѓђбѓњбѓ, 6-бѓбѓђбѓњбѓ, 7-бѓбѓђбѓњбѓ, 8-бѓбѓђбѓњбѓ, 9-бѓбѓђбѓњбѓ, 10-бѓбѓђбѓњбѓ, бѓ•бѓђбѓљбѓ”бѓўбѓ, бѓ“бѓђбѓ›бѓђ бѓђбѓњ бѓ›бѓ”бѓ¤бѓ”";
    this.lcu = "бѓќбѓ—бѓ®бѓ 2-бѓбѓђбѓњбѓ, 3-бѓбѓђбѓњбѓ бѓђбѓњ 4-бѓбѓђбѓњбѓ бѓњбѓ”бѓ‘бѓбѓЎбѓ›бѓбѓ”бѓ  бѓЎбѓ®бѓ•бѓђ бѓ™бѓђбѓ бѓўбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.dtt = "бѓќбѓ—бѓ®бѓ бѓўбѓЈбѓ–бѓ бѓњбѓ”бѓ‘бѓбѓЎбѓ›бѓбѓ”бѓ  бѓЎбѓ®бѓ•бѓђ бѓ™бѓђбѓ бѓўбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.jnt = "бѓќбѓ—бѓ®бѓ 2-бѓбѓђбѓњбѓ, 3-бѓбѓђбѓњбѓ бѓђбѓњ 4-бѓбѓђбѓњбѓ бѓўбѓЈбѓ–бѓ—бѓђбѓњ 2-бѓбѓђбѓњбѓ—бѓђбѓњ, 3-бѓбѓђбѓњбѓ—бѓђбѓњ бѓђбѓњ 4-бѓбѓђбѓњбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.osz = "бѓќбѓ—бѓ®бѓ бѓўбѓЈбѓ–бѓ 2, 3 бѓђбѓњ 4-бѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.hzk = "бѓќбѓ бѓ бѓ›бѓ”бѓ¤бѓ” бѓђбѓњ бѓўбѓЈбѓ–бѓ";
    this.zaj = "бѓќбѓ бѓ бѓђбѓ—бѓбѓђбѓњбѓ, бѓ•бѓђбѓљбѓ”бѓўбѓ, бѓ“бѓђбѓ›бѓђ, бѓ›бѓ”бѓ¤бѓ” бѓђбѓњ бѓўбѓЈбѓ–бѓ";
    this.rrv = "FIVE OF A KIND";
    this.ebq = "ROYAL FLUSH";
    this.syc = "STRAIGHT FLUSH";
    this.ibr = "FOUR OF A KIND";
    this.yov = "FULL HOUSE";
    this.nav = "FLUSH";
    this.xxw = "STRAIGHT";
    this.xto = "THREE OF A KIND";
    this.yej = "TWO PAIRS";
    this.ylj = "HIGH PAIR";
    this.trv = "FOUR FLUSH";
    this.pug = "POKER";
    this.hjh = "SKIP STRAIGHT";
    this.nux = "BLAZE";
    this.dmc = "CORNER STRAIGHT";
    this.oia = "TENS OR BETTER";
    this.rxz = "JACKS OR BETTER";
    this.mjb = "KINGS OR BETTER";
    this.tnh = "WILD ROYAL FLUSH";
    this.weu = "FOUR DEUCES";
    this.fzs = "FOUR 5 TO KING";
    this.zrk = "FOUR 2 TO 4";
    this.tkv = "FOUR ACES";
    this.xzp = "FOUR LOW WITH LOW";
    this.ksv = "FOUR ACES WITH 2, 3 OR 4";
    this.ufn = "бѓбѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ— бѓђбѓњ бѓђбѓбѓ¦бѓ”бѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ?";
    this.ksr = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓ™бѓђбѓ бѓўбѓ";
    this.qvi = "бѓ—бѓЈ бѓђбѓ бѓ©бѓ”бѓЈбѓљбѓ бѓ™бѓђбѓ бѓўбѓ бѓ“бѓбѓљбѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ–бѓ” бѓЈбѓ¤бѓ бѓќ бѓ›бѓђбѓ¦бѓђбѓљбѓбѓђ: бѓ—бѓҐбѓ•бѓ”бѓњ бѓ›бѓќбѓбѓ’бѓ”бѓ‘бѓ—!";
    this.dbq = "бѓ—бѓЈ бѓђбѓ бѓ©бѓ”бѓЈбѓљбѓ бѓ™бѓђбѓ бѓўбѓ бѓ“бѓбѓљбѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ–бѓ” бѓЈбѓ¤бѓ бѓќ бѓ“бѓђбѓ‘бѓђбѓљбѓбѓђ: бѓ—бѓҐбѓ•бѓ”бѓњ бѓ¬бѓђбѓђбѓ’бѓ”бѓ‘бѓ—";
    this.spj = "бѓ—бѓЈ бѓђбѓ бѓ©бѓ”бѓЈбѓљбѓ бѓ™бѓђбѓ бѓўбѓ бѓбѓ’бѓбѓ•бѓ”бѓђ бѓ бѓђбѓЄ бѓ“бѓбѓљбѓ”бѓ бѓЎ бѓђбѓҐбѓ•бѓЎ: бѓђбѓњбѓ’бѓђбѓ бѓбѓЁбѓбѓђ бѓ¤бѓ бѓ”";
    this.ryt = "бѓўбѓЈбѓ–бѓ бѓђбѓ бѓбѓЎ бѓ§бѓ•бѓ”бѓљбѓђбѓ–бѓ” бѓ›бѓђбѓ¦бѓђбѓљбѓ, бѓќбѓ бѓбѓђбѓњбѓ бѓ§бѓ•бѓ”бѓљбѓђбѓ–бѓ” бѓ“бѓђбѓ‘бѓђбѓљбѓ, бѓЇбѓќбѓ™бѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ бѓђбѓ  бѓ—бѓђбѓ›бѓђбѓЁбѓ“бѓ”бѓ‘бѓђ.";
    this.jly = "бѓ¤бѓ бѓ”";
    this.iun = "бѓ›бѓќбѓ—бѓђбѓ›бѓђбѓЁбѓ”";
    this.qbh = "бѓ“бѓбѓљбѓ”бѓ бѓ";
    this.evo = "бѓ›бѓќбѓЈбѓ’бѓ”бѓ— бѓ“бѓбѓљбѓ”бѓ бѓЎ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓќбѓ бѓ›бѓђбѓ’бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.rbu = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓЎбѓ¬бѓќбѓ бѓ бѓЎбѓбѓ“бѓбѓ“бѓ” бѓ бѓќбѓ› бѓ’бѓђбѓђбѓќбѓ бѓ›бѓђбѓ’бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ"
}
gnr.prototype = new iqd;

function ksf() {
    this.awu = "TART";
    this.mjl = "PIROS";
    this.urx = "FEKETE";
    this.wur = "MAGAS";
    this.gqj = "ALACSONY";
    this.owj = "KГ‰RJEN LAPOKAT";
    this.isf = "TARTSON LAPOKAT";
    this.san = "KГ‰RJEN LAPOKAT";
    this.eki = "Г¶t egyforma lap (az Г¶tГ¶dik a JOKER)";
    this.dao = "ГЎsz - kirГЎly - dГЎma - bubi - tizes egy szГ­nben";
    this.tue = "SOR egyforma szГ­nЕ± lapokbГіl";
    this.rpb = "nГ©gy egyforma lap";
    this.jyq = "hГЎrom Г©s kettЕ‘ egyforma lap";
    this.woh = "Г¶t egyforma szГ­nЕ± lap";
    this.shk = "Г¶t sorban kГ¶vetkezЕ‘ lap nem egyforma szГ­nben";
    this.bzk = "hГЎrom egyforma lap";
    this.ozk = "kettЕ‘ pГЎr Г©s mГ©g egy lap";
    this.vhk = "kettЕ‘ Bubi, DГЎma, KirГЎly vagy ГЃsz";
    this.bqj = "nГ©gy egyforma Г©s egy mГЎsmilyen szГ­nЕ± lap";
    this.uqj = "5 sorban kГ¶vetkezЕ‘ lap A-val a kГ¶zГ©pen";
    this.pdy = "5 'kГ©pes' lap";
    this.vcs = "5 egymГЎst kГ¶vetЕ‘ pГЎros vagy pГЎratlan lap";
    this.ulr = "ROYAL FLUSH amelyben van Joker";
    this.lcs = "nГ©gy kettes Г©s mГ©g egy lap";
    this.gjw = "nГ©gy 5-Г¶s, 6-os, 7-es, 8-as, 9-es, 10-es, Bubi, DГЎma vagy KirГЎly";
    this.lcu = "nГ©gy kettes, hГЎrmas vagy nГ©gyes + egy lap";
    this.dtt = "nГ©gy ГЎsz Г©s mГ©g egy lap";
    this.jnt = "nГ©gy 2, 3 vagy 4 meg egy ГЎsz, 2, 3 vagy 4";
    this.osz = "nГ©gy ГЃsz Г©s 2, 3 vagy 4";
    this.hzk = "kettЕ‘ KirГЎly vagy ГЃsz";
    this.zaj = "kettЕ‘ tizes, bubi, dГЎma, kirГЎly vagy ГЎsz";
    this.rrv = "FIVE OF A KIND";
    this.ebq = "ROYAL FLUSH";
    this.syc = "STRAIGHT FLUSH";
    this.ibr = "FOUR OF A KIND";
    this.yov = "FULL HOUSE";
    this.nav = "FLUSH";
    this.xxw = "STRAIGHT";
    this.xto = "THREE OF A KIND";
    this.yej = "TWO PAIRS";
    this.ylj = "HIGH PAIR";
    this.trv = "FOUR FLUSH";
    this.pug = "POKER";
    this.hjh = "SKIP STRAIGHT";
    this.nux = "BLAZE";
    this.dmc = "CORNER STRAIGHT";
    this.oia = "TENS OR BETTER";
    this.rxz = "JACKS OR BETTER";
    this.mjb = "KINGS OR BETTER";
    this.tnh = "WILD ROYAL FLUSH";
    this.weu = "FOUR DEUCES";
    this.fzs = "FOUR 5 TO KING";
    this.zrk = "FOUR 2 TO 4";
    this.tkv = "FOUR ACES";
    this.xzp = "FOUR LOW WITH LOW";
    this.ksv = "FOUR ACES WITH 2, 3 OR 4";
    this.ufn = "SZOROZZA VAGY FELГЌRJA?";
    this.ksr = "VГЃLASSZON EGY LAPOT";
    this.qvi = "Ha a kivГЎlasztott lap az osztГі lapjГЎtГіl nagyobb: NYERT!";
    this.dbq = "Ha a kivГЎlasztott lap az osztГі lapjГЎtГіl kisebb: veszГ­tett";
    this.spj = "Ha a kГ©t lap egyforma: dГ¶ntetlen";
    this.ryt = "Az ГЃSZ a legnagyobb a kettes pedig a legkisebb lap.";
    this.jly = "DГ–NTETLEN";
    this.iun = "JГЃTГ‰KOS";
    this.qbh = "OSZTГ“";
    this.evo = "GYЕђZZE LE AZ OSZTГ“T, HOGY MEGDUPLГЃZZA A NYEREMГ‰NYT";
    this.rbu = "VГЃLASSZA A MEGFELELЕђT, HOGY MEGDUPLГЃZZA A NYEREMГ‰NYT"
}
ksf.prototype = new fqv;

function rqu() {
    this.awu = "ЕўINERE";
    this.mjl = "ROЕћU";
    this.urx = "NEGRU";
    this.wur = "MARE";
    this.gqj = "MICД‚";
    this.owj = "ГЋMPД‚RЕўIRE CД‚RЕўI";
    this.isf = "ЕўINERE CД‚RЕўI";
    this.san = "ГЋMPД‚RЕўIRE CД‚RЕўI";
    this.eki = "Cinci cДѓrЕЈi identice (posibil numai cu joker)";
    this.dao = "As - rege - damДѓ - valet - zece de aceeaЕџi culoare";
    this.tue = "STRAIGHT cu cДѓrЕЈi de aceeaЕџi culoare";
    this.rpb = "Patru cДѓrЕЈi de aceeaЕџi valoare";
    this.jyq = "CombinaЕЈie din THREE OF A KIND Еџi PAIR";
    this.woh = "Cinci cДѓrЕЈi de aceeaЕџi culoare";
    this.shk = "Cinci cДѓrЕЈi Г®n succesiune ordonatДѓ, nu de aceeaЕџi culoare";
    this.bzk = "Trei cДѓrЕЈi egale ca valoare";
    this.ozk = "DouДѓ perechi diferite Еџi o a cincea carte";
    this.vhk = "DouДѓ cДѓrЕЈi cu valeЕЈi, dame, regi sau aЕџi";
    this.bqj = "Patru cДѓrЕЈi de aceeaЕџi culoare cu o a 5-a carte";
    this.uqj = "Straight cu as Г®n mijloc";
    this.pdy = "CombinaЕЈie de cДѓrЕЈi cu figuri cu valet, damДѓ Еџi rege";
    this.vcs = "Cinci valori succesive cu soЕЈ sau fДѓrДѓ soЕЈ";
    this.ulr = "ROYAL FLUSH cu joker";
    this.lcs = "Patru cДѓrЕЈi de doi cu o altДѓ carte";
    this.gjw = "Patru cДѓrЕЈi de 5, 6, 7, 8, 9, 10, valeЕЈi, dame sau regi";
    this.lcu = "Patru cДѓrЕЈi de 2, 3 sau 4 cu o altДѓ carte";
    this.dtt = "Patru aЕџi cu o altДѓ carte";
    this.jnt = "Patru cДѓrЕЈi de 2, 3 sau 4 cu un as, o carte de 2, 3 sau 4";
    this.osz = "Patru aЕџi cu o carte de 2, 3 sau 4";
    this.hzk = "Doi regi sau doi aЕџi.";
    this.zaj = "DouДѓ cДѓrЕЈi de 10, valeЕЈi, dame, regi sau aЕџi";
    this.rrv = "FIVE OF A KIND";
    this.ebq = "ROYAL FLUSH";
    this.syc = "STRAIGHT FLUSH";
    this.ibr = "FOUR OF A KIND";
    this.yov = "FULL HOUSE";
    this.nav = "FLUSH";
    this.xxw = "STRAIGHT";
    this.xto = "THREE OF A KIND";
    this.yej = "TWO PAIRS";
    this.ylj = "HIGH PAIR";
    this.trv = "FOUR FLUSH";
    this.pug = "POKER";
    this.hjh = "SKIP STRAIGHT";
    this.nux = "BLAZE";
    this.dmc = "CORNER STRAIGHT";
    this.oia = "TENS OR BETTER";
    this.rxz = "JACKS OR BETTER";
    this.mjb = "KINGS OR BETTER";
    this.tnh = "WILD ROYAL FLUSH";
    this.weu = "FOUR DEUCES";
    this.fzs = "FOUR 5 TO KING";
    this.zrk = "FOUR 2 TO 4";
    this.tkv = "FOUR ACES";
    this.xzp = "FOUR LOW WITH LOW";
    this.ksv = "FOUR ACES WITH 2, 3 OR 4";
    this.ufn = "GAMBLE SAU RIDICAREA CГ‚ЕћTIGULUI?";
    this.ksr = "ALEGEЕўI O CARTE";
    this.qvi = "CГўnd cartea aleasДѓ este mai mare decГўt cea a dealerului: cГўЕџtig!";
    this.dbq = "CГўnd cartea aleasДѓ este mai micДѓ decГўt cea a dealerului: fДѓrДѓ cГўЕџtig";
    this.spj = " CГўnd cartea aleasДѓ este identicДѓ cu cea a dealerului: egal";
    this.ryt = "As este cartea cea mai mare, 2 este cartea cea mai micДѓ, fДѓrДѓ joker.";
    this.jly = "EGAL";
    this.iun = "PLAYER";
    this.qbh = "DEALER";
    this.evo = "ГЋNVINGE DEALERUL PENTRU DUBLAREA PROFITULUI";
    this.rbu = "SELECTEAZД‚ VALOAREA CORECTД‚ PENTRU DUBLAREA CГ‚ЕћTIGULUI"
}
rqu.prototype = new pbx;

function vxk() {
    this.awu = "HELD";
    this.mjl = "VERMELHO";
    this.urx = "PRETO";
    this.wur = "ALTO";
    this.gqj = "BAIXO";
    this.owj = "DAR CARTAS";
    this.isf = "RETER CARTAS";
    this.san = "DAR CARTAS";
    this.eki = "Cinco cartas iguais com o mesmo valor (sГі Г© possГ­vel com curinga)";
    this.dao = "ГЃs - Rei - Dama - Valete - Dez de um naipe";
    this.tue = "STRAIGHT do mesmo naipe";
    this.rpb = "Quatro cartas do mesmo valor";
    this.jyq = "CombinaГ§ГЈo de THREE OF A KIND e PAIR";
    this.woh = "Cinco cartas com o mesmo naipe";
    this.shk = "Cinco cartas sucessivas, sem o mesmo naipe";
    this.bzk = "TrГЄs cartas do mesmo valor";
    this.ozk = "Dois pares diferentes e uma 5ВЄ carta";
    this.vhk = "Dois valetes, damas, reis ou ГЎses";
    this.bqj = "Quatro cartas do mesmo naipe com uma 5ВЄ";
    this.uqj = "Uma escada com um ГЎs no centro";
    this.pdy = "Uma combinaГ§ГЈo somente de figuras";
    this.vcs = "SequГЄncia de pares ou Г­mpares de sucessivos valores";
    this.ulr = "ROYAL FLUSH com curinga";
    this.lcs = "Quatro dois com uma outra carta";
    this.gjw = "Quatro 5, 6, 7, 8, 9, 10, valete, dama, rei";
    this.lcu = "Quatro 2, 3 ou 4 com outra carta";
    this.dtt = "Quatro ГЎses com uma outra carta";
    this.jnt = "Quatro 2,3 ou 4 A, 2, 3 ou 4";
    this.osz = "Quatro ГЎses com 2,3 ou 4";
    this.hzk = "Dois reis ou dois ГЎses";
    this.zaj = "Dois 10, valetes, damas, reis ou ГЎses";
    this.rrv = "FIVE OF A KIND";
    this.ebq = "ROYAL FLUSH";
    this.syc = "STRAIGHT FLUSH";
    this.ibr = "FOUR OF A KIND";
    this.yov = "FULL HOUSE";
    this.nav = "FLUSH";
    this.xxw = "STRAIGHT";
    this.xto = "THREE OF A KIND";
    this.yej = "TWO PAIRS";
    this.ylj = "HIGH PAIR";
    this.trv = "FOUR FLUSH";
    this.pug = "POKER";
    this.hjh = "SKIP STRAIGHT";
    this.nux = "BLAZE";
    this.dmc = "CORNER STRAIGHT";
    this.oia = "TENS OR BETTER";
    this.rxz = "JACKS OR BETTER";
    this.mjb = "KINGS OR BETTER";
    this.tnh = "WILD ROYAL FLUSH";
    this.weu = "FOUR DEUCES";
    this.fzs = "FOUR 5 TO KING";
    this.zrk = "FOUR 2 TO 4";
    this.tkv = "FOUR ACES";
    this.xzp = "FOUR LOW WITH LOW";
    this.ksv = "FOUR ACES WITH 2, 3 OR 4";
    this.ufn = "JOGAR OU RECOLHER O PRГ‰MIO?";
    this.ksr = "ESCOLHA UMA CARTA";
    this.qvi = "Se a carta selecionada for mais alta do que a do crupier: PRГ‰MIO";
    this.dbq = "Se a carta selecionada for menor do que a do crupier: Nenhum prГ©mio";
    this.spj = "Se a carta selecionada for a mesma que a do crupier: Empate";
    this.ryt = "Az Г© carta mais alta, dois Г© a menor, nГЈo hГЎ curingas.";
    this.jly = "EMPATE";
    this.iun = "JOGADOR";
    this.qbh = "CRUPIER";
    this.evo = "GANHE DO DEALER PARA DOBRAR O GANHO";
    this.rbu = "ESCOLHA O VALOR CERTO PARA DUBRAR O GANHO"
}
vxk.prototype = new qhn;

function zoj() {
    this.awu = "GARDER";
    this.mjl = "ROUGE";
    this.urx = "NOIR";
    this.wur = "HAUT";
    this.gqj = "BAS";
    this.owj = "DONNER DES CARTES";
    this.isf = "GARDER DES CARTES";
    this.san = "DONNER DES CARTES";
    this.eki = "Cinq cartes identiques (possible seulement avec un joker)";
    this.dao = "As, roi, dame, valet, 10 de la mГЄme couleur";
    this.tue = "STRAIGHT dans la mГЄme couleur";
    this.rpb = "Quatre cartes de la mГЄme valeur";
    this.jyq = "Combinaison de trois (BRELAN) et un PAIRE";
    this.woh = "Cinq cartes de la mГЄme couleur";
    this.shk = "Cinq cartes dans l'ordre, mais pas de la mГЄme couleur";
    this.bzk = "Trois cartes de la mГЄme valeur";
    this.ozk = "Deux paires diffГ©rentes et une 5ГЁme carte";
    this.vhk = "Deux valets, dames, rois ou as";
    this.bqj = "Quatre cartes de la mГЄme couleur avec une 5ГЁme carte";
    this.uqj = "Straight avec un as au milieu";
    this.pdy = "Cartes qui comprennent le valet, la dame et le roi";
    this.vcs = "Cinq cartes consГ©cutives paires ou impaires";
    this.ulr = "QUINTE FLUSH avec joker";
    this.lcs = "Quatre deux avec une autre carte";
    this.gjw = "Quatre 5, 6, 7, 8, 9, 10, valets, dames ou rois";
    this.lcu = "Quatre 2, 3 ou 4 avec une autre carte";
    this.dtt = "Quatres as avec une autre carte";
    this.jnt = "Quatre 2,3 ou 4 avec A, 2, 3, ou 4";
    this.osz = "Quatre as avec un 2, 3, ou 4";
    this.hzk = "Deux rois ou deux as.";
    this.zaj = "Deux 10, valets, dames, rois ou as";
    this.rrv = "FIVE OF A KIND";
    this.ebq = "ROYAL FLUSH";
    this.syc = "STRAIGHT FLUSH";
    this.ibr = "FOUR OF A KIND";
    this.yov = "FULL HOUSE";
    this.nav = "FLUSH";
    this.xxw = "STRAIGHT";
    this.xto = "THREE OF A KIND";
    this.yej = "TWO PAIRS";
    this.ylj = "HIGH PAIR";
    this.trv = "FOUR FLUSH";
    this.pug = "POKER";
    this.hjh = "SKIP STRAIGHT";
    this.nux = "BLAZE";
    this.dmc = "CORNER STRAIGHT";
    this.oia = "TENS OR BETTER";
    this.rxz = "JACKS OR BETTER";
    this.mjb = "KINGS OR BETTER";
    this.tnh = "WILD ROYAL FLUSH";
    this.weu = "FOUR DEUCES";
    this.fzs = "FOUR 5 TO KING";
    this.zrk = "FOUR 2 TO 4";
    this.tkv = "FOUR ACES";
    this.xzp = "FOUR LOW WITH LOW";
    this.ksv = "FOUR ACES WITH 2, 3 OR 4";
    this.ufn = "GAMBLE OU PRENDRE GAIN?";
    this.ksr = "PRENDS UNE CARTE";
    this.qvi = "Si la carte sГ©lectionnГ©e est supГ©rieure Г  celle du dealer: GAIN";
    this.dbq = "Si la carte sГ©lectionnГ©e est infГ©rieure Г  celle du dealer: PAS DE GAIN";
    this.spj = "Si la carte sГ©lectionnГ©e est identique Г  celle du dealer: EGALITГ‰";
    this.ryt = "L'as a la valeur la plus importante, le deux la moins importante, aucun joker.";
    this.jly = "EGALITГ‰";
    this.iun = "JOUER";
    this.qbh = "NOUN";
    this.evo = "VAINCS LE DONNEUR AFIN DE DOUBLER LE GAIN";
    this.rbu = "CHOISIS LA BONNE VALEUR AFIN DE DOUBLER LE GAIN"
}
zoj.prototype = new mtj;

function dbj() {
    this.awu = "ZADRЕЅI";
    this.mjl = "CRVENA";
    this.urx = "CRNA";
    this.wur = "VELIKA";
    this.gqj = "MALA";
    this.owj = "DIJELI KARTE";
    this.isf = "ZADRЕЅI KARTE";
    this.san = "DIJELI KARTE";
    this.eki = "Pet istih karata (moguД‡e samo s dЕѕokerom)";
    this.dao = "As - kralj - dama - deДЌko - desetka u istoj boji";
    this.tue = "STRAIGHT u istoj boji";
    this.rpb = "ДЊetiri jednake karte";
    this.jyq = "Kombinacija od TRI ISTE i PARA";
    this.woh = "Pet karata u istoj boji";
    this.shk = "Pet karata u nizu, ali ne u istoj boji";
    this.bzk = "Tri jednake karte";
    this.ozk = "Dva razliДЌita para i neka 5. karta";
    this.vhk = "Dva deДЌka, dame, kralja ili asa";
    this.bqj = "ДЊetiri karte u istoj boji s nekom 5. kartom";
    this.uqj = "Pet karata u redu, As u sredini";
    this.pdy = "5 karata sa slikama (deДЌko, dama i kralj + 2 slike)";
    this.vcs = "5 uzastopnih parnih ili neparnih karata";
    this.ulr = "ROYAL FLUSH s dЕѕokerom";
    this.lcs = "ДЊetiri dvojke s nekom drugom kartom";
    this.gjw = "ДЊetiri petice, ЕЎestice, sedmice, osmice, devetke, desetke, deДЌka, dame ili kralja";
    this.lcu = "ДЊetiri dvojke, trojke ili ДЌetvorke s nekom drugom kartom";
    this.dtt = "ДЊetiri asa sa nekom drugom kartom";
    this.jnt = "ДЊetiri 2,3 ili 4 sa A, 2, 3 ili 4";
    this.osz = "ДЊetiri asa s 2, 3 ili 4";
    this.hzk = "Dva kralja ili dva asa";
    this.zaj = "Dvije desetke, deДЌka, dame, kralja ili asa";
    this.rrv = "FIVE OF A KIND";
    this.ebq = "ROYAL FLUSH";
    this.syc = "STRAIGHT FLUSH";
    this.ibr = "FOUR OF A KIND";
    this.yov = "FULL HOUSE";
    this.nav = "FLUSH";
    this.xxw = "STRAIGHT";
    this.xto = "THREE OF A KIND";
    this.yej = "TWO PAIRS";
    this.ylj = "HIGH PAIR";
    this.trv = "FOUR FLUSH";
    this.pug = "POKER";
    this.hjh = "SKIP STRAIGHT";
    this.nux = "BLAZE";
    this.dmc = "CORNER STRAIGHT";
    this.oia = "TENS OR BETTER";
    this.rxz = "JACKS OR BETTER";
    this.mjb = "KINGS OR BETTER";
    this.tnh = "WILD ROYAL FLUSH";
    this.weu = "FOUR DEUCES";
    this.fzs = "FOUR 5 TO KING";
    this.zrk = "FOUR 2 TO 4";
    this.tkv = "FOUR ACES";
    this.xzp = "FOUR LOW WITH LOW";
    this.ksv = "FOUR ACES WITH 2, 3 OR 4";
    this.ufn = "IGRAJ ILI POKUPI DOBITAK?";
    this.ksr = "ODABERITE KARTU";
    this.qvi = "Ako je odabrana karta veД‡a od dilerove karte: DOBITAK";
    this.dbq = "Ako je odabrana karta manja od dilerove karte: NEMA DOBITKA";
    this.spj = "Ako je odabrana karta ista kao dilerova: NERIJEЕ ENO";
    this.ryt = "As je najveД‡a karta, 2 je najmanja karta, nema dЕѕokera.";
    this.jly = "ISTA";
    this.iun = "IGRAДЊ";
    this.qbh = "DILER";
    this.evo = "POBJEDI DJELITELJA I TIME UDVOSTRUДЊI DOBITAK";
    this.rbu = "ODABERI PRAVU VRIJEDNOST I TIME UDVOSTRUДЊI DOBITAK"
}
dbj.prototype = new unm;

function lyw() {
    this.awu = "TENERE";
    this.mjl = "ROSSO";
    this.urx = "NERO";
    this.wur = "ALTO";
    this.gqj = "BASSO";
    this.owj = "NUOVE CARTE";
    this.isf = "BLOCCA CARTE";
    this.san = "NUOVE CARTE";
    this.eki = "Cinque carte uguali (possibile soltanto con il joker)";
    this.dao = "Asso - Re - Dama - Fante - 10 di un colore";
    this.tue = "STRAIGHT dello stesso colore";
    this.rpb = "Quattro carte dello stesso valore";
    this.jyq = "Combinazione tra THREE OF A KIND e una COPPIA";
    this.woh = "Cinque carte dello stesso colore";
    this.shk = "Cinque carte in ordine cronologico, senza aver lo stesso colore";
    this.bzk = "Tre carte dello stesso valore";
    this.ozk = "Due coppie diverse e una quinta carta";
    this.vhk = "Due fanti, dame, re o assi";
    this.bqj = "Quattro carte dello stesso colore con una quinta carta";
    this.uqj = "Straight con asso in centro";
    this.pdy = "5 carte solo con figure";
    this.vcs = "Straight ove sempre una carta su due manca";
    this.ulr = "ROYAL FLUSH con Jolly";
    this.lcs = "Quattro due con un'altra carta";
    this.gjw = "Quattro carte da 5, 6, 7, 8, 9, 10, fante, dama o re";
    this.lcu = "Quattro carte da 2, 3 o 4 con un'altra carta";
    this.dtt = "Quattro assi con un'altra carta";
    this.jnt = "Quattro 2,3 o 4 con Asso, 2, 3 o 4";
    this.osz = "Quattro assi con il 2, 3 o 4";
    this.hzk = "Due re o due assi";
    this.zaj = "Due carte da 10, fante, dama, re o asso";
    this.rrv = "FIVE OF A KIND";
    this.ebq = "ROYAL FLUSH";
    this.syc = "STRAIGHT FLUSH";
    this.ibr = "FOUR OF A KIND";
    this.yov = "FULL HOUSE";
    this.nav = "FLUSH";
    this.xxw = "STRAIGHT";
    this.xto = "THREE OF A KIND";
    this.yej = "TWO PAIRS";
    this.ylj = "HIGH PAIR";
    this.trv = "FOUR FLUSH";
    this.pug = "POKER";
    this.hjh = "SKIP STRAIGHT";
    this.nux = "BLAZE";
    this.dmc = "CORNER STRAIGHT";
    this.oia = "TENS OR BETTER";
    this.rxz = "JACKS OR BETTER";
    this.mjb = "KINGS OR BETTER";
    this.tnh = "WILD ROYAL FLUSH";
    this.weu = "FOUR DEUCES";
    this.fzs = "FOUR 5 TO KING";
    this.zrk = "FOUR 2 TO 4";
    this.tkv = "FOUR ACES";
    this.xzp = "FOUR LOW WITH LOW";
    this.ksv = "FOUR ACES WITH 2, 3 OR 4";
    this.ufn = "GAMBLE O RACCOGLIERE VINCITA?";
    this.ksr = "PRENDI UNA CARTA";
    this.qvi = "Se la carta selezionata ГЁ piГ№ alta di quella del mazziere: VINCITA";
    this.dbq = "Se la carta selezionata ГЁ piГ№ bassa di quella del mazziere: NESSUNA VINCITA";
    this.spj = "Se la carta selezionata ГЁ uguale a quella del mazziere:ALLA PARI";
    this.ryt = "L'asso ГЁ la piГ№ alta, il due la piГ№ bassa, nessuno jolly.";
    this.jly = "ALLA PARI";
    this.iun = "GIOCATORE";
    this.qbh = "DEALER";
    this.evo = "VINCI SUL DEALER PER RADDOPPIARE LA VINCITA";
    this.rbu = "SCEGLI IL VALORE GIUSTO PER RADDOPPIARE LA VINCITA"
}
lyw.prototype = new tws;

function xxr() {
    this.awu = "HГ…LLET";
    this.mjl = "RГ–TT";
    this.urx = "SVART";
    this.wur = "HГ–G";
    this.gqj = "LГ…G";
    this.owj = "TA KORT";
    this.isf = "BEHГ…LL KORTEN";
    this.san = "TA KORT";
    this.eki = "Fem kort av samma vГ¤rde (endast mГ¶jligt med Joker)";
    this.dao = "Ess - Kung - Dam - Knekt - Tio i samma fГ¤rg";
    this.tue = "Stege i samma fГ¤rg";
    this.rpb = "Fyra kort av samma vГ¤rde";
    this.jyq = "Kombination bestГҐende av TRISS och PAR";
    this.woh = "Fem kort i samma fГ¤rg";
    this.shk = "Fem kort i fГ¶ljd, men inte i samma fГ¤rg";
    this.bzk = "Tre kort av samma vГ¤rde";
    this.ozk = "TvГҐ olika par och ett 5:e kort";
    this.vhk = "TvГҐ Knektar, Damer, Kungar eller Ess";
    this.bqj = "Fyra kort i en fГ¤rg med ett 5:e kort";
    this.uqj = "Stege med Ess i mitten";
    this.pdy = "Kort som visar Knekt, Dam och Kung";
    this.vcs = "Stege med fem udda eller fem jГ¤mna kort i fГ¶ljd";
    this.ulr = "ROYAL FLUSH med Joker";
    this.lcs = "Fyra tvГҐor med nГҐgot annat kort";
    this.gjw = "Fyra 5:or, 6:or, 7:or, 8:or, 9:or, 10:or, Knektar, Damer eller Kungar";
    this.lcu = "Fyra 2:or, 3:or eller 4:or med nГҐgot annat kort";
    this.dtt = "Fyra Ess med nГҐgot annat kort";
    this.jnt = "Fyra 2:or, 3:or eller 4:or med ett Ess, en 2:a, 3:a eller 4:a";
    this.osz = "Fyra Ess med en 2:a, 3:a eller 4:a";
    this.hzk = "TvГҐ Kungar eller tvГҐ Ess";
    this.zaj = "TvГҐ 10:or, Knektar, Damer, Kungar eller Ess.";
    this.rrv = "FIVE OF A KIND";
    this.ebq = "ROYAL FLUSH";
    this.syc = "STRAIGHT FLUSH";
    this.ibr = "FOUR OF A KIND";
    this.yov = "FULL HOUSE";
    this.nav = "FLUSH";
    this.xxw = "STRAIGHT";
    this.xto = "THREE OF A KIND";
    this.yej = "TWO PAIRS";
    this.ylj = "HIGH PAIR";
    this.trv = "FOUR FLUSH";
    this.pug = "POKER";
    this.hjh = "SKIP STRAIGHT";
    this.nux = "BLAZE";
    this.dmc = "CORNER STRAIGHT";
    this.oia = "TENS OR BETTER";
    this.rxz = "JACKS OR BETTER";
    this.mjb = "KINGS OR BETTER";
    this.tnh = "WILD ROYAL FLUSH";
    this.weu = "FOUR DEUCES";
    this.fzs = "FOUR 5 TO KING";
    this.zrk = "FOUR 2 TO 4";
    this.tkv = "FOUR ACES";
    this.xzp = "FOUR LOW WITH LOW";
    this.ksv = "FOUR ACES WITH 2, 3 OR 4";
    this.ufn = "DUBBLERA ELLER INKASSERA?";
    this.ksr = "VГ„LJ ETT KORT";
    this.qvi = "Om valt kort Г¤r hГ¶gre Г¤n givens: VINST!";
    this.dbq = "Om valt kort Г¤r lГ¤gre Г¤n givens: fГ¶rlust";
    this.spj = "Om valt kort Г¤r samma som givens: lika";
    this.ryt = "Ess Г¤r hГ¶gst, tvГҐ Г¤r lГ¤gst, inga Jokerkort.";
    this.jly = "LIKA";
    this.iun = "SPELARE";
    this.qbh = "GIVARE";
    this.evo = "SLГ… DEALERN FГ–R ATT DUBBLA VINSTEN";
    this.rbu = "VГ„LJ RГ„TT VALГ–R FГ–R ATT DUBBLA VINSTEN"
}
xxr.prototype = new bsa;

function mge() {
    this.vaf = "4 or 5 of a kind lights a Fruit Bonus lamp. Win the Fruit Bonus by lighting all lamps!";
    this.gsg = "Increases Cherry Bonus!";
    this.jmp = "Joker is wild!";
    this.twt = "Win Cherry Bonus!";
    this.ort = "CARDS LEFT"
}
mge.prototype = new szt;

function dxl() {
    this.vaf = "Р•РЎР›Р РЈ Р’РђРЎ 4 РР›Р 5 РљРђР Рў РЎ РћР”РРќРђРљРћР’Р«Рњ Р¤Р РЈРљРўРћРњ, РћР”РќРћ РџРћР›Р• РџРћР”РЎР’Р•Р§РР’РђР•РўРЎРЇ. Р’Р« Р’Р«РР“Р РђР›Р Р¤Р РЈРљРўРћР’Р«Р™ Р‘РћРќРЈРЎ РљРћР“Р”Рђ Р’РЎР• РџРћР›РЇ РџРћР”РЎР’Р•Р§Р•РќР«.";
    this.gsg = "Р‘РћРќРЈРЎ Р’РРЁРќР РЈР’Р•Р›-РЎРЇ!";
    this.jmp = "Р”Р–РћРљР•Р  Р—РђРњР•РќРЇР•Рў Р›Р®Р‘РЈР® РљРђР РўРЈ!";
    this.twt = "Р’Р«РР“Р РђР™РўР• Р‘РћРќРЈРЎ Р’РРЁРќР!";
    this.ort = "РћРЎРўРђР’РЁРР• РљРђР РўР«"
}
dxl.prototype = new qax;

function pqz() {
    this.vaf = "Un cuГЎdruple o quГ­ntuple premio de un campo aГєn no iluminado lo ilumina. Si el Гєltimo campo si ilumina se obtiene el bonus de frutas.";
    this.gsg = "Aumenta bonus cherry!";
    this.jmp = "El comodГ­n puede substituir a cualquier carta!";
    this.twt = "Premio bonus cereza!";
    this.ort = "CARTAS RESTANTES"
}
pqz.prototype = new ted;

function cbp() {
    this.vaf = "Ein 4- oder 5-fach Gewinn eines noch nicht beleuchteten Feldes beleuchtet dieses. Wird das letzte leere Feld beleuchtet, so gewinnt man den FrГјchtebonus.";
    this.gsg = "ErhГ¶ht Cherry Bonus!";
    this.jmp = "Joker ersetzt jede Karte!";
    this.twt = "Gewinn Cherry Bonus!";
    this.ort = "RESTLICHE KARTEN"
}
cbp.prototype = new jdp;

function ewi() {
    this.vaf = "Daha aydД±nlatД±lmamД±Еџ bir alanД±n bir 4 veya 5 katlД± kazancД± bu alanД± aydД±nlatД±r. Kalan son boЕџ alan da aydД±nlatД±lД±rsa, bГ¶ylece meyve primi kazanД±lД±r.";
    this.gsg = "Cherry primini yГјkselt!";
    this.jmp = "Joker her kartД±n yerine geГ§er!";
    this.twt = "Cherry primi kazan!";
    this.ort = "ARTAN KARTLAR"
}
ewi.prototype = new vre;

function fxa() {
    this.vaf = "Po 4 nebo 5 vГЅhrГЎch se rozsvГ­ti jedno pole FRUIT BONUSU. FRUIT BONUS vyhrajete po| rozsvГ­cenГ­ vЕЎech ДЌtyЕ™ polГ­.";
    this.gsg = "ZvГЅЕЎenГ­ tЕ™eЕЎЕ€ovГ©ho Bonusu!";
    this.jmp = "Joker je divokГЎ karta!";
    this.twt = "VyhrГЎl jste tЕ™eЕЎЕ€ovГЅ Bonus!";
    this.ort = "ZBГќVAJГЌCГЌ KARTY"
}
fxa.prototype = new jvg;

function hfz() {
    this.vaf = "4 vГµi 5 sarnast valgustab puuviljaboonuse lambi. VГµida puuviljaboonus valgustades kГµik lambid!";
    this.gsg = "Suurendab Kirsiboonust!";
    this.jmp = "Jokker on metsik!";
    this.twt = "VГµida kirsiboonus!";
    this.ort = "KAARTE JГ„REL"
}
hfz.prototype = new chy;

function nfy() {
    this.vaf = "4 О® 5 О±П…П„ОїПЌ П„ОїП… ОµОЇОґОїП…П‚ П†ПЋП„О± О±ПЂПЊ Fruit Bonus П†ПЋП„О±. ОљОµПЃОґОЇО¶ОїП…ОЅ П„О± Fruit Bonus О±ОЅО¬ОІОїОЅП„О±П‚ ПЊО»ОµП‚ ОїО№ О»О¬ОјПЂОµП‚!";
    this.gsg = "О”О·ОјО№ОїП…ПЃОіО®ПѓП„Оµ Cherry Bonus!";
    this.jmp = "О¤Ої Joker О±ОЅП„О№ОєО±ОёО№ПѓП„О¬ ОєО¬ОёОµ ОєО¬ПЃП„О±!";
    this.twt = "ОљОµПЃОґОЇПѓО±П„Оµ Cherry Bonus!";
    this.ort = "ОҐО ОџО›ОџО™О Оџ ОљО‘ОЎО¤О©Оќ"
}
nfy.prototype = new nmu;

function pcw() {
    this.vaf = "РџРѕР»СѓС‡Р°РІР°РЅРµ РЅР° 4 РёР»Рё 5 РєР°СЂС‚Рё СЃСЉСЃ СЃСЉРѕС‚РІРµС‚РЅРёС‚Рµ СЃРёРјРІРѕР»Рё С‰Рµ РѕСЃРІРµС‚СЏС‚ РїРѕР»РµС‚Р°С‚Р° Р·Р° РїР»РѕРґРѕРІРёСЏ Р±РѕРЅСѓСЃ. РџРµС‡РµР»РµРЅРµ РЅР° Р±РѕРЅСѓСЃР° Рµ СЃР»РµРґ РѕСЃРІРµС‚СЏРІР°РЅРµ РЅР° РІСЃРёС‡РєРёС‚Рµ 4 РїРѕР»РµС‚Р°.";
    this.gsg = "РЈРІРµР»РёС‡Р°РІР°СЃРµ Р§Р•Р Р•РЁР Р‘РћРќРЈРЎРђ!";
    this.jmp = " Р”Р¶РѕРєРµСЂСЉС‚ Рµ РІСЃСЏРєР° РґСЂСѓРіР° РєР°СЂС‚Р°!";
    this.twt = "РЎРїРµС‡РµР»РµРЅ Р§Р•Р Р•РЁР Р‘РћРќРЈРЎ!";
    this.ort = "РћРЎРўРђРќРђР›Р РљРђР РўР"
}
pcw.prototype = new iqe;

function lra() {
    this.ort = "бѓ“бѓђбѓ бѓ©бѓ”бѓњбѓбѓљбѓ бѓ™бѓђбѓ бѓўбѓ";
    this.vaf = "4-бѓ›бѓђбѓ’бѓ бѓђбѓњ 5-бѓ›бѓђбѓ’бѓ бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ бѓђбѓњбѓ—бѓ”бѓ‘бѓЎ бѓ®бѓбѓљбѓбѓЎ бѓ‘бѓќбѓњбѓЈбѓЎ бѓњбѓђбѓ—бѓЈбѓ бѓђбѓЎ. бѓ’бѓђбѓђбѓњбѓђбѓ—бѓ”бѓ— бѓ§бѓ•бѓ”бѓљбѓђ бѓњбѓђбѓ—бѓЈбѓ бѓђ бѓ“бѓђ бѓ›бѓќбѓбѓ’бѓ”бѓ— бѓ®бѓбѓљбѓбѓЎ бѓ‘бѓќбѓњбѓЈбѓЎбѓ!";
    this.gsg = "Cherry Bonus-бѓЎ бѓ–бѓ бѓ“бѓбѓЎ!";
    this.jmp = "бѓЇбѓќбѓ™бѓ”бѓ бѓ бѓђбѓњбѓђбѓЄбѓ•бѓљбѓ”бѓ‘бѓЎ бѓ§бѓ•бѓ”бѓљбѓђ бѓЎбѓ®бѓ•бѓђ бѓ“бѓђбѓњбѓђбѓ бѓ©бѓ”бѓњ бѓ™бѓђбѓ бѓўбѓЎ.";
    this.twt = "бѓ›бѓќбѓбѓ’бѓ”бѓ— Cherry Bonus!"
}
lra.prototype = new gnr;

function ufc() {
    this.vaf = "4 vagy 5 egyforma felkapcsolja a GyГјmГ¶lcs BГіnusz lГЎmpГЎt. Megnyeri a GyГјmГ¶lcs BГіnuszt, ha minden lГЎmpa vilГЎgГ­t!";
    this.gsg = "NГ¶veli a Cherry Bonus-t!";
    this.jmp = "Joker helyettesГ­t minden kГЎrtyГЎt!";
    this.twt = "Cherry Bonus nyeremГ©ny!";
    this.ort = "FENNMARADT LAPOK"
}
ufc.prototype = new ksf;

function yfz() {
    this.vaf = "Un cГўЕџtig de 4 sau 5 aprinde un cГўmp Bonus fructe. CГўЕџtigДѓ bonusul fructe aprinzГўnd toate cГўmpurile!";
    this.gsg = "CreЕџte bonus Cherry!";
    this.jmp = "Joker Г®nlocuieЕџte orice carte!";
    this.twt = "CГўЕџtigДѓ bonus Cherry!";
    this.ort = "CARTI RAMASE"
}
yfz.prototype = new rqu;

function mmh() {
    this.vaf = "4 ou 5 de um tipo ilumina uma lГўmpada de bonus de fruta. Quando o Гєltimo campo estГЎ iluminado, se ganha o bonus de fruta.";
    this.gsg = "Aumenta Cherry Bonus!";
    this.jmp = "O curinga substitui qualquer carta!";
    this.twt = "Ganha Cherry Bonus!";
    this.ort = "CARTAS RESTANTES"
}
mmh.prototype = new vxk;

function svn() {
    this.vaf = "Un champs qui n'est pas encore illuminГ© l'est par un gain 4-druple ou 5-tuple. Une fois le dernier champs vide illuminГ©, on gagne le bonus de fruits.";
    this.gsg = "Augmente le Cherry Bonus!";
    this.jmp = "Le joker remplace toute carte!";
    this.twt = "Gagne le Cherry Bonus!";
    this.ort = "CARTES RESTANTES"
}
svn.prototype = new zoj;

function xuz() {
    this.vaf = "4 ili 5 iste vrste pali svjetiljku voД‡nog bonusa. Osvoji voД‡ni bonus tako ЕЎto Д‡eЕЎ upaliti sve svjetljike!";
    this.gsg = "PoveД‡ava bonus treЕЎnje!";
    this.jmp = "DЕѕoker je wild!";
    this.twt = "Osvoji bonus treЕЎnje!";
    this.ort = "PREOSTALE KARTE"
}
xuz.prototype = new dbj;

function icl() {
    this.vaf = "Una vincita quadrupla o quintupla di un campo di frutta non illuminato lo illumina. Quando tutti i campi sono illuminati, si vince il bonus di frutta!";
    this.gsg = "Aumenta il Cherry Bonus!";
    this.jmp = "Jolly sostituisce ogni carta!";
    this.twt = "Vinci il Cherry Bonus!";
    this.ort = "CARTE RIMANENTI"
}
icl.prototype = new lyw;

function gwt() {
    this.vaf = "Vid 4 eller 5 av samma sort tГ¤nds en fruktbonuslampa. Vinn fruktbonusen genom att tГ¤nda alla lamporna!";
    this.gsg = "Г–kar Cherry-bonusen!";
    this.jmp = "Jokern Г¤r en Wild!";
    this.twt = "Vinn Cherry-bonusen!";
    this.ort = "Г…TERSTГ…ENDE KORT"
}
gwt.prototype = new xxr;

function qdy() {
    this.jfv = {
        backgroundColor: "rgb(0, 0, 0)"
    };
    this.mdj = {
        backgroundColor: "rgb(0,0,0)",
        lpd: "rgba(0,0,0,0.3)"
    };
    this.kgm = {
        mdj: {
            font: "arial",
            yzb: "bold",
            backgroundColor: "black",
            rcb: "rgb(0,100,10)",
            cbu: "rgb(80,255,100)",
            khm: "rgb(120,120,120)",
            fuy: "red",
            oqw: "white",
            ded: "white",
            kla: null
        },
        vug: {
            font: "arial",
            yzb: "bold",
            backgroundColor: "black",
            rcb: "rgb(0,100,10)",
            cbu: "rgb(80,255,100)",
            khm: "rgb(120,120,120)",
            fuy: "red",
            oqw: "white",
            ded: "rgb(230,190,10)",
            kla: null
        }
    };
    this.ujk = {
        font: "arial",
        yzb: "bold",
        backgroundColor: "rgb(0,0,0)",
        qmm: null,
        ded: "rgb(255,255,255)",
        leq: "rgb(30,30,30)",
        borderColor: "rgb(80,80,80)"
    };
    this.iqi = {
        font: "arial",
        yzb: "bold",
        backgroundColor: "black",
        jsh: "rgb(50,50,50)",
        xhl: "rgb(255,255,255)",
        ded: "white",
        guw: 0.8,
        xxc: {
            lfc: {
                font: "sanf-serif",
                yzb: "",
                textAlign: "center",
                yzk: "round",
                backgroundColor: "black",
                ded: "white",
                borderColor: null,
                leq: null,
                tew: 1
            }
        }
    };
    this.rhf = {
        font: "arial",
        yzb: "bold",
        backgroundColor: "rgb(20,20,30)",
        borderColor: "rgb(0,0,0)",
        ayz: "rgba(255,255,255,0.2)",
        ded: "rgb(255,255,255)",
        vas: "rgba(0,0,0,0.3)",
        display: {
            nqs: "arial",
            qia: "arial",
            yzb: "bold",
            ded: "rgb(255,255,255)",
            drn: "rgb(255,255,255)",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "rgba(255,255,255,0.5)"
        },
        lfc: {
            font: "arial",
            yzb: "bold",
            ded: "rgb(0,0,0)",
            fha: "rgb(150,150,150)",
            backgroundColor: "rgba(255,255,255,0.8)",
            qmm: "rgba(255,255,255,1)",
            zrs: "rgba(255,255,255,0.8)",
            qth: "rgba(255,255,255,1)",
            borderColor: "rgba(200,200,200,0.5)",
            yzk: "rect",
            yrn: -1
        }
    };
    this.cec = {
        font: "arial",
        yzb: "bold",
        zcf: "rgb(0,0,200)",
        epb: "rgb(255,255,255)",
        nyx: "rgb(0,0,150)",
        backgroundColor: "rgb(220,240,255)",
        tpg: "rgb(180,220,255)",
        ufh: "rgb(10,20,25)",
        ztv: "rgb(130,220,255)",
        ehr: "rgb(130,190,255)",
        ded: "rgb(255,255,255)",
        yts: "rgb(130,190,255)",
        cjj: "rgb(100,160,255)",
        urw: "rgb(255,255,255)",
        lfc: {
            yzk: "rect",
            font: "arial",
            yzb: "bold",
            ded: "rgb(255,255,255)",
            ccd: null,
            backgroundColor: "rgb(90,160,255)",
            pbk: "rgb(90,160,255)",
            borderColor: "rgb(60,120,200)",
            leq: "rgb(40,80,140)"
        },
        uyn: {
            yzk: "round",
            font: "arial",
            yzb: "bold",
            ded: "rgb(255,255,255)",
            ccd: null,
            backgroundColor: "rgba(0,0,100,0.5)",
            pbk: "rgba(150,150,255,0.5)",
            borderColor: "rgb(90,170,255)",
            leq: "rgb(40,80,140)"
        }
    };
    this.kvc = {};
    this.iww = {
        hdu: ["rgb(255,0,0)", "rgb(255,200,0)", "rgb(0,255,200)", "rgb(240,240,240)"]
    };
    this.aki = {
        type: "left",
        font: "arial",
        yzb: "bold",
        backgroundColor: "rgba(0,0,0,0.7)",
        qmm: null,
        borderColor: "rgb(0,0,0)",
        leq: "rgb(180,180,180)",
        tpg: "rgba(0,0,0,0.6)",
        mdg: null,
        drn: "rgb(255,200,0)",
        ded: "white",
        phz: {
            font: "arial",
            yzb: "bold",
            backgroundColor: "rgb(100,100,100)",
            qmm: "rgb(100,100,100)",
            zrs: null,
            qth: null,
            borderColor: "rgb(100,100,100)",
            ded: "rgb(255,255,255)",
            fha: "rgb(255,200,0)",
            yzk: "triangle",
            yrn: 1
        },
        esv: {
            font: "arial",
            yzb: "bold",
            backgroundColor: "rgb(100,100,100)",
            qmm: "rgb(100,100,100)",
            zrs: null,
            qth: null,
            borderColor: "rgb(100,100,100)",
            ded: "rgb(255,255,255)",
            fha: "rgb(255,200,0)",
            yzk: "triangle",
            yrn: 0
        },
        pzd: {
            font: "arial",
            yzb: "bold",
            backgroundColor: "rgb(100,100,100)",
            qmm: "rgb(15,15,15)",
            zrs: "rgb(100,100,100)",
            qth: "rgb(15,15,15)",
            borderColor: "rgb(150,150,150)",
            ded: "rgb(255,255,255)",
            fha: "rgb(255,200,0)",
            yzk: "rect",
            yrn: -1
        },
        display: {
            qia: "sans-serif",
            nqs: "sans-serif",
            yzb: "bold",
            drn: null,
            ded: "yellow",
            borderColor: "rgb(100,100,100)",
            leq: null,
            backgroundColor: "black"
        },
        vlp: {
            font: "arial",
            yzb: "bold",
            backgroundColor: null,
            qmm: null,
            ded: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.zxp = {
        font: "arial",
        yzb: "bold",
        backgroundColor: "rgb(180,180,180)",
        qmm: "rgb(120,120,120)",
        borderColor: "rgb(80,80,80)",
        leq: "rgb(30,30,30)",
        ded: "white",
        hhj: {
            font: "arial",
            yzb: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            qmm: null,
            zrs: "rgba(100,100,100,0.5)",
            qth: null,
            borderColor: null,
            ded: "white",
            yzk: "rect",
            yrn: -1
        },
        phz: {
            font: "arial",
            yzb: "bold",
            backgroundColor: "rgb(255,255,255)",
            qmm: "rgb(255,255,255)",
            zrs: null,
            qth: null,
            borderColor: "rgb(255,255,255)",
            ded: "rgb(0,0,0)",
            fha: "rgb(0,0,0)",
            yzk: "triangle",
            yrn: 1
        },
        esv: {
            font: "arial",
            yzb: "bold",
            backgroundColor: "rgb(255,255,255)",
            qmm: "rgb(255,255,255)",
            zrs: null,
            qth: null,
            borderColor: "rgb(255,255,255)",
            ded: "rgb(0,0,0)",
            fha: "rgb(0,0,0)",
            yzk: "triangle",
            yrn: 0
        },
        sxd: {
            yzk: "rect",
            font: "arial",
            yzb: "bold",
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,0.1)",
            ded: "white",
            tew: 1,
            borderColor: "rgb(255,255,255)",
            leq: "rgb(220,220,220)"
        },
        display: {
            qia: "sans-serif",
            nqs: "sans-serif",
            yzb: "bold",
            drn: null,
            ded: "white",
            borderColor: "white",
            leq: null,
            backgroundColor: "rgb(0,0,0)"
        },
        vlp: {
            font: "arial",
            yzb: "bold",
            backgroundColor: null,
            qmm: null,
            ded: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.xrc = {
        aao: [{
            qia: "sans-serif",
            kfa: "verdana",
            yzb: "bold",
            drn: "rgb(255,255,100)",
            cit: "rgb(210,190,40)",
            ccd: "rgb(252,247,0)",
            txi: "rgb(220,200,0)",
            jsh: "rgb(0,0,0)"
        }, {
            qia: "sans-serif",
            kfa: "verdana",
            yzb: "bold",
            drn: "rgb(250,250,250)",
            cit: "rgb(210,210,210)",
            ccd: "rgb(255,255,255)",
            txi: "rgb(220,220,220)",
            jsh: "rgb(0,0,0)"
        }, {
            qia: "sans-serif",
            kfa: "verdana",
            yzb: "bold",
            drn: "rgb(230,230,230)",
            cit: "rgb(190,190,190)",
            ccd: "rgb(255,255,255)",
            txi: "rgb(220,220,220)",
            jsh: "rgb(0,0,0)"
        }, {
            qia: "sans-serif",
            kfa: "verdana",
            yzb: "bold",
            drn: "rgb(230,230,230)",
            cit: "rgb(190,190,190)",
            ccd: "rgb(255,255,255)",
            txi: "rgb(220,220,220)",
            jsh: "rgb(0,0,0)"
        }],
        qzn: {
            qia: "sans-serif",
            kfa: "sans-serif",
            yzb: "bold",
            drn: "rgb(236,225,207)",
            cit: "rgb(214,170,102)",
            ccd: "rgb(245,220,148)",
            txi: "rgb(190,137,40)"
        },
        krw: {}
    };
    this.wzn = {
        yyt: "rgb(240,240,240)",
        cdq: "rgb(255,255,255)",
        borderColor: "rgb(200,200,200)",
        vas: "rgba(0,80,150,0.6)",
        display: {
            nqs: "arial",
            qia: "arial",
            yzb: "bold",
            ded: "rgb(0,80,151)",
            drn: "rgb(0,30,80)",
            backgroundColor: "rgb(255,255,255)",
            borderColor: "rgb(200,200,200)"
        }
    }
}

function lxe() {
    this.hwu = {
        backgroundColor: null,
        qmm: null,
        tpg: "rgb(0,0,0)",
        ufh: "rgb(0,0,0)",
        pvf: null,
        xvn: 0.5,
        lfc: {
            yzk: "rect",
            font: "verdana",
            yzb: "bold",
            backgroundColor: "rgb(0,0,0)",
            pbk: "rgb(150,150,150)",
            ded: "rgb(255,255,255)",
            ccd: "rgb(255,255,0)",
            borderColor: "rgb(150,150,150)",
            leq: "rgb(0,0,0)"
        },
        display: {
            nqs: "sans-serif",
            qia: "sans-serif",
            yzb: "bold",
            backgroundColor: "black",
            ded: "yellow",
            drn: "yellow",
            borderColor: "rgb(255,255,255)",
            leq: "rgb(160,160,160)"
        },
        key: {
            font: "verdana",
            yzb: "bold",
            backgroundColor: "rgb(75, 5, 5)",
            borderColor: null,
            ded: "rgb(255, 255, 0)"
        }
    };
    this.fnv = {
        backgroundColor: null,
        tpg: "rgb(0,0,0)",
        ufh: "rgb(0,0,0)",
        display: {
            nqs: "sans-serif",
            qia: "sans-serif",
            yzb: "bold",
            backgroundColor: "black",
            ded: "yellow",
            drn: "yellow",
            borderColor: "rgb(255,255,255)",
            leq: "rgb(160,160,160)"
        },
        lfc: {
            yzk: "rect",
            font: "verdana",
            yzb: "bold",
            backgroundColor: "rgb(0,0,0)",
            pbk: "rgb(150,150,150)",
            ded: "rgb(255,255,255)",
            ccd: null,
            borderColor: "rgb(150,150,150)",
            leq: "rgb(0,0,0)"
        },
        key: {
            font: "verdana",
            yzb: "bold",
            backgroundColor: "rgb(75, 5, 5)",
            borderColor: null,
            ded: "rgb(255, 255, 0)"
        }
    };
    this.drj = {
        backgroundColor: null,
        tpg: "rgb(0,0,0)",
        ufh: "rgb(0,0,0)",
        lfc: {
            yzk: "rect",
            font: "verdana",
            yzb: "bold",
            backgroundColor: "rgb(0,0,0)",
            pbk: "rgb(150,150,150)",
            ded: "rgb(255,255,255)",
            ccd: null,
            borderColor: "rgb(150,150,150)",
            leq: "rgb(0,0,0)"
        },
    };
    this.gjp = {
        font: "arial",
        yzb: "bold",
        noz: "yellow",
        zae: "yellow",
        ded: "yellow"
    };
    this.slk = {
        font: "sans-serif",
        yzb: "bold",
        fkn: "red",
        uts: "orange",
        jsh: "white"
    };
    this.ghw = {
        font: "arial",
        yzb: "bold",
        ded: "yellow"
    };
    this.kks = {
        font: "sans-serif",
        yzb: "bold",
        ded: "rgb(255,255,255)",
        backgroundColor: "rgb(0,0,0)",
        pjn: "rgb(0,0,0)",
        ynj: "rgb(255,0,0)",
        ujm: "rgb(255,255,0)",
        eug: "rgb(80,80,80)",
        nfc: "rgb(15,15,15)",
        gcs: "rgb(0,0,0)",
        gke: "rgb(180,180,180)",
        hhp: "rgb(0,0,0)",
        hbu: 0.7
    }
}
lxe.prototype = new qdy;

function vem() {
    this.hwu.backgroundColor = "rgb(0,70,70)";
    this.hwu.qmm = "rgb(0,40,40)";
    this.hwu.tpg = "rgb(0,70,70)";
    this.hwu.ufh = "rgb(0,20,20)";
    this.hwu.key.backgroundColor = "rgb(0,0,0)";
    this.hwu.lfc.backgroundColor = "rgb(0,50,50)";
    this.hwu.lfc.pbk = "rgb(0,120,120)";
    this.hwu.lfc.borderColor = "rgb(0,70,70)";
    this.hwu.lfc.leq = "rgb(0,20,20)";
    this.gjp.zae = "red";
    this.gjp.noz = "red";
    this.slk.fkn = "yellow";
    this.rhc = {
        font: "verdana",
        yzb: "",
        ded: "yellow",
        backgroundColor: "black",
        borderColor: "rgb(255,255,255)",
        leq: "rgb(150,150,150)"
    };
    this.nsd = {
        font: "verdana",
        yzb: "",
        ded: "yellow",
        backgroundColor: "black",
        borderColor: "rgb(255,255,255)",
        leq: "rgb(150,150,150)"
    };
    this.fnv.backgroundColor = "rgb(0,70,70)";
    this.fnv.tpg = "rgb(0,70,70)";
    this.fnv.ufh = "rgb(0,20,20)";
    this.fnv.key.backgroundColor = "rgb(0,0,0)";
    this.fnv.lfc.backgroundColor = "rgb(0,50,50)";
    this.fnv.lfc.pbk = "rgb(0,120,120)";
    this.fnv.lfc.borderColor = "rgb(0,70,70)";
    this.fnv.lfc.leq = "rgb(0,20,20)";
    this.fnv.ded = "rgb(8,157,153)";
    this.fnv.font = "arial";
    this.fnv.yzb = "bold";
    this.fnv.slk = {
        font: "sans-serif",
        yzb: "bold",
        fkn: "yellow",
        uts: null,
        jsh: null
    };
    this.drj.tpg = "rgb(0,70,70)";
    this.drj.ufh = "rgb(0,20,20)";
    this.drj.lfc.backgroundColor = "rgb(0,50,50)";
    this.drj.lfc.borderColor = "rgb(0,70,70)";
    this.drj.lfc.leq = "rgb(0,20,20)";
    this.drj.win = {
        font: "arial",
        cfl: "verdana",
        yzb: "bold",
        nsw: "bold",
        ded: "yellow",
        drn: "yellow",
        xat: "verdana",
        xrz: "bold italic",
        lev: "white"
    };
    this.drj.cje = {
        font: "arial",
        yzb: "bold",
        ded: "yellow",
        drn: "yellow",
        xat: "verdana",
        xrz: "bold italic",
        lev: "white"
    };
    this.iqi.xxc.lfc.backgroundColor = "rgb(0,50,50)";
    this.zxp.backgroundColor = "rgb(0,70,70)";
    this.zxp.qmm = "rgb(0,40,40)"
}
vem.prototype = new lxe;

function llb() {
    this.type = "800_600";
    this.eax = true;
    this.rgg = false;
    this.fdw = false;
    this.poi = true;
    this.gns = false;
    this.qet = false;
    this.feb = false;
    this.jpo = false
}

function wsa() {
    this.eax = false;
    this.canvas = {
        mki: new gvm(0, 0, 800, 620)
    };
    this.kxa = {
        mki: new gvm(),
        twu: 0
    };
    this.mdj = {
        mki: new gvm(0, 20, 800, 600),
        vqq: 0
    };
    this.mpk = {
        mss: new gvm(0, 40, 440, 36),
        yud: new gvm(5, 2, 140, 30),
        ufs: new gvm(150, 2, 140, 30),
        zrx: new gvm(295, 2, 140, 30),
        okn: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.kgm = {
        mdj: {
            mki: new gvm(0, 0, 500, 360),
            yha: new gvm(5, 325, 490, 30),
            zcp: new gvm(5, 329, 490, 14),
            yog: new gvm(50, 345, 400, 6),
            slr: new gvm(5, 285, 490, 70),
            snl: new gvm(120, 300, 260, 55),
            fontSize: 14,
            gqx: 18,
            zlt: 26,
            vek: 5,
            wid: 12,
            sun: 5,
            uuk: 2
        },
        vug: {
            mki: new gvm(0, 0, 800, 620),
            yha: new gvm(),
            zcp: new gvm(),
            yog: new gvm(200, 425, 400, 8),
            slr: new gvm(100, 372, 600, 84),
            snl: new gvm(270, 394, 260, 70),
            fontSize: 18,
            gqx: 24,
            zlt: 20,
            vek: 0,
            wid: 12,
            sun: 7,
            uuk: 0
        }
    };
    this.ujk = {
        mki: new gvm(0, 0, 800, 20),
        fontSize: 12,
        hgi: 19,
        zuz: 15,
        pfe: 120,
        wid: 2,
        sun: 2,
        fzx: 2,
        ioa: 40
    };
    this.iqi = {
        mki: new gvm(0, 20, 800, 70),
        fontSize: 10,
        wku: 10,
        gnt: 20,
        qrj: 40,
        vqq: 4,
        wid: 10,
        sun: 5,
        vek: 10,
        okn: {
            fontSize: 17,
            vek: 2
        }
    };
    this.cec = {
        mki: new gvm(0, 20, 800, 600),
        mss: new gvm(),
        okn: {
            dzi: 20,
            zav: 0,
            wid: 0,
            rbr: 0,
            jdc: 0,
            biz: 8,
            jox: 8,
            vqq: 0
        },
        dzb: new gvm(0, 20, 800, 40),
        lmm: new gvm(0, 100, 800, 40),
        kck: new gvm(0, 140, 800, 40),
        szo: new gvm(0, 180, 800, 40),
        yam: new gvm(225, 275, 350, 100),
        the: new gvm(200, 480, 400, 40),
        ozp: {
            uae: new gvm(340, 540, 120, 55)
        },
        dno: {
            uae: new gvm(250, 540, 120, 55),
            ynn: new gvm(430, 540, 120, 55)
        },
        qlt: 36,
        fontSize: 30,
        ewp: 22,
        sun: 3,
        wid: 5,
        vqq: 2,
        wfg: 3,
        qjn: 10
    };
    this.kvc = {
        mki: new gvm(-10, 25, 310, 50),
        dzb: new gvm(10, 4, 240, 24),
        zcp: new gvm(10, 28, 240, 18),
        vos: new gvm(260, 10, 40, 30),
        kfz: new gvm(7, 2, 26, 26),
        iii: 16,
        dzi: 12,
        cxf: 18
    };
    this.iww = {
        mki: new gvm(150, 160, 500, 280),
        iii: 26,
        fontSize: 20,
        dtj: new gvm(465, 5, 30, 30),
        dzb: new gvm(30, 5, 440, 30),
        the: new gvm(20, 40, 460, 160),
        eyk: new gvm(20, 230, 460, 40),
        okn: {
            fontSize: 20
        }
    };
    this.aki = {
        mki: new gvm(0, 55, 560, 430),
        vqq: 2,
        epe: 0,
        orv: 5,
        kxq: 10,
        iii: 26,
        znk: 20,
        dzb: new gvm(30, 15, 500, 30),
        qtr: new gvm(20, 50, 520, 60),
        uhf: new gvm(40, 60, 220, 40),
        sbr: new gvm(328, 60, 30, 40),
        lsf: new gvm(360, 60, 120, 40),
        afq: new gvm(482, 60, 30, 40),
        vhp: new gvm(20, 120, 520, 200),
        mjq: new gvm(40, 120, 480, 40),
        rme: new gvm(30, 160, 280, 40),
        jdw: new gvm(328, 160, 30, 40),
        faq: new gvm(360, 160, 120, 40),
        hcg: new gvm(482, 160, 30, 40),
        mqw: new gvm(30, 215, 280, 40),
        frw: new gvm(328, 215, 30, 40),
        vmw: new gvm(360, 215, 120, 40),
        lwe: new gvm(482, 215, 30, 40),
        ony: new gvm(30, 270, 280, 40),
        xwp: new gvm(328, 270, 30, 40),
        voi: new gvm(360, 270, 120, 40),
        yjj: new gvm(482, 270, 30, 40),
        yha: new gvm(30, 330, 500, 30),
        syy: new gvm(210, 370, 140, 50),
        yby: new gvm(),
        vlp: {
            zcp: new gvm(40, 0, 240, 40),
            rfn: new gvm(7, 12, 16, 16),
            fontSize: 20,
            biz: 0,
            vqq: 2
        },
        esv: {
            biz: 3,
            wid: -5,
            sun: -1,
            jox: 6,
            fontSize: 20,
            vqq: 0
        },
        phz: {
            biz: 3,
            wid: 5,
            sun: 0,
            jox: 6,
            fontSize: 20,
            vqq: 0
        },
        pzd: {
            biz: 6,
            wid: 0,
            sun: 0,
            jox: 6,
            fontSize: 26,
            vqq: 2
        },
        display: {
            iii: 16,
            dzi: 24,
            zbs: 0,
            rbr: 0,
            vqq: 2,
            bpt: 3,
            vpx: 3,
            qur: 3,
            kam: 3
        }
    };
    this.xrc = {
        mki: [
            [new gvm(2, 20, 130, 44)],
            [new gvm(2, 20, 130, 44), new gvm(668, 20, 130, 44)],
            [new gvm(2, 20, 130, 23), new gvm(668, 20, 130, 23), new gvm(2, 41, 130, 23)],
            [new gvm(2, 20, 130, 23), new gvm(668, 20, 130, 23), new gvm(2, 41, 130, 23), new gvm(668, 41, 130, 23)]
        ],
        display: {
            ejt: new gvm(0, 0, 130, 44),
            kqi: new gvm(0, 0, 130, 44),
            nwc: new gvm(),
            dzb: new gvm(2, 3, 126, 19),
            nsm: new gvm(8, 24, 114, 19),
            iii: 16,
            zav: 18,
            qmp: 0
        },
        qyv: {
            ejt: new gvm(0, 0, 130, 23),
            kqi: new gvm(0, 0, 130, 23),
            nwc: new gvm(2, 2, 19, 19),
            dzb: new gvm(),
            nsm: new gvm(22, 3, 100, 19),
            iii: 14,
            zav: 18,
            qmp: 0
        },
        qzn: {
            mki: new gvm(62, 100, 676, 372),
            ejt: new gvm(32, 10, 612, 351),
            kqi: new gvm(0, 0, 676, 372),
            nwc: new gvm(301, 263, 74, 74),
            dzb: new gvm(120, 58, 436, 56),
            nsm: new gvm(32, 140, 612, 96),
            iii: 68,
            zav: 100,
            qmp: 0
        },
        krw: {
            mki: new gvm(38, 80, 724, 369),
            naw: new gvm(100, 53, 525, 50),
            nsm: new gvm(186, 153, 332, 94),
            ait: 340,
            jnh: 30,
            zcg: {
                _0: new gvm(2, 0, 90, 94),
                _1: new gvm(98, 0, 90, 94),
                _2: new gvm(194, 0, 90, 94),
                _3: new gvm(290, 0, 90, 94),
                _4: new gvm(386, 0, 90, 94),
                _5: new gvm(482, 0, 90, 94),
                _6: new gvm(578, 0, 90, 94),
                _7: new gvm(674, 0, 90, 94),
                _8: new gvm(770, 0, 90, 94),
                _9: new gvm(866, 0, 90, 94),
                _cm: new gvm(962, 0, 28, 94),
                _dt: new gvm(999, 0, 28, 94),
                _sp: new gvm(1036, 0, 28, 94)
            }
        }
    }
}
wsa.prototype = new llb;

function nym() {
    this.rgg = true
}
nym.prototype = new wsa;

function rjc() {
    this.gns = true;
    this.fdw = true;
    this.eax = false;
    this.rgg = true;
    this.canvas = {
        mki: new gvm(0, 0, 800, 1165)
    };
    this.kxa = {
        mki: new gvm(),
        twu: 0
    };
    this.mdj = {
        mki: new gvm(0, 550, 800, 615),
        vqq: 10
    };
    this.mpk = {
        mss: new gvm(0, 330, 440, 36),
        yud: new gvm(5, 2, 140, 30),
        ufs: new gvm(150, 2, 140, 30),
        zrx: new gvm(295, 2, 140, 30),
        okn: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.kgm = {
        mdj: {
            mki: new gvm(0, 0, 500, 360),
            yha: new gvm(5, 325, 490, 30),
            zcp: new gvm(5, 329, 490, 14),
            yog: new gvm(50, 345, 400, 6),
            slr: new gvm(5, 285, 490, 70),
            snl: new gvm(120, 300, 260, 55),
            fontSize: 14,
            gqx: 18,
            zlt: 26,
            vek: 5,
            wid: 12,
            sun: 5,
            uuk: 2
        },
        vug: {
            mki: new gvm(0, 0, 800, 600),
            yha: new gvm(),
            zcp: new gvm(),
            yog: new gvm(200, 411, 400, 8),
            slr: new gvm(100, 360, 600, 110),
            snl: new gvm(270, 380, 260, 70),
            fontSize: 18,
            gqx: 24,
            zlt: 20,
            vek: 0,
            wid: 12,
            sun: 7,
            uuk: 0
        }
    };
    this.top = {
        mki: new gvm(0, 20, 800, 520)
    };
    this.ujk = {
        mki: new gvm(0, 0, 800, 20),
        fontSize: 12,
        hgi: 19,
        zuz: 15,
        pfe: 120,
        wid: 2,
        sun: 2,
        fzx: 2,
        ioa: 60
    };
    this.iqi = {
        mki: new gvm(0, 20, 800, 70),
        fontSize: 10,
        wku: 10,
        gnt: 20,
        qrj: 40,
        vqq: 4,
        wid: 10,
        sun: 5,
        vek: 10,
        okn: {
            fontSize: 17,
            vek: 2
        }
    };
    this.cec = {
        mki: new gvm(0, 550, 800, 615),
        mss: new gvm(),
        okn: {
            dzi: 26,
            zav: 0,
            wid: 0,
            rbr: 0,
            jdc: 0,
            biz: 10,
            jox: 10,
            vqq: 2
        },
        dzb: new gvm(0, 20, 800, 40),
        lmm: new gvm(0, 100, 800, 40),
        kck: new gvm(0, 140, 800, 40),
        szo: new gvm(0, 180, 800, 40),
        yam: new gvm(225, 275, 350, 100),
        the: new gvm(200, 480, 400, 40),
        ozp: {
            uae: new gvm(340, 540, 120, 68)
        },
        dno: {
            uae: new gvm(250, 540, 120, 68),
            ynn: new gvm(430, 540, 120, 68)
        },
        qlt: 36,
        fontSize: 30,
        ewp: 22,
        sun: 3,
        wid: 5,
        vqq: 2,
        wfg: 3,
        qjn: 10,
    };
    this.kvc = {
        mki: new gvm(-10, 545, 310, 50),
        dzb: new gvm(10, 4, 240, 24),
        zcp: new gvm(10, 28, 240, 18),
        vos: new gvm(260, 10, 40, 30),
        kfz: new gvm(7, 2, 26, 26),
        iii: 16,
        dzi: 12,
        cxf: 18
    };
    this.iww = {
        mki: new gvm(150, 690, 500, 280),
        iii: 26,
        fontSize: 20,
        dtj: new gvm(465, 5, 30, 30),
        dzb: new gvm(30, 5, 440, 40),
        the: new gvm(20, 40, 460, 160),
        eyk: new gvm(20, 230, 460, 40),
        okn: {
            fontSize: 20
        }
    };
    this.aki = {
        mki: new gvm(0, 585, 560, 430),
        vqq: 2,
        epe: 0,
        orv: 5,
        kxq: 10,
        iii: 26,
        znk: 20,
        dzb: new gvm(30, 15, 500, 30),
        qtr: new gvm(20, 50, 520, 60),
        uhf: new gvm(40, 60, 220, 40),
        sbr: new gvm(328, 60, 30, 40),
        lsf: new gvm(360, 60, 120, 40),
        afq: new gvm(482, 60, 30, 40),
        vhp: new gvm(20, 120, 520, 200),
        mjq: new gvm(40, 120, 480, 40),
        rme: new gvm(30, 160, 280, 40),
        jdw: new gvm(328, 160, 30, 40),
        faq: new gvm(360, 160, 120, 40),
        hcg: new gvm(482, 160, 30, 40),
        mqw: new gvm(30, 215, 280, 40),
        frw: new gvm(328, 215, 30, 40),
        vmw: new gvm(360, 215, 120, 40),
        lwe: new gvm(482, 215, 30, 40),
        ony: new gvm(30, 270, 280, 40),
        xwp: new gvm(328, 270, 30, 40),
        voi: new gvm(360, 270, 120, 40),
        yjj: new gvm(482, 270, 30, 40),
        yha: new gvm(30, 330, 500, 30),
        syy: new gvm(210, 370, 140, 50),
        yby: new gvm(),
        vlp: {
            zcp: new gvm(40, 0, 240, 40),
            rfn: new gvm(7, 12, 16, 16),
            fontSize: 20,
            biz: 0,
            vqq: 2
        },
        esv: {
            biz: 3,
            wid: -5,
            sun: -1,
            jox: 6,
            fontSize: 20,
            vqq: 0
        },
        phz: {
            biz: 3,
            wid: 5,
            sun: 0,
            jox: 6,
            fontSize: 20,
            vqq: 0
        },
        pzd: {
            biz: 6,
            wid: 0,
            sun: 0,
            jox: 6,
            fontSize: 26,
            vqq: 2
        },
        display: {
            iii: 16,
            dzi: 24,
            zbs: 0,
            rbr: 0,
            vqq: 2,
            bpt: 3,
            vpx: 3,
            qur: 3,
            kam: 3
        }
    };
    this.xrc = {
        mki: [
            [new gvm(2, 550, 130, 44)],
            [new gvm(2, 550, 130, 44), new gvm(668, 550, 130, 44)],
            [new gvm(2, 550, 130, 23), new gvm(668, 550, 130, 23), new gvm(2, 571, 130, 23)],
            [new gvm(2, 550, 130, 23), new gvm(668, 550, 130, 23), new gvm(2, 571, 130, 23), new gvm(668, 571, 130, 23)]
        ],
        display: {
            ejt: new gvm(0, 0, 130, 44),
            kqi: new gvm(0, 0, 130, 44),
            nwc: new gvm(),
            dzb: new gvm(2, 3, 126, 19),
            nsm: new gvm(8, 24, 114, 19),
            iii: 16,
            zav: 18,
            qmp: 0
        },
        qyv: {
            ejt: new gvm(0, 0, 130, 23),
            kqi: new gvm(0, 0, 130, 23),
            nwc: new gvm(2, 2, 19, 19),
            dzb: new gvm(),
            nsm: new gvm(22, 3, 100, 19),
            iii: 14,
            zav: 18,
            qmp: 0
        },
        qzn: {
            mki: new gvm(62, 640, 676, 372),
            ejt: new gvm(32, 10, 612, 351),
            kqi: new gvm(0, 0, 676, 372),
            nwc: new gvm(301, 263, 74, 74),
            dzb: new gvm(120, 58, 436, 56),
            nsm: new gvm(32, 140, 612, 96),
            iii: 68,
            zav: 100,
            qmp: 0
        },
        krw: {
            mki: new gvm(38, 610, 724, 369),
            naw: new gvm(100, 53, 525, 50),
            nsm: new gvm(186, 153, 332, 94),
            ait: 360,
            jnh: 30,
            zcg: {
                _0: new gvm(2, 0, 90, 94),
                _1: new gvm(98, 0, 90, 94),
                _2: new gvm(194, 0, 90, 94),
                _3: new gvm(290, 0, 90, 94),
                _4: new gvm(386, 0, 90, 94),
                _5: new gvm(482, 0, 90, 94),
                _6: new gvm(578, 0, 90, 94),
                _7: new gvm(674, 0, 90, 94),
                _8: new gvm(770, 0, 90, 94),
                _9: new gvm(866, 0, 90, 94),
                _cm: new gvm(962, 0, 28, 94),
                _dt: new gvm(999, 0, 28, 94),
                _sp: new gvm(1036, 0, 28, 94)
            }
        }
    }
}
rjc.prototype = new llb;

function oac() {
    this.eax = false;
    this.qet = true;
    this.feb = true;
    this.canvas = {
        mki: new gvm(0, 0, 960, 630)
    };
    this.kxa = {
        mki: new gvm(),
        twu: 0,
        fgz: 0
    };
    this.mdj = {
        mki: new gvm(160, 30, 800, 600),
        vqq: 0
    };
    this.mpk = {
        mss: new gvm(460, 25, 500, 34),
        yud: new gvm(5, 2, 160, 30),
        ufs: new gvm(170, 2, 160, 30),
        zrx: new gvm(335, 2, 160, 30),
        okn: {
            fontSize: 16,
            textIndent: 32
        }
    };
    this.kgm = {
        mdj: {
            mki: new gvm(0, 0, 640, 460),
            yha: new gvm(6, 416, 628, 38),
            zcp: new gvm(6, 420, 628, 17),
            yog: new gvm(64, 442, 512, 7),
            slr: new gvm(6, 364, 628, 90),
            snl: new gvm(140, 384, 360, 70),
            fontSize: 18,
            gqx: 20,
            zlt: 30,
            vek: 6,
            wid: 12,
            sun: 6,
            uuk: 3
        },
        vug: {
            mki: new gvm(0, 0, 960, 630),
            yha: new gvm(),
            zcp: new gvm(),
            yog: new gvm(280, 431, 400, 8),
            slr: new gvm(180, 380, 600, 90),
            snl: new gvm(350, 400, 260, 70),
            fontSize: 18,
            gqx: 24,
            zlt: 20,
            vek: 0,
            wid: 12,
            sun: 7,
            uuk: 0
        }
    };
    this.ujk = {
        mki: new gvm(160, 0, 800, 30),
        fontSize: 16,
        hgi: 26,
        zuz: 15,
        pfe: 160,
        wid: 2,
        sun: 2,
        fzx: 2,
        ioa: 0
    };
    this.iqi = {};
    this.cec = {
        mki: new gvm(0, 0, 960, 630),
        mss: new gvm(0, 0, 160, 630),
        okn: {
            dzi: 0,
            zav: 0,
            wid: 0,
            rbr: 0,
            jdc: 0,
            jox: 8,
            biz: 16,
            vqq: 4
        },
        dzb: new gvm(160, 50, 800, 40),
        lmm: new gvm(160, 130, 800, 40),
        kck: new gvm(160, 170, 800, 40),
        szo: new gvm(160, 210, 800, 40),
        yam: new gvm(385, 305, 350, 100),
        the: new gvm(360, 510, 400, 40),
        ozp: {
            uae: new gvm(10, 455, 140, 100),
        },
        dno: {
            uae: new gvm(10, 355, 140, 100),
            ynn: new gvm(10, 165, 140, 100)
        },
        qlt: 36,
        fontSize: 30,
        ewp: 22,
        sun: 3,
        wid: 5,
        vqq: 2,
        wfg: 3,
        qjn: 10
    };
    this.zxp = {
        mki: new gvm(160, 30, 800, 600),
        vqq: 0,
        biz: 0,
        gjt: 50,
        jck: 30,
        znk: 30,
        ygb: new gvm(30, 180, 410, 60),
        ler: new gvm(460, 180, 50, 60),
        oap: new gvm(512, 180, 210, 60),
        ono: new gvm(724, 180, 50, 60),
        tyu: new gvm(30, 310, 410, 60),
        nml: new gvm(460, 310, 50, 60),
        dyy: new gvm(512, 310, 210, 60),
        uzp: new gvm(724, 310, 50, 60),
        urk: new gvm(30, 440, 410, 60),
        smd: new gvm(512, 440, 210, 60),
        bdw: new gvm(40, 530, 720, 50),
        uhf: new gvm(30, 120, 360, 60),
        sbr: new gvm(460, 120, 50, 60),
        lsf: new gvm(512, 120, 210, 60),
        afq: new gvm(724, 120, 50, 60),
        fhy: new gvm(40, 200, 760, 70),
        rme: new gvm(30, 280, 410, 60),
        jdw: new gvm(460, 280, 50, 60),
        faq: new gvm(512, 280, 210, 60),
        hcg: new gvm(724, 280, 50, 60),
        mqw: new gvm(30, 360, 410, 60),
        frw: new gvm(460, 360, 50, 60),
        vmw: new gvm(512, 360, 210, 60),
        lwe: new gvm(724, 360, 50, 60),
        ony: new gvm(30, 440, 410, 60),
        xwp: new gvm(460, 440, 50, 60),
        voi: new gvm(512, 440, 210, 60),
        yjj: new gvm(724, 440, 50, 60),
        yha: new gvm(40, 530, 720, 50),
        lwb: {
            aws: new gvm(0, 0, 267, 90),
            eie: new gvm(267, 0, 266, 90),
            ose: new gvm(533, 0, 267, 90),
            aad: new gvm()
        },
        ihj: {
            aws: new gvm(0, 0, 200, 90),
            nnu: new gvm(200, 0, 200, 90),
            eie: new gvm(400, 0, 200, 90),
            ose: new gvm(600, 0, 200, 90),
            aad: new gvm()
        },
        rxb: [new gvm(132, 205, 200, 160), new gvm(464, 205, 200, 160)],
        qrx: [new gvm(50, 205, 200, 160), new gvm(300, 205, 200, 160), new gvm(550, 205, 200, 160)],
        chw: [new gvm(132, 130, 200, 160), new gvm(464, 130, 200, 160), new gvm(132, 360, 200, 160), new gvm(464, 360, 200, 160)],
        gth: [new gvm(50, 130, 200, 160), new gvm(300, 130, 200, 160), new gvm(550, 130, 200, 160), new gvm(50, 360, 200, 160), new gvm(300, 360, 200, 160), new gvm(550, 360, 200, 160)],
        esv: {
            biz: 3,
            wid: -10,
            sun: -1,
            jox: 6,
            fontSize: 36,
            vqq: 0
        },
        phz: {
            biz: 3,
            wid: 10,
            sun: -1,
            jox: 6,
            fontSize: 36,
            vqq: 0
        },
        hhj: {
            fontSize: 36,
            wid: 0,
            sun: 0,
            jox: 10,
            biz: 0,
            vqq: 0
        },
        sxd: {
            fontSize: 26,
            vek: 5,
            biz: 26,
            vqq: 4,
            yhg: 40
        },
        qsy: {
            iii: 16,
            dzi: 40,
            zbs: 0,
            rbr: 0,
            vqq: 2,
            vek: 3
        },
        hib: {
            iii: 16,
            dzi: 40,
            zbs: 0,
            rbr: 0,
            vqq: 2,
            vek: 3
        },
        vlp: {
            zcp: new gvm(50, 0, 360, 60),
            rfn: new gvm(0, 13, 30, 30),
            fontSize: 30,
            biz: 0,
            vqq: 2
        }
    };
    this.kvc = {
        mki: new gvm(660, 30, 310, 60),
        dzb: new gvm(60, 6, 240, 26),
        zcp: new gvm(60, 34, 240, 20),
        vos: new gvm(5, 11, 50, 38),
        kfz: new gvm(8, 2, 34, 34),
        iii: 16,
        dzi: 12,
        cxf: 24
    };
    this.iww = {
        mki: new gvm(280, 150, 560, 330),
        iii: 26,
        fontSize: 20,
        dtj: new gvm(515, 5, 40, 40),
        dzb: new gvm(40, 5, 480, 30),
        the: new gvm(20, 40, 520, 195),
        eyk: new gvm(20, 265, 520, 54),
        okn: {
            fontSize: 20
        }
    };
    this.xrc = {
        mki: [
            [new gvm(162, 30, 130, 44)],
            [new gvm(162, 30, 130, 44), new gvm(828, 30, 130, 44)],
            [new gvm(162, 30, 130, 23), new gvm(828, 30, 130, 23), new gvm(162, 51, 130, 23)],
            [new gvm(162, 30, 130, 23), new gvm(828, 30, 130, 23), new gvm(162, 51, 130, 23), new gvm(828, 51, 130, 23)]
        ],
        display: {
            ejt: new gvm(0, 0, 130, 44),
            kqi: new gvm(0, 0, 130, 44),
            nwc: new gvm(),
            dzb: new gvm(2, 3, 126, 19),
            nsm: new gvm(8, 24, 114, 19),
            iii: 16,
            zav: 18,
            qmp: 0
        },
        qyv: {
            ejt: new gvm(0, 0, 130, 23),
            kqi: new gvm(0, 0, 130, 23),
            nwc: new gvm(2, 2, 19, 19),
            dzb: new gvm(),
            nsm: new gvm(22, 3, 100, 19),
            iii: 14,
            zav: 18,
            qmp: 0
        },
        qzn: {
            mki: new gvm(222, 110, 676, 372),
            ejt: new gvm(32, 10, 612, 351),
            kqi: new gvm(0, 0, 676, 372),
            nwc: new gvm(301, 263, 74, 74),
            dzb: new gvm(120, 58, 436, 56),
            nsm: new gvm(32, 140, 612, 96),
            iii: 68,
            zav: 100,
            qmp: 0
        },
        krw: {
            mki: new gvm(198, 90, 724, 369),
            naw: new gvm(100, 53, 525, 50),
            nsm: new gvm(186, 153, 332, 94),
            ait: 340,
            jnh: 30,
            zcg: {
                _0: new gvm(2, 0, 90, 94),
                _1: new gvm(98, 0, 90, 94),
                _2: new gvm(194, 0, 90, 94),
                _3: new gvm(290, 0, 90, 94),
                _4: new gvm(386, 0, 90, 94),
                _5: new gvm(482, 0, 90, 94),
                _6: new gvm(578, 0, 90, 94),
                _7: new gvm(674, 0, 90, 94),
                _8: new gvm(770, 0, 90, 94),
                _9: new gvm(866, 0, 90, 94),
                _cm: new gvm(962, 0, 28, 94),
                _dt: new gvm(999, 0, 28, 94),
                _sp: new gvm(1036, 0, 28, 94)
            }
        }
    }
}
oac.prototype = new llb;

function bks() {
    this.eax = false;
    this.qet = true;
    this.feb = true;
    this.canvas = {
        mki: new gvm(0, 0, 960, 630)
    };
    this.kxa = {
        mki: new gvm(),
        twu: 0,
        fgz: 0
    };
    this.mdj = {
        mki: new gvm(0, 30, 800, 600),
        vqq: 0
    };
    this.mpk = {
        mss: new gvm(0, 25, 500, 34),
        yud: new gvm(5, 2, 160, 30),
        ufs: new gvm(170, 2, 160, 30),
        zrx: new gvm(335, 2, 160, 30),
        okn: {
            fontSize: 16,
            textIndent: 32
        }
    };
    this.kgm = {
        mdj: {
            mki: new gvm(0, 0, 640, 460),
            yha: new gvm(6, 416, 628, 38),
            zcp: new gvm(6, 420, 628, 17),
            yog: new gvm(64, 442, 512, 7),
            slr: new gvm(6, 364, 628, 90),
            snl: new gvm(140, 384, 360, 70),
            fontSize: 18,
            gqx: 20,
            zlt: 30,
            vek: 6,
            wid: 12,
            sun: 6,
            uuk: 3
        },
        vug: {
            mki: new gvm(0, 0, 960, 630),
            yha: new gvm(),
            zcp: new gvm(),
            yog: new gvm(280, 431, 400, 8),
            slr: new gvm(180, 380, 600, 90),
            snl: new gvm(350, 400, 260, 70),
            fontSize: 18,
            gqx: 24,
            zlt: 20,
            vek: 0,
            wid: 12,
            sun: 7,
            uuk: 0
        }
    };
    this.ujk = {
        mki: new gvm(0, 0, 800, 30),
        fontSize: 16,
        hgi: 26,
        zuz: 15,
        pfe: 160,
        wid: 2,
        sun: 2,
        fzx: 2,
        ioa: 0
    };
    this.iqi = {};
    this.cec = {
        mki: new gvm(0, 0, 960, 630),
        mss: new gvm(800, 0, 160, 630),
        okn: {
            dzi: 0,
            zav: 0,
            wid: 0,
            rbr: 0,
            jdc: 0,
            jox: 8,
            biz: 16,
            vqq: 4
        },
        dzb: new gvm(0, 50, 800, 40),
        lmm: new gvm(0, 130, 800, 40),
        kck: new gvm(0, 170, 800, 40),
        szo: new gvm(0, 210, 800, 40),
        yam: new gvm(225, 305, 350, 100),
        the: new gvm(200, 510, 400, 40),
        ozp: {
            uae: new gvm(810, 455, 140, 100),
        },
        dno: {
            uae: new gvm(810, 355, 140, 100),
            ynn: new gvm(810, 165, 140, 100)
        },
        qlt: 36,
        fontSize: 30,
        ewp: 22,
        sun: 3,
        wid: 5,
        vqq: 2,
        wfg: 3,
        qjn: 10
    };
    this.zxp = {
        mki: new gvm(0, 30, 800, 600),
        vqq: 0,
        biz: 0,
        gjt: 50,
        jck: 30,
        znk: 30,
        ygb: new gvm(30, 180, 410, 60),
        ler: new gvm(460, 180, 50, 60),
        oap: new gvm(512, 180, 210, 60),
        ono: new gvm(724, 180, 50, 60),
        tyu: new gvm(30, 310, 410, 60),
        nml: new gvm(460, 310, 50, 60),
        dyy: new gvm(512, 310, 210, 60),
        uzp: new gvm(724, 310, 50, 60),
        urk: new gvm(30, 440, 410, 60),
        smd: new gvm(512, 440, 210, 60),
        bdw: new gvm(40, 530, 720, 50),
        uhf: new gvm(30, 120, 360, 60),
        sbr: new gvm(460, 120, 50, 60),
        lsf: new gvm(512, 120, 210, 60),
        afq: new gvm(724, 120, 50, 60),
        fhy: new gvm(40, 200, 760, 70),
        rme: new gvm(30, 280, 410, 60),
        jdw: new gvm(460, 280, 50, 60),
        faq: new gvm(512, 280, 210, 60),
        hcg: new gvm(724, 280, 50, 60),
        mqw: new gvm(30, 360, 410, 60),
        frw: new gvm(460, 360, 50, 60),
        vmw: new gvm(512, 360, 210, 60),
        lwe: new gvm(724, 360, 50, 60),
        ony: new gvm(30, 440, 410, 60),
        xwp: new gvm(460, 440, 50, 60),
        voi: new gvm(512, 440, 210, 60),
        yjj: new gvm(724, 440, 50, 60),
        yha: new gvm(40, 530, 720, 50),
        lwb: {
            aws: new gvm(0, 0, 267, 90),
            eie: new gvm(267, 0, 266, 90),
            ose: new gvm(533, 0, 267, 90),
            aad: new gvm()
        },
        ihj: {
            aws: new gvm(0, 0, 200, 90),
            nnu: new gvm(200, 0, 200, 90),
            eie: new gvm(400, 0, 200, 90),
            ose: new gvm(600, 0, 200, 90),
            aad: new gvm()
        },
        rxb: [new gvm(132, 205, 200, 160), new gvm(464, 205, 200, 160)],
        qrx: [new gvm(50, 205, 200, 160), new gvm(300, 205, 200, 160), new gvm(550, 205, 200, 160)],
        chw: [new gvm(132, 130, 200, 160), new gvm(464, 130, 200, 160), new gvm(132, 360, 200, 160), new gvm(464, 360, 200, 160)],
        gth: [new gvm(50, 130, 200, 160), new gvm(300, 130, 200, 160), new gvm(550, 130, 200, 160), new gvm(50, 360, 200, 160), new gvm(300, 360, 200, 160), new gvm(550, 360, 200, 160)],
        esv: {
            biz: 3,
            wid: -10,
            sun: -1,
            jox: 6,
            fontSize: 36,
            vqq: 0
        },
        phz: {
            biz: 3,
            wid: 10,
            sun: -1,
            jox: 6,
            fontSize: 36,
            vqq: 0
        },
        hhj: {
            fontSize: 36,
            wid: 0,
            sun: 0,
            jox: 10,
            biz: 0,
            vqq: 0
        },
        sxd: {
            fontSize: 26,
            vek: 5,
            biz: 26,
            vqq: 4,
            yhg: 40
        },
        qsy: {
            iii: 16,
            dzi: 40,
            zbs: 0,
            rbr: 0,
            vqq: 2,
            vek: 3
        },
        hib: {
            iii: 16,
            dzi: 40,
            zbs: 0,
            rbr: 0,
            vqq: 2,
            vek: 3
        },
        vlp: {
            zcp: new gvm(50, 0, 360, 60),
            rfn: new gvm(0, 13, 30, 30),
            fontSize: 30,
            biz: 0,
            vqq: 2
        }
    };
    this.kvc = {
        mki: new gvm(-10, 30, 310, 60),
        dzb: new gvm(10, 6, 240, 26),
        zcp: new gvm(10, 34, 240, 20),
        vos: new gvm(255, 11, 50, 38),
        kfz: new gvm(8, 2, 34, 34),
        iii: 16,
        dzi: 12,
        cxf: 24
    };
    this.iww = {
        mki: new gvm(120, 150, 560, 330),
        iii: 26,
        fontSize: 20,
        dtj: new gvm(515, 5, 40, 40),
        dzb: new gvm(40, 5, 480, 30),
        the: new gvm(20, 40, 520, 195),
        eyk: new gvm(20, 265, 520, 54),
        okn: {
            fontSize: 20
        }
    };
    this.xrc = {
        mki: [
            [new gvm(2, 30, 130, 44)],
            [new gvm(2, 30, 130, 44), new gvm(668, 30, 130, 44)],
            [new gvm(2, 30, 130, 23), new gvm(668, 30, 130, 23), new gvm(2, 51, 130, 23)],
            [new gvm(2, 30, 130, 23), new gvm(668, 30, 130, 23), new gvm(2, 51, 130, 23), new gvm(668, 51, 130, 23)]
        ],
        display: {
            ejt: new gvm(0, 0, 130, 44),
            kqi: new gvm(0, 0, 130, 44),
            nwc: new gvm(),
            dzb: new gvm(2, 3, 126, 19),
            nsm: new gvm(8, 24, 114, 19),
            iii: 16,
            zav: 18,
            qmp: 0
        },
        qyv: {
            ejt: new gvm(0, 0, 130, 23),
            kqi: new gvm(0, 0, 130, 23),
            nwc: new gvm(2, 2, 19, 19),
            dzb: new gvm(),
            nsm: new gvm(22, 3, 100, 19),
            iii: 14,
            zav: 18,
            qmp: 0
        },
        qzn: {
            mki: new gvm(62, 110, 676, 372),
            ejt: new gvm(32, 10, 612, 351),
            kqi: new gvm(0, 0, 676, 372),
            nwc: new gvm(301, 263, 74, 74),
            dzb: new gvm(120, 58, 436, 56),
            nsm: new gvm(32, 140, 612, 96),
            iii: 68,
            zav: 100,
            qmp: 0
        },
        krw: {
            mki: new gvm(38, 90, 724, 369),
            naw: new gvm(100, 53, 525, 50),
            nsm: new gvm(186, 153, 332, 94),
            ait: 340,
            jnh: 30,
            zcg: {
                _0: new gvm(2, 0, 90, 94),
                _1: new gvm(98, 0, 90, 94),
                _2: new gvm(194, 0, 90, 94),
                _3: new gvm(290, 0, 90, 94),
                _4: new gvm(386, 0, 90, 94),
                _5: new gvm(482, 0, 90, 94),
                _6: new gvm(578, 0, 90, 94),
                _7: new gvm(674, 0, 90, 94),
                _8: new gvm(770, 0, 90, 94),
                _9: new gvm(866, 0, 90, 94),
                _cm: new gvm(962, 0, 28, 94),
                _dt: new gvm(999, 0, 28, 94),
                _sp: new gvm(1036, 0, 28, 94)
            }
        }
    }
}
bks.prototype = new llb;

function joo() {
    this.neg = true;
    this.fck = true;
    this.hwu = {
        mki: new gvm(0, 496, 800, 124),
        qba: new gvm(0, 0, 800, 124),
        vyb: new gvm(),
        key: {
            mki: new gvm(187, 14, 470, 40),
            sun: 10,
            fontSize: 18,
            biz: 3,
            rck: 2,
            jox: 6,
            vqq: 2
        },
        jvv: {
            dzi: 22,
            zav: 0,
            wid: 0,
            rbr: 0,
            jdc: 0,
            biz: 10,
            jox: 8,
            vqq: 2
        },
        kpi: {
            dzi: 16,
            zav: 0,
            wid: 0,
            rbr: 0,
            jdc: 0,
            biz: 8,
            jox: 6,
            vqq: 2
        },
        asb: {
            dzi: 16,
            zav: 16,
            wid: 0,
            biz: 8,
            jox: 6,
            vqq: 2,
            rbr: 24,
            jdc: -24
        },
        display: {
            zbs: -12,
            rbr: 11,
            dzi: 26,
            iii: 15,
            vqq: 2,
            bpt: 3,
            vpx: 3,
            qur: 3,
            kam: 3
        },
        qvk: new gvm(5, 10, 150, 48),
        zun: new gvm(689, 10, 106, 48),
        jlh: {
            ogr: new gvm(686, 68, 110, 53),
            rpy: new gvm(492, 68, 80, 53),
            hon: new gvm(382, 68, 80, 53),
            ynn: new gvm(272, 68, 80, 53),
            trs: new gvm(25, 68, 110, 53),
            mil: new gvm()
        },
        vjx: {
            ogr: new gvm(686, 68, 110, 53),
            trs: new gvm(532, 68, 80, 53),
            rpy: new gvm(432, 68, 80, 53),
            hon: new gvm(332, 68, 80, 53),
            ynn: new gvm(232, 68, 80, 53),
            iis: new gvm(40, 68, 80, 53),
            mil: new gvm()
        },
        prs: {
            ogr: new gvm(686, 68, 110, 53),
            trs: new gvm(492, 68, 80, 53),
            rpy: new gvm(382, 68, 80, 53),
            hon: new gvm(272, 68, 80, 53),
            iis: new gvm(40, 68, 80, 53),
            mil: new gvm()
        },
        eyo: {
            ogr: new gvm(686, 68, 110, 53),
            rpy: new gvm(492, 68, 80, 53),
            hon: new gvm(382, 68, 80, 53),
            ynn: new gvm(272, 68, 80, 53),
            trs: new gvm(25, 68, 110, 53),
            mil: new gvm()
        },
        bko: 15
    };
    this.drj = {
        mki: new gvm(0, 20, 800, 600),
        mss: new gvm(0, 540, 800, 60),
        ynn: new gvm(711, 544, 73, 53),
        ehl: new gvm(11, 544, 73, 53),
        psy: new gvm(316, 544, 73, 53),
        bck: new gvm(411, 544, 73, 53),
        okn: {
            dzi: 16,
            zav: 0,
            wid: 0,
            rbr: 0,
            jdc: 0,
            jox: 6,
            biz: 8,
            vqq: 2
        }
    };
    this.fnv = {
        mki: new gvm(0, 20, 800, 600),
        mss: new gvm(0, 485, 800, 115),
        key: {
            mki: new gvm(187, 490, 470, 40),
            fontSize: 18,
            sun: 14,
            biz: 3,
            rck: 2,
            jox: 6,
            vqq: 2
        },
        okn: {
            dzi: 18,
            zav: 0,
            wid: 0,
            rbr: 0,
            jdc: 0,
            jox: 8,
            biz: 10,
            vqq: 2
        },
        display: {
            zbs: -12,
            rbr: 11,
            dzi: 26,
            iii: 15,
            vqq: 2,
            bpt: 3,
            vpx: 3,
            qur: 3,
            kam: 3
        },
        gsb: new gvm(689, 486, 106, 48),
        tmj: new gvm(5, 486, 150, 48)
    };
    this.xio = {
        mki: new gvm(710, 35, 90, 450),
        dzb: new gvm(5, 5, 80, 15),
        mza: new gvm(50, 25, 35, 410),
        fontSize: 15,
        djb: 20,
        vqq: 2,
        biz: 5,
        xho: 4,
        ejl: 10,
        bqe: 5
    };
    this.gjp = {
        fontSize: 18,
        wwl: 128,
        mcl: 176,
        rna: 0,
        vvo: 20,
        nqz: true
    };
    this.jjl = new gvm(20, 290, 128, 205);
    this.thv = new gvm(176, 290, 128, 205);
    this.ktx = new gvm(333, 290, 128, 205);
    this.mcv = new gvm(490, 290, 128, 205);
    this.siz = new gvm(646, 290, 128, 205);
    this.slk = {
        mki: new gvm(363, 72, 408, 155),
        fontSize: 50,
        wid: 0,
        sun: 9,
        vek: 0,
        qmp: 2
    };
    this.ghw = {
        mki: new gvm(355, 30, 424, 236),
        fontSize: 20,
        vek: 6
    }
}
joo.prototype = new wsa;

function vlc() {
    this.rgg = true
}
vlc.prototype = new joo;

function csb() {
    this.neg = true;
    this.fck = true;
    this.hwu = {
        mki: new gvm(0, 1026, 800, 139),
        qba: new gvm(0, 0, 800, 139),
        vyb: new gvm(),
        key: {
            mki: new gvm(187, 14, 470, 40),
            sun: 10,
            fontSize: 18,
            biz: 3,
            rck: 2,
            jox: 6,
            vqq: 2
        },
        jvv: {
            dzi: 28,
            zav: 0,
            wid: 0,
            rbr: 0,
            jdc: 0,
            biz: 12,
            jox: 10,
            vqq: 2
        },
        kpi: {
            dzi: 21,
            zav: 0,
            wid: 0,
            rbr: 0,
            jdc: 0,
            biz: 10,
            jox: 8,
            vqq: 2
        },
        asb: {
            dzi: 21,
            zav: 21,
            wid: 0,
            biz: 8,
            jox: 6,
            vqq: 2,
            rbr: 30,
            jdc: -32
        },
        display: {
            zbs: -12,
            rbr: 11,
            dzi: 26,
            iii: 15,
            vqq: 2,
            bpt: 3,
            vpx: 3,
            qur: 3,
            kam: 3
        },
        qvk: new gvm(5, 10, 150, 48),
        zun: new gvm(689, 10, 106, 48),
        jlh: {
            ogr: new gvm(675, 68, 120, 68),
            rpy: new gvm(486, 68, 100, 68),
            hon: new gvm(371, 68, 100, 68),
            ynn: new gvm(256, 68, 100, 68),
            trs: new gvm(20, 68, 120, 68),
            mil: new gvm()
        },
        vjx: {
            ogr: new gvm(675, 68, 110, 68),
            trs: new gvm(536, 68, 100, 68),
            rpy: new gvm(426, 68, 100, 68),
            hon: new gvm(316, 68, 100, 68),
            ynn: new gvm(206, 68, 100, 68),
            iis: new gvm(30, 68, 100, 68),
            mil: new gvm()
        },
        prs: {
            ogr: new gvm(675, 68, 120, 68),
            trs: new gvm(486, 68, 100, 68),
            rpy: new gvm(371, 68, 100, 68),
            hon: new gvm(256, 68, 100, 68),
            iis: new gvm(30, 68, 100, 68),
            mil: new gvm()
        },
        eyo: {
            ogr: new gvm(675, 68, 120, 68),
            rpy: new gvm(486, 68, 100, 68),
            hon: new gvm(371, 68, 100, 68),
            ynn: new gvm(256, 68, 100, 68),
            trs: new gvm(20, 68, 120, 68),
            mil: new gvm()
        },
        bko: 15
    };
    this.drj = {
        mki: new gvm(0, 550, 800, 615),
        mss: new gvm(0, 540, 800, 75),
        ynn: new gvm(695, 544, 90, 68),
        ehl: new gvm(11, 544, 90, 68),
        psy: new gvm(295, 544, 90, 68),
        bck: new gvm(415, 544, 90, 68),
        okn: {
            dzi: 21,
            zav: 0,
            wid: 0,
            rbr: 0,
            jdc: 0,
            jox: 8,
            biz: 10,
            vqq: 2
        }
    };
    this.fnv = {
        mki: new gvm(0, 550, 800, 615),
        mss: new gvm(0, 485, 800, 130),
        key: {
            mki: new gvm(187, 490, 470, 40),
            fontSize: 18,
            sun: 14,
            biz: 3,
            rck: 2,
            jox: 6,
            vqq: 2
        },
        okn: {
            dzi: 23,
            zav: 0,
            wid: 0,
            rbr: 0,
            jdc: 0,
            jox: 10,
            biz: 12,
            vqq: 2
        },
        display: {
            zbs: -12,
            rbr: 11,
            dzi: 26,
            iii: 15,
            vqq: 2,
            bpt: 3,
            vpx: 3,
            qur: 3,
            kam: 3
        },
        gsb: new gvm(689, 486, 106, 48),
        tmj: new gvm(5, 486, 150, 48)
    };
    this.xio = {
        mki: new gvm(710, 565, 90, 450),
        dzb: new gvm(5, 5, 80, 15),
        mza: new gvm(50, 25, 35, 410),
        fontSize: 15,
        djb: 20,
        vqq: 2,
        biz: 5,
        xho: 4,
        ejl: 10,
        bqe: 5
    };
    this.gjp = {
        fontSize: 18,
        wwl: 128,
        mcl: 176,
        rna: 0,
        vvo: 20,
        nqz: true
    };
    this.jjl = new gvm(20, 820, 128, 205);
    this.thv = new gvm(176, 820, 128, 205);
    this.ktx = new gvm(333, 820, 128, 205);
    this.mcv = new gvm(490, 820, 128, 205);
    this.siz = new gvm(646, 820, 128, 205);
    this.slk = {
        mki: new gvm(363, 602, 408, 155),
        fontSize: 50,
        wid: 0,
        sun: 9,
        vek: 0,
        qmp: 2
    };
    this.ghw = {
        mki: new gvm(355, 560, 424, 236),
        fontSize: 20,
        vek: 6
    };
    this.top = {
        mki: new gvm(0, 20, 800, 520)
    }
}
csb.prototype = new rjc;

function cmd() {
    this.neg = false;
    this.fck = true;
    this.hwu = {
        mki: new gvm(0, 0, 960, 630),
        qba: new gvm(160, 506, 800, 124),
        vyb: new gvm(0, 0, 160, 630),
        key: {
            mki: new gvm(385, 525, 390, 70),
            sun: 14,
            fontSize: 24,
            biz: 3,
            rck: 2,
            jox: 6,
            vqq: 2
        },
        jvv: {
            dzi: 0,
            zav: 0,
            wid: 0,
            rbr: 0,
            jdc: 0,
            biz: 24,
            jox: 8,
            vqq: 6
        },
        kpi: {
            dzi: 0,
            zav: 0,
            wid: 0,
            rbr: 0,
            jdc: 0,
            biz: 16,
            jox: 8,
            vqq: 4
        },
        asb: {
            dzi: 0,
            zav: 24,
            wid: 0,
            biz: 24,
            jox: 8,
            vqq: 6,
            rbr: 0,
            jdc: -130
        },
        display: {
            zbs: -20,
            rbr: 16,
            dzi: 32,
            iii: 18,
            vqq: 3,
            bpt: 3,
            vpx: 3,
            qur: 3,
            kam: 3
        },
        qvk: new gvm(165, 525, 180, 70),
        zun: new gvm(815, 525, 140, 70),
        jlh: {
            ogr: new gvm(10, 215, 140, 200),
            rpy: new gvm(),
            hon: new gvm(),
            ynn: new gvm(10, 455, 140, 100),
            trs: new gvm(),
            mil: new gvm(10, 75, 140, 100)
        },
        vjx: {
            ogr: new gvm(10, 215, 140, 200),
            trs: new gvm(),
            rpy: new gvm(),
            hon: new gvm(),
            ynn: new gvm(10, 455, 140, 100),
            iis: new gvm(),
            mil: new gvm(10, 75, 140, 100)
        },
        prs: {
            ogr: new gvm(10, 215, 140, 200),
            trs: new gvm(),
            rpy: new gvm(),
            hon: new gvm(),
            iis: new gvm(),
            mil: new gvm(10, 75, 140, 100)
        },
        eyo: {
            ogr: new gvm(10, 215, 140, 200),
            rpy: new gvm(),
            hon: new gvm(),
            ynn: new gvm(10, 455, 140, 100),
            trs: new gvm(),
            mil: new gvm(10, 75, 140, 100)
        },
        bko: 15
    };
    this.drj = {
        mki: new gvm(0, 0, 960, 630),
        mss: new gvm(0, 0, 160, 630),
        ynn: new gvm(10, 455, 140, 100),
        ehl: new gvm(),
        psy: new gvm(10, 75, 140, 100),
        bck: new gvm(10, 265, 140, 100),
        okn: {
            dzi: 0,
            zav: 0,
            wid: 0,
            rbr: 0,
            jdc: 0,
            jox: 16,
            biz: 16,
            vqq: 4
        }
    };
    this.fnv = {
        mki: new gvm(0, 0, 960, 630),
        mss: new gvm(0, 0, 160, 630),
        key: {
            mki: new gvm(390, 525, 390, 70),
            fontSize: 20,
            sun: 14,
            biz: 3,
            rck: 2,
            jox: 6,
            vqq: 2
        },
        okn: {
            dzi: 24,
            zav: 0,
            wid: 0,
            rbr: 0,
            jdc: 0,
            jox: 8,
            biz: 16,
            vqq: 4
        },
        display: {
            zbs: -20,
            rbr: 16,
            dzi: 32,
            iii: 18,
            vqq: 3,
            bpt: 3,
            vpx: 3,
            qur: 3,
            kam: 3
        },
        tmj: new gvm(165, 525, 180, 70),
        gsb: new gvm(815, 525, 140, 70),
    };
    this.gjp = {
        fontSize: 18,
        wwl: 128,
        mcl: 176,
        rna: 0,
        vvo: 20,
        nqz: true
    };
    this.jjl = new gvm(180, 300, 128, 205);
    this.thv = new gvm(336, 300, 128, 205);
    this.ktx = new gvm(493, 300, 128, 205);
    this.mcv = new gvm(650, 300, 128, 205);
    this.siz = new gvm(806, 300, 128, 205);
    this.slk = {
        mki: new gvm(523, 82, 408, 155),
        fontSize: 50,
        wid: 0,
        sun: 9,
        vek: 0,
        qmp: 2
    };
    this.ghw = {
        mki: new gvm(515, 40, 424, 236),
        fontSize: 20,
        vek: 6
    };
    this.zxp.ygb = new gvm();
    this.zxp.oap = new gvm();
    this.zxp.tyu = new gvm();
    this.zxp.nml = new gvm();
    this.zxp.dyy = new gvm();
    this.zxp.uzp = new gvm();
    this.zxp.urk = new gvm(30, 180, 410, 60);
    this.zxp.smd = new gvm(512, 180, 210, 60)
}
cmd.prototype = new oac;

function oep() {
    this.neg = false;
    this.fck = true;
    this.hwu = {
        mki: new gvm(0, 0, 960, 630),
        qba: new gvm(0, 506, 800, 124),
        vyb: new gvm(800, 0, 160, 630),
        key: {
            mki: new gvm(225, 525, 390, 70),
            sun: 14,
            fontSize: 24,
            biz: 3,
            rck: 2,
            jox: 6,
            vqq: 2
        },
        jvv: {
            dzi: 0,
            zav: 0,
            wid: 0,
            rbr: 0,
            jdc: 0,
            biz: 24,
            jox: 8,
            vqq: 6
        },
        kpi: {
            dzi: 0,
            zav: 0,
            wid: 0,
            rbr: 0,
            jdc: 0,
            biz: 16,
            jox: 8,
            vqq: 4
        },
        asb: {
            dzi: 0,
            zav: 24,
            wid: 0,
            biz: 24,
            jox: 8,
            vqq: 6,
            rbr: 0,
            jdc: -130
        },
        display: {
            zbs: -20,
            rbr: 16,
            dzi: 32,
            iii: 18,
            vqq: 3,
            bpt: 3,
            vpx: 3,
            qur: 3,
            kam: 3
        },
        qvk: new gvm(5, 525, 180, 70),
        zun: new gvm(655, 525, 140, 70),
        jlh: {
            ogr: new gvm(810, 215, 140, 200),
            rpy: new gvm(),
            hon: new gvm(),
            ynn: new gvm(810, 455, 140, 100),
            trs: new gvm(),
            mil: new gvm(810, 75, 140, 100)
        },
        vjx: {
            ogr: new gvm(810, 215, 140, 200),
            trs: new gvm(),
            rpy: new gvm(),
            hon: new gvm(),
            ynn: new gvm(810, 455, 140, 100),
            iis: new gvm(),
            mil: new gvm(810, 75, 140, 100)
        },
        prs: {
            ogr: new gvm(810, 215, 140, 200),
            trs: new gvm(),
            rpy: new gvm(),
            hon: new gvm(),
            iis: new gvm(),
            mil: new gvm(810, 75, 140, 100)
        },
        eyo: {
            ogr: new gvm(810, 215, 140, 200),
            rpy: new gvm(),
            hon: new gvm(),
            ynn: new gvm(810, 455, 140, 100),
            trs: new gvm(),
            mil: new gvm(810, 75, 140, 100)
        },
        bko: 15
    };
    this.drj = {
        mki: new gvm(0, 0, 960, 630),
        mss: new gvm(800, 0, 160, 630),
        ynn: new gvm(810, 455, 140, 100),
        ehl: new gvm(),
        psy: new gvm(810, 75, 140, 100),
        bck: new gvm(810, 265, 140, 100),
        okn: {
            dzi: 0,
            zav: 0,
            wid: 0,
            rbr: 0,
            jdc: 0,
            jox: 16,
            biz: 16,
            vqq: 4
        }
    };
    this.fnv = {
        mki: new gvm(0, 0, 960, 630),
        mss: new gvm(800, 0, 160, 630),
        key: {
            mki: new gvm(230, 525, 390, 70),
            fontSize: 20,
            sun: 14,
            biz: 3,
            rck: 2,
            jox: 6,
            vqq: 2
        },
        okn: {
            dzi: 24,
            zav: 0,
            wid: 0,
            rbr: 0,
            jdc: 0,
            jox: 8,
            biz: 16,
            vqq: 4
        },
        display: {
            zbs: -20,
            rbr: 16,
            dzi: 32,
            iii: 18,
            vqq: 3,
            bpt: 3,
            vpx: 3,
            qur: 3,
            kam: 3
        },
        tmj: new gvm(5, 525, 180, 70),
        gsb: new gvm(655, 525, 140, 70),
    };
    this.gjp = {
        fontSize: 18,
        wwl: 128,
        mcl: 176,
        rna: 0,
        vvo: 20,
        nqz: true
    };
    this.jjl = new gvm(20, 300, 128, 205);
    this.thv = new gvm(176, 300, 128, 205);
    this.ktx = new gvm(333, 300, 128, 205);
    this.mcv = new gvm(490, 300, 128, 205);
    this.siz = new gvm(646, 300, 128, 205);
    this.slk = {
        mki: new gvm(363, 82, 408, 155),
        fontSize: 50,
        wid: 0,
        sun: 9,
        vek: 0,
        qmp: 2
    };
    this.ghw = {
        mki: new gvm(355, 40, 424, 236),
        fontSize: 20,
        vek: 6
    };
    this.zxp.ygb = new gvm();
    this.zxp.oap = new gvm();
    this.zxp.tyu = new gvm();
    this.zxp.nml = new gvm();
    this.zxp.dyy = new gvm();
    this.zxp.uzp = new gvm();
    this.zxp.urk = new gvm(30, 180, 410, 60);
    this.zxp.smd = new gvm(512, 180, 210, 60)
}
oep.prototype = new bks;

function tag() {
    this.gjp.fontSize = 25;
    this.gjp.wwl = 144;
    this.gjp.mcl = 194;
    this.gjp.rna = 5;
    this.gjp.vvo = 41;
    this.gjp.nqz = false;
    this.jjl = new gvm(28, 233, 144, 240);
    this.thv = new gvm(178, 233, 144, 240);
    this.ktx = new gvm(328, 233, 144, 240);
    this.mcv = new gvm(478, 233, 144, 240);
    this.siz = new gvm(628, 233, 144, 240);
    this.slk.mki = new gvm(524, 26, 269, 84);
    this.slk.fontSize = 40;
    this.slk.iii = 16;
    this.slk.sun = 15;
    this.slk.zbs = -18;
    this.rhc = {
        mki: new gvm(524, 109, 269, 111),
        upr: new gvm(30, 20, 125, 73),
        ihx: new gvm(14, 16, 145, 80),
        yha: new gvm(160, 45, 85, 34),
        fontSize: 30,
        vqq: 2,
        vek: 4
    };
    this.nsd = {
        mki: new gvm(5, 25, 514, 195),
        qtv: new gvm(20, 56, 75, 60),
        wbk: new gvm(91, 21, 75, 60),
        syj: new gvm(172, 21, 75, 60),
        hob: new gvm(244, 56, 75, 60),
        njh: new gvm(55, 130, 230, 35),
        zqb: new gvm(332, 35, 163, 83),
        jdj: new gvm(345, 130, 125, 35),
        fontSize: 30,
        vek: 4,
        vqq: 2
    };
    this.fnv.gjp = {
        mki: new gvm(28, 240, 344, 194),
        wwl: 144,
        mcl: 194,
        wid: 30,
    };
    this.fnv.slk = {
        mki: new gvm(524, 6, 269, 84),
        fontSize: 40,
        iii: 16,
        wid: 0,
        sun: 15,
        zbs: -18,
        vek: 0,
        qmp: 2
    };
    this.fnv.kpi = {
        dzi: 16,
        zav: 0,
        wid: 0,
        rbr: 0,
        jdc: 0,
        biz: 8,
        jox: 6,
        vqq: 2
    };
    this.fnv.mss = new gvm(0, 476, 800, 124);
    this.fnv.qie = new gvm(686, 544, 110, 53);
    this.fnv.mid = new gvm(382, 544, 80, 53);
    this.fnv.mji = new gvm(272, 544, 80, 53);
    this.fnv.ejm = new gvm(492, 544, 80, 53);
    this.fnv.yha = new gvm(50, 20, 700, 120);
    this.fnv.pmi = new gvm(524, 89, 269, 111);
    this.fnv.vrv = new gvm(5, 5, 514, 195);
    this.fnv.fpy = new gvm(70, 40, 380, 60);
    this.fnv.bls = new gvm(300, 125, 180, 40);
    this.fnv.eln = new gvm(45, 125, 180, 40);
    this.fnv.fontSize = 24;
    this.fnv.oqg = 20;
    this.drj.win = {
        mki: new gvm(0, 0, 800, 600),
        fontSize: 30,
        iii: 40,
        knx: 30,
        znk: 12,
        lineWidth: 1,
        dzb: new gvm(),
        yha: new gvm(0, 520, 800, 20),
        zcp: [new gvm(620, 338, 140, 40), new gvm(25, 430, 240, 50)],
        gsb: [new gvm(140, 30, 115, 140), new gvm(400, 30, 115, 140), new gvm(660, 30, 115, 140), new gvm(140, 190, 115, 140), new gvm(400, 190, 115, 140), new gvm(660, 190, 115, 140), new gvm(140, 350, 115, 40), new gvm(400, 350, 115, 40)],
        kfz: [new gvm(280, 470, 40, 30), new gvm(340, 470, 40, 30), new gvm(400, 470, 40, 30), new gvm(460, 470, 40, 30), new gvm(520, 470, 40, 30), new gvm(580, 470, 40, 30), new gvm(640, 470, 40, 30), new gvm(700, 470, 40, 30)]
    };
    this.drj.cje = {
        mki: new gvm(0, 0, 800, 600),
        fontSize: 22,
        iii: 40,
        lineWidth: 1,
        dzb: new gvm(),
        zcp: [new gvm(400, 65, 325, 170), new gvm(235, 345, 150, 130), new gvm(580, 345, 150, 130)]
    }
}
tag.prototype = new joo;

function icw() {
    this.rgg = true
}
icw.prototype = new tag;

function sbj() {
    this.gjp.fontSize = 25;
    this.gjp.wwl = 144;
    this.gjp.mcl = 194;
    this.gjp.rna = 5;
    this.gjp.vvo = 41;
    this.gjp.nqz = false;
    this.jjl = new gvm(28, 753, 144, 240);
    this.thv = new gvm(178, 753, 144, 240);
    this.ktx = new gvm(328, 753, 144, 240);
    this.mcv = new gvm(478, 753, 144, 240);
    this.siz = new gvm(628, 753, 144, 240);
    this.slk.mki = new gvm(524, 556, 269, 84);
    this.slk.fontSize = 40;
    this.slk.iii = 16;
    this.slk.sun = 15;
    this.slk.zbs = -18;
    this.rhc = {
        mki: new gvm(524, 639, 269, 111),
        upr: new gvm(30, 20, 125, 73),
        ihx: new gvm(14, 16, 145, 80),
        yha: new gvm(160, 45, 85, 34),
        fontSize: 30,
        vqq: 2,
        vek: 4
    };
    this.nsd = {
        mki: new gvm(5, 555, 514, 195),
        qtv: new gvm(20, 56, 75, 60),
        wbk: new gvm(91, 21, 75, 60),
        syj: new gvm(172, 21, 75, 60),
        hob: new gvm(244, 56, 75, 60),
        njh: new gvm(55, 130, 230, 35),
        zqb: new gvm(332, 35, 163, 83),
        jdj: new gvm(345, 130, 125, 35),
        fontSize: 30,
        vek: 4,
        vqq: 2
    };
    this.fnv.gjp = {
        mki: new gvm(28, 240, 344, 194),
        wwl: 144,
        mcl: 194,
        wid: 30,
    };
    this.fnv.slk = {
        mki: new gvm(524, 6, 269, 84),
        fontSize: 40,
        iii: 16,
        wid: 0,
        sun: 15,
        zbs: -18,
        vek: 0,
        qmp: 2
    };
    this.fnv.kpi = {
        dzi: 16,
        zav: 0,
        wid: 0,
        rbr: 0,
        jdc: 0,
        biz: 10,
        jox: 8,
        vqq: 2
    };
    this.fnv.mss = new gvm(0, 476, 800, 139);
    this.fnv.qie = new gvm(675, 544, 120, 68);
    this.fnv.mid = new gvm(371, 544, 100, 68);
    this.fnv.mji = new gvm(256, 544, 100, 68);
    this.fnv.ejm = new gvm(486, 544, 100, 68);
    this.fnv.yha = new gvm(50, 20, 700, 120);
    this.fnv.pmi = new gvm(524, 89, 269, 111);
    this.fnv.vrv = new gvm(5, 5, 514, 195);
    this.fnv.fpy = new gvm(70, 40, 380, 60);
    this.fnv.bls = new gvm(300, 125, 180, 40);
    this.fnv.eln = new gvm(45, 125, 180, 40);
    this.fnv.fontSize = 24;
    this.fnv.oqg = 20;
    this.drj.win = {
        mki: new gvm(0, 0, 800, 615),
        fontSize: 30,
        iii: 40,
        knx: 30,
        znk: 12,
        lineWidth: 1,
        dzb: new gvm(),
        yha: new gvm(0, 520, 800, 20),
        zcp: [new gvm(620, 338, 140, 40), new gvm(25, 430, 240, 50)],
        gsb: [new gvm(140, 30, 115, 140), new gvm(400, 30, 115, 140), new gvm(660, 30, 115, 140), new gvm(140, 190, 115, 140), new gvm(400, 190, 115, 140), new gvm(660, 190, 115, 140), new gvm(140, 350, 115, 40), new gvm(400, 350, 115, 40)],
        kfz: [new gvm(280, 470, 40, 30), new gvm(340, 470, 40, 30), new gvm(400, 470, 40, 30), new gvm(460, 470, 40, 30), new gvm(520, 470, 40, 30), new gvm(580, 470, 40, 30), new gvm(640, 470, 40, 30), new gvm(700, 470, 40, 30)]
    };
    this.top.win = {
        mki: new gvm(0, 0, 800, 520),
        fontSize: 30,
        iii: 40,
        knx: 30,
        znk: 12,
        lineWidth: 1,
        dzb: new gvm(),
        yha: new gvm(0, 500, 800, 16),
        zcp: [new gvm(620, 328, 140, 40), new gvm(25, 420, 240, 50)],
        gsb: [new gvm(140, 28, 115, 136), new gvm(400, 28, 115, 136), new gvm(660, 28, 115, 136), new gvm(140, 182, 115, 136), new gvm(400, 182, 115, 136), new gvm(660, 182, 115, 136), new gvm(140, 338, 115, 40), new gvm(400, 338, 115, 40)],
        kfz: [new gvm(280, 455, 40, 30), new gvm(340, 455, 40, 30), new gvm(400, 455, 40, 30), new gvm(460, 455, 40, 30), new gvm(520, 455, 40, 30), new gvm(580, 455, 40, 30), new gvm(640, 455, 40, 30), new gvm(700, 455, 40, 30)]
    };
    this.drj.cje = {
        mki: new gvm(0, 0, 800, 615),
        fontSize: 22,
        iii: 40,
        lineWidth: 1,
        dzb: new gvm(),
        zcp: [new gvm(400, 65, 325, 170), new gvm(235, 345, 150, 130), new gvm(580, 345, 150, 130)]
    }
}
sbj.prototype = new csb;

function iqs() {
    this.gjp.fontSize = 25;
    this.gjp.wwl = 144;
    this.gjp.mcl = 194;
    this.gjp.rna = 5;
    this.gjp.vvo = 41;
    this.gjp.nqz = false;
    this.jjl = new gvm(188, 243, 144, 240);
    this.thv = new gvm(338, 243, 144, 240);
    this.ktx = new gvm(488, 243, 144, 240);
    this.mcv = new gvm(638, 243, 144, 240);
    this.siz = new gvm(788, 243, 144, 240);
    this.slk.mki = new gvm(684, 36, 269, 84);
    this.slk.fontSize = 40;
    this.slk.iii = 16;
    this.slk.sun = 15;
    this.slk.zbs = -18;
    this.rhc = {
        mki: new gvm(684, 119, 269, 111),
        upr: new gvm(30, 20, 125, 73),
        ihx: new gvm(14, 16, 145, 80),
        yha: new gvm(160, 45, 85, 34),
        fontSize: 30,
        vqq: 2,
        vek: 4
    };
    this.nsd = {
        mki: new gvm(165, 35, 514, 195),
        qtv: new gvm(20, 56, 75, 60),
        wbk: new gvm(91, 21, 75, 60),
        syj: new gvm(172, 21, 75, 60),
        hob: new gvm(244, 56, 75, 60),
        njh: new gvm(55, 130, 230, 35),
        zqb: new gvm(332, 35, 163, 83),
        jdj: new gvm(345, 130, 125, 35),
        fontSize: 30,
        vek: 4,
        vqq: 2
    };
    this.fnv.gjp = {
        mki: new gvm(188, 270, 344, 194),
        wwl: 144,
        mcl: 194,
        wid: 30,
    };
    this.fnv.slk = {
        mki: new gvm(684, 36, 269, 84),
        fontSize: 40,
        iii: 16,
        wid: 0,
        sun: 15,
        zbs: -18,
        vek: 0,
        qmp: 2
    };
    this.fnv.kpi = {
        dzi: 26,
        zav: 0,
        wid: 0,
        rbr: 0,
        jdc: 0,
        biz: 16,
        jox: 8,
        vqq: 4
    };
    this.fnv.qie = new gvm(10, 455, 140, 100);
    this.fnv.mid = new gvm(10, 65, 140, 100);
    this.fnv.mji = new gvm(10, 325, 140, 100);
    this.fnv.ejm = new gvm(10, 195, 140, 100);
    this.fnv.pmi = new gvm(684, 119, 269, 111);
    this.fnv.vrv = new gvm(165, 35, 514, 195);
    this.fnv.fpy = new gvm(230, 70, 380, 60);
    this.fnv.bls = new gvm(460, 155, 180, 40);
    this.fnv.eln = new gvm(205, 155, 180, 40);
    this.fnv.fontSize = 24;
    this.fnv.oqg = 20;
    this.drj.win = {
        mki: new gvm(160, 30, 800, 600),
        fontSize: 30,
        iii: 40,
        knx: 30,
        znk: 20,
        lineWidth: 1,
        dzb: new gvm(),
        yha: new gvm(0, 520, 800, 40),
        zcp: [new gvm(620, 338, 140, 40), new gvm(25, 430, 240, 50)],
        gsb: [new gvm(140, 30, 115, 140), new gvm(400, 30, 115, 140), new gvm(660, 30, 115, 140), new gvm(140, 190, 115, 140), new gvm(400, 190, 115, 140), new gvm(660, 190, 115, 140), new gvm(140, 350, 115, 40), new gvm(400, 350, 115, 40)],
        kfz: [new gvm(280, 470, 40, 30), new gvm(340, 470, 40, 30), new gvm(400, 470, 40, 30), new gvm(460, 470, 40, 30), new gvm(520, 470, 40, 30), new gvm(580, 470, 40, 30), new gvm(640, 470, 40, 30), new gvm(700, 470, 40, 30)]
    };
    this.drj.cje = {
        mki: new gvm(160, 30, 800, 600),
        fontSize: 22,
        iii: 40,
        lineWidth: 1,
        dzb: new gvm(),
        zcp: [new gvm(400, 65, 325, 170), new gvm(235, 345, 150, 130), new gvm(580, 345, 150, 130)]
    }
}
iqs.prototype = new cmd;

function yoi() {
    this.gjp.fontSize = 25;
    this.gjp.wwl = 144;
    this.gjp.mcl = 194;
    this.gjp.rna = 5;
    this.gjp.vvo = 41;
    this.gjp.nqz = false;
    this.jjl = new gvm(28, 243, 144, 240);
    this.thv = new gvm(178, 243, 144, 240);
    this.ktx = new gvm(328, 243, 144, 240);
    this.mcv = new gvm(478, 243, 144, 240);
    this.siz = new gvm(628, 243, 144, 240);
    this.slk.mki = new gvm(524, 36, 269, 84);
    this.slk.fontSize = 40;
    this.slk.iii = 16;
    this.slk.sun = 15;
    this.slk.zbs = -18;
    this.rhc = {
        mki: new gvm(524, 119, 269, 111),
        upr: new gvm(30, 20, 125, 73),
        ihx: new gvm(14, 16, 145, 80),
        yha: new gvm(160, 45, 85, 34),
        fontSize: 30,
        vqq: 2,
        vek: 4
    };
    this.nsd = {
        mki: new gvm(5, 35, 514, 195),
        qtv: new gvm(20, 56, 75, 60),
        wbk: new gvm(91, 21, 75, 60),
        syj: new gvm(172, 21, 75, 60),
        hob: new gvm(244, 56, 75, 60),
        njh: new gvm(55, 130, 230, 35),
        zqb: new gvm(332, 35, 163, 83),
        jdj: new gvm(345, 130, 125, 35),
        fontSize: 30,
        vek: 4,
        vqq: 2
    };
    this.fnv.gjp = {
        mki: new gvm(28, 270, 344, 194),
        wwl: 144,
        mcl: 194,
        wid: 30,
    };
    this.fnv.slk = {
        mki: new gvm(524, 36, 269, 84),
        fontSize: 40,
        iii: 16,
        wid: 0,
        sun: 15,
        zbs: -18,
        vek: 0,
        qmp: 2
    };
    this.fnv.kpi = {
        dzi: 26,
        zav: 0,
        wid: 0,
        rbr: 0,
        jdc: 0,
        biz: 16,
        jox: 8,
        vqq: 4
    };
    this.fnv.qie = new gvm(810, 455, 140, 100);
    this.fnv.mid = new gvm(810, 65, 140, 100);
    this.fnv.mji = new gvm(810, 325, 140, 100);
    this.fnv.ejm = new gvm(810, 195, 140, 100);
    this.fnv.pmi = new gvm(524, 119, 269, 111);
    this.fnv.vrv = new gvm(5, 35, 514, 195);
    this.fnv.fpy = new gvm(70, 70, 380, 60);
    this.fnv.bls = new gvm(300, 155, 180, 40);
    this.fnv.eln = new gvm(45, 155, 180, 40);
    this.fnv.fontSize = 24;
    this.fnv.oqg = 20;
    this.drj.win = {
        mki: new gvm(0, 30, 800, 600),
        fontSize: 30,
        iii: 40,
        knx: 30,
        znk: 20,
        lineWidth: 1,
        dzb: new gvm(),
        yha: new gvm(0, 520, 800, 40),
        zcp: [new gvm(620, 338, 140, 40), new gvm(25, 430, 240, 50)],
        gsb: [new gvm(140, 30, 115, 140), new gvm(400, 30, 115, 140), new gvm(660, 30, 115, 140), new gvm(140, 190, 115, 140), new gvm(400, 190, 115, 140), new gvm(660, 190, 115, 140), new gvm(140, 350, 115, 40), new gvm(400, 350, 115, 40)],
        kfz: [new gvm(280, 470, 40, 30), new gvm(340, 470, 40, 30), new gvm(400, 470, 40, 30), new gvm(460, 470, 40, 30), new gvm(520, 470, 40, 30), new gvm(580, 470, 40, 30), new gvm(640, 470, 40, 30), new gvm(700, 470, 40, 30)]
    };
    this.drj.cje = {
        mki: new gvm(0, 30, 800, 600),
        fontSize: 22,
        iii: 40,
        lineWidth: 1,
        dzb: new gvm(),
        zcp: [new gvm(400, 65, 325, 170), new gvm(235, 345, 150, 130), new gvm(580, 345, 150, 130)]
    }
}
yoi.prototype = new oep;
var xzl = {
    language: {
        EN: "en",
        RU: "ru",
        EE: "et",
        ES: "es",
        DE: "de",
        TR: "tr",
        CZ: "cs",
        GR: "el",
        AT: "at",
        US: "us",
        BG: "bg",
        CO: "co",
        CL: "cl",
        MX: "mx",
        VE: "ve",
        BR: "br",
        GE: "ka",
        HU: "hu",
        RO: "ro",
        PT: "pt",
        FR: "fr",
        HR: "hr",
        IT: "it",
        SE: "sv"
    },
    uxj: {
        cal: 0,
        lzd: 1,
        lov: 2,
        ofw: 3,
        mon: 4,
        afy: 5,
        ywh: 10,
        kat: 11,
        ppz: 12,
        hnf: 13,
        yjt: 14,
        elm: 15,
        fwg: 16
    },
    os: {
        ssn: 0,
        qow: 1,
        vaq: 2,
        cjo: 3,
        dmv: 4
    },
    asz: {
        uxe: 1,
        jod: 3,
        ozm: 4,
        ihe: 5,
        mij: 7,
        iem: 8,
        wbc: 11,
        pxs: 13,
        uzn: 14,
        nki: 6,
        lri: 9,
        qxq: 10
    },
    iqz: {
        kiq: 1,
        hsi: 2,
        xwv: 4,
        vbh: 8,
        smw: 16,
        veb: 32
    },
    wmn: {
        swc: 1,
        kom: 2,
        xyp: 3,
        ioh: 4,
        lzr: 5,
        crq: 6,
        nuo: 7,
        jjo: 94,
        opq: 95,
        zom: 96,
        pzf: 97,
        cai: 98,
        qpg: 99,
        roulette: {
            mvt: 2,
            suo: 9,
            ubh: 10
        }
    },
    ui: {
        fuo: "minimal",
        awm: "modern",
        ozm: "classic"
    },
    bmv: {
        mpr: "auto",
        vwu: "left",
        jmc: "right"
    },
    kgm: {
        niz: 0,
        vmq: 4
    },
    xrc: {
        fcf: {
            pet: "ji",
            sud: "jv",
            obb: "jh"
        }
    },
    zqa: {
        vwe: {
            trl: 1,
            mvc: 2
        },
        fhw: {
            ijm: 1,
            tde: 2,
            mme: 3
        }
    },
    meg: {
        efv: 0,
        jqr: 1
    }
};
xzl.fbk = (function() {
    var g = ["moz", "webkit", "ms", "o"],
        f = 0,
        d = 0;
    var b = document.createElement("canvas");
    if (!(b.getContext && b.getContext("2d"))) {
        f += xzl.iqz.kiq
    }
    if (!(window.WebSocket || window.MozWebSocket)) {
        f += xzl.iqz.hsi
    }
    try {
        if (!(window.localStorage && window.sessionStorage)) {
            f += xzl.iqz.xwv
        } else {
            sessionStorage.dummy = true;
            sessionStorage.removeItem("dummy")
        }
    } catch (c) {
        f += xzl.iqz.xwv
    }
    if (!(b.style.MozTransform != undefined || b.style.WebkitTransform != undefined || b.style.OTransform != undefined || b.style.msTransform != undefined)) {
        f += xzl.iqz.vbh
    }
    try {
        if (window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
            window.AudioContext = webkitAudioContext;
            if (!AudioContext.prototype.hasOwnProperty("createGain")) {
                AudioContext.prototype.createGain = AudioContext.prototype.createGainNode
            }
            AudioContext.prototype.obg = AudioContext.prototype.createBufferSource;
            AudioContext.prototype.createBufferSource = function() {
                var e = this.obg();
                if (!e.start) {
                    e.start = e.noteOn
                }
                if (!e.stop) {
                    e.stop = e.noteOff
                }
                return e
            }
        }
        if (window.requestAnimationFrame) {
            window.oai = window.requestAnimationFrame;
            window.evq = window.cancelAnimationFrame || window.cancelRequestAnimationFrame
        }
        for (var a = 0; a < g.length && !window.oai; ++a) {
            window.oai = window[g[a] + "RequestAnimationFrame"];
            window.evq = window[g[a] + "CancelAnimationFrame"] || window[g[a] + "CancelRequestAnimationFrame"]
        }
        if (!window.oai || !window.evq) {
            window.oai = function(l, i) {
                var e = new Date().getTime();
                var j = Math.max(0, 16 - (e - d));
                var k = window.setTimeout(function() {
                    l(e + j)
                }, j);
                d = e + j;
                return k
            }
        }
        if (!window.evq) {
            window.evq = function(e) {
                clearTimeout(e)
            }
        }
        if (window.MozWebSocket) {
            window.WebSocket = window.MozWebSocket
        }
        if (navigator.browserLanguage) {
            navigator.language = navigator.browserLanguage
        }
    } catch (c) {
        console.error(c.wmn)
    }
    return f
})();

function cuf() {
    var a = {};
    this.wrd = 1;
    this.hwr = 1;
    this.wye = 0.6;
    this.kzr = 0.4;
    this.tqg = function() {};
    this.kpp = function(b, c) {
        a[b] = c
    };
    this.mio = function(b) {
        if (a[b]) {
            return a[b]
        } else {
            return this.wrd
        }
    }
}

function alq() {
    this.audio = {
        jpm: 65,
        zxt: -1,
        value: "A",
        nvo: null
    };
    this.dtv = {
        jpm: 70,
        zxt: 122,
        value: "F",
        nvo: "F11"
    };
    this.rhf = {
        jpm: 72,
        zxt: -1,
        value: "H",
        nvo: null
    };
    this.cec = {
        jpm: 83,
        zxt: -1,
        value: "S",
        nvo: null
    };
    this.uut = {
        jpm: 68,
        zxt: -1,
        value: "D",
        nvo: null
    };
    this.ok = {
        jpm: 13,
        zxt: -1,
        value: "OK",
        nvo: null
    };
    this.mtz = [this.audio, this.dtv, this.rhf, this.cec, this.uut, this.ok]
}

function xhr() {
    var o = this;
    this.afp = false;
    this.mgy = null;
    this.iqx = false;
    this.tnk = false;
    var f = {};
    var i = {};
    var d = [];
    var a = [];
    var k = [];
    var j = 30;
    var g = 0;
    var b = 0;
    var e = 0;
    var m = [];
    var l = null;
    var c = false;
    var n = false;
    this.tqg = function() {
        this.hna();
        this.php();
        this.iqx = false;
        this.tnk = false
    };
    this.hna = function() {
        try {
            if (webAudioEngine == null) {
                webAudioEngine = new AudioContext()
            }
            this.mgy = webAudioEngine.createGain();
            this.mgy.connect(webAudioEngine.destination);
            this.afp = true
        } catch (p) {
            this.afp = false
        }
    };
    this.php = function() {
        m = xzl.mav.dwr()
    };
    this.flw = function(p) {
        l = p
    };
    this.buk = function(p) {
        c = p
    };
    this.emy = function(t, s, p, q) {
        var r = new aaj(t);
        r.tqg(this.afp, s, p, l.mio(t));
        i[t] = r;
        k.push(r);
        d.push({
            fpq: r,
            fsc: q,
            xkc: o.uan,
            den: m
        })
    };
    this.ebd = function(r, q) {
        var p = new Image();
        f[r] = p;
        d.push({
            fpq: p,
            fsc: q,
            xkc: null
        })
    };
    this.uxa = function(q, p) {
        d.unshift({
            fpq: null,
            fsc: q,
            xkc: o.xru,
            oxr: p
        })
    };
    this.pxu = function() {
        n = true;
        g = d.length;
        b = 0;
        while (d.length > 0) {
            o.vyp(d.shift())
        }
    };
    this.start = function() {
        if (!o.iqx) {
            return
        }
        o.iqx = false;
        n = false;
        g = d.length;
        b = 0;
        j = 1;
        for (var q = 0; q < j && d.length > 0; q++) {
            a.push(d.shift())
        }
        for (var p = 0; p < a.length; p++) {
            o.vyp(a.shift())
        }
    };
    this.iqh = function() {
        b++;
        if (o.gsj()) {
            o.iqx = true;
            xzl.mdj.puy()
        }
    };
    this.jwr = function() {
        o.wzp()
    };
    this.ngl = function() {
        o.tnk = true;
        o.wzp()
    };
    this.wzp = function() {
        b++;
        o.oyk();
        if (o.gsj()) {
            o.ogm()
        } else {
            o.xxm()
        }
    };
    this.oyk = function() {
        var p = xzl.mdj.ktg.wqb("loading");
        e = Math.round(100 * b / g);
        if (e < 100) {
            if (p) {
                p.shb(e)
            }
        }
    };
    this.ogm = function() {
        var q = xzl.mdj.ktg.wqb("loading");
        if (o.tnk) {
            xzl.mdj.huv(xzl.mdj.language.waa);
            var p = confirm(xzl.mdj.language.ywc);
            if (p == true) {
                xzl.mdj.tcp = false;
                o.ils();
                xzl.mdj.mhv()
            } else {
                if (xzl.mdj.yoa) {
                    xzl.mdj.yoa.ujb({
                        sender: xzl.mdj.bnr,
                        lang: sessionStorage.sessionValue1.toUpperCase(),
                        data: {
                            success: false
                        }
                    })
                }
                setTimeout(xzl.mdj.pnm, 1000)
            }
        } else {
            if (!xzl.mdj.lpi) {
                e = 100;
                if (q) {
                    q.shb(e)
                }
                if (c === true) {
                    q.ftg()
                } else {
                    setTimeout(xzl.mdj.mhv, 200)
                }
            }
        }
    };
    this.rbo = function() {
        return e
    };
    this.xxm = function() {
        if (d.length > 0) {
            a.push(d.shift());
            if (j === 1 && (a[0].fpq instanceof Image || a[0].fpq instanceof aaj)) {
                j = 30;
                for (var p = 0; p < j && d.length > 0; p++) {
                    a.push(d.shift())
                }
            }
        } else {}
        if (a.length > 0) {
            o.vyp(a.shift())
        }
    };
    this.gsj = function() {
        return (g > 0 && b == g)
    };
    this.vyp = function(p) {
        if (p.fpq instanceof Image) {
            if (n === true) {
                this.dth(p.fpq, p.fsc)
            } else {
                this.dbx(p.fpq, p.fsc)
            }
        } else {
            if (p.fpq instanceof aaj) {
                this.gbd(p.fpq, p.fsc, p.xkc, p.den)
            } else {
                this.kzt(p.fsc, p.oxr, p.xkc)
            }
        }
    };
    this.dth = function(q, p) {
        q.onload = function() {
            xzl.mdj.ond.iqh()
        };
        q.onerror = function() {
            console.error("can not load image " + p)
        };
        q.src = p + "?v=" + xzl.mdj.xzy
    };
    this.dbx = function(q, p) {
        q.onload = function() {
            xzl.mdj.ond.jwr()
        };
        q.onerror = function() {
            console.error("can not load image " + p);
            xzl.mdj.huv(xzl.mdj.language.qjz);
            setTimeout(xzl.mdj.pnm, 3000)
        };
        q.src = p + "?v=" + xzl.mdj.xzy
    };
    this.gbd = function(q, r, s, p) {
        q.load(r, s, p)
    };
    this.kzt = function(s, p, t) {
        var q = new XMLHttpRequest();
        q.open("GET", s + p, true);
        q.responseType = "text";
        q.onreadystatechange = function() {
            if (q.readyState == 4 && q.status == 200) {
                var u = JSON.parse(q.responseText);
                t(s, u)
            }
        };
        q.onerror = function() {
            console.error("can not load " + s + p);
            xzl.mdj.huv(xzl.mdj.language.qjz);
            setTimeout(xzl.mdj.pnm, 3000)
        };
        try {
            q.send()
        } catch (r) {
            console.error("can not load from " + s + p);
            xzl.mdj.huv(xzl.mdj.language.qjz);
            setTimeout(xzl.mdj.pnm, 3000)
        }
    };
    this.uan = function(q, p) {
        i[q].nhv = p
    };
    this.xru = function(r, q) {
        var p = new Image();
        p.onload = function() {
            o.ifn(p, q.data)
        };
        p.onerror = function() {
            console.error("can not load image " + r + q.src);
            xzl.mdj.huv(xzl.mdj.language.qjz);
            setTimeout(xzl.mdj.pnm, 3000)
        };
        p.src = r + q.src + "?v=" + xzl.mdj.xzy
    };
    this.ifn = function(r, u) {
        var s = null,
            q = null;
        for (var t = 0, p = u.length; t < p; t++) {
            s = document.createElement("canvas");
            s.width = u[t].rect.w;
            s.height = u[t].rect.h;
            q = s.getContext("2d");
            q.drawImage(r, u[t].rect.x, u[t].rect.y, u[t].rect.w, u[t].rect.h, 0, 0, u[t].rect.w, u[t].rect.h);
            o.hnt(u[t].id, s)
        }
        xzl.mdj.ond.jwr()
    };
    this.bbt = function(p) {
        if (i && i[p]) {
            return i[p]
        } else {}
        return null
    };
    this.hnt = function(q, p) {
        if (p && !f[q]) {
            f[q] = p
        } else {}
        return null
    };
    this.jcf = function(p) {
        if (f[p]) {
            return f[p]
        } else {}
        return null
    };
    this.eab = function(p) {
        if (!i) {
            return 0
        }
        var q = 0,
            r = true;
        while (r) {
            if (i[p + q]) {
                q++
            } else {
                r = false
            }
        }
        return q
    };
    this.bca = function(p) {
        if (!f) {
            return 0
        }
        var q = 0,
            r = true;
        while (r) {
            if (f[p + q]) {
                q++
            } else {
                r = false
            }
        }
        return q
    };
    this.ewm = function(q, p) {
        if (i && i[q]) {
            i[q].play(p)
        } else {}
    };
    this.yxe = function(p) {
        if (i && i[p]) {
            i[p].stop()
        } else {}
    };
    this.usr = function(q, p) {
        if (i && i[q]) {
            i[q].vqj(p)
        } else {}
    };
    this.mak = function(s, q, r, p) {
        p = (p != null && p === true);
        if (i && i[s]) {
            i[s].ggw(l.mio(s) * q, r, p)
        }
    };
    this.jsc = function(p) {
        if (i && i[p]) {
            return i[p].oue()
        }
        return 0
    };
    this.ebm = function(p) {
        if (this.afp) {
            this.mgy.gain.setValueAtTime(p, webAudioEngine.currentTime)
        }
    };
    this.vpu = function(q) {
        if (this.afp) {
            this.mgy.gain.setValueAtTime((q) ? 0 : 1, webAudioEngine.currentTime)
        } else {
            if (k) {
                for (var p = 0; p < k.length; p++) {
                    k[p].vqj(q)
                }
            }
        }
    };
    this.ils = function() {
        if (k) {
            for (var p = 0; p < k.length; p++) {
                k[p].clear()
            }
        }
        k = null;
        i = null
    }
}

function ccr() {
    this.iiy = {};
    this.hlw = {};
    this.sif = [];
    this.tqg = function() {
        this.iiy = {};
        this.hlw = {};
        this.sif = []
    };
    this.qzf = function(b) {
        this.iiy[b] = b
    };
    this.ovw = function(f, e, d) {
        this.hlw[f] = e;
        this.hlw[f].mle = [];
        if (d && this.iiy) {
            for (var c = 0, b = d.length; c < b; c++) {
                if (this.iiy[d[c]]) {
                    this.hlw[f].mle.push(d[c])
                } else {}
            }
        }
        this.sif.push(this.hlw[f])
    };
    this.nxo = function() {
        var c = [];
        for (var d = 0, b = this.sif.length; d < b; d++) {
            if (this.sif[d] != null) {
                c.push(this.sif[d])
            }
        }
        return c
    };
    this.wqb = function(b) {
        if (this.hlw && this.hlw[b]) {
            return this.hlw[b]
        }
        return null
    };
    this.ebo = function(g) {
        if (this.iiy && this.iiy[g]) {
            var d = [];
            for (var f = 0, b = this.sif.length; f < b; f++) {
                for (var e = 0, c = this.sif[f].mle.length; e < c; e++) {
                    if (this.sif[f].mle[e] == g) {
                        d.push(this.sif[f])
                    }
                }
            }
            return d
        }
        return []
    };
    this.hro = function() {
        return this.iiy
    };
    this.nej = function(e) {
        var d = -1;
        if (this.hlw && this.hlw[e]) {
            for (var c = 0, b = this.sif.length; c < b; c++) {
                if (this.sif[c] == this.hlw[e]) {
                    d = c;
                    this.hlw[e] = null
                }
            }
        }
        if (d >= 0) {
            this.sif.splice(d, 1)
        }
    };
    this.nuj = function(f) {
        if (this.iiy && this.iiy[f]) {
            this.iiy[f] = null;
            for (var e = 0, b = this.sif.length; e < b; e++) {
                for (var d = 0, c = this.sif[e].mle.length; d < c; d++) {
                    if (this.sif[e].mle[d] == f) {
                        this.sif[e].mle.splice(d, 1)
                    }
                }
            }
        }
    };
    this.ybw = function(e, d, c, b) {
        return a(this.wqb(e), d, c, b)
    };
    this.mwc = function(f, d, c) {
        for (var e = 0, b = this.sif.length; e < b; e++) {
            a(this.sif[e], f, d, c)
        }
    };
    this.sce = function(k, l, f, e) {
        if (this.iiy && this.iiy[k]) {
            for (var g = 0, b = this.sif.length; g < b; g++) {
                for (var d = 0, c = this.sif[g].mle.length; d < c; d++) {
                    if (this.sif[g].mle[d] == k) {
                        a(this.sif[g], l, f, e)
                    }
                }
            }
        }
    };

    function a(d, g, c, b) {
        if (!b) {
            b = Object
        }
        try {
            if ((d) && (d instanceof b) && (typeof g === "string" && g.indexOf("#") == 0)) {
                g = d[g.substring(1, g.length)];
                if (typeof g === "function") {
                    if (c) {
                        return g.apply(d, c)
                    } else {
                        return g.call(d)
                    }
                }
            }
        } catch (f) {
            console.error(f)
        }
    }
}

function aaj(b) {
    var a = this;
    this.svx = null;
    this.loop = false;
    this.muted = false;
    this.volume = 1;
    this.id = b;
    this.tgy = false;
    this.nhv = null;
    this.jbk = null;
    this.dwe = 0;
    this.vqn = 0;
    this.kph = 0;
    this.eym = 0;
    this.gll = 30000;
    this.pqq = "";
    this.duv = "";
    this.zvy = "";
    this.qou = null;
    this.ybl = 1;
    this.ivt = 0;
    this.ewg = -1;
    this.lpc = 0;
    this.tle = 0;
    this.afh = false;
    this.tqg = function(c, f, d, e) {
        this.tgy = c;
        if (e) {
            this.ybl = e;
            this.volume = e
        }
        if (f) {
            this.svx = f
        }
        if (d) {
            this.loop = d
        }
    };
    this.play = function(c) {
        if (typeof c == "undefined") {
            c = 0
        }
        if (this.tgy) {
            clearTimeout(this.ewg);
            if (this.nhv) {
                this.volume = (this.muted === true) ? 0 : xzl.nfj.value40 * this.ybl;
                this.afh = false;
                this.jbk = webAudioEngine.createBufferSource();
                this.jbk.buffer = this.nhv;
                this.jbk.loop = this.loop;
                this.dwe = webAudioEngine.createGain();
                this.dwe.gain.setValueAtTime(this.volume, webAudioEngine.currentTime);
                this.jbk.connect(this.dwe);
                this.dwe.connect(xzl.mdj.ond.mgy);
                this.jbk.start(0, c);
                this.ivt = webAudioEngine.currentTime;
                if (this.svx) {
                    this.vqn = setTimeout(a.svx, a.nhv.duration * 1000)
                }
            }
        } else {
            if (this.jbk) {
                if (this.loop) {
                    if (xzl.mav.mmk != xzl.uxj.mon && xzl.mav.mmk != xzl.uxj.yjt) {
                        this.kph = setInterval(a.snz, a.jbk.duration * 1000)
                    }
                }
                this.jbk.currentTime = 0;
                this.jbk.play()
            }
        }
    };
    this.snz = function() {
        if (!a.jbk.paused || (xzl.mav.mmk != xzl.uxj.lov && xzl.mav.mmk != xzl.uxj.ppz)) {
            a.jbk.currentTime = 0
        }
    };
    this.stop = function() {
        if (a) {
            if (a.tgy) {
                a.ivt = 0;
                if (a.jbk) {
                    a.jbk.stop(0);
                    a.jbk = null
                }
                clearTimeout(a.vqn);
                if (a.ewg >= 0) {
                    clearTimeout(a.ewg);
                    a.ewg = -1
                }
            } else {
                if (a.jbk) {
                    a.jbk.currentTime = 0;
                    a.jbk.pause();
                    clearInterval(a.kph);
                    if (a.ewg >= 0) {
                        clearTimeout(a.ewg);
                        a.ewg = -1
                    }
                }
            }
        }
    };
    this.load = function(e, c, d) {
        this.pqq = d[0];
        if (d.length >= 2) {
            this.duv = d[1];
            this.zvy = e;
            this.qou = c
        }
        e += this.pqq + "?v=" + xzl.mdj.xzy;
        if (this.tgy) {
            this.qeu(e, c)
        } else {
            this.byd(e)
        }
    };
    this.bem = function() {
        if (this.tgy) {
            this.qeu(this.zvy + this.duv + "?v=" + xzl.mdj.xzy, this.qou)
        }
    };
    this.byd = function(c) {
        this.jbk = new Audio();
        this.eym = setTimeout(function() {
            console.error("can not load audio " + c);
            xzl.mdj.ond.ngl()
        }, this.gll);
        this.jbk.addEventListener("canplaythrough", function() {
            this.removeEventListener("canplaythrough", arguments.callee, false);
            clearTimeout(a.eym);
            xzl.mdj.ond.jwr();
            a.kjd()
        }, false);
        this.jbk.addEventListener("error", function() {
            clearTimeout(a.eym);
            console.error("can not load audio " + c);
            xzl.mdj.ond.ngl()
        }, false);
        this.jbk.volume = xzl.nfj.value40 * this.volume;
        this.jbk.src = c;
        this.jbk.load()
    };
    this.qeu = function(f, g) {
        var c = new XMLHttpRequest();
        c.open("GET", f, true);
        c.responseType = "arraybuffer";
        c.onload = function() {
            webAudioEngine.decodeAudioData(c.response, function(e) {
                if (g) {
                    if (a.id) {
                        g(a.id, e)
                    } else {
                        g(e)
                    }
                }
                xzl.mdj.ond.jwr()
            }, function() {
                a.jiu("can not decode audio ", f)
            })
        };
        c.onerror = function() {
            a.jiu("can not load audio ", f)
        };
        try {
            c.send()
        } catch (d) {
            a.jiu("can not load audio from ", f)
        }
    };
    this.jiu = function(d, c) {
        console.error(d + c);
        if (a.duv != "" && c.indexOf(a.duv) < 0) {
            a.bem()
        } else {
            xzl.mdj.ond.ngl()
        }
    };
    this.hjy = function(c) {
        this.svx = c;
        this.kjd()
    };
    this.kjd = function() {
        if (!this.tgy) {
            if (this.svx) {
                if (this.jbk) {
                    this.jbk.addEventListener("ended", function() {
                        a.svx()
                    }, false)
                }
            }
            if (xzl.mav.mmk == xzl.uxj.mon || xzl.mav.mmk == xzl.uxj.yjt) {
                if (this.loop) {
                    if (this.jbk) {
                        this.jbk.addEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.avq = function() {
        if (!this.sgv) {
            if (this.svx) {
                if (this.jbk) {
                    this.jbk.removeEventListener("ended", function() {
                        a.svx()
                    }, false)
                }
            }
            if (xzl.mav.mmk == xzl.uxj.mon || xzl.mav.mmk == xzl.uxj.yjt) {
                if (this.loop) {
                    if (this.jbk) {
                        this.jbk.removeEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.ggw = function(d, e, c) {
        if (this.tgy === true && this.dwe) {
            this.volume = (this.muted === true) ? 0 : xzl.nfj.value40 * d * this.ybl;
            if (e > 0) {
                this.dwe.gain.linearRampToValueAtTime(this.volume, webAudioEngine.currentTime + (e / 1000))
            } else {
                this.dwe.gain.setValueAtTime(this.volume, webAudioEngine.currentTime)
            }
            if (c === true) {
                this.ewg = setTimeout(this.stop, e)
            }
        } else {
            if (!this.tgy && c === true) {
                this.ewg = setTimeout(this.stop, e)
            }
        }
    };
    this.vqj = function(c) {
        this.muted = c;
        if (!this.tgy) {
            if (this.jbk && this.jbk.readyState > 0) {
                this.jbk.muted = c
            }
        } else {
            if (this.dwe) {
                this.dwe.gain.linearRampToValueAtTime((this.muted === true) ? 0 : xzl.nfj.value40 * this.volume, webAudioEngine.currentTime)
            }
        }
    };
    this.clear = function() {
        if (this.tgy) {
            if (this.jbk) {
                this.jbk.stop(0);
                clearTimeout(this.vqn);
                this.jbk = null
            }
        } else {
            if (this.jbk && this.jbk.readyState > 0) {
                this.jbk.currentTime = 0;
                this.jbk.pause();
                if (this.svx) {
                    this.avq(this.svx)
                }
                this.jbk = null
            }
        }
    };
    this.oue = function() {
        if (this.tgy && this.ivt > 0) {
            return (webAudioEngine.currentTime - this.ivt) % this.nhv.duration
        }
        return 0
    }
}

function nho() {
    var a = null;
    this.hez = "";
    var b = null;
    this.connect = function(c) {
        a = this;
        this.hez = c;
        b = new WebSocket(this.hez);
        b.onopen = function(d) {
            a.oma(d)
        };
        b.onclose = function(d) {
            a.xko(d)
        };
        b.onmessage = function(d) {
            a.wxe(d)
        };
        b.onerror = function(d) {
            a.qay(d)
        }
    };
    this.nld = function(c) {};
    this.ewc = function(c) {
        b.send(c)
    };
    this.oma = function(c) {
        this.ewc("A/u25vlt")
    };
    this.xko = function(c) {};
    this.wxe = function(c) {
        this.nld(c.data)
    };
    this.qay = function(c) {}
}

function cjd() {
    var b = null;
    this.mqy = null;
    this.fbk = 0;
    this.zjh = -1;
    this.wmn = -1;
    this.rfy = -1;
    this.ycf = 0;
    this.hez = "";
    this.msj = "";
    this.lrs = "";
    this.uer = "";
    this.bnr = "";
    this.xzy = "";
    this.kvj = "";
    this.dqx = "";
    this.cqp = [];
    this.vlf = [];
    this.ruw = [];
    this.lhg = [];
    var g = false;
    var a = false;
    var d = false;
    var f = false;
    var c = null;
    var e = 1;
    this.tqg = function(i) {
        this.mqy = i;
        b = this;
        g = false;
        a = false;
        d = false;
        f = false;
        c = new WebSocket(this.hez);
        c.onopen = function(j) {
            b.oma(j)
        };
        c.onclose = function(j) {
            b.xko(j)
        };
        c.onmessage = function(j) {
            b.wxe(j)
        };
        c.onerror = function(j) {
            b.qay(j)
        }
    };
    this.jaj = function(i) {
        var j = parseInt(i.charAt(this.ycf), 16);
        this.ycf++;
        return j
    };
    this.rrf = function(i) {
        var k = 0;
        var j = i.charAt(this.ycf);
        j += i.charAt(this.ycf + 1);
        this.ycf += 2;
        k = parseInt(j, 16);
        return k
    };
    this.dhq = function(m) {
        var j = this.tll(m);
        var n = [];
        for (var k = 0; k < j; k++) {
            n[k] = parseInt(m.charAt(this.ycf), 16);
            this.ycf += 1
        }
        return n
    };
    this.tll = function(n) {
        var m = 0;
        var j = parseInt(n.charAt(this.ycf), 16);
        this.ycf++;
        var o = "";
        for (var k = 0; k < j; k++) {
            o += n.charAt(this.ycf);
            this.ycf += 1
        }
        m = parseInt(o, 16);
        return m
    };
    this.uzr = function(i) {
        var j = "";
        if (this.ycf < i.length) {
            j = i.substring(this.ycf, i.length)
        }
        return j
    };
    this.nld = function(i) {};
    this.auo = function(o) {
        var u = o.substr(0, 2),
            l = o.substring(2),
            k = [],
            t = [],
            s = [],
            q = null;
        if (l && l.length > 0) {
            if (u === xzl.xrc.fcf.pet || u === xzl.xrc.fcf.sud) {
                k = l.split("|");
                for (var p = 0, r = k.length; p < r; p++) {
                    t = k[p].split(":");
                    if (u === xzl.xrc.fcf.pet && t.length >= 3) {
                        if (t[2].toLowerCase() != "mystery") {
                            this.cqp[p] = {
                                lqt: t[0],
                                value: Number(t[1]),
                                rmj: t[2]
                            };
                            if (t.length >= 5) {
                                this.cqp[p].kmh = t[3];
                                this.cqp[p].pxt = t[4]
                            }
                        }
                    } else {
                        if (u === xzl.xrc.fcf.sud && t.length >= 2) {
                            for (var p = 0, r = this.cqp.length; p < r; p++) {
                                if (this.cqp[p].lqt === t[0]) {
                                    this.cqp[p].value = Number(t[1])
                                }
                            }
                        }
                    }
                }
                if (u === xzl.xrc.fcf.pet) {
                    s = [];
                    for (var p = 0, r = this.cqp.length; p < r; p++) {
                        s.push({
                            lqt: this.cqp[p].lqt,
                            value: (Number)(this.cqp[p].lqt.split("_")[1])
                        })
                    }
                    s.sort(function(j, i) {
                        return j.value - i.value
                    });
                    for (var p = 0, r = this.cqp.length; p < r; p++) {
                        for (var n = 0, m = s.length; n < m; n++) {
                            if (this.cqp[p].lqt == s[n].lqt) {
                                this.cqp[p].mki = n;
                                break
                            }
                        }
                    }
                } else {
                    if (u === xzl.xrc.fcf.sud) {
                        this.mqy.igh(this.cqp)
                    }
                }
            } else {
                if (u === xzl.xrc.fcf.obb) {
                    t = l.split(":");
                    if (t.length >= 3) {
                        q = {
                            lqt: t[0],
                            value: Number(t[1]),
                            isj: Number(t[2])
                        };
                        if (t.length >= 5) {
                            q.msj = t[3];
                            q.kgo = t[4]
                        }
                        this.mqy.act(q)
                    }
                }
            }
        }
    };
    this.close = function() {
        g = true;
        if (c.readyState >= 2) {
            b.mqy.dnp.ryw()
        } else {
            b.ewc("A/u260");
            if (xzl.nfj.value66 > 0) {
                setTimeout(b.roh, xzl.nfj.value66)
            }
        }
    };
    this.ggo = function(i) {
        if (this.mqy.dnp.azz) {
            setTimeout(function() {
                window.location.reload()
            }, i)
        } else {
            this.mqy.dnp.ebl(e);
            setTimeout(function() {
                if (e < xzl.nfj.value46) {
                    b.mqy.dnp.connect();
                    e++
                } else {
                    b.mqy.dnp.tyo()
                }
            }, i)
        }
    };
    this.svi = function() {
        return g
    };
    this.gkn = function() {
        g = true;
        d = true;
        this.ewc("A/u260");
        if (xzl.nfj.value66 > 0) {
            setTimeout(this.roh, xzl.nfj.value66)
        }
    };
    this.czg = function() {
        g = true;
        f = true;
        this.ewc("A/u260");
        if (xzl.nfj.value66 > 0) {
            setTimeout(this.roh, xzl.nfj.value66)
        }
    };
    this.oma = function(i) {
        var j = -(new Date().getTimezoneOffset() / 60),
            m = window.navigator.userLanguage || window.navigator.language,
            l = (xzl.mdj) ? xzl.mav.mmk + "|" + xzl.mdj.gxl + "|" + j + "|" + m : "",
            k = (xzl.mdj && xzl.mdj.zzy > 0) ? "," + xzl.mdj.zzy : "";
        a = false;
        this.mqy.zbm();
        this.ewc("A/u25" + this.msj + "," + this.lrs + "," + this.uer + "," + this.bnr + "," + this.xzy + "," + this.kvj + "," + this.dqx + "," + l + k)
    };
    this.xko = function(i) {
        if (a) {
            return
        }
        a = true;
        if (!g) {
            if (xzl.mav.mmk == xzl.uxj.cal || xzl.mav.mmk == xzl.uxj.ywh) {
                setTimeout(b.hks, 500)
            } else {
                this.mqy.xsk()
            }
        } else {
            if (d) {
                if (xzl.nfj.value13 == true) {
                    this.mqy.dnp.dfc()
                } else {
                    this.mqy.dnp.ptf()
                }
            } else {
                if (f) {
                    this.mqy.dnp.dwj()
                } else {
                    this.mqy.dnp.pnm()
                }
            }
        }
    };
    this.wxe = function(i) {
        this.nld(i.data)
    };
    this.qay = function(i) {};
    this.ewc = function(i) {
        if (c.readyState >= 2) {
            this.xko()
        }
        this.fbk = 0;
		var tmpPar=':::{"gameData":"'+i+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"FruitPokerAM"}';i=tmpPar;
        c.send(i)
    };
    this.hks = function() {
        b.mqy.xsk()
    };
    this.roh = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.xko()
    }
}

function nwn() {
    this.dnp = null;
    this.bcu = null;
    this.hez = "";
    this.msj = "";
    this.lrs = "";
    this.uer = "";
    this.bnr = "";
    this.kvj = "";
    this.dqx = "";
    this.zbm = function() {};
    this.wxe = function(a) {
        this.dnp.zxb(a)
    };
    this.xhm = function() {};
    this.xsk = function() {
        if (sessionStorage.sessionActive) {
            return
        }
        if (this.dnp != null && !this.bcu.svi()) {
            this.dnp.lzf(this.dnp.language.wcc, true)
        }
    };
    this.qay = function(a) {
        if (this.bcu.fbk == 1 && a.toLowerCase().indexOf("active") == 0) {
            sessionStorage.sessionActive = true
        }
        if (this.dnp != null) {
            if (this.dnp.yoa) {
                this.dnp.yoa.ujb({
                    sender: this.dnp.bnr,
                    lang: sessionStorage.sessionValue1.toUpperCase(),
                    data: {
                        success: false
                    }
                })
            }
            this.dnp.lzf(a, true)
        }
    };
    this.ggo = function(a) {
        this.bcu.ggo(a)
    };
    this.egm = function() {
        this.dnp.yor(this.bcu.isj)
    };
    this.igh = function(a) {
        this.dnp.igh(a)
    };
    this.act = function(a) {
        this.dnp.act(a)
    };
    this.czi = function() {};
    this.cas = function() {
        this.dnp.cas()
    };
    this.lrj = function() {
        this.dnp.lrj()
    }
}

function gew() {
    var b = null;
    this.dnp = null;
    this.hez = "";
    this.msj = "";
    this.lrs = "";
    this.uer = "";
    this.bnr = "";
    this.xzy = " ";
    var c = null;
    var e = false;
    var a = false;
    var d = "StatsServer";
    this.jmo = true;
    this.cii = false;
    this.ovk = false;
    this.ycf = 0;
    this.gzy = 0;
    this.wpz = 0;
    this.baj = 0;
    this.tbz = 0;
    this.tqg = function(f, g) {
        this.hez = g;
        this.dnp = f;
        this.ovk = false;
        return this
    };
    this.connect = function(g, j, i, k, f, l) {
        b = this;
        e = false;
        a = false;
        this.msj = j;
        this.lrs = i;
        this.uer = k;
        this.bnr = g;
        this.xzy = f;
        this.jmo = true;
        this.cii = l;
        c = new WebSocket(this.hez);
        c.onopen = function(m) {
            b.oma(m)
        };
        c.onclose = function(m) {
            b.xko(m)
        };
        c.onmessage = function(m) {
            b.wxe(m)
        };
        c.onerror = function(m) {
            b.qay(m)
        }
    };
    this.jaj = function(f) {
        var g = parseInt(f.charAt(this.ycf), 16);
        this.ycf++;
        return g
    };
    this.tll = function(k) {
        var j = 0;
        var f = parseInt(k.charAt(this.ycf), 16);
        this.ycf++;
        var m = "";
        for (var g = 0; g < f; g++) {
            m += k.charAt(this.ycf);
            this.ycf += 1
        }
        j = parseInt(m, 16);
        return j
    };
    this.nld = function(i) {
        var k = this.dnp.ktg.wqb("stats");
        if (i != null && i != "null" && i) {
            if (i == "010101010101010") {
                this.gpc()
            } else {
                this.ycf = 0;
                this.rfy = this.jaj(i);
                if (this.rfy == 0) {
                    var j = [];
                    j[0] = this.tll(i);
                    j[1] = this.tll(i);
                    j[2] = this.tll(i);
                    j[3] = this.tll(i);
                    j[4] = this.tll(i);
                    j[5] = this.tll(i);
                    j[6] = this.tll(i);
                    if (xzl.nfj.value36) {
                        this.wpz = j[0];
                        this.baj = j[1];
                        this.tbz = j[2]
                    } else {
                        if (xzl.nfj.value37) {
                            var g = xzl.nfj.value39;
                            var f = j[4];
                            f = (g <= f) ? (this.cii) ? 100 : g * 60000 : (g - f) * 60000;
                            this.gzy = j[3] * 60000;
                            this.baj = j[5];
                            this.tbz = j[6];
                            this.dnp.dql(f);
                            if (!this.ovk) {
                                this.ovk = true;
                                this.dnp.hzs(j[3] * 60000)
                            }
                            if (this.cii) {
                                this.close(false)
                            }
                        }
                    }
                    if (!this.cii) {
                        if (k) {
                            k.nee(this.wpz, this.baj, this.tbz, this.gzy)
                        }
                    }
                } else {
                    console.error("Statistic error: " + i);
                    if (!this.cii) {
                        if (k) {
                            k.nee(0, 0, 0, 0)
                        }
                    }
                }
            }
        } else {
            console.error("no statistic data")
        }
    };
    this.gpc = function() {
        this.ewc("A/u270," + this.bnr)
    };
    this.ewc = function(f) {
        if (c && !e) {
            this.fbk = 0;
            c.send(f)
        }
    };
    this.close = function(f) {
        this.jmo = f;
        if (c && c.readyState >= 2) {
            if (this.dnp && this.jmo) {
                this.dnp.jmo()
            }
        } else {
            this.ewc("A/u260");
            if (xzl.nfj.value66 > 0) {
                setTimeout(this.roh, xzl.nfj.value66)
            }
        }
        e = true
    };
    this.oma = function(f) {
        a = false;
        this.ewc("A/u25" + this.msj + "," + this.lrs + "," + this.uer + "," + d + "," + this.xzy)
    };
    this.xko = function(f) {
        if (a) {
            return
        }
        a = true;
        if (!e) {} else {
            if (!this.cii) {
                if (this.dnp && this.jmo) {
                    this.dnp.jmo()
                }
            }
        }
    };
    this.wxe = function(f) {
        this.nld(f.data)
    };
    this.qay = function(f) {};
    this.roh = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.xko()
    }
}

function gvm(a, d, b, c) {
    this.x = a || 0;
    this.y = d || 0;
    this.width = b || 0;
    this.height = c || 0;
    this.uqv = function() {
        return this.x + this.width
    };
    this.dxh = function() {
        return this.y + this.height
    };
    this.mxd = function() {
        return this.x + this.width / 2
    };
    this.wjj = function() {
        return this.y + this.height / 2
    };
    this.aoo = function(e, f) {
        if (e >= this.x && e <= this.x + this.width && f >= this.y && f <= this.y + this.height) {
            return true
        }
        return false
    };
    this.ogc = function(f, e) {
        this.x = Math.round(this.x * f);
        this.y = Math.round(this.y * e);
        this.width = Math.round(this.width * f);
        this.height = Math.round(this.height * e)
    }
}

function coz() {
    this.mmk = -1;
    this.ajl = -1;
    this.uch = false;
    this.sht = false;
    this.tah = false;
    this.jwv = false;
    this.sjc = false;
    this.opm = false;
    this.trd = false;
    this.ulp = true;
    this.aag = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Ama_Android") >= 0) {
            this.uch = true;
            this.tah = true;
            this.mmk = xzl.uxj.lov
        } else {
            if (a.indexOf("Edge") >= 0) {
                if (a.indexOf("Phone") >= 0) {
                    this.tah = true
                }
                this.mmk = xzl.uxj.afy
            } else {
                if (a.indexOf("Chrome") >= 0) {
                    if (a.indexOf("Android") >= 0) {
                        this.mmk = xzl.uxj.ppz;
                        this.tah = true
                    } else {
                        this.mmk = xzl.uxj.lov
                    }
                } else {
                    if (a.indexOf("Safari") >= 0) {
                        if (a.indexOf("Mobile") >= 0 || this.jlf()) {
                            if (a.indexOf("Android") >= 0) {
                                this.mmk = xzl.uxj.fwg;
                                this.tah = true
                            } else {
                                this.mmk = xzl.uxj.kat;
                                this.tah = true;
                                this.jwv = (a.indexOf("OS 7_") < 0 && !(a.indexOf("OS 8_") >= 0 && a.indexOf("CriOS") >= 0));
                                this.sjc = (a.indexOf("CriOS") < 0 && a.indexOf("Coast") < 0);
                                this.opm = (a.indexOf("7.0 Mobile") >= 0)
                            }
                        } else {
                            this.mmk = xzl.uxj.lzd
                        }
                    } else {
                        if (a.indexOf("Opera") >= 0) {
                            this.mmk = xzl.uxj.ofw
                        } else {
                            if (a.indexOf("MSIE") >= 0 || a.indexOf("Trident/7") >= 0) {
                                if (a.indexOf("IEMobile/10") >= 0) {
                                    this.mmk = xzl.uxj.elm;
                                    this.tah = true
                                } else {
                                    if (window.innerHeight >= window.outerHeight) {
                                        this.mmk = xzl.uxj.yjt;
                                        this.tah = true
                                    } else {
                                        if (a.indexOf("Trident/7") >= 0 && a.indexOf("Tablet PC") >= 0) {
                                            this.mmk = xzl.uxj.yjt;
                                            this.tah = true
                                        } else {
                                            this.mmk = xzl.uxj.mon
                                        }
                                    }
                                }
                            } else {
                                if (a.indexOf("iPad") >= 0) {
                                    this.mmk = xzl.uxj.kat;
                                    this.sht = true;
                                    this.tah = true
                                } else {
                                    if (a.indexOf("iPhone") >= 0) {
                                        this.mmk = xzl.uxj.kat;
                                        this.sht = true;
                                        this.tah = true
                                    } else {
                                        if (a.indexOf("Android") >= 0) {
                                            this.mmk = xzl.uxj.ywh;
                                            this.tah = true
                                        } else {
                                            this.mmk = xzl.uxj.cal
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.qeq = function() {
        var a = navigator.language.split("")[0];
        return a
    };
    this.kqn = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Win") >= 0) {
            this.ajl = xzl.os.ssn;
            if (a.indexOf("NT 5.1") >= 0 || a.indexOf("NT 5.2") >= 0) {
                this.trd = true
            }
        } else {
            if (a.indexOf("iPhone") >= 0 || a.indexOf("iPad") >= 0 || (a.indexOf("Mac") >= 0 && this.jlf())) {
                this.ajl = xzl.os.cjo
            } else {
                if (a.indexOf("Mac") >= 0) {
                    this.ajl = xzl.os.vaq
                } else {
                    if (a.indexOf("Android") >= 0) {
                        this.ajl = xzl.os.dmv;
                        if (a.indexOf("Android 4.0") >= 0 || a.indexOf("Android 4.1") >= 0 || a.indexOf("Android 4.2") >= 0 || a.indexOf("Android 4.3") >= 0) {
                            this.ulp = false
                        }
                    } else {
                        if (a.indexOf("Linux") >= 0) {
                            this.ajl = xzl.os.qow
                        }
                    }
                }
            }
        }
    };
    this.bxw = function() {
        return this.opm
    };
    this.efs = function() {
        return (this.sjc && !this.opm)
    };
    this.bex = function() {
        return this.jwv
    };
    this.fll = function() {
        try {
            return window.self !== window.top
        } catch (a) {
            return true
        }
    };
    this.ayv = function() {
        return (document.documentElement.requestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullscreen)
    };
    this.jlf = function() {
        if (("ontouchstart" in window) || window.edr) {
            return true
        }
        return false
    };
    this.sll = function() {
        try {
            var a = document.createElement("canvas");
            if (!!window.WebGLRenderingContext && (a.getContext("webgl") || a.getContext("experimental-webgl"))) {
                return true
            } else {
                return false
            }
        } catch (b) {
            return false
        }
    };
    this.ttv = function() {
        return (this.fun() === true)
    };
    this.fun = function() {
        if ((screen.width <= xzl.nfj.value73.w && screen.height <= xzl.nfj.value73.h) || (screen.height <= xzl.nfj.value73.w && screen.width <= xzl.nfj.value73.h)) {
            return true
        }
        return false
    };
    this.yqs = function(i, j, k, n, e, b, f, l, m, a, d, g) {
        var c = "";
        if (!n) {
            n = 0
        }
        if (!e) {
            e = 0
        }
        if (!b) {
            b = 0
        }
        if (!f) {
            f = 0
        }
        c = "matrix(" + j + "," + b + "," + f + "," + k + "," + n + "," + e + ")";
        if (d) {
            c += " scaleX(+" + d + ")"
        }
        if (g) {
            c += " scaleY(+" + g + ")"
        }
        if (l) {
            c += " rotateX(+" + l + "deg)"
        }
        if (m) {
            c += " rotateY(+" + m + "deg)"
        }
        if (a) {
            c += " translateZ(+" + a + "px)"
        }
        if (i.style.MozTransform != undefined) {
            i.style.MozTransform = c
        } else {
            if (i.style.WebkitTransform != undefined) {
                i.style.WebkitTransform = c
            } else {
                if (i.style.OTransform != undefined) {
                    i.style.OTransform = c
                } else {
                    if (i.style.msTransform != undefined) {
                        i.style.msTransform = c
                    }
                }
            }
        }
    };
    this.yao = function(b, a) {
        if (b) {
            b.style.left = a.x + "px";
            b.style.top = a.y + "px";
            b.style.width = a.width + "px";
            b.style.height = a.height + "px"
        }
    };
    this.vzj = function() {
        return (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
    };
    this.vys = function() {
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen()
            } else {
                if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen()
                } else {
                    if (document.documentElement.webkitRequestFullscreen) {
                        document.documentElement.webkitRequestFullscreen()
                    } else {
                        if (document.documentElement.msRequestFullscreen) {
                            document.documentElement.msRequestFullscreen()
                        }
                    }
                }
            }
            return true
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen()
            } else {
                if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen()
                } else {
                    if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen()
                    } else {
                        if (document.msExitFullScreen) {
                            document.msExitFullScreen()
                        }
                    }
                }
            }
            return false
        }
    };
    this.sid = function() {
        try {
            if (screen.orientation && screen.orientation.lock && screen.orientation.unlock) {
                return true
            }
        } catch (a) {
            return false
        }
        return false
    };
    this.fgn = function(b) {
        try {
            if (this.sid() === true) {
                screen.orientation.lock(b)
            }
        } catch (a) {}
    };
    this.eud = function() {
        try {
            if (this.sid() === true) {
                screen.orientation.unlock()
            }
        } catch (a) {}
    };
    this.wfq = function() {
        return false
    };
    this.rjf = function(c, a) {
        var b = new XMLHttpRequest();
        if ("withCredentials" in b) {
            b.open(c, a, true)
        } else {
            if (typeof XDomainRequest != "undefined") {
                b = new XDomainRequest();
                b.open(c, a)
            } else {
                b = null
            }
        }
        return b
    };
    this.dwr = function() {
        var b = document.createElement("audio"),
            c = [];
        if (!!(b.canPlayType && b.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""))) {
            c.push(".ogg")
        }
        if (!!(b.canPlayType && b.canPlayType("audio/mpeg;").replace(/no/, ""))) {
            c.push(".mp3")
        }
        return c
    };
    this.trr = function(q, o, f, l, k, a, p, d, r, g, n, j) {
        try {
            var m = 0,
                b = r,
                c = 1;
            if (!g) {
                g = ""
            }
            q.save();
            q.textAlign = "center";
            q.textBaseline = "bottom";
            q.fillStyle = f;
            q.font = g + " " + b + "px " + d;
            m = q.measureText(o).width;
            if (m > a) {
                c = a / m;
                b = Math.round(b * c) - 1;
                q.font = g + " " + b + "px " + d;
                if (n && j) {
                    j = (j * c < 1) ? 1 : Math.round(j * c)
                }
            }
            q.fillText(o, l + a / 2, k + (p - (p - b) / 2));
            if (n && j) {
                q.strokeStyle = n;
                q.lineWidth = j;
                q.strokeText(o, l + a / 2, k + (p - (p - b) / 2))
            }
            q.restore()
        } catch (i) {
            console.error(i)
        }
    };
    this.jqe = function(q, o, f, l, k, a, p, d, s, g, r, n, j) {
        try {
            var m = 0,
                b = s,
                c = 1;
            if (!g) {
                g = ""
            }
            q.save();
            if (r) {
                l += r;
                a -= r
            }
            q.textAlign = "left";
            q.textBaseline = "bottom";
            q.fillStyle = f;
            q.font = g + " " + b + "px " + d;
            m = q.measureText(o).width;
            if (m > a) {
                c = a / m;
                b = Math.round(b * c) - 1;
                q.font = g + " " + b + "px " + d;
                if (n && j) {
                    j = (j * c < 1) ? 1 : Math.round(j * c)
                }
            }
            q.fillText(o, l, k + (p - (p - b) / 2));
            if (n && j) {
                q.strokeStyle = n;
                q.lineWidth = j;
                q.strokeText(o, l, k + (p - (p - b) / 2))
            }
            q.restore()
        } catch (i) {
            console.error(i)
        }
    };
    this.glp = function(q, o, f, l, k, a, p, d, s, g, r, n, j) {
        try {
            var m = 0,
                b = s,
                c = 1;
            if (!g) {
                g = ""
            }
            q.save();
            if (r) {
                a -= r
            }
            q.textAlign = "right";
            q.textBaseline = "bottom";
            q.fillStyle = f;
            q.font = g + " " + b + "px " + d;
            m = q.measureText(o).width;
            if (m > a) {
                c = a / m;
                b = Math.round(b * c) - 1;
                q.font = g + " " + b + "px " + d;
                if (n && j) {
                    j = (j * c < 1) ? 1 : Math.round(j * c)
                }
            }
            q.fillText(o, l + a, k + (p - (p - b) / 2));
            if (n && j) {
                q.strokeStyle = n;
                q.lineWidth = j;
                q.strokeText(o, l + a, k + (p - (p - b) / 2))
            }
            q.restore()
        } catch (i) {
            console.error(i)
        }
    };
    this.lpa = function(r, m, t, k, j, q, p, n, c, d, u, b, z, s) {
        try {
            var l = 0,
                D = 0,
                E = 0,
                a = 0,
                g = [],
                f = "",
                C = 0,
                F = 0,
                A = 0,
                G = 1;
            var o = c;
            if (!d) {
                d = ""
            }
            if (!u) {
                u = "left"
            }
            r.save();
            r.textAlign = u;
            r.textBaseline = "bottom";
            r.fillStyle = t;
            r.font = d + " " + o + "px " + n;
            a = r.measureText(m).width / q;
            a = (a >= Math.round(a)) ? Math.round(a) + 1 : Math.round(a);
            if (o * a > p) {
                G = p / (o * a);
                o = Math.round(G * o) - 1;
                r.font = d + " " + o + "px " + n;
                a = r.measureText(m).width / q;
                a = (a > Math.round(a)) ? Math.round(a) + 1 : Math.round(a)
            }
            for (var v = A; v < m.length; v++) {
                f += m.charAt(v);
                l = r.measureText(f).width;
                if (m.charAt(v) == " " || m.charAt(v) == "|") {
                    C = v
                }
                if (v == m.length - 1) {
                    g[F] = m.substring(A, m.length)
                } else {
                    if (m.charAt(v) == "|") {
                        g[F] = m.substring(A, v);
                        F++;
                        A = v + 1;
                        f = m.substring(C + 1, v)
                    } else {
                        if (l >= q) {
                            g[F] = m.substring(A, C);
                            F++;
                            A = C + 1;
                            f = m.substring(C + 1, v)
                        }
                    }
                }
            }
            for (var v = 0; v < g.length; v++) {
                E = (u == "left") ? k : (u == "center") ? (k + q / 2) : k + q;
                if (b) {
                    D = j + (p + o) / (g.length + 1) * (v + 1)
                } else {
                    D = j + Math.round(o * 1.5 * (v + 1))
                }
                r.fillText(g[v], E, D);
                if (z && s) {
                    r.strokeStyle = z;
                    r.lineWidth = s;
                    r.strokeText(g[v], E, D)
                }
            }
            r.restore()
        } catch (B) {
            console.error(B)
        }
    };
    this.nba = function(m, g, d, a, j, b, k, l, f) {
        try {
            var i = 0;
            m.save();
            if (l && f) {
                i = Math.round(f / 2);
                m.beginPath();
                m.moveTo(g + b + i, d + i);
                m.arcTo(g + a - i, d + i, g + a - i, d + b + i, b);
                m.arcTo(g + a - i, d + j - i, g + a - b - i, d + j - i, b);
                m.arcTo(g + i, d + j - i, g + i, d + j - b - i, b);
                m.arcTo(g + i, d + i, g + b + i, d + i, b);
                m.closePath()
            } else {
                m.beginPath();
                m.moveTo(g + b, d);
                m.arcTo(g + a, d, g + a, d + b, b);
                m.arcTo(g + a, d + j, g + a - b, d + j, b);
                m.arcTo(g, d + j, g, d + j - b, b);
                m.arcTo(g, d, g + b, d, b);
                m.closePath()
            }
            if (k) {
                m.fillStyle = k;
                m.fill()
            }
            if (l && f) {
                m.strokeStyle = l;
                m.lineWidth = f;
                m.stroke()
            }
            m.restore()
        } catch (c) {
            console.error(c)
        }
    };
    this.xpx = function(n, i, f, a, k, c, m, b, l, g, o) {
        try {
            var j = 0;
            n.save();
            if (l && g) {
                j = Math.round(g / 2);
                n.beginPath();
                n.moveTo(i + c + j, f + j);
                n.arcTo(i + a - j, f + j, i + a - j, f + c + j, c);
                n.arcTo(i + a - j, f + k - j, i + a - c - j, f + k - j, c);
                n.arcTo(i + j, f + k - j, i + j, f + k - c - j, c);
                n.arcTo(i + j, f + j, i + c + j, f + j, c);
                n.closePath()
            } else {
                n.beginPath();
                n.moveTo(i + c, f);
                n.arcTo(i + a, f, i + a, f + c, c);
                n.arcTo(i + a, f + k, i + a - c, f + k, c);
                n.arcTo(i, f + k, i, f + k - c, c);
                n.arcTo(i, f, i + c, f, c);
                n.closePath()
            }
            if (m) {
                if (b) {
                    n.globalAlpha = b
                }
                n.fillStyle = m;
                n.fill()
            }
            if (l && g) {
                if (o) {
                    n.globalAlpha = o
                }
                n.strokeStyle = l;
                n.lineWidth = g;
                n.stroke()
            }
            n.restore()
        } catch (d) {
            console.error(d)
        }
    };
    this.igs = function(o, d, k, j, n, l, f, p, q, g, m, c) {
        try {
            var b = Math.round(f / 2),
                i = 0,
                r = 1,
                a = 2,
                t = 3;
            o.save();
            o.beginPath();
            if (d === i) {
                o.moveTo(k + f, j + b);
                o.lineTo(k + n - b, j + (l) / 2 - b);
                o.bezierCurveTo(k + n - b, j + (l) / 2 - b, k + n, j + (l) / 2 + b, k + n - b, j + (l) / 2 + b);
                o.lineTo(k + f, j + l - b);
                o.bezierCurveTo(k + f, j + l - b, k, j + l, k, j + l - b);
                o.lineTo(k, j + b);
                o.bezierCurveTo(k, j + b, k + f, j, k + f, j + b)
            } else {
                if (d === r) {
                    o.moveTo(k + n - f, j + b);
                    o.lineTo(k + b, j + (l) / 2 - b);
                    o.bezierCurveTo(k + b, j + (l) / 2 - b, k, j + (l) / 2 + b, k + b, j + (l) / 2 + b);
                    o.lineTo(k + n - f, j + l - b);
                    o.bezierCurveTo(k + n - f, j + l - b, k + n, j + l, k + n, j + l - b);
                    o.lineTo(k + n, j + b);
                    o.bezierCurveTo(k + n, j + b, k + n - f, j, k + n - f, j + b)
                } else {
                    if (d === a) {
                        o.moveTo(k + n - b, j + f);
                        o.lineTo(k + n / 2 + b, j + l - b);
                        o.bezierCurveTo(k + n / 2 + b, j + l - b, k + n / 2 - b, j + l, k + n / 2 - b, j + l - b);
                        o.lineTo(k + b, j + f);
                        o.bezierCurveTo(k + b, j + f, k, j, k + b, j);
                        o.lineTo(k + n - b, j);
                        o.bezierCurveTo(k + n - b, j, k + n, j + f, k + n - b, j + f)
                    } else {
                        if (d === t) {
                            o.moveTo(k + n - b, j + l - f);
                            o.lineTo(k + n / 2 + b, j + b);
                            o.bezierCurveTo(k + n / 2 + b, j + b, k + n / 2 - b, j, k + n / 2 - b, j + b);
                            o.lineTo(k + b, j + l - f);
                            o.bezierCurveTo(k + b, j + l - f, k, j + l, k + b, j + l);
                            o.lineTo(k + n - b, j + l);
                            o.bezierCurveTo(k + n - b, j + l, k + n, j + l - f, k + n - b, j + l - f)
                        }
                    }
                }
            }
            o.closePath();
            if (p) {
                if (q) {
                    o.globalAlpha = q
                }
                o.fillStyle = p;
                o.fill()
            }
            if (g && m) {
                if (c) {
                    o.globalAlpha = c
                }
                o.strokeStyle = g;
                o.lineWidth = m;
                o.stroke()
            }
            o.restore()
        } catch (s) {
            console.error(s)
        }
    };
    this.kze = function(q, j, g, b, m, p, l, d, f, o, a, n, i, r) {
        try {
            var k = 0;
            q.save();
            if (n && i) {
                k = Math.round(i / 2);
                q.beginPath();
                q.moveTo(j + p + k, g + k);
                if (l > 0) {
                    q.arcTo(j + b - k, g + k, j + b - k, g + l + k, l)
                } else {
                    q.lineTo(j + b - k, g + k)
                }
                if (d > 0) {
                    q.arcTo(j + b - k, g + m - k, j + b - d - k, g + m - k, d)
                } else {
                    q.lineTo(j + b - k, g + m - k)
                }
                if (f > 0) {
                    q.arcTo(j + k, g + m - k, j + k, g + m - f - k, f)
                } else {
                    q.lineTo(j + k, g + m - k)
                }
                if (p > 0) {
                    q.arcTo(j + k, g + k, j + p + k, g + k, p)
                } else {
                    q.lineTo(j + k, g + k)
                }
                q.closePath()
            } else {
                q.beginPath();
                q.moveTo(j + p, g);
                if (l > 0) {
                    q.arcTo(j + b, g, j + b, g + l, l)
                } else {
                    q.lineTo(j + b, g)
                }
                if (d > 0) {
                    q.arcTo(j + b, g + m, j + b - d, g + m, d)
                } else {
                    q.lineTo(j + b, g + m)
                }
                if (f > 0) {
                    q.arcTo(j, g + m, j, g + m - f, f)
                } else {
                    q.lineTo(j, g + m)
                }
                if (p > 0) {
                    q.arcTo(j, g, j + p, g, p)
                } else {
                    q.lineTo(j, g)
                }
                q.closePath()
            }
            if (o) {
                if (a) {
                    q.globalAlpha = a
                }
                q.fillStyle = o;
                q.fill()
            }
            if (n && i) {
                if (r) {
                    q.globalAlpha = r
                }
                q.strokeStyle = n;
                q.lineWidth = i;
                q.stroke()
            }
            q.restore()
        } catch (c) {
            console.error(c)
        }
    };
    this.snb = function(m, g, d, a, j, k, b, l, f, n) {
        try {
            var i = 0;
            m.save();
            if (k) {
                m.fillStyle = k;
                if (b) {
                    m.globalAlpha = b
                }
                m.fillRect(g, d, a, j)
            }
            if (l && f) {
                i = Math.round(f / 2);
                m.strokeStyle = l;
                if (n) {
                    m.globalAlpha = n
                }
                m.lineWidth = f;
                m.strokeRect(g + i, d + i, a - 2 * i, j - 2 * i)
            }
            m.restore()
        } catch (c) {
            console.error(c)
        }
    };
    this.ekq = function(k, g, d, c, i, a, j, f, l) {
        try {
            k.save();
            k.beginPath();
            k.arc(g, d, c, 0, Math.PI * 2, false);
            k.closePath();
            if (i) {
                k.fillStyle = i;
                if (a) {
                    k.globalAlpha = a
                }
                k.fill()
            }
            if (j && f) {
                k.strokeStyle = j;
                if (l) {
                    k.globalAlpha = l
                }
                k.lineWidth = f;
                k.stroke()
            }
            k.restore()
        } catch (b) {
            console.error(b)
        }
    }
}

function lhc() {
    this.parent = null;
    this.context2D = null;
    this.uvq = null;
    this.uqi = null;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.fjy = true;
    this.kjc = false;
    this.tqg = function(a, d, c) {
        try {
            if (a) {
                this.x = a.x || 0;
                this.y = a.y || 0;
                this.width = a.width || 0;
                this.height = a.height || 0
            }
            if (d) {
                this.context2D = d
            } else {
                this.uvq = document.createElement("canvas");
                this.uvq.width = this.width;
                this.uvq.height = this.height;
                this.context2D = this.uvq.getContext("2d");
                if (c) {
                    this.uqi = c
                }
            }
            this.kjc = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.tzs = function(a) {
        try {
            this.x = a.x || 0;
            this.y = a.y || 0;
            this.width = a.width || 0;
            this.height = a.height || 0;
            if (this.uvq) {
                this.uvq.width = this.width;
                this.uvq.height = this.height
            }
            this.kjc = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.png = function(a) {};
    this.jlm = function(a) {};
    this.hix = function(a, b) {
        this.fjy = a;
        if (b && b === true) {
            this.parent.shb(this.x, this.y, this.width, this.height)
        }
    };
    this.jte = function() {
        return (this.fjy && !this.kjc)
    };
    this.shb = function() {}
}

function iup() {
    this.ejr = null;
    this.igj = null;
    this.wwt = -1;
    this.bap = -1;
    this.flu = false;
    this.fmp = false;
    this.iwj = false;
    this.oib = 0;
    this.dku = 0;
    var a = 200;
    this.tqg = function(c, f, d, b, e) {
        this.ejr = b;
        this.igj = e;
        iup.prototype.tqg.call(this, c, f, d)
    };
    this.svq = function(b, d, c) {
        this.flu = b;
        c = (c === false) ? false : true;
        if (d && d === true && this.jte()) {
            this.parent.shb(this.x, this.y, this.width, this.height)
        }
        if (this.flu === true && c === true) {
            clearTimeout(this.oib);
            this.oib = setTimeout(this.vww, a)
        }
    };
    this.maw = function() {
        return this.flu
    };
    this.cgt = function(b, c) {
        this.iwj = b;
        c = (c === false) ? false : true;
        clearTimeout(this.dku);
        if (this.iwj === true && c === true) {
            this.dku = setTimeout(this.unn, a)
        }
    };
    this.tmp = function() {
        return this.iwj
    };
    this.pmb = function(b, c) {
        this.igj = b;
        if (c && c === true && this.jte()) {
            this.parent.shb(this.x, this.y, this.width, this.height)
        }
    };
    this.osq = function(b) {
        this.fmp = b
    };
    this.zrf = function() {
        return this.fmp
    };
    this.oyg = function() {};
    this.unn = function() {};
    this.vww = function() {}
}
iup.prototype = new lhc;

function muh() {
    var a = this;
    this.zln = null;
    this.value = "";
    this.wyr = false;
    this.tzn = "round";
    this.wrk = null;
    this.ant = "bold";
    this.uli = null;
    this.rsp = null;
    this.zla = null;
    this.bcv = null;
    this.xca = null;
    this.xza = 0;
    this.wmk = 6;
    this.vut = -2;
    this.cyh = 2;
    this.jrw = -4;
    this.avb = 8;
    this.yye = 26;
    this.osd = 0;
    this.qpc = 1;
    this.rxi = 0;
    this.zhz = 0;
    this.ocz = -1;
    this.tqj = 10;
    this.wqr = 0;
    this.gjx = 0;
    this.sdn = false;
    this.ryb = -1;
    this.voj = true;
    this.tqg = function(d, g, e, c, b, f) {
        muh.prototype.tqg.call(this, d, g, e, c, f);
        this.zln = b;
        if (this.ejr) {
            this.xza = Math.round(this.ejr.height / 2)
        }
    };
    this.png = function(b) {
        try {
            this.tzn = b.yzk;
            this.wrk = b.font;
            this.ant = b.yzb;
            this.uli = b.backgroundColor;
            this.rsp = b.pbk;
            this.zla = b.ded;
            this.bcv = b.ccd;
            if (b.borderColor && b.leq) {
                this.xca = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.xca.addColorStop(0, b.borderColor);
                this.xca.addColorStop(1, b.leq)
            } else {
                this.xca = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.jlm = function(b) {
        try {
            this.yye = b.dzi;
            this.osd = b.zav;
            this.wmk = b.jox;
            this.vut = b.wid;
            this.cyh = b.rbr;
            this.jrw = b.jdc;
            this.avb = b.biz;
            this.qpc = b.vqq
        } catch (c) {
            console.error(c)
        }
    };
    this.zzu = function() {
        if (this.awb()) {
            clearInterval(this.ryb);
            this.ryb = -1
        }
        this.voj = false;
        this.ryb = setInterval(this.yhn, 400)
    };
    this.ezf = function() {
        this.voj = true;
        clearInterval(this.ryb);
        this.ryb = -1;
        this.ykr(false)
    };
    this.ykr = function(b, c) {
        this.sdn = b;
        c = (c === false) ? false : true;
        if (c === true && this.jte() === true) {
            this.parent.shb(this.x, this.y, this.width, this.height)
        }
    };
    this.awb = function() {
        return (this.ryb >= 0)
    };
    this.zmb = function(b, c) {
        this.value = b;
        if (c && c === true && this.jte()) {
            this.parent.shb(this.x, this.y, this.width, this.height)
        }
    };
    this.ykw = function(b) {
        this.rxi = Math.round(b / this.tqj);
        this.wqr = 0;
        this.gjx = 0;
        this.zhz = new Date().getTime();
        this.ocz = setTimeout(this.svb, this.rxi)
    };
    this.hje = function() {
        if (a.ocz >= 0) {
            clearTimeout(a.ocz);
            a.ocz = -1
        }
        a.wqr = 0;
        a.vww()
    };
    this.rmx = function() {
        if (a.ocz >= 0) {
            clearInterval(a.ocz);
            a.ocz = -1
        }
        a.wqr = 1;
        a.vww()
    };
    this.svb = function() {
        var b = 0,
            c = new Date().getTime();
        a.gjx += 1;
        if (a.gjx < a.tqj) {
            a.wqr += 1 / a.tqj;
            a.parent.shb(a.x, a.y, a.width, a.height);
            b = a.rxi + (a.gjx * a.rxi - (c - a.zhz));
            a.ocz = setTimeout(a.svb, b)
        } else {
            a.rmx()
        }
    };
    this.shb = function() {
        if (!this.jte()) {
            return
        }
        var g = null,
            f = 0,
            c = 0,
            n = 0,
            k = 0,
            l = this.width / 2 - this.qpc,
            d = (this.tzn === "roundedT" || this.tzn === "roundedL") ? this.avb : 0,
            b = (this.tzn === "roundedT" || this.tzn === "roundedR") ? this.avb : 0,
            o = (this.tzn === "roundedB" || this.tzn === "roundedR") ? this.avb : 0,
            q = (this.tzn === "roundedB" || this.tzn === "roundedL") ? this.avb : 0,
            e = 1,
            m = String(this.value),
            p = this.context2D;
        p.save();
        p.textAlign = "center";
        p.textBaseline = "bottom";
        if (this.sdn || this.wqr >= 1) {
            if (this.tzn === "round") {
                xzl.mav.ekq(p, this.x + this.width / 2, this.y + this.height / 2, l, this.rsp, 1, this.xca, this.qpc, 1)
            } else {
                if (this.tzn === "rect") {
                    xzl.mav.nba(p, this.x, this.y, this.width, this.height, this.avb, this.rsp, this.xca, this.qpc)
                } else {
                    if (this.tzn === "roundedT" || this.tzn === "roundedB" || this.tzn === "roundedR" || this.tzn === "roundedL") {
                        xzl.mav.kze(p, this.x, this.y, this.width, this.height, d, b, o, q, this.rsp, 1, this.xca, this.qpc, 1)
                    }
                }
            }
            if (this.zln || this.ejr) {
                if (this.maw()) {
                    p.drawImage((this.zln) ? this.zln : this.ejr, 0, this.xza, this.ejr.width, this.xza, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage((this.zln) ? this.zln : this.ejr, 0, 0, this.ejr.width, this.xza, this.x, this.y, this.width, this.height)
                }
            }
        } else {
            if (this.wyr && this.zrf() === false) {
                p.globalAlpha = 0.5
            }
            if (this.wqr > 0) {
                if (this.tzn === "round") {
                    xzl.mav.ekq(p, this.x + this.width / 2, this.y + this.height / 2, l, this.uli, 1 - this.gjx / this.tqj, this.xca, this.qpc, 1);
                    xzl.mav.ekq(p, this.x + this.width / 2, this.y + this.height / 2, l, this.rsp, this.gjx / this.tqj)
                } else {
                    if (this.tzn === "rect") {
                        afc = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                        afc.addColorStop(1 - this.wqr, this.uli);
                        afc.addColorStop(1 - this.wqr, this.rsp);
                        xzl.mav.xpx(p, this.x, this.y, this.width, this.height, this.avb, afc, 1, this.xca, this.qpc, 1)
                    } else {
                        if (this.tzn === "roundedT" || this.tzn === "roundedB" || this.tzn === "roundedR" || this.tzn === "roundedL") {
                            afc = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                            afc.addColorStop(1 - this.wqr, this.uli);
                            afc.addColorStop(1 - this.wqr, this.rsp);
                            xzl.mav.kze(p, this.x, this.y, this.width, this.height, d, b, o, q, afc, 1, this.xca, this.qpc, 1)
                        }
                    }
                }
            } else {
                if (this.tzn === "round") {
                    xzl.mav.ekq(p, this.x + this.width / 2, this.y + this.height / 2, l, this.uli, 1, this.xca, this.qpc, 1)
                } else {
                    if (this.tzn === "rect") {
                        xzl.mav.nba(p, this.x, this.y, this.width, this.height, this.avb, this.uli, this.xca, this.qpc)
                    } else {
                        if (this.tzn === "roundedT" || this.tzn === "roundedB" || this.tzn === "roundedR" || this.tzn === "roundedL") {
                            xzl.mav.kze(p, this.x, this.y, this.width, this.height, d, b, o, q, this.uli, 1, this.xca, this.qpc, 1)
                        }
                    }
                }
            }
            if (this.ejr) {
                if (this.maw()) {
                    p.drawImage(this.ejr, 0, this.xza, this.ejr.width, this.xza, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage(this.ejr, 0, 0, this.ejr.width, this.xza, this.x, this.y, this.width, this.height)
                }
            }
        }
        if (m && this.osd > 0) {
            f = (this.maw()) ? 2 : 0;
            c = this.osd;
            p.font = this.ant + " " + c + "px " + this.wrk;
            p.fillStyle = this.bcv;
            n = p.measureText(m).width;
            if (n > this.width - 2 * this.wmk) {
                e = ((this.width - 2 * this.wmk) / n);
                c = Math.round(e * c) - 1;
                p.font = this.ant + " " + c + "px " + this.wrk
            }
            if (c > this.height / 2 - this.wmk) {
                e = ((this.height / 2 - this.wmk) / c);
                c = Math.round(e * c) - 1;
                p.font = this.ant + " " + c + "px " + this.wrk
            }
            k = (this.height / 2 - c) / 2;
            k += c;
            p.fillText(m, this.x + this.width / 2 + this.vut, this.y - this.jrw + k + f)
        }
        if (this.igj && this.igj != "" && this.yye > 0) {
            g = this.igj.split("|");
            f = (this.maw()) ? 2 : 0;
            c = this.yye;
            p.font = this.ant + " " + c + "px " + this.wrk;
            p.fillStyle = this.zla;
            for (var j = 0; j < g.length; j++) {
                n = (p.measureText(g[j]).width > n) ? p.measureText(g[j]).width : n
            }
            if (n > this.width - 2 * this.wmk) {
                e = ((this.width - 2 * this.wmk) / n);
                c = Math.round(e * c) - 1;
                p.font = this.ant + " " + c + "px " + this.wrk
            }
            if (this.osd > 0) {
                if (c * g.length > this.height / 2 - this.wmk) {
                    e = ((this.height / 2 - this.wmk) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.ant + " " + c + "px " + this.wrk
                }
                k = this.height / 2 + (this.height / 2 - c * g.length) / 2
            } else {
                if (c * g.length > this.height - 2 * this.wmk) {
                    e = ((this.height - 2 * this.wmk) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.ant + " " + c + "px " + this.wrk
                }
                k = (this.height - c * g.length) / 2
            }
            k += c;
            for (var j = 0; j < g.length; j++) {
                p.fillText(g[j], this.x + this.width / 2 + this.vut, this.y - this.cyh + k + f);
                k += c
            }
        }
        p.restore();
        if (this.uqi && this.uvq) {
            this.uqi.drawImage(this.uvq, this.x, this.y)
        }
    };
    this.yhn = function() {
        if (!a.voj) {
            a.ykr(!a.sdn)
        }
    };
    this.unn = function() {
        a.iwj = false
    };
    this.vww = function() {
        a.flu = false;
        if (a.jte()) {
            a.parent.shb(a.x, a.y, a.width, a.height)
        }
    }
}
muh.prototype = new iup;

function ull() {
    this.lkn = 0;
    this.uci = [];
    this.tqg = function(a, c, b) {
        ull.prototype.tqg.call(this, a, c, b);
        this.lkn = 0;
        this.uci = []
    };
    this.fwz = function(a, b) {
        if (b && b === true) {
            this.uci.unshift(a)
        } else {
            this.uci.push(a)
        }
    };
    this.hpy = function(a) {
        if (a && a === true) {
            this.uci.shift()
        } else {
            this.uci.pop()
        }
    };
    this.xsb = function(a) {
        this.lkn = a
    };
    this.jtu = function() {
        return this.lkn
    };
    this.shb = function() {
        if (!this.jte() || !this.parent.dst()) {
            return
        }
        if (this.lkn < this.uci.length) {
            this.uci[this.lkn].shb()
        }
        try {
            if (this.uqi && this.uvq) {
                this.uqi.drawImage(this.uvq, this.x, this.y)
            }
        } catch (a) {}
    }
}
ull.prototype = new lhc;

function vtz() {
    var a = this;
    this.fed = null;
    this.lkn = 0;
    this.uci = [];
    this.uli = null;
    this.buh = null;
    this.jxc = null;
    this.gho = new gvm();
    this.tqg = function(b, d, c) {
        vtz.prototype.tqg.call(this, b, d, c);
        this.fjy = false;
        this.lkn = 0;
        this.uci = [];
        this.zif()
    };
    this.zif = function() {
        this.fed = new ccr();
        this.fed.tqg();
        this.fed.qzf("buttons")
    };
    this.jlm = function(f) {
        try {
            var d = this.fed.ebo("buttons"),
                c = 0,
                b = d.length;
            this.gho = f.mss;
            for (; c < b; c++) {
                d[c].jlm(f.okn)
            }
            this.fed.ybw("return", "#tzs", [f.ynn]);
            this.fed.ybw("page", "#tzs", [f.ehl]);
            this.fed.ybw("prev", "#tzs", [f.psy]);
            this.fed.ybw("next", "#tzs", [f.bck])
        } catch (g) {
            console.error(g)
        }
    };
    this.png = function(d) {
        try {
            var f = this.fed.ebo("buttons");
            this.uli = d.backgroundColor;
            this.buh = d.tpg;
            this.jxc = d.ufh;
            for (var c = 0, b = f.length; c < b; c++) {
                f[c].png((this.parent.asz.jpo === false) ? d.lfc : (this.parent.gxl === xzl.asz.nki) ? d.xhe : d.isy)
            }
        } catch (g) {
            console.error(g)
        }
    };
    this.xuh = function(m, l) {
        var k = this.fed.ebo("buttons"),
            g = this.fed.wqb("return"),
            c = m - this.x,
            n = l - this.y;
        for (var e = 0, f = k.length; e < f; e++) {
            var b = k[e];
            if (c >= b.x && c <= b.x + b.width && n >= b.y && n <= b.y + b.height && b.jte() == true) {
                if (b.zrf() && !b.tmp()) {
                    if (b != g) {
                        b.svq(true, true)
                    }
                    this.parent.ond.yxe("btn");
                    this.parent.ond.ewm("btn");
                    b.oyg();
                    for (var d = 0; d < f; d++) {
                        k[d].cgt(true)
                    }
                    return true
                }
            }
        }
        return false
    };
    this.xak = function() {
        var e = this.fed.ebo("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.maw() === true) {
                c.svq(false, true);
                return true
            }
        }
        return false
    };
    this.dqi = function(k) {
        var g = this.fed.ebo("buttons"),
            c = this.fed.wqb("return");
        for (var f = 0, b = g.length; f < b; f++) {
            var d = g[f];
            if (k == d.wwt) {
                if (d.zrf() && !d.tmp()) {
                    if (d != c) {
                        d.svq(true, true)
                    }
                    this.parent.ond.yxe("btn");
                    this.parent.ond.ewm("btn");
                    d.oyg();
                    for (var e = 0; e < b; e++) {
                        g[e].cgt(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.ywi = function() {
        var e = this.fed.ebo("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.maw() === true) {
                c.svq(false, true);
                return true
            }
        }
        return false
    };
    this.fwz = function(b, c) {
        if (c && c === true) {
            this.uci.unshift(b);
            this.lkn++
        } else {
            this.uci.push(b)
        }
    };
    this.hpy = function(b) {
        if (b && b === true) {
            this.uci.shift();
            this.lkn--
        } else {
            this.uci.pop()
        }
    };
    this.fuv = function() {
        return this.uci.length
    };
    this.asl = function(e, c, b) {
        var d = (this.parent.asz.jpo === false) ? c.lfc : (this.parent.gxl === xzl.asz.nki) ? c.xhe : c.isy;
        if (this.parent.aey === false) {
            this.fed.ovw("return", this.wfn(e.ynn, this.parent.language.ret, (this.parent.asz.feb === false) ? b : this.parent.ond.jcf("btn_re"), this.kef, (this.parent.lwy.uye) ? this.parent.lwy.uye : null, e.okn, d), ["buttons"]);
            this.fed.ovw("page", this.wfn(e.ehl, (this.lkn + 1) + "/" + this.uci.length, b, this.tef, null, e.okn, d), ["buttons"]);
            this.fed.ovw("prev", this.wfn(e.psy, this.parent.language.vki, (this.parent.asz.feb === false) ? b : this.parent.ond.jcf("btn_pr"), this.ral, (this.parent.lwy.kim) ? this.parent.lwy.kim : null, e.okn, d), ["buttons"]);
            this.fed.ovw("next", this.wfn(e.bck, this.parent.language.nnr, (this.parent.asz.feb === false) ? b : this.parent.ond.jcf("btn_ne"), this.tef, (this.parent.lwy.svj) ? this.parent.lwy.svj : null, e.okn, d), ["buttons"])
        }
    };
    this.wfn = function(g, j, b, i, d, f, e) {
        var c = new muh();
        c.tqg(g, this.context2D, null, b, null, j);
        c.parent = this;
        c.oyg = i;
        c.jlm(f);
        c.png(e);
        if (d) {
            c.wwt = d.jpm
        }
        return c
    };
    this.shb = function(l, j, m, e) {
        if (!this.jte() || !this.parent.dst()) {
            return
        }
        var b = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = null,
            g = this.fed.ebo("buttons"),
            d = null;
        if (this.parent.asz.jpo === false) {
            d = this.parent.ond.jcf("btn_back")
        } else {
            if (this.parent.gxl === xzl.asz.nki) {
                d = (this.parent.ond.jcf("h_right" + this.lkn) != null) ? this.parent.ond.jcf("h_right" + this.lkn) : this.parent.ond.jcf("h_right")
            } else {
                d = (this.parent.ond.jcf("h_left" + this.lkn) != null) ? this.parent.ond.jcf("h_left" + this.lkn) : this.parent.ond.jcf("h_left")
            }
        }
        n.save();
        if (b) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        if (this.lkn >= 0 && this.lkn < this.uci.length) {
            this.uci[this.lkn].shb()
        }
        if (d) {
            k = n.createLinearGradient(this.gho.x, this.gho.y, this.gho.x + this.gho.width, this.gho.y);
            k.addColorStop(0.2, this.buh);
            k.addColorStop(1, this.jxc);
            n.fillStyle = k;
            n.save();
            if (this.parent.asz.jpo === false) {
                if (this.parent.gxl === xzl.asz.lri) {
                    n.translate(this.gho.width / 2, this.gho.height / 2);
                    n.rotate(Math.PI);
                    n.translate(-this.gho.width / 2, -this.gho.height / 2)
                }
                n.fillRect(this.gho.x, this.gho.y, this.gho.width, this.gho.height)
            }
            n.drawImage(d, this.gho.x, this.gho.y, this.gho.width, this.gho.height);
            n.restore()
        } else {
            if (this.uli != null) {
                n.fillStyle = this.uli;
                n.fillRect(this.gho.x, this.gho.y, this.gho.width, this.gho.height)
            }
        }
        for (var c = 0, f = g.length; c < f; c++) {
            g[c].shb()
        }
        n.restore();
        if (this.uqi && this.uvq) {
            if (b) {
                this.uqi.drawImage(this.uvq, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.uqi.drawImage(this.uvq, this.x, this.y)
            }
        }
    };
    this.ytn = function(f, g) {
        var e = this.fed.wqb("page"),
            c = this.fed.wqb("return"),
            b = this.fed.wqb("next"),
            d = this.fed.wqb("prev");
        if (e != null) {
            e.pmb((this.lkn + 1) + "/" + this.uci.length)
        }
        if (c != null) {
            c.hix(f)
        }
        if (b != null && d != null && e != null) {
            if (f) {
                if (this.uci.length > 1) {
                    b.hix(f);
                    d.hix(f);
                    e.hix(f)
                } else {
                    b.hix(false);
                    d.hix(false);
                    e.hix(false)
                }
            } else {
                b.hix(f);
                d.hix(f);
                e.hix(f)
            }
        }
        if (g && g === true) {
            this.shb()
        }
    };
    this.wbw = function() {
        this.lkn = 0;
        this.ytn(true);
        this.hix(true, true)
    };
    this.ezd = function() {
        this.ytn(false);
        this.hix(false, true)
    };
    this.ewb = function() {
        var d = this.fed.wqb("page"),
            b = this.fed.wqb("next"),
            c = this.fed.wqb("prev");
        this.lkn = (this.lkn < this.uci.length) ? this.lkn : this.uci.length - 1;
        this.lkn = (this.lkn < 0) ? 0 : this.lkn;
        d.pmb((this.lkn + 1) + "/" + this.uci.length, true);
        if (this.uci.length == 1) {
            b.hix(false);
            c.hix(false);
            d.hix(false)
        } else {
            b.hix(true);
            c.hix(true);
            d.hix(true)
        }
    };
    this.jyi = function(c) {
        var e = this.fed.ebo("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            e[d].osq(c)
        }
    };
    this.kef = function() {
        a.parent.yso()
    };
    this.tef = function() {
        var b = a.fed.wqb("page");
        if (a.lkn < a.uci.length - 1) {
            a.lkn++
        } else {
            a.lkn = 0
        }
        if (b) {
            b.pmb((a.lkn + 1) + "/" + a.uci.length, false)
        }
        a.shb()
    };
    this.ral = function() {
        var b = a.fed.wqb("page");
        if (a.lkn > 0) {
            a.lkn--
        } else {
            a.lkn = a.uci.length - 1
        }
        if (b) {
            b.pmb((a.lkn + 1) + "/" + a.uci.length, false)
        }
        a.shb()
    }
}
vtz.prototype = new lhc;

function onv() {
    this.ejr = new Image();
    this.rmj = null;
    this.yil = [];
    this.sec = [];
    this.czv = null;
    this.wrk = null;
    this.ant = "bold";
    this.uym = null;
    this.zla = null;
    this.oly = null;
    this.foy = 0;
    this.tev = [];
    this.fsw = null;
    this.vay = 40;
    this.hfi = 18;
    this.cty = 1;
    this.tqg = function(b, d, c, a) {
        this.ejr = a;
        this.yil = [];
        this.tev = [];
        onv.prototype.tqg.call(this, b, d, c)
    };
    this.jlm = function(a) {
        try {
            this.fsw = a.dzb;
            this.tev = a.zcp;
            this.hfi = a.fontSize;
            this.vay = a.iii;
            this.cty = a.lineWidth
        } catch (b) {
            console.error(b)
        }
    };
    this.png = function(a) {
        try {
            this.czv = a.qia;
            this.wrk = a.font;
            this.ant = a.yzb;
            this.uym = a.jsh;
            this.zla = a.ded;
            this.oly = a.drn
        } catch (b) {
            console.error(b)
        }
    };
    this.shb = function() {
        if (!this.jte()) {
            return
        }
        var b = this.context2D;
        b.save();
        b.fillStyle = this.zla;
        if (this.uym) {
            b.strokeStyle = this.uym
        }
        b.lineJoin = "round";
        b.lineCap = "round";
        b.lineWidth = this.cty;
        b.font = this.ant + " " + this.hfi + "px " + this.wrk;
        b.textBaseline = "bottom";
        b.textAlign = "center";
        b.drawImage(this.ejr, 0, 0);
        if ((this.height - this.ejr.height) > 0) {
            var a = this.parent.gho;
            b.drawImage(this.ejr, a.x, a.y, a.width, this.ejr.height - a.y, a.x, a.y, a.width, a.height)
        }
        if (this.rmj && this.fsw) {
            xzl.mav.trr(b, this.rmj, this.oly, this.fsw.x, this.fsw.y, this.fsw.width, this.fsw.height, this.czv, this.vay, this.ant)
        }
        for (var c = 0; c < this.yil.length; c++) {
            this.lpa(this.yil[c], this.tev[c], this.hfi, this.wrk)
        }
        b.restore();
        if (this.uqi && this.uvq) {
            this.uqi.drawImage(this.uvq, this.x, this.y)
        }
    };
    this.bzl = function(j, f, g, d) {
        var b = this.context2D,
            c = 0;
        this.sec = [];
        b.save();
        b.font = this.ant + " " + g + "px " + d;
        this.vdz(b, g, j, f, d);
        for (var e = 0, a = this.sec.length; e < a; e++) {
            c = (f.height + this.foy) / (this.sec.length + 1) * (e + 1);
            b.fillText(this.sec[e], (f.x), f.y + c);
            if (this.uym != null && b.lineWidth >= 1) {
                b.strokeText(this.sec[e], (f.x), f.y + c)
            }
        }
        b.restore()
    };
    this.lpa = function(g, e, f, c) {
        var a = this.context2D,
            b = 0;
        this.sec = [];
        a.save();
        a.font = this.ant + " " + f + "px " + c;
        this.vdz(a, f, g, e, c);
        for (var d = 0; d < this.sec.length; d++) {
            b = (e.height + this.foy) / (this.sec.length + 1) * (d + 1);
            a.fillText(this.sec[d], (e.x + e.width / 2), e.y + b);
            if (this.uym != null && a.lineWidth >= 1) {
                a.strokeText(this.sec[d], (e.x + e.width / 2), e.y + b)
            }
        }
        a.restore()
    };
    this.vdz = function(m, o, l, g, b) {
        var a = 1,
            k = 0,
            j = "",
            f = 0,
            d = 0,
            c = 0,
            n = 0;
        n = m.measureText(l).width / g.width;
        n = (n >= Math.round(n)) ? Math.round(n) + 1 : Math.round(n);
        this.foy = o;
        if (this.foy * n > g.height) {
            a = g.height / (this.foy * n);
            this.foy = Math.round(a * this.foy) - 1;
            m.font = this.ant + " " + this.foy + "px " + b;
            n = m.measureText(l).width / g.width;
            n = (n > Math.round(n)) ? Math.round(n) + 1 : Math.round(n)
        }
        for (var e = c; e < l.length; e++) {
            j += l.charAt(e);
            k = m.measureText(j).width;
            if (l.charAt(e) == " " || l.charAt(e) == "|") {
                f = e
            }
            if (e == l.length - 1) {
                this.sec[d] = l.substring(c, l.length)
            } else {
                if (l.charAt(e) == "|") {
                    this.sec[d] = l.substring(c, e);
                    d++;
                    c = e + 1;
                    j = l.substring(f + 1, e)
                } else {
                    if (k >= g.width) {
                        this.sec[d] = l.substring(c, f);
                        d++;
                        c = f + 1;
                        j = l.substring(f + 1, e)
                    }
                }
            }
        }
    }
}
onv.prototype = new lhc;

function tcl() {
    var a = this;
    this.ejr = new Image();
    this.yzx = "";
    this.eou = "";
    this.iey = -1;
    this.qgh = 0;
    this.cay = 0;
    this.mqp = 5000;
    this.wrk = null;
    this.ant = "bold";
    this.zla = null;
    this.uli = null;
    this.jxh = null;
    this.avb = 0;
    this.orb = 0;
    this.wmk = 0;
    this.qpc = 0;
    this.tfj = 0;
    this.hfi = 0;
    this.eyp = null;
    this.sta = 0;
    this.kaj = [];
    this.lle = 0;
    this.hwg = true;
    this.thd = 0;
    this.jlm = function(b) {
        try {
            this.hfi = b.fontSize;
            this.tfj = b.sun;
            this.avb = b.biz;
            this.orb = b.rck;
            this.wmk = b.jox;
            this.qpc = b.vqq
        } catch (c) {
            console.error(c)
        }
    };
    this.png = function(b) {
        try {
            this.wrk = b.font;
            this.ant = b.yzb;
            this.uli = b.backgroundColor;
            this.zla = b.ded;
            this.jxh = b.borderColor
        } catch (c) {
            console.error(c)
        }
    };
    this.ukm = function(e, c, d, b) {
        this.yzx = e;
        this.eou = c;
        this.iey = d;
        this.qgh = b;
        this.hwg = true;
        clearTimeout(this.thd);
        if (this.jte() === true) {
            this.parent.shb(this.x, this.y, this.width, this.height)
        }
    };
    this.lqj = function(b, c) {
        this.yzx = b;
        this.eou = undefined;
        this.hwg = c;
        if (this.hwg) {
            clearTimeout(this.thd)
        }
        if (this.jte() === true) {
            this.parent.shb(this.x, this.y, this.width, this.height)
        }
    };
    this.wem = function() {
        this.yzx = "";
        this.eou = undefined;
        this.hwg = true;
        clearTimeout(this.thd);
        if (this.jte() === true) {
            this.parent.shb(this.x, this.y, this.width, this.height)
        }
    };
    this.hxc = function(b, c) {
        this.sta = 0;
        this.lle = b;
        this.hwg = false;
        if (c && c > 0) {
            this.thd = setTimeout(this.mka, c)
        } else {
            this.thd = setTimeout(this.mka, this.mqp)
        }
    };
    this.shs = function(b) {
        this.sta = 0;
        this.lle = b;
        if (this.hwg) {
            this.lqj(this.kaj[this.lle][this.sta], false)
        }
        this.hwg = false;
        this.thd = setTimeout(this.mka, this.mqp)
    };
    this.ygq = function() {
        this.hwg = false;
        this.thd = setTimeout(this.mka, this.mqp)
    };
    this.cxd = function() {
        this.hwg = true;
        clearTimeout(this.thd)
    };
    this.zkj = function() {
        return this.hwg
    };
    this.mka = function() {
        if (!a.hwg) {
            a.sta = (a.kaj[a.lle][a.sta + 1] != undefined) ? a.sta + 1 : 0;
            a.thd = setTimeout(a.mka, a.mqp);
            a.lqj(a.kaj[a.lle][a.sta], a.hwg)
        }
    };
    this.xgq = function(b) {
        this.kaj[b] = []
    };
    this.kuv = function(d, b) {
        for (var c = 0; c < d.length; c++) {
            this.kaj[b][c] = d[c]
        }
    };
    this.fvy = function(b) {
        this.eyp = b
    };
    this.shb = function() {
        if (!this.jte()) {
            return
        }
        var o = this.context2D,
            m = this.hfi,
            b = 0,
            k = 0,
            l = 0,
            j = 0,
            n = 0,
            s = 0,
            x = 0,
            e = 0,
            g = [],
            d = "",
            v = 0,
            y = 0,
            t = 0,
            f = 1,
            r = 0,
            q = (this.jxh && this.qpc) ? this.wmk + this.qpc : this.wmk;
        o.save();
        if (this.uli) {
            xzl.mav.nba(o, this.x, this.y, this.width, this.height, this.avb, this.uli, this.jxh, this.qpc)
        } else {
            if (this.eyp) {
                o.putImageData(this.eyp, this.x, this.y)
            }
        }
        o.lineJoin = "round";
        o.lineCap = "round";
        o.fillStyle = this.zla;
        o.font = this.ant + " " + m + "px " + this.wrk;
        o.textBaseline = "bottom";
        o.textAlign = "center";
        l = o.measureText(this.yzx).width;
        b += l;
        n = o.measureText("WW").width;
        if (this.eou != undefined && this.iey >= 0) {
            j = o.measureText(this.eou).width;
            b += j;
            b += this.qgh * (this.ejr.width + this.orb);
            if (this.qgh % 2 != 0) {
                s = this.x + (this.width) / 2 - (this.qgh / 2) * (this.ejr.width + this.orb);
                x = s - n;
                e = s + (this.qgh) * (this.ejr.width + this.orb) + n
            } else {
                s = this.x + (this.width) / 2 - (this.qgh / 2) * (this.ejr.width) - (this.qgh - 1) / 2 * this.orb;
                x = s - n;
                e = s + (this.qgh) * (this.ejr.width) + (this.qgh - 1) * this.orb + n
            }
            for (var u = 0; u < this.qgh; u++) {
                o.drawImage(this.ejr, 0, this.cay * this.iey, this.ejr.width, this.cay, s + (u * (this.orb + this.ejr.width)), this.y + ((this.height - this.cay) / 2), this.ejr.width, this.cay)
            }
            o.textAlign = "right";
            o.fillText(this.yzx, x, this.y + m + this.tfj);
            o.textAlign = "left";
            o.fillText(this.eou, e, this.y + m + this.tfj)
        } else {
            if (this.yzx != undefined) {
                do {
                    if (g.length > 1) {
                        m -= 2;
                        o.font = this.ant + " " + m + "px " + this.wrk
                    }
                    g = [];
                    d = "";
                    v = 0;
                    y = 0;
                    t = 0;
                    for (var p = t; p < this.yzx.length; p++) {
                        d += this.yzx.charAt(p);
                        k = o.measureText(d).width;
                        if ((this.yzx.charAt(p) == " ") || (this.yzx.charAt(p) == "|")) {
                            v = p
                        }
                        if (p == this.yzx.length - 1) {
                            g[y] = this.yzx.substring(t, this.yzx.length)
                        } else {
                            if (this.yzx.charAt(p) == "|") {
                                g[y] = this.yzx.substring(t, v);
                                y++;
                                t = v + 1;
                                d = this.yzx.substring(v + 1, p)
                            } else {
                                if (k >= this.width - 2 * q) {
                                    g[y] = this.yzx.substring(t, v);
                                    y++;
                                    t = v + 1;
                                    d = this.yzx.substring(v + 1, p)
                                }
                            }
                        }
                    }
                } while (g.length > 2);
                if (g.length > 1 && m == this.hfi) {
                    o.font = this.ant + " " + (m - 3) + "px " + this.wrk;
                    f = 0
                }
                for (var p = 0; p < g.length; p++) {
                    r = (this.height + m) / (g.length + 1) * (p + 1);
                    o.fillText(g[p], (this.x + this.width / 2), this.y + r + f)
                }
            }
        }
        o.restore()
    }
}
tcl.prototype = new lhc;

function qps() {
    this.sfz = null;
    this.eeh = null;
    this.nqu = null;
    this.qht = false;
    this.fmp = false;
    this.gsp = true;
    this.hqy = false;
    this.xaj = false;
    this.wuz = 0;
    this.oav = 0;
    this.xhg = 0;
    this.zqk = "";
    this.cgv = "";
    this.buh = null;
    this.jxc = null;
    this.wrk = "arial";
    this.ant = "bold";
    this.yte = "arial";
    this.lhz = "rgb(0,0,200)";
    this.vfl = "rgb(255,255,255)";
    this.hps = "rgb(0,0,150)";
    this.uli = "rgb(220,240,255)";
    this.yue = "rgb(130,220,255)";
    this.vhc = "rgb(130,190,255)";
    this.zla = "rgb(255,255,255)";
    this.yms = "rgb(130,190,255)";
    this.ccf = "rgb(100,160,255)";
    this.zhe = "rgb(255,255,255)";
    this.gho = new gvm();
    this.fsw = null;
    this.khw = null;
    this.dop = null;
    this.kyy = null;
    this.frs = null;
    this.kpr = null;
    this.avm = null;
    this.lad = null;
    this.qpc = 2;
    this.ixd = 3;
    this.qnu = 10;
    this.tfj = 3;
    this.vut = 5;
    this.tow = 36;
    this.hfi = 30;
    this.gvf = 22;
    this.tqg = function(a, c, b) {
        qps.prototype.tqg.call(this, a, c, b);
        this.hqy = xzl.nfj.value37
    };
    this.lsi = function(b) {
        try {
            var a = (xzl.nfj.value37) ? b.dno : b.ozp;
            this.fsw = b.dzb;
            this.khw = b.lmm;
            this.dop = b.kck;
            this.kyy = b.szo;
            this.frs = b.yam;
            this.kpr = b.the;
            this.gho = b.mss;
            this.tow = b.qlt;
            this.hfi = b.fontSize;
            this.gvf = b.ewp;
            this.tfj = b.sun;
            this.vut = b.wid;
            this.qpc = b.vqq;
            this.ixd = b.wfg;
            this.qnu = b.qjn;
            if (xzl.nfj.value36) {
                this.cgv = this.parent.bnt(this.parent.language.cec)
            } else {
                if (xzl.nfj.value37) {
                    this.cgv = this.parent.bnt(this.parent.language.zrd)
                }
            }
            this.sfz = [];
            this.eeh = this.wfn(a.uae, this.parent.language.ret, this.parent.doq, (this.parent.asz.feb === false) ? this.parent.ond.jcf("btn") : this.parent.ond.jcf("btn_re"), b.okn);
            this.sfz.push(this.eeh);
            if (xzl.nfj.value37) {
                this.nqu = this.wfn(a.ynn, this.parent.language.wvv, this.parent.bry, (this.parent.asz.feb === false) ? this.parent.ond.jcf("btn") : this.parent.ond.jcf("btn_e"), b.okn);
                this.sfz.push(this.nqu)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.jlm = function(b) {
        try {
            var a = (xzl.nfj.value37) ? b.dno : b.ozp;
            this.fsw = b.dzb;
            this.khw = b.lmm;
            this.dop = b.kck;
            this.kyy = b.szo;
            this.frs = b.yam;
            this.kpr = b.the;
            this.gho = b.mss;
            if (this.eeh) {
                this.eeh.tzs(a.uae);
                this.eeh.jlm(b.okn)
            }
            if (this.nqu) {
                this.nqu.tzs(a.ynn);
                this.nqu.jlm(b.okn)
            }
            this.tow = b.qlt;
            this.hfi = b.fontSize;
            this.gvf = b.ewp;
            this.tfj = b.sun;
            this.vut = b.wid;
            this.qpc = b.vqq;
            this.ixd = b.wfg;
            this.qnu = b.qjn
        } catch (c) {
            console.error(c)
        }
    };
    this.png = function(c) {
        try {
            this.wrk = c.font;
            this.ant = c.yzb;
            this.lhz = c.zcf;
            this.vfl = c.epb;
            this.hps = c.nyx;
            this.uli = c.backgroundColor;
            this.yue = c.ztv;
            this.vhc = c.ehr;
            this.zla = c.ded;
            this.yms = c.yts;
            this.ccf = c.cjj;
            this.zhe = c.urw;
            this.buh = c.tpg;
            this.jxc = c.ufh;
            for (var b = 0, a = this.sfz.length; b < a; b++) {
                this.sfz[b].png((this.parent.asz.jpo === true) ? c.uyn : c.lfc)
            }
        } catch (d) {
            console.error(d)
        }
    };
    this.xuh = function(d, k) {
        var c = d - this.x,
            g = k - this.y;
        for (var f = 0, b = this.sfz.length; f < b; f++) {
            var a = this.sfz[f];
            if (c >= a.x && c <= a.x + a.width && g >= a.y && g <= a.y + a.height && a.jte() === true) {
                if (a.zrf() === true && a.tmp() === false && this.gsp) {
                    a.svq(true, true);
                    this.parent.ond.yxe("btn");
                    this.parent.ond.ewm("btn");
                    a.oyg();
                    for (var e = 0; e < b; e++) {
                        this.sfz[e].cgt(true)
                    }
                    return true
                }
            }
        }
        if (c >= this.kpr.x && c <= this.kpr.x + this.kpr.width && g >= this.kpr.y && g <= this.kpr.y + this.kpr.height && this.hqy && this.fmp) {
            this.kmq()
        }
        return true
    };
    this.xak = function() {};
    this.dqi = function() {};
    this.ywi = function() {};
    this.wfn = function(d, f, e, a, c) {
        var b = new muh();
        b.tqg(d, this.context2D, null, a, null, f);
        b.parent = this;
        b.oyg = e;
        b.jlm(c);
        return b
    };
    this.jyi = function(c) {
        this.fmp = c;
        for (var b = 0, a = this.sfz.length; b < a; b++) {
            this.sfz[b].osq(c)
        }
    };
    this.kmq = function() {
        this.gsp = !this.gsp;
        this.parent.shb()
    };
    this.nee = function(d, a, c, b) {
        this.xaj = false;
        this.wzh = true;
        this.zqk = this.izf(b);
        this.wuz = d;
        this.oav = a;
        this.xhg = c;
        if (this.jte()) {
            this.jyi(true);
            this.shb()
        }
    };
    this.izf = function(b) {
        var d = Math.floor(b / 3600000);
        b = b - d * 3600000;
        var a = Math.floor(b / 60000);
        b = b - a * 60000;
        var c = Math.floor(b / 1000);
        return this.klw(d) + ":" + this.klw(a) + ":" + this.klw(c)
    };
    this.klw = function(a) {
        if (a < 10) {
            return "0" + a
        }
        return a
    };
    this.tbe = function(a, b) {
        this.xaj = a;
        if (b && b === true) {
            this.shb()
        }
    };
    this.hix = function(a, b) {
        this.wzh = false;
        if (xzl.nfj.value37) {
            this.gsp = false
        }
        this.tbe(a, false);
        qps.prototype.hix.call(this, a, b)
    };
    this.shb = function(j, f, k, d) {
        if (!this.jte() || !this.parent.dst()) {
            return
        }
        var a = (j != null && f != null && k != null && d != null),
            g = null,
            l = this.context2D,
            c = this.parent.ond.jcf("btn_back");
        l.save();
        if (a) {
            l.beginPath();
            l.rect(j, f, k, d);
            l.closePath();
            l.clip()
        }
        l.fillStyle = this.uli;
        l.fillRect(0, 0, this.width, this.height);
        if (c) {
            g = l.createLinearGradient(this.gho.x, this.gho.y, this.gho.x + this.gho.width, this.gho.y);
            g.addColorStop(0.2, this.buh);
            g.addColorStop(1, this.jxc);
            l.fillStyle = g;
            l.save();
            if (this.parent.gxl === xzl.asz.lri) {
                l.translate(this.gho.width / 2, this.gho.height / 2);
                l.rotate(Math.PI);
                l.translate(-this.gho.width / 2, -this.gho.height / 2)
            }
            l.fillRect(this.gho.x, this.gho.y, this.gho.width, this.gho.height);
            l.drawImage(c, this.gho.x, this.gho.y, this.gho.width, this.gho.height);
            l.restore()
        } else {
            if (this.parent.asz.jpo === true) {
                xzl.mav.snb(l, this.gho.x, this.gho.y, this.gho.width, this.gho.height, this.buh, 1)
            }
        }
        xzl.mav.nba(l, this.fsw.x, this.fsw.y, this.fsw.width, this.fsw.height, 0, this.yue);
        xzl.mav.trr(l, this.cgv, this.zla, this.fsw.x, this.fsw.y + this.tfj, this.fsw.width, this.fsw.height, this.wrk, this.tow, this.ant);
        xzl.mav.nba(l, this.khw.x, this.khw.y, this.khw.width, this.khw.height, 0, this.yue);
        if (xzl.nfj.value36) {
            xzl.mav.jqe(l, this.parent.bnt(this.parent.language.kxt), this.zla, this.khw.x, this.khw.y + this.tfj, this.khw.width, this.khw.height, this.wrk, this.hfi, this.ant, this.vut)
        } else {
            if (xzl.nfj.value37) {
                xzl.mav.jqe(l, this.parent.bnt(this.parent.language.maa), this.zla, this.khw.x, this.khw.y + this.tfj, this.khw.width, this.khw.height, this.wrk, this.hfi, this.ant, this.vut)
            }
        }
        xzl.mav.nba(l, this.dop.x, this.dop.y, this.dop.width, this.dop.height, 0, this.vhc);
        xzl.mav.jqe(l, this.parent.bnt(this.parent.language.mne), this.zla, this.dop.x, this.dop.y + this.tfj, this.dop.width, this.dop.height, this.wrk, this.hfi, this.ant, this.vut);
        xzl.mav.nba(l, this.kyy.x, this.kyy.y, this.kyy.width, this.kyy.height, 0, this.yue);
        xzl.mav.jqe(l, this.parent.bnt(this.parent.language.kxl), this.zla, this.kyy.x, this.kyy.y + this.tfj, this.kyy.width, this.kyy.height, this.wrk, this.hfi, this.ant, this.vut);
        if (this.hqy) {
            this.tba(l)
        }
        if (this.wzh) {
            if (xzl.nfj.value36) {
                xzl.mav.glp(l, this.wuz, this.zla, this.khw.x, this.khw.y + this.tfj, this.khw.width, this.khw.height, this.wrk, this.hfi, this.ant, this.vut)
            } else {
                if (xzl.nfj.value37) {
                    xzl.mav.glp(l, this.zqk, this.zla, this.khw.x, this.khw.y + this.tfj, this.khw.width, this.khw.height, this.wrk, this.hfi, this.ant, this.vut)
                }
            }
            xzl.mav.glp(l, this.parent.gcv(this.oav), this.zla, this.dop.x, this.dop.y + this.tfj, this.dop.width, this.dop.height, this.wrk, this.hfi, this.ant, this.vut);
            xzl.mav.glp(l, this.parent.gcv(this.xhg), this.zla, this.kyy.x, this.kyy.y + this.tfj, this.kyy.width, this.kyy.height, this.wrk, this.hfi, this.ant, this.vut)
        }
        for (var b = 0, e = this.sfz.length; b < e; b++) {
            this.sfz[b].shb()
        }
        if (this.xaj) {
            xzl.mav.xpx(l, this.frs.x, this.frs.y, this.frs.width, this.frs.height, this.ixd, this.lhz, 0.3, this.hps, this.qpc, 1);
            xzl.mav.trr(l, this.parent.bnt(this.parent.language.qab), this.vfl, this.frs.x, this.frs.y, this.frs.width, this.frs.height, this.wrk, this.hfi, this.ant)
        }
        l.restore();
        if (this.uqi && this.uvq) {
            if (a) {
                this.uqi.drawImage(this.uvq, j, f, k, d, this.x + j, this.y + f, k, d)
            } else {
                this.uqi.drawImage(this.uvq, this.x, this.y)
            }
        }
    };
    this.tba = function(b) {
        var c = Math.round(this.kpr.height / 2),
            a = Math.round(this.kpr.x + c),
            d = Math.round(this.kpr.y + c / 2);
        b.save();
        xzl.mav.nba(b, this.kpr.x, this.kpr.y, this.kpr.width, this.kpr.height, this.qnu, this.yms, this.ccf, this.qpc);
        xzl.mav.trr(b, this.parent.language.dby, this.zla, this.kpr.x + this.kpr.height, this.kpr.y, this.kpr.width - this.kpr.height, this.kpr.height, this.wrk, this.gvf, this.ant);
        xzl.mav.snb(b, a, d, c, c, null, 0, this.zhe, this.qpc, 1);
        if (this.gsp) {
            xzl.mav.snb(b, a + c / 4, d + c / 4, c / 2, c / 2, this.zhe, 1)
        }
        b.restore()
    }
}
qps.prototype = new lhc;

function mpx() {
    var a = this;
    this.unn = function() {
        a.iwj = false
    };
    this.shb = function() {
        if (!this.jte()) {
            return
        }
        var b = this.context2D;
        b.save();
        if (this.ejr != null) {
            b.drawImage(this.ejr, 0, 0, this.ejr.width, this.ejr.height, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
mpx.prototype = new iup;

function ntr() {
    this.rmj = "";
    this.igj = "";
    this.ejr = null;
    this.czv = "sans-serif";
    this.err = "sans-serif";
    this.ant = "bold";
    this.oly = null;
    this.zla = null;
    this.jxh = null;
    this.amp = null;
    this.uli = null;
    this.vay = 16;
    this.yye = 20;
    this.onp = 0;
    this.cyh = 0;
    this.qpc = 2;
    this.xuq = 3;
    this.edl = 3;
    this.hnw = 3;
    this.spa = 3;
    this.tqg = function(a, e, b, d, c) {
        ntr.prototype.tqg.call(this, a, e, b);
        this.rmj = d;
        this.igj = c
    };
    this.jlm = function(a) {
        try {
            this.vay = a.iii;
            this.yye = a.dzi;
            this.onp = a.zbs;
            this.cyh = a.rbr;
            this.qpc = a.vqq;
            this.xuq = a.bpt;
            this.edl = a.vpx;
            this.hnw = a.qur;
            this.spa = a.kam
        } catch (b) {
            console.error(b)
        }
    };
    this.png = function(a) {
        try {
            this.czv = a.qia;
            this.err = a.nqs;
            this.ant = a.yzb;
            this.oly = a.drn;
            this.zla = a.ded;
            this.jxh = a.borderColor;
            this.amp = a.leq;
            this.uli = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.pmb = function(a, b) {
        this.igj = a;
        if (b && b === true && this.context2D != null && this.jte() === true) {
            this.parent.shb(this.x, this.y, this.width, this.height)
        }
    };
    this.rcy = function(a, b) {
        this.rmj = a;
        if (b && b === true && this.context2D != null && this.jte() === true) {
            this.parent.shb(this.x, this.y, this.width, this.height)
        }
    };
    this.shb = function() {
        if (!this.jte()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.amp) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.jxh);
            b.addColorStop(1, this.amp);
            xzl.mav.kze(a, this.x, this.y, this.width, this.height, this.xuq, this.edl, this.hnw, this.spa, this.uli, 1, b, this.qpc, 1)
        } else {
            xzl.mav.kze(a, this.x, this.y, this.width, this.height, this.xuq, this.edl, this.hnw, this.spa, this.uli, 1, this.jxh, this.qpc, 1)
        }
        if (this.rmj != null) {
            xzl.mav.trr(a, this.rmj, this.oly, this.x + this.qpc, this.y + this.onp, this.width - 2 * this.qpc, this.height, this.czv, this.vay, this.ant)
        }
        if (this.igj != null) {
            if (this.rmj != null) {
                xzl.mav.trr(a, this.igj, this.zla, this.x + this.qpc, this.y + this.cyh, this.width - 2 * this.qpc, this.height, this.err, this.yye, this.ant)
            } else {
                xzl.mav.trr(a, this.igj, this.zla, this.x + this.qpc, this.y + this.qpc, this.width - 2 * this.qpc, this.height, this.err, this.yye, this.ant)
            }
        }
        if (this.ejr) {
            a.drawImage(this.ejr, 0, 0, this.ejr.width, this.ejr.height, this.x + this.qpc, this.y + this.qpc, this.width - 2 * this.qpc, this.height - 2 * this.qpc)
        }
        a.restore();
        if (this.uqi && this.uvq) {
            this.uqi.drawImage(this.uvq, this.x, this.y)
        }
    }
}
ntr.prototype = new lhc;

function blx() {
    this.ejr = new Image();
    this.igj = "";
    this.rko = true;
    this.wrk = null;
    this.ant = "bold";
    this.oam = "red";
    this.qne = "orange";
    this.uym = "white";
    this.hfi = 40;
    this.vut = 0;
    this.tfj = 0;
    this.mru = 0;
    this.yau = 2;
    this.vmb = null;
    this.fcc = 0;
    this.llg = 0;
    this.tqg = function(a, e, c, b, d) {
        blx.prototype.tqg.call(this, a, e, c);
        this.ejr = b;
        this.igj = d
    };
    this.jlm = function(a) {
        try {
            this.hfi = a.fontSize;
            this.vut = a.wid;
            this.tfj = a.sun;
            this.mru = a.vek;
            this.yau = a.qmp
        } catch (b) {
            console.error(b)
        }
    };
    this.png = function(a) {
        try {
            this.wrk = a.font;
            this.ant = a.yzb;
            this.oam = a.fkn;
            this.qne = a.uts;
            this.uym = a.jsh
        } catch (b) {
            console.error(b)
        }
    };
    this.pmb = function(a, b) {
        this.igj = a;
        if (b && b === true && this.context2D != null) {
            this.hix(true, true)
        }
    };
    this.vjl = function(a, b) {
        this.igj = a;
        this.rko = false;
        if (b && b === true && this.context2D != null) {
            this.hix(true, true)
        }
    };
    this.hix = function(a, b) {
        this.fjy = a;
        if (b && b === true && this.context2D != null) {
            if (this.uvq == null && this.jte()) {
                this.shb()
            } else {
                if (this.parent != null) {
                    this.parent.shb(this.x, this.y, this.width, this.height)
                }
            }
        }
    };
    this.par = function(a, b, c) {
        this.vmb = a;
        this.fcc = b;
        this.llg = c
    };
    this.shb = function() {
        if (!this.jte() || !this.parent.dst()) {
            return
        }
        var b = this.context2D,
            c = null,
            a = (this.uvq != null) ? 0 : this.x,
            d = (this.uvq != null) ? 0 : this.y;
        b.save();
        if (this.uvq == null) {
            b.beginPath();
            b.rect(this.x, this.y, this.width, this.height);
            b.closePath();
            b.clip()
        }
        if (this.rko === true) {
            if (this.vmb != null) {
                b.drawImage(this.vmb, this.x + this.fcc, this.y + this.llg, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            if (this.ejr != null) {
                b.drawImage(this.ejr, a, d)
            }
        }
        c = b.createLinearGradient(a + this.width / 2 + this.vut, d, a + this.width / 2 + this.vut, d + this.height);
        c.addColorStop(0, this.oam);
        c.addColorStop(1, this.qne);
        xzl.mav.trr(b, this.igj, c, a + this.mru + this.vut, d + this.tfj, this.width - 2 * this.mru, this.height, this.wrk, this.hfi, this.ant, this.uym, this.yau);
        b.restore();
        if (this.uqi && this.uvq) {
            this.uqi.drawImage(this.uvq, this.x, this.y)
        }
    }
}
blx.prototype = new lhc;

function oja() {
    var a = this;
    this.state = 0;
    this.tpy = 1;
    this.key = null;
    this.rgh = null;
    this.wca = null;
    this.tzn = "round";
    this.wrk = null;
    this.ant = "bold";
    this.efo = "center";
    this.uli = null;
    this.zla = null;
    this.hkp = 1;
    this.xca = null;
    this.hfi = 17;
    this.mru = 2;
    this.avb = 0;
    this.qpc = 1;
    this.bvl = 0;
    this.ibo = 0;
    this.lql = 0;
    this.jlm = function(b) {
        try {
            this.hfi = b.fontSize;
            this.mru = b.vek;
            this.avb = b.biz;
            this.qpc = b.vqq;
            this.lql = b.yhg
        } catch (c) {
            console.error(c)
        }
    };
    this.png = function(b) {
        try {
            this.tzn = b.yzk;
            this.wrk = b.font;
            this.ant = b.yzb;
            this.efo = b.textAlign;
            this.uli = b.backgroundColor;
            this.zla = b.ded;
            this.hkp = b.tew;
            if (b.borderColor && b.leq) {
                this.xca = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.xca.addColorStop(0, b.borderColor);
                this.xca.addColorStop(1, b.leq)
            } else {
                this.xca = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.wyd = function() {
        return this.tzn
    };
    this.ona = function(c, b) {
        this.state = c;
        this.tpy = b
    };
    this.hnt = function(b) {
        this.ejr = b;
        if (this.tzn === "round") {
            this.bvl = this.width / 2 - this.mru
        }
        if (this.ejr) {
            this.ibo = Math.round(this.ejr.height / (2 * this.tpy))
        }
    };
    this.uem = function(b) {
        this.state = (b < this.tpy) ? b : this.state
    };
    this.kvy = function(b) {
        this.key = b
    };
    this.unn = function() {
        a.iwj = false
    };
    this.vww = function() {
        a.flu = false;
        if (a.jte()) {
            a.parent.shb(a.x, a.y, a.width, a.height)
        }
    };
    this.shb = function() {
        if (!this.jte()) {
            return
        }
        var l = this.context2D,
            e = (this.zrf()) ? this.hkp : this.hkp / 2,
            b = this.hfi,
            d = null,
            c = 0,
            k = 0,
            j = 0,
            g = 0;
        l.save();
        if (this.ejr && this.oyg) {
            if (!this.zrf()) {
                l.globalAlpha = e
            }
            if (this.tzn === "round") {
                xzl.mav.ekq(l, this.x + this.width / 2, this.y + this.height / 2, this.bvl, this.uli, e * this.hkp)
            } else {
                if (this.tzn === "rect") {
                    xzl.mav.xpx(l, this.x, this.y, this.width, this.height, this.avb, this.uli, e * this.hkp, this.xca, this.qpc, e)
                }
            }
            if (this.maw()) {
                if (this.tzn === "round") {
                    l.drawImage(this.ejr, 0, (this.state * 2 * this.ibo) + this.ibo, this.ejr.width, this.ibo, this.x, this.y, this.width, this.height)
                } else {
                    if (this.tzn === "rect") {
                        l.drawImage(this.ejr, 0, (this.state * 2 * this.ibo) + this.ibo, this.ejr.width, this.ibo, this.x, this.y, this.width, this.height)
                    }
                }
            } else {
                if (this.tzn === "round") {
                    l.drawImage(this.ejr, 0, (this.state * 2 * this.ibo), this.ejr.width, this.ibo, this.x, this.y, this.width, this.height)
                } else {
                    if (this.tzn === "rect") {
                        l.drawImage(this.ejr, 0, (this.state * 2 * this.ibo), this.ejr.width, this.ibo, this.x, this.y, this.width, this.height)
                    }
                }
            }
            if (this.igj != null) {
                l.textAlign = this.efo;
                l.textBaseline = "bottom";
                l.font = this.ant + " " + b + "px " + this.wrk;
                l.fillStyle = this.zla;
                d = this.igj.split("|");
                j = 0;
                g = (this.efo === "center") ? this.x + this.width / 2 : (this.efo === "left") ? this.x + 2 * this.mru : this.x + this.width - 2 * this.mru;
                for (var f = 0; f < d.length; f++) {
                    j = (l.measureText(d[f]).width > j) ? l.measureText(d[f]).width : j
                }
                if (j > this.width - 2 * this.mru) {
                    c = ((this.width - 2 * this.mru) / j);
                    b = Math.round(c * b) - 1;
                    l.font = this.ant + " " + b + "px " + this.wrk
                }
                if (b * d.length > this.lql) {
                    c = ((this.lql) / (b * d.length));
                    b = Math.round(c * b) - 1;
                    l.font = this.ant + " " + b + "px " + this.wrk
                }
                k = (this.height - this.mru - this.lql) + (this.lql - b * d.length) / 2;
                k += b;
                for (var f = 0; f < d.length; f++) {
                    l.fillText(d[f], g, this.y + k);
                    k += b
                }
            }
        }
        l.restore()
    }
}
oja.prototype = new iup;

function gyy() {
    var a = this;
    this.tzn = "rect";
    this.env = -1;
    this.wrk = null;
    this.ant = "bold";
    this.uli = null;
    this.lmd = null;
    this.ogu = null;
    this.gcb = null;
    this.jxh = null;
    this.zla = null;
    this.lvr = null;
    this.avb = 3;
    this.vut = -2;
    this.tfj = 2;
    this.wmk = 6;
    this.hfi = 26;
    this.qpc = 2;
    this.jlm = function(b) {
        try {
            this.hfi = b.fontSize;
            this.vut = b.wid;
            this.tfj = b.sun;
            this.wmk = b.jox;
            this.avb = b.biz;
            this.qpc = b.vqq
        } catch (c) {
            console.error(c)
        }
    };
    this.png = function(b) {
        try {
            this.wrk = b.font;
            this.ant = b.yzb;
            this.uli = b.backgroundColor;
            this.lmd = b.qmm;
            this.ogu = b.zrs;
            this.gcb = b.qth;
            this.jxh = b.borderColor;
            this.zla = b.ded;
            this.lvr = b.fha;
            this.tzn = b.yzk;
            this.env = b.yrn
        } catch (c) {
            console.error(c)
        }
    };
    this.wyd = function() {
        return this.tzn
    };
    this.unn = function() {
        a.iwj = false
    };
    this.vww = function() {
        a.flu = false;
        if (a.jte()) {
            a.parent.shb(a.x, a.y, a.width, a.height)
        }
    };
    this.shb = function() {
        if (!this.jte()) {
            return
        }
        var p = this.context2D,
            l = null,
            n = this.uli,
            m = this.lmd,
            b = this.hfi,
            f = null,
            d = 0,
            o = 0,
            c = 1,
            k = 0,
            e = (this.env == 0 || this.env == 3) ? this.avb : 0;
        lt = (this.env == 1 || this.env == 3) ? this.avb : 0;
        rb = (this.env == 0 || this.env == 2) ? this.avb : 0;
        lb = (this.env == 1 || this.env == 2) ? this.avb : 0;
        h = 0;
        p.save();
        p.lineJoin = "round";
        p.lineCap = "round";
        p.textAlign = "center";
        if (this.maw()) {
            n = (this.ogu != null) ? this.ogu : n;
            m = (this.gcb != null) ? this.gcb : m
        }
        if (n != null) {
            if (m != null) {
                l = p.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                l.addColorStop(1, m);
                l.addColorStop(0, n);
                if (this.tzn === "rrect") {
                    xzl.mav.kze(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, l, 1, this.jxh, this.qpc, 1)
                } else {
                    if (this.tzn === "rect") {
                        if (this.jxh) {
                            xzl.mav.nba(p, this.x, this.y, this.width, this.height, this.avb, l, this.jxh, this.qpc)
                        } else {
                            xzl.mav.snb(p, this.x, this.y, this.width, this.height, l, 1)
                        }
                    } else {
                        if (this.tzn === "triangle") {
                            xzl.mav.igs(p, this.env, this.x, this.y, this.width, this.height, this.avb, l, 1, this.jxh, this.qpc, 1)
                        }
                    }
                }
            } else {
                if (this.tzn === "rrect") {
                    xzl.mav.kze(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, n, 1, this.jxh, this.qpc, 1)
                } else {
                    if (this.tzn === "rect") {
                        if (this.jxh) {
                            xzl.mav.nba(p, this.x, this.y, this.width, this.height, this.avb, n, this.jxh, this.qpc, 1)
                        } else {
                            xzl.mav.snb(p, this.x, this.y, this.width, this.height, n, 1)
                        }
                    } else {
                        if (this.tzn === "triangle") {
                            xzl.mav.igs(p, this.env, this.x, this.y, this.width, this.height, this.avb, n, 1, this.jxh, this.qpc, 1)
                        }
                    }
                }
            }
        }
        if (this.ejr != null) {
            h = this.height - 2 * this.wmk;
            p.drawImage(this.ejr, this.x + this.width / 2 - h / 2, this.y + this.wmk, h, h)
        }
        if (this.igj != null) {
            p.textAlign = "center";
            p.textBaseline = "bottom";
            f = this.igj.split("|");
            d = 0;
            if (this.maw()) {
                d = 1;
                p.fillStyle = this.lvr
            } else {
                p.fillStyle = this.zla
            }
            p.font = this.ant + " " + b + "px " + this.wrk;
            for (var g = 0, j = f.length; g < j; g++) {
                o = (p.measureText(f[g]).width > o) ? p.measureText(f[g]).width : o
            }
            if (o > this.width - 2 * this.wmk) {
                c = ((this.width - 2 * this.wmk) / o);
                b = Math.round(c * b) - 1;
                p.font = this.ant + " " + b + "px " + this.wrk
            }
            if (b * f.length > this.height) {
                c = ((this.height) / (b * f.length));
                b = Math.round(c * b) - 1;
                p.font = this.ant + " " + b + "px " + this.wrk
            }
            k = (this.height - b * f.length) / 2;
            k += b;
            for (var g = 0; g < f.length; g++) {
                p.fillText(f[g], (this.x + this.width / 2) + this.vut, this.y - this.tfj + k + d);
                k += b
            }
        }
        p.restore()
    }
}
gyy.prototype = new iup;

function qjs() {
    var a = this;
    this.igj = null;
    this.fmp = false;
    this.iwj = false;
    this.wyc = false;
    this.wrk = null;
    this.ant = "bold";
    this.efo = "center";
    this.uli = null;
    this.jxh = null;
    this.zla = null;
    this.vlh = "rect";
    this.svy = new gvm();
    this.pxc = new gvm();
    this.hfi = 16;
    this.avb = 8;
    this.qpc = 1;
    this.dku = 0;
    var b = 200;
    this.tqg = function(c, f, d, e) {
        this.igj = e;
        qjs.prototype.tqg.call(this, c, f, d)
    };
    this.png = function(c) {
        try {
            this.wrk = c.font;
            this.ant = c.yzb;
            this.efo = c.textAlign;
            this.uli = c.backgroundColor;
            this.jxh = c.borderColor;
            this.zla = c.ded;
            this.vlh = c.type
        } catch (d) {
            console.error(d)
        }
    };
    this.jlm = function(c) {
        try {
            this.svy = c.zcp;
            this.pxc = c.rfn;
            this.hfi = c.fontSize;
            this.avb = c.biz;
            this.qpc = c.vqq
        } catch (d) {
            console.error(d)
        }
    };
    this.osq = function(c) {
        this.fmp = c
    };
    this.zrf = function() {
        return this.fmp
    };
    this.ouv = function(c, d) {
        this.wyc = c;
        if (d && d === true) {
            this.parent.shb(this.x, this.y, this.width, this.height)
        }
    };
    this.gcc = function() {
        return this.wyc
    };
    this.pmb = function(c, d) {
        this.igj = c;
        if (d && d === true && this.jte()) {
            this.parent.shb(this.x, this.y, this.width, this.height)
        }
    };
    this.cgt = function(c, d) {
        this.iwj = c;
        d = (d === false) ? false : true;
        clearTimeout(this.dku);
        if (this.iwj === true && d === true) {
            this.dku = setTimeout(this.unn, b)
        }
    };
    this.tmp = function() {
        return this.iwj
    };
    this.unn = function() {
        a.iwj = false
    };
    this.shb = function() {
        if (!this.jte()) {
            return
        }
        var c = this.context2D;
        c.save();
        xzl.mav.nba(c, this.x, this.y, this.width, this.height, this.avb, this.uli, this.jxh, this.qpc);
        if (this.vlh === "rect") {
            xzl.mav.snb(c, this.x + this.pxc.x, this.y + this.pxc.y, this.pxc.width, this.pxc.height, this.zla, 0.2, this.zla, this.qpc, 1);
            if (this.wyc === true) {
                xzl.mav.snb(c, this.x + this.pxc.x + this.pxc.width / 4, this.y + this.pxc.y + this.pxc.height / 4, this.pxc.width / 2, this.pxc.height / 2, this.zla, 1)
            }
        } else {
            if (this.vlh === "round") {
                xzl.mav.ekq(c, this.x + this.pxc.x + this.pxc.width / 2, this.y + this.pxc.y + this.pxc.height / 2, this.pxc.width / 2, this.zla, 0.2, this.zla, this.qpc, 1);
                if (this.wyc === true) {
                    xzl.mav.ekq(c, this.x + this.pxc.x + this.pxc.width / 2, this.y + this.pxc.y + this.pxc.height / 2, this.pxc.width / 4, this.zla, 1)
                }
            }
        }
        if (this.igj && this.igj != "") {
            xzl.mav.lpa(c, this.igj, this.zla, this.x + this.svy.x, this.y + this.svy.y, this.svy.width, this.svy.height, this.wrk, this.hfi, this.ant, this.efo, true)
        }
        c.restore();
        if (this.uqi && this.uvq) {
            this.uqi.drawImage(this.uvq, this.x, this.y)
        }
    };
    this.oyg = {}
}
qjs.prototype = new lhc;

function dnd() {
    var b = this;
    var c = 0;
    var a = 1;
    this.fed = null;
    this.rmj = "";
    this.uta = "";
    this.ixw = "";
    this.bcz = "";
    this.jaf = false;
    this.wuz = [];
    this.cwq = 0;
    this.ibg = 0;
    this.kop = 0;
    this.paf = 0;
    this.uvf = 0;
    this.tnq = 0;
    this.wlp = 0;
    this.jfz = 0;
    this.fsq = false;
    this.qdh = false;
    this.ayx = false;
    this.vlh = "center";
    this.wrk = "arial";
    this.ant = "bold";
    this.oly = "white";
    this.zla = "white";
    this.uli = "black";
    this.lmd = null;
    this.jxh = "white";
    this.amp = "rgb(150,150,150)";
    this.buh = null;
    this.utc = null;
    this.qpc = 3;
    this.jbe = 0;
    this.ykv = 0;
    this.aef = 0;
    this.vay = 30;
    this.lqy = 24;
    this.fsw = new gvm();
    this.ohr = new gvm();
    this.kvs = new gvm();
    this.nfo = new gvm();
    this.bcc = new gvm();
    this.ndu = new gvm();
    this.bau = new gvm();
    this.ghr = new gvm();
    this.zdk = new gvm();
    this.glk = 7;
    this.muy = 0;
    this.vlq = 0;
    this.abj = 0;
    this.mlj = c;
    this.ivt = 0;
    this.hil = 89;
    this.qwf = false;
    this.zsh = 0;
    this.swz = 0;
    this.meh = 0;
    this.kph = 0;
    this.vtf = null;
    this.uav = 0;
    this.ref = 1;
    this.gdb = 250;
    this.tqg = function(d, f, e) {
        dnd.prototype.tqg.call(this, d, f, e);
        this.fed = new ccr();
        this.fed.tqg();
        this.fed.qzf("buttons");
        this.fed.qzf("checkboxes");
        this.fed.qzf("displays");
        this.fed.qzf("lbuttons");
        this.fed.qzf("mbuttons");
        this.fed.qzf("vbuttons");
        this.fed.qzf("cbuttons")
    };
    this.lsi = function(d) {
        try {
            this.asl(d);
            this.nko(d)
        } catch (f) {
            console.error(f)
        }
    };
    this.png = function(k) {
        try {
            var n = this.fed.ebo("lbuttons"),
                m = this.fed.ebo("mbuttons"),
                f = this.fed.ebo("cbuttons"),
                g = this.fed.ebo("displays");
            this.vlh = k.type;
            this.wrk = k.font;
            this.ant = k.yzb;
            this.oly = k.drn;
            this.zla = k.ded;
            this.uli = k.backgroundColor;
            this.lmd = k.qmm;
            this.jxh = k.borderColor;
            this.buh = k.tpg;
            this.utc = k.mdg;
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].png(k.phz)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].png(k.esv)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].png(k.pzd)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].png(k.display)
            }
            this.fed.sce("checkboxes", "#png", [k.vlp])
        } catch (l) {
            console.error(l)
        }
    };
    this.jlm = function(k) {
        try {
            var n = this.fed.ebo("lbuttons"),
                m = this.fed.ebo("mbuttons"),
                f = this.fed.ebo("cbuttons"),
                g = this.fed.ebo("displays");
            this.qpc = k.vqq;
            this.jbe = k.epe;
            this.ykv = k.orv;
            this.aef = k.kxq;
            this.vay = k.iii;
            this.lqy = k.znk;
            this.fsw = k.dzb;
            this.ohr = k.yha;
            this.kvs = k.qtr;
            this.nfo = k.uhf;
            this.bcc = k.vhp;
            this.ndu = k.mjq;
            this.fed.ybw("lgames", "#tzs", [k.sbr]);
            this.fed.ybw("mgames", "#tzs", [k.afq]);
            this.fed.ybw("lmincredit", "#tzs", [k.jdw]);
            this.fed.ybw("mmincredit", "#tzs", [k.hcg]);
            this.fed.ybw("lmaxcredit", "#tzs", [k.frw]);
            this.fed.ybw("mmaxcredit", "#tzs", [k.lwe]);
            this.fed.ybw("lmaxwin", "#tzs", [k.xwp]);
            this.fed.ybw("mmaxwin", "#tzs", [k.yjj]);
            this.fed.ybw("start", "#tzs", [k.syy]);
            this.fed.ybw("cancel", "#tzs", [k.yby]);
            this.fed.ybw("gamesd", "#tzs", [k.lsf]);
            this.fed.ybw("mincreditd", "#tzs", [k.faq]);
            this.fed.ybw("maxcreditd", "#tzs", [k.vmw]);
            this.fed.ybw("maxwind", "#tzs", [k.voi]);
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].jlm(k.phz)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].jlm(k.esv)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].jlm(k.pzd)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].jlm(k.display)
            }
            this.fed.ybw("cmincredit", "#tzs", [k.rme]);
            this.fed.ybw("cmaxcredit", "#tzs", [k.mqw]);
            this.fed.ybw("cmaxwin", "#tzs", [k.ony]);
            this.fed.sce("checkboxes", "#jlm", [k.vlp])
        } catch (l) {
            console.error(l)
        }
    };
    this.asl = function(d) {
        this.fed.ovw("start", this.wfn(d.syy, this.parent.language.start, this.spl, this.parent.lwy.xvu), ["buttons", "cbuttons"]);
        this.fed.ovw("cancel", this.wfn(d.yby, this.parent.language.wfp, this.ble, this.parent.lwy.eut), ["buttons", "cbuttons"]);
        this.fed.ovw("lgames", this.wfn(d.sbr, "", this.upl, null), ["buttons", "lbuttons", "vbuttons"]);
        this.fed.ovw("mgames", this.wfn(d.afq, "+", this.ftq, null), ["buttons", "mbuttons", "vbuttons"]);
        this.fed.ovw("lmincredit", this.wfn(d.jdw, "", this.zep, null), ["buttons", "lbuttons", "vbuttons"]);
        this.fed.ovw("mmincredit", this.wfn(d.hcg, "+", this.eqm, null), ["buttons", "mbuttons", "vbuttons"]);
        this.fed.ovw("lmaxcredit", this.wfn(d.frw, "", this.rqj, null), ["buttons", "lbuttons", "vbuttons"]);
        this.fed.ovw("mmaxcredit", this.wfn(d.lwe, "+", this.jsv, null), ["buttons", "mbuttons", "vbuttons"]);
        this.fed.ovw("lmaxwin", this.wfn(d.xwp, "", this.kyf, null), ["buttons", "lbuttons", "vbuttons"]);
        this.fed.ovw("mmaxwin", this.wfn(d.yjj, "+", this.nzd, null), ["buttons", "mbuttons", "vbuttons"]);
        this.fed.ovw("cmincredit", this.erl(d.rme, "", this.liw), ["checkboxes"]);
        this.fed.ovw("cmaxcredit", this.erl(d.mqw, "", this.muu), ["checkboxes"]);
        this.fed.ovw("cmaxwin", this.erl(d.ony, "", this.dfz), ["checkboxes"])
    };
    this.nko = function(d) {
        this.fed.ovw("gamesd", this.atr(d.lsf, null, (this.wuz[this.cwq] > 0) ? this.wuz[this.cwq] : "---"), ["displays"]);
        this.fed.ovw("mincreditd", this.atr(d.faq, null, "---"), ["displays"]);
        this.fed.ovw("maxcreditd", this.atr(d.vmw, null, "---"), ["displays"]);
        this.fed.ovw("maxwind", this.atr(d.voi, null, "---"), ["displays"])
    };
    this.atr = function(d, g, f) {
        var e = new ntr();
        e.tqg(d, this.context2D, null, g, f);
        e.parent = this;
        return e
    };
    this.wfn = function(f, i, g, e) {
        var d = new gyy();
        d.tqg(f, this.context2D, null, null, i);
        d.parent = this;
        d.oyg = g;
        if (e) {
            d.wwt = e.jpm
        }
        return d
    };
    this.erl = function(e, g, f) {
        var d = new qjs();
        d.tqg(e, this.context2D, null, g);
        d.parent = this;
        d.oyg = f;
        return d
    };
    this.xuh = function(r, n) {
        var s = this.fed.ebo("vbuttons"),
            l = this.fed.ebo("cbuttons"),
            g = this.fed.ebo("checkboxes"),
            p = this.fed.wqb("cancel"),
            q = r - this.x,
            o = n - this.y;
        if (this.eaw) {
            return true
        }
        if ((!p || !p.jte()) && (r < this.x || r > this.x + this.width || n < this.y || n > this.y + this.height)) {
            this.ayx = true;
            this.ezd();
            return true
        }
        for (var f = 0, m = s.length; f < m; f++) {
            var d = s[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.jte() === true && d.zrf() === true && d.tmp() === false) {
                    d.svq(true, false, false);
                    this.uav = 0;
                    this.ref = 1;
                    if (d.oyg() === false) {
                        this.vtf = function() {
                            if (d.oyg() === true) {
                                clearInterval(b.kph);
                                d.svq(false, false);
                                b.parent.shb();
                                for (var i = 0; i < m; i++) {
                                    s[i].cgt(false)
                                }
                            }
                        };
                        this.kph = setInterval(this.vtf, this.gdb)
                    }
                    for (var e = 0; e < m; e++) {
                        s[e].cgt(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = l.length; f < m; f++) {
            var d = l[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.jte() === true && d.zrf() === true) {
                    this.parent.ond.yxe("btn");
                    this.parent.ond.ewm("btn");
                    d.svq(true, false);
                    d.oyg();
                    for (var e = 0; e < m; e++) {
                        l[e].cgt(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = g.length; f < m; f++) {
            var k = g[f];
            if (q >= k.x && q <= k.x + k.width && o >= k.y && o <= k.y + k.height) {
                if (k.jte() === true && k.zrf() === true) {
                    k.ouv(!k.gcc(), true);
                    k.oyg();
                    for (var e = 0; e < m; e++) {
                        g[e].cgt(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.xak = function() {
        var e = this.fed.ebo("vbuttons"),
            j = this.fed.ebo("cbuttons");
        for (var g = 0, d = e.length; g < d; g++) {
            var f = e[g];
            if (f.maw() == true) {
                clearInterval(this.kph);
                f.svq(false, false);
                this.parent.shb();
                return true
            }
        }
        for (var g = 0, d = j.length; g < d; g++) {
            var f = j[g];
            if (f.maw() == true) {
                f.svq(false, false);
                this.parent.shb();
                return true
            }
        }
        return false
    };
    this.dqi = function(l) {
        var k = this.fed.ebo("buttons");
        if (this.eaw) {
            return true
        }
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l == f.wwt) {
                if (f.zrf() && !f.tmp()) {
                    this.parent.ond.yxe("btn");
                    this.parent.ond.ewm("btn");
                    f.svq(true, false);
                    f.oyg();
                    for (var e = 0; e < d; e++) {
                        k[e].cgt(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.ywi = function() {
        var g = this.fed.ebo("buttons");
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.maw() == true) {
                e.svq(false, false);
                this.parent.shb();
                return true
            }
        }
        return false
    };
    this.jyi = function(d) {
        this.fed.sce("buttons", "#osq", [d]);
        this.fed.sce("checkboxes", "#osq", [d]);
        if (d === true && this.qdh === true) {
            this.fed.ybw("cmincredit", "#osq", [false])
        }
    };
    this.zzw = function(d) {
        this.wuz = d.g;
        this.ibg = d.v;
        this.kop = d.v;
        this.fsq = d.r;
        this.qdh = d.l;
        if (typeof d.m != "undefined" && d.m != null && d.m > 0) {
            this.paf = d.m;
            this.uvf = d.m
        }
    };
    this.jhe = function() {
        if (this.fsq === true) {
            this.tnq = this.parent.isj;
            this.wlp = this.parent.isj;
            this.cwq = 0;
            this.jfz = 0
        }
    };
    this.gjk = function() {
        if (this.wuz.length > 0 && this.cwq >= 0 && this.ayx === false) {
            return this.wuz[this.cwq]
        }
        return 0
    };
    this.jxa = function() {
        var d = this.fed.wqb("cmincredit") == null || this.fed.ybw("cmincredit", "#gcc");
        if (this.tnq > 0 && d === true) {
            return this.tnq
        }
        return 0
    };
    this.uln = function() {
        var d = this.fed.wqb("cmaxcredit") == null || this.fed.ybw("cmaxcredit", "#gcc");
        if (this.wlp > 0 && d === true) {
            return this.wlp
        }
        return 0
    };
    this.xgg = function() {
        var d = this.fed.wqb("cmaxwin") == null || this.fed.ybw("cmaxwin", "#gcc");
        if (this.jfz > 0 && d === true) {
            return this.jfz
        }
        return 0
    };
    this.wbw = function() {
        var f = this.fed.wqb("cmincredit") == null || this.fed.ybw("cmincredit", "#gcc"),
            d = this.fed.wqb("cmaxcredit") == null || this.fed.ybw("cmaxcredit", "#gcc"),
            e = this.fed.wqb("cmaxwin") == null || this.fed.ybw("cmaxwin", "#gcc");
        this.qwf = false;
        this.ayx = false;
        this.kop = (this.uvf > 0) ? this.parent.tlp() * this.uvf : this.kop;
        this.ibg = (this.paf > 0) ? this.parent.tlp() * this.paf : this.ibg;
        if (this.fsq === true) {
            f = this.qdh;
            d = false;
            e = false;
            this.jhe()
        } else {
            if (this.qdh === true) {
                f = true;
                this.tnq = (this.tnq < this.parent.isj) ? this.tnq : this.parent.isj;
                this.tnq = (this.tnq > 0) ? this.tnq : this.parent.isj
            } else {
                f = (this.tnq <= this.parent.isj) ? f : false;
                this.tnq = (this.tnq < this.parent.isj) ? this.tnq : this.parent.isj
            }
            d = (this.wlp >= this.parent.isj) ? d : false;
            this.wlp = (this.wlp > this.parent.isj) ? this.wlp : this.parent.isj
        }
        this.fed.ybw("cmincredit", "#ouv", [f]);
        this.fed.ybw("cmaxcredit", "#ouv", [d]);
        this.fed.ybw("cmaxwin", "#ouv", [e]);
        this.fed.ybw("gamesd", "#pmb", [(this.wuz[this.cwq] > 0) ? this.wuz[this.cwq] : "---"]);
        this.fed.ybw("mincreditd", "#pmb", [(f === true && this.tnq > 0) ? this.parent.gcv(this.tnq) : "---"]);
        this.fed.ybw("maxcreditd", "#pmb", [(d === true && this.wlp > 0) ? this.parent.gcv(this.wlp) : "---"]);
        this.fed.ybw("maxwind", "#pmb", [(e === true && this.jfz > 0) ? this.parent.gcv(this.jfz) : "---"]);
        this.fed.ybw("lmincredit", "#hix", [f]);
        this.fed.ybw("mmincredit", "#hix", [f && this.tnq < this.parent.isj]);
        this.fed.ybw("lmaxcredit", "#hix", [d && this.wlp > this.parent.isj]);
        this.fed.ybw("mmaxcredit", "#hix", [d]);
        this.fed.ybw("lmaxwin", "#hix", [e && this.jfz > this.kop]);
        this.fed.ybw("mmaxwin", "#hix", [e]);
        if (this.jaf === false) {
            this.jyi(true);
            this.hix(true);
            this.parent.shb()
        } else {
            this.ltc();
            this.parent.ond.yxe("panel_out");
            this.parent.ond.ewm("panel_out");
            this.pbd()
        }
    };
    this.ezd = function() {
        b.jyi(false);
        if (b.jaf === false) {
            b.hix(false);
            b.parent.shb()
        } else {
            b.qmy();
            b.parent.ond.yxe("panel_out");
            b.parent.ond.ewm("panel_out");
            b.pbd()
        }
    };
    this.ltc = function() {
        this.hix(true);
        this.eaw = true;
        this.fmp = false;
        this.mlj = c;
        this.muy = Math.floor(this.width / this.glk);
        this.abj = 0;
        this.vlq = 0;
        this.ivt = new Date().getTime()
    };
    this.qmy = function() {
        this.eaw = true;
        this.fmp = false;
        this.mlj = a;
        this.muy = -Math.floor(this.width / this.glk);
        this.abj = 1;
        this.vlq = this.width;
        this.ivt = new Date().getTime()
    };
    this.pbd = function() {
        var d = b.hil,
            e = new Date().getTime();
        if (b.abj < b.glk) {
            b.vlq += b.muy;
            b.abj++;
            b.parent.shb();
            d = (((b.mlj === a) ? b.abj - 1 : b.abj) * b.hil - (e - b.ivt));
            b.zsh = setTimeout(b.pbd, d)
        } else {
            b.eaw = false;
            b.fmp = true;
            if (b.mlj == a) {
                b.hix(false);
                b.parent.pae();
                if (b.qwf === true) {
                    b.swz = setTimeout(b.parent.fhl, 200)
                }
            } else {
                if (b.mlj == c) {
                    b.jyi(true)
                }
            }
            b.parent.shb()
        }
    };
    this.stop = function() {
        clearTimeout(this.zsh);
        clearTimeout(this.meh);
        clearTimeout(this.swz);
        clearInterval(this.kph)
    };
    this.tzp = function(d) {
        this.rmj = d.xim;
        this.uta = d.dig;
        this.ixw = d.zdp;
        this.fed.ybw("start", "#pmb", [d.start]);
        this.fed.ybw("cancel", "#pmb", [d.wfp]);
        this.fed.ybw("cmincredit", "#pmb", [d.uxt]);
        this.fed.ybw("cmaxcredit", "#pmb", [d.ote]);
        this.fed.ybw("cmaxwin", "#pmb", [d.thh]);
        if (this.parent.aen === true && xzl.nfj.value44.d === true) {
            this.bcz = d.igq
        }
    };
    this.shb = function(n, m, o, j) {
        if (!this.jte()) {
            return
        }
        var f = (n != null && m != null && o != null && j != null),
            p = this.context2D,
            d = this.fed.nxo(),
            e = this.uli,
            l = this.jxh;
        if (this.lmd) {
            e = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            e.addColorStop(0, this.uli);
            e.addColorStop(1, this.lmd)
        }
        if (this.amp) {
            if (this.vlh === "center") {
                l = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height)
            } else {
                if (this.vlh === "left") {
                    l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                } else {
                    if (this.vlh === "right") {
                        l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                    }
                }
            }
            if (this.vlh === "left") {
                l.addColorStop(1, this.jxh);
                l.addColorStop(0, this.amp)
            } else {
                if (this.vlh === "center" || this.vlh === "right") {
                    l.addColorStop(0, this.jxh);
                    l.addColorStop(1, this.amp)
                }
            }
        }
        p.save();
        p.clearRect(0, 0, this.width, this.height);
        if (f) {
            p.beginPath();
            p.rect(n, m, o, j);
            p.closePath();
            p.clip()
        }
        xzl.mav.kze(p, 0, 0, this.width, this.height, this.jbe, this.ykv, this.ykv, this.jbe, e, 1, l, this.qpc, 1);
        xzl.mav.nba(p, this.kvs.x, this.kvs.y, this.kvs.width, this.kvs.height, this.aef, this.buh, this.utc, this.qpc / 2);
        xzl.mav.nba(p, this.bcc.x, this.bcc.y, this.bcc.width, this.bcc.height, this.aef, this.buh, this.utc, this.qpc / 2);
        xzl.mav.trr(p, this.rmj, this.oly, this.fsw.x, this.fsw.y, this.fsw.width, this.fsw.height, this.wrk, this.vay, this.ant);
        xzl.mav.lpa(p, this.bcz, this.zla, this.ohr.x, this.ohr.y, this.ohr.width, this.ohr.height, this.wrk, this.lqy, this.ant, "center", true);
        xzl.mav.jqe(p, this.uta, this.zla, this.nfo.x, this.nfo.y, this.nfo.width, this.nfo.height, this.wrk, this.lqy, this.ant, 0);
        xzl.mav.trr(p, this.ixw, this.zla, this.ndu.x, this.ndu.y, this.ndu.width, this.ndu.height, this.wrk, this.lqy, this.ant);
        for (var g = 0, k = d.length; g < k; g++) {
            d[g].shb()
        }
        p.restore();
        if (this.uqi && this.uvq) {
            if (this.eaw) {
                if (this.vlq > 0) {
                    if (this.vlh === "left") {
                        this.uqi.drawImage(this.uvq, this.width - this.vlq, 0, this.vlq, this.height, this.x, this.y, this.vlq, this.height)
                    } else {
                        if (this.vlh === "right") {
                            this.uqi.drawImage(this.uvq, 0, 0, this.vlq, this.height, this.x + this.width - this.vlq, this.y, this.vlq, this.height)
                        }
                    }
                }
            } else {
                if (f) {
                    this.uqi.drawImage(this.uvq, n, m, o, j, this.x + n, this.y + m, o, j)
                } else {
                    this.uqi.drawImage(this.uvq, this.x, this.y)
                }
            }
        }
    };
    this.spl = function() {
        b.parent.shb();
        if (b.wuz[b.cwq] <= 0) {
            return
        }
        if (b.jaf === false) {
            b.meh = setTimeout(b.parent.pae, 400);
            b.swz = setTimeout(b.parent.fhl, 500)
        } else {
            b.eaw = true;
            b.qwf = true;
            b.meh = setTimeout(b.ezd, 400)
        }
    };
    this.ble = function() {
        b.parent.shb();
        b.ayx = true;
        if (b.jaf === false) {
            b.meh = setTimeout(b.parent.pae, 400)
        } else {
            b.eaw = true;
            b.meh = setTimeout(b.ezd, 400)
        }
    };
    this.ftq = function() {
        b.cwq = (b.cwq < b.wuz.length - 1) ? b.cwq + 1 : 0;
        b.parent.ond.ewm("step0");
        b.fed.ybw("gamesd", "#pmb", [(b.wuz[b.cwq] > 0) ? b.wuz[b.cwq] : "---"]);
        b.parent.shb();
        return (b.cwq >= b.wuz.length - 1)
    };
    this.upl = function() {
        b.cwq = (b.cwq > 0) ? b.cwq - 1 : b.wuz.length - 1;
        b.parent.ond.ewm("step0");
        b.fed.ybw("gamesd", "#pmb", [(b.wuz[b.cwq] > 0) ? b.wuz[b.cwq] : "---"]);
        b.parent.shb();
        return (b.cwq <= 0)
    };
    this.eqm = function() {
        var d = b.fed.wqb("cmincredit") == null || b.fed.ybw("cmincredit", "#gcc");
        if (d === true) {
            if (++b.uav > 10) {
                b.ref = 10
            }
            b.tnq = (b.tnq + (b.ibg * b.ref) <= b.parent.isj) ? b.tnq + (b.ibg * b.ref) : b.parent.isj;
            b.parent.ond.ewm("step0");
            b.fed.ybw("mincreditd", "#pmb", [(b.tnq > 0) ? b.parent.gcv(b.tnq) : "---"]);
            b.fed.ybw("mmincredit", "#hix", [d && b.tnq < b.parent.isj]);
            b.fed.ybw("lmincredit", "#hix", [d && b.tnq > 0]);
            b.parent.shb();
            return (b.tnq >= b.parent.isj)
        }
        return true
    };
    this.zep = function() {
        var d = b.fed.wqb("cmincredit") == null || b.fed.ybw("cmincredit", "#gcc");
        if (d === true) {
            if (++b.uav > 10) {
                b.ref = 10
            }
            b.tnq = (b.tnq - (b.ibg * b.ref) > 0) ? b.tnq - (b.ibg * b.ref) : 0;
            b.parent.ond.ewm("step0");
            b.fed.ybw("mincreditd", "#pmb", [(b.tnq > 0) ? b.parent.gcv(b.tnq) : "---"]);
            b.fed.ybw("mmincredit", "#hix", [d && b.tnq < b.parent.isj]);
            b.fed.ybw("lmincredit", "#hix", [d && b.tnq > 0]);
            b.parent.shb();
            return (b.tnq >= b.parent.isj || b.tnq <= 0)
        }
        return true
    };
    this.jsv = function() {
        var d = b.fed.wqb("cmaxcredit") == null || b.fed.ybw("cmaxcredit", "#gcc");
        if (d === true) {
            if (++b.uav > 10) {
                b.ref = 10
            }
            b.wlp = (b.wlp + (b.kop * b.ref) > 0) ? b.wlp + (b.kop * b.ref) : 0;
            b.parent.ond.ewm("step0");
            b.fed.ybw("maxcreditd", "#pmb", [(b.wlp > 0) ? b.parent.gcv(b.wlp) : "---"]);
            b.fed.ybw("lmaxcredit", "#hix", [d && b.wlp > b.parent.isj]);
            b.parent.shb();
            return (b.wlp <= b.parent.isj)
        }
        return true
    };
    this.rqj = function() {
        var d = b.fed.wqb("cmaxcredit") == null || b.fed.ybw("cmaxcredit", "#gcc");
        if (d === true) {
            if (++b.uav > 10) {
                b.ref = 10
            }
            b.wlp = (b.wlp - (b.kop * b.ref) > b.parent.isj) ? b.wlp - (b.kop * b.ref) : b.parent.isj;
            b.parent.ond.ewm("step0");
            b.fed.ybw("maxcreditd", "#pmb", [(b.wlp > 0) ? b.parent.gcv(b.wlp) : "---"]);
            b.fed.ybw("lmaxcredit", "#hix", [d && b.wlp > b.parent.isj]);
            b.parent.shb();
            return (b.wlp <= b.parent.isj)
        }
        return true
    };
    this.nzd = function() {
        var d = b.fed.wqb("cmaxwin") == null || b.fed.ybw("cmaxwin", "#gcc");
        if (d === true) {
            if (++b.uav > 10) {
                b.ref = 10
            }
            b.jfz = (b.jfz + (b.kop * b.ref) > 0) ? b.jfz + (b.kop * b.ref) : 0;
            b.parent.ond.ewm("step0");
            b.fed.ybw("maxwind", "#pmb", [(b.jfz > 0) ? b.parent.gcv(b.jfz) : "---"]);
            b.fed.ybw("lmaxwin", "#hix", [d && b.jfz > b.kop]);
            b.parent.shb();
            return (b.jfz <= b.kop)
        }
        return true
    };
    this.kyf = function() {
        var d = b.fed.wqb("cmaxwin") == null || b.fed.ybw("cmaxwin", "#gcc");
        if (d === true) {
            if (++b.uav > 10) {
                b.ref = 10
            }
            b.jfz = (b.jfz - (b.kop * b.ref) > 0) ? b.jfz - (b.kop * b.ref) : b.kop;
            b.parent.ond.ewm("step0");
            b.fed.ybw("maxwind", "#pmb", [(b.jfz > 0) ? b.parent.gcv(b.jfz) : "---"]);
            b.fed.ybw("lmaxwin", "#hix", [d && b.jfz > b.kop]);
            b.parent.shb();
            return (b.jfz <= b.kop)
        }
        return true
    };
    this.liw = function() {
        var d = b.fed.wqb("cmincredit") == null || b.fed.ybw("cmincredit", "#gcc");
        b.tnq = b.parent.isj;
        b.fed.ybw("mincreditd", "#pmb", [(d === true && b.tnq > 0) ? b.parent.gcv(b.tnq) : "---"]);
        b.fed.ybw("lmincredit", "#hix", [d]);
        b.fed.ybw("mmincredit", "#hix", [d && b.tnq < b.parent.isj]);
        b.parent.shb()
    };
    this.muu = function() {
        var d = b.fed.wqb("cmaxcredit") == null || b.fed.ybw("cmaxcredit", "#gcc");
        b.wlp = b.parent.isj;
        b.fed.ybw("maxcreditd", "#pmb", [(d === true && b.wlp > 0) ? b.parent.gcv(b.wlp) : "---"]);
        b.fed.ybw("lmaxcredit", "#hix", [d && b.wlp > b.parent.isj]);
        b.fed.ybw("mmaxcredit", "#hix", [d]);
        b.parent.shb()
    };
    this.dfz = function() {
        var d = b.fed.wqb("cmaxwin") == null || b.fed.ybw("cmaxwin", "#gcc");
        if (b.jfz === 0) {
            b.jfz = b.kop
        }
        b.fed.ybw("maxwind", "#pmb", [(d === true && b.jfz > 0) ? b.parent.gcv(b.jfz) : "---"]);
        b.fed.ybw("lmaxwin", "#hix", [d && b.jfz > b.kop]);
        b.fed.ybw("mmaxwin", "#hix", [d]);
        b.parent.shb()
    }
}
dnd.prototype = new lhc;

function nze() {
    this.jmc = "right";
    this.vwu = "left";
    this.ckh = null;
    this.cbl = null;
    this.rmj = null;
    this.yjz = -1;
    this.lxw = -1;
    this.fmp = true;
    this.wyc = false;
    this.iwj = false;
    this.eaw = false;
    this.vhl = 0;
    this.zli = 0;
    this.nuh = [];
    this.axf = 0;
    this.lkn = 0;
    this.dmh = 1;
    this.tkf = 0;
    this.mns = 0;
    this.vlh = this.jmc;
    this.wrk = null;
    this.ant = "bold";
    this.zla = "rgb(255,255,255)";
    this.uli = "rgb(0,0,0)";
    this.bog = "rgb(0,0,0)";
    this.siy = "rgb(0,0,0)";
    this.bxi = 0.7;
    this.tzu = null;
    this.uqw = null;
    this.fwd = null;
    this.vep = new gvm();
    this.zlk = new gvm();
    this.haj = new gvm();
    this.fsw = new gvm();
    this.qpc = 2;
    this.avb = 5;
    this.pkn = 4;
    this.bak = 10;
    this.daz = 5;
    this.hfi = 15;
    var a = 200;
    this.vuf = function(c, d, f) {
        this.nuh = [];
        this.vhl = (d < 0) ? 0 : d;
        this.zli = (f < 0) ? 0 : f;
        for (var e = this.vhl, b = 0; e <= this.zli; e++) {
            this.nuh[b++] = c[e]
        }
        this.axf = this.nuh.length;
        this.tkf = this.vep.height / this.axf
    };
    this.jlm = function(b) {
        try {
            this.hfi = b.fontSize;
            this.qpc = b.vqq;
            this.avb = b.biz;
            this.pkn = b.xho;
            this.bak = b.ejl;
            this.daz = b.bqe;
            this.vep = new gvm(b.mza.x, b.mza.y + b.djb, b.mza.width, b.mza.height - 2 * b.djb);
            this.zlk = new gvm(b.mza.x, b.mza.y, b.mza.width, b.djb);
            this.haj = new gvm(b.mza.x, b.mza.y + b.mza.height - b.djb, b.mza.width, b.djb);
            this.fsw = b.dzb
        } catch (c) {
            console.error(c)
        }
    };
    this.png = function(b) {
        try {
            this.wrk = b.font;
            this.ant = b.yzb;
            this.zla = b.ded;
            this.uli = b.backgroundColor;
            this.bog = b.pjn;
            this.siy = b.hhp;
            this.bxi = b.hbu;
            this.uqw = this.context2D.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            this.uqw.addColorStop(0, b.ynj);
            this.uqw.addColorStop(1, b.ujm);
            this.tzu = this.context2D.createLinearGradient(this.vep.x, 0, this.vep.x + this.vep.width, 0);
            this.fwd = this.context2D.createLinearGradient(this.width, this.height / 2, 0, this.height / 2);
            if (this.vlh === this.jmc) {
                this.tzu.addColorStop(0, b.nfc);
                this.tzu.addColorStop(1, b.eug);
                this.fwd.addColorStop(0, b.gke);
                this.fwd.addColorStop(1, b.gcs)
            } else {
                if (this.vlh === this.vwu) {
                    this.tzu.addColorStop(0, b.eug);
                    this.tzu.addColorStop(1, b.nfc);
                    this.fwd.addColorStop(0, b.gcs);
                    this.fwd.addColorStop(1, b.gke)
                }
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.xuh = function(b, f, c) {
        if (this.eaw || !this.fmp || this.iwj) {
            return true
        }
        if ((b < this.x || b > this.x + this.width || f < this.y || f > this.y + this.height)) {
            return false
        } else {
            var e = b - this.x,
                d = f - this.y;
            if (this.haj.aoo(e, d)) {
                this.fvm(-1);
                this.ewm();
                this.cgt(true, true)
            } else {
                if (this.zlk.aoo(e, d)) {
                    this.fvm(1);
                    this.ewm();
                    this.cgt(true, true)
                } else {
                    if (this.vep.aoo(e, d)) {
                        this.wyc = true;
                        this.mwm(f);
                        this.cgt(true, true)
                    }
                }
            }
            this.oyg(this.lkn);
            return true
        }
    };
    this.xak = function() {
        if (this.wyc) {
            this.wyc = false;
            this.ewm();
            return true
        }
        return false
    };
    this.dqi = function(b) {
        if (this.eaw || !this.fmp || this.iwj) {
            return true
        }
        if (b == this.lxw) {
            this.fvm(-1);
            this.ewm();
            this.cgt(true, true);
            this.oyg(this.lkn);
            return true
        } else {
            if (b == this.yjz) {
                this.fvm(1);
                this.ewm();
                this.cgt(true, true);
                this.oyg(this.lkn);
                return true
            }
        }
        return false
    };
    this.ywi = function() {};
    this.aqy = function(b, d, c) {
        if (!this.wyc) {
            return false
        }
        if (b >= this.x + this.vep.x && b <= this.x + this.vep.x + this.vep.width && d >= this.y + this.vep.y && d <= this.y + this.vep.y + this.vep.height) {
            this.mwm(d);
            this.oyg(this.lkn);
            return true
        }
        return false
    };
    this.cgt = function(b, c) {
        this.iwj = b;
        c = (c === false) ? false : true;
        clearTimeout(this.dku);
        if (this.iwj === true && c === true) {
            this.dku = setTimeout(this.unn, a)
        }
    };
    this.unn = function() {};
    this.oyg = function(b) {};
    this.ewm = function() {};
    this.hgc = function(b, c) {
        this.vhl = (b < 0) ? 0 : b;
        this.zli = (c < 0) ? 0 : c;
        if (this.nuh) {
            this.zli = (this.zli > this.nuh.length - 1) ? this.nuh.length - 1 : this.zli
        }
    };
    this.wbw = function() {
        this.hix(true, true)
    };
    this.ezd = function() {
        this.hix(false, true)
    };
    this.osq = function(b) {
        this.fmp = b
    };
    this.zrf = function() {
        return this.fmp
    };
    this.xsb = function(b, c) {
        this.lkn = b;
        if (this.lkn < this.vhl) {
            this.lkn = this.vhl
        }
        if (this.lkn >= this.zli) {
            this.lkn = this.zli
        }
        this.dmh = this.lkn + 1;
        if (c && c === true) {
            this.parent.shb()
        }
    };
    this.zkl = function(d, e) {
        this.lkn = 0;
        for (var c = 0, b = this.nuh.length; c < b; c++) {
            if (this.nuh[c] == d) {
                this.lkn = c;
                break
            }
        }
        this.lkn = (this.lkn >= this.vhl) ? this.lkn : this.vhl;
        this.lkn = (this.lkn < this.zli) ? this.lkn : this.zli;
        this.dmh = this.lkn + 1;
        if (e) {
            this.parent.shb()
        }
    };
    this.mwm = function(b) {
        this.lkn = Math.ceil(((this.vep.height) - (b - this.vep.y - this.y)) / this.tkf) - 1;
        this.lkn = (this.lkn >= this.vhl) ? this.lkn : this.vhl;
        this.lkn = (this.lkn < this.zli) ? this.lkn : this.zli;
        this.dmh = this.lkn + 1;
        this.parent.shb()
    };
    this.fvm = function(b) {
        this.lkn += b;
        this.lkn = (this.lkn >= this.vhl) ? this.lkn : this.vhl;
        this.lkn = (this.lkn < this.zli) ? this.lkn : this.zli;
        this.dmh = this.lkn + 1;
        this.parent.shb()
    };
    this.shb = function() {
        if (!this.jte() || !this.parent.dst()) {
            return
        }
        this.dyz();
        if (this.uqi && this.uvq) {
            this.uqi.drawImage(this.jar, this.x, this.y)
        }
    };
    this.dyz = function() {
        var b = this.context2D;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        this.mcm(b);
        this.ovj(b);
        this.crm(b);
        this.njq(b);
        this.ywg(b);
        b.restore()
    };
    this.mcm = function(b) {
        if (this.vlh === this.vwu) {
            xzl.mav.kze(b, 0, 0, this.width, this.height, this.avb, 0, 0, this.avb, this.uli, 0.4, this.fwd, this.qpc, 1)
        } else {
            if (this.vlh === this.jmc) {
                xzl.mav.kze(b, 0, 0, this.width, this.height, 0, this.avb, this.avb, 0, this.uli, 0.4, this.fwd, this.qpc, 1)
            }
        }
    };
    this.ovj = function(b) {
        xzl.mav.snb(b, this.vep.x, this.vep.y, this.vep.width, this.vep.height, this.bog, 1)
    };
    this.crm = function(b) {
        xzl.mav.snb(b, this.vep.x, this.vep.y + this.vep.height - Math.round(this.dmh * this.tkf), this.vep.width, Math.round(this.dmh * this.tkf), this.uqw, 1)
    };
    this.njq = function(b) {
        xzl.mav.snb(b, this.vep.x - this.pkn, this.vep.y - this.pkn, this.vep.width + 2 * this.pkn, this.vep.height + 2 * this.pkn, null, 0, this.tzu, this.pkn, 1);
        if (this.vlh === this.vwu) {
            xzl.mav.kze(b, this.vep.x - this.pkn, this.zlk.y, this.vep.width + 2 * this.pkn, this.zlk.height, this.bak, 0, 0, 0, this.tzu, 1);
            xzl.mav.kze(b, this.vep.x - this.pkn, this.haj.y, this.vep.width + 2 * this.pkn, this.haj.height, 0, 0, 0, this.bak, this.tzu, 1)
        } else {
            if (this.vlh === this.jmc) {
                xzl.mav.kze(b, this.vep.x - this.pkn, this.zlk.y, this.vep.width + 2 * this.pkn, this.zlk.height, 0, this.bak, 0, 0, this.tzu, 1);
                xzl.mav.kze(b, this.vep.x - this.pkn, this.haj.y, this.vep.width + 2 * this.pkn, this.haj.height, 0, 0, this.bak, 0, this.tzu, 1)
            }
        }
        b.strokeStyle = this.tzu;
        b.lineWidth = Math.round(this.pkn / 4);
        b.beginPath();
        for (var c = 1; c < this.axf; c++) {
            b.moveTo(this.vep.x, this.vep.y + this.vep.height - Math.round(c * this.tkf));
            b.lineTo(this.vep.x + this.vep.width, this.vep.y + this.vep.height - Math.round(c * this.tkf))
        }
        b.closePath();
        b.stroke();
        if (this.ckh) {
            if (this.vlh === this.vwu) {
                b.drawImage(this.ckh, 0, 0, this.ckh.width / 2, this.ckh.height, this.vep.x, this.vep.y, this.vep.width, this.vep.height)
            } else {
                if (this.vlh === this.jmc) {
                    b.drawImage(this.ckh, this.ckh.width / 2, 0, this.ckh.width / 2, this.ckh.height, this.vep.x, this.vep.y, this.vep.width, this.vep.height)
                }
            }
        }
    };
    this.ywg = function(c) {
        var f = this.zla,
            e = this.zla,
            b = 0,
            d = 0;
        if (this.vlh === this.vwu) {
            b = this.daz;
            d = this.vep.x - 2 * this.daz
        } else {
            if (this.vlh === this.jmc) {
                b = this.vep.x + this.vep.width + this.daz;
                d = this.width - this.daz - (this.vep.x + this.vep.width + this.daz)
            }
        }
        if (this.lkn > 0 && this.lkn < this.nuh.length - 1) {
            xzl.mav.snb(c, b, this.vep.y + ((this.axf - this.dmh) * this.tkf), d, this.tkf, this.siy, this.bxi);
            xzl.mav.glp(c, this.nuh[this.lkn], this.uqw, b, this.vep.y + ((this.axf - this.dmh) * this.tkf) + (this.tkf - this.hfi) / 2, d, this.hfi, this.wrk, this.hfi, this.ant, this.daz)
        } else {
            if (this.lkn == 0) {
                f = this.uqw
            } else {
                if (this.lkn == this.nuh.length - 1) {
                    e = this.uqw
                }
            }
        }
        xzl.mav.snb(c, b, this.vep.y + (this.tkf * (this.axf - 1)), d, this.tkf, this.siy, this.bxi);
        xzl.mav.glp(c, this.nuh[0], f, b, this.vep.y + (this.tkf * (this.axf - 1)) + (this.tkf - this.hfi) / 2, d, this.hfi, this.wrk, this.hfi, this.ant, this.daz);
        xzl.mav.snb(c, b, this.vep.y, d, this.tkf, this.siy, this.bxi);
        xzl.mav.glp(c, this.nuh[this.nuh.length - 1], e, b, this.vep.y + (this.tkf - this.hfi) / 2, d, this.hfi, this.wrk, this.hfi, this.ant, this.daz);
        xzl.mav.trr(c, "+", this.zla, this.zlk.x, this.zlk.y, this.zlk.width, this.zlk.height, this.wrk, this.hfi, this.ant);
        xzl.mav.trr(c, "", this.zla, this.haj.x, this.haj.y, this.haj.width, this.haj.height, this.wrk, this.hfi, this.ant);
        if (this.rmj) {
            xzl.mav.trr(c, this.rmj, this.zla, this.fsw.x, this.fsw.y, this.fsw.width, this.fsw.height, this.wrk, this.hfi, this.ant)
        }
    }
}
nze.prototype = new lhc;

function ycw() {
    var a = this;
    this.fed = null;
    this.uxk = false;
    this.bnn = "";
    this.wlr = "";
    this.xcj = "";
    this.gzp = "";
    this.bcz = "";
    this.uta = "";
    this.ixw = "";
    this.wrk = "arial";
    this.ant = "bold";
    this.zla = "white";
    this.uli = "black";
    this.lmd = null;
    this.jxh = "white";
    this.amp = "rgb(150,150,150)";
    this.qpc = 3;
    this.avb = 4;
    this.rwo = 24;
    this.arq = 24;
    this.lqy = 24;
    this.ckx = new gvm();
    this.ujo = new gvm();
    this.nei = new gvm();
    this.cxh = new gvm();
    this.ubz = new gvm();
    this.qtu = new gvm();
    this.get = new gvm();
    this.wuz = [];
    this.cwq = 0;
    this.ibg = 0;
    this.kop = 0;
    this.paf = 0;
    this.uvf = 0;
    this.tnq = 0;
    this.wlp = 0;
    this.jfz = 0;
    this.uoo = false;
    this.qdh = false;
    this.lkn = 0;
    this.vba = true;
    this.jil = true;
    this.vtf = null;
    this.kph = 0;
    this.uav = 0;
    this.ref = 1;
    this.gdb = 250;
    this.tqg = function(b, d, c) {
        ycw.prototype.tqg.call(this, b, d, c);
        this.fed = new ccr();
        this.fed.tqg();
        this.fed.qzf("buttons");
        this.fed.qzf("displays");
        this.fed.qzf("checkboxes");
        this.fed.qzf("lbuttons");
        this.fed.qzf("mbuttons");
        this.fed.qzf("tbuttons");
        this.fed.qzf("bbuttons");
        this.fed.qzf("bdisplays");
        this.fed.qzf("abuttons");
        this.fed.qzf("adisplays");
        this.fed.qzf("acheckboxes");
        this.fed.qzf("sbuttons");
        this.fed.qzf("hbuttons")
    };
    this.lsi = function(b) {
        try {
            this.asl(b);
            this.dmq(b);
            this.gwc(b)
        } catch (c) {
            console.error(c)
        }
    };
    this.png = function(b) {
        try {
            var c = this.fed.ebo("lbuttons"),
                n = this.fed.ebo("mbuttons"),
                k = this.fed.ebo("tbuttons"),
                m = this.fed.ebo("sbuttons"),
                l = this.fed.ebo("hbuttons"),
                f = this.fed.ebo("displays");
            this.wrk = b.font;
            this.ant = b.yzb;
            this.zla = b.ded;
            this.uli = b.backgroundColor;
            this.lmd = b.qmm;
            this.jxh = b.borderColor;
            this.amp = b.leq;
            for (var d = 0, g = c.length; d < g; d++) {
                c[d].png(b.phz)
            }
            for (var d = 0, g = n.length; d < g; d++) {
                n[d].png(b.esv)
            }
            for (var d = 0, g = k.length; d < g; d++) {
                k[d].png(b.hhj)
            }
            for (var d = 0, g = f.length; d < g; d++) {
                f[d].png(b.display)
            }
            for (var d = 0, g = m.length; d < g; d++) {
                m[d].png(b.sxd)
            }
            for (var d = 0, g = l.length; d < g; d++) {
                l[d].png(b.sxd)
            }
            this.fed.sce("checkboxes", "#png", [b.vlp])
        } catch (j) {
            console.error(j)
        }
    };
    this.jlm = function(g) {
        try {
            var b = this.fed.ebo("lbuttons"),
                o = this.fed.ebo("mbuttons"),
                l = this.fed.ebo("tbuttons"),
                n = this.fed.ebo("sbuttons"),
                m = this.fed.ebo("hbuttons"),
                c = this.fed.ebo("bdisplays"),
                f = this.fed.ebo("adisplays");
            sje = this.fed.ebo("checkboxes"), num = n.length, zac = (num <= 2) ? g.rxb : (num <= 3) ? g.qrx : (num <= 4) ? g.chw : g.gth, num = m.length, jrl = (num <= 2) ? g.rxb : (num <= 3) ? g.qrx : (num <= 4) ? g.chw : g.gth, azy = (this.parent.bdi() != null) ? g.ihj : g.lwb;
            this.qpc = g.vqq;
            this.avb = g.biz;
            this.rwo = g.gjt;
            this.arq = g.jck;
            this.lqy = g.znk;
            this.ckx = g.ygb;
            this.ujo = g.tyu;
            this.nei = g.urk;
            this.cxh = g.bdw;
            this.ubz = g.yha;
            this.qtu = g.uhf;
            this.get = g.fhy;
            this.fed.ybw("bett", "#tzs", [azy.aws]);
            this.fed.ybw("autot", "#tzs", [azy.nnu]);
            this.fed.ybw("helpt", "#tzs", [azy.eie]);
            this.fed.ybw("settingt", "#tzs", [azy.ose]);
            this.fed.ybw("returnt", "#tzs", [azy.aad]);
            this.fed.ybw("lbet", "#tzs", [g.ler]);
            this.fed.ybw("mbet", "#tzs", [g.ono]);
            this.fed.ybw("llines", "#tzs", [g.nml]);
            this.fed.ybw("mlines", "#tzs", [g.uzp]);
            this.fed.ybw("betd", "#tzs", [g.oap]);
            this.fed.ybw("linesd", "#tzs", [g.dyy]);
            this.fed.ybw("totald", "#tzs", [g.smd]);
            this.fed.ybw("lgames", "#tzs", [g.sbr]);
            this.fed.ybw("mgames", "#tzs", [g.afq]);
            this.fed.ybw("lmincredit", "#tzs", [g.jdw]);
            this.fed.ybw("mmincredit", "#tzs", [g.hcg]);
            this.fed.ybw("lmaxcredit", "#tzs", [g.frw]);
            this.fed.ybw("mmaxcredit", "#tzs", [g.lwe]);
            this.fed.ybw("lmaxwin", "#tzs", [g.xwp]);
            this.fed.ybw("mmaxwin", "#tzs", [g.yjj]);
            this.fed.ybw("gamesd", "#tzs", [g.lsf]);
            this.fed.ybw("mincreditd", "#tzs", [g.faq]);
            this.fed.ybw("maxcreditd", "#tzs", [g.vmw]);
            this.fed.ybw("maxwind", "#tzs", [g.voi]);
            this.fed.ybw("cmincredit", "#tzs", [g.rme]);
            this.fed.ybw("cmaxcredit", "#tzs", [g.mqw]);
            this.fed.ybw("cmaxwin", "#tzs", [g.ony]);
            for (var d = 0, j = b.length; d < j; d++) {
                b[d].jlm(g.phz)
            }
            for (var d = 0, j = o.length; d < j; d++) {
                o[d].jlm(g.esv)
            }
            for (var d = 0, j = l.length; d < j; d++) {
                l[d].jlm(g.hhj)
            }
            for (var d = 0, j = c.length; d < j; d++) {
                c[d].jlm(g.qsy)
            }
            for (var d = 0, j = f.length; d < j; d++) {
                f[d].jlm(g.hib)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].jlm(g.sxd)
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].jlm(g.sxd)
            }
            for (var d = 0, j = sje.length; d < j; d++) {
                sje[d].jlm(g.vlp)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].tzs(zac[d])
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].tzs(jrl[d])
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.asl = function(c) {
        var b = (this.parent.bdi() != null) ? c.ihj : c.lwb;
        this.fed.ovw("bett", this.rzz(b.aws, null, this.parent.ond.jcf("btn_b"), this.mll, null), ["buttons", "tbuttons"]);
        if (this.parent.bdi() != null) {
            this.fed.ovw("autot", this.rzz(b.nnu, null, this.parent.ond.jcf("btn_as"), this.yoy, null), ["buttons", "tbuttons"])
        }
        this.fed.ovw("helpt", this.rzz(b.eie, null, this.parent.ond.jcf("btn_i"), this.hhz, null), ["buttons", "tbuttons"]);
        this.fed.ovw("settingt", this.rzz(b.ose, null, this.parent.ond.jcf("btn_se"), this.twk, null), ["buttons", "tbuttons"]);
        this.fed.ovw("returnt", this.rzz(b.aad, null, this.parent.ond.jcf("btn_c"), this.kef, null), ["buttons", "tbuttons"])
    };
    this.dmq = function(b) {
        this.fed.ovw("betd", this.atr(b.oap, null, this.parent.luj), ["displays", "bdisplays"]);
        this.fed.ovw("lbet", this.wfn(b.ler, "", this.parent.jkn), ["buttons", "lbuttons", "bbuttons"]);
        this.fed.ovw("mbet", this.wfn(b.ono, "+", this.parent.ygn), ["buttons", "mbuttons", "bbuttons"]);
        this.fed.ovw("linesd", this.atr(b.dyy, null, this.parent.fil), ["displays", "bdisplays"]);
        if (this.uxk) {
            this.fed.ovw("llines", this.wfn(b.nml, "", this.parent.fsz), ["buttons", "lbuttons", "bbuttons"]);
            this.fed.ovw("mlines", this.wfn(b.uzp, "+", this.parent.ahs), ["buttons", "mbuttons", "bbuttons"])
        }
        this.fed.ovw("totald", this.atr(b.smd, null, this.parent.tlp()), ["displays", "bdisplays"])
    };
    this.gwc = function(b) {
        this.fed.ovw("gamesd", this.atr(b.lsf, null, this.wuz[this.cwq]), ["displays", "adisplays"]);
        this.fed.ovw("lgames", this.wfn(b.sbr, "", this.upl), ["buttons", "lbuttons", "abuttons"]);
        this.fed.ovw("mgames", this.wfn(b.afq, "+", this.ftq), ["buttons", "mbuttons", "abuttons"]);
        this.fed.ovw("mincreditd", this.atr(b.faq, null, "---"), ["displays", "adisplays"]);
        this.fed.ovw("lmincredit", this.wfn(b.jdw, "", this.zep), ["buttons", "lbuttons", "abuttons"]);
        this.fed.ovw("mmincredit", this.wfn(b.hcg, "+", this.eqm), ["buttons", "mbuttons", "abuttons"]);
        this.fed.ovw("maxcreditd", this.atr(b.vmw, null, "---"), ["displays", "adisplays"]);
        this.fed.ovw("lmaxcredit", this.wfn(b.frw, "", this.rqj), ["buttons", "lbuttons", "abuttons"]);
        this.fed.ovw("mmaxcredit", this.wfn(b.lwe, "+", this.jsv), ["buttons", "mbuttons", "abuttons"]);
        this.fed.ovw("maxwind", this.atr(b.voi, null, "---"), ["displays", "adisplays"]);
        this.fed.ovw("lmaxwin", this.wfn(b.xwp, "", this.kyf), ["buttons", "lbuttons", "abuttons"]);
        this.fed.ovw("mmaxwin", this.wfn(b.yjj, "+", this.nzd), ["buttons", "mbuttons", "abuttons"]);
        this.fed.ovw("cmincredit", this.erl(b.rme, "", this.liw), ["checkboxes", "acheckboxes"]);
        this.fed.ovw("cmaxcredit", this.erl(b.mqw, "", this.muu), ["checkboxes", "acheckboxes"]);
        this.fed.ovw("cmaxwin", this.erl(b.ony, "", this.dfz), ["checkboxes", "acheckboxes"])
    };
    this.jnd = function(i, g, f, e, d, b) {
        var c = new oja();
        c.tqg(new gvm(0, 0, 1, 1), this.context2D);
        c.parent = this;
        c.oyg = e;
        c.igj = g;
        c.ona(d, b);
        c.jlm(this.parent.asz.zxp.sxd);
        c.png(this.parent.style.zxp.sxd);
        c.hnt(f);
        this.fed.ovw(i, c, ["buttons", "sbuttons"])
    };
    this.ffy = function(f, e, d, c) {
        var b = new oja();
        b.tqg(new gvm(0, 0, 1, 1), this.context2D);
        b.parent = this;
        b.oyg = c;
        b.igj = e;
        b.jlm(this.parent.asz.zxp.sxd);
        b.png(this.parent.style.zxp.sxd);
        b.hnt(d);
        this.fed.ovw(f, b, ["buttons", "hbuttons"])
    };
    this.atr = function(b, e, d) {
        var c = new ntr();
        c.tqg(b, this.context2D, null, e, d);
        c.parent = this;
        return c
    };
    this.wfn = function(c, e, d) {
        var b = new gyy();
        b.tqg(c, this.context2D, null, null, e);
        b.parent = this;
        b.oyg = d;
        return b
    };
    this.rzz = function(d, g, f, e, c) {
        var b = new gyy();
        b.tqg(d, this.context2D, null, f, g);
        b.parent = this;
        b.oyg = e;
        if (c != null) {
            b.wwt = c
        }
        return b
    };
    this.erl = function(c, e, d) {
        var b = new qjs();
        b.tqg(c, this.context2D, null, e);
        b.parent = this;
        b.oyg = d;
        return b
    };
    this.xuh = function(o, n) {
        var m = this.fed.ebo("buttons"),
            g = this.fed.ebo("checkboxes"),
            f = o - this.x,
            d = n - this.y;
        for (var e = 0, l = m.length; e < l; e++) {
            var b = m[e];
            if (f >= b.x && f <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.jte() === true) {
                if (b.zrf() === true && b.tmp() === false) {
                    if (b instanceof oja) {
                        this.parent.ond.yxe("btn");
                        this.parent.ond.ewm("btn");
                        b.svq(true, true, true);
                        b.oyg()
                    } else {
                        if (b instanceof gyy) {
                            if (b.wyd() === "rect") {
                                this.parent.ond.yxe("btn");
                                this.parent.ond.ewm("btn");
                                b.svq(true, true, false);
                                b.oyg()
                            } else {
                                b.svq(true, false, false);
                                this.uav = 0;
                                this.ref = 1;
                                if (b.oyg() === false) {
                                    this.vtf = function() {
                                        if (b.oyg() === true) {
                                            clearInterval(a.kph);
                                            b.svq(false, true);
                                            for (var i = 0; i < l; i++) {
                                                m[i].cgt(false)
                                            }
                                        }
                                    };
                                    this.kph = setInterval(this.vtf, this.gdb)
                                }
                            }
                        }
                    }
                    for (var c = 0; c < l; c++) {
                        m[c].cgt(true)
                    }
                    return true
                }
            }
        }
        for (var e = 0, l = g.length; e < l; e++) {
            var k = g[e];
            if (f >= k.x && f <= k.x + k.width && d >= k.y && d <= k.y + k.height) {
                if (k.jte() === true && k.zrf() === true) {
                    k.ouv(!k.gcc(), true);
                    k.oyg();
                    for (var c = 0; c < l; c++) {
                        g[c].cgt(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.xak = function() {
        var e = this.fed.ebo("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.maw() == true && !(c instanceof gyy && c.wyd() === "rect")) {
                clearInterval(this.kph);
                c.svq(false, true);
                return true
            }
        }
        return false
    };
    this.dqi = function(b) {};
    this.ywi = function(b) {};
    this.nee = function(c, b, d) {
        this.fed.ybw("betd", "#pmb", [c]);
        this.fed.ybw("linesd", "#pmb", [b]);
        this.fed.ybw("totald", "#pmb", [d]);
        this.parent.shb()
    };
    this.unr = function(b) {
        this.wuz = b.g;
        this.ibg = b.v;
        this.kop = b.v;
        this.uoo = b.r;
        this.qdh = b.l;
        if (typeof b.m != "undefined" && b.m != null && b.m > 0) {
            this.paf = b.m;
            this.uvf = b.m
        }
    };
    this.kxh = function() {
        if (this.uoo === true) {
            this.tnq = this.parent.isj;
            this.wlp = this.parent.isj;
            this.cwq = 0;
            this.jfz = 0
        }
    };
    this.gjk = function() {
        if (this.wuz.length > 0 && this.cwq >= 0) {
            return this.wuz[this.cwq]
        }
        return 0
    };
    this.jxa = function() {
        var b = this.fed.wqb("cmincredit") == null || this.fed.ybw("cmincredit", "#gcc");
        if (this.tnq > 0 && b === true) {
            return this.tnq
        }
        return 0
    };
    this.uln = function() {
        var b = this.fed.wqb("cmaxcredit") == null || this.fed.ybw("cmaxcredit", "#gcc");
        if (this.wlp > 0 && b === true) {
            return this.wlp
        }
        return 0
    };
    this.xgg = function() {
        var b = this.fed.wqb("cmaxwin") == null || this.fed.ybw("cmaxwin", "#gcc");
        if (this.jfz > 0 && b === true) {
            return this.jfz
        }
        return 0
    };
    this.wbw = function(c, f, d) {
        if (this.wuz && this.wuz.length > 0) {
            var g = this.fed.wqb("cmincredit") == null || this.fed.ybw("cmincredit", "#gcc"),
                e = this.fed.wqb("cmaxcredit") == null || this.fed.ybw("cmaxcredit", "#gcc"),
                b = this.fed.wqb("cmaxwin") == null || this.fed.ybw("cmaxwin", "#gcc");
            if (this.uoo === true) {
                g = this.qdh;
                e = false;
                b = false;
                this.kxh()
            } else {
                if (this.qdh === true) {
                    g = true;
                    this.tnq = (this.tnq < this.parent.isj) ? this.tnq : this.parent.isj;
                    this.tnq = (this.tnq > 0) ? this.tnq : this.parent.isj
                } else {
                    g = (this.tnq < this.parent.isj) ? g : false;
                    this.tnq = (this.tnq < this.parent.isj) ? this.tnq : this.parent.isj
                }
                e = (this.wlp > this.parent.isj) ? e : false;
                this.wlp = (this.wlp > this.parent.isj) ? this.wlp : this.parent.isj
            }
            this.fed.ybw("cmincredit", "#ouv", [g]);
            this.fed.ybw("cmaxcredit", "#ouv", [e]);
            this.fed.ybw("cmaxwin", "#ouv", [b]);
            this.fed.ybw("gamesd", "#pmb", [(this.wuz[this.cwq] > 0) ? this.wuz[this.cwq] : "---"]);
            this.fed.ybw("mincreditd", "#pmb", [(g === true && this.tnq > 0) ? this.parent.gcv(this.tnq) : "---"]);
            this.fed.ybw("maxcreditd", "#pmb", [(e === true && this.wlp > 0) ? this.parent.gcv(this.wlp) : "---"]);
            this.fed.ybw("maxwind", "#pmb", [(b === true && this.jfz > 0) ? this.parent.gcv(this.jfz) : "---"]);
            this.fed.ybw("lmincredit", "#hix", [g]);
            this.fed.ybw("mmincredit", "#hix", [g]);
            this.fed.ybw("lmaxcredit", "#hix", [e]);
            this.fed.ybw("mmaxcredit", "#hix", [e]);
            this.fed.ybw("lmaxwin", "#hix", [b]);
            this.fed.ybw("mmaxwin", "#hix", [b])
        }
        this.vba = c;
        this.jil = f;
        if (typeof d == "number") {
            if (d === 0) {
                this.mll()
            } else {
                if (d === 1) {
                    if (this.parent.bdi() != null) {
                        this.yoy()
                    } else {
                        this.hhz()
                    }
                } else {
                    if (d === 2) {
                        if (this.parent.bdi() != null) {
                            this.hhz()
                        } else {
                            this.twk()
                        }
                    } else {
                        if (d === 3 && this.parent.bdi() != null) {
                            this.twk()
                        }
                    }
                }
            }
        } else {
            this.mll()
        }
        this.fed.sce("tbuttons", "#osq", [true]);
        this.hix(true);
        this.parent.shb()
    };
    this.ezd = function() {
        this.fed.sce("tbuttons", "#osq", [false]);
        this.fed.sce("bbuttons", "#osq", [false]);
        this.fed.sce("sbuttons", "#osq", [false]);
        this.fed.sce("abuttons", "#osq", [false]);
        this.fed.sce("acheckboxes", "#osq", [false]);
        this.hix(false);
        this.parent.shb()
    };
    this.stop = function() {
        clearInterval(this.kph)
    };
    this.tzp = function(d, b) {
        var c = "";
        this.fed.ybw("language", "#pmb", [xzl.mdj.bnt(d.language)]);
        this.fed.ybw("audio", "#pmb", [xzl.mdj.bnt(d.audio)]);
        this.fed.ybw("melody", "#pmb", [xzl.mdj.bnt(d.asj)]);
        this.fed.ybw("fullscreen", "#pmb", [xzl.mdj.bnt(d.dtv)]);
        this.fed.ybw("turbo", "#pmb", [xzl.mdj.bnt(d.rze)]);
        this.fed.ybw("help", "#pmb", [xzl.mdj.bnt(d.ghw)]);
        this.fed.ybw("history", "#pmb", [xzl.mdj.bnt(d.rhf)]);
        this.fed.ybw("statistic", "#pmb", [xzl.mdj.bnt(d.cec)]);
        this.fed.ybw("rules", "#pmb", [xzl.mdj.bnt(d.zji)]);
        this.fed.ybw("gamble", "#pmb", [xzl.mdj.bnt(d.lvo)]);
        if (xzl.mdj.hvx[xzl.mdj.yjp] === xzl.bmv.vwu) {
            c = xzl.mdj.bnt(d.left)
        } else {
            if (xzl.mdj.hvx[xzl.mdj.yjp] === xzl.bmv.jmc) {
                c = xzl.mdj.bnt(d.zzj)
            } else {
                if (xzl.mdj.hvx[xzl.mdj.yjp] === xzl.bmv.mpr) {
                    c = xzl.mdj.bnt(d.kno)
                }
            }
        }
        this.fed.ybw("adjustment", "#pmb", [c]);
        if (b && b === true) {
            this.bnn = xzl.mdj.bnt(d.vpv) + "/" + xzl.mdj.bnt(d.fev) + ":";
            this.wlr = xzl.mdj.bnt(d.fil) + ":"
        } else {
            this.bnn = xzl.mdj.bnt(d.vpv) + ":"
        }
        this.xcj = xzl.mdj.bnt(d.mne) + ":";
        this.uta = xzl.mdj.bnt(d.dig);
        this.ixw = xzl.mdj.bnt(d.zdp);
        if (this.parent.aen === true && xzl.nfj.value44.d === true) {
            this.bcz = xzl.mdj.bnt(d.igq)
        }
        this.fed.ybw("cmincredit", "#pmb", [xzl.mdj.bnt(d.uxt)]);
        this.fed.ybw("cmaxcredit", "#pmb", [xzl.mdj.bnt(d.ote)]);
        this.fed.ybw("cmaxwin", "#pmb", [xzl.mdj.bnt(d.thh)])
    };
    this.shb = function(l, j, m, e) {
        if (!this.jte() || !this.parent.dst()) {
            return
        }
        var c = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = this.fed.ebo("tbuttons"),
            b = this.uli,
            g = this.jxh;
        if (this.lmd) {
            b = n.createRadialGradient(this.x + this.width / 2, this.y + this.height / 2, this.height / 6, this.x + this.width / 2, this.y + this.height / 2, this.height);
            b.addColorStop(0, this.uli);
            b.addColorStop(1, this.lmd)
        }
        if (this.amp) {
            g = n.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            g.addColorStop(0, this.jxh);
            g.addColorStop(1, this.amp)
        }
        n.save();
        n.clearRect(0, 0, this.width, this.height);
        if (c) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        xzl.mav.nba(n, 0, 0, this.width, this.height, this.avb, b, g, this.qpc);
        for (var d = 0, f = k.length; d < f; d++) {
            k[d].shb()
        }
        if (this.lkn === 0) {
            this.qyc(n)
        } else {
            if (this.lkn === 1) {
                this.yas(n)
            } else {
                if (this.lkn === 2) {
                    this.nql(n)
                } else {
                    if (this.lkn === 3) {
                        this.nrj(n)
                    }
                }
            }
        }
        n.restore();
        if (this.uqi && this.uvq) {
            if (c) {
                this.uqi.drawImage(this.uvq, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.uqi.drawImage(this.uvq, this.x, this.y)
            }
        }
    };
    this.qyc = function(c) {
        var f = this.fed.ebo("bbuttons"),
            d = this.fed.ebo("bdisplays");
        if (this.ckx.width > 0 && this.ckx.height > 0) {
            xzl.mav.jqe(c, this.bnn, this.zla, this.ckx.x, this.ckx.y, this.ckx.width, this.ckx.height, this.wrk, this.rwo, this.ant, 0)
        }
        if (this.ujo.width > 0 && this.ujo.height > 0) {
            xzl.mav.jqe(c, this.wlr, this.zla, this.ujo.x, this.ujo.y, this.ujo.width, this.ujo.height, this.wrk, this.rwo, this.ant, 0)
        }
        if (this.nei.width > 0 && this.nei.height > 0) {
            xzl.mav.jqe(c, this.xcj, this.zla, this.nei.x, this.nei.y, this.nei.width, this.nei.height, this.wrk, this.rwo, this.ant, 0)
        }
        xzl.mav.lpa(c, this.gzp, this.zla, this.cxh.x, this.cxh.y, this.cxh.width, this.cxh.height, this.wrk, this.lqy, this.ant, "center", true);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].shb()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].shb()
        }
    };
    this.yas = function(c) {
        var f = this.fed.ebo("abuttons"),
            d = this.fed.ebo("adisplays"),
            g = this.fed.ebo("acheckboxes");
        xzl.mav.lpa(c, this.bcz, this.zla, this.ubz.x, this.ubz.y, this.ubz.width, this.ubz.height, this.wrk, this.lqy, this.ant, "center", true);
        xzl.mav.jqe(c, this.uta, this.zla, this.qtu.x, this.qtu.y, this.qtu.width, this.qtu.height, this.wrk, this.arq, this.ant, 0);
        xzl.mav.trr(c, this.ixw, this.zla, this.get.x, this.get.y, this.get.width, this.get.height, this.wrk, this.arq, this.ant);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].shb()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].shb()
        }
        for (var e = 0, b = g.length; e < b; e++) {
            g[e].shb()
        }
    };
    this.nql = function(c) {
        var d = this.fed.ebo("hbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].shb()
        }
    };
    this.nrj = function(c) {
        var d = this.fed.ebo("sbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].shb()
        }
    };
    this.ftq = function() {
        a.cwq = (a.cwq < a.wuz.length - 1) ? a.cwq + 1 : 0;
        a.parent.ond.ewm("btn");
        a.fed.ybw("gamesd", "#pmb", [(a.wuz[a.cwq] > 0) ? a.wuz[a.cwq] : "---"]);
        a.shb();
        return (a.cwq >= a.wuz.length - 1)
    };
    this.upl = function() {
        a.cwq = (a.cwq > 0) ? a.cwq - 1 : a.wuz.length - 1;
        a.parent.ond.ewm("btn");
        a.fed.ybw("gamesd", "#pmb", [(a.wuz[a.cwq] > 0) ? a.wuz[a.cwq] : "---"]);
        a.shb();
        return (a.cwq <= 0)
    };
    this.eqm = function() {
        var b = a.fed.wqb("cmincredit") == null || a.fed.ybw("cmincredit", "#gcc");
        if (b === true) {
            if (++a.uav > 10) {
                a.ref = 10
            }
            a.tnq = (a.tnq + (a.ibg * a.ref) <= a.parent.isj) ? a.tnq + (a.ibg * a.ref) : a.parent.isj;
            a.parent.ond.ewm("btn");
            a.fed.ybw("mincreditd", "#pmb", [(a.tnq > 0) ? a.parent.gcv(a.tnq) : "---"]);
            a.fed.ybw("mmincredit", "#hix", [b && a.tnq < a.parent.isj]);
            a.fed.ybw("lmincredit", "#hix", [b && a.tnq > 0]);
            a.shb();
            return (a.tnq >= a.parent.isj)
        }
        return true
    };
    this.zep = function() {
        var b = a.fed.wqb("cmincredit") == null || a.fed.ybw("cmincredit", "#gcc");
        if (b === true) {
            if (++a.uav > 10) {
                a.ref = 10
            }
            a.tnq = (a.tnq - (a.ibg * a.ref) > 0) ? a.tnq - (a.ibg * a.ref) : 0;
            a.parent.ond.ewm("btn");
            a.fed.ybw("mincreditd", "#pmb", [(a.tnq > 0) ? a.parent.gcv(a.tnq) : "---"]);
            a.fed.ybw("mmincredit", "#hix", [b && a.tnq < a.parent.isj]);
            a.fed.ybw("lmincredit", "#hix", [b && a.tnq > 0]);
            a.shb();
            return (a.tnq >= a.parent.isj || a.tnq <= 0)
        }
        return true
    };
    this.jsv = function() {
        var b = a.fed.wqb("cmaxcredit") == null || a.fed.ybw("cmaxcredit", "#gcc");
        if (b === true) {
            if (++a.uav > 10) {
                a.ref = 10
            }
            a.wlp = (a.wlp + (a.kop * a.ref) > 0) ? a.wlp + (a.kop * a.ref) : 0;
            a.parent.ond.ewm("btn");
            a.fed.ybw("maxcreditd", "#pmb", [(a.wlp > 0) ? a.parent.gcv(a.wlp) : "---"]);
            a.fed.ybw("lmaxcredit", "#hix", [b && a.wlp > a.parent.isj]);
            a.shb();
            return (a.wlp <= a.parent.isj)
        }
        return true
    };
    this.rqj = function() {
        var b = a.fed.wqb("cmaxcredit") == null || a.fed.ybw("cmaxcredit", "#gcc");
        if (b === true) {
            if (++a.uav > 10) {
                a.ref = 10
            }
            a.wlp = (a.wlp - (a.kop * a.ref) > a.parent.isj) ? a.wlp - (a.kop * a.ref) : a.parent.isj;
            a.parent.ond.ewm("btn");
            a.fed.ybw("maxcreditd", "#pmb", [(a.wlp > 0) ? a.parent.gcv(a.wlp) : "---"]);
            a.fed.ybw("lmaxcredit", "#hix", [b && a.wlp > a.parent.isj]);
            a.shb();
            return (a.wlp <= a.parent.isj)
        }
        return true
    };
    this.nzd = function() {
        var b = a.fed.wqb("cmaxwin") == null || a.fed.ybw("cmaxwin", "#gcc");
        if (b === true) {
            if (++a.uav > 10) {
                a.ref = 10
            }
            a.jfz = (a.jfz + (a.kop * a.ref) > 0) ? a.jfz + (a.kop * a.ref) : 0;
            a.parent.ond.ewm("btn");
            a.fed.ybw("maxwind", "#pmb", [(a.jfz > 0) ? a.parent.gcv(a.jfz) : "---"]);
            a.fed.ybw("lmaxwin", "#hix", [b && a.jfz > a.kop]);
            a.shb();
            return (a.jfz <= a.kop)
        }
        return true
    };
    this.kyf = function() {
        var b = a.fed.wqb("cmaxwin") == null || a.fed.ybw("cmaxwin", "#gcc");
        if (b === true) {
            if (++a.uav > 10) {
                a.ref = 10
            }
            a.jfz = (a.jfz - (a.kop * a.ref) > 0) ? a.jfz - (a.kop * a.ref) : a.kop;
            a.parent.ond.ewm("btn");
            a.fed.ybw("maxwind", "#pmb", [(a.jfz > 0) ? a.parent.gcv(a.jfz) : "---"]);
            a.fed.ybw("lmaxwin", "#hix", [b && a.jfz > a.kop]);
            a.shb();
            return (a.jfz <= a.kop)
        }
        return true
    };
    this.liw = function() {
        var b = a.fed.wqb("cmincredit") == null || a.fed.ybw("cmincredit", "#gcc");
        a.tnq = a.parent.isj;
        a.fed.ybw("mincreditd", "#pmb", [(b === true && a.tnq > 0) ? a.parent.gcv(a.tnq) : "---"]);
        a.fed.ybw("lmincredit", "#hix", [b]);
        a.fed.ybw("mmincredit", "#hix", [b && a.tnq < a.parent.isj]);
        a.shb()
    };
    this.muu = function() {
        var b = a.fed.wqb("cmaxcredit") == null || a.fed.ybw("cmaxcredit", "#gcc");
        a.wlp = a.parent.isj;
        a.fed.ybw("maxcreditd", "#pmb", [(b === true && a.wlp > 0) ? a.parent.gcv(a.wlp) : "---"]);
        a.fed.ybw("lmaxcredit", "#hix", [b && a.wlp > a.parent.isj]);
        a.fed.ybw("mmaxcredit", "#hix", [b]);
        a.shb()
    };
    this.dfz = function() {
        var b = a.fed.wqb("cmaxwin") == null || a.fed.ybw("cmaxwin", "#gcc");
        if (a.jfz === 0) {
            a.jfz = a.kop
        }
        a.fed.ybw("maxwind", "#pmb", [(b === true && a.jfz > 0) ? a.parent.gcv(a.jfz) : "---"]);
        a.fed.ybw("lmaxwin", "#hix", [b && a.jfz > a.kop]);
        a.fed.ybw("mmaxwin", "#hix", [b]);
        a.shb()
    };
    this.mll = function() {
        a.lkn = 0;
        a.fed.ybw("bett", "#svq", [true, false, false]);
        a.fed.ybw("autot", "#svq", [false, false, false]);
        a.fed.ybw("helpt", "#svq", [false, false, false]);
        a.fed.ybw("settingt", "#svq", [false, false, false]);
        a.fed.ybw("returnt", "#svq", [false, false, false]);
        a.fed.sce("bbuttons", "#osq", [a.vba]);
        a.fed.sce("bbuttons", "#hix", [a.vba]);
        a.fed.sce("abuttons", "#osq", [false]);
        a.fed.sce("acheckboxes", "#osq", [false]);
        a.fed.sce("hbuttons", "#osq", [false]);
        a.fed.sce("sbuttons", "#osq", [false]);
        a.shb()
    };
    this.yoy = function() {
        var d = a.fed.wqb("cmincredit") == null || a.fed.ybw("cmincredit", "#gcc"),
            c = a.fed.wqb("cmaxcredit") == null || a.fed.ybw("cmaxcredit", "#gcc"),
            b = a.fed.wqb("cmaxwin") == null || a.fed.ybw("cmaxwin", "#gcc");
        a.lkn = 1;
        a.ibg = (a.paf > 0) ? a.parent.tlp() * a.paf : a.ibg;
        a.kop = (a.uvf > 0) ? a.parent.tlp() * a.uvf : a.kop;
        a.fed.ybw("bett", "#svq", [false, false, false]);
        a.fed.ybw("autot", "#svq", [true, false, false]);
        a.fed.ybw("helpt", "#svq", [false, false, false]);
        a.fed.ybw("settingt", "#svq", [false, false, false]);
        a.fed.ybw("returnt", "#svq", [false, false, false]);
        a.fed.sce("bbuttons", "#osq", [false]);
        a.fed.sce("abuttons", "#osq", [true]);
        a.fed.ybw("mmincredit", "#hix", [d && a.tnq < a.parent.isj]);
        a.fed.ybw("lmaxcredit", "#hix", [c && a.wlp > a.parent.isj]);
        a.fed.ybw("lmaxwin", "#hix", [b && a.jfz > a.kop]);
        a.fed.sce("acheckboxes", "#osq", [true]);
        a.fed.sce("hbuttons", "#osq", [false]);
        a.fed.sce("sbuttons", "#osq", [false]);
        if (a.qdh === true) {
            a.fed.ybw("cmincredit", "#osq", [false])
        }
        a.shb()
    };
    this.hhz = function() {
        a.lkn = 2;
        a.fed.ybw("bett", "#svq", [false, false, false]);
        a.fed.ybw("autot", "#svq", [false, false, false]);
        a.fed.ybw("helpt", "#svq", [true, false, false]);
        a.fed.ybw("settingt", "#svq", [false, false, false]);
        a.fed.ybw("returnt", "#svq", [false, false, false]);
        a.fed.sce("bbuttons", "#osq", [false]);
        a.fed.sce("abuttons", "#osq", [false]);
        a.fed.sce("acheckboxes", "#osq", [false]);
        a.fed.sce("hbuttons", "#osq", [true]);
        a.fed.sce("sbuttons", "#osq", [false]);
        a.shb()
    };
    this.twk = function() {
        a.lkn = 3;
        a.fed.ybw("bett", "#svq", [false, false, false]);
        a.fed.ybw("autot", "#svq", [false, false, false]);
        a.fed.ybw("helpt", "#svq", [false, false, false]);
        a.fed.ybw("settingt", "#svq", [true, false, false]);
        a.fed.ybw("returnt", "#svq", [false, false, false]);
        a.fed.sce("bbuttons", "#osq", [false]);
        a.fed.sce("abuttons", "#osq", [false]);
        a.fed.sce("acheckboxes", "#osq", [false]);
        a.fed.sce("hbuttons", "#osq", [false]);
        a.fed.sce("sbuttons", "#osq", [true]);
        a.fed.ybw("gamble", "#osq", [a.jil]);
        a.shb()
    };
    this.kef = function() {
        a.parent.hda();
        a.fed.ybw("returnt", "#svq", [false, false, false])
    }
}
ycw.prototype = new lhc;

function hrb() {
    var a = this;
    this.wrk = null;
    this.ant = "bold";
    this.uli = "rgb(0,0,0)";
    this.lmd = null;
    this.zla = "rgb(255,255,255)";
    this.amp = null;
    this.jxh = "rgb(60,60,60)";
    this.bzw = null;
    this.cjm = null;
    this.fmp = false;
    this.fas = [];
    this.hwm = [];
    this.cjv = null;
    this.xyn = 19;
    this.xik = 15;
    this.sfe = 120;
    this.vut = 2;
    this.tfj = 2;
    this.kyk = 2;
    this.mdo = 10;
    this.hfi = 12;
    this.tqg = function(b, d, c) {
        hrb.prototype.tqg.call(this, b, d, c)
    };
    this.jlm = function(b) {
        try {
            this.hfi = b.fontSize;
            this.xyn = b.hgi;
            this.xik = b.zuz;
            this.sfe = b.pfe;
            this.vut = b.wid;
            this.tfj = b.sun;
            this.kyk = b.fzx;
            this.mdo = b.ioa
        } catch (c) {
            console.error(c)
        }
    };
    this.png = function(b) {
        try {
            this.wrk = b.font;
            this.ant = b.yzb;
            this.uli = b.backgroundColor;
            this.lmd = b.qmm;
            this.zla = b.ded;
            this.jxh = b.borderColor;
            this.amp = b.leq;
            if (this.lmd) {
                this.bzw = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.bzw.addColorStop(0, this.lmd);
                this.bzw.addColorStop(0.5, this.uli)
            } else {
                this.bzw = this.uli
            }
            if (this.amp) {
                this.cjm = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.cjm.addColorStop(0, this.amp);
                this.cjm.addColorStop(1, this.jxh)
            } else {
                this.cjm = this.jxh
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.xuh = function(b, g, c) {
        var e = b - this.x,
            d = g - this.y,
            f = (c && c === true) ? this.mdo : 0;
        if (e >= this.x && e <= this.x + this.width && d >= this.y && d <= this.y + this.height + f && this.zrf()) {
            this.parent.ydd();
            return true
        }
        return false
    };
    this.ooy = function(d, b, c) {
        this.hwm.push({
            id: d,
            acm: b,
            value: c,
            btn: null
        })
    };
    this.sle = function(e, c, d, b) {
        this.hwm.push({
            id: e,
            acm: c,
            value: d,
            btn: b
        })
    };
    this.kue = function(d, b, c) {
        this.fas.push({
            id: d,
            lqt: b,
            value: c
        })
    };
    this.uem = function(e, d) {
        for (var c = 0, b = this.hwm.length; c < b; c++) {
            if (this.hwm[c].id == e) {
                this.hwm[c].value = d;
                return true
            }
        }
        return false
    };
    this.syr = function(c, e) {
        for (var d = 0, b = c.length; d < b; d++) {
            if (c[d] == e) {
                return d
            }
        }
        return -1
    };
    this.kvy = function(e, d) {
        for (var c = 0, b = this.fas.length; c < b; c++) {
            if (this.fas[c].id == e) {
                if (this.fas[c].value != d) {
                    this.fas[c].value = d;
                    return true
                } else {
                    return false
                }
            }
        }
        return false
    };
    this.nzb = function(b) {
        this.cjv = b
    };
    this.osq = function(b) {
        this.fmp = b
    };
    this.zrf = function(b) {
        return this.fmp
    };
    this.wbp = function(c, b) {
        if (this.uem(c, b)) {
            window.oai(a.shb)
        }
    };
    this.rgd = function(c, b) {
        if (this.kvy(c, b)) {
            window.oai(a.shb)
        }
    };
    this.bjp = function(b) {
        this.nzb(b);
        window.oai(a.shb)
    };
    this.shb = function() {
        if (!a.jte() || !a.parent.dst()) {
            return
        }
        var e = (a.height - a.hfi) / 2 + a.tfj,
            c = a.vut + a.xyn * a.hwm.length,
            d = a.width - c - (a.sfe * a.fas.length),
            b = a.context2D;
        b.save();
        xzl.mav.snb(b, 0, 0, a.width, a.height, a.bzw, 1);
        a.zds(b, e);
        a.tft(b, e);
        if (a.cjv && a.cjv != "") {
            xzl.mav.trr(b, a.cjv, a.zla, c, e, d, a.hfi, a.wrk, a.hfi, a.ant)
        } else {
            if (a.zrf()) {
                a.bhe(b)
            }
        }
        a.hxk(b, 0, a.height - a.kyk / 2, a.width, a.height - a.kyk / 2);
        b.restore();
        if (a.uqi && a.uvq) {
            a.uqi.drawImage(a.uvq, a.x, a.y)
        }
    };
    this.zds = function(d, g) {
        var c = 0;
        for (var f = 0, b = this.hwm.length; f < b; f++) {
            if (this.hwm[f].btn) {
                var e = this.syr(this.hwm[f].btn, this.hwm[f].value);
                if (this.hwm[f].acm instanceof Array) {
                    xzl.mav.trr(d, this.hwm[f].acm[e], this.zla, c, g, this.xyn, this.hfi, this.wrk, this.hfi, this.ant)
                } else {
                    if (this.hwm[f].acm instanceof Image || this.hwm[f].acm instanceof HTMLCanvasElement) {
                        d.drawImage(this.hwm[f].acm, e * this.xik, 0, this.xik, this.hwm[f].acm.height, c + this.vut, g - this.tfj, this.xyn - 2 * this.vut, this.hfi)
                    }
                }
            } else {
                d.save();
                d.globalAlpha = (this.hwm[f].value == true) ? 1 : 0.3;
                if (this.hwm[f].acm instanceof String) {
                    xzl.mav.trr(d, this.hwm[f].acm, this.zla, c, g, this.xyn, this.hfi, this.wrk, this.hfi, this.ant)
                } else {
                    if (this.hwm[f].acm instanceof Image || this.hwm[f].acm instanceof HTMLCanvasElement) {
                        d.drawImage(this.hwm[f].acm, c + this.vut, g - this.tfj, this.xyn - 2 * this.vut, this.hfi)
                    }
                }
                d.restore()
            }
            c += this.xyn;
            this.hxk(d, c, 0, c, this.height)
        }
        return c
    };
    this.tft = function(d, f) {
        var c = this.width - this.vut - this.sfe * this.fas.length;
        for (var e = 0, b = this.fas.length; e < b; e++) {
            if (this.fas[e].id == "freeplay") {
                xzl.mav.snb(d, c, 0, this.sfe, this.height, "red", 0.4)
            } else {
                if (this.fas[e].id == "freespin") {
                    xzl.mav.snb(d, c, 0, this.sfe, this.height, "rgb(100,255,100)", 0.5)
                }
            }
            this.hxk(d, c, 0, c, this.height);
            xzl.mav.trr(d, this.fas[e].lqt + this.fas[e].value, this.zla, c, f, this.sfe, this.hfi, this.wrk, this.hfi, this.ant);
            c += this.sfe
        }
    };
    this.hxk = function(b, d, f, c, e) {
        b.save();
        b.strokeStyle = this.cjm;
        b.lineWidth = this.kyk;
        b.beginPath();
        b.moveTo(d, f);
        b.lineTo(c, e);
        b.stroke();
        b.restore()
    };
    this.bhe = function(c) {
        if (this.parent.ktg.wqb("topb") == null) {
            return
        }
        var g = 3 * this.height,
            j = this.kyk,
            e = 9,
            d = Math.floor(this.height / 5),
            b = (this.width - g) / 2,
            k = this.kyk;
        c.save();
        c.strokeStyle = this.jxh;
        c.lineWidth = j;
        c.beginPath();
        for (var f = 0; f < d; f++) {
            c.moveTo(b + (e - 1) * f, k);
            c.lineTo(((b + g - e * f) + (b + e * f)) / 2, ((this.height - k - j) - f * 2 * j));
            c.lineTo(b + g - (e - 1) * f, k)
        }
        c.stroke();
        c.restore()
    }
}
hrb.prototype = new lhc;

function cin() {
    var b = this;
    var c = 0;
    var a = 1;
    this.qnk = 7;
    this.gyz = 89;
    this.rpc = 10000;
    this.fed = null;
    this.fmp = false;
    this.eaw = false;
    this.rxe = -1;
    this.zsh = 0;
    this.wrk = null;
    this.ant = "bold";
    this.uli = "black";
    this.uym = null;
    this.uju = null;
    this.fwd = null;
    this.zla = "white";
    this.lub = 0.8;
    this.ion = 0;
    this.vdr = 0;
    this.abj = 0;
    this.mlj = 0;
    this.fco = 0;
    this.zmw = 0;
    this.edd = 0;
    this.vut = 10;
    this.tfj = 5;
    this.mru = 10;
    this.qmg = this.vut;
    this.xrr = 10;
    this.tts = 20;
    this.ddn = 40;
    this.qpc = 4;
    this.hfi = 10;
    this.bvz = null;
    this.zme = null;
    this.vwz = "";
    this.vwg = null;
    this.tqg = function(d, f, e) {
        cin.prototype.tqg.call(this, d, f, e);
        this.fed = new ccr();
        this.fed.tqg();
        this.fed.qzf("buttons");
        this.fed.qzf("system");
        this.fed.qzf("setting")
    };
    this.jlm = function(d) {
        try {
            this.hfi = d.fontSize;
            this.xrr = d.wku;
            this.tts = d.gnt;
            this.ddn = d.qrj;
            this.qpc = d.vqq;
            this.vut = d.wid;
            this.tfj = d.sun;
            this.mru = d.vek
        } catch (f) {
            console.error(f)
        }
    };
    this.png = function(g, m) {
        try {
            var k = this.fed.ebo("buttons"),
                j = (m === true) ? g.hci.lfc : g.xxc.lfc;
            this.wrk = g.font;
            this.ant = g.yzb;
            this.uli = g.backgroundColor;
            this.uym = g.jsh;
            this.uju = g.xhl;
            this.zla = g.ded;
            this.lub = g.guw;
            if (this.uym && this.uju) {
                this.fwd = this.context2D.createLinearGradient(0, 0, this.width, 0);
                this.fwd.addColorStop(0, this.uym);
                this.fwd.addColorStop(0.5, this.uju);
                this.fwd.addColorStop(1, this.uym)
            }
            for (var f = 0, d = k.length; f < d; f++) {
                k[f].png(j)
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.xuh = function(p, o) {
        var n = this.fed.nxo(),
            q = this.fed.wqb("audio"),
            r = this.fed.wqb("language"),
            f = this.fed.wqb("history"),
            e = p - this.x,
            d = o - this.y;
        if (this.eaw) {
            return true
        }
        for (var l = 0, m = n.length; l < m; l++) {
            var g = n[l];
            if (e >= g.x && e <= g.x + g.width && d >= g.y && d <= g.y + g.height && g.jte()) {
                if (g.zrf() && !g.tmp()) {
                    if (g != q && g != r) {
                        this.parent.ond.yxe("btn");
                        this.parent.ond.ewm("btn")
                    }
                    g.svq(true, true, false);
                    g.oyg();
                    for (var k = 0; k < m; k++) {
                        n[k].cgt(true)
                    }
                    if (g != f) {
                        if (this.rxe >= 0) {
                            clearTimeout(this.rxe);
                            this.rxe = -1
                        }
                        this.rxe = setTimeout(this.zut, this.rpc)
                    }
                }
                return true
            }
        }
        if (this.jte() && this.zrf()) {
            if (p < this.x + this.fco || p > this.x + this.fco + this.zmw || o < this.y || o > this.y + this.height) {
                if (this.rxe >= 0) {
                    clearTimeout(this.rxe);
                    this.rxe = -1
                }
                return false
            }
        }
        return true
    };
    this.xak = function() {
        var g = this.fed.nxo();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.maw() == true) {
                e.svq(false, true);
                return true
            }
        }
        return false
    };
    this.dqi = function(e) {
        var o = this.fed.nxo(),
            d = this.fed.ebo("system"),
            m = this.fed.ebo("setting"),
            q = this.fed.wqb("audio"),
            l = 0,
            k = 0,
            n = 0,
            g = 0;
        if (this.eaw) {
            return true
        }
        for (l = 0, n = m.length; l < n; l++) {
            var f = m[l];
            if ((e == f.wwt || e == f.bap) && !f.tmp()) {
                if (f != q) {
                    this.parent.ond.yxe("btn");
                    this.parent.ond.ewm("btn")
                }
                f.svq(true, true, false);
                f.oyg();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].cgt(true)
                }
                if (this.rxe >= 0) {
                    clearTimeout(this.rxe);
                    this.rxe = -1
                }
                return true
            }
        }
        for (l = 0, n = d.length; l < n; l++) {
            var f = d[l];
            if ((e == f.wwt || e == f.bap) && f.zrf() && !f.tmp()) {
                if (f != q) {
                    this.parent.ond.yxe("btn");
                    this.parent.ond.ewm("btn")
                }
                f.svq(true, true, false);
                f.oyg();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].cgt(true)
                }
                if (this.rxe >= 0) {
                    clearTimeout(this.rxe);
                    this.rxe = -1
                }
                return true
            }
        }
        if (this.jte() && this.zrf()) {
            if (this.parent.lwy) {
                for (l = 0, n = this.parent.lwy.mtz.length; l < n; l++) {
                    var p = this.parent.lwy.mtz[l];
                    if (p.jpm == e || p.jpm == e) {
                        if (this.rxe >= 0) {
                            clearTimeout(this.rxe);
                            this.rxe = -1
                        }
                        return false
                    }
                }
            }
        }
        return false
    };
    this.ywi = function() {
        var g = this.fed.nxo();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.maw() == true) {
                e.svq(false, true, false);
                return true
            }
        }
        return false
    };
    this.aqy = function(e, m) {
        var k = this.fed.nxo(),
            l = e - this.x,
            j = m - this.y;
        this.zme = this.bvz;
        this.bvz = null;
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l >= f.x && l <= f.x + f.width && j >= f.y && j <= f.y + f.height && f.jte() && f.zrf() && !f.tmp()) {
                this.bvz = f
            }
        }
        if (this.bvz) {
            this.ipr(true)
        } else {
            this.ipr(false)
        }
        return true
    };
    this.jnd = function(e, f, g, i, l, d, m) {
        this.edd = g.width;
        var k = new gvm(this.qmg, this.tfj, this.edd, this.edd);
        var j = new oja();
        j.tqg(k, this.context2D);
        j.parent = this;
        j.oyg = i;
        j.key = f;
        j.ona(d, m);
        j.jlm(this.parent.asz.iqi.okn);
        j.png(this.parent.style.iqi.xxc.lfc);
        j.hnt(g);
        if (l != null) {
            j.bap = l.zxt;
            j.wwt = l.jpm;
            j.rgh = l.value
        }
        this.fed.ovw(e, j, ["buttons", "setting"]);
        this.qmg += this.edd + this.vut;
        this.zmw = this.qmg
    };
    this.qbi = function(k, j, i, g, e) {
        this.edd = i.width;
        var f = new gvm(this.qmg, this.tfj, this.edd, this.edd);
        var d = new oja();
        d.tqg(f, this.context2D);
        d.parent = this;
        d.oyg = g;
        d.key = j;
        d.jlm(this.parent.asz.iqi.okn);
        d.png(this.parent.style.iqi.xxc.lfc);
        d.hnt(i);
        if (e != null) {
            d.bap = e.zxt;
            d.wwt = e.jpm;
            d.rgh = e.value
        }
        this.fed.ovw(k, d, ["buttons", "system"]);
        this.qmg += this.edd + this.vut;
        this.zmw = this.qmg
    };
    this.csk = function() {
        var f = this.fed.nxo();
        this.zmw += 2 * this.mru;
        this.fco = Math.round((this.width - this.zmw) / 2);
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].x += this.fco + this.mru
        }
    };
    this.cbx = function() {
        return this.zmw
    };
    this.osq = function(d) {
        this.fmp = d
    };
    this.zrf = function() {
        return this.fmp
    };
    this.jyi = function(g) {
        var f = this.fed.nxo();
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].osq(g)
        }
        this.parent.shb()
    };
    this.cem = function(g) {
        var f = this.fed.ebo("system");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].osq(g)
        }
        this.parent.shb()
    };
    this.qnf = function(g) {
        var f = this.fed.ebo("setting");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].osq(g)
        }
        this.parent.shb()
    };
    this.wbw = function() {
        if (this.jte()) {
            return
        }
        if (this.eaw) {
            if (this.mlj === a) {
                this.vwg = this.wbw
            } else {
                this.vwg = null
            }
        } else {
            this.vwg = null;
            this.ltc();
            this.rmz()
        }
    };
    this.vab = function(d) {
        if (this.parent.syo) {
            this.parent.syo()
        }
        this.stop();
        this.eaw = false;
        this.vwg = null;
        this.hix(true, d);
        if (this.rxe >= 0) {
            clearTimeout(this.rxe);
            this.rxe = -1
        }
        this.rxe = setTimeout(this.zut, this.rpc)
    };
    this.zut = function() {
        if (b.jte()) {
            b.parent.ond.yxe("panel_out");
            b.parent.ond.ewm("panel_out");
            b.ezd()
        }
    };
    this.ezd = function() {
        if (!this.jte()) {
            return
        }
        if (this.eaw) {
            if (this.mlj === c) {
                this.vwg = this.ezd
            } else {
                this.vwg = null
            }
        } else {
            this.vwg = null;
            this.qmy();
            this.rmz();
            if (this.rxe >= 0) {
                clearTimeout(this.rxe);
                this.rxe = -1
            }
        }
    };
    this.dyc = function(d) {
        if (this.parent.jzj) {
            this.parent.jzj()
        }
        this.stop();
        this.eaw = false;
        this.vwg = null;
        this.hix(false, d);
        if (typeof this.rkx === "function") {
            this.rkx();
            this.rkx = null
        }
    };
    this.ltc = function() {
        this.hix(true);
        this.eaw = true;
        this.fmp = false;
        this.mlj = c;
        this.ion = Math.floor(this.height / this.qnk);
        this.abj = 1;
        this.vdr = Math.floor(this.height / this.qnk)
    };
    this.qmy = function() {
        if (this.parent.jzj) {
            this.parent.jzj()
        }
        this.eaw = true;
        this.fmp = false;
        this.mlj = a;
        this.ion = -Math.floor(this.height / this.qnk);
        this.abj = 1;
        this.vdr = this.height
    };
    this.rmz = function() {
        this.zsh = setInterval(this.jaf, this.gyz)
    };
    this.tyz = function() {
        if (b.mlj == c) {
            if (b.parent.syo) {
                b.parent.syo()
            }
            if (b.rxe >= 0) {
                clearTimeout(b.rxe);
                b.rxe = -1
            }
            b.rxe = setTimeout(b.zut, b.rpc)
        }
        clearInterval(b.zsh);
        if (b.vwg) {
            b.vwg()
        }
    };
    this.stop = function() {
        clearTimeout(this.rxe);
        clearInterval(this.zsh);
        this.rxe = -1
    };
    this.jaf = function() {
        if (!b.pbd()) {
            b.tyz()
        }
    };
    this.pbd = function() {
        if (b.abj < b.qnk) {
            b.parent.shb(b.x, b.y, b.width, b.height);
            b.vdr += b.ion;
            b.abj++;
            return true
        } else {
            b.eaw = false;
            b.fmp = true;
            if (b.mlj == a) {
                b.hix(false);
                if (typeof b.rkx === "function") {
                    b.rkx();
                    b.rkx = null
                }
            }
            b.parent.shb(b.x, b.y, b.width, b.height);
            return false
        }
    };
    this.shb = function(n, m, o, g) {
        if (!this.jte() || !this.parent.dst()) {
            return
        }
        var p = this.context2D,
            e = (n != null && m != null && o != null && g != null),
            l = this.fed.nxo(),
            k = 0,
            d = 0;
        p.save();
        if (e) {
            p.beginPath();
            p.rect(n, m, o, g);
            p.closePath();
            p.clip()
        }
        p.clearRect(0, 0, this.width, this.height);
        this.olq(p);
        for (var f = 0, j = l.length; f < j; f++) {
            l[f].shb()
        }
        if (this.bvz && this.vwz != "") {
            k = this.bvz.x - this.vut - this.edd;
            d = 3 * this.edd + 2 * this.vut;
            if (k + d >= this.fco + this.zmw) {
                k = this.fco + this.zmw - d;
                xzl.mav.glp(p, this.vwz, this.zla, k, this.bvz.y + this.bvz.height, d, this.hfi, this.wrk, this.hfi, this.ant, this.vut)
            } else {
                xzl.mav.trr(p, this.vwz, this.zla, k, this.bvz.y + this.bvz.height, d, this.hfi, this.wrk, this.hfi, this.ant)
            }
        }
        p.restore();
        if (this.eaw) {
            if (this.uqi && this.uvq && this.vdr > 0) {
                this.uqi.drawImage(this.uvq, 0, this.height - this.vdr, this.width, this.vdr, this.x, this.y, this.width, this.vdr)
            }
        } else {
            if (e) {
                this.parent.shb(this.x + n, this.y + m, o, g)
            } else {
                if (this.uqi && this.uvq) {
                    this.uqi.drawImage(this.uvq, this.x, this.y)
                }
            }
        }
    };
    this.olq = function(d) {
        var f = this.qpc,
            e = f / 2;
        d.save();
        d.strokeStyle = this.fwd;
        d.fillStyle = this.uli;
        d.lineWidth = f;
        d.beginPath();
        d.moveTo(e, 0);
        d.arcTo(e, this.xrr, this.xrr + e, this.xrr, this.xrr);
        d.arcTo(this.fco, this.xrr, this.fco, this.height - this.tts - e, this.ddn);
        d.arcTo(this.fco, this.height - e, this.fco + this.tts, this.height - e, this.tts);
        d.lineTo(this.fco + this.zmw - this.tts, this.height - e);
        d.arcTo(this.fco + this.zmw, this.height - e, this.fco + this.zmw, this.height - this.tts - e, this.tts);
        d.arcTo(this.fco + this.zmw, this.xrr, this.width - this.xrr - e, this.xrr, this.ddn);
        d.arcTo(this.width - e, this.xrr, this.width - e, 0, this.xrr);
        d.stroke();
        d.closePath();
        d.globalAlpha = this.lub;
        d.fill();
        d.restore()
    };
    this.ipr = function(d) {
        if (this.bvz && this.bvz != this.zme) {
            if (d && this.bvz) {
                this.vwz = this.parent.bnt(this.bvz.key);
                if (!xzl.mav.tah) {
                    this.vwz = (this.bvz.rgh) ? this.vwz + " [" + this.bvz.rgh + "]" : this.vwz
                }
            } else {
                this.vwz = ""
            }
            this.parent.shb(this.x, this.y, this.width, this.height)
        } else {
            if (d && (this.bvz && this.vwz != this.parent.bnt(this.bvz.key))) {
                this.vwz = this.parent.bnt(this.bvz.key);
                if (!xzl.mav.tah) {
                    this.vwz = (this.bvz.rgh) ? this.vwz + " [" + this.bvz.rgh + "]" : this.vwz
                }
            }
            this.parent.shb(this.x, this.y, this.width, this.height)
        }
    };
    this.rkx = null
}
cin.prototype = new lhc;

function tvz() {
    var a = this;
    this.tre = "LOADING ... ";
    this.ksh = "ERROR";
    this.csa = null;
    this.kla = null;
    this.mdi = false;
    this.ypr = false;
    this.hpt = true;
    this.oyg = null;
    this.pgg = null;
    this.odx = null;
    this.zsh = 0;
    this.hpr = 0;
    this.xet = false;
    this.ivt = 0;
    this.hil = 60;
    this.tkf = 0;
    this.wrk = "arial";
    this.ant = "bold";
    this.rut = "black";
    this.lex = "rgb(0,100,10)";
    this.xjh = "rgb(80,255,100)";
    this.nxb = "rgb(120,120,120)";
    this.bmw = "red";
    this.xjs = "white";
    this.zla = "yellow";
    this.hfi = 14;
    this.llo = 18;
    this.fvf = 20;
    this.ohr;
    this.svy;
    this.dry;
    this.lro;
    this.mru = 5;
    this.vut = 12;
    this.tfj = 5;
    this.uox = 2;
    this.vua = new gvm();
    this.nol = new gvm();
    this.roq = [];
    this.gds = 0;
    this.sup = 20;
    this.tqg = function(b, d, c) {
        tvz.prototype.tqg.call(this, b, d, c);
        this.pgg = document.createElement("canvas");
        this.odx = this.pgg.getContext("2d")
    };
    this.jlm = function(b) {
        try {
            this.hfi = b.fontSize;
            this.llo = b.gqx;
            this.fvf = b.zlt;
            this.mru = b.vek;
            this.vut = b.wid;
            this.tfj = b.sun;
            this.uox = b.uuk;
            this.ohr = b.yha;
            this.svy = b.zcp;
            this.dry = b.yog;
            this.lro = b.slr;
            this.vua = b.snl;
            if (this.nol.width > 0 && this.nol.height) {
                this.qob()
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.png = function(b) {
        try {
            this.wrk = b.font;
            this.ant = b.yzb;
            this.rut = b.backgroundColor;
            this.lex = b.rcb;
            this.xjh = b.cbu;
            this.nxb = b.khm;
            this.bmw = b.fuy;
            this.xjs = b.oqw;
            this.zla = b.ded;
            this.kla = b.kla
        } catch (c) {
            console.error(c)
        }
    };
    this.xuh = function(b, e) {
        var d = b - this.x,
            c = e - this.y;
        if (d >= this.nol.x && d <= this.nol.x + this.nol.width && c >= this.nol.y && c <= this.nol.y + this.nol.height) {
            this.oyg();
            return true
        }
        return false
    };
    this.shb = function(b) {
        if (b && b >= 0) {
            this.hpr = b
        }
        if (!this.jte()) {
            return
        }
        if (xzl.nfj.value45 == xzl.kgm.niz) {
            this.vii()
        } else {
            if (xzl.nfj.value45 == xzl.kgm.vmq) {
                this.pxi()
            }
        }
    };
    this.vii = function() {
        if (this.mdi) {
            var c = this.context2D,
                b = this.dry.width / 100;
            c.save();
            if (this.ypr === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.ond.jcf("splash"), 0, 0, this.width, this.height);
            if (this.kla) {
                xzl.mav.snb(c, this.mru, this.mru, this.width - 2 * this.mru, this.height - 2 * this.mru, this.kla, 0.3)
            }
            if (this.csa != null && this.csa != "") {
                this.yob(this.lro, true)
            } else {
                if (this.xet) {
                    xzl.mav.snb(c, this.vua.x, this.vua.y, this.vua.width, this.vua.height, this.rut, 0.7);
                    c.drawImage(this.pgg, this.vua.x + this.vua.width * (1 - this.roq[this.gds]) / 2, this.vua.y + this.vua.height * (1 - this.roq[this.gds]) / 2, this.vua.width * this.roq[this.gds], this.vua.height * this.roq[this.gds])
                } else {
                    if (this.hpt === true) {
                        if (this.ypr === false) {
                            xzl.mav.snb(c, this.ohr.x, this.ohr.y, this.ohr.width, this.ohr.height, this.rut, 0.7)
                        }
                        var e = this.tre + " " + this.hpr + "%";
                        var d = c.createLinearGradient(this.dry.x, this.dry.y, this.dry.x + this.dry.width, this.dry.y);
                        d.addColorStop(0, this.lex);
                        d.addColorStop(1, this.xjh);
                        xzl.mav.trr(c, e, this.xjs, this.svy.x, this.svy.y, this.svy.width, this.svy.height, this.wrk, this.hfi, this.ant);
                        xzl.mav.xpx(c, this.dry.x - this.uox, this.dry.y, this.dry.width + 2 * this.uox, this.dry.height, this.uox, this.rut, 0.8, this.nxb, this.uox, 0.8);
                        xzl.mav.snb(c, this.dry.x, this.dry.y + this.uox / 2, b * this.hpr, this.dry.height - this.uox, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.pxi = function() {
        if (this.mdi) {
            var c = this.context2D,
                b = this.dry.width / 100;
            c.save();
            if (this.ypr === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.ond.jcf("splash"), 0, 0, this.width, this.height);
            if (this.csa != null && this.csa != "") {
                this.yob(this.lro, true)
            } else {
                if (this.xet) {
                    c.drawImage(this.parent.ond.jcf("continue"), this.vua.x, this.vua.y, this.vua.width, this.vua.height);
                    c.drawImage(this.pgg, this.vua.x + this.vua.width * (1 - this.roq[this.gds]) / 2, this.vua.y + this.vua.height * (1 - this.roq[this.gds]) / 2, this.vua.width * this.roq[this.gds], this.vua.height * this.roq[this.gds])
                } else {
                    if (this.hpt === true) {
                        xzl.mav.snb(c, this.dry.x, this.dry.y, this.dry.width, this.dry.height, "rgb(0,0,0)", 0.5);
                        xzl.mav.snb(c, this.dry.x, this.dry.y, b * this.hpr, this.dry.height, "rgb(0,250,0)", 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.yob = function(c, m) {
        var l = this.context2D,
            o = [],
            d = this.hfi,
            k = this.csa,
            f = "",
            t = 0,
            v = 0,
            s = 0,
            u = 0,
            n = "center",
            e = Math.round(d * 1.5),
            j = Math.round(this.llo * 1.5),
            b = 0,
            w = 1,
            q = 0,
            g = 0;
        l.save();
        l.font = this.ant + " " + d + "px " + this.wrk;
        for (var p = s; p < k.length; p++) {
            f += k.charAt(p);
            u = l.measureText(f).width;
            if (k.charAt(p) == " ") {
                t = p
            }
            if (p == k.length - 1) {
                o[v] = k.substring(s, k.length)
            } else {
                if (k.charAt(p) == "|") {
                    o[v] = k.substring(s, p);
                    v++;
                    s = p + 1;
                    f = k.substring(p + 1, p + 1)
                } else {
                    if (u >= c.width - 2 * this.vut) {
                        o[v] = k.substring(s, t);
                        v++;
                        s = t + 1;
                        f = k.substring(t + 1, p)
                    }
                }
            }
        }
        b = v * (e);
        if (b > (c.height - j - this.tfj)) {
            w = (c.height - j - this.tfj) / b;
            d = Math.round(d * w) - 1;
            l.font = this.ant + " " + d + "px " + this.wrk;
            e = Math.round(d * 1.5);
            b = v * (e)
        }
        if (d < 10) {
            w = 10 / d;
            d = Math.round(d * w);
            l.font = this.ant + " " + d + "px " + this.wrk;
            e = Math.round(d * 1.5);
            b = v * (e);
            g = (c.height - (j + b + this.tfj));
            c.height = j + b + this.tfj;
            c.y += g
        }
        l.textAlign = n;
        l.lineJoin = "round";
        l.lineCap = "round";
        if (m && m === true) {
            xzl.mav.snb(l, c.x, c.y, c.width, c.height, this.rut, 0.7)
        }
        if (this.ksh != null) {
            l.font = this.ant + " " + this.llo + "px " + this.wrk;
            l.fillStyle = this.bmw;
            l.textBaseline = "bottom";
            l.fillText(this.ksh, c.x + c.width / 2, c.y + this.llo + this.tfj)
        }
        l.font = this.ant + " " + d + "px " + this.wrk;
        l.fillStyle = this.xjs;
        if (o.length == 1) {
            q = j + b + e;
            l.fillText(o[0], (c.x + c.width / 2), c.y + q)
        } else {
            for (var p = 0, r = o.length; p < r; p++) {
                q = j + (b + e) / (r + 1) * (p + 1);
                if (n == "start") {
                    l.fillText(o[p], (c.x + this.vut), c.y + q)
                } else {
                    l.fillText(o[p], (c.x + c.width / 2), c.y + q)
                }
            }
        }
        l.restore()
    };
    this.jjv = function() {
        return (this.xet)
    };
    this.ftg = function() {
        for (var b = 0; b < this.sup; b++) {
            this.roq[b] = 1 - Math.sin(Math.PI * b / (this.sup - 1)) * 0.04
        }
        this.roq[this.sup - 1] = 1;
        this.xet = true;
        this.gds = 0;
        this.qob();
        this.zsh = setInterval(this.kwg, this.hil);
        this.shb()
    };
    this.kwg = function() {
        a.shb();
        a.gds = (a.gds < a.sup - 1) ? a.gds + 1 : 0
    };
    this.stop = function() {
        this.xet = false;
        clearTimeout(this.zsh)
    };
    this.qob = function() {
        var b = this.odx;
        this.nol = this.vua;
        this.pgg.width = Math.round(this.nol.width);
        this.pgg.height = Math.round(this.nol.height);
        b.save();
        b.clearRect(0, 0, this.pgg.width, this.pgg.height);
        xzl.mav.lpa(b, this.parent.language.xqa, this.zla, 0, 0, this.pgg.width, this.pgg.height, this.wrk, this.fvf, this.ant, "center", true);
        b.restore()
    }
}
tvz.prototype = new lhc;

function eke() {
    var b = this;
    var c = 0;
    var a = 1;
    var e = 2;
    var d = 3;
    this.hpl = null;
    this.nhp = null;
    this.rhi = null;
    this.dbt = null;
    this.wpc = null;
    this.dap = [];
    this.atw = 0;
    this.nqj = [];
    this.ywa = [];
    this.lkn = 0;
    this.ilt = false;
    this.fjy = false;
    this.tqg = function() {
        this.hpl = document.getElementById("messageOverlay");
        this.nhp = document.getElementById("messagePanel");
        this.rhi = document.getElementById("messageTitle");
        this.dbt = document.getElementById("messageText");
        this.wpc = document.getElementById("btne");
        if (this.wpc) {
            this.wpc.innerHTML = "\u00D7";
            this.wpc.onclick = this.ezd;
            this.wpc.ontouchend = this.ezd
        }
        for (var f = 0; f < 4; f++) {
            this.dap[f] = document.getElementById("btn" + (f + 1))
        }
    };
    this.png = function(f) {
        try {
            this.nqj = f.hdu
        } catch (g) {
            console.error(g)
        }
    };
    this.jlm = function(j) {
        try {
            if (this.nhp) {
                xzl.mav.yao(this.nhp, j.mki)
            }
            if (this.rhi) {
                this.rhi.style.fontSize = j.iii + "px";
                xzl.mav.yao(this.rhi, j.dzb)
            }
            if (this.dbt) {
                this.dbt.style.fontSize = j.dzi + "px";
                xzl.mav.yao(this.dbt, j.the)
            }
            if (this.wpc) {
                xzl.mav.yao(this.wpc, j.dtj)
            }
            for (var g = 0, f = this.dap.length; g < f; g++) {
                this.dap[g].style.fontSize = j.okn.fontSize + "px";
                this.dap[g].style.top = j.eyk.y + "px";
                this.dap[g].style.height = j.eyk.height + "px"
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.wbw = function(j) {
        this.ywa.length = 0;
        this.lkn = 0;
        for (var g = 0, f = j.length; g < f; g++) {
            this.ywa[g] = j[g]
        }
        this.utj(this.ywa[this.lkn])
    };
    this.ezd = function() {
        if (b.nhp) {
            b.fjy = false;
            b.nhp.style.display = "none";
            b.hpl.style.display = "none";
            xzl.mdj.aun();
            xzl.mdj.vrz = false
        }
    };
    this.utj = function(l) {
        var n = this.ywa.length > 1,
            m = "";
        if (l.Buttons && l.Buttons.length >= 1) {
            for (var k = l.Buttons.length - 1; k >= 0; k--) {
                if (l.Buttons[k].Action.toLowerCase() == "cashier") {
                    l.Buttons.splice(k, 1)
                }
            }
        }
        if (l.tpp === xzl.wmn.jjo || l.tpp === xzl.wmn.qpg) {
            this.atw = d;
            this.ilt = (l.DisplayType == xzl.zqa.vwe.trl) ? true : false
        } else {
            if (l.tpp === xzl.wmn.xyp || l.tpp === xzl.wmn.ioh || l.tpp === xzl.wmn.nuo || l.tpp === xzl.wmn.roulette.suo || l.tpp === xzl.wmn.roulette.ubh) {
                this.atw = a;
                this.ilt = false
            } else {
                if (l.tpp === xzl.wmn.lzr || l.tpp === xzl.wmn.crq) {
                    this.atw = c;
                    this.ilt = false
                } else {
                    if (l.tpp === xzl.wmn.opq || l.tpp === xzl.wmn.zom || l.tpp === xzl.wmn.pzf) {
                        this.atw = e;
                        this.ilt = false
                    }
                }
            }
        }
        if (l.Title && this.rhi) {
            this.rhi.style.color = this.nqj[this.atw];
            this.rhi.innerHTML = l.Title
        }
        if (l.Text && this.dbt) {
            this.dbt.innerHTML = l.Text.replace(/[\r]?\n/g, "<br>")
        }
        if (n) {
            this.dap[0].innerHTML = "\u2039";
            this.dap[0].onclick = this.cxl;
            this.dap[0].ontouchend = this.cxl;
            this.dap[0].style.display = "inline-block";
            this.dap[this.dap.length - 1].innerHTML = "\u203A";
            this.dap[this.dap.length - 1].onclick = this.ouz;
            this.dap[this.dap.length - 1].ontouchend = this.ouz;
            this.dap[this.dap.length - 1].style.display = "inline-block"
        }
        for (var k = 0, g = (n) ? 1 : 0, f = (n) ? this.dap.length - 1 : this.dap.length; g < f; g++, k++) {
            if (l.Buttons && k < l.Buttons.length) {
                m = l.Buttons[k].Text;
                if (m.indexOf("_") != 0) {
                    this.dap[g].innerHTML = m
                } else {
                    var j = m.substr(1);
                    if (j == "exit") {
                        this.dap[g].innerHTML = xzl.mdj.language.akx
                    } else {
                        if (j == "continue") {
                            this.dap[g].innerHTML = xzl.mdj.language.xqa.replace(/ /g, "")
                        } else {
                            this.dap[g].innerHTML = j.toUpperCase()
                        }
                    }
                }
                if (l.Buttons[k].Action.toLowerCase() == "quit") {
					window.parent.postMessage('CloseGame',"*");
                  
                } else {
                    if (l.Buttons[k].Action.toLowerCase() == "continue") {
                        if (l.tpp === xzl.wmn.jjo) {
                            this.dap[g].onclick = this.zaz.bind(this, l.Buttons[k].Link);
                            this.dap[g].ontouchend = this.zaz.bind(this, l.Buttons[k].Link)
                        } else {
                            if (l.tpp === xzl.wmn.qpg || l.tpp === xzl.wmn.opq || l.tpp === xzl.wmn.zom) {
                                this.dap[g].onclick = this.kob;
                                this.dap[g].ontouchend = this.kob
                            } else {
                                if (l.tpp === xzl.wmn.lzr || l.tpp === xzl.wmn.crq || l.tpp === xzl.wmn.pzf) {
                                    this.dap[g].onclick = this.jcv;
                                    this.dap[g].ontouchend = this.jcv
                                }
                            }
                        }
                    } else {
                        if (l.Buttons[k].Action.toLowerCase() == "history") {
                            this.dap[g].onclick = xzl.mdj.czr;
                            this.dap[g].ontouchend = xzl.mdj.czr
                        } else {
                            if (l.Buttons[k].Action.toLowerCase() == "link") {
                                if (l.Buttons[k].LinkType === xzl.zqa.fhw.ijm) {
                                    this.dap[g].onclick = this.kgk.bind(this, l.Buttons[k].Link);
                                    this.dap[g].ontouchend = this.kgk.bind(this, l.Buttons[k].Link)
                                } else {
                                    if (l.Buttons[k].LinkType === xzl.zqa.fhw.tde) {
                                        this.dap[g].onclick = this.zaz.bind(this, l.Buttons[k].Link);
                                        this.dap[g].ontouchend = this.zaz.bind(this, l.Buttons[k].Link)
                                    } else {
                                        if (l.Buttons[k].LinkType === xzl.zqa.fhw.mme) {
                                            this.dap[g].onclick = this.afu.bind(this, l.Buttons[k].Link);
                                            this.dap[g].ontouchend = this.afu.bind(this, l.Buttons[k].Link)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                this.dap[g].style.display = "inline-block"
            } else {
                this.dap[g].style.display = "none"
            }
        }
        this.wpc.style.display = (this.ilt) ? "inline-block" : "none";
        if (this.nhp) {
            this.fjy = true;
            this.nhp.style.display = "block";
            this.hpl.style.display = "block";
            xzl.mdj.aun();
            xzl.mdj.vrz = true
        }
    };
    this.jte = function() {
        if (this.fjy) {
            return true
        }
        return false
    };
    this.kob = function() {
        b.ezd();
        xzl.mdj.qlm(xzl.mdj.state)
    };
    this.zaz = function(f) {
        var g = null;
        if (f) {
            g = xzl.mav.rjf("GET", f);
            if (!g) {
                console.error("Could not send request!")
            } else {
                g.onerror = function() {
                    console.error("Error on request!")
                }
            }
            g.send()
        }
        if (xzl.mdj.yoa) {
            xzl.mdj.yoa.cir({
                sender: xzl.mdj.bnr,
                lang: sessionStorage.sessionValue1.toUpperCase()
            })
        }
        b.ezd();
        xzl.mdj.gtk()
    };
    this.afu = function(j) {
        var k = null;
        if (j == null) {
            console.error("Request url is missing!");
            return
        }
        k = xzl.mav.rjf("GET", j);
        if (!k) {
            console.error("Could not send request!")
        } else {
            for (var g = 0, f = b.dap.length; g < f; g++) {
                b.dap[g].disabled = true
            }
            k.onload = function() {
                b.ezd();
                for (var m = 0, l = b.dap.length; m < l; m++) {
                    b.dap[m].disabled = false
                }
                xzl.mdj.gtk()
            };
            k.onerror = function() {
                console.error("Error on request!");
                for (var m = 0, l = b.dap.length; m < l; m++) {
                    b.dap[m].disabled = false
                }
            }
        }
        if (xzl.mdj.yoa) {
            xzl.mdj.yoa.cir({
                sender: xzl.mdj.bnr,
                lang: sessionStorage.sessionValue1.toUpperCase()
            })
        }
        k.send()
    };
    this.jcv = function() {
        window.location.reload()
    };
    this.kgk = function(f) {
        if (xzl.mdj.yoa) {
            xzl.mdj.yoa.cir({
                sender: xzl.mdj.bnr,
                lang: sessionStorage.sessionValue1.toUpperCase()
            })
        }
        window.location.href = f
    };
    this.cxl = function() {
        b.lkn = (b.lkn > 0) ? b.lkn - 1 : b.ywa.length - 1;
        b.utj(b.ywa[b.lkn])
    };
    this.ouz = function() {
        b.lkn = (b.lkn < b.ywa.length - 1) ? b.lkn + 1 : 0;
        b.utj(b.ywa[b.lkn])
    }
}
xzl.nfj = new Settings();
xzl.mav = new coz();

function zqe() {
    this.uhs = "";
    this.rof = "";
    this.reb = null;
    this.canvas = null;
    this.context2D = null;
    this.kxa = null;
    this.kgy = null;
    this.agy = null;
    this.iww = null;
    this.kvc = null;
    this.blh = {};
    this.offsetLeft = 0;
    this.offsetTop = 0;
    this.xzr = 0;
    this.wex = 0;
    this.ylu = false;
    this.width = 0;
    this.height = 0;
    this.mot = 0;
    this.rsd = 0;
    this.bke = 1;
    this.wpw = 1;
    this.wfd = false;
    this.dtv = false;
    this.style = null;
    this.asz = null;
    this.gxl = -1;
    this.gql = false;
    this.lpi = false;
    this.azz = false;
    this.wmr = false;
    this.vrz = false;
    this.plq = false;
    this.ujw = false;
    this.lfi = false;
    this.tex = "";
    this.pmx = "";
    this.yhs = "";
    this.vjn = "";
    this.kvj = "";
    this.dqx = "";
    this.xzy = "1_1_60";
    try {
        if (xzl.nfj.value19) {
            this.tex = sessionStorage.sessionValue2;
            this.pmx = sessionStorage.sessionValue2
        } else {
            var c = a("hash");
            if (c != "") {
                sessionStorage.sessionValue2 = c
            }
            if (sessionStorage.sessionValue2 != "freeplay") {
                this.yhs = sessionStorage.sessionValue2
            } else {
                this.tex = sessionStorage.sessionValue2;
                this.pmx = sessionStorage.sessionValue2;
                if (a("w") != "") {
                    this.yhs = sessionStorage.sessionValue2
                } else {
                    this.yhs = ""
                }
            }
        }
    } catch (b) {}
    this.mqy = null;
    this.xeg = null;
    this.bwi = false;
    this.drv = null;
    this.ond = null;
    this.ktg = null;
    this.tcp = true;
    this.klk = [0, 0.5, 1];
    try {
        if (sessionStorage.sessionValue6) {
            if (sessionStorage.sessionValue6 == "false") {
                this.yua = 0
            } else {
                if (sessionStorage.sessionValue6 == "true") {
                    this.yua = this.klk.length - 1
                } else {
                    this.yua = Number(sessionStorage.sessionValue6)
                }
            }
        } else {
            this.yua = this.klk.length - 1
        }
    } catch (b) {
        this.yua = 0
    }
    this.eld = 0;
    this.language = new fkh();
    this.txa = 0;
    this.xgl = 1;
    this.mzu = this.xgl;
    this.hvx = [xzl.bmv.mpr, xzl.bmv.vwu, xzl.bmv.jmc];
    this.yjp = (xzl.mav.wfq()) ? 0 : this.hvx.length - 1;
    try {
        if (localStorage.localValue1) {
            this.yjp = Number(localStorage.localValue1);
            if (!xzl.mav.wfq() && this.hvx[this.yjp] === xzl.bmv.mpr) {
                this.yjp = this.hvx.length - 1
            }
        }
    } catch (b) {}
    this.bjs = false;
    this.bnr = "";
    this.vsa = "";
    this.nat = 0;
    this.state = 0;
    this.wvy = false;
    this.ari = 5000;
    this.tzf = 0;
    this.kna = 0;
    this.zty = 0;
    this.wdp = 0;
    this.aey = false;
    this.pwn = false;
    this.dae = false;
    this.lwy = null;
    this.tpw = 0;
    this.fvb = 0;
    this.qst = 0;
    this.qee = -1;
    this.swy = -1;
    this.cbh = 0;
    this.xrc = null;
    this.lhg = [];
    this.oom = [];
    this.yoa = null;
    this.jyp = false;
    this.xgn = 0;
    this.zzy = 0;
    this.mxm = false;

    function a(e) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var d = "[\\?&]" + e + "=([^&#]*)";
        var g = new RegExp(d);
        var f = g.exec(window.location.href);
        if (f == null) {
            return ""
        } else {
            return f[1]
        }
    }
    this.tqg = function(d) {
        this.tzb();
        xzl.mav.aag();
        xzl.mav.kqn();
        this.szp();
        if (!this.aey) {
            this.rtq()
        }
        this.ykk(this.xoo(d.asz));
        this.sjt();
        this.chz();
        this.pay();
        this.cdx();
        this.pjo();
        this.bfy();
        this.ymf();
        this.yom();
        this.lpp();
        this.uov();
        return this
    };
    this.pay = function() {};
    this.tzb = function() {};
    this.yom = function() {
        try {
            if (xzl.nfj.value64 && !this.dae) {
                this.drv = new nho();
                this.drv.connect("ws://127.0.0.1:2001/vltclient")
            }
        } catch (d) {
            console.error("Can not connect to terminal!")
        }
    };
    this.szp = function() {
        try {
            var j = a("exit");
            if (j != "") {
                sessionStorage.sessionValue5 = j
            }
            if ((!sessionStorage.sessionValue5 || sessionStorage.sessionValue5 == "null") && xzl.nfj.value8) {
                sessionStorage.sessionValue5 = xzl.nfj.value8
            }
            var p = a("curr");
            if (p != "") {
                sessionStorage.sessionValue8 = p
            }
            if (sessionStorage.sessionValue8 && sessionStorage.sessionValue8 != "") {
                this.dqx = sessionStorage.sessionValue8;
                if (xzl.nfj.value72) {
                    var o = xzl.nfj.value72[this.dqx];
                    if (xzl.nfj.value21.e === true && o) {
                        xzl.nfj.value21.s = o.s;
                        xzl.nfj.value21.m = o.m;
                        xzl.nfj.value21.ts = o.ts;
                        xzl.nfj.value21.cs = o.cs
                    }
                    if (xzl.nfj.value76 && xzl.nfj.value76.f === true && o) {
                        xzl.nfj.value76.s = o.s;
                        xzl.nfj.value76.m = o.m;
                        xzl.nfj.value76.ts = o.ts;
                        xzl.nfj.value76.cs = o.cs
                    }
                }
            }
            if (this.zxe()) {
                sessionStorage.sessionValue7 = ""
            }
            var d = a("w");
            if (d != "") {
                sessionStorage.sessionValue7 = d
            }
            if (sessionStorage.sessionValue7 && sessionStorage.sessionValue7 != "") {
                this.kvj = sessionStorage.sessionValue7
            }
            var f = a("scale");
            if (f == "proportional" || f == "default") {
                sessionStorage.sessionValue22 = f
            }
            var r = a("fullscreen");
            if (r != "") {
                sessionStorage.sessionValue14 = r
            }
            if (sessionStorage.sessionValue14 != "true" && sessionStorage.sessionValue14 != "false") {
                sessionStorage.sessionValue14 = (xzl.mav.tah) ? xzl.nfj.value51.m : xzl.nfj.value51.d
            }
            var i = a("sessionTime");
            if (i != "") {
                sessionStorage.sessionValue15 = i
            }
            if (sessionStorage.sessionValue15 != "true" && sessionStorage.sessionValue15 != "false") {
                sessionStorage.sessionValue15 = xzl.nfj.value11
            }
            var t = a("realityCheckURL");
            if (t != "") {
                sessionStorage.sessionValue16 = t
            }
            var n = a("realityCheckTime");
            if (n != "") {
                sessionStorage.sessionValue17 = n
            }
            if (xzl.nfj.value39 > 0) {
                sessionStorage.sessionValue17 = xzl.nfj.value39
            }
            var s = a("loggedInTime");
            if (sessionStorage.sessionValue18 != null) {
                var g = sessionStorage.sessionValue18.split(";");
                if (g.length == 2) {
                    this.xgn = Number(g[0]);
                    this.zzy = Number(g[1])
                }
            }
            if (s != "") {
                if (Number(s) != this.zzy) {
                    this.zzy = Number(s);
                    this.xgn = new Date().getTime() - (this.zzy * 1000);
                    sessionStorage.sessionValue18 = this.xgn + ";" + this.zzy
                }
            }
            if (xzl.nfj.value86 === true) {
                var q = a("selfTestURL");
                if (q != "") {
                    sessionStorage.sessionValue19 = q
                }
                var m = a("limitsURL");
                if (m != "") {
                    sessionStorage.sessionValue20 = m
                }
                var l = a("pauseURL");
                if (l != "") {
                    sessionStorage.sessionValue21 = l
                }
            }
        } catch (k) {
            console.error(k.wmn)
        }
    };
    this.ymf = function() {
        if (!(xzl.mav.ajl == xzl.os.dmv && xzl.mav.mmk == xzl.uxj.ywh)) {
            document.ontouchstart = xzl.mdj.yec
        }
        if (xzl.mav.mmk != xzl.uxj.cal && xzl.mav.mmk != xzl.uxj.ywh) {
            document.ontouchmove = xzl.mdj.xjj;
            document.ontouchend = xzl.mdj.atj
        }
        if (!xzl.mav.uch) {
            document.onmousedown = xzl.mdj.gye;
            document.onmouseup = xzl.mdj.gdu;
            document.onmousemove = xzl.mdj.oky
        }
        document.onkeydown = xzl.mdj.wfh;
        document.onkeyup = xzl.mdj.mzl;
        document.oncontextmenu = xzl.mdj.nnh;
        this.plq = (this.jms() && xzl.mav.ayv() && xzl.mav.tah);
        if (xzl.mav.fll() === false && xzl.mav.ajl === xzl.os.cjo && xzl.mav.efs() === true && screen.width <= 414 && this.xmb()) {
            this.cbh = setInterval(this.gph, 1000)
        }
    };
    this.yec = function(d) {
        if (xzl.mdj.gql === true) {
            xzl.mdj.qrd();
            xzl.mdj.zta()
        }
        xzl.mdj.xuh(d)
    };
    this.atj = function(d) {
        if (xzl.mdj.gql === true) {
            if (xzl.mdj.plq) {
                xzl.mdj.xkf()
            } else {
                xzl.mdj.xak(d)
            }
        } else {
            if (xzl.mdj.ujw) {
                xzl.mdj.drr()
            }
        }
    };
    this.xjj = function(d) {
        xzl.mdj.weg(d)
    };
    this.gye = function(d) {
        window.focus();
        if (xzl.mdj.gql === true) {
            xzl.mdj.qrd();
            xzl.mdj.zta()
        }
        xzl.mdj.xuh(d)
    };
    this.gdu = function(d) {
        if (xzl.mdj.gql === true) {
            xzl.mdj.xak(d)
        }
    };
    this.oky = function(d) {};
    this.wfh = function(d) {
        if ((d.keyCode == 122 && (xzl.mav.ajl == xzl.os.ssn || xzl.mav.ajl == xzl.os.qow)) || (d.keyCode == 70 && d.ctrlKey && xzl.mav.ajl == xzl.os.vaq)) {
            return
        }
        xzl.mdj.qrd();
        xzl.mdj.zta();
        xzl.mdj.dqi(d)
    };
    this.mzl = function(d) {
        xzl.mdj.ywi(d)
    };
    this.nnh = function() {
        return false
    };
    this.xuh = function(d) {};
    this.xak = function(d) {};
    this.dqi = function(d) {};
    this.ywi = function(d) {};
    this.weg = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        return
    };
    this.ogj = function() {
        var f = xzl.mdj.ktg.wqb("topb"),
            e = xzl.mdj.ktg.wqb("settings"),
            d = xzl.mdj.ktg.wqb("topi"),
            g = xzl.mdj.ktg.wqb("gameb");
        if (xzl.mav.mmk == xzl.uxj.cal || xzl.mav.mmk == xzl.uxj.mon) {
            xzl.mdj.dtv = (window.innerWidth == window.outerWidth)
        } else {
            if (xzl.mav.mmk == xzl.uxj.lzd || xzl.mav.mmk == xzl.uxj.lov) {
                xzl.mdj.dtv = (window.innerHeight >= window.outerHeight)
            } else {
                if (xzl.mav.mmk == xzl.uxj.afy) {
                    xzl.mdj.dtv = (document.fullscreenElement) ? true : false
                } else {
                    if (xzl.mav.tah) {
                        if (xzl.mav.mmk == xzl.uxj.ppz || xzl.mav.mmk == xzl.uxj.hnf || xzl.mav.mmk == xzl.uxj.kat) {
                            xzl.mdj.dtv = (document.webkitFullscreenElement) ? true : false
                        } else {
                            if (xzl.mav.mmk == xzl.uxj.ywh) {
                                xzl.mdj.dtv = (document.mozFullScreenElement) ? true : false
                            }
                        }
                    }
                }
            }
        }
        if (d) {
            d.uem("fullscreen", xzl.mdj.dtv)
        }
        if (f) {
            f.fed.ybw("fullscreen", "#uem", [(xzl.mdj.dtv) ? 1 : 0])
        }
        if (e) {
            e.fed.ybw("fullscreen", "#uem", [(xzl.mdj.dtv) ? 1 : 0])
        }
        if (g) {
            g.fed.ybw("fullscreen", "#uem", [(xzl.mdj.dtv) ? 1 : 0])
        }
        xzl.mdj.lid();
        xzl.mdj.pfk();
        xzl.mdj.pkc();
        if (xzl.mav.efs() === true && xzl.mav.fll() === false) {
            document.body.style.height = "5000px"
        }
        if (!xzl.mav.fll() && xzl.mav.mmk === xzl.uxj.kat && xzl.mdj.wex < screen.width) {
            window.scrollTo(0, 0)
        }
    };
    this.nad = function() {
        xzl.mdj.ogj();
        xzl.mdj.gph()
    };
    this.gph = function() {
        if (xzl.mav.efs() === true && xzl.mav.fll() === false) {
            if (xzl.mdj.xmb() === true) {
                var f = document.getElementById("slideUpOverlay"),
                    e = document.getElementById("slideElem1"),
                    d = document.getElementById("slideElem2");
                if (f && e && d) {
                    if (window.innerHeight < screen.width) {
                        e.className = "slideUpAnim1";
                        d.className = "slideUpAnim2";
                        f.style.display = "block";
                        document.ontouchstart = null;
                        document.ontouchend = null;
                        document.ontouchmove = null;
                        if (window.ontouchmove == null) {
                            xzl.mdj.ogj();
                            window.ontouchmove = xzl.mdj.nad
                        }
                    } else {
                        e.className = null;
                        d.className = null;
                        f.style.display = "none";
                        document.ontouchstart = xzl.mdj.yec;
                        document.ontouchmove = xzl.mdj.xjj;
                        document.ontouchend = xzl.mdj.atj;
                        if (window.ontouchmove != null) {
                            xzl.mdj.ogj();
                            window.ontouchmove = null
                        }
                        window.scrollTo(0, 0)
                    }
                }
            }
        }
    };
    this.omg = function(g) {
        var j = document.getElementById("rotateOverlay"),
            e = document.getElementById("rotatePanel"),
            k = document.getElementById("rotate"),
            f = document.getElementById("rotateInfo"),
            d = 500,
            l = 700,
            n = window.innerHeight / d,
            m = window.innerWidth / l,
            i = (n < m) ? n : m;
        if (j && k) {
            if (g === true) {
                if (i < 1) {
                    xzl.mav.yqs(e, i, i)
                }
                f.innerHTML = xzl.mdj.language.nkg;
                k.className = "rotateAnim";
                j.style.display = "block";
                xzl.mdj.vrz = true
            } else {
                j.style.display = "none";
                k.className = null;
                xzl.mdj.vrz = false
            }
        }
    };
    this.ikb = function() {
        var d = xzl.mdj.ktg.wqb("settings");
        xzl.mdj.ogj();
        if (d) {
            d.fed.ybw("adjustment", "#uem", [(xzl.mdj.gxl === xzl.asz.nki) ? 0 : 1]);
            d.shb()
        }
        if (xzl.mdj.bjs === true) {
            xzl.mdj.vrz = true;
            xzl.mdj.ssd(true);
            xzl.mdj.omg(true)
        } else {
            xzl.mdj.vrz = false;
            xzl.mdj.ssd((xzl.mdj.klk[xzl.mdj.yua] === 0));
            xzl.mdj.omg(false)
        }
    };
    this.lid = function() {
        this.xzr = window.innerWidth, this.wex = window.innerHeight;
        this.ylu = false;
        if (xzl.mav.fll() == true && xzl.nfj.value69 === true) {
            if (xzl.mav.bxw() === true) {
                this.ylu = true;
                this.xzr = (window.innerWidth > window.outerWidth) ? window.outerWidth : window.innerWidth;
                this.wex = (window.innerHeight > window.outerHeight) ? window.outerHeight : window.innerHeight;
                if (this.xzr > this.wex) {
                    this.wex *= 0.98
                }
            } else {
                if (xzl.mav.efs() === true) {
                    this.ylu = true;
                    if (window.orientation === 90 || window.orientation === -90) {
                        if (screen.height === 1024) {
                            this.xzr = 1024;
                            this.wex = (window.innerHeight < 704) ? 662 : 704
                        } else {
                            if (screen.height === 736) {
                                this.xzr = 736;
                                this.wex = (window.innerHeight < 414 || window.innerHeight === 475) ? 370 : 414
                            } else {
                                if (screen.height === 667) {
                                    this.xzr = 667;
                                    this.wex = 375
                                }
                            }
                        }
                    } else {
                        if (screen.height === 1024) {
                            this.xzr = 768;
                            this.wex = (window.innerHeight < 960) ? 928 : 960
                        } else {
                            if (screen.height === 736) {
                                this.xzr = 414;
                                this.wex = 628
                            } else {
                                if (screen.height === 667) {
                                    this.xzr = 375;
                                    this.wex = 559
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.pkc = function() {
        var g = 0,
            j = 0,
            f = 1,
            e = 1,
            i = this.xzr,
            d = this.wex;
        this.wfd = (this.dtv || i < this.width || d < this.height || this.asz.rgg);
        g = this.uyk(this.wfd);
        f = ((i - j) / this.width).toString();
        f = Number(f.substring(0, (f.length > 5) ? 5 : f.length));
        e = ((d - g) / this.height).toString();
        e = Number(e.substring(0, (e.length > 5) ? 5 : e.length));
        if (this.wfd) {
            if (this.asz.eax || sessionStorage.sessionValue22 == "proportional") {
                if (f > e) {
                    this.bke = e;
                    this.wpw = e
                } else {
                    this.bke = f;
                    this.wpw = f
                }
            } else {
                this.bke = f;
                this.wpw = e
            }
        } else {
            this.bke = 1;
            this.wpw = 1
        }
        xzl.mav.yqs(this.canvas, this.bke, this.wpw);
        if (this.kxa != null) {
            xzl.mav.yqs(this.kxa, this.bke, this.wpw, ((this.asz.kxa.mki.x) - ((this.asz.kxa.mki.x + this.asz.kxa.fgz) / 2 * (1 - this.bke))), ((this.asz.kxa.mki.y) - ((this.asz.kxa.mki.y + this.asz.kxa.twu) / 2 * (1 - this.wpw))))
        }
        if (this.agy != null) {
            xzl.mav.yqs(this.agy, this.bke, this.wpw)
        }
        if (this.wfd) {
            this.offsetLeft = Math.floor((i - (this.canvas.width * this.bke))) / 2;
            this.offsetTop = Math.floor((d - (this.canvas.height * this.wpw))) / 2
        } else {
            this.offsetLeft = this.reb.offsetLeft;
            this.offsetTop = this.reb.offsetTop
        }
    };
    this.pfk = function() {
        if (this.rer() === true) {
            var e = null;
            if (this.hvx[this.yjp] === xzl.bmv.mpr) {
                if (window.orientation === -90) {
                    e = xzl.asz.lri
                } else {
                    e = xzl.asz.nki
                }
            } else {
                if (this.hvx[this.yjp] === xzl.bmv.vwu) {
                    e = xzl.asz.lri
                } else {
                    if (this.hvx[this.yjp] === xzl.bmv.jmc) {
                        e = xzl.asz.nki
                    }
                }
            }
            this.bjs = (this.wex > this.xzr);
            this.ykk(e);
            this.bkn(false);
            if (this.wmr === true) {
                this.shb()
            } else {
                this.ktg.ybw("loading", "#shb")
            }
        } else {
            if (xzl.mav.tah) {
                var f = (this.xzr > this.wex) ? this.xgl : this.txa,
                    d = this.asz.gns,
                    e = null;
                if (f != this.mzu) {
                    this.mzu = f;
                    if (this.aey) {
                        e = (this.mzu == this.xgl) ? xzl.asz.pxs : xzl.asz.mij
                    } else {
                        e = (this.mzu == this.xgl) ? xzl.nfj.value33 : xzl.nfj.value32
                    }
                    this.ykk(e);
                    this.bkn((d != this.asz.gns) || this.aey);
                    if (this.wmr === true) {
                        if (this.aey && this.pwn) {
                            this.wdk(this.bnt(this.language.jzh))
                        } else {
                            this.shb()
                        }
                    } else {
                        this.ktg.ybw("loading", "#shb")
                    }
                }
            } else {
                if (!this.aey) {
                    e = (this.dtv) ? xzl.nfj.value15 : xzl.nfj.value14;
                    this.ykk(e);
                    this.bkn(false);
                    if (this.wmr === true) {
                        this.shb()
                    } else {
                        this.ktg.ybw("loading", "#shb")
                    }
                }
            }
        }
    };
    this.rer = function() {
        return false
    };
    this.xmb = function() {
        return false
    };
    this.ykk = function(d) {};
    this.sjt = function() {
        this.style = new qdy()
    };
    this.uyk = function(d) {
        var e = 0;
        if (xzl.mav.bxw() && window.innerWidth > window.innerHeight && d) {
            if (this.gql === true && document.body.style.backgroundColor !== this.style.jfv.backgroundColor) {
                document.body.style.backgroundColor = this.style.jfv.backgroundColor
            }
        }
        return e
    };
    this.ytc = function() {
        if (xzl.mav.bxw() && !xzl.mav.fll() && window.innerWidth > window.innerHeight) {
            return 0
        }
        return 0
    };
    this.mud = function() {
        return false
    };
    this.cdx = function() {
        if (xzl.mav.uch) {
            this.ond = new oic()
        } else {
            this.ond = new xhr()
        }
        this.ond.tqg();
        this.ond.flw(this.ate())
    };
    this.pjo = function() {
        this.ktg = new ccr();
        this.ktg.tqg();
        this.ktg.qzf("jackpots")
    };
    this.ate = function() {
        var d = new cuf();
        d.tqg();
        return d
    };
    this.rtq = function() {
        this.lwy = new alq()
    };
    this.chz = function() {
        try {
            var d = a("lang"),
                f = a("uselang"),
                o = [],
                p = [];
            if (d != "") {
                sessionStorage.sessionValue1 = d
            }
            if (f != "") {
                sessionStorage.sessionValue11 = f
            }
            if (sessionStorage.sessionValue11) {
                o = sessionStorage.sessionValue11.split(",");
                for (var l = 0, m = o.length; l < m; l++) {
                    for (var k = 0, g = xzl.nfj.value5.length; k < g; k++) {
                        if (o[l] === xzl.nfj.value5[k] && p.indexOf(o[l]) < 0) {
                            p.push(o[l])
                        }
                    }
                }
                if (p.length == 0) {
                    p.push(xzl.nfj.value5[0])
                }
                xzl.nfj.value5 = [];
                for (var l = 0, m = p.length; l < m; l++) {
                    xzl.nfj.value5.push(p[l])
                }
            }
            if (sessionStorage.sessionValue1 == null) {
                var q = xzl.mav.qeq();
                if (this.gyc(q)) {
                    sessionStorage.sessionValue1 = q
                } else {
                    if (q === xzl.language.EN && this.gyc(xzl.language.US)) {
                        sessionStorage.sessionValue1 = xzl.language.US
                    } else {
                        if (q === xzl.language.DE && this.gyc(xzl.language.AT)) {
                            sessionStorage.sessionValue1 = xzl.language.AT
                        } else {
                            if (q === xzl.language.ES && this.gyc(xzl.language.MX)) {
                                sessionStorage.sessionValue1 = xzl.language.MX
                            } else {
                                if (q === xzl.language.ES && this.gyc(xzl.language.CO)) {
                                    sessionStorage.sessionValue1 = xzl.language.CO
                                } else {
                                    if (q === xzl.language.ES && this.gyc(xzl.language.CL)) {
                                        sessionStorage.sessionValue1 = xzl.language.CL
                                    } else {
                                        if (q === xzl.language.ES && this.gyc(xzl.language.VE)) {
                                            sessionStorage.sessionValue1 = xzl.language.VE
                                        } else {
                                            if (q === xzl.language.EN && this.gyc(xzl.language.BR)) {
                                                sessionStorage.sessionValue1 = xzl.language.BR
                                            } else {
                                                sessionStorage.sessionValue1 = xzl.nfj.value5[0]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this.gyc(sessionStorage.sessionValue1)) {
                for (var l = 0, m = xzl.nfj.value5.length; l < m; l++) {
                    if (xzl.nfj.value5[l] == sessionStorage.sessionValue1) {
                        this.eld = l;
                        break
                    }
                }
                this.language = this.enk(sessionStorage.sessionValue1)
            } else {
                this.eld = 0;
                this.language = this.enk(xzl.nfj.value5[this.eld]);
                sessionStorage.sessionValue1 = xzl.nfj.value5[this.eld]
            }
        } catch (n) {
            this.eld = 0;
            this.language = this.enk(xzl.nfj.value5[this.eld]);
            console.error(n.wmn)
        }
    };
    this.lpp = function() {
        var d = (xzl.nfj.value45 == xzl.kgm.niz) ? this.asz.kgm.mdj : this.asz.kgm.vug;
        this.reb = document.getElementById("gameArea");
        if (this.ylu === false) {
            this.reb.style.marginTop = (-d.mki.height / 2) + "px";
            this.reb.style.marginLeft = (-d.mki.width / 2) + "px"
        } else {
            this.reb.style.left = "0px";
            this.reb.style.top = "0px";
            this.reb.style.marginTop = ((window.innerHeight - d.mki.height) / 2) + "px";
            this.reb.style.marginLeft = ((window.innerWidth - d.mki.width) / 2) + "px"
        }
        this.reb.style.width = (d.mki.width > window.innerWidth) ? window.innerWidth + "px" : d.mki.width + "px";
        this.reb.style.height = (d.mki.height > window.innerHeight) ? window.innerHeight + "px" : d.mki.height + "px";
        this.canvas = document.getElementById("canvas");
        this.canvas.width = Math.round(d.mki.width);
        this.canvas.height = Math.round(d.mki.height);
        this.context2D = this.canvas.getContext("2d");
        this.agy = document.getElementById("gameOverlay");
        if (this.agy) {
            this.agy.style.width = d.mki.width + "px";
            this.agy.style.height = d.mki.height + "px"
        }
        this.oci(d)
    };
    this.oci = function(e) {
        var f = new tvz(),
            d = (xzl.nfj.value45 == xzl.kgm.niz) ? this.style.kgm.mdj : this.style.kgm.vug;
        f.tqg(e.mki, this.context2D);
        f.parent = this;
        f.oyg = (xzl.mav.tah) ? this.efi : this.drr;
        f.tre = (this.aey) ? this.language.ley : this.language.ydi;
        f.ksh = this.language.error;
        f.jlm(e);
        f.png(d);
        this.ktg.ovw("loading", f)
    };
    this.tdu = function() {
        var d = new hrb();
        d.tqg(this.asz.ujk.mki, null, this.context2D);
        d.parent = this;
        d.jlm(this.asz.ujk);
        d.png(this.style.ujk);
        if (sessionStorage.sessionValue15 == "true" && xzl.nfj.value49) {
            d.kue("time", "", "--:-- [--:--]")
        } else {
            if (sessionStorage.sessionValue15 == "true" || xzl.nfj.value49) {
                d.kue("time", "", "--:--")
            }
        }
        if (this.zxe()) {
            d.kue("freeplay", "", this.language.emo)
        } else {
            d.kue("id", "", "")
        }
        this.ktg.ovw("topi", d)
    };
    this.iwg = function() {
        var d = new cin();
        d.tqg(this.asz.iqi.mki, null, this.context2D);
        d.parent = this;
        d.jlm(this.asz.iqi);
        d.png(this.style.iqi, false);
        d.hix(false);
        this.ktg.ovw("topb", d)
    };
    this.fje = function() {};
    this.gtu = function() {
        var d = new qps();
        d.tqg(this.asz.cec.mki, null, this.context2D);
        d.parent = this;
        d.lsi(this.asz.cec);
        d.png(this.style.cec);
        d.hix(false);
        this.ktg.ovw("stats", d)
    };
    this.nvu = function() {
        this.iww = new eke();
        this.iww.tqg();
        this.iww.png(this.style.iww);
        this.iww.jlm(this.asz.iww)
    };
    this.nzq = function() {
        this.kvc = new hjc();
        this.kvc.tqg();
        this.kvc.png(this.style.kvc);
        this.kvc.jlm(this.asz.kvc)
    };
    this.yxc = function() {
        if (this.one()) {
            this.blh.dzn = document.getElementById("jurisdictionDiv");
            this.blh.dey = document.getElementById("btnsp");
            this.blh.yyh = document.getElementById("btnsl");
            this.blh.pfh = document.getElementById("btnst");
            if (this.blh.dey) {
                this.blh.dey.innerHTML = this.language.vji;
                this.blh.dey.onclick = this.pul;
                this.blh.dey.ontouchend = this.pul
            }
            if (this.blh.yyh) {
                this.blh.yyh.innerHTML = this.language.yqm;
                this.blh.yyh.onclick = this.qix;
                this.blh.yyh.ontouchend = this.qix
            }
            if (this.blh.pfh) {
                this.blh.pfh.innerHTML = this.language.noe;
                this.blh.pfh.onclick = this.pmq;
                this.blh.pfh.ontouchend = this.pmq
            }
            this.dqo();
            this.aun()
        }
    };
    this.gwc = function(e) {
        var d = new dnd();
        d.tqg(this.asz.aki.mki, null, this.context2D);
        d.parent = this;
        d.jaf = true;
        if (e) {
            d.zzw(e)
        }
        d.lsi(this.asz.aki);
        d.tzp(this.language);
        d.png(this.style.aki);
        d.jlm(this.asz.aki);
        d.hix(false);
        this.ktg.ovw("autop", d)
    };
    this.cmq = function(d) {
        var e = new ycw();
        e.tqg(this.asz.zxp.mki, null, this.context2D);
        e.parent = this;
        if (d) {
            e.unr(d)
        }
        e.hix(false);
        this.ktg.ovw("settings", e)
    };
    this.bkn = function(d) {};
    this.jfw = function() {
        var d = this.ktg.wqb("stats");
        if (d) {
            d.tzs(this.asz.cec.mki);
            d.jlm(this.asz.cec)
        }
    };
    this.pyc = function() {
        if (this.iww) {
            this.iww.jlm(this.asz.iww)
        }
    };
    this.cax = function() {
        if (this.kvc) {
            this.kvc.jlm(this.asz.kvc)
        }
    };
    this.dqo = function() {
        var d = null,
            e = 0;
        if (this.blh) {
            d = this.asz.mpk;
            if (this.blh.dzn) {
                xzl.mav.yao(this.blh.dzn, d.mss)
            }
            if (this.blh.dey) {
                this.blh.dey.style.fontSize = d.okn.fontSize + "px";
                this.blh.dey.style.textIndent = d.okn.textIndent + "px";
                xzl.mav.yao(this.blh.dey, d.yud)
            }
            if (this.blh.yyh) {
                this.blh.yyh.style.fontSize = d.okn.fontSize + "px";
                this.blh.yyh.style.textIndent = d.okn.textIndent + "px";
                xzl.mav.yao(this.blh.yyh, d.ufs)
            }
            if (this.blh.pfh) {
                this.blh.pfh.style.fontSize = d.okn.fontSize + "px";
                this.blh.pfh.style.textIndent = d.okn.textIndent + "px";
                xzl.mav.yao(this.blh.pfh, d.zrx)
            }
            if (this.blh.dzn) {
                e = (d.mss.width - d.mss.height) / 2;
                if (this.gxl == xzl.asz.lri) {
                    this.blh.dzn.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + e + "px)"
                } else {
                    this.blh.dzn.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + (-e) + "px)"
                }
            }
        }
    };
    this.ygx = function() {
        var d = this.ktg.wqb("autop");
        if (d) {
            d.tzs(this.asz.aki.mki);
            d.jlm(this.asz.aki)
        }
    };
    this.rtr = function() {
        var d = this.ktg.wqb("settings");
        if (d) {
            d.tzs(this.asz.zxp.mki);
            d.jlm(this.asz.zxp)
        }
    };
    this.wqe = function() {
        var d = this.ktg.wqb("topi");
        if (d) {
            d.tzs(this.asz.ujk.mki);
            d.jlm(this.asz.ujk)
        }
    };
    this.wad = function() {
        var d = this.ktg.wqb("topb");
        if (d) {
            d.tzs(this.asz.iqi.mki);
            d.jlm(this.asz.iqi)
        }
    };
    this.bdt = function() {
        var e = this.ktg.wqb("loading"),
            d = (xzl.nfj.value45 == xzl.kgm.niz) ? this.asz.kgm.mdj : this.asz.kgm.vug;
        if (e) {
            this.canvas.width = 0;
            if (this.ylu === false) {
                this.reb.style.marginTop = (-d.mki.height / 2) + "px";
                this.reb.style.marginLeft = (-d.mki.width / 2) + "px"
            } else {
                this.reb.style.left = "0px";
                this.reb.style.top = "0px";
                this.reb.style.marginTop = ((this.wex - d.mki.height) / 2) + "px";
                this.reb.style.marginLeft = ((this.xzr - d.mki.width) / 2) + "px"
            }
            this.reb.style.width = (d.mki.width > this.xzr) ? this.xzr + "px" : d.mki.width + "px";
            this.reb.style.height = (d.mki.height > this.wex) ? this.wex + "px" : d.mki.height + "px";
            this.canvas.width = Math.round(d.mki.width);
            this.canvas.height = Math.round(d.mki.height);
            if (this.agy) {
                this.agy.style.width = d.mki.width + "px";
                this.agy.style.height = d.mki.height + "px"
            }
            e.tzs(d.mki);
            e.jlm(d)
        }
    };
    this.bfy = function() {
        if (xzl.mav.tah && !xzl.mav.uch) {
            if (!this.ond.afp && xzl.mav.mmk != xzl.uxj.yjt) {
                this.tcp = false;
                this.yua = 0
            }
        }
    };
    this.xoo = function(d) {
        if (xzl.mav.tah) {
            if (!this.aey) {
                return xzl.asz.uzn
            } else {
                if (!this.dae) {
                    return xzl.asz.pxs
                }
            }
        }
        return d
    };
    this.puy = function() {
        var d = this.ktg.wqb("loading");
        this.ogj();
        if (d) {
            d.mdi = true
        }
        if ((xzl.mav.mmk === xzl.uxj.ppz || xzl.mav.mmk === xzl.uxj.lov || xzl.mav.mmk === xzl.uxj.fwg) && xzl.mav.ajl === xzl.os.dmv && xzl.mav.ulp === true) {
            if (this.ond.afp === false || xzl.mav.ayv() === false || xzl.mav.sid() === false) {
                xzl.fbk = xzl.iqz.hsi
            }
        }
        if (xzl.fbk == 0) {
            if (this.tcp === true && xzl.mav.dwr().length === 0) {
                this.tcp = false
            }
            if (d) {
                d.shb(0)
            }
            this.oeg();
            if (this.tcp === true) {
                this.xba()
            }
            this.ond.start()
        } else {
            if (d) {
                if (xzl.fbk == xzl.iqz.xwv && xzl.mav.mmk === xzl.uxj.kat) {
                    d.csa = this.language.fqm;
                    d.shb(0)
                } else {
                    if (xzl.fbk == xzl.wmn.cai) {
                        d.csa = this.language.gub;
                        d.shb(0)
                    } else {
                        d.csa = this.language.ayy;
                        if (xzl.mav.ajl === xzl.os.dmv || xzl.mav.ajl === xzl.os.qow) {
                            if (xzl.fbk != xzl.iqz.xwv && sessionStorage.sessionValue1 === xzl.language.TR) {
                                d.csa += "|Google Chrome" + this.language.mwb
                            } else {
                                if (xzl.fbk != xzl.iqz.xwv && (sessionStorage.sessionValue1 === xzl.language.GE || sessionStorage.sessionValue1 === xzl.language.HU)) {
                                    d.csa += "|" + this.language.unv + " Google Chrome" + this.language.sqi
                                } else {
                                    d.csa += "|" + this.language.mwb + " Google Chrome"
                                }
                            }
                        } else {
                            if (xzl.mav.ajl === xzl.os.ssn || xzl.mav.ajl === xzl.os.qow) {
                                if (xzl.fbk != xzl.iqz.xwv && sessionStorage.sessionValue1 === xzl.language.TR) {
                                    d.csa += "|Google Chrome, Mozilla Firefox" + this.language.mwb
                                } else {
                                    if (xzl.fbk != xzl.iqz.xwv && (sessionStorage.sessionValue1 === xzl.language.GE || sessionStorage.sessionValue1 === xzl.language.HU)) {
                                        d.csa += "|" + this.language.unv + " Google Chrome, Mozilla Firefox" + this.language.sqi
                                    } else {
                                        d.csa += "|" + this.language.mwb + " Google Chrome, Mozilla Firefox"
                                    }
                                }
                            }
                        }
                        console.error("Errorcode: " + xzl.fbk);
                        d.shb(0)
                    }
                }
            }
        }
    };
    this.oeg = function() {};
    this.xba = function() {};
    this.uov = function() {
        var e = this.uhs + this.asz.type + "/",
            d = this.ktg.wqb("loading");
        if (!this.aey) {
            this.ond.ebd("continue", xzl.nfj.value30 + "/basic/images/" + this.asz.type + "/btn_continue.png")
        }
        if (xzl.nfj.value45 == xzl.kgm.niz) {
            e += "load.jpg"
        } else {
            if (xzl.nfj.value45 == xzl.kgm.vmq) {
                e += "load_amanet.jpg"
            }
        }
        if (e.indexOf(".png") >= 0) {
            if (d) {
                d.ypr = true
            }
        }
        this.ond.ebd("splash", e);
        this.ond.pxu()
    };
    this.fni = function() {};
    this.gyc = function(e) {
        for (var d = 0; d < xzl.nfj.value5.length; d++) {
            if (xzl.nfj.value5[d] == e) {
                return true
            }
        }
        return false
    };
    this.mhv = function() {
        xzl.mdj.lpi = true;
        if (!xzl.mdj.aey) {
            xzl.mdj.hba();
            if (xzl.mdj.kia()) {
                xzl.mdj.vuy()
            }
        } else {
            xzl.mdj.zzi()
        }
        xzl.mdj.connect()
    };
    this.hba = function() {};
    this.zzi = function() {};
    this.connect = function() {
        this.mqy.connect(this.bnr, this.tex, this.pmx, this.yhs, this.xzy, this.kvj, this.dqx)
    };
    this.ggo = function(d) {
        if (typeof d === "undefined") {
            xzl.mdj.mqy.ggo(0)
        } else {
            xzl.mdj.mqy.ggo(d)
        }
    };
    this.ebl = function(d) {
        this.kna = 0;
        this.zty = 0;
        this.wdp = d;
        clearInterval(this.tpw);
        this.tpw = setInterval(this.gvh, 1000)
    };
    this.gvh = function() {
        var d = xzl.mdj.ktg.wqb("loading");
        xzl.mdj.kna++;
        xzl.mdj.zty = Math.round(xzl.nfj.value47 / 1000) - xzl.mdj.kna;
        xzl.mdj.zty = (xzl.mdj.zty > 0) ? xzl.mdj.zty : 0;
        if (!xzl.mdj.gql) {
            if (d) {
                d.csa = xzl.mdj.language.wcc + "|" + xzl.mdj.language.bas + ": " + xzl.mdj.wdp + " (" + xzl.mdj.zty + " sec)";
                d.shb(0)
            }
        }
    };
    this.bdi = function() {
        return xzl.nfj.value74
    };
    this.shb = function(d, g, e, f) {};
    this.dst = function() {
        return (this.wmr === true && this.gql === true && this.bjs === false)
    };
    this.wdk = function(e) {
        var d = this.ktg.wqb("history");
        this.wmr = true;
        if (this.gql) {
            if (this.asz.fdw) {
                xzl.mav.snb(this.context2D, this.asz.mdj.mki.x - this.asz.mdj.vqq, this.asz.mdj.mki.y - this.asz.mdj.vqq, this.asz.mdj.mki.width + 2 * this.asz.mdj.vqq, this.asz.mdj.mki.height + 2 * this.asz.mdj.vqq, "black", 1)
            }
            xzl.mav.trr(this.context2D, e, "white", this.asz.mdj.mki.x, this.asz.mdj.mki.y, this.asz.mdj.mki.width, this.asz.mdj.mki.height, "arial", 28, "bold");
            if (d) {
                d.shb()
            }
        }
    };
    this.czr = function() {
        if (xzl.mdj.iww) {
            xzl.mdj.iww.ezd()
        }
        xzl.mdj.upw(false);
        xzl.mdj.wpn.jyi(false);
        xzl.mdj.wpn.fed.ybw("exit", "#osq", [true]);
        if (xzl.mav.vzj()) {
            xzl.mav.vys();
            setTimeout(xzl.mdj.ogj, 1400)
        }
        if (xzl.nfj.value67 > 0) {
            xzl.mdj.ggo(xzl.nfj.value67)
        } else {
            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null" && xzl.mdj.yoa) {
                xzl.mdj.yoa.xlf({
                    sender: xzl.mdj.bnr,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                });
                window.location.href = decodeURIComponent(sessionStorage.sessionValue16)
            } else {
                if (sessionStorage.sessionValue5 && sessionStorage.sessionValue5 != "null" && xzl.mdj.yoa) {
                    xzl.mdj.yoa.gca({
                        sender: xzl.mdj.bnr,
                        lang: sessionStorage.sessionValue1.toUpperCase()
                    });
                    if (sessionStorage.sessionValue5 !== "(api)") {
                        window.location.href = decodeURIComponent(sessionStorage.sessionValue5)
                    }
                }
            }
        }
    };
    this.tyo = function() {
        clearTimeout(xzl.mdj.qee);
        xzl.mdj.upw(false);
        if (xzl.mdj.wpn) {
            xzl.mdj.wpn.jyi(false)
        }
        if (!xzl.mdj.aey) {
            xzl.mdj.stop();
            if (xzl.mdj.wpn) {
                xzl.mdj.wpn.fed.ybw("info", "#lqj", [xzl.mdj.language.qab]);
                xzl.mdj.shb()
            }
            if (xzl.mdj.rer() === true && xzl.mav.vzj()) {
                xzl.mav.vys();
                setTimeout(xzl.mdj.ogj, 800);
                setTimeout(xzl.mdj.mqy.bcu.close, 800)
            } else {
                xzl.mdj.mqy.bcu.close()
            }
        } else {
            xzl.mdj.mqy.close()
        }
    };
    this.gld = function() {
        xzl.mdj.plq = true
    };
    this.xkf = function() {
        if (xzl.mav.tah == true) {
            if (xzl.mdj.plq == true) {
                xzl.mdj.plq = false;
                xzl.mav.vys();
                setTimeout(xzl.mdj.ogj, 1400)
            }
        } else {
            xzl.mav.vys();
            setTimeout(xzl.mdj.ogj, 1400)
        }
    };
    this.alg = function() {
        var e = (xzl.mdj.rer() === true) ? "smartphone" : "desktop",
            i = "en";
        if (sessionStorage.sessionValue1 == xzl.language.ES || sessionStorage.sessionValue1 == xzl.language.CO || sessionStorage.sessionValue1 == xzl.language.CL || sessionStorage.sessionValue1 == xzl.language.MX || sessionStorage.sessionValue1 == xzl.language.VE) {
            i = "es"
        } else {
            if (sessionStorage.sessionValue1 == xzl.language.RO) {
                i = "ro"
            } else {
                if (sessionStorage.sessionValue1 == xzl.language.PT || sessionStorage.sessionValue1 == xzl.language.BR) {
                    i = "pt"
                } else {
                    if (sessionStorage.sessionValue1 == xzl.language.HR) {
                        i = "hr"
                    } else {
                        if (sessionStorage.sessionValue1 == xzl.language.DE) {
                            i = "de"
                        } else {
                            if (sessionStorage.sessionValue1 == xzl.language.SE) {
                                i = "se"
                            }
                        }
                    }
                }
            }
        }
        if (xzl.mdj.elg != "") {
            var f = null,
                g = "",
                d = "";
            if (xzl.mdj.elg != "") {
                g += "rtp=" + xzl.mdj.elg
            }
            if (xzl.mdj.sps != "") {
                g += (xzl.mdj.elg != "") ? "&" : "";
                g += "maxwin=" + ((xzl.mdj.sps == "0") ? "0" : xzl.mdj.jwd(Number(xzl.mdj.sps) * xzl.mdj.fds()))
            }
            d = encodeURIComponent(g);
            f = window.open(xzl.nfj.value30 + "/gamerules/" + i + "/" + e + "/" + xzl.mdj.bnr.toLowerCase() + ".html?" + d, "_blank", (e === "desktop") ? "width=800,scrollbars=yes" : null);
            if (f == null || typeof f === "undefined") {
                window.location.href = xzl.nfj.value30 + "/gamerules/" + i + "/" + e + "/" + xzl.mdj.bnr.toLowerCase() + ".html?" + d
            }
        }
    };
    this.cht = function() {
        xzl.mdj.bwi = false;
        xzl.mdj.yhm();
        xzl.mdj.pku();
        xzl.mdj.dwj()
    };
    this.doq = function() {
        var d = xzl.mdj.ktg.wqb("stats");
        if (d) {
            d.tbe(true, true)
        }
        xzl.mdj.xeg.close(true)
    };
    this.bry = function() {
        var d = xzl.mdj.ktg.wqb("stats");
        xzl.mdj.stop();
        if (d && d.jte()) {
            d.tbe(true, true)
        }
        xzl.mdj.mqy.bcu.close();
        if (xzl.mdj.xeg) {
            xzl.mdj.xeg.close(false)
        }
    };
    this.vrl = function() {
        clearTimeout(xzl.mdj.qee);
        xzl.mdj.wpn.jyi(false);
        xzl.mdj.stop();
        xzl.mdj.mqy.bcu.gkn()
    };
    this.npu = function() {
        if (xzl.mdj.pwn) {
            return
        }
        var d = xzl.mdj.ktg.wqb("history");
        if (d) {
            d.jyi(false)
        }
        xzl.mdj.stop();
        xzl.mdj.mqy.nix(xzl.mdj.nat)
    };
    this.wox = function() {
        if (xzl.mdj.pwn) {
            return
        }
        var d = xzl.mdj.ktg.wqb("history");
        if (d) {
            d.jyi(false)
        }
        xzl.mdj.stop();
        xzl.mdj.mqy.mgw(xzl.mdj.nat)
    };
    this.vte = function() {
        var d = xzl.mdj.ktg.wqb("history");
        if (d) {
            d.jyi(false)
        }
        xzl.mdj.stop();
        clearInterval(xzl.mdj.cbh);
        xzl.mdj.ytl();
        xzl.mdj.mqy.close()
    };
    this.nit = function() {
        xzl.mdj.ond.yxe("btn");
        xzl.mdj.ond.ewm("btn");
        xzl.mdj.mvf()
    };
    this.hwx = function() {
        var f = xzl.mdj.ktg.wqb("topb"),
            e = xzl.mdj.ktg.wqb("settings"),
            g = xzl.mdj.ktg.wqb("gameb"),
            d = xzl.mdj.ktg.wqb("topi");
        if (webAudioEngine && webAudioEngine.state == "suspended") {
            webAudioEngine.resume()
        }
        if (xzl.mdj.ond.afp === true) {
            xzl.mdj.yua = (xzl.mdj.yua === xzl.mdj.klk.length - 1) ? 0 : xzl.mdj.yua + 1;
            xzl.mdj.xtu(xzl.mdj.klk[xzl.mdj.yua])
        } else {
            xzl.mdj.yua = (xzl.mdj.yua === xzl.mdj.klk.length - 1) ? 0 : xzl.mdj.klk.length - 1;
            xzl.mdj.ssd((xzl.mdj.klk[xzl.mdj.yua] === 0))
        }
        sessionStorage.sessionValue6 = xzl.mdj.yua;
        if (xzl.mdj.klk[xzl.mdj.yua] > 0) {
            xzl.mdj.ond.ewm("audioon")
        }
        if (d) {
            d.wbp("audio", xzl.mdj.klk[xzl.mdj.yua])
        }
        if (f) {
            f.fed.ybw("audio", "#uem", [xzl.mdj.yua])
        }
        if (e) {
            e.fed.ybw("audio", "#uem", [xzl.mdj.yua])
        }
        if (g) {
            g.fed.ybw("audio", "#uem", [xzl.mdj.yua])
        }
        xzl.mdj.shb()
    };
    this.efi = function() {
        xzl.mdj.ujw = true
    };
    this.drr = function() {};
    this.osl = function() {
        var d = xzl.mdj.ktg.wqb("settings");
        if (d) {
            if (d.jte()) {
                xzl.mdj.hda()
            } else {
                xzl.mdj.jlu()
            }
            xzl.mdj.ond.ewm("btn");
            if (xzl.mdj.asz.jpo === false) {
                xzl.mdj.wpn.fed.ybw("setting", "#ykr", [d.jte()])
            }
        }
    };
    this.myu = function() {
        var d = xzl.mdj.ktg.wqb("settings"),
            e = "";
        xzl.mdj.yjp = (xzl.mdj.yjp < xzl.mdj.hvx.length - 1) ? xzl.mdj.yjp + 1 : (xzl.mav.wfq()) ? 0 : 1;
        localStorage.localValue1 = xzl.mdj.yjp;
        xzl.mdj.ogj();
        if (d) {
            d.fed.ybw("adjustment", "#uem", [(xzl.mdj.gxl === xzl.asz.nki) ? 0 : 1]);
            if (xzl.mdj.hvx[xzl.mdj.yjp] === xzl.bmv.vwu) {
                e = xzl.mdj.language.left
            } else {
                if (xzl.mdj.hvx[xzl.mdj.yjp] === xzl.bmv.jmc) {
                    e = xzl.mdj.language.zzj
                } else {
                    if (xzl.mdj.hvx[xzl.mdj.yjp] === xzl.bmv.mpr) {
                        e = xzl.mdj.language.kno
                    }
                }
            }
            d.fed.ybw("adjustment", "#pmb", [e])
        }
    };
    this.pul = function() {
        if (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue21)
        }
    };
    this.qix = function() {
        if (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue20)
        }
    };
    this.pmq = function() {
        if (sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue19)
        }
    };
    this.egm = function(e, d) {
        this.wpn.fed.ybw("creditd", "#pmb", [this.jwd(e), d])
    };
    this.wdt = function(e, d) {
        if (e > 0) {
            this.wpn.fed.ybw("betd", "#pmb", [this.jwd(e), d])
        } else {
            this.wpn.fed.ybw("betd", "#pmb", ["", d])
        }
    };
    this.yfl = function(e) {
        var d = this.ktg.wqb("topi");
        this.nat = e;
        if (d) {
            d.rgd("id", (e > 0) ? e : "")
        }
    };
    this.fdh = function() {
        var e = "",
            d = xzl.mdj.ktg.wqb("topi");
        if (xzl.nfj.value49) {
            e += xzl.mdj.ggg()
        }
        if (xzl.nfj.value49 && sessionStorage.sessionValue15 == "true") {
            e += " ["
        }
        if (sessionStorage.sessionValue15 == "true") {
            e += xzl.mdj.mzb()
        }
        if (xzl.nfj.value49 && sessionStorage.sessionValue15 == "true") {
            e += "]"
        }
        if (d) {
            d.rgd("time", e)
        }
    };
    this.mzb = function() {
        return this.getTime(new Date().getTime() - this.ira)
    };
    this.ggg = function() {
        var d = new Date();
        return this.klw(d.getHours()) + ":" + this.klw(d.getMinutes())
    };
    this.getTime = function(e) {
        var g = e,
            d = 0,
            f = 0;
        d = Math.floor(e / (60000));
        g = e - d * 60000;
        f = Math.round(g / 1000);
        if (f >= 60) {
            f -= 60;
            d++
        }
        return this.klw(d) + ":" + this.klw(f)
    };
    this.klw = function(d) {
        if (d < 0) {
            return "00"
        } else {
            if (d < 10) {
                return "0" + d
            }
        }
        return d
    };
    this.dsm = function() {
        if (sessionStorage.sessionValue15 == "true" || xzl.nfj.value49) {
            if (xzl.nfj.value49) {
                this.ggg()
            }
            this.ira = (this.xgn > 0) ? this.xgn : new Date().getTime();
            this.fdh();
            this.fvb = setInterval(this.fdh, 1000)
        }
    };
    this.qms = function() {
        clearInterval(this.fvb)
    };
    this.hzs = function(d) {
        this.ira -= d
    };
    this.huv = function(d, f) {
        var e = this.ktg.wqb("loading");
        if (e && e.csa == null) {
            if (f && f !== "") {
                e.ksh = f
            } else {
                e.ksh = this.language.error
            }
            e.csa = d;
            e.shb(this.ond.rbo())
        }
    };
    this.jlu = function() {};
    this.hda = function() {};
    this.riz = function() {};
    this.pae = function() {};
    this.mvf = function() {
        var g = false,
            i = this.ktg.wqb("topb"),
            f = this.ktg.wqb("settings"),
            j = this.ktg.wqb("gameb"),
            d = this.ktg.wqb("topi");
        this.eld = (this.eld + 1 == xzl.nfj.value5.length) ? 0 : this.eld + 1;
        sessionStorage.sessionValue1 = xzl.nfj.value5[this.eld];
        this.language = this.enk(xzl.nfj.value5[this.eld]);
        this.tzp();
        if (i && g == false) {
            var e = i.fed.wqb("language");
            if (e) {
                e.hnt(this.sqc(xzl.nfj.value5[this.eld]));
                g = true
            }
            i.ipr(true)
        }
        if (f && g == false) {
            var e = f.fed.wqb("language");
            if (e) {
                e.hnt(this.sqc(xzl.nfj.value5[this.eld]));
                g = true
            }
        }
        if (j && g == false) {
            var e = j.fed.wqb("language");
            if (e) {
                e.hnt(this.sqc(xzl.nfj.value5[this.eld]));
                g = true
            }
        }
        if (g == false) {
            var e = this.wpn.fed.wqb("lang");
            if (e) {
                e.ejr = this.sqc(xzl.nfj.value5[this.eld])
            }
        }
        if (d) {
            d.uem("language", sessionStorage.sessionValue1)
        }
        this.shb()
    };
    this.tzp = function() {};
    this.enk = function(d) {
        if (d == xzl.language.EN || d == xzl.language.US) {
            return new bmt()
        } else {
            if (d == xzl.language.ES || d == xzl.language.CO || d == xzl.language.MX || d == xzl.language.CL || d == xzl.language.VE) {
                return new tsh()
            } else {
                if (d == xzl.language.DE || d == xzl.language.AT) {
                    return new gtv()
                } else {
                    if (d == xzl.language.PT || d == xzl.language.BR) {
                        return new qhn()
                    } else {
                        if (d == xzl.language.RU) {
                            return new rzc()
                        } else {
                            if (d == xzl.language.EE) {
                                return new rvm()
                            } else {
                                if (d == xzl.language.TR) {
                                    return new ban()
                                } else {
                                    if (d == xzl.language.CZ) {
                                        return new har()
                                    } else {
                                        if (d == xzl.language.GR) {
                                            return new mjd()
                                        } else {
                                            if (d == xzl.language.BG) {
                                                return new znh()
                                            } else {
                                                if (d == xzl.language.GE) {
                                                    return new iqd()
                                                } else {
                                                    if (d == xzl.language.HU) {
                                                        return new fqv()
                                                    } else {
                                                        if (d == xzl.language.RO) {
                                                            return new pbx()
                                                        } else {
                                                            if (d == xzl.language.FR) {
                                                                return new mtj()
                                                            } else {
                                                                if (d == xzl.language.HR) {
                                                                    return new unm()
                                                                } else {
                                                                    if (d == xzl.language.IT) {
                                                                        return new tws()
                                                                    } else {
                                                                        if (d == xzl.language.SE) {
                                                                            return new bsa()
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return null
    };
    this.sqc = function(d) {
        if (d) {
            return this.ond.jcf(d)
        }
        return null
    };
    this.bbc = function() {
        this.ond.ils()
    };
    this.ytl = function() {};
    this.ssd = function(d) {
        this.ond.vpu(d)
    };
    this.xtu = function(d) {
        this.ond.ebm(d)
    };
    this.ogg = function() {
        this.fje();
        var d = this.ktg.wqb("history");
        this.gql = true;
        this.pwn = true;
        if (d) {
            d.fvz(true)
        }
        this.wdk(this.bnt(this.language.jzh))
    };
    this.ptf = function() {
        loadGame("hist_" + xzl.mdj.bnr.toLowerCase(), xzl.nfj.value30 + "/" + xzl.mdj.bnr.toLowerCase() + "/src/hist_" + xzl.mdj.bnr.toLowerCase(), "UTF-8");
        removeGame(xzl.mdj.bnr.toLowerCase(), xzl.nfj.value30 + "/" + xzl.mdj.bnr.toLowerCase() + "/src/" + xzl.mdj.bnr.toLowerCase())
    };
    this.dfc = function() {
        var d = "./history_" + this.bnr.toLowerCase() + ".html";
        if (sessionStorage.sessionValue12) {
            d += "?config=" + sessionStorage.sessionValue12
        }
        window.location.href = d
    };
    this.pnm = function() {
        var d = null;
        if (xzl.mdj.dae) {
            return
        }
        if (sessionStorage.sessionValue5 != null) {
            if (xzl.mdj.yoa) {
                xzl.mdj.yoa.gca({
                    sender: xzl.mdj.bnr,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                })
            }
            sessionStorage.exitGame = "true";
            d = decodeURIComponent(sessionStorage.sessionValue5);
            xzl.mdj.vax();
             if (d !== "(api)") {
               window.parent.postMessage('CloseGame',"*");	
            }
        } else {
            removeGame(xzl.mdj.bnr.toLowerCase(), xzl.nfj.value30 + "/" + xzl.mdj.bnr.toLowerCase() + "/src/" + xzl.mdj.bnr.toLowerCase());
            removeGame("hist_" + xzl.mdj.bnr.toLowerCase(), xzl.nfj.value30 + "/" + xzl.mdj.bnr.toLowerCase() + "/src/hist_" + xzl.mdj.bnr.toLowerCase());
            loadMenu("menu", xzl.nfj.value1001, "UTF-8", true)
        }
    };
    this.ryw = function() {
        var d = null;
        if (sessionStorage.sessionValue5 != null) {
            if (xzl.mdj.yoa) {
                xzl.mdj.yoa.gca({
                    sender: xzl.mdj.bnr,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                })
            }
            d = decodeURIComponent(sessionStorage.sessionValue5);
            xzl.mdj.vax();
             if (d !== "(api)") {
               window.parent.postMessage('CloseGame',"*");	
            }
        } else {
            removeGame(xzl.mdj.bnr.toLowerCase(), xzl.nfj.value30 + "/" + xzl.mdj.bnr.toLowerCase() + "/src/" + xzl.mdj.bnr.toLowerCase());
            removeGame("hist_" + xzl.mdj.bnr.toLowerCase(), xzl.nfj.value30 + "/" + xzl.mdj.bnr.toLowerCase() + "/src/hist_" + xzl.mdj.bnr.toLowerCase());
            loadMenu("menu", xzl.nfj.value1001, "UTF-8", false)
        }
    };
    this.vax = function() {
        if (!xzl.mdj.aey && xzl.nfj.value83) {
            sessionStorage.clear()
        }
    };
    this.djj = function(f) {
        var g = null;
        if (this.iww) {
            for (var e = 0, d = f.length; e < d; e++) {
                g = f[e];
                if (g.tpp !== xzl.wmn.jjo) {
                    if (g.tpp === xzl.wmn.xyp || g.tpp === xzl.wmn.nuo) {
                        g.Title = this.language.wax;
                        g.Text = (g.tpp === xzl.wmn.xyp) ? this.language.gff : this.language.hpg;
                        g.Buttons = [{
                            Text: this.language.akx,
                            Action: "quit"
                        }]
                    } else {
                        if (g.tpp === xzl.wmn.ioh) {
                            g.Title = this.language.zrd;
                            g.Text = this.language.lhl + "\n";
                            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                                g.Text += this.language.esk;
                                g.Buttons = [{
                                    Text: this.bnt(this.language.rhf),
                                    Action: "history"
                                }, {
                                    Text: this.language.akx,
                                    Action: "quit"
                                }]
                            } else {
                                g.Buttons = [{
                                    Text: this.language.akx,
                                    Action: "quit"
                                }]
                            }
                        } else {
                            if (g.tpp === xzl.wmn.opq || g.tpp === xzl.wmn.zom || g.tpp === xzl.wmn.pzf) {
                                g.Title = this.fsv;
                                if (g.tpp === xzl.wmn.opq) {
                                    g.Text = this.language.freerounds_startinfo + " " + this.freeRoundTotal + " " + this.language.freerounds + "\n\n" + this.language.wsf
                                } else {
                                    if (g.tpp === xzl.wmn.zom) {
                                        g.Text = this.language.freerounds_info1 + " " + (this.freeRoundTotal - this.gmg) + " " + this.language.freerounds_info2 + "\n\n" + this.language.wsf
                                    } else {
                                        if (g.tpp === xzl.wmn.pzf) {
                                            g.Text = this.language.freerounds_played + ": " + this.gmg + "\n" + this.language.freerounds_win + ": " + this.gcv(this.lbl)
                                        }
                                    }
                                }
                                g.Buttons = [{
                                    Text: this.language.ok,
                                    Action: "continue"
                                }]
                            }
                        }
                    }
                    if (g.tpp === xzl.wmn.lzr || g.tpp === xzl.wmn.crq) {
                        g.Title = this.language.yvn;
                        g.Text = this.language.gnz;
                        g.Buttons = [{
                            Text: this.language.ok,
                            Action: "continue"
                        }]
                    } else {
                        if (g.tpp === xzl.wmn.qpg) {
                            g.Title = this.language.key;
                            g.Text = this.language.goq;
                            g.Buttons = [{
                                Text: this.language.ok,
                                Action: "continue"
                            }]
                        } else {
                            if (g.tpp === xzl.wmn.roulette.suo || g.tpp === xzl.wmn.roulette.ubh) {
                                g.Title = this.language.wax;
                                g.Text = (g.tpp === xzl.wmn.roulette.suo) ? this.language.juj : this.language.ewv;
                                g.Buttons = [{
                                    Text: this.language.akx,
                                    Action: "quit"
                                }]
                            }
                        }
                    }
                }
            }
            this.iww.wbw(f)
        }
    };
    this.stop = function() {
        this.qms();
        this.hbx();
        this.yuk();
        clearTimeout(this.qst);
        if (!this.aey) {
            clearInterval(this.cbh)
        }
        this.ktg.ybw("autop", "#stop");
        this.ktg.ybw("settings", "#stop");
        this.ktg.ybw("topb", "#stop")
    };
    this.zxe = function() {
        var d = false;
        if (this.vjn.toLowerCase().indexOf("freeplay") === 0) {
            d = true
        } else {
            if (this.tex == "freeplay" && this.pmx == "freeplay") {
                d = true
            } else {
                if (this.yhs && (this.yhs == "b71d982ffcbe56eb8cd11fa05963bbee" || this.yhs.toLowerCase() == "freeplay")) {
                    d = true
                } else {
                    if (xzl.nfj.value68 != null && this.dqx.toLowerCase() === xzl.nfj.value68.toLowerCase()) {
                        d = true
                    }
                }
            }
        }
        if (d === true) {
            xzl.nfj.value21.e = false;
            if (xzl.nfj.value76) {
                xzl.nfj.value76.f = false
            }
        }
        return d
    };
    this.ajf = function() {
        return (xzl.nfj.value65 > 0)
    };
    this.jms = function() {
        return (this.aey === false)
    };
    this.ukv = function() {
        return false
    };
    this.ubr = function() {
        if (xzl.mdj.ajf() && xzl.mdj.ukv()) {
            clearTimeout(xzl.mdj.qee);
            xzl.mdj.qee = setTimeout(xzl.mdj.tyo, xzl.nfj.value65)
        }
    };
    this.qrd = function() {
        if (xzl.mdj.ajf() && xzl.mdj.qee >= 0) {
            if (xzl.mdj.ukv()) {
                clearTimeout(xzl.mdj.qee);
                xzl.mdj.qee = setTimeout(xzl.mdj.tyo, xzl.nfj.value65)
            } else {
                clearTimeout(xzl.mdj.qee);
                xzl.mdj.qee = -1
            }
        }
    };
    this.hbx = function() {
        if (xzl.mdj.ajf()) {
            clearTimeout(xzl.mdj.qee);
            xzl.mdj.qee = -1
        }
    };
    this.htm = function() {
        return false
    };
    this.ykp = function() {
        return false
    };
    this.tis = function() {
        if (xzl.mdj.htm() && xzl.mdj.ykp() && xzl.mdj.swy < 0) {
            clearTimeout(xzl.mdj.swy);
            xzl.mdj.swy = setTimeout(xzl.mdj.gcj, xzl.mdj.ari)
        }
    };
    this.zta = function() {
        if (xzl.mdj.htm() && xzl.mdj.swy >= 0) {
            if (xzl.mdj.ykp()) {
                clearTimeout(xzl.mdj.swy);
                xzl.mdj.swy = setTimeout(xzl.mdj.gcj, xzl.mdj.ari)
            } else {
                clearTimeout(xzl.mdj.swy);
                xzl.mdj.swy = -1
            }
        }
    };
    this.yuk = function() {
        if (xzl.mdj.htm()) {
            clearTimeout(xzl.mdj.swy);
            xzl.mdj.swy = -1
        }
    };
    this.gcj = function() {};
    this.ojy = function() {};
    this.zzh = function(f) {
        var e = Number(f.replace(/_*/g, "")),
            d = Number(this.xzy.replace(/_*/g, ""));
        if (e > d) {
            this.xzy = f
        }
    };
    this.upw = function(g) {
        var e = (g && !this.apw),
            f = this.ktg.wqb("topb"),
            d = this.ktg.wqb("topi");
        if (d) {
            d.osq(e)
        }
        if (f) {
            f.osq(e);
            f.jyi(e)
        }
    };
    this.wjq = function(g) {
        var e = (g && !this.apw),
            f = this.ktg.wqb("topb"),
            d = this.ktg.wqb("topi");
        if (d) {
            d.osq(e)
        }
        if (f) {
            f.osq(e);
            f.cem(e)
        }
    };
    this.lsr = function(g) {
        var e = (g && !this.apw),
            f = this.ktg.wqb("topb"),
            d = this.ktg.wqb("topi");
        if (d) {
            d.osq(e)
        }
        if (f) {
            f.osq(e);
            f.qnf(e)
        }
    };
    this.ydd = function() {
        var d = this.ktg.wqb("topb");
        if (d && !d.jte()) {
            this.ond.yxe("panel_in");
            this.ond.ewm("panel_in");
            d.wbw()
        }
    };
    this.yhm = function(d) {
        var e = this.ktg.wqb("topb");
        if (e && e.jte()) {
            this.ond.yxe("panel_out");
            this.ond.ewm("panel_out");
            if (d) {
                e.rkx = d
            }
            e.ezd()
        }
    };
    this.gcv = function(f) {
        if (this.tzf > 0) {
            return (f * this.tzf).toFixed(0).toString()
        } else {
            if (xzl.nfj.value21.e == false || this.dae == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (xzl.nfj.value21.m != 1) {
                    e = f * xzl.nfj.value21.m;
                    var g = xzl.nfj.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = xzl.nfj.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.czj(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.jwd = function(f) {
        if (this.tzf > 0) {
            var e = (f * this.tzf).toFixed(0).toString();
            if (xzl.nfj.value21.e == true && xzl.nfj.value21.m == 1 && xzl.nfj.value21.s && this.dae == false) {
                e = xzl.nfj.value21.s + " " + e
            }
            return e
        } else {
            if (xzl.nfj.value21.e == false || this.dae == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (xzl.nfj.value21.m != 1) {
                    e = f * xzl.nfj.value21.m;
                    var g = xzl.nfj.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = xzl.nfj.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.czj(e, (d == 0) ? 0 : d + 1);
                if (xzl.nfj.value21.s) {
                    e = xzl.nfj.value21.s + " " + e
                }
                return e
            }
        }
    };
    this.czj = function(l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (xzl.nfj.value21.cs != null) {
                l = l.replace(/\./, xzl.nfj.value21.cs)
            }
            return l.toString()
        } else {
            d[0] = g.substring(g.length - 3, g.length);
            for (var j = 1; j * 3 < g.length; j++) {
                d[j] = g.substring(g.length - (j + 1) * 3, g.length - j * 3)
            }
            for (var j = d.length - 1; j >= 0; j--) {
                e += d[j];
                if (j > 0) {
                    if (xzl.nfj.value21.ts != null) {
                        e += xzl.nfj.value21.ts
                    }
                }
            }
            if (xzl.nfj.value21.cs != null) {
                f = f.replace(/\./, xzl.nfj.value21.cs)
            }
            return e + f
        }
    };
    this.znd = function(f) {
        if (this.tzf > 0) {
            return (f * this.tzf).toFixed(0).toString()
        } else {
            if (xzl.nfj.value76.f == false || this.dae == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (xzl.nfj.value76.m != 1) {
                    e = f * xzl.nfj.value76.m;
                    var g = xzl.nfj.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = xzl.nfj.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.rgi(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.kar = function(f) {
        if (this.tzf > 0) {
            var e = (f * this.tzf).toFixed(0).toString();
            if (xzl.nfj.value76.f == true && xzl.nfj.value76.m == 1 && xzl.nfj.value76.s && this.dae == false) {
                e = xzl.nfj.value76.s + " " + e
            }
            return e
        } else {
            if (xzl.nfj.value76.f == false || this.dae == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (xzl.nfj.value76.m != 1) {
                    e = f * xzl.nfj.value76.m;
                    var g = xzl.nfj.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = xzl.nfj.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.rgi(e, (d == 0) ? 0 : d + 1);
                if (xzl.nfj.value76.s) {
                    e = xzl.nfj.value76.s + " " + e
                }
                return e
            }
        }
    };
    this.rgi = function(l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (xzl.nfj.value76.cs != null) {
                l = l.replace(/\./, xzl.nfj.value76.cs)
            }
            return l.toString()
        } else {
            d[0] = g.substring(g.length - 3, g.length);
            for (var j = 1; j * 3 < g.length; j++) {
                d[j] = g.substring(g.length - (j + 1) * 3, g.length - j * 3)
            }
            for (var j = d.length - 1; j >= 0; j--) {
                e += d[j];
                if (j > 0) {
                    if (xzl.nfj.value76.ts != null) {
                        e += xzl.nfj.value76.ts
                    }
                }
            }
            if (xzl.nfj.value76.cs != null) {
                f = f.replace(/\./, xzl.nfj.value76.cs)
            }
            return e + f
        }
    };
    this.bnt = function(d) {
        if (d && sessionStorage.sessionValue1 !== xzl.language.GE) {
            return d.toUpperCase()
        }
        return d
    };
    this.vlx = function() {
        for (var f = 0, d = this.mqy.bcu.cqp.length, e = null, g = 0; f < d; f++) {
            e = this.mqy.bcu.cqp[f];
            g = e.lqt.substring(e.lqt.length - 1);
            this.ktg.ovw(e.lqt, this.gsk(this.asz.xrc.mki[d - 1][e.mki], (d > 2) ? this.asz.xrc.qyv : this.asz.xrc.display, this.style.xrc.aao[e.mki], e.rmj, e.value, this.ond.jcf((d > 2) ? e.lqt + "_smalldsp" : e.lqt + "_dsp"), (d <= 2) ? [this.ond.jcf("jackpot_frame")] : (Number(g) <= 2) ? [this.ond.jcf("jackpot_topframe")] : [this.ond.jcf("jackpot_bottomframe")], (d > 2) ? this.ond.jcf(e.lqt + "_sym") : null), ["jackpots"])
        }
        this.ktg.ovw("jwp", this.gsk(this.asz.xrc.qzn.mki, this.asz.xrc.qzn, this.style.xrc.qzn, null, null, null, [this.ond.jcf("jackpot_win_0"), this.ond.jcf("jackpot_win_1"), this.ond.jcf("jackpot_win_2")], null));
        this.ktg.ybw("jwp", "#hix", [false]);
        if (this.jbc()) {
            this.ktg.ovw("mjwp", this.jnl(this.asz.xrc.krw.mki, this.asz.xrc.krw, this.style.xrc.krw, this.ond.jcf("mj_bg"), this.ond.jcf("mj_font"), this.ond.jcf("mj_label"), [this.ond.jcf("mj_0"), this.ond.jcf("mj_1"), this.ond.jcf("mj_2"), this.ond.jcf("mj_3"), this.ond.jcf("mj_4"), this.ond.jcf("mj_5")]));
            this.ktg.ybw("mjwp", "#hix", [false])
        }
    };
    this.hyy = function() {
        var e = this.ktg.ebo("jackpots"),
            f = this.ktg.wqb("jwp"),
            k = this.ktg.wqb("mjwp");
        for (var j = 0, d = this.mqy.bcu.cqp.length, g = null; j < d; j++) {
            g = this.mqy.bcu.cqp[j];
            e[j].tzs(this.asz.xrc.mki[d - 1][g.mki]);
            e[j].jlm((d > 2) ? this.asz.xrc.qyv : this.asz.xrc.display)
        }
        if (f) {
            f.tzs(this.asz.xrc.qzn.mki);
            f.jlm(this.asz.xrc.qzn)
        }
        if (k) {
            k.tzs(this.asz.xrc.krw.mki);
            k.jlm(this.asz.xrc.krw)
        }
    };
    this.gsk = function(k, i, e, l, m, f, d, g) {
        var j = new vxm();
        j.tqg(k, null, this.context2D);
        j.parent = this;
        j.nob = f;
        j.gcf = d;
        j.awr = g;
        j.rcy(l);
        j.zmb(m);
        j.png(e);
        j.jlm(i);
        return j
    };
    this.jnl = function(j, i, g, k, l, f, e) {
        var d = new dyb();
        d.tqg(j, null, this.context2D);
        d.parent = this;
        d.oqi = k;
        d.vnx = l;
        d.uys = f;
        d.nmd = e;
        d.png(g);
        d.jlm(i);
        return d
    };
    this.igh = function(f) {
        if (this.yqn() === true) {
            for (var e = 0, d = f.length; e < d; e++) {
                this.ktg.ybw(f[e].lqt, "#zmb", [f[e].value])
            }
            this.shb()
        }
    };
    this.act = function(d) {
        if (this.yqn() === true) {
            this.xrc = {
                lqt: d.lqt,
                value: d.value,
                isj: d.isj
            }
        }
    };
    this.cfj = function() {
        this.xrc = null
    };
    this.lvi = function() {
        return false
    };
    this.jbc = function() {
        return false
    };
    this.yqn = function() {
        return (!this.aey && this.mqy.bcu.cqp.length > 0 && this.lvi())
    };
    this.zlp = function() {
        return (this.xrc != null)
    };
    this.one = function() {
        return (xzl.nfj.value86 === true && ((sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") || (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") || (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null")))
    };
    this.lrj = function() {
        if (this.oaq() && this.nem()) {
            this.dcw()
        }
    };
    this.nem = function() {
        return false
    };
    this.oaq = function() {
        if (this.aey) {
            return false
        }
        return (this.mqy.bcu.ruw.length + this.mqy.bcu.vlf.length > 0)
    };
    this.dcw = function() {
        var g = null,
            e = this.mqy.bcu.ruw.length,
            d = this.mqy.bcu.vlf.length;
        if (d + e > 0) {
            for (var f = e - 1; f >= 0; f--) {
                g = this.mqy.bcu.ruw.splice(f, 1)[0];
                g.tpp = xzl.wmn.jjo;
                this.oom.push(g)
            }
            for (var f = d - 1; f >= 0; f--) {
                g = this.mqy.bcu.vlf.splice(f, 1)[0];
                g.tpp = xzl.wmn.jjo;
                this.oom.push(g)
            }
            if (this.iww && !this.iww.jte()) {
                this.gtk()
            }
        }
    };
    this.gtk = function() {
        var d = null;
        if (this.oom.length > 0) {
            d = this.oom.shift();
            this.djj([d])
        }
    };
    this.izc = function() {
        if (xzl.mdj.lhg.length > 0) {
            xzl.mdj.djj(xzl.mdj.lhg)
        }
    };
    this.dcm = function() {
        this.oom.length = 0
    };
    this.nqg = function() {
        this.lhg.length = 0;
        if (this.kvc) {
            this.kvc.ezd()
        }
    };
    this.cas = function() {
        var f = null,
            d = this.mqy.bcu.lhg.length;
        if (d > 0) {
            for (var e = d - 1; e >= 0; e--) {
                f = this.mqy.bcu.lhg.splice(e, 1)[0];
                f.tpp = xzl.wmn.jjo;
                this.lhg.push(f)
            }
            if (this.kvc) {
                this.kvc.wbw(this.lhg[0].Title, this.lhg[0].Text, this.lhg.length)
            }
        }
    };
    this.aun = function() {
        var d = false;
        if (this.iww && this.iww.jte()) {
            d = true
        }
        if (this.kvc && this.kvc.jte()) {
            d = true
        }
        if (this.one()) {
            d = true
        }
        if (this.agy) {
            this.agy.style.display = (d) ? "block" : "none"
        }
    };
    this.zxv = function() {
        this.upw(false);
        this.wpn.jyi(false);
        this.wpn.fed.ybw("info", "#wem");
        this.djj([{
            tpp: xzl.wmn.ioh
        }])
    };
    this.elr = function() {
        xzl.mdj.jyp = true
    };
    this.vuy = function() {
        this.xeg = new gew().tqg(this, xzl.nfj.value6)
    };
    this.vuv = function() {
        if (this.xeg) {
            this.xeg.connect(this.bnr, this.tex, this.pmx, this.yhs, this.xzy, true)
        }
    };
    this.dwj = function() {
        if (xzl.mdj.xeg) {
            xzl.mdj.xeg.connect(xzl.mdj.bnr, xzl.mdj.tex, xzl.mdj.pmx, xzl.mdj.yhs, xzl.mdj.xzy, false)
        }
    };
    this.pku = function() {};
    this.jmo = function() {};
    this.dql = function(d) {
        if (!this.zxe() && !this.aey) {
            clearTimeout(this.qst);
            if (this.kia()) {
                this.qst = setTimeout(this.jlq, d)
            } else {
                if (Number(sessionStorage.sessionValue17) > 0) {
                    this.qst = setTimeout(this.elr, Number(sessionStorage.sessionValue17) * 60000)
                }
            }
        }
    };
    this.jlq = function() {
        xzl.mdj.bwi = true
    };
    this.kia = function() {
        return xzl.nfj.value36 || xzl.nfj.value37
    }
}

function jkp() {
    this.tqg = function() {
        this.kpp("btn", this.wye);
        this.kpp("gamble_on", this.wye);
        this.kpp("gamble_off", this.wye);
        this.kpp("panel_in", this.wye);
        this.kpp("panel_out", this.wye);
        this.kpp("audioon", this.wye);
        for (var a = 0; a < 12; a++) {
            this.kpp("step" + a, this.wye)
        }
        this.kpp("maxstep", this.wye);
        this.kpp("gambleprop", this.kzr)
    }
}
jkp.prototype = new cuf;

function nbn() {
    this.rze = {
        jpm: 84,
        zxt: -1,
        value: "T",
        nvo: null
    };
    this.drj = {
        jpm: 80,
        zxt: -1,
        value: "P",
        nvo: null
    };
    this.start = {
        jpm: 32,
        zxt: -1,
        value: "SPACE",
        nvo: null
    };
    this.apw = {
        jpm: 16,
        zxt: -1,
        value: "SHIFT",
        nvo: null
    };
    this.gsa = {
        jpm: 38,
        zxt: -1,
        value: "\u25B2",
        nvo: null
    };
    this.cqm = {
        jpm: 40,
        zxt: -1,
        value: "\u25BC",
        nvo: null
    };
    this.fnv = {
        jpm: 71,
        zxt: -1,
        value: "G",
        nvo: null
    };
    this.nhh = {
        jpm: 27,
        zxt: -1,
        value: "ESC",
        nvo: null
    };
    this.language = {
        jpm: 76,
        zxt: -1,
        value: "L",
        nvo: null
    };
    this.xvu = {
        jpm: 13,
        zxt: -1,
        value: "ENTER",
        nvo: null
    };
    this.eut = {
        jpm: 27,
        zxt: -1,
        value: "ESC",
        nvo: null
    };
    this.svj = {
        jpm: 39,
        zxt: -1,
        value: "\u25B6",
        nvo: null
    };
    this.kim = {
        jpm: 37,
        zxt: -1,
        value: "\u25C0",
        nvo: null
    };
    this.uye = {
        jpm: 27,
        zxt: -1,
        value: "ESC",
        nvo: null
    };
    this.mtz.push(this.rze);
    this.mtz.push(this.drj);
    this.mtz.push(this.start);
    this.mtz.push(this.gsa);
    this.mtz.push(this.cqm);
    this.mtz.push(this.nhh);
    this.mtz.push(this.language);
    this.mtz.push(this.apw);
    this.mtz.push(this.fnv)
}
nbn.prototype = new alq;

function mqz(g, c, f, e, i, a, d, b) {
    this.hez = g;
    this.msj = f;
    this.lrs = e;
    this.uer = i;
    this.bnr = c;
    this.xzy = a;
    this.kvj = d;
    this.dqx = b;
    this.rqz = [];
    this.bax = [];
    this.gsr = [];
    this.rfe = [];
    this.egn = [];
    this.nat = 0;
    this.isj = 0;
    this.win = 0;
    this.gtp = 0;
    this.kmh = 0;
    this.hgl = 0;
    this.ync = 0;
    this.myh = 0;
    this.tau = -1;
    this.vvq = -1;
    this.ifh = 0;
    this.apw = false;
    this.hxq = -1;
    this.gvv = 0;
    this.teu = "";
    this.nld = function(l) {
        if (l != null) {
            this.ycf = 0;
            this.rfy = this.jaj(l);
            if (this.rfy == 0) {
                this.zjh = this.rrf(l);
                this.wmn = this.jaj(l);
                this.nat = this.tll(l);
                this.isj = this.tll(l);
                this.win = this.tll(l);
                this.gtp = this.tll(l);
                this.ync = this.rrf(l);
                this.kmh = this.tll(l);
                this.hgl = this.tll(l);
                this.myh = this.tll(l);
                for (var j = 0; j < 8; j++) {
                    this.gsr[j] = this.rrf(l)
                }
                for (var j = 0; j < 5; j++) {
                    this.bax[j] = this.tll(l)
                }
                for (var j = 0; j < 5; j++) {
                    this.rqz[j] = this.tll(l)
                }
                this.tau = this.rrf(l);
                this.vvq = this.rrf(l);
                this.ifh = this.rrf(l);
                this.gvv = this.rrf(l);
                this.hxq = this.rrf(l);
                var m = this.rrf(l);
                for (var j = 0; j < m; j++) {
                    this.rfe[j] = this.tll(l)
                }
                var k = this.rrf(l);
                for (var j = 0; j < k; j++) {
                    this.egn[j] = this.tll(l)
                }
                this.mti(l);
                if (this.zjh == 0) {
                    this.ewc("A/u250")
                } else {
                    this.mqy.fln()
                }
            } else {
                if (this.rfy == 1) {
                    this.zjh = this.rrf(l);
                    this.wmn = this.jaj(l);
                    this.nat = this.tll(l);
                    this.isj = this.tll(l);
                    this.win = this.tll(l);
                    this.gtp = this.tll(l);
                    this.ync = this.rrf(l);
                    this.kmh = this.tll(l);
                    this.hgl = this.tll(l);
                    this.myh = this.tll(l);
                    for (var j = 0; j < 8; j++) {
                        this.gsr[j] = this.rrf(l)
                    }
                    for (var j = 0; j < 5; j++) {
                        this.bax[j] = this.tll(l)
                    }
                    for (var j = 0; j < 5; j++) {
                        this.rqz[j] = this.tll(l)
                    }
                    this.tau = this.rrf(l);
                    this.vvq = this.rrf(l);
                    this.ifh = this.rrf(l);
                    this.apw = (this.rrf(l) == 1) ? true : false;
                    this.gvv = this.rrf(l);
                    this.hxq = this.rrf(l);
                    this.mti(l);
                    if (this.wmn == 0) {
                        if (this.zjh == xzl.pug.tpy.wwq) {
                            this.mqy.fln()
                        } else {
                            if (this.zjh == xzl.pug.tpy.saj) {
                                this.mqy.yjn()
                            } else {
                                if (this.zjh == xzl.pug.tpy.oof) {
                                    this.mqy.gyh()
                                } else {
                                    if (this.zjh == xzl.pug.tpy.hev) {
                                        this.mqy.msy()
                                    } else {
                                        if (this.zjh == xzl.pug.tpy.jfr) {
                                            this.mqy.wok()
                                        } else {
                                            if (this.zjh == xzl.pug.tpy.nyo) {
                                                this.mqy.nno()
                                            } else {
                                                if (this.zjh == xzl.pug.tpy.zfc) {
                                                    this.mqy.rdp()
                                                } else {
                                                    if (this.zjh == xzl.pug.tpy.him) {
                                                        this.mqy.zhh()
                                                    } else {
                                                        if (this.zjh == xzl.pug.tpy.jsu) {
                                                            this.mqy.gqn()
                                                        } else {
                                                            if (this.zjh == xzl.pug.tpy.jne) {
                                                                this.mqy.jbg()
                                                            } else {
                                                                if (this.zjh == xzl.pug.tpy.tyi) {
                                                                    this.mqy.gsi()
                                                                } else {
                                                                    if (this.zjh == xzl.pug.tpy.jdx) {
                                                                        this.mqy.xhm()
                                                                    } else {
                                                                        this.oyb()
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        this.mqy.wxe(this.wmn)
                    }
                } else {
                    if (this.rfy == 2) {} else {
                        if (this.rfy == 3) {
                            this.isj = this.tll(l);
                            this.mqy.egm()
                        } else {
                            if (this.rfy === 8) {
                                this.ewc("8")
                            } else {
                                if (this.rfy == 9) {
                                    this.mqy.dnp.vjn = l.substring(this.ycf)
                                } else {
                                    this.fbk = this.jaj(l);
                                    this.mqy.qay(l.substring(2))
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.mti = function(j) {
        if (this.rfy == 0) {
            this.teu = this.uzr(j);
            if (xzl.nfj.value21.e === true && xzl.nfj.value21.s !== "") {
                this.teu = ""
            }
        }
    };
    this.oyb = function() {};
    this.jet = function(j, k) {
        this.ewc("A/u251," + j + "," + k)
    };
    this.asq = function(j, l, k) {
        this.ewc("A/u2512," + k[0] + "," + k[1] + "," + k[2] + "," + k[3] + "," + k[4] + "," + j + "," + l)
    };
    this.nuc = function(j, l, k) {
        this.ewc("A/u253," + k[0] + "," + k[1] + "," + k[2] + "," + k[3] + "," + k[4] + "," + j + "," + l)
    };
    this.iej = function() {
        this.ewc("A/u257")
    };
    this.vqr = function() {
        this.ewc("A/u259")
    };
    this.fnv = function(j) {
        this.ewc("A/u258," + j)
    };
    this.rpq = function() {
        this.ewc("A/u2514")
    };
    this.xiu = function() {
        this.ewc("A/u2515")
    };
    this.hgx = function(j) {
        this.ewc("A/u2513," + j)
    }
}
mqz.prototype = new cjd;

function zgr() {
    this.tqg = function(a, b) {
        this.hez = b;
        this.dnp = a;
        return this
    };
    this.connect = function(c, f, e, g, a, d, b) {
        this.msj = f;
        this.lrs = e;
        this.uer = g;
        this.bnr = c;
        this.kvj = d;
        this.dqx = b;
        this.bcu = new mqz(this.hez, c, f, e, g, a, d, b);
        this.bcu.tqg(this)
    };
    this.jet = function(a, b) {
        this.bcu.jet(a, b)
    };
    this.asq = function(a, c, b) {
        this.bcu.asq(a, c, b)
    };
    this.nuc = function(a, c, b) {
        this.bcu.nuc(a, c, b)
    };
    this.iej = function() {
        this.bcu.iej()
    };
    this.vqr = function() {
        this.bcu.vqr()
    };
    this.fnv = function(a) {
        this.bcu.fnv(a)
    };
    this.rpq = function() {
        this.bcu.rpq()
    };
    this.xiu = function() {
        this.bcu.xiu()
    };
    this.hgx = function(a) {
        this.bcu.hgx(a)
    };
    this.fln = function() {
        var c = this.bcu.zjh;
        for (var b = 0; b < this.bcu.bax.length; b++) {
            this.dnp.bax[b] = this.bcu.bax[b]
        }
        for (var b = 0; b < this.bcu.rqz.length; b++) {
            this.dnp.rqz[b] = this.bcu.rqz[b]
        }
        this.dnp.isj = this.bcu.isj;
        this.dnp.kmh = this.bcu.kmh;
        this.dnp.hgl = this.bcu.hgl;
        for (var b = 0, a = this.bcu.rfe.length; b < a && this.bcu.rfe[b] <= this.bcu.hgl; b++) {
            this.dnp.rfe[b] = this.bcu.rfe[b]
        }
        if (c == xzl.pug.tpy.wwq || (c == xzl.pug.tpy.oof && this.bcu.win + this.bcu.gtp == 0) || c == xzl.pug.tpy.hev || (c == xzl.pug.tpy.jfr && this.bcu.win + this.bcu.gtp == 0) || c == xzl.pug.tpy.zfc || (c == xzl.pug.tpy.jsu && this.bcu.win + this.bcu.gtp == 0) || (c == xzl.pug.tpy.saj && this.dnp.iik == true)) {
            this.dnp.nvd = true
        } else {
            this.dnp.nvd = false
        }
        this.dnp.hih = this.bcu.ync;
        this.dnp.totalBet = this.dnp.rfe[this.dnp.hih];
        this.dnp.win = this.bcu.win;
        this.dnp.fdc = this.bcu.tau;
        this.dnp.vvq = this.bcu.vvq;
        this.dnp.ifh = this.bcu.ifh;
        this.dnp.state = c;
        this.czi();
        this.dnp.hti();
        this.dnp.gzw(this.bcu.zjh, this.bcu.nat, this.bcu.gsr, this.bcu.gvv, this.bcu.hxq)
    };
    this.yjn = function() {
        for (var a = 0; a < this.bcu.bax.length; a++) {
            this.dnp.bax[a] = this.bcu.bax[a]
        }
        for (var a = 0; a < this.bcu.rqz.length; a++) {
            this.dnp.rqz[a] = this.bcu.rqz[a]
        }
        this.dnp.isj = this.bcu.isj;
        this.dnp.fdc = this.bcu.tau;
        this.dnp.state = this.bcu.zjh;
        this.dnp.vvq = this.bcu.vvq;
        this.czi();
        this.dnp.xus();
        this.dnp.yfl(this.bcu.nat)
    };
    this.zhh = function() {
        for (var a = 0; a < this.bcu.bax.length; a++) {
            this.dnp.bax[a] = this.bcu.bax[a]
        }
        for (var a = 0; a < this.bcu.rqz.length; a++) {
            this.dnp.rqz[a] = this.bcu.rqz[a]
        }
        this.dnp.isj = this.bcu.isj;
        this.dnp.vvq = this.bcu.vvq;
        this.dnp.fdc = this.bcu.tau;
        this.dnp.state = this.bcu.zjh;
        this.czi();
        this.dnp.bkx();
        this.dnp.yfl(this.bcu.nat)
    };
    this.gyh = function() {
        for (var a = 0; a < this.bcu.bax.length; a++) {
            this.dnp.bax[a] = this.bcu.bax[a]
        }
        for (var a = 0; a < this.bcu.rqz.length; a++) {
            this.dnp.rqz[a] = this.bcu.rqz[a]
        }
        this.dnp.isj = this.bcu.isj;
        this.dnp.win = this.bcu.win;
        this.dnp.vvq = this.bcu.vvq;
        this.dnp.fdc = this.bcu.tau;
        this.dnp.state = this.bcu.zjh;
        if (this.dnp.win > 0) {
            this.dnp.tru.plr(this.bcu.gsr, this.bcu.gvv)
        }
        this.czi();
        this.dnp.xlm();
        this.dnp.yfl(this.bcu.nat)
    };
    this.msy = function() {
        this.dnp.isj = this.bcu.isj;
        this.dnp.state = this.bcu.zjh;
        this.czi();
        this.dnp.uzu()
    };
    this.rdp = function() {
        for (var a = 0; a < this.bcu.bax.length; a++) {
            this.dnp.bax[a] = this.bcu.bax[a]
        }
        for (var a = 0; a < this.bcu.rqz.length; a++) {
            this.dnp.rqz[a] = this.bcu.rqz[a]
        }
        this.dnp.isj = this.bcu.isj;
        this.dnp.win = this.bcu.win;
        this.dnp.vvq = this.bcu.vvq;
        this.dnp.fdc = this.bcu.tau;
        this.dnp.state = this.bcu.zjh;
        if (this.dnp.win > 0) {
            this.dnp.tru.plr(this.bcu.gsr, this.bcu.gvv)
        }
        this.czi();
        this.dnp.xyh(this.bcu.gvv);
        this.dnp.yfl(this.bcu.nat)
    };
    this.wok = function() {
        this.dnp.isj = this.bcu.isj;
        this.dnp.win = this.bcu.win;
        this.dnp.state = this.bcu.zjh;
        this.dnp.tru.plr(this.bcu.gsr, this.bcu.gvv);
        this.czi();
        this.dnp.sow();
        this.dnp.yfl(this.bcu.nat)
    };
    this.nno = function() {
        this.dnp.isj = this.bcu.isj;
        this.dnp.win = this.bcu.win;
        this.dnp.state = this.bcu.zjh;
        this.czi();
        this.dnp.kfx();
        this.dnp.yfl(this.bcu.nat)
    };
    this.gqn = function() {
        this.dnp.isj = this.bcu.isj;
        this.dnp.win = this.bcu.win;
        this.dnp.state = this.bcu.zjh;
        this.dnp.tru.plr(this.bcu.gsr, this.bcu.gvv);
        this.czi();
        this.dnp.iug(this.bcu.gvv);
        this.dnp.yfl(this.bcu.nat)
    };
    this.jbg = function() {
        this.dnp.isj = this.bcu.isj;
        this.dnp.win = this.bcu.win;
        this.dnp.state = this.bcu.zjh;
        this.czi();
        this.dnp.geg(this.bcu.hxq);
        this.dnp.yfl(this.bcu.nat)
    };
    this.gsi = function() {
        this.dnp.isj = this.bcu.isj;
        this.dnp.win = this.bcu.win;
        this.dnp.state = this.bcu.zjh;
        this.dnp.tru.plr(this.bcu.gsr, this.bcu.gvv);
        this.czi();
        this.dnp.onk(this.bcu.hxq);
        this.dnp.yfl(this.bcu.nat)
    };
    this.czi = function() {
        this.dnp.teu = this.bcu.teu
    }
}
zgr.prototype = new nwn;

function ejc() {
    var a = this;
    this.rzn = false;
    this.wwe = null;
    this.fed = null;
    this.fmp = false;
    this.ngp = -1;
    this.kph = 0;
    this.cbs = null;
    this.rit = 800;
    this.vcq = 0;
    this.ale = null;
    this.cau = null;
    this.uli = null;
    this.lmd = null;
    this.hoe = null;
    this.buh = null;
    this.jxc = null;
    this.rmq = new gvm();
    this.wyb = new gvm();
    this.dfl = 30;
    this.tqg = function(b, d, c) {
        ejc.prototype.tqg.call(this, b, d, c);
        this.ale = document.createElement("canvas");
        this.ale.width = this.width;
        this.ale.height = this.height;
        this.cau = this.ale.getContext("2d");
        this.zif()
    };
    this.lsi = function(c, b) {
        try {
            this.dfl = c.bko;
            this.rmq = c.qba;
            this.wyb = c.vyb;
            this.asl(c);
            this.nko(c);
            this.jhd(c);
            this.png(b, false)
        } catch (d) {
            console.error(d)
        }
    };
    this.jlm = function(f) {
        try {
            var c = {},
                b = this.fed.wqb("info"),
                m = this.fed.wqb("creditd"),
                l = this.fed.wqb("betd"),
                k = this.fed.ebo("buttons");
            if (this.parent.bdi() != null) {
                c = f.eyo
            } else {
                if (xzl.nfj.value57 === xzl.ui.awm) {
                    c = f.jlh
                } else {
                    if (xzl.nfj.value57 === xzl.ui.ozm) {
                        c = f.vjx
                    } else {
                        if (xzl.nfj.value57 === xzl.ui.fuo) {
                            c = f.prs
                        }
                    }
                }
            }
            this.dfl = f.bko;
            this.rmq = f.qba;
            this.wyb = f.vyb;
            if (m) {
                m.jlm(f.display);
                m.tzs(f.qvk)
            }
            if (l) {
                l.jlm(f.display);
                l.tzs(f.zun)
            }
            if (b) {
                b.jlm(f.key);
                b.tzs(f.key.mki)
            }
            this.qbm();
            for (var d = 0, g = k.length; d < g; d++) {
                if (k[d] instanceof muh) {
                    k[d].jlm(f.kpi)
                }
            }
            if (this.parent.bdi() != null) {
                this.fed.ybw("astart", "#jlm", [f.asb]);
                if (this.parent.rer() === true) {
                    this.fed.ybw("start", "#jlm", [f.asb])
                } else {
                    this.fed.ybw("start", "#jlm", [f.jvv])
                }
            } else {
                this.fed.ybw("start", "#jlm", [f.jvv]);
                if (xzl.nfj.value57 === xzl.ui.awm) {
                    this.fed.ybw("astart", "#jlm", [f.jvv])
                }
            }
            this.fed.ybw("start", "#tzs", [c.ogr]);
            this.fed.ybw("astart", "#tzs", [c.trs]);
            this.fed.ybw("bet", "#tzs", [c.rpy]);
            this.fed.ybw("gamble", "#tzs", [c.hon]);
            this.fed.ybw("exit", "#tzs", [c.ynn]);
            this.fed.ybw("lang", "#tzs", [c.iis]);
            this.fed.ybw("setting", "#tzs", [c.mil])
        } catch (j) {
            console.error(j)
        }
    };
    this.png = function(f) {
        try {
            var k = this.fed.wqb("info"),
                c = this.fed.ebo("displays"),
                g = this.fed.ebo("buttons");
            this.uli = f.backgroundColor;
            this.lmd = f.qmm;
            this.buh = f.tpg;
            this.jxc = f.ufh;
            if (k) {
                k.png(f.key)
            }
            for (var d = 0, b = g.length; d < b; d++) {
                g[d].png(f.lfc)
            }
            for (var d = 0, b = c.length; d < b; d++) {
                c[d].png(f.display)
            }
            this.qbm()
        } catch (j) {
            console.error(j)
        }
    };
    this.xuh = function(o, n, p) {
        var m = this.fed.ebo("buttons"),
            d = this.fed.wqb("bet"),
            b = this.fed.wqb("start"),
            k = this.fed.wqb("betd"),
            c = this.fed.wqb("creditd");
        xio = this.parent.ktg.wqb("betsel"), bpd = o - this.x, mrf = n - this.y;
        for (var g = 0, l = m.length; g < l; g++) {
            var e = m[g];
            if (bpd >= e.x && bpd <= e.x + e.width && mrf >= e.y && mrf <= e.y + e.height && e.jte() == true) {
                if (e.zrf() && !e.tmp()) {
                    if (e === d) {
                        e.svq(true, true, false);
                        for (var f = 0; f < l; f++) {
                            m[f].cgt(true, false)
                        }
                        e.oyg();
                        this.cbs = function() {
                            if (e.oyg() === true) {
                                clearInterval(a.kph);
                                e.svq(false, true);
                                for (var i = 0; i < l; i++) {
                                    m[i].cgt(false)
                                }
                            }
                        };
                        this.kph = setInterval(this.cbs, e.gmh)
                    } else {
                        if (e === b && b.oyg === this.xsq) {
                            e.svq(true, true, false)
                        } else {
                            e.svq(true, true)
                        }
                        e.oyg();
                        for (var f = 0; f < l; f++) {
                            m[f].cgt(true)
                        }
                    }
                    return true
                }
            }
        }
        if (d && d.zrf() && !d.tmp()) {
            if (k && bpd >= k.x && bpd <= k.x + k.width && mrf >= k.y && mrf <= k.y + k.height) {
                if (!p) {
                    if (xio && xio.zrf()) {
                        this.parent.jbi()
                    }
                    return true
                }
            } else {
                if (c && bpd >= c.x && bpd <= c.x + c.width && mrf >= c.y && mrf <= c.y + c.height) {
                    if (!p) {
                        this.parent.afz()
                    }
                    return true
                }
            }
        }
        return false
    };
    this.xak = function() {
        var f = this.fed.ebo("buttons"),
            k = this.fed.wqb("bet"),
            g = this.fed.wqb("start");
        for (var d = 0, b = f.length; d < b; d++) {
            var e = f[d];
            if (e.maw() === true) {
                e.svq(false, true);
                if (e === k) {
                    clearInterval(this.kph);
                    for (var c = 0; c < b; c++) {
                        f[c].cgt(false)
                    }
                } else {
                    if (e === g && g.oyg === this.xsq) {
                        clearTimeout(this.vcq);
                        a.parent.ond.yxe("auto_fill");
                        this.fed.ybw("start", "#hje")
                    }
                }
                return true
            }
        }
        return false
    };
    this.dqi = function(g) {
        var f = this.fed.ebo("buttons"),
            k = this.fed.wqb("bet");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (g == d.wwt) {
                if (d.zrf() && !d.tmp()) {
                    d.svq(true, true);
                    d.oyg();
                    for (var c = 0; c < b; c++) {
                        f[c].cgt(true)
                    }
                }
                return true
            }
        }
        if (g == this.parent.lwy.cqm.jpm) {
            if (k && k.zrf() && !k.tmp()) {
                this.parent.jkn();
                for (var c = 0, b = f.length; c < b; c++) {
                    f[c].cgt(true)
                }
            }
            return true
        }
        return false
    };
    this.ywi = function() {
        var e = this.fed.ebo("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.maw() == true) {
                c.svq(false, true);
                return true
            }
        }
        return false
    };
    this.nca = function(l, k, m) {
        var j = this.fed.ebo("buttons"),
            c = this.fed.wqb("bet");
        if (l != null && k != null) {
            var e = l - this.x;
            var d = k - this.y;
            for (var f = 0, g = j.length; f < g; f++) {
                var b = j[f];
                if (e >= b.x && e <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.jte() && b.zrf() && !b.tmp()) {
                    return b.oyg
                }
            }
        } else {
            if (m != null) {
                for (var f = 0, g = j.length; f < g; f++) {
                    var b = j[f];
                    if (m == b.wwt && b.jte() && b.zrf() && !b.tmp()) {
                        return b.oyg
                    }
                }
                if (m == this.parent.lwy.cqm.jpm && c && c.jte() && c.zrf() && !c.tmp()) {
                    return this.parent.jkn
                }
            }
        }
        return null
    };
    this.zif = function() {
        this.fed = new ccr();
        this.fed.tqg();
        this.fed.qzf("displays");
        this.fed.qzf("buttons");
        this.fed.qzf("allbuttons");
        this.fed.qzf("infos");
        this.fed.qzf("start");
        this.fed.qzf("collect");
        this.fed.qzf("game");
        this.fed.qzf("hold");
        this.fed.qzf("settings")
    };
    this.jhd = function(b) {
        var c = this.hjs(b.key.mki);
        c.jlm(b.key);
        this.fed.ovw("info", c, ["infos"])
    };
    this.asl = function(c) {
        var b = {};
        if (this.parent.bdi() != null) {
            b = c.eyo
        } else {
            if (xzl.nfj.value57 === xzl.ui.awm) {
                b = c.jlh
            } else {
                if (xzl.nfj.value57 === xzl.ui.ozm) {
                    b = c.vjx
                } else {
                    if (xzl.nfj.value57 === xzl.ui.fuo) {
                        b = c.prs
                    }
                }
            }
        }
        if (this.parent.bdi() != null) {
            this.fed.ovw("astart", this.mbt(b.trs, this.parent.language.zkr, "---", this.parent.ond.jcf("btn_s"), this.parent.fhl, (!this.parent.aey) ? this.parent.lwy.apw : null, c.asb), ["buttons", "allbuttons", "start", "collect", "hold"]);
            if (this.parent.rer() === true) {
                this.fed.ovw("start", this.mbt(b.ogr, (this.parent.asz.feb === false) ? this.parent.language.start : null, "---", (this.parent.asz.feb === false) ? this.parent.ond.jcf("btn") : this.parent.ond.jcf("btn_dl"), (this.parent.rer() === true) ? this.xsq : this.parent.rxp, (!this.parent.aey) ? this.parent.lwy.start : null, c.asb), ["buttons", "allbuttons", "start", "collect", "hold"])
            } else {
                this.fed.ovw("start", this.wfn(b.ogr, (this.parent.asz.feb === false) ? this.parent.language.start : null, (this.parent.asz.feb === false) ? this.parent.ond.jcf("btn") : this.parent.ond.jcf("btn_dl"), (this.parent.rer() === true) ? this.xsq : this.parent.rxp, (!this.parent.aey) ? this.parent.lwy.start : null, c.jvv), ["buttons", "allbuttons", "start", "collect", "hold"])
            }
        } else {
            this.fed.ovw("start", this.wfn(b.ogr, (this.parent.asz.feb === false) ? this.parent.language.start : null, (this.parent.asz.feb === false) ? this.parent.ond.jcf("btn") : this.parent.ond.jcf("btn_dl"), (this.parent.rer() === true) ? this.xsq : this.parent.rxp, (!this.parent.aey) ? this.parent.lwy.start : null, c.jvv), ["buttons", "allbuttons", "start", "collect", "hold"]);
            this.fed.ovw("astart", this.wfn(b.trs, this.parent.language.apw, (xzl.nfj.value57 === xzl.ui.awm) ? this.parent.ond.jcf("btn") : this.parent.ond.jcf("btn_s"), this.parent.fhl, (!this.parent.aey) ? this.parent.lwy.apw : null, c.kpi), ["buttons", "allbuttons", "start", "collect", "game", "hold"])
        }
        this.fed.ovw("bet", this.wfn(b.rpy, this.parent.language.vpv, this.parent.ond.jcf("btn_s"), this.parent.ygn, (!this.parent.aey) ? this.parent.lwy.gsa : null, c.kpi), ["buttons", "allbuttons"]);
        this.fed.wqb("bet").gmh = 300;
        this.fed.ovw("gamble", this.wfn(b.hon, this.parent.language.fnv, this.parent.ond.jcf("btn_s"), this.parent.fea, (!this.parent.aey) ? this.parent.lwy.fnv : null, c.kpi), ["buttons", "allbuttons", "start", "game", "collect", "hold"]);
        if (this.parent.bdi() != null) {
            this.fed.ovw("exit", this.wfn(b.ynn, (this.parent.asz.feb === true) ? null : (xzl.nfj.value50.g === true) ? this.parent.language.akx : this.parent.language.hal, (this.parent.asz.feb === false) ? this.parent.ond.jcf("btn_s") : this.parent.ond.jcf("btn_e"), this.parent.tyo, (!this.parent.aey) ? this.parent.lwy.nhh : null, c.kpi), ["buttons", "allbuttons", "collect"])
        } else {
            if (xzl.nfj.value57 !== xzl.ui.fuo) {
                this.fed.ovw("exit", this.wfn(b.ynn, (this.parent.asz.feb === true) ? null : (xzl.nfj.value50.g === true) ? this.parent.language.akx : this.parent.language.hal, (this.parent.asz.feb === false) ? this.parent.ond.jcf("btn_s") : this.parent.ond.jcf("btn_e"), this.parent.tyo, (!this.parent.aey) ? this.parent.lwy.nhh : null, c.kpi), ["buttons", "allbuttons", "collect"])
            }
            if (xzl.nfj.value57 !== xzl.ui.awm && this.parent.bdi() == null) {
                this.fed.ovw("lang", this.hvm(b.iis, this.parent.sqc(sessionStorage.sessionValue1), this.parent.nit, (!this.parent.aey) ? this.parent.lwy.language : null), ["buttons", "allbuttons", "hold"])
            }
        }
        this.fed.ovw("setting", this.wfn(b.mil, null, (this.parent.asz.feb === true) ? this.parent.ond.jcf("btn_m") : this.parent.ond.jcf("btn_s"), this.parent.osl, null, c.kpi), ["buttons", "settings"])
    };
    this.nko = function(c) {
        var b = this.parent.ond.jcf("display_effect");
        this.fed.ovw("creditd", this.atr(c.qvk, (this.parent.zxe()) ? this.parent.language.emo : this.parent.language.isj, this.parent.jwd(this.parent.isj), b, c.display), ["displays"]);
        this.fed.ovw("betd", this.atr(c.zun, this.parent.language.vpv, this.parent.jwd(this.parent.totalBet), b, c.display), ["displays"])
    };
    this.ofq = function() {
        if (this.ngp == 1) {
            this.jyi(this.fmp)
        } else {
            if (this.ngp == 2) {
                this.igi(this.fmp)
            } else {
                if (this.ngp == 3) {
                    this.rlk(this.fmp)
                } else {
                    if (this.ngp == 4) {
                        this.tzz(this.fmp)
                    } else {
                        if (this.ngp == 5) {
                            this.wjv(this.fmp)
                        } else {
                            if (this.ngp == 6) {
                                this.qnf(this.fmp)
                            }
                        }
                    }
                }
            }
        }
    };
    this.jyi = function(d) {
        var c = this.fed.ebo("allbuttons"),
            e = 0,
            b = 0;
        this.fmp = d;
        this.ngp = 1;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].osq(d)
        }
    };
    this.igi = function(d) {
        var c = this.fed.ebo("allbuttons"),
            f = this.fed.ebo("start"),
            e = 0,
            b = 0;
        this.fmp = d;
        this.ngp = 2;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].osq(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].osq(d)
        }
    };
    this.rlk = function(d) {
        var c = this.fed.ebo("allbuttons"),
            f = this.fed.ebo("game"),
            e = 0,
            b = 0;
        this.fmp = d;
        this.ngp = 3;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].osq(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].osq(d)
        }
    };
    this.tzz = function(d) {
        var c = this.fed.ebo("allbuttons"),
            f = this.fed.ebo("hold"),
            e = 0,
            b = 0;
        this.fmp = d;
        this.ngp = 4;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].osq(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].osq(d)
        }
    };
    this.wjv = function(d) {
        var c = this.fed.ebo("allbuttons"),
            f = (this.rzn === true) ? this.fed.ebo("collect") : this.fed.ebo("start"),
            e = 0,
            b = 0;
        this.fmp = d;
        this.ngp = 5;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].osq(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].osq(d)
        }
    };
    this.qnf = function(e) {
        var c = this.fed.ebo("allbuttons"),
            d = this.fed.ebo("settings"),
            f = 0,
            b = 0;
        this.fmp = e;
        this.ngp = 6;
        for (f = 0, b = c.length; f < b; f++) {
            c[f].osq(false)
        }
        for (f = 0, b = d.length; f < b; f++) {
            d[f].osq(e)
        }
    };
    this.atr = function(c, g, f, e, b) {
        var d = new ntr();
        d.tqg(c, this.context2D, null, g, f);
        d.parent = this;
        d.ejr = e;
        d.jlm(b);
        return d
    };
    this.wfn = function(e, i, g, f, c, d) {
        var b = new muh();
        b.tqg(e, this.context2D, null, g, null, i);
        b.parent = this;
        b.oyg = f;
        b.jlm(d);
        if (c) {
            b.wwt = c.jpm
        }
        return b
    };
    this.mbt = function(e, j, g, i, f, c, d) {
        var b = new muh();
        b.tqg(e, this.context2D, null, i, null, j);
        b.parent = this;
        b.oyg = f;
        b.value = g;
        b.jlm(d);
        if (c) {
            b.wwt = c.jpm
        }
        return b
    };
    this.hvm = function(d, f, e, c) {
        var b = new mpx();
        b.tqg(d, this.context2D, null, f, null);
        b.parent = this;
        b.oyg = e;
        if (c) {
            b.wwt = c.jpm
        }
        return b
    };
    this.hjs = function(b) {
        var c = new tcl();
        c.tqg(b, this.context2D);
        c.parent = this;
        return c
    };
    this.dwf = function(c, b) {
        var d = this.fed.wqb("info");
        if (d) {
            d.xgq(b);
            d.kuv(c, b)
        }
    };
    this.stop = function() {
        clearInterval(this.kph)
    };
    this.qbm = function() {
        var b = this.cau;
        b.save();
        if (this.uli != null) {
            var d = b.createLinearGradient(this.rmq.x, this.rmq.y, this.rmq.x, this.rmq.y + this.rmq.height);
            d.addColorStop(0, this.uli);
            b.fillStyle = d;
            b.fillRect(this.rmq.x, this.rmq.y, this.rmq.width, this.rmq.height)
        }
        if (this.lmd != null) {
            var d = b.createLinearGradient(this.rmq.x, this.rmq.y, this.rmq.x, this.rmq.y + this.dfl);
            d.addColorStop(0, this.lmd);
            d.addColorStop(1, this.uli);
            b.fillStyle = d;
            b.fillRect(this.rmq.x, this.rmq.y, this.rmq.width, this.dfl)
        }
        if (this.wwe != null) {
            b.drawImage(this.wwe, this.rmq.x, this.rmq.y, this.rmq.width, this.rmq.height)
        }
        if (this.wyb && this.wyb.width > 0 && this.wyb.height > 0) {
            var d = b.createLinearGradient(this.wyb.x, this.wyb.y, this.wyb.x + this.wyb.width, this.wyb.y),
                c = this.parent.ond.jcf("btn_back");
            d.addColorStop(0.2, this.buh);
            d.addColorStop(1, this.jxc);
            b.fillStyle = d;
            if (this.parent.gxl === xzl.asz.nki) {
                b.fillRect(this.wyb.x, this.wyb.y, this.wyb.width, this.wyb.height);
                if (c) {
                    b.drawImage(c, this.wyb.x, this.wyb.y, this.wyb.width, this.wyb.height)
                }
            } else {
                if (this.parent.gxl === xzl.asz.lri) {
                    b.save();
                    b.translate(this.wyb.width / 2, this.wyb.height / 2);
                    b.rotate(Math.PI);
                    b.translate(-this.wyb.width / 2, -this.wyb.height / 2);
                    b.fillRect(this.wyb.x, this.wyb.y, this.wyb.width, this.wyb.height);
                    if (c) {
                        b.drawImage(c, this.wyb.x, this.wyb.y, this.wyb.width, this.wyb.height)
                    }
                    b.restore()
                }
            }
        }
        b.restore()
    };
    this.shb = function(k, g, l, e) {
        if (!this.jte() || !this.parent.dst()) {
            return
        }
        var c = (k != null && g != null && l != null && e != null),
            j = (c === true) ? new gvm(k, g, l, e) : new gvm(this.x, this.y, this.width, this.height),
            m = this.context2D,
            b = this.fed.nxo();
        m.save();
        if (c) {
            m.beginPath();
            m.rect(k, g, l, e);
            m.closePath();
            m.clip()
        }
        if (this.ale != null) {
            m.drawImage(this.ale, 0, 0)
        }
        for (var d = 0, f = b.length; d < f; d++) {
            b[d].shb()
        }
        if (this.parent.fae === true && this.parent.rer() === false) {
            this.parent.zxf(m, j)
        }
        m.restore();
        if (this.uqi && this.uvq) {
            if (c) {
                this.uqi.drawImage(this.uvq, k, g, l, e, this.x + k, this.y + g, l, e)
            } else {
                this.uqi.drawImage(this.uvq, this.x, this.y)
            }
        }
    };
    this.xsq = function() {
        if (a.parent.apw === true) {
            a.parent.fhl()
        } else {
            a.parent.rxp();
            if (a.parent.glj() === true) {
                a.parent.ond.ewm("auto_fill");
                a.fed.ybw("start", "#ykw", [a.rit]);
                a.vcq = setTimeout(a.rcd, a.rit)
            }
        }
    };
    this.rcd = function() {
        a.parent.fhl();
        a.fed.ybw("start", "#rmx")
    }
}
ejc.prototype = new lhc;

function yfu() {
    var a = this;
    this.sae = 0;
    this.dkp = 1;
    this.qnk = 7;
    this.zsh = 0;
    this.muy = 0;
    this.vlq = 0;
    this.abj = 0;
    this.mlj = this.sae;
    this.vlh = this.vwu;
    this.ltc = function() {
        this.hix(true);
        this.eaw = true;
        this.fmp = false;
        this.mlj = this.sae;
        this.muy = Math.floor(this.width / this.qnk);
        this.abj = 0;
        this.vlq = 0
    };
    this.qmy = function() {
        this.eaw = true;
        this.fmp = false;
        this.mlj = this.dkp;
        this.muy = -Math.floor(this.width / this.qnk);
        this.abj = 1;
        this.vlq = this.width
    };
    this.pbd = function() {
        if (a.abj < a.qnk) {
            a.vlq += a.muy;
            a.abj++;
            return true
        } else {
            a.eaw = false;
            a.fmp = true;
            if (a.mlj == a.dkp) {
                a.hix(false)
            }
            return false
        }
    };
    this.ewm = function() {
        if (this.lkn == this.zli) {
            this.parent.ond.ewm("maxstep")
        } else {
            this.parent.ond.ewm("step" + (this.lkn % 12))
        }
    };
    this.unn = function() {
        a.iwj = false
    };
    this.shb = function() {
        if (!this.jte() || !this.parent.dst()) {
            return
        }
        this.dyz();
        if (this.uqi && this.uvq) {
            if (this.eaw) {
                if (this.vlq > 0) {
                    if (this.vlh == this.jmc) {
                        this.uqi.drawImage(this.uvq, this.width - this.vlq, 0, this.vlq, this.height, this.x, this.y, this.vlq, this.height)
                    } else {
                        if (this.vlh == this.vwu) {
                            this.uqi.drawImage(this.uvq, 0, 0, this.vlq, this.height, this.x + this.width - this.vlq, this.y, this.vlq, this.height)
                        }
                    }
                }
            } else {
                this.uqi.drawImage(this.uvq, this.x, this.y)
            }
        }
    };
    this.ywg = function(c) {
        var f = this.zla,
            e = this.zla,
            b = 0,
            d = 0;
        if (this.vlh == this.vwu) {
            b = this.daz;
            d = this.vep.x - 2 * this.daz
        } else {
            if (this.vlh == this.jmc) {
                b = this.vep.x + this.vep.width + this.daz;
                d = this.width - this.daz - (this.vep.x + this.vep.width + this.daz)
            }
        }
        if (this.lkn > 0 && this.lkn < this.nuh.length - 1) {
            xzl.mav.snb(c, b, this.vep.y + ((this.axf - this.dmh) * this.tkf), d, this.tkf, this.siy, this.bxi);
            xzl.mav.glp(c, this.parent.gcv(this.nuh[this.lkn]), this.uqw, b, this.vep.y + ((this.axf - this.dmh) * this.tkf) + (this.tkf - this.hfi) / 2, d, this.hfi, this.wrk, this.hfi, this.ant, this.daz)
        } else {
            if (this.lkn == 0) {
                f = this.uqw
            } else {
                if (this.lkn == this.nuh.length - 1) {
                    e = this.uqw
                }
            }
        }
        xzl.mav.snb(c, b, this.vep.y + (this.tkf * (this.axf - 1)), d, this.tkf, this.siy, this.bxi);
        xzl.mav.glp(c, this.parent.gcv(this.nuh[0]), f, b, this.vep.y + (this.tkf * (this.axf - 1)) + (this.tkf - this.hfi) / 2, d, this.hfi, this.wrk, this.hfi, this.ant, this.daz);
        xzl.mav.snb(c, b, this.vep.y, d, this.tkf, this.siy, this.bxi);
        xzl.mav.glp(c, this.parent.gcv(this.nuh[this.nuh.length - 1]), e, b, this.vep.y + (this.tkf - this.hfi) / 2, d, this.hfi, this.wrk, this.hfi, this.ant, this.daz);
        xzl.mav.trr(c, "+", this.zla, this.zlk.x, this.zlk.y, this.zlk.width, this.zlk.height, this.wrk, this.hfi, this.ant);
        xzl.mav.trr(c, "", this.zla, this.haj.x, this.haj.y, this.haj.width, this.haj.height, this.wrk, this.hfi, this.ant);
        if (this.rmj) {
            xzl.mav.trr(c, this.rmj, this.zla, this.fsw.x, this.fsw.y, this.fsw.width, this.fsw.height, this.wrk, this.hfi, this.ant)
        }
    }
}
yfu.prototype = new nze;

function hln() {
    this.ejr = null;
    this.kao = [];
    this.fmp = false;
    this.bep = false;
    this.nal = false;
    this.phq = false;
    this.imm = true;
    this.pqv = -1;
    this.vwz = null;
    this.ale = null;
    this.cau = null;
    this.wrk = "arial";
    this.ant = "bold";
    this.zvx = "yellow";
    this.lvs = "yellow";
    this.zla = "yellow";
    this.hfi = 18;
    this.tnf = 0;
    this.rlc = 0;
    this.cbn = 20;
    this.cnc = 0;
    this.png = function(a) {
        try {
            this.wrk = a.font;
            this.ant = a.yzb;
            this.zvx = a.noz;
            this.lvs = a.zae;
            this.zla = a.ded
        } catch (b) {
            console.error(b)
        }
    };
    this.jlm = function(a) {
        try {
            this.hfi = a.fontSize;
            this.tnf = a.wwl;
            this.rlc = a.mcl;
            this.cbn = a.vvo;
            this.cnc = a.rna;
            this.imm = a.nqz
        } catch (b) {
            console.error(b)
        }
    };
    this.xuh = function(a, b) {
        if (a >= this.x && a <= this.x + this.width && b >= this.y && b <= this.y + this.height && this.jte() === true) {
            if (this.zrf() === true) {
                this.parent.fbf(this.nal);
                this.svq();
                if (this.nal) {
                    this.parent.ond.ewm("hold")
                } else {
                    this.parent.ond.ewm("unhold")
                }
                return true
            }
        }
        return false
    };
    this.xak = function() {};
    this.dqi = function() {};
    this.ywi = function() {};
    this.osq = function(a) {
        this.fmp = a
    };
    this.zrf = function() {
        return this.fmp
    };
    this.scd = function(a) {
        if (this.ale == null) {
            this.ale = document.createElement("canvas");
            this.ale.width = this.width;
            this.ale.height = this.height;
            this.cau = this.ale.getContext("2d");
            this.cau.save();
            this.cau.drawImage(a, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height);
            this.cau.restore()
        }
    };
    this.svq = function() {
        this.nal = !this.nal;
        if (this.nal) {
            this.vwz = this.parent.language.awu;
            this.zla = this.zvx
        }
        this.shb()
    };
    this.zmb = function(d, e) {
        var a = 0,
            c = false;
        if (d == this.parent.inn) {
            this.pqv = d;
            c = true
        } else {
            if ((a = this.parent.nic.length) > 0) {
                for (var b = 0; b < a && !c; b++) {
                    if (d == this.parent.nic[b]) {
                        this.pqv = this.parent.uet[b];
                        c = true
                    }
                }
            }
        }
        if (!c) {
            this.pqv = d
        }
        if (e && e === true) {
            this.shb()
        }
    };
    this.zki = function(a, b) {
        this.nal = a;
        if (this.nal) {
            this.vwz = this.parent.language.awu;
            this.zla = this.zvx
        }
        if (b && b === true) {
            this.shb()
        }
    };
    this.ebs = function() {
        return this.nal
    };
    this.odn = function(a, b) {
        this.bep = a;
        if (this.bep) {
            this.vwz = this.parent.language.win;
            this.zla = this.lvs
        }
        if (b && b === true) {
            this.shb()
        }
    };
    this.kps = function() {
        return this.bep
    };
    this.kvy = function(c, b, a, d) {
        this.phq = c;
        this.vwz = b;
        if (a) {
            this.zla = a
        }
        if (d && d === true) {
            this.shb()
        }
    };
    this.kif = function() {
        return this.phq
    };
    this.shb = function() {
        if (!this.jte() || !this.parent.dst()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.beginPath();
        a.rect(this.x, this.y, this.width, this.height);
        a.closePath();
        a.clip();
        if (this.ale != null) {
            a.drawImage(this.ale, this.x, this.y)
        }
        if (this.ejr != null) {
            if (this.nal || this.bep) {
                if (this.imm) {
                    a.drawImage(this.ejr, this.kao[this.pqv] * this.tnf, 0, this.tnf, this.rlc, this.x, this.y + this.cbn, this.tnf, this.rlc)
                } else {
                    a.drawImage(this.ejr, this.kao[this.pqv] * this.tnf, 0, this.tnf, this.rlc, this.x, this.y, this.tnf, this.rlc)
                }
            } else {
                a.drawImage(this.ejr, this.kao[this.pqv] * this.tnf, 0, this.tnf, this.rlc, this.x, this.y + this.cnc, this.tnf, this.rlc)
            }
        }
        if (this.nal || this.bep || this.phq) {
            b = this.vwz
        }
        if (b != null) {
            if (this.imm) {
                xzl.mav.trr(a, b, this.zla, this.x, this.y, this.width, this.cbn, this.wrk, this.hfi, this.ant)
            } else {
                xzl.mav.trr(a, b, this.zla, this.x, this.y + this.rlc, this.width, this.cbn, this.wrk, this.hfi, this.ant)
            }
        }
        a.restore()
    }
}
hln.prototype = new lhc;
xzl.pug = {
    tpy: {
        wwq: 0,
        smq: 1,
        saj: 2,
        fqc: 3,
        oof: 4,
        pvz: 5,
        niz: 6,
        hev: 7,
        jfr: 8,
        nyo: 9,
        zfc: 10,
        him: 11,
        btp: 12,
        jsu: 13,
        jne: 14,
        tyi: 15,
        jdx: 68
    }
};

function fps() {
    this.ysb = false;
    this.hdd = null;
    this.lhm = null;
    this.hit = null;
    this.gko = null;
    this.qof = null;
    this.zdr = [];
    this.wpn = null;
    this.itf = null;
    this.win = 0;
    this.gtp = 0;
    this.hih = 0;
    this.totalBet = 1000;
    this.rfe = [];
    this.kmh = 0;
    this.hgl = 0;
    this.isj = 0;
    this.wgp = [];
    this.ecl = [];
    this.kao = [];
    this.inn = 63;
    this.vvq = -1;
    this.ifh = -1;
    this.bax = [];
    this.rqz = [];
    this.uen = 0;
    this.eof = null;
    this.gge = null;
    this.uow = null;
    this.tru = null;
    this.uwk = null;
    this.syd = false;
    this.fnv = false;
    this.ujv = false;
    this.lcf = false;
    this.fae = false;
    this.gxd = true;
    this.apw = false;
    this.qvs = 1;
    this.jpt = 0;
    this.okg = 150;
    this.qjj = 150;
    this.krp = 200;
    this.jpc = 120;
    this.ghd = 0;
    this.nic = [];
    this.uet = [];
    this.jaw = true;
    this.wtq = true;
    this.woi = false;
    this.sxm = 0;
    this.sge = 0;
    this.kyj = 50;
    this.cnu = 100;
    this.oes = false;
    this.xpa = 0;
    this.bzh = 0;
    this.hhb = false;
    this.oii = 0;
    this.jay = 0;
    this.nmt = 2;
    this.you = 1;
    this.iik = false;
    this.fdc = 0;
    this.wji = 0;
    this.nvd = false;
    this.vpy = 0;
    this.oll = 0;
    this.mih = 0;
    this.yvr = -1;
    this.ywr = 0;
    this.adz = 0;
    this.uje = 0;
    this.kjz = true;
    this.rze = false;
    this.ezv = false;
    this.plh = false;
    this.eqn = true;
    this.qev = null;
    this.nza = false;
    this.rzn = true;
    this.teu = "";
    this.drp = 0;
    this.cvg = 0;
    this.grd = 0;
    this.lnw = 0;
    this.ate = function() {
        var a = new jkp();
        a.tqg();
        return a
    };
    this.rtq = function() {
        this.lwy = new nbn()
    };
    this.vuf = function() {
        while (this.hih < this.ezp()) {
            this.hih++
        }
        var b = this.wer(this.nvd);
        if (this.hih > b) {
            var a = (b < 0) ? 0 : b;
            this.hih = a
        }
        this.totalBet = this.rfe[this.hih];
        this.dml();
        this.nir();
        this.rfi();
        this.eua()
    };
    this.feu = function() {
        this.onr();
        this.rdj();
        this.cgi();
        this.jsr();
        if (this.asz.fck) {
            this.cys()
        }
        if (this.asz.neg) {
            this.zwx()
        }
        if (this.asz.poi) {
            this.tdu();
            if (!this.asz.qet) {
                this.iwg()
            }
        }
        if (this.aey) {
            this.fje()
        } else {
            if (this.asz.gns) {
                this.xem()
            }
            this.nvu();
            if (this.kia()) {
                this.gtu()
            }
            if (this.bdi() != null && !this.rer()) {
                this.gwc(this.bdi())
            }
        }
        if (!(this.aey && !this.dae)) {
            this.dgl();
            this.zpx()
        }
        if (this.asz.qet) {
            this.cmq(this.bdi())
        }
        this.oxq()
    };
    this.hti = function() {
        if (!this.azz) {
            if (this.ylu === false) {
                this.reb.style.marginTop = (-this.height / 2 + this.ytc()) + "px";
                this.reb.style.marginLeft = (-this.width / 2) + "px"
            } else {
                this.reb.style.left = "0px";
                this.reb.style.top = "0px";
                this.reb.style.marginTop = ((this.wex - this.height) / 2 + this.ytc()) + "px";
                this.reb.style.marginLeft = ((this.xzr - this.width) / 2) + "px"
            }
            this.reb.style.width = (this.width > this.xzr) ? this.xzr + "px" : this.width + "px";
            this.reb.style.height = (this.height > this.wex) ? this.wex + "px" : this.height + "px";
            this.canvas.width = Math.round(this.width);
            this.canvas.height = Math.round(this.height);
            this.context2D = this.canvas.getContext("2d");
            if (this.agy) {
                this.agy.style.width = this.width + "px";
                this.agy.style.height = this.height + "px"
            }
            this.offsetLeft = this.reb.offsetLeft;
            this.offsetTop = this.reb.offsetTop;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.azz = true
        }
    };
    this.oxq = function() {};
    this.tdu = function() {
        fps.prototype.tdu.call(this);
        var a = this.ktg.wqb("topi");
        try {
            if (a) {
                if (xzl.nfj.value57 === xzl.ui.awm || this.bdi() != null) {
                    a.sle("language", this.ond.jcf("icon_l"), sessionStorage.sessionValue1, [xzl.language.EN, xzl.language.DE, xzl.language.RU, xzl.language.EE, xzl.language.ES, xzl.language.TR, xzl.language.CZ, xzl.language.GR, xzl.language.AT, xzl.language.US, xzl.language.BG, xzl.language.CO, xzl.language.MX, xzl.language.CL, xzl.language.VE, xzl.language.BR, xzl.language.GE, xzl.language.HU, xzl.language.RO, xzl.language.PT, xzl.language.FR, xzl.language.HR, xzl.language.IT, xzl.language.SE])
                }
                if (this.rer() === false) {
                    a.ooy("help", new String("?"), true)
                }
                if (xzl.nfj.value27 && this.tcp) {
                    a.sle("audio", this.ond.jcf("icon_a"), this.klk[this.yua], this.klk)
                }
                if (sessionStorage.sessionValue14 == "true" && xzl.mav.ayv()) {
                    a.ooy("fullscreen", this.ond.jcf("icon_f"), this.dtv)
                }
                if (xzl.nfj.value28 && this.kjz) {
                    a.ooy("turbo", this.ond.jcf("icon_t"), this.rze)
                }
                a.ooy("auto", this.ond.jcf("icon_as"), this.apw);
                a.ooy("gamble", this.ond.jcf("icon_g"), this.fnv)
            }
        } catch (b) {
            console.error(b)
        }
    };
    this.iwg = function() {
        fps.prototype.iwg.call(this);
        var b = this.ktg.wqb("topb");
        try {
            if (b) {
                if (xzl.nfj.value5.length > 1 && (xzl.nfj.value57 === xzl.ui.awm || this.bdi() != null)) {
                    b.jnd("language", this.language.language, this.sqc(xzl.nfj.value5[this.eld]), this.nit, this.lwy.language, 0, 1)
                }
                if (xzl.nfj.value27 && this.tcp) {
                    b.jnd("audio", this.language.audio, this.ond.jcf("btn_a"), this.hwx, this.lwy.audio, this.yua, this.klk.length)
                }
                if (sessionStorage.sessionValue14 == "true" && xzl.mav.ayv()) {
                    b.jnd("fullscreen", this.language.dtv, this.ond.jcf("btn_f"), (xzl.mav.tah) ? this.gld : this.xkf, this.lwy.dtv, (this.dtv) ? 1 : 0, 2)
                }
                if (xzl.nfj.value28 && this.kjz) {
                    b.jnd("turbo", this.language.rze, this.ond.jcf("btn_t"), this.yrr, this.lwy.rze, (this.rze) ? 1 : 0, 2)
                }
                b.qbi("help", this.language.ghw, this.ond.jcf("btn_p"), this.xyf, this.lwy.drj);
                if (xzl.nfj.value12 && !this.zxe()) {
                    b.qbi("history", this.language.rhf, this.ond.jcf("btn_h"), this.vrl, this.lwy.rhf)
                }
                if (xzl.nfj.value36 && !this.zxe()) {
                    b.qbi("statistic", this.language.cec, this.ond.jcf("btn_st"), this.cht, this.lwy.cec)
                }
                b.csk()
            }
        } catch (a) {
            console.error(a)
        }
    };
    this.cmq = function(a) {
        fps.prototype.cmq.call(this, a);
        var b = this.ktg.wqb("settings"),
            c = "";
        if (b) {
            b.jnd("language", this.language.language, this.sqc(xzl.nfj.value5[this.eld]), this.nit, 0, 1);
            if (xzl.nfj.value27 && this.tcp) {
                b.jnd("audio", this.language.audio, this.ond.jcf("btn_a"), this.hwx, this.yua, this.klk.length)
            }
            if (sessionStorage.sessionValue14 == "true" && xzl.mav.ayv()) {
                b.jnd("fullscreen", this.language.dtv, this.ond.jcf("btn_f"), this.gld, (this.dtv) ? 1 : 0, 2)
            }
            if (xzl.nfj.value28 && this.kjz) {
                b.jnd("turbo", this.language.rze, this.ond.jcf("btn_t"), this.yrr, (this.rze) ? 1 : 0, 2)
            }
            b.jnd("gamble", this.language.fnv, this.ond.jcf("btn_g"), this.fea, (this.fnv) ? 1 : 0, 2);
            if (this.hvx[this.yjp] === xzl.bmv.vwu) {
                c = this.language.left
            } else {
                if (this.hvx[this.yjp] === xzl.bmv.jmc) {
                    c = this.language.zzj
                } else {
                    if (this.hvx[this.yjp] === xzl.bmv.mpr) {
                        c = this.language.kno
                    }
                }
            }
            b.jnd("adjustment", c, this.ond.jcf("btn_l"), this.myu, (this.gxl === xzl.mav.zdu) ? 0 : 1, 2);
            b.ffy("help", this.language.iml, this.ond.jcf("btn_p"), this.xyf);
            if (xzl.nfj.value12 && !this.zxe()) {
                b.ffy("history", this.language.rhf, this.ond.jcf("btn_h"), this.vrl)
            }
            if (xzl.nfj.value36 && !this.zxe()) {
                b.ffy("statistic", this.language.cec, this.ond.jcf("btn_st"), this.cht)
            }
            b.uxk = false;
            b.lsi(this.asz.zxp);
            b.jlm(this.asz.zxp);
            b.png(this.style.zxp);
            b.tzp(this.language, false)
        }
    };
    this.onr = function() {
        this.wpn = new ejc();
        this.wpn.parent = this;
        this.wpn.rzn = this.rzn;
        this.wpn.wwe = this.ond.jcf("control_back");
        this.wpn.tqg(this.asz.hwu.mki, null, this.context2D);
        this.wpn.lsi(this.asz.hwu, this.style.hwu);
        this.wpn.dwf(this.eof, 0);
        this.wpn.dwf(this.uow, 1);
        this.wpn.dwf(this.gge, 2)
    };
    this.zwx = function() {
        var a = new yfu();
        a.tqg(this.asz.xio.mki, null, this.context2D);
        a.parent = this;
        a.rmj = this.language.vpv;
        a.oyg = this.eoj;
        a.yjz = this.lwy.gsa.jpm;
        a.lxw = this.lwy.cqm.jpm;
        a.ckh = this.ond.jcf("effect");
        a.jlm(this.asz.xio);
        a.png(this.style.kks);
        a.vuf(this.rfe, this.ezp(), this.wer(false));
        a.xsb(this.hih, false);
        a.hix(false);
        this.ktg.ovw("betsel", a)
    };
    this.zpx = function() {
        this.itf.asl(this.asz.drj, this.style.drj, this.ond.jcf("btn_s"))
    };
    this.xem = function() {
        var a = new ull();
        a.tqg(this.asz.top.mki, null, this.context2D);
        a.parent = this;
        this.ktg.ovw("tops", a)
    };
    this.rdj = function() {
        this.hdd = new hln();
        this.lhm = new hln();
        this.hit = new hln();
        this.gko = new hln();
        this.qof = new hln();
        this.hdd.tqg(this.asz.jjl, this.context2D);
        this.lhm.tqg(this.asz.thv, this.context2D);
        this.hit.tqg(this.asz.ktx, this.context2D);
        this.gko.tqg(this.asz.mcv, this.context2D);
        this.qof.tqg(this.asz.siz, this.context2D);
        this.zdr = [this.hdd, this.lhm, this.hit, this.gko, this.qof];
        for (var b = 0, a = this.zdr.length; b < a; b++) {
            this.zdr[b].parent = this;
            this.zdr[b].ejr = this.ond.jcf("cards");
            this.zdr[b].kao = this.kao;
            this.zdr[b].zmb(this.inn);
            this.zdr[b].png(this.style.gjp);
            this.zdr[b].jlm(this.asz.gjp)
        }
    };
    this.dgl = function() {
        this.itf = new vtz();
        this.itf.tqg(this.asz.drj.mki, null, this.context2D);
        this.itf.parent = this;
        this.itf.ytn(false);
        this.itf.jlm(this.asz.drj);
        this.itf.png(this.style.drj)
    };
    this.cgi = function() {
        var a = new ybj();
        a.tqg(this.asz.ghw.mki, null, this.context2D);
        a.parent = this;
        a.ejr = this.ond.jcf("paytable");
        a.jlm(this.asz.ghw);
        a.png(this.style.ghw);
        a.rzo(this.wgp);
        a.zqd(this.ecl);
        this.ktg.ovw("paytable", a)
    };
    this.jsr = function() {};
    this.cys = function() {
        var a = new blx();
        a.tqg(this.asz.slk.mki, this.context2D, null, this.ond.jcf("winpanel"), "");
        a.parent = this;
        a.jlm(this.asz.slk);
        a.png(this.style.slk);
        a.hix(false);
        this.ktg.ovw("winp", a)
    };
    this.fje = function() {
        var a = new ito();
        a.tqg(this.asz.rhf.mki, null, this.context2D);
        a.parent = this;
        a.lsi(this.asz.rhf);
        a.png(this.style.rhf);
        this.ktg.ovw("history", a)
    };
    this.gzw = function(d, b, c, a, e) {
        this.gql = true;
        this.state = d;
        this.nat = b;
        this.sob = e;
        this.dmy = a;
        clearInterval(this.tpw);
        if (this.tcp) {
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                this.yua = 0
            }
            if (this.ond.afp === true) {
                this.xtu(this.klk[this.yua])
            } else {
                this.ssd((this.klk[this.yua] === 0))
            }
        }
        if (this.bjs === true) {
            this.vrz = true
        }
        this.vuf();
        this.feu();
        this.dsm();
        this.dql();
        this.tru.plr(c, a);
        window.oai(this.qoq)
    };
    this.qoq = function() {
        xzl.mdj.yfl(xzl.mdj.nat);
        xzl.mdj.wmr = true;
        xzl.mdj.ogj();
        xzl.mdj.shb();
        if (xzl.mdj.bjs === true) {
            xzl.mdj.omg(true)
        }
        if (xzl.mav.ajl === xzl.os.dmv && xzl.mav.mmk !== xzl.uxj.ppz) {
            xzl.mdj.djj([{
                tpp: xzl.wmn.qpg
            }])
        } else {
            xzl.mdj.qlm(xzl.mdj.state)
        }
        xzl.mdj.tzp();
        if (xzl.nfj.value37 && !xzl.mdj.zxe()) {
            xzl.mdj.vuv()
        }
    };
    this.hba = function() {
        this.mqy = new zgr().tqg(this, xzl.nfj.value6)
    };
    this.zzi = function() {
        this.mqy = new bbo().tqg(this, xzl.nfj.value6)
    };
    this.xuh = function(c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.vrz) {
            return
        }
        var p = 0,
            o = 0,
            d = false,
            q = false,
            l = false,
            j = this.ktg.wqb("loading"),
            b = this.ktg.wqb("stats"),
            r = this.ktg.wqb("topb"),
            n = this.ktg.wqb("topi"),
            a = this.ktg.wqb("betsel"),
            m = this.ktg.wqb("autop"),
            e = this.ktg.wqb("settings");
        if (c.touches) {
            var g = c.touches[0];
            d = true;
            if (!this.wfd) {
                p = g.pageX - this.offsetLeft;
                o = g.pageY - this.offsetTop
            } else {
                p = Math.round((g.pageX - this.offsetLeft) / this.bke);
                o = Math.round((g.pageY - this.offsetTop) / this.wpw)
            }
        } else {
            if (c.which != 1) {
                return
            }
            if (!this.wfd) {
                p = c.pageX - this.offsetLeft;
                o = c.pageY - this.offsetTop
            } else {
                p = Math.round((c.pageX - this.offsetLeft) / this.bke);
                o = Math.round((c.pageY - this.offsetTop) / this.wpw)
            }
        }
        if (this.gql === true) {
            if (m && m.jte()) {
                if (m.xuh(p, o)) {
                    return
                }
            }
            if (r && r.jte()) {
                if (r.xuh(p, o)) {
                    clearTimeout(this.uje);
                    return
                } else {
                    l = true
                }
            }
            if (a) {
                if (a.jte()) {
                    if (a.xuh(p, o, d)) {
                        clearTimeout(this.uje);
                        return
                    } else {
                        q = true
                    }
                }
            }
            if (l) {
                this.yhm(this.wpn.nca(p, o, null));
                return
            } else {
                if (q) {
                    if (a && a.zrf()) {
                        this.zfg(this.wpn.nca(p, o, null))
                    }
                    return
                }
            }
            if (e && e.jte()) {
                if (e.xuh(p, o)) {
                    return
                }
            }
            if (n) {
                if (n.xuh(p, o, d)) {
                    return
                }
            }
            if (b && b.jte()) {
                if (b.xuh(p, o)) {
                    return
                }
            }
            if (this.itf && this.itf.jte()) {
                if (this.itf.xuh(p, o)) {
                    return
                }
            }
            if (this.tru && this.tru.jte()) {
                if (this.tru.xuh(p, o)) {
                    return
                }
            }
            if (this.wpn) {
                if (this.wpn.xuh(p, o, q)) {
                    return
                }
            }
            if (this.zdr) {
                for (var f = 0, k = this.zdr.length; f < k; f++) {
                    if (this.zdr[f].xuh(p, o)) {
                        return
                    }
                }
            }
        } else {
            if (j && j.jte()) {
                if (j.xuh(p, o)) {
                    return
                }
            }
        }
    };
    this.xak = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        if (this.vrz) {
            return
        }
        var e = this.ktg.wqb("topb"),
            b = this.ktg.wqb("betsel"),
            a = this.ktg.wqb("autop"),
            c = this.ktg.wqb("settings");
        if (this.gql === true) {
            if (a && a.jte()) {
                if (a.xak()) {
                    return
                }
            }
            if (b) {
                if (b.xak()) {
                    return
                }
            }
            if (this.itf && this.itf.jte()) {
                if (this.itf.xak()) {
                    return
                }
            }
            if (this.tru && this.tru.jte()) {
                if (this.tru.xak()) {
                    return
                }
            }
            if (this.wpn) {
                if (this.wpn.xak()) {
                    return
                }
            }
            if (e) {
                if (e.xak()) {
                    return
                }
            }
            if (c) {
                if (c.xak()) {
                    return
                }
            }
        }
    };
    this.dqi = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        if (this.vrz) {
            return
        }
        var f = false,
            c = false,
            e = this.ktg.wqb("topb"),
            b = this.ktg.wqb("betsel"),
            a = this.ktg.wqb("autop");
        if (a && a.jte()) {
            if (a.dqi(d.keyCode)) {
                return
            }
        }
        if (e) {
            if (e.dqi(d.keyCode)) {
                clearTimeout(this.uje);
                return
            } else {
                if (e.jte() && e.zrf()) {
                    c = true
                }
            }
        }
        if (b) {
            if (b.jte()) {
                if (b.dqi(d.keyCode)) {
                    clearTimeout(this.uje);
                    return
                } else {
                    f = true
                }
            }
        }
        if (c) {
            this.yhm(this.wpn.nca(null, null, d.keyCode));
            return
        } else {
            if (f) {
                if (b && b.zrf()) {
                    this.zfg(this.wpn.nca(null, null, d.keyCode))
                }
                return
            }
        }
        if (this.itf && this.itf.jte()) {
            if (this.itf.dqi(d.keyCode)) {
                return
            }
        }
        if (this.tru && this.tru.jte()) {
            if (this.tru.dqi(d.keyCode)) {
                return
            }
        }
        if (this.wpn) {
            if (this.wpn.dqi(d.keyCode)) {
                return
            }
        }
    };
    this.ywi = function(b) {
        if (b.preventDefault) {
            b.preventDefault()
        }
        if (b.stopPropagation) {
            b.stopPropagation()
        }
        if (this.vrz) {
            return
        }
        var a = this.ktg.wqb("autop"),
            c = this.ktg.wqb("topb");
        if (a && a.jte()) {
            if (a.ywi()) {
                return
            }
        }
        if (this.itf && this.itf.jte()) {
            if (this.itf.ywi()) {
                return
            }
        }
        if (this.tru && this.tru.jte()) {
            if (this.tru.ywi()) {
                return
            }
        }
        if (this.wpn) {
            if (this.wpn.ywi()) {
                return
            }
        }
        if (c) {
            if (c.ywi()) {
                return
            }
        }
    };
    this.rer = function() {
        return (xzl.mav.ttv() && !this.aey)
    };
    this.xmb = function() {
        return (xzl.mav.ttv() && !this.dae)
    };
    this.ykk = function(a) {
        this.asz = this.loi(a);
        this.width = this.asz.canvas.mki.width;
        this.height = this.asz.canvas.mki.height;
        this.uqh()
    };
    this.sjt = function() {
        this.style = new lxe()
    };
    this.loi = function(a) {
        this.gxl = a;
        if (a == xzl.asz.uxe) {
            return new lhi()
        } else {
            if (a == xzl.asz.jod) {
                return new tfg()
            } else {
                if (a == xzl.asz.ozm) {
                    return new joo()
                } else {
                    if (a == xzl.asz.ihe) {
                        return new csb()
                    } else {
                        if (a == xzl.asz.mij) {
                            return new jxj()
                        } else {
                            if (a == xzl.asz.iem) {
                                return new rmd()
                            } else {
                                if (a == xzl.asz.wbc) {
                                    return new xtr()
                                } else {
                                    if (a == xzl.asz.pxs) {
                                        return new qlf()
                                    } else {
                                        if (a == xzl.asz.uzn) {
                                            return new vlc()
                                        } else {
                                            if (a == xzl.asz.lri) {
                                                return new cmd()
                                            } else {
                                                if (a == xzl.asz.nki) {
                                                    return new oep()
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return null
    };
    this.uqh = function() {};
    this.bkn = function(a) {
        if (this.azz) {
            this.usd();
            this.pob(a)
        } else {
            this.bdt()
        }
    };
    this.usd = function() {
        this.canvas.width = 0;
        if (this.ylu === false) {
            this.reb.style.marginTop = (-this.height / 2 + this.ytc()) + "px";
            this.reb.style.marginLeft = (-this.width / 2) + "px"
        } else {
            this.reb.style.left = "0px";
            this.reb.style.top = "0px";
            this.reb.style.marginTop = ((this.wex - this.height) / 2 + this.ytc()) + "px";
            this.reb.style.marginLeft = ((this.xzr - this.width) / 2) + "px"
        }
        this.reb.style.width = (this.width > this.xzr) ? this.xzr + "px" : this.width + "px";
        this.reb.style.height = (this.height > this.wex) ? this.wex + "px" : this.height + "px";
        this.canvas.width = Math.round(this.width);
        this.canvas.height = Math.round(this.height);
        if (this.agy) {
            this.agy.style.width = this.width + "px";
            this.agy.style.height = this.height + "px"
        }
        this.width = this.canvas.width;
        this.height = this.canvas.height
    };
    this.pob = function(a) {
        this.nxr();
        this.rxq();
        this.lnt();
        this.qua();
        if (!(this.aey && !this.dae)) {
            this.oud()
        }
        if (!this.aey) {
            if (this.asz.gns) {
                if (this.ktg.wqb("tops")) {
                    this.kvg()
                } else {
                    this.xem()
                }
            } else {
                this.ktg.nej("tops")
            }
            this.pyc();
            this.ygx();
            if (this.kia()) {
                this.jfw()
            }
        } else {
            this.fje()
        }
        if (this.asz.fck) {
            this.isr()
        }
        if (this.asz.neg) {
            this.jhz()
        }
        if (this.asz.poi) {
            this.wqe();
            if (!this.asz.qet) {
                this.wad()
            }
        }
        if (this.asz.qet) {
            this.rtr()
        }
        this.gkf();
        if (a) {
            this.gqp()
        }
    };
    this.nxr = function() {
        if (this.wpn) {
            this.wpn.tzs(this.asz.hwu.mki);
            this.wpn.jlm(this.asz.hwu)
        }
    };
    this.wad = function() {
        fps.prototype.wad.call(this);
        var b = this.ktg.wqb("topb");
        if (b) {
            if (this.eqn) {
                var a = b.fed.wqb("help");
                if (a) {
                    a.osq(!this.asz.gns)
                }
            }
        }
    };
    this.jhz = function() {
        var a = this.ktg.wqb("betsel");
        if (a) {
            a.tzs(this.asz.xio.mki);
            a.jlm(this.asz.xio)
        }
    };
    this.rxq = function() {
        if (this.hdd) {
            this.hdd.tzs(this.asz.jjl)
        }
        if (this.lhm) {
            this.lhm.tzs(this.asz.thv)
        }
        if (this.hit) {
            this.hit.tzs(this.asz.ktx)
        }
        if (this.gko) {
            this.gko.tzs(this.asz.mcv)
        }
        if (this.qof) {
            this.qof.tzs(this.asz.siz)
        }
        for (var b = 0, a = this.zdr.length; b < a; b++) {
            this.zdr[b].jlm(this.asz.gjp)
        }
    };
    this.isr = function() {
        var a = this.ktg.wqb("winp");
        if (a) {
            a.tzs(this.asz.slk.mki);
            a.jlm(this.asz.slk)
        }
    };
    this.oud = function() {
        if (this.itf) {
            this.itf.tzs(this.asz.drj.mki);
            this.itf.jlm(this.asz.drj)
        }
    };
    this.kvg = function() {
        var a = this.ktg.wqb("tops");
        if (a) {
            a.tzs(this.asz.top.mki);
            a.hix(this.asz.gns)
        }
    };
    this.lnt = function() {
        var a = this.ktg.wqb("paytable");
        if (a) {
            a.tzs(this.asz.ghw.mki);
            a.jlm(this.asz.ghw)
        }
    };
    this.qua = function() {};
    this.gkf = function() {};
    this.gqp = function() {
        if (this.ktg.wqb("tops")) {
            this.itf.hpy(true);
            this.urn();
            if (this.itf.fuv() == 0) {
                this.yso()
            }
        } else {
            this.szw = null;
            this.itf.fwz(this.pjp, true)
        }
        this.itf.ewb()
    };
    this.dml = function() {
        this.eof = [];
        if (this.zxe() === false && this.teu != "") {
            this.eof.push(this.teu)
        }
        this.eof.push(this.language.owj);
        this.eof.push(this.language.xoe + " " + this.gcv(this.ssb()) + ((this.rer() === true) ? "|" : " ") + this.language.iva + " " + this.gcv(this.fds()));
        this.eof.push(this.language.vvu)
    };
    this.nir = function() {
        this.gge = [];
        this.gge[0] = this.language.isf;
        this.gge[1] = this.language.san
    };
    this.rfi = function() {
        this.uow = [];
        this.uow[0] = this.language.bxy;
        this.uow[1] = this.language.pfw
    };
    this.eua = function() {
        this.uwk = [];
        this.uwk[0] = this.language.rbu
    };
    this.cdx = function() {
        fps.prototype.cdx.call(this);
        if (this.jms() === true) {
            this.ond.buk(true)
        }
    };
    this.xba = function() {
        var b = xzl.nfj.value30 + "/poker/sounds/";
        this.ond.emy("collect", null, false, b + "collect");
        this.ond.emy("collectend", null, false, b + "collect1");
        b = xzl.nfj.value30 + "/basic/sounds/";
        if (!xzl.nfj.value55) {
            if (this.rer() === false) {
                this.ond.emy("btn", null, false, b + "btn");
                this.ond.emy("auto_on", null, false, b + "auto_on");
                this.ond.emy("gamble_on", null, false, b + "gamble_on");
                this.ond.emy("gamble_off", null, false, b + "gamble_off");
                this.ond.emy("gambleprop", null, true, b + "gambleprop");
                this.ond.emy("auto_off", null, false, b + "auto_off");
                for (var a = 0; a < 12; a++) {
                    this.ond.emy("step" + a, null, false, b + "step" + (a + 1))
                }
                this.ond.emy("maxstep", null, false, b + "maxstep")
            } else {
                this.ond.emy("btn", null, false, b + "btn2");
                this.ond.emy("auto_fill", null, false, b + "auto_fill")
            }
        } else {
            this.ond.emy("btn", null, false, b + "ama_btn");
            if (this.rer() === false) {
                this.ond.emy("gamble_on", null, false, b + "ama_gamble_on");
                this.ond.emy("gamble_off", null, false, b + "ama_gamble_off");
                this.ond.emy("gambleprop", null, true, b + "ama_gambleprop");
                for (var a = 0; a < 12; a++) {
                    this.ond.emy("step" + a, null, false, b + "ama_step")
                }
                this.ond.emy("maxstep", null, false, b + "ama_step")
            }
        }
        this.ond.emy("silence", null, false, b + "silence");
        this.ond.emy("audioon", null, false, b + "audio_on");
        if (this.rer() === false) {
            this.ond.emy("panel_in", null, false, b + "panel_in");
            this.ond.emy("panel_out", null, false, b + "panel_out")
        }
        this.won();
        this.toi()
    };
    this.toi = function() {
        var b = xzl.nfj.value30 + "/poker/sounds/";
        this.ond.emy("hold", null, false, b + "hold");
        this.ond.emy("unhold", null, false, b + "unhold");
        for (var a = 0; a < 5; a++) {
            this.ond.emy("deal" + a, null, false, b + "deal2")
        }
    };
    this.won = function() {
        for (var a = 0; a < this.jay; a++) {
            this.ond.emy("win" + a, this.zff, false, this.rof + "win" + (a + 1))
        }
    };
    this.oeg = function() {
        var a = this.uhs + this.asz.type + "/";
        this.ond.ebd("icon", a + "icon_out.png");
        this.ond.ebd("back", a + "main.jpg");
        this.ond.ebd("cards", a + "cardDeck.png");
        this.ond.ebd("winpanel", a + "winPanel.png");
        this.ond.ebd("help", a + "help.jpg");
        a = xzl.nfj.value30 + "/basic/images/" + this.asz.type + "/";
        if (this.asz.feb === true) {
            this.ond.ebd("btn_back", a + "buttonback.png")
        }
        a = xzl.nfj.value30 + "/poker/images/" + this.asz.type + "/";
        if (this.rer() === true) {
            this.ond.uxa(a, "gui_mobile_v15.json")
        } else {
            if (xzl.nfj.value57 === xzl.ui.awm || this.bdi() != null) {
                this.ond.uxa(a, "gui_desktop_v25.json")
            } else {
                this.ond.uxa(a, "gui_desktop_v15.json")
            }
        }
        this.wqp()
    };
    this.wqp = function() {
        var a = this.uhs + this.asz.type + "/";
        this.ond.ebd("g_back", a + "gamble.jpg")
    };
    this.ytx = function() {
        if (this.ujv && !this.woi) {
            this.egm(this.isj - this.win - this.gtp, true)
        } else {
            this.egm(this.isj, true)
        }
        this.wdt(this.totalBet, true);
        this.dhz();
        this.ktg.ybw("tops", "#shb");
        this.ktg.ybw("settings", "#nee", [0, 0, this.gcv(this.tlp())]);
        this.shb()
    };
    this.shb = function(m, l, n, t) {
        if (xzl.mdj.dst()) {
            var a = (m != null && l != null && n != null && t != null),
                c = (a === true) ? new gvm(m, l, n, t) : new gvm(xzl.mdj.asz.mdj.mki.x, xzl.mdj.asz.mdj.mki.y, xzl.mdj.asz.mdj.mki.width, xzl.mdj.asz.mdj.mki.height),
                q = xzl.mdj.context2D,
                e = xzl.mdj.canvas,
                f = (xzl.mdj.dae === true) ? xzl.mdj.style.mdj.lpd : xzl.mdj.style.mdj.backgroundColor,
                z = xzl.mdj.ktg.wqb("stats"),
                b = xzl.mdj.ktg.wqb("history"),
                u = xzl.mdj.ktg.wqb("topb"),
                g = xzl.mdj.ktg.wqb("topi"),
                j = xzl.mdj.ktg.wqb("betsel"),
                v = xzl.mdj.ktg.wqb("paytable"),
                p = xzl.mdj.ktg.wqb("tops"),
                k = xzl.mdj.ktg.wqb("winp"),
                o = xzl.mdj.ktg.wqb("autop"),
                d = xzl.mdj.ktg.wqb("settings");
            xzl.mdj.fae = false;
            q.save();
            if (a) {
                q.beginPath();
                q.rect(m, l, n, t);
                q.closePath();
                q.clip()
            }
            q.clearRect(0, 0, xzl.mdj.width, xzl.mdj.height);
            q.restore();
            if (xzl.mdj.asz.fdw) {
                xzl.mav.snb(q, xzl.mdj.asz.mdj.mki.x - xzl.mdj.asz.mdj.vqq, xzl.mdj.asz.mdj.mki.y - xzl.mdj.asz.mdj.vqq, xzl.mdj.asz.mdj.mki.width + 2 * xzl.mdj.asz.mdj.vqq, xzl.mdj.asz.mdj.mki.height + 2 * xzl.mdj.asz.mdj.vqq, f, 1)
            }
            if (b) {
                b.shb()
            }
            if (g) {
                g.shb()
            }
            if (p && p.jte()) {
                p.shb()
            }
            if (z && z.jte()) {
                z.shb()
            } else {
                if (xzl.mdj.itf != null && xzl.mdj.itf.jte()) {
                    xzl.mdj.itf.shb()
                } else {
                    if (xzl.mdj.tru != null && xzl.mdj.tru.jte()) {
                        xzl.mdj.tru.shb()
                    } else {
                        q.drawImage(xzl.mdj.ond.jcf("back"), xzl.mdj.asz.mdj.mki.x, xzl.mdj.asz.mdj.mki.y);
                        if (xzl.mdj.wpn) {
                            xzl.mdj.wpn.shb()
                        }
                        for (var r = 0, s = xzl.mdj.zdr.length; r < s; r++) {
                            xzl.mdj.zdr[r].scd(e);
                            xzl.mdj.zdr[r].shb()
                        }
                        if (k) {
                            k.shb()
                        }
                        if (v) {
                            v.shb()
                        }
                    }
                }
            }
            if (j) {
                j.shb()
            }
            if (u) {
                u.shb()
            }
            if (o) {
                o.shb()
            }
            if (d) {
                d.shb()
            }
        }
    };
    this.zxf = function(a, b) {
        this.fae = true;
        xzl.mav.snb(a, b.x, b.y, b.width, b.height, "black", 0.5)
    };
    this.vjw = function() {
        this.bfu();
        if (this.state == xzl.pug.tpy.oof && this.vvq > 0) {
            this.ond.yxe("win" + (this.vvq - 1))
        }
        this.wpn.fed.ybw("info", "#wem");
        this.upw(false);
        this.wpn.jyi(false);
        this.zlb(false);
        this.itf.wbw();
        this.itf.jyi(true);
        this.ktg.ybw("settings", "#ezd");
        this.wpn.fed.ybw("setting", "#ykr", [this.ktg.ybw("settings", "#jte")])
    };
    this.yso = function() {
        this.itf.jyi(false);
        if (this.state != xzl.pug.tpy.saj && this.state != xzl.pug.tpy.him) {
            this.wpn.jyi(true)
        } else {
            this.wpn.tzz(true)
        }
        this.upw(true);
        this.zlb(true);
        this.itf.ezd();
        this.wpn.fed.ybw("info", "#shs", [0])
    };
    this.yno = function() {
        var a = xzl.mdj.wpn.fed.wqb("gamble");
        xzl.mdj.cmh();
        xzl.mdj.hta();
        if (a) {
            a.ezf();
            a.ykr(xzl.mdj.fnv)
        }
        xzl.mdj.bfu();
        xzl.mdj.ond.yxe("win" + (xzl.mdj.vvq - 1));
        xzl.mdj.wpn.fed.ybw("info", "#wem");
        xzl.mdj.wpn.jyi(false);
        xzl.mdj.zlb(false);
        xzl.mdj.tru.jyi(true);
        xzl.mdj.tru.hyh(xzl.mdj.isj, xzl.mdj.win + xzl.mdj.gtp, xzl.mdj.vvq, false);
        xzl.mdj.tru.wbw(!xzl.mdj.apw)
    };
    this.osv = function() {
        xzl.mdj.ubr();
        xzl.mdj.tru.fml();
        xzl.mdj.zlb(true);
        xzl.mdj.tru.jyi(false);
        xzl.mdj.tru.hix(false, true);
        xzl.mdj.wpn.fed.ybw("start", "#pmb", [xzl.mdj.language.start, true]);
        xzl.mdj.woi = true;
        if (xzl.mdj.apw) {
            xzl.mdj.wpn.rlk(true);
            xzl.mdj.adz = setTimeout(xzl.mdj.zol, 800)
        } else {
            xzl.mdj.wpn.jyi(true);
            if (!(xzl.mdj.apw || xzl.mdj.ujv)) {
                xzl.mdj.upw(true)
            }
            xzl.mdj.wpn.fed.ybw("info", "#shs", [0])
        }
    };
    this.zyk = function() {
        var a = this.ktg.wqb("tops");
        if (a) {
            a.xsb(0);
            this.shb()
        }
    };
    this.nkq = function() {
        this.nud();
        this.ytx();
        this.hta();
        this.upw(false);
        this.cfd(false);
        this.ktg.ybw("winp", "#hix", [false]);
        this.ktg.ybw("paytable", "#hix", [true]);
        this.kqr()
    };
    this.ohj = function() {
        this.iqy();
        if (this.nmt == this.you) {
            this.ytx()
        }
        this.upw(false);
        this.cfd(false);
        this.kqr()
    };
    this.vrk = function() {
        this.jxm();
        if (this.nmt >= 2 && this.you == 2) {
            this.ytx()
        }
        this.upw(false);
        this.cfd(false);
        this.kqr()
    };
    this.bbj = function() {
        var a = xzl.mdj.okg,
            b = 0;
        if (xzl.mdj.wji == 0) {
            xzl.mdj.jpt = new Date().getTime()
        } else {
            b = new Date().getTime();
            a = xzl.mdj.okg + (xzl.mdj.ghd * xzl.mdj.okg - (b - xzl.mdj.jpt))
        }
        if (!xzl.mdj.zdr[xzl.mdj.wji].ebs()) {
            xzl.mdj.ghd += 1;
            xzl.mdj.ond.ewm("deal" + (xzl.mdj.ghd - 1));
            xzl.mdj.zdr[xzl.mdj.wji].zmb(xzl.mdj.bax[xzl.mdj.wji], true)
        } else {
            a = 0
        }
        xzl.mdj.wji++;
        if (a <= 0) {
            a = 0
        }
        if (xzl.mdj.wji < xzl.mdj.bax.length) {
            if (a == 0) {
                xzl.mdj.bbj()
            } else {
                xzl.mdj.oll = setTimeout(xzl.mdj.bbj, a)
            }
        } else {
            xzl.mdj.oll = setTimeout(xzl.mdj.ljy, xzl.mdj.okg)
        }
    };
    this.wzm = function() {
        var a = 40,
            b = a,
            c = 0;
        if (xzl.mdj.wji == 0) {
            xzl.mdj.jpt = new Date().getTime()
        } else {
            c = new Date().getTime();
            b = a + (xzl.mdj.ghd * a - (c - xzl.mdj.jpt))
        }
        if (!xzl.mdj.zdr[xzl.mdj.wji].ebs()) {
            xzl.mdj.ghd += 1;
            xzl.mdj.zdr[xzl.mdj.wji].zmb(xzl.mdj.inn, true)
        } else {
            b = 0
        }
        xzl.mdj.wji++;
        if (b <= 0) {
            b = 0
        }
        if (xzl.mdj.wji < xzl.mdj.bax.length) {
            if (b == 0) {
                xzl.mdj.wzm()
            } else {
                xzl.mdj.oll = setTimeout(xzl.mdj.wzm, b)
            }
        } else {
            xzl.mdj.oll = setTimeout(xzl.mdj.bwv, 200)
        }
    };
    this.kqr = function() {
        this.ysb = true;
        this.ghd = 0;
        this.wpm();
        if (this.fdc == 1) {
            for (var b = 0, a = this.bax.length; b < a; b++) {
                this.zdr[b].zmb(this.inn, false)
            }
            this.wpn.fed.ybw("info", "#lqj", [this.language.bbk, true]);
            this.shb();
            this.wji = 0;
            this.oll = setTimeout(this.bbj, 200)
        } else {
            this.wpn.fed.ybw("info", "#wem");
            for (var b = 0, a = this.bax.length; b < a; b++) {
                if (!this.zdr[b].ebs()) {
                    this.zdr[b].zmb(this.inn, false)
                }
            }
            this.shb();
            this.oll = setTimeout(this.xib, 200)
        }
    };
    this.xib = function() {
        if (xzl.mdj.uen > 0) {
            xzl.mdj.wji = 0;
            xzl.mdj.bbj()
        } else {
            xzl.mdj.ljy()
        }
    };
    this.bwv = function() {
        xzl.mdj.ghd = 0;
        for (var b = 0, a = xzl.mdj.ond.eab("deal"); b < a; b++) {
            xzl.mdj.ond.yxe("deal" + b)
        }
        if (xzl.mdj.fdc == 1) {
            xzl.mdj.wji = 0;
            xzl.mdj.bbj()
        } else {
            if (xzl.mdj.uen > 0) {
                xzl.mdj.wji = 0;
                xzl.mdj.bbj()
            } else {
                xzl.mdj.ljy()
            }
        }
    };
    this.ljy = function() {
        xzl.mdj.ysb = false;
        xzl.mdj.gxd = true;
        if (xzl.mdj.fix()) {
            if (xzl.mdj.fdc == 1) {
                xzl.mdj.dqv()
            } else {
                if (xzl.mdj.fdc == 2) {
                    xzl.mdj.ybt()
                }
            }
            xzl.mdj.tpe(true);
            xzl.mdj.cfd(true);
            xzl.mdj.wpn.fed.ybw("info", "#shs", [2]);
            if (xzl.mdj.apw) {
                xzl.mdj.wpn.igi(true);
                xzl.mdj.adz = setTimeout(xzl.mdj.zol, 800)
            } else {
                xzl.mdj.wpn.tzz(true);
                if ((xzl.mdj.nmt == 3 && (xzl.mdj.you == 3 || (xzl.mdj.you == 2 && xzl.mdj.fdc == 2))) || (xzl.mdj.nmt == 2 && xzl.mdj.you == 2)) {
                    xzl.mdj.wpn.fed.ybw("bet", "#osq", [xzl.mdj.iik]);
                    xzl.mdj.wpn.fed.ybw("exit", "#osq", [true])
                }
                if (xzl.mdj.nmt == xzl.mdj.you) {
                    xzl.mdj.ubr()
                }
                xzl.mdj.upw(true)
            }
        } else {
            xzl.mdj.ibh();
            xzl.mdj.dnh();
            if (xzl.mdj.win > 0) {
                xzl.mdj.woi = false;
                xzl.mdj.ivm()
            } else {
                if (!xzl.mdj.ebj()) {
                    xzl.mdj.ubr();
                    xzl.mdj.wpn.fed.ybw("info", "#lqj", [xzl.mdj.language.djp, true]);
                    if (xzl.mdj.apw) {
                        xzl.mdj.wpn.igi(true);
                        xzl.mdj.adz = setTimeout(xzl.mdj.zol, 800)
                    } else {
                        xzl.mdj.wpn.jyi(true);
                        xzl.mdj.upw(true)
                    }
                } else {
                    xzl.mdj.osw()
                }
            }
        }
    };
    this.wpm = function() {
        if (xzl.nfj.value79 > 0) {
            this.okg = xzl.nfj.value79 / this.zdr.length
        } else {
            if (this.rze) {
                this.okg = this.jpc
            } else {
                if (this.fdc == 1) {
                    this.okg = this.qjj
                } else {
                    this.okg = this.krp
                }
            }
        }
    };
    this.tpe = function(d) {
        var c = false;
        this.wtq = true;
        for (var b = 0, a = this.rqz.length; b < a; b++) {
            if (this.rqz[b] > 0) {
                this.zdr[b].zki(true, false);
                if (!c && d) {
                    this.ond.ewm("hold");
                    c = true
                }
            } else {
                this.zdr[b].zki(false, false)
            }
        }
        this.shb()
    };
    this.dnh = function() {
        for (var b = 0, a = this.rqz.length; b < a; b++) {
            this.zdr[b].zki(false, false);
            if (this.jaw) {
                if (this.rqz[b] > 0) {
                    this.zdr[b].odn(true, false)
                } else {
                    this.zdr[b].odn(false, false)
                }
            }
        }
        this.shb()
    };
    this.ivm = function() {
        this.wpn.jyi(false);
        this.prl(this.win);
        this.wpn.fed.ybw("info", "#lqj", [this.language.pbn, false]);
        this.lcf = false;
        if (!this.aey) {
            this.ond.ewm("win" + (this.vvq - 1))
        }
        this.shb();
        this.nos()
    };
    this.osw = function() {};
    this.ebj = function() {
        return false
    };
    this.prl = function(a) {
        this.ktg.ybw("winp", "#pmb", [this.gcv(a), false]);
        this.ktg.ybw("winp", "#hix", [true]);
        this.ktg.ybw("paytable", "#hix", [false])
    };
    this.nos = function() {
        if (this.fnv && this.syd) {
            setTimeout(this.yno, 1000)
        } else {
            if ((this.ujv || this.apw)) {
                if (!this.hhb && !this.woi) {
                    this.wpn.fed.ybw("start", "#pmb", [this.language.iej, true]);
                    if (this.ujv) {
                        this.hhb = true;
                        this.wpn.jyi(false);
                        setTimeout(this.iej, 2000)
                    } else {
                        if (this.apw) {
                            this.adz = setTimeout(this.zol, 800)
                        }
                    }
                }
            } else {
                this.wpn.fed.ybw("start", "#pmb", [this.language.iej, true]);
                if (!this.aey) {
                    this.wpn.fed.ybw("gamble", "#zzu");
                    this.wpn.fed.ybw("info", "#hxc", [1])
                } else {
                    if (!this.inAutogamble && !this.tmz) {
                        this.wpn.fed.ybw("gamble", "#zzu")
                    }
                }
                setTimeout(this.guf, 400)
            }
        }
    };
    this.guf = function() {
        xzl.mdj.wpn.wjv(true)
    };
    this.nud = function() {};
    this.iqy = function() {};
    this.jxm = function() {};
    this.dqv = function() {};
    this.ybt = function() {};
    this.ibh = function() {};
    this.fix = function() {
        return this.state == xzl.pug.tpy.saj || this.state == xzl.pug.tpy.him
    };
    this.fbf = function(a) {
        if (this.wtq) {
            if (!a) {
                this.hta()
            }
            this.wtq = false
        }
    };
    this.hta = function() {
        for (var b = 0, a = this.zdr.length; b < a; b++) {
            this.zdr[b].zki(false, false);
            this.zdr[b].odn(false, false)
        }
        this.shb()
    };
    this.xfc = function() {
        return !this.ujv
    };
    this.nye = function() {
        var b = this.wpn.fed.wqb("gamble"),
            a = this.wpn.fed.wqb("info");
        this.wpn.jyi(false);
        this.hta();
        this.cmh();
        if (b) {
            b.ezf();
            b.ykr(this.fnv)
        }
        if (a) {
            a.wem();
            a.lqj(this.language.eem + ": " + this.gcv(this.win + this.gtp));
            a.hxc(0)
        }
        this.mqy.iej()
    };
    this.iej = function() {
        if (!xzl.mdj.woi) {
            xzl.mdj.hta();
            xzl.mdj.ond.yxe("collect");
            xzl.mdj.ond.yxe("collectend");
            if (xzl.mdj.qev != xzl.mdj.tyo) {
                xzl.mdj.wpn.igi(true)
            }
            xzl.mdj.ond.yxe("win" + (xzl.mdj.vvq - 1));
            xzl.mdj.sxm = 10;
            if (xzl.mdj.win + xzl.mdj.gtp < xzl.mdj.sxm) {
                xzl.mdj.sxm = xzl.mdj.win + xzl.mdj.gtp;
                xzl.mdj.wio()
            } else {
                if (xzl.mdj.win + xzl.mdj.gtp >= xzl.mdj.tlp() * 25) {
                    xzl.mdj.sxm = 20
                }
                xzl.mdj.wio()
            }
        }
    };
    this.oid = function() {
        this.woi = true;
        this.hhb = false;
        clearTimeout(this.mih);
        this.ond.yxe("collect");
        this.ond.ewm("collectend");
        this.egm(this.isj, true);
        this.bfu();
        this.upw(true);
        this.wpn.fed.ybw("start", "#pmb", [this.language.start, true]);
        if (!this.apw) {
            this.wpn.jyi(true)
        } else {
            this.adz = setTimeout(this.zol, 500)
        }
    };
    this.wio = function() {
        this.plh = false;
        this.oes = (this.win + this.gtp > this.totalBet) ? true : false;
        this.sge = 0;
        this.vbu = this.win + this.gtp;
        this.oii = this.isj - this.win - this.gtp;
        this.xpa = 0;
        this.bzh = this.win + this.gtp;
        this.jpt = new Date().getTime();
        this.hhb = true;
        this.mih = setTimeout(this.fau, this.cnu)
    };
    this.fau = function() {
        var c = 0,
            a = xzl.mdj.kyj,
            b = 0;
        if (xzl.mdj.bzh > 0) {
            if (!xzl.mdj.plh) {
                xzl.mdj.ond.ewm("collect");
                xzl.mdj.plh = true
            }
            c = Math.round(xzl.mdj.bzh / xzl.mdj.sxm);
            xzl.mdj.bzh -= c;
            if (xzl.mdj.bzh < 0) {
                xzl.mdj.bzh = 0
            }
            xzl.mdj.uri(xzl.mdj.vbu - (xzl.mdj.win + xzl.mdj.gtp - xzl.mdj.bzh));
            xzl.mdj.egm(xzl.mdj.oii + (xzl.mdj.win + xzl.mdj.gtp - xzl.mdj.bzh), true);
            xzl.mdj.sge++;
            xzl.mdj.sxm -= 1;
            a = xzl.mdj.kyj;
            b = new Date().getTime();
            a = xzl.mdj.cnu + (xzl.mdj.sge * xzl.mdj.cnu - (b - xzl.mdj.jpt));
            xzl.mdj.mih = setTimeout(xzl.mdj.fau, a)
        } else {
            xzl.mdj.ond.yxe("collect");
            xzl.mdj.ond.ewm("collectend");
            xzl.mdj.hhb = false;
            xzl.mdj.woi = true;
            clearTimeout(xzl.mdj.mih);
            xzl.mdj.bfu();
            xzl.mdj.wpn.fed.ybw("start", "#pmb", [xzl.mdj.language.start, true]);
            if (xzl.mdj.qev == xzl.mdj.tyo) {
                xzl.mdj.qev()
            } else {
                if (!(xzl.mdj.apw)) {
                    xzl.mdj.wpn.jyi(true);
                    xzl.mdj.upw(true)
                } else {
                    xzl.mdj.wpn.rlk(true);
                    xzl.mdj.wpn.fed.ybw("info", "#lqj", [xzl.mdj.language.eem + ": " + xzl.mdj.gcv(xzl.mdj.win + xzl.mdj.gtp)]);
                    xzl.mdj.adz = setTimeout(xzl.mdj.zol, 500)
                }
            }
        }
    };
    this.zpa = function(a, b, c) {
        if (a <= b) {
            return 1
        }
        var d = 0,
            e = this.xtv(a, b, c),
            f = 0;
        while (a > f) {
            e = this.xtv(a - f, b, c);
            f += e;
            d++
        }
        return d
    };
    this.xtv = function(d, a, b) {
        var c = a;
        if (d <= a && !b) {
            return d
        } else {
            if (b) {
                if (d <= 10) {
                    c = 1
                } else {
                    c = 10;
                    if (d > a) {
                        c = a
                    } else {
                        c = Math.floor(d / 2)
                    }
                }
            }
        }
        return c
    };
    this.qlm = function(d) {
        var e = this.sob,
            c = this.dmy;
        this.wvy = true;
        this.wpn.fed.ybw("info", "#lqj", ["", true]);
        this.ytx();
        if (d == xzl.pug.tpy.wwq) {
            this.ubr();
            this.wpn.fed.ybw("info", "#shs", [0]);
            this.wpn.jyi(true);
            this.upw(true);
            this.yfo()
        } else {
            if (d == xzl.pug.tpy.saj) {
                for (var b = 0, a = this.bax.length; b < a; b++) {
                    this.zdr[b].zmb(this.bax[b], false)
                }
                this.dqv();
                this.tpe(false);
                this.cfd(true);
                this.wpn.fed.ybw("info", "#shs", [2]);
                this.wpn.tzz(true);
                if (this.nmt == this.you) {
                    this.wpn.fed.ybw("exit", "#osq", [true]);
                    this.wpn.fed.ybw("bet", "#osq", [this.iik]);
                    this.ubr()
                }
                this.upw(true)
            } else {
                if (d == xzl.pug.tpy.oof) {
                    for (var b = 0, a = this.bax.length; b < a; b++) {
                        this.zdr[b].zmb(this.bax[b], false)
                    }
                    this.ibh();
                    this.dnh();
                    if (this.win > 0) {
                        if (this.rer() === false) {
                            this.syd = true
                        } else {
                            this.syd = false;
                            this.ujv = true
                        }
                        this.woi = false;
                        this.ivm()
                    } else {
                        if (this.ebj()) {
                            this.syd = true;
                            this.osw()
                        } else {
                            this.ubr();
                            this.wpn.fed.ybw("info", "#shs", [0]);
                            this.wpn.jyi(true);
                            this.upw(true);
                            this.yfo()
                        }
                    }
                } else {
                    if (d == xzl.pug.tpy.hev) {
                        this.woi = true;
                        for (var b = 0, a = this.bax.length; b < a; b++) {
                            this.zdr[b].zmb(this.bax[b], false)
                        }
                        this.ubr();
                        this.wpn.fed.ybw("info", "#shs", [0]);
                        this.wpn.jyi(true);
                        this.upw(true);
                        this.yfo()
                    } else {
                        if (d == xzl.pug.tpy.jfr) {
                            for (var b = 0, a = this.bax.length; b < a; b++) {
                                this.zdr[b].zmb(this.bax[b], false)
                            }
                            this.shb();
                            if (!this.tru.jte() && this.win + this.gtp > 0) {
                                this.yno();
                                this.tru.hyh(this.isj, this.win + this.gtp, this.vvq, true)
                            }
                            if (this.win + this.gtp == 0) {
                                this.ubr();
                                this.wpn.fed.ybw("info", "#shs", [0]);
                                this.wpn.jyi(true);
                                this.upw(true);
                                this.yfo()
                            }
                        } else {
                            if (d == xzl.pug.tpy.nyo) {
                                for (var b = 0, a = this.bax.length; b < a; b++) {
                                    this.zdr[b].zmb(this.bax[b], false)
                                }
                                if (!this.tru.jte()) {
                                    this.yno()
                                }
                                this.egm(this.isj, false);
                                this.tru.hyh(this.isj, this.win + this.gtp, this.vvq, true);
                                this.tru.jyi(true)
                            } else {
                                if (d == xzl.pug.tpy.zfc) {
                                    this.woi = true;
                                    for (var b = 0, a = this.bax.length; b < a; b++) {
                                        this.zdr[b].zmb(this.bax[b], false)
                                    }
                                    this.ubr();
                                    this.wpn.fed.ybw("info", "#shs", [0]);
                                    this.wpn.jyi(true);
                                    this.upw(true);
                                    this.yfo()
                                } else {
                                    if (d == xzl.pug.tpy.him) {
                                        for (var b = 0, a = this.bax.length; b < a; b++) {
                                            this.zdr[b].zmb(this.bax[b], false)
                                        }
                                        this.ybt();
                                        this.tpe(false);
                                        this.cfd(true);
                                        this.wpn.fed.ybw("info", "#shs", [2]);
                                        this.wpn.tzz(true);
                                        if ((this.nmt == 3 && this.you >= 2) && this.wpn.nqu != null) {
                                            this.wpn.fed.ybw("exit", "#osq", [true])
                                        }
                                    } else {
                                        if (d == xzl.pug.tpy.jsu) {
                                            for (var b = 0, a = this.bax.length; b < a; b++) {
                                                this.zdr[b].zmb(this.bax[b], false)
                                            }
                                            if (!this.tru.jte()) {
                                                this.yno()
                                            }
                                            this.egm(this.isj, false);
                                            this.tru.hyh(this.isj, this.win, this.vvq, true);
                                            this.tru.ytn(false);
                                            this.tru.fjt(c)
                                        } else {
                                            if (d == xzl.pug.tpy.jne || d == xzl.pug.tpy.tyi) {
                                                for (var b = 0, a = this.bax.length; b < a; b++) {
                                                    this.zdr[b].zmb(this.bax[b], false)
                                                }
                                                if (!this.tru.jte()) {
                                                    this.yno()
                                                }
                                                this.egm(this.isj, false);
                                                this.tru.hyh(this.isj, this.win, this.vvq, true);
                                                this.tru.ytn(false);
                                                this.tru.bjz(e)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.xus = function() {
        this.wvy = false;
        this.ujv = false;
        this.syd = false;
        this.uen = 5;
        this.nkq();
        this.wpn.rlk(true);
        this.ila()
    };
    this.bkx = function() {
        this.wvy = false;
        this.ujv = false;
        this.syd = false;
        this.ohj();
        this.wpn.rlk(true)
    };
    this.xlm = function() {
        this.wvy = false;
        this.ujv = false;
        this.syd = true;
        this.woi = false;
        this.vrk();
        this.wpn.rlk(true)
    };
    this.xyh = function(a) {
        this.wvy = false;
        this.ujv = true;
        this.syd = false;
        this.woi = false;
        if (this.tru.jte()) {
            this.tru.hyh(this.isj, this.win + this.gtp, this.vvq, true);
            this.tru.fml();
            this.egm(this.isj, false);
            try {
                if (this.tru instanceof lsy) {
                    this.tru.fjt(a, true)
                } else {
                    setTimeout(this.tru.ymi, 500)
                }
            } catch (b) {
                setTimeout(this.tru.ymi, 500)
            }
        } else {
            this.vrk();
            this.wpn.rlk(true)
        }
    };
    this.uzu = function() {
        this.wvy = false;
        this.syd = false;
        this.gxd = true;
        this.hbx();
        if (this.tru.jte()) {
            this.tru.fml();
            this.egm(this.isj, false);
            setTimeout(this.tru.ymi, 100)
        } else {
            this.iej()
        }
    };
    this.sow = function() {
        this.wvy = false;
        if (!this.tru.jte() && this.win + this.gtp > 0) {
            this.yno()
        }
        this.tru.hyh(this.isj, this.win + this.gtp, this.vvq, true);
        if (this.win + this.gtp == 0) {
            this.tru.fed.ybw("info", "#wem");
            setTimeout(this.osv, 1000)
        } else {
            this.tru.yaj()
        }
    };
    this.kfx = function() {
        this.wvy = false;
        if (!this.tru.jte()) {
            this.yno()
        }
        this.egm(this.isj, false);
        this.tru.hyh(this.isj, this.win + this.gtp, this.vvq, true);
        this.tru.jyi(true)
    };
    this.geg = function(a) {
        this.wvy = false;
        if (!this.tru.jte() && this.win > 0) {
            this.yno()
        }
        this.tru.hyh(this.isj, this.win, this.vvq, true);
        this.tru.ytn(false);
        this.tru.bjz(a)
    };
    this.onk = function(a) {
        this.wvy = false;
        if (!this.tru.jte() && this.win > 0) {
            this.yno()
        }
        this.tru.hyh(this.isj, this.win, this.vvq, true);
        this.tru.ytn(false);
        this.tru.bjz(a)
    };
    this.iug = function(a) {
        this.wvy = false;
        this.tru.hyh(this.isj, this.win, this.vvq, true);
        this.tru.fjt(a, false)
    };
    this.lzf = function(b, d) {
        var c = this.ktg.wqb("stats"),
            a = this.ktg.wqb("history");
        if (b == "authfailed") {
            b = this.language.jvf
        } else {
            if (b.toLowerCase().indexOf("active") == 0) {
                b = this.language.kaa
            }
        }
        if (this.lpi) {
            if (!this.aey) {
                if (c && c.jte()) {
                    c.jyi(false);
                    c.hix(false)
                }
                this.ktg.ybw("settings", "#ezd");
                if (this.tru != null && this.tru.jte()) {
                    this.tru.fed.ybw("info", "#lqj", [b, true]);
                    this.tru.jyi(false);
                    this.qms()
                } else {
                    if (this.wpn != null) {
                        if (this.itf != null && this.itf.jte()) {
                            this.yso()
                        }
                        this.wpn.jyi(false);
                        this.stop();
                        this.wpn.fed.ybw("setting", "#ykr", [false]);
                        this.wpn.fed.ybw("info", "#lqj", [b, true])
                    } else {
                        this.huv(b)
                    }
                }
            } else {
                this.stop();
                this.fje();
                if (a) {
                    a.fvz(true)
                }
                this.wdk(this.bnt(b))
            }
        } else {
            this.huv(b)
        }
        if (d) {
            if (!this.aey && this.mqy.bcu.fbk == 0 && xzl.nfj.value46 > 0) {
                this.ggo((this.azz) ? xzl.nfj.value71 : xzl.nfj.value47)
            } else {
                setTimeout(this.tyo, xzl.nfj.value10)
            }
        }
    };
    this.zxb = function(a) {
        if (a == xzl.wmn.swc) {
            this.wpn.fed.ybw("info", "#lqj", [this.language.sar, true])
        } else {
            if (a == xzl.wmn.kom) {
                this.wpn.fed.ybw("info", "#lqj", [this.language.qby + " " + this.gcv(this.kmh), true])
            } else {
                if (a >= xzl.wmn.xyp) {
                    this.wpn.fed.ybw("info", "#wem");
                    if (a == xzl.wmn.lzr || a == xzl.wmn.crq) {
                        this.stop()
                    }
                    this.wpn.jyi(false);
                    this.upw(false)
                }
            }
        }
        this.bmp();
        if (a < xzl.wmn.xyp) {
            this.gxd = true;
            this.wpn.jyi(true);
            this.upw(true)
        } else {
            this.djj([{
                tpp: a
            }])
        }
    };
    this.yor = function(a) {
        this.isj = a;
        if (!(this.tru.jte() || this.itf.jte())) {
            this.egm(a, true)
        } else {
            if (this.tru.jte()) {
                this.tru.fed.ybw("creditd", "#pmb", [this.jwd(a), true]);
                this.egm(a, false)
            }
        }
        if (this.isj > 0) {
            this.hbx()
        } else {
            this.ubr()
        }
    };
    this.rxp = function() {
        clearTimeout(xzl.mdj.adz);
        if (xzl.mdj.gxd) {
            if (xzl.mdj.win + xzl.mdj.gtp > 0 && !xzl.mdj.woi) {
                if (!xzl.mdj.hhb) {
                    if (xzl.mdj.xfc()) {
                        xzl.mdj.gxd = false;
                        xzl.mdj.nye()
                    }
                } else {
                    xzl.mdj.oid()
                }
            } else {
                if (!xzl.mdj.ysb) {
                    if (xzl.mdj.jyp) {
                        xzl.mdj.bmp();
                        xzl.mdj.zxv();
                        return
                    } else {
                        if (xzl.mdj.bwi) {
                            xzl.mdj.bmp();
                            xzl.mdj.cht();
                            return
                        }
                    }
                    xzl.mdj.gxd = false;
                    if (xzl.mdj.rer() === true) {
                        xzl.mdj.qvs = (!xzl.mdj.fnv) ? 1 : 0
                    } else {
                        if (xzl.nfj.value62 === true) {
                            xzl.mdj.qvs = 0;
                            if (xzl.mdj.apw) {
                                xzl.mdj.qvs |= 2
                            }
                            if (xzl.mdj.fnv) {
                                xzl.mdj.qvs |= 4
                            }
                        } else {
                            xzl.mdj.qvs = (xzl.mdj.apw && !xzl.mdj.fnv) ? 1 : 0
                        }
                    }
                    xzl.mdj.pxn();
                    if ((xzl.mdj.state == xzl.pug.tpy.wwq || xzl.mdj.state == xzl.pug.tpy.oof || xzl.mdj.state == xzl.pug.tpy.hev || xzl.mdj.state == xzl.pug.tpy.jfr || xzl.mdj.state == xzl.pug.tpy.zfc || xzl.mdj.state == xzl.pug.tpy.jsu) || xzl.mdj.zfr()) {
                        if (xzl.mdj.isj >= xzl.mdj.tlp() && xzl.mdj.tlp() >= xzl.mdj.kmh) {
                            xzl.mdj.mqy.jet(xzl.mdj.hih, xzl.mdj.qvs);
                            xzl.mdj.wpn.jyi(false)
                        } else {
                            xzl.mdj.pov();
                            xzl.mdj.bmp();
                            xzl.mdj.wpn.jyi(true);
                            xzl.mdj.upw(true);
                            xzl.mdj.gxd = true
                        }
                    } else {
                        if (xzl.mdj.state == xzl.pug.tpy.saj) {
                            if (xzl.mdj.nmt == 2 && xzl.mdj.you == 2 && xzl.mdj.iik && (xzl.mdj.uen == 5 || xzl.mdj.totalBet != xzl.mdj.bhl)) {
                                xzl.mdj.mqy.jet(xzl.mdj.hih, xzl.mdj.qvs);
                                xzl.mdj.wpn.jyi(false);
                                xzl.mdj.cfd(false);
                                return
                            }
                            xzl.mdj.nen();
                            if (xzl.mdj.nmt == 2 || (xzl.mdj.nmt == 3 && xzl.mdj.uen == 0 && xzl.mdj.vvq > 0)) {
                                xzl.mdj.mqy.nuc(xzl.mdj.hih, xzl.mdj.qvs, xzl.mdj.rqz);
                                xzl.mdj.wpn.jyi(false)
                            } else {
                                if (xzl.mdj.nmt == 3) {
                                    xzl.mdj.mqy.asq(xzl.mdj.hih, xzl.mdj.qvs, xzl.mdj.rqz);
                                    xzl.mdj.wpn.jyi(false)
                                }
                            }
                        } else {
                            if (xzl.mdj.state == xzl.pug.tpy.him) {
                                xzl.mdj.nen();
                                xzl.mdj.mqy.nuc(xzl.mdj.hih, xzl.mdj.qvs, xzl.mdj.rqz);
                                xzl.mdj.wpn.jyi(false)
                            }
                        }
                    }
                    xzl.mdj.cfd(false)
                }
            }
        }
    };
    this.fhl = function() {
        var a = xzl.mdj.ktg.wqb("topi"),
            c = 0,
            b = 0,
            d = 0;
        if (!xzl.nfj.value55) {
            xzl.mdj.ond.yxe("auto_on");
            xzl.mdj.ond.yxe("auto_off")
        }
        if (xzl.mdj.apw) {
            xzl.mdj.apw = false;
            xzl.mdj.kxh();
            xzl.mdj.wpn.fed.ybw("astart", "#ykr", [xzl.mdj.apw]);
            xzl.mdj.wpn.fed.ybw("start", "#pmb", [xzl.mdj.language.start, true]);
            if (!xzl.nfj.value55) {
                xzl.mdj.ond.ewm("auto_off")
            }
        } else {
            if (xzl.mdj.bdi() != null && xzl.mdj.drp <= 0 && xzl.mdj.rer() === false) {
                if (a && a.zrf() === true) {
                    xzl.mdj.upw(false);
                    xzl.mdj.wpn.jyi(false);
                    xzl.mdj.id = setTimeout(xzl.mdj.riz, 300)
                }
            } else {
                xzl.mdj.apw = true;
                if (xzl.mdj.bdi() != null && xzl.mdj.rer() === true) {
                    xzl.mdj.drp = xzl.mdj.ktg.ybw("settings", "#gjk");
                    c = xzl.mdj.ktg.ybw("settings", "#jxa");
                    b = xzl.mdj.ktg.ybw("settings", "#uln");
                    d = xzl.mdj.ktg.ybw("settings", "#xgg");
                    xzl.mdj.cvg = (c > 0) ? c : 0;
                    xzl.mdj.grd = (b > 0) ? b : 0;
                    xzl.mdj.lnw = (d > 0) ? d : 0;
                    xzl.mdj.ila()
                }
                xzl.mdj.wpn.fed.ybw("astart", "#ykr", [xzl.mdj.apw]);
                xzl.mdj.wpn.fed.ybw("start", "#pmb", [xzl.mdj.language.start, true]);
                if (!xzl.nfj.value55) {
                    xzl.mdj.ond.ewm("auto_on")
                }
                xzl.mdj.rxp()
            }
        }
        if (a) {
            a.wbp("auto", xzl.mdj.apw)
        }
    };
    this.tyo = function() {
        if (xzl.fbk == 0 && xzl.mdj.aey === false && xzl.mdj.win + xzl.mdj.gtp > 0 && !xzl.mdj.woi && xzl.mdj.xfc()) {
            if (!xzl.mdj.hhb) {
                xzl.mdj.nye()
            }
            xzl.mdj.qev = xzl.mdj.tyo
        } else {
            fps.prototype.tyo.call(this)
        }
    };
    this.ygn = function() {
        if (xzl.mdj.hih < xzl.mdj.rfe.length - 1) {
            if (xzl.mdj.hih >= xzl.mdj.wer(true)) {
                xzl.mdj.hih = 0;
                while (xzl.mdj.hih < xzl.mdj.ezp()) {
                    xzl.mdj.hih++
                }
            } else {
                xzl.mdj.hih++
            }
        } else {
            xzl.mdj.hih = 0;
            while (xzl.mdj.hih < xzl.mdj.ezp()) {
                xzl.mdj.hih++
            }
        }
        xzl.mdj.xhm(false);
        if (xzl.mdj.hih >= xzl.mdj.wer(true)) {
            return true
        }
        return false
    };
    this.jkn = function() {
        if (xzl.mdj.hih > 0) {
            if (xzl.mdj.hih <= xzl.mdj.ezp()) {
                xzl.mdj.hih = xzl.mdj.rfe.length;
                while (xzl.mdj.hih > xzl.mdj.wer(true)) {
                    xzl.mdj.hih--
                }
            } else {
                xzl.mdj.hih--
            }
        } else {
            xzl.mdj.hih = xzl.mdj.rfe.length;
            while (xzl.mdj.hih > xzl.mdj.wer(true)) {
                xzl.mdj.hih--
            }
        }
        if (xzl.mdj.hih < 0) {
            xzl.mdj.hih = 0
        }
        xzl.mdj.xhm(false);
        if (xzl.mdj.hih <= xzl.mdj.ezp()) {
            return true
        }
        return false
    };
    this.fea = function() {
        var a = xzl.mdj.ktg.wqb("topi"),
            b = xzl.mdj.ktg.wqb("settings");
        if (xzl.mdj.rer() === false && xzl.mdj.syd && xzl.mdj.win + xzl.mdj.gtp > 0) {
            if (!xzl.mdj.ysb) {
                xzl.mdj.wvy = false;
                xzl.mdj.yno()
            }
        } else {
            xzl.mdj.ond.yxe("gamble_on");
            xzl.mdj.ond.yxe("gamble_off");
            xzl.mdj.fnv = !xzl.mdj.fnv;
            if (xzl.mdj.fnv) {
                xzl.mdj.ond.ewm("gamble_on")
            } else {
                xzl.mdj.ond.ewm("gamble_off")
            }
            xzl.mdj.wpn.fed.ybw("gamble", "#ykr", [xzl.mdj.fnv]);
            if (a) {
                a.wbp("gamble", xzl.mdj.fnv)
            }
            if (b) {
                b.fed.ybw("gamble", "#uem", [(xzl.mdj.fnv) ? 1 : 0])
            }
        }
    };
    this.xyf = function() {
        if (!xzl.mdj.itf.jte()) {
            xzl.mdj.yhm();
            if (xzl.mdj.ktg.wqb("tops")) {
                xzl.mdj.zyk()
            }
            if (xzl.mdj.itf.fuv() > 0) {
                xzl.mdj.vjw()
            }
        } else {
            xzl.mdj.yso()
        }
    };
    this.yrr = function() {
        var a = xzl.mdj.ktg.wqb("topi"),
            b = xzl.mdj.ktg.wqb("settings"),
            c = xzl.mdj.ktg.wqb("topb");
        xzl.mdj.rze = !xzl.mdj.rze;
        if (a) {
            a.wbp("turbo", xzl.mdj.rze)
        }
        if (c) {
            c.fed.ybw("turbo", "#uem", [(xzl.mdj.rze) ? 1 : 0])
        }
        if (b) {
            b.fed.ybw("turbo", "#uem", [(xzl.mdj.rze) ? 1 : 0])
        }
    };
    this.xkf = function() {
        var a = false;
        if (xzl.mav.tah == true) {
            if (xzl.mdj.plq == true) {
                xzl.mdj.plq = false;
                a = xzl.mav.vys();
                setTimeout(xzl.mdj.ogj, 1400)
            }
        } else {
            a = xzl.mav.vys();
            setTimeout(xzl.mdj.ogj, 1400)
        }
    };
    this.drr = function() {
        if (xzl.mdj.ond.gsj() && !xzl.mdj.lfi) {
            xzl.mdj.ujw = false;
            xzl.mdj.lfi = true;
            xzl.mdj.ktg.ybw("loading", "#stop");
            setTimeout(xzl.mdj.mhv, 100);
            xzl.mdj.ond.ewm("silence");
            if (xzl.mav.ayv() && xzl.mav.tah) {
                xzl.mdj.xkf()
            }
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                webAudioEngine.resume()
            }
        }
    };
    this.enk = function(a) {
        if (a == xzl.language.EN || a == xzl.language.US) {
            return new szt()
        } else {
            if (a == xzl.language.ES || a == xzl.language.CO || a == xzl.language.MX || a == xzl.language.CL || a == xzl.language.VE) {
                return new ted()
            } else {
                if (a == xzl.language.DE || a == xzl.language.AT) {
                    return new jdp()
                } else {
                    if (a == xzl.language.PT || a == xzl.language.BR) {
                        return new vxk()
                    } else {
                        if (a == xzl.language.RU) {
                            return new qax()
                        } else {
                            if (a == xzl.language.EE) {
                                return new chy()
                            } else {
                                if (a == xzl.language.TR) {
                                    return new vre()
                                } else {
                                    if (a == xzl.language.CZ) {
                                        return new jvg()
                                    } else {
                                        if (a == xzl.language.GR) {
                                            return new nmu()
                                        } else {
                                            if (a == xzl.language.BG) {
                                                return new iqe()
                                            } else {
                                                if (a == xzl.language.GE) {
                                                    return new gnr()
                                                } else {
                                                    if (a == xzl.language.HU) {
                                                        return new ksf()
                                                    } else {
                                                        if (a == xzl.language.RO) {
                                                            return new rqu()
                                                        } else {
                                                            if (a == xzl.language.FR) {
                                                                return new zoj()
                                                            } else {
                                                                if (a == xzl.language.HR) {
                                                                    return new dbj()
                                                                } else {
                                                                    if (a == xzl.language.IT) {
                                                                        return new lyw()
                                                                    } else {
                                                                        if (a == xzl.language.SE) {
                                                                            return new xxr()
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return null
    };
    this.tzp = function() {
        var f = this.ktg.wqb("stats"),
            e = this.ktg.wqb("topb"),
            c = this.ktg.wqb("topi"),
            b = this.ktg.wqb("betsel");
        this.dml();
        this.wpn.dwf(this.eof, 0);
        this.uow[0] = this.language.bxy;
        this.uow[1] = this.language.pfw;
        this.wpn.dwf(this.uow, 1);
        this.gge[0] = this.language.isf;
        this.gge[1] = this.language.san;
        this.wpn.dwf(this.gge, 2);
        if (this.apw) {
            this.wpn.fed.ybw("start", "#pmb", [this.language.start])
        } else {
            if (this.win + this.gtp > 0 && !this.ujv && !this.woi) {
                this.wpn.fed.ybw("start", "#pmb", [this.language.iej])
            } else {
                this.wpn.fed.ybw("start", "#pmb", [this.language.start])
            }
        }
        if (this.bdi() != null) {
            this.wpn.fed.ybw("astart", "#pmb", [this.language.zkr])
        } else {
            this.wpn.fed.ybw("astart", "#pmb", [this.language.apw])
        }
        this.wpn.fed.ybw("gamble", "#pmb", [this.language.fnv]);
        this.wpn.fed.ybw("exit", "#pmb", [(xzl.nfj.value50.g === true) ? this.language.akx : this.language.hal]);
        this.wpn.fed.ybw("bet", "#pmb", [this.language.vpv]);
        this.wpn.fed.ybw("creditd", "#rcy", [(this.zxe()) ? this.language.emo : this.language.isj]);
        this.wpn.fed.ybw("betd", "#rcy", [this.language.vpv]);
        if (e) {
            e.fed.ybw("language", "#kvy", [this.language.language]);
            e.fed.ybw("audio", "#kvy", [this.language.audio]);
            e.fed.ybw("turbo", "#kvy", [this.language.rze]);
            e.fed.ybw("fullscreen", "#kvy", [this.language.dtv]);
            e.fed.ybw("help", "#kvy", [this.language.drj]);
            e.fed.ybw("history", "#kvy", [this.language.rhf]);
            e.fed.ybw("statistic", "#kvy", [this.language.cec]);
            e.fed.ybw("deposit", "#kvy", [this.language.uut])
        }
        if (c) {
            c.kvy("freeplay", this.language.emo)
        }
        if (b) {
            b.rmj = this.language.vpv
        }
        if (f) {
            if (xzl.nfj.value36) {
                f.rmj = this.bnt(this.language.cec)
            } else {
                if (xzl.nfj.value37) {
                    f.rmj = this.bnt(this.language.zrd)
                }
            }
            if (f.eeh != null) {
                f.eeh.pmb(this.language.ret, false)
            }
            if (f.nqu != null) {
                f.nqu.pmb(this.language.wvv, false)
            }
        }
        this.itf.fed.ybw("return", "#pmb", [this.language.ret, false]);
        for (var d = 0, a = this.zdr.length; d < a; d++) {
            if (this.zdr[d].kps()) {
                this.zdr[d].odn(true, false)
            } else {
                if (this.zdr[d].ebs()) {
                    this.zdr[d].zki(true, false)
                }
            }
        }
        this.ktg.ybw("settings", "#tzp", [this.language, false]);
        this.ktg.ybw("autop", "#tzp", [this.language]);
        this.hew()
    };
    this.hew = function() {
        this.uwk[0] = this.language.rbu;
        this.tru.dwf(this.uwk)
    };
    this.tlp = function() {
        return this.totalBet
    };
    this.ssb = function() {
        return this.kmh
    };
    this.fds = function() {
        return this.hgl
    };
    this.wer = function(b) {
        for (var c = 0; c < this.rfe.length; c++) {
            var a = this.rfe[c];
            if (a > this.hgl || (b && (this.isj > 0 && this.isj < a))) {
                return c - 1
            } else {
                if (a == this.hgl || c == this.rfe.length - 1) {
                    return c
                }
            }
        }
        return -1
    };
    this.ezp = function() {
        for (var b = 0; b < this.rfe.length; b++) {
            var a = this.rfe[b];
            if (a >= this.kmh && a < this.hgl) {
                return b
            }
        }
        return -1
    };
    this.pov = function() {
        var c = this.wer(true),
            a = this.ezp(),
            b = this.rfe.length - 1;
        b = (b > c) ? c : b;
        if (b > 0) {
            while (this.rfe[b] > this.isj) {
                b--;
                if (b <= a) {
                    break
                }
            }
        }
        this.hih = (b < a) ? a : b;
        this.xhm(false);
        if (this.tlp() > this.isj) {
            this.wpn.fed.ybw("info", "#lqj", [this.language.sar, true])
        } else {
            if (this.tlp() < this.kmh) {
                this.wpn.fed.ybw("info", "#lqj", [this.language.qby + " " + this.kmh, true])
            }
        }
    };
    this.xhm = function(b) {
        var a = this.wpn.fed.wqb("info");
        this.totalBet = this.rfe[this.hih];
        this.ytx();
        if (a && a.zkj() === false) {
            a.lqj(this.eof[2], true)
        }
        if (this.rer() == true) {
            this.ond.ewm("btn")
        } else {
            if (this.hih == this.wer(true)) {
                this.ond.ewm("maxstep")
            } else {
                this.ond.ewm("step" + (this.hih % 12))
            }
        }
        this.ktg.ybw("betsel", "#xsb", [this.hih, true])
    };
    this.dld = function() {
        this.totalBet = this.rfe[this.hih];
        this.ytx()
    };
    this.eoj = function(a) {
        xzl.mdj.hih = a;
        xzl.mdj.dld()
    };
    this.dhz = function() {
        this.ktg.ybw("paytable", "#null", [this.totalBet])
    };
    this.stop = function() {
        fps.prototype.stop.call(this);
        this.jzj();
        if (this.wpn != null) {
            this.wpn.fed.ybw("gamble", "#ezf");
            this.wpn.fed.ybw("info", "#wem");
            this.wpn.stop()
        }
        clearTimeout(this.yvr);
        clearTimeout(this.mih);
        clearTimeout(this.vpy);
        clearTimeout(this.oll);
        clearTimeout(this.ywr);
        this.lje();
        if (this.tru != null && this.tru.jte()) {
            this.tru.fml();
            try {
                if (this.tru instanceof lsy) {
                    this.tru.fed.ybw("gamble", "#ezf")
                } else {
                    this.tru.fed.ybw("info", "#wem")
                }
            } catch (a) {
                this.tru.fed.ybw("info", "#wem")
            }
        }
        this.bbc();
        if (!this.aey) {
            this.shb()
        }
    };
    this.lje = function() {};
    this.bfu = function() {
        var a = this.ktg.wqb("winp");
        if (a && a.jte()) {
            a.hix(false, true)
        }
    };
    this.uri = function(a) {
        this.ktg.ybw("winp", "#pmb", [this.gcv(a), true])
    };
    this.cfd = function(c) {
        if (!(c && this.apw)) {
            for (var b = 0, a = this.zdr.length; b < a; b++) {
                this.zdr[b].osq(c)
            }
        }
    };
    this.zlb = function(a) {
        this.wpn.fed.sce("buttons", "#hix", [a]);
        this.shb()
    };
    this.pxn = function() {
        this.uen = 5;
        for (var b = 0, a = this.zdr.length; b < a; b++) {
            if (this.zdr[b].ebs()) {
                this.uen--
            }
        }
    };
    this.nen = function() {
        for (var b = 0, a = this.zdr.length; b < a; b++) {
            if (this.zdr[b].ebs()) {
                this.rqz[b] = this.bax[b]
            } else {
                this.rqz[b] = 0
            }
        }
    };
    this.unp = function(b) {
        for (var c = 0, a = this.nic.length; c < a; c++) {
            if (b == this.nic[c]) {
                return true
            }
        }
        return false
    };
    this.xeu = function(b) {
        for (var c = 0, a = this.nic.length; c < a; c++) {
            if (b == this.nic[c]) {
                if (this.uet[c]) {
                    return this.uet[c]
                }
            }
        }
        return -1
    };
    this.zfr = function() {
        return false
    };
    this.zff = function() {
        if (!xzl.mdj.woi && !xzl.mdj.hhb && !(xzl.mdj.ujv || xzl.mdj.apw) && !(xzl.mdj.fnv && xzl.mdj.syd)) {
            if (xzl.mdj.win + xzl.mdj.gtp > 0 && !xzl.mdj.lcf) {
                xzl.mdj.ond.yxe("gambleprop");
                xzl.mdj.ond.ewm("gambleprop")
            }
        }
    };
    this.cmh = function() {
        if (!this.aey) {
            this.ond.yxe("gambleprop");
            this.lcf = true
        }
    };
    this.upw = function(e) {
        fps.prototype.upw.call(this, e);
        var d = this.ktg.wqb("topb"),
            c = (this.ktg.wqb("tops") != null),
            a = (e && !this.apw);
        if (this.wpn) {
            this.wpn.fed.ybw("setting", "#osq", [a])
        }
        if (c) {
            var a = (e && !this.apw);
            if (this.eqn && d) {
                var b = d.fed.wqb("help");
                if (b) {
                    b.osq(a && !c)
                }
            }
        }
    };
    this.wjq = function(e) {
        fps.prototype.wjq.call(this, e);
        var d = this.ktg.wqb("topb"),
            c = (this.ktg.wqb("tops") != null),
            a = (e && !this.apw);
        if (this.wpn) {
            this.wpn.fed.ybw("setting", "#osq", [a])
        }
        if (c) {
            var a = (e && !this.apw);
            if (this.eqn && d) {
                var b = d.fed.wqb("help");
                if (b) {
                    b.osq(a && !c)
                }
            }
        }
    };
    this.lsr = function(e) {
        fps.prototype.lsr.call(this, e);
        var d = this.ktg.wqb("topb"),
            c = (this.ktg.wqb("tops") != null),
            a = (e && !this.apw);
        if (this.wpn) {
            this.wpn.fed.ybw("setting", "#osq", [a])
        }
        if (c) {
            var a = (e && !this.apw);
            if (this.eqn && d) {
                var b = d.fed.wqb("help");
                if (b) {
                    b.osq(a && !c)
                }
            }
        }
    };
    this.ikb = function() {
        fps.prototype.ikb.call(this);
        if (xzl.mdj.bjs === true && xzl.mdj.wmr === true) {
            xzl.mdj.bmp()
        }
    };
    this.glj = function() {
        if (xzl.nfj.value74 != null && this.ktg.ybw("settings", "#gjk") <= 0) {
            return false
        } else {
            if ((this.state == xzl.pug.tpy.wwq || this.state == xzl.pug.tpy.oof || this.state == xzl.pug.tpy.hev || this.state == xzl.pug.tpy.jfr || this.state == xzl.pug.tpy.zfc || this.state == xzl.pug.tpy.jsu) || this.zfr()) {
                if (!(this.isj >= this.tlp() && this.tlp() >= this.kmh)) {
                    return false
                }
            }
        }
        return true
    };
    this.hii = function() {
        var b = this.ktg.wqb("stats"),
            a = this.ktg.wqb("settings");
        if (this.itf && this.itf.jte()) {
            return false
        } else {
            if (this.tru && this.tru.jte()) {
                return false
            } else {
                if (b && b.jte()) {
                    return false
                } else {
                    if (a && a.jte()) {
                        return false
                    }
                }
            }
        }
        return true
    };
    this.yfo = function() {
        if (xzl.nfj.value78 && this.rer() === false) {
            if (xzl.nfj.value78.t === true) {
                this.ktg.ybw("topb", "#hix", [true])
            }
            if (xzl.nfj.value78.b === true) {
                this.ktg.ybw("betsel", "#hix", [true])
            }
            if (xzl.nfj.value78.t === true || xzl.nfj.value78.b === true) {
                this.syo()
            }
            this.shb();
            if (xzl.nfj.value78.d > 0) {
                this.uje = setTimeout(this.wyw, xzl.nfj.value78.d)
            }
        }
    };
    this.wyw = function() {
        xzl.mdj.zfg();
        clearTimeout(xzl.mdj.uje)
    };
    this.yhm = function(b) {
        var a = this.ktg.wqb("betsel");
        if (a && a.jte() && a.zrf()) {
            this.zfg(b)
        } else {
            fps.prototype.yhm.call(this, b)
        }
    };
    this.syo = function() {
        if (this.canvas) {
            this.canvas.onmousemove = function(a) {
                xzl.mdj.weg(a)
            };
            this.canvas.ontouchmove = function(a) {
                xzl.mdj.weg(a)
            }
        }
    };
    this.jzj = function() {
        if (this.canvas) {
            this.canvas.onmousemove = null;
            this.canvas.ontouchmove = null
        }
    };
    this.weg = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        var b = 0,
            g = 0,
            c = false,
            e = this.ktg.wqb("topb"),
            a = this.ktg.wqb("betsel");
        if (d.touches) {
            var f = d.touches[0];
            c = true;
            if (!this.wfd) {
                b = f.pageX - this.offsetLeft;
                g = f.pageY - this.offsetTop
            } else {
                b = Math.round((f.pageX - this.offsetLeft) / this.bke);
                g = Math.round((f.pageY - this.offsetTop) / this.wpw)
            }
        } else {
            if (!this.wfd) {
                b = d.pageX - this.offsetLeft;
                g = d.pageY - this.offsetTop
            } else {
                b = Math.round((d.pageX - this.offsetLeft) / this.bke);
                g = Math.round((d.pageY - this.offsetTop) / this.wpw)
            }
        }
        if (a && a.jte()) {
            if (a.aqy(b, g, c)) {
                return
            }
        }
        if (e && e.jte()) {
            e.aqy(b, g)
        }
    };
    this.jbi = function() {
        if (this.yvr >= 0) {
            return
        }
        this.ktg.ybw("betsel", "#ltc");
        this.ond.yxe("panel_in");
        this.ond.ewm("panel_in");
        this.upw(false);
        this.jpt = new Date().getTime();
        this.sge = 0;
        this.yvr = setTimeout(this.orz, 89)
    };
    this.zfg = function(b) {
        var c = this.ktg.wqb("topb"),
            a = this.ktg.wqb("betsel");
        if (this.yvr >= 0 || !((c && c.jte()) || (a && a.jte()))) {
            return
        }
        if (b == this.jkn || b == this.ygn) {
            b();
            return
        }
        if (c) {
            c.qmy()
        }
        if (a) {
            a.qmy()
        }
        this.ond.yxe("panel_out");
        this.ond.ewm("panel_out");
        this.dzq = b;
        this.jpt = new Date().getTime();
        this.sge = 0;
        this.yvr = setTimeout(this.viu, 89)
    };
    this.orz = function() {
        var a = xzl.mdj.ktg.wqb("betsel"),
            d = (!a || (a && !a.pbd())),
            c = 0,
            b = 0;
        xzl.mdj.shb();
        xzl.mdj.sge++;
        if (d) {
            xzl.mdj.syo();
            clearTimeout(xzl.mdj.yvr);
            xzl.mdj.yvr = -1
        } else {
            c = new Date().getTime();
            b = 89 + (xzl.mdj.sge * 89 - (c - xzl.mdj.jpt));
            xzl.mdj.yvr = setTimeout(xzl.mdj.orz, b)
        }
    };
    this.viu = function() {
        var a = xzl.mdj.ktg.wqb("betsel"),
            e = xzl.mdj.ktg.wqb("topb"),
            f = (!a || (a && !a.pbd())),
            b = (!e || (e && !e.pbd())),
            d = 0,
            c = 0;
        xzl.mdj.shb();
        xzl.mdj.sge++;
        if (f && b) {
            xzl.mdj.jzj();
            clearTimeout(xzl.mdj.yvr);
            if (xzl.mdj.hii()) {
                xzl.mdj.upw(true)
            }
            xzl.mdj.yvr = -1;
            if (typeof xzl.mdj.dzq === "function") {
                xzl.mdj.dzq();
                xzl.mdj.dzq = null
            }
        } else {
            d = new Date().getTime();
            c = 89 + (xzl.mdj.sge * 89 - (d - xzl.mdj.jpt));
            xzl.mdj.yvr = setTimeout(xzl.mdj.viu, c)
        }
    };
    this.dzq = function() {};
    this.ukv = function() {
        return (this.isj == 0 && (this.state == xzl.pug.tpy.wwq || (this.state == xzl.pug.tpy.oof && (this.win + this.gtp) == 0) || this.state == xzl.pug.tpy.hev || (this.state == xzl.pug.tpy.jfr && (this.win + this.gtp) == 0) || this.state == xzl.pug.tpy.zfc || (this.state == xzl.pug.tpy.jsu && (this.win + this.gtp) == 0) || (this.state == xzl.pug.tpy.saj && this.iik == true)))
    };
    this.afz = function() {
        if (xzl.mdj.teu != "" && xzl.mdj.zxe() === false) {
            xzl.mdj.wpn.fed.ybw("info", "#cxd");
            xzl.mdj.wpn.fed.ybw("info", "#shs", [0])
        }
    };
    this.pku = function() {
        if (this.state == xzl.pug.tpy.oof && this.vvq > 0) {
            this.ond.yxe("win" + (this.vvq - 1))
        }
        this.wpn.fed.ybw("info", "#wem");
        this.wpn.jyi(false);
        this.upw(false);
        this.zlb(false);
        this.ktg.ybw("settings", "#ezd");
        this.wpn.fed.ybw("setting", "#ykr", [this.ktg.ybw("settings", "#jte")]);
        this.ktg.ybw("stats", "#hix", [true]);
        this.shb()
    };
    this.jmo = function() {
        this.ktg.ybw("stats", "#jyi", [false]);
        this.ktg.ybw("stats", "#hix", [false]);
        if (this.state != xzl.pug.tpy.saj && this.state != xzl.pug.tpy.him) {
            this.wpn.jyi(true)
        } else {
            this.wpn.tzz(true)
        }
        this.upw(true);
        this.zlb(true);
        this.shb();
        this.wpn.fed.ybw("info", "#shs", [0])
    };
    this.jlu = function() {
        var a = this.wpn.fed.ybw("bet", "#zrf");
        this.bfu();
        if (this.state == xzl.pug.tpy.oof && this.vvq > 0) {
            this.ond.yxe("win" + (this.vvq - 1))
        }
        this.wpn.fed.ybw("info", "#wem");
        this.zlb(false);
        this.wpn.fed.sce("settings", "#hix", [true]);
        this.upw(false);
        this.wpn.jyi(false);
        this.wpn.qnf(true);
        this.ktg.ybw("settings", "#wbw", [a, true])
    };
    this.hda = function() {
        this.ktg.ybw("settings", "#ezd");
        if (this.state != xzl.pug.tpy.saj && this.state != xzl.pug.tpy.him) {
            this.wpn.jyi(true)
        } else {
            this.wpn.tzz(true)
        }
        this.upw(true);
        this.zlb(true);
        this.wpn.fed.ybw("info", "#shs", [0])
    };
    this.riz = function() {
        xzl.mdj.upw(false);
        xzl.mdj.wpn.jyi(false);
        xzl.mdj.wpn.fed.ybw("info", "#cxd");
        xzl.mdj.ktg.ybw("autop", "#wbw")
    };
    this.pae = function() {
        var a = xzl.mdj.ktg.wqb("autop");
        if (a) {
            xzl.mdj.drp = a.gjk();
            xzl.mdj.cvg = (a.jxa() > 0) ? a.jxa() : 0;
            xzl.mdj.grd = (a.uln() > 0) ? a.uln() : 0;
            xzl.mdj.lnw = (a.xgg() > 0) ? a.xgg() : 0;
            if (xzl.mdj.drp <= 0) {
                xzl.mdj.upw(true);
                xzl.mdj.wpn.jyi(true);
                xzl.mdj.wpn.fed.ybw("info", "#ygq")
            } else {
                xzl.mdj.wpn.fed.ybw("astart", "#zmb", [(xzl.mdj.drp >= 0) ? xzl.mdj.drp : "---"])
            }
        }
    };
    this.ila = function() {
        if (this.bdi() != null && this.drp >= 0) {
            this.drp -= 1;
            this.wpn.fed.ybw("astart", "#zmb", [(this.drp >= 0) ? this.drp : "---", true]);
            this.wpn.fed.ybw("start", "#zmb", [(this.drp >= 0) ? this.drp : "---", true])
        }
    };
    this.kxh = function() {
        if (xzl.mdj.bdi() != null) {
            xzl.mdj.drp = 0;
            xzl.mdj.cvg = 0;
            xzl.mdj.grd = 0;
            xzl.mdj.lnw = 0;
            xzl.mdj.wpn.fed.ybw("astart", "#zmb", ["---"]);
            xzl.mdj.wpn.fed.ybw("start", "#zmb", ["---"])
        }
        xzl.mdj.wpn.fed.ybw("start", "#hje");
        xzl.mdj.ktg.ybw("autop", "#jhe");
        xzl.mdj.ktg.ybw("settings", "#kxh")
    };
    this.bmp = function() {
        var a = xzl.mdj.ktg.wqb("topi");
        xzl.mdj.apw = false;
        xzl.mdj.kxh();
        xzl.mdj.wpn.fed.ybw("astart", "#ykr", [xzl.mdj.apw]);
        if (a) {
            a.wbp("auto", xzl.mdj.apw)
        }
    };
    this.zol = function() {
        xzl.mdj.pxn();
        var a = ((xzl.mdj.win + xzl.mdj.gtp > 0 && xzl.mdj.woi || xzl.mdj.win + xzl.mdj.gtp === 0) && (xzl.mdj.state == xzl.pug.tpy.wwq || xzl.mdj.state == xzl.pug.tpy.oof || xzl.mdj.state == xzl.pug.tpy.hev || xzl.mdj.state == xzl.pug.tpy.jfr || xzl.mdj.state == xzl.pug.tpy.zfc || xzl.mdj.state == xzl.pug.tpy.jsu) || (xzl.mdj.state == xzl.pug.tpy.saj && xzl.mdj.nmt == 2 && xzl.mdj.you == 2 && xzl.mdj.iik && (xzl.mdj.uen == 5 || xzl.mdj.totalBet != xzl.mdj.bhl)) || xzl.mdj.zfr());
        if (xzl.mdj.bdi() != null && a === true && (xzl.mdj.drp <= 0 || (xzl.mdj.isj - xzl.mdj.tlp() < xzl.mdj.cvg) || (xzl.mdj.grd > 0 && xzl.mdj.isj >= xzl.mdj.grd) || (xzl.mdj.lnw > 0 && xzl.mdj.win > xzl.mdj.lnw))) {
            if (xzl.mdj.apw === true) {
                xzl.mdj.fhl()
            }
            xzl.mdj.upw(true);
            xzl.mdj.wpn.fed.ybw("info", "#ygq");
            xzl.mdj.wpn.jyi(true)
        } else {
            xzl.mdj.rxp()
        }
    }
}
fps.prototype = new zqe;

function emi() {
    this.ejr = null;
    this.kao = [];
    this.uzy = [];
    this.lkn = 0;
    this.vut = 30;
    this.tnf = 0;
    this.rlc = 0;
    this.jlm = function(a) {
        try {
            this.tnf = a.wwl;
            this.rlc = a.mcl;
            this.vut = a.wid
        } catch (b) {
            console.error(b)
        }
    };
    this.tdb = function(d, a, c) {
        this.uzy = [];
        for (var b = 0; b < a; b++) {
            this.uzy[a - 1 - b] = hha(d[b])
        }
        if (c) {
            this.uzy[a] = -1
        }
    };
    this.shb = function() {
        if (!this.jte()) {
            return
        }
        var b = this.context2D;
        b.save();
        if (this.ejr != null) {
            for (var c = 0, a = this.uzy.length; c < a; c++) {
                if (this.uzy[c] < 0) {
                    b.drawImage(this.ejr, this.ejr.width - this.tnf, 0, this.tnf, this.rlc, this.x + this.vut * c, this.y, this.tnf, this.rlc)
                } else {
                    b.drawImage(this.ejr, this.tnf * this.kao[this.uzy[c]], 0, this.tnf, this.rlc, this.x + this.vut * c, this.y, this.tnf, this.rlc)
                }
            }
        }
        b.restore()
    }
}
emi.prototype = new lhc;

function reo() {
    this.cdc = {
        jpm: 32,
        zxt: -1,
        value: "SPACE",
        nvo: null
    };
    this.jgv = {
        jpm: 8,
        zxt: -1,
        value: "BACKSPACE",
        nvo: null
    };
    this.yke = {
        jpm: 38,
        zxt: -1,
        value: "\u25B2",
        nvo: null
    };
    this.ueh = {
        jpm: 40,
        zxt: -1,
        value: "\u25BC",
        nvo: null
    };
    this.svj = {
        jpm: 39,
        zxt: -1,
        value: "\u25B6",
        nvo: null
    };
    this.kim = {
        jpm: 37,
        zxt: -1,
        value: "\u25C0",
        nvo: null
    }
}
reo.prototype = new nbn;

function bfv(g, c, f, e, i, a, d, b) {
    this.hez = g;
    this.msj = f;
    this.lrs = e;
    this.uer = i;
    this.bnr = c;
    this.xzy = a;
    this.kvj = d;
    this.dqx = b;
    this.wji = 0;
    this.pvq = [];
    this.hhu = false;
    this.ppr = [];
    this.rtj = [];
    this.usx = false;
    this.kpf = [];
    this.mti = function(k) {
        this.wji = this.tll(k);
        this.hhu = (this.rrf(k) == 1) ? true : false;
        for (var j = 0; j < 9; j++) {
            this.pvq[j] = this.rrf(k)
        }
        for (var j = 0; j < 10; j++) {
            this.ppr[j] = this.tll(k)
        }
        for (var j = 0; j < 10; j++) {
            this.rtj[j] = this.tll(k)
        }
        this.usx = (this.rrf(k) == 1) ? true : false;
        for (var j = 0; j < 10; j++) {
            this.kpf[j] = this.tll(k)
        }
        bfv.prototype.mti.call(this, k)
    }
}
bfv.prototype = new mqz;

function iss() {
    this.tqg = function(a, b) {
        this.hez = b;
        this.dnp = a;
        return this
    };
    this.connect = function(c, f, e, g, a, d, b) {
        this.msj = f;
        this.lrs = e;
        this.uer = g;
        this.bnr = c;
        this.kvj = d;
        this.dqx = b;
        this.bcu = new bfv(this.hez, c, f, e, g, a, d, b);
        this.bcu.tqg(this)
    };
    this.fln = function() {
        this.dnp.gtp = this.bcu.gtp;
        iss.prototype.fln.call(this)
    };
    this.czi = function() {
        var b = 0,
            a = 0;
        this.dnp.wji = this.bcu.wji;
        this.dnp.hhu = this.bcu.hhu;
        this.dnp.usx = this.bcu.usx;
        for (b = 0, a = this.bcu.pvq.length; b < a; b++) {
            this.dnp.pvq[b] = this.bcu.pvq[b]
        }
        for (b = 0, a = this.bcu.ppr.length; b < a; b++) {
            this.dnp.ppr[b] = this.bcu.ppr[b]
        }
        for (b = 0, a = this.bcu.rtj.length; b < a; b++) {
            this.dnp.rtj[b] = this.bcu.rtj[b]
        }
        for (var b = 0, a = this.bcu.kpf.length; b < a; b++) {
            this.dnp.kpf[b] = this.bcu.kpf[b]
        }
        if (this.bcu.zjh != xzl.pug.tpy.hev) {
            this.dnp.gtp = this.bcu.gtp
        }
        if (this.bcu.zjh == xzl.pug.tpy.oof && this.dnp.win + this.dnp.gtp > 0) {
            if (this.dnp.tru) {
                this.dnp.tru.plr(this.bcu.gsr, this.bcu.gvv)
            }
        }
        if (this.bcu.zjh == xzl.pug.tpy.saj || this.bcu.zjh == xzl.pug.tpy.oof) {
            this.dnp.hff(this.bcu.ync)
        }
        iss.prototype.czi.call(this)
    }
}
iss.prototype = new zgr;

function hll() {
    this.rmj = null;
    this.cfk = 40;
    this.onp = 0;
    this.jlm = function(a) {
        hll.prototype.jlm.call(this, a);
        try {
            this.vay = a.iii;
            this.onp = a.zbs
        } catch (b) {
            console.error(b)
        }
    };
    this.rcy = function(a, b) {
        this.rmj = a;
        if (b && b === true && this.context2D != null) {
            this.hix(true, true)
        }
    };
    this.shb = function() {
        if (!this.jte() || (this.parent === xzl.mdj && !this.parent.dst())) {
            return
        }
        var b = this.context2D,
            a = (this.uvq != null) ? 0 : this.x,
            c = (this.uvq != null) ? 0 : this.y;
        b.save();
        if (this.rko && this.ejr != null) {
            b.drawImage(this.ejr, a, c)
        }
        if (this.igj != null) {
            xzl.mav.trr(b, this.igj, this.oam, a + this.vut, c + this.tfj, this.width, this.height, this.wrk, this.hfi, this.ant)
        }
        if (this.rmj != null) {
            xzl.mav.trr(b, this.rmj, this.oam, a + this.vut, c + this.onp, this.width, this.height, this.wrk, this.vay, this.ant)
        }
        b.restore();
        if (this.uqi && this.uvq) {
            this.uqi.drawImage(this.uvq, this.x, this.y)
        }
    }
}
hll.prototype = new blx;

function lxa() {
    this.ack = null;
    this.shb = function() {
        if (!this.jte() || !this.parent.dst()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.beginPath();
        a.rect(this.x, this.y, this.width, this.height);
        a.closePath();
        a.clip();
        if (this.ale != null) {
            a.drawImage(this.ale, this.x, this.y)
        }
        if (this.ejr != null) {
            if (!(this.nal || this.bep)) {
                a.drawImage(this.ejr, this.kao[this.pqv] * this.tnf, 0, this.tnf, this.rlc, this.x, this.y, this.tnf, this.rlc)
            } else {
                a.drawImage(this.ejr, this.kao[this.pqv] * this.tnf, 0, this.tnf, this.rlc, this.x, this.y + this.cnc, this.tnf, this.rlc)
            }
        }
        if (this.nal || this.bep || this.phq) {
            b = this.vwz
        }
        if (this.ack != null) {
            a.drawImage(this.ack, this.x, this.y + this.rlc + this.cnc)
        }
        if (b != null) {
            xzl.mav.trr(a, b, this.zla, this.x, this.y + this.rlc + this.cnc, this.width, this.cbn, this.wrk, this.hfi, this.ant)
        }
        a.restore()
    }
}
lxa.prototype = new hln;

function rhv() {
    this.tdb = function(d, a, c) {
        this.uzy = [];
        for (var b = 0; b < a; b++) {
            this.uzy[a - 1 - b] = d[b]
        }
        if (c) {
            this.uzy[a] = -1
        }
    };
    this.shb = function() {
        if (!this.jte()) {
            return
        }
        var b = this.context2D;
        b.save();
        if (this.ejr != null) {
            for (var c = 0, a = this.uzy.length; c < a; c++) {
                if (this.uzy[c] < 0) {
                    b.drawImage(this.ejr, 0, 0, this.tnf, this.rlc, this.x + this.vut * c, this.y, this.tnf, this.rlc)
                } else {
                    b.drawImage(this.ejr, this.tnf * this.kao[this.uzy[c]], 0, this.tnf, this.rlc, this.x + this.vut * c, this.y, this.tnf, this.rlc)
                }
            }
        }
        b.restore()
    }
}
rhv.prototype = new emi;

function jkz() {
    var b = this;
    var a = 2;
    var c = 3;
    this.ejr = null;
    this.tve = null;
    this.kms = null;
    this.xxo = null;
    this.pst = null;
    this.srk = null;
    this.fed = null;
    this.plh = false;
    this.oes = false;
    this.sxm = 10;
    this.sge = 0;
    this.vbu = 0;
    this.oii = 0;
    this.xpa = 0;
    this.bzh = 0;
    this.jpt = 0;
    this.ojr = false;
    this.zdr = [];
    this.kao = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.bax = [];
    this.zby = 0;
    this.gjn = 0;
    this.kbq = 0;
    this.dhw = 1;
    this.ryb = 0;
    this.rod = 0;
    this.sdn = false;
    this.hil = 800;
    this.uli = null;
    this.buh = null;
    this.jxc = null;
    this.wrk = "arial";
    this.ant = "bold";
    this.zla = "rgb(8,157,153)";
    this.gho = new gvm();
    this.ptl = new gvm();
    this.gkm = new gvm();
    this.koy = new gvm();
    this.qbs = new gvm();
    this.vlg = new gvm();
    this.hfi = 24;
    this.lbh = 20;
    this.psq = 0;
    this.tqg = function(d, f, e) {
        jkz.prototype.tqg.call(this, d, f, e);
        this.zif()
    };
    this.lsi = function(g, f, d) {
        try {
            this.asl(g);
            this.nko(g);
            this.jhd(g);
            this.lxn(g, f);
            this.cys(g);
            this.xxo = d;
            if (this.xxo) {
                this.psq = this.xxo.height / this.kao.length
            }
        } catch (i) {
            console.error(i)
        }
    };
    this.png = function(d) {
        try {
            var o = this.fed.ebo("buttons"),
                l = this.fed.ebo("displays"),
                j = this.fed.wqb("card"),
                g = this.fed.wqb("info"),
                f = this.fed.wqb("winp");
            this.uli = d.backgroundColor;
            this.buh = d.tpg;
            this.jxc = d.ufh;
            this.wrk = d.font;
            this.ant = d.yzb;
            this.zla = d.ded;
            for (var k = 0, m = o.length; k < m; k++) {
                o[k].png(d.lfc)
            }
            for (var k = 0, m = l.length; k < m; k++) {
                l[k].png(d.display)
            }
            if (j) {
                j.png(d.gjp)
            }
            if (g) {
                g.png(d.key)
            }
            if (f) {
                f.png(d.slk)
            }
        } catch (n) {
            console.error(n)
        }
    };
    this.jlm = function(l) {
        try {
            var p = this.fed.ebo("bbuttons"),
                o = this.fed.ebo("sbuttons"),
                k = this.fed.ebo("displays"),
                g = this.fed.wqb("card"),
                f = this.fed.wqb("info"),
                d = this.fed.wqb("winp");
            this.gho = l.mss;
            this.ptl = l.pmi;
            this.gkm = l.vrv;
            this.koy = l.fpy;
            this.qbs = l.bls;
            this.vlg = l.eln;
            this.hfi = l.fontSize;
            this.lbh = l.oqg;
            for (var j = 0, m = p.length; j < m; j++) {
                p[j].jlm(l.okn)
            }
            for (var j = 0, m = o.length; j < m; j++) {
                o[j].jlm(l.kpi)
            }
            for (var j = 0, m = k.length; j < m; j++) {
                k[j].jlm(l.display)
            }
            if (g) {
                g.tzs(l.gjp.mki);
                g.jlm(l.gjp)
            }
            if (f) {
                f.tzs(l.key.mki);
                f.jlm(l.key)
            }
            if (d) {
                d.tzs(l.slk.mki);
                d.jlm(l.slk)
            }
            this.fed.ybw("collect", "#tzs", [l.qie]);
            this.fed.ybw("half", "#tzs", [l.mid]);
            this.fed.ybw("low", "#tzs", [l.mji]);
            this.fed.ybw("high", "#tzs", [l.ejm]);
            this.fed.ybw("creditd", "#tzs", [l.tmj]);
            this.fed.ybw("wind", "#tzs", [l.gsb])
        } catch (n) {
            console.error(n)
        }
    };
    this.xuh = function(o, n) {
        var l = o - this.x,
            k = n - this.y,
            m = this.fed.ebo("buttons");
        for (var f = 0, g = m.length; f < g; f++) {
            var d = m[f];
            if (l >= d.x && l <= d.x + d.width && k >= d.y && k <= d.y + d.height && d.jte() === true) {
                if (d.zrf() && !d.tmp()) {
                    d.svq(true, false, true);
                    this.shb();
                    this.parent.ond.yxe("btn");
                    this.parent.ond.ewm("btn");
                    d.oyg();
                    for (var e = 0; e < g; e++) {
                        m[e].cgt(true)
                    }
                    return true
                }
            }
        }
        return false
    };
    this.xak = function() {
        var g = this.fed.ebo("buttons");
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.maw() == true) {
                e.svq(false, true);
                return true
            }
        }
        return false
    };
    this.dqi = function(l) {
        var k = this.fed.ebo("buttons");
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (f.wwt == l) {
                if (f.zrf() && !f.tmp()) {
                    f.svq(true, false, true);
                    this.shb();
                    this.parent.ond.yxe("btn");
                    this.parent.ond.ewm("btn");
                    f.oyg();
                    for (var e = 0; e < d; e++) {
                        k[e].cgt(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.ywi = function() {
        var g = this.fed.ebo("buttons");
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.maw() == true) {
                e.svq(false, true);
                return true
            }
        }
        return false
    };
    this.hyh = function(k, g, f, j) {
        this.fed.ybw("creditd", "#pmb", [this.parent.jwd(k), false]);
        this.fed.ybw("wind", "#pmb", [this.parent.jwd(g), false]);
        this.fed.ybw("winp", "#pmb", [this.parent.gcv(g), false]);
        this.fed.ybw("winp", "#rcy", [this.parent.language.win, false]);
        this.gjn = 0;
        this.zby = 0;
        for (var e = 0, d = this.parent.pvq.length; e < d; e++) {
            if (e == 8) {
                this.gjn += this.parent.pvq[e];
                this.zby += this.parent.pvq[e]
            } else {
                if (e > 5) {
                    this.gjn += this.parent.pvq[e]
                } else {
                    this.zby += this.parent.pvq[e]
                }
            }
        }
        if (j && j === true) {
            this.shb()
        }
    };
    this.plr = function(e, d) {
        this.zdr = e;
        this.fed.ybw("card", "#tdb", [e, d, false]);
        this.kbq = d
    };
    this.tms = function(d) {
        if (d == a) {
            this.sdn = true
        } else {
            this.sdn = false
        }
    };
    this.yaj = function() {
        if (this.parent.win + this.parent.gtp > 0) {
            this.parent.ond.ewm("gamblewin");
            setTimeout(b.ypm, 2000)
        }
    };
    this.ypm = function() {
        b.shb();
        b.exu();
        b.jyi(true)
    };
    this.wbw = function() {
        this.fed.ybw("info", "#hix", [true]);
        this.hix(true, true);
        this.exu();
        this.fed.ybw("info", "#shs", [0])
    };
    this.exu = function() {
        this.fed.ybw("card", "#tdb", [this.zdr, this.kbq, true]);
        this.shb();
        this.sdn = true;
        this.parent.ond.ewm("gamble");
        this.ryb = setInterval(this.tkp, this.hil)
    };
    this.tkp = function() {
        b.sdn = !b.sdn;
        b.fed.ybw("high", "#ykr", [b.sdn]);
        b.fed.ybw("low", "#ykr", [!b.sdn]);
        b.shb()
    };
    this.fml = function() {
        clearInterval(this.ryb);
        this.parent.ond.yxe("gamble");
        this.fed.ybw("high", "#ykr", [false]);
        this.fed.ybw("low", "#ykr", [false])
    };
    this.dwf = function(e, d) {
        this.fed.ybw("info", "#xgq", [d]);
        this.fed.ybw("info", "#kuv", [e, d])
    };
    this.zif = function() {
        this.fed = new ccr();
        this.fed.tqg();
        this.fed.qzf("buttons");
        this.fed.qzf("displays");
        this.fed.qzf("bbuttons");
        this.fed.qzf("sbuttons")
    };
    this.asl = function(d) {
        this.fed.ovw("collect", this.wfn(d.qie, this.parent.language.iej, this.parent.ond.jcf("btn"), (!this.parent.aey) ? this.parent.lwy.cdc : null, this.avv, d.okn), ["buttons", "bbuttons"]);
        this.fed.ovw("half", this.wfn(d.mid, this.parent.language.vqr, this.parent.ond.jcf("btn_s"), (!this.parent.aey) ? this.parent.lwy.jgv : null, this.tui, d.kpi), ["buttons", "sbuttons"]);
        this.fed.ovw("low", this.wfn(d.mji, this.parent.language.gqj, this.parent.ond.jcf("btn_s"), (!this.parent.aey) ? this.parent.lwy.ueh : null, this.cmf, d.kpi), ["buttons", "sbuttons"]);
        this.fed.ovw("high", this.wfn(d.ejm, this.parent.language.wur, this.parent.ond.jcf("btn_s"), (!this.parent.aey) ? this.parent.lwy.yke : null, this.krz, d.kpi), ["buttons", "sbuttons"])
    };
    this.nko = function(d) {
        this.fed.ovw("creditd", this.atr(d.tmj, (this.parent.zxe()) ? this.parent.language.emo : this.parent.language.isj, this.parent.jwd(this.parent.isj), d.display), ["displays"]);
        this.fed.ovw("wind", this.atr(d.gsb, this.parent.language.win, this.parent.jwd(this.parent.win + this.parent.gtp), d.display), ["displays"])
    };
    this.jhd = function(d) {
        var e = new tcl();
        e.tqg(d.key.mki, this.context2D);
        e.parent = this;
        e.jlm(d.key);
        this.fed.ovw("info", e)
    };
    this.lxn = function(f, d) {
        var e = new rhv();
        e.tqg(f.gjp.mki, this.context2D);
        e.ejr = d;
        e.kao = this.kao;
        e.jlm(f.gjp);
        this.fed.ovw("card", e)
    };
    this.cys = function(d) {
        var e = new hll();
        e.tqg(d.slk.mki, null, this.context2D, this.parent.ond.jcf("winpanel"), "");
        e.parent = this;
        e.jlm(d.slk);
        this.fed.ovw("winp", e)
    };
    this.wfn = function(g, k, j, e, i, f) {
        var d = new muh();
        d.tqg(g, this.context2D, null, j, null, k);
        d.parent = this;
        d.oyg = i;
        d.jlm(f);
        if (e) {
            d.wwt = e.jpm
        }
        return d
    };
    this.atr = function(e, i, g, d) {
        var f = new ntr();
        f.tqg(e, this.context2D, null, i, g);
        f.parent = this;
        f.ejr = this.parent.ond.jcf("display_effect");
        f.jlm(d);
        return f
    };
    this.jyi = function(d) {
        this.fed.sce("buttons", "#osq", [d])
    };
    this.avv = function() {
        b.jyi(false);
        b.parent.mqy.iej()
    };
    this.tui = function() {
        b.jyi(false);
        b.parent.mqy.vqr()
    };
    this.cmf = function() {
        b.jyi(false);
        b.sdn = false;
        b.fml();
        b.parent.mqy.fnv(c)
    };
    this.krz = function() {
        b.jyi(false);
        b.sdn = true;
        b.fml();
        b.parent.mqy.fnv(a)
    };
    this.ymi = function() {
        b.fed.ybw("info", "#wem");
        setTimeout(b.wio, 10)
    };
    this.wio = function() {
        b.plh = false;
        b.oes = (b.parent.win + b.parent.gtp > b.parent.totalBet) ? true : false;
        b.sxm = 10;
        b.sge = 0;
        b.vbu = b.parent.win + b.parent.gtp;
        b.oii = b.parent.isj - (b.parent.win + b.parent.gtp);
        b.xpa = 0;
        b.bzh = b.parent.win + b.parent.gtp;
        b.jpt = new Date().getTime();
        b.ojr = true;
        b.rod = setTimeout(b.fau, b.parent.cnu)
    };
    this.fau = function() {
        var d = Math.round(b.bzh / b.sxm),
            e = 0,
            f = 0;
        if (b.bzh > 0) {
            if (!b.plh) {
                b.parent.ond.yxe("collect");
                b.parent.ond.ewm("collect");
                b.plh = true
            }
            b.bzh -= d;
            if (b.bzh < 0) {
                b.bzh = 0
            }
            b.fed.ybw("wind", "#pmb", [b.parent.jwd(b.vbu - ((b.parent.win + b.parent.gtp) - b.bzh)), true]);
            b.fed.ybw("creditd", "#pmb", [b.parent.jwd(b.oii + ((b.parent.win + b.parent.gtp) - b.bzh)), true]);
            b.uri(b.parent.gcv(b.vbu - ((b.parent.win + b.parent.gtp) - b.bzh)));
            b.sge++;
            b.sxm -= 1;
            f = new Date().getTime();
            e = b.parent.cnu + (b.sge * b.parent.cnu - (f - b.jpt));
            b.rod = setTimeout(b.fau, e)
        } else {
            b.parent.ond.yxe("collect");
            b.parent.ond.ewm("collectend");
            b.ojr = false;
            clearTimeout(b.rod);
            setTimeout(b.parent.osv, 100)
        }
    };
    this.uri = function(d) {
        this.fed.ybw("winp", "#pmb", [d, true])
    };
    this.shb = function(m, l, n, j) {
        if (!this.jte() || !this.parent.dst()) {
            return
        }
        var e = (m != null && l != null && n != null && j != null),
            o = this.context2D,
            d = this.fed.nxo(),
            g = this.parent.ond.jcf("btn_back");
        o.save();
        if (e) {
            o.beginPath();
            o.rect(m, l, n, j);
            o.closePath();
            o.clip()
        }
        if (g) {
            o.drawImage(this.ejr, (this.gho.x == 0) ? this.gho.width : 0, this.height - g.height);
            lfs = o.createLinearGradient(this.gho.x, this.gho.y, this.gho.x + this.gho.width, this.gho.y);
            lfs.addColorStop(0.2, this.buh);
            lfs.addColorStop(1, this.jxc);
            o.fillStyle = lfs;
            o.save();
            if (this.parent.gxl === xzl.asz.lri) {
                o.translate(this.gho.width / 2, this.gho.height / 2);
                o.rotate(Math.PI);
                o.translate(-this.gho.width / 2, -this.gho.height / 2)
            }
            o.fillRect(this.gho.x, this.gho.y, this.gho.width, this.gho.height);
            o.drawImage(g, this.gho.x, this.gho.y, this.gho.width, this.gho.height);
            o.restore()
        } else {
            o.drawImage(this.ejr, 0, 0);
            if (this.uli != null) {
                xzl.mav.snb(o, this.gho.x, this.gho.y, this.gho.width, this.gho.height, this.uli, 1)
            }
        }
        for (var f = 0, k = d.length; f < k; f++) {
            d[f].shb()
        }
        this.hbw(o);
        o.restore();
        if (this.uqi && this.uvq) {
            if (e) {
                this.uqi.drawImage(this.uvq, m, l, n, j, this.x + m, this.y + l, n, j)
            } else {
                this.uqi.drawImage(this.uvq, this.x, this.y)
            }
        }
    };
    this.hbw = function(e) {
        if (this.srk) {
            e.drawImage(this.srk, this.gkm.x, this.gkm.y)
        }
        if (this.pst) {
            e.drawImage(this.pst, this.ptl.x, this.ptl.y)
        }
        for (var f = 0, d = this.parent.rqz.length; f < d; f++) {
            if (this.xxo) {
                if (this.parent.unp(this.parent.rqz[f])) {
                    e.drawImage(this.xxo, 0, this.psq * this.parent.xeu(this.parent.rqz[f]), this.xxo.width, this.psq, this.koy.x + f * (this.xxo.width + this.lbh), this.koy.y, this.xxo.width, this.psq)
                } else {
                    e.drawImage(this.xxo, 0, this.psq * this.parent.rqz[f], this.xxo.width, this.psq, this.koy.x + f * (this.xxo.width + this.lbh), this.koy.y, this.xxo.width, this.psq)
                }
            }
        }
        if (this.sdn) {
            e.drawImage(this.tve, this.ptl.x + (this.ptl.width - this.tve.width) / 2, this.ptl.y + (this.ptl.height - this.tve.height) / 2);
            xzl.mav.trr(e, this.parent.language.wur + " " + this.zby, this.zla, this.qbs.x, this.qbs.y, this.qbs.width, this.qbs.height, this.wrk, this.hfi, this.ant)
        } else {
            e.drawImage(this.kms, this.ptl.x + (this.ptl.width - this.kms.width) / 2, this.ptl.y + (this.ptl.height - this.kms.height) / 2);
            xzl.mav.trr(e, this.parent.language.gqj + " " + this.gjn, this.zla, this.vlg.x, this.vlg.y, this.vlg.width, this.vlg.height, this.wrk, this.hfi, this.ant)
        }
    }
}
jkz.prototype = new lhc;

function kly() {
    this.tlf = [];
    this.ran = "verdana";
    this.xwc = "bold";
    this.ufw = "verdana";
    this.boi = "bold italic";
    this.qbc = "white";
    this.ciq = 30;
    this.lqy = 12;
    this.ohr = new gvm();
    this.awd = [];
    this.whf = [];
    this.png = function(a) {
        kly.prototype.png.call(this, a);
        try {
            this.ran = a.cfl;
            this.xwc = a.nsw;
            this.ufw = a.xat;
            this.boi = a.xrz;
            this.qbc = a.lev
        } catch (b) {
            console.error(b)
        }
    };
    this.jlm = function(a) {
        kly.prototype.jlm.call(this, a);
        try {
            this.ciq = a.knx;
            this.lqy = a.znk;
            this.ohr = a.yha;
            this.awd = a.gsb;
            this.whf = a.kfz
        } catch (b) {
            console.error(b)
        }
    };
    this.tta = function(c, d) {
        for (var b = 0, a = c.length; b < a; b++) {
            this.tlf[b] = c[b]
        }
        if (d && d === true && this.context2D) {
            this.shb()
        }
    };
    this.shb = function() {
        if (!this.jte()) {
            return
        }
        var b = this.context2D;
        b.save();
        b.fillStyle = this.zla;
        if (this.uym) {
            b.strokeStyle = this.uym
        }
        b.lineJoin = "round";
        b.lineCap = "round";
        b.lineWidth = this.cty;
        b.font = this.ant + " " + this.hfi + "px " + this.wrk;
        b.textBaseline = "alphabetic";
        b.textAlign = "center";
        b.drawImage(this.ejr, 0, 0);
        for (var d in this.yil) {
            this.lpa(this.yil[d], this.tev[d], this.hfi, this.wrk)
        }
        if (xzl.mdj != null) {
            for (var c in xzl.mdj.wgp) {
                this.qdb(c, this.awd[c])
            }
        }
        for (var c = 1, a = this.tlf.length; c < a; c++) {
            xzl.mav.trr(b, this.tlf[c], this.zla, this.whf[c - 1].x, this.whf[c - 1].y, this.whf[c - 1].width, this.whf[c - 1].height, this.ran, this.ciq, this.xwc)
        }
        xzl.mav.trr(b, xzl.mdj.bnt(xzl.mdj.language.bms), this.qbc, this.ohr.x, this.ohr.y, this.ohr.width, this.ohr.height, this.ufw, this.lqy, this.boi);
        b.restore();
        if (this.uqi && this.uvq) {
            this.uqi.drawImage(this.uvq, this.x, this.y)
        }
    };
    this.qdb = function(e, d) {
        var a = this.context2D,
            c = this.ciq,
            f = 0,
            j = 0,
            g = 0;
        a.save();
        a.fillStyle = this.zla;
        if (this.uym) {
            a.strokeStyle = this.uym
        }
        a.lineJoin = "round";
        a.lineCap = "round";
        a.font = this.xwc + " " + c + "px " + this.ran;
        a.textBaseline = "bottom";
        a.textAlign = "center";
        a.lineWidth = this.cty;
        for (var b in xzl.mdj.wgp[e]) {
            if (xzl.mdj.wgp[e][b] > 0) {
                f++
            }
        }
        g = d.height / f;
        for (var b = xzl.mdj.wgp[e].length - 1; b >= 0; b--) {
            if (xzl.mdj.wgp[e][b] > 0) {
                a.fillText(xzl.mdj.gcv(xzl.mdj.wgp[e][b] * xzl.mdj.totalBet), d.x + d.width / 2, d.y + g * j + c);
                if (this.uym) {
                    a.strokeText(xzl.mdj.gcv(xzl.mdj.wgp[e][b] * xzl.mdj.totalBet), d.x + d.width / 2, d.y + g * j + c)
                }
                j++
            }
        }
        a.restore()
    }
}
kly.prototype = new onv;

function xpg() {
    var o = this;
    var p = 20;
    var x = 1000;
    var u = 0;
    var l = 1;
    var f = 2;
    var r = 3;
    var d = 4;
    var k = 5;
    this.evm = null;
    this.oaz = null;
    this.bus = null;
    this.fyf = null;
    this.wvj = null;
    this.mpb = null;
    this.kpf = 0;
    this.chu = [];
    this.fqg = 0;
    this.ivb = [];
    this.jmf = [];
    this.aqx = 0;
    this.ntw = 0;
    this.wrk = "verdana";
    this.ant = "";
    this.zla = "yellow";
    this.uli = "black";
    this.jxh = "rgb(255,255,255)";
    this.amp = "rgb(150,150,150)";
    this.hfi = 30;
    this.fbq = new gvm(20, 56, 75, 60);
    this.bkc = new gvm(91, 21, 75, 60);
    this.arb = new gvm(172, 21, 75, 60);
    this.xpf = new gvm(244, 56, 75, 60);
    this.gdm = new gvm(55, 130, 230, 35);
    this.ulx = new gvm(332, 35, 163, 83);
    this.aks = new gvm(345, 130, 125, 35);
    this.mru = 4;
    this.qpc = 2;
    var a = null;
    var t = 0;
    var c = 0;
    var n = 0;
    var b = false;
    var v = false;
    var i = -1;
    var z = 0;
    var e = 0;
    var g = 0;
    var j = 0;
    var w = 300;
    var m = 500;
    var y = 100;
    var s = 250;
    var q = 500;
    this.png = function(A) {
        try {
            this.wrk = A.font;
            this.ant = A.yzb;
            this.zla = A.ded;
            this.jxh = A.borderColor;
            this.amp = A.leq
        } catch (B) {
            console.error(B)
        }
    };
    this.jlm = function(A) {
        try {
            this.hfi = A.fontSize;
            this.fbq = A.qtv;
            this.bkc = A.wbk;
            this.arb = A.syj;
            this.xpf = A.hob;
            this.gdm = A.njh;
            this.ulx = A.zqb;
            this.aks = A.jdj;
            this.mru = A.vek;
            this.qpc = A.vqq;
            a = this.context2D.createLinearGradient(this.gdm.x, this.gdm.y, this.gdm.x, this.gdm.y + this.gdm.height);
            a.addColorStop(0, this.jxh);
            a.addColorStop(1, this.amp)
        } catch (B) {
            console.error(B)
        }
    };
    this.aba = function(C, D) {
        for (var B = 0, A = C.length; B < A; B++) {
            this.chu[B] = C[B]
        }
        if (D && D === true) {
            this.shb()
        }
    };
    this.fgt = function(E, B, F) {
        for (var D = 0, A = E.length; D < A; D++) {
            this.ivb[D] = E[D]
        }
        for (var C = 0, A = B.length; C < A; C++) {
            this.jmf[C] = B[C]
        }
        this.aqx = this.jmf[this.ntw];
        if (F && F === true) {
            this.shb()
        }
    };
    this.por = function(A, B, C) {
        this.kpf = A;
        this.ntw = B;
        this.aqx = this.jmf[this.ntw];
        if (C && C === true) {
            this.shb()
        }
    };
    this.xlu = function(B, A) {
        var C = 0;
        g = this.aqx;
        this.fgt(B, A, false);
        j = this.jmf[this.ntw];
        C = j - g;
        if (C == 1) {
            z = 1
        } else {
            z = this.zpa(C)
        }
        this.aqx = g;
        b = true;
        i = u;
        e = 0;
        o.parent.ond.yxe("count1");
        o.parent.ond.yxe("count2");
        n = new Date().getTime();
        t = setTimeout(this.juf, w)
    };
    this.dub = function() {
        b = true;
        i = l;
        e = 0;
        z = 12;
        o.parent.ond.yxe("count1");
        o.parent.ond.yxe("count2");
        o.parent.ond.ewm("cherry");
        o.parent.wpn.fed.ybw("info", "#lqj", [o.parent.bnt(o.parent.language.twt), true]);
        n = new Date().getTime();
        clearTimeout(t);
        t = setTimeout(o.hhq, m)
    };
    this.rlj = function() {
        b = true;
        i = f;
        e = 0;
        z = 16;
        o.parent.ond.yxe("cherry");
        o.parent.ond.ewm("transfer");
        g = o.aqx;
        n = new Date().getTime();
        clearTimeout(t);
        t = setTimeout(o.fau, y)
    };
    this.hui = function(A) {
        b = true;
        i = r;
        e = 0;
        z = 4;
        g = this.chu[this.ntw];
        this.fqg = g;
        this.aba(A, false);
        j = this.chu[this.ntw];
        n = new Date().getTime();
        clearInterval(c);
        c = setInterval(o.ssi, s)
    };
    this.whd = function(A) {
        b = true;
        i = d;
        e = 0;
        z = 16;
        o.fqg = o.chu[o.ntw];
        o.parent.ond.ewm("fruit");
        n = new Date().getTime();
        clearTimeout(c);
        c = setInterval(o.ssi, q)
    };
    this.yxp = function() {
        b = true;
        i = k;
        e = 0;
        z = 16;
        g = o.kpf;
        o.parent.ond.yxe("fruit");
        o.parent.ond.ewm("transfer");
        n = new Date().getTime();
        clearTimeout(t);
        t = setTimeout(o.fau, y)
    };
    this.juf = function() {
        var C = 0,
            A = 0,
            B = 0;
        e++;
        if (e <= z) {
            if ((e & 1) == 0) {
                o.parent.ond.ewm("count1");
                o.parent.ond.yxe("count2")
            } else {
                o.parent.ond.ewm("count2");
                o.parent.ond.yxe("count1")
            }
            C = o.xtv(j - o.aqx);
            o.aqx += C;
            o.shb();
            B = new Date().getTime();
            A = w + (e * w - (B - n));
            t = setTimeout(o.juf, A)
        } else {
            clearTimeout(t);
            i = -1;
            b = false;
            if (o.parent.usx) {
                t = setTimeout(o.dub, 300)
            } else {
                o.parent.usz(false)
            }
        }
    };
    this.hhq = function() {
        var A = 0,
            B = 0;
        e++;
        v = ((e & 1) != 0);
        o.shb();
        if (e <= z) {
            B = new Date().getTime();
            A = m + (e * m - (B - n));
            t = setTimeout(o.hhq, A)
        } else {
            clearTimeout(t);
            i = -1;
            b = false;
            t = setTimeout(o.rlj, 500)
        }
    };
    this.fau = function() {
        var A = 0,
            B = 0,
            C = 0;
        if (z > 0) {
            if (i == f) {
                A = Math.round(o.aqx / z);
                o.aqx -= A;
                if (o.aqx < 0) {
                    o.aqx = 0
                }
                o.shb();
                o.parent.prl(g - o.aqx)
            } else {
                if (i == k) {
                    A = Math.round(o.kpf / z);
                    o.kpf -= A;
                    if (o.kpf < 0) {
                        o.kpf = 0
                    }
                    o.shb();
                    o.parent.prl(o.parent.win + (g - o.kpf))
                }
            }
            e++;
            z -= 1;
            C = new Date().getTime();
            B = y + (e * y - (C - n));
            t = setTimeout(o.fau, B)
        } else {
            clearTimeout(t);
            b = false;
            o.parent.ond.yxe("transfer");
            if (i == f) {
                i = -1;
                o.aqx = 0;
                o.shb();
                o.parent.usz(true)
            } else {
                if (i == k) {
                    i = -1;
                    o.shb();
                    o.parent.ees()
                }
            }
        }
    };
    this.ssi = function() {
        e++;
        if (i == r) {
            o.fqg = ((e & 1) != 0) ? j : g
        } else {
            if (i == d) {
                o.fqg = ((e & 1) != 0) ? o.chu[o.ntw] : 0
            }
        }
        if (e <= z) {
            o.shb()
        } else {
            clearInterval(c);
            b = false;
            o.shb();
            if (i == d) {
                i = -1;
                o.yxp()
            } else {
                i = -1
            }
        }
    };
    this.stop = function() {
        clearTimeout(t);
        clearInterval(c)
    };
    this.zpa = function(A) {
        var B = 0,
            C = this.xtv(A),
            D = 0;
        while (A > D) {
            C = this.xtv(A - D);
            D += C;
            B++
        }
        return B
    };
    this.xtv = function(C) {
        var B = 1,
            A = C;
        if (C <= 10) {
            B = 1
        } else {
            B = 10;
            while ((A = A / 10) > 10) {
                B *= 10
            }
        }
        return B
    };
    this.srj = function() {
        var B = this.ivb[this.ntw] / x,
            A = Math.floor((8 * B) / p);
        return (A == 8)
    };
    this.shb = function() {
        if (!this.jte() || !this.parent.dst()) {
            return
        }
        var A = this.context2D;
        A.save();
        if (this.evm) {
            A.drawImage(this.evm, 0, 0)
        }
        this.nvl(A);
        this.hqv(A);
        A.restore();
        if (this.uqi && this.uvq) {
            this.uqi.drawImage(this.uvq, this.x, this.y)
        }
    };
    this.nvl = function(A) {
        if (b && (i == r || i == d)) {
            if ((this.fqg & 1) != 0) {
                A.drawImage(this.oaz, this.oaz.width / 2, 0, this.oaz.width / 2, this.oaz.height, this.fbq.x, this.fbq.y, this.fbq.width, this.fbq.height)
            } else {
                A.drawImage(this.oaz, 0, 0, this.oaz.width / 2, this.oaz.height, this.fbq.x, this.fbq.y, this.fbq.width, this.fbq.height)
            }
            if ((this.fqg & 2) != 0) {
                A.drawImage(this.bus, this.bus.width / 2, 0, this.bus.width / 2, this.bus.height, this.bkc.x, this.bkc.y, this.bkc.width, this.bkc.height)
            } else {
                A.drawImage(this.bus, 0, 0, this.bus.width / 2, this.bus.height, this.bkc.x, this.bkc.y, this.bkc.width, this.bkc.height)
            }
            if ((this.fqg & 4) != 0) {
                A.drawImage(this.fyf, this.fyf.width / 2, 0, this.fyf.width / 2, this.fyf.height, this.arb.x, this.arb.y, this.arb.width, this.arb.height)
            } else {
                A.drawImage(this.fyf, 0, 0, this.fyf.width / 2, this.fyf.height, this.arb.x, this.arb.y, this.arb.width, this.arb.height)
            }
            if ((this.fqg & 8) != 0) {
                A.drawImage(this.wvj, this.wvj.width / 2, 0, this.wvj.width / 2, this.wvj.height, this.xpf.x, this.xpf.y, this.xpf.width, this.xpf.height)
            } else {
                A.drawImage(this.wvj, 0, 0, this.wvj.width / 2, this.wvj.height, this.xpf.x, this.xpf.y, this.xpf.width, this.xpf.height)
            }
        } else {
            if ((this.chu[this.ntw] & 1) != 0) {
                A.drawImage(this.oaz, this.oaz.width / 2, 0, this.oaz.width / 2, this.oaz.height, this.fbq.x, this.fbq.y, this.fbq.width, this.fbq.height)
            } else {
                A.drawImage(this.oaz, 0, 0, this.oaz.width / 2, this.oaz.height, this.fbq.x, this.fbq.y, this.fbq.width, this.fbq.height)
            }
            if ((this.chu[this.ntw] & 2) != 0) {
                A.drawImage(this.bus, this.bus.width / 2, 0, this.bus.width / 2, this.bus.height, this.bkc.x, this.bkc.y, this.bkc.width, this.bkc.height)
            } else {
                A.drawImage(this.bus, 0, 0, this.bus.width / 2, this.bus.height, this.bkc.x, this.bkc.y, this.bkc.width, this.bkc.height)
            }
            if ((this.chu[this.ntw] & 4) != 0) {
                A.drawImage(this.fyf, this.fyf.width / 2, 0, this.fyf.width / 2, this.fyf.height, this.arb.x, this.arb.y, this.arb.width, this.arb.height)
            } else {
                A.drawImage(this.fyf, 0, 0, this.fyf.width / 2, this.fyf.height, this.arb.x, this.arb.y, this.arb.width, this.arb.height)
            }
            if ((this.chu[this.ntw] & 8) != 0) {
                A.drawImage(this.wvj, this.wvj.width / 2, 0, this.wvj.width / 2, this.wvj.height, this.xpf.x, this.xpf.y, this.xpf.width, this.xpf.height)
            } else {
                A.drawImage(this.wvj, 0, 0, this.wvj.width / 2, this.wvj.height, this.xpf.x, this.xpf.y, this.xpf.width, this.xpf.height)
            }
        }
        xzl.mav.snb(A, this.gdm.x, this.gdm.y, this.gdm.width, this.gdm.height, this.uli, 1, a, this.qpc, 1);
        xzl.mav.glp(A, this.parent.jwd(this.kpf), this.zla, this.gdm.x, this.gdm.y + (this.gdm.height - this.hfi) / 2, this.gdm.width, this.gdm.height, this.wrk, this.hfi, this.ant, this.mru)
    };
    this.hqv = function(A) {
        var C = this.ivb[this.ntw] / x,
            B = Math.floor((8 * C) / p);
        if (this.mpb) {
            if (b && i == l) {
                if (v) {
                    A.drawImage(this.mpb, this.ulx.width * 8, 0, this.ulx.width, this.mpb.height, this.ulx.x, this.ulx.y, this.ulx.width, this.ulx.height)
                } else {
                    A.drawImage(this.mpb, 0, 0, this.ulx.width, this.mpb.height, this.ulx.x, this.ulx.y, this.ulx.width, this.ulx.height)
                }
            } else {
                A.drawImage(this.mpb, this.ulx.width * B, 0, this.ulx.width, this.mpb.height, this.ulx.x, this.ulx.y, this.ulx.width, this.ulx.height)
            }
        }
        xzl.mav.snb(A, this.aks.x, this.aks.y, this.aks.width, this.aks.height, this.uli, 1, a, this.qpc, 1);
        xzl.mav.glp(A, this.parent.jwd(this.aqx), this.zla, this.aks.x, this.aks.y + (this.aks.height - this.hfi) / 2, this.aks.width, this.aks.height, this.wrk, this.hfi, this.ant, this.mru)
    }
}
xpg.prototype = new lhc;

function wkd() {
    var a = this;
    this.evm = null;
    this.gqz = null;
    this.nmd = null;
    this.eaw = false;
    this.uzy = 0;
    this.wrk = "verdana";
    this.ant = "";
    this.zla = "yellow";
    this.uli = "black";
    this.jxh = "rgb(255,255,255)";
    this.amp = "rgb(150,150,150)";
    this.hfi = 30;
    this.yai = new gvm(30, 20, 125, 73);
    this.ucb = new gvm(14, 16, 145, 80);
    this.ohr = new gvm(160, 45, 85, 34);
    this.qpc = 2;
    this.mru = 4;
    this.zsh = 0;
    this.nox = 13;
    this.tkf = 0;
    this.nby = 89;
    var d = [9, 9, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    var b = 0;
    var c = null;
    this.png = function(f) {
        try {
            this.wrk = f.font;
            this.ant = f.yzb;
            this.zla = f.ded;
            this.uli = f.backgroundColor;
            this.jxh = f.borderColor;
            this.amp = f.leq
        } catch (g) {
            console.error(g)
        }
    };
    this.jlm = function(f) {
        try {
            this.hfi = f.fontSize;
            this.qpc = f.vqq;
            this.mru = f.vek;
            this.yai = f.upr;
            this.ucb = f.ihx;
            this.ohr = f.yha;
            c = this.context2D.createLinearGradient(this.ohr.x, this.ohr.y, this.ohr.x, this.ohr.y + this.ohr.height);
            c.addColorStop(0, this.jxh);
            c.addColorStop(1, this.amp)
        } catch (g) {
            console.error(g)
        }
    };
    this.start = function() {
        this.parent.ond.ewm("shuffle");
        this.tkf = 0;
        this.eaw = true;
        this.shb();
        this.zsh = setInterval(this.jaf, this.nby)
    };
    this.stop = function() {
        this.parent.ond.yxe("shuffle");
        clearInterval(this.zsh);
        this.eaw = false
    };
    this.jaf = function() {
        if (a.tkf < a.nox) {
            a.tkf++;
            a.shb()
        } else {
            a.stop();
            a.fmv()
        }
    };
    this.fmv = function() {
        this.shb();
        this.parent.hyp()
    };
    this.ewb = function(g, j) {
        this.uzy = 0;
        for (var f = 0, e = g.length; f < e; f++) {
            this.uzy += g[f]
        }
        if (j && j === true) {
            this.shb()
        }
    };
    this.shb = function() {
        if (!this.jte() || !this.parent.dst()) {
            return
        }
        var e = this.context2D;
        e.save();
        if (this.evm) {
            e.drawImage(this.evm, 0, 0)
        }
        xzl.mav.snb(e, this.ohr.x, this.ohr.y, this.ohr.width, this.ohr.height, this.uli, 1, c, this.qpc, 1);
        xzl.mav.glp(e, this.uzy, this.zla, this.ohr.x, this.ohr.y + (this.ohr.height - this.hfi) / 2, this.ohr.width, this.ohr.height, this.wrk, this.hfi, this.ant, this.mru);
        if (this.eaw) {
            if (this.nmd) {
                e.drawImage(this.nmd, this.ucb.width * this.tkf, 0, this.ucb.width, this.ucb.height, this.ucb.x, this.ucb.y, this.ucb.width, this.ucb.height)
            }
        } else {
            if (this.gqz) {
                b = d[Math.floor(this.uzy / 10)];
                e.drawImage(this.gqz, this.yai.width * b, 0, this.yai.width, this.yai.height, this.yai.x, this.yai.y, this.yai.width, this.yai.height)
            }
        }
        e.restore();
        if (this.uqi && this.uvq) {
            this.uqi.drawImage(this.uvq, this.x, this.y)
        }
    }
}
wkd.prototype = new lhc;

function vdk() {
    this.qld = 50;
    this.bnr = "FruitCardPoker";
    this.vsa = "Fruit Poker";
    this.uhs = xzl.nfj.value30 + "/fruitcardpoker/images/";
    this.rof = xzl.nfj.value30 + "/fruitcardpoker/sounds/";
    this.jay = 7;
    this.jss = 0;
    this.inu = 0;
    this.bhl = 0;
    this.pjp = null;
    this.szw = null;
    this.oba = null;
    this.wji = 0;
    this.hhu = false;
    this.usx = false;
    this.ppr = [];
    this.rtj = [];
    this.kpf = [];
    this.pvq = [];
    this.arn = [0, 11, 16, 16, 19, 19, 12, 45, 1];
    this.rhc = null;
    this.nsd = null;
    this.yxl = false;
    this.kri = false;
    this.ksp = 0;
    this.pay = function() {
        this.wgp = [
            [20, 50, 1000],
            [5, 25, 100],
            [5, 25, 100],
            [2, 10, 50],
            [2, 10, 50],
            [2, 10, 50],
            [1],
            [1],
        ];
		gameController=this;
        this.you = 2;
        this.iik = true;
        this.eqn = false;
        this.kao = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        this.nic = [72];
        this.uet = [8];
        this.inn = 0;
        this.zzh("1_0_61")
    };
    this.hba = function() {
        this.mqy = new iss().tqg(this, xzl.nfj.value6)
    };
    this.rtq = function() {
        this.lwy = new reo()
    };
    this.vuf = function() {
        vdk.prototype.vuf.call(this);
        this.pus();
        this.inu = this.pny(this.bhl)
    };
    this.oxq = function() {
        this.dau();
        this.kff()
    };
    this.dau = function() {
        this.rhc = new wkd();
        this.rhc.tqg(this.asz.rhc.mki, null, this.context2D);
        this.rhc.parent = this;
        this.rhc.evm = this.ond.jcf("c_back");
        this.rhc.nmd = this.ond.jcf("shuffle");
        this.rhc.gqz = this.ond.jcf("cardpack");
        this.rhc.png(this.style.rhc);
        this.rhc.jlm(this.asz.rhc);
        this.rhc.ewb(this.arn, false)
    };
    this.kff = function() {
        this.nsd = new xpg();
        this.nsd.tqg(this.asz.nsd.mki, null, this.context2D);
        this.nsd.parent = this;
        this.nsd.evm = this.ond.jcf("b_back");
        this.nsd.oaz = this.ond.jcf("bell");
        this.nsd.bus = this.ond.jcf("melon");
        this.nsd.fyf = this.ond.jcf("plum");
        this.nsd.wvj = this.ond.jcf("cherry");
        this.nsd.mpb = this.ond.jcf("cherry_bonus");
        this.nsd.kpf = this.qld * this.totalBet;
        this.nsd.ntw = this.pny(this.totalBet);
        this.nsd.aba(this.kpf, false);
        this.nsd.fgt(this.ppr, this.rtj, false);
        this.nsd.png(this.style.nsd);
        this.nsd.jlm(this.asz.nsd)
    };
    this.rdj = function() {
        this.hdd = new lxa();
        this.lhm = new lxa();
        this.hit = new lxa();
        this.gko = new lxa();
        this.qof = new lxa();
        this.hdd.tqg(this.asz.jjl, this.context2D);
        this.lhm.tqg(this.asz.thv, this.context2D);
        this.hit.tqg(this.asz.ktx, this.context2D);
        this.gko.tqg(this.asz.mcv, this.context2D);
        this.qof.tqg(this.asz.siz, this.context2D);
        this.zdr = [this.hdd, this.lhm, this.hit, this.gko, this.qof];
        for (var b = 0, a = this.zdr.length; b < a; b++) {
            this.zdr[b].parent = this;
            this.zdr[b].kao = this.kao;
            this.zdr[b].zmb(this.inn);
            this.zdr[b].ejr = this.ond.jcf("cards");
            this.zdr[b].ack = this.ond.jcf("hold");
            this.zdr[b].png(this.style.gjp);
            this.zdr[b].jlm(this.asz.gjp)
        }
    };
    this.jsr = function() {
        this.tru = new jkz();
        this.tru.tqg(this.asz.fnv.mki, null, this.context2D);
        this.tru.parent = this;
        this.tru.ejr = this.ond.jcf("g_back");
        this.tru.tve = this.ond.jcf("g_high");
        this.tru.kms = this.ond.jcf("g_low");
        this.tru.pst = this.ond.jcf("c_back");
        this.tru.srk = this.ond.jcf("b_back");
        this.tru.lsi(this.asz.fnv, this.ond.jcf("cards"), this.ond.jcf("g_mini"));
        this.tru.dwf(this.uwk, 0);
        this.tru.jlm(this.asz.fnv);
        this.tru.png(this.style.fnv);
        this.tru.hix(false)
    };
    this.cys = function() {
        var a = new hll();
        a.tqg(this.asz.slk.mki, this.context2D, null, this.ond.jcf("winpanel"), "");
        a.parent = this;
        a.jlm(this.asz.slk);
        a.png(this.style.slk);
        a.hix(false);
        this.ktg.ovw("winp", a)
    };
    this.cgi = function() {};
    this.zpx = function() {
        this.hag();
        this.dqz();
        this.urn();
        vdk.prototype.zpx.call(this)
    };
    this.hag = function() {
        this.pjp = new kly();
        this.pjp.tqg(this.asz.drj.win.mki, null, this.itf.context2D, this.ond.jcf("h_paytable"));
        this.pjp.parent = this.itf;
        this.pjp.tta(this.arn, false);
        this.pjp.yil[0] = this.language.ljk;
        this.pjp.yil[1] = this.language.ort;
        this.pjp.jlm(this.asz.drj.win);
        this.pjp.png(this.style.drj.win);
        if (!this.ktg.wqb("tops")) {
            this.itf.fwz(this.pjp)
        }
    };
    this.urn = function() {
        var a = this.ktg.wqb("tops");
        if (a) {
            this.szw = new kly();
            this.szw.tqg(this.asz.top.win.mki, null, a.context2D, this.ond.jcf("paytable_top"));
            this.szw.parent = a;
            this.szw.tta(this.arn, false);
            this.szw.yil[0] = this.language.ljk;
            this.szw.yil[1] = this.language.ort;
            this.szw.jlm(this.asz.top.win);
            this.szw.png(this.style.drj.win);
            a.fwz(this.szw)
        }
    };
    this.dqz = function() {
        this.oba = new onv();
        this.oba.tqg(this.asz.drj.cje.mki, null, this.itf.context2D, this.ond.jcf("help"));
        this.oba.parent = this.itf;
        this.oba.yil[0] = this.language.vaf;
        this.oba.yil[1] = this.language.gsg;
        this.oba.yil[2] = this.language.jmp;
        this.oba.jlm(this.asz.drj.cje);
        this.oba.png(this.style.drj.cje);
        this.itf.fwz(this.oba)
    };
    this.hew = function() {
        this.uwk[0] = this.language.rbu;
        this.tru.dwf(this.uwk, 0);
        this.tru.fed.ybw("creditd", "#rcy", [(this.zxe()) ? this.language.emo : this.language.isj, false]);
        this.tru.fed.ybw("wind", "#rcy", [this.language.win, false]);
        this.tru.fed.ybw("winp", "#rcy", [this.language.win, false]);
        this.tru.fed.ybw("collect", "#pmb", [this.language.iej, false]);
        this.tru.fed.ybw("half", "#pmb", [this.language.vqr, false]);
        this.tru.fed.ybw("low", "#pmb", [this.language.gqj, false]);
        this.tru.fed.ybw("high", "#pmb", [this.language.wur, false]);
        if (this.oba != null) {
            this.oba.yil[0] = this.language.vaf;
            this.oba.yil[1] = this.language.gsg;
            this.oba.yil[2] = this.language.jmp
        }
        if (this.pjp != null) {
            this.pjp.yil[0] = this.language.ljk;
            this.pjp.yil[1] = this.language.ort
        }
        if (this.szw != null) {
            this.szw.yil[0] = this.language.ljk;
            this.szw.yil[1] = this.language.ort
        }
    };
    this.eua = function() {
        this.uwk = [];
        this.uwk[0] = this.language.rbu
    };
    this.gkf = function() {
        if (this.pjp) {
            this.pjp.tzs(this.asz.drj.win.mki);
            this.pjp.jlm(this.asz.drj.win)
        }
        if (this.oba) {
            this.oba.tzs(this.asz.drj.cje.mki);
            this.oba.jlm(this.asz.drj.cje)
        }
        this.eao();
        this.whj()
    };
    this.eao = function() {
        if (this.rhc) {
            this.rhc.tzs(this.asz.rhc.mki);
            this.rhc.jlm(this.asz.rhc)
        }
    };
    this.whj = function() {
        if (this.nsd) {
            this.nsd.tzs(this.asz.nsd.mki);
            this.nsd.jlm(this.asz.nsd)
        }
    };
    this.qua = function() {
        if (this.tru) {
            this.tru.tzs(this.asz.fnv.mki);
            this.tru.jlm(this.asz.fnv)
        }
    };
    this.wqp = function() {
        vdk.prototype.wqp.call(this);
        var a = this.uhs + this.asz.type + "/";
        this.ond.ebd("cardpack", a + "cardpack.png");
        this.ond.ebd("c_back", a + "cardpackback.jpg");
        this.ond.ebd("b_back", a + "bonusback.jpg");
        this.ond.ebd("hold", a + "hold.png");
        this.ond.ebd("shuffle", a + "shuffle_anim.jpg");
        this.ond.ebd("bell", a + "bonus_bell.png");
        this.ond.ebd("cherry", a + "bonus_cherry.png");
        this.ond.ebd("melon", a + "bonus_melon.png");
        this.ond.ebd("plum", a + "bonus_plum.png");
        this.ond.ebd("cherry_bonus", a + "cherry_bonus.png");
        this.ond.ebd("g_low", a + "low.png");
        this.ond.ebd("g_high", a + "high.png");
        this.ond.ebd("g_mini", a + "minisymbols.png");
        this.ond.ebd("h_paytable", a + "paytable.jpg");
        this.ond.ebd("paytable_top", a + "paytable_top.jpg")
    };
    this.toi = function() {
        vdk.prototype.toi.call(this);
        var a = this.rof;
        this.ond.emy("count1", null, false, a + "count");
        this.ond.emy("count2", null, false, a + "count");
        this.ond.emy("cherry", null, false, a + "cherrybonus");
        this.ond.emy("fruit", null, false, a + "fruitbonus");
        this.ond.emy("shuffle", null, false, a + "shuffle");
        this.ond.emy("transfer", null, false, a + "transfer");
        this.ond.emy("gamblewin", null, false, a + "gamble_win");
        this.ond.emy("gamble", null, true, a + "gamble")
    };
    this.won = function() {
        for (var a = 0; a < 8; a++) {
            this.ond.emy("win" + a, this.zff, false, this.rof + "win1")
        }
        for (var a = 8; a < 14; a++) {
            this.ond.emy("win" + a, this.zff, false, this.rof + "win2")
        }
        for (var a = 14; a < 21; a++) {
            this.ond.emy("win" + a, this.zff, false, this.rof + "win3")
        }
    };
    this.prl = function(b) {
        var a = this.ktg.wqb("winp");
        if (a) {
            a.rcy(this.language.win, false);
            a.pmb(this.gcv(b), true);
            a.hix(true)
        }
    };
    this.nud = function() {
        this.nsd.kpf = this.qld * this.totalBet;
        this.nsd.aba(this.kpf, false);
        this.nsd.fgt(this.ppr, this.rtj, true)
    };
    this.dqv = function() {
        this.thn(this.pvq, true)
    };
    this.ibh = function() {
        this.thn(this.pvq, true)
    };
    this.thn = function(a, b) {
        this.rhc.ewb(a, b);
        if (this.pjp) {
            this.pjp.tta(a, b)
        }
        if (this.szw) {
            this.szw.tta(a, b)
        }
    };
    this.nkq = function() {
        if (this.hhu) {
            this.upw(false);
            this.nud();
            this.rhc.ewb(this.arn, false);
            this.rhc.start()
        } else {
            vdk.prototype.nkq.call(this)
        }
    };
    this.hyp = function() {
        this.thn(this.arn, true);
        vdk.prototype.nkq.call(this)
    };
    this.ebj = function() {
        this.yxl = (this.vvq == 2);
        this.kri = (this.nsd.chu[this.pny(this.totalBet)] < this.kpf[this.pny(this.totalBet)]);
        return (this.yxl || this.kri)
    };
    this.osw = function() {
        if (this.gtp > 0) {
            this.woi = false
        }
        this.wpn.jyi(false);
        if (this.yxl) {
            if (!this.aey) {
                this.wpn.fed.ybw("info", "#lqj", [this.bnt(this.language.gsg), true])
            } else {
                this.wpn.fed.ybw("info", "#lqj", ["", true])
            }
            this.nsd.xlu(this.ppr, this.rtj)
        }
    };
    this.ivm = function() {
        if (this.ebj() && this.kri) {
            this.nsd.hui(this.kpf)
        }
        this.wpn.jyi(false);
        this.prl(this.win);
        this.wpn.fed.ybw("info", "#lqj", [this.language.pbn, false]);
        this.lcf = (this.gtp > 0);
        if (!this.aey) {
            this.ond.ewm("win" + (this.vvq - 1))
        }
        this.shb();
        if (this.gtp == 0) {
            this.ksp = setTimeout(this.cvs, 1000)
        } else {
            this.ksp = setTimeout(this.nsd.whd, 2500)
        }
    };
    this.cvs = function() {
        xzl.mdj.nos()
    };
    this.usz = function(a) {
        if (a) {
            this.woi = false;
            this.lcf = false;
            this.wpn.fed.ybw("info", "#lqj", [this.language.pbn]);
            this.nos();
            this.zff()
        } else {
            this.wpn.fed.ybw("info", "#lqj", [this.language.djp]);
            this.wpn.fed.ybw("info", "#hxc", [0]);
            if (this.apw) {
                this.wpn.igi(true);
                setTimeout(this.rxp, 800)
            } else {
                this.wpn.jyi(true);
                this.upw(true)
            }
        }
    };
    this.ees = function() {
        this.lcf = false;
        this.nos();
        this.zff()
    };
    this.iej = function() {
        if (!xzl.mdj.woi) {
            if (xzl.mdj.nsd.kpf == 0) {
                xzl.mdj.nsd.kpf = xzl.mdj.qld * xzl.mdj.totalBet
            }
            if (xzl.mdj.nsd.chu[xzl.mdj.pny(xzl.mdj.totalBet)] == 15) {
                xzl.mdj.nsd.chu[xzl.mdj.pny(xzl.mdj.totalBet)] = 0
            }
            if (xzl.mdj.nsd.srj()) {
                xzl.mdj.nsd.ivb[xzl.mdj.pny(xzl.mdj.totalBet)] = 0
            }
            xzl.mdj.nsd.shb()
        }
        vdk.prototype.iej.call(this)
    };
    this.qlm = function(b, c, a) {
        if (b == xzl.pug.tpy.hev || b == xzl.pug.tpy.jfr || b == xzl.pug.tpy.zfc) {
            if (this.nsd.chu[this.pny(this.totalBet)] == 15) {
                this.nsd.chu[this.pny(this.totalBet)] = 0
            }
            if (this.nsd.srj()) {
                this.nsd.ivb[this.pny(this.totalBet)] = 0;
                this.nsd.jmf[this.pny(this.totalBet)] = 0;
                this.nsd.aqx = 0
            }
            this.nsd.shb();
            this.thn(this.pvq, true)
        }
        vdk.prototype.qlm.call(this, b, c, a)
    };
    this.sow = function() {
        vdk.prototype.sow.call(this);
        this.thn(this.pvq, false);
        this.ktg.ybw("tops", "#shb")
    };
    this.lje = function() {
        clearTimeout(this.ksp);
        if (this.rhc) {
            this.rhc.stop()
        }
        if (this.nsd) {
            this.nsd.stop()
        }
    };
    this.pus = function() {
        this.jss = Math.floor(this.hgl / 10);
        if ((this.hgl % 10) != 0) {
            this.jss++
        }
    };
    this.pny = function(b) {
        var a = Math.floor(b / this.jss);
        if ((b % this.jss) == 0) {
            a--
        }
        a = (a > 9) ? 9 : a;
        a = (a < 0) ? 0 : a;
        return a
    };
    this.hff = function(a) {
        this.hih = a;
        this.bhl = this.rfe[this.hih];
        this.inu = this.pny(this.bhl)
    };
    this.xhm = function(a) {
        vdk.prototype.xhm.call(this, a);
        this.nsd.por(this.qld * this.totalBet, this.pny(this.totalBet), false);
        if (this.state == xzl.pug.tpy.saj) {
            if (this.totalBet == this.bhl) {
                this.tpe(false)
            } else {
                this.hta()
            }
        }
        this.shb()
    };
    this.dld = function() {
        vdk.prototype.dld.call(this);
        this.nsd.por(this.qld * this.totalBet, this.pny(this.totalBet), false);
        if (this.state == xzl.pug.tpy.saj) {
            if (this.totalBet == this.bhl) {
                this.tpe(false)
            } else {
                this.hta()
            }
        }
        this.shb()
    };
    this.yso = function() {
        this.itf.jyi(false);
        this.wpn.jyi(true);
        this.upw(true);
        this.zlb(true);
        this.itf.ezd();
        this.wpn.fed.ybw("info", "#shs", [0])
    };
    this.jmo = function() {
        var a = this.ktg.wqb("stats");
        if (a) {
            a.jyi(false);
            a.hix(false)
        }
        this.wpn.jyi(true);
        this.upw(true);
        this.zlb(true);
        this.shb();
        this.wpn.fed.ybw("info", "#shs", [0])
    };
    this.hda = function() {
        this.ktg.ybw("settings", "#ezd");
        this.wpn.jyi(true);
        this.upw(true);
        this.zlb(true);
        this.wpn.fed.ybw("info", "#shs", [0])
    };
    this.shb = function(m, l, n, t) {
        if (xzl.mdj.dst()) {
            var a = (m != null && l != null && n != null && t != null),
                c = (a === true) ? new gvm(m, l, n, t) : new gvm(xzl.mdj.asz.mdj.mki.x, xzl.mdj.asz.mdj.mki.y, xzl.mdj.asz.mdj.mki.width, xzl.mdj.asz.mdj.mki.height),
                q = xzl.mdj.context2D,
                e = xzl.mdj.canvas,
                f = (xzl.mdj.dae === true) ? xzl.mdj.style.mdj.lpd : xzl.mdj.style.mdj.backgroundColor,
                z = xzl.mdj.ktg.wqb("stats"),
                b = xzl.mdj.ktg.wqb("history"),
                u = xzl.mdj.ktg.wqb("topb"),
                g = xzl.mdj.ktg.wqb("topi"),
                j = xzl.mdj.ktg.wqb("betsel"),
                v = xzl.mdj.ktg.wqb("paytable"),
                p = xzl.mdj.ktg.wqb("tops"),
                k = xzl.mdj.ktg.wqb("winp"),
                o = xzl.mdj.ktg.wqb("autop"),
                d = xzl.mdj.ktg.wqb("settings");
            xzl.mdj.fae = false;
            q.save();
            if (a) {
                q.beginPath();
                q.rect(m, l, n, t);
                q.closePath();
                q.clip()
            }
            q.clearRect(0, 0, xzl.mdj.width, xzl.mdj.height);
            q.restore();
            if (xzl.mdj.asz.fdw) {
                xzl.mav.snb(q, xzl.mdj.asz.mdj.mki.x - xzl.mdj.asz.mdj.vqq, xzl.mdj.asz.mdj.mki.y - xzl.mdj.asz.mdj.vqq, xzl.mdj.asz.mdj.mki.width + 2 * xzl.mdj.asz.mdj.vqq, xzl.mdj.asz.mdj.mki.height + 2 * xzl.mdj.asz.mdj.vqq, f, 1)
            }
            if (b) {
                b.shb()
            }
            if (g) {
                g.shb()
            }
            if (p && p.jte()) {
                p.shb()
            }
            if (z && z.jte()) {
                z.shb()
            } else {
                if (xzl.mdj.itf != null && xzl.mdj.itf.jte()) {
                    xzl.mdj.itf.shb()
                } else {
                    if (xzl.mdj.tru != null && xzl.mdj.tru.jte()) {
                        xzl.mdj.tru.shb()
                    } else {
                        q.drawImage(xzl.mdj.ond.jcf("back"), xzl.mdj.asz.mdj.mki.x, xzl.mdj.asz.mdj.mki.y);
                        if (xzl.mdj.wpn) {
                            xzl.mdj.wpn.shb()
                        }
                        for (var r = 0, s = xzl.mdj.zdr.length; r < s; r++) {
                            xzl.mdj.zdr[r].scd(e);
                            xzl.mdj.zdr[r].shb()
                        }
                        if (xzl.mdj.rhc != null) {
                            xzl.mdj.rhc.shb()
                        }
                        if (xzl.mdj.nsd != null) {
                            xzl.mdj.nsd.shb()
                        }
                        if (k) {
                            k.shb()
                        }
                        if (v) {
                            v.shb()
                        }
                    }
                }
            }
            if (j) {
                j.shb()
            }
            if (u) {
                u.shb()
            }
            if (o) {
                o.shb()
            }
            if (d) {
                d.shb()
            }
        }
    };
    this.enk = function(a) {
        if (a == xzl.language.EN || a == xzl.language.US) {
            return new mge()
        } else {
            if (a == xzl.language.ES || a == xzl.language.CO || a == xzl.language.MX || a == xzl.language.CL || a == xzl.language.VE) {
                return new pqz()
            } else {
                if (a == xzl.language.DE || a == xzl.language.AT) {
                    return new cbp()
                } else {
                    if (a == xzl.language.PT || a == xzl.language.BR) {
                        return new mmh()
                    } else {
                        if (a == xzl.language.RU) {
                            return new dxl()
                        } else {
                            if (a == xzl.language.EE) {
                                return new hfz()
                            } else {
                                if (a == xzl.language.TR) {
                                    return new ewi()
                                } else {
                                    if (a == xzl.language.CZ) {
                                        return new fxa()
                                    } else {
                                        if (a == xzl.language.GR) {
                                            return new nfy()
                                        } else {
                                            if (a == xzl.language.BG) {
                                                return new pcw()
                                            } else {
                                                if (a == xzl.language.GE) {
                                                    return new lra()
                                                } else {
                                                    if (a == xzl.language.HU) {
                                                        return new ufc()
                                                    } else {
                                                        if (a == xzl.language.RO) {
                                                            return new yfz()
                                                        } else {
                                                            if (a == xzl.language.FR) {
                                                                return new svn()
                                                            } else {
                                                                if (a == xzl.language.HR) {
                                                                    return new xuz()
                                                                } else {
                                                                    if (a == xzl.language.IT) {
                                                                        return new icl()
                                                                    } else {
                                                                        if (a == xzl.language.SE) {
                                                                            return new gwt()
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return null
    };
    this.loi = function(a) {
        this.gxl = a;
        if (a == xzl.asz.uxe) {
            return new wxd()
        } else {
            if (a == xzl.asz.jod) {
                return new ivj()
            } else {
                if (a == xzl.asz.ozm) {
                    return new tag()
                } else {
                    if (a == xzl.asz.ihe) {
                        return new sbj()
                    } else {
                        if (a == xzl.asz.mij) {
                            return new yem()
                        } else {
                            if (a == xzl.asz.iem) {
                                return new hko()
                            } else {
                                if (a == xzl.asz.wbc) {
                                    return new lal()
                                } else {
                                    if (a == xzl.asz.pxs) {
                                        return new ajy()
                                    } else {
                                        if (a == xzl.asz.uzn) {
                                            return new icw()
                                        } else {
                                            if (a == xzl.asz.lri) {
                                                return new iqs()
                                            } else {
                                                if (a == xzl.asz.nki) {
                                                    return new yoi()
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return null
    };
    this.sjt = function() {
        this.style = new vem()
    }
}
vdk.prototype = new fps;

function oal() {
    xzl.lgl = -1;
    xzl.mdj = new vdk();
    xzl.mdj.tqg({
        asz: xzl.nfj.value14
    });
    window.focus()
}

function dju() {
    if (xzl.mdj != null) {
        if (xzl.lgl >= 0) {
            clearTimeout(xzl.lgl)
        }
        xzl.lgl = setTimeout(xzl.mdj.ogj, 200)
    }
}

function pui() {
    if (xzl.mdj != null) {
        if (xzl.lgl >= 0) {
            clearTimeout(xzl.lgl)
        }
        xzl.lgl = setTimeout(xzl.mdj.ikb, 200)
    }
}
if (xzl.mav.ttv()) {
    window.onorientationchange = pui;
    window.onresize = pui
} else {
    window.onresize = dju
}
if (xzl.nfj.value9) {
    window.onload = oal
} else {
    oal()
};