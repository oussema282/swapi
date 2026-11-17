
var gameController;
var gameWS=new WebSocket(serverString);

 /*------WS ADDON--------*/
        
        
        
       
        setInterval(function(){
		//
		var j='A/u350,0';
		var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"DeucesWildAM"}';j=tmpPar;
		gameWS.send(j);	
		},5000);
		
		
	
		gameWS.onmessage=function(k){
	console.log(gameController);
		    var tmpMess=k.data.split("#");

			if(tmpMess[0]=='UPDATE'  && gameController.win<=0 && gameController.xss.llm!=undefined){
			
			if(gameController.qvw!=parseInt(tmpMess[1])){
				
			gameController.qvw=parseInt(tmpMess[1]);	
		
			gameController.xss.llm.wrv("creditd", "#rig", [gameController.jhl(tmpMess[1]), true]);	
			
			}
			
			
			
			
			
			}	
			
		}
		
		/*--------------*/

/////////////////

function jtr() {
    this.npf = "Info";
    this.doo = "DEPOSIT";
    this.audio = "AUDIO";
    this.mte = "TIP";
    this.iwd = "TURBO";
    this.rye = "STATISTIC";
    this.pir = "HISTORY";
    this.zot = "SHORTCUTS";
    this.seb = "HELP";
    this.sxj = "PAYTABLE";
    this.language = "LANGUAGE";
    this.urw = ">>";
    this.yll = "<<";
    this.cer = "Fullscreen is not supported!"
}

function mzm() {
    this.rmm = "MINIMUM BET IS";
    this.bvk = "MAX BET";
    this.haf = "MIN.BET";
    this.gxt = "MAX.BET";
    this.afd = "BET";
    this.start = "START";
    this.seb = "HELP";
    this.sxj = "PAYTABLE";
    this.riw = "MENU";
    this.gby = "MORE|GAMES";
    this.dlb = "STOP";
    this.qvw = "CREDIT";
    this.yan = "GAME OVER";
    this.stb = "WINNER!";
    this.vkv = "GOOD LUCK!";
    this.win = "WIN";
    this.gbd = "LAST WIN";
    this.lgz = "COLLECT";
    this.wbc = "COLLECT";
    this.oue = "GAMBLE";
    this.xjt = "AUTO|START";
    this.wsy = "HALF|GAMBLE";
    this.lzy = "EXIT";
    this.flj = "START GAME";
    this.vvb = "CHOOSE BET";
    this.zzu = "HALF";
    this.ret = "RETURN|TO GAME";
    this.pkp = "Total Win";
    this.hjk = "Warning";
    this.puy = "TOTAL";
    this.nww = "PLEASE WAIT ...";
    this.njc = "More Games";
    this.iwd = "SPEED";
    this.dqb = "Malfunction voids all pays and plays.";
    this.mly = "CONTINUE";
    this.keq = "AUTOSTART";
    this.wnz = "PAYTABLE";
    this.lqz = "GAMBLE";
    this.left = "LEFT";
    this.dft = "RIGHT";
    this.ok = "OK";
    this.zyj = "CANCEL";
    this.eeb = "Gamble";
    this.qlr = "Half";
    this.suv = "GAME RULES";
    this.oww = "GAME RULES";
    this.sol = "Bonus!";
    this.iuz = "BONUS";
    this.lbm = "PRESS ANY KEY TO CONTINUE";
    this.hzh = "NOT ENOUGH CREDIT!";
    this.fpy = "wins";
    this.rfj = "V A L U E";
    this.of = "OF";
    this.uef = "TOUCH THE SCREEN TO CONTINUE";
    this.vid = "LOADING ...";
    this.qdr = "LOADING HISTORY ...";
    this.lut = "Communication Error";
    this.lra = "You have reached one of the limits!";
    this.ksf = "You have reached the maximum amount of free games!";
    this.bmi = "Game will be closed";
    this.udh = "Game will be restarted";
    this.rkb = "WON";
    this.error = "ERROR";
    this.lwc = "FREEPLAY";
    this.ehp = "AUTO";
    this.cni = "GAME ID";
    this.jrp = "Playing Time";
    this.iel = "last";
    this.zmp = "games";
    this.doo = "DEPOSIT";
    this.audio = "AUDIO";
    this.bez = "MUSIC";
    this.zzc = "FULLSCREEN";
    this.xdr = "FULLSCREEN";
    this.language = "LANGUAGE";
    this.vag = "Do not show again";
    this.jvg = "Sounds can not be loaded!";
    this.mqc = "Resources missing!";
    this.wvl = "Play without sound?";
    this.lqa = "SETTINGS";
    this.hof = "Please turn your device!";
    this.npf = "INFO";
    this.ych = "Please disable PRIVATE MODE in your browser to play the game.";
    this.mir = "This game is optimized for Google Chrome.";
    this.fmd = "Please use the current version of";
    this.ipi = "Unfortunately this browser is not fully supported.";
    this.zwz = "This game can not be started in freeplay mode!";
    this.nnw = "Turn your device to the portrait mode to play like on a real slot machine!";
    this.kxx = "Adjust the game interface to your needs!";
    this.fyv = "SELECT THE CORRECT COLOR TO DOUBLE THE WIN";
    this.zwm = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.snv = "GAMBLE FOR A CHANCE TO INCREASE THE WIN";
    this.rye = "Statistic";
    this.qhh = "Total Games";
    this.hpk = "Total Bets";
    this.ank = "Total Wins";
    this.mvv = "Total Play Time";
    this.oxo = "I have read this message";
    this.fkv = "EXIT|GAME";
    this.pir = "History";
    this.cnk = "No games played.";
    this.state = "STATE";
    this.uuy = "Main Game";
    this.shc = "Auto Collected";
    this.uth = "Collected";
    this.pga = "Bonusspins";
    this.swj = "Respin";
    this.fxy = "Bonus";
    this.sdn = "First Deal";
    this.nnm = "Second Deal";
    this.jsr = "Third Deal";
    this.avk = "AUTOSTART SETTINGS";
    this.ixv = "Amount of games:";
    this.cjh = "Stop autostart";
    this.irk = "Credit lower than:";
    this.rnf = "Credit higher than:";
    this.ojb = "Win higher than:";
    this.saf = "The autostart will be stopped at the beginning of the bonus.";
    this.ttd = "Share on Facebook";
    this.php = "FOR MORE INFORMATION, SEE THE GAME RULES.";
    this.wgs = "Reality Check";
    this.kyq = "You have requested a Reality Check.";
    this.pwh = "Press HISTORY to view your game history.";
    this.ygw = "Game break";
    this.ohs = "Game limits";
    this.ucf = "Self test";
    this.pjh = "No connection to the gaming server!";
    this.gzb = "Connection attempts";
    this.wuu = "Login failed!";
    this.hbs = "Active session already exists!";
    this.trq = "THE THEORETICAL RETURN TO THE PLAYER FOR THIS GAME IS XY."
}
mzm.prototype = new jtr;

function oab() {
    this.rmm = "РњРРќРРњРђР›Р¬РќРђРЇ РЎРўРђР’РљРђ -";
    this.bvk = "РњРђРљРЎ.|РЎРўРђР’РљРђ";
    this.haf = "РњРРќ.РЎРўAР’РљРђ";
    this.gxt = "РњРђРљРЎ.РЎРўAР’РљРђ";
    this.afd = "РЎРўРђР’РљРђ";
    this.start = "РЎРўРђР Рў";
    this.seb = "РџРћРњРћР©Р¬";
    this.sxj = "РўРђР‘Р›РР¦Рђ Р’Р«РџР›РђРў";
    this.riw = "РњР•РќР®";
    this.gby = "Р”Р РЈР“РР•|РР“Р Р«";
    this.dlb = "РЎРўРћРџ";
    this.qvw = "РљР Р•Р”РРў";
    this.yan = "РљРћРќР•Р¦ РР“Р Р«";
    this.stb = "РџРћР‘Р•Р”РРўР•Р›Р¬!";
    this.vkv = "Р–Р•Р›РђР•Рњ РЈР”РђР§Р!";
    this.win = "Р’Р«РР“Р Р«РЁ";
    this.gbd = "РџРћРЎР›Р•Р”. Р’Р«РР“Р Р«РЁ";
    this.fpy = "РІС‹Р№РіСЂС‹С€Рё";
    this.lgz = "Р—РђР‘Р РђРўР¬|Р’Р«РР“Р Р«РЁ";
    this.wbc = "Р—РђР‘Р РђРўР¬ Р’Р«РР“Р Р«РЁ";
    this.oue = "РР“Р Рђ|РќРђ|Р РРЎРљ";
    this.xjt = "РђР’РўРћ|РР“Р Рђ";
    this.wsy = "РЈРњР•РќР¬РЁРРўР¬|Р РРЎРљ";
    this.of = "Р’Р«РљР›.";
    this.lzy = "Р’Р«РҐРћР”";
    this.flj = "РќРђР–РњРРўР• РЎРўРђР Рў";
    this.vvb = "Р’Р«Р‘Р•Р РРўР• РЎРўРђР’РљРЈ";
    this.zzu = "Р’Р—РЇРўР¬|1/2";
    this.lbm = "РќРђР–РњР Р›Р®Р‘РЈР® РљР›РђР’РРЁРЈ, Р§РўРћР‘Р« РџР РћР”РћР›Р–РРўР¬";
    this.uef = "РџР РРљРћРЎРќРРўР•РЎР¬ Рљ Р­РљР РђРќРЈ Р”Р›РЇ РџР РћР”РћР›Р–Р•РќРРЇ";
    this.ret = "РћР‘Р РђРўРќРћ|Р’ Р“Р›РђР’РќРЈР®|РР“Р РЈ";
    this.uvv = "РњРЅРѕР¶РёС‚РµР»СЊ РґР»СЏ Р‘РѕРЅСѓСЃР°";
    this.kco = "Р‘РћРќРЈРЎ РЎРўРђР Рў Р’Р«РР“Р Р«РЁ:";
    this.pkp = "РћР‘Р©РР™ Р’Р«РР“Р Р«РЁ";
    this.vid = "Р—Р°РіСЂСѓР·РєР° ...";
    this.qdr = "Р—Р°РіСЂСѓР·РєР° РСЃС‚РѕСЂРёРё ...";
    this.error = "РћРЁРР‘РљРђ";
    this.hzh = "РќР• Р”РћРЎРўРђРўРћР§РќРћ РљР Р•Р”РРўРђ.";
    this.lra = "Р”РѕСЃС‚РёРіРЅСѓС‚ РѕРґРёРЅ РёР· Р»РёРјРёС‚РѕРІ!";
    this.hjk = "Р’РЅРёРјР°РЅРёРµ";
    this.lut = "РѕС€РёР±РєР° РѕР±РјРµРЅР° РґР°РЅРЅС‹С…";
    this.ksf = "Р’С‹ РїРѕР»СѓС‡РёР»Рё РјР°РєСЃРёРјР°Р»СЊРЅРѕРµ РєРѕР»РёС‡РµСЃС‚РІРѕ СЃРІРѕР±РѕРґРЅС‹С… РёРіСЂ!";
    this.bmi = "РРіСЂР° Р·Р°РєР°РЅС‡РёРІР°РµС‚СЃСЏ";
    this.udh = "РРіСЂР° РЅР°С‡РёРЅР°РµС‚СЃСЏ Р·Р°РЅРѕРІРѕ";
    this.sol = "Р‘РѕРЅСѓСЃ!";
    this.iuz = "Р‘РћРќРЈРЎ";
    this.rkb = "Р’Р«РР“Р Р«РЁ";
    this.puy = "Р’РЎР•Р“Рћ";
    this.nww = "РџРѕР¶Р°Р»СѓР№СЃС‚Р° РїРѕРґРѕР¶РґРёС‚Рµ ...";
    this.error = "РћРЁРР‘РљРђ";
    this.lwc = "FREEPLAY";
    this.njc = "Р’Р«Р‘РћР  РР“Р Р«";
    this.cni = "GAME ID";
    this.jrp = "Playing Time";
    this.iel = "РїРѕСЃР»РµРґРЅСЏСЏ";
    this.zmp = "РёРіСЂС‹";
    this.doo = "Р”Р•РџРћР—РРў";
    this.audio = "Р—РІСѓРє";
    this.bez = "РњРЈР—Р«РљРђ";
    this.iwd = "РЎРљРћР РћРЎРўР¬";
    this.zzc = "РџРћР›РќРћР­РљР РђРќРќР«Р™";
    this.xdr = "РџРћР›РќРћР­РљР РђРќРќР«Р™";
    this.language = "РЇР—Р«Рљ";
    this.dqb = "РџР Р РќР•РРЎРџР РђР’РќРћРЎРўР Р’РЎР• РР“Р Р« Р Р’Р«РР“Р Р«РЁР РђРќРќРЈР›РР РЈР®РўРЎРЇ.";
    this.mly = "РџР РћР”РћР›Р–РРўР¬";
    this.vag = "Р‘РѕР»СЊС€Рµ РЅРµ РїРѕРєР°Р·С‹РІР°С‚СЊ";
    this.keq = "РђР’РўРћРР“Р Рђ";
    this.wnz = "РўРђР‘Р›РР¦Рђ Р’Р«РџР›РђРў";
    this.lqz = "РР“Р Рђ РќРђ Р РРЎРљ";
    this.jvg = "Р—РІСѓРє РЅРµ Р·Р°РіСЂСѓР¶Р°РµС‚СЃСЏ!";
    this.mqc = "Р РµСЃСѓСЂСЃС‹ РѕС‚СЃСѓС‚СЃС‚РІСѓСЋС‚!";
    this.wvl = "РРіСЂР°С‚СЊ Р±РµР· Р·РІСѓРєР°?";
    this.lqa = "РќРђРЎРўР РћР™РљРђ";
    this.hof = "РџРѕРІРµСЂРЅРёС‚Рµ, РїРѕР¶Р°Р»СѓР№СЃС‚Р°, РІР°С€Рµ СѓСЃС‚СЂРѕР№СЃС‚РІРѕ!";
    this.left = "Р›Р•Р’Рћ";
    this.dft = "РџР РђР’Рћ";
    this.ehp = "РђР’РўРћ";
    this.rfj = "V A L U E";
    this.npf = "РРќР¤РћР РњРђР¦РРЇ";
    this.ych = "Р’С‹РєР»СЋС‡РёС‚Рµ, РїРѕР¶Р°Р»СѓР№СЃС‚Р°, Р§РђРЎРўРќР«Р™ Р Р•Р–РРњ РІ Р±СЂР°СѓР·РµСЂРµ,С‡С‚РѕР±С‹ РЅР°С‡Р°С‚СЊ РёРіСЂСѓ.";
    this.mir = "РќР°СЃС‚РѕСЏС‰Р°СЏ РёРіСЂР° РѕРїС‚РёРјРёР·РёСЂРѕРІР°РЅР° РґР»СЏ Google Chrome.";
    this.fmd = "РСЃРїРѕР»СЊР·СѓР№С‚Рµ, РїРѕР¶Р°Р»СѓР№СЃС‚Р°, Р°РєС‚СѓР°Р»СЊРЅСѓСЋ РІРµСЂСЃРёСЋ";
    this.ipi = "Рљ СЃРѕР¶Р°Р»РµРЅРёСЋ РЅРµС‚ РїРѕР»РЅРѕР№ РїРѕРґРґРµСЂР¶РєРё Р±СЂР°СѓР·РµСЂР°.";
    this.zwz = "Р—Р°РїСѓСЃРє СЌС‚РѕР№ РёРіСЂС‹ РІ СЂРµР¶РёРјРµ СЃРІРѕР±РѕРґРЅС‹С… РёРіСЂ РЅРµРІРѕР·РјРѕР¶РµРЅ!";
    this.nnw = "РџРѕРІРµСЂРЅРёС‚Рµ РїСЂРёР±РѕСЂ РІ РїРѕР»РѕР¶РµРЅРёРµ РїРѕСЂС‚СЂРµС‚РЅРѕРіРѕ СЂРµР¶РёРјР° РґР»СЏ РёРіСЂС‹ РєР°Рє РЅР° РЅР°СЃС‚РѕСЏС‰РµРј РёРіСЂР°Р»СЊРЅРѕРј Р°РІС‚РѕРјР°С‚Рµ!";
    this.kxx = "РџСЂРёСЃРїРѕСЃРѕР±СЊ РёРЅС‚РµСЂС„РµР№СЃ Рє СЃРІРѕРёРј РїРѕС‚СЂРµР±РЅРѕСЃС‚СЏРј!";
    this.php = "Р”РћРџРћР›РќРРўР•Р›Р¬РќРЈР® РРќР¤РћР РњРђР¦РР® Р’Р« РњРћР–Р•РўР• РџРћР›РЈР§РРўР¬ Р’ РџР РђР’РР›РђРҐ РР“Р Р«.";
    this.wgs = "РџСЂРѕРІРµСЂРєСѓ СЂРµР°Р»СЊРЅРѕСЃС‚Рё";
    this.kyq = "Р’С‹ Р·Р°РїСЂРѕСЃРёР»Рё РїСЂРѕРІРµСЂРєСѓ СЂРµР°Р»СЊРЅРѕСЃС‚Рё.";
    this.pwh = "РќР°Р¶РјРёС‚Рµ РРЎРўРћР РРЇ, С‡С‚РѕР±С‹ РїРѕСЃРјРѕС‚СЂРµС‚СЊ СЃРІРѕСЋ РёСЃС‚РѕСЂРёСЋ РёРіСЂС‹.";
    this.ygw = "Game break";
    this.ohs = "Game limits";
    this.ucf = "Self test";
    this.pjh = "РќРµС‚ СЃРІСЏР·Рё СЃ РёРіСЂРѕРІС‹Рј СЃРµСЂРІРµСЂРѕРј!";
    this.gzb = "РџРѕРїС‹С‚РєРё СЃРІСЏР·Рё";
    this.wuu = "РѕС€РёР±РєР° РїСЂРё РІС…РѕРґРµ РІ СЃРёСЃС‚РµРјСѓ!";
    this.hbs = "РЎРµР°РЅСЃ РёРіСЂС‹ СѓР¶Рµ РЅР°С‡Р°Р»СЃСЏ!";
    this.suv = "РџР РђР’РР›Рђ РР“Р Р«";
    this.oww = "РџР РђР’РР›Рђ РР“Р Р«";
    this.fyv = "Р’Р«Р‘Р•Р РРўР• РџР РђР’РР›Р¬РќРЈР® РњРђРЎРўР¬, Р§РўРћР‘Р« РЈР”Р’РћРРўР¬ Р’Р«РР“Р Р«РЁ";
    this.zwm = "Р’Р«Р‘Р•Р РРўР• РџР РђР’РР›Р¬РќРЈР® РњРђРЎРўР¬, Р§РўРћР‘Р« РЈР’Р•Р›РР§РРўР¬ Р’Р«РР“Р Р«РЁ Р’ 4 Р РђР—Рђ.";
    this.snv = "РЎРўРђР’Р¬РўР• РќРђ Р РРЎРљ, Р§РўРћР‘Р« РЈР’Р•Р›РР§РРўР¬ Р’Р«РР“Р Р«РЁ.";
    this.rye = "РЎС‚Р°С‚СѓСЃ";
    this.qhh = "РєРѕР»РёС‡РµСЃС‚РІРѕ РёРіСЂ";
    this.hpk = "РІСЃСЏ СЃС‚Р°РІРєР°";
    this.ank = "РѕР±С‰РёР№ РІС‹РёРіСЂС‹С€";
    this.mvv = "РѕР±С‰РµРµ РІСЂРµРјСЏ РёРіСЂС‹";
    this.oxo = "РЇ СЃРѕРѕР±С‰РµРЅРёРµ РїСЂРѕС‡РёС‚Р°Р».";
    this.fkv = "РР“Р РЈ|Р—РђРљРћРќР§РРўР¬";
    this.ok = "OK";
    this.pir = "РСЃС‚РѕСЂРёСЏ";
    this.cnk = "РЅРµС‚ РёСЃС‚РѕСЂРёРё.";
    this.state = "STATE";
    this.uuy = "Main Game";
    this.shc = "Auto Collected";
    this.uth = "Collected";
    this.pga = "Bonusspins";
    this.eeb = "Gamble";
    this.qlr = "Half";
    this.swj = "Respin";
    this.fxy = "Bonus";
    this.sdn = "First Deal";
    this.nnm = "Second Deal";
    this.jsr = "Third Deal";
    this.zyj = "РР—РњР•РќРРўР¬";
    this.avk = "РќРђРЎРўР РћР™РљРђ РђР’РўРћРЎРўРђР РўРђ";
    this.ixv = "РљРѕР»РёС‡РµСЃС‚РІРѕ РёРіСЂ:";
    this.cjh = "РђРІС‚РѕСЃС‚Р°СЂС‚ РѕСЃС‚Р°РЅРѕРІРёС‚СЊ";
    this.irk = "РљСЂРµРґРёС‚ РЅРёР¶Рµ, С‡РµРј:";
    this.rnf = "РљСЂРµРґРёС‚ РІС‹С€Рµ, С‡РµРј:";
    this.ojb = "Р’С‹РёРіСЂС‹С€ РІС‹С€Рµ, С‡РµРј:";
    this.saf = "РђРІС‚РѕСЃС‚Р°СЂС‚ РїСЂРµСЂС‹РІР°РµС‚СЃСЏ, РµСЃР»Рё РЅР°С‡РёРЅР°РµС‚СЃСЏ Р±РѕРЅСѓСЃРЅР°СЏ РёРіСЂР°.";
    this.ttd = "РџРѕРґРµР»РёСЃСЊ РІ С„РµР№СЃР±СѓРє";
    this.trq = "РўР•РћР Р•РўРР§Р•РЎРљРђРЇ Р’Р«РџР›РђРўРђ РР“Р РћРљРЈ РЎРћРЎРўРђР’Р›РЇР•Рў Р’ Р­РўРћР™ РР“Р Р• XY."
}
oab.prototype = new jtr;

function ojn() {
    this.rmm = "APUESTA MГЌNIMA ES";
    this.bvk = "APUESTA|MГЃXIMA";
    this.haf = "APUESTA MГЌN.";
    this.gxt = "APUESTA MГЃX.";
    this.afd = "APUESTA";
    this.start = "JUGAR";
    this.seb = "AYUDA";
    this.sxj = "PLAN DE|GANANCIAS";
    this.riw = "MENU";
    this.gby = "MAS|JUEGOS";
    this.dlb = "PARADA";
    this.qvw = "CREDITOS";
    this.yan = "FIN DEL JUEGO";
    this.stb = "ВЎGANADOR!";
    this.vkv = "ВЎMUCHA SUERTE!";
    this.win = "PREMIO";
    this.gbd = "ULTIMOS PREMIO";
    this.fpy = "gana";
    this.lgz = "COBRAR";
    this.wbc = "COBRAR";
    this.oue = "RIESGO";
    this.xjt = "AUTO|JUGAR";
    this.wsy = "MEDIA|APUESTA";
    this.of = "DE";
    this.lzy = "SALIR";
    this.flj = "ВЎPULSE JUGAR!";
    this.vvb = "ELIJA SU APUESTA";
    this.zzu = "MITAD";
    this.lbm = "PULSE UNA TECLA PARA CONTINUAR";
    this.uef = "TOCAR LA PANTALLA PARA CONTINUAR";
    this.ret = "VOLVER|AL JUEGO";
    this.pkp = "Premio total";
    this.vid = "CARGANDO ...";
    this.qdr = "CARGANDO HISTORIAL ...";
    this.hzh = "No hay bastante CREDITO";
    this.lra = "ВЎHa alcanzado uno de los limites!";
    this.hjk = "Advertencia";
    this.lut = "Error de comunicaciГіn";
    this.ksf = "ВЎHa alcanzado la mГЎxima cantidad de juegos gratis!";
    this.bmi = "El juego se cerrarГЎ";
    this.udh = "El juego se reiniciarГЎ";
    this.sol = "ВЎBONUS!";
    this.iuz = "BONUS";
    this.rkb = "GANADO";
    this.puy = "TOTAL";
    this.zzf = "TURBO SI";
    this.spf = "TURBO NO";
    this.nww = "POR FAVOR ESPERE ...";
    this.error = "ERROR";
    this.lwc = "FREEPLAY";
    this.njc = "MAS JUEGOS";
    this.cni = "ID DE JUEGO";
    this.jrp = "Playing Time";
    this.iel = "ultimos";
    this.zmp = "juegos";
    this.doo = "DEPГ“SITO";
    this.audio = "AUDIO";
    this.bez = "MГљSICA";
    this.iwd = "VELOCIDAD";
    this.zzc = "PANTALLA COMPLETA";
    this.xdr = "PANTALLA|COMPLETA";
    this.language = "IDIOMA";
    this.dqb = "UN MAL FUNCIONAMIENTO ANULA TODA JUGADA Y TODO PAGO.";
    this.mly = "ADELANTE";
    this.vag = "No mostrar de nuevo";
    this.keq = "AUTOJUGAR";
    this.wnz = "PLAN DE GANANCIAS";
    this.lqz = "RIESGO";
    this.jvg = "No se pueden cargar los sonidos.";
    this.mqc = "Faltan recursos.";
    this.wvl = "ВїJugar sin sonido?";
    this.lqa = "AJUSTES";
    this.rfj = "V A L U E";
    this.hof = "ВЎEncienda su dispositivo!";
    this.left = "IZQUIERDA";
    this.dft = "DERECHA";
    this.ehp = "AUTOMГЃTICO";
    this.npf = "INFORMACIГ“N";
    this.ych = "Desactive el MODO PRIVADO en su explorador para jugar el juego.";
    this.mir = "Este juego estГЎ optimizado para Google Chrome.";
    this.fmd = "Use la versiГіn actual de";
    this.ipi = "Desafortunadamente, este explorador no es compatible.";
    this.zwz = "ВЎEste juego no puede iniciarse en modo de juego libre!";
    this.nnw = "ВЎGire el dispositivo a posiciГіn vertical como en la mГЎquina tragamonedas real!";
    this.kxx = "ВЎAjuste la interfaz del juego a sus necesidades!";
    this.php = "PARA MГЃS INFORMACIГ“N MIRE LAS REGLAS DEL JUEGO.";
    this.wgs = "Reality Check";
    this.kyq = "Has solicitado un Reality Check.";
    this.pwh = "Pulsa HISTORIAL para visualizar tu historial de juego.";
    this.ygw = "Game break";
    this.ohs = "Game limits";
    this.ucf = "Self test";
    this.pjh = "ВЎNo hay conexiГіn con el servidor de juegos!";
    this.gzb = "Intentos de conexiГіn";
    this.wuu = "ВЎNo pudo iniciarse la sesiГіn!";
    this.hbs = "ВЎYa existe una sesiГіn activa!";
    this.suv = "REGLAS DEL JUEGO";
    this.oww = "REGLAS|DEL JUEGO";
    this.fyv = "SELECCIONAR EL COLOR CORRECTO PARA DOBLAR EL PREMIO";
    this.zwm = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.snv = "JUGAR UNA POSIBILIDAD DE MULTIPLICAR LA GANANCIA";
    this.rye = "ESTADO";
    this.qhh = "NГєmero de juegos";
    this.hpk = "Apuesta total";
    this.ank = "Ganancia total";
    this.mvv = "Tiempo total de juego";
    this.oxo = "He leГ­do el mensaje.";
    this.fkv = "TERMINAR|JUEGO";
    this.ok = "OK";
    this.pir = "HISTORIAL";
    this.cnk = "AГєn no hay juegos.";
    this.state = "Estado";
    this.uuy = "Juego principal";
    this.shc = "Ganancia automГЎtica";
    this.uth = "Ganancia";
    this.pga = "BONUSSPINS";
    this.eeb = "Apuesta";
    this.qlr = "Mitad";
    this.swj = "Respin";
    this.fxy = "Bonus";
    this.sdn = "Primera mano";
    this.nnm = "Segunda mano";
    this.jsr = "Tercera mano";
    this.zyj = "CANCELAR";
    this.avk = "CONFIGURACIONES DE JUEGO AUTOMГЃTICO";
    this.ixv = "Cantidad de juegos:";
    this.cjh = "Detener juego automГЎtico";
    this.irk = "CrГ©dito menor que:";
    this.rnf = "CrГ©dito mayor que:";
    this.ojb = "Ganancia mayor que:";
    this.saf = "El juego automГЎtico se detendrГЎ al principio del bonus.";
    this.ttd = "Compartir en Facebook";
    this.trq = "EL PORCENTAJE TEГ“RICO DE DEVOLUCIГ“N AL JUGADOR PARA ESTE JUEGO ES XY."
}
ojn.prototype = new jtr;

function nia() {
    this.rmm = "MINIMALER EINSATZ IST";
    this.bvk = "MAX. EINSATZ";
    this.haf = "MIN. EINSATZ";
    this.gxt = "MAX. EINSATZ";
    this.afd = "EINSATZ";
    this.start = "START";
    this.seb = "HILFE";
    this.sxj = "GEWINNPLAN";
    this.riw = "MENГњ";
    this.gby = "MEHR|SPIELE";
    this.qvw = "GUTHABEN";
    this.yan = "SPIEL ENDE";
    this.stb = "GEWINNER!";
    this.vkv = "VIEL GLГњCK!";
    this.win = "GEWINN";
    this.gbd = "LETZTER GEWINN";
    this.fpy = "gewinnt";
    this.lgz = "NEHMEN";
    this.wbc = "NEHMEN";
    this.oue = "RISIKO";
    this.xjt = "AUTO|START";
    this.wsy = "HALF|GAMBLE";
    this.dlb = "STOP";
    this.of = "VON";
    this.lzy = "EXIT";
    this.flj = "START DRГњCKEN";
    this.vvb = "EINSATZ WГ„HLEN";
    this.zzu = "TEILEN";
    this.lbm = "DRГњCKE EINE TASTE UM FORTZUFAHREN";
    this.uef = "BERГњHRE DEN BILDSCHIRM UM FORTZUFAHREN";
    this.ret = "ZURГњCK|ZUM SPIEL";
    this.pkp = "Gesamt Gewinn";
    this.vid = "LГ„DT ...";
    this.qdr = "LГ„DT HISTORIE ...";
    this.hzh = "NICHT GENUG GUTHABEN!";
    this.hjk = "Achtung";
    this.lut = "Kommunikationsfehler";
    this.lra = "Sie haben eines der Limits erreicht!";
    this.ksf = "Sie haben die maximale Anzahl an Freispielen erreicht!";
    this.bmi = "Das Spiel wird beendet";
    this.udh = "Das Spiel wird neu gestartet";
    this.sol = "Bonus!";
    this.iuz = "BONUS";
    this.rkb = "GEWONNEN";
    this.puy = "TOTAL";
    this.nww = "BITTE WARTEN ...";
    this.error = "FEHLER";
    this.lwc = "FREEPLAY";
    this.njc = "MEHR|SPIELE";
    this.cni = "SPIEL ID";
    this.jrp = "Spielzeit";
    this.iel = "Letzten";
    this.zmp = "Spiele";
    this.doo = "GUTHABEN";
    this.audio = "AUDIO";
    this.bez = "MUSIK";
    this.iwd = "SPEED";
    this.zzc = "VOLLBILD";
    this.xdr = "VOLLBILD";
    this.language = "SPRACHE";
    this.dqb = "Bei GerГ¤testГ¶rung keine Haftung.";
    this.mly = "WEITER";
    this.vag = "Nicht noch einmal anzeigen";
    this.keq = "AUTOSTART";
    this.lqz = "RISIKO";
    this.wnz = "GEWINNPLAN";
    this.jvg = "Sounds kГ¶nnen nicht geladen werden!";
    this.mqc = "Ressourcen fehlen!";
    this.wvl = "Ohne Ton spielen?";
    this.lqa = "EINSTELL.";
    this.hof = "Bitte drehen sie ihr GerГ¤t!";
    this.left = "LINKS";
    this.dft = "RECHTS";
    this.ehp = "AUTOM.";
    this.rfj = "V A L U E";
    this.npf = "INFO";
    this.ych = "Bitte deaktivieren sie den PRIVATEN MODUS im Browser um das Spiel zu starten";
    this.mir = "Dieses Spiel ist optimiert fГјr Google Chrome.";
    this.fmd = "Bitte benutzen sie die aktuelle Version von";
    this.ipi = "Leider wird dieser Browser nicht unterstГјtzt.";
    this.zwz = "Dieses Spiel kann nicht im Freispiel-Modus gestartet werden!";
    this.nnw = "Drehen sie ihr GerГ¤t in den Portraitmodus, um wie auf einem echten Automaten zu spielen!";
    this.kxx = "Passe die SpieloberflГ¤che deinen BedГјrfnissen an!";
    this.php = "ZUSГ„TZLICHE INFORMATION FINDEN SIE IN DEN SPIELREGELN.";
    this.wgs = "Reality Check";
    this.kyq = "Du hast einen Reality Check angefordert.";
    this.pwh = "DrГјcke HISTORIE um deine Spielhistorie anzuzeigen.";
    this.ygw = "Spielpause";
    this.ohs = "Spiellimits";
    this.ucf = "Selbsttest";
    this.pjh = "Keine Verbindung zum Gameserver!";
    this.gzb = "Verbindungsversuche";
    this.wuu = "Anmeldung fehlgeschlagen!";
    this.hbs = "Es ist bereits eine Session aktiv!";
    this.suv = "SPIELREGELN";
    this.oww = "SPIELREGELN";
    this.fyv = "WГ„HLE DIE RICHTIGE FARBE UM DEN GEWINN ZU VERDOPPELN";
    this.zwm = "WГ„HLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.snv = "DRГњCKE RISIKO FГњR EINE CHANCE DEN GEWINN ZU VERVIELFACHEN";
    this.rye = "Statistik";
    this.qhh = "Anzahl der Spiele";
    this.hpk = "Gesamteinsatz";
    this.ank = "Gesamtgewinn";
    this.mvv = "Gesamtspielzeit";
    this.oxo = "Ich habe die Nachricht gelesen";
    this.fkv = "SPIEL|BEENDEN";
    this.ok = "OK";
    this.pir = "Historie";
    this.cnk = "Es existieren noch keine Spiele.";
    this.state = "STATUS";
    this.uuy = "Hauptspiel";
    this.shc = "Auto. Nehmen";
    this.uth = "Genommen";
    this.pga = "Bonusspins";
    this.eeb = "Risiko";
    this.qlr = "Halb";
    this.swj = "Respin";
    this.fxy = "Bonus";
    this.sdn = "Erster Deal";
    this.nnm = "Zweiter Deal";
    this.jsr = "Dritter Deal";
    this.zyj = "ABBRUCH";
    this.avk = "AUTOSTART EINSTELLUNGEN";
    this.ixv = "Anzahl der Spiele: ";
    this.cjh = "Autostart anhalten";
    this.irk = "Guthaben niedriger als:";
    this.rnf = "Guthaben hГ¶her als:";
    this.ojb = "Gewinn hГ¶her als:";
    this.saf = "Der Autostart wird am Bonusbeginn gestoppt.";
    this.ttd = "Auf Facebook teilen";
    this.trq = "DIE THEORETISCHE AUSZAHLUNG AN DEN SPIELER FГњR DIESES SPIEL BETRГ„GT XY."
}
nia.prototype = new jtr;

function ebn() {
    this.rmm = "MINIMUM BANKO";
    this.bvk = "MAKS. BANKO";
    this.haf = "MIN. BANKO";
    this.gxt = "MAKS. BANKO";
    this.afd = "BANKO";
    this.start = "BAЕћLAT";
    this.seb = "YARDIM";
    this.sxj = "KazanГ§ planД±";
    this.riw = "MENГњ";
    this.gby = "DAHA Г‡OK|OYUN";
    this.dlb = "DUR";
    this.qvw = "KREDI";
    this.yan = "OYUN BД°TTД°";
    this.stb = "KAZANDINIZ!";
    this.vkv = "BOL ЕћANSLAR!";
    this.win = "KAZANГ‡";
    this.gbd = "SON KAZANГ‡";
    this.fpy = "kazanД±r";
    this.lgz = "ALMAK";
    this.wbc = "ALMAK";
    this.oue = "RIZIKO";
    this.xjt = "OTOMATД°K|BAЕћLATMA";
    this.wsy = "YARI|RIZIKO";
    this.of = "VEREN";
    this.lzy = "Г‡IKIЕћ";
    this.flj = "BAЕћLAT TUЕћUNA BASINIZ";
    this.vvb = "BANKO SEГ‡Д°NД°Z";
    this.zzu = "ALMAK|1/2";
    this.lbm = "DEVAM ETMEK IГ‡IN KLAVYEDE HER HANGI BIR YERE BASINIZ";
    this.uef = "DEVAM ETMEK Д°Г‡Д°N EKRANA DOKUN";
    this.ret = "OYUNA|GERI";
    this.pkp = "Toplam kazanГ§";
    this.vid = "YГњKLГњYOR ...";
    this.qdr = "GEГ‡MIЕћI YГњKLГњYOR ...";
    this.hzh = "YETERSД°Z KREDД°.";
    this.lra = "Limitlerin birine ulaЕџtД±nД±z!";
    this.hjk = "Dikkat";
    this.lut = "Д°letiЕџim hatasД±";
    this.ksf = "Maksimum bedava oyun sayД±sД±na ulaЕџmД±Еџ bulunuyorsunuz!";
    this.bmi = "Oyun sonlandД±rД±lД±yor";
    this.udh = "Oyun yeniden baЕџlatД±lД±yor";
    this.sol = "Bedava oyun primi!";
    this.iuz = "PRД°M";
    this.rkb = "KAZANDINIZ";
    this.puy = "TOPLAM";
    this.nww = "LГњTFEN BEKLEYIN ...";
    this.error = "HATA";
    this.lwc = "FREEPLAY";
    this.njc = "DAHA Г‡OK OYUN";
    this.cni = "OYUN ID";
    this.jrp = "OYUN SГњRESД°";
    this.iel = "Son";
    this.zmp = "oyun";
    this.doo = "BAKIYE";
    this.audio = "AUDIO";
    this.bez = "MГњZIK";
    this.iwd = "HД±Z";
    this.zzc = "TAM EKRAN";
    this.xdr = "TAM EKRAN";
    this.language = "LISAN";
    this.dqb = "CIHAZ ARIZALANDIДћINDA MESULIYET KABUL EDILMEZ.";
    this.mly = "DEVAM";
    this.vag = "Tekrar gГ¶sterme";
    this.keq = "OTOMATД°K|BAЕћLATMA";
    this.lqz = "RIZIKO";
    this.wnz = "KazanГ§ planД±";
    this.jvg = "Sesler yГјklenemiyorlar!";
    this.mqc = "Kaynaklar eksik!";
    this.wvl = "Sessiz oynayacak mД±sД±nД±z?";
    this.lqa = "AYARLAR";
    this.hof = "LГјtfen cihazД±nД±nД± dГ¶ndГјrГјn!";
    this.left = "SOL";
    this.dft = "SAДћ";
    this.ehp = "OTOMATIK";
    this.rfj = "V A L U E";
    this.npf = "BILGI";
    this.ych = "Oyunu baЕџlatmak iГ§in lГјtfen aДџ tarayД±cД±nД±zda Г–ZEL MOD'u kapatД±nД±z.";
    this.mir = "Bu oyun Google Chrome iГ§in optimize edilmiЕџtir.";
    this.fmd = "'nin gГјncel versiyonunu kullanД±n";
    this.ipi = "Maalesef bu aДџ tarayД±cД±sД± tam olarak desteklenmiyor.";
    this.zwz = "Bu oyunun serbest modunda baЕџlatД±lmasД± mГјmkГјn deДџildir!";
    this.nnw = "CihazД±nД±zД± portre moduna Г§evirerek gerГ§ek bir otomatikte oynar gibi oynayД±n!";
    this.kxx = "Oyun yГјzeyini kendi ihtiyaГ§larД±na gГ¶re dГјzenle!";
    this.php = "DAHA FAZLA BД°LGД°YД° OYUN KURALLARINDA BULABД°LД°RSД°NД°Z.";
    this.wgs = "Reality Check";
    this.kyq = "Reality Check talebinde bulundun.";
    this.pwh = "Oyun geГ§miЕџini gГ¶rmek iГ§in GEГ‡MД°Ећ tuЕџuna bas.";
    this.ygw = "Game break";
    this.ohs = "Game limits";
    this.ucf = "Self test";
    this.pjh = "Oyun server'ine baДџlantД± yok!";
    this.gzb = "BaДџlantД± denemeleri";
    this.wuu = "GiriЕџ hatasД±!";
    this.hbs = "Aktif bir oturumunuz bulunuyor!";
    this.suv = "OYUNUN KURALLARД±";
    this.oww = "OYUNUN|KURALLARД±";
    this.fyv = "DOДћRU RENGД° SEГ‡EREK KAZANCININ Д°KД°YE KATLARSIN";
    this.zwm = "DOДћRU KART RENGД°NД° SEГ‡EREK KAZANCINI DГ–RDE KATLARSIN.";
    this.snv = "KAZANCI KATLAMA ЕћANSI Д°Г‡Д°N GAMBLE (RД°SK)";
    this.rye = "Д°statistik";
    this.qhh = "Toplam oyunlar";
    this.hpk = "Toplam bankolar";
    this.ank = "Toplam kazanГ§lar";
    this.mvv = "Toplam oyun sГјresi";
    this.oxo = "Bu mesajД± okudum.";
    this.fkv = "OYUNU|KAPAT";
    this.ok = "OK";
    this.pir = "GEГ‡MД°Ећ";
    this.cnk = "HenГјz hiГ§ bir oyun yok.";
    this.state = "STATГњ";
    this.uuy = "Ana oyun";
    this.shc = "Otomatik olarak kazandД±nД±z";
    this.uth = "ToplandД±";
    this.pga = "Prim oyunlar";
    this.eeb = "Riziko";
    this.qlr = "YarД±m";
    this.swj = "Respin";
    this.fxy = "Prim";
    this.sdn = "Д°lk anlaЕџma";
    this.nnm = "Д°kinci anlaЕџma";
    this.jsr = "ГњГ§ГјncГј anlaЕџma";
    this.zyj = "Д°PTAL";
    this.avk = "OTOMATIK BAЕћLAT AYARLARД±";
    this.ixv = "Oyun sayД±sД±:";
    this.cjh = "Otomatik baЕџlatmayД± durdur";
    this.irk = "Kredi bundan dГјЕџГјktГјr:";
    this.rnf = "Kredi bundan yГјksektir:";
    this.ojb = "KazanГ§ bundan yГјksektir:";
    this.saf = "Otomatik baЕџlatma prim baЕџlangД±cД±nda durduruluyor.";
    this.ttd = "Facebook'ta paylaЕџ";
    this.trq = "OYUNCUYA TEORIK OLARAK Г–DENECEK MEBLAДћ % XY ORANД±NDADД±R."
}
ebn.prototype = new jtr;

function zcw() {
    this.rmm = "MINIMГЃLNГЌ SГЃZKA JE";
    this.bvk = "MAX. SГЃZKA";
    this.haf = "MIN. SГЃZKA";
    this.gxt = "MAX. SГЃZKA";
    this.afd = "SГЃZKA";
    this.start = "START";
    this.seb = "POMOC";
    this.sxj = "VГќHERNГЌ PLГЃN";
    this.riw = "MENU";
    this.gby = "DALЕ ГЌ|HRY";
    this.dlb = "STOP";
    this.qvw = "KREDIT";
    this.yan = "KONEC HRY";
    this.stb = "VГЌTEZ!";
    this.vkv = "HODNE Е TESTГЌ!";
    this.win = "VГќHRA";
    this.gbd = "POSL. VГќHRA";
    this.fpy = "vyhrГЎvГЎ";
    this.lgz = "VEZMI";
    this.wbc = "VEZMI";
    this.oue = "HRA";
    this.xjt = "AUTO|START";
    this.wsy = "POLOVICNГЌ|HRA";
    this.of = "Z";
    this.lzy = "VГќSTUP";
    this.flj = "START HRY";
    this.vvb = "VYBRAT SГЃZKU";
    this.zzu = "POLOVINA";
    this.lbm = "POKRACUJ DOTEKEM OBRAZOVKY";
    this.uef = "PRO POKRAДЊOVГЃNГЌ SE DOTKNДљTE OBRAZOVKY";
    this.ret = "ZPET|DO HRY";
    this.pkp = "CelkovГЎ vГЅhra";
    this.vid = "NAHRГЃVГЃM ...";
    this.qdr = "NAHRГЃVГЃM HISTORII ...";
    this.hzh = "NedostatecnГЅ kredit.";
    this.lra = "DosГЎhli jste jednoho z limitЕЇ!";
    this.hjk = "VarovГЎnГ­";
    this.lut = "Chyba komunikace";
    this.ksf = "DosГЎhli jste maximГЎlnГ­ho poДЌtu her zdarma!";
    this.bmi = "Hra se zavЕ™e";
    this.udh = "Hra se restartuje";
    this.sol = "Bonus!";
    this.iuz = "BONUS";
    this.rkb = "VYHRГЃL";
    this.puy = "CELKOVГЃ";
    this.nww = "ДЊEKEJTE PROSГЌM ...";
    this.error = "ERROR";
    this.lwc = "FREEPLAY";
    this.njc = "DALЕ ГЌ HRY";
    this.cni = "ID HRY";
    this.jrp = "HRACГЌ DOBA";
    this.iel = "PoslednГ­";
    this.zmp = "hry";
    this.doo = "MГЌT K DOBRU";
    this.audio = "AUDIO";
    this.bez = "MUZIKA";
    this.iwd = "RYCHLOST";
    this.zzc = "FULLSCREEN";
    this.xdr = "FULLSCREEN";
    this.language = "ЕEДЊ";
    this.dqb = "PЕ™i poruЕЎe jsou vЕЎechny hry a vГЅhry neplatnГ©.";
    this.mly = "POKRAДЊUJ";
    this.vag = "Nezobrazujte znovu";
    this.keq = "AUTOSTART";
    this.lqz = "HRA";
    this.wnz = "VГќHERNГЌ PLГЃN";
    this.jvg = "Zvuk nelze nahrГЎt!";
    this.mqc = "ChybГ­ zdroje!";
    this.wvl = "HrГЎt bez zvuku?";
    this.lqa = "NASTAVENГЌ";
    this.rfj = "V A L U E";
    this.hof = "OtoДЌte svГ© zaЕ™Г­zenГ­, prosГ­m!";
    this.left = "VLEVO";
    this.dft = "VPRAVO";
    this.ehp = "AUTO";
    this.npf = "INFORMACE";
    this.ych = "Abyste mohli hrГЎt hru, vypnД›te SOUKROMГќ REЕЅIM ve svГ©m prohlГ­ЕѕeДЌi, prosГ­m.";
    this.mir = "Tato hra je optimalizovanГЎ pro Google Chrome.";
    this.fmd = "PouЕѕijte aktuГЎlnГ­ verzi";
    this.ipi = "Tento prohlГ­ЕѕeДЌ nenГ­ bohuЕѕel plnД› podporovГЎn.";
    this.zwz = "Tuto hru nelze spustit v reЕѕimu hry zdarma!";
    this.nnw = "OtoДЌte zaЕ™Г­zenГ­ tak, aby zobrazilo hru jako na skuteДЌnГ©m automatu!";
    this.kxx = "Nastavte rozhranГ­ hry svГЅm potЕ™ebГЎm!";
    this.php = "VГЌCE INFORMACГЌ NALEZNETE V PRAVIDLECH HRY.";
    this.wgs = "Reality Check";
    this.kyq = "PoЕѕГЎdali jste o kontrolu reality.";
    this.pwh = "Pro zobrazenГ­ vaЕЎГ­ hernГ­ historie stisknД›te HISTORIE.";
    this.ygw = "Game break";
    this.ohs = "Game limits";
    this.ucf = "Self test";
    this.pjh = "ЕЅГЎdnГ© pЕ™ipojenГ­ k hernГ­mu serveru!";
    this.gzb = "Pokusy o pЕ™ipojenГ­";
    this.wuu = "PЕ™ihlГЎЕЎenГ­ se nezdaЕ™ilo!";
    this.hbs = "AktivnГ­ relace jiЕѕ existuje!";
    this.suv = "PRAVIDLA HRY";
    this.oww = "PRAVIDLA HRY";
    this.fyv = "VYBRAT SPRГЃVNOU BARVU KE ZDVOJNГЃSOBENГЌ VГќHRY";
    this.zwm = "VYBRAT SPRГЃVNOU BARVU KARTY KE ZДЊTYЕNГЃSOBENГЌ VГќHRY";
    this.snv = "VSADIT NA Е ANCI ZVГќЕ IT VГќHRU";
    this.rye = "Statistika";
    this.qhh = "Celkem hry";
    this.hpk = "Celkem sГЎzky";
    this.ank = "Celkem vГЅhry";
    this.mvv = "CelkovГЎ hracГ­ doba";
    this.oxo = "ZprГЎvu jsem ДЌetl/a.";
    this.fkv = "UKONДЊIT|HRU";
    this.ok = "OK";
    this.pir = "HISTORIE";
    this.cnk = "ЕЅГЎdnГ© odehranГ© hry.";
    this.state = "STATUS";
    this.uuy = "HlavnГ­ hra";
    this.shc = "Automaticky vybrГЎno";
    this.uth = "VybrГЎno";
    this.pga = "Bonusspins";
    this.eeb = "Hra";
    this.qlr = "Polovina";
    this.swj = "Respin";
    this.fxy = "Bonus";
    this.sdn = "PrvnГ­ vyloЕѕenГ­";
    this.nnm = "DruhГ© vyloЕѕenГ­";
    this.jsr = "TЕ™etГ­ vyloЕѕenГ­";
    this.zyj = "ZRUЕ IT";
    this.avk = "NASTAVENГЌ AUTOMATICKГ‰HO STARTU";
    this.ixv = "MnoЕѕstvГ­ her:";
    this.cjh = "Zastavit automatickГЅ start";
    this.irk = "Kredit niЕѕЕЎГ­ neЕѕ:";
    this.rnf = "Kredit vyЕЎЕЎГ­ neЕѕ:";
    this.ojb = "VГЅhra vyЕЎЕЎГ­ neЕѕ:";
    this.saf = "AutomatickГЅ start se zastavГ­ na zaДЌГЎtku bonusu.";
    this.ttd = "SdГ­let na Facebooku";
    this.trq = "TEORETICKГЃ NГЃVRATNOST HRГЃДЊI V TГ‰TO HЕE JE XY."
}
zcw.prototype = new jtr;

function lie() {
    this.rmm = "MIINIMUMPANUS ON";
    this.bvk = "MAX PANUS";
    this.haf = "MIN PANUS";
    this.gxt = "MAX PANUS";
    this.afd = "PANUS";
    this.start = "START";
    this.seb = "ABI";
    this.sxj = "VГ•IDU TABEL";
    this.riw = "MENГњГњ";
    this.gby = "VALI|MГ„NG";
    this.dlb = "STOPP";
    this.qvw = "KREDIIT";
    this.yan = "MГ„NG ON LГ•PPENUD!";
    this.stb = "OLED VГ•ITNUD!";
    this.vkv = "SOOVIME EDU!";
    this.win = "VГ•IT";
    this.gbd = "EELMINE VГ•IT";
    this.lgz = "VГ•TA|VГ•IT";
    this.wbc = "VГ•TA VГ•IT";
    this.oue = "DUUBEL|DAMINE";
    this.xjt = "AUTO|START";
    this.wsy = "POOLITA|DUUBELDA";
    this.of = "OF";
    this.lzy = "VГ„LJA";
    this.flj = "ALUSTA MГ„NGU";
    this.vvb = "VALI PANUS";
    this.zzu = "POOLIK";
    this.lbm = "JГ„TKAMISEKS VAJUTAGE ГњKSKГ•IK MILLIST NUPPU";
    this.ret = "TAGASI|MГ„NGU";
    this.pkp = "KoguvГµit";
    this.hzh = "POLE PIISAVALT KREDIITI.";
    this.sol = "Boonus!";
    this.iuz = "BOONUS";
    this.nww = "PALUN OODAKE ...";
    this.njc = "Vali MГ¤ng";
    this.audio = "HELI";
    this.bez = "MUUSIKA";
    this.iwd = "KIIRUS";
    this.zzc = "TГ„ISEKRAAN";
    this.xdr = "TГ„ISEKRAAN";
    this.dqb = "RIKKE KORRAL KГ•IK MГ„NGUD JA VГ•IDUD TГњHISTATAKSE.";
    this.xsg = "MГ„NGU LГ•PP";
    this.language = "KEEL";
    this.suv = "MГ„NGUREEGLID";
    this.oww = "MГ„NGUREEGLID";
    this.vid = "LAADIMINE ...";
    this.qdr = "AJALOO LAADIMINE ...";
    this.lra = "Oled saavutanud Гјhe limiitidest!";
    this.hjk = "Hoiatus";
    this.lut = "Гњhenduse viga";
    this.ksf = "Te olete jГµudnud tasuta mГ¤ngude maksimaalse arvuni!";
    this.bmi = "MГ¤ng suletakse";
    this.udh = "MГ¤ng taaskГ¤ivitatakse";
    this.uef = "JГ„TKAMISEKS PUUDUTA EKRAANI";
    this.lqa = "SГ„TTED";
    this.rfj = "V A L U E";
    this.hof = "PГ¶Г¶rake oma seadet!";
    this.npf = "INFO";
    this.ych = "MГ¤ngu mГ¤ngimiseks keelake oma brauseris PRIVAATREЕЅIIM.";
    this.mir = "See mГ¤ng on optimeeritud Google Chrome jaoks.";
    this.fmd = "Palun kasutage praeguse versiooni";
    this.ipi = "Kahjuks ei toetata seda brauserit tГ¤ielikult.";
    this.zwz = "Seda mГ¤ngu ei saa tasuta mГ¤ngimise reЕѕiimis kГ¤ivitada!";
    this.left = "VASAK";
    this.dft = "PAREM";
    this.ehp = "AUTOMAATNE";
    this.rkb = "VГ•ITIS";
    this.fpy = "vГµidetud";
    this.puy = "KOKKU";
    this.error = "VIGA";
    this.lwc = "TASUTA MГ„NG";
    this.cni = "MГ„NGU ID";
    this.jrp = "MГ„NGUAEG";
    this.iel = "Viimased";
    this.zmp = "mГ¤ngu";
    this.doo = "SISSEMAKSE";
    this.fyv = "VГ•IDU DUUBELDAMISEKS VALI Г•IGE VГ„RV";
    this.zwm = "VГ•IDU NELJAKORDISTAMISEKS VALI Г•IGE MAST";
    this.snv = "RISKI, ET SUURENDADA OMA VГ•ITU";
    this.rye = "Statistika";
    this.qhh = "MГ¤nge kokku";
    this.hpk = "Kogupanus";
    this.ank = "KoguvГµit";
    this.mvv = "MГ¤nguaeg kokku";
    this.oxo = "Olen seda teadet lugenud.";
    this.fkv = "MГ„NGU|LГ•PP";
    this.pir = "Ajalugu";
    this.cnk = "Гњhtegi mГ¤ngu ei ole mГ¤ngitud.";
    this.state = "OLEK";
    this.uuy = "PГµhimГ¤ng";
    this.shc = "Automaatne vГ¤ljavГµtt";
    this.uth = "VГ¤lja vГµetud";
    this.pga = "Bonusspins";
    this.eeb = "Gamble";
    this.qlr = "Pool";
    this.swj = "Respin";
    this.fxy = "Boonus";
    this.sdn = "Esimene jagamine";
    this.nnm = "Teine jagamine";
    this.jsr = "Kolmas jagamine";
    this.mly = "JГ„TKA";
    this.vag = "Г„ra seda enam nГ¤ita";
    this.keq = "AUTOSTART";
    this.lqz = "DUUBEL DAMINE";
    this.wnz = "VГ•IDU TABEL";
    this.jvg = "Helisid ei saa laadida!";
    this.mqc = "Ressursid puuduvad!";
    this.wvl = "Soovid mГ¤ngida ilma helideta?";
    this.nnw = "Keera seade vertikaalasendisse, et mГ¤ngida nagu pГ¤ris mГ¤nguautomaadil!";
    this.kxx = "Kohanda mГ¤nguliidest vastavalt oma vajadustele!";
    this.php = "VAATA LISAINFOT MГ„NGUREEGLITEST.";
    this.zyj = "TГњHISTA";
    this.avk = "AUTOMAATKГ„IVITUSE SГ„TTED";
    this.ixv = "MГ¤ngude arv:";
    this.cjh = "Peata automaatkГ¤ivitus";
    this.irk = "Krediit madalam kui:";
    this.rnf = "Krediit kГµrgem kui:";
    this.ojb = "VГµit suurem kui:";
    this.saf = "AutomaatkГ¤ivitus peatatakse boonuse alguses.";
    this.ttd = "Jaga Facebookis";
    this.ok = "OK";
    this.wgs = "Reality Check";
    this.kyq = "Olete soovinud reaalsuskontrolli.";
    this.pwh = "Oma mГ¤nguajaloo vaatamiseks vajutage AJALUGU.";
    this.ygw = "Game break";
    this.ohs = "Game limits";
    this.ucf = "Self test";
    this.pjh = "Puudub Гјhendus mГ¤nguserveriga!";
    this.gzb = "Гњhenduskatsed";
    this.wuu = "Sisselogimine nurjus!";
    this.hbs = "Aktiivne seanss on juba olemas!";
    this.trq = "SELLE MГ„NGU MГ„NGIJA TEOREETILINE TULU ON XY."
}
lie.prototype = new jtr;

function gvw() {
    this.rmm = "О¤Оџ О•О›AО§О™ОЈО¤Оџ ОЈО¤ОџIО§О—ОњО‘ О•IОќО‘О™";
    this.bvk = "ОњEО“О™ОЈО¤Оџ ОЈО¤ОџIО§О—ОњО‘";
    this.haf = "EО›О‘О§. ОЈО¤ОџО™О§О—ОњО‘";
    this.gxt = "ОњО•О“. ОЈО¤ОџО™О§О—ОњО‘";
    this.afd = "ОЈО¤ОџIО§О—ОњО‘";
    this.start = "EОќО‘ОЎОћО—";
    this.seb = "О’ОџHОО•О™О‘";
    this.sxj = "О IОќО‘ОљО‘ОЈ ОљО•ОЎО”О©Оќ";
    this.riw = "ОњО•ОќОџY";
    this.gby = "О О•ОЎО™ОЈ.|О О‘О™О§ОќIО”О™О‘";
    this.dlb = "ОЈО¤ОџО ";
    this.qvw = "О IОЈО¤О©ОЈО—";
    this.yan = "TEО›ОџОЈ О О‘О™О§ОќО™О”О™ОџY!";
    this.stb = "ОќО™ОљО—О¤О—ОЈ!";
    this.vkv = "ОљО‘О›О— О¤ОҐО§О—!";
    this.win = "ОљEОЎО”ОџОЈ";
    this.gbd = "О¤О•О›О•ОҐО¤О‘IОџ ОљEОЎО”ОџОЈ";
    this.lgz = "О О‘ОЎО‘О›О‘О’H";
    this.wbc = "О О‘ОЎО‘О›О‘О’H";
    this.oue = "О¤О–ОџО“AОЎО©";
    this.xjt = "О‘ОҐО¤OОњО‘О¤О—|EОќО‘ОЎОћО—";
    this.wsy = "О О‘ОЎО‘О›О‘О’H|О¤О–ОџО“AОЎО©";
    this.of = "О‘О O";
    this.lzy = "EОћОџО”ОџОЈ";
    this.flj = "О‘ОЎО§О™О–О•О™ О О‘О™О§ОќО™О”О™";
    this.vvb = "О•О О™О›О•ОћО¤О• ОЈО¤ОџО™О§О—ОњО‘";
    this.zzu = "О О‘ОЎО‘О›О‘О’H|1/2";
    this.lbm = "О AО¤О—ОЈО• EОќО‘ О О›HОљО¤ОЎОџ О“О™О‘ ОќО‘ ОЈОҐОќО•О§IОЈО•О™ОЈ";
    this.ret = "EО О™ОЈО¤ОЎОџО¦H|ОЈО¤Оџ|О О‘О™О§ОќIО”О™";
    this.pkp = "ОЈОҐОќОџО›О™ОљO ОљEОЎО”ОџОЈ";
    this.hzh = "О”О•Оќ О‘ОЎОљО•О¤H О IОЈО¤О©ОЈО—.";
    this.sol = "ОњПЂПЊОЅОїП…Пѓ!";
    this.iuz = "ОњО OОќОџОҐОЈ";
    this.nww = "О О‘ОЎО‘ОљО‘О›О© О О•ОЎО™ОњEОќО•О¤О• ...";
    this.njc = "О О•ОЎО™ОЈ.|О О‘О™О§ОќIО”О™О‘";
    this.audio = "О—О§ОџОЈ";
    this.bez = "ОњОџОҐОЈО™ОљО‰";
    this.iwd = "О¤О‘О§YО¤О—О¤О‘";
    this.zzc = "О О›О—ОЎО—ОЈ ОџООџОќО—";
    this.xdr = "О О›О—ОЎО—ОЈ|ОџООџОќО—";
    this.dqb = "ОЈО• О О•ОЎО™О О¤О©ОЈО— О’О›О‘О’О—ОЈ О¤О—ОЈ ОЈОҐОЈОљО•ОҐО—ОЈ О”О•Оќ О‘ОќО‘О›О‘ОњО’О‘ОќОџОҐОњО• ОљО‘ОњО™О‘ О•ОҐООҐОќО—.";
    this.language = "О“О›О©ОЈОЈО‘";
    this.puy = "ОЈYОќОџО›Оџ";
    this.suv = "ОљО‘ОќОЊОќО•П‚ О О‘О™О§ОќО™О”О™ОџОЋ";
    this.oww = "ОљО‘ОќОЊОќО•П‚|О О‘О™О§ОќО™О”О™ОџОЋ";
    this.vid = "О¦ОџОЎО¤О©ОЈО— ...";
    this.qdr = "О¦ОџОЎО¤О©ОЈО— О™ОЈО¤ОџОЎО™ОљОџОҐ...";
    this.lra = "ОћОµПЂОµПЃО¬ПѓО±П„Оµ ОєО¬ПЂОїО№Ої ПЊПЃО№Ої!";
    this.hjk = "О ПЃОїОµО№ОґОїПЂОїОЇО·ПѓО·";
    this.lut = "ОЈП†О¬О»ОјО± ОµПЂО№ОєОїО№ОЅП‰ОЅОЇО±П‚";
    this.ksf = "О¦П„О¬ПѓО±П„Оµ ПѓП„Ої О±ОЅПЋП„О±П„Ої ПЊПЃО№Ої ОґП‰ПЃОµО¬ОЅ ПЂО±О№П‡ОЅО№ОґО№ПЋОЅ!";
    this.bmi = "О¤Ої ПЂО±О№П‡ОЅОЇОґО№ ОёО± П„ОµПЃОјО±П„О№ПѓП„ОµОЇ";
    this.udh = "О¤Ої ПЂО±О№П‡ОЅОЇОґО№ ОёО± ОµОєОєО№ОЅО·ОёОµОЇ ОµОє ОЅО­ОїП…";
    this.uef = "О‘О“О“О™ОћО¤О• О¤О—Оќ ОџООџОќО— О“О™О‘ ОќО‘ ОЈОҐОќО•О§О™ОЈО•О¤О•";
    this.lqa = "ОЎОҐООњО™ОЈО•О™ОЈ";
    this.rfj = "V A L U E";
    this.hof = "О О±ПЃО±ОєО±О»ОїПЌОјОµ, ПЂОµПЃО№ПѓП„ПЃО­П€П„Оµ П„О· ПѓП…ПѓОєОµП…О® ПѓО±П‚!";
    this.npf = "О О›О—ОЎОџО¦ОџОЎОЉО•П‚";
    this.ych = "О О±ПЃО±ОєО±О»ОїПЌОјОµ, О±ПЂОµОЅОµПЃОіОїПЂОїО№О®ПѓП„Оµ П„О· О»ОµО№П„ОїП…ПЃОіОЇО± PRIVATE MODE П„ОїП… ПЂПЃОїОіПЃО¬ОјОјО±П„ОїП‚ ПЂОµПЃО№О®ОіО·ПѓО·П‚, ПЂПЃОїОєОµО№ОјО­ОЅОїП… ОЅО± ОµОєОєО№ОЅО·ОёОµОЇ П„Ої ПЂО±О№П‡ОЅОЇОґО№.";
    this.mir = "О‘П…П„ПЊ П„Ої ПЂО±О№П‡ОЅОЇОґО№ О­П‡ОµО№ ОІОµО»П„О№ПѓП„ОїПЂОїО№О·ОёОµОЇ ОіО№О± Google Chrome.";
    this.fmd = "О О±ПЃО±ОєО±О»ОїПЌОјОµ, П‡ПЃО·ПѓО№ОјОїПЂОїО№О®ПѓП„Оµ П„О·ОЅ П„ПЃО­П‡ОїП…ПѓО± О­ОєОґОїПѓО· П„ОїП…";
    this.ipi = "О”П…ПѓП„П…П‡ПЋП‚, О±П…П„ПЊ П„Ої ПЂПЃПЊОіПЃО±ОјОјО± ПЂОµПЃО№О®ОіО·ПѓО·П‚ ОґОµОЅ П…ПЂОїПѓП„О·ПЃОЇО¶ОµП„О±О№ ПЂО»О®ПЃП‰П‚.";
    this.zwz = "О‘П…П„ПЊ П„Ої ПЂО±О№П‡ОЅОЇОґО№ ОґОµОЅ ОјПЂОїПЃОµОЇ ОЅО± ОґО№ОµОѕО±П‡ОёОµОЇ ПѓП„О· ОґП‰ПЃОµО¬ОЅ О»ОµО№П„ОїП…ПЃОіОЇО±!";
    this.left = "О‘ОЎО™ОЈО¤О•ОЎA";
    this.dft = "О”О•ОћО™A";
    this.ehp = "AОҐО¤OОњО‘О¤Оџ";
    this.rkb = "ОљEОЎО”О™ОЈО•";
    this.fpy = "ОєОµПЃОґОЇО¶ОµО№";
    this.error = "ОЈО¦О‘О›ОњО‘";
    this.lwc = "О”О©ОЎО•AОќ О О‘О™О§ОќIО”О™";
    this.cni = "О¤О‘ОҐО¤ОџО¤О—О¤О‘ О О‘О™О§ОќО™О”О™ОџОҐ";
    this.jrp = "О§ОЎОџОќОџОЈ О О‘О™О§ОќО™О”О™ОџОҐ";
    this.iel = "О¤ОµО»ОµП…П„О±ОЇО±";
    this.zmp = "ПЂО±О№П‡ОЅОЇОґО№О±";
    this.doo = "О О™ОЈО¤О©О¤О™ОљO ОҐО OО›ОџО™О Оџ";
    this.fyv = "О•О О™О›О•ОћО¤О• О¤Оџ ОЈО©ОЈО¤Оџ О§ОЎО©ОњО‘ О“О™О‘ ОќО‘ О”О™О О›О‘ОЈО™О‘ОЈО•О¤О• О¤Оџ ОљО•ОЎО”ОџОЈ ОЈО‘ОЈ";
    this.zwm = "О•О О™О›О•ОћО¤О• О¤Оџ ОЈО©ОЈО¤Оџ О§ОЎО©ОњО‘ О¦ОҐО›О›ОџОҐ О“О™О‘ ОќО‘ О¤О•О¤ОЎО‘О О›О‘ОЈО™О‘ОЈО•О¤О• О¤Оџ ОљО•ОЎО”ОџОЈ ОЈО‘ОЈ";
    this.snv = "О ОџОќО¤О‘ОЎО•О¤О• О“О™О‘ ОќО‘ О•О§О•О¤О• О¤О—Оќ О•ОҐОљО‘О™ОЎО™О‘ О ОџО›О›О‘О О›О‘ОЈО™О‘ОЈОњОџОҐ О¤ОџОҐ ОљО•ОЎО”ОџОҐОЈ ОЈО‘ОЈ";
    this.rye = "ОЈП„О±П„О№ПѓП„О№ОєО¬";
    this.qhh = "ОЈПЌОЅОїО»Ої ПЂО±О№П‡ОЅО№ОґО№ПЋОЅ";
    this.hpk = "ОЈП…ОЅОїО»О№ОєПЊ ПЂОїОЅП„О¬ПЃО№ПѓОјО±";
    this.ank = "ОЈП…ОЅОїО»О№ОєПЊ ОєО­ПЃОґОїП‚";
    this.mvv = "ОЈП…ОЅОїО»О№ОєПЊП‚ П‡ПЃПЊОЅОїП‚ ПЂО±О№П‡ОЅО№ОґО№ОїПЌ";
    this.oxo = "EП‡П‰ ОґО№О±ОІО¬ПѓОµО№ П„Ої ОјО®ОЅП…ОјО±.";
    this.fkv = "О›О—ОћО—|О О‘О™О§ОќО™О”О™ОџОҐ";
    this.pir = "О™ОЈО¤ОџОЎО™ОљОџ";
    this.cnk = "О‘ОєПЊОјО· ОґОµОЅ П…ПЂО¬ПЃП‡ОµО№ ОєО¬ПЂОїО№Ої ПЂО±О№П‡ОЅОЇОґО№.";
    this.state = "ОљО‘О¤AОЈО¤О‘ОЈО—";
    this.uuy = "ОљПЌПЃО№Ої ПЂО±О№П‡ОЅОЇОґО№";
    this.shc = "О‘П…П„ПЊОјО±П„О· О»О®П€О·";
    this.uth = "О•О»О®П†ОёО·ПѓО±ОЅ";
    this.pga = "Bonusspins";
    this.eeb = "О¤О¶ОїОіО¬ПЃП‰";
    this.qlr = "HОјО№ПѓП…";
    this.swj = "Respin";
    this.fxy = "ОњПЂПЊОЅОїП…Пѓ";
    this.sdn = "О ПЃПЋП„Ої ОјОїОЇПЃО±ПѓОјО±";
    this.nnm = "О”ОµПЌП„ОµПЃОї ОјОїОЇПЃО±ПѓОјО±";
    this.jsr = "О¤ПЃОЇП„Ої ОјОїОЇПЃО±ПѓОјО±";
    this.mly = "ОЈОҐОќО€О§О•О™О‘";
    this.vag = "ОќО± ОјО·ОЅ ПЂПЃОїОІО»О·ОёОµОЇ ОѕО±ОЅО¬";
    this.keq = "О‘ОҐО¤ОџОњО‘О¤О—|О•ОќО‘ОЎОћО—";
    this.lqz = "О¤О–ОџО“AОЎО©";
    this.wnz = "О IОќО‘ОљО‘ОЈ ОљО•ОЎО”О©Оќ";
    this.jvg = "О— П†ПЊПЃП„П‰ПѓО· О®П‡П‰ОЅ ОґОµОЅ ОµОЇОЅО±О№ ОµП†О№ОєП„О®!";
    this.mqc = "О›ОµОЇПЂОїП…ОЅ ПЂПЊПЃОїО№!";
    this.wvl = "О О±О№П‡ОЅОЇОґО№ П‡П‰ПЃОЇП‚ О®П‡Ої?";
    this.nnw = "О“П…ПЃОЇПѓП„Оµ П„О· ПѓП…ПѓОєОµП…О® ПѓО±П‚ ПѓОµ О»ОµО№П„ОїП…ПЃОіОЇО± ПЂОїПЃП„ПЃО­П„ОїП… ОіО№О± ОЅО± ПЂО±ОЇОѕОµП„Оµ ПЊПЂП‰П‚ ПѓОµ ОјО№О± ПЂПЃО±ОіОјО±П„О№ОєО® ОјО·П‡О±ОЅО® slot!";
    this.kxx = "О ПЃОїПѓО¬ПЃОјОїПѓОµ П„О·ОЅ ОµПЂО№П†О¬ОЅОµО№О± ОµПЃОіО±ПѓОЇО±П‚ ПѓП„О№П‚ ПЂПЃОїП„О№ОјО®ПѓОµО№П‚ ПѓОїП…!";
    this.php = "О“О™О‘ О О•ОЎО™ОЈОЈОЊО¤О•ОЎО•ОЈ О О›О—ОЎОџО¦ОџОЎОЉО•ОЈ, О”О•ОЉО¤О• О¤ОџОҐОЈ ОљО‘ОќОџОќО™ОЈОњОџОЋОЈ О¤ОџОҐ О О‘О™О§ОќО™О”О™ОџОЋ.";
    this.zyj = "О‘ОљОЋОЎО©ОЈО—";
    this.avk = "ОЎОҐООњО‰ОЈО•О™П‚ AUTOSTART";
    this.ixv = "О‘ПЃО№ОёОјПЊП‚ ПЂО±О№П‡ОЅО№ОґО№ПЋОЅ:";
    this.cjh = "О”О№О±ОєОїПЂО® autostart";
    this.irk = "ОњОїОЅО¬ОґОµП‚ П‡О±ОјО·О»ПЊП„ОµПЃО± О±ПЂПЊ:";
    this.rnf = "ОњОїОЅО¬ОґОµП‚ П…П€О·О»ПЊП„ОµПЃОµП‚ О±ПЂПЊ:";
    this.ojb = "ОљО­ПЃОґОїП‚ П…П€О·О»ПЊП„ОµПЃОї О±ПЂПЊ:";
    this.saf = "О¤Ої autostart ОёО± ПѓП„О±ОјО±П„О®ПѓОµО№ ОјОµ П„Ої ОѕОµОєОЇОЅО·ОјО± П„ОїП… ОјПЂПЊОЅОїП…П‚.";
    this.ttd = "ОљОїО№ОЅОїПЂОїОЇО·ПѓО· ПѓП„Ої Facebook";
    this.ok = "OK";
    this.wgs = "О­О»ОµОіП‡Ої ПЂПЃО±ОіОјО±П„О№ОєПЊП„О·П„О±П‚";
    this.kyq = "О–О·П„О®ПѓО±П„Оµ П„ОїОЅ О­О»ОµОіП‡Ої ПЂПЃО±ОіОјО±П„О№ОєПЊП„О·П„О±П‚.";
    this.pwh = "О О±П„О®ПѓП„Оµ П„Ої О™ОЈО¤ОџОЎО™ОљОџ ОіО№О± ОЅО± ОґОµОЇП„Оµ П„Ої О№ПѓП„ОїПЃО№ОєПЊ П„П‰ОЅ ПЂО±О№П‡ОЅО№ОґО№ПЋОЅ ПѓО±П‚.";
    this.ygw = "Game break";
    this.ohs = "Game limits";
    this.ucf = "Self test";
    this.pjh = "О”ОµОЅ П…ПЂО¬ПЃП‡ОµО№ ПѓПЌОЅОґОµПѓО· ОјОµ П„Ої ОґО№О±ОєОїОјО№ПѓП„О® ПЂО±О№П‡ОЅО№ОґО№ОїПЌ!";
    this.gzb = "О ПЃОїПѓПЂО¬ОёОµО№ОµП‚ ПѓПЌОЅОґОµПѓО·П‚";
    this.wuu = "О— ПѓПЌОЅОґОµПѓО· О±ПЂО­П„П…П‡Оµ!";
    this.hbs = "О— ОµОЅОµПЃОіО® ПѓП…ОЅОµОґПЃОЇО± П…ПЂО¬ПЃП‡ОµО№ О®ОґО·!";
    this.trq = "О— ОО•О©ОЎО—О¤О™ОљО‰ О•О О™ОЈО¤ОЎОџО¦О‰ ОЈО¤ОџОќ О О‘ОЉОљО¤О— О“О™О‘ О‘ОҐО¤ОЊ О¤Оџ О О‘О™О§ОќОЉО”О™ О•ОЉОќО‘О™ XY."
}
gvw.prototype = new jtr;

function bqh() {
    this.rmm = "РњРРќ. Р—РђР›РћР“ Р•";
    this.bvk = "РњРђРљРЎ. Р—РђР›РћР“";
    this.haf = "РњРРќРРњ. Р—РђР›РћР“";
    this.gxt = "РњРђРљРЎ. Р—РђР›РћР“";
    this.afd = "Р—РђР›РћР“";
    this.start = "РЎРўРђР Рў";
    this.seb = "РџРћРњРћР©";
    this.sxj = "РџР›РђРќ РќРђ|РџР•Р§РђР›Р‘РРўР•";
    this.riw = "РњР•РќР®";
    this.gby = "РџРћР’Р•Р§Р•|РР“Р Р";
    this.dlb = "РЎРўРћРџ";
    this.qvw = "РљР Р•Р”РРў";
    this.yan = "РР“Р РђРўРђ Р—РђР’РЄР РЁР";
    this.stb = "РџР•Р§Р•Р›РРўР•!";
    this.vkv = "РЈРЎРџР•РҐ!";
    this.win = "РџР•Р§РђР›Р‘Рђ";
    this.gbd = "РџРћРЎР›.РџР•Р§РђР›Р‘Рђ";
    this.lgz = "РџР РР‘РР РђРќР•";
    this.wbc = "РџР РР‘РР РђРќР•";
    this.oue = "Р”РЈР‘Р›РР РђРќР•";
    this.xjt = "РђР’РўРћ|РЎРўРђР Рў";
    this.wsy = "Р”Р•Р›Р•РќР•|Р”РЈР‘Р›.";
    this.of = "РћРў";
    this.lzy = "РР—РҐРћР”";
    this.flj = "Р—РђРџРћР§РќР•РўР• РР“Р РђРўРђ";
    this.vvb = "РР—Р‘Р•Р Р•РўР• Р—РђР›РћР“";
    this.zzu = "Р”Р•Р›Р•РќР•";
    this.lbm = "РќРђРўРРЎРќР•РўР• РќРЇРљРћР™ Р‘РЈРўРћРќ Р—Рђ Р”Рђ РџР РћР”РЄР›Р–РРўР•";
    this.ret = "Р’Р РЄР©РђРќР•|РљРЄРњ|РР“Р РђРўРђ";
    this.pkp = "РћР‘Р©Рђ РџР•Р§РђР›Р‘Рђ";
    this.hzh = "РќР• Р”РћРЎРўРђРўРЄР§Р•Рќ РљР Р•Р”РРў.";
    this.sol = "Р‘РѕРЅСѓСЃ!";
    this.iuz = "Р‘РћРќРЈРЎ";
    this.nww = "РњРћР›РЇ РР—Р§РђРљРђР™РўР• ...";
    this.njc = "РџРѕРІРµС‡Рµ РРіСЂРё";
    this.iwd = "РўРЈР Р‘Рћ";
    this.dqb = "РџРћР’Р Р•Р”Рђ РђРќРЈР›РР Рђ Р’РЎРР§РљР Р—РђР›РђР“РђРќРРЇ Р РџР›РђР©РђРќРРЇ.";
    this.language = "Р•Р—РРљ";
    this.suv = "РџР РђР’РР›Рђ РќРђ РР“Р РђРўРђ";
    this.oww = "РџР РђР’РР›Рђ|РќРђ РР“Р РђРўРђ";
    this.vid = "Р—РђР Р•Р–Р”РђРќР• ...";
    this.qdr = "Р—РђР Р•Р–Р”РђРќР• РќРђ РРЎРўРћР РРЇ ...";
    this.lra = "Р”РѕСЃС‚РёРіРЅР° РµРґРёРЅ РѕС‚ Р»РёРјРёС‚РёС‚Рµ!";
    this.hjk = "РџСЂРµРґСѓРїСЂРµР¶РґРµРЅРёРµ";
    this.lut = "РљРѕРјСѓРЅРёРєР°С†РёРѕРЅРЅР° РіСЂРµС€РєР°";
    this.ksf = "Р”РѕСЃС‚РёРіРЅР°Р»Рё СЃС‚Рµ РјР°РєСЃРёРјР°Р»РЅРёСЏ Р±СЂРѕР№ Р±РµР·РїР»Р°С‚РЅРё РёРіСЂРё!";
    this.bmi = "РРіСЂР°С‚Р° С‰Рµ Р±СЉРґРµ Р·Р°С‚РІРѕСЂРµРЅР°";
    this.udh = "РРіСЂР°С‚Р° С‰Рµ Р±СЉРґРµ СЂРµСЃС‚Р°СЂС‚РёСЂР°РЅР°";
    this.uef = "Р”РћРљРћРЎРќР•РўР• Р•РљР РђРќРђ, Р—Рђ Р”Рђ РџР РћР”РЄР›Р–РРўР•";
    this.lqa = "РќРђРЎРўР РћР™РљР";
    this.rfj = "V A L U E";
    this.hof = "РњРѕР»СЏ, РІРєР»СЋС‡РµС‚Рµ СѓСЃС‚СЂРѕР№СЃС‚РІРѕС‚Рѕ!";
    this.npf = "РРќР¤РћР РњРђР¦РРЇ";
    this.ych = "РњРѕР»СЏ, РґРµР°РєС‚РёРІРёСЂР°Р№С‚Рµ Р§РђРЎРўР•Рќ Р Р•Р–РРњ РЅР° Р±СЂР°СѓР·СЉСЂР°, Р·Р° РґР° РёРіСЂР°РµС‚Рµ РёРіСЂР°С‚Р°.";
    this.mir = "РўР°Р·Рё РёРіСЂР° Рµ РѕРїС‚РёРјРёР·РёСЂР°РЅР° Р·Р° Google Chrome.";
    this.fmd = "РњРѕР»СЏ, РёР·РїРѕР»Р·РІР°Р№С‚Рµ С‚РµРєСѓС‰Р°С‚Р° РІРµСЂСЃРёСЏ РЅР°";
    this.ipi = "Р—Р° СЃСЉР¶Р°Р»РµРЅРёРµ С‚РѕР·Рё Р±СЂР°СѓР·СЉСЂ РЅРµ СЃРµ РїРѕРґРґСЉСЂР¶Р° РЅР°РїСЉР»РЅРѕ.";
    this.zwz = "РўР°Р·Рё РёРіСЂР° РЅРµ РјРѕР¶Рµ РґР° СЃРµ СЃС‚Р°СЂС‚РёСЂР° РІ СЂРµР¶РёРј РЅР° СЃРІРѕР±РѕРґРЅР° РёРіСЂР°!";
    this.left = "Р›РЇР’Рђ";
    this.dft = "Р”РЇРЎРќРђ";
    this.ehp = "РђР’РўРћ";
    this.rkb = "РЎРџР•Р§Р•Р›Р•РќРћ";
    this.fpy = "РїРµС‡Р°Р»Р±Рё";
    this.puy = "РћР‘Р©Рћ";
    this.error = "Р“Р Р•РЁРљРђ";
    this.lwc = "Р‘Р•Р—РџР›РђРўРќРђ РР“Р Рђ";
    this.audio = "Р—Р’РЈРљ";
    this.bez = "РњРЈР—РРљРђ";
    this.zzc = "РџРЄР›Р•Рќ Р•РљР РђРќ";
    this.xdr = "РџРЄР›Р•Рќ|Р•РљР РђРќ";
    this.cni = "РР” РќРђ РР“Р Рђ";
    this.jrp = "Р’Р Р•РњР• РќРђ РР“Р Рђ";
    this.iel = "РџРѕСЃР»РµРґРЅРё";
    this.zmp = "РёРіСЂРё";
    this.doo = "Р”Р•РџРћР—РРў";
    this.fyv = "РР—Р‘Р•Р Р РџР РђР’РР›РќРђРўРђ Р‘РћРЇ, Р—Рђ Р”Рђ РЈР”Р’РћРРЁ РџР•Р§РђР›Р‘РђРўРђ";
    this.zwm = "РР—Р‘Р•Р Р РџР РђР’РР›РќРђРўРђ Р‘РћРЇ, Р—Рђ Р”Рђ РЈР§Р•РўР’РћР РРЁ РџР•Р§РђР›Р‘РђРўРђ";
    this.snv = "РР“Р РђР™ Р—Рђ РЁРђРќРЎ Р”Рђ РЈР’Р•Р›РР§РРЁ РџР•Р§РђР›Р‘РђРўРђ";
    this.rye = "РЎС‚Р°С‚РёСЃС‚РёРєР°";
    this.qhh = "РћР±С‰Рѕ РёРіСЂРё";
    this.hpk = "РћР±С‰Рѕ Р·Р°Р»РѕРі";
    this.ank = "РћР±С‰Рѕ РїРµС‡Р°Р»Р±Рё";
    this.mvv = "РћР±С‰Рѕ РІСЂРµРјРµ РЅР° РёРіСЂР°";
    this.oxo = "РџСЂРѕС‡РµС‚РѕС… С‚РѕРІР° СЃСЉРѕР±С‰РµРЅРёРµ.";
    this.fkv = "РР—РҐРћР”|РћРў|РР“Р РђРўРђ";
    this.pir = "РРЎРўРћР РРЇ";
    this.cnk = "РќСЏРјР° РёРіСЂР°РЅРё РёРіСЂРё.";
    this.state = "РЎРўРђРўРЈРЎ";
    this.uuy = "РћСЃРЅРѕРІРЅР° РёРіСЂР°";
    this.shc = "РђРІС‚РѕРјР°С‚РёС‡РЅРѕ СЃСЉР±СЂР°РЅРё";
    this.uth = "РЎСЉР±СЂР°РЅРё";
    this.pga = "Р‘РѕРЅСѓСЃ-РёРіСЂРё";
    this.eeb = "Р”СѓР±Р»РёСЂР°РЅРµ";
    this.qlr = "РџРѕР»РѕРІРёРЅР°";
    this.swj = "Respin";
    this.fxy = "Р‘РѕРЅСѓСЃ";
    this.sdn = "РџСЉСЂРІРѕ СЂР°Р·РґР°РІР°РЅРµ";
    this.nnm = "Р’С‚РѕСЂРѕ СЂР°Р·РґР°РІР°РЅРµ";
    this.jsr = "РўСЂРµС‚Рѕ СЂР°Р·РґР°РІР°РЅРµ";
    this.mly = "РџР РћР”РЄР›Р–Р•РќРР•";
    this.vag = "РќРµ РїРѕРєР°Р·РІР°Р№ РѕС‚РЅРѕРІРѕ";
    this.keq = "AUTOSTART";
    this.lqz = "Р”РЈР‘Р›РР РђРќР•";
    this.wnz = "РџР›РђРќ РќРђ РџР•Р§РђР›Р‘РРўР•";
    this.jvg = "Р—РІСѓРєСЉС‚ РЅРµ РјРѕР¶Рµ РґР° Р±СЉРґРµ Р·Р°СЂРµРґРµРЅ!";
    this.mqc = "Р›РёРїСЃРІР°С‚ СЂРµСЃСѓСЂСЃРё!";
    this.wvl = "РРіСЂР° Р±РµР· Р·РІСѓРє?";
    this.nnw = "Р—Р°РІСЉСЂС‚РµС‚Рµ СѓСЃС‚СЂРѕР№СЃС‚РІРѕС‚Рѕ СЃРё РІ РїРѕСЂС‚СЂРµС‚РµРЅ СЂРµР¶РёРј, Р·Р° РґР° РёРіСЂР°РµС‚Рµ РєР°С‚Рѕ РЅР° РёСЃС‚РёРЅСЃРєР° СЃР»РѕС‚ РјР°С€РёРЅР°!";
    this.kxx = "РќР°СЃС‚СЂРѕР№С‚Рµ РёРЅС‚РµСЂС„РµР№СЃР° РЅР° РёРіСЂР°С‚Р° СЃРїРѕСЂРµРґ СЃРІРѕРёС‚Рµ РЅСѓР¶РґРё!";
    this.php = "Р—Рђ РџРћР’Р•Р§Р• РРќР¤РћР РњРђР¦РРЇ Р’РР–РўР• РџР РђР’РР›РђРўРђ РќРђ РР“Р РђРўРђ.";
    this.zyj = "РР—Р§РРЎРўР’РђРќР•";
    this.avk = "РќРђРЎРўР РћР™РљР РќРђ РђР’РўРћРњРђРўРР§РќРћРўРћ РЎРўРђР РўРР РђРќР•";
    this.ixv = "Р‘СЂРѕР№ РёРіСЂРё:";
    this.cjh = "РЎРїСЂРё Р°РІС‚РѕРјР°С‚РёС‡РЅРёСЏ СЃС‚Р°СЂС‚";
    this.irk = "РљСЂРµРґРёС‚ РїРѕ-РјР°Р»СЉРє РѕС‚:";
    this.rnf = "РљСЂРµРґРёС‚ РїРѕ-РІРёСЃРѕРє РѕС‚:";
    this.ojb = "РЎРїРµС‡РµР»Рё РїРѕРІРµС‡Рµ РѕС‚:";
    this.saf = "РђРІС‚РѕРјР°С‚РёС‡РЅРѕС‚Рѕ СЃС‚Р°СЂС‚РёСЂР°РЅРµ С‰Рµ Р±СЉРґРµ СЃРїСЂСЏРЅРѕ РІ РЅР°С‡Р°Р»РѕС‚Рѕ РЅР° Р±РѕРЅСѓСЃР°.";
    this.ttd = "РЎРїРѕРґРµР»Рё РІСЉРІ Facebook";
    this.ok = "OK";
    this.wgs = "Reality Check";
    this.kyq = "Р—Р°СЏРІРёР»Рё СЃС‚Рµ РїСЂРѕРІРµСЂРєР° РЅР° СЂРµР°Р»РЅРѕСЃС‚С‚Р°.";
    this.pwh = "РќР°С‚РёСЃРЅРµС‚Рµ РРЎРўРћР РРЇ, Р·Р° РґР° РІРёРґРёС‚Рµ С…СЂРѕРЅРѕР»РѕРіРёСЏС‚Р° СЃРё РЅР° РёРіСЂР°.";
    this.ygw = "Game break";
    this.ohs = "Game limits";
    this.ucf = "Self test";
    this.pjh = "РќСЏРјР° РІСЂСЉР·РєР° СЃ РіРµР№РјРёРЅРі СЃСЉСЂРІСЉСЂР°!";
    this.gzb = "РћРїРёС‚Рё Р·Р° СЃРІСЉСЂР·РІР°РЅРµ";
    this.wuu = "РќРµСѓСЃРїРµС€РЅРѕ РІР»РёР·Р°РЅРµ!";
    this.hbs = "Р’РµС‡Рµ СЃСЉС‰РµСЃС‚РІСѓРІР° Р°РєС‚РёРІРЅР° СЃРµСЃРёСЏ!";
    this.trq = "РўР•РћР Р•РўРР§РќРђРўРђ Р’РЄР—Р’Р РђР©РђР•РњРћРЎРў РќРђ РР“Р РђР§Рђ Р—Рђ РўРђР—Р РР“Р Рђ Р• XY."
}
bqh.prototype = new jtr;

function zai() {
    this.rmm = "бѓ›бѓбѓњбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ¤бѓЎбѓќбѓњбѓ бѓђбѓ бѓбѓЎ";
    this.bvk = "бѓ›бѓђбѓҐбѓЎбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ¤бѓЎбѓќбѓњбѓ";
    this.haf = "бѓ›бѓбѓњбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ¤бѓЎбѓќбѓњбѓ";
    this.gxt = "бѓ›бѓђбѓҐбѓЎбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ¤бѓЎбѓќбѓњбѓ";
    this.afd = "бѓ¤бѓЎбѓќбѓњбѓ";
    this.start = "бѓ“бѓђбѓ¬бѓ§бѓ”бѓ‘бѓђ";
    this.seb = "бѓ“бѓђбѓ®бѓ›бѓђбѓ бѓ”бѓ‘бѓђ";
    this.sxj = "бѓ’бѓђбѓ“бѓђбѓ®бѓ“бѓбѓЎ бѓ›бѓ бѓбѓЄбѓ®бѓ•бѓ”бѓљбѓ";
    this.riw = "бѓ›бѓ”бѓњбѓбѓЈ";
    this.gby = "бѓ›бѓ”бѓўбѓ|бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ";
    this.dlb = "бѓ’бѓђбѓ©бѓ”бѓ бѓ”бѓ‘бѓђ";
    this.qvw = "бѓ™бѓ бѓ”бѓ“бѓбѓўбѓ";
    this.yan = "бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓ“бѓђбѓЎбѓ бѓЈбѓљбѓ”бѓ‘бѓЈбѓљбѓбѓђ";
    this.stb = "бѓ’бѓђбѓ›бѓђбѓ бѓЇбѓ•бѓ”бѓ‘бѓЈбѓљбѓ!";
    this.vkv = "бѓ’бѓбѓЎбѓЈбѓ бѓ•бѓ”бѓ‘бѓ— бѓ¬бѓђбѓ бѓ›бѓђбѓўбѓ”бѓ‘бѓђбѓЎ!";
    this.win = "бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.gbd = "бѓ‘бѓќбѓљбѓќ бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.lgz = "бѓЁбѓ”бѓ’бѓ бѓќбѓ•бѓ”бѓ‘бѓђ";
    this.wbc = "бѓЁбѓ”бѓ’бѓ бѓќбѓ•бѓ”бѓ‘бѓђ";
    this.oue = "бѓђбѓ–бѓђбѓ бѓўбѓ";
    this.xjt = "бѓђбѓ•бѓўбѓќ|бѓ“бѓђбѓ¬бѓ§бѓ”бѓ‘бѓђ";
    this.wsy = "бѓњбѓђбѓ®бѓ”бѓ•бѓђбѓ бѓ";
    this.lzy = "бѓ’бѓђбѓ›бѓќбѓЎбѓ•бѓљбѓђ";
    this.flj = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ“бѓђбѓ¬бѓ§бѓ”бѓ‘бѓђ";
    this.vvb = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓ¤бѓЎбѓќбѓњбѓ";
    this.zzu = "бѓњбѓђбѓ®бѓ”бѓ•бѓђбѓ бѓ";
    this.ret = "бѓ—бѓђбѓ›бѓђбѓЁбѓ–бѓ”|бѓ“бѓђбѓ‘бѓ бѓЈбѓњбѓ”бѓ‘бѓђ";
    this.pkp = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.hjk = "бѓ’бѓђбѓ¤бѓ бѓ—бѓ®бѓбѓљбѓ”бѓ‘бѓђ";
    this.puy = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ";
    this.nww = "бѓ’бѓ—бѓ®бѓќбѓ•бѓ—, бѓ“бѓђбѓ”бѓљбѓќбѓ“бѓќбѓ— ...";
    this.njc = "бѓ›бѓ”бѓўбѓ бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ";
    this.iwd = "бѓўбѓЈбѓ бѓ‘бѓќ";
    this.dqb = "бѓ’бѓђбѓЈбѓ›бѓђбѓ бѓ—бѓђбѓќбѓ‘бѓбѓЎ бѓЁбѓ”бѓ›бѓ—бѓ®бѓ•бѓ”бѓ•бѓђбѓЁбѓ бѓ§бѓ•бѓ”бѓљбѓђ бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ бѓ“бѓђ бѓњбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ бѓ¬бѓђбѓбѓЁбѓљбѓ”бѓ‘бѓђ.";
    this.mly = "бѓ’бѓђбѓ’бѓ бѓ«бѓ”бѓљбѓ”бѓ‘бѓђ";
    this.keq = "бѓђбѓ•бѓўбѓќ бѓ“бѓђбѓ¬бѓ§бѓ”бѓ‘бѓђ";
    this.wnz = "бѓ’бѓђбѓ“бѓђбѓ®бѓ“бѓбѓЎ бѓ›бѓ бѓбѓЄбѓ®бѓ•бѓ”бѓљбѓ";
    this.lqz = "бѓђбѓ–бѓђбѓ бѓўбѓ";
    this.left = "бѓ›бѓђбѓ бѓЄбѓ®бѓњбѓбѓ•";
    this.dft = "бѓ›бѓђбѓ бѓЇбѓ•бѓњбѓбѓ•";
    this.ehp = "бѓђбѓ•бѓўбѓќбѓ›бѓђбѓўбѓЈбѓ бѓђбѓ“";
    this.ok = "бѓ™бѓ";
    this.zyj = "бѓ’бѓђбѓЈбѓҐбѓ›бѓ”бѓ‘бѓђ";
    this.eeb = "бѓђбѓ–бѓђбѓ бѓўбѓ";
    this.qlr = "бѓњбѓђбѓ®бѓ”бѓ•бѓђбѓ бѓ";
    this.suv = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ¬бѓ”бѓЎбѓ”бѓ‘бѓ";
    this.oww = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ¬бѓ”бѓЎбѓ”бѓ‘бѓ";
    this.sol = "BONUS!";
    this.iuz = "бѓ‘бѓќбѓњбѓЈбѓЎ";
    this.lbm = "бѓ“бѓђбѓђбѓ­бѓбѓ бѓ”бѓ— бѓњбѓ”бѓ‘бѓбѓЎбѓ›бѓбѓ”бѓ  бѓ¦бѓбѓљбѓђбѓ™бѓЎ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓ’бѓ бѓ«бѓ”бѓљбѓќбѓ—";
    this.hzh = "бѓђбѓ бѓђ бѓЎбѓђбѓ™бѓ›бѓђбѓ бѓбѓЎбѓ бѓ™бѓ бѓ”бѓ“бѓбѓўбѓ.";
    this.uef = "бѓЁбѓ”бѓ”бѓ®бѓ”бѓ— бѓ”бѓ™бѓ бѓђбѓњбѓЎ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓ’бѓ бѓ«бѓ”бѓљбѓќбѓ—";
    this.vid = "бѓ©бѓђбѓўбѓ•бѓбѓ бѓ—бѓ•бѓбѓЎ  ...";
    this.qdr = "бѓ©бѓђбѓўбѓ•бѓбѓ бѓ—бѓ•бѓбѓЎ  бѓбѓЎбѓўбѓќбѓ бѓбѓђ  ...";
    this.lut = "бѓЎбѓђбѓ™бѓќбѓ›бѓЈбѓњбѓбѓ™бѓђбѓЄбѓбѓќ бѓЁбѓ”бѓЄбѓ“бѓќбѓ›бѓђ";
    this.lra = "бѓ—бѓҐбѓ•бѓ”бѓњ бѓ”бѓ бѓ— бѓ”бѓ бѓ—бѓ бѓљбѓбѓ›бѓбѓўбѓ бѓђбѓ›бѓќбѓ¬бѓЈбѓ бѓ”бѓ—!";
    this.ksf = "бѓ—бѓҐбѓ•бѓ”бѓњ бѓЈбѓ¤бѓђбѓЎбѓќ бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓбѓЎ бѓ›бѓђбѓҐбѓЎбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ бѓђбѓќбѓ“бѓ”бѓњбѓќбѓ‘бѓбѓЎ бѓљбѓбѓ›бѓбѓўбѓ бѓЈбѓ™бѓ•бѓ” бѓђбѓ›бѓќбѓ¬бѓЈбѓ бѓ”бѓ—!";
    this.bmi = "бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓ“бѓђбѓЎбѓ бѓЈбѓљбѓ“бѓ”бѓ‘бѓђ";
    this.udh = "бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓ’бѓђбѓ“бѓђбѓбѓўбѓ•бѓбѓ бѓ—бѓ”бѓ‘бѓђ";
    this.rkb = "бѓ›бѓќбѓ’бѓ”бѓ‘бѓЈбѓљбѓбѓђ";
    this.fpy = "wins";
    this.rfj = "V A L U E";
    this.error = "бѓЁбѓ”бѓЄбѓ“бѓќбѓ›бѓђ";
    this.lwc = "бѓЈбѓ¤бѓђбѓЎбѓќ бѓ—бѓђбѓ›бѓђбѓЁбѓ";
    this.cni = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ  бѓњбѓќбѓ›бѓ”бѓ бѓ";
    this.jrp = "бѓЎбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓќ бѓ“бѓ бѓќ";
    this.iel = "бѓ‘бѓќбѓљбѓќ ";
    this.zmp = "бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ";
    this.doo = "бѓ“бѓ”бѓћбѓќбѓ–бѓбѓўбѓ";
    this.audio = "бѓ®бѓ›бѓђ";
    this.bez = "бѓ›бѓЈбѓЎбѓбѓ™бѓђ";
    this.zzc = "бѓЎбѓ бѓЈбѓљбѓ бѓ”бѓ™бѓ бѓђбѓњбѓ";
    this.xdr = "бѓЎбѓ бѓЈбѓљбѓ бѓ”бѓ™бѓ бѓђбѓњбѓ";
    this.language = "бѓ”бѓњбѓбѓЎ";
    this.vag = "бѓ›бѓќбѓ›бѓђбѓ•бѓђбѓљбѓЁбѓ бѓђбѓ¦бѓђбѓ  бѓ©бѓ•бѓ”бѓњбѓ”бѓ‘бѓђ";
    this.jvg = "бѓ®бѓ›бѓбѓЎ бѓ©бѓђбѓўбѓ•бѓбѓ бѓ—бѓ•бѓђ бѓ•бѓ”бѓ  бѓ®бѓ”бѓ бѓ®бѓ“бѓ”бѓ‘бѓђ!";
    this.mqc = "бѓђбѓ бѓђбѓЎбѓђбѓ™бѓ›бѓђбѓ бѓбѓЎбѓ бѓ бѓ”бѓЎбѓЈбѓ бѓЎбѓ”бѓ‘бѓ!";
    this.wvl = "бѓ’бѓбѓњбѓ“бѓђбѓ— бѓ®бѓ›бѓбѓЎ бѓ’бѓђбѓ бѓ”бѓЁбѓ” бѓбѓ—бѓђбѓ›бѓђбѓЁбѓќбѓ—?";
    this.hof = "бѓ’бѓ—бѓ®бѓќбѓ•бѓ— бѓ›бѓќбѓђбѓ‘бѓ бѓЈбѓњбѓќбѓ— бѓ—бѓҐбѓ•бѓ”бѓњбѓ бѓ›бѓќбѓ¬бѓ§бѓќбѓ‘бѓбѓљбѓќбѓ‘бѓђ!";
    this.ych = "бѓ’бѓ—бѓ®бѓќбѓ•бѓ—, бѓ’бѓђбѓ›бѓќбѓ бѓ—бѓќбѓ— бѓћбѓбѓ бѓђбѓ“бѓ бѓ бѓ”бѓџбѓбѓ›бѓ бѓ—бѓҐбѓ•бѓ”бѓњбѓЎ бѓ‘бѓ бѓђбѓЈбѓ–бѓ”бѓ бѓЁбѓ бѓ бѓќбѓ› бѓЁбѓ”бѓ«бѓљбѓќбѓ— бѓ—бѓђбѓ›бѓђбѓЁбѓ.";
    this.mir = "бѓ”бѓЎ бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓќбѓћбѓўбѓбѓ›бѓбѓ–бѓбѓ бѓ”бѓ‘бѓЈбѓљбѓбѓђ Google Chrome-бѓбѓЎбѓђбѓ—бѓ•бѓбѓЎ.";
    this.owj = "бѓ’бѓ—бѓ®бѓќбѓ•бѓ— бѓ’бѓђбѓ›бѓќбѓбѓ§бѓ”бѓњбѓќбѓ—";
    this.bnm = "-бѓбѓЎ бѓ›бѓбѓ›бѓ“бѓбѓњбѓђбѓ бѓ” бѓ•бѓ”бѓ бѓЎбѓбѓђ";
    this.ipi = "бѓЎбѓђбѓ›бѓ¬бѓЈбѓ®бѓђбѓ бѓќбѓ“, бѓђбѓ› бѓ‘бѓ бѓђбѓЈбѓ–бѓ”бѓ бѓ–бѓ” бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓЎбѓ бѓЈбѓљбѓђбѓ“ бѓ•бѓ”бѓ  бѓ®бѓ”бѓ бѓ®бѓ“бѓ”бѓ‘бѓђ.";
    this.zwz = "бѓђбѓ› бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓЈбѓ¤бѓђбѓЎбѓќбѓ“ бѓЁбѓ”бѓЈбѓ«бѓљбѓ”бѓ‘бѓ”бѓљбѓбѓђ!";
    this.nnw = "бѓ©бѓђбѓ бѓ—бѓ”бѓ— бѓ—бѓҐбѓ•бѓ”бѓњбѓ бѓ›бѓќбѓ¬бѓ§бѓќбѓ‘бѓбѓљбѓќбѓ‘бѓђ бѓћбѓќбѓ бѓўбѓ бѓ”бѓўбѓбѓЎ бѓ бѓ”бѓџбѓбѓ›бѓ–бѓ” бѓ бѓќбѓ› бѓбѓ—бѓђбѓ›бѓђбѓЁбѓќбѓ— бѓбѓЎбѓ” бѓ—бѓбѓ—бѓҐбѓќбѓЎ бѓ бѓ”бѓђбѓљбѓЈбѓ  бѓЎбѓљбѓќбѓў бѓ›бѓќбѓ¬бѓ§бѓќбѓ‘бѓбѓљбѓќбѓ‘бѓђбѓ–бѓ” бѓ—бѓђбѓ›бѓђбѓЁбѓќбѓ‘бѓ“бѓ”бѓ—!";
    this.kxx = "бѓ›бѓќбѓђбѓ бѓ’бѓ”бѓ— бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓбѓњбѓўбѓ”бѓ бѓ¤бѓ”бѓбѓЎбѓ бѓ—бѓҐбѓ•бѓ”бѓњбѓЎ бѓЎбѓђбѓ­бѓбѓ бѓќбѓ”бѓ‘бѓ”бѓ‘бѓЎ!";
    this.fyv = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓЎбѓ¬бѓќбѓ бѓ бѓ¤бѓ”бѓ бѓ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓќбѓ бѓ›бѓђбѓ’бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.zwm = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓ™бѓђбѓ бѓўбѓбѓЎ бѓЎбѓ¬бѓќбѓ бѓ бѓ¤бѓ”бѓ бѓ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓќбѓ—бѓ®бѓ›бѓђбѓ’бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.snv = "бѓ“бѓђбѓ“бѓ”бѓ— бѓ¤бѓЎбѓќбѓњбѓ бѓ бѓќбѓ› бѓ’бѓђбѓ–бѓђбѓ бѓ“бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓбѓЎ бѓЁбѓђбѓњбѓЎбѓ";
    this.qhh = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ";
    this.hpk = "бѓ¤бѓЎбѓќбѓњбѓ бѓ›бѓ—бѓљбѓбѓђбѓњбѓђбѓ“";
    this.ank = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.mvv = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ бѓЎбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓќ бѓ“бѓ бѓќ";
    this.oxo = "бѓ›бѓ” бѓ’бѓђбѓ•бѓ”бѓЄбѓђбѓњбѓ бѓђбѓ› бѓ’бѓ–бѓђбѓ•бѓњбѓбѓљбѓЎ.";
    this.fkv = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ|бѓ“бѓђбѓ›бѓ—бѓђбѓ•бѓ бѓ”бѓ‘бѓђ";
    this.pir = "бѓ›бѓќбѓ•бѓљбѓ”бѓњбѓ”бѓ‘бѓбѓЎ бѓ©бѓђбѓњбѓђбѓ¬бѓ”бѓ бѓ";
    this.cnk = "бѓњбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ бѓђбѓ  бѓђбѓ бѓбѓЎ.";
    this.state = "бѓ›бѓ“бѓ’бѓќбѓ›бѓђбѓ бѓ”бѓќбѓ‘бѓђ";
    this.uuy = "бѓ«бѓбѓ бѓбѓ—бѓђбѓ“бѓ бѓ—бѓђбѓ›бѓђбѓЁбѓ";
    this.shc = "бѓђбѓ•бѓўбѓќбѓ›бѓђбѓўбѓЈбѓ бѓђбѓ“ бѓЁбѓ”бѓ’бѓ бѓќбѓ•бѓ”бѓ‘бѓђ";
    this.uth = "бѓђбѓ¦бѓ”бѓ‘бѓЈбѓљ бѓбѓҐбѓњбѓђ";
    this.sdn = "бѓћбѓбѓ бѓ•бѓ”бѓљбѓ бѓ“бѓђбѓ бѓбѓ’бѓ”бѓ‘бѓђ";
    this.nnm = "бѓ›бѓ”бѓќбѓ бѓ” бѓ“бѓђбѓ бѓбѓ’бѓ”бѓ‘бѓђ";
    this.jsr = "бѓ›бѓ”бѓЎбѓђбѓ›бѓ” бѓ“бѓђбѓ бѓбѓ’бѓ”бѓ‘бѓђ";
    this.avk = "бѓђбѓ•бѓўбѓќбѓ’бѓђбѓ›бѓЁбѓ•бѓ”бѓ‘бѓбѓЎ бѓћбѓђбѓ бѓђбѓ›бѓ”бѓўбѓ бѓ”бѓ‘бѓ";
    this.ixv = "бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓбѓЎ бѓ бѓђбѓќбѓ“бѓ”бѓњбѓќбѓ‘бѓђ:";
    this.cjh = "бѓЁбѓ”бѓђбѓ©бѓ”бѓ бѓ”бѓ— бѓђбѓ•бѓўбѓќбѓ’бѓђбѓ›бѓЁбѓ•бѓ”бѓ‘бѓ";
    this.irk = "бѓ™бѓ бѓ”бѓ“бѓбѓўбѓ бѓЈбѓ¤бѓ бѓќ бѓ“бѓђбѓ‘бѓђбѓљбѓ бѓ•бѓбѓ“бѓ бѓ”:";
    this.rnf = "бѓ™бѓ бѓ”бѓ“бѓбѓўбѓ бѓЈбѓ¤бѓ бѓќ бѓ›бѓђбѓ¦бѓђбѓљбѓ бѓ•бѓбѓ“бѓ бѓ”:";
    this.ojb = "бѓ›бѓќбѓбѓ’бѓ”бѓ— бѓЈбѓ¤бѓ бѓќ бѓ›бѓ”бѓўбѓ бѓ•бѓбѓ“бѓ бѓ”:";
    this.saf = "бѓђбѓ•бѓўбѓќбѓ’бѓђбѓ›бѓЁбѓ•бѓ”бѓ‘бѓ бѓЁбѓ”бѓ©бѓ”бѓ бѓ“бѓ”бѓ‘бѓђ бѓ‘бѓќбѓњбѓЈбѓЎбѓбѓЎ бѓ“бѓђбѓЎбѓђбѓ¬бѓ§бѓбѓЎбѓЁбѓ.";
    this.ttd = "бѓ’бѓђбѓђбѓ–бѓбѓђбѓ бѓ”бѓ— бѓ¤бѓ”бѓбѓЎбѓ‘бѓЈбѓҐбѓ–бѓ”";
    this.rye = "бѓЎбѓўбѓђбѓўбѓбѓЎбѓўбѓбѓ™бѓђ";
    this.of = "/";
    this.pga = "Bonus бѓ—бѓђбѓ›бѓђбѓЁбѓ";
    this.fxy = "бѓ‘бѓќбѓњбѓЈбѓЎбѓ";
    this.npf = "бѓбѓњбѓ¤бѓќбѓ бѓ›бѓђбѓЄбѓбѓђ";
    this.lqa = "бѓћбѓђбѓ бѓђбѓ›бѓ”бѓўбѓ .";
    this.swj = "бѓ®бѓ”бѓљбѓђбѓ®бѓљбѓђ бѓ“бѓђбѓўбѓ бѓбѓђбѓљбѓ”бѓ‘бѓбѓЎ";
    this.php = "бѓ›бѓ”бѓўбѓ бѓбѓњбѓ¤бѓќбѓ бѓ›бѓђбѓЄбѓбѓбѓЎбѓђбѓ—бѓ•бѓбѓЎ, бѓбѓ®бѓбѓљбѓ”бѓ— бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ¬бѓ”бѓЎбѓ”бѓ‘бѓ.";
    this.wgs = "бѓ бѓ”бѓђбѓљбѓќбѓ‘бѓбѓЎ бѓЁбѓ”бѓ›бѓќбѓ¬бѓ›бѓ”бѓ‘бѓђ";
    this.kyq = "бѓ—бѓҐбѓ•бѓ”бѓњ бѓ›бѓќбѓбѓ—бѓ®бѓќбѓ•бѓ”бѓ— бѓ бѓ”бѓђбѓљбѓќбѓ‘бѓбѓЎ бѓЁбѓ”бѓ›бѓќбѓ¬бѓ›бѓ”бѓ‘бѓђ.";
    this.pwh = "бѓ—бѓҐбѓ•бѓ”бѓњбѓ бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓбѓЎбѓўбѓќбѓ бѓбѓбѓЎ бѓЎбѓђбѓњбѓђбѓ®бѓђбѓ•бѓђбѓ“ бѓ“бѓђбѓђбѓ­бѓбѓ бѓ”бѓ— бѓ›бѓќбѓ•бѓљбѓ”бѓњбѓ”бѓ‘бѓбѓЎ бѓ©бѓђбѓњбѓђбѓ¬бѓ”бѓ бѓ-бѓЎ.";
    this.ygw = "Game break";
    this.ohs = "Game limits";
    this.ucf = "Self test";
    this.pjh = "бѓЎбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓќ бѓЎбѓ”бѓ бѓ•бѓ”бѓ бѓ–бѓ” бѓ“бѓђбѓ™бѓђбѓ•бѓЁбѓбѓ бѓ”бѓ‘бѓђ бѓ•бѓ”бѓ  бѓ›бѓќбѓ®бѓ”бѓ бѓ®бѓ“бѓђ!";
    this.gzb = "бѓ“бѓђбѓ™бѓђбѓ•бѓЁбѓбѓ бѓ”бѓ‘бѓбѓЎ бѓ›бѓЄбѓ“бѓ”бѓљбѓќбѓ‘бѓ”бѓ‘бѓ";
    this.wuu = "бѓЁбѓ”бѓЎбѓ•бѓљбѓђ бѓ•бѓ”бѓ  бѓ›бѓќбѓ®бѓ”бѓ бѓ®бѓ“бѓђ!";
    this.hbs = "бѓђбѓҐбѓўбѓбѓЈбѓ бѓ бѓЎбѓ”бѓЎбѓбѓђ бѓЈбѓ™бѓ•бѓ” бѓђбѓ бѓЎбѓ”бѓ‘бѓќбѓ‘бѓЎ!";
    this.trq = "бѓ—бѓ”бѓќбѓ бѓбѓЈбѓљбѓ бѓ“бѓђбѓ‘бѓ бѓЈбѓњбѓ”бѓ‘бѓђ бѓ›бѓќбѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ–бѓ” бѓђбѓ› бѓ—бѓђбѓ›бѓђбѓЁбѓЁбѓ бѓђбѓ бѓбѓЎ XY."
}
zai.prototype = new jtr;

function wqo() {
    this.rmm = "A MINIMUM TГ‰T";
    this.bvk = "MAXIMUM TГ‰T";
    this.haf = "MIN. TГ‰T";
    this.gxt = "MAX. TГ‰T";
    this.afd = "TГ‰T";
    this.start = "START";
    this.seb = "SГљGГ“";
    this.sxj = "SГљGГ“";
    this.riw = "MENГњ";
    this.gby = "MENГњ";
    this.dlb = "STOP";
    this.qvw = "HITEL";
    this.yan = "A JГЃTГ‰KNAK VГ‰GE";
    this.stb = "NYEREMГ‰NY!";
    this.vkv = "SOK SZERENCSГ‰T!";
    this.win = "NYEREMГ‰NY";
    this.gbd = "UTOLSГ“ NYER.";
    this.lgz = "FELГЌR";
    this.wbc = "FELГЌR";
    this.oue = "SZORZГЃS";
    this.xjt = "AUTO|START";
    this.wsy = "FELEZГ‰S";
    this.lzy = "KILГ‰PГ‰S";
    this.flj = "START";
    this.vvb = "VГЃLASSZON TГ‰TET";
    this.zzu = "FELEZГ‰S";
    this.ret = "VISSZA A|JГЃTГ‰KHOZ";
    this.pkp = "Г–sszes NyeremГ©ny";
    this.hjk = "FigyelmeztetГ©s";
    this.puy = "Г–SSZES";
    this.nww = "KГ‰REM VГЃRJON ...";
    this.njc = "MenГј";
    this.iwd = "SEBESSГ‰G";
    this.dqb = "A MEGHIBГЃSODГЃS Г‰RVГ‰NYTELENГЌT MINDEN JГЃTГ‰KOT Г‰S KIFIZETГ‰ST.";
    this.mly = "TOVГЃBB";
    this.keq = "AUTOSTART";
    this.wnz = "SГљGГ“";
    this.lqz = "SZORZГЃS";
    this.left = "BAL";
    this.dft = "JOBB";
    this.ok = "OK";
    this.zyj = "MГ‰GSEM";
    this.eeb = "SzorzГЎs";
    this.qlr = "FelezГ©s";
    this.suv = "JГЃTГ‰KSZABГЃLYOK";
    this.oww = "JГЃTГ‰KSZABГЃLYOK";
    this.sol = "BГіnusz!";
    this.iuz = "BГ“NUSZ";
    this.lbm = "A FOLYTATГЃSHOZ NYOMJON MEG EGY GOMBOT";
    this.hzh = "NINCS ELГ‰G HITEL";
    this.rfj = "V A L U E";
    this.fpy = "nyeremГ©nyek";
    this.of = "/";
    this.uef = "Г‰RINTSE MEG A KГ‰PERNYЕђT A FOLYTATГЃSHOZ";
    this.vid = "BETГ–LTГ‰SE ...";
    this.qdr = "JГЃTГ‰K TГ–RTГ‰NET BETГ–LTГ‰SE ...";
    this.lut = "KommunikГЎciГіs hiba";
    this.lra = "ElГ©rte az egyik limitet!";
    this.ksf = "ElГ©rte a szabad jГЎtГ©kok maximum szГЎmГЎt!";
    this.bmi = "A jГЎtГ©k megГЎllГ­tva";
    this.udh = "JГЎtГ©k Гєjraindul";
    this.rkb = "NYERT";
    this.error = "HIBA";
    this.lwc = "FREEPLAY";
    this.ehp = "AUTO";
    this.cni = "JГЃTГ‰K ID";
    this.jrp = "JГЎtГ©k IdЕ‘";
    this.iel = "utolsГі";
    this.zmp = "jГЎtГ©k";
    this.doo = "HITEL";
    this.audio = "HANG";
    this.bez = "ZENE";
    this.zzc = "TELJES KГ‰PERNYЕђ";
    this.xdr = "TELJES KГ‰PERNYЕђ";
    this.language = "NYELV";
    this.vag = "Ne mutassa mГ©gegyszer";
    this.jvg = "A hangot nem lehet betГ¶lteni!";
    this.mqc = "ForrГЎsok hiГЎnyoznak!";
    this.wvl = "JГЎtГ©k hang nГ©lkГјl?";
    this.lqa = "BEГЃLLГЌTГЃS";
    this.hof = "KГ©rjГјk fordГ­tsa el a kГ©szГјlГ©ket!";
    this.npf = "INFГ“";
    this.ych = "A jГЎtГ©khoz kГ©rem tiltsa le a PrivГЎt BГ¶ngГ©szГ©s mГіdot a bГ¶ngГ©szЕ‘jГ©ben.";
    this.mir = "Ez a jГЎtГ©k Google Chrome bГ¶ngГ©szЕ‘re van optimalizГЎlva.";
    this.owj = "KГ©rjГјk hasznГЎlja a(z)";
    this.bnm = " legГєjabb verziГіjГЎt!";
    this.ipi = "Sajnos ez a bГ¶ngГ©szЕ‘ nem teljesen tГЎmogatott.";
    this.zwz = "Ez a jГЎtГ©k nem indГ­thatГі FreePlay mГіdban!";
    this.nnw = "FordГ­tsa a kГ©szГјlГ©kГ©t ГЎllГі mГіdba, hogy Гєgy jГЎtsszon, mint egy igazi nyerЕ‘gГ©pen!";
    this.kxx = "ГЃllГ­tsa be a jГЎtГ©k felГјletГ©t az Г–n igГ©nyeinek megfelelЕ‘en!";
    this.fyv = "VГЃLASSZA KI A MEGFELELЕђ SZГЌNT, HOGY MEGDUPLГЃZZA A NYEREMГ‰NYT";
    this.zwm = "VГЃLASSZA KI A MEGFELELЕђ KГЃRTYASZГЌNT, HOGY MEGNГ‰GYSZEREZZE A NYEREMГ‰NYT";
    this.snv = "SZORZГЃS EGY LEHETЕђSГ‰G, HOGY NГ–VELJE A NYEREMГ‰NYT";
    this.rye = "Statisztika";
    this.qhh = "Г–sszes JГЎtГ©k";
    this.hpk = "Г–sszes TГ©t";
    this.ank = "Г–sszes NyeremГ©ny";
    this.mvv = "Г–sszes JГЎtГ©k IdЕ‘";
    this.oxo = "Elolvastam az Гјzenetet.";
    this.fkv = "KILГ‰PГ‰S";
    this.pir = "ElЕ‘zmГ©nyek";
    this.cnk = "Nincsenek jГЎtГ©kok.";
    this.state = "STГЃTUSZ";
    this.uuy = "FЕ‘ JГЎtГ©k";
    this.shc = "Autom. FelГ­rГЎs";
    this.uth = "FelГ­rva";
    this.pga = "BГіnusz jГЎtГ©k";
    this.swj = "Respin";
    this.fxy = "BГіnusz";
    this.sdn = "ElsЕ‘ LeosztГЎs";
    this.nnm = "MГЎsodik LeosztГЎs";
    this.jsr = "Harmadik LeosztГЎs";
    this.avk = "AUTOSTART BEГЃLLГЌTГЃS";
    this.ixv = "JГЎtГ©kok szГЎma:";
    this.cjh = "Stop autostart";
    this.irk = "A hitel kevesebb, mint:";
    this.rnf = "A hitel tГ¶bb, mint:";
    this.ojb = "A nyeremГ©ny tГ¶bb, mint:";
    this.saf = "Az AUTOSTART funkciГі kikapcsolГіdik a bГіnusz jГЎtГ©k kezdetГ©n.";
    this.ttd = "MegosztГЎs a Facebook-on";
    this.php = "KIEGГ‰SZГЌTЕђ TГЃJГ‰KOZTATГЃST A JГЃTГ‰KSZABГЃLYOKBAN TALГЃL.";
    this.wgs = "Reality Check";
    this.kyq = "Г–n egy valГіsГЎg-ellenЕ‘rzГ©st kГ©rt.";
    this.pwh = "Nyomja meg az ELЕђZMГ‰NYEK lehetЕ‘sГ©get, hogy megtekintse a jГЎtГ©ka elЕ‘zmГ©nyeit.";
    this.ygw = "Game break";
    this.ohs = "Game limits";
    this.ucf = "Self test";
    this.pjh = "Nincs kapcsolat a jГЎtГ©k-szerverrel!";
    this.gzb = "KapcsolГіdГЎsi prГіbГЎlkozГЎs";
    this.wuu = "BejelentkezГ©si hiba!";
    this.hbs = "Egy szekciГі mГЎr aktГ­v!";
    this.trq = "A JГЃTГ‰KOSNAK AZ ELVI KIFIZETГ‰S Г–SSZEGE EBBEN A JГЃTГ‰KBAN XY."
}
wqo.prototype = new jtr;

function yio() {
    this.rmm = "MIZA MINIMД‚ ESTE";
    this.bvk = "MIZA MAXIMД‚";
    this.haf = "MIZA MIN.";
    this.gxt = "MIZA MAX.";
    this.afd = "MIZД‚";
    this.start = "START";
    this.seb = "AJUTOR";
    this.sxj = "LISTA|CГ‚ЕћTIGURI";
    this.riw = "MENIU";
    this.gby = "MENIUL|JOCULUI";
    this.dlb = "STOP";
    this.qvw = "CREDIT";
    this.yan = "SFГ‚RЕћIT JOCUL";
    this.stb = "CГ‚ЕћTIGД‚TOR!";
    this.vkv = "MULT NOROC!";
    this.win = "CГ‚ЕћTIG";
    this.gbd = "ULTIMUL CГ‚ЕћTIG";
    this.lgz = "COLECTA";
    this.wbc = "COLECTA";
    this.oue = "JOC";
    this.xjt = "AUTO|START";
    this.wsy = "COLECTARE|1/2";
    this.lzy = "IEЕћIRE";
    this.flj = "APД‚SAЕўI START";
    this.vvb = "ALEGEЕўI MIZA";
    this.zzu = "COLECTARE|1/2";
    this.ret = "ГЋNAPOI|LA JOC";
    this.pkp = "CГўЕџtig total";
    this.hjk = "Avertizare";
    this.puy = "TOTAL";
    this.nww = "AЕћTEPTAЕўI VД‚ ROG ...";
    this.njc = "Meniul Jocului";
    this.iwd = "VITEZД‚";
    this.dqb = "FД‚RД‚ GARANЕўIE LA DEFECTAREA APARATULUI.";
    this.mly = "CONTINUARE";
    this.keq = "AUTOSTART";
    this.wnz = "LISTA CГ‚ЕћTIGURI";
    this.lqz = "JOC";
    this.left = "STГ‚NGA";
    this.dft = "DREAPTA";
    this.ok = "OK";
    this.zyj = "ГЋNTRERUPERE";
    this.eeb = "Joc";
    this.qlr = "Colectare 1/2";
    this.suv = "REGULILE JOCULUI";
    this.oww = "REGULILE|JOCULUI";
    this.sol = "Bonus!";
    this.iuz = "BONUS";
    this.lbm = "PENTRU CONTINUARE APASД‚ PE UN BUTON";
    this.hzh = "CREDIT INSUFICIENT.";
    this.fpy = "cГўЕџtigДѓ";
    this.rfj = "V A L U E";
    this.of = "DIN";
    this.uef = "ATINGEИљI ECRANUL PENTRU A CONTINUA";
    this.vid = "ГЋNCARCД‚ ...";
    this.qdr = "ГЋNCARCД‚ ISTORIC ...";
    this.lut = "Eroare de comunicare";
    this.lra = "AЕЈi atins una dintre limite!";
    this.ksf = "AЕЈi atins numДѓrul maxim de jocuri gratis!";
    this.bmi = "Jocul se Г®ncheie";
    this.udh = "Jocul se restarteazДѓ";
    this.rkb = "CГ‚ЕћTIGAT";
    this.error = "EROARE";
    this.lwc = "FREEPLAY";
    this.ehp = "AUTO";
    this.cni = "ID JOC";
    this.jrp = "TIMP DE JOC";
    this.iel = "ultimele";
    this.zmp = "jocuri";
    this.doo = "CREDIT";
    this.audio = "AUDIO";
    this.bez = "MUZICД‚";
    this.zzc = "ECRAN COMPLET";
    this.xdr = "ECRAN|COMPLET";
    this.language = "LIMBA";
    this.vag = "Nu reafiИ™aИ›i";
    this.jvg = "Sunetele nu pot fi Г®ncДѓrcate!";
    this.mqc = "Lipsesc resurse!";
    this.wvl = "JucaЕЈi fДѓrДѓ sunet?";
    this.lqa = "SETД‚RI";
    this.hof = "VДѓ rugДѓm opriЕЈi aparatul!";
    this.npf = "INFO";
    this.ych = "VДѓ rugДѓm dezactivaЕЈi PRIVATE MODE Г®n browser-ul dvs. pentru a juca.";
    this.mir = "Acest joc este optimizat pentru Google Chrome.";
    this.fmd = "VДѓ rugДѓm utilizaЕЈi versiunea actualДѓ";
    this.ipi = "Din pДѓcate acest browser nu este sprijinit complet.";
    this.zwz = "Acest joc nu poate fi pornit Г®n modul freeplay!";
    this.nnw = "TreceЕЈi aparatul dvs. Г®n modul portret, pentru a juca ca la o maЕџinДѓ automatДѓ!";
    this.kxx = "AjusteazДѓ interfaЕЈa de joc nevoilor dvs!";
    this.fyv = "SELECTEAZД‚ CULOAREA CORECTД‚ PENTRU DUBLAREA CГ‚ЕћTIGULUI";
    this.zwm = "SELECTEAZД‚ CULOAREA CORECTД‚ A CД‚RЕўII PENTRU A CГ‚ЕћTIGA DE 4 ORI";
    this.snv = "JOACД‚ PENTRU ЕћANSA DE A CREЕћTE PROFITUL";
    this.rye = "StatisticДѓ";
    this.qhh = "NumДѓr jocuri";
    this.hpk = "Pariuri totale";
    this.ank = "CГўЕџtig total";
    this.mvv = "Timp total de joc";
    this.oxo = "Am citit mesajul.";
    this.fkv = "ГЋNCHEIERE|JOC";
    this.pir = "ISTORIC";
    this.cnk = "Nu existДѓ jocuri.";
    this.state = "STATUT";
    this.uuy = "Joc principal";
    this.shc = "Auto colectare";
    this.uth = "Colectat";
    this.pga = "Bonusspins";
    this.swj = "Respin";
    this.fxy = "Bonus";
    this.sdn = "Primul Deal";
    this.nnm = "Al doilea deal";
    this.jsr = "Al treilea deal";
    this.avk = "SETД‚RI AUTOSTART";
    this.ixv = "NumДѓrul jocurilor:";
    this.cjh = "Oprire autostart";
    this.irk = "Credit sub:";
    this.rnf = "Credit peste:";
    this.ojb = "CГўИ™tig peste:";
    this.saf = "Autostart se va opti la Г®nceperea bonusului.";
    this.ttd = "Distribuie Facebook";
    this.php = "PENTRU INFORMAЕўII SUPLIMENTARE, VEZI REGULILE JOCULUI.";
    this.wgs = "Reality Check";
    this.kyq = "Ai cerut un Reality Check.";
    this.pwh = "ApasДѓ ISTORIC pentru a vedea istoricul tДѓu de joc.";
    this.ygw = "Game break";
    this.ohs = "Game limits";
    this.ucf = "Self test";
    this.pjh = "FДѓrДѓ conexiune la serverul de jocuri!";
    this.gzb = "Tentative de conectare";
    this.wuu = "Conectare nereuЕџitДѓ!";
    this.hbs = "ExistДѓ deja o sesiune activДѓ!";
    this.trq = "DECONTAREA TEORETICД‚ CД‚TRE JUCД‚TORI A ACESTUI JOC ESTE DE XY."
}
yio.prototype = new jtr;

function kva() {
    this.rmm = "MГЌNIMA APOSTA Г‰";
    this.bvk = "MГЃX. APOSTA";
    this.haf = "MГЌN. APOSTA";
    this.gxt = "MГЃX. APOSTA";
    this.afd = "APOSTA";
    this.start = "PARTIDA";
    this.seb = "AJUDA";
    this.sxj = "ESQUEMA|DE PAGOS";
    this.riw = "MENU";
    this.gby = "SELEГ‡ГѓO|DE JOGOS";
    this.dlb = "PARADA";
    this.qvw = "CRГ‰DITO";
    this.yan = "FIM DO JOGO";
    this.stb = "VENCEDOR!";
    this.vkv = "BOA SORTE!";
    this.win = "GANHO";
    this.gbd = "ULTIMO GANHO";
    this.lgz = "COLETAR";
    this.wbc = "COLETAR";
    this.oue = "JOGADA";
    this.xjt = "AUTO|PARTIDA";
    this.wsy = "METADE";
    this.lzy = "SAГЌDA";
    this.flj = "PREMIR PARTIDA";
    this.vvb = "SELECIONAR APOSTA";
    this.zzu = "METADE";
    this.ret = "VOLTAR|PARA|O JOGO";
    this.pkp = "Ganho total";
    this.hjk = "Aviso";
    this.puy = "TOTAL";
    this.nww = "AGUARDE POR FAVOR ...";
    this.njc = "SeleГ§ГЈo de jogos";
    this.iwd = "VELOCIDADE";
    this.dqb = "NГѓO SE ASSUME RESPONSABILIDADE POR AVARIAS NA MГЃQUINA.";
    this.mly = "CONTINUAR";
    this.keq = "AUTOPARTIDA";
    this.wnz = "ESQUEMA DE PAGOS";
    this.lqz = "JOGADA";
    this.left = "ESQUERDA";
    this.dft = "DIREITA";
    this.ok = "OK";
    this.zyj = "CANCELAR";
    this.eeb = "Jogada";
    this.qlr = "Metade";
    this.suv = "REGRAS DO JOGO";
    this.oww = "REGRAS|DO JOGO";
    this.sol = "Bonus!";
    this.iuz = "BONUS";
    this.lbm = "PREMIR QUALQUER TECLA PARA CONTINUAR";
    this.hzh = "NГѓO HГЃ CRГ‰DITO SUFICIENTE!";
    this.fpy = "ganha";
    this.rfj = "V A L U E";
    this.of = "DE";
    this.uef = "TOCAR NA TELA PARA CONTINUAR";
    this.vid = "CARREGANDO ...";
    this.qdr = "CARREGANDO HISTГ“RICO ...";
    this.lut = "Erro de comunicaГ§ГЈo";
    this.lra = "AlcanГ§ou um dos limities!";
    this.ksf = "AlcanГ§ou a quantidade mГЎxima de jogos livres!";
    this.bmi = "O jogo serГЎ encerrado";
    this.udh = "O jogo serГЎ reiniciado";
    this.rkb = "GANHOU";
    this.error = "ERRO";
    this.lwc = "FREEPLAY";
    this.ehp = "AUTO";
    this.cni = "ID JOGO";
    this.jrp = "Playing Time";
    this.iel = "Гљltimos";
    this.zmp = "jogos";
    this.doo = "DEPOSIT";
    this.audio = "AUDIO";
    this.bez = "MUSIC";
    this.zzc = "TELA CHEIA";
    this.xdr = "TELA|CHEIA";
    this.language = "IDIOMA";
    this.vag = "NГЈo exibir novamente";
    this.jvg = "Sounds nГЈo podem ser carregados!";
    this.mqc = "Faltam recursos!";
    this.wvl = "Jogar sem som?";
    this.lqa = "AJUSTES";
    this.hof = "Favor girar o seu aparelho!";
    this.npf = "INFORMAГ‡ГѓO";
    this.ych = "Favor desativar o MODO PRIVADO no browser para iniciar o jogo.";
    this.mir = "Este jogo Г© otimizado por Google Chrome.";
    this.fmd = "Favor usar a versГЈo atual de";
    this.ipi = "Infelizmente este browser nГЈo Г© completamente suportado.";
    this.zwz = "Este jogo nГЈo pode ser iniciado no modo de jogo livre!";
    this.nnw = "Girar o seu aparelho para o modo de portrait, para jogar como em uma mГЎquina real!";
    this.kxx = "Adapte a interface do jogo Г s suas necessidades!";
    this.fyv = "ESCOLHA A COR CERTA PARA DOBRAR O GANHO";
    this.zwm = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.snv = "GAMBLE PARA A CHANCE DE AUMENTAR O GANHO";
    this.rye = "EstatГ­sticas";
    this.qhh = "NГєmero de jogos";
    this.hpk = "Aposta total";
    this.ank = "Ganho total";
    this.mvv = "Tempo total do jogo";
    this.oxo = "Eu lГ­ esta mensagem.";
    this.fkv = "ENCERRAR|JOGO";
    this.pir = "HISTГ“RICO";
    this.cnk = "Ainda nГЈo existem jogos.";
    this.state = "ESTADO";
    this.uuy = "Jogo principal";
    this.shc = "Coletado automaticamente";
    this.uth = "Coletado";
    this.pga = "Bonusspins";
    this.swj = "Respin";
    this.fxy = "Bonus";
    this.sdn = "Primeiro Deal";
    this.nnm = "Segundo Deal";
    this.jsr = "Terceiro Deal";
    this.avk = "AJUSTES AUTOPARTIDA";
    this.ixv = "NГєmero de jogos:";
    this.cjh = "Parar autopartida";
    this.irk = "CrГ©dito menor do que:";
    this.rnf = "CrГ©dito maior do que:";
    this.ojb = "Ganho maior do que:";
    this.saf = "O autopartida serГЎ parado no inГ­cio do bonus.";
    this.ttd = "Participar no Facebook";
    this.php = "PARA MAIS INFORMAГ‡Г•ES, CONSULTE AS REGRAS DO JOGO.";
    this.wgs = "Reality Check";
    this.kyq = "Solicitaste um Reality Check.";
    this.pwh = "Pressione HISTГ“RICO para ver seu histГіrico de jogos.";
    this.ygw = "Game break";
    this.ohs = "Game limits";
    this.ucf = "Self test";
    this.pjh = "Nenhuma conexГЈo com o servidor do jogo!";
    this.gzb = "Tentativas de conexГЈo";
    this.wuu = "Login falhou!";
    this.hbs = "Ja existe uma sessГЈo ativa!";
    this.trq = "O PAGAMENTO TEГ“RICO AO JOGADOR PARA ESTE JOGO Г‰ DE XY."
}
kva.prototype = new jtr;

function zhx() {
    this.rmm = "LA MISE MINIMALE EST DE";
    this.bvk = "MISE MAX.";
    this.haf = "MISE MINI";
    this.gxt = "MISE MAX.";
    this.afd = "MISE";
    this.start = "DEPART";
    this.seb = "AIDE";
    this.sxj = "TABLEAU|DES PAIEMENTS";
    this.riw = "MENU";
    this.gby = "PLUS|DE JEUX";
    this.dlb = "ARRГЉTEZ";
    this.qvw = "CRГ‰DIT";
    this.yan = "FIN DU JEU";
    this.stb = "GAGNANT!";
    this.vkv = "BONNE CHANCE!";
    this.win = "GAIN";
    this.gbd = "DERNIER GAIN";
    this.lgz = "ENCAISSER";
    this.wbc = "ENCAISSER";
    this.oue = "DOUBLER";
    this.xjt = "AUTO|LANCER";
    this.wsy = "ENCAISSER|MOITIГ‰";
    this.lzy = "SORTIE";
    this.flj = "APPUYEZ SUR START";
    this.vvb = "CHOISIR LA MISE";
    this.zzu = "ENCAISSER|MOITIГ‰";
    this.ret = "RETOUR|AU JEU";
    this.pkp = "Gain total";
    this.hjk = "Avertissement";
    this.puy = "TOTALE";
    this.nww = "ATTENDEZ S'IL VOUS PLAГЋT ...";
    this.njc = "Plus de jeux";
    this.iwd = "VITESSE";
    this.dqb = "ГЃ L'OCCASION DВґERREUR DВґAPPAREIL DГ‰CLINER TOUTE RESPONSABILITГ‰.";
    this.mly = "CONTINUER";
    this.keq = "AUTO LANCER";
    this.wnz = "TABLEAU DES PAIEMENTS";
    this.lqz = "DOUBLER";
    this.left = "GAUCHE";
    this.dft = "DROITE";
    this.ok = "OK";
    this.zyj = "ANNULER";
    this.eeb = "Doubler";
    this.qlr = "Encaisser moitiГ©";
    this.suv = "RГ€GLES DU JEU";
    this.oww = "RГ€GLES DU JEU";
    this.sol = "Bonus!";
    this.iuz = "BONUS";
    this.lbm = "APPUYEZ SUR UNE TOUCHE POUR CONTINUER";
    this.hzh = "PAS ASSEZ DE CRГ‰DIT";
    this.fpy = "gagne";
    this.rfj = "V A L U E";
    this.of = "SUR";
    this.uef = "EFFLEURE L'Г‰CRAN POUR CONTINUER";
    this.vid = "CHARGEMENT EN COURS ...";
    this.qdr = "CHARGEMENT DE L'HISTORIQUE EN COURS ...";
    this.lut = "Erreur de communication";
    this.lra = "Vous avez atteint une des limites!";
    this.ksf = "Vous avez atteint le nombre maximum des jeux gratuits!";
    this.bmi = "Le jeu sera terminГ©";
    this.udh = "Le jeu sera dГ©marrГ© de nouveau";
    this.rkb = "GAGNГ‰";
    this.error = "ERREUR";
    this.lwc = "JEU GRATUIT";
    this.ehp = "AUTO";
    this.cni = "ID DU JEU";
    this.jrp = "TEMPS DE JEU";
    this.iel = "Les";
    this.zmp = "derniers jeux";
    this.doo = "AVOIR";
    this.audio = "AUDIO";
    this.bez = "MUSIQUE";
    this.zzc = "PLEIN Г‰CRAN";
    this.xdr = "PLEIN|Г‰CRAN";
    this.language = "LANGUE";
    this.vag = "Ne pas afficher encore une fois";
    this.jvg = "Impossible de charger des sounds!";
    this.mqc = "Manque de ressources!";
    this.wvl = "Jouer sans son?";
    this.lqa = "CONFIGUR.";
    this.hof = "Merci de tourner votre matГ©riel!";
    this.npf = "INFO";
    this.ych = "Veuillez dГ©sactiver le MODE PRIVГ‰ dans le navigateur afin de dГ©marrer le jeu.";
    this.mir = "Ce jeu est optimisГ© pour Google Chrome.";
    this.fmd = "Veuilllez utiliser la version Г  jour de";
    this.ipi = "Malheureusement, ce browser n'est intГ©gralement supportГ©.";
    this.zwz = "Impossible de dГ©marrer ce jeu au mode jeu gratuit!";
    this.nnw = "Tournez votre matГ©riel dans le mode portrait pour jouer comme sur une vГ©ritable machine!";
    this.kxx = "Adapte l'interface de jeu Г  tes besoins!";
    this.fyv = "CHOISIS LA BONNE COULEUR AFIN DE DOUBLER LE GAIN";
    this.zwm = "CHOISIS LA BONNE COULEUR DE LA CARTE AFIN DE QUADRUPLER LE GAIN";
    this.snv = "GAMBLE POUR LA CHANCE DE MULTIPLIER LE GAIN";
    this.rye = "Statistiques";
    this.qhh = "Nombre des jeux";
    this.hpk = "Total des mises";
    this.ank = "Gain total";
    this.mvv = "Temps total du jeu";
    this.oxo = "J'ai lu le message";
    this.fkv = "TERMINER|LE JEU";
    this.pir = "Historique";
    this.cnk = "Il n'y a pas encore de jeux jouГ©s.";
    this.state = "Г‰TAT";
    this.uuy = "Jeu principal";
    this.shc = "Pris automatiquement";
    this.uth = "Pris";
    this.pga = "Bonusspins";
    this.swj = "Respin";
    this.fxy = "Bonus";
    this.sdn = "Premier Deal";
    this.nnm = "DeuxiГЁme Deal";
    this.jsr = "TroisiГЁme Deal";
    this.avk = "AUTOSTART CONFIGURATION";
    this.ixv = "Nombre des jeux:";
    this.cjh = "ArrГЄter autostart";
    this.irk = "CrГ©dit infГ©rieur Г :";
    this.rnf = "CrГ©dit supГ©rieur Г :";
    this.ojb = "Gain supГ©rieur Г :";
    this.saf = "L'autostart est arrГЄtГ© au dГ©but du bonus.";
    this.ttd = "Partager sur Facebook";
    this.php = "POUR PLUS D'INFORMATIONS, CONSULTEZ LES RГ€GLES DU JEU.";
    this.wgs = "Reality Check";
    this.kyq = "Tu as demandГ© un Reality Check.";
    this.pwh = "Appuie sur HISTORIQUE pour afficher ton historique de jeu.";
    this.ygw = "Game break";
    this.ohs = "Game limits";
    this.ucf = "Self test";
    this.pjh = "Aucune connexion avec le gaming serveur!";
    this.gzb = "Tentatives de connexion";
    this.wuu = "Connexion Г©chouГ©e!";
    this.hbs = "Il y a dГ©jГ  une session active!";
    this.trq = "LE VERSEMENT THГ‰ORIQUE AU JOUEUR POUR CE JEU S'Г‰LГ€VE ГЂ XY."
}
zhx.prototype = new jtr;

function fdp() {
    this.rmm = "NAJMANJI ULOG JE";
    this.bvk = "MAX ULOG";
    this.haf = "MIN. ULOG";
    this.gxt = "MAKS. ULOG";
    this.afd = "ULOG";
    this.start = "START";
    this.seb = "POMOД†";
    this.sxj = "LISTA DOBITAKA";
    this.riw = "IZBORNIK";
    this.gby = "VIЕ E|IGARA";
    this.dlb = "STOP";
    this.qvw = "KREDIT";
    this.yan = "KRAJ IGRE";
    this.stb = "DOBITAK!";
    this.vkv = "SRETNO!";
    this.win = "DOBITAK";
    this.gbd = "ZADNJI DOBITAK";
    this.lgz = "UPIЕ I";
    this.wbc = "UPIЕ I";
    this.oue = "DUPLANJE";
    this.xjt = "AUTO|START";
    this.wsy = "UZMI|1/2";
    this.lzy = "IZLAZ";
    this.flj = "PRITISNITE START";
    this.vvb = "BIRAJTE ULOG";
    this.zzu = "UZMI|1/2";
    this.ret = "POVRATAK|U IGRU";
    this.pkp = "Ukupni dobitci";
    this.hjk = "Upozorenje";
    this.puy = "UKUPNI";
    this.nww = "MOLIMO PRIДЊEKAJTE ...";
    this.njc = "ViЕЎe igara";
    this.iwd = "BRZINA";
    this.dqb = "Kod kvara na ureД‘aju nema jamstva.";
    this.mly = "DALJE";
    this.keq = "AUTOSTART";
    this.wnz = "LISTA DOBITAKA";
    this.lqz = "DUPLANJE";
    this.left = "LIJEVA";
    this.dft = "DESNA";
    this.ok = "OK";
    this.zyj = "PREKID";
    this.eeb = "Duplanje";
    this.qlr = "Uzmi 1/2";
    this.suv = "PRAVILA IGRE";
    this.oww = "PRAVILA IGRE";
    this.sol = "Bonus!";
    this.iuz = "BONUS";
    this.lbm = "ZA NASTAVITI PRITISNITE BILO KOJU TIPKU";
    this.hzh = "NEMATE DOVOLJNO KREDITA.";
    this.fpy = "dobici";
    this.rfj = "V A L U E";
    this.of = "OD";
    this.uef = "ZA NASTAVAK DODIRNITE ZASLON";
    this.vid = "UДЊITAVANJA ...";
    this.qdr = "POVIJEST UДЊITAVANJA ...";
    this.lut = "Komunikacijska pogreЕЎka";
    this.lra = "Dostigli ste jednu od graniДЌnih vrijednosti!";
    this.ksf = "Dostigli ste maksimum besplatnih igara!";
    this.bmi = "Igra se zatvara";
    this.udh = "Igra se iznova uДЌitava";
    this.rkb = "OSVOJENO";
    this.error = "POGREЕ KA";
    this.lwc = "FREEPLAY";
    this.ehp = "AUTO";
    this.cni = "ID IGRE";
    this.jrp = "Vrijeme igre";
    this.iel = "posljednjih";
    this.zmp = "igara";
    this.doo = "DEPOZIT";
    this.audio = "ZVUKA";
    this.bez = "GLAZBA";
    this.zzc = "PUN ZASLON";
    this.xdr = "PUN ZASLON";
    this.language = "JEZIKA";
    this.vag = "Ne prikazuj ponovo";
    this.jvg = "Zvukovi se ne mogu uДЌitati!";
    this.mqc = "Nedostaju resursi!";
    this.wvl = "ЕЅelite li igrati uz zvuk?";
    this.lqa = "POSTAVKE";
    this.hof = "UkljuДЌite svoj ureД‘aj!";
    this.npf = "INFORMACIJE";
    this.ych = "Molimo deaktivirajte PRIVATNI MOD u VaЕЎem pregledniku kako biste mogli igrati";
    this.mir = "Ova igra je optimizirana za Google Chrome.";
    this.fmd = "Molimo koristite se trenutnom inaДЌicom";
    this.ipi = "NaЕѕalost ovaj preglednik nije u potpunosti podrЕѕan";
    this.zwz = "Ova se igra ne moЕѕe pokrenuti u reЕѕimu slobodne igre!";
    this.nnw = "Podesite svoj ureД‘aj na portretni format kako biste igrali kao na pravoma automatu!";
    this.kxx = "Prilagodite suДЌelje igre svojim potrebama!";
    this.fyv = "ODABERI PRAVU BOJU I TIME UDVOSTRUДЊI DOBITAK";
    this.zwm = "ODABERI PRAVI ZNAK I TIME UДЊETVEROSTRUДЊI DOBITAK";
    this.snv = "KOCKANJEM OSVOJI Е ANSU ZA POVEД†ANJE DOBITKA";
    this.rye = "Statistike";
    this.qhh = "Ukupno igara";
    this.hpk = "Ukupni ulog";
    this.ank = "Ukupno dobitaka";
    this.mvv = "Ukupno vrijeme igre";
    this.oxo = "ProДЌitao sam ovu poruku";
    this.fkv = "IZLAZ|IZ IGRE";
    this.pir = "Povijest";
    this.cnk = "Nema odigranih igara.";
    this.state = "STANJE";
    this.uuy = "Glavna igra";
    this.shc = "Auto. pokupljeno";
    this.uth = "Pokupljeno";
    this.pga = "Besplatne igre";
    this.swj = "Dodatne okretaje";
    this.fxy = "Bonus";
    this.sdn = "Prvo dijeljenje";
    this.nnm = "Drugo dijeljenje";
    this.jsr = "TreД‡e dijeljenje";
    this.avk = "POSTAVKE AUTOMATSKE IGRE";
    this.ixv = "Ukupno igara:";
    this.cjh = "Zaustavljanje automatske igre";
    this.irk = "Kredit manji od:";
    this.rnf = "Kredit veД‡i od:";
    this.ojb = "Dobitak veД‡i od:";
    this.saf = "Automatska igra Д‡e se zaustaviti na poДЌetku besplatne igre.";
    this.ttd = "Podijeli na Facebooku";
    this.php = "ZA VIЕ E INFORMACIJA POGLEDAJTE PRAVILA IGRE.";
    this.wgs = "Reality Check";
    this.kyq = "ZatraЕѕili ste Reality Check.";
    this.pwh = "Pritisni POVIJEST za pregled prijaЕЎnjih igara.";
    this.ygw = "Game break";
    this.ohs = "Game limits";
    this.ucf = "Self test";
    this.pjh = "Nema konekcije sa serverom za igranje!";
    this.gzb = "PokuЕЎaji povezivanja";
    this.wuu = "Prijavljivanje nije uspjelo!";
    this.hbs = "Aktivna sesija veД‡ postoji!";
    this.trq = "TEORETSKI POVRATAK NA IGRAДЊA ZA OVU IGRU JE XY."
}
fdp.prototype = new jtr;

function omh() {
    this.rmm = "MINIMA PUNTATA Г€";
    this.bvk = "PUNTATA MASSIMA";
    this.haf = "MIN. PUNTATA";
    this.gxt = "MASS. PUNTATA";
    this.afd = "PUNTATA";
    this.start = "START";
    this.seb = "AIUTO";
    this.sxj = "TABELLA VINCITE";
    this.riw = "MENU";
    this.gby = "SCELTA|GIOCHI";
    this.dlb = "STOP";
    this.qvw = "CREDITO";
    this.yan = "FINE PARTITA";
    this.stb = "VINCITORE!";
    this.vkv = "BUONA FORTUNA!";
    this.win = "VINCITA";
    this.gbd = "ULTIMA VINCITA";
    this.lgz = "INCASSA";
    this.wbc = "INCASSA";
    this.oue = "GAMBLE";
    this.xjt = "AUTO|START";
    this.wsy = "METГЂ";
    this.lzy = "FINE";
    this.flj = "PREMI START";
    this.vvb = "SCEGLI PUNTATA";
    this.zzu = "METГЂ";
    this.ret = "RITORNO|AL GIOCO";
    this.pkp = "Totale vincita";
    this.hjk = "Attenzione";
    this.puy = "TOTALE";
    this.nww = "ATTENDERE PREGO ...";
    this.njc = "Scelta Giochi";
    this.iwd = "VELOCITГЂ";
    this.dqb = "In caso di malfunzionamento nessuna responsabilitГ  assunta.";
    this.mly = "CONTINUA";
    this.keq = "AUTOSTART";
    this.wnz = "TABELLA VINCITE";
    this.lqz = "GAMBLE";
    this.left = "SINISTRA";
    this.dft = "DESTRA";
    this.ok = "OK";
    this.zyj = "CANCELLA";
    this.eeb = "Gamble";
    this.qlr = "MetГ ";
    this.suv = "REGOLAMENTO";
    this.oww = "REGOLAMENTO";
    this.sol = "Bonus!";
    this.iuz = "BONUS";
    this.lbm = "PREMI UN TASTO PER CONTINUARE";
    this.hzh = "CREDITO INSUFFICIENTE!";
    this.fpy = "vince";
    this.rfj = "V A L U E";
    this.of = "DI";
    this.uef = "TOCCARE LO SCHERMO PER CONTINUARE";
    this.vid = "STA CARICANDO ...";
    this.qdr = "STA CARICANDO LA CRONACA ...";
    this.lut = "Errore di comunicazione";
    this.lra = "Hai raggiunto uno dei limiti!";
    this.ksf = "Hai raggiunto il numero massimo di free games!";
    this.bmi = "La partita sta terminando";
    this.udh = "La partita sta ripartendo";
    this.rkb = "VINTO";
    this.error = "ERRORE";
    this.lwc = "FREEPLAY";
    this.ehp = "AUTO";
    this.cni = "GAME ID";
    this.jrp = "Durata del gioco";
    this.iel = "Ultime partite";
    this.zmp = "";
    this.doo = "DEPOSITO";
    this.audio = "AUDIO";
    this.bez = "MUSICA";
    this.zzc = "SCHERMO INTERO";
    this.xdr = "SCHERMO INTERO";
    this.language = "LINGUA";
    this.vag = "Non mostrare di nuovo";
    this.jvg = "Suoni non caricabili!";
    this.mqc = "Mancano risorse!";
    this.wvl = "Giocare senza suoni?";
    this.lqa = "SETTAGGI";
    this.hof = "Prego girare l'apparecchio!";
    this.npf = "INFO";
    this.ych = "Prego disattivare il MODO PRIVATO nel browser per iniziare la partita";
    this.mir = "La partita ГЁ ottimizzata per Google Chrome.";
    this.fmd = "Prego utilizzare la versione attuale di";
    this.ipi = "Purtroppo il presente browser non viene supportato interamente";
    this.zwz = "Impossibile avviare questa partita nel modo freeplay!";
    this.nnw = "Girare l'apparecchio nel modo ritratto per giocare come su un apparecchio vero!";
    this.kxx = "Aggiusta l'interfaccia del gioco come ti piace!";
    this.fyv = "SCEGLI IL COLORE GIUSTO PER RADDOPPIARE LA VINCITA";
    this.zwm = "SCEGLI IL SEME GIUSTO PER QUADRUPLARE LA VINCITA";
    this.snv = "GAMBLE PER L'OPPORTUNITГЂ DI AUMENTARE LA VINCITA";
    this.rye = "Statistica";
    this.qhh = "Totale partite";
    this.hpk = "Totale puntata";
    this.ank = "Totale vincita";
    this.mvv = "Totale durata del gioco";
    this.oxo = "Ho letto il messaggio";
    this.fkv = "TERMINARE|LA PARTITA";
    this.pir = "Cronaca";
    this.cnk = "Nessuna partita giocata.";
    this.state = "STATO";
    this.uuy = "Partita principale";
    this.shc = "Raccolto autom.";
    this.uth = "Raccolto";
    this.pga = "Bonusspin";
    this.swj = "Respin";
    this.fxy = "Bonus";
    this.sdn = "Primo deal";
    this.nnm = "Secondo deal";
    this.jsr = "Terzo deal";
    this.avk = "SETTAGGI AUTOSTART";
    this.ixv = "Numero di partite:";
    this.cjh = "Fermare l'autostart";
    this.irk = "Credito piГ№ basso di:";
    this.rnf = "Credito piГ№ alto di:";
    this.ojb = "Vincita piГ№ alta di:";
    this.saf = "L'autostart si ferma all'inizio del bonus.";
    this.ttd = "Dividi su facebook";
    this.php = "PER ULTERIORI INFORMAZIONI CONSULTARE LE REGOLE DI GIOCO.";
    this.wgs = "Reality Check";
    this.kyq = "Avete richiesto un Reality Check.";
    this.pwh = "Premere CRONACA per mostrare la cronaca della giocata.";
    this.ygw = "Game break";
    this.ohs = "Game limits";
    this.ucf = "Self test";
    this.pjh = "Nessuna connessione al gaming server!";
    this.gzb = "Tentativi di connessione";
    this.wuu = "Login fallito!";
    this.hbs = "Г€ giГ  attiva una seduta!";
    this.trq = "IL PAGAMENTO TEORICO DI QUESTO GIOCO IN FAVORE DEL GIOCATORE AMMONTA A XY."
}
omh.prototype = new jtr;

function jjv() {
    this.rmm = "MIN. INSATSEN Г„R";
    this.bvk = "MAXIMAL INSATS";
    this.haf = "MIN. INSATS";
    this.gxt = "MAX. INSATS";
    this.afd = "INSATS";
    this.start = "STARTA";
    this.seb = "HJГ„LP";
    this.sxj = "VINSTTABELL";
    this.riw = "MENY";
    this.gby = "FLER|SPEL";
    this.dlb = "STOPP";
    this.qvw = "KREDIT";
    this.yan = "SPELET Г„R SLUT";
    this.stb = "VINNARE!";
    this.vkv = "LYCKA TILL!";
    this.win = "VINN";
    this.gbd = "SENASTE VINSTEN";
    this.lgz = "INKASSERA";
    this.wbc = "INKASSERA";
    this.oue = "DUBBLERA";
    this.xjt = "AUTO|START";
    this.wsy = "HГ„LFTEN|1/2";
    this.lzy = "AVSLUTA";
    this.flj = "TRYCK PГ… STARTA";
    this.vvb = "VГ„LJ INSATS";
    this.zzu = "HГ„LFTEN";
    this.ret = "Г…TERGГ…|TILL SPELET";
    this.pkp = "Total Vinst";
    this.hjk = "Varning";
    this.puy = "TOTALT";
    this.nww = "VAR VГ„NLIG VГ„NTA ...";
    this.njc = "Fler spel";
    this.iwd = "TEMPO";
    this.dqb = "Vid tekniskt fel annulleras alla insatser och spel.";
    this.mly = "FORTSГ„TT";
    this.keq = "AUTOSTART";
    this.wnz = "VINSTTABELL";
    this.lqz = "DUBBLERA";
    this.left = "VГ„NSTER";
    this.dft = "HГ–GER";
    this.ok = "OK";
    this.zyj = "AVBRYT";
    this.eeb = "Dubblering";
    this.qlr = "HГ¤lften";
    this.suv = "SPELREGLER";
    this.oww = "SPELREGLER";
    this.sol = "Bonus!";
    this.iuz = "BONUS";
    this.lbm = "TRYCK PГ… EN KNAPP FГ–R ATT FORTSГ„TTA";
    this.hzh = "FГ–R LГ…GT SALDO!";
    this.fpy = "vinster";
    this.rfj = "V A L U E";
    this.of = "AV";
    this.uef = "PEKA PГ… SKГ„RMEN FГ–R ATT FORTSГ„TTA";
    this.vid = "LГ„SER ...";
    this.qdr = "LГ„SER IN HISTORIKEN ...";
    this.lut = "Kommunikationsfel";
    this.lra = "Du har nГҐtt en av grГ¤nserna!";
    this.ksf = "Du har nГҐtt det maximala antalet gratisspel!";
    this.bmi = "Spelet avslutas";
    this.udh = "Spelet startas om";
    this.rkb = "VUNNA";
    this.error = "FEL";
    this.lwc = "GRATISSPEL";
    this.ehp = "AUTO";
    this.cni = "SPEL-ID";
    this.jrp = "SPELTID";
    this.iel = "senaste";
    this.zmp = "spelen";
    this.doo = "INSГ„TTNING";
    this.audio = "LJUD";
    this.bez = "MUSIK";
    this.zzc = "HELSKГ„RM";
    this.xdr = "HELSKГ„RM";
    this.language = "SPRГ…K";
    this.vag = "Visa inte igen";
    this.jvg = "Ljud kan inte laddas!";
    this.mqc = "Resurser saknas!";
    this.wvl = "Spela utan ljud?";
    this.lqa = "INSTГ„LLN.";
    this.hof = "VГ¤nd din enhet!";
    this.npf = "INFO";
    this.ych = "Avaktivera PRIVATLГ„GET i din webblГ¤sare fГ¶r att spela spelet.";
    this.mir = "Det hГ¤r spelet Г¤r optimerat fГ¶r Google Chrome.";
    this.fmd = "AnvГ¤nd den senaste versionen av";
    this.ipi = "TyvГ¤rr stГ¶ds inte den hГ¤r webblГ¤saren fullt ut.";
    this.zwz = "Det hГ¤r spelet kan inte startas i gratisspelslГ¤get!";
    this.nnw = "HГҐll din enhet i portrГ¤ttlГ¤ge fГ¶r att spela som pГҐ en riktig spelautomat!";
    this.kxx = "Anpassa spelgrГ¤nssnittet efter dina behov!";
    this.fyv = "VГ„LJ RГ„TT FГ„RG FГ–R ATT DUBBLA VINSTEN";
    this.zwm = "VГ„LJ RГ„TT FГ„RGSVIT FГ–R ATT FYRDUBBLA VINSTEN";
    this.snv = "SPELA FГ–R ATT FГ… CHANSEN ATT Г–KA VINSTEN";
    this.rye = "Statistik";
    this.qhh = "Totalt antal spel";
    this.hpk = "Totalinsats";
    this.ank = "Totalvinst";
    this.mvv = "Total speltid";
    this.oxo = "Jag har lГ¤st detta meddelande";
    this.fkv = "AVSLUTA|SPELET";
    this.pir = "Historik";
    this.cnk = "Inga spel har spelats.";
    this.state = "STATUS";
    this.uuy = "Huvudspel";
    this.shc = "Auto. Inkasserat";
    this.uth = "Inkasserat";
    this.pga = "Bonusspinn";
    this.swj = "Respin";
    this.fxy = "Bonus";
    this.sdn = "FГ¶rsta given";
    this.nnm = "Andra given";
    this.jsr = "Tredje given";
    this.avk = "AUTOSPELINSTГ„LLNINGAR";
    this.ixv = "Antal spelrundor:";
    this.cjh = "Stoppa automatiskt spel";
    this.irk = "Saldo lГ¤gre Г¤n:";
    this.rnf = "Saldo hГ¶gre Г¤n:";
    this.ojb = "Vinst hГ¶gre Г¤n:";
    this.saf = "Autospelen kommer att stoppas dГҐ bonusen startar.";
    this.ttd = "Dela pГҐ Facebook";
    this.php = "SE SPELREGLERNA FГ–R MER INFORMATION.";
    this.wgs = "Reality Check";
    this.kyq = "Du har begГ¤rt att fГҐ en statusuppdatering.";
    this.pwh = "Tryck pГҐ HISTORIK fГ¶r att visa din spelhistorik.";
    this.ygw = "Spelpaus";
    this.ohs = "SpelgrГ¤nser";
    this.ucf = "SjГ¤lvtest";
    this.pjh = "Ingen anslutning till spelservern!";
    this.gzb = "AnslutningsfГ¶rsГ¶k";
    this.wuu = "Inloggningen misslyckades!";
    this.hbs = "Det finns redan en aktiv session!";
    this.trq = "DEN TEORETISKA Г…TERBETALNINGEN TILL SPELAREN FГ–R DET HГ„R SPELET Г„R XY."
}
jjv.prototype = new jtr;

function cfy() {
    this.qty = "HELD";
    this.qcq = "RED";
    this.akh = "BLACK";
    this.clw = "HIGH";
    this.hzz = "LOW";
    this.kwo = "DEAL CARDS";
    this.squ = "HOLD CARDS";
    this.sxs = "DRAW CARDS";
    this.opb = "five equivalent cards (only possible with a wild card)";
    this.rvj = "ace - king - queen - jack - ten of the same suit";
    this.xzr = "STRAIGHT with cards of the same suit";
    this.uuc = "four cards of the same rank";
    this.vps = "combination of THREE OF A KIND and a PAIR";
    this.iul = "five cards of the same suit";
    this.tqn = "five cards in rank order, but not of the same suit";
    this.gju = "three cards of the same rank";
    this.qry = "two distinct pairs and any 5th card";
    this.spa = "two jacks, queens, kings or aces";
    this.xoh = "four cards of the same suit with any 5th card";
    this.zxh = "straight with ace in the center";
    this.ivc = "combination of figures which contains jack, queen and king";
    this.rkk = "sequence with even or odd successive values";
    this.fmm = "ROYAL FLUSH containing a wild card";
    this.sei = "four twos with any other card";
    this.dlw = "four 5's, 6's, 7's, 8's, 9's, 10's, JACK's, QUEEN's OR KING's";
    this.ojk = "four 2's, 3's or 4's with any other card";
    this.bgl = "four aces with any other card";
    this.dit = "four 2's, 3's OR 4's with an Ace 2,3 or 4";
    this.mrd = "four Aces with 2, 3 or 4";
    this.clr = "two Kings or Aces";
    this.jim = "two tens, jacks, queens, kings or aces";
    this.uyh = "FIVE OF A KIND";
    this.zqo = "ROYAL FLUSH";
    this.crm = "STRAIGHT FLUSH";
    this.hbz = "FOUR OF A KIND";
    this.xcx = "FULL HOUSE";
    this.ccj = "FLUSH";
    this.jcf = "STRAIGHT";
    this.psa = "THREE OF A KIND";
    this.eui = "TWO PAIRS";
    this.jxx = "HIGH PAIR";
    this.lzu = "FOUR FLUSH";
    this.eoo = "POKER";
    this.xgr = "SKIP STRAIGHT";
    this.cbg = "BLAZE";
    this.eie = "CORNER STRAIGHT";
    this.ibh = "TENS OR BETTER";
    this.zpo = "JACKS OR BETTER";
    this.cjl = "KINGS OR BETTER";
    this.aue = "WILD ROYAL FLUSH";
    this.dsh = "FOUR DEUCES";
    this.vnz = "FOUR 5 TO KING";
    this.hca = "FOUR 2 TO 4";
    this.mkz = "FOUR ACES";
    this.mvg = "FOUR LOW WITH LOW";
    this.imc = "FOUR ACES WITH 2, 3 OR 4";
    this.irg = "GAMBLE AGAIN OR COLLECT?";
    this.zqb = "SELECT A CARD";
    this.iht = "If selected card is higher than dealer: WIN!";
    this.xao = "If selected card is lower than dealer: lose";
    this.hdy = "If selected card is same as dealer: tie";
    this.yhv = "ACE is highest, two is lowest, no wild cards.";
    this.qts = "TIE";
    this.nus = "PLAYER";
    this.sru = "DEALER";
    this.spv = "BEAT THE DEALER TO DOUBLE THE WIN";
    this.xqe = "SELECT THE CORRECT VALUE TO DOUBLE THE WIN"
}
cfy.prototype = new mzm;

function nxt() {
    this.qty = "РЈРґРµСЂР¶Р°С‚СЊ";
    this.qcq = "РљР РђРЎРќР«Р™";
    this.akh = "BLACK";
    this.clw = "РљР РЈРџРќРђРЇ";
    this.hzz = "РњР•Р›РљРђРЇ";
    this.kwo = "Р РђР—Р”Р•Р›РРўР¬ РљРђР РўР«";
    this.squ = "РЈР”Р•Р Р–РђРўР¬ РљРђР РўР«";
    this.sxs = "Р’Р—РЇРўР¬ РљРђР РўР«";
    this.opb = "РџСЏС‚СЊ РєР°СЂС‚ РѕРґРЅРѕРіРѕ РЅРѕРјРёРЅР°Р»Р° (РѕРґРЅР° РёР· РЅРёС… РґР¶РѕРєРµСЂ)";
    this.rvj = "РўСѓР· - РєРѕСЂРѕР»СЊ - РґР°РјР° - РІР°Р»РµС‚ - 10 РѕРґРЅРѕР№ РјР°СЃС‚Рё";
    this.xzr = "STRAIGHT РѕРґРЅРѕР№ РјР°СЃС‚Рё";
    this.uuc = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ РѕРґРЅРѕРіРѕ РЅРѕРјРёРЅР°Р»Р°";
    this.vps = "РўСЂРё РєР°СЂС‚С‹ РѕРґРЅРѕРіРѕ РЅРѕРјРёРЅР°Р»Р° Рё РѕРґРЅР° РїР°СЂР°";
    this.iul = "РџСЏС‚СЊ РєР°СЂС‚ РѕРґРЅРѕР№ РјР°СЃС‚Рё";
    this.tqn = "РџСЏС‚СЊ РєР°СЂС‚ РїРѕ РїРѕСЂСЏРґРєСѓ, РЅРѕ РЅРµ РѕРґРЅРѕР№ РјР°СЃС‚Рё";
    this.gju = "РўСЂРё РєР°СЂС‚С‹ РѕРґРЅРѕРіРѕ РЅРѕРјРёРЅР°Р»Р°";
    this.qry = "Р”РІРµ РїР°СЂС‹ Рё РѕРґРЅР° РґРѕРїРѕР». РєР°СЂС‚Р°";
    this.spa = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ РѕРґРЅРѕР№ РјР°СЃС‚Рё Рё РѕРґРЅР° РґРѕРїРѕР». РєР°СЂС‚Р°";
    this.xoh = "Р”РІР° РІР°Р»РµС‚Р°, РґРІРµ РґР°РјС‹, РґРІР° РєРѕСЂРѕР»СЏ РёР»Рё С‚СѓР·Р°";
    this.zxh = "РџСЏС‚СЊ РєР°СЂС‚ РїРѕ РїРѕСЂСЏРґРєСѓ С‡РµСЂРµР· С‚СѓР· (3-2-Рў-Рљ-Р”)";
    this.ivc = "РљРѕРјР±РёРЅР°С†РёСЏ РёР· РєР°СЂС‚ СЃ РєР°СЂС‚РёРЅРєР°РјРё: РґРІРµ РІР°Р»РµС‚Р°, РґРІРµ РґР°РјС‹ Рё РєРѕСЂРѕР»СЊ";
    this.rkk = "РџСЏС‚СЊ С‡РµС‚РЅС‹С… РёР»Рё РїСЏС‚СЊ РЅРµ С‡РµС‚РЅС‹С… РєР°СЂС‚ РїРѕ РїРѕСЂСЏРґРєСѓ";
    this.fmm = "ROYAL FLUSH СЃ РґР¶РѕРєРµСЂРѕРј";
    this.sei = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ 2 Рё РѕРґРЅР° РґРѕРїРѕР». РєР°СЂС‚Р°";
    this.dlw = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ 5, 6, 7, 8, 9, 10, РІР°Р»РµС‚, РґР°РјР° РёР»Рё РєРѕСЂРѕР»СЊ";
    this.ojk = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ 2, 3 РёР»Рё 4 СЃ Р»СЋР±РѕР№ РґРѕРїРѕР». РєР°СЂС‚РѕР№.";
    this.bgl = "Р§РµС‚С‹СЂРµ С‚СѓР·Р° Рё РѕРґРЅР° РґРѕРїРѕР». РєР°СЂС‚Р°";
    this.dit = "Р§РµС‚С‹СЂРµ РґРІРѕР№РєРё, С‚СЂРѕР№РєРё РёР»Рё С‡РµС‚РІРµСЂРєРё СЃ С‚СѓР·РѕРј, РґРІРѕР№РєРѕР№, С‚СЂРѕР№РєРѕР№ РёР»Рё С‡РµС‚РІРµСЂРєРѕР№";
    this.mrd = "Р§РµС‚С‹СЂРµ С‚СѓР·Р° СЃ 2, 3 РёР»Рё 4";
    this.clr = "Р”РІР° РєРѕСЂРѕР»СЏ РёР»Рё С‚СѓР·Р°";
    this.jim = "Р”РІРµ РєР°СЂС‚С‹ 10, РІР°Р»РµС‚, РґР°РјР°, РєРѕСЂРѕР»СЊ РёР»Рё С‚СѓР·";
    this.uyh = "FIVE OF A KIND";
    this.zqo = "ROYAL FLUSH";
    this.crm = "STRAIGHT FLUSH";
    this.hbz = "FOUR OF A KIND";
    this.xcx = "FULL HOUSE";
    this.ccj = "FLUSH";
    this.jcf = "STRAIGHT";
    this.psa = "THREE OF A KIND";
    this.eui = "TWO PAIRS";
    this.jxx = "HIGH PAIR";
    this.lzu = "FOUR FLUSH";
    this.eoo = "POKER";
    this.xgr = "SKIP STRAIGHT";
    this.cbg = "BLAZE";
    this.eie = "CORNER STRAIGHT";
    this.ibh = "TENS OR BETTER";
    this.zpo = "JACKS OR BETTER";
    this.cjl = "KINGS OR BETTER";
    this.aue = "WILD ROYAL FLUSH";
    this.dsh = "FOUR DEUCES";
    this.vnz = "FOUR 5 TO KING";
    this.hca = "FOUR 2 TO 4";
    this.mkz = "FOUR ACES";
    this.mvg = "FOUR LOW WITH LOW";
    this.imc = "FOUR ACES WITH 2, 3 OR 4";
    this.irg = "РЈРґРІРѕРёС‚СЊ РёР»Рё РІР·СЏС‚СЊ?";
    this.zqb = "Р’Р«Р‘Р•Р РРўР• РљРђР РўРЈ";
    this.iht = "Р•СЃР»Рё Р’Р°С€Рё РєР°СЂС‚С‹ РєСЂСѓРїРЅРµРµ, С‡РµРј РєР°СЂС‚С‹ РґРёР»РµСЂР°, Р’С‹ РІС‹РёРіСЂР°РµС‚Рµ!";
    this.xao = "Р•СЃР»Рё Р’Р°С€Рё РєР°СЂС‚С‹ РјРµР»СЊС‡Рµ, С‡РµРј РєР°СЂС‚С‹ РґРёР»РµСЂР°, Р’С‹ РЅРµ РІС‹РёРіСЂР°РµС‚Рµ";
    this.hdy = "Р•СЃР»Рё РґРѕСЃС‚РѕРёРЅСЃС‚РІРѕ Р’Р°С€РёС… РєР°СЂС‚ СЂР°РІРЅРѕ РєР°СЂС‚Р°Рј РґРёР»РµСЂР°, СЌС‚Рѕ РѕР·РЅР°С‡Р°РµС‚ РЅРёС‡СЊСЋ";
    this.yhv = "РўРЈР— СЃР°РјР°СЏ РєСЂСѓРїРЅР°СЏ, Р”Р’Рђ СЃР°РјР°СЏ РјРµР»РєР°СЏ РєР°СЂС‚Р°, РЅРµС‚ РґР¶РѕРєРµСЂРѕРІ.";
    this.spv = "Р’Р«РР“Р РђР™РўР• РЈ Р РђР—Р”РђР®Р©Р•Р“Рћ, Р§РўРћР‘Р« РЈР”Р’РћРРўР¬ Р’Р«РР“Р Р«РЁ";
    this.qts = "Р РћР’РќРћ";
    this.nus = "РР“Р РћРљ";
    this.sru = "DEALER";
    this.xqe = "Р’Р«Р‘Р•Р РРўР• РџР РђР’РР›Р¬РќР«Р™ РќРћРњРРќРђР›, Р§РўРћР‘Р« РЈР”Р’РћРРўР¬ Р’Р«РР“Р Р«РЁ."
}
nxt.prototype = new oab;

function adp() {
    this.qty = "PARAR";
    this.qcq = "ROJO";
    this.akh = "NEGRO";
    this.clw = "ALTO";
    this.hzz = "BAJO";
    this.kwo = "DAR CARTAS";
    this.squ = "RETENER CARTAS";
    this.sxs = "DAR CARTAS";
    this.opb = "Cinco cartas iguales (sГіlo posible con el comodin)";
    this.rvj = "As - rey - dama - sota - 10 del mismo color";
    this.xzr = "STRAIGHT del mismo color";
    this.zxh = "Escalera con as en el centro";
    this.ivc = "CombinaciГіn de figuras con sota, dama y rey";
    this.uuc = "Cuatro cartas del mismo valor";
    this.rkk = "Secuencia de cinco cartas pares o impares de valores sucesivos";
    this.vps = "CombinaciГіn entre THREE OF A KIND y PAIR";
    this.iul = "Cinco cartas del mismo color";
    this.tqn = "Cinco cartas puestas en orden pero no del mismo color";
    this.gju = "Tres cartas equivalentes";
    this.qry = "Dos pares diferentes y una quinta carta";
    this.spa = "Cuatro cartas del mismo color con una quinta carta";
    this.xoh = "Dos sotas, damas, reyes o ases";
    this.fmm = "ROYAL FLUSH con comodin";
    this.sei = "Cuatro doses con otra carta";
    this.dlw = "Cuatro 5, 6, 7, 8, 9, 10, sotas, damas o reyes";
    this.ojk = "Cuatro de dos, de tres o de cuatro con otra carta";
    this.bgl = "Cuatro ases con otra carta";
    this.dit = "Cuatro 2, 3 o 4 con un as, una 2, 3 o 4";
    this.mrd = "Cuatro ases con una 2, 3 o 4";
    this.clr = "Dos reyes o dos ases";
    this.jim = "Dos 10, sotas, damas, reyes o ases";
    this.uyh = "FIVE OF A KIND";
    this.zqo = "ROYAL FLUSH";
    this.crm = "STRAIGHT FLUSH";
    this.hbz = "FOUR OF A KIND";
    this.xcx = "FULL HOUSE";
    this.ccj = "FLUSH";
    this.jcf = "STRAIGHT";
    this.psa = "THREE OF A KIND";
    this.eui = "TWO PAIRS";
    this.jxx = "HIGH PAIR";
    this.lzu = "FOUR FLUSH";
    this.eoo = "POKER";
    this.xgr = "SKIP STRAIGHT";
    this.cbg = "BLAZE";
    this.eie = "CORNER STRAIGHT";
    this.ibh = "TENS OR BETTER";
    this.zpo = "JACKS OR BETTER";
    this.cjl = "KINGS OR BETTER";
    this.aue = "WILD ROYAL FLUSH";
    this.dsh = "FOUR DEUCES";
    this.vnz = "FOUR 5 TO KING";
    this.hca = "FOUR 2 TO 4";
    this.mkz = "FOUR ACES";
    this.mvg = "FOUR LOW WITH LOW";
    this.imc = "FOUR ACES WITH 2, 3 OR 4";
    this.irg = "Arriesgar otra vez o tomar el premio?";
    this.zqb = "Tome una carta";
    this.iht = "Si la carta es mГЎs alta que la del crupier: hay premio!";
    this.xao = "Si la carta elegida es mГЎs baja que la del crupier: no hay premio!";
    this.hdy = "Si la carta elegida es la misma que la del crupier: QUEDA IGUAL";
    this.yhv = "ACE es la mГЎs alta, dos es la mГЎs baja, no hay comodin.";
    this.spv = "GANAR LA MANO PARA DOBLAR EL PREMIO";
    this.xqe = "SELECCIONAR EL VALOR CORRECTO PARA DOBLAR EL PREMIO";
    this.qts = "IGUAL";
    this.nus = "JUGADOR";
    this.sru = "MANO"
}
adp.prototype = new ojn;

function pxv() {
    this.qty = "HALTEN";
    this.qcq = "ROT";
    this.akh = "SCHWARZ";
    this.clw = "HOCH";
    this.hzz = "TIEF";
    this.kwo = "KARTEN GEBEN";
    this.squ = "KARTEN HALTEN";
    this.sxs = "KARTEN GEBEN";
    this.opb = "FГјnf gleiche Karten (nur mit Joker mГ¶glich)";
    this.rvj = "Ass - KГ¶nig - Dame - Buben - 10er der selben Farbe";
    this.xzr = "STRAIGHT in der selben Farbe";
    this.uuc = "Vier wertgleiche Karten";
    this.vps = "Kombination aus THREE OF A KIND und PAIR";
    this.iul = "FГјnf Karten mit der selben Farbe";
    this.tqn = "FГјnf Karten in geordneter Reihenfolge, ohne der selben Farbe";
    this.gju = "Drei gleichwertige Karten";
    this.qry = "Zwei verschiedene Paare und eine 5. Karte";
    this.spa = "Zwei Buben, Damen, KГ¶nige oder Assen";
    this.xoh = "Vier Karten der selben Farbe mit einer 5. Karte";
    this.zxh = "Straight mit Ass in der Mitte";
    this.ivc = "Bildkarten welche Bube, Dame und KГ¶nig enthalten";
    this.rkk = "FГјnf gerade oder ungerade aufeinanderfolgende Werte";
    this.fmm = "ROYAL FLUSH mit Joker";
    this.sei = "Vier Zweier mit einer anderen Karte";
    this.dlw = "Vier 5er, 6er, 7er, 8er, 9er, 10er, Buben, Damen oder KГ¶nige";
    this.ojk = "Vier 2er,3er oder 4er mit einer anderen Karte";
    this.bgl = "Vier Assen mit einer anderen Karte";
    this.dit = "Vier 2er, 3er oder 4er mit einer As, einem 2er, 3er oder 4er";
    this.mrd = "Vier Assen mit einer 2, 3 oder 4";
    this.clr = "Zwei KГ¶nige oder zwei Assen";
    this.jim = "Zwei 10er, Buben, Damen, KГ¶nige oder Assen";
    this.uyh = "FIVE OF A KIND";
    this.zqo = "ROYAL FLUSH";
    this.crm = "STRAIGHT FLUSH";
    this.hbz = "FOUR OF A KIND";
    this.xcx = "FULL HOUSE";
    this.ccj = "FLUSH";
    this.jcf = "STRAIGHT";
    this.psa = "THREE OF A KIND";
    this.eui = "TWO PAIRS";
    this.jxx = "HIGH PAIR";
    this.lzu = "FOUR FLUSH";
    this.eoo = "POKER";
    this.xgr = "SKIP STRAIGHT";
    this.cbg = "BLAZE";
    this.eie = "CORNER STRAIGHT";
    this.ibh = "TENS OR BETTER";
    this.zpo = "JACKS OR BETTER";
    this.cjl = "KINGS OR BETTER";
    this.aue = "WILD ROYAL FLUSH";
    this.dsh = "FOUR DEUCES";
    this.vnz = "FOUR 5 TO KING";
    this.hca = "FOUR 2 TO 4";
    this.mkz = "FOUR ACES";
    this.mvg = "FOUR LOW WITH LOW";
    this.imc = "FOUR ACES WITH 2, 3 OR 4";
    this.irg = "NOCHEINMAL GAMBELN ODER GEWINN NEHMEN?";
    this.zqb = "NIMM EINE KARTE";
    this.iht = "Wenn die gewГ¤hlte Karte hГ¶her ist als die vom Dealer: Gewinn!";
    this.xao = "Wenn die gewГ¤hlte Karte niedriger ist als die vom Dealer: Kein Gewinn";
    this.hdy = "Wenn die gewГ¤hlte Karte die selbe ist wie die vom Dealer: GLEICH";
    this.yhv = "Ass ist die hГ¶chste Karte, Zwei die niedrigste, keine Joker.";
    this.spv = "BESIEGE DEN GEBER UM DEN GEWINN ZU VERDOPPELN";
    this.xqe = "WГ„HLE DEN RICHTIGEN WERT UM DEN GEWINN ZU VERDOPPELN";
    this.qts = "GLEICH";
    this.nus = "SPIELER";
    this.sru = "GEBER"
}
pxv.prototype = new nia;

function imp() {
    this.qty = "TUTUNUZ";
    this.qcq = "KIRMIZI";
    this.akh = "SIYAH";
    this.clw = "YГњKSEK";
    this.hzz = "DERIN";
    this.kwo = "KARTLARI VERД°NД°Z";
    this.squ = "KARTLARI TUTUNUZ";
    this.sxs = "KARTLARI VERД°NД°Z";
    this.opb = "BeЕџ ayni kartlar (tek jokerle mГјmkГјn)";
    this.rvj = "Ass - papaz - dama - valeler - 10lar ayni renkli";
    this.xzr = "STRAIGHT ayni renkli";
    this.uuc = "DГ¶rt ayni deДџerde olan kartlar";
    this.vps = "Kombinasyon THREE OF A KIND ve PAIR le";
    this.iul = "BeЕџ ayni renkli kartlar";
    this.tqn = "BeЕџ kartlar dГјzenli bir sД±ralamada, ayni renk siz";
    this.gju = "ГњГ§ ayni deДџerinde olan kartlar";
    this.qry = "Iki deДџiЕџik Г§iftle ve bir 5. kart";
    this.spa = "Iki valeler, damalar, papazlar veya asslar";
    this.xoh = "Ayni renkten dГ¶rt kart ve bir 5. kart";
    this.zxh = "AsвЂ™Д± ortada olan Straight";
    this.ivc = "Vale, kД±z ve papaz gГ¶steren resimli kartlar";
    this.rkk = "Arka arkaya beЕџ Г§ift veya tek deДџer";
    this.fmm = "ROYAL FLUSH  joker le";
    this.sei = "DГ¶rt ikili baЕџka bir kartla";
    this.dlw = "DГ¶rt 5вЂ™li, 6вЂ™lД±, 7вЂ™li, 8вЂ™li, 9вЂ™lu, 10вЂ™lu, vale, kД±z veya papaz";
    this.ojk = "DГ¶rt 2ler,3ler veya 4ler baЕџka bir kartla";
    this.bgl = "DГ¶rt as baЕџka bir kartla";
    this.dit = "Bir as ile bir 2'li, 3'lГј veya 4'lГј ile dГ¶rt adet 2'li, 3'lГј veya 4'lГј";
    this.mrd = "2,3 veya 4 ile dГ¶rt as";
    this.clr = "Iki papazlar veya iki asslar";
    this.jim = "Iki 10lar, valeler, damalar, papazlar veya asslar";
    this.uyh = "FIVE OF A KIND";
    this.zqo = "ROYAL FLUSH";
    this.crm = "STRAIGHT FLUSH";
    this.hbz = "FOUR OF A KIND";
    this.xcx = "FULL HOUSE";
    this.ccj = "FLUSH";
    this.jcf = "STRAIGHT";
    this.psa = "THREE OF A KIND";
    this.eui = "TWO PAIRS";
    this.jxx = "HIGH PAIR";
    this.lzu = "FOUR FLUSH";
    this.eoo = "POKER";
    this.xgr = "SKIP STRAIGHT";
    this.cbg = "BLAZE";
    this.eie = "CORNER STRAIGHT";
    this.ibh = "TENS OR BETTER";
    this.zpo = "JACKS OR BETTER";
    this.cjl = "KINGS OR BETTER";
    this.aue = "WILD ROYAL FLUSH";
    this.dsh = "FOUR DEUCES";
    this.vnz = "FOUR 5 TO KING";
    this.hca = "FOUR 2 TO 4";
    this.mkz = "FOUR ACES";
    this.mvg = "FOUR LOW WITH LOW";
    this.imc = "FOUR ACES WITH 2, 3 OR 4";
    this.irg = "Bir daha riziko veya kazanГ§Д± alД±nД±z?";
    this.zqb = "Bir kart al";
    this.iht = "SeГ§ilen kart DealerвЂ™inkinden yГјksekse: KazanГ§!";
    this.xao = "SeГ§ilen kart DealerвЂ™inkinden dГјЕџГјkse: KazanГ§ yok";
    this.hdy = "SeГ§ilen kart DealerвЂ™inkiyle aynД± ise: PAT";
    this.yhv = "ACE is highest, two is lowest, Joker yok";
    this.spv = "KAДћITLARI DAДћITANI YENEREK KAZANCINI Д°KД°YE KATLAYABД°LД°RSД°N";
    this.qts = "AYNI";
    this.nus = "OYUNCU";
    this.sru = "DEALER";
    this.xqe = "DOДћRU DEДћERД° SEГ‡EREK KAZANCINI Д°KД°YE KATLARSIN"
}
imp.prototype = new ebn;

function vmf() {
    this.qty = "DRЕЅET";
    this.qcq = "CERVENГЃ";
    this.akh = "CERNГЃ";
    this.clw = "VELKГЃ";
    this.hzz = "MALГЃ";
    this.kwo = "DГЃT KARTY";
    this.squ = "KARTY DRЕЅET";
    this.sxs = "DГЃT KARTY";
    this.opb = "Pet stejnГЅch karet(moЕѕnГ© pouze s Jokerem)";
    this.rvj = "Eso - krГЎl - krГЎlovna - kluk - desГ­tka stejnГ© barvy";
    this.xzr = "STRAIGHT s kartami stejnГ© barvy";
    this.uuc = "Ctyri karty stejnГ© hodnoty";
    this.vps = "Kombinace z THREE OF A KIND a PAIR";
    this.iul = "Pet karet stejnГ© barvy";
    this.tqn = "Pet karet usporГЎdanГЅch v rade, ale ne stejnГ© barvy";
    this.gju = "Tri karty stejnГ© hodnoty";
    this.qry = "Dve odliЕЎnГ© dvojice a 5. karta";
    this.spa = "Dva klucii, krГЎlovny, krГЎlovГ© nebo esa";
    this.xoh = "Ctyrii karty stejnГ© barvy s 5. kartou";
    this.zxh = "postupka s esem uprostred";
    this.ivc = "kombinace obsahujГ­cГ­ pouze postavy (jack, queen  a king)";
    this.rkk = "postupka vytvorenГЎ ze sudГЅch nebo lichГЅch za sebou nГЎsledujГ­cГ­ch cГ­sel";
    this.fmm = "ROYAL FLUSH s Jokerem";
    this.sei = "Ctyri dvojky s jinou kartou";
    this.dlw = "ДЊtyЕ™i 5ky, 6ky, 7ky,8ky,9ky,10ky, kluci,krГЎlovny nebo krГЎlovГ©";
    this.ojk = "ДЊtyЕ™i 2ky,3ky nebo 4ky s dalЕЎГ­ kartou";
    this.bgl = "ДЊtyri Esa s dalЕЎГ­ kartou";
    this.dit = "ДЊtyЕ™i 2, 3 nebo 4 s Esem, 2,3 nebo 4";
    this.mrd = "ДЊtyЕ™i Esa s jednou 2,3 nebo 4";
    this.clr = "Dva KrГЎlovГ© nebo dvД› Esa";
    this.jim = "Dve desГ­tky, kluci, krГЎlovny, krГЎlovГ© nebo esa";
    this.uyh = "FIVE OF A KIND";
    this.zqo = "ROYAL FLUSH";
    this.crm = "STRAIGHT FLUSH";
    this.hbz = "FOUR OF A KIND";
    this.xcx = "FULL HOUSE";
    this.ccj = "FLUSH";
    this.jcf = "STRAIGHT";
    this.psa = "THREE OF A KIND";
    this.eui = "TWO PAIRS";
    this.jxx = "HIGH PAIR";
    this.lzu = "FOUR FLUSH";
    this.eoo = "POKER";
    this.xgr = "SKIP STRAIGHT";
    this.cbg = "BLAZE";
    this.eie = "CORNER STRAIGHT";
    this.ibh = "TENS OR BETTER";
    this.zpo = "JACKS OR BETTER";
    this.cjl = "KINGS OR BETTER";
    this.aue = "WILD ROYAL FLUSH";
    this.dsh = "FOUR DEUCES";
    this.vnz = "FOUR 5 TO KING";
    this.hca = "FOUR 2 TO 4";
    this.mkz = "FOUR ACES";
    this.mvg = "FOUR LOW WITH LOW";
    this.imc = "FOUR ACES WITH 2, 3 OR 4";
    this.irg = "HRГЃT ZNOVU NEBO VZГЌT VГќHRU?";
    this.zqb = "ZVOL KARTU";
    this.iht = "Je-li zvolenГЎ karta vyЕЎЕЎГ­ neЕѕ dealerova: VГЅhra!";
    this.xao = "Je-li  zvolenГЎ karta niЕѕЕЎiГ­ neЕѕ dealerova: ЕЅГЎdnГЎ vГЅhra!";
    this.hdy = "Je-li  zvolenГЎ karta shodnГЎ s dealerovou: nerozhodnГЅ vГЅsledek";
    this.yhv = "Eso je nejvyЕЎЕЎГ­, dvД› je nejniЕѕЕЎГ­, ЕѕГЎdnГ© divokГ© karty.";
    this.spv = "PORAZIT DEALERA KE ZDVOJNГЃSOBENГЌ VГќHRY";
    this.xqe = "VYBRAT SPRГЃVNOU HODNOTU KE ZDVOJNГЃSOBENГЌ VГќHRY";
    this.qts = "STEJNГ‰";
    this.nus = "HRГЃДЊ";
    this.sru = "DEALER"
}
vmf.prototype = new zcw;

function niu() {
    this.qty = "HOIA";
    this.qcq = "PUNANE";
    this.akh = "MUST";
    this.clw = "KГ•RGE";
    this.hzz = "MADAL";
    this.kwo = "JAGA KAARDID";
    this.squ = "HOIA KAARTE";
    this.sxs = "JAGA KAARDID";
    this.opb = "viis vГµrdvГ¤Г¤rset kaarti (vГµimalik ainult koos Wild kaardiga)";
    this.rvj = "sama masti Г¤ss - kuningas - emand - soldat - kГјmme";
    this.xzr = "RIDA samavГ¤rvi kaartidest";
    this.uuc = "neli sama vГ¤Г¤rtusega kaarti";
    this.vps = "kombinatsioon KOLMIK ja PAAR";
    this.iul = "viis sama vГ¤rvi kaarti";
    this.tqn = "viis jГ¤rjestikust, kuid erivГ¤rvi kaarti";
    this.gju = "kolm vГµrdvГ¤Г¤rset kaarti";
    this.qry = "kaks kindlat paari ja ГјkskГµik milline viies kaart";
    this.spa = "kaks soldatit, emandat, kuningat vГµi Г¤ssa";
    this.xoh = "neli sama vГ¤rvi kaarti koos ГјkskГµik millise viienda kaardiga";
    this.fmm = "KUNINGLIK MASTIRIDA, mis sisaldab Wild kaarti";
    this.sei = "neli kahte koos ГјkskГµik millise muu kaardiga";
    this.dlw = "neli viite, kuute, seitset, kaheksat, Гјheksat, kГјmmet, Soldatit, Emandat vГµi Kuningat";
    this.ojk = "neli kahte, kolme vГµi nelja koos ГјkskГµik millise muu kaardiga";
    this.bgl = "neli Г¤ssa ГјkskГµik millise muu kaardiga";
    this.dit = "Neli 2-te, 3-e vГµi 4-ja koos 2, 3, vГµi 4";
    this.mrd = "Neli Г¤ssa ja 2, 3, vГµi 4";
    this.clr = "kaks Kuningat vГµi Г„ssa";
    this.jim = "kaks kГјmmet, soldatit, emandat, kuningat vГµi Г¤ssa";
    this.uyh = "FIVE OF A KIND";
    this.zqo = "ROYAL FLUSH";
    this.crm = "STRAIGHT FLUSH";
    this.hbz = "FOUR OF A KIND";
    this.xcx = "FULL HOUSE";
    this.ccj = "FLUSH";
    this.jcf = "STRAIGHT";
    this.psa = "THREE OF A KIND";
    this.eui = "TWO PAIRS";
    this.jxx = "HIGH PAIR";
    this.lzu = "FOUR FLUSH";
    this.eoo = "POKER";
    this.xgr = "SKIP STRAIGHT";
    this.cbg = "BLAZE";
    this.eie = "CORNER STRAIGHT";
    this.ibh = "TENS OR BETTER";
    this.zpo = "JACKS OR BETTER";
    this.cjl = "KINGS OR BETTER";
    this.aue = "WILD ROYAL FLUSH";
    this.dsh = "FOUR DEUCES";
    this.vnz = "FOUR 5 TO KING";
    this.hca = "FOUR 2 TO 4";
    this.mkz = "FOUR ACES";
    this.mvg = "FOUR LOW WITH LOW";
    this.imc = "FOUR ACES WITH 2, 3 OR 4";
    this.qts = "VIIK";
    this.nus = "PLAYER";
    this.sru = "DEALER";
    this.irg = "MГ„NGI VEEL VГ•I VГ•TA VГ•IT?";
    this.iht = "Kui valitud kaart on suurem kui diileril: OLED VГ•ITNUD!";
    this.xao = "Kui valitud kaart on vГ¤iksem kui diileril: kaotad";
    this.hdy = "Kui valitud kaart on diileri kaardiga vГµrdne: viik";
    this.yhv = "Г„SS on kГµrgeim, kaks madalaim, metsikuid kaarte ei ole.";
    this.zxh = "rida Г¤ssaga keskel";
    this.ivc = "kombinatsioon soldatist, emandast ja kuningast";
    this.rkk = "kaheste vahedega rida";
    this.zqb = "VALI KAART";
    this.spv = "VГ•IDA DIILERIT, ET KAHEKORDISTADA OMA VГ•IT";
    this.xqe = "VГ•IDU DUUBELDAMISEKS VALI Г•IGE VГ„Г„RTUS"
}
niu.prototype = new lie;

function wyf() {
    this.qty = "ОљОЎО‘О¤О—ОЈО¤О•";
    this.qcq = "ОљОџОљОљО™ОќОџ";
    this.akh = "ОњО‘ОҐОЎОџ";
    this.clw = "ОҐОЁО—О›Оџ";
    this.hzz = "О§О‘ОњО—О›Оџ";
    this.kwo = "ОњОџО™ОЎО‘ОЈО¤О• О§О‘ОЎО¤О™О‘";
    this.squ = "ОљОЎО‘О¤О—ОЈО¤О• О§О‘ОЎО¤О™О‘";
    this.sxs = "О¤ОЎО‘О’О—ОћО¤О• О§О‘ОЎО¤О™О‘";
    this.opb = "ПЂО­ОЅП„Оµ ОЇОґО№О± П‡О±ПЃП„О№О¬ (ОјПЊОЅО· ПЂО№ОёО±ОЅПЊП„О·П„О± ОјОµ П„Ої Joker)";
    this.rvj = "О¬ПѓПѓОїП‚ - ПЃО®ОіО±П‚ - ОЅП„О¬ОјО± - ОІО±О»О­П‚ - ОґО­ОєО± О±ПЂПЊ П„Ої ОЇОґО№Ої П‡ПЃПЋОјО±";
    this.xzr = "STRAIGHT ОјОµ П‡О±ПЃП„О№О¬ О±ПЂПЊ П„Ої ОЇОґО№Ої П‡ПЃПЋОјО±";
    this.uuc = "П„О­ПѓПѓОµПЃО± П‡О±ПЃП„О№О¬ ОјОµ П„О·ОЅ ОЇОґО№О± О±ОѕОЇО±";
    this.vps = "ПѓП…ОЅОґП…О±ПѓОјПЊП‚ О±ПЂПЊ THREE OF A KIND ОєО±О№ О­ОЅО± PAIR";
    this.iul = "ПЂО­ОЅП„Оµ П‡О±ПЃП„О№О¬ ОјОµ П„Ої ОЇОґО№Ої П‡ПЃПЋОјО±";
    this.tqn = "ПЂО­ОЅП„Оµ П‡О±ПЃП„О№О¬ ПѓОµ О±ПЌОѕОїП…ПѓО± ПѓОµО№ПЃО¬, О±О»О»О¬ ПЊП‡О№ ОЇОґО№Ої П‡ПЃПЋОјО±";
    this.gju = "П„ПЃОЇО± П‡О±ПЃП„О№О¬ ОЇОґО№О±П‚ О±ОѕОЇО±П‚";
    this.qry = "ОґПЌОї ОґО№О±П†ОїПЃОµП„О№ОєО¬ О¶ОµП…ОіО¬ПЃО№О± ОєО±О№ ОїПЂОїО№ОїОґО®ПЂОїП„Оµ ПЂО­ОјПЂП„Ої П‡О±ПЃП„ОЇ";
    this.spa = "ОґПЌОї ОІО±О»О­ОґОµП‚, ОЅП„О¬ОјОµП‚, ПЃО®ОіОµП‚ О® О¬ПѓПѓОїО№";
    this.xoh = "П„О­ПѓПѓОµПЃО± П‡О±ПЃП„О№О¬ О±ПЂПЊ П„Ої ОЇОґО№Ої П‡ПЃПЋОјО± ОјО±О¶ОЇ ОјОµ ОєО¬ОёОµ ПЂО­ОјПЂП„О· ОєО¬ПЃП„О±";
    this.zxh = "Straight ОјОµ О¬ПѓПѓОї ПѓП„Ої ОєО­ОЅП„ПЃОї";
    this.ivc = "ПѓП…ОЅОґО№О±ПѓОјПЊП‚ О±ПЂПЊ П†О№ОіОїПЌПЃОµП‚ ПЂОїП… ОІОіО±ОЇОЅОµО№ ОІО±О»О­П‚, ОЅП„О¬ОјО± ОєО±О№ ПЃО®ОіО±П‚";
    this.rkk = "ПѓОµО№ПЃО¬ ОјО±О¶ОЇ ОјОµ ОјОїОЅО¬ О® О¶П…ОіО¬ О­П‡ОµО№ ОґО№О±ОґОїП‡О№ОєО® О±ОѕОЇО±";
    this.fmm = "ROYAL FLUSH ПЂОµПЃО№О­П‡ОµО№ ОєО±О№ Joker";
    this.sei = "П„О­ПѓПѓОµПЃО± ОґП…О¬ПЃО№О± ОјО±О¶ОЇ ОјОµ ОєО¬ОёОµ О¬О»О»О· ОєО¬ПЃП„О±";
    this.dlw = "П„О­ПѓПѓОµПЃО± 5's, 6's,7's, 8's, 9's, 10's, О’О‘О›О•О”О•ОЈ, ОќО¤О‘ОњО•ОЈ О® ОЎО—О“О•ОЈ";
    this.ojk = "О¤О­ПѓПѓОµПЃО± 2's О® 4's ОјО±О¶ОЇ ОјОµ ОєО¬ОёОµ О¬О»О»О· ОєО¬ПЃП„О±";
    this.bgl = "П„О­ПѓПѓОµПЃО№П‚ О¬ПѓПѓОїО№ ОјО±О¶ОЇ ОјОµ ОєО¬ОёОµ О¬О»О»О· ОєО¬ПЃП„О±";
    this.dit = "О¤О­ПѓПѓОµПЃО± 2О¬ПЃО№О±, 3О¬ПЃО№О± О® 4О¬ПЃО№О± ОјО±О¶ОЇ ОјОµ О­ОЅО±ОЅ О†ПѓПѓОї, О­ОЅО± 2О¬ПЃО№, 3О¬ПЃО№ О® 4О¬ПЃО№";
    this.mrd = "О¤О­ПѓПѓОµПЃО№П‚ О¬ПѓПѓОїО№ ОјО±О¶ОЇ ОјОµ О­ОЅО± 2, 3 О® 4";
    this.clr = "ОґПЌОї ОЎО®ОіОµП‚ О® О†ПѓПѓОїО№";
    this.jim = "ОґПЌОї ОґОµОєО¬ПЃО№О±, ОІО±О»О­ОґОµП‚, ОЅП„О¬ОјОµП‚, ПЃО®ОіОµП‚ О® О¬ПѓПѓОїО№";
    this.uyh = "FIVE OF A KIND";
    this.zqo = "ROYAL FLUSH";
    this.crm = "STRAIGHT FLUSH";
    this.hbz = "FOUR OF A KIND";
    this.xcx = "FULL HOUSE";
    this.ccj = "FLUSH";
    this.jcf = "STRAIGHT";
    this.psa = "THREE OF A KIND";
    this.eui = "TWO PAIRS";
    this.jxx = "HIGH PAIR";
    this.lzu = "FOUR FLUSH";
    this.eoo = "POKER";
    this.xgr = "SKIP STRAIGHT";
    this.cbg = "BLAZE";
    this.eie = "CORNER STRAIGHT";
    this.ibh = "TENS OR BETTER";
    this.zpo = "JACKS OR BETTER";
    this.cjl = "KINGS OR BETTER";
    this.aue = "WILD ROYAL FLUSH";
    this.dsh = "FOUR DEUCES";
    this.vnz = "FOUR 5 TO KING";
    this.hca = "FOUR 2 TO 4";
    this.mkz = "FOUR ACES";
    this.mvg = "FOUR LOW WITH LOW";
    this.imc = "FOUR ACES WITH 2, 3 OR 4";
    this.spv = "ОљО•ОЎО”О™ОЈО¤О• О¤ОџОќ ОќО¤О™О›О•ОЎ О“О™О‘ ОќО‘ О”О™О О›О‘ОЈО™О‘ОЈО•О¤О• О¤Оџ ОљО•ОЎО”ОџОЈ ОЈО‘ОЈ";
    this.qts = "О™ОЈОџО О‘О›О™О‘";
    this.nus = "О О‘IО§О¤О—ОЈ";
    this.sru = "ОќО¤HО›О•ОЎ";
    this.irg = "ОћО‘ОќA ОЎIОЈОљОџ H О О‘ОЎО‘О›О‘О’H;";
    this.iht = "О‘ОЅ О­П‡ОµП„Оµ П‡О±ПЃП„ОЇ ОјОµОіО±О»ПЌП„ОµПЃОї О±ПЂПЊ П„ОїОЅ ОєПЃОїП…ПЂО№О­ПЃО·: ОљО•ОЎО”О™О–О•О¤О•!";
    this.xao = "О‘ОЅ О­П‡ОµП„Оµ П‡О±ПЃП„ОЇ ОјО№ОєПЃПЊП„ОµПЃОї О±ПЂПЊ П„ОїОЅ ОєПЃОїП…ПЂО№О­ПЃО·: О§О‘ОќО•О¤О•!";
    this.hdy = "О‘ОЅ О­П‡ОµП„Оµ П„Ої ОЇОґО№Ої П‡О±ПЃП„ОЇ ОјОµ П„ОїОЅ ОєПЃОїП…ПЂО№О­ПЃО·: О№ПѓОїОІО±ОёОјО®П„Оµ";
    this.yhv = "О‘ПѓПѓОїП‚ ОµОЇОЅО±О№ П„Ої ОјОµОіО±О»ПЌП„ОµПЃОї, ОґПЌОї ОµОЇОЅО±О№ П„Ої ОјО№ОєПЃПЊП„ОµПЃОї, ОґОµОЅ П…ПЂО¬ПЃП‡ОµО№ О¤О¶ПЊОєОµПЃ";
    this.zqb = "О•О О™О›EОћО¤О• ОљAОЎО¤О‘";
    this.xqe = "О•О О™О›О•ОћО¤О• О¤О— ОЈО©ОЈО¤О— О‘ОћО™О‘ О“О™О‘ ОќО‘ О”О™О О›О‘ОЈО™О‘ОЈО•О¤О• О¤Оџ ОљО•ОЎО”ОџОЈ ОЈО‘ОЈ"
}
wyf.prototype = new gvw;

function gvz() {
    this.qty = "Р—РђР”РЄР Р–РђРќР";
    this.qcq = "Р§Р•Р Р’Р•РќРђ";
    this.akh = "Р§Р•Р РќРђ";
    this.clw = "Р“РћР›РЇРњРђ";
    this.hzz = "РњРђР›РљРђ";
    this.kwo = "Р РђР—Р”РђР’РђРќР• РќРђ РљРђР РўРРўР•";
    this.squ = "Р—РђРџРђР—Р•РўР• РљРђР РўР";
    this.sxs = "РР—РўР•Р“Р›Р•РўР• РљРђР РўР";
    this.opb = "РїРµС‚ РµРґРЅР°РєРІРё РєР°СЂС‚Рё (СЃР°РјРѕ СЃ РґР¶РѕРєРµСЂ)";
    this.rvj = "РђСЃРµ - РџРѕРї - Р”Р°РјР° - Р’Р°Р»Рµ - 10 РѕС‚ РµРґРёРЅ Рё СЃСЉС‰ С†РІСЏС‚";
    this.xzr = "РљР•РќРўРђ СЃ РєР°СЂС‚Рё РѕС‚ РµРґРёРЅ Рё СЃСЉС‰ С†РІСЏС‚";
    this.uuc = "С‡РµС‚РёСЂРё РєР°СЂС‚Рё СЃ РµРґРЅР° Рё СЃСЉС‰Р° СЃС‚РѕР№РЅРѕСЃС‚";
    this.vps = "РєРѕРјР±РёРЅР°С†РёСЏ РѕС‚ С‚СЂРё РµРґРЅР°РєРІРё РєР°СЂС‚Рё Рё РµРґРёРЅ С‡РёС„С‚";
    this.iul = "РїРµС‚ РµРґРЅР°РєРІРё РєР°СЂС‚Рё";
    this.tqn = "РїРµС‚ РїРѕСЂРµРґРЅРё РєР°СЂС‚Рё, РЅРѕ РѕС‚ СЂР°Р·Р»РёС‡РµРЅ С†РІСЏС‚";
    this.gju = "С‚СЂРё РєР°СЂС‚Рё СЃ РµРґРЅР° Рё СЃСЉС‰Р° СЃС‚РѕР№РЅРѕСЃС‚";
    this.qry = "РґРІРµ СЂР°Р·Р»РёС‡РЅРё РґРІРѕР№РєРё Рё РЅСЏРєРѕСЏ РґСЂСѓРіР° 5-С‚Р° РєР°СЂС‚Р°";
    this.spa = "РґРІРµ Р’Р°Р»РµС‚Р°, Р”Р°РјРё, РџРѕРїР° РёР»Рё РђСЃР°";
    this.xoh = "С‡РµС‚РёСЂРё РєР°СЂС‚Рё РѕС‚ РµРґРёРЅ Рё СЃСЉС‰ С†РІСЏС‚ СЃ РЅСЏРєРѕСЏ РґСЂСѓРіР° РєР°СЂС‚Р°";
    this.fmm = "РљР•РќРў Р¤Р›Р•РЁ Р РћРЇР› СЃ РґР¶РѕРєРµСЂ";
    this.sei = "С‡РµС‚РёСЂРё 2-РєРё СЃ РЅСЏРєРѕСЏ РґСЂСѓРіР° РєР°СЂС‚Р°";
    this.dlw = "С‡РµС‚РёСЂРё 5-С†Рё, 6-С†Рё, 7-С†Рё, 8-С†Рё, 9-РєРё, 10-РєРё, Р’РђР›Р•РўРђ, Р”РђРњР РёР»Рё РџРћРџРћР’Р•";
    this.ojk = "С‡РµС‚РёСЂРё 2-РєРё, 3-РєРё РёР»Рё 4-РєРё СЃ РЅСЏРєРѕСЏ РґСЂСѓРіР° РєР°СЂС‚Р°";
    this.bgl = "С‡РµС‚РёСЂРё РђСЃР° СЃ РЅСЏРєРѕСЏ РґСЂСѓРіР° РєР°СЂС‚Р°";
    this.dit = "С‡РµС‚РёСЂРё 2-РєРё, 3-РєРё, РёР»Рё 4-РєРё СЃ РђСЃ, 2-РєР°, 3-РєР° РёР»Рё 4-РєР°";
    this.mrd = "С‡РµС‚РёСЂРё РђСЃР° СЃ 2-РєР°, 3-РєР° РёР»Рё 4-РєР°";
    this.clr = "РґРІР° РџРѕРїР° РёР»Рё РђСЃР°";
    this.jim = "РґРІРµ 10-РєРё, Р’Р°Р»РµС‚Р°, Р”Р°РјРё, РџРѕРїР° РёР»Рё РђСЃР°";
    this.uyh = "FIVE OF A KIND";
    this.zqo = "ROYAL FLUSH";
    this.crm = "STRAIGHT FLUSH";
    this.hbz = "FOUR OF A KIND";
    this.xcx = "FULL HOUSE";
    this.ccj = "FLUSH";
    this.jcf = "STRAIGHT";
    this.psa = "THREE OF A KIND";
    this.eui = "TWO PAIRS";
    this.jxx = "HIGH PAIR";
    this.lzu = "FOUR FLUSH";
    this.eoo = "POKER";
    this.xgr = "SKIP STRAIGHT";
    this.cbg = "BLAZE";
    this.eie = "CORNER STRAIGHT";
    this.ibh = "TENS OR BETTER";
    this.zpo = "JACKS OR BETTER";
    this.cjl = "KINGS OR BETTER";
    this.aue = "WILD ROYAL FLUSH";
    this.dsh = "FOUR DEUCES";
    this.vnz = "FOUR 5 TO KING";
    this.hca = "FOUR 2 TO 4";
    this.mkz = "FOUR ACES";
    this.mvg = "FOUR LOW WITH LOW";
    this.imc = "FOUR ACES WITH 2, 3 OR 4";
    this.qts = "РќР•Р Р•РЁР•РќРћ";
    this.nus = "РР“Р РђР§";
    this.sru = "Р”РР›РЄР ";
    this.irg = "Р”РЈР‘Р›РР РђР™РўР• РћРўРќРћР’Рћ РР›Р РџР РР‘Р•Р Р•РўР•?";
    this.iht = "РђРєРѕ РёР·Р±СЂР°РЅР°С‚Р° РєР°СЂС‚Р° Рµ РїРѕ-РіРѕР»СЏРјР° РѕС‚ РєР°СЂС‚Р°С‚Р° РЅР° РґРёР»СЉСЂР°:РџР•Р§Р•Р›РРўР•!";
    this.xao = "РђРєРѕ РёР·Р±СЂР°РЅР°С‚Р° РєР°СЂС‚Р° Рµ РїРѕ-РјР°Р»РєР° РѕС‚ РґРёР»СЉСЂРѕРІР°С‚Р°:Р“РЈР‘РРўР•";
    this.hdy = "РђРєРѕ РёР·Р±СЂР°РЅР°С‚Р° Рµ СЃСЉС‰Р°С‚Р°:РќРµСЂРµС€РµРЅРѕ";
    this.yhv = "РђСЃ Рµ РЅР°Р№-РіРѕР»СЏРјР°С‚Р°, 2-РєР° Рµ РЅР°Р№-РјР°Р»РєР°С‚Р°, Р±РµР· РґР¶РѕРєРµСЂ РєР°СЂС‚Рё.";
    this.zxh = "РїРµС‚ РїРѕСЂРµРґРЅРё РєР°СЂС‚Рё СЃ РђСЃ РІ СЃСЂРµРґР°С‚Р°";
    this.ivc = "РєРѕРјР±РёРЅР°С†РёСЏ РѕС‚ РєР°СЂС‚Рё РІ РєРѕРёС‚Рѕ РёРјР°(K -Q -J -РџРѕРї, Р”Р°РјР°, Р’Р°Р»Рµ)";
    this.rkk = "РїРµС‚ РєР°СЂС‚Рё СЃ С‡РµС‚РЅРё РёР»Рё РЅРµС‡РµС‚РЅРё СЃС‚РѕР№РЅРѕСЃС‚Рё";
    this.zqb = "Р—РђР”Р РЄР–РўР• РљРђР РўР";
    this.spv = "РџРћР‘Р•Р”Р Р”РР›РЄР Рђ, Р—Рђ Р”Рђ РЈР”Р’РћРРЁ РџР•Р§РђР›Р‘РђРўРђ";
    this.xqe = "РР—Р‘Р•Р Р РџР РђР’РР›РќРђРўРђ РЎРўРћР™РќРћРЎРў, Р—Рђ Р”Рђ РЈР”Р’РћРРЁ РџР•Р§РђР›Р‘РђРўРђ"
}
gvz.prototype = new bqh;

function jgw() {
    this.qty = "бѓ“бѓђбѓбѓ­бѓбѓ бѓ”бѓ—";
    this.qcq = "бѓ¬бѓбѓ—бѓ”бѓљбѓ";
    this.akh = "бѓЁбѓђбѓ•бѓ";
    this.clw = "бѓ›бѓђбѓ¦бѓђбѓљбѓ";
    this.hzz = "бѓ“бѓђбѓ‘бѓљбѓђ";
    this.kwo = "бѓђбѓбѓ¦бѓ”бѓ— бѓ‘бѓђбѓ бѓђбѓ—бѓ";
    this.squ = "бѓ“бѓђбѓбѓ­бѓбѓ бѓ”бѓ— бѓ‘бѓђбѓ бѓђбѓ—бѓ”бѓ‘бѓ";
    this.sxs = "бѓђбѓбѓ¦бѓ”бѓ— бѓ‘бѓђбѓ бѓђбѓ—бѓ";
    this.opb = "бѓ®бѓЈбѓ—бѓ бѓбѓ’бѓбѓ•бѓ” бѓ›бѓњбѓбѓЁбѓ•бѓњбѓ”бѓљбѓќбѓ‘бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ (бѓЁбѓ”бѓЎбѓђбѓ«бѓљбѓќбѓђ бѓ›бѓќбѓћбѓќбѓ•бѓ”бѓ‘бѓЈбѓљ бѓбѓҐбѓњбѓђбѓЎ бѓ›бѓ®бѓќбѓљбѓќбѓ“ бѓЇбѓќбѓ™бѓ”бѓ бѓбѓ—)";
    this.rvj = "бѓбѓ’бѓбѓ•бѓ” бѓ¤бѓ”бѓ бѓбѓЎ бѓўбѓЈбѓ–бѓ - бѓ›бѓ”бѓ¤бѓ” - бѓ“бѓђбѓ›бѓђ - бѓ•бѓђбѓљбѓ”бѓўбѓ - бѓђбѓ—бѓбѓђбѓњбѓ";
    this.xzr = "Straight бѓбѓ’бѓбѓ•бѓ” бѓ¤бѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ”бѓ‘бѓбѓ—";
    this.uuc = "бѓбѓ’бѓбѓ•бѓ” бѓбѓ”бѓ бѓђбѓ бѓҐбѓбѓбѓЎ бѓќбѓ—бѓ®бѓ бѓ™бѓђбѓ бѓўбѓ";
    this.vps = "Three Of A Kind-бѓбѓЎбѓђ бѓ“бѓђ бѓ”бѓ бѓ—бѓ Pair-бѓбѓЎ бѓ™бѓќбѓ›бѓ‘бѓбѓњбѓђбѓЄбѓбѓђ";
    this.iul = "бѓ®бѓЈбѓ—бѓ бѓ”бѓ бѓ—бѓ бѓ“бѓђ бѓбѓ’бѓбѓ•бѓ” бѓ¤бѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ";
    this.tqn = "бѓ®бѓЈбѓ—бѓ бѓ—бѓђбѓњбѓ›бѓбѓ›бѓ“бѓ”бѓ•бѓ бѓЈбѓљбѓ бѓ™бѓђбѓ бѓўбѓ";
    this.gju = "бѓЎбѓђбѓ›бѓ бѓ—бѓђбѓњбѓђбѓ‘бѓђбѓ бѓ бѓ™бѓђбѓ бѓўбѓ";
    this.qry = "бѓќбѓ бѓ бѓќбѓ  бѓ—бѓђбѓњбѓђбѓ‘бѓђбѓ  бѓ™бѓђбѓ бѓўбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.spa = "бѓќбѓ бѓ бѓ—бѓђбѓњбѓђбѓ‘бѓђбѓ бѓ бѓ™бѓђбѓ бѓўбѓ бѓ•бѓђбѓљбѓ”бѓўбѓбѓ— бѓ–бѓ”бѓ•бѓбѓ—бѓ™бѓ”бѓњ";
    this.xoh = "бѓќбѓ—бѓ®бѓ бѓЎбѓ®бѓ•бѓђбѓ“бѓђбѓЎбѓ®бѓ•бѓђ бѓ”бѓ бѓ—бѓ бѓ“бѓђ бѓбѓ’бѓбѓ•бѓ” бѓ¤бѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ";
    this.zxh = "Straight бѓЁбѓЈбѓђбѓЁбѓ бѓўбѓЈбѓ–бѓбѓ—";
    this.ivc = "5 бѓњбѓђбѓ®бѓђбѓўбѓбѓђбѓњбѓ бѓ™бѓђбѓ бѓўбѓ";
    this.rkk = "Straight бѓЎбѓђбѓ“бѓђбѓЄ бѓ§бѓќбѓ•бѓ”бѓљбѓ бѓ›бѓ”бѓќбѓ бѓ” бѓ™бѓђбѓ бѓўбѓ бѓђбѓ™бѓљбѓбѓђ";
    this.fmm = "ROYAL FLUSH бѓ бѓќбѓ›бѓ”бѓљбѓбѓЄ бѓЁбѓ”бѓбѓЄбѓђбѓ•бѓЎ бѓЇбѓќбѓ™бѓ”бѓ бѓЎ";
    this.sei = "бѓќбѓ—бѓ®бѓ бѓќбѓ бѓбѓђбѓњбѓ бѓњбѓ”бѓ‘бѓбѓЎбѓ›бѓбѓ”бѓ  бѓЎбѓ®бѓ•бѓђ бѓ™бѓђбѓ бѓўбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.dlw = "бѓќбѓ—бѓ®бѓ 5-бѓбѓђбѓњбѓ, 6-бѓбѓђбѓњбѓ, 7-бѓбѓђбѓњбѓ, 8-бѓбѓђбѓњбѓ, 9-бѓбѓђбѓњбѓ, 10-бѓбѓђбѓњбѓ, бѓ•бѓђбѓљбѓ”бѓўбѓ, бѓ“бѓђбѓ›бѓђ бѓђбѓњ бѓ›бѓ”бѓ¤бѓ”";
    this.ojk = "бѓќбѓ—бѓ®бѓ 2-бѓбѓђбѓњбѓ, 3-бѓбѓђбѓњбѓ бѓђбѓњ 4-бѓбѓђбѓњбѓ бѓњбѓ”бѓ‘бѓбѓЎбѓ›бѓбѓ”бѓ  бѓЎбѓ®бѓ•бѓђ бѓ™бѓђбѓ бѓўбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.bgl = "бѓќбѓ—бѓ®бѓ бѓўбѓЈбѓ–бѓ бѓњбѓ”бѓ‘бѓбѓЎбѓ›бѓбѓ”бѓ  бѓЎбѓ®бѓ•бѓђ бѓ™бѓђбѓ бѓўбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.dit = "бѓќбѓ—бѓ®бѓ 2-бѓбѓђбѓњбѓ, 3-бѓбѓђбѓњбѓ бѓђбѓњ 4-бѓбѓђбѓњбѓ бѓўбѓЈбѓ–бѓ—бѓђбѓњ 2-бѓбѓђбѓњбѓ—бѓђбѓњ, 3-бѓбѓђбѓњбѓ—бѓђбѓњ бѓђбѓњ 4-бѓбѓђбѓњбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.mrd = "бѓќбѓ—бѓ®бѓ бѓўбѓЈбѓ–бѓ 2, 3 бѓђбѓњ 4-бѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.clr = "бѓќбѓ бѓ бѓ›бѓ”бѓ¤бѓ” бѓђбѓњ бѓўбѓЈбѓ–бѓ";
    this.jim = "бѓќбѓ бѓ бѓђбѓ—бѓбѓђбѓњбѓ, бѓ•бѓђбѓљбѓ”бѓўбѓ, бѓ“бѓђбѓ›бѓђ, бѓ›бѓ”бѓ¤бѓ” бѓђбѓњ бѓўбѓЈбѓ–бѓ";
    this.uyh = "FIVE OF A KIND";
    this.zqo = "ROYAL FLUSH";
    this.crm = "STRAIGHT FLUSH";
    this.hbz = "FOUR OF A KIND";
    this.xcx = "FULL HOUSE";
    this.ccj = "FLUSH";
    this.jcf = "STRAIGHT";
    this.psa = "THREE OF A KIND";
    this.eui = "TWO PAIRS";
    this.jxx = "HIGH PAIR";
    this.lzu = "FOUR FLUSH";
    this.eoo = "POKER";
    this.xgr = "SKIP STRAIGHT";
    this.cbg = "BLAZE";
    this.eie = "CORNER STRAIGHT";
    this.ibh = "TENS OR BETTER";
    this.zpo = "JACKS OR BETTER";
    this.cjl = "KINGS OR BETTER";
    this.aue = "WILD ROYAL FLUSH";
    this.dsh = "FOUR DEUCES";
    this.vnz = "FOUR 5 TO KING";
    this.hca = "FOUR 2 TO 4";
    this.mkz = "FOUR ACES";
    this.mvg = "FOUR LOW WITH LOW";
    this.imc = "FOUR ACES WITH 2, 3 OR 4";
    this.irg = "бѓбѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ— бѓђбѓњ бѓђбѓбѓ¦бѓ”бѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ?";
    this.zqb = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓ™бѓђбѓ бѓўбѓ";
    this.iht = "бѓ—бѓЈ бѓђбѓ бѓ©бѓ”бѓЈбѓљбѓ бѓ™бѓђбѓ бѓўбѓ бѓ“бѓбѓљбѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ–бѓ” бѓЈбѓ¤бѓ бѓќ бѓ›бѓђбѓ¦бѓђбѓљбѓбѓђ: бѓ—бѓҐбѓ•бѓ”бѓњ бѓ›бѓќбѓбѓ’бѓ”бѓ‘бѓ—!";
    this.xao = "бѓ—бѓЈ бѓђбѓ бѓ©бѓ”бѓЈбѓљбѓ бѓ™бѓђбѓ бѓўбѓ бѓ“бѓбѓљбѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ–бѓ” бѓЈбѓ¤бѓ бѓќ бѓ“бѓђбѓ‘бѓђбѓљбѓбѓђ: бѓ—бѓҐбѓ•бѓ”бѓњ бѓ¬бѓђбѓђбѓ’бѓ”бѓ‘бѓ—";
    this.hdy = "бѓ—бѓЈ бѓђбѓ бѓ©бѓ”бѓЈбѓљбѓ бѓ™бѓђбѓ бѓўбѓ бѓбѓ’бѓбѓ•бѓ”бѓђ бѓ бѓђбѓЄ бѓ“бѓбѓљбѓ”бѓ бѓЎ бѓђбѓҐбѓ•бѓЎ: бѓђбѓњбѓ’бѓђбѓ бѓбѓЁбѓбѓђ бѓ¤бѓ бѓ”";
    this.yhv = "бѓўбѓЈбѓ–бѓ бѓђбѓ бѓбѓЎ бѓ§бѓ•бѓ”бѓљбѓђбѓ–бѓ” бѓ›бѓђбѓ¦бѓђбѓљбѓ, бѓќбѓ бѓбѓђбѓњбѓ бѓ§бѓ•бѓ”бѓљбѓђбѓ–бѓ” бѓ“бѓђбѓ‘бѓђбѓљбѓ, бѓЇбѓќбѓ™бѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ бѓђбѓ  бѓ—бѓђбѓ›бѓђбѓЁбѓ“бѓ”бѓ‘бѓђ.";
    this.qts = "бѓ¤бѓ бѓ”";
    this.nus = "бѓ›бѓќбѓ—бѓђбѓ›бѓђбѓЁбѓ”";
    this.sru = "бѓ“бѓбѓљбѓ”бѓ бѓ";
    this.spv = "бѓ›бѓќбѓЈбѓ’бѓ”бѓ— бѓ“бѓбѓљбѓ”бѓ бѓЎ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓќбѓ бѓ›бѓђбѓ’бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.xqe = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓЎбѓ¬бѓќбѓ бѓ бѓЎбѓбѓ“бѓбѓ“бѓ” бѓ бѓќбѓ› бѓ’бѓђбѓђбѓќбѓ бѓ›бѓђбѓ’бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ"
}
jgw.prototype = new zai;

function ydm() {
    this.qty = "TART";
    this.qcq = "PIROS";
    this.akh = "FEKETE";
    this.clw = "MAGAS";
    this.hzz = "ALACSONY";
    this.kwo = "KГ‰RJEN LAPOKAT";
    this.squ = "TARTSON LAPOKAT";
    this.sxs = "KГ‰RJEN LAPOKAT";
    this.opb = "Г¶t egyforma lap (az Г¶tГ¶dik a JOKER)";
    this.rvj = "ГЎsz - kirГЎly - dГЎma - bubi - tizes egy szГ­nben";
    this.xzr = "SOR egyforma szГ­nЕ± lapokbГіl";
    this.uuc = "nГ©gy egyforma lap";
    this.vps = "hГЎrom Г©s kettЕ‘ egyforma lap";
    this.iul = "Г¶t egyforma szГ­nЕ± lap";
    this.tqn = "Г¶t sorban kГ¶vetkezЕ‘ lap nem egyforma szГ­nben";
    this.gju = "hГЎrom egyforma lap";
    this.qry = "kettЕ‘ pГЎr Г©s mГ©g egy lap";
    this.spa = "kettЕ‘ Bubi, DГЎma, KirГЎly vagy ГЃsz";
    this.xoh = "nГ©gy egyforma Г©s egy mГЎsmilyen szГ­nЕ± lap";
    this.zxh = "5 sorban kГ¶vetkezЕ‘ lap A-val a kГ¶zГ©pen";
    this.ivc = "5 'kГ©pes' lap";
    this.rkk = "5 egymГЎst kГ¶vetЕ‘ pГЎros vagy pГЎratlan lap";
    this.fmm = "ROYAL FLUSH amelyben van Joker";
    this.sei = "nГ©gy kettes Г©s mГ©g egy lap";
    this.dlw = "nГ©gy 5-Г¶s, 6-os, 7-es, 8-as, 9-es, 10-es, Bubi, DГЎma vagy KirГЎly";
    this.ojk = "nГ©gy kettes, hГЎrmas vagy nГ©gyes + egy lap";
    this.bgl = "nГ©gy ГЎsz Г©s mГ©g egy lap";
    this.dit = "nГ©gy 2, 3 vagy 4 meg egy ГЎsz, 2, 3 vagy 4";
    this.mrd = "nГ©gy ГЃsz Г©s 2, 3 vagy 4";
    this.clr = "kettЕ‘ KirГЎly vagy ГЃsz";
    this.jim = "kettЕ‘ tizes, bubi, dГЎma, kirГЎly vagy ГЎsz";
    this.uyh = "FIVE OF A KIND";
    this.zqo = "ROYAL FLUSH";
    this.crm = "STRAIGHT FLUSH";
    this.hbz = "FOUR OF A KIND";
    this.xcx = "FULL HOUSE";
    this.ccj = "FLUSH";
    this.jcf = "STRAIGHT";
    this.psa = "THREE OF A KIND";
    this.eui = "TWO PAIRS";
    this.jxx = "HIGH PAIR";
    this.lzu = "FOUR FLUSH";
    this.eoo = "POKER";
    this.xgr = "SKIP STRAIGHT";
    this.cbg = "BLAZE";
    this.eie = "CORNER STRAIGHT";
    this.ibh = "TENS OR BETTER";
    this.zpo = "JACKS OR BETTER";
    this.cjl = "KINGS OR BETTER";
    this.aue = "WILD ROYAL FLUSH";
    this.dsh = "FOUR DEUCES";
    this.vnz = "FOUR 5 TO KING";
    this.hca = "FOUR 2 TO 4";
    this.mkz = "FOUR ACES";
    this.mvg = "FOUR LOW WITH LOW";
    this.imc = "FOUR ACES WITH 2, 3 OR 4";
    this.irg = "SZOROZZA VAGY FELГЌRJA?";
    this.zqb = "VГЃLASSZON EGY LAPOT";
    this.iht = "Ha a kivГЎlasztott lap az osztГі lapjГЎtГіl nagyobb: NYERT!";
    this.xao = "Ha a kivГЎlasztott lap az osztГі lapjГЎtГіl kisebb: veszГ­tett";
    this.hdy = "Ha a kГ©t lap egyforma: dГ¶ntetlen";
    this.yhv = "Az ГЃSZ a legnagyobb a kettes pedig a legkisebb lap.";
    this.qts = "DГ–NTETLEN";
    this.nus = "JГЃTГ‰KOS";
    this.sru = "OSZTГ“";
    this.spv = "GYЕђZZE LE AZ OSZTГ“T, HOGY MEGDUPLГЃZZA A NYEREMГ‰NYT";
    this.xqe = "VГЃLASSZA A MEGFELELЕђT, HOGY MEGDUPLГЃZZA A NYEREMГ‰NYT"
}
ydm.prototype = new wqo;

function fby() {
    this.qty = "ЕўINERE";
    this.qcq = "ROЕћU";
    this.akh = "NEGRU";
    this.clw = "MARE";
    this.hzz = "MICД‚";
    this.kwo = "ГЋMPД‚RЕўIRE CД‚RЕўI";
    this.squ = "ЕўINERE CД‚RЕўI";
    this.sxs = "ГЋMPД‚RЕўIRE CД‚RЕўI";
    this.opb = "Cinci cДѓrЕЈi identice (posibil numai cu joker)";
    this.rvj = "As - rege - damДѓ - valet - zece de aceeaЕџi culoare";
    this.xzr = "STRAIGHT cu cДѓrЕЈi de aceeaЕџi culoare";
    this.uuc = "Patru cДѓrЕЈi de aceeaЕџi valoare";
    this.vps = "CombinaЕЈie din THREE OF A KIND Еџi PAIR";
    this.iul = "Cinci cДѓrЕЈi de aceeaЕџi culoare";
    this.tqn = "Cinci cДѓrЕЈi Г®n succesiune ordonatДѓ, nu de aceeaЕџi culoare";
    this.gju = "Trei cДѓrЕЈi egale ca valoare";
    this.qry = "DouДѓ perechi diferite Еџi o a cincea carte";
    this.spa = "DouДѓ cДѓrЕЈi cu valeЕЈi, dame, regi sau aЕџi";
    this.xoh = "Patru cДѓrЕЈi de aceeaЕџi culoare cu o a 5-a carte";
    this.zxh = "Straight cu as Г®n mijloc";
    this.ivc = "CombinaЕЈie de cДѓrЕЈi cu figuri cu valet, damДѓ Еџi rege";
    this.rkk = "Cinci valori succesive cu soЕЈ sau fДѓrДѓ soЕЈ";
    this.fmm = "ROYAL FLUSH cu joker";
    this.sei = "Patru cДѓrЕЈi de doi cu o altДѓ carte";
    this.dlw = "Patru cДѓrЕЈi de 5, 6, 7, 8, 9, 10, valeЕЈi, dame sau regi";
    this.ojk = "Patru cДѓrЕЈi de 2, 3 sau 4 cu o altДѓ carte";
    this.bgl = "Patru aЕџi cu o altДѓ carte";
    this.dit = "Patru cДѓrЕЈi de 2, 3 sau 4 cu un as, o carte de 2, 3 sau 4";
    this.mrd = "Patru aЕџi cu o carte de 2, 3 sau 4";
    this.clr = "Doi regi sau doi aЕџi.";
    this.jim = "DouДѓ cДѓrЕЈi de 10, valeЕЈi, dame, regi sau aЕџi";
    this.uyh = "FIVE OF A KIND";
    this.zqo = "ROYAL FLUSH";
    this.crm = "STRAIGHT FLUSH";
    this.hbz = "FOUR OF A KIND";
    this.xcx = "FULL HOUSE";
    this.ccj = "FLUSH";
    this.jcf = "STRAIGHT";
    this.psa = "THREE OF A KIND";
    this.eui = "TWO PAIRS";
    this.jxx = "HIGH PAIR";
    this.lzu = "FOUR FLUSH";
    this.eoo = "POKER";
    this.xgr = "SKIP STRAIGHT";
    this.cbg = "BLAZE";
    this.eie = "CORNER STRAIGHT";
    this.ibh = "TENS OR BETTER";
    this.zpo = "JACKS OR BETTER";
    this.cjl = "KINGS OR BETTER";
    this.aue = "WILD ROYAL FLUSH";
    this.dsh = "FOUR DEUCES";
    this.vnz = "FOUR 5 TO KING";
    this.hca = "FOUR 2 TO 4";
    this.mkz = "FOUR ACES";
    this.mvg = "FOUR LOW WITH LOW";
    this.imc = "FOUR ACES WITH 2, 3 OR 4";
    this.irg = "GAMBLE SAU RIDICAREA CГ‚ЕћTIGULUI?";
    this.zqb = "ALEGEЕўI O CARTE";
    this.iht = "CГўnd cartea aleasДѓ este mai mare decГўt cea a dealerului: cГўЕџtig!";
    this.xao = "CГўnd cartea aleasДѓ este mai micДѓ decГўt cea a dealerului: fДѓrДѓ cГўЕџtig";
    this.hdy = " CГўnd cartea aleasДѓ este identicДѓ cu cea a dealerului: egal";
    this.yhv = "As este cartea cea mai mare, 2 este cartea cea mai micДѓ, fДѓrДѓ joker.";
    this.qts = "EGAL";
    this.nus = "PLAYER";
    this.sru = "DEALER";
    this.spv = "ГЋNVINGE DEALERUL PENTRU DUBLAREA PROFITULUI";
    this.xqe = "SELECTEAZД‚ VALOAREA CORECTД‚ PENTRU DUBLAREA CГ‚ЕћTIGULUI"
}
fby.prototype = new yio;

function lnn() {
    this.qty = "HELD";
    this.qcq = "VERMELHO";
    this.akh = "PRETO";
    this.clw = "ALTO";
    this.hzz = "BAIXO";
    this.kwo = "DAR CARTAS";
    this.squ = "RETER CARTAS";
    this.sxs = "DAR CARTAS";
    this.opb = "Cinco cartas iguais com o mesmo valor (sГі Г© possГ­vel com curinga)";
    this.rvj = "ГЃs - Rei - Dama - Valete - Dez de um naipe";
    this.xzr = "STRAIGHT do mesmo naipe";
    this.uuc = "Quatro cartas do mesmo valor";
    this.vps = "CombinaГ§ГЈo de THREE OF A KIND e PAIR";
    this.iul = "Cinco cartas com o mesmo naipe";
    this.tqn = "Cinco cartas sucessivas, sem o mesmo naipe";
    this.gju = "TrГЄs cartas do mesmo valor";
    this.qry = "Dois pares diferentes e uma 5ВЄ carta";
    this.spa = "Dois valetes, damas, reis ou ГЎses";
    this.xoh = "Quatro cartas do mesmo naipe com uma 5ВЄ";
    this.zxh = "Uma escada com um ГЎs no centro";
    this.ivc = "Uma combinaГ§ГЈo somente de figuras";
    this.rkk = "SequГЄncia de pares ou Г­mpares de sucessivos valores";
    this.fmm = "ROYAL FLUSH com curinga";
    this.sei = "Quatro dois com uma outra carta";
    this.dlw = "Quatro 5, 6, 7, 8, 9, 10, valete, dama, rei";
    this.ojk = "Quatro 2, 3 ou 4 com outra carta";
    this.bgl = "Quatro ГЎses com uma outra carta";
    this.dit = "Quatro 2,3 ou 4 A, 2, 3 ou 4";
    this.mrd = "Quatro ГЎses com 2,3 ou 4";
    this.clr = "Dois reis ou dois ГЎses";
    this.jim = "Dois 10, valetes, damas, reis ou ГЎses";
    this.uyh = "FIVE OF A KIND";
    this.zqo = "ROYAL FLUSH";
    this.crm = "STRAIGHT FLUSH";
    this.hbz = "FOUR OF A KIND";
    this.xcx = "FULL HOUSE";
    this.ccj = "FLUSH";
    this.jcf = "STRAIGHT";
    this.psa = "THREE OF A KIND";
    this.eui = "TWO PAIRS";
    this.jxx = "HIGH PAIR";
    this.lzu = "FOUR FLUSH";
    this.eoo = "POKER";
    this.xgr = "SKIP STRAIGHT";
    this.cbg = "BLAZE";
    this.eie = "CORNER STRAIGHT";
    this.ibh = "TENS OR BETTER";
    this.zpo = "JACKS OR BETTER";
    this.cjl = "KINGS OR BETTER";
    this.aue = "WILD ROYAL FLUSH";
    this.dsh = "FOUR DEUCES";
    this.vnz = "FOUR 5 TO KING";
    this.hca = "FOUR 2 TO 4";
    this.mkz = "FOUR ACES";
    this.mvg = "FOUR LOW WITH LOW";
    this.imc = "FOUR ACES WITH 2, 3 OR 4";
    this.irg = "JOGAR OU RECOLHER O PRГ‰MIO?";
    this.zqb = "ESCOLHA UMA CARTA";
    this.iht = "Se a carta selecionada for mais alta do que a do crupier: PRГ‰MIO";
    this.xao = "Se a carta selecionada for menor do que a do crupier: Nenhum prГ©mio";
    this.hdy = "Se a carta selecionada for a mesma que a do crupier: Empate";
    this.yhv = "Az Г© carta mais alta, dois Г© a menor, nГЈo hГЎ curingas.";
    this.qts = "EMPATE";
    this.nus = "JOGADOR";
    this.sru = "CRUPIER";
    this.spv = "GANHE DO DEALER PARA DOBRAR O GANHO";
    this.xqe = "ESCOLHA O VALOR CERTO PARA DUBRAR O GANHO"
}
lnn.prototype = new kva;

function jzf() {
    this.qty = "GARDER";
    this.qcq = "ROUGE";
    this.akh = "NOIR";
    this.clw = "HAUT";
    this.hzz = "BAS";
    this.kwo = "DONNER DES CARTES";
    this.squ = "GARDER DES CARTES";
    this.sxs = "DONNER DES CARTES";
    this.opb = "Cinq cartes identiques (possible seulement avec un joker)";
    this.rvj = "As, roi, dame, valet, 10 de la mГЄme couleur";
    this.xzr = "STRAIGHT dans la mГЄme couleur";
    this.uuc = "Quatre cartes de la mГЄme valeur";
    this.vps = "Combinaison de trois (BRELAN) et un PAIRE";
    this.iul = "Cinq cartes de la mГЄme couleur";
    this.tqn = "Cinq cartes dans l'ordre, mais pas de la mГЄme couleur";
    this.gju = "Trois cartes de la mГЄme valeur";
    this.qry = "Deux paires diffГ©rentes et une 5ГЁme carte";
    this.spa = "Deux valets, dames, rois ou as";
    this.xoh = "Quatre cartes de la mГЄme couleur avec une 5ГЁme carte";
    this.zxh = "Straight avec un as au milieu";
    this.ivc = "Cartes qui comprennent le valet, la dame et le roi";
    this.rkk = "Cinq cartes consГ©cutives paires ou impaires";
    this.fmm = "QUINTE FLUSH avec joker";
    this.sei = "Quatre deux avec une autre carte";
    this.dlw = "Quatre 5, 6, 7, 8, 9, 10, valets, dames ou rois";
    this.ojk = "Quatre 2, 3 ou 4 avec une autre carte";
    this.bgl = "Quatres as avec une autre carte";
    this.dit = "Quatre 2,3 ou 4 avec A, 2, 3, ou 4";
    this.mrd = "Quatre as avec un 2, 3, ou 4";
    this.clr = "Deux rois ou deux as.";
    this.jim = "Deux 10, valets, dames, rois ou as";
    this.uyh = "FIVE OF A KIND";
    this.zqo = "ROYAL FLUSH";
    this.crm = "STRAIGHT FLUSH";
    this.hbz = "FOUR OF A KIND";
    this.xcx = "FULL HOUSE";
    this.ccj = "FLUSH";
    this.jcf = "STRAIGHT";
    this.psa = "THREE OF A KIND";
    this.eui = "TWO PAIRS";
    this.jxx = "HIGH PAIR";
    this.lzu = "FOUR FLUSH";
    this.eoo = "POKER";
    this.xgr = "SKIP STRAIGHT";
    this.cbg = "BLAZE";
    this.eie = "CORNER STRAIGHT";
    this.ibh = "TENS OR BETTER";
    this.zpo = "JACKS OR BETTER";
    this.cjl = "KINGS OR BETTER";
    this.aue = "WILD ROYAL FLUSH";
    this.dsh = "FOUR DEUCES";
    this.vnz = "FOUR 5 TO KING";
    this.hca = "FOUR 2 TO 4";
    this.mkz = "FOUR ACES";
    this.mvg = "FOUR LOW WITH LOW";
    this.imc = "FOUR ACES WITH 2, 3 OR 4";
    this.irg = "GAMBLE OU PRENDRE GAIN?";
    this.zqb = "PRENDS UNE CARTE";
    this.iht = "Si la carte sГ©lectionnГ©e est supГ©rieure Г  celle du dealer: GAIN";
    this.xao = "Si la carte sГ©lectionnГ©e est infГ©rieure Г  celle du dealer: PAS DE GAIN";
    this.hdy = "Si la carte sГ©lectionnГ©e est identique Г  celle du dealer: EGALITГ‰";
    this.yhv = "L'as a la valeur la plus importante, le deux la moins importante, aucun joker.";
    this.qts = "EGALITГ‰";
    this.nus = "JOUER";
    this.sru = "NOUN";
    this.spv = "VAINCS LE DONNEUR AFIN DE DOUBLER LE GAIN";
    this.xqe = "CHOISIS LA BONNE VALEUR AFIN DE DOUBLER LE GAIN"
}
jzf.prototype = new zhx;

function rrt() {
    this.qty = "ZADRЕЅI";
    this.qcq = "CRVENA";
    this.akh = "CRNA";
    this.clw = "VELIKA";
    this.hzz = "MALA";
    this.kwo = "DIJELI KARTE";
    this.squ = "ZADRЕЅI KARTE";
    this.sxs = "DIJELI KARTE";
    this.opb = "Pet istih karata (moguД‡e samo s dЕѕokerom)";
    this.rvj = "As - kralj - dama - deДЌko - desetka u istoj boji";
    this.xzr = "STRAIGHT u istoj boji";
    this.uuc = "ДЊetiri jednake karte";
    this.vps = "Kombinacija od TRI ISTE i PARA";
    this.iul = "Pet karata u istoj boji";
    this.tqn = "Pet karata u nizu, ali ne u istoj boji";
    this.gju = "Tri jednake karte";
    this.qry = "Dva razliДЌita para i neka 5. karta";
    this.spa = "Dva deДЌka, dame, kralja ili asa";
    this.xoh = "ДЊetiri karte u istoj boji s nekom 5. kartom";
    this.zxh = "Pet karata u redu, As u sredini";
    this.ivc = "5 karata sa slikama (deДЌko, dama i kralj + 2 slike)";
    this.rkk = "5 uzastopnih parnih ili neparnih karata";
    this.fmm = "ROYAL FLUSH s dЕѕokerom";
    this.sei = "ДЊetiri dvojke s nekom drugom kartom";
    this.dlw = "ДЊetiri petice, ЕЎestice, sedmice, osmice, devetke, desetke, deДЌka, dame ili kralja";
    this.ojk = "ДЊetiri dvojke, trojke ili ДЌetvorke s nekom drugom kartom";
    this.bgl = "ДЊetiri asa sa nekom drugom kartom";
    this.dit = "ДЊetiri 2,3 ili 4 sa A, 2, 3 ili 4";
    this.mrd = "ДЊetiri asa s 2, 3 ili 4";
    this.clr = "Dva kralja ili dva asa";
    this.jim = "Dvije desetke, deДЌka, dame, kralja ili asa";
    this.uyh = "FIVE OF A KIND";
    this.zqo = "ROYAL FLUSH";
    this.crm = "STRAIGHT FLUSH";
    this.hbz = "FOUR OF A KIND";
    this.xcx = "FULL HOUSE";
    this.ccj = "FLUSH";
    this.jcf = "STRAIGHT";
    this.psa = "THREE OF A KIND";
    this.eui = "TWO PAIRS";
    this.jxx = "HIGH PAIR";
    this.lzu = "FOUR FLUSH";
    this.eoo = "POKER";
    this.xgr = "SKIP STRAIGHT";
    this.cbg = "BLAZE";
    this.eie = "CORNER STRAIGHT";
    this.ibh = "TENS OR BETTER";
    this.zpo = "JACKS OR BETTER";
    this.cjl = "KINGS OR BETTER";
    this.aue = "WILD ROYAL FLUSH";
    this.dsh = "FOUR DEUCES";
    this.vnz = "FOUR 5 TO KING";
    this.hca = "FOUR 2 TO 4";
    this.mkz = "FOUR ACES";
    this.mvg = "FOUR LOW WITH LOW";
    this.imc = "FOUR ACES WITH 2, 3 OR 4";
    this.irg = "IGRAJ ILI POKUPI DOBITAK?";
    this.zqb = "ODABERITE KARTU";
    this.iht = "Ako je odabrana karta veД‡a od dilerove karte: DOBITAK";
    this.xao = "Ako je odabrana karta manja od dilerove karte: NEMA DOBITKA";
    this.hdy = "Ako je odabrana karta ista kao dilerova: NERIJEЕ ENO";
    this.yhv = "As je najveД‡a karta, 2 je najmanja karta, nema dЕѕokera.";
    this.qts = "ISTA";
    this.nus = "IGRAДЊ";
    this.sru = "DILER";
    this.spv = "POBJEDI DJELITELJA I TIME UDVOSTRUДЊI DOBITAK";
    this.xqe = "ODABERI PRAVU VRIJEDNOST I TIME UDVOSTRUДЊI DOBITAK"
}
rrt.prototype = new fdp;

function zdd() {
    this.qty = "TENERE";
    this.qcq = "ROSSO";
    this.akh = "NERO";
    this.clw = "ALTO";
    this.hzz = "BASSO";
    this.kwo = "NUOVE CARTE";
    this.squ = "BLOCCA CARTE";
    this.sxs = "NUOVE CARTE";
    this.opb = "Cinque carte uguali (possibile soltanto con il joker)";
    this.rvj = "Asso - Re - Dama - Fante - 10 di un colore";
    this.xzr = "STRAIGHT dello stesso colore";
    this.uuc = "Quattro carte dello stesso valore";
    this.vps = "Combinazione tra THREE OF A KIND e una COPPIA";
    this.iul = "Cinque carte dello stesso colore";
    this.tqn = "Cinque carte in ordine cronologico, senza aver lo stesso colore";
    this.gju = "Tre carte dello stesso valore";
    this.qry = "Due coppie diverse e una quinta carta";
    this.spa = "Due fanti, dame, re o assi";
    this.xoh = "Quattro carte dello stesso colore con una quinta carta";
    this.zxh = "Straight con asso in centro";
    this.ivc = "5 carte solo con figure";
    this.rkk = "Straight ove sempre una carta su due manca";
    this.fmm = "ROYAL FLUSH con Jolly";
    this.sei = "Quattro due con un'altra carta";
    this.dlw = "Quattro carte da 5, 6, 7, 8, 9, 10, fante, dama o re";
    this.ojk = "Quattro carte da 2, 3 o 4 con un'altra carta";
    this.bgl = "Quattro assi con un'altra carta";
    this.dit = "Quattro 2,3 o 4 con Asso, 2, 3 o 4";
    this.mrd = "Quattro assi con il 2, 3 o 4";
    this.clr = "Due re o due assi";
    this.jim = "Due carte da 10, fante, dama, re o asso";
    this.uyh = "FIVE OF A KIND";
    this.zqo = "ROYAL FLUSH";
    this.crm = "STRAIGHT FLUSH";
    this.hbz = "FOUR OF A KIND";
    this.xcx = "FULL HOUSE";
    this.ccj = "FLUSH";
    this.jcf = "STRAIGHT";
    this.psa = "THREE OF A KIND";
    this.eui = "TWO PAIRS";
    this.jxx = "HIGH PAIR";
    this.lzu = "FOUR FLUSH";
    this.eoo = "POKER";
    this.xgr = "SKIP STRAIGHT";
    this.cbg = "BLAZE";
    this.eie = "CORNER STRAIGHT";
    this.ibh = "TENS OR BETTER";
    this.zpo = "JACKS OR BETTER";
    this.cjl = "KINGS OR BETTER";
    this.aue = "WILD ROYAL FLUSH";
    this.dsh = "FOUR DEUCES";
    this.vnz = "FOUR 5 TO KING";
    this.hca = "FOUR 2 TO 4";
    this.mkz = "FOUR ACES";
    this.mvg = "FOUR LOW WITH LOW";
    this.imc = "FOUR ACES WITH 2, 3 OR 4";
    this.irg = "GAMBLE O RACCOGLIERE VINCITA?";
    this.zqb = "PRENDI UNA CARTA";
    this.iht = "Se la carta selezionata ГЁ piГ№ alta di quella del mazziere: VINCITA";
    this.xao = "Se la carta selezionata ГЁ piГ№ bassa di quella del mazziere: NESSUNA VINCITA";
    this.hdy = "Se la carta selezionata ГЁ uguale a quella del mazziere:ALLA PARI";
    this.yhv = "L'asso ГЁ la piГ№ alta, il due la piГ№ bassa, nessuno jolly.";
    this.qts = "ALLA PARI";
    this.nus = "GIOCATORE";
    this.sru = "DEALER";
    this.spv = "VINCI SUL DEALER PER RADDOPPIARE LA VINCITA";
    this.xqe = "SCEGLI IL VALORE GIUSTO PER RADDOPPIARE LA VINCITA"
}
zdd.prototype = new omh;

function ujx() {
    this.qty = "HГ…LLET";
    this.qcq = "RГ–TT";
    this.akh = "SVART";
    this.clw = "HГ–G";
    this.hzz = "LГ…G";
    this.kwo = "TA KORT";
    this.squ = "BEHГ…LL KORTEN";
    this.sxs = "TA KORT";
    this.opb = "Fem kort av samma vГ¤rde (endast mГ¶jligt med Joker)";
    this.rvj = "Ess - Kung - Dam - Knekt - Tio i samma fГ¤rg";
    this.xzr = "Stege i samma fГ¤rg";
    this.uuc = "Fyra kort av samma vГ¤rde";
    this.vps = "Kombination bestГҐende av TRISS och PAR";
    this.iul = "Fem kort i samma fГ¤rg";
    this.tqn = "Fem kort i fГ¶ljd, men inte i samma fГ¤rg";
    this.gju = "Tre kort av samma vГ¤rde";
    this.qry = "TvГҐ olika par och ett 5:e kort";
    this.spa = "TvГҐ Knektar, Damer, Kungar eller Ess";
    this.xoh = "Fyra kort i en fГ¤rg med ett 5:e kort";
    this.zxh = "Stege med Ess i mitten";
    this.ivc = "Kort som visar Knekt, Dam och Kung";
    this.rkk = "Stege med fem udda eller fem jГ¤mna kort i fГ¶ljd";
    this.fmm = "ROYAL FLUSH med Joker";
    this.sei = "Fyra tvГҐor med nГҐgot annat kort";
    this.dlw = "Fyra 5:or, 6:or, 7:or, 8:or, 9:or, 10:or, Knektar, Damer eller Kungar";
    this.ojk = "Fyra 2:or, 3:or eller 4:or med nГҐgot annat kort";
    this.bgl = "Fyra Ess med nГҐgot annat kort";
    this.dit = "Fyra 2:or, 3:or eller 4:or med ett Ess, en 2:a, 3:a eller 4:a";
    this.mrd = "Fyra Ess med en 2:a, 3:a eller 4:a";
    this.clr = "TvГҐ Kungar eller tvГҐ Ess";
    this.jim = "TvГҐ 10:or, Knektar, Damer, Kungar eller Ess.";
    this.uyh = "FIVE OF A KIND";
    this.zqo = "ROYAL FLUSH";
    this.crm = "STRAIGHT FLUSH";
    this.hbz = "FOUR OF A KIND";
    this.xcx = "FULL HOUSE";
    this.ccj = "FLUSH";
    this.jcf = "STRAIGHT";
    this.psa = "THREE OF A KIND";
    this.eui = "TWO PAIRS";
    this.jxx = "HIGH PAIR";
    this.lzu = "FOUR FLUSH";
    this.eoo = "POKER";
    this.xgr = "SKIP STRAIGHT";
    this.cbg = "BLAZE";
    this.eie = "CORNER STRAIGHT";
    this.ibh = "TENS OR BETTER";
    this.zpo = "JACKS OR BETTER";
    this.cjl = "KINGS OR BETTER";
    this.aue = "WILD ROYAL FLUSH";
    this.dsh = "FOUR DEUCES";
    this.vnz = "FOUR 5 TO KING";
    this.hca = "FOUR 2 TO 4";
    this.mkz = "FOUR ACES";
    this.mvg = "FOUR LOW WITH LOW";
    this.imc = "FOUR ACES WITH 2, 3 OR 4";
    this.irg = "DUBBLERA ELLER INKASSERA?";
    this.zqb = "VГ„LJ ETT KORT";
    this.iht = "Om valt kort Г¤r hГ¶gre Г¤n givens: VINST!";
    this.xao = "Om valt kort Г¤r lГ¤gre Г¤n givens: fГ¶rlust";
    this.hdy = "Om valt kort Г¤r samma som givens: lika";
    this.yhv = "Ess Г¤r hГ¶gst, tvГҐ Г¤r lГ¤gst, inga Jokerkort.";
    this.qts = "LIKA";
    this.nus = "SPELARE";
    this.sru = "GIVARE";
    this.spv = "SLГ… DEALERN FГ–R ATT DUBBLA VINSTEN";
    this.xqe = "VГ„LJ RГ„TT VALГ–R FГ–R ATT DUBBLA VINSTEN"
}
ujx.prototype = new jjv;

function opi() {
    this.xok = {
        backgroundColor: "rgb(0, 0, 0)"
    };
    this.yov = {
        backgroundColor: "rgb(0,0,0)",
        qjv: "rgba(0,0,0,0.3)"
    };
    this.gko = {
        yov: {
            font: "arial",
            out: "bold",
            backgroundColor: "black",
            ewv: "rgb(0,100,10)",
            kla: "rgb(80,255,100)",
            ioa: "rgb(120,120,120)",
            fec: "red",
            tvh: "white",
            wkr: "white",
            eyi: null
        },
        ate: {
            font: "arial",
            out: "bold",
            backgroundColor: "black",
            ewv: "rgb(0,100,10)",
            kla: "rgb(80,255,100)",
            ioa: "rgb(120,120,120)",
            fec: "red",
            tvh: "white",
            wkr: "rgb(230,190,10)",
            eyi: null
        }
    };
    this.mtb = {
        font: "arial",
        out: "bold",
        backgroundColor: "rgb(0,0,0)",
        dvo: null,
        wkr: "rgb(255,255,255)",
        yrn: "rgb(30,30,30)",
        borderColor: "rgb(80,80,80)"
    };
    this.brd = {
        font: "arial",
        out: "bold",
        backgroundColor: "black",
        gds: "rgb(50,50,50)",
        uoj: "rgb(255,255,255)",
        wkr: "white",
        irx: 0.8,
        drr: {
            dfa: {
                font: "sanf-serif",
                out: "",
                textAlign: "center",
                shm: "round",
                backgroundColor: "black",
                wkr: "white",
                borderColor: null,
                yrn: null,
                kka: 1
            }
        }
    };
    this.pir = {
        font: "arial",
        out: "bold",
        backgroundColor: "rgb(20,20,30)",
        borderColor: "rgb(0,0,0)",
        asm: "rgba(255,255,255,0.2)",
        wkr: "rgb(255,255,255)",
        qiv: "rgba(0,0,0,0.3)",
        display: {
            ief: "arial",
            mcg: "arial",
            out: "bold",
            wkr: "rgb(255,255,255)",
            ggy: "rgb(255,255,255)",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "rgba(255,255,255,0.5)"
        },
        dfa: {
            font: "arial",
            out: "bold",
            wkr: "rgb(0,0,0)",
            tdx: "rgb(150,150,150)",
            backgroundColor: "rgba(255,255,255,0.8)",
            dvo: "rgba(255,255,255,1)",
            cfn: "rgba(255,255,255,0.8)",
            asp: "rgba(255,255,255,1)",
            borderColor: "rgba(200,200,200,0.5)",
            shm: "rect",
            xti: -1
        }
    };
    this.rye = {
        font: "arial",
        out: "bold",
        wwf: "rgb(0,0,200)",
        mmg: "rgb(255,255,255)",
        txg: "rgb(0,0,150)",
        backgroundColor: "rgb(220,240,255)",
        vox: "rgb(180,220,255)",
        ksr: "rgb(10,20,25)",
        eto: "rgb(130,220,255)",
        xxi: "rgb(130,190,255)",
        wkr: "rgb(255,255,255)",
        dpa: "rgb(130,190,255)",
        rop: "rgb(100,160,255)",
        ykd: "rgb(255,255,255)",
        dfa: {
            shm: "rect",
            font: "arial",
            out: "bold",
            wkr: "rgb(255,255,255)",
            rrq: null,
            backgroundColor: "rgb(90,160,255)",
            zbj: "rgb(90,160,255)",
            borderColor: "rgb(60,120,200)",
            yrn: "rgb(40,80,140)"
        },
        jnt: {
            shm: "round",
            font: "arial",
            out: "bold",
            wkr: "rgb(255,255,255)",
            rrq: null,
            backgroundColor: "rgba(0,0,100,0.5)",
            zbj: "rgba(150,150,255,0.5)",
            borderColor: "rgb(90,170,255)",
            yrn: "rgb(40,80,140)"
        }
    };
    this.ycw = {};
    this.wip = {
        qrz: ["rgb(255,0,0)", "rgb(255,200,0)", "rgb(0,255,200)", "rgb(240,240,240)"]
    };
    this.llo = {
        type: "left",
        font: "arial",
        out: "bold",
        backgroundColor: "rgba(0,0,0,0.7)",
        dvo: null,
        borderColor: "rgb(0,0,0)",
        yrn: "rgb(180,180,180)",
        vox: "rgba(0,0,0,0.6)",
        pam: null,
        ggy: "rgb(255,200,0)",
        wkr: "white",
        poj: {
            font: "arial",
            out: "bold",
            backgroundColor: "rgb(100,100,100)",
            dvo: "rgb(100,100,100)",
            cfn: null,
            asp: null,
            borderColor: "rgb(100,100,100)",
            wkr: "rgb(255,255,255)",
            tdx: "rgb(255,200,0)",
            shm: "triangle",
            xti: 1
        },
        iwv: {
            font: "arial",
            out: "bold",
            backgroundColor: "rgb(100,100,100)",
            dvo: "rgb(100,100,100)",
            cfn: null,
            asp: null,
            borderColor: "rgb(100,100,100)",
            wkr: "rgb(255,255,255)",
            tdx: "rgb(255,200,0)",
            shm: "triangle",
            xti: 0
        },
        meg: {
            font: "arial",
            out: "bold",
            backgroundColor: "rgb(100,100,100)",
            dvo: "rgb(15,15,15)",
            cfn: "rgb(100,100,100)",
            asp: "rgb(15,15,15)",
            borderColor: "rgb(150,150,150)",
            wkr: "rgb(255,255,255)",
            tdx: "rgb(255,200,0)",
            shm: "rect",
            xti: -1
        },
        display: {
            mcg: "sans-serif",
            ief: "sans-serif",
            out: "bold",
            ggy: null,
            wkr: "yellow",
            borderColor: "rgb(100,100,100)",
            yrn: null,
            backgroundColor: "black"
        },
        vph: {
            font: "arial",
            out: "bold",
            backgroundColor: null,
            dvo: null,
            wkr: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.npu = {
        font: "arial",
        out: "bold",
        backgroundColor: "rgb(180,180,180)",
        dvo: "rgb(120,120,120)",
        borderColor: "rgb(80,80,80)",
        yrn: "rgb(30,30,30)",
        wkr: "white",
        tbl: {
            font: "arial",
            out: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            dvo: null,
            cfn: "rgba(100,100,100,0.5)",
            asp: null,
            borderColor: null,
            wkr: "white",
            shm: "rect",
            xti: -1
        },
        poj: {
            font: "arial",
            out: "bold",
            backgroundColor: "rgb(255,255,255)",
            dvo: "rgb(255,255,255)",
            cfn: null,
            asp: null,
            borderColor: "rgb(255,255,255)",
            wkr: "rgb(0,0,0)",
            tdx: "rgb(0,0,0)",
            shm: "triangle",
            xti: 1
        },
        iwv: {
            font: "arial",
            out: "bold",
            backgroundColor: "rgb(255,255,255)",
            dvo: "rgb(255,255,255)",
            cfn: null,
            asp: null,
            borderColor: "rgb(255,255,255)",
            wkr: "rgb(0,0,0)",
            tdx: "rgb(0,0,0)",
            shm: "triangle",
            xti: 0
        },
        xxh: {
            shm: "rect",
            font: "arial",
            out: "bold",
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,0.1)",
            wkr: "white",
            kka: 1,
            borderColor: "rgb(255,255,255)",
            yrn: "rgb(220,220,220)"
        },
        display: {
            mcg: "sans-serif",
            ief: "sans-serif",
            out: "bold",
            ggy: null,
            wkr: "white",
            borderColor: "white",
            yrn: null,
            backgroundColor: "rgb(0,0,0)"
        },
        vph: {
            font: "arial",
            out: "bold",
            backgroundColor: null,
            dvo: null,
            wkr: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.ror = {
        hbm: [{
            mcg: "sans-serif",
            qcn: "verdana",
            out: "bold",
            ggy: "rgb(255,255,100)",
            tar: "rgb(210,190,40)",
            rrq: "rgb(252,247,0)",
            irp: "rgb(220,200,0)",
            gds: "rgb(0,0,0)"
        }, {
            mcg: "sans-serif",
            qcn: "verdana",
            out: "bold",
            ggy: "rgb(250,250,250)",
            tar: "rgb(210,210,210)",
            rrq: "rgb(255,255,255)",
            irp: "rgb(220,220,220)",
            gds: "rgb(0,0,0)"
        }, {
            mcg: "sans-serif",
            qcn: "verdana",
            out: "bold",
            ggy: "rgb(230,230,230)",
            tar: "rgb(190,190,190)",
            rrq: "rgb(255,255,255)",
            irp: "rgb(220,220,220)",
            gds: "rgb(0,0,0)"
        }, {
            mcg: "sans-serif",
            qcn: "verdana",
            out: "bold",
            ggy: "rgb(230,230,230)",
            tar: "rgb(190,190,190)",
            rrq: "rgb(255,255,255)",
            irp: "rgb(220,220,220)",
            gds: "rgb(0,0,0)"
        }],
        qxs: {
            mcg: "sans-serif",
            qcn: "sans-serif",
            out: "bold",
            ggy: "rgb(236,225,207)",
            tar: "rgb(214,170,102)",
            rrq: "rgb(245,220,148)",
            irp: "rgb(190,137,40)"
        },
        fgh: {}
    };
    this.jxo = {
        axj: "rgb(240,240,240)",
        yra: "rgb(255,255,255)",
        borderColor: "rgb(200,200,200)",
        qiv: "rgba(0,80,150,0.6)",
        display: {
            ief: "arial",
            mcg: "arial",
            out: "bold",
            wkr: "rgb(0,80,151)",
            ggy: "rgb(0,30,80)",
            backgroundColor: "rgb(255,255,255)",
            borderColor: "rgb(200,200,200)"
        }
    }
}

function ihs() {
    this.kpd = {
        backgroundColor: null,
        dvo: null,
        vox: "rgb(0,0,0)",
        ksr: "rgb(0,0,0)",
        xsu: null,
        ptj: 0.5,
        dfa: {
            shm: "rect",
            font: "verdana",
            out: "bold",
            backgroundColor: "rgb(0,0,0)",
            zbj: "rgb(150,150,150)",
            wkr: "rgb(255,255,255)",
            rrq: "rgb(255,255,0)",
            borderColor: "rgb(150,150,150)",
            yrn: "rgb(0,0,0)"
        },
        display: {
            ief: "sans-serif",
            mcg: "sans-serif",
            out: "bold",
            backgroundColor: "black",
            wkr: "yellow",
            ggy: "yellow",
            borderColor: "rgb(255,255,255)",
            yrn: "rgb(160,160,160)"
        },
        npf: {
            font: "verdana",
            out: "bold",
            backgroundColor: "rgb(75, 5, 5)",
            borderColor: null,
            wkr: "rgb(255, 255, 0)"
        }
    };
    this.oue = {
        backgroundColor: null,
        vox: "rgb(0,0,0)",
        ksr: "rgb(0,0,0)",
        display: {
            ief: "sans-serif",
            mcg: "sans-serif",
            out: "bold",
            backgroundColor: "black",
            wkr: "yellow",
            ggy: "yellow",
            borderColor: "rgb(255,255,255)",
            yrn: "rgb(160,160,160)"
        },
        dfa: {
            shm: "rect",
            font: "verdana",
            out: "bold",
            backgroundColor: "rgb(0,0,0)",
            zbj: "rgb(150,150,150)",
            wkr: "rgb(255,255,255)",
            rrq: null,
            borderColor: "rgb(150,150,150)",
            yrn: "rgb(0,0,0)"
        },
        npf: {
            font: "verdana",
            out: "bold",
            backgroundColor: "rgb(75, 5, 5)",
            borderColor: null,
            wkr: "rgb(255, 255, 0)"
        }
    };
    this.seb = {
        backgroundColor: null,
        vox: "rgb(0,0,0)",
        ksr: "rgb(0,0,0)",
        dfa: {
            shm: "rect",
            font: "verdana",
            out: "bold",
            backgroundColor: "rgb(0,0,0)",
            zbj: "rgb(150,150,150)",
            wkr: "rgb(255,255,255)",
            rrq: null,
            borderColor: "rgb(150,150,150)",
            yrn: "rgb(0,0,0)"
        },
    };
    this.qbt = {
        font: "arial",
        out: "bold",
        vgm: "yellow",
        lkl: "yellow",
        wkr: "yellow"
    };
    this.xjd = {
        font: "sans-serif",
        out: "bold",
        blg: "red",
        rrf: "orange",
        gds: "white"
    };
    this.sxj = {
        font: "arial",
        out: "bold",
        wkr: "yellow"
    };
    this.haz = {
        font: "sans-serif",
        out: "bold",
        wkr: "rgb(255,255,255)",
        backgroundColor: "rgb(0,0,0)",
        crq: "rgb(0,0,0)",
        gki: "rgb(255,0,0)",
        oio: "rgb(255,255,0)",
        mvc: "rgb(80,80,80)",
        pzl: "rgb(15,15,15)",
        oqf: "rgb(0,0,0)",
        ylc: "rgb(180,180,180)",
        bqr: "rgb(0,0,0)",
        iox: 0.7
    }
}
ihs.prototype = new opi;

function rta() {
    this.kpd.backgroundColor = "rgb(0,0,110)";
    this.kpd.vox = "rgb(0,0,110)";
    this.kpd.ksr = "rgb(0,0,30)";
    this.kpd.npf.backgroundColor = "rgb(0, 0, 50)";
    this.kpd.dfa.backgroundColor = "rgb(0,0,170)";
    this.kpd.dfa.zbj = "rgb(0,0,255)";
    this.kpd.dfa.borderColor = "rgb(0,0,190)";
    this.kpd.dfa.yrn = "rgb(0,0,50)";
    this.qbt.vgm = "white";
    this.oue.backgroundColor = "rgb(0,0,110)";
    this.oue.vox = "rgb(0,0,110)";
    this.oue.ksr = "rgb(0,0,30)";
    this.oue.npf.backgroundColor = "rgb(0,0,50)";
    this.oue.dfa.backgroundColor = "rgb(0,0,170)";
    this.oue.dfa.zbj = "rgb(0,0,255)";
    this.oue.dfa.borderColor = "rgb(0,0,190)";
    this.oue.dfa.yrn = "rgb(0,0,50)";
    this.oue.font = "arial";
    this.oue.out = "bold";
    this.oue.wkr = "white";
    this.oue.qbt = {
        font: "arial",
        out: "bold",
        vgm: "white",
        lkl: "yellow",
        wkr: "yellow"
    };
    this.seb.vox = "rgb(0,0,110)";
    this.seb.ksr = "rgb(0,0,30)";
    this.seb.dfa.backgroundColor = "rgb(0,0,170)";
    this.seb.dfa.borderColor = "rgb(0,0,190)";
    this.seb.dfa.yrn = "rgb(0,0,50)";
    this.seb.win = {
        font: "arial",
        out: "bold",
        wkr: "white",
        ggy: "yellow",
        aqg: "verdana",
        ygz: "bold italic",
        amf: "white"
    };
    this.brd.drr.dfa.backgroundColor = "rgb(0,0,170)";
    this.sxj.mmj = "red";
    this.npu.backgroundColor = "rgb(0,0,110)";
    this.npu.dvo = "rgb(0,0,30)"
}
rta.prototype = new ihs;

function blh() {
    this.type = "800_600";
    this.spo = true;
    this.svp = false;
    this.ztr = false;
    this.hpl = true;
    this.mrc = false;
    this.myh = false;
    this.cli = false;
    this.fer = false
}

function ofc() {
    this.spo = false;
    this.canvas = {
        ztm: new njt(0, 0, 800, 620)
    };
    this.vxx = {
        ztm: new njt(),
        zhb: 0
    };
    this.yov = {
        ztm: new njt(0, 20, 800, 600),
        skr: 0
    };
    this.fgi = {
        teu: new njt(0, 40, 440, 36),
        kiv: new njt(5, 2, 140, 30),
        znl: new njt(150, 2, 140, 30),
        ola: new njt(295, 2, 140, 30),
        uco: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.gko = {
        yov: {
            ztm: new njt(0, 0, 500, 360),
            oad: new njt(5, 325, 490, 30),
            xjz: new njt(5, 329, 490, 14),
            ixj: new njt(50, 345, 400, 6),
            jca: new njt(5, 285, 490, 70),
            nux: new njt(120, 300, 260, 55),
            fontSize: 14,
            igu: 18,
            bso: 26,
            ubd: 5,
            ndq: 12,
            ccr: 5,
            smu: 2
        },
        ate: {
            ztm: new njt(0, 0, 800, 620),
            oad: new njt(),
            xjz: new njt(),
            ixj: new njt(200, 425, 400, 8),
            jca: new njt(100, 372, 600, 84),
            nux: new njt(270, 394, 260, 70),
            fontSize: 18,
            igu: 24,
            bso: 20,
            ubd: 0,
            ndq: 12,
            ccr: 7,
            smu: 0
        }
    };
    this.mtb = {
        ztm: new njt(0, 0, 800, 20),
        fontSize: 12,
        exa: 19,
        zdu: 15,
        abp: 120,
        ndq: 2,
        ccr: 2,
        mhc: 2,
        hul: 40
    };
    this.brd = {
        ztm: new njt(0, 20, 800, 70),
        fontSize: 10,
        sbg: 10,
        cwm: 20,
        onk: 40,
        skr: 4,
        ndq: 10,
        ccr: 5,
        ubd: 10,
        uco: {
            fontSize: 17,
            ubd: 2
        }
    };
    this.rye = {
        ztm: new njt(0, 20, 800, 600),
        teu: new njt(),
        uco: {
            jui: 20,
            zgi: 0,
            ndq: 0,
            zmf: 0,
            yxs: 0,
            ybu: 8,
            gfx: 8,
            skr: 0
        },
        lnu: new njt(0, 20, 800, 40),
        ttn: new njt(0, 100, 800, 40),
        diz: new njt(0, 140, 800, 40),
        vhy: new njt(0, 180, 800, 40),
        yjg: new njt(225, 275, 350, 100),
        xhe: new njt(200, 480, 400, 40),
        vqn: {
            khw: new njt(340, 540, 120, 55)
        },
        ojv: {
            khw: new njt(250, 540, 120, 55),
            kmn: new njt(430, 540, 120, 55)
        },
        jsd: 36,
        fontSize: 30,
        nta: 22,
        ccr: 3,
        ndq: 5,
        skr: 2,
        qmg: 3,
        vnm: 10
    };
    this.ycw = {
        ztm: new njt(-10, 25, 310, 50),
        lnu: new njt(10, 4, 240, 24),
        xjz: new njt(10, 28, 240, 18),
        gso: new njt(260, 10, 40, 30),
        dkd: new njt(7, 2, 26, 26),
        ucb: 16,
        jui: 12,
        cmk: 18
    };
    this.wip = {
        ztm: new njt(150, 160, 500, 280),
        ucb: 26,
        fontSize: 20,
        wxc: new njt(465, 5, 30, 30),
        lnu: new njt(30, 5, 440, 30),
        xhe: new njt(20, 40, 460, 160),
        bhn: new njt(20, 230, 460, 40),
        uco: {
            fontSize: 20
        }
    };
    this.llo = {
        ztm: new njt(0, 55, 560, 430),
        skr: 2,
        fez: 0,
        iln: 5,
        sug: 10,
        ucb: 26,
        zby: 20,
        lnu: new njt(30, 15, 500, 30),
        dlh: new njt(20, 50, 520, 60),
        vlk: new njt(40, 60, 220, 40),
        och: new njt(328, 60, 30, 40),
        feg: new njt(360, 60, 120, 40),
        mxr: new njt(482, 60, 30, 40),
        kvi: new njt(20, 120, 520, 200),
        kdk: new njt(40, 120, 480, 40),
        dju: new njt(30, 160, 280, 40),
        ofa: new njt(328, 160, 30, 40),
        whd: new njt(360, 160, 120, 40),
        zls: new njt(482, 160, 30, 40),
        maa: new njt(30, 215, 280, 40),
        qyu: new njt(328, 215, 30, 40),
        cyr: new njt(360, 215, 120, 40),
        kbr: new njt(482, 215, 30, 40),
        qhs: new njt(30, 270, 280, 40),
        oha: new njt(328, 270, 30, 40),
        chn: new njt(360, 270, 120, 40),
        hmc: new njt(482, 270, 30, 40),
        oad: new njt(30, 330, 500, 30),
        jzl: new njt(210, 370, 140, 50),
        hvm: new njt(),
        vph: {
            xjz: new njt(40, 0, 240, 40),
            ity: new njt(7, 12, 16, 16),
            fontSize: 20,
            ybu: 0,
            skr: 2
        },
        iwv: {
            ybu: 3,
            ndq: -5,
            ccr: -1,
            gfx: 6,
            fontSize: 20,
            skr: 0
        },
        poj: {
            ybu: 3,
            ndq: 5,
            ccr: 0,
            gfx: 6,
            fontSize: 20,
            skr: 0
        },
        meg: {
            ybu: 6,
            ndq: 0,
            ccr: 0,
            gfx: 6,
            fontSize: 26,
            skr: 2
        },
        display: {
            ucb: 16,
            jui: 24,
            mci: 0,
            zmf: 0,
            skr: 2,
            mpx: 3,
            vpg: 3,
            mxj: 3,
            bhw: 3
        }
    };
    this.ror = {
        ztm: [
            [new njt(2, 20, 130, 44)],
            [new njt(2, 20, 130, 44), new njt(668, 20, 130, 44)],
            [new njt(2, 20, 130, 23), new njt(668, 20, 130, 23), new njt(2, 41, 130, 23)],
            [new njt(2, 20, 130, 23), new njt(668, 20, 130, 23), new njt(2, 41, 130, 23), new njt(668, 41, 130, 23)]
        ],
        display: {
            pzo: new njt(0, 0, 130, 44),
            umh: new njt(0, 0, 130, 44),
            khj: new njt(),
            lnu: new njt(2, 3, 126, 19),
            mhr: new njt(8, 24, 114, 19),
            ucb: 16,
            zgi: 18,
            xid: 0
        },
        atv: {
            pzo: new njt(0, 0, 130, 23),
            umh: new njt(0, 0, 130, 23),
            khj: new njt(2, 2, 19, 19),
            lnu: new njt(),
            mhr: new njt(22, 3, 100, 19),
            ucb: 14,
            zgi: 18,
            xid: 0
        },
        qxs: {
            ztm: new njt(62, 100, 676, 372),
            pzo: new njt(32, 10, 612, 351),
            umh: new njt(0, 0, 676, 372),
            khj: new njt(301, 263, 74, 74),
            lnu: new njt(120, 58, 436, 56),
            mhr: new njt(32, 140, 612, 96),
            ucb: 68,
            zgi: 100,
            xid: 0
        },
        fgh: {
            ztm: new njt(38, 80, 724, 369),
            did: new njt(100, 53, 525, 50),
            mhr: new njt(186, 153, 332, 94),
            ans: 340,
            rfr: 30,
            pqd: {
                _0: new njt(2, 0, 90, 94),
                _1: new njt(98, 0, 90, 94),
                _2: new njt(194, 0, 90, 94),
                _3: new njt(290, 0, 90, 94),
                _4: new njt(386, 0, 90, 94),
                _5: new njt(482, 0, 90, 94),
                _6: new njt(578, 0, 90, 94),
                _7: new njt(674, 0, 90, 94),
                _8: new njt(770, 0, 90, 94),
                _9: new njt(866, 0, 90, 94),
                _cm: new njt(962, 0, 28, 94),
                _dt: new njt(999, 0, 28, 94),
                _sp: new njt(1036, 0, 28, 94)
            }
        }
    }
}
ofc.prototype = new blh;

function qtg() {
    this.svp = true
}
qtg.prototype = new ofc;

function vky() {
    this.mrc = true;
    this.ztr = true;
    this.spo = false;
    this.svp = true;
    this.canvas = {
        ztm: new njt(0, 0, 800, 1165)
    };
    this.vxx = {
        ztm: new njt(),
        zhb: 0
    };
    this.yov = {
        ztm: new njt(0, 550, 800, 615),
        skr: 10
    };
    this.fgi = {
        teu: new njt(0, 330, 440, 36),
        kiv: new njt(5, 2, 140, 30),
        znl: new njt(150, 2, 140, 30),
        ola: new njt(295, 2, 140, 30),
        uco: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.gko = {
        yov: {
            ztm: new njt(0, 0, 500, 360),
            oad: new njt(5, 325, 490, 30),
            xjz: new njt(5, 329, 490, 14),
            ixj: new njt(50, 345, 400, 6),
            jca: new njt(5, 285, 490, 70),
            nux: new njt(120, 300, 260, 55),
            fontSize: 14,
            igu: 18,
            bso: 26,
            ubd: 5,
            ndq: 12,
            ccr: 5,
            smu: 2
        },
        ate: {
            ztm: new njt(0, 0, 800, 600),
            oad: new njt(),
            xjz: new njt(),
            ixj: new njt(200, 411, 400, 8),
            jca: new njt(100, 360, 600, 110),
            nux: new njt(270, 380, 260, 70),
            fontSize: 18,
            igu: 24,
            bso: 20,
            ubd: 0,
            ndq: 12,
            ccr: 7,
            smu: 0
        }
    };
    this.top = {
        ztm: new njt(0, 20, 800, 520)
    };
    this.mtb = {
        ztm: new njt(0, 0, 800, 20),
        fontSize: 12,
        exa: 19,
        zdu: 15,
        abp: 120,
        ndq: 2,
        ccr: 2,
        mhc: 2,
        hul: 60
    };
    this.brd = {
        ztm: new njt(0, 20, 800, 70),
        fontSize: 10,
        sbg: 10,
        cwm: 20,
        onk: 40,
        skr: 4,
        ndq: 10,
        ccr: 5,
        ubd: 10,
        uco: {
            fontSize: 17,
            ubd: 2
        }
    };
    this.rye = {
        ztm: new njt(0, 550, 800, 615),
        teu: new njt(),
        uco: {
            jui: 26,
            zgi: 0,
            ndq: 0,
            zmf: 0,
            yxs: 0,
            ybu: 10,
            gfx: 10,
            skr: 2
        },
        lnu: new njt(0, 20, 800, 40),
        ttn: new njt(0, 100, 800, 40),
        diz: new njt(0, 140, 800, 40),
        vhy: new njt(0, 180, 800, 40),
        yjg: new njt(225, 275, 350, 100),
        xhe: new njt(200, 480, 400, 40),
        vqn: {
            khw: new njt(340, 540, 120, 68)
        },
        ojv: {
            khw: new njt(250, 540, 120, 68),
            kmn: new njt(430, 540, 120, 68)
        },
        jsd: 36,
        fontSize: 30,
        nta: 22,
        ccr: 3,
        ndq: 5,
        skr: 2,
        qmg: 3,
        vnm: 10,
    };
    this.ycw = {
        ztm: new njt(-10, 545, 310, 50),
        lnu: new njt(10, 4, 240, 24),
        xjz: new njt(10, 28, 240, 18),
        gso: new njt(260, 10, 40, 30),
        dkd: new njt(7, 2, 26, 26),
        ucb: 16,
        jui: 12,
        cmk: 18
    };
    this.wip = {
        ztm: new njt(150, 690, 500, 280),
        ucb: 26,
        fontSize: 20,
        wxc: new njt(465, 5, 30, 30),
        lnu: new njt(30, 5, 440, 40),
        xhe: new njt(20, 40, 460, 160),
        bhn: new njt(20, 230, 460, 40),
        uco: {
            fontSize: 20
        }
    };
    this.llo = {
        ztm: new njt(0, 585, 560, 430),
        skr: 2,
        fez: 0,
        iln: 5,
        sug: 10,
        ucb: 26,
        zby: 20,
        lnu: new njt(30, 15, 500, 30),
        dlh: new njt(20, 50, 520, 60),
        vlk: new njt(40, 60, 220, 40),
        och: new njt(328, 60, 30, 40),
        feg: new njt(360, 60, 120, 40),
        mxr: new njt(482, 60, 30, 40),
        kvi: new njt(20, 120, 520, 200),
        kdk: new njt(40, 120, 480, 40),
        dju: new njt(30, 160, 280, 40),
        ofa: new njt(328, 160, 30, 40),
        whd: new njt(360, 160, 120, 40),
        zls: new njt(482, 160, 30, 40),
        maa: new njt(30, 215, 280, 40),
        qyu: new njt(328, 215, 30, 40),
        cyr: new njt(360, 215, 120, 40),
        kbr: new njt(482, 215, 30, 40),
        qhs: new njt(30, 270, 280, 40),
        oha: new njt(328, 270, 30, 40),
        chn: new njt(360, 270, 120, 40),
        hmc: new njt(482, 270, 30, 40),
        oad: new njt(30, 330, 500, 30),
        jzl: new njt(210, 370, 140, 50),
        hvm: new njt(),
        vph: {
            xjz: new njt(40, 0, 240, 40),
            ity: new njt(7, 12, 16, 16),
            fontSize: 20,
            ybu: 0,
            skr: 2
        },
        iwv: {
            ybu: 3,
            ndq: -5,
            ccr: -1,
            gfx: 6,
            fontSize: 20,
            skr: 0
        },
        poj: {
            ybu: 3,
            ndq: 5,
            ccr: 0,
            gfx: 6,
            fontSize: 20,
            skr: 0
        },
        meg: {
            ybu: 6,
            ndq: 0,
            ccr: 0,
            gfx: 6,
            fontSize: 26,
            skr: 2
        },
        display: {
            ucb: 16,
            jui: 24,
            mci: 0,
            zmf: 0,
            skr: 2,
            mpx: 3,
            vpg: 3,
            mxj: 3,
            bhw: 3
        }
    };
    this.ror = {
        ztm: [
            [new njt(2, 550, 130, 44)],
            [new njt(2, 550, 130, 44), new njt(668, 550, 130, 44)],
            [new njt(2, 550, 130, 23), new njt(668, 550, 130, 23), new njt(2, 571, 130, 23)],
            [new njt(2, 550, 130, 23), new njt(668, 550, 130, 23), new njt(2, 571, 130, 23), new njt(668, 571, 130, 23)]
        ],
        display: {
            pzo: new njt(0, 0, 130, 44),
            umh: new njt(0, 0, 130, 44),
            khj: new njt(),
            lnu: new njt(2, 3, 126, 19),
            mhr: new njt(8, 24, 114, 19),
            ucb: 16,
            zgi: 18,
            xid: 0
        },
        atv: {
            pzo: new njt(0, 0, 130, 23),
            umh: new njt(0, 0, 130, 23),
            khj: new njt(2, 2, 19, 19),
            lnu: new njt(),
            mhr: new njt(22, 3, 100, 19),
            ucb: 14,
            zgi: 18,
            xid: 0
        },
        qxs: {
            ztm: new njt(62, 640, 676, 372),
            pzo: new njt(32, 10, 612, 351),
            umh: new njt(0, 0, 676, 372),
            khj: new njt(301, 263, 74, 74),
            lnu: new njt(120, 58, 436, 56),
            mhr: new njt(32, 140, 612, 96),
            ucb: 68,
            zgi: 100,
            xid: 0
        },
        fgh: {
            ztm: new njt(38, 610, 724, 369),
            did: new njt(100, 53, 525, 50),
            mhr: new njt(186, 153, 332, 94),
            ans: 360,
            rfr: 30,
            pqd: {
                _0: new njt(2, 0, 90, 94),
                _1: new njt(98, 0, 90, 94),
                _2: new njt(194, 0, 90, 94),
                _3: new njt(290, 0, 90, 94),
                _4: new njt(386, 0, 90, 94),
                _5: new njt(482, 0, 90, 94),
                _6: new njt(578, 0, 90, 94),
                _7: new njt(674, 0, 90, 94),
                _8: new njt(770, 0, 90, 94),
                _9: new njt(866, 0, 90, 94),
                _cm: new njt(962, 0, 28, 94),
                _dt: new njt(999, 0, 28, 94),
                _sp: new njt(1036, 0, 28, 94)
            }
        }
    }
}
vky.prototype = new blh;

function rxd() {
    this.spo = false;
    this.myh = true;
    this.cli = true;
    this.canvas = {
        ztm: new njt(0, 0, 960, 630)
    };
    this.vxx = {
        ztm: new njt(),
        zhb: 0,
        hxg: 0
    };
    this.yov = {
        ztm: new njt(160, 30, 800, 600),
        skr: 0
    };
    this.fgi = {
        teu: new njt(460, 25, 500, 34),
        kiv: new njt(5, 2, 160, 30),
        znl: new njt(170, 2, 160, 30),
        ola: new njt(335, 2, 160, 30),
        uco: {
            fontSize: 16,
            textIndent: 32
        }
    };
    this.gko = {
        yov: {
            ztm: new njt(0, 0, 640, 460),
            oad: new njt(6, 416, 628, 38),
            xjz: new njt(6, 420, 628, 17),
            ixj: new njt(64, 442, 512, 7),
            jca: new njt(6, 364, 628, 90),
            nux: new njt(140, 384, 360, 70),
            fontSize: 18,
            igu: 20,
            bso: 30,
            ubd: 6,
            ndq: 12,
            ccr: 6,
            smu: 3
        },
        ate: {
            ztm: new njt(0, 0, 960, 630),
            oad: new njt(),
            xjz: new njt(),
            ixj: new njt(280, 431, 400, 8),
            jca: new njt(180, 380, 600, 90),
            nux: new njt(350, 400, 260, 70),
            fontSize: 18,
            igu: 24,
            bso: 20,
            ubd: 0,
            ndq: 12,
            ccr: 7,
            smu: 0
        }
    };
    this.mtb = {
        ztm: new njt(160, 0, 800, 30),
        fontSize: 16,
        exa: 26,
        zdu: 15,
        abp: 160,
        ndq: 2,
        ccr: 2,
        mhc: 2,
        hul: 0
    };
    this.brd = {};
    this.rye = {
        ztm: new njt(0, 0, 960, 630),
        teu: new njt(0, 0, 160, 630),
        uco: {
            jui: 0,
            zgi: 0,
            ndq: 0,
            zmf: 0,
            yxs: 0,
            gfx: 8,
            ybu: 16,
            skr: 4
        },
        lnu: new njt(160, 50, 800, 40),
        ttn: new njt(160, 130, 800, 40),
        diz: new njt(160, 170, 800, 40),
        vhy: new njt(160, 210, 800, 40),
        yjg: new njt(385, 305, 350, 100),
        xhe: new njt(360, 510, 400, 40),
        vqn: {
            khw: new njt(10, 455, 140, 100),
        },
        ojv: {
            khw: new njt(10, 355, 140, 100),
            kmn: new njt(10, 165, 140, 100)
        },
        jsd: 36,
        fontSize: 30,
        nta: 22,
        ccr: 3,
        ndq: 5,
        skr: 2,
        qmg: 3,
        vnm: 10
    };
    this.npu = {
        ztm: new njt(160, 30, 800, 600),
        skr: 0,
        ybu: 0,
        slq: 50,
        osj: 30,
        zby: 30,
        fyf: new njt(30, 180, 410, 60),
        wro: new njt(460, 180, 50, 60),
        cnr: new njt(512, 180, 210, 60),
        egk: new njt(724, 180, 50, 60),
        rrb: new njt(30, 310, 410, 60),
        ghj: new njt(460, 310, 50, 60),
        kmj: new njt(512, 310, 210, 60),
        mne: new njt(724, 310, 50, 60),
        yzj: new njt(30, 440, 410, 60),
        iaz: new njt(512, 440, 210, 60),
        nwc: new njt(40, 530, 720, 50),
        vlk: new njt(30, 120, 360, 60),
        och: new njt(460, 120, 50, 60),
        feg: new njt(512, 120, 210, 60),
        mxr: new njt(724, 120, 50, 60),
        lyi: new njt(40, 200, 760, 70),
        dju: new njt(30, 280, 410, 60),
        ofa: new njt(460, 280, 50, 60),
        whd: new njt(512, 280, 210, 60),
        zls: new njt(724, 280, 50, 60),
        maa: new njt(30, 360, 410, 60),
        qyu: new njt(460, 360, 50, 60),
        cyr: new njt(512, 360, 210, 60),
        kbr: new njt(724, 360, 50, 60),
        qhs: new njt(30, 440, 410, 60),
        oha: new njt(460, 440, 50, 60),
        chn: new njt(512, 440, 210, 60),
        hmc: new njt(724, 440, 50, 60),
        oad: new njt(40, 530, 720, 50),
        jnz: {
            ckd: new njt(0, 0, 267, 90),
            wjw: new njt(267, 0, 266, 90),
            ohc: new njt(533, 0, 267, 90),
            lpi: new njt()
        },
        sco: {
            ckd: new njt(0, 0, 200, 90),
            tka: new njt(200, 0, 200, 90),
            wjw: new njt(400, 0, 200, 90),
            ohc: new njt(600, 0, 200, 90),
            lpi: new njt()
        },
        okm: [new njt(132, 205, 200, 160), new njt(464, 205, 200, 160)],
        lfs: [new njt(50, 205, 200, 160), new njt(300, 205, 200, 160), new njt(550, 205, 200, 160)],
        vzc: [new njt(132, 130, 200, 160), new njt(464, 130, 200, 160), new njt(132, 360, 200, 160), new njt(464, 360, 200, 160)],
        ilm: [new njt(50, 130, 200, 160), new njt(300, 130, 200, 160), new njt(550, 130, 200, 160), new njt(50, 360, 200, 160), new njt(300, 360, 200, 160), new njt(550, 360, 200, 160)],
        iwv: {
            ybu: 3,
            ndq: -10,
            ccr: -1,
            gfx: 6,
            fontSize: 36,
            skr: 0
        },
        poj: {
            ybu: 3,
            ndq: 10,
            ccr: -1,
            gfx: 6,
            fontSize: 36,
            skr: 0
        },
        tbl: {
            fontSize: 36,
            ndq: 0,
            ccr: 0,
            gfx: 10,
            ybu: 0,
            skr: 0
        },
        xxh: {
            fontSize: 26,
            ubd: 5,
            ybu: 26,
            skr: 4,
            orp: 40
        },
        mjg: {
            ucb: 16,
            jui: 40,
            mci: 0,
            zmf: 0,
            skr: 2,
            ubd: 3
        },
        dji: {
            ucb: 16,
            jui: 40,
            mci: 0,
            zmf: 0,
            skr: 2,
            ubd: 3
        },
        vph: {
            xjz: new njt(50, 0, 360, 60),
            ity: new njt(0, 13, 30, 30),
            fontSize: 30,
            ybu: 0,
            skr: 2
        }
    };
    this.ycw = {
        ztm: new njt(660, 30, 310, 60),
        lnu: new njt(60, 6, 240, 26),
        xjz: new njt(60, 34, 240, 20),
        gso: new njt(5, 11, 50, 38),
        dkd: new njt(8, 2, 34, 34),
        ucb: 16,
        jui: 12,
        cmk: 24
    };
    this.wip = {
        ztm: new njt(280, 150, 560, 330),
        ucb: 26,
        fontSize: 20,
        wxc: new njt(515, 5, 40, 40),
        lnu: new njt(40, 5, 480, 30),
        xhe: new njt(20, 40, 520, 195),
        bhn: new njt(20, 265, 520, 54),
        uco: {
            fontSize: 20
        }
    };
    this.ror = {
        ztm: [
            [new njt(162, 30, 130, 44)],
            [new njt(162, 30, 130, 44), new njt(828, 30, 130, 44)],
            [new njt(162, 30, 130, 23), new njt(828, 30, 130, 23), new njt(162, 51, 130, 23)],
            [new njt(162, 30, 130, 23), new njt(828, 30, 130, 23), new njt(162, 51, 130, 23), new njt(828, 51, 130, 23)]
        ],
        display: {
            pzo: new njt(0, 0, 130, 44),
            umh: new njt(0, 0, 130, 44),
            khj: new njt(),
            lnu: new njt(2, 3, 126, 19),
            mhr: new njt(8, 24, 114, 19),
            ucb: 16,
            zgi: 18,
            xid: 0
        },
        atv: {
            pzo: new njt(0, 0, 130, 23),
            umh: new njt(0, 0, 130, 23),
            khj: new njt(2, 2, 19, 19),
            lnu: new njt(),
            mhr: new njt(22, 3, 100, 19),
            ucb: 14,
            zgi: 18,
            xid: 0
        },
        qxs: {
            ztm: new njt(222, 110, 676, 372),
            pzo: new njt(32, 10, 612, 351),
            umh: new njt(0, 0, 676, 372),
            khj: new njt(301, 263, 74, 74),
            lnu: new njt(120, 58, 436, 56),
            mhr: new njt(32, 140, 612, 96),
            ucb: 68,
            zgi: 100,
            xid: 0
        },
        fgh: {
            ztm: new njt(198, 90, 724, 369),
            did: new njt(100, 53, 525, 50),
            mhr: new njt(186, 153, 332, 94),
            ans: 340,
            rfr: 30,
            pqd: {
                _0: new njt(2, 0, 90, 94),
                _1: new njt(98, 0, 90, 94),
                _2: new njt(194, 0, 90, 94),
                _3: new njt(290, 0, 90, 94),
                _4: new njt(386, 0, 90, 94),
                _5: new njt(482, 0, 90, 94),
                _6: new njt(578, 0, 90, 94),
                _7: new njt(674, 0, 90, 94),
                _8: new njt(770, 0, 90, 94),
                _9: new njt(866, 0, 90, 94),
                _cm: new njt(962, 0, 28, 94),
                _dt: new njt(999, 0, 28, 94),
                _sp: new njt(1036, 0, 28, 94)
            }
        }
    }
}
rxd.prototype = new blh;

function xou() {
    this.spo = false;
    this.myh = true;
    this.cli = true;
    this.canvas = {
        ztm: new njt(0, 0, 960, 630)
    };
    this.vxx = {
        ztm: new njt(),
        zhb: 0,
        hxg: 0
    };
    this.yov = {
        ztm: new njt(0, 30, 800, 600),
        skr: 0
    };
    this.fgi = {
        teu: new njt(0, 25, 500, 34),
        kiv: new njt(5, 2, 160, 30),
        znl: new njt(170, 2, 160, 30),
        ola: new njt(335, 2, 160, 30),
        uco: {
            fontSize: 16,
            textIndent: 32
        }
    };
    this.gko = {
        yov: {
            ztm: new njt(0, 0, 640, 460),
            oad: new njt(6, 416, 628, 38),
            xjz: new njt(6, 420, 628, 17),
            ixj: new njt(64, 442, 512, 7),
            jca: new njt(6, 364, 628, 90),
            nux: new njt(140, 384, 360, 70),
            fontSize: 18,
            igu: 20,
            bso: 30,
            ubd: 6,
            ndq: 12,
            ccr: 6,
            smu: 3
        },
        ate: {
            ztm: new njt(0, 0, 960, 630),
            oad: new njt(),
            xjz: new njt(),
            ixj: new njt(280, 431, 400, 8),
            jca: new njt(180, 380, 600, 90),
            nux: new njt(350, 400, 260, 70),
            fontSize: 18,
            igu: 24,
            bso: 20,
            ubd: 0,
            ndq: 12,
            ccr: 7,
            smu: 0
        }
    };
    this.mtb = {
        ztm: new njt(0, 0, 800, 30),
        fontSize: 16,
        exa: 26,
        zdu: 15,
        abp: 160,
        ndq: 2,
        ccr: 2,
        mhc: 2,
        hul: 0
    };
    this.brd = {};
    this.rye = {
        ztm: new njt(0, 0, 960, 630),
        teu: new njt(800, 0, 160, 630),
        uco: {
            jui: 0,
            zgi: 0,
            ndq: 0,
            zmf: 0,
            yxs: 0,
            gfx: 8,
            ybu: 16,
            skr: 4
        },
        lnu: new njt(0, 50, 800, 40),
        ttn: new njt(0, 130, 800, 40),
        diz: new njt(0, 170, 800, 40),
        vhy: new njt(0, 210, 800, 40),
        yjg: new njt(225, 305, 350, 100),
        xhe: new njt(200, 510, 400, 40),
        vqn: {
            khw: new njt(810, 455, 140, 100),
        },
        ojv: {
            khw: new njt(810, 355, 140, 100),
            kmn: new njt(810, 165, 140, 100)
        },
        jsd: 36,
        fontSize: 30,
        nta: 22,
        ccr: 3,
        ndq: 5,
        skr: 2,
        qmg: 3,
        vnm: 10
    };
    this.npu = {
        ztm: new njt(0, 30, 800, 600),
        skr: 0,
        ybu: 0,
        slq: 50,
        osj: 30,
        zby: 30,
        fyf: new njt(30, 180, 410, 60),
        wro: new njt(460, 180, 50, 60),
        cnr: new njt(512, 180, 210, 60),
        egk: new njt(724, 180, 50, 60),
        rrb: new njt(30, 310, 410, 60),
        ghj: new njt(460, 310, 50, 60),
        kmj: new njt(512, 310, 210, 60),
        mne: new njt(724, 310, 50, 60),
        yzj: new njt(30, 440, 410, 60),
        iaz: new njt(512, 440, 210, 60),
        nwc: new njt(40, 530, 720, 50),
        vlk: new njt(30, 120, 360, 60),
        och: new njt(460, 120, 50, 60),
        feg: new njt(512, 120, 210, 60),
        mxr: new njt(724, 120, 50, 60),
        lyi: new njt(40, 200, 760, 70),
        dju: new njt(30, 280, 410, 60),
        ofa: new njt(460, 280, 50, 60),
        whd: new njt(512, 280, 210, 60),
        zls: new njt(724, 280, 50, 60),
        maa: new njt(30, 360, 410, 60),
        qyu: new njt(460, 360, 50, 60),
        cyr: new njt(512, 360, 210, 60),
        kbr: new njt(724, 360, 50, 60),
        qhs: new njt(30, 440, 410, 60),
        oha: new njt(460, 440, 50, 60),
        chn: new njt(512, 440, 210, 60),
        hmc: new njt(724, 440, 50, 60),
        oad: new njt(40, 530, 720, 50),
        jnz: {
            ckd: new njt(0, 0, 267, 90),
            wjw: new njt(267, 0, 266, 90),
            ohc: new njt(533, 0, 267, 90),
            lpi: new njt()
        },
        sco: {
            ckd: new njt(0, 0, 200, 90),
            tka: new njt(200, 0, 200, 90),
            wjw: new njt(400, 0, 200, 90),
            ohc: new njt(600, 0, 200, 90),
            lpi: new njt()
        },
        okm: [new njt(132, 205, 200, 160), new njt(464, 205, 200, 160)],
        lfs: [new njt(50, 205, 200, 160), new njt(300, 205, 200, 160), new njt(550, 205, 200, 160)],
        vzc: [new njt(132, 130, 200, 160), new njt(464, 130, 200, 160), new njt(132, 360, 200, 160), new njt(464, 360, 200, 160)],
        ilm: [new njt(50, 130, 200, 160), new njt(300, 130, 200, 160), new njt(550, 130, 200, 160), new njt(50, 360, 200, 160), new njt(300, 360, 200, 160), new njt(550, 360, 200, 160)],
        iwv: {
            ybu: 3,
            ndq: -10,
            ccr: -1,
            gfx: 6,
            fontSize: 36,
            skr: 0
        },
        poj: {
            ybu: 3,
            ndq: 10,
            ccr: -1,
            gfx: 6,
            fontSize: 36,
            skr: 0
        },
        tbl: {
            fontSize: 36,
            ndq: 0,
            ccr: 0,
            gfx: 10,
            ybu: 0,
            skr: 0
        },
        xxh: {
            fontSize: 26,
            ubd: 5,
            ybu: 26,
            skr: 4,
            orp: 40
        },
        mjg: {
            ucb: 16,
            jui: 40,
            mci: 0,
            zmf: 0,
            skr: 2,
            ubd: 3
        },
        dji: {
            ucb: 16,
            jui: 40,
            mci: 0,
            zmf: 0,
            skr: 2,
            ubd: 3
        },
        vph: {
            xjz: new njt(50, 0, 360, 60),
            ity: new njt(0, 13, 30, 30),
            fontSize: 30,
            ybu: 0,
            skr: 2
        }
    };
    this.ycw = {
        ztm: new njt(-10, 30, 310, 60),
        lnu: new njt(10, 6, 240, 26),
        xjz: new njt(10, 34, 240, 20),
        gso: new njt(255, 11, 50, 38),
        dkd: new njt(8, 2, 34, 34),
        ucb: 16,
        jui: 12,
        cmk: 24
    };
    this.wip = {
        ztm: new njt(120, 150, 560, 330),
        ucb: 26,
        fontSize: 20,
        wxc: new njt(515, 5, 40, 40),
        lnu: new njt(40, 5, 480, 30),
        xhe: new njt(20, 40, 520, 195),
        bhn: new njt(20, 265, 520, 54),
        uco: {
            fontSize: 20
        }
    };
    this.ror = {
        ztm: [
            [new njt(2, 30, 130, 44)],
            [new njt(2, 30, 130, 44), new njt(668, 30, 130, 44)],
            [new njt(2, 30, 130, 23), new njt(668, 30, 130, 23), new njt(2, 51, 130, 23)],
            [new njt(2, 30, 130, 23), new njt(668, 30, 130, 23), new njt(2, 51, 130, 23), new njt(668, 51, 130, 23)]
        ],
        display: {
            pzo: new njt(0, 0, 130, 44),
            umh: new njt(0, 0, 130, 44),
            khj: new njt(),
            lnu: new njt(2, 3, 126, 19),
            mhr: new njt(8, 24, 114, 19),
            ucb: 16,
            zgi: 18,
            xid: 0
        },
        atv: {
            pzo: new njt(0, 0, 130, 23),
            umh: new njt(0, 0, 130, 23),
            khj: new njt(2, 2, 19, 19),
            lnu: new njt(),
            mhr: new njt(22, 3, 100, 19),
            ucb: 14,
            zgi: 18,
            xid: 0
        },
        qxs: {
            ztm: new njt(62, 110, 676, 372),
            pzo: new njt(32, 10, 612, 351),
            umh: new njt(0, 0, 676, 372),
            khj: new njt(301, 263, 74, 74),
            lnu: new njt(120, 58, 436, 56),
            mhr: new njt(32, 140, 612, 96),
            ucb: 68,
            zgi: 100,
            xid: 0
        },
        fgh: {
            ztm: new njt(38, 90, 724, 369),
            did: new njt(100, 53, 525, 50),
            mhr: new njt(186, 153, 332, 94),
            ans: 340,
            rfr: 30,
            pqd: {
                _0: new njt(2, 0, 90, 94),
                _1: new njt(98, 0, 90, 94),
                _2: new njt(194, 0, 90, 94),
                _3: new njt(290, 0, 90, 94),
                _4: new njt(386, 0, 90, 94),
                _5: new njt(482, 0, 90, 94),
                _6: new njt(578, 0, 90, 94),
                _7: new njt(674, 0, 90, 94),
                _8: new njt(770, 0, 90, 94),
                _9: new njt(866, 0, 90, 94),
                _cm: new njt(962, 0, 28, 94),
                _dt: new njt(999, 0, 28, 94),
                _sp: new njt(1036, 0, 28, 94)
            }
        }
    }
}
xou.prototype = new blh;

function cye() {
    this.bxw = true;
    this.szz = true;
    this.kpd = {
        ztm: new njt(0, 496, 800, 124),
        dcw: new njt(0, 0, 800, 124),
        whl: new njt(),
        npf: {
            ztm: new njt(187, 14, 470, 40),
            ccr: 10,
            fontSize: 18,
            ybu: 3,
            qwo: 2,
            gfx: 6,
            skr: 2
        },
        gge: {
            jui: 22,
            zgi: 0,
            ndq: 0,
            zmf: 0,
            yxs: 0,
            ybu: 10,
            gfx: 8,
            skr: 2
        },
        vfp: {
            jui: 16,
            zgi: 0,
            ndq: 0,
            zmf: 0,
            yxs: 0,
            ybu: 8,
            gfx: 6,
            skr: 2
        },
        iiy: {
            jui: 16,
            zgi: 16,
            ndq: 0,
            ybu: 8,
            gfx: 6,
            skr: 2,
            zmf: 24,
            yxs: -24
        },
        display: {
            mci: -12,
            zmf: 11,
            jui: 26,
            ucb: 15,
            skr: 2,
            mpx: 3,
            vpg: 3,
            mxj: 3,
            bhw: 3
        },
        thf: new njt(5, 10, 150, 48),
        reb: new njt(689, 10, 106, 48),
        vhn: {
            lyr: new njt(686, 68, 110, 53),
            suj: new njt(492, 68, 80, 53),
            app: new njt(382, 68, 80, 53),
            kmn: new njt(272, 68, 80, 53),
            rfc: new njt(25, 68, 110, 53),
            tdb: new njt()
        },
        ejj: {
            lyr: new njt(686, 68, 110, 53),
            rfc: new njt(532, 68, 80, 53),
            suj: new njt(432, 68, 80, 53),
            app: new njt(332, 68, 80, 53),
            kmn: new njt(232, 68, 80, 53),
            ogt: new njt(40, 68, 80, 53),
            tdb: new njt()
        },
        ijk: {
            lyr: new njt(686, 68, 110, 53),
            rfc: new njt(492, 68, 80, 53),
            suj: new njt(382, 68, 80, 53),
            app: new njt(272, 68, 80, 53),
            ogt: new njt(40, 68, 80, 53),
            tdb: new njt()
        },
        dcc: {
            lyr: new njt(686, 68, 110, 53),
            suj: new njt(492, 68, 80, 53),
            app: new njt(382, 68, 80, 53),
            kmn: new njt(272, 68, 80, 53),
            rfc: new njt(25, 68, 110, 53),
            tdb: new njt()
        },
        qvt: 15
    };
    this.seb = {
        ztm: new njt(0, 20, 800, 600),
        teu: new njt(0, 540, 800, 60),
        kmn: new njt(711, 544, 73, 53),
        fha: new njt(11, 544, 73, 53),
        oqy: new njt(316, 544, 73, 53),
        kqp: new njt(411, 544, 73, 53),
        uco: {
            jui: 16,
            zgi: 0,
            ndq: 0,
            zmf: 0,
            yxs: 0,
            gfx: 6,
            ybu: 8,
            skr: 2
        }
    };
    this.oue = {
        ztm: new njt(0, 20, 800, 600),
        teu: new njt(0, 485, 800, 115),
        npf: {
            ztm: new njt(187, 490, 470, 40),
            fontSize: 18,
            ccr: 14,
            ybu: 3,
            qwo: 2,
            gfx: 6,
            skr: 2
        },
        uco: {
            jui: 18,
            zgi: 0,
            ndq: 0,
            zmf: 0,
            yxs: 0,
            gfx: 8,
            ybu: 10,
            skr: 2
        },
        display: {
            mci: -12,
            zmf: 11,
            jui: 26,
            ucb: 15,
            skr: 2,
            mpx: 3,
            vpg: 3,
            mxj: 3,
            bhw: 3
        },
        zmh: new njt(689, 486, 106, 48),
        led: new njt(5, 486, 150, 48)
    };
    this.ioh = {
        ztm: new njt(710, 35, 90, 450),
        lnu: new njt(5, 5, 80, 15),
        kct: new njt(50, 25, 35, 410),
        fontSize: 15,
        gig: 20,
        skr: 2,
        ybu: 5,
        vwh: 4,
        qfh: 10,
        pfr: 5
    };
    this.qbt = {
        fontSize: 18,
        ogp: 128,
        cku: 176,
        ajv: 0,
        ljm: 20,
        jhv: true
    };
    this.soc = new njt(20, 290, 128, 205);
    this.rhg = new njt(176, 290, 128, 205);
    this.taa = new njt(333, 290, 128, 205);
    this.mkr = new njt(490, 290, 128, 205);
    this.qpr = new njt(646, 290, 128, 205);
    this.xjd = {
        ztm: new njt(363, 72, 408, 155),
        fontSize: 50,
        ndq: 0,
        ccr: 9,
        ubd: 0,
        xid: 2
    };
    this.sxj = {
        ztm: new njt(355, 30, 424, 236),
        fontSize: 20,
        ubd: 6
    }
}
cye.prototype = new ofc;

function yun() {
    this.svp = true
}
yun.prototype = new cye;

function qtu() {
    this.bxw = true;
    this.szz = true;
    this.kpd = {
        ztm: new njt(0, 1026, 800, 139),
        dcw: new njt(0, 0, 800, 139),
        whl: new njt(),
        npf: {
            ztm: new njt(187, 14, 470, 40),
            ccr: 10,
            fontSize: 18,
            ybu: 3,
            qwo: 2,
            gfx: 6,
            skr: 2
        },
        gge: {
            jui: 28,
            zgi: 0,
            ndq: 0,
            zmf: 0,
            yxs: 0,
            ybu: 12,
            gfx: 10,
            skr: 2
        },
        vfp: {
            jui: 21,
            zgi: 0,
            ndq: 0,
            zmf: 0,
            yxs: 0,
            ybu: 10,
            gfx: 8,
            skr: 2
        },
        iiy: {
            jui: 21,
            zgi: 21,
            ndq: 0,
            ybu: 8,
            gfx: 6,
            skr: 2,
            zmf: 30,
            yxs: -32
        },
        display: {
            mci: -12,
            zmf: 11,
            jui: 26,
            ucb: 15,
            skr: 2,
            mpx: 3,
            vpg: 3,
            mxj: 3,
            bhw: 3
        },
        thf: new njt(5, 10, 150, 48),
        reb: new njt(689, 10, 106, 48),
        vhn: {
            lyr: new njt(675, 68, 120, 68),
            suj: new njt(486, 68, 100, 68),
            app: new njt(371, 68, 100, 68),
            kmn: new njt(256, 68, 100, 68),
            rfc: new njt(20, 68, 120, 68),
            tdb: new njt()
        },
        ejj: {
            lyr: new njt(675, 68, 110, 68),
            rfc: new njt(536, 68, 100, 68),
            suj: new njt(426, 68, 100, 68),
            app: new njt(316, 68, 100, 68),
            kmn: new njt(206, 68, 100, 68),
            ogt: new njt(30, 68, 100, 68),
            tdb: new njt()
        },
        ijk: {
            lyr: new njt(675, 68, 120, 68),
            rfc: new njt(486, 68, 100, 68),
            suj: new njt(371, 68, 100, 68),
            app: new njt(256, 68, 100, 68),
            ogt: new njt(30, 68, 100, 68),
            tdb: new njt()
        },
        dcc: {
            lyr: new njt(675, 68, 120, 68),
            suj: new njt(486, 68, 100, 68),
            app: new njt(371, 68, 100, 68),
            kmn: new njt(256, 68, 100, 68),
            rfc: new njt(20, 68, 120, 68),
            tdb: new njt()
        },
        qvt: 15
    };
    this.seb = {
        ztm: new njt(0, 550, 800, 615),
        teu: new njt(0, 540, 800, 75),
        kmn: new njt(695, 544, 90, 68),
        fha: new njt(11, 544, 90, 68),
        oqy: new njt(295, 544, 90, 68),
        kqp: new njt(415, 544, 90, 68),
        uco: {
            jui: 21,
            zgi: 0,
            ndq: 0,
            zmf: 0,
            yxs: 0,
            gfx: 8,
            ybu: 10,
            skr: 2
        }
    };
    this.oue = {
        ztm: new njt(0, 550, 800, 615),
        teu: new njt(0, 485, 800, 130),
        npf: {
            ztm: new njt(187, 490, 470, 40),
            fontSize: 18,
            ccr: 14,
            ybu: 3,
            qwo: 2,
            gfx: 6,
            skr: 2
        },
        uco: {
            jui: 23,
            zgi: 0,
            ndq: 0,
            zmf: 0,
            yxs: 0,
            gfx: 10,
            ybu: 12,
            skr: 2
        },
        display: {
            mci: -12,
            zmf: 11,
            jui: 26,
            ucb: 15,
            skr: 2,
            mpx: 3,
            vpg: 3,
            mxj: 3,
            bhw: 3
        },
        zmh: new njt(689, 486, 106, 48),
        led: new njt(5, 486, 150, 48)
    };
    this.ioh = {
        ztm: new njt(710, 565, 90, 450),
        lnu: new njt(5, 5, 80, 15),
        kct: new njt(50, 25, 35, 410),
        fontSize: 15,
        gig: 20,
        skr: 2,
        ybu: 5,
        vwh: 4,
        qfh: 10,
        pfr: 5
    };
    this.qbt = {
        fontSize: 18,
        ogp: 128,
        cku: 176,
        ajv: 0,
        ljm: 20,
        jhv: true
    };
    this.soc = new njt(20, 820, 128, 205);
    this.rhg = new njt(176, 820, 128, 205);
    this.taa = new njt(333, 820, 128, 205);
    this.mkr = new njt(490, 820, 128, 205);
    this.qpr = new njt(646, 820, 128, 205);
    this.xjd = {
        ztm: new njt(363, 602, 408, 155),
        fontSize: 50,
        ndq: 0,
        ccr: 9,
        ubd: 0,
        xid: 2
    };
    this.sxj = {
        ztm: new njt(355, 560, 424, 236),
        fontSize: 20,
        ubd: 6
    };
    this.top = {
        ztm: new njt(0, 20, 800, 520)
    }
}
qtu.prototype = new vky;

function jdw() {
    this.bxw = false;
    this.szz = true;
    this.kpd = {
        ztm: new njt(0, 0, 960, 630),
        dcw: new njt(160, 506, 800, 124),
        whl: new njt(0, 0, 160, 630),
        npf: {
            ztm: new njt(385, 525, 390, 70),
            ccr: 14,
            fontSize: 24,
            ybu: 3,
            qwo: 2,
            gfx: 6,
            skr: 2
        },
        gge: {
            jui: 0,
            zgi: 0,
            ndq: 0,
            zmf: 0,
            yxs: 0,
            ybu: 24,
            gfx: 8,
            skr: 6
        },
        vfp: {
            jui: 0,
            zgi: 0,
            ndq: 0,
            zmf: 0,
            yxs: 0,
            ybu: 16,
            gfx: 8,
            skr: 4
        },
        iiy: {
            jui: 0,
            zgi: 24,
            ndq: 0,
            ybu: 24,
            gfx: 8,
            skr: 6,
            zmf: 0,
            yxs: -130
        },
        display: {
            mci: -20,
            zmf: 16,
            jui: 32,
            ucb: 18,
            skr: 3,
            mpx: 3,
            vpg: 3,
            mxj: 3,
            bhw: 3
        },
        thf: new njt(165, 525, 180, 70),
        reb: new njt(815, 525, 140, 70),
        vhn: {
            lyr: new njt(10, 215, 140, 200),
            suj: new njt(),
            app: new njt(),
            kmn: new njt(10, 455, 140, 100),
            rfc: new njt(),
            tdb: new njt(10, 75, 140, 100)
        },
        ejj: {
            lyr: new njt(10, 215, 140, 200),
            rfc: new njt(),
            suj: new njt(),
            app: new njt(),
            kmn: new njt(10, 455, 140, 100),
            ogt: new njt(),
            tdb: new njt(10, 75, 140, 100)
        },
        ijk: {
            lyr: new njt(10, 215, 140, 200),
            rfc: new njt(),
            suj: new njt(),
            app: new njt(),
            ogt: new njt(),
            tdb: new njt(10, 75, 140, 100)
        },
        dcc: {
            lyr: new njt(10, 215, 140, 200),
            suj: new njt(),
            app: new njt(),
            kmn: new njt(10, 455, 140, 100),
            rfc: new njt(),
            tdb: new njt(10, 75, 140, 100)
        },
        qvt: 15
    };
    this.seb = {
        ztm: new njt(0, 0, 960, 630),
        teu: new njt(0, 0, 160, 630),
        kmn: new njt(10, 455, 140, 100),
        fha: new njt(),
        oqy: new njt(10, 75, 140, 100),
        kqp: new njt(10, 265, 140, 100),
        uco: {
            jui: 0,
            zgi: 0,
            ndq: 0,
            zmf: 0,
            yxs: 0,
            gfx: 16,
            ybu: 16,
            skr: 4
        }
    };
    this.oue = {
        ztm: new njt(0, 0, 960, 630),
        teu: new njt(0, 0, 160, 630),
        npf: {
            ztm: new njt(390, 525, 390, 70),
            fontSize: 20,
            ccr: 14,
            ybu: 3,
            qwo: 2,
            gfx: 6,
            skr: 2
        },
        uco: {
            jui: 24,
            zgi: 0,
            ndq: 0,
            zmf: 0,
            yxs: 0,
            gfx: 8,
            ybu: 16,
            skr: 4
        },
        display: {
            mci: -20,
            zmf: 16,
            jui: 32,
            ucb: 18,
            skr: 3,
            mpx: 3,
            vpg: 3,
            mxj: 3,
            bhw: 3
        },
        led: new njt(165, 525, 180, 70),
        zmh: new njt(815, 525, 140, 70),
    };
    this.qbt = {
        fontSize: 18,
        ogp: 128,
        cku: 176,
        ajv: 0,
        ljm: 20,
        jhv: true
    };
    this.soc = new njt(180, 300, 128, 205);
    this.rhg = new njt(336, 300, 128, 205);
    this.taa = new njt(493, 300, 128, 205);
    this.mkr = new njt(650, 300, 128, 205);
    this.qpr = new njt(806, 300, 128, 205);
    this.xjd = {
        ztm: new njt(523, 82, 408, 155),
        fontSize: 50,
        ndq: 0,
        ccr: 9,
        ubd: 0,
        xid: 2
    };
    this.sxj = {
        ztm: new njt(515, 40, 424, 236),
        fontSize: 20,
        ubd: 6
    };
    this.npu.fyf = new njt();
    this.npu.cnr = new njt();
    this.npu.rrb = new njt();
    this.npu.ghj = new njt();
    this.npu.kmj = new njt();
    this.npu.mne = new njt();
    this.npu.yzj = new njt(30, 180, 410, 60);
    this.npu.iaz = new njt(512, 180, 210, 60)
}
jdw.prototype = new rxd;

function cjp() {
    this.bxw = false;
    this.szz = true;
    this.kpd = {
        ztm: new njt(0, 0, 960, 630),
        dcw: new njt(0, 506, 800, 124),
        whl: new njt(800, 0, 160, 630),
        npf: {
            ztm: new njt(225, 525, 390, 70),
            ccr: 14,
            fontSize: 24,
            ybu: 3,
            qwo: 2,
            gfx: 6,
            skr: 2
        },
        gge: {
            jui: 0,
            zgi: 0,
            ndq: 0,
            zmf: 0,
            yxs: 0,
            ybu: 24,
            gfx: 8,
            skr: 6
        },
        vfp: {
            jui: 0,
            zgi: 0,
            ndq: 0,
            zmf: 0,
            yxs: 0,
            ybu: 16,
            gfx: 8,
            skr: 4
        },
        iiy: {
            jui: 0,
            zgi: 24,
            ndq: 0,
            ybu: 24,
            gfx: 8,
            skr: 6,
            zmf: 0,
            yxs: -130
        },
        display: {
            mci: -20,
            zmf: 16,
            jui: 32,
            ucb: 18,
            skr: 3,
            mpx: 3,
            vpg: 3,
            mxj: 3,
            bhw: 3
        },
        thf: new njt(5, 525, 180, 70),
        reb: new njt(655, 525, 140, 70),
        vhn: {
            lyr: new njt(810, 215, 140, 200),
            suj: new njt(),
            app: new njt(),
            kmn: new njt(810, 455, 140, 100),
            rfc: new njt(),
            tdb: new njt(810, 75, 140, 100)
        },
        ejj: {
            lyr: new njt(810, 215, 140, 200),
            rfc: new njt(),
            suj: new njt(),
            app: new njt(),
            kmn: new njt(810, 455, 140, 100),
            ogt: new njt(),
            tdb: new njt(810, 75, 140, 100)
        },
        ijk: {
            lyr: new njt(810, 215, 140, 200),
            rfc: new njt(),
            suj: new njt(),
            app: new njt(),
            ogt: new njt(),
            tdb: new njt(810, 75, 140, 100)
        },
        dcc: {
            lyr: new njt(810, 215, 140, 200),
            suj: new njt(),
            app: new njt(),
            kmn: new njt(810, 455, 140, 100),
            rfc: new njt(),
            tdb: new njt(810, 75, 140, 100)
        },
        qvt: 15
    };
    this.seb = {
        ztm: new njt(0, 0, 960, 630),
        teu: new njt(800, 0, 160, 630),
        kmn: new njt(810, 455, 140, 100),
        fha: new njt(),
        oqy: new njt(810, 75, 140, 100),
        kqp: new njt(810, 265, 140, 100),
        uco: {
            jui: 0,
            zgi: 0,
            ndq: 0,
            zmf: 0,
            yxs: 0,
            gfx: 16,
            ybu: 16,
            skr: 4
        }
    };
    this.oue = {
        ztm: new njt(0, 0, 960, 630),
        teu: new njt(800, 0, 160, 630),
        npf: {
            ztm: new njt(230, 525, 390, 70),
            fontSize: 20,
            ccr: 14,
            ybu: 3,
            qwo: 2,
            gfx: 6,
            skr: 2
        },
        uco: {
            jui: 24,
            zgi: 0,
            ndq: 0,
            zmf: 0,
            yxs: 0,
            gfx: 8,
            ybu: 16,
            skr: 4
        },
        display: {
            mci: -20,
            zmf: 16,
            jui: 32,
            ucb: 18,
            skr: 3,
            mpx: 3,
            vpg: 3,
            mxj: 3,
            bhw: 3
        },
        led: new njt(5, 525, 180, 70),
        zmh: new njt(655, 525, 140, 70),
    };
    this.qbt = {
        fontSize: 18,
        ogp: 128,
        cku: 176,
        ajv: 0,
        ljm: 20,
        jhv: true
    };
    this.soc = new njt(20, 300, 128, 205);
    this.rhg = new njt(176, 300, 128, 205);
    this.taa = new njt(333, 300, 128, 205);
    this.mkr = new njt(490, 300, 128, 205);
    this.qpr = new njt(646, 300, 128, 205);
    this.xjd = {
        ztm: new njt(363, 82, 408, 155),
        fontSize: 50,
        ndq: 0,
        ccr: 9,
        ubd: 0,
        xid: 2
    };
    this.sxj = {
        ztm: new njt(355, 40, 424, 236),
        fontSize: 20,
        ubd: 6
    };
    this.npu.fyf = new njt();
    this.npu.cnr = new njt();
    this.npu.rrb = new njt();
    this.npu.ghj = new njt();
    this.npu.kmj = new njt();
    this.npu.mne = new njt();
    this.npu.yzj = new njt(30, 180, 410, 60);
    this.npu.iaz = new njt(512, 180, 210, 60)
}
cjp.prototype = new xou;

function oil() {
    this.soc = new njt(20, 250, 147, 227);
    this.rhg = new njt(174, 250, 147, 227);
    this.taa = new njt(328, 250, 147, 227);
    this.mkr = new njt(479, 250, 147, 227);
    this.qpr = new njt(632, 250, 147, 227);
    this.qbt.ogp = 145;
    this.qbt.cku = 202;
    this.qbt.ajv = 20;
    this.xjd.ztm = new njt(110, 290, 584, 60);
    this.xjd.fontSize = 40;
    this.xjd.ubd = 10;
    this.xjd.ccr = 3;
    this.sxj.ztm = new njt(22, 42, 756, 193);
    this.sxj.ubd = 5;
    this.sxj.ndq = 2;
    this.sxj.zmh = [new njt(209, 2, 103, 189), new njt(314, 2, 103, 189), new njt(419, 2, 103, 189), new njt(524, 2, 103, 189), new njt(629, 2, 125, 189)];
    this.oue.qbt = {
        fontSize: 18,
        ogp: 145,
        cku: 202,
        ajv: 20,
        ljm: 20,
        jhv: true
    };
    this.oue.soc = new njt(20, 175, 147, 227);
    this.oue.rhg = new njt(174, 175, 147, 227);
    this.oue.taa = new njt(327, 175, 147, 227);
    this.oue.mkr = new njt(479, 175, 147, 227);
    this.oue.qpr = new njt(632, 175, 147, 227);
    this.oue.kvy = new njt(415, 544, 110, 53);
    this.oue.app = new njt(275, 544, 110, 53);
    this.oue.oad = new njt(50, 20, 700, 120);
    this.oue.fontSize = 20;
    this.seb.win = {
        ztm: new njt(0, 0, 800, 600),
        fontSize: 16,
        ucb: 40,
        zby: 12,
        lineWidth: 1,
        lnu: new njt(),
        oad: new njt(0, 530, 800, 20),
        szt: [new njt(32, 40, 180, 20), new njt(452, 40, 180, 20), new njt(32, 140, 180, 20), new njt(452, 140, 180, 20), new njt(32, 240, 180, 20), new njt(452, 240, 180, 20), new njt(32, 340, 180, 20), new njt(452, 340, 180, 20), new njt(32, 440, 180, 20), new njt(452, 440, 180, 20)],
        xjz: [new njt(170, 60, 190, 50), new njt(590, 60, 190, 50), new njt(170, 160, 190, 50), new njt(590, 160, 190, 50), new njt(170, 260, 190, 50), new njt(590, 260, 190, 50), new njt(170, 360, 190, 50), new njt(590, 360, 190, 50), new njt(170, 460, 190, 50), new njt(590, 460, 190, 50)]
    }
}
oil.prototype = new cye;

function vzu() {
    this.svp = true
}
vzu.prototype = new oil;

function pqx() {
    this.soc = new njt(20, 780, 147, 227);
    this.rhg = new njt(174, 780, 147, 227);
    this.taa = new njt(328, 780, 147, 227);
    this.mkr = new njt(479, 780, 147, 227);
    this.qpr = new njt(632, 780, 147, 227);
    this.qbt.ogp = 145;
    this.qbt.cku = 202;
    this.qbt.ajv = 20;
    this.xjd.ztm = new njt(110, 820, 584, 60);
    this.xjd.fontSize = 40;
    this.xjd.ubd = 10;
    this.xjd.ccr = 3;
    this.sxj.ztm = new njt(22, 572, 756, 193);
    this.sxj.ubd = 5;
    this.sxj.ndq = 2;
    this.sxj.zmh = [new njt(209, 2, 103, 189), new njt(314, 2, 103, 189), new njt(419, 2, 103, 189), new njt(524, 2, 103, 189), new njt(629, 2, 125, 189)];
    this.oue.qbt = {
        fontSize: 18,
        ogp: 145,
        cku: 202,
        ajv: 20,
        ljm: 20,
        jhv: true
    };
    this.oue.soc = new njt(20, 175, 147, 227);
    this.oue.rhg = new njt(174, 175, 147, 227);
    this.oue.taa = new njt(327, 175, 147, 227);
    this.oue.mkr = new njt(479, 175, 147, 227);
    this.oue.qpr = new njt(632, 175, 147, 227);
    this.oue.kvy = new njt(415, 544, 120, 68);
    this.oue.app = new njt(265, 544, 120, 68);
    this.oue.oad = new njt(50, 20, 700, 120);
    this.oue.fontSize = 20;
    this.seb.win = {
        ztm: new njt(0, 0, 800, 615),
        fontSize: 16,
        ucb: 40,
        zby: 12,
        lineWidth: 1,
        lnu: new njt(),
        oad: new njt(0, 530, 800, 20),
        szt: [new njt(32, 40, 180, 20), new njt(452, 40, 180, 20), new njt(32, 140, 180, 20), new njt(452, 140, 180, 20), new njt(32, 240, 180, 20), new njt(452, 240, 180, 20), new njt(32, 340, 180, 20), new njt(452, 340, 180, 20), new njt(32, 440, 180, 20), new njt(452, 440, 180, 20)],
        xjz: [new njt(170, 60, 190, 50), new njt(590, 60, 190, 50), new njt(170, 160, 190, 50), new njt(590, 160, 190, 50), new njt(170, 260, 190, 50), new njt(590, 260, 190, 50), new njt(170, 360, 190, 50), new njt(590, 360, 190, 50), new njt(170, 460, 190, 50), new njt(590, 460, 190, 50)]
    };
    this.top.win = {
        ztm: new njt(0, 0, 800, 520),
        fontSize: 16,
        ucb: 40,
        zby: 12,
        lineWidth: 1,
        lnu: new njt(),
        oad: new njt(0, 500, 800, 20),
        szt: [new njt(32, 20, 180, 20), new njt(452, 20, 180, 20), new njt(32, 120, 180, 20), new njt(452, 120, 180, 20), new njt(32, 220, 180, 20), new njt(452, 220, 180, 20), new njt(32, 320, 180, 20), new njt(452, 320, 180, 20), new njt(32, 420, 180, 20), new njt(452, 420, 180, 20)],
        xjz: [new njt(170, 40, 190, 50), new njt(590, 40, 190, 50), new njt(170, 140, 190, 50), new njt(590, 140, 190, 50), new njt(170, 240, 190, 50), new njt(590, 240, 190, 50), new njt(170, 340, 190, 50), new njt(590, 340, 190, 50), new njt(170, 440, 190, 50), new njt(590, 440, 190, 50)]
    }
}
pqx.prototype = new qtu;

function ytt() {
    this.soc = new njt(180, 260, 147, 227);
    this.rhg = new njt(334, 260, 147, 227);
    this.taa = new njt(488, 260, 147, 227);
    this.mkr = new njt(639, 260, 147, 227);
    this.qpr = new njt(792, 260, 147, 227);
    this.qbt.ogp = 145;
    this.qbt.cku = 202;
    this.qbt.ajv = 20;
    this.xjd.ztm = new njt(270, 300, 584, 60);
    this.xjd.fontSize = 40;
    this.xjd.ubd = 10;
    this.xjd.ccr = 3;
    this.sxj.ztm = new njt(182, 52, 756, 193);
    this.sxj.ubd = 5;
    this.sxj.ndq = 2;
    this.sxj.zmh = [new njt(209, 2, 103, 189), new njt(314, 2, 103, 189), new njt(419, 2, 103, 189), new njt(524, 2, 103, 189), new njt(629, 2, 125, 189)];
    this.oue.qbt = {
        fontSize: 18,
        ogp: 145,
        cku: 202,
        ajv: 20,
        ljm: 20,
        jhv: true
    };
    this.oue.soc = new njt(180, 205, 147, 227);
    this.oue.rhg = new njt(334, 205, 147, 227);
    this.oue.taa = new njt(487, 205, 147, 227);
    this.oue.mkr = new njt(639, 205, 147, 227);
    this.oue.qpr = new njt(792, 205, 147, 227);
    this.oue.kvy = new njt(10, 365, 140, 100);
    this.oue.app = new njt(10, 165, 140, 100);
    this.oue.oad = new njt(210, 50, 700, 120);
    this.oue.fontSize = 20;
    this.seb.win = {
        ztm: new njt(160, 30, 800, 600),
        fontSize: 16,
        ucb: 40,
        zby: 20,
        lineWidth: 1,
        lnu: new njt(),
        oad: new njt(0, 530, 800, 40),
        szt: [new njt(32, 40, 180, 20), new njt(452, 40, 180, 20), new njt(32, 140, 180, 20), new njt(452, 140, 180, 20), new njt(32, 240, 180, 20), new njt(452, 240, 180, 20), new njt(32, 340, 180, 20), new njt(452, 340, 180, 20), new njt(32, 440, 180, 20), new njt(452, 440, 180, 20)],
        xjz: [new njt(170, 60, 190, 50), new njt(590, 60, 190, 50), new njt(170, 160, 190, 50), new njt(590, 160, 190, 50), new njt(170, 260, 190, 50), new njt(590, 260, 190, 50), new njt(170, 360, 190, 50), new njt(590, 360, 190, 50), new njt(170, 460, 190, 50), new njt(590, 460, 190, 50)]
    }
}
ytt.prototype = new jdw;

function vdk() {
    this.soc = new njt(20, 260, 147, 227);
    this.rhg = new njt(174, 260, 147, 227);
    this.taa = new njt(328, 260, 147, 227);
    this.mkr = new njt(479, 260, 147, 227);
    this.qpr = new njt(632, 260, 147, 227);
    this.qbt.ogp = 145;
    this.qbt.cku = 202;
    this.qbt.ajv = 20;
    this.xjd.ztm = new njt(110, 300, 584, 60);
    this.xjd.fontSize = 40;
    this.xjd.ubd = 10;
    this.xjd.ccr = 3;
    this.sxj.ztm = new njt(22, 52, 756, 193);
    this.sxj.ubd = 5;
    this.sxj.ndq = 2;
    this.sxj.zmh = [new njt(209, 2, 103, 189), new njt(314, 2, 103, 189), new njt(419, 2, 103, 189), new njt(524, 2, 103, 189), new njt(629, 2, 125, 189)];
    this.oue.qbt = {
        fontSize: 18,
        ogp: 145,
        cku: 202,
        ajv: 20,
        ljm: 20,
        jhv: true
    };
    this.oue.soc = new njt(20, 205, 147, 227);
    this.oue.rhg = new njt(174, 205, 147, 227);
    this.oue.taa = new njt(327, 205, 147, 227);
    this.oue.mkr = new njt(479, 205, 147, 227);
    this.oue.qpr = new njt(632, 205, 147, 227);
    this.oue.kvy = new njt(810, 365, 140, 100);
    this.oue.app = new njt(810, 165, 140, 100);
    this.oue.oad = new njt(50, 50, 700, 120);
    this.oue.fontSize = 20;
    this.seb.win = {
        ztm: new njt(0, 30, 800, 600),
        fontSize: 16,
        ucb: 40,
        zby: 20,
        lineWidth: 1,
        lnu: new njt(),
        oad: new njt(0, 530, 800, 40),
        szt: [new njt(32, 40, 180, 20), new njt(452, 40, 180, 20), new njt(32, 140, 180, 20), new njt(452, 140, 180, 20), new njt(32, 240, 180, 20), new njt(452, 240, 180, 20), new njt(32, 340, 180, 20), new njt(452, 340, 180, 20), new njt(32, 440, 180, 20), new njt(452, 440, 180, 20)],
        xjz: [new njt(170, 60, 190, 50), new njt(590, 60, 190, 50), new njt(170, 160, 190, 50), new njt(590, 160, 190, 50), new njt(170, 260, 190, 50), new njt(590, 260, 190, 50), new njt(170, 360, 190, 50), new njt(590, 360, 190, 50), new njt(170, 460, 190, 50), new njt(590, 460, 190, 50)]
    }
}
vdk.prototype = new cjp;
var vmg = {
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
    ikd: {
        poa: 0,
        npe: 1,
        eiv: 2,
        vcm: 3,
        dqv: 4,
        keu: 5,
        lhn: 10,
        jgq: 11,
        gbp: 12,
        eoa: 13,
        fml: 14,
        hmq: 15,
        brw: 16
    },
    os: {
        kui: 0,
        fir: 1,
        hlk: 2,
        fhq: 3,
        rzj: 4
    },
    ple: {
        tvi: 1,
        joa: 3,
        nvy: 4,
        fgs: 5,
        slr: 7,
        nhq: 8,
        tab: 11,
        cpz: 13,
        xhs: 14,
        rlu: 6,
        hso: 9,
        czq: 10
    },
    tms: {
        xbp: 1,
        ahu: 2,
        lkr: 4,
        zpr: 8,
        ptp: 16,
        sqd: 32
    },
    ead: {
        omt: 1,
        kqr: 2,
        kff: 3,
        eqp: 4,
        kwu: 5,
        ipu: 6,
        hqs: 7,
        msd: 94,
        oqp: 95,
        ppb: 96,
        pvw: 97,
        zfj: 98,
        typ: 99,
        roulette: {
            xkx: 2,
            pfi: 9,
            yvc: 10
        }
    },
    ui: {
        ssy: "minimal",
        knm: "modern",
        nvy: "classic"
    },
    rpp: {
        tdj: "auto",
        ypd: "left",
        wmz: "right"
    },
    gko: {
        ygc: 0,
        acy: 4
    },
    ror: {
        fig: {
            zwe: "ji",
            lpe: "jv",
            xhd: "jh"
        }
    },
    hub: {
        bno: {
            dzg: 1,
            aou: 2
        },
        ryp: {
            adu: 1,
            mgk: 2,
            nku: 3
        }
    },
    vhu: {
        ikm: 0,
        syt: 1
    }
};
vmg.evv = (function() {
    var g = ["moz", "webkit", "ms", "o"],
        f = 0,
        d = 0;
    var b = document.createElement("canvas");
    if (!(b.getContext && b.getContext("2d"))) {
        f += vmg.tms.xbp
    }
    if (!(window.WebSocket || window.MozWebSocket)) {
        f += vmg.tms.ahu
    }
    try {
        if (!(window.localStorage && window.sessionStorage)) {
            f += vmg.tms.lkr
        } else {
            sessionStorage.dummy = true;
            sessionStorage.removeItem("dummy")
        }
    } catch (c) {
        f += vmg.tms.lkr
    }
    if (!(b.style.MozTransform != undefined || b.style.WebkitTransform != undefined || b.style.OTransform != undefined || b.style.msTransform != undefined)) {
        f += vmg.tms.zpr
    }
    try {
        if (window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
            window.AudioContext = webkitAudioContext;
            if (!AudioContext.prototype.hasOwnProperty("createGain")) {
                AudioContext.prototype.createGain = AudioContext.prototype.createGainNode
            }
            AudioContext.prototype.qia = AudioContext.prototype.createBufferSource;
            AudioContext.prototype.createBufferSource = function() {
                var e = this.qia();
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
            window.jyh = window.requestAnimationFrame;
            window.cwv = window.cancelAnimationFrame || window.cancelRequestAnimationFrame
        }
        for (var a = 0; a < g.length && !window.jyh; ++a) {
            window.jyh = window[g[a] + "RequestAnimationFrame"];
            window.cwv = window[g[a] + "CancelAnimationFrame"] || window[g[a] + "CancelRequestAnimationFrame"]
        }
        if (!window.jyh || !window.cwv) {
            window.jyh = function(l, i) {
                var e = new Date().getTime();
                var j = Math.max(0, 16 - (e - d));
                var k = window.setTimeout(function() {
                    l(e + j)
                }, j);
                d = e + j;
                return k
            }
        }
        if (!window.cwv) {
            window.cwv = function(e) {
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
        console.error(c.ead)
    }
    return f
})();

function bmr() {
    var a = {};
    this.mnk = 1;
    this.omf = 1;
    this.trh = 0.6;
    this.jst = 0.4;
    this.qtx = function() {};
    this.hhd = function(b, c) {
        a[b] = c
    };
    this.rct = function(b) {
        if (a[b]) {
            return a[b]
        } else {
            return this.mnk
        }
    }
}

function ssk() {
    this.audio = {
        tji: 65,
        ntv: -1,
        value: "A",
        ipf: null
    };
    this.zzc = {
        tji: 70,
        ntv: 122,
        value: "F",
        ipf: "F11"
    };
    this.pir = {
        tji: 72,
        ntv: -1,
        value: "H",
        ipf: null
    };
    this.rye = {
        tji: 83,
        ntv: -1,
        value: "S",
        ipf: null
    };
    this.doo = {
        tji: 68,
        ntv: -1,
        value: "D",
        ipf: null
    };
    this.ok = {
        tji: 13,
        ntv: -1,
        value: "OK",
        ipf: null
    };
    this.ghl = [this.audio, this.zzc, this.pir, this.rye, this.doo, this.ok]
}

function htz() {
    var o = this;
    this.nuw = false;
    this.jbs = null;
    this.pei = false;
    this.shl = false;
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
    this.qtx = function() {
        this.slv();
        this.klc();
        this.pei = false;
        this.shl = false
    };
    this.slv = function() {
        try {
            if (webAudioEngine == null) {
                webAudioEngine = new AudioContext()
            }
            this.jbs = webAudioEngine.createGain();
            this.jbs.connect(webAudioEngine.destination);
            this.nuw = true
        } catch (p) {
            this.nuw = false
        }
    };
    this.klc = function() {
        m = vmg.arb.yqx()
    };
    this.wcu = function(p) {
        l = p
    };
    this.ufl = function(p) {
        c = p
    };
    this.hmh = function(t, s, p, q) {
        var r = new bpj(t);
        r.qtx(this.nuw, s, p, l.rct(t));
        i[t] = r;
        k.push(r);
        d.push({
            xge: r,
            sbr: q,
            yfc: o.cya,
            jaw: m
        })
    };
    this.ynj = function(r, q) {
        var p = new Image();
        f[r] = p;
        d.push({
            xge: p,
            sbr: q,
            yfc: null
        })
    };
    this.zty = function(q, p) {
        d.unshift({
            xge: null,
            sbr: q,
            yfc: o.mqb,
            rtp: p
        })
    };
    this.esf = function() {
        n = true;
        g = d.length;
        b = 0;
        while (d.length > 0) {
            o.kki(d.shift())
        }
    };
    this.start = function() {
        if (!o.pei) {
            return
        }
        o.pei = false;
        n = false;
        g = d.length;
        b = 0;
        j = 1;
        for (var q = 0; q < j && d.length > 0; q++) {
            a.push(d.shift())
        }
        for (var p = 0; p < a.length; p++) {
            o.kki(a.shift())
        }
    };
    this.lys = function() {
        b++;
        if (o.qub()) {
            o.pei = true;
            vmg.yov.dab()
        }
    };
    this.wdg = function() {
        o.auj()
    };
    this.ntk = function() {
        o.shl = true;
        o.auj()
    };
    this.auj = function() {
        b++;
        o.cxs();
        if (o.qub()) {
            o.dym()
        } else {
            o.ivr()
        }
    };
    this.cxs = function() {
        var p = vmg.yov.nhr.ejh("loading");
        e = Math.round(100 * b / g);
        if (e < 100) {
            if (p) {
                p.vnf(e)
            }
        }
    };
    this.dym = function() {
        var q = vmg.yov.nhr.ejh("loading");
        if (o.shl) {
            vmg.yov.ytw(vmg.yov.language.jvg);
            var p = confirm(vmg.yov.language.wvl);
            if (p == true) {
                vmg.yov.wsd = false;
                o.yce();
                vmg.yov.ira()
            } else {
                if (vmg.yov.pix) {
                    vmg.yov.pix.txn({
                        sender: vmg.yov.kfp,
                        lang: sessionStorage.sessionValue1.toUpperCase(),
                        data: {
                            success: false
                        }
                    })
                }
                setTimeout(vmg.yov.iiu, 1000)
            }
        } else {
            if (!vmg.yov.dyd) {
                e = 100;
                if (q) {
                    q.vnf(e)
                }
                if (c === true) {
                    q.hza()
                } else {
                    setTimeout(vmg.yov.ira, 200)
                }
            }
        }
    };
    this.bol = function() {
        return e
    };
    this.ivr = function() {
        if (d.length > 0) {
            a.push(d.shift());
            if (j === 1 && (a[0].xge instanceof Image || a[0].xge instanceof bpj)) {
                j = 30;
                for (var p = 0; p < j && d.length > 0; p++) {
                    a.push(d.shift())
                }
            }
        } else {}
        if (a.length > 0) {
            o.kki(a.shift())
        }
    };
    this.qub = function() {
        return (g > 0 && b == g)
    };
    this.kki = function(p) {
        if (p.xge instanceof Image) {
            if (n === true) {
                this.ccw(p.xge, p.sbr)
            } else {
                this.ljg(p.xge, p.sbr)
            }
        } else {
            if (p.xge instanceof bpj) {
                this.qyh(p.xge, p.sbr, p.yfc, p.jaw)
            } else {
                this.fqe(p.sbr, p.rtp, p.yfc)
            }
        }
    };
    this.ccw = function(q, p) {
        q.onload = function() {
            vmg.yov.vcv.lys()
        };
        q.onerror = function() {
            console.error("can not load image " + p)
        };
        q.src = p + "?v=" + vmg.yov.qve
    };
    this.ljg = function(q, p) {
        q.onload = function() {
            vmg.yov.vcv.wdg()
        };
        q.onerror = function() {
            console.error("can not load image " + p);
            vmg.yov.ytw(vmg.yov.language.mqc);
            setTimeout(vmg.yov.iiu, 3000)
        };
        q.src = p + "?v=" + vmg.yov.qve
    };
    this.qyh = function(q, r, s, p) {
        q.load(r, s, p)
    };
    this.fqe = function(s, p, t) {
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
            vmg.yov.ytw(vmg.yov.language.mqc);
            setTimeout(vmg.yov.iiu, 3000)
        };
        try {
            q.send()
        } catch (r) {
            console.error("can not load from " + s + p);
            vmg.yov.ytw(vmg.yov.language.mqc);
            setTimeout(vmg.yov.iiu, 3000)
        }
    };
    this.cya = function(q, p) {
        i[q].rlf = p
    };
    this.mqb = function(r, q) {
        var p = new Image();
        p.onload = function() {
            o.cmm(p, q.data)
        };
        p.onerror = function() {
            console.error("can not load image " + r + q.src);
            vmg.yov.ytw(vmg.yov.language.mqc);
            setTimeout(vmg.yov.iiu, 3000)
        };
        p.src = r + q.src + "?v=" + vmg.yov.qve
    };
    this.cmm = function(r, u) {
        var s = null,
            q = null;
        for (var t = 0, p = u.length; t < p; t++) {
            s = document.createElement("canvas");
            s.width = u[t].rect.w;
            s.height = u[t].rect.h;
            q = s.getContext("2d");
            q.drawImage(r, u[t].rect.x, u[t].rect.y, u[t].rect.w, u[t].rect.h, 0, 0, u[t].rect.w, u[t].rect.h);
            o.she(u[t].id, s)
        }
        vmg.yov.vcv.wdg()
    };
    this.jjx = function(p) {
        if (i && i[p]) {
            return i[p]
        } else {}
        return null
    };
    this.she = function(q, p) {
        if (p && !f[q]) {
            f[q] = p
        } else {}
        return null
    };
    this.kos = function(p) {
        if (f[p]) {
            return f[p]
        } else {}
        return null
    };
    this.tmd = function(p) {
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
    this.vni = function(p) {
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
    this.ixm = function(q, p) {
        if (i && i[q]) {
            i[q].play(p)
        } else {}
    };
    this.acn = function(p) {
        if (i && i[p]) {
            i[p].stop()
        } else {}
    };
    this.rts = function(q, p) {
        if (i && i[q]) {
            i[q].aqf(p)
        } else {}
    };
    this.osa = function(s, q, r, p) {
        p = (p != null && p === true);
        if (i && i[s]) {
            i[s].yxv(l.rct(s) * q, r, p)
        }
    };
    this.wxb = function(p) {
        if (i && i[p]) {
            return i[p].cxp()
        }
        return 0
    };
    this.efz = function(p) {
        if (this.nuw) {
            this.jbs.gain.setValueAtTime(p, webAudioEngine.currentTime)
        }
    };
    this.jig = function(q) {
        if (this.nuw) {
            this.jbs.gain.setValueAtTime((q) ? 0 : 1, webAudioEngine.currentTime)
        } else {
            if (k) {
                for (var p = 0; p < k.length; p++) {
                    k[p].aqf(q)
                }
            }
        }
    };
    this.yce = function() {
        if (k) {
            for (var p = 0; p < k.length; p++) {
                k[p].clear()
            }
        }
        k = null;
        i = null
    }
}

function fsv() {
    this.gdr = {};
    this.fqo = {};
    this.qkf = [];
    this.qtx = function() {
        this.gdr = {};
        this.fqo = {};
        this.qkf = []
    };
    this.haq = function(b) {
        this.gdr[b] = b
    };
    this.mwl = function(f, e, d) {
        this.fqo[f] = e;
        this.fqo[f].non = [];
        if (d && this.gdr) {
            for (var c = 0, b = d.length; c < b; c++) {
                if (this.gdr[d[c]]) {
                    this.fqo[f].non.push(d[c])
                } else {}
            }
        }
        this.qkf.push(this.fqo[f])
    };
    this.pci = function() {
        var c = [];
        for (var d = 0, b = this.qkf.length; d < b; d++) {
            if (this.qkf[d] != null) {
                c.push(this.qkf[d])
            }
        }
        return c
    };
    this.ejh = function(b) {
        if (this.fqo && this.fqo[b]) {
            return this.fqo[b]
        }
        return null
    };
    this.wnf = function(g) {
        if (this.gdr && this.gdr[g]) {
            var d = [];
            for (var f = 0, b = this.qkf.length; f < b; f++) {
                for (var e = 0, c = this.qkf[f].non.length; e < c; e++) {
                    if (this.qkf[f].non[e] == g) {
                        d.push(this.qkf[f])
                    }
                }
            }
            return d
        }
        return []
    };
    this.jee = function() {
        return this.gdr
    };
    this.mxs = function(e) {
        var d = -1;
        if (this.fqo && this.fqo[e]) {
            for (var c = 0, b = this.qkf.length; c < b; c++) {
                if (this.qkf[c] == this.fqo[e]) {
                    d = c;
                    this.fqo[e] = null
                }
            }
        }
        if (d >= 0) {
            this.qkf.splice(d, 1)
        }
    };
    this.aab = function(f) {
        if (this.gdr && this.gdr[f]) {
            this.gdr[f] = null;
            for (var e = 0, b = this.qkf.length; e < b; e++) {
                for (var d = 0, c = this.qkf[e].non.length; d < c; d++) {
                    if (this.qkf[e].non[d] == f) {
                        this.qkf[e].non.splice(d, 1)
                    }
                }
            }
        }
    };
    this.wrv = function(e, d, c, b) {
        return a(this.ejh(e), d, c, b)
    };
    this.bdv = function(f, d, c) {
        for (var e = 0, b = this.qkf.length; e < b; e++) {
            a(this.qkf[e], f, d, c)
        }
    };
    this.qgo = function(k, l, f, e) {
        if (this.gdr && this.gdr[k]) {
            for (var g = 0, b = this.qkf.length; g < b; g++) {
                for (var d = 0, c = this.qkf[g].non.length; d < c; d++) {
                    if (this.qkf[g].non[d] == k) {
                        a(this.qkf[g], l, f, e)
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

function bpj(b) {
    var a = this;
    this.lgu = null;
    this.loop = false;
    this.muted = false;
    this.volume = 1;
    this.id = b;
    this.yrm = false;
    this.rlf = null;
    this.cmo = null;
    this.fwk = 0;
    this.rxp = 0;
    this.gdw = 0;
    this.efy = 0;
    this.rvh = 30000;
    this.uen = "";
    this.hjc = "";
    this.sam = "";
    this.nyx = null;
    this.wzq = 1;
    this.nqh = 0;
    this.oic = -1;
    this.vbn = 0;
    this.ofj = 0;
    this.qor = false;
    this.qtx = function(c, f, d, e) {
        this.yrm = c;
        if (e) {
            this.wzq = e;
            this.volume = e
        }
        if (f) {
            this.lgu = f
        }
        if (d) {
            this.loop = d
        }
    };
    this.play = function(c) {
        if (typeof c == "undefined") {
            c = 0
        }
        if (this.yrm) {
            clearTimeout(this.oic);
            if (this.rlf) {
                this.volume = (this.muted === true) ? 0 : vmg.rkn.value40 * this.wzq;
                this.qor = false;
                this.cmo = webAudioEngine.createBufferSource();
                this.cmo.buffer = this.rlf;
                this.cmo.loop = this.loop;
                this.fwk = webAudioEngine.createGain();
                this.fwk.gain.setValueAtTime(this.volume, webAudioEngine.currentTime);
                this.cmo.connect(this.fwk);
                this.fwk.connect(vmg.yov.vcv.jbs);
                this.cmo.start(0, c);
                this.nqh = webAudioEngine.currentTime;
                if (this.lgu) {
                    this.rxp = setTimeout(a.lgu, a.rlf.duration * 1000)
                }
            }
        } else {
            if (this.cmo) {
                if (this.loop) {
                    if (vmg.arb.uic != vmg.ikd.dqv && vmg.arb.uic != vmg.ikd.fml) {
                        this.gdw = setInterval(a.vzq, a.cmo.duration * 1000)
                    }
                }
                this.cmo.currentTime = 0;
                this.cmo.play()
            }
        }
    };
    this.vzq = function() {
        if (!a.cmo.paused || (vmg.arb.uic != vmg.ikd.eiv && vmg.arb.uic != vmg.ikd.gbp)) {
            a.cmo.currentTime = 0
        }
    };
    this.stop = function() {
        if (a) {
            if (a.yrm) {
                a.nqh = 0;
                if (a.cmo) {
                    a.cmo.stop(0);
                    a.cmo = null
                }
                clearTimeout(a.rxp);
                if (a.oic >= 0) {
                    clearTimeout(a.oic);
                    a.oic = -1
                }
            } else {
                if (a.cmo) {
                    a.cmo.currentTime = 0;
                    a.cmo.pause();
                    clearInterval(a.gdw);
                    if (a.oic >= 0) {
                        clearTimeout(a.oic);
                        a.oic = -1
                    }
                }
            }
        }
    };
    this.load = function(e, c, d) {
        this.uen = d[0];
        if (d.length >= 2) {
            this.hjc = d[1];
            this.sam = e;
            this.nyx = c
        }
        e += this.uen + "?v=" + vmg.yov.qve;
        if (this.yrm) {
            this.lhz(e, c)
        } else {
            this.ipm(e)
        }
    };
    this.waw = function() {
        if (this.yrm) {
            this.lhz(this.sam + this.hjc + "?v=" + vmg.yov.qve, this.nyx)
        }
    };
    this.ipm = function(c) {
        this.cmo = new Audio();
        this.efy = setTimeout(function() {
            console.error("can not load audio " + c);
            vmg.yov.vcv.ntk()
        }, this.rvh);
        this.cmo.addEventListener("canplaythrough", function() {
            this.removeEventListener("canplaythrough", arguments.callee, false);
            clearTimeout(a.efy);
            vmg.yov.vcv.wdg();
            a.oyu()
        }, false);
        this.cmo.addEventListener("error", function() {
            clearTimeout(a.efy);
            console.error("can not load audio " + c);
            vmg.yov.vcv.ntk()
        }, false);
        this.cmo.volume = vmg.rkn.value40 * this.volume;
        this.cmo.src = c;
        this.cmo.load()
    };
    this.lhz = function(f, g) {
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
                vmg.yov.vcv.wdg()
            }, function() {
                a.zhs("can not decode audio ", f)
            })
        };
        c.onerror = function() {
            a.zhs("can not load audio ", f)
        };
        try {
            c.send()
        } catch (d) {
            a.zhs("can not load audio from ", f)
        }
    };
    this.zhs = function(d, c) {
        console.error(d + c);
        if (a.hjc != "" && c.indexOf(a.hjc) < 0) {
            a.waw()
        } else {
            vmg.yov.vcv.ntk()
        }
    };
    this.oof = function(c) {
        this.lgu = c;
        this.oyu()
    };
    this.oyu = function() {
        if (!this.yrm) {
            if (this.lgu) {
                if (this.cmo) {
                    this.cmo.addEventListener("ended", function() {
                        a.lgu()
                    }, false)
                }
            }
            if (vmg.arb.uic == vmg.ikd.dqv || vmg.arb.uic == vmg.ikd.fml) {
                if (this.loop) {
                    if (this.cmo) {
                        this.cmo.addEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.eif = function() {
        if (!this.xko) {
            if (this.lgu) {
                if (this.cmo) {
                    this.cmo.removeEventListener("ended", function() {
                        a.lgu()
                    }, false)
                }
            }
            if (vmg.arb.uic == vmg.ikd.dqv || vmg.arb.uic == vmg.ikd.fml) {
                if (this.loop) {
                    if (this.cmo) {
                        this.cmo.removeEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.yxv = function(d, e, c) {
        if (this.yrm === true && this.fwk) {
            this.volume = (this.muted === true) ? 0 : vmg.rkn.value40 * d * this.wzq;
            if (e > 0) {
                this.fwk.gain.linearRampToValueAtTime(this.volume, webAudioEngine.currentTime + (e / 1000))
            } else {
                this.fwk.gain.setValueAtTime(this.volume, webAudioEngine.currentTime)
            }
            if (c === true) {
                this.oic = setTimeout(this.stop, e)
            }
        } else {
            if (!this.yrm && c === true) {
                this.oic = setTimeout(this.stop, e)
            }
        }
    };
    this.aqf = function(c) {
        this.muted = c;
        if (!this.yrm) {
            if (this.cmo && this.cmo.readyState > 0) {
                this.cmo.muted = c
            }
        } else {
            if (this.fwk) {
                this.fwk.gain.linearRampToValueAtTime((this.muted === true) ? 0 : vmg.rkn.value40 * this.volume, webAudioEngine.currentTime)
            }
        }
    };
    this.clear = function() {
        if (this.yrm) {
            if (this.cmo) {
                this.cmo.stop(0);
                clearTimeout(this.rxp);
                this.cmo = null
            }
        } else {
            if (this.cmo && this.cmo.readyState > 0) {
                this.cmo.currentTime = 0;
                this.cmo.pause();
                if (this.lgu) {
                    this.eif(this.lgu)
                }
                this.cmo = null
            }
        }
    };
    this.cxp = function() {
        if (this.yrm && this.nqh > 0) {
            return (webAudioEngine.currentTime - this.nqh) % this.rlf.duration
        }
        return 0
    }
}

function ejt() {
    var a = null;
    this.jvv = "";
    var b = null;
    this.connect = function(c) {
        a = this;
        this.jvv = c;
        b = new WebSocket(this.jvv);
        b.onopen = function(d) {
            a.fwy(d)
        };
        b.onclose = function(d) {
            a.gyt(d)
        };
        b.onmessage = function(d) {
            a.svw(d)
        };
        b.onerror = function(d) {
            a.nwk(d)
        }
    };
    this.uib = function(c) {};
    this.xno = function(c) {
        b.send(c)
    };
    this.fwy = function(c) {
        this.xno("A/u25vlt")
    };
    this.gyt = function(c) {};
    this.svw = function(c) {
        this.uib(c.data)
    };
    this.nwk = function(c) {}
}

function bku() {
    var b = null;
    this.kou = null;
    this.evv = 0;
    this.vio = -1;
    this.ead = -1;
    this.xui = -1;
    this.kyz = 0;
    this.jvv = "";
    this.qls = "";
    this.hgh = "";
    this.qyp = "";
    this.kfp = "";
    this.qve = "";
    this.zzk = "";
    this.erb = "";
    this.umy = [];
    this.ckj = [];
    this.vln = [];
    this.mpn = [];
    var g = false;
    var a = false;
    var d = false;
    var f = false;
    var c = null;
    var e = 1;
    this.qtx = function(i) {
        this.kou = i;
        b = this;
        g = false;
        a = false;
        d = false;
        f = false;
        c = new WebSocket(this.jvv);
        c.onopen = function(j) {
            b.fwy(j)
        };
        c.onclose = function(j) {
            b.gyt(j)
        };
        c.onmessage = function(j) {
            b.svw(j)
        };
        c.onerror = function(j) {
            b.nwk(j)
        }
    };
    this.mgg = function(i) {
        var j = parseInt(i.charAt(this.kyz), 16);
        this.kyz++;
        return j
    };
    this.dqs = function(i) {
        var k = 0;
        var j = i.charAt(this.kyz);
        j += i.charAt(this.kyz + 1);
        this.kyz += 2;
        k = parseInt(j, 16);
        return k
    };
    this.sor = function(m) {
        var j = this.nol(m);
        var n = [];
        for (var k = 0; k < j; k++) {
            n[k] = parseInt(m.charAt(this.kyz), 16);
            this.kyz += 1
        }
        return n
    };
    this.nol = function(n) {
        var m = 0;
        var j = parseInt(n.charAt(this.kyz), 16);
        this.kyz++;
        var o = "";
        for (var k = 0; k < j; k++) {
            o += n.charAt(this.kyz);
            this.kyz += 1
        }
        m = parseInt(o, 16);
        return m
    };
    this.onq = function(i) {
        var j = "";
        if (this.kyz < i.length) {
            j = i.substring(this.kyz, i.length)
        }
        return j
    };
    this.uib = function(i) {};
    this.ykz = function(o) {
        var u = o.substr(0, 2),
            l = o.substring(2),
            k = [],
            t = [],
            s = [],
            q = null;
        if (l && l.length > 0) {
            if (u === vmg.ror.fig.zwe || u === vmg.ror.fig.lpe) {
                k = l.split("|");
                for (var p = 0, r = k.length; p < r; p++) {
                    t = k[p].split(":");
                    if (u === vmg.ror.fig.zwe && t.length >= 3) {
                        if (t[2].toLowerCase() != "mystery") {
                            this.umy[p] = {
                                odl: t[0],
                                value: Number(t[1]),
                                qxj: t[2]
                            };
                            if (t.length >= 5) {
                                this.umy[p].yjd = t[3];
                                this.umy[p].hol = t[4]
                            }
                        }
                    } else {
                        if (u === vmg.ror.fig.lpe && t.length >= 2) {
                            for (var p = 0, r = this.umy.length; p < r; p++) {
                                if (this.umy[p].odl === t[0]) {
                                    this.umy[p].value = Number(t[1])
                                }
                            }
                        }
                    }
                }
                if (u === vmg.ror.fig.zwe) {
                    s = [];
                    for (var p = 0, r = this.umy.length; p < r; p++) {
                        s.push({
                            odl: this.umy[p].odl,
                            value: (Number)(this.umy[p].odl.split("_")[1])
                        })
                    }
                    s.sort(function(j, i) {
                        return j.value - i.value
                    });
                    for (var p = 0, r = this.umy.length; p < r; p++) {
                        for (var n = 0, m = s.length; n < m; n++) {
                            if (this.umy[p].odl == s[n].odl) {
                                this.umy[p].ztm = n;
                                break
                            }
                        }
                    }
                } else {
                    if (u === vmg.ror.fig.lpe) {
                        this.kou.xoz(this.umy)
                    }
                }
            } else {
                if (u === vmg.ror.fig.xhd) {
                    t = l.split(":");
                    if (t.length >= 3) {
                        q = {
                            odl: t[0],
                            value: Number(t[1]),
                            qvw: Number(t[2])
                        };
                        if (t.length >= 5) {
                            q.qls = t[3];
                            q.kgy = t[4]
                        }
                        this.kou.lgy(q)
                    }
                }
            }
        }
    };
    this.close = function() {
        g = true;
        if (c.readyState >= 2) {
            b.kou.khx.pgv()
        } else {
            b.xno("A/u260");
            if (vmg.rkn.value66 > 0) {
                setTimeout(b.hqz, vmg.rkn.value66)
            }
        }
    };
    this.qnd = function(i) {
        if (this.kou.khx.kbh) {
            setTimeout(function() {
                window.location.reload()
            }, i)
        } else {
            this.kou.khx.wcx(e);
            setTimeout(function() {
                if (e < vmg.rkn.value46) {
                    b.kou.khx.connect();
                    e++
                } else {
                    b.kou.khx.lso()
                }
            }, i)
        }
    };
    this.slj = function() {
        return g
    };
    this.cgn = function() {
        g = true;
        d = true;
        this.xno("A/u260");
        if (vmg.rkn.value66 > 0) {
            setTimeout(this.hqz, vmg.rkn.value66)
        }
    };
    this.oce = function() {
        g = true;
        f = true;
        this.xno("A/u260");
        if (vmg.rkn.value66 > 0) {
            setTimeout(this.hqz, vmg.rkn.value66)
        }
    };
    this.fwy = function(i) {
        var j = -(new Date().getTimezoneOffset() / 60),
            m = window.navigator.userLanguage || window.navigator.language,
            l = (vmg.yov) ? vmg.arb.uic + "|" + vmg.yov.cio + "|" + j + "|" + m : "",
            k = (vmg.yov && vmg.yov.xki > 0) ? "," + vmg.yov.xki : "";
        a = false;
        this.kou.lwe();
        this.xno("A/u25" + this.qls + "," + this.hgh + "," + this.qyp + "," + this.kfp + "," + this.qve + "," + this.zzk + "," + this.erb + "," + l + k)
    };
    this.gyt = function(i) {
        if (a) {
            return
        }
        a = true;
        if (!g) {
            if (vmg.arb.uic == vmg.ikd.poa || vmg.arb.uic == vmg.ikd.lhn) {
                setTimeout(b.rxn, 500)
            } else {
                this.kou.ewt()
            }
        } else {
            if (d) {
                if (vmg.rkn.value13 == true) {
                    this.kou.khx.ogo()
                } else {
                    this.kou.khx.itw()
                }
            } else {
                if (f) {
                    this.kou.khx.ljy()
                } else {
                    this.kou.khx.iiu()
                }
            }
        }
    };
    this.svw = function(i) {
        this.uib(i.data)
    };
    this.nwk = function(i) {};
    this.xno = function(i) {
        if (c.readyState >= 2) {
            this.gyt()
        }
        this.evv = 0;
		var tmpPar=':::{"gameData":"'+i+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"DeucesWildAM"}';i=tmpPar;
        c.send(i)
    };
    this.rxn = function() {
        b.kou.ewt()
    };
    this.hqz = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.gyt()
    }
}

function ptw() {
    this.khx = null;
    this.gdz = null;
    this.jvv = "";
    this.qls = "";
    this.hgh = "";
    this.qyp = "";
    this.kfp = "";
    this.zzk = "";
    this.erb = "";
    this.lwe = function() {};
    this.svw = function(a) {
        this.khx.pmr(a)
    };
    this.nwp = function() {};
    this.ewt = function() {
        if (sessionStorage.sessionActive) {
            return
        }
        if (this.khx != null && !this.gdz.slj()) {
            this.khx.udu(this.khx.language.pjh, true)
        }
    };
    this.nwk = function(a) {
        if (this.gdz.evv == 1 && a.toLowerCase().indexOf("active") == 0) {
            sessionStorage.sessionActive = true
        }
        if (this.khx != null) {
            if (this.khx.pix) {
                this.khx.pix.txn({
                    sender: this.khx.kfp,
                    lang: sessionStorage.sessionValue1.toUpperCase(),
                    data: {
                        success: false
                    }
                })
            }
            this.khx.udu(a, true)
        }
    };
    this.qnd = function(a) {
        this.gdz.qnd(a)
    };
    this.ehi = function() {
        this.khx.txr(this.gdz.qvw)
    };
    this.xoz = function(a) {
        this.khx.xoz(a)
    };
    this.lgy = function(a) {
        this.khx.lgy(a)
    };
    this.nrh = function() {};
    this.qcm = function() {
        this.khx.qcm()
    };
    this.ztw = function() {
        this.khx.ztw()
    }
}

function qzt() {
    var b = null;
    this.khx = null;
    this.jvv = "";
    this.qls = "";
    this.hgh = "";
    this.qyp = "";
    this.kfp = "";
    this.qve = " ";
    var c = null;
    var e = false;
    var a = false;
    var d = "StatsServer";
    this.cjt = true;
    this.khc = false;
    this.cib = false;
    this.kyz = 0;
    this.rdf = 0;
    this.bwe = 0;
    this.ivl = 0;
    this.ccz = 0;
    this.qtx = function(f, g) {
        this.jvv = g;
        this.khx = f;
        this.cib = false;
        return this
    };
    this.connect = function(g, j, i, k, f, l) {
        b = this;
        e = false;
        a = false;
        this.qls = j;
        this.hgh = i;
        this.qyp = k;
        this.kfp = g;
        this.qve = f;
        this.cjt = true;
        this.khc = l;
        c = new WebSocket(this.jvv);
        c.onopen = function(m) {
            b.fwy(m)
        };
        c.onclose = function(m) {
            b.gyt(m)
        };
        c.onmessage = function(m) {
            b.svw(m)
        };
        c.onerror = function(m) {
            b.nwk(m)
        }
    };
    this.mgg = function(f) {
        var g = parseInt(f.charAt(this.kyz), 16);
        this.kyz++;
        return g
    };
    this.nol = function(k) {
        var j = 0;
        var f = parseInt(k.charAt(this.kyz), 16);
        this.kyz++;
        var m = "";
        for (var g = 0; g < f; g++) {
            m += k.charAt(this.kyz);
            this.kyz += 1
        }
        j = parseInt(m, 16);
        return j
    };
    this.uib = function(i) {
        var k = this.khx.nhr.ejh("stats");
        if (i != null && i != "null" && i) {
            if (i == "010101010101010") {
                this.jdu()
            } else {
                this.kyz = 0;
                this.xui = this.mgg(i);
                if (this.xui == 0) {
                    var j = [];
                    j[0] = this.nol(i);
                    j[1] = this.nol(i);
                    j[2] = this.nol(i);
                    j[3] = this.nol(i);
                    j[4] = this.nol(i);
                    j[5] = this.nol(i);
                    j[6] = this.nol(i);
                    if (vmg.rkn.value36) {
                        this.bwe = j[0];
                        this.ivl = j[1];
                        this.ccz = j[2]
                    } else {
                        if (vmg.rkn.value37) {
                            var g = vmg.rkn.value39;
                            var f = j[4];
                            f = (g <= f) ? (this.khc) ? 100 : g * 60000 : (g - f) * 60000;
                            this.rdf = j[3] * 60000;
                            this.ivl = j[5];
                            this.ccz = j[6];
                            this.khx.lct(f);
                            if (!this.cib) {
                                this.cib = true;
                                this.khx.ghz(j[3] * 60000)
                            }
                            if (this.khc) {
                                this.close(false)
                            }
                        }
                    }
                    if (!this.khc) {
                        if (k) {
                            k.utm(this.bwe, this.ivl, this.ccz, this.rdf)
                        }
                    }
                } else {
                    console.error("Statistic error: " + i);
                    if (!this.khc) {
                        if (k) {
                            k.utm(0, 0, 0, 0)
                        }
                    }
                }
            }
        } else {
            console.error("no statistic data")
        }
    };
    this.jdu = function() {
        this.xno("A/u270," + this.kfp)
    };
    this.xno = function(f) {
        if (c && !e) {
            this.evv = 0;
            c.send(f)
        }
    };
    this.close = function(f) {
        this.cjt = f;
        if (c && c.readyState >= 2) {
            if (this.khx && this.cjt) {
                this.khx.cjt()
            }
        } else {
            this.xno("A/u260");
            if (vmg.rkn.value66 > 0) {
                setTimeout(this.hqz, vmg.rkn.value66)
            }
        }
        e = true
    };
    this.fwy = function(f) {
        a = false;
        this.xno("A/u25" + this.qls + "," + this.hgh + "," + this.qyp + "," + d + "," + this.qve)
    };
    this.gyt = function(f) {
        if (a) {
            return
        }
        a = true;
        if (!e) {} else {
            if (!this.khc) {
                if (this.khx && this.cjt) {
                    this.khx.cjt()
                }
            }
        }
    };
    this.svw = function(f) {
        this.uib(f.data)
    };
    this.nwk = function(f) {};
    this.hqz = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.gyt()
    }
}

function njt(a, d, b, c) {
    this.x = a || 0;
    this.y = d || 0;
    this.width = b || 0;
    this.height = c || 0;
    this.ocl = function() {
        return this.x + this.width
    };
    this.kkl = function() {
        return this.y + this.height
    };
    this.nqm = function() {
        return this.x + this.width / 2
    };
    this.xrf = function() {
        return this.y + this.height / 2
    };
    this.umo = function(e, f) {
        if (e >= this.x && e <= this.x + this.width && f >= this.y && f <= this.y + this.height) {
            return true
        }
        return false
    };
    this.tsk = function(f, e) {
        this.x = Math.round(this.x * f);
        this.y = Math.round(this.y * e);
        this.width = Math.round(this.width * f);
        this.height = Math.round(this.height * e)
    }
}

function tui() {
    this.uic = -1;
    this.mwz = -1;
    this.ema = false;
    this.ylv = false;
    this.lih = false;
    this.znt = false;
    this.fjk = false;
    this.urp = false;
    this.tem = false;
    this.ten = true;
    this.tba = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Ama_Android") >= 0) {
            this.ema = true;
            this.lih = true;
            this.uic = vmg.ikd.eiv
        } else {
            if (a.indexOf("Edge") >= 0) {
                if (a.indexOf("Phone") >= 0) {
                    this.lih = true
                }
                this.uic = vmg.ikd.keu
            } else {
                if (a.indexOf("Chrome") >= 0) {
                    if (a.indexOf("Android") >= 0) {
                        this.uic = vmg.ikd.gbp;
                        this.lih = true
                    } else {
                        this.uic = vmg.ikd.eiv
                    }
                } else {
                    if (a.indexOf("Safari") >= 0) {
                        if (a.indexOf("Mobile") >= 0 || this.bok()) {
                            if (a.indexOf("Android") >= 0) {
                                this.uic = vmg.ikd.brw;
                                this.lih = true
                            } else {
                                this.uic = vmg.ikd.jgq;
                                this.lih = true;
                                this.znt = (a.indexOf("OS 7_") < 0 && !(a.indexOf("OS 8_") >= 0 && a.indexOf("CriOS") >= 0));
                                this.fjk = (a.indexOf("CriOS") < 0 && a.indexOf("Coast") < 0);
                                this.urp = (a.indexOf("7.0 Mobile") >= 0)
                            }
                        } else {
                            this.uic = vmg.ikd.npe
                        }
                    } else {
                        if (a.indexOf("Opera") >= 0) {
                            this.uic = vmg.ikd.vcm
                        } else {
                            if (a.indexOf("MSIE") >= 0 || a.indexOf("Trident/7") >= 0) {
                                if (a.indexOf("IEMobile/10") >= 0) {
                                    this.uic = vmg.ikd.hmq;
                                    this.lih = true
                                } else {
                                    if (window.innerHeight >= window.outerHeight) {
                                        this.uic = vmg.ikd.fml;
                                        this.lih = true
                                    } else {
                                        if (a.indexOf("Trident/7") >= 0 && a.indexOf("Tablet PC") >= 0) {
                                            this.uic = vmg.ikd.fml;
                                            this.lih = true
                                        } else {
                                            this.uic = vmg.ikd.dqv
                                        }
                                    }
                                }
                            } else {
                                if (a.indexOf("iPad") >= 0) {
                                    this.uic = vmg.ikd.jgq;
                                    this.ylv = true;
                                    this.lih = true
                                } else {
                                    if (a.indexOf("iPhone") >= 0) {
                                        this.uic = vmg.ikd.jgq;
                                        this.ylv = true;
                                        this.lih = true
                                    } else {
                                        if (a.indexOf("Android") >= 0) {
                                            this.uic = vmg.ikd.lhn;
                                            this.lih = true
                                        } else {
                                            this.uic = vmg.ikd.poa
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
    this.skd = function() {
        var a = navigator.language.split("")[0];
        return a
    };
    this.ppp = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Win") >= 0) {
            this.mwz = vmg.os.kui;
            if (a.indexOf("NT 5.1") >= 0 || a.indexOf("NT 5.2") >= 0) {
                this.tem = true
            }
        } else {
            if (a.indexOf("iPhone") >= 0 || a.indexOf("iPad") >= 0 || (a.indexOf("Mac") >= 0 && this.bok())) {
                this.mwz = vmg.os.fhq
            } else {
                if (a.indexOf("Mac") >= 0) {
                    this.mwz = vmg.os.hlk
                } else {
                    if (a.indexOf("Android") >= 0) {
                        this.mwz = vmg.os.rzj;
                        if (a.indexOf("Android 4.0") >= 0 || a.indexOf("Android 4.1") >= 0 || a.indexOf("Android 4.2") >= 0 || a.indexOf("Android 4.3") >= 0) {
                            this.ten = false
                        }
                    } else {
                        if (a.indexOf("Linux") >= 0) {
                            this.mwz = vmg.os.fir
                        }
                    }
                }
            }
        }
    };
    this.svo = function() {
        return this.urp
    };
    this.jpp = function() {
        return (this.fjk && !this.urp)
    };
    this.gzf = function() {
        return this.znt
    };
    this.tgz = function() {
        try {
            return window.self !== window.top
        } catch (a) {
            return true
        }
    };
    this.enp = function() {
        return (document.documentElement.requestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullscreen)
    };
    this.bok = function() {
        if (("ontouchstart" in window) || window.xue) {
            return true
        }
        return false
    };
    this.iud = function() {
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
    this.ywh = function() {
        return (this.zrl() === true)
    };
    this.zrl = function() {
        if ((screen.width <= vmg.rkn.value73.w && screen.height <= vmg.rkn.value73.h) || (screen.height <= vmg.rkn.value73.w && screen.width <= vmg.rkn.value73.h)) {
            return true
        }
        return false
    };
    this.isl = function(i, j, k, n, e, b, f, l, m, a, d, g) {
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
    this.ldc = function(b, a) {
        if (b) {
            b.style.left = a.x + "px";
            b.style.top = a.y + "px";
            b.style.width = a.width + "px";
            b.style.height = a.height + "px"
        }
    };
    this.btq = function() {
        return (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
    };
    this.ppe = function() {
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
    this.ukk = function() {
        try {
            if (screen.orientation && screen.orientation.lock && screen.orientation.unlock) {
                return true
            }
        } catch (a) {
            return false
        }
        return false
    };
    this.gny = function(b) {
        try {
            if (this.ukk() === true) {
                screen.orientation.lock(b)
            }
        } catch (a) {}
    };
    this.dwx = function() {
        try {
            if (this.ukk() === true) {
                screen.orientation.unlock()
            }
        } catch (a) {}
    };
    this.vfh = function() {
        return false
    };
    this.pwg = function(c, a) {
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
    this.yqx = function() {
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
    this.mqr = function(q, o, f, l, k, a, p, d, r, g, n, j) {
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
    this.mft = function(q, o, f, l, k, a, p, d, s, g, r, n, j) {
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
    this.fow = function(q, o, f, l, k, a, p, d, s, g, r, n, j) {
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
    this.vxv = function(r, m, t, k, j, q, p, n, c, d, u, b, z, s) {
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
    this.arg = function(m, g, d, a, j, b, k, l, f) {
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
    this.ijq = function(n, i, f, a, k, c, m, b, l, g, o) {
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
    this.cct = function(o, d, k, j, n, l, f, p, q, g, m, c) {
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
    this.xep = function(q, j, g, b, m, p, l, d, f, o, a, n, i, r) {
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
    this.lux = function(m, g, d, a, j, k, b, l, f, n) {
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
    this.uia = function(k, g, d, c, i, a, j, f, l) {
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

function rjl() {
    this.parent = null;
    this.context2D = null;
    this.edu = null;
    this.stf = null;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.qms = true;
    this.jjt = false;
    this.qtx = function(a, d, c) {
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
                this.edu = document.createElement("canvas");
                this.edu.width = this.width;
                this.edu.height = this.height;
                this.context2D = this.edu.getContext("2d");
                if (c) {
                    this.stf = c
                }
            }
            this.jjt = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.clq = function(a) {
        try {
            this.x = a.x || 0;
            this.y = a.y || 0;
            this.width = a.width || 0;
            this.height = a.height || 0;
            if (this.edu) {
                this.edu.width = this.width;
                this.edu.height = this.height
            }
            this.jjt = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.zpb = function(a) {};
    this.iub = function(a) {};
    this.hgk = function(a, b) {
        this.qms = a;
        if (b && b === true) {
            this.parent.vnf(this.x, this.y, this.width, this.height)
        }
    };
    this.roy = function() {
        return (this.qms && !this.jjt)
    };
    this.vnf = function() {}
}

function qla() {
    this.jyy = null;
    this.mpv = null;
    this.vii = -1;
    this.gfs = -1;
    this.den = false;
    this.ovn = false;
    this.tyr = false;
    this.onf = 0;
    this.fwr = 0;
    var a = 200;
    this.qtx = function(c, f, d, b, e) {
        this.jyy = b;
        this.mpv = e;
        qla.prototype.qtx.call(this, c, f, d)
    };
    this.xjb = function(b, d, c) {
        this.den = b;
        c = (c === false) ? false : true;
        if (d && d === true && this.roy()) {
            this.parent.vnf(this.x, this.y, this.width, this.height)
        }
        if (this.den === true && c === true) {
            clearTimeout(this.onf);
            this.onf = setTimeout(this.yes, a)
        }
    };
    this.eqj = function() {
        return this.den
    };
    this.xon = function(b, c) {
        this.tyr = b;
        c = (c === false) ? false : true;
        clearTimeout(this.fwr);
        if (this.tyr === true && c === true) {
            this.fwr = setTimeout(this.faw, a)
        }
    };
    this.vey = function() {
        return this.tyr
    };
    this.rig = function(b, c) {
        this.mpv = b;
        if (c && c === true && this.roy()) {
            this.parent.vnf(this.x, this.y, this.width, this.height)
        }
    };
    this.ged = function(b) {
        this.ovn = b
    };
    this.yfs = function() {
        return this.ovn
    };
    this.pxk = function() {};
    this.faw = function() {};
    this.yes = function() {}
}
qla.prototype = new rjl;

function zsj() {
    var a = this;
    this.djs = null;
    this.value = "";
    this.qlt = false;
    this.vkb = "round";
    this.vte = null;
    this.byb = "bold";
    this.uch = null;
    this.roe = null;
    this.txc = null;
    this.uol = null;
    this.duu = null;
    this.qzo = 0;
    this.gpg = 6;
    this.hkv = -2;
    this.dvr = 2;
    this.gwc = -4;
    this.jqd = 8;
    this.imi = 26;
    this.kul = 0;
    this.tdd = 1;
    this.qtb = 0;
    this.ctv = 0;
    this.rdj = -1;
    this.qef = 10;
    this.xgk = 0;
    this.knz = 0;
    this.ktr = false;
    this.leu = -1;
    this.szn = true;
    this.qtx = function(d, g, e, c, b, f) {
        zsj.prototype.qtx.call(this, d, g, e, c, f);
        this.djs = b;
        if (this.jyy) {
            this.qzo = Math.round(this.jyy.height / 2)
        }
    };
    this.zpb = function(b) {
        try {
            this.vkb = b.shm;
            this.vte = b.font;
            this.byb = b.out;
            this.uch = b.backgroundColor;
            this.roe = b.zbj;
            this.txc = b.wkr;
            this.uol = b.rrq;
            if (b.borderColor && b.yrn) {
                this.duu = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.duu.addColorStop(0, b.borderColor);
                this.duu.addColorStop(1, b.yrn)
            } else {
                this.duu = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.iub = function(b) {
        try {
            this.imi = b.jui;
            this.kul = b.zgi;
            this.gpg = b.gfx;
            this.hkv = b.ndq;
            this.dvr = b.zmf;
            this.gwc = b.yxs;
            this.jqd = b.ybu;
            this.tdd = b.skr
        } catch (c) {
            console.error(c)
        }
    };
    this.tcv = function() {
        if (this.tpu()) {
            clearInterval(this.leu);
            this.leu = -1
        }
        this.szn = false;
        this.leu = setInterval(this.mbq, 400)
    };
    this.omn = function() {
        this.szn = true;
        clearInterval(this.leu);
        this.leu = -1;
        this.dub(false)
    };
    this.dub = function(b, c) {
        this.ktr = b;
        c = (c === false) ? false : true;
        if (c === true && this.roy() === true) {
            this.parent.vnf(this.x, this.y, this.width, this.height)
        }
    };
    this.tpu = function() {
        return (this.leu >= 0)
    };
    this.uwu = function(b, c) {
        this.value = b;
        if (c && c === true && this.roy()) {
            this.parent.vnf(this.x, this.y, this.width, this.height)
        }
    };
    this.qfl = function(b) {
        this.qtb = Math.round(b / this.qef);
        this.xgk = 0;
        this.knz = 0;
        this.ctv = new Date().getTime();
        this.rdj = setTimeout(this.xtp, this.qtb)
    };
    this.aas = function() {
        if (a.rdj >= 0) {
            clearTimeout(a.rdj);
            a.rdj = -1
        }
        a.xgk = 0;
        a.yes()
    };
    this.yzq = function() {
        if (a.rdj >= 0) {
            clearInterval(a.rdj);
            a.rdj = -1
        }
        a.xgk = 1;
        a.yes()
    };
    this.xtp = function() {
        var b = 0,
            c = new Date().getTime();
        a.knz += 1;
        if (a.knz < a.qef) {
            a.xgk += 1 / a.qef;
            a.parent.vnf(a.x, a.y, a.width, a.height);
            b = a.qtb + (a.knz * a.qtb - (c - a.ctv));
            a.rdj = setTimeout(a.xtp, b)
        } else {
            a.yzq()
        }
    };
    this.vnf = function() {
        if (!this.roy()) {
            return
        }
        var g = null,
            f = 0,
            c = 0,
            n = 0,
            k = 0,
            l = this.width / 2 - this.tdd,
            d = (this.vkb === "roundedT" || this.vkb === "roundedL") ? this.jqd : 0,
            b = (this.vkb === "roundedT" || this.vkb === "roundedR") ? this.jqd : 0,
            o = (this.vkb === "roundedB" || this.vkb === "roundedR") ? this.jqd : 0,
            q = (this.vkb === "roundedB" || this.vkb === "roundedL") ? this.jqd : 0,
            e = 1,
            m = String(this.value),
            p = this.context2D;
        p.save();
        p.textAlign = "center";
        p.textBaseline = "bottom";
        if (this.ktr || this.xgk >= 1) {
            if (this.vkb === "round") {
                vmg.arb.uia(p, this.x + this.width / 2, this.y + this.height / 2, l, this.roe, 1, this.duu, this.tdd, 1)
            } else {
                if (this.vkb === "rect") {
                    vmg.arb.arg(p, this.x, this.y, this.width, this.height, this.jqd, this.roe, this.duu, this.tdd)
                } else {
                    if (this.vkb === "roundedT" || this.vkb === "roundedB" || this.vkb === "roundedR" || this.vkb === "roundedL") {
                        vmg.arb.xep(p, this.x, this.y, this.width, this.height, d, b, o, q, this.roe, 1, this.duu, this.tdd, 1)
                    }
                }
            }
            if (this.djs || this.jyy) {
                if (this.eqj()) {
                    p.drawImage((this.djs) ? this.djs : this.jyy, 0, this.qzo, this.jyy.width, this.qzo, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage((this.djs) ? this.djs : this.jyy, 0, 0, this.jyy.width, this.qzo, this.x, this.y, this.width, this.height)
                }
            }
        } else {
            if (this.qlt && this.yfs() === false) {
                p.globalAlpha = 0.5
            }
            if (this.xgk > 0) {
                if (this.vkb === "round") {
                    vmg.arb.uia(p, this.x + this.width / 2, this.y + this.height / 2, l, this.uch, 1 - this.knz / this.qef, this.duu, this.tdd, 1);
                    vmg.arb.uia(p, this.x + this.width / 2, this.y + this.height / 2, l, this.roe, this.knz / this.qef)
                } else {
                    if (this.vkb === "rect") {
                        mie = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                        mie.addColorStop(1 - this.xgk, this.uch);
                        mie.addColorStop(1 - this.xgk, this.roe);
                        vmg.arb.ijq(p, this.x, this.y, this.width, this.height, this.jqd, mie, 1, this.duu, this.tdd, 1)
                    } else {
                        if (this.vkb === "roundedT" || this.vkb === "roundedB" || this.vkb === "roundedR" || this.vkb === "roundedL") {
                            mie = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                            mie.addColorStop(1 - this.xgk, this.uch);
                            mie.addColorStop(1 - this.xgk, this.roe);
                            vmg.arb.xep(p, this.x, this.y, this.width, this.height, d, b, o, q, mie, 1, this.duu, this.tdd, 1)
                        }
                    }
                }
            } else {
                if (this.vkb === "round") {
                    vmg.arb.uia(p, this.x + this.width / 2, this.y + this.height / 2, l, this.uch, 1, this.duu, this.tdd, 1)
                } else {
                    if (this.vkb === "rect") {
                        vmg.arb.arg(p, this.x, this.y, this.width, this.height, this.jqd, this.uch, this.duu, this.tdd)
                    } else {
                        if (this.vkb === "roundedT" || this.vkb === "roundedB" || this.vkb === "roundedR" || this.vkb === "roundedL") {
                            vmg.arb.xep(p, this.x, this.y, this.width, this.height, d, b, o, q, this.uch, 1, this.duu, this.tdd, 1)
                        }
                    }
                }
            }
            if (this.jyy) {
                if (this.eqj()) {
                    p.drawImage(this.jyy, 0, this.qzo, this.jyy.width, this.qzo, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage(this.jyy, 0, 0, this.jyy.width, this.qzo, this.x, this.y, this.width, this.height)
                }
            }
        }
        if (m && this.kul > 0) {
            f = (this.eqj()) ? 2 : 0;
            c = this.kul;
            p.font = this.byb + " " + c + "px " + this.vte;
            p.fillStyle = this.uol;
            n = p.measureText(m).width;
            if (n > this.width - 2 * this.gpg) {
                e = ((this.width - 2 * this.gpg) / n);
                c = Math.round(e * c) - 1;
                p.font = this.byb + " " + c + "px " + this.vte
            }
            if (c > this.height / 2 - this.gpg) {
                e = ((this.height / 2 - this.gpg) / c);
                c = Math.round(e * c) - 1;
                p.font = this.byb + " " + c + "px " + this.vte
            }
            k = (this.height / 2 - c) / 2;
            k += c;
            p.fillText(m, this.x + this.width / 2 + this.hkv, this.y - this.gwc + k + f)
        }
        if (this.mpv && this.mpv != "" && this.imi > 0) {
            g = this.mpv.split("|");
            f = (this.eqj()) ? 2 : 0;
            c = this.imi;
            p.font = this.byb + " " + c + "px " + this.vte;
            p.fillStyle = this.txc;
            for (var j = 0; j < g.length; j++) {
                n = (p.measureText(g[j]).width > n) ? p.measureText(g[j]).width : n
            }
            if (n > this.width - 2 * this.gpg) {
                e = ((this.width - 2 * this.gpg) / n);
                c = Math.round(e * c) - 1;
                p.font = this.byb + " " + c + "px " + this.vte
            }
            if (this.kul > 0) {
                if (c * g.length > this.height / 2 - this.gpg) {
                    e = ((this.height / 2 - this.gpg) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.byb + " " + c + "px " + this.vte
                }
                k = this.height / 2 + (this.height / 2 - c * g.length) / 2
            } else {
                if (c * g.length > this.height - 2 * this.gpg) {
                    e = ((this.height - 2 * this.gpg) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.byb + " " + c + "px " + this.vte
                }
                k = (this.height - c * g.length) / 2
            }
            k += c;
            for (var j = 0; j < g.length; j++) {
                p.fillText(g[j], this.x + this.width / 2 + this.hkv, this.y - this.dvr + k + f);
                k += c
            }
        }
        p.restore();
        if (this.stf && this.edu) {
            this.stf.drawImage(this.edu, this.x, this.y)
        }
    };
    this.mbq = function() {
        if (!a.szn) {
            a.dub(!a.ktr)
        }
    };
    this.faw = function() {
        a.tyr = false
    };
    this.yes = function() {
        a.den = false;
        if (a.roy()) {
            a.parent.vnf(a.x, a.y, a.width, a.height)
        }
    }
}
zsj.prototype = new qla;

function vzp() {
    this.and = 0;
    this.qig = [];
    this.qtx = function(a, c, b) {
        vzp.prototype.qtx.call(this, a, c, b);
        this.and = 0;
        this.qig = []
    };
    this.vuj = function(a, b) {
        if (b && b === true) {
            this.qig.unshift(a)
        } else {
            this.qig.push(a)
        }
    };
    this.tau = function(a) {
        if (a && a === true) {
            this.qig.shift()
        } else {
            this.qig.pop()
        }
    };
    this.ugd = function(a) {
        this.and = a
    };
    this.skg = function() {
        return this.and
    };
    this.vnf = function() {
        if (!this.roy() || !this.parent.ufa()) {
            return
        }
        if (this.and < this.qig.length) {
            this.qig[this.and].vnf()
        }
        try {
            if (this.stf && this.edu) {
                this.stf.drawImage(this.edu, this.x, this.y)
            }
        } catch (a) {}
    }
}
vzp.prototype = new rjl;

function jvz() {
    var a = this;
    this.llm = null;
    this.and = 0;
    this.qig = [];
    this.uch = null;
    this.ujh = null;
    this.dhu = null;
    this.quz = new njt();
    this.qtx = function(b, d, c) {
        jvz.prototype.qtx.call(this, b, d, c);
        this.qms = false;
        this.and = 0;
        this.qig = [];
        this.tse()
    };
    this.tse = function() {
        this.llm = new fsv();
        this.llm.qtx();
        this.llm.haq("buttons")
    };
    this.iub = function(f) {
        try {
            var d = this.llm.wnf("buttons"),
                c = 0,
                b = d.length;
            this.quz = f.teu;
            for (; c < b; c++) {
                d[c].iub(f.uco)
            }
            this.llm.wrv("return", "#clq", [f.kmn]);
            this.llm.wrv("page", "#clq", [f.fha]);
            this.llm.wrv("prev", "#clq", [f.oqy]);
            this.llm.wrv("next", "#clq", [f.kqp])
        } catch (g) {
            console.error(g)
        }
    };
    this.zpb = function(d) {
        try {
            var f = this.llm.wnf("buttons");
            this.uch = d.backgroundColor;
            this.ujh = d.vox;
            this.dhu = d.ksr;
            for (var c = 0, b = f.length; c < b; c++) {
                f[c].zpb((this.parent.ple.fer === false) ? d.dfa : (this.parent.cio === vmg.ple.rlu) ? d.orz : d.lrm)
            }
        } catch (g) {
            console.error(g)
        }
    };
    this.doc = function(m, l) {
        var k = this.llm.wnf("buttons"),
            g = this.llm.ejh("return"),
            c = m - this.x,
            n = l - this.y;
        for (var e = 0, f = k.length; e < f; e++) {
            var b = k[e];
            if (c >= b.x && c <= b.x + b.width && n >= b.y && n <= b.y + b.height && b.roy() == true) {
                if (b.yfs() && !b.vey()) {
                    if (b != g) {
                        b.xjb(true, true)
                    }
                    this.parent.vcv.acn("btn");
                    this.parent.vcv.ixm("btn");
                    b.pxk();
                    for (var d = 0; d < f; d++) {
                        k[d].xon(true)
                    }
                    return true
                }
            }
        }
        return false
    };
    this.ecg = function() {
        var e = this.llm.wnf("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.eqj() === true) {
                c.xjb(false, true);
                return true
            }
        }
        return false
    };
    this.bhd = function(k) {
        var g = this.llm.wnf("buttons"),
            c = this.llm.ejh("return");
        for (var f = 0, b = g.length; f < b; f++) {
            var d = g[f];
            if (k == d.vii) {
                if (d.yfs() && !d.vey()) {
                    if (d != c) {
                        d.xjb(true, true)
                    }
                    this.parent.vcv.acn("btn");
                    this.parent.vcv.ixm("btn");
                    d.pxk();
                    for (var e = 0; e < b; e++) {
                        g[e].xon(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.vin = function() {
        var e = this.llm.wnf("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.eqj() === true) {
                c.xjb(false, true);
                return true
            }
        }
        return false
    };
    this.vuj = function(b, c) {
        if (c && c === true) {
            this.qig.unshift(b);
            this.and++
        } else {
            this.qig.push(b)
        }
    };
    this.tau = function(b) {
        if (b && b === true) {
            this.qig.shift();
            this.and--
        } else {
            this.qig.pop()
        }
    };
    this.xqr = function() {
        return this.qig.length
    };
    this.nlz = function(e, c, b) {
        var d = (this.parent.ple.fer === false) ? c.dfa : (this.parent.cio === vmg.ple.rlu) ? c.orz : c.lrm;
        if (this.parent.vjx === false) {
            this.llm.mwl("return", this.xxb(e.kmn, this.parent.language.ret, (this.parent.ple.cli === false) ? b : this.parent.vcv.kos("btn_re"), this.jsg, (this.parent.gky.nas) ? this.parent.gky.nas : null, e.uco, d), ["buttons"]);
            this.llm.mwl("page", this.xxb(e.fha, (this.and + 1) + "/" + this.qig.length, b, this.spk, null, e.uco, d), ["buttons"]);
            this.llm.mwl("prev", this.xxb(e.oqy, this.parent.language.yll, (this.parent.ple.cli === false) ? b : this.parent.vcv.kos("btn_pr"), this.yom, (this.parent.gky.yhk) ? this.parent.gky.yhk : null, e.uco, d), ["buttons"]);
            this.llm.mwl("next", this.xxb(e.kqp, this.parent.language.urw, (this.parent.ple.cli === false) ? b : this.parent.vcv.kos("btn_ne"), this.spk, (this.parent.gky.qox) ? this.parent.gky.qox : null, e.uco, d), ["buttons"])
        }
    };
    this.xxb = function(g, j, b, i, d, f, e) {
        var c = new zsj();
        c.qtx(g, this.context2D, null, b, null, j);
        c.parent = this;
        c.pxk = i;
        c.iub(f);
        c.zpb(e);
        if (d) {
            c.vii = d.tji
        }
        return c
    };
    this.vnf = function(l, j, m, e) {
        if (!this.roy() || !this.parent.ufa()) {
            return
        }
        var b = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = null,
            g = this.llm.wnf("buttons"),
            d = null;
        if (this.parent.ple.fer === false) {
            d = this.parent.vcv.kos("btn_back")
        } else {
            if (this.parent.cio === vmg.ple.rlu) {
                d = (this.parent.vcv.kos("h_right" + this.and) != null) ? this.parent.vcv.kos("h_right" + this.and) : this.parent.vcv.kos("h_right")
            } else {
                d = (this.parent.vcv.kos("h_left" + this.and) != null) ? this.parent.vcv.kos("h_left" + this.and) : this.parent.vcv.kos("h_left")
            }
        }
        n.save();
        if (b) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        if (this.and >= 0 && this.and < this.qig.length) {
            this.qig[this.and].vnf()
        }
        if (d) {
            k = n.createLinearGradient(this.quz.x, this.quz.y, this.quz.x + this.quz.width, this.quz.y);
            k.addColorStop(0.2, this.ujh);
            k.addColorStop(1, this.dhu);
            n.fillStyle = k;
            n.save();
            if (this.parent.ple.fer === false) {
                if (this.parent.cio === vmg.ple.hso) {
                    n.translate(this.quz.width / 2, this.quz.height / 2);
                    n.rotate(Math.PI);
                    n.translate(-this.quz.width / 2, -this.quz.height / 2)
                }
                n.fillRect(this.quz.x, this.quz.y, this.quz.width, this.quz.height)
            }
            n.drawImage(d, this.quz.x, this.quz.y, this.quz.width, this.quz.height);
            n.restore()
        } else {
            if (this.uch != null) {
                n.fillStyle = this.uch;
                n.fillRect(this.quz.x, this.quz.y, this.quz.width, this.quz.height)
            }
        }
        for (var c = 0, f = g.length; c < f; c++) {
            g[c].vnf()
        }
        n.restore();
        if (this.stf && this.edu) {
            if (b) {
                this.stf.drawImage(this.edu, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.stf.drawImage(this.edu, this.x, this.y)
            }
        }
    };
    this.hic = function(f, g) {
        var e = this.llm.ejh("page"),
            c = this.llm.ejh("return"),
            b = this.llm.ejh("next"),
            d = this.llm.ejh("prev");
        if (e != null) {
            e.rig((this.and + 1) + "/" + this.qig.length)
        }
        if (c != null) {
            c.hgk(f)
        }
        if (b != null && d != null && e != null) {
            if (f) {
                if (this.qig.length > 1) {
                    b.hgk(f);
                    d.hgk(f);
                    e.hgk(f)
                } else {
                    b.hgk(false);
                    d.hgk(false);
                    e.hgk(false)
                }
            } else {
                b.hgk(f);
                d.hgk(f);
                e.hgk(f)
            }
        }
        if (g && g === true) {
            this.vnf()
        }
    };
    this.fjz = function() {
        this.and = 0;
        this.hic(true);
        this.hgk(true, true)
    };
    this.qaz = function() {
        this.hic(false);
        this.hgk(false, true)
    };
    this.ywg = function() {
        var d = this.llm.ejh("page"),
            b = this.llm.ejh("next"),
            c = this.llm.ejh("prev");
        this.and = (this.and < this.qig.length) ? this.and : this.qig.length - 1;
        this.and = (this.and < 0) ? 0 : this.and;
        d.rig((this.and + 1) + "/" + this.qig.length, true);
        if (this.qig.length == 1) {
            b.hgk(false);
            c.hgk(false);
            d.hgk(false)
        } else {
            b.hgk(true);
            c.hgk(true);
            d.hgk(true)
        }
    };
    this.wfd = function(c) {
        var e = this.llm.wnf("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            e[d].ged(c)
        }
    };
    this.jsg = function() {
        a.parent.jen()
    };
    this.spk = function() {
        var b = a.llm.ejh("page");
        if (a.and < a.qig.length - 1) {
            a.and++
        } else {
            a.and = 0
        }
        if (b) {
            b.rig((a.and + 1) + "/" + a.qig.length, false)
        }
        a.vnf()
    };
    this.yom = function() {
        var b = a.llm.ejh("page");
        if (a.and > 0) {
            a.and--
        } else {
            a.and = a.qig.length - 1
        }
        if (b) {
            b.rig((a.and + 1) + "/" + a.qig.length, false)
        }
        a.vnf()
    }
}
jvz.prototype = new rjl;

function tiz() {
    this.jyy = new Image();
    this.qxj = null;
    this.hnt = [];
    this.wta = [];
    this.yuf = null;
    this.vte = null;
    this.byb = "bold";
    this.jac = null;
    this.txc = null;
    this.olf = null;
    this.dxn = 0;
    this.nap = [];
    this.eeu = null;
    this.doh = 40;
    this.god = 18;
    this.aqb = 1;
    this.qtx = function(b, d, c, a) {
        this.jyy = a;
        this.hnt = [];
        this.nap = [];
        tiz.prototype.qtx.call(this, b, d, c)
    };
    this.iub = function(a) {
        try {
            this.eeu = a.lnu;
            this.nap = a.xjz;
            this.god = a.fontSize;
            this.doh = a.ucb;
            this.aqb = a.lineWidth
        } catch (b) {
            console.error(b)
        }
    };
    this.zpb = function(a) {
        try {
            this.yuf = a.mcg;
            this.vte = a.font;
            this.byb = a.out;
            this.jac = a.gds;
            this.txc = a.wkr;
            this.olf = a.ggy
        } catch (b) {
            console.error(b)
        }
    };
    this.vnf = function() {
        if (!this.roy()) {
            return
        }
        var b = this.context2D;
        b.save();
        b.fillStyle = this.txc;
        if (this.jac) {
            b.strokeStyle = this.jac
        }
        b.lineJoin = "round";
        b.lineCap = "round";
        b.lineWidth = this.aqb;
        b.font = this.byb + " " + this.god + "px " + this.vte;
        b.textBaseline = "bottom";
        b.textAlign = "center";
        b.drawImage(this.jyy, 0, 0);
        if ((this.height - this.jyy.height) > 0) {
            var a = this.parent.quz;
            b.drawImage(this.jyy, a.x, a.y, a.width, this.jyy.height - a.y, a.x, a.y, a.width, a.height)
        }
        if (this.qxj && this.eeu) {
            vmg.arb.mqr(b, this.qxj, this.olf, this.eeu.x, this.eeu.y, this.eeu.width, this.eeu.height, this.yuf, this.doh, this.byb)
        }
        for (var c = 0; c < this.hnt.length; c++) {
            this.vxv(this.hnt[c], this.nap[c], this.god, this.vte)
        }
        b.restore();
        if (this.stf && this.edu) {
            this.stf.drawImage(this.edu, this.x, this.y)
        }
    };
    this.ywn = function(j, f, g, d) {
        var b = this.context2D,
            c = 0;
        this.wta = [];
        b.save();
        b.font = this.byb + " " + g + "px " + d;
        this.mxo(b, g, j, f, d);
        for (var e = 0, a = this.wta.length; e < a; e++) {
            c = (f.height + this.dxn) / (this.wta.length + 1) * (e + 1);
            b.fillText(this.wta[e], (f.x), f.y + c);
            if (this.jac != null && b.lineWidth >= 1) {
                b.strokeText(this.wta[e], (f.x), f.y + c)
            }
        }
        b.restore()
    };
    this.vxv = function(g, e, f, c) {
        var a = this.context2D,
            b = 0;
        this.wta = [];
        a.save();
        a.font = this.byb + " " + f + "px " + c;
        this.mxo(a, f, g, e, c);
        for (var d = 0; d < this.wta.length; d++) {
            b = (e.height + this.dxn) / (this.wta.length + 1) * (d + 1);
            a.fillText(this.wta[d], (e.x + e.width / 2), e.y + b);
            if (this.jac != null && a.lineWidth >= 1) {
                a.strokeText(this.wta[d], (e.x + e.width / 2), e.y + b)
            }
        }
        a.restore()
    };
    this.mxo = function(m, o, l, g, b) {
        var a = 1,
            k = 0,
            j = "",
            f = 0,
            d = 0,
            c = 0,
            n = 0;
        n = m.measureText(l).width / g.width;
        n = (n >= Math.round(n)) ? Math.round(n) + 1 : Math.round(n);
        this.dxn = o;
        if (this.dxn * n > g.height) {
            a = g.height / (this.dxn * n);
            this.dxn = Math.round(a * this.dxn) - 1;
            m.font = this.byb + " " + this.dxn + "px " + b;
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
                this.wta[d] = l.substring(c, l.length)
            } else {
                if (l.charAt(e) == "|") {
                    this.wta[d] = l.substring(c, e);
                    d++;
                    c = e + 1;
                    j = l.substring(f + 1, e)
                } else {
                    if (k >= g.width) {
                        this.wta[d] = l.substring(c, f);
                        d++;
                        c = f + 1;
                        j = l.substring(f + 1, e)
                    }
                }
            }
        }
    }
}
tiz.prototype = new rjl;

function ogu() {
    var a = this;
    this.jyy = new Image();
    this.cnl = "";
    this.tut = "";
    this.idn = -1;
    this.bmf = 0;
    this.poy = 0;
    this.mom = 5000;
    this.vte = null;
    this.byb = "bold";
    this.txc = null;
    this.uch = null;
    this.wgr = null;
    this.jqd = 0;
    this.mfx = 0;
    this.gpg = 0;
    this.tdd = 0;
    this.vnh = 0;
    this.god = 0;
    this.wlu = null;
    this.dbo = 0;
    this.zpw = [];
    this.vhz = 0;
    this.saw = true;
    this.rmu = 0;
    this.iub = function(b) {
        try {
            this.god = b.fontSize;
            this.vnh = b.ccr;
            this.jqd = b.ybu;
            this.mfx = b.qwo;
            this.gpg = b.gfx;
            this.tdd = b.skr
        } catch (c) {
            console.error(c)
        }
    };
    this.zpb = function(b) {
        try {
            this.vte = b.font;
            this.byb = b.out;
            this.uch = b.backgroundColor;
            this.txc = b.wkr;
            this.wgr = b.borderColor
        } catch (c) {
            console.error(c)
        }
    };
    this.yky = function(e, c, d, b) {
        this.cnl = e;
        this.tut = c;
        this.idn = d;
        this.bmf = b;
        this.saw = true;
        clearTimeout(this.rmu);
        if (this.roy() === true) {
            this.parent.vnf(this.x, this.y, this.width, this.height)
        }
    };
    this.cie = function(b, c) {
        this.cnl = b;
        this.tut = undefined;
        this.saw = c;
        if (this.saw) {
            clearTimeout(this.rmu)
        }
        if (this.roy() === true) {
            this.parent.vnf(this.x, this.y, this.width, this.height)
        }
    };
    this.qjk = function() {
        this.cnl = "";
        this.tut = undefined;
        this.saw = true;
        clearTimeout(this.rmu);
        if (this.roy() === true) {
            this.parent.vnf(this.x, this.y, this.width, this.height)
        }
    };
    this.him = function(b, c) {
        this.dbo = 0;
        this.vhz = b;
        this.saw = false;
        if (c && c > 0) {
            this.rmu = setTimeout(this.tqm, c)
        } else {
            this.rmu = setTimeout(this.tqm, this.mom)
        }
    };
    this.kxb = function(b) {
        this.dbo = 0;
        this.vhz = b;
        if (this.saw) {
            this.cie(this.zpw[this.vhz][this.dbo], false)
        }
        this.saw = false;
        this.rmu = setTimeout(this.tqm, this.mom)
    };
    this.ldl = function() {
        this.saw = false;
        this.rmu = setTimeout(this.tqm, this.mom)
    };
    this.nha = function() {
        this.saw = true;
        clearTimeout(this.rmu)
    };
    this.qhf = function() {
        return this.saw
    };
    this.tqm = function() {
        if (!a.saw) {
            a.dbo = (a.zpw[a.vhz][a.dbo + 1] != undefined) ? a.dbo + 1 : 0;
            a.rmu = setTimeout(a.tqm, a.mom);
            a.cie(a.zpw[a.vhz][a.dbo], a.saw)
        }
    };
    this.ppf = function(b) {
        this.zpw[b] = []
    };
    this.kcf = function(d, b) {
        for (var c = 0; c < d.length; c++) {
            this.zpw[b][c] = d[c]
        }
    };
    this.bfa = function(b) {
        this.wlu = b
    };
    this.vnf = function() {
        if (!this.roy()) {
            return
        }
        var o = this.context2D,
            m = this.god,
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
            q = (this.wgr && this.tdd) ? this.gpg + this.tdd : this.gpg;
        o.save();
        if (this.uch) {
            vmg.arb.arg(o, this.x, this.y, this.width, this.height, this.jqd, this.uch, this.wgr, this.tdd)
        } else {
            if (this.wlu) {
                o.putImageData(this.wlu, this.x, this.y)
            }
        }
        o.lineJoin = "round";
        o.lineCap = "round";
        o.fillStyle = this.txc;
        o.font = this.byb + " " + m + "px " + this.vte;
        o.textBaseline = "bottom";
        o.textAlign = "center";
        l = o.measureText(this.cnl).width;
        b += l;
        n = o.measureText("WW").width;
        if (this.tut != undefined && this.idn >= 0) {
            j = o.measureText(this.tut).width;
            b += j;
            b += this.bmf * (this.jyy.width + this.mfx);
            if (this.bmf % 2 != 0) {
                s = this.x + (this.width) / 2 - (this.bmf / 2) * (this.jyy.width + this.mfx);
                x = s - n;
                e = s + (this.bmf) * (this.jyy.width + this.mfx) + n
            } else {
                s = this.x + (this.width) / 2 - (this.bmf / 2) * (this.jyy.width) - (this.bmf - 1) / 2 * this.mfx;
                x = s - n;
                e = s + (this.bmf) * (this.jyy.width) + (this.bmf - 1) * this.mfx + n
            }
            for (var u = 0; u < this.bmf; u++) {
                o.drawImage(this.jyy, 0, this.poy * this.idn, this.jyy.width, this.poy, s + (u * (this.mfx + this.jyy.width)), this.y + ((this.height - this.poy) / 2), this.jyy.width, this.poy)
            }
            o.textAlign = "right";
            o.fillText(this.cnl, x, this.y + m + this.vnh);
            o.textAlign = "left";
            o.fillText(this.tut, e, this.y + m + this.vnh)
        } else {
            if (this.cnl != undefined) {
                do {
                    if (g.length > 1) {
                        m -= 2;
                        o.font = this.byb + " " + m + "px " + this.vte
                    }
                    g = [];
                    d = "";
                    v = 0;
                    y = 0;
                    t = 0;
                    for (var p = t; p < this.cnl.length; p++) {
                        d += this.cnl.charAt(p);
                        k = o.measureText(d).width;
                        if ((this.cnl.charAt(p) == " ") || (this.cnl.charAt(p) == "|")) {
                            v = p
                        }
                        if (p == this.cnl.length - 1) {
                            g[y] = this.cnl.substring(t, this.cnl.length)
                        } else {
                            if (this.cnl.charAt(p) == "|") {
                                g[y] = this.cnl.substring(t, v);
                                y++;
                                t = v + 1;
                                d = this.cnl.substring(v + 1, p)
                            } else {
                                if (k >= this.width - 2 * q) {
                                    g[y] = this.cnl.substring(t, v);
                                    y++;
                                    t = v + 1;
                                    d = this.cnl.substring(v + 1, p)
                                }
                            }
                        }
                    }
                } while (g.length > 2);
                if (g.length > 1 && m == this.god) {
                    o.font = this.byb + " " + (m - 3) + "px " + this.vte;
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
ogu.prototype = new rjl;

function mpw() {
    this.twr = null;
    this.wqj = null;
    this.aag = null;
    this.dpk = false;
    this.ovn = false;
    this.hwa = true;
    this.nsd = false;
    this.ghh = false;
    this.syx = 0;
    this.yyo = 0;
    this.joj = 0;
    this.jkw = "";
    this.aaz = "";
    this.ujh = null;
    this.dhu = null;
    this.vte = "arial";
    this.byb = "bold";
    this.nem = "arial";
    this.kwf = "rgb(0,0,200)";
    this.vms = "rgb(255,255,255)";
    this.iqp = "rgb(0,0,150)";
    this.uch = "rgb(220,240,255)";
    this.uof = "rgb(130,220,255)";
    this.zio = "rgb(130,190,255)";
    this.txc = "rgb(255,255,255)";
    this.ick = "rgb(130,190,255)";
    this.nka = "rgb(100,160,255)";
    this.kbq = "rgb(255,255,255)";
    this.quz = new njt();
    this.eeu = null;
    this.szv = null;
    this.rbp = null;
    this.pnc = null;
    this.nxn = null;
    this.mcf = null;
    this.yys = null;
    this.edc = null;
    this.tdd = 2;
    this.zyc = 3;
    this.ybc = 10;
    this.vnh = 3;
    this.hkv = 5;
    this.sgj = 36;
    this.god = 30;
    this.hfd = 22;
    this.qtx = function(a, c, b) {
        mpw.prototype.qtx.call(this, a, c, b);
        this.nsd = vmg.rkn.value37
    };
    this.vqo = function(b) {
        try {
            var a = (vmg.rkn.value37) ? b.ojv : b.vqn;
            this.eeu = b.lnu;
            this.szv = b.ttn;
            this.rbp = b.diz;
            this.pnc = b.vhy;
            this.nxn = b.yjg;
            this.mcf = b.xhe;
            this.quz = b.teu;
            this.sgj = b.jsd;
            this.god = b.fontSize;
            this.hfd = b.nta;
            this.vnh = b.ccr;
            this.hkv = b.ndq;
            this.tdd = b.skr;
            this.zyc = b.qmg;
            this.ybc = b.vnm;
            if (vmg.rkn.value36) {
                this.aaz = this.parent.zoy(this.parent.language.rye)
            } else {
                if (vmg.rkn.value37) {
                    this.aaz = this.parent.zoy(this.parent.language.wgs)
                }
            }
            this.twr = [];
            this.wqj = this.xxb(a.khw, this.parent.language.ret, this.parent.uho, (this.parent.ple.cli === false) ? this.parent.vcv.kos("btn") : this.parent.vcv.kos("btn_re"), b.uco);
            this.twr.push(this.wqj);
            if (vmg.rkn.value37) {
                this.aag = this.xxb(a.kmn, this.parent.language.fkv, this.parent.rir, (this.parent.ple.cli === false) ? this.parent.vcv.kos("btn") : this.parent.vcv.kos("btn_e"), b.uco);
                this.twr.push(this.aag)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.iub = function(b) {
        try {
            var a = (vmg.rkn.value37) ? b.ojv : b.vqn;
            this.eeu = b.lnu;
            this.szv = b.ttn;
            this.rbp = b.diz;
            this.pnc = b.vhy;
            this.nxn = b.yjg;
            this.mcf = b.xhe;
            this.quz = b.teu;
            if (this.wqj) {
                this.wqj.clq(a.khw);
                this.wqj.iub(b.uco)
            }
            if (this.aag) {
                this.aag.clq(a.kmn);
                this.aag.iub(b.uco)
            }
            this.sgj = b.jsd;
            this.god = b.fontSize;
            this.hfd = b.nta;
            this.vnh = b.ccr;
            this.hkv = b.ndq;
            this.tdd = b.skr;
            this.zyc = b.qmg;
            this.ybc = b.vnm
        } catch (c) {
            console.error(c)
        }
    };
    this.zpb = function(c) {
        try {
            this.vte = c.font;
            this.byb = c.out;
            this.kwf = c.wwf;
            this.vms = c.mmg;
            this.iqp = c.txg;
            this.uch = c.backgroundColor;
            this.uof = c.eto;
            this.zio = c.xxi;
            this.txc = c.wkr;
            this.ick = c.dpa;
            this.nka = c.rop;
            this.kbq = c.ykd;
            this.ujh = c.vox;
            this.dhu = c.ksr;
            for (var b = 0, a = this.twr.length; b < a; b++) {
                this.twr[b].zpb((this.parent.ple.fer === true) ? c.jnt : c.dfa)
            }
        } catch (d) {
            console.error(d)
        }
    };
    this.doc = function(d, k) {
        var c = d - this.x,
            g = k - this.y;
        for (var f = 0, b = this.twr.length; f < b; f++) {
            var a = this.twr[f];
            if (c >= a.x && c <= a.x + a.width && g >= a.y && g <= a.y + a.height && a.roy() === true) {
                if (a.yfs() === true && a.vey() === false && this.hwa) {
                    a.xjb(true, true);
                    this.parent.vcv.acn("btn");
                    this.parent.vcv.ixm("btn");
                    a.pxk();
                    for (var e = 0; e < b; e++) {
                        this.twr[e].xon(true)
                    }
                    return true
                }
            }
        }
        if (c >= this.mcf.x && c <= this.mcf.x + this.mcf.width && g >= this.mcf.y && g <= this.mcf.y + this.mcf.height && this.nsd && this.ovn) {
            this.nrl()
        }
        return true
    };
    this.ecg = function() {};
    this.bhd = function() {};
    this.vin = function() {};
    this.xxb = function(d, f, e, a, c) {
        var b = new zsj();
        b.qtx(d, this.context2D, null, a, null, f);
        b.parent = this;
        b.pxk = e;
        b.iub(c);
        return b
    };
    this.wfd = function(c) {
        this.ovn = c;
        for (var b = 0, a = this.twr.length; b < a; b++) {
            this.twr[b].ged(c)
        }
    };
    this.nrl = function() {
        this.hwa = !this.hwa;
        this.parent.vnf()
    };
    this.utm = function(d, a, c, b) {
        this.ghh = false;
        this.scy = true;
        this.jkw = this.pef(b);
        this.syx = d;
        this.yyo = a;
        this.joj = c;
        if (this.roy()) {
            this.wfd(true);
            this.vnf()
        }
    };
    this.pef = function(b) {
        var d = Math.floor(b / 3600000);
        b = b - d * 3600000;
        var a = Math.floor(b / 60000);
        b = b - a * 60000;
        var c = Math.floor(b / 1000);
        return this.gci(d) + ":" + this.gci(a) + ":" + this.gci(c)
    };
    this.gci = function(a) {
        if (a < 10) {
            return "0" + a
        }
        return a
    };
    this.ohw = function(a, b) {
        this.ghh = a;
        if (b && b === true) {
            this.vnf()
        }
    };
    this.hgk = function(a, b) {
        this.scy = false;
        if (vmg.rkn.value37) {
            this.hwa = false
        }
        this.ohw(a, false);
        mpw.prototype.hgk.call(this, a, b)
    };
    this.vnf = function(j, f, k, d) {
        if (!this.roy() || !this.parent.ufa()) {
            return
        }
        var a = (j != null && f != null && k != null && d != null),
            g = null,
            l = this.context2D,
            c = this.parent.vcv.kos("btn_back");
        l.save();
        if (a) {
            l.beginPath();
            l.rect(j, f, k, d);
            l.closePath();
            l.clip()
        }
        l.fillStyle = this.uch;
        l.fillRect(0, 0, this.width, this.height);
        if (c) {
            g = l.createLinearGradient(this.quz.x, this.quz.y, this.quz.x + this.quz.width, this.quz.y);
            g.addColorStop(0.2, this.ujh);
            g.addColorStop(1, this.dhu);
            l.fillStyle = g;
            l.save();
            if (this.parent.cio === vmg.ple.hso) {
                l.translate(this.quz.width / 2, this.quz.height / 2);
                l.rotate(Math.PI);
                l.translate(-this.quz.width / 2, -this.quz.height / 2)
            }
            l.fillRect(this.quz.x, this.quz.y, this.quz.width, this.quz.height);
            l.drawImage(c, this.quz.x, this.quz.y, this.quz.width, this.quz.height);
            l.restore()
        } else {
            if (this.parent.ple.fer === true) {
                vmg.arb.lux(l, this.quz.x, this.quz.y, this.quz.width, this.quz.height, this.ujh, 1)
            }
        }
        vmg.arb.arg(l, this.eeu.x, this.eeu.y, this.eeu.width, this.eeu.height, 0, this.uof);
        vmg.arb.mqr(l, this.aaz, this.txc, this.eeu.x, this.eeu.y + this.vnh, this.eeu.width, this.eeu.height, this.vte, this.sgj, this.byb);
        vmg.arb.arg(l, this.szv.x, this.szv.y, this.szv.width, this.szv.height, 0, this.uof);
        if (vmg.rkn.value36) {
            vmg.arb.mft(l, this.parent.zoy(this.parent.language.qhh), this.txc, this.szv.x, this.szv.y + this.vnh, this.szv.width, this.szv.height, this.vte, this.god, this.byb, this.hkv)
        } else {
            if (vmg.rkn.value37) {
                vmg.arb.mft(l, this.parent.zoy(this.parent.language.mvv), this.txc, this.szv.x, this.szv.y + this.vnh, this.szv.width, this.szv.height, this.vte, this.god, this.byb, this.hkv)
            }
        }
        vmg.arb.arg(l, this.rbp.x, this.rbp.y, this.rbp.width, this.rbp.height, 0, this.zio);
        vmg.arb.mft(l, this.parent.zoy(this.parent.language.hpk), this.txc, this.rbp.x, this.rbp.y + this.vnh, this.rbp.width, this.rbp.height, this.vte, this.god, this.byb, this.hkv);
        vmg.arb.arg(l, this.pnc.x, this.pnc.y, this.pnc.width, this.pnc.height, 0, this.uof);
        vmg.arb.mft(l, this.parent.zoy(this.parent.language.ank), this.txc, this.pnc.x, this.pnc.y + this.vnh, this.pnc.width, this.pnc.height, this.vte, this.god, this.byb, this.hkv);
        if (this.nsd) {
            this.zud(l)
        }
        if (this.scy) {
            if (vmg.rkn.value36) {
                vmg.arb.fow(l, this.syx, this.txc, this.szv.x, this.szv.y + this.vnh, this.szv.width, this.szv.height, this.vte, this.god, this.byb, this.hkv)
            } else {
                if (vmg.rkn.value37) {
                    vmg.arb.fow(l, this.jkw, this.txc, this.szv.x, this.szv.y + this.vnh, this.szv.width, this.szv.height, this.vte, this.god, this.byb, this.hkv)
                }
            }
            vmg.arb.fow(l, this.parent.txb(this.yyo), this.txc, this.rbp.x, this.rbp.y + this.vnh, this.rbp.width, this.rbp.height, this.vte, this.god, this.byb, this.hkv);
            vmg.arb.fow(l, this.parent.txb(this.joj), this.txc, this.pnc.x, this.pnc.y + this.vnh, this.pnc.width, this.pnc.height, this.vte, this.god, this.byb, this.hkv)
        }
        for (var b = 0, e = this.twr.length; b < e; b++) {
            this.twr[b].vnf()
        }
        if (this.ghh) {
            vmg.arb.ijq(l, this.nxn.x, this.nxn.y, this.nxn.width, this.nxn.height, this.zyc, this.kwf, 0.3, this.iqp, this.tdd, 1);
            vmg.arb.mqr(l, this.parent.zoy(this.parent.language.nww), this.vms, this.nxn.x, this.nxn.y, this.nxn.width, this.nxn.height, this.vte, this.god, this.byb)
        }
        l.restore();
        if (this.stf && this.edu) {
            if (a) {
                this.stf.drawImage(this.edu, j, f, k, d, this.x + j, this.y + f, k, d)
            } else {
                this.stf.drawImage(this.edu, this.x, this.y)
            }
        }
    };
    this.zud = function(b) {
        var c = Math.round(this.mcf.height / 2),
            a = Math.round(this.mcf.x + c),
            d = Math.round(this.mcf.y + c / 2);
        b.save();
        vmg.arb.arg(b, this.mcf.x, this.mcf.y, this.mcf.width, this.mcf.height, this.ybc, this.ick, this.nka, this.tdd);
        vmg.arb.mqr(b, this.parent.language.oxo, this.txc, this.mcf.x + this.mcf.height, this.mcf.y, this.mcf.width - this.mcf.height, this.mcf.height, this.vte, this.hfd, this.byb);
        vmg.arb.lux(b, a, d, c, c, null, 0, this.kbq, this.tdd, 1);
        if (this.hwa) {
            vmg.arb.lux(b, a + c / 4, d + c / 4, c / 2, c / 2, this.kbq, 1)
        }
        b.restore()
    }
}
mpw.prototype = new rjl;

function eea() {
    var a = this;
    this.faw = function() {
        a.tyr = false
    };
    this.vnf = function() {
        if (!this.roy()) {
            return
        }
        var b = this.context2D;
        b.save();
        if (this.jyy != null) {
            b.drawImage(this.jyy, 0, 0, this.jyy.width, this.jyy.height, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
eea.prototype = new qla;

function jmu() {
    this.qxj = "";
    this.mpv = "";
    this.jyy = null;
    this.yuf = "sans-serif";
    this.oga = "sans-serif";
    this.byb = "bold";
    this.olf = null;
    this.txc = null;
    this.wgr = null;
    this.sik = null;
    this.uch = null;
    this.doh = 16;
    this.imi = 20;
    this.fcy = 0;
    this.dvr = 0;
    this.tdd = 2;
    this.zoo = 3;
    this.txe = 3;
    this.rgm = 3;
    this.sfx = 3;
    this.qtx = function(a, e, b, d, c) {
        jmu.prototype.qtx.call(this, a, e, b);
        this.qxj = d;
        this.mpv = c
    };
    this.iub = function(a) {
        try {
            this.doh = a.ucb;
            this.imi = a.jui;
            this.fcy = a.mci;
            this.dvr = a.zmf;
            this.tdd = a.skr;
            this.zoo = a.mpx;
            this.txe = a.vpg;
            this.rgm = a.mxj;
            this.sfx = a.bhw
        } catch (b) {
            console.error(b)
        }
    };
    this.zpb = function(a) {
        try {
            this.yuf = a.mcg;
            this.oga = a.ief;
            this.byb = a.out;
            this.olf = a.ggy;
            this.txc = a.wkr;
            this.wgr = a.borderColor;
            this.sik = a.yrn;
            this.uch = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.rig = function(a, b) {
        this.mpv = a;
        if (b && b === true && this.context2D != null && this.roy() === true) {
            this.parent.vnf(this.x, this.y, this.width, this.height)
        }
    };
    this.tby = function(a, b) {
        this.qxj = a;
        if (b && b === true && this.context2D != null && this.roy() === true) {
            this.parent.vnf(this.x, this.y, this.width, this.height)
        }
    };
    this.vnf = function() {
        if (!this.roy()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.sik) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.wgr);
            b.addColorStop(1, this.sik);
            vmg.arb.xep(a, this.x, this.y, this.width, this.height, this.zoo, this.txe, this.rgm, this.sfx, this.uch, 1, b, this.tdd, 1)
        } else {
            vmg.arb.xep(a, this.x, this.y, this.width, this.height, this.zoo, this.txe, this.rgm, this.sfx, this.uch, 1, this.wgr, this.tdd, 1)
        }
        if (this.qxj != null) {
            vmg.arb.mqr(a, this.qxj, this.olf, this.x + this.tdd, this.y + this.fcy, this.width - 2 * this.tdd, this.height, this.yuf, this.doh, this.byb)
        }
        if (this.mpv != null) {
            if (this.qxj != null) {
                vmg.arb.mqr(a, this.mpv, this.txc, this.x + this.tdd, this.y + this.dvr, this.width - 2 * this.tdd, this.height, this.oga, this.imi, this.byb)
            } else {
                vmg.arb.mqr(a, this.mpv, this.txc, this.x + this.tdd, this.y + this.tdd, this.width - 2 * this.tdd, this.height, this.oga, this.imi, this.byb)
            }
        }
        if (this.jyy) {
            a.drawImage(this.jyy, 0, 0, this.jyy.width, this.jyy.height, this.x + this.tdd, this.y + this.tdd, this.width - 2 * this.tdd, this.height - 2 * this.tdd)
        }
        a.restore();
        if (this.stf && this.edu) {
            this.stf.drawImage(this.edu, this.x, this.y)
        }
    }
}
jmu.prototype = new rjl;

function hit() {
    this.jyy = new Image();
    this.mpv = "";
    this.ggx = true;
    this.vte = null;
    this.byb = "bold";
    this.jlw = "red";
    this.jdf = "orange";
    this.jac = "white";
    this.god = 40;
    this.hkv = 0;
    this.vnh = 0;
    this.pby = 0;
    this.rgg = 2;
    this.zgb = null;
    this.pbz = 0;
    this.dbr = 0;
    this.qtx = function(a, e, c, b, d) {
        hit.prototype.qtx.call(this, a, e, c);
        this.jyy = b;
        this.mpv = d
    };
    this.iub = function(a) {
        try {
            this.god = a.fontSize;
            this.hkv = a.ndq;
            this.vnh = a.ccr;
            this.pby = a.ubd;
            this.rgg = a.xid
        } catch (b) {
            console.error(b)
        }
    };
    this.zpb = function(a) {
        try {
            this.vte = a.font;
            this.byb = a.out;
            this.jlw = a.blg;
            this.jdf = a.rrf;
            this.jac = a.gds
        } catch (b) {
            console.error(b)
        }
    };
    this.rig = function(a, b) {
        this.mpv = a;
        if (b && b === true && this.context2D != null) {
            this.hgk(true, true)
        }
    };
    this.qvu = function(a, b) {
        this.mpv = a;
        this.ggx = false;
        if (b && b === true && this.context2D != null) {
            this.hgk(true, true)
        }
    };
    this.hgk = function(a, b) {
        this.qms = a;
        if (b && b === true && this.context2D != null) {
            if (this.edu == null && this.roy()) {
                this.vnf()
            } else {
                if (this.parent != null) {
                    this.parent.vnf(this.x, this.y, this.width, this.height)
                }
            }
        }
    };
    this.auw = function(a, b, c) {
        this.zgb = a;
        this.pbz = b;
        this.dbr = c
    };
    this.vnf = function() {
        if (!this.roy() || !this.parent.ufa()) {
            return
        }
        var b = this.context2D,
            c = null,
            a = (this.edu != null) ? 0 : this.x,
            d = (this.edu != null) ? 0 : this.y;
        b.save();
        if (this.edu == null) {
            b.beginPath();
            b.rect(this.x, this.y, this.width, this.height);
            b.closePath();
            b.clip()
        }
        if (this.ggx === true) {
            if (this.zgb != null) {
                b.drawImage(this.zgb, this.x + this.pbz, this.y + this.dbr, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            if (this.jyy != null) {
                b.drawImage(this.jyy, a, d)
            }
        }
        c = b.createLinearGradient(a + this.width / 2 + this.hkv, d, a + this.width / 2 + this.hkv, d + this.height);
        c.addColorStop(0, this.jlw);
        c.addColorStop(1, this.jdf);
        vmg.arb.mqr(b, this.mpv, c, a + this.pby + this.hkv, d + this.vnh, this.width - 2 * this.pby, this.height, this.vte, this.god, this.byb, this.jac, this.rgg);
        b.restore();
        if (this.stf && this.edu) {
            this.stf.drawImage(this.edu, this.x, this.y)
        }
    }
}
hit.prototype = new rjl;

function vsv() {
    var a = this;
    this.state = 0;
    this.cvz = 1;
    this.npf = null;
    this.hap = null;
    this.wjl = null;
    this.vkb = "round";
    this.vte = null;
    this.byb = "bold";
    this.ebv = "center";
    this.uch = null;
    this.txc = null;
    this.jsf = 1;
    this.duu = null;
    this.god = 17;
    this.pby = 2;
    this.jqd = 0;
    this.tdd = 1;
    this.zva = 0;
    this.brt = 0;
    this.cud = 0;
    this.iub = function(b) {
        try {
            this.god = b.fontSize;
            this.pby = b.ubd;
            this.jqd = b.ybu;
            this.tdd = b.skr;
            this.cud = b.orp
        } catch (c) {
            console.error(c)
        }
    };
    this.zpb = function(b) {
        try {
            this.vkb = b.shm;
            this.vte = b.font;
            this.byb = b.out;
            this.ebv = b.textAlign;
            this.uch = b.backgroundColor;
            this.txc = b.wkr;
            this.jsf = b.kka;
            if (b.borderColor && b.yrn) {
                this.duu = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.duu.addColorStop(0, b.borderColor);
                this.duu.addColorStop(1, b.yrn)
            } else {
                this.duu = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.luq = function() {
        return this.vkb
    };
    this.ljn = function(c, b) {
        this.state = c;
        this.cvz = b
    };
    this.she = function(b) {
        this.jyy = b;
        if (this.vkb === "round") {
            this.zva = this.width / 2 - this.pby
        }
        if (this.jyy) {
            this.brt = Math.round(this.jyy.height / (2 * this.cvz))
        }
    };
    this.yli = function(b) {
        this.state = (b < this.cvz) ? b : this.state
    };
    this.uwa = function(b) {
        this.npf = b
    };
    this.faw = function() {
        a.tyr = false
    };
    this.yes = function() {
        a.den = false;
        if (a.roy()) {
            a.parent.vnf(a.x, a.y, a.width, a.height)
        }
    };
    this.vnf = function() {
        if (!this.roy()) {
            return
        }
        var l = this.context2D,
            e = (this.yfs()) ? this.jsf : this.jsf / 2,
            b = this.god,
            d = null,
            c = 0,
            k = 0,
            j = 0,
            g = 0;
        l.save();
        if (this.jyy && this.pxk) {
            if (!this.yfs()) {
                l.globalAlpha = e
            }
            if (this.vkb === "round") {
                vmg.arb.uia(l, this.x + this.width / 2, this.y + this.height / 2, this.zva, this.uch, e * this.jsf)
            } else {
                if (this.vkb === "rect") {
                    vmg.arb.ijq(l, this.x, this.y, this.width, this.height, this.jqd, this.uch, e * this.jsf, this.duu, this.tdd, e)
                }
            }
            if (this.eqj()) {
                if (this.vkb === "round") {
                    l.drawImage(this.jyy, 0, (this.state * 2 * this.brt) + this.brt, this.jyy.width, this.brt, this.x, this.y, this.width, this.height)
                } else {
                    if (this.vkb === "rect") {
                        l.drawImage(this.jyy, 0, (this.state * 2 * this.brt) + this.brt, this.jyy.width, this.brt, this.x, this.y, this.width, this.height)
                    }
                }
            } else {
                if (this.vkb === "round") {
                    l.drawImage(this.jyy, 0, (this.state * 2 * this.brt), this.jyy.width, this.brt, this.x, this.y, this.width, this.height)
                } else {
                    if (this.vkb === "rect") {
                        l.drawImage(this.jyy, 0, (this.state * 2 * this.brt), this.jyy.width, this.brt, this.x, this.y, this.width, this.height)
                    }
                }
            }
            if (this.mpv != null) {
                l.textAlign = this.ebv;
                l.textBaseline = "bottom";
                l.font = this.byb + " " + b + "px " + this.vte;
                l.fillStyle = this.txc;
                d = this.mpv.split("|");
                j = 0;
                g = (this.ebv === "center") ? this.x + this.width / 2 : (this.ebv === "left") ? this.x + 2 * this.pby : this.x + this.width - 2 * this.pby;
                for (var f = 0; f < d.length; f++) {
                    j = (l.measureText(d[f]).width > j) ? l.measureText(d[f]).width : j
                }
                if (j > this.width - 2 * this.pby) {
                    c = ((this.width - 2 * this.pby) / j);
                    b = Math.round(c * b) - 1;
                    l.font = this.byb + " " + b + "px " + this.vte
                }
                if (b * d.length > this.cud) {
                    c = ((this.cud) / (b * d.length));
                    b = Math.round(c * b) - 1;
                    l.font = this.byb + " " + b + "px " + this.vte
                }
                k = (this.height - this.pby - this.cud) + (this.cud - b * d.length) / 2;
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
vsv.prototype = new qla;

function xoj() {
    var a = this;
    this.vkb = "rect";
    this.yqt = -1;
    this.vte = null;
    this.byb = "bold";
    this.uch = null;
    this.bnz = null;
    this.dlr = null;
    this.fpq = null;
    this.wgr = null;
    this.txc = null;
    this.bpo = null;
    this.jqd = 3;
    this.hkv = -2;
    this.vnh = 2;
    this.gpg = 6;
    this.god = 26;
    this.tdd = 2;
    this.iub = function(b) {
        try {
            this.god = b.fontSize;
            this.hkv = b.ndq;
            this.vnh = b.ccr;
            this.gpg = b.gfx;
            this.jqd = b.ybu;
            this.tdd = b.skr
        } catch (c) {
            console.error(c)
        }
    };
    this.zpb = function(b) {
        try {
            this.vte = b.font;
            this.byb = b.out;
            this.uch = b.backgroundColor;
            this.bnz = b.dvo;
            this.dlr = b.cfn;
            this.fpq = b.asp;
            this.wgr = b.borderColor;
            this.txc = b.wkr;
            this.bpo = b.tdx;
            this.vkb = b.shm;
            this.yqt = b.xti
        } catch (c) {
            console.error(c)
        }
    };
    this.luq = function() {
        return this.vkb
    };
    this.faw = function() {
        a.tyr = false
    };
    this.yes = function() {
        a.den = false;
        if (a.roy()) {
            a.parent.vnf(a.x, a.y, a.width, a.height)
        }
    };
    this.vnf = function() {
        if (!this.roy()) {
            return
        }
        var p = this.context2D,
            l = null,
            n = this.uch,
            m = this.bnz,
            b = this.god,
            f = null,
            d = 0,
            o = 0,
            c = 1,
            k = 0,
            e = (this.yqt == 0 || this.yqt == 3) ? this.jqd : 0;
        lt = (this.yqt == 1 || this.yqt == 3) ? this.jqd : 0;
        rb = (this.yqt == 0 || this.yqt == 2) ? this.jqd : 0;
        lb = (this.yqt == 1 || this.yqt == 2) ? this.jqd : 0;
        h = 0;
        p.save();
        p.lineJoin = "round";
        p.lineCap = "round";
        p.textAlign = "center";
        if (this.eqj()) {
            n = (this.dlr != null) ? this.dlr : n;
            m = (this.fpq != null) ? this.fpq : m
        }
        if (n != null) {
            if (m != null) {
                l = p.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                l.addColorStop(1, m);
                l.addColorStop(0, n);
                if (this.vkb === "rrect") {
                    vmg.arb.xep(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, l, 1, this.wgr, this.tdd, 1)
                } else {
                    if (this.vkb === "rect") {
                        if (this.wgr) {
                            vmg.arb.arg(p, this.x, this.y, this.width, this.height, this.jqd, l, this.wgr, this.tdd)
                        } else {
                            vmg.arb.lux(p, this.x, this.y, this.width, this.height, l, 1)
                        }
                    } else {
                        if (this.vkb === "triangle") {
                            vmg.arb.cct(p, this.yqt, this.x, this.y, this.width, this.height, this.jqd, l, 1, this.wgr, this.tdd, 1)
                        }
                    }
                }
            } else {
                if (this.vkb === "rrect") {
                    vmg.arb.xep(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, n, 1, this.wgr, this.tdd, 1)
                } else {
                    if (this.vkb === "rect") {
                        if (this.wgr) {
                            vmg.arb.arg(p, this.x, this.y, this.width, this.height, this.jqd, n, this.wgr, this.tdd, 1)
                        } else {
                            vmg.arb.lux(p, this.x, this.y, this.width, this.height, n, 1)
                        }
                    } else {
                        if (this.vkb === "triangle") {
                            vmg.arb.cct(p, this.yqt, this.x, this.y, this.width, this.height, this.jqd, n, 1, this.wgr, this.tdd, 1)
                        }
                    }
                }
            }
        }
        if (this.jyy != null) {
            h = this.height - 2 * this.gpg;
            p.drawImage(this.jyy, this.x + this.width / 2 - h / 2, this.y + this.gpg, h, h)
        }
        if (this.mpv != null) {
            p.textAlign = "center";
            p.textBaseline = "bottom";
            f = this.mpv.split("|");
            d = 0;
            if (this.eqj()) {
                d = 1;
                p.fillStyle = this.bpo
            } else {
                p.fillStyle = this.txc
            }
            p.font = this.byb + " " + b + "px " + this.vte;
            for (var g = 0, j = f.length; g < j; g++) {
                o = (p.measureText(f[g]).width > o) ? p.measureText(f[g]).width : o
            }
            if (o > this.width - 2 * this.gpg) {
                c = ((this.width - 2 * this.gpg) / o);
                b = Math.round(c * b) - 1;
                p.font = this.byb + " " + b + "px " + this.vte
            }
            if (b * f.length > this.height) {
                c = ((this.height) / (b * f.length));
                b = Math.round(c * b) - 1;
                p.font = this.byb + " " + b + "px " + this.vte
            }
            k = (this.height - b * f.length) / 2;
            k += b;
            for (var g = 0; g < f.length; g++) {
                p.fillText(f[g], (this.x + this.width / 2) + this.hkv, this.y - this.vnh + k + d);
                k += b
            }
        }
        p.restore()
    }
}
xoj.prototype = new qla;

function bie() {
    var a = this;
    this.mpv = null;
    this.ovn = false;
    this.tyr = false;
    this.wqh = false;
    this.vte = null;
    this.byb = "bold";
    this.ebv = "center";
    this.uch = null;
    this.wgr = null;
    this.txc = null;
    this.kyv = "rect";
    this.viy = new njt();
    this.bee = new njt();
    this.god = 16;
    this.jqd = 8;
    this.tdd = 1;
    this.fwr = 0;
    var b = 200;
    this.qtx = function(c, f, d, e) {
        this.mpv = e;
        bie.prototype.qtx.call(this, c, f, d)
    };
    this.zpb = function(c) {
        try {
            this.vte = c.font;
            this.byb = c.out;
            this.ebv = c.textAlign;
            this.uch = c.backgroundColor;
            this.wgr = c.borderColor;
            this.txc = c.wkr;
            this.kyv = c.type
        } catch (d) {
            console.error(d)
        }
    };
    this.iub = function(c) {
        try {
            this.viy = c.xjz;
            this.bee = c.ity;
            this.god = c.fontSize;
            this.jqd = c.ybu;
            this.tdd = c.skr
        } catch (d) {
            console.error(d)
        }
    };
    this.ged = function(c) {
        this.ovn = c
    };
    this.yfs = function() {
        return this.ovn
    };
    this.gkb = function(c, d) {
        this.wqh = c;
        if (d && d === true) {
            this.parent.vnf(this.x, this.y, this.width, this.height)
        }
    };
    this.aoi = function() {
        return this.wqh
    };
    this.rig = function(c, d) {
        this.mpv = c;
        if (d && d === true && this.roy()) {
            this.parent.vnf(this.x, this.y, this.width, this.height)
        }
    };
    this.xon = function(c, d) {
        this.tyr = c;
        d = (d === false) ? false : true;
        clearTimeout(this.fwr);
        if (this.tyr === true && d === true) {
            this.fwr = setTimeout(this.faw, b)
        }
    };
    this.vey = function() {
        return this.tyr
    };
    this.faw = function() {
        a.tyr = false
    };
    this.vnf = function() {
        if (!this.roy()) {
            return
        }
        var c = this.context2D;
        c.save();
        vmg.arb.arg(c, this.x, this.y, this.width, this.height, this.jqd, this.uch, this.wgr, this.tdd);
        if (this.kyv === "rect") {
            vmg.arb.lux(c, this.x + this.bee.x, this.y + this.bee.y, this.bee.width, this.bee.height, this.txc, 0.2, this.txc, this.tdd, 1);
            if (this.wqh === true) {
                vmg.arb.lux(c, this.x + this.bee.x + this.bee.width / 4, this.y + this.bee.y + this.bee.height / 4, this.bee.width / 2, this.bee.height / 2, this.txc, 1)
            }
        } else {
            if (this.kyv === "round") {
                vmg.arb.uia(c, this.x + this.bee.x + this.bee.width / 2, this.y + this.bee.y + this.bee.height / 2, this.bee.width / 2, this.txc, 0.2, this.txc, this.tdd, 1);
                if (this.wqh === true) {
                    vmg.arb.uia(c, this.x + this.bee.x + this.bee.width / 2, this.y + this.bee.y + this.bee.height / 2, this.bee.width / 4, this.txc, 1)
                }
            }
        }
        if (this.mpv && this.mpv != "") {
            vmg.arb.vxv(c, this.mpv, this.txc, this.x + this.viy.x, this.y + this.viy.y, this.viy.width, this.viy.height, this.vte, this.god, this.byb, this.ebv, true)
        }
        c.restore();
        if (this.stf && this.edu) {
            this.stf.drawImage(this.edu, this.x, this.y)
        }
    };
    this.pxk = {}
}
bie.prototype = new rjl;

function zya() {
    var b = this;
    var c = 0;
    var a = 1;
    this.llm = null;
    this.qxj = "";
    this.vor = "";
    this.igp = "";
    this.vcx = "";
    this.snb = false;
    this.syx = [];
    this.nut = 0;
    this.aat = 0;
    this.bwj = 0;
    this.rxm = 0;
    this.mjj = 0;
    this.hnb = 0;
    this.vnn = 0;
    this.vzv = 0;
    this.huo = false;
    this.sdd = false;
    this.vak = false;
    this.kyv = "center";
    this.vte = "arial";
    this.byb = "bold";
    this.olf = "white";
    this.txc = "white";
    this.uch = "black";
    this.bnz = null;
    this.wgr = "white";
    this.sik = "rgb(150,150,150)";
    this.ujh = null;
    this.fgy = null;
    this.tdd = 3;
    this.lxg = 0;
    this.cva = 0;
    this.wpq = 0;
    this.doh = 30;
    this.idq = 24;
    this.eeu = new njt();
    this.aii = new njt();
    this.jvo = new njt();
    this.vgn = new njt();
    this.axw = new njt();
    this.sbq = new njt();
    this.yek = new njt();
    this.xqc = new njt();
    this.zaz = new njt();
    this.tir = 7;
    this.sac = 0;
    this.hxi = 0;
    this.weu = 0;
    this.vyz = c;
    this.nqh = 0;
    this.jef = 89;
    this.dti = false;
    this.klg = 0;
    this.xzn = 0;
    this.apq = 0;
    this.gdw = 0;
    this.oqh = null;
    this.gwy = 0;
    this.fkw = 1;
    this.thx = 250;
    this.qtx = function(d, f, e) {
        zya.prototype.qtx.call(this, d, f, e);
        this.llm = new fsv();
        this.llm.qtx();
        this.llm.haq("buttons");
        this.llm.haq("checkboxes");
        this.llm.haq("displays");
        this.llm.haq("lbuttons");
        this.llm.haq("mbuttons");
        this.llm.haq("vbuttons");
        this.llm.haq("cbuttons")
    };
    this.vqo = function(d) {
        try {
            this.nlz(d);
            this.kro(d)
        } catch (f) {
            console.error(f)
        }
    };
    this.zpb = function(k) {
        try {
            var n = this.llm.wnf("lbuttons"),
                m = this.llm.wnf("mbuttons"),
                f = this.llm.wnf("cbuttons"),
                g = this.llm.wnf("displays");
            this.kyv = k.type;
            this.vte = k.font;
            this.byb = k.out;
            this.olf = k.ggy;
            this.txc = k.wkr;
            this.uch = k.backgroundColor;
            this.bnz = k.dvo;
            this.wgr = k.borderColor;
            this.ujh = k.vox;
            this.fgy = k.pam;
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].zpb(k.poj)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].zpb(k.iwv)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].zpb(k.meg)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].zpb(k.display)
            }
            this.llm.qgo("checkboxes", "#zpb", [k.vph])
        } catch (l) {
            console.error(l)
        }
    };
    this.iub = function(k) {
        try {
            var n = this.llm.wnf("lbuttons"),
                m = this.llm.wnf("mbuttons"),
                f = this.llm.wnf("cbuttons"),
                g = this.llm.wnf("displays");
            this.tdd = k.skr;
            this.lxg = k.fez;
            this.cva = k.iln;
            this.wpq = k.sug;
            this.doh = k.ucb;
            this.idq = k.zby;
            this.eeu = k.lnu;
            this.aii = k.oad;
            this.jvo = k.dlh;
            this.vgn = k.vlk;
            this.axw = k.kvi;
            this.sbq = k.kdk;
            this.llm.wrv("lgames", "#clq", [k.och]);
            this.llm.wrv("mgames", "#clq", [k.mxr]);
            this.llm.wrv("lmincredit", "#clq", [k.ofa]);
            this.llm.wrv("mmincredit", "#clq", [k.zls]);
            this.llm.wrv("lmaxcredit", "#clq", [k.qyu]);
            this.llm.wrv("mmaxcredit", "#clq", [k.kbr]);
            this.llm.wrv("lmaxwin", "#clq", [k.oha]);
            this.llm.wrv("mmaxwin", "#clq", [k.hmc]);
            this.llm.wrv("start", "#clq", [k.jzl]);
            this.llm.wrv("cancel", "#clq", [k.hvm]);
            this.llm.wrv("gamesd", "#clq", [k.feg]);
            this.llm.wrv("mincreditd", "#clq", [k.whd]);
            this.llm.wrv("maxcreditd", "#clq", [k.cyr]);
            this.llm.wrv("maxwind", "#clq", [k.chn]);
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].iub(k.poj)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].iub(k.iwv)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].iub(k.meg)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].iub(k.display)
            }
            this.llm.wrv("cmincredit", "#clq", [k.dju]);
            this.llm.wrv("cmaxcredit", "#clq", [k.maa]);
            this.llm.wrv("cmaxwin", "#clq", [k.qhs]);
            this.llm.qgo("checkboxes", "#iub", [k.vph])
        } catch (l) {
            console.error(l)
        }
    };
    this.nlz = function(d) {
        this.llm.mwl("start", this.xxb(d.jzl, this.parent.language.start, this.emg, this.parent.gky.ufm), ["buttons", "cbuttons"]);
        this.llm.mwl("cancel", this.xxb(d.hvm, this.parent.language.zyj, this.qqa, this.parent.gky.bxk), ["buttons", "cbuttons"]);
        this.llm.mwl("lgames", this.xxb(d.och, "", this.rqg, null), ["buttons", "lbuttons", "vbuttons"]);
        this.llm.mwl("mgames", this.xxb(d.mxr, "+", this.huu, null), ["buttons", "mbuttons", "vbuttons"]);
        this.llm.mwl("lmincredit", this.xxb(d.ofa, "", this.wjm, null), ["buttons", "lbuttons", "vbuttons"]);
        this.llm.mwl("mmincredit", this.xxb(d.zls, "+", this.vkt, null), ["buttons", "mbuttons", "vbuttons"]);
        this.llm.mwl("lmaxcredit", this.xxb(d.qyu, "", this.wku, null), ["buttons", "lbuttons", "vbuttons"]);
        this.llm.mwl("mmaxcredit", this.xxb(d.kbr, "+", this.ohz, null), ["buttons", "mbuttons", "vbuttons"]);
        this.llm.mwl("lmaxwin", this.xxb(d.oha, "", this.ukq, null), ["buttons", "lbuttons", "vbuttons"]);
        this.llm.mwl("mmaxwin", this.xxb(d.hmc, "+", this.eqb, null), ["buttons", "mbuttons", "vbuttons"]);
        this.llm.mwl("cmincredit", this.pif(d.dju, "", this.ozm), ["checkboxes"]);
        this.llm.mwl("cmaxcredit", this.pif(d.maa, "", this.pce), ["checkboxes"]);
        this.llm.mwl("cmaxwin", this.pif(d.qhs, "", this.zhv), ["checkboxes"])
    };
    this.kro = function(d) {
        this.llm.mwl("gamesd", this.rsj(d.feg, null, (this.syx[this.nut] > 0) ? this.syx[this.nut] : "---"), ["displays"]);
        this.llm.mwl("mincreditd", this.rsj(d.whd, null, "---"), ["displays"]);
        this.llm.mwl("maxcreditd", this.rsj(d.cyr, null, "---"), ["displays"]);
        this.llm.mwl("maxwind", this.rsj(d.chn, null, "---"), ["displays"])
    };
    this.rsj = function(d, g, f) {
        var e = new jmu();
        e.qtx(d, this.context2D, null, g, f);
        e.parent = this;
        return e
    };
    this.xxb = function(f, i, g, e) {
        var d = new xoj();
        d.qtx(f, this.context2D, null, null, i);
        d.parent = this;
        d.pxk = g;
        if (e) {
            d.vii = e.tji
        }
        return d
    };
    this.pif = function(e, g, f) {
        var d = new bie();
        d.qtx(e, this.context2D, null, g);
        d.parent = this;
        d.pxk = f;
        return d
    };
    this.doc = function(r, n) {
        var s = this.llm.wnf("vbuttons"),
            l = this.llm.wnf("cbuttons"),
            g = this.llm.wnf("checkboxes"),
            p = this.llm.ejh("cancel"),
            q = r - this.x,
            o = n - this.y;
        if (this.vnj) {
            return true
        }
        if ((!p || !p.roy()) && (r < this.x || r > this.x + this.width || n < this.y || n > this.y + this.height)) {
            this.vak = true;
            this.qaz();
            return true
        }
        for (var f = 0, m = s.length; f < m; f++) {
            var d = s[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.roy() === true && d.yfs() === true && d.vey() === false) {
                    d.xjb(true, false, false);
                    this.gwy = 0;
                    this.fkw = 1;
                    if (d.pxk() === false) {
                        this.oqh = function() {
                            if (d.pxk() === true) {
                                clearInterval(b.gdw);
                                d.xjb(false, false);
                                b.parent.vnf();
                                for (var i = 0; i < m; i++) {
                                    s[i].xon(false)
                                }
                            }
                        };
                        this.gdw = setInterval(this.oqh, this.thx)
                    }
                    for (var e = 0; e < m; e++) {
                        s[e].xon(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = l.length; f < m; f++) {
            var d = l[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.roy() === true && d.yfs() === true) {
                    this.parent.vcv.acn("btn");
                    this.parent.vcv.ixm("btn");
                    d.xjb(true, false);
                    d.pxk();
                    for (var e = 0; e < m; e++) {
                        l[e].xon(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = g.length; f < m; f++) {
            var k = g[f];
            if (q >= k.x && q <= k.x + k.width && o >= k.y && o <= k.y + k.height) {
                if (k.roy() === true && k.yfs() === true) {
                    k.gkb(!k.aoi(), true);
                    k.pxk();
                    for (var e = 0; e < m; e++) {
                        g[e].xon(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.ecg = function() {
        var e = this.llm.wnf("vbuttons"),
            j = this.llm.wnf("cbuttons");
        for (var g = 0, d = e.length; g < d; g++) {
            var f = e[g];
            if (f.eqj() == true) {
                clearInterval(this.gdw);
                f.xjb(false, false);
                this.parent.vnf();
                return true
            }
        }
        for (var g = 0, d = j.length; g < d; g++) {
            var f = j[g];
            if (f.eqj() == true) {
                f.xjb(false, false);
                this.parent.vnf();
                return true
            }
        }
        return false
    };
    this.bhd = function(l) {
        var k = this.llm.wnf("buttons");
        if (this.vnj) {
            return true
        }
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l == f.vii) {
                if (f.yfs() && !f.vey()) {
                    this.parent.vcv.acn("btn");
                    this.parent.vcv.ixm("btn");
                    f.xjb(true, false);
                    f.pxk();
                    for (var e = 0; e < d; e++) {
                        k[e].xon(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.vin = function() {
        var g = this.llm.wnf("buttons");
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.eqj() == true) {
                e.xjb(false, false);
                this.parent.vnf();
                return true
            }
        }
        return false
    };
    this.wfd = function(d) {
        this.llm.qgo("buttons", "#ged", [d]);
        this.llm.qgo("checkboxes", "#ged", [d]);
        if (d === true && this.sdd === true) {
            this.llm.wrv("cmincredit", "#ged", [false])
        }
    };
    this.vfa = function(d) {
        this.syx = d.g;
        this.aat = d.v;
        this.bwj = d.v;
        this.huo = d.r;
        this.sdd = d.l;
        if (typeof d.m != "undefined" && d.m != null && d.m > 0) {
            this.rxm = d.m;
            this.mjj = d.m
        }
    };
    this.frm = function() {
        if (this.huo === true) {
            this.hnb = this.parent.qvw;
            this.vnn = this.parent.qvw;
            this.nut = 0;
            this.vzv = 0
        }
    };
    this.bcj = function() {
        if (this.syx.length > 0 && this.nut >= 0 && this.vak === false) {
            return this.syx[this.nut]
        }
        return 0
    };
    this.xhb = function() {
        var d = this.llm.ejh("cmincredit") == null || this.llm.wrv("cmincredit", "#aoi");
        if (this.hnb > 0 && d === true) {
            return this.hnb
        }
        return 0
    };
    this.npm = function() {
        var d = this.llm.ejh("cmaxcredit") == null || this.llm.wrv("cmaxcredit", "#aoi");
        if (this.vnn > 0 && d === true) {
            return this.vnn
        }
        return 0
    };
    this.ikt = function() {
        var d = this.llm.ejh("cmaxwin") == null || this.llm.wrv("cmaxwin", "#aoi");
        if (this.vzv > 0 && d === true) {
            return this.vzv
        }
        return 0
    };
    this.fjz = function() {
        var f = this.llm.ejh("cmincredit") == null || this.llm.wrv("cmincredit", "#aoi"),
            d = this.llm.ejh("cmaxcredit") == null || this.llm.wrv("cmaxcredit", "#aoi"),
            e = this.llm.ejh("cmaxwin") == null || this.llm.wrv("cmaxwin", "#aoi");
        this.dti = false;
        this.vak = false;
        this.bwj = (this.mjj > 0) ? this.parent.qyo() * this.mjj : this.bwj;
        this.aat = (this.rxm > 0) ? this.parent.qyo() * this.rxm : this.aat;
        if (this.huo === true) {
            f = this.sdd;
            d = false;
            e = false;
            this.frm()
        } else {
            if (this.sdd === true) {
                f = true;
                this.hnb = (this.hnb < this.parent.qvw) ? this.hnb : this.parent.qvw;
                this.hnb = (this.hnb > 0) ? this.hnb : this.parent.qvw
            } else {
                f = (this.hnb <= this.parent.qvw) ? f : false;
                this.hnb = (this.hnb < this.parent.qvw) ? this.hnb : this.parent.qvw
            }
            d = (this.vnn >= this.parent.qvw) ? d : false;
            this.vnn = (this.vnn > this.parent.qvw) ? this.vnn : this.parent.qvw
        }
        this.llm.wrv("cmincredit", "#gkb", [f]);
        this.llm.wrv("cmaxcredit", "#gkb", [d]);
        this.llm.wrv("cmaxwin", "#gkb", [e]);
        this.llm.wrv("gamesd", "#rig", [(this.syx[this.nut] > 0) ? this.syx[this.nut] : "---"]);
        this.llm.wrv("mincreditd", "#rig", [(f === true && this.hnb > 0) ? this.parent.txb(this.hnb) : "---"]);
        this.llm.wrv("maxcreditd", "#rig", [(d === true && this.vnn > 0) ? this.parent.txb(this.vnn) : "---"]);
        this.llm.wrv("maxwind", "#rig", [(e === true && this.vzv > 0) ? this.parent.txb(this.vzv) : "---"]);
        this.llm.wrv("lmincredit", "#hgk", [f]);
        this.llm.wrv("mmincredit", "#hgk", [f && this.hnb < this.parent.qvw]);
        this.llm.wrv("lmaxcredit", "#hgk", [d && this.vnn > this.parent.qvw]);
        this.llm.wrv("mmaxcredit", "#hgk", [d]);
        this.llm.wrv("lmaxwin", "#hgk", [e && this.vzv > this.bwj]);
        this.llm.wrv("mmaxwin", "#hgk", [e]);
        if (this.snb === false) {
            this.wfd(true);
            this.hgk(true);
            this.parent.vnf()
        } else {
            this.tif();
            this.parent.vcv.acn("panel_out");
            this.parent.vcv.ixm("panel_out");
            this.rpi()
        }
    };
    this.qaz = function() {
        b.wfd(false);
        if (b.snb === false) {
            b.hgk(false);
            b.parent.vnf()
        } else {
            b.bfg();
            b.parent.vcv.acn("panel_out");
            b.parent.vcv.ixm("panel_out");
            b.rpi()
        }
    };
    this.tif = function() {
        this.hgk(true);
        this.vnj = true;
        this.ovn = false;
        this.vyz = c;
        this.sac = Math.floor(this.width / this.tir);
        this.weu = 0;
        this.hxi = 0;
        this.nqh = new Date().getTime()
    };
    this.bfg = function() {
        this.vnj = true;
        this.ovn = false;
        this.vyz = a;
        this.sac = -Math.floor(this.width / this.tir);
        this.weu = 1;
        this.hxi = this.width;
        this.nqh = new Date().getTime()
    };
    this.rpi = function() {
        var d = b.jef,
            e = new Date().getTime();
        if (b.weu < b.tir) {
            b.hxi += b.sac;
            b.weu++;
            b.parent.vnf();
            d = (((b.vyz === a) ? b.weu - 1 : b.weu) * b.jef - (e - b.nqh));
            b.klg = setTimeout(b.rpi, d)
        } else {
            b.vnj = false;
            b.ovn = true;
            if (b.vyz == a) {
                b.hgk(false);
                b.parent.vho();
                if (b.dti === true) {
                    b.xzn = setTimeout(b.parent.avz, 200)
                }
            } else {
                if (b.vyz == c) {
                    b.wfd(true)
                }
            }
            b.parent.vnf()
        }
    };
    this.stop = function() {
        clearTimeout(this.klg);
        clearTimeout(this.apq);
        clearTimeout(this.xzn);
        clearInterval(this.gdw)
    };
    this.ywu = function(d) {
        this.qxj = d.avk;
        this.vor = d.ixv;
        this.igp = d.cjh;
        this.llm.wrv("start", "#rig", [d.start]);
        this.llm.wrv("cancel", "#rig", [d.zyj]);
        this.llm.wrv("cmincredit", "#rig", [d.irk]);
        this.llm.wrv("cmaxcredit", "#rig", [d.rnf]);
        this.llm.wrv("cmaxwin", "#rig", [d.ojb]);
        if (this.parent.cnh === true && vmg.rkn.value44.d === true) {
            this.vcx = d.saf
        }
    };
    this.vnf = function(n, m, o, j) {
        if (!this.roy()) {
            return
        }
        var f = (n != null && m != null && o != null && j != null),
            p = this.context2D,
            d = this.llm.pci(),
            e = this.uch,
            l = this.wgr;
        if (this.bnz) {
            e = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            e.addColorStop(0, this.uch);
            e.addColorStop(1, this.bnz)
        }
        if (this.sik) {
            if (this.kyv === "center") {
                l = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height)
            } else {
                if (this.kyv === "left") {
                    l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                } else {
                    if (this.kyv === "right") {
                        l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                    }
                }
            }
            if (this.kyv === "left") {
                l.addColorStop(1, this.wgr);
                l.addColorStop(0, this.sik)
            } else {
                if (this.kyv === "center" || this.kyv === "right") {
                    l.addColorStop(0, this.wgr);
                    l.addColorStop(1, this.sik)
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
        vmg.arb.xep(p, 0, 0, this.width, this.height, this.lxg, this.cva, this.cva, this.lxg, e, 1, l, this.tdd, 1);
        vmg.arb.arg(p, this.jvo.x, this.jvo.y, this.jvo.width, this.jvo.height, this.wpq, this.ujh, this.fgy, this.tdd / 2);
        vmg.arb.arg(p, this.axw.x, this.axw.y, this.axw.width, this.axw.height, this.wpq, this.ujh, this.fgy, this.tdd / 2);
        vmg.arb.mqr(p, this.qxj, this.olf, this.eeu.x, this.eeu.y, this.eeu.width, this.eeu.height, this.vte, this.doh, this.byb);
        vmg.arb.vxv(p, this.vcx, this.txc, this.aii.x, this.aii.y, this.aii.width, this.aii.height, this.vte, this.idq, this.byb, "center", true);
        vmg.arb.mft(p, this.vor, this.txc, this.vgn.x, this.vgn.y, this.vgn.width, this.vgn.height, this.vte, this.idq, this.byb, 0);
        vmg.arb.mqr(p, this.igp, this.txc, this.sbq.x, this.sbq.y, this.sbq.width, this.sbq.height, this.vte, this.idq, this.byb);
        for (var g = 0, k = d.length; g < k; g++) {
            d[g].vnf()
        }
        p.restore();
        if (this.stf && this.edu) {
            if (this.vnj) {
                if (this.hxi > 0) {
                    if (this.kyv === "left") {
                        this.stf.drawImage(this.edu, this.width - this.hxi, 0, this.hxi, this.height, this.x, this.y, this.hxi, this.height)
                    } else {
                        if (this.kyv === "right") {
                            this.stf.drawImage(this.edu, 0, 0, this.hxi, this.height, this.x + this.width - this.hxi, this.y, this.hxi, this.height)
                        }
                    }
                }
            } else {
                if (f) {
                    this.stf.drawImage(this.edu, n, m, o, j, this.x + n, this.y + m, o, j)
                } else {
                    this.stf.drawImage(this.edu, this.x, this.y)
                }
            }
        }
    };
    this.emg = function() {
        b.parent.vnf();
        if (b.syx[b.nut] <= 0) {
            return
        }
        if (b.snb === false) {
            b.apq = setTimeout(b.parent.vho, 400);
            b.xzn = setTimeout(b.parent.avz, 500)
        } else {
            b.vnj = true;
            b.dti = true;
            b.apq = setTimeout(b.qaz, 400)
        }
    };
    this.qqa = function() {
        b.parent.vnf();
        b.vak = true;
        if (b.snb === false) {
            b.apq = setTimeout(b.parent.vho, 400)
        } else {
            b.vnj = true;
            b.apq = setTimeout(b.qaz, 400)
        }
    };
    this.huu = function() {
        b.nut = (b.nut < b.syx.length - 1) ? b.nut + 1 : 0;
        b.parent.vcv.ixm("step0");
        b.llm.wrv("gamesd", "#rig", [(b.syx[b.nut] > 0) ? b.syx[b.nut] : "---"]);
        b.parent.vnf();
        return (b.nut >= b.syx.length - 1)
    };
    this.rqg = function() {
        b.nut = (b.nut > 0) ? b.nut - 1 : b.syx.length - 1;
        b.parent.vcv.ixm("step0");
        b.llm.wrv("gamesd", "#rig", [(b.syx[b.nut] > 0) ? b.syx[b.nut] : "---"]);
        b.parent.vnf();
        return (b.nut <= 0)
    };
    this.vkt = function() {
        var d = b.llm.ejh("cmincredit") == null || b.llm.wrv("cmincredit", "#aoi");
        if (d === true) {
            if (++b.gwy > 10) {
                b.fkw = 10
            }
            b.hnb = (b.hnb + (b.aat * b.fkw) <= b.parent.qvw) ? b.hnb + (b.aat * b.fkw) : b.parent.qvw;
            b.parent.vcv.ixm("step0");
            b.llm.wrv("mincreditd", "#rig", [(b.hnb > 0) ? b.parent.txb(b.hnb) : "---"]);
            b.llm.wrv("mmincredit", "#hgk", [d && b.hnb < b.parent.qvw]);
            b.llm.wrv("lmincredit", "#hgk", [d && b.hnb > 0]);
            b.parent.vnf();
            return (b.hnb >= b.parent.qvw)
        }
        return true
    };
    this.wjm = function() {
        var d = b.llm.ejh("cmincredit") == null || b.llm.wrv("cmincredit", "#aoi");
        if (d === true) {
            if (++b.gwy > 10) {
                b.fkw = 10
            }
            b.hnb = (b.hnb - (b.aat * b.fkw) > 0) ? b.hnb - (b.aat * b.fkw) : 0;
            b.parent.vcv.ixm("step0");
            b.llm.wrv("mincreditd", "#rig", [(b.hnb > 0) ? b.parent.txb(b.hnb) : "---"]);
            b.llm.wrv("mmincredit", "#hgk", [d && b.hnb < b.parent.qvw]);
            b.llm.wrv("lmincredit", "#hgk", [d && b.hnb > 0]);
            b.parent.vnf();
            return (b.hnb >= b.parent.qvw || b.hnb <= 0)
        }
        return true
    };
    this.ohz = function() {
        var d = b.llm.ejh("cmaxcredit") == null || b.llm.wrv("cmaxcredit", "#aoi");
        if (d === true) {
            if (++b.gwy > 10) {
                b.fkw = 10
            }
            b.vnn = (b.vnn + (b.bwj * b.fkw) > 0) ? b.vnn + (b.bwj * b.fkw) : 0;
            b.parent.vcv.ixm("step0");
            b.llm.wrv("maxcreditd", "#rig", [(b.vnn > 0) ? b.parent.txb(b.vnn) : "---"]);
            b.llm.wrv("lmaxcredit", "#hgk", [d && b.vnn > b.parent.qvw]);
            b.parent.vnf();
            return (b.vnn <= b.parent.qvw)
        }
        return true
    };
    this.wku = function() {
        var d = b.llm.ejh("cmaxcredit") == null || b.llm.wrv("cmaxcredit", "#aoi");
        if (d === true) {
            if (++b.gwy > 10) {
                b.fkw = 10
            }
            b.vnn = (b.vnn - (b.bwj * b.fkw) > b.parent.qvw) ? b.vnn - (b.bwj * b.fkw) : b.parent.qvw;
            b.parent.vcv.ixm("step0");
            b.llm.wrv("maxcreditd", "#rig", [(b.vnn > 0) ? b.parent.txb(b.vnn) : "---"]);
            b.llm.wrv("lmaxcredit", "#hgk", [d && b.vnn > b.parent.qvw]);
            b.parent.vnf();
            return (b.vnn <= b.parent.qvw)
        }
        return true
    };
    this.eqb = function() {
        var d = b.llm.ejh("cmaxwin") == null || b.llm.wrv("cmaxwin", "#aoi");
        if (d === true) {
            if (++b.gwy > 10) {
                b.fkw = 10
            }
            b.vzv = (b.vzv + (b.bwj * b.fkw) > 0) ? b.vzv + (b.bwj * b.fkw) : 0;
            b.parent.vcv.ixm("step0");
            b.llm.wrv("maxwind", "#rig", [(b.vzv > 0) ? b.parent.txb(b.vzv) : "---"]);
            b.llm.wrv("lmaxwin", "#hgk", [d && b.vzv > b.bwj]);
            b.parent.vnf();
            return (b.vzv <= b.bwj)
        }
        return true
    };
    this.ukq = function() {
        var d = b.llm.ejh("cmaxwin") == null || b.llm.wrv("cmaxwin", "#aoi");
        if (d === true) {
            if (++b.gwy > 10) {
                b.fkw = 10
            }
            b.vzv = (b.vzv - (b.bwj * b.fkw) > 0) ? b.vzv - (b.bwj * b.fkw) : b.bwj;
            b.parent.vcv.ixm("step0");
            b.llm.wrv("maxwind", "#rig", [(b.vzv > 0) ? b.parent.txb(b.vzv) : "---"]);
            b.llm.wrv("lmaxwin", "#hgk", [d && b.vzv > b.bwj]);
            b.parent.vnf();
            return (b.vzv <= b.bwj)
        }
        return true
    };
    this.ozm = function() {
        var d = b.llm.ejh("cmincredit") == null || b.llm.wrv("cmincredit", "#aoi");
        b.hnb = b.parent.qvw;
        b.llm.wrv("mincreditd", "#rig", [(d === true && b.hnb > 0) ? b.parent.txb(b.hnb) : "---"]);
        b.llm.wrv("lmincredit", "#hgk", [d]);
        b.llm.wrv("mmincredit", "#hgk", [d && b.hnb < b.parent.qvw]);
        b.parent.vnf()
    };
    this.pce = function() {
        var d = b.llm.ejh("cmaxcredit") == null || b.llm.wrv("cmaxcredit", "#aoi");
        b.vnn = b.parent.qvw;
        b.llm.wrv("maxcreditd", "#rig", [(d === true && b.vnn > 0) ? b.parent.txb(b.vnn) : "---"]);
        b.llm.wrv("lmaxcredit", "#hgk", [d && b.vnn > b.parent.qvw]);
        b.llm.wrv("mmaxcredit", "#hgk", [d]);
        b.parent.vnf()
    };
    this.zhv = function() {
        var d = b.llm.ejh("cmaxwin") == null || b.llm.wrv("cmaxwin", "#aoi");
        if (b.vzv === 0) {
            b.vzv = b.bwj
        }
        b.llm.wrv("maxwind", "#rig", [(d === true && b.vzv > 0) ? b.parent.txb(b.vzv) : "---"]);
        b.llm.wrv("lmaxwin", "#hgk", [d && b.vzv > b.bwj]);
        b.llm.wrv("mmaxwin", "#hgk", [d]);
        b.parent.vnf()
    }
}
zya.prototype = new rjl;

function cpa() {
    this.wmz = "right";
    this.ypd = "left";
    this.nkm = null;
    this.uca = null;
    this.qxj = null;
    this.dtj = -1;
    this.puz = -1;
    this.ovn = true;
    this.wqh = false;
    this.tyr = false;
    this.vnj = false;
    this.avu = 0;
    this.yge = 0;
    this.ame = [];
    this.xtj = 0;
    this.and = 0;
    this.awp = 1;
    this.yfl = 0;
    this.knc = 0;
    this.kyv = this.wmz;
    this.vte = null;
    this.byb = "bold";
    this.txc = "rgb(255,255,255)";
    this.uch = "rgb(0,0,0)";
    this.qnn = "rgb(0,0,0)";
    this.cjm = "rgb(0,0,0)";
    this.pqc = 0.7;
    this.tfn = null;
    this.fsw = null;
    this.siw = null;
    this.klt = new njt();
    this.rje = new njt();
    this.kzm = new njt();
    this.eeu = new njt();
    this.tdd = 2;
    this.jqd = 5;
    this.irs = 4;
    this.jse = 10;
    this.qao = 5;
    this.god = 15;
    var a = 200;
    this.hie = function(c, d, f) {
        this.ame = [];
        this.avu = (d < 0) ? 0 : d;
        this.yge = (f < 0) ? 0 : f;
        for (var e = this.avu, b = 0; e <= this.yge; e++) {
            this.ame[b++] = c[e]
        }
        this.xtj = this.ame.length;
        this.yfl = this.klt.height / this.xtj
    };
    this.iub = function(b) {
        try {
            this.god = b.fontSize;
            this.tdd = b.skr;
            this.jqd = b.ybu;
            this.irs = b.vwh;
            this.jse = b.qfh;
            this.qao = b.pfr;
            this.klt = new njt(b.kct.x, b.kct.y + b.gig, b.kct.width, b.kct.height - 2 * b.gig);
            this.rje = new njt(b.kct.x, b.kct.y, b.kct.width, b.gig);
            this.kzm = new njt(b.kct.x, b.kct.y + b.kct.height - b.gig, b.kct.width, b.gig);
            this.eeu = b.lnu
        } catch (c) {
            console.error(c)
        }
    };
    this.zpb = function(b) {
        try {
            this.vte = b.font;
            this.byb = b.out;
            this.txc = b.wkr;
            this.uch = b.backgroundColor;
            this.qnn = b.crq;
            this.cjm = b.bqr;
            this.pqc = b.iox;
            this.fsw = this.context2D.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            this.fsw.addColorStop(0, b.gki);
            this.fsw.addColorStop(1, b.oio);
            this.tfn = this.context2D.createLinearGradient(this.klt.x, 0, this.klt.x + this.klt.width, 0);
            this.siw = this.context2D.createLinearGradient(this.width, this.height / 2, 0, this.height / 2);
            if (this.kyv === this.wmz) {
                this.tfn.addColorStop(0, b.pzl);
                this.tfn.addColorStop(1, b.mvc);
                this.siw.addColorStop(0, b.ylc);
                this.siw.addColorStop(1, b.oqf)
            } else {
                if (this.kyv === this.ypd) {
                    this.tfn.addColorStop(0, b.mvc);
                    this.tfn.addColorStop(1, b.pzl);
                    this.siw.addColorStop(0, b.oqf);
                    this.siw.addColorStop(1, b.ylc)
                }
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.doc = function(b, f, c) {
        if (this.vnj || !this.ovn || this.tyr) {
            return true
        }
        if ((b < this.x || b > this.x + this.width || f < this.y || f > this.y + this.height)) {
            return false
        } else {
            var e = b - this.x,
                d = f - this.y;
            if (this.kzm.umo(e, d)) {
                this.rwn(-1);
                this.ixm();
                this.xon(true, true)
            } else {
                if (this.rje.umo(e, d)) {
                    this.rwn(1);
                    this.ixm();
                    this.xon(true, true)
                } else {
                    if (this.klt.umo(e, d)) {
                        this.wqh = true;
                        this.ypj(f);
                        this.xon(true, true)
                    }
                }
            }
            this.pxk(this.and);
            return true
        }
    };
    this.ecg = function() {
        if (this.wqh) {
            this.wqh = false;
            this.ixm();
            return true
        }
        return false
    };
    this.bhd = function(b) {
        if (this.vnj || !this.ovn || this.tyr) {
            return true
        }
        if (b == this.puz) {
            this.rwn(-1);
            this.ixm();
            this.xon(true, true);
            this.pxk(this.and);
            return true
        } else {
            if (b == this.dtj) {
                this.rwn(1);
                this.ixm();
                this.xon(true, true);
                this.pxk(this.and);
                return true
            }
        }
        return false
    };
    this.vin = function() {};
    this.jws = function(b, d, c) {
        if (!this.wqh) {
            return false
        }
        if (b >= this.x + this.klt.x && b <= this.x + this.klt.x + this.klt.width && d >= this.y + this.klt.y && d <= this.y + this.klt.y + this.klt.height) {
            this.ypj(d);
            this.pxk(this.and);
            return true
        }
        return false
    };
    this.xon = function(b, c) {
        this.tyr = b;
        c = (c === false) ? false : true;
        clearTimeout(this.fwr);
        if (this.tyr === true && c === true) {
            this.fwr = setTimeout(this.faw, a)
        }
    };
    this.faw = function() {};
    this.pxk = function(b) {};
    this.ixm = function() {};
    this.uik = function(b, c) {
        this.avu = (b < 0) ? 0 : b;
        this.yge = (c < 0) ? 0 : c;
        if (this.ame) {
            this.yge = (this.yge > this.ame.length - 1) ? this.ame.length - 1 : this.yge
        }
    };
    this.fjz = function() {
        this.hgk(true, true)
    };
    this.qaz = function() {
        this.hgk(false, true)
    };
    this.ged = function(b) {
        this.ovn = b
    };
    this.yfs = function() {
        return this.ovn
    };
    this.ugd = function(b, c) {
        this.and = b;
        if (this.and < this.avu) {
            this.and = this.avu
        }
        if (this.and >= this.yge) {
            this.and = this.yge
        }
        this.awp = this.and + 1;
        if (c && c === true) {
            this.parent.vnf()
        }
    };
    this.xvc = function(d, e) {
        this.and = 0;
        for (var c = 0, b = this.ame.length; c < b; c++) {
            if (this.ame[c] == d) {
                this.and = c;
                break
            }
        }
        this.and = (this.and >= this.avu) ? this.and : this.avu;
        this.and = (this.and < this.yge) ? this.and : this.yge;
        this.awp = this.and + 1;
        if (e) {
            this.parent.vnf()
        }
    };
    this.ypj = function(b) {
        this.and = Math.ceil(((this.klt.height) - (b - this.klt.y - this.y)) / this.yfl) - 1;
        this.and = (this.and >= this.avu) ? this.and : this.avu;
        this.and = (this.and < this.yge) ? this.and : this.yge;
        this.awp = this.and + 1;
        this.parent.vnf()
    };
    this.rwn = function(b) {
        this.and += b;
        this.and = (this.and >= this.avu) ? this.and : this.avu;
        this.and = (this.and < this.yge) ? this.and : this.yge;
        this.awp = this.and + 1;
        this.parent.vnf()
    };
    this.vnf = function() {
        if (!this.roy() || !this.parent.ufa()) {
            return
        }
        this.qfm();
        if (this.stf && this.edu) {
            this.stf.drawImage(this.ejd, this.x, this.y)
        }
    };
    this.qfm = function() {
        var b = this.context2D;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        this.ywo(b);
        this.kwb(b);
        this.uyd(b);
        this.kgm(b);
        this.bdu(b);
        b.restore()
    };
    this.ywo = function(b) {
        if (this.kyv === this.ypd) {
            vmg.arb.xep(b, 0, 0, this.width, this.height, this.jqd, 0, 0, this.jqd, this.uch, 0.4, this.siw, this.tdd, 1)
        } else {
            if (this.kyv === this.wmz) {
                vmg.arb.xep(b, 0, 0, this.width, this.height, 0, this.jqd, this.jqd, 0, this.uch, 0.4, this.siw, this.tdd, 1)
            }
        }
    };
    this.kwb = function(b) {
        vmg.arb.lux(b, this.klt.x, this.klt.y, this.klt.width, this.klt.height, this.qnn, 1)
    };
    this.uyd = function(b) {
        vmg.arb.lux(b, this.klt.x, this.klt.y + this.klt.height - Math.round(this.awp * this.yfl), this.klt.width, Math.round(this.awp * this.yfl), this.fsw, 1)
    };
    this.kgm = function(b) {
        vmg.arb.lux(b, this.klt.x - this.irs, this.klt.y - this.irs, this.klt.width + 2 * this.irs, this.klt.height + 2 * this.irs, null, 0, this.tfn, this.irs, 1);
        if (this.kyv === this.ypd) {
            vmg.arb.xep(b, this.klt.x - this.irs, this.rje.y, this.klt.width + 2 * this.irs, this.rje.height, this.jse, 0, 0, 0, this.tfn, 1);
            vmg.arb.xep(b, this.klt.x - this.irs, this.kzm.y, this.klt.width + 2 * this.irs, this.kzm.height, 0, 0, 0, this.jse, this.tfn, 1)
        } else {
            if (this.kyv === this.wmz) {
                vmg.arb.xep(b, this.klt.x - this.irs, this.rje.y, this.klt.width + 2 * this.irs, this.rje.height, 0, this.jse, 0, 0, this.tfn, 1);
                vmg.arb.xep(b, this.klt.x - this.irs, this.kzm.y, this.klt.width + 2 * this.irs, this.kzm.height, 0, 0, this.jse, 0, this.tfn, 1)
            }
        }
        b.strokeStyle = this.tfn;
        b.lineWidth = Math.round(this.irs / 4);
        b.beginPath();
        for (var c = 1; c < this.xtj; c++) {
            b.moveTo(this.klt.x, this.klt.y + this.klt.height - Math.round(c * this.yfl));
            b.lineTo(this.klt.x + this.klt.width, this.klt.y + this.klt.height - Math.round(c * this.yfl))
        }
        b.closePath();
        b.stroke();
        if (this.nkm) {
            if (this.kyv === this.ypd) {
                b.drawImage(this.nkm, 0, 0, this.nkm.width / 2, this.nkm.height, this.klt.x, this.klt.y, this.klt.width, this.klt.height)
            } else {
                if (this.kyv === this.wmz) {
                    b.drawImage(this.nkm, this.nkm.width / 2, 0, this.nkm.width / 2, this.nkm.height, this.klt.x, this.klt.y, this.klt.width, this.klt.height)
                }
            }
        }
    };
    this.bdu = function(c) {
        var f = this.txc,
            e = this.txc,
            b = 0,
            d = 0;
        if (this.kyv === this.ypd) {
            b = this.qao;
            d = this.klt.x - 2 * this.qao
        } else {
            if (this.kyv === this.wmz) {
                b = this.klt.x + this.klt.width + this.qao;
                d = this.width - this.qao - (this.klt.x + this.klt.width + this.qao)
            }
        }
        if (this.and > 0 && this.and < this.ame.length - 1) {
            vmg.arb.lux(c, b, this.klt.y + ((this.xtj - this.awp) * this.yfl), d, this.yfl, this.cjm, this.pqc);
            vmg.arb.fow(c, this.ame[this.and], this.fsw, b, this.klt.y + ((this.xtj - this.awp) * this.yfl) + (this.yfl - this.god) / 2, d, this.god, this.vte, this.god, this.byb, this.qao)
        } else {
            if (this.and == 0) {
                f = this.fsw
            } else {
                if (this.and == this.ame.length - 1) {
                    e = this.fsw
                }
            }
        }
        vmg.arb.lux(c, b, this.klt.y + (this.yfl * (this.xtj - 1)), d, this.yfl, this.cjm, this.pqc);
        vmg.arb.fow(c, this.ame[0], f, b, this.klt.y + (this.yfl * (this.xtj - 1)) + (this.yfl - this.god) / 2, d, this.god, this.vte, this.god, this.byb, this.qao);
        vmg.arb.lux(c, b, this.klt.y, d, this.yfl, this.cjm, this.pqc);
        vmg.arb.fow(c, this.ame[this.ame.length - 1], e, b, this.klt.y + (this.yfl - this.god) / 2, d, this.god, this.vte, this.god, this.byb, this.qao);
        vmg.arb.mqr(c, "+", this.txc, this.rje.x, this.rje.y, this.rje.width, this.rje.height, this.vte, this.god, this.byb);
        vmg.arb.mqr(c, "", this.txc, this.kzm.x, this.kzm.y, this.kzm.width, this.kzm.height, this.vte, this.god, this.byb);
        if (this.qxj) {
            vmg.arb.mqr(c, this.qxj, this.txc, this.eeu.x, this.eeu.y, this.eeu.width, this.eeu.height, this.vte, this.god, this.byb)
        }
    }
}
cpa.prototype = new rjl;

function noh() {
    var a = this;
    this.llm = null;
    this.otn = false;
    this.ruy = "";
    this.szu = "";
    this.ayb = "";
    this.bbk = "";
    this.vcx = "";
    this.vor = "";
    this.igp = "";
    this.vte = "arial";
    this.byb = "bold";
    this.txc = "white";
    this.uch = "black";
    this.bnz = null;
    this.wgr = "white";
    this.sik = "rgb(150,150,150)";
    this.tdd = 3;
    this.jqd = 4;
    this.niz = 24;
    this.wsg = 24;
    this.idq = 24;
    this.tyv = new njt();
    this.oql = new njt();
    this.csz = new njt();
    this.jpc = new njt();
    this.bve = new njt();
    this.yyu = new njt();
    this.etb = new njt();
    this.syx = [];
    this.nut = 0;
    this.aat = 0;
    this.bwj = 0;
    this.rxm = 0;
    this.mjj = 0;
    this.hnb = 0;
    this.vnn = 0;
    this.vzv = 0;
    this.nwr = false;
    this.sdd = false;
    this.and = 0;
    this.okl = true;
    this.eco = true;
    this.oqh = null;
    this.gdw = 0;
    this.gwy = 0;
    this.fkw = 1;
    this.thx = 250;
    this.qtx = function(b, d, c) {
        noh.prototype.qtx.call(this, b, d, c);
        this.llm = new fsv();
        this.llm.qtx();
        this.llm.haq("buttons");
        this.llm.haq("displays");
        this.llm.haq("checkboxes");
        this.llm.haq("lbuttons");
        this.llm.haq("mbuttons");
        this.llm.haq("tbuttons");
        this.llm.haq("bbuttons");
        this.llm.haq("bdisplays");
        this.llm.haq("abuttons");
        this.llm.haq("adisplays");
        this.llm.haq("acheckboxes");
        this.llm.haq("sbuttons");
        this.llm.haq("hbuttons")
    };
    this.vqo = function(b) {
        try {
            this.nlz(b);
            this.dvf(b);
            this.cgr(b)
        } catch (c) {
            console.error(c)
        }
    };
    this.zpb = function(b) {
        try {
            var c = this.llm.wnf("lbuttons"),
                n = this.llm.wnf("mbuttons"),
                k = this.llm.wnf("tbuttons"),
                m = this.llm.wnf("sbuttons"),
                l = this.llm.wnf("hbuttons"),
                f = this.llm.wnf("displays");
            this.vte = b.font;
            this.byb = b.out;
            this.txc = b.wkr;
            this.uch = b.backgroundColor;
            this.bnz = b.dvo;
            this.wgr = b.borderColor;
            this.sik = b.yrn;
            for (var d = 0, g = c.length; d < g; d++) {
                c[d].zpb(b.poj)
            }
            for (var d = 0, g = n.length; d < g; d++) {
                n[d].zpb(b.iwv)
            }
            for (var d = 0, g = k.length; d < g; d++) {
                k[d].zpb(b.tbl)
            }
            for (var d = 0, g = f.length; d < g; d++) {
                f[d].zpb(b.display)
            }
            for (var d = 0, g = m.length; d < g; d++) {
                m[d].zpb(b.xxh)
            }
            for (var d = 0, g = l.length; d < g; d++) {
                l[d].zpb(b.xxh)
            }
            this.llm.qgo("checkboxes", "#zpb", [b.vph])
        } catch (j) {
            console.error(j)
        }
    };
    this.iub = function(g) {
        try {
            var b = this.llm.wnf("lbuttons"),
                o = this.llm.wnf("mbuttons"),
                l = this.llm.wnf("tbuttons"),
                n = this.llm.wnf("sbuttons"),
                m = this.llm.wnf("hbuttons"),
                c = this.llm.wnf("bdisplays"),
                f = this.llm.wnf("adisplays");
            gmw = this.llm.wnf("checkboxes"), brb = n.length, phc = (brb <= 2) ? g.okm : (brb <= 3) ? g.lfs : (brb <= 4) ? g.vzc : g.ilm, brb = m.length, woq = (brb <= 2) ? g.okm : (brb <= 3) ? g.lfs : (brb <= 4) ? g.vzc : g.ilm, cmp = (this.parent.klz() != null) ? g.sco : g.jnz;
            this.tdd = g.skr;
            this.jqd = g.ybu;
            this.niz = g.slq;
            this.wsg = g.osj;
            this.idq = g.zby;
            this.tyv = g.fyf;
            this.oql = g.rrb;
            this.csz = g.yzj;
            this.jpc = g.nwc;
            this.bve = g.oad;
            this.yyu = g.vlk;
            this.etb = g.lyi;
            this.llm.wrv("bett", "#clq", [cmp.ckd]);
            this.llm.wrv("autot", "#clq", [cmp.tka]);
            this.llm.wrv("helpt", "#clq", [cmp.wjw]);
            this.llm.wrv("settingt", "#clq", [cmp.ohc]);
            this.llm.wrv("returnt", "#clq", [cmp.lpi]);
            this.llm.wrv("lbet", "#clq", [g.wro]);
            this.llm.wrv("mbet", "#clq", [g.egk]);
            this.llm.wrv("llines", "#clq", [g.ghj]);
            this.llm.wrv("mlines", "#clq", [g.mne]);
            this.llm.wrv("betd", "#clq", [g.cnr]);
            this.llm.wrv("linesd", "#clq", [g.kmj]);
            this.llm.wrv("totald", "#clq", [g.iaz]);
            this.llm.wrv("lgames", "#clq", [g.och]);
            this.llm.wrv("mgames", "#clq", [g.mxr]);
            this.llm.wrv("lmincredit", "#clq", [g.ofa]);
            this.llm.wrv("mmincredit", "#clq", [g.zls]);
            this.llm.wrv("lmaxcredit", "#clq", [g.qyu]);
            this.llm.wrv("mmaxcredit", "#clq", [g.kbr]);
            this.llm.wrv("lmaxwin", "#clq", [g.oha]);
            this.llm.wrv("mmaxwin", "#clq", [g.hmc]);
            this.llm.wrv("gamesd", "#clq", [g.feg]);
            this.llm.wrv("mincreditd", "#clq", [g.whd]);
            this.llm.wrv("maxcreditd", "#clq", [g.cyr]);
            this.llm.wrv("maxwind", "#clq", [g.chn]);
            this.llm.wrv("cmincredit", "#clq", [g.dju]);
            this.llm.wrv("cmaxcredit", "#clq", [g.maa]);
            this.llm.wrv("cmaxwin", "#clq", [g.qhs]);
            for (var d = 0, j = b.length; d < j; d++) {
                b[d].iub(g.poj)
            }
            for (var d = 0, j = o.length; d < j; d++) {
                o[d].iub(g.iwv)
            }
            for (var d = 0, j = l.length; d < j; d++) {
                l[d].iub(g.tbl)
            }
            for (var d = 0, j = c.length; d < j; d++) {
                c[d].iub(g.mjg)
            }
            for (var d = 0, j = f.length; d < j; d++) {
                f[d].iub(g.dji)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].iub(g.xxh)
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].iub(g.xxh)
            }
            for (var d = 0, j = gmw.length; d < j; d++) {
                gmw[d].iub(g.vph)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].clq(phc[d])
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].clq(woq[d])
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.nlz = function(c) {
        var b = (this.parent.klz() != null) ? c.sco : c.jnz;
        this.llm.mwl("bett", this.hqf(b.ckd, null, this.parent.vcv.kos("btn_b"), this.agz, null), ["buttons", "tbuttons"]);
        if (this.parent.klz() != null) {
            this.llm.mwl("autot", this.hqf(b.tka, null, this.parent.vcv.kos("btn_as"), this.sqq, null), ["buttons", "tbuttons"])
        }
        this.llm.mwl("helpt", this.hqf(b.wjw, null, this.parent.vcv.kos("btn_i"), this.xad, null), ["buttons", "tbuttons"]);
        this.llm.mwl("settingt", this.hqf(b.ohc, null, this.parent.vcv.kos("btn_se"), this.gjt, null), ["buttons", "tbuttons"]);
        this.llm.mwl("returnt", this.hqf(b.lpi, null, this.parent.vcv.kos("btn_c"), this.jsg, null), ["buttons", "tbuttons"])
    };
    this.dvf = function(b) {
        this.llm.mwl("betd", this.rsj(b.cnr, null, this.parent.vmx), ["displays", "bdisplays"]);
        this.llm.mwl("lbet", this.xxb(b.wro, "", this.parent.bdr), ["buttons", "lbuttons", "bbuttons"]);
        this.llm.mwl("mbet", this.xxb(b.egk, "+", this.parent.tjg), ["buttons", "mbuttons", "bbuttons"]);
        this.llm.mwl("linesd", this.rsj(b.kmj, null, this.parent.qho), ["displays", "bdisplays"]);
        if (this.otn) {
            this.llm.mwl("llines", this.xxb(b.ghj, "", this.parent.iwz), ["buttons", "lbuttons", "bbuttons"]);
            this.llm.mwl("mlines", this.xxb(b.mne, "+", this.parent.ecm), ["buttons", "mbuttons", "bbuttons"])
        }
        this.llm.mwl("totald", this.rsj(b.iaz, null, this.parent.qyo()), ["displays", "bdisplays"])
    };
    this.cgr = function(b) {
        this.llm.mwl("gamesd", this.rsj(b.feg, null, this.syx[this.nut]), ["displays", "adisplays"]);
        this.llm.mwl("lgames", this.xxb(b.och, "", this.rqg), ["buttons", "lbuttons", "abuttons"]);
        this.llm.mwl("mgames", this.xxb(b.mxr, "+", this.huu), ["buttons", "mbuttons", "abuttons"]);
        this.llm.mwl("mincreditd", this.rsj(b.whd, null, "---"), ["displays", "adisplays"]);
        this.llm.mwl("lmincredit", this.xxb(b.ofa, "", this.wjm), ["buttons", "lbuttons", "abuttons"]);
        this.llm.mwl("mmincredit", this.xxb(b.zls, "+", this.vkt), ["buttons", "mbuttons", "abuttons"]);
        this.llm.mwl("maxcreditd", this.rsj(b.cyr, null, "---"), ["displays", "adisplays"]);
        this.llm.mwl("lmaxcredit", this.xxb(b.qyu, "", this.wku), ["buttons", "lbuttons", "abuttons"]);
        this.llm.mwl("mmaxcredit", this.xxb(b.kbr, "+", this.ohz), ["buttons", "mbuttons", "abuttons"]);
        this.llm.mwl("maxwind", this.rsj(b.chn, null, "---"), ["displays", "adisplays"]);
        this.llm.mwl("lmaxwin", this.xxb(b.oha, "", this.ukq), ["buttons", "lbuttons", "abuttons"]);
        this.llm.mwl("mmaxwin", this.xxb(b.hmc, "+", this.eqb), ["buttons", "mbuttons", "abuttons"]);
        this.llm.mwl("cmincredit", this.pif(b.dju, "", this.ozm), ["checkboxes", "acheckboxes"]);
        this.llm.mwl("cmaxcredit", this.pif(b.maa, "", this.pce), ["checkboxes", "acheckboxes"]);
        this.llm.mwl("cmaxwin", this.pif(b.qhs, "", this.zhv), ["checkboxes", "acheckboxes"])
    };
    this.gfg = function(i, g, f, e, d, b) {
        var c = new vsv();
        c.qtx(new njt(0, 0, 1, 1), this.context2D);
        c.parent = this;
        c.pxk = e;
        c.mpv = g;
        c.ljn(d, b);
        c.iub(this.parent.ple.npu.xxh);
        c.zpb(this.parent.style.npu.xxh);
        c.she(f);
        this.llm.mwl(i, c, ["buttons", "sbuttons"])
    };
    this.iwc = function(f, e, d, c) {
        var b = new vsv();
        b.qtx(new njt(0, 0, 1, 1), this.context2D);
        b.parent = this;
        b.pxk = c;
        b.mpv = e;
        b.iub(this.parent.ple.npu.xxh);
        b.zpb(this.parent.style.npu.xxh);
        b.she(d);
        this.llm.mwl(f, b, ["buttons", "hbuttons"])
    };
    this.rsj = function(b, e, d) {
        var c = new jmu();
        c.qtx(b, this.context2D, null, e, d);
        c.parent = this;
        return c
    };
    this.xxb = function(c, e, d) {
        var b = new xoj();
        b.qtx(c, this.context2D, null, null, e);
        b.parent = this;
        b.pxk = d;
        return b
    };
    this.hqf = function(d, g, f, e, c) {
        var b = new xoj();
        b.qtx(d, this.context2D, null, f, g);
        b.parent = this;
        b.pxk = e;
        if (c != null) {
            b.vii = c
        }
        return b
    };
    this.pif = function(c, e, d) {
        var b = new bie();
        b.qtx(c, this.context2D, null, e);
        b.parent = this;
        b.pxk = d;
        return b
    };
    this.doc = function(o, n) {
        var m = this.llm.wnf("buttons"),
            g = this.llm.wnf("checkboxes"),
            f = o - this.x,
            d = n - this.y;
        for (var e = 0, l = m.length; e < l; e++) {
            var b = m[e];
            if (f >= b.x && f <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.roy() === true) {
                if (b.yfs() === true && b.vey() === false) {
                    if (b instanceof vsv) {
                        this.parent.vcv.acn("btn");
                        this.parent.vcv.ixm("btn");
                        b.xjb(true, true, true);
                        b.pxk()
                    } else {
                        if (b instanceof xoj) {
                            if (b.luq() === "rect") {
                                this.parent.vcv.acn("btn");
                                this.parent.vcv.ixm("btn");
                                b.xjb(true, true, false);
                                b.pxk()
                            } else {
                                b.xjb(true, false, false);
                                this.gwy = 0;
                                this.fkw = 1;
                                if (b.pxk() === false) {
                                    this.oqh = function() {
                                        if (b.pxk() === true) {
                                            clearInterval(a.gdw);
                                            b.xjb(false, true);
                                            for (var i = 0; i < l; i++) {
                                                m[i].xon(false)
                                            }
                                        }
                                    };
                                    this.gdw = setInterval(this.oqh, this.thx)
                                }
                            }
                        }
                    }
                    for (var c = 0; c < l; c++) {
                        m[c].xon(true)
                    }
                    return true
                }
            }
        }
        for (var e = 0, l = g.length; e < l; e++) {
            var k = g[e];
            if (f >= k.x && f <= k.x + k.width && d >= k.y && d <= k.y + k.height) {
                if (k.roy() === true && k.yfs() === true) {
                    k.gkb(!k.aoi(), true);
                    k.pxk();
                    for (var c = 0; c < l; c++) {
                        g[c].xon(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.ecg = function() {
        var e = this.llm.wnf("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.eqj() == true && !(c instanceof xoj && c.luq() === "rect")) {
                clearInterval(this.gdw);
                c.xjb(false, true);
                return true
            }
        }
        return false
    };
    this.bhd = function(b) {};
    this.vin = function(b) {};
    this.utm = function(c, b, d) {
        this.llm.wrv("betd", "#rig", [c]);
        this.llm.wrv("linesd", "#rig", [b]);
        this.llm.wrv("totald", "#rig", [d]);
        this.parent.vnf()
    };
    this.khl = function(b) {
        this.syx = b.g;
        this.aat = b.v;
        this.bwj = b.v;
        this.nwr = b.r;
        this.sdd = b.l;
        if (typeof b.m != "undefined" && b.m != null && b.m > 0) {
            this.rxm = b.m;
            this.mjj = b.m
        }
    };
    this.opl = function() {
        if (this.nwr === true) {
            this.hnb = this.parent.qvw;
            this.vnn = this.parent.qvw;
            this.nut = 0;
            this.vzv = 0
        }
    };
    this.bcj = function() {
        if (this.syx.length > 0 && this.nut >= 0) {
            return this.syx[this.nut]
        }
        return 0
    };
    this.xhb = function() {
        var b = this.llm.ejh("cmincredit") == null || this.llm.wrv("cmincredit", "#aoi");
        if (this.hnb > 0 && b === true) {
            return this.hnb
        }
        return 0
    };
    this.npm = function() {
        var b = this.llm.ejh("cmaxcredit") == null || this.llm.wrv("cmaxcredit", "#aoi");
        if (this.vnn > 0 && b === true) {
            return this.vnn
        }
        return 0
    };
    this.ikt = function() {
        var b = this.llm.ejh("cmaxwin") == null || this.llm.wrv("cmaxwin", "#aoi");
        if (this.vzv > 0 && b === true) {
            return this.vzv
        }
        return 0
    };
    this.fjz = function(c, f, d) {
        if (this.syx && this.syx.length > 0) {
            var g = this.llm.ejh("cmincredit") == null || this.llm.wrv("cmincredit", "#aoi"),
                e = this.llm.ejh("cmaxcredit") == null || this.llm.wrv("cmaxcredit", "#aoi"),
                b = this.llm.ejh("cmaxwin") == null || this.llm.wrv("cmaxwin", "#aoi");
            if (this.nwr === true) {
                g = this.sdd;
                e = false;
                b = false;
                this.opl()
            } else {
                if (this.sdd === true) {
                    g = true;
                    this.hnb = (this.hnb < this.parent.qvw) ? this.hnb : this.parent.qvw;
                    this.hnb = (this.hnb > 0) ? this.hnb : this.parent.qvw
                } else {
                    g = (this.hnb < this.parent.qvw) ? g : false;
                    this.hnb = (this.hnb < this.parent.qvw) ? this.hnb : this.parent.qvw
                }
                e = (this.vnn > this.parent.qvw) ? e : false;
                this.vnn = (this.vnn > this.parent.qvw) ? this.vnn : this.parent.qvw
            }
            this.llm.wrv("cmincredit", "#gkb", [g]);
            this.llm.wrv("cmaxcredit", "#gkb", [e]);
            this.llm.wrv("cmaxwin", "#gkb", [b]);
            this.llm.wrv("gamesd", "#rig", [(this.syx[this.nut] > 0) ? this.syx[this.nut] : "---"]);
            this.llm.wrv("mincreditd", "#rig", [(g === true && this.hnb > 0) ? this.parent.txb(this.hnb) : "---"]);
            this.llm.wrv("maxcreditd", "#rig", [(e === true && this.vnn > 0) ? this.parent.txb(this.vnn) : "---"]);
            this.llm.wrv("maxwind", "#rig", [(b === true && this.vzv > 0) ? this.parent.txb(this.vzv) : "---"]);
            this.llm.wrv("lmincredit", "#hgk", [g]);
            this.llm.wrv("mmincredit", "#hgk", [g]);
            this.llm.wrv("lmaxcredit", "#hgk", [e]);
            this.llm.wrv("mmaxcredit", "#hgk", [e]);
            this.llm.wrv("lmaxwin", "#hgk", [b]);
            this.llm.wrv("mmaxwin", "#hgk", [b])
        }
        this.okl = c;
        this.eco = f;
        if (typeof d == "number") {
            if (d === 0) {
                this.agz()
            } else {
                if (d === 1) {
                    if (this.parent.klz() != null) {
                        this.sqq()
                    } else {
                        this.xad()
                    }
                } else {
                    if (d === 2) {
                        if (this.parent.klz() != null) {
                            this.xad()
                        } else {
                            this.gjt()
                        }
                    } else {
                        if (d === 3 && this.parent.klz() != null) {
                            this.gjt()
                        }
                    }
                }
            }
        } else {
            this.agz()
        }
        this.llm.qgo("tbuttons", "#ged", [true]);
        this.hgk(true);
        this.parent.vnf()
    };
    this.qaz = function() {
        this.llm.qgo("tbuttons", "#ged", [false]);
        this.llm.qgo("bbuttons", "#ged", [false]);
        this.llm.qgo("sbuttons", "#ged", [false]);
        this.llm.qgo("abuttons", "#ged", [false]);
        this.llm.qgo("acheckboxes", "#ged", [false]);
        this.hgk(false);
        this.parent.vnf()
    };
    this.stop = function() {
        clearInterval(this.gdw)
    };
    this.ywu = function(d, b) {
        var c = "";
        this.llm.wrv("language", "#rig", [vmg.yov.zoy(d.language)]);
        this.llm.wrv("audio", "#rig", [vmg.yov.zoy(d.audio)]);
        this.llm.wrv("melody", "#rig", [vmg.yov.zoy(d.bez)]);
        this.llm.wrv("fullscreen", "#rig", [vmg.yov.zoy(d.zzc)]);
        this.llm.wrv("turbo", "#rig", [vmg.yov.zoy(d.iwd)]);
        this.llm.wrv("help", "#rig", [vmg.yov.zoy(d.sxj)]);
        this.llm.wrv("history", "#rig", [vmg.yov.zoy(d.pir)]);
        this.llm.wrv("statistic", "#rig", [vmg.yov.zoy(d.rye)]);
        this.llm.wrv("rules", "#rig", [vmg.yov.zoy(d.oww)]);
        this.llm.wrv("gamble", "#rig", [vmg.yov.zoy(d.lqz)]);
        if (vmg.yov.yxf[vmg.yov.lwk] === vmg.rpp.ypd) {
            c = vmg.yov.zoy(d.left)
        } else {
            if (vmg.yov.yxf[vmg.yov.lwk] === vmg.rpp.wmz) {
                c = vmg.yov.zoy(d.dft)
            } else {
                if (vmg.yov.yxf[vmg.yov.lwk] === vmg.rpp.tdj) {
                    c = vmg.yov.zoy(d.ehp)
                }
            }
        }
        this.llm.wrv("adjustment", "#rig", [c]);
        if (b && b === true) {
            this.ruy = vmg.yov.zoy(d.afd) + "/" + vmg.yov.zoy(d.oqv) + ":";
            this.szu = vmg.yov.zoy(d.qho) + ":"
        } else {
            this.ruy = vmg.yov.zoy(d.afd) + ":"
        }
        this.ayb = vmg.yov.zoy(d.hpk) + ":";
        this.vor = vmg.yov.zoy(d.ixv);
        this.igp = vmg.yov.zoy(d.cjh);
        if (this.parent.cnh === true && vmg.rkn.value44.d === true) {
            this.vcx = vmg.yov.zoy(d.saf)
        }
        this.llm.wrv("cmincredit", "#rig", [vmg.yov.zoy(d.irk)]);
        this.llm.wrv("cmaxcredit", "#rig", [vmg.yov.zoy(d.rnf)]);
        this.llm.wrv("cmaxwin", "#rig", [vmg.yov.zoy(d.ojb)])
    };
    this.vnf = function(l, j, m, e) {
        if (!this.roy() || !this.parent.ufa()) {
            return
        }
        var c = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = this.llm.wnf("tbuttons"),
            b = this.uch,
            g = this.wgr;
        if (this.bnz) {
            b = n.createRadialGradient(this.x + this.width / 2, this.y + this.height / 2, this.height / 6, this.x + this.width / 2, this.y + this.height / 2, this.height);
            b.addColorStop(0, this.uch);
            b.addColorStop(1, this.bnz)
        }
        if (this.sik) {
            g = n.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            g.addColorStop(0, this.wgr);
            g.addColorStop(1, this.sik)
        }
        n.save();
        n.clearRect(0, 0, this.width, this.height);
        if (c) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        vmg.arb.arg(n, 0, 0, this.width, this.height, this.jqd, b, g, this.tdd);
        for (var d = 0, f = k.length; d < f; d++) {
            k[d].vnf()
        }
        if (this.and === 0) {
            this.qnm(n)
        } else {
            if (this.and === 1) {
                this.dnf(n)
            } else {
                if (this.and === 2) {
                    this.vvv(n)
                } else {
                    if (this.and === 3) {
                        this.gdl(n)
                    }
                }
            }
        }
        n.restore();
        if (this.stf && this.edu) {
            if (c) {
                this.stf.drawImage(this.edu, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.stf.drawImage(this.edu, this.x, this.y)
            }
        }
    };
    this.qnm = function(c) {
        var f = this.llm.wnf("bbuttons"),
            d = this.llm.wnf("bdisplays");
        if (this.tyv.width > 0 && this.tyv.height > 0) {
            vmg.arb.mft(c, this.ruy, this.txc, this.tyv.x, this.tyv.y, this.tyv.width, this.tyv.height, this.vte, this.niz, this.byb, 0)
        }
        if (this.oql.width > 0 && this.oql.height > 0) {
            vmg.arb.mft(c, this.szu, this.txc, this.oql.x, this.oql.y, this.oql.width, this.oql.height, this.vte, this.niz, this.byb, 0)
        }
        if (this.csz.width > 0 && this.csz.height > 0) {
            vmg.arb.mft(c, this.ayb, this.txc, this.csz.x, this.csz.y, this.csz.width, this.csz.height, this.vte, this.niz, this.byb, 0)
        }
        vmg.arb.vxv(c, this.bbk, this.txc, this.jpc.x, this.jpc.y, this.jpc.width, this.jpc.height, this.vte, this.idq, this.byb, "center", true);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].vnf()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].vnf()
        }
    };
    this.dnf = function(c) {
        var f = this.llm.wnf("abuttons"),
            d = this.llm.wnf("adisplays"),
            g = this.llm.wnf("acheckboxes");
        vmg.arb.vxv(c, this.vcx, this.txc, this.bve.x, this.bve.y, this.bve.width, this.bve.height, this.vte, this.idq, this.byb, "center", true);
        vmg.arb.mft(c, this.vor, this.txc, this.yyu.x, this.yyu.y, this.yyu.width, this.yyu.height, this.vte, this.wsg, this.byb, 0);
        vmg.arb.mqr(c, this.igp, this.txc, this.etb.x, this.etb.y, this.etb.width, this.etb.height, this.vte, this.wsg, this.byb);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].vnf()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].vnf()
        }
        for (var e = 0, b = g.length; e < b; e++) {
            g[e].vnf()
        }
    };
    this.vvv = function(c) {
        var d = this.llm.wnf("hbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].vnf()
        }
    };
    this.gdl = function(c) {
        var d = this.llm.wnf("sbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].vnf()
        }
    };
    this.huu = function() {
        a.nut = (a.nut < a.syx.length - 1) ? a.nut + 1 : 0;
        a.parent.vcv.ixm("btn");
        a.llm.wrv("gamesd", "#rig", [(a.syx[a.nut] > 0) ? a.syx[a.nut] : "---"]);
        a.vnf();
        return (a.nut >= a.syx.length - 1)
    };
    this.rqg = function() {
        a.nut = (a.nut > 0) ? a.nut - 1 : a.syx.length - 1;
        a.parent.vcv.ixm("btn");
        a.llm.wrv("gamesd", "#rig", [(a.syx[a.nut] > 0) ? a.syx[a.nut] : "---"]);
        a.vnf();
        return (a.nut <= 0)
    };
    this.vkt = function() {
        var b = a.llm.ejh("cmincredit") == null || a.llm.wrv("cmincredit", "#aoi");
        if (b === true) {
            if (++a.gwy > 10) {
                a.fkw = 10
            }
            a.hnb = (a.hnb + (a.aat * a.fkw) <= a.parent.qvw) ? a.hnb + (a.aat * a.fkw) : a.parent.qvw;
            a.parent.vcv.ixm("btn");
            a.llm.wrv("mincreditd", "#rig", [(a.hnb > 0) ? a.parent.txb(a.hnb) : "---"]);
            a.llm.wrv("mmincredit", "#hgk", [b && a.hnb < a.parent.qvw]);
            a.llm.wrv("lmincredit", "#hgk", [b && a.hnb > 0]);
            a.vnf();
            return (a.hnb >= a.parent.qvw)
        }
        return true
    };
    this.wjm = function() {
        var b = a.llm.ejh("cmincredit") == null || a.llm.wrv("cmincredit", "#aoi");
        if (b === true) {
            if (++a.gwy > 10) {
                a.fkw = 10
            }
            a.hnb = (a.hnb - (a.aat * a.fkw) > 0) ? a.hnb - (a.aat * a.fkw) : 0;
            a.parent.vcv.ixm("btn");
            a.llm.wrv("mincreditd", "#rig", [(a.hnb > 0) ? a.parent.txb(a.hnb) : "---"]);
            a.llm.wrv("mmincredit", "#hgk", [b && a.hnb < a.parent.qvw]);
            a.llm.wrv("lmincredit", "#hgk", [b && a.hnb > 0]);
            a.vnf();
            return (a.hnb >= a.parent.qvw || a.hnb <= 0)
        }
        return true
    };
    this.ohz = function() {
        var b = a.llm.ejh("cmaxcredit") == null || a.llm.wrv("cmaxcredit", "#aoi");
        if (b === true) {
            if (++a.gwy > 10) {
                a.fkw = 10
            }
            a.vnn = (a.vnn + (a.bwj * a.fkw) > 0) ? a.vnn + (a.bwj * a.fkw) : 0;
            a.parent.vcv.ixm("btn");
            a.llm.wrv("maxcreditd", "#rig", [(a.vnn > 0) ? a.parent.txb(a.vnn) : "---"]);
            a.llm.wrv("lmaxcredit", "#hgk", [b && a.vnn > a.parent.qvw]);
            a.vnf();
            return (a.vnn <= a.parent.qvw)
        }
        return true
    };
    this.wku = function() {
        var b = a.llm.ejh("cmaxcredit") == null || a.llm.wrv("cmaxcredit", "#aoi");
        if (b === true) {
            if (++a.gwy > 10) {
                a.fkw = 10
            }
            a.vnn = (a.vnn - (a.bwj * a.fkw) > a.parent.qvw) ? a.vnn - (a.bwj * a.fkw) : a.parent.qvw;
            a.parent.vcv.ixm("btn");
            a.llm.wrv("maxcreditd", "#rig", [(a.vnn > 0) ? a.parent.txb(a.vnn) : "---"]);
            a.llm.wrv("lmaxcredit", "#hgk", [b && a.vnn > a.parent.qvw]);
            a.vnf();
            return (a.vnn <= a.parent.qvw)
        }
        return true
    };
    this.eqb = function() {
        var b = a.llm.ejh("cmaxwin") == null || a.llm.wrv("cmaxwin", "#aoi");
        if (b === true) {
            if (++a.gwy > 10) {
                a.fkw = 10
            }
            a.vzv = (a.vzv + (a.bwj * a.fkw) > 0) ? a.vzv + (a.bwj * a.fkw) : 0;
            a.parent.vcv.ixm("btn");
            a.llm.wrv("maxwind", "#rig", [(a.vzv > 0) ? a.parent.txb(a.vzv) : "---"]);
            a.llm.wrv("lmaxwin", "#hgk", [b && a.vzv > a.bwj]);
            a.vnf();
            return (a.vzv <= a.bwj)
        }
        return true
    };
    this.ukq = function() {
        var b = a.llm.ejh("cmaxwin") == null || a.llm.wrv("cmaxwin", "#aoi");
        if (b === true) {
            if (++a.gwy > 10) {
                a.fkw = 10
            }
            a.vzv = (a.vzv - (a.bwj * a.fkw) > 0) ? a.vzv - (a.bwj * a.fkw) : a.bwj;
            a.parent.vcv.ixm("btn");
            a.llm.wrv("maxwind", "#rig", [(a.vzv > 0) ? a.parent.txb(a.vzv) : "---"]);
            a.llm.wrv("lmaxwin", "#hgk", [b && a.vzv > a.bwj]);
            a.vnf();
            return (a.vzv <= a.bwj)
        }
        return true
    };
    this.ozm = function() {
        var b = a.llm.ejh("cmincredit") == null || a.llm.wrv("cmincredit", "#aoi");
        a.hnb = a.parent.qvw;
        a.llm.wrv("mincreditd", "#rig", [(b === true && a.hnb > 0) ? a.parent.txb(a.hnb) : "---"]);
        a.llm.wrv("lmincredit", "#hgk", [b]);
        a.llm.wrv("mmincredit", "#hgk", [b && a.hnb < a.parent.qvw]);
        a.vnf()
    };
    this.pce = function() {
        var b = a.llm.ejh("cmaxcredit") == null || a.llm.wrv("cmaxcredit", "#aoi");
        a.vnn = a.parent.qvw;
        a.llm.wrv("maxcreditd", "#rig", [(b === true && a.vnn > 0) ? a.parent.txb(a.vnn) : "---"]);
        a.llm.wrv("lmaxcredit", "#hgk", [b && a.vnn > a.parent.qvw]);
        a.llm.wrv("mmaxcredit", "#hgk", [b]);
        a.vnf()
    };
    this.zhv = function() {
        var b = a.llm.ejh("cmaxwin") == null || a.llm.wrv("cmaxwin", "#aoi");
        if (a.vzv === 0) {
            a.vzv = a.bwj
        }
        a.llm.wrv("maxwind", "#rig", [(b === true && a.vzv > 0) ? a.parent.txb(a.vzv) : "---"]);
        a.llm.wrv("lmaxwin", "#hgk", [b && a.vzv > a.bwj]);
        a.llm.wrv("mmaxwin", "#hgk", [b]);
        a.vnf()
    };
    this.agz = function() {
        a.and = 0;
        a.llm.wrv("bett", "#xjb", [true, false, false]);
        a.llm.wrv("autot", "#xjb", [false, false, false]);
        a.llm.wrv("helpt", "#xjb", [false, false, false]);
        a.llm.wrv("settingt", "#xjb", [false, false, false]);
        a.llm.wrv("returnt", "#xjb", [false, false, false]);
        a.llm.qgo("bbuttons", "#ged", [a.okl]);
        a.llm.qgo("bbuttons", "#hgk", [a.okl]);
        a.llm.qgo("abuttons", "#ged", [false]);
        a.llm.qgo("acheckboxes", "#ged", [false]);
        a.llm.qgo("hbuttons", "#ged", [false]);
        a.llm.qgo("sbuttons", "#ged", [false]);
        a.vnf()
    };
    this.sqq = function() {
        var d = a.llm.ejh("cmincredit") == null || a.llm.wrv("cmincredit", "#aoi"),
            c = a.llm.ejh("cmaxcredit") == null || a.llm.wrv("cmaxcredit", "#aoi"),
            b = a.llm.ejh("cmaxwin") == null || a.llm.wrv("cmaxwin", "#aoi");
        a.and = 1;
        a.aat = (a.rxm > 0) ? a.parent.qyo() * a.rxm : a.aat;
        a.bwj = (a.mjj > 0) ? a.parent.qyo() * a.mjj : a.bwj;
        a.llm.wrv("bett", "#xjb", [false, false, false]);
        a.llm.wrv("autot", "#xjb", [true, false, false]);
        a.llm.wrv("helpt", "#xjb", [false, false, false]);
        a.llm.wrv("settingt", "#xjb", [false, false, false]);
        a.llm.wrv("returnt", "#xjb", [false, false, false]);
        a.llm.qgo("bbuttons", "#ged", [false]);
        a.llm.qgo("abuttons", "#ged", [true]);
        a.llm.wrv("mmincredit", "#hgk", [d && a.hnb < a.parent.qvw]);
        a.llm.wrv("lmaxcredit", "#hgk", [c && a.vnn > a.parent.qvw]);
        a.llm.wrv("lmaxwin", "#hgk", [b && a.vzv > a.bwj]);
        a.llm.qgo("acheckboxes", "#ged", [true]);
        a.llm.qgo("hbuttons", "#ged", [false]);
        a.llm.qgo("sbuttons", "#ged", [false]);
        if (a.sdd === true) {
            a.llm.wrv("cmincredit", "#ged", [false])
        }
        a.vnf()
    };
    this.xad = function() {
        a.and = 2;
        a.llm.wrv("bett", "#xjb", [false, false, false]);
        a.llm.wrv("autot", "#xjb", [false, false, false]);
        a.llm.wrv("helpt", "#xjb", [true, false, false]);
        a.llm.wrv("settingt", "#xjb", [false, false, false]);
        a.llm.wrv("returnt", "#xjb", [false, false, false]);
        a.llm.qgo("bbuttons", "#ged", [false]);
        a.llm.qgo("abuttons", "#ged", [false]);
        a.llm.qgo("acheckboxes", "#ged", [false]);
        a.llm.qgo("hbuttons", "#ged", [true]);
        a.llm.qgo("sbuttons", "#ged", [false]);
        a.vnf()
    };
    this.gjt = function() {
        a.and = 3;
        a.llm.wrv("bett", "#xjb", [false, false, false]);
        a.llm.wrv("autot", "#xjb", [false, false, false]);
        a.llm.wrv("helpt", "#xjb", [false, false, false]);
        a.llm.wrv("settingt", "#xjb", [true, false, false]);
        a.llm.wrv("returnt", "#xjb", [false, false, false]);
        a.llm.qgo("bbuttons", "#ged", [false]);
        a.llm.qgo("abuttons", "#ged", [false]);
        a.llm.qgo("acheckboxes", "#ged", [false]);
        a.llm.qgo("hbuttons", "#ged", [false]);
        a.llm.qgo("sbuttons", "#ged", [true]);
        a.llm.wrv("gamble", "#ged", [a.eco]);
        a.vnf()
    };
    this.jsg = function() {
        a.parent.xby();
        a.llm.wrv("returnt", "#xjb", [false, false, false])
    }
}
noh.prototype = new rjl;

function fwm() {
    var a = this;
    this.vte = null;
    this.byb = "bold";
    this.uch = "rgb(0,0,0)";
    this.bnz = null;
    this.txc = "rgb(255,255,255)";
    this.sik = null;
    this.wgr = "rgb(60,60,60)";
    this.ktg = null;
    this.kfa = null;
    this.ovn = false;
    this.xrl = [];
    this.jdh = [];
    this.ain = null;
    this.nue = 19;
    this.gbn = 15;
    this.ynm = 120;
    this.hkv = 2;
    this.vnh = 2;
    this.siu = 2;
    this.ndp = 10;
    this.god = 12;
    this.qtx = function(b, d, c) {
        fwm.prototype.qtx.call(this, b, d, c)
    };
    this.iub = function(b) {
        try {
            this.god = b.fontSize;
            this.nue = b.exa;
            this.gbn = b.zdu;
            this.ynm = b.abp;
            this.hkv = b.ndq;
            this.vnh = b.ccr;
            this.siu = b.mhc;
            this.ndp = b.hul
        } catch (c) {
            console.error(c)
        }
    };
    this.zpb = function(b) {
        try {
            this.vte = b.font;
            this.byb = b.out;
            this.uch = b.backgroundColor;
            this.bnz = b.dvo;
            this.txc = b.wkr;
            this.wgr = b.borderColor;
            this.sik = b.yrn;
            if (this.bnz) {
                this.ktg = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.ktg.addColorStop(0, this.bnz);
                this.ktg.addColorStop(0.5, this.uch)
            } else {
                this.ktg = this.uch
            }
            if (this.sik) {
                this.kfa = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.kfa.addColorStop(0, this.sik);
                this.kfa.addColorStop(1, this.wgr)
            } else {
                this.kfa = this.wgr
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.doc = function(b, g, c) {
        var e = b - this.x,
            d = g - this.y,
            f = (c && c === true) ? this.ndp : 0;
        if (e >= this.x && e <= this.x + this.width && d >= this.y && d <= this.y + this.height + f && this.yfs()) {
            this.parent.yvg();
            return true
        }
        return false
    };
    this.uue = function(d, b, c) {
        this.jdh.push({
            id: d,
            eop: b,
            value: c,
            apl: null
        })
    };
    this.kjs = function(e, c, d, b) {
        this.jdh.push({
            id: e,
            eop: c,
            value: d,
            apl: b
        })
    };
    this.ath = function(d, b, c) {
        this.xrl.push({
            id: d,
            odl: b,
            value: c
        })
    };
    this.yli = function(e, d) {
        for (var c = 0, b = this.jdh.length; c < b; c++) {
            if (this.jdh[c].id == e) {
                this.jdh[c].value = d;
                return true
            }
        }
        return false
    };
    this.cpv = function(c, e) {
        for (var d = 0, b = c.length; d < b; d++) {
            if (c[d] == e) {
                return d
            }
        }
        return -1
    };
    this.uwa = function(e, d) {
        for (var c = 0, b = this.xrl.length; c < b; c++) {
            if (this.xrl[c].id == e) {
                if (this.xrl[c].value != d) {
                    this.xrl[c].value = d;
                    return true
                } else {
                    return false
                }
            }
        }
        return false
    };
    this.owq = function(b) {
        this.ain = b
    };
    this.ged = function(b) {
        this.ovn = b
    };
    this.yfs = function(b) {
        return this.ovn
    };
    this.cja = function(c, b) {
        if (this.yli(c, b)) {
            window.jyh(a.vnf)
        }
    };
    this.vlr = function(c, b) {
        if (this.uwa(c, b)) {
            window.jyh(a.vnf)
        }
    };
    this.jge = function(b) {
        this.owq(b);
        window.jyh(a.vnf)
    };
    this.vnf = function() {
        if (!a.roy() || !a.parent.ufa()) {
            return
        }
        var e = (a.height - a.god) / 2 + a.vnh,
            c = a.hkv + a.nue * a.jdh.length,
            d = a.width - c - (a.ynm * a.xrl.length),
            b = a.context2D;
        b.save();
        vmg.arb.lux(b, 0, 0, a.width, a.height, a.ktg, 1);
        a.vqm(b, e);
        a.dra(b, e);
        if (a.ain && a.ain != "") {
            vmg.arb.mqr(b, a.ain, a.txc, c, e, d, a.god, a.vte, a.god, a.byb)
        } else {
            if (a.yfs()) {
                a.liy(b)
            }
        }
        a.lre(b, 0, a.height - a.siu / 2, a.width, a.height - a.siu / 2);
        b.restore();
        if (a.stf && a.edu) {
            a.stf.drawImage(a.edu, a.x, a.y)
        }
    };
    this.vqm = function(d, g) {
        var c = 0;
        for (var f = 0, b = this.jdh.length; f < b; f++) {
            if (this.jdh[f].apl) {
                var e = this.cpv(this.jdh[f].apl, this.jdh[f].value);
                if (this.jdh[f].eop instanceof Array) {
                    vmg.arb.mqr(d, this.jdh[f].eop[e], this.txc, c, g, this.nue, this.god, this.vte, this.god, this.byb)
                } else {
                    if (this.jdh[f].eop instanceof Image || this.jdh[f].eop instanceof HTMLCanvasElement) {
                        d.drawImage(this.jdh[f].eop, e * this.gbn, 0, this.gbn, this.jdh[f].eop.height, c + this.hkv, g - this.vnh, this.nue - 2 * this.hkv, this.god)
                    }
                }
            } else {
                d.save();
                d.globalAlpha = (this.jdh[f].value == true) ? 1 : 0.3;
                if (this.jdh[f].eop instanceof String) {
                    vmg.arb.mqr(d, this.jdh[f].eop, this.txc, c, g, this.nue, this.god, this.vte, this.god, this.byb)
                } else {
                    if (this.jdh[f].eop instanceof Image || this.jdh[f].eop instanceof HTMLCanvasElement) {
                        d.drawImage(this.jdh[f].eop, c + this.hkv, g - this.vnh, this.nue - 2 * this.hkv, this.god)
                    }
                }
                d.restore()
            }
            c += this.nue;
            this.lre(d, c, 0, c, this.height)
        }
        return c
    };
    this.dra = function(d, f) {
        var c = this.width - this.hkv - this.ynm * this.xrl.length;
        for (var e = 0, b = this.xrl.length; e < b; e++) {
            if (this.xrl[e].id == "freeplay") {
                vmg.arb.lux(d, c, 0, this.ynm, this.height, "red", 0.4)
            } else {
                if (this.xrl[e].id == "freespin") {
                    vmg.arb.lux(d, c, 0, this.ynm, this.height, "rgb(100,255,100)", 0.5)
                }
            }
            this.lre(d, c, 0, c, this.height);
            vmg.arb.mqr(d, this.xrl[e].odl + this.xrl[e].value, this.txc, c, f, this.ynm, this.god, this.vte, this.god, this.byb);
            c += this.ynm
        }
    };
    this.lre = function(b, d, f, c, e) {
        b.save();
        b.strokeStyle = this.kfa;
        b.lineWidth = this.siu;
        b.beginPath();
        b.moveTo(d, f);
        b.lineTo(c, e);
        b.stroke();
        b.restore()
    };
    this.liy = function(c) {
        if (this.parent.nhr.ejh("topb") == null) {
            return
        }
        var g = 3 * this.height,
            j = this.siu,
            e = 9,
            d = Math.floor(this.height / 5),
            b = (this.width - g) / 2,
            k = this.siu;
        c.save();
        c.strokeStyle = this.wgr;
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
fwm.prototype = new rjl;

function xwl() {
    var b = this;
    var c = 0;
    var a = 1;
    this.msr = 7;
    this.mgp = 89;
    this.ini = 10000;
    this.llm = null;
    this.ovn = false;
    this.vnj = false;
    this.yzh = -1;
    this.klg = 0;
    this.vte = null;
    this.byb = "bold";
    this.uch = "black";
    this.jac = null;
    this.kyg = null;
    this.siw = null;
    this.txc = "white";
    this.kzv = 0.8;
    this.ady = 0;
    this.iai = 0;
    this.weu = 0;
    this.vyz = 0;
    this.hzq = 0;
    this.cpd = 0;
    this.wyr = 0;
    this.hkv = 10;
    this.vnh = 5;
    this.pby = 10;
    this.ujf = this.hkv;
    this.nfy = 10;
    this.shp = 20;
    this.hij = 40;
    this.tdd = 4;
    this.god = 10;
    this.tvs = null;
    this.loj = null;
    this.gxv = "";
    this.pji = null;
    this.qtx = function(d, f, e) {
        xwl.prototype.qtx.call(this, d, f, e);
        this.llm = new fsv();
        this.llm.qtx();
        this.llm.haq("buttons");
        this.llm.haq("system");
        this.llm.haq("setting")
    };
    this.iub = function(d) {
        try {
            this.god = d.fontSize;
            this.nfy = d.sbg;
            this.shp = d.cwm;
            this.hij = d.onk;
            this.tdd = d.skr;
            this.hkv = d.ndq;
            this.vnh = d.ccr;
            this.pby = d.ubd
        } catch (f) {
            console.error(f)
        }
    };
    this.zpb = function(g, m) {
        try {
            var k = this.llm.wnf("buttons"),
                j = (m === true) ? g.rhe.dfa : g.drr.dfa;
            this.vte = g.font;
            this.byb = g.out;
            this.uch = g.backgroundColor;
            this.jac = g.gds;
            this.kyg = g.uoj;
            this.txc = g.wkr;
            this.kzv = g.irx;
            if (this.jac && this.kyg) {
                this.siw = this.context2D.createLinearGradient(0, 0, this.width, 0);
                this.siw.addColorStop(0, this.jac);
                this.siw.addColorStop(0.5, this.kyg);
                this.siw.addColorStop(1, this.jac)
            }
            for (var f = 0, d = k.length; f < d; f++) {
                k[f].zpb(j)
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.doc = function(p, o) {
        var n = this.llm.pci(),
            q = this.llm.ejh("audio"),
            r = this.llm.ejh("language"),
            f = this.llm.ejh("history"),
            e = p - this.x,
            d = o - this.y;
        if (this.vnj) {
            return true
        }
        for (var l = 0, m = n.length; l < m; l++) {
            var g = n[l];
            if (e >= g.x && e <= g.x + g.width && d >= g.y && d <= g.y + g.height && g.roy()) {
                if (g.yfs() && !g.vey()) {
                    if (g != q && g != r) {
                        this.parent.vcv.acn("btn");
                        this.parent.vcv.ixm("btn")
                    }
                    g.xjb(true, true, false);
                    g.pxk();
                    for (var k = 0; k < m; k++) {
                        n[k].xon(true)
                    }
                    if (g != f) {
                        if (this.yzh >= 0) {
                            clearTimeout(this.yzh);
                            this.yzh = -1
                        }
                        this.yzh = setTimeout(this.qec, this.ini)
                    }
                }
                return true
            }
        }
        if (this.roy() && this.yfs()) {
            if (p < this.x + this.hzq || p > this.x + this.hzq + this.cpd || o < this.y || o > this.y + this.height) {
                if (this.yzh >= 0) {
                    clearTimeout(this.yzh);
                    this.yzh = -1
                }
                return false
            }
        }
        return true
    };
    this.ecg = function() {
        var g = this.llm.pci();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.eqj() == true) {
                e.xjb(false, true);
                return true
            }
        }
        return false
    };
    this.bhd = function(e) {
        var o = this.llm.pci(),
            d = this.llm.wnf("system"),
            m = this.llm.wnf("setting"),
            q = this.llm.ejh("audio"),
            l = 0,
            k = 0,
            n = 0,
            g = 0;
        if (this.vnj) {
            return true
        }
        for (l = 0, n = m.length; l < n; l++) {
            var f = m[l];
            if ((e == f.vii || e == f.gfs) && !f.vey()) {
                if (f != q) {
                    this.parent.vcv.acn("btn");
                    this.parent.vcv.ixm("btn")
                }
                f.xjb(true, true, false);
                f.pxk();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].xon(true)
                }
                if (this.yzh >= 0) {
                    clearTimeout(this.yzh);
                    this.yzh = -1
                }
                return true
            }
        }
        for (l = 0, n = d.length; l < n; l++) {
            var f = d[l];
            if ((e == f.vii || e == f.gfs) && f.yfs() && !f.vey()) {
                if (f != q) {
                    this.parent.vcv.acn("btn");
                    this.parent.vcv.ixm("btn")
                }
                f.xjb(true, true, false);
                f.pxk();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].xon(true)
                }
                if (this.yzh >= 0) {
                    clearTimeout(this.yzh);
                    this.yzh = -1
                }
                return true
            }
        }
        if (this.roy() && this.yfs()) {
            if (this.parent.gky) {
                for (l = 0, n = this.parent.gky.ghl.length; l < n; l++) {
                    var p = this.parent.gky.ghl[l];
                    if (p.tji == e || p.tji == e) {
                        if (this.yzh >= 0) {
                            clearTimeout(this.yzh);
                            this.yzh = -1
                        }
                        return false
                    }
                }
            }
        }
        return false
    };
    this.vin = function() {
        var g = this.llm.pci();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.eqj() == true) {
                e.xjb(false, true, false);
                return true
            }
        }
        return false
    };
    this.jws = function(e, m) {
        var k = this.llm.pci(),
            l = e - this.x,
            j = m - this.y;
        this.loj = this.tvs;
        this.tvs = null;
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l >= f.x && l <= f.x + f.width && j >= f.y && j <= f.y + f.height && f.roy() && f.yfs() && !f.vey()) {
                this.tvs = f
            }
        }
        if (this.tvs) {
            this.fqb(true)
        } else {
            this.fqb(false)
        }
        return true
    };
    this.gfg = function(e, f, g, i, l, d, m) {
        this.wyr = g.width;
        var k = new njt(this.ujf, this.vnh, this.wyr, this.wyr);
        var j = new vsv();
        j.qtx(k, this.context2D);
        j.parent = this;
        j.pxk = i;
        j.npf = f;
        j.ljn(d, m);
        j.iub(this.parent.ple.brd.uco);
        j.zpb(this.parent.style.brd.drr.dfa);
        j.she(g);
        if (l != null) {
            j.gfs = l.ntv;
            j.vii = l.tji;
            j.hap = l.value
        }
        this.llm.mwl(e, j, ["buttons", "setting"]);
        this.ujf += this.wyr + this.hkv;
        this.cpd = this.ujf
    };
    this.oaj = function(k, j, i, g, e) {
        this.wyr = i.width;
        var f = new njt(this.ujf, this.vnh, this.wyr, this.wyr);
        var d = new vsv();
        d.qtx(f, this.context2D);
        d.parent = this;
        d.pxk = g;
        d.npf = j;
        d.iub(this.parent.ple.brd.uco);
        d.zpb(this.parent.style.brd.drr.dfa);
        d.she(i);
        if (e != null) {
            d.gfs = e.ntv;
            d.vii = e.tji;
            d.hap = e.value
        }
        this.llm.mwl(k, d, ["buttons", "system"]);
        this.ujf += this.wyr + this.hkv;
        this.cpd = this.ujf
    };
    this.hcg = function() {
        var f = this.llm.pci();
        this.cpd += 2 * this.pby;
        this.hzq = Math.round((this.width - this.cpd) / 2);
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].x += this.hzq + this.pby
        }
    };
    this.ltl = function() {
        return this.cpd
    };
    this.ged = function(d) {
        this.ovn = d
    };
    this.yfs = function() {
        return this.ovn
    };
    this.wfd = function(g) {
        var f = this.llm.pci();
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].ged(g)
        }
        this.parent.vnf()
    };
    this.sha = function(g) {
        var f = this.llm.wnf("system");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].ged(g)
        }
        this.parent.vnf()
    };
    this.xei = function(g) {
        var f = this.llm.wnf("setting");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].ged(g)
        }
        this.parent.vnf()
    };
    this.fjz = function() {
        if (this.roy()) {
            return
        }
        if (this.vnj) {
            if (this.vyz === a) {
                this.pji = this.fjz
            } else {
                this.pji = null
            }
        } else {
            this.pji = null;
            this.tif();
            this.nvt()
        }
    };
    this.wbf = function(d) {
        if (this.parent.jzg) {
            this.parent.jzg()
        }
        this.stop();
        this.vnj = false;
        this.pji = null;
        this.hgk(true, d);
        if (this.yzh >= 0) {
            clearTimeout(this.yzh);
            this.yzh = -1
        }
        this.yzh = setTimeout(this.qec, this.ini)
    };
    this.qec = function() {
        if (b.roy()) {
            b.parent.vcv.acn("panel_out");
            b.parent.vcv.ixm("panel_out");
            b.qaz()
        }
    };
    this.qaz = function() {
        if (!this.roy()) {
            return
        }
        if (this.vnj) {
            if (this.vyz === c) {
                this.pji = this.qaz
            } else {
                this.pji = null
            }
        } else {
            this.pji = null;
            this.bfg();
            this.nvt();
            if (this.yzh >= 0) {
                clearTimeout(this.yzh);
                this.yzh = -1
            }
        }
    };
    this.kza = function(d) {
        if (this.parent.gyr) {
            this.parent.gyr()
        }
        this.stop();
        this.vnj = false;
        this.pji = null;
        this.hgk(false, d);
        if (typeof this.hds === "function") {
            this.hds();
            this.hds = null
        }
    };
    this.tif = function() {
        this.hgk(true);
        this.vnj = true;
        this.ovn = false;
        this.vyz = c;
        this.ady = Math.floor(this.height / this.msr);
        this.weu = 1;
        this.iai = Math.floor(this.height / this.msr)
    };
    this.bfg = function() {
        if (this.parent.gyr) {
            this.parent.gyr()
        }
        this.vnj = true;
        this.ovn = false;
        this.vyz = a;
        this.ady = -Math.floor(this.height / this.msr);
        this.weu = 1;
        this.iai = this.height
    };
    this.nvt = function() {
        this.klg = setInterval(this.snb, this.mgp)
    };
    this.fyx = function() {
        if (b.vyz == c) {
            if (b.parent.jzg) {
                b.parent.jzg()
            }
            if (b.yzh >= 0) {
                clearTimeout(b.yzh);
                b.yzh = -1
            }
            b.yzh = setTimeout(b.qec, b.ini)
        }
        clearInterval(b.klg);
        if (b.pji) {
            b.pji()
        }
    };
    this.stop = function() {
        clearTimeout(this.yzh);
        clearInterval(this.klg);
        this.yzh = -1
    };
    this.snb = function() {
        if (!b.rpi()) {
            b.fyx()
        }
    };
    this.rpi = function() {
        if (b.weu < b.msr) {
            b.parent.vnf(b.x, b.y, b.width, b.height);
            b.iai += b.ady;
            b.weu++;
            return true
        } else {
            b.vnj = false;
            b.ovn = true;
            if (b.vyz == a) {
                b.hgk(false);
                if (typeof b.hds === "function") {
                    b.hds();
                    b.hds = null
                }
            }
            b.parent.vnf(b.x, b.y, b.width, b.height);
            return false
        }
    };
    this.vnf = function(n, m, o, g) {
        if (!this.roy() || !this.parent.ufa()) {
            return
        }
        var p = this.context2D,
            e = (n != null && m != null && o != null && g != null),
            l = this.llm.pci(),
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
        this.suz(p);
        for (var f = 0, j = l.length; f < j; f++) {
            l[f].vnf()
        }
        if (this.tvs && this.gxv != "") {
            k = this.tvs.x - this.hkv - this.wyr;
            d = 3 * this.wyr + 2 * this.hkv;
            if (k + d >= this.hzq + this.cpd) {
                k = this.hzq + this.cpd - d;
                vmg.arb.fow(p, this.gxv, this.txc, k, this.tvs.y + this.tvs.height, d, this.god, this.vte, this.god, this.byb, this.hkv)
            } else {
                vmg.arb.mqr(p, this.gxv, this.txc, k, this.tvs.y + this.tvs.height, d, this.god, this.vte, this.god, this.byb)
            }
        }
        p.restore();
        if (this.vnj) {
            if (this.stf && this.edu && this.iai > 0) {
                this.stf.drawImage(this.edu, 0, this.height - this.iai, this.width, this.iai, this.x, this.y, this.width, this.iai)
            }
        } else {
            if (e) {
                this.parent.vnf(this.x + n, this.y + m, o, g)
            } else {
                if (this.stf && this.edu) {
                    this.stf.drawImage(this.edu, this.x, this.y)
                }
            }
        }
    };
    this.suz = function(d) {
        var f = this.tdd,
            e = f / 2;
        d.save();
        d.strokeStyle = this.siw;
        d.fillStyle = this.uch;
        d.lineWidth = f;
        d.beginPath();
        d.moveTo(e, 0);
        d.arcTo(e, this.nfy, this.nfy + e, this.nfy, this.nfy);
        d.arcTo(this.hzq, this.nfy, this.hzq, this.height - this.shp - e, this.hij);
        d.arcTo(this.hzq, this.height - e, this.hzq + this.shp, this.height - e, this.shp);
        d.lineTo(this.hzq + this.cpd - this.shp, this.height - e);
        d.arcTo(this.hzq + this.cpd, this.height - e, this.hzq + this.cpd, this.height - this.shp - e, this.shp);
        d.arcTo(this.hzq + this.cpd, this.nfy, this.width - this.nfy - e, this.nfy, this.hij);
        d.arcTo(this.width - e, this.nfy, this.width - e, 0, this.nfy);
        d.stroke();
        d.closePath();
        d.globalAlpha = this.kzv;
        d.fill();
        d.restore()
    };
    this.fqb = function(d) {
        if (this.tvs && this.tvs != this.loj) {
            if (d && this.tvs) {
                this.gxv = this.parent.zoy(this.tvs.npf);
                if (!vmg.arb.lih) {
                    this.gxv = (this.tvs.hap) ? this.gxv + " [" + this.tvs.hap + "]" : this.gxv
                }
            } else {
                this.gxv = ""
            }
            this.parent.vnf(this.x, this.y, this.width, this.height)
        } else {
            if (d && (this.tvs && this.gxv != this.parent.zoy(this.tvs.npf))) {
                this.gxv = this.parent.zoy(this.tvs.npf);
                if (!vmg.arb.lih) {
                    this.gxv = (this.tvs.hap) ? this.gxv + " [" + this.tvs.hap + "]" : this.gxv
                }
            }
            this.parent.vnf(this.x, this.y, this.width, this.height)
        }
    };
    this.hds = null
}
xwl.prototype = new rjl;

function jld() {
    var a = this;
    this.hpb = "LOADING ... ";
    this.tul = "ERROR";
    this.hbg = null;
    this.eyi = null;
    this.pqu = false;
    this.yzr = false;
    this.wrn = true;
    this.pxk = null;
    this.cci = null;
    this.erx = null;
    this.klg = 0;
    this.xvy = 0;
    this.mko = false;
    this.nqh = 0;
    this.jef = 60;
    this.yfl = 0;
    this.vte = "arial";
    this.byb = "bold";
    this.fqn = "black";
    this.ese = "rgb(0,100,10)";
    this.qet = "rgb(80,255,100)";
    this.yji = "rgb(120,120,120)";
    this.uad = "red";
    this.pub = "white";
    this.txc = "yellow";
    this.god = 14;
    this.ptq = 18;
    this.epb = 20;
    this.aii;
    this.viy;
    this.sfz;
    this.zpc;
    this.pby = 5;
    this.hkv = 12;
    this.vnh = 5;
    this.qye = 2;
    this.ygh = new njt();
    this.iqs = new njt();
    this.dlk = [];
    this.cyp = 0;
    this.cwe = 20;
    this.qtx = function(b, d, c) {
        jld.prototype.qtx.call(this, b, d, c);
        this.cci = document.createElement("canvas");
        this.erx = this.cci.getContext("2d")
    };
    this.iub = function(b) {
        try {
            this.god = b.fontSize;
            this.ptq = b.igu;
            this.epb = b.bso;
            this.pby = b.ubd;
            this.hkv = b.ndq;
            this.vnh = b.ccr;
            this.qye = b.smu;
            this.aii = b.oad;
            this.viy = b.xjz;
            this.sfz = b.ixj;
            this.zpc = b.jca;
            this.ygh = b.nux;
            if (this.iqs.width > 0 && this.iqs.height) {
                this.jpd()
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.zpb = function(b) {
        try {
            this.vte = b.font;
            this.byb = b.out;
            this.fqn = b.backgroundColor;
            this.ese = b.ewv;
            this.qet = b.kla;
            this.yji = b.ioa;
            this.uad = b.fec;
            this.pub = b.tvh;
            this.txc = b.wkr;
            this.eyi = b.eyi
        } catch (c) {
            console.error(c)
        }
    };
    this.doc = function(b, e) {
        var d = b - this.x,
            c = e - this.y;
        if (d >= this.iqs.x && d <= this.iqs.x + this.iqs.width && c >= this.iqs.y && c <= this.iqs.y + this.iqs.height) {
            this.pxk();
            return true
        }
        return false
    };
    this.vnf = function(b) {
        if (b && b >= 0) {
            this.xvy = b
        }
        if (!this.roy()) {
            return
        }
        if (vmg.rkn.value45 == vmg.gko.ygc) {
            this.fkc()
        } else {
            if (vmg.rkn.value45 == vmg.gko.acy) {
                this.tbw()
            }
        }
    };
    this.fkc = function() {
        if (this.pqu) {
            var c = this.context2D,
                b = this.sfz.width / 100;
            c.save();
            if (this.yzr === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.vcv.kos("splash"), 0, 0, this.width, this.height);
            if (this.eyi) {
                vmg.arb.lux(c, this.pby, this.pby, this.width - 2 * this.pby, this.height - 2 * this.pby, this.eyi, 0.3)
            }
            if (this.hbg != null && this.hbg != "") {
                this.yxc(this.zpc, true)
            } else {
                if (this.mko) {
                    vmg.arb.lux(c, this.ygh.x, this.ygh.y, this.ygh.width, this.ygh.height, this.fqn, 0.7);
                    c.drawImage(this.cci, this.ygh.x + this.ygh.width * (1 - this.dlk[this.cyp]) / 2, this.ygh.y + this.ygh.height * (1 - this.dlk[this.cyp]) / 2, this.ygh.width * this.dlk[this.cyp], this.ygh.height * this.dlk[this.cyp])
                } else {
                    if (this.wrn === true) {
                        if (this.yzr === false) {
                            vmg.arb.lux(c, this.aii.x, this.aii.y, this.aii.width, this.aii.height, this.fqn, 0.7)
                        }
                        var e = this.hpb + " " + this.xvy + "%";
                        var d = c.createLinearGradient(this.sfz.x, this.sfz.y, this.sfz.x + this.sfz.width, this.sfz.y);
                        d.addColorStop(0, this.ese);
                        d.addColorStop(1, this.qet);
                        vmg.arb.mqr(c, e, this.pub, this.viy.x, this.viy.y, this.viy.width, this.viy.height, this.vte, this.god, this.byb);
                        vmg.arb.ijq(c, this.sfz.x - this.qye, this.sfz.y, this.sfz.width + 2 * this.qye, this.sfz.height, this.qye, this.fqn, 0.8, this.yji, this.qye, 0.8);
                        vmg.arb.lux(c, this.sfz.x, this.sfz.y + this.qye / 2, b * this.xvy, this.sfz.height - this.qye, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.tbw = function() {
        if (this.pqu) {
            var c = this.context2D,
                b = this.sfz.width / 100;
            c.save();
            if (this.yzr === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.vcv.kos("splash"), 0, 0, this.width, this.height);
            if (this.hbg != null && this.hbg != "") {
                this.yxc(this.zpc, true)
            } else {
                if (this.mko) {
                    c.drawImage(this.parent.vcv.kos("continue"), this.ygh.x, this.ygh.y, this.ygh.width, this.ygh.height);
                    c.drawImage(this.cci, this.ygh.x + this.ygh.width * (1 - this.dlk[this.cyp]) / 2, this.ygh.y + this.ygh.height * (1 - this.dlk[this.cyp]) / 2, this.ygh.width * this.dlk[this.cyp], this.ygh.height * this.dlk[this.cyp])
                } else {
                    if (this.wrn === true) {
                        vmg.arb.lux(c, this.sfz.x, this.sfz.y, this.sfz.width, this.sfz.height, "rgb(0,0,0)", 0.5);
                        vmg.arb.lux(c, this.sfz.x, this.sfz.y, b * this.xvy, this.sfz.height, "rgb(0,250,0)", 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.yxc = function(c, m) {
        var l = this.context2D,
            o = [],
            d = this.god,
            k = this.hbg,
            f = "",
            t = 0,
            v = 0,
            s = 0,
            u = 0,
            n = "center",
            e = Math.round(d * 1.5),
            j = Math.round(this.ptq * 1.5),
            b = 0,
            w = 1,
            q = 0,
            g = 0;
        l.save();
        l.font = this.byb + " " + d + "px " + this.vte;
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
                    if (u >= c.width - 2 * this.hkv) {
                        o[v] = k.substring(s, t);
                        v++;
                        s = t + 1;
                        f = k.substring(t + 1, p)
                    }
                }
            }
        }
        b = v * (e);
        if (b > (c.height - j - this.vnh)) {
            w = (c.height - j - this.vnh) / b;
            d = Math.round(d * w) - 1;
            l.font = this.byb + " " + d + "px " + this.vte;
            e = Math.round(d * 1.5);
            b = v * (e)
        }
        if (d < 10) {
            w = 10 / d;
            d = Math.round(d * w);
            l.font = this.byb + " " + d + "px " + this.vte;
            e = Math.round(d * 1.5);
            b = v * (e);
            g = (c.height - (j + b + this.vnh));
            c.height = j + b + this.vnh;
            c.y += g
        }
        l.textAlign = n;
        l.lineJoin = "round";
        l.lineCap = "round";
        if (m && m === true) {
            vmg.arb.lux(l, c.x, c.y, c.width, c.height, this.fqn, 0.7)
        }
        if (this.tul != null) {
            l.font = this.byb + " " + this.ptq + "px " + this.vte;
            l.fillStyle = this.uad;
            l.textBaseline = "bottom";
            l.fillText(this.tul, c.x + c.width / 2, c.y + this.ptq + this.vnh)
        }
        l.font = this.byb + " " + d + "px " + this.vte;
        l.fillStyle = this.pub;
        if (o.length == 1) {
            q = j + b + e;
            l.fillText(o[0], (c.x + c.width / 2), c.y + q)
        } else {
            for (var p = 0, r = o.length; p < r; p++) {
                q = j + (b + e) / (r + 1) * (p + 1);
                if (n == "start") {
                    l.fillText(o[p], (c.x + this.hkv), c.y + q)
                } else {
                    l.fillText(o[p], (c.x + c.width / 2), c.y + q)
                }
            }
        }
        l.restore()
    };
    this.khm = function() {
        return (this.mko)
    };
    this.hza = function() {
        for (var b = 0; b < this.cwe; b++) {
            this.dlk[b] = 1 - Math.sin(Math.PI * b / (this.cwe - 1)) * 0.04
        }
        this.dlk[this.cwe - 1] = 1;
        this.mko = true;
        this.cyp = 0;
        this.jpd();
        this.klg = setInterval(this.drm, this.jef);
        this.vnf()
    };
    this.drm = function() {
        a.vnf();
        a.cyp = (a.cyp < a.cwe - 1) ? a.cyp + 1 : 0
    };
    this.stop = function() {
        this.mko = false;
        clearTimeout(this.klg)
    };
    this.jpd = function() {
        var b = this.erx;
        this.iqs = this.ygh;
        this.cci.width = Math.round(this.iqs.width);
        this.cci.height = Math.round(this.iqs.height);
        b.save();
        b.clearRect(0, 0, this.cci.width, this.cci.height);
        vmg.arb.vxv(b, this.parent.language.mly, this.txc, 0, 0, this.cci.width, this.cci.height, this.vte, this.epb, this.byb, "center", true);
        b.restore()
    }
}
jld.prototype = new rjl;

function xxu() {
    var b = this;
    var c = 0;
    var a = 1;
    var e = 2;
    var d = 3;
    this.xda = null;
    this.pvc = null;
    this.rda = null;
    this.dbp = null;
    this.byc = null;
    this.nvg = [];
    this.sku = 0;
    this.mks = [];
    this.wlc = [];
    this.and = 0;
    this.vks = false;
    this.qms = false;
    this.qtx = function() {
        this.xda = document.getElementById("messageOverlay");
        this.pvc = document.getElementById("messagePanel");
        this.rda = document.getElementById("messageTitle");
        this.dbp = document.getElementById("messageText");
        this.byc = document.getElementById("btne");
        if (this.byc) {
            this.byc.innerHTML = "\u00D7";
            this.byc.onclick = this.qaz;
            this.byc.ontouchend = this.qaz
        }
        for (var f = 0; f < 4; f++) {
            this.nvg[f] = document.getElementById("btn" + (f + 1))
        }
    };
    this.zpb = function(f) {
        try {
            this.mks = f.qrz
        } catch (g) {
            console.error(g)
        }
    };
    this.iub = function(j) {
        try {
            if (this.pvc) {
                vmg.arb.ldc(this.pvc, j.ztm)
            }
            if (this.rda) {
                this.rda.style.fontSize = j.ucb + "px";
                vmg.arb.ldc(this.rda, j.lnu)
            }
            if (this.dbp) {
                this.dbp.style.fontSize = j.jui + "px";
                vmg.arb.ldc(this.dbp, j.xhe)
            }
            if (this.byc) {
                vmg.arb.ldc(this.byc, j.wxc)
            }
            for (var g = 0, f = this.nvg.length; g < f; g++) {
                this.nvg[g].style.fontSize = j.uco.fontSize + "px";
                this.nvg[g].style.top = j.bhn.y + "px";
                this.nvg[g].style.height = j.bhn.height + "px"
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.fjz = function(j) {
        this.wlc.length = 0;
        this.and = 0;
        for (var g = 0, f = j.length; g < f; g++) {
            this.wlc[g] = j[g]
        }
        this.rpd(this.wlc[this.and])
    };
    this.qaz = function() {
        if (b.pvc) {
            b.qms = false;
            b.pvc.style.display = "none";
            b.xda.style.display = "none";
            vmg.yov.mca();
            vmg.yov.hpf = false
        }
    };
    this.rpd = function(l) {
        var n = this.wlc.length > 1,
            m = "";
        if (l.Buttons && l.Buttons.length >= 1) {
            for (var k = l.Buttons.length - 1; k >= 0; k--) {
                if (l.Buttons[k].Action.toLowerCase() == "cashier") {
                    l.Buttons.splice(k, 1)
                }
            }
        }
        if (l.uri === vmg.ead.msd || l.uri === vmg.ead.typ) {
            this.sku = d;
            this.vks = (l.DisplayType == vmg.hub.bno.dzg) ? true : false
        } else {
            if (l.uri === vmg.ead.kff || l.uri === vmg.ead.eqp || l.uri === vmg.ead.hqs || l.uri === vmg.ead.roulette.pfi || l.uri === vmg.ead.roulette.yvc) {
                this.sku = a;
                this.vks = false
            } else {
                if (l.uri === vmg.ead.kwu || l.uri === vmg.ead.ipu) {
                    this.sku = c;
                    this.vks = false
                } else {
                    if (l.uri === vmg.ead.oqp || l.uri === vmg.ead.ppb || l.uri === vmg.ead.pvw) {
                        this.sku = e;
                        this.vks = false
                    }
                }
            }
        }
        if (l.Title && this.rda) {
            this.rda.style.color = this.mks[this.sku];
            this.rda.innerHTML = l.Title
        }
        if (l.Text && this.dbp) {
            this.dbp.innerHTML = l.Text.replace(/[\r]?\n/g, "<br>")
        }
        if (n) {
            this.nvg[0].innerHTML = "\u2039";
            this.nvg[0].onclick = this.ruw;
            this.nvg[0].ontouchend = this.ruw;
            this.nvg[0].style.display = "inline-block";
            this.nvg[this.nvg.length - 1].innerHTML = "\u203A";
            this.nvg[this.nvg.length - 1].onclick = this.kde;
            this.nvg[this.nvg.length - 1].ontouchend = this.kde;
            this.nvg[this.nvg.length - 1].style.display = "inline-block"
        }
        for (var k = 0, g = (n) ? 1 : 0, f = (n) ? this.nvg.length - 1 : this.nvg.length; g < f; g++, k++) {
            if (l.Buttons && k < l.Buttons.length) {
                m = l.Buttons[k].Text;
                if (m.indexOf("_") != 0) {
                    this.nvg[g].innerHTML = m
                } else {
                    var j = m.substr(1);
                    if (j == "exit") {
                        this.nvg[g].innerHTML = vmg.yov.language.lzy
                    } else {
                        if (j == "continue") {
                            this.nvg[g].innerHTML = vmg.yov.language.mly.replace(/ /g, "")
                        } else {
                            this.nvg[g].innerHTML = j.toUpperCase()
                        }
                    }
                }
                if (l.Buttons[k].Action.toLowerCase() == "quit") {
                    this.nvg[g].onclick = vmg.yov.lso;
                    this.nvg[g].ontouchend = vmg.yov.lso
                } else {
                    if (l.Buttons[k].Action.toLowerCase() == "continue") {
                        if (l.uri === vmg.ead.msd) {
                            this.nvg[g].onclick = this.pgr.bind(this, l.Buttons[k].Link);
                            this.nvg[g].ontouchend = this.pgr.bind(this, l.Buttons[k].Link)
                        } else {
                            if (l.uri === vmg.ead.typ || l.uri === vmg.ead.oqp || l.uri === vmg.ead.ppb) {
                                this.nvg[g].onclick = this.qnq;
                                this.nvg[g].ontouchend = this.qnq
                            } else {
                                if (l.uri === vmg.ead.kwu || l.uri === vmg.ead.ipu || l.uri === vmg.ead.pvw) {
                                    this.nvg[g].onclick = this.sjr;
                                    this.nvg[g].ontouchend = this.sjr
                                }
                            }
                        }
                    } else {
                        if (l.Buttons[k].Action.toLowerCase() == "history") {
                            this.nvg[g].onclick = vmg.yov.sdc;
                            this.nvg[g].ontouchend = vmg.yov.sdc
                        } else {
                            if (l.Buttons[k].Action.toLowerCase() == "link") {
                                if (l.Buttons[k].LinkType === vmg.hub.ryp.adu) {
                                    this.nvg[g].onclick = this.jpn.bind(this, l.Buttons[k].Link);
                                    this.nvg[g].ontouchend = this.jpn.bind(this, l.Buttons[k].Link)
                                } else {
                                    if (l.Buttons[k].LinkType === vmg.hub.ryp.mgk) {
                                        this.nvg[g].onclick = this.pgr.bind(this, l.Buttons[k].Link);
                                        this.nvg[g].ontouchend = this.pgr.bind(this, l.Buttons[k].Link)
                                    } else {
                                        if (l.Buttons[k].LinkType === vmg.hub.ryp.nku) {
                                            this.nvg[g].onclick = this.mmr.bind(this, l.Buttons[k].Link);
                                            this.nvg[g].ontouchend = this.mmr.bind(this, l.Buttons[k].Link)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                this.nvg[g].style.display = "inline-block"
            } else {
                this.nvg[g].style.display = "none"
            }
        }
        this.byc.style.display = (this.vks) ? "inline-block" : "none";
        if (this.pvc) {
            this.qms = true;
            this.pvc.style.display = "block";
            this.xda.style.display = "block";
            vmg.yov.mca();
            vmg.yov.hpf = true
        }
    };
    this.roy = function() {
        if (this.qms) {
            return true
        }
        return false
    };
    this.qnq = function() {
        b.qaz();
        vmg.yov.zsv(vmg.yov.state)
    };
    this.pgr = function(f) {
        var g = null;
        if (f) {
            g = vmg.arb.pwg("GET", f);
            if (!g) {
                console.error("Could not send request!")
            } else {
                g.onerror = function() {
                    console.error("Error on request!")
                }
            }
            g.send()
        }
        if (vmg.yov.pix) {
            vmg.yov.pix.oae({
                sender: vmg.yov.kfp,
                lang: sessionStorage.sessionValue1.toUpperCase()
            })
        }
        b.qaz();
        vmg.yov.dfj()
    };
    this.mmr = function(j) {
        var k = null;
        if (j == null) {
            console.error("Request url is missing!");
            return
        }
        k = vmg.arb.pwg("GET", j);
        if (!k) {
            console.error("Could not send request!")
        } else {
            for (var g = 0, f = b.nvg.length; g < f; g++) {
                b.nvg[g].disabled = true
            }
            k.onload = function() {
                b.qaz();
                for (var m = 0, l = b.nvg.length; m < l; m++) {
                    b.nvg[m].disabled = false
                }
                vmg.yov.dfj()
            };
            k.onerror = function() {
                console.error("Error on request!");
                for (var m = 0, l = b.nvg.length; m < l; m++) {
                    b.nvg[m].disabled = false
                }
            }
        }
        if (vmg.yov.pix) {
            vmg.yov.pix.oae({
                sender: vmg.yov.kfp,
                lang: sessionStorage.sessionValue1.toUpperCase()
            })
        }
        k.send()
    };
    this.sjr = function() {
        window.location.reload()
    };
    this.jpn = function(f) {
        if (vmg.yov.pix) {
            vmg.yov.pix.oae({
                sender: vmg.yov.kfp,
                lang: sessionStorage.sessionValue1.toUpperCase()
            })
        }
        window.location.href = f
    };
    this.ruw = function() {
        b.and = (b.and > 0) ? b.and - 1 : b.wlc.length - 1;
        b.rpd(b.wlc[b.and])
    };
    this.kde = function() {
        b.and = (b.and < b.wlc.length - 1) ? b.and + 1 : 0;
        b.rpd(b.wlc[b.and])
    }
}
vmg.rkn = new Settings();
vmg.arb = new tui();

function lto() {
    this.gla = "";
    this.szh = "";
    this.qek = null;
    this.canvas = null;
    this.context2D = null;
    this.vxx = null;
    this.ibm = null;
    this.cgx = null;
    this.wip = null;
    this.ycw = null;
    this.xay = {};
    this.offsetLeft = 0;
    this.offsetTop = 0;
    this.ojo = 0;
    this.vhx = 0;
    this.qba = false;
    this.width = 0;
    this.height = 0;
    this.ujk = 0;
    this.wcq = 0;
    this.wnt = 1;
    this.wov = 1;
    this.ybl = false;
    this.zzc = false;
    this.style = null;
    this.ple = null;
    this.cio = -1;
    this.yby = false;
    this.dyd = false;
    this.kbh = false;
    this.byg = false;
    this.hpf = false;
    this.lfd = false;
    this.ixg = false;
    this.sqp = false;
    this.psm = "";
    this.kiq = "";
    this.azr = "";
    this.vvu = "";
    this.zzk = "";
    this.erb = "";
    this.qve = "1_1_60";
    try {
        if (vmg.rkn.value19) {
            this.psm = sessionStorage.sessionValue2;
            this.kiq = sessionStorage.sessionValue2
        } else {
            var c = a("hash");
            if (c != "") {
                sessionStorage.sessionValue2 = c
            }
            if (sessionStorage.sessionValue2 != "freeplay") {
                this.azr = sessionStorage.sessionValue2
            } else {
                this.psm = sessionStorage.sessionValue2;
                this.kiq = sessionStorage.sessionValue2;
                if (a("w") != "") {
                    this.azr = sessionStorage.sessionValue2
                } else {
                    this.azr = ""
                }
            }
        }
    } catch (b) {}
    this.kou = null;
    this.hnk = null;
    this.ajq = false;
    this.sqo = null;
    this.vcv = null;
    this.nhr = null;
    this.wsd = true;
    this.emt = [0, 0.5, 1];
    try {
        if (sessionStorage.sessionValue6) {
            if (sessionStorage.sessionValue6 == "false") {
                this.kdq = 0
            } else {
                if (sessionStorage.sessionValue6 == "true") {
                    this.kdq = this.emt.length - 1
                } else {
                    this.kdq = Number(sessionStorage.sessionValue6)
                }
            }
        } else {
            this.kdq = this.emt.length - 1
        }
    } catch (b) {
        this.kdq = 0
    }
    this.oks = 0;
    this.language = new jtr();
    this.drg = 0;
    this.fza = 1;
    this.mjw = this.fza;
    this.yxf = [vmg.rpp.tdj, vmg.rpp.ypd, vmg.rpp.wmz];
    this.lwk = (vmg.arb.vfh()) ? 0 : this.yxf.length - 1;
    try {
        if (localStorage.localValue1) {
            this.lwk = Number(localStorage.localValue1);
            if (!vmg.arb.vfh() && this.yxf[this.lwk] === vmg.rpp.tdj) {
                this.lwk = this.yxf.length - 1
            }
        }
    } catch (b) {}
    this.uoz = false;
    this.kfp = "";
    this.eji = "";
    this.xvl = 0;
    this.state = 0;
    this.gzc = false;
    this.whv = 5000;
    this.wgi = 0;
    this.atp = 0;
    this.eyg = 0;
    this.vvh = 0;
    this.vjx = false;
    this.kpv = false;
    this.jog = false;
    this.gky = null;
    this.ezj = 0;
    this.dyy = 0;
    this.yxy = 0;
    this.mlf = -1;
    this.vij = -1;
    this.yyl = 0;
    this.ror = null;
    this.mpn = [];
    this.pgj = [];
    this.pix = null;
    this.fcg = false;
    this.yev = 0;
    this.xki = 0;
    this.fmn = false;

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
    this.qtx = function(d) {
        this.drl();
        vmg.arb.tba();
        vmg.arb.ppp();
        this.bqq();
        if (!this.vjx) {
            this.czk()
        }
        this.zae(this.gwe(d.ple));
        this.ykq();
        this.gsz();
        this.iaw();
        this.ynd();
        this.pkj();
        this.adn();
        this.suw();
        this.glr();
        this.shx();
        this.taj();
        return this
    };
    this.iaw = function() {};
    this.drl = function() {};
    this.glr = function() {
        try {
            if (vmg.rkn.value64 && !this.jog) {
                this.sqo = new ejt();
                this.sqo.connect("ws://127.0.0.1:2001/vltclient")
            }
        } catch (d) {
            console.error("Can not connect to terminal!")
        }
    };
    this.bqq = function() {
        try {
            var j = a("exit");
            if (j != "") {
                sessionStorage.sessionValue5 = j
            }
            if ((!sessionStorage.sessionValue5 || sessionStorage.sessionValue5 == "null") && vmg.rkn.value8) {
                sessionStorage.sessionValue5 = vmg.rkn.value8
            }
            var p = a("curr");
            if (p != "") {
                sessionStorage.sessionValue8 = p
            }
            if (sessionStorage.sessionValue8 && sessionStorage.sessionValue8 != "") {
                this.erb = sessionStorage.sessionValue8;
                if (vmg.rkn.value72) {
                    var o = vmg.rkn.value72[this.erb];
                    if (vmg.rkn.value21.e === true && o) {
                        vmg.rkn.value21.s = o.s;
                        vmg.rkn.value21.m = o.m;
                        vmg.rkn.value21.ts = o.ts;
                        vmg.rkn.value21.cs = o.cs
                    }
                    if (vmg.rkn.value76 && vmg.rkn.value76.f === true && o) {
                        vmg.rkn.value76.s = o.s;
                        vmg.rkn.value76.m = o.m;
                        vmg.rkn.value76.ts = o.ts;
                        vmg.rkn.value76.cs = o.cs
                    }
                }
            }
            if (this.uoe()) {
                sessionStorage.sessionValue7 = ""
            }
            var d = a("w");
            if (d != "") {
                sessionStorage.sessionValue7 = d
            }
            if (sessionStorage.sessionValue7 && sessionStorage.sessionValue7 != "") {
                this.zzk = sessionStorage.sessionValue7
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
                sessionStorage.sessionValue14 = (vmg.arb.lih) ? vmg.rkn.value51.m : vmg.rkn.value51.d
            }
            var i = a("sessionTime");
            if (i != "") {
                sessionStorage.sessionValue15 = i
            }
            if (sessionStorage.sessionValue15 != "true" && sessionStorage.sessionValue15 != "false") {
                sessionStorage.sessionValue15 = vmg.rkn.value11
            }
            var t = a("realityCheckURL");
            if (t != "") {
                sessionStorage.sessionValue16 = t
            }
            var n = a("realityCheckTime");
            if (n != "") {
                sessionStorage.sessionValue17 = n
            }
            if (vmg.rkn.value39 > 0) {
                sessionStorage.sessionValue17 = vmg.rkn.value39
            }
            var s = a("loggedInTime");
            if (sessionStorage.sessionValue18 != null) {
                var g = sessionStorage.sessionValue18.split(";");
                if (g.length == 2) {
                    this.yev = Number(g[0]);
                    this.xki = Number(g[1])
                }
            }
            if (s != "") {
                if (Number(s) != this.xki) {
                    this.xki = Number(s);
                    this.yev = new Date().getTime() - (this.xki * 1000);
                    sessionStorage.sessionValue18 = this.yev + ";" + this.xki
                }
            }
            if (vmg.rkn.value86 === true) {
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
            console.error(k.ead)
        }
    };
    this.suw = function() {
        if (!(vmg.arb.mwz == vmg.os.rzj && vmg.arb.uic == vmg.ikd.lhn)) {
            document.ontouchstart = vmg.yov.nxj
        }
        if (vmg.arb.uic != vmg.ikd.poa && vmg.arb.uic != vmg.ikd.lhn) {
            document.ontouchmove = vmg.yov.rsq;
            document.ontouchend = vmg.yov.stz
        }
        if (!vmg.arb.ema) {
            document.onmousedown = vmg.yov.zzv;
            document.onmouseup = vmg.yov.rtn;
            document.onmousemove = vmg.yov.nil
        }
        document.onkeydown = vmg.yov.dye;
        document.onkeyup = vmg.yov.zyv;
        document.oncontextmenu = vmg.yov.clg;
        this.lfd = (this.xdl() && vmg.arb.enp() && vmg.arb.lih);
        if (vmg.arb.tgz() === false && vmg.arb.mwz === vmg.os.fhq && vmg.arb.jpp() === true && screen.width <= 414 && this.rlm()) {
            this.yyl = setInterval(this.qqz, 1000)
        }
    };
    this.nxj = function(d) {
        if (vmg.yov.yby === true) {
            vmg.yov.fri();
            vmg.yov.ofg()
        }
        vmg.yov.doc(d)
    };
    this.stz = function(d) {
        if (vmg.yov.yby === true) {
            if (vmg.yov.lfd) {
                vmg.yov.ecc()
            } else {
                vmg.yov.ecg(d)
            }
        } else {
            if (vmg.yov.ixg) {
                vmg.yov.qvm()
            }
        }
    };
    this.rsq = function(d) {
        vmg.yov.vvf(d)
    };
    this.zzv = function(d) {
        window.focus();
        if (vmg.yov.yby === true) {
            vmg.yov.fri();
            vmg.yov.ofg()
        }
        vmg.yov.doc(d)
    };
    this.rtn = function(d) {
        if (vmg.yov.yby === true) {
            vmg.yov.ecg(d)
        }
    };
    this.nil = function(d) {};
    this.dye = function(d) {
        if ((d.keyCode == 122 && (vmg.arb.mwz == vmg.os.kui || vmg.arb.mwz == vmg.os.fir)) || (d.keyCode == 70 && d.ctrlKey && vmg.arb.mwz == vmg.os.hlk)) {
            return
        }
        vmg.yov.fri();
        vmg.yov.ofg();
        vmg.yov.bhd(d)
    };
    this.zyv = function(d) {
        vmg.yov.vin(d)
    };
    this.clg = function() {
        return false
    };
    this.doc = function(d) {};
    this.ecg = function(d) {};
    this.bhd = function(d) {};
    this.vin = function(d) {};
    this.vvf = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        return
    };
    this.yfx = function() {
        var f = vmg.yov.nhr.ejh("topb"),
            e = vmg.yov.nhr.ejh("settings"),
            d = vmg.yov.nhr.ejh("topi"),
            g = vmg.yov.nhr.ejh("gameb");
        if (vmg.arb.uic == vmg.ikd.poa || vmg.arb.uic == vmg.ikd.dqv) {
            vmg.yov.zzc = (window.innerWidth == window.outerWidth)
        } else {
            if (vmg.arb.uic == vmg.ikd.npe || vmg.arb.uic == vmg.ikd.eiv) {
                vmg.yov.zzc = (window.innerHeight >= window.outerHeight)
            } else {
                if (vmg.arb.uic == vmg.ikd.keu) {
                    vmg.yov.zzc = (document.fullscreenElement) ? true : false
                } else {
                    if (vmg.arb.lih) {
                        if (vmg.arb.uic == vmg.ikd.gbp || vmg.arb.uic == vmg.ikd.eoa || vmg.arb.uic == vmg.ikd.jgq) {
                            vmg.yov.zzc = (document.webkitFullscreenElement) ? true : false
                        } else {
                            if (vmg.arb.uic == vmg.ikd.lhn) {
                                vmg.yov.zzc = (document.mozFullScreenElement) ? true : false
                            }
                        }
                    }
                }
            }
        }
        if (d) {
            d.yli("fullscreen", vmg.yov.zzc)
        }
        if (f) {
            f.llm.wrv("fullscreen", "#yli", [(vmg.yov.zzc) ? 1 : 0])
        }
        if (e) {
            e.llm.wrv("fullscreen", "#yli", [(vmg.yov.zzc) ? 1 : 0])
        }
        if (g) {
            g.llm.wrv("fullscreen", "#yli", [(vmg.yov.zzc) ? 1 : 0])
        }
        vmg.yov.fkt();
        vmg.yov.lpt();
        vmg.yov.sid();
        if (vmg.arb.jpp() === true && vmg.arb.tgz() === false) {
            document.body.style.height = "5000px"
        }
        if (!vmg.arb.tgz() && vmg.arb.uic === vmg.ikd.jgq && vmg.yov.vhx < screen.width) {
            window.scrollTo(0, 0)
        }
    };
    this.sbu = function() {
        vmg.yov.yfx();
        vmg.yov.qqz()
    };
    this.qqz = function() {
        if (vmg.arb.jpp() === true && vmg.arb.tgz() === false) {
            if (vmg.yov.rlm() === true) {
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
                            vmg.yov.yfx();
                            window.ontouchmove = vmg.yov.sbu
                        }
                    } else {
                        e.className = null;
                        d.className = null;
                        f.style.display = "none";
                        document.ontouchstart = vmg.yov.nxj;
                        document.ontouchmove = vmg.yov.rsq;
                        document.ontouchend = vmg.yov.stz;
                        if (window.ontouchmove != null) {
                            vmg.yov.yfx();
                            window.ontouchmove = null
                        }
                        window.scrollTo(0, 0)
                    }
                }
            }
        }
    };
    this.ysi = function(g) {
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
                    vmg.arb.isl(e, i, i)
                }
                f.innerHTML = vmg.yov.language.hof;
                k.className = "rotateAnim";
                j.style.display = "block";
                vmg.yov.hpf = true
            } else {
                j.style.display = "none";
                k.className = null;
                vmg.yov.hpf = false
            }
        }
    };
    this.ebk = function() {
        var d = vmg.yov.nhr.ejh("settings");
        vmg.yov.yfx();
        if (d) {
            d.llm.wrv("adjustment", "#yli", [(vmg.yov.cio === vmg.ple.rlu) ? 0 : 1]);
            d.vnf()
        }
        if (vmg.yov.uoz === true) {
            vmg.yov.hpf = true;
            vmg.yov.lyg(true);
            vmg.yov.ysi(true)
        } else {
            vmg.yov.hpf = false;
            vmg.yov.lyg((vmg.yov.emt[vmg.yov.kdq] === 0));
            vmg.yov.ysi(false)
        }
    };
    this.fkt = function() {
        this.ojo = window.innerWidth, this.vhx = window.innerHeight;
        this.qba = false;
        if (vmg.arb.tgz() == true && vmg.rkn.value69 === true) {
            if (vmg.arb.svo() === true) {
                this.qba = true;
                this.ojo = (window.innerWidth > window.outerWidth) ? window.outerWidth : window.innerWidth;
                this.vhx = (window.innerHeight > window.outerHeight) ? window.outerHeight : window.innerHeight;
                if (this.ojo > this.vhx) {
                    this.vhx *= 0.98
                }
            } else {
                if (vmg.arb.jpp() === true) {
                    this.qba = true;
                    if (window.orientation === 90 || window.orientation === -90) {
                        if (screen.height === 1024) {
                            this.ojo = 1024;
                            this.vhx = (window.innerHeight < 704) ? 662 : 704
                        } else {
                            if (screen.height === 736) {
                                this.ojo = 736;
                                this.vhx = (window.innerHeight < 414 || window.innerHeight === 475) ? 370 : 414
                            } else {
                                if (screen.height === 667) {
                                    this.ojo = 667;
                                    this.vhx = 375
                                }
                            }
                        }
                    } else {
                        if (screen.height === 1024) {
                            this.ojo = 768;
                            this.vhx = (window.innerHeight < 960) ? 928 : 960
                        } else {
                            if (screen.height === 736) {
                                this.ojo = 414;
                                this.vhx = 628
                            } else {
                                if (screen.height === 667) {
                                    this.ojo = 375;
                                    this.vhx = 559
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.sid = function() {
        var g = 0,
            j = 0,
            f = 1,
            e = 1,
            i = this.ojo,
            d = this.vhx;
        this.ybl = (this.zzc || i < this.width || d < this.height || this.ple.svp);
        g = this.xto(this.ybl);
        f = ((i - j) / this.width).toString();
        f = Number(f.substring(0, (f.length > 5) ? 5 : f.length));
        e = ((d - g) / this.height).toString();
        e = Number(e.substring(0, (e.length > 5) ? 5 : e.length));
        if (this.ybl) {
            if (this.ple.spo || sessionStorage.sessionValue22 == "proportional") {
                if (f > e) {
                    this.wnt = e;
                    this.wov = e
                } else {
                    this.wnt = f;
                    this.wov = f
                }
            } else {
                this.wnt = f;
                this.wov = e
            }
        } else {
            this.wnt = 1;
            this.wov = 1
        }
        vmg.arb.isl(this.canvas, this.wnt, this.wov);
        if (this.vxx != null) {
            vmg.arb.isl(this.vxx, this.wnt, this.wov, ((this.ple.vxx.ztm.x) - ((this.ple.vxx.ztm.x + this.ple.vxx.hxg) / 2 * (1 - this.wnt))), ((this.ple.vxx.ztm.y) - ((this.ple.vxx.ztm.y + this.ple.vxx.zhb) / 2 * (1 - this.wov))))
        }
        if (this.cgx != null) {
            vmg.arb.isl(this.cgx, this.wnt, this.wov)
        }
        if (this.ybl) {
            this.offsetLeft = Math.floor((i - (this.canvas.width * this.wnt))) / 2;
            this.offsetTop = Math.floor((d - (this.canvas.height * this.wov))) / 2
        } else {
            this.offsetLeft = this.qek.offsetLeft;
            this.offsetTop = this.qek.offsetTop
        }
    };
    this.lpt = function() {
        if (this.tzp() === true) {
            var e = null;
            if (this.yxf[this.lwk] === vmg.rpp.tdj) {
                if (window.orientation === -90) {
                    e = vmg.ple.hso
                } else {
                    e = vmg.ple.rlu
                }
            } else {
                if (this.yxf[this.lwk] === vmg.rpp.ypd) {
                    e = vmg.ple.hso
                } else {
                    if (this.yxf[this.lwk] === vmg.rpp.wmz) {
                        e = vmg.ple.rlu
                    }
                }
            }
            this.uoz = (this.vhx > this.ojo);
            this.zae(e);
            this.xzw(false);
            if (this.byg === true) {
                this.vnf()
            } else {
                this.nhr.wrv("loading", "#vnf")
            }
        } else {
            if (vmg.arb.lih) {
                var f = (this.ojo > this.vhx) ? this.fza : this.drg,
                    d = this.ple.mrc,
                    e = null;
                if (f != this.mjw) {
                    this.mjw = f;
                    if (this.vjx) {
                        e = (this.mjw == this.fza) ? vmg.ple.cpz : vmg.ple.slr
                    } else {
                        e = (this.mjw == this.fza) ? vmg.rkn.value33 : vmg.rkn.value32
                    }
                    this.zae(e);
                    this.xzw((d != this.ple.mrc) || this.vjx);
                    if (this.byg === true) {
                        if (this.vjx && this.kpv) {
                            this.unm(this.zoy(this.language.cnk))
                        } else {
                            this.vnf()
                        }
                    } else {
                        this.nhr.wrv("loading", "#vnf")
                    }
                }
            } else {
                if (!this.vjx) {
                    e = (this.zzc) ? vmg.rkn.value15 : vmg.rkn.value14;
                    this.zae(e);
                    this.xzw(false);
                    if (this.byg === true) {
                        this.vnf()
                    } else {
                        this.nhr.wrv("loading", "#vnf")
                    }
                }
            }
        }
    };
    this.tzp = function() {
        return false
    };
    this.rlm = function() {
        return false
    };
    this.zae = function(d) {};
    this.ykq = function() {
        this.style = new opi()
    };
    this.xto = function(d) {
        var e = 0;
        if (vmg.arb.svo() && window.innerWidth > window.innerHeight && d) {
            if (this.yby === true && document.body.style.backgroundColor !== this.style.xok.backgroundColor) {
                document.body.style.backgroundColor = this.style.xok.backgroundColor
            }
        }
        return e
    };
    this.jew = function() {
        if (vmg.arb.svo() && !vmg.arb.tgz() && window.innerWidth > window.innerHeight) {
            return 0
        }
        return 0
    };
    this.wmf = function() {
        return false
    };
    this.ynd = function() {
        if (vmg.arb.ema) {
            this.vcv = new kwn()
        } else {
            this.vcv = new htz()
        }
        this.vcv.qtx();
        this.vcv.wcu(this.sqa())
    };
    this.pkj = function() {
        this.nhr = new fsv();
        this.nhr.qtx();
        this.nhr.haq("jackpots")
    };
    this.sqa = function() {
        var d = new bmr();
        d.qtx();
        return d
    };
    this.czk = function() {
        this.gky = new ssk()
    };
    this.gsz = function() {
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
                    for (var k = 0, g = vmg.rkn.value5.length; k < g; k++) {
                        if (o[l] === vmg.rkn.value5[k] && p.indexOf(o[l]) < 0) {
                            p.push(o[l])
                        }
                    }
                }
                if (p.length == 0) {
                    p.push(vmg.rkn.value5[0])
                }
                vmg.rkn.value5 = [];
                for (var l = 0, m = p.length; l < m; l++) {
                    vmg.rkn.value5.push(p[l])
                }
            }
            if (sessionStorage.sessionValue1 == null) {
                var q = vmg.arb.skd();
                if (this.faf(q)) {
                    sessionStorage.sessionValue1 = q
                } else {
                    if (q === vmg.language.EN && this.faf(vmg.language.US)) {
                        sessionStorage.sessionValue1 = vmg.language.US
                    } else {
                        if (q === vmg.language.DE && this.faf(vmg.language.AT)) {
                            sessionStorage.sessionValue1 = vmg.language.AT
                        } else {
                            if (q === vmg.language.ES && this.faf(vmg.language.MX)) {
                                sessionStorage.sessionValue1 = vmg.language.MX
                            } else {
                                if (q === vmg.language.ES && this.faf(vmg.language.CO)) {
                                    sessionStorage.sessionValue1 = vmg.language.CO
                                } else {
                                    if (q === vmg.language.ES && this.faf(vmg.language.CL)) {
                                        sessionStorage.sessionValue1 = vmg.language.CL
                                    } else {
                                        if (q === vmg.language.ES && this.faf(vmg.language.VE)) {
                                            sessionStorage.sessionValue1 = vmg.language.VE
                                        } else {
                                            if (q === vmg.language.EN && this.faf(vmg.language.BR)) {
                                                sessionStorage.sessionValue1 = vmg.language.BR
                                            } else {
                                                sessionStorage.sessionValue1 = vmg.rkn.value5[0]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this.faf(sessionStorage.sessionValue1)) {
                for (var l = 0, m = vmg.rkn.value5.length; l < m; l++) {
                    if (vmg.rkn.value5[l] == sessionStorage.sessionValue1) {
                        this.oks = l;
                        break
                    }
                }
                this.language = this.pps(sessionStorage.sessionValue1)
            } else {
                this.oks = 0;
                this.language = this.pps(vmg.rkn.value5[this.oks]);
                sessionStorage.sessionValue1 = vmg.rkn.value5[this.oks]
            }
        } catch (n) {
            this.oks = 0;
            this.language = this.pps(vmg.rkn.value5[this.oks]);
            console.error(n.ead)
        }
    };
    this.shx = function() {
        var d = (vmg.rkn.value45 == vmg.gko.ygc) ? this.ple.gko.yov : this.ple.gko.ate;
        this.qek = document.getElementById("gameArea");
        if (this.qba === false) {
            this.qek.style.marginTop = (-d.ztm.height / 2) + "px";
            this.qek.style.marginLeft = (-d.ztm.width / 2) + "px"
        } else {
            this.qek.style.left = "0px";
            this.qek.style.top = "0px";
            this.qek.style.marginTop = ((window.innerHeight - d.ztm.height) / 2) + "px";
            this.qek.style.marginLeft = ((window.innerWidth - d.ztm.width) / 2) + "px"
        }
        this.qek.style.width = (d.ztm.width > window.innerWidth) ? window.innerWidth + "px" : d.ztm.width + "px";
        this.qek.style.height = (d.ztm.height > window.innerHeight) ? window.innerHeight + "px" : d.ztm.height + "px";
        this.canvas = document.getElementById("canvas");
        this.canvas.width = Math.round(d.ztm.width);
        this.canvas.height = Math.round(d.ztm.height);
        this.context2D = this.canvas.getContext("2d");
        this.cgx = document.getElementById("gameOverlay");
        if (this.cgx) {
            this.cgx.style.width = d.ztm.width + "px";
            this.cgx.style.height = d.ztm.height + "px"
        }
        this.mkn(d)
    };
    this.mkn = function(e) {
        var f = new jld(),
            d = (vmg.rkn.value45 == vmg.gko.ygc) ? this.style.gko.yov : this.style.gko.ate;
        f.qtx(e.ztm, this.context2D);
        f.parent = this;
        f.pxk = (vmg.arb.lih) ? this.oea : this.qvm;
        f.hpb = (this.vjx) ? this.language.qdr : this.language.vid;
        f.tul = this.language.error;
        f.iub(e);
        f.zpb(d);
        this.nhr.mwl("loading", f)
    };
    this.vqb = function() {
        var d = new fwm();
        d.qtx(this.ple.mtb.ztm, null, this.context2D);
        d.parent = this;
        d.iub(this.ple.mtb);
        d.zpb(this.style.mtb);
        if (sessionStorage.sessionValue15 == "true" && vmg.rkn.value49) {
            d.ath("time", "", "--:-- [--:--]")
        } else {
            if (sessionStorage.sessionValue15 == "true" || vmg.rkn.value49) {
                d.ath("time", "", "--:--")
            }
        }
        if (this.uoe()) {
            d.ath("freeplay", "", this.language.lwc)
        } else {
            d.ath("id", "", "")
        }
        this.nhr.mwl("topi", d)
    };
    this.rur = function() {
        var d = new xwl();
        d.qtx(this.ple.brd.ztm, null, this.context2D);
        d.parent = this;
        d.iub(this.ple.brd);
        d.zpb(this.style.brd, false);
        d.hgk(false);
        this.nhr.mwl("topb", d)
    };
    this.imj = function() {};
    this.ucn = function() {
        var d = new mpw();
        d.qtx(this.ple.rye.ztm, null, this.context2D);
        d.parent = this;
        d.vqo(this.ple.rye);
        d.zpb(this.style.rye);
        d.hgk(false);
        this.nhr.mwl("stats", d)
    };
    this.llc = function() {
        this.wip = new xxu();
        this.wip.qtx();
        this.wip.zpb(this.style.wip);
        this.wip.iub(this.ple.wip)
    };
    this.eez = function() {
        this.ycw = new qth();
        this.ycw.qtx();
        this.ycw.zpb(this.style.ycw);
        this.ycw.iub(this.ple.ycw)
    };
    this.yei = function() {
        if (this.wey()) {
            this.xay.bkz = document.getElementById("jurisdictionDiv");
            this.xay.jnl = document.getElementById("btnsp");
            this.xay.nte = document.getElementById("btnsl");
            this.xay.eyc = document.getElementById("btnst");
            if (this.xay.jnl) {
                this.xay.jnl.innerHTML = this.language.ygw;
                this.xay.jnl.onclick = this.xag;
                this.xay.jnl.ontouchend = this.xag
            }
            if (this.xay.nte) {
                this.xay.nte.innerHTML = this.language.ohs;
                this.xay.nte.onclick = this.spc;
                this.xay.nte.ontouchend = this.spc
            }
            if (this.xay.eyc) {
                this.xay.eyc.innerHTML = this.language.ucf;
                this.xay.eyc.onclick = this.lzd;
                this.xay.eyc.ontouchend = this.lzd
            }
            this.pgi();
            this.mca()
        }
    };
    this.cgr = function(e) {
        var d = new zya();
        d.qtx(this.ple.llo.ztm, null, this.context2D);
        d.parent = this;
        d.snb = true;
        if (e) {
            d.vfa(e)
        }
        d.vqo(this.ple.llo);
        d.ywu(this.language);
        d.zpb(this.style.llo);
        d.iub(this.ple.llo);
        d.hgk(false);
        this.nhr.mwl("autop", d)
    };
    this.acl = function(d) {
        var e = new noh();
        e.qtx(this.ple.npu.ztm, null, this.context2D);
        e.parent = this;
        if (d) {
            e.khl(d)
        }
        e.hgk(false);
        this.nhr.mwl("settings", e)
    };
    this.xzw = function(d) {};
    this.fpa = function() {
        var d = this.nhr.ejh("stats");
        if (d) {
            d.clq(this.ple.rye.ztm);
            d.iub(this.ple.rye)
        }
    };
    this.nyc = function() {
        if (this.wip) {
            this.wip.iub(this.ple.wip)
        }
    };
    this.ofn = function() {
        if (this.ycw) {
            this.ycw.iub(this.ple.ycw)
        }
    };
    this.pgi = function() {
        var d = null,
            e = 0;
        if (this.xay) {
            d = this.ple.fgi;
            if (this.xay.bkz) {
                vmg.arb.ldc(this.xay.bkz, d.teu)
            }
            if (this.xay.jnl) {
                this.xay.jnl.style.fontSize = d.uco.fontSize + "px";
                this.xay.jnl.style.textIndent = d.uco.textIndent + "px";
                vmg.arb.ldc(this.xay.jnl, d.kiv)
            }
            if (this.xay.nte) {
                this.xay.nte.style.fontSize = d.uco.fontSize + "px";
                this.xay.nte.style.textIndent = d.uco.textIndent + "px";
                vmg.arb.ldc(this.xay.nte, d.znl)
            }
            if (this.xay.eyc) {
                this.xay.eyc.style.fontSize = d.uco.fontSize + "px";
                this.xay.eyc.style.textIndent = d.uco.textIndent + "px";
                vmg.arb.ldc(this.xay.eyc, d.ola)
            }
            if (this.xay.bkz) {
                e = (d.teu.width - d.teu.height) / 2;
                if (this.cio == vmg.ple.hso) {
                    this.xay.bkz.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + e + "px)"
                } else {
                    this.xay.bkz.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + (-e) + "px)"
                }
            }
        }
    };
    this.vla = function() {
        var d = this.nhr.ejh("autop");
        if (d) {
            d.clq(this.ple.llo.ztm);
            d.iub(this.ple.llo)
        }
    };
    this.kpn = function() {
        var d = this.nhr.ejh("settings");
        if (d) {
            d.clq(this.ple.npu.ztm);
            d.iub(this.ple.npu)
        }
    };
    this.kim = function() {
        var d = this.nhr.ejh("topi");
        if (d) {
            d.clq(this.ple.mtb.ztm);
            d.iub(this.ple.mtb)
        }
    };
    this.cto = function() {
        var d = this.nhr.ejh("topb");
        if (d) {
            d.clq(this.ple.brd.ztm);
            d.iub(this.ple.brd)
        }
    };
    this.jxh = function() {
        var e = this.nhr.ejh("loading"),
            d = (vmg.rkn.value45 == vmg.gko.ygc) ? this.ple.gko.yov : this.ple.gko.ate;
        if (e) {
            this.canvas.width = 0;
            if (this.qba === false) {
                this.qek.style.marginTop = (-d.ztm.height / 2) + "px";
                this.qek.style.marginLeft = (-d.ztm.width / 2) + "px"
            } else {
                this.qek.style.left = "0px";
                this.qek.style.top = "0px";
                this.qek.style.marginTop = ((this.vhx - d.ztm.height) / 2) + "px";
                this.qek.style.marginLeft = ((this.ojo - d.ztm.width) / 2) + "px"
            }
            this.qek.style.width = (d.ztm.width > this.ojo) ? this.ojo + "px" : d.ztm.width + "px";
            this.qek.style.height = (d.ztm.height > this.vhx) ? this.vhx + "px" : d.ztm.height + "px";
            this.canvas.width = Math.round(d.ztm.width);
            this.canvas.height = Math.round(d.ztm.height);
            if (this.cgx) {
                this.cgx.style.width = d.ztm.width + "px";
                this.cgx.style.height = d.ztm.height + "px"
            }
            e.clq(d.ztm);
            e.iub(d)
        }
    };
    this.adn = function() {
        if (vmg.arb.lih && !vmg.arb.ema) {
            if (!this.vcv.nuw && vmg.arb.uic != vmg.ikd.fml) {
                this.wsd = false;
                this.kdq = 0
            }
        }
    };
    this.gwe = function(d) {
        if (vmg.arb.lih) {
            if (!this.vjx) {
                return vmg.ple.xhs
            } else {
                if (!this.jog) {
                    return vmg.ple.cpz
                }
            }
        }
        return d
    };
    this.dab = function() {
        var d = this.nhr.ejh("loading");
        this.yfx();
        if (d) {
            d.pqu = true
        }
        if ((vmg.arb.uic === vmg.ikd.gbp || vmg.arb.uic === vmg.ikd.eiv || vmg.arb.uic === vmg.ikd.brw) && vmg.arb.mwz === vmg.os.rzj && vmg.arb.ten === true) {
            if (this.vcv.nuw === false || vmg.arb.enp() === false || vmg.arb.ukk() === false) {
                vmg.evv = vmg.tms.ahu
            }
        }
        if (vmg.evv == 0) {
            if (this.wsd === true && vmg.arb.yqx().length === 0) {
                this.wsd = false
            }
            if (d) {
                d.vnf(0)
            }
            this.owb();
            if (this.wsd === true) {
                this.urb()
            }
            this.vcv.start()
        } else {
            if (d) {
                if (vmg.evv == vmg.tms.lkr && vmg.arb.uic === vmg.ikd.jgq) {
                    d.hbg = this.language.ych;
                    d.vnf(0)
                } else {
                    if (vmg.evv == vmg.ead.zfj) {
                        d.hbg = this.language.zwz;
                        d.vnf(0)
                    } else {
                        d.hbg = this.language.ipi;
                        if (vmg.arb.mwz === vmg.os.rzj || vmg.arb.mwz === vmg.os.fir) {
                            if (vmg.evv != vmg.tms.lkr && sessionStorage.sessionValue1 === vmg.language.TR) {
                                d.hbg += "|Google Chrome" + this.language.fmd
                            } else {
                                if (vmg.evv != vmg.tms.lkr && (sessionStorage.sessionValue1 === vmg.language.GE || sessionStorage.sessionValue1 === vmg.language.HU)) {
                                    d.hbg += "|" + this.language.owj + " Google Chrome" + this.language.bnm
                                } else {
                                    d.hbg += "|" + this.language.fmd + " Google Chrome"
                                }
                            }
                        } else {
                            if (vmg.arb.mwz === vmg.os.kui || vmg.arb.mwz === vmg.os.fir) {
                                if (vmg.evv != vmg.tms.lkr && sessionStorage.sessionValue1 === vmg.language.TR) {
                                    d.hbg += "|Google Chrome, Mozilla Firefox" + this.language.fmd
                                } else {
                                    if (vmg.evv != vmg.tms.lkr && (sessionStorage.sessionValue1 === vmg.language.GE || sessionStorage.sessionValue1 === vmg.language.HU)) {
                                        d.hbg += "|" + this.language.owj + " Google Chrome, Mozilla Firefox" + this.language.bnm
                                    } else {
                                        d.hbg += "|" + this.language.fmd + " Google Chrome, Mozilla Firefox"
                                    }
                                }
                            }
                        }
                        console.error("Errorcode: " + vmg.evv);
                        d.vnf(0)
                    }
                }
            }
        }
    };
    this.owb = function() {};
    this.urb = function() {};
    this.taj = function() {
        var e = this.gla + this.ple.type + "/",
            d = this.nhr.ejh("loading");
        if (!this.vjx) {
            this.vcv.ynj("continue", vmg.rkn.value30 + "/basic/images/" + this.ple.type + "/btn_continue.png")
        }
        if (vmg.rkn.value45 == vmg.gko.ygc) {
            e += "load.jpg"
        } else {
            if (vmg.rkn.value45 == vmg.gko.acy) {
                e += "load_amanet.jpg"
            }
        }
        if (e.indexOf(".png") >= 0) {
            if (d) {
                d.yzr = true
            }
        }
        this.vcv.ynj("splash", e);
        this.vcv.esf()
    };
    this.wgz = function() {};
    this.faf = function(e) {
        for (var d = 0; d < vmg.rkn.value5.length; d++) {
            if (vmg.rkn.value5[d] == e) {
                return true
            }
        }
        return false
    };
    this.ira = function() {
        vmg.yov.dyd = true;
        if (!vmg.yov.vjx) {
            vmg.yov.pyn();
            if (vmg.yov.dqz()) {
                vmg.yov.jyv()
            }
        } else {
            vmg.yov.hpz()
        }
        vmg.yov.connect()
    };
    this.pyn = function() {};
    this.hpz = function() {};
    this.connect = function() {
        this.kou.connect(this.kfp, this.psm, this.kiq, this.azr, this.qve, this.zzk, this.erb)
    };
    this.qnd = function(d) {
        if (typeof d === "undefined") {
            vmg.yov.kou.qnd(0)
        } else {
            vmg.yov.kou.qnd(d)
        }
    };
    this.wcx = function(d) {
        this.atp = 0;
        this.eyg = 0;
        this.vvh = d;
        clearInterval(this.ezj);
        this.ezj = setInterval(this.frs, 1000)
    };
    this.frs = function() {
        var d = vmg.yov.nhr.ejh("loading");
        vmg.yov.atp++;
        vmg.yov.eyg = Math.round(vmg.rkn.value47 / 1000) - vmg.yov.atp;
        vmg.yov.eyg = (vmg.yov.eyg > 0) ? vmg.yov.eyg : 0;
        if (!vmg.yov.yby) {
            if (d) {
                d.hbg = vmg.yov.language.pjh + "|" + vmg.yov.language.gzb + ": " + vmg.yov.vvh + " (" + vmg.yov.eyg + " sec)";
                d.vnf(0)
            }
        }
    };
    this.klz = function() {
        return vmg.rkn.value74
    };
    this.vnf = function(d, g, e, f) {};
    this.ufa = function() {
        return (this.byg === true && this.yby === true && this.uoz === false)
    };
    this.unm = function(e) {
        var d = this.nhr.ejh("history");
        this.byg = true;
        if (this.yby) {
            if (this.ple.ztr) {
                vmg.arb.lux(this.context2D, this.ple.yov.ztm.x - this.ple.yov.skr, this.ple.yov.ztm.y - this.ple.yov.skr, this.ple.yov.ztm.width + 2 * this.ple.yov.skr, this.ple.yov.ztm.height + 2 * this.ple.yov.skr, "black", 1)
            }
            vmg.arb.mqr(this.context2D, e, "white", this.ple.yov.ztm.x, this.ple.yov.ztm.y, this.ple.yov.ztm.width, this.ple.yov.ztm.height, "arial", 28, "bold");
            if (d) {
                d.vnf()
            }
        }
    };
    this.sdc = function() {
        if (vmg.yov.wip) {
            vmg.yov.wip.qaz()
        }
        vmg.yov.mvp(false);
        vmg.yov.xss.wfd(false);
        vmg.yov.xss.llm.wrv("exit", "#ged", [true]);
        if (vmg.arb.btq()) {
            vmg.arb.ppe();
            setTimeout(vmg.yov.yfx, 1400)
        }
        if (vmg.rkn.value67 > 0) {
            vmg.yov.qnd(vmg.rkn.value67)
        } else {
            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null" && vmg.yov.pix) {
                vmg.yov.pix.ysc({
                    sender: vmg.yov.kfp,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                });
                window.location.href = decodeURIComponent(sessionStorage.sessionValue16)
            } else {
                if (sessionStorage.sessionValue5 && sessionStorage.sessionValue5 != "null" && vmg.yov.pix) {
                    vmg.yov.pix.vob({
                        sender: vmg.yov.kfp,
                        lang: sessionStorage.sessionValue1.toUpperCase()
                    });
                    if (sessionStorage.sessionValue5 !== "(api)") {
                        window.location.href = decodeURIComponent(sessionStorage.sessionValue5)
                    }
                }
            }
        }
    };
    this.lso = function() {
        clearTimeout(vmg.yov.mlf);
        vmg.yov.mvp(false);
        if (vmg.yov.xss) {
            vmg.yov.xss.wfd(false)
        }
        if (!vmg.yov.vjx) {
            vmg.yov.stop();
            if (vmg.yov.xss) {
                vmg.yov.xss.llm.wrv("info", "#cie", [vmg.yov.language.nww]);
                vmg.yov.vnf()
            }
            if (vmg.yov.tzp() === true && vmg.arb.btq()) {
                vmg.arb.ppe();
                setTimeout(vmg.yov.yfx, 800);
                setTimeout(vmg.yov.kou.gdz.close, 800)
            } else {
                vmg.yov.kou.gdz.close()
            }
        } else {
            vmg.yov.kou.close()
        }
    };
    this.qag = function() {
        vmg.yov.lfd = true
    };
    this.ecc = function() {
        if (vmg.arb.lih == true) {
            if (vmg.yov.lfd == true) {
                vmg.yov.lfd = false;
                vmg.arb.ppe();
                setTimeout(vmg.yov.yfx, 1400)
            }
        } else {
            vmg.arb.ppe();
            setTimeout(vmg.yov.yfx, 1400)
        }
    };
    this.glw = function() {
        var e = (vmg.yov.tzp() === true) ? "smartphone" : "desktop",
            i = "en";
        if (sessionStorage.sessionValue1 == vmg.language.ES || sessionStorage.sessionValue1 == vmg.language.CO || sessionStorage.sessionValue1 == vmg.language.CL || sessionStorage.sessionValue1 == vmg.language.MX || sessionStorage.sessionValue1 == vmg.language.VE) {
            i = "es"
        } else {
            if (sessionStorage.sessionValue1 == vmg.language.RO) {
                i = "ro"
            } else {
                if (sessionStorage.sessionValue1 == vmg.language.PT || sessionStorage.sessionValue1 == vmg.language.BR) {
                    i = "pt"
                } else {
                    if (sessionStorage.sessionValue1 == vmg.language.HR) {
                        i = "hr"
                    } else {
                        if (sessionStorage.sessionValue1 == vmg.language.DE) {
                            i = "de"
                        } else {
                            if (sessionStorage.sessionValue1 == vmg.language.SE) {
                                i = "se"
                            }
                        }
                    }
                }
            }
        }
        if (vmg.yov.trq != "") {
            var f = null,
                g = "",
                d = "";
            if (vmg.yov.trq != "") {
                g += "rtp=" + vmg.yov.trq
            }
            if (vmg.yov.tgm != "") {
                g += (vmg.yov.trq != "") ? "&" : "";
                g += "maxwin=" + ((vmg.yov.tgm == "0") ? "0" : vmg.yov.jhl(Number(vmg.yov.tgm) * vmg.yov.ksz()))
            }
            d = encodeURIComponent(g);
            f = window.open(vmg.rkn.value30 + "/gamerules/" + i + "/" + e + "/" + vmg.yov.kfp.toLowerCase() + ".html?" + d, "_blank", (e === "desktop") ? "width=800,scrollbars=yes" : null);
            if (f == null || typeof f === "undefined") {
                window.location.href = vmg.rkn.value30 + "/gamerules/" + i + "/" + e + "/" + vmg.yov.kfp.toLowerCase() + ".html?" + d
            }
        }
    };
    this.qgv = function() {
        vmg.yov.ajq = false;
        vmg.yov.ygn();
        vmg.yov.rrk();
        vmg.yov.ljy()
    };
    this.uho = function() {
        var d = vmg.yov.nhr.ejh("stats");
        if (d) {
            d.ohw(true, true)
        }
        vmg.yov.hnk.close(true)
    };
    this.rir = function() {
        var d = vmg.yov.nhr.ejh("stats");
        vmg.yov.stop();
        if (d && d.roy()) {
            d.ohw(true, true)
        }
        vmg.yov.kou.gdz.close();
        if (vmg.yov.hnk) {
            vmg.yov.hnk.close(false)
        }
    };
    this.iiz = function() {
        clearTimeout(vmg.yov.mlf);
        vmg.yov.xss.wfd(false);
        vmg.yov.stop();
        vmg.yov.kou.gdz.cgn()
    };
    this.faa = function() {
        if (vmg.yov.kpv) {
            return
        }
        var d = vmg.yov.nhr.ejh("history");
        if (d) {
            d.wfd(false)
        }
        vmg.yov.stop();
        vmg.yov.kou.dwt(vmg.yov.xvl)
    };
    this.yhp = function() {
        if (vmg.yov.kpv) {
            return
        }
        var d = vmg.yov.nhr.ejh("history");
        if (d) {
            d.wfd(false)
        }
        vmg.yov.stop();
        vmg.yov.kou.uum(vmg.yov.xvl)
    };
    this.xur = function() {
        var d = vmg.yov.nhr.ejh("history");
        if (d) {
            d.wfd(false)
        }
        vmg.yov.stop();
        clearInterval(vmg.yov.yyl);
        vmg.yov.yfv();
        vmg.yov.kou.close()
    };
    this.mbc = function() {
        vmg.yov.vcv.acn("btn");
        vmg.yov.vcv.ixm("btn");
        vmg.yov.rxt()
    };
    this.ozv = function() {
        var f = vmg.yov.nhr.ejh("topb"),
            e = vmg.yov.nhr.ejh("settings"),
            g = vmg.yov.nhr.ejh("gameb"),
            d = vmg.yov.nhr.ejh("topi");
        if (webAudioEngine && webAudioEngine.state == "suspended") {
            webAudioEngine.resume()
        }
        if (vmg.yov.vcv.nuw === true) {
            vmg.yov.kdq = (vmg.yov.kdq === vmg.yov.emt.length - 1) ? 0 : vmg.yov.kdq + 1;
            vmg.yov.syi(vmg.yov.emt[vmg.yov.kdq])
        } else {
            vmg.yov.kdq = (vmg.yov.kdq === vmg.yov.emt.length - 1) ? 0 : vmg.yov.emt.length - 1;
            vmg.yov.lyg((vmg.yov.emt[vmg.yov.kdq] === 0))
        }
        sessionStorage.sessionValue6 = vmg.yov.kdq;
        if (vmg.yov.emt[vmg.yov.kdq] > 0) {
            vmg.yov.vcv.ixm("audioon")
        }
        if (d) {
            d.cja("audio", vmg.yov.emt[vmg.yov.kdq])
        }
        if (f) {
            f.llm.wrv("audio", "#yli", [vmg.yov.kdq])
        }
        if (e) {
            e.llm.wrv("audio", "#yli", [vmg.yov.kdq])
        }
        if (g) {
            g.llm.wrv("audio", "#yli", [vmg.yov.kdq])
        }
        vmg.yov.vnf()
    };
    this.oea = function() {
        vmg.yov.ixg = true
    };
    this.qvm = function() {};
    this.bty = function() {
        var d = vmg.yov.nhr.ejh("settings");
        if (d) {
            if (d.roy()) {
                vmg.yov.xby()
            } else {
                vmg.yov.dao()
            }
            vmg.yov.vcv.ixm("btn");
            if (vmg.yov.ple.fer === false) {
                vmg.yov.xss.llm.wrv("setting", "#dub", [d.roy()])
            }
        }
    };
    this.pcr = function() {
        var d = vmg.yov.nhr.ejh("settings"),
            e = "";
        vmg.yov.lwk = (vmg.yov.lwk < vmg.yov.yxf.length - 1) ? vmg.yov.lwk + 1 : (vmg.arb.vfh()) ? 0 : 1;
        localStorage.localValue1 = vmg.yov.lwk;
        vmg.yov.yfx();
        if (d) {
            d.llm.wrv("adjustment", "#yli", [(vmg.yov.cio === vmg.ple.rlu) ? 0 : 1]);
            if (vmg.yov.yxf[vmg.yov.lwk] === vmg.rpp.ypd) {
                e = vmg.yov.language.left
            } else {
                if (vmg.yov.yxf[vmg.yov.lwk] === vmg.rpp.wmz) {
                    e = vmg.yov.language.dft
                } else {
                    if (vmg.yov.yxf[vmg.yov.lwk] === vmg.rpp.tdj) {
                        e = vmg.yov.language.ehp
                    }
                }
            }
            d.llm.wrv("adjustment", "#rig", [e])
        }
    };
    this.xag = function() {
        if (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue21)
        }
    };
    this.spc = function() {
        if (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue20)
        }
    };
    this.lzd = function() {
        if (sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue19)
        }
    };
    this.ehi = function(e, d) {
        this.xss.llm.wrv("creditd", "#rig", [this.jhl(e), d])
    };
    this.egq = function(e, d) {
        if (e > 0) {
            this.xss.llm.wrv("betd", "#rig", [this.jhl(e), d])
        } else {
            this.xss.llm.wrv("betd", "#rig", ["", d])
        }
    };
    this.uxa = function(e) {
        var d = this.nhr.ejh("topi");
        this.xvl = e;
        if (d) {
            d.vlr("id", (e > 0) ? e : "")
        }
    };
    this.mtq = function() {
        var e = "",
            d = vmg.yov.nhr.ejh("topi");
        if (vmg.rkn.value49) {
            e += vmg.yov.zcc()
        }
        if (vmg.rkn.value49 && sessionStorage.sessionValue15 == "true") {
            e += " ["
        }
        if (sessionStorage.sessionValue15 == "true") {
            e += vmg.yov.fqg()
        }
        if (vmg.rkn.value49 && sessionStorage.sessionValue15 == "true") {
            e += "]"
        }
        if (d) {
            d.vlr("time", e)
        }
    };
    this.fqg = function() {
        return this.getTime(new Date().getTime() - this.ykc)
    };
    this.zcc = function() {
        var d = new Date();
        return this.gci(d.getHours()) + ":" + this.gci(d.getMinutes())
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
        return this.gci(d) + ":" + this.gci(f)
    };
    this.gci = function(d) {
        if (d < 0) {
            return "00"
        } else {
            if (d < 10) {
                return "0" + d
            }
        }
        return d
    };
    this.bda = function() {
        if (sessionStorage.sessionValue15 == "true" || vmg.rkn.value49) {
            if (vmg.rkn.value49) {
                this.zcc()
            }
            this.ykc = (this.yev > 0) ? this.yev : new Date().getTime();
            this.mtq();
            this.dyy = setInterval(this.mtq, 1000)
        }
    };
    this.pgb = function() {
        clearInterval(this.dyy)
    };
    this.ghz = function(d) {
        this.ykc -= d
    };
    this.ytw = function(d, f) {
        var e = this.nhr.ejh("loading");
        if (e && e.hbg == null) {
            if (f && f !== "") {
                e.tul = f
            } else {
                e.tul = this.language.error
            }
            e.hbg = d;
            e.vnf(this.vcv.bol())
        }
    };
    this.dao = function() {};
    this.xby = function() {};
    this.lbk = function() {};
    this.vho = function() {};
    this.rxt = function() {
        var g = false,
            i = this.nhr.ejh("topb"),
            f = this.nhr.ejh("settings"),
            j = this.nhr.ejh("gameb"),
            d = this.nhr.ejh("topi");
        this.oks = (this.oks + 1 == vmg.rkn.value5.length) ? 0 : this.oks + 1;
        sessionStorage.sessionValue1 = vmg.rkn.value5[this.oks];
        this.language = this.pps(vmg.rkn.value5[this.oks]);
        this.ywu();
        if (i && g == false) {
            var e = i.llm.ejh("language");
            if (e) {
                e.she(this.kxg(vmg.rkn.value5[this.oks]));
                g = true
            }
            i.fqb(true)
        }
        if (f && g == false) {
            var e = f.llm.ejh("language");
            if (e) {
                e.she(this.kxg(vmg.rkn.value5[this.oks]));
                g = true
            }
        }
        if (j && g == false) {
            var e = j.llm.ejh("language");
            if (e) {
                e.she(this.kxg(vmg.rkn.value5[this.oks]));
                g = true
            }
        }
        if (g == false) {
            var e = this.xss.llm.ejh("lang");
            if (e) {
                e.jyy = this.kxg(vmg.rkn.value5[this.oks])
            }
        }
        if (d) {
            d.yli("language", sessionStorage.sessionValue1)
        }
        this.vnf()
    };
    this.ywu = function() {};
    this.pps = function(d) {
        if (d == vmg.language.EN || d == vmg.language.US) {
            return new mzm()
        } else {
            if (d == vmg.language.ES || d == vmg.language.CO || d == vmg.language.MX || d == vmg.language.CL || d == vmg.language.VE) {
                return new ojn()
            } else {
                if (d == vmg.language.DE || d == vmg.language.AT) {
                    return new nia()
                } else {
                    if (d == vmg.language.PT || d == vmg.language.BR) {
                        return new kva()
                    } else {
                        if (d == vmg.language.RU) {
                            return new oab()
                        } else {
                            if (d == vmg.language.EE) {
                                return new lie()
                            } else {
                                if (d == vmg.language.TR) {
                                    return new ebn()
                                } else {
                                    if (d == vmg.language.CZ) {
                                        return new zcw()
                                    } else {
                                        if (d == vmg.language.GR) {
                                            return new gvw()
                                        } else {
                                            if (d == vmg.language.BG) {
                                                return new bqh()
                                            } else {
                                                if (d == vmg.language.GE) {
                                                    return new zai()
                                                } else {
                                                    if (d == vmg.language.HU) {
                                                        return new wqo()
                                                    } else {
                                                        if (d == vmg.language.RO) {
                                                            return new yio()
                                                        } else {
                                                            if (d == vmg.language.FR) {
                                                                return new zhx()
                                                            } else {
                                                                if (d == vmg.language.HR) {
                                                                    return new fdp()
                                                                } else {
                                                                    if (d == vmg.language.IT) {
                                                                        return new omh()
                                                                    } else {
                                                                        if (d == vmg.language.SE) {
                                                                            return new jjv()
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
    this.kxg = function(d) {
        if (d) {
            return this.vcv.kos(d)
        }
        return null
    };
    this.xyy = function() {
        this.vcv.yce()
    };
    this.yfv = function() {};
    this.lyg = function(d) {
        this.vcv.jig(d)
    };
    this.syi = function(d) {
        this.vcv.efz(d)
    };
    this.lqo = function() {
        this.imj();
        var d = this.nhr.ejh("history");
        this.yby = true;
        this.kpv = true;
        if (d) {
            d.izw(true)
        }
        this.unm(this.zoy(this.language.cnk))
    };
    this.itw = function() {
        loadGame("hist_" + vmg.yov.kfp.toLowerCase(), vmg.rkn.value30 + "/" + vmg.yov.kfp.toLowerCase() + "/src/hist_" + vmg.yov.kfp.toLowerCase(), "UTF-8");
        removeGame(vmg.yov.kfp.toLowerCase(), vmg.rkn.value30 + "/" + vmg.yov.kfp.toLowerCase() + "/src/" + vmg.yov.kfp.toLowerCase())
    };
    this.ogo = function() {
        var d = "./history_" + this.kfp.toLowerCase() + ".html";
        if (sessionStorage.sessionValue12) {
            d += "?config=" + sessionStorage.sessionValue12
        }
        window.location.href = d
    };
    this.iiu = function() {
        var d = null;
        if (vmg.yov.jog) {
            return
        }
        if (sessionStorage.sessionValue5 != null) {
            if (vmg.yov.pix) {
                vmg.yov.pix.vob({
                    sender: vmg.yov.kfp,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                })
            }
            sessionStorage.exitGame = "true";
            d = decodeURIComponent(sessionStorage.sessionValue5);
            vmg.yov.xpt();
             if (d !== "(api)") {
               window.parent.postMessage('CloseGame',"*");	
            }
        } else {
            removeGame(vmg.yov.kfp.toLowerCase(), vmg.rkn.value30 + "/" + vmg.yov.kfp.toLowerCase() + "/src/" + vmg.yov.kfp.toLowerCase());
            removeGame("hist_" + vmg.yov.kfp.toLowerCase(), vmg.rkn.value30 + "/" + vmg.yov.kfp.toLowerCase() + "/src/hist_" + vmg.yov.kfp.toLowerCase());
            loadMenu("menu", vmg.rkn.value1001, "UTF-8", true)
        }
    };
    this.pgv = function() {
        var d = null;
        if (sessionStorage.sessionValue5 != null) {
            if (vmg.yov.pix) {
                vmg.yov.pix.vob({
                    sender: vmg.yov.kfp,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                })
            }
            d = decodeURIComponent(sessionStorage.sessionValue5);
            vmg.yov.xpt();
             if (d !== "(api)") {
               window.parent.postMessage('CloseGame',"*");	
            }
        } else {
            removeGame(vmg.yov.kfp.toLowerCase(), vmg.rkn.value30 + "/" + vmg.yov.kfp.toLowerCase() + "/src/" + vmg.yov.kfp.toLowerCase());
            removeGame("hist_" + vmg.yov.kfp.toLowerCase(), vmg.rkn.value30 + "/" + vmg.yov.kfp.toLowerCase() + "/src/hist_" + vmg.yov.kfp.toLowerCase());
            loadMenu("menu", vmg.rkn.value1001, "UTF-8", false)
        }
    };
    this.xpt = function() {
        if (!vmg.yov.vjx && vmg.rkn.value83) {
            sessionStorage.clear()
        }
    };
    this.rwq = function(f) {
        var g = null;
        if (this.wip) {
            for (var e = 0, d = f.length; e < d; e++) {
                g = f[e];
                if (g.uri !== vmg.ead.msd) {
                    if (g.uri === vmg.ead.kff || g.uri === vmg.ead.hqs) {
                        g.Title = this.language.hjk;
                        g.Text = (g.uri === vmg.ead.kff) ? this.language.lra : this.language.ksf;
                        g.Buttons = [{
                            Text: this.language.lzy,
                            Action: "quit"
                        }]
                    } else {
                        if (g.uri === vmg.ead.eqp) {
                            g.Title = this.language.wgs;
                            g.Text = this.language.kyq + "\n";
                            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                                g.Text += this.language.pwh;
                                g.Buttons = [{
                                    Text: this.zoy(this.language.pir),
                                    Action: "history"
                                }, {
                                    Text: this.language.lzy,
                                    Action: "quit"
                                }]
                            } else {
                                g.Buttons = [{
                                    Text: this.language.lzy,
                                    Action: "quit"
                                }]
                            }
                        } else {
                            if (g.uri === vmg.ead.oqp || g.uri === vmg.ead.ppb || g.uri === vmg.ead.pvw) {
                                g.Title = this.tww;
                                if (g.uri === vmg.ead.oqp) {
                                    g.Text = this.language.freerounds_startinfo + " " + this.freeRoundTotal + " " + this.language.freerounds + "\n\n" + this.language.pur
                                } else {
                                    if (g.uri === vmg.ead.ppb) {
                                        g.Text = this.language.freerounds_info1 + " " + (this.freeRoundTotal - this.wbk) + " " + this.language.freerounds_info2 + "\n\n" + this.language.pur
                                    } else {
                                        if (g.uri === vmg.ead.pvw) {
                                            g.Text = this.language.freerounds_played + ": " + this.wbk + "\n" + this.language.freerounds_win + ": " + this.txb(this.kao)
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
                    if (g.uri === vmg.ead.kwu || g.uri === vmg.ead.ipu) {
                        g.Title = this.language.lut;
                        g.Text = this.language.udh;
                        g.Buttons = [{
                            Text: this.language.ok,
                            Action: "continue"
                        }]
                    } else {
                        if (g.uri === vmg.ead.typ) {
                            g.Title = this.language.npf;
                            g.Text = this.language.mir;
                            g.Buttons = [{
                                Text: this.language.ok,
                                Action: "continue"
                            }]
                        } else {
                            if (g.uri === vmg.ead.roulette.pfi || g.uri === vmg.ead.roulette.yvc) {
                                g.Title = this.language.hjk;
                                g.Text = (g.uri === vmg.ead.roulette.pfi) ? this.language.ech : this.language.rjq;
                                g.Buttons = [{
                                    Text: this.language.lzy,
                                    Action: "quit"
                                }]
                            }
                        }
                    }
                }
            }
            this.wip.fjz(f)
        }
    };
    this.stop = function() {
        this.pgb();
        this.czv();
        this.pee();
        clearTimeout(this.yxy);
        if (!this.vjx) {
            clearInterval(this.yyl)
        }
        this.nhr.wrv("autop", "#stop");
        this.nhr.wrv("settings", "#stop");
        this.nhr.wrv("topb", "#stop")
    };
    this.uoe = function() {
        var d = false;
        if (this.vvu.toLowerCase().indexOf("freeplay") === 0) {
            d = true
        } else {
            if (this.psm == "freeplay" && this.kiq == "freeplay") {
                d = true
            } else {
                if (this.azr && (this.azr == "b71d982ffcbe56eb8cd11fa05963bbee" || this.azr.toLowerCase() == "freeplay")) {
                    d = true
                } else {
                    if (vmg.rkn.value68 != null && this.erb.toLowerCase() === vmg.rkn.value68.toLowerCase()) {
                        d = true
                    }
                }
            }
        }
        if (d === true) {
            vmg.rkn.value21.e = false;
            if (vmg.rkn.value76) {
                vmg.rkn.value76.f = false
            }
        }
        return d
    };
    this.dbb = function() {
        return (vmg.rkn.value65 > 0)
    };
    this.xdl = function() {
        return (this.vjx === false)
    };
    this.ixd = function() {
        return false
    };
    this.tol = function() {
        if (vmg.yov.dbb() && vmg.yov.ixd()) {
            clearTimeout(vmg.yov.mlf);
            vmg.yov.mlf = setTimeout(vmg.yov.lso, vmg.rkn.value65)
        }
    };
    this.fri = function() {
        if (vmg.yov.dbb() && vmg.yov.mlf >= 0) {
            if (vmg.yov.ixd()) {
                clearTimeout(vmg.yov.mlf);
                vmg.yov.mlf = setTimeout(vmg.yov.lso, vmg.rkn.value65)
            } else {
                clearTimeout(vmg.yov.mlf);
                vmg.yov.mlf = -1
            }
        }
    };
    this.czv = function() {
        if (vmg.yov.dbb()) {
            clearTimeout(vmg.yov.mlf);
            vmg.yov.mlf = -1
        }
    };
    this.udy = function() {
        return false
    };
    this.oau = function() {
        return false
    };
    this.nay = function() {
        if (vmg.yov.udy() && vmg.yov.oau() && vmg.yov.vij < 0) {
            clearTimeout(vmg.yov.vij);
            vmg.yov.vij = setTimeout(vmg.yov.azw, vmg.yov.whv)
        }
    };
    this.ofg = function() {
        if (vmg.yov.udy() && vmg.yov.vij >= 0) {
            if (vmg.yov.oau()) {
                clearTimeout(vmg.yov.vij);
                vmg.yov.vij = setTimeout(vmg.yov.azw, vmg.yov.whv)
            } else {
                clearTimeout(vmg.yov.vij);
                vmg.yov.vij = -1
            }
        }
    };
    this.pee = function() {
        if (vmg.yov.udy()) {
            clearTimeout(vmg.yov.vij);
            vmg.yov.vij = -1
        }
    };
    this.azw = function() {};
    this.vso = function() {};
    this.phl = function(f) {
        var e = Number(f.replace(/_*/g, "")),
            d = Number(this.qve.replace(/_*/g, ""));
        if (e > d) {
            this.qve = f
        }
    };
    this.mvp = function(g) {
        var e = (g && !this.xjt),
            f = this.nhr.ejh("topb"),
            d = this.nhr.ejh("topi");
        if (d) {
            d.ged(e)
        }
        if (f) {
            f.ged(e);
            f.wfd(e)
        }
    };
    this.rjc = function(g) {
        var e = (g && !this.xjt),
            f = this.nhr.ejh("topb"),
            d = this.nhr.ejh("topi");
        if (d) {
            d.ged(e)
        }
        if (f) {
            f.ged(e);
            f.sha(e)
        }
    };
    this.dyv = function(g) {
        var e = (g && !this.xjt),
            f = this.nhr.ejh("topb"),
            d = this.nhr.ejh("topi");
        if (d) {
            d.ged(e)
        }
        if (f) {
            f.ged(e);
            f.xei(e)
        }
    };
    this.yvg = function() {
        var d = this.nhr.ejh("topb");
        if (d && !d.roy()) {
            this.vcv.acn("panel_in");
            this.vcv.ixm("panel_in");
            d.fjz()
        }
    };
    this.ygn = function(d) {
        var e = this.nhr.ejh("topb");
        if (e && e.roy()) {
            this.vcv.acn("panel_out");
            this.vcv.ixm("panel_out");
            if (d) {
                e.hds = d
            }
            e.qaz()
        }
    };
    this.txb = function(f) {
        if (this.wgi > 0) {
            return (f * this.wgi).toFixed(0).toString()
        } else {
            if (vmg.rkn.value21.e == false || this.jog == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (vmg.rkn.value21.m != 1) {
                    e = f * vmg.rkn.value21.m;
                    var g = vmg.rkn.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = vmg.rkn.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.jcn(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.jhl = function(f) {
        if (this.wgi > 0) {
            var e = (f * this.wgi).toFixed(0).toString();
            if (vmg.rkn.value21.e == true && vmg.rkn.value21.m == 1 && vmg.rkn.value21.s && this.jog == false) {
                e = vmg.rkn.value21.s + " " + e
            }
            return e
        } else {
            if (vmg.rkn.value21.e == false || this.jog == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (vmg.rkn.value21.m != 1) {
                    e = f * vmg.rkn.value21.m;
                    var g = vmg.rkn.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = vmg.rkn.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.jcn(e, (d == 0) ? 0 : d + 1);
                if (vmg.rkn.value21.s) {
                    e = vmg.rkn.value21.s + " " + e
                }
                return e
            }
        }
    };
    this.jcn = function(l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (vmg.rkn.value21.cs != null) {
                l = l.replace(/\./, vmg.rkn.value21.cs)
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
                    if (vmg.rkn.value21.ts != null) {
                        e += vmg.rkn.value21.ts
                    }
                }
            }
            if (vmg.rkn.value21.cs != null) {
                f = f.replace(/\./, vmg.rkn.value21.cs)
            }
            return e + f
        }
    };
    this.cfr = function(f) {
        if (this.wgi > 0) {
            return (f * this.wgi).toFixed(0).toString()
        } else {
            if (vmg.rkn.value76.f == false || this.jog == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (vmg.rkn.value76.m != 1) {
                    e = f * vmg.rkn.value76.m;
                    var g = vmg.rkn.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = vmg.rkn.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.mka(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.yit = function(f) {
        if (this.wgi > 0) {
            var e = (f * this.wgi).toFixed(0).toString();
            if (vmg.rkn.value76.f == true && vmg.rkn.value76.m == 1 && vmg.rkn.value76.s && this.jog == false) {
                e = vmg.rkn.value76.s + " " + e
            }
            return e
        } else {
            if (vmg.rkn.value76.f == false || this.jog == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (vmg.rkn.value76.m != 1) {
                    e = f * vmg.rkn.value76.m;
                    var g = vmg.rkn.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = vmg.rkn.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.mka(e, (d == 0) ? 0 : d + 1);
                if (vmg.rkn.value76.s) {
                    e = vmg.rkn.value76.s + " " + e
                }
                return e
            }
        }
    };
    this.mka = function(l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (vmg.rkn.value76.cs != null) {
                l = l.replace(/\./, vmg.rkn.value76.cs)
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
                    if (vmg.rkn.value76.ts != null) {
                        e += vmg.rkn.value76.ts
                    }
                }
            }
            if (vmg.rkn.value76.cs != null) {
                f = f.replace(/\./, vmg.rkn.value76.cs)
            }
            return e + f
        }
    };
    this.zoy = function(d) {
        if (d && sessionStorage.sessionValue1 !== vmg.language.GE) {
            return d.toUpperCase()
        }
        return d
    };
    this.kua = function() {
        for (var f = 0, d = this.kou.gdz.umy.length, e = null, g = 0; f < d; f++) {
            e = this.kou.gdz.umy[f];
            g = e.odl.substring(e.odl.length - 1);
            this.nhr.mwl(e.odl, this.sqv(this.ple.ror.ztm[d - 1][e.ztm], (d > 2) ? this.ple.ror.atv : this.ple.ror.display, this.style.ror.hbm[e.ztm], e.qxj, e.value, this.vcv.kos((d > 2) ? e.odl + "_smalldsp" : e.odl + "_dsp"), (d <= 2) ? [this.vcv.kos("jackpot_frame")] : (Number(g) <= 2) ? [this.vcv.kos("jackpot_topframe")] : [this.vcv.kos("jackpot_bottomframe")], (d > 2) ? this.vcv.kos(e.odl + "_sym") : null), ["jackpots"])
        }
        this.nhr.mwl("jwp", this.sqv(this.ple.ror.qxs.ztm, this.ple.ror.qxs, this.style.ror.qxs, null, null, null, [this.vcv.kos("jackpot_win_0"), this.vcv.kos("jackpot_win_1"), this.vcv.kos("jackpot_win_2")], null));
        this.nhr.wrv("jwp", "#hgk", [false]);
        if (this.gph()) {
            this.nhr.mwl("mjwp", this.cxa(this.ple.ror.fgh.ztm, this.ple.ror.fgh, this.style.ror.fgh, this.vcv.kos("mj_bg"), this.vcv.kos("mj_font"), this.vcv.kos("mj_label"), [this.vcv.kos("mj_0"), this.vcv.kos("mj_1"), this.vcv.kos("mj_2"), this.vcv.kos("mj_3"), this.vcv.kos("mj_4"), this.vcv.kos("mj_5")]));
            this.nhr.wrv("mjwp", "#hgk", [false])
        }
    };
    this.trm = function() {
        var e = this.nhr.wnf("jackpots"),
            f = this.nhr.ejh("jwp"),
            k = this.nhr.ejh("mjwp");
        for (var j = 0, d = this.kou.gdz.umy.length, g = null; j < d; j++) {
            g = this.kou.gdz.umy[j];
            e[j].clq(this.ple.ror.ztm[d - 1][g.ztm]);
            e[j].iub((d > 2) ? this.ple.ror.atv : this.ple.ror.display)
        }
        if (f) {
            f.clq(this.ple.ror.qxs.ztm);
            f.iub(this.ple.ror.qxs)
        }
        if (k) {
            k.clq(this.ple.ror.fgh.ztm);
            k.iub(this.ple.ror.fgh)
        }
    };
    this.sqv = function(k, i, e, l, m, f, d, g) {
        var j = new brc();
        j.qtx(k, null, this.context2D);
        j.parent = this;
        j.tdu = f;
        j.mve = d;
        j.qkc = g;
        j.tby(l);
        j.uwu(m);
        j.zpb(e);
        j.iub(i);
        return j
    };
    this.cxa = function(j, i, g, k, l, f, e) {
        var d = new gid();
        d.qtx(j, null, this.context2D);
        d.parent = this;
        d.jjd = k;
        d.lym = l;
        d.vpk = f;
        d.ter = e;
        d.zpb(g);
        d.iub(i);
        return d
    };
    this.xoz = function(f) {
        if (this.eas() === true) {
            for (var e = 0, d = f.length; e < d; e++) {
                this.nhr.wrv(f[e].odl, "#uwu", [f[e].value])
            }
            this.vnf()
        }
    };
    this.lgy = function(d) {
        if (this.eas() === true) {
            this.ror = {
                odl: d.odl,
                value: d.value,
                qvw: d.qvw
            }
        }
    };
    this.moq = function() {
        this.ror = null
    };
    this.sje = function() {
        return false
    };
    this.gph = function() {
        return false
    };
    this.eas = function() {
        return (!this.vjx && this.kou.gdz.umy.length > 0 && this.sje())
    };
    this.pfq = function() {
        return (this.ror != null)
    };
    this.wey = function() {
        return (vmg.rkn.value86 === true && ((sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") || (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") || (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null")))
    };
    this.ztw = function() {
        if (this.fzt() && this.xot()) {
            this.bcz()
        }
    };
    this.xot = function() {
        return false
    };
    this.fzt = function() {
        if (this.vjx) {
            return false
        }
        return (this.kou.gdz.vln.length + this.kou.gdz.ckj.length > 0)
    };
    this.bcz = function() {
        var g = null,
            e = this.kou.gdz.vln.length,
            d = this.kou.gdz.ckj.length;
        if (d + e > 0) {
            for (var f = e - 1; f >= 0; f--) {
                g = this.kou.gdz.vln.splice(f, 1)[0];
                g.uri = vmg.ead.msd;
                this.pgj.push(g)
            }
            for (var f = d - 1; f >= 0; f--) {
                g = this.kou.gdz.ckj.splice(f, 1)[0];
                g.uri = vmg.ead.msd;
                this.pgj.push(g)
            }
            if (this.wip && !this.wip.roy()) {
                this.dfj()
            }
        }
    };
    this.dfj = function() {
        var d = null;
        if (this.pgj.length > 0) {
            d = this.pgj.shift();
            this.rwq([d])
        }
    };
    this.qtj = function() {
        if (vmg.yov.mpn.length > 0) {
            vmg.yov.rwq(vmg.yov.mpn)
        }
    };
    this.yzp = function() {
        this.pgj.length = 0
    };
    this.vht = function() {
        this.mpn.length = 0;
        if (this.ycw) {
            this.ycw.qaz()
        }
    };
    this.qcm = function() {
        var f = null,
            d = this.kou.gdz.mpn.length;
        if (d > 0) {
            for (var e = d - 1; e >= 0; e--) {
                f = this.kou.gdz.mpn.splice(e, 1)[0];
                f.uri = vmg.ead.msd;
                this.mpn.push(f)
            }
            if (this.ycw) {
                this.ycw.fjz(this.mpn[0].Title, this.mpn[0].Text, this.mpn.length)
            }
        }
    };
    this.mca = function() {
        var d = false;
        if (this.wip && this.wip.roy()) {
            d = true
        }
        if (this.ycw && this.ycw.roy()) {
            d = true
        }
        if (this.wey()) {
            d = true
        }
        if (this.cgx) {
            this.cgx.style.display = (d) ? "block" : "none"
        }
    };
    this.usu = function() {
        this.mvp(false);
        this.xss.wfd(false);
        this.xss.llm.wrv("info", "#qjk");
        this.rwq([{
            uri: vmg.ead.eqp
        }])
    };
    this.mcw = function() {
        vmg.yov.fcg = true
    };
    this.jyv = function() {
        this.hnk = new qzt().qtx(this, vmg.rkn.value6)
    };
    this.msi = function() {
        if (this.hnk) {
            this.hnk.connect(this.kfp, this.psm, this.kiq, this.azr, this.qve, true)
        }
    };
    this.ljy = function() {
        if (vmg.yov.hnk) {
            vmg.yov.hnk.connect(vmg.yov.kfp, vmg.yov.psm, vmg.yov.kiq, vmg.yov.azr, vmg.yov.qve, false)
        }
    };
    this.rrk = function() {};
    this.cjt = function() {};
    this.lct = function(d) {
        if (!this.uoe() && !this.vjx) {
            clearTimeout(this.yxy);
            if (this.dqz()) {
                this.yxy = setTimeout(this.gtd, d)
            } else {
                if (Number(sessionStorage.sessionValue17) > 0) {
                    this.yxy = setTimeout(this.mcw, Number(sessionStorage.sessionValue17) * 60000)
                }
            }
        }
    };
    this.gtd = function() {
        vmg.yov.ajq = true
    };
    this.dqz = function() {
        return vmg.rkn.value36 || vmg.rkn.value37
    }
}

function xqu() {
    this.qtx = function() {
        this.hhd("btn", this.trh);
        this.hhd("gamble_on", this.trh);
        this.hhd("gamble_off", this.trh);
        this.hhd("panel_in", this.trh);
        this.hhd("panel_out", this.trh);
        this.hhd("audioon", this.trh);
        for (var a = 0; a < 12; a++) {
            this.hhd("step" + a, this.trh)
        }
        this.hhd("maxstep", this.trh);
        this.hhd("gambleprop", this.jst)
    }
}
xqu.prototype = new bmr;

function dhk() {
    this.iwd = {
        tji: 84,
        ntv: -1,
        value: "T",
        ipf: null
    };
    this.seb = {
        tji: 80,
        ntv: -1,
        value: "P",
        ipf: null
    };
    this.start = {
        tji: 32,
        ntv: -1,
        value: "SPACE",
        ipf: null
    };
    this.xjt = {
        tji: 16,
        ntv: -1,
        value: "SHIFT",
        ipf: null
    };
    this.ckc = {
        tji: 38,
        ntv: -1,
        value: "\u25B2",
        ipf: null
    };
    this.all = {
        tji: 40,
        ntv: -1,
        value: "\u25BC",
        ipf: null
    };
    this.oue = {
        tji: 71,
        ntv: -1,
        value: "G",
        ipf: null
    };
    this.njc = {
        tji: 27,
        ntv: -1,
        value: "ESC",
        ipf: null
    };
    this.language = {
        tji: 76,
        ntv: -1,
        value: "L",
        ipf: null
    };
    this.ufm = {
        tji: 13,
        ntv: -1,
        value: "ENTER",
        ipf: null
    };
    this.bxk = {
        tji: 27,
        ntv: -1,
        value: "ESC",
        ipf: null
    };
    this.qox = {
        tji: 39,
        ntv: -1,
        value: "\u25B6",
        ipf: null
    };
    this.yhk = {
        tji: 37,
        ntv: -1,
        value: "\u25C0",
        ipf: null
    };
    this.nas = {
        tji: 27,
        ntv: -1,
        value: "ESC",
        ipf: null
    };
    this.ghl.push(this.iwd);
    this.ghl.push(this.seb);
    this.ghl.push(this.start);
    this.ghl.push(this.ckc);
    this.ghl.push(this.all);
    this.ghl.push(this.njc);
    this.ghl.push(this.language);
    this.ghl.push(this.xjt);
    this.ghl.push(this.oue)
}
dhk.prototype = new ssk;

function sgv(g, c, f, e, i, a, d, b) {
    this.jvv = g;
    this.qls = f;
    this.hgh = e;
    this.qyp = i;
    this.kfp = c;
    this.qve = a;
    this.zzk = d;
    this.erb = b;
    this.fqx = [];
    this.nye = [];
    this.ine = [];
    this.grs = [];
    this.scc = [];
    this.xvl = 0;
    this.qvw = 0;
    this.win = 0;
    this.lah = 0;
    this.yjd = 0;
    this.jnc = 0;
    this.rph = 0;
    this.yer = 0;
    this.hfz = -1;
    this.zho = -1;
    this.qqe = 0;
    this.xjt = false;
    this.wrc = -1;
    this.mxa = 0;
    this.oly = "";
    this.uib = function(l) {
        if (l != null) {
            this.kyz = 0;
            this.xui = this.mgg(l);
            if (this.xui == 0) {
                this.vio = this.dqs(l);
                this.ead = this.mgg(l);
                this.xvl = this.nol(l);
                this.qvw = this.nol(l);
                this.win = this.nol(l);
                this.lah = this.nol(l);
                this.rph = this.dqs(l);
                this.yjd = this.nol(l);
                this.jnc = this.nol(l);
                this.yer = this.nol(l);
                for (var j = 0; j < 8; j++) {
                    this.ine[j] = this.dqs(l)
                }
                for (var j = 0; j < 5; j++) {
                    this.nye[j] = this.nol(l)
                }
                for (var j = 0; j < 5; j++) {
                    this.fqx[j] = this.nol(l)
                }
                this.hfz = this.dqs(l);
                this.zho = this.dqs(l);
                this.qqe = this.dqs(l);
                this.mxa = this.dqs(l);
                this.wrc = this.dqs(l);
                var m = this.dqs(l);
                for (var j = 0; j < m; j++) {
                    this.grs[j] = this.nol(l)
                }
                var k = this.dqs(l);
                for (var j = 0; j < k; j++) {
                    this.scc[j] = this.nol(l)
                }
                this.zuo(l);
                if (this.vio == 0) {
                    this.xno("A/u250")
                } else {
                    this.kou.bgh()
                }
            } else {
                if (this.xui == 1) {
                    this.vio = this.dqs(l);
                    this.ead = this.mgg(l);
                    this.xvl = this.nol(l);
                    this.qvw = this.nol(l);
                    this.win = this.nol(l);
                    this.lah = this.nol(l);
                    this.rph = this.dqs(l);
                    this.yjd = this.nol(l);
                    this.jnc = this.nol(l);
                    this.yer = this.nol(l);
                    for (var j = 0; j < 8; j++) {
                        this.ine[j] = this.dqs(l)
                    }
                    for (var j = 0; j < 5; j++) {
                        this.nye[j] = this.nol(l)
                    }
                    for (var j = 0; j < 5; j++) {
                        this.fqx[j] = this.nol(l)
                    }
                    this.hfz = this.dqs(l);
                    this.zho = this.dqs(l);
                    this.qqe = this.dqs(l);
                    this.xjt = (this.dqs(l) == 1) ? true : false;
                    this.mxa = this.dqs(l);
                    this.wrc = this.dqs(l);
                    this.zuo(l);
                    if (this.ead == 0) {
                        if (this.vio == vmg.eoo.cvz.enq) {
                            this.kou.bgh()
                        } else {
                            if (this.vio == vmg.eoo.cvz.kcx) {
                                this.kou.ksc()
                            } else {
                                if (this.vio == vmg.eoo.cvz.bhi) {
                                    this.kou.rau()
                                } else {
                                    if (this.vio == vmg.eoo.cvz.nyf) {
                                        this.kou.dda()
                                    } else {
                                        if (this.vio == vmg.eoo.cvz.dxv) {
                                            this.kou.baj()
                                        } else {
                                            if (this.vio == vmg.eoo.cvz.hiz) {
                                                this.kou.efq()
                                            } else {
                                                if (this.vio == vmg.eoo.cvz.exl) {
                                                    this.kou.qnw()
                                                } else {
                                                    if (this.vio == vmg.eoo.cvz.kpz) {
                                                        this.kou.fta()
                                                    } else {
                                                        if (this.vio == vmg.eoo.cvz.nds) {
                                                            this.kou.hjg()
                                                        } else {
                                                            if (this.vio == vmg.eoo.cvz.oek) {
                                                                this.kou.dgr()
                                                            } else {
                                                                if (this.vio == vmg.eoo.cvz.iwt) {
                                                                    this.kou.sks()
                                                                } else {
                                                                    if (this.vio == vmg.eoo.cvz.fat) {
                                                                        this.kou.nwp()
                                                                    } else {
                                                                        this.ecn()
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
                        this.kou.svw(this.ead)
                    }
                } else {
                    if (this.xui == 2) {} else {
                        if (this.xui == 3) {
                            this.qvw = this.nol(l);
                            this.kou.ehi()
                        } else {
                            if (this.xui === 8) {
                                this.xno("8")
                            } else {
                                if (this.xui == 9) {
                                    this.kou.khx.vvu = l.substring(this.kyz)
                                } else {
                                    this.evv = this.mgg(l);
                                    this.kou.nwk(l.substring(2))
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.zuo = function(j) {
        if (this.xui == 0) {
            this.oly = this.onq(j);
            if (vmg.rkn.value21.e === true && vmg.rkn.value21.s !== "") {
                this.oly = ""
            }
        }
    };
    this.ecn = function() {};
    this.qgf = function(j, k) {
        this.xno("A/u251," + j + "," + k)
    };
    this.hwc = function(j, l, k) {
        this.xno("A/u2512," + k[0] + "," + k[1] + "," + k[2] + "," + k[3] + "," + k[4] + "," + j + "," + l)
    };
    this.ipq = function(j, l, k) {
        this.xno("A/u253," + k[0] + "," + k[1] + "," + k[2] + "," + k[3] + "," + k[4] + "," + j + "," + l)
    };
    this.lgz = function() {
        this.xno("A/u257")
    };
    this.zzu = function() {
        this.xno("A/u259")
    };
    this.oue = function(j) {
        this.xno("A/u258," + j)
    };
    this.qnk = function() {
        this.xno("A/u2514")
    };
    this.iru = function() {
        this.xno("A/u2515")
    };
    this.lrj = function(j) {
        this.xno("A/u2513," + j)
    }
}
sgv.prototype = new bku;

function ztz() {
    this.qtx = function(a, b) {
        this.jvv = b;
        this.khx = a;
        return this
    };
    this.connect = function(c, f, e, g, a, d, b) {
        this.qls = f;
        this.hgh = e;
        this.qyp = g;
        this.kfp = c;
        this.zzk = d;
        this.erb = b;
        this.gdz = new sgv(this.jvv, c, f, e, g, a, d, b);
        this.gdz.qtx(this)
    };
    this.qgf = function(a, b) {
        this.gdz.qgf(a, b)
    };
    this.hwc = function(a, c, b) {
        this.gdz.hwc(a, c, b)
    };
    this.ipq = function(a, c, b) {
        this.gdz.ipq(a, c, b)
    };
    this.lgz = function() {
        this.gdz.lgz()
    };
    this.zzu = function() {
        this.gdz.zzu()
    };
    this.oue = function(a) {
        this.gdz.oue(a)
    };
    this.qnk = function() {
        this.gdz.qnk()
    };
    this.iru = function() {
        this.gdz.iru()
    };
    this.lrj = function(a) {
        this.gdz.lrj(a)
    };
    this.bgh = function() {
        var c = this.gdz.vio;
        for (var b = 0; b < this.gdz.nye.length; b++) {
            this.khx.nye[b] = this.gdz.nye[b]
        }
        for (var b = 0; b < this.gdz.fqx.length; b++) {
            this.khx.fqx[b] = this.gdz.fqx[b]
        }
        this.khx.qvw = this.gdz.qvw;
        this.khx.yjd = this.gdz.yjd;
        this.khx.jnc = this.gdz.jnc;
        for (var b = 0, a = this.gdz.grs.length; b < a && this.gdz.grs[b] <= this.gdz.jnc; b++) {
            this.khx.grs[b] = this.gdz.grs[b]
        }
        if (c == vmg.eoo.cvz.enq || (c == vmg.eoo.cvz.bhi && this.gdz.win + this.gdz.lah == 0) || c == vmg.eoo.cvz.nyf || (c == vmg.eoo.cvz.dxv && this.gdz.win + this.gdz.lah == 0) || c == vmg.eoo.cvz.exl || (c == vmg.eoo.cvz.nds && this.gdz.win + this.gdz.lah == 0) || (c == vmg.eoo.cvz.kcx && this.khx.aqa == true)) {
            this.khx.fus = true
        } else {
            this.khx.fus = false
        }
        this.khx.wnb = this.gdz.rph;
        this.khx.totalBet = this.khx.grs[this.khx.wnb];
        this.khx.win = this.gdz.win;
        this.khx.fdj = this.gdz.hfz;
        this.khx.zho = this.gdz.zho;
        this.khx.qqe = this.gdz.qqe;
        this.khx.state = c;
        this.nrh();
        this.khx.vnd();
        this.khx.awd(this.gdz.vio, this.gdz.xvl, this.gdz.ine, this.gdz.mxa, this.gdz.wrc)
    };
    this.ksc = function() {
        for (var a = 0; a < this.gdz.nye.length; a++) {
            this.khx.nye[a] = this.gdz.nye[a]
        }
        for (var a = 0; a < this.gdz.fqx.length; a++) {
            this.khx.fqx[a] = this.gdz.fqx[a]
        }
        this.khx.qvw = this.gdz.qvw;
        this.khx.fdj = this.gdz.hfz;
        this.khx.state = this.gdz.vio;
        this.khx.zho = this.gdz.zho;
        this.nrh();
        this.khx.rpf();
        this.khx.uxa(this.gdz.xvl)
    };
    this.fta = function() {
        for (var a = 0; a < this.gdz.nye.length; a++) {
            this.khx.nye[a] = this.gdz.nye[a]
        }
        for (var a = 0; a < this.gdz.fqx.length; a++) {
            this.khx.fqx[a] = this.gdz.fqx[a]
        }
        this.khx.qvw = this.gdz.qvw;
        this.khx.zho = this.gdz.zho;
        this.khx.fdj = this.gdz.hfz;
        this.khx.state = this.gdz.vio;
        this.nrh();
        this.khx.don();
        this.khx.uxa(this.gdz.xvl)
    };
    this.rau = function() {
        for (var a = 0; a < this.gdz.nye.length; a++) {
            this.khx.nye[a] = this.gdz.nye[a]
        }
        for (var a = 0; a < this.gdz.fqx.length; a++) {
            this.khx.fqx[a] = this.gdz.fqx[a]
        }
        this.khx.qvw = this.gdz.qvw;
        this.khx.win = this.gdz.win;
        this.khx.zho = this.gdz.zho;
        this.khx.fdj = this.gdz.hfz;
        this.khx.state = this.gdz.vio;
        if (this.khx.win > 0) {
            this.khx.vqi.jhd(this.gdz.ine, this.gdz.mxa)
        }
        this.nrh();
        this.khx.vxp();
        this.khx.uxa(this.gdz.xvl)
    };
    this.dda = function() {
        this.khx.qvw = this.gdz.qvw;
        this.khx.state = this.gdz.vio;
        this.nrh();
        this.khx.pqp()
    };
    this.qnw = function() {
        for (var a = 0; a < this.gdz.nye.length; a++) {
            this.khx.nye[a] = this.gdz.nye[a]
        }
        for (var a = 0; a < this.gdz.fqx.length; a++) {
            this.khx.fqx[a] = this.gdz.fqx[a]
        }
        this.khx.qvw = this.gdz.qvw;
        this.khx.win = this.gdz.win;
        this.khx.zho = this.gdz.zho;
        this.khx.fdj = this.gdz.hfz;
        this.khx.state = this.gdz.vio;
        if (this.khx.win > 0) {
            this.khx.vqi.jhd(this.gdz.ine, this.gdz.mxa)
        }
        this.nrh();
        this.khx.vbx(this.gdz.mxa);
        this.khx.uxa(this.gdz.xvl)
    };
    this.baj = function() {
        this.khx.qvw = this.gdz.qvw;
        this.khx.win = this.gdz.win;
        this.khx.state = this.gdz.vio;
        this.khx.vqi.jhd(this.gdz.ine, this.gdz.mxa);
        this.nrh();
        this.khx.ryv();
        this.khx.uxa(this.gdz.xvl)
    };
    this.efq = function() {
        this.khx.qvw = this.gdz.qvw;
        this.khx.win = this.gdz.win;
        this.khx.state = this.gdz.vio;
        this.nrh();
        this.khx.xtl();
        this.khx.uxa(this.gdz.xvl)
    };
    this.hjg = function() {
        this.khx.qvw = this.gdz.qvw;
        this.khx.win = this.gdz.win;
        this.khx.state = this.gdz.vio;
        this.khx.vqi.jhd(this.gdz.ine, this.gdz.mxa);
        this.nrh();
        this.khx.lax(this.gdz.mxa);
        this.khx.uxa(this.gdz.xvl)
    };
    this.dgr = function() {
        this.khx.qvw = this.gdz.qvw;
        this.khx.win = this.gdz.win;
        this.khx.state = this.gdz.vio;
        this.nrh();
        this.khx.ucz(this.gdz.wrc);
        this.khx.uxa(this.gdz.xvl)
    };
    this.sks = function() {
        this.khx.qvw = this.gdz.qvw;
        this.khx.win = this.gdz.win;
        this.khx.state = this.gdz.vio;
        this.khx.vqi.jhd(this.gdz.ine, this.gdz.mxa);
        this.nrh();
        this.khx.zfa(this.gdz.wrc);
        this.khx.uxa(this.gdz.xvl)
    };
    this.nrh = function() {
        this.khx.oly = this.gdz.oly
    }
}
ztz.prototype = new ptw;

function ysx() {
    var a = this;
    this.dqf = false;
    this.uqd = null;
    this.llm = null;
    this.ovn = false;
    this.dee = -1;
    this.gdw = 0;
    this.wch = null;
    this.rnx = 800;
    this.vqk = 0;
    this.afj = null;
    this.pyt = null;
    this.uch = null;
    this.bnz = null;
    this.cmd = null;
    this.ujh = null;
    this.dhu = null;
    this.whu = new njt();
    this.tdn = new njt();
    this.zbw = 30;
    this.qtx = function(b, d, c) {
        ysx.prototype.qtx.call(this, b, d, c);
        this.afj = document.createElement("canvas");
        this.afj.width = this.width;
        this.afj.height = this.height;
        this.pyt = this.afj.getContext("2d");
        this.tse()
    };
    this.vqo = function(c, b) {
        try {
            this.zbw = c.qvt;
            this.whu = c.dcw;
            this.tdn = c.whl;
            this.nlz(c);
            this.kro(c);
            this.ite(c);
            this.zpb(b, false)
        } catch (d) {
            console.error(d)
        }
    };
    this.iub = function(f) {
        try {
            var c = {},
                b = this.llm.ejh("info"),
                m = this.llm.ejh("creditd"),
                l = this.llm.ejh("betd"),
                k = this.llm.wnf("buttons");
            if (this.parent.klz() != null) {
                c = f.dcc
            } else {
                if (vmg.rkn.value57 === vmg.ui.knm) {
                    c = f.vhn
                } else {
                    if (vmg.rkn.value57 === vmg.ui.nvy) {
                        c = f.ejj
                    } else {
                        if (vmg.rkn.value57 === vmg.ui.ssy) {
                            c = f.ijk
                        }
                    }
                }
            }
            this.zbw = f.qvt;
            this.whu = f.dcw;
            this.tdn = f.whl;
            if (m) {
                m.iub(f.display);
                m.clq(f.thf)
            }
            if (l) {
                l.iub(f.display);
                l.clq(f.reb)
            }
            if (b) {
                b.iub(f.npf);
                b.clq(f.npf.ztm)
            }
            this.awg();
            for (var d = 0, g = k.length; d < g; d++) {
                if (k[d] instanceof zsj) {
                    k[d].iub(f.vfp)
                }
            }
            if (this.parent.klz() != null) {
                this.llm.wrv("astart", "#iub", [f.iiy]);
                if (this.parent.tzp() === true) {
                    this.llm.wrv("start", "#iub", [f.iiy])
                } else {
                    this.llm.wrv("start", "#iub", [f.gge])
                }
            } else {
                this.llm.wrv("start", "#iub", [f.gge]);
                if (vmg.rkn.value57 === vmg.ui.knm) {
                    this.llm.wrv("astart", "#iub", [f.gge])
                }
            }
            this.llm.wrv("start", "#clq", [c.lyr]);
            this.llm.wrv("astart", "#clq", [c.rfc]);
            this.llm.wrv("bet", "#clq", [c.suj]);
            this.llm.wrv("gamble", "#clq", [c.app]);
            this.llm.wrv("exit", "#clq", [c.kmn]);
            this.llm.wrv("lang", "#clq", [c.ogt]);
            this.llm.wrv("setting", "#clq", [c.tdb])
        } catch (j) {
            console.error(j)
        }
    };
    this.zpb = function(f) {
        try {
            var k = this.llm.ejh("info"),
                c = this.llm.wnf("displays"),
                g = this.llm.wnf("buttons");
            this.uch = f.backgroundColor;
            this.bnz = f.dvo;
            this.ujh = f.vox;
            this.dhu = f.ksr;
            if (k) {
                k.zpb(f.npf)
            }
            for (var d = 0, b = g.length; d < b; d++) {
                g[d].zpb(f.dfa)
            }
            for (var d = 0, b = c.length; d < b; d++) {
                c[d].zpb(f.display)
            }
            this.awg()
        } catch (j) {
            console.error(j)
        }
    };
    this.doc = function(o, n, p) {
        var m = this.llm.wnf("buttons"),
            d = this.llm.ejh("bet"),
            b = this.llm.ejh("start"),
            k = this.llm.ejh("betd"),
            c = this.llm.ejh("creditd");
        ioh = this.parent.nhr.ejh("betsel"), oso = o - this.x, csf = n - this.y;
        for (var g = 0, l = m.length; g < l; g++) {
            var e = m[g];
            if (oso >= e.x && oso <= e.x + e.width && csf >= e.y && csf <= e.y + e.height && e.roy() == true) {
                if (e.yfs() && !e.vey()) {
                    if (e === d) {
                        e.xjb(true, true, false);
                        for (var f = 0; f < l; f++) {
                            m[f].xon(true, false)
                        }
                        e.pxk();
                        this.wch = function() {
                            if (e.pxk() === true) {
                                clearInterval(a.gdw);
                                e.xjb(false, true);
                                for (var i = 0; i < l; i++) {
                                    m[i].xon(false)
                                }
                            }
                        };
                        this.gdw = setInterval(this.wch, e.zqh)
                    } else {
                        if (e === b && b.pxk === this.opu) {
                            e.xjb(true, true, false)
                        } else {
                            e.xjb(true, true)
                        }
                        e.pxk();
                        for (var f = 0; f < l; f++) {
                            m[f].xon(true)
                        }
                    }
                    return true
                }
            }
        }
        if (d && d.yfs() && !d.vey()) {
            if (k && oso >= k.x && oso <= k.x + k.width && csf >= k.y && csf <= k.y + k.height) {
                if (!p) {
                    if (ioh && ioh.yfs()) {
                        this.parent.mun()
                    }
                    return true
                }
            } else {
                if (c && oso >= c.x && oso <= c.x + c.width && csf >= c.y && csf <= c.y + c.height) {
                    if (!p) {
                        this.parent.jpm()
                    }
                    return true
                }
            }
        }
        return false
    };
    this.ecg = function() {
        var f = this.llm.wnf("buttons"),
            k = this.llm.ejh("bet"),
            g = this.llm.ejh("start");
        for (var d = 0, b = f.length; d < b; d++) {
            var e = f[d];
            if (e.eqj() === true) {
                e.xjb(false, true);
                if (e === k) {
                    clearInterval(this.gdw);
                    for (var c = 0; c < b; c++) {
                        f[c].xon(false)
                    }
                } else {
                    if (e === g && g.pxk === this.opu) {
                        clearTimeout(this.vqk);
                        a.parent.vcv.acn("auto_fill");
                        this.llm.wrv("start", "#aas")
                    }
                }
                return true
            }
        }
        return false
    };
    this.bhd = function(g) {
        var f = this.llm.wnf("buttons"),
            k = this.llm.ejh("bet");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (g == d.vii) {
                if (d.yfs() && !d.vey()) {
                    d.xjb(true, true);
                    d.pxk();
                    for (var c = 0; c < b; c++) {
                        f[c].xon(true)
                    }
                }
                return true
            }
        }
        if (g == this.parent.gky.all.tji) {
            if (k && k.yfs() && !k.vey()) {
                this.parent.bdr();
                for (var c = 0, b = f.length; c < b; c++) {
                    f[c].xon(true)
                }
            }
            return true
        }
        return false
    };
    this.vin = function() {
        var e = this.llm.wnf("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.eqj() == true) {
                c.xjb(false, true);
                return true
            }
        }
        return false
    };
    this.rto = function(l, k, m) {
        var j = this.llm.wnf("buttons"),
            c = this.llm.ejh("bet");
        if (l != null && k != null) {
            var e = l - this.x;
            var d = k - this.y;
            for (var f = 0, g = j.length; f < g; f++) {
                var b = j[f];
                if (e >= b.x && e <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.roy() && b.yfs() && !b.vey()) {
                    return b.pxk
                }
            }
        } else {
            if (m != null) {
                for (var f = 0, g = j.length; f < g; f++) {
                    var b = j[f];
                    if (m == b.vii && b.roy() && b.yfs() && !b.vey()) {
                        return b.pxk
                    }
                }
                if (m == this.parent.gky.all.tji && c && c.roy() && c.yfs() && !c.vey()) {
                    return this.parent.bdr
                }
            }
        }
        return null
    };
    this.tse = function() {
        this.llm = new fsv();
        this.llm.qtx();
        this.llm.haq("displays");
        this.llm.haq("buttons");
        this.llm.haq("allbuttons");
        this.llm.haq("infos");
        this.llm.haq("start");
        this.llm.haq("collect");
        this.llm.haq("game");
        this.llm.haq("hold");
        this.llm.haq("settings")
    };
    this.ite = function(b) {
        var c = this.zms(b.npf.ztm);
        c.iub(b.npf);
        this.llm.mwl("info", c, ["infos"])
    };
    this.nlz = function(c) {
        var b = {};
        if (this.parent.klz() != null) {
            b = c.dcc
        } else {
            if (vmg.rkn.value57 === vmg.ui.knm) {
                b = c.vhn
            } else {
                if (vmg.rkn.value57 === vmg.ui.nvy) {
                    b = c.ejj
                } else {
                    if (vmg.rkn.value57 === vmg.ui.ssy) {
                        b = c.ijk
                    }
                }
            }
        }
        if (this.parent.klz() != null) {
            this.llm.mwl("astart", this.rxu(b.rfc, this.parent.language.keq, "---", this.parent.vcv.kos("btn_s"), this.parent.avz, (!this.parent.vjx) ? this.parent.gky.xjt : null, c.iiy), ["buttons", "allbuttons", "start", "collect", "hold"]);
            if (this.parent.tzp() === true) {
                this.llm.mwl("start", this.rxu(b.lyr, (this.parent.ple.cli === false) ? this.parent.language.start : null, "---", (this.parent.ple.cli === false) ? this.parent.vcv.kos("btn") : this.parent.vcv.kos("btn_dl"), (this.parent.tzp() === true) ? this.opu : this.parent.kjg, (!this.parent.vjx) ? this.parent.gky.start : null, c.iiy), ["buttons", "allbuttons", "start", "collect", "hold"])
            } else {
                this.llm.mwl("start", this.xxb(b.lyr, (this.parent.ple.cli === false) ? this.parent.language.start : null, (this.parent.ple.cli === false) ? this.parent.vcv.kos("btn") : this.parent.vcv.kos("btn_dl"), (this.parent.tzp() === true) ? this.opu : this.parent.kjg, (!this.parent.vjx) ? this.parent.gky.start : null, c.gge), ["buttons", "allbuttons", "start", "collect", "hold"])
            }
        } else {
            this.llm.mwl("start", this.xxb(b.lyr, (this.parent.ple.cli === false) ? this.parent.language.start : null, (this.parent.ple.cli === false) ? this.parent.vcv.kos("btn") : this.parent.vcv.kos("btn_dl"), (this.parent.tzp() === true) ? this.opu : this.parent.kjg, (!this.parent.vjx) ? this.parent.gky.start : null, c.gge), ["buttons", "allbuttons", "start", "collect", "hold"]);
            this.llm.mwl("astart", this.xxb(b.rfc, this.parent.language.xjt, (vmg.rkn.value57 === vmg.ui.knm) ? this.parent.vcv.kos("btn") : this.parent.vcv.kos("btn_s"), this.parent.avz, (!this.parent.vjx) ? this.parent.gky.xjt : null, c.vfp), ["buttons", "allbuttons", "start", "collect", "game", "hold"])
        }
        this.llm.mwl("bet", this.xxb(b.suj, this.parent.language.afd, this.parent.vcv.kos("btn_s"), this.parent.tjg, (!this.parent.vjx) ? this.parent.gky.ckc : null, c.vfp), ["buttons", "allbuttons"]);
        this.llm.ejh("bet").zqh = 300;
        this.llm.mwl("gamble", this.xxb(b.app, this.parent.language.oue, this.parent.vcv.kos("btn_s"), this.parent.jzw, (!this.parent.vjx) ? this.parent.gky.oue : null, c.vfp), ["buttons", "allbuttons", "start", "game", "collect", "hold"]);
        if (this.parent.klz() != null) {
            this.llm.mwl("exit", this.xxb(b.kmn, (this.parent.ple.cli === true) ? null : (vmg.rkn.value50.g === true) ? this.parent.language.lzy : this.parent.language.gby, (this.parent.ple.cli === false) ? this.parent.vcv.kos("btn_s") : this.parent.vcv.kos("btn_e"), this.parent.lso, (!this.parent.vjx) ? this.parent.gky.njc : null, c.vfp), ["buttons", "allbuttons", "collect"])
        } else {
            if (vmg.rkn.value57 !== vmg.ui.ssy) {
                this.llm.mwl("exit", this.xxb(b.kmn, (this.parent.ple.cli === true) ? null : (vmg.rkn.value50.g === true) ? this.parent.language.lzy : this.parent.language.gby, (this.parent.ple.cli === false) ? this.parent.vcv.kos("btn_s") : this.parent.vcv.kos("btn_e"), this.parent.lso, (!this.parent.vjx) ? this.parent.gky.njc : null, c.vfp), ["buttons", "allbuttons", "collect"])
            }
            if (vmg.rkn.value57 !== vmg.ui.knm && this.parent.klz() == null) {
                this.llm.mwl("lang", this.xbl(b.ogt, this.parent.kxg(sessionStorage.sessionValue1), this.parent.mbc, (!this.parent.vjx) ? this.parent.gky.language : null), ["buttons", "allbuttons", "hold"])
            }
        }
        this.llm.mwl("setting", this.xxb(b.tdb, null, (this.parent.ple.cli === true) ? this.parent.vcv.kos("btn_m") : this.parent.vcv.kos("btn_s"), this.parent.bty, null, c.vfp), ["buttons", "settings"])
    };
    this.kro = function(c) {
        var b = this.parent.vcv.kos("display_effect");
        this.llm.mwl("creditd", this.rsj(c.thf, (this.parent.uoe()) ? this.parent.language.lwc : this.parent.language.qvw, this.parent.jhl(this.parent.qvw), b, c.display), ["displays"]);
        this.llm.mwl("betd", this.rsj(c.reb, this.parent.language.afd, this.parent.jhl(this.parent.totalBet), b, c.display), ["displays"])
    };
    this.fah = function() {
        if (this.dee == 1) {
            this.wfd(this.ovn)
        } else {
            if (this.dee == 2) {
                this.xmf(this.ovn)
            } else {
                if (this.dee == 3) {
                    this.dpo(this.ovn)
                } else {
                    if (this.dee == 4) {
                        this.fhz(this.ovn)
                    } else {
                        if (this.dee == 5) {
                            this.kxy(this.ovn)
                        } else {
                            if (this.dee == 6) {
                                this.xei(this.ovn)
                            }
                        }
                    }
                }
            }
        }
    };
    this.wfd = function(d) {
        var c = this.llm.wnf("allbuttons"),
            e = 0,
            b = 0;
        this.ovn = d;
        this.dee = 1;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].ged(d)
        }
    };
    this.xmf = function(d) {
        var c = this.llm.wnf("allbuttons"),
            f = this.llm.wnf("start"),
            e = 0,
            b = 0;
        this.ovn = d;
        this.dee = 2;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].ged(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].ged(d)
        }
    };
    this.dpo = function(d) {
        var c = this.llm.wnf("allbuttons"),
            f = this.llm.wnf("game"),
            e = 0,
            b = 0;
        this.ovn = d;
        this.dee = 3;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].ged(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].ged(d)
        }
    };
    this.fhz = function(d) {
        var c = this.llm.wnf("allbuttons"),
            f = this.llm.wnf("hold"),
            e = 0,
            b = 0;
        this.ovn = d;
        this.dee = 4;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].ged(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].ged(d)
        }
    };
    this.kxy = function(d) {
        var c = this.llm.wnf("allbuttons"),
            f = (this.dqf === true) ? this.llm.wnf("collect") : this.llm.wnf("start"),
            e = 0,
            b = 0;
        this.ovn = d;
        this.dee = 5;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].ged(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].ged(d)
        }
    };
    this.xei = function(e) {
        var c = this.llm.wnf("allbuttons"),
            d = this.llm.wnf("settings"),
            f = 0,
            b = 0;
        this.ovn = e;
        this.dee = 6;
        for (f = 0, b = c.length; f < b; f++) {
            c[f].ged(false)
        }
        for (f = 0, b = d.length; f < b; f++) {
            d[f].ged(e)
        }
    };
    this.rsj = function(c, g, f, e, b) {
        var d = new jmu();
        d.qtx(c, this.context2D, null, g, f);
        d.parent = this;
        d.jyy = e;
        d.iub(b);
        return d
    };
    this.xxb = function(e, i, g, f, c, d) {
        var b = new zsj();
        b.qtx(e, this.context2D, null, g, null, i);
        b.parent = this;
        b.pxk = f;
        b.iub(d);
        if (c) {
            b.vii = c.tji
        }
        return b
    };
    this.rxu = function(e, j, g, i, f, c, d) {
        var b = new zsj();
        b.qtx(e, this.context2D, null, i, null, j);
        b.parent = this;
        b.pxk = f;
        b.value = g;
        b.iub(d);
        if (c) {
            b.vii = c.tji
        }
        return b
    };
    this.xbl = function(d, f, e, c) {
        var b = new eea();
        b.qtx(d, this.context2D, null, f, null);
        b.parent = this;
        b.pxk = e;
        if (c) {
            b.vii = c.tji
        }
        return b
    };
    this.zms = function(b) {
        var c = new ogu();
        c.qtx(b, this.context2D);
        c.parent = this;
        return c
    };
    this.xke = function(c, b) {
        var d = this.llm.ejh("info");
        if (d) {
            d.ppf(b);
            d.kcf(c, b)
        }
    };
    this.stop = function() {
        clearInterval(this.gdw)
    };
    this.awg = function() {
        var b = this.pyt;
        b.save();
        if (this.uch != null) {
            var d = b.createLinearGradient(this.whu.x, this.whu.y, this.whu.x, this.whu.y + this.whu.height);
            d.addColorStop(0, this.uch);
            b.fillStyle = d;
            b.fillRect(this.whu.x, this.whu.y, this.whu.width, this.whu.height)
        }
        if (this.bnz != null) {
            var d = b.createLinearGradient(this.whu.x, this.whu.y, this.whu.x, this.whu.y + this.zbw);
            d.addColorStop(0, this.bnz);
            d.addColorStop(1, this.uch);
            b.fillStyle = d;
            b.fillRect(this.whu.x, this.whu.y, this.whu.width, this.zbw)
        }
        if (this.uqd != null) {
            b.drawImage(this.uqd, this.whu.x, this.whu.y, this.whu.width, this.whu.height)
        }
        if (this.tdn && this.tdn.width > 0 && this.tdn.height > 0) {
            var d = b.createLinearGradient(this.tdn.x, this.tdn.y, this.tdn.x + this.tdn.width, this.tdn.y),
                c = this.parent.vcv.kos("btn_back");
            d.addColorStop(0.2, this.ujh);
            d.addColorStop(1, this.dhu);
            b.fillStyle = d;
            if (this.parent.cio === vmg.ple.rlu) {
                b.fillRect(this.tdn.x, this.tdn.y, this.tdn.width, this.tdn.height);
                if (c) {
                    b.drawImage(c, this.tdn.x, this.tdn.y, this.tdn.width, this.tdn.height)
                }
            } else {
                if (this.parent.cio === vmg.ple.hso) {
                    b.save();
                    b.translate(this.tdn.width / 2, this.tdn.height / 2);
                    b.rotate(Math.PI);
                    b.translate(-this.tdn.width / 2, -this.tdn.height / 2);
                    b.fillRect(this.tdn.x, this.tdn.y, this.tdn.width, this.tdn.height);
                    if (c) {
                        b.drawImage(c, this.tdn.x, this.tdn.y, this.tdn.width, this.tdn.height)
                    }
                    b.restore()
                }
            }
        }
        b.restore()
    };
    this.vnf = function(k, g, l, e) {
        if (!this.roy() || !this.parent.ufa()) {
            return
        }
        var c = (k != null && g != null && l != null && e != null),
            j = (c === true) ? new njt(k, g, l, e) : new njt(this.x, this.y, this.width, this.height),
            m = this.context2D,
            b = this.llm.pci();
        m.save();
        if (c) {
            m.beginPath();
            m.rect(k, g, l, e);
            m.closePath();
            m.clip()
        }
        if (this.afj != null) {
            m.drawImage(this.afj, 0, 0)
        }
        for (var d = 0, f = b.length; d < f; d++) {
            b[d].vnf()
        }
        if (this.parent.meo === true && this.parent.tzp() === false) {
            this.parent.put(m, j)
        }
        m.restore();
        if (this.stf && this.edu) {
            if (c) {
                this.stf.drawImage(this.edu, k, g, l, e, this.x + k, this.y + g, l, e)
            } else {
                this.stf.drawImage(this.edu, this.x, this.y)
            }
        }
    };
    this.opu = function() {
        if (a.parent.xjt === true) {
            a.parent.avz()
        } else {
            a.parent.kjg();
            if (a.parent.wct() === true) {
                a.parent.vcv.ixm("auto_fill");
                a.llm.wrv("start", "#qfl", [a.rnx]);
                a.vqk = setTimeout(a.rib, a.rnx)
            }
        }
    };
    this.rib = function() {
        a.parent.avz();
        a.llm.wrv("start", "#yzq")
    }
}
ysx.prototype = new rjl;

function wat() {
    this.jyy = null;
    this.jku = [];
    this.vax = [];
    this.zda = [];
    this.vte = "arial";
    this.byb = "bold";
    this.txc = "yellow";
    this.god = 30;
    this.pby = 6;
    this.zpb = function(a) {
        try {
            this.vte = a.font;
            this.byb = a.out;
            this.txc = a.wkr
        } catch (b) {
            console.error(b)
        }
    };
    this.iub = function(a) {
        try {
            this.god = a.fontSize;
            this.pby = a.ubd
        } catch (b) {
            console.error(b)
        }
    };
    this.czw = function(c) {
        for (var b = 0, a = c.length; b < a; b++) {
            this.zda[b] = c[a - 1 - b]
        }
    };
    this.mjm = function(c) {
        for (var b = 0, a = c.length; b < a; b++) {
            this.vax[b] = c[a - 1 - b];
            this.jku[b] = c[a - 1 - b]
        }
    };
    this.bvh = function(c) {
        for (var b = 0, a = this.vax.length; b < a; b++) {
            this.jku[b] = this.vax[b] * c
        }
        this.vnf()
    };
    this.vnf = function() {
        if (!this.roy() || !this.parent.ufa()) {
            return
        }
        var b = this.context2D,
            g = this.height - 2 * this.pby,
            c = this.width,
            d = Math.round(g / this.zda.length),
            f = (this.god < d) ? this.god : d - 2;
        b.save();
        if (this.jyy != null) {
            b.drawImage(this.jyy, 0, 0)
        }
        for (var e = 0, a = this.zda.length; e < a; e++) {
            vmg.arb.mft(b, this.zda[e], this.txc, 0, this.pby + d * (e), c, f, this.vte, f, this.byb, this.pby)
        }
        for (var e = 0, a = this.jku.length; e < a; e++) {
            vmg.arb.fow(b, this.parent.txb(this.jku[e]), this.txc, 0, this.pby + d * (e), c, f, this.vte, f, this.byb, this.pby)
        }
        b.restore();
        if (this.stf && this.edu) {
            this.stf.drawImage(this.edu, this.x, this.y)
        }
    }
}
wat.prototype = new rjl;

function rhi() {
    var a = this;
    this.qjo = 0;
    this.boy = 1;
    this.msr = 7;
    this.klg = 0;
    this.sac = 0;
    this.hxi = 0;
    this.weu = 0;
    this.vyz = this.qjo;
    this.kyv = this.ypd;
    this.tif = function() {
        this.hgk(true);
        this.vnj = true;
        this.ovn = false;
        this.vyz = this.qjo;
        this.sac = Math.floor(this.width / this.msr);
        this.weu = 0;
        this.hxi = 0
    };
    this.bfg = function() {
        this.vnj = true;
        this.ovn = false;
        this.vyz = this.boy;
        this.sac = -Math.floor(this.width / this.msr);
        this.weu = 1;
        this.hxi = this.width
    };
    this.rpi = function() {
        if (a.weu < a.msr) {
            a.hxi += a.sac;
            a.weu++;
            return true
        } else {
            a.vnj = false;
            a.ovn = true;
            if (a.vyz == a.boy) {
                a.hgk(false)
            }
            return false
        }
    };
    this.ixm = function() {
        if (this.and == this.yge) {
            this.parent.vcv.ixm("maxstep")
        } else {
            this.parent.vcv.ixm("step" + (this.and % 12))
        }
    };
    this.faw = function() {
        a.tyr = false
    };
    this.vnf = function() {
        if (!this.roy() || !this.parent.ufa()) {
            return
        }
        this.qfm();
        if (this.stf && this.edu) {
            if (this.vnj) {
                if (this.hxi > 0) {
                    if (this.kyv == this.wmz) {
                        this.stf.drawImage(this.edu, this.width - this.hxi, 0, this.hxi, this.height, this.x, this.y, this.hxi, this.height)
                    } else {
                        if (this.kyv == this.ypd) {
                            this.stf.drawImage(this.edu, 0, 0, this.hxi, this.height, this.x + this.width - this.hxi, this.y, this.hxi, this.height)
                        }
                    }
                }
            } else {
                this.stf.drawImage(this.edu, this.x, this.y)
            }
        }
    };
    this.bdu = function(c) {
        var f = this.txc,
            e = this.txc,
            b = 0,
            d = 0;
        if (this.kyv == this.ypd) {
            b = this.qao;
            d = this.klt.x - 2 * this.qao
        } else {
            if (this.kyv == this.wmz) {
                b = this.klt.x + this.klt.width + this.qao;
                d = this.width - this.qao - (this.klt.x + this.klt.width + this.qao)
            }
        }
        if (this.and > 0 && this.and < this.ame.length - 1) {
            vmg.arb.lux(c, b, this.klt.y + ((this.xtj - this.awp) * this.yfl), d, this.yfl, this.cjm, this.pqc);
            vmg.arb.fow(c, this.parent.txb(this.ame[this.and]), this.fsw, b, this.klt.y + ((this.xtj - this.awp) * this.yfl) + (this.yfl - this.god) / 2, d, this.god, this.vte, this.god, this.byb, this.qao)
        } else {
            if (this.and == 0) {
                f = this.fsw
            } else {
                if (this.and == this.ame.length - 1) {
                    e = this.fsw
                }
            }
        }
        vmg.arb.lux(c, b, this.klt.y + (this.yfl * (this.xtj - 1)), d, this.yfl, this.cjm, this.pqc);
        vmg.arb.fow(c, this.parent.txb(this.ame[0]), f, b, this.klt.y + (this.yfl * (this.xtj - 1)) + (this.yfl - this.god) / 2, d, this.god, this.vte, this.god, this.byb, this.qao);
        vmg.arb.lux(c, b, this.klt.y, d, this.yfl, this.cjm, this.pqc);
        vmg.arb.fow(c, this.parent.txb(this.ame[this.ame.length - 1]), e, b, this.klt.y + (this.yfl - this.god) / 2, d, this.god, this.vte, this.god, this.byb, this.qao);
        vmg.arb.mqr(c, "+", this.txc, this.rje.x, this.rje.y, this.rje.width, this.rje.height, this.vte, this.god, this.byb);
        vmg.arb.mqr(c, "", this.txc, this.kzm.x, this.kzm.y, this.kzm.width, this.kzm.height, this.vte, this.god, this.byb);
        if (this.qxj) {
            vmg.arb.mqr(c, this.qxj, this.txc, this.eeu.x, this.eeu.y, this.eeu.width, this.eeu.height, this.vte, this.god, this.byb)
        }
    }
}
rhi.prototype = new cpa;

function cpx() {
    this.jyy = null;
    this.bvv = [];
    this.ovn = false;
    this.jku = false;
    this.qsg = false;
    this.jma = false;
    this.xlx = true;
    this.adf = -1;
    this.gxv = null;
    this.afj = null;
    this.pyt = null;
    this.vte = "arial";
    this.byb = "bold";
    this.fje = "yellow";
    this.yzz = "yellow";
    this.txc = "yellow";
    this.god = 18;
    this.qbm = 0;
    this.xcu = 0;
    this.afk = 20;
    this.tks = 0;
    this.zpb = function(a) {
        try {
            this.vte = a.font;
            this.byb = a.out;
            this.fje = a.vgm;
            this.yzz = a.lkl;
            this.txc = a.wkr
        } catch (b) {
            console.error(b)
        }
    };
    this.iub = function(a) {
        try {
            this.god = a.fontSize;
            this.qbm = a.ogp;
            this.xcu = a.cku;
            this.afk = a.ljm;
            this.tks = a.ajv;
            this.xlx = a.jhv
        } catch (b) {
            console.error(b)
        }
    };
    this.doc = function(a, b) {
        if (a >= this.x && a <= this.x + this.width && b >= this.y && b <= this.y + this.height && this.roy() === true) {
            if (this.yfs() === true) {
                this.parent.noc(this.qsg);
                this.xjb();
                if (this.qsg) {
                    this.parent.vcv.ixm("hold")
                } else {
                    this.parent.vcv.ixm("unhold")
                }
                return true
            }
        }
        return false
    };
    this.ecg = function() {};
    this.bhd = function() {};
    this.vin = function() {};
    this.ged = function(a) {
        this.ovn = a
    };
    this.yfs = function() {
        return this.ovn
    };
    this.acx = function(a) {
        if (this.afj == null) {
            this.afj = document.createElement("canvas");
            this.afj.width = this.width;
            this.afj.height = this.height;
            this.pyt = this.afj.getContext("2d");
            this.pyt.save();
            this.pyt.drawImage(a, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height);
            this.pyt.restore()
        }
    };
    this.xjb = function() {
        this.qsg = !this.qsg;
        if (this.qsg) {
            this.gxv = this.parent.language.qty;
            this.txc = this.fje
        }
        this.vnf()
    };
    this.uwu = function(d, e) {
        var a = 0,
            c = false;
        if (d == this.parent.jdx) {
            this.adf = d;
            c = true
        } else {
            if ((a = this.parent.pzv.length) > 0) {
                for (var b = 0; b < a && !c; b++) {
                    if (d == this.parent.pzv[b]) {
                        this.adf = this.parent.rko[b];
                        c = true
                    }
                }
            }
        }
        if (!c) {
            this.adf = d
        }
        if (e && e === true) {
            this.vnf()
        }
    };
    this.iep = function(a, b) {
        this.qsg = a;
        if (this.qsg) {
            this.gxv = this.parent.language.qty;
            this.txc = this.fje
        }
        if (b && b === true) {
            this.vnf()
        }
    };
    this.frn = function() {
        return this.qsg
    };
    this.obm = function(a, b) {
        this.jku = a;
        if (this.jku) {
            this.gxv = this.parent.language.win;
            this.txc = this.yzz
        }
        if (b && b === true) {
            this.vnf()
        }
    };
    this.kqs = function() {
        return this.jku
    };
    this.uwa = function(c, b, a, d) {
        this.jma = c;
        this.gxv = b;
        if (a) {
            this.txc = a
        }
        if (d && d === true) {
            this.vnf()
        }
    };
    this.ywb = function() {
        return this.jma
    };
    this.vnf = function() {
        if (!this.roy() || !this.parent.ufa()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.beginPath();
        a.rect(this.x, this.y, this.width, this.height);
        a.closePath();
        a.clip();
        if (this.afj != null) {
            a.drawImage(this.afj, this.x, this.y)
        }
        if (this.jyy != null) {
            if (this.qsg || this.jku) {
                if (this.xlx) {
                    a.drawImage(this.jyy, this.bvv[this.adf] * this.qbm, 0, this.qbm, this.xcu, this.x, this.y + this.afk, this.qbm, this.xcu)
                } else {
                    a.drawImage(this.jyy, this.bvv[this.adf] * this.qbm, 0, this.qbm, this.xcu, this.x, this.y, this.qbm, this.xcu)
                }
            } else {
                a.drawImage(this.jyy, this.bvv[this.adf] * this.qbm, 0, this.qbm, this.xcu, this.x, this.y + this.tks, this.qbm, this.xcu)
            }
        }
        if (this.qsg || this.jku || this.jma) {
            b = this.gxv
        }
        if (b != null) {
            if (this.xlx) {
                vmg.arb.mqr(a, b, this.txc, this.x, this.y, this.width, this.afk, this.vte, this.god, this.byb)
            } else {
                vmg.arb.mqr(a, b, this.txc, this.x, this.y + this.xcu, this.width, this.afk, this.vte, this.god, this.byb)
            }
        }
        a.restore()
    }
}
cpx.prototype = new rjl;
vmg.eoo = {
    cvz: {
        enq: 0,
        rgp: 1,
        kcx: 2,
        yzy: 3,
        bhi: 4,
        xzp: 5,
        ygc: 6,
        nyf: 7,
        dxv: 8,
        hiz: 9,
        exl: 10,
        kpz: 11,
        syy: 12,
        nds: 13,
        oek: 14,
        iwt: 15,
        fat: 68
    }
};

function wda() {
    this.djy = false;
    this.pwt = null;
    this.arh = null;
    this.pmc = null;
    this.lom = null;
    this.bxo = null;
    this.uin = [];
    this.xss = null;
    this.ria = null;
    this.win = 0;
    this.lah = 0;
    this.wnb = 0;
    this.totalBet = 1000;
    this.grs = [];
    this.yjd = 0;
    this.jnc = 0;
    this.qvw = 0;
    this.eba = [];
    this.yhg = [];
    this.bvv = [];
    this.jdx = 63;
    this.zho = -1;
    this.qqe = -1;
    this.nye = [];
    this.fqx = [];
    this.glq = 0;
    this.krj = null;
    this.vys = null;
    this.pwr = null;
    this.vqi = null;
    this.iko = null;
    this.wsw = false;
    this.oue = false;
    this.rcd = false;
    this.udk = false;
    this.meo = false;
    this.npg = true;
    this.xjt = false;
    this.loo = 1;
    this.tuw = 0;
    this.xav = 150;
    this.uee = 150;
    this.qmi = 200;
    this.ilu = 120;
    this.fzh = 0;
    this.pzv = [];
    this.rko = [];
    this.sko = true;
    this.fct = true;
    this.jxq = false;
    this.pqy = 0;
    this.khr = 0;
    this.bgg = 50;
    this.eym = 100;
    this.cps = false;
    this.nri = 0;
    this.ubk = 0;
    this.ofl = false;
    this.ryk = 0;
    this.cri = 0;
    this.voc = 2;
    this.hsn = 1;
    this.aqa = false;
    this.fdj = 0;
    this.iti = 0;
    this.fus = false;
    this.gmr = 0;
    this.oin = 0;
    this.thp = 0;
    this.qle = -1;
    this.bae = 0;
    this.oua = 0;
    this.ehv = 0;
    this.uyi = true;
    this.iwd = false;
    this.pks = false;
    this.ket = false;
    this.ekt = true;
    this.fij = null;
    this.wwe = false;
    this.dqf = true;
    this.oly = "";
    this.wyd = 0;
    this.qqr = 0;
    this.sal = 0;
    this.smy = 0;
    this.sqa = function() {
        var a = new xqu();
        a.qtx();
        return a
    };
    this.czk = function() {
        this.gky = new dhk()
    };
    this.hie = function() {
        while (this.wnb < this.ljk()) {
            this.wnb++
        }
        var b = this.bhx(this.fus);
        if (this.wnb > b) {
            var a = (b < 0) ? 0 : b;
            this.wnb = a
        }
        this.totalBet = this.grs[this.wnb];
        this.yni();
        this.hph();
        this.arr();
        this.tad()
    };
    this.zqa = function() {
        this.our();
        this.blk();
        this.jtc();
        this.qxd();
        if (this.ple.szz) {
            this.gdf()
        }
        if (this.ple.bxw) {
            this.nqr()
        }
        if (this.ple.hpl) {
            this.vqb();
            if (!this.ple.myh) {
                this.rur()
            }
        }
        if (this.vjx) {
            this.imj()
        } else {
            if (this.ple.mrc) {
                this.vjg()
            }
            this.llc();
            if (this.dqz()) {
                this.ucn()
            }
            if (this.klz() != null && !this.tzp()) {
                this.cgr(this.klz())
            }
        }
        if (!(this.vjx && !this.jog)) {
            this.cla();
            this.zks()
        }
        if (this.ple.myh) {
            this.acl(this.klz())
        }
        this.bav()
    };
    this.vnd = function() {
        if (!this.kbh) {
            if (this.qba === false) {
                this.qek.style.marginTop = (-this.height / 2 + this.jew()) + "px";
                this.qek.style.marginLeft = (-this.width / 2) + "px"
            } else {
                this.qek.style.left = "0px";
                this.qek.style.top = "0px";
                this.qek.style.marginTop = ((this.vhx - this.height) / 2 + this.jew()) + "px";
                this.qek.style.marginLeft = ((this.ojo - this.width) / 2) + "px"
            }
            this.qek.style.width = (this.width > this.ojo) ? this.ojo + "px" : this.width + "px";
            this.qek.style.height = (this.height > this.vhx) ? this.vhx + "px" : this.height + "px";
            this.canvas.width = Math.round(this.width);
            this.canvas.height = Math.round(this.height);
            this.context2D = this.canvas.getContext("2d");
            if (this.cgx) {
                this.cgx.style.width = this.width + "px";
                this.cgx.style.height = this.height + "px"
            }
            this.offsetLeft = this.qek.offsetLeft;
            this.offsetTop = this.qek.offsetTop;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.kbh = true
        }
    };
    this.bav = function() {};
    this.vqb = function() {
        wda.prototype.vqb.call(this);
        var a = this.nhr.ejh("topi");
        try {
            if (a) {
                if (vmg.rkn.value57 === vmg.ui.knm || this.klz() != null) {
                    a.kjs("language", this.vcv.kos("icon_l"), sessionStorage.sessionValue1, [vmg.language.EN, vmg.language.DE, vmg.language.RU, vmg.language.EE, vmg.language.ES, vmg.language.TR, vmg.language.CZ, vmg.language.GR, vmg.language.AT, vmg.language.US, vmg.language.BG, vmg.language.CO, vmg.language.MX, vmg.language.CL, vmg.language.VE, vmg.language.BR, vmg.language.GE, vmg.language.HU, vmg.language.RO, vmg.language.PT, vmg.language.FR, vmg.language.HR, vmg.language.IT, vmg.language.SE])
                }
                if (this.tzp() === false) {
                    a.uue("help", new String("?"), true)
                }
                if (vmg.rkn.value27 && this.wsd) {
                    a.kjs("audio", this.vcv.kos("icon_a"), this.emt[this.kdq], this.emt)
                }
                if (sessionStorage.sessionValue14 == "true" && vmg.arb.enp()) {
                    a.uue("fullscreen", this.vcv.kos("icon_f"), this.zzc)
                }
                if (vmg.rkn.value28 && this.uyi) {
                    a.uue("turbo", this.vcv.kos("icon_t"), this.iwd)
                }
                a.uue("auto", this.vcv.kos("icon_as"), this.xjt);
                a.uue("gamble", this.vcv.kos("icon_g"), this.oue)
            }
        } catch (b) {
            console.error(b)
        }
    };
    this.rur = function() {
        wda.prototype.rur.call(this);
        var b = this.nhr.ejh("topb");
        try {
            if (b) {
                if (vmg.rkn.value5.length > 1 && (vmg.rkn.value57 === vmg.ui.knm || this.klz() != null)) {
                    b.gfg("language", this.language.language, this.kxg(vmg.rkn.value5[this.oks]), this.mbc, this.gky.language, 0, 1)
                }
                if (vmg.rkn.value27 && this.wsd) {
                    b.gfg("audio", this.language.audio, this.vcv.kos("btn_a"), this.ozv, this.gky.audio, this.kdq, this.emt.length)
                }
                if (sessionStorage.sessionValue14 == "true" && vmg.arb.enp()) {
                    b.gfg("fullscreen", this.language.zzc, this.vcv.kos("btn_f"), (vmg.arb.lih) ? this.qag : this.ecc, this.gky.zzc, (this.zzc) ? 1 : 0, 2)
                }
                if (vmg.rkn.value28 && this.uyi) {
                    b.gfg("turbo", this.language.iwd, this.vcv.kos("btn_t"), this.mev, this.gky.iwd, (this.iwd) ? 1 : 0, 2)
                }
                b.oaj("help", this.language.sxj, this.vcv.kos("btn_p"), this.ytg, this.gky.seb);
                if (vmg.rkn.value12 && !this.uoe()) {
                    b.oaj("history", this.language.pir, this.vcv.kos("btn_h"), this.iiz, this.gky.pir)
                }
                if (vmg.rkn.value36 && !this.uoe()) {
                    b.oaj("statistic", this.language.rye, this.vcv.kos("btn_st"), this.qgv, this.gky.rye)
                }
                b.hcg()
            }
        } catch (a) {
            console.error(a)
        }
    };
    this.acl = function(a) {
        wda.prototype.acl.call(this, a);
        var b = this.nhr.ejh("settings"),
            c = "";
        if (b) {
            b.gfg("language", this.language.language, this.kxg(vmg.rkn.value5[this.oks]), this.mbc, 0, 1);
            if (vmg.rkn.value27 && this.wsd) {
                b.gfg("audio", this.language.audio, this.vcv.kos("btn_a"), this.ozv, this.kdq, this.emt.length)
            }
            if (sessionStorage.sessionValue14 == "true" && vmg.arb.enp()) {
                b.gfg("fullscreen", this.language.zzc, this.vcv.kos("btn_f"), this.qag, (this.zzc) ? 1 : 0, 2)
            }
            if (vmg.rkn.value28 && this.uyi) {
                b.gfg("turbo", this.language.iwd, this.vcv.kos("btn_t"), this.mev, (this.iwd) ? 1 : 0, 2)
            }
            b.gfg("gamble", this.language.oue, this.vcv.kos("btn_g"), this.jzw, (this.oue) ? 1 : 0, 2);
            if (this.yxf[this.lwk] === vmg.rpp.ypd) {
                c = this.language.left
            } else {
                if (this.yxf[this.lwk] === vmg.rpp.wmz) {
                    c = this.language.dft
                } else {
                    if (this.yxf[this.lwk] === vmg.rpp.tdj) {
                        c = this.language.ehp
                    }
                }
            }
            b.gfg("adjustment", c, this.vcv.kos("btn_l"), this.pcr, (this.cio === vmg.arb.ezc) ? 0 : 1, 2);
            b.iwc("help", this.language.wnz, this.vcv.kos("btn_p"), this.ytg);
            if (vmg.rkn.value12 && !this.uoe()) {
                b.iwc("history", this.language.pir, this.vcv.kos("btn_h"), this.iiz)
            }
            if (vmg.rkn.value36 && !this.uoe()) {
                b.iwc("statistic", this.language.rye, this.vcv.kos("btn_st"), this.qgv)
            }
            b.otn = false;
            b.vqo(this.ple.npu);
            b.iub(this.ple.npu);
            b.zpb(this.style.npu);
            b.ywu(this.language, false)
        }
    };
    this.our = function() {
        this.xss = new ysx();
        this.xss.parent = this;
        this.xss.dqf = this.dqf;
        this.xss.uqd = this.vcv.kos("control_back");
        this.xss.qtx(this.ple.kpd.ztm, null, this.context2D);
        this.xss.vqo(this.ple.kpd, this.style.kpd);
        this.xss.xke(this.krj, 0);
        this.xss.xke(this.pwr, 1);
        this.xss.xke(this.vys, 2)
    };
    this.nqr = function() {
        var a = new rhi();
        a.qtx(this.ple.ioh.ztm, null, this.context2D);
        a.parent = this;
        a.qxj = this.language.afd;
        a.pxk = this.ldh;
        a.dtj = this.gky.ckc.tji;
        a.puz = this.gky.all.tji;
        a.nkm = this.vcv.kos("effect");
        a.iub(this.ple.ioh);
        a.zpb(this.style.haz);
        a.hie(this.grs, this.ljk(), this.bhx(false));
        a.ugd(this.wnb, false);
        a.hgk(false);
        this.nhr.mwl("betsel", a)
    };
    this.zks = function() {
        this.ria.nlz(this.ple.seb, this.style.seb, this.vcv.kos("btn_s"))
    };
    this.vjg = function() {
        var a = new vzp();
        a.qtx(this.ple.top.ztm, null, this.context2D);
        a.parent = this;
        this.nhr.mwl("tops", a)
    };
    this.blk = function() {
        this.pwt = new cpx();
        this.arh = new cpx();
        this.pmc = new cpx();
        this.lom = new cpx();
        this.bxo = new cpx();
        this.pwt.qtx(this.ple.soc, this.context2D);
        this.arh.qtx(this.ple.rhg, this.context2D);
        this.pmc.qtx(this.ple.taa, this.context2D);
        this.lom.qtx(this.ple.mkr, this.context2D);
        this.bxo.qtx(this.ple.qpr, this.context2D);
        this.uin = [this.pwt, this.arh, this.pmc, this.lom, this.bxo];
        for (var b = 0, a = this.uin.length; b < a; b++) {
            this.uin[b].parent = this;
            this.uin[b].jyy = this.vcv.kos("cards");
            this.uin[b].bvv = this.bvv;
            this.uin[b].uwu(this.jdx);
            this.uin[b].zpb(this.style.qbt);
            this.uin[b].iub(this.ple.qbt)
        }
    };
    this.cla = function() {
        this.ria = new jvz();
        this.ria.qtx(this.ple.seb.ztm, null, this.context2D);
        this.ria.parent = this;
        this.ria.hic(false);
        this.ria.iub(this.ple.seb);
        this.ria.zpb(this.style.seb)
    };
    this.jtc = function() {
        var a = new wat();
        a.qtx(this.ple.sxj.ztm, null, this.context2D);
        a.parent = this;
        a.jyy = this.vcv.kos("paytable");
        a.iub(this.ple.sxj);
        a.zpb(this.style.sxj);
        a.mjm(this.eba);
        a.czw(this.yhg);
        this.nhr.mwl("paytable", a)
    };
    this.qxd = function() {};
    this.gdf = function() {
        var a = new hit();
        a.qtx(this.ple.xjd.ztm, this.context2D, null, this.vcv.kos("winpanel"), "");
        a.parent = this;
        a.iub(this.ple.xjd);
        a.zpb(this.style.xjd);
        a.hgk(false);
        this.nhr.mwl("winp", a)
    };
    this.imj = function() {
        var a = new gaf();
        a.qtx(this.ple.pir.ztm, null, this.context2D);
        a.parent = this;
        a.vqo(this.ple.pir);
        a.zpb(this.style.pir);
        this.nhr.mwl("history", a)
    };
    this.awd = function(d, b, c, a, e) {
        this.yby = true;
        this.state = d;
        this.xvl = b;
        this.qpt = e;
        this.xcp = a;
        clearInterval(this.ezj);
        if (this.wsd) {
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                this.kdq = 0
            }
            if (this.vcv.nuw === true) {
                this.syi(this.emt[this.kdq])
            } else {
                this.lyg((this.emt[this.kdq] === 0))
            }
        }
        if (this.uoz === true) {
            this.hpf = true
        }
        this.hie();
        this.zqa();
        this.bda();
        this.lct();
        this.vqi.jhd(c, a);
        window.jyh(this.kgu)
    };
    this.kgu = function() {
        vmg.yov.uxa(vmg.yov.xvl);
        vmg.yov.byg = true;
        vmg.yov.yfx();
        vmg.yov.vnf();
        if (vmg.yov.uoz === true) {
            vmg.yov.ysi(true)
        }
        if (vmg.arb.mwz === vmg.os.rzj && vmg.arb.uic !== vmg.ikd.gbp) {
            vmg.yov.rwq([{
                uri: vmg.ead.typ
            }])
        } else {
            vmg.yov.zsv(vmg.yov.state)
        }
        vmg.yov.ywu();
        if (vmg.rkn.value37 && !vmg.yov.uoe()) {
            vmg.yov.msi()
        }
    };
    this.pyn = function() {
        this.kou = new ztz().qtx(this, vmg.rkn.value6)
    };
    this.hpz = function() {
        this.kou = new jnf().qtx(this, vmg.rkn.value6)
    };
    this.doc = function(c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.hpf) {
            return
        }
        var p = 0,
            o = 0,
            d = false,
            q = false,
            l = false,
            j = this.nhr.ejh("loading"),
            b = this.nhr.ejh("stats"),
            r = this.nhr.ejh("topb"),
            n = this.nhr.ejh("topi"),
            a = this.nhr.ejh("betsel"),
            m = this.nhr.ejh("autop"),
            e = this.nhr.ejh("settings");
        if (c.touches) {
            var g = c.touches[0];
            d = true;
            if (!this.ybl) {
                p = g.pageX - this.offsetLeft;
                o = g.pageY - this.offsetTop
            } else {
                p = Math.round((g.pageX - this.offsetLeft) / this.wnt);
                o = Math.round((g.pageY - this.offsetTop) / this.wov)
            }
        } else {
            if (c.which != 1) {
                return
            }
            if (!this.ybl) {
                p = c.pageX - this.offsetLeft;
                o = c.pageY - this.offsetTop
            } else {
                p = Math.round((c.pageX - this.offsetLeft) / this.wnt);
                o = Math.round((c.pageY - this.offsetTop) / this.wov)
            }
        }
        if (this.yby === true) {
            if (m && m.roy()) {
                if (m.doc(p, o)) {
                    return
                }
            }
            if (r && r.roy()) {
                if (r.doc(p, o)) {
                    clearTimeout(this.ehv);
                    return
                } else {
                    l = true
                }
            }
            if (a) {
                if (a.roy()) {
                    if (a.doc(p, o, d)) {
                        clearTimeout(this.ehv);
                        return
                    } else {
                        q = true
                    }
                }
            }
            if (l) {
                this.ygn(this.xss.rto(p, o, null));
                return
            } else {
                if (q) {
                    if (a && a.yfs()) {
                        this.trd(this.xss.rto(p, o, null))
                    }
                    return
                }
            }
            if (e && e.roy()) {
                if (e.doc(p, o)) {
                    return
                }
            }
            if (n) {
                if (n.doc(p, o, d)) {
                    return
                }
            }
            if (b && b.roy()) {
                if (b.doc(p, o)) {
                    return
                }
            }
            if (this.ria && this.ria.roy()) {
                if (this.ria.doc(p, o)) {
                    return
                }
            }
            if (this.vqi && this.vqi.roy()) {
                if (this.vqi.doc(p, o)) {
                    return
                }
            }
            if (this.xss) {
                if (this.xss.doc(p, o, q)) {
                    return
                }
            }
            if (this.uin) {
                for (var f = 0, k = this.uin.length; f < k; f++) {
                    if (this.uin[f].doc(p, o)) {
                        return
                    }
                }
            }
        } else {
            if (j && j.roy()) {
                if (j.doc(p, o)) {
                    return
                }
            }
        }
    };
    this.ecg = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        if (this.hpf) {
            return
        }
        var e = this.nhr.ejh("topb"),
            b = this.nhr.ejh("betsel"),
            a = this.nhr.ejh("autop"),
            c = this.nhr.ejh("settings");
        if (this.yby === true) {
            if (a && a.roy()) {
                if (a.ecg()) {
                    return
                }
            }
            if (b) {
                if (b.ecg()) {
                    return
                }
            }
            if (this.ria && this.ria.roy()) {
                if (this.ria.ecg()) {
                    return
                }
            }
            if (this.vqi && this.vqi.roy()) {
                if (this.vqi.ecg()) {
                    return
                }
            }
            if (this.xss) {
                if (this.xss.ecg()) {
                    return
                }
            }
            if (e) {
                if (e.ecg()) {
                    return
                }
            }
            if (c) {
                if (c.ecg()) {
                    return
                }
            }
        }
    };
    this.bhd = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        if (this.hpf) {
            return
        }
        var f = false,
            c = false,
            e = this.nhr.ejh("topb"),
            b = this.nhr.ejh("betsel"),
            a = this.nhr.ejh("autop");
        if (a && a.roy()) {
            if (a.bhd(d.keyCode)) {
                return
            }
        }
        if (e) {
            if (e.bhd(d.keyCode)) {
                clearTimeout(this.ehv);
                return
            } else {
                if (e.roy() && e.yfs()) {
                    c = true
                }
            }
        }
        if (b) {
            if (b.roy()) {
                if (b.bhd(d.keyCode)) {
                    clearTimeout(this.ehv);
                    return
                } else {
                    f = true
                }
            }
        }
        if (c) {
            this.ygn(this.xss.rto(null, null, d.keyCode));
            return
        } else {
            if (f) {
                if (b && b.yfs()) {
                    this.trd(this.xss.rto(null, null, d.keyCode))
                }
                return
            }
        }
        if (this.ria && this.ria.roy()) {
            if (this.ria.bhd(d.keyCode)) {
                return
            }
        }
        if (this.vqi && this.vqi.roy()) {
            if (this.vqi.bhd(d.keyCode)) {
                return
            }
        }
        if (this.xss) {
            if (this.xss.bhd(d.keyCode)) {
                return
            }
        }
    };
    this.vin = function(b) {
        if (b.preventDefault) {
            b.preventDefault()
        }
        if (b.stopPropagation) {
            b.stopPropagation()
        }
        if (this.hpf) {
            return
        }
        var a = this.nhr.ejh("autop"),
            c = this.nhr.ejh("topb");
        if (a && a.roy()) {
            if (a.vin()) {
                return
            }
        }
        if (this.ria && this.ria.roy()) {
            if (this.ria.vin()) {
                return
            }
        }
        if (this.vqi && this.vqi.roy()) {
            if (this.vqi.vin()) {
                return
            }
        }
        if (this.xss) {
            if (this.xss.vin()) {
                return
            }
        }
        if (c) {
            if (c.vin()) {
                return
            }
        }
    };
    this.tzp = function() {
        return (vmg.arb.ywh() && !this.vjx)
    };
    this.rlm = function() {
        return (vmg.arb.ywh() && !this.jog)
    };
    this.zae = function(a) {
        this.ple = this.pca(a);
        this.width = this.ple.canvas.ztm.width;
        this.height = this.ple.canvas.ztm.height;
        this.uej()
    };
    this.ykq = function() {
        this.style = new ihs()
    };
    this.pca = function(a) {
        this.cio = a;
        if (a == vmg.ple.tvi) {
            return new ihd()
        } else {
            if (a == vmg.ple.joa) {
                return new elf()
            } else {
                if (a == vmg.ple.nvy) {
                    return new cye()
                } else {
                    if (a == vmg.ple.fgs) {
                        return new qtu()
                    } else {
                        if (a == vmg.ple.slr) {
                            return new wpv()
                        } else {
                            if (a == vmg.ple.nhq) {
                                return new kmt()
                            } else {
                                if (a == vmg.ple.tab) {
                                    return new tky()
                                } else {
                                    if (a == vmg.ple.cpz) {
                                        return new puf()
                                    } else {
                                        if (a == vmg.ple.xhs) {
                                            return new yun()
                                        } else {
                                            if (a == vmg.ple.hso) {
                                                return new jdw()
                                            } else {
                                                if (a == vmg.ple.rlu) {
                                                    return new cjp()
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
    this.uej = function() {};
    this.xzw = function(a) {
        if (this.kbh) {
            this.qvc();
            this.qug(a)
        } else {
            this.jxh()
        }
    };
    this.qvc = function() {
        this.canvas.width = 0;
        if (this.qba === false) {
            this.qek.style.marginTop = (-this.height / 2 + this.jew()) + "px";
            this.qek.style.marginLeft = (-this.width / 2) + "px"
        } else {
            this.qek.style.left = "0px";
            this.qek.style.top = "0px";
            this.qek.style.marginTop = ((this.vhx - this.height) / 2 + this.jew()) + "px";
            this.qek.style.marginLeft = ((this.ojo - this.width) / 2) + "px"
        }
        this.qek.style.width = (this.width > this.ojo) ? this.ojo + "px" : this.width + "px";
        this.qek.style.height = (this.height > this.vhx) ? this.vhx + "px" : this.height + "px";
        this.canvas.width = Math.round(this.width);
        this.canvas.height = Math.round(this.height);
        if (this.cgx) {
            this.cgx.style.width = this.width + "px";
            this.cgx.style.height = this.height + "px"
        }
        this.width = this.canvas.width;
        this.height = this.canvas.height
    };
    this.qug = function(a) {
        this.xex();
        this.ubr();
        this.btj();
        this.riq();
        if (!(this.vjx && !this.jog)) {
            this.cpu()
        }
        if (!this.vjx) {
            if (this.ple.mrc) {
                if (this.nhr.ejh("tops")) {
                    this.gqr()
                } else {
                    this.vjg()
                }
            } else {
                this.nhr.mxs("tops")
            }
            this.nyc();
            this.vla();
            if (this.dqz()) {
                this.fpa()
            }
        } else {
            this.imj()
        }
        if (this.ple.szz) {
            this.hpo()
        }
        if (this.ple.bxw) {
            this.oru()
        }
        if (this.ple.hpl) {
            this.kim();
            if (!this.ple.myh) {
                this.cto()
            }
        }
        if (this.ple.myh) {
            this.kpn()
        }
        this.zon();
        if (a) {
            this.lsp()
        }
    };
    this.xex = function() {
        if (this.xss) {
            this.xss.clq(this.ple.kpd.ztm);
            this.xss.iub(this.ple.kpd)
        }
    };
    this.cto = function() {
        wda.prototype.cto.call(this);
        var b = this.nhr.ejh("topb");
        if (b) {
            if (this.ekt) {
                var a = b.llm.ejh("help");
                if (a) {
                    a.ged(!this.ple.mrc)
                }
            }
        }
    };
    this.oru = function() {
        var a = this.nhr.ejh("betsel");
        if (a) {
            a.clq(this.ple.ioh.ztm);
            a.iub(this.ple.ioh)
        }
    };
    this.ubr = function() {
        if (this.pwt) {
            this.pwt.clq(this.ple.soc)
        }
        if (this.arh) {
            this.arh.clq(this.ple.rhg)
        }
        if (this.pmc) {
            this.pmc.clq(this.ple.taa)
        }
        if (this.lom) {
            this.lom.clq(this.ple.mkr)
        }
        if (this.bxo) {
            this.bxo.clq(this.ple.qpr)
        }
        for (var b = 0, a = this.uin.length; b < a; b++) {
            this.uin[b].iub(this.ple.qbt)
        }
    };
    this.hpo = function() {
        var a = this.nhr.ejh("winp");
        if (a) {
            a.clq(this.ple.xjd.ztm);
            a.iub(this.ple.xjd)
        }
    };
    this.cpu = function() {
        if (this.ria) {
            this.ria.clq(this.ple.seb.ztm);
            this.ria.iub(this.ple.seb)
        }
    };
    this.gqr = function() {
        var a = this.nhr.ejh("tops");
        if (a) {
            a.clq(this.ple.top.ztm);
            a.hgk(this.ple.mrc)
        }
    };
    this.btj = function() {
        var a = this.nhr.ejh("paytable");
        if (a) {
            a.clq(this.ple.sxj.ztm);
            a.iub(this.ple.sxj)
        }
    };
    this.riq = function() {};
    this.zon = function() {};
    this.lsp = function() {
        if (this.nhr.ejh("tops")) {
            this.ria.tau(true);
            this.azq();
            if (this.ria.xqr() == 0) {
                this.jen()
            }
        } else {
            this.dyt = null;
            this.ria.vuj(this.ymz, true)
        }
        this.ria.ywg()
    };
    this.yni = function() {
        this.krj = [];
        if (this.uoe() === false && this.oly != "") {
            this.krj.push(this.oly)
        }
        this.krj.push(this.language.kwo);
        this.krj.push(this.language.haf + " " + this.txb(this.zam()) + ((this.tzp() === true) ? "|" : " ") + this.language.gxt + " " + this.txb(this.ksz()));
        this.krj.push(this.language.vvb)
    };
    this.hph = function() {
        this.vys = [];
        this.vys[0] = this.language.squ;
        this.vys[1] = this.language.sxs
    };
    this.arr = function() {
        this.pwr = [];
        this.pwr[0] = this.language.snv;
        this.pwr[1] = this.language.wbc
    };
    this.tad = function() {
        this.iko = [];
        this.iko[0] = this.language.xqe
    };
    this.ynd = function() {
        wda.prototype.ynd.call(this);
        if (this.xdl() === true) {
            this.vcv.ufl(true)
        }
    };
    this.urb = function() {
        var b = vmg.rkn.value30 + "/poker/sounds/";
        this.vcv.hmh("collect", null, false, b + "collect");
        this.vcv.hmh("collectend", null, false, b + "collect1");
        b = vmg.rkn.value30 + "/basic/sounds/";
        if (!vmg.rkn.value55) {
            if (this.tzp() === false) {
                this.vcv.hmh("btn", null, false, b + "btn");
                this.vcv.hmh("auto_on", null, false, b + "auto_on");
                this.vcv.hmh("gamble_on", null, false, b + "gamble_on");
                this.vcv.hmh("gamble_off", null, false, b + "gamble_off");
                this.vcv.hmh("gambleprop", null, true, b + "gambleprop");
                this.vcv.hmh("auto_off", null, false, b + "auto_off");
                for (var a = 0; a < 12; a++) {
                    this.vcv.hmh("step" + a, null, false, b + "step" + (a + 1))
                }
                this.vcv.hmh("maxstep", null, false, b + "maxstep")
            } else {
                this.vcv.hmh("btn", null, false, b + "btn2");
                this.vcv.hmh("auto_fill", null, false, b + "auto_fill")
            }
        } else {
            this.vcv.hmh("btn", null, false, b + "ama_btn");
            if (this.tzp() === false) {
                this.vcv.hmh("gamble_on", null, false, b + "ama_gamble_on");
                this.vcv.hmh("gamble_off", null, false, b + "ama_gamble_off");
                this.vcv.hmh("gambleprop", null, true, b + "ama_gambleprop");
                for (var a = 0; a < 12; a++) {
                    this.vcv.hmh("step" + a, null, false, b + "ama_step")
                }
                this.vcv.hmh("maxstep", null, false, b + "ama_step")
            }
        }
        this.vcv.hmh("silence", null, false, b + "silence");
        this.vcv.hmh("audioon", null, false, b + "audio_on");
        if (this.tzp() === false) {
            this.vcv.hmh("panel_in", null, false, b + "panel_in");
            this.vcv.hmh("panel_out", null, false, b + "panel_out")
        }
        this.ezp();
        this.uhj()
    };
    this.uhj = function() {
        var b = vmg.rkn.value30 + "/poker/sounds/";
        this.vcv.hmh("hold", null, false, b + "hold");
        this.vcv.hmh("unhold", null, false, b + "unhold");
        for (var a = 0; a < 5; a++) {
            this.vcv.hmh("deal" + a, null, false, b + "deal2")
        }
    };
    this.ezp = function() {
        for (var a = 0; a < this.cri; a++) {
            this.vcv.hmh("win" + a, this.jph, false, this.szh + "win" + (a + 1))
        }
    };
    this.owb = function() {
        var a = this.gla + this.ple.type + "/";
        this.vcv.ynj("icon", a + "icon_out.png");
        this.vcv.ynj("back", a + "main.jpg");
        this.vcv.ynj("cards", a + "cardDeck.png");
        this.vcv.ynj("winpanel", a + "winPanel.png");
        this.vcv.ynj("help", a + "help.jpg");
        a = vmg.rkn.value30 + "/basic/images/" + this.ple.type + "/";
        if (this.ple.cli === true) {
            this.vcv.ynj("btn_back", a + "buttonback.png")
        }
        a = vmg.rkn.value30 + "/poker/images/" + this.ple.type + "/";
        if (this.tzp() === true) {
            this.vcv.zty(a, "gui_mobile_v15.json")
        } else {
            if (vmg.rkn.value57 === vmg.ui.knm || this.klz() != null) {
                this.vcv.zty(a, "gui_desktop_v25.json")
            } else {
                this.vcv.zty(a, "gui_desktop_v15.json")
            }
        }
        this.vwv()
    };
    this.vwv = function() {
        var a = this.gla + this.ple.type + "/";
        this.vcv.ynj("g_back", a + "gamble.jpg")
    };
    this.zsw = function() {
        if (this.rcd && !this.jxq) {
            this.ehi(this.qvw - this.win - this.lah, true)
        } else {
            this.ehi(this.qvw, true)
        }
        this.egq(this.totalBet, true);
        this.fzz();
        this.nhr.wrv("tops", "#vnf");
        this.nhr.wrv("settings", "#utm", [0, 0, this.txb(this.qyo())]);
        this.vnf()
    };
    this.vnf = function(m, l, n, t) {
        if (vmg.yov.ufa()) {
            var a = (m != null && l != null && n != null && t != null),
                c = (a === true) ? new njt(m, l, n, t) : new njt(vmg.yov.ple.yov.ztm.x, vmg.yov.ple.yov.ztm.y, vmg.yov.ple.yov.ztm.width, vmg.yov.ple.yov.ztm.height),
                q = vmg.yov.context2D,
                e = vmg.yov.canvas,
                f = (vmg.yov.jog === true) ? vmg.yov.style.yov.qjv : vmg.yov.style.yov.backgroundColor,
                z = vmg.yov.nhr.ejh("stats"),
                b = vmg.yov.nhr.ejh("history"),
                u = vmg.yov.nhr.ejh("topb"),
                g = vmg.yov.nhr.ejh("topi"),
                j = vmg.yov.nhr.ejh("betsel"),
                v = vmg.yov.nhr.ejh("paytable"),
                p = vmg.yov.nhr.ejh("tops"),
                k = vmg.yov.nhr.ejh("winp"),
                o = vmg.yov.nhr.ejh("autop"),
                d = vmg.yov.nhr.ejh("settings");
            vmg.yov.meo = false;
            q.save();
            if (a) {
                q.beginPath();
                q.rect(m, l, n, t);
                q.closePath();
                q.clip()
            }
            q.clearRect(0, 0, vmg.yov.width, vmg.yov.height);
            q.restore();
            if (vmg.yov.ple.ztr) {
                vmg.arb.lux(q, vmg.yov.ple.yov.ztm.x - vmg.yov.ple.yov.skr, vmg.yov.ple.yov.ztm.y - vmg.yov.ple.yov.skr, vmg.yov.ple.yov.ztm.width + 2 * vmg.yov.ple.yov.skr, vmg.yov.ple.yov.ztm.height + 2 * vmg.yov.ple.yov.skr, f, 1)
            }
            if (b) {
                b.vnf()
            }
            if (g) {
                g.vnf()
            }
            if (p && p.roy()) {
                p.vnf()
            }
            if (z && z.roy()) {
                z.vnf()
            } else {
                if (vmg.yov.ria != null && vmg.yov.ria.roy()) {
                    vmg.yov.ria.vnf()
                } else {
                    if (vmg.yov.vqi != null && vmg.yov.vqi.roy()) {
                        vmg.yov.vqi.vnf()
                    } else {
                        q.drawImage(vmg.yov.vcv.kos("back"), vmg.yov.ple.yov.ztm.x, vmg.yov.ple.yov.ztm.y);
                        if (vmg.yov.xss) {
                            vmg.yov.xss.vnf()
                        }
                        for (var r = 0, s = vmg.yov.uin.length; r < s; r++) {
                            vmg.yov.uin[r].acx(e);
                            vmg.yov.uin[r].vnf()
                        }
                        if (k) {
                            k.vnf()
                        }
                        if (v) {
                            v.vnf()
                        }
                    }
                }
            }
            if (j) {
                j.vnf()
            }
            if (u) {
                u.vnf()
            }
            if (o) {
                o.vnf()
            }
            if (d) {
                d.vnf()
            }
        }
    };
    this.put = function(a, b) {
        this.meo = true;
        vmg.arb.lux(a, b.x, b.y, b.width, b.height, "black", 0.5)
    };
    this.tat = function() {
        this.jwk();
        if (this.state == vmg.eoo.cvz.bhi && this.zho > 0) {
            this.vcv.acn("win" + (this.zho - 1))
        }
        this.xss.llm.wrv("info", "#qjk");
        this.mvp(false);
        this.xss.wfd(false);
        this.jcr(false);
        this.ria.fjz();
        this.ria.wfd(true);
        this.nhr.wrv("settings", "#qaz");
        this.xss.llm.wrv("setting", "#dub", [this.nhr.wrv("settings", "#roy")])
    };
    this.jen = function() {
        this.ria.wfd(false);
        if (this.state != vmg.eoo.cvz.kcx && this.state != vmg.eoo.cvz.kpz) {
            this.xss.wfd(true)
        } else {
            this.xss.fhz(true)
        }
        this.mvp(true);
        this.jcr(true);
        this.ria.qaz();
        this.xss.llm.wrv("info", "#kxb", [0])
    };
    this.gqz = function() {
        var a = vmg.yov.xss.llm.ejh("gamble");
        vmg.yov.jla();
        vmg.yov.svg();
        if (a) {
            a.omn();
            a.dub(vmg.yov.oue)
        }
        vmg.yov.jwk();
        vmg.yov.vcv.acn("win" + (vmg.yov.zho - 1));
        vmg.yov.xss.llm.wrv("info", "#qjk");
        vmg.yov.xss.wfd(false);
        vmg.yov.jcr(false);
        vmg.yov.vqi.wfd(true);
        vmg.yov.vqi.ser(vmg.yov.qvw, vmg.yov.win + vmg.yov.lah, vmg.yov.zho, false);
        vmg.yov.vqi.fjz(!vmg.yov.xjt)
    };
    this.chz = function() {
        vmg.yov.tol();
        vmg.yov.vqi.hvx();
        vmg.yov.jcr(true);
        vmg.yov.vqi.wfd(false);
        vmg.yov.vqi.hgk(false, true);
        vmg.yov.xss.llm.wrv("start", "#rig", [vmg.yov.language.start, true]);
        vmg.yov.jxq = true;
        if (vmg.yov.xjt) {
            vmg.yov.xss.dpo(true);
            vmg.yov.oua = setTimeout(vmg.yov.erp, 800)
        } else {
            vmg.yov.xss.wfd(true);
            if (!(vmg.yov.xjt || vmg.yov.rcd)) {
                vmg.yov.mvp(true)
            }
            vmg.yov.xss.llm.wrv("info", "#kxb", [0])
        }
    };
    this.uld = function() {
        var a = this.nhr.ejh("tops");
        if (a) {
            a.ugd(0);
            this.vnf()
        }
    };
    this.dwc = function() {
        this.pfk();
        this.zsw();
        this.svg();
        this.mvp(false);
        this.rui(false);
        this.nhr.wrv("winp", "#hgk", [false]);
        this.nhr.wrv("paytable", "#hgk", [true]);
        this.zhi()
    };
    this.luu = function() {
        this.emk();
        if (this.voc == this.hsn) {
            this.zsw()
        }
        this.mvp(false);
        this.rui(false);
        this.zhi()
    };
    this.ftz = function() {
        this.ibo();
        if (this.voc >= 2 && this.hsn == 2) {
            this.zsw()
        }
        this.mvp(false);
        this.rui(false);
        this.zhi()
    };
    this.ksl = function() {
        var a = vmg.yov.xav,
            b = 0;
        if (vmg.yov.iti == 0) {
            vmg.yov.tuw = new Date().getTime()
        } else {
            b = new Date().getTime();
            a = vmg.yov.xav + (vmg.yov.fzh * vmg.yov.xav - (b - vmg.yov.tuw))
        }
        if (!vmg.yov.uin[vmg.yov.iti].frn()) {
            vmg.yov.fzh += 1;
            vmg.yov.vcv.ixm("deal" + (vmg.yov.fzh - 1));
            vmg.yov.uin[vmg.yov.iti].uwu(vmg.yov.nye[vmg.yov.iti], true)
        } else {
            a = 0
        }
        vmg.yov.iti++;
        if (a <= 0) {
            a = 0
        }
        if (vmg.yov.iti < vmg.yov.nye.length) {
            if (a == 0) {
                vmg.yov.ksl()
            } else {
                vmg.yov.oin = setTimeout(vmg.yov.ksl, a)
            }
        } else {
            vmg.yov.oin = setTimeout(vmg.yov.ocx, vmg.yov.xav)
        }
    };
    this.ayr = function() {
        var a = 40,
            b = a,
            c = 0;
        if (vmg.yov.iti == 0) {
            vmg.yov.tuw = new Date().getTime()
        } else {
            c = new Date().getTime();
            b = a + (vmg.yov.fzh * a - (c - vmg.yov.tuw))
        }
        if (!vmg.yov.uin[vmg.yov.iti].frn()) {
            vmg.yov.fzh += 1;
            vmg.yov.uin[vmg.yov.iti].uwu(vmg.yov.jdx, true)
        } else {
            b = 0
        }
        vmg.yov.iti++;
        if (b <= 0) {
            b = 0
        }
        if (vmg.yov.iti < vmg.yov.nye.length) {
            if (b == 0) {
                vmg.yov.ayr()
            } else {
                vmg.yov.oin = setTimeout(vmg.yov.ayr, b)
            }
        } else {
            vmg.yov.oin = setTimeout(vmg.yov.sog, 200)
        }
    };
    this.zhi = function() {
        this.djy = true;
        this.fzh = 0;
        this.rbr();
        if (this.fdj == 1) {
            for (var b = 0, a = this.nye.length; b < a; b++) {
                this.uin[b].uwu(this.jdx, false)
            }
            this.xss.llm.wrv("info", "#cie", [this.language.vkv, true]);
            this.vnf();
            this.iti = 0;
            this.oin = setTimeout(this.ksl, 200)
        } else {
            this.xss.llm.wrv("info", "#qjk");
            for (var b = 0, a = this.nye.length; b < a; b++) {
                if (!this.uin[b].frn()) {
                    this.uin[b].uwu(this.jdx, false)
                }
            }
            this.vnf();
            this.oin = setTimeout(this.hwo, 200)
        }
    };
    this.hwo = function() {
        if (vmg.yov.glq > 0) {
            vmg.yov.iti = 0;
            vmg.yov.ksl()
        } else {
            vmg.yov.ocx()
        }
    };
    this.sog = function() {
        vmg.yov.fzh = 0;
        for (var b = 0, a = vmg.yov.vcv.tmd("deal"); b < a; b++) {
            vmg.yov.vcv.acn("deal" + b)
        }
        if (vmg.yov.fdj == 1) {
            vmg.yov.iti = 0;
            vmg.yov.ksl()
        } else {
            if (vmg.yov.glq > 0) {
                vmg.yov.iti = 0;
                vmg.yov.ksl()
            } else {
                vmg.yov.ocx()
            }
        }
    };
    this.ocx = function() {
        vmg.yov.djy = false;
        vmg.yov.npg = true;
        if (vmg.yov.wqk()) {
            if (vmg.yov.fdj == 1) {
                vmg.yov.twx()
            } else {
                if (vmg.yov.fdj == 2) {
                    vmg.yov.bdg()
                }
            }
            vmg.yov.vot(true);
            vmg.yov.rui(true);
            vmg.yov.xss.llm.wrv("info", "#kxb", [2]);
            if (vmg.yov.xjt) {
                vmg.yov.xss.xmf(true);
                vmg.yov.oua = setTimeout(vmg.yov.erp, 800)
            } else {
                vmg.yov.xss.fhz(true);
                if ((vmg.yov.voc == 3 && (vmg.yov.hsn == 3 || (vmg.yov.hsn == 2 && vmg.yov.fdj == 2))) || (vmg.yov.voc == 2 && vmg.yov.hsn == 2)) {
                    vmg.yov.xss.llm.wrv("bet", "#ged", [vmg.yov.aqa]);
                    vmg.yov.xss.llm.wrv("exit", "#ged", [true])
                }
                if (vmg.yov.voc == vmg.yov.hsn) {
                    vmg.yov.tol()
                }
                vmg.yov.mvp(true)
            }
        } else {
            vmg.yov.zyo();
            vmg.yov.aub();
            if (vmg.yov.win > 0) {
                vmg.yov.jxq = false;
                vmg.yov.ugb()
            } else {
                if (!vmg.yov.dgd()) {
                    vmg.yov.tol();
                    vmg.yov.xss.llm.wrv("info", "#cie", [vmg.yov.language.yan, true]);
                    if (vmg.yov.xjt) {
                        vmg.yov.xss.xmf(true);
                        vmg.yov.oua = setTimeout(vmg.yov.erp, 800)
                    } else {
                        vmg.yov.xss.wfd(true);
                        vmg.yov.mvp(true)
                    }
                } else {
                    vmg.yov.yho()
                }
            }
        }
    };
    this.rbr = function() {
        if (vmg.rkn.value79 > 0) {
            this.xav = vmg.rkn.value79 / this.uin.length
        } else {
            if (this.iwd) {
                this.xav = this.ilu
            } else {
                if (this.fdj == 1) {
                    this.xav = this.uee
                } else {
                    this.xav = this.qmi
                }
            }
        }
    };
    this.vot = function(d) {
        var c = false;
        this.fct = true;
        for (var b = 0, a = this.fqx.length; b < a; b++) {
            if (this.fqx[b] > 0) {
                this.uin[b].iep(true, false);
                if (!c && d) {
                    this.vcv.ixm("hold");
                    c = true
                }
            } else {
                this.uin[b].iep(false, false)
            }
        }
        this.vnf()
    };
    this.aub = function() {
        for (var b = 0, a = this.fqx.length; b < a; b++) {
            this.uin[b].iep(false, false);
            if (this.sko) {
                if (this.fqx[b] > 0) {
                    this.uin[b].obm(true, false)
                } else {
                    this.uin[b].obm(false, false)
                }
            }
        }
        this.vnf()
    };
    this.ugb = function() {
        this.xss.wfd(false);
        this.ogb(this.win);
        this.xss.llm.wrv("info", "#cie", [this.language.stb, false]);
        this.udk = false;
        if (!this.vjx) {
            this.vcv.ixm("win" + (this.zho - 1))
        }
        this.vnf();
        this.fbl()
    };
    this.yho = function() {};
    this.dgd = function() {
        return false
    };
    this.ogb = function(a) {
        this.nhr.wrv("winp", "#rig", [this.txb(a), false]);
        this.nhr.wrv("winp", "#hgk", [true]);
        this.nhr.wrv("paytable", "#hgk", [false])
    };
    this.fbl = function() {
        if (this.oue && this.wsw) {
            setTimeout(this.gqz, 1000)
        } else {
            if ((this.rcd || this.xjt)) {
                if (!this.ofl && !this.jxq) {
                    this.xss.llm.wrv("start", "#rig", [this.language.lgz, true]);
                    if (this.rcd) {
                        this.ofl = true;
                        this.xss.wfd(false);
                        setTimeout(this.lgz, 2000)
                    } else {
                        if (this.xjt) {
                            this.oua = setTimeout(this.erp, 800)
                        }
                    }
                }
            } else {
                this.xss.llm.wrv("start", "#rig", [this.language.lgz, true]);
                if (!this.vjx) {
                    this.xss.llm.wrv("gamble", "#tcv");
                    this.xss.llm.wrv("info", "#him", [1])
                } else {
                    if (!this.inAutogamble && !this.dua) {
                        this.xss.llm.wrv("gamble", "#tcv")
                    }
                }
                setTimeout(this.znf, 400)
            }
        }
    };
    this.znf = function() {
        vmg.yov.xss.kxy(true)
    };
    this.pfk = function() {};
    this.emk = function() {};
    this.ibo = function() {};
    this.twx = function() {};
    this.bdg = function() {};
    this.zyo = function() {};
    this.wqk = function() {
        return this.state == vmg.eoo.cvz.kcx || this.state == vmg.eoo.cvz.kpz
    };
    this.noc = function(a) {
        if (this.fct) {
            if (!a) {
                this.svg()
            }
            this.fct = false
        }
    };
    this.svg = function() {
        for (var b = 0, a = this.uin.length; b < a; b++) {
            this.uin[b].iep(false, false);
            this.uin[b].obm(false, false)
        }
        this.vnf()
    };
    this.kyy = function() {
        return !this.rcd
    };
    this.imd = function() {
        var b = this.xss.llm.ejh("gamble"),
            a = this.xss.llm.ejh("info");
        this.xss.wfd(false);
        this.svg();
        this.jla();
        if (b) {
            b.omn();
            b.dub(this.oue)
        }
        if (a) {
            a.qjk();
            a.cie(this.language.gbd + ": " + this.txb(this.win + this.lah));
            a.him(0)
        }
        this.kou.lgz()
    };
    this.lgz = function() {
        if (!vmg.yov.jxq) {
            vmg.yov.svg();
            vmg.yov.vcv.acn("collect");
            vmg.yov.vcv.acn("collectend");
            if (vmg.yov.fij != vmg.yov.lso) {
                vmg.yov.xss.xmf(true)
            }
            vmg.yov.vcv.acn("win" + (vmg.yov.zho - 1));
            vmg.yov.pqy = 10;
            if (vmg.yov.win + vmg.yov.lah < vmg.yov.pqy) {
                vmg.yov.pqy = vmg.yov.win + vmg.yov.lah;
                vmg.yov.gtj()
            } else {
                if (vmg.yov.win + vmg.yov.lah >= vmg.yov.qyo() * 25) {
                    vmg.yov.pqy = 20
                }
                vmg.yov.gtj()
            }
        }
    };
    this.gex = function() {
        this.jxq = true;
        this.ofl = false;
        clearTimeout(this.thp);
        this.vcv.acn("collect");
        this.vcv.ixm("collectend");
        this.ehi(this.qvw, true);
        this.jwk();
        this.mvp(true);
        this.xss.llm.wrv("start", "#rig", [this.language.start, true]);
        if (!this.xjt) {
            this.xss.wfd(true)
        } else {
            this.oua = setTimeout(this.erp, 500)
        }
    };
    this.gtj = function() {
        this.ket = false;
        this.cps = (this.win + this.lah > this.totalBet) ? true : false;
        this.khr = 0;
        this.dyf = this.win + this.lah;
        this.ryk = this.qvw - this.win - this.lah;
        this.nri = 0;
        this.ubk = this.win + this.lah;
        this.tuw = new Date().getTime();
        this.ofl = true;
        this.thp = setTimeout(this.fms, this.eym)
    };
    this.fms = function() {
        var c = 0,
            a = vmg.yov.bgg,
            b = 0;
        if (vmg.yov.ubk > 0) {
            if (!vmg.yov.ket) {
                vmg.yov.vcv.ixm("collect");
                vmg.yov.ket = true
            }
            c = Math.round(vmg.yov.ubk / vmg.yov.pqy);
            vmg.yov.ubk -= c;
            if (vmg.yov.ubk < 0) {
                vmg.yov.ubk = 0
            }
            vmg.yov.gev(vmg.yov.dyf - (vmg.yov.win + vmg.yov.lah - vmg.yov.ubk));
            vmg.yov.ehi(vmg.yov.ryk + (vmg.yov.win + vmg.yov.lah - vmg.yov.ubk), true);
            vmg.yov.khr++;
            vmg.yov.pqy -= 1;
            a = vmg.yov.bgg;
            b = new Date().getTime();
            a = vmg.yov.eym + (vmg.yov.khr * vmg.yov.eym - (b - vmg.yov.tuw));
            vmg.yov.thp = setTimeout(vmg.yov.fms, a)
        } else {
            vmg.yov.vcv.acn("collect");
            vmg.yov.vcv.ixm("collectend");
            vmg.yov.ofl = false;
            vmg.yov.jxq = true;
            clearTimeout(vmg.yov.thp);
            vmg.yov.jwk();
            vmg.yov.xss.llm.wrv("start", "#rig", [vmg.yov.language.start, true]);
            if (vmg.yov.fij == vmg.yov.lso) {
                vmg.yov.fij()
            } else {
                if (!(vmg.yov.xjt)) {
                    vmg.yov.xss.wfd(true);
                    vmg.yov.mvp(true)
                } else {
                    vmg.yov.xss.dpo(true);
                    vmg.yov.xss.llm.wrv("info", "#cie", [vmg.yov.language.gbd + ": " + vmg.yov.txb(vmg.yov.win + vmg.yov.lah)]);
                    vmg.yov.oua = setTimeout(vmg.yov.erp, 500)
                }
            }
        }
    };
    this.wtz = function(a, b, c) {
        if (a <= b) {
            return 1
        }
        var d = 0,
            e = this.yre(a, b, c),
            f = 0;
        while (a > f) {
            e = this.yre(a - f, b, c);
            f += e;
            d++
        }
        return d
    };
    this.yre = function(d, a, b) {
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
    this.zsv = function(d) {
        var e = this.qpt,
            c = this.xcp;
        this.gzc = true;
        this.xss.llm.wrv("info", "#cie", ["", true]);
        this.zsw();
        if (d == vmg.eoo.cvz.enq) {
            this.tol();
            this.xss.llm.wrv("info", "#kxb", [0]);
            this.xss.wfd(true);
            this.mvp(true);
            this.hae()
        } else {
            if (d == vmg.eoo.cvz.kcx) {
                for (var b = 0, a = this.nye.length; b < a; b++) {
                    this.uin[b].uwu(this.nye[b], false)
                }
                this.twx();
                this.vot(false);
                this.rui(true);
                this.xss.llm.wrv("info", "#kxb", [2]);
                this.xss.fhz(true);
                if (this.voc == this.hsn) {
                    this.xss.llm.wrv("exit", "#ged", [true]);
                    this.xss.llm.wrv("bet", "#ged", [this.aqa]);
                    this.tol()
                }
                this.mvp(true)
            } else {
                if (d == vmg.eoo.cvz.bhi) {
                    for (var b = 0, a = this.nye.length; b < a; b++) {
                        this.uin[b].uwu(this.nye[b], false)
                    }
                    this.zyo();
                    this.aub();
                    if (this.win > 0) {
                        if (this.tzp() === false) {
                            this.wsw = true
                        } else {
                            this.wsw = false;
                            this.rcd = true
                        }
                        this.jxq = false;
                        this.ugb()
                    } else {
                        if (this.dgd()) {
                            this.wsw = true;
                            this.yho()
                        } else {
                            this.tol();
                            this.xss.llm.wrv("info", "#kxb", [0]);
                            this.xss.wfd(true);
                            this.mvp(true);
                            this.hae()
                        }
                    }
                } else {
                    if (d == vmg.eoo.cvz.nyf) {
                        this.jxq = true;
                        for (var b = 0, a = this.nye.length; b < a; b++) {
                            this.uin[b].uwu(this.nye[b], false)
                        }
                        this.tol();
                        this.xss.llm.wrv("info", "#kxb", [0]);
                        this.xss.wfd(true);
                        this.mvp(true);
                        this.hae()
                    } else {
                        if (d == vmg.eoo.cvz.dxv) {
                            for (var b = 0, a = this.nye.length; b < a; b++) {
                                this.uin[b].uwu(this.nye[b], false)
                            }
                            this.vnf();
                            if (!this.vqi.roy() && this.win + this.lah > 0) {
                                this.gqz();
                                this.vqi.ser(this.qvw, this.win + this.lah, this.zho, true)
                            }
                            if (this.win + this.lah == 0) {
                                this.tol();
                                this.xss.llm.wrv("info", "#kxb", [0]);
                                this.xss.wfd(true);
                                this.mvp(true);
                                this.hae()
                            }
                        } else {
                            if (d == vmg.eoo.cvz.hiz) {
                                for (var b = 0, a = this.nye.length; b < a; b++) {
                                    this.uin[b].uwu(this.nye[b], false)
                                }
                                if (!this.vqi.roy()) {
                                    this.gqz()
                                }
                                this.ehi(this.qvw, false);
                                this.vqi.ser(this.qvw, this.win + this.lah, this.zho, true);
                                this.vqi.wfd(true)
                            } else {
                                if (d == vmg.eoo.cvz.exl) {
                                    this.jxq = true;
                                    for (var b = 0, a = this.nye.length; b < a; b++) {
                                        this.uin[b].uwu(this.nye[b], false)
                                    }
                                    this.tol();
                                    this.xss.llm.wrv("info", "#kxb", [0]);
                                    this.xss.wfd(true);
                                    this.mvp(true);
                                    this.hae()
                                } else {
                                    if (d == vmg.eoo.cvz.kpz) {
                                        for (var b = 0, a = this.nye.length; b < a; b++) {
                                            this.uin[b].uwu(this.nye[b], false)
                                        }
                                        this.bdg();
                                        this.vot(false);
                                        this.rui(true);
                                        this.xss.llm.wrv("info", "#kxb", [2]);
                                        this.xss.fhz(true);
                                        if ((this.voc == 3 && this.hsn >= 2) && this.xss.aag != null) {
                                            this.xss.llm.wrv("exit", "#ged", [true])
                                        }
                                    } else {
                                        if (d == vmg.eoo.cvz.nds) {
                                            for (var b = 0, a = this.nye.length; b < a; b++) {
                                                this.uin[b].uwu(this.nye[b], false)
                                            }
                                            if (!this.vqi.roy()) {
                                                this.gqz()
                                            }
                                            this.ehi(this.qvw, false);
                                            this.vqi.ser(this.qvw, this.win, this.zho, true);
                                            this.vqi.hic(false);
                                            this.vqi.gbs(c)
                                        } else {
                                            if (d == vmg.eoo.cvz.oek || d == vmg.eoo.cvz.iwt) {
                                                for (var b = 0, a = this.nye.length; b < a; b++) {
                                                    this.uin[b].uwu(this.nye[b], false)
                                                }
                                                if (!this.vqi.roy()) {
                                                    this.gqz()
                                                }
                                                this.ehi(this.qvw, false);
                                                this.vqi.ser(this.qvw, this.win, this.zho, true);
                                                this.vqi.hic(false);
                                                this.vqi.nti(e)
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
    this.rpf = function() {
        this.gzc = false;
        this.rcd = false;
        this.wsw = false;
        this.glq = 5;
        this.dwc();
        this.xss.dpo(true);
        this.iki()
    };
    this.don = function() {
        this.gzc = false;
        this.rcd = false;
        this.wsw = false;
        this.luu();
        this.xss.dpo(true)
    };
    this.vxp = function() {
        this.gzc = false;
        this.rcd = false;
        this.wsw = true;
        this.jxq = false;
        this.ftz();
        this.xss.dpo(true)
    };
    this.vbx = function(a) {
        this.gzc = false;
        this.rcd = true;
        this.wsw = false;
        this.jxq = false;
        if (this.vqi.roy()) {
            this.vqi.ser(this.qvw, this.win + this.lah, this.zho, true);
            this.vqi.hvx();
            this.ehi(this.qvw, false);
            try {
                if (this.vqi instanceof ffs) {
                    this.vqi.gbs(a, true)
                } else {
                    setTimeout(this.vqi.deq, 500)
                }
            } catch (b) {
                setTimeout(this.vqi.deq, 500)
            }
        } else {
            this.ftz();
            this.xss.dpo(true)
        }
    };
    this.pqp = function() {
        this.gzc = false;
        this.wsw = false;
        this.npg = true;
        this.czv();
        if (this.vqi.roy()) {
            this.vqi.hvx();
            this.ehi(this.qvw, false);
            setTimeout(this.vqi.deq, 100)
        } else {
            this.lgz()
        }
    };
    this.ryv = function() {
        this.gzc = false;
        if (!this.vqi.roy() && this.win + this.lah > 0) {
            this.gqz()
        }
        this.vqi.ser(this.qvw, this.win + this.lah, this.zho, true);
        if (this.win + this.lah == 0) {
            this.vqi.llm.wrv("info", "#qjk");
            setTimeout(this.chz, 1000)
        } else {
            this.vqi.swq()
        }
    };
    this.xtl = function() {
        this.gzc = false;
        if (!this.vqi.roy()) {
            this.gqz()
        }
        this.ehi(this.qvw, false);
        this.vqi.ser(this.qvw, this.win + this.lah, this.zho, true);
        this.vqi.wfd(true)
    };
    this.ucz = function(a) {
        this.gzc = false;
        if (!this.vqi.roy() && this.win > 0) {
            this.gqz()
        }
        this.vqi.ser(this.qvw, this.win, this.zho, true);
        this.vqi.hic(false);
        this.vqi.nti(a)
    };
    this.zfa = function(a) {
        this.gzc = false;
        if (!this.vqi.roy() && this.win > 0) {
            this.gqz()
        }
        this.vqi.ser(this.qvw, this.win, this.zho, true);
        this.vqi.hic(false);
        this.vqi.nti(a)
    };
    this.lax = function(a) {
        this.gzc = false;
        this.vqi.ser(this.qvw, this.win, this.zho, true);
        this.vqi.gbs(a, false)
    };
    this.udu = function(b, d) {
        var c = this.nhr.ejh("stats"),
            a = this.nhr.ejh("history");
        if (b == "authfailed") {
            b = this.language.wuu
        } else {
            if (b.toLowerCase().indexOf("active") == 0) {
                b = this.language.hbs
            }
        }
        if (this.dyd) {
            if (!this.vjx) {
                if (c && c.roy()) {
                    c.wfd(false);
                    c.hgk(false)
                }
                this.nhr.wrv("settings", "#qaz");
                if (this.vqi != null && this.vqi.roy()) {
                    this.vqi.llm.wrv("info", "#cie", [b, true]);
                    this.vqi.wfd(false);
                    this.pgb()
                } else {
                    if (this.xss != null) {
                        if (this.ria != null && this.ria.roy()) {
                            this.jen()
                        }
                        this.xss.wfd(false);
                        this.stop();
                        this.xss.llm.wrv("setting", "#dub", [false]);
                        this.xss.llm.wrv("info", "#cie", [b, true])
                    } else {
                        this.ytw(b)
                    }
                }
            } else {
                this.stop();
                this.imj();
                if (a) {
                    a.izw(true)
                }
                this.unm(this.zoy(b))
            }
        } else {
            this.ytw(b)
        }
        if (d) {
            if (!this.vjx && this.kou.gdz.evv == 0 && vmg.rkn.value46 > 0) {
                this.qnd((this.kbh) ? vmg.rkn.value71 : vmg.rkn.value47)
            } else {
                setTimeout(this.lso, vmg.rkn.value10)
            }
        }
    };
    this.pmr = function(a) {
        if (a == vmg.ead.omt) {
            this.xss.llm.wrv("info", "#cie", [this.language.hzh, true])
        } else {
            if (a == vmg.ead.kqr) {
                this.xss.llm.wrv("info", "#cie", [this.language.rmm + " " + this.txb(this.yjd), true])
            } else {
                if (a >= vmg.ead.kff) {
                    this.xss.llm.wrv("info", "#qjk");
                    if (a == vmg.ead.kwu || a == vmg.ead.ipu) {
                        this.stop()
                    }
                    this.xss.wfd(false);
                    this.mvp(false)
                }
            }
        }
        this.oyd();
        if (a < vmg.ead.kff) {
            this.npg = true;
            this.xss.wfd(true);
            this.mvp(true)
        } else {
            this.rwq([{
                uri: a
            }])
        }
    };
    this.txr = function(a) {
        this.qvw = a;
        if (!(this.vqi.roy() || this.ria.roy())) {
            this.ehi(a, true)
        } else {
            if (this.vqi.roy()) {
                this.vqi.llm.wrv("creditd", "#rig", [this.jhl(a), true]);
                this.ehi(a, false)
            }
        }
        if (this.qvw > 0) {
            this.czv()
        } else {
            this.tol()
        }
    };
    this.kjg = function() {
        clearTimeout(vmg.yov.oua);
        if (vmg.yov.npg) {
            if (vmg.yov.win + vmg.yov.lah > 0 && !vmg.yov.jxq) {
                if (!vmg.yov.ofl) {
                    if (vmg.yov.kyy()) {
                        vmg.yov.npg = false;
                        vmg.yov.imd()
                    }
                } else {
                    vmg.yov.gex()
                }
            } else {
                if (!vmg.yov.djy) {
                    if (vmg.yov.fcg) {
                        vmg.yov.oyd();
                        vmg.yov.usu();
                        return
                    } else {
                        if (vmg.yov.ajq) {
                            vmg.yov.oyd();
                            vmg.yov.qgv();
                            return
                        }
                    }
                    vmg.yov.npg = false;
                    if (vmg.yov.tzp() === true) {
                        vmg.yov.loo = (!vmg.yov.oue) ? 1 : 0
                    } else {
                        if (vmg.rkn.value62 === true) {
                            vmg.yov.loo = 0;
                            if (vmg.yov.xjt) {
                                vmg.yov.loo |= 2
                            }
                            if (vmg.yov.oue) {
                                vmg.yov.loo |= 4
                            }
                        } else {
                            vmg.yov.loo = (vmg.yov.xjt && !vmg.yov.oue) ? 1 : 0
                        }
                    }
                    vmg.yov.lps();
                    if ((vmg.yov.state == vmg.eoo.cvz.enq || vmg.yov.state == vmg.eoo.cvz.bhi || vmg.yov.state == vmg.eoo.cvz.nyf || vmg.yov.state == vmg.eoo.cvz.dxv || vmg.yov.state == vmg.eoo.cvz.exl || vmg.yov.state == vmg.eoo.cvz.nds) || vmg.yov.eww()) {
                        if (vmg.yov.qvw >= vmg.yov.qyo() && vmg.yov.qyo() >= vmg.yov.yjd) {
                            vmg.yov.kou.qgf(vmg.yov.wnb, vmg.yov.loo);
                            vmg.yov.xss.wfd(false)
                        } else {
                            vmg.yov.rnv();
                            vmg.yov.oyd();
                            vmg.yov.xss.wfd(true);
                            vmg.yov.mvp(true);
                            vmg.yov.npg = true
                        }
                    } else {
                        if (vmg.yov.state == vmg.eoo.cvz.kcx) {
                            if (vmg.yov.voc == 2 && vmg.yov.hsn == 2 && vmg.yov.aqa && (vmg.yov.glq == 5 || vmg.yov.totalBet != vmg.yov.ver)) {
                                vmg.yov.kou.qgf(vmg.yov.wnb, vmg.yov.loo);
                                vmg.yov.xss.wfd(false);
                                vmg.yov.rui(false);
                                return
                            }
                            vmg.yov.oxu();
                            if (vmg.yov.voc == 2 || (vmg.yov.voc == 3 && vmg.yov.glq == 0 && vmg.yov.zho > 0)) {
                                vmg.yov.kou.ipq(vmg.yov.wnb, vmg.yov.loo, vmg.yov.fqx);
                                vmg.yov.xss.wfd(false)
                            } else {
                                if (vmg.yov.voc == 3) {
                                    vmg.yov.kou.hwc(vmg.yov.wnb, vmg.yov.loo, vmg.yov.fqx);
                                    vmg.yov.xss.wfd(false)
                                }
                            }
                        } else {
                            if (vmg.yov.state == vmg.eoo.cvz.kpz) {
                                vmg.yov.oxu();
                                vmg.yov.kou.ipq(vmg.yov.wnb, vmg.yov.loo, vmg.yov.fqx);
                                vmg.yov.xss.wfd(false)
                            }
                        }
                    }
                    vmg.yov.rui(false)
                }
            }
        }
    };
    this.avz = function() {
        var a = vmg.yov.nhr.ejh("topi"),
            c = 0,
            b = 0,
            d = 0;
        if (!vmg.rkn.value55) {
            vmg.yov.vcv.acn("auto_on");
            vmg.yov.vcv.acn("auto_off")
        }
        if (vmg.yov.xjt) {
            vmg.yov.xjt = false;
            vmg.yov.opl();
            vmg.yov.xss.llm.wrv("astart", "#dub", [vmg.yov.xjt]);
            vmg.yov.xss.llm.wrv("start", "#rig", [vmg.yov.language.start, true]);
            if (!vmg.rkn.value55) {
                vmg.yov.vcv.ixm("auto_off")
            }
        } else {
            if (vmg.yov.klz() != null && vmg.yov.wyd <= 0 && vmg.yov.tzp() === false) {
                if (a && a.yfs() === true) {
                    vmg.yov.mvp(false);
                    vmg.yov.xss.wfd(false);
                    vmg.yov.id = setTimeout(vmg.yov.lbk, 300)
                }
            } else {
                vmg.yov.xjt = true;
                if (vmg.yov.klz() != null && vmg.yov.tzp() === true) {
                    vmg.yov.wyd = vmg.yov.nhr.wrv("settings", "#bcj");
                    c = vmg.yov.nhr.wrv("settings", "#xhb");
                    b = vmg.yov.nhr.wrv("settings", "#npm");
                    d = vmg.yov.nhr.wrv("settings", "#ikt");
                    vmg.yov.qqr = (c > 0) ? c : 0;
                    vmg.yov.sal = (b > 0) ? b : 0;
                    vmg.yov.smy = (d > 0) ? d : 0;
                    vmg.yov.iki()
                }
                vmg.yov.xss.llm.wrv("astart", "#dub", [vmg.yov.xjt]);
                vmg.yov.xss.llm.wrv("start", "#rig", [vmg.yov.language.start, true]);
                if (!vmg.rkn.value55) {
                    vmg.yov.vcv.ixm("auto_on")
                }
                vmg.yov.kjg()
            }
        }
        if (a) {
            a.cja("auto", vmg.yov.xjt)
        }
    };
    this.lso = function() {
        if (vmg.evv == 0 && vmg.yov.vjx === false && vmg.yov.win + vmg.yov.lah > 0 && !vmg.yov.jxq && vmg.yov.kyy()) {
            if (!vmg.yov.ofl) {
                vmg.yov.imd()
            }
            vmg.yov.fij = vmg.yov.lso
        } else {
            wda.prototype.lso.call(this)
        }
    };
    this.tjg = function() {
        if (vmg.yov.wnb < vmg.yov.grs.length - 1) {
            if (vmg.yov.wnb >= vmg.yov.bhx(true)) {
                vmg.yov.wnb = 0;
                while (vmg.yov.wnb < vmg.yov.ljk()) {
                    vmg.yov.wnb++
                }
            } else {
                vmg.yov.wnb++
            }
        } else {
            vmg.yov.wnb = 0;
            while (vmg.yov.wnb < vmg.yov.ljk()) {
                vmg.yov.wnb++
            }
        }
        vmg.yov.nwp(false);
        if (vmg.yov.wnb >= vmg.yov.bhx(true)) {
            return true
        }
        return false
    };
    this.bdr = function() {
        if (vmg.yov.wnb > 0) {
            if (vmg.yov.wnb <= vmg.yov.ljk()) {
                vmg.yov.wnb = vmg.yov.grs.length;
                while (vmg.yov.wnb > vmg.yov.bhx(true)) {
                    vmg.yov.wnb--
                }
            } else {
                vmg.yov.wnb--
            }
        } else {
            vmg.yov.wnb = vmg.yov.grs.length;
            while (vmg.yov.wnb > vmg.yov.bhx(true)) {
                vmg.yov.wnb--
            }
        }
        if (vmg.yov.wnb < 0) {
            vmg.yov.wnb = 0
        }
        vmg.yov.nwp(false);
        if (vmg.yov.wnb <= vmg.yov.ljk()) {
            return true
        }
        return false
    };
    this.jzw = function() {
        var a = vmg.yov.nhr.ejh("topi"),
            b = vmg.yov.nhr.ejh("settings");
        if (vmg.yov.tzp() === false && vmg.yov.wsw && vmg.yov.win + vmg.yov.lah > 0) {
            if (!vmg.yov.djy) {
                vmg.yov.gzc = false;
                vmg.yov.gqz()
            }
        } else {
            vmg.yov.vcv.acn("gamble_on");
            vmg.yov.vcv.acn("gamble_off");
            vmg.yov.oue = !vmg.yov.oue;
            if (vmg.yov.oue) {
                vmg.yov.vcv.ixm("gamble_on")
            } else {
                vmg.yov.vcv.ixm("gamble_off")
            }
            vmg.yov.xss.llm.wrv("gamble", "#dub", [vmg.yov.oue]);
            if (a) {
                a.cja("gamble", vmg.yov.oue)
            }
            if (b) {
                b.llm.wrv("gamble", "#yli", [(vmg.yov.oue) ? 1 : 0])
            }
        }
    };
    this.ytg = function() {
        if (!vmg.yov.ria.roy()) {
            vmg.yov.ygn();
            if (vmg.yov.nhr.ejh("tops")) {
                vmg.yov.uld()
            }
            if (vmg.yov.ria.xqr() > 0) {
                vmg.yov.tat()
            }
        } else {
            vmg.yov.jen()
        }
    };
    this.mev = function() {
        var a = vmg.yov.nhr.ejh("topi"),
            b = vmg.yov.nhr.ejh("settings"),
            c = vmg.yov.nhr.ejh("topb");
        vmg.yov.iwd = !vmg.yov.iwd;
        if (a) {
            a.cja("turbo", vmg.yov.iwd)
        }
        if (c) {
            c.llm.wrv("turbo", "#yli", [(vmg.yov.iwd) ? 1 : 0])
        }
        if (b) {
            b.llm.wrv("turbo", "#yli", [(vmg.yov.iwd) ? 1 : 0])
        }
    };
    this.ecc = function() {
        var a = false;
        if (vmg.arb.lih == true) {
            if (vmg.yov.lfd == true) {
                vmg.yov.lfd = false;
                a = vmg.arb.ppe();
                setTimeout(vmg.yov.yfx, 1400)
            }
        } else {
            a = vmg.arb.ppe();
            setTimeout(vmg.yov.yfx, 1400)
        }
    };
    this.qvm = function() {
        if (vmg.yov.vcv.qub() && !vmg.yov.sqp) {
            vmg.yov.ixg = false;
            vmg.yov.sqp = true;
            vmg.yov.nhr.wrv("loading", "#stop");
            setTimeout(vmg.yov.ira, 100);
            vmg.yov.vcv.ixm("silence");
            if (vmg.arb.enp() && vmg.arb.lih) {
                vmg.yov.ecc()
            }
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                webAudioEngine.resume()
            }
        }
    };
    this.pps = function(a) {
        if (a == vmg.language.EN || a == vmg.language.US) {
            return new cfy()
        } else {
            if (a == vmg.language.ES || a == vmg.language.CO || a == vmg.language.MX || a == vmg.language.CL || a == vmg.language.VE) {
                return new adp()
            } else {
                if (a == vmg.language.DE || a == vmg.language.AT) {
                    return new pxv()
                } else {
                    if (a == vmg.language.PT || a == vmg.language.BR) {
                        return new lnn()
                    } else {
                        if (a == vmg.language.RU) {
                            return new nxt()
                        } else {
                            if (a == vmg.language.EE) {
                                return new niu()
                            } else {
                                if (a == vmg.language.TR) {
                                    return new imp()
                                } else {
                                    if (a == vmg.language.CZ) {
                                        return new vmf()
                                    } else {
                                        if (a == vmg.language.GR) {
                                            return new wyf()
                                        } else {
                                            if (a == vmg.language.BG) {
                                                return new gvz()
                                            } else {
                                                if (a == vmg.language.GE) {
                                                    return new jgw()
                                                } else {
                                                    if (a == vmg.language.HU) {
                                                        return new ydm()
                                                    } else {
                                                        if (a == vmg.language.RO) {
                                                            return new fby()
                                                        } else {
                                                            if (a == vmg.language.FR) {
                                                                return new jzf()
                                                            } else {
                                                                if (a == vmg.language.HR) {
                                                                    return new rrt()
                                                                } else {
                                                                    if (a == vmg.language.IT) {
                                                                        return new zdd()
                                                                    } else {
                                                                        if (a == vmg.language.SE) {
                                                                            return new ujx()
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
    this.ywu = function() {
        var f = this.nhr.ejh("stats"),
            e = this.nhr.ejh("topb"),
            c = this.nhr.ejh("topi"),
            b = this.nhr.ejh("betsel");
        this.yni();
        this.xss.xke(this.krj, 0);
        this.pwr[0] = this.language.snv;
        this.pwr[1] = this.language.wbc;
        this.xss.xke(this.pwr, 1);
        this.vys[0] = this.language.squ;
        this.vys[1] = this.language.sxs;
        this.xss.xke(this.vys, 2);
        if (this.xjt) {
            this.xss.llm.wrv("start", "#rig", [this.language.start])
        } else {
            if (this.win + this.lah > 0 && !this.rcd && !this.jxq) {
                this.xss.llm.wrv("start", "#rig", [this.language.lgz])
            } else {
                this.xss.llm.wrv("start", "#rig", [this.language.start])
            }
        }
        if (this.klz() != null) {
            this.xss.llm.wrv("astart", "#rig", [this.language.keq])
        } else {
            this.xss.llm.wrv("astart", "#rig", [this.language.xjt])
        }
        this.xss.llm.wrv("gamble", "#rig", [this.language.oue]);
        this.xss.llm.wrv("exit", "#rig", [(vmg.rkn.value50.g === true) ? this.language.lzy : this.language.gby]);
        this.xss.llm.wrv("bet", "#rig", [this.language.afd]);
        this.xss.llm.wrv("creditd", "#tby", [(this.uoe()) ? this.language.lwc : this.language.qvw]);
        this.xss.llm.wrv("betd", "#tby", [this.language.afd]);
        if (e) {
            e.llm.wrv("language", "#uwa", [this.language.language]);
            e.llm.wrv("audio", "#uwa", [this.language.audio]);
            e.llm.wrv("turbo", "#uwa", [this.language.iwd]);
            e.llm.wrv("fullscreen", "#uwa", [this.language.zzc]);
            e.llm.wrv("help", "#uwa", [this.language.seb]);
            e.llm.wrv("history", "#uwa", [this.language.pir]);
            e.llm.wrv("statistic", "#uwa", [this.language.rye]);
            e.llm.wrv("deposit", "#uwa", [this.language.doo])
        }
        if (c) {
            c.uwa("freeplay", this.language.lwc)
        }
        if (b) {
            b.qxj = this.language.afd
        }
        if (f) {
            if (vmg.rkn.value36) {
                f.qxj = this.zoy(this.language.rye)
            } else {
                if (vmg.rkn.value37) {
                    f.qxj = this.zoy(this.language.wgs)
                }
            }
            if (f.wqj != null) {
                f.wqj.rig(this.language.ret, false)
            }
            if (f.aag != null) {
                f.aag.rig(this.language.fkv, false)
            }
        }
        this.ria.llm.wrv("return", "#rig", [this.language.ret, false]);
        for (var d = 0, a = this.uin.length; d < a; d++) {
            if (this.uin[d].kqs()) {
                this.uin[d].obm(true, false)
            } else {
                if (this.uin[d].frn()) {
                    this.uin[d].iep(true, false)
                }
            }
        }
        this.nhr.wrv("settings", "#ywu", [this.language, false]);
        this.nhr.wrv("autop", "#ywu", [this.language]);
        this.mrv()
    };
    this.mrv = function() {
        this.iko[0] = this.language.xqe;
        this.vqi.xke(this.iko)
    };
    this.qyo = function() {
        return this.totalBet
    };
    this.zam = function() {
        return this.yjd
    };
    this.ksz = function() {
        return this.jnc
    };
    this.bhx = function(b) {
        for (var c = 0; c < this.grs.length; c++) {
            var a = this.grs[c];
            if (a > this.jnc || (b && (this.qvw > 0 && this.qvw < a))) {
                return c - 1
            } else {
                if (a == this.jnc || c == this.grs.length - 1) {
                    return c
                }
            }
        }
        return -1
    };
    this.ljk = function() {
        for (var b = 0; b < this.grs.length; b++) {
            var a = this.grs[b];
            if (a >= this.yjd && a < this.jnc) {
                return b
            }
        }
        return -1
    };
    this.rnv = function() {
        var c = this.bhx(true),
            a = this.ljk(),
            b = this.grs.length - 1;
        b = (b > c) ? c : b;
        if (b > 0) {
            while (this.grs[b] > this.qvw) {
                b--;
                if (b <= a) {
                    break
                }
            }
        }
        this.wnb = (b < a) ? a : b;
        this.nwp(false);
        if (this.qyo() > this.qvw) {
            this.xss.llm.wrv("info", "#cie", [this.language.hzh, true])
        } else {
            if (this.qyo() < this.yjd) {
                this.xss.llm.wrv("info", "#cie", [this.language.rmm + " " + this.yjd, true])
            }
        }
    };
    this.nwp = function(b) {
        var a = this.xss.llm.ejh("info");
        this.totalBet = this.grs[this.wnb];
        this.zsw();
        if (a && a.qhf() === false) {
            a.cie(this.krj[2], true)
        }
        if (this.tzp() == true) {
            this.vcv.ixm("btn")
        } else {
            if (this.wnb == this.bhx(true)) {
                this.vcv.ixm("maxstep")
            } else {
                this.vcv.ixm("step" + (this.wnb % 12))
            }
        }
        this.nhr.wrv("betsel", "#ugd", [this.wnb, true])
    };
    this.vsb = function() {
        this.totalBet = this.grs[this.wnb];
        this.zsw()
    };
    this.ldh = function(a) {
        vmg.yov.wnb = a;
        vmg.yov.vsb()
    };
    this.fzz = function() {
        this.nhr.wrv("paytable", "#bvh", [this.totalBet])
    };
    this.stop = function() {
        wda.prototype.stop.call(this);
        this.gyr();
        if (this.xss != null) {
            this.xss.llm.wrv("gamble", "#omn");
            this.xss.llm.wrv("info", "#qjk");
            this.xss.stop()
        }
        clearTimeout(this.qle);
        clearTimeout(this.thp);
        clearTimeout(this.gmr);
        clearTimeout(this.oin);
        clearTimeout(this.bae);
        this.ifc();
        if (this.vqi != null && this.vqi.roy()) {
            this.vqi.hvx();
            try {
                if (this.vqi instanceof ffs) {
                    this.vqi.llm.wrv("gamble", "#omn")
                } else {
                    this.vqi.llm.wrv("info", "#qjk")
                }
            } catch (a) {
                this.vqi.llm.wrv("info", "#qjk")
            }
        }
        this.xyy();
        if (!this.vjx) {
            this.vnf()
        }
    };
    this.ifc = function() {};
    this.jwk = function() {
        var a = this.nhr.ejh("winp");
        if (a && a.roy()) {
            a.hgk(false, true)
        }
    };
    this.gev = function(a) {
        this.nhr.wrv("winp", "#rig", [this.txb(a), true])
    };
    this.rui = function(c) {
        if (!(c && this.xjt)) {
            for (var b = 0, a = this.uin.length; b < a; b++) {
                this.uin[b].ged(c)
            }
        }
    };
    this.jcr = function(a) {
        this.xss.llm.qgo("buttons", "#hgk", [a]);
        this.vnf()
    };
    this.lps = function() {
        this.glq = 5;
        for (var b = 0, a = this.uin.length; b < a; b++) {
            if (this.uin[b].frn()) {
                this.glq--
            }
        }
    };
    this.oxu = function() {
        for (var b = 0, a = this.uin.length; b < a; b++) {
            if (this.uin[b].frn()) {
                this.fqx[b] = this.nye[b]
            } else {
                this.fqx[b] = 0
            }
        }
    };
    this.nda = function(b) {
        for (var c = 0, a = this.pzv.length; c < a; c++) {
            if (b == this.pzv[c]) {
                return true
            }
        }
        return false
    };
    this.asz = function(b) {
        for (var c = 0, a = this.pzv.length; c < a; c++) {
            if (b == this.pzv[c]) {
                if (this.rko[c]) {
                    return this.rko[c]
                }
            }
        }
        return -1
    };
    this.eww = function() {
        return false
    };
    this.jph = function() {
        if (!vmg.yov.jxq && !vmg.yov.ofl && !(vmg.yov.rcd || vmg.yov.xjt) && !(vmg.yov.oue && vmg.yov.wsw)) {
            if (vmg.yov.win + vmg.yov.lah > 0 && !vmg.yov.udk) {
                vmg.yov.vcv.acn("gambleprop");
                vmg.yov.vcv.ixm("gambleprop")
            }
        }
    };
    this.jla = function() {
        if (!this.vjx) {
            this.vcv.acn("gambleprop");
            this.udk = true
        }
    };
    this.mvp = function(e) {
        wda.prototype.mvp.call(this, e);
        var d = this.nhr.ejh("topb"),
            c = (this.nhr.ejh("tops") != null),
            a = (e && !this.xjt);
        if (this.xss) {
            this.xss.llm.wrv("setting", "#ged", [a])
        }
        if (c) {
            var a = (e && !this.xjt);
            if (this.ekt && d) {
                var b = d.llm.ejh("help");
                if (b) {
                    b.ged(a && !c)
                }
            }
        }
    };
    this.rjc = function(e) {
        wda.prototype.rjc.call(this, e);
        var d = this.nhr.ejh("topb"),
            c = (this.nhr.ejh("tops") != null),
            a = (e && !this.xjt);
        if (this.xss) {
            this.xss.llm.wrv("setting", "#ged", [a])
        }
        if (c) {
            var a = (e && !this.xjt);
            if (this.ekt && d) {
                var b = d.llm.ejh("help");
                if (b) {
                    b.ged(a && !c)
                }
            }
        }
    };
    this.dyv = function(e) {
        wda.prototype.dyv.call(this, e);
        var d = this.nhr.ejh("topb"),
            c = (this.nhr.ejh("tops") != null),
            a = (e && !this.xjt);
        if (this.xss) {
            this.xss.llm.wrv("setting", "#ged", [a])
        }
        if (c) {
            var a = (e && !this.xjt);
            if (this.ekt && d) {
                var b = d.llm.ejh("help");
                if (b) {
                    b.ged(a && !c)
                }
            }
        }
    };
    this.ebk = function() {
        wda.prototype.ebk.call(this);
        if (vmg.yov.uoz === true && vmg.yov.byg === true) {
            vmg.yov.oyd()
        }
    };
    this.wct = function() {
        if (vmg.rkn.value74 != null && this.nhr.wrv("settings", "#bcj") <= 0) {
            return false
        } else {
            if ((this.state == vmg.eoo.cvz.enq || this.state == vmg.eoo.cvz.bhi || this.state == vmg.eoo.cvz.nyf || this.state == vmg.eoo.cvz.dxv || this.state == vmg.eoo.cvz.exl || this.state == vmg.eoo.cvz.nds) || this.eww()) {
                if (!(this.qvw >= this.qyo() && this.qyo() >= this.yjd)) {
                    return false
                }
            }
        }
        return true
    };
    this.qmd = function() {
        var b = this.nhr.ejh("stats"),
            a = this.nhr.ejh("settings");
        if (this.ria && this.ria.roy()) {
            return false
        } else {
            if (this.vqi && this.vqi.roy()) {
                return false
            } else {
                if (b && b.roy()) {
                    return false
                } else {
                    if (a && a.roy()) {
                        return false
                    }
                }
            }
        }
        return true
    };
    this.hae = function() {
        if (vmg.rkn.value78 && this.tzp() === false) {
            if (vmg.rkn.value78.t === true) {
                this.nhr.wrv("topb", "#hgk", [true])
            }
            if (vmg.rkn.value78.b === true) {
                this.nhr.wrv("betsel", "#hgk", [true])
            }
            if (vmg.rkn.value78.t === true || vmg.rkn.value78.b === true) {
                this.jzg()
            }
            this.vnf();
            if (vmg.rkn.value78.d > 0) {
                this.ehv = setTimeout(this.nli, vmg.rkn.value78.d)
            }
        }
    };
    this.nli = function() {
        vmg.yov.trd();
        clearTimeout(vmg.yov.ehv)
    };
    this.ygn = function(b) {
        var a = this.nhr.ejh("betsel");
        if (a && a.roy() && a.yfs()) {
            this.trd(b)
        } else {
            wda.prototype.ygn.call(this, b)
        }
    };
    this.jzg = function() {
        if (this.canvas) {
            this.canvas.onmousemove = function(a) {
                vmg.yov.vvf(a)
            };
            this.canvas.ontouchmove = function(a) {
                vmg.yov.vvf(a)
            }
        }
    };
    this.gyr = function() {
        if (this.canvas) {
            this.canvas.onmousemove = null;
            this.canvas.ontouchmove = null
        }
    };
    this.vvf = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        var b = 0,
            g = 0,
            c = false,
            e = this.nhr.ejh("topb"),
            a = this.nhr.ejh("betsel");
        if (d.touches) {
            var f = d.touches[0];
            c = true;
            if (!this.ybl) {
                b = f.pageX - this.offsetLeft;
                g = f.pageY - this.offsetTop
            } else {
                b = Math.round((f.pageX - this.offsetLeft) / this.wnt);
                g = Math.round((f.pageY - this.offsetTop) / this.wov)
            }
        } else {
            if (!this.ybl) {
                b = d.pageX - this.offsetLeft;
                g = d.pageY - this.offsetTop
            } else {
                b = Math.round((d.pageX - this.offsetLeft) / this.wnt);
                g = Math.round((d.pageY - this.offsetTop) / this.wov)
            }
        }
        if (a && a.roy()) {
            if (a.jws(b, g, c)) {
                return
            }
        }
        if (e && e.roy()) {
            e.jws(b, g)
        }
    };
    this.mun = function() {
        if (this.qle >= 0) {
            return
        }
        this.nhr.wrv("betsel", "#tif");
        this.vcv.acn("panel_in");
        this.vcv.ixm("panel_in");
        this.mvp(false);
        this.tuw = new Date().getTime();
        this.khr = 0;
        this.qle = setTimeout(this.wkz, 89)
    };
    this.trd = function(b) {
        var c = this.nhr.ejh("topb"),
            a = this.nhr.ejh("betsel");
        if (this.qle >= 0 || !((c && c.roy()) || (a && a.roy()))) {
            return
        }
        if (b == this.bdr || b == this.tjg) {
            b();
            return
        }
        if (c) {
            c.bfg()
        }
        if (a) {
            a.bfg()
        }
        this.vcv.acn("panel_out");
        this.vcv.ixm("panel_out");
        this.pld = b;
        this.tuw = new Date().getTime();
        this.khr = 0;
        this.qle = setTimeout(this.pes, 89)
    };
    this.wkz = function() {
        var a = vmg.yov.nhr.ejh("betsel"),
            d = (!a || (a && !a.rpi())),
            c = 0,
            b = 0;
        vmg.yov.vnf();
        vmg.yov.khr++;
        if (d) {
            vmg.yov.jzg();
            clearTimeout(vmg.yov.qle);
            vmg.yov.qle = -1
        } else {
            c = new Date().getTime();
            b = 89 + (vmg.yov.khr * 89 - (c - vmg.yov.tuw));
            vmg.yov.qle = setTimeout(vmg.yov.wkz, b)
        }
    };
    this.pes = function() {
        var a = vmg.yov.nhr.ejh("betsel"),
            e = vmg.yov.nhr.ejh("topb"),
            f = (!a || (a && !a.rpi())),
            b = (!e || (e && !e.rpi())),
            d = 0,
            c = 0;
        vmg.yov.vnf();
        vmg.yov.khr++;
        if (f && b) {
            vmg.yov.gyr();
            clearTimeout(vmg.yov.qle);
            if (vmg.yov.qmd()) {
                vmg.yov.mvp(true)
            }
            vmg.yov.qle = -1;
            if (typeof vmg.yov.pld === "function") {
                vmg.yov.pld();
                vmg.yov.pld = null
            }
        } else {
            d = new Date().getTime();
            c = 89 + (vmg.yov.khr * 89 - (d - vmg.yov.tuw));
            vmg.yov.qle = setTimeout(vmg.yov.pes, c)
        }
    };
    this.pld = function() {};
    this.ixd = function() {
        return (this.qvw == 0 && (this.state == vmg.eoo.cvz.enq || (this.state == vmg.eoo.cvz.bhi && (this.win + this.lah) == 0) || this.state == vmg.eoo.cvz.nyf || (this.state == vmg.eoo.cvz.dxv && (this.win + this.lah) == 0) || this.state == vmg.eoo.cvz.exl || (this.state == vmg.eoo.cvz.nds && (this.win + this.lah) == 0) || (this.state == vmg.eoo.cvz.kcx && this.aqa == true)))
    };
    this.jpm = function() {
        if (vmg.yov.oly != "" && vmg.yov.uoe() === false) {
            vmg.yov.xss.llm.wrv("info", "#nha");
            vmg.yov.xss.llm.wrv("info", "#kxb", [0])
        }
    };
    this.rrk = function() {
        if (this.state == vmg.eoo.cvz.bhi && this.zho > 0) {
            this.vcv.acn("win" + (this.zho - 1))
        }
        this.xss.llm.wrv("info", "#qjk");
        this.xss.wfd(false);
        this.mvp(false);
        this.jcr(false);
        this.nhr.wrv("settings", "#qaz");
        this.xss.llm.wrv("setting", "#dub", [this.nhr.wrv("settings", "#roy")]);
        this.nhr.wrv("stats", "#hgk", [true]);
        this.vnf()
    };
    this.cjt = function() {
        this.nhr.wrv("stats", "#wfd", [false]);
        this.nhr.wrv("stats", "#hgk", [false]);
        if (this.state != vmg.eoo.cvz.kcx && this.state != vmg.eoo.cvz.kpz) {
            this.xss.wfd(true)
        } else {
            this.xss.fhz(true)
        }
        this.mvp(true);
        this.jcr(true);
        this.vnf();
        this.xss.llm.wrv("info", "#kxb", [0])
    };
    this.dao = function() {
        var a = this.xss.llm.wrv("bet", "#yfs");
        this.jwk();
        if (this.state == vmg.eoo.cvz.bhi && this.zho > 0) {
            this.vcv.acn("win" + (this.zho - 1))
        }
        this.xss.llm.wrv("info", "#qjk");
        this.jcr(false);
        this.xss.llm.qgo("settings", "#hgk", [true]);
        this.mvp(false);
        this.xss.wfd(false);
        this.xss.xei(true);
        this.nhr.wrv("settings", "#fjz", [a, true])
    };
    this.xby = function() {
        this.nhr.wrv("settings", "#qaz");
        if (this.state != vmg.eoo.cvz.kcx && this.state != vmg.eoo.cvz.kpz) {
            this.xss.wfd(true)
        } else {
            this.xss.fhz(true)
        }
        this.mvp(true);
        this.jcr(true);
        this.xss.llm.wrv("info", "#kxb", [0])
    };
    this.lbk = function() {
        vmg.yov.mvp(false);
        vmg.yov.xss.wfd(false);
        vmg.yov.xss.llm.wrv("info", "#nha");
        vmg.yov.nhr.wrv("autop", "#fjz")
    };
    this.vho = function() {
        var a = vmg.yov.nhr.ejh("autop");
        if (a) {
            vmg.yov.wyd = a.bcj();
            vmg.yov.qqr = (a.xhb() > 0) ? a.xhb() : 0;
            vmg.yov.sal = (a.npm() > 0) ? a.npm() : 0;
            vmg.yov.smy = (a.ikt() > 0) ? a.ikt() : 0;
            if (vmg.yov.wyd <= 0) {
                vmg.yov.mvp(true);
                vmg.yov.xss.wfd(true);
                vmg.yov.xss.llm.wrv("info", "#ldl")
            } else {
                vmg.yov.xss.llm.wrv("astart", "#uwu", [(vmg.yov.wyd >= 0) ? vmg.yov.wyd : "---"])
            }
        }
    };
    this.iki = function() {
        if (this.klz() != null && this.wyd >= 0) {
            this.wyd -= 1;
            this.xss.llm.wrv("astart", "#uwu", [(this.wyd >= 0) ? this.wyd : "---", true]);
            this.xss.llm.wrv("start", "#uwu", [(this.wyd >= 0) ? this.wyd : "---", true])
        }
    };
    this.opl = function() {
        if (vmg.yov.klz() != null) {
            vmg.yov.wyd = 0;
            vmg.yov.qqr = 0;
            vmg.yov.sal = 0;
            vmg.yov.smy = 0;
            vmg.yov.xss.llm.wrv("astart", "#uwu", ["---"]);
            vmg.yov.xss.llm.wrv("start", "#uwu", ["---"])
        }
        vmg.yov.xss.llm.wrv("start", "#aas");
        vmg.yov.nhr.wrv("autop", "#frm");
        vmg.yov.nhr.wrv("settings", "#opl")
    };
    this.oyd = function() {
        var a = vmg.yov.nhr.ejh("topi");
        vmg.yov.xjt = false;
        vmg.yov.opl();
        vmg.yov.xss.llm.wrv("astart", "#dub", [vmg.yov.xjt]);
        if (a) {
            a.cja("auto", vmg.yov.xjt)
        }
    };
    this.erp = function() {
        vmg.yov.lps();
        var a = ((vmg.yov.win + vmg.yov.lah > 0 && vmg.yov.jxq || vmg.yov.win + vmg.yov.lah === 0) && (vmg.yov.state == vmg.eoo.cvz.enq || vmg.yov.state == vmg.eoo.cvz.bhi || vmg.yov.state == vmg.eoo.cvz.nyf || vmg.yov.state == vmg.eoo.cvz.dxv || vmg.yov.state == vmg.eoo.cvz.exl || vmg.yov.state == vmg.eoo.cvz.nds) || (vmg.yov.state == vmg.eoo.cvz.kcx && vmg.yov.voc == 2 && vmg.yov.hsn == 2 && vmg.yov.aqa && (vmg.yov.glq == 5 || vmg.yov.totalBet != vmg.yov.ver)) || vmg.yov.eww());
        if (vmg.yov.klz() != null && a === true && (vmg.yov.wyd <= 0 || (vmg.yov.qvw - vmg.yov.qyo() < vmg.yov.qqr) || (vmg.yov.sal > 0 && vmg.yov.qvw >= vmg.yov.sal) || (vmg.yov.smy > 0 && vmg.yov.win > vmg.yov.smy))) {
            if (vmg.yov.xjt === true) {
                vmg.yov.avz()
            }
            vmg.yov.mvp(true);
            vmg.yov.xss.llm.wrv("info", "#ldl");
            vmg.yov.xss.wfd(true)
        } else {
            vmg.yov.kjg()
        }
    }
}
wda.prototype = new lto;

function fzx(a) {
    var c = anh(a);
    var b = ijf(a);
    return c + b * 13
}

function anh(a) {
    return a >> 2
}

function ijf(a) {
    return a & 3
}

function ffs() {
    var a = this;
    this.jyy = null;
    this.alc = null;
    this.ket = false;
    this.cps = false;
    this.pqy = 10;
    this.khr = 0;
    this.dyf = 0;
    this.ryk = 0;
    this.nri = 0;
    this.ubk = 0;
    this.tuw = 0;
    this.sti = false;
    this.thp = 0;
    this.bvv = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 53];
    this.jdx = 52;
    this.xav = 150;
    this.fzh = 0;
    this.ine = [];
    this.kqs = false;
    this.win = 0;
    this.mxa = 0;
    this.krj = [];
    this.qwb = 0;
    this.audio = true;
    this.rcd = false;
    this.iti = 0;
    this.wrc = -1;
    this.llm = null;
    this.uch = null;
    this.ujh = null;
    this.dhu = null;
    this.vte = "arial";
    this.byb = "bold";
    this.txc = "white";
    this.quz = null;
    this.god = 20;
    this.aii = new njt(50, 20, 700, 120);
    this.tdf = false;
    this.qtx = function(b, d, c) {
        ffs.prototype.qtx.call(this, b, d, c);
        this.tse()
    };
    this.vqo = function(b) {
        try {
            this.nlz(b);
            this.kro(b);
            this.ite(b);
            this.blk(b)
        } catch (c) {
            console.error(c)
        }
    };
    this.iub = function(g) {
        try {
            var f = this.llm.wnf("buttons"),
                c = this.llm.wnf("displays"),
                l = this.llm.wnf("cards"),
                k = this.llm.ejh("info");
            for (var d = 0, b = f.length; d < b; d++) {
                f[d].iub(g.uco)
            }
            for (var d = 0, b = c.length; d < b; d++) {
                c[d].iub(g.display)
            }
            for (var d = 0, b = l.length; d < b; d++) {
                l[d].iub(g.qbt)
            }
            if (k) {
                k.iub(g.npf);
                k.clq(g.npf.ztm)
            }
            this.llm.wrv("collect", "#clq", [g.kvy]);
            this.llm.wrv("gamble", "#clq", [g.app]);
            this.llm.wrv("creditd", "#clq", [g.led]);
            this.llm.wrv("wind", "#clq", [g.zmh]);
            this.llm.wrv("card1", "#clq", [g.soc]);
            this.llm.wrv("card2", "#clq", [g.rhg]);
            this.llm.wrv("card3", "#clq", [g.taa]);
            this.llm.wrv("card4", "#clq", [g.mkr]);
            this.llm.wrv("card5", "#clq", [g.qpr]);
            this.quz = g.teu;
            this.aii = g.oad;
            this.god = g.fontSize
        } catch (j) {
            console.error(j)
        }
    };
    this.zpb = function(f) {
        try {
            var g = this.llm.wnf("buttons"),
                c = this.llm.wnf("displays"),
                l = this.llm.wnf("cards"),
                k = this.llm.ejh("info");
            this.uch = f.backgroundColor;
            this.ujh = f.vox;
            this.dhu = f.ksr;
            this.vte = f.font;
            this.byb = f.out;
            this.txc = f.wkr;
            for (var d = 0, b = g.length; d < b; d++) {
                g[d].zpb(f.dfa)
            }
            for (var d = 0, b = c.length; d < b; d++) {
                c[d].zpb(f.display)
            }
            for (var d = 0, b = l.length; d < b; d++) {
                l[d].zpb(f.qbt)
            }
            if (k) {
                k.zpb(f.npf)
            }
        } catch (j) {
            console.error(j)
        }
    };
    this.doc = function(o, n) {
        var m = this.llm.wnf("buttons"),
            b = this.llm.wnf("cards"),
            l = o - this.x,
            k = n - this.y;
        for (var f = 0, g = m.length; f < g; f++) {
            var c = m[f];
            if (l >= c.x && l <= c.x + c.width && k >= c.y && k <= c.y + c.height && c.roy() === true && c.yfs() === true && c.vey() === false) {
                this.parent.vcv.acn("btn");
                this.parent.vcv.ixm("btn");
                c.xjb(true, false, true);
                this.vnf();
                c.pxk();
                for (var e = 0; e < g; e++) {
                    m[e].xon(true)
                }
                return true
            }
        }
        for (var f = 1, g = b.length; f < g; f++) {
            var d = b[f];
            if (l >= d.x && l <= d.x + d.width && k >= d.y && k <= d.y + d.height && d.roy() === true && d.yfs() === true) {
                d.uwa(true, this.parent.language.nus, "white", true);
                this.rui(false);
                this.wfd(false);
                this.woz();
                this.parent.kou.lrj(f);
                return true
            }
        }
        return false
    };
    this.ecg = function() {
        var e = this.llm.wnf("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.eqj() === true) {
                c.xjb(false, true);
                return true
            }
        }
        return false
    };
    this.bhd = function(g) {
        var f = this.llm.wnf("buttons");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (d.vii == g) {
                if (d.roy() === true && d.yfs() === true && d.vey() === false) {
                    this.parent.vcv.acn("btn");
                    this.parent.vcv.ixm("btn");
                    d.xjb(true, false, true);
                    this.vnf();
                    d.pxk();
                    for (var c = 0; c < b; c++) {
                        f[c].xon(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.vin = function() {
        var e = this.llm.wnf("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.eqj() === true) {
                c.xjb(false, true);
                return true
            }
        }
        return false
    };
    this.tse = function() {
        this.llm = new fsv();
        this.llm.qtx();
        this.llm.haq("buttons");
        this.llm.haq("displays");
        this.llm.haq("cards")
    };
    this.nlz = function(b) {
        this.llm.mwl("collect", this.xxb(b.kvy, this.parent.language.lgz, this.parent.vcv.kos("btn"), (!this.parent.vjx) ? this.parent.gky.djj : null, this.dfm, b.uco), ["buttons"]);
        this.llm.mwl("gamble", this.xxb(b.app, this.parent.language.oue, this.parent.vcv.kos("btn"), (!this.parent.vjx) ? this.parent.gky.kgs : null, this.oue, b.uco), ["buttons"])
    };
    this.kro = function(b) {
        this.llm.mwl("creditd", this.rsj(b.led, (this.parent.uoe()) ? this.parent.language.lwc : this.parent.language.qvw, this.parent.jhl(this.parent.qvw), "yellow", b.display), ["displays"]);
        this.llm.mwl("wind", this.rsj(b.zmh, this.parent.language.win, this.parent.jhl(this.parent.win), "yellow", b.display), ["displays"])
    };
    this.blk = function(b) {
        this.llm.mwl("card1", this.dlz(b.soc, this.parent.vcv.kos("cards"), b.qbt), ["cards"]);
        this.llm.mwl("card2", this.dlz(b.rhg, this.parent.vcv.kos("cards"), b.qbt), ["cards"]);
        this.llm.mwl("card3", this.dlz(b.taa, this.parent.vcv.kos("cards"), b.qbt), ["cards"]);
        this.llm.mwl("card4", this.dlz(b.mkr, this.parent.vcv.kos("cards"), b.qbt), ["cards"]);
        this.llm.mwl("card5", this.dlz(b.qpr, this.parent.vcv.kos("cards"), b.qbt), ["cards"])
    };
    this.ite = function(b) {
        var c = new ogu();
        c.qtx(b.npf.ztm, this.context2D);
        c.parent = this;
        c.iub(b.npf);
        this.llm.mwl("info", c)
    };
    this.dlz = function(d, e, c) {
        var b = new cpx();
        b.qtx(d, this.context2D);
        b.parent = this.parent;
        b.jyy = e;
        b.bvv = this.bvv;
        b.uwu(this.jdx);
        b.iub(c);
        return b
    };
    this.xxb = function(e, i, g, c, f, d) {
        var b = new zsj();
        b.qtx(e, this.context2D, null, g, null, i);
        b.parent = this;
        b.pxk = f;
        b.iub(d);
        if (c) {
            b.vii = c.tji
        }
        return b
    };
    this.rsj = function(c, g, f, d, b) {
        var e = new jmu();
        e.qtx(c, this.context2D, null, g, f);
        e.parent = this;
        e.jyy = this.parent.vcv.kos("display_effect");
        e.iub(b);
        return e
    };
    this.wfd = function(e) {
        var d = this.llm.wnf("buttons");
        for (var c = 0, b = d.length; c < b; c++) {
            d[c].ged(e)
        }
    };
    this.rui = function(e) {
        var d = this.llm.wnf("cards");
        for (var c = 1, b = d.length; c < b; c++) {
            d[c].ged(e)
        }
    };
    this.ser = function(e, c, b, d) {
        this.win = c;
        this.llm.wrv("creditd", "#rig", [this.parent.jhl(e), false]);
        this.llm.wrv("wind", "#rig", [this.parent.jhl(c), false]);
        if (d && d === true) {
            this.vnf()
        }
    };
    this.jhd = function(d, b) {
        for (var c = 0; c < 5; c++) {
            this.ine[c] = d[c]
        }
    };
    this.ulh = function(f, d) {
        var k = this.llm.ejh("info"),
            j = this.llm.wnf("cards");
        if (f > 0) {
            if (!d) {
                var e = anh(this.ine[f]),
                    c = anh(this.ine[0]);
                if (k) {
                    if (e > c) {
                        k.cie(this.parent.language.stb, true)
                    } else {
                        k.cie("", true)
                    }
                }
                j[f].uwa(true, this.parent.language.nus, "white", false)
            } else {
                if (k) {
                    k.cie("", true)
                }
                j[f].uwa(true, "", "white", false)
            }
        } else {
            if (k) {
                k.cie("", true)
            }
        }
        j[0].uwa(true, this.parent.language.sru, "white", false);
        for (var g = 0, b = this.ine.length; g < b; g++) {
            if (this.ine[g] >= 0) {
                j[g].uwu(fzx(this.ine[g]), false)
            } else {
                j[g].uwu(this.jdx, false)
            }
        }
    };
    this.xke = function(d, b) {
        var c = this.llm.ejh("info");
        if (c) {
            c.ppf(b);
            c.kcf(d, b)
        }
    };
    this.cie = function(d) {
        this.krj = [];
        for (var c = 0, b = d.length; c < b; c++) {
            this.krj[c] = d[c]
        }
    };
    this.hic = function(e) {
        var d = this.llm.wnf("buttons");
        for (var c = 0, b = d.length; c < b; c++) {
            d[c].hgk(e)
        }
    };
    this.fjz = function(d) {
        var f = this.llm.ejh("info"),
            e = this.llm.wnf("cards"),
            g = this.llm.ejh("gamble");
        this.wfd(!d);
        this.hic((this.parent.state == vmg.eoo.cvz.nds || this.parent.state == vmg.eoo.cvz.iwt || (this.parent.state == vmg.eoo.cvz.bhi && !d)));
        if (f) {
            f.hgk(true)
        }
        for (var c = 0, b = e.length; c < b; c++) {
            e[c].uwu(this.jdx, false);
            e[c].uwa(false, "", null, false)
        }
        this.hgk(true, true);
        if (!this.parent.gzc && d) {
            this.tdf = true;
            this.parent.kou.qnk()
        } else {
            if (!d) {
                this.tdf = false;
                if (g) {
                    g.tcv()
                }
                if (f) {
                    f.kxb(3)
                }
                this.mje()
            }
        }
    };
    this.nti = function(e) {
        var d = this.llm.wnf("cards");
        for (var c = 0, b = this.parent.vcv.tmd("deal"); c < b; c++) {
            this.parent.vcv.acn("deal" + c)
        }
        this.wrc = fzx(e);
        for (var c = 0, b = d.length; c < b; c++) {
            d[c].uwu(this.jdx, false);
            d[c].uwa(false, "", null, false)
        }
        this.vnf();
        setTimeout(this.mvi, 400)
    };
    this.mvi = function() {
        var c = a.llm.ejh("card1"),
            b = a.llm.ejh("info");
        a.parent.vcv.ixm("deal0");
        if (c) {
            c.uwu(a.wrc, true);
            c.uwa(true, a.parent.language.sru, "white", true)
        }
        if (b) {
            b.qjk();
            b.kxb(0)
        }
        a.vnf();
        a.rui(true);
        a.ncg()
    };
    this.gbs = function(d, c) {
        var e = this.llm.ejh("card1"),
            b = this.llm.ejh("card" + (d + 1));
        this.kqs = anh(this.ine[d]) > anh(this.ine[0]);
        this.mxa = d;
        this.rcd = c;
        this.fzh = 0;
        if (e) {
            e.uwu(fzx(this.ine[0]), true);
            e.uwa(true, this.parent.language.sru, "white", true)
        }
        this.parent.vcv.ixm("deal" + this.fzh);
        if (b) {
            b.uwu(fzx(this.ine[d]), true);
            b.uwa(true, this.parent.language.nus, "white", true)
        }
        this.vnf();
        this.iti = 1;
        setTimeout(this.ksl, 500)
    };
    this.ksl = function() {
        var c = a.xav,
            b = a.llm.ejh("card" + (a.iti + 1));
        if (a.iti == 1) {
            a.tuw = new Date().getTime()
        } else {
            var d = new Date().getTime();
            c = a.xav + (a.fzh * a.xav - (d - a.tuw))
        }
        if (b && !b.ywb()) {
            a.fzh += 1;
            a.parent.vcv.ixm("deal" + (a.fzh - 1));
            b.uwu(fzx(a.ine[a.iti]), true);
            a.vnf()
        } else {
            c = 0
        }
        a.iti++;
        if (c <= 0) {
            c = 0
        }
        if (a.iti < 5) {
            if (c == 0) {
                a.ksl()
            } else {
                setTimeout(a.ksl, c)
            }
        } else {
            setTimeout(a.ocx, a.xav)
        }
    };
    this.ocx = function() {
        var b = a.llm.ejh("card" + (a.mxa + 1)),
            d = a.llm.ejh("info"),
            c = a.llm.ejh("gamble");
        if (a.win > 0) {
            if (a.rcd) {
                a.deq()
            } else {
                if (d) {
                    d.qjk()
                }
                if (a.kqs) {
                    a.parent.vcv.ixm("gamblewin");
                    if (b) {
                        b.uwa(true, a.parent.language.win, "yellow", true)
                    }
                    if (d) {
                        d.kxb(1)
                    }
                } else {
                    if (b) {
                        b.uwa(true, a.parent.language.qts, "yellow", true)
                    }
                    if (d) {
                        d.kxb(2)
                    }
                    a.mje()
                }
                a.hic(true);
                if (c) {
                    c.tcv()
                }
                a.vnf()
            }
        } else {
            if (d) {
                d.qjk()
            }
            setTimeout(a.parent.chz, 1000)
        }
    };
    this.hvx = function() {};
    this.ncg = function() {
        this.audio = true;
        this.qwb = setInterval(function() {
            a.audio = !a.audio;
            if (a.audio) {
                a.parent.vcv.ixm("gamble1");
                a.parent.vcv.acn("gamble2")
            } else {
                a.parent.vcv.ixm("gamble2");
                a.parent.vcv.acn("gamble1")
            }
        }, 400)
    };
    this.mje = function() {
        vmg.yov.vcv.acn("gambleprop");
        vmg.yov.vcv.ixm("gambleprop");
        vmg.yov.vqi.wfd(true)
    };
    this.woz = function() {
        clearInterval(this.qwb);
        this.parent.vcv.acn("gamble1");
        this.parent.vcv.acn("gamble2")
    };
    this.dfm = function() {
        a.wfd(false);
        a.llm.wrv("gamble", "#omn");
        a.parent.vcv.acn("gambleprop");
        a.parent.kou.lgz()
    };
    this.oue = function() {
        a.wfd(false);
        a.llm.wrv("gamble", "#omn");
        a.parent.vcv.acn("gambleprop");
        if (a.tdf == false) {
            a.tdf = true;
            a.parent.kou.qnk()
        } else {
            a.parent.kou.iru()
        }
    };
    this.deq = function() {
        a.llm.wrv("info", "#qjk");
        setTimeout(a.gtj, 10)
    };
    this.gtj = function() {
        a.ket = false;
        a.cps = (a.parent.win > a.parent.totalBet) ? true : false;
        a.pqy = 10;
        a.khr = 0;
        a.dyf = a.parent.win;
        a.ryk = a.parent.qvw - a.parent.win;
        a.nri = 0;
        a.ubk = a.parent.win;
        a.tuw = new Date().getTime();
        a.sti = true;
        a.thp = setTimeout(a.fms, a.parent.eym)
    };
    this.fms = function() {
        var b = 0,
            c = a.parent.bgg,
            d = 0;
        if (a.ubk > 0) {
            if (!a.ket) {
                a.parent.vcv.acn("collect");
                a.parent.vcv.ixm("collect");
                a.ket = true
            }
            b = Math.round(a.ubk / a.pqy);
            a.ubk -= b;
            if (a.ubk < 0) {
                a.ubk = 0
            }
            a.llm.wrv("wind", "#rig", [a.parent.jhl(a.dyf - (a.parent.win - a.ubk)), true]);
            a.llm.wrv("creditd", "#rig", [a.parent.jhl(a.ryk + (a.parent.win - a.ubk)), true]);
            a.khr++;
            a.pqy -= 1;
            d = new Date().getTime();
            c = a.parent.eym + (a.khr * a.parent.eym - (d - a.tuw));
            a.thp = setTimeout(a.fms, c)
        } else {
            a.parent.vcv.acn("collect");
            a.parent.vcv.ixm("collectend");
            a.sti = false;
            clearTimeout(a.thp);
            setTimeout(a.parent.chz, 100)
        }
    };
    this.vnf = function(n, m, o, j) {
        if (!this.roy() || !this.parent.ufa()) {
            return
        }
        var d = (n != null && m != null && o != null && j != null),
            q = this.context2D,
            c = this.edu,
            b = this.llm.wnf("cards"),
            l = this.llm.wnf("buttons"),
            g = this.llm.wnf("displays"),
            p = this.llm.ejh("info"),
            f = this.parent.vcv.kos("btn_back"),
            e = 0,
            k = 0;
        q.save();
        if (d) {
            q.beginPath();
            q.rect(n, m, o, j);
            q.closePath();
            q.clip()
        }
        if (f) {
            q.drawImage(this.jyy, (this.quz.x == 0) ? this.quz.width : 0, this.height - f.height);
            jna = q.createLinearGradient(this.quz.x, this.quz.y, this.quz.x + this.quz.width, this.quz.y);
            jna.addColorStop(0.2, this.ujh);
            jna.addColorStop(1, this.dhu);
            q.fillStyle = jna;
            q.save();
            if (this.parent.cio === vmg.ple.hso) {
                q.translate(this.quz.width / 2, this.quz.height / 2);
                q.rotate(Math.PI);
                q.translate(-this.quz.width / 2, -this.quz.height / 2)
            }
            q.fillRect(this.quz.x, this.quz.y, this.quz.width, this.quz.height);
            q.drawImage(f, this.quz.x, this.quz.y, this.quz.width, this.quz.height);
            q.restore()
        } else {
            q.drawImage(this.jyy, 0, 0);
            if (this.uch != null) {
                vmg.arb.lux(q, this.quz.x, this.quz.y, this.quz.width, this.quz.height, this.uch, 1)
            }
        }
        this.jkx(q);
        q.restore();
        for (e = 0, k = b.length; e < k; e++) {
            b[e].acx(c);
            b[e].vnf()
        }
        for (e = 0, k = l.length; e < k; e++) {
            l[e].vnf()
        }
        p.vnf();
        for (e = 0, k = g.length; e < k; e++) {
            g[e].vnf()
        }
        if (this.stf && this.edu) {
            if (d) {
                this.stf.drawImage(this.edu, n, m, o, j, this.x + n, this.y + m, o, j)
            } else {
                this.stf.drawImage(this.edu, this.x, this.y)
            }
        }
    };
    this.jkx = function(c) {
        var d = Math.round(this.aii.height / this.krj.length) - 1;
        for (var e = 0, b = this.krj.length; e < b; e++) {
            vmg.arb.mqr(c, this.krj[e], this.txc, this.aii.x, this.aii.y + (e) * d, this.aii.width, this.god, this.vte, this.god, this.byb)
        }
    }
}
ffs.prototype = new rjl;

function wut() {
    this.djj = {
        tji: 32,
        ntv: -1,
        value: "SPACE",
        ipf: null
    };
    this.kgs = {
        tji: 8,
        ntv: -1,
        value: "BACKSPACE",
        ipf: null
    }
}
wut.prototype = new dhk;

function gwq() {
    this.aop = [800, 800, 500, 800, 800];
    this.jwt = [1, 2, 3, 4, 5];
    this.jku = [
        [],
        [],
        [],
        [],
        []
    ];
    this.yzt = 0;
    this.dxc = -1;
    this.azf = 0;
    this.egl = "red";
    this.mhp = [];
    this.hkv = 2;
    this.zpb = function(a) {
        gwq.prototype.zpb.call(this, a);
        try {
            this.egl = a.mmj
        } catch (b) {
            console.error(b)
        }
    };
    this.iub = function(a) {
        gwq.prototype.iub.call(this, a);
        try {
            this.mhp = a.zmh;
            this.hkv = a.ndq
        } catch (b) {
            console.error(b)
        }
    };
    this.doc = function(b, j) {
        var g = b - this.x,
            f = j - this.y,
            e = this.parent.xss.llm.ejh("bet");
        for (var c = 0, a = this.mhp.length; c < a; c++) {
            var d = this.mhp[c];
            if (g >= d.x && g <= d.x + d.width && f >= d.y && f <= d.y + d.height && this.roy() === true) {
                if (e && e.yfs() === true) {
                    if (c < 3) {
                        this.parent.wnb = this.parent.ljk() + c
                    } else {
                        if (c == 4) {
                            this.parent.wnb = this.parent.bhx()
                        } else {
                            if (this.parent.wnb < this.parent.grs.length - 1) {
                                if (this.parent.wnb >= this.parent.bhx() - 1) {
                                    this.parent.wnb = 0;
                                    while (this.parent.wnb < this.parent.ljk() + 3) {
                                        this.parent.wnb++
                                    }
                                } else {
                                    if (this.parent.wnb < this.parent.ljk() + 3) {
                                        this.parent.wnb = this.parent.ljk() + 3
                                    } else {
                                        this.parent.wnb++
                                    }
                                }
                            } else {
                                this.parent.wnb = 0;
                                while (this.parent.wnb < this.parent.ljk() + 3) {
                                    this.parent.wnb++
                                }
                            }
                        }
                    }
                    this.parent.nwp(false);
                    this.parent.xss.llm.qgo("buttons", "#xon", [true]);
                    return true
                }
            }
        }
        return false
    };
    this.ecg = function() {};
    this.bhd = function() {};
    this.vin = function() {};
    this.mjm = function(f) {
        var e = 0;
        this.azf = this.parent.ljk();
        for (; e < 4; e++) {
            this.jwt[e] = this.parent.grs[this.azf + e]
        }
        this.jwt[e] = this.parent.jnc;
        for (var e = 0, b = f.length; e < b; e++) {
            this.vax[e] = f[b - 1 - e]
        }
        for (var a = 0, d = this.jwt.length; a < d; a++) {
            for (var e = 0, c = this.vax.length; e < c; e++) {
                if (e == 0 && a == 4) {
                    this.jku[a][e] = this.aop[this.parent.qqe] * this.jwt[a]
                } else {
                    this.jku[a][e] = this.vax[e] * this.jwt[a]
                }
            }
        }
    };
    this.bvh = function(c) {
        if (c < this.parent.jnc && c > this.parent.grs[this.azf + 2]) {
            this.yzt = 3;
            this.jwt[3] = c;
            for (var b = 0, a = this.vax.length; b < a; b++) {
                this.jku[3][b] = this.vax[b] * this.jwt[3]
            }
        } else {
            if (c == this.parent.grs[this.azf]) {
                this.yzt = 0
            } else {
                if (c == this.parent.grs[this.azf + 1]) {
                    this.yzt = 1
                } else {
                    if (c == this.parent.grs[this.azf + 2]) {
                        this.yzt = 2
                    } else {
                        if (c == this.parent.jnc) {
                            this.yzt = 4
                        }
                    }
                }
            }
        }
        this.vnf()
    };
    this.ugb = function(a, b) {
        this.dxc = this.zda.length - a;
        if (b && b === true) {
            this.vnf()
        }
    };
    this.rbj = function(a) {
        this.dxc = -1;
        if (a && a === true) {
            this.vnf()
        }
    };
    this.vnf = function() {
        if (!this.roy() || !this.parent.ufa()) {
            return
        }
        var l = this.context2D,
            b = this.height - 2 * this.pby,
            a = Math.round(b / this.zda.length),
            c = (this.god < a) ? this.god : a - 2;
        l.save();
        if (this.jyy != null) {
            l.drawImage(this.jyy, 0, 0)
        }
        vmg.arb.lux(l, this.mhp[this.yzt].x, this.mhp[this.yzt].y, this.mhp[this.yzt].width, this.mhp[this.yzt].height, this.egl, 1);
        for (var g = 0, k = this.zda.length; g < k; g++) {
            if (g == this.dxc) {
                vmg.arb.mft(l, this.zda[g], "white", 0, this.pby + a * (g), 200, a, this.vte, c, this.byb, this.pby)
            } else {
                vmg.arb.mft(l, this.zda[g], this.txc, 0, this.pby + a * (g), 200, a, this.vte, c, this.byb, this.pby)
            }
        }
        for (var g = 0, e = this.jku.length; g < e; g++) {
            for (var f = 0, d = this.jku[g].length; f < d; f++) {
                if ((g == 4 && f == 0) || (this.dxc == f && g == this.yzt)) {
                    vmg.arb.fow(l, this.parent.txb(this.jku[g][f]), "white", this.mhp[g].x, this.pby + a * (f), this.mhp[g].width, a, this.vte, c, this.byb, this.hkv)
                } else {
                    vmg.arb.fow(l, this.parent.txb(this.jku[g][f]), this.txc, this.mhp[g].x, this.pby + a * (f), this.mhp[g].width, a, this.vte, c, this.byb, this.hkv)
                }
            }
        }
        l.restore();
        if (this.stf && this.edu) {
            this.stf.drawImage(this.edu, this.x, this.y)
        }
    }
}
gwq.prototype = new wat;

function taf() {
    this.glf = null;
    this.tue = false;
    this.pcb = new njt(47, 6, 91, 29);
    this.uwu = function(d, e) {
        var a = 0,
            c = false;
        this.tue = false;
        if (d == this.parent.jdx) {
            this.adf = d;
            c = true
        } else {
            if ((a = this.parent.pzv.length) > 0) {
                for (var b = 0; b < a && !c; b++) {
                    if (d == this.parent.pzv[b]) {
                        this.adf = this.parent.rko[b];
                        this.tue = true;
                        c = true
                    }
                }
            }
        }
        if (!c) {
            this.adf = d
        }
        if (e && e === true) {
            this.vnf()
        }
    };
    this.vnf = function() {
        if (!this.roy() || !this.parent.ufa()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.beginPath();
        a.rect(this.x, this.y, this.width, this.height);
        a.closePath();
        a.clip();
        if (this.afj != null) {
            a.drawImage(this.afj, this.x, this.y)
        }
        if (this.jyy != null) {
            if (this.qsg || this.jku) {
                if (this.xlx) {
                    a.drawImage(this.jyy, this.bvv[this.adf] * this.qbm, 0, this.qbm, this.xcu, this.x, this.y + this.afk, this.qbm, this.xcu)
                } else {
                    a.drawImage(this.jyy, this.bvv[this.adf] * this.qbm, 0, this.qbm, this.xcu, this.x, this.y, this.qbm, this.xcu)
                }
            } else {
                a.drawImage(this.jyy, this.bvv[this.adf] * this.qbm, 0, this.qbm, this.xcu, this.x, this.y + this.tks, this.qbm, this.xcu)
            }
        }
        if (this.glf != null) {
            if (this.tue) {
                if (this.qsg || this.jku) {
                    if (this.xlx) {
                        a.drawImage(this.glf, this.x + this.pcb.x, this.y + this.afk + this.pcb.y)
                    } else {
                        a.drawImage(this.glf, this.x + this.pcb.x, this.y + this.pcb.y)
                    }
                } else {
                    a.drawImage(this.glf, this.x + this.pcb.x, this.y + this.tks + this.pcb.y)
                }
            }
        }
        if (this.qsg || this.jku || this.jma) {
            b = this.gxv
        }
        if (b != null) {
            if (this.xlx) {
                vmg.arb.mqr(a, b, this.txc, this.x, this.y, this.width, this.afk, this.vte, this.god, this.byb)
            } else {
                vmg.arb.mqr(a, b, this.txc, this.x, this.y + this.xcu, this.width, this.afk, this.vte, this.god, this.byb)
            }
        }
        a.restore()
    }
}
taf.prototype = new cpx;

function tgr() {
    this.rxi = [];
    this.zxi = "verdana";
    this.wyq = "bold italic";
    this.one = "white";
    this.het = [];
    this.idq = 12;
    this.aii = new njt();
    this.zpb = function(a) {
        tgr.prototype.zpb.call(this, a);
        try {
            this.zxi = a.aqg;
            this.wyq = a.ygz;
            this.one = a.amf
        } catch (b) {
            console.error(b)
        }
    };
    this.iub = function(a) {
        tgr.prototype.iub.call(this, a);
        try {
            this.het = a.szt;
            this.aii = a.oad;
            this.idq = a.zby
        } catch (b) {
            console.error(b)
        }
    };
    this.vnf = function() {
        if (!this.roy()) {
            return
        }
        var a = this.context2D;
        a.save();
        if (this.jac) {
            a.strokeStyle = this.jac
        }
        a.lineJoin = "round";
        a.lineCap = "round";
        a.lineWidth = this.aqb;
        a.font = this.byb + " " + this.god + "px " + this.vte;
        a.textBaseline = "bottom";
        a.drawImage(this.jyy, 0, 0);
        a.textAlign = "left";
        a.fillStyle = this.olf;
        for (var b = 0; b < this.rxi.length; b++) {
            this.ywn(this.rxi[b], this.het[b], this.god, this.vte)
        }
        a.textAlign = "center";
        a.fillStyle = this.txc;
        for (var b = 0; b < this.hnt.length; b++) {
            this.vxv(this.hnt[b], this.nap[b], this.god, this.vte)
        }
        vmg.arb.mqr(a, vmg.yov.zoy(vmg.yov.language.dqb), this.one, this.aii.x, this.aii.y, this.aii.width, this.aii.height, this.zxi, this.idq, this.wyq);
        a.restore();
        if (this.stf && this.edu) {
            this.stf.drawImage(this.edu, this.x, this.y)
        }
    }
}
tgr.prototype = new tiz;

function ufn() {
    this.kfp = "DeucesWild";
    this.eji = "Deuces Wild";
    this.gla = vmg.rkn.value30 + "/deuceswild/images/";
    this.szh = vmg.rkn.value30 + "/deuceswild/sounds/";
    this.cri = 10;
    this.ymz = null;
    this.dyt = null;
    this.dci = [
        [1, 2, 2, 3, 5, 9, 15, 25, 200, 250],
        [1, 2, 3, 4, 4, 10, 16, 25, 200, 250],
        [1, 2, 3, 4, 4, 9, 15, 25, 200, 250],
        [1, 2, 2, 3, 4, 13, 16, 25, 200, 250],
        [1, 2, 2, 3, 4, 10, 15, 25, 200, 250]
    ];
	gameController=this;
    this.hbn = null;
    this.fxb = null;
    this.muk = null;
    this.rxz = null;
    this.iaw = function() {
        this.yhg = [this.language.psa, this.language.jcf, this.language.ccj, this.language.xcx, this.language.hbz, this.language.crm, this.language.uyh, this.language.aue, this.language.dsh, this.language.zqo];
        this.bvv = [-1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -1, -1, -1, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, -1, -1, -1, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 53];
        this.jdx = 63;
        this.pzv = [66, 82, 98, 114];
        this.rko = [2, 18, 34, 50];
        this.phl("1_0_61")
    };
    this.doc = function(c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.hpf) {
            return
        }
        var q = 0,
            p = 0,
            d = false,
            r = false,
            m = false,
            j = this.nhr.ejh("loading"),
            b = this.nhr.ejh("stats"),
            s = this.nhr.ejh("topb"),
            o = this.nhr.ejh("topi"),
            a = this.nhr.ejh("betsel"),
            l = this.nhr.ejh("paytable"),
            n = this.nhr.ejh("autop"),
            e = this.nhr.ejh("settings");
        if (c.touches) {
            var g = c.touches[0];
            d = true;
            if (!this.ybl) {
                q = g.pageX - this.offsetLeft;
                p = g.pageY - this.offsetTop
            } else {
                q = Math.round((g.pageX - this.offsetLeft) / this.wnt);
                p = Math.round((g.pageY - this.offsetTop) / this.wov)
            }
        } else {
            if (c.which != 1) {
                return
            }
            if (!this.ybl) {
                q = c.pageX - this.offsetLeft;
                p = c.pageY - this.offsetTop
            } else {
                q = Math.round((c.pageX - this.offsetLeft) / this.wnt);
                p = Math.round((c.pageY - this.offsetTop) / this.wov)
            }
        }
        if (this.yby === true) {
            if (n && n.roy()) {
                if (n.doc(q, p)) {
                    return
                }
            }
            if (s && s.roy()) {
                if (s.doc(q, p)) {
                    clearTimeout(this.ehv);
                    return
                } else {
                    m = true
                }
            }
            if (a) {
                if (a.roy()) {
                    if (a.doc(q, p, d)) {
                        clearTimeout(this.ehv);
                        return
                    } else {
                        r = true
                    }
                }
            }
            if (m) {
                this.ygn(this.xss.rto(q, p, null));
                return
            } else {
                if (r) {
                    if (a && a.yfs()) {
                        this.trd(this.xss.rto(q, p, null))
                    }
                    return
                }
            }
            if (e && e.roy()) {
                if (e.doc(q, p)) {
                    return
                }
            }
            if (o) {
                if (o.doc(q, p, d)) {
                    return
                }
            }
            if (b && b.roy()) {
                if (b.doc(q, p)) {
                    return
                }
            }
            if (this.ria && this.ria.roy()) {
                if (this.ria.doc(q, p)) {
                    return
                }
            }
            if (this.vqi && this.vqi.roy()) {
                if (this.vqi.doc(q, p)) {
                    return
                }
            }
            if (this.xss != null) {
                if (this.xss.doc(q, p, r)) {
                    return
                }
            }
            if (this.uin != null) {
                for (var f = 0, k = this.uin.length; f < k; f++) {
                    if (this.uin[f].doc(q, p)) {
                        return
                    }
                }
            }
            if (l) {
                if (l.doc(q, p)) {
                    return
                }
            }
        } else {
            if (j && j.roy()) {
                if (j.doc(q, p)) {
                    return
                }
            }
        }
    };
    this.czk = function() {
        this.gky = new wut()
    };
    this.hie = function() {
        ufn.prototype.hie.call(this);
        this.eba = this.dci[this.qqe]
    };
    this.qxd = function() {
        this.vqi = new ffs();
        this.vqi.qtx(this.ple.oue.ztm, null, this.context2D);
        this.vqi.parent = this;
        this.vqi.jyy = this.vcv.kos("g_back");
        this.vqi.vqo(this.ple.oue);
        this.vqi.xke(this.iko, 0);
        this.vqi.xke(this.hbn, 1);
        this.vqi.xke(this.fxb, 2);
        this.vqi.xke(this.rxz, 3);
        this.vqi.cie(this.muk);
        this.vqi.zpb(this.style.oue);
        this.vqi.iub(this.ple.oue);
        this.vqi.hgk(false);
        var a = this.vcv.jjx("gamblewin");
        if (!this.vjx && a != null) {
            a.oof(this.vqi.mje)
        }
    };
    this.jtc = function() {
        var a = new gwq();
        a.qtx(this.ple.sxj.ztm, null, this.context2D);
        a.parent = this;
        a.jyy = this.vcv.kos("paytable");
        a.iub(this.ple.sxj);
        a.zpb(this.style.sxj);
        a.mjm(this.eba);
        a.czw(this.yhg);
        this.nhr.mwl("paytable", a)
    };
    this.blk = function() {
        this.pwt = new taf();
        this.arh = new taf();
        this.pmc = new taf();
        this.lom = new taf();
        this.bxo = new taf();
        this.pwt.qtx(this.ple.soc, this.context2D);
        this.arh.qtx(this.ple.rhg, this.context2D);
        this.pmc.qtx(this.ple.taa, this.context2D);
        this.lom.qtx(this.ple.mkr, this.context2D);
        this.bxo.qtx(this.ple.qpr, this.context2D);
        this.uin = [this.pwt, this.arh, this.pmc, this.lom, this.bxo];
        for (var b = 0, a = this.uin.length; b < a; b++) {
            this.uin[b].parent = this;
            this.uin[b].jyy = this.vcv.kos("cards");
            this.uin[b].glf = this.vcv.kos("wild");
            this.uin[b].bvv = this.bvv;
            this.uin[b].uwu(this.jdx);
            this.uin[b].zpb(this.style.qbt);
            this.uin[b].iub(this.ple.qbt)
        }
    };
    this.zks = function() {
        this.fpg();
        this.azq();
        ufn.prototype.zks.call(this)
    };
    this.fpg = function() {
        this.ymz = new tgr();
        this.ymz.qtx(this.ple.seb.win.ztm, null, this.ria.context2D, this.vcv.kos("help"));
        this.ymz.parent = this.ria;
        this.ymz.hnt[0] = this.language.rvj;
        this.ymz.hnt[1] = this.language.sei;
        this.ymz.hnt[2] = this.language.fmm;
        this.ymz.hnt[3] = this.language.opb;
        this.ymz.hnt[4] = this.language.xzr;
        this.ymz.hnt[5] = this.language.uuc;
        this.ymz.hnt[6] = this.language.vps;
        this.ymz.hnt[7] = this.language.iul;
        this.ymz.hnt[8] = this.language.tqn;
        this.ymz.hnt[9] = this.language.gju;
        this.ymz.rxi[0] = this.language.zqo;
        this.ymz.rxi[1] = this.language.dsh;
        this.ymz.rxi[2] = this.language.aue;
        this.ymz.rxi[3] = this.language.uyh;
        this.ymz.rxi[4] = this.language.crm;
        this.ymz.rxi[5] = this.language.hbz;
        this.ymz.rxi[6] = this.language.xcx;
        this.ymz.rxi[7] = this.language.ccj;
        this.ymz.rxi[8] = this.language.jcf;
        this.ymz.rxi[9] = this.language.psa;
        this.ymz.zpb(this.style.seb.win);
        this.ymz.iub(this.ple.seb.win);
        if (!this.nhr.ejh("tops")) {
            this.ria.vuj(this.ymz)
        }
    };
    this.azq = function() {
        var a = this.nhr.ejh("tops");
        if (a) {
            this.dyt = new tgr();
            this.dyt.qtx(this.ple.top.win.ztm, null, a.context2D, this.vcv.kos("help_top"));
            this.dyt.parent = a;
            this.dyt.hnt[0] = this.language.rvj;
            this.dyt.hnt[1] = this.language.sei;
            this.dyt.hnt[2] = this.language.fmm;
            this.dyt.hnt[3] = this.language.opb;
            this.dyt.hnt[4] = this.language.xzr;
            this.dyt.hnt[5] = this.language.uuc;
            this.dyt.hnt[6] = this.language.vps;
            this.dyt.hnt[7] = this.language.iul;
            this.dyt.hnt[8] = this.language.tqn;
            this.dyt.hnt[9] = this.language.gju;
            this.dyt.rxi[0] = this.language.zqo;
            this.dyt.rxi[1] = this.language.dsh;
            this.dyt.rxi[2] = this.language.aue;
            this.dyt.rxi[3] = this.language.uyh;
            this.dyt.rxi[4] = this.language.crm;
            this.dyt.rxi[5] = this.language.hbz;
            this.dyt.rxi[6] = this.language.xcx;
            this.dyt.rxi[7] = this.language.ccj;
            this.dyt.rxi[8] = this.language.jcf;
            this.dyt.rxi[9] = this.language.psa;
            this.dyt.zpb(this.style.seb.win);
            this.dyt.iub(this.ple.top.win);
            a.vuj(this.dyt)
        }
    };
    this.mrv = function() {
        this.iko[0] = this.language.zqb;
        this.iko[1] = this.language.spv;
        this.vqi.xke(this.iko, 0);
        this.hbn[0] = this.language.stb;
        this.hbn[1] = this.language.irg;
        this.vqi.xke(this.hbn, 1);
        this.fxb[0] = this.language.qts;
        this.fxb[1] = this.language.irg;
        this.vqi.xke(this.fxb, 2);
        this.rxz[0] = this.language.snv;
        this.rxz[1] = this.language.wbc;
        this.vqi.xke(this.rxz, 3);
        this.muk[0] = this.language.iht;
        this.muk[1] = this.language.xao;
        this.muk[2] = this.language.hdy;
        this.muk[3] = this.language.yhv;
        this.vqi.cie(this.muk);
        this.vqi.llm.wrv("creditd", "#tby", [(this.uoe()) ? this.language.lwc : this.language.qvw, false]);
        this.vqi.llm.wrv("wind", "#tby", [this.language.win, false]);
        this.vqi.llm.wrv("collect", "#rig", [this.language.lgz, false]);
        this.vqi.llm.wrv("gamble", "#rig", [this.language.oue, false]);
        if (this.ymz != null) {
            this.ymz.hnt[0] = this.language.rvj;
            this.ymz.hnt[1] = this.language.sei;
            this.ymz.hnt[2] = this.language.fmm;
            this.ymz.hnt[3] = this.language.opb;
            this.ymz.hnt[4] = this.language.xzr;
            this.ymz.hnt[5] = this.language.uuc;
            this.ymz.hnt[6] = this.language.vps;
            this.ymz.hnt[7] = this.language.iul;
            this.ymz.hnt[8] = this.language.tqn;
            this.ymz.hnt[9] = this.language.gju;
            this.ymz.rxi[0] = this.language.zqo;
            this.ymz.rxi[1] = this.language.dsh;
            this.ymz.rxi[2] = this.language.aue;
            this.ymz.rxi[3] = this.language.uyh;
            this.ymz.rxi[4] = this.language.crm;
            this.ymz.rxi[5] = this.language.hbz;
            this.ymz.rxi[6] = this.language.xcx;
            this.ymz.rxi[7] = this.language.ccj;
            this.ymz.rxi[8] = this.language.jcf;
            this.ymz.rxi[9] = this.language.psa
        }
        if (this.dyt != null) {
            this.dyt.hnt[0] = this.language.rvj;
            this.dyt.hnt[1] = this.language.sei;
            this.dyt.hnt[2] = this.language.fmm;
            this.dyt.hnt[3] = this.language.opb;
            this.dyt.hnt[4] = this.language.xzr;
            this.dyt.hnt[5] = this.language.uuc;
            this.dyt.hnt[6] = this.language.vps;
            this.dyt.hnt[7] = this.language.iul;
            this.dyt.hnt[8] = this.language.tqn;
            this.dyt.hnt[9] = this.language.gju;
            this.dyt.rxi[0] = this.language.zqo;
            this.dyt.rxi[1] = this.language.dsh;
            this.dyt.rxi[2] = this.language.aue;
            this.dyt.rxi[3] = this.language.uyh;
            this.dyt.rxi[4] = this.language.crm;
            this.dyt.rxi[5] = this.language.hbz;
            this.dyt.rxi[6] = this.language.xcx;
            this.dyt.rxi[7] = this.language.ccj;
            this.dyt.rxi[8] = this.language.jcf;
            this.dyt.rxi[9] = this.language.psa
        }
    };
    this.tad = function() {
        this.iko = [];
        this.iko[0] = this.language.zqb;
        this.iko[1] = this.language.spv;
        this.hbn = [];
        this.hbn[0] = this.language.stb;
        this.hbn[1] = this.language.irg;
        this.fxb = [];
        this.fxb[0] = this.language.qts;
        this.fxb[1] = this.language.irg;
        this.rxz = [];
        this.rxz[0] = this.language.snv;
        this.rxz[1] = this.language.wbc;
        this.muk = [];
        this.muk[0] = this.language.iht;
        this.muk[1] = this.language.xao;
        this.muk[2] = this.language.hdy;
        this.muk[3] = this.language.yhv
    };
    this.zon = function() {
        if (this.ymz) {
            this.ymz.clq(this.ple.seb.win.ztm);
            this.ymz.iub(this.ple.seb.win)
        }
    };
    this.riq = function() {
        if (this.vqi) {
            this.vqi.clq(this.ple.oue.ztm);
            this.vqi.iub(this.ple.oue)
        }
    };
    this.vwv = function() {
        ufn.prototype.vwv.call(this);
        var a = this.gla + this.ple.type + "/";
        this.vcv.ynj("paytable", a + "paytable.png");
        this.vcv.ynj("wild", a + "wild.png");
        this.vcv.ynj("help_top", a + "help_top.jpg")
    };
    this.uhj = function() {
        ufn.prototype.uhj.call(this);
        var a = this.szh;
        this.vcv.hmh("gamblewin", null, false, a + "win11");
        this.vcv.hmh("gamble1", null, false, a + "gamble1");
        this.vcv.hmh("gamble2", null, false, a + "gamble2")
    };
    this.ogb = function(b) {
        var a = this.nhr.ejh("winp");
        if (a) {
            a.rig(this.yhg[this.zho - 1] + " " + this.language.fpy + " " + this.txb(b), false);
            a.hgk(true)
        }
        this.nhr.wrv("paytable", "#ugb", [this.zho, false])
    };
    this.gev = function(a) {
        this.nhr.wrv("winp", "#rig", [this.yhg[this.zho - 1] + " " + this.language.fpy + " " + this.txb(a), true])
    };
    this.jwk = function() {
        this.nhr.wrv("paytable", "#rbj");
        ufn.prototype.jwk.call(this)
    };
    this.pca = function(a) {
        this.cio = a;
        if (a == vmg.ple.tvi) {
            return new yrq()
        } else {
            if (a == vmg.ple.joa) {
                return new hhq()
            } else {
                if (a == vmg.ple.nvy) {
                    return new oil()
                } else {
                    if (a == vmg.ple.fgs) {
                        return new pqx()
                    } else {
                        if (a == vmg.ple.slr) {
                            return new pot()
                        } else {
                            if (a == vmg.ple.nhq) {
                                return new vhg()
                            } else {
                                if (a == vmg.ple.tab) {
                                    return new xye()
                                } else {
                                    if (a == vmg.ple.cpz) {
                                        return new nme()
                                    } else {
                                        if (a == vmg.ple.xhs) {
                                            return new vzu()
                                        } else {
                                            if (a == vmg.ple.hso) {
                                                return new ytt()
                                            } else {
                                                if (a == vmg.ple.rlu) {
                                                    return new vdk()
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
    this.ykq = function() {
        this.style = new rta()
    }
}
ufn.prototype = new wda;

function wow() {
    vmg.uql = -1;
    vmg.yov = new ufn();
    vmg.yov.qtx({
        ple: vmg.rkn.value14
    });
    window.focus()
}

function mhf() {
    if (vmg.yov != null) {
        if (vmg.uql >= 0) {
            clearTimeout(vmg.uql)
        }
        vmg.uql = setTimeout(vmg.yov.yfx, 200)
    }
}

function lrq() {
    if (vmg.yov != null) {
        if (vmg.uql >= 0) {
            clearTimeout(vmg.uql)
        }
        vmg.uql = setTimeout(vmg.yov.ebk, 200)
    }
}
if (vmg.arb.ywh()) {
    window.onorientationchange = lrq;
    window.onresize = lrq
} else {
    window.onresize = mhf
}
if (vmg.rkn.value9) {
    window.onload = wow
} else {
    wow()
};