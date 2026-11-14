
var gameController;
var gameWS=new WebSocket(serverString);

 /*------WS ADDON--------*/
        
        
        
       
        setInterval(function(){
		//
		var j='A/u350,0';
		var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"MultiWinAM"}';j=tmpPar;
		gameWS.send(j);	
		},5000);
		
		
	
		gameWS.onmessage=function(k){
	
		    var tmpMess=k.data.split("#");

			if(tmpMess[0]=='UPDATE'   && gameController.win<=0 && gameController.zxl.qbw!=undefined){
			
			if(gameController.lmm!=parseInt(tmpMess[1])){
				
			gameController.lmm=parseInt(tmpMess[1]);	
		
			gameController.zxl.qbw.tpi("creditd", "#zev", [gameController.avr(tmpMess[1]), true]);	
			
			}
			
			
			
			
			
			}	
			
		}
		
		/*--------------*/

/////////////////


function vzy() {
    this.qgx = "Info";
    this.xnp = "DEPOSIT";
    this.audio = "AUDIO";
    this.dvt = "TIP";
    this.zuw = "TURBO";
    this.kdz = "STATISTIC";
    this.xak = "HISTORY";
    this.cph = "SHORTCUTS";
    this.rtp = "HELP";
    this.mgi = "PAYTABLE";
    this.language = "LANGUAGE";
    this.ert = ">>";
    this.leu = "<<";
    this.vkz = "Fullscreen is not supported!"
}

function tlm() {
    this.xxo = "MINIMUM BET IS";
    this.mlq = "MAX BET";
    this.vvf = "MIN.BET";
    this.yqg = "MAX.BET";
    this.kos = "BET";
    this.start = "START";
    this.rtp = "HELP";
    this.mgi = "PAYTABLE";
    this.kbd = "MENU";
    this.nfl = "MORE|GAMES";
    this.mdf = "STOP";
    this.lmm = "CREDIT";
    this.dsl = "GAME OVER";
    this.lwb = "WINNER!";
    this.ebr = "GOOD LUCK!";
    this.win = "WIN";
    this.szi = "LAST WIN";
    this.ugt = "COLLECT";
    this.bto = "COLLECT";
    this.kyj = "GAMBLE";
    this.ols = "AUTO|START";
    this.fpi = "HALF|GAMBLE";
    this.nkt = "EXIT";
    this.ner = "START GAME";
    this.uwo = "CHOOSE BET";
    this.nkd = "HALF";
    this.ret = "RETURN|TO GAME";
    this.fqc = "Total Win";
    this.dbl = "Warning";
    this.lmf = "TOTAL";
    this.twa = "PLEASE WAIT ...";
    this.zjt = "More Games";
    this.zuw = "SPEED";
    this.jmt = "Malfunction voids all pays and plays.";
    this.vsx = "CONTINUE";
    this.ypj = "AUTOSTART";
    this.lqx = "PAYTABLE";
    this.jjp = "GAMBLE";
    this.left = "LEFT";
    this.xoj = "RIGHT";
    this.ok = "OK";
    this.nbg = "CANCEL";
    this.ztu = "Gamble";
    this.sxw = "Half";
    this.nnr = "GAME RULES";
    this.byr = "GAME RULES";
    this.pgj = "Bonus!";
    this.urr = "BONUS";
    this.hxq = "PRESS ANY KEY TO CONTINUE";
    this.owc = "NOT ENOUGH CREDIT!";
    this.gej = "wins";
    this.mpe = "V A L U E";
    this.of = "OF";
    this.icz = "TOUCH THE SCREEN TO CONTINUE";
    this.khm = "LOADING ...";
    this.mbe = "LOADING HISTORY ...";
    this.ggl = "Communication Error";
    this.ojg = "You have reached one of the limits!";
    this.edt = "You have reached the maximum amount of free games!";
    this.trx = "Game will be closed";
    this.dde = "Game will be restarted";
    this.ylx = "WON";
    this.error = "ERROR";
    this.xup = "FREEPLAY";
    this.scm = "AUTO";
    this.wjk = "GAME ID";
    this.uhh = "Playing Time";
    this.pdp = "last";
    this.cqd = "games";
    this.xnp = "DEPOSIT";
    this.audio = "AUDIO";
    this.fjm = "MUSIC";
    this.qgo = "FULLSCREEN";
    this.uus = "FULLSCREEN";
    this.language = "LANGUAGE";
    this.pib = "Do not show again";
    this.pqz = "Sounds can not be loaded!";
    this.fse = "Resources missing!";
    this.oyw = "Play without sound?";
    this.uch = "SETTINGS";
    this.ddf = "Please turn your device!";
    this.qgx = "INFO";
    this.qvw = "Please disable PRIVATE MODE in your browser to play the game.";
    this.bxt = "This game is optimized for Google Chrome.";
    this.cou = "Please use the current version of";
    this.jpd = "Unfortunately this browser is not fully supported.";
    this.riy = "This game can not be started in freeplay mode!";
    this.cus = "Turn your device to the portrait mode to play like on a real slot machine!";
    this.lgj = "Adjust the game interface to your needs!";
    this.mho = "SELECT THE CORRECT COLOR TO DOUBLE THE WIN";
    this.kim = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.ful = "GAMBLE FOR A CHANCE TO INCREASE THE WIN";
    this.kdz = "Statistic";
    this.tux = "Total Games";
    this.bcz = "Total Bets";
    this.dzp = "Total Wins";
    this.rxc = "Total Play Time";
    this.ayy = "I have read this message";
    this.qqx = "EXIT|GAME";
    this.xak = "History";
    this.wli = "No games played.";
    this.state = "STATE";
    this.dpt = "Main Game";
    this.xqv = "Auto Collected";
    this.plg = "Collected";
    this.oar = "Bonusspins";
    this.qmq = "Respin";
    this.omu = "Bonus";
    this.ecn = "First Deal";
    this.uyr = "Second Deal";
    this.tan = "Third Deal";
    this.isl = "AUTOSTART SETTINGS";
    this.ssg = "Amount of games:";
    this.nra = "Stop autostart";
    this.gew = "Credit lower than:";
    this.sbg = "Credit higher than:";
    this.vpx = "Win higher than:";
    this.mgc = "The autostart will be stopped at the beginning of the bonus.";
    this.nji = "Share on Facebook";
    this.byc = "FOR MORE INFORMATION, SEE THE GAME RULES.";
    this.dth = "Reality Check";
    this.zsh = "You have requested a Reality Check.";
    this.izw = "Press HISTORY to view your game history.";
    this.klb = "Game break";
    this.lad = "Game limits";
    this.kat = "Self test";
    this.hxh = "No connection to the gaming server!";
    this.ytq = "Connection attempts";
    this.dyl = "Login failed!";
    this.gty = "Active session already exists!";
    this.wwh = "THE THEORETICAL RETURN TO THE PLAYER FOR THIS GAME IS XY."
}
tlm.prototype = new vzy;

function jni() {
    this.xxo = "РњРРќРРњРђР›Р¬РќРђРЇ РЎРўРђР’РљРђ -";
    this.mlq = "РњРђРљРЎ.|РЎРўРђР’РљРђ";
    this.vvf = "РњРРќ.РЎРўAР’РљРђ";
    this.yqg = "РњРђРљРЎ.РЎРўAР’РљРђ";
    this.kos = "РЎРўРђР’РљРђ";
    this.start = "РЎРўРђР Рў";
    this.rtp = "РџРћРњРћР©Р¬";
    this.mgi = "РўРђР‘Р›РР¦Рђ Р’Р«РџР›РђРў";
    this.kbd = "РњР•РќР®";
    this.nfl = "Р”Р РЈР“РР•|РР“Р Р«";
    this.mdf = "РЎРўРћРџ";
    this.lmm = "РљР Р•Р”РРў";
    this.dsl = "РљРћРќР•Р¦ РР“Р Р«";
    this.lwb = "РџРћР‘Р•Р”РРўР•Р›Р¬!";
    this.ebr = "Р–Р•Р›РђР•Рњ РЈР”РђР§Р!";
    this.win = "Р’Р«РР“Р Р«РЁ";
    this.szi = "РџРћРЎР›Р•Р”. Р’Р«РР“Р Р«РЁ";
    this.gej = "РІС‹Р№РіСЂС‹С€Рё";
    this.ugt = "Р—РђР‘Р РђРўР¬|Р’Р«РР“Р Р«РЁ";
    this.bto = "Р—РђР‘Р РђРўР¬ Р’Р«РР“Р Р«РЁ";
    this.kyj = "РР“Р Рђ|РќРђ|Р РРЎРљ";
    this.ols = "РђР’РўРћ|РР“Р Рђ";
    this.fpi = "РЈРњР•РќР¬РЁРРўР¬|Р РРЎРљ";
    this.of = "Р’Р«РљР›.";
    this.nkt = "Р’Р«РҐРћР”";
    this.ner = "РќРђР–РњРРўР• РЎРўРђР Рў";
    this.uwo = "Р’Р«Р‘Р•Р РРўР• РЎРўРђР’РљРЈ";
    this.nkd = "Р’Р—РЇРўР¬|1/2";
    this.hxq = "РќРђР–РњР Р›Р®Р‘РЈР® РљР›РђР’РРЁРЈ, Р§РўРћР‘Р« РџР РћР”РћР›Р–РРўР¬";
    this.icz = "РџР РРљРћРЎРќРРўР•РЎР¬ Рљ Р­РљР РђРќРЈ Р”Р›РЇ РџР РћР”РћР›Р–Р•РќРРЇ";
    this.ret = "РћР‘Р РђРўРќРћ|Р’ Р“Р›РђР’РќРЈР®|РР“Р РЈ";
    this.kol = "РњРЅРѕР¶РёС‚РµР»СЊ РґР»СЏ Р‘РѕРЅСѓСЃР°";
    this.raq = "Р‘РћРќРЈРЎ РЎРўРђР Рў Р’Р«РР“Р Р«РЁ:";
    this.fqc = "РћР‘Р©РР™ Р’Р«РР“Р Р«РЁ";
    this.khm = "Р—Р°РіСЂСѓР·РєР° ...";
    this.mbe = "Р—Р°РіСЂСѓР·РєР° РСЃС‚РѕСЂРёРё ...";
    this.error = "РћРЁРР‘РљРђ";
    this.owc = "РќР• Р”РћРЎРўРђРўРћР§РќРћ РљР Р•Р”РРўРђ.";
    this.ojg = "Р”РѕСЃС‚РёРіРЅСѓС‚ РѕРґРёРЅ РёР· Р»РёРјРёС‚РѕРІ!";
    this.dbl = "Р’РЅРёРјР°РЅРёРµ";
    this.ggl = "РѕС€РёР±РєР° РѕР±РјРµРЅР° РґР°РЅРЅС‹С…";
    this.edt = "Р’С‹ РїРѕР»СѓС‡РёР»Рё РјР°РєСЃРёРјР°Р»СЊРЅРѕРµ РєРѕР»РёС‡РµСЃС‚РІРѕ СЃРІРѕР±РѕРґРЅС‹С… РёРіСЂ!";
    this.trx = "РРіСЂР° Р·Р°РєР°РЅС‡РёРІР°РµС‚СЃСЏ";
    this.dde = "РРіСЂР° РЅР°С‡РёРЅР°РµС‚СЃСЏ Р·Р°РЅРѕРІРѕ";
    this.pgj = "Р‘РѕРЅСѓСЃ!";
    this.urr = "Р‘РћРќРЈРЎ";
    this.ylx = "Р’Р«РР“Р Р«РЁ";
    this.lmf = "Р’РЎР•Р“Рћ";
    this.twa = "РџРѕР¶Р°Р»СѓР№СЃС‚Р° РїРѕРґРѕР¶РґРёС‚Рµ ...";
    this.error = "РћРЁРР‘РљРђ";
    this.xup = "FREEPLAY";
    this.zjt = "Р’Р«Р‘РћР  РР“Р Р«";
    this.wjk = "GAME ID";
    this.uhh = "Playing Time";
    this.pdp = "РїРѕСЃР»РµРґРЅСЏСЏ";
    this.cqd = "РёРіСЂС‹";
    this.xnp = "Р”Р•РџРћР—РРў";
    this.audio = "Р—РІСѓРє";
    this.fjm = "РњРЈР—Р«РљРђ";
    this.zuw = "РЎРљРћР РћРЎРўР¬";
    this.qgo = "РџРћР›РќРћР­РљР РђРќРќР«Р™";
    this.uus = "РџРћР›РќРћР­РљР РђРќРќР«Р™";
    this.language = "РЇР—Р«Рљ";
    this.jmt = "РџР Р РќР•РРЎРџР РђР’РќРћРЎРўР Р’РЎР• РР“Р Р« Р Р’Р«РР“Р Р«РЁР РђРќРќРЈР›РР РЈР®РўРЎРЇ.";
    this.vsx = "РџР РћР”РћР›Р–РРўР¬";
    this.pib = "Р‘РѕР»СЊС€Рµ РЅРµ РїРѕРєР°Р·С‹РІР°С‚СЊ";
    this.ypj = "РђР’РўРћРР“Р Рђ";
    this.lqx = "РўРђР‘Р›РР¦Рђ Р’Р«РџР›РђРў";
    this.jjp = "РР“Р Рђ РќРђ Р РРЎРљ";
    this.pqz = "Р—РІСѓРє РЅРµ Р·Р°РіСЂСѓР¶Р°РµС‚СЃСЏ!";
    this.fse = "Р РµСЃСѓСЂСЃС‹ РѕС‚СЃСѓС‚СЃС‚РІСѓСЋС‚!";
    this.oyw = "РРіСЂР°С‚СЊ Р±РµР· Р·РІСѓРєР°?";
    this.uch = "РќРђРЎРўР РћР™РљРђ";
    this.ddf = "РџРѕРІРµСЂРЅРёС‚Рµ, РїРѕР¶Р°Р»СѓР№СЃС‚Р°, РІР°С€Рµ СѓСЃС‚СЂРѕР№СЃС‚РІРѕ!";
    this.left = "Р›Р•Р’Рћ";
    this.xoj = "РџР РђР’Рћ";
    this.scm = "РђР’РўРћ";
    this.mpe = "V A L U E";
    this.qgx = "РРќР¤РћР РњРђР¦РРЇ";
    this.qvw = "Р’С‹РєР»СЋС‡РёС‚Рµ, РїРѕР¶Р°Р»СѓР№СЃС‚Р°, Р§РђРЎРўРќР«Р™ Р Р•Р–РРњ РІ Р±СЂР°СѓР·РµСЂРµ,С‡С‚РѕР±С‹ РЅР°С‡Р°С‚СЊ РёРіСЂСѓ.";
    this.bxt = "РќР°СЃС‚РѕСЏС‰Р°СЏ РёРіСЂР° РѕРїС‚РёРјРёР·РёСЂРѕРІР°РЅР° РґР»СЏ Google Chrome.";
    this.cou = "РСЃРїРѕР»СЊР·СѓР№С‚Рµ, РїРѕР¶Р°Р»СѓР№СЃС‚Р°, Р°РєС‚СѓР°Р»СЊРЅСѓСЋ РІРµСЂСЃРёСЋ";
    this.jpd = "Рљ СЃРѕР¶Р°Р»РµРЅРёСЋ РЅРµС‚ РїРѕР»РЅРѕР№ РїРѕРґРґРµСЂР¶РєРё Р±СЂР°СѓР·РµСЂР°.";
    this.riy = "Р—Р°РїСѓСЃРє СЌС‚РѕР№ РёРіСЂС‹ РІ СЂРµР¶РёРјРµ СЃРІРѕР±РѕРґРЅС‹С… РёРіСЂ РЅРµРІРѕР·РјРѕР¶РµРЅ!";
    this.cus = "РџРѕРІРµСЂРЅРёС‚Рµ РїСЂРёР±РѕСЂ РІ РїРѕР»РѕР¶РµРЅРёРµ РїРѕСЂС‚СЂРµС‚РЅРѕРіРѕ СЂРµР¶РёРјР° РґР»СЏ РёРіСЂС‹ РєР°Рє РЅР° РЅР°СЃС‚РѕСЏС‰РµРј РёРіСЂР°Р»СЊРЅРѕРј Р°РІС‚РѕРјР°С‚Рµ!";
    this.lgj = "РџСЂРёСЃРїРѕСЃРѕР±СЊ РёРЅС‚РµСЂС„РµР№СЃ Рє СЃРІРѕРёРј РїРѕС‚СЂРµР±РЅРѕСЃС‚СЏРј!";
    this.byc = "Р”РћРџРћР›РќРРўР•Р›Р¬РќРЈР® РРќР¤РћР РњРђР¦РР® Р’Р« РњРћР–Р•РўР• РџРћР›РЈР§РРўР¬ Р’ РџР РђР’РР›РђРҐ РР“Р Р«.";
    this.dth = "РџСЂРѕРІРµСЂРєСѓ СЂРµР°Р»СЊРЅРѕСЃС‚Рё";
    this.zsh = "Р’С‹ Р·Р°РїСЂРѕСЃРёР»Рё РїСЂРѕРІРµСЂРєСѓ СЂРµР°Р»СЊРЅРѕСЃС‚Рё.";
    this.izw = "РќР°Р¶РјРёС‚Рµ РРЎРўРћР РРЇ, С‡С‚РѕР±С‹ РїРѕСЃРјРѕС‚СЂРµС‚СЊ СЃРІРѕСЋ РёСЃС‚РѕСЂРёСЋ РёРіСЂС‹.";
    this.klb = "Game break";
    this.lad = "Game limits";
    this.kat = "Self test";
    this.hxh = "РќРµС‚ СЃРІСЏР·Рё СЃ РёРіСЂРѕРІС‹Рј СЃРµСЂРІРµСЂРѕРј!";
    this.ytq = "РџРѕРїС‹С‚РєРё СЃРІСЏР·Рё";
    this.dyl = "РѕС€РёР±РєР° РїСЂРё РІС…РѕРґРµ РІ СЃРёСЃС‚РµРјСѓ!";
    this.gty = "РЎРµР°РЅСЃ РёРіСЂС‹ СѓР¶Рµ РЅР°С‡Р°Р»СЃСЏ!";
    this.nnr = "РџР РђР’РР›Рђ РР“Р Р«";
    this.byr = "РџР РђР’РР›Рђ РР“Р Р«";
    this.mho = "Р’Р«Р‘Р•Р РРўР• РџР РђР’РР›Р¬РќРЈР® РњРђРЎРўР¬, Р§РўРћР‘Р« РЈР”Р’РћРРўР¬ Р’Р«РР“Р Р«РЁ";
    this.kim = "Р’Р«Р‘Р•Р РРўР• РџР РђР’РР›Р¬РќРЈР® РњРђРЎРўР¬, Р§РўРћР‘Р« РЈР’Р•Р›РР§РРўР¬ Р’Р«РР“Р Р«РЁ Р’ 4 Р РђР—Рђ.";
    this.ful = "РЎРўРђР’Р¬РўР• РќРђ Р РРЎРљ, Р§РўРћР‘Р« РЈР’Р•Р›РР§РРўР¬ Р’Р«РР“Р Р«РЁ.";
    this.kdz = "РЎС‚Р°С‚СѓСЃ";
    this.tux = "РєРѕР»РёС‡РµСЃС‚РІРѕ РёРіСЂ";
    this.bcz = "РІСЃСЏ СЃС‚Р°РІРєР°";
    this.dzp = "РѕР±С‰РёР№ РІС‹РёРіСЂС‹С€";
    this.rxc = "РѕР±С‰РµРµ РІСЂРµРјСЏ РёРіСЂС‹";
    this.ayy = "РЇ СЃРѕРѕР±С‰РµРЅРёРµ РїСЂРѕС‡РёС‚Р°Р».";
    this.qqx = "РР“Р РЈ|Р—РђРљРћРќР§РРўР¬";
    this.ok = "OK";
    this.xak = "РСЃС‚РѕСЂРёСЏ";
    this.wli = "РЅРµС‚ РёСЃС‚РѕСЂРёРё.";
    this.state = "STATE";
    this.dpt = "Main Game";
    this.xqv = "Auto Collected";
    this.plg = "Collected";
    this.oar = "Bonusspins";
    this.ztu = "Gamble";
    this.sxw = "Half";
    this.qmq = "Respin";
    this.omu = "Bonus";
    this.ecn = "First Deal";
    this.uyr = "Second Deal";
    this.tan = "Third Deal";
    this.nbg = "РР—РњР•РќРРўР¬";
    this.isl = "РќРђРЎРўР РћР™РљРђ РђР’РўРћРЎРўРђР РўРђ";
    this.ssg = "РљРѕР»РёС‡РµСЃС‚РІРѕ РёРіСЂ:";
    this.nra = "РђРІС‚РѕСЃС‚Р°СЂС‚ РѕСЃС‚Р°РЅРѕРІРёС‚СЊ";
    this.gew = "РљСЂРµРґРёС‚ РЅРёР¶Рµ, С‡РµРј:";
    this.sbg = "РљСЂРµРґРёС‚ РІС‹С€Рµ, С‡РµРј:";
    this.vpx = "Р’С‹РёРіСЂС‹С€ РІС‹С€Рµ, С‡РµРј:";
    this.mgc = "РђРІС‚РѕСЃС‚Р°СЂС‚ РїСЂРµСЂС‹РІР°РµС‚СЃСЏ, РµСЃР»Рё РЅР°С‡РёРЅР°РµС‚СЃСЏ Р±РѕРЅСѓСЃРЅР°СЏ РёРіСЂР°.";
    this.nji = "РџРѕРґРµР»РёСЃСЊ РІ С„РµР№СЃР±СѓРє";
    this.wwh = "РўР•РћР Р•РўРР§Р•РЎРљРђРЇ Р’Р«РџР›РђРўРђ РР“Р РћРљРЈ РЎРћРЎРўРђР’Р›РЇР•Рў Р’ Р­РўРћР™ РР“Р Р• XY."
}
jni.prototype = new vzy;

function fvl() {
    this.xxo = "APUESTA MГЌNIMA ES";
    this.mlq = "APUESTA|MГЃXIMA";
    this.vvf = "APUESTA MГЌN.";
    this.yqg = "APUESTA MГЃX.";
    this.kos = "APUESTA";
    this.start = "JUGAR";
    this.rtp = "AYUDA";
    this.mgi = "PLAN DE|GANANCIAS";
    this.kbd = "MENU";
    this.nfl = "MAS|JUEGOS";
    this.mdf = "PARADA";
    this.lmm = "CREDITOS";
    this.dsl = "FIN DEL JUEGO";
    this.lwb = "ВЎGANADOR!";
    this.ebr = "ВЎMUCHA SUERTE!";
    this.win = "PREMIO";
    this.szi = "ULTIMOS PREMIO";
    this.gej = "gana";
    this.ugt = "COBRAR";
    this.bto = "COBRAR";
    this.kyj = "RIESGO";
    this.ols = "AUTO|JUGAR";
    this.fpi = "MEDIA|APUESTA";
    this.of = "DE";
    this.nkt = "SALIR";
    this.ner = "ВЎPULSE JUGAR!";
    this.uwo = "ELIJA SU APUESTA";
    this.nkd = "MITAD";
    this.hxq = "PULSE UNA TECLA PARA CONTINUAR";
    this.icz = "TOCAR LA PANTALLA PARA CONTINUAR";
    this.ret = "VOLVER|AL JUEGO";
    this.fqc = "Premio total";
    this.khm = "CARGANDO ...";
    this.mbe = "CARGANDO HISTORIAL ...";
    this.owc = "No hay bastante CREDITO";
    this.ojg = "ВЎHa alcanzado uno de los limites!";
    this.dbl = "Advertencia";
    this.ggl = "Error de comunicaciГіn";
    this.edt = "ВЎHa alcanzado la mГЎxima cantidad de juegos gratis!";
    this.trx = "El juego se cerrarГЎ";
    this.dde = "El juego se reiniciarГЎ";
    this.pgj = "ВЎBONUS!";
    this.urr = "BONUS";
    this.ylx = "GANADO";
    this.lmf = "TOTAL";
    this.hns = "TURBO SI";
    this.wgy = "TURBO NO";
    this.twa = "POR FAVOR ESPERE ...";
    this.error = "ERROR";
    this.xup = "FREEPLAY";
    this.zjt = "MAS JUEGOS";
    this.wjk = "ID DE JUEGO";
    this.uhh = "Playing Time";
    this.pdp = "ultimos";
    this.cqd = "juegos";
    this.xnp = "DEPГ“SITO";
    this.audio = "AUDIO";
    this.fjm = "MГљSICA";
    this.zuw = "VELOCIDAD";
    this.qgo = "PANTALLA COMPLETA";
    this.uus = "PANTALLA|COMPLETA";
    this.language = "IDIOMA";
    this.jmt = "UN MAL FUNCIONAMIENTO ANULA TODA JUGADA Y TODO PAGO.";
    this.vsx = "ADELANTE";
    this.pib = "No mostrar de nuevo";
    this.ypj = "AUTOJUGAR";
    this.lqx = "PLAN DE GANANCIAS";
    this.jjp = "RIESGO";
    this.pqz = "No se pueden cargar los sonidos.";
    this.fse = "Faltan recursos.";
    this.oyw = "ВїJugar sin sonido?";
    this.uch = "AJUSTES";
    this.mpe = "V A L U E";
    this.ddf = "ВЎEncienda su dispositivo!";
    this.left = "IZQUIERDA";
    this.xoj = "DERECHA";
    this.scm = "AUTOMГЃTICO";
    this.qgx = "INFORMACIГ“N";
    this.qvw = "Desactive el MODO PRIVADO en su explorador para jugar el juego.";
    this.bxt = "Este juego estГЎ optimizado para Google Chrome.";
    this.cou = "Use la versiГіn actual de";
    this.jpd = "Desafortunadamente, este explorador no es compatible.";
    this.riy = "ВЎEste juego no puede iniciarse en modo de juego libre!";
    this.cus = "ВЎGire el dispositivo a posiciГіn vertical como en la mГЎquina tragamonedas real!";
    this.lgj = "ВЎAjuste la interfaz del juego a sus necesidades!";
    this.byc = "PARA MГЃS INFORMACIГ“N MIRE LAS REGLAS DEL JUEGO.";
    this.dth = "Reality Check";
    this.zsh = "Has solicitado un Reality Check.";
    this.izw = "Pulsa HISTORIAL para visualizar tu historial de juego.";
    this.klb = "Game break";
    this.lad = "Game limits";
    this.kat = "Self test";
    this.hxh = "ВЎNo hay conexiГіn con el servidor de juegos!";
    this.ytq = "Intentos de conexiГіn";
    this.dyl = "ВЎNo pudo iniciarse la sesiГіn!";
    this.gty = "ВЎYa existe una sesiГіn activa!";
    this.nnr = "REGLAS DEL JUEGO";
    this.byr = "REGLAS|DEL JUEGO";
    this.mho = "SELECCIONAR EL COLOR CORRECTO PARA DOBLAR EL PREMIO";
    this.kim = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.ful = "JUGAR UNA POSIBILIDAD DE MULTIPLICAR LA GANANCIA";
    this.kdz = "ESTADO";
    this.tux = "NГєmero de juegos";
    this.bcz = "Apuesta total";
    this.dzp = "Ganancia total";
    this.rxc = "Tiempo total de juego";
    this.ayy = "He leГ­do el mensaje.";
    this.qqx = "TERMINAR|JUEGO";
    this.ok = "OK";
    this.xak = "HISTORIAL";
    this.wli = "AГєn no hay juegos.";
    this.state = "Estado";
    this.dpt = "Juego principal";
    this.xqv = "Ganancia automГЎtica";
    this.plg = "Ganancia";
    this.oar = "BONUSSPINS";
    this.ztu = "Apuesta";
    this.sxw = "Mitad";
    this.qmq = "Respin";
    this.omu = "Bonus";
    this.ecn = "Primera mano";
    this.uyr = "Segunda mano";
    this.tan = "Tercera mano";
    this.nbg = "CANCELAR";
    this.isl = "CONFIGURACIONES DE JUEGO AUTOMГЃTICO";
    this.ssg = "Cantidad de juegos:";
    this.nra = "Detener juego automГЎtico";
    this.gew = "CrГ©dito menor que:";
    this.sbg = "CrГ©dito mayor que:";
    this.vpx = "Ganancia mayor que:";
    this.mgc = "El juego automГЎtico se detendrГЎ al principio del bonus.";
    this.nji = "Compartir en Facebook";
    this.wwh = "EL PORCENTAJE TEГ“RICO DE DEVOLUCIГ“N AL JUGADOR PARA ESTE JUEGO ES XY."
}
fvl.prototype = new vzy;

function rmx() {
    this.xxo = "MINIMALER EINSATZ IST";
    this.mlq = "MAX. EINSATZ";
    this.vvf = "MIN. EINSATZ";
    this.yqg = "MAX. EINSATZ";
    this.kos = "EINSATZ";
    this.start = "START";
    this.rtp = "HILFE";
    this.mgi = "GEWINNPLAN";
    this.kbd = "MENГњ";
    this.nfl = "MEHR|SPIELE";
    this.lmm = "GUTHABEN";
    this.dsl = "SPIEL ENDE";
    this.lwb = "GEWINNER!";
    this.ebr = "VIEL GLГњCK!";
    this.win = "GEWINN";
    this.szi = "LETZTER GEWINN";
    this.gej = "gewinnt";
    this.ugt = "NEHMEN";
    this.bto = "NEHMEN";
    this.kyj = "RISIKO";
    this.ols = "AUTO|START";
    this.fpi = "HALF|GAMBLE";
    this.mdf = "STOP";
    this.of = "VON";
    this.nkt = "EXIT";
    this.ner = "START DRГњCKEN";
    this.uwo = "EINSATZ WГ„HLEN";
    this.nkd = "TEILEN";
    this.hxq = "DRГњCKE EINE TASTE UM FORTZUFAHREN";
    this.icz = "BERГњHRE DEN BILDSCHIRM UM FORTZUFAHREN";
    this.ret = "ZURГњCK|ZUM SPIEL";
    this.fqc = "Gesamt Gewinn";
    this.khm = "LГ„DT ...";
    this.mbe = "LГ„DT HISTORIE ...";
    this.owc = "NICHT GENUG GUTHABEN!";
    this.dbl = "Achtung";
    this.ggl = "Kommunikationsfehler";
    this.ojg = "Sie haben eines der Limits erreicht!";
    this.edt = "Sie haben die maximale Anzahl an Freispielen erreicht!";
    this.trx = "Das Spiel wird beendet";
    this.dde = "Das Spiel wird neu gestartet";
    this.pgj = "Bonus!";
    this.urr = "BONUS";
    this.ylx = "GEWONNEN";
    this.lmf = "TOTAL";
    this.twa = "BITTE WARTEN ...";
    this.error = "FEHLER";
    this.xup = "FREEPLAY";
    this.zjt = "MEHR|SPIELE";
    this.wjk = "SPIEL ID";
    this.uhh = "Spielzeit";
    this.pdp = "Letzten";
    this.cqd = "Spiele";
    this.xnp = "GUTHABEN";
    this.audio = "AUDIO";
    this.fjm = "MUSIK";
    this.zuw = "SPEED";
    this.qgo = "VOLLBILD";
    this.uus = "VOLLBILD";
    this.language = "SPRACHE";
    this.jmt = "Bei GerГ¤testГ¶rung keine Haftung.";
    this.vsx = "WEITER";
    this.pib = "Nicht noch einmal anzeigen";
    this.ypj = "AUTOSTART";
    this.jjp = "RISIKO";
    this.lqx = "GEWINNPLAN";
    this.pqz = "Sounds kГ¶nnen nicht geladen werden!";
    this.fse = "Ressourcen fehlen!";
    this.oyw = "Ohne Ton spielen?";
    this.uch = "EINSTELL.";
    this.ddf = "Bitte drehen sie ihr GerГ¤t!";
    this.left = "LINKS";
    this.xoj = "RECHTS";
    this.scm = "AUTOM.";
    this.mpe = "V A L U E";
    this.qgx = "INFO";
    this.qvw = "Bitte deaktivieren sie den PRIVATEN MODUS im Browser um das Spiel zu starten";
    this.bxt = "Dieses Spiel ist optimiert fГјr Google Chrome.";
    this.cou = "Bitte benutzen sie die aktuelle Version von";
    this.jpd = "Leider wird dieser Browser nicht unterstГјtzt.";
    this.riy = "Dieses Spiel kann nicht im Freispiel-Modus gestartet werden!";
    this.cus = "Drehen sie ihr GerГ¤t in den Portraitmodus, um wie auf einem echten Automaten zu spielen!";
    this.lgj = "Passe die SpieloberflГ¤che deinen BedГјrfnissen an!";
    this.byc = "ZUSГ„TZLICHE INFORMATION FINDEN SIE IN DEN SPIELREGELN.";
    this.dth = "Reality Check";
    this.zsh = "Du hast einen Reality Check angefordert.";
    this.izw = "DrГјcke HISTORIE um deine Spielhistorie anzuzeigen.";
    this.klb = "Spielpause";
    this.lad = "Spiellimits";
    this.kat = "Selbsttest";
    this.hxh = "Keine Verbindung zum Gameserver!";
    this.ytq = "Verbindungsversuche";
    this.dyl = "Anmeldung fehlgeschlagen!";
    this.gty = "Es ist bereits eine Session aktiv!";
    this.nnr = "SPIELREGELN";
    this.byr = "SPIELREGELN";
    this.mho = "WГ„HLE DIE RICHTIGE FARBE UM DEN GEWINN ZU VERDOPPELN";
    this.kim = "WГ„HLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.ful = "DRГњCKE RISIKO FГњR EINE CHANCE DEN GEWINN ZU VERVIELFACHEN";
    this.kdz = "Statistik";
    this.tux = "Anzahl der Spiele";
    this.bcz = "Gesamteinsatz";
    this.dzp = "Gesamtgewinn";
    this.rxc = "Gesamtspielzeit";
    this.ayy = "Ich habe die Nachricht gelesen";
    this.qqx = "SPIEL|BEENDEN";
    this.ok = "OK";
    this.xak = "Historie";
    this.wli = "Es existieren noch keine Spiele.";
    this.state = "STATUS";
    this.dpt = "Hauptspiel";
    this.xqv = "Auto. Nehmen";
    this.plg = "Genommen";
    this.oar = "Bonusspins";
    this.ztu = "Risiko";
    this.sxw = "Halb";
    this.qmq = "Respin";
    this.omu = "Bonus";
    this.ecn = "Erster Deal";
    this.uyr = "Zweiter Deal";
    this.tan = "Dritter Deal";
    this.nbg = "ABBRUCH";
    this.isl = "AUTOSTART EINSTELLUNGEN";
    this.ssg = "Anzahl der Spiele: ";
    this.nra = "Autostart anhalten";
    this.gew = "Guthaben niedriger als:";
    this.sbg = "Guthaben hГ¶her als:";
    this.vpx = "Gewinn hГ¶her als:";
    this.mgc = "Der Autostart wird am Bonusbeginn gestoppt.";
    this.nji = "Auf Facebook teilen";
    this.wwh = "DIE THEORETISCHE AUSZAHLUNG AN DEN SPIELER FГњR DIESES SPIEL BETRГ„GT XY."
}
rmx.prototype = new vzy;

function wmh() {
    this.xxo = "MINIMUM BANKO";
    this.mlq = "MAKS. BANKO";
    this.vvf = "MIN. BANKO";
    this.yqg = "MAKS. BANKO";
    this.kos = "BANKO";
    this.start = "BAЕћLAT";
    this.rtp = "YARDIM";
    this.mgi = "KazanГ§ planД±";
    this.kbd = "MENГњ";
    this.nfl = "DAHA Г‡OK|OYUN";
    this.mdf = "DUR";
    this.lmm = "KREDI";
    this.dsl = "OYUN BД°TTД°";
    this.lwb = "KAZANDINIZ!";
    this.ebr = "BOL ЕћANSLAR!";
    this.win = "KAZANГ‡";
    this.szi = "SON KAZANГ‡";
    this.gej = "kazanД±r";
    this.ugt = "ALMAK";
    this.bto = "ALMAK";
    this.kyj = "RIZIKO";
    this.ols = "OTOMATД°K|BAЕћLATMA";
    this.fpi = "YARI|RIZIKO";
    this.of = "VEREN";
    this.nkt = "Г‡IKIЕћ";
    this.ner = "BAЕћLAT TUЕћUNA BASINIZ";
    this.uwo = "BANKO SEГ‡Д°NД°Z";
    this.nkd = "ALMAK|1/2";
    this.hxq = "DEVAM ETMEK IГ‡IN KLAVYEDE HER HANGI BIR YERE BASINIZ";
    this.icz = "DEVAM ETMEK Д°Г‡Д°N EKRANA DOKUN";
    this.ret = "OYUNA|GERI";
    this.fqc = "Toplam kazanГ§";
    this.khm = "YГњKLГњYOR ...";
    this.mbe = "GEГ‡MIЕћI YГњKLГњYOR ...";
    this.owc = "YETERSД°Z KREDД°.";
    this.ojg = "Limitlerin birine ulaЕџtД±nД±z!";
    this.dbl = "Dikkat";
    this.ggl = "Д°letiЕџim hatasД±";
    this.edt = "Maksimum bedava oyun sayД±sД±na ulaЕџmД±Еџ bulunuyorsunuz!";
    this.trx = "Oyun sonlandД±rД±lД±yor";
    this.dde = "Oyun yeniden baЕџlatД±lД±yor";
    this.pgj = "Bedava oyun primi!";
    this.urr = "PRД°M";
    this.ylx = "KAZANDINIZ";
    this.lmf = "TOPLAM";
    this.twa = "LГњTFEN BEKLEYIN ...";
    this.error = "HATA";
    this.xup = "FREEPLAY";
    this.zjt = "DAHA Г‡OK OYUN";
    this.wjk = "OYUN ID";
    this.uhh = "OYUN SГњRESД°";
    this.pdp = "Son";
    this.cqd = "oyun";
    this.xnp = "BAKIYE";
    this.audio = "AUDIO";
    this.fjm = "MГњZIK";
    this.zuw = "HД±Z";
    this.qgo = "TAM EKRAN";
    this.uus = "TAM EKRAN";
    this.language = "LISAN";
    this.jmt = "CIHAZ ARIZALANDIДћINDA MESULIYET KABUL EDILMEZ.";
    this.vsx = "DEVAM";
    this.pib = "Tekrar gГ¶sterme";
    this.ypj = "OTOMATД°K|BAЕћLATMA";
    this.jjp = "RIZIKO";
    this.lqx = "KazanГ§ planД±";
    this.pqz = "Sesler yГјklenemiyorlar!";
    this.fse = "Kaynaklar eksik!";
    this.oyw = "Sessiz oynayacak mД±sД±nД±z?";
    this.uch = "AYARLAR";
    this.ddf = "LГјtfen cihazД±nД±nД± dГ¶ndГјrГјn!";
    this.left = "SOL";
    this.xoj = "SAДћ";
    this.scm = "OTOMATIK";
    this.mpe = "V A L U E";
    this.qgx = "BILGI";
    this.qvw = "Oyunu baЕџlatmak iГ§in lГјtfen aДџ tarayД±cД±nД±zda Г–ZEL MOD'u kapatД±nД±z.";
    this.bxt = "Bu oyun Google Chrome iГ§in optimize edilmiЕџtir.";
    this.cou = "'nin gГјncel versiyonunu kullanД±n";
    this.jpd = "Maalesef bu aДџ tarayД±cД±sД± tam olarak desteklenmiyor.";
    this.riy = "Bu oyunun serbest modunda baЕџlatД±lmasД± mГјmkГјn deДџildir!";
    this.cus = "CihazД±nД±zД± portre moduna Г§evirerek gerГ§ek bir otomatikte oynar gibi oynayД±n!";
    this.lgj = "Oyun yГјzeyini kendi ihtiyaГ§larД±na gГ¶re dГјzenle!";
    this.byc = "DAHA FAZLA BД°LGД°YД° OYUN KURALLARINDA BULABД°LД°RSД°NД°Z.";
    this.dth = "Reality Check";
    this.zsh = "Reality Check talebinde bulundun.";
    this.izw = "Oyun geГ§miЕџini gГ¶rmek iГ§in GEГ‡MД°Ећ tuЕџuna bas.";
    this.klb = "Game break";
    this.lad = "Game limits";
    this.kat = "Self test";
    this.hxh = "Oyun server'ine baДџlantД± yok!";
    this.ytq = "BaДџlantД± denemeleri";
    this.dyl = "GiriЕџ hatasД±!";
    this.gty = "Aktif bir oturumunuz bulunuyor!";
    this.nnr = "OYUNUN KURALLARД±";
    this.byr = "OYUNUN|KURALLARД±";
    this.mho = "DOДћRU RENGД° SEГ‡EREK KAZANCININ Д°KД°YE KATLARSIN";
    this.kim = "DOДћRU KART RENGД°NД° SEГ‡EREK KAZANCINI DГ–RDE KATLARSIN.";
    this.ful = "KAZANCI KATLAMA ЕћANSI Д°Г‡Д°N GAMBLE (RД°SK)";
    this.kdz = "Д°statistik";
    this.tux = "Toplam oyunlar";
    this.bcz = "Toplam bankolar";
    this.dzp = "Toplam kazanГ§lar";
    this.rxc = "Toplam oyun sГјresi";
    this.ayy = "Bu mesajД± okudum.";
    this.qqx = "OYUNU|KAPAT";
    this.ok = "OK";
    this.xak = "GEГ‡MД°Ећ";
    this.wli = "HenГјz hiГ§ bir oyun yok.";
    this.state = "STATГњ";
    this.dpt = "Ana oyun";
    this.xqv = "Otomatik olarak kazandД±nД±z";
    this.plg = "ToplandД±";
    this.oar = "Prim oyunlar";
    this.ztu = "Riziko";
    this.sxw = "YarД±m";
    this.qmq = "Respin";
    this.omu = "Prim";
    this.ecn = "Д°lk anlaЕџma";
    this.uyr = "Д°kinci anlaЕџma";
    this.tan = "ГњГ§ГјncГј anlaЕџma";
    this.nbg = "Д°PTAL";
    this.isl = "OTOMATIK BAЕћLAT AYARLARД±";
    this.ssg = "Oyun sayД±sД±:";
    this.nra = "Otomatik baЕџlatmayД± durdur";
    this.gew = "Kredi bundan dГјЕџГјktГјr:";
    this.sbg = "Kredi bundan yГјksektir:";
    this.vpx = "KazanГ§ bundan yГјksektir:";
    this.mgc = "Otomatik baЕџlatma prim baЕџlangД±cД±nda durduruluyor.";
    this.nji = "Facebook'ta paylaЕџ";
    this.wwh = "OYUNCUYA TEORIK OLARAK Г–DENECEK MEBLAДћ % XY ORANД±NDADД±R."
}
wmh.prototype = new vzy;

function paj() {
    this.xxo = "MINIMГЃLNГЌ SГЃZKA JE";
    this.mlq = "MAX. SГЃZKA";
    this.vvf = "MIN. SГЃZKA";
    this.yqg = "MAX. SГЃZKA";
    this.kos = "SГЃZKA";
    this.start = "START";
    this.rtp = "POMOC";
    this.mgi = "VГќHERNГЌ PLГЃN";
    this.kbd = "MENU";
    this.nfl = "DALЕ ГЌ|HRY";
    this.mdf = "STOP";
    this.lmm = "KREDIT";
    this.dsl = "KONEC HRY";
    this.lwb = "VГЌTEZ!";
    this.ebr = "HODNE Е TESTГЌ!";
    this.win = "VГќHRA";
    this.szi = "POSL. VГќHRA";
    this.gej = "vyhrГЎvГЎ";
    this.ugt = "VEZMI";
    this.bto = "VEZMI";
    this.kyj = "HRA";
    this.ols = "AUTO|START";
    this.fpi = "POLOVICNГЌ|HRA";
    this.of = "Z";
    this.nkt = "VГќSTUP";
    this.ner = "START HRY";
    this.uwo = "VYBRAT SГЃZKU";
    this.nkd = "POLOVINA";
    this.hxq = "POKRACUJ DOTEKEM OBRAZOVKY";
    this.icz = "PRO POKRAДЊOVГЃNГЌ SE DOTKNДљTE OBRAZOVKY";
    this.ret = "ZPET|DO HRY";
    this.fqc = "CelkovГЎ vГЅhra";
    this.khm = "NAHRГЃVГЃM ...";
    this.mbe = "NAHRГЃVГЃM HISTORII ...";
    this.owc = "NedostatecnГЅ kredit.";
    this.ojg = "DosГЎhli jste jednoho z limitЕЇ!";
    this.dbl = "VarovГЎnГ­";
    this.ggl = "Chyba komunikace";
    this.edt = "DosГЎhli jste maximГЎlnГ­ho poДЌtu her zdarma!";
    this.trx = "Hra se zavЕ™e";
    this.dde = "Hra se restartuje";
    this.pgj = "Bonus!";
    this.urr = "BONUS";
    this.ylx = "VYHRГЃL";
    this.lmf = "CELKOVГЃ";
    this.twa = "ДЊEKEJTE PROSГЌM ...";
    this.error = "ERROR";
    this.xup = "FREEPLAY";
    this.zjt = "DALЕ ГЌ HRY";
    this.wjk = "ID HRY";
    this.uhh = "HRACГЌ DOBA";
    this.pdp = "PoslednГ­";
    this.cqd = "hry";
    this.xnp = "MГЌT K DOBRU";
    this.audio = "AUDIO";
    this.fjm = "MUZIKA";
    this.zuw = "RYCHLOST";
    this.qgo = "FULLSCREEN";
    this.uus = "FULLSCREEN";
    this.language = "ЕEДЊ";
    this.jmt = "PЕ™i poruЕЎe jsou vЕЎechny hry a vГЅhry neplatnГ©.";
    this.vsx = "POKRAДЊUJ";
    this.pib = "Nezobrazujte znovu";
    this.ypj = "AUTOSTART";
    this.jjp = "HRA";
    this.lqx = "VГќHERNГЌ PLГЃN";
    this.pqz = "Zvuk nelze nahrГЎt!";
    this.fse = "ChybГ­ zdroje!";
    this.oyw = "HrГЎt bez zvuku?";
    this.uch = "NASTAVENГЌ";
    this.mpe = "V A L U E";
    this.ddf = "OtoДЌte svГ© zaЕ™Г­zenГ­, prosГ­m!";
    this.left = "VLEVO";
    this.xoj = "VPRAVO";
    this.scm = "AUTO";
    this.qgx = "INFORMACE";
    this.qvw = "Abyste mohli hrГЎt hru, vypnД›te SOUKROMГќ REЕЅIM ve svГ©m prohlГ­ЕѕeДЌi, prosГ­m.";
    this.bxt = "Tato hra je optimalizovanГЎ pro Google Chrome.";
    this.cou = "PouЕѕijte aktuГЎlnГ­ verzi";
    this.jpd = "Tento prohlГ­ЕѕeДЌ nenГ­ bohuЕѕel plnД› podporovГЎn.";
    this.riy = "Tuto hru nelze spustit v reЕѕimu hry zdarma!";
    this.cus = "OtoДЌte zaЕ™Г­zenГ­ tak, aby zobrazilo hru jako na skuteДЌnГ©m automatu!";
    this.lgj = "Nastavte rozhranГ­ hry svГЅm potЕ™ebГЎm!";
    this.byc = "VГЌCE INFORMACГЌ NALEZNETE V PRAVIDLECH HRY.";
    this.dth = "Reality Check";
    this.zsh = "PoЕѕГЎdali jste o kontrolu reality.";
    this.izw = "Pro zobrazenГ­ vaЕЎГ­ hernГ­ historie stisknД›te HISTORIE.";
    this.klb = "Game break";
    this.lad = "Game limits";
    this.kat = "Self test";
    this.hxh = "ЕЅГЎdnГ© pЕ™ipojenГ­ k hernГ­mu serveru!";
    this.ytq = "Pokusy o pЕ™ipojenГ­";
    this.dyl = "PЕ™ihlГЎЕЎenГ­ se nezdaЕ™ilo!";
    this.gty = "AktivnГ­ relace jiЕѕ existuje!";
    this.nnr = "PRAVIDLA HRY";
    this.byr = "PRAVIDLA HRY";
    this.mho = "VYBRAT SPRГЃVNOU BARVU KE ZDVOJNГЃSOBENГЌ VГќHRY";
    this.kim = "VYBRAT SPRГЃVNOU BARVU KARTY KE ZДЊTYЕNГЃSOBENГЌ VГќHRY";
    this.ful = "VSADIT NA Е ANCI ZVГќЕ IT VГќHRU";
    this.kdz = "Statistika";
    this.tux = "Celkem hry";
    this.bcz = "Celkem sГЎzky";
    this.dzp = "Celkem vГЅhry";
    this.rxc = "CelkovГЎ hracГ­ doba";
    this.ayy = "ZprГЎvu jsem ДЌetl/a.";
    this.qqx = "UKONДЊIT|HRU";
    this.ok = "OK";
    this.xak = "HISTORIE";
    this.wli = "ЕЅГЎdnГ© odehranГ© hry.";
    this.state = "STATUS";
    this.dpt = "HlavnГ­ hra";
    this.xqv = "Automaticky vybrГЎno";
    this.plg = "VybrГЎno";
    this.oar = "Bonusspins";
    this.ztu = "Hra";
    this.sxw = "Polovina";
    this.qmq = "Respin";
    this.omu = "Bonus";
    this.ecn = "PrvnГ­ vyloЕѕenГ­";
    this.uyr = "DruhГ© vyloЕѕenГ­";
    this.tan = "TЕ™etГ­ vyloЕѕenГ­";
    this.nbg = "ZRUЕ IT";
    this.isl = "NASTAVENГЌ AUTOMATICKГ‰HO STARTU";
    this.ssg = "MnoЕѕstvГ­ her:";
    this.nra = "Zastavit automatickГЅ start";
    this.gew = "Kredit niЕѕЕЎГ­ neЕѕ:";
    this.sbg = "Kredit vyЕЎЕЎГ­ neЕѕ:";
    this.vpx = "VГЅhra vyЕЎЕЎГ­ neЕѕ:";
    this.mgc = "AutomatickГЅ start se zastavГ­ na zaДЌГЎtku bonusu.";
    this.nji = "SdГ­let na Facebooku";
    this.wwh = "TEORETICKГЃ NГЃVRATNOST HRГЃДЊI V TГ‰TO HЕE JE XY."
}
paj.prototype = new vzy;

function drg() {
    this.xxo = "MIINIMUMPANUS ON";
    this.mlq = "MAX PANUS";
    this.vvf = "MIN PANUS";
    this.yqg = "MAX PANUS";
    this.kos = "PANUS";
    this.start = "START";
    this.rtp = "ABI";
    this.mgi = "VГ•IDU TABEL";
    this.kbd = "MENГњГњ";
    this.nfl = "VALI|MГ„NG";
    this.mdf = "STOPP";
    this.lmm = "KREDIIT";
    this.dsl = "MГ„NG ON LГ•PPENUD!";
    this.lwb = "OLED VГ•ITNUD!";
    this.ebr = "SOOVIME EDU!";
    this.win = "VГ•IT";
    this.szi = "EELMINE VГ•IT";
    this.ugt = "VГ•TA|VГ•IT";
    this.bto = "VГ•TA VГ•IT";
    this.kyj = "DUUBEL|DAMINE";
    this.ols = "AUTO|START";
    this.fpi = "POOLITA|DUUBELDA";
    this.of = "OF";
    this.nkt = "VГ„LJA";
    this.ner = "ALUSTA MГ„NGU";
    this.uwo = "VALI PANUS";
    this.nkd = "POOLIK";
    this.hxq = "JГ„TKAMISEKS VAJUTAGE ГњKSKГ•IK MILLIST NUPPU";
    this.ret = "TAGASI|MГ„NGU";
    this.fqc = "KoguvГµit";
    this.owc = "POLE PIISAVALT KREDIITI.";
    this.pgj = "Boonus!";
    this.urr = "BOONUS";
    this.twa = "PALUN OODAKE ...";
    this.zjt = "Vali MГ¤ng";
    this.audio = "HELI";
    this.fjm = "MUUSIKA";
    this.zuw = "KIIRUS";
    this.qgo = "TГ„ISEKRAAN";
    this.uus = "TГ„ISEKRAAN";
    this.jmt = "RIKKE KORRAL KГ•IK MГ„NGUD JA VГ•IDUD TГњHISTATAKSE.";
    this.guq = "MГ„NGU LГ•PP";
    this.language = "KEEL";
    this.nnr = "MГ„NGUREEGLID";
    this.byr = "MГ„NGUREEGLID";
    this.khm = "LAADIMINE ...";
    this.mbe = "AJALOO LAADIMINE ...";
    this.ojg = "Oled saavutanud Гјhe limiitidest!";
    this.dbl = "Hoiatus";
    this.ggl = "Гњhenduse viga";
    this.edt = "Te olete jГµudnud tasuta mГ¤ngude maksimaalse arvuni!";
    this.trx = "MГ¤ng suletakse";
    this.dde = "MГ¤ng taaskГ¤ivitatakse";
    this.icz = "JГ„TKAMISEKS PUUDUTA EKRAANI";
    this.uch = "SГ„TTED";
    this.mpe = "V A L U E";
    this.ddf = "PГ¶Г¶rake oma seadet!";
    this.qgx = "INFO";
    this.qvw = "MГ¤ngu mГ¤ngimiseks keelake oma brauseris PRIVAATREЕЅIIM.";
    this.bxt = "See mГ¤ng on optimeeritud Google Chrome jaoks.";
    this.cou = "Palun kasutage praeguse versiooni";
    this.jpd = "Kahjuks ei toetata seda brauserit tГ¤ielikult.";
    this.riy = "Seda mГ¤ngu ei saa tasuta mГ¤ngimise reЕѕiimis kГ¤ivitada!";
    this.left = "VASAK";
    this.xoj = "PAREM";
    this.scm = "AUTOMAATNE";
    this.ylx = "VГ•ITIS";
    this.gej = "vГµidetud";
    this.lmf = "KOKKU";
    this.error = "VIGA";
    this.xup = "TASUTA MГ„NG";
    this.wjk = "MГ„NGU ID";
    this.uhh = "MГ„NGUAEG";
    this.pdp = "Viimased";
    this.cqd = "mГ¤ngu";
    this.xnp = "SISSEMAKSE";
    this.mho = "VГ•IDU DUUBELDAMISEKS VALI Г•IGE VГ„RV";
    this.kim = "VГ•IDU NELJAKORDISTAMISEKS VALI Г•IGE MAST";
    this.ful = "RISKI, ET SUURENDADA OMA VГ•ITU";
    this.kdz = "Statistika";
    this.tux = "MГ¤nge kokku";
    this.bcz = "Kogupanus";
    this.dzp = "KoguvГµit";
    this.rxc = "MГ¤nguaeg kokku";
    this.ayy = "Olen seda teadet lugenud.";
    this.qqx = "MГ„NGU|LГ•PP";
    this.xak = "Ajalugu";
    this.wli = "Гњhtegi mГ¤ngu ei ole mГ¤ngitud.";
    this.state = "OLEK";
    this.dpt = "PГµhimГ¤ng";
    this.xqv = "Automaatne vГ¤ljavГµtt";
    this.plg = "VГ¤lja vГµetud";
    this.oar = "Bonusspins";
    this.ztu = "Gamble";
    this.sxw = "Pool";
    this.qmq = "Respin";
    this.omu = "Boonus";
    this.ecn = "Esimene jagamine";
    this.uyr = "Teine jagamine";
    this.tan = "Kolmas jagamine";
    this.vsx = "JГ„TKA";
    this.pib = "Г„ra seda enam nГ¤ita";
    this.ypj = "AUTOSTART";
    this.jjp = "DUUBEL DAMINE";
    this.lqx = "VГ•IDU TABEL";
    this.pqz = "Helisid ei saa laadida!";
    this.fse = "Ressursid puuduvad!";
    this.oyw = "Soovid mГ¤ngida ilma helideta?";
    this.cus = "Keera seade vertikaalasendisse, et mГ¤ngida nagu pГ¤ris mГ¤nguautomaadil!";
    this.lgj = "Kohanda mГ¤nguliidest vastavalt oma vajadustele!";
    this.byc = "VAATA LISAINFOT MГ„NGUREEGLITEST.";
    this.nbg = "TГњHISTA";
    this.isl = "AUTOMAATKГ„IVITUSE SГ„TTED";
    this.ssg = "MГ¤ngude arv:";
    this.nra = "Peata automaatkГ¤ivitus";
    this.gew = "Krediit madalam kui:";
    this.sbg = "Krediit kГµrgem kui:";
    this.vpx = "VГµit suurem kui:";
    this.mgc = "AutomaatkГ¤ivitus peatatakse boonuse alguses.";
    this.nji = "Jaga Facebookis";
    this.ok = "OK";
    this.dth = "Reality Check";
    this.zsh = "Olete soovinud reaalsuskontrolli.";
    this.izw = "Oma mГ¤nguajaloo vaatamiseks vajutage AJALUGU.";
    this.klb = "Game break";
    this.lad = "Game limits";
    this.kat = "Self test";
    this.hxh = "Puudub Гјhendus mГ¤nguserveriga!";
    this.ytq = "Гњhenduskatsed";
    this.dyl = "Sisselogimine nurjus!";
    this.gty = "Aktiivne seanss on juba olemas!";
    this.wwh = "SELLE MГ„NGU MГ„NGIJA TEOREETILINE TULU ON XY."
}
drg.prototype = new vzy;

function xel() {
    this.xxo = "О¤Оџ О•О›AО§О™ОЈО¤Оџ ОЈО¤ОџIО§О—ОњО‘ О•IОќО‘О™";
    this.mlq = "ОњEО“О™ОЈО¤Оџ ОЈО¤ОџIО§О—ОњО‘";
    this.vvf = "EО›О‘О§. ОЈО¤ОџО™О§О—ОњО‘";
    this.yqg = "ОњО•О“. ОЈО¤ОџО™О§О—ОњО‘";
    this.kos = "ОЈО¤ОџIО§О—ОњО‘";
    this.start = "EОќО‘ОЎОћО—";
    this.rtp = "О’ОџHОО•О™О‘";
    this.mgi = "О IОќО‘ОљО‘ОЈ ОљО•ОЎО”О©Оќ";
    this.kbd = "ОњО•ОќОџY";
    this.nfl = "О О•ОЎО™ОЈ.|О О‘О™О§ОќIО”О™О‘";
    this.mdf = "ОЈО¤ОџО ";
    this.lmm = "О IОЈО¤О©ОЈО—";
    this.dsl = "TEО›ОџОЈ О О‘О™О§ОќО™О”О™ОџY!";
    this.lwb = "ОќО™ОљО—О¤О—ОЈ!";
    this.ebr = "ОљО‘О›О— О¤ОҐО§О—!";
    this.win = "ОљEОЎО”ОџОЈ";
    this.szi = "О¤О•О›О•ОҐО¤О‘IОџ ОљEОЎО”ОџОЈ";
    this.ugt = "О О‘ОЎО‘О›О‘О’H";
    this.bto = "О О‘ОЎО‘О›О‘О’H";
    this.kyj = "О¤О–ОџО“AОЎО©";
    this.ols = "О‘ОҐО¤OОњО‘О¤О—|EОќО‘ОЎОћО—";
    this.fpi = "О О‘ОЎО‘О›О‘О’H|О¤О–ОџО“AОЎО©";
    this.of = "О‘О O";
    this.nkt = "EОћОџО”ОџОЈ";
    this.ner = "О‘ОЎО§О™О–О•О™ О О‘О™О§ОќО™О”О™";
    this.uwo = "О•О О™О›О•ОћО¤О• ОЈО¤ОџО™О§О—ОњО‘";
    this.nkd = "О О‘ОЎО‘О›О‘О’H|1/2";
    this.hxq = "О AО¤О—ОЈО• EОќО‘ О О›HОљО¤ОЎОџ О“О™О‘ ОќО‘ ОЈОҐОќО•О§IОЈО•О™ОЈ";
    this.ret = "EО О™ОЈО¤ОЎОџО¦H|ОЈО¤Оџ|О О‘О™О§ОќIО”О™";
    this.fqc = "ОЈОҐОќОџО›О™ОљO ОљEОЎО”ОџОЈ";
    this.owc = "О”О•Оќ О‘ОЎОљО•О¤H О IОЈО¤О©ОЈО—.";
    this.pgj = "ОњПЂПЊОЅОїП…Пѓ!";
    this.urr = "ОњО OОќОџОҐОЈ";
    this.twa = "О О‘ОЎО‘ОљО‘О›О© О О•ОЎО™ОњEОќО•О¤О• ...";
    this.zjt = "О О•ОЎО™ОЈ.|О О‘О™О§ОќIО”О™О‘";
    this.audio = "О—О§ОџОЈ";
    this.fjm = "ОњОџОҐОЈО™ОљО‰";
    this.zuw = "О¤О‘О§YО¤О—О¤О‘";
    this.qgo = "О О›О—ОЎО—ОЈ ОџООџОќО—";
    this.uus = "О О›О—ОЎО—ОЈ|ОџООџОќО—";
    this.jmt = "ОЈО• О О•ОЎО™О О¤О©ОЈО— О’О›О‘О’О—ОЈ О¤О—ОЈ ОЈОҐОЈОљО•ОҐО—ОЈ О”О•Оќ О‘ОќО‘О›О‘ОњО’О‘ОќОџОҐОњО• ОљО‘ОњО™О‘ О•ОҐООҐОќО—.";
    this.language = "О“О›О©ОЈОЈО‘";
    this.lmf = "ОЈYОќОџО›Оџ";
    this.nnr = "ОљО‘ОќОЊОќО•П‚ О О‘О™О§ОќО™О”О™ОџОЋ";
    this.byr = "ОљО‘ОќОЊОќО•П‚|О О‘О™О§ОќО™О”О™ОџОЋ";
    this.khm = "О¦ОџОЎО¤О©ОЈО— ...";
    this.mbe = "О¦ОџОЎО¤О©ОЈО— О™ОЈО¤ОџОЎО™ОљОџОҐ...";
    this.ojg = "ОћОµПЂОµПЃО¬ПѓО±П„Оµ ОєО¬ПЂОїО№Ої ПЊПЃО№Ої!";
    this.dbl = "О ПЃОїОµО№ОґОїПЂОїОЇО·ПѓО·";
    this.ggl = "ОЈП†О¬О»ОјО± ОµПЂО№ОєОїО№ОЅП‰ОЅОЇО±П‚";
    this.edt = "О¦П„О¬ПѓО±П„Оµ ПѓП„Ої О±ОЅПЋП„О±П„Ої ПЊПЃО№Ої ОґП‰ПЃОµО¬ОЅ ПЂО±О№П‡ОЅО№ОґО№ПЋОЅ!";
    this.trx = "О¤Ої ПЂО±О№П‡ОЅОЇОґО№ ОёО± П„ОµПЃОјО±П„О№ПѓП„ОµОЇ";
    this.dde = "О¤Ої ПЂО±О№П‡ОЅОЇОґО№ ОёО± ОµОєОєО№ОЅО·ОёОµОЇ ОµОє ОЅО­ОїП…";
    this.icz = "О‘О“О“О™ОћО¤О• О¤О—Оќ ОџООџОќО— О“О™О‘ ОќО‘ ОЈОҐОќО•О§О™ОЈО•О¤О•";
    this.uch = "ОЎОҐООњО™ОЈО•О™ОЈ";
    this.mpe = "V A L U E";
    this.ddf = "О О±ПЃО±ОєО±О»ОїПЌОјОµ, ПЂОµПЃО№ПѓП„ПЃО­П€П„Оµ П„О· ПѓП…ПѓОєОµП…О® ПѓО±П‚!";
    this.qgx = "О О›О—ОЎОџО¦ОџОЎОЉО•П‚";
    this.qvw = "О О±ПЃО±ОєО±О»ОїПЌОјОµ, О±ПЂОµОЅОµПЃОіОїПЂОїО№О®ПѓП„Оµ П„О· О»ОµО№П„ОїП…ПЃОіОЇО± PRIVATE MODE П„ОїП… ПЂПЃОїОіПЃО¬ОјОјО±П„ОїП‚ ПЂОµПЃО№О®ОіО·ПѓО·П‚, ПЂПЃОїОєОµО№ОјО­ОЅОїП… ОЅО± ОµОєОєО№ОЅО·ОёОµОЇ П„Ої ПЂО±О№П‡ОЅОЇОґО№.";
    this.bxt = "О‘П…П„ПЊ П„Ої ПЂО±О№П‡ОЅОЇОґО№ О­П‡ОµО№ ОІОµО»П„О№ПѓП„ОїПЂОїО№О·ОёОµОЇ ОіО№О± Google Chrome.";
    this.cou = "О О±ПЃО±ОєО±О»ОїПЌОјОµ, П‡ПЃО·ПѓО№ОјОїПЂОїО№О®ПѓП„Оµ П„О·ОЅ П„ПЃО­П‡ОїП…ПѓО± О­ОєОґОїПѓО· П„ОїП…";
    this.jpd = "О”П…ПѓП„П…П‡ПЋП‚, О±П…П„ПЊ П„Ої ПЂПЃПЊОіПЃО±ОјОјО± ПЂОµПЃО№О®ОіО·ПѓО·П‚ ОґОµОЅ П…ПЂОїПѓП„О·ПЃОЇО¶ОµП„О±О№ ПЂО»О®ПЃП‰П‚.";
    this.riy = "О‘П…П„ПЊ П„Ої ПЂО±О№П‡ОЅОЇОґО№ ОґОµОЅ ОјПЂОїПЃОµОЇ ОЅО± ОґО№ОµОѕО±П‡ОёОµОЇ ПѓП„О· ОґП‰ПЃОµО¬ОЅ О»ОµО№П„ОїП…ПЃОіОЇО±!";
    this.left = "О‘ОЎО™ОЈО¤О•ОЎA";
    this.xoj = "О”О•ОћО™A";
    this.scm = "AОҐО¤OОњО‘О¤Оџ";
    this.ylx = "ОљEОЎО”О™ОЈО•";
    this.gej = "ОєОµПЃОґОЇО¶ОµО№";
    this.error = "ОЈО¦О‘О›ОњО‘";
    this.xup = "О”О©ОЎО•AОќ О О‘О™О§ОќIО”О™";
    this.wjk = "О¤О‘ОҐО¤ОџО¤О—О¤О‘ О О‘О™О§ОќО™О”О™ОџОҐ";
    this.uhh = "О§ОЎОџОќОџОЈ О О‘О™О§ОќО™О”О™ОџОҐ";
    this.pdp = "О¤ОµО»ОµП…П„О±ОЇО±";
    this.cqd = "ПЂО±О№П‡ОЅОЇОґО№О±";
    this.xnp = "О О™ОЈО¤О©О¤О™ОљO ОҐО OО›ОџО™О Оџ";
    this.mho = "О•О О™О›О•ОћО¤О• О¤Оџ ОЈО©ОЈО¤Оџ О§ОЎО©ОњО‘ О“О™О‘ ОќО‘ О”О™О О›О‘ОЈО™О‘ОЈО•О¤О• О¤Оџ ОљО•ОЎО”ОџОЈ ОЈО‘ОЈ";
    this.kim = "О•О О™О›О•ОћО¤О• О¤Оџ ОЈО©ОЈО¤Оџ О§ОЎО©ОњО‘ О¦ОҐО›О›ОџОҐ О“О™О‘ ОќО‘ О¤О•О¤ОЎО‘О О›О‘ОЈО™О‘ОЈО•О¤О• О¤Оџ ОљО•ОЎО”ОџОЈ ОЈО‘ОЈ";
    this.ful = "О ОџОќО¤О‘ОЎО•О¤О• О“О™О‘ ОќО‘ О•О§О•О¤О• О¤О—Оќ О•ОҐОљО‘О™ОЎО™О‘ О ОџО›О›О‘О О›О‘ОЈО™О‘ОЈОњОџОҐ О¤ОџОҐ ОљО•ОЎО”ОџОҐОЈ ОЈО‘ОЈ";
    this.kdz = "ОЈП„О±П„О№ПѓП„О№ОєО¬";
    this.tux = "ОЈПЌОЅОїО»Ої ПЂО±О№П‡ОЅО№ОґО№ПЋОЅ";
    this.bcz = "ОЈП…ОЅОїО»О№ОєПЊ ПЂОїОЅП„О¬ПЃО№ПѓОјО±";
    this.dzp = "ОЈП…ОЅОїО»О№ОєПЊ ОєО­ПЃОґОїП‚";
    this.rxc = "ОЈП…ОЅОїО»О№ОєПЊП‚ П‡ПЃПЊОЅОїП‚ ПЂО±О№П‡ОЅО№ОґО№ОїПЌ";
    this.ayy = "EП‡П‰ ОґО№О±ОІО¬ПѓОµО№ П„Ої ОјО®ОЅП…ОјО±.";
    this.qqx = "О›О—ОћО—|О О‘О™О§ОќО™О”О™ОџОҐ";
    this.xak = "О™ОЈО¤ОџОЎО™ОљОџ";
    this.wli = "О‘ОєПЊОјО· ОґОµОЅ П…ПЂО¬ПЃП‡ОµО№ ОєО¬ПЂОїО№Ої ПЂО±О№П‡ОЅОЇОґО№.";
    this.state = "ОљО‘О¤AОЈО¤О‘ОЈО—";
    this.dpt = "ОљПЌПЃО№Ої ПЂО±О№П‡ОЅОЇОґО№";
    this.xqv = "О‘П…П„ПЊОјО±П„О· О»О®П€О·";
    this.plg = "О•О»О®П†ОёО·ПѓО±ОЅ";
    this.oar = "Bonusspins";
    this.ztu = "О¤О¶ОїОіО¬ПЃП‰";
    this.sxw = "HОјО№ПѓП…";
    this.qmq = "Respin";
    this.omu = "ОњПЂПЊОЅОїП…Пѓ";
    this.ecn = "О ПЃПЋП„Ої ОјОїОЇПЃО±ПѓОјО±";
    this.uyr = "О”ОµПЌП„ОµПЃОї ОјОїОЇПЃО±ПѓОјО±";
    this.tan = "О¤ПЃОЇП„Ої ОјОїОЇПЃО±ПѓОјО±";
    this.vsx = "ОЈОҐОќО€О§О•О™О‘";
    this.pib = "ОќО± ОјО·ОЅ ПЂПЃОїОІО»О·ОёОµОЇ ОѕО±ОЅО¬";
    this.ypj = "О‘ОҐО¤ОџОњО‘О¤О—|О•ОќО‘ОЎОћО—";
    this.jjp = "О¤О–ОџО“AОЎО©";
    this.lqx = "О IОќО‘ОљО‘ОЈ ОљО•ОЎО”О©Оќ";
    this.pqz = "О— П†ПЊПЃП„П‰ПѓО· О®П‡П‰ОЅ ОґОµОЅ ОµОЇОЅО±О№ ОµП†О№ОєП„О®!";
    this.fse = "О›ОµОЇПЂОїП…ОЅ ПЂПЊПЃОїО№!";
    this.oyw = "О О±О№П‡ОЅОЇОґО№ П‡П‰ПЃОЇП‚ О®П‡Ої?";
    this.cus = "О“П…ПЃОЇПѓП„Оµ П„О· ПѓП…ПѓОєОµП…О® ПѓО±П‚ ПѓОµ О»ОµО№П„ОїП…ПЃОіОЇО± ПЂОїПЃП„ПЃО­П„ОїП… ОіО№О± ОЅО± ПЂО±ОЇОѕОµП„Оµ ПЊПЂП‰П‚ ПѓОµ ОјО№О± ПЂПЃО±ОіОјО±П„О№ОєО® ОјО·П‡О±ОЅО® slot!";
    this.lgj = "О ПЃОїПѓО¬ПЃОјОїПѓОµ П„О·ОЅ ОµПЂО№П†О¬ОЅОµО№О± ОµПЃОіО±ПѓОЇО±П‚ ПѓП„О№П‚ ПЂПЃОїП„О№ОјО®ПѓОµО№П‚ ПѓОїП…!";
    this.byc = "О“О™О‘ О О•ОЎО™ОЈОЈОЊО¤О•ОЎО•ОЈ О О›О—ОЎОџО¦ОџОЎОЉО•ОЈ, О”О•ОЉО¤О• О¤ОџОҐОЈ ОљО‘ОќОџОќО™ОЈОњОџОЋОЈ О¤ОџОҐ О О‘О™О§ОќО™О”О™ОџОЋ.";
    this.nbg = "О‘ОљОЋОЎО©ОЈО—";
    this.isl = "ОЎОҐООњО‰ОЈО•О™П‚ AUTOSTART";
    this.ssg = "О‘ПЃО№ОёОјПЊП‚ ПЂО±О№П‡ОЅО№ОґО№ПЋОЅ:";
    this.nra = "О”О№О±ОєОїПЂО® autostart";
    this.gew = "ОњОїОЅО¬ОґОµП‚ П‡О±ОјО·О»ПЊП„ОµПЃО± О±ПЂПЊ:";
    this.sbg = "ОњОїОЅО¬ОґОµП‚ П…П€О·О»ПЊП„ОµПЃОµП‚ О±ПЂПЊ:";
    this.vpx = "ОљО­ПЃОґОїП‚ П…П€О·О»ПЊП„ОµПЃОї О±ПЂПЊ:";
    this.mgc = "О¤Ої autostart ОёО± ПѓП„О±ОјО±П„О®ПѓОµО№ ОјОµ П„Ої ОѕОµОєОЇОЅО·ОјО± П„ОїП… ОјПЂПЊОЅОїП…П‚.";
    this.nji = "ОљОїО№ОЅОїПЂОїОЇО·ПѓО· ПѓП„Ої Facebook";
    this.ok = "OK";
    this.dth = "О­О»ОµОіП‡Ої ПЂПЃО±ОіОјО±П„О№ОєПЊП„О·П„О±П‚";
    this.zsh = "О–О·П„О®ПѓО±П„Оµ П„ОїОЅ О­О»ОµОіП‡Ої ПЂПЃО±ОіОјО±П„О№ОєПЊП„О·П„О±П‚.";
    this.izw = "О О±П„О®ПѓП„Оµ П„Ої О™ОЈО¤ОџОЎО™ОљОџ ОіО№О± ОЅО± ОґОµОЇП„Оµ П„Ої О№ПѓП„ОїПЃО№ОєПЊ П„П‰ОЅ ПЂО±О№П‡ОЅО№ОґО№ПЋОЅ ПѓО±П‚.";
    this.klb = "Game break";
    this.lad = "Game limits";
    this.kat = "Self test";
    this.hxh = "О”ОµОЅ П…ПЂО¬ПЃП‡ОµО№ ПѓПЌОЅОґОµПѓО· ОјОµ П„Ої ОґО№О±ОєОїОјО№ПѓП„О® ПЂО±О№П‡ОЅО№ОґО№ОїПЌ!";
    this.ytq = "О ПЃОїПѓПЂО¬ОёОµО№ОµП‚ ПѓПЌОЅОґОµПѓО·П‚";
    this.dyl = "О— ПѓПЌОЅОґОµПѓО· О±ПЂО­П„П…П‡Оµ!";
    this.gty = "О— ОµОЅОµПЃОіО® ПѓП…ОЅОµОґПЃОЇО± П…ПЂО¬ПЃП‡ОµО№ О®ОґО·!";
    this.wwh = "О— ОО•О©ОЎО—О¤О™ОљО‰ О•О О™ОЈО¤ОЎОџО¦О‰ ОЈО¤ОџОќ О О‘ОЉОљО¤О— О“О™О‘ О‘ОҐО¤ОЊ О¤Оџ О О‘О™О§ОќОЉО”О™ О•ОЉОќО‘О™ XY."
}
xel.prototype = new vzy;

function aat() {
    this.xxo = "РњРРќ. Р—РђР›РћР“ Р•";
    this.mlq = "РњРђРљРЎ. Р—РђР›РћР“";
    this.vvf = "РњРРќРРњ. Р—РђР›РћР“";
    this.yqg = "РњРђРљРЎ. Р—РђР›РћР“";
    this.kos = "Р—РђР›РћР“";
    this.start = "РЎРўРђР Рў";
    this.rtp = "РџРћРњРћР©";
    this.mgi = "РџР›РђРќ РќРђ|РџР•Р§РђР›Р‘РРўР•";
    this.kbd = "РњР•РќР®";
    this.nfl = "РџРћР’Р•Р§Р•|РР“Р Р";
    this.mdf = "РЎРўРћРџ";
    this.lmm = "РљР Р•Р”РРў";
    this.dsl = "РР“Р РђРўРђ Р—РђР’РЄР РЁР";
    this.lwb = "РџР•Р§Р•Р›РРўР•!";
    this.ebr = "РЈРЎРџР•РҐ!";
    this.win = "РџР•Р§РђР›Р‘Рђ";
    this.szi = "РџРћРЎР›.РџР•Р§РђР›Р‘Рђ";
    this.ugt = "РџР РР‘РР РђРќР•";
    this.bto = "РџР РР‘РР РђРќР•";
    this.kyj = "Р”РЈР‘Р›РР РђРќР•";
    this.ols = "РђР’РўРћ|РЎРўРђР Рў";
    this.fpi = "Р”Р•Р›Р•РќР•|Р”РЈР‘Р›.";
    this.of = "РћРў";
    this.nkt = "РР—РҐРћР”";
    this.ner = "Р—РђРџРћР§РќР•РўР• РР“Р РђРўРђ";
    this.uwo = "РР—Р‘Р•Р Р•РўР• Р—РђР›РћР“";
    this.nkd = "Р”Р•Р›Р•РќР•";
    this.hxq = "РќРђРўРРЎРќР•РўР• РќРЇРљРћР™ Р‘РЈРўРћРќ Р—Рђ Р”Рђ РџР РћР”РЄР›Р–РРўР•";
    this.ret = "Р’Р РЄР©РђРќР•|РљРЄРњ|РР“Р РђРўРђ";
    this.fqc = "РћР‘Р©Рђ РџР•Р§РђР›Р‘Рђ";
    this.owc = "РќР• Р”РћРЎРўРђРўРЄР§Р•Рќ РљР Р•Р”РРў.";
    this.pgj = "Р‘РѕРЅСѓСЃ!";
    this.urr = "Р‘РћРќРЈРЎ";
    this.twa = "РњРћР›РЇ РР—Р§РђРљРђР™РўР• ...";
    this.zjt = "РџРѕРІРµС‡Рµ РРіСЂРё";
    this.zuw = "РўРЈР Р‘Рћ";
    this.jmt = "РџРћР’Р Р•Р”Рђ РђРќРЈР›РР Рђ Р’РЎРР§РљР Р—РђР›РђР“РђРќРРЇ Р РџР›РђР©РђРќРРЇ.";
    this.language = "Р•Р—РРљ";
    this.nnr = "РџР РђР’РР›Рђ РќРђ РР“Р РђРўРђ";
    this.byr = "РџР РђР’РР›Рђ|РќРђ РР“Р РђРўРђ";
    this.khm = "Р—РђР Р•Р–Р”РђРќР• ...";
    this.mbe = "Р—РђР Р•Р–Р”РђРќР• РќРђ РРЎРўРћР РРЇ ...";
    this.ojg = "Р”РѕСЃС‚РёРіРЅР° РµРґРёРЅ РѕС‚ Р»РёРјРёС‚РёС‚Рµ!";
    this.dbl = "РџСЂРµРґСѓРїСЂРµР¶РґРµРЅРёРµ";
    this.ggl = "РљРѕРјСѓРЅРёРєР°С†РёРѕРЅРЅР° РіСЂРµС€РєР°";
    this.edt = "Р”РѕСЃС‚РёРіРЅР°Р»Рё СЃС‚Рµ РјР°РєСЃРёРјР°Р»РЅРёСЏ Р±СЂРѕР№ Р±РµР·РїР»Р°С‚РЅРё РёРіСЂРё!";
    this.trx = "РРіСЂР°С‚Р° С‰Рµ Р±СЉРґРµ Р·Р°С‚РІРѕСЂРµРЅР°";
    this.dde = "РРіСЂР°С‚Р° С‰Рµ Р±СЉРґРµ СЂРµСЃС‚Р°СЂС‚РёСЂР°РЅР°";
    this.icz = "Р”РћРљРћРЎРќР•РўР• Р•РљР РђРќРђ, Р—Рђ Р”Рђ РџР РћР”РЄР›Р–РРўР•";
    this.uch = "РќРђРЎРўР РћР™РљР";
    this.mpe = "V A L U E";
    this.ddf = "РњРѕР»СЏ, РІРєР»СЋС‡РµС‚Рµ СѓСЃС‚СЂРѕР№СЃС‚РІРѕС‚Рѕ!";
    this.qgx = "РРќР¤РћР РњРђР¦РРЇ";
    this.qvw = "РњРѕР»СЏ, РґРµР°РєС‚РёРІРёСЂР°Р№С‚Рµ Р§РђРЎРўР•Рќ Р Р•Р–РРњ РЅР° Р±СЂР°СѓР·СЉСЂР°, Р·Р° РґР° РёРіСЂР°РµС‚Рµ РёРіСЂР°С‚Р°.";
    this.bxt = "РўР°Р·Рё РёРіСЂР° Рµ РѕРїС‚РёРјРёР·РёСЂР°РЅР° Р·Р° Google Chrome.";
    this.cou = "РњРѕР»СЏ, РёР·РїРѕР»Р·РІР°Р№С‚Рµ С‚РµРєСѓС‰Р°С‚Р° РІРµСЂСЃРёСЏ РЅР°";
    this.jpd = "Р—Р° СЃСЉР¶Р°Р»РµРЅРёРµ С‚РѕР·Рё Р±СЂР°СѓР·СЉСЂ РЅРµ СЃРµ РїРѕРґРґСЉСЂР¶Р° РЅР°РїСЉР»РЅРѕ.";
    this.riy = "РўР°Р·Рё РёРіСЂР° РЅРµ РјРѕР¶Рµ РґР° СЃРµ СЃС‚Р°СЂС‚РёСЂР° РІ СЂРµР¶РёРј РЅР° СЃРІРѕР±РѕРґРЅР° РёРіСЂР°!";
    this.left = "Р›РЇР’Рђ";
    this.xoj = "Р”РЇРЎРќРђ";
    this.scm = "РђР’РўРћ";
    this.ylx = "РЎРџР•Р§Р•Р›Р•РќРћ";
    this.gej = "РїРµС‡Р°Р»Р±Рё";
    this.lmf = "РћР‘Р©Рћ";
    this.error = "Р“Р Р•РЁРљРђ";
    this.xup = "Р‘Р•Р—РџР›РђРўРќРђ РР“Р Рђ";
    this.audio = "Р—Р’РЈРљ";
    this.fjm = "РњРЈР—РРљРђ";
    this.qgo = "РџРЄР›Р•Рќ Р•РљР РђРќ";
    this.uus = "РџРЄР›Р•Рќ|Р•РљР РђРќ";
    this.wjk = "РР” РќРђ РР“Р Рђ";
    this.uhh = "Р’Р Р•РњР• РќРђ РР“Р Рђ";
    this.pdp = "РџРѕСЃР»РµРґРЅРё";
    this.cqd = "РёРіСЂРё";
    this.xnp = "Р”Р•РџРћР—РРў";
    this.mho = "РР—Р‘Р•Р Р РџР РђР’РР›РќРђРўРђ Р‘РћРЇ, Р—Рђ Р”Рђ РЈР”Р’РћРРЁ РџР•Р§РђР›Р‘РђРўРђ";
    this.kim = "РР—Р‘Р•Р Р РџР РђР’РР›РќРђРўРђ Р‘РћРЇ, Р—Рђ Р”Рђ РЈР§Р•РўР’РћР РРЁ РџР•Р§РђР›Р‘РђРўРђ";
    this.ful = "РР“Р РђР™ Р—Рђ РЁРђРќРЎ Р”Рђ РЈР’Р•Р›РР§РРЁ РџР•Р§РђР›Р‘РђРўРђ";
    this.kdz = "РЎС‚Р°С‚РёСЃС‚РёРєР°";
    this.tux = "РћР±С‰Рѕ РёРіСЂРё";
    this.bcz = "РћР±С‰Рѕ Р·Р°Р»РѕРі";
    this.dzp = "РћР±С‰Рѕ РїРµС‡Р°Р»Р±Рё";
    this.rxc = "РћР±С‰Рѕ РІСЂРµРјРµ РЅР° РёРіСЂР°";
    this.ayy = "РџСЂРѕС‡РµС‚РѕС… С‚РѕРІР° СЃСЉРѕР±С‰РµРЅРёРµ.";
    this.qqx = "РР—РҐРћР”|РћРў|РР“Р РђРўРђ";
    this.xak = "РРЎРўРћР РРЇ";
    this.wli = "РќСЏРјР° РёРіСЂР°РЅРё РёРіСЂРё.";
    this.state = "РЎРўРђРўРЈРЎ";
    this.dpt = "РћСЃРЅРѕРІРЅР° РёРіСЂР°";
    this.xqv = "РђРІС‚РѕРјР°С‚РёС‡РЅРѕ СЃСЉР±СЂР°РЅРё";
    this.plg = "РЎСЉР±СЂР°РЅРё";
    this.oar = "Р‘РѕРЅСѓСЃ-РёРіСЂРё";
    this.ztu = "Р”СѓР±Р»РёСЂР°РЅРµ";
    this.sxw = "РџРѕР»РѕРІРёРЅР°";
    this.qmq = "Respin";
    this.omu = "Р‘РѕРЅСѓСЃ";
    this.ecn = "РџСЉСЂРІРѕ СЂР°Р·РґР°РІР°РЅРµ";
    this.uyr = "Р’С‚РѕСЂРѕ СЂР°Р·РґР°РІР°РЅРµ";
    this.tan = "РўСЂРµС‚Рѕ СЂР°Р·РґР°РІР°РЅРµ";
    this.vsx = "РџР РћР”РЄР›Р–Р•РќРР•";
    this.pib = "РќРµ РїРѕРєР°Р·РІР°Р№ РѕС‚РЅРѕРІРѕ";
    this.ypj = "AUTOSTART";
    this.jjp = "Р”РЈР‘Р›РР РђРќР•";
    this.lqx = "РџР›РђРќ РќРђ РџР•Р§РђР›Р‘РРўР•";
    this.pqz = "Р—РІСѓРєСЉС‚ РЅРµ РјРѕР¶Рµ РґР° Р±СЉРґРµ Р·Р°СЂРµРґРµРЅ!";
    this.fse = "Р›РёРїСЃРІР°С‚ СЂРµСЃСѓСЂСЃРё!";
    this.oyw = "РРіСЂР° Р±РµР· Р·РІСѓРє?";
    this.cus = "Р—Р°РІСЉСЂС‚РµС‚Рµ СѓСЃС‚СЂРѕР№СЃС‚РІРѕС‚Рѕ СЃРё РІ РїРѕСЂС‚СЂРµС‚РµРЅ СЂРµР¶РёРј, Р·Р° РґР° РёРіСЂР°РµС‚Рµ РєР°С‚Рѕ РЅР° РёСЃС‚РёРЅСЃРєР° СЃР»РѕС‚ РјР°С€РёРЅР°!";
    this.lgj = "РќР°СЃС‚СЂРѕР№С‚Рµ РёРЅС‚РµСЂС„РµР№СЃР° РЅР° РёРіСЂР°С‚Р° СЃРїРѕСЂРµРґ СЃРІРѕРёС‚Рµ РЅСѓР¶РґРё!";
    this.byc = "Р—Рђ РџРћР’Р•Р§Р• РРќР¤РћР РњРђР¦РРЇ Р’РР–РўР• РџР РђР’РР›РђРўРђ РќРђ РР“Р РђРўРђ.";
    this.nbg = "РР—Р§РРЎРўР’РђРќР•";
    this.isl = "РќРђРЎРўР РћР™РљР РќРђ РђР’РўРћРњРђРўРР§РќРћРўРћ РЎРўРђР РўРР РђРќР•";
    this.ssg = "Р‘СЂРѕР№ РёРіСЂРё:";
    this.nra = "РЎРїСЂРё Р°РІС‚РѕРјР°С‚РёС‡РЅРёСЏ СЃС‚Р°СЂС‚";
    this.gew = "РљСЂРµРґРёС‚ РїРѕ-РјР°Р»СЉРє РѕС‚:";
    this.sbg = "РљСЂРµРґРёС‚ РїРѕ-РІРёСЃРѕРє РѕС‚:";
    this.vpx = "РЎРїРµС‡РµР»Рё РїРѕРІРµС‡Рµ РѕС‚:";
    this.mgc = "РђРІС‚РѕРјР°С‚РёС‡РЅРѕС‚Рѕ СЃС‚Р°СЂС‚РёСЂР°РЅРµ С‰Рµ Р±СЉРґРµ СЃРїСЂСЏРЅРѕ РІ РЅР°С‡Р°Р»РѕС‚Рѕ РЅР° Р±РѕРЅСѓСЃР°.";
    this.nji = "РЎРїРѕРґРµР»Рё РІСЉРІ Facebook";
    this.ok = "OK";
    this.dth = "Reality Check";
    this.zsh = "Р—Р°СЏРІРёР»Рё СЃС‚Рµ РїСЂРѕРІРµСЂРєР° РЅР° СЂРµР°Р»РЅРѕСЃС‚С‚Р°.";
    this.izw = "РќР°С‚РёСЃРЅРµС‚Рµ РРЎРўРћР РРЇ, Р·Р° РґР° РІРёРґРёС‚Рµ С…СЂРѕРЅРѕР»РѕРіРёСЏС‚Р° СЃРё РЅР° РёРіСЂР°.";
    this.klb = "Game break";
    this.lad = "Game limits";
    this.kat = "Self test";
    this.hxh = "РќСЏРјР° РІСЂСЉР·РєР° СЃ РіРµР№РјРёРЅРі СЃСЉСЂРІСЉСЂР°!";
    this.ytq = "РћРїРёС‚Рё Р·Р° СЃРІСЉСЂР·РІР°РЅРµ";
    this.dyl = "РќРµСѓСЃРїРµС€РЅРѕ РІР»РёР·Р°РЅРµ!";
    this.gty = "Р’РµС‡Рµ СЃСЉС‰РµСЃС‚РІСѓРІР° Р°РєС‚РёРІРЅР° СЃРµСЃРёСЏ!";
    this.wwh = "РўР•РћР Р•РўРР§РќРђРўРђ Р’РЄР—Р’Р РђР©РђР•РњРћРЎРў РќРђ РР“Р РђР§Рђ Р—Рђ РўРђР—Р РР“Р Рђ Р• XY."
}
aat.prototype = new vzy;

function nna() {
    this.xxo = "бѓ›бѓбѓњбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ¤бѓЎбѓќбѓњбѓ бѓђбѓ бѓбѓЎ";
    this.mlq = "бѓ›бѓђбѓҐбѓЎбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ¤бѓЎбѓќбѓњбѓ";
    this.vvf = "бѓ›бѓбѓњбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ¤бѓЎбѓќбѓњбѓ";
    this.yqg = "бѓ›бѓђбѓҐбѓЎбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ¤бѓЎбѓќбѓњбѓ";
    this.kos = "бѓ¤бѓЎбѓќбѓњбѓ";
    this.start = "бѓ“бѓђбѓ¬бѓ§бѓ”бѓ‘бѓђ";
    this.rtp = "бѓ“бѓђбѓ®бѓ›бѓђбѓ бѓ”бѓ‘бѓђ";
    this.mgi = "бѓ’бѓђбѓ“бѓђбѓ®бѓ“бѓбѓЎ бѓ›бѓ бѓбѓЄбѓ®бѓ•бѓ”бѓљбѓ";
    this.kbd = "бѓ›бѓ”бѓњбѓбѓЈ";
    this.nfl = "бѓ›бѓ”бѓўбѓ|бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ";
    this.mdf = "бѓ’бѓђбѓ©бѓ”бѓ бѓ”бѓ‘бѓђ";
    this.lmm = "бѓ™бѓ бѓ”бѓ“бѓбѓўбѓ";
    this.dsl = "бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓ“бѓђбѓЎбѓ бѓЈбѓљбѓ”бѓ‘бѓЈбѓљбѓбѓђ";
    this.lwb = "бѓ’бѓђбѓ›бѓђбѓ бѓЇбѓ•бѓ”бѓ‘бѓЈбѓљбѓ!";
    this.ebr = "бѓ’бѓбѓЎбѓЈбѓ бѓ•бѓ”бѓ‘бѓ— бѓ¬бѓђбѓ бѓ›бѓђбѓўбѓ”бѓ‘бѓђбѓЎ!";
    this.win = "бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.szi = "бѓ‘бѓќбѓљбѓќ бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.ugt = "бѓЁбѓ”бѓ’бѓ бѓќбѓ•бѓ”бѓ‘бѓђ";
    this.bto = "бѓЁбѓ”бѓ’бѓ бѓќбѓ•бѓ”бѓ‘бѓђ";
    this.kyj = "бѓђбѓ–бѓђбѓ бѓўбѓ";
    this.ols = "бѓђбѓ•бѓўбѓќ|бѓ“бѓђбѓ¬бѓ§бѓ”бѓ‘бѓђ";
    this.fpi = "бѓњбѓђбѓ®бѓ”бѓ•бѓђбѓ бѓ";
    this.nkt = "бѓ’бѓђбѓ›бѓќбѓЎбѓ•бѓљбѓђ";
    this.ner = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ“бѓђбѓ¬бѓ§бѓ”бѓ‘бѓђ";
    this.uwo = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓ¤бѓЎбѓќбѓњбѓ";
    this.nkd = "бѓњбѓђбѓ®бѓ”бѓ•бѓђбѓ бѓ";
    this.ret = "бѓ—бѓђбѓ›бѓђбѓЁбѓ–бѓ”|бѓ“бѓђбѓ‘бѓ бѓЈбѓњбѓ”бѓ‘бѓђ";
    this.fqc = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.dbl = "бѓ’бѓђбѓ¤бѓ бѓ—бѓ®бѓбѓљбѓ”бѓ‘бѓђ";
    this.lmf = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ";
    this.twa = "бѓ’бѓ—бѓ®бѓќбѓ•бѓ—, бѓ“бѓђбѓ”бѓљбѓќбѓ“бѓќбѓ— ...";
    this.zjt = "бѓ›бѓ”бѓўбѓ бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ";
    this.zuw = "бѓўбѓЈбѓ бѓ‘бѓќ";
    this.jmt = "бѓ’бѓђбѓЈбѓ›бѓђбѓ бѓ—бѓђбѓќбѓ‘бѓбѓЎ бѓЁбѓ”бѓ›бѓ—бѓ®бѓ•бѓ”бѓ•бѓђбѓЁбѓ бѓ§бѓ•бѓ”бѓљбѓђ бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ бѓ“бѓђ бѓњбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ бѓ¬бѓђбѓбѓЁбѓљбѓ”бѓ‘бѓђ.";
    this.vsx = "бѓ’бѓђбѓ’бѓ бѓ«бѓ”бѓљбѓ”бѓ‘бѓђ";
    this.ypj = "бѓђбѓ•бѓўбѓќ бѓ“бѓђбѓ¬бѓ§бѓ”бѓ‘бѓђ";
    this.lqx = "бѓ’бѓђбѓ“бѓђбѓ®бѓ“бѓбѓЎ бѓ›бѓ бѓбѓЄбѓ®бѓ•бѓ”бѓљбѓ";
    this.jjp = "бѓђбѓ–бѓђбѓ бѓўбѓ";
    this.left = "бѓ›бѓђбѓ бѓЄбѓ®бѓњбѓбѓ•";
    this.xoj = "бѓ›бѓђбѓ бѓЇбѓ•бѓњбѓбѓ•";
    this.scm = "бѓђбѓ•бѓўбѓќбѓ›бѓђбѓўбѓЈбѓ бѓђбѓ“";
    this.ok = "бѓ™бѓ";
    this.nbg = "бѓ’бѓђбѓЈбѓҐбѓ›бѓ”бѓ‘бѓђ";
    this.ztu = "бѓђбѓ–бѓђбѓ бѓўбѓ";
    this.sxw = "бѓњбѓђбѓ®бѓ”бѓ•бѓђбѓ бѓ";
    this.nnr = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ¬бѓ”бѓЎбѓ”бѓ‘бѓ";
    this.byr = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ¬бѓ”бѓЎбѓ”бѓ‘бѓ";
    this.pgj = "BONUS!";
    this.urr = "бѓ‘бѓќбѓњбѓЈбѓЎ";
    this.hxq = "бѓ“бѓђбѓђбѓ­бѓбѓ бѓ”бѓ— бѓњбѓ”бѓ‘бѓбѓЎбѓ›бѓбѓ”бѓ  бѓ¦бѓбѓљбѓђбѓ™бѓЎ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓ’бѓ бѓ«бѓ”бѓљбѓќбѓ—";
    this.owc = "бѓђбѓ бѓђ бѓЎбѓђбѓ™бѓ›бѓђбѓ бѓбѓЎбѓ бѓ™бѓ бѓ”бѓ“бѓбѓўбѓ.";
    this.icz = "бѓЁбѓ”бѓ”бѓ®бѓ”бѓ— бѓ”бѓ™бѓ бѓђбѓњбѓЎ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓ’бѓ бѓ«бѓ”бѓљбѓќбѓ—";
    this.khm = "бѓ©бѓђбѓўбѓ•бѓбѓ бѓ—бѓ•бѓбѓЎ  ...";
    this.mbe = "бѓ©бѓђбѓўбѓ•бѓбѓ бѓ—бѓ•бѓбѓЎ  бѓбѓЎбѓўбѓќбѓ бѓбѓђ  ...";
    this.ggl = "бѓЎбѓђбѓ™бѓќбѓ›бѓЈбѓњбѓбѓ™бѓђбѓЄбѓбѓќ бѓЁбѓ”бѓЄбѓ“бѓќбѓ›бѓђ";
    this.ojg = "бѓ—бѓҐбѓ•бѓ”бѓњ бѓ”бѓ бѓ— бѓ”бѓ бѓ—бѓ бѓљбѓбѓ›бѓбѓўбѓ бѓђбѓ›бѓќбѓ¬бѓЈбѓ бѓ”бѓ—!";
    this.edt = "бѓ—бѓҐбѓ•бѓ”бѓњ бѓЈбѓ¤бѓђбѓЎбѓќ бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓбѓЎ бѓ›бѓђбѓҐбѓЎбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ бѓђбѓќбѓ“бѓ”бѓњбѓќбѓ‘бѓбѓЎ бѓљбѓбѓ›бѓбѓўбѓ бѓЈбѓ™бѓ•бѓ” бѓђбѓ›бѓќбѓ¬бѓЈбѓ бѓ”бѓ—!";
    this.trx = "бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓ“бѓђбѓЎбѓ бѓЈбѓљбѓ“бѓ”бѓ‘бѓђ";
    this.dde = "бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓ’бѓђбѓ“бѓђбѓбѓўбѓ•бѓбѓ бѓ—бѓ”бѓ‘бѓђ";
    this.ylx = "бѓ›бѓќбѓ’бѓ”бѓ‘бѓЈбѓљбѓбѓђ";
    this.gej = "wins";
    this.mpe = "V A L U E";
    this.error = "бѓЁбѓ”бѓЄбѓ“бѓќбѓ›бѓђ";
    this.xup = "бѓЈбѓ¤бѓђбѓЎбѓќ бѓ—бѓђбѓ›бѓђбѓЁбѓ";
    this.wjk = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ  бѓњбѓќбѓ›бѓ”бѓ бѓ";
    this.uhh = "бѓЎбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓќ бѓ“бѓ бѓќ";
    this.pdp = "бѓ‘бѓќбѓљбѓќ ";
    this.cqd = "бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ";
    this.xnp = "бѓ“бѓ”бѓћбѓќбѓ–бѓбѓўбѓ";
    this.audio = "бѓ®бѓ›бѓђ";
    this.fjm = "бѓ›бѓЈбѓЎбѓбѓ™бѓђ";
    this.qgo = "бѓЎбѓ бѓЈбѓљбѓ бѓ”бѓ™бѓ бѓђбѓњбѓ";
    this.uus = "бѓЎбѓ бѓЈбѓљбѓ бѓ”бѓ™бѓ бѓђбѓњбѓ";
    this.language = "бѓ”бѓњбѓбѓЎ";
    this.pib = "бѓ›бѓќбѓ›бѓђбѓ•бѓђбѓљбѓЁбѓ бѓђбѓ¦бѓђбѓ  бѓ©бѓ•бѓ”бѓњбѓ”бѓ‘бѓђ";
    this.pqz = "бѓ®бѓ›бѓбѓЎ бѓ©бѓђбѓўбѓ•бѓбѓ бѓ—бѓ•бѓђ бѓ•бѓ”бѓ  бѓ®бѓ”бѓ бѓ®бѓ“бѓ”бѓ‘бѓђ!";
    this.fse = "бѓђбѓ бѓђбѓЎбѓђбѓ™бѓ›бѓђбѓ бѓбѓЎбѓ бѓ бѓ”бѓЎбѓЈбѓ бѓЎбѓ”бѓ‘бѓ!";
    this.oyw = "бѓ’бѓбѓњбѓ“бѓђбѓ— бѓ®бѓ›бѓбѓЎ бѓ’бѓђбѓ бѓ”бѓЁбѓ” бѓбѓ—бѓђбѓ›бѓђбѓЁбѓќбѓ—?";
    this.ddf = "бѓ’бѓ—бѓ®бѓќбѓ•бѓ— бѓ›бѓќбѓђбѓ‘бѓ бѓЈбѓњбѓќбѓ— бѓ—бѓҐбѓ•бѓ”бѓњбѓ бѓ›бѓќбѓ¬бѓ§бѓќбѓ‘бѓбѓљбѓќбѓ‘бѓђ!";
    this.qvw = "бѓ’бѓ—бѓ®бѓќбѓ•бѓ—, бѓ’бѓђбѓ›бѓќбѓ бѓ—бѓќбѓ— бѓћбѓбѓ бѓђбѓ“бѓ бѓ бѓ”бѓџбѓбѓ›бѓ бѓ—бѓҐбѓ•бѓ”бѓњбѓЎ бѓ‘бѓ бѓђбѓЈбѓ–бѓ”бѓ бѓЁбѓ бѓ бѓќбѓ› бѓЁбѓ”бѓ«бѓљбѓќбѓ— бѓ—бѓђбѓ›бѓђбѓЁбѓ.";
    this.bxt = "бѓ”бѓЎ бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓќбѓћбѓўбѓбѓ›бѓбѓ–бѓбѓ бѓ”бѓ‘бѓЈбѓљбѓбѓђ Google Chrome-бѓбѓЎбѓђбѓ—бѓ•бѓбѓЎ.";
    this.epb = "бѓ’бѓ—бѓ®бѓќбѓ•бѓ— бѓ’бѓђбѓ›бѓќбѓбѓ§бѓ”бѓњбѓќбѓ—";
    this.fih = "-бѓбѓЎ бѓ›бѓбѓ›бѓ“бѓбѓњбѓђбѓ бѓ” бѓ•бѓ”бѓ бѓЎбѓбѓђ";
    this.jpd = "бѓЎбѓђбѓ›бѓ¬бѓЈбѓ®бѓђбѓ бѓќбѓ“, бѓђбѓ› бѓ‘бѓ бѓђбѓЈбѓ–бѓ”бѓ бѓ–бѓ” бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓЎбѓ бѓЈбѓљбѓђбѓ“ бѓ•бѓ”бѓ  бѓ®бѓ”бѓ бѓ®бѓ“бѓ”бѓ‘бѓђ.";
    this.riy = "бѓђбѓ› бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓЈбѓ¤бѓђбѓЎбѓќбѓ“ бѓЁбѓ”бѓЈбѓ«бѓљбѓ”бѓ‘бѓ”бѓљбѓбѓђ!";
    this.cus = "бѓ©бѓђбѓ бѓ—бѓ”бѓ— бѓ—бѓҐбѓ•бѓ”бѓњбѓ бѓ›бѓќбѓ¬бѓ§бѓќбѓ‘бѓбѓљбѓќбѓ‘бѓђ бѓћбѓќбѓ бѓўбѓ бѓ”бѓўбѓбѓЎ бѓ бѓ”бѓџбѓбѓ›бѓ–бѓ” бѓ бѓќбѓ› бѓбѓ—бѓђбѓ›бѓђбѓЁбѓќбѓ— бѓбѓЎбѓ” бѓ—бѓбѓ—бѓҐбѓќбѓЎ бѓ бѓ”бѓђбѓљбѓЈбѓ  бѓЎбѓљбѓќбѓў бѓ›бѓќбѓ¬бѓ§бѓќбѓ‘бѓбѓљбѓќбѓ‘бѓђбѓ–бѓ” бѓ—бѓђбѓ›бѓђбѓЁбѓќбѓ‘бѓ“бѓ”бѓ—!";
    this.lgj = "бѓ›бѓќбѓђбѓ бѓ’бѓ”бѓ— бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓбѓњбѓўбѓ”бѓ бѓ¤бѓ”бѓбѓЎбѓ бѓ—бѓҐбѓ•бѓ”бѓњбѓЎ бѓЎбѓђбѓ­бѓбѓ бѓќбѓ”бѓ‘бѓ”бѓ‘бѓЎ!";
    this.mho = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓЎбѓ¬бѓќбѓ бѓ бѓ¤бѓ”бѓ бѓ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓќбѓ бѓ›бѓђбѓ’бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.kim = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓ™бѓђбѓ бѓўбѓбѓЎ бѓЎбѓ¬бѓќбѓ бѓ бѓ¤бѓ”бѓ бѓ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓќбѓ—бѓ®бѓ›бѓђбѓ’бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.ful = "бѓ“бѓђбѓ“бѓ”бѓ— бѓ¤бѓЎбѓќбѓњбѓ бѓ бѓќбѓ› бѓ’бѓђбѓ–бѓђбѓ бѓ“бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓбѓЎ бѓЁбѓђбѓњбѓЎбѓ";
    this.tux = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ";
    this.bcz = "бѓ¤бѓЎбѓќбѓњбѓ бѓ›бѓ—бѓљбѓбѓђбѓњбѓђбѓ“";
    this.dzp = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.rxc = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ бѓЎбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓќ бѓ“бѓ бѓќ";
    this.ayy = "бѓ›бѓ” бѓ’бѓђбѓ•бѓ”бѓЄбѓђбѓњбѓ бѓђбѓ› бѓ’бѓ–бѓђбѓ•бѓњбѓбѓљбѓЎ.";
    this.qqx = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ|бѓ“бѓђбѓ›бѓ—бѓђбѓ•бѓ бѓ”бѓ‘бѓђ";
    this.xak = "бѓ›бѓќбѓ•бѓљбѓ”бѓњбѓ”бѓ‘бѓбѓЎ бѓ©бѓђбѓњбѓђбѓ¬бѓ”бѓ бѓ";
    this.wli = "бѓњбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ бѓђбѓ  бѓђбѓ бѓбѓЎ.";
    this.state = "бѓ›бѓ“бѓ’бѓќбѓ›бѓђбѓ бѓ”бѓќбѓ‘бѓђ";
    this.dpt = "бѓ«бѓбѓ бѓбѓ—бѓђбѓ“бѓ бѓ—бѓђбѓ›бѓђбѓЁбѓ";
    this.xqv = "бѓђбѓ•бѓўбѓќбѓ›бѓђбѓўбѓЈбѓ бѓђбѓ“ бѓЁбѓ”бѓ’бѓ бѓќбѓ•бѓ”бѓ‘бѓђ";
    this.plg = "бѓђбѓ¦бѓ”бѓ‘бѓЈбѓљ бѓбѓҐбѓњбѓђ";
    this.ecn = "бѓћбѓбѓ бѓ•бѓ”бѓљбѓ бѓ“бѓђбѓ бѓбѓ’бѓ”бѓ‘бѓђ";
    this.uyr = "бѓ›бѓ”бѓќбѓ бѓ” бѓ“бѓђбѓ бѓбѓ’бѓ”бѓ‘бѓђ";
    this.tan = "бѓ›бѓ”бѓЎбѓђбѓ›бѓ” бѓ“бѓђбѓ бѓбѓ’бѓ”бѓ‘бѓђ";
    this.isl = "бѓђбѓ•бѓўбѓќбѓ’бѓђбѓ›бѓЁбѓ•бѓ”бѓ‘бѓбѓЎ бѓћбѓђбѓ бѓђбѓ›бѓ”бѓўбѓ бѓ”бѓ‘бѓ";
    this.ssg = "бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓбѓЎ бѓ бѓђбѓќбѓ“бѓ”бѓњбѓќбѓ‘бѓђ:";
    this.nra = "бѓЁбѓ”бѓђбѓ©бѓ”бѓ бѓ”бѓ— бѓђбѓ•бѓўбѓќбѓ’бѓђбѓ›бѓЁбѓ•бѓ”бѓ‘бѓ";
    this.gew = "бѓ™бѓ бѓ”бѓ“бѓбѓўбѓ бѓЈбѓ¤бѓ бѓќ бѓ“бѓђбѓ‘бѓђбѓљбѓ бѓ•бѓбѓ“бѓ бѓ”:";
    this.sbg = "бѓ™бѓ бѓ”бѓ“бѓбѓўбѓ бѓЈбѓ¤бѓ бѓќ бѓ›бѓђбѓ¦бѓђбѓљбѓ бѓ•бѓбѓ“бѓ бѓ”:";
    this.vpx = "бѓ›бѓќбѓбѓ’бѓ”бѓ— бѓЈбѓ¤бѓ бѓќ бѓ›бѓ”бѓўбѓ бѓ•бѓбѓ“бѓ бѓ”:";
    this.mgc = "бѓђбѓ•бѓўбѓќбѓ’бѓђбѓ›бѓЁбѓ•бѓ”бѓ‘бѓ бѓЁбѓ”бѓ©бѓ”бѓ бѓ“бѓ”бѓ‘бѓђ бѓ‘бѓќбѓњбѓЈбѓЎбѓбѓЎ бѓ“бѓђбѓЎбѓђбѓ¬бѓ§бѓбѓЎбѓЁбѓ.";
    this.nji = "бѓ’бѓђбѓђбѓ–бѓбѓђбѓ бѓ”бѓ— бѓ¤бѓ”бѓбѓЎбѓ‘бѓЈбѓҐбѓ–бѓ”";
    this.kdz = "бѓЎбѓўбѓђбѓўбѓбѓЎбѓўбѓбѓ™бѓђ";
    this.of = "/";
    this.oar = "Bonus бѓ—бѓђбѓ›бѓђбѓЁбѓ";
    this.omu = "бѓ‘бѓќбѓњбѓЈбѓЎбѓ";
    this.qgx = "бѓбѓњбѓ¤бѓќбѓ бѓ›бѓђбѓЄбѓбѓђ";
    this.uch = "бѓћбѓђбѓ бѓђбѓ›бѓ”бѓўбѓ .";
    this.qmq = "бѓ®бѓ”бѓљбѓђбѓ®бѓљбѓђ бѓ“бѓђбѓўбѓ бѓбѓђбѓљбѓ”бѓ‘бѓбѓЎ";
    this.byc = "бѓ›бѓ”бѓўбѓ бѓбѓњбѓ¤бѓќбѓ бѓ›бѓђбѓЄбѓбѓбѓЎбѓђбѓ—бѓ•бѓбѓЎ, бѓбѓ®бѓбѓљбѓ”бѓ— бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ¬бѓ”бѓЎбѓ”бѓ‘бѓ.";
    this.dth = "бѓ бѓ”бѓђбѓљбѓќбѓ‘бѓбѓЎ бѓЁбѓ”бѓ›бѓќбѓ¬бѓ›бѓ”бѓ‘бѓђ";
    this.zsh = "бѓ—бѓҐбѓ•бѓ”бѓњ бѓ›бѓќбѓбѓ—бѓ®бѓќбѓ•бѓ”бѓ— бѓ бѓ”бѓђбѓљбѓќбѓ‘бѓбѓЎ бѓЁбѓ”бѓ›бѓќбѓ¬бѓ›бѓ”бѓ‘бѓђ.";
    this.izw = "бѓ—бѓҐбѓ•бѓ”бѓњбѓ бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓбѓЎбѓўбѓќбѓ бѓбѓбѓЎ бѓЎбѓђбѓњбѓђбѓ®бѓђбѓ•бѓђбѓ“ бѓ“бѓђбѓђбѓ­бѓбѓ бѓ”бѓ— бѓ›бѓќбѓ•бѓљбѓ”бѓњбѓ”бѓ‘бѓбѓЎ бѓ©бѓђбѓњбѓђбѓ¬бѓ”бѓ бѓ-бѓЎ.";
    this.klb = "Game break";
    this.lad = "Game limits";
    this.kat = "Self test";
    this.hxh = "бѓЎбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓќ бѓЎбѓ”бѓ бѓ•бѓ”бѓ бѓ–бѓ” бѓ“бѓђбѓ™бѓђбѓ•бѓЁбѓбѓ бѓ”бѓ‘бѓђ бѓ•бѓ”бѓ  бѓ›бѓќбѓ®бѓ”бѓ бѓ®бѓ“бѓђ!";
    this.ytq = "бѓ“бѓђбѓ™бѓђбѓ•бѓЁбѓбѓ бѓ”бѓ‘бѓбѓЎ бѓ›бѓЄбѓ“бѓ”бѓљбѓќбѓ‘бѓ”бѓ‘бѓ";
    this.dyl = "бѓЁбѓ”бѓЎбѓ•бѓљбѓђ бѓ•бѓ”бѓ  бѓ›бѓќбѓ®бѓ”бѓ бѓ®бѓ“бѓђ!";
    this.gty = "бѓђбѓҐбѓўбѓбѓЈбѓ бѓ бѓЎбѓ”бѓЎбѓбѓђ бѓЈбѓ™бѓ•бѓ” бѓђбѓ бѓЎбѓ”бѓ‘бѓќбѓ‘бѓЎ!";
    this.wwh = "бѓ—бѓ”бѓќбѓ бѓбѓЈбѓљбѓ бѓ“бѓђбѓ‘бѓ бѓЈбѓњбѓ”бѓ‘бѓђ бѓ›бѓќбѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ–бѓ” бѓђбѓ› бѓ—бѓђбѓ›бѓђбѓЁбѓЁбѓ бѓђбѓ бѓбѓЎ XY."
}
nna.prototype = new vzy;

function wuh() {
    this.xxo = "A MINIMUM TГ‰T";
    this.mlq = "MAXIMUM TГ‰T";
    this.vvf = "MIN. TГ‰T";
    this.yqg = "MAX. TГ‰T";
    this.kos = "TГ‰T";
    this.start = "START";
    this.rtp = "SГљGГ“";
    this.mgi = "SГљGГ“";
    this.kbd = "MENГњ";
    this.nfl = "MENГњ";
    this.mdf = "STOP";
    this.lmm = "HITEL";
    this.dsl = "A JГЃTГ‰KNAK VГ‰GE";
    this.lwb = "NYEREMГ‰NY!";
    this.ebr = "SOK SZERENCSГ‰T!";
    this.win = "NYEREMГ‰NY";
    this.szi = "UTOLSГ“ NYER.";
    this.ugt = "FELГЌR";
    this.bto = "FELГЌR";
    this.kyj = "SZORZГЃS";
    this.ols = "AUTO|START";
    this.fpi = "FELEZГ‰S";
    this.nkt = "KILГ‰PГ‰S";
    this.ner = "START";
    this.uwo = "VГЃLASSZON TГ‰TET";
    this.nkd = "FELEZГ‰S";
    this.ret = "VISSZA A|JГЃTГ‰KHOZ";
    this.fqc = "Г–sszes NyeremГ©ny";
    this.dbl = "FigyelmeztetГ©s";
    this.lmf = "Г–SSZES";
    this.twa = "KГ‰REM VГЃRJON ...";
    this.zjt = "MenГј";
    this.zuw = "SEBESSГ‰G";
    this.jmt = "A MEGHIBГЃSODГЃS Г‰RVГ‰NYTELENГЌT MINDEN JГЃTГ‰KOT Г‰S KIFIZETГ‰ST.";
    this.vsx = "TOVГЃBB";
    this.ypj = "AUTOSTART";
    this.lqx = "SГљGГ“";
    this.jjp = "SZORZГЃS";
    this.left = "BAL";
    this.xoj = "JOBB";
    this.ok = "OK";
    this.nbg = "MГ‰GSEM";
    this.ztu = "SzorzГЎs";
    this.sxw = "FelezГ©s";
    this.nnr = "JГЃTГ‰KSZABГЃLYOK";
    this.byr = "JГЃTГ‰KSZABГЃLYOK";
    this.pgj = "BГіnusz!";
    this.urr = "BГ“NUSZ";
    this.hxq = "A FOLYTATГЃSHOZ NYOMJON MEG EGY GOMBOT";
    this.owc = "NINCS ELГ‰G HITEL";
    this.mpe = "V A L U E";
    this.gej = "nyeremГ©nyek";
    this.of = "/";
    this.icz = "Г‰RINTSE MEG A KГ‰PERNYЕђT A FOLYTATГЃSHOZ";
    this.khm = "BETГ–LTГ‰SE ...";
    this.mbe = "JГЃTГ‰K TГ–RTГ‰NET BETГ–LTГ‰SE ...";
    this.ggl = "KommunikГЎciГіs hiba";
    this.ojg = "ElГ©rte az egyik limitet!";
    this.edt = "ElГ©rte a szabad jГЎtГ©kok maximum szГЎmГЎt!";
    this.trx = "A jГЎtГ©k megГЎllГ­tva";
    this.dde = "JГЎtГ©k Гєjraindul";
    this.ylx = "NYERT";
    this.error = "HIBA";
    this.xup = "FREEPLAY";
    this.scm = "AUTO";
    this.wjk = "JГЃTГ‰K ID";
    this.uhh = "JГЎtГ©k IdЕ‘";
    this.pdp = "utolsГі";
    this.cqd = "jГЎtГ©k";
    this.xnp = "HITEL";
    this.audio = "HANG";
    this.fjm = "ZENE";
    this.qgo = "TELJES KГ‰PERNYЕђ";
    this.uus = "TELJES KГ‰PERNYЕђ";
    this.language = "NYELV";
    this.pib = "Ne mutassa mГ©gegyszer";
    this.pqz = "A hangot nem lehet betГ¶lteni!";
    this.fse = "ForrГЎsok hiГЎnyoznak!";
    this.oyw = "JГЎtГ©k hang nГ©lkГјl?";
    this.uch = "BEГЃLLГЌTГЃS";
    this.ddf = "KГ©rjГјk fordГ­tsa el a kГ©szГјlГ©ket!";
    this.qgx = "INFГ“";
    this.qvw = "A jГЎtГ©khoz kГ©rem tiltsa le a PrivГЎt BГ¶ngГ©szГ©s mГіdot a bГ¶ngГ©szЕ‘jГ©ben.";
    this.bxt = "Ez a jГЎtГ©k Google Chrome bГ¶ngГ©szЕ‘re van optimalizГЎlva.";
    this.epb = "KГ©rjГјk hasznГЎlja a(z)";
    this.fih = " legГєjabb verziГіjГЎt!";
    this.jpd = "Sajnos ez a bГ¶ngГ©szЕ‘ nem teljesen tГЎmogatott.";
    this.riy = "Ez a jГЎtГ©k nem indГ­thatГі FreePlay mГіdban!";
    this.cus = "FordГ­tsa a kГ©szГјlГ©kГ©t ГЎllГі mГіdba, hogy Гєgy jГЎtsszon, mint egy igazi nyerЕ‘gГ©pen!";
    this.lgj = "ГЃllГ­tsa be a jГЎtГ©k felГјletГ©t az Г–n igГ©nyeinek megfelelЕ‘en!";
    this.mho = "VГЃLASSZA KI A MEGFELELЕђ SZГЌNT, HOGY MEGDUPLГЃZZA A NYEREMГ‰NYT";
    this.kim = "VГЃLASSZA KI A MEGFELELЕђ KГЃRTYASZГЌNT, HOGY MEGNГ‰GYSZEREZZE A NYEREMГ‰NYT";
    this.ful = "SZORZГЃS EGY LEHETЕђSГ‰G, HOGY NГ–VELJE A NYEREMГ‰NYT";
    this.kdz = "Statisztika";
    this.tux = "Г–sszes JГЎtГ©k";
    this.bcz = "Г–sszes TГ©t";
    this.dzp = "Г–sszes NyeremГ©ny";
    this.rxc = "Г–sszes JГЎtГ©k IdЕ‘";
    this.ayy = "Elolvastam az Гјzenetet.";
    this.qqx = "KILГ‰PГ‰S";
    this.xak = "ElЕ‘zmГ©nyek";
    this.wli = "Nincsenek jГЎtГ©kok.";
    this.state = "STГЃTUSZ";
    this.dpt = "FЕ‘ JГЎtГ©k";
    this.xqv = "Autom. FelГ­rГЎs";
    this.plg = "FelГ­rva";
    this.oar = "BГіnusz jГЎtГ©k";
    this.qmq = "Respin";
    this.omu = "BГіnusz";
    this.ecn = "ElsЕ‘ LeosztГЎs";
    this.uyr = "MГЎsodik LeosztГЎs";
    this.tan = "Harmadik LeosztГЎs";
    this.isl = "AUTOSTART BEГЃLLГЌTГЃS";
    this.ssg = "JГЎtГ©kok szГЎma:";
    this.nra = "Stop autostart";
    this.gew = "A hitel kevesebb, mint:";
    this.sbg = "A hitel tГ¶bb, mint:";
    this.vpx = "A nyeremГ©ny tГ¶bb, mint:";
    this.mgc = "Az AUTOSTART funkciГі kikapcsolГіdik a bГіnusz jГЎtГ©k kezdetГ©n.";
    this.nji = "MegosztГЎs a Facebook-on";
    this.byc = "KIEGГ‰SZГЌTЕђ TГЃJГ‰KOZTATГЃST A JГЃTГ‰KSZABГЃLYOKBAN TALГЃL.";
    this.dth = "Reality Check";
    this.zsh = "Г–n egy valГіsГЎg-ellenЕ‘rzГ©st kГ©rt.";
    this.izw = "Nyomja meg az ELЕђZMГ‰NYEK lehetЕ‘sГ©get, hogy megtekintse a jГЎtГ©ka elЕ‘zmГ©nyeit.";
    this.klb = "Game break";
    this.lad = "Game limits";
    this.kat = "Self test";
    this.hxh = "Nincs kapcsolat a jГЎtГ©k-szerverrel!";
    this.ytq = "KapcsolГіdГЎsi prГіbГЎlkozГЎs";
    this.dyl = "BejelentkezГ©si hiba!";
    this.gty = "Egy szekciГі mГЎr aktГ­v!";
    this.wwh = "A JГЃTГ‰KOSNAK AZ ELVI KIFIZETГ‰S Г–SSZEGE EBBEN A JГЃTГ‰KBAN XY."
}
wuh.prototype = new vzy;

function coi() {
    this.xxo = "MIZA MINIMД‚ ESTE";
    this.mlq = "MIZA MAXIMД‚";
    this.vvf = "MIZA MIN.";
    this.yqg = "MIZA MAX.";
    this.kos = "MIZД‚";
    this.start = "START";
    this.rtp = "AJUTOR";
    this.mgi = "LISTA|CГ‚ЕћTIGURI";
    this.kbd = "MENIU";
    this.nfl = "MENIUL|JOCULUI";
    this.mdf = "STOP";
    this.lmm = "CREDIT";
    this.dsl = "SFГ‚RЕћIT JOCUL";
    this.lwb = "CГ‚ЕћTIGД‚TOR!";
    this.ebr = "MULT NOROC!";
    this.win = "CГ‚ЕћTIG";
    this.szi = "ULTIMUL CГ‚ЕћTIG";
    this.ugt = "COLECTA";
    this.bto = "COLECTA";
    this.kyj = "JOC";
    this.ols = "AUTO|START";
    this.fpi = "COLECTARE|1/2";
    this.nkt = "IEЕћIRE";
    this.ner = "APД‚SAЕўI START";
    this.uwo = "ALEGEЕўI MIZA";
    this.nkd = "COLECTARE|1/2";
    this.ret = "ГЋNAPOI|LA JOC";
    this.fqc = "CГўЕџtig total";
    this.dbl = "Avertizare";
    this.lmf = "TOTAL";
    this.twa = "AЕћTEPTAЕўI VД‚ ROG ...";
    this.zjt = "Meniul Jocului";
    this.zuw = "VITEZД‚";
    this.jmt = "FД‚RД‚ GARANЕўIE LA DEFECTAREA APARATULUI.";
    this.vsx = "CONTINUARE";
    this.ypj = "AUTOSTART";
    this.lqx = "LISTA CГ‚ЕћTIGURI";
    this.jjp = "JOC";
    this.left = "STГ‚NGA";
    this.xoj = "DREAPTA";
    this.ok = "OK";
    this.nbg = "ГЋNTRERUPERE";
    this.ztu = "Joc";
    this.sxw = "Colectare 1/2";
    this.nnr = "REGULILE JOCULUI";
    this.byr = "REGULILE|JOCULUI";
    this.pgj = "Bonus!";
    this.urr = "BONUS";
    this.hxq = "PENTRU CONTINUARE APASД‚ PE UN BUTON";
    this.owc = "CREDIT INSUFICIENT.";
    this.gej = "cГўЕџtigДѓ";
    this.mpe = "V A L U E";
    this.of = "DIN";
    this.icz = "ATINGEИљI ECRANUL PENTRU A CONTINUA";
    this.khm = "ГЋNCARCД‚ ...";
    this.mbe = "ГЋNCARCД‚ ISTORIC ...";
    this.ggl = "Eroare de comunicare";
    this.ojg = "AЕЈi atins una dintre limite!";
    this.edt = "AЕЈi atins numДѓrul maxim de jocuri gratis!";
    this.trx = "Jocul se Г®ncheie";
    this.dde = "Jocul se restarteazДѓ";
    this.ylx = "CГ‚ЕћTIGAT";
    this.error = "EROARE";
    this.xup = "FREEPLAY";
    this.scm = "AUTO";
    this.wjk = "ID JOC";
    this.uhh = "TIMP DE JOC";
    this.pdp = "ultimele";
    this.cqd = "jocuri";
    this.xnp = "CREDIT";
    this.audio = "AUDIO";
    this.fjm = "MUZICД‚";
    this.qgo = "ECRAN COMPLET";
    this.uus = "ECRAN|COMPLET";
    this.language = "LIMBA";
    this.pib = "Nu reafiИ™aИ›i";
    this.pqz = "Sunetele nu pot fi Г®ncДѓrcate!";
    this.fse = "Lipsesc resurse!";
    this.oyw = "JucaЕЈi fДѓrДѓ sunet?";
    this.uch = "SETД‚RI";
    this.ddf = "VДѓ rugДѓm opriЕЈi aparatul!";
    this.qgx = "INFO";
    this.qvw = "VДѓ rugДѓm dezactivaЕЈi PRIVATE MODE Г®n browser-ul dvs. pentru a juca.";
    this.bxt = "Acest joc este optimizat pentru Google Chrome.";
    this.cou = "VДѓ rugДѓm utilizaЕЈi versiunea actualДѓ";
    this.jpd = "Din pДѓcate acest browser nu este sprijinit complet.";
    this.riy = "Acest joc nu poate fi pornit Г®n modul freeplay!";
    this.cus = "TreceЕЈi aparatul dvs. Г®n modul portret, pentru a juca ca la o maЕџinДѓ automatДѓ!";
    this.lgj = "AjusteazДѓ interfaЕЈa de joc nevoilor dvs!";
    this.mho = "SELECTEAZД‚ CULOAREA CORECTД‚ PENTRU DUBLAREA CГ‚ЕћTIGULUI";
    this.kim = "SELECTEAZД‚ CULOAREA CORECTД‚ A CД‚RЕўII PENTRU A CГ‚ЕћTIGA DE 4 ORI";
    this.ful = "JOACД‚ PENTRU ЕћANSA DE A CREЕћTE PROFITUL";
    this.kdz = "StatisticДѓ";
    this.tux = "NumДѓr jocuri";
    this.bcz = "Pariuri totale";
    this.dzp = "CГўЕџtig total";
    this.rxc = "Timp total de joc";
    this.ayy = "Am citit mesajul.";
    this.qqx = "ГЋNCHEIERE|JOC";
    this.xak = "ISTORIC";
    this.wli = "Nu existДѓ jocuri.";
    this.state = "STATUT";
    this.dpt = "Joc principal";
    this.xqv = "Auto colectare";
    this.plg = "Colectat";
    this.oar = "Bonusspins";
    this.qmq = "Respin";
    this.omu = "Bonus";
    this.ecn = "Primul Deal";
    this.uyr = "Al doilea deal";
    this.tan = "Al treilea deal";
    this.isl = "SETД‚RI AUTOSTART";
    this.ssg = "NumДѓrul jocurilor:";
    this.nra = "Oprire autostart";
    this.gew = "Credit sub:";
    this.sbg = "Credit peste:";
    this.vpx = "CГўИ™tig peste:";
    this.mgc = "Autostart se va opti la Г®nceperea bonusului.";
    this.nji = "Distribuie Facebook";
    this.byc = "PENTRU INFORMAЕўII SUPLIMENTARE, VEZI REGULILE JOCULUI.";
    this.dth = "Reality Check";
    this.zsh = "Ai cerut un Reality Check.";
    this.izw = "ApasДѓ ISTORIC pentru a vedea istoricul tДѓu de joc.";
    this.klb = "Game break";
    this.lad = "Game limits";
    this.kat = "Self test";
    this.hxh = "FДѓrДѓ conexiune la serverul de jocuri!";
    this.ytq = "Tentative de conectare";
    this.dyl = "Conectare nereuЕџitДѓ!";
    this.gty = "ExistДѓ deja o sesiune activДѓ!";
    this.wwh = "DECONTAREA TEORETICД‚ CД‚TRE JUCД‚TORI A ACESTUI JOC ESTE DE XY."
}
coi.prototype = new vzy;

function epm() {
    this.xxo = "MГЌNIMA APOSTA Г‰";
    this.mlq = "MГЃX. APOSTA";
    this.vvf = "MГЌN. APOSTA";
    this.yqg = "MГЃX. APOSTA";
    this.kos = "APOSTA";
    this.start = "PARTIDA";
    this.rtp = "AJUDA";
    this.mgi = "ESQUEMA|DE PAGOS";
    this.kbd = "MENU";
    this.nfl = "SELEГ‡ГѓO|DE JOGOS";
    this.mdf = "PARADA";
    this.lmm = "CRГ‰DITO";
    this.dsl = "FIM DO JOGO";
    this.lwb = "VENCEDOR!";
    this.ebr = "BOA SORTE!";
    this.win = "GANHO";
    this.szi = "ULTIMO GANHO";
    this.ugt = "COLETAR";
    this.bto = "COLETAR";
    this.kyj = "JOGADA";
    this.ols = "AUTO|PARTIDA";
    this.fpi = "METADE";
    this.nkt = "SAГЌDA";
    this.ner = "PREMIR PARTIDA";
    this.uwo = "SELECIONAR APOSTA";
    this.nkd = "METADE";
    this.ret = "VOLTAR|PARA|O JOGO";
    this.fqc = "Ganho total";
    this.dbl = "Aviso";
    this.lmf = "TOTAL";
    this.twa = "AGUARDE POR FAVOR ...";
    this.zjt = "SeleГ§ГЈo de jogos";
    this.zuw = "VELOCIDADE";
    this.jmt = "NГѓO SE ASSUME RESPONSABILIDADE POR AVARIAS NA MГЃQUINA.";
    this.vsx = "CONTINUAR";
    this.ypj = "AUTOPARTIDA";
    this.lqx = "ESQUEMA DE PAGOS";
    this.jjp = "JOGADA";
    this.left = "ESQUERDA";
    this.xoj = "DIREITA";
    this.ok = "OK";
    this.nbg = "CANCELAR";
    this.ztu = "Jogada";
    this.sxw = "Metade";
    this.nnr = "REGRAS DO JOGO";
    this.byr = "REGRAS|DO JOGO";
    this.pgj = "Bonus!";
    this.urr = "BONUS";
    this.hxq = "PREMIR QUALQUER TECLA PARA CONTINUAR";
    this.owc = "NГѓO HГЃ CRГ‰DITO SUFICIENTE!";
    this.gej = "ganha";
    this.mpe = "V A L U E";
    this.of = "DE";
    this.icz = "TOCAR NA TELA PARA CONTINUAR";
    this.khm = "CARREGANDO ...";
    this.mbe = "CARREGANDO HISTГ“RICO ...";
    this.ggl = "Erro de comunicaГ§ГЈo";
    this.ojg = "AlcanГ§ou um dos limities!";
    this.edt = "AlcanГ§ou a quantidade mГЎxima de jogos livres!";
    this.trx = "O jogo serГЎ encerrado";
    this.dde = "O jogo serГЎ reiniciado";
    this.ylx = "GANHOU";
    this.error = "ERRO";
    this.xup = "FREEPLAY";
    this.scm = "AUTO";
    this.wjk = "ID JOGO";
    this.uhh = "Playing Time";
    this.pdp = "Гљltimos";
    this.cqd = "jogos";
    this.xnp = "DEPOSIT";
    this.audio = "AUDIO";
    this.fjm = "MUSIC";
    this.qgo = "TELA CHEIA";
    this.uus = "TELA|CHEIA";
    this.language = "IDIOMA";
    this.pib = "NГЈo exibir novamente";
    this.pqz = "Sounds nГЈo podem ser carregados!";
    this.fse = "Faltam recursos!";
    this.oyw = "Jogar sem som?";
    this.uch = "AJUSTES";
    this.ddf = "Favor girar o seu aparelho!";
    this.qgx = "INFORMAГ‡ГѓO";
    this.qvw = "Favor desativar o MODO PRIVADO no browser para iniciar o jogo.";
    this.bxt = "Este jogo Г© otimizado por Google Chrome.";
    this.cou = "Favor usar a versГЈo atual de";
    this.jpd = "Infelizmente este browser nГЈo Г© completamente suportado.";
    this.riy = "Este jogo nГЈo pode ser iniciado no modo de jogo livre!";
    this.cus = "Girar o seu aparelho para o modo de portrait, para jogar como em uma mГЎquina real!";
    this.lgj = "Adapte a interface do jogo Г s suas necessidades!";
    this.mho = "ESCOLHA A COR CERTA PARA DOBRAR O GANHO";
    this.kim = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.ful = "GAMBLE PARA A CHANCE DE AUMENTAR O GANHO";
    this.kdz = "EstatГ­sticas";
    this.tux = "NГєmero de jogos";
    this.bcz = "Aposta total";
    this.dzp = "Ganho total";
    this.rxc = "Tempo total do jogo";
    this.ayy = "Eu lГ­ esta mensagem.";
    this.qqx = "ENCERRAR|JOGO";
    this.xak = "HISTГ“RICO";
    this.wli = "Ainda nГЈo existem jogos.";
    this.state = "ESTADO";
    this.dpt = "Jogo principal";
    this.xqv = "Coletado automaticamente";
    this.plg = "Coletado";
    this.oar = "Bonusspins";
    this.qmq = "Respin";
    this.omu = "Bonus";
    this.ecn = "Primeiro Deal";
    this.uyr = "Segundo Deal";
    this.tan = "Terceiro Deal";
    this.isl = "AJUSTES AUTOPARTIDA";
    this.ssg = "NГєmero de jogos:";
    this.nra = "Parar autopartida";
    this.gew = "CrГ©dito menor do que:";
    this.sbg = "CrГ©dito maior do que:";
    this.vpx = "Ganho maior do que:";
    this.mgc = "O autopartida serГЎ parado no inГ­cio do bonus.";
    this.nji = "Participar no Facebook";
    this.byc = "PARA MAIS INFORMAГ‡Г•ES, CONSULTE AS REGRAS DO JOGO.";
    this.dth = "Reality Check";
    this.zsh = "Solicitaste um Reality Check.";
    this.izw = "Pressione HISTГ“RICO para ver seu histГіrico de jogos.";
    this.klb = "Game break";
    this.lad = "Game limits";
    this.kat = "Self test";
    this.hxh = "Nenhuma conexГЈo com o servidor do jogo!";
    this.ytq = "Tentativas de conexГЈo";
    this.dyl = "Login falhou!";
    this.gty = "Ja existe uma sessГЈo ativa!";
    this.wwh = "O PAGAMENTO TEГ“RICO AO JOGADOR PARA ESTE JOGO Г‰ DE XY."
}
epm.prototype = new vzy;

function nyg() {
    this.xxo = "LA MISE MINIMALE EST DE";
    this.mlq = "MISE MAX.";
    this.vvf = "MISE MINI";
    this.yqg = "MISE MAX.";
    this.kos = "MISE";
    this.start = "DEPART";
    this.rtp = "AIDE";
    this.mgi = "TABLEAU|DES PAIEMENTS";
    this.kbd = "MENU";
    this.nfl = "PLUS|DE JEUX";
    this.mdf = "ARRГЉTEZ";
    this.lmm = "CRГ‰DIT";
    this.dsl = "FIN DU JEU";
    this.lwb = "GAGNANT!";
    this.ebr = "BONNE CHANCE!";
    this.win = "GAIN";
    this.szi = "DERNIER GAIN";
    this.ugt = "ENCAISSER";
    this.bto = "ENCAISSER";
    this.kyj = "DOUBLER";
    this.ols = "AUTO|LANCER";
    this.fpi = "ENCAISSER|MOITIГ‰";
    this.nkt = "SORTIE";
    this.ner = "APPUYEZ SUR START";
    this.uwo = "CHOISIR LA MISE";
    this.nkd = "ENCAISSER|MOITIГ‰";
    this.ret = "RETOUR|AU JEU";
    this.fqc = "Gain total";
    this.dbl = "Avertissement";
    this.lmf = "TOTALE";
    this.twa = "ATTENDEZ S'IL VOUS PLAГЋT ...";
    this.zjt = "Plus de jeux";
    this.zuw = "VITESSE";
    this.jmt = "ГЃ L'OCCASION DВґERREUR DВґAPPAREIL DГ‰CLINER TOUTE RESPONSABILITГ‰.";
    this.vsx = "CONTINUER";
    this.ypj = "AUTO LANCER";
    this.lqx = "TABLEAU DES PAIEMENTS";
    this.jjp = "DOUBLER";
    this.left = "GAUCHE";
    this.xoj = "DROITE";
    this.ok = "OK";
    this.nbg = "ANNULER";
    this.ztu = "Doubler";
    this.sxw = "Encaisser moitiГ©";
    this.nnr = "RГ€GLES DU JEU";
    this.byr = "RГ€GLES DU JEU";
    this.pgj = "Bonus!";
    this.urr = "BONUS";
    this.hxq = "APPUYEZ SUR UNE TOUCHE POUR CONTINUER";
    this.owc = "PAS ASSEZ DE CRГ‰DIT";
    this.gej = "gagne";
    this.mpe = "V A L U E";
    this.of = "SUR";
    this.icz = "EFFLEURE L'Г‰CRAN POUR CONTINUER";
    this.khm = "CHARGEMENT EN COURS ...";
    this.mbe = "CHARGEMENT DE L'HISTORIQUE EN COURS ...";
    this.ggl = "Erreur de communication";
    this.ojg = "Vous avez atteint une des limites!";
    this.edt = "Vous avez atteint le nombre maximum des jeux gratuits!";
    this.trx = "Le jeu sera terminГ©";
    this.dde = "Le jeu sera dГ©marrГ© de nouveau";
    this.ylx = "GAGNГ‰";
    this.error = "ERREUR";
    this.xup = "JEU GRATUIT";
    this.scm = "AUTO";
    this.wjk = "ID DU JEU";
    this.uhh = "TEMPS DE JEU";
    this.pdp = "Les";
    this.cqd = "derniers jeux";
    this.xnp = "AVOIR";
    this.audio = "AUDIO";
    this.fjm = "MUSIQUE";
    this.qgo = "PLEIN Г‰CRAN";
    this.uus = "PLEIN|Г‰CRAN";
    this.language = "LANGUE";
    this.pib = "Ne pas afficher encore une fois";
    this.pqz = "Impossible de charger des sounds!";
    this.fse = "Manque de ressources!";
    this.oyw = "Jouer sans son?";
    this.uch = "CONFIGUR.";
    this.ddf = "Merci de tourner votre matГ©riel!";
    this.qgx = "INFO";
    this.qvw = "Veuillez dГ©sactiver le MODE PRIVГ‰ dans le navigateur afin de dГ©marrer le jeu.";
    this.bxt = "Ce jeu est optimisГ© pour Google Chrome.";
    this.cou = "Veuilllez utiliser la version Г  jour de";
    this.jpd = "Malheureusement, ce browser n'est intГ©gralement supportГ©.";
    this.riy = "Impossible de dГ©marrer ce jeu au mode jeu gratuit!";
    this.cus = "Tournez votre matГ©riel dans le mode portrait pour jouer comme sur une vГ©ritable machine!";
    this.lgj = "Adapte l'interface de jeu Г  tes besoins!";
    this.mho = "CHOISIS LA BONNE COULEUR AFIN DE DOUBLER LE GAIN";
    this.kim = "CHOISIS LA BONNE COULEUR DE LA CARTE AFIN DE QUADRUPLER LE GAIN";
    this.ful = "GAMBLE POUR LA CHANCE DE MULTIPLIER LE GAIN";
    this.kdz = "Statistiques";
    this.tux = "Nombre des jeux";
    this.bcz = "Total des mises";
    this.dzp = "Gain total";
    this.rxc = "Temps total du jeu";
    this.ayy = "J'ai lu le message";
    this.qqx = "TERMINER|LE JEU";
    this.xak = "Historique";
    this.wli = "Il n'y a pas encore de jeux jouГ©s.";
    this.state = "Г‰TAT";
    this.dpt = "Jeu principal";
    this.xqv = "Pris automatiquement";
    this.plg = "Pris";
    this.oar = "Bonusspins";
    this.qmq = "Respin";
    this.omu = "Bonus";
    this.ecn = "Premier Deal";
    this.uyr = "DeuxiГЁme Deal";
    this.tan = "TroisiГЁme Deal";
    this.isl = "AUTOSTART CONFIGURATION";
    this.ssg = "Nombre des jeux:";
    this.nra = "ArrГЄter autostart";
    this.gew = "CrГ©dit infГ©rieur Г :";
    this.sbg = "CrГ©dit supГ©rieur Г :";
    this.vpx = "Gain supГ©rieur Г :";
    this.mgc = "L'autostart est arrГЄtГ© au dГ©but du bonus.";
    this.nji = "Partager sur Facebook";
    this.byc = "POUR PLUS D'INFORMATIONS, CONSULTEZ LES RГ€GLES DU JEU.";
    this.dth = "Reality Check";
    this.zsh = "Tu as demandГ© un Reality Check.";
    this.izw = "Appuie sur HISTORIQUE pour afficher ton historique de jeu.";
    this.klb = "Game break";
    this.lad = "Game limits";
    this.kat = "Self test";
    this.hxh = "Aucune connexion avec le gaming serveur!";
    this.ytq = "Tentatives de connexion";
    this.dyl = "Connexion Г©chouГ©e!";
    this.gty = "Il y a dГ©jГ  une session active!";
    this.wwh = "LE VERSEMENT THГ‰ORIQUE AU JOUEUR POUR CE JEU S'Г‰LГ€VE ГЂ XY."
}
nyg.prototype = new vzy;

function env() {
    this.xxo = "NAJMANJI ULOG JE";
    this.mlq = "MAX ULOG";
    this.vvf = "MIN. ULOG";
    this.yqg = "MAKS. ULOG";
    this.kos = "ULOG";
    this.start = "START";
    this.rtp = "POMOД†";
    this.mgi = "LISTA DOBITAKA";
    this.kbd = "IZBORNIK";
    this.nfl = "VIЕ E|IGARA";
    this.mdf = "STOP";
    this.lmm = "KREDIT";
    this.dsl = "KRAJ IGRE";
    this.lwb = "DOBITAK!";
    this.ebr = "SRETNO!";
    this.win = "DOBITAK";
    this.szi = "ZADNJI DOBITAK";
    this.ugt = "UPIЕ I";
    this.bto = "UPIЕ I";
    this.kyj = "DUPLANJE";
    this.ols = "AUTO|START";
    this.fpi = "UZMI|1/2";
    this.nkt = "IZLAZ";
    this.ner = "PRITISNITE START";
    this.uwo = "BIRAJTE ULOG";
    this.nkd = "UZMI|1/2";
    this.ret = "POVRATAK|U IGRU";
    this.fqc = "Ukupni dobitci";
    this.dbl = "Upozorenje";
    this.lmf = "UKUPNI";
    this.twa = "MOLIMO PRIДЊEKAJTE ...";
    this.zjt = "ViЕЎe igara";
    this.zuw = "BRZINA";
    this.jmt = "Kod kvara na ureД‘aju nema jamstva.";
    this.vsx = "DALJE";
    this.ypj = "AUTOSTART";
    this.lqx = "LISTA DOBITAKA";
    this.jjp = "DUPLANJE";
    this.left = "LIJEVA";
    this.xoj = "DESNA";
    this.ok = "OK";
    this.nbg = "PREKID";
    this.ztu = "Duplanje";
    this.sxw = "Uzmi 1/2";
    this.nnr = "PRAVILA IGRE";
    this.byr = "PRAVILA IGRE";
    this.pgj = "Bonus!";
    this.urr = "BONUS";
    this.hxq = "ZA NASTAVITI PRITISNITE BILO KOJU TIPKU";
    this.owc = "NEMATE DOVOLJNO KREDITA.";
    this.gej = "dobici";
    this.mpe = "V A L U E";
    this.of = "OD";
    this.icz = "ZA NASTAVAK DODIRNITE ZASLON";
    this.khm = "UДЊITAVANJA ...";
    this.mbe = "POVIJEST UДЊITAVANJA ...";
    this.ggl = "Komunikacijska pogreЕЎka";
    this.ojg = "Dostigli ste jednu od graniДЌnih vrijednosti!";
    this.edt = "Dostigli ste maksimum besplatnih igara!";
    this.trx = "Igra se zatvara";
    this.dde = "Igra se iznova uДЌitava";
    this.ylx = "OSVOJENO";
    this.error = "POGREЕ KA";
    this.xup = "FREEPLAY";
    this.scm = "AUTO";
    this.wjk = "ID IGRE";
    this.uhh = "Vrijeme igre";
    this.pdp = "posljednjih";
    this.cqd = "igara";
    this.xnp = "DEPOZIT";
    this.audio = "ZVUKA";
    this.fjm = "GLAZBA";
    this.qgo = "PUN ZASLON";
    this.uus = "PUN ZASLON";
    this.language = "JEZIKA";
    this.pib = "Ne prikazuj ponovo";
    this.pqz = "Zvukovi se ne mogu uДЌitati!";
    this.fse = "Nedostaju resursi!";
    this.oyw = "ЕЅelite li igrati uz zvuk?";
    this.uch = "POSTAVKE";
    this.ddf = "UkljuДЌite svoj ureД‘aj!";
    this.qgx = "INFORMACIJE";
    this.qvw = "Molimo deaktivirajte PRIVATNI MOD u VaЕЎem pregledniku kako biste mogli igrati";
    this.bxt = "Ova igra je optimizirana za Google Chrome.";
    this.cou = "Molimo koristite se trenutnom inaДЌicom";
    this.jpd = "NaЕѕalost ovaj preglednik nije u potpunosti podrЕѕan";
    this.riy = "Ova se igra ne moЕѕe pokrenuti u reЕѕimu slobodne igre!";
    this.cus = "Podesite svoj ureД‘aj na portretni format kako biste igrali kao na pravoma automatu!";
    this.lgj = "Prilagodite suДЌelje igre svojim potrebama!";
    this.mho = "ODABERI PRAVU BOJU I TIME UDVOSTRUДЊI DOBITAK";
    this.kim = "ODABERI PRAVI ZNAK I TIME UДЊETVEROSTRUДЊI DOBITAK";
    this.ful = "KOCKANJEM OSVOJI Е ANSU ZA POVEД†ANJE DOBITKA";
    this.kdz = "Statistike";
    this.tux = "Ukupno igara";
    this.bcz = "Ukupni ulog";
    this.dzp = "Ukupno dobitaka";
    this.rxc = "Ukupno vrijeme igre";
    this.ayy = "ProДЌitao sam ovu poruku";
    this.qqx = "IZLAZ|IZ IGRE";
    this.xak = "Povijest";
    this.wli = "Nema odigranih igara.";
    this.state = "STANJE";
    this.dpt = "Glavna igra";
    this.xqv = "Auto. pokupljeno";
    this.plg = "Pokupljeno";
    this.oar = "Besplatne igre";
    this.qmq = "Dodatne okretaje";
    this.omu = "Bonus";
    this.ecn = "Prvo dijeljenje";
    this.uyr = "Drugo dijeljenje";
    this.tan = "TreД‡e dijeljenje";
    this.isl = "POSTAVKE AUTOMATSKE IGRE";
    this.ssg = "Ukupno igara:";
    this.nra = "Zaustavljanje automatske igre";
    this.gew = "Kredit manji od:";
    this.sbg = "Kredit veД‡i od:";
    this.vpx = "Dobitak veД‡i od:";
    this.mgc = "Automatska igra Д‡e se zaustaviti na poДЌetku besplatne igre.";
    this.nji = "Podijeli na Facebooku";
    this.byc = "ZA VIЕ E INFORMACIJA POGLEDAJTE PRAVILA IGRE.";
    this.dth = "Reality Check";
    this.zsh = "ZatraЕѕili ste Reality Check.";
    this.izw = "Pritisni POVIJEST za pregled prijaЕЎnjih igara.";
    this.klb = "Game break";
    this.lad = "Game limits";
    this.kat = "Self test";
    this.hxh = "Nema konekcije sa serverom za igranje!";
    this.ytq = "PokuЕЎaji povezivanja";
    this.dyl = "Prijavljivanje nije uspjelo!";
    this.gty = "Aktivna sesija veД‡ postoji!";
    this.wwh = "TEORETSKI POVRATAK NA IGRAДЊA ZA OVU IGRU JE XY."
}
env.prototype = new vzy;

function ikg() {
    this.xxo = "MINIMA PUNTATA Г€";
    this.mlq = "PUNTATA MASSIMA";
    this.vvf = "MIN. PUNTATA";
    this.yqg = "MASS. PUNTATA";
    this.kos = "PUNTATA";
    this.start = "START";
    this.rtp = "AIUTO";
    this.mgi = "TABELLA VINCITE";
    this.kbd = "MENU";
    this.nfl = "SCELTA|GIOCHI";
    this.mdf = "STOP";
    this.lmm = "CREDITO";
    this.dsl = "FINE PARTITA";
    this.lwb = "VINCITORE!";
    this.ebr = "BUONA FORTUNA!";
    this.win = "VINCITA";
    this.szi = "ULTIMA VINCITA";
    this.ugt = "INCASSA";
    this.bto = "INCASSA";
    this.kyj = "GAMBLE";
    this.ols = "AUTO|START";
    this.fpi = "METГЂ";
    this.nkt = "FINE";
    this.ner = "PREMI START";
    this.uwo = "SCEGLI PUNTATA";
    this.nkd = "METГЂ";
    this.ret = "RITORNO|AL GIOCO";
    this.fqc = "Totale vincita";
    this.dbl = "Attenzione";
    this.lmf = "TOTALE";
    this.twa = "ATTENDERE PREGO ...";
    this.zjt = "Scelta Giochi";
    this.zuw = "VELOCITГЂ";
    this.jmt = "In caso di malfunzionamento nessuna responsabilitГ  assunta.";
    this.vsx = "CONTINUA";
    this.ypj = "AUTOSTART";
    this.lqx = "TABELLA VINCITE";
    this.jjp = "GAMBLE";
    this.left = "SINISTRA";
    this.xoj = "DESTRA";
    this.ok = "OK";
    this.nbg = "CANCELLA";
    this.ztu = "Gamble";
    this.sxw = "MetГ ";
    this.nnr = "REGOLAMENTO";
    this.byr = "REGOLAMENTO";
    this.pgj = "Bonus!";
    this.urr = "BONUS";
    this.hxq = "PREMI UN TASTO PER CONTINUARE";
    this.owc = "CREDITO INSUFFICIENTE!";
    this.gej = "vince";
    this.mpe = "V A L U E";
    this.of = "DI";
    this.icz = "TOCCARE LO SCHERMO PER CONTINUARE";
    this.khm = "STA CARICANDO ...";
    this.mbe = "STA CARICANDO LA CRONACA ...";
    this.ggl = "Errore di comunicazione";
    this.ojg = "Hai raggiunto uno dei limiti!";
    this.edt = "Hai raggiunto il numero massimo di free games!";
    this.trx = "La partita sta terminando";
    this.dde = "La partita sta ripartendo";
    this.ylx = "VINTO";
    this.error = "ERRORE";
    this.xup = "FREEPLAY";
    this.scm = "AUTO";
    this.wjk = "GAME ID";
    this.uhh = "Durata del gioco";
    this.pdp = "Ultime partite";
    this.cqd = "";
    this.xnp = "DEPOSITO";
    this.audio = "AUDIO";
    this.fjm = "MUSICA";
    this.qgo = "SCHERMO INTERO";
    this.uus = "SCHERMO INTERO";
    this.language = "LINGUA";
    this.pib = "Non mostrare di nuovo";
    this.pqz = "Suoni non caricabili!";
    this.fse = "Mancano risorse!";
    this.oyw = "Giocare senza suoni?";
    this.uch = "SETTAGGI";
    this.ddf = "Prego girare l'apparecchio!";
    this.qgx = "INFO";
    this.qvw = "Prego disattivare il MODO PRIVATO nel browser per iniziare la partita";
    this.bxt = "La partita ГЁ ottimizzata per Google Chrome.";
    this.cou = "Prego utilizzare la versione attuale di";
    this.jpd = "Purtroppo il presente browser non viene supportato interamente";
    this.riy = "Impossibile avviare questa partita nel modo freeplay!";
    this.cus = "Girare l'apparecchio nel modo ritratto per giocare come su un apparecchio vero!";
    this.lgj = "Aggiusta l'interfaccia del gioco come ti piace!";
    this.mho = "SCEGLI IL COLORE GIUSTO PER RADDOPPIARE LA VINCITA";
    this.kim = "SCEGLI IL SEME GIUSTO PER QUADRUPLARE LA VINCITA";
    this.ful = "GAMBLE PER L'OPPORTUNITГЂ DI AUMENTARE LA VINCITA";
    this.kdz = "Statistica";
    this.tux = "Totale partite";
    this.bcz = "Totale puntata";
    this.dzp = "Totale vincita";
    this.rxc = "Totale durata del gioco";
    this.ayy = "Ho letto il messaggio";
    this.qqx = "TERMINARE|LA PARTITA";
    this.xak = "Cronaca";
    this.wli = "Nessuna partita giocata.";
    this.state = "STATO";
    this.dpt = "Partita principale";
    this.xqv = "Raccolto autom.";
    this.plg = "Raccolto";
    this.oar = "Bonusspin";
    this.qmq = "Respin";
    this.omu = "Bonus";
    this.ecn = "Primo deal";
    this.uyr = "Secondo deal";
    this.tan = "Terzo deal";
    this.isl = "SETTAGGI AUTOSTART";
    this.ssg = "Numero di partite:";
    this.nra = "Fermare l'autostart";
    this.gew = "Credito piГ№ basso di:";
    this.sbg = "Credito piГ№ alto di:";
    this.vpx = "Vincita piГ№ alta di:";
    this.mgc = "L'autostart si ferma all'inizio del bonus.";
    this.nji = "Dividi su facebook";
    this.byc = "PER ULTERIORI INFORMAZIONI CONSULTARE LE REGOLE DI GIOCO.";
    this.dth = "Reality Check";
    this.zsh = "Avete richiesto un Reality Check.";
    this.izw = "Premere CRONACA per mostrare la cronaca della giocata.";
    this.klb = "Game break";
    this.lad = "Game limits";
    this.kat = "Self test";
    this.hxh = "Nessuna connessione al gaming server!";
    this.ytq = "Tentativi di connessione";
    this.dyl = "Login fallito!";
    this.gty = "Г€ giГ  attiva una seduta!";
    this.wwh = "IL PAGAMENTO TEORICO DI QUESTO GIOCO IN FAVORE DEL GIOCATORE AMMONTA A XY."
}
ikg.prototype = new vzy;

function ouo() {
    this.xxo = "MIN. INSATSEN Г„R";
    this.mlq = "MAXIMAL INSATS";
    this.vvf = "MIN. INSATS";
    this.yqg = "MAX. INSATS";
    this.kos = "INSATS";
    this.start = "STARTA";
    this.rtp = "HJГ„LP";
    this.mgi = "VINSTTABELL";
    this.kbd = "MENY";
    this.nfl = "FLER|SPEL";
    this.mdf = "STOPP";
    this.lmm = "KREDIT";
    this.dsl = "SPELET Г„R SLUT";
    this.lwb = "VINNARE!";
    this.ebr = "LYCKA TILL!";
    this.win = "VINN";
    this.szi = "SENASTE VINSTEN";
    this.ugt = "INKASSERA";
    this.bto = "INKASSERA";
    this.kyj = "DUBBLERA";
    this.ols = "AUTO|START";
    this.fpi = "HГ„LFTEN|1/2";
    this.nkt = "AVSLUTA";
    this.ner = "TRYCK PГ… STARTA";
    this.uwo = "VГ„LJ INSATS";
    this.nkd = "HГ„LFTEN";
    this.ret = "Г…TERGГ…|TILL SPELET";
    this.fqc = "Total Vinst";
    this.dbl = "Varning";
    this.lmf = "TOTALT";
    this.twa = "VAR VГ„NLIG VГ„NTA ...";
    this.zjt = "Fler spel";
    this.zuw = "TEMPO";
    this.jmt = "Vid tekniskt fel annulleras alla insatser och spel.";
    this.vsx = "FORTSГ„TT";
    this.ypj = "AUTOSTART";
    this.lqx = "VINSTTABELL";
    this.jjp = "DUBBLERA";
    this.left = "VГ„NSTER";
    this.xoj = "HГ–GER";
    this.ok = "OK";
    this.nbg = "AVBRYT";
    this.ztu = "Dubblering";
    this.sxw = "HГ¤lften";
    this.nnr = "SPELREGLER";
    this.byr = "SPELREGLER";
    this.pgj = "Bonus!";
    this.urr = "BONUS";
    this.hxq = "TRYCK PГ… EN KNAPP FГ–R ATT FORTSГ„TTA";
    this.owc = "FГ–R LГ…GT SALDO!";
    this.gej = "vinster";
    this.mpe = "V A L U E";
    this.of = "AV";
    this.icz = "PEKA PГ… SKГ„RMEN FГ–R ATT FORTSГ„TTA";
    this.khm = "LГ„SER ...";
    this.mbe = "LГ„SER IN HISTORIKEN ...";
    this.ggl = "Kommunikationsfel";
    this.ojg = "Du har nГҐtt en av grГ¤nserna!";
    this.edt = "Du har nГҐtt det maximala antalet gratisspel!";
    this.trx = "Spelet avslutas";
    this.dde = "Spelet startas om";
    this.ylx = "VUNNA";
    this.error = "FEL";
    this.xup = "GRATISSPEL";
    this.scm = "AUTO";
    this.wjk = "SPEL-ID";
    this.uhh = "SPELTID";
    this.pdp = "senaste";
    this.cqd = "spelen";
    this.xnp = "INSГ„TTNING";
    this.audio = "LJUD";
    this.fjm = "MUSIK";
    this.qgo = "HELSKГ„RM";
    this.uus = "HELSKГ„RM";
    this.language = "SPRГ…K";
    this.pib = "Visa inte igen";
    this.pqz = "Ljud kan inte laddas!";
    this.fse = "Resurser saknas!";
    this.oyw = "Spela utan ljud?";
    this.uch = "INSTГ„LLN.";
    this.ddf = "VГ¤nd din enhet!";
    this.qgx = "INFO";
    this.qvw = "Avaktivera PRIVATLГ„GET i din webblГ¤sare fГ¶r att spela spelet.";
    this.bxt = "Det hГ¤r spelet Г¤r optimerat fГ¶r Google Chrome.";
    this.cou = "AnvГ¤nd den senaste versionen av";
    this.jpd = "TyvГ¤rr stГ¶ds inte den hГ¤r webblГ¤saren fullt ut.";
    this.riy = "Det hГ¤r spelet kan inte startas i gratisspelslГ¤get!";
    this.cus = "HГҐll din enhet i portrГ¤ttlГ¤ge fГ¶r att spela som pГҐ en riktig spelautomat!";
    this.lgj = "Anpassa spelgrГ¤nssnittet efter dina behov!";
    this.mho = "VГ„LJ RГ„TT FГ„RG FГ–R ATT DUBBLA VINSTEN";
    this.kim = "VГ„LJ RГ„TT FГ„RGSVIT FГ–R ATT FYRDUBBLA VINSTEN";
    this.ful = "SPELA FГ–R ATT FГ… CHANSEN ATT Г–KA VINSTEN";
    this.kdz = "Statistik";
    this.tux = "Totalt antal spel";
    this.bcz = "Totalinsats";
    this.dzp = "Totalvinst";
    this.rxc = "Total speltid";
    this.ayy = "Jag har lГ¤st detta meddelande";
    this.qqx = "AVSLUTA|SPELET";
    this.xak = "Historik";
    this.wli = "Inga spel har spelats.";
    this.state = "STATUS";
    this.dpt = "Huvudspel";
    this.xqv = "Auto. Inkasserat";
    this.plg = "Inkasserat";
    this.oar = "Bonusspinn";
    this.qmq = "Respin";
    this.omu = "Bonus";
    this.ecn = "FГ¶rsta given";
    this.uyr = "Andra given";
    this.tan = "Tredje given";
    this.isl = "AUTOSPELINSTГ„LLNINGAR";
    this.ssg = "Antal spelrundor:";
    this.nra = "Stoppa automatiskt spel";
    this.gew = "Saldo lГ¤gre Г¤n:";
    this.sbg = "Saldo hГ¶gre Г¤n:";
    this.vpx = "Vinst hГ¶gre Г¤n:";
    this.mgc = "Autospelen kommer att stoppas dГҐ bonusen startar.";
    this.nji = "Dela pГҐ Facebook";
    this.byc = "SE SPELREGLERNA FГ–R MER INFORMATION.";
    this.dth = "Reality Check";
    this.zsh = "Du har begГ¤rt att fГҐ en statusuppdatering.";
    this.izw = "Tryck pГҐ HISTORIK fГ¶r att visa din spelhistorik.";
    this.klb = "Spelpaus";
    this.lad = "SpelgrГ¤nser";
    this.kat = "SjГ¤lvtest";
    this.hxh = "Ingen anslutning till spelservern!";
    this.ytq = "AnslutningsfГ¶rsГ¶k";
    this.dyl = "Inloggningen misslyckades!";
    this.gty = "Det finns redan en aktiv session!";
    this.wwh = "DEN TEORETISKA Г…TERBETALNINGEN TILL SPELAREN FГ–R DET HГ„R SPELET Г„R XY."
}
ouo.prototype = new vzy;

function twb() {
    this.ktm = "HELD";
    this.wne = "RED";
    this.gxh = "BLACK";
    this.kmy = "HIGH";
    this.xos = "LOW";
    this.aby = "DEAL CARDS";
    this.wvs = "HOLD CARDS";
    this.mqg = "DRAW CARDS";
    this.yon = "five equivalent cards (only possible with a wild card)";
    this.rwr = "ace - king - queen - jack - ten of the same suit";
    this.brm = "STRAIGHT with cards of the same suit";
    this.ehx = "four cards of the same rank";
    this.wpv = "combination of THREE OF A KIND and a PAIR";
    this.dqd = "five cards of the same suit";
    this.bhn = "five cards in rank order, but not of the same suit";
    this.gue = "three cards of the same rank";
    this.lvf = "two distinct pairs and any 5th card";
    this.oop = "two jacks, queens, kings or aces";
    this.xah = "four cards of the same suit with any 5th card";
    this.yux = "straight with ace in the center";
    this.dfd = "combination of figures which contains jack, queen and king";
    this.wat = "sequence with even or odd successive values";
    this.wpi = "ROYAL FLUSH containing a wild card";
    this.sfh = "four twos with any other card";
    this.qsd = "four 5's, 6's, 7's, 8's, 9's, 10's, JACK's, QUEEN's OR KING's";
    this.plh = "four 2's, 3's or 4's with any other card";
    this.vfd = "four aces with any other card";
    this.ioe = "four 2's, 3's OR 4's with an Ace 2,3 or 4";
    this.vrb = "four Aces with 2, 3 or 4";
    this.poe = "two Kings or Aces";
    this.xdq = "two tens, jacks, queens, kings or aces";
    this.ysx = "FIVE OF A KIND";
    this.zvs = "ROYAL FLUSH";
    this.upt = "STRAIGHT FLUSH";
    this.rky = "FOUR OF A KIND";
    this.ezj = "FULL HOUSE";
    this.dhl = "FLUSH";
    this.tsj = "STRAIGHT";
    this.pzx = "THREE OF A KIND";
    this.xxx = "TWO PAIRS";
    this.qki = "HIGH PAIR";
    this.lsi = "FOUR FLUSH";
    this.vux = "POKER";
    this.ksx = "SKIP STRAIGHT";
    this.zpp = "BLAZE";
    this.loj = "CORNER STRAIGHT";
    this.ukc = "TENS OR BETTER";
    this.mal = "JACKS OR BETTER";
    this.ink = "KINGS OR BETTER";
    this.czs = "WILD ROYAL FLUSH";
    this.tfy = "FOUR DEUCES";
    this.itu = "FOUR 5 TO KING";
    this.rzk = "FOUR 2 TO 4";
    this.lvo = "FOUR ACES";
    this.dsn = "FOUR LOW WITH LOW";
    this.dju = "FOUR ACES WITH 2, 3 OR 4";
    this.cwu = "GAMBLE AGAIN OR COLLECT?";
    this.yeb = "SELECT A CARD";
    this.uha = "If selected card is higher than dealer: WIN!";
    this.vxc = "If selected card is lower than dealer: lose";
    this.yky = "If selected card is same as dealer: tie";
    this.chx = "ACE is highest, two is lowest, no wild cards.";
    this.qxy = "TIE";
    this.jqw = "PLAYER";
    this.sfd = "DEALER";
    this.smp = "BEAT THE DEALER TO DOUBLE THE WIN";
    this.dqp = "SELECT THE CORRECT VALUE TO DOUBLE THE WIN"
}
twb.prototype = new tlm;

function yrv() {
    this.ktm = "РЈРґРµСЂР¶Р°С‚СЊ";
    this.wne = "РљР РђРЎРќР«Р™";
    this.gxh = "BLACK";
    this.kmy = "РљР РЈРџРќРђРЇ";
    this.xos = "РњР•Р›РљРђРЇ";
    this.aby = "Р РђР—Р”Р•Р›РРўР¬ РљРђР РўР«";
    this.wvs = "РЈР”Р•Р Р–РђРўР¬ РљРђР РўР«";
    this.mqg = "Р’Р—РЇРўР¬ РљРђР РўР«";
    this.yon = "РџСЏС‚СЊ РєР°СЂС‚ РѕРґРЅРѕРіРѕ РЅРѕРјРёРЅР°Р»Р° (РѕРґРЅР° РёР· РЅРёС… РґР¶РѕРєРµСЂ)";
    this.rwr = "РўСѓР· - РєРѕСЂРѕР»СЊ - РґР°РјР° - РІР°Р»РµС‚ - 10 РѕРґРЅРѕР№ РјР°СЃС‚Рё";
    this.brm = "STRAIGHT РѕРґРЅРѕР№ РјР°СЃС‚Рё";
    this.ehx = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ РѕРґРЅРѕРіРѕ РЅРѕРјРёРЅР°Р»Р°";
    this.wpv = "РўСЂРё РєР°СЂС‚С‹ РѕРґРЅРѕРіРѕ РЅРѕРјРёРЅР°Р»Р° Рё РѕРґРЅР° РїР°СЂР°";
    this.dqd = "РџСЏС‚СЊ РєР°СЂС‚ РѕРґРЅРѕР№ РјР°СЃС‚Рё";
    this.bhn = "РџСЏС‚СЊ РєР°СЂС‚ РїРѕ РїРѕСЂСЏРґРєСѓ, РЅРѕ РЅРµ РѕРґРЅРѕР№ РјР°СЃС‚Рё";
    this.gue = "РўСЂРё РєР°СЂС‚С‹ РѕРґРЅРѕРіРѕ РЅРѕРјРёРЅР°Р»Р°";
    this.lvf = "Р”РІРµ РїР°СЂС‹ Рё РѕРґРЅР° РґРѕРїРѕР». РєР°СЂС‚Р°";
    this.oop = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ РѕРґРЅРѕР№ РјР°СЃС‚Рё Рё РѕРґРЅР° РґРѕРїРѕР». РєР°СЂС‚Р°";
    this.xah = "Р”РІР° РІР°Р»РµС‚Р°, РґРІРµ РґР°РјС‹, РґРІР° РєРѕСЂРѕР»СЏ РёР»Рё С‚СѓР·Р°";
    this.yux = "РџСЏС‚СЊ РєР°СЂС‚ РїРѕ РїРѕСЂСЏРґРєСѓ С‡РµСЂРµР· С‚СѓР· (3-2-Рў-Рљ-Р”)";
    this.dfd = "РљРѕРјР±РёРЅР°С†РёСЏ РёР· РєР°СЂС‚ СЃ РєР°СЂС‚РёРЅРєР°РјРё: РґРІРµ РІР°Р»РµС‚Р°, РґРІРµ РґР°РјС‹ Рё РєРѕСЂРѕР»СЊ";
    this.wat = "РџСЏС‚СЊ С‡РµС‚РЅС‹С… РёР»Рё РїСЏС‚СЊ РЅРµ С‡РµС‚РЅС‹С… РєР°СЂС‚ РїРѕ РїРѕСЂСЏРґРєСѓ";
    this.wpi = "ROYAL FLUSH СЃ РґР¶РѕРєРµСЂРѕРј";
    this.sfh = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ 2 Рё РѕРґРЅР° РґРѕРїРѕР». РєР°СЂС‚Р°";
    this.qsd = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ 5, 6, 7, 8, 9, 10, РІР°Р»РµС‚, РґР°РјР° РёР»Рё РєРѕСЂРѕР»СЊ";
    this.plh = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ 2, 3 РёР»Рё 4 СЃ Р»СЋР±РѕР№ РґРѕРїРѕР». РєР°СЂС‚РѕР№.";
    this.vfd = "Р§РµС‚С‹СЂРµ С‚СѓР·Р° Рё РѕРґРЅР° РґРѕРїРѕР». РєР°СЂС‚Р°";
    this.ioe = "Р§РµС‚С‹СЂРµ РґРІРѕР№РєРё, С‚СЂРѕР№РєРё РёР»Рё С‡РµС‚РІРµСЂРєРё СЃ С‚СѓР·РѕРј, РґРІРѕР№РєРѕР№, С‚СЂРѕР№РєРѕР№ РёР»Рё С‡РµС‚РІРµСЂРєРѕР№";
    this.vrb = "Р§РµС‚С‹СЂРµ С‚СѓР·Р° СЃ 2, 3 РёР»Рё 4";
    this.poe = "Р”РІР° РєРѕСЂРѕР»СЏ РёР»Рё С‚СѓР·Р°";
    this.xdq = "Р”РІРµ РєР°СЂС‚С‹ 10, РІР°Р»РµС‚, РґР°РјР°, РєРѕСЂРѕР»СЊ РёР»Рё С‚СѓР·";
    this.ysx = "FIVE OF A KIND";
    this.zvs = "ROYAL FLUSH";
    this.upt = "STRAIGHT FLUSH";
    this.rky = "FOUR OF A KIND";
    this.ezj = "FULL HOUSE";
    this.dhl = "FLUSH";
    this.tsj = "STRAIGHT";
    this.pzx = "THREE OF A KIND";
    this.xxx = "TWO PAIRS";
    this.qki = "HIGH PAIR";
    this.lsi = "FOUR FLUSH";
    this.vux = "POKER";
    this.ksx = "SKIP STRAIGHT";
    this.zpp = "BLAZE";
    this.loj = "CORNER STRAIGHT";
    this.ukc = "TENS OR BETTER";
    this.mal = "JACKS OR BETTER";
    this.ink = "KINGS OR BETTER";
    this.czs = "WILD ROYAL FLUSH";
    this.tfy = "FOUR DEUCES";
    this.itu = "FOUR 5 TO KING";
    this.rzk = "FOUR 2 TO 4";
    this.lvo = "FOUR ACES";
    this.dsn = "FOUR LOW WITH LOW";
    this.dju = "FOUR ACES WITH 2, 3 OR 4";
    this.cwu = "РЈРґРІРѕРёС‚СЊ РёР»Рё РІР·СЏС‚СЊ?";
    this.yeb = "Р’Р«Р‘Р•Р РРўР• РљРђР РўРЈ";
    this.uha = "Р•СЃР»Рё Р’Р°С€Рё РєР°СЂС‚С‹ РєСЂСѓРїРЅРµРµ, С‡РµРј РєР°СЂС‚С‹ РґРёР»РµСЂР°, Р’С‹ РІС‹РёРіСЂР°РµС‚Рµ!";
    this.vxc = "Р•СЃР»Рё Р’Р°С€Рё РєР°СЂС‚С‹ РјРµР»СЊС‡Рµ, С‡РµРј РєР°СЂС‚С‹ РґРёР»РµСЂР°, Р’С‹ РЅРµ РІС‹РёРіСЂР°РµС‚Рµ";
    this.yky = "Р•СЃР»Рё РґРѕСЃС‚РѕРёРЅСЃС‚РІРѕ Р’Р°С€РёС… РєР°СЂС‚ СЂР°РІРЅРѕ РєР°СЂС‚Р°Рј РґРёР»РµСЂР°, СЌС‚Рѕ РѕР·РЅР°С‡Р°РµС‚ РЅРёС‡СЊСЋ";
    this.chx = "РўРЈР— СЃР°РјР°СЏ РєСЂСѓРїРЅР°СЏ, Р”Р’Рђ СЃР°РјР°СЏ РјРµР»РєР°СЏ РєР°СЂС‚Р°, РЅРµС‚ РґР¶РѕРєРµСЂРѕРІ.";
    this.smp = "Р’Р«РР“Р РђР™РўР• РЈ Р РђР—Р”РђР®Р©Р•Р“Рћ, Р§РўРћР‘Р« РЈР”Р’РћРРўР¬ Р’Р«РР“Р Р«РЁ";
    this.qxy = "Р РћР’РќРћ";
    this.jqw = "РР“Р РћРљ";
    this.sfd = "DEALER";
    this.dqp = "Р’Р«Р‘Р•Р РРўР• РџР РђР’РР›Р¬РќР«Р™ РќРћРњРРќРђР›, Р§РўРћР‘Р« РЈР”Р’РћРРўР¬ Р’Р«РР“Р Р«РЁ."
}
yrv.prototype = new jni;

function zhh() {
    this.ktm = "PARAR";
    this.wne = "ROJO";
    this.gxh = "NEGRO";
    this.kmy = "ALTO";
    this.xos = "BAJO";
    this.aby = "DAR CARTAS";
    this.wvs = "RETENER CARTAS";
    this.mqg = "DAR CARTAS";
    this.yon = "Cinco cartas iguales (sГіlo posible con el comodin)";
    this.rwr = "As - rey - dama - sota - 10 del mismo color";
    this.brm = "STRAIGHT del mismo color";
    this.yux = "Escalera con as en el centro";
    this.dfd = "CombinaciГіn de figuras con sota, dama y rey";
    this.ehx = "Cuatro cartas del mismo valor";
    this.wat = "Secuencia de cinco cartas pares o impares de valores sucesivos";
    this.wpv = "CombinaciГіn entre THREE OF A KIND y PAIR";
    this.dqd = "Cinco cartas del mismo color";
    this.bhn = "Cinco cartas puestas en orden pero no del mismo color";
    this.gue = "Tres cartas equivalentes";
    this.lvf = "Dos pares diferentes y una quinta carta";
    this.oop = "Cuatro cartas del mismo color con una quinta carta";
    this.xah = "Dos sotas, damas, reyes o ases";
    this.wpi = "ROYAL FLUSH con comodin";
    this.sfh = "Cuatro doses con otra carta";
    this.qsd = "Cuatro 5, 6, 7, 8, 9, 10, sotas, damas o reyes";
    this.plh = "Cuatro de dos, de tres o de cuatro con otra carta";
    this.vfd = "Cuatro ases con otra carta";
    this.ioe = "Cuatro 2, 3 o 4 con un as, una 2, 3 o 4";
    this.vrb = "Cuatro ases con una 2, 3 o 4";
    this.poe = "Dos reyes o dos ases";
    this.xdq = "Dos 10, sotas, damas, reyes o ases";
    this.ysx = "FIVE OF A KIND";
    this.zvs = "ROYAL FLUSH";
    this.upt = "STRAIGHT FLUSH";
    this.rky = "FOUR OF A KIND";
    this.ezj = "FULL HOUSE";
    this.dhl = "FLUSH";
    this.tsj = "STRAIGHT";
    this.pzx = "THREE OF A KIND";
    this.xxx = "TWO PAIRS";
    this.qki = "HIGH PAIR";
    this.lsi = "FOUR FLUSH";
    this.vux = "POKER";
    this.ksx = "SKIP STRAIGHT";
    this.zpp = "BLAZE";
    this.loj = "CORNER STRAIGHT";
    this.ukc = "TENS OR BETTER";
    this.mal = "JACKS OR BETTER";
    this.ink = "KINGS OR BETTER";
    this.czs = "WILD ROYAL FLUSH";
    this.tfy = "FOUR DEUCES";
    this.itu = "FOUR 5 TO KING";
    this.rzk = "FOUR 2 TO 4";
    this.lvo = "FOUR ACES";
    this.dsn = "FOUR LOW WITH LOW";
    this.dju = "FOUR ACES WITH 2, 3 OR 4";
    this.cwu = "Arriesgar otra vez o tomar el premio?";
    this.yeb = "Tome una carta";
    this.uha = "Si la carta es mГЎs alta que la del crupier: hay premio!";
    this.vxc = "Si la carta elegida es mГЎs baja que la del crupier: no hay premio!";
    this.yky = "Si la carta elegida es la misma que la del crupier: QUEDA IGUAL";
    this.chx = "ACE es la mГЎs alta, dos es la mГЎs baja, no hay comodin.";
    this.smp = "GANAR LA MANO PARA DOBLAR EL PREMIO";
    this.dqp = "SELECCIONAR EL VALOR CORRECTO PARA DOBLAR EL PREMIO";
    this.qxy = "IGUAL";
    this.jqw = "JUGADOR";
    this.sfd = "MANO"
}
zhh.prototype = new fvl;

function tqe() {
    this.ktm = "HALTEN";
    this.wne = "ROT";
    this.gxh = "SCHWARZ";
    this.kmy = "HOCH";
    this.xos = "TIEF";
    this.aby = "KARTEN GEBEN";
    this.wvs = "KARTEN HALTEN";
    this.mqg = "KARTEN GEBEN";
    this.yon = "FГјnf gleiche Karten (nur mit Joker mГ¶glich)";
    this.rwr = "Ass - KГ¶nig - Dame - Buben - 10er der selben Farbe";
    this.brm = "STRAIGHT in der selben Farbe";
    this.ehx = "Vier wertgleiche Karten";
    this.wpv = "Kombination aus THREE OF A KIND und PAIR";
    this.dqd = "FГјnf Karten mit der selben Farbe";
    this.bhn = "FГјnf Karten in geordneter Reihenfolge, ohne der selben Farbe";
    this.gue = "Drei gleichwertige Karten";
    this.lvf = "Zwei verschiedene Paare und eine 5. Karte";
    this.oop = "Zwei Buben, Damen, KГ¶nige oder Assen";
    this.xah = "Vier Karten der selben Farbe mit einer 5. Karte";
    this.yux = "Straight mit Ass in der Mitte";
    this.dfd = "Bildkarten welche Bube, Dame und KГ¶nig enthalten";
    this.wat = "FГјnf gerade oder ungerade aufeinanderfolgende Werte";
    this.wpi = "ROYAL FLUSH mit Joker";
    this.sfh = "Vier Zweier mit einer anderen Karte";
    this.qsd = "Vier 5er, 6er, 7er, 8er, 9er, 10er, Buben, Damen oder KГ¶nige";
    this.plh = "Vier 2er,3er oder 4er mit einer anderen Karte";
    this.vfd = "Vier Assen mit einer anderen Karte";
    this.ioe = "Vier 2er, 3er oder 4er mit einer As, einem 2er, 3er oder 4er";
    this.vrb = "Vier Assen mit einer 2, 3 oder 4";
    this.poe = "Zwei KГ¶nige oder zwei Assen";
    this.xdq = "Zwei 10er, Buben, Damen, KГ¶nige oder Assen";
    this.ysx = "FIVE OF A KIND";
    this.zvs = "ROYAL FLUSH";
    this.upt = "STRAIGHT FLUSH";
    this.rky = "FOUR OF A KIND";
    this.ezj = "FULL HOUSE";
    this.dhl = "FLUSH";
    this.tsj = "STRAIGHT";
    this.pzx = "THREE OF A KIND";
    this.xxx = "TWO PAIRS";
    this.qki = "HIGH PAIR";
    this.lsi = "FOUR FLUSH";
    this.vux = "POKER";
    this.ksx = "SKIP STRAIGHT";
    this.zpp = "BLAZE";
    this.loj = "CORNER STRAIGHT";
    this.ukc = "TENS OR BETTER";
    this.mal = "JACKS OR BETTER";
    this.ink = "KINGS OR BETTER";
    this.czs = "WILD ROYAL FLUSH";
    this.tfy = "FOUR DEUCES";
    this.itu = "FOUR 5 TO KING";
    this.rzk = "FOUR 2 TO 4";
    this.lvo = "FOUR ACES";
    this.dsn = "FOUR LOW WITH LOW";
    this.dju = "FOUR ACES WITH 2, 3 OR 4";
    this.cwu = "NOCHEINMAL GAMBELN ODER GEWINN NEHMEN?";
    this.yeb = "NIMM EINE KARTE";
    this.uha = "Wenn die gewГ¤hlte Karte hГ¶her ist als die vom Dealer: Gewinn!";
    this.vxc = "Wenn die gewГ¤hlte Karte niedriger ist als die vom Dealer: Kein Gewinn";
    this.yky = "Wenn die gewГ¤hlte Karte die selbe ist wie die vom Dealer: GLEICH";
    this.chx = "Ass ist die hГ¶chste Karte, Zwei die niedrigste, keine Joker.";
    this.smp = "BESIEGE DEN GEBER UM DEN GEWINN ZU VERDOPPELN";
    this.dqp = "WГ„HLE DEN RICHTIGEN WERT UM DEN GEWINN ZU VERDOPPELN";
    this.qxy = "GLEICH";
    this.jqw = "SPIELER";
    this.sfd = "GEBER"
}
tqe.prototype = new rmx;

function fkn() {
    this.ktm = "TUTUNUZ";
    this.wne = "KIRMIZI";
    this.gxh = "SIYAH";
    this.kmy = "YГњKSEK";
    this.xos = "DERIN";
    this.aby = "KARTLARI VERД°NД°Z";
    this.wvs = "KARTLARI TUTUNUZ";
    this.mqg = "KARTLARI VERД°NД°Z";
    this.yon = "BeЕџ ayni kartlar (tek jokerle mГјmkГјn)";
    this.rwr = "Ass - papaz - dama - valeler - 10lar ayni renkli";
    this.brm = "STRAIGHT ayni renkli";
    this.ehx = "DГ¶rt ayni deДџerde olan kartlar";
    this.wpv = "Kombinasyon THREE OF A KIND ve PAIR le";
    this.dqd = "BeЕџ ayni renkli kartlar";
    this.bhn = "BeЕџ kartlar dГјzenli bir sД±ralamada, ayni renk siz";
    this.gue = "ГњГ§ ayni deДџerinde olan kartlar";
    this.lvf = "Iki deДџiЕџik Г§iftle ve bir 5. kart";
    this.oop = "Iki valeler, damalar, papazlar veya asslar";
    this.xah = "Ayni renkten dГ¶rt kart ve bir 5. kart";
    this.yux = "AsвЂ™Д± ortada olan Straight";
    this.dfd = "Vale, kД±z ve papaz gГ¶steren resimli kartlar";
    this.wat = "Arka arkaya beЕџ Г§ift veya tek deДџer";
    this.wpi = "ROYAL FLUSH  joker le";
    this.sfh = "DГ¶rt ikili baЕџka bir kartla";
    this.qsd = "DГ¶rt 5вЂ™li, 6вЂ™lД±, 7вЂ™li, 8вЂ™li, 9вЂ™lu, 10вЂ™lu, vale, kД±z veya papaz";
    this.plh = "DГ¶rt 2ler,3ler veya 4ler baЕџka bir kartla";
    this.vfd = "DГ¶rt as baЕџka bir kartla";
    this.ioe = "Bir as ile bir 2'li, 3'lГј veya 4'lГј ile dГ¶rt adet 2'li, 3'lГј veya 4'lГј";
    this.vrb = "2,3 veya 4 ile dГ¶rt as";
    this.poe = "Iki papazlar veya iki asslar";
    this.xdq = "Iki 10lar, valeler, damalar, papazlar veya asslar";
    this.ysx = "FIVE OF A KIND";
    this.zvs = "ROYAL FLUSH";
    this.upt = "STRAIGHT FLUSH";
    this.rky = "FOUR OF A KIND";
    this.ezj = "FULL HOUSE";
    this.dhl = "FLUSH";
    this.tsj = "STRAIGHT";
    this.pzx = "THREE OF A KIND";
    this.xxx = "TWO PAIRS";
    this.qki = "HIGH PAIR";
    this.lsi = "FOUR FLUSH";
    this.vux = "POKER";
    this.ksx = "SKIP STRAIGHT";
    this.zpp = "BLAZE";
    this.loj = "CORNER STRAIGHT";
    this.ukc = "TENS OR BETTER";
    this.mal = "JACKS OR BETTER";
    this.ink = "KINGS OR BETTER";
    this.czs = "WILD ROYAL FLUSH";
    this.tfy = "FOUR DEUCES";
    this.itu = "FOUR 5 TO KING";
    this.rzk = "FOUR 2 TO 4";
    this.lvo = "FOUR ACES";
    this.dsn = "FOUR LOW WITH LOW";
    this.dju = "FOUR ACES WITH 2, 3 OR 4";
    this.cwu = "Bir daha riziko veya kazanГ§Д± alД±nД±z?";
    this.yeb = "Bir kart al";
    this.uha = "SeГ§ilen kart DealerвЂ™inkinden yГјksekse: KazanГ§!";
    this.vxc = "SeГ§ilen kart DealerвЂ™inkinden dГјЕџГјkse: KazanГ§ yok";
    this.yky = "SeГ§ilen kart DealerвЂ™inkiyle aynД± ise: PAT";
    this.chx = "ACE is highest, two is lowest, Joker yok";
    this.smp = "KAДћITLARI DAДћITANI YENEREK KAZANCINI Д°KД°YE KATLAYABД°LД°RSД°N";
    this.qxy = "AYNI";
    this.jqw = "OYUNCU";
    this.sfd = "DEALER";
    this.dqp = "DOДћRU DEДћERД° SEГ‡EREK KAZANCINI Д°KД°YE KATLARSIN"
}
fkn.prototype = new wmh;

function rak() {
    this.ktm = "DRЕЅET";
    this.wne = "CERVENГЃ";
    this.gxh = "CERNГЃ";
    this.kmy = "VELKГЃ";
    this.xos = "MALГЃ";
    this.aby = "DГЃT KARTY";
    this.wvs = "KARTY DRЕЅET";
    this.mqg = "DГЃT KARTY";
    this.yon = "Pet stejnГЅch karet(moЕѕnГ© pouze s Jokerem)";
    this.rwr = "Eso - krГЎl - krГЎlovna - kluk - desГ­tka stejnГ© barvy";
    this.brm = "STRAIGHT s kartami stejnГ© barvy";
    this.ehx = "Ctyri karty stejnГ© hodnoty";
    this.wpv = "Kombinace z THREE OF A KIND a PAIR";
    this.dqd = "Pet karet stejnГ© barvy";
    this.bhn = "Pet karet usporГЎdanГЅch v rade, ale ne stejnГ© barvy";
    this.gue = "Tri karty stejnГ© hodnoty";
    this.lvf = "Dve odliЕЎnГ© dvojice a 5. karta";
    this.oop = "Dva klucii, krГЎlovny, krГЎlovГ© nebo esa";
    this.xah = "Ctyrii karty stejnГ© barvy s 5. kartou";
    this.yux = "postupka s esem uprostred";
    this.dfd = "kombinace obsahujГ­cГ­ pouze postavy (jack, queen  a king)";
    this.wat = "postupka vytvorenГЎ ze sudГЅch nebo lichГЅch za sebou nГЎsledujГ­cГ­ch cГ­sel";
    this.wpi = "ROYAL FLUSH s Jokerem";
    this.sfh = "Ctyri dvojky s jinou kartou";
    this.qsd = "ДЊtyЕ™i 5ky, 6ky, 7ky,8ky,9ky,10ky, kluci,krГЎlovny nebo krГЎlovГ©";
    this.plh = "ДЊtyЕ™i 2ky,3ky nebo 4ky s dalЕЎГ­ kartou";
    this.vfd = "ДЊtyri Esa s dalЕЎГ­ kartou";
    this.ioe = "ДЊtyЕ™i 2, 3 nebo 4 s Esem, 2,3 nebo 4";
    this.vrb = "ДЊtyЕ™i Esa s jednou 2,3 nebo 4";
    this.poe = "Dva KrГЎlovГ© nebo dvД› Esa";
    this.xdq = "Dve desГ­tky, kluci, krГЎlovny, krГЎlovГ© nebo esa";
    this.ysx = "FIVE OF A KIND";
    this.zvs = "ROYAL FLUSH";
    this.upt = "STRAIGHT FLUSH";
    this.rky = "FOUR OF A KIND";
    this.ezj = "FULL HOUSE";
    this.dhl = "FLUSH";
    this.tsj = "STRAIGHT";
    this.pzx = "THREE OF A KIND";
    this.xxx = "TWO PAIRS";
    this.qki = "HIGH PAIR";
    this.lsi = "FOUR FLUSH";
    this.vux = "POKER";
    this.ksx = "SKIP STRAIGHT";
    this.zpp = "BLAZE";
    this.loj = "CORNER STRAIGHT";
    this.ukc = "TENS OR BETTER";
    this.mal = "JACKS OR BETTER";
    this.ink = "KINGS OR BETTER";
    this.czs = "WILD ROYAL FLUSH";
    this.tfy = "FOUR DEUCES";
    this.itu = "FOUR 5 TO KING";
    this.rzk = "FOUR 2 TO 4";
    this.lvo = "FOUR ACES";
    this.dsn = "FOUR LOW WITH LOW";
    this.dju = "FOUR ACES WITH 2, 3 OR 4";
    this.cwu = "HRГЃT ZNOVU NEBO VZГЌT VГќHRU?";
    this.yeb = "ZVOL KARTU";
    this.uha = "Je-li zvolenГЎ karta vyЕЎЕЎГ­ neЕѕ dealerova: VГЅhra!";
    this.vxc = "Je-li  zvolenГЎ karta niЕѕЕЎiГ­ neЕѕ dealerova: ЕЅГЎdnГЎ vГЅhra!";
    this.yky = "Je-li  zvolenГЎ karta shodnГЎ s dealerovou: nerozhodnГЅ vГЅsledek";
    this.chx = "Eso je nejvyЕЎЕЎГ­, dvД› je nejniЕѕЕЎГ­, ЕѕГЎdnГ© divokГ© karty.";
    this.smp = "PORAZIT DEALERA KE ZDVOJNГЃSOBENГЌ VГќHRY";
    this.dqp = "VYBRAT SPRГЃVNOU HODNOTU KE ZDVOJNГЃSOBENГЌ VГќHRY";
    this.qxy = "STEJNГ‰";
    this.jqw = "HRГЃДЊ";
    this.sfd = "DEALER"
}
rak.prototype = new paj;

function zzd() {
    this.ktm = "HOIA";
    this.wne = "PUNANE";
    this.gxh = "MUST";
    this.kmy = "KГ•RGE";
    this.xos = "MADAL";
    this.aby = "JAGA KAARDID";
    this.wvs = "HOIA KAARTE";
    this.mqg = "JAGA KAARDID";
    this.yon = "viis vГµrdvГ¤Г¤rset kaarti (vГµimalik ainult koos Wild kaardiga)";
    this.rwr = "sama masti Г¤ss - kuningas - emand - soldat - kГјmme";
    this.brm = "RIDA samavГ¤rvi kaartidest";
    this.ehx = "neli sama vГ¤Г¤rtusega kaarti";
    this.wpv = "kombinatsioon KOLMIK ja PAAR";
    this.dqd = "viis sama vГ¤rvi kaarti";
    this.bhn = "viis jГ¤rjestikust, kuid erivГ¤rvi kaarti";
    this.gue = "kolm vГµrdvГ¤Г¤rset kaarti";
    this.lvf = "kaks kindlat paari ja ГјkskГµik milline viies kaart";
    this.oop = "kaks soldatit, emandat, kuningat vГµi Г¤ssa";
    this.xah = "neli sama vГ¤rvi kaarti koos ГјkskГµik millise viienda kaardiga";
    this.wpi = "KUNINGLIK MASTIRIDA, mis sisaldab Wild kaarti";
    this.sfh = "neli kahte koos ГјkskГµik millise muu kaardiga";
    this.qsd = "neli viite, kuute, seitset, kaheksat, Гјheksat, kГјmmet, Soldatit, Emandat vГµi Kuningat";
    this.plh = "neli kahte, kolme vГµi nelja koos ГјkskГµik millise muu kaardiga";
    this.vfd = "neli Г¤ssa ГјkskГµik millise muu kaardiga";
    this.ioe = "Neli 2-te, 3-e vГµi 4-ja koos 2, 3, vГµi 4";
    this.vrb = "Neli Г¤ssa ja 2, 3, vГµi 4";
    this.poe = "kaks Kuningat vГµi Г„ssa";
    this.xdq = "kaks kГјmmet, soldatit, emandat, kuningat vГµi Г¤ssa";
    this.ysx = "FIVE OF A KIND";
    this.zvs = "ROYAL FLUSH";
    this.upt = "STRAIGHT FLUSH";
    this.rky = "FOUR OF A KIND";
    this.ezj = "FULL HOUSE";
    this.dhl = "FLUSH";
    this.tsj = "STRAIGHT";
    this.pzx = "THREE OF A KIND";
    this.xxx = "TWO PAIRS";
    this.qki = "HIGH PAIR";
    this.lsi = "FOUR FLUSH";
    this.vux = "POKER";
    this.ksx = "SKIP STRAIGHT";
    this.zpp = "BLAZE";
    this.loj = "CORNER STRAIGHT";
    this.ukc = "TENS OR BETTER";
    this.mal = "JACKS OR BETTER";
    this.ink = "KINGS OR BETTER";
    this.czs = "WILD ROYAL FLUSH";
    this.tfy = "FOUR DEUCES";
    this.itu = "FOUR 5 TO KING";
    this.rzk = "FOUR 2 TO 4";
    this.lvo = "FOUR ACES";
    this.dsn = "FOUR LOW WITH LOW";
    this.dju = "FOUR ACES WITH 2, 3 OR 4";
    this.qxy = "VIIK";
    this.jqw = "PLAYER";
    this.sfd = "DEALER";
    this.cwu = "MГ„NGI VEEL VГ•I VГ•TA VГ•IT?";
    this.uha = "Kui valitud kaart on suurem kui diileril: OLED VГ•ITNUD!";
    this.vxc = "Kui valitud kaart on vГ¤iksem kui diileril: kaotad";
    this.yky = "Kui valitud kaart on diileri kaardiga vГµrdne: viik";
    this.chx = "Г„SS on kГµrgeim, kaks madalaim, metsikuid kaarte ei ole.";
    this.yux = "rida Г¤ssaga keskel";
    this.dfd = "kombinatsioon soldatist, emandast ja kuningast";
    this.wat = "kaheste vahedega rida";
    this.yeb = "VALI KAART";
    this.smp = "VГ•IDA DIILERIT, ET KAHEKORDISTADA OMA VГ•IT";
    this.dqp = "VГ•IDU DUUBELDAMISEKS VALI Г•IGE VГ„Г„RTUS"
}
zzd.prototype = new drg;

function vpn() {
    this.ktm = "ОљОЎО‘О¤О—ОЈО¤О•";
    this.wne = "ОљОџОљОљО™ОќОџ";
    this.gxh = "ОњО‘ОҐОЎОџ";
    this.kmy = "ОҐОЁО—О›Оџ";
    this.xos = "О§О‘ОњО—О›Оџ";
    this.aby = "ОњОџО™ОЎО‘ОЈО¤О• О§О‘ОЎО¤О™О‘";
    this.wvs = "ОљОЎО‘О¤О—ОЈО¤О• О§О‘ОЎО¤О™О‘";
    this.mqg = "О¤ОЎО‘О’О—ОћО¤О• О§О‘ОЎО¤О™О‘";
    this.yon = "ПЂО­ОЅП„Оµ ОЇОґО№О± П‡О±ПЃП„О№О¬ (ОјПЊОЅО· ПЂО№ОёО±ОЅПЊП„О·П„О± ОјОµ П„Ої Joker)";
    this.rwr = "О¬ПѓПѓОїП‚ - ПЃО®ОіО±П‚ - ОЅП„О¬ОјО± - ОІО±О»О­П‚ - ОґО­ОєО± О±ПЂПЊ П„Ої ОЇОґО№Ої П‡ПЃПЋОјО±";
    this.brm = "STRAIGHT ОјОµ П‡О±ПЃП„О№О¬ О±ПЂПЊ П„Ої ОЇОґО№Ої П‡ПЃПЋОјО±";
    this.ehx = "П„О­ПѓПѓОµПЃО± П‡О±ПЃП„О№О¬ ОјОµ П„О·ОЅ ОЇОґО№О± О±ОѕОЇО±";
    this.wpv = "ПѓП…ОЅОґП…О±ПѓОјПЊП‚ О±ПЂПЊ THREE OF A KIND ОєО±О№ О­ОЅО± PAIR";
    this.dqd = "ПЂО­ОЅП„Оµ П‡О±ПЃП„О№О¬ ОјОµ П„Ої ОЇОґО№Ої П‡ПЃПЋОјО±";
    this.bhn = "ПЂО­ОЅП„Оµ П‡О±ПЃП„О№О¬ ПѓОµ О±ПЌОѕОїП…ПѓО± ПѓОµО№ПЃО¬, О±О»О»О¬ ПЊП‡О№ ОЇОґО№Ої П‡ПЃПЋОјО±";
    this.gue = "П„ПЃОЇО± П‡О±ПЃП„О№О¬ ОЇОґО№О±П‚ О±ОѕОЇО±П‚";
    this.lvf = "ОґПЌОї ОґО№О±П†ОїПЃОµП„О№ОєО¬ О¶ОµП…ОіО¬ПЃО№О± ОєО±О№ ОїПЂОїО№ОїОґО®ПЂОїП„Оµ ПЂО­ОјПЂП„Ої П‡О±ПЃП„ОЇ";
    this.oop = "ОґПЌОї ОІО±О»О­ОґОµП‚, ОЅП„О¬ОјОµП‚, ПЃО®ОіОµП‚ О® О¬ПѓПѓОїО№";
    this.xah = "П„О­ПѓПѓОµПЃО± П‡О±ПЃП„О№О¬ О±ПЂПЊ П„Ої ОЇОґО№Ої П‡ПЃПЋОјО± ОјО±О¶ОЇ ОјОµ ОєО¬ОёОµ ПЂО­ОјПЂП„О· ОєО¬ПЃП„О±";
    this.yux = "Straight ОјОµ О¬ПѓПѓОї ПѓП„Ої ОєО­ОЅП„ПЃОї";
    this.dfd = "ПѓП…ОЅОґО№О±ПѓОјПЊП‚ О±ПЂПЊ П†О№ОіОїПЌПЃОµП‚ ПЂОїП… ОІОіО±ОЇОЅОµО№ ОІО±О»О­П‚, ОЅП„О¬ОјО± ОєО±О№ ПЃО®ОіО±П‚";
    this.wat = "ПѓОµО№ПЃО¬ ОјО±О¶ОЇ ОјОµ ОјОїОЅО¬ О® О¶П…ОіО¬ О­П‡ОµО№ ОґО№О±ОґОїП‡О№ОєО® О±ОѕОЇО±";
    this.wpi = "ROYAL FLUSH ПЂОµПЃО№О­П‡ОµО№ ОєО±О№ Joker";
    this.sfh = "П„О­ПѓПѓОµПЃО± ОґП…О¬ПЃО№О± ОјО±О¶ОЇ ОјОµ ОєО¬ОёОµ О¬О»О»О· ОєО¬ПЃП„О±";
    this.qsd = "П„О­ПѓПѓОµПЃО± 5's, 6's,7's, 8's, 9's, 10's, О’О‘О›О•О”О•ОЈ, ОќО¤О‘ОњО•ОЈ О® ОЎО—О“О•ОЈ";
    this.plh = "О¤О­ПѓПѓОµПЃО± 2's О® 4's ОјО±О¶ОЇ ОјОµ ОєО¬ОёОµ О¬О»О»О· ОєО¬ПЃП„О±";
    this.vfd = "П„О­ПѓПѓОµПЃО№П‚ О¬ПѓПѓОїО№ ОјО±О¶ОЇ ОјОµ ОєО¬ОёОµ О¬О»О»О· ОєО¬ПЃП„О±";
    this.ioe = "О¤О­ПѓПѓОµПЃО± 2О¬ПЃО№О±, 3О¬ПЃО№О± О® 4О¬ПЃО№О± ОјО±О¶ОЇ ОјОµ О­ОЅО±ОЅ О†ПѓПѓОї, О­ОЅО± 2О¬ПЃО№, 3О¬ПЃО№ О® 4О¬ПЃО№";
    this.vrb = "О¤О­ПѓПѓОµПЃО№П‚ О¬ПѓПѓОїО№ ОјО±О¶ОЇ ОјОµ О­ОЅО± 2, 3 О® 4";
    this.poe = "ОґПЌОї ОЎО®ОіОµП‚ О® О†ПѓПѓОїО№";
    this.xdq = "ОґПЌОї ОґОµОєО¬ПЃО№О±, ОІО±О»О­ОґОµП‚, ОЅП„О¬ОјОµП‚, ПЃО®ОіОµП‚ О® О¬ПѓПѓОїО№";
    this.ysx = "FIVE OF A KIND";
    this.zvs = "ROYAL FLUSH";
    this.upt = "STRAIGHT FLUSH";
    this.rky = "FOUR OF A KIND";
    this.ezj = "FULL HOUSE";
    this.dhl = "FLUSH";
    this.tsj = "STRAIGHT";
    this.pzx = "THREE OF A KIND";
    this.xxx = "TWO PAIRS";
    this.qki = "HIGH PAIR";
    this.lsi = "FOUR FLUSH";
    this.vux = "POKER";
    this.ksx = "SKIP STRAIGHT";
    this.zpp = "BLAZE";
    this.loj = "CORNER STRAIGHT";
    this.ukc = "TENS OR BETTER";
    this.mal = "JACKS OR BETTER";
    this.ink = "KINGS OR BETTER";
    this.czs = "WILD ROYAL FLUSH";
    this.tfy = "FOUR DEUCES";
    this.itu = "FOUR 5 TO KING";
    this.rzk = "FOUR 2 TO 4";
    this.lvo = "FOUR ACES";
    this.dsn = "FOUR LOW WITH LOW";
    this.dju = "FOUR ACES WITH 2, 3 OR 4";
    this.smp = "ОљО•ОЎО”О™ОЈО¤О• О¤ОџОќ ОќО¤О™О›О•ОЎ О“О™О‘ ОќО‘ О”О™О О›О‘ОЈО™О‘ОЈО•О¤О• О¤Оџ ОљО•ОЎО”ОџОЈ ОЈО‘ОЈ";
    this.qxy = "О™ОЈОџО О‘О›О™О‘";
    this.jqw = "О О‘IО§О¤О—ОЈ";
    this.sfd = "ОќО¤HО›О•ОЎ";
    this.cwu = "ОћО‘ОќA ОЎIОЈОљОџ H О О‘ОЎО‘О›О‘О’H;";
    this.uha = "О‘ОЅ О­П‡ОµП„Оµ П‡О±ПЃП„ОЇ ОјОµОіО±О»ПЌП„ОµПЃОї О±ПЂПЊ П„ОїОЅ ОєПЃОїП…ПЂО№О­ПЃО·: ОљО•ОЎО”О™О–О•О¤О•!";
    this.vxc = "О‘ОЅ О­П‡ОµП„Оµ П‡О±ПЃП„ОЇ ОјО№ОєПЃПЊП„ОµПЃОї О±ПЂПЊ П„ОїОЅ ОєПЃОїП…ПЂО№О­ПЃО·: О§О‘ОќО•О¤О•!";
    this.yky = "О‘ОЅ О­П‡ОµП„Оµ П„Ої ОЇОґО№Ої П‡О±ПЃП„ОЇ ОјОµ П„ОїОЅ ОєПЃОїП…ПЂО№О­ПЃО·: О№ПѓОїОІО±ОёОјО®П„Оµ";
    this.chx = "О‘ПѓПѓОїП‚ ОµОЇОЅО±О№ П„Ої ОјОµОіО±О»ПЌП„ОµПЃОї, ОґПЌОї ОµОЇОЅО±О№ П„Ої ОјО№ОєПЃПЊП„ОµПЃОї, ОґОµОЅ П…ПЂО¬ПЃП‡ОµО№ О¤О¶ПЊОєОµПЃ";
    this.yeb = "О•О О™О›EОћО¤О• ОљAОЎО¤О‘";
    this.dqp = "О•О О™О›О•ОћО¤О• О¤О— ОЈО©ОЈО¤О— О‘ОћО™О‘ О“О™О‘ ОќО‘ О”О™О О›О‘ОЈО™О‘ОЈО•О¤О• О¤Оџ ОљО•ОЎО”ОџОЈ ОЈО‘ОЈ"
}
vpn.prototype = new xel;

function xqz() {
    this.ktm = "Р—РђР”РЄР Р–РђРќР";
    this.wne = "Р§Р•Р Р’Р•РќРђ";
    this.gxh = "Р§Р•Р РќРђ";
    this.kmy = "Р“РћР›РЇРњРђ";
    this.xos = "РњРђР›РљРђ";
    this.aby = "Р РђР—Р”РђР’РђРќР• РќРђ РљРђР РўРРўР•";
    this.wvs = "Р—РђРџРђР—Р•РўР• РљРђР РўР";
    this.mqg = "РР—РўР•Р“Р›Р•РўР• РљРђР РўР";
    this.yon = "РїРµС‚ РµРґРЅР°РєРІРё РєР°СЂС‚Рё (СЃР°РјРѕ СЃ РґР¶РѕРєРµСЂ)";
    this.rwr = "РђСЃРµ - РџРѕРї - Р”Р°РјР° - Р’Р°Р»Рµ - 10 РѕС‚ РµРґРёРЅ Рё СЃСЉС‰ С†РІСЏС‚";
    this.brm = "РљР•РќРўРђ СЃ РєР°СЂС‚Рё РѕС‚ РµРґРёРЅ Рё СЃСЉС‰ С†РІСЏС‚";
    this.ehx = "С‡РµС‚РёСЂРё РєР°СЂС‚Рё СЃ РµРґРЅР° Рё СЃСЉС‰Р° СЃС‚РѕР№РЅРѕСЃС‚";
    this.wpv = "РєРѕРјР±РёРЅР°С†РёСЏ РѕС‚ С‚СЂРё РµРґРЅР°РєРІРё РєР°СЂС‚Рё Рё РµРґРёРЅ С‡РёС„С‚";
    this.dqd = "РїРµС‚ РµРґРЅР°РєРІРё РєР°СЂС‚Рё";
    this.bhn = "РїРµС‚ РїРѕСЂРµРґРЅРё РєР°СЂС‚Рё, РЅРѕ РѕС‚ СЂР°Р·Р»РёС‡РµРЅ С†РІСЏС‚";
    this.gue = "С‚СЂРё РєР°СЂС‚Рё СЃ РµРґРЅР° Рё СЃСЉС‰Р° СЃС‚РѕР№РЅРѕСЃС‚";
    this.lvf = "РґРІРµ СЂР°Р·Р»РёС‡РЅРё РґРІРѕР№РєРё Рё РЅСЏРєРѕСЏ РґСЂСѓРіР° 5-С‚Р° РєР°СЂС‚Р°";
    this.oop = "РґРІРµ Р’Р°Р»РµС‚Р°, Р”Р°РјРё, РџРѕРїР° РёР»Рё РђСЃР°";
    this.xah = "С‡РµС‚РёСЂРё РєР°СЂС‚Рё РѕС‚ РµРґРёРЅ Рё СЃСЉС‰ С†РІСЏС‚ СЃ РЅСЏРєРѕСЏ РґСЂСѓРіР° РєР°СЂС‚Р°";
    this.wpi = "РљР•РќРў Р¤Р›Р•РЁ Р РћРЇР› СЃ РґР¶РѕРєРµСЂ";
    this.sfh = "С‡РµС‚РёСЂРё 2-РєРё СЃ РЅСЏРєРѕСЏ РґСЂСѓРіР° РєР°СЂС‚Р°";
    this.qsd = "С‡РµС‚РёСЂРё 5-С†Рё, 6-С†Рё, 7-С†Рё, 8-С†Рё, 9-РєРё, 10-РєРё, Р’РђР›Р•РўРђ, Р”РђРњР РёР»Рё РџРћРџРћР’Р•";
    this.plh = "С‡РµС‚РёСЂРё 2-РєРё, 3-РєРё РёР»Рё 4-РєРё СЃ РЅСЏРєРѕСЏ РґСЂСѓРіР° РєР°СЂС‚Р°";
    this.vfd = "С‡РµС‚РёСЂРё РђСЃР° СЃ РЅСЏРєРѕСЏ РґСЂСѓРіР° РєР°СЂС‚Р°";
    this.ioe = "С‡РµС‚РёСЂРё 2-РєРё, 3-РєРё, РёР»Рё 4-РєРё СЃ РђСЃ, 2-РєР°, 3-РєР° РёР»Рё 4-РєР°";
    this.vrb = "С‡РµС‚РёСЂРё РђСЃР° СЃ 2-РєР°, 3-РєР° РёР»Рё 4-РєР°";
    this.poe = "РґРІР° РџРѕРїР° РёР»Рё РђСЃР°";
    this.xdq = "РґРІРµ 10-РєРё, Р’Р°Р»РµС‚Р°, Р”Р°РјРё, РџРѕРїР° РёР»Рё РђСЃР°";
    this.ysx = "FIVE OF A KIND";
    this.zvs = "ROYAL FLUSH";
    this.upt = "STRAIGHT FLUSH";
    this.rky = "FOUR OF A KIND";
    this.ezj = "FULL HOUSE";
    this.dhl = "FLUSH";
    this.tsj = "STRAIGHT";
    this.pzx = "THREE OF A KIND";
    this.xxx = "TWO PAIRS";
    this.qki = "HIGH PAIR";
    this.lsi = "FOUR FLUSH";
    this.vux = "POKER";
    this.ksx = "SKIP STRAIGHT";
    this.zpp = "BLAZE";
    this.loj = "CORNER STRAIGHT";
    this.ukc = "TENS OR BETTER";
    this.mal = "JACKS OR BETTER";
    this.ink = "KINGS OR BETTER";
    this.czs = "WILD ROYAL FLUSH";
    this.tfy = "FOUR DEUCES";
    this.itu = "FOUR 5 TO KING";
    this.rzk = "FOUR 2 TO 4";
    this.lvo = "FOUR ACES";
    this.dsn = "FOUR LOW WITH LOW";
    this.dju = "FOUR ACES WITH 2, 3 OR 4";
    this.qxy = "РќР•Р Р•РЁР•РќРћ";
    this.jqw = "РР“Р РђР§";
    this.sfd = "Р”РР›РЄР ";
    this.cwu = "Р”РЈР‘Р›РР РђР™РўР• РћРўРќРћР’Рћ РР›Р РџР РР‘Р•Р Р•РўР•?";
    this.uha = "РђРєРѕ РёР·Р±СЂР°РЅР°С‚Р° РєР°СЂС‚Р° Рµ РїРѕ-РіРѕР»СЏРјР° РѕС‚ РєР°СЂС‚Р°С‚Р° РЅР° РґРёР»СЉСЂР°:РџР•Р§Р•Р›РРўР•!";
    this.vxc = "РђРєРѕ РёР·Р±СЂР°РЅР°С‚Р° РєР°СЂС‚Р° Рµ РїРѕ-РјР°Р»РєР° РѕС‚ РґРёР»СЉСЂРѕРІР°С‚Р°:Р“РЈР‘РРўР•";
    this.yky = "РђРєРѕ РёР·Р±СЂР°РЅР°С‚Р° Рµ СЃСЉС‰Р°С‚Р°:РќРµСЂРµС€РµРЅРѕ";
    this.chx = "РђСЃ Рµ РЅР°Р№-РіРѕР»СЏРјР°С‚Р°, 2-РєР° Рµ РЅР°Р№-РјР°Р»РєР°С‚Р°, Р±РµР· РґР¶РѕРєРµСЂ РєР°СЂС‚Рё.";
    this.yux = "РїРµС‚ РїРѕСЂРµРґРЅРё РєР°СЂС‚Рё СЃ РђСЃ РІ СЃСЂРµРґР°С‚Р°";
    this.dfd = "РєРѕРјР±РёРЅР°С†РёСЏ РѕС‚ РєР°СЂС‚Рё РІ РєРѕРёС‚Рѕ РёРјР°(K -Q -J -РџРѕРї, Р”Р°РјР°, Р’Р°Р»Рµ)";
    this.wat = "РїРµС‚ РєР°СЂС‚Рё СЃ С‡РµС‚РЅРё РёР»Рё РЅРµС‡РµС‚РЅРё СЃС‚РѕР№РЅРѕСЃС‚Рё";
    this.yeb = "Р—РђР”Р РЄР–РўР• РљРђР РўР";
    this.smp = "РџРћР‘Р•Р”Р Р”РР›РЄР Рђ, Р—Рђ Р”Рђ РЈР”Р’РћРРЁ РџР•Р§РђР›Р‘РђРўРђ";
    this.dqp = "РР—Р‘Р•Р Р РџР РђР’РР›РќРђРўРђ РЎРўРћР™РќРћРЎРў, Р—Рђ Р”Рђ РЈР”Р’РћРРЁ РџР•Р§РђР›Р‘РђРўРђ"
}
xqz.prototype = new aat;

function ugz() {
    this.ktm = "бѓ“бѓђбѓбѓ­бѓбѓ бѓ”бѓ—";
    this.wne = "бѓ¬бѓбѓ—бѓ”бѓљбѓ";
    this.gxh = "бѓЁбѓђбѓ•бѓ";
    this.kmy = "бѓ›бѓђбѓ¦бѓђбѓљбѓ";
    this.xos = "бѓ“бѓђбѓ‘бѓљбѓђ";
    this.aby = "бѓђбѓбѓ¦бѓ”бѓ— бѓ‘бѓђбѓ бѓђбѓ—бѓ";
    this.wvs = "бѓ“бѓђбѓбѓ­бѓбѓ бѓ”бѓ— бѓ‘бѓђбѓ бѓђбѓ—бѓ”бѓ‘бѓ";
    this.mqg = "бѓђбѓбѓ¦бѓ”бѓ— бѓ‘бѓђбѓ бѓђбѓ—бѓ";
    this.yon = "бѓ®бѓЈбѓ—бѓ бѓбѓ’бѓбѓ•бѓ” бѓ›бѓњбѓбѓЁбѓ•бѓњбѓ”бѓљбѓќбѓ‘бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ (бѓЁбѓ”бѓЎбѓђбѓ«бѓљбѓќбѓђ бѓ›бѓќбѓћбѓќбѓ•бѓ”бѓ‘бѓЈбѓљ бѓбѓҐбѓњбѓђбѓЎ бѓ›бѓ®бѓќбѓљбѓќбѓ“ бѓЇбѓќбѓ™бѓ”бѓ бѓбѓ—)";
    this.rwr = "бѓбѓ’бѓбѓ•бѓ” бѓ¤бѓ”бѓ бѓбѓЎ бѓўбѓЈбѓ–бѓ - бѓ›бѓ”бѓ¤бѓ” - бѓ“бѓђбѓ›бѓђ - бѓ•бѓђбѓљбѓ”бѓўбѓ - бѓђбѓ—бѓбѓђбѓњбѓ";
    this.brm = "Straight бѓбѓ’бѓбѓ•бѓ” бѓ¤бѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ”бѓ‘бѓбѓ—";
    this.ehx = "бѓбѓ’бѓбѓ•бѓ” бѓбѓ”бѓ бѓђбѓ бѓҐбѓбѓбѓЎ бѓќбѓ—бѓ®бѓ бѓ™бѓђбѓ бѓўбѓ";
    this.wpv = "Three Of A Kind-бѓбѓЎбѓђ бѓ“бѓђ бѓ”бѓ бѓ—бѓ Pair-бѓбѓЎ бѓ™бѓќбѓ›бѓ‘бѓбѓњбѓђбѓЄбѓбѓђ";
    this.dqd = "бѓ®бѓЈбѓ—бѓ бѓ”бѓ бѓ—бѓ бѓ“бѓђ бѓбѓ’бѓбѓ•бѓ” бѓ¤бѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ";
    this.bhn = "бѓ®бѓЈбѓ—бѓ бѓ—бѓђбѓњбѓ›бѓбѓ›бѓ“бѓ”бѓ•бѓ бѓЈбѓљбѓ бѓ™бѓђбѓ бѓўбѓ";
    this.gue = "бѓЎбѓђбѓ›бѓ бѓ—бѓђбѓњбѓђбѓ‘бѓђбѓ бѓ бѓ™бѓђбѓ бѓўбѓ";
    this.lvf = "бѓќбѓ бѓ бѓќбѓ  бѓ—бѓђбѓњбѓђбѓ‘бѓђбѓ  бѓ™бѓђбѓ бѓўбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.oop = "бѓќбѓ бѓ бѓ—бѓђбѓњбѓђбѓ‘бѓђбѓ бѓ бѓ™бѓђбѓ бѓўбѓ бѓ•бѓђбѓљбѓ”бѓўбѓбѓ— бѓ–бѓ”бѓ•бѓбѓ—бѓ™бѓ”бѓњ";
    this.xah = "бѓќбѓ—бѓ®бѓ бѓЎбѓ®бѓ•бѓђбѓ“бѓђбѓЎбѓ®бѓ•бѓђ бѓ”бѓ бѓ—бѓ бѓ“бѓђ бѓбѓ’бѓбѓ•бѓ” бѓ¤бѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ";
    this.yux = "Straight бѓЁбѓЈбѓђбѓЁбѓ бѓўбѓЈбѓ–бѓбѓ—";
    this.dfd = "5 бѓњбѓђбѓ®бѓђбѓўбѓбѓђбѓњбѓ бѓ™бѓђбѓ бѓўбѓ";
    this.wat = "Straight бѓЎбѓђбѓ“бѓђбѓЄ бѓ§бѓќбѓ•бѓ”бѓљбѓ бѓ›бѓ”бѓќбѓ бѓ” бѓ™бѓђбѓ бѓўбѓ бѓђбѓ™бѓљбѓбѓђ";
    this.wpi = "ROYAL FLUSH бѓ бѓќбѓ›бѓ”бѓљбѓбѓЄ бѓЁбѓ”бѓбѓЄбѓђбѓ•бѓЎ бѓЇбѓќбѓ™бѓ”бѓ бѓЎ";
    this.sfh = "бѓќбѓ—бѓ®бѓ бѓќбѓ бѓбѓђбѓњбѓ бѓњбѓ”бѓ‘бѓбѓЎбѓ›бѓбѓ”бѓ  бѓЎбѓ®бѓ•бѓђ бѓ™бѓђбѓ бѓўбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.qsd = "бѓќбѓ—бѓ®бѓ 5-бѓбѓђбѓњбѓ, 6-бѓбѓђбѓњбѓ, 7-бѓбѓђбѓњбѓ, 8-бѓбѓђбѓњбѓ, 9-бѓбѓђбѓњбѓ, 10-бѓбѓђбѓњбѓ, бѓ•бѓђбѓљбѓ”бѓўбѓ, бѓ“бѓђбѓ›бѓђ бѓђбѓњ бѓ›бѓ”бѓ¤бѓ”";
    this.plh = "бѓќбѓ—бѓ®бѓ 2-бѓбѓђбѓњбѓ, 3-бѓбѓђбѓњбѓ бѓђбѓњ 4-бѓбѓђбѓњбѓ бѓњбѓ”бѓ‘бѓбѓЎбѓ›бѓбѓ”бѓ  бѓЎбѓ®бѓ•бѓђ бѓ™бѓђбѓ бѓўбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.vfd = "бѓќбѓ—бѓ®бѓ бѓўбѓЈбѓ–бѓ бѓњбѓ”бѓ‘бѓбѓЎбѓ›бѓбѓ”бѓ  бѓЎбѓ®бѓ•бѓђ бѓ™бѓђбѓ бѓўбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.ioe = "бѓќбѓ—бѓ®бѓ 2-бѓбѓђбѓњбѓ, 3-бѓбѓђбѓњбѓ бѓђбѓњ 4-бѓбѓђбѓњбѓ бѓўбѓЈбѓ–бѓ—бѓђбѓњ 2-бѓбѓђбѓњбѓ—бѓђбѓњ, 3-бѓбѓђбѓњбѓ—бѓђбѓњ бѓђбѓњ 4-бѓбѓђбѓњбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.vrb = "бѓќбѓ—бѓ®бѓ бѓўбѓЈбѓ–бѓ 2, 3 бѓђбѓњ 4-бѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.poe = "бѓќбѓ бѓ бѓ›бѓ”бѓ¤бѓ” бѓђбѓњ бѓўбѓЈбѓ–бѓ";
    this.xdq = "бѓќбѓ бѓ бѓђбѓ—бѓбѓђбѓњбѓ, бѓ•бѓђбѓљбѓ”бѓўбѓ, бѓ“бѓђбѓ›бѓђ, бѓ›бѓ”бѓ¤бѓ” бѓђбѓњ бѓўбѓЈбѓ–бѓ";
    this.ysx = "FIVE OF A KIND";
    this.zvs = "ROYAL FLUSH";
    this.upt = "STRAIGHT FLUSH";
    this.rky = "FOUR OF A KIND";
    this.ezj = "FULL HOUSE";
    this.dhl = "FLUSH";
    this.tsj = "STRAIGHT";
    this.pzx = "THREE OF A KIND";
    this.xxx = "TWO PAIRS";
    this.qki = "HIGH PAIR";
    this.lsi = "FOUR FLUSH";
    this.vux = "POKER";
    this.ksx = "SKIP STRAIGHT";
    this.zpp = "BLAZE";
    this.loj = "CORNER STRAIGHT";
    this.ukc = "TENS OR BETTER";
    this.mal = "JACKS OR BETTER";
    this.ink = "KINGS OR BETTER";
    this.czs = "WILD ROYAL FLUSH";
    this.tfy = "FOUR DEUCES";
    this.itu = "FOUR 5 TO KING";
    this.rzk = "FOUR 2 TO 4";
    this.lvo = "FOUR ACES";
    this.dsn = "FOUR LOW WITH LOW";
    this.dju = "FOUR ACES WITH 2, 3 OR 4";
    this.cwu = "бѓбѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ— бѓђбѓњ бѓђбѓбѓ¦бѓ”бѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ?";
    this.yeb = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓ™бѓђбѓ бѓўбѓ";
    this.uha = "бѓ—бѓЈ бѓђбѓ бѓ©бѓ”бѓЈбѓљбѓ бѓ™бѓђбѓ бѓўбѓ бѓ“бѓбѓљбѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ–бѓ” бѓЈбѓ¤бѓ бѓќ бѓ›бѓђбѓ¦бѓђбѓљбѓбѓђ: бѓ—бѓҐбѓ•бѓ”бѓњ бѓ›бѓќбѓбѓ’бѓ”бѓ‘бѓ—!";
    this.vxc = "бѓ—бѓЈ бѓђбѓ бѓ©бѓ”бѓЈбѓљбѓ бѓ™бѓђбѓ бѓўбѓ бѓ“бѓбѓљбѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ–бѓ” бѓЈбѓ¤бѓ бѓќ бѓ“бѓђбѓ‘бѓђбѓљбѓбѓђ: бѓ—бѓҐбѓ•бѓ”бѓњ бѓ¬бѓђбѓђбѓ’бѓ”бѓ‘бѓ—";
    this.yky = "бѓ—бѓЈ бѓђбѓ бѓ©бѓ”бѓЈбѓљбѓ бѓ™бѓђбѓ бѓўбѓ бѓбѓ’бѓбѓ•бѓ”бѓђ бѓ бѓђбѓЄ бѓ“бѓбѓљбѓ”бѓ бѓЎ бѓђбѓҐбѓ•бѓЎ: бѓђбѓњбѓ’бѓђбѓ бѓбѓЁбѓбѓђ бѓ¤бѓ бѓ”";
    this.chx = "бѓўбѓЈбѓ–бѓ бѓђбѓ бѓбѓЎ бѓ§бѓ•бѓ”бѓљбѓђбѓ–бѓ” бѓ›бѓђбѓ¦бѓђбѓљбѓ, бѓќбѓ бѓбѓђбѓњбѓ бѓ§бѓ•бѓ”бѓљбѓђбѓ–бѓ” бѓ“бѓђбѓ‘бѓђбѓљбѓ, бѓЇбѓќбѓ™бѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ бѓђбѓ  бѓ—бѓђбѓ›бѓђбѓЁбѓ“бѓ”бѓ‘бѓђ.";
    this.qxy = "бѓ¤бѓ бѓ”";
    this.jqw = "бѓ›бѓќбѓ—бѓђбѓ›бѓђбѓЁбѓ”";
    this.sfd = "бѓ“бѓбѓљбѓ”бѓ бѓ";
    this.smp = "бѓ›бѓќбѓЈбѓ’бѓ”бѓ— бѓ“бѓбѓљбѓ”бѓ бѓЎ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓќбѓ бѓ›бѓђбѓ’бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.dqp = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓЎбѓ¬бѓќбѓ бѓ бѓЎбѓбѓ“бѓбѓ“бѓ” бѓ бѓќбѓ› бѓ’бѓђбѓђбѓќбѓ бѓ›бѓђбѓ’бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ"
}
ugz.prototype = new nna;

function orn() {
    this.ktm = "TART";
    this.wne = "PIROS";
    this.gxh = "FEKETE";
    this.kmy = "MAGAS";
    this.xos = "ALACSONY";
    this.aby = "KГ‰RJEN LAPOKAT";
    this.wvs = "TARTSON LAPOKAT";
    this.mqg = "KГ‰RJEN LAPOKAT";
    this.yon = "Г¶t egyforma lap (az Г¶tГ¶dik a JOKER)";
    this.rwr = "ГЎsz - kirГЎly - dГЎma - bubi - tizes egy szГ­nben";
    this.brm = "SOR egyforma szГ­nЕ± lapokbГіl";
    this.ehx = "nГ©gy egyforma lap";
    this.wpv = "hГЎrom Г©s kettЕ‘ egyforma lap";
    this.dqd = "Г¶t egyforma szГ­nЕ± lap";
    this.bhn = "Г¶t sorban kГ¶vetkezЕ‘ lap nem egyforma szГ­nben";
    this.gue = "hГЎrom egyforma lap";
    this.lvf = "kettЕ‘ pГЎr Г©s mГ©g egy lap";
    this.oop = "kettЕ‘ Bubi, DГЎma, KirГЎly vagy ГЃsz";
    this.xah = "nГ©gy egyforma Г©s egy mГЎsmilyen szГ­nЕ± lap";
    this.yux = "5 sorban kГ¶vetkezЕ‘ lap A-val a kГ¶zГ©pen";
    this.dfd = "5 'kГ©pes' lap";
    this.wat = "5 egymГЎst kГ¶vetЕ‘ pГЎros vagy pГЎratlan lap";
    this.wpi = "ROYAL FLUSH amelyben van Joker";
    this.sfh = "nГ©gy kettes Г©s mГ©g egy lap";
    this.qsd = "nГ©gy 5-Г¶s, 6-os, 7-es, 8-as, 9-es, 10-es, Bubi, DГЎma vagy KirГЎly";
    this.plh = "nГ©gy kettes, hГЎrmas vagy nГ©gyes + egy lap";
    this.vfd = "nГ©gy ГЎsz Г©s mГ©g egy lap";
    this.ioe = "nГ©gy 2, 3 vagy 4 meg egy ГЎsz, 2, 3 vagy 4";
    this.vrb = "nГ©gy ГЃsz Г©s 2, 3 vagy 4";
    this.poe = "kettЕ‘ KirГЎly vagy ГЃsz";
    this.xdq = "kettЕ‘ tizes, bubi, dГЎma, kirГЎly vagy ГЎsz";
    this.ysx = "FIVE OF A KIND";
    this.zvs = "ROYAL FLUSH";
    this.upt = "STRAIGHT FLUSH";
    this.rky = "FOUR OF A KIND";
    this.ezj = "FULL HOUSE";
    this.dhl = "FLUSH";
    this.tsj = "STRAIGHT";
    this.pzx = "THREE OF A KIND";
    this.xxx = "TWO PAIRS";
    this.qki = "HIGH PAIR";
    this.lsi = "FOUR FLUSH";
    this.vux = "POKER";
    this.ksx = "SKIP STRAIGHT";
    this.zpp = "BLAZE";
    this.loj = "CORNER STRAIGHT";
    this.ukc = "TENS OR BETTER";
    this.mal = "JACKS OR BETTER";
    this.ink = "KINGS OR BETTER";
    this.czs = "WILD ROYAL FLUSH";
    this.tfy = "FOUR DEUCES";
    this.itu = "FOUR 5 TO KING";
    this.rzk = "FOUR 2 TO 4";
    this.lvo = "FOUR ACES";
    this.dsn = "FOUR LOW WITH LOW";
    this.dju = "FOUR ACES WITH 2, 3 OR 4";
    this.cwu = "SZOROZZA VAGY FELГЌRJA?";
    this.yeb = "VГЃLASSZON EGY LAPOT";
    this.uha = "Ha a kivГЎlasztott lap az osztГі lapjГЎtГіl nagyobb: NYERT!";
    this.vxc = "Ha a kivГЎlasztott lap az osztГі lapjГЎtГіl kisebb: veszГ­tett";
    this.yky = "Ha a kГ©t lap egyforma: dГ¶ntetlen";
    this.chx = "Az ГЃSZ a legnagyobb a kettes pedig a legkisebb lap.";
    this.qxy = "DГ–NTETLEN";
    this.jqw = "JГЃTГ‰KOS";
    this.sfd = "OSZTГ“";
    this.smp = "GYЕђZZE LE AZ OSZTГ“T, HOGY MEGDUPLГЃZZA A NYEREMГ‰NYT";
    this.dqp = "VГЃLASSZA A MEGFELELЕђT, HOGY MEGDUPLГЃZZA A NYEREMГ‰NYT"
}
orn.prototype = new wuh;

function cqx() {
    this.ktm = "ЕўINERE";
    this.wne = "ROЕћU";
    this.gxh = "NEGRU";
    this.kmy = "MARE";
    this.xos = "MICД‚";
    this.aby = "ГЋMPД‚RЕўIRE CД‚RЕўI";
    this.wvs = "ЕўINERE CД‚RЕўI";
    this.mqg = "ГЋMPД‚RЕўIRE CД‚RЕўI";
    this.yon = "Cinci cДѓrЕЈi identice (posibil numai cu joker)";
    this.rwr = "As - rege - damДѓ - valet - zece de aceeaЕџi culoare";
    this.brm = "STRAIGHT cu cДѓrЕЈi de aceeaЕџi culoare";
    this.ehx = "Patru cДѓrЕЈi de aceeaЕџi valoare";
    this.wpv = "CombinaЕЈie din THREE OF A KIND Еџi PAIR";
    this.dqd = "Cinci cДѓrЕЈi de aceeaЕџi culoare";
    this.bhn = "Cinci cДѓrЕЈi Г®n succesiune ordonatДѓ, nu de aceeaЕџi culoare";
    this.gue = "Trei cДѓrЕЈi egale ca valoare";
    this.lvf = "DouДѓ perechi diferite Еџi o a cincea carte";
    this.oop = "DouДѓ cДѓrЕЈi cu valeЕЈi, dame, regi sau aЕџi";
    this.xah = "Patru cДѓrЕЈi de aceeaЕџi culoare cu o a 5-a carte";
    this.yux = "Straight cu as Г®n mijloc";
    this.dfd = "CombinaЕЈie de cДѓrЕЈi cu figuri cu valet, damДѓ Еџi rege";
    this.wat = "Cinci valori succesive cu soЕЈ sau fДѓrДѓ soЕЈ";
    this.wpi = "ROYAL FLUSH cu joker";
    this.sfh = "Patru cДѓrЕЈi de doi cu o altДѓ carte";
    this.qsd = "Patru cДѓrЕЈi de 5, 6, 7, 8, 9, 10, valeЕЈi, dame sau regi";
    this.plh = "Patru cДѓrЕЈi de 2, 3 sau 4 cu o altДѓ carte";
    this.vfd = "Patru aЕџi cu o altДѓ carte";
    this.ioe = "Patru cДѓrЕЈi de 2, 3 sau 4 cu un as, o carte de 2, 3 sau 4";
    this.vrb = "Patru aЕџi cu o carte de 2, 3 sau 4";
    this.poe = "Doi regi sau doi aЕџi.";
    this.xdq = "DouДѓ cДѓrЕЈi de 10, valeЕЈi, dame, regi sau aЕџi";
    this.ysx = "FIVE OF A KIND";
    this.zvs = "ROYAL FLUSH";
    this.upt = "STRAIGHT FLUSH";
    this.rky = "FOUR OF A KIND";
    this.ezj = "FULL HOUSE";
    this.dhl = "FLUSH";
    this.tsj = "STRAIGHT";
    this.pzx = "THREE OF A KIND";
    this.xxx = "TWO PAIRS";
    this.qki = "HIGH PAIR";
    this.lsi = "FOUR FLUSH";
    this.vux = "POKER";
    this.ksx = "SKIP STRAIGHT";
    this.zpp = "BLAZE";
    this.loj = "CORNER STRAIGHT";
    this.ukc = "TENS OR BETTER";
    this.mal = "JACKS OR BETTER";
    this.ink = "KINGS OR BETTER";
    this.czs = "WILD ROYAL FLUSH";
    this.tfy = "FOUR DEUCES";
    this.itu = "FOUR 5 TO KING";
    this.rzk = "FOUR 2 TO 4";
    this.lvo = "FOUR ACES";
    this.dsn = "FOUR LOW WITH LOW";
    this.dju = "FOUR ACES WITH 2, 3 OR 4";
    this.cwu = "GAMBLE SAU RIDICAREA CГ‚ЕћTIGULUI?";
    this.yeb = "ALEGEЕўI O CARTE";
    this.uha = "CГўnd cartea aleasДѓ este mai mare decГўt cea a dealerului: cГўЕџtig!";
    this.vxc = "CГўnd cartea aleasДѓ este mai micДѓ decГўt cea a dealerului: fДѓrДѓ cГўЕџtig";
    this.yky = " CГўnd cartea aleasДѓ este identicДѓ cu cea a dealerului: egal";
    this.chx = "As este cartea cea mai mare, 2 este cartea cea mai micДѓ, fДѓrДѓ joker.";
    this.qxy = "EGAL";
    this.jqw = "PLAYER";
    this.sfd = "DEALER";
    this.smp = "ГЋNVINGE DEALERUL PENTRU DUBLAREA PROFITULUI";
    this.dqp = "SELECTEAZД‚ VALOAREA CORECTД‚ PENTRU DUBLAREA CГ‚ЕћTIGULUI"
}
cqx.prototype = new coi;

function opm() {
    this.ktm = "HELD";
    this.wne = "VERMELHO";
    this.gxh = "PRETO";
    this.kmy = "ALTO";
    this.xos = "BAIXO";
    this.aby = "DAR CARTAS";
    this.wvs = "RETER CARTAS";
    this.mqg = "DAR CARTAS";
    this.yon = "Cinco cartas iguais com o mesmo valor (sГі Г© possГ­vel com curinga)";
    this.rwr = "ГЃs - Rei - Dama - Valete - Dez de um naipe";
    this.brm = "STRAIGHT do mesmo naipe";
    this.ehx = "Quatro cartas do mesmo valor";
    this.wpv = "CombinaГ§ГЈo de THREE OF A KIND e PAIR";
    this.dqd = "Cinco cartas com o mesmo naipe";
    this.bhn = "Cinco cartas sucessivas, sem o mesmo naipe";
    this.gue = "TrГЄs cartas do mesmo valor";
    this.lvf = "Dois pares diferentes e uma 5ВЄ carta";
    this.oop = "Dois valetes, damas, reis ou ГЎses";
    this.xah = "Quatro cartas do mesmo naipe com uma 5ВЄ";
    this.yux = "Uma escada com um ГЎs no centro";
    this.dfd = "Uma combinaГ§ГЈo somente de figuras";
    this.wat = "SequГЄncia de pares ou Г­mpares de sucessivos valores";
    this.wpi = "ROYAL FLUSH com curinga";
    this.sfh = "Quatro dois com uma outra carta";
    this.qsd = "Quatro 5, 6, 7, 8, 9, 10, valete, dama, rei";
    this.plh = "Quatro 2, 3 ou 4 com outra carta";
    this.vfd = "Quatro ГЎses com uma outra carta";
    this.ioe = "Quatro 2,3 ou 4 A, 2, 3 ou 4";
    this.vrb = "Quatro ГЎses com 2,3 ou 4";
    this.poe = "Dois reis ou dois ГЎses";
    this.xdq = "Dois 10, valetes, damas, reis ou ГЎses";
    this.ysx = "FIVE OF A KIND";
    this.zvs = "ROYAL FLUSH";
    this.upt = "STRAIGHT FLUSH";
    this.rky = "FOUR OF A KIND";
    this.ezj = "FULL HOUSE";
    this.dhl = "FLUSH";
    this.tsj = "STRAIGHT";
    this.pzx = "THREE OF A KIND";
    this.xxx = "TWO PAIRS";
    this.qki = "HIGH PAIR";
    this.lsi = "FOUR FLUSH";
    this.vux = "POKER";
    this.ksx = "SKIP STRAIGHT";
    this.zpp = "BLAZE";
    this.loj = "CORNER STRAIGHT";
    this.ukc = "TENS OR BETTER";
    this.mal = "JACKS OR BETTER";
    this.ink = "KINGS OR BETTER";
    this.czs = "WILD ROYAL FLUSH";
    this.tfy = "FOUR DEUCES";
    this.itu = "FOUR 5 TO KING";
    this.rzk = "FOUR 2 TO 4";
    this.lvo = "FOUR ACES";
    this.dsn = "FOUR LOW WITH LOW";
    this.dju = "FOUR ACES WITH 2, 3 OR 4";
    this.cwu = "JOGAR OU RECOLHER O PRГ‰MIO?";
    this.yeb = "ESCOLHA UMA CARTA";
    this.uha = "Se a carta selecionada for mais alta do que a do crupier: PRГ‰MIO";
    this.vxc = "Se a carta selecionada for menor do que a do crupier: Nenhum prГ©mio";
    this.yky = "Se a carta selecionada for a mesma que a do crupier: Empate";
    this.chx = "Az Г© carta mais alta, dois Г© a menor, nГЈo hГЎ curingas.";
    this.qxy = "EMPATE";
    this.jqw = "JOGADOR";
    this.sfd = "CRUPIER";
    this.smp = "GANHE DO DEALER PARA DOBRAR O GANHO";
    this.dqp = "ESCOLHA O VALOR CERTO PARA DUBRAR O GANHO"
}
opm.prototype = new epm;

function kai() {
    this.ktm = "GARDER";
    this.wne = "ROUGE";
    this.gxh = "NOIR";
    this.kmy = "HAUT";
    this.xos = "BAS";
    this.aby = "DONNER DES CARTES";
    this.wvs = "GARDER DES CARTES";
    this.mqg = "DONNER DES CARTES";
    this.yon = "Cinq cartes identiques (possible seulement avec un joker)";
    this.rwr = "As, roi, dame, valet, 10 de la mГЄme couleur";
    this.brm = "STRAIGHT dans la mГЄme couleur";
    this.ehx = "Quatre cartes de la mГЄme valeur";
    this.wpv = "Combinaison de trois (BRELAN) et un PAIRE";
    this.dqd = "Cinq cartes de la mГЄme couleur";
    this.bhn = "Cinq cartes dans l'ordre, mais pas de la mГЄme couleur";
    this.gue = "Trois cartes de la mГЄme valeur";
    this.lvf = "Deux paires diffГ©rentes et une 5ГЁme carte";
    this.oop = "Deux valets, dames, rois ou as";
    this.xah = "Quatre cartes de la mГЄme couleur avec une 5ГЁme carte";
    this.yux = "Straight avec un as au milieu";
    this.dfd = "Cartes qui comprennent le valet, la dame et le roi";
    this.wat = "Cinq cartes consГ©cutives paires ou impaires";
    this.wpi = "QUINTE FLUSH avec joker";
    this.sfh = "Quatre deux avec une autre carte";
    this.qsd = "Quatre 5, 6, 7, 8, 9, 10, valets, dames ou rois";
    this.plh = "Quatre 2, 3 ou 4 avec une autre carte";
    this.vfd = "Quatres as avec une autre carte";
    this.ioe = "Quatre 2,3 ou 4 avec A, 2, 3, ou 4";
    this.vrb = "Quatre as avec un 2, 3, ou 4";
    this.poe = "Deux rois ou deux as.";
    this.xdq = "Deux 10, valets, dames, rois ou as";
    this.ysx = "FIVE OF A KIND";
    this.zvs = "ROYAL FLUSH";
    this.upt = "STRAIGHT FLUSH";
    this.rky = "FOUR OF A KIND";
    this.ezj = "FULL HOUSE";
    this.dhl = "FLUSH";
    this.tsj = "STRAIGHT";
    this.pzx = "THREE OF A KIND";
    this.xxx = "TWO PAIRS";
    this.qki = "HIGH PAIR";
    this.lsi = "FOUR FLUSH";
    this.vux = "POKER";
    this.ksx = "SKIP STRAIGHT";
    this.zpp = "BLAZE";
    this.loj = "CORNER STRAIGHT";
    this.ukc = "TENS OR BETTER";
    this.mal = "JACKS OR BETTER";
    this.ink = "KINGS OR BETTER";
    this.czs = "WILD ROYAL FLUSH";
    this.tfy = "FOUR DEUCES";
    this.itu = "FOUR 5 TO KING";
    this.rzk = "FOUR 2 TO 4";
    this.lvo = "FOUR ACES";
    this.dsn = "FOUR LOW WITH LOW";
    this.dju = "FOUR ACES WITH 2, 3 OR 4";
    this.cwu = "GAMBLE OU PRENDRE GAIN?";
    this.yeb = "PRENDS UNE CARTE";
    this.uha = "Si la carte sГ©lectionnГ©e est supГ©rieure Г  celle du dealer: GAIN";
    this.vxc = "Si la carte sГ©lectionnГ©e est infГ©rieure Г  celle du dealer: PAS DE GAIN";
    this.yky = "Si la carte sГ©lectionnГ©e est identique Г  celle du dealer: EGALITГ‰";
    this.chx = "L'as a la valeur la plus importante, le deux la moins importante, aucun joker.";
    this.qxy = "EGALITГ‰";
    this.jqw = "JOUER";
    this.sfd = "NOUN";
    this.smp = "VAINCS LE DONNEUR AFIN DE DOUBLER LE GAIN";
    this.dqp = "CHOISIS LA BONNE VALEUR AFIN DE DOUBLER LE GAIN"
}
kai.prototype = new nyg;

function ecw() {
    this.ktm = "ZADRЕЅI";
    this.wne = "CRVENA";
    this.gxh = "CRNA";
    this.kmy = "VELIKA";
    this.xos = "MALA";
    this.aby = "DIJELI KARTE";
    this.wvs = "ZADRЕЅI KARTE";
    this.mqg = "DIJELI KARTE";
    this.yon = "Pet istih karata (moguД‡e samo s dЕѕokerom)";
    this.rwr = "As - kralj - dama - deДЌko - desetka u istoj boji";
    this.brm = "STRAIGHT u istoj boji";
    this.ehx = "ДЊetiri jednake karte";
    this.wpv = "Kombinacija od TRI ISTE i PARA";
    this.dqd = "Pet karata u istoj boji";
    this.bhn = "Pet karata u nizu, ali ne u istoj boji";
    this.gue = "Tri jednake karte";
    this.lvf = "Dva razliДЌita para i neka 5. karta";
    this.oop = "Dva deДЌka, dame, kralja ili asa";
    this.xah = "ДЊetiri karte u istoj boji s nekom 5. kartom";
    this.yux = "Pet karata u redu, As u sredini";
    this.dfd = "5 karata sa slikama (deДЌko, dama i kralj + 2 slike)";
    this.wat = "5 uzastopnih parnih ili neparnih karata";
    this.wpi = "ROYAL FLUSH s dЕѕokerom";
    this.sfh = "ДЊetiri dvojke s nekom drugom kartom";
    this.qsd = "ДЊetiri petice, ЕЎestice, sedmice, osmice, devetke, desetke, deДЌka, dame ili kralja";
    this.plh = "ДЊetiri dvojke, trojke ili ДЌetvorke s nekom drugom kartom";
    this.vfd = "ДЊetiri asa sa nekom drugom kartom";
    this.ioe = "ДЊetiri 2,3 ili 4 sa A, 2, 3 ili 4";
    this.vrb = "ДЊetiri asa s 2, 3 ili 4";
    this.poe = "Dva kralja ili dva asa";
    this.xdq = "Dvije desetke, deДЌka, dame, kralja ili asa";
    this.ysx = "FIVE OF A KIND";
    this.zvs = "ROYAL FLUSH";
    this.upt = "STRAIGHT FLUSH";
    this.rky = "FOUR OF A KIND";
    this.ezj = "FULL HOUSE";
    this.dhl = "FLUSH";
    this.tsj = "STRAIGHT";
    this.pzx = "THREE OF A KIND";
    this.xxx = "TWO PAIRS";
    this.qki = "HIGH PAIR";
    this.lsi = "FOUR FLUSH";
    this.vux = "POKER";
    this.ksx = "SKIP STRAIGHT";
    this.zpp = "BLAZE";
    this.loj = "CORNER STRAIGHT";
    this.ukc = "TENS OR BETTER";
    this.mal = "JACKS OR BETTER";
    this.ink = "KINGS OR BETTER";
    this.czs = "WILD ROYAL FLUSH";
    this.tfy = "FOUR DEUCES";
    this.itu = "FOUR 5 TO KING";
    this.rzk = "FOUR 2 TO 4";
    this.lvo = "FOUR ACES";
    this.dsn = "FOUR LOW WITH LOW";
    this.dju = "FOUR ACES WITH 2, 3 OR 4";
    this.cwu = "IGRAJ ILI POKUPI DOBITAK?";
    this.yeb = "ODABERITE KARTU";
    this.uha = "Ako je odabrana karta veД‡a od dilerove karte: DOBITAK";
    this.vxc = "Ako je odabrana karta manja od dilerove karte: NEMA DOBITKA";
    this.yky = "Ako je odabrana karta ista kao dilerova: NERIJEЕ ENO";
    this.chx = "As je najveД‡a karta, 2 je najmanja karta, nema dЕѕokera.";
    this.qxy = "ISTA";
    this.jqw = "IGRAДЊ";
    this.sfd = "DILER";
    this.smp = "POBJEDI DJELITELJA I TIME UDVOSTRUДЊI DOBITAK";
    this.dqp = "ODABERI PRAVU VRIJEDNOST I TIME UDVOSTRUДЊI DOBITAK"
}
ecw.prototype = new env;

function leb() {
    this.ktm = "TENERE";
    this.wne = "ROSSO";
    this.gxh = "NERO";
    this.kmy = "ALTO";
    this.xos = "BASSO";
    this.aby = "NUOVE CARTE";
    this.wvs = "BLOCCA CARTE";
    this.mqg = "NUOVE CARTE";
    this.yon = "Cinque carte uguali (possibile soltanto con il joker)";
    this.rwr = "Asso - Re - Dama - Fante - 10 di un colore";
    this.brm = "STRAIGHT dello stesso colore";
    this.ehx = "Quattro carte dello stesso valore";
    this.wpv = "Combinazione tra THREE OF A KIND e una COPPIA";
    this.dqd = "Cinque carte dello stesso colore";
    this.bhn = "Cinque carte in ordine cronologico, senza aver lo stesso colore";
    this.gue = "Tre carte dello stesso valore";
    this.lvf = "Due coppie diverse e una quinta carta";
    this.oop = "Due fanti, dame, re o assi";
    this.xah = "Quattro carte dello stesso colore con una quinta carta";
    this.yux = "Straight con asso in centro";
    this.dfd = "5 carte solo con figure";
    this.wat = "Straight ove sempre una carta su due manca";
    this.wpi = "ROYAL FLUSH con Jolly";
    this.sfh = "Quattro due con un'altra carta";
    this.qsd = "Quattro carte da 5, 6, 7, 8, 9, 10, fante, dama o re";
    this.plh = "Quattro carte da 2, 3 o 4 con un'altra carta";
    this.vfd = "Quattro assi con un'altra carta";
    this.ioe = "Quattro 2,3 o 4 con Asso, 2, 3 o 4";
    this.vrb = "Quattro assi con il 2, 3 o 4";
    this.poe = "Due re o due assi";
    this.xdq = "Due carte da 10, fante, dama, re o asso";
    this.ysx = "FIVE OF A KIND";
    this.zvs = "ROYAL FLUSH";
    this.upt = "STRAIGHT FLUSH";
    this.rky = "FOUR OF A KIND";
    this.ezj = "FULL HOUSE";
    this.dhl = "FLUSH";
    this.tsj = "STRAIGHT";
    this.pzx = "THREE OF A KIND";
    this.xxx = "TWO PAIRS";
    this.qki = "HIGH PAIR";
    this.lsi = "FOUR FLUSH";
    this.vux = "POKER";
    this.ksx = "SKIP STRAIGHT";
    this.zpp = "BLAZE";
    this.loj = "CORNER STRAIGHT";
    this.ukc = "TENS OR BETTER";
    this.mal = "JACKS OR BETTER";
    this.ink = "KINGS OR BETTER";
    this.czs = "WILD ROYAL FLUSH";
    this.tfy = "FOUR DEUCES";
    this.itu = "FOUR 5 TO KING";
    this.rzk = "FOUR 2 TO 4";
    this.lvo = "FOUR ACES";
    this.dsn = "FOUR LOW WITH LOW";
    this.dju = "FOUR ACES WITH 2, 3 OR 4";
    this.cwu = "GAMBLE O RACCOGLIERE VINCITA?";
    this.yeb = "PRENDI UNA CARTA";
    this.uha = "Se la carta selezionata ГЁ piГ№ alta di quella del mazziere: VINCITA";
    this.vxc = "Se la carta selezionata ГЁ piГ№ bassa di quella del mazziere: NESSUNA VINCITA";
    this.yky = "Se la carta selezionata ГЁ uguale a quella del mazziere:ALLA PARI";
    this.chx = "L'asso ГЁ la piГ№ alta, il due la piГ№ bassa, nessuno jolly.";
    this.qxy = "ALLA PARI";
    this.jqw = "GIOCATORE";
    this.sfd = "DEALER";
    this.smp = "VINCI SUL DEALER PER RADDOPPIARE LA VINCITA";
    this.dqp = "SCEGLI IL VALORE GIUSTO PER RADDOPPIARE LA VINCITA"
}
leb.prototype = new ikg;

function sun() {
    this.ktm = "HГ…LLET";
    this.wne = "RГ–TT";
    this.gxh = "SVART";
    this.kmy = "HГ–G";
    this.xos = "LГ…G";
    this.aby = "TA KORT";
    this.wvs = "BEHГ…LL KORTEN";
    this.mqg = "TA KORT";
    this.yon = "Fem kort av samma vГ¤rde (endast mГ¶jligt med Joker)";
    this.rwr = "Ess - Kung - Dam - Knekt - Tio i samma fГ¤rg";
    this.brm = "Stege i samma fГ¤rg";
    this.ehx = "Fyra kort av samma vГ¤rde";
    this.wpv = "Kombination bestГҐende av TRISS och PAR";
    this.dqd = "Fem kort i samma fГ¤rg";
    this.bhn = "Fem kort i fГ¶ljd, men inte i samma fГ¤rg";
    this.gue = "Tre kort av samma vГ¤rde";
    this.lvf = "TvГҐ olika par och ett 5:e kort";
    this.oop = "TvГҐ Knektar, Damer, Kungar eller Ess";
    this.xah = "Fyra kort i en fГ¤rg med ett 5:e kort";
    this.yux = "Stege med Ess i mitten";
    this.dfd = "Kort som visar Knekt, Dam och Kung";
    this.wat = "Stege med fem udda eller fem jГ¤mna kort i fГ¶ljd";
    this.wpi = "ROYAL FLUSH med Joker";
    this.sfh = "Fyra tvГҐor med nГҐgot annat kort";
    this.qsd = "Fyra 5:or, 6:or, 7:or, 8:or, 9:or, 10:or, Knektar, Damer eller Kungar";
    this.plh = "Fyra 2:or, 3:or eller 4:or med nГҐgot annat kort";
    this.vfd = "Fyra Ess med nГҐgot annat kort";
    this.ioe = "Fyra 2:or, 3:or eller 4:or med ett Ess, en 2:a, 3:a eller 4:a";
    this.vrb = "Fyra Ess med en 2:a, 3:a eller 4:a";
    this.poe = "TvГҐ Kungar eller tvГҐ Ess";
    this.xdq = "TvГҐ 10:or, Knektar, Damer, Kungar eller Ess.";
    this.ysx = "FIVE OF A KIND";
    this.zvs = "ROYAL FLUSH";
    this.upt = "STRAIGHT FLUSH";
    this.rky = "FOUR OF A KIND";
    this.ezj = "FULL HOUSE";
    this.dhl = "FLUSH";
    this.tsj = "STRAIGHT";
    this.pzx = "THREE OF A KIND";
    this.xxx = "TWO PAIRS";
    this.qki = "HIGH PAIR";
    this.lsi = "FOUR FLUSH";
    this.vux = "POKER";
    this.ksx = "SKIP STRAIGHT";
    this.zpp = "BLAZE";
    this.loj = "CORNER STRAIGHT";
    this.ukc = "TENS OR BETTER";
    this.mal = "JACKS OR BETTER";
    this.ink = "KINGS OR BETTER";
    this.czs = "WILD ROYAL FLUSH";
    this.tfy = "FOUR DEUCES";
    this.itu = "FOUR 5 TO KING";
    this.rzk = "FOUR 2 TO 4";
    this.lvo = "FOUR ACES";
    this.dsn = "FOUR LOW WITH LOW";
    this.dju = "FOUR ACES WITH 2, 3 OR 4";
    this.cwu = "DUBBLERA ELLER INKASSERA?";
    this.yeb = "VГ„LJ ETT KORT";
    this.uha = "Om valt kort Г¤r hГ¶gre Г¤n givens: VINST!";
    this.vxc = "Om valt kort Г¤r lГ¤gre Г¤n givens: fГ¶rlust";
    this.yky = "Om valt kort Г¤r samma som givens: lika";
    this.chx = "Ess Г¤r hГ¶gst, tvГҐ Г¤r lГ¤gst, inga Jokerkort.";
    this.qxy = "LIKA";
    this.jqw = "SPELARE";
    this.sfd = "GIVARE";
    this.smp = "SLГ… DEALERN FГ–R ATT DUBBLA VINSTEN";
    this.dqp = "VГ„LJ RГ„TT VALГ–R FГ–R ATT DUBBLA VINSTEN"
}
sun.prototype = new ouo;

function tsg() {
    this.vfv = "CARD DEAL";
    this.bkl = "GO FOR ...";
    this.jav = "7...A = HIGH";
    this.jaf = "A...7 = LOW"
}
tsg.prototype = new twb;

function frt() {
    this.vfv = "РџРѕР»РѕР¶РёС‚СЊ РєР°СЂС‚С‹";
    this.bkl = "РћСЃС‚Р°РЅРѕРІРёС‚РµСЃСЊ";
    this.jav = "7...A = Р’Р«РЎРћРљРђРЇ";
    this.jaf = "A...7 = РќРР—РљРђРЇ"
}
frt.prototype = new yrv;

function req() {
    this.vfv = "REPARTIR CARTAS";
    this.bkl = "APOSTAR POR...";
    this.jav = "7...A = ALTO";
    this.jaf = "A...7 = BAJO"
}
req.prototype = new zhh;

function ulq() {
    this.vfv = "KARTEN AUFLEGEN";
    this.bkl = "HALTE AUF...";
    this.jav = "7...A = HOCH";
    this.jaf = "A...7 = TIEF"
}
ulq.prototype = new tqe;

function nci() {
    this.vfv = "KARTLARI AГ‡";
    this.bkl = "AГ‡IK TUT ...";
    this.jav = "7...A = YГњKSEK";
    this.jaf = "A...7 = DГњЕћГњK"
}
nci.prototype = new fkn;

function eae() {
    this.vfv = "ROZDAT KARTY";
    this.bkl = "JDI NA ...";
    this.jav = "7...A = VYSOKГ‰";
    this.jaf = "A...7 = NГЌZKГ‰"
}
eae.prototype = new rak;

function mgl() {
    this.vfv = "KAARDI JAGAMINE";
    this.bkl = "MINE ...";
    this.jav = "7...A = SUUR";
    this.jaf = "A...7 = VГ„IKE"
}
mgl.prototype = new zzd;

function are() {
    this.vfv = "ОњОџО™ОЎО‘ОЈОњО‘ О¤ОЎО‘О ОџОҐО›О‘ОЈ";
    this.bkl = "О О—О“О‘О™ОќО• О“О™О‘ ...";
    this.jav = "7...A = ОҐОЁО—О›О‘";
    this.jaf = "A...7 = О§О‘ОњО—О›О‘"
}
are.prototype = new vpn;

function chc() {
    this.vfv = "Р РђР—Р”РђР’РђРќР• РќРђ РљРђР РўРђ";
    this.bkl = "РћРўРР”Р Р—Рђ ...";
    this.jav = "7...A = Р’РРЎРћРљРђ";
    this.jaf = "A...7 = РќРРЎРљРђ"
}
chc.prototype = new xqz;

function aue() {
    this.vfv = "бѓ™бѓђбѓ бѓўбѓбѓЎ бѓ“бѓђбѓ бѓбѓ’бѓ”бѓ‘бѓђ";
    this.bkl = "бѓ›бѓбѓ“бѓбѓ— бѓ бѓќбѓ› ...";
    this.jav = "7...A = бѓ›бѓђбѓ¦бѓљбѓђ";
    this.jaf = "A...7 = бѓ“бѓђбѓ‘бѓљбѓђ"
}
aue.prototype = new ugz;

function ftm() {
    this.vfv = "LEOSZTГЃS";
    this.bkl = "MEGTART...";
    this.jav = "7...A = MAGAS";
    this.jaf = "A...7 = ALACSONY"
}
ftm.prototype = new orn;

function nhq() {
    this.vfv = "DISTRIBUIRE CД‚RЕўI";
    this.bkl = "ЕўINE PE ...";
    this.jav = "7...A = MARE";
    this.jaf = "A...7 = MIC"
}
nhq.prototype = new cqx;

function ysz() {
    this.vfv = "REPARTIR CARTAS";
    this.bkl = "APOSTO POR ...";
    this.jav = "7...A = ALTO";
    this.jaf = "A...7 = BAIXO"
}
ysz.prototype = new opm;

function ung() {
    this.vfv = "DONNE LES CARTES";
    this.bkl = "Г‚RRETE SUR ...";
    this.jav = "7...A = Г‰LEVГ‰";
    this.jaf = "A...7 = MOINS Г‰LEVГ‰"
}
ung.prototype = new kai;

function com() {
    this.vfv = "PODIJELI KARTE";
    this.bkl = "ZADRЕЅI ...";
    this.jav = "7...A = VELIKE";
    this.jaf = "A...7 = MALE"
}
com.prototype = new ecw;

function okh() {
    this.vfv = "NUOVE CARTE";
    this.bkl = "TENERE SU ...";
    this.jav = "7...A = ALTO";
    this.jaf = "A...7 = BASSO"
}
okh.prototype = new leb;

function qtf() {
    this.vfv = "GIVEN";
    this.bkl = "HГ…LL PГ… ...";
    this.jav = "7...A = HГ–G";
    this.jaf = "A...7 = LГ…G"
}
qtf.prototype = new sun;

function zcy() {
    this.zps = {
        backgroundColor: "rgb(0, 0, 0)"
    };
    this.hpw = {
        backgroundColor: "rgb(0,0,0)",
        ctt: "rgba(0,0,0,0.3)"
    };
    this.auj = {
        hpw: {
            font: "arial",
            nkj: "bold",
            backgroundColor: "black",
            qud: "rgb(0,100,10)",
            abo: "rgb(80,255,100)",
            thw: "rgb(120,120,120)",
            nhv: "red",
            ohl: "white",
            gqn: "white",
            eqk: null
        },
        cmg: {
            font: "arial",
            nkj: "bold",
            backgroundColor: "black",
            qud: "rgb(0,100,10)",
            abo: "rgb(80,255,100)",
            thw: "rgb(120,120,120)",
            nhv: "red",
            ohl: "white",
            gqn: "rgb(230,190,10)",
            eqk: null
        }
    };
    this.sse = {
        font: "arial",
        nkj: "bold",
        backgroundColor: "rgb(0,0,0)",
        zio: null,
        gqn: "rgb(255,255,255)",
        tgc: "rgb(30,30,30)",
        borderColor: "rgb(80,80,80)"
    };
    this.ydd = {
        font: "arial",
        nkj: "bold",
        backgroundColor: "black",
        elz: "rgb(50,50,50)",
        hqq: "rgb(255,255,255)",
        gqn: "white",
        djr: 0.8,
        ygm: {
            rvj: {
                font: "sanf-serif",
                nkj: "",
                textAlign: "center",
                qcv: "round",
                backgroundColor: "black",
                gqn: "white",
                borderColor: null,
                tgc: null,
                chj: 1
            }
        }
    };
    this.xak = {
        font: "arial",
        nkj: "bold",
        backgroundColor: "rgb(20,20,30)",
        borderColor: "rgb(0,0,0)",
        oxa: "rgba(255,255,255,0.2)",
        gqn: "rgb(255,255,255)",
        san: "rgba(0,0,0,0.3)",
        display: {
            bsy: "arial",
            upg: "arial",
            nkj: "bold",
            gqn: "rgb(255,255,255)",
            kah: "rgb(255,255,255)",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "rgba(255,255,255,0.5)"
        },
        rvj: {
            font: "arial",
            nkj: "bold",
            gqn: "rgb(0,0,0)",
            cya: "rgb(150,150,150)",
            backgroundColor: "rgba(255,255,255,0.8)",
            zio: "rgba(255,255,255,1)",
            mzp: "rgba(255,255,255,0.8)",
            ddk: "rgba(255,255,255,1)",
            borderColor: "rgba(200,200,200,0.5)",
            qcv: "rect",
            etr: -1
        }
    };
    this.kdz = {
        font: "arial",
        nkj: "bold",
        bte: "rgb(0,0,200)",
        eny: "rgb(255,255,255)",
        ptx: "rgb(0,0,150)",
        backgroundColor: "rgb(220,240,255)",
        tna: "rgb(180,220,255)",
        xcl: "rgb(10,20,25)",
        oep: "rgb(130,220,255)",
        uts: "rgb(130,190,255)",
        gqn: "rgb(255,255,255)",
        ioo: "rgb(130,190,255)",
        rom: "rgb(100,160,255)",
        jiz: "rgb(255,255,255)",
        rvj: {
            qcv: "rect",
            font: "arial",
            nkj: "bold",
            gqn: "rgb(255,255,255)",
            aad: null,
            backgroundColor: "rgb(90,160,255)",
            nxx: "rgb(90,160,255)",
            borderColor: "rgb(60,120,200)",
            tgc: "rgb(40,80,140)"
        },
        eka: {
            qcv: "round",
            font: "arial",
            nkj: "bold",
            gqn: "rgb(255,255,255)",
            aad: null,
            backgroundColor: "rgba(0,0,100,0.5)",
            nxx: "rgba(150,150,255,0.5)",
            borderColor: "rgb(90,170,255)",
            tgc: "rgb(40,80,140)"
        }
    };
    this.oho = {};
    this.geo = {
        tre: ["rgb(255,0,0)", "rgb(255,200,0)", "rgb(0,255,200)", "rgb(240,240,240)"]
    };
    this.meh = {
        type: "left",
        font: "arial",
        nkj: "bold",
        backgroundColor: "rgba(0,0,0,0.7)",
        zio: null,
        borderColor: "rgb(0,0,0)",
        tgc: "rgb(180,180,180)",
        tna: "rgba(0,0,0,0.6)",
        vwg: null,
        kah: "rgb(255,200,0)",
        gqn: "white",
        olo: {
            font: "arial",
            nkj: "bold",
            backgroundColor: "rgb(100,100,100)",
            zio: "rgb(100,100,100)",
            mzp: null,
            ddk: null,
            borderColor: "rgb(100,100,100)",
            gqn: "rgb(255,255,255)",
            cya: "rgb(255,200,0)",
            qcv: "triangle",
            etr: 1
        },
        ses: {
            font: "arial",
            nkj: "bold",
            backgroundColor: "rgb(100,100,100)",
            zio: "rgb(100,100,100)",
            mzp: null,
            ddk: null,
            borderColor: "rgb(100,100,100)",
            gqn: "rgb(255,255,255)",
            cya: "rgb(255,200,0)",
            qcv: "triangle",
            etr: 0
        },
        kyi: {
            font: "arial",
            nkj: "bold",
            backgroundColor: "rgb(100,100,100)",
            zio: "rgb(15,15,15)",
            mzp: "rgb(100,100,100)",
            ddk: "rgb(15,15,15)",
            borderColor: "rgb(150,150,150)",
            gqn: "rgb(255,255,255)",
            cya: "rgb(255,200,0)",
            qcv: "rect",
            etr: -1
        },
        display: {
            upg: "sans-serif",
            bsy: "sans-serif",
            nkj: "bold",
            kah: null,
            gqn: "yellow",
            borderColor: "rgb(100,100,100)",
            tgc: null,
            backgroundColor: "black"
        },
        lsa: {
            font: "arial",
            nkj: "bold",
            backgroundColor: null,
            zio: null,
            gqn: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.cfr = {
        font: "arial",
        nkj: "bold",
        backgroundColor: "rgb(180,180,180)",
        zio: "rgb(120,120,120)",
        borderColor: "rgb(80,80,80)",
        tgc: "rgb(30,30,30)",
        gqn: "white",
        fhh: {
            font: "arial",
            nkj: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            zio: null,
            mzp: "rgba(100,100,100,0.5)",
            ddk: null,
            borderColor: null,
            gqn: "white",
            qcv: "rect",
            etr: -1
        },
        olo: {
            font: "arial",
            nkj: "bold",
            backgroundColor: "rgb(255,255,255)",
            zio: "rgb(255,255,255)",
            mzp: null,
            ddk: null,
            borderColor: "rgb(255,255,255)",
            gqn: "rgb(0,0,0)",
            cya: "rgb(0,0,0)",
            qcv: "triangle",
            etr: 1
        },
        ses: {
            font: "arial",
            nkj: "bold",
            backgroundColor: "rgb(255,255,255)",
            zio: "rgb(255,255,255)",
            mzp: null,
            ddk: null,
            borderColor: "rgb(255,255,255)",
            gqn: "rgb(0,0,0)",
            cya: "rgb(0,0,0)",
            qcv: "triangle",
            etr: 0
        },
        dtn: {
            qcv: "rect",
            font: "arial",
            nkj: "bold",
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,0.1)",
            gqn: "white",
            chj: 1,
            borderColor: "rgb(255,255,255)",
            tgc: "rgb(220,220,220)"
        },
        display: {
            upg: "sans-serif",
            bsy: "sans-serif",
            nkj: "bold",
            kah: null,
            gqn: "white",
            borderColor: "white",
            tgc: null,
            backgroundColor: "rgb(0,0,0)"
        },
        lsa: {
            font: "arial",
            nkj: "bold",
            backgroundColor: null,
            zio: null,
            gqn: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.ulw = {
        qzj: [{
            upg: "sans-serif",
            gpp: "verdana",
            nkj: "bold",
            kah: "rgb(255,255,100)",
            qok: "rgb(210,190,40)",
            aad: "rgb(252,247,0)",
            cgw: "rgb(220,200,0)",
            elz: "rgb(0,0,0)"
        }, {
            upg: "sans-serif",
            gpp: "verdana",
            nkj: "bold",
            kah: "rgb(250,250,250)",
            qok: "rgb(210,210,210)",
            aad: "rgb(255,255,255)",
            cgw: "rgb(220,220,220)",
            elz: "rgb(0,0,0)"
        }, {
            upg: "sans-serif",
            gpp: "verdana",
            nkj: "bold",
            kah: "rgb(230,230,230)",
            qok: "rgb(190,190,190)",
            aad: "rgb(255,255,255)",
            cgw: "rgb(220,220,220)",
            elz: "rgb(0,0,0)"
        }, {
            upg: "sans-serif",
            gpp: "verdana",
            nkj: "bold",
            kah: "rgb(230,230,230)",
            qok: "rgb(190,190,190)",
            aad: "rgb(255,255,255)",
            cgw: "rgb(220,220,220)",
            elz: "rgb(0,0,0)"
        }],
        bsc: {
            upg: "sans-serif",
            gpp: "sans-serif",
            nkj: "bold",
            kah: "rgb(236,225,207)",
            qok: "rgb(214,170,102)",
            aad: "rgb(245,220,148)",
            cgw: "rgb(190,137,40)"
        },
        shv: {}
    };
    this.lpb = {
        ofm: "rgb(240,240,240)",
        zrm: "rgb(255,255,255)",
        borderColor: "rgb(200,200,200)",
        san: "rgba(0,80,150,0.6)",
        display: {
            bsy: "arial",
            upg: "arial",
            nkj: "bold",
            gqn: "rgb(0,80,151)",
            kah: "rgb(0,30,80)",
            backgroundColor: "rgb(255,255,255)",
            borderColor: "rgb(200,200,200)"
        }
    }
}

function goe() {
    this.omm = {
        backgroundColor: null,
        zio: null,
        tna: "rgb(0,0,0)",
        xcl: "rgb(0,0,0)",
        lkn: null,
        gcj: 0.5,
        rvj: {
            qcv: "rect",
            font: "verdana",
            nkj: "bold",
            backgroundColor: "rgb(0,0,0)",
            nxx: "rgb(150,150,150)",
            gqn: "rgb(255,255,255)",
            aad: "rgb(255,255,0)",
            borderColor: "rgb(150,150,150)",
            tgc: "rgb(0,0,0)"
        },
        display: {
            bsy: "sans-serif",
            upg: "sans-serif",
            nkj: "bold",
            backgroundColor: "black",
            gqn: "yellow",
            kah: "yellow",
            borderColor: "rgb(255,255,255)",
            tgc: "rgb(160,160,160)"
        },
        qgx: {
            font: "verdana",
            nkj: "bold",
            backgroundColor: "rgb(75, 5, 5)",
            borderColor: null,
            gqn: "rgb(255, 255, 0)"
        }
    };
    this.kyj = {
        backgroundColor: null,
        tna: "rgb(0,0,0)",
        xcl: "rgb(0,0,0)",
        display: {
            bsy: "sans-serif",
            upg: "sans-serif",
            nkj: "bold",
            backgroundColor: "black",
            gqn: "yellow",
            kah: "yellow",
            borderColor: "rgb(255,255,255)",
            tgc: "rgb(160,160,160)"
        },
        rvj: {
            qcv: "rect",
            font: "verdana",
            nkj: "bold",
            backgroundColor: "rgb(0,0,0)",
            nxx: "rgb(150,150,150)",
            gqn: "rgb(255,255,255)",
            aad: null,
            borderColor: "rgb(150,150,150)",
            tgc: "rgb(0,0,0)"
        },
        qgx: {
            font: "verdana",
            nkj: "bold",
            backgroundColor: "rgb(75, 5, 5)",
            borderColor: null,
            gqn: "rgb(255, 255, 0)"
        }
    };
    this.rtp = {
        backgroundColor: null,
        tna: "rgb(0,0,0)",
        xcl: "rgb(0,0,0)",
        rvj: {
            qcv: "rect",
            font: "verdana",
            nkj: "bold",
            backgroundColor: "rgb(0,0,0)",
            nxx: "rgb(150,150,150)",
            gqn: "rgb(255,255,255)",
            aad: null,
            borderColor: "rgb(150,150,150)",
            tgc: "rgb(0,0,0)"
        },
    };
    this.aiq = {
        font: "arial",
        nkj: "bold",
        mne: "yellow",
        vsg: "yellow",
        gqn: "yellow"
    };
    this.lqw = {
        font: "sans-serif",
        nkj: "bold",
        idm: "red",
        wqb: "orange",
        elz: "white"
    };
    this.mgi = {
        font: "arial",
        nkj: "bold",
        gqn: "yellow"
    };
    this.aee = {
        font: "sans-serif",
        nkj: "bold",
        gqn: "rgb(255,255,255)",
        backgroundColor: "rgb(0,0,0)",
        gtt: "rgb(0,0,0)",
        ebq: "rgb(255,0,0)",
        ghe: "rgb(255,255,0)",
        uaf: "rgb(80,80,80)",
        tek: "rgb(15,15,15)",
        wop: "rgb(0,0,0)",
        yed: "rgb(180,180,180)",
        gsu: "rgb(0,0,0)",
        udg: 0.7
    }
}
goe.prototype = new zcy;

function zre() {
    this.omm.backgroundColor = "rgb(0,0,60)";
    this.omm.tna = "rgb(0,0,60)";
    this.omm.xcl = "rgb(0,0,10)";
    this.omm.qgx.backgroundColor = "rgb(0, 0, 40)";
    this.omm.rvj.backgroundColor = "rgb(20,0,120)";
    this.omm.rvj.nxx = "rgb(20,0,220)";
    this.omm.rvj.borderColor = "rgb(20,0,140)";
    this.omm.rvj.tgc = "rgb(0,0,40)";
    this.aiq.vsg = "green";
    this.mgi.borderColor = "rgb(0,0,40)";
    this.mgi.wjh = ["rgb(189,0,0)", "rgb(0,189,189)", "rgb(0,189,0)", "rgb(189,189,0)"];
    this.mgi.jfz = "red";
    this.mgi.mzb = "yellow";
    this.kyj.backgroundColor = "rgb(0,0,60)";
    this.kyj.tna = "rgb(0,0,60)";
    this.kyj.xcl = "rgb(0,0,10)";
    this.kyj.qgx.backgroundColor = "rgb(0,0,40)";
    this.kyj.rvj.backgroundColor = "rgb(20,0,120)";
    this.kyj.rvj.nxx = "rgb(20,0,220)";
    this.kyj.rvj.borderColor = "rgb(20,0,140)";
    this.kyj.rvj.tgc = "rgb(0,0,40)";
    this.kyj.gqn = "rgb(189,189,0)";
    this.kyj.font = "verdana";
    this.kyj.nkj = "bold";
    this.kyj.lqw = {
        font: "sans-serif",
        nkj: "bold",
        idm: "red",
        wqb: null,
        elz: "white"
    };
    this.kyj.rna = {
        font: "arial",
        nkj: "bold",
        gqn: "red"
    };
    this.rtp.tna = "rgb(0,0,60)";
    this.rtp.xcl = "rgb(0,0,10)";
    this.rtp.rvj.backgroundColor = "rgb(20,0,120)";
    this.rtp.rvj.borderColor = "rgb(20,0,140)";
    this.rtp.rvj.tgc = "rgb(0,0,40)";
    this.rtp.win = {
        font: "arial",
        nkj: "bold",
        gqn: "white",
        kah: "yellow",
        osi: "verdana",
        oup: "bold italic",
        cnc: "white"
    };
    this.vjn = {
        font: "verdana",
        nkj: "bold",
        jjh: "rgb(189,189,0)",
        fiv: "rgb(0,189,0)",
        xle: "rgb(189,0,0)"
    };
    this.rna = {
        font: "arial",
        nkj: "bold",
        gqn: "red"
    };
    this.ydd.ygm.rvj.backgroundColor = "rgb(20,0,120)";
    this.cfr.backgroundColor = "rgb(0,0,80)";
    this.cfr.zio = "rgb(0,0,40)"
}
zre.prototype = new goe;

function nap() {
    this.type = "800_600";
    this.gvc = true;
    this.vvd = false;
    this.mxn = false;
    this.pki = true;
    this.fvk = false;
    this.ytv = false;
    this.iox = false;
    this.jnb = false
}

function urb() {
    this.gvc = false;
    this.canvas = {
        quz: new pjy(0, 0, 800, 620)
    };
    this.xdm = {
        quz: new pjy(),
        uip: 0
    };
    this.hpw = {
        quz: new pjy(0, 20, 800, 600),
        qwc: 0
    };
    this.trj = {
        fsd: new pjy(0, 40, 440, 36),
        kcd: new pjy(5, 2, 140, 30),
        zht: new pjy(150, 2, 140, 30),
        kgm: new pjy(295, 2, 140, 30),
        teg: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.auj = {
        hpw: {
            quz: new pjy(0, 0, 500, 360),
            ypx: new pjy(5, 325, 490, 30),
            ejr: new pjy(5, 329, 490, 14),
            ddt: new pjy(50, 345, 400, 6),
            eqy: new pjy(5, 285, 490, 70),
            wam: new pjy(120, 300, 260, 55),
            fontSize: 14,
            muu: 18,
            xme: 26,
            ilp: 5,
            scp: 12,
            dav: 5,
            jeg: 2
        },
        cmg: {
            quz: new pjy(0, 0, 800, 620),
            ypx: new pjy(),
            ejr: new pjy(),
            ddt: new pjy(200, 425, 400, 8),
            eqy: new pjy(100, 372, 600, 84),
            wam: new pjy(270, 394, 260, 70),
            fontSize: 18,
            muu: 24,
            xme: 20,
            ilp: 0,
            scp: 12,
            dav: 7,
            jeg: 0
        }
    };
    this.sse = {
        quz: new pjy(0, 0, 800, 20),
        fontSize: 12,
        qcy: 19,
        bia: 15,
        egc: 120,
        scp: 2,
        dav: 2,
        jqn: 2,
        isf: 40
    };
    this.ydd = {
        quz: new pjy(0, 20, 800, 70),
        fontSize: 10,
        wia: 10,
        ykt: 20,
        jls: 40,
        qwc: 4,
        scp: 10,
        dav: 5,
        ilp: 10,
        teg: {
            fontSize: 17,
            ilp: 2
        }
    };
    this.kdz = {
        quz: new pjy(0, 20, 800, 600),
        fsd: new pjy(),
        teg: {
            bmr: 20,
            zmo: 0,
            scp: 0,
            rkz: 0,
            nuk: 0,
            dym: 8,
            vth: 8,
            qwc: 0
        },
        tus: new pjy(0, 20, 800, 40),
        ghz: new pjy(0, 100, 800, 40),
        pwa: new pjy(0, 140, 800, 40),
        gjk: new pjy(0, 180, 800, 40),
        tki: new pjy(225, 275, 350, 100),
        jyq: new pjy(200, 480, 400, 40),
        kaw: {
            dua: new pjy(340, 540, 120, 55)
        },
        xmz: {
            dua: new pjy(250, 540, 120, 55),
            tho: new pjy(430, 540, 120, 55)
        },
        dqy: 36,
        fontSize: 30,
        fau: 22,
        dav: 3,
        scp: 5,
        qwc: 2,
        ikw: 3,
        ife: 10
    };
    this.oho = {
        quz: new pjy(-10, 25, 310, 50),
        tus: new pjy(10, 4, 240, 24),
        ejr: new pjy(10, 28, 240, 18),
        vne: new pjy(260, 10, 40, 30),
        qmf: new pjy(7, 2, 26, 26),
        huy: 16,
        bmr: 12,
        laz: 18
    };
    this.geo = {
        quz: new pjy(150, 160, 500, 280),
        huy: 26,
        fontSize: 20,
        lyf: new pjy(465, 5, 30, 30),
        tus: new pjy(30, 5, 440, 30),
        jyq: new pjy(20, 40, 460, 160),
        iny: new pjy(20, 230, 460, 40),
        teg: {
            fontSize: 20
        }
    };
    this.meh = {
        quz: new pjy(0, 55, 560, 430),
        qwc: 2,
        gmt: 0,
        pcr: 5,
        loo: 10,
        huy: 26,
        tmt: 20,
        tus: new pjy(30, 15, 500, 30),
        udz: new pjy(20, 50, 520, 60),
        shw: new pjy(40, 60, 220, 40),
        fgp: new pjy(328, 60, 30, 40),
        zxo: new pjy(360, 60, 120, 40),
        swb: new pjy(482, 60, 30, 40),
        omw: new pjy(20, 120, 520, 200),
        gru: new pjy(40, 120, 480, 40),
        mtu: new pjy(30, 160, 280, 40),
        khi: new pjy(328, 160, 30, 40),
        wzg: new pjy(360, 160, 120, 40),
        iuo: new pjy(482, 160, 30, 40),
        asu: new pjy(30, 215, 280, 40),
        vpm: new pjy(328, 215, 30, 40),
        omz: new pjy(360, 215, 120, 40),
        rhq: new pjy(482, 215, 30, 40),
        lpa: new pjy(30, 270, 280, 40),
        svy: new pjy(328, 270, 30, 40),
        cvl: new pjy(360, 270, 120, 40),
        hjv: new pjy(482, 270, 30, 40),
        ypx: new pjy(30, 330, 500, 30),
        cet: new pjy(210, 370, 140, 50),
        fnw: new pjy(),
        lsa: {
            ejr: new pjy(40, 0, 240, 40),
            ryi: new pjy(7, 12, 16, 16),
            fontSize: 20,
            dym: 0,
            qwc: 2
        },
        ses: {
            dym: 3,
            scp: -5,
            dav: -1,
            vth: 6,
            fontSize: 20,
            qwc: 0
        },
        olo: {
            dym: 3,
            scp: 5,
            dav: 0,
            vth: 6,
            fontSize: 20,
            qwc: 0
        },
        kyi: {
            dym: 6,
            scp: 0,
            dav: 0,
            vth: 6,
            fontSize: 26,
            qwc: 2
        },
        display: {
            huy: 16,
            bmr: 24,
            hkg: 0,
            rkz: 0,
            qwc: 2,
            dtf: 3,
            oze: 3,
            dpr: 3,
            eru: 3
        }
    };
    this.ulw = {
        quz: [
            [new pjy(2, 20, 130, 44)],
            [new pjy(2, 20, 130, 44), new pjy(668, 20, 130, 44)],
            [new pjy(2, 20, 130, 23), new pjy(668, 20, 130, 23), new pjy(2, 41, 130, 23)],
            [new pjy(2, 20, 130, 23), new pjy(668, 20, 130, 23), new pjy(2, 41, 130, 23), new pjy(668, 41, 130, 23)]
        ],
        display: {
            blz: new pjy(0, 0, 130, 44),
            ztg: new pjy(0, 0, 130, 44),
            yqc: new pjy(),
            tus: new pjy(2, 3, 126, 19),
            iwe: new pjy(8, 24, 114, 19),
            huy: 16,
            zmo: 18,
            six: 0
        },
        hke: {
            blz: new pjy(0, 0, 130, 23),
            ztg: new pjy(0, 0, 130, 23),
            yqc: new pjy(2, 2, 19, 19),
            tus: new pjy(),
            iwe: new pjy(22, 3, 100, 19),
            huy: 14,
            zmo: 18,
            six: 0
        },
        bsc: {
            quz: new pjy(62, 100, 676, 372),
            blz: new pjy(32, 10, 612, 351),
            ztg: new pjy(0, 0, 676, 372),
            yqc: new pjy(301, 263, 74, 74),
            tus: new pjy(120, 58, 436, 56),
            iwe: new pjy(32, 140, 612, 96),
            huy: 68,
            zmo: 100,
            six: 0
        },
        shv: {
            quz: new pjy(38, 80, 724, 369),
            nrm: new pjy(100, 53, 525, 50),
            iwe: new pjy(186, 153, 332, 94),
            fes: 340,
            jih: 30,
            qad: {
                _0: new pjy(2, 0, 90, 94),
                _1: new pjy(98, 0, 90, 94),
                _2: new pjy(194, 0, 90, 94),
                _3: new pjy(290, 0, 90, 94),
                _4: new pjy(386, 0, 90, 94),
                _5: new pjy(482, 0, 90, 94),
                _6: new pjy(578, 0, 90, 94),
                _7: new pjy(674, 0, 90, 94),
                _8: new pjy(770, 0, 90, 94),
                _9: new pjy(866, 0, 90, 94),
                _cm: new pjy(962, 0, 28, 94),
                _dt: new pjy(999, 0, 28, 94),
                _sp: new pjy(1036, 0, 28, 94)
            }
        }
    }
}
urb.prototype = new nap;

function bky() {
    this.vvd = true
}
bky.prototype = new urb;

function swx() {
    this.fvk = true;
    this.mxn = true;
    this.gvc = false;
    this.vvd = true;
    this.canvas = {
        quz: new pjy(0, 0, 800, 1165)
    };
    this.xdm = {
        quz: new pjy(),
        uip: 0
    };
    this.hpw = {
        quz: new pjy(0, 550, 800, 615),
        qwc: 10
    };
    this.trj = {
        fsd: new pjy(0, 330, 440, 36),
        kcd: new pjy(5, 2, 140, 30),
        zht: new pjy(150, 2, 140, 30),
        kgm: new pjy(295, 2, 140, 30),
        teg: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.auj = {
        hpw: {
            quz: new pjy(0, 0, 500, 360),
            ypx: new pjy(5, 325, 490, 30),
            ejr: new pjy(5, 329, 490, 14),
            ddt: new pjy(50, 345, 400, 6),
            eqy: new pjy(5, 285, 490, 70),
            wam: new pjy(120, 300, 260, 55),
            fontSize: 14,
            muu: 18,
            xme: 26,
            ilp: 5,
            scp: 12,
            dav: 5,
            jeg: 2
        },
        cmg: {
            quz: new pjy(0, 0, 800, 600),
            ypx: new pjy(),
            ejr: new pjy(),
            ddt: new pjy(200, 411, 400, 8),
            eqy: new pjy(100, 360, 600, 110),
            wam: new pjy(270, 380, 260, 70),
            fontSize: 18,
            muu: 24,
            xme: 20,
            ilp: 0,
            scp: 12,
            dav: 7,
            jeg: 0
        }
    };
    this.top = {
        quz: new pjy(0, 20, 800, 520)
    };
    this.sse = {
        quz: new pjy(0, 0, 800, 20),
        fontSize: 12,
        qcy: 19,
        bia: 15,
        egc: 120,
        scp: 2,
        dav: 2,
        jqn: 2,
        isf: 60
    };
    this.ydd = {
        quz: new pjy(0, 20, 800, 70),
        fontSize: 10,
        wia: 10,
        ykt: 20,
        jls: 40,
        qwc: 4,
        scp: 10,
        dav: 5,
        ilp: 10,
        teg: {
            fontSize: 17,
            ilp: 2
        }
    };
    this.kdz = {
        quz: new pjy(0, 550, 800, 615),
        fsd: new pjy(),
        teg: {
            bmr: 26,
            zmo: 0,
            scp: 0,
            rkz: 0,
            nuk: 0,
            dym: 10,
            vth: 10,
            qwc: 2
        },
        tus: new pjy(0, 20, 800, 40),
        ghz: new pjy(0, 100, 800, 40),
        pwa: new pjy(0, 140, 800, 40),
        gjk: new pjy(0, 180, 800, 40),
        tki: new pjy(225, 275, 350, 100),
        jyq: new pjy(200, 480, 400, 40),
        kaw: {
            dua: new pjy(340, 540, 120, 68)
        },
        xmz: {
            dua: new pjy(250, 540, 120, 68),
            tho: new pjy(430, 540, 120, 68)
        },
        dqy: 36,
        fontSize: 30,
        fau: 22,
        dav: 3,
        scp: 5,
        qwc: 2,
        ikw: 3,
        ife: 10,
    };
    this.oho = {
        quz: new pjy(-10, 545, 310, 50),
        tus: new pjy(10, 4, 240, 24),
        ejr: new pjy(10, 28, 240, 18),
        vne: new pjy(260, 10, 40, 30),
        qmf: new pjy(7, 2, 26, 26),
        huy: 16,
        bmr: 12,
        laz: 18
    };
    this.geo = {
        quz: new pjy(150, 690, 500, 280),
        huy: 26,
        fontSize: 20,
        lyf: new pjy(465, 5, 30, 30),
        tus: new pjy(30, 5, 440, 40),
        jyq: new pjy(20, 40, 460, 160),
        iny: new pjy(20, 230, 460, 40),
        teg: {
            fontSize: 20
        }
    };
    this.meh = {
        quz: new pjy(0, 585, 560, 430),
        qwc: 2,
        gmt: 0,
        pcr: 5,
        loo: 10,
        huy: 26,
        tmt: 20,
        tus: new pjy(30, 15, 500, 30),
        udz: new pjy(20, 50, 520, 60),
        shw: new pjy(40, 60, 220, 40),
        fgp: new pjy(328, 60, 30, 40),
        zxo: new pjy(360, 60, 120, 40),
        swb: new pjy(482, 60, 30, 40),
        omw: new pjy(20, 120, 520, 200),
        gru: new pjy(40, 120, 480, 40),
        mtu: new pjy(30, 160, 280, 40),
        khi: new pjy(328, 160, 30, 40),
        wzg: new pjy(360, 160, 120, 40),
        iuo: new pjy(482, 160, 30, 40),
        asu: new pjy(30, 215, 280, 40),
        vpm: new pjy(328, 215, 30, 40),
        omz: new pjy(360, 215, 120, 40),
        rhq: new pjy(482, 215, 30, 40),
        lpa: new pjy(30, 270, 280, 40),
        svy: new pjy(328, 270, 30, 40),
        cvl: new pjy(360, 270, 120, 40),
        hjv: new pjy(482, 270, 30, 40),
        ypx: new pjy(30, 330, 500, 30),
        cet: new pjy(210, 370, 140, 50),
        fnw: new pjy(),
        lsa: {
            ejr: new pjy(40, 0, 240, 40),
            ryi: new pjy(7, 12, 16, 16),
            fontSize: 20,
            dym: 0,
            qwc: 2
        },
        ses: {
            dym: 3,
            scp: -5,
            dav: -1,
            vth: 6,
            fontSize: 20,
            qwc: 0
        },
        olo: {
            dym: 3,
            scp: 5,
            dav: 0,
            vth: 6,
            fontSize: 20,
            qwc: 0
        },
        kyi: {
            dym: 6,
            scp: 0,
            dav: 0,
            vth: 6,
            fontSize: 26,
            qwc: 2
        },
        display: {
            huy: 16,
            bmr: 24,
            hkg: 0,
            rkz: 0,
            qwc: 2,
            dtf: 3,
            oze: 3,
            dpr: 3,
            eru: 3
        }
    };
    this.ulw = {
        quz: [
            [new pjy(2, 550, 130, 44)],
            [new pjy(2, 550, 130, 44), new pjy(668, 550, 130, 44)],
            [new pjy(2, 550, 130, 23), new pjy(668, 550, 130, 23), new pjy(2, 571, 130, 23)],
            [new pjy(2, 550, 130, 23), new pjy(668, 550, 130, 23), new pjy(2, 571, 130, 23), new pjy(668, 571, 130, 23)]
        ],
        display: {
            blz: new pjy(0, 0, 130, 44),
            ztg: new pjy(0, 0, 130, 44),
            yqc: new pjy(),
            tus: new pjy(2, 3, 126, 19),
            iwe: new pjy(8, 24, 114, 19),
            huy: 16,
            zmo: 18,
            six: 0
        },
        hke: {
            blz: new pjy(0, 0, 130, 23),
            ztg: new pjy(0, 0, 130, 23),
            yqc: new pjy(2, 2, 19, 19),
            tus: new pjy(),
            iwe: new pjy(22, 3, 100, 19),
            huy: 14,
            zmo: 18,
            six: 0
        },
        bsc: {
            quz: new pjy(62, 640, 676, 372),
            blz: new pjy(32, 10, 612, 351),
            ztg: new pjy(0, 0, 676, 372),
            yqc: new pjy(301, 263, 74, 74),
            tus: new pjy(120, 58, 436, 56),
            iwe: new pjy(32, 140, 612, 96),
            huy: 68,
            zmo: 100,
            six: 0
        },
        shv: {
            quz: new pjy(38, 610, 724, 369),
            nrm: new pjy(100, 53, 525, 50),
            iwe: new pjy(186, 153, 332, 94),
            fes: 360,
            jih: 30,
            qad: {
                _0: new pjy(2, 0, 90, 94),
                _1: new pjy(98, 0, 90, 94),
                _2: new pjy(194, 0, 90, 94),
                _3: new pjy(290, 0, 90, 94),
                _4: new pjy(386, 0, 90, 94),
                _5: new pjy(482, 0, 90, 94),
                _6: new pjy(578, 0, 90, 94),
                _7: new pjy(674, 0, 90, 94),
                _8: new pjy(770, 0, 90, 94),
                _9: new pjy(866, 0, 90, 94),
                _cm: new pjy(962, 0, 28, 94),
                _dt: new pjy(999, 0, 28, 94),
                _sp: new pjy(1036, 0, 28, 94)
            }
        }
    }
}
swx.prototype = new nap;

function rlh() {
    this.gvc = false;
    this.ytv = true;
    this.iox = true;
    this.canvas = {
        quz: new pjy(0, 0, 960, 630)
    };
    this.xdm = {
        quz: new pjy(),
        uip: 0,
        ilc: 0
    };
    this.hpw = {
        quz: new pjy(160, 30, 800, 600),
        qwc: 0
    };
    this.trj = {
        fsd: new pjy(460, 25, 500, 34),
        kcd: new pjy(5, 2, 160, 30),
        zht: new pjy(170, 2, 160, 30),
        kgm: new pjy(335, 2, 160, 30),
        teg: {
            fontSize: 16,
            textIndent: 32
        }
    };
    this.auj = {
        hpw: {
            quz: new pjy(0, 0, 640, 460),
            ypx: new pjy(6, 416, 628, 38),
            ejr: new pjy(6, 420, 628, 17),
            ddt: new pjy(64, 442, 512, 7),
            eqy: new pjy(6, 364, 628, 90),
            wam: new pjy(140, 384, 360, 70),
            fontSize: 18,
            muu: 20,
            xme: 30,
            ilp: 6,
            scp: 12,
            dav: 6,
            jeg: 3
        },
        cmg: {
            quz: new pjy(0, 0, 960, 630),
            ypx: new pjy(),
            ejr: new pjy(),
            ddt: new pjy(280, 431, 400, 8),
            eqy: new pjy(180, 380, 600, 90),
            wam: new pjy(350, 400, 260, 70),
            fontSize: 18,
            muu: 24,
            xme: 20,
            ilp: 0,
            scp: 12,
            dav: 7,
            jeg: 0
        }
    };
    this.sse = {
        quz: new pjy(160, 0, 800, 30),
        fontSize: 16,
        qcy: 26,
        bia: 15,
        egc: 160,
        scp: 2,
        dav: 2,
        jqn: 2,
        isf: 0
    };
    this.ydd = {};
    this.kdz = {
        quz: new pjy(0, 0, 960, 630),
        fsd: new pjy(0, 0, 160, 630),
        teg: {
            bmr: 0,
            zmo: 0,
            scp: 0,
            rkz: 0,
            nuk: 0,
            vth: 8,
            dym: 16,
            qwc: 4
        },
        tus: new pjy(160, 50, 800, 40),
        ghz: new pjy(160, 130, 800, 40),
        pwa: new pjy(160, 170, 800, 40),
        gjk: new pjy(160, 210, 800, 40),
        tki: new pjy(385, 305, 350, 100),
        jyq: new pjy(360, 510, 400, 40),
        kaw: {
            dua: new pjy(10, 455, 140, 100),
        },
        xmz: {
            dua: new pjy(10, 355, 140, 100),
            tho: new pjy(10, 165, 140, 100)
        },
        dqy: 36,
        fontSize: 30,
        fau: 22,
        dav: 3,
        scp: 5,
        qwc: 2,
        ikw: 3,
        ife: 10
    };
    this.cfr = {
        quz: new pjy(160, 30, 800, 600),
        qwc: 0,
        dym: 0,
        gwb: 50,
        qdy: 30,
        tmt: 30,
        joj: new pjy(30, 180, 410, 60),
        sui: new pjy(460, 180, 50, 60),
        xxf: new pjy(512, 180, 210, 60),
        obl: new pjy(724, 180, 50, 60),
        dcz: new pjy(30, 310, 410, 60),
        wwe: new pjy(460, 310, 50, 60),
        jht: new pjy(512, 310, 210, 60),
        owp: new pjy(724, 310, 50, 60),
        vfu: new pjy(30, 440, 410, 60),
        ngn: new pjy(512, 440, 210, 60),
        llr: new pjy(40, 530, 720, 50),
        shw: new pjy(30, 120, 360, 60),
        fgp: new pjy(460, 120, 50, 60),
        zxo: new pjy(512, 120, 210, 60),
        swb: new pjy(724, 120, 50, 60),
        ayv: new pjy(40, 200, 760, 70),
        mtu: new pjy(30, 280, 410, 60),
        khi: new pjy(460, 280, 50, 60),
        wzg: new pjy(512, 280, 210, 60),
        iuo: new pjy(724, 280, 50, 60),
        asu: new pjy(30, 360, 410, 60),
        vpm: new pjy(460, 360, 50, 60),
        omz: new pjy(512, 360, 210, 60),
        rhq: new pjy(724, 360, 50, 60),
        lpa: new pjy(30, 440, 410, 60),
        svy: new pjy(460, 440, 50, 60),
        cvl: new pjy(512, 440, 210, 60),
        hjv: new pjy(724, 440, 50, 60),
        ypx: new pjy(40, 530, 720, 50),
        xrl: {
            pfr: new pjy(0, 0, 267, 90),
            tso: new pjy(267, 0, 266, 90),
            vxq: new pjy(533, 0, 267, 90),
            uzo: new pjy()
        },
        fec: {
            pfr: new pjy(0, 0, 200, 90),
            wzn: new pjy(200, 0, 200, 90),
            tso: new pjy(400, 0, 200, 90),
            vxq: new pjy(600, 0, 200, 90),
            uzo: new pjy()
        },
        kon: [new pjy(132, 205, 200, 160), new pjy(464, 205, 200, 160)],
        djl: [new pjy(50, 205, 200, 160), new pjy(300, 205, 200, 160), new pjy(550, 205, 200, 160)],
        xnr: [new pjy(132, 130, 200, 160), new pjy(464, 130, 200, 160), new pjy(132, 360, 200, 160), new pjy(464, 360, 200, 160)],
        mwy: [new pjy(50, 130, 200, 160), new pjy(300, 130, 200, 160), new pjy(550, 130, 200, 160), new pjy(50, 360, 200, 160), new pjy(300, 360, 200, 160), new pjy(550, 360, 200, 160)],
        ses: {
            dym: 3,
            scp: -10,
            dav: -1,
            vth: 6,
            fontSize: 36,
            qwc: 0
        },
        olo: {
            dym: 3,
            scp: 10,
            dav: -1,
            vth: 6,
            fontSize: 36,
            qwc: 0
        },
        fhh: {
            fontSize: 36,
            scp: 0,
            dav: 0,
            vth: 10,
            dym: 0,
            qwc: 0
        },
        dtn: {
            fontSize: 26,
            ilp: 5,
            dym: 26,
            qwc: 4,
            pnk: 40
        },
        yjc: {
            huy: 16,
            bmr: 40,
            hkg: 0,
            rkz: 0,
            qwc: 2,
            ilp: 3
        },
        ucu: {
            huy: 16,
            bmr: 40,
            hkg: 0,
            rkz: 0,
            qwc: 2,
            ilp: 3
        },
        lsa: {
            ejr: new pjy(50, 0, 360, 60),
            ryi: new pjy(0, 13, 30, 30),
            fontSize: 30,
            dym: 0,
            qwc: 2
        }
    };
    this.oho = {
        quz: new pjy(660, 30, 310, 60),
        tus: new pjy(60, 6, 240, 26),
        ejr: new pjy(60, 34, 240, 20),
        vne: new pjy(5, 11, 50, 38),
        qmf: new pjy(8, 2, 34, 34),
        huy: 16,
        bmr: 12,
        laz: 24
    };
    this.geo = {
        quz: new pjy(280, 150, 560, 330),
        huy: 26,
        fontSize: 20,
        lyf: new pjy(515, 5, 40, 40),
        tus: new pjy(40, 5, 480, 30),
        jyq: new pjy(20, 40, 520, 195),
        iny: new pjy(20, 265, 520, 54),
        teg: {
            fontSize: 20
        }
    };
    this.ulw = {
        quz: [
            [new pjy(162, 30, 130, 44)],
            [new pjy(162, 30, 130, 44), new pjy(828, 30, 130, 44)],
            [new pjy(162, 30, 130, 23), new pjy(828, 30, 130, 23), new pjy(162, 51, 130, 23)],
            [new pjy(162, 30, 130, 23), new pjy(828, 30, 130, 23), new pjy(162, 51, 130, 23), new pjy(828, 51, 130, 23)]
        ],
        display: {
            blz: new pjy(0, 0, 130, 44),
            ztg: new pjy(0, 0, 130, 44),
            yqc: new pjy(),
            tus: new pjy(2, 3, 126, 19),
            iwe: new pjy(8, 24, 114, 19),
            huy: 16,
            zmo: 18,
            six: 0
        },
        hke: {
            blz: new pjy(0, 0, 130, 23),
            ztg: new pjy(0, 0, 130, 23),
            yqc: new pjy(2, 2, 19, 19),
            tus: new pjy(),
            iwe: new pjy(22, 3, 100, 19),
            huy: 14,
            zmo: 18,
            six: 0
        },
        bsc: {
            quz: new pjy(222, 110, 676, 372),
            blz: new pjy(32, 10, 612, 351),
            ztg: new pjy(0, 0, 676, 372),
            yqc: new pjy(301, 263, 74, 74),
            tus: new pjy(120, 58, 436, 56),
            iwe: new pjy(32, 140, 612, 96),
            huy: 68,
            zmo: 100,
            six: 0
        },
        shv: {
            quz: new pjy(198, 90, 724, 369),
            nrm: new pjy(100, 53, 525, 50),
            iwe: new pjy(186, 153, 332, 94),
            fes: 340,
            jih: 30,
            qad: {
                _0: new pjy(2, 0, 90, 94),
                _1: new pjy(98, 0, 90, 94),
                _2: new pjy(194, 0, 90, 94),
                _3: new pjy(290, 0, 90, 94),
                _4: new pjy(386, 0, 90, 94),
                _5: new pjy(482, 0, 90, 94),
                _6: new pjy(578, 0, 90, 94),
                _7: new pjy(674, 0, 90, 94),
                _8: new pjy(770, 0, 90, 94),
                _9: new pjy(866, 0, 90, 94),
                _cm: new pjy(962, 0, 28, 94),
                _dt: new pjy(999, 0, 28, 94),
                _sp: new pjy(1036, 0, 28, 94)
            }
        }
    }
}
rlh.prototype = new nap;

function gji() {
    this.gvc = false;
    this.ytv = true;
    this.iox = true;
    this.canvas = {
        quz: new pjy(0, 0, 960, 630)
    };
    this.xdm = {
        quz: new pjy(),
        uip: 0,
        ilc: 0
    };
    this.hpw = {
        quz: new pjy(0, 30, 800, 600),
        qwc: 0
    };
    this.trj = {
        fsd: new pjy(0, 25, 500, 34),
        kcd: new pjy(5, 2, 160, 30),
        zht: new pjy(170, 2, 160, 30),
        kgm: new pjy(335, 2, 160, 30),
        teg: {
            fontSize: 16,
            textIndent: 32
        }
    };
    this.auj = {
        hpw: {
            quz: new pjy(0, 0, 640, 460),
            ypx: new pjy(6, 416, 628, 38),
            ejr: new pjy(6, 420, 628, 17),
            ddt: new pjy(64, 442, 512, 7),
            eqy: new pjy(6, 364, 628, 90),
            wam: new pjy(140, 384, 360, 70),
            fontSize: 18,
            muu: 20,
            xme: 30,
            ilp: 6,
            scp: 12,
            dav: 6,
            jeg: 3
        },
        cmg: {
            quz: new pjy(0, 0, 960, 630),
            ypx: new pjy(),
            ejr: new pjy(),
            ddt: new pjy(280, 431, 400, 8),
            eqy: new pjy(180, 380, 600, 90),
            wam: new pjy(350, 400, 260, 70),
            fontSize: 18,
            muu: 24,
            xme: 20,
            ilp: 0,
            scp: 12,
            dav: 7,
            jeg: 0
        }
    };
    this.sse = {
        quz: new pjy(0, 0, 800, 30),
        fontSize: 16,
        qcy: 26,
        bia: 15,
        egc: 160,
        scp: 2,
        dav: 2,
        jqn: 2,
        isf: 0
    };
    this.ydd = {};
    this.kdz = {
        quz: new pjy(0, 0, 960, 630),
        fsd: new pjy(800, 0, 160, 630),
        teg: {
            bmr: 0,
            zmo: 0,
            scp: 0,
            rkz: 0,
            nuk: 0,
            vth: 8,
            dym: 16,
            qwc: 4
        },
        tus: new pjy(0, 50, 800, 40),
        ghz: new pjy(0, 130, 800, 40),
        pwa: new pjy(0, 170, 800, 40),
        gjk: new pjy(0, 210, 800, 40),
        tki: new pjy(225, 305, 350, 100),
        jyq: new pjy(200, 510, 400, 40),
        kaw: {
            dua: new pjy(810, 455, 140, 100),
        },
        xmz: {
            dua: new pjy(810, 355, 140, 100),
            tho: new pjy(810, 165, 140, 100)
        },
        dqy: 36,
        fontSize: 30,
        fau: 22,
        dav: 3,
        scp: 5,
        qwc: 2,
        ikw: 3,
        ife: 10
    };
    this.cfr = {
        quz: new pjy(0, 30, 800, 600),
        qwc: 0,
        dym: 0,
        gwb: 50,
        qdy: 30,
        tmt: 30,
        joj: new pjy(30, 180, 410, 60),
        sui: new pjy(460, 180, 50, 60),
        xxf: new pjy(512, 180, 210, 60),
        obl: new pjy(724, 180, 50, 60),
        dcz: new pjy(30, 310, 410, 60),
        wwe: new pjy(460, 310, 50, 60),
        jht: new pjy(512, 310, 210, 60),
        owp: new pjy(724, 310, 50, 60),
        vfu: new pjy(30, 440, 410, 60),
        ngn: new pjy(512, 440, 210, 60),
        llr: new pjy(40, 530, 720, 50),
        shw: new pjy(30, 120, 360, 60),
        fgp: new pjy(460, 120, 50, 60),
        zxo: new pjy(512, 120, 210, 60),
        swb: new pjy(724, 120, 50, 60),
        ayv: new pjy(40, 200, 760, 70),
        mtu: new pjy(30, 280, 410, 60),
        khi: new pjy(460, 280, 50, 60),
        wzg: new pjy(512, 280, 210, 60),
        iuo: new pjy(724, 280, 50, 60),
        asu: new pjy(30, 360, 410, 60),
        vpm: new pjy(460, 360, 50, 60),
        omz: new pjy(512, 360, 210, 60),
        rhq: new pjy(724, 360, 50, 60),
        lpa: new pjy(30, 440, 410, 60),
        svy: new pjy(460, 440, 50, 60),
        cvl: new pjy(512, 440, 210, 60),
        hjv: new pjy(724, 440, 50, 60),
        ypx: new pjy(40, 530, 720, 50),
        xrl: {
            pfr: new pjy(0, 0, 267, 90),
            tso: new pjy(267, 0, 266, 90),
            vxq: new pjy(533, 0, 267, 90),
            uzo: new pjy()
        },
        fec: {
            pfr: new pjy(0, 0, 200, 90),
            wzn: new pjy(200, 0, 200, 90),
            tso: new pjy(400, 0, 200, 90),
            vxq: new pjy(600, 0, 200, 90),
            uzo: new pjy()
        },
        kon: [new pjy(132, 205, 200, 160), new pjy(464, 205, 200, 160)],
        djl: [new pjy(50, 205, 200, 160), new pjy(300, 205, 200, 160), new pjy(550, 205, 200, 160)],
        xnr: [new pjy(132, 130, 200, 160), new pjy(464, 130, 200, 160), new pjy(132, 360, 200, 160), new pjy(464, 360, 200, 160)],
        mwy: [new pjy(50, 130, 200, 160), new pjy(300, 130, 200, 160), new pjy(550, 130, 200, 160), new pjy(50, 360, 200, 160), new pjy(300, 360, 200, 160), new pjy(550, 360, 200, 160)],
        ses: {
            dym: 3,
            scp: -10,
            dav: -1,
            vth: 6,
            fontSize: 36,
            qwc: 0
        },
        olo: {
            dym: 3,
            scp: 10,
            dav: -1,
            vth: 6,
            fontSize: 36,
            qwc: 0
        },
        fhh: {
            fontSize: 36,
            scp: 0,
            dav: 0,
            vth: 10,
            dym: 0,
            qwc: 0
        },
        dtn: {
            fontSize: 26,
            ilp: 5,
            dym: 26,
            qwc: 4,
            pnk: 40
        },
        yjc: {
            huy: 16,
            bmr: 40,
            hkg: 0,
            rkz: 0,
            qwc: 2,
            ilp: 3
        },
        ucu: {
            huy: 16,
            bmr: 40,
            hkg: 0,
            rkz: 0,
            qwc: 2,
            ilp: 3
        },
        lsa: {
            ejr: new pjy(50, 0, 360, 60),
            ryi: new pjy(0, 13, 30, 30),
            fontSize: 30,
            dym: 0,
            qwc: 2
        }
    };
    this.oho = {
        quz: new pjy(-10, 30, 310, 60),
        tus: new pjy(10, 6, 240, 26),
        ejr: new pjy(10, 34, 240, 20),
        vne: new pjy(255, 11, 50, 38),
        qmf: new pjy(8, 2, 34, 34),
        huy: 16,
        bmr: 12,
        laz: 24
    };
    this.geo = {
        quz: new pjy(120, 150, 560, 330),
        huy: 26,
        fontSize: 20,
        lyf: new pjy(515, 5, 40, 40),
        tus: new pjy(40, 5, 480, 30),
        jyq: new pjy(20, 40, 520, 195),
        iny: new pjy(20, 265, 520, 54),
        teg: {
            fontSize: 20
        }
    };
    this.ulw = {
        quz: [
            [new pjy(2, 30, 130, 44)],
            [new pjy(2, 30, 130, 44), new pjy(668, 30, 130, 44)],
            [new pjy(2, 30, 130, 23), new pjy(668, 30, 130, 23), new pjy(2, 51, 130, 23)],
            [new pjy(2, 30, 130, 23), new pjy(668, 30, 130, 23), new pjy(2, 51, 130, 23), new pjy(668, 51, 130, 23)]
        ],
        display: {
            blz: new pjy(0, 0, 130, 44),
            ztg: new pjy(0, 0, 130, 44),
            yqc: new pjy(),
            tus: new pjy(2, 3, 126, 19),
            iwe: new pjy(8, 24, 114, 19),
            huy: 16,
            zmo: 18,
            six: 0
        },
        hke: {
            blz: new pjy(0, 0, 130, 23),
            ztg: new pjy(0, 0, 130, 23),
            yqc: new pjy(2, 2, 19, 19),
            tus: new pjy(),
            iwe: new pjy(22, 3, 100, 19),
            huy: 14,
            zmo: 18,
            six: 0
        },
        bsc: {
            quz: new pjy(62, 110, 676, 372),
            blz: new pjy(32, 10, 612, 351),
            ztg: new pjy(0, 0, 676, 372),
            yqc: new pjy(301, 263, 74, 74),
            tus: new pjy(120, 58, 436, 56),
            iwe: new pjy(32, 140, 612, 96),
            huy: 68,
            zmo: 100,
            six: 0
        },
        shv: {
            quz: new pjy(38, 90, 724, 369),
            nrm: new pjy(100, 53, 525, 50),
            iwe: new pjy(186, 153, 332, 94),
            fes: 340,
            jih: 30,
            qad: {
                _0: new pjy(2, 0, 90, 94),
                _1: new pjy(98, 0, 90, 94),
                _2: new pjy(194, 0, 90, 94),
                _3: new pjy(290, 0, 90, 94),
                _4: new pjy(386, 0, 90, 94),
                _5: new pjy(482, 0, 90, 94),
                _6: new pjy(578, 0, 90, 94),
                _7: new pjy(674, 0, 90, 94),
                _8: new pjy(770, 0, 90, 94),
                _9: new pjy(866, 0, 90, 94),
                _cm: new pjy(962, 0, 28, 94),
                _dt: new pjy(999, 0, 28, 94),
                _sp: new pjy(1036, 0, 28, 94)
            }
        }
    }
}
gji.prototype = new nap;

function iab() {
    this.tlp = true;
    this.oxm = true;
    this.omm = {
        quz: new pjy(0, 496, 800, 124),
        eoe: new pjy(0, 0, 800, 124),
        jjf: new pjy(),
        qgx: {
            quz: new pjy(187, 14, 470, 40),
            dav: 10,
            fontSize: 18,
            dym: 3,
            nit: 2,
            vth: 6,
            qwc: 2
        },
        crc: {
            bmr: 22,
            zmo: 0,
            scp: 0,
            rkz: 0,
            nuk: 0,
            dym: 10,
            vth: 8,
            qwc: 2
        },
        eqh: {
            bmr: 16,
            zmo: 0,
            scp: 0,
            rkz: 0,
            nuk: 0,
            dym: 8,
            vth: 6,
            qwc: 2
        },
        ugd: {
            bmr: 16,
            zmo: 16,
            scp: 0,
            dym: 8,
            vth: 6,
            qwc: 2,
            rkz: 24,
            nuk: -24
        },
        display: {
            hkg: -12,
            rkz: 11,
            bmr: 26,
            huy: 15,
            qwc: 2,
            dtf: 3,
            oze: 3,
            dpr: 3,
            eru: 3
        },
        zyr: new pjy(5, 10, 150, 48),
        awd: new pjy(689, 10, 106, 48),
        hil: {
            dzy: new pjy(686, 68, 110, 53),
            xhh: new pjy(492, 68, 80, 53),
            hdt: new pjy(382, 68, 80, 53),
            tho: new pjy(272, 68, 80, 53),
            ryv: new pjy(25, 68, 110, 53),
            hkz: new pjy()
        },
        fsw: {
            dzy: new pjy(686, 68, 110, 53),
            ryv: new pjy(532, 68, 80, 53),
            xhh: new pjy(432, 68, 80, 53),
            hdt: new pjy(332, 68, 80, 53),
            tho: new pjy(232, 68, 80, 53),
            rrp: new pjy(40, 68, 80, 53),
            hkz: new pjy()
        },
        joo: {
            dzy: new pjy(686, 68, 110, 53),
            ryv: new pjy(492, 68, 80, 53),
            xhh: new pjy(382, 68, 80, 53),
            hdt: new pjy(272, 68, 80, 53),
            rrp: new pjy(40, 68, 80, 53),
            hkz: new pjy()
        },
        hlz: {
            dzy: new pjy(686, 68, 110, 53),
            xhh: new pjy(492, 68, 80, 53),
            hdt: new pjy(382, 68, 80, 53),
            tho: new pjy(272, 68, 80, 53),
            ryv: new pjy(25, 68, 110, 53),
            hkz: new pjy()
        },
        sqy: 15
    };
    this.rtp = {
        quz: new pjy(0, 20, 800, 600),
        fsd: new pjy(0, 540, 800, 60),
        tho: new pjy(711, 544, 73, 53),
        fjr: new pjy(11, 544, 73, 53),
        xch: new pjy(316, 544, 73, 53),
        tyl: new pjy(411, 544, 73, 53),
        teg: {
            bmr: 16,
            zmo: 0,
            scp: 0,
            rkz: 0,
            nuk: 0,
            vth: 6,
            dym: 8,
            qwc: 2
        }
    };
    this.kyj = {
        quz: new pjy(0, 20, 800, 600),
        fsd: new pjy(0, 485, 800, 115),
        qgx: {
            quz: new pjy(187, 490, 470, 40),
            fontSize: 18,
            dav: 14,
            dym: 3,
            nit: 2,
            vth: 6,
            qwc: 2
        },
        teg: {
            bmr: 18,
            zmo: 0,
            scp: 0,
            rkz: 0,
            nuk: 0,
            vth: 8,
            dym: 10,
            qwc: 2
        },
        display: {
            hkg: -12,
            rkz: 11,
            bmr: 26,
            huy: 15,
            qwc: 2,
            dtf: 3,
            oze: 3,
            dpr: 3,
            eru: 3
        },
        dby: new pjy(689, 486, 106, 48),
        hcl: new pjy(5, 486, 150, 48)
    };
    this.wiv = {
        quz: new pjy(710, 35, 90, 450),
        tus: new pjy(5, 5, 80, 15),
        fyu: new pjy(50, 25, 35, 410),
        fontSize: 15,
        kky: 20,
        qwc: 2,
        dym: 5,
        vhx: 4,
        txw: 10,
        ite: 5
    };
    this.aiq = {
        fontSize: 18,
        hly: 128,
        tgz: 176,
        hnk: 0,
        viz: 20,
        jlk: true
    };
    this.rpc = new pjy(20, 290, 128, 205);
    this.xxe = new pjy(176, 290, 128, 205);
    this.cgp = new pjy(333, 290, 128, 205);
    this.utf = new pjy(490, 290, 128, 205);
    this.oww = new pjy(646, 290, 128, 205);
    this.lqw = {
        quz: new pjy(363, 72, 408, 155),
        fontSize: 50,
        scp: 0,
        dav: 9,
        ilp: 0,
        six: 2
    };
    this.mgi = {
        quz: new pjy(355, 30, 424, 236),
        fontSize: 20,
        ilp: 6
    }
}
iab.prototype = new urb;

function ykq() {
    this.vvd = true
}
ykq.prototype = new iab;

function aic() {
    this.tlp = true;
    this.oxm = true;
    this.omm = {
        quz: new pjy(0, 1026, 800, 139),
        eoe: new pjy(0, 0, 800, 139),
        jjf: new pjy(),
        qgx: {
            quz: new pjy(187, 14, 470, 40),
            dav: 10,
            fontSize: 18,
            dym: 3,
            nit: 2,
            vth: 6,
            qwc: 2
        },
        crc: {
            bmr: 28,
            zmo: 0,
            scp: 0,
            rkz: 0,
            nuk: 0,
            dym: 12,
            vth: 10,
            qwc: 2
        },
        eqh: {
            bmr: 21,
            zmo: 0,
            scp: 0,
            rkz: 0,
            nuk: 0,
            dym: 10,
            vth: 8,
            qwc: 2
        },
        ugd: {
            bmr: 21,
            zmo: 21,
            scp: 0,
            dym: 8,
            vth: 6,
            qwc: 2,
            rkz: 30,
            nuk: -32
        },
        display: {
            hkg: -12,
            rkz: 11,
            bmr: 26,
            huy: 15,
            qwc: 2,
            dtf: 3,
            oze: 3,
            dpr: 3,
            eru: 3
        },
        zyr: new pjy(5, 10, 150, 48),
        awd: new pjy(689, 10, 106, 48),
        hil: {
            dzy: new pjy(675, 68, 120, 68),
            xhh: new pjy(486, 68, 100, 68),
            hdt: new pjy(371, 68, 100, 68),
            tho: new pjy(256, 68, 100, 68),
            ryv: new pjy(20, 68, 120, 68),
            hkz: new pjy()
        },
        fsw: {
            dzy: new pjy(675, 68, 110, 68),
            ryv: new pjy(536, 68, 100, 68),
            xhh: new pjy(426, 68, 100, 68),
            hdt: new pjy(316, 68, 100, 68),
            tho: new pjy(206, 68, 100, 68),
            rrp: new pjy(30, 68, 100, 68),
            hkz: new pjy()
        },
        joo: {
            dzy: new pjy(675, 68, 120, 68),
            ryv: new pjy(486, 68, 100, 68),
            xhh: new pjy(371, 68, 100, 68),
            hdt: new pjy(256, 68, 100, 68),
            rrp: new pjy(30, 68, 100, 68),
            hkz: new pjy()
        },
        hlz: {
            dzy: new pjy(675, 68, 120, 68),
            xhh: new pjy(486, 68, 100, 68),
            hdt: new pjy(371, 68, 100, 68),
            tho: new pjy(256, 68, 100, 68),
            ryv: new pjy(20, 68, 120, 68),
            hkz: new pjy()
        },
        sqy: 15
    };
    this.rtp = {
        quz: new pjy(0, 550, 800, 615),
        fsd: new pjy(0, 540, 800, 75),
        tho: new pjy(695, 544, 90, 68),
        fjr: new pjy(11, 544, 90, 68),
        xch: new pjy(295, 544, 90, 68),
        tyl: new pjy(415, 544, 90, 68),
        teg: {
            bmr: 21,
            zmo: 0,
            scp: 0,
            rkz: 0,
            nuk: 0,
            vth: 8,
            dym: 10,
            qwc: 2
        }
    };
    this.kyj = {
        quz: new pjy(0, 550, 800, 615),
        fsd: new pjy(0, 485, 800, 130),
        qgx: {
            quz: new pjy(187, 490, 470, 40),
            fontSize: 18,
            dav: 14,
            dym: 3,
            nit: 2,
            vth: 6,
            qwc: 2
        },
        teg: {
            bmr: 23,
            zmo: 0,
            scp: 0,
            rkz: 0,
            nuk: 0,
            vth: 10,
            dym: 12,
            qwc: 2
        },
        display: {
            hkg: -12,
            rkz: 11,
            bmr: 26,
            huy: 15,
            qwc: 2,
            dtf: 3,
            oze: 3,
            dpr: 3,
            eru: 3
        },
        dby: new pjy(689, 486, 106, 48),
        hcl: new pjy(5, 486, 150, 48)
    };
    this.wiv = {
        quz: new pjy(710, 565, 90, 450),
        tus: new pjy(5, 5, 80, 15),
        fyu: new pjy(50, 25, 35, 410),
        fontSize: 15,
        kky: 20,
        qwc: 2,
        dym: 5,
        vhx: 4,
        txw: 10,
        ite: 5
    };
    this.aiq = {
        fontSize: 18,
        hly: 128,
        tgz: 176,
        hnk: 0,
        viz: 20,
        jlk: true
    };
    this.rpc = new pjy(20, 820, 128, 205);
    this.xxe = new pjy(176, 820, 128, 205);
    this.cgp = new pjy(333, 820, 128, 205);
    this.utf = new pjy(490, 820, 128, 205);
    this.oww = new pjy(646, 820, 128, 205);
    this.lqw = {
        quz: new pjy(363, 602, 408, 155),
        fontSize: 50,
        scp: 0,
        dav: 9,
        ilp: 0,
        six: 2
    };
    this.mgi = {
        quz: new pjy(355, 560, 424, 236),
        fontSize: 20,
        ilp: 6
    };
    this.top = {
        quz: new pjy(0, 20, 800, 520)
    }
}
aic.prototype = new swx;

function zmn() {
    this.tlp = false;
    this.oxm = true;
    this.omm = {
        quz: new pjy(0, 0, 960, 630),
        eoe: new pjy(160, 506, 800, 124),
        jjf: new pjy(0, 0, 160, 630),
        qgx: {
            quz: new pjy(385, 525, 390, 70),
            dav: 14,
            fontSize: 24,
            dym: 3,
            nit: 2,
            vth: 6,
            qwc: 2
        },
        crc: {
            bmr: 0,
            zmo: 0,
            scp: 0,
            rkz: 0,
            nuk: 0,
            dym: 24,
            vth: 8,
            qwc: 6
        },
        eqh: {
            bmr: 0,
            zmo: 0,
            scp: 0,
            rkz: 0,
            nuk: 0,
            dym: 16,
            vth: 8,
            qwc: 4
        },
        ugd: {
            bmr: 0,
            zmo: 24,
            scp: 0,
            dym: 24,
            vth: 8,
            qwc: 6,
            rkz: 0,
            nuk: -130
        },
        display: {
            hkg: -20,
            rkz: 16,
            bmr: 32,
            huy: 18,
            qwc: 3,
            dtf: 3,
            oze: 3,
            dpr: 3,
            eru: 3
        },
        zyr: new pjy(165, 525, 180, 70),
        awd: new pjy(815, 525, 140, 70),
        hil: {
            dzy: new pjy(10, 215, 140, 200),
            xhh: new pjy(),
            hdt: new pjy(),
            tho: new pjy(10, 455, 140, 100),
            ryv: new pjy(),
            hkz: new pjy(10, 75, 140, 100)
        },
        fsw: {
            dzy: new pjy(10, 215, 140, 200),
            ryv: new pjy(),
            xhh: new pjy(),
            hdt: new pjy(),
            tho: new pjy(10, 455, 140, 100),
            rrp: new pjy(),
            hkz: new pjy(10, 75, 140, 100)
        },
        joo: {
            dzy: new pjy(10, 215, 140, 200),
            ryv: new pjy(),
            xhh: new pjy(),
            hdt: new pjy(),
            rrp: new pjy(),
            hkz: new pjy(10, 75, 140, 100)
        },
        hlz: {
            dzy: new pjy(10, 215, 140, 200),
            xhh: new pjy(),
            hdt: new pjy(),
            tho: new pjy(10, 455, 140, 100),
            ryv: new pjy(),
            hkz: new pjy(10, 75, 140, 100)
        },
        sqy: 15
    };
    this.rtp = {
        quz: new pjy(0, 0, 960, 630),
        fsd: new pjy(0, 0, 160, 630),
        tho: new pjy(10, 455, 140, 100),
        fjr: new pjy(),
        xch: new pjy(10, 75, 140, 100),
        tyl: new pjy(10, 265, 140, 100),
        teg: {
            bmr: 0,
            zmo: 0,
            scp: 0,
            rkz: 0,
            nuk: 0,
            vth: 16,
            dym: 16,
            qwc: 4
        }
    };
    this.kyj = {
        quz: new pjy(0, 0, 960, 630),
        fsd: new pjy(0, 0, 160, 630),
        qgx: {
            quz: new pjy(390, 525, 390, 70),
            fontSize: 20,
            dav: 14,
            dym: 3,
            nit: 2,
            vth: 6,
            qwc: 2
        },
        teg: {
            bmr: 24,
            zmo: 0,
            scp: 0,
            rkz: 0,
            nuk: 0,
            vth: 8,
            dym: 16,
            qwc: 4
        },
        display: {
            hkg: -20,
            rkz: 16,
            bmr: 32,
            huy: 18,
            qwc: 3,
            dtf: 3,
            oze: 3,
            dpr: 3,
            eru: 3
        },
        hcl: new pjy(165, 525, 180, 70),
        dby: new pjy(815, 525, 140, 70),
    };
    this.aiq = {
        fontSize: 18,
        hly: 128,
        tgz: 176,
        hnk: 0,
        viz: 20,
        jlk: true
    };
    this.rpc = new pjy(180, 300, 128, 205);
    this.xxe = new pjy(336, 300, 128, 205);
    this.cgp = new pjy(493, 300, 128, 205);
    this.utf = new pjy(650, 300, 128, 205);
    this.oww = new pjy(806, 300, 128, 205);
    this.lqw = {
        quz: new pjy(523, 82, 408, 155),
        fontSize: 50,
        scp: 0,
        dav: 9,
        ilp: 0,
        six: 2
    };
    this.mgi = {
        quz: new pjy(515, 40, 424, 236),
        fontSize: 20,
        ilp: 6
    };
    this.cfr.joj = new pjy();
    this.cfr.xxf = new pjy();
    this.cfr.dcz = new pjy();
    this.cfr.wwe = new pjy();
    this.cfr.jht = new pjy();
    this.cfr.owp = new pjy();
    this.cfr.vfu = new pjy(30, 180, 410, 60);
    this.cfr.ngn = new pjy(512, 180, 210, 60)
}
zmn.prototype = new rlh;

function ved() {
    this.tlp = false;
    this.oxm = true;
    this.omm = {
        quz: new pjy(0, 0, 960, 630),
        eoe: new pjy(0, 506, 800, 124),
        jjf: new pjy(800, 0, 160, 630),
        qgx: {
            quz: new pjy(225, 525, 390, 70),
            dav: 14,
            fontSize: 24,
            dym: 3,
            nit: 2,
            vth: 6,
            qwc: 2
        },
        crc: {
            bmr: 0,
            zmo: 0,
            scp: 0,
            rkz: 0,
            nuk: 0,
            dym: 24,
            vth: 8,
            qwc: 6
        },
        eqh: {
            bmr: 0,
            zmo: 0,
            scp: 0,
            rkz: 0,
            nuk: 0,
            dym: 16,
            vth: 8,
            qwc: 4
        },
        ugd: {
            bmr: 0,
            zmo: 24,
            scp: 0,
            dym: 24,
            vth: 8,
            qwc: 6,
            rkz: 0,
            nuk: -130
        },
        display: {
            hkg: -20,
            rkz: 16,
            bmr: 32,
            huy: 18,
            qwc: 3,
            dtf: 3,
            oze: 3,
            dpr: 3,
            eru: 3
        },
        zyr: new pjy(5, 525, 180, 70),
        awd: new pjy(655, 525, 140, 70),
        hil: {
            dzy: new pjy(810, 215, 140, 200),
            xhh: new pjy(),
            hdt: new pjy(),
            tho: new pjy(810, 455, 140, 100),
            ryv: new pjy(),
            hkz: new pjy(810, 75, 140, 100)
        },
        fsw: {
            dzy: new pjy(810, 215, 140, 200),
            ryv: new pjy(),
            xhh: new pjy(),
            hdt: new pjy(),
            tho: new pjy(810, 455, 140, 100),
            rrp: new pjy(),
            hkz: new pjy(810, 75, 140, 100)
        },
        joo: {
            dzy: new pjy(810, 215, 140, 200),
            ryv: new pjy(),
            xhh: new pjy(),
            hdt: new pjy(),
            rrp: new pjy(),
            hkz: new pjy(810, 75, 140, 100)
        },
        hlz: {
            dzy: new pjy(810, 215, 140, 200),
            xhh: new pjy(),
            hdt: new pjy(),
            tho: new pjy(810, 455, 140, 100),
            ryv: new pjy(),
            hkz: new pjy(810, 75, 140, 100)
        },
        sqy: 15
    };
    this.rtp = {
        quz: new pjy(0, 0, 960, 630),
        fsd: new pjy(800, 0, 160, 630),
        tho: new pjy(810, 455, 140, 100),
        fjr: new pjy(),
        xch: new pjy(810, 75, 140, 100),
        tyl: new pjy(810, 265, 140, 100),
        teg: {
            bmr: 0,
            zmo: 0,
            scp: 0,
            rkz: 0,
            nuk: 0,
            vth: 16,
            dym: 16,
            qwc: 4
        }
    };
    this.kyj = {
        quz: new pjy(0, 0, 960, 630),
        fsd: new pjy(800, 0, 160, 630),
        qgx: {
            quz: new pjy(230, 525, 390, 70),
            fontSize: 20,
            dav: 14,
            dym: 3,
            nit: 2,
            vth: 6,
            qwc: 2
        },
        teg: {
            bmr: 24,
            zmo: 0,
            scp: 0,
            rkz: 0,
            nuk: 0,
            vth: 8,
            dym: 16,
            qwc: 4
        },
        display: {
            hkg: -20,
            rkz: 16,
            bmr: 32,
            huy: 18,
            qwc: 3,
            dtf: 3,
            oze: 3,
            dpr: 3,
            eru: 3
        },
        hcl: new pjy(5, 525, 180, 70),
        dby: new pjy(655, 525, 140, 70),
    };
    this.aiq = {
        fontSize: 18,
        hly: 128,
        tgz: 176,
        hnk: 0,
        viz: 20,
        jlk: true
    };
    this.rpc = new pjy(20, 300, 128, 205);
    this.xxe = new pjy(176, 300, 128, 205);
    this.cgp = new pjy(333, 300, 128, 205);
    this.utf = new pjy(490, 300, 128, 205);
    this.oww = new pjy(646, 300, 128, 205);
    this.lqw = {
        quz: new pjy(363, 82, 408, 155),
        fontSize: 50,
        scp: 0,
        dav: 9,
        ilp: 0,
        six: 2
    };
    this.mgi = {
        quz: new pjy(355, 40, 424, 236),
        fontSize: 20,
        ilp: 6
    };
    this.cfr.joj = new pjy();
    this.cfr.xxf = new pjy();
    this.cfr.dcz = new pjy();
    this.cfr.wwe = new pjy();
    this.cfr.jht = new pjy();
    this.cfr.owp = new pjy();
    this.cfr.vfu = new pjy(30, 180, 410, 60);
    this.cfr.ngn = new pjy(512, 180, 210, 60)
}
ved.prototype = new gji;

function jcd() {
    this.aiq.hly = 125;
    this.aiq.tgz = 175;
    this.aiq.jlk = false;
    this.rpc = new pjy(20, 295, 128, 205);
    this.xxe = new pjy(176, 295, 128, 205);
    this.cgp = new pjy(333, 295, 128, 205);
    this.utf = new pjy(490, 295, 128, 205);
    this.oww = new pjy(646, 295, 128, 205);
    this.mgi.quz = new pjy(352, 30, 420, 250);
    this.mgi.fontSize = 20;
    this.mgi.ilp = 6;
    this.mgi.qwc = 3;
    this.lqw.quz = new pjy(358, 72, 408, 155);
    this.lqw.fontSize = 40;
    this.lqw.huy = 40;
    this.lqw.dav = 40;
    this.lqw.hkg = -40;
    this.rna = {
        quz: new pjy(20, 140, 315, 80),
        fontSize: 14,
        tyn: [new pjy(0, 6, 52, 56), new pjy(60, 6, 52, 56), new pjy(120, 6, 52, 56), new pjy(180, 6, 52, 56)]
    };
    this.yiz = {
        quz: new pjy(40, 30, 200, 112)
    };
    this.vjn = {
        quz: new pjy(20, 230, 230, 22),
        fontSize: 18
    };
    this.kyj.aiq = {
        quz: new pjy(19, 266, 430, 176),
        hly: 125,
        tgz: 175,
        scp: 30,
    };
    this.kyj.lqw = {
        quz: new pjy(358, 90, 408, 155),
        fontSize: 40,
        huy: 40,
        scp: 0,
        dav: 40,
        hkg: -40,
        ilp: 0,
        six: 2
    };
    this.kyj.xak = {
        quz: new pjy(45, 145, 95, 55),
        hly: 125,
        tgz: 175,
        tll: 19,
        mnr: 54
    };
    this.kyj.eqh = {
        bmr: 16,
        zmo: 0,
        scp: 0,
        rkz: 0,
        nuk: 0,
        dym: 8,
        vth: 6,
        qwc: 2
    };
    this.kyj.rna = {
        quz: new pjy(358, 17, 408, 75),
        fontSize: 14,
        tyn: [new pjy(25, 0, 52, 56), new pjy(127, 0, 52, 56), new pjy(229, 0, 52, 56), new pjy(331, 0, 52, 56)]
    };
    this.kyj.jrn = new pjy(686, 544, 110, 53);
    this.kyj.eaq = new pjy(382, 544, 80, 53);
    this.kyj.ycr = new pjy(272, 544, 80, 53);
    this.kyj.uqt = new pjy(492, 544, 80, 53);
    this.kyj.rly = new pjy(610, 290, 160, 125);
    this.kyj.fontSize = 16;
    this.rtp.win = {
        quz: new pjy(0, 0, 800, 600),
        fontSize: 16,
        huy: 40,
        tmt: 12,
        lineWidth: 1,
        tus: new pjy(),
        ypx: new pjy(0, 530, 800, 20),
        ssn: [new pjy(111, 25, 180, 20), new pjy(111, 95, 180, 20), new pjy(111, 165, 180, 20), new pjy(111, 235, 180, 20), new pjy(111, 305, 180, 20), new pjy(111, 375, 180, 20), new pjy(111, 445, 180, 20), new pjy(506, 25, 180, 20), new pjy(506, 95, 180, 20), new pjy(506, 165, 180, 20), new pjy(506, 235, 180, 20), new pjy(506, 305, 180, 20), new pjy(506, 375, 180, 20), new pjy(506, 445, 180, 20)],
        ejr: [new pjy(111, 46, 278, 34), new pjy(111, 116, 278, 34), new pjy(111, 186, 278, 34), new pjy(111, 256, 278, 34), new pjy(111, 326, 278, 34), new pjy(111, 396, 278, 34), new pjy(111, 466, 278, 34), new pjy(506, 46, 278, 34), new pjy(506, 116, 278, 34), new pjy(506, 186, 278, 34), new pjy(506, 256, 278, 34), new pjy(506, 326, 278, 34), new pjy(506, 396, 278, 34), new pjy(506, 466, 278, 34)]
    }
}
jcd.prototype = new iab;

function vzg() {
    this.vvd = true
}
vzg.prototype = new jcd;

function nrr() {
    this.aiq.hly = 125;
    this.aiq.tgz = 175;
    this.aiq.jlk = false;
    this.rpc = new pjy(20, 825, 128, 205);
    this.xxe = new pjy(176, 825, 128, 205);
    this.cgp = new pjy(333, 825, 128, 205);
    this.utf = new pjy(490, 825, 128, 205);
    this.oww = new pjy(646, 825, 128, 205);
    this.mgi.quz = new pjy(352, 550, 420, 250);
    this.mgi.fontSize = 20;
    this.mgi.ilp = 6;
    this.mgi.qwc = 3;
    this.lqw.quz = new pjy(358, 602, 408, 155);
    this.lqw.fontSize = 40;
    this.lqw.huy = 40;
    this.lqw.dav = 40;
    this.lqw.hkg = -40;
    this.rna = {
        quz: new pjy(20, 670, 315, 80),
        fontSize: 14,
        tyn: [new pjy(0, 6, 52, 56), new pjy(60, 6, 52, 56), new pjy(120, 6, 52, 56), new pjy(180, 6, 52, 56)]
    };
    this.yiz = {
        quz: new pjy(40, 560, 200, 112)
    };
    this.vjn = {
        quz: new pjy(20, 760, 230, 22),
        fontSize: 18
    };
    this.kyj.aiq = {
        quz: new pjy(19, 266, 430, 176),
        hly: 125,
        tgz: 175,
        scp: 30,
    };
    this.kyj.lqw = {
        quz: new pjy(358, 90, 408, 155),
        fontSize: 40,
        huy: 40,
        scp: 0,
        dav: 40,
        hkg: -40,
        ilp: 0,
        six: 2
    };
    this.kyj.xak = {
        quz: new pjy(45, 145, 95, 55),
        hly: 125,
        tgz: 175,
        tll: 19,
        mnr: 54
    };
    this.kyj.eqh = {
        bmr: 16,
        zmo: 0,
        scp: 0,
        rkz: 0,
        nuk: 0,
        dym: 8,
        vth: 6,
        qwc: 2
    };
    this.kyj.rna = {
        quz: new pjy(358, 17, 408, 75),
        fontSize: 14,
        tyn: [new pjy(25, 0, 52, 56), new pjy(127, 0, 52, 56), new pjy(229, 0, 52, 56), new pjy(331, 0, 52, 56)]
    };
    this.kyj.jrn = new pjy(675, 544, 120, 68);
    this.kyj.eaq = new pjy(371, 544, 100, 68);
    this.kyj.ycr = new pjy(256, 544, 100, 68);
    this.kyj.uqt = new pjy(486, 544, 100, 68);
    this.kyj.rly = new pjy(610, 290, 160, 125);
    this.kyj.fontSize = 16;
    this.rtp.win = {
        quz: new pjy(0, 0, 800, 615),
        fontSize: 16,
        huy: 40,
        tmt: 12,
        lineWidth: 1,
        tus: new pjy(),
        ypx: new pjy(0, 530, 800, 20),
        ssn: [new pjy(111, 25, 180, 20), new pjy(111, 95, 180, 20), new pjy(111, 165, 180, 20), new pjy(111, 235, 180, 20), new pjy(111, 305, 180, 20), new pjy(111, 375, 180, 20), new pjy(111, 445, 180, 20), new pjy(506, 25, 180, 20), new pjy(506, 95, 180, 20), new pjy(506, 165, 180, 20), new pjy(506, 235, 180, 20), new pjy(506, 305, 180, 20), new pjy(506, 375, 180, 20), new pjy(506, 445, 180, 20)],
        ejr: [new pjy(111, 46, 278, 34), new pjy(111, 116, 278, 34), new pjy(111, 186, 278, 34), new pjy(111, 256, 278, 34), new pjy(111, 326, 278, 34), new pjy(111, 396, 278, 34), new pjy(111, 466, 278, 34), new pjy(506, 46, 278, 34), new pjy(506, 116, 278, 34), new pjy(506, 186, 278, 34), new pjy(506, 256, 278, 34), new pjy(506, 326, 278, 34), new pjy(506, 396, 278, 34), new pjy(506, 466, 278, 34)]
    };
    this.top.win = {
        quz: new pjy(0, 0, 800, 520),
        fontSize: 16,
        huy: 40,
        tmt: 12,
        lineWidth: 1,
        tus: new pjy(),
        ypx: new pjy(0, 506, 800, 14),
        ssn: [new pjy(111, 25, 180, 20), new pjy(111, 95, 180, 20), new pjy(111, 165, 180, 20), new pjy(111, 235, 180, 20), new pjy(111, 305, 180, 20), new pjy(111, 375, 180, 20), new pjy(111, 445, 180, 20), new pjy(506, 25, 180, 20), new pjy(506, 95, 180, 20), new pjy(506, 165, 180, 20), new pjy(506, 235, 180, 20), new pjy(506, 305, 180, 20), new pjy(506, 375, 180, 20), new pjy(506, 445, 180, 20)],
        ejr: [new pjy(111, 46, 278, 34), new pjy(111, 116, 278, 34), new pjy(111, 186, 278, 34), new pjy(111, 256, 278, 34), new pjy(111, 326, 278, 34), new pjy(111, 396, 278, 34), new pjy(111, 466, 278, 34), new pjy(506, 46, 278, 34), new pjy(506, 116, 278, 34), new pjy(506, 186, 278, 34), new pjy(506, 256, 278, 34), new pjy(506, 326, 278, 34), new pjy(506, 396, 278, 34), new pjy(506, 466, 278, 34)]
    }
}
nrr.prototype = new aic;

function iyv() {
    this.aiq.hly = 125;
    this.aiq.tgz = 175;
    this.aiq.jlk = false;
    this.rpc = new pjy(180, 305, 128, 205);
    this.xxe = new pjy(336, 305, 128, 205);
    this.cgp = new pjy(493, 305, 128, 205);
    this.utf = new pjy(650, 305, 128, 205);
    this.oww = new pjy(806, 305, 128, 205);
    this.mgi.quz = new pjy(512, 40, 420, 250);
    this.mgi.fontSize = 20;
    this.mgi.ilp = 6;
    this.mgi.qwc = 3;
    this.lqw.quz = new pjy(518, 82, 408, 155);
    this.lqw.fontSize = 40;
    this.lqw.huy = 40;
    this.lqw.dav = 40;
    this.lqw.hkg = -40;
    this.rna = {
        quz: new pjy(180, 150, 315, 80),
        fontSize: 14,
        tyn: [new pjy(0, 6, 52, 56), new pjy(60, 6, 52, 56), new pjy(120, 6, 52, 56), new pjy(180, 6, 52, 56)]
    };
    this.yiz = {
        quz: new pjy(200, 40, 200, 112)
    };
    this.vjn = {
        quz: new pjy(180, 240, 230, 22),
        fontSize: 18
    };
    this.kyj.aiq = {
        quz: new pjy(179, 296, 430, 176),
        hly: 125,
        tgz: 175,
        scp: 30,
    };
    this.kyj.lqw = {
        quz: new pjy(518, 120, 408, 155),
        fontSize: 40,
        huy: 40,
        scp: 0,
        dav: 40,
        hkg: -40,
        ilp: 0,
        six: 2
    };
    this.kyj.xak = {
        quz: new pjy(205, 175, 95, 55),
        hly: 125,
        tgz: 175,
        tll: 19,
        mnr: 54
    };
    this.kyj.eqh = {
        bmr: 26,
        zmo: 0,
        scp: 0,
        rkz: 0,
        nuk: 0,
        dym: 16,
        vth: 8,
        qwc: 4
    };
    this.kyj.rna = {
        quz: new pjy(518, 47, 408, 75),
        fontSize: 14,
        tyn: [new pjy(25, 0, 52, 56), new pjy(127, 0, 52, 56), new pjy(229, 0, 52, 56), new pjy(331, 0, 52, 56)]
    };
    this.kyj.jrn = new pjy(10, 455, 140, 100);
    this.kyj.eaq = new pjy(10, 65, 140, 100);
    this.kyj.ycr = new pjy(10, 325, 140, 100);
    this.kyj.uqt = new pjy(10, 195, 140, 100);
    this.kyj.rly = new pjy(770, 320, 160, 125);
    this.kyj.fontSize = 16;
    this.rtp.win = {
        quz: new pjy(160, 30, 800, 600),
        fontSize: 16,
        huy: 40,
        tmt: 20,
        lineWidth: 1,
        tus: new pjy(),
        ypx: new pjy(0, 530, 800, 40),
        ssn: [new pjy(111, 25, 180, 20), new pjy(111, 95, 180, 20), new pjy(111, 165, 180, 20), new pjy(111, 235, 180, 20), new pjy(111, 305, 180, 20), new pjy(111, 375, 180, 20), new pjy(111, 445, 180, 20), new pjy(506, 25, 180, 20), new pjy(506, 95, 180, 20), new pjy(506, 165, 180, 20), new pjy(506, 235, 180, 20), new pjy(506, 305, 180, 20), new pjy(506, 375, 180, 20), new pjy(506, 445, 180, 20)],
        ejr: [new pjy(111, 46, 278, 34), new pjy(111, 116, 278, 34), new pjy(111, 186, 278, 34), new pjy(111, 256, 278, 34), new pjy(111, 326, 278, 34), new pjy(111, 396, 278, 34), new pjy(111, 466, 278, 34), new pjy(506, 46, 278, 34), new pjy(506, 116, 278, 34), new pjy(506, 186, 278, 34), new pjy(506, 256, 278, 34), new pjy(506, 326, 278, 34), new pjy(506, 396, 278, 34), new pjy(506, 466, 278, 34)]
    }
}
iyv.prototype = new zmn;

function yuk() {
    this.aiq.hly = 125;
    this.aiq.tgz = 175;
    this.aiq.jlk = false;
    this.rpc = new pjy(20, 305, 128, 205);
    this.xxe = new pjy(176, 305, 128, 205);
    this.cgp = new pjy(333, 305, 128, 205);
    this.utf = new pjy(490, 305, 128, 205);
    this.oww = new pjy(646, 305, 128, 205);
    this.mgi.quz = new pjy(352, 40, 420, 250);
    this.mgi.fontSize = 20;
    this.mgi.ilp = 6;
    this.mgi.qwc = 3;
    this.lqw.quz = new pjy(358, 82, 408, 155);
    this.lqw.fontSize = 40;
    this.lqw.huy = 40;
    this.lqw.dav = 40;
    this.lqw.hkg = -40;
    this.rna = {
        quz: new pjy(20, 150, 315, 80),
        fontSize: 14,
        tyn: [new pjy(0, 6, 52, 56), new pjy(60, 6, 52, 56), new pjy(120, 6, 52, 56), new pjy(180, 6, 52, 56)]
    };
    this.yiz = {
        quz: new pjy(40, 40, 200, 112)
    };
    this.vjn = {
        quz: new pjy(20, 240, 230, 22),
        fontSize: 18
    };
    this.kyj.aiq = {
        quz: new pjy(19, 296, 430, 176),
        hly: 125,
        tgz: 175,
        scp: 30,
    };
    this.kyj.lqw = {
        quz: new pjy(358, 120, 408, 155),
        fontSize: 40,
        huy: 40,
        scp: 0,
        dav: 40,
        hkg: -40,
        ilp: 0,
        six: 2
    };
    this.kyj.xak = {
        quz: new pjy(45, 175, 95, 55),
        hly: 125,
        tgz: 175,
        tll: 19,
        mnr: 54
    };
    this.kyj.eqh = {
        bmr: 26,
        zmo: 0,
        scp: 0,
        rkz: 0,
        nuk: 0,
        dym: 16,
        vth: 8,
        qwc: 4
    };
    this.kyj.rna = {
        quz: new pjy(358, 47, 408, 75),
        fontSize: 14,
        tyn: [new pjy(25, 0, 52, 56), new pjy(127, 0, 52, 56), new pjy(229, 0, 52, 56), new pjy(331, 0, 52, 56)]
    };
    this.kyj.jrn = new pjy(810, 455, 140, 100);
    this.kyj.eaq = new pjy(810, 65, 140, 100);
    this.kyj.ycr = new pjy(810, 325, 140, 100);
    this.kyj.uqt = new pjy(810, 195, 140, 100);
    this.kyj.rly = new pjy(610, 320, 160, 125);
    this.kyj.fontSize = 16;
    this.rtp.win = {
        quz: new pjy(0, 30, 800, 600),
        fontSize: 16,
        huy: 40,
        tmt: 20,
        lineWidth: 1,
        tus: new pjy(),
        ypx: new pjy(0, 530, 800, 40),
        ssn: [new pjy(111, 25, 180, 20), new pjy(111, 95, 180, 20), new pjy(111, 165, 180, 20), new pjy(111, 235, 180, 20), new pjy(111, 305, 180, 20), new pjy(111, 375, 180, 20), new pjy(111, 445, 180, 20), new pjy(506, 25, 180, 20), new pjy(506, 95, 180, 20), new pjy(506, 165, 180, 20), new pjy(506, 235, 180, 20), new pjy(506, 305, 180, 20), new pjy(506, 375, 180, 20), new pjy(506, 445, 180, 20)],
        ejr: [new pjy(111, 46, 278, 34), new pjy(111, 116, 278, 34), new pjy(111, 186, 278, 34), new pjy(111, 256, 278, 34), new pjy(111, 326, 278, 34), new pjy(111, 396, 278, 34), new pjy(111, 466, 278, 34), new pjy(506, 46, 278, 34), new pjy(506, 116, 278, 34), new pjy(506, 186, 278, 34), new pjy(506, 256, 278, 34), new pjy(506, 326, 278, 34), new pjy(506, 396, 278, 34), new pjy(506, 466, 278, 34)]
    }
}
yuk.prototype = new ved;
var ysp = {
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
    twr: {
        ozc: 0,
        gkc: 1,
        kbf: 2,
        fhl: 3,
        hkb: 4,
        qdd: 5,
        aaa: 10,
        zze: 11,
        ijp: 12,
        ozi: 13,
        mfv: 14,
        ucv: 15,
        dqo: 16
    },
    os: {
        nkk: 0,
        hsh: 1,
        rhv: 2,
        jum: 3,
        vuk: 4
    },
    gof: {
        scj: 1,
        cdq: 3,
        dvx: 4,
        dih: 5,
        bve: 7,
        zcs: 8,
        izn: 11,
        qvh: 13,
        neo: 14,
        fzk: 6,
        ohj: 9,
        qqq: 10
    },
    xap: {
        rcs: 1,
        bnv: 2,
        lnn: 4,
        ksq: 8,
        njd: 16,
        thy: 32
    },
    ezq: {
        tkf: 1,
        ymr: 2,
        yvv: 3,
        zbg: 4,
        bgq: 5,
        nad: 6,
        bvy: 7,
        rja: 94,
        spd: 95,
        sfa: 96,
        bjy: 97,
        gzn: 98,
        hsv: 99,
        roulette: {
            hrr: 2,
            qhb: 9,
            tii: 10
        }
    },
    ui: {
        eev: "minimal",
        yju: "modern",
        dvx: "classic"
    },
    iax: {
        oct: "auto",
        uuz: "left",
        xcc: "right"
    },
    auj: {
        tfo: 0,
        ovq: 4
    },
    ulw: {
        brc: {
            sxy: "ji",
            jho: "jv",
            ujv: "jh"
        }
    },
    uhg: {
        spf: {
            eyr: 1,
            tvw: 2
        },
        uor: {
            dgn: 1,
            dkw: 2,
            hoc: 3
        }
    },
    zaw: {
        wef: 0,
        omp: 1
    }
};
ysp.kmu = (function() {
    var g = ["moz", "webkit", "ms", "o"],
        f = 0,
        d = 0;
    var b = document.createElement("canvas");
    if (!(b.getContext && b.getContext("2d"))) {
        f += ysp.xap.rcs
    }
    if (!(window.WebSocket || window.MozWebSocket)) {
        f += ysp.xap.bnv
    }
    try {
        if (!(window.localStorage && window.sessionStorage)) {
            f += ysp.xap.lnn
        } else {
            sessionStorage.dummy = true;
            sessionStorage.removeItem("dummy")
        }
    } catch (c) {
        f += ysp.xap.lnn
    }
    if (!(b.style.MozTransform != undefined || b.style.WebkitTransform != undefined || b.style.OTransform != undefined || b.style.msTransform != undefined)) {
        f += ysp.xap.ksq
    }
    try {
        if (window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
            window.AudioContext = webkitAudioContext;
            if (!AudioContext.prototype.hasOwnProperty("createGain")) {
                AudioContext.prototype.createGain = AudioContext.prototype.createGainNode
            }
            AudioContext.prototype.skr = AudioContext.prototype.createBufferSource;
            AudioContext.prototype.createBufferSource = function() {
                var e = this.skr();
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
            window.rke = window.requestAnimationFrame;
            window.ebn = window.cancelAnimationFrame || window.cancelRequestAnimationFrame
        }
        for (var a = 0; a < g.length && !window.rke; ++a) {
            window.rke = window[g[a] + "RequestAnimationFrame"];
            window.ebn = window[g[a] + "CancelAnimationFrame"] || window[g[a] + "CancelRequestAnimationFrame"]
        }
        if (!window.rke || !window.ebn) {
            window.rke = function(l, i) {
                var e = new Date().getTime();
                var j = Math.max(0, 16 - (e - d));
                var k = window.setTimeout(function() {
                    l(e + j)
                }, j);
                d = e + j;
                return k
            }
        }
        if (!window.ebn) {
            window.ebn = function(e) {
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
        console.error(c.ezq)
    }
    return f
})();

function zmd() {
    var a = {};
    this.gtr = 1;
    this.sbz = 1;
    this.ayh = 0.6;
    this.klj = 0.4;
    this.bih = function() {};
    this.qoy = function(b, c) {
        a[b] = c
    };
    this.awj = function(b) {
        if (a[b]) {
            return a[b]
        } else {
            return this.gtr
        }
    }
}

function afc() {
    this.audio = {
        okl: 65,
        lgh: -1,
        value: "A",
        oqv: null
    };
    this.qgo = {
        okl: 70,
        lgh: 122,
        value: "F",
        oqv: "F11"
    };
    this.xak = {
        okl: 72,
        lgh: -1,
        value: "H",
        oqv: null
    };
    this.kdz = {
        okl: 83,
        lgh: -1,
        value: "S",
        oqv: null
    };
    this.xnp = {
        okl: 68,
        lgh: -1,
        value: "D",
        oqv: null
    };
    this.ok = {
        okl: 13,
        lgh: -1,
        value: "OK",
        oqv: null
    };
    this.uwf = [this.audio, this.qgo, this.xak, this.kdz, this.xnp, this.ok]
}

function ihw() {
    var o = this;
    this.qww = false;
    this.xas = null;
    this.ezw = false;
    this.roc = false;
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
    this.bih = function() {
        this.lfh();
        this.kvf();
        this.ezw = false;
        this.roc = false
    };
    this.lfh = function() {
        try {
            if (webAudioEngine == null) {
                webAudioEngine = new AudioContext()
            }
            this.xas = webAudioEngine.createGain();
            this.xas.connect(webAudioEngine.destination);
            this.qww = true
        } catch (p) {
            this.qww = false
        }
    };
    this.kvf = function() {
        m = ysp.ekr.bnr()
    };
    this.gxo = function(p) {
        l = p
    };
    this.maz = function(p) {
        c = p
    };
    this.vem = function(t, s, p, q) {
        var r = new cwq(t);
        r.bih(this.qww, s, p, l.awj(t));
        i[t] = r;
        k.push(r);
        d.push({
            eeg: r,
            rpm: q,
            car: o.sws,
            hmw: m
        })
    };
    this.bsf = function(r, q) {
        var p = new Image();
        f[r] = p;
        d.push({
            eeg: p,
            rpm: q,
            car: null
        })
    };
    this.ofq = function(q, p) {
        d.unshift({
            eeg: null,
            rpm: q,
            car: o.ujm,
            dfi: p
        })
    };
    this.xja = function() {
        n = true;
        g = d.length;
        b = 0;
        while (d.length > 0) {
            o.gak(d.shift())
        }
    };
    this.start = function() {
        if (!o.ezw) {
            return
        }
        o.ezw = false;
        n = false;
        g = d.length;
        b = 0;
        j = 1;
        for (var q = 0; q < j && d.length > 0; q++) {
            a.push(d.shift())
        }
        for (var p = 0; p < a.length; p++) {
            o.gak(a.shift())
        }
    };
    this.bxd = function() {
        b++;
        if (o.ete()) {
            o.ezw = true;
            ysp.hpw.ixb()
        }
    };
    this.rcr = function() {
        o.tya()
    };
    this.hnu = function() {
        o.roc = true;
        o.tya()
    };
    this.tya = function() {
        b++;
        o.qgr();
        if (o.ete()) {
            o.tml()
        } else {
            o.ivy()
        }
    };
    this.qgr = function() {
        var p = ysp.hpw.llt.qmc("loading");
        e = Math.round(100 * b / g);
        if (e < 100) {
            if (p) {
                p.cul(e)
            }
        }
    };
    this.tml = function() {
        var q = ysp.hpw.llt.qmc("loading");
        if (o.roc) {
            ysp.hpw.oyk(ysp.hpw.language.pqz);
            var p = confirm(ysp.hpw.language.oyw);
            if (p == true) {
                ysp.hpw.khv = false;
                o.ixm();
                ysp.hpw.mcw()
            } else {
                if (ysp.hpw.fok) {
                    ysp.hpw.fok.szq({
                        sender: ysp.hpw.xkd,
                        lang: sessionStorage.sessionValue1.toUpperCase(),
                        data: {
                            success: false
                        }
                    })
                }
                setTimeout(ysp.hpw.ygw, 1000)
            }
        } else {
            if (!ysp.hpw.psw) {
                e = 100;
                if (q) {
                    q.cul(e)
                }
                if (c === true) {
                    q.aow()
                } else {
                    setTimeout(ysp.hpw.mcw, 200)
                }
            }
        }
    };
    this.nlp = function() {
        return e
    };
    this.ivy = function() {
        if (d.length > 0) {
            a.push(d.shift());
            if (j === 1 && (a[0].eeg instanceof Image || a[0].eeg instanceof cwq)) {
                j = 30;
                for (var p = 0; p < j && d.length > 0; p++) {
                    a.push(d.shift())
                }
            }
        } else {}
        if (a.length > 0) {
            o.gak(a.shift())
        }
    };
    this.ete = function() {
        return (g > 0 && b == g)
    };
    this.gak = function(p) {
        if (p.eeg instanceof Image) {
            if (n === true) {
                this.ssx(p.eeg, p.rpm)
            } else {
                this.yvb(p.eeg, p.rpm)
            }
        } else {
            if (p.eeg instanceof cwq) {
                this.iaj(p.eeg, p.rpm, p.car, p.hmw)
            } else {
                this.qus(p.rpm, p.dfi, p.car)
            }
        }
    };
    this.ssx = function(q, p) {
        q.onload = function() {
            ysp.hpw.wba.bxd()
        };
        q.onerror = function() {
            console.error("can not load image " + p)
        };
        q.src = p + "?v=" + ysp.hpw.dxa
    };
    this.yvb = function(q, p) {
        q.onload = function() {
            ysp.hpw.wba.rcr()
        };
        q.onerror = function() {
            console.error("can not load image " + p);
            ysp.hpw.oyk(ysp.hpw.language.fse);
            setTimeout(ysp.hpw.ygw, 3000)
        };
        q.src = p + "?v=" + ysp.hpw.dxa
    };
    this.iaj = function(q, r, s, p) {
        q.load(r, s, p)
    };
    this.qus = function(s, p, t) {
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
            ysp.hpw.oyk(ysp.hpw.language.fse);
            setTimeout(ysp.hpw.ygw, 3000)
        };
        try {
            q.send()
        } catch (r) {
            console.error("can not load from " + s + p);
            ysp.hpw.oyk(ysp.hpw.language.fse);
            setTimeout(ysp.hpw.ygw, 3000)
        }
    };
    this.sws = function(q, p) {
        i[q].utl = p
    };
    this.ujm = function(r, q) {
        var p = new Image();
        p.onload = function() {
            o.udf(p, q.data)
        };
        p.onerror = function() {
            console.error("can not load image " + r + q.src);
            ysp.hpw.oyk(ysp.hpw.language.fse);
            setTimeout(ysp.hpw.ygw, 3000)
        };
        p.src = r + q.src + "?v=" + ysp.hpw.dxa
    };
    this.udf = function(r, u) {
        var s = null,
            q = null;
        for (var t = 0, p = u.length; t < p; t++) {
            s = document.createElement("canvas");
            s.width = u[t].rect.w;
            s.height = u[t].rect.h;
            q = s.getContext("2d");
            q.drawImage(r, u[t].rect.x, u[t].rect.y, u[t].rect.w, u[t].rect.h, 0, 0, u[t].rect.w, u[t].rect.h);
            o.gnk(u[t].id, s)
        }
        ysp.hpw.wba.rcr()
    };
    this.fzp = function(p) {
        if (i && i[p]) {
            return i[p]
        } else {}
        return null
    };
    this.gnk = function(q, p) {
        if (p && !f[q]) {
            f[q] = p
        } else {}
        return null
    };
    this.vjf = function(p) {
        if (f[p]) {
            return f[p]
        } else {}
        return null
    };
    this.ghv = function(p) {
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
    this.uwd = function(p) {
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
    this.dyw = function(q, p) {
        if (i && i[q]) {
            i[q].play(p)
        } else {}
    };
    this.ntp = function(p) {
        if (i && i[p]) {
            i[p].stop()
        } else {}
    };
    this.mwn = function(q, p) {
        if (i && i[q]) {
            i[q].pkj(p)
        } else {}
    };
    this.trm = function(s, q, r, p) {
        p = (p != null && p === true);
        if (i && i[s]) {
            i[s].ujp(l.awj(s) * q, r, p)
        }
    };
    this.qcm = function(p) {
        if (i && i[p]) {
            return i[p].nbv()
        }
        return 0
    };
    this.bip = function(p) {
        if (this.qww) {
            this.xas.gain.setValueAtTime(p, webAudioEngine.currentTime)
        }
    };
    this.adr = function(q) {
        if (this.qww) {
            this.xas.gain.setValueAtTime((q) ? 0 : 1, webAudioEngine.currentTime)
        } else {
            if (k) {
                for (var p = 0; p < k.length; p++) {
                    k[p].pkj(q)
                }
            }
        }
    };
    this.ixm = function() {
        if (k) {
            for (var p = 0; p < k.length; p++) {
                k[p].clear()
            }
        }
        k = null;
        i = null
    }
}

function irf() {
    this.bal = {};
    this.lej = {};
    this.glf = [];
    this.bih = function() {
        this.bal = {};
        this.lej = {};
        this.glf = []
    };
    this.vpa = function(b) {
        this.bal[b] = b
    };
    this.zth = function(f, e, d) {
        this.lej[f] = e;
        this.lej[f].cst = [];
        if (d && this.bal) {
            for (var c = 0, b = d.length; c < b; c++) {
                if (this.bal[d[c]]) {
                    this.lej[f].cst.push(d[c])
                } else {}
            }
        }
        this.glf.push(this.lej[f])
    };
    this.dla = function() {
        var c = [];
        for (var d = 0, b = this.glf.length; d < b; d++) {
            if (this.glf[d] != null) {
                c.push(this.glf[d])
            }
        }
        return c
    };
    this.qmc = function(b) {
        if (this.lej && this.lej[b]) {
            return this.lej[b]
        }
        return null
    };
    this.fbh = function(g) {
        if (this.bal && this.bal[g]) {
            var d = [];
            for (var f = 0, b = this.glf.length; f < b; f++) {
                for (var e = 0, c = this.glf[f].cst.length; e < c; e++) {
                    if (this.glf[f].cst[e] == g) {
                        d.push(this.glf[f])
                    }
                }
            }
            return d
        }
        return []
    };
    this.zbm = function() {
        return this.bal
    };
    this.ufg = function(e) {
        var d = -1;
        if (this.lej && this.lej[e]) {
            for (var c = 0, b = this.glf.length; c < b; c++) {
                if (this.glf[c] == this.lej[e]) {
                    d = c;
                    this.lej[e] = null
                }
            }
        }
        if (d >= 0) {
            this.glf.splice(d, 1)
        }
    };
    this.gid = function(f) {
        if (this.bal && this.bal[f]) {
            this.bal[f] = null;
            for (var e = 0, b = this.glf.length; e < b; e++) {
                for (var d = 0, c = this.glf[e].cst.length; d < c; d++) {
                    if (this.glf[e].cst[d] == f) {
                        this.glf[e].cst.splice(d, 1)
                    }
                }
            }
        }
    };
    this.tpi = function(e, d, c, b) {
        return a(this.qmc(e), d, c, b)
    };
    this.xoh = function(f, d, c) {
        for (var e = 0, b = this.glf.length; e < b; e++) {
            a(this.glf[e], f, d, c)
        }
    };
    this.nhs = function(k, l, f, e) {
        if (this.bal && this.bal[k]) {
            for (var g = 0, b = this.glf.length; g < b; g++) {
                for (var d = 0, c = this.glf[g].cst.length; d < c; d++) {
                    if (this.glf[g].cst[d] == k) {
                        a(this.glf[g], l, f, e)
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

function cwq(b) {
    var a = this;
    this.gol = null;
    this.loop = false;
    this.muted = false;
    this.volume = 1;
    this.id = b;
    this.fhj = false;
    this.utl = null;
    this.gom = null;
    this.iaw = 0;
    this.jaz = 0;
    this.vvh = 0;
    this.olk = 0;
    this.exp = 30000;
    this.cvm = "";
    this.kyw = "";
    this.ruv = "";
    this.fct = null;
    this.rpa = 1;
    this.tao = 0;
    this.lmi = -1;
    this.nen = 0;
    this.eov = 0;
    this.mxj = false;
    this.bih = function(c, f, d, e) {
        this.fhj = c;
        if (e) {
            this.rpa = e;
            this.volume = e
        }
        if (f) {
            this.gol = f
        }
        if (d) {
            this.loop = d
        }
    };
    this.play = function(c) {
        if (typeof c == "undefined") {
            c = 0
        }
        if (this.fhj) {
            clearTimeout(this.lmi);
            if (this.utl) {
                this.volume = (this.muted === true) ? 0 : ysp.lct.value40 * this.rpa;
                this.mxj = false;
                this.gom = webAudioEngine.createBufferSource();
                this.gom.buffer = this.utl;
                this.gom.loop = this.loop;
                this.iaw = webAudioEngine.createGain();
                this.iaw.gain.setValueAtTime(this.volume, webAudioEngine.currentTime);
                this.gom.connect(this.iaw);
                this.iaw.connect(ysp.hpw.wba.xas);
                this.gom.start(0, c);
                this.tao = webAudioEngine.currentTime;
                if (this.gol) {
                    this.jaz = setTimeout(a.gol, a.utl.duration * 1000)
                }
            }
        } else {
            if (this.gom) {
                if (this.loop) {
                    if (ysp.ekr.kxi != ysp.twr.hkb && ysp.ekr.kxi != ysp.twr.mfv) {
                        this.vvh = setInterval(a.uuw, a.gom.duration * 1000)
                    }
                }
                this.gom.currentTime = 0;
                this.gom.play()
            }
        }
    };
    this.uuw = function() {
        if (!a.gom.paused || (ysp.ekr.kxi != ysp.twr.kbf && ysp.ekr.kxi != ysp.twr.ijp)) {
            a.gom.currentTime = 0
        }
    };
    this.stop = function() {
        if (a) {
            if (a.fhj) {
                a.tao = 0;
                if (a.gom) {
                    a.gom.stop(0);
                    a.gom = null
                }
                clearTimeout(a.jaz);
                if (a.lmi >= 0) {
                    clearTimeout(a.lmi);
                    a.lmi = -1
                }
            } else {
                if (a.gom) {
                    a.gom.currentTime = 0;
                    a.gom.pause();
                    clearInterval(a.vvh);
                    if (a.lmi >= 0) {
                        clearTimeout(a.lmi);
                        a.lmi = -1
                    }
                }
            }
        }
    };
    this.load = function(e, c, d) {
        this.cvm = d[0];
        if (d.length >= 2) {
            this.kyw = d[1];
            this.ruv = e;
            this.fct = c
        }
        e += this.cvm + "?v=" + ysp.hpw.dxa;
        if (this.fhj) {
            this.opp(e, c)
        } else {
            this.hnd(e)
        }
    };
    this.hqx = function() {
        if (this.fhj) {
            this.opp(this.ruv + this.kyw + "?v=" + ysp.hpw.dxa, this.fct)
        }
    };
    this.hnd = function(c) {
        this.gom = new Audio();
        this.olk = setTimeout(function() {
            console.error("can not load audio " + c);
            ysp.hpw.wba.hnu()
        }, this.exp);
        this.gom.addEventListener("canplaythrough", function() {
            this.removeEventListener("canplaythrough", arguments.callee, false);
            clearTimeout(a.olk);
            ysp.hpw.wba.rcr();
            a.pct()
        }, false);
        this.gom.addEventListener("error", function() {
            clearTimeout(a.olk);
            console.error("can not load audio " + c);
            ysp.hpw.wba.hnu()
        }, false);
        this.gom.volume = ysp.lct.value40 * this.volume;
        this.gom.src = c;
        this.gom.load()
    };
    this.opp = function(f, g) {
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
                ysp.hpw.wba.rcr()
            }, function() {
                a.bop("can not decode audio ", f)
            })
        };
        c.onerror = function() {
            a.bop("can not load audio ", f)
        };
        try {
            c.send()
        } catch (d) {
            a.bop("can not load audio from ", f)
        }
    };
    this.bop = function(d, c) {
        console.error(d + c);
        if (a.kyw != "" && c.indexOf(a.kyw) < 0) {
            a.hqx()
        } else {
            ysp.hpw.wba.hnu()
        }
    };
    this.rmq = function(c) {
        this.gol = c;
        this.pct()
    };
    this.pct = function() {
        if (!this.fhj) {
            if (this.gol) {
                if (this.gom) {
                    this.gom.addEventListener("ended", function() {
                        a.gol()
                    }, false)
                }
            }
            if (ysp.ekr.kxi == ysp.twr.hkb || ysp.ekr.kxi == ysp.twr.mfv) {
                if (this.loop) {
                    if (this.gom) {
                        this.gom.addEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.tpj = function() {
        if (!this.pjh) {
            if (this.gol) {
                if (this.gom) {
                    this.gom.removeEventListener("ended", function() {
                        a.gol()
                    }, false)
                }
            }
            if (ysp.ekr.kxi == ysp.twr.hkb || ysp.ekr.kxi == ysp.twr.mfv) {
                if (this.loop) {
                    if (this.gom) {
                        this.gom.removeEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.ujp = function(d, e, c) {
        if (this.fhj === true && this.iaw) {
            this.volume = (this.muted === true) ? 0 : ysp.lct.value40 * d * this.rpa;
            if (e > 0) {
                this.iaw.gain.linearRampToValueAtTime(this.volume, webAudioEngine.currentTime + (e / 1000))
            } else {
                this.iaw.gain.setValueAtTime(this.volume, webAudioEngine.currentTime)
            }
            if (c === true) {
                this.lmi = setTimeout(this.stop, e)
            }
        } else {
            if (!this.fhj && c === true) {
                this.lmi = setTimeout(this.stop, e)
            }
        }
    };
    this.pkj = function(c) {
        this.muted = c;
        if (!this.fhj) {
            if (this.gom && this.gom.readyState > 0) {
                this.gom.muted = c
            }
        } else {
            if (this.iaw) {
                this.iaw.gain.linearRampToValueAtTime((this.muted === true) ? 0 : ysp.lct.value40 * this.volume, webAudioEngine.currentTime)
            }
        }
    };
    this.clear = function() {
        if (this.fhj) {
            if (this.gom) {
                this.gom.stop(0);
                clearTimeout(this.jaz);
                this.gom = null
            }
        } else {
            if (this.gom && this.gom.readyState > 0) {
                this.gom.currentTime = 0;
                this.gom.pause();
                if (this.gol) {
                    this.tpj(this.gol)
                }
                this.gom = null
            }
        }
    };
    this.nbv = function() {
        if (this.fhj && this.tao > 0) {
            return (webAudioEngine.currentTime - this.tao) % this.utl.duration
        }
        return 0
    }
}

function bvx() {
    var a = null;
    this.kcc = "";
    var b = null;
    this.connect = function(c) {
        a = this;
        this.kcc = c;
        b = new WebSocket(this.kcc);
        b.onopen = function(d) {
            a.hcs(d)
        };
        b.onclose = function(d) {
            a.opk(d)
        };
        b.onmessage = function(d) {
            a.itb(d)
        };
        b.onerror = function(d) {
            a.wyj(d)
        }
    };
    this.wdh = function(c) {};
    this.htf = function(c) {
        b.send(c)
    };
    this.hcs = function(c) {
        this.htf("A/u25vlt")
    };
    this.opk = function(c) {};
    this.itb = function(c) {
        this.wdh(c.data)
    };
    this.wyj = function(c) {}
}

function ias() {
    var b = null;
    this.rlv = null;
    this.kmu = 0;
    this.uat = -1;
    this.ezq = -1;
    this.oku = -1;
    this.hgy = 0;
    this.kcc = "";
    this.lia = "";
    this.yvr = "";
    this.fog = "";
    this.xkd = "";
    this.dxa = "";
    this.epv = "";
    this.tsh = "";
    this.udu = [];
    this.jzu = [];
    this.zdc = [];
    this.pku = [];
    var g = false;
    var a = false;
    var d = false;
    var f = false;
    var c = null;
    var e = 1;
    this.bih = function(i) {
        this.rlv = i;
        b = this;
        g = false;
        a = false;
        d = false;
        f = false;
        c = new WebSocket(this.kcc);
        c.onopen = function(j) {
            b.hcs(j)
        };
        c.onclose = function(j) {
            b.opk(j)
        };
        c.onmessage = function(j) {
            b.itb(j)
        };
        c.onerror = function(j) {
            b.wyj(j)
        }
    };
    this.ekc = function(i) {
        var j = parseInt(i.charAt(this.hgy), 16);
        this.hgy++;
        return j
    };
    this.tba = function(i) {
        var k = 0;
        var j = i.charAt(this.hgy);
        j += i.charAt(this.hgy + 1);
        this.hgy += 2;
        k = parseInt(j, 16);
        return k
    };
    this.cbd = function(m) {
        var j = this.ora(m);
        var n = [];
        for (var k = 0; k < j; k++) {
            n[k] = parseInt(m.charAt(this.hgy), 16);
            this.hgy += 1
        }
        return n
    };
    this.ora = function(n) {
        var m = 0;
        var j = parseInt(n.charAt(this.hgy), 16);
        this.hgy++;
        var o = "";
        for (var k = 0; k < j; k++) {
            o += n.charAt(this.hgy);
            this.hgy += 1
        }
        m = parseInt(o, 16);
        return m
    };
    this.fgu = function(i) {
        var j = "";
        if (this.hgy < i.length) {
            j = i.substring(this.hgy, i.length)
        }
        return j
    };
    this.wdh = function(i) {};
    this.toy = function(o) {
        var u = o.substr(0, 2),
            l = o.substring(2),
            k = [],
            t = [],
            s = [],
            q = null;
        if (l && l.length > 0) {
            if (u === ysp.ulw.brc.sxy || u === ysp.ulw.brc.jho) {
                k = l.split("|");
                for (var p = 0, r = k.length; p < r; p++) {
                    t = k[p].split(":");
                    if (u === ysp.ulw.brc.sxy && t.length >= 3) {
                        if (t[2].toLowerCase() != "mystery") {
                            this.udu[p] = {
                                ofv: t[0],
                                value: Number(t[1]),
                                wrw: t[2]
                            };
                            if (t.length >= 5) {
                                this.udu[p].ljr = t[3];
                                this.udu[p].sap = t[4]
                            }
                        }
                    } else {
                        if (u === ysp.ulw.brc.jho && t.length >= 2) {
                            for (var p = 0, r = this.udu.length; p < r; p++) {
                                if (this.udu[p].ofv === t[0]) {
                                    this.udu[p].value = Number(t[1])
                                }
                            }
                        }
                    }
                }
                if (u === ysp.ulw.brc.sxy) {
                    s = [];
                    for (var p = 0, r = this.udu.length; p < r; p++) {
                        s.push({
                            ofv: this.udu[p].ofv,
                            value: (Number)(this.udu[p].ofv.split("_")[1])
                        })
                    }
                    s.sort(function(j, i) {
                        return j.value - i.value
                    });
                    for (var p = 0, r = this.udu.length; p < r; p++) {
                        for (var n = 0, m = s.length; n < m; n++) {
                            if (this.udu[p].ofv == s[n].ofv) {
                                this.udu[p].quz = n;
                                break
                            }
                        }
                    }
                } else {
                    if (u === ysp.ulw.brc.jho) {
                        this.rlv.szp(this.udu)
                    }
                }
            } else {
                if (u === ysp.ulw.brc.ujv) {
                    t = l.split(":");
                    if (t.length >= 3) {
                        q = {
                            ofv: t[0],
                            value: Number(t[1]),
                            lmm: Number(t[2])
                        };
                        if (t.length >= 5) {
                            q.lia = t[3];
                            q.edi = t[4]
                        }
                        this.rlv.tkg(q)
                    }
                }
            }
        }
    };
    this.close = function() {
        g = true;
        if (c.readyState >= 2) {
            b.rlv.xyf.uhq()
        } else {
            b.htf("A/u260");
            if (ysp.lct.value66 > 0) {
                setTimeout(b.hpo, ysp.lct.value66)
            }
        }
    };
    this.rho = function(i) {
        if (this.rlv.xyf.dpf) {
            setTimeout(function() {
                window.location.reload()
            }, i)
        } else {
            this.rlv.xyf.mdc(e);
            setTimeout(function() {
                if (e < ysp.lct.value46) {
                    b.rlv.xyf.connect();
                    e++
                } else {
                    b.rlv.xyf.uze()
                }
            }, i)
        }
    };
    this.wqk = function() {
        return g
    };
    this.rkb = function() {
        g = true;
        d = true;
        this.htf("A/u260");
        if (ysp.lct.value66 > 0) {
            setTimeout(this.hpo, ysp.lct.value66)
        }
    };
    this.bls = function() {
        g = true;
        f = true;
        this.htf("A/u260");
        if (ysp.lct.value66 > 0) {
            setTimeout(this.hpo, ysp.lct.value66)
        }
    };
    this.hcs = function(i) {
        var j = -(new Date().getTimezoneOffset() / 60),
            m = window.navigator.userLanguage || window.navigator.language,
            l = (ysp.hpw) ? ysp.ekr.kxi + "|" + ysp.hpw.odx + "|" + j + "|" + m : "",
            k = (ysp.hpw && ysp.hpw.nsd > 0) ? "," + ysp.hpw.nsd : "";
        a = false;
        this.rlv.irx();
        this.htf("A/u25" + this.lia + "," + this.yvr + "," + this.fog + "," + this.xkd + "," + this.dxa + "," + this.epv + "," + this.tsh + "," + l + k)
    };
    this.opk = function(i) {
        if (a) {
            return
        }
        a = true;
        if (!g) {
            if (ysp.ekr.kxi == ysp.twr.ozc || ysp.ekr.kxi == ysp.twr.aaa) {
                setTimeout(b.rnp, 500)
            } else {
                this.rlv.jft()
            }
        } else {
            if (d) {
                if (ysp.lct.value13 == true) {
                    this.rlv.xyf.mbo()
                } else {
                    this.rlv.xyf.tvp()
                }
            } else {
                if (f) {
                    this.rlv.xyf.nmr()
                } else {
                    this.rlv.xyf.ygw()
                }
            }
        }
    };
    this.itb = function(i) {
        this.wdh(i.data)
    };
    this.wyj = function(i) {};
    this.htf = function(i) {
        if (c.readyState >= 2) {
            this.opk()
        }
        this.kmu = 0;
		var tmpPar=':::{"gameData":"'+i+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"MultiWinAM"}';i=tmpPar;
        c.send(i)
    };
    this.rnp = function() {
        b.rlv.jft()
    };
    this.hpo = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.opk()
    }
}

function nqk() {
    this.xyf = null;
    this.dap = null;
    this.kcc = "";
    this.lia = "";
    this.yvr = "";
    this.fog = "";
    this.xkd = "";
    this.epv = "";
    this.tsh = "";
    this.irx = function() {};
    this.itb = function(a) {
        this.xyf.enq(a)
    };
    this.xnw = function() {};
    this.jft = function() {
        if (sessionStorage.sessionActive) {
            return
        }
        if (this.xyf != null && !this.dap.wqk()) {
            this.xyf.vzq(this.xyf.language.hxh, true)
        }
    };
    this.wyj = function(a) {
        if (this.dap.kmu == 1 && a.toLowerCase().indexOf("active") == 0) {
            sessionStorage.sessionActive = true
        }
        if (this.xyf != null) {
            if (this.xyf.fok) {
                this.xyf.fok.szq({
                    sender: this.xyf.xkd,
                    lang: sessionStorage.sessionValue1.toUpperCase(),
                    data: {
                        success: false
                    }
                })
            }
            this.xyf.vzq(a, true)
        }
    };
    this.rho = function(a) {
        this.dap.rho(a)
    };
    this.aar = function() {
        this.xyf.bcb(this.dap.lmm)
    };
    this.szp = function(a) {
        this.xyf.szp(a)
    };
    this.tkg = function(a) {
        this.xyf.tkg(a)
    };
    this.ijv = function() {};
    this.jlc = function() {
        this.xyf.jlc()
    };
    this.cnt = function() {
        this.xyf.cnt()
    }
}

function wmj() {
    var b = null;
    this.xyf = null;
    this.kcc = "";
    this.lia = "";
    this.yvr = "";
    this.fog = "";
    this.xkd = "";
    this.dxa = " ";
    var c = null;
    var e = false;
    var a = false;
    var d = "StatsServer";
    this.osb = true;
    this.duk = false;
    this.akr = false;
    this.hgy = 0;
    this.vxs = 0;
    this.xdv = 0;
    this.icu = 0;
    this.zmr = 0;
    this.bih = function(f, g) {
        this.kcc = g;
        this.xyf = f;
        this.akr = false;
        return this
    };
    this.connect = function(g, j, i, k, f, l) {
        b = this;
        e = false;
        a = false;
        this.lia = j;
        this.yvr = i;
        this.fog = k;
        this.xkd = g;
        this.dxa = f;
        this.osb = true;
        this.duk = l;
        c = new WebSocket(this.kcc);
        c.onopen = function(m) {
            b.hcs(m)
        };
        c.onclose = function(m) {
            b.opk(m)
        };
        c.onmessage = function(m) {
            b.itb(m)
        };
        c.onerror = function(m) {
            b.wyj(m)
        }
    };
    this.ekc = function(f) {
        var g = parseInt(f.charAt(this.hgy), 16);
        this.hgy++;
        return g
    };
    this.ora = function(k) {
        var j = 0;
        var f = parseInt(k.charAt(this.hgy), 16);
        this.hgy++;
        var m = "";
        for (var g = 0; g < f; g++) {
            m += k.charAt(this.hgy);
            this.hgy += 1
        }
        j = parseInt(m, 16);
        return j
    };
    this.wdh = function(i) {
        var k = this.xyf.llt.qmc("stats");
        if (i != null && i != "null" && i) {
            if (i == "010101010101010") {
                this.ocp()
            } else {
                this.hgy = 0;
                this.oku = this.ekc(i);
                if (this.oku == 0) {
                    var j = [];
                    j[0] = this.ora(i);
                    j[1] = this.ora(i);
                    j[2] = this.ora(i);
                    j[3] = this.ora(i);
                    j[4] = this.ora(i);
                    j[5] = this.ora(i);
                    j[6] = this.ora(i);
                    if (ysp.lct.value36) {
                        this.xdv = j[0];
                        this.icu = j[1];
                        this.zmr = j[2]
                    } else {
                        if (ysp.lct.value37) {
                            var g = ysp.lct.value39;
                            var f = j[4];
                            f = (g <= f) ? (this.duk) ? 100 : g * 60000 : (g - f) * 60000;
                            this.vxs = j[3] * 60000;
                            this.icu = j[5];
                            this.zmr = j[6];
                            this.xyf.kpa(f);
                            if (!this.akr) {
                                this.akr = true;
                                this.xyf.kte(j[3] * 60000)
                            }
                            if (this.duk) {
                                this.close(false)
                            }
                        }
                    }
                    if (!this.duk) {
                        if (k) {
                            k.btn(this.xdv, this.icu, this.zmr, this.vxs)
                        }
                    }
                } else {
                    console.error("Statistic error: " + i);
                    if (!this.duk) {
                        if (k) {
                            k.btn(0, 0, 0, 0)
                        }
                    }
                }
            }
        } else {
            console.error("no statistic data")
        }
    };
    this.ocp = function() {
        this.htf("A/u270," + this.xkd)
    };
    this.htf = function(f) {
        if (c && !e) {
            this.kmu = 0;
            c.send(f)
        }
    };
    this.close = function(f) {
        this.osb = f;
        if (c && c.readyState >= 2) {
            if (this.xyf && this.osb) {
                this.xyf.osb()
            }
        } else {
            this.htf("A/u260");
            if (ysp.lct.value66 > 0) {
                setTimeout(this.hpo, ysp.lct.value66)
            }
        }
        e = true
    };
    this.hcs = function(f) {
        a = false;
        this.htf("A/u25" + this.lia + "," + this.yvr + "," + this.fog + "," + d + "," + this.dxa)
    };
    this.opk = function(f) {
        if (a) {
            return
        }
        a = true;
        if (!e) {} else {
            if (!this.duk) {
                if (this.xyf && this.osb) {
                    this.xyf.osb()
                }
            }
        }
    };
    this.itb = function(f) {
        this.wdh(f.data)
    };
    this.wyj = function(f) {};
    this.hpo = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.opk()
    }
}

function pjy(a, d, b, c) {
    this.x = a || 0;
    this.y = d || 0;
    this.width = b || 0;
    this.height = c || 0;
    this.imj = function() {
        return this.x + this.width
    };
    this.gha = function() {
        return this.y + this.height
    };
    this.ggm = function() {
        return this.x + this.width / 2
    };
    this.rhi = function() {
        return this.y + this.height / 2
    };
    this.dsy = function(e, f) {
        if (e >= this.x && e <= this.x + this.width && f >= this.y && f <= this.y + this.height) {
            return true
        }
        return false
    };
    this.emp = function(f, e) {
        this.x = Math.round(this.x * f);
        this.y = Math.round(this.y * e);
        this.width = Math.round(this.width * f);
        this.height = Math.round(this.height * e)
    }
}

function ngh() {
    this.kxi = -1;
    this.ado = -1;
    this.zwa = false;
    this.ool = false;
    this.myr = false;
    this.joy = false;
    this.xpl = false;
    this.sim = false;
    this.vml = false;
    this.xwe = true;
    this.ajx = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Ama_Android") >= 0) {
            this.zwa = true;
            this.myr = true;
            this.kxi = ysp.twr.kbf
        } else {
            if (a.indexOf("Edge") >= 0) {
                if (a.indexOf("Phone") >= 0) {
                    this.myr = true
                }
                this.kxi = ysp.twr.qdd
            } else {
                if (a.indexOf("Chrome") >= 0) {
                    if (a.indexOf("Android") >= 0) {
                        this.kxi = ysp.twr.ijp;
                        this.myr = true
                    } else {
                        this.kxi = ysp.twr.kbf
                    }
                } else {
                    if (a.indexOf("Safari") >= 0) {
                        if (a.indexOf("Mobile") >= 0 || this.kik()) {
                            if (a.indexOf("Android") >= 0) {
                                this.kxi = ysp.twr.dqo;
                                this.myr = true
                            } else {
                                this.kxi = ysp.twr.zze;
                                this.myr = true;
                                this.joy = (a.indexOf("OS 7_") < 0 && !(a.indexOf("OS 8_") >= 0 && a.indexOf("CriOS") >= 0));
                                this.xpl = (a.indexOf("CriOS") < 0 && a.indexOf("Coast") < 0);
                                this.sim = (a.indexOf("7.0 Mobile") >= 0)
                            }
                        } else {
                            this.kxi = ysp.twr.gkc
                        }
                    } else {
                        if (a.indexOf("Opera") >= 0) {
                            this.kxi = ysp.twr.fhl
                        } else {
                            if (a.indexOf("MSIE") >= 0 || a.indexOf("Trident/7") >= 0) {
                                if (a.indexOf("IEMobile/10") >= 0) {
                                    this.kxi = ysp.twr.ucv;
                                    this.myr = true
                                } else {
                                    if (window.innerHeight >= window.outerHeight) {
                                        this.kxi = ysp.twr.mfv;
                                        this.myr = true
                                    } else {
                                        if (a.indexOf("Trident/7") >= 0 && a.indexOf("Tablet PC") >= 0) {
                                            this.kxi = ysp.twr.mfv;
                                            this.myr = true
                                        } else {
                                            this.kxi = ysp.twr.hkb
                                        }
                                    }
                                }
                            } else {
                                if (a.indexOf("iPad") >= 0) {
                                    this.kxi = ysp.twr.zze;
                                    this.ool = true;
                                    this.myr = true
                                } else {
                                    if (a.indexOf("iPhone") >= 0) {
                                        this.kxi = ysp.twr.zze;
                                        this.ool = true;
                                        this.myr = true
                                    } else {
                                        if (a.indexOf("Android") >= 0) {
                                            this.kxi = ysp.twr.aaa;
                                            this.myr = true
                                        } else {
                                            this.kxi = ysp.twr.ozc
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
    this.wsk = function() {
        var a = navigator.language.split("-")[0];
        return a
    };
    this.ugp = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Win") >= 0) {
            this.ado = ysp.os.nkk;
            if (a.indexOf("NT 5.1") >= 0 || a.indexOf("NT 5.2") >= 0) {
                this.vml = true
            }
        } else {
            if (a.indexOf("iPhone") >= 0 || a.indexOf("iPad") >= 0 || (a.indexOf("Mac") >= 0 && this.kik())) {
                this.ado = ysp.os.jum
            } else {
                if (a.indexOf("Mac") >= 0) {
                    this.ado = ysp.os.rhv
                } else {
                    if (a.indexOf("Android") >= 0) {
                        this.ado = ysp.os.vuk;
                        if (a.indexOf("Android 4.0") >= 0 || a.indexOf("Android 4.1") >= 0 || a.indexOf("Android 4.2") >= 0 || a.indexOf("Android 4.3") >= 0) {
                            this.xwe = false
                        }
                    } else {
                        if (a.indexOf("Linux") >= 0) {
                            this.ado = ysp.os.hsh
                        }
                    }
                }
            }
        }
    };
    this.ltn = function() {
        return this.sim
    };
    this.gyz = function() {
        return (this.xpl && !this.sim)
    };
    this.luw = function() {
        return this.joy
    };
    this.lqn = function() {
        try {
            return window.self !== window.top
        } catch (a) {
            return true
        }
    };
    this.uxa = function() {
        return (document.documentElement.requestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullscreen)
    };
    this.kik = function() {
        if (("ontouchstart" in window) || window.ekf) {
            return true
        }
        return false
    };
    this.xyt = function() {
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
    this.swr = function() {
        return (this.bja() === true)
    };
    this.bja = function() {
        if ((screen.width <= ysp.lct.value73.w && screen.height <= ysp.lct.value73.h) || (screen.height <= ysp.lct.value73.w && screen.width <= ysp.lct.value73.h)) {
            return true
        }
        return false
    };
    this.zpd = function(i, j, k, n, e, b, f, l, m, a, d, g) {
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
    this.ggr = function(b, a) {
        if (b) {
            b.style.left = a.x + "px";
            b.style.top = a.y + "px";
            b.style.width = a.width + "px";
            b.style.height = a.height + "px"
        }
    };
    this.nqr = function() {
        return (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
    };
    this.ble = function() {
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
    this.teh = function() {
        try {
            if (screen.orientation && screen.orientation.lock && screen.orientation.unlock) {
                return true
            }
        } catch (a) {
            return false
        }
        return false
    };
    this.tww = function(b) {
        try {
            if (this.teh() === true) {
                screen.orientation.lock(b)
            }
        } catch (a) {}
    };
    this.zhg = function() {
        try {
            if (this.teh() === true) {
                screen.orientation.unlock()
            }
        } catch (a) {}
    };
    this.gyi = function() {
        return false
    };
    this.fbu = function(c, a) {
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
    this.bnr = function() {
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
    this.trw = function(q, o, f, l, k, a, p, d, r, g, n, j) {
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
    this.pyk = function(q, o, f, l, k, a, p, d, s, g, r, n, j) {
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
    this.vsi = function(q, o, f, l, k, a, p, d, s, g, r, n, j) {
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
    this.lwj = function(r, m, t, k, j, q, p, n, c, d, u, b, z, s) {
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
    this.zlw = function(m, g, d, a, j, b, k, l, f) {
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
    this.ytc = function(n, i, f, a, k, c, m, b, l, g, o) {
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
    this.qut = function(o, d, k, j, n, l, f, p, q, g, m, c) {
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
    this.qrd = function(q, j, g, b, m, p, l, d, f, o, a, n, i, r) {
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
    this.jry = function(m, g, d, a, j, k, b, l, f, n) {
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
    this.sph = function(k, g, d, c, i, a, j, f, l) {
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

function fsx() {
    this.parent = null;
    this.context2D = null;
    this.hyg = null;
    this.msg = null;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.wqo = true;
    this.grt = false;
    this.bih = function(a, d, c) {
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
                this.hyg = document.createElement("canvas");
                this.hyg.width = this.width;
                this.hyg.height = this.height;
                this.context2D = this.hyg.getContext("2d");
                if (c) {
                    this.msg = c
                }
            }
            this.grt = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.srt = function(a) {
        try {
            this.x = a.x || 0;
            this.y = a.y || 0;
            this.width = a.width || 0;
            this.height = a.height || 0;
            if (this.hyg) {
                this.hyg.width = this.width;
                this.hyg.height = this.height
            }
            this.grt = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.ygz = function(a) {};
    this.uad = function(a) {};
    this.coc = function(a, b) {
        this.wqo = a;
        if (b && b === true) {
            this.parent.cul(this.x, this.y, this.width, this.height)
        }
    };
    this.pod = function() {
        return (this.wqo && !this.grt)
    };
    this.cul = function() {}
}

function nsi() {
    this.egq = null;
    this.cxa = null;
    this.zzo = -1;
    this.xpy = -1;
    this.lyg = false;
    this.kvs = false;
    this.qty = false;
    this.mto = 0;
    this.pcp = 0;
    var a = 200;
    this.bih = function(c, f, d, b, e) {
        this.egq = b;
        this.cxa = e;
        nsi.prototype.bih.call(this, c, f, d)
    };
    this.evd = function(b, d, c) {
        this.lyg = b;
        c = (c === false) ? false : true;
        if (d && d === true && this.pod()) {
            this.parent.cul(this.x, this.y, this.width, this.height)
        }
        if (this.lyg === true && c === true) {
            clearTimeout(this.mto);
            this.mto = setTimeout(this.vcc, a)
        }
    };
    this.rqv = function() {
        return this.lyg
    };
    this.kbg = function(b, c) {
        this.qty = b;
        c = (c === false) ? false : true;
        clearTimeout(this.pcp);
        if (this.qty === true && c === true) {
            this.pcp = setTimeout(this.kpo, a)
        }
    };
    this.pqi = function() {
        return this.qty
    };
    this.zev = function(b, c) {
        this.cxa = b;
        if (c && c === true && this.pod()) {
            this.parent.cul(this.x, this.y, this.width, this.height)
        }
    };
    this.cgv = function(b) {
        this.kvs = b
    };
    this.aqx = function() {
        return this.kvs
    };
    this.jan = function() {};
    this.kpo = function() {};
    this.vcc = function() {}
}
nsi.prototype = new fsx;

function nny() {
    var a = this;
    this.zku = null;
    this.value = "";
    this.uww = false;
    this.azh = "round";
    this.pxf = null;
    this.tgp = "bold";
    this.nip = null;
    this.fyf = null;
    this.ycy = null;
    this.zgx = null;
    this.axo = null;
    this.kgt = 0;
    this.muh = 6;
    this.kkd = -2;
    this.zaz = 2;
    this.lax = -4;
    this.tri = 8;
    this.vmi = 26;
    this.nvf = 0;
    this.kuf = 1;
    this.hzk = 0;
    this.qqy = 0;
    this.hvr = -1;
    this.jrf = 10;
    this.brp = 0;
    this.kql = 0;
    this.prp = false;
    this.poc = -1;
    this.xwh = true;
    this.bih = function(d, g, e, c, b, f) {
        nny.prototype.bih.call(this, d, g, e, c, f);
        this.zku = b;
        if (this.egq) {
            this.kgt = Math.round(this.egq.height / 2)
        }
    };
    this.ygz = function(b) {
        try {
            this.azh = b.qcv;
            this.pxf = b.font;
            this.tgp = b.nkj;
            this.nip = b.backgroundColor;
            this.fyf = b.nxx;
            this.ycy = b.gqn;
            this.zgx = b.aad;
            if (b.borderColor && b.tgc) {
                this.axo = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.axo.addColorStop(0, b.borderColor);
                this.axo.addColorStop(1, b.tgc)
            } else {
                this.axo = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.uad = function(b) {
        try {
            this.vmi = b.bmr;
            this.nvf = b.zmo;
            this.muh = b.vth;
            this.kkd = b.scp;
            this.zaz = b.rkz;
            this.lax = b.nuk;
            this.tri = b.dym;
            this.kuf = b.qwc
        } catch (c) {
            console.error(c)
        }
    };
    this.wmp = function() {
        if (this.eud()) {
            clearInterval(this.poc);
            this.poc = -1
        }
        this.xwh = false;
        this.poc = setInterval(this.bxb, 400)
    };
    this.ufn = function() {
        this.xwh = true;
        clearInterval(this.poc);
        this.poc = -1;
        this.yzn(false)
    };
    this.yzn = function(b, c) {
        this.prp = b;
        c = (c === false) ? false : true;
        if (c === true && this.pod() === true) {
            this.parent.cul(this.x, this.y, this.width, this.height)
        }
    };
    this.eud = function() {
        return (this.poc >= 0)
    };
    this.lgb = function(b, c) {
        this.value = b;
        if (c && c === true && this.pod()) {
            this.parent.cul(this.x, this.y, this.width, this.height)
        }
    };
    this.fik = function(b) {
        this.hzk = Math.round(b / this.jrf);
        this.brp = 0;
        this.kql = 0;
        this.qqy = new Date().getTime();
        this.hvr = setTimeout(this.hxa, this.hzk)
    };
    this.uca = function() {
        if (a.hvr >= 0) {
            clearTimeout(a.hvr);
            a.hvr = -1
        }
        a.brp = 0;
        a.vcc()
    };
    this.fuj = function() {
        if (a.hvr >= 0) {
            clearInterval(a.hvr);
            a.hvr = -1
        }
        a.brp = 1;
        a.vcc()
    };
    this.hxa = function() {
        var b = 0,
            c = new Date().getTime();
        a.kql += 1;
        if (a.kql < a.jrf) {
            a.brp += 1 / a.jrf;
            a.parent.cul(a.x, a.y, a.width, a.height);
            b = a.hzk + (a.kql * a.hzk - (c - a.qqy));
            a.hvr = setTimeout(a.hxa, b)
        } else {
            a.fuj()
        }
    };
    this.cul = function() {
        if (!this.pod()) {
            return
        }
        var g = null,
            f = 0,
            c = 0,
            n = 0,
            k = 0,
            l = this.width / 2 - this.kuf,
            d = (this.azh === "roundedT" || this.azh === "roundedL") ? this.tri : 0,
            b = (this.azh === "roundedT" || this.azh === "roundedR") ? this.tri : 0,
            o = (this.azh === "roundedB" || this.azh === "roundedR") ? this.tri : 0,
            q = (this.azh === "roundedB" || this.azh === "roundedL") ? this.tri : 0,
            e = 1,
            m = String(this.value),
            p = this.context2D;
        p.save();
        p.textAlign = "center";
        p.textBaseline = "bottom";
        if (this.prp || this.brp >= 1) {
            if (this.azh === "round") {
                ysp.ekr.sph(p, this.x + this.width / 2, this.y + this.height / 2, l, this.fyf, 1, this.axo, this.kuf, 1)
            } else {
                if (this.azh === "rect") {
                    ysp.ekr.zlw(p, this.x, this.y, this.width, this.height, this.tri, this.fyf, this.axo, this.kuf)
                } else {
                    if (this.azh === "roundedT" || this.azh === "roundedB" || this.azh === "roundedR" || this.azh === "roundedL") {
                        ysp.ekr.qrd(p, this.x, this.y, this.width, this.height, d, b, o, q, this.fyf, 1, this.axo, this.kuf, 1)
                    }
                }
            }
            if (this.zku || this.egq) {
                if (this.rqv()) {
                    p.drawImage((this.zku) ? this.zku : this.egq, 0, this.kgt, this.egq.width, this.kgt, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage((this.zku) ? this.zku : this.egq, 0, 0, this.egq.width, this.kgt, this.x, this.y, this.width, this.height)
                }
            }
        } else {
            if (this.uww && this.aqx() === false) {
                p.globalAlpha = 0.5
            }
            if (this.brp > 0) {
                if (this.azh === "round") {
                    ysp.ekr.sph(p, this.x + this.width / 2, this.y + this.height / 2, l, this.nip, 1 - this.kql / this.jrf, this.axo, this.kuf, 1);
                    ysp.ekr.sph(p, this.x + this.width / 2, this.y + this.height / 2, l, this.fyf, this.kql / this.jrf)
                } else {
                    if (this.azh === "rect") {
                        vjl = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                        vjl.addColorStop(1 - this.brp, this.nip);
                        vjl.addColorStop(1 - this.brp, this.fyf);
                        ysp.ekr.ytc(p, this.x, this.y, this.width, this.height, this.tri, vjl, 1, this.axo, this.kuf, 1)
                    } else {
                        if (this.azh === "roundedT" || this.azh === "roundedB" || this.azh === "roundedR" || this.azh === "roundedL") {
                            vjl = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                            vjl.addColorStop(1 - this.brp, this.nip);
                            vjl.addColorStop(1 - this.brp, this.fyf);
                            ysp.ekr.qrd(p, this.x, this.y, this.width, this.height, d, b, o, q, vjl, 1, this.axo, this.kuf, 1)
                        }
                    }
                }
            } else {
                if (this.azh === "round") {
                    ysp.ekr.sph(p, this.x + this.width / 2, this.y + this.height / 2, l, this.nip, 1, this.axo, this.kuf, 1)
                } else {
                    if (this.azh === "rect") {
                        ysp.ekr.zlw(p, this.x, this.y, this.width, this.height, this.tri, this.nip, this.axo, this.kuf)
                    } else {
                        if (this.azh === "roundedT" || this.azh === "roundedB" || this.azh === "roundedR" || this.azh === "roundedL") {
                            ysp.ekr.qrd(p, this.x, this.y, this.width, this.height, d, b, o, q, this.nip, 1, this.axo, this.kuf, 1)
                        }
                    }
                }
            }
            if (this.egq) {
                if (this.rqv()) {
                    p.drawImage(this.egq, 0, this.kgt, this.egq.width, this.kgt, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage(this.egq, 0, 0, this.egq.width, this.kgt, this.x, this.y, this.width, this.height)
                }
            }
        }
        if (m && this.nvf > 0) {
            f = (this.rqv()) ? 2 : 0;
            c = this.nvf;
            p.font = this.tgp + " " + c + "px " + this.pxf;
            p.fillStyle = this.zgx;
            n = p.measureText(m).width;
            if (n > this.width - 2 * this.muh) {
                e = ((this.width - 2 * this.muh) / n);
                c = Math.round(e * c) - 1;
                p.font = this.tgp + " " + c + "px " + this.pxf
            }
            if (c > this.height / 2 - this.muh) {
                e = ((this.height / 2 - this.muh) / c);
                c = Math.round(e * c) - 1;
                p.font = this.tgp + " " + c + "px " + this.pxf
            }
            k = (this.height / 2 - c) / 2;
            k += c;
            p.fillText(m, this.x + this.width / 2 + this.kkd, this.y - this.lax + k + f)
        }
        if (this.cxa && this.cxa != "" && this.vmi > 0) {
            g = this.cxa.split("|");
            f = (this.rqv()) ? 2 : 0;
            c = this.vmi;
            p.font = this.tgp + " " + c + "px " + this.pxf;
            p.fillStyle = this.ycy;
            for (var j = 0; j < g.length; j++) {
                n = (p.measureText(g[j]).width > n) ? p.measureText(g[j]).width : n
            }
            if (n > this.width - 2 * this.muh) {
                e = ((this.width - 2 * this.muh) / n);
                c = Math.round(e * c) - 1;
                p.font = this.tgp + " " + c + "px " + this.pxf
            }
            if (this.nvf > 0) {
                if (c * g.length > this.height / 2 - this.muh) {
                    e = ((this.height / 2 - this.muh) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.tgp + " " + c + "px " + this.pxf
                }
                k = this.height / 2 + (this.height / 2 - c * g.length) / 2
            } else {
                if (c * g.length > this.height - 2 * this.muh) {
                    e = ((this.height - 2 * this.muh) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.tgp + " " + c + "px " + this.pxf
                }
                k = (this.height - c * g.length) / 2
            }
            k += c;
            for (var j = 0; j < g.length; j++) {
                p.fillText(g[j], this.x + this.width / 2 + this.kkd, this.y - this.zaz + k + f);
                k += c
            }
        }
        p.restore();
        if (this.msg && this.hyg) {
            this.msg.drawImage(this.hyg, this.x, this.y)
        }
    };
    this.bxb = function() {
        if (!a.xwh) {
            a.yzn(!a.prp)
        }
    };
    this.kpo = function() {
        a.qty = false
    };
    this.vcc = function() {
        a.lyg = false;
        if (a.pod()) {
            a.parent.cul(a.x, a.y, a.width, a.height)
        }
    }
}
nny.prototype = new nsi;

function hfy() {
    this.ogv = 0;
    this.ycj = [];
    this.bih = function(a, c, b) {
        hfy.prototype.bih.call(this, a, c, b);
        this.ogv = 0;
        this.ycj = []
    };
    this.dmn = function(a, b) {
        if (b && b === true) {
            this.ycj.unshift(a)
        } else {
            this.ycj.push(a)
        }
    };
    this.wsi = function(a) {
        if (a && a === true) {
            this.ycj.shift()
        } else {
            this.ycj.pop()
        }
    };
    this.fqa = function(a) {
        this.ogv = a
    };
    this.wac = function() {
        return this.ogv
    };
    this.cul = function() {
        if (!this.pod() || !this.parent.jpj()) {
            return
        }
        if (this.ogv < this.ycj.length) {
            this.ycj[this.ogv].cul()
        }
        try {
            if (this.msg && this.hyg) {
                this.msg.drawImage(this.hyg, this.x, this.y)
            }
        } catch (a) {}
    }
}
hfy.prototype = new fsx;

function rxm() {
    var a = this;
    this.qbw = null;
    this.ogv = 0;
    this.ycj = [];
    this.nip = null;
    this.zlm = null;
    this.qxw = null;
    this.nie = new pjy();
    this.bih = function(b, d, c) {
        rxm.prototype.bih.call(this, b, d, c);
        this.wqo = false;
        this.ogv = 0;
        this.ycj = [];
        this.eyi()
    };
    this.eyi = function() {
        this.qbw = new irf();
        this.qbw.bih();
        this.qbw.vpa("buttons")
    };
    this.uad = function(f) {
        try {
            var d = this.qbw.fbh("buttons"),
                c = 0,
                b = d.length;
            this.nie = f.fsd;
            for (; c < b; c++) {
                d[c].uad(f.teg)
            }
            this.qbw.tpi("return", "#srt", [f.tho]);
            this.qbw.tpi("page", "#srt", [f.fjr]);
            this.qbw.tpi("prev", "#srt", [f.xch]);
            this.qbw.tpi("next", "#srt", [f.tyl])
        } catch (g) {
            console.error(g)
        }
    };
    this.ygz = function(d) {
        try {
            var f = this.qbw.fbh("buttons");
            this.nip = d.backgroundColor;
            this.zlm = d.tna;
            this.qxw = d.xcl;
            for (var c = 0, b = f.length; c < b; c++) {
                f[c].ygz((this.parent.gof.jnb === false) ? d.rvj : (this.parent.odx === ysp.gof.fzk) ? d.dqw : d.ruh)
            }
        } catch (g) {
            console.error(g)
        }
    };
    this.xba = function(m, l) {
        var k = this.qbw.fbh("buttons"),
            g = this.qbw.qmc("return"),
            c = m - this.x,
            n = l - this.y;
        for (var e = 0, f = k.length; e < f; e++) {
            var b = k[e];
            if (c >= b.x && c <= b.x + b.width && n >= b.y && n <= b.y + b.height && b.pod() == true) {
                if (b.aqx() && !b.pqi()) {
                    if (b != g) {
                        b.evd(true, true)
                    }
                    this.parent.wba.ntp("btn");
                    this.parent.wba.dyw("btn");
                    b.jan();
                    for (var d = 0; d < f; d++) {
                        k[d].kbg(true)
                    }
                    return true
                }
            }
        }
        return false
    };
    this.opg = function() {
        var e = this.qbw.fbh("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.rqv() === true) {
                c.evd(false, true);
                return true
            }
        }
        return false
    };
    this.zfi = function(k) {
        var g = this.qbw.fbh("buttons"),
            c = this.qbw.qmc("return");
        for (var f = 0, b = g.length; f < b; f++) {
            var d = g[f];
            if (k == d.zzo) {
                if (d.aqx() && !d.pqi()) {
                    if (d != c) {
                        d.evd(true, true)
                    }
                    this.parent.wba.ntp("btn");
                    this.parent.wba.dyw("btn");
                    d.jan();
                    for (var e = 0; e < b; e++) {
                        g[e].kbg(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.unq = function() {
        var e = this.qbw.fbh("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.rqv() === true) {
                c.evd(false, true);
                return true
            }
        }
        return false
    };
    this.dmn = function(b, c) {
        if (c && c === true) {
            this.ycj.unshift(b);
            this.ogv++
        } else {
            this.ycj.push(b)
        }
    };
    this.wsi = function(b) {
        if (b && b === true) {
            this.ycj.shift();
            this.ogv--
        } else {
            this.ycj.pop()
        }
    };
    this.mbh = function() {
        return this.ycj.length
    };
    this.kuu = function(e, c, b) {
        var d = (this.parent.gof.jnb === false) ? c.rvj : (this.parent.odx === ysp.gof.fzk) ? c.dqw : c.ruh;
        if (this.parent.coz === false) {
            this.qbw.zth("return", this.rda(e.tho, this.parent.language.ret, (this.parent.gof.iox === false) ? b : this.parent.wba.vjf("btn_re"), this.ekk, (this.parent.wjo.nee) ? this.parent.wjo.nee : null, e.teg, d), ["buttons"]);
            this.qbw.zth("page", this.rda(e.fjr, (this.ogv + 1) + "/" + this.ycj.length, b, this.bre, null, e.teg, d), ["buttons"]);
            this.qbw.zth("prev", this.rda(e.xch, this.parent.language.leu, (this.parent.gof.iox === false) ? b : this.parent.wba.vjf("btn_pr"), this.oty, (this.parent.wjo.iul) ? this.parent.wjo.iul : null, e.teg, d), ["buttons"]);
            this.qbw.zth("next", this.rda(e.tyl, this.parent.language.ert, (this.parent.gof.iox === false) ? b : this.parent.wba.vjf("btn_ne"), this.bre, (this.parent.wjo.ttn) ? this.parent.wjo.ttn : null, e.teg, d), ["buttons"])
        }
    };
    this.rda = function(g, j, b, i, d, f, e) {
        var c = new nny();
        c.bih(g, this.context2D, null, b, null, j);
        c.parent = this;
        c.jan = i;
        c.uad(f);
        c.ygz(e);
        if (d) {
            c.zzo = d.okl
        }
        return c
    };
    this.cul = function(l, j, m, e) {
        if (!this.pod() || !this.parent.jpj()) {
            return
        }
        var b = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = null,
            g = this.qbw.fbh("buttons"),
            d = null;
        if (this.parent.gof.jnb === false) {
            d = this.parent.wba.vjf("btn_back")
        } else {
            if (this.parent.odx === ysp.gof.fzk) {
                d = (this.parent.wba.vjf("h_right" + this.ogv) != null) ? this.parent.wba.vjf("h_right" + this.ogv) : this.parent.wba.vjf("h_right")
            } else {
                d = (this.parent.wba.vjf("h_left" + this.ogv) != null) ? this.parent.wba.vjf("h_left" + this.ogv) : this.parent.wba.vjf("h_left")
            }
        }
        n.save();
        if (b) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        if (this.ogv >= 0 && this.ogv < this.ycj.length) {
            this.ycj[this.ogv].cul()
        }
        if (d) {
            k = n.createLinearGradient(this.nie.x, this.nie.y, this.nie.x + this.nie.width, this.nie.y);
            k.addColorStop(0.2, this.zlm);
            k.addColorStop(1, this.qxw);
            n.fillStyle = k;
            n.save();
            if (this.parent.gof.jnb === false) {
                if (this.parent.odx === ysp.gof.ohj) {
                    n.translate(this.nie.width / 2, this.nie.height / 2);
                    n.rotate(Math.PI);
                    n.translate(-this.nie.width / 2, -this.nie.height / 2)
                }
                n.fillRect(this.nie.x, this.nie.y, this.nie.width, this.nie.height)
            }
            n.drawImage(d, this.nie.x, this.nie.y, this.nie.width, this.nie.height);
            n.restore()
        } else {
            if (this.nip != null) {
                n.fillStyle = this.nip;
                n.fillRect(this.nie.x, this.nie.y, this.nie.width, this.nie.height)
            }
        }
        for (var c = 0, f = g.length; c < f; c++) {
            g[c].cul()
        }
        n.restore();
        if (this.msg && this.hyg) {
            if (b) {
                this.msg.drawImage(this.hyg, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.msg.drawImage(this.hyg, this.x, this.y)
            }
        }
    };
    this.hux = function(f, g) {
        var e = this.qbw.qmc("page"),
            c = this.qbw.qmc("return"),
            b = this.qbw.qmc("next"),
            d = this.qbw.qmc("prev");
        if (e != null) {
            e.zev((this.ogv + 1) + "/" + this.ycj.length)
        }
        if (c != null) {
            c.coc(f)
        }
        if (b != null && d != null && e != null) {
            if (f) {
                if (this.ycj.length > 1) {
                    b.coc(f);
                    d.coc(f);
                    e.coc(f)
                } else {
                    b.coc(false);
                    d.coc(false);
                    e.coc(false)
                }
            } else {
                b.coc(f);
                d.coc(f);
                e.coc(f)
            }
        }
        if (g && g === true) {
            this.cul()
        }
    };
    this.ogy = function() {
        this.ogv = 0;
        this.hux(true);
        this.coc(true, true)
    };
    this.uaw = function() {
        this.hux(false);
        this.coc(false, true)
    };
    this.xst = function() {
        var d = this.qbw.qmc("page"),
            b = this.qbw.qmc("next"),
            c = this.qbw.qmc("prev");
        this.ogv = (this.ogv < this.ycj.length) ? this.ogv : this.ycj.length - 1;
        this.ogv = (this.ogv < 0) ? 0 : this.ogv;
        d.zev((this.ogv + 1) + "/" + this.ycj.length, true);
        if (this.ycj.length == 1) {
            b.coc(false);
            c.coc(false);
            d.coc(false)
        } else {
            b.coc(true);
            c.coc(true);
            d.coc(true)
        }
    };
    this.jjr = function(c) {
        var e = this.qbw.fbh("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            e[d].cgv(c)
        }
    };
    this.ekk = function() {
        a.parent.xvs()
    };
    this.bre = function() {
        var b = a.qbw.qmc("page");
        if (a.ogv < a.ycj.length - 1) {
            a.ogv++
        } else {
            a.ogv = 0
        }
        if (b) {
            b.zev((a.ogv + 1) + "/" + a.ycj.length, false)
        }
        a.cul()
    };
    this.oty = function() {
        var b = a.qbw.qmc("page");
        if (a.ogv > 0) {
            a.ogv--
        } else {
            a.ogv = a.ycj.length - 1
        }
        if (b) {
            b.zev((a.ogv + 1) + "/" + a.ycj.length, false)
        }
        a.cul()
    }
}
rxm.prototype = new fsx;

function hxx() {
    this.egq = new Image();
    this.wrw = null;
    this.jqi = [];
    this.fdn = [];
    this.qcb = null;
    this.pxf = null;
    this.tgp = "bold";
    this.gns = null;
    this.ycy = null;
    this.ysb = null;
    this.zlz = 0;
    this.nfb = [];
    this.kem = null;
    this.fnj = 40;
    this.jow = 18;
    this.tkd = 1;
    this.bih = function(b, d, c, a) {
        this.egq = a;
        this.jqi = [];
        this.nfb = [];
        hxx.prototype.bih.call(this, b, d, c)
    };
    this.uad = function(a) {
        try {
            this.kem = a.tus;
            this.nfb = a.ejr;
            this.jow = a.fontSize;
            this.fnj = a.huy;
            this.tkd = a.lineWidth
        } catch (b) {
            console.error(b)
        }
    };
    this.ygz = function(a) {
        try {
            this.qcb = a.upg;
            this.pxf = a.font;
            this.tgp = a.nkj;
            this.gns = a.elz;
            this.ycy = a.gqn;
            this.ysb = a.kah
        } catch (b) {
            console.error(b)
        }
    };
    this.cul = function() {
        if (!this.pod()) {
            return
        }
        var b = this.context2D;
        b.save();
        b.fillStyle = this.ycy;
        if (this.gns) {
            b.strokeStyle = this.gns
        }
        b.lineJoin = "round";
        b.lineCap = "round";
        b.lineWidth = this.tkd;
        b.font = this.tgp + " " + this.jow + "px " + this.pxf;
        b.textBaseline = "bottom";
        b.textAlign = "center";
        b.drawImage(this.egq, 0, 0);
        if ((this.height - this.egq.height) > 0) {
            var a = this.parent.nie;
            b.drawImage(this.egq, a.x, a.y, a.width, this.egq.height - a.y, a.x, a.y, a.width, a.height)
        }
        if (this.wrw && this.kem) {
            ysp.ekr.trw(b, this.wrw, this.ysb, this.kem.x, this.kem.y, this.kem.width, this.kem.height, this.qcb, this.fnj, this.tgp)
        }
        for (var c = 0; c < this.jqi.length; c++) {
            this.lwj(this.jqi[c], this.nfb[c], this.jow, this.pxf)
        }
        b.restore();
        if (this.msg && this.hyg) {
            this.msg.drawImage(this.hyg, this.x, this.y)
        }
    };
    this.isx = function(j, f, g, d) {
        var b = this.context2D,
            c = 0;
        this.fdn = [];
        b.save();
        b.font = this.tgp + " " + g + "px " + d;
        this.udk(b, g, j, f, d);
        for (var e = 0, a = this.fdn.length; e < a; e++) {
            c = (f.height + this.zlz) / (this.fdn.length + 1) * (e + 1);
            b.fillText(this.fdn[e], (f.x), f.y + c);
            if (this.gns != null && b.lineWidth >= 1) {
                b.strokeText(this.fdn[e], (f.x), f.y + c)
            }
        }
        b.restore()
    };
    this.lwj = function(g, e, f, c) {
        var a = this.context2D,
            b = 0;
        this.fdn = [];
        a.save();
        a.font = this.tgp + " " + f + "px " + c;
        this.udk(a, f, g, e, c);
        for (var d = 0; d < this.fdn.length; d++) {
            b = (e.height + this.zlz) / (this.fdn.length + 1) * (d + 1);
            a.fillText(this.fdn[d], (e.x + e.width / 2), e.y + b);
            if (this.gns != null && a.lineWidth >= 1) {
                a.strokeText(this.fdn[d], (e.x + e.width / 2), e.y + b)
            }
        }
        a.restore()
    };
    this.udk = function(m, o, l, g, b) {
        var a = 1,
            k = 0,
            j = "",
            f = 0,
            d = 0,
            c = 0,
            n = 0;
        n = m.measureText(l).width / g.width;
        n = (n >= Math.round(n)) ? Math.round(n) + 1 : Math.round(n);
        this.zlz = o;
        if (this.zlz * n > g.height) {
            a = g.height / (this.zlz * n);
            this.zlz = Math.round(a * this.zlz) - 1;
            m.font = this.tgp + " " + this.zlz + "px " + b;
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
                this.fdn[d] = l.substring(c, l.length)
            } else {
                if (l.charAt(e) == "|") {
                    this.fdn[d] = l.substring(c, e);
                    d++;
                    c = e + 1;
                    j = l.substring(f + 1, e)
                } else {
                    if (k >= g.width) {
                        this.fdn[d] = l.substring(c, f);
                        d++;
                        c = f + 1;
                        j = l.substring(f + 1, e)
                    }
                }
            }
        }
    }
}
hxx.prototype = new fsx;

function ymu() {
    var a = this;
    this.egq = new Image();
    this.aya = "";
    this.ehv = "";
    this.gto = -1;
    this.tsm = 0;
    this.dhg = 0;
    this.rkq = 5000;
    this.pxf = null;
    this.tgp = "bold";
    this.ycy = null;
    this.nip = null;
    this.vvu = null;
    this.tri = 0;
    this.tza = 0;
    this.muh = 0;
    this.kuf = 0;
    this.fsv = 0;
    this.jow = 0;
    this.xrr = null;
    this.ovh = 0;
    this.okb = [];
    this.bik = 0;
    this.gzw = true;
    this.ozn = 0;
    this.uad = function(b) {
        try {
            this.jow = b.fontSize;
            this.fsv = b.dav;
            this.tri = b.dym;
            this.tza = b.nit;
            this.muh = b.vth;
            this.kuf = b.qwc
        } catch (c) {
            console.error(c)
        }
    };
    this.ygz = function(b) {
        try {
            this.pxf = b.font;
            this.tgp = b.nkj;
            this.nip = b.backgroundColor;
            this.ycy = b.gqn;
            this.vvu = b.borderColor
        } catch (c) {
            console.error(c)
        }
    };
    this.dmt = function(e, c, d, b) {
        this.aya = e;
        this.ehv = c;
        this.gto = d;
        this.tsm = b;
        this.gzw = true;
        clearTimeout(this.ozn);
        if (this.pod() === true) {
            this.parent.cul(this.x, this.y, this.width, this.height)
        }
    };
    this.ise = function(b, c) {
        this.aya = b;
        this.ehv = undefined;
        this.gzw = c;
        if (this.gzw) {
            clearTimeout(this.ozn)
        }
        if (this.pod() === true) {
            this.parent.cul(this.x, this.y, this.width, this.height)
        }
    };
    this.tto = function() {
        this.aya = "";
        this.ehv = undefined;
        this.gzw = true;
        clearTimeout(this.ozn);
        if (this.pod() === true) {
            this.parent.cul(this.x, this.y, this.width, this.height)
        }
    };
    this.mez = function(b, c) {
        this.ovh = 0;
        this.bik = b;
        this.gzw = false;
        if (c && c > 0) {
            this.ozn = setTimeout(this.eoa, c)
        } else {
            this.ozn = setTimeout(this.eoa, this.rkq)
        }
    };
    this.vmq = function(b) {
        this.ovh = 0;
        this.bik = b;
        if (this.gzw) {
            this.ise(this.okb[this.bik][this.ovh], false)
        }
        this.gzw = false;
        this.ozn = setTimeout(this.eoa, this.rkq)
    };
    this.upj = function() {
        this.gzw = false;
        this.ozn = setTimeout(this.eoa, this.rkq)
    };
    this.pme = function() {
        this.gzw = true;
        clearTimeout(this.ozn)
    };
    this.xsm = function() {
        return this.gzw
    };
    this.eoa = function() {
        if (!a.gzw) {
            a.ovh = (a.okb[a.bik][a.ovh + 1] != undefined) ? a.ovh + 1 : 0;
            a.ozn = setTimeout(a.eoa, a.rkq);
            a.ise(a.okb[a.bik][a.ovh], a.gzw)
        }
    };
    this.efz = function(b) {
        this.okb[b] = []
    };
    this.hgk = function(d, b) {
        for (var c = 0; c < d.length; c++) {
            this.okb[b][c] = d[c]
        }
    };
    this.seg = function(b) {
        this.xrr = b
    };
    this.cul = function() {
        if (!this.pod()) {
            return
        }
        var o = this.context2D,
            m = this.jow,
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
            q = (this.vvu && this.kuf) ? this.muh + this.kuf : this.muh;
        o.save();
        if (this.nip) {
            ysp.ekr.zlw(o, this.x, this.y, this.width, this.height, this.tri, this.nip, this.vvu, this.kuf)
        } else {
            if (this.xrr) {
                o.putImageData(this.xrr, this.x, this.y)
            }
        }
        o.lineJoin = "round";
        o.lineCap = "round";
        o.fillStyle = this.ycy;
        o.font = this.tgp + " " + m + "px " + this.pxf;
        o.textBaseline = "bottom";
        o.textAlign = "center";
        l = o.measureText(this.aya).width;
        b += l;
        n = o.measureText("WW").width;
        if (this.ehv != undefined && this.gto >= 0) {
            j = o.measureText(this.ehv).width;
            b += j;
            b += this.tsm * (this.egq.width + this.tza);
            if (this.tsm % 2 != 0) {
                s = this.x + (this.width) / 2 - (this.tsm / 2) * (this.egq.width + this.tza);
                x = s - n;
                e = s + (this.tsm) * (this.egq.width + this.tza) + n
            } else {
                s = this.x + (this.width) / 2 - (this.tsm / 2) * (this.egq.width) - (this.tsm - 1) / 2 * this.tza;
                x = s - n;
                e = s + (this.tsm) * (this.egq.width) + (this.tsm - 1) * this.tza + n
            }
            for (var u = 0; u < this.tsm; u++) {
                o.drawImage(this.egq, 0, this.dhg * this.gto, this.egq.width, this.dhg, s + (u * (this.tza + this.egq.width)), this.y + ((this.height - this.dhg) / 2), this.egq.width, this.dhg)
            }
            o.textAlign = "right";
            o.fillText(this.aya, x, this.y + m + this.fsv);
            o.textAlign = "left";
            o.fillText(this.ehv, e, this.y + m + this.fsv)
        } else {
            if (this.aya != undefined) {
                do {
                    if (g.length > 1) {
                        m -= 2;
                        o.font = this.tgp + " " + m + "px " + this.pxf
                    }
                    g = [];
                    d = "";
                    v = 0;
                    y = 0;
                    t = 0;
                    for (var p = t; p < this.aya.length; p++) {
                        d += this.aya.charAt(p);
                        k = o.measureText(d).width;
                        if ((this.aya.charAt(p) == " ") || (this.aya.charAt(p) == "|")) {
                            v = p
                        }
                        if (p == this.aya.length - 1) {
                            g[y] = this.aya.substring(t, this.aya.length)
                        } else {
                            if (this.aya.charAt(p) == "|") {
                                g[y] = this.aya.substring(t, v);
                                y++;
                                t = v + 1;
                                d = this.aya.substring(v + 1, p)
                            } else {
                                if (k >= this.width - 2 * q) {
                                    g[y] = this.aya.substring(t, v);
                                    y++;
                                    t = v + 1;
                                    d = this.aya.substring(v + 1, p)
                                }
                            }
                        }
                    }
                } while (g.length > 2);
                if (g.length > 1 && m == this.jow) {
                    o.font = this.tgp + " " + (m - 3) + "px " + this.pxf;
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
ymu.prototype = new fsx;

function zsl() {
    this.gde = null;
    this.cjj = null;
    this.afl = null;
    this.sar = false;
    this.kvs = false;
    this.qey = true;
    this.wpd = false;
    this.sax = false;
    this.rsg = 0;
    this.kbk = 0;
    this.qzx = 0;
    this.wkv = "";
    this.ury = "";
    this.zlm = null;
    this.qxw = null;
    this.pxf = "arial";
    this.tgp = "bold";
    this.eav = "arial";
    this.jkd = "rgb(0,0,200)";
    this.ixr = "rgb(255,255,255)";
    this.ypp = "rgb(0,0,150)";
    this.nip = "rgb(220,240,255)";
    this.nlj = "rgb(130,220,255)";
    this.nfe = "rgb(130,190,255)";
    this.ycy = "rgb(255,255,255)";
    this.yhn = "rgb(130,190,255)";
    this.dkp = "rgb(100,160,255)";
    this.kwf = "rgb(255,255,255)";
    this.nie = new pjy();
    this.kem = null;
    this.koz = null;
    this.yer = null;
    this.enx = null;
    this.dgl = null;
    this.xib = null;
    this.hdg = null;
    this.nhi = null;
    this.kuf = 2;
    this.qdr = 3;
    this.ntn = 10;
    this.fsv = 3;
    this.kkd = 5;
    this.ydz = 36;
    this.jow = 30;
    this.tzv = 22;
    this.bih = function(a, c, b) {
        zsl.prototype.bih.call(this, a, c, b);
        this.wpd = ysp.lct.value37
    };
    this.uki = function(b) {
        try {
            var a = (ysp.lct.value37) ? b.xmz : b.kaw;
            this.kem = b.tus;
            this.koz = b.ghz;
            this.yer = b.pwa;
            this.enx = b.gjk;
            this.dgl = b.tki;
            this.xib = b.jyq;
            this.nie = b.fsd;
            this.ydz = b.dqy;
            this.jow = b.fontSize;
            this.tzv = b.fau;
            this.fsv = b.dav;
            this.kkd = b.scp;
            this.kuf = b.qwc;
            this.qdr = b.ikw;
            this.ntn = b.ife;
            if (ysp.lct.value36) {
                this.ury = this.parent.oxp(this.parent.language.kdz)
            } else {
                if (ysp.lct.value37) {
                    this.ury = this.parent.oxp(this.parent.language.dth)
                }
            }
            this.gde = [];
            this.cjj = this.rda(a.dua, this.parent.language.ret, this.parent.duf, (this.parent.gof.iox === false) ? this.parent.wba.vjf("btn") : this.parent.wba.vjf("btn_re"), b.teg);
            this.gde.push(this.cjj);
            if (ysp.lct.value37) {
                this.afl = this.rda(a.tho, this.parent.language.qqx, this.parent.mxk, (this.parent.gof.iox === false) ? this.parent.wba.vjf("btn") : this.parent.wba.vjf("btn_e"), b.teg);
                this.gde.push(this.afl)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.uad = function(b) {
        try {
            var a = (ysp.lct.value37) ? b.xmz : b.kaw;
            this.kem = b.tus;
            this.koz = b.ghz;
            this.yer = b.pwa;
            this.enx = b.gjk;
            this.dgl = b.tki;
            this.xib = b.jyq;
            this.nie = b.fsd;
            if (this.cjj) {
                this.cjj.srt(a.dua);
                this.cjj.uad(b.teg)
            }
            if (this.afl) {
                this.afl.srt(a.tho);
                this.afl.uad(b.teg)
            }
            this.ydz = b.dqy;
            this.jow = b.fontSize;
            this.tzv = b.fau;
            this.fsv = b.dav;
            this.kkd = b.scp;
            this.kuf = b.qwc;
            this.qdr = b.ikw;
            this.ntn = b.ife
        } catch (c) {
            console.error(c)
        }
    };
    this.ygz = function(c) {
        try {
            this.pxf = c.font;
            this.tgp = c.nkj;
            this.jkd = c.bte;
            this.ixr = c.eny;
            this.ypp = c.ptx;
            this.nip = c.backgroundColor;
            this.nlj = c.oep;
            this.nfe = c.uts;
            this.ycy = c.gqn;
            this.yhn = c.ioo;
            this.dkp = c.rom;
            this.kwf = c.jiz;
            this.zlm = c.tna;
            this.qxw = c.xcl;
            for (var b = 0, a = this.gde.length; b < a; b++) {
                this.gde[b].ygz((this.parent.gof.jnb === true) ? c.eka : c.rvj)
            }
        } catch (d) {
            console.error(d)
        }
    };
    this.xba = function(d, k) {
        var c = d - this.x,
            g = k - this.y;
        for (var f = 0, b = this.gde.length; f < b; f++) {
            var a = this.gde[f];
            if (c >= a.x && c <= a.x + a.width && g >= a.y && g <= a.y + a.height && a.pod() === true) {
                if (a.aqx() === true && a.pqi() === false && this.qey) {
                    a.evd(true, true);
                    this.parent.wba.ntp("btn");
                    this.parent.wba.dyw("btn");
                    a.jan();
                    for (var e = 0; e < b; e++) {
                        this.gde[e].kbg(true)
                    }
                    return true
                }
            }
        }
        if (c >= this.xib.x && c <= this.xib.x + this.xib.width && g >= this.xib.y && g <= this.xib.y + this.xib.height && this.wpd && this.kvs) {
            this.sye()
        }
        return true
    };
    this.opg = function() {};
    this.zfi = function() {};
    this.unq = function() {};
    this.rda = function(d, f, e, a, c) {
        var b = new nny();
        b.bih(d, this.context2D, null, a, null, f);
        b.parent = this;
        b.jan = e;
        b.uad(c);
        return b
    };
    this.jjr = function(c) {
        this.kvs = c;
        for (var b = 0, a = this.gde.length; b < a; b++) {
            this.gde[b].cgv(c)
        }
    };
    this.sye = function() {
        this.qey = !this.qey;
        this.parent.cul()
    };
    this.btn = function(d, a, c, b) {
        this.sax = false;
        this.unn = true;
        this.wkv = this.gkv(b);
        this.rsg = d;
        this.kbk = a;
        this.qzx = c;
        if (this.pod()) {
            this.jjr(true);
            this.cul()
        }
    };
    this.gkv = function(b) {
        var d = Math.floor(b / 3600000);
        b = b - d * 3600000;
        var a = Math.floor(b / 60000);
        b = b - a * 60000;
        var c = Math.floor(b / 1000);
        return this.fip(d) + ":" + this.fip(a) + ":" + this.fip(c)
    };
    this.fip = function(a) {
        if (a < 10) {
            return "0" + a
        }
        return a
    };
    this.zuj = function(a, b) {
        this.sax = a;
        if (b && b === true) {
            this.cul()
        }
    };
    this.coc = function(a, b) {
        this.unn = false;
        if (ysp.lct.value37) {
            this.qey = false
        }
        this.zuj(a, false);
        zsl.prototype.coc.call(this, a, b)
    };
    this.cul = function(j, f, k, d) {
        if (!this.pod() || !this.parent.jpj()) {
            return
        }
        var a = (j != null && f != null && k != null && d != null),
            g = null,
            l = this.context2D,
            c = this.parent.wba.vjf("btn_back");
        l.save();
        if (a) {
            l.beginPath();
            l.rect(j, f, k, d);
            l.closePath();
            l.clip()
        }
        l.fillStyle = this.nip;
        l.fillRect(0, 0, this.width, this.height);
        if (c) {
            g = l.createLinearGradient(this.nie.x, this.nie.y, this.nie.x + this.nie.width, this.nie.y);
            g.addColorStop(0.2, this.zlm);
            g.addColorStop(1, this.qxw);
            l.fillStyle = g;
            l.save();
            if (this.parent.odx === ysp.gof.ohj) {
                l.translate(this.nie.width / 2, this.nie.height / 2);
                l.rotate(Math.PI);
                l.translate(-this.nie.width / 2, -this.nie.height / 2)
            }
            l.fillRect(this.nie.x, this.nie.y, this.nie.width, this.nie.height);
            l.drawImage(c, this.nie.x, this.nie.y, this.nie.width, this.nie.height);
            l.restore()
        } else {
            if (this.parent.gof.jnb === true) {
                ysp.ekr.jry(l, this.nie.x, this.nie.y, this.nie.width, this.nie.height, this.zlm, 1)
            }
        }
        ysp.ekr.zlw(l, this.kem.x, this.kem.y, this.kem.width, this.kem.height, 0, this.nlj);
        ysp.ekr.trw(l, this.ury, this.ycy, this.kem.x, this.kem.y + this.fsv, this.kem.width, this.kem.height, this.pxf, this.ydz, this.tgp);
        ysp.ekr.zlw(l, this.koz.x, this.koz.y, this.koz.width, this.koz.height, 0, this.nlj);
        if (ysp.lct.value36) {
            ysp.ekr.pyk(l, this.parent.oxp(this.parent.language.tux), this.ycy, this.koz.x, this.koz.y + this.fsv, this.koz.width, this.koz.height, this.pxf, this.jow, this.tgp, this.kkd)
        } else {
            if (ysp.lct.value37) {
                ysp.ekr.pyk(l, this.parent.oxp(this.parent.language.rxc), this.ycy, this.koz.x, this.koz.y + this.fsv, this.koz.width, this.koz.height, this.pxf, this.jow, this.tgp, this.kkd)
            }
        }
        ysp.ekr.zlw(l, this.yer.x, this.yer.y, this.yer.width, this.yer.height, 0, this.nfe);
        ysp.ekr.pyk(l, this.parent.oxp(this.parent.language.bcz), this.ycy, this.yer.x, this.yer.y + this.fsv, this.yer.width, this.yer.height, this.pxf, this.jow, this.tgp, this.kkd);
        ysp.ekr.zlw(l, this.enx.x, this.enx.y, this.enx.width, this.enx.height, 0, this.nlj);
        ysp.ekr.pyk(l, this.parent.oxp(this.parent.language.dzp), this.ycy, this.enx.x, this.enx.y + this.fsv, this.enx.width, this.enx.height, this.pxf, this.jow, this.tgp, this.kkd);
        if (this.wpd) {
            this.fxd(l)
        }
        if (this.unn) {
            if (ysp.lct.value36) {
                ysp.ekr.vsi(l, this.rsg, this.ycy, this.koz.x, this.koz.y + this.fsv, this.koz.width, this.koz.height, this.pxf, this.jow, this.tgp, this.kkd)
            } else {
                if (ysp.lct.value37) {
                    ysp.ekr.vsi(l, this.wkv, this.ycy, this.koz.x, this.koz.y + this.fsv, this.koz.width, this.koz.height, this.pxf, this.jow, this.tgp, this.kkd)
                }
            }
            ysp.ekr.vsi(l, this.parent.thh(this.kbk), this.ycy, this.yer.x, this.yer.y + this.fsv, this.yer.width, this.yer.height, this.pxf, this.jow, this.tgp, this.kkd);
            ysp.ekr.vsi(l, this.parent.thh(this.qzx), this.ycy, this.enx.x, this.enx.y + this.fsv, this.enx.width, this.enx.height, this.pxf, this.jow, this.tgp, this.kkd)
        }
        for (var b = 0, e = this.gde.length; b < e; b++) {
            this.gde[b].cul()
        }
        if (this.sax) {
            ysp.ekr.ytc(l, this.dgl.x, this.dgl.y, this.dgl.width, this.dgl.height, this.qdr, this.jkd, 0.3, this.ypp, this.kuf, 1);
            ysp.ekr.trw(l, this.parent.oxp(this.parent.language.twa), this.ixr, this.dgl.x, this.dgl.y, this.dgl.width, this.dgl.height, this.pxf, this.jow, this.tgp)
        }
        l.restore();
        if (this.msg && this.hyg) {
            if (a) {
                this.msg.drawImage(this.hyg, j, f, k, d, this.x + j, this.y + f, k, d)
            } else {
                this.msg.drawImage(this.hyg, this.x, this.y)
            }
        }
    };
    this.fxd = function(b) {
        var c = Math.round(this.xib.height / 2),
            a = Math.round(this.xib.x + c),
            d = Math.round(this.xib.y + c / 2);
        b.save();
        ysp.ekr.zlw(b, this.xib.x, this.xib.y, this.xib.width, this.xib.height, this.ntn, this.yhn, this.dkp, this.kuf);
        ysp.ekr.trw(b, this.parent.language.ayy, this.ycy, this.xib.x + this.xib.height, this.xib.y, this.xib.width - this.xib.height, this.xib.height, this.pxf, this.tzv, this.tgp);
        ysp.ekr.jry(b, a, d, c, c, null, 0, this.kwf, this.kuf, 1);
        if (this.qey) {
            ysp.ekr.jry(b, a + c / 4, d + c / 4, c / 2, c / 2, this.kwf, 1)
        }
        b.restore()
    }
}
zsl.prototype = new fsx;

function yrj() {
    var a = this;
    this.kpo = function() {
        a.qty = false
    };
    this.cul = function() {
        if (!this.pod()) {
            return
        }
        var b = this.context2D;
        b.save();
        if (this.egq != null) {
            b.drawImage(this.egq, 0, 0, this.egq.width, this.egq.height, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
yrj.prototype = new nsi;

function xcm() {
    this.wrw = "";
    this.cxa = "";
    this.egq = null;
    this.qcb = "sans-serif";
    this.its = "sans-serif";
    this.tgp = "bold";
    this.ysb = null;
    this.ycy = null;
    this.vvu = null;
    this.tzr = null;
    this.nip = null;
    this.fnj = 16;
    this.vmi = 20;
    this.wus = 0;
    this.zaz = 0;
    this.kuf = 2;
    this.rdc = 3;
    this.ggk = 3;
    this.dwy = 3;
    this.fvz = 3;
    this.bih = function(a, e, b, d, c) {
        xcm.prototype.bih.call(this, a, e, b);
        this.wrw = d;
        this.cxa = c
    };
    this.uad = function(a) {
        try {
            this.fnj = a.huy;
            this.vmi = a.bmr;
            this.wus = a.hkg;
            this.zaz = a.rkz;
            this.kuf = a.qwc;
            this.rdc = a.dtf;
            this.ggk = a.oze;
            this.dwy = a.dpr;
            this.fvz = a.eru
        } catch (b) {
            console.error(b)
        }
    };
    this.ygz = function(a) {
        try {
            this.qcb = a.upg;
            this.its = a.bsy;
            this.tgp = a.nkj;
            this.ysb = a.kah;
            this.ycy = a.gqn;
            this.vvu = a.borderColor;
            this.tzr = a.tgc;
            this.nip = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.zev = function(a, b) {
        this.cxa = a;
        if (b && b === true && this.context2D != null && this.pod() === true) {
            this.parent.cul(this.x, this.y, this.width, this.height)
        }
    };
    this.sia = function(a, b) {
        this.wrw = a;
        if (b && b === true && this.context2D != null && this.pod() === true) {
            this.parent.cul(this.x, this.y, this.width, this.height)
        }
    };
    this.cul = function() {
        if (!this.pod()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.tzr) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.vvu);
            b.addColorStop(1, this.tzr);
            ysp.ekr.qrd(a, this.x, this.y, this.width, this.height, this.rdc, this.ggk, this.dwy, this.fvz, this.nip, 1, b, this.kuf, 1)
        } else {
            ysp.ekr.qrd(a, this.x, this.y, this.width, this.height, this.rdc, this.ggk, this.dwy, this.fvz, this.nip, 1, this.vvu, this.kuf, 1)
        }
        if (this.wrw != null) {
            ysp.ekr.trw(a, this.wrw, this.ysb, this.x + this.kuf, this.y + this.wus, this.width - 2 * this.kuf, this.height, this.qcb, this.fnj, this.tgp)
        }
        if (this.cxa != null) {
            if (this.wrw != null) {
                ysp.ekr.trw(a, this.cxa, this.ycy, this.x + this.kuf, this.y + this.zaz, this.width - 2 * this.kuf, this.height, this.its, this.vmi, this.tgp)
            } else {
                ysp.ekr.trw(a, this.cxa, this.ycy, this.x + this.kuf, this.y + this.kuf, this.width - 2 * this.kuf, this.height, this.its, this.vmi, this.tgp)
            }
        }
        if (this.egq) {
            a.drawImage(this.egq, 0, 0, this.egq.width, this.egq.height, this.x + this.kuf, this.y + this.kuf, this.width - 2 * this.kuf, this.height - 2 * this.kuf)
        }
        a.restore();
        if (this.msg && this.hyg) {
            this.msg.drawImage(this.hyg, this.x, this.y)
        }
    }
}
xcm.prototype = new fsx;

function dfx() {
    this.egq = new Image();
    this.cxa = "";
    this.uve = true;
    this.pxf = null;
    this.tgp = "bold";
    this.wck = "red";
    this.lbd = "orange";
    this.gns = "white";
    this.jow = 40;
    this.kkd = 0;
    this.fsv = 0;
    this.fqe = 0;
    this.oet = 2;
    this.ock = null;
    this.jza = 0;
    this.yck = 0;
    this.bih = function(a, e, c, b, d) {
        dfx.prototype.bih.call(this, a, e, c);
        this.egq = b;
        this.cxa = d
    };
    this.uad = function(a) {
        try {
            this.jow = a.fontSize;
            this.kkd = a.scp;
            this.fsv = a.dav;
            this.fqe = a.ilp;
            this.oet = a.six
        } catch (b) {
            console.error(b)
        }
    };
    this.ygz = function(a) {
        try {
            this.pxf = a.font;
            this.tgp = a.nkj;
            this.wck = a.idm;
            this.lbd = a.wqb;
            this.gns = a.elz
        } catch (b) {
            console.error(b)
        }
    };
    this.zev = function(a, b) {
        this.cxa = a;
        if (b && b === true && this.context2D != null) {
            this.coc(true, true)
        }
    };
    this.tok = function(a, b) {
        this.cxa = a;
        this.uve = false;
        if (b && b === true && this.context2D != null) {
            this.coc(true, true)
        }
    };
    this.coc = function(a, b) {
        this.wqo = a;
        if (b && b === true && this.context2D != null) {
            if (this.hyg == null && this.pod()) {
                this.cul()
            } else {
                if (this.parent != null) {
                    this.parent.cul(this.x, this.y, this.width, this.height)
                }
            }
        }
    };
    this.eug = function(a, b, c) {
        this.ock = a;
        this.jza = b;
        this.yck = c
    };
    this.cul = function() {
        if (!this.pod() || !this.parent.jpj()) {
            return
        }
        var b = this.context2D,
            c = null,
            a = (this.hyg != null) ? 0 : this.x,
            d = (this.hyg != null) ? 0 : this.y;
        b.save();
        if (this.hyg == null) {
            b.beginPath();
            b.rect(this.x, this.y, this.width, this.height);
            b.closePath();
            b.clip()
        }
        if (this.uve === true) {
            if (this.ock != null) {
                b.drawImage(this.ock, this.x + this.jza, this.y + this.yck, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            if (this.egq != null) {
                b.drawImage(this.egq, a, d)
            }
        }
        c = b.createLinearGradient(a + this.width / 2 + this.kkd, d, a + this.width / 2 + this.kkd, d + this.height);
        c.addColorStop(0, this.wck);
        c.addColorStop(1, this.lbd);
        ysp.ekr.trw(b, this.cxa, c, a + this.fqe + this.kkd, d + this.fsv, this.width - 2 * this.fqe, this.height, this.pxf, this.jow, this.tgp, this.gns, this.oet);
        b.restore();
        if (this.msg && this.hyg) {
            this.msg.drawImage(this.hyg, this.x, this.y)
        }
    }
}
dfx.prototype = new fsx;

function nqo() {
    var a = this;
    this.state = 0;
    this.oqx = 1;
    this.qgx = null;
    this.drd = null;
    this.yme = null;
    this.azh = "round";
    this.pxf = null;
    this.tgp = "bold";
    this.vsh = "center";
    this.nip = null;
    this.ycy = null;
    this.piz = 1;
    this.axo = null;
    this.jow = 17;
    this.fqe = 2;
    this.tri = 0;
    this.kuf = 1;
    this.xcs = 0;
    this.rxi = 0;
    this.gkx = 0;
    this.uad = function(b) {
        try {
            this.jow = b.fontSize;
            this.fqe = b.ilp;
            this.tri = b.dym;
            this.kuf = b.qwc;
            this.gkx = b.pnk
        } catch (c) {
            console.error(c)
        }
    };
    this.ygz = function(b) {
        try {
            this.azh = b.qcv;
            this.pxf = b.font;
            this.tgp = b.nkj;
            this.vsh = b.textAlign;
            this.nip = b.backgroundColor;
            this.ycy = b.gqn;
            this.piz = b.chj;
            if (b.borderColor && b.tgc) {
                this.axo = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.axo.addColorStop(0, b.borderColor);
                this.axo.addColorStop(1, b.tgc)
            } else {
                this.axo = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.fso = function() {
        return this.azh
    };
    this.beu = function(c, b) {
        this.state = c;
        this.oqx = b
    };
    this.gnk = function(b) {
        this.egq = b;
        if (this.azh === "round") {
            this.xcs = this.width / 2 - this.fqe
        }
        if (this.egq) {
            this.rxi = Math.round(this.egq.height / (2 * this.oqx))
        }
    };
    this.ogm = function(b) {
        this.state = (b < this.oqx) ? b : this.state
    };
    this.yxf = function(b) {
        this.qgx = b
    };
    this.kpo = function() {
        a.qty = false
    };
    this.vcc = function() {
        a.lyg = false;
        if (a.pod()) {
            a.parent.cul(a.x, a.y, a.width, a.height)
        }
    };
    this.cul = function() {
        if (!this.pod()) {
            return
        }
        var l = this.context2D,
            e = (this.aqx()) ? this.piz : this.piz / 2,
            b = this.jow,
            d = null,
            c = 0,
            k = 0,
            j = 0,
            g = 0;
        l.save();
        if (this.egq && this.jan) {
            if (!this.aqx()) {
                l.globalAlpha = e
            }
            if (this.azh === "round") {
                ysp.ekr.sph(l, this.x + this.width / 2, this.y + this.height / 2, this.xcs, this.nip, e * this.piz)
            } else {
                if (this.azh === "rect") {
                    ysp.ekr.ytc(l, this.x, this.y, this.width, this.height, this.tri, this.nip, e * this.piz, this.axo, this.kuf, e)
                }
            }
            if (this.rqv()) {
                if (this.azh === "round") {
                    l.drawImage(this.egq, 0, (this.state * 2 * this.rxi) + this.rxi, this.egq.width, this.rxi, this.x, this.y, this.width, this.height)
                } else {
                    if (this.azh === "rect") {
                        l.drawImage(this.egq, 0, (this.state * 2 * this.rxi) + this.rxi, this.egq.width, this.rxi, this.x, this.y, this.width, this.height)
                    }
                }
            } else {
                if (this.azh === "round") {
                    l.drawImage(this.egq, 0, (this.state * 2 * this.rxi), this.egq.width, this.rxi, this.x, this.y, this.width, this.height)
                } else {
                    if (this.azh === "rect") {
                        l.drawImage(this.egq, 0, (this.state * 2 * this.rxi), this.egq.width, this.rxi, this.x, this.y, this.width, this.height)
                    }
                }
            }
            if (this.cxa != null) {
                l.textAlign = this.vsh;
                l.textBaseline = "bottom";
                l.font = this.tgp + " " + b + "px " + this.pxf;
                l.fillStyle = this.ycy;
                d = this.cxa.split("|");
                j = 0;
                g = (this.vsh === "center") ? this.x + this.width / 2 : (this.vsh === "left") ? this.x + 2 * this.fqe : this.x + this.width - 2 * this.fqe;
                for (var f = 0; f < d.length; f++) {
                    j = (l.measureText(d[f]).width > j) ? l.measureText(d[f]).width : j
                }
                if (j > this.width - 2 * this.fqe) {
                    c = ((this.width - 2 * this.fqe) / j);
                    b = Math.round(c * b) - 1;
                    l.font = this.tgp + " " + b + "px " + this.pxf
                }
                if (b * d.length > this.gkx) {
                    c = ((this.gkx) / (b * d.length));
                    b = Math.round(c * b) - 1;
                    l.font = this.tgp + " " + b + "px " + this.pxf
                }
                k = (this.height - this.fqe - this.gkx) + (this.gkx - b * d.length) / 2;
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
nqo.prototype = new nsi;

function meq() {
    var a = this;
    this.azh = "rect";
    this.sjx = -1;
    this.pxf = null;
    this.tgp = "bold";
    this.nip = null;
    this.hlr = null;
    this.wna = null;
    this.obt = null;
    this.vvu = null;
    this.ycy = null;
    this.sok = null;
    this.tri = 3;
    this.kkd = -2;
    this.fsv = 2;
    this.muh = 6;
    this.jow = 26;
    this.kuf = 2;
    this.uad = function(b) {
        try {
            this.jow = b.fontSize;
            this.kkd = b.scp;
            this.fsv = b.dav;
            this.muh = b.vth;
            this.tri = b.dym;
            this.kuf = b.qwc
        } catch (c) {
            console.error(c)
        }
    };
    this.ygz = function(b) {
        try {
            this.pxf = b.font;
            this.tgp = b.nkj;
            this.nip = b.backgroundColor;
            this.hlr = b.zio;
            this.wna = b.mzp;
            this.obt = b.ddk;
            this.vvu = b.borderColor;
            this.ycy = b.gqn;
            this.sok = b.cya;
            this.azh = b.qcv;
            this.sjx = b.etr
        } catch (c) {
            console.error(c)
        }
    };
    this.fso = function() {
        return this.azh
    };
    this.kpo = function() {
        a.qty = false
    };
    this.vcc = function() {
        a.lyg = false;
        if (a.pod()) {
            a.parent.cul(a.x, a.y, a.width, a.height)
        }
    };
    this.cul = function() {
        if (!this.pod()) {
            return
        }
        var p = this.context2D,
            l = null,
            n = this.nip,
            m = this.hlr,
            b = this.jow,
            f = null,
            d = 0,
            o = 0,
            c = 1,
            k = 0,
            e = (this.sjx == 0 || this.sjx == 3) ? this.tri : 0;
        lt = (this.sjx == 1 || this.sjx == 3) ? this.tri : 0;
        rb = (this.sjx == 0 || this.sjx == 2) ? this.tri : 0;
        lb = (this.sjx == 1 || this.sjx == 2) ? this.tri : 0;
        h = 0;
        p.save();
        p.lineJoin = "round";
        p.lineCap = "round";
        p.textAlign = "center";
        if (this.rqv()) {
            n = (this.wna != null) ? this.wna : n;
            m = (this.obt != null) ? this.obt : m
        }
        if (n != null) {
            if (m != null) {
                l = p.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                l.addColorStop(1, m);
                l.addColorStop(0, n);
                if (this.azh === "rrect") {
                    ysp.ekr.qrd(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, l, 1, this.vvu, this.kuf, 1)
                } else {
                    if (this.azh === "rect") {
                        if (this.vvu) {
                            ysp.ekr.zlw(p, this.x, this.y, this.width, this.height, this.tri, l, this.vvu, this.kuf)
                        } else {
                            ysp.ekr.jry(p, this.x, this.y, this.width, this.height, l, 1)
                        }
                    } else {
                        if (this.azh === "triangle") {
                            ysp.ekr.qut(p, this.sjx, this.x, this.y, this.width, this.height, this.tri, l, 1, this.vvu, this.kuf, 1)
                        }
                    }
                }
            } else {
                if (this.azh === "rrect") {
                    ysp.ekr.qrd(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, n, 1, this.vvu, this.kuf, 1)
                } else {
                    if (this.azh === "rect") {
                        if (this.vvu) {
                            ysp.ekr.zlw(p, this.x, this.y, this.width, this.height, this.tri, n, this.vvu, this.kuf, 1)
                        } else {
                            ysp.ekr.jry(p, this.x, this.y, this.width, this.height, n, 1)
                        }
                    } else {
                        if (this.azh === "triangle") {
                            ysp.ekr.qut(p, this.sjx, this.x, this.y, this.width, this.height, this.tri, n, 1, this.vvu, this.kuf, 1)
                        }
                    }
                }
            }
        }
        if (this.egq != null) {
            h = this.height - 2 * this.muh;
            p.drawImage(this.egq, this.x + this.width / 2 - h / 2, this.y + this.muh, h, h)
        }
        if (this.cxa != null) {
            p.textAlign = "center";
            p.textBaseline = "bottom";
            f = this.cxa.split("|");
            d = 0;
            if (this.rqv()) {
                d = 1;
                p.fillStyle = this.sok
            } else {
                p.fillStyle = this.ycy
            }
            p.font = this.tgp + " " + b + "px " + this.pxf;
            for (var g = 0, j = f.length; g < j; g++) {
                o = (p.measureText(f[g]).width > o) ? p.measureText(f[g]).width : o
            }
            if (o > this.width - 2 * this.muh) {
                c = ((this.width - 2 * this.muh) / o);
                b = Math.round(c * b) - 1;
                p.font = this.tgp + " " + b + "px " + this.pxf
            }
            if (b * f.length > this.height) {
                c = ((this.height) / (b * f.length));
                b = Math.round(c * b) - 1;
                p.font = this.tgp + " " + b + "px " + this.pxf
            }
            k = (this.height - b * f.length) / 2;
            k += b;
            for (var g = 0; g < f.length; g++) {
                p.fillText(f[g], (this.x + this.width / 2) + this.kkd, this.y - this.fsv + k + d);
                k += b
            }
        }
        p.restore()
    }
}
meq.prototype = new nsi;

function zai() {
    var a = this;
    this.cxa = null;
    this.kvs = false;
    this.qty = false;
    this.lfp = false;
    this.pxf = null;
    this.tgp = "bold";
    this.vsh = "center";
    this.nip = null;
    this.vvu = null;
    this.ycy = null;
    this.zrq = "rect";
    this.fsc = new pjy();
    this.djx = new pjy();
    this.jow = 16;
    this.tri = 8;
    this.kuf = 1;
    this.pcp = 0;
    var b = 200;
    this.bih = function(c, f, d, e) {
        this.cxa = e;
        zai.prototype.bih.call(this, c, f, d)
    };
    this.ygz = function(c) {
        try {
            this.pxf = c.font;
            this.tgp = c.nkj;
            this.vsh = c.textAlign;
            this.nip = c.backgroundColor;
            this.vvu = c.borderColor;
            this.ycy = c.gqn;
            this.zrq = c.type
        } catch (d) {
            console.error(d)
        }
    };
    this.uad = function(c) {
        try {
            this.fsc = c.ejr;
            this.djx = c.ryi;
            this.jow = c.fontSize;
            this.tri = c.dym;
            this.kuf = c.qwc
        } catch (d) {
            console.error(d)
        }
    };
    this.cgv = function(c) {
        this.kvs = c
    };
    this.aqx = function() {
        return this.kvs
    };
    this.noo = function(c, d) {
        this.lfp = c;
        if (d && d === true) {
            this.parent.cul(this.x, this.y, this.width, this.height)
        }
    };
    this.srz = function() {
        return this.lfp
    };
    this.zev = function(c, d) {
        this.cxa = c;
        if (d && d === true && this.pod()) {
            this.parent.cul(this.x, this.y, this.width, this.height)
        }
    };
    this.kbg = function(c, d) {
        this.qty = c;
        d = (d === false) ? false : true;
        clearTimeout(this.pcp);
        if (this.qty === true && d === true) {
            this.pcp = setTimeout(this.kpo, b)
        }
    };
    this.pqi = function() {
        return this.qty
    };
    this.kpo = function() {
        a.qty = false
    };
    this.cul = function() {
        if (!this.pod()) {
            return
        }
        var c = this.context2D;
        c.save();
        ysp.ekr.zlw(c, this.x, this.y, this.width, this.height, this.tri, this.nip, this.vvu, this.kuf);
        if (this.zrq === "rect") {
            ysp.ekr.jry(c, this.x + this.djx.x, this.y + this.djx.y, this.djx.width, this.djx.height, this.ycy, 0.2, this.ycy, this.kuf, 1);
            if (this.lfp === true) {
                ysp.ekr.jry(c, this.x + this.djx.x + this.djx.width / 4, this.y + this.djx.y + this.djx.height / 4, this.djx.width / 2, this.djx.height / 2, this.ycy, 1)
            }
        } else {
            if (this.zrq === "round") {
                ysp.ekr.sph(c, this.x + this.djx.x + this.djx.width / 2, this.y + this.djx.y + this.djx.height / 2, this.djx.width / 2, this.ycy, 0.2, this.ycy, this.kuf, 1);
                if (this.lfp === true) {
                    ysp.ekr.sph(c, this.x + this.djx.x + this.djx.width / 2, this.y + this.djx.y + this.djx.height / 2, this.djx.width / 4, this.ycy, 1)
                }
            }
        }
        if (this.cxa && this.cxa != "") {
            ysp.ekr.lwj(c, this.cxa, this.ycy, this.x + this.fsc.x, this.y + this.fsc.y, this.fsc.width, this.fsc.height, this.pxf, this.jow, this.tgp, this.vsh, true)
        }
        c.restore();
        if (this.msg && this.hyg) {
            this.msg.drawImage(this.hyg, this.x, this.y)
        }
    };
    this.jan = {}
}
zai.prototype = new fsx;

function hiu() {
    var b = this;
    var c = 0;
    var a = 1;
    this.qbw = null;
    this.wrw = "";
    this.vgi = "";
    this.rjs = "";
    this.jsz = "";
    this.aax = false;
    this.rsg = [];
    this.wtk = 0;
    this.nqp = 0;
    this.hvy = 0;
    this.mon = 0;
    this.udn = 0;
    this.gwg = 0;
    this.ndj = 0;
    this.jsn = 0;
    this.vbn = false;
    this.vts = false;
    this.yin = false;
    this.zrq = "center";
    this.pxf = "arial";
    this.tgp = "bold";
    this.ysb = "white";
    this.ycy = "white";
    this.nip = "black";
    this.hlr = null;
    this.vvu = "white";
    this.tzr = "rgb(150,150,150)";
    this.zlm = null;
    this.bbd = null;
    this.kuf = 3;
    this.ayd = 0;
    this.hnv = 0;
    this.xgx = 0;
    this.fnj = 30;
    this.lew = 24;
    this.kem = new pjy();
    this.gus = new pjy();
    this.hiy = new pjy();
    this.qdn = new pjy();
    this.ykv = new pjy();
    this.ibh = new pjy();
    this.jbb = new pjy();
    this.nxp = new pjy();
    this.ffw = new pjy();
    this.wad = 7;
    this.rzv = 0;
    this.amt = 0;
    this.rae = 0;
    this.dqh = c;
    this.tao = 0;
    this.rzw = 89;
    this.hjf = false;
    this.wok = 0;
    this.tyb = 0;
    this.akb = 0;
    this.vvh = 0;
    this.hcy = null;
    this.qby = 0;
    this.fkh = 1;
    this.zyf = 250;
    this.bih = function(d, f, e) {
        hiu.prototype.bih.call(this, d, f, e);
        this.qbw = new irf();
        this.qbw.bih();
        this.qbw.vpa("buttons");
        this.qbw.vpa("checkboxes");
        this.qbw.vpa("displays");
        this.qbw.vpa("lbuttons");
        this.qbw.vpa("mbuttons");
        this.qbw.vpa("vbuttons");
        this.qbw.vpa("cbuttons")
    };
    this.uki = function(d) {
        try {
            this.kuu(d);
            this.fci(d)
        } catch (f) {
            console.error(f)
        }
    };
    this.ygz = function(k) {
        try {
            var n = this.qbw.fbh("lbuttons"),
                m = this.qbw.fbh("mbuttons"),
                f = this.qbw.fbh("cbuttons"),
                g = this.qbw.fbh("displays");
            this.zrq = k.type;
            this.pxf = k.font;
            this.tgp = k.nkj;
            this.ysb = k.kah;
            this.ycy = k.gqn;
            this.nip = k.backgroundColor;
            this.hlr = k.zio;
            this.vvu = k.borderColor;
            this.zlm = k.tna;
            this.bbd = k.vwg;
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].ygz(k.olo)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].ygz(k.ses)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].ygz(k.kyi)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].ygz(k.display)
            }
            this.qbw.nhs("checkboxes", "#ygz", [k.lsa])
        } catch (l) {
            console.error(l)
        }
    };
    this.uad = function(k) {
        try {
            var n = this.qbw.fbh("lbuttons"),
                m = this.qbw.fbh("mbuttons"),
                f = this.qbw.fbh("cbuttons"),
                g = this.qbw.fbh("displays");
            this.kuf = k.qwc;
            this.ayd = k.gmt;
            this.hnv = k.pcr;
            this.xgx = k.loo;
            this.fnj = k.huy;
            this.lew = k.tmt;
            this.kem = k.tus;
            this.gus = k.ypx;
            this.hiy = k.udz;
            this.qdn = k.shw;
            this.ykv = k.omw;
            this.ibh = k.gru;
            this.qbw.tpi("lgames", "#srt", [k.fgp]);
            this.qbw.tpi("mgames", "#srt", [k.swb]);
            this.qbw.tpi("lmincredit", "#srt", [k.khi]);
            this.qbw.tpi("mmincredit", "#srt", [k.iuo]);
            this.qbw.tpi("lmaxcredit", "#srt", [k.vpm]);
            this.qbw.tpi("mmaxcredit", "#srt", [k.rhq]);
            this.qbw.tpi("lmaxwin", "#srt", [k.svy]);
            this.qbw.tpi("mmaxwin", "#srt", [k.hjv]);
            this.qbw.tpi("start", "#srt", [k.cet]);
            this.qbw.tpi("cancel", "#srt", [k.fnw]);
            this.qbw.tpi("gamesd", "#srt", [k.zxo]);
            this.qbw.tpi("mincreditd", "#srt", [k.wzg]);
            this.qbw.tpi("maxcreditd", "#srt", [k.omz]);
            this.qbw.tpi("maxwind", "#srt", [k.cvl]);
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].uad(k.olo)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].uad(k.ses)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].uad(k.kyi)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].uad(k.display)
            }
            this.qbw.tpi("cmincredit", "#srt", [k.mtu]);
            this.qbw.tpi("cmaxcredit", "#srt", [k.asu]);
            this.qbw.tpi("cmaxwin", "#srt", [k.lpa]);
            this.qbw.nhs("checkboxes", "#uad", [k.lsa])
        } catch (l) {
            console.error(l)
        }
    };
    this.kuu = function(d) {
        this.qbw.zth("start", this.rda(d.cet, this.parent.language.start, this.cdn, this.parent.wjo.txp), ["buttons", "cbuttons"]);
        this.qbw.zth("cancel", this.rda(d.fnw, this.parent.language.nbg, this.vwk, this.parent.wjo.rei), ["buttons", "cbuttons"]);
        this.qbw.zth("lgames", this.rda(d.fgp, "-", this.uxx, null), ["buttons", "lbuttons", "vbuttons"]);
        this.qbw.zth("mgames", this.rda(d.swb, "+", this.vrt, null), ["buttons", "mbuttons", "vbuttons"]);
        this.qbw.zth("lmincredit", this.rda(d.khi, "-", this.haj, null), ["buttons", "lbuttons", "vbuttons"]);
        this.qbw.zth("mmincredit", this.rda(d.iuo, "+", this.uma, null), ["buttons", "mbuttons", "vbuttons"]);
        this.qbw.zth("lmaxcredit", this.rda(d.vpm, "-", this.xik, null), ["buttons", "lbuttons", "vbuttons"]);
        this.qbw.zth("mmaxcredit", this.rda(d.rhq, "+", this.apa, null), ["buttons", "mbuttons", "vbuttons"]);
        this.qbw.zth("lmaxwin", this.rda(d.svy, "-", this.jst, null), ["buttons", "lbuttons", "vbuttons"]);
        this.qbw.zth("mmaxwin", this.rda(d.hjv, "+", this.qgg, null), ["buttons", "mbuttons", "vbuttons"]);
        this.qbw.zth("cmincredit", this.tup(d.mtu, "", this.gtm), ["checkboxes"]);
        this.qbw.zth("cmaxcredit", this.tup(d.asu, "", this.hig), ["checkboxes"]);
        this.qbw.zth("cmaxwin", this.tup(d.lpa, "", this.zeq), ["checkboxes"])
    };
    this.fci = function(d) {
        this.qbw.zth("gamesd", this.nxs(d.zxo, null, (this.rsg[this.wtk] > 0) ? this.rsg[this.wtk] : "---"), ["displays"]);
        this.qbw.zth("mincreditd", this.nxs(d.wzg, null, "---"), ["displays"]);
        this.qbw.zth("maxcreditd", this.nxs(d.omz, null, "---"), ["displays"]);
        this.qbw.zth("maxwind", this.nxs(d.cvl, null, "---"), ["displays"])
    };
    this.nxs = function(d, g, f) {
        var e = new xcm();
        e.bih(d, this.context2D, null, g, f);
        e.parent = this;
        return e
    };
    this.rda = function(f, i, g, e) {
        var d = new meq();
        d.bih(f, this.context2D, null, null, i);
        d.parent = this;
        d.jan = g;
        if (e) {
            d.zzo = e.okl
        }
        return d
    };
    this.tup = function(e, g, f) {
        var d = new zai();
        d.bih(e, this.context2D, null, g);
        d.parent = this;
        d.jan = f;
        return d
    };
    this.xba = function(r, n) {
        var s = this.qbw.fbh("vbuttons"),
            l = this.qbw.fbh("cbuttons"),
            g = this.qbw.fbh("checkboxes"),
            p = this.qbw.qmc("cancel"),
            q = r - this.x,
            o = n - this.y;
        if (this.xuo) {
            return true
        }
        if ((!p || !p.pod()) && (r < this.x || r > this.x + this.width || n < this.y || n > this.y + this.height)) {
            this.yin = true;
            this.uaw();
            return true
        }
        for (var f = 0, m = s.length; f < m; f++) {
            var d = s[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.pod() === true && d.aqx() === true && d.pqi() === false) {
                    d.evd(true, false, false);
                    this.qby = 0;
                    this.fkh = 1;
                    if (d.jan() === false) {
                        this.hcy = function() {
                            if (d.jan() === true) {
                                clearInterval(b.vvh);
                                d.evd(false, false);
                                b.parent.cul();
                                for (var i = 0; i < m; i++) {
                                    s[i].kbg(false)
                                }
                            }
                        };
                        this.vvh = setInterval(this.hcy, this.zyf)
                    }
                    for (var e = 0; e < m; e++) {
                        s[e].kbg(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = l.length; f < m; f++) {
            var d = l[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.pod() === true && d.aqx() === true) {
                    this.parent.wba.ntp("btn");
                    this.parent.wba.dyw("btn");
                    d.evd(true, false);
                    d.jan();
                    for (var e = 0; e < m; e++) {
                        l[e].kbg(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = g.length; f < m; f++) {
            var k = g[f];
            if (q >= k.x && q <= k.x + k.width && o >= k.y && o <= k.y + k.height) {
                if (k.pod() === true && k.aqx() === true) {
                    k.noo(!k.srz(), true);
                    k.jan();
                    for (var e = 0; e < m; e++) {
                        g[e].kbg(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.opg = function() {
        var e = this.qbw.fbh("vbuttons"),
            j = this.qbw.fbh("cbuttons");
        for (var g = 0, d = e.length; g < d; g++) {
            var f = e[g];
            if (f.rqv() == true) {
                clearInterval(this.vvh);
                f.evd(false, false);
                this.parent.cul();
                return true
            }
        }
        for (var g = 0, d = j.length; g < d; g++) {
            var f = j[g];
            if (f.rqv() == true) {
                f.evd(false, false);
                this.parent.cul();
                return true
            }
        }
        return false
    };
    this.zfi = function(l) {
        var k = this.qbw.fbh("buttons");
        if (this.xuo) {
            return true
        }
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l == f.zzo) {
                if (f.aqx() && !f.pqi()) {
                    this.parent.wba.ntp("btn");
                    this.parent.wba.dyw("btn");
                    f.evd(true, false);
                    f.jan();
                    for (var e = 0; e < d; e++) {
                        k[e].kbg(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.unq = function() {
        var g = this.qbw.fbh("buttons");
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.rqv() == true) {
                e.evd(false, false);
                this.parent.cul();
                return true
            }
        }
        return false
    };
    this.jjr = function(d) {
        this.qbw.nhs("buttons", "#cgv", [d]);
        this.qbw.nhs("checkboxes", "#cgv", [d]);
        if (d === true && this.vts === true) {
            this.qbw.tpi("cmincredit", "#cgv", [false])
        }
    };
    this.pel = function(d) {
        this.rsg = d.g;
        this.nqp = d.v;
        this.hvy = d.v;
        this.vbn = d.r;
        this.vts = d.l;
        if (typeof d.m != "undefined" && d.m != null && d.m > 0) {
            this.mon = d.m;
            this.udn = d.m
        }
    };
    this.bsk = function() {
        if (this.vbn === true) {
            this.gwg = this.parent.lmm;
            this.ndj = this.parent.lmm;
            this.wtk = 0;
            this.jsn = 0
        }
    };
    this.yul = function() {
        if (this.rsg.length > 0 && this.wtk >= 0 && this.yin === false) {
            return this.rsg[this.wtk]
        }
        return 0
    };
    this.iyu = function() {
        var d = this.qbw.qmc("cmincredit") == null || this.qbw.tpi("cmincredit", "#srz");
        if (this.gwg > 0 && d === true) {
            return this.gwg
        }
        return 0
    };
    this.wkp = function() {
        var d = this.qbw.qmc("cmaxcredit") == null || this.qbw.tpi("cmaxcredit", "#srz");
        if (this.ndj > 0 && d === true) {
            return this.ndj
        }
        return 0
    };
    this.vwc = function() {
        var d = this.qbw.qmc("cmaxwin") == null || this.qbw.tpi("cmaxwin", "#srz");
        if (this.jsn > 0 && d === true) {
            return this.jsn
        }
        return 0
    };
    this.ogy = function() {
        var f = this.qbw.qmc("cmincredit") == null || this.qbw.tpi("cmincredit", "#srz"),
            d = this.qbw.qmc("cmaxcredit") == null || this.qbw.tpi("cmaxcredit", "#srz"),
            e = this.qbw.qmc("cmaxwin") == null || this.qbw.tpi("cmaxwin", "#srz");
        this.hjf = false;
        this.yin = false;
        this.hvy = (this.udn > 0) ? this.parent.ifg() * this.udn : this.hvy;
        this.nqp = (this.mon > 0) ? this.parent.ifg() * this.mon : this.nqp;
        if (this.vbn === true) {
            f = this.vts;
            d = false;
            e = false;
            this.bsk()
        } else {
            if (this.vts === true) {
                f = true;
                this.gwg = (this.gwg < this.parent.lmm) ? this.gwg : this.parent.lmm;
                this.gwg = (this.gwg > 0) ? this.gwg : this.parent.lmm
            } else {
                f = (this.gwg <= this.parent.lmm) ? f : false;
                this.gwg = (this.gwg < this.parent.lmm) ? this.gwg : this.parent.lmm
            }
            d = (this.ndj >= this.parent.lmm) ? d : false;
            this.ndj = (this.ndj > this.parent.lmm) ? this.ndj : this.parent.lmm
        }
        this.qbw.tpi("cmincredit", "#noo", [f]);
        this.qbw.tpi("cmaxcredit", "#noo", [d]);
        this.qbw.tpi("cmaxwin", "#noo", [e]);
        this.qbw.tpi("gamesd", "#zev", [(this.rsg[this.wtk] > 0) ? this.rsg[this.wtk] : "---"]);
        this.qbw.tpi("mincreditd", "#zev", [(f === true && this.gwg > 0) ? this.parent.thh(this.gwg) : "---"]);
        this.qbw.tpi("maxcreditd", "#zev", [(d === true && this.ndj > 0) ? this.parent.thh(this.ndj) : "---"]);
        this.qbw.tpi("maxwind", "#zev", [(e === true && this.jsn > 0) ? this.parent.thh(this.jsn) : "---"]);
        this.qbw.tpi("lmincredit", "#coc", [f]);
        this.qbw.tpi("mmincredit", "#coc", [f && this.gwg < this.parent.lmm]);
        this.qbw.tpi("lmaxcredit", "#coc", [d && this.ndj > this.parent.lmm]);
        this.qbw.tpi("mmaxcredit", "#coc", [d]);
        this.qbw.tpi("lmaxwin", "#coc", [e && this.jsn > this.hvy]);
        this.qbw.tpi("mmaxwin", "#coc", [e]);
        if (this.aax === false) {
            this.jjr(true);
            this.coc(true);
            this.parent.cul()
        } else {
            this.kzy();
            this.parent.wba.ntp("panel_out");
            this.parent.wba.dyw("panel_out");
            this.rav()
        }
    };
    this.uaw = function() {
        b.jjr(false);
        if (b.aax === false) {
            b.coc(false);
            b.parent.cul()
        } else {
            b.mrq();
            b.parent.wba.ntp("panel_out");
            b.parent.wba.dyw("panel_out");
            b.rav()
        }
    };
    this.kzy = function() {
        this.coc(true);
        this.xuo = true;
        this.kvs = false;
        this.dqh = c;
        this.rzv = Math.floor(this.width / this.wad);
        this.rae = 0;
        this.amt = 0;
        this.tao = new Date().getTime()
    };
    this.mrq = function() {
        this.xuo = true;
        this.kvs = false;
        this.dqh = a;
        this.rzv = -Math.floor(this.width / this.wad);
        this.rae = 1;
        this.amt = this.width;
        this.tao = new Date().getTime()
    };
    this.rav = function() {
        var d = b.rzw,
            e = new Date().getTime();
        if (b.rae < b.wad) {
            b.amt += b.rzv;
            b.rae++;
            b.parent.cul();
            d = (((b.dqh === a) ? b.rae - 1 : b.rae) * b.rzw - (e - b.tao));
            b.wok = setTimeout(b.rav, d)
        } else {
            b.xuo = false;
            b.kvs = true;
            if (b.dqh == a) {
                b.coc(false);
                b.parent.vrh();
                if (b.hjf === true) {
                    b.tyb = setTimeout(b.parent.fzx, 200)
                }
            } else {
                if (b.dqh == c) {
                    b.jjr(true)
                }
            }
            b.parent.cul()
        }
    };
    this.stop = function() {
        clearTimeout(this.wok);
        clearTimeout(this.akb);
        clearTimeout(this.tyb);
        clearInterval(this.vvh)
    };
    this.ree = function(d) {
        this.wrw = d.isl;
        this.vgi = d.ssg;
        this.rjs = d.nra;
        this.qbw.tpi("start", "#zev", [d.start]);
        this.qbw.tpi("cancel", "#zev", [d.nbg]);
        this.qbw.tpi("cmincredit", "#zev", [d.gew]);
        this.qbw.tpi("cmaxcredit", "#zev", [d.sbg]);
        this.qbw.tpi("cmaxwin", "#zev", [d.vpx]);
        if (this.parent.ser === true && ysp.lct.value44.d === true) {
            this.jsz = d.mgc
        }
    };
    this.cul = function(n, m, o, j) {
        if (!this.pod()) {
            return
        }
        var f = (n != null && m != null && o != null && j != null),
            p = this.context2D,
            d = this.qbw.dla(),
            e = this.nip,
            l = this.vvu;
        if (this.hlr) {
            e = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            e.addColorStop(0, this.nip);
            e.addColorStop(1, this.hlr)
        }
        if (this.tzr) {
            if (this.zrq === "center") {
                l = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height)
            } else {
                if (this.zrq === "left") {
                    l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                } else {
                    if (this.zrq === "right") {
                        l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                    }
                }
            }
            if (this.zrq === "left") {
                l.addColorStop(1, this.vvu);
                l.addColorStop(0, this.tzr)
            } else {
                if (this.zrq === "center" || this.zrq === "right") {
                    l.addColorStop(0, this.vvu);
                    l.addColorStop(1, this.tzr)
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
        ysp.ekr.qrd(p, 0, 0, this.width, this.height, this.ayd, this.hnv, this.hnv, this.ayd, e, 1, l, this.kuf, 1);
        ysp.ekr.zlw(p, this.hiy.x, this.hiy.y, this.hiy.width, this.hiy.height, this.xgx, this.zlm, this.bbd, this.kuf / 2);
        ysp.ekr.zlw(p, this.ykv.x, this.ykv.y, this.ykv.width, this.ykv.height, this.xgx, this.zlm, this.bbd, this.kuf / 2);
        ysp.ekr.trw(p, this.wrw, this.ysb, this.kem.x, this.kem.y, this.kem.width, this.kem.height, this.pxf, this.fnj, this.tgp);
        ysp.ekr.lwj(p, this.jsz, this.ycy, this.gus.x, this.gus.y, this.gus.width, this.gus.height, this.pxf, this.lew, this.tgp, "center", true);
        ysp.ekr.pyk(p, this.vgi, this.ycy, this.qdn.x, this.qdn.y, this.qdn.width, this.qdn.height, this.pxf, this.lew, this.tgp, 0);
        ysp.ekr.trw(p, this.rjs, this.ycy, this.ibh.x, this.ibh.y, this.ibh.width, this.ibh.height, this.pxf, this.lew, this.tgp);
        for (var g = 0, k = d.length; g < k; g++) {
            d[g].cul()
        }
        p.restore();
        if (this.msg && this.hyg) {
            if (this.xuo) {
                if (this.amt > 0) {
                    if (this.zrq === "left") {
                        this.msg.drawImage(this.hyg, this.width - this.amt, 0, this.amt, this.height, this.x, this.y, this.amt, this.height)
                    } else {
                        if (this.zrq === "right") {
                            this.msg.drawImage(this.hyg, 0, 0, this.amt, this.height, this.x + this.width - this.amt, this.y, this.amt, this.height)
                        }
                    }
                }
            } else {
                if (f) {
                    this.msg.drawImage(this.hyg, n, m, o, j, this.x + n, this.y + m, o, j)
                } else {
                    this.msg.drawImage(this.hyg, this.x, this.y)
                }
            }
        }
    };
    this.cdn = function() {
        b.parent.cul();
        if (b.rsg[b.wtk] <= 0) {
            return
        }
        if (b.aax === false) {
            b.akb = setTimeout(b.parent.vrh, 400);
            b.tyb = setTimeout(b.parent.fzx, 500)
        } else {
            b.xuo = true;
            b.hjf = true;
            b.akb = setTimeout(b.uaw, 400)
        }
    };
    this.vwk = function() {
        b.parent.cul();
        b.yin = true;
        if (b.aax === false) {
            b.akb = setTimeout(b.parent.vrh, 400)
        } else {
            b.xuo = true;
            b.akb = setTimeout(b.uaw, 400)
        }
    };
    this.vrt = function() {
        b.wtk = (b.wtk < b.rsg.length - 1) ? b.wtk + 1 : 0;
        b.parent.wba.dyw("step0");
        b.qbw.tpi("gamesd", "#zev", [(b.rsg[b.wtk] > 0) ? b.rsg[b.wtk] : "---"]);
        b.parent.cul();
        return (b.wtk >= b.rsg.length - 1)
    };
    this.uxx = function() {
        b.wtk = (b.wtk > 0) ? b.wtk - 1 : b.rsg.length - 1;
        b.parent.wba.dyw("step0");
        b.qbw.tpi("gamesd", "#zev", [(b.rsg[b.wtk] > 0) ? b.rsg[b.wtk] : "---"]);
        b.parent.cul();
        return (b.wtk <= 0)
    };
    this.uma = function() {
        var d = b.qbw.qmc("cmincredit") == null || b.qbw.tpi("cmincredit", "#srz");
        if (d === true) {
            if (++b.qby > 10) {
                b.fkh = 10
            }
            b.gwg = (b.gwg + (b.nqp * b.fkh) <= b.parent.lmm) ? b.gwg + (b.nqp * b.fkh) : b.parent.lmm;
            b.parent.wba.dyw("step0");
            b.qbw.tpi("mincreditd", "#zev", [(b.gwg > 0) ? b.parent.thh(b.gwg) : "---"]);
            b.qbw.tpi("mmincredit", "#coc", [d && b.gwg < b.parent.lmm]);
            b.qbw.tpi("lmincredit", "#coc", [d && b.gwg > 0]);
            b.parent.cul();
            return (b.gwg >= b.parent.lmm)
        }
        return true
    };
    this.haj = function() {
        var d = b.qbw.qmc("cmincredit") == null || b.qbw.tpi("cmincredit", "#srz");
        if (d === true) {
            if (++b.qby > 10) {
                b.fkh = 10
            }
            b.gwg = (b.gwg - (b.nqp * b.fkh) > 0) ? b.gwg - (b.nqp * b.fkh) : 0;
            b.parent.wba.dyw("step0");
            b.qbw.tpi("mincreditd", "#zev", [(b.gwg > 0) ? b.parent.thh(b.gwg) : "---"]);
            b.qbw.tpi("mmincredit", "#coc", [d && b.gwg < b.parent.lmm]);
            b.qbw.tpi("lmincredit", "#coc", [d && b.gwg > 0]);
            b.parent.cul();
            return (b.gwg >= b.parent.lmm || b.gwg <= 0)
        }
        return true
    };
    this.apa = function() {
        var d = b.qbw.qmc("cmaxcredit") == null || b.qbw.tpi("cmaxcredit", "#srz");
        if (d === true) {
            if (++b.qby > 10) {
                b.fkh = 10
            }
            b.ndj = (b.ndj + (b.hvy * b.fkh) > 0) ? b.ndj + (b.hvy * b.fkh) : 0;
            b.parent.wba.dyw("step0");
            b.qbw.tpi("maxcreditd", "#zev", [(b.ndj > 0) ? b.parent.thh(b.ndj) : "---"]);
            b.qbw.tpi("lmaxcredit", "#coc", [d && b.ndj > b.parent.lmm]);
            b.parent.cul();
            return (b.ndj <= b.parent.lmm)
        }
        return true
    };
    this.xik = function() {
        var d = b.qbw.qmc("cmaxcredit") == null || b.qbw.tpi("cmaxcredit", "#srz");
        if (d === true) {
            if (++b.qby > 10) {
                b.fkh = 10
            }
            b.ndj = (b.ndj - (b.hvy * b.fkh) > b.parent.lmm) ? b.ndj - (b.hvy * b.fkh) : b.parent.lmm;
            b.parent.wba.dyw("step0");
            b.qbw.tpi("maxcreditd", "#zev", [(b.ndj > 0) ? b.parent.thh(b.ndj) : "---"]);
            b.qbw.tpi("lmaxcredit", "#coc", [d && b.ndj > b.parent.lmm]);
            b.parent.cul();
            return (b.ndj <= b.parent.lmm)
        }
        return true
    };
    this.qgg = function() {
        var d = b.qbw.qmc("cmaxwin") == null || b.qbw.tpi("cmaxwin", "#srz");
        if (d === true) {
            if (++b.qby > 10) {
                b.fkh = 10
            }
            b.jsn = (b.jsn + (b.hvy * b.fkh) > 0) ? b.jsn + (b.hvy * b.fkh) : 0;
            b.parent.wba.dyw("step0");
            b.qbw.tpi("maxwind", "#zev", [(b.jsn > 0) ? b.parent.thh(b.jsn) : "---"]);
            b.qbw.tpi("lmaxwin", "#coc", [d && b.jsn > b.hvy]);
            b.parent.cul();
            return (b.jsn <= b.hvy)
        }
        return true
    };
    this.jst = function() {
        var d = b.qbw.qmc("cmaxwin") == null || b.qbw.tpi("cmaxwin", "#srz");
        if (d === true) {
            if (++b.qby > 10) {
                b.fkh = 10
            }
            b.jsn = (b.jsn - (b.hvy * b.fkh) > 0) ? b.jsn - (b.hvy * b.fkh) : b.hvy;
            b.parent.wba.dyw("step0");
            b.qbw.tpi("maxwind", "#zev", [(b.jsn > 0) ? b.parent.thh(b.jsn) : "---"]);
            b.qbw.tpi("lmaxwin", "#coc", [d && b.jsn > b.hvy]);
            b.parent.cul();
            return (b.jsn <= b.hvy)
        }
        return true
    };
    this.gtm = function() {
        var d = b.qbw.qmc("cmincredit") == null || b.qbw.tpi("cmincredit", "#srz");
        b.gwg = b.parent.lmm;
        b.qbw.tpi("mincreditd", "#zev", [(d === true && b.gwg > 0) ? b.parent.thh(b.gwg) : "---"]);
        b.qbw.tpi("lmincredit", "#coc", [d]);
        b.qbw.tpi("mmincredit", "#coc", [d && b.gwg < b.parent.lmm]);
        b.parent.cul()
    };
    this.hig = function() {
        var d = b.qbw.qmc("cmaxcredit") == null || b.qbw.tpi("cmaxcredit", "#srz");
        b.ndj = b.parent.lmm;
        b.qbw.tpi("maxcreditd", "#zev", [(d === true && b.ndj > 0) ? b.parent.thh(b.ndj) : "---"]);
        b.qbw.tpi("lmaxcredit", "#coc", [d && b.ndj > b.parent.lmm]);
        b.qbw.tpi("mmaxcredit", "#coc", [d]);
        b.parent.cul()
    };
    this.zeq = function() {
        var d = b.qbw.qmc("cmaxwin") == null || b.qbw.tpi("cmaxwin", "#srz");
        if (b.jsn === 0) {
            b.jsn = b.hvy
        }
        b.qbw.tpi("maxwind", "#zev", [(d === true && b.jsn > 0) ? b.parent.thh(b.jsn) : "---"]);
        b.qbw.tpi("lmaxwin", "#coc", [d && b.jsn > b.hvy]);
        b.qbw.tpi("mmaxwin", "#coc", [d]);
        b.parent.cul()
    }
}
hiu.prototype = new fsx;

function ghg() {
    this.xcc = "right";
    this.uuz = "left";
    this.hsx = null;
    this.kwc = null;
    this.wrw = null;
    this.pkf = -1;
    this.xim = -1;
    this.kvs = true;
    this.lfp = false;
    this.qty = false;
    this.xuo = false;
    this.ydt = 0;
    this.jef = 0;
    this.sid = [];
    this.slo = 0;
    this.ogv = 0;
    this.xzg = 1;
    this.qbl = 0;
    this.cmn = 0;
    this.zrq = this.xcc;
    this.pxf = null;
    this.tgp = "bold";
    this.ycy = "rgb(255,255,255)";
    this.nip = "rgb(0,0,0)";
    this.dkv = "rgb(0,0,0)";
    this.uwy = "rgb(0,0,0)";
    this.ojq = 0.7;
    this.clx = null;
    this.fpc = null;
    this.qxe = null;
    this.ynk = new pjy();
    this.bck = new pjy();
    this.tim = new pjy();
    this.kem = new pjy();
    this.kuf = 2;
    this.tri = 5;
    this.dum = 4;
    this.krv = 10;
    this.fhi = 5;
    this.jow = 15;
    var a = 200;
    this.ngd = function(c, d, f) {
        this.sid = [];
        this.ydt = (d < 0) ? 0 : d;
        this.jef = (f < 0) ? 0 : f;
        for (var e = this.ydt, b = 0; e <= this.jef; e++) {
            this.sid[b++] = c[e]
        }
        this.slo = this.sid.length;
        this.qbl = this.ynk.height / this.slo
    };
    this.uad = function(b) {
        try {
            this.jow = b.fontSize;
            this.kuf = b.qwc;
            this.tri = b.dym;
            this.dum = b.vhx;
            this.krv = b.txw;
            this.fhi = b.ite;
            this.ynk = new pjy(b.fyu.x, b.fyu.y + b.kky, b.fyu.width, b.fyu.height - 2 * b.kky);
            this.bck = new pjy(b.fyu.x, b.fyu.y, b.fyu.width, b.kky);
            this.tim = new pjy(b.fyu.x, b.fyu.y + b.fyu.height - b.kky, b.fyu.width, b.kky);
            this.kem = b.tus
        } catch (c) {
            console.error(c)
        }
    };
    this.ygz = function(b) {
        try {
            this.pxf = b.font;
            this.tgp = b.nkj;
            this.ycy = b.gqn;
            this.nip = b.backgroundColor;
            this.dkv = b.gtt;
            this.uwy = b.gsu;
            this.ojq = b.udg;
            this.fpc = this.context2D.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            this.fpc.addColorStop(0, b.ebq);
            this.fpc.addColorStop(1, b.ghe);
            this.clx = this.context2D.createLinearGradient(this.ynk.x, 0, this.ynk.x + this.ynk.width, 0);
            this.qxe = this.context2D.createLinearGradient(this.width, this.height / 2, 0, this.height / 2);
            if (this.zrq === this.xcc) {
                this.clx.addColorStop(0, b.tek);
                this.clx.addColorStop(1, b.uaf);
                this.qxe.addColorStop(0, b.yed);
                this.qxe.addColorStop(1, b.wop)
            } else {
                if (this.zrq === this.uuz) {
                    this.clx.addColorStop(0, b.uaf);
                    this.clx.addColorStop(1, b.tek);
                    this.qxe.addColorStop(0, b.wop);
                    this.qxe.addColorStop(1, b.yed)
                }
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.xba = function(b, f, c) {
        if (this.xuo || !this.kvs || this.qty) {
            return true
        }
        if ((b < this.x || b > this.x + this.width || f < this.y || f > this.y + this.height)) {
            return false
        } else {
            var e = b - this.x,
                d = f - this.y;
            if (this.tim.dsy(e, d)) {
                this.xxw(-1);
                this.dyw();
                this.kbg(true, true)
            } else {
                if (this.bck.dsy(e, d)) {
                    this.xxw(1);
                    this.dyw();
                    this.kbg(true, true)
                } else {
                    if (this.ynk.dsy(e, d)) {
                        this.lfp = true;
                        this.xpf(f);
                        this.kbg(true, true)
                    }
                }
            }
            this.jan(this.ogv);
            return true
        }
    };
    this.opg = function() {
        if (this.lfp) {
            this.lfp = false;
            this.dyw();
            return true
        }
        return false
    };
    this.zfi = function(b) {
        if (this.xuo || !this.kvs || this.qty) {
            return true
        }
        if (b == this.xim) {
            this.xxw(-1);
            this.dyw();
            this.kbg(true, true);
            this.jan(this.ogv);
            return true
        } else {
            if (b == this.pkf) {
                this.xxw(1);
                this.dyw();
                this.kbg(true, true);
                this.jan(this.ogv);
                return true
            }
        }
        return false
    };
    this.unq = function() {};
    this.njw = function(b, d, c) {
        if (!this.lfp) {
            return false
        }
        if (b >= this.x + this.ynk.x && b <= this.x + this.ynk.x + this.ynk.width && d >= this.y + this.ynk.y && d <= this.y + this.ynk.y + this.ynk.height) {
            this.xpf(d);
            this.jan(this.ogv);
            return true
        }
        return false
    };
    this.kbg = function(b, c) {
        this.qty = b;
        c = (c === false) ? false : true;
        clearTimeout(this.pcp);
        if (this.qty === true && c === true) {
            this.pcp = setTimeout(this.kpo, a)
        }
    };
    this.kpo = function() {};
    this.jan = function(b) {};
    this.dyw = function() {};
    this.hoi = function(b, c) {
        this.ydt = (b < 0) ? 0 : b;
        this.jef = (c < 0) ? 0 : c;
        if (this.sid) {
            this.jef = (this.jef > this.sid.length - 1) ? this.sid.length - 1 : this.jef
        }
    };
    this.ogy = function() {
        this.coc(true, true)
    };
    this.uaw = function() {
        this.coc(false, true)
    };
    this.cgv = function(b) {
        this.kvs = b
    };
    this.aqx = function() {
        return this.kvs
    };
    this.fqa = function(b, c) {
        this.ogv = b;
        if (this.ogv < this.ydt) {
            this.ogv = this.ydt
        }
        if (this.ogv >= this.jef) {
            this.ogv = this.jef
        }
        this.xzg = this.ogv + 1;
        if (c && c === true) {
            this.parent.cul()
        }
    };
    this.auz = function(d, e) {
        this.ogv = 0;
        for (var c = 0, b = this.sid.length; c < b; c++) {
            if (this.sid[c] == d) {
                this.ogv = c;
                break
            }
        }
        this.ogv = (this.ogv >= this.ydt) ? this.ogv : this.ydt;
        this.ogv = (this.ogv < this.jef) ? this.ogv : this.jef;
        this.xzg = this.ogv + 1;
        if (e) {
            this.parent.cul()
        }
    };
    this.xpf = function(b) {
        this.ogv = Math.ceil(((this.ynk.height) - (b - this.ynk.y - this.y)) / this.qbl) - 1;
        this.ogv = (this.ogv >= this.ydt) ? this.ogv : this.ydt;
        this.ogv = (this.ogv < this.jef) ? this.ogv : this.jef;
        this.xzg = this.ogv + 1;
        this.parent.cul()
    };
    this.xxw = function(b) {
        this.ogv += b;
        this.ogv = (this.ogv >= this.ydt) ? this.ogv : this.ydt;
        this.ogv = (this.ogv < this.jef) ? this.ogv : this.jef;
        this.xzg = this.ogv + 1;
        this.parent.cul()
    };
    this.cul = function() {
        if (!this.pod() || !this.parent.jpj()) {
            return
        }
        this.gwl();
        if (this.msg && this.hyg) {
            this.msg.drawImage(this.kwb, this.x, this.y)
        }
    };
    this.gwl = function() {
        var b = this.context2D;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        this.mqp(b);
        this.ppo(b);
        this.vyy(b);
        this.xvt(b);
        this.fwy(b);
        b.restore()
    };
    this.mqp = function(b) {
        if (this.zrq === this.uuz) {
            ysp.ekr.qrd(b, 0, 0, this.width, this.height, this.tri, 0, 0, this.tri, this.nip, 0.4, this.qxe, this.kuf, 1)
        } else {
            if (this.zrq === this.xcc) {
                ysp.ekr.qrd(b, 0, 0, this.width, this.height, 0, this.tri, this.tri, 0, this.nip, 0.4, this.qxe, this.kuf, 1)
            }
        }
    };
    this.ppo = function(b) {
        ysp.ekr.jry(b, this.ynk.x, this.ynk.y, this.ynk.width, this.ynk.height, this.dkv, 1)
    };
    this.vyy = function(b) {
        ysp.ekr.jry(b, this.ynk.x, this.ynk.y + this.ynk.height - Math.round(this.xzg * this.qbl), this.ynk.width, Math.round(this.xzg * this.qbl), this.fpc, 1)
    };
    this.xvt = function(b) {
        ysp.ekr.jry(b, this.ynk.x - this.dum, this.ynk.y - this.dum, this.ynk.width + 2 * this.dum, this.ynk.height + 2 * this.dum, null, 0, this.clx, this.dum, 1);
        if (this.zrq === this.uuz) {
            ysp.ekr.qrd(b, this.ynk.x - this.dum, this.bck.y, this.ynk.width + 2 * this.dum, this.bck.height, this.krv, 0, 0, 0, this.clx, 1);
            ysp.ekr.qrd(b, this.ynk.x - this.dum, this.tim.y, this.ynk.width + 2 * this.dum, this.tim.height, 0, 0, 0, this.krv, this.clx, 1)
        } else {
            if (this.zrq === this.xcc) {
                ysp.ekr.qrd(b, this.ynk.x - this.dum, this.bck.y, this.ynk.width + 2 * this.dum, this.bck.height, 0, this.krv, 0, 0, this.clx, 1);
                ysp.ekr.qrd(b, this.ynk.x - this.dum, this.tim.y, this.ynk.width + 2 * this.dum, this.tim.height, 0, 0, this.krv, 0, this.clx, 1)
            }
        }
        b.strokeStyle = this.clx;
        b.lineWidth = Math.round(this.dum / 4);
        b.beginPath();
        for (var c = 1; c < this.slo; c++) {
            b.moveTo(this.ynk.x, this.ynk.y + this.ynk.height - Math.round(c * this.qbl));
            b.lineTo(this.ynk.x + this.ynk.width, this.ynk.y + this.ynk.height - Math.round(c * this.qbl))
        }
        b.closePath();
        b.stroke();
        if (this.hsx) {
            if (this.zrq === this.uuz) {
                b.drawImage(this.hsx, 0, 0, this.hsx.width / 2, this.hsx.height, this.ynk.x, this.ynk.y, this.ynk.width, this.ynk.height)
            } else {
                if (this.zrq === this.xcc) {
                    b.drawImage(this.hsx, this.hsx.width / 2, 0, this.hsx.width / 2, this.hsx.height, this.ynk.x, this.ynk.y, this.ynk.width, this.ynk.height)
                }
            }
        }
    };
    this.fwy = function(c) {
        var f = this.ycy,
            e = this.ycy,
            b = 0,
            d = 0;
        if (this.zrq === this.uuz) {
            b = this.fhi;
            d = this.ynk.x - 2 * this.fhi
        } else {
            if (this.zrq === this.xcc) {
                b = this.ynk.x + this.ynk.width + this.fhi;
                d = this.width - this.fhi - (this.ynk.x + this.ynk.width + this.fhi)
            }
        }
        if (this.ogv > 0 && this.ogv < this.sid.length - 1) {
            ysp.ekr.jry(c, b, this.ynk.y + ((this.slo - this.xzg) * this.qbl), d, this.qbl, this.uwy, this.ojq);
            ysp.ekr.vsi(c, this.sid[this.ogv], this.fpc, b, this.ynk.y + ((this.slo - this.xzg) * this.qbl) + (this.qbl - this.jow) / 2, d, this.jow, this.pxf, this.jow, this.tgp, this.fhi)
        } else {
            if (this.ogv == 0) {
                f = this.fpc
            } else {
                if (this.ogv == this.sid.length - 1) {
                    e = this.fpc
                }
            }
        }
        ysp.ekr.jry(c, b, this.ynk.y + (this.qbl * (this.slo - 1)), d, this.qbl, this.uwy, this.ojq);
        ysp.ekr.vsi(c, this.sid[0], f, b, this.ynk.y + (this.qbl * (this.slo - 1)) + (this.qbl - this.jow) / 2, d, this.jow, this.pxf, this.jow, this.tgp, this.fhi);
        ysp.ekr.jry(c, b, this.ynk.y, d, this.qbl, this.uwy, this.ojq);
        ysp.ekr.vsi(c, this.sid[this.sid.length - 1], e, b, this.ynk.y + (this.qbl - this.jow) / 2, d, this.jow, this.pxf, this.jow, this.tgp, this.fhi);
        ysp.ekr.trw(c, "+", this.ycy, this.bck.x, this.bck.y, this.bck.width, this.bck.height, this.pxf, this.jow, this.tgp);
        ysp.ekr.trw(c, "-", this.ycy, this.tim.x, this.tim.y, this.tim.width, this.tim.height, this.pxf, this.jow, this.tgp);
        if (this.wrw) {
            ysp.ekr.trw(c, this.wrw, this.ycy, this.kem.x, this.kem.y, this.kem.width, this.kem.height, this.pxf, this.jow, this.tgp)
        }
    }
}
ghg.prototype = new fsx;

function qtm() {
    var a = this;
    this.qbw = null;
    this.rmw = false;
    this.ykg = "";
    this.zoa = "";
    this.ckw = "";
    this.mrm = "";
    this.jsz = "";
    this.vgi = "";
    this.rjs = "";
    this.pxf = "arial";
    this.tgp = "bold";
    this.ycy = "white";
    this.nip = "black";
    this.hlr = null;
    this.vvu = "white";
    this.tzr = "rgb(150,150,150)";
    this.kuf = 3;
    this.tri = 4;
    this.jxo = 24;
    this.ifi = 24;
    this.lew = 24;
    this.rrh = new pjy();
    this.zgw = new pjy();
    this.bjl = new pjy();
    this.cxv = new pjy();
    this.axd = new pjy();
    this.vjs = new pjy();
    this.fad = new pjy();
    this.rsg = [];
    this.wtk = 0;
    this.nqp = 0;
    this.hvy = 0;
    this.mon = 0;
    this.udn = 0;
    this.gwg = 0;
    this.ndj = 0;
    this.jsn = 0;
    this.idr = false;
    this.vts = false;
    this.ogv = 0;
    this.dfp = true;
    this.vyr = true;
    this.hcy = null;
    this.vvh = 0;
    this.qby = 0;
    this.fkh = 1;
    this.zyf = 250;
    this.bih = function(b, d, c) {
        qtm.prototype.bih.call(this, b, d, c);
        this.qbw = new irf();
        this.qbw.bih();
        this.qbw.vpa("buttons");
        this.qbw.vpa("displays");
        this.qbw.vpa("checkboxes");
        this.qbw.vpa("lbuttons");
        this.qbw.vpa("mbuttons");
        this.qbw.vpa("tbuttons");
        this.qbw.vpa("bbuttons");
        this.qbw.vpa("bdisplays");
        this.qbw.vpa("abuttons");
        this.qbw.vpa("adisplays");
        this.qbw.vpa("acheckboxes");
        this.qbw.vpa("sbuttons");
        this.qbw.vpa("hbuttons")
    };
    this.uki = function(b) {
        try {
            this.kuu(b);
            this.zpu(b);
            this.sdm(b)
        } catch (c) {
            console.error(c)
        }
    };
    this.ygz = function(b) {
        try {
            var c = this.qbw.fbh("lbuttons"),
                n = this.qbw.fbh("mbuttons"),
                k = this.qbw.fbh("tbuttons"),
                m = this.qbw.fbh("sbuttons"),
                l = this.qbw.fbh("hbuttons"),
                f = this.qbw.fbh("displays");
            this.pxf = b.font;
            this.tgp = b.nkj;
            this.ycy = b.gqn;
            this.nip = b.backgroundColor;
            this.hlr = b.zio;
            this.vvu = b.borderColor;
            this.tzr = b.tgc;
            for (var d = 0, g = c.length; d < g; d++) {
                c[d].ygz(b.olo)
            }
            for (var d = 0, g = n.length; d < g; d++) {
                n[d].ygz(b.ses)
            }
            for (var d = 0, g = k.length; d < g; d++) {
                k[d].ygz(b.fhh)
            }
            for (var d = 0, g = f.length; d < g; d++) {
                f[d].ygz(b.display)
            }
            for (var d = 0, g = m.length; d < g; d++) {
                m[d].ygz(b.dtn)
            }
            for (var d = 0, g = l.length; d < g; d++) {
                l[d].ygz(b.dtn)
            }
            this.qbw.nhs("checkboxes", "#ygz", [b.lsa])
        } catch (j) {
            console.error(j)
        }
    };
    this.uad = function(g) {
        try {
            var b = this.qbw.fbh("lbuttons"),
                o = this.qbw.fbh("mbuttons"),
                l = this.qbw.fbh("tbuttons"),
                n = this.qbw.fbh("sbuttons"),
                m = this.qbw.fbh("hbuttons"),
                c = this.qbw.fbh("bdisplays"),
                f = this.qbw.fbh("adisplays");
            szv = this.qbw.fbh("checkboxes"), fsa = n.length, jxe = (fsa <= 2) ? g.kon : (fsa <= 3) ? g.djl : (fsa <= 4) ? g.xnr : g.mwy, fsa = m.length, pjs = (fsa <= 2) ? g.kon : (fsa <= 3) ? g.djl : (fsa <= 4) ? g.xnr : g.mwy, qko = (this.parent.msq() != null) ? g.fec : g.xrl;
            this.kuf = g.qwc;
            this.tri = g.dym;
            this.jxo = g.gwb;
            this.ifi = g.qdy;
            this.lew = g.tmt;
            this.rrh = g.joj;
            this.zgw = g.dcz;
            this.bjl = g.vfu;
            this.cxv = g.llr;
            this.axd = g.ypx;
            this.vjs = g.shw;
            this.fad = g.ayv;
            this.qbw.tpi("bett", "#srt", [qko.pfr]);
            this.qbw.tpi("autot", "#srt", [qko.wzn]);
            this.qbw.tpi("helpt", "#srt", [qko.tso]);
            this.qbw.tpi("settingt", "#srt", [qko.vxq]);
            this.qbw.tpi("returnt", "#srt", [qko.uzo]);
            this.qbw.tpi("lbet", "#srt", [g.sui]);
            this.qbw.tpi("mbet", "#srt", [g.obl]);
            this.qbw.tpi("llines", "#srt", [g.wwe]);
            this.qbw.tpi("mlines", "#srt", [g.owp]);
            this.qbw.tpi("betd", "#srt", [g.xxf]);
            this.qbw.tpi("linesd", "#srt", [g.jht]);
            this.qbw.tpi("totald", "#srt", [g.ngn]);
            this.qbw.tpi("lgames", "#srt", [g.fgp]);
            this.qbw.tpi("mgames", "#srt", [g.swb]);
            this.qbw.tpi("lmincredit", "#srt", [g.khi]);
            this.qbw.tpi("mmincredit", "#srt", [g.iuo]);
            this.qbw.tpi("lmaxcredit", "#srt", [g.vpm]);
            this.qbw.tpi("mmaxcredit", "#srt", [g.rhq]);
            this.qbw.tpi("lmaxwin", "#srt", [g.svy]);
            this.qbw.tpi("mmaxwin", "#srt", [g.hjv]);
            this.qbw.tpi("gamesd", "#srt", [g.zxo]);
            this.qbw.tpi("mincreditd", "#srt", [g.wzg]);
            this.qbw.tpi("maxcreditd", "#srt", [g.omz]);
            this.qbw.tpi("maxwind", "#srt", [g.cvl]);
            this.qbw.tpi("cmincredit", "#srt", [g.mtu]);
            this.qbw.tpi("cmaxcredit", "#srt", [g.asu]);
            this.qbw.tpi("cmaxwin", "#srt", [g.lpa]);
            for (var d = 0, j = b.length; d < j; d++) {
                b[d].uad(g.olo)
            }
            for (var d = 0, j = o.length; d < j; d++) {
                o[d].uad(g.ses)
            }
            for (var d = 0, j = l.length; d < j; d++) {
                l[d].uad(g.fhh)
            }
            for (var d = 0, j = c.length; d < j; d++) {
                c[d].uad(g.yjc)
            }
            for (var d = 0, j = f.length; d < j; d++) {
                f[d].uad(g.ucu)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].uad(g.dtn)
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].uad(g.dtn)
            }
            for (var d = 0, j = szv.length; d < j; d++) {
                szv[d].uad(g.lsa)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].srt(jxe[d])
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].srt(pjs[d])
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.kuu = function(c) {
        var b = (this.parent.msq() != null) ? c.fec : c.xrl;
        this.qbw.zth("bett", this.jdd(b.pfr, null, this.parent.wba.vjf("btn_b"), this.grl, null), ["buttons", "tbuttons"]);
        if (this.parent.msq() != null) {
            this.qbw.zth("autot", this.jdd(b.wzn, null, this.parent.wba.vjf("btn_as"), this.prl, null), ["buttons", "tbuttons"])
        }
        this.qbw.zth("helpt", this.jdd(b.tso, null, this.parent.wba.vjf("btn_i"), this.vtd, null), ["buttons", "tbuttons"]);
        this.qbw.zth("settingt", this.jdd(b.vxq, null, this.parent.wba.vjf("btn_se"), this.flb, null), ["buttons", "tbuttons"]);
        this.qbw.zth("returnt", this.jdd(b.uzo, null, this.parent.wba.vjf("btn_c"), this.ekk, null), ["buttons", "tbuttons"])
    };
    this.zpu = function(b) {
        this.qbw.zth("betd", this.nxs(b.xxf, null, this.parent.gan), ["displays", "bdisplays"]);
        this.qbw.zth("lbet", this.rda(b.sui, "-", this.parent.csv), ["buttons", "lbuttons", "bbuttons"]);
        this.qbw.zth("mbet", this.rda(b.obl, "+", this.parent.rcz), ["buttons", "mbuttons", "bbuttons"]);
        this.qbw.zth("linesd", this.nxs(b.jht, null, this.parent.rif), ["displays", "bdisplays"]);
        if (this.rmw) {
            this.qbw.zth("llines", this.rda(b.wwe, "-", this.parent.ceq), ["buttons", "lbuttons", "bbuttons"]);
            this.qbw.zth("mlines", this.rda(b.owp, "+", this.parent.yzy), ["buttons", "mbuttons", "bbuttons"])
        }
        this.qbw.zth("totald", this.nxs(b.ngn, null, this.parent.ifg()), ["displays", "bdisplays"])
    };
    this.sdm = function(b) {
        this.qbw.zth("gamesd", this.nxs(b.zxo, null, this.rsg[this.wtk]), ["displays", "adisplays"]);
        this.qbw.zth("lgames", this.rda(b.fgp, "-", this.uxx), ["buttons", "lbuttons", "abuttons"]);
        this.qbw.zth("mgames", this.rda(b.swb, "+", this.vrt), ["buttons", "mbuttons", "abuttons"]);
        this.qbw.zth("mincreditd", this.nxs(b.wzg, null, "---"), ["displays", "adisplays"]);
        this.qbw.zth("lmincredit", this.rda(b.khi, "-", this.haj), ["buttons", "lbuttons", "abuttons"]);
        this.qbw.zth("mmincredit", this.rda(b.iuo, "+", this.uma), ["buttons", "mbuttons", "abuttons"]);
        this.qbw.zth("maxcreditd", this.nxs(b.omz, null, "---"), ["displays", "adisplays"]);
        this.qbw.zth("lmaxcredit", this.rda(b.vpm, "-", this.xik), ["buttons", "lbuttons", "abuttons"]);
        this.qbw.zth("mmaxcredit", this.rda(b.rhq, "+", this.apa), ["buttons", "mbuttons", "abuttons"]);
        this.qbw.zth("maxwind", this.nxs(b.cvl, null, "---"), ["displays", "adisplays"]);
        this.qbw.zth("lmaxwin", this.rda(b.svy, "-", this.jst), ["buttons", "lbuttons", "abuttons"]);
        this.qbw.zth("mmaxwin", this.rda(b.hjv, "+", this.qgg), ["buttons", "mbuttons", "abuttons"]);
        this.qbw.zth("cmincredit", this.tup(b.mtu, "", this.gtm), ["checkboxes", "acheckboxes"]);
        this.qbw.zth("cmaxcredit", this.tup(b.asu, "", this.hig), ["checkboxes", "acheckboxes"]);
        this.qbw.zth("cmaxwin", this.tup(b.lpa, "", this.zeq), ["checkboxes", "acheckboxes"])
    };
    this.qmg = function(i, g, f, e, d, b) {
        var c = new nqo();
        c.bih(new pjy(0, 0, 1, 1), this.context2D);
        c.parent = this;
        c.jan = e;
        c.cxa = g;
        c.beu(d, b);
        c.uad(this.parent.gof.cfr.dtn);
        c.ygz(this.parent.style.cfr.dtn);
        c.gnk(f);
        this.qbw.zth(i, c, ["buttons", "sbuttons"])
    };
    this.upo = function(f, e, d, c) {
        var b = new nqo();
        b.bih(new pjy(0, 0, 1, 1), this.context2D);
        b.parent = this;
        b.jan = c;
        b.cxa = e;
        b.uad(this.parent.gof.cfr.dtn);
        b.ygz(this.parent.style.cfr.dtn);
        b.gnk(d);
        this.qbw.zth(f, b, ["buttons", "hbuttons"])
    };
    this.nxs = function(b, e, d) {
        var c = new xcm();
        c.bih(b, this.context2D, null, e, d);
        c.parent = this;
        return c
    };
    this.rda = function(c, e, d) {
        var b = new meq();
        b.bih(c, this.context2D, null, null, e);
        b.parent = this;
        b.jan = d;
        return b
    };
    this.jdd = function(d, g, f, e, c) {
        var b = new meq();
        b.bih(d, this.context2D, null, f, g);
        b.parent = this;
        b.jan = e;
        if (c != null) {
            b.zzo = c
        }
        return b
    };
    this.tup = function(c, e, d) {
        var b = new zai();
        b.bih(c, this.context2D, null, e);
        b.parent = this;
        b.jan = d;
        return b
    };
    this.xba = function(o, n) {
        var m = this.qbw.fbh("buttons"),
            g = this.qbw.fbh("checkboxes"),
            f = o - this.x,
            d = n - this.y;
        for (var e = 0, l = m.length; e < l; e++) {
            var b = m[e];
            if (f >= b.x && f <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.pod() === true) {
                if (b.aqx() === true && b.pqi() === false) {
                    if (b instanceof nqo) {
                        this.parent.wba.ntp("btn");
                        this.parent.wba.dyw("btn");
                        b.evd(true, true, true);
                        b.jan()
                    } else {
                        if (b instanceof meq) {
                            if (b.fso() === "rect") {
                                this.parent.wba.ntp("btn");
                                this.parent.wba.dyw("btn");
                                b.evd(true, true, false);
                                b.jan()
                            } else {
                                b.evd(true, false, false);
                                this.qby = 0;
                                this.fkh = 1;
                                if (b.jan() === false) {
                                    this.hcy = function() {
                                        if (b.jan() === true) {
                                            clearInterval(a.vvh);
                                            b.evd(false, true);
                                            for (var i = 0; i < l; i++) {
                                                m[i].kbg(false)
                                            }
                                        }
                                    };
                                    this.vvh = setInterval(this.hcy, this.zyf)
                                }
                            }
                        }
                    }
                    for (var c = 0; c < l; c++) {
                        m[c].kbg(true)
                    }
                    return true
                }
            }
        }
        for (var e = 0, l = g.length; e < l; e++) {
            var k = g[e];
            if (f >= k.x && f <= k.x + k.width && d >= k.y && d <= k.y + k.height) {
                if (k.pod() === true && k.aqx() === true) {
                    k.noo(!k.srz(), true);
                    k.jan();
                    for (var c = 0; c < l; c++) {
                        g[c].kbg(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.opg = function() {
        var e = this.qbw.fbh("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.rqv() == true && !(c instanceof meq && c.fso() === "rect")) {
                clearInterval(this.vvh);
                c.evd(false, true);
                return true
            }
        }
        return false
    };
    this.zfi = function(b) {};
    this.unq = function(b) {};
    this.btn = function(c, b, d) {
        this.qbw.tpi("betd", "#zev", [c]);
        this.qbw.tpi("linesd", "#zev", [b]);
        this.qbw.tpi("totald", "#zev", [d]);
        this.parent.cul()
    };
    this.lsx = function(b) {
        this.rsg = b.g;
        this.nqp = b.v;
        this.hvy = b.v;
        this.idr = b.r;
        this.vts = b.l;
        if (typeof b.m != "undefined" && b.m != null && b.m > 0) {
            this.mon = b.m;
            this.udn = b.m
        }
    };
    this.mny = function() {
        if (this.idr === true) {
            this.gwg = this.parent.lmm;
            this.ndj = this.parent.lmm;
            this.wtk = 0;
            this.jsn = 0
        }
    };
    this.yul = function() {
        if (this.rsg.length > 0 && this.wtk >= 0) {
            return this.rsg[this.wtk]
        }
        return 0
    };
    this.iyu = function() {
        var b = this.qbw.qmc("cmincredit") == null || this.qbw.tpi("cmincredit", "#srz");
        if (this.gwg > 0 && b === true) {
            return this.gwg
        }
        return 0
    };
    this.wkp = function() {
        var b = this.qbw.qmc("cmaxcredit") == null || this.qbw.tpi("cmaxcredit", "#srz");
        if (this.ndj > 0 && b === true) {
            return this.ndj
        }
        return 0
    };
    this.vwc = function() {
        var b = this.qbw.qmc("cmaxwin") == null || this.qbw.tpi("cmaxwin", "#srz");
        if (this.jsn > 0 && b === true) {
            return this.jsn
        }
        return 0
    };
    this.ogy = function(c, f, d) {
        if (this.rsg && this.rsg.length > 0) {
            var g = this.qbw.qmc("cmincredit") == null || this.qbw.tpi("cmincredit", "#srz"),
                e = this.qbw.qmc("cmaxcredit") == null || this.qbw.tpi("cmaxcredit", "#srz"),
                b = this.qbw.qmc("cmaxwin") == null || this.qbw.tpi("cmaxwin", "#srz");
            if (this.idr === true) {
                g = this.vts;
                e = false;
                b = false;
                this.mny()
            } else {
                if (this.vts === true) {
                    g = true;
                    this.gwg = (this.gwg < this.parent.lmm) ? this.gwg : this.parent.lmm;
                    this.gwg = (this.gwg > 0) ? this.gwg : this.parent.lmm
                } else {
                    g = (this.gwg < this.parent.lmm) ? g : false;
                    this.gwg = (this.gwg < this.parent.lmm) ? this.gwg : this.parent.lmm
                }
                e = (this.ndj > this.parent.lmm) ? e : false;
                this.ndj = (this.ndj > this.parent.lmm) ? this.ndj : this.parent.lmm
            }
            this.qbw.tpi("cmincredit", "#noo", [g]);
            this.qbw.tpi("cmaxcredit", "#noo", [e]);
            this.qbw.tpi("cmaxwin", "#noo", [b]);
            this.qbw.tpi("gamesd", "#zev", [(this.rsg[this.wtk] > 0) ? this.rsg[this.wtk] : "---"]);
            this.qbw.tpi("mincreditd", "#zev", [(g === true && this.gwg > 0) ? this.parent.thh(this.gwg) : "---"]);
            this.qbw.tpi("maxcreditd", "#zev", [(e === true && this.ndj > 0) ? this.parent.thh(this.ndj) : "---"]);
            this.qbw.tpi("maxwind", "#zev", [(b === true && this.jsn > 0) ? this.parent.thh(this.jsn) : "---"]);
            this.qbw.tpi("lmincredit", "#coc", [g]);
            this.qbw.tpi("mmincredit", "#coc", [g]);
            this.qbw.tpi("lmaxcredit", "#coc", [e]);
            this.qbw.tpi("mmaxcredit", "#coc", [e]);
            this.qbw.tpi("lmaxwin", "#coc", [b]);
            this.qbw.tpi("mmaxwin", "#coc", [b])
        }
        this.dfp = c;
        this.vyr = f;
        if (typeof d == "number") {
            if (d === 0) {
                this.grl()
            } else {
                if (d === 1) {
                    if (this.parent.msq() != null) {
                        this.prl()
                    } else {
                        this.vtd()
                    }
                } else {
                    if (d === 2) {
                        if (this.parent.msq() != null) {
                            this.vtd()
                        } else {
                            this.flb()
                        }
                    } else {
                        if (d === 3 && this.parent.msq() != null) {
                            this.flb()
                        }
                    }
                }
            }
        } else {
            this.grl()
        }
        this.qbw.nhs("tbuttons", "#cgv", [true]);
        this.coc(true);
        this.parent.cul()
    };
    this.uaw = function() {
        this.qbw.nhs("tbuttons", "#cgv", [false]);
        this.qbw.nhs("bbuttons", "#cgv", [false]);
        this.qbw.nhs("sbuttons", "#cgv", [false]);
        this.qbw.nhs("abuttons", "#cgv", [false]);
        this.qbw.nhs("acheckboxes", "#cgv", [false]);
        this.coc(false);
        this.parent.cul()
    };
    this.stop = function() {
        clearInterval(this.vvh)
    };
    this.ree = function(d, b) {
        var c = "";
        this.qbw.tpi("language", "#zev", [ysp.hpw.oxp(d.language)]);
        this.qbw.tpi("audio", "#zev", [ysp.hpw.oxp(d.audio)]);
        this.qbw.tpi("melody", "#zev", [ysp.hpw.oxp(d.fjm)]);
        this.qbw.tpi("fullscreen", "#zev", [ysp.hpw.oxp(d.qgo)]);
        this.qbw.tpi("turbo", "#zev", [ysp.hpw.oxp(d.zuw)]);
        this.qbw.tpi("help", "#zev", [ysp.hpw.oxp(d.mgi)]);
        this.qbw.tpi("history", "#zev", [ysp.hpw.oxp(d.xak)]);
        this.qbw.tpi("statistic", "#zev", [ysp.hpw.oxp(d.kdz)]);
        this.qbw.tpi("rules", "#zev", [ysp.hpw.oxp(d.byr)]);
        this.qbw.tpi("gamble", "#zev", [ysp.hpw.oxp(d.jjp)]);
        if (ysp.hpw.cyi[ysp.hpw.gwu] === ysp.iax.uuz) {
            c = ysp.hpw.oxp(d.left)
        } else {
            if (ysp.hpw.cyi[ysp.hpw.gwu] === ysp.iax.xcc) {
                c = ysp.hpw.oxp(d.xoj)
            } else {
                if (ysp.hpw.cyi[ysp.hpw.gwu] === ysp.iax.oct) {
                    c = ysp.hpw.oxp(d.scm)
                }
            }
        }
        this.qbw.tpi("adjustment", "#zev", [c]);
        if (b && b === true) {
            this.ykg = ysp.hpw.oxp(d.kos) + "/" + ysp.hpw.oxp(d.owx) + ":";
            this.zoa = ysp.hpw.oxp(d.rif) + ":"
        } else {
            this.ykg = ysp.hpw.oxp(d.kos) + ":"
        }
        this.ckw = ysp.hpw.oxp(d.bcz) + ":";
        this.vgi = ysp.hpw.oxp(d.ssg);
        this.rjs = ysp.hpw.oxp(d.nra);
        if (this.parent.ser === true && ysp.lct.value44.d === true) {
            this.jsz = ysp.hpw.oxp(d.mgc)
        }
        this.qbw.tpi("cmincredit", "#zev", [ysp.hpw.oxp(d.gew)]);
        this.qbw.tpi("cmaxcredit", "#zev", [ysp.hpw.oxp(d.sbg)]);
        this.qbw.tpi("cmaxwin", "#zev", [ysp.hpw.oxp(d.vpx)])
    };
    this.cul = function(l, j, m, e) {
        if (!this.pod() || !this.parent.jpj()) {
            return
        }
        var c = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = this.qbw.fbh("tbuttons"),
            b = this.nip,
            g = this.vvu;
        if (this.hlr) {
            b = n.createRadialGradient(this.x + this.width / 2, this.y + this.height / 2, this.height / 6, this.x + this.width / 2, this.y + this.height / 2, this.height);
            b.addColorStop(0, this.nip);
            b.addColorStop(1, this.hlr)
        }
        if (this.tzr) {
            g = n.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            g.addColorStop(0, this.vvu);
            g.addColorStop(1, this.tzr)
        }
        n.save();
        n.clearRect(0, 0, this.width, this.height);
        if (c) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        ysp.ekr.zlw(n, 0, 0, this.width, this.height, this.tri, b, g, this.kuf);
        for (var d = 0, f = k.length; d < f; d++) {
            k[d].cul()
        }
        if (this.ogv === 0) {
            this.tku(n)
        } else {
            if (this.ogv === 1) {
                this.ddl(n)
            } else {
                if (this.ogv === 2) {
                    this.siq(n)
                } else {
                    if (this.ogv === 3) {
                        this.ocu(n)
                    }
                }
            }
        }
        n.restore();
        if (this.msg && this.hyg) {
            if (c) {
                this.msg.drawImage(this.hyg, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.msg.drawImage(this.hyg, this.x, this.y)
            }
        }
    };
    this.tku = function(c) {
        var f = this.qbw.fbh("bbuttons"),
            d = this.qbw.fbh("bdisplays");
        if (this.rrh.width > 0 && this.rrh.height > 0) {
            ysp.ekr.pyk(c, this.ykg, this.ycy, this.rrh.x, this.rrh.y, this.rrh.width, this.rrh.height, this.pxf, this.jxo, this.tgp, 0)
        }
        if (this.zgw.width > 0 && this.zgw.height > 0) {
            ysp.ekr.pyk(c, this.zoa, this.ycy, this.zgw.x, this.zgw.y, this.zgw.width, this.zgw.height, this.pxf, this.jxo, this.tgp, 0)
        }
        if (this.bjl.width > 0 && this.bjl.height > 0) {
            ysp.ekr.pyk(c, this.ckw, this.ycy, this.bjl.x, this.bjl.y, this.bjl.width, this.bjl.height, this.pxf, this.jxo, this.tgp, 0)
        }
        ysp.ekr.lwj(c, this.mrm, this.ycy, this.cxv.x, this.cxv.y, this.cxv.width, this.cxv.height, this.pxf, this.lew, this.tgp, "center", true);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].cul()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].cul()
        }
    };
    this.ddl = function(c) {
        var f = this.qbw.fbh("abuttons"),
            d = this.qbw.fbh("adisplays"),
            g = this.qbw.fbh("acheckboxes");
        ysp.ekr.lwj(c, this.jsz, this.ycy, this.axd.x, this.axd.y, this.axd.width, this.axd.height, this.pxf, this.lew, this.tgp, "center", true);
        ysp.ekr.pyk(c, this.vgi, this.ycy, this.vjs.x, this.vjs.y, this.vjs.width, this.vjs.height, this.pxf, this.ifi, this.tgp, 0);
        ysp.ekr.trw(c, this.rjs, this.ycy, this.fad.x, this.fad.y, this.fad.width, this.fad.height, this.pxf, this.ifi, this.tgp);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].cul()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].cul()
        }
        for (var e = 0, b = g.length; e < b; e++) {
            g[e].cul()
        }
    };
    this.siq = function(c) {
        var d = this.qbw.fbh("hbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].cul()
        }
    };
    this.ocu = function(c) {
        var d = this.qbw.fbh("sbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].cul()
        }
    };
    this.vrt = function() {
        a.wtk = (a.wtk < a.rsg.length - 1) ? a.wtk + 1 : 0;
        a.parent.wba.dyw("btn");
        a.qbw.tpi("gamesd", "#zev", [(a.rsg[a.wtk] > 0) ? a.rsg[a.wtk] : "---"]);
        a.cul();
        return (a.wtk >= a.rsg.length - 1)
    };
    this.uxx = function() {
        a.wtk = (a.wtk > 0) ? a.wtk - 1 : a.rsg.length - 1;
        a.parent.wba.dyw("btn");
        a.qbw.tpi("gamesd", "#zev", [(a.rsg[a.wtk] > 0) ? a.rsg[a.wtk] : "---"]);
        a.cul();
        return (a.wtk <= 0)
    };
    this.uma = function() {
        var b = a.qbw.qmc("cmincredit") == null || a.qbw.tpi("cmincredit", "#srz");
        if (b === true) {
            if (++a.qby > 10) {
                a.fkh = 10
            }
            a.gwg = (a.gwg + (a.nqp * a.fkh) <= a.parent.lmm) ? a.gwg + (a.nqp * a.fkh) : a.parent.lmm;
            a.parent.wba.dyw("btn");
            a.qbw.tpi("mincreditd", "#zev", [(a.gwg > 0) ? a.parent.thh(a.gwg) : "---"]);
            a.qbw.tpi("mmincredit", "#coc", [b && a.gwg < a.parent.lmm]);
            a.qbw.tpi("lmincredit", "#coc", [b && a.gwg > 0]);
            a.cul();
            return (a.gwg >= a.parent.lmm)
        }
        return true
    };
    this.haj = function() {
        var b = a.qbw.qmc("cmincredit") == null || a.qbw.tpi("cmincredit", "#srz");
        if (b === true) {
            if (++a.qby > 10) {
                a.fkh = 10
            }
            a.gwg = (a.gwg - (a.nqp * a.fkh) > 0) ? a.gwg - (a.nqp * a.fkh) : 0;
            a.parent.wba.dyw("btn");
            a.qbw.tpi("mincreditd", "#zev", [(a.gwg > 0) ? a.parent.thh(a.gwg) : "---"]);
            a.qbw.tpi("mmincredit", "#coc", [b && a.gwg < a.parent.lmm]);
            a.qbw.tpi("lmincredit", "#coc", [b && a.gwg > 0]);
            a.cul();
            return (a.gwg >= a.parent.lmm || a.gwg <= 0)
        }
        return true
    };
    this.apa = function() {
        var b = a.qbw.qmc("cmaxcredit") == null || a.qbw.tpi("cmaxcredit", "#srz");
        if (b === true) {
            if (++a.qby > 10) {
                a.fkh = 10
            }
            a.ndj = (a.ndj + (a.hvy * a.fkh) > 0) ? a.ndj + (a.hvy * a.fkh) : 0;
            a.parent.wba.dyw("btn");
            a.qbw.tpi("maxcreditd", "#zev", [(a.ndj > 0) ? a.parent.thh(a.ndj) : "---"]);
            a.qbw.tpi("lmaxcredit", "#coc", [b && a.ndj > a.parent.lmm]);
            a.cul();
            return (a.ndj <= a.parent.lmm)
        }
        return true
    };
    this.xik = function() {
        var b = a.qbw.qmc("cmaxcredit") == null || a.qbw.tpi("cmaxcredit", "#srz");
        if (b === true) {
            if (++a.qby > 10) {
                a.fkh = 10
            }
            a.ndj = (a.ndj - (a.hvy * a.fkh) > a.parent.lmm) ? a.ndj - (a.hvy * a.fkh) : a.parent.lmm;
            a.parent.wba.dyw("btn");
            a.qbw.tpi("maxcreditd", "#zev", [(a.ndj > 0) ? a.parent.thh(a.ndj) : "---"]);
            a.qbw.tpi("lmaxcredit", "#coc", [b && a.ndj > a.parent.lmm]);
            a.cul();
            return (a.ndj <= a.parent.lmm)
        }
        return true
    };
    this.qgg = function() {
        var b = a.qbw.qmc("cmaxwin") == null || a.qbw.tpi("cmaxwin", "#srz");
        if (b === true) {
            if (++a.qby > 10) {
                a.fkh = 10
            }
            a.jsn = (a.jsn + (a.hvy * a.fkh) > 0) ? a.jsn + (a.hvy * a.fkh) : 0;
            a.parent.wba.dyw("btn");
            a.qbw.tpi("maxwind", "#zev", [(a.jsn > 0) ? a.parent.thh(a.jsn) : "---"]);
            a.qbw.tpi("lmaxwin", "#coc", [b && a.jsn > a.hvy]);
            a.cul();
            return (a.jsn <= a.hvy)
        }
        return true
    };
    this.jst = function() {
        var b = a.qbw.qmc("cmaxwin") == null || a.qbw.tpi("cmaxwin", "#srz");
        if (b === true) {
            if (++a.qby > 10) {
                a.fkh = 10
            }
            a.jsn = (a.jsn - (a.hvy * a.fkh) > 0) ? a.jsn - (a.hvy * a.fkh) : a.hvy;
            a.parent.wba.dyw("btn");
            a.qbw.tpi("maxwind", "#zev", [(a.jsn > 0) ? a.parent.thh(a.jsn) : "---"]);
            a.qbw.tpi("lmaxwin", "#coc", [b && a.jsn > a.hvy]);
            a.cul();
            return (a.jsn <= a.hvy)
        }
        return true
    };
    this.gtm = function() {
        var b = a.qbw.qmc("cmincredit") == null || a.qbw.tpi("cmincredit", "#srz");
        a.gwg = a.parent.lmm;
        a.qbw.tpi("mincreditd", "#zev", [(b === true && a.gwg > 0) ? a.parent.thh(a.gwg) : "---"]);
        a.qbw.tpi("lmincredit", "#coc", [b]);
        a.qbw.tpi("mmincredit", "#coc", [b && a.gwg < a.parent.lmm]);
        a.cul()
    };
    this.hig = function() {
        var b = a.qbw.qmc("cmaxcredit") == null || a.qbw.tpi("cmaxcredit", "#srz");
        a.ndj = a.parent.lmm;
        a.qbw.tpi("maxcreditd", "#zev", [(b === true && a.ndj > 0) ? a.parent.thh(a.ndj) : "---"]);
        a.qbw.tpi("lmaxcredit", "#coc", [b && a.ndj > a.parent.lmm]);
        a.qbw.tpi("mmaxcredit", "#coc", [b]);
        a.cul()
    };
    this.zeq = function() {
        var b = a.qbw.qmc("cmaxwin") == null || a.qbw.tpi("cmaxwin", "#srz");
        if (a.jsn === 0) {
            a.jsn = a.hvy
        }
        a.qbw.tpi("maxwind", "#zev", [(b === true && a.jsn > 0) ? a.parent.thh(a.jsn) : "---"]);
        a.qbw.tpi("lmaxwin", "#coc", [b && a.jsn > a.hvy]);
        a.qbw.tpi("mmaxwin", "#coc", [b]);
        a.cul()
    };
    this.grl = function() {
        a.ogv = 0;
        a.qbw.tpi("bett", "#evd", [true, false, false]);
        a.qbw.tpi("autot", "#evd", [false, false, false]);
        a.qbw.tpi("helpt", "#evd", [false, false, false]);
        a.qbw.tpi("settingt", "#evd", [false, false, false]);
        a.qbw.tpi("returnt", "#evd", [false, false, false]);
        a.qbw.nhs("bbuttons", "#cgv", [a.dfp]);
        a.qbw.nhs("bbuttons", "#coc", [a.dfp]);
        a.qbw.nhs("abuttons", "#cgv", [false]);
        a.qbw.nhs("acheckboxes", "#cgv", [false]);
        a.qbw.nhs("hbuttons", "#cgv", [false]);
        a.qbw.nhs("sbuttons", "#cgv", [false]);
        a.cul()
    };
    this.prl = function() {
        var d = a.qbw.qmc("cmincredit") == null || a.qbw.tpi("cmincredit", "#srz"),
            c = a.qbw.qmc("cmaxcredit") == null || a.qbw.tpi("cmaxcredit", "#srz"),
            b = a.qbw.qmc("cmaxwin") == null || a.qbw.tpi("cmaxwin", "#srz");
        a.ogv = 1;
        a.nqp = (a.mon > 0) ? a.parent.ifg() * a.mon : a.nqp;
        a.hvy = (a.udn > 0) ? a.parent.ifg() * a.udn : a.hvy;
        a.qbw.tpi("bett", "#evd", [false, false, false]);
        a.qbw.tpi("autot", "#evd", [true, false, false]);
        a.qbw.tpi("helpt", "#evd", [false, false, false]);
        a.qbw.tpi("settingt", "#evd", [false, false, false]);
        a.qbw.tpi("returnt", "#evd", [false, false, false]);
        a.qbw.nhs("bbuttons", "#cgv", [false]);
        a.qbw.nhs("abuttons", "#cgv", [true]);
        a.qbw.tpi("mmincredit", "#coc", [d && a.gwg < a.parent.lmm]);
        a.qbw.tpi("lmaxcredit", "#coc", [c && a.ndj > a.parent.lmm]);
        a.qbw.tpi("lmaxwin", "#coc", [b && a.jsn > a.hvy]);
        a.qbw.nhs("acheckboxes", "#cgv", [true]);
        a.qbw.nhs("hbuttons", "#cgv", [false]);
        a.qbw.nhs("sbuttons", "#cgv", [false]);
        if (a.vts === true) {
            a.qbw.tpi("cmincredit", "#cgv", [false])
        }
        a.cul()
    };
    this.vtd = function() {
        a.ogv = 2;
        a.qbw.tpi("bett", "#evd", [false, false, false]);
        a.qbw.tpi("autot", "#evd", [false, false, false]);
        a.qbw.tpi("helpt", "#evd", [true, false, false]);
        a.qbw.tpi("settingt", "#evd", [false, false, false]);
        a.qbw.tpi("returnt", "#evd", [false, false, false]);
        a.qbw.nhs("bbuttons", "#cgv", [false]);
        a.qbw.nhs("abuttons", "#cgv", [false]);
        a.qbw.nhs("acheckboxes", "#cgv", [false]);
        a.qbw.nhs("hbuttons", "#cgv", [true]);
        a.qbw.nhs("sbuttons", "#cgv", [false]);
        a.cul()
    };
    this.flb = function() {
        a.ogv = 3;
        a.qbw.tpi("bett", "#evd", [false, false, false]);
        a.qbw.tpi("autot", "#evd", [false, false, false]);
        a.qbw.tpi("helpt", "#evd", [false, false, false]);
        a.qbw.tpi("settingt", "#evd", [true, false, false]);
        a.qbw.tpi("returnt", "#evd", [false, false, false]);
        a.qbw.nhs("bbuttons", "#cgv", [false]);
        a.qbw.nhs("abuttons", "#cgv", [false]);
        a.qbw.nhs("acheckboxes", "#cgv", [false]);
        a.qbw.nhs("hbuttons", "#cgv", [false]);
        a.qbw.nhs("sbuttons", "#cgv", [true]);
        a.qbw.tpi("gamble", "#cgv", [a.vyr]);
        a.cul()
    };
    this.ekk = function() {
        a.parent.wrc();
        a.qbw.tpi("returnt", "#evd", [false, false, false])
    }
}
qtm.prototype = new fsx;

function lln() {
    var a = this;
    this.pxf = null;
    this.tgp = "bold";
    this.nip = "rgb(0,0,0)";
    this.hlr = null;
    this.ycy = "rgb(255,255,255)";
    this.tzr = null;
    this.vvu = "rgb(60,60,60)";
    this.tkn = null;
    this.sbm = null;
    this.kvs = false;
    this.tbr = [];
    this.jzb = [];
    this.poh = null;
    this.biq = 19;
    this.uxo = 15;
    this.qvn = 120;
    this.kkd = 2;
    this.fsv = 2;
    this.csg = 2;
    this.kjt = 10;
    this.jow = 12;
    this.bih = function(b, d, c) {
        lln.prototype.bih.call(this, b, d, c)
    };
    this.uad = function(b) {
        try {
            this.jow = b.fontSize;
            this.biq = b.qcy;
            this.uxo = b.bia;
            this.qvn = b.egc;
            this.kkd = b.scp;
            this.fsv = b.dav;
            this.csg = b.jqn;
            this.kjt = b.isf
        } catch (c) {
            console.error(c)
        }
    };
    this.ygz = function(b) {
        try {
            this.pxf = b.font;
            this.tgp = b.nkj;
            this.nip = b.backgroundColor;
            this.hlr = b.zio;
            this.ycy = b.gqn;
            this.vvu = b.borderColor;
            this.tzr = b.tgc;
            if (this.hlr) {
                this.tkn = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.tkn.addColorStop(0, this.hlr);
                this.tkn.addColorStop(0.5, this.nip)
            } else {
                this.tkn = this.nip
            }
            if (this.tzr) {
                this.sbm = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.sbm.addColorStop(0, this.tzr);
                this.sbm.addColorStop(1, this.vvu)
            } else {
                this.sbm = this.vvu
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.xba = function(b, g, c) {
        var e = b - this.x,
            d = g - this.y,
            f = (c && c === true) ? this.kjt : 0;
        if (e >= this.x && e <= this.x + this.width && d >= this.y && d <= this.y + this.height + f && this.aqx()) {
            this.parent.wqw();
            return true
        }
        return false
    };
    this.duc = function(d, b, c) {
        this.jzb.push({
            id: d,
            zlp: b,
            value: c,
            ozz: null
        })
    };
    this.vla = function(e, c, d, b) {
        this.jzb.push({
            id: e,
            zlp: c,
            value: d,
            ozz: b
        })
    };
    this.hhq = function(d, b, c) {
        this.tbr.push({
            id: d,
            ofv: b,
            value: c
        })
    };
    this.ogm = function(e, d) {
        for (var c = 0, b = this.jzb.length; c < b; c++) {
            if (this.jzb[c].id == e) {
                this.jzb[c].value = d;
                return true
            }
        }
        return false
    };
    this.dvm = function(c, e) {
        for (var d = 0, b = c.length; d < b; d++) {
            if (c[d] == e) {
                return d
            }
        }
        return -1
    };
    this.yxf = function(e, d) {
        for (var c = 0, b = this.tbr.length; c < b; c++) {
            if (this.tbr[c].id == e) {
                if (this.tbr[c].value != d) {
                    this.tbr[c].value = d;
                    return true
                } else {
                    return false
                }
            }
        }
        return false
    };
    this.bqw = function(b) {
        this.poh = b
    };
    this.cgv = function(b) {
        this.kvs = b
    };
    this.aqx = function(b) {
        return this.kvs
    };
    this.exq = function(c, b) {
        if (this.ogm(c, b)) {
            window.rke(a.cul)
        }
    };
    this.wsq = function(c, b) {
        if (this.yxf(c, b)) {
            window.rke(a.cul)
        }
    };
    this.bye = function(b) {
        this.bqw(b);
        window.rke(a.cul)
    };
    this.cul = function() {
        if (!a.pod() || !a.parent.jpj()) {
            return
        }
        var e = (a.height - a.jow) / 2 + a.fsv,
            c = a.kkd + a.biq * a.jzb.length,
            d = a.width - c - (a.qvn * a.tbr.length),
            b = a.context2D;
        b.save();
        ysp.ekr.jry(b, 0, 0, a.width, a.height, a.tkn, 1);
        a.nrn(b, e);
        a.tjs(b, e);
        if (a.poh && a.poh != "") {
            ysp.ekr.trw(b, a.poh, a.ycy, c, e, d, a.jow, a.pxf, a.jow, a.tgp)
        } else {
            if (a.aqx()) {
                a.ocx(b)
            }
        }
        a.kgh(b, 0, a.height - a.csg / 2, a.width, a.height - a.csg / 2);
        b.restore();
        if (a.msg && a.hyg) {
            a.msg.drawImage(a.hyg, a.x, a.y)
        }
    };
    this.nrn = function(d, g) {
        var c = 0;
        for (var f = 0, b = this.jzb.length; f < b; f++) {
            if (this.jzb[f].ozz) {
                var e = this.dvm(this.jzb[f].ozz, this.jzb[f].value);
                if (this.jzb[f].zlp instanceof Array) {
                    ysp.ekr.trw(d, this.jzb[f].zlp[e], this.ycy, c, g, this.biq, this.jow, this.pxf, this.jow, this.tgp)
                } else {
                    if (this.jzb[f].zlp instanceof Image || this.jzb[f].zlp instanceof HTMLCanvasElement) {
                        d.drawImage(this.jzb[f].zlp, e * this.uxo, 0, this.uxo, this.jzb[f].zlp.height, c + this.kkd, g - this.fsv, this.biq - 2 * this.kkd, this.jow)
                    }
                }
            } else {
                d.save();
                d.globalAlpha = (this.jzb[f].value == true) ? 1 : 0.3;
                if (this.jzb[f].zlp instanceof String) {
                    ysp.ekr.trw(d, this.jzb[f].zlp, this.ycy, c, g, this.biq, this.jow, this.pxf, this.jow, this.tgp)
                } else {
                    if (this.jzb[f].zlp instanceof Image || this.jzb[f].zlp instanceof HTMLCanvasElement) {
                        d.drawImage(this.jzb[f].zlp, c + this.kkd, g - this.fsv, this.biq - 2 * this.kkd, this.jow)
                    }
                }
                d.restore()
            }
            c += this.biq;
            this.kgh(d, c, 0, c, this.height)
        }
        return c
    };
    this.tjs = function(d, f) {
        var c = this.width - this.kkd - this.qvn * this.tbr.length;
        for (var e = 0, b = this.tbr.length; e < b; e++) {
            if (this.tbr[e].id == "freeplay") {
                ysp.ekr.jry(d, c, 0, this.qvn, this.height, "red", 0.4)
            } else {
                if (this.tbr[e].id == "freespin") {
                    ysp.ekr.jry(d, c, 0, this.qvn, this.height, "rgb(100,255,100)", 0.5)
                }
            }
            this.kgh(d, c, 0, c, this.height);
            ysp.ekr.trw(d, this.tbr[e].ofv + this.tbr[e].value, this.ycy, c, f, this.qvn, this.jow, this.pxf, this.jow, this.tgp);
            c += this.qvn
        }
    };
    this.kgh = function(b, d, f, c, e) {
        b.save();
        b.strokeStyle = this.sbm;
        b.lineWidth = this.csg;
        b.beginPath();
        b.moveTo(d, f);
        b.lineTo(c, e);
        b.stroke();
        b.restore()
    };
    this.ocx = function(c) {
        if (this.parent.llt.qmc("topb") == null) {
            return
        }
        var g = 3 * this.height,
            j = this.csg,
            e = 9,
            d = Math.floor(this.height / 5),
            b = (this.width - g) / 2,
            k = this.csg;
        c.save();
        c.strokeStyle = this.vvu;
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
lln.prototype = new fsx;

function uym() {
    var b = this;
    var c = 0;
    var a = 1;
    this.vwf = 7;
    this.zvw = 89;
    this.vuf = 10000;
    this.qbw = null;
    this.kvs = false;
    this.xuo = false;
    this.gft = -1;
    this.wok = 0;
    this.pxf = null;
    this.tgp = "bold";
    this.nip = "black";
    this.gns = null;
    this.tub = null;
    this.qxe = null;
    this.ycy = "white";
    this.dlg = 0.8;
    this.mqr = 0;
    this.txd = 0;
    this.rae = 0;
    this.dqh = 0;
    this.lsb = 0;
    this.und = 0;
    this.pjd = 0;
    this.kkd = 10;
    this.fsv = 5;
    this.fqe = 10;
    this.vea = this.kkd;
    this.vzv = 10;
    this.uky = 20;
    this.ura = 40;
    this.kuf = 4;
    this.jow = 10;
    this.qde = null;
    this.iej = null;
    this.gxd = "";
    this.crk = null;
    this.bih = function(d, f, e) {
        uym.prototype.bih.call(this, d, f, e);
        this.qbw = new irf();
        this.qbw.bih();
        this.qbw.vpa("buttons");
        this.qbw.vpa("system");
        this.qbw.vpa("setting")
    };
    this.uad = function(d) {
        try {
            this.jow = d.fontSize;
            this.vzv = d.wia;
            this.uky = d.ykt;
            this.ura = d.jls;
            this.kuf = d.qwc;
            this.kkd = d.scp;
            this.fsv = d.dav;
            this.fqe = d.ilp
        } catch (f) {
            console.error(f)
        }
    };
    this.ygz = function(g, m) {
        try {
            var k = this.qbw.fbh("buttons"),
                j = (m === true) ? g.bqp.rvj : g.ygm.rvj;
            this.pxf = g.font;
            this.tgp = g.nkj;
            this.nip = g.backgroundColor;
            this.gns = g.elz;
            this.tub = g.hqq;
            this.ycy = g.gqn;
            this.dlg = g.djr;
            if (this.gns && this.tub) {
                this.qxe = this.context2D.createLinearGradient(0, 0, this.width, 0);
                this.qxe.addColorStop(0, this.gns);
                this.qxe.addColorStop(0.5, this.tub);
                this.qxe.addColorStop(1, this.gns)
            }
            for (var f = 0, d = k.length; f < d; f++) {
                k[f].ygz(j)
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.xba = function(p, o) {
        var n = this.qbw.dla(),
            q = this.qbw.qmc("audio"),
            r = this.qbw.qmc("language"),
            f = this.qbw.qmc("history"),
            e = p - this.x,
            d = o - this.y;
        if (this.xuo) {
            return true
        }
        for (var l = 0, m = n.length; l < m; l++) {
            var g = n[l];
            if (e >= g.x && e <= g.x + g.width && d >= g.y && d <= g.y + g.height && g.pod()) {
                if (g.aqx() && !g.pqi()) {
                    if (g != q && g != r) {
                        this.parent.wba.ntp("btn");
                        this.parent.wba.dyw("btn")
                    }
                    g.evd(true, true, false);
                    g.jan();
                    for (var k = 0; k < m; k++) {
                        n[k].kbg(true)
                    }
                    if (g != f) {
                        if (this.gft >= 0) {
                            clearTimeout(this.gft);
                            this.gft = -1
                        }
                        this.gft = setTimeout(this.uqo, this.vuf)
                    }
                }
                return true
            }
        }
        if (this.pod() && this.aqx()) {
            if (p < this.x + this.lsb || p > this.x + this.lsb + this.und || o < this.y || o > this.y + this.height) {
                if (this.gft >= 0) {
                    clearTimeout(this.gft);
                    this.gft = -1
                }
                return false
            }
        }
        return true
    };
    this.opg = function() {
        var g = this.qbw.dla();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.rqv() == true) {
                e.evd(false, true);
                return true
            }
        }
        return false
    };
    this.zfi = function(e) {
        var o = this.qbw.dla(),
            d = this.qbw.fbh("system"),
            m = this.qbw.fbh("setting"),
            q = this.qbw.qmc("audio"),
            l = 0,
            k = 0,
            n = 0,
            g = 0;
        if (this.xuo) {
            return true
        }
        for (l = 0, n = m.length; l < n; l++) {
            var f = m[l];
            if ((e == f.zzo || e == f.xpy) && !f.pqi()) {
                if (f != q) {
                    this.parent.wba.ntp("btn");
                    this.parent.wba.dyw("btn")
                }
                f.evd(true, true, false);
                f.jan();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].kbg(true)
                }
                if (this.gft >= 0) {
                    clearTimeout(this.gft);
                    this.gft = -1
                }
                return true
            }
        }
        for (l = 0, n = d.length; l < n; l++) {
            var f = d[l];
            if ((e == f.zzo || e == f.xpy) && f.aqx() && !f.pqi()) {
                if (f != q) {
                    this.parent.wba.ntp("btn");
                    this.parent.wba.dyw("btn")
                }
                f.evd(true, true, false);
                f.jan();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].kbg(true)
                }
                if (this.gft >= 0) {
                    clearTimeout(this.gft);
                    this.gft = -1
                }
                return true
            }
        }
        if (this.pod() && this.aqx()) {
            if (this.parent.wjo) {
                for (l = 0, n = this.parent.wjo.uwf.length; l < n; l++) {
                    var p = this.parent.wjo.uwf[l];
                    if (p.okl == e || p.okl == e) {
                        if (this.gft >= 0) {
                            clearTimeout(this.gft);
                            this.gft = -1
                        }
                        return false
                    }
                }
            }
        }
        return false
    };
    this.unq = function() {
        var g = this.qbw.dla();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.rqv() == true) {
                e.evd(false, true, false);
                return true
            }
        }
        return false
    };
    this.njw = function(e, m) {
        var k = this.qbw.dla(),
            l = e - this.x,
            j = m - this.y;
        this.iej = this.qde;
        this.qde = null;
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l >= f.x && l <= f.x + f.width && j >= f.y && j <= f.y + f.height && f.pod() && f.aqx() && !f.pqi()) {
                this.qde = f
            }
        }
        if (this.qde) {
            this.zih(true)
        } else {
            this.zih(false)
        }
        return true
    };
    this.qmg = function(e, f, g, i, l, d, m) {
        this.pjd = g.width;
        var k = new pjy(this.vea, this.fsv, this.pjd, this.pjd);
        var j = new nqo();
        j.bih(k, this.context2D);
        j.parent = this;
        j.jan = i;
        j.qgx = f;
        j.beu(d, m);
        j.uad(this.parent.gof.ydd.teg);
        j.ygz(this.parent.style.ydd.ygm.rvj);
        j.gnk(g);
        if (l != null) {
            j.xpy = l.lgh;
            j.zzo = l.okl;
            j.drd = l.value
        }
        this.qbw.zth(e, j, ["buttons", "setting"]);
        this.vea += this.pjd + this.kkd;
        this.und = this.vea
    };
    this.ozl = function(k, j, i, g, e) {
        this.pjd = i.width;
        var f = new pjy(this.vea, this.fsv, this.pjd, this.pjd);
        var d = new nqo();
        d.bih(f, this.context2D);
        d.parent = this;
        d.jan = g;
        d.qgx = j;
        d.uad(this.parent.gof.ydd.teg);
        d.ygz(this.parent.style.ydd.ygm.rvj);
        d.gnk(i);
        if (e != null) {
            d.xpy = e.lgh;
            d.zzo = e.okl;
            d.drd = e.value
        }
        this.qbw.zth(k, d, ["buttons", "system"]);
        this.vea += this.pjd + this.kkd;
        this.und = this.vea
    };
    this.lwf = function() {
        var f = this.qbw.dla();
        this.und += 2 * this.fqe;
        this.lsb = Math.round((this.width - this.und) / 2);
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].x += this.lsb + this.fqe
        }
    };
    this.hta = function() {
        return this.und
    };
    this.cgv = function(d) {
        this.kvs = d
    };
    this.aqx = function() {
        return this.kvs
    };
    this.jjr = function(g) {
        var f = this.qbw.dla();
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].cgv(g)
        }
        this.parent.cul()
    };
    this.enb = function(g) {
        var f = this.qbw.fbh("system");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].cgv(g)
        }
        this.parent.cul()
    };
    this.jbo = function(g) {
        var f = this.qbw.fbh("setting");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].cgv(g)
        }
        this.parent.cul()
    };
    this.ogy = function() {
        if (this.pod()) {
            return
        }
        if (this.xuo) {
            if (this.dqh === a) {
                this.crk = this.ogy
            } else {
                this.crk = null
            }
        } else {
            this.crk = null;
            this.kzy();
            this.nxq()
        }
    };
    this.pte = function(d) {
        if (this.parent.uay) {
            this.parent.uay()
        }
        this.stop();
        this.xuo = false;
        this.crk = null;
        this.coc(true, d);
        if (this.gft >= 0) {
            clearTimeout(this.gft);
            this.gft = -1
        }
        this.gft = setTimeout(this.uqo, this.vuf)
    };
    this.uqo = function() {
        if (b.pod()) {
            b.parent.wba.ntp("panel_out");
            b.parent.wba.dyw("panel_out");
            b.uaw()
        }
    };
    this.uaw = function() {
        if (!this.pod()) {
            return
        }
        if (this.xuo) {
            if (this.dqh === c) {
                this.crk = this.uaw
            } else {
                this.crk = null
            }
        } else {
            this.crk = null;
            this.mrq();
            this.nxq();
            if (this.gft >= 0) {
                clearTimeout(this.gft);
                this.gft = -1
            }
        }
    };
    this.ctn = function(d) {
        if (this.parent.obp) {
            this.parent.obp()
        }
        this.stop();
        this.xuo = false;
        this.crk = null;
        this.coc(false, d);
        if (typeof this.okk === "function") {
            this.okk();
            this.okk = null
        }
    };
    this.kzy = function() {
        this.coc(true);
        this.xuo = true;
        this.kvs = false;
        this.dqh = c;
        this.mqr = Math.floor(this.height / this.vwf);
        this.rae = 1;
        this.txd = Math.floor(this.height / this.vwf)
    };
    this.mrq = function() {
        if (this.parent.obp) {
            this.parent.obp()
        }
        this.xuo = true;
        this.kvs = false;
        this.dqh = a;
        this.mqr = -Math.floor(this.height / this.vwf);
        this.rae = 1;
        this.txd = this.height
    };
    this.nxq = function() {
        this.wok = setInterval(this.aax, this.zvw)
    };
    this.ydy = function() {
        if (b.dqh == c) {
            if (b.parent.uay) {
                b.parent.uay()
            }
            if (b.gft >= 0) {
                clearTimeout(b.gft);
                b.gft = -1
            }
            b.gft = setTimeout(b.uqo, b.vuf)
        }
        clearInterval(b.wok);
        if (b.crk) {
            b.crk()
        }
    };
    this.stop = function() {
        clearTimeout(this.gft);
        clearInterval(this.wok);
        this.gft = -1
    };
    this.aax = function() {
        if (!b.rav()) {
            b.ydy()
        }
    };
    this.rav = function() {
        if (b.rae < b.vwf) {
            b.parent.cul(b.x, b.y, b.width, b.height);
            b.txd += b.mqr;
            b.rae++;
            return true
        } else {
            b.xuo = false;
            b.kvs = true;
            if (b.dqh == a) {
                b.coc(false);
                if (typeof b.okk === "function") {
                    b.okk();
                    b.okk = null
                }
            }
            b.parent.cul(b.x, b.y, b.width, b.height);
            return false
        }
    };
    this.cul = function(n, m, o, g) {
        if (!this.pod() || !this.parent.jpj()) {
            return
        }
        var p = this.context2D,
            e = (n != null && m != null && o != null && g != null),
            l = this.qbw.dla(),
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
        this.pwr(p);
        for (var f = 0, j = l.length; f < j; f++) {
            l[f].cul()
        }
        if (this.qde && this.gxd != "") {
            k = this.qde.x - this.kkd - this.pjd;
            d = 3 * this.pjd + 2 * this.kkd;
            if (k + d >= this.lsb + this.und) {
                k = this.lsb + this.und - d;
                ysp.ekr.vsi(p, this.gxd, this.ycy, k, this.qde.y + this.qde.height, d, this.jow, this.pxf, this.jow, this.tgp, this.kkd)
            } else {
                ysp.ekr.trw(p, this.gxd, this.ycy, k, this.qde.y + this.qde.height, d, this.jow, this.pxf, this.jow, this.tgp)
            }
        }
        p.restore();
        if (this.xuo) {
            if (this.msg && this.hyg && this.txd > 0) {
                this.msg.drawImage(this.hyg, 0, this.height - this.txd, this.width, this.txd, this.x, this.y, this.width, this.txd)
            }
        } else {
            if (e) {
                this.parent.cul(this.x + n, this.y + m, o, g)
            } else {
                if (this.msg && this.hyg) {
                    this.msg.drawImage(this.hyg, this.x, this.y)
                }
            }
        }
    };
    this.pwr = function(d) {
        var f = this.kuf,
            e = f / 2;
        d.save();
        d.strokeStyle = this.qxe;
        d.fillStyle = this.nip;
        d.lineWidth = f;
        d.beginPath();
        d.moveTo(e, 0);
        d.arcTo(e, this.vzv, this.vzv + e, this.vzv, this.vzv);
        d.arcTo(this.lsb, this.vzv, this.lsb, this.height - this.uky - e, this.ura);
        d.arcTo(this.lsb, this.height - e, this.lsb + this.uky, this.height - e, this.uky);
        d.lineTo(this.lsb + this.und - this.uky, this.height - e);
        d.arcTo(this.lsb + this.und, this.height - e, this.lsb + this.und, this.height - this.uky - e, this.uky);
        d.arcTo(this.lsb + this.und, this.vzv, this.width - this.vzv - e, this.vzv, this.ura);
        d.arcTo(this.width - e, this.vzv, this.width - e, 0, this.vzv);
        d.stroke();
        d.closePath();
        d.globalAlpha = this.dlg;
        d.fill();
        d.restore()
    };
    this.zih = function(d) {
        if (this.qde && this.qde != this.iej) {
            if (d && this.qde) {
                this.gxd = this.parent.oxp(this.qde.qgx);
                if (!ysp.ekr.myr) {
                    this.gxd = (this.qde.drd) ? this.gxd + " [" + this.qde.drd + "]" : this.gxd
                }
            } else {
                this.gxd = ""
            }
            this.parent.cul(this.x, this.y, this.width, this.height)
        } else {
            if (d && (this.qde && this.gxd != this.parent.oxp(this.qde.qgx))) {
                this.gxd = this.parent.oxp(this.qde.qgx);
                if (!ysp.ekr.myr) {
                    this.gxd = (this.qde.drd) ? this.gxd + " [" + this.qde.drd + "]" : this.gxd
                }
            }
            this.parent.cul(this.x, this.y, this.width, this.height)
        }
    };
    this.okk = null
}
uym.prototype = new fsx;

function bbv() {
    var a = this;
    this.fkb = "LOADING ... ";
    this.lan = "ERROR";
    this.hlw = null;
    this.eqk = null;
    this.gqj = false;
    this.pvf = false;
    this.ujo = true;
    this.jan = null;
    this.eap = null;
    this.ude = null;
    this.wok = 0;
    this.geh = 0;
    this.obq = false;
    this.tao = 0;
    this.rzw = 60;
    this.qbl = 0;
    this.pxf = "arial";
    this.tgp = "bold";
    this.efa = "black";
    this.qff = "rgb(0,100,10)";
    this.ghr = "rgb(80,255,100)";
    this.pcl = "rgb(120,120,120)";
    this.itk = "red";
    this.pjq = "white";
    this.ycy = "yellow";
    this.jow = 14;
    this.ick = 18;
    this.oes = 20;
    this.gus;
    this.fsc;
    this.hnz;
    this.adb;
    this.fqe = 5;
    this.kkd = 12;
    this.fsv = 5;
    this.qyo = 2;
    this.yfy = new pjy();
    this.qpm = new pjy();
    this.fxj = [];
    this.hbb = 0;
    this.vqg = 20;
    this.bih = function(b, d, c) {
        bbv.prototype.bih.call(this, b, d, c);
        this.eap = document.createElement("canvas");
        this.ude = this.eap.getContext("2d")
    };
    this.uad = function(b) {
        try {
            this.jow = b.fontSize;
            this.ick = b.muu;
            this.oes = b.xme;
            this.fqe = b.ilp;
            this.kkd = b.scp;
            this.fsv = b.dav;
            this.qyo = b.jeg;
            this.gus = b.ypx;
            this.fsc = b.ejr;
            this.hnz = b.ddt;
            this.adb = b.eqy;
            this.yfy = b.wam;
            if (this.qpm.width > 0 && this.qpm.height) {
                this.tiv()
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.ygz = function(b) {
        try {
            this.pxf = b.font;
            this.tgp = b.nkj;
            this.efa = b.backgroundColor;
            this.qff = b.qud;
            this.ghr = b.abo;
            this.pcl = b.thw;
            this.itk = b.nhv;
            this.pjq = b.ohl;
            this.ycy = b.gqn;
            this.eqk = b.eqk
        } catch (c) {
            console.error(c)
        }
    };
    this.xba = function(b, e) {
        var d = b - this.x,
            c = e - this.y;
        if (d >= this.qpm.x && d <= this.qpm.x + this.qpm.width && c >= this.qpm.y && c <= this.qpm.y + this.qpm.height) {
            this.jan();
            return true
        }
        return false
    };
    this.cul = function(b) {
        if (b && b >= 0) {
            this.geh = b
        }
        if (!this.pod()) {
            return
        }
        if (ysp.lct.value45 == ysp.auj.tfo) {
            this.smx()
        } else {
            if (ysp.lct.value45 == ysp.auj.ovq) {
                this.djw()
            }
        }
    };
    this.smx = function() {
        if (this.gqj) {
            var c = this.context2D,
                b = this.hnz.width / 100;
            c.save();
            if (this.pvf === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.wba.vjf("splash"), 0, 0, this.width, this.height);
            if (this.eqk) {
                ysp.ekr.jry(c, this.fqe, this.fqe, this.width - 2 * this.fqe, this.height - 2 * this.fqe, this.eqk, 0.3)
            }
            if (this.hlw != null && this.hlw != "") {
                this.uov(this.adb, true)
            } else {
                if (this.obq) {
                    ysp.ekr.jry(c, this.yfy.x, this.yfy.y, this.yfy.width, this.yfy.height, this.efa, 0.7);
                    c.drawImage(this.eap, this.yfy.x + this.yfy.width * (1 - this.fxj[this.hbb]) / 2, this.yfy.y + this.yfy.height * (1 - this.fxj[this.hbb]) / 2, this.yfy.width * this.fxj[this.hbb], this.yfy.height * this.fxj[this.hbb])
                } else {
                    if (this.ujo === true) {
                        if (this.pvf === false) {
                            ysp.ekr.jry(c, this.gus.x, this.gus.y, this.gus.width, this.gus.height, this.efa, 0.7)
                        }
                        var e = this.fkb + " " + this.geh + "%";
                        var d = c.createLinearGradient(this.hnz.x, this.hnz.y, this.hnz.x + this.hnz.width, this.hnz.y);
                        d.addColorStop(0, this.qff);
                        d.addColorStop(1, this.ghr);
                        ysp.ekr.trw(c, e, this.pjq, this.fsc.x, this.fsc.y, this.fsc.width, this.fsc.height, this.pxf, this.jow, this.tgp);
                        ysp.ekr.ytc(c, this.hnz.x - this.qyo, this.hnz.y, this.hnz.width + 2 * this.qyo, this.hnz.height, this.qyo, this.efa, 0.8, this.pcl, this.qyo, 0.8);
                        ysp.ekr.jry(c, this.hnz.x, this.hnz.y + this.qyo / 2, b * this.geh, this.hnz.height - this.qyo, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.djw = function() {
        if (this.gqj) {
            var c = this.context2D,
                b = this.hnz.width / 100;
            c.save();
            if (this.pvf === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.wba.vjf("splash"), 0, 0, this.width, this.height);
            if (this.hlw != null && this.hlw != "") {
                this.uov(this.adb, true)
            } else {
                if (this.obq) {
                    c.drawImage(this.parent.wba.vjf("continue"), this.yfy.x, this.yfy.y, this.yfy.width, this.yfy.height);
                    c.drawImage(this.eap, this.yfy.x + this.yfy.width * (1 - this.fxj[this.hbb]) / 2, this.yfy.y + this.yfy.height * (1 - this.fxj[this.hbb]) / 2, this.yfy.width * this.fxj[this.hbb], this.yfy.height * this.fxj[this.hbb])
                } else {
                    if (this.ujo === true) {
                        ysp.ekr.jry(c, this.hnz.x, this.hnz.y, this.hnz.width, this.hnz.height, "rgb(0,0,0)", 0.5);
                        ysp.ekr.jry(c, this.hnz.x, this.hnz.y, b * this.geh, this.hnz.height, "rgb(0,250,0)", 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.uov = function(c, m) {
        var l = this.context2D,
            o = [],
            d = this.jow,
            k = this.hlw,
            f = "",
            t = 0,
            v = 0,
            s = 0,
            u = 0,
            n = "center",
            e = Math.round(d * 1.5),
            j = Math.round(this.ick * 1.5),
            b = 0,
            w = 1,
            q = 0,
            g = 0;
        l.save();
        l.font = this.tgp + " " + d + "px " + this.pxf;
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
                    if (u >= c.width - 2 * this.kkd) {
                        o[v] = k.substring(s, t);
                        v++;
                        s = t + 1;
                        f = k.substring(t + 1, p)
                    }
                }
            }
        }
        b = v * (e);
        if (b > (c.height - j - this.fsv)) {
            w = (c.height - j - this.fsv) / b;
            d = Math.round(d * w) - 1;
            l.font = this.tgp + " " + d + "px " + this.pxf;
            e = Math.round(d * 1.5);
            b = v * (e)
        }
        if (d < 10) {
            w = 10 / d;
            d = Math.round(d * w);
            l.font = this.tgp + " " + d + "px " + this.pxf;
            e = Math.round(d * 1.5);
            b = v * (e);
            g = (c.height - (j + b + this.fsv));
            c.height = j + b + this.fsv;
            c.y += g
        }
        l.textAlign = n;
        l.lineJoin = "round";
        l.lineCap = "round";
        if (m && m === true) {
            ysp.ekr.jry(l, c.x, c.y, c.width, c.height, this.efa, 0.7)
        }
        if (this.lan != null) {
            l.font = this.tgp + " " + this.ick + "px " + this.pxf;
            l.fillStyle = this.itk;
            l.textBaseline = "bottom";
            l.fillText(this.lan, c.x + c.width / 2, c.y + this.ick + this.fsv)
        }
        l.font = this.tgp + " " + d + "px " + this.pxf;
        l.fillStyle = this.pjq;
        if (o.length == 1) {
            q = j + b + e;
            l.fillText(o[0], (c.x + c.width / 2), c.y + q)
        } else {
            for (var p = 0, r = o.length; p < r; p++) {
                q = j + (b + e) / (r + 1) * (p + 1);
                if (n == "start") {
                    l.fillText(o[p], (c.x + this.kkd), c.y + q)
                } else {
                    l.fillText(o[p], (c.x + c.width / 2), c.y + q)
                }
            }
        }
        l.restore()
    };
    this.ujh = function() {
        return (this.obq)
    };
    this.aow = function() {
        for (var b = 0; b < this.vqg; b++) {
            this.fxj[b] = 1 - Math.sin(Math.PI * b / (this.vqg - 1)) * 0.04
        }
        this.fxj[this.vqg - 1] = 1;
        this.obq = true;
        this.hbb = 0;
        this.tiv();
        this.wok = setInterval(this.chp, this.rzw);
        this.cul()
    };
    this.chp = function() {
        a.cul();
        a.hbb = (a.hbb < a.vqg - 1) ? a.hbb + 1 : 0
    };
    this.stop = function() {
        this.obq = false;
        clearTimeout(this.wok)
    };
    this.tiv = function() {
        var b = this.ude;
        this.qpm = this.yfy;
        this.eap.width = Math.round(this.qpm.width);
        this.eap.height = Math.round(this.qpm.height);
        b.save();
        b.clearRect(0, 0, this.eap.width, this.eap.height);
        ysp.ekr.lwj(b, this.parent.language.vsx, this.ycy, 0, 0, this.eap.width, this.eap.height, this.pxf, this.oes, this.tgp, "center", true);
        b.restore()
    }
}
bbv.prototype = new fsx;

function ari() {
    var b = this;
    var c = 0;
    var a = 1;
    var e = 2;
    var d = 3;
    this.tbt = null;
    this.jmm = null;
    this.zsi = null;
    this.auh = null;
    this.ouv = null;
    this.zvb = [];
    this.hgi = 0;
    this.cys = [];
    this.hqr = [];
    this.ogv = 0;
    this.zay = false;
    this.wqo = false;
    this.bih = function() {
        this.tbt = document.getElementById("messageOverlay");
        this.jmm = document.getElementById("messagePanel");
        this.zsi = document.getElementById("messageTitle");
        this.auh = document.getElementById("messageText");
        this.ouv = document.getElementById("btne");
        if (this.ouv) {
            this.ouv.innerHTML = "\u00D7";
            this.ouv.onclick = this.uaw;
            this.ouv.ontouchend = this.uaw
        }
        for (var f = 0; f < 4; f++) {
            this.zvb[f] = document.getElementById("btn" + (f + 1))
        }
    };
    this.ygz = function(f) {
        try {
            this.cys = f.tre
        } catch (g) {
            console.error(g)
        }
    };
    this.uad = function(j) {
        try {
            if (this.jmm) {
                ysp.ekr.ggr(this.jmm, j.quz)
            }
            if (this.zsi) {
                this.zsi.style.fontSize = j.huy + "px";
                ysp.ekr.ggr(this.zsi, j.tus)
            }
            if (this.auh) {
                this.auh.style.fontSize = j.bmr + "px";
                ysp.ekr.ggr(this.auh, j.jyq)
            }
            if (this.ouv) {
                ysp.ekr.ggr(this.ouv, j.lyf)
            }
            for (var g = 0, f = this.zvb.length; g < f; g++) {
                this.zvb[g].style.fontSize = j.teg.fontSize + "px";
                this.zvb[g].style.top = j.iny.y + "px";
                this.zvb[g].style.height = j.iny.height + "px"
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.ogy = function(j) {
        this.hqr.length = 0;
        this.ogv = 0;
        for (var g = 0, f = j.length; g < f; g++) {
            this.hqr[g] = j[g]
        }
        this.skq(this.hqr[this.ogv])
    };
    this.uaw = function() {
        if (b.jmm) {
            b.wqo = false;
            b.jmm.style.display = "none";
            b.tbt.style.display = "none";
            ysp.hpw.tgl();
            ysp.hpw.uiw = false
        }
    };
    this.skq = function(l) {
        var n = this.hqr.length > 1,
            m = "";
        if (l.Buttons && l.Buttons.length >= 1) {
            for (var k = l.Buttons.length - 1; k >= 0; k--) {
                if (l.Buttons[k].Action.toLowerCase() == "cashier") {
                    l.Buttons.splice(k, 1)
                }
            }
        }
        if (l.sit === ysp.ezq.rja || l.sit === ysp.ezq.hsv) {
            this.hgi = d;
            this.zay = (l.DisplayType == ysp.uhg.spf.eyr) ? true : false
        } else {
            if (l.sit === ysp.ezq.yvv || l.sit === ysp.ezq.zbg || l.sit === ysp.ezq.bvy || l.sit === ysp.ezq.roulette.qhb || l.sit === ysp.ezq.roulette.tii) {
                this.hgi = a;
                this.zay = false
            } else {
                if (l.sit === ysp.ezq.bgq || l.sit === ysp.ezq.nad) {
                    this.hgi = c;
                    this.zay = false
                } else {
                    if (l.sit === ysp.ezq.spd || l.sit === ysp.ezq.sfa || l.sit === ysp.ezq.bjy) {
                        this.hgi = e;
                        this.zay = false
                    }
                }
            }
        }
        if (l.Title && this.zsi) {
            this.zsi.style.color = this.cys[this.hgi];
            this.zsi.innerHTML = l.Title
        }
        if (l.Text && this.auh) {
            this.auh.innerHTML = l.Text.replace(/[\r]?\n/g, "<br>")
        }
        if (n) {
            this.zvb[0].innerHTML = "\u2039";
            this.zvb[0].onclick = this.xlm;
            this.zvb[0].ontouchend = this.xlm;
            this.zvb[0].style.display = "inline-block";
            this.zvb[this.zvb.length - 1].innerHTML = "\u203A";
            this.zvb[this.zvb.length - 1].onclick = this.lol;
            this.zvb[this.zvb.length - 1].ontouchend = this.lol;
            this.zvb[this.zvb.length - 1].style.display = "inline-block"
        }
        for (var k = 0, g = (n) ? 1 : 0, f = (n) ? this.zvb.length - 1 : this.zvb.length; g < f; g++, k++) {
            if (l.Buttons && k < l.Buttons.length) {
                m = l.Buttons[k].Text;
                if (m.indexOf("_") != 0) {
                    this.zvb[g].innerHTML = m
                } else {
                    var j = m.substr(1);
                    if (j == "exit") {
                        this.zvb[g].innerHTML = ysp.hpw.language.nkt
                    } else {
                        if (j == "continue") {
                            this.zvb[g].innerHTML = ysp.hpw.language.vsx.replace(/ /g, "")
                        } else {
                            this.zvb[g].innerHTML = j.toUpperCase()
                        }
                    }
                }
                if (l.Buttons[k].Action.toLowerCase() == "quit") {
                    this.zvb[g].onclick = ysp.hpw.uze;
                    this.zvb[g].ontouchend = ysp.hpw.uze
                } else {
                    if (l.Buttons[k].Action.toLowerCase() == "continue") {
                        if (l.sit === ysp.ezq.rja) {
                            this.zvb[g].onclick = this.guz.bind(this, l.Buttons[k].Link);
                            this.zvb[g].ontouchend = this.guz.bind(this, l.Buttons[k].Link)
                        } else {
                            if (l.sit === ysp.ezq.hsv || l.sit === ysp.ezq.spd || l.sit === ysp.ezq.sfa) {
                                this.zvb[g].onclick = this.ehr;
                                this.zvb[g].ontouchend = this.ehr
                            } else {
                                if (l.sit === ysp.ezq.bgq || l.sit === ysp.ezq.nad || l.sit === ysp.ezq.bjy) {
                                    this.zvb[g].onclick = this.mfg;
                                    this.zvb[g].ontouchend = this.mfg
                                }
                            }
                        }
                    } else {
                        if (l.Buttons[k].Action.toLowerCase() == "history") {
                            this.zvb[g].onclick = ysp.hpw.hog;
                            this.zvb[g].ontouchend = ysp.hpw.hog
                        } else {
                            if (l.Buttons[k].Action.toLowerCase() == "link") {
                                if (l.Buttons[k].LinkType === ysp.uhg.uor.dgn) {
                                    this.zvb[g].onclick = this.gxb.bind(this, l.Buttons[k].Link);
                                    this.zvb[g].ontouchend = this.gxb.bind(this, l.Buttons[k].Link)
                                } else {
                                    if (l.Buttons[k].LinkType === ysp.uhg.uor.dkw) {
                                        this.zvb[g].onclick = this.guz.bind(this, l.Buttons[k].Link);
                                        this.zvb[g].ontouchend = this.guz.bind(this, l.Buttons[k].Link)
                                    } else {
                                        if (l.Buttons[k].LinkType === ysp.uhg.uor.hoc) {
                                            this.zvb[g].onclick = this.lwp.bind(this, l.Buttons[k].Link);
                                            this.zvb[g].ontouchend = this.lwp.bind(this, l.Buttons[k].Link)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                this.zvb[g].style.display = "inline-block"
            } else {
                this.zvb[g].style.display = "none"
            }
        }
        this.ouv.style.display = (this.zay) ? "inline-block" : "none";
        if (this.jmm) {
            this.wqo = true;
            this.jmm.style.display = "block";
            this.tbt.style.display = "block";
            ysp.hpw.tgl();
            ysp.hpw.uiw = true
        }
    };
    this.pod = function() {
        if (this.wqo) {
            return true
        }
        return false
    };
    this.ehr = function() {
        b.uaw();
        ysp.hpw.qbm(ysp.hpw.state)
    };
    this.guz = function(f) {
        var g = null;
        if (f) {
            g = ysp.ekr.fbu("GET", f);
            if (!g) {
                console.error("Could not send request!")
            } else {
                g.onerror = function() {
                    console.error("Error on request!")
                }
            }
            g.send()
        }
        if (ysp.hpw.fok) {
            ysp.hpw.fok.xfo({
                sender: ysp.hpw.xkd,
                lang: sessionStorage.sessionValue1.toUpperCase()
            })
        }
        b.uaw();
        ysp.hpw.yjm()
    };
    this.lwp = function(j) {
        var k = null;
        if (j == null) {
            console.error("Request url is missing!");
            return
        }
        k = ysp.ekr.fbu("GET", j);
        if (!k) {
            console.error("Could not send request!")
        } else {
            for (var g = 0, f = b.zvb.length; g < f; g++) {
                b.zvb[g].disabled = true
            }
            k.onload = function() {
                b.uaw();
                for (var m = 0, l = b.zvb.length; m < l; m++) {
                    b.zvb[m].disabled = false
                }
                ysp.hpw.yjm()
            };
            k.onerror = function() {
                console.error("Error on request!");
                for (var m = 0, l = b.zvb.length; m < l; m++) {
                    b.zvb[m].disabled = false
                }
            }
        }
        if (ysp.hpw.fok) {
            ysp.hpw.fok.xfo({
                sender: ysp.hpw.xkd,
                lang: sessionStorage.sessionValue1.toUpperCase()
            })
        }
        k.send()
    };
    this.mfg = function() {
        window.location.reload()
    };
    this.gxb = function(f) {
        if (ysp.hpw.fok) {
            ysp.hpw.fok.xfo({
                sender: ysp.hpw.xkd,
                lang: sessionStorage.sessionValue1.toUpperCase()
            })
        }
        window.location.href = f
    };
    this.xlm = function() {
        b.ogv = (b.ogv > 0) ? b.ogv - 1 : b.hqr.length - 1;
        b.skq(b.hqr[b.ogv])
    };
    this.lol = function() {
        b.ogv = (b.ogv < b.hqr.length - 1) ? b.ogv + 1 : 0;
        b.skq(b.hqr[b.ogv])
    }
}
ysp.lct = new Settings();
ysp.ekr = new ngh();

function lnb() {
    this.kgj = "";
    this.ifj = "";
    this.nok = null;
    this.canvas = null;
    this.context2D = null;
    this.xdm = null;
    this.obu = null;
    this.jwu = null;
    this.geo = null;
    this.oho = null;
    this.ppw = {};
    this.offsetLeft = 0;
    this.offsetTop = 0;
    this.uyt = 0;
    this.nhe = 0;
    this.bzi = false;
    this.width = 0;
    this.height = 0;
    this.xeq = 0;
    this.jkt = 0;
    this.fdm = 1;
    this.eiz = 1;
    this.exk = false;
    this.qgo = false;
    this.style = null;
    this.gof = null;
    this.odx = -1;
    this.qah = false;
    this.psw = false;
    this.dpf = false;
    this.iew = false;
    this.uiw = false;
    this.plb = false;
    this.zyp = false;
    this.hic = false;
    this.mxt = "";
    this.lkb = "";
    this.qix = "";
    this.qso = "";
    this.epv = "";
    this.tsh = "";
    this.dxa = "1_1_60";
    try {
        if (ysp.lct.value19) {
            this.mxt = sessionStorage.sessionValue2;
            this.lkb = sessionStorage.sessionValue2
        } else {
            var c = a("hash");
            if (c != "") {
                sessionStorage.sessionValue2 = c
            }
            if (sessionStorage.sessionValue2 != "freeplay") {
                this.qix = sessionStorage.sessionValue2
            } else {
                this.mxt = sessionStorage.sessionValue2;
                this.lkb = sessionStorage.sessionValue2;
                if (a("w") != "") {
                    this.qix = sessionStorage.sessionValue2
                } else {
                    this.qix = ""
                }
            }
        }
    } catch (b) {}
    this.rlv = null;
    this.epw = null;
    this.bup = false;
    this.vrf = null;
    this.wba = null;
    this.llt = null;
    this.khv = true;
    this.sdk = [0, 0.5, 1];
    try {
        if (sessionStorage.sessionValue6) {
            if (sessionStorage.sessionValue6 == "false") {
                this.xrv = 0
            } else {
                if (sessionStorage.sessionValue6 == "true") {
                    this.xrv = this.sdk.length - 1
                } else {
                    this.xrv = Number(sessionStorage.sessionValue6)
                }
            }
        } else {
            this.xrv = this.sdk.length - 1
        }
    } catch (b) {
        this.xrv = 0
    }
    this.but = 0;
    this.language = new vzy();
    this.lcp = 0;
    this.dsv = 1;
    this.pcw = this.dsv;
    this.cyi = [ysp.iax.oct, ysp.iax.uuz, ysp.iax.xcc];
    this.gwu = (ysp.ekr.gyi()) ? 0 : this.cyi.length - 1;
    try {
        if (localStorage.localValue1) {
            this.gwu = Number(localStorage.localValue1);
            if (!ysp.ekr.gyi() && this.cyi[this.gwu] === ysp.iax.oct) {
                this.gwu = this.cyi.length - 1
            }
        }
    } catch (b) {}
    this.rvg = false;
    this.xkd = "";
    this.pwy = "";
    this.xnc = 0;
    this.state = 0;
    this.avx = false;
    this.sjs = 5000;
    this.tuy = 0;
    this.zyv = 0;
    this.wcy = 0;
    this.wwu = 0;
    this.coz = false;
    this.afz = false;
    this.cwt = false;
    this.wjo = null;
    this.jjy = 0;
    this.wrb = 0;
    this.uwx = 0;
    this.bks = -1;
    this.ssh = -1;
    this.nrg = 0;
    this.ulw = null;
    this.pku = [];
    this.tac = [];
    this.fok = null;
    this.dwt = false;
    this.qbb = 0;
    this.nsd = 0;
    this.xhs = false;

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
    this.bih = function(d) {
        this.mgo();
        ysp.ekr.ajx();
        ysp.ekr.ugp();
        this.qfk();
        if (!this.coz) {
            this.lgo()
        }
        this.xvn(this.ppg(d.gof));
        this.dxe();
        this.uqu();
        this.uqy();
        this.dus();
        this.biu();
        this.cat();
        this.klx();
        this.ilq();
        this.pwx();
        this.cgm();
        return this
    };
    this.uqy = function() {};
    this.mgo = function() {};
    this.ilq = function() {
        try {
            if (ysp.lct.value64 && !this.cwt) {
                this.vrf = new bvx();
                this.vrf.connect("ws://127.0.0.1:2001/vltclient")
            }
        } catch (d) {
            console.error("Can not connect to terminal!")
        }
    };
    this.qfk = function() {
        try {
            var j = a("exit");
            if (j != "") {
                sessionStorage.sessionValue5 = j
            }
            if ((!sessionStorage.sessionValue5 || sessionStorage.sessionValue5 == "null") && ysp.lct.value8) {
                sessionStorage.sessionValue5 = ysp.lct.value8
            }
            var p = a("curr");
            if (p != "") {
                sessionStorage.sessionValue8 = p
            }
            if (sessionStorage.sessionValue8 && sessionStorage.sessionValue8 != "") {
                this.tsh = sessionStorage.sessionValue8;
                if (ysp.lct.value72) {
                    var o = ysp.lct.value72[this.tsh];
                    if (ysp.lct.value21.e === true && o) {
                        ysp.lct.value21.s = o.s;
                        ysp.lct.value21.m = o.m;
                        ysp.lct.value21.ts = o.ts;
                        ysp.lct.value21.cs = o.cs
                    }
                    if (ysp.lct.value76 && ysp.lct.value76.f === true && o) {
                        ysp.lct.value76.s = o.s;
                        ysp.lct.value76.m = o.m;
                        ysp.lct.value76.ts = o.ts;
                        ysp.lct.value76.cs = o.cs
                    }
                }
            }
            if (this.jhh()) {
                sessionStorage.sessionValue7 = ""
            }
            var d = a("w");
            if (d != "") {
                sessionStorage.sessionValue7 = d
            }
            if (sessionStorage.sessionValue7 && sessionStorage.sessionValue7 != "") {
                this.epv = sessionStorage.sessionValue7
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
                sessionStorage.sessionValue14 = (ysp.ekr.myr) ? ysp.lct.value51.m : ysp.lct.value51.d
            }
            var i = a("sessionTime");
            if (i != "") {
                sessionStorage.sessionValue15 = i
            }
            if (sessionStorage.sessionValue15 != "true" && sessionStorage.sessionValue15 != "false") {
                sessionStorage.sessionValue15 = ysp.lct.value11
            }
            var t = a("realityCheckURL");
            if (t != "") {
                sessionStorage.sessionValue16 = t
            }
            var n = a("realityCheckTime");
            if (n != "") {
                sessionStorage.sessionValue17 = n
            }
            if (ysp.lct.value39 > 0) {
                sessionStorage.sessionValue17 = ysp.lct.value39
            }
            var s = a("loggedInTime");
            if (sessionStorage.sessionValue18 != null) {
                var g = sessionStorage.sessionValue18.split(";");
                if (g.length == 2) {
                    this.qbb = Number(g[0]);
                    this.nsd = Number(g[1])
                }
            }
            if (s != "") {
                if (Number(s) != this.nsd) {
                    this.nsd = Number(s);
                    this.qbb = new Date().getTime() - (this.nsd * 1000);
                    sessionStorage.sessionValue18 = this.qbb + ";" + this.nsd
                }
            }
            if (ysp.lct.value86 === true) {
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
            console.error(k.ezq)
        }
    };
    this.klx = function() {
        if (!(ysp.ekr.ado == ysp.os.vuk && ysp.ekr.kxi == ysp.twr.aaa)) {
            document.ontouchstart = ysp.hpw.qwt
        }
        if (ysp.ekr.kxi != ysp.twr.ozc && ysp.ekr.kxi != ysp.twr.aaa) {
            document.ontouchmove = ysp.hpw.nxu;
            document.ontouchend = ysp.hpw.jpg
        }
        if (!ysp.ekr.zwa) {
            document.onmousedown = ysp.hpw.yso;
            document.onmouseup = ysp.hpw.pbt;
            document.onmousemove = ysp.hpw.ain
        }
        document.onkeydown = ysp.hpw.tck;
        document.onkeyup = ysp.hpw.mcb;
        document.oncontextmenu = ysp.hpw.fqu;
        this.plb = (this.wyd() && ysp.ekr.uxa() && ysp.ekr.myr);
        if (ysp.ekr.lqn() === false && ysp.ekr.ado === ysp.os.jum && ysp.ekr.gyz() === true && screen.width <= 414 && this.yfl()) {
            this.nrg = setInterval(this.ees, 1000)
        }
    };
    this.qwt = function(d) {
        if (ysp.hpw.qah === true) {
            ysp.hpw.zdx();
            ysp.hpw.lnk()
        }
        ysp.hpw.xba(d)
    };
    this.jpg = function(d) {
        if (ysp.hpw.qah === true) {
            if (ysp.hpw.plb) {
                ysp.hpw.vdo()
            } else {
                ysp.hpw.opg(d)
            }
        } else {
            if (ysp.hpw.zyp) {
                ysp.hpw.kpg()
            }
        }
    };
    this.nxu = function(d) {
        ysp.hpw.iid(d)
    };
    this.yso = function(d) {
        window.focus();
        if (ysp.hpw.qah === true) {
            ysp.hpw.zdx();
            ysp.hpw.lnk()
        }
        ysp.hpw.xba(d)
    };
    this.pbt = function(d) {
        if (ysp.hpw.qah === true) {
            ysp.hpw.opg(d)
        }
    };
    this.ain = function(d) {};
    this.tck = function(d) {
        if ((d.keyCode == 122 && (ysp.ekr.ado == ysp.os.nkk || ysp.ekr.ado == ysp.os.hsh)) || (d.keyCode == 70 && d.ctrlKey && ysp.ekr.ado == ysp.os.rhv)) {
            return
        }
        ysp.hpw.zdx();
        ysp.hpw.lnk();
        ysp.hpw.zfi(d)
    };
    this.mcb = function(d) {
        ysp.hpw.unq(d)
    };
    this.fqu = function() {
        return false
    };
    this.xba = function(d) {};
    this.opg = function(d) {};
    this.zfi = function(d) {};
    this.unq = function(d) {};
    this.iid = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        return
    };
    this.hef = function() {
        var f = ysp.hpw.llt.qmc("topb"),
            e = ysp.hpw.llt.qmc("settings"),
            d = ysp.hpw.llt.qmc("topi"),
            g = ysp.hpw.llt.qmc("gameb");
        if (ysp.ekr.kxi == ysp.twr.ozc || ysp.ekr.kxi == ysp.twr.hkb) {
            ysp.hpw.qgo = (window.innerWidth == window.outerWidth)
        } else {
            if (ysp.ekr.kxi == ysp.twr.gkc || ysp.ekr.kxi == ysp.twr.kbf) {
                ysp.hpw.qgo = (window.innerHeight >= window.outerHeight)
            } else {
                if (ysp.ekr.kxi == ysp.twr.qdd) {
                    ysp.hpw.qgo = (document.fullscreenElement) ? true : false
                } else {
                    if (ysp.ekr.myr) {
                        if (ysp.ekr.kxi == ysp.twr.ijp || ysp.ekr.kxi == ysp.twr.ozi || ysp.ekr.kxi == ysp.twr.zze) {
                            ysp.hpw.qgo = (document.webkitFullscreenElement) ? true : false
                        } else {
                            if (ysp.ekr.kxi == ysp.twr.aaa) {
                                ysp.hpw.qgo = (document.mozFullScreenElement) ? true : false
                            }
                        }
                    }
                }
            }
        }
        if (d) {
            d.ogm("fullscreen", ysp.hpw.qgo)
        }
        if (f) {
            f.qbw.tpi("fullscreen", "#ogm", [(ysp.hpw.qgo) ? 1 : 0])
        }
        if (e) {
            e.qbw.tpi("fullscreen", "#ogm", [(ysp.hpw.qgo) ? 1 : 0])
        }
        if (g) {
            g.qbw.tpi("fullscreen", "#ogm", [(ysp.hpw.qgo) ? 1 : 0])
        }
        ysp.hpw.fyz();
        ysp.hpw.qre();
        ysp.hpw.zcx();
        if (ysp.ekr.gyz() === true && ysp.ekr.lqn() === false) {
            document.body.style.height = "5000px"
        }
        if (!ysp.ekr.lqn() && ysp.ekr.kxi === ysp.twr.zze && ysp.hpw.nhe < screen.width) {
            window.scrollTo(0, 0)
        }
    };
    this.ncp = function() {
        ysp.hpw.hef();
        ysp.hpw.ees()
    };
    this.ees = function() {
        if (ysp.ekr.gyz() === true && ysp.ekr.lqn() === false) {
            if (ysp.hpw.yfl() === true) {
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
                            ysp.hpw.hef();
                            window.ontouchmove = ysp.hpw.ncp
                        }
                    } else {
                        e.className = null;
                        d.className = null;
                        f.style.display = "none";
                        document.ontouchstart = ysp.hpw.qwt;
                        document.ontouchmove = ysp.hpw.nxu;
                        document.ontouchend = ysp.hpw.jpg;
                        if (window.ontouchmove != null) {
                            ysp.hpw.hef();
                            window.ontouchmove = null
                        }
                        window.scrollTo(0, 0)
                    }
                }
            }
        }
    };
    this.qlp = function(g) {
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
                    ysp.ekr.zpd(e, i, i)
                }
                f.innerHTML = ysp.hpw.language.ddf;
                k.className = "rotateAnim";
                j.style.display = "block";
                ysp.hpw.uiw = true
            } else {
                j.style.display = "none";
                k.className = null;
                ysp.hpw.uiw = false
            }
        }
    };
    this.rlr = function() {
        var d = ysp.hpw.llt.qmc("settings");
        ysp.hpw.hef();
        if (d) {
            d.qbw.tpi("adjustment", "#ogm", [(ysp.hpw.odx === ysp.gof.fzk) ? 0 : 1]);
            d.cul()
        }
        if (ysp.hpw.rvg === true) {
            ysp.hpw.uiw = true;
            ysp.hpw.pqq(true);
            ysp.hpw.qlp(true)
        } else {
            ysp.hpw.uiw = false;
            ysp.hpw.pqq((ysp.hpw.sdk[ysp.hpw.xrv] === 0));
            ysp.hpw.qlp(false)
        }
    };
    this.fyz = function() {
        this.uyt = window.innerWidth, this.nhe = window.innerHeight;
        this.bzi = false;
        if (ysp.ekr.lqn() == true && ysp.lct.value69 === true) {
            if (ysp.ekr.ltn() === true) {
                this.bzi = true;
                this.uyt = (window.innerWidth > window.outerWidth) ? window.outerWidth : window.innerWidth;
                this.nhe = (window.innerHeight > window.outerHeight) ? window.outerHeight : window.innerHeight;
                if (this.uyt > this.nhe) {
                    this.nhe *= 0.98
                }
            } else {
                if (ysp.ekr.gyz() === true) {
                    this.bzi = true;
                    if (window.orientation === 90 || window.orientation === -90) {
                        if (screen.height === 1024) {
                            this.uyt = 1024;
                            this.nhe = (window.innerHeight < 704) ? 662 : 704
                        } else {
                            if (screen.height === 736) {
                                this.uyt = 736;
                                this.nhe = (window.innerHeight < 414 || window.innerHeight === 475) ? 370 : 414
                            } else {
                                if (screen.height === 667) {
                                    this.uyt = 667;
                                    this.nhe = 375
                                }
                            }
                        }
                    } else {
                        if (screen.height === 1024) {
                            this.uyt = 768;
                            this.nhe = (window.innerHeight < 960) ? 928 : 960
                        } else {
                            if (screen.height === 736) {
                                this.uyt = 414;
                                this.nhe = 628
                            } else {
                                if (screen.height === 667) {
                                    this.uyt = 375;
                                    this.nhe = 559
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.zcx = function() {
        var g = 0,
            j = 0,
            f = 1,
            e = 1,
            i = this.uyt,
            d = this.nhe;
        this.exk = (this.qgo || i < this.width || d < this.height || this.gof.vvd);
        g = this.ewl(this.exk);
        f = ((i - j) / this.width).toString();
        f = Number(f.substring(0, (f.length > 5) ? 5 : f.length));
        e = ((d - g) / this.height).toString();
        e = Number(e.substring(0, (e.length > 5) ? 5 : e.length));
        if (this.exk) {
            if (this.gof.gvc || sessionStorage.sessionValue22 == "proportional") {
                if (f > e) {
                    this.fdm = e;
                    this.eiz = e
                } else {
                    this.fdm = f;
                    this.eiz = f
                }
            } else {
                this.fdm = f;
                this.eiz = e
            }
        } else {
            this.fdm = 1;
            this.eiz = 1
        }
        ysp.ekr.zpd(this.canvas, this.fdm, this.eiz);
        if (this.xdm != null) {
            ysp.ekr.zpd(this.xdm, this.fdm, this.eiz, ((this.gof.xdm.quz.x) - ((this.gof.xdm.quz.x + this.gof.xdm.ilc) / 2 * (1 - this.fdm))), ((this.gof.xdm.quz.y) - ((this.gof.xdm.quz.y + this.gof.xdm.uip) / 2 * (1 - this.eiz))))
        }
        if (this.jwu != null) {
            ysp.ekr.zpd(this.jwu, this.fdm, this.eiz)
        }
        if (this.exk) {
            this.offsetLeft = Math.floor((i - (this.canvas.width * this.fdm))) / 2;
            this.offsetTop = Math.floor((d - (this.canvas.height * this.eiz))) / 2
        } else {
            this.offsetLeft = this.nok.offsetLeft;
            this.offsetTop = this.nok.offsetTop
        }
    };
    this.qre = function() {
        if (this.zfy() === true) {
            var e = null;
            if (this.cyi[this.gwu] === ysp.iax.oct) {
                if (window.orientation === -90) {
                    e = ysp.gof.ohj
                } else {
                    e = ysp.gof.fzk
                }
            } else {
                if (this.cyi[this.gwu] === ysp.iax.uuz) {
                    e = ysp.gof.ohj
                } else {
                    if (this.cyi[this.gwu] === ysp.iax.xcc) {
                        e = ysp.gof.fzk
                    }
                }
            }
            this.rvg = (this.nhe > this.uyt);
            this.xvn(e);
            this.smt(false);
            if (this.iew === true) {
                this.cul()
            } else {
                this.llt.tpi("loading", "#cul")
            }
        } else {
            if (ysp.ekr.myr) {
                var f = (this.uyt > this.nhe) ? this.dsv : this.lcp,
                    d = this.gof.fvk,
                    e = null;
                if (f != this.pcw) {
                    this.pcw = f;
                    if (this.coz) {
                        e = (this.pcw == this.dsv) ? ysp.gof.qvh : ysp.gof.bve
                    } else {
                        e = (this.pcw == this.dsv) ? ysp.lct.value33 : ysp.lct.value32
                    }
                    this.xvn(e);
                    this.smt((d != this.gof.fvk) || this.coz);
                    if (this.iew === true) {
                        if (this.coz && this.afz) {
                            this.kzb(this.oxp(this.language.wli))
                        } else {
                            this.cul()
                        }
                    } else {
                        this.llt.tpi("loading", "#cul")
                    }
                }
            } else {
                if (!this.coz) {
                    e = (this.qgo) ? ysp.lct.value15 : ysp.lct.value14;
                    this.xvn(e);
                    this.smt(false);
                    if (this.iew === true) {
                        this.cul()
                    } else {
                        this.llt.tpi("loading", "#cul")
                    }
                }
            }
        }
    };
    this.zfy = function() {
        return false
    };
    this.yfl = function() {
        return false
    };
    this.xvn = function(d) {};
    this.dxe = function() {
        this.style = new zcy()
    };
    this.ewl = function(d) {
        var e = 0;
        if (ysp.ekr.ltn() && window.innerWidth > window.innerHeight && d) {
            if (this.qah === true && document.body.style.backgroundColor !== this.style.zps.backgroundColor) {
                document.body.style.backgroundColor = this.style.zps.backgroundColor
            }
        }
        return e
    };
    this.qbs = function() {
        if (ysp.ekr.ltn() && !ysp.ekr.lqn() && window.innerWidth > window.innerHeight) {
            return 0
        }
        return 0
    };
    this.vrn = function() {
        return false
    };
    this.dus = function() {
        if (ysp.ekr.zwa) {
            this.wba = new vrw()
        } else {
            this.wba = new ihw()
        }
        this.wba.bih();
        this.wba.gxo(this.hru())
    };
    this.biu = function() {
        this.llt = new irf();
        this.llt.bih();
        this.llt.vpa("jackpots")
    };
    this.hru = function() {
        var d = new zmd();
        d.bih();
        return d
    };
    this.lgo = function() {
        this.wjo = new afc()
    };
    this.uqu = function() {
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
                    for (var k = 0, g = ysp.lct.value5.length; k < g; k++) {
                        if (o[l] === ysp.lct.value5[k] && p.indexOf(o[l]) < 0) {
                            p.push(o[l])
                        }
                    }
                }
                if (p.length == 0) {
                    p.push(ysp.lct.value5[0])
                }
                ysp.lct.value5 = [];
                for (var l = 0, m = p.length; l < m; l++) {
                    ysp.lct.value5.push(p[l])
                }
            }
            if (sessionStorage.sessionValue1 == null) {
                var q = ysp.ekr.wsk();
                if (this.pec(q)) {
                    sessionStorage.sessionValue1 = q
                } else {
                    if (q === ysp.language.EN && this.pec(ysp.language.US)) {
                        sessionStorage.sessionValue1 = ysp.language.US
                    } else {
                        if (q === ysp.language.DE && this.pec(ysp.language.AT)) {
                            sessionStorage.sessionValue1 = ysp.language.AT
                        } else {
                            if (q === ysp.language.ES && this.pec(ysp.language.MX)) {
                                sessionStorage.sessionValue1 = ysp.language.MX
                            } else {
                                if (q === ysp.language.ES && this.pec(ysp.language.CO)) {
                                    sessionStorage.sessionValue1 = ysp.language.CO
                                } else {
                                    if (q === ysp.language.ES && this.pec(ysp.language.CL)) {
                                        sessionStorage.sessionValue1 = ysp.language.CL
                                    } else {
                                        if (q === ysp.language.ES && this.pec(ysp.language.VE)) {
                                            sessionStorage.sessionValue1 = ysp.language.VE
                                        } else {
                                            if (q === ysp.language.EN && this.pec(ysp.language.BR)) {
                                                sessionStorage.sessionValue1 = ysp.language.BR
                                            } else {
                                                sessionStorage.sessionValue1 = ysp.lct.value5[0]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this.pec(sessionStorage.sessionValue1)) {
                for (var l = 0, m = ysp.lct.value5.length; l < m; l++) {
                    if (ysp.lct.value5[l] == sessionStorage.sessionValue1) {
                        this.but = l;
                        break
                    }
                }
                this.language = this.pvy(sessionStorage.sessionValue1)
            } else {
                this.but = 0;
                this.language = this.pvy(ysp.lct.value5[this.but]);
                sessionStorage.sessionValue1 = ysp.lct.value5[this.but]
            }
        } catch (n) {
            this.but = 0;
            this.language = this.pvy(ysp.lct.value5[this.but]);
            console.error(n.ezq)
        }
    };
    this.pwx = function() {
        var d = (ysp.lct.value45 == ysp.auj.tfo) ? this.gof.auj.hpw : this.gof.auj.cmg;
        this.nok = document.getElementById("gameArea");
        if (this.bzi === false) {
            this.nok.style.marginTop = (-d.quz.height / 2) + "px";
            this.nok.style.marginLeft = (-d.quz.width / 2) + "px"
        } else {
            this.nok.style.left = "0px";
            this.nok.style.top = "0px";
            this.nok.style.marginTop = ((window.innerHeight - d.quz.height) / 2) + "px";
            this.nok.style.marginLeft = ((window.innerWidth - d.quz.width) / 2) + "px"
        }
        this.nok.style.width = (d.quz.width > window.innerWidth) ? window.innerWidth + "px" : d.quz.width + "px";
        this.nok.style.height = (d.quz.height > window.innerHeight) ? window.innerHeight + "px" : d.quz.height + "px";
        this.canvas = document.getElementById("canvas");
        this.canvas.width = Math.round(d.quz.width);
        this.canvas.height = Math.round(d.quz.height);
        this.context2D = this.canvas.getContext("2d");
        this.jwu = document.getElementById("gameOverlay");
        if (this.jwu) {
            this.jwu.style.width = d.quz.width + "px";
            this.jwu.style.height = d.quz.height + "px"
        }
        this.ogs(d)
    };
    this.ogs = function(e) {
        var f = new bbv(),
            d = (ysp.lct.value45 == ysp.auj.tfo) ? this.style.auj.hpw : this.style.auj.cmg;
        f.bih(e.quz, this.context2D);
        f.parent = this;
        f.jan = (ysp.ekr.myr) ? this.ppa : this.kpg;
        f.fkb = (this.coz) ? this.language.mbe : this.language.khm;
        f.lan = this.language.error;
        f.uad(e);
        f.ygz(d);
        this.llt.zth("loading", f)
    };
    this.nkc = function() {
        var d = new lln();
        d.bih(this.gof.sse.quz, null, this.context2D);
        d.parent = this;
        d.uad(this.gof.sse);
        d.ygz(this.style.sse);
        if (sessionStorage.sessionValue15 == "true" && ysp.lct.value49) {
            d.hhq("time", "", "--:-- [--:--]")
        } else {
            if (sessionStorage.sessionValue15 == "true" || ysp.lct.value49) {
                d.hhq("time", "", "--:--")
            }
        }
        if (this.jhh()) {
            d.hhq("freeplay", "", this.language.xup)
        } else {
            d.hhq("id", "ID: ", "-")
        }
        this.llt.zth("topi", d)
    };
    this.yii = function() {
        var d = new uym();
        d.bih(this.gof.ydd.quz, null, this.context2D);
        d.parent = this;
        d.uad(this.gof.ydd);
        d.ygz(this.style.ydd, false);
        d.coc(false);
        this.llt.zth("topb", d)
    };
    this.syy = function() {};
    this.cbq = function() {
        var d = new zsl();
        d.bih(this.gof.kdz.quz, null, this.context2D);
        d.parent = this;
        d.uki(this.gof.kdz);
        d.ygz(this.style.kdz);
        d.coc(false);
        this.llt.zth("stats", d)
    };
    this.gcw = function() {
        this.geo = new ari();
        this.geo.bih();
        this.geo.ygz(this.style.geo);
        this.geo.uad(this.gof.geo)
    };
    this.kmq = function() {
        this.oho = new oec();
        this.oho.bih();
        this.oho.ygz(this.style.oho);
        this.oho.uad(this.gof.oho)
    };
    this.uxl = function() {
        if (this.nvc()) {
            this.ppw.jzi = document.getElementById("jurisdictionDiv");
            this.ppw.btv = document.getElementById("btnsp");
            this.ppw.pqt = document.getElementById("btnsl");
            this.ppw.kzg = document.getElementById("btnst");
            if (this.ppw.btv) {
                this.ppw.btv.innerHTML = this.language.klb;
                this.ppw.btv.onclick = this.bbk;
                this.ppw.btv.ontouchend = this.bbk
            }
            if (this.ppw.pqt) {
                this.ppw.pqt.innerHTML = this.language.lad;
                this.ppw.pqt.onclick = this.pqs;
                this.ppw.pqt.ontouchend = this.pqs
            }
            if (this.ppw.kzg) {
                this.ppw.kzg.innerHTML = this.language.kat;
                this.ppw.kzg.onclick = this.hbi;
                this.ppw.kzg.ontouchend = this.hbi
            }
            this.phu();
            this.tgl()
        }
    };
    this.sdm = function(e) {
        var d = new hiu();
        d.bih(this.gof.meh.quz, null, this.context2D);
        d.parent = this;
        d.aax = true;
        if (e) {
            d.pel(e)
        }
        d.uki(this.gof.meh);
        d.ree(this.language);
        d.ygz(this.style.meh);
        d.uad(this.gof.meh);
        d.coc(false);
        this.llt.zth("autop", d)
    };
    this.lvm = function(d) {
        var e = new qtm();
        e.bih(this.gof.cfr.quz, null, this.context2D);
        e.parent = this;
        if (d) {
            e.lsx(d)
        }
        e.coc(false);
        this.llt.zth("settings", e)
    };
    this.smt = function(d) {};
    this.nsv = function() {
        var d = this.llt.qmc("stats");
        if (d) {
            d.srt(this.gof.kdz.quz);
            d.uad(this.gof.kdz)
        }
    };
    this.nzi = function() {
        if (this.geo) {
            this.geo.uad(this.gof.geo)
        }
    };
    this.ifx = function() {
        if (this.oho) {
            this.oho.uad(this.gof.oho)
        }
    };
    this.phu = function() {
        var d = null,
            e = 0;
        if (this.ppw) {
            d = this.gof.trj;
            if (this.ppw.jzi) {
                ysp.ekr.ggr(this.ppw.jzi, d.fsd)
            }
            if (this.ppw.btv) {
                this.ppw.btv.style.fontSize = d.teg.fontSize + "px";
                this.ppw.btv.style.textIndent = d.teg.textIndent + "px";
                ysp.ekr.ggr(this.ppw.btv, d.kcd)
            }
            if (this.ppw.pqt) {
                this.ppw.pqt.style.fontSize = d.teg.fontSize + "px";
                this.ppw.pqt.style.textIndent = d.teg.textIndent + "px";
                ysp.ekr.ggr(this.ppw.pqt, d.zht)
            }
            if (this.ppw.kzg) {
                this.ppw.kzg.style.fontSize = d.teg.fontSize + "px";
                this.ppw.kzg.style.textIndent = d.teg.textIndent + "px";
                ysp.ekr.ggr(this.ppw.kzg, d.kgm)
            }
            if (this.ppw.jzi) {
                e = (d.fsd.width - d.fsd.height) / 2;
                if (this.odx == ysp.gof.ohj) {
                    this.ppw.jzi.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + e + "px)"
                } else {
                    this.ppw.jzi.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + (-e) + "px)"
                }
            }
        }
    };
    this.uwe = function() {
        var d = this.llt.qmc("autop");
        if (d) {
            d.srt(this.gof.meh.quz);
            d.uad(this.gof.meh)
        }
    };
    this.sab = function() {
        var d = this.llt.qmc("settings");
        if (d) {
            d.srt(this.gof.cfr.quz);
            d.uad(this.gof.cfr)
        }
    };
    this.fbg = function() {
        var d = this.llt.qmc("topi");
        if (d) {
            d.srt(this.gof.sse.quz);
            d.uad(this.gof.sse)
        }
    };
    this.gho = function() {
        var d = this.llt.qmc("topb");
        if (d) {
            d.srt(this.gof.ydd.quz);
            d.uad(this.gof.ydd)
        }
    };
    this.rhk = function() {
        var e = this.llt.qmc("loading"),
            d = (ysp.lct.value45 == ysp.auj.tfo) ? this.gof.auj.hpw : this.gof.auj.cmg;
        if (e) {
            this.canvas.width = 0;
            if (this.bzi === false) {
                this.nok.style.marginTop = (-d.quz.height / 2) + "px";
                this.nok.style.marginLeft = (-d.quz.width / 2) + "px"
            } else {
                this.nok.style.left = "0px";
                this.nok.style.top = "0px";
                this.nok.style.marginTop = ((this.nhe - d.quz.height) / 2) + "px";
                this.nok.style.marginLeft = ((this.uyt - d.quz.width) / 2) + "px"
            }
            this.nok.style.width = (d.quz.width > this.uyt) ? this.uyt + "px" : d.quz.width + "px";
            this.nok.style.height = (d.quz.height > this.nhe) ? this.nhe + "px" : d.quz.height + "px";
            this.canvas.width = Math.round(d.quz.width);
            this.canvas.height = Math.round(d.quz.height);
            if (this.jwu) {
                this.jwu.style.width = d.quz.width + "px";
                this.jwu.style.height = d.quz.height + "px"
            }
            e.srt(d.quz);
            e.uad(d)
        }
    };
    this.cat = function() {
        if (ysp.ekr.myr && !ysp.ekr.zwa) {
            if (!this.wba.qww && ysp.ekr.kxi != ysp.twr.mfv) {
                this.khv = false;
                this.xrv = 0
            }
        }
    };
    this.ppg = function(d) {
        if (ysp.ekr.myr) {
            if (!this.coz) {
                return ysp.gof.neo
            } else {
                if (!this.cwt) {
                    return ysp.gof.qvh
                }
            }
        }
        return d
    };
    this.ixb = function() {
        var d = this.llt.qmc("loading");
        this.hef();
        if (d) {
            d.gqj = true
        }
        if ((ysp.ekr.kxi === ysp.twr.ijp || ysp.ekr.kxi === ysp.twr.kbf || ysp.ekr.kxi === ysp.twr.dqo) && ysp.ekr.ado === ysp.os.vuk && ysp.ekr.xwe === true) {
            if (this.wba.qww === false || ysp.ekr.uxa() === false || ysp.ekr.teh() === false) {
                ysp.kmu = ysp.xap.bnv
            }
        }
        if (ysp.kmu == 0) {
            if (this.khv === true && ysp.ekr.bnr().length === 0) {
                this.khv = false
            }
            if (d) {
                d.cul(0)
            }
            this.xpe();
            if (this.khv === true) {
                this.mdz()
            }
            this.wba.start()
        } else {
            if (d) {
                if (ysp.kmu == ysp.xap.lnn && ysp.ekr.kxi === ysp.twr.zze) {
                    d.hlw = this.language.qvw;
                    d.cul(0)
                } else {
                    if (ysp.kmu == ysp.ezq.gzn) {
                        d.hlw = this.language.riy;
                        d.cul(0)
                    } else {
                        d.hlw = this.language.jpd;
                        if (ysp.ekr.ado === ysp.os.vuk || ysp.ekr.ado === ysp.os.hsh) {
                            if (ysp.kmu != ysp.xap.lnn && sessionStorage.sessionValue1 === ysp.language.TR) {
                                d.hlw += "|Google Chrome" + this.language.cou
                            } else {
                                if (ysp.kmu != ysp.xap.lnn && (sessionStorage.sessionValue1 === ysp.language.GE || sessionStorage.sessionValue1 === ysp.language.HU)) {
                                    d.hlw += "|" + this.language.epb + " Google Chrome" + this.language.fih
                                } else {
                                    d.hlw += "|" + this.language.cou + " Google Chrome"
                                }
                            }
                        } else {
                            if (ysp.ekr.ado === ysp.os.nkk || ysp.ekr.ado === ysp.os.hsh) {
                                if (ysp.kmu != ysp.xap.lnn && sessionStorage.sessionValue1 === ysp.language.TR) {
                                    d.hlw += "|Google Chrome, Mozilla Firefox" + this.language.cou
                                } else {
                                    if (ysp.kmu != ysp.xap.lnn && (sessionStorage.sessionValue1 === ysp.language.GE || sessionStorage.sessionValue1 === ysp.language.HU)) {
                                        d.hlw += "|" + this.language.epb + " Google Chrome, Mozilla Firefox" + this.language.fih
                                    } else {
                                        d.hlw += "|" + this.language.cou + " Google Chrome, Mozilla Firefox"
                                    }
                                }
                            }
                        }
                        console.error("Errorcode: " + ysp.kmu);
                        d.cul(0)
                    }
                }
            }
        }
    };
    this.xpe = function() {};
    this.mdz = function() {};
    this.cgm = function() {
        var e = this.kgj + this.gof.type + "/",
            d = this.llt.qmc("loading");
        if (!this.coz) {
            this.wba.bsf("continue", ysp.lct.value30 + "/basic/images/" + this.gof.type + "/btn_continue.png")
        }
        if (ysp.lct.value45 == ysp.auj.tfo) {
            e += "load.jpg"
        } else {
            if (ysp.lct.value45 == ysp.auj.ovq) {
                e += "load_amanet.jpg"
            }
        }
        if (e.indexOf(".png") >= 0) {
            if (d) {
                d.pvf = true
            }
        }
        this.wba.bsf("splash", e);
        this.wba.xja()
    };
    this.cdt = function() {};
    this.pec = function(e) {
        for (var d = 0; d < ysp.lct.value5.length; d++) {
            if (ysp.lct.value5[d] == e) {
                return true
            }
        }
        return false
    };
    this.mcw = function() {
        ysp.hpw.psw = true;
        if (!ysp.hpw.coz) {
            ysp.hpw.srh();
            if (ysp.hpw.rfo()) {
                ysp.hpw.gtw()
            }
        } else {
            ysp.hpw.rme()
        }
        ysp.hpw.connect()
    };
    this.srh = function() {};
    this.rme = function() {};
    this.connect = function() {
        this.rlv.connect(this.xkd, this.mxt, this.lkb, this.qix, this.dxa, this.epv, this.tsh)
    };
    this.rho = function(d) {
        if (typeof d === "undefined") {
            ysp.hpw.rlv.rho(0)
        } else {
            ysp.hpw.rlv.rho(d)
        }
    };
    this.mdc = function(d) {
        this.zyv = 0;
        this.wcy = 0;
        this.wwu = d;
        clearInterval(this.jjy);
        this.jjy = setInterval(this.eff, 1000)
    };
    this.eff = function() {
        var d = ysp.hpw.llt.qmc("loading");
        ysp.hpw.zyv++;
        ysp.hpw.wcy = Math.round(ysp.lct.value47 / 1000) - ysp.hpw.zyv;
        ysp.hpw.wcy = (ysp.hpw.wcy > 0) ? ysp.hpw.wcy : 0;
        if (!ysp.hpw.qah) {
            if (d) {
                d.hlw = ysp.hpw.language.hxh + "|" + ysp.hpw.language.ytq + ": " + ysp.hpw.wwu + " (" + ysp.hpw.wcy + " sec)";
                d.cul(0)
            }
        }
    };
    this.msq = function() {
        return ysp.lct.value74
    };
    this.cul = function(d, g, e, f) {};
    this.jpj = function() {
        return (this.iew === true && this.qah === true && this.rvg === false)
    };
    this.kzb = function(e) {
        var d = this.llt.qmc("history");
        this.iew = true;
        if (this.qah) {
            if (this.gof.mxn) {
                ysp.ekr.jry(this.context2D, this.gof.hpw.quz.x - this.gof.hpw.qwc, this.gof.hpw.quz.y - this.gof.hpw.qwc, this.gof.hpw.quz.width + 2 * this.gof.hpw.qwc, this.gof.hpw.quz.height + 2 * this.gof.hpw.qwc, "black", 1)
            }
            ysp.ekr.trw(this.context2D, e, "white", this.gof.hpw.quz.x, this.gof.hpw.quz.y, this.gof.hpw.quz.width, this.gof.hpw.quz.height, "arial", 28, "bold");
            if (d) {
                d.cul()
            }
        }
    };
    this.hog = function() {
        if (ysp.hpw.geo) {
            ysp.hpw.geo.uaw()
        }
        ysp.hpw.jgj(false);
        ysp.hpw.zxl.jjr(false);
        ysp.hpw.zxl.qbw.tpi("exit", "#cgv", [true]);
        if (ysp.ekr.nqr()) {
            ysp.ekr.ble();
            setTimeout(ysp.hpw.hef, 1400)
        }
        if (ysp.lct.value67 > 0) {
            ysp.hpw.rho(ysp.lct.value67)
        } else {
            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null" && ysp.hpw.fok) {
                ysp.hpw.fok.bjn({
                    sender: ysp.hpw.xkd,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                });
                window.location.href = decodeURIComponent(sessionStorage.sessionValue16)
            } else {
                if (sessionStorage.sessionValue5 && sessionStorage.sessionValue5 != "null" && ysp.hpw.fok) {
                    ysp.hpw.fok.tdb({
                        sender: ysp.hpw.xkd,
                        lang: sessionStorage.sessionValue1.toUpperCase()
                    });
                    if (sessionStorage.sessionValue5 !== "(api)") {
                        window.location.href = decodeURIComponent(sessionStorage.sessionValue5)
                    }
                }
            }
        }
    };
    this.uze = function() {
        clearTimeout(ysp.hpw.bks);
        ysp.hpw.jgj(false);
        if (ysp.hpw.zxl) {
            ysp.hpw.zxl.jjr(false)
        }
        if (!ysp.hpw.coz) {
            ysp.hpw.stop();
            if (ysp.hpw.zxl) {
                ysp.hpw.zxl.qbw.tpi("info", "#ise", [ysp.hpw.language.twa]);
                ysp.hpw.cul()
            }
            if (ysp.hpw.zfy() === true && ysp.ekr.nqr()) {
                ysp.ekr.ble();
                setTimeout(ysp.hpw.hef, 800);
                setTimeout(ysp.hpw.rlv.dap.close, 800)
            } else {
                ysp.hpw.rlv.dap.close()
            }
        } else {
            ysp.hpw.rlv.close()
        }
    };
    this.rie = function() {
        ysp.hpw.plb = true
    };
    this.vdo = function() {
        if (ysp.ekr.myr == true) {
            if (ysp.hpw.plb == true) {
                ysp.hpw.plb = false;
                ysp.ekr.ble();
                setTimeout(ysp.hpw.hef, 1400)
            }
        } else {
            ysp.ekr.ble();
            setTimeout(ysp.hpw.hef, 1400)
        }
    };
    this.ovd = function() {
        var e = (ysp.hpw.zfy() === true) ? "smartphone" : "desktop",
            i = "en";
        if (sessionStorage.sessionValue1 == ysp.language.ES || sessionStorage.sessionValue1 == ysp.language.CO || sessionStorage.sessionValue1 == ysp.language.CL || sessionStorage.sessionValue1 == ysp.language.MX || sessionStorage.sessionValue1 == ysp.language.VE) {
            i = "es"
        } else {
            if (sessionStorage.sessionValue1 == ysp.language.RO) {
                i = "ro"
            } else {
                if (sessionStorage.sessionValue1 == ysp.language.PT || sessionStorage.sessionValue1 == ysp.language.BR) {
                    i = "pt"
                } else {
                    if (sessionStorage.sessionValue1 == ysp.language.HR) {
                        i = "hr"
                    } else {
                        if (sessionStorage.sessionValue1 == ysp.language.DE) {
                            i = "de"
                        } else {
                            if (sessionStorage.sessionValue1 == ysp.language.SE) {
                                i = "se"
                            }
                        }
                    }
                }
            }
        }
        if (ysp.hpw.wwh != "") {
            var f = null,
                g = "",
                d = "";
            if (ysp.hpw.wwh != "") {
                g += "rtp=" + ysp.hpw.wwh
            }
            if (ysp.hpw.iub != "") {
                g += (ysp.hpw.wwh != "") ? "&" : "";
                g += "maxwin=" + ((ysp.hpw.iub == "0") ? "0" : ysp.hpw.avr(Number(ysp.hpw.iub) * ysp.hpw.kpq()))
            }
            d = encodeURIComponent(g);
            f = window.open(ysp.lct.value30 + "/gamerules/" + i + "/" + e + "/" + ysp.hpw.xkd.toLowerCase() + ".html?" + d, "_blank", (e === "desktop") ? "width=800,scrollbars=yes" : null);
            if (f == null || typeof f === "undefined") {
                window.location.href = ysp.lct.value30 + "/gamerules/" + i + "/" + e + "/" + ysp.hpw.xkd.toLowerCase() + ".html?" + d
            }
        }
    };
    this.qez = function() {
        ysp.hpw.bup = false;
        ysp.hpw.bhp();
        ysp.hpw.llh();
        ysp.hpw.nmr()
    };
    this.duf = function() {
        var d = ysp.hpw.llt.qmc("stats");
        if (d) {
            d.zuj(true, true)
        }
        ysp.hpw.epw.close(true)
    };
    this.mxk = function() {
        var d = ysp.hpw.llt.qmc("stats");
        ysp.hpw.stop();
        if (d && d.pod()) {
            d.zuj(true, true)
        }
        ysp.hpw.rlv.dap.close();
        if (ysp.hpw.epw) {
            ysp.hpw.epw.close(false)
        }
    };
    this.tik = function() {
        clearTimeout(ysp.hpw.bks);
        ysp.hpw.zxl.jjr(false);
        ysp.hpw.stop();
        ysp.hpw.rlv.dap.rkb()
    };
    this.nhp = function() {
        if (ysp.hpw.afz) {
            return
        }
        var d = ysp.hpw.llt.qmc("history");
        if (d) {
            d.jjr(false)
        }
        ysp.hpw.stop();
        ysp.hpw.rlv.suf(ysp.hpw.xnc)
    };
    this.dpp = function() {
        if (ysp.hpw.afz) {
            return
        }
        var d = ysp.hpw.llt.qmc("history");
        if (d) {
            d.jjr(false)
        }
        ysp.hpw.stop();
        ysp.hpw.rlv.cpi(ysp.hpw.xnc)
    };
    this.mrv = function() {
        var d = ysp.hpw.llt.qmc("history");
        if (d) {
            d.jjr(false)
        }
        ysp.hpw.stop();
        clearInterval(ysp.hpw.nrg);
        ysp.hpw.qbe();
        ysp.hpw.rlv.close()
    };
    this.ewm = function() {
        ysp.hpw.wba.ntp("btn");
        ysp.hpw.wba.dyw("btn");
        ysp.hpw.dkh()
    };
    this.zjz = function() {
        var f = ysp.hpw.llt.qmc("topb"),
            e = ysp.hpw.llt.qmc("settings"),
            g = ysp.hpw.llt.qmc("gameb"),
            d = ysp.hpw.llt.qmc("topi");
        if (webAudioEngine && webAudioEngine.state == "suspended") {
            webAudioEngine.resume()
        }
        if (ysp.hpw.wba.qww === true) {
            ysp.hpw.xrv = (ysp.hpw.xrv === ysp.hpw.sdk.length - 1) ? 0 : ysp.hpw.xrv + 1;
            ysp.hpw.gqu(ysp.hpw.sdk[ysp.hpw.xrv])
        } else {
            ysp.hpw.xrv = (ysp.hpw.xrv === ysp.hpw.sdk.length - 1) ? 0 : ysp.hpw.sdk.length - 1;
            ysp.hpw.pqq((ysp.hpw.sdk[ysp.hpw.xrv] === 0))
        }
        sessionStorage.sessionValue6 = ysp.hpw.xrv;
        if (ysp.hpw.sdk[ysp.hpw.xrv] > 0) {
            ysp.hpw.wba.dyw("audioon")
        }
        if (d) {
            d.exq("audio", ysp.hpw.sdk[ysp.hpw.xrv])
        }
        if (f) {
            f.qbw.tpi("audio", "#ogm", [ysp.hpw.xrv])
        }
        if (e) {
            e.qbw.tpi("audio", "#ogm", [ysp.hpw.xrv])
        }
        if (g) {
            g.qbw.tpi("audio", "#ogm", [ysp.hpw.xrv])
        }
        ysp.hpw.cul()
    };
    this.ppa = function() {
        ysp.hpw.zyp = true
    };
    this.kpg = function() {};
    this.xmt = function() {
        var d = ysp.hpw.llt.qmc("settings");
        if (d) {
            if (d.pod()) {
                ysp.hpw.wrc()
            } else {
                ysp.hpw.ctw()
            }
            ysp.hpw.wba.dyw("btn");
            if (ysp.hpw.gof.jnb === false) {
                ysp.hpw.zxl.qbw.tpi("setting", "#yzn", [d.pod()])
            }
        }
    };
    this.klq = function() {
        var d = ysp.hpw.llt.qmc("settings"),
            e = "";
        ysp.hpw.gwu = (ysp.hpw.gwu < ysp.hpw.cyi.length - 1) ? ysp.hpw.gwu + 1 : (ysp.ekr.gyi()) ? 0 : 1;
        localStorage.localValue1 = ysp.hpw.gwu;
        ysp.hpw.hef();
        if (d) {
            d.qbw.tpi("adjustment", "#ogm", [(ysp.hpw.odx === ysp.gof.fzk) ? 0 : 1]);
            if (ysp.hpw.cyi[ysp.hpw.gwu] === ysp.iax.uuz) {
                e = ysp.hpw.language.left
            } else {
                if (ysp.hpw.cyi[ysp.hpw.gwu] === ysp.iax.xcc) {
                    e = ysp.hpw.language.xoj
                } else {
                    if (ysp.hpw.cyi[ysp.hpw.gwu] === ysp.iax.oct) {
                        e = ysp.hpw.language.scm
                    }
                }
            }
            d.qbw.tpi("adjustment", "#zev", [e])
        }
    };
    this.bbk = function() {
        if (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue21)
        }
    };
    this.pqs = function() {
        if (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue20)
        }
    };
    this.hbi = function() {
        if (sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue19)
        }
    };
    this.aar = function(e, d) {
        this.zxl.qbw.tpi("creditd", "#zev", [this.avr(e), d])
    };
    this.sni = function(e, d) {
        if (e > 0) {
            this.zxl.qbw.tpi("betd", "#zev", [this.avr(e), d])
        } else {
            this.zxl.qbw.tpi("betd", "#zev", ["", d])
        }
    };
    this.bau = function(e) {
        var d = this.llt.qmc("topi");
        this.xnc = e;
        if (d) {
            d.wsq("id", (e > 0) ? e : "-")
        }
    };
    this.vfw = function() {
        var e = "",
            d = ysp.hpw.llt.qmc("topi");
        if (ysp.lct.value49) {
            e += ysp.hpw.wme()
        }
        if (ysp.lct.value49 && sessionStorage.sessionValue15 == "true") {
            e += " ["
        }
        if (sessionStorage.sessionValue15 == "true") {
            e += ysp.hpw.prg()
        }
        if (ysp.lct.value49 && sessionStorage.sessionValue15 == "true") {
            e += "]"
        }
        if (d) {
            d.wsq("time", e)
        }
    };
    this.prg = function() {
        return this.getTime(new Date().getTime() - this.zwr)
    };
    this.wme = function() {
        var d = new Date();
        return this.fip(d.getHours()) + ":" + this.fip(d.getMinutes())
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
        return this.fip(d) + ":" + this.fip(f)
    };
    this.fip = function(d) {
        if (d < 0) {
            return "00"
        } else {
            if (d < 10) {
                return "0" + d
            }
        }
        return d
    };
    this.iii = function() {
        if (sessionStorage.sessionValue15 == "true" || ysp.lct.value49) {
            if (ysp.lct.value49) {
                this.wme()
            }
            this.zwr = (this.qbb > 0) ? this.qbb : new Date().getTime();
            this.vfw();
            this.wrb = setInterval(this.vfw, 1000)
        }
    };
    this.knf = function() {
        clearInterval(this.wrb)
    };
    this.kte = function(d) {
        this.zwr -= d
    };
    this.oyk = function(d, f) {
        var e = this.llt.qmc("loading");
        if (e && e.hlw == null) {
            if (f && f !== "") {
                e.lan = f
            } else {
                e.lan = this.language.error
            }
            e.hlw = d;
            e.cul(this.wba.nlp())
        }
    };
    this.ctw = function() {};
    this.wrc = function() {};
    this.hzr = function() {};
    this.vrh = function() {};
    this.dkh = function() {
        var g = false,
            i = this.llt.qmc("topb"),
            f = this.llt.qmc("settings"),
            j = this.llt.qmc("gameb"),
            d = this.llt.qmc("topi");
        this.but = (this.but + 1 == ysp.lct.value5.length) ? 0 : this.but + 1;
        sessionStorage.sessionValue1 = ysp.lct.value5[this.but];
        this.language = this.pvy(ysp.lct.value5[this.but]);
        this.ree();
        if (i && g == false) {
            var e = i.qbw.qmc("language");
            if (e) {
                e.gnk(this.lua(ysp.lct.value5[this.but]));
                g = true
            }
            i.zih(true)
        }
        if (f && g == false) {
            var e = f.qbw.qmc("language");
            if (e) {
                e.gnk(this.lua(ysp.lct.value5[this.but]));
                g = true
            }
        }
        if (j && g == false) {
            var e = j.qbw.qmc("language");
            if (e) {
                e.gnk(this.lua(ysp.lct.value5[this.but]));
                g = true
            }
        }
        if (g == false) {
            var e = this.zxl.qbw.qmc("lang");
            if (e) {
                e.egq = this.lua(ysp.lct.value5[this.but])
            }
        }
        if (d) {
            d.ogm("language", sessionStorage.sessionValue1)
        }
        this.cul()
    };
    this.ree = function() {};
    this.pvy = function(d) {
        if (d == ysp.language.EN || d == ysp.language.US) {
            return new tlm()
        } else {
            if (d == ysp.language.ES || d == ysp.language.CO || d == ysp.language.MX || d == ysp.language.CL || d == ysp.language.VE) {
                return new fvl()
            } else {
                if (d == ysp.language.DE || d == ysp.language.AT) {
                    return new rmx()
                } else {
                    if (d == ysp.language.PT || d == ysp.language.BR) {
                        return new epm()
                    } else {
                        if (d == ysp.language.RU) {
                            return new jni()
                        } else {
                            if (d == ysp.language.EE) {
                                return new drg()
                            } else {
                                if (d == ysp.language.TR) {
                                    return new wmh()
                                } else {
                                    if (d == ysp.language.CZ) {
                                        return new paj()
                                    } else {
                                        if (d == ysp.language.GR) {
                                            return new xel()
                                        } else {
                                            if (d == ysp.language.BG) {
                                                return new aat()
                                            } else {
                                                if (d == ysp.language.GE) {
                                                    return new nna()
                                                } else {
                                                    if (d == ysp.language.HU) {
                                                        return new wuh()
                                                    } else {
                                                        if (d == ysp.language.RO) {
                                                            return new coi()
                                                        } else {
                                                            if (d == ysp.language.FR) {
                                                                return new nyg()
                                                            } else {
                                                                if (d == ysp.language.HR) {
                                                                    return new env()
                                                                } else {
                                                                    if (d == ysp.language.IT) {
                                                                        return new ikg()
                                                                    } else {
                                                                        if (d == ysp.language.SE) {
                                                                            return new ouo()
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
    this.lua = function(d) {
        if (d) {
            return this.wba.vjf(d)
        }
        return null
    };
    this.hrk = function() {
        this.wba.ixm()
    };
    this.qbe = function() {};
    this.pqq = function(d) {
        this.wba.adr(d)
    };
    this.gqu = function(d) {
        this.wba.bip(d)
    };
    this.kuv = function() {
        this.syy();
        var d = this.llt.qmc("history");
        this.qah = true;
        this.afz = true;
        if (d) {
            d.nxz(true)
        }
        this.kzb(this.oxp(this.language.wli))
    };
    this.tvp = function() {
        loadGame("hist_" + ysp.hpw.xkd.toLowerCase(), ysp.lct.value30 + "/" + ysp.hpw.xkd.toLowerCase() + "/src/hist_" + ysp.hpw.xkd.toLowerCase(), "UTF-8");
        removeGame(ysp.hpw.xkd.toLowerCase(), ysp.lct.value30 + "/" + ysp.hpw.xkd.toLowerCase() + "/src/" + ysp.hpw.xkd.toLowerCase())
    };
    this.mbo = function() {
        var d = "./history_" + this.xkd.toLowerCase() + ".html";
        if (sessionStorage.sessionValue12) {
            d += "?config=" + sessionStorage.sessionValue12
        }
        window.location.href = d
    };
    this.ygw = function() {
        var d = null;
        if (ysp.hpw.cwt) {
            return
        }
        if (sessionStorage.sessionValue5 != null) {
            if (ysp.hpw.fok) {
                ysp.hpw.fok.tdb({
                    sender: ysp.hpw.xkd,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                })
            }
            sessionStorage.exitGame = "true";
            d = decodeURIComponent(sessionStorage.sessionValue5);
            ysp.hpw.grc();
             if (d !== "(api)") {
               window.parent.postMessage('CloseGame',"*");	
            }
        } else {
            removeGame(ysp.hpw.xkd.toLowerCase(), ysp.lct.value30 + "/" + ysp.hpw.xkd.toLowerCase() + "/src/" + ysp.hpw.xkd.toLowerCase());
            removeGame("hist_" + ysp.hpw.xkd.toLowerCase(), ysp.lct.value30 + "/" + ysp.hpw.xkd.toLowerCase() + "/src/hist_" + ysp.hpw.xkd.toLowerCase());
            loadMenu("menu", ysp.lct.value1001, "UTF-8", true)
        }
    };
    this.uhq = function() {
        var d = null;
        if (sessionStorage.sessionValue5 != null) {
            if (ysp.hpw.fok) {
                ysp.hpw.fok.tdb({
                    sender: ysp.hpw.xkd,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                })
            }
            d = decodeURIComponent(sessionStorage.sessionValue5);
            ysp.hpw.grc();
             if (d !== "(api)") {
               window.parent.postMessage('CloseGame',"*");	
            }
        } else {
            removeGame(ysp.hpw.xkd.toLowerCase(), ysp.lct.value30 + "/" + ysp.hpw.xkd.toLowerCase() + "/src/" + ysp.hpw.xkd.toLowerCase());
            removeGame("hist_" + ysp.hpw.xkd.toLowerCase(), ysp.lct.value30 + "/" + ysp.hpw.xkd.toLowerCase() + "/src/hist_" + ysp.hpw.xkd.toLowerCase());
            loadMenu("menu", ysp.lct.value1001, "UTF-8", false)
        }
    };
    this.grc = function() {
        if (!ysp.hpw.coz && ysp.lct.value83) {
            sessionStorage.clear()
        }
    };
    this.tvm = function(f) {
        var g = null;
        if (this.geo) {
            for (var e = 0, d = f.length; e < d; e++) {
                g = f[e];
                if (g.sit !== ysp.ezq.rja) {
                    if (g.sit === ysp.ezq.yvv || g.sit === ysp.ezq.bvy) {
                        g.Title = this.language.dbl;
                        g.Text = (g.sit === ysp.ezq.yvv) ? this.language.ojg : this.language.edt;
                        g.Buttons = [{
                            Text: this.language.nkt,
                            Action: "quit"
                        }]
                    } else {
                        if (g.sit === ysp.ezq.zbg) {
                            g.Title = this.language.dth;
                            g.Text = this.language.zsh + "\n";
                            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                                g.Text += this.language.izw;
                                g.Buttons = [{
                                    Text: this.oxp(this.language.xak),
                                    Action: "history"
                                }, {
                                    Text: this.language.nkt,
                                    Action: "quit"
                                }]
                            } else {
                                g.Buttons = [{
                                    Text: this.language.nkt,
                                    Action: "quit"
                                }]
                            }
                        } else {
                            if (g.sit === ysp.ezq.spd || g.sit === ysp.ezq.sfa || g.sit === ysp.ezq.bjy) {
                                g.Title = this.zfs;
                                if (g.sit === ysp.ezq.spd) {
                                    g.Text = this.language.freerounds_startinfo + " " + this.freeRoundTotal + " " + this.language.freerounds + "\n\n" + this.language.qnb
                                } else {
                                    if (g.sit === ysp.ezq.sfa) {
                                        g.Text = this.language.freerounds_info1 + " " + (this.freeRoundTotal - this.gja) + " " + this.language.freerounds_info2 + "\n\n" + this.language.qnb
                                    } else {
                                        if (g.sit === ysp.ezq.bjy) {
                                            g.Text = this.language.freerounds_played + ": " + this.gja + "\n" + this.language.freerounds_win + ": " + this.thh(this.qfy)
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
                    if (g.sit === ysp.ezq.bgq || g.sit === ysp.ezq.nad) {
                        g.Title = this.language.ggl;
                        g.Text = this.language.dde;
                        g.Buttons = [{
                            Text: this.language.ok,
                            Action: "continue"
                        }]
                    } else {
                        if (g.sit === ysp.ezq.hsv) {
                            g.Title = this.language.qgx;
                            g.Text = this.language.bxt;
                            g.Buttons = [{
                                Text: this.language.ok,
                                Action: "continue"
                            }]
                        } else {
                            if (g.sit === ysp.ezq.roulette.qhb || g.sit === ysp.ezq.roulette.tii) {
                                g.Title = this.language.dbl;
                                g.Text = (g.sit === ysp.ezq.roulette.qhb) ? this.language.bru : this.language.jly;
                                g.Buttons = [{
                                    Text: this.language.nkt,
                                    Action: "quit"
                                }]
                            }
                        }
                    }
                }
            }
            this.geo.ogy(f)
        }
    };
    this.stop = function() {
        this.knf();
        this.zqa();
        this.hpj();
        clearTimeout(this.uwx);
        if (!this.coz) {
            clearInterval(this.nrg)
        }
        this.llt.tpi("autop", "#stop");
        this.llt.tpi("settings", "#stop");
        this.llt.tpi("topb", "#stop")
    };
    this.jhh = function() {
        var d = false;
        if (this.qso.toLowerCase().indexOf("freeplay") === 0) {
            d = true
        } else {
            if (this.mxt == "freeplay" && this.lkb == "freeplay") {
                d = true
            } else {
                if (this.qix && (this.qix == "b71d982ffcbe56eb8cd11fa05963bbee" || this.qix.toLowerCase() == "freeplay")) {
                    d = true
                } else {
                    if (ysp.lct.value68 != null && this.tsh.toLowerCase() === ysp.lct.value68.toLowerCase()) {
                        d = true
                    }
                }
            }
        }
        if (d === true) {
            ysp.lct.value21.e = false;
            if (ysp.lct.value76) {
                ysp.lct.value76.f = false
            }
        }
        return d
    };
    this.bcp = function() {
        return (ysp.lct.value65 > 0)
    };
    this.wyd = function() {
        return (this.coz === false)
    };
    this.tdu = function() {
        return false
    };
    this.vln = function() {
        if (ysp.hpw.bcp() && ysp.hpw.tdu()) {
            clearTimeout(ysp.hpw.bks);
            ysp.hpw.bks = setTimeout(ysp.hpw.uze, ysp.lct.value65)
        }
    };
    this.zdx = function() {
        if (ysp.hpw.bcp() && ysp.hpw.bks >= 0) {
            if (ysp.hpw.tdu()) {
                clearTimeout(ysp.hpw.bks);
                ysp.hpw.bks = setTimeout(ysp.hpw.uze, ysp.lct.value65)
            } else {
                clearTimeout(ysp.hpw.bks);
                ysp.hpw.bks = -1
            }
        }
    };
    this.zqa = function() {
        if (ysp.hpw.bcp()) {
            clearTimeout(ysp.hpw.bks);
            ysp.hpw.bks = -1
        }
    };
    this.uiu = function() {
        return false
    };
    this.qvy = function() {
        return false
    };
    this.qsz = function() {
        if (ysp.hpw.uiu() && ysp.hpw.qvy() && ysp.hpw.ssh < 0) {
            clearTimeout(ysp.hpw.ssh);
            ysp.hpw.ssh = setTimeout(ysp.hpw.xbc, ysp.hpw.sjs)
        }
    };
    this.lnk = function() {
        if (ysp.hpw.uiu() && ysp.hpw.ssh >= 0) {
            if (ysp.hpw.qvy()) {
                clearTimeout(ysp.hpw.ssh);
                ysp.hpw.ssh = setTimeout(ysp.hpw.xbc, ysp.hpw.sjs)
            } else {
                clearTimeout(ysp.hpw.ssh);
                ysp.hpw.ssh = -1
            }
        }
    };
    this.hpj = function() {
        if (ysp.hpw.uiu()) {
            clearTimeout(ysp.hpw.ssh);
            ysp.hpw.ssh = -1
        }
    };
    this.xbc = function() {};
    this.aoc = function() {};
    this.eld = function(f) {
        var e = Number(f.replace(/_*/g, "")),
            d = Number(this.dxa.replace(/_*/g, ""));
        if (e > d) {
            this.dxa = f
        }
    };
    this.jgj = function(g) {
        var e = (g && !this.ols),
            f = this.llt.qmc("topb"),
            d = this.llt.qmc("topi");
        if (d) {
            d.cgv(e)
        }
        if (f) {
            f.cgv(e);
            f.jjr(e)
        }
    };
    this.xuq = function(g) {
        var e = (g && !this.ols),
            f = this.llt.qmc("topb"),
            d = this.llt.qmc("topi");
        if (d) {
            d.cgv(e)
        }
        if (f) {
            f.cgv(e);
            f.enb(e)
        }
    };
    this.sxm = function(g) {
        var e = (g && !this.ols),
            f = this.llt.qmc("topb"),
            d = this.llt.qmc("topi");
        if (d) {
            d.cgv(e)
        }
        if (f) {
            f.cgv(e);
            f.jbo(e)
        }
    };
    this.wqw = function() {
        var d = this.llt.qmc("topb");
        if (d && !d.pod()) {
            this.wba.ntp("panel_in");
            this.wba.dyw("panel_in");
            d.ogy()
        }
    };
    this.bhp = function(d) {
        var e = this.llt.qmc("topb");
        if (e && e.pod()) {
            this.wba.ntp("panel_out");
            this.wba.dyw("panel_out");
            if (d) {
                e.okk = d
            }
            e.uaw()
        }
    };
    this.thh = function(f) {
        if (this.tuy > 0) {
            return (f * this.tuy).toFixed(0).toString()
        } else {
            if (ysp.lct.value21.e == false || this.cwt == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (ysp.lct.value21.m != 1) {
                    e = f * ysp.lct.value21.m;
                    var g = ysp.lct.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = ysp.lct.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.ngu(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.avr = function(f) {
        if (this.tuy > 0) {
            var e = (f * this.tuy).toFixed(0).toString();
            if (ysp.lct.value21.e == true && ysp.lct.value21.m == 1 && ysp.lct.value21.s && this.cwt == false) {
                e = ysp.lct.value21.s + " " + e
            }
            return e
        } else {
            if (ysp.lct.value21.e == false || this.cwt == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (ysp.lct.value21.m != 1) {
                    e = f * ysp.lct.value21.m;
                    var g = ysp.lct.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = ysp.lct.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.ngu(e, (d == 0) ? 0 : d + 1);
                if (ysp.lct.value21.s) {
                    e = ysp.lct.value21.s + " " + e
                }
                return e
            }
        }
    };
    this.ngu = function(l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (ysp.lct.value21.cs != null) {
                l = l.replace(/\./, ysp.lct.value21.cs)
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
                    if (ysp.lct.value21.ts != null) {
                        e += ysp.lct.value21.ts
                    }
                }
            }
            if (ysp.lct.value21.cs != null) {
                f = f.replace(/\./, ysp.lct.value21.cs)
            }
            return e + f
        }
    };
    this.pij = function(f) {
        if (this.tuy > 0) {
            return (f * this.tuy).toFixed(0).toString()
        } else {
            if (ysp.lct.value76.f == false || this.cwt == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (ysp.lct.value76.m != 1) {
                    e = f * ysp.lct.value76.m;
                    var g = ysp.lct.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = ysp.lct.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.mqc(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.qrm = function(f) {
        if (this.tuy > 0) {
            var e = (f * this.tuy).toFixed(0).toString();
            if (ysp.lct.value76.f == true && ysp.lct.value76.m == 1 && ysp.lct.value76.s && this.cwt == false) {
                e = ysp.lct.value76.s + " " + e
            }
            return e
        } else {
            if (ysp.lct.value76.f == false || this.cwt == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (ysp.lct.value76.m != 1) {
                    e = f * ysp.lct.value76.m;
                    var g = ysp.lct.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = ysp.lct.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.mqc(e, (d == 0) ? 0 : d + 1);
                if (ysp.lct.value76.s) {
                    e = ysp.lct.value76.s + " " + e
                }
                return e
            }
        }
    };
    this.mqc = function(l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (ysp.lct.value76.cs != null) {
                l = l.replace(/\./, ysp.lct.value76.cs)
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
                    if (ysp.lct.value76.ts != null) {
                        e += ysp.lct.value76.ts
                    }
                }
            }
            if (ysp.lct.value76.cs != null) {
                f = f.replace(/\./, ysp.lct.value76.cs)
            }
            return e + f
        }
    };
    this.oxp = function(d) {
        if (d && sessionStorage.sessionValue1 !== ysp.language.GE) {
            return d.toUpperCase()
        }
        return d
    };
    this.fdw = function() {
        for (var f = 0, d = this.rlv.dap.udu.length, e = null, g = 0; f < d; f++) {
            e = this.rlv.dap.udu[f];
            g = e.ofv.substring(e.ofv.length - 1);
            this.llt.zth(e.ofv, this.pkc(this.gof.ulw.quz[d - 1][e.quz], (d > 2) ? this.gof.ulw.hke : this.gof.ulw.display, this.style.ulw.qzj[e.quz], e.wrw, e.value, this.wba.vjf((d > 2) ? e.ofv + "_smalldsp" : e.ofv + "_dsp"), (d <= 2) ? [this.wba.vjf("jackpot_frame")] : (Number(g) <= 2) ? [this.wba.vjf("jackpot_topframe")] : [this.wba.vjf("jackpot_bottomframe")], (d > 2) ? this.wba.vjf(e.ofv + "_sym") : null), ["jackpots"])
        }
        this.llt.zth("jwp", this.pkc(this.gof.ulw.bsc.quz, this.gof.ulw.bsc, this.style.ulw.bsc, null, null, null, [this.wba.vjf("jackpot_win_0"), this.wba.vjf("jackpot_win_1"), this.wba.vjf("jackpot_win_2")], null));
        this.llt.tpi("jwp", "#coc", [false]);
        if (this.kqg()) {
            this.llt.zth("mjwp", this.nvl(this.gof.ulw.shv.quz, this.gof.ulw.shv, this.style.ulw.shv, this.wba.vjf("mj_bg"), this.wba.vjf("mj_font"), this.wba.vjf("mj_label"), [this.wba.vjf("mj_0"), this.wba.vjf("mj_1"), this.wba.vjf("mj_2"), this.wba.vjf("mj_3"), this.wba.vjf("mj_4"), this.wba.vjf("mj_5")]));
            this.llt.tpi("mjwp", "#coc", [false])
        }
    };
    this.tru = function() {
        var e = this.llt.fbh("jackpots"),
            f = this.llt.qmc("jwp"),
            k = this.llt.qmc("mjwp");
        for (var j = 0, d = this.rlv.dap.udu.length, g = null; j < d; j++) {
            g = this.rlv.dap.udu[j];
            e[j].srt(this.gof.ulw.quz[d - 1][g.quz]);
            e[j].uad((d > 2) ? this.gof.ulw.hke : this.gof.ulw.display)
        }
        if (f) {
            f.srt(this.gof.ulw.bsc.quz);
            f.uad(this.gof.ulw.bsc)
        }
        if (k) {
            k.srt(this.gof.ulw.shv.quz);
            k.uad(this.gof.ulw.shv)
        }
    };
    this.pkc = function(k, i, e, l, m, f, d, g) {
        var j = new ybn();
        j.bih(k, null, this.context2D);
        j.parent = this;
        j.lor = f;
        j.zlb = d;
        j.aez = g;
        j.sia(l);
        j.lgb(m);
        j.ygz(e);
        j.uad(i);
        return j
    };
    this.nvl = function(j, i, g, k, l, f, e) {
        var d = new rrq();
        d.bih(j, null, this.context2D);
        d.parent = this;
        d.zqq = k;
        d.jnt = l;
        d.eyk = f;
        d.qhw = e;
        d.ygz(g);
        d.uad(i);
        return d
    };
    this.szp = function(f) {
        if (this.vad() === true) {
            for (var e = 0, d = f.length; e < d; e++) {
                this.llt.tpi(f[e].ofv, "#lgb", [f[e].value])
            }
            this.cul()
        }
    };
    this.tkg = function(d) {
        if (this.vad() === true) {
            this.ulw = {
                ofv: d.ofv,
                value: d.value,
                lmm: d.lmm
            }
        }
    };
    this.pif = function() {
        this.ulw = null
    };
    this.hqp = function() {
        return false
    };
    this.kqg = function() {
        return false
    };
    this.vad = function() {
        return (!this.coz && this.rlv.dap.udu.length > 0 && this.hqp())
    };
    this.ohh = function() {
        return (this.ulw != null)
    };
    this.nvc = function() {
        return (ysp.lct.value86 === true && ((sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") || (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") || (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null")))
    };
    this.cnt = function() {
        if (this.khn() && this.anu()) {
            this.bel()
        }
    };
    this.anu = function() {
        return false
    };
    this.khn = function() {
        if (this.coz) {
            return false
        }
        return (this.rlv.dap.zdc.length + this.rlv.dap.jzu.length > 0)
    };
    this.bel = function() {
        var g = null,
            e = this.rlv.dap.zdc.length,
            d = this.rlv.dap.jzu.length;
        if (d + e > 0) {
            for (var f = e - 1; f >= 0; f--) {
                g = this.rlv.dap.zdc.splice(f, 1)[0];
                g.sit = ysp.ezq.rja;
                this.tac.push(g)
            }
            for (var f = d - 1; f >= 0; f--) {
                g = this.rlv.dap.jzu.splice(f, 1)[0];
                g.sit = ysp.ezq.rja;
                this.tac.push(g)
            }
            if (this.geo && !this.geo.pod()) {
                this.yjm()
            }
        }
    };
    this.yjm = function() {
        var d = null;
        if (this.tac.length > 0) {
            d = this.tac.shift();
            this.tvm([d])
        }
    };
    this.fhc = function() {
        if (ysp.hpw.pku.length > 0) {
            ysp.hpw.tvm(ysp.hpw.pku)
        }
    };
    this.teo = function() {
        this.tac.length = 0
    };
    this.nzg = function() {
        this.pku.length = 0;
        if (this.oho) {
            this.oho.uaw()
        }
    };
    this.jlc = function() {
        var f = null,
            d = this.rlv.dap.pku.length;
        if (d > 0) {
            for (var e = d - 1; e >= 0; e--) {
                f = this.rlv.dap.pku.splice(e, 1)[0];
                f.sit = ysp.ezq.rja;
                this.pku.push(f)
            }
            if (this.oho) {
                this.oho.ogy(this.pku[0].Title, this.pku[0].Text, this.pku.length)
            }
        }
    };
    this.tgl = function() {
        var d = false;
        if (this.geo && this.geo.pod()) {
            d = true
        }
        if (this.oho && this.oho.pod()) {
            d = true
        }
        if (this.nvc()) {
            d = true
        }
        if (this.jwu) {
            this.jwu.style.display = (d) ? "block" : "none"
        }
    };
    this.ydk = function() {
        this.jgj(false);
        this.zxl.jjr(false);
        this.zxl.qbw.tpi("info", "#tto");
        this.tvm([{
            sit: ysp.ezq.zbg
        }])
    };
    this.ziv = function() {
        ysp.hpw.dwt = true
    };
    this.gtw = function() {
        this.epw = new wmj().bih(this, ysp.lct.value6)
    };
    this.cyn = function() {
        if (this.epw) {
            this.epw.connect(this.xkd, this.mxt, this.lkb, this.qix, this.dxa, true)
        }
    };
    this.nmr = function() {
        if (ysp.hpw.epw) {
            ysp.hpw.epw.connect(ysp.hpw.xkd, ysp.hpw.mxt, ysp.hpw.lkb, ysp.hpw.qix, ysp.hpw.dxa, false)
        }
    };
    this.llh = function() {};
    this.osb = function() {};
    this.kpa = function(d) {
        if (!this.jhh() && !this.coz) {
            clearTimeout(this.uwx);
            if (this.rfo()) {
                this.uwx = setTimeout(this.tym, d)
            } else {
                if (Number(sessionStorage.sessionValue17) > 0) {
                    this.uwx = setTimeout(this.ziv, Number(sessionStorage.sessionValue17) * 60000)
                }
            }
        }
    };
    this.tym = function() {
        ysp.hpw.bup = true
    };
    this.rfo = function() {
        return ysp.lct.value36 || ysp.lct.value37
    }
}

function rua() {
    this.bih = function() {
        this.qoy("btn", this.ayh);
        this.qoy("gamble_on", this.ayh);
        this.qoy("gamble_off", this.ayh);
        this.qoy("panel_in", this.ayh);
        this.qoy("panel_out", this.ayh);
        this.qoy("audioon", this.ayh);
        for (var a = 0; a < 12; a++) {
            this.qoy("step" + a, this.ayh)
        }
        this.qoy("maxstep", this.ayh);
        this.qoy("gambleprop", this.klj)
    }
}
rua.prototype = new zmd;

function fcv() {
    this.zuw = {
        okl: 84,
        lgh: -1,
        value: "T",
        oqv: null
    };
    this.rtp = {
        okl: 80,
        lgh: -1,
        value: "P",
        oqv: null
    };
    this.start = {
        okl: 32,
        lgh: -1,
        value: "SPACE",
        oqv: null
    };
    this.ols = {
        okl: 16,
        lgh: -1,
        value: "SHIFT",
        oqv: null
    };
    this.lcf = {
        okl: 38,
        lgh: -1,
        value: "\u25B2",
        oqv: null
    };
    this.ehy = {
        okl: 40,
        lgh: -1,
        value: "\u25BC",
        oqv: null
    };
    this.kyj = {
        okl: 71,
        lgh: -1,
        value: "G",
        oqv: null
    };
    this.zjt = {
        okl: 27,
        lgh: -1,
        value: "ESC",
        oqv: null
    };
    this.language = {
        okl: 76,
        lgh: -1,
        value: "L",
        oqv: null
    };
    this.txp = {
        okl: 13,
        lgh: -1,
        value: "ENTER",
        oqv: null
    };
    this.rei = {
        okl: 27,
        lgh: -1,
        value: "ESC",
        oqv: null
    };
    this.ttn = {
        okl: 39,
        lgh: -1,
        value: "\u25B6",
        oqv: null
    };
    this.iul = {
        okl: 37,
        lgh: -1,
        value: "\u25C0",
        oqv: null
    };
    this.nee = {
        okl: 27,
        lgh: -1,
        value: "ESC",
        oqv: null
    };
    this.uwf.push(this.zuw);
    this.uwf.push(this.rtp);
    this.uwf.push(this.start);
    this.uwf.push(this.lcf);
    this.uwf.push(this.ehy);
    this.uwf.push(this.zjt);
    this.uwf.push(this.language);
    this.uwf.push(this.ols);
    this.uwf.push(this.kyj)
}
fcv.prototype = new afc;

function xgc(g, c, f, e, i, a, d, b) {
    this.kcc = g;
    this.lia = f;
    this.yvr = e;
    this.fog = i;
    this.xkd = c;
    this.dxa = a;
    this.epv = d;
    this.tsh = b;
    this.uoi = [];
    this.kgc = [];
    this.esr = [];
    this.jaa = [];
    this.eih = [];
    this.xnc = 0;
    this.lmm = 0;
    this.win = 0;
    this.srd = 0;
    this.ljr = 0;
    this.yrf = 0;
    this.vaq = 0;
    this.svl = 0;
    this.wga = -1;
    this.ssb = -1;
    this.ayj = 0;
    this.ols = false;
    this.wdm = -1;
    this.xwd = 0;
    this.rbp = "";
    this.wdh = function(l) {
        if (l != null) {
            this.hgy = 0;
            this.oku = this.ekc(l);
            if (this.oku == 0) {
                this.uat = this.tba(l);
                this.ezq = this.ekc(l);
                this.xnc = this.ora(l);
                this.lmm = this.ora(l);
                this.win = this.ora(l);
                this.srd = this.ora(l);
                this.vaq = this.tba(l);
                this.ljr = this.ora(l);
                this.yrf = this.ora(l);
                this.svl = this.ora(l);
                for (var j = 0; j < 8; j++) {
                    this.esr[j] = this.tba(l)
                }
                for (var j = 0; j < 5; j++) {
                    this.kgc[j] = this.ora(l)
                }
                for (var j = 0; j < 5; j++) {
                    this.uoi[j] = this.ora(l)
                }
                this.wga = this.tba(l);
                this.ssb = this.tba(l);
                this.ayj = this.tba(l);
                this.xwd = this.tba(l);
                this.wdm = this.tba(l);
                var m = this.tba(l);
                for (var j = 0; j < m; j++) {
                    this.jaa[j] = this.ora(l)
                }
                var k = this.tba(l);
                for (var j = 0; j < k; j++) {
                    this.eih[j] = this.ora(l)
                }
                this.ass(l);
                if (this.uat == 0) {
                    this.htf("A/u250")
                } else {
                    this.rlv.axq()
                }
            } else {
                if (this.oku == 1) {
                    this.uat = this.tba(l);
                    this.ezq = this.ekc(l);
                    this.xnc = this.ora(l);
                    this.lmm = this.ora(l);
                    this.win = this.ora(l);
                    this.srd = this.ora(l);
                    this.vaq = this.tba(l);
                    this.ljr = this.ora(l);
                    this.yrf = this.ora(l);
                    this.svl = this.ora(l);
                    for (var j = 0; j < 8; j++) {
                        this.esr[j] = this.tba(l)
                    }
                    for (var j = 0; j < 5; j++) {
                        this.kgc[j] = this.ora(l)
                    }
                    for (var j = 0; j < 5; j++) {
                        this.uoi[j] = this.ora(l)
                    }
                    this.wga = this.tba(l);
                    this.ssb = this.tba(l);
                    this.ayj = this.tba(l);
                    this.ols = (this.tba(l) == 1) ? true : false;
                    this.xwd = this.tba(l);
                    this.wdm = this.tba(l);
                    this.ass(l);
                    if (this.ezq == 0) {
                        if (this.uat == ysp.vux.oqx.xiv) {
                            this.rlv.axq()
                        } else {
                            if (this.uat == ysp.vux.oqx.mya) {
                                this.rlv.ssv()
                            } else {
                                if (this.uat == ysp.vux.oqx.rpg) {
                                    this.rlv.xmr()
                                } else {
                                    if (this.uat == ysp.vux.oqx.wcj) {
                                        this.rlv.odp()
                                    } else {
                                        if (this.uat == ysp.vux.oqx.crq) {
                                            this.rlv.zdh()
                                        } else {
                                            if (this.uat == ysp.vux.oqx.qsn) {
                                                this.rlv.rsh()
                                            } else {
                                                if (this.uat == ysp.vux.oqx.bym) {
                                                    this.rlv.fyo()
                                                } else {
                                                    if (this.uat == ysp.vux.oqx.cip) {
                                                        this.rlv.ldc()
                                                    } else {
                                                        if (this.uat == ysp.vux.oqx.pri) {
                                                            this.rlv.ixd()
                                                        } else {
                                                            if (this.uat == ysp.vux.oqx.exo) {
                                                                this.rlv.ivg()
                                                            } else {
                                                                if (this.uat == ysp.vux.oqx.xdc) {
                                                                    this.rlv.dlb()
                                                                } else {
                                                                    if (this.uat == ysp.vux.oqx.dlf) {
                                                                        this.rlv.xnw()
                                                                    } else {
                                                                        this.xor()
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
                        this.rlv.itb(this.ezq)
                    }
                } else {
                    if (this.oku == 2) {} else {
                        if (this.oku == 3) {
                            this.lmm = this.ora(l);
                            this.rlv.aar()
                        } else {
                            if (this.oku === 8) {
                                this.htf("8")
                            } else {
                                if (this.oku == 9) {
                                    this.rlv.xyf.qso = l.substring(this.hgy)
                                } else {
                                    this.kmu = this.ekc(l);
                                    this.rlv.wyj(l.substring(2))
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.ass = function(j) {
        if (this.oku == 0) {
            this.rbp = this.fgu(j);
            if (ysp.lct.value21.e === true && ysp.lct.value21.s !== "") {
                this.rbp = ""
            }
        }
    };
    this.xor = function() {};
    this.enr = function(j, k) {
        this.htf("A/u251," + j + "," + k)
    };
    this.tkt = function(j, l, k) {
        this.htf("A/u2512," + k[0] + "," + k[1] + "," + k[2] + "," + k[3] + "," + k[4] + "," + j + "," + l)
    };
    this.fro = function(j, l, k) {
        this.htf("A/u253," + k[0] + "," + k[1] + "," + k[2] + "," + k[3] + "," + k[4] + "," + j + "," + l)
    };
    this.ugt = function() {
        this.htf("A/u257")
    };
    this.nkd = function() {
        this.htf("A/u259")
    };
    this.kyj = function(j) {
        this.htf("A/u258," + j)
    };
    this.xsc = function() {
        this.htf("A/u2514")
    };
    this.www = function() {
        this.htf("A/u2515")
    };
    this.zwz = function(j) {
        this.htf("A/u2513," + j)
    }
}
xgc.prototype = new ias;

function wvu() {
    this.bih = function(a, b) {
        this.kcc = b;
        this.xyf = a;
        return this
    };
    this.connect = function(c, f, e, g, a, d, b) {
        this.lia = f;
        this.yvr = e;
        this.fog = g;
        this.xkd = c;
        this.epv = d;
        this.tsh = b;
        this.dap = new xgc(this.kcc, c, f, e, g, a, d, b);
        this.dap.bih(this)
    };
    this.enr = function(a, b) {
        this.dap.enr(a, b)
    };
    this.tkt = function(a, c, b) {
        this.dap.tkt(a, c, b)
    };
    this.fro = function(a, c, b) {
        this.dap.fro(a, c, b)
    };
    this.ugt = function() {
        this.dap.ugt()
    };
    this.nkd = function() {
        this.dap.nkd()
    };
    this.kyj = function(a) {
        this.dap.kyj(a)
    };
    this.xsc = function() {
        this.dap.xsc()
    };
    this.www = function() {
        this.dap.www()
    };
    this.zwz = function(a) {
        this.dap.zwz(a)
    };
    this.axq = function() {
        var c = this.dap.uat;
        for (var b = 0; b < this.dap.kgc.length; b++) {
            this.xyf.kgc[b] = this.dap.kgc[b]
        }
        for (var b = 0; b < this.dap.uoi.length; b++) {
            this.xyf.uoi[b] = this.dap.uoi[b]
        }
        this.xyf.lmm = this.dap.lmm;
        this.xyf.ljr = this.dap.ljr;
        this.xyf.yrf = this.dap.yrf;
        for (var b = 0, a = this.dap.jaa.length; b < a && this.dap.jaa[b] <= this.dap.yrf; b++) {
            this.xyf.jaa[b] = this.dap.jaa[b]
        }
        if (c == ysp.vux.oqx.xiv || (c == ysp.vux.oqx.rpg && this.dap.win + this.dap.srd == 0) || c == ysp.vux.oqx.wcj || (c == ysp.vux.oqx.crq && this.dap.win + this.dap.srd == 0) || c == ysp.vux.oqx.bym || (c == ysp.vux.oqx.pri && this.dap.win + this.dap.srd == 0) || (c == ysp.vux.oqx.mya && this.xyf.txz == true)) {
            this.xyf.nrs = true
        } else {
            this.xyf.nrs = false
        }
        this.xyf.kjv = this.dap.vaq;
        this.xyf.totalBet = this.xyf.jaa[this.xyf.kjv];
        this.xyf.win = this.dap.win;
        this.xyf.jrt = this.dap.wga;
        this.xyf.ssb = this.dap.ssb;
        this.xyf.ayj = this.dap.ayj;
        this.xyf.state = c;
        this.ijv();
        this.xyf.hsz();
        this.xyf.fvs(this.dap.uat, this.dap.xnc, this.dap.esr, this.dap.xwd, this.dap.wdm)
    };
    this.ssv = function() {
        for (var a = 0; a < this.dap.kgc.length; a++) {
            this.xyf.kgc[a] = this.dap.kgc[a]
        }
        for (var a = 0; a < this.dap.uoi.length; a++) {
            this.xyf.uoi[a] = this.dap.uoi[a]
        }
        this.xyf.lmm = this.dap.lmm;
        this.xyf.jrt = this.dap.wga;
        this.xyf.state = this.dap.uat;
        this.xyf.ssb = this.dap.ssb;
        this.ijv();
        this.xyf.hhs();
        this.xyf.bau(this.dap.xnc)
    };
    this.ldc = function() {
        for (var a = 0; a < this.dap.kgc.length; a++) {
            this.xyf.kgc[a] = this.dap.kgc[a]
        }
        for (var a = 0; a < this.dap.uoi.length; a++) {
            this.xyf.uoi[a] = this.dap.uoi[a]
        }
        this.xyf.lmm = this.dap.lmm;
        this.xyf.ssb = this.dap.ssb;
        this.xyf.jrt = this.dap.wga;
        this.xyf.state = this.dap.uat;
        this.ijv();
        this.xyf.fgc();
        this.xyf.bau(this.dap.xnc)
    };
    this.xmr = function() {
        for (var a = 0; a < this.dap.kgc.length; a++) {
            this.xyf.kgc[a] = this.dap.kgc[a]
        }
        for (var a = 0; a < this.dap.uoi.length; a++) {
            this.xyf.uoi[a] = this.dap.uoi[a]
        }
        this.xyf.lmm = this.dap.lmm;
        this.xyf.win = this.dap.win;
        this.xyf.ssb = this.dap.ssb;
        this.xyf.jrt = this.dap.wga;
        this.xyf.state = this.dap.uat;
        if (this.xyf.win > 0) {
            this.xyf.pbq.mwc(this.dap.esr, this.dap.xwd)
        }
        this.ijv();
        this.xyf.rcj();
        this.xyf.bau(this.dap.xnc)
    };
    this.odp = function() {
        this.xyf.lmm = this.dap.lmm;
        this.xyf.state = this.dap.uat;
        this.ijv();
        this.xyf.wdw()
    };
    this.fyo = function() {
        for (var a = 0; a < this.dap.kgc.length; a++) {
            this.xyf.kgc[a] = this.dap.kgc[a]
        }
        for (var a = 0; a < this.dap.uoi.length; a++) {
            this.xyf.uoi[a] = this.dap.uoi[a]
        }
        this.xyf.lmm = this.dap.lmm;
        this.xyf.win = this.dap.win;
        this.xyf.ssb = this.dap.ssb;
        this.xyf.jrt = this.dap.wga;
        this.xyf.state = this.dap.uat;
        if (this.xyf.win > 0) {
            this.xyf.pbq.mwc(this.dap.esr, this.dap.xwd)
        }
        this.ijv();
        this.xyf.zee(this.dap.xwd);
        this.xyf.bau(this.dap.xnc)
    };
    this.zdh = function() {
        this.xyf.lmm = this.dap.lmm;
        this.xyf.win = this.dap.win;
        this.xyf.state = this.dap.uat;
        this.xyf.pbq.mwc(this.dap.esr, this.dap.xwd);
        this.ijv();
        this.xyf.kds();
        this.xyf.bau(this.dap.xnc)
    };
    this.rsh = function() {
        this.xyf.lmm = this.dap.lmm;
        this.xyf.win = this.dap.win;
        this.xyf.state = this.dap.uat;
        this.ijv();
        this.xyf.xmd();
        this.xyf.bau(this.dap.xnc)
    };
    this.ixd = function() {
        this.xyf.lmm = this.dap.lmm;
        this.xyf.win = this.dap.win;
        this.xyf.state = this.dap.uat;
        this.xyf.pbq.mwc(this.dap.esr, this.dap.xwd);
        this.ijv();
        this.xyf.omg(this.dap.xwd);
        this.xyf.bau(this.dap.xnc)
    };
    this.ivg = function() {
        this.xyf.lmm = this.dap.lmm;
        this.xyf.win = this.dap.win;
        this.xyf.state = this.dap.uat;
        this.ijv();
        this.xyf.owj(this.dap.wdm);
        this.xyf.bau(this.dap.xnc)
    };
    this.dlb = function() {
        this.xyf.lmm = this.dap.lmm;
        this.xyf.win = this.dap.win;
        this.xyf.state = this.dap.uat;
        this.xyf.pbq.mwc(this.dap.esr, this.dap.xwd);
        this.ijv();
        this.xyf.qec(this.dap.wdm);
        this.xyf.bau(this.dap.xnc)
    };
    this.ijv = function() {
        this.xyf.rbp = this.dap.rbp
    }
}
wvu.prototype = new nqk;

function eya() {
    var a = this;
    this.pgh = false;
    this.vum = null;
    this.qbw = null;
    this.kvs = false;
    this.gte = -1;
    this.vvh = 0;
    this.vdf = null;
    this.qjf = 800;
    this.vew = 0;
    this.bac = null;
    this.stj = null;
    this.nip = null;
    this.hlr = null;
    this.nja = null;
    this.zlm = null;
    this.qxw = null;
    this.aub = new pjy();
    this.fhq = new pjy();
    this.pfm = 30;
    this.bih = function(b, d, c) {
        eya.prototype.bih.call(this, b, d, c);
        this.bac = document.createElement("canvas");
        this.bac.width = this.width;
        this.bac.height = this.height;
        this.stj = this.bac.getContext("2d");
        this.eyi()
    };
    this.uki = function(c, b) {
        try {
            this.pfm = c.sqy;
            this.aub = c.eoe;
            this.fhq = c.jjf;
            this.kuu(c);
            this.fci(c);
            this.nog(c);
            this.ygz(b, false)
        } catch (d) {
            console.error(d)
        }
    };
    this.uad = function(f) {
        try {
            var c = {},
                b = this.qbw.qmc("info"),
                m = this.qbw.qmc("creditd"),
                l = this.qbw.qmc("betd"),
                k = this.qbw.fbh("buttons");
            if (this.parent.msq() != null) {
                c = f.hlz
            } else {
                if (ysp.lct.value57 === ysp.ui.yju) {
                    c = f.hil
                } else {
                    if (ysp.lct.value57 === ysp.ui.dvx) {
                        c = f.fsw
                    } else {
                        if (ysp.lct.value57 === ysp.ui.eev) {
                            c = f.joo
                        }
                    }
                }
            }
            this.pfm = f.sqy;
            this.aub = f.eoe;
            this.fhq = f.jjf;
            if (m) {
                m.uad(f.display);
                m.srt(f.zyr)
            }
            if (l) {
                l.uad(f.display);
                l.srt(f.awd)
            }
            if (b) {
                b.uad(f.qgx);
                b.srt(f.qgx.quz)
            }
            this.wap();
            for (var d = 0, g = k.length; d < g; d++) {
                if (k[d] instanceof nny) {
                    k[d].uad(f.eqh)
                }
            }
            if (this.parent.msq() != null) {
                this.qbw.tpi("astart", "#uad", [f.ugd]);
                if (this.parent.zfy() === true) {
                    this.qbw.tpi("start", "#uad", [f.ugd])
                } else {
                    this.qbw.tpi("start", "#uad", [f.crc])
                }
            } else {
                this.qbw.tpi("start", "#uad", [f.crc]);
                if (ysp.lct.value57 === ysp.ui.yju) {
                    this.qbw.tpi("astart", "#uad", [f.crc])
                }
            }
            this.qbw.tpi("start", "#srt", [c.dzy]);
            this.qbw.tpi("astart", "#srt", [c.ryv]);
            this.qbw.tpi("bet", "#srt", [c.xhh]);
            this.qbw.tpi("gamble", "#srt", [c.hdt]);
            this.qbw.tpi("exit", "#srt", [c.tho]);
            this.qbw.tpi("lang", "#srt", [c.rrp]);
            this.qbw.tpi("setting", "#srt", [c.hkz])
        } catch (j) {
            console.error(j)
        }
    };
    this.ygz = function(f) {
        try {
            var k = this.qbw.qmc("info"),
                c = this.qbw.fbh("displays"),
                g = this.qbw.fbh("buttons");
            this.nip = f.backgroundColor;
            this.hlr = f.zio;
            this.zlm = f.tna;
            this.qxw = f.xcl;
            if (k) {
                k.ygz(f.qgx)
            }
            for (var d = 0, b = g.length; d < b; d++) {
                g[d].ygz(f.rvj)
            }
            for (var d = 0, b = c.length; d < b; d++) {
                c[d].ygz(f.display)
            }
            this.wap()
        } catch (j) {
            console.error(j)
        }
    };
    this.xba = function(o, n, p) {
        var m = this.qbw.fbh("buttons"),
            d = this.qbw.qmc("bet"),
            b = this.qbw.qmc("start"),
            k = this.qbw.qmc("betd"),
            c = this.qbw.qmc("creditd");
        wiv = this.parent.llt.qmc("betsel"), piu = o - this.x, poa = n - this.y;
        for (var g = 0, l = m.length; g < l; g++) {
            var e = m[g];
            if (piu >= e.x && piu <= e.x + e.width && poa >= e.y && poa <= e.y + e.height && e.pod() == true) {
                if (e.aqx() && !e.pqi()) {
                    if (e === d) {
                        e.evd(true, true, false);
                        for (var f = 0; f < l; f++) {
                            m[f].kbg(true, false)
                        }
                        e.jan();
                        this.vdf = function() {
                            if (e.jan() === true) {
                                clearInterval(a.vvh);
                                e.evd(false, true);
                                for (var i = 0; i < l; i++) {
                                    m[i].kbg(false)
                                }
                            }
                        };
                        this.vvh = setInterval(this.vdf, e.twp)
                    } else {
                        if (e === b && b.jan === this.wvq) {
                            e.evd(true, true, false)
                        } else {
                            e.evd(true, true)
                        }
                        e.jan();
                        for (var f = 0; f < l; f++) {
                            m[f].kbg(true)
                        }
                    }
                    return true
                }
            }
        }
        if (d && d.aqx() && !d.pqi()) {
            if (k && piu >= k.x && piu <= k.x + k.width && poa >= k.y && poa <= k.y + k.height) {
                if (!p) {
                    if (wiv && wiv.aqx()) {
                        this.parent.ckl()
                    }
                    return true
                }
            } else {
                if (c && piu >= c.x && piu <= c.x + c.width && poa >= c.y && poa <= c.y + c.height) {
                    if (!p) {
                        this.parent.mzn()
                    }
                    return true
                }
            }
        }
        return false
    };
    this.opg = function() {
        var f = this.qbw.fbh("buttons"),
            k = this.qbw.qmc("bet"),
            g = this.qbw.qmc("start");
        for (var d = 0, b = f.length; d < b; d++) {
            var e = f[d];
            if (e.rqv() === true) {
                e.evd(false, true);
                if (e === k) {
                    clearInterval(this.vvh);
                    for (var c = 0; c < b; c++) {
                        f[c].kbg(false)
                    }
                } else {
                    if (e === g && g.jan === this.wvq) {
                        clearTimeout(this.vew);
                        a.parent.wba.ntp("auto_fill");
                        this.qbw.tpi("start", "#uca")
                    }
                }
                return true
            }
        }
        return false
    };
    this.zfi = function(g) {
        var f = this.qbw.fbh("buttons"),
            k = this.qbw.qmc("bet");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (g == d.zzo) {
                if (d.aqx() && !d.pqi()) {
                    d.evd(true, true);
                    d.jan();
                    for (var c = 0; c < b; c++) {
                        f[c].kbg(true)
                    }
                }
                return true
            }
        }
        if (g == this.parent.wjo.ehy.okl) {
            if (k && k.aqx() && !k.pqi()) {
                this.parent.csv();
                for (var c = 0, b = f.length; c < b; c++) {
                    f[c].kbg(true)
                }
            }
            return true
        }
        return false
    };
    this.unq = function() {
        var e = this.qbw.fbh("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.rqv() == true) {
                c.evd(false, true);
                return true
            }
        }
        return false
    };
    this.bon = function(l, k, m) {
        var j = this.qbw.fbh("buttons"),
            c = this.qbw.qmc("bet");
        if (l != null && k != null) {
            var e = l - this.x;
            var d = k - this.y;
            for (var f = 0, g = j.length; f < g; f++) {
                var b = j[f];
                if (e >= b.x && e <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.pod() && b.aqx() && !b.pqi()) {
                    return b.jan
                }
            }
        } else {
            if (m != null) {
                for (var f = 0, g = j.length; f < g; f++) {
                    var b = j[f];
                    if (m == b.zzo && b.pod() && b.aqx() && !b.pqi()) {
                        return b.jan
                    }
                }
                if (m == this.parent.wjo.ehy.okl && c && c.pod() && c.aqx() && !c.pqi()) {
                    return this.parent.csv
                }
            }
        }
        return null
    };
    this.eyi = function() {
        this.qbw = new irf();
        this.qbw.bih();
        this.qbw.vpa("displays");
        this.qbw.vpa("buttons");
        this.qbw.vpa("allbuttons");
        this.qbw.vpa("infos");
        this.qbw.vpa("start");
        this.qbw.vpa("collect");
        this.qbw.vpa("game");
        this.qbw.vpa("hold");
        this.qbw.vpa("settings")
    };
    this.nog = function(b) {
        var c = this.tsy(b.qgx.quz);
        c.uad(b.qgx);
        this.qbw.zth("info", c, ["infos"])
    };
    this.kuu = function(c) {
        var b = {};
        if (this.parent.msq() != null) {
            b = c.hlz
        } else {
            if (ysp.lct.value57 === ysp.ui.yju) {
                b = c.hil
            } else {
                if (ysp.lct.value57 === ysp.ui.dvx) {
                    b = c.fsw
                } else {
                    if (ysp.lct.value57 === ysp.ui.eev) {
                        b = c.joo
                    }
                }
            }
        }
        if (this.parent.msq() != null) {
            this.qbw.zth("astart", this.gpd(b.ryv, this.parent.language.ypj, "---", this.parent.wba.vjf("btn_s"), this.parent.fzx, (!this.parent.coz) ? this.parent.wjo.ols : null, c.ugd), ["buttons", "allbuttons", "start", "collect", "hold"]);
            if (this.parent.zfy() === true) {
                this.qbw.zth("start", this.gpd(b.dzy, (this.parent.gof.iox === false) ? this.parent.language.start : null, "---", (this.parent.gof.iox === false) ? this.parent.wba.vjf("btn") : this.parent.wba.vjf("btn_dl"), (this.parent.zfy() === true) ? this.wvq : this.parent.crl, (!this.parent.coz) ? this.parent.wjo.start : null, c.ugd), ["buttons", "allbuttons", "start", "collect", "hold"])
            } else {
                this.qbw.zth("start", this.rda(b.dzy, (this.parent.gof.iox === false) ? this.parent.language.start : null, (this.parent.gof.iox === false) ? this.parent.wba.vjf("btn") : this.parent.wba.vjf("btn_dl"), (this.parent.zfy() === true) ? this.wvq : this.parent.crl, (!this.parent.coz) ? this.parent.wjo.start : null, c.crc), ["buttons", "allbuttons", "start", "collect", "hold"])
            }
        } else {
            this.qbw.zth("start", this.rda(b.dzy, (this.parent.gof.iox === false) ? this.parent.language.start : null, (this.parent.gof.iox === false) ? this.parent.wba.vjf("btn") : this.parent.wba.vjf("btn_dl"), (this.parent.zfy() === true) ? this.wvq : this.parent.crl, (!this.parent.coz) ? this.parent.wjo.start : null, c.crc), ["buttons", "allbuttons", "start", "collect", "hold"]);
            this.qbw.zth("astart", this.rda(b.ryv, this.parent.language.ols, (ysp.lct.value57 === ysp.ui.yju) ? this.parent.wba.vjf("btn") : this.parent.wba.vjf("btn_s"), this.parent.fzx, (!this.parent.coz) ? this.parent.wjo.ols : null, c.eqh), ["buttons", "allbuttons", "start", "collect", "game", "hold"])
        }
        this.qbw.zth("bet", this.rda(b.xhh, this.parent.language.kos, this.parent.wba.vjf("btn_s"), this.parent.rcz, (!this.parent.coz) ? this.parent.wjo.lcf : null, c.eqh), ["buttons", "allbuttons"]);
        this.qbw.qmc("bet").twp = 300;
        this.qbw.zth("gamble", this.rda(b.hdt, this.parent.language.kyj, this.parent.wba.vjf("btn_s"), this.parent.auf, (!this.parent.coz) ? this.parent.wjo.kyj : null, c.eqh), ["buttons", "allbuttons", "start", "game", "collect", "hold"]);
        if (this.parent.msq() != null) {
            this.qbw.zth("exit", this.rda(b.tho, (this.parent.gof.iox === true) ? null : (ysp.lct.value50.g === true) ? this.parent.language.nkt : this.parent.language.nfl, (this.parent.gof.iox === false) ? this.parent.wba.vjf("btn_s") : this.parent.wba.vjf("btn_e"), this.parent.uze, (!this.parent.coz) ? this.parent.wjo.zjt : null, c.eqh), ["buttons", "allbuttons", "collect"])
        } else {
            if (ysp.lct.value57 !== ysp.ui.eev) {
                this.qbw.zth("exit", this.rda(b.tho, (this.parent.gof.iox === true) ? null : (ysp.lct.value50.g === true) ? this.parent.language.nkt : this.parent.language.nfl, (this.parent.gof.iox === false) ? this.parent.wba.vjf("btn_s") : this.parent.wba.vjf("btn_e"), this.parent.uze, (!this.parent.coz) ? this.parent.wjo.zjt : null, c.eqh), ["buttons", "allbuttons", "collect"])
            }
            if (ysp.lct.value57 !== ysp.ui.yju && this.parent.msq() == null) {
                this.qbw.zth("lang", this.red(b.rrp, this.parent.lua(sessionStorage.sessionValue1), this.parent.ewm, (!this.parent.coz) ? this.parent.wjo.language : null), ["buttons", "allbuttons", "hold"])
            }
        }
        this.qbw.zth("setting", this.rda(b.hkz, null, (this.parent.gof.iox === true) ? this.parent.wba.vjf("btn_m") : this.parent.wba.vjf("btn_s"), this.parent.xmt, null, c.eqh), ["buttons", "settings"])
    };
    this.fci = function(c) {
        var b = this.parent.wba.vjf("display_effect");
        this.qbw.zth("creditd", this.nxs(c.zyr, (this.parent.jhh()) ? this.parent.language.xup : this.parent.language.lmm, this.parent.avr(this.parent.lmm), b, c.display), ["displays"]);
        this.qbw.zth("betd", this.nxs(c.awd, this.parent.language.kos, this.parent.avr(this.parent.totalBet), b, c.display), ["displays"])
    };
    this.cwe = function() {
        if (this.gte == 1) {
            this.jjr(this.kvs)
        } else {
            if (this.gte == 2) {
                this.aij(this.kvs)
            } else {
                if (this.gte == 3) {
                    this.zry(this.kvs)
                } else {
                    if (this.gte == 4) {
                        this.nul(this.kvs)
                    } else {
                        if (this.gte == 5) {
                            this.hvq(this.kvs)
                        } else {
                            if (this.gte == 6) {
                                this.jbo(this.kvs)
                            }
                        }
                    }
                }
            }
        }
    };
    this.jjr = function(d) {
        var c = this.qbw.fbh("allbuttons"),
            e = 0,
            b = 0;
        this.kvs = d;
        this.gte = 1;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].cgv(d)
        }
    };
    this.aij = function(d) {
        var c = this.qbw.fbh("allbuttons"),
            f = this.qbw.fbh("start"),
            e = 0,
            b = 0;
        this.kvs = d;
        this.gte = 2;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].cgv(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].cgv(d)
        }
    };
    this.zry = function(d) {
        var c = this.qbw.fbh("allbuttons"),
            f = this.qbw.fbh("game"),
            e = 0,
            b = 0;
        this.kvs = d;
        this.gte = 3;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].cgv(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].cgv(d)
        }
    };
    this.nul = function(d) {
        var c = this.qbw.fbh("allbuttons"),
            f = this.qbw.fbh("hold"),
            e = 0,
            b = 0;
        this.kvs = d;
        this.gte = 4;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].cgv(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].cgv(d)
        }
    };
    this.hvq = function(d) {
        var c = this.qbw.fbh("allbuttons"),
            f = (this.pgh === true) ? this.qbw.fbh("collect") : this.qbw.fbh("start"),
            e = 0,
            b = 0;
        this.kvs = d;
        this.gte = 5;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].cgv(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].cgv(d)
        }
    };
    this.jbo = function(e) {
        var c = this.qbw.fbh("allbuttons"),
            d = this.qbw.fbh("settings"),
            f = 0,
            b = 0;
        this.kvs = e;
        this.gte = 6;
        for (f = 0, b = c.length; f < b; f++) {
            c[f].cgv(false)
        }
        for (f = 0, b = d.length; f < b; f++) {
            d[f].cgv(e)
        }
    };
    this.nxs = function(c, g, f, e, b) {
        var d = new xcm();
        d.bih(c, this.context2D, null, g, f);
        d.parent = this;
        d.egq = e;
        d.uad(b);
        return d
    };
    this.rda = function(e, i, g, f, c, d) {
        var b = new nny();
        b.bih(e, this.context2D, null, g, null, i);
        b.parent = this;
        b.jan = f;
        b.uad(d);
        if (c) {
            b.zzo = c.okl
        }
        return b
    };
    this.gpd = function(e, j, g, i, f, c, d) {
        var b = new nny();
        b.bih(e, this.context2D, null, i, null, j);
        b.parent = this;
        b.jan = f;
        b.value = g;
        b.uad(d);
        if (c) {
            b.zzo = c.okl
        }
        return b
    };
    this.red = function(d, f, e, c) {
        var b = new yrj();
        b.bih(d, this.context2D, null, f, null);
        b.parent = this;
        b.jan = e;
        if (c) {
            b.zzo = c.okl
        }
        return b
    };
    this.tsy = function(b) {
        var c = new ymu();
        c.bih(b, this.context2D);
        c.parent = this;
        return c
    };
    this.mkd = function(c, b) {
        var d = this.qbw.qmc("info");
        if (d) {
            d.efz(b);
            d.hgk(c, b)
        }
    };
    this.stop = function() {
        clearInterval(this.vvh)
    };
    this.wap = function() {
        var b = this.stj;
        b.save();
        if (this.nip != null) {
            var d = b.createLinearGradient(this.aub.x, this.aub.y, this.aub.x, this.aub.y + this.aub.height);
            d.addColorStop(0, this.nip);
            b.fillStyle = d;
            b.fillRect(this.aub.x, this.aub.y, this.aub.width, this.aub.height)
        }
        if (this.hlr != null) {
            var d = b.createLinearGradient(this.aub.x, this.aub.y, this.aub.x, this.aub.y + this.pfm);
            d.addColorStop(0, this.hlr);
            d.addColorStop(1, this.nip);
            b.fillStyle = d;
            b.fillRect(this.aub.x, this.aub.y, this.aub.width, this.pfm)
        }
        if (this.vum != null) {
            b.drawImage(this.vum, this.aub.x, this.aub.y, this.aub.width, this.aub.height)
        }
        if (this.fhq && this.fhq.width > 0 && this.fhq.height > 0) {
            var d = b.createLinearGradient(this.fhq.x, this.fhq.y, this.fhq.x + this.fhq.width, this.fhq.y),
                c = this.parent.wba.vjf("btn_back");
            d.addColorStop(0.2, this.zlm);
            d.addColorStop(1, this.qxw);
            b.fillStyle = d;
            if (this.parent.odx === ysp.gof.fzk) {
                b.fillRect(this.fhq.x, this.fhq.y, this.fhq.width, this.fhq.height);
                if (c) {
                    b.drawImage(c, this.fhq.x, this.fhq.y, this.fhq.width, this.fhq.height)
                }
            } else {
                if (this.parent.odx === ysp.gof.ohj) {
                    b.save();
                    b.translate(this.fhq.width / 2, this.fhq.height / 2);
                    b.rotate(Math.PI);
                    b.translate(-this.fhq.width / 2, -this.fhq.height / 2);
                    b.fillRect(this.fhq.x, this.fhq.y, this.fhq.width, this.fhq.height);
                    if (c) {
                        b.drawImage(c, this.fhq.x, this.fhq.y, this.fhq.width, this.fhq.height)
                    }
                    b.restore()
                }
            }
        }
        b.restore()
    };
    this.cul = function(k, g, l, e) {
        if (!this.pod() || !this.parent.jpj()) {
            return
        }
        var c = (k != null && g != null && l != null && e != null),
            j = (c === true) ? new pjy(k, g, l, e) : new pjy(this.x, this.y, this.width, this.height),
            m = this.context2D,
            b = this.qbw.dla();
        m.save();
        if (c) {
            m.beginPath();
            m.rect(k, g, l, e);
            m.closePath();
            m.clip()
        }
        if (this.bac != null) {
            m.drawImage(this.bac, 0, 0)
        }
        for (var d = 0, f = b.length; d < f; d++) {
            b[d].cul()
        }
        if (this.parent.mfh === true && this.parent.zfy() === false) {
            this.parent.exs(m, j)
        }
        m.restore();
        if (this.msg && this.hyg) {
            if (c) {
                this.msg.drawImage(this.hyg, k, g, l, e, this.x + k, this.y + g, l, e)
            } else {
                this.msg.drawImage(this.hyg, this.x, this.y)
            }
        }
    };
    this.wvq = function() {
        if (a.parent.ols === true) {
            a.parent.fzx()
        } else {
            a.parent.crl();
            if (a.parent.mjb() === true) {
                a.parent.wba.dyw("auto_fill");
                a.qbw.tpi("start", "#fik", [a.qjf]);
                a.vew = setTimeout(a.hvi, a.qjf)
            }
        }
    };
    this.hvi = function() {
        a.parent.fzx();
        a.qbw.tpi("start", "#fuj")
    }
}
eya.prototype = new fsx;

function jli() {
    this.egq = null;
    this.lqo = [];
    this.spb = [];
    this.syi = [];
    this.pxf = "arial";
    this.tgp = "bold";
    this.ycy = "yellow";
    this.jow = 30;
    this.fqe = 6;
    this.ygz = function(a) {
        try {
            this.pxf = a.font;
            this.tgp = a.nkj;
            this.ycy = a.gqn
        } catch (b) {
            console.error(b)
        }
    };
    this.uad = function(a) {
        try {
            this.jow = a.fontSize;
            this.fqe = a.ilp
        } catch (b) {
            console.error(b)
        }
    };
    this.rxz = function(c) {
        for (var b = 0, a = c.length; b < a; b++) {
            this.syi[b] = c[a - 1 - b]
        }
    };
    this.roe = function(c) {
        for (var b = 0, a = c.length; b < a; b++) {
            this.spb[b] = c[a - 1 - b];
            this.lqo[b] = c[a - 1 - b]
        }
    };
    this.ysv = function(c) {
        for (var b = 0, a = this.spb.length; b < a; b++) {
            this.lqo[b] = this.spb[b] * c
        }
        this.cul()
    };
    this.cul = function() {
        if (!this.pod() || !this.parent.jpj()) {
            return
        }
        var b = this.context2D,
            g = this.height - 2 * this.fqe,
            c = this.width,
            d = Math.round(g / this.syi.length),
            f = (this.jow < d) ? this.jow : d - 2;
        b.save();
        if (this.egq != null) {
            b.drawImage(this.egq, 0, 0)
        }
        for (var e = 0, a = this.syi.length; e < a; e++) {
            ysp.ekr.pyk(b, this.syi[e], this.ycy, 0, this.fqe + d * (e), c, f, this.pxf, f, this.tgp, this.fqe)
        }
        for (var e = 0, a = this.lqo.length; e < a; e++) {
            ysp.ekr.vsi(b, this.parent.thh(this.lqo[e]), this.ycy, 0, this.fqe + d * (e), c, f, this.pxf, f, this.tgp, this.fqe)
        }
        b.restore();
        if (this.msg && this.hyg) {
            this.msg.drawImage(this.hyg, this.x, this.y)
        }
    }
}
jli.prototype = new fsx;

function sds() {
    var a = this;
    this.prm = 0;
    this.sft = 1;
    this.vwf = 7;
    this.wok = 0;
    this.rzv = 0;
    this.amt = 0;
    this.rae = 0;
    this.dqh = this.prm;
    this.zrq = this.uuz;
    this.kzy = function() {
        this.coc(true);
        this.xuo = true;
        this.kvs = false;
        this.dqh = this.prm;
        this.rzv = Math.floor(this.width / this.vwf);
        this.rae = 0;
        this.amt = 0
    };
    this.mrq = function() {
        this.xuo = true;
        this.kvs = false;
        this.dqh = this.sft;
        this.rzv = -Math.floor(this.width / this.vwf);
        this.rae = 1;
        this.amt = this.width
    };
    this.rav = function() {
        if (a.rae < a.vwf) {
            a.amt += a.rzv;
            a.rae++;
            return true
        } else {
            a.xuo = false;
            a.kvs = true;
            if (a.dqh == a.sft) {
                a.coc(false)
            }
            return false
        }
    };
    this.dyw = function() {
        if (this.ogv == this.jef) {
            this.parent.wba.dyw("maxstep")
        } else {
            this.parent.wba.dyw("step" + (this.ogv % 12))
        }
    };
    this.kpo = function() {
        a.qty = false
    };
    this.cul = function() {
        if (!this.pod() || !this.parent.jpj()) {
            return
        }
        this.gwl();
        if (this.msg && this.hyg) {
            if (this.xuo) {
                if (this.amt > 0) {
                    if (this.zrq == this.xcc) {
                        this.msg.drawImage(this.hyg, this.width - this.amt, 0, this.amt, this.height, this.x, this.y, this.amt, this.height)
                    } else {
                        if (this.zrq == this.uuz) {
                            this.msg.drawImage(this.hyg, 0, 0, this.amt, this.height, this.x + this.width - this.amt, this.y, this.amt, this.height)
                        }
                    }
                }
            } else {
                this.msg.drawImage(this.hyg, this.x, this.y)
            }
        }
    };
    this.fwy = function(c) {
        var f = this.ycy,
            e = this.ycy,
            b = 0,
            d = 0;
        if (this.zrq == this.uuz) {
            b = this.fhi;
            d = this.ynk.x - 2 * this.fhi
        } else {
            if (this.zrq == this.xcc) {
                b = this.ynk.x + this.ynk.width + this.fhi;
                d = this.width - this.fhi - (this.ynk.x + this.ynk.width + this.fhi)
            }
        }
        if (this.ogv > 0 && this.ogv < this.sid.length - 1) {
            ysp.ekr.jry(c, b, this.ynk.y + ((this.slo - this.xzg) * this.qbl), d, this.qbl, this.uwy, this.ojq);
            ysp.ekr.vsi(c, this.parent.thh(this.sid[this.ogv]), this.fpc, b, this.ynk.y + ((this.slo - this.xzg) * this.qbl) + (this.qbl - this.jow) / 2, d, this.jow, this.pxf, this.jow, this.tgp, this.fhi)
        } else {
            if (this.ogv == 0) {
                f = this.fpc
            } else {
                if (this.ogv == this.sid.length - 1) {
                    e = this.fpc
                }
            }
        }
        ysp.ekr.jry(c, b, this.ynk.y + (this.qbl * (this.slo - 1)), d, this.qbl, this.uwy, this.ojq);
        ysp.ekr.vsi(c, this.parent.thh(this.sid[0]), f, b, this.ynk.y + (this.qbl * (this.slo - 1)) + (this.qbl - this.jow) / 2, d, this.jow, this.pxf, this.jow, this.tgp, this.fhi);
        ysp.ekr.jry(c, b, this.ynk.y, d, this.qbl, this.uwy, this.ojq);
        ysp.ekr.vsi(c, this.parent.thh(this.sid[this.sid.length - 1]), e, b, this.ynk.y + (this.qbl - this.jow) / 2, d, this.jow, this.pxf, this.jow, this.tgp, this.fhi);
        ysp.ekr.trw(c, "+", this.ycy, this.bck.x, this.bck.y, this.bck.width, this.bck.height, this.pxf, this.jow, this.tgp);
        ysp.ekr.trw(c, "-", this.ycy, this.tim.x, this.tim.y, this.tim.width, this.tim.height, this.pxf, this.jow, this.tgp);
        if (this.wrw) {
            ysp.ekr.trw(c, this.wrw, this.ycy, this.kem.x, this.kem.y, this.kem.width, this.kem.height, this.pxf, this.jow, this.tgp)
        }
    }
}
sds.prototype = new ghg;

function xlz() {
    this.egq = null;
    this.kms = [];
    this.kvs = false;
    this.lqo = false;
    this.tkc = false;
    this.qjy = false;
    this.hkn = true;
    this.xvh = -1;
    this.gxd = null;
    this.bac = null;
    this.stj = null;
    this.pxf = "arial";
    this.tgp = "bold";
    this.eza = "yellow";
    this.rhb = "yellow";
    this.ycy = "yellow";
    this.jow = 18;
    this.ghb = 0;
    this.jpx = 0;
    this.qvz = 20;
    this.sra = 0;
    this.ygz = function(a) {
        try {
            this.pxf = a.font;
            this.tgp = a.nkj;
            this.eza = a.mne;
            this.rhb = a.vsg;
            this.ycy = a.gqn
        } catch (b) {
            console.error(b)
        }
    };
    this.uad = function(a) {
        try {
            this.jow = a.fontSize;
            this.ghb = a.hly;
            this.jpx = a.tgz;
            this.qvz = a.viz;
            this.sra = a.hnk;
            this.hkn = a.jlk
        } catch (b) {
            console.error(b)
        }
    };
    this.xba = function(a, b) {
        if (a >= this.x && a <= this.x + this.width && b >= this.y && b <= this.y + this.height && this.pod() === true) {
            if (this.aqx() === true) {
                this.parent.umn(this.tkc);
                this.evd();
                if (this.tkc) {
                    this.parent.wba.dyw("hold")
                } else {
                    this.parent.wba.dyw("unhold")
                }
                return true
            }
        }
        return false
    };
    this.opg = function() {};
    this.zfi = function() {};
    this.unq = function() {};
    this.cgv = function(a) {
        this.kvs = a
    };
    this.aqx = function() {
        return this.kvs
    };
    this.nrw = function(a) {
        if (this.bac == null) {
            this.bac = document.createElement("canvas");
            this.bac.width = this.width;
            this.bac.height = this.height;
            this.stj = this.bac.getContext("2d");
            this.stj.save();
            this.stj.drawImage(a, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height);
            this.stj.restore()
        }
    };
    this.evd = function() {
        this.tkc = !this.tkc;
        if (this.tkc) {
            this.gxd = this.parent.language.ktm;
            this.ycy = this.eza
        }
        this.cul()
    };
    this.lgb = function(d, e) {
        var a = 0,
            c = false;
        if (d == this.parent.oos) {
            this.xvh = d;
            c = true
        } else {
            if ((a = this.parent.fpv.length) > 0) {
                for (var b = 0; b < a && !c; b++) {
                    if (d == this.parent.fpv[b]) {
                        this.xvh = this.parent.dul[b];
                        c = true
                    }
                }
            }
        }
        if (!c) {
            this.xvh = d
        }
        if (e && e === true) {
            this.cul()
        }
    };
    this.eod = function(a, b) {
        this.tkc = a;
        if (this.tkc) {
            this.gxd = this.parent.language.ktm;
            this.ycy = this.eza
        }
        if (b && b === true) {
            this.cul()
        }
    };
    this.zhq = function() {
        return this.tkc
    };
    this.xua = function(a, b) {
        this.lqo = a;
        if (this.lqo) {
            this.gxd = this.parent.language.win;
            this.ycy = this.rhb
        }
        if (b && b === true) {
            this.cul()
        }
    };
    this.gwf = function() {
        return this.lqo
    };
    this.yxf = function(c, b, a, d) {
        this.qjy = c;
        this.gxd = b;
        if (a) {
            this.ycy = a
        }
        if (d && d === true) {
            this.cul()
        }
    };
    this.rzm = function() {
        return this.qjy
    };
    this.cul = function() {
        if (!this.pod() || !this.parent.jpj()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.beginPath();
        a.rect(this.x, this.y, this.width, this.height);
        a.closePath();
        a.clip();
        if (this.bac != null) {
            a.drawImage(this.bac, this.x, this.y)
        }
        if (this.egq != null) {
            if (this.tkc || this.lqo) {
                if (this.hkn) {
                    a.drawImage(this.egq, this.kms[this.xvh] * this.ghb, 0, this.ghb, this.jpx, this.x, this.y + this.qvz, this.ghb, this.jpx)
                } else {
                    a.drawImage(this.egq, this.kms[this.xvh] * this.ghb, 0, this.ghb, this.jpx, this.x, this.y, this.ghb, this.jpx)
                }
            } else {
                a.drawImage(this.egq, this.kms[this.xvh] * this.ghb, 0, this.ghb, this.jpx, this.x, this.y + this.sra, this.ghb, this.jpx)
            }
        }
        if (this.tkc || this.lqo || this.qjy) {
            b = this.gxd
        }
        if (b != null) {
            if (this.hkn) {
                ysp.ekr.trw(a, b, this.ycy, this.x, this.y, this.width, this.qvz, this.pxf, this.jow, this.tgp)
            } else {
                ysp.ekr.trw(a, b, this.ycy, this.x, this.y + this.jpx, this.width, this.qvz, this.pxf, this.jow, this.tgp)
            }
        }
        a.restore()
    }
}
xlz.prototype = new fsx;
ysp.vux = {
    oqx: {
        xiv: 0,
        wgs: 1,
        mya: 2,
        dml: 3,
        rpg: 4,
        jzy: 5,
        tfo: 6,
        wcj: 7,
        crq: 8,
        qsn: 9,
        bym: 10,
        cip: 11,
        uhx: 12,
        pri: 13,
        exo: 14,
        xdc: 15,
        dlf: 68
    }
};

function bpy() {
    this.vhh = false;
    this.hbw = null;
    this.nsj = null;
    this.hzj = null;
    this.iwo = null;
    this.emf = null;
    this.aih = [];
    this.zxl = null;
    this.igz = null;
    this.win = 0;
    this.srd = 0;
    this.kjv = 0;
    this.totalBet = 1000;
    this.jaa = [];
    this.ljr = 0;
    this.yrf = 0;
    this.lmm = 0;
    this.avv = [];
    this.myo = [];
    this.kms = [];
    this.oos = 63;
    this.ssb = -1;
    this.ayj = -1;
    this.kgc = [];
    this.uoi = [];
    this.ong = 0;
    this.crd = null;
    this.nlr = null;
    this.hex = null;
    this.pbq = null;
    this.dxj = null;
    this.jyb = false;
    this.kyj = false;
    this.xtl = false;
    this.fru = false;
    this.mfh = false;
    this.ags = true;
    this.ols = false;
    this.mfi = 1;
    this.mmo = 0;
    this.mfj = 150;
    this.wey = 150;
    this.tzi = 200;
    this.fho = 120;
    this.gqm = 0;
    this.fpv = [];
    this.dul = [];
    this.dws = true;
    this.imr = true;
    this.fgv = false;
    this.dmr = 0;
    this.tpm = 0;
    this.otf = 50;
    this.oea = 100;
    this.vrs = false;
    this.dbx = 0;
    this.iud = 0;
    this.jet = false;
    this.vzk = 0;
    this.phg = 0;
    this.smh = 2;
    this.dxc = 1;
    this.txz = false;
    this.jrt = 0;
    this.qiy = 0;
    this.nrs = false;
    this.yrx = 0;
    this.sdt = 0;
    this.snt = 0;
    this.lgn = -1;
    this.jjo = 0;
    this.qgy = 0;
    this.qzd = 0;
    this.qmd = true;
    this.zuw = false;
    this.dhu = false;
    this.ztr = false;
    this.vkw = true;
    this.dej = null;
    this.kop = false;
    this.pgh = true;
    this.rbp = "";
    this.mqs = 0;
    this.qaa = 0;
    this.pva = 0;
    this.gzp = 0;
    this.hru = function() {
        var a = new rua();
        a.bih();
        return a
    };
    this.lgo = function() {
        this.wjo = new fcv()
    };
    this.ngd = function() {
        while (this.kjv < this.xxd()) {
            this.kjv++
        }
        var b = this.yjy(this.nrs);
        if (this.kjv > b) {
            var a = (b < 0) ? 0 : b;
            this.kjv = a
        }
        this.totalBet = this.jaa[this.kjv];
        this.uul();
        this.wiu();
        this.myf();
        this.hes()
    };
    this.eey = function() {
        this.mbq();
        this.ldw();
        this.jhy();
        this.xqr();
        if (this.gof.oxm) {
            this.snv()
        }
        if (this.gof.tlp) {
            this.ycn()
        }
        if (this.gof.pki) {
            this.nkc();
            if (!this.gof.ytv) {
                this.yii()
            }
        }
        if (this.coz) {
            this.syy()
        } else {
            if (this.gof.fvk) {
                this.nty()
            }
            this.gcw();
            if (this.rfo()) {
                this.cbq()
            }
            if (this.msq() != null && !this.zfy()) {
                this.sdm(this.msq())
            }
        }
        if (!(this.coz && !this.cwt)) {
            this.ybl();
            this.ydo()
        }
        if (this.gof.ytv) {
            this.lvm(this.msq())
        }
        this.jyh()
    };
    this.hsz = function() {
        if (!this.dpf) {
            if (this.bzi === false) {
                this.nok.style.marginTop = (-this.height / 2 + this.qbs()) + "px";
                this.nok.style.marginLeft = (-this.width / 2) + "px"
            } else {
                this.nok.style.left = "0px";
                this.nok.style.top = "0px";
                this.nok.style.marginTop = ((this.nhe - this.height) / 2 + this.qbs()) + "px";
                this.nok.style.marginLeft = ((this.uyt - this.width) / 2) + "px"
            }
            this.nok.style.width = (this.width > this.uyt) ? this.uyt + "px" : this.width + "px";
            this.nok.style.height = (this.height > this.nhe) ? this.nhe + "px" : this.height + "px";
            this.canvas.width = Math.round(this.width);
            this.canvas.height = Math.round(this.height);
            this.context2D = this.canvas.getContext("2d");
            if (this.jwu) {
                this.jwu.style.width = this.width + "px";
                this.jwu.style.height = this.height + "px"
            }
            this.offsetLeft = this.nok.offsetLeft;
            this.offsetTop = this.nok.offsetTop;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.dpf = true
        }
    };
    this.jyh = function() {};
    this.nkc = function() {
        bpy.prototype.nkc.call(this);
        var a = this.llt.qmc("topi");
        try {
            if (a) {
                if (ysp.lct.value57 === ysp.ui.yju || this.msq() != null) {
                    a.vla("language", this.wba.vjf("icon_l"), sessionStorage.sessionValue1, [ysp.language.EN, ysp.language.DE, ysp.language.RU, ysp.language.EE, ysp.language.ES, ysp.language.TR, ysp.language.CZ, ysp.language.GR, ysp.language.AT, ysp.language.US, ysp.language.BG, ysp.language.CO, ysp.language.MX, ysp.language.CL, ysp.language.VE, ysp.language.BR, ysp.language.GE, ysp.language.HU, ysp.language.RO, ysp.language.PT, ysp.language.FR, ysp.language.HR, ysp.language.IT, ysp.language.SE])
                }
                if (this.zfy() === false) {
                    a.duc("help", new String("?"), true)
                }
                if (ysp.lct.value27 && this.khv) {
                    a.vla("audio", this.wba.vjf("icon_a"), this.sdk[this.xrv], this.sdk)
                }
                if (sessionStorage.sessionValue14 == "true" && ysp.ekr.uxa()) {
                    a.duc("fullscreen", this.wba.vjf("icon_f"), this.qgo)
                }
                if (ysp.lct.value28 && this.qmd) {
                    a.duc("turbo", this.wba.vjf("icon_t"), this.zuw)
                }
                a.duc("auto", this.wba.vjf("icon_as"), this.ols);
                a.duc("gamble", this.wba.vjf("icon_g"), this.kyj)
            }
        } catch (b) {
            console.error(b)
        }
    };
    this.yii = function() {
        bpy.prototype.yii.call(this);
        var b = this.llt.qmc("topb");
        try {
            if (b) {
                if (ysp.lct.value5.length > 1 && (ysp.lct.value57 === ysp.ui.yju || this.msq() != null)) {
                    b.qmg("language", this.language.language, this.lua(ysp.lct.value5[this.but]), this.ewm, this.wjo.language, 0, 1)
                }
                if (ysp.lct.value27 && this.khv) {
                    b.qmg("audio", this.language.audio, this.wba.vjf("btn_a"), this.zjz, this.wjo.audio, this.xrv, this.sdk.length)
                }
                if (sessionStorage.sessionValue14 == "true" && ysp.ekr.uxa()) {
                    b.qmg("fullscreen", this.language.qgo, this.wba.vjf("btn_f"), (ysp.ekr.myr) ? this.rie : this.vdo, this.wjo.qgo, (this.qgo) ? 1 : 0, 2)
                }
                if (ysp.lct.value28 && this.qmd) {
                    b.qmg("turbo", this.language.zuw, this.wba.vjf("btn_t"), this.ndg, this.wjo.zuw, (this.zuw) ? 1 : 0, 2)
                }
                b.ozl("help", this.language.mgi, this.wba.vjf("btn_p"), this.tjw, this.wjo.rtp);
                if (ysp.lct.value12 && !this.jhh()) {
                    b.ozl("history", this.language.xak, this.wba.vjf("btn_h"), this.tik, this.wjo.xak)
                }
                if (ysp.lct.value36 && !this.jhh()) {
                    b.ozl("statistic", this.language.kdz, this.wba.vjf("btn_st"), this.qez, this.wjo.kdz)
                }
                b.lwf()
            }
        } catch (a) {
            console.error(a)
        }
    };
    this.lvm = function(a) {
        bpy.prototype.lvm.call(this, a);
        var b = this.llt.qmc("settings"),
            c = "";
        if (b) {
            b.qmg("language", this.language.language, this.lua(ysp.lct.value5[this.but]), this.ewm, 0, 1);
            if (ysp.lct.value27 && this.khv) {
                b.qmg("audio", this.language.audio, this.wba.vjf("btn_a"), this.zjz, this.xrv, this.sdk.length)
            }
            if (sessionStorage.sessionValue14 == "true" && ysp.ekr.uxa()) {
                b.qmg("fullscreen", this.language.qgo, this.wba.vjf("btn_f"), this.rie, (this.qgo) ? 1 : 0, 2)
            }
            if (ysp.lct.value28 && this.qmd) {
                b.qmg("turbo", this.language.zuw, this.wba.vjf("btn_t"), this.ndg, (this.zuw) ? 1 : 0, 2)
            }
            b.qmg("gamble", this.language.kyj, this.wba.vjf("btn_g"), this.auf, (this.kyj) ? 1 : 0, 2);
            if (this.cyi[this.gwu] === ysp.iax.uuz) {
                c = this.language.left
            } else {
                if (this.cyi[this.gwu] === ysp.iax.xcc) {
                    c = this.language.xoj
                } else {
                    if (this.cyi[this.gwu] === ysp.iax.oct) {
                        c = this.language.scm
                    }
                }
            }
            b.qmg("adjustment", c, this.wba.vjf("btn_l"), this.klq, (this.odx === ysp.ekr.gub) ? 0 : 1, 2);
            b.upo("help", this.language.lqx, this.wba.vjf("btn_p"), this.tjw);
            if (ysp.lct.value12 && !this.jhh()) {
                b.upo("history", this.language.xak, this.wba.vjf("btn_h"), this.tik)
            }
            if (ysp.lct.value36 && !this.jhh()) {
                b.upo("statistic", this.language.kdz, this.wba.vjf("btn_st"), this.qez)
            }
            b.rmw = false;
            b.uki(this.gof.cfr);
            b.uad(this.gof.cfr);
            b.ygz(this.style.cfr);
            b.ree(this.language, false)
        }
    };
    this.mbq = function() {
        this.zxl = new eya();
        this.zxl.parent = this;
        this.zxl.pgh = this.pgh;
        this.zxl.vum = this.wba.vjf("control_back");
        this.zxl.bih(this.gof.omm.quz, null, this.context2D);
        this.zxl.uki(this.gof.omm, this.style.omm);
        this.zxl.mkd(this.crd, 0);
        this.zxl.mkd(this.hex, 1);
        this.zxl.mkd(this.nlr, 2)
    };
    this.ycn = function() {
        var a = new sds();
        a.bih(this.gof.wiv.quz, null, this.context2D);
        a.parent = this;
        a.wrw = this.language.kos;
        a.jan = this.uuu;
        a.pkf = this.wjo.lcf.okl;
        a.xim = this.wjo.ehy.okl;
        a.hsx = this.wba.vjf("effect");
        a.uad(this.gof.wiv);
        a.ygz(this.style.aee);
        a.ngd(this.jaa, this.xxd(), this.yjy(false));
        a.fqa(this.kjv, false);
        a.coc(false);
        this.llt.zth("betsel", a)
    };
    this.ydo = function() {
        this.igz.kuu(this.gof.rtp, this.style.rtp, this.wba.vjf("btn_s"))
    };
    this.nty = function() {
        var a = new hfy();
        a.bih(this.gof.top.quz, null, this.context2D);
        a.parent = this;
        this.llt.zth("tops", a)
    };
    this.ldw = function() {
        this.hbw = new xlz();
        this.nsj = new xlz();
        this.hzj = new xlz();
        this.iwo = new xlz();
        this.emf = new xlz();
        this.hbw.bih(this.gof.rpc, this.context2D);
        this.nsj.bih(this.gof.xxe, this.context2D);
        this.hzj.bih(this.gof.cgp, this.context2D);
        this.iwo.bih(this.gof.utf, this.context2D);
        this.emf.bih(this.gof.oww, this.context2D);
        this.aih = [this.hbw, this.nsj, this.hzj, this.iwo, this.emf];
        for (var b = 0, a = this.aih.length; b < a; b++) {
            this.aih[b].parent = this;
            this.aih[b].egq = this.wba.vjf("cards");
            this.aih[b].kms = this.kms;
            this.aih[b].lgb(this.oos);
            this.aih[b].ygz(this.style.aiq);
            this.aih[b].uad(this.gof.aiq)
        }
    };
    this.ybl = function() {
        this.igz = new rxm();
        this.igz.bih(this.gof.rtp.quz, null, this.context2D);
        this.igz.parent = this;
        this.igz.hux(false);
        this.igz.uad(this.gof.rtp);
        this.igz.ygz(this.style.rtp)
    };
    this.jhy = function() {
        var a = new jli();
        a.bih(this.gof.mgi.quz, null, this.context2D);
        a.parent = this;
        a.egq = this.wba.vjf("paytable");
        a.uad(this.gof.mgi);
        a.ygz(this.style.mgi);
        a.roe(this.avv);
        a.rxz(this.myo);
        this.llt.zth("paytable", a)
    };
    this.xqr = function() {};
    this.snv = function() {
        var a = new dfx();
        a.bih(this.gof.lqw.quz, this.context2D, null, this.wba.vjf("winpanel"), "");
        a.parent = this;
        a.uad(this.gof.lqw);
        a.ygz(this.style.lqw);
        a.coc(false);
        this.llt.zth("winp", a)
    };
    this.syy = function() {
        var a = new ice();
        a.bih(this.gof.xak.quz, null, this.context2D);
        a.parent = this;
        a.uki(this.gof.xak);
        a.ygz(this.style.xak);
        this.llt.zth("history", a)
    };
    this.fvs = function(d, b, c, a, e) {
        this.qah = true;
        this.state = d;
        this.xnc = b;
        this.gpn = e;
        this.cik = a;
        clearInterval(this.jjy);
        if (this.khv) {
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                this.xrv = 0
            }
            if (this.wba.qww === true) {
                this.gqu(this.sdk[this.xrv])
            } else {
                this.pqq((this.sdk[this.xrv] === 0))
            }
        }
        if (this.rvg === true) {
            this.uiw = true
        }
        this.ngd();
        this.eey();
        this.iii();
        this.kpa();
        this.pbq.mwc(c, a);
        window.rke(this.jxr)
    };
    this.jxr = function() {
        ysp.hpw.bau(ysp.hpw.xnc);
        ysp.hpw.iew = true;
        ysp.hpw.hef();
        ysp.hpw.cul();
        if (ysp.hpw.rvg === true) {
            ysp.hpw.qlp(true)
        }
        if (ysp.ekr.ado === ysp.os.vuk && ysp.ekr.kxi !== ysp.twr.ijp) {
            ysp.hpw.tvm([{
                sit: ysp.ezq.hsv
            }])
        } else {
            ysp.hpw.qbm(ysp.hpw.state)
        }
        ysp.hpw.ree();
        if (ysp.lct.value37 && !ysp.hpw.jhh()) {
            ysp.hpw.cyn()
        }
    };
    this.srh = function() {
        this.rlv = new wvu().bih(this, ysp.lct.value6)
    };
    this.rme = function() {
        this.rlv = new fgz().bih(this, ysp.lct.value6)
    };
    this.xba = function(c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.uiw) {
            return
        }
        var p = 0,
            o = 0,
            d = false,
            q = false,
            l = false,
            j = this.llt.qmc("loading"),
            b = this.llt.qmc("stats"),
            r = this.llt.qmc("topb"),
            n = this.llt.qmc("topi"),
            a = this.llt.qmc("betsel"),
            m = this.llt.qmc("autop"),
            e = this.llt.qmc("settings");
        if (c.touches) {
            var g = c.touches[0];
            d = true;
            if (!this.exk) {
                p = g.pageX - this.offsetLeft;
                o = g.pageY - this.offsetTop
            } else {
                p = Math.round((g.pageX - this.offsetLeft) / this.fdm);
                o = Math.round((g.pageY - this.offsetTop) / this.eiz)
            }
        } else {
            if (c.which != 1) {
                return
            }
            if (!this.exk) {
                p = c.pageX - this.offsetLeft;
                o = c.pageY - this.offsetTop
            } else {
                p = Math.round((c.pageX - this.offsetLeft) / this.fdm);
                o = Math.round((c.pageY - this.offsetTop) / this.eiz)
            }
        }
        if (this.qah === true) {
            if (m && m.pod()) {
                if (m.xba(p, o)) {
                    return
                }
            }
            if (r && r.pod()) {
                if (r.xba(p, o)) {
                    clearTimeout(this.qzd);
                    return
                } else {
                    l = true
                }
            }
            if (a) {
                if (a.pod()) {
                    if (a.xba(p, o, d)) {
                        clearTimeout(this.qzd);
                        return
                    } else {
                        q = true
                    }
                }
            }
            if (l) {
                this.bhp(this.zxl.bon(p, o, null));
                return
            } else {
                if (q) {
                    if (a && a.aqx()) {
                        this.nus(this.zxl.bon(p, o, null))
                    }
                    return
                }
            }
            if (e && e.pod()) {
                if (e.xba(p, o)) {
                    return
                }
            }
            if (n) {
                if (n.xba(p, o, d)) {
                    return
                }
            }
            if (b && b.pod()) {
                if (b.xba(p, o)) {
                    return
                }
            }
            if (this.igz && this.igz.pod()) {
                if (this.igz.xba(p, o)) {
                    return
                }
            }
            if (this.pbq && this.pbq.pod()) {
                if (this.pbq.xba(p, o)) {
                    return
                }
            }
            if (this.zxl) {
                if (this.zxl.xba(p, o, q)) {
                    return
                }
            }
            if (this.aih) {
                for (var f = 0, k = this.aih.length; f < k; f++) {
                    if (this.aih[f].xba(p, o)) {
                        return
                    }
                }
            }
        } else {
            if (j && j.pod()) {
                if (j.xba(p, o)) {
                    return
                }
            }
        }
    };
    this.opg = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        if (this.uiw) {
            return
        }
        var e = this.llt.qmc("topb"),
            b = this.llt.qmc("betsel"),
            a = this.llt.qmc("autop"),
            c = this.llt.qmc("settings");
        if (this.qah === true) {
            if (a && a.pod()) {
                if (a.opg()) {
                    return
                }
            }
            if (b) {
                if (b.opg()) {
                    return
                }
            }
            if (this.igz && this.igz.pod()) {
                if (this.igz.opg()) {
                    return
                }
            }
            if (this.pbq && this.pbq.pod()) {
                if (this.pbq.opg()) {
                    return
                }
            }
            if (this.zxl) {
                if (this.zxl.opg()) {
                    return
                }
            }
            if (e) {
                if (e.opg()) {
                    return
                }
            }
            if (c) {
                if (c.opg()) {
                    return
                }
            }
        }
    };
    this.zfi = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        if (this.uiw) {
            return
        }
        var f = false,
            c = false,
            e = this.llt.qmc("topb"),
            b = this.llt.qmc("betsel"),
            a = this.llt.qmc("autop");
        if (a && a.pod()) {
            if (a.zfi(d.keyCode)) {
                return
            }
        }
        if (e) {
            if (e.zfi(d.keyCode)) {
                clearTimeout(this.qzd);
                return
            } else {
                if (e.pod() && e.aqx()) {
                    c = true
                }
            }
        }
        if (b) {
            if (b.pod()) {
                if (b.zfi(d.keyCode)) {
                    clearTimeout(this.qzd);
                    return
                } else {
                    f = true
                }
            }
        }
        if (c) {
            this.bhp(this.zxl.bon(null, null, d.keyCode));
            return
        } else {
            if (f) {
                if (b && b.aqx()) {
                    this.nus(this.zxl.bon(null, null, d.keyCode))
                }
                return
            }
        }
        if (this.igz && this.igz.pod()) {
            if (this.igz.zfi(d.keyCode)) {
                return
            }
        }
        if (this.pbq && this.pbq.pod()) {
            if (this.pbq.zfi(d.keyCode)) {
                return
            }
        }
        if (this.zxl) {
            if (this.zxl.zfi(d.keyCode)) {
                return
            }
        }
    };
    this.unq = function(b) {
        if (b.preventDefault) {
            b.preventDefault()
        }
        if (b.stopPropagation) {
            b.stopPropagation()
        }
        if (this.uiw) {
            return
        }
        var a = this.llt.qmc("autop"),
            c = this.llt.qmc("topb");
        if (a && a.pod()) {
            if (a.unq()) {
                return
            }
        }
        if (this.igz && this.igz.pod()) {
            if (this.igz.unq()) {
                return
            }
        }
        if (this.pbq && this.pbq.pod()) {
            if (this.pbq.unq()) {
                return
            }
        }
        if (this.zxl) {
            if (this.zxl.unq()) {
                return
            }
        }
        if (c) {
            if (c.unq()) {
                return
            }
        }
    };
    this.zfy = function() {
        return (ysp.ekr.swr() && !this.coz)
    };
    this.yfl = function() {
        return (ysp.ekr.swr() && !this.cwt)
    };
    this.xvn = function(a) {
        this.gof = this.pmw(a);
        this.width = this.gof.canvas.quz.width;
        this.height = this.gof.canvas.quz.height;
        this.onh()
    };
    this.dxe = function() {
        this.style = new goe()
    };
    this.pmw = function(a) {
        this.odx = a;
        if (a == ysp.gof.scj) {
            return new cdb()
        } else {
            if (a == ysp.gof.cdq) {
                return new lpy()
            } else {
                if (a == ysp.gof.dvx) {
                    return new iab()
                } else {
                    if (a == ysp.gof.dih) {
                        return new aic()
                    } else {
                        if (a == ysp.gof.bve) {
                            return new fxk()
                        } else {
                            if (a == ysp.gof.zcs) {
                                return new oeh()
                            } else {
                                if (a == ysp.gof.izn) {
                                    return new cyc()
                                } else {
                                    if (a == ysp.gof.qvh) {
                                        return new jzr()
                                    } else {
                                        if (a == ysp.gof.neo) {
                                            return new ykq()
                                        } else {
                                            if (a == ysp.gof.ohj) {
                                                return new zmn()
                                            } else {
                                                if (a == ysp.gof.fzk) {
                                                    return new ved()
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
    this.onh = function() {};
    this.smt = function(a) {
        if (this.dpf) {
            this.wqr();
            this.hna(a)
        } else {
            this.rhk()
        }
    };
    this.wqr = function() {
        this.canvas.width = 0;
        if (this.bzi === false) {
            this.nok.style.marginTop = (-this.height / 2 + this.qbs()) + "px";
            this.nok.style.marginLeft = (-this.width / 2) + "px"
        } else {
            this.nok.style.left = "0px";
            this.nok.style.top = "0px";
            this.nok.style.marginTop = ((this.nhe - this.height) / 2 + this.qbs()) + "px";
            this.nok.style.marginLeft = ((this.uyt - this.width) / 2) + "px"
        }
        this.nok.style.width = (this.width > this.uyt) ? this.uyt + "px" : this.width + "px";
        this.nok.style.height = (this.height > this.nhe) ? this.nhe + "px" : this.height + "px";
        this.canvas.width = Math.round(this.width);
        this.canvas.height = Math.round(this.height);
        if (this.jwu) {
            this.jwu.style.width = this.width + "px";
            this.jwu.style.height = this.height + "px"
        }
        this.width = this.canvas.width;
        this.height = this.canvas.height
    };
    this.hna = function(a) {
        this.uea();
        this.hor();
        this.ysy();
        this.jdv();
        if (!(this.coz && !this.cwt)) {
            this.sif()
        }
        if (!this.coz) {
            if (this.gof.fvk) {
                if (this.llt.qmc("tops")) {
                    this.vjz()
                } else {
                    this.nty()
                }
            } else {
                this.llt.ufg("tops")
            }
            this.nzi();
            this.uwe();
            if (this.rfo()) {
                this.nsv()
            }
        } else {
            this.syy()
        }
        if (this.gof.oxm) {
            this.uwl()
        }
        if (this.gof.tlp) {
            this.cln()
        }
        if (this.gof.pki) {
            this.fbg();
            if (!this.gof.ytv) {
                this.gho()
            }
        }
        if (this.gof.ytv) {
            this.sab()
        }
        this.tca();
        if (a) {
            this.mmv()
        }
    };
    this.uea = function() {
        if (this.zxl) {
            this.zxl.srt(this.gof.omm.quz);
            this.zxl.uad(this.gof.omm)
        }
    };
    this.gho = function() {
        bpy.prototype.gho.call(this);
        var b = this.llt.qmc("topb");
        if (b) {
            if (this.vkw) {
                var a = b.qbw.qmc("help");
                if (a) {
                    a.cgv(!this.gof.fvk)
                }
            }
        }
    };
    this.cln = function() {
        var a = this.llt.qmc("betsel");
        if (a) {
            a.srt(this.gof.wiv.quz);
            a.uad(this.gof.wiv)
        }
    };
    this.hor = function() {
        if (this.hbw) {
            this.hbw.srt(this.gof.rpc)
        }
        if (this.nsj) {
            this.nsj.srt(this.gof.xxe)
        }
        if (this.hzj) {
            this.hzj.srt(this.gof.cgp)
        }
        if (this.iwo) {
            this.iwo.srt(this.gof.utf)
        }
        if (this.emf) {
            this.emf.srt(this.gof.oww)
        }
        for (var b = 0, a = this.aih.length; b < a; b++) {
            this.aih[b].uad(this.gof.aiq)
        }
    };
    this.uwl = function() {
        var a = this.llt.qmc("winp");
        if (a) {
            a.srt(this.gof.lqw.quz);
            a.uad(this.gof.lqw)
        }
    };
    this.sif = function() {
        if (this.igz) {
            this.igz.srt(this.gof.rtp.quz);
            this.igz.uad(this.gof.rtp)
        }
    };
    this.vjz = function() {
        var a = this.llt.qmc("tops");
        if (a) {
            a.srt(this.gof.top.quz);
            a.coc(this.gof.fvk)
        }
    };
    this.ysy = function() {
        var a = this.llt.qmc("paytable");
        if (a) {
            a.srt(this.gof.mgi.quz);
            a.uad(this.gof.mgi)
        }
    };
    this.jdv = function() {};
    this.tca = function() {};
    this.mmv = function() {
        if (this.llt.qmc("tops")) {
            this.igz.wsi(true);
            this.orc();
            if (this.igz.mbh() == 0) {
                this.xvs()
            }
        } else {
            this.jnj = null;
            this.igz.dmn(this.aeu, true)
        }
        this.igz.xst()
    };
    this.uul = function() {
        this.crd = [];
        if (this.jhh() === false && this.rbp != "") {
            this.crd.push(this.rbp)
        }
        this.crd.push(this.language.aby);
        this.crd.push(this.language.vvf + " " + this.thh(this.jfy()) + ((this.zfy() === true) ? "|" : " ") + this.language.yqg + " " + this.thh(this.kpq()));
        this.crd.push(this.language.uwo)
    };
    this.wiu = function() {
        this.nlr = [];
        this.nlr[0] = this.language.wvs;
        this.nlr[1] = this.language.mqg
    };
    this.myf = function() {
        this.hex = [];
        this.hex[0] = this.language.ful;
        this.hex[1] = this.language.bto
    };
    this.hes = function() {
        this.dxj = [];
        this.dxj[0] = this.language.dqp
    };
    this.dus = function() {
        bpy.prototype.dus.call(this);
        if (this.wyd() === true) {
            this.wba.maz(true)
        }
    };
    this.mdz = function() {
        var b = ysp.lct.value30 + "/poker/sounds/";
        this.wba.vem("collect", null, false, b + "collect");
        this.wba.vem("collectend", null, false, b + "collect1");
        b = ysp.lct.value30 + "/basic/sounds/";
        if (!ysp.lct.value55) {
            if (this.zfy() === false) {
                this.wba.vem("btn", null, false, b + "btn");
                this.wba.vem("auto_on", null, false, b + "auto_on");
                this.wba.vem("gamble_on", null, false, b + "gamble_on");
                this.wba.vem("gamble_off", null, false, b + "gamble_off");
                this.wba.vem("gambleprop", null, true, b + "gambleprop");
                this.wba.vem("auto_off", null, false, b + "auto_off");
                for (var a = 0; a < 12; a++) {
                    this.wba.vem("step" + a, null, false, b + "step" + (a + 1))
                }
                this.wba.vem("maxstep", null, false, b + "maxstep")
            } else {
                this.wba.vem("btn", null, false, b + "btn2");
                this.wba.vem("auto_fill", null, false, b + "auto_fill")
            }
        } else {
            this.wba.vem("btn", null, false, b + "ama_btn");
            if (this.zfy() === false) {
                this.wba.vem("gamble_on", null, false, b + "ama_gamble_on");
                this.wba.vem("gamble_off", null, false, b + "ama_gamble_off");
                this.wba.vem("gambleprop", null, true, b + "ama_gambleprop");
                for (var a = 0; a < 12; a++) {
                    this.wba.vem("step" + a, null, false, b + "ama_step")
                }
                this.wba.vem("maxstep", null, false, b + "ama_step")
            }
        }
        this.wba.vem("silence", null, false, b + "silence");
        this.wba.vem("audioon", null, false, b + "audio_on");
        if (this.zfy() === false) {
            this.wba.vem("panel_in", null, false, b + "panel_in");
            this.wba.vem("panel_out", null, false, b + "panel_out")
        }
        this.wfi();
        this.off()
    };
    this.off = function() {
        var b = ysp.lct.value30 + "/poker/sounds/";
        this.wba.vem("hold", null, false, b + "hold");
        this.wba.vem("unhold", null, false, b + "unhold");
        for (var a = 0; a < 5; a++) {
            this.wba.vem("deal" + a, null, false, b + "deal2")
        }
    };
    this.wfi = function() {
        for (var a = 0; a < this.phg; a++) {
            this.wba.vem("win" + a, this.rcb, false, this.ifj + "win" + (a + 1))
        }
    };
    this.xpe = function() {
        var a = this.kgj + this.gof.type + "/";
        this.wba.bsf("icon", a + "icon_out.png");
        this.wba.bsf("back", a + "main.jpg");
        this.wba.bsf("cards", a + "cardDeck.png");
        this.wba.bsf("winpanel", a + "winPanel.png");
        this.wba.bsf("help", a + "help.jpg");
        a = ysp.lct.value30 + "/basic/images/" + this.gof.type + "/";
        if (this.gof.iox === true) {
            this.wba.bsf("btn_back", a + "buttonback.png")
        }
        a = ysp.lct.value30 + "/poker/images/" + this.gof.type + "/";
        if (this.zfy() === true) {
            this.wba.ofq(a, "gui_mobile_v15.json")
        } else {
            if (ysp.lct.value57 === ysp.ui.yju || this.msq() != null) {
                this.wba.ofq(a, "gui_desktop_v25.json")
            } else {
                this.wba.ofq(a, "gui_desktop_v15.json")
            }
        }
        this.oak()
    };
    this.oak = function() {
        var a = this.kgj + this.gof.type + "/";
        this.wba.bsf("g_back", a + "gamble.jpg")
    };
    this.gfl = function() {
        if (this.xtl && !this.fgv) {
            this.aar(this.lmm - this.win - this.srd, true)
        } else {
            this.aar(this.lmm, true)
        }
        this.sni(this.totalBet, true);
        this.csy();
        this.llt.tpi("tops", "#cul");
        this.llt.tpi("settings", "#btn", [0, 0, this.thh(this.ifg())]);
        this.cul()
    };
    this.cul = function(m, l, n, t) {
        if (ysp.hpw.jpj()) {
            var a = (m != null && l != null && n != null && t != null),
                c = (a === true) ? new pjy(m, l, n, t) : new pjy(ysp.hpw.gof.hpw.quz.x, ysp.hpw.gof.hpw.quz.y, ysp.hpw.gof.hpw.quz.width, ysp.hpw.gof.hpw.quz.height),
                q = ysp.hpw.context2D,
                e = ysp.hpw.canvas,
                f = (ysp.hpw.cwt === true) ? ysp.hpw.style.hpw.ctt : ysp.hpw.style.hpw.backgroundColor,
                z = ysp.hpw.llt.qmc("stats"),
                b = ysp.hpw.llt.qmc("history"),
                u = ysp.hpw.llt.qmc("topb"),
                g = ysp.hpw.llt.qmc("topi"),
                j = ysp.hpw.llt.qmc("betsel"),
                v = ysp.hpw.llt.qmc("paytable"),
                p = ysp.hpw.llt.qmc("tops"),
                k = ysp.hpw.llt.qmc("winp"),
                o = ysp.hpw.llt.qmc("autop"),
                d = ysp.hpw.llt.qmc("settings");
            ysp.hpw.mfh = false;
            q.save();
            if (a) {
                q.beginPath();
                q.rect(m, l, n, t);
                q.closePath();
                q.clip()
            }
            q.clearRect(0, 0, ysp.hpw.width, ysp.hpw.height);
            q.restore();
            if (ysp.hpw.gof.mxn) {
                ysp.ekr.jry(q, ysp.hpw.gof.hpw.quz.x - ysp.hpw.gof.hpw.qwc, ysp.hpw.gof.hpw.quz.y - ysp.hpw.gof.hpw.qwc, ysp.hpw.gof.hpw.quz.width + 2 * ysp.hpw.gof.hpw.qwc, ysp.hpw.gof.hpw.quz.height + 2 * ysp.hpw.gof.hpw.qwc, f, 1)
            }
            if (b) {
                b.cul()
            }
            if (g) {
                g.cul()
            }
            if (p && p.pod()) {
                p.cul()
            }
            if (z && z.pod()) {
                z.cul()
            } else {
                if (ysp.hpw.igz != null && ysp.hpw.igz.pod()) {
                    ysp.hpw.igz.cul()
                } else {
                    if (ysp.hpw.pbq != null && ysp.hpw.pbq.pod()) {
                        ysp.hpw.pbq.cul()
                    } else {
                        q.drawImage(ysp.hpw.wba.vjf("back"), ysp.hpw.gof.hpw.quz.x, ysp.hpw.gof.hpw.quz.y);
                        if (ysp.hpw.zxl) {
                            ysp.hpw.zxl.cul()
                        }
                        for (var r = 0, s = ysp.hpw.aih.length; r < s; r++) {
                            ysp.hpw.aih[r].nrw(e);
                            ysp.hpw.aih[r].cul()
                        }
                        if (k) {
                            k.cul()
                        }
                        if (v) {
                            v.cul()
                        }
                    }
                }
            }
            if (j) {
                j.cul()
            }
            if (u) {
                u.cul()
            }
            if (o) {
                o.cul()
            }
            if (d) {
                d.cul()
            }
        }
    };
    this.exs = function(a, b) {
        this.mfh = true;
        ysp.ekr.jry(a, b.x, b.y, b.width, b.height, "black", 0.5)
    };
    this.oln = function() {
        this.rjm();
        if (this.state == ysp.vux.oqx.rpg && this.ssb > 0) {
            this.wba.ntp("win" + (this.ssb - 1))
        }
        this.zxl.qbw.tpi("info", "#tto");
        this.jgj(false);
        this.zxl.jjr(false);
        this.nsm(false);
        this.igz.ogy();
        this.igz.jjr(true);
        this.llt.tpi("settings", "#uaw");
        this.zxl.qbw.tpi("setting", "#yzn", [this.llt.tpi("settings", "#pod")])
    };
    this.xvs = function() {
        this.igz.jjr(false);
        if (this.state != ysp.vux.oqx.mya && this.state != ysp.vux.oqx.cip) {
            this.zxl.jjr(true)
        } else {
            this.zxl.nul(true)
        }
        this.jgj(true);
        this.nsm(true);
        this.igz.uaw();
        this.zxl.qbw.tpi("info", "#vmq", [0])
    };
    this.nop = function() {
        var a = ysp.hpw.zxl.qbw.qmc("gamble");
        ysp.hpw.rhr();
        ysp.hpw.ebe();
        if (a) {
            a.ufn();
            a.yzn(ysp.hpw.kyj)
        }
        ysp.hpw.rjm();
        ysp.hpw.wba.ntp("win" + (ysp.hpw.ssb - 1));
        ysp.hpw.zxl.qbw.tpi("info", "#tto");
        ysp.hpw.zxl.jjr(false);
        ysp.hpw.nsm(false);
        ysp.hpw.pbq.jjr(true);
        ysp.hpw.pbq.lab(ysp.hpw.lmm, ysp.hpw.win + ysp.hpw.srd, ysp.hpw.ssb, false);
        ysp.hpw.pbq.ogy(!ysp.hpw.ols)
    };
    this.nxc = function() {
        ysp.hpw.vln();
        ysp.hpw.pbq.eab();
        ysp.hpw.nsm(true);
        ysp.hpw.pbq.jjr(false);
        ysp.hpw.pbq.coc(false, true);
        ysp.hpw.zxl.qbw.tpi("start", "#zev", [ysp.hpw.language.start, true]);
        ysp.hpw.fgv = true;
        if (ysp.hpw.ols) {
            ysp.hpw.zxl.zry(true);
            ysp.hpw.qgy = setTimeout(ysp.hpw.lhf, 800)
        } else {
            ysp.hpw.zxl.jjr(true);
            if (!(ysp.hpw.ols || ysp.hpw.xtl)) {
                ysp.hpw.jgj(true)
            }
            ysp.hpw.zxl.qbw.tpi("info", "#vmq", [0])
        }
    };
    this.fpm = function() {
        var a = this.llt.qmc("tops");
        if (a) {
            a.fqa(0);
            this.cul()
        }
    };
    this.xrb = function() {
        this.whz();
        this.gfl();
        this.ebe();
        this.jgj(false);
        this.ney(false);
        this.llt.tpi("winp", "#coc", [false]);
        this.llt.tpi("paytable", "#coc", [true]);
        this.kiq()
    };
    this.aqy = function() {
        this.kze();
        if (this.smh == this.dxc) {
            this.gfl()
        }
        this.jgj(false);
        this.ney(false);
        this.kiq()
    };
    this.gxp = function() {
        this.zbw();
        if (this.smh >= 2 && this.dxc == 2) {
            this.gfl()
        }
        this.jgj(false);
        this.ney(false);
        this.kiq()
    };
    this.yir = function() {
        var a = ysp.hpw.mfj,
            b = 0;
        if (ysp.hpw.qiy == 0) {
            ysp.hpw.mmo = new Date().getTime()
        } else {
            b = new Date().getTime();
            a = ysp.hpw.mfj + (ysp.hpw.gqm * ysp.hpw.mfj - (b - ysp.hpw.mmo))
        }
        if (!ysp.hpw.aih[ysp.hpw.qiy].zhq()) {
            ysp.hpw.gqm += 1;
            ysp.hpw.wba.dyw("deal" + (ysp.hpw.gqm - 1));
            ysp.hpw.aih[ysp.hpw.qiy].lgb(ysp.hpw.kgc[ysp.hpw.qiy], true)
        } else {
            a = 0
        }
        ysp.hpw.qiy++;
        if (a <= 0) {
            a = 0
        }
        if (ysp.hpw.qiy < ysp.hpw.kgc.length) {
            if (a == 0) {
                ysp.hpw.yir()
            } else {
                ysp.hpw.sdt = setTimeout(ysp.hpw.yir, a)
            }
        } else {
            ysp.hpw.sdt = setTimeout(ysp.hpw.bot, ysp.hpw.mfj)
        }
    };
    this.mgp = function() {
        var a = 40,
            b = a,
            c = 0;
        if (ysp.hpw.qiy == 0) {
            ysp.hpw.mmo = new Date().getTime()
        } else {
            c = new Date().getTime();
            b = a + (ysp.hpw.gqm * a - (c - ysp.hpw.mmo))
        }
        if (!ysp.hpw.aih[ysp.hpw.qiy].zhq()) {
            ysp.hpw.gqm += 1;
            ysp.hpw.aih[ysp.hpw.qiy].lgb(ysp.hpw.oos, true)
        } else {
            b = 0
        }
        ysp.hpw.qiy++;
        if (b <= 0) {
            b = 0
        }
        if (ysp.hpw.qiy < ysp.hpw.kgc.length) {
            if (b == 0) {
                ysp.hpw.mgp()
            } else {
                ysp.hpw.sdt = setTimeout(ysp.hpw.mgp, b)
            }
        } else {
            ysp.hpw.sdt = setTimeout(ysp.hpw.khd, 200)
        }
    };
    this.kiq = function() {
        this.vhh = true;
        this.gqm = 0;
        this.gev();
        if (this.jrt == 1) {
            for (var b = 0, a = this.kgc.length; b < a; b++) {
                this.aih[b].lgb(this.oos, false)
            }
            this.zxl.qbw.tpi("info", "#ise", [this.language.ebr, true]);
            this.cul();
            this.qiy = 0;
            this.sdt = setTimeout(this.yir, 200)
        } else {
            this.zxl.qbw.tpi("info", "#tto");
            for (var b = 0, a = this.kgc.length; b < a; b++) {
                if (!this.aih[b].zhq()) {
                    this.aih[b].lgb(this.oos, false)
                }
            }
            this.cul();
            this.sdt = setTimeout(this.uny, 200)
        }
    };
    this.uny = function() {
        if (ysp.hpw.ong > 0) {
            ysp.hpw.qiy = 0;
            ysp.hpw.yir()
        } else {
            ysp.hpw.bot()
        }
    };
    this.khd = function() {
        ysp.hpw.gqm = 0;
        for (var b = 0, a = ysp.hpw.wba.ghv("deal"); b < a; b++) {
            ysp.hpw.wba.ntp("deal" + b)
        }
        if (ysp.hpw.jrt == 1) {
            ysp.hpw.qiy = 0;
            ysp.hpw.yir()
        } else {
            if (ysp.hpw.ong > 0) {
                ysp.hpw.qiy = 0;
                ysp.hpw.yir()
            } else {
                ysp.hpw.bot()
            }
        }
    };
    this.bot = function() {
        ysp.hpw.vhh = false;
        ysp.hpw.ags = true;
        if (ysp.hpw.gla()) {
            if (ysp.hpw.jrt == 1) {
                ysp.hpw.jya()
            } else {
                if (ysp.hpw.jrt == 2) {
                    ysp.hpw.rpu()
                }
            }
            ysp.hpw.arv(true);
            ysp.hpw.ney(true);
            ysp.hpw.zxl.qbw.tpi("info", "#vmq", [2]);
            if (ysp.hpw.ols) {
                ysp.hpw.zxl.aij(true);
                ysp.hpw.qgy = setTimeout(ysp.hpw.lhf, 800)
            } else {
                ysp.hpw.zxl.nul(true);
                if ((ysp.hpw.smh == 3 && (ysp.hpw.dxc == 3 || (ysp.hpw.dxc == 2 && ysp.hpw.jrt == 2))) || (ysp.hpw.smh == 2 && ysp.hpw.dxc == 2)) {
                    ysp.hpw.zxl.qbw.tpi("bet", "#cgv", [ysp.hpw.txz]);
                    ysp.hpw.zxl.qbw.tpi("exit", "#cgv", [true])
                }
                if (ysp.hpw.smh == ysp.hpw.dxc) {
                    ysp.hpw.vln()
                }
                ysp.hpw.jgj(true)
            }
        } else {
            ysp.hpw.fgi();
            ysp.hpw.obs();
            if (ysp.hpw.win > 0) {
                ysp.hpw.fgv = false;
                ysp.hpw.wyn()
            } else {
                if (!ysp.hpw.igy()) {
                    ysp.hpw.vln();
                    ysp.hpw.zxl.qbw.tpi("info", "#ise", [ysp.hpw.language.dsl, true]);
                    if (ysp.hpw.ols) {
                        ysp.hpw.zxl.aij(true);
                        ysp.hpw.qgy = setTimeout(ysp.hpw.lhf, 800)
                    } else {
                        ysp.hpw.zxl.jjr(true);
                        ysp.hpw.jgj(true)
                    }
                } else {
                    ysp.hpw.soc()
                }
            }
        }
    };
    this.gev = function() {
        if (ysp.lct.value79 > 0) {
            this.mfj = ysp.lct.value79 / this.aih.length
        } else {
            if (this.zuw) {
                this.mfj = this.fho
            } else {
                if (this.jrt == 1) {
                    this.mfj = this.wey
                } else {
                    this.mfj = this.tzi
                }
            }
        }
    };
    this.arv = function(d) {
        var c = false;
        this.imr = true;
        for (var b = 0, a = this.uoi.length; b < a; b++) {
            if (this.uoi[b] > 0) {
                this.aih[b].eod(true, false);
                if (!c && d) {
                    this.wba.dyw("hold");
                    c = true
                }
            } else {
                this.aih[b].eod(false, false)
            }
        }
        this.cul()
    };
    this.obs = function() {
        for (var b = 0, a = this.uoi.length; b < a; b++) {
            this.aih[b].eod(false, false);
            if (this.dws) {
                if (this.uoi[b] > 0) {
                    this.aih[b].xua(true, false)
                } else {
                    this.aih[b].xua(false, false)
                }
            }
        }
        this.cul()
    };
    this.wyn = function() {
        this.zxl.jjr(false);
        this.cax(this.win);
        this.zxl.qbw.tpi("info", "#ise", [this.language.lwb, false]);
        this.fru = false;
        if (!this.coz) {
            this.wba.dyw("win" + (this.ssb - 1))
        }
        this.cul();
        this.zft()
    };
    this.soc = function() {};
    this.igy = function() {
        return false
    };
    this.cax = function(a) {
        this.llt.tpi("winp", "#zev", [this.thh(a), false]);
        this.llt.tpi("winp", "#coc", [true]);
        this.llt.tpi("paytable", "#coc", [false])
    };
    this.zft = function() {
        if (this.kyj && this.jyb) {
            setTimeout(this.nop, 1000)
        } else {
            if ((this.xtl || this.ols)) {
                if (!this.jet && !this.fgv) {
                    this.zxl.qbw.tpi("start", "#zev", [this.language.ugt, true]);
                    if (this.xtl) {
                        this.jet = true;
                        this.zxl.jjr(false);
                        setTimeout(this.ugt, 2000)
                    } else {
                        if (this.ols) {
                            this.qgy = setTimeout(this.lhf, 800)
                        }
                    }
                }
            } else {
                this.zxl.qbw.tpi("start", "#zev", [this.language.ugt, true]);
                if (!this.coz) {
                    this.zxl.qbw.tpi("gamble", "#wmp");
                    this.zxl.qbw.tpi("info", "#mez", [1])
                } else {
                    if (!this.inAutogamble && !this.vlh) {
                        this.zxl.qbw.tpi("gamble", "#wmp")
                    }
                }
                setTimeout(this.qhg, 400)
            }
        }
    };
    this.qhg = function() {
        ysp.hpw.zxl.hvq(true)
    };
    this.whz = function() {};
    this.kze = function() {};
    this.zbw = function() {};
    this.jya = function() {};
    this.rpu = function() {};
    this.fgi = function() {};
    this.gla = function() {
        return this.state == ysp.vux.oqx.mya || this.state == ysp.vux.oqx.cip
    };
    this.umn = function(a) {
        if (this.imr) {
            if (!a) {
                this.ebe()
            }
            this.imr = false
        }
    };
    this.ebe = function() {
        for (var b = 0, a = this.aih.length; b < a; b++) {
            this.aih[b].eod(false, false);
            this.aih[b].xua(false, false)
        }
        this.cul()
    };
    this.mbs = function() {
        return !this.xtl
    };
    this.yfc = function() {
        var b = this.zxl.qbw.qmc("gamble"),
            a = this.zxl.qbw.qmc("info");
        this.zxl.jjr(false);
        this.ebe();
        this.rhr();
        if (b) {
            b.ufn();
            b.yzn(this.kyj)
        }
        if (a) {
            a.tto();
            a.ise(this.language.szi + ": " + this.thh(this.win + this.srd));
            a.mez(0)
        }
        this.rlv.ugt()
    };
    this.ugt = function() {
        if (!ysp.hpw.fgv) {
            ysp.hpw.ebe();
            ysp.hpw.wba.ntp("collect");
            ysp.hpw.wba.ntp("collectend");
            if (ysp.hpw.dej != ysp.hpw.uze) {
                ysp.hpw.zxl.aij(true)
            }
            ysp.hpw.wba.ntp("win" + (ysp.hpw.ssb - 1));
            ysp.hpw.dmr = 10;
            if (ysp.hpw.win + ysp.hpw.srd < ysp.hpw.dmr) {
                ysp.hpw.dmr = ysp.hpw.win + ysp.hpw.srd;
                ysp.hpw.dsz()
            } else {
                if (ysp.hpw.win + ysp.hpw.srd >= ysp.hpw.ifg() * 25) {
                    ysp.hpw.dmr = 20
                }
                ysp.hpw.dsz()
            }
        }
    };
    this.atb = function() {
        this.fgv = true;
        this.jet = false;
        clearTimeout(this.snt);
        this.wba.ntp("collect");
        this.wba.dyw("collectend");
        this.aar(this.lmm, true);
        this.rjm();
        this.jgj(true);
        this.zxl.qbw.tpi("start", "#zev", [this.language.start, true]);
        if (!this.ols) {
            this.zxl.jjr(true)
        } else {
            this.qgy = setTimeout(this.lhf, 500)
        }
    };
    this.dsz = function() {
        this.ztr = false;
        this.vrs = (this.win + this.srd > this.totalBet) ? true : false;
        this.tpm = 0;
        this.vhf = this.win + this.srd;
        this.vzk = this.lmm - this.win - this.srd;
        this.dbx = 0;
        this.iud = this.win + this.srd;
        this.mmo = new Date().getTime();
        this.jet = true;
        this.snt = setTimeout(this.xpb, this.oea)
    };
    this.xpb = function() {
        var c = 0,
            a = ysp.hpw.otf,
            b = 0;
        if (ysp.hpw.iud > 0) {
            if (!ysp.hpw.ztr) {
                ysp.hpw.wba.dyw("collect");
                ysp.hpw.ztr = true
            }
            c = Math.round(ysp.hpw.iud / ysp.hpw.dmr);
            ysp.hpw.iud -= c;
            if (ysp.hpw.iud < 0) {
                ysp.hpw.iud = 0
            }
            ysp.hpw.qot(ysp.hpw.vhf - (ysp.hpw.win + ysp.hpw.srd - ysp.hpw.iud));
            ysp.hpw.aar(ysp.hpw.vzk + (ysp.hpw.win + ysp.hpw.srd - ysp.hpw.iud), true);
            ysp.hpw.tpm++;
            ysp.hpw.dmr -= 1;
            a = ysp.hpw.otf;
            b = new Date().getTime();
            a = ysp.hpw.oea + (ysp.hpw.tpm * ysp.hpw.oea - (b - ysp.hpw.mmo));
            ysp.hpw.snt = setTimeout(ysp.hpw.xpb, a)
        } else {
            ysp.hpw.wba.ntp("collect");
            ysp.hpw.wba.dyw("collectend");
            ysp.hpw.jet = false;
            ysp.hpw.fgv = true;
            clearTimeout(ysp.hpw.snt);
            ysp.hpw.rjm();
            ysp.hpw.zxl.qbw.tpi("start", "#zev", [ysp.hpw.language.start, true]);
            if (ysp.hpw.dej == ysp.hpw.uze) {
                ysp.hpw.dej()
            } else {
                if (!(ysp.hpw.ols)) {
                    ysp.hpw.zxl.jjr(true);
                    ysp.hpw.jgj(true)
                } else {
                    ysp.hpw.zxl.zry(true);
                    ysp.hpw.zxl.qbw.tpi("info", "#ise", [ysp.hpw.language.szi + ": " + ysp.hpw.thh(ysp.hpw.win + ysp.hpw.srd)]);
                    ysp.hpw.qgy = setTimeout(ysp.hpw.lhf, 500)
                }
            }
        }
    };
    this.itx = function(a, b, c) {
        if (a <= b) {
            return 1
        }
        var d = 0,
            e = this.ell(a, b, c),
            f = 0;
        while (a > f) {
            e = this.ell(a - f, b, c);
            f += e;
            d++
        }
        return d
    };
    this.ell = function(d, a, b) {
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
    this.qbm = function(d) {
        var e = this.gpn,
            c = this.cik;
        this.avx = true;
        this.zxl.qbw.tpi("info", "#ise", ["", true]);
        this.gfl();
        if (d == ysp.vux.oqx.xiv) {
            this.vln();
            this.zxl.qbw.tpi("info", "#vmq", [0]);
            this.zxl.jjr(true);
            this.jgj(true);
            this.lry()
        } else {
            if (d == ysp.vux.oqx.mya) {
                for (var b = 0, a = this.kgc.length; b < a; b++) {
                    this.aih[b].lgb(this.kgc[b], false)
                }
                this.jya();
                this.arv(false);
                this.ney(true);
                this.zxl.qbw.tpi("info", "#vmq", [2]);
                this.zxl.nul(true);
                if (this.smh == this.dxc) {
                    this.zxl.qbw.tpi("exit", "#cgv", [true]);
                    this.zxl.qbw.tpi("bet", "#cgv", [this.txz]);
                    this.vln()
                }
                this.jgj(true)
            } else {
                if (d == ysp.vux.oqx.rpg) {
                    for (var b = 0, a = this.kgc.length; b < a; b++) {
                        this.aih[b].lgb(this.kgc[b], false)
                    }
                    this.fgi();
                    this.obs();
                    if (this.win > 0) {
                        if (this.zfy() === false) {
                            this.jyb = true
                        } else {
                            this.jyb = false;
                            this.xtl = true
                        }
                        this.fgv = false;
                        this.wyn()
                    } else {
                        if (this.igy()) {
                            this.jyb = true;
                            this.soc()
                        } else {
                            this.vln();
                            this.zxl.qbw.tpi("info", "#vmq", [0]);
                            this.zxl.jjr(true);
                            this.jgj(true);
                            this.lry()
                        }
                    }
                } else {
                    if (d == ysp.vux.oqx.wcj) {
                        this.fgv = true;
                        for (var b = 0, a = this.kgc.length; b < a; b++) {
                            this.aih[b].lgb(this.kgc[b], false)
                        }
                        this.vln();
                        this.zxl.qbw.tpi("info", "#vmq", [0]);
                        this.zxl.jjr(true);
                        this.jgj(true);
                        this.lry()
                    } else {
                        if (d == ysp.vux.oqx.crq) {
                            for (var b = 0, a = this.kgc.length; b < a; b++) {
                                this.aih[b].lgb(this.kgc[b], false)
                            }
                            this.cul();
                            if (!this.pbq.pod() && this.win + this.srd > 0) {
                                this.nop();
                                this.pbq.lab(this.lmm, this.win + this.srd, this.ssb, true)
                            }
                            if (this.win + this.srd == 0) {
                                this.vln();
                                this.zxl.qbw.tpi("info", "#vmq", [0]);
                                this.zxl.jjr(true);
                                this.jgj(true);
                                this.lry()
                            }
                        } else {
                            if (d == ysp.vux.oqx.qsn) {
                                for (var b = 0, a = this.kgc.length; b < a; b++) {
                                    this.aih[b].lgb(this.kgc[b], false)
                                }
                                if (!this.pbq.pod()) {
                                    this.nop()
                                }
                                this.aar(this.lmm, false);
                                this.pbq.lab(this.lmm, this.win + this.srd, this.ssb, true);
                                this.pbq.jjr(true)
                            } else {
                                if (d == ysp.vux.oqx.bym) {
                                    this.fgv = true;
                                    for (var b = 0, a = this.kgc.length; b < a; b++) {
                                        this.aih[b].lgb(this.kgc[b], false)
                                    }
                                    this.vln();
                                    this.zxl.qbw.tpi("info", "#vmq", [0]);
                                    this.zxl.jjr(true);
                                    this.jgj(true);
                                    this.lry()
                                } else {
                                    if (d == ysp.vux.oqx.cip) {
                                        for (var b = 0, a = this.kgc.length; b < a; b++) {
                                            this.aih[b].lgb(this.kgc[b], false)
                                        }
                                        this.rpu();
                                        this.arv(false);
                                        this.ney(true);
                                        this.zxl.qbw.tpi("info", "#vmq", [2]);
                                        this.zxl.nul(true);
                                        if ((this.smh == 3 && this.dxc >= 2) && this.zxl.afl != null) {
                                            this.zxl.qbw.tpi("exit", "#cgv", [true])
                                        }
                                    } else {
                                        if (d == ysp.vux.oqx.pri) {
                                            for (var b = 0, a = this.kgc.length; b < a; b++) {
                                                this.aih[b].lgb(this.kgc[b], false)
                                            }
                                            if (!this.pbq.pod()) {
                                                this.nop()
                                            }
                                            this.aar(this.lmm, false);
                                            this.pbq.lab(this.lmm, this.win, this.ssb, true);
                                            this.pbq.hux(false);
                                            this.pbq.qrr(c)
                                        } else {
                                            if (d == ysp.vux.oqx.exo || d == ysp.vux.oqx.xdc) {
                                                for (var b = 0, a = this.kgc.length; b < a; b++) {
                                                    this.aih[b].lgb(this.kgc[b], false)
                                                }
                                                if (!this.pbq.pod()) {
                                                    this.nop()
                                                }
                                                this.aar(this.lmm, false);
                                                this.pbq.lab(this.lmm, this.win, this.ssb, true);
                                                this.pbq.hux(false);
                                                this.pbq.zew(e)
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
    this.hhs = function() {
        this.avx = false;
        this.xtl = false;
        this.jyb = false;
        this.ong = 5;
        this.xrb();
        this.zxl.zry(true);
        this.ueg()
    };
    this.fgc = function() {
        this.avx = false;
        this.xtl = false;
        this.jyb = false;
        this.aqy();
        this.zxl.zry(true)
    };
    this.rcj = function() {
        this.avx = false;
        this.xtl = false;
        this.jyb = true;
        this.fgv = false;
        this.gxp();
        this.zxl.zry(true)
    };
    this.zee = function(a) {
        this.avx = false;
        this.xtl = true;
        this.jyb = false;
        this.fgv = false;
        if (this.pbq.pod()) {
            this.pbq.lab(this.lmm, this.win + this.srd, this.ssb, true);
            this.pbq.eab();
            this.aar(this.lmm, false);
            try {
                if (this.pbq instanceof qnn) {
                    this.pbq.qrr(a, true)
                } else {
                    setTimeout(this.pbq.sjh, 500)
                }
            } catch (b) {
                setTimeout(this.pbq.sjh, 500)
            }
        } else {
            this.gxp();
            this.zxl.zry(true)
        }
    };
    this.wdw = function() {
        this.avx = false;
        this.jyb = false;
        this.ags = true;
        this.zqa();
        if (this.pbq.pod()) {
            this.pbq.eab();
            this.aar(this.lmm, false);
            setTimeout(this.pbq.sjh, 100)
        } else {
            this.ugt()
        }
    };
    this.kds = function() {
        this.avx = false;
        if (!this.pbq.pod() && this.win + this.srd > 0) {
            this.nop()
        }
        this.pbq.lab(this.lmm, this.win + this.srd, this.ssb, true);
        if (this.win + this.srd == 0) {
            this.pbq.qbw.tpi("info", "#tto");
            setTimeout(this.nxc, 1000)
        } else {
            this.pbq.neq()
        }
    };
    this.xmd = function() {
        this.avx = false;
        if (!this.pbq.pod()) {
            this.nop()
        }
        this.aar(this.lmm, false);
        this.pbq.lab(this.lmm, this.win + this.srd, this.ssb, true);
        this.pbq.jjr(true)
    };
    this.owj = function(a) {
        this.avx = false;
        if (!this.pbq.pod() && this.win > 0) {
            this.nop()
        }
        this.pbq.lab(this.lmm, this.win, this.ssb, true);
        this.pbq.hux(false);
        this.pbq.zew(a)
    };
    this.qec = function(a) {
        this.avx = false;
        if (!this.pbq.pod() && this.win > 0) {
            this.nop()
        }
        this.pbq.lab(this.lmm, this.win, this.ssb, true);
        this.pbq.hux(false);
        this.pbq.zew(a)
    };
    this.omg = function(a) {
        this.avx = false;
        this.pbq.lab(this.lmm, this.win, this.ssb, true);
        this.pbq.qrr(a, false)
    };
    this.vzq = function(b, d) {
        var c = this.llt.qmc("stats"),
            a = this.llt.qmc("history");
        if (b == "authfailed") {
            b = this.language.dyl
        } else {
            if (b.toLowerCase().indexOf("active") == 0) {
                b = this.language.gty
            }
        }
        if (this.psw) {
            if (!this.coz) {
                if (c && c.pod()) {
                    c.jjr(false);
                    c.coc(false)
                }
                this.llt.tpi("settings", "#uaw");
                if (this.pbq != null && this.pbq.pod()) {
                    this.pbq.qbw.tpi("info", "#ise", [b, true]);
                    this.pbq.jjr(false);
                    this.knf()
                } else {
                    if (this.zxl != null) {
                        if (this.igz != null && this.igz.pod()) {
                            this.xvs()
                        }
                        this.zxl.jjr(false);
                        this.stop();
                        this.zxl.qbw.tpi("setting", "#yzn", [false]);
                        this.zxl.qbw.tpi("info", "#ise", [b, true])
                    } else {
                        this.oyk(b)
                    }
                }
            } else {
                this.stop();
                this.syy();
                if (a) {
                    a.nxz(true)
                }
                this.kzb(this.oxp(b))
            }
        } else {
            this.oyk(b)
        }
        if (d) {
            if (!this.coz && this.rlv.dap.kmu == 0 && ysp.lct.value46 > 0) {
                this.rho((this.dpf) ? ysp.lct.value71 : ysp.lct.value47)
            } else {
                setTimeout(this.uze, ysp.lct.value10)
            }
        }
    };
    this.enq = function(a) {
        if (a == ysp.ezq.tkf) {
            this.zxl.qbw.tpi("info", "#ise", [this.language.owc, true])
        } else {
            if (a == ysp.ezq.ymr) {
                this.zxl.qbw.tpi("info", "#ise", [this.language.xxo + " " + this.thh(this.ljr), true])
            } else {
                if (a >= ysp.ezq.yvv) {
                    this.zxl.qbw.tpi("info", "#tto");
                    if (a == ysp.ezq.bgq || a == ysp.ezq.nad) {
                        this.stop()
                    }
                    this.zxl.jjr(false);
                    this.jgj(false)
                }
            }
        }
        this.bjb();
        if (a < ysp.ezq.yvv) {
            this.ags = true;
            this.zxl.jjr(true);
            this.jgj(true)
        } else {
            this.tvm([{
                sit: a
            }])
        }
    };
    this.bcb = function(a) {
        this.lmm = a;
        if (!(this.pbq.pod() || this.igz.pod())) {
            this.aar(a, true)
        } else {
            if (this.pbq.pod()) {
                this.pbq.qbw.tpi("creditd", "#zev", [this.avr(a), true]);
                this.aar(a, false)
            }
        }
        if (this.lmm > 0) {
            this.zqa()
        } else {
            this.vln()
        }
    };
    this.crl = function() {
        clearTimeout(ysp.hpw.qgy);
        if (ysp.hpw.ags) {
            if (ysp.hpw.win + ysp.hpw.srd > 0 && !ysp.hpw.fgv) {
                if (!ysp.hpw.jet) {
                    if (ysp.hpw.mbs()) {
                        ysp.hpw.ags = false;
                        ysp.hpw.yfc()
                    }
                } else {
                    ysp.hpw.atb()
                }
            } else {
                if (!ysp.hpw.vhh) {
                    if (ysp.hpw.dwt) {
                        ysp.hpw.bjb();
                        ysp.hpw.ydk();
                        return
                    } else {
                        if (ysp.hpw.bup) {
                            ysp.hpw.bjb();
                            ysp.hpw.qez();
                            return
                        }
                    }
                    ysp.hpw.ags = false;
                    if (ysp.hpw.zfy() === true) {
                        ysp.hpw.mfi = (!ysp.hpw.kyj) ? 1 : 0
                    } else {
                        if (ysp.lct.value62 === true) {
                            ysp.hpw.mfi = 0;
                            if (ysp.hpw.ols) {
                                ysp.hpw.mfi |= 2
                            }
                            if (ysp.hpw.kyj) {
                                ysp.hpw.mfi |= 4
                            }
                        } else {
                            ysp.hpw.mfi = (ysp.hpw.ols && !ysp.hpw.kyj) ? 1 : 0
                        }
                    }
                    ysp.hpw.snw();
                    if ((ysp.hpw.state == ysp.vux.oqx.xiv || ysp.hpw.state == ysp.vux.oqx.rpg || ysp.hpw.state == ysp.vux.oqx.wcj || ysp.hpw.state == ysp.vux.oqx.crq || ysp.hpw.state == ysp.vux.oqx.bym || ysp.hpw.state == ysp.vux.oqx.pri) || ysp.hpw.pxj()) {
                        if (ysp.hpw.lmm >= ysp.hpw.ifg() && ysp.hpw.ifg() >= ysp.hpw.ljr) {
                            ysp.hpw.rlv.enr(ysp.hpw.kjv, ysp.hpw.mfi);
                            ysp.hpw.zxl.jjr(false)
                        } else {
                            ysp.hpw.rbx();
                            ysp.hpw.bjb();
                            ysp.hpw.zxl.jjr(true);
                            ysp.hpw.jgj(true);
                            ysp.hpw.ags = true
                        }
                    } else {
                        if (ysp.hpw.state == ysp.vux.oqx.mya) {
                            if (ysp.hpw.smh == 2 && ysp.hpw.dxc == 2 && ysp.hpw.txz && (ysp.hpw.ong == 5 || ysp.hpw.totalBet != ysp.hpw.xue)) {
                                ysp.hpw.rlv.enr(ysp.hpw.kjv, ysp.hpw.mfi);
                                ysp.hpw.zxl.jjr(false);
                                ysp.hpw.ney(false);
                                return
                            }
                            ysp.hpw.ybr();
                            if (ysp.hpw.smh == 2 || (ysp.hpw.smh == 3 && ysp.hpw.ong == 0 && ysp.hpw.ssb > 0)) {
                                ysp.hpw.rlv.fro(ysp.hpw.kjv, ysp.hpw.mfi, ysp.hpw.uoi);
                                ysp.hpw.zxl.jjr(false)
                            } else {
                                if (ysp.hpw.smh == 3) {
                                    ysp.hpw.rlv.tkt(ysp.hpw.kjv, ysp.hpw.mfi, ysp.hpw.uoi);
                                    ysp.hpw.zxl.jjr(false)
                                }
                            }
                        } else {
                            if (ysp.hpw.state == ysp.vux.oqx.cip) {
                                ysp.hpw.ybr();
                                ysp.hpw.rlv.fro(ysp.hpw.kjv, ysp.hpw.mfi, ysp.hpw.uoi);
                                ysp.hpw.zxl.jjr(false)
                            }
                        }
                    }
                    ysp.hpw.ney(false)
                }
            }
        }
    };
    this.fzx = function() {
        var a = ysp.hpw.llt.qmc("topi"),
            c = 0,
            b = 0,
            d = 0;
        if (!ysp.lct.value55) {
            ysp.hpw.wba.ntp("auto_on");
            ysp.hpw.wba.ntp("auto_off")
        }
        if (ysp.hpw.ols) {
            ysp.hpw.ols = false;
            ysp.hpw.mny();
            ysp.hpw.zxl.qbw.tpi("astart", "#yzn", [ysp.hpw.ols]);
            ysp.hpw.zxl.qbw.tpi("start", "#zev", [ysp.hpw.language.start, true]);
            if (!ysp.lct.value55) {
                ysp.hpw.wba.dyw("auto_off")
            }
        } else {
            if (ysp.hpw.msq() != null && ysp.hpw.mqs <= 0 && ysp.hpw.zfy() === false) {
                if (a && a.aqx() === true) {
                    ysp.hpw.jgj(false);
                    ysp.hpw.zxl.jjr(false);
                    ysp.hpw.id = setTimeout(ysp.hpw.hzr, 300)
                }
            } else {
                ysp.hpw.ols = true;
                if (ysp.hpw.msq() != null && ysp.hpw.zfy() === true) {
                    ysp.hpw.mqs = ysp.hpw.llt.tpi("settings", "#yul");
                    c = ysp.hpw.llt.tpi("settings", "#iyu");
                    b = ysp.hpw.llt.tpi("settings", "#wkp");
                    d = ysp.hpw.llt.tpi("settings", "#vwc");
                    ysp.hpw.qaa = (c > 0) ? c : 0;
                    ysp.hpw.pva = (b > 0) ? b : 0;
                    ysp.hpw.gzp = (d > 0) ? d : 0;
                    ysp.hpw.ueg()
                }
                ysp.hpw.zxl.qbw.tpi("astart", "#yzn", [ysp.hpw.ols]);
                ysp.hpw.zxl.qbw.tpi("start", "#zev", [ysp.hpw.language.start, true]);
                if (!ysp.lct.value55) {
                    ysp.hpw.wba.dyw("auto_on")
                }
                ysp.hpw.crl()
            }
        }
        if (a) {
            a.exq("auto", ysp.hpw.ols)
        }
    };
    this.uze = function() {
        if (ysp.kmu == 0 && ysp.hpw.coz === false && ysp.hpw.win + ysp.hpw.srd > 0 && !ysp.hpw.fgv && ysp.hpw.mbs()) {
            if (!ysp.hpw.jet) {
                ysp.hpw.yfc()
            }
            ysp.hpw.dej = ysp.hpw.uze
        } else {
            bpy.prototype.uze.call(this)
        }
    };
    this.rcz = function() {
        if (ysp.hpw.kjv < ysp.hpw.jaa.length - 1) {
            if (ysp.hpw.kjv >= ysp.hpw.yjy(true)) {
                ysp.hpw.kjv = 0;
                while (ysp.hpw.kjv < ysp.hpw.xxd()) {
                    ysp.hpw.kjv++
                }
            } else {
                ysp.hpw.kjv++
            }
        } else {
            ysp.hpw.kjv = 0;
            while (ysp.hpw.kjv < ysp.hpw.xxd()) {
                ysp.hpw.kjv++
            }
        }
        ysp.hpw.xnw(false);
        if (ysp.hpw.kjv >= ysp.hpw.yjy(true)) {
            return true
        }
        return false
    };
    this.csv = function() {
        if (ysp.hpw.kjv > 0) {
            if (ysp.hpw.kjv <= ysp.hpw.xxd()) {
                ysp.hpw.kjv = ysp.hpw.jaa.length;
                while (ysp.hpw.kjv > ysp.hpw.yjy(true)) {
                    ysp.hpw.kjv--
                }
            } else {
                ysp.hpw.kjv--
            }
        } else {
            ysp.hpw.kjv = ysp.hpw.jaa.length;
            while (ysp.hpw.kjv > ysp.hpw.yjy(true)) {
                ysp.hpw.kjv--
            }
        }
        if (ysp.hpw.kjv < 0) {
            ysp.hpw.kjv = 0
        }
        ysp.hpw.xnw(false);
        if (ysp.hpw.kjv <= ysp.hpw.xxd()) {
            return true
        }
        return false
    };
    this.auf = function() {
        var a = ysp.hpw.llt.qmc("topi"),
            b = ysp.hpw.llt.qmc("settings");
        if (ysp.hpw.zfy() === false && ysp.hpw.jyb && ysp.hpw.win + ysp.hpw.srd > 0) {
            if (!ysp.hpw.vhh) {
                ysp.hpw.avx = false;
                ysp.hpw.nop()
            }
        } else {
            ysp.hpw.wba.ntp("gamble_on");
            ysp.hpw.wba.ntp("gamble_off");
            ysp.hpw.kyj = !ysp.hpw.kyj;
            if (ysp.hpw.kyj) {
                ysp.hpw.wba.dyw("gamble_on")
            } else {
                ysp.hpw.wba.dyw("gamble_off")
            }
            ysp.hpw.zxl.qbw.tpi("gamble", "#yzn", [ysp.hpw.kyj]);
            if (a) {
                a.exq("gamble", ysp.hpw.kyj)
            }
            if (b) {
                b.qbw.tpi("gamble", "#ogm", [(ysp.hpw.kyj) ? 1 : 0])
            }
        }
    };
    this.tjw = function() {
        if (!ysp.hpw.igz.pod()) {
            ysp.hpw.bhp();
            if (ysp.hpw.llt.qmc("tops")) {
                ysp.hpw.fpm()
            }
            if (ysp.hpw.igz.mbh() > 0) {
                ysp.hpw.oln()
            }
        } else {
            ysp.hpw.xvs()
        }
    };
    this.ndg = function() {
        var a = ysp.hpw.llt.qmc("topi"),
            b = ysp.hpw.llt.qmc("settings"),
            c = ysp.hpw.llt.qmc("topb");
        ysp.hpw.zuw = !ysp.hpw.zuw;
        if (a) {
            a.exq("turbo", ysp.hpw.zuw)
        }
        if (c) {
            c.qbw.tpi("turbo", "#ogm", [(ysp.hpw.zuw) ? 1 : 0])
        }
        if (b) {
            b.qbw.tpi("turbo", "#ogm", [(ysp.hpw.zuw) ? 1 : 0])
        }
    };
    this.vdo = function() {
        var a = false;
        if (ysp.ekr.myr == true) {
            if (ysp.hpw.plb == true) {
                ysp.hpw.plb = false;
                a = ysp.ekr.ble();
                setTimeout(ysp.hpw.hef, 1400)
            }
        } else {
            a = ysp.ekr.ble();
            setTimeout(ysp.hpw.hef, 1400)
        }
    };
    this.kpg = function() {
        if (ysp.hpw.wba.ete() && !ysp.hpw.hic) {
            ysp.hpw.zyp = false;
            ysp.hpw.hic = true;
            ysp.hpw.llt.tpi("loading", "#stop");
            setTimeout(ysp.hpw.mcw, 100);
            ysp.hpw.wba.dyw("silence");
            if (ysp.ekr.uxa() && ysp.ekr.myr) {
                ysp.hpw.vdo()
            }
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                webAudioEngine.resume()
            }
        }
    };
    this.pvy = function(a) {
        if (a == ysp.language.EN || a == ysp.language.US) {
            return new twb()
        } else {
            if (a == ysp.language.ES || a == ysp.language.CO || a == ysp.language.MX || a == ysp.language.CL || a == ysp.language.VE) {
                return new zhh()
            } else {
                if (a == ysp.language.DE || a == ysp.language.AT) {
                    return new tqe()
                } else {
                    if (a == ysp.language.PT || a == ysp.language.BR) {
                        return new opm()
                    } else {
                        if (a == ysp.language.RU) {
                            return new yrv()
                        } else {
                            if (a == ysp.language.EE) {
                                return new zzd()
                            } else {
                                if (a == ysp.language.TR) {
                                    return new fkn()
                                } else {
                                    if (a == ysp.language.CZ) {
                                        return new rak()
                                    } else {
                                        if (a == ysp.language.GR) {
                                            return new vpn()
                                        } else {
                                            if (a == ysp.language.BG) {
                                                return new xqz()
                                            } else {
                                                if (a == ysp.language.GE) {
                                                    return new ugz()
                                                } else {
                                                    if (a == ysp.language.HU) {
                                                        return new orn()
                                                    } else {
                                                        if (a == ysp.language.RO) {
                                                            return new cqx()
                                                        } else {
                                                            if (a == ysp.language.FR) {
                                                                return new kai()
                                                            } else {
                                                                if (a == ysp.language.HR) {
                                                                    return new ecw()
                                                                } else {
                                                                    if (a == ysp.language.IT) {
                                                                        return new leb()
                                                                    } else {
                                                                        if (a == ysp.language.SE) {
                                                                            return new sun()
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
    this.ree = function() {
        var f = this.llt.qmc("stats"),
            e = this.llt.qmc("topb"),
            c = this.llt.qmc("topi"),
            b = this.llt.qmc("betsel");
        this.uul();
        this.zxl.mkd(this.crd, 0);
        this.hex[0] = this.language.ful;
        this.hex[1] = this.language.bto;
        this.zxl.mkd(this.hex, 1);
        this.nlr[0] = this.language.wvs;
        this.nlr[1] = this.language.mqg;
        this.zxl.mkd(this.nlr, 2);
        if (this.ols) {
            this.zxl.qbw.tpi("start", "#zev", [this.language.start])
        } else {
            if (this.win + this.srd > 0 && !this.xtl && !this.fgv) {
                this.zxl.qbw.tpi("start", "#zev", [this.language.ugt])
            } else {
                this.zxl.qbw.tpi("start", "#zev", [this.language.start])
            }
        }
        if (this.msq() != null) {
            this.zxl.qbw.tpi("astart", "#zev", [this.language.ypj])
        } else {
            this.zxl.qbw.tpi("astart", "#zev", [this.language.ols])
        }
        this.zxl.qbw.tpi("gamble", "#zev", [this.language.kyj]);
        this.zxl.qbw.tpi("exit", "#zev", [(ysp.lct.value50.g === true) ? this.language.nkt : this.language.nfl]);
        this.zxl.qbw.tpi("bet", "#zev", [this.language.kos]);
        this.zxl.qbw.tpi("creditd", "#sia", [(this.jhh()) ? this.language.xup : this.language.lmm]);
        this.zxl.qbw.tpi("betd", "#sia", [this.language.kos]);
        if (e) {
            e.qbw.tpi("language", "#yxf", [this.language.language]);
            e.qbw.tpi("audio", "#yxf", [this.language.audio]);
            e.qbw.tpi("turbo", "#yxf", [this.language.zuw]);
            e.qbw.tpi("fullscreen", "#yxf", [this.language.qgo]);
            e.qbw.tpi("help", "#yxf", [this.language.rtp]);
            e.qbw.tpi("history", "#yxf", [this.language.xak]);
            e.qbw.tpi("statistic", "#yxf", [this.language.kdz]);
            e.qbw.tpi("deposit", "#yxf", [this.language.xnp])
        }
        if (c) {
            c.yxf("freeplay", this.language.xup)
        }
        if (b) {
            b.wrw = this.language.kos
        }
        if (f) {
            if (ysp.lct.value36) {
                f.wrw = this.oxp(this.language.kdz)
            } else {
                if (ysp.lct.value37) {
                    f.wrw = this.oxp(this.language.dth)
                }
            }
            if (f.cjj != null) {
                f.cjj.zev(this.language.ret, false)
            }
            if (f.afl != null) {
                f.afl.zev(this.language.qqx, false)
            }
        }
        this.igz.qbw.tpi("return", "#zev", [this.language.ret, false]);
        for (var d = 0, a = this.aih.length; d < a; d++) {
            if (this.aih[d].gwf()) {
                this.aih[d].xua(true, false)
            } else {
                if (this.aih[d].zhq()) {
                    this.aih[d].eod(true, false)
                }
            }
        }
        this.llt.tpi("settings", "#ree", [this.language, false]);
        this.llt.tpi("autop", "#ree", [this.language]);
        this.uzv()
    };
    this.uzv = function() {
        this.dxj[0] = this.language.dqp;
        this.pbq.mkd(this.dxj)
    };
    this.ifg = function() {
        return this.totalBet
    };
    this.jfy = function() {
        return this.ljr
    };
    this.kpq = function() {
        return this.yrf
    };
    this.yjy = function(b) {
        for (var c = 0; c < this.jaa.length; c++) {
            var a = this.jaa[c];
            if (a > this.yrf || (b && (this.lmm > 0 && this.lmm < a))) {
                return c - 1
            } else {
                if (a == this.yrf || c == this.jaa.length - 1) {
                    return c
                }
            }
        }
        return -1
    };
    this.xxd = function() {
        for (var b = 0; b < this.jaa.length; b++) {
            var a = this.jaa[b];
            if (a >= this.ljr && a < this.yrf) {
                return b
            }
        }
        return -1
    };
    this.rbx = function() {
        var c = this.yjy(true),
            a = this.xxd(),
            b = this.jaa.length - 1;
        b = (b > c) ? c : b;
        if (b > 0) {
            while (this.jaa[b] > this.lmm) {
                b--;
                if (b <= a) {
                    break
                }
            }
        }
        this.kjv = (b < a) ? a : b;
        this.xnw(false);
        if (this.ifg() > this.lmm) {
            this.zxl.qbw.tpi("info", "#ise", [this.language.owc, true])
        } else {
            if (this.ifg() < this.ljr) {
                this.zxl.qbw.tpi("info", "#ise", [this.language.xxo + " " + this.ljr, true])
            }
        }
    };
    this.xnw = function(b) {
        var a = this.zxl.qbw.qmc("info");
        this.totalBet = this.jaa[this.kjv];
        this.gfl();
        if (a && a.xsm() === false) {
            a.ise(this.crd[2], true)
        }
        if (this.zfy() == true) {
            this.wba.dyw("btn")
        } else {
            if (this.kjv == this.yjy(true)) {
                this.wba.dyw("maxstep")
            } else {
                this.wba.dyw("step" + (this.kjv % 12))
            }
        }
        this.llt.tpi("betsel", "#fqa", [this.kjv, true])
    };
    this.bci = function() {
        this.totalBet = this.jaa[this.kjv];
        this.gfl()
    };
    this.uuu = function(a) {
        ysp.hpw.kjv = a;
        ysp.hpw.bci()
    };
    this.csy = function() {
        this.llt.tpi("paytable", "#ysv", [this.totalBet])
    };
    this.stop = function() {
        bpy.prototype.stop.call(this);
        this.obp();
        if (this.zxl != null) {
            this.zxl.qbw.tpi("gamble", "#ufn");
            this.zxl.qbw.tpi("info", "#tto");
            this.zxl.stop()
        }
        clearTimeout(this.lgn);
        clearTimeout(this.snt);
        clearTimeout(this.yrx);
        clearTimeout(this.sdt);
        clearTimeout(this.jjo);
        this.ywc();
        if (this.pbq != null && this.pbq.pod()) {
            this.pbq.eab();
            try {
                if (this.pbq instanceof qnn) {
                    this.pbq.qbw.tpi("gamble", "#ufn")
                } else {
                    this.pbq.qbw.tpi("info", "#tto")
                }
            } catch (a) {
                this.pbq.qbw.tpi("info", "#tto")
            }
        }
        this.hrk();
        if (!this.coz) {
            this.cul()
        }
    };
    this.ywc = function() {};
    this.rjm = function() {
        var a = this.llt.qmc("winp");
        if (a && a.pod()) {
            a.coc(false, true)
        }
    };
    this.qot = function(a) {
        this.llt.tpi("winp", "#zev", [this.thh(a), true])
    };
    this.ney = function(c) {
        if (!(c && this.ols)) {
            for (var b = 0, a = this.aih.length; b < a; b++) {
                this.aih[b].cgv(c)
            }
        }
    };
    this.nsm = function(a) {
        this.zxl.qbw.nhs("buttons", "#coc", [a]);
        this.cul()
    };
    this.snw = function() {
        this.ong = 5;
        for (var b = 0, a = this.aih.length; b < a; b++) {
            if (this.aih[b].zhq()) {
                this.ong--
            }
        }
    };
    this.ybr = function() {
        for (var b = 0, a = this.aih.length; b < a; b++) {
            if (this.aih[b].zhq()) {
                this.uoi[b] = this.kgc[b]
            } else {
                this.uoi[b] = 0
            }
        }
    };
    this.aaf = function(b) {
        for (var c = 0, a = this.fpv.length; c < a; c++) {
            if (b == this.fpv[c]) {
                return true
            }
        }
        return false
    };
    this.tyk = function(b) {
        for (var c = 0, a = this.fpv.length; c < a; c++) {
            if (b == this.fpv[c]) {
                if (this.dul[c]) {
                    return this.dul[c]
                }
            }
        }
        return -1
    };
    this.pxj = function() {
        return false
    };
    this.rcb = function() {
        if (!ysp.hpw.fgv && !ysp.hpw.jet && !(ysp.hpw.xtl || ysp.hpw.ols) && !(ysp.hpw.kyj && ysp.hpw.jyb)) {
            if (ysp.hpw.win + ysp.hpw.srd > 0 && !ysp.hpw.fru) {
                ysp.hpw.wba.ntp("gambleprop");
                ysp.hpw.wba.dyw("gambleprop")
            }
        }
    };
    this.rhr = function() {
        if (!this.coz) {
            this.wba.ntp("gambleprop");
            this.fru = true
        }
    };
    this.jgj = function(e) {
        bpy.prototype.jgj.call(this, e);
        var d = this.llt.qmc("topb"),
            c = (this.llt.qmc("tops") != null),
            a = (e && !this.ols);
        if (this.zxl) {
            this.zxl.qbw.tpi("setting", "#cgv", [a])
        }
        if (c) {
            var a = (e && !this.ols);
            if (this.vkw && d) {
                var b = d.qbw.qmc("help");
                if (b) {
                    b.cgv(a && !c)
                }
            }
        }
    };
    this.xuq = function(e) {
        bpy.prototype.xuq.call(this, e);
        var d = this.llt.qmc("topb"),
            c = (this.llt.qmc("tops") != null),
            a = (e && !this.ols);
        if (this.zxl) {
            this.zxl.qbw.tpi("setting", "#cgv", [a])
        }
        if (c) {
            var a = (e && !this.ols);
            if (this.vkw && d) {
                var b = d.qbw.qmc("help");
                if (b) {
                    b.cgv(a && !c)
                }
            }
        }
    };
    this.sxm = function(e) {
        bpy.prototype.sxm.call(this, e);
        var d = this.llt.qmc("topb"),
            c = (this.llt.qmc("tops") != null),
            a = (e && !this.ols);
        if (this.zxl) {
            this.zxl.qbw.tpi("setting", "#cgv", [a])
        }
        if (c) {
            var a = (e && !this.ols);
            if (this.vkw && d) {
                var b = d.qbw.qmc("help");
                if (b) {
                    b.cgv(a && !c)
                }
            }
        }
    };
    this.rlr = function() {
        bpy.prototype.rlr.call(this);
        if (ysp.hpw.rvg === true && ysp.hpw.iew === true) {
            ysp.hpw.bjb()
        }
    };
    this.mjb = function() {
        if (ysp.lct.value74 != null && this.llt.tpi("settings", "#yul") <= 0) {
            return false
        } else {
            if ((this.state == ysp.vux.oqx.xiv || this.state == ysp.vux.oqx.rpg || this.state == ysp.vux.oqx.wcj || this.state == ysp.vux.oqx.crq || this.state == ysp.vux.oqx.bym || this.state == ysp.vux.oqx.pri) || this.pxj()) {
                if (!(this.lmm >= this.ifg() && this.ifg() >= this.ljr)) {
                    return false
                }
            }
        }
        return true
    };
    this.flj = function() {
        var b = this.llt.qmc("stats"),
            a = this.llt.qmc("settings");
        if (this.igz && this.igz.pod()) {
            return false
        } else {
            if (this.pbq && this.pbq.pod()) {
                return false
            } else {
                if (b && b.pod()) {
                    return false
                } else {
                    if (a && a.pod()) {
                        return false
                    }
                }
            }
        }
        return true
    };
    this.lry = function() {
        if (ysp.lct.value78 && this.zfy() === false) {
            if (ysp.lct.value78.t === true) {
                this.llt.tpi("topb", "#coc", [true])
            }
            if (ysp.lct.value78.b === true) {
                this.llt.tpi("betsel", "#coc", [true])
            }
            if (ysp.lct.value78.t === true || ysp.lct.value78.b === true) {
                this.uay()
            }
            this.cul();
            if (ysp.lct.value78.d > 0) {
                this.qzd = setTimeout(this.dlq, ysp.lct.value78.d)
            }
        }
    };
    this.dlq = function() {
        ysp.hpw.nus();
        clearTimeout(ysp.hpw.qzd)
    };
    this.bhp = function(b) {
        var a = this.llt.qmc("betsel");
        if (a && a.pod() && a.aqx()) {
            this.nus(b)
        } else {
            bpy.prototype.bhp.call(this, b)
        }
    };
    this.uay = function() {
        if (this.canvas) {
            this.canvas.onmousemove = function(a) {
                ysp.hpw.iid(a)
            };
            this.canvas.ontouchmove = function(a) {
                ysp.hpw.iid(a)
            }
        }
    };
    this.obp = function() {
        if (this.canvas) {
            this.canvas.onmousemove = null;
            this.canvas.ontouchmove = null
        }
    };
    this.iid = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        var b = 0,
            g = 0,
            c = false,
            e = this.llt.qmc("topb"),
            a = this.llt.qmc("betsel");
        if (d.touches) {
            var f = d.touches[0];
            c = true;
            if (!this.exk) {
                b = f.pageX - this.offsetLeft;
                g = f.pageY - this.offsetTop
            } else {
                b = Math.round((f.pageX - this.offsetLeft) / this.fdm);
                g = Math.round((f.pageY - this.offsetTop) / this.eiz)
            }
        } else {
            if (!this.exk) {
                b = d.pageX - this.offsetLeft;
                g = d.pageY - this.offsetTop
            } else {
                b = Math.round((d.pageX - this.offsetLeft) / this.fdm);
                g = Math.round((d.pageY - this.offsetTop) / this.eiz)
            }
        }
        if (a && a.pod()) {
            if (a.njw(b, g, c)) {
                return
            }
        }
        if (e && e.pod()) {
            e.njw(b, g)
        }
    };
    this.ckl = function() {
        if (this.lgn >= 0) {
            return
        }
        this.llt.tpi("betsel", "#kzy");
        this.wba.ntp("panel_in");
        this.wba.dyw("panel_in");
        this.jgj(false);
        this.mmo = new Date().getTime();
        this.tpm = 0;
        this.lgn = setTimeout(this.fbx, 89)
    };
    this.nus = function(b) {
        var c = this.llt.qmc("topb"),
            a = this.llt.qmc("betsel");
        if (this.lgn >= 0 || !((c && c.pod()) || (a && a.pod()))) {
            return
        }
        if (b == this.csv || b == this.rcz) {
            b();
            return
        }
        if (c) {
            c.mrq()
        }
        if (a) {
            a.mrq()
        }
        this.wba.ntp("panel_out");
        this.wba.dyw("panel_out");
        this.gpx = b;
        this.mmo = new Date().getTime();
        this.tpm = 0;
        this.lgn = setTimeout(this.zys, 89)
    };
    this.fbx = function() {
        var a = ysp.hpw.llt.qmc("betsel"),
            d = (!a || (a && !a.rav())),
            c = 0,
            b = 0;
        ysp.hpw.cul();
        ysp.hpw.tpm++;
        if (d) {
            ysp.hpw.uay();
            clearTimeout(ysp.hpw.lgn);
            ysp.hpw.lgn = -1
        } else {
            c = new Date().getTime();
            b = 89 + (ysp.hpw.tpm * 89 - (c - ysp.hpw.mmo));
            ysp.hpw.lgn = setTimeout(ysp.hpw.fbx, b)
        }
    };
    this.zys = function() {
        var a = ysp.hpw.llt.qmc("betsel"),
            e = ysp.hpw.llt.qmc("topb"),
            f = (!a || (a && !a.rav())),
            b = (!e || (e && !e.rav())),
            d = 0,
            c = 0;
        ysp.hpw.cul();
        ysp.hpw.tpm++;
        if (f && b) {
            ysp.hpw.obp();
            clearTimeout(ysp.hpw.lgn);
            if (ysp.hpw.flj()) {
                ysp.hpw.jgj(true)
            }
            ysp.hpw.lgn = -1;
            if (typeof ysp.hpw.gpx === "function") {
                ysp.hpw.gpx();
                ysp.hpw.gpx = null
            }
        } else {
            d = new Date().getTime();
            c = 89 + (ysp.hpw.tpm * 89 - (d - ysp.hpw.mmo));
            ysp.hpw.lgn = setTimeout(ysp.hpw.zys, c)
        }
    };
    this.gpx = function() {};
    this.tdu = function() {
        return (this.lmm == 0 && (this.state == ysp.vux.oqx.xiv || (this.state == ysp.vux.oqx.rpg && (this.win + this.srd) == 0) || this.state == ysp.vux.oqx.wcj || (this.state == ysp.vux.oqx.crq && (this.win + this.srd) == 0) || this.state == ysp.vux.oqx.bym || (this.state == ysp.vux.oqx.pri && (this.win + this.srd) == 0) || (this.state == ysp.vux.oqx.mya && this.txz == true)))
    };
    this.mzn = function() {
        if (ysp.hpw.rbp != "" && ysp.hpw.jhh() === false) {
            ysp.hpw.zxl.qbw.tpi("info", "#pme");
            ysp.hpw.zxl.qbw.tpi("info", "#vmq", [0])
        }
    };
    this.llh = function() {
        if (this.state == ysp.vux.oqx.rpg && this.ssb > 0) {
            this.wba.ntp("win" + (this.ssb - 1))
        }
        this.zxl.qbw.tpi("info", "#tto");
        this.zxl.jjr(false);
        this.jgj(false);
        this.nsm(false);
        this.llt.tpi("settings", "#uaw");
        this.zxl.qbw.tpi("setting", "#yzn", [this.llt.tpi("settings", "#pod")]);
        this.llt.tpi("stats", "#coc", [true]);
        this.cul()
    };
    this.osb = function() {
        this.llt.tpi("stats", "#jjr", [false]);
        this.llt.tpi("stats", "#coc", [false]);
        if (this.state != ysp.vux.oqx.mya && this.state != ysp.vux.oqx.cip) {
            this.zxl.jjr(true)
        } else {
            this.zxl.nul(true)
        }
        this.jgj(true);
        this.nsm(true);
        this.cul();
        this.zxl.qbw.tpi("info", "#vmq", [0])
    };
    this.ctw = function() {
        var a = this.zxl.qbw.tpi("bet", "#aqx");
        this.rjm();
        if (this.state == ysp.vux.oqx.rpg && this.ssb > 0) {
            this.wba.ntp("win" + (this.ssb - 1))
        }
        this.zxl.qbw.tpi("info", "#tto");
        this.nsm(false);
        this.zxl.qbw.nhs("settings", "#coc", [true]);
        this.jgj(false);
        this.zxl.jjr(false);
        this.zxl.jbo(true);
        this.llt.tpi("settings", "#ogy", [a, true])
    };
    this.wrc = function() {
        this.llt.tpi("settings", "#uaw");
        if (this.state != ysp.vux.oqx.mya && this.state != ysp.vux.oqx.cip) {
            this.zxl.jjr(true)
        } else {
            this.zxl.nul(true)
        }
        this.jgj(true);
        this.nsm(true);
        this.zxl.qbw.tpi("info", "#vmq", [0])
    };
    this.hzr = function() {
        ysp.hpw.jgj(false);
        ysp.hpw.zxl.jjr(false);
        ysp.hpw.zxl.qbw.tpi("info", "#pme");
        ysp.hpw.llt.tpi("autop", "#ogy")
    };
    this.vrh = function() {
        var a = ysp.hpw.llt.qmc("autop");
        if (a) {
            ysp.hpw.mqs = a.yul();
            ysp.hpw.qaa = (a.iyu() > 0) ? a.iyu() : 0;
            ysp.hpw.pva = (a.wkp() > 0) ? a.wkp() : 0;
            ysp.hpw.gzp = (a.vwc() > 0) ? a.vwc() : 0;
            if (ysp.hpw.mqs <= 0) {
                ysp.hpw.jgj(true);
                ysp.hpw.zxl.jjr(true);
                ysp.hpw.zxl.qbw.tpi("info", "#upj")
            } else {
                ysp.hpw.zxl.qbw.tpi("astart", "#lgb", [(ysp.hpw.mqs >= 0) ? ysp.hpw.mqs : "---"])
            }
        }
    };
    this.ueg = function() {
        if (this.msq() != null && this.mqs >= 0) {
            this.mqs -= 1;
            this.zxl.qbw.tpi("astart", "#lgb", [(this.mqs >= 0) ? this.mqs : "---", true]);
            this.zxl.qbw.tpi("start", "#lgb", [(this.mqs >= 0) ? this.mqs : "---", true])
        }
    };
    this.mny = function() {
        if (ysp.hpw.msq() != null) {
            ysp.hpw.mqs = 0;
            ysp.hpw.qaa = 0;
            ysp.hpw.pva = 0;
            ysp.hpw.gzp = 0;
            ysp.hpw.zxl.qbw.tpi("astart", "#lgb", ["---"]);
            ysp.hpw.zxl.qbw.tpi("start", "#lgb", ["---"])
        }
        ysp.hpw.zxl.qbw.tpi("start", "#uca");
        ysp.hpw.llt.tpi("autop", "#bsk");
        ysp.hpw.llt.tpi("settings", "#mny")
    };
    this.bjb = function() {
        var a = ysp.hpw.llt.qmc("topi");
        ysp.hpw.ols = false;
        ysp.hpw.mny();
        ysp.hpw.zxl.qbw.tpi("astart", "#yzn", [ysp.hpw.ols]);
        if (a) {
            a.exq("auto", ysp.hpw.ols)
        }
    };
    this.lhf = function() {
        ysp.hpw.snw();
        var a = ((ysp.hpw.win + ysp.hpw.srd > 0 && ysp.hpw.fgv || ysp.hpw.win + ysp.hpw.srd === 0) && (ysp.hpw.state == ysp.vux.oqx.xiv || ysp.hpw.state == ysp.vux.oqx.rpg || ysp.hpw.state == ysp.vux.oqx.wcj || ysp.hpw.state == ysp.vux.oqx.crq || ysp.hpw.state == ysp.vux.oqx.bym || ysp.hpw.state == ysp.vux.oqx.pri) || (ysp.hpw.state == ysp.vux.oqx.mya && ysp.hpw.smh == 2 && ysp.hpw.dxc == 2 && ysp.hpw.txz && (ysp.hpw.ong == 5 || ysp.hpw.totalBet != ysp.hpw.xue)) || ysp.hpw.pxj());
        if (ysp.hpw.msq() != null && a === true && (ysp.hpw.mqs <= 0 || (ysp.hpw.lmm - ysp.hpw.ifg() < ysp.hpw.qaa) || (ysp.hpw.pva > 0 && ysp.hpw.lmm >= ysp.hpw.pva) || (ysp.hpw.gzp > 0 && ysp.hpw.win > ysp.hpw.gzp))) {
            if (ysp.hpw.ols === true) {
                ysp.hpw.fzx()
            }
            ysp.hpw.jgj(true);
            ysp.hpw.zxl.qbw.tpi("info", "#upj");
            ysp.hpw.zxl.jjr(true)
        } else {
            ysp.hpw.crl()
        }
    }
}
bpy.prototype = new lnb;

function esk() {
    this.egq = null;
    this.kms = [];
    this.suz = [];
    this.ogv = 0;
    this.kkd = 30;
    this.ghb = 0;
    this.jpx = 0;
    this.uad = function(a) {
        try {
            this.ghb = a.hly;
            this.jpx = a.tgz;
            this.kkd = a.scp
        } catch (b) {
            console.error(b)
        }
    };
    this.yhw = function(d, a, c) {
        this.suz = [];
        for (var b = 0; b < a; b++) {
            this.suz[a - 1 - b] = oqe(d[b])
        }
        if (c) {
            this.suz[a] = -1
        }
    };
    this.cul = function() {
        if (!this.pod()) {
            return
        }
        var b = this.context2D;
        b.save();
        if (this.egq != null) {
            for (var c = 0, a = this.suz.length; c < a; c++) {
                if (this.suz[c] < 0) {
                    b.drawImage(this.egq, this.egq.width - this.ghb, 0, this.ghb, this.jpx, this.x + this.kkd * c, this.y, this.ghb, this.jpx)
                } else {
                    b.drawImage(this.egq, this.ghb * this.kms[this.suz[c]], 0, this.ghb, this.jpx, this.x + this.kkd * c, this.y, this.ghb, this.jpx)
                }
            }
        }
        b.restore()
    }
}
esk.prototype = new fsx;

function xru() {
    this.kms = [];
    this.egq = new Image();
    this.suz = [];
    this.ghb = 0;
    this.jpx = 0;
    this.kea = 36;
    this.ndh = 64;
    this.uad = function(a) {
        try {
            this.ndh = a.mnr;
            this.kea = a.tll;
            this.ghb = a.hly;
            this.jpx = a.tgz
        } catch (b) {
            console.error(b)
        }
    };
    this.yhw = function(b) {
        for (var a = 0; a < 5; a++) {
            this.suz[a] = oqe(b[a])
        }
    };
    this.cul = function() {
        if (!this.pod()) {
            return
        }
        var a = this.context2D;
        a.save();
        for (var b = 0; b < this.suz.length; b++) {
            a.drawImage(this.egq, this.ghb * this.kms[this.suz[b]], 0, this.kea, this.ndh, this.x + this.kea * b, this.y, this.kea, this.ndh)
        }
        a.restore()
    }
}
xru.prototype = new fsx;

function fqn() {
    this.tzf = {
        okl: 32,
        lgh: -1,
        value: "SPACE",
        oqv: null
    };
    this.ojt = {
        okl: 8,
        lgh: -1,
        value: "BACKSPACE",
        oqv: null
    };
    this.yfs = {
        okl: 38,
        lgh: -1,
        value: "\u25B2",
        oqv: null
    };
    this.moy = {
        okl: 40,
        lgh: -1,
        value: "\u25BC",
        oqv: null
    }
}
fqn.prototype = new fcv;

function odb(g, c, f, e, i, a, d, b) {
    this.kcc = g;
    this.lia = f;
    this.yvr = e;
    this.fog = i;
    this.xkd = c;
    this.dxa = a;
    this.epv = d;
    this.tsh = b;
    this.jgg = 1;
    this.smh = 2;
    this.dxc = 1;
    this.nwk = 0;
    this.azg = 0;
    this.cdc = 0;
    this.pmo = [];
    this.ass = function(k) {
        if (this.oku == 0) {
            this.jgg = this.tba(k);
            this.smh = this.tba(k);
            this.dxc = this.tba(k);
            this.nwk = this.tba(k);
            this.azg = this.ora(k);
            this.cdc = this.ora(k);
            for (var j = 0; j < 4; j++) {
                this.pmo[j] = this.ora(k)
            }
        } else {
            if (this.oku == 1) {
                this.nwk = this.tba(k);
                this.azg = this.ora(k);
                this.cdc = this.ora(k);
                for (var j = 0; j < 4; j++) {
                    this.pmo[j] = this.ora(k)
                }
            }
        }
        odb.prototype.ass.call(this, k)
    }
}
odb.prototype = new xgc;

function hjc() {
    this.bih = function(a, b) {
        this.kcc = b;
        this.xyf = a;
        return this
    };
    this.connect = function(c, f, e, g, a, d, b) {
        this.lia = f;
        this.yvr = e;
        this.fog = g;
        this.xkd = c;
        this.epv = d;
        this.tsh = b;
        this.dap = new odb(this.kcc, c, f, e, g, a, d, b);
        this.dap.bih(this)
    };
    this.ijv = function() {
        this.xyf.smh = this.dap.smh;
        this.xyf.dxc = this.dap.dxc;
        this.xyf.nwk = this.dap.nwk;
        this.xyf.azg = this.dap.azg;
        this.xyf.cdc = this.dap.cdc;
        for (var b = 0, a = this.dap.pmo.length; b < a; b++) {
            this.xyf.pmo[b] = this.dap.pmo[b]
        }
        hjc.prototype.ijv.call(this)
    }
}
hjc.prototype = new wvu;

function arf() {
    this.wrw = null;
    this.fnj = 40;
    this.wus = 0;
    this.uad = function(a) {
        arf.prototype.uad.call(this, a);
        try {
            this.fnj = a.huy;
            this.wus = a.hkg
        } catch (b) {
            console.error(b)
        }
    };
    this.sia = function(a, b) {
        this.wrw = a;
        if (b && b === true && this.context2D != null) {
            this.coc(true, true)
        }
    };
    this.cul = function() {
        if (!this.pod() || (this.parent === ysp.hpw && !this.parent.jpj())) {
            return
        }
        var b = this.context2D,
            a = (this.hyg != null) ? 0 : this.x,
            c = (this.hyg != null) ? 0 : this.y;
        b.save();
        if (this.uve && this.egq != null) {
            b.drawImage(this.egq, a, c)
        }
        if (this.cxa != null) {
            ysp.ekr.trw(b, this.cxa, this.wck, a + this.kkd, c + this.fsv, this.width, this.height, this.pxf, this.jow, this.tgp, this.gns, this.oet)
        }
        if (this.wrw != null) {
            ysp.ekr.trw(b, this.wrw, this.wck, a + this.kkd, c + this.wus, this.width, this.height, this.pxf, this.fnj, this.tgp, this.gns, this.oet)
        }
        b.restore();
        if (this.msg && this.hyg) {
            this.msg.drawImage(this.hyg, this.x, this.y)
        }
    }
}
arf.prototype = new dfx;

function oqe(a) {
    var c = ctk(a);
    var b = hhx(a);
    return c + b * 13
}

function ctk(a) {
    return a >> 2
}

function hhx(a) {
    return a & 3
}

function cad() {
    var b = this;
    var a = 2;
    var c = 3;
    this.egq = null;
    this.kms = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38];
    this.dvt = 0;
    this.aih = [];
    this.qbw = null;
    this.ztr = false;
    this.vrs = false;
    this.dmr = 10;
    this.tpm = 0;
    this.vhf = 0;
    this.vzk = 0;
    this.dbx = 0;
    this.iud = 0;
    this.mmo = 0;
    this.pee = false;
    this.poc = 0;
    this.xji = 0;
    this.prp = false;
    this.fqb = [340, 280, 220, 180];
    this.nip = null;
    this.zlm = null;
    this.qxw = null;
    this.ycy = "yellow";
    this.pxf = "verdana";
    this.tgp = "bold";
    this.nie = new pjy();
    this.ybk = new pjy();
    this.jow = 16;
    this.bih = function(d, f, e) {
        cad.prototype.bih.call(this, d, f, e);
        this.eyi()
    };
    this.uki = function(f, d) {
        try {
            this.kuu(f);
            this.fci(f);
            this.nog(f);
            this.ddx(f, d);
            this.ntd(f, d);
            this.snv(f);
            this.gjn(f)
        } catch (g) {
            console.error(g)
        }
    };
    this.uad = function(m) {
        try {
            var r = this.qbw.fbh("bbuttons"),
                q = this.qbw.fbh("sbuttons"),
                l = this.qbw.fbh("displays"),
                j = this.qbw.qmc("card"),
                g = this.qbw.qmc("info"),
                p = this.qbw.qmc("history"),
                f = this.qbw.qmc("winp"),
                d = this.qbw.qmc("sevenp");
            for (var k = 0, n = r.length; k < n; k++) {
                r[k].uad(m.teg)
            }
            for (var k = 0, n = q.length; k < n; k++) {
                q[k].uad(m.eqh)
            }
            for (var k = 0, n = l.length; k < n; k++) {
                l[k].uad(m.display)
            }
            if (j) {
                j.srt(m.aiq.quz);
                j.uad(m.aiq)
            }
            if (g) {
                g.srt(m.qgx.quz);
                g.uad(m.qgx)
            }
            if (f) {
                f.srt(m.lqw.quz);
                f.uad(m.lqw)
            }
            if (p) {
                p.srt(m.xak.quz);
                p.uad(m.xak)
            }
            if (d) {
                d.srt(m.rna.quz);
                d.uad(m.rna)
            }
            this.qbw.tpi("collect", "#srt", [m.jrn]);
            this.qbw.tpi("half", "#srt", [m.eaq]);
            this.qbw.tpi("lowred", "#srt", [m.ycr]);
            this.qbw.tpi("highblack", "#srt", [m.uqt]);
            this.qbw.tpi("creditd", "#srt", [m.hcl]);
            this.qbw.tpi("wind", "#srt", [m.dby]);
            this.nie = m.fsd;
            this.ybk = m.rly;
            this.jow = m.fontSize
        } catch (o) {
            console.error(o)
        }
    };
    this.ygz = function(d) {
        try {
            var p = this.qbw.fbh("buttons"),
                m = this.qbw.fbh("displays"),
                k = this.qbw.qmc("card"),
                j = this.qbw.qmc("info"),
                g = this.qbw.qmc("winp"),
                f = this.qbw.qmc("sevenp");
            this.nip = d.backgroundColor;
            this.zlm = d.tna;
            this.qxw = d.xcl;
            this.ycy = d.gqn;
            this.pxf = d.font;
            this.tgp = d.nkj;
            for (var l = 0, n = p.length; l < n; l++) {
                p[l].ygz(d.rvj)
            }
            for (var l = 0, n = m.length; l < n; l++) {
                m[l].ygz(d.display)
            }
            if (k) {
                k.ygz(d.aiq)
            }
            if (j) {
                j.ygz(d.qgx)
            }
            if (g) {
                g.ygz(d.lqw)
            }
            if (f) {
                f.ygz(d.rna)
            }
        } catch (o) {
            console.error(o)
        }
    };
    this.xba = function(o, n) {
        var l = o - this.x,
            k = n - this.y,
            m = this.qbw.fbh("buttons");
        for (var f = 0, g = m.length; f < g; f++) {
            var d = m[f];
            if (l >= d.x && l <= d.x + d.width && k >= d.y && k <= d.y + d.height && d.pod(true)) {
                if (d.aqx() && !d.pqi()) {
                    d.evd(true, false, true);
                    this.cul();
                    this.parent.wba.ntp("btn");
                    this.parent.wba.dyw("btn");
                    d.jan();
                    for (var e = 0; e < g; e++) {
                        m[e].kbg(true)
                    }
                    return true
                }
            }
        }
        return false
    };
    this.opg = function() {
        var g = this.qbw.fbh("buttons");
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.rqv() == true) {
                e.evd(false, true);
                return true
            }
        }
        return false
    };
    this.zfi = function(l) {
        var k = this.qbw.fbh("buttons");
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (f.zzo == l) {
                if (f.aqx() && !f.pqi()) {
                    f.evd(true, false, true);
                    this.cul();
                    this.parent.wba.ntp("btn");
                    this.parent.wba.dyw("btn");
                    f.jan();
                    for (var e = 0; e < d; e++) {
                        k[e].kbg(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.unq = function() {
        var g = this.qbw.fbh("buttons");
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.rqv() == true) {
                e.evd(false, true);
                return true
            }
        }
        return false
    };
    this.lab = function(g, e, d, f) {
        this.qbw.tpi("creditd", "#zev", [this.parent.avr(g), false]);
        if (!this.parent.coz) {
            this.qbw.tpi("wind", "#zev", [this.parent.avr(e + this.parent.cdc), false])
        } else {
            this.qbw.tpi("wind", "#zev", [this.parent.avr(e), false])
        }
        this.qbw.tpi("winp", "#zev", [this.parent.thh(e), false]);
        this.qbw.tpi("winp", "#sia", [this.parent.myo[d - 1], false]);
        this.sey(this.parent.azg);
        if (f && f === true) {
            this.cul()
        }
    };
    this.mwc = function(e, d) {
        this.aih = e;
        this.qbw.tpi("history", "#yhw", [e]);
        this.qbw.tpi("card", "#yhw", [e, d, false]);
        this.dvt = d
    };
    this.sey = function(g) {
        var e = this.qbw.qmc("sevenp");
        if (e) {
            for (var f = 0; f < g; f++) {
                e.uvh[f] = true
            }
            for (var f = g, d = e.uvh.length; f < d; f++) {
                e.uvh[f] = false
            }
        }
    };
    this.ycw = function(d) {
        if (d == c) {
            this.prp = false
        } else {
            this.prp = true
        }
    };
    this.neq = function() {
        if (this.parent.cdc > 0) {
            this.parent.wba.dyw("gamblewin7")
        } else {
            if (this.parent.win > 0) {
                this.parent.wba.dyw("gamblewin")
            }
        }
        setTimeout(b.odl, 1000)
    };
    this.odl = function() {
        b.cul();
        b.lmj();
        b.jjr(true)
    };
    this.ogy = function() {
        this.qbw.tpi("info", "#coc", [true]);
        this.coc(true, true);
        this.lmj();
        this.qbw.tpi("info", "#vmq", [0])
    };
    this.lmj = function() {
        this.qbw.tpi("card", "#yhw", [this.aih, this.dvt, true]);
        this.cul();
        this.prp = true;
        this.poc = setInterval(b.rco, (b.dvt < 3) ? b.fqb[b.dvt] : b.fqb[3])
    };
    this.rco = function() {
        b.prp = !b.prp;
        b.qbw.tpi("highblack", "#yzn", [b.prp]);
        b.qbw.tpi("lowred", "#yzn", [!b.prp]);
        if (b.prp) {
            b.parent.wba.dyw("blink1");
            b.parent.wba.ntp("blink2")
        } else {
            b.parent.wba.dyw("blink2");
            b.parent.wba.ntp("blink1")
        }
        b.uyc()
    };
    this.eab = function() {
        clearInterval(this.poc);
        this.parent.wba.ntp("blink1");
        this.parent.wba.ntp("blink2");
        this.qbw.tpi("highblack", "#yzn", [false]);
        this.qbw.tpi("lowred", "#yzn", [false])
    };
    this.mkd = function(e, d) {
        this.qbw.tpi("info", "#efz", [d]);
        this.qbw.tpi("info", "#hgk", [e, d])
    };
    this.eyi = function() {
        this.qbw = new irf();
        this.qbw.bih();
        this.qbw.vpa("buttons");
        this.qbw.vpa("displays");
        this.qbw.vpa("bbuttons");
        this.qbw.vpa("sbuttons")
    };
    this.kuu = function(d) {
        this.qbw.zth("collect", this.rda(d.jrn, this.parent.language.ugt, this.parent.wba.vjf("btn"), (!this.parent.coz) ? this.parent.wjo.tzf : null, this.dsf, d.teg), ["buttons", "bbuttons"]);
        this.qbw.zth("half", this.rda(d.eaq, this.parent.language.nkd, this.parent.wba.vjf("btn_s"), (!this.parent.coz) ? this.parent.wjo.ojt : null, this.gsz, d.eqh), ["buttons", "sbuttons"]);
        this.qbw.zth("lowred", this.rda(d.ycr, this.parent.language.xos, this.parent.wba.vjf("btn_s"), (!this.parent.coz) ? this.parent.wjo.moy : null, this.vzn, d.eqh), ["buttons", "sbuttons"]);
        this.qbw.zth("highblack", this.rda(d.uqt, this.parent.language.kmy, this.parent.wba.vjf("btn_s"), (!this.parent.coz) ? this.parent.wjo.yfs : null, this.wip, d.eqh), ["buttons", "sbuttons"])
    };
    this.fci = function(d) {
        this.qbw.zth("creditd", this.nxs(d.hcl, (this.parent.jhh()) ? this.parent.language.xup : this.parent.language.lmm, this.parent.avr(this.parent.lmm), d.display), ["displays"]);
        this.qbw.zth("wind", this.nxs(d.dby, this.parent.language.win, this.parent.avr(this.parent.win), d.display), ["displays"])
    };
    this.nog = function(d) {
        var e = new ymu();
        e.bih(d.qgx.quz, this.context2D);
        e.parent = this;
        e.uad(d.qgx);
        this.qbw.zth("info", e)
    };
    this.ddx = function(f, d) {
        var e = new esk();
        e.bih(f.aiq.quz, this.context2D);
        e.egq = d;
        e.kms = this.kms;
        e.uad(f.aiq);
        this.qbw.zth("card", e)
    };
    this.ntd = function(e, d) {
        var f = new xru();
        f.bih(e.xak.quz, this.context2D);
        f.egq = d;
        f.kms = this.kms;
        f.uad(e.xak);
        this.qbw.zth("history", f)
    };
    this.gjn = function(e) {
        var d = new qqa();
        d.bih(e.rna.quz, null, this.context2D);
        d.parent = this;
        d.gyn.push(this.parent.wba.vjf("seven1"));
        d.gyn.push(this.parent.wba.vjf("seven2"));
        d.gyn.push(this.parent.wba.vjf("seven3"));
        d.gyn.push(this.parent.wba.vjf("seven4"));
        d.qch = true;
        d.rsx = this.parent.pmo;
        d.uad(e.rna);
        this.qbw.zth("sevenp", d)
    };
    this.snv = function(d) {
        var e = new arf();
        e.bih(d.lqw.quz, null, this.context2D, this.parent.wba.vjf("winpanel"), "");
        e.parent = this;
        e.uad(d.lqw);
        this.qbw.zth("winp", e)
    };
    this.rda = function(g, k, j, e, i, f) {
        var d = new nny();
        d.bih(g, this.context2D, null, j, null, k);
        d.parent = this;
        d.jan = i;
        d.uad(f);
        if (e) {
            d.zzo = e.okl
        }
        return d
    };
    this.nxs = function(e, i, g, d) {
        var f = new xcm();
        f.bih(e, this.context2D, null, i, g);
        f.parent = this;
        f.egq = this.parent.wba.vjf("display_effect");
        f.uad(d);
        return f
    };
    this.jjr = function(d) {
        this.qbw.nhs("buttons", "#cgv", [d])
    };
    this.dsf = function() {
        b.jjr(false);
        b.parent.rlv.ugt()
    };
    this.gsz = function() {
        b.jjr(false);
        b.parent.rlv.nkd()
    };
    this.vzn = function() {
        b.jjr(false);
        b.prp = false;
        b.eab();
        b.parent.rlv.kyj(c)
    };
    this.wip = function() {
        b.jjr(false);
        b.prp = true;
        b.eab();
        b.parent.rlv.kyj(a)
    };
    this.sjh = function() {
        b.qbw.tpi("info", "#tto");
        setTimeout(b.dsz, 10)
    };
    this.dsz = function() {
        b.ztr = false;
        b.vrs = (b.parent.win + b.parent.cdc > b.parent.totalBet) ? true : false;
        b.dmr = 10;
        b.tpm = 0;
        b.vhf = b.parent.win + b.parent.cdc;
        b.vzk = b.parent.lmm - (b.parent.win + b.parent.cdc);
        b.dbx = 0;
        b.iud = b.parent.win + b.parent.cdc;
        b.mmo = new Date().getTime();
        b.pee = true;
        var d = 0;
        if (b.parent.cdc > 0) {
            b.qot(b.parent.thh(b.parent.win + b.parent.cdc));
            d = 400
        }
        b.xji = setTimeout(b.xpb, b.parent.oea + d)
    };
    this.xpb = function() {
        var f = Math.round(b.iud / b.dmr),
            d = 0,
            e = 0;
        if (b.iud > 0) {
            if (!b.ztr) {
                b.parent.wba.ntp("collect");
                b.parent.wba.dyw("collect");
                b.ztr = true
            }
            b.iud -= f;
            if (b.iud < 0) {
                b.iud = 0
            }
            b.qbw.tpi("wind", "#zev", [b.parent.avr(b.vhf - ((b.parent.win + b.parent.cdc) - b.iud)), true]);
            b.qbw.tpi("creditd", "#zev", [b.parent.avr(b.vzk + ((b.parent.win + b.parent.cdc) - b.iud)), true]);
            b.qot(b.parent.thh(b.vhf - ((b.parent.win + b.parent.cdc) - b.iud)));
            b.tpm++;
            b.dmr -= 1;
            d = b.parent.otf;
            e = new Date().getTime();
            d = b.parent.oea + (b.tpm * b.parent.oea - (e - b.mmo));
            b.xji = setTimeout(b.xpb, d)
        } else {
            b.parent.wba.ntp("collect");
            b.parent.wba.dyw("collectend");
            b.pee = false;
            clearTimeout(b.xji);
            setTimeout(b.parent.nxc, 100)
        }
    };
    this.qot = function(d) {
        this.qbw.tpi("winp", "#zev", [d, true])
    };
    this.cul = function(p, n, q, l) {
        if (!this.pod() || !this.parent.jpj()) {
            return
        }
        var g = (p != null && n != null && q != null && l != null),
            r = this.context2D,
            f = this.hyg,
            o = null,
            d = this.qbw.dla(),
            e = this.qbw.qmc("sevenp"),
            k = this.parent.wba.vjf("btn_back");
        r.save();
        if (g) {
            r.beginPath();
            r.rect(p, n, q, l);
            r.closePath();
            r.clip()
        }
        if (k) {
            r.drawImage(this.egq, (this.nie.x == 0) ? this.nie.width : 0, this.height - k.height);
            if (e) {
                e.tdq(f)
            }
            o = r.createLinearGradient(this.nie.x, this.nie.y, this.nie.x + this.nie.width, this.nie.y);
            o.addColorStop(0.2, this.zlm);
            o.addColorStop(1, this.qxw);
            r.fillStyle = o;
            r.save();
            if (this.parent.odx === ysp.gof.ohj) {
                r.translate(this.nie.width / 2, this.nie.height / 2);
                r.rotate(Math.PI);
                r.translate(-this.nie.width / 2, -this.nie.height / 2)
            }
            r.fillRect(this.nie.x, this.nie.y, this.nie.width, this.nie.height);
            r.drawImage(k, this.nie.x, this.nie.y, this.nie.width, this.nie.height);
            r.restore()
        } else {
            r.drawImage(this.egq, 0, 0);
            if (e) {
                e.tdq(f)
            }
            if (this.nip != null) {
                ysp.ekr.jry(r, this.nie.x, this.nie.y, this.nie.width, this.nie.height, this.nip, 1)
            }
        }
        if (!(this.parent.coz && (this.parent.state == ysp.vux.oqx.wcj || this.parent.state == ysp.vux.oqx.qsn || this.parent.state == ysp.vux.oqx.bym))) {
            this.hsn(r)
        }
        for (var j = 0, m = d.length; j < m; j++) {
            d[j].cul()
        }
        r.restore();
        if (this.msg && this.hyg) {
            if (g) {
                this.msg.drawImage(this.hyg, p, n, q, l, this.x + p, this.y + n, q, l)
            } else {
                this.msg.drawImage(this.hyg, this.x, this.y)
            }
        }
    };
    this.uyc = function() {
        var d = this.context2D,
            e = this.parent.wba.vjf("btn_back");
        d.save();
        d.beginPath();
        d.rect(this.ybk.x, this.ybk.y, this.ybk.width, this.ybk.height);
        d.closePath();
        d.clip();
        if (e) {
            d.drawImage(this.egq, (this.nie.x == 0) ? this.nie.width : 0, this.height - e.height)
        } else {
            d.drawImage(this.egq, 0, 0)
        }
        this.hsn(d);
        d.restore();
        if (this.msg && this.hyg) {
            this.msg.drawImage(this.hyg, this.x, this.y)
        }
    };
    this.hsn = function(d) {
        var e = (this.prp) ? this.parent.language.jav : this.parent.language.jaf;
        if (this.prp) {
            ysp.ekr.trw(d, e, this.ycy, this.ybk.x, this.ybk.y, this.ybk.width, this.jow, this.pxf, this.jow, this.tgp)
        } else {
            ysp.ekr.trw(d, e, this.ycy, this.ybk.x, this.ybk.y + this.ybk.height - this.jow - 2, this.ybk.width, this.jow, this.pxf, this.jow, this.tgp)
        }
    }
}
cad.prototype = new fsx;

function qqa() {
    this.gyn = [];
    this.rsx = [];
    this.uvh = [false, false, false, false];
    this.eun = 500;
    this.qch = false;
    this.bac = null;
    this.stj = null;
    this.frc = 1;
    this.pxf = "arial";
    this.tgp = "bold";
    this.ycy = "red";
    this.jow = 14;
    this.bjk = [];
    this.ygz = function(a) {
        try {
            this.pxf = a.font;
            this.tgp = a.nkj, this.ycy = a.gqn
        } catch (b) {
            console.error(b)
        }
    };
    this.uad = function(a) {
        try {
            this.jow = a.fontSize;
            this.bjk = a.tyn
        } catch (b) {
            console.error(b)
        }
    };
    this.tdq = function(a) {
        if (this.bac == null) {
            this.bac = document.createElement("canvas");
            this.bac.width = this.width;
            this.bac.height = this.height;
            this.stj = this.bac.getContext("2d");
            this.stj.save();
            this.stj.drawImage(a, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height);
            this.stj.restore()
        }
    };
    this.pln = function(a, b) {
        this.frc = a;
        if (b && b === true) {
            this.cul()
        }
    };
    this.cul = function() {
        if (!this.pod() || (this.parent === ysp.hpw && !this.parent.jpj())) {
            return
        }
        var c = this.context2D,
            b = (this.hyg != null) ? 0 : this.x,
            e = (this.hyg != null) ? 0 : this.y;
        c.save();
        if (this._backgroundBackbuffer != null) {
            c.drawImage(this.bac, b, e)
        }
        for (var d = 0, a = this.gyn.length; d < a; d++) {
            if (this.gyn[d] != null) {
                if (this.uvh[d]) {
                    c.drawImage(this.gyn[d], 0, this.gyn[d].height / 2, this.gyn[d].width, this.gyn[d].height / 2, b + this.bjk[d].x, e + this.bjk[d].y, this.bjk[d].width, this.bjk[d].height);
                    if (this.qch) {
                        ysp.ekr.trw(c, ysp.hpw.thh(this.rsx[d] * this.frc), this.ycy, b + this.bjk[d].x, e + this.bjk[d].y + this.bjk[d].height, this.bjk[d].width, this.jow, this.pxf, this.jow, this.tgp)
                    }
                } else {
                    c.drawImage(this.gyn[d], 0, 0, this.gyn[d].width, this.gyn[d].height / 2, b + this.bjk[d].x, e + this.bjk[d].y, this.bjk[d].width, this.bjk[d].height);
                    if (this.qch) {
                        ysp.ekr.trw(c, ysp.hpw.thh(this.rsx[d] * this.frc), this.ycy, b + this.bjk[d].x, e + this.bjk[d].y + this.bjk[d].height, this.bjk[d].width, this.jow, this.pxf, this.jow, this.tgp)
                    }
                }
            }
        }
        if (!this.qch) {
            ysp.ekr.trw(c, ysp.hpw.thh(this.eun * this.frc), this.ycy, b + this.bjk[3].x + this.bjk[3].width, e + this.bjk[3].y + this.jow, this.bjk[3].width, this.bjk[3].height, this.pxf, this.jow, this.tgp)
        }
        c.restore();
        if (this.msg && this.hyg) {
            this.msg.drawImage(this.hyg, this.x, this.y)
        }
    }
}
qqa.prototype = new fsx;

function lzj() {
    var a = this;
    this.lwl = -1;
    this.dcq = -1;
    this.prp = false;
    this.poc = 0;
    this.vvu = "rgb(0,0,40)";
    this.kio = [];
    this.ynv = "red";
    this.lwo = "yellow";
    this.kuf = 3;
    this.ygz = function(b) {
        lzj.prototype.ygz.call(this, b);
        try {
            this.kio = b.wjh;
            this.vvu = b.borderColor;
            this.ynv = b.jfz;
            this.lwo = b.mzb
        } catch (c) {
            console.error(c)
        }
    };
    this.uad = function(b) {
        lzj.prototype.uad.call(this, b);
        try {
            this.kuf = b.qwc
        } catch (c) {
            console.error(c)
        }
    };
    this.zgi = function(c, b) {
        this.lwl = this.syi.length - c;
        this.dcq = this.syi.length - b;
        this.prp = true;
        this.parent.cul();
        this.poc = setInterval(a.xst, 2000)
    };
    this.xst = function() {
        a.prp = !a.prp;
        a.parent.cul()
    };
    this.stop = function() {
        clearInterval(this.poc);
        this.dcq = -1;
        this.lwl = -1;
        this.prp = false;
        this.cul()
    };
    this.cul = function() {
        if (!this.pod() || !this.parent.jpj()) {
            return
        }
        var c = this.context2D,
            e = this.height - 2 * this.fqe;
        tw = this.width - 2 * this.fqe;
        jqq = Math.round(e / this.syi.length);
        zrk = (this.jow < jqq) ? this.jow : jqq - 2;
        c.save();
        if (this.egq != null) {
            c.drawImage(this.egq, 0, 0)
        }
        ysp.ekr.jry(c, 0, 0, this.width, this.height, null, 1, this.vvu, this.kuf, 1);
        for (var d = 0, b = this.syi.length; d < b; d++) {
            if (d != this.dcq && d != this.lwl) {
                if (d == 0) {
                    this.ycy = this.kio[0]
                } else {
                    if (d < 3) {
                        this.ycy = this.kio[1]
                    } else {
                        if (d < 5) {
                            this.ycy = this.kio[2]
                        } else {
                            this.ycy = this.kio[3]
                        }
                    }
                }
                ysp.ekr.pyk(c, this.syi[d], this.ycy, 0, this.fqe + jqq * (d), this.width, jqq, this.pxf, zrk, this.tgp, this.fqe);
                ysp.ekr.vsi(c, this.parent.thh(this.lqo[d]), this.ycy, 0, this.fqe + jqq * (d), this.width, jqq, this.pxf, zrk, this.tgp, this.fqe)
            } else {
                ysp.ekr.jry(c, this.fqe, this.fqe + jqq * d, this.width - 2 * this.fqe, jqq, this.lwo, 1);
                if (this.prp && d == this.dcq) {
                    ysp.ekr.pyk(c, this.parent.language.bkl, this.ynv, 0, this.fqe + jqq * (d), this.width, jqq, this.pxf, zrk, this.tgp, this.fqe)
                } else {
                    ysp.ekr.pyk(c, this.syi[d], this.ynv, 0, this.fqe + jqq * (d), this.width, jqq, this.pxf, zrk, this.tgp, this.fqe)
                }
                ysp.ekr.vsi(c, this.parent.thh(this.lqo[d]), this.ynv, 0, this.fqe + jqq * (d), this.width, jqq, this.pxf, zrk, this.tgp, this.fqe)
            }
        }
        c.restore();
        if (this.msg && this.hyg) {
            this.msg.drawImage(this.hyg, this.x, this.y)
        }
    }
}
lzj.prototype = new jli;

function tvy() {
    this.pad = [];
    this.ysb = "yellow";
    this.wqf = "verdana";
    this.gwx = "bold italic";
    this.ios = "white";
    this.lew = 12;
    this.gus = new pjy(0, 530, 800, 20);
    this.hjl = [];
    this.ygz = function(a) {
        tvy.prototype.ygz.call(this, a);
        try {
            this.wqf = a.osi;
            this.gwx = a.oup;
            this.ios = a.cnc
        } catch (b) {
            console.error(b)
        }
    };
    this.uad = function(a) {
        tvy.prototype.uad.call(this, a);
        try {
            this.hjl = a.ssn;
            this.gus = a.ypx;
            this.lew = a.tmt
        } catch (b) {
            console.error(b)
        }
    };
    this.cul = function() {
        if (!this.pod()) {
            return
        }
        var a = this.context2D;
        a.save();
        if (this.gns) {
            a.strokeStyle = this.gns
        }
        a.lineJoin = "round";
        a.lineCap = "round";
        a.lineWidth = this.tkd;
        a.font = this.tgp + " " + this.jow + "px " + this.pxf;
        a.textBaseline = "bottom";
        a.drawImage(this.egq, 0, 0);
        a.textAlign = "left";
        a.fillStyle = this.ysb;
        for (var b = 0; b < this.jqi.length; b++) {
            this.isx(this.pad[b], this.hjl[b], this.jow, this.pxf)
        }
        a.fillStyle = this.ycy;
        for (var b = 0; b < this.jqi.length; b++) {
            this.isx(this.jqi[b], this.nfb[b], this.jow, this.pxf)
        }
        ysp.ekr.trw(a, ysp.hpw.oxp(ysp.hpw.language.jmt), this.ios, this.gus.x, this.gus.y, this.gus.width, this.gus.height, this.wqf, this.lew, this.gwx);
        a.restore();
        if (this.msg && this.hyg) {
            this.msg.drawImage(this.hyg, this.x, this.y)
        }
    }
}
tvy.prototype = new hxx;

function iey() {
    this.xkd = "MultiCardWin";
    this.pwy = "Multi Win";
    this.kgj = ysp.lct.value30 + "/multicardwin/images/";
    this.ifj = ysp.lct.value30 + "/multicardwin/sounds/";
    this.phg = 14;
    this.nwk = -1;
    this.azg = 0;
    this.cdc = 0;
    this.aeu = null;
    this.jnj = null;
    this.rna = null;
    this.pmo = [];
    this.uqy = function() {
        this.myo = [this.language.qki, this.language.lsi, this.language.xxx, this.language.pzx, this.language.tsj, this.language.dhl, this.language.ezj, this.language.ksx, this.language.vux, this.language.zpp, this.language.loj, this.language.upt, this.language.zvs, this.language.ysx];
        this.avv = [1, 2, 3, 4, 5, 7, 10, 15, 40, 50, 90, 100, 500, 1000];
        this.kms = [-1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 52, -1, -1, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, -1, -1, -1, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 53];
        this.fpv = [79];
        this.dul = [15];
        this.eld("1_0_61")
    };
		gameController=this;
    this.srh = function() {
        this.rlv = new hjc().bih(this, ysp.lct.value6)
    };
    this.lgo = function() {
        this.wjo = new fqn()
    };
    this.jyh = function() {
        this.gjn()
    };
    this.xqr = function() {
        this.pbq = new cad();
        this.pbq.bih(this.gof.kyj.quz, null, this.context2D);
        this.pbq.parent = this;
        this.pbq.egq = this.wba.vjf("g_back");
        this.pbq.uki(this.gof.kyj, this.wba.vjf("cards"));
        this.pbq.mkd(this.dxj, 0);
        this.pbq.uad(this.gof.kyj);
        this.pbq.ygz(this.style.kyj);
        this.pbq.coc(false)
    };
    this.snv = function() {
        var a = new arf();
        a.bih(this.gof.lqw.quz, this.context2D, null, this.wba.vjf("winpanel"), "");
        a.parent = this;
        a.uad(this.gof.lqw);
        a.ygz(this.style.lqw);
        a.coc(false);
        this.llt.zth("winp", a)
    };
    this.jhy = function() {
        var a = new lzj();
        a.bih(this.gof.mgi.quz, null, this.context2D);
        a.parent = this;
        a.egq = this.wba.vjf("paytable");
        a.uad(this.gof.mgi);
        a.ygz(this.style.mgi);
        a.roe(this.avv);
        a.rxz(this.myo);
        this.llt.zth("paytable", a)
    };
    this.gjn = function() {
        this.rna = new qqa();
        this.rna.bih(this.gof.rna.quz, this.context2D);
        this.rna.parent = this;
        this.rna.gyn.push(this.wba.vjf("seven1"));
        this.rna.gyn.push(this.wba.vjf("seven2"));
        this.rna.gyn.push(this.wba.vjf("seven3"));
        this.rna.gyn.push(this.wba.vjf("seven4"));
        this.rna.uvh = [true, true, true, true];
        this.rna.ygz(this.style.rna);
        this.rna.uad(this.gof.rna)
    };
    this.ydo = function() {
        this.dzr();
        this.orc();
        iey.prototype.ydo.call(this)
    };
    this.dzr = function() {
        this.aeu = new tvy();
        this.aeu.bih(this.gof.rtp.win.quz, null, this.igz.context2D, this.wba.vjf("help"));
        this.aeu.parent = this.igz;
        this.aeu.jqi[0] = this.language.yon;
        this.aeu.jqi[1] = this.language.rwr;
        this.aeu.jqi[2] = this.language.brm;
        this.aeu.jqi[3] = this.language.yux;
        this.aeu.jqi[4] = this.language.dfd;
        this.aeu.jqi[5] = this.language.ehx;
        this.aeu.jqi[6] = this.language.wat;
        this.aeu.jqi[7] = this.language.wpv;
        this.aeu.jqi[8] = this.language.dqd;
        this.aeu.jqi[9] = this.language.bhn;
        this.aeu.jqi[10] = this.language.gue;
        this.aeu.jqi[11] = this.language.lvf;
        this.aeu.jqi[12] = this.language.xah;
        this.aeu.jqi[13] = this.language.oop;
        this.aeu.pad[0] = this.language.ysx;
        this.aeu.pad[1] = this.language.zvs;
        this.aeu.pad[2] = this.language.upt;
        this.aeu.pad[3] = this.language.loj;
        this.aeu.pad[4] = this.language.zpp;
        this.aeu.pad[5] = this.language.vux;
        this.aeu.pad[6] = this.language.ksx;
        this.aeu.pad[7] = this.language.ezj;
        this.aeu.pad[8] = this.language.dhl;
        this.aeu.pad[9] = this.language.tsj;
        this.aeu.pad[10] = this.language.pzx;
        this.aeu.pad[11] = this.language.xxx;
        this.aeu.pad[12] = this.language.lsi;
        this.aeu.pad[13] = this.language.qki;
        this.aeu.ygz(this.style.rtp.win);
        this.aeu.uad(this.gof.rtp.win);
        if (!this.llt.qmc("tops")) {
            this.igz.dmn(this.aeu)
        }
    };
    this.orc = function() {
        var a = this.llt.qmc("tops");
        if (a) {
            this.jnj = new tvy();
            this.jnj.bih(this.gof.top.win.quz, null, a.context2D, this.wba.vjf("help_top"));
            this.jnj.parent = a;
            this.jnj.jqi[0] = this.language.yon;
            this.jnj.jqi[1] = this.language.rwr;
            this.jnj.jqi[2] = this.language.brm;
            this.jnj.jqi[3] = this.language.yux;
            this.jnj.jqi[4] = this.language.dfd;
            this.jnj.jqi[5] = this.language.ehx;
            this.jnj.jqi[6] = this.language.wat;
            this.jnj.jqi[7] = this.language.wpv;
            this.jnj.jqi[8] = this.language.dqd;
            this.jnj.jqi[9] = this.language.bhn;
            this.jnj.jqi[10] = this.language.gue;
            this.jnj.jqi[11] = this.language.lvf;
            this.jnj.jqi[12] = this.language.xah;
            this.jnj.jqi[13] = this.language.oop;
            this.jnj.pad[0] = this.language.ysx;
            this.jnj.pad[1] = this.language.zvs;
            this.jnj.pad[2] = this.language.upt;
            this.jnj.pad[3] = this.language.loj;
            this.jnj.pad[4] = this.language.zpp;
            this.jnj.pad[5] = this.language.vux;
            this.jnj.pad[6] = this.language.ksx;
            this.jnj.pad[7] = this.language.ezj;
            this.jnj.pad[8] = this.language.dhl;
            this.jnj.pad[9] = this.language.tsj;
            this.jnj.pad[10] = this.language.pzx;
            this.jnj.pad[11] = this.language.xxx;
            this.jnj.pad[12] = this.language.lsi;
            this.jnj.pad[13] = this.language.qki;
            this.jnj.ygz(this.style.rtp.win);
            this.jnj.uad(this.gof.top.win);
            a.dmn(this.jnj)
        }
    };
    this.uzv = function() {
        this.dxj[0] = this.language.dqp;
        this.pbq.mkd(this.dxj, 0);
        this.pbq.qbw.tpi("creditd", "#sia", [(this.jhh()) ? this.language.xup : this.language.lmm, false]);
        this.pbq.qbw.tpi("wind", "#sia", [this.language.win, false]);
        this.pbq.qbw.tpi("collect", "#zev", [this.language.ugt, false]);
        this.pbq.qbw.tpi("half", "#zev", [this.language.nkd, false]);
        this.pbq.qbw.tpi("lowred", "#zev", [this.language.xos, false]);
        this.pbq.qbw.tpi("highblack", "#zev", [this.language.kmy, false]);
        if (this.aeu != null) {
            this.aeu.jqi[0] = this.language.yon;
            this.aeu.jqi[1] = this.language.rwr;
            this.aeu.jqi[2] = this.language.brm;
            this.aeu.jqi[3] = this.language.yux;
            this.aeu.jqi[4] = this.language.dfd;
            this.aeu.jqi[5] = this.language.ehx;
            this.aeu.jqi[6] = this.language.wat;
            this.aeu.jqi[7] = this.language.wpv;
            this.aeu.jqi[8] = this.language.dqd;
            this.aeu.jqi[9] = this.language.bhn;
            this.aeu.jqi[10] = this.language.gue;
            this.aeu.jqi[11] = this.language.lvf;
            this.aeu.jqi[12] = this.language.xah;
            this.aeu.jqi[13] = this.language.oop;
            this.aeu.pad[0] = this.language.ysx;
            this.aeu.pad[1] = this.language.zvs;
            this.aeu.pad[2] = this.language.upt;
            this.aeu.pad[3] = this.language.loj;
            this.aeu.pad[4] = this.language.zpp;
            this.aeu.pad[5] = this.language.vux;
            this.aeu.pad[6] = this.language.ksx;
            this.aeu.pad[7] = this.language.ezj;
            this.aeu.pad[8] = this.language.dhl;
            this.aeu.pad[9] = this.language.tsj;
            this.aeu.pad[10] = this.language.pzx;
            this.aeu.pad[11] = this.language.xxx;
            this.aeu.pad[12] = this.language.lsi;
            this.aeu.pad[13] = this.language.qki
        }
        if (this.jnj != null) {
            this.jnj.jqi[0] = this.language.yon;
            this.jnj.jqi[1] = this.language.rwr;
            this.jnj.jqi[2] = this.language.brm;
            this.jnj.jqi[3] = this.language.yux;
            this.jnj.jqi[4] = this.language.dfd;
            this.jnj.jqi[5] = this.language.ehx;
            this.jnj.jqi[6] = this.language.wat;
            this.jnj.jqi[7] = this.language.wpv;
            this.jnj.jqi[8] = this.language.dqd;
            this.jnj.jqi[9] = this.language.bhn;
            this.jnj.jqi[10] = this.language.gue;
            this.jnj.jqi[11] = this.language.lvf;
            this.jnj.jqi[12] = this.language.xah;
            this.jnj.jqi[13] = this.language.oop;
            this.jnj.pad[0] = this.language.ysx;
            this.jnj.pad[1] = this.language.zvs;
            this.jnj.pad[2] = this.language.upt;
            this.jnj.pad[3] = this.language.loj;
            this.jnj.pad[4] = this.language.zpp;
            this.jnj.pad[5] = this.language.vux;
            this.jnj.pad[6] = this.language.ksx;
            this.jnj.pad[7] = this.language.ezj;
            this.jnj.pad[8] = this.language.dhl;
            this.jnj.pad[9] = this.language.tsj;
            this.jnj.pad[10] = this.language.pzx;
            this.jnj.pad[11] = this.language.xxx;
            this.jnj.pad[12] = this.language.lsi;
            this.jnj.pad[13] = this.language.qki
        }
    };
    this.hes = function() {
        this.dxj = [];
        this.dxj[0] = this.language.dqp
    };
    this.tca = function() {
        if (this.aeu) {
            this.aeu.srt(this.gof.rtp.win.quz);
            this.aeu.uad(this.gof.rtp.win)
        }
        this.qsr()
    };
    this.qsr = function() {
        if (this.rna) {
            this.rna.srt(this.gof.rna.quz);
            this.rna.uad(this.gof.rna)
        }
    };
    this.jdv = function() {
        if (this.pbq) {
            this.pbq.srt(this.gof.kyj.quz);
            this.pbq.uad(this.gof.kyj)
        }
    };
    this.oak = function() {
        iey.prototype.oak.call(this);
        var a = this.kgj + this.gof.type + "/";
        this.wba.bsf("paytable", a + "paytable.png");
        this.wba.bsf("help_top", a + "help_top.jpg");
        this.wba.bsf("logo", a + "logo.png");
        this.wba.bsf("seven1", a + "seven1.png");
        this.wba.bsf("seven2", a + "seven2.png");
        this.wba.bsf("seven3", a + "seven3.png");
        this.wba.bsf("seven4", a + "seven4.png")
    };
    this.off = function() {
        iey.prototype.off.call(this);
        var a = this.ifj;
        this.wba.vem("gamblewin", null, false, a + "win");
        this.wba.vem("gamblewin7", null, false, a + "winseven");
        this.wba.vem("blink1", null, false, a + "hi");
        this.wba.vem("blink2", null, false, a + "low")
    };
    this.cax = function(b) {
        var a = this.llt.qmc("winp");
        if (a) {
            a.zev(this.thh(b), false);
            a.sia(this.myo[this.ssb - 1], false);
            a.coc(true)
        }
        this.llt.tpi("paytable", "#coc", [false])
    };
    this.rjm = function() {
        this.llt.tpi("paytable", "#coc", [true]);
        iey.prototype.rjm.call(this)
    };
    this.oln = function() {
        this.ywc();
        iey.prototype.oln.call(this)
    };
    this.xvs = function() {
        iey.prototype.xvs.call(this);
        if (this.state == ysp.vux.oqx.mya || this.state == ysp.vux.oqx.cip) {
            this.llt.tpi("paytable", "#zgi", [this.ssb, this.nwk]);
            if (this.state == ysp.vux.oqx.cip) {
                this.zxl.qbw.tpi("exit", "#cgv", [true])
            }
        }
    };
    this.gfl = function() {
        this.zxl.qbw.tpi("info", "#ise", ["", true]);
        this.rna.pln(this.totalBet);
        if (this.pbq) {
            this.pbq.qbw.tpi("sevenp", "#pln", [this.totalBet])
        }
        iey.prototype.gfl.call(this)
    };
    this.jya = function() {
        this.llt.tpi("paytable", "#zgi", [this.ssb, this.nwk])
    };
    this.zbw = function() {
        this.llt.tpi("paytable", "#stop")
    };
    this.kds = function() {
        this.avx = false;
        if (!this.pbq.pod() && this.win > 0) {
            this.nop()
        }
        this.pbq.lab(this.lmm, this.win, this.ssb, true);
        if (this.win == 0) {
            if (this.cdc > 0) {
                this.pbq.eab();
                this.aar(this.lmm, false);
                setTimeout(this.pbq.sjh, 100)
            } else {
                this.pbq.qbw.tpi("info", "#tto");
                setTimeout(this.nxc, 1000)
            }
        } else {
            this.pbq.neq()
        }
    };
    this.cul = function(m, l, n, t) {
        if (ysp.hpw.jpj()) {
            var a = (m != null && l != null && n != null && t != null),
                c = (a === true) ? new pjy(m, l, n, t) : new pjy(ysp.hpw.gof.hpw.quz.x, ysp.hpw.gof.hpw.quz.y, ysp.hpw.gof.hpw.quz.width, ysp.hpw.gof.hpw.quz.height),
                q = ysp.hpw.context2D,
                e = ysp.hpw.canvas,
                f = (ysp.hpw.cwt === true) ? ysp.hpw.style.hpw.ctt : ysp.hpw.style.hpw.backgroundColor,
                z = ysp.hpw.llt.qmc("stats"),
                b = ysp.hpw.llt.qmc("history"),
                u = ysp.hpw.llt.qmc("topb"),
                g = ysp.hpw.llt.qmc("topi"),
                j = ysp.hpw.llt.qmc("betsel"),
                v = ysp.hpw.llt.qmc("paytable"),
                p = ysp.hpw.llt.qmc("tops"),
                k = ysp.hpw.llt.qmc("winp"),
                o = ysp.hpw.llt.qmc("autop"),
                d = ysp.hpw.llt.qmc("settings");
            ysp.hpw.mfh = false;
            q.save();
            if (a) {
                q.beginPath();
                q.rect(m, l, n, t);
                q.closePath();
                q.clip()
            }
            q.clearRect(0, 0, ysp.hpw.width, ysp.hpw.height);
            q.restore();
            if (ysp.hpw.gof.mxn) {
                ysp.ekr.jry(q, ysp.hpw.gof.hpw.quz.x - ysp.hpw.gof.hpw.qwc, ysp.hpw.gof.hpw.quz.y - ysp.hpw.gof.hpw.qwc, ysp.hpw.gof.hpw.quz.width + 2 * ysp.hpw.gof.hpw.qwc, ysp.hpw.gof.hpw.quz.height + 2 * ysp.hpw.gof.hpw.qwc, f, 1)
            }
            if (b) {
                b.cul()
            }
            if (g) {
                g.cul()
            }
            if (p && p.pod()) {
                p.cul()
            }
            if (z && z.pod()) {
                z.cul()
            } else {
                if (ysp.hpw.igz != null && ysp.hpw.igz.pod()) {
                    ysp.hpw.igz.cul()
                } else {
                    if (ysp.hpw.pbq != null && ysp.hpw.pbq.pod()) {
                        ysp.hpw.pbq.cul()
                    } else {
                        q.drawImage(ysp.hpw.wba.vjf("back"), ysp.hpw.gof.hpw.quz.x, ysp.hpw.gof.hpw.quz.y);
                        if (ysp.hpw.zxl) {
                            ysp.hpw.zxl.cul()
                        }
                        for (var r = 0, s = ysp.hpw.aih.length; r < s; r++) {
                            ysp.hpw.aih[r].nrw(e);
                            ysp.hpw.aih[r].cul()
                        }
                        if (k) {
                            k.cul()
                        }
                        if (v) {
                            v.cul()
                        }
                        if (ysp.hpw.rna != null) {
                            ysp.hpw.rna.tdq(e);
                            ysp.hpw.rna.cul()
                        }
                        ysp.hpw.waj(q);
                        ysp.hpw.och(q)
                    }
                }
            }
            if (j) {
                j.cul()
            }
            if (u) {
                u.cul()
            }
            if (o) {
                o.cul()
            }
            if (d) {
                d.cul()
            }
        }
    };
    this.waj = function(a) {
        var b = this.wba.vjf("logo");
        if (b != null) {
            a.drawImage(b, this.gof.yiz.quz.x, this.gof.yiz.quz.y, this.gof.yiz.quz.width, this.gof.yiz.quz.height)
        }
    };
    this.och = function(a) {
        if ((this.win > 0 && this.ong == 0) || this.jrt == 0) {
            return
        }
        var b = this.style.vjn.jjh;
        if (this.jrt == 2) {
            b = this.style.vjn.fiv
        } else {
            if (this.jrt == 3) {
                b = this.style.vjn.xle
            }
        }
        ysp.ekr.trw(a, this.jrt + ". " + this.language.vfv, b, this.gof.vjn.quz.x, this.gof.vjn.quz.y, this.gof.vjn.quz.width, this.gof.vjn.quz.height, this.style.vjn.font, this.gof.vjn.fontSize, this.style.vjn.nkj)
    };
    this.ywc = function() {
        this.llt.tpi("paytable", "#stop")
    };
    this.llh = function() {
        this.ywc();
        iey.prototype.llh.call(this)
    };
    this.ctw = function() {
        this.ywc();
        iey.prototype.ctw.call(this)
    };
    this.osb = function() {
        iey.prototype.osb.call(this);
        if (this.state == ysp.vux.oqx.mya || this.state == ysp.vux.oqx.cip) {
            this.llt.tpi("paytable", "#zgi", [this.ssb, this.nwk]);
            if (this.state == ysp.vux.oqx.cip) {
                this.zxl.qbw.tpi("exit", "#cgv", [true])
            }
        }
    };
    this.wrc = function() {
        iey.prototype.wrc.call(this);
        if (this.state == ysp.vux.oqx.mya || this.state == ysp.vux.oqx.cip) {
            this.llt.tpi("paytable", "#zgi", [this.ssb, this.nwk]);
            if (this.state == ysp.vux.oqx.cip) {
                this.zxl.qbw.tpi("exit", "#cgv", [true])
            }
        }
    };
    this.pmw = function(a) {
        this.odx = a;
        if (a == ysp.gof.scj) {
            return new tzb()
        } else {
            if (a == ysp.gof.cdq) {
                return new ysw()
            } else {
                if (a == ysp.gof.dvx) {
                    return new jcd()
                } else {
                    if (a == ysp.gof.dih) {
                        return new nrr()
                    } else {
                        if (a == ysp.gof.bve) {
                            return new qfx()
                        } else {
                            if (a == ysp.gof.zcs) {
                                return new gvk()
                            } else {
                                if (a == ysp.gof.izn) {
                                    return new fay()
                                } else {
                                    if (a == ysp.gof.qvh) {
                                        return new dev()
                                    } else {
                                        if (a == ysp.gof.neo) {
                                            return new vzg()
                                        } else {
                                            if (a == ysp.gof.ohj) {
                                                return new iyv()
                                            } else {
                                                if (a == ysp.gof.fzk) {
                                                    return new yuk()
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
    this.dxe = function() {
        this.style = new zre()
    };
    this.pvy = function(a) {
        if (a == ysp.language.EN || a == ysp.language.US) {
            return new tsg()
        } else {
            if (a == ysp.language.ES || a == ysp.language.CO || a == ysp.language.MX || a == ysp.language.CL || a == ysp.language.VE) {
                return new req()
            } else {
                if (a == ysp.language.DE || a == ysp.language.AT) {
                    return new ulq()
                } else {
                    if (a == ysp.language.PT || a == ysp.language.BR) {
                        return new ysz()
                    } else {
                        if (a == ysp.language.RU) {
                            return new frt()
                        } else {
                            if (a == ysp.language.EE) {
                                return new mgl()
                            } else {
                                if (a == ysp.language.TR) {
                                    return new nci()
                                } else {
                                    if (a == ysp.language.CZ) {
                                        return new eae()
                                    } else {
                                        if (a == ysp.language.GR) {
                                            return new are()
                                        } else {
                                            if (a == ysp.language.BG) {
                                                return new chc()
                                            } else {
                                                if (a == ysp.language.GE) {
                                                    return new aue()
                                                } else {
                                                    if (a == ysp.language.HU) {
                                                        return new ftm()
                                                    } else {
                                                        if (a == ysp.language.RO) {
                                                            return new nhq()
                                                        } else {
                                                            if (a == ysp.language.FR) {
                                                                return new ung()
                                                            } else {
                                                                if (a == ysp.language.HR) {
                                                                    return new com()
                                                                } else {
                                                                    if (a == ysp.language.IT) {
                                                                        return new okh()
                                                                    } else {
                                                                        if (a == ysp.language.SE) {
                                                                            return new qtf()
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
    }
}
iey.prototype = new bpy;

function bsw() {
    ysp.jrl = -1;
    ysp.hpw = new iey();
    ysp.hpw.bih({
        gof: ysp.lct.value14
    });
    window.focus()
}

function qyn() {
    if (ysp.hpw != null) {
        if (ysp.jrl >= 0) {
            clearTimeout(ysp.jrl)
        }
        ysp.jrl = setTimeout(ysp.hpw.hef, 200)
    }
}

function vnb() {
    if (ysp.hpw != null) {
        if (ysp.jrl >= 0) {
            clearTimeout(ysp.jrl)
        }
        ysp.jrl = setTimeout(ysp.hpw.rlr, 200)
    }
}
if (ysp.ekr.swr()) {
    window.onorientationchange = vnb;
    window.onresize = vnb
} else {
    window.onresize = qyn
}
if (ysp.lct.value9) {
    window.onload = bsw
} else {
    bsw()
};