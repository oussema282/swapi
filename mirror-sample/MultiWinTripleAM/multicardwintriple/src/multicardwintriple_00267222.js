
var gameController;
var gameWS=new WebSocket(serverString);

 /*------WS ADDON--------*/
        
        
        
       
        setInterval(function(){
		//
		var j='A/u350,0';
		var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"MultiWinTripleAM"}';j=tmpPar;
		gameWS.send(j);	
		},5000);
		
		
	
		gameWS.onmessage=function(k){

		    var tmpMess=k.data.split("#");

			if(tmpMess[0]=='UPDATE'  && gameController.xpj.tjx!=undefined){
			
			if(gameController.vkp!=parseInt(tmpMess[1])){
				
			gameController.vkp=parseInt(tmpMess[1]);	
		
			gameController.xpj.tjx.fdt("creditd", "#yya", [gameController.ybn(tmpMess[1]), true]);	
			
			}
			
			
			
			
			
			}	
			
		}
		
		/*--------------*/

/////////////////


function oag() {
    this.brk = "Info";
    this.isr = "DEPOSIT";
    this.audio = "AUDIO";
    this.uep = "TIP";
    this.xjg = "TURBO";
    this.zrz = "STATISTIC";
    this.kaq = "HISTORY";
    this.jfg = "SHORTCUTS";
    this.lia = "HELP";
    this.acc = "PAYTABLE";
    this.language = "LANGUAGE";
    this.vpp = ">>";
    this.gdd = "<<";
    this.jgv = "Fullscreen is not supported!"
}

function sll() {
    this.xhq = "MINIMUM BET IS";
    this.iao = "MAX BET";
    this.rek = "MIN.BET";
    this.mqv = "MAX.BET";
    this.vzf = "BET";
    this.start = "START";
    this.lia = "HELP";
    this.acc = "PAYTABLE";
    this.nng = "MENU";
    this.lvw = "MORE|GAMES";
    this.cld = "STOP";
    this.vkp = "CREDIT";
    this.dlg = "GAME OVER";
    this.tgq = "WINNER!";
    this.jjq = "GOOD LUCK!";
    this.win = "WIN";
    this.sut = "LAST WIN";
    this.ygw = "COLLECT";
    this.pgw = "COLLECT";
    this.cwc = "GAMBLE";
    this.rcy = "AUTO|START";
    this.pmc = "HALF|GAMBLE";
    this.quj = "EXIT";
    this.cjt = "START GAME";
    this.bxv = "CHOOSE BET";
    this.poo = "HALF";
    this.ret = "RETURN|TO GAME";
    this.lpo = "Total Win";
    this.sjx = "Warning";
    this.mcz = "TOTAL";
    this.gpg = "PLEASE WAIT ...";
    this.yzm = "More Games";
    this.xjg = "SPEED";
    this.oyz = "Malfunction voids all pays and plays.";
    this.jxn = "CONTINUE";
    this.nik = "AUTOSTART";
    this.zje = "PAYTABLE";
    this.byq = "GAMBLE";
    this.left = "LEFT";
    this.daj = "RIGHT";
    this.ok = "OK";
    this.eps = "CANCEL";
    this.dti = "Gamble";
    this.aob = "Half";
    this.skt = "GAME RULES";
    this.fjd = "GAME RULES";
    this.vlk = "Bonus!";
    this.lfe = "BONUS";
    this.aag = "PRESS ANY KEY TO CONTINUE";
    this.alm = "NOT ENOUGH CREDIT!";
    this.ybm = "wins";
    this.pxk = "V A L U E";
    this.of = "OF";
    this.mzm = "TOUCH THE SCREEN TO CONTINUE";
    this.lnz = "LOADING ...";
    this.hho = "LOADING HISTORY ...";
    this.stp = "Communication Error";
    this.oyy = "You have reached one of the limits!";
    this.qbw = "You have reached the maximum amount of free games!";
    this.vnh = "Game will be closed";
    this.cua = "Game will be restarted";
    this.zqs = "WON";
    this.error = "ERROR";
    this.gvb = "FREEPLAY";
    this.cod = "AUTO";
    this.jrj = "GAME ID";
    this.adh = "Playing Time";
    this.cxz = "last";
    this.ood = "games";
    this.isr = "DEPOSIT";
    this.audio = "AUDIO";
    this.zsk = "MUSIC";
    this.shj = "FULLSCREEN";
    this.jwu = "FULLSCREEN";
    this.language = "LANGUAGE";
    this.yoh = "Do not show again";
    this.ica = "Sounds can not be loaded!";
    this.sru = "Resources missing!";
    this.oij = "Play without sound?";
    this.uci = "SETTINGS";
    this.qdg = "Please turn your device!";
    this.brk = "INFO";
    this.ijl = "Please disable PRIVATE MODE in your browser to play the game.";
    this.zzo = "This game is optimized for Google Chrome.";
    this.xxk = "Please use the current version of";
    this.wjm = "Unfortunately this browser is not fully supported.";
    this.aqq = "This game can not be started in freeplay mode!";
    this.qxr = "Turn your device to the portrait mode to play like on a real slot machine!";
    this.jyj = "Adjust the game interface to your needs!";
    this.ppe = "SELECT THE CORRECT COLOR TO DOUBLE THE WIN";
    this.zok = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.uyd = "GAMBLE FOR A CHANCE TO INCREASE THE WIN";
    this.zrz = "Statistic";
    this.nol = "Total Games";
    this.tqd = "Total Bets";
    this.hwj = "Total Wins";
    this.tmu = "Total Play Time";
    this.yrf = "I have read this message";
    this.ezg = "EXIT|GAME";
    this.kaq = "History";
    this.cmo = "No games played.";
    this.state = "STATE";
    this.fek = "Main Game";
    this.gvh = "Auto Collected";
    this.rsu = "Collected";
    this.wff = "Bonusspins";
    this.cyq = "Respin";
    this.ljs = "Bonus";
    this.snw = "First Deal";
    this.rcw = "Second Deal";
    this.ljf = "Third Deal";
    this.rbt = "AUTOSTART SETTINGS";
    this.qfi = "Amount of games:";
    this.vol = "Stop autostart";
    this.ige = "Credit lower than:";
    this.ufy = "Credit higher than:";
    this.ops = "Win higher than:";
    this.wwl = "The autostart will be stopped at the beginning of the bonus.";
    this.jwv = "Share on Facebook";
    this.rup = "FOR MORE INFORMATION, SEE THE GAME RULES.";
    this.umw = "Reality Check";
    this.mgk = "You have requested a Reality Check.";
    this.ayv = "Press HISTORY to view your game history.";
    this.mkz = "Game break";
    this.lzi = "Game limits";
    this.reh = "Self test";
    this.bzr = "No connection to the gaming server!";
    this.uzk = "Connection attempts";
    this.fvo = "Login failed!";
    this.jih = "Active session already exists!";
    this.dle = "THE THEORETICAL RETURN TO THE PLAYER FOR THIS GAME IS XY."
}
sll.prototype = new oag;

function dhi() {
    this.xhq = "РњРРќРРњРђР›Р¬РќРђРЇ РЎРўРђР’РљРђ -";
    this.iao = "РњРђРљРЎ.|РЎРўРђР’РљРђ";
    this.rek = "РњРРќ.РЎРўAР’РљРђ";
    this.mqv = "РњРђРљРЎ.РЎРўAР’РљРђ";
    this.vzf = "РЎРўРђР’РљРђ";
    this.start = "РЎРўРђР Рў";
    this.lia = "РџРћРњРћР©Р¬";
    this.acc = "РўРђР‘Р›РР¦Рђ Р’Р«РџР›РђРў";
    this.nng = "РњР•РќР®";
    this.lvw = "Р”Р РЈР“РР•|РР“Р Р«";
    this.cld = "РЎРўРћРџ";
    this.vkp = "РљР Р•Р”РРў";
    this.dlg = "РљРћРќР•Р¦ РР“Р Р«";
    this.tgq = "РџРћР‘Р•Р”РРўР•Р›Р¬!";
    this.jjq = "Р–Р•Р›РђР•Рњ РЈР”РђР§Р!";
    this.win = "Р’Р«РР“Р Р«РЁ";
    this.sut = "РџРћРЎР›Р•Р”. Р’Р«РР“Р Р«РЁ";
    this.ybm = "РІС‹Р№РіСЂС‹С€Рё";
    this.ygw = "Р—РђР‘Р РђРўР¬|Р’Р«РР“Р Р«РЁ";
    this.pgw = "Р—РђР‘Р РђРўР¬ Р’Р«РР“Р Р«РЁ";
    this.cwc = "РР“Р Рђ|РќРђ|Р РРЎРљ";
    this.rcy = "РђР’РўРћ|РР“Р Рђ";
    this.pmc = "РЈРњР•РќР¬РЁРРўР¬|Р РРЎРљ";
    this.of = "Р’Р«РљР›.";
    this.quj = "Р’Р«РҐРћР”";
    this.cjt = "РќРђР–РњРРўР• РЎРўРђР Рў";
    this.bxv = "Р’Р«Р‘Р•Р РРўР• РЎРўРђР’РљРЈ";
    this.poo = "Р’Р—РЇРўР¬|1/2";
    this.aag = "РќРђР–РњР Р›Р®Р‘РЈР® РљР›РђР’РРЁРЈ, Р§РўРћР‘Р« РџР РћР”РћР›Р–РРўР¬";
    this.mzm = "РџР РРљРћРЎРќРРўР•РЎР¬ Рљ Р­РљР РђРќРЈ Р”Р›РЇ РџР РћР”РћР›Р–Р•РќРРЇ";
    this.ret = "РћР‘Р РђРўРќРћ|Р’ Р“Р›РђР’РќРЈР®|РР“Р РЈ";
    this.zjq = "РњРЅРѕР¶РёС‚РµР»СЊ РґР»СЏ Р‘РѕРЅСѓСЃР°";
    this.xuo = "Р‘РћРќРЈРЎ РЎРўРђР Рў Р’Р«РР“Р Р«РЁ:";
    this.lpo = "РћР‘Р©РР™ Р’Р«РР“Р Р«РЁ";
    this.lnz = "Р—Р°РіСЂСѓР·РєР° ...";
    this.hho = "Р—Р°РіСЂСѓР·РєР° РСЃС‚РѕСЂРёРё ...";
    this.error = "РћРЁРР‘РљРђ";
    this.alm = "РќР• Р”РћРЎРўРђРўРћР§РќРћ РљР Р•Р”РРўРђ.";
    this.oyy = "Р”РѕСЃС‚РёРіРЅСѓС‚ РѕРґРёРЅ РёР· Р»РёРјРёС‚РѕРІ!";
    this.sjx = "Р’РЅРёРјР°РЅРёРµ";
    this.stp = "РѕС€РёР±РєР° РѕР±РјРµРЅР° РґР°РЅРЅС‹С…";
    this.qbw = "Р’С‹ РїРѕР»СѓС‡РёР»Рё РјР°РєСЃРёРјР°Р»СЊРЅРѕРµ РєРѕР»РёС‡РµСЃС‚РІРѕ СЃРІРѕР±РѕРґРЅС‹С… РёРіСЂ!";
    this.vnh = "РРіСЂР° Р·Р°РєР°РЅС‡РёРІР°РµС‚СЃСЏ";
    this.cua = "РРіСЂР° РЅР°С‡РёРЅР°РµС‚СЃСЏ Р·Р°РЅРѕРІРѕ";
    this.vlk = "Р‘РѕРЅСѓСЃ!";
    this.lfe = "Р‘РћРќРЈРЎ";
    this.zqs = "Р’Р«РР“Р Р«РЁ";
    this.mcz = "Р’РЎР•Р“Рћ";
    this.gpg = "РџРѕР¶Р°Р»СѓР№СЃС‚Р° РїРѕРґРѕР¶РґРёС‚Рµ ...";
    this.error = "РћРЁРР‘РљРђ";
    this.gvb = "FREEPLAY";
    this.yzm = "Р’Р«Р‘РћР  РР“Р Р«";
    this.jrj = "GAME ID";
    this.adh = "Playing Time";
    this.cxz = "РїРѕСЃР»РµРґРЅСЏСЏ";
    this.ood = "РёРіСЂС‹";
    this.isr = "Р”Р•РџРћР—РРў";
    this.audio = "Р—РІСѓРє";
    this.zsk = "РњРЈР—Р«РљРђ";
    this.xjg = "РЎРљРћР РћРЎРўР¬";
    this.shj = "РџРћР›РќРћР­РљР РђРќРќР«Р™";
    this.jwu = "РџРћР›РќРћР­РљР РђРќРќР«Р™";
    this.language = "РЇР—Р«Рљ";
    this.oyz = "РџР Р РќР•РРЎРџР РђР’РќРћРЎРўР Р’РЎР• РР“Р Р« Р Р’Р«РР“Р Р«РЁР РђРќРќРЈР›РР РЈР®РўРЎРЇ.";
    this.jxn = "РџР РћР”РћР›Р–РРўР¬";
    this.yoh = "Р‘РѕР»СЊС€Рµ РЅРµ РїРѕРєР°Р·С‹РІР°С‚СЊ";
    this.nik = "РђР’РўРћРР“Р Рђ";
    this.zje = "РўРђР‘Р›РР¦Рђ Р’Р«РџР›РђРў";
    this.byq = "РР“Р Рђ РќРђ Р РРЎРљ";
    this.ica = "Р—РІСѓРє РЅРµ Р·Р°РіСЂСѓР¶Р°РµС‚СЃСЏ!";
    this.sru = "Р РµСЃСѓСЂСЃС‹ РѕС‚СЃСѓС‚СЃС‚РІСѓСЋС‚!";
    this.oij = "РРіСЂР°С‚СЊ Р±РµР· Р·РІСѓРєР°?";
    this.uci = "РќРђРЎРўР РћР™РљРђ";
    this.qdg = "РџРѕРІРµСЂРЅРёС‚Рµ, РїРѕР¶Р°Р»СѓР№СЃС‚Р°, РІР°С€Рµ СѓСЃС‚СЂРѕР№СЃС‚РІРѕ!";
    this.left = "Р›Р•Р’Рћ";
    this.daj = "РџР РђР’Рћ";
    this.cod = "РђР’РўРћ";
    this.pxk = "V A L U E";
    this.brk = "РРќР¤РћР РњРђР¦РРЇ";
    this.ijl = "Р’С‹РєР»СЋС‡РёС‚Рµ, РїРѕР¶Р°Р»СѓР№СЃС‚Р°, Р§РђРЎРўРќР«Р™ Р Р•Р–РРњ РІ Р±СЂР°СѓР·РµСЂРµ,С‡С‚РѕР±С‹ РЅР°С‡Р°С‚СЊ РёРіСЂСѓ.";
    this.zzo = "РќР°СЃС‚РѕСЏС‰Р°СЏ РёРіСЂР° РѕРїС‚РёРјРёР·РёСЂРѕРІР°РЅР° РґР»СЏ Google Chrome.";
    this.xxk = "РСЃРїРѕР»СЊР·СѓР№С‚Рµ, РїРѕР¶Р°Р»СѓР№СЃС‚Р°, Р°РєС‚СѓР°Р»СЊРЅСѓСЋ РІРµСЂСЃРёСЋ";
    this.wjm = "Рљ СЃРѕР¶Р°Р»РµРЅРёСЋ РЅРµС‚ РїРѕР»РЅРѕР№ РїРѕРґРґРµСЂР¶РєРё Р±СЂР°СѓР·РµСЂР°.";
    this.aqq = "Р—Р°РїСѓСЃРє СЌС‚РѕР№ РёРіСЂС‹ РІ СЂРµР¶РёРјРµ СЃРІРѕР±РѕРґРЅС‹С… РёРіСЂ РЅРµРІРѕР·РјРѕР¶РµРЅ!";
    this.qxr = "РџРѕРІРµСЂРЅРёС‚Рµ РїСЂРёР±РѕСЂ РІ РїРѕР»РѕР¶РµРЅРёРµ РїРѕСЂС‚СЂРµС‚РЅРѕРіРѕ СЂРµР¶РёРјР° РґР»СЏ РёРіСЂС‹ РєР°Рє РЅР° РЅР°СЃС‚РѕСЏС‰РµРј РёРіСЂР°Р»СЊРЅРѕРј Р°РІС‚РѕРјР°С‚Рµ!";
    this.jyj = "РџСЂРёСЃРїРѕСЃРѕР±СЊ РёРЅС‚РµСЂС„РµР№СЃ Рє СЃРІРѕРёРј РїРѕС‚СЂРµР±РЅРѕСЃС‚СЏРј!";
    this.rup = "Р”РћРџРћР›РќРРўР•Р›Р¬РќРЈР® РРќР¤РћР РњРђР¦РР® Р’Р« РњРћР–Р•РўР• РџРћР›РЈР§РРўР¬ Р’ РџР РђР’РР›РђРҐ РР“Р Р«.";
    this.umw = "РџСЂРѕРІРµСЂРєСѓ СЂРµР°Р»СЊРЅРѕСЃС‚Рё";
    this.mgk = "Р’С‹ Р·Р°РїСЂРѕСЃРёР»Рё РїСЂРѕРІРµСЂРєСѓ СЂРµР°Р»СЊРЅРѕСЃС‚Рё.";
    this.ayv = "РќР°Р¶РјРёС‚Рµ РРЎРўРћР РРЇ, С‡С‚РѕР±С‹ РїРѕСЃРјРѕС‚СЂРµС‚СЊ СЃРІРѕСЋ РёСЃС‚РѕСЂРёСЋ РёРіСЂС‹.";
    this.mkz = "Game break";
    this.lzi = "Game limits";
    this.reh = "Self test";
    this.bzr = "РќРµС‚ СЃРІСЏР·Рё СЃ РёРіСЂРѕРІС‹Рј СЃРµСЂРІРµСЂРѕРј!";
    this.uzk = "РџРѕРїС‹С‚РєРё СЃРІСЏР·Рё";
    this.fvo = "РѕС€РёР±РєР° РїСЂРё РІС…РѕРґРµ РІ СЃРёСЃС‚РµРјСѓ!";
    this.jih = "РЎРµР°РЅСЃ РёРіСЂС‹ СѓР¶Рµ РЅР°С‡Р°Р»СЃСЏ!";
    this.skt = "РџР РђР’РР›Рђ РР“Р Р«";
    this.fjd = "РџР РђР’РР›Рђ РР“Р Р«";
    this.ppe = "Р’Р«Р‘Р•Р РРўР• РџР РђР’РР›Р¬РќРЈР® РњРђРЎРўР¬, Р§РўРћР‘Р« РЈР”Р’РћРРўР¬ Р’Р«РР“Р Р«РЁ";
    this.zok = "Р’Р«Р‘Р•Р РРўР• РџР РђР’РР›Р¬РќРЈР® РњРђРЎРўР¬, Р§РўРћР‘Р« РЈР’Р•Р›РР§РРўР¬ Р’Р«РР“Р Р«РЁ Р’ 4 Р РђР—Рђ.";
    this.uyd = "РЎРўРђР’Р¬РўР• РќРђ Р РРЎРљ, Р§РўРћР‘Р« РЈР’Р•Р›РР§РРўР¬ Р’Р«РР“Р Р«РЁ.";
    this.zrz = "РЎС‚Р°С‚СѓСЃ";
    this.nol = "РєРѕР»РёС‡РµСЃС‚РІРѕ РёРіСЂ";
    this.tqd = "РІСЃСЏ СЃС‚Р°РІРєР°";
    this.hwj = "РѕР±С‰РёР№ РІС‹РёРіСЂС‹С€";
    this.tmu = "РѕР±С‰РµРµ РІСЂРµРјСЏ РёРіСЂС‹";
    this.yrf = "РЇ СЃРѕРѕР±С‰РµРЅРёРµ РїСЂРѕС‡РёС‚Р°Р».";
    this.ezg = "РР“Р РЈ|Р—РђРљРћРќР§РРўР¬";
    this.ok = "OK";
    this.kaq = "РСЃС‚РѕСЂРёСЏ";
    this.cmo = "РЅРµС‚ РёСЃС‚РѕСЂРёРё.";
    this.state = "STATE";
    this.fek = "Main Game";
    this.gvh = "Auto Collected";
    this.rsu = "Collected";
    this.wff = "Bonusspins";
    this.dti = "Gamble";
    this.aob = "Half";
    this.cyq = "Respin";
    this.ljs = "Bonus";
    this.snw = "First Deal";
    this.rcw = "Second Deal";
    this.ljf = "Third Deal";
    this.eps = "РР—РњР•РќРРўР¬";
    this.rbt = "РќРђРЎРўР РћР™РљРђ РђР’РўРћРЎРўРђР РўРђ";
    this.qfi = "РљРѕР»РёС‡РµСЃС‚РІРѕ РёРіСЂ:";
    this.vol = "РђРІС‚РѕСЃС‚Р°СЂС‚ РѕСЃС‚Р°РЅРѕРІРёС‚СЊ";
    this.ige = "РљСЂРµРґРёС‚ РЅРёР¶Рµ, С‡РµРј:";
    this.ufy = "РљСЂРµРґРёС‚ РІС‹С€Рµ, С‡РµРј:";
    this.ops = "Р’С‹РёРіСЂС‹С€ РІС‹С€Рµ, С‡РµРј:";
    this.wwl = "РђРІС‚РѕСЃС‚Р°СЂС‚ РїСЂРµСЂС‹РІР°РµС‚СЃСЏ, РµСЃР»Рё РЅР°С‡РёРЅР°РµС‚СЃСЏ Р±РѕРЅСѓСЃРЅР°СЏ РёРіСЂР°.";
    this.jwv = "РџРѕРґРµР»РёСЃСЊ РІ С„РµР№СЃР±СѓРє";
    this.dle = "РўР•РћР Р•РўРР§Р•РЎРљРђРЇ Р’Р«РџР›РђРўРђ РР“Р РћРљРЈ РЎРћРЎРўРђР’Р›РЇР•Рў Р’ Р­РўРћР™ РР“Р Р• XY."
}
dhi.prototype = new oag;

function guq() {
    this.xhq = "APUESTA MГЌNIMA ES";
    this.iao = "APUESTA|MГЃXIMA";
    this.rek = "APUESTA MГЌN.";
    this.mqv = "APUESTA MГЃX.";
    this.vzf = "APUESTA";
    this.start = "JUGAR";
    this.lia = "AYUDA";
    this.acc = "PLAN DE|GANANCIAS";
    this.nng = "MENU";
    this.lvw = "MAS|JUEGOS";
    this.cld = "PARADA";
    this.vkp = "CREDITOS";
    this.dlg = "FIN DEL JUEGO";
    this.tgq = "ВЎGANADOR!";
    this.jjq = "ВЎMUCHA SUERTE!";
    this.win = "PREMIO";
    this.sut = "ULTIMOS PREMIO";
    this.ybm = "gana";
    this.ygw = "COBRAR";
    this.pgw = "COBRAR";
    this.cwc = "RIESGO";
    this.rcy = "AUTO|JUGAR";
    this.pmc = "MEDIA|APUESTA";
    this.of = "DE";
    this.quj = "SALIR";
    this.cjt = "ВЎPULSE JUGAR!";
    this.bxv = "ELIJA SU APUESTA";
    this.poo = "MITAD";
    this.aag = "PULSE UNA TECLA PARA CONTINUAR";
    this.mzm = "TOCAR LA PANTALLA PARA CONTINUAR";
    this.ret = "VOLVER|AL JUEGO";
    this.lpo = "Premio total";
    this.lnz = "CARGANDO ...";
    this.hho = "CARGANDO HISTORIAL ...";
    this.alm = "No hay bastante CREDITO";
    this.oyy = "ВЎHa alcanzado uno de los limites!";
    this.sjx = "Advertencia";
    this.stp = "Error de comunicaciГіn";
    this.qbw = "ВЎHa alcanzado la mГЎxima cantidad de juegos gratis!";
    this.vnh = "El juego se cerrarГЎ";
    this.cua = "El juego se reiniciarГЎ";
    this.vlk = "ВЎBONUS!";
    this.lfe = "BONUS";
    this.zqs = "GANADO";
    this.mcz = "TOTAL";
    this.tiq = "TURBO SI";
    this.kgx = "TURBO NO";
    this.gpg = "POR FAVOR ESPERE ...";
    this.error = "ERROR";
    this.gvb = "FREEPLAY";
    this.yzm = "MAS JUEGOS";
    this.jrj = "ID DE JUEGO";
    this.adh = "Playing Time";
    this.cxz = "ultimos";
    this.ood = "juegos";
    this.isr = "DEPГ“SITO";
    this.audio = "AUDIO";
    this.zsk = "MГљSICA";
    this.xjg = "VELOCIDAD";
    this.shj = "PANTALLA COMPLETA";
    this.jwu = "PANTALLA|COMPLETA";
    this.language = "IDIOMA";
    this.oyz = "UN MAL FUNCIONAMIENTO ANULA TODA JUGADA Y TODO PAGO.";
    this.jxn = "ADELANTE";
    this.yoh = "No mostrar de nuevo";
    this.nik = "AUTOJUGAR";
    this.zje = "PLAN DE GANANCIAS";
    this.byq = "RIESGO";
    this.ica = "No se pueden cargar los sonidos.";
    this.sru = "Faltan recursos.";
    this.oij = "ВїJugar sin sonido?";
    this.uci = "AJUSTES";
    this.pxk = "V A L U E";
    this.qdg = "ВЎEncienda su dispositivo!";
    this.left = "IZQUIERDA";
    this.daj = "DERECHA";
    this.cod = "AUTOMГЃTICO";
    this.brk = "INFORMACIГ“N";
    this.ijl = "Desactive el MODO PRIVADO en su explorador para jugar el juego.";
    this.zzo = "Este juego estГЎ optimizado para Google Chrome.";
    this.xxk = "Use la versiГіn actual de";
    this.wjm = "Desafortunadamente, este explorador no es compatible.";
    this.aqq = "ВЎEste juego no puede iniciarse en modo de juego libre!";
    this.qxr = "ВЎGire el dispositivo a posiciГіn vertical como en la mГЎquina tragamonedas real!";
    this.jyj = "ВЎAjuste la interfaz del juego a sus necesidades!";
    this.rup = "PARA MГЃS INFORMACIГ“N MIRE LAS REGLAS DEL JUEGO.";
    this.umw = "Reality Check";
    this.mgk = "Has solicitado un Reality Check.";
    this.ayv = "Pulsa HISTORIAL para visualizar tu historial de juego.";
    this.mkz = "Game break";
    this.lzi = "Game limits";
    this.reh = "Self test";
    this.bzr = "ВЎNo hay conexiГіn con el servidor de juegos!";
    this.uzk = "Intentos de conexiГіn";
    this.fvo = "ВЎNo pudo iniciarse la sesiГіn!";
    this.jih = "ВЎYa existe una sesiГіn activa!";
    this.skt = "REGLAS DEL JUEGO";
    this.fjd = "REGLAS|DEL JUEGO";
    this.ppe = "SELECCIONAR EL COLOR CORRECTO PARA DOBLAR EL PREMIO";
    this.zok = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.uyd = "JUGAR UNA POSIBILIDAD DE MULTIPLICAR LA GANANCIA";
    this.zrz = "ESTADO";
    this.nol = "NГєmero de juegos";
    this.tqd = "Apuesta total";
    this.hwj = "Ganancia total";
    this.tmu = "Tiempo total de juego";
    this.yrf = "He leГ­do el mensaje.";
    this.ezg = "TERMINAR|JUEGO";
    this.ok = "OK";
    this.kaq = "HISTORIAL";
    this.cmo = "AГєn no hay juegos.";
    this.state = "Estado";
    this.fek = "Juego principal";
    this.gvh = "Ganancia automГЎtica";
    this.rsu = "Ganancia";
    this.wff = "BONUSSPINS";
    this.dti = "Apuesta";
    this.aob = "Mitad";
    this.cyq = "Respin";
    this.ljs = "Bonus";
    this.snw = "Primera mano";
    this.rcw = "Segunda mano";
    this.ljf = "Tercera mano";
    this.eps = "CANCELAR";
    this.rbt = "CONFIGURACIONES DE JUEGO AUTOMГЃTICO";
    this.qfi = "Cantidad de juegos:";
    this.vol = "Detener juego automГЎtico";
    this.ige = "CrГ©dito menor que:";
    this.ufy = "CrГ©dito mayor que:";
    this.ops = "Ganancia mayor que:";
    this.wwl = "El juego automГЎtico se detendrГЎ al principio del bonus.";
    this.jwv = "Compartir en Facebook";
    this.dle = "EL PORCENTAJE TEГ“RICO DE DEVOLUCIГ“N AL JUGADOR PARA ESTE JUEGO ES XY."
}
guq.prototype = new oag;

function dfd() {
    this.xhq = "MINIMALER EINSATZ IST";
    this.iao = "MAX. EINSATZ";
    this.rek = "MIN. EINSATZ";
    this.mqv = "MAX. EINSATZ";
    this.vzf = "EINSATZ";
    this.start = "START";
    this.lia = "HILFE";
    this.acc = "GEWINNPLAN";
    this.nng = "MENГњ";
    this.lvw = "MEHR|SPIELE";
    this.vkp = "GUTHABEN";
    this.dlg = "SPIEL ENDE";
    this.tgq = "GEWINNER!";
    this.jjq = "VIEL GLГњCK!";
    this.win = "GEWINN";
    this.sut = "LETZTER GEWINN";
    this.ybm = "gewinnt";
    this.ygw = "NEHMEN";
    this.pgw = "NEHMEN";
    this.cwc = "RISIKO";
    this.rcy = "AUTO|START";
    this.pmc = "HALF|GAMBLE";
    this.cld = "STOP";
    this.of = "VON";
    this.quj = "EXIT";
    this.cjt = "START DRГњCKEN";
    this.bxv = "EINSATZ WГ„HLEN";
    this.poo = "TEILEN";
    this.aag = "DRГњCKE EINE TASTE UM FORTZUFAHREN";
    this.mzm = "BERГњHRE DEN BILDSCHIRM UM FORTZUFAHREN";
    this.ret = "ZURГњCK|ZUM SPIEL";
    this.lpo = "Gesamt Gewinn";
    this.lnz = "LГ„DT ...";
    this.hho = "LГ„DT HISTORIE ...";
    this.alm = "NICHT GENUG GUTHABEN!";
    this.sjx = "Achtung";
    this.stp = "Kommunikationsfehler";
    this.oyy = "Sie haben eines der Limits erreicht!";
    this.qbw = "Sie haben die maximale Anzahl an Freispielen erreicht!";
    this.vnh = "Das Spiel wird beendet";
    this.cua = "Das Spiel wird neu gestartet";
    this.vlk = "Bonus!";
    this.lfe = "BONUS";
    this.zqs = "GEWONNEN";
    this.mcz = "TOTAL";
    this.gpg = "BITTE WARTEN ...";
    this.error = "FEHLER";
    this.gvb = "FREEPLAY";
    this.yzm = "MEHR|SPIELE";
    this.jrj = "SPIEL ID";
    this.adh = "Spielzeit";
    this.cxz = "Letzten";
    this.ood = "Spiele";
    this.isr = "GUTHABEN";
    this.audio = "AUDIO";
    this.zsk = "MUSIK";
    this.xjg = "SPEED";
    this.shj = "VOLLBILD";
    this.jwu = "VOLLBILD";
    this.language = "SPRACHE";
    this.oyz = "Bei GerГ¤testГ¶rung keine Haftung.";
    this.jxn = "WEITER";
    this.yoh = "Nicht noch einmal anzeigen";
    this.nik = "AUTOSTART";
    this.byq = "RISIKO";
    this.zje = "GEWINNPLAN";
    this.ica = "Sounds kГ¶nnen nicht geladen werden!";
    this.sru = "Ressourcen fehlen!";
    this.oij = "Ohne Ton spielen?";
    this.uci = "EINSTELL.";
    this.qdg = "Bitte drehen sie ihr GerГ¤t!";
    this.left = "LINKS";
    this.daj = "RECHTS";
    this.cod = "AUTOM.";
    this.pxk = "V A L U E";
    this.brk = "INFO";
    this.ijl = "Bitte deaktivieren sie den PRIVATEN MODUS im Browser um das Spiel zu starten";
    this.zzo = "Dieses Spiel ist optimiert fГјr Google Chrome.";
    this.xxk = "Bitte benutzen sie die aktuelle Version von";
    this.wjm = "Leider wird dieser Browser nicht unterstГјtzt.";
    this.aqq = "Dieses Spiel kann nicht im Freispiel-Modus gestartet werden!";
    this.qxr = "Drehen sie ihr GerГ¤t in den Portraitmodus, um wie auf einem echten Automaten zu spielen!";
    this.jyj = "Passe die SpieloberflГ¤che deinen BedГјrfnissen an!";
    this.rup = "ZUSГ„TZLICHE INFORMATION FINDEN SIE IN DEN SPIELREGELN.";
    this.umw = "Reality Check";
    this.mgk = "Du hast einen Reality Check angefordert.";
    this.ayv = "DrГјcke HISTORIE um deine Spielhistorie anzuzeigen.";
    this.mkz = "Spielpause";
    this.lzi = "Spiellimits";
    this.reh = "Selbsttest";
    this.bzr = "Keine Verbindung zum Gameserver!";
    this.uzk = "Verbindungsversuche";
    this.fvo = "Anmeldung fehlgeschlagen!";
    this.jih = "Es ist bereits eine Session aktiv!";
    this.skt = "SPIELREGELN";
    this.fjd = "SPIELREGELN";
    this.ppe = "WГ„HLE DIE RICHTIGE FARBE UM DEN GEWINN ZU VERDOPPELN";
    this.zok = "WГ„HLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.uyd = "DRГњCKE RISIKO FГњR EINE CHANCE DEN GEWINN ZU VERVIELFACHEN";
    this.zrz = "Statistik";
    this.nol = "Anzahl der Spiele";
    this.tqd = "Gesamteinsatz";
    this.hwj = "Gesamtgewinn";
    this.tmu = "Gesamtspielzeit";
    this.yrf = "Ich habe die Nachricht gelesen";
    this.ezg = "SPIEL|BEENDEN";
    this.ok = "OK";
    this.kaq = "Historie";
    this.cmo = "Es existieren noch keine Spiele.";
    this.state = "STATUS";
    this.fek = "Hauptspiel";
    this.gvh = "Auto. Nehmen";
    this.rsu = "Genommen";
    this.wff = "Bonusspins";
    this.dti = "Risiko";
    this.aob = "Halb";
    this.cyq = "Respin";
    this.ljs = "Bonus";
    this.snw = "Erster Deal";
    this.rcw = "Zweiter Deal";
    this.ljf = "Dritter Deal";
    this.eps = "ABBRUCH";
    this.rbt = "AUTOSTART EINSTELLUNGEN";
    this.qfi = "Anzahl der Spiele: ";
    this.vol = "Autostart anhalten";
    this.ige = "Guthaben niedriger als:";
    this.ufy = "Guthaben hГ¶her als:";
    this.ops = "Gewinn hГ¶her als:";
    this.wwl = "Der Autostart wird am Bonusbeginn gestoppt.";
    this.jwv = "Auf Facebook teilen";
    this.dle = "DIE THEORETISCHE AUSZAHLUNG AN DEN SPIELER FГњR DIESES SPIEL BETRГ„GT XY."
}
dfd.prototype = new oag;

function ebv() {
    this.xhq = "MINIMUM BANKO";
    this.iao = "MAKS. BANKO";
    this.rek = "MIN. BANKO";
    this.mqv = "MAKS. BANKO";
    this.vzf = "BANKO";
    this.start = "BAЕћLAT";
    this.lia = "YARDIM";
    this.acc = "KazanГ§ planД±";
    this.nng = "MENГњ";
    this.lvw = "DAHA Г‡OK|OYUN";
    this.cld = "DUR";
    this.vkp = "KREDI";
    this.dlg = "OYUN BД°TTД°";
    this.tgq = "KAZANDINIZ!";
    this.jjq = "BOL ЕћANSLAR!";
    this.win = "KAZANГ‡";
    this.sut = "SON KAZANГ‡";
    this.ybm = "kazanД±r";
    this.ygw = "ALMAK";
    this.pgw = "ALMAK";
    this.cwc = "RIZIKO";
    this.rcy = "OTOMATД°K|BAЕћLATMA";
    this.pmc = "YARI|RIZIKO";
    this.of = "VEREN";
    this.quj = "Г‡IKIЕћ";
    this.cjt = "BAЕћLAT TUЕћUNA BASINIZ";
    this.bxv = "BANKO SEГ‡Д°NД°Z";
    this.poo = "ALMAK|1/2";
    this.aag = "DEVAM ETMEK IГ‡IN KLAVYEDE HER HANGI BIR YERE BASINIZ";
    this.mzm = "DEVAM ETMEK Д°Г‡Д°N EKRANA DOKUN";
    this.ret = "OYUNA|GERI";
    this.lpo = "Toplam kazanГ§";
    this.lnz = "YГњKLГњYOR ...";
    this.hho = "GEГ‡MIЕћI YГњKLГњYOR ...";
    this.alm = "YETERSД°Z KREDД°.";
    this.oyy = "Limitlerin birine ulaЕџtД±nД±z!";
    this.sjx = "Dikkat";
    this.stp = "Д°letiЕџim hatasД±";
    this.qbw = "Maksimum bedava oyun sayД±sД±na ulaЕџmД±Еџ bulunuyorsunuz!";
    this.vnh = "Oyun sonlandД±rД±lД±yor";
    this.cua = "Oyun yeniden baЕџlatД±lД±yor";
    this.vlk = "Bedava oyun primi!";
    this.lfe = "PRД°M";
    this.zqs = "KAZANDINIZ";
    this.mcz = "TOPLAM";
    this.gpg = "LГњTFEN BEKLEYIN ...";
    this.error = "HATA";
    this.gvb = "FREEPLAY";
    this.yzm = "DAHA Г‡OK OYUN";
    this.jrj = "OYUN ID";
    this.adh = "OYUN SГњRESД°";
    this.cxz = "Son";
    this.ood = "oyun";
    this.isr = "BAKIYE";
    this.audio = "AUDIO";
    this.zsk = "MГњZIK";
    this.xjg = "HД±Z";
    this.shj = "TAM EKRAN";
    this.jwu = "TAM EKRAN";
    this.language = "LISAN";
    this.oyz = "CIHAZ ARIZALANDIДћINDA MESULIYET KABUL EDILMEZ.";
    this.jxn = "DEVAM";
    this.yoh = "Tekrar gГ¶sterme";
    this.nik = "OTOMATД°K|BAЕћLATMA";
    this.byq = "RIZIKO";
    this.zje = "KazanГ§ planД±";
    this.ica = "Sesler yГјklenemiyorlar!";
    this.sru = "Kaynaklar eksik!";
    this.oij = "Sessiz oynayacak mД±sД±nД±z?";
    this.uci = "AYARLAR";
    this.qdg = "LГјtfen cihazД±nД±nД± dГ¶ndГјrГјn!";
    this.left = "SOL";
    this.daj = "SAДћ";
    this.cod = "OTOMATIK";
    this.pxk = "V A L U E";
    this.brk = "BILGI";
    this.ijl = "Oyunu baЕџlatmak iГ§in lГјtfen aДџ tarayД±cД±nД±zda Г–ZEL MOD'u kapatД±nД±z.";
    this.zzo = "Bu oyun Google Chrome iГ§in optimize edilmiЕџtir.";
    this.xxk = "'nin gГјncel versiyonunu kullanД±n";
    this.wjm = "Maalesef bu aДџ tarayД±cД±sД± tam olarak desteklenmiyor.";
    this.aqq = "Bu oyunun serbest modunda baЕџlatД±lmasД± mГјmkГјn deДџildir!";
    this.qxr = "CihazД±nД±zД± portre moduna Г§evirerek gerГ§ek bir otomatikte oynar gibi oynayД±n!";
    this.jyj = "Oyun yГјzeyini kendi ihtiyaГ§larД±na gГ¶re dГјzenle!";
    this.rup = "DAHA FAZLA BД°LGД°YД° OYUN KURALLARINDA BULABД°LД°RSД°NД°Z.";
    this.umw = "Reality Check";
    this.mgk = "Reality Check talebinde bulundun.";
    this.ayv = "Oyun geГ§miЕџini gГ¶rmek iГ§in GEГ‡MД°Ећ tuЕџuna bas.";
    this.mkz = "Game break";
    this.lzi = "Game limits";
    this.reh = "Self test";
    this.bzr = "Oyun server'ine baДџlantД± yok!";
    this.uzk = "BaДџlantД± denemeleri";
    this.fvo = "GiriЕџ hatasД±!";
    this.jih = "Aktif bir oturumunuz bulunuyor!";
    this.skt = "OYUNUN KURALLARД±";
    this.fjd = "OYUNUN|KURALLARД±";
    this.ppe = "DOДћRU RENGД° SEГ‡EREK KAZANCININ Д°KД°YE KATLARSIN";
    this.zok = "DOДћRU KART RENGД°NД° SEГ‡EREK KAZANCINI DГ–RDE KATLARSIN.";
    this.uyd = "KAZANCI KATLAMA ЕћANSI Д°Г‡Д°N GAMBLE (RД°SK)";
    this.zrz = "Д°statistik";
    this.nol = "Toplam oyunlar";
    this.tqd = "Toplam bankolar";
    this.hwj = "Toplam kazanГ§lar";
    this.tmu = "Toplam oyun sГјresi";
    this.yrf = "Bu mesajД± okudum.";
    this.ezg = "OYUNU|KAPAT";
    this.ok = "OK";
    this.kaq = "GEГ‡MД°Ећ";
    this.cmo = "HenГјz hiГ§ bir oyun yok.";
    this.state = "STATГњ";
    this.fek = "Ana oyun";
    this.gvh = "Otomatik olarak kazandД±nД±z";
    this.rsu = "ToplandД±";
    this.wff = "Prim oyunlar";
    this.dti = "Riziko";
    this.aob = "YarД±m";
    this.cyq = "Respin";
    this.ljs = "Prim";
    this.snw = "Д°lk anlaЕџma";
    this.rcw = "Д°kinci anlaЕџma";
    this.ljf = "ГњГ§ГјncГј anlaЕџma";
    this.eps = "Д°PTAL";
    this.rbt = "OTOMATIK BAЕћLAT AYARLARД±";
    this.qfi = "Oyun sayД±sД±:";
    this.vol = "Otomatik baЕџlatmayД± durdur";
    this.ige = "Kredi bundan dГјЕџГјktГјr:";
    this.ufy = "Kredi bundan yГјksektir:";
    this.ops = "KazanГ§ bundan yГјksektir:";
    this.wwl = "Otomatik baЕџlatma prim baЕџlangД±cД±nda durduruluyor.";
    this.jwv = "Facebook'ta paylaЕџ";
    this.dle = "OYUNCUYA TEORIK OLARAK Г–DENECEK MEBLAДћ % XY ORANД±NDADД±R."
}
ebv.prototype = new oag;

function gcc() {
    this.xhq = "MINIMГЃLNГЌ SГЃZKA JE";
    this.iao = "MAX. SГЃZKA";
    this.rek = "MIN. SГЃZKA";
    this.mqv = "MAX. SГЃZKA";
    this.vzf = "SГЃZKA";
    this.start = "START";
    this.lia = "POMOC";
    this.acc = "VГќHERNГЌ PLГЃN";
    this.nng = "MENU";
    this.lvw = "DALЕ ГЌ|HRY";
    this.cld = "STOP";
    this.vkp = "KREDIT";
    this.dlg = "KONEC HRY";
    this.tgq = "VГЌTEZ!";
    this.jjq = "HODNE Е TESTГЌ!";
    this.win = "VГќHRA";
    this.sut = "POSL. VГќHRA";
    this.ybm = "vyhrГЎvГЎ";
    this.ygw = "VEZMI";
    this.pgw = "VEZMI";
    this.cwc = "HRA";
    this.rcy = "AUTO|START";
    this.pmc = "POLOVICNГЌ|HRA";
    this.of = "Z";
    this.quj = "VГќSTUP";
    this.cjt = "START HRY";
    this.bxv = "VYBRAT SГЃZKU";
    this.poo = "POLOVINA";
    this.aag = "POKRACUJ DOTEKEM OBRAZOVKY";
    this.mzm = "PRO POKRAДЊOVГЃNГЌ SE DOTKNДљTE OBRAZOVKY";
    this.ret = "ZPET|DO HRY";
    this.lpo = "CelkovГЎ vГЅhra";
    this.lnz = "NAHRГЃVГЃM ...";
    this.hho = "NAHRГЃVГЃM HISTORII ...";
    this.alm = "NedostatecnГЅ kredit.";
    this.oyy = "DosГЎhli jste jednoho z limitЕЇ!";
    this.sjx = "VarovГЎnГ­";
    this.stp = "Chyba komunikace";
    this.qbw = "DosГЎhli jste maximГЎlnГ­ho poДЌtu her zdarma!";
    this.vnh = "Hra se zavЕ™e";
    this.cua = "Hra se restartuje";
    this.vlk = "Bonus!";
    this.lfe = "BONUS";
    this.zqs = "VYHRГЃL";
    this.mcz = "CELKOVГЃ";
    this.gpg = "ДЊEKEJTE PROSГЌM ...";
    this.error = "ERROR";
    this.gvb = "FREEPLAY";
    this.yzm = "DALЕ ГЌ HRY";
    this.jrj = "ID HRY";
    this.adh = "HRACГЌ DOBA";
    this.cxz = "PoslednГ­";
    this.ood = "hry";
    this.isr = "MГЌT K DOBRU";
    this.audio = "AUDIO";
    this.zsk = "MUZIKA";
    this.xjg = "RYCHLOST";
    this.shj = "FULLSCREEN";
    this.jwu = "FULLSCREEN";
    this.language = "ЕEДЊ";
    this.oyz = "PЕ™i poruЕЎe jsou vЕЎechny hry a vГЅhry neplatnГ©.";
    this.jxn = "POKRAДЊUJ";
    this.yoh = "Nezobrazujte znovu";
    this.nik = "AUTOSTART";
    this.byq = "HRA";
    this.zje = "VГќHERNГЌ PLГЃN";
    this.ica = "Zvuk nelze nahrГЎt!";
    this.sru = "ChybГ­ zdroje!";
    this.oij = "HrГЎt bez zvuku?";
    this.uci = "NASTAVENГЌ";
    this.pxk = "V A L U E";
    this.qdg = "OtoДЌte svГ© zaЕ™Г­zenГ­, prosГ­m!";
    this.left = "VLEVO";
    this.daj = "VPRAVO";
    this.cod = "AUTO";
    this.brk = "INFORMACE";
    this.ijl = "Abyste mohli hrГЎt hru, vypnД›te SOUKROMГќ REЕЅIM ve svГ©m prohlГ­ЕѕeДЌi, prosГ­m.";
    this.zzo = "Tato hra je optimalizovanГЎ pro Google Chrome.";
    this.xxk = "PouЕѕijte aktuГЎlnГ­ verzi";
    this.wjm = "Tento prohlГ­ЕѕeДЌ nenГ­ bohuЕѕel plnД› podporovГЎn.";
    this.aqq = "Tuto hru nelze spustit v reЕѕimu hry zdarma!";
    this.qxr = "OtoДЌte zaЕ™Г­zenГ­ tak, aby zobrazilo hru jako na skuteДЌnГ©m automatu!";
    this.jyj = "Nastavte rozhranГ­ hry svГЅm potЕ™ebГЎm!";
    this.rup = "VГЌCE INFORMACГЌ NALEZNETE V PRAVIDLECH HRY.";
    this.umw = "Reality Check";
    this.mgk = "PoЕѕГЎdali jste o kontrolu reality.";
    this.ayv = "Pro zobrazenГ­ vaЕЎГ­ hernГ­ historie stisknД›te HISTORIE.";
    this.mkz = "Game break";
    this.lzi = "Game limits";
    this.reh = "Self test";
    this.bzr = "ЕЅГЎdnГ© pЕ™ipojenГ­ k hernГ­mu serveru!";
    this.uzk = "Pokusy o pЕ™ipojenГ­";
    this.fvo = "PЕ™ihlГЎЕЎenГ­ se nezdaЕ™ilo!";
    this.jih = "AktivnГ­ relace jiЕѕ existuje!";
    this.skt = "PRAVIDLA HRY";
    this.fjd = "PRAVIDLA HRY";
    this.ppe = "VYBRAT SPRГЃVNOU BARVU KE ZDVOJNГЃSOBENГЌ VГќHRY";
    this.zok = "VYBRAT SPRГЃVNOU BARVU KARTY KE ZДЊTYЕNГЃSOBENГЌ VГќHRY";
    this.uyd = "VSADIT NA Е ANCI ZVГќЕ IT VГќHRU";
    this.zrz = "Statistika";
    this.nol = "Celkem hry";
    this.tqd = "Celkem sГЎzky";
    this.hwj = "Celkem vГЅhry";
    this.tmu = "CelkovГЎ hracГ­ doba";
    this.yrf = "ZprГЎvu jsem ДЌetl/a.";
    this.ezg = "UKONДЊIT|HRU";
    this.ok = "OK";
    this.kaq = "HISTORIE";
    this.cmo = "ЕЅГЎdnГ© odehranГ© hry.";
    this.state = "STATUS";
    this.fek = "HlavnГ­ hra";
    this.gvh = "Automaticky vybrГЎno";
    this.rsu = "VybrГЎno";
    this.wff = "Bonusspins";
    this.dti = "Hra";
    this.aob = "Polovina";
    this.cyq = "Respin";
    this.ljs = "Bonus";
    this.snw = "PrvnГ­ vyloЕѕenГ­";
    this.rcw = "DruhГ© vyloЕѕenГ­";
    this.ljf = "TЕ™etГ­ vyloЕѕenГ­";
    this.eps = "ZRUЕ IT";
    this.rbt = "NASTAVENГЌ AUTOMATICKГ‰HO STARTU";
    this.qfi = "MnoЕѕstvГ­ her:";
    this.vol = "Zastavit automatickГЅ start";
    this.ige = "Kredit niЕѕЕЎГ­ neЕѕ:";
    this.ufy = "Kredit vyЕЎЕЎГ­ neЕѕ:";
    this.ops = "VГЅhra vyЕЎЕЎГ­ neЕѕ:";
    this.wwl = "AutomatickГЅ start se zastavГ­ na zaДЌГЎtku bonusu.";
    this.jwv = "SdГ­let na Facebooku";
    this.dle = "TEORETICKГЃ NГЃVRATNOST HRГЃДЊI V TГ‰TO HЕE JE XY."
}
gcc.prototype = new oag;

function kmx() {
    this.xhq = "MIINIMUMPANUS ON";
    this.iao = "MAX PANUS";
    this.rek = "MIN PANUS";
    this.mqv = "MAX PANUS";
    this.vzf = "PANUS";
    this.start = "START";
    this.lia = "ABI";
    this.acc = "VГ•IDU TABEL";
    this.nng = "MENГњГњ";
    this.lvw = "VALI|MГ„NG";
    this.cld = "STOPP";
    this.vkp = "KREDIIT";
    this.dlg = "MГ„NG ON LГ•PPENUD!";
    this.tgq = "OLED VГ•ITNUD!";
    this.jjq = "SOOVIME EDU!";
    this.win = "VГ•IT";
    this.sut = "EELMINE VГ•IT";
    this.ygw = "VГ•TA|VГ•IT";
    this.pgw = "VГ•TA VГ•IT";
    this.cwc = "DUUBEL|DAMINE";
    this.rcy = "AUTO|START";
    this.pmc = "POOLITA|DUUBELDA";
    this.of = "OF";
    this.quj = "VГ„LJA";
    this.cjt = "ALUSTA MГ„NGU";
    this.bxv = "VALI PANUS";
    this.poo = "POOLIK";
    this.aag = "JГ„TKAMISEKS VAJUTAGE ГњKSKГ•IK MILLIST NUPPU";
    this.ret = "TAGASI|MГ„NGU";
    this.lpo = "KoguvГµit";
    this.alm = "POLE PIISAVALT KREDIITI.";
    this.vlk = "Boonus!";
    this.lfe = "BOONUS";
    this.gpg = "PALUN OODAKE ...";
    this.yzm = "Vali MГ¤ng";
    this.audio = "HELI";
    this.zsk = "MUUSIKA";
    this.xjg = "KIIRUS";
    this.shj = "TГ„ISEKRAAN";
    this.jwu = "TГ„ISEKRAAN";
    this.oyz = "RIKKE KORRAL KГ•IK MГ„NGUD JA VГ•IDUD TГњHISTATAKSE.";
    this.mrc = "MГ„NGU LГ•PP";
    this.language = "KEEL";
    this.skt = "MГ„NGUREEGLID";
    this.fjd = "MГ„NGUREEGLID";
    this.lnz = "LAADIMINE ...";
    this.hho = "AJALOO LAADIMINE ...";
    this.oyy = "Oled saavutanud Гјhe limiitidest!";
    this.sjx = "Hoiatus";
    this.stp = "Гњhenduse viga";
    this.qbw = "Te olete jГµudnud tasuta mГ¤ngude maksimaalse arvuni!";
    this.vnh = "MГ¤ng suletakse";
    this.cua = "MГ¤ng taaskГ¤ivitatakse";
    this.mzm = "JГ„TKAMISEKS PUUDUTA EKRAANI";
    this.uci = "SГ„TTED";
    this.pxk = "V A L U E";
    this.qdg = "PГ¶Г¶rake oma seadet!";
    this.brk = "INFO";
    this.ijl = "MГ¤ngu mГ¤ngimiseks keelake oma brauseris PRIVAATREЕЅIIM.";
    this.zzo = "See mГ¤ng on optimeeritud Google Chrome jaoks.";
    this.xxk = "Palun kasutage praeguse versiooni";
    this.wjm = "Kahjuks ei toetata seda brauserit tГ¤ielikult.";
    this.aqq = "Seda mГ¤ngu ei saa tasuta mГ¤ngimise reЕѕiimis kГ¤ivitada!";
    this.left = "VASAK";
    this.daj = "PAREM";
    this.cod = "AUTOMAATNE";
    this.zqs = "VГ•ITIS";
    this.ybm = "vГµidetud";
    this.mcz = "KOKKU";
    this.error = "VIGA";
    this.gvb = "TASUTA MГ„NG";
    this.jrj = "MГ„NGU ID";
    this.adh = "MГ„NGUAEG";
    this.cxz = "Viimased";
    this.ood = "mГ¤ngu";
    this.isr = "SISSEMAKSE";
    this.ppe = "VГ•IDU DUUBELDAMISEKS VALI Г•IGE VГ„RV";
    this.zok = "VГ•IDU NELJAKORDISTAMISEKS VALI Г•IGE MAST";
    this.uyd = "RISKI, ET SUURENDADA OMA VГ•ITU";
    this.zrz = "Statistika";
    this.nol = "MГ¤nge kokku";
    this.tqd = "Kogupanus";
    this.hwj = "KoguvГµit";
    this.tmu = "MГ¤nguaeg kokku";
    this.yrf = "Olen seda teadet lugenud.";
    this.ezg = "MГ„NGU|LГ•PP";
    this.kaq = "Ajalugu";
    this.cmo = "Гњhtegi mГ¤ngu ei ole mГ¤ngitud.";
    this.state = "OLEK";
    this.fek = "PГµhimГ¤ng";
    this.gvh = "Automaatne vГ¤ljavГµtt";
    this.rsu = "VГ¤lja vГµetud";
    this.wff = "Bonusspins";
    this.dti = "Gamble";
    this.aob = "Pool";
    this.cyq = "Respin";
    this.ljs = "Boonus";
    this.snw = "Esimene jagamine";
    this.rcw = "Teine jagamine";
    this.ljf = "Kolmas jagamine";
    this.jxn = "JГ„TKA";
    this.yoh = "Г„ra seda enam nГ¤ita";
    this.nik = "AUTOSTART";
    this.byq = "DUUBEL DAMINE";
    this.zje = "VГ•IDU TABEL";
    this.ica = "Helisid ei saa laadida!";
    this.sru = "Ressursid puuduvad!";
    this.oij = "Soovid mГ¤ngida ilma helideta?";
    this.qxr = "Keera seade vertikaalasendisse, et mГ¤ngida nagu pГ¤ris mГ¤nguautomaadil!";
    this.jyj = "Kohanda mГ¤nguliidest vastavalt oma vajadustele!";
    this.rup = "VAATA LISAINFOT MГ„NGUREEGLITEST.";
    this.eps = "TГњHISTA";
    this.rbt = "AUTOMAATKГ„IVITUSE SГ„TTED";
    this.qfi = "MГ¤ngude arv:";
    this.vol = "Peata automaatkГ¤ivitus";
    this.ige = "Krediit madalam kui:";
    this.ufy = "Krediit kГµrgem kui:";
    this.ops = "VГµit suurem kui:";
    this.wwl = "AutomaatkГ¤ivitus peatatakse boonuse alguses.";
    this.jwv = "Jaga Facebookis";
    this.ok = "OK";
    this.umw = "Reality Check";
    this.mgk = "Olete soovinud reaalsuskontrolli.";
    this.ayv = "Oma mГ¤nguajaloo vaatamiseks vajutage AJALUGU.";
    this.mkz = "Game break";
    this.lzi = "Game limits";
    this.reh = "Self test";
    this.bzr = "Puudub Гјhendus mГ¤nguserveriga!";
    this.uzk = "Гњhenduskatsed";
    this.fvo = "Sisselogimine nurjus!";
    this.jih = "Aktiivne seanss on juba olemas!";
    this.dle = "SELLE MГ„NGU MГ„NGIJA TEOREETILINE TULU ON XY."
}
kmx.prototype = new oag;

function pqm() {
    this.xhq = "О¤Оџ О•О›AО§О™ОЈО¤Оџ ОЈО¤ОџIО§О—ОњО‘ О•IОќО‘О™";
    this.iao = "ОњEО“О™ОЈО¤Оџ ОЈО¤ОџIО§О—ОњО‘";
    this.rek = "EО›О‘О§. ОЈО¤ОџО™О§О—ОњО‘";
    this.mqv = "ОњО•О“. ОЈО¤ОџО™О§О—ОњО‘";
    this.vzf = "ОЈО¤ОџIО§О—ОњО‘";
    this.start = "EОќО‘ОЎОћО—";
    this.lia = "О’ОџHОО•О™О‘";
    this.acc = "О IОќО‘ОљО‘ОЈ ОљО•ОЎО”О©Оќ";
    this.nng = "ОњО•ОќОџY";
    this.lvw = "О О•ОЎО™ОЈ.|О О‘О™О§ОќIО”О™О‘";
    this.cld = "ОЈО¤ОџО ";
    this.vkp = "О IОЈО¤О©ОЈО—";
    this.dlg = "TEО›ОџОЈ О О‘О™О§ОќО™О”О™ОџY!";
    this.tgq = "ОќО™ОљО—О¤О—ОЈ!";
    this.jjq = "ОљО‘О›О— О¤ОҐО§О—!";
    this.win = "ОљEОЎО”ОџОЈ";
    this.sut = "О¤О•О›О•ОҐО¤О‘IОџ ОљEОЎО”ОџОЈ";
    this.ygw = "О О‘ОЎО‘О›О‘О’H";
    this.pgw = "О О‘ОЎО‘О›О‘О’H";
    this.cwc = "О¤О–ОџО“AОЎО©";
    this.rcy = "О‘ОҐО¤OОњО‘О¤О—|EОќО‘ОЎОћО—";
    this.pmc = "О О‘ОЎО‘О›О‘О’H|О¤О–ОџО“AОЎО©";
    this.of = "О‘О O";
    this.quj = "EОћОџО”ОџОЈ";
    this.cjt = "О‘ОЎО§О™О–О•О™ О О‘О™О§ОќО™О”О™";
    this.bxv = "О•О О™О›О•ОћО¤О• ОЈО¤ОџО™О§О—ОњО‘";
    this.poo = "О О‘ОЎО‘О›О‘О’H|1/2";
    this.aag = "О AО¤О—ОЈО• EОќО‘ О О›HОљО¤ОЎОџ О“О™О‘ ОќО‘ ОЈОҐОќО•О§IОЈО•О™ОЈ";
    this.ret = "EО О™ОЈО¤ОЎОџО¦H|ОЈО¤Оџ|О О‘О™О§ОќIО”О™";
    this.lpo = "ОЈОҐОќОџО›О™ОљO ОљEОЎО”ОџОЈ";
    this.alm = "О”О•Оќ О‘ОЎОљО•О¤H О IОЈО¤О©ОЈО—.";
    this.vlk = "ОњПЂПЊОЅОїП…Пѓ!";
    this.lfe = "ОњО OОќОџОҐОЈ";
    this.gpg = "О О‘ОЎО‘ОљО‘О›О© О О•ОЎО™ОњEОќО•О¤О• ...";
    this.yzm = "О О•ОЎО™ОЈ.|О О‘О™О§ОќIО”О™О‘";
    this.audio = "О—О§ОџОЈ";
    this.zsk = "ОњОџОҐОЈО™ОљО‰";
    this.xjg = "О¤О‘О§YО¤О—О¤О‘";
    this.shj = "О О›О—ОЎО—ОЈ ОџООџОќО—";
    this.jwu = "О О›О—ОЎО—ОЈ|ОџООџОќО—";
    this.oyz = "ОЈО• О О•ОЎО™О О¤О©ОЈО— О’О›О‘О’О—ОЈ О¤О—ОЈ ОЈОҐОЈОљО•ОҐО—ОЈ О”О•Оќ О‘ОќО‘О›О‘ОњО’О‘ОќОџОҐОњО• ОљО‘ОњО™О‘ О•ОҐООҐОќО—.";
    this.language = "О“О›О©ОЈОЈО‘";
    this.mcz = "ОЈYОќОџО›Оџ";
    this.skt = "ОљО‘ОќОЊОќО•П‚ О О‘О™О§ОќО™О”О™ОџОЋ";
    this.fjd = "ОљО‘ОќОЊОќО•П‚|О О‘О™О§ОќО™О”О™ОџОЋ";
    this.lnz = "О¦ОџОЎО¤О©ОЈО— ...";
    this.hho = "О¦ОџОЎО¤О©ОЈО— О™ОЈО¤ОџОЎО™ОљОџОҐ...";
    this.oyy = "ОћОµПЂОµПЃО¬ПѓО±П„Оµ ОєО¬ПЂОїО№Ої ПЊПЃО№Ої!";
    this.sjx = "О ПЃОїОµО№ОґОїПЂОїОЇО·ПѓО·";
    this.stp = "ОЈП†О¬О»ОјО± ОµПЂО№ОєОїО№ОЅП‰ОЅОЇО±П‚";
    this.qbw = "О¦П„О¬ПѓО±П„Оµ ПѓП„Ої О±ОЅПЋП„О±П„Ої ПЊПЃО№Ої ОґП‰ПЃОµО¬ОЅ ПЂО±О№П‡ОЅО№ОґО№ПЋОЅ!";
    this.vnh = "О¤Ої ПЂО±О№П‡ОЅОЇОґО№ ОёО± П„ОµПЃОјО±П„О№ПѓП„ОµОЇ";
    this.cua = "О¤Ої ПЂО±О№П‡ОЅОЇОґО№ ОёО± ОµОєОєО№ОЅО·ОёОµОЇ ОµОє ОЅО­ОїП…";
    this.mzm = "О‘О“О“О™ОћО¤О• О¤О—Оќ ОџООџОќО— О“О™О‘ ОќО‘ ОЈОҐОќО•О§О™ОЈО•О¤О•";
    this.uci = "ОЎОҐООњО™ОЈО•О™ОЈ";
    this.pxk = "V A L U E";
    this.qdg = "О О±ПЃО±ОєО±О»ОїПЌОјОµ, ПЂОµПЃО№ПѓП„ПЃО­П€П„Оµ П„О· ПѓП…ПѓОєОµП…О® ПѓО±П‚!";
    this.brk = "О О›О—ОЎОџО¦ОџОЎОЉО•П‚";
    this.ijl = "О О±ПЃО±ОєО±О»ОїПЌОјОµ, О±ПЂОµОЅОµПЃОіОїПЂОїО№О®ПѓП„Оµ П„О· О»ОµО№П„ОїП…ПЃОіОЇО± PRIVATE MODE П„ОїП… ПЂПЃОїОіПЃО¬ОјОјО±П„ОїП‚ ПЂОµПЃО№О®ОіО·ПѓО·П‚, ПЂПЃОїОєОµО№ОјО­ОЅОїП… ОЅО± ОµОєОєО№ОЅО·ОёОµОЇ П„Ої ПЂО±О№П‡ОЅОЇОґО№.";
    this.zzo = "О‘П…П„ПЊ П„Ої ПЂО±О№П‡ОЅОЇОґО№ О­П‡ОµО№ ОІОµО»П„О№ПѓП„ОїПЂОїО№О·ОёОµОЇ ОіО№О± Google Chrome.";
    this.xxk = "О О±ПЃО±ОєО±О»ОїПЌОјОµ, П‡ПЃО·ПѓО№ОјОїПЂОїО№О®ПѓП„Оµ П„О·ОЅ П„ПЃО­П‡ОїП…ПѓО± О­ОєОґОїПѓО· П„ОїП…";
    this.wjm = "О”П…ПѓП„П…П‡ПЋП‚, О±П…П„ПЊ П„Ої ПЂПЃПЊОіПЃО±ОјОјО± ПЂОµПЃО№О®ОіО·ПѓО·П‚ ОґОµОЅ П…ПЂОїПѓП„О·ПЃОЇО¶ОµП„О±О№ ПЂО»О®ПЃП‰П‚.";
    this.aqq = "О‘П…П„ПЊ П„Ої ПЂО±О№П‡ОЅОЇОґО№ ОґОµОЅ ОјПЂОїПЃОµОЇ ОЅО± ОґО№ОµОѕО±П‡ОёОµОЇ ПѓП„О· ОґП‰ПЃОµО¬ОЅ О»ОµО№П„ОїП…ПЃОіОЇО±!";
    this.left = "О‘ОЎО™ОЈО¤О•ОЎA";
    this.daj = "О”О•ОћО™A";
    this.cod = "AОҐО¤OОњО‘О¤Оџ";
    this.zqs = "ОљEОЎО”О™ОЈО•";
    this.ybm = "ОєОµПЃОґОЇО¶ОµО№";
    this.error = "ОЈО¦О‘О›ОњО‘";
    this.gvb = "О”О©ОЎО•AОќ О О‘О™О§ОќIО”О™";
    this.jrj = "О¤О‘ОҐО¤ОџО¤О—О¤О‘ О О‘О™О§ОќО™О”О™ОџОҐ";
    this.adh = "О§ОЎОџОќОџОЈ О О‘О™О§ОќО™О”О™ОџОҐ";
    this.cxz = "О¤ОµО»ОµП…П„О±ОЇО±";
    this.ood = "ПЂО±О№П‡ОЅОЇОґО№О±";
    this.isr = "О О™ОЈО¤О©О¤О™ОљO ОҐО OО›ОџО™О Оџ";
    this.ppe = "О•О О™О›О•ОћО¤О• О¤Оџ ОЈО©ОЈО¤Оџ О§ОЎО©ОњО‘ О“О™О‘ ОќО‘ О”О™О О›О‘ОЈО™О‘ОЈО•О¤О• О¤Оџ ОљО•ОЎО”ОџОЈ ОЈО‘ОЈ";
    this.zok = "О•О О™О›О•ОћО¤О• О¤Оџ ОЈО©ОЈО¤Оџ О§ОЎО©ОњО‘ О¦ОҐО›О›ОџОҐ О“О™О‘ ОќО‘ О¤О•О¤ОЎО‘О О›О‘ОЈО™О‘ОЈО•О¤О• О¤Оџ ОљО•ОЎО”ОџОЈ ОЈО‘ОЈ";
    this.uyd = "О ОџОќО¤О‘ОЎО•О¤О• О“О™О‘ ОќО‘ О•О§О•О¤О• О¤О—Оќ О•ОҐОљО‘О™ОЎО™О‘ О ОџО›О›О‘О О›О‘ОЈО™О‘ОЈОњОџОҐ О¤ОџОҐ ОљО•ОЎО”ОџОҐОЈ ОЈО‘ОЈ";
    this.zrz = "ОЈП„О±П„О№ПѓП„О№ОєО¬";
    this.nol = "ОЈПЌОЅОїО»Ої ПЂО±О№П‡ОЅО№ОґО№ПЋОЅ";
    this.tqd = "ОЈП…ОЅОїО»О№ОєПЊ ПЂОїОЅП„О¬ПЃО№ПѓОјО±";
    this.hwj = "ОЈП…ОЅОїО»О№ОєПЊ ОєО­ПЃОґОїП‚";
    this.tmu = "ОЈП…ОЅОїО»О№ОєПЊП‚ П‡ПЃПЊОЅОїП‚ ПЂО±О№П‡ОЅО№ОґО№ОїПЌ";
    this.yrf = "EП‡П‰ ОґО№О±ОІО¬ПѓОµО№ П„Ої ОјО®ОЅП…ОјО±.";
    this.ezg = "О›О—ОћО—|О О‘О™О§ОќО™О”О™ОџОҐ";
    this.kaq = "О™ОЈО¤ОџОЎО™ОљОџ";
    this.cmo = "О‘ОєПЊОјО· ОґОµОЅ П…ПЂО¬ПЃП‡ОµО№ ОєО¬ПЂОїО№Ої ПЂО±О№П‡ОЅОЇОґО№.";
    this.state = "ОљО‘О¤AОЈО¤О‘ОЈО—";
    this.fek = "ОљПЌПЃО№Ої ПЂО±О№П‡ОЅОЇОґО№";
    this.gvh = "О‘П…П„ПЊОјО±П„О· О»О®П€О·";
    this.rsu = "О•О»О®П†ОёО·ПѓО±ОЅ";
    this.wff = "Bonusspins";
    this.dti = "О¤О¶ОїОіО¬ПЃП‰";
    this.aob = "HОјО№ПѓП…";
    this.cyq = "Respin";
    this.ljs = "ОњПЂПЊОЅОїП…Пѓ";
    this.snw = "О ПЃПЋП„Ої ОјОїОЇПЃО±ПѓОјО±";
    this.rcw = "О”ОµПЌП„ОµПЃОї ОјОїОЇПЃО±ПѓОјО±";
    this.ljf = "О¤ПЃОЇП„Ої ОјОїОЇПЃО±ПѓОјО±";
    this.jxn = "ОЈОҐОќО€О§О•О™О‘";
    this.yoh = "ОќО± ОјО·ОЅ ПЂПЃОїОІО»О·ОёОµОЇ ОѕО±ОЅО¬";
    this.nik = "О‘ОҐО¤ОџОњО‘О¤О—|О•ОќО‘ОЎОћО—";
    this.byq = "О¤О–ОџО“AОЎО©";
    this.zje = "О IОќО‘ОљО‘ОЈ ОљО•ОЎО”О©Оќ";
    this.ica = "О— П†ПЊПЃП„П‰ПѓО· О®П‡П‰ОЅ ОґОµОЅ ОµОЇОЅО±О№ ОµП†О№ОєП„О®!";
    this.sru = "О›ОµОЇПЂОїП…ОЅ ПЂПЊПЃОїО№!";
    this.oij = "О О±О№П‡ОЅОЇОґО№ П‡П‰ПЃОЇП‚ О®П‡Ої?";
    this.qxr = "О“П…ПЃОЇПѓП„Оµ П„О· ПѓП…ПѓОєОµП…О® ПѓО±П‚ ПѓОµ О»ОµО№П„ОїП…ПЃОіОЇО± ПЂОїПЃП„ПЃО­П„ОїП… ОіО№О± ОЅО± ПЂО±ОЇОѕОµП„Оµ ПЊПЂП‰П‚ ПѓОµ ОјО№О± ПЂПЃО±ОіОјО±П„О№ОєО® ОјО·П‡О±ОЅО® slot!";
    this.jyj = "О ПЃОїПѓО¬ПЃОјОїПѓОµ П„О·ОЅ ОµПЂО№П†О¬ОЅОµО№О± ОµПЃОіО±ПѓОЇО±П‚ ПѓП„О№П‚ ПЂПЃОїП„О№ОјО®ПѓОµО№П‚ ПѓОїП…!";
    this.rup = "О“О™О‘ О О•ОЎО™ОЈОЈОЊО¤О•ОЎО•ОЈ О О›О—ОЎОџО¦ОџОЎОЉО•ОЈ, О”О•ОЉО¤О• О¤ОџОҐОЈ ОљО‘ОќОџОќО™ОЈОњОџОЋОЈ О¤ОџОҐ О О‘О™О§ОќО™О”О™ОџОЋ.";
    this.eps = "О‘ОљОЋОЎО©ОЈО—";
    this.rbt = "ОЎОҐООњО‰ОЈО•О™П‚ AUTOSTART";
    this.qfi = "О‘ПЃО№ОёОјПЊП‚ ПЂО±О№П‡ОЅО№ОґО№ПЋОЅ:";
    this.vol = "О”О№О±ОєОїПЂО® autostart";
    this.ige = "ОњОїОЅО¬ОґОµП‚ П‡О±ОјО·О»ПЊП„ОµПЃО± О±ПЂПЊ:";
    this.ufy = "ОњОїОЅО¬ОґОµП‚ П…П€О·О»ПЊП„ОµПЃОµП‚ О±ПЂПЊ:";
    this.ops = "ОљО­ПЃОґОїП‚ П…П€О·О»ПЊП„ОµПЃОї О±ПЂПЊ:";
    this.wwl = "О¤Ої autostart ОёО± ПѓП„О±ОјО±П„О®ПѓОµО№ ОјОµ П„Ої ОѕОµОєОЇОЅО·ОјО± П„ОїП… ОјПЂПЊОЅОїП…П‚.";
    this.jwv = "ОљОїО№ОЅОїПЂОїОЇО·ПѓО· ПѓП„Ої Facebook";
    this.ok = "OK";
    this.umw = "О­О»ОµОіП‡Ої ПЂПЃО±ОіОјО±П„О№ОєПЊП„О·П„О±П‚";
    this.mgk = "О–О·П„О®ПѓО±П„Оµ П„ОїОЅ О­О»ОµОіП‡Ої ПЂПЃО±ОіОјО±П„О№ОєПЊП„О·П„О±П‚.";
    this.ayv = "О О±П„О®ПѓП„Оµ П„Ої О™ОЈО¤ОџОЎО™ОљОџ ОіО№О± ОЅО± ОґОµОЇП„Оµ П„Ої О№ПѓП„ОїПЃО№ОєПЊ П„П‰ОЅ ПЂО±О№П‡ОЅО№ОґО№ПЋОЅ ПѓО±П‚.";
    this.mkz = "Game break";
    this.lzi = "Game limits";
    this.reh = "Self test";
    this.bzr = "О”ОµОЅ П…ПЂО¬ПЃП‡ОµО№ ПѓПЌОЅОґОµПѓО· ОјОµ П„Ої ОґО№О±ОєОїОјО№ПѓП„О® ПЂО±О№П‡ОЅО№ОґО№ОїПЌ!";
    this.uzk = "О ПЃОїПѓПЂО¬ОёОµО№ОµП‚ ПѓПЌОЅОґОµПѓО·П‚";
    this.fvo = "О— ПѓПЌОЅОґОµПѓО· О±ПЂО­П„П…П‡Оµ!";
    this.jih = "О— ОµОЅОµПЃОіО® ПѓП…ОЅОµОґПЃОЇО± П…ПЂО¬ПЃП‡ОµО№ О®ОґО·!";
    this.dle = "О— ОО•О©ОЎО—О¤О™ОљО‰ О•О О™ОЈО¤ОЎОџО¦О‰ ОЈО¤ОџОќ О О‘ОЉОљО¤О— О“О™О‘ О‘ОҐО¤ОЊ О¤Оџ О О‘О™О§ОќОЉО”О™ О•ОЉОќО‘О™ XY."
}
pqm.prototype = new oag;

function ysn() {
    this.xhq = "РњРРќ. Р—РђР›РћР“ Р•";
    this.iao = "РњРђРљРЎ. Р—РђР›РћР“";
    this.rek = "РњРРќРРњ. Р—РђР›РћР“";
    this.mqv = "РњРђРљРЎ. Р—РђР›РћР“";
    this.vzf = "Р—РђР›РћР“";
    this.start = "РЎРўРђР Рў";
    this.lia = "РџРћРњРћР©";
    this.acc = "РџР›РђРќ РќРђ|РџР•Р§РђР›Р‘РРўР•";
    this.nng = "РњР•РќР®";
    this.lvw = "РџРћР’Р•Р§Р•|РР“Р Р";
    this.cld = "РЎРўРћРџ";
    this.vkp = "РљР Р•Р”РРў";
    this.dlg = "РР“Р РђРўРђ Р—РђР’РЄР РЁР";
    this.tgq = "РџР•Р§Р•Р›РРўР•!";
    this.jjq = "РЈРЎРџР•РҐ!";
    this.win = "РџР•Р§РђР›Р‘Рђ";
    this.sut = "РџРћРЎР›.РџР•Р§РђР›Р‘Рђ";
    this.ygw = "РџР РР‘РР РђРќР•";
    this.pgw = "РџР РР‘РР РђРќР•";
    this.cwc = "Р”РЈР‘Р›РР РђРќР•";
    this.rcy = "РђР’РўРћ|РЎРўРђР Рў";
    this.pmc = "Р”Р•Р›Р•РќР•|Р”РЈР‘Р›.";
    this.of = "РћРў";
    this.quj = "РР—РҐРћР”";
    this.cjt = "Р—РђРџРћР§РќР•РўР• РР“Р РђРўРђ";
    this.bxv = "РР—Р‘Р•Р Р•РўР• Р—РђР›РћР“";
    this.poo = "Р”Р•Р›Р•РќР•";
    this.aag = "РќРђРўРРЎРќР•РўР• РќРЇРљРћР™ Р‘РЈРўРћРќ Р—Рђ Р”Рђ РџР РћР”РЄР›Р–РРўР•";
    this.ret = "Р’Р РЄР©РђРќР•|РљРЄРњ|РР“Р РђРўРђ";
    this.lpo = "РћР‘Р©Рђ РџР•Р§РђР›Р‘Рђ";
    this.alm = "РќР• Р”РћРЎРўРђРўРЄР§Р•Рќ РљР Р•Р”РРў.";
    this.vlk = "Р‘РѕРЅСѓСЃ!";
    this.lfe = "Р‘РћРќРЈРЎ";
    this.gpg = "РњРћР›РЇ РР—Р§РђРљРђР™РўР• ...";
    this.yzm = "РџРѕРІРµС‡Рµ РРіСЂРё";
    this.xjg = "РўРЈР Р‘Рћ";
    this.oyz = "РџРћР’Р Р•Р”Рђ РђРќРЈР›РР Рђ Р’РЎРР§РљР Р—РђР›РђР“РђРќРРЇ Р РџР›РђР©РђРќРРЇ.";
    this.language = "Р•Р—РРљ";
    this.skt = "РџР РђР’РР›Рђ РќРђ РР“Р РђРўРђ";
    this.fjd = "РџР РђР’РР›Рђ|РќРђ РР“Р РђРўРђ";
    this.lnz = "Р—РђР Р•Р–Р”РђРќР• ...";
    this.hho = "Р—РђР Р•Р–Р”РђРќР• РќРђ РРЎРўРћР РРЇ ...";
    this.oyy = "Р”РѕСЃС‚РёРіРЅР° РµРґРёРЅ РѕС‚ Р»РёРјРёС‚РёС‚Рµ!";
    this.sjx = "РџСЂРµРґСѓРїСЂРµР¶РґРµРЅРёРµ";
    this.stp = "РљРѕРјСѓРЅРёРєР°С†РёРѕРЅРЅР° РіСЂРµС€РєР°";
    this.qbw = "Р”РѕСЃС‚РёРіРЅР°Р»Рё СЃС‚Рµ РјР°РєСЃРёРјР°Р»РЅРёСЏ Р±СЂРѕР№ Р±РµР·РїР»Р°С‚РЅРё РёРіСЂРё!";
    this.vnh = "РРіСЂР°С‚Р° С‰Рµ Р±СЉРґРµ Р·Р°С‚РІРѕСЂРµРЅР°";
    this.cua = "РРіСЂР°С‚Р° С‰Рµ Р±СЉРґРµ СЂРµСЃС‚Р°СЂС‚РёСЂР°РЅР°";
    this.mzm = "Р”РћРљРћРЎРќР•РўР• Р•РљР РђРќРђ, Р—Рђ Р”Рђ РџР РћР”РЄР›Р–РРўР•";
    this.uci = "РќРђРЎРўР РћР™РљР";
    this.pxk = "V A L U E";
    this.qdg = "РњРѕР»СЏ, РІРєР»СЋС‡РµС‚Рµ СѓСЃС‚СЂРѕР№СЃС‚РІРѕС‚Рѕ!";
    this.brk = "РРќР¤РћР РњРђР¦РРЇ";
    this.ijl = "РњРѕР»СЏ, РґРµР°РєС‚РёРІРёСЂР°Р№С‚Рµ Р§РђРЎРўР•Рќ Р Р•Р–РРњ РЅР° Р±СЂР°СѓР·СЉСЂР°, Р·Р° РґР° РёРіСЂР°РµС‚Рµ РёРіСЂР°С‚Р°.";
    this.zzo = "РўР°Р·Рё РёРіСЂР° Рµ РѕРїС‚РёРјРёР·РёСЂР°РЅР° Р·Р° Google Chrome.";
    this.xxk = "РњРѕР»СЏ, РёР·РїРѕР»Р·РІР°Р№С‚Рµ С‚РµРєСѓС‰Р°С‚Р° РІРµСЂСЃРёСЏ РЅР°";
    this.wjm = "Р—Р° СЃСЉР¶Р°Р»РµРЅРёРµ С‚РѕР·Рё Р±СЂР°СѓР·СЉСЂ РЅРµ СЃРµ РїРѕРґРґСЉСЂР¶Р° РЅР°РїСЉР»РЅРѕ.";
    this.aqq = "РўР°Р·Рё РёРіСЂР° РЅРµ РјРѕР¶Рµ РґР° СЃРµ СЃС‚Р°СЂС‚РёСЂР° РІ СЂРµР¶РёРј РЅР° СЃРІРѕР±РѕРґРЅР° РёРіСЂР°!";
    this.left = "Р›РЇР’Рђ";
    this.daj = "Р”РЇРЎРќРђ";
    this.cod = "РђР’РўРћ";
    this.zqs = "РЎРџР•Р§Р•Р›Р•РќРћ";
    this.ybm = "РїРµС‡Р°Р»Р±Рё";
    this.mcz = "РћР‘Р©Рћ";
    this.error = "Р“Р Р•РЁРљРђ";
    this.gvb = "Р‘Р•Р—РџР›РђРўРќРђ РР“Р Рђ";
    this.audio = "Р—Р’РЈРљ";
    this.zsk = "РњРЈР—РРљРђ";
    this.shj = "РџРЄР›Р•Рќ Р•РљР РђРќ";
    this.jwu = "РџРЄР›Р•Рќ|Р•РљР РђРќ";
    this.jrj = "РР” РќРђ РР“Р Рђ";
    this.adh = "Р’Р Р•РњР• РќРђ РР“Р Рђ";
    this.cxz = "РџРѕСЃР»РµРґРЅРё";
    this.ood = "РёРіСЂРё";
    this.isr = "Р”Р•РџРћР—РРў";
    this.ppe = "РР—Р‘Р•Р Р РџР РђР’РР›РќРђРўРђ Р‘РћРЇ, Р—Рђ Р”Рђ РЈР”Р’РћРРЁ РџР•Р§РђР›Р‘РђРўРђ";
    this.zok = "РР—Р‘Р•Р Р РџР РђР’РР›РќРђРўРђ Р‘РћРЇ, Р—Рђ Р”Рђ РЈР§Р•РўР’РћР РРЁ РџР•Р§РђР›Р‘РђРўРђ";
    this.uyd = "РР“Р РђР™ Р—Рђ РЁРђРќРЎ Р”Рђ РЈР’Р•Р›РР§РРЁ РџР•Р§РђР›Р‘РђРўРђ";
    this.zrz = "РЎС‚Р°С‚РёСЃС‚РёРєР°";
    this.nol = "РћР±С‰Рѕ РёРіСЂРё";
    this.tqd = "РћР±С‰Рѕ Р·Р°Р»РѕРі";
    this.hwj = "РћР±С‰Рѕ РїРµС‡Р°Р»Р±Рё";
    this.tmu = "РћР±С‰Рѕ РІСЂРµРјРµ РЅР° РёРіСЂР°";
    this.yrf = "РџСЂРѕС‡РµС‚РѕС… С‚РѕРІР° СЃСЉРѕР±С‰РµРЅРёРµ.";
    this.ezg = "РР—РҐРћР”|РћРў|РР“Р РђРўРђ";
    this.kaq = "РРЎРўРћР РРЇ";
    this.cmo = "РќСЏРјР° РёРіСЂР°РЅРё РёРіСЂРё.";
    this.state = "РЎРўРђРўРЈРЎ";
    this.fek = "РћСЃРЅРѕРІРЅР° РёРіСЂР°";
    this.gvh = "РђРІС‚РѕРјР°С‚РёС‡РЅРѕ СЃСЉР±СЂР°РЅРё";
    this.rsu = "РЎСЉР±СЂР°РЅРё";
    this.wff = "Р‘РѕРЅСѓСЃ-РёРіСЂРё";
    this.dti = "Р”СѓР±Р»РёСЂР°РЅРµ";
    this.aob = "РџРѕР»РѕРІРёРЅР°";
    this.cyq = "Respin";
    this.ljs = "Р‘РѕРЅСѓСЃ";
    this.snw = "РџСЉСЂРІРѕ СЂР°Р·РґР°РІР°РЅРµ";
    this.rcw = "Р’С‚РѕСЂРѕ СЂР°Р·РґР°РІР°РЅРµ";
    this.ljf = "РўСЂРµС‚Рѕ СЂР°Р·РґР°РІР°РЅРµ";
    this.jxn = "РџР РћР”РЄР›Р–Р•РќРР•";
    this.yoh = "РќРµ РїРѕРєР°Р·РІР°Р№ РѕС‚РЅРѕРІРѕ";
    this.nik = "AUTOSTART";
    this.byq = "Р”РЈР‘Р›РР РђРќР•";
    this.zje = "РџР›РђРќ РќРђ РџР•Р§РђР›Р‘РРўР•";
    this.ica = "Р—РІСѓРєСЉС‚ РЅРµ РјРѕР¶Рµ РґР° Р±СЉРґРµ Р·Р°СЂРµРґРµРЅ!";
    this.sru = "Р›РёРїСЃРІР°С‚ СЂРµСЃСѓСЂСЃРё!";
    this.oij = "РРіСЂР° Р±РµР· Р·РІСѓРє?";
    this.qxr = "Р—Р°РІСЉСЂС‚РµС‚Рµ СѓСЃС‚СЂРѕР№СЃС‚РІРѕС‚Рѕ СЃРё РІ РїРѕСЂС‚СЂРµС‚РµРЅ СЂРµР¶РёРј, Р·Р° РґР° РёРіСЂР°РµС‚Рµ РєР°С‚Рѕ РЅР° РёСЃС‚РёРЅСЃРєР° СЃР»РѕС‚ РјР°С€РёРЅР°!";
    this.jyj = "РќР°СЃС‚СЂРѕР№С‚Рµ РёРЅС‚РµСЂС„РµР№СЃР° РЅР° РёРіСЂР°С‚Р° СЃРїРѕСЂРµРґ СЃРІРѕРёС‚Рµ РЅСѓР¶РґРё!";
    this.rup = "Р—Рђ РџРћР’Р•Р§Р• РРќР¤РћР РњРђР¦РРЇ Р’РР–РўР• РџР РђР’РР›РђРўРђ РќРђ РР“Р РђРўРђ.";
    this.eps = "РР—Р§РРЎРўР’РђРќР•";
    this.rbt = "РќРђРЎРўР РћР™РљР РќРђ РђР’РўРћРњРђРўРР§РќРћРўРћ РЎРўРђР РўРР РђРќР•";
    this.qfi = "Р‘СЂРѕР№ РёРіСЂРё:";
    this.vol = "РЎРїСЂРё Р°РІС‚РѕРјР°С‚РёС‡РЅРёСЏ СЃС‚Р°СЂС‚";
    this.ige = "РљСЂРµРґРёС‚ РїРѕ-РјР°Р»СЉРє РѕС‚:";
    this.ufy = "РљСЂРµРґРёС‚ РїРѕ-РІРёСЃРѕРє РѕС‚:";
    this.ops = "РЎРїРµС‡РµР»Рё РїРѕРІРµС‡Рµ РѕС‚:";
    this.wwl = "РђРІС‚РѕРјР°С‚РёС‡РЅРѕС‚Рѕ СЃС‚Р°СЂС‚РёСЂР°РЅРµ С‰Рµ Р±СЉРґРµ СЃРїСЂСЏРЅРѕ РІ РЅР°С‡Р°Р»РѕС‚Рѕ РЅР° Р±РѕРЅСѓСЃР°.";
    this.jwv = "РЎРїРѕРґРµР»Рё РІСЉРІ Facebook";
    this.ok = "OK";
    this.umw = "Reality Check";
    this.mgk = "Р—Р°СЏРІРёР»Рё СЃС‚Рµ РїСЂРѕРІРµСЂРєР° РЅР° СЂРµР°Р»РЅРѕСЃС‚С‚Р°.";
    this.ayv = "РќР°С‚РёСЃРЅРµС‚Рµ РРЎРўРћР РРЇ, Р·Р° РґР° РІРёРґРёС‚Рµ С…СЂРѕРЅРѕР»РѕРіРёСЏС‚Р° СЃРё РЅР° РёРіСЂР°.";
    this.mkz = "Game break";
    this.lzi = "Game limits";
    this.reh = "Self test";
    this.bzr = "РќСЏРјР° РІСЂСЉР·РєР° СЃ РіРµР№РјРёРЅРі СЃСЉСЂРІСЉСЂР°!";
    this.uzk = "РћРїРёС‚Рё Р·Р° СЃРІСЉСЂР·РІР°РЅРµ";
    this.fvo = "РќРµСѓСЃРїРµС€РЅРѕ РІР»РёР·Р°РЅРµ!";
    this.jih = "Р’РµС‡Рµ СЃСЉС‰РµСЃС‚РІСѓРІР° Р°РєС‚РёРІРЅР° СЃРµСЃРёСЏ!";
    this.dle = "РўР•РћР Р•РўРР§РќРђРўРђ Р’РЄР—Р’Р РђР©РђР•РњРћРЎРў РќРђ РР“Р РђР§Рђ Р—Рђ РўРђР—Р РР“Р Рђ Р• XY."
}
ysn.prototype = new oag;

function ngr() {
    this.xhq = "бѓ›бѓбѓњбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ¤бѓЎбѓќбѓњбѓ бѓђбѓ бѓбѓЎ";
    this.iao = "бѓ›бѓђбѓҐбѓЎбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ¤бѓЎбѓќбѓњбѓ";
    this.rek = "бѓ›бѓбѓњбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ¤бѓЎбѓќбѓњбѓ";
    this.mqv = "бѓ›бѓђбѓҐбѓЎбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ¤бѓЎбѓќбѓњбѓ";
    this.vzf = "бѓ¤бѓЎбѓќбѓњбѓ";
    this.start = "бѓ“бѓђбѓ¬бѓ§бѓ”бѓ‘бѓђ";
    this.lia = "бѓ“бѓђбѓ®бѓ›бѓђбѓ бѓ”бѓ‘бѓђ";
    this.acc = "бѓ’бѓђбѓ“бѓђбѓ®бѓ“бѓбѓЎ бѓ›бѓ бѓбѓЄбѓ®бѓ•бѓ”бѓљбѓ";
    this.nng = "бѓ›бѓ”бѓњбѓбѓЈ";
    this.lvw = "бѓ›бѓ”бѓўбѓ|бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ";
    this.cld = "бѓ’бѓђбѓ©бѓ”бѓ бѓ”бѓ‘бѓђ";
    this.vkp = "бѓ™бѓ бѓ”бѓ“бѓбѓўбѓ";
    this.dlg = "бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓ“бѓђбѓЎбѓ бѓЈбѓљбѓ”бѓ‘бѓЈбѓљбѓбѓђ";
    this.tgq = "бѓ’бѓђбѓ›бѓђбѓ бѓЇбѓ•бѓ”бѓ‘бѓЈбѓљбѓ!";
    this.jjq = "бѓ’бѓбѓЎбѓЈбѓ бѓ•бѓ”бѓ‘бѓ— бѓ¬бѓђбѓ бѓ›бѓђбѓўбѓ”бѓ‘бѓђбѓЎ!";
    this.win = "бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.sut = "бѓ‘бѓќбѓљбѓќ бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.ygw = "бѓЁбѓ”бѓ’бѓ бѓќбѓ•бѓ”бѓ‘бѓђ";
    this.pgw = "бѓЁбѓ”бѓ’бѓ бѓќбѓ•бѓ”бѓ‘бѓђ";
    this.cwc = "бѓђбѓ–бѓђбѓ бѓўбѓ";
    this.rcy = "бѓђбѓ•бѓўбѓќ|бѓ“бѓђбѓ¬бѓ§бѓ”бѓ‘бѓђ";
    this.pmc = "бѓњбѓђбѓ®бѓ”бѓ•бѓђбѓ бѓ";
    this.quj = "бѓ’бѓђбѓ›бѓќбѓЎбѓ•бѓљбѓђ";
    this.cjt = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ“бѓђбѓ¬бѓ§бѓ”бѓ‘бѓђ";
    this.bxv = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓ¤бѓЎбѓќбѓњбѓ";
    this.poo = "бѓњбѓђбѓ®бѓ”бѓ•бѓђбѓ бѓ";
    this.ret = "бѓ—бѓђбѓ›бѓђбѓЁбѓ–бѓ”|бѓ“бѓђбѓ‘бѓ бѓЈбѓњбѓ”бѓ‘бѓђ";
    this.lpo = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.sjx = "бѓ’бѓђбѓ¤бѓ бѓ—бѓ®бѓбѓљбѓ”бѓ‘бѓђ";
    this.mcz = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ";
    this.gpg = "бѓ’бѓ—бѓ®бѓќбѓ•бѓ—, бѓ“бѓђбѓ”бѓљбѓќбѓ“бѓќбѓ— ...";
    this.yzm = "бѓ›бѓ”бѓўбѓ бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ";
    this.xjg = "бѓўбѓЈбѓ бѓ‘бѓќ";
    this.oyz = "бѓ’бѓђбѓЈбѓ›бѓђбѓ бѓ—бѓђбѓќбѓ‘бѓбѓЎ бѓЁбѓ”бѓ›бѓ—бѓ®бѓ•бѓ”бѓ•бѓђбѓЁбѓ бѓ§бѓ•бѓ”бѓљбѓђ бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ бѓ“бѓђ бѓњбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ бѓ¬бѓђбѓбѓЁбѓљбѓ”бѓ‘бѓђ.";
    this.jxn = "бѓ’бѓђбѓ’бѓ бѓ«бѓ”бѓљбѓ”бѓ‘бѓђ";
    this.nik = "бѓђбѓ•бѓўбѓќ бѓ“бѓђбѓ¬бѓ§бѓ”бѓ‘бѓђ";
    this.zje = "бѓ’бѓђбѓ“бѓђбѓ®бѓ“бѓбѓЎ бѓ›бѓ бѓбѓЄбѓ®бѓ•бѓ”бѓљбѓ";
    this.byq = "бѓђбѓ–бѓђбѓ бѓўбѓ";
    this.left = "бѓ›бѓђбѓ бѓЄбѓ®бѓњбѓбѓ•";
    this.daj = "бѓ›бѓђбѓ бѓЇбѓ•бѓњбѓбѓ•";
    this.cod = "бѓђбѓ•бѓўбѓќбѓ›бѓђбѓўбѓЈбѓ бѓђбѓ“";
    this.ok = "бѓ™бѓ";
    this.eps = "бѓ’бѓђбѓЈбѓҐбѓ›бѓ”бѓ‘бѓђ";
    this.dti = "бѓђбѓ–бѓђбѓ бѓўбѓ";
    this.aob = "бѓњбѓђбѓ®бѓ”бѓ•бѓђбѓ бѓ";
    this.skt = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ¬бѓ”бѓЎбѓ”бѓ‘бѓ";
    this.fjd = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ¬бѓ”бѓЎбѓ”бѓ‘бѓ";
    this.vlk = "BONUS!";
    this.lfe = "бѓ‘бѓќбѓњбѓЈбѓЎ";
    this.aag = "бѓ“бѓђбѓђбѓ­бѓбѓ бѓ”бѓ— бѓњбѓ”бѓ‘бѓбѓЎбѓ›бѓбѓ”бѓ  бѓ¦бѓбѓљбѓђбѓ™бѓЎ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓ’бѓ бѓ«бѓ”бѓљбѓќбѓ—";
    this.alm = "бѓђбѓ бѓђ бѓЎбѓђбѓ™бѓ›бѓђбѓ бѓбѓЎбѓ бѓ™бѓ бѓ”бѓ“бѓбѓўбѓ.";
    this.mzm = "бѓЁбѓ”бѓ”бѓ®бѓ”бѓ— бѓ”бѓ™бѓ бѓђбѓњбѓЎ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓ’бѓ бѓ«бѓ”бѓљбѓќбѓ—";
    this.lnz = "бѓ©бѓђбѓўбѓ•бѓбѓ бѓ—бѓ•бѓбѓЎ  ...";
    this.hho = "бѓ©бѓђбѓўбѓ•бѓбѓ бѓ—бѓ•бѓбѓЎ  бѓбѓЎбѓўбѓќбѓ бѓбѓђ  ...";
    this.stp = "бѓЎбѓђбѓ™бѓќбѓ›бѓЈбѓњбѓбѓ™бѓђбѓЄбѓбѓќ бѓЁбѓ”бѓЄбѓ“бѓќбѓ›бѓђ";
    this.oyy = "бѓ—бѓҐбѓ•бѓ”бѓњ бѓ”бѓ бѓ— бѓ”бѓ бѓ—бѓ бѓљбѓбѓ›бѓбѓўбѓ бѓђбѓ›бѓќбѓ¬бѓЈбѓ бѓ”бѓ—!";
    this.qbw = "бѓ—бѓҐбѓ•бѓ”бѓњ бѓЈбѓ¤бѓђбѓЎбѓќ бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓбѓЎ бѓ›бѓђбѓҐбѓЎбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ бѓђбѓќбѓ“бѓ”бѓњбѓќбѓ‘бѓбѓЎ бѓљбѓбѓ›бѓбѓўбѓ бѓЈбѓ™бѓ•бѓ” бѓђбѓ›бѓќбѓ¬бѓЈбѓ бѓ”бѓ—!";
    this.vnh = "бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓ“бѓђбѓЎбѓ бѓЈбѓљбѓ“бѓ”бѓ‘бѓђ";
    this.cua = "бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓ’бѓђбѓ“бѓђбѓбѓўбѓ•бѓбѓ бѓ—бѓ”бѓ‘бѓђ";
    this.zqs = "бѓ›бѓќбѓ’бѓ”бѓ‘бѓЈбѓљбѓбѓђ";
    this.ybm = "wins";
    this.pxk = "V A L U E";
    this.error = "бѓЁбѓ”бѓЄбѓ“бѓќбѓ›бѓђ";
    this.gvb = "бѓЈбѓ¤бѓђбѓЎбѓќ бѓ—бѓђбѓ›бѓђбѓЁбѓ";
    this.jrj = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ  бѓњбѓќбѓ›бѓ”бѓ бѓ";
    this.adh = "бѓЎбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓќ бѓ“бѓ бѓќ";
    this.cxz = "бѓ‘бѓќбѓљбѓќ ";
    this.ood = "бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ";
    this.isr = "бѓ“бѓ”бѓћбѓќбѓ–бѓбѓўбѓ";
    this.audio = "бѓ®бѓ›бѓђ";
    this.zsk = "бѓ›бѓЈбѓЎбѓбѓ™бѓђ";
    this.shj = "бѓЎбѓ бѓЈбѓљбѓ бѓ”бѓ™бѓ бѓђбѓњбѓ";
    this.jwu = "бѓЎбѓ бѓЈбѓљбѓ бѓ”бѓ™бѓ бѓђбѓњбѓ";
    this.language = "бѓ”бѓњбѓбѓЎ";
    this.yoh = "бѓ›бѓќбѓ›бѓђбѓ•бѓђбѓљбѓЁбѓ бѓђбѓ¦бѓђбѓ  бѓ©бѓ•бѓ”бѓњбѓ”бѓ‘бѓђ";
    this.ica = "бѓ®бѓ›бѓбѓЎ бѓ©бѓђбѓўбѓ•бѓбѓ бѓ—бѓ•бѓђ бѓ•бѓ”бѓ  бѓ®бѓ”бѓ бѓ®бѓ“бѓ”бѓ‘бѓђ!";
    this.sru = "бѓђбѓ бѓђбѓЎбѓђбѓ™бѓ›бѓђбѓ бѓбѓЎбѓ бѓ бѓ”бѓЎбѓЈбѓ бѓЎбѓ”бѓ‘бѓ!";
    this.oij = "бѓ’бѓбѓњбѓ“бѓђбѓ— бѓ®бѓ›бѓбѓЎ бѓ’бѓђбѓ бѓ”бѓЁбѓ” бѓбѓ—бѓђбѓ›бѓђбѓЁбѓќбѓ—?";
    this.qdg = "бѓ’бѓ—бѓ®бѓќбѓ•бѓ— бѓ›бѓќбѓђбѓ‘бѓ бѓЈбѓњбѓќбѓ— бѓ—бѓҐбѓ•бѓ”бѓњбѓ бѓ›бѓќбѓ¬бѓ§бѓќбѓ‘бѓбѓљбѓќбѓ‘бѓђ!";
    this.ijl = "бѓ’бѓ—бѓ®бѓќбѓ•бѓ—, бѓ’бѓђбѓ›бѓќбѓ бѓ—бѓќбѓ— бѓћбѓбѓ бѓђбѓ“бѓ бѓ бѓ”бѓџбѓбѓ›бѓ бѓ—бѓҐбѓ•бѓ”бѓњбѓЎ бѓ‘бѓ бѓђбѓЈбѓ–бѓ”бѓ бѓЁбѓ бѓ бѓќбѓ› бѓЁбѓ”бѓ«бѓљбѓќбѓ— бѓ—бѓђбѓ›бѓђбѓЁбѓ.";
    this.zzo = "бѓ”бѓЎ бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓќбѓћбѓўбѓбѓ›бѓбѓ–бѓбѓ бѓ”бѓ‘бѓЈбѓљбѓбѓђ Google Chrome-бѓбѓЎбѓђбѓ—бѓ•бѓбѓЎ.";
    this.yrk = "бѓ’бѓ—бѓ®бѓќбѓ•бѓ— бѓ’бѓђбѓ›бѓќбѓбѓ§бѓ”бѓњбѓќбѓ—";
    this.fxm = "-бѓбѓЎ бѓ›бѓбѓ›бѓ“бѓбѓњбѓђбѓ бѓ” бѓ•бѓ”бѓ бѓЎбѓбѓђ";
    this.wjm = "бѓЎбѓђбѓ›бѓ¬бѓЈбѓ®бѓђбѓ бѓќбѓ“, бѓђбѓ› бѓ‘бѓ бѓђбѓЈбѓ–бѓ”бѓ бѓ–бѓ” бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓЎбѓ бѓЈбѓљбѓђбѓ“ бѓ•бѓ”бѓ  бѓ®бѓ”бѓ бѓ®бѓ“бѓ”бѓ‘бѓђ.";
    this.aqq = "бѓђбѓ› бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓЈбѓ¤бѓђбѓЎбѓќбѓ“ бѓЁбѓ”бѓЈбѓ«бѓљбѓ”бѓ‘бѓ”бѓљбѓбѓђ!";
    this.qxr = "бѓ©бѓђбѓ бѓ—бѓ”бѓ— бѓ—бѓҐбѓ•бѓ”бѓњбѓ бѓ›бѓќбѓ¬бѓ§бѓќбѓ‘бѓбѓљбѓќбѓ‘бѓђ бѓћбѓќбѓ бѓўбѓ бѓ”бѓўбѓбѓЎ бѓ бѓ”бѓџбѓбѓ›бѓ–бѓ” бѓ бѓќбѓ› бѓбѓ—бѓђбѓ›бѓђбѓЁбѓќбѓ— бѓбѓЎбѓ” бѓ—бѓбѓ—бѓҐбѓќбѓЎ бѓ бѓ”бѓђбѓљбѓЈбѓ  бѓЎбѓљбѓќбѓў бѓ›бѓќбѓ¬бѓ§бѓќбѓ‘бѓбѓљбѓќбѓ‘бѓђбѓ–бѓ” бѓ—бѓђбѓ›бѓђбѓЁбѓќбѓ‘бѓ“бѓ”бѓ—!";
    this.jyj = "бѓ›бѓќбѓђбѓ бѓ’бѓ”бѓ— бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓбѓњбѓўбѓ”бѓ бѓ¤бѓ”бѓбѓЎбѓ бѓ—бѓҐбѓ•бѓ”бѓњбѓЎ бѓЎбѓђбѓ­бѓбѓ бѓќбѓ”бѓ‘бѓ”бѓ‘бѓЎ!";
    this.ppe = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓЎбѓ¬бѓќбѓ бѓ бѓ¤бѓ”бѓ бѓ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓќбѓ бѓ›бѓђбѓ’бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.zok = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓ™бѓђбѓ бѓўбѓбѓЎ бѓЎбѓ¬бѓќбѓ бѓ бѓ¤бѓ”бѓ бѓ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓќбѓ—бѓ®бѓ›бѓђбѓ’бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.uyd = "бѓ“бѓђбѓ“бѓ”бѓ— бѓ¤бѓЎбѓќбѓњбѓ бѓ бѓќбѓ› бѓ’бѓђбѓ–бѓђбѓ бѓ“бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓбѓЎ бѓЁбѓђбѓњбѓЎбѓ";
    this.nol = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ";
    this.tqd = "бѓ¤бѓЎбѓќбѓњбѓ бѓ›бѓ—бѓљбѓбѓђбѓњбѓђбѓ“";
    this.hwj = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.tmu = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ бѓЎбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓќ бѓ“бѓ бѓќ";
    this.yrf = "бѓ›бѓ” бѓ’бѓђбѓ•бѓ”бѓЄбѓђбѓњбѓ бѓђбѓ› бѓ’бѓ–бѓђбѓ•бѓњбѓбѓљбѓЎ.";
    this.ezg = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ|бѓ“бѓђбѓ›бѓ—бѓђбѓ•бѓ бѓ”бѓ‘бѓђ";
    this.kaq = "бѓ›бѓќбѓ•бѓљбѓ”бѓњбѓ”бѓ‘бѓбѓЎ бѓ©бѓђбѓњбѓђбѓ¬бѓ”бѓ бѓ";
    this.cmo = "бѓњбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ бѓђбѓ  бѓђбѓ бѓбѓЎ.";
    this.state = "бѓ›бѓ“бѓ’бѓќбѓ›бѓђбѓ бѓ”бѓќбѓ‘бѓђ";
    this.fek = "бѓ«бѓбѓ бѓбѓ—бѓђбѓ“бѓ бѓ—бѓђбѓ›бѓђбѓЁбѓ";
    this.gvh = "бѓђбѓ•бѓўбѓќбѓ›бѓђбѓўбѓЈбѓ бѓђбѓ“ бѓЁбѓ”бѓ’бѓ бѓќбѓ•бѓ”бѓ‘бѓђ";
    this.rsu = "бѓђбѓ¦бѓ”бѓ‘бѓЈбѓљ бѓбѓҐбѓњбѓђ";
    this.snw = "бѓћбѓбѓ бѓ•бѓ”бѓљбѓ бѓ“бѓђбѓ бѓбѓ’бѓ”бѓ‘бѓђ";
    this.rcw = "бѓ›бѓ”бѓќбѓ бѓ” бѓ“бѓђбѓ бѓбѓ’бѓ”бѓ‘бѓђ";
    this.ljf = "бѓ›бѓ”бѓЎбѓђбѓ›бѓ” бѓ“бѓђбѓ бѓбѓ’бѓ”бѓ‘бѓђ";
    this.rbt = "бѓђбѓ•бѓўбѓќбѓ’бѓђбѓ›бѓЁбѓ•бѓ”бѓ‘бѓбѓЎ бѓћбѓђбѓ бѓђбѓ›бѓ”бѓўбѓ бѓ”бѓ‘бѓ";
    this.qfi = "бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓбѓЎ бѓ бѓђбѓќбѓ“бѓ”бѓњбѓќбѓ‘бѓђ:";
    this.vol = "бѓЁбѓ”бѓђбѓ©бѓ”бѓ бѓ”бѓ— бѓђбѓ•бѓўбѓќбѓ’бѓђбѓ›бѓЁбѓ•бѓ”бѓ‘бѓ";
    this.ige = "бѓ™бѓ бѓ”бѓ“бѓбѓўбѓ бѓЈбѓ¤бѓ бѓќ бѓ“бѓђбѓ‘бѓђбѓљбѓ бѓ•бѓбѓ“бѓ бѓ”:";
    this.ufy = "бѓ™бѓ бѓ”бѓ“бѓбѓўбѓ бѓЈбѓ¤бѓ бѓќ бѓ›бѓђбѓ¦бѓђбѓљбѓ бѓ•бѓбѓ“бѓ бѓ”:";
    this.ops = "бѓ›бѓќбѓбѓ’бѓ”бѓ— бѓЈбѓ¤бѓ бѓќ бѓ›бѓ”бѓўбѓ бѓ•бѓбѓ“бѓ бѓ”:";
    this.wwl = "бѓђбѓ•бѓўбѓќбѓ’бѓђбѓ›бѓЁбѓ•бѓ”бѓ‘бѓ бѓЁбѓ”бѓ©бѓ”бѓ бѓ“бѓ”бѓ‘бѓђ бѓ‘бѓќбѓњбѓЈбѓЎбѓбѓЎ бѓ“бѓђбѓЎбѓђбѓ¬бѓ§бѓбѓЎбѓЁбѓ.";
    this.jwv = "бѓ’бѓђбѓђбѓ–бѓбѓђбѓ бѓ”бѓ— бѓ¤бѓ”бѓбѓЎбѓ‘бѓЈбѓҐбѓ–бѓ”";
    this.zrz = "бѓЎбѓўбѓђбѓўбѓбѓЎбѓўбѓбѓ™бѓђ";
    this.of = "/";
    this.wff = "Bonus бѓ—бѓђбѓ›бѓђбѓЁбѓ";
    this.ljs = "бѓ‘бѓќбѓњбѓЈбѓЎбѓ";
    this.brk = "бѓбѓњбѓ¤бѓќбѓ бѓ›бѓђбѓЄбѓбѓђ";
    this.uci = "бѓћбѓђбѓ бѓђбѓ›бѓ”бѓўбѓ .";
    this.cyq = "бѓ®бѓ”бѓљбѓђбѓ®бѓљбѓђ бѓ“бѓђбѓўбѓ бѓбѓђбѓљбѓ”бѓ‘бѓбѓЎ";
    this.rup = "бѓ›бѓ”бѓўбѓ бѓбѓњбѓ¤бѓќбѓ бѓ›бѓђбѓЄбѓбѓбѓЎбѓђбѓ—бѓ•бѓбѓЎ, бѓбѓ®бѓбѓљбѓ”бѓ— бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ¬бѓ”бѓЎбѓ”бѓ‘бѓ.";
    this.umw = "бѓ бѓ”бѓђбѓљбѓќбѓ‘бѓбѓЎ бѓЁбѓ”бѓ›бѓќбѓ¬бѓ›бѓ”бѓ‘бѓђ";
    this.mgk = "бѓ—бѓҐбѓ•бѓ”бѓњ бѓ›бѓќбѓбѓ—бѓ®бѓќбѓ•бѓ”бѓ— бѓ бѓ”бѓђбѓљбѓќбѓ‘бѓбѓЎ бѓЁбѓ”бѓ›бѓќбѓ¬бѓ›бѓ”бѓ‘бѓђ.";
    this.ayv = "бѓ—бѓҐбѓ•бѓ”бѓњбѓ бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓбѓЎбѓўбѓќбѓ бѓбѓбѓЎ бѓЎбѓђбѓњбѓђбѓ®бѓђбѓ•бѓђбѓ“ бѓ“бѓђбѓђбѓ­бѓбѓ бѓ”бѓ— бѓ›бѓќбѓ•бѓљбѓ”бѓњбѓ”бѓ‘бѓбѓЎ бѓ©бѓђбѓњбѓђбѓ¬бѓ”бѓ бѓ-бѓЎ.";
    this.mkz = "Game break";
    this.lzi = "Game limits";
    this.reh = "Self test";
    this.bzr = "бѓЎбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓќ бѓЎбѓ”бѓ бѓ•бѓ”бѓ бѓ–бѓ” бѓ“бѓђбѓ™бѓђбѓ•бѓЁбѓбѓ бѓ”бѓ‘бѓђ бѓ•бѓ”бѓ  бѓ›бѓќбѓ®бѓ”бѓ бѓ®бѓ“бѓђ!";
    this.uzk = "бѓ“бѓђбѓ™бѓђбѓ•бѓЁбѓбѓ бѓ”бѓ‘бѓбѓЎ бѓ›бѓЄбѓ“бѓ”бѓљбѓќбѓ‘бѓ”бѓ‘бѓ";
    this.fvo = "бѓЁбѓ”бѓЎбѓ•бѓљбѓђ бѓ•бѓ”бѓ  бѓ›бѓќбѓ®бѓ”бѓ бѓ®бѓ“бѓђ!";
    this.jih = "бѓђбѓҐбѓўбѓбѓЈбѓ бѓ бѓЎбѓ”бѓЎбѓбѓђ бѓЈбѓ™бѓ•бѓ” бѓђбѓ бѓЎбѓ”бѓ‘бѓќбѓ‘бѓЎ!";
    this.dle = "бѓ—бѓ”бѓќбѓ бѓбѓЈбѓљбѓ бѓ“бѓђбѓ‘бѓ бѓЈбѓњбѓ”бѓ‘бѓђ бѓ›бѓќбѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ–бѓ” бѓђбѓ› бѓ—бѓђбѓ›бѓђбѓЁбѓЁбѓ бѓђбѓ бѓбѓЎ XY."
}
ngr.prototype = new oag;

function ymb() {
    this.xhq = "A MINIMUM TГ‰T";
    this.iao = "MAXIMUM TГ‰T";
    this.rek = "MIN. TГ‰T";
    this.mqv = "MAX. TГ‰T";
    this.vzf = "TГ‰T";
    this.start = "START";
    this.lia = "SГљGГ“";
    this.acc = "SГљGГ“";
    this.nng = "MENГњ";
    this.lvw = "MENГњ";
    this.cld = "STOP";
    this.vkp = "HITEL";
    this.dlg = "A JГЃTГ‰KNAK VГ‰GE";
    this.tgq = "NYEREMГ‰NY!";
    this.jjq = "SOK SZERENCSГ‰T!";
    this.win = "NYEREMГ‰NY";
    this.sut = "UTOLSГ“ NYER.";
    this.ygw = "FELГЌR";
    this.pgw = "FELГЌR";
    this.cwc = "SZORZГЃS";
    this.rcy = "AUTO|START";
    this.pmc = "FELEZГ‰S";
    this.quj = "KILГ‰PГ‰S";
    this.cjt = "START";
    this.bxv = "VГЃLASSZON TГ‰TET";
    this.poo = "FELEZГ‰S";
    this.ret = "VISSZA A|JГЃTГ‰KHOZ";
    this.lpo = "Г–sszes NyeremГ©ny";
    this.sjx = "FigyelmeztetГ©s";
    this.mcz = "Г–SSZES";
    this.gpg = "KГ‰REM VГЃRJON ...";
    this.yzm = "MenГј";
    this.xjg = "SEBESSГ‰G";
    this.oyz = "A MEGHIBГЃSODГЃS Г‰RVГ‰NYTELENГЌT MINDEN JГЃTГ‰KOT Г‰S KIFIZETГ‰ST.";
    this.jxn = "TOVГЃBB";
    this.nik = "AUTOSTART";
    this.zje = "SГљGГ“";
    this.byq = "SZORZГЃS";
    this.left = "BAL";
    this.daj = "JOBB";
    this.ok = "OK";
    this.eps = "MГ‰GSEM";
    this.dti = "SzorzГЎs";
    this.aob = "FelezГ©s";
    this.skt = "JГЃTГ‰KSZABГЃLYOK";
    this.fjd = "JГЃTГ‰KSZABГЃLYOK";
    this.vlk = "BГіnusz!";
    this.lfe = "BГ“NUSZ";
    this.aag = "A FOLYTATГЃSHOZ NYOMJON MEG EGY GOMBOT";
    this.alm = "NINCS ELГ‰G HITEL";
    this.pxk = "V A L U E";
    this.ybm = "nyeremГ©nyek";
    this.of = "/";
    this.mzm = "Г‰RINTSE MEG A KГ‰PERNYЕђT A FOLYTATГЃSHOZ";
    this.lnz = "BETГ–LTГ‰SE ...";
    this.hho = "JГЃTГ‰K TГ–RTГ‰NET BETГ–LTГ‰SE ...";
    this.stp = "KommunikГЎciГіs hiba";
    this.oyy = "ElГ©rte az egyik limitet!";
    this.qbw = "ElГ©rte a szabad jГЎtГ©kok maximum szГЎmГЎt!";
    this.vnh = "A jГЎtГ©k megГЎllГ­tva";
    this.cua = "JГЎtГ©k Гєjraindul";
    this.zqs = "NYERT";
    this.error = "HIBA";
    this.gvb = "FREEPLAY";
    this.cod = "AUTO";
    this.jrj = "JГЃTГ‰K ID";
    this.adh = "JГЎtГ©k IdЕ‘";
    this.cxz = "utolsГі";
    this.ood = "jГЎtГ©k";
    this.isr = "HITEL";
    this.audio = "HANG";
    this.zsk = "ZENE";
    this.shj = "TELJES KГ‰PERNYЕђ";
    this.jwu = "TELJES KГ‰PERNYЕђ";
    this.language = "NYELV";
    this.yoh = "Ne mutassa mГ©gegyszer";
    this.ica = "A hangot nem lehet betГ¶lteni!";
    this.sru = "ForrГЎsok hiГЎnyoznak!";
    this.oij = "JГЎtГ©k hang nГ©lkГјl?";
    this.uci = "BEГЃLLГЌTГЃS";
    this.qdg = "KГ©rjГјk fordГ­tsa el a kГ©szГјlГ©ket!";
    this.brk = "INFГ“";
    this.ijl = "A jГЎtГ©khoz kГ©rem tiltsa le a PrivГЎt BГ¶ngГ©szГ©s mГіdot a bГ¶ngГ©szЕ‘jГ©ben.";
    this.zzo = "Ez a jГЎtГ©k Google Chrome bГ¶ngГ©szЕ‘re van optimalizГЎlva.";
    this.yrk = "KГ©rjГјk hasznГЎlja a(z)";
    this.fxm = " legГєjabb verziГіjГЎt!";
    this.wjm = "Sajnos ez a bГ¶ngГ©szЕ‘ nem teljesen tГЎmogatott.";
    this.aqq = "Ez a jГЎtГ©k nem indГ­thatГі FreePlay mГіdban!";
    this.qxr = "FordГ­tsa a kГ©szГјlГ©kГ©t ГЎllГі mГіdba, hogy Гєgy jГЎtsszon, mint egy igazi nyerЕ‘gГ©pen!";
    this.jyj = "ГЃllГ­tsa be a jГЎtГ©k felГјletГ©t az Г–n igГ©nyeinek megfelelЕ‘en!";
    this.ppe = "VГЃLASSZA KI A MEGFELELЕђ SZГЌNT, HOGY MEGDUPLГЃZZA A NYEREMГ‰NYT";
    this.zok = "VГЃLASSZA KI A MEGFELELЕђ KГЃRTYASZГЌNT, HOGY MEGNГ‰GYSZEREZZE A NYEREMГ‰NYT";
    this.uyd = "SZORZГЃS EGY LEHETЕђSГ‰G, HOGY NГ–VELJE A NYEREMГ‰NYT";
    this.zrz = "Statisztika";
    this.nol = "Г–sszes JГЎtГ©k";
    this.tqd = "Г–sszes TГ©t";
    this.hwj = "Г–sszes NyeremГ©ny";
    this.tmu = "Г–sszes JГЎtГ©k IdЕ‘";
    this.yrf = "Elolvastam az Гјzenetet.";
    this.ezg = "KILГ‰PГ‰S";
    this.kaq = "ElЕ‘zmГ©nyek";
    this.cmo = "Nincsenek jГЎtГ©kok.";
    this.state = "STГЃTUSZ";
    this.fek = "FЕ‘ JГЎtГ©k";
    this.gvh = "Autom. FelГ­rГЎs";
    this.rsu = "FelГ­rva";
    this.wff = "BГіnusz jГЎtГ©k";
    this.cyq = "Respin";
    this.ljs = "BГіnusz";
    this.snw = "ElsЕ‘ LeosztГЎs";
    this.rcw = "MГЎsodik LeosztГЎs";
    this.ljf = "Harmadik LeosztГЎs";
    this.rbt = "AUTOSTART BEГЃLLГЌTГЃS";
    this.qfi = "JГЎtГ©kok szГЎma:";
    this.vol = "Stop autostart";
    this.ige = "A hitel kevesebb, mint:";
    this.ufy = "A hitel tГ¶bb, mint:";
    this.ops = "A nyeremГ©ny tГ¶bb, mint:";
    this.wwl = "Az AUTOSTART funkciГі kikapcsolГіdik a bГіnusz jГЎtГ©k kezdetГ©n.";
    this.jwv = "MegosztГЎs a Facebook-on";
    this.rup = "KIEGГ‰SZГЌTЕђ TГЃJГ‰KOZTATГЃST A JГЃTГ‰KSZABГЃLYOKBAN TALГЃL.";
    this.umw = "Reality Check";
    this.mgk = "Г–n egy valГіsГЎg-ellenЕ‘rzГ©st kГ©rt.";
    this.ayv = "Nyomja meg az ELЕђZMГ‰NYEK lehetЕ‘sГ©get, hogy megtekintse a jГЎtГ©ka elЕ‘zmГ©nyeit.";
    this.mkz = "Game break";
    this.lzi = "Game limits";
    this.reh = "Self test";
    this.bzr = "Nincs kapcsolat a jГЎtГ©k-szerverrel!";
    this.uzk = "KapcsolГіdГЎsi prГіbГЎlkozГЎs";
    this.fvo = "BejelentkezГ©si hiba!";
    this.jih = "Egy szekciГі mГЎr aktГ­v!";
    this.dle = "A JГЃTГ‰KOSNAK AZ ELVI KIFIZETГ‰S Г–SSZEGE EBBEN A JГЃTГ‰KBAN XY."
}
ymb.prototype = new oag;

function yjy() {
    this.xhq = "MIZA MINIMД‚ ESTE";
    this.iao = "MIZA MAXIMД‚";
    this.rek = "MIZA MIN.";
    this.mqv = "MIZA MAX.";
    this.vzf = "MIZД‚";
    this.start = "START";
    this.lia = "AJUTOR";
    this.acc = "LISTA|CГ‚ЕћTIGURI";
    this.nng = "MENIU";
    this.lvw = "MENIUL|JOCULUI";
    this.cld = "STOP";
    this.vkp = "CREDIT";
    this.dlg = "SFГ‚RЕћIT JOCUL";
    this.tgq = "CГ‚ЕћTIGД‚TOR!";
    this.jjq = "MULT NOROC!";
    this.win = "CГ‚ЕћTIG";
    this.sut = "ULTIMUL CГ‚ЕћTIG";
    this.ygw = "COLECTA";
    this.pgw = "COLECTA";
    this.cwc = "JOC";
    this.rcy = "AUTO|START";
    this.pmc = "COLECTARE|1/2";
    this.quj = "IEЕћIRE";
    this.cjt = "APД‚SAЕўI START";
    this.bxv = "ALEGEЕўI MIZA";
    this.poo = "COLECTARE|1/2";
    this.ret = "ГЋNAPOI|LA JOC";
    this.lpo = "CГўЕџtig total";
    this.sjx = "Avertizare";
    this.mcz = "TOTAL";
    this.gpg = "AЕћTEPTAЕўI VД‚ ROG ...";
    this.yzm = "Meniul Jocului";
    this.xjg = "VITEZД‚";
    this.oyz = "FД‚RД‚ GARANЕўIE LA DEFECTAREA APARATULUI.";
    this.jxn = "CONTINUARE";
    this.nik = "AUTOSTART";
    this.zje = "LISTA CГ‚ЕћTIGURI";
    this.byq = "JOC";
    this.left = "STГ‚NGA";
    this.daj = "DREAPTA";
    this.ok = "OK";
    this.eps = "ГЋNTRERUPERE";
    this.dti = "Joc";
    this.aob = "Colectare 1/2";
    this.skt = "REGULILE JOCULUI";
    this.fjd = "REGULILE|JOCULUI";
    this.vlk = "Bonus!";
    this.lfe = "BONUS";
    this.aag = "PENTRU CONTINUARE APASД‚ PE UN BUTON";
    this.alm = "CREDIT INSUFICIENT.";
    this.ybm = "cГўЕџtigДѓ";
    this.pxk = "V A L U E";
    this.of = "DIN";
    this.mzm = "ATINGEИљI ECRANUL PENTRU A CONTINUA";
    this.lnz = "ГЋNCARCД‚ ...";
    this.hho = "ГЋNCARCД‚ ISTORIC ...";
    this.stp = "Eroare de comunicare";
    this.oyy = "AЕЈi atins una dintre limite!";
    this.qbw = "AЕЈi atins numДѓrul maxim de jocuri gratis!";
    this.vnh = "Jocul se Г®ncheie";
    this.cua = "Jocul se restarteazДѓ";
    this.zqs = "CГ‚ЕћTIGAT";
    this.error = "EROARE";
    this.gvb = "FREEPLAY";
    this.cod = "AUTO";
    this.jrj = "ID JOC";
    this.adh = "TIMP DE JOC";
    this.cxz = "ultimele";
    this.ood = "jocuri";
    this.isr = "CREDIT";
    this.audio = "AUDIO";
    this.zsk = "MUZICД‚";
    this.shj = "ECRAN COMPLET";
    this.jwu = "ECRAN|COMPLET";
    this.language = "LIMBA";
    this.yoh = "Nu reafiИ™aИ›i";
    this.ica = "Sunetele nu pot fi Г®ncДѓrcate!";
    this.sru = "Lipsesc resurse!";
    this.oij = "JucaЕЈi fДѓrДѓ sunet?";
    this.uci = "SETД‚RI";
    this.qdg = "VДѓ rugДѓm opriЕЈi aparatul!";
    this.brk = "INFO";
    this.ijl = "VДѓ rugДѓm dezactivaЕЈi PRIVATE MODE Г®n browser-ul dvs. pentru a juca.";
    this.zzo = "Acest joc este optimizat pentru Google Chrome.";
    this.xxk = "VДѓ rugДѓm utilizaЕЈi versiunea actualДѓ";
    this.wjm = "Din pДѓcate acest browser nu este sprijinit complet.";
    this.aqq = "Acest joc nu poate fi pornit Г®n modul freeplay!";
    this.qxr = "TreceЕЈi aparatul dvs. Г®n modul portret, pentru a juca ca la o maЕџinДѓ automatДѓ!";
    this.jyj = "AjusteazДѓ interfaЕЈa de joc nevoilor dvs!";
    this.ppe = "SELECTEAZД‚ CULOAREA CORECTД‚ PENTRU DUBLAREA CГ‚ЕћTIGULUI";
    this.zok = "SELECTEAZД‚ CULOAREA CORECTД‚ A CД‚RЕўII PENTRU A CГ‚ЕћTIGA DE 4 ORI";
    this.uyd = "JOACД‚ PENTRU ЕћANSA DE A CREЕћTE PROFITUL";
    this.zrz = "StatisticДѓ";
    this.nol = "NumДѓr jocuri";
    this.tqd = "Pariuri totale";
    this.hwj = "CГўЕџtig total";
    this.tmu = "Timp total de joc";
    this.yrf = "Am citit mesajul.";
    this.ezg = "ГЋNCHEIERE|JOC";
    this.kaq = "ISTORIC";
    this.cmo = "Nu existДѓ jocuri.";
    this.state = "STATUT";
    this.fek = "Joc principal";
    this.gvh = "Auto colectare";
    this.rsu = "Colectat";
    this.wff = "Bonusspins";
    this.cyq = "Respin";
    this.ljs = "Bonus";
    this.snw = "Primul Deal";
    this.rcw = "Al doilea deal";
    this.ljf = "Al treilea deal";
    this.rbt = "SETД‚RI AUTOSTART";
    this.qfi = "NumДѓrul jocurilor:";
    this.vol = "Oprire autostart";
    this.ige = "Credit sub:";
    this.ufy = "Credit peste:";
    this.ops = "CГўИ™tig peste:";
    this.wwl = "Autostart se va opti la Г®nceperea bonusului.";
    this.jwv = "Distribuie Facebook";
    this.rup = "PENTRU INFORMAЕўII SUPLIMENTARE, VEZI REGULILE JOCULUI.";
    this.umw = "Reality Check";
    this.mgk = "Ai cerut un Reality Check.";
    this.ayv = "ApasДѓ ISTORIC pentru a vedea istoricul tДѓu de joc.";
    this.mkz = "Game break";
    this.lzi = "Game limits";
    this.reh = "Self test";
    this.bzr = "FДѓrДѓ conexiune la serverul de jocuri!";
    this.uzk = "Tentative de conectare";
    this.fvo = "Conectare nereuЕџitДѓ!";
    this.jih = "ExistДѓ deja o sesiune activДѓ!";
    this.dle = "DECONTAREA TEORETICД‚ CД‚TRE JUCД‚TORI A ACESTUI JOC ESTE DE XY."
}
yjy.prototype = new oag;

function grb() {
    this.xhq = "MГЌNIMA APOSTA Г‰";
    this.iao = "MГЃX. APOSTA";
    this.rek = "MГЌN. APOSTA";
    this.mqv = "MГЃX. APOSTA";
    this.vzf = "APOSTA";
    this.start = "PARTIDA";
    this.lia = "AJUDA";
    this.acc = "ESQUEMA|DE PAGOS";
    this.nng = "MENU";
    this.lvw = "SELEГ‡ГѓO|DE JOGOS";
    this.cld = "PARADA";
    this.vkp = "CRГ‰DITO";
    this.dlg = "FIM DO JOGO";
    this.tgq = "VENCEDOR!";
    this.jjq = "BOA SORTE!";
    this.win = "GANHO";
    this.sut = "ULTIMO GANHO";
    this.ygw = "COLETAR";
    this.pgw = "COLETAR";
    this.cwc = "JOGADA";
    this.rcy = "AUTO|PARTIDA";
    this.pmc = "METADE";
    this.quj = "SAГЌDA";
    this.cjt = "PREMIR PARTIDA";
    this.bxv = "SELECIONAR APOSTA";
    this.poo = "METADE";
    this.ret = "VOLTAR|PARA|O JOGO";
    this.lpo = "Ganho total";
    this.sjx = "Aviso";
    this.mcz = "TOTAL";
    this.gpg = "AGUARDE POR FAVOR ...";
    this.yzm = "SeleГ§ГЈo de jogos";
    this.xjg = "VELOCIDADE";
    this.oyz = "NГѓO SE ASSUME RESPONSABILIDADE POR AVARIAS NA MГЃQUINA.";
    this.jxn = "CONTINUAR";
    this.nik = "AUTOPARTIDA";
    this.zje = "ESQUEMA DE PAGOS";
    this.byq = "JOGADA";
    this.left = "ESQUERDA";
    this.daj = "DIREITA";
    this.ok = "OK";
    this.eps = "CANCELAR";
    this.dti = "Jogada";
    this.aob = "Metade";
    this.skt = "REGRAS DO JOGO";
    this.fjd = "REGRAS|DO JOGO";
    this.vlk = "Bonus!";
    this.lfe = "BONUS";
    this.aag = "PREMIR QUALQUER TECLA PARA CONTINUAR";
    this.alm = "NГѓO HГЃ CRГ‰DITO SUFICIENTE!";
    this.ybm = "ganha";
    this.pxk = "V A L U E";
    this.of = "DE";
    this.mzm = "TOCAR NA TELA PARA CONTINUAR";
    this.lnz = "CARREGANDO ...";
    this.hho = "CARREGANDO HISTГ“RICO ...";
    this.stp = "Erro de comunicaГ§ГЈo";
    this.oyy = "AlcanГ§ou um dos limities!";
    this.qbw = "AlcanГ§ou a quantidade mГЎxima de jogos livres!";
    this.vnh = "O jogo serГЎ encerrado";
    this.cua = "O jogo serГЎ reiniciado";
    this.zqs = "GANHOU";
    this.error = "ERRO";
    this.gvb = "FREEPLAY";
    this.cod = "AUTO";
    this.jrj = "ID JOGO";
    this.adh = "Playing Time";
    this.cxz = "Гљltimos";
    this.ood = "jogos";
    this.isr = "DEPOSIT";
    this.audio = "AUDIO";
    this.zsk = "MUSIC";
    this.shj = "TELA CHEIA";
    this.jwu = "TELA|CHEIA";
    this.language = "IDIOMA";
    this.yoh = "NГЈo exibir novamente";
    this.ica = "Sounds nГЈo podem ser carregados!";
    this.sru = "Faltam recursos!";
    this.oij = "Jogar sem som?";
    this.uci = "AJUSTES";
    this.qdg = "Favor girar o seu aparelho!";
    this.brk = "INFORMAГ‡ГѓO";
    this.ijl = "Favor desativar o MODO PRIVADO no browser para iniciar o jogo.";
    this.zzo = "Este jogo Г© otimizado por Google Chrome.";
    this.xxk = "Favor usar a versГЈo atual de";
    this.wjm = "Infelizmente este browser nГЈo Г© completamente suportado.";
    this.aqq = "Este jogo nГЈo pode ser iniciado no modo de jogo livre!";
    this.qxr = "Girar o seu aparelho para o modo de portrait, para jogar como em uma mГЎquina real!";
    this.jyj = "Adapte a interface do jogo Г s suas necessidades!";
    this.ppe = "ESCOLHA A COR CERTA PARA DOBRAR O GANHO";
    this.zok = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.uyd = "GAMBLE PARA A CHANCE DE AUMENTAR O GANHO";
    this.zrz = "EstatГ­sticas";
    this.nol = "NГєmero de jogos";
    this.tqd = "Aposta total";
    this.hwj = "Ganho total";
    this.tmu = "Tempo total do jogo";
    this.yrf = "Eu lГ­ esta mensagem.";
    this.ezg = "ENCERRAR|JOGO";
    this.kaq = "HISTГ“RICO";
    this.cmo = "Ainda nГЈo existem jogos.";
    this.state = "ESTADO";
    this.fek = "Jogo principal";
    this.gvh = "Coletado automaticamente";
    this.rsu = "Coletado";
    this.wff = "Bonusspins";
    this.cyq = "Respin";
    this.ljs = "Bonus";
    this.snw = "Primeiro Deal";
    this.rcw = "Segundo Deal";
    this.ljf = "Terceiro Deal";
    this.rbt = "AJUSTES AUTOPARTIDA";
    this.qfi = "NГєmero de jogos:";
    this.vol = "Parar autopartida";
    this.ige = "CrГ©dito menor do que:";
    this.ufy = "CrГ©dito maior do que:";
    this.ops = "Ganho maior do que:";
    this.wwl = "O autopartida serГЎ parado no inГ­cio do bonus.";
    this.jwv = "Participar no Facebook";
    this.rup = "PARA MAIS INFORMAГ‡Г•ES, CONSULTE AS REGRAS DO JOGO.";
    this.umw = "Reality Check";
    this.mgk = "Solicitaste um Reality Check.";
    this.ayv = "Pressione HISTГ“RICO para ver seu histГіrico de jogos.";
    this.mkz = "Game break";
    this.lzi = "Game limits";
    this.reh = "Self test";
    this.bzr = "Nenhuma conexГЈo com o servidor do jogo!";
    this.uzk = "Tentativas de conexГЈo";
    this.fvo = "Login falhou!";
    this.jih = "Ja existe uma sessГЈo ativa!";
    this.dle = "O PAGAMENTO TEГ“RICO AO JOGADOR PARA ESTE JOGO Г‰ DE XY."
}
grb.prototype = new oag;

function mfp() {
    this.xhq = "LA MISE MINIMALE EST DE";
    this.iao = "MISE MAX.";
    this.rek = "MISE MINI";
    this.mqv = "MISE MAX.";
    this.vzf = "MISE";
    this.start = "DEPART";
    this.lia = "AIDE";
    this.acc = "TABLEAU|DES PAIEMENTS";
    this.nng = "MENU";
    this.lvw = "PLUS|DE JEUX";
    this.cld = "ARRГЉTEZ";
    this.vkp = "CRГ‰DIT";
    this.dlg = "FIN DU JEU";
    this.tgq = "GAGNANT!";
    this.jjq = "BONNE CHANCE!";
    this.win = "GAIN";
    this.sut = "DERNIER GAIN";
    this.ygw = "ENCAISSER";
    this.pgw = "ENCAISSER";
    this.cwc = "DOUBLER";
    this.rcy = "AUTO|LANCER";
    this.pmc = "ENCAISSER|MOITIГ‰";
    this.quj = "SORTIE";
    this.cjt = "APPUYEZ SUR START";
    this.bxv = "CHOISIR LA MISE";
    this.poo = "ENCAISSER|MOITIГ‰";
    this.ret = "RETOUR|AU JEU";
    this.lpo = "Gain total";
    this.sjx = "Avertissement";
    this.mcz = "TOTALE";
    this.gpg = "ATTENDEZ S'IL VOUS PLAГЋT ...";
    this.yzm = "Plus de jeux";
    this.xjg = "VITESSE";
    this.oyz = "ГЃ L'OCCASION DВґERREUR DВґAPPAREIL DГ‰CLINER TOUTE RESPONSABILITГ‰.";
    this.jxn = "CONTINUER";
    this.nik = "AUTO LANCER";
    this.zje = "TABLEAU DES PAIEMENTS";
    this.byq = "DOUBLER";
    this.left = "GAUCHE";
    this.daj = "DROITE";
    this.ok = "OK";
    this.eps = "ANNULER";
    this.dti = "Doubler";
    this.aob = "Encaisser moitiГ©";
    this.skt = "RГ€GLES DU JEU";
    this.fjd = "RГ€GLES DU JEU";
    this.vlk = "Bonus!";
    this.lfe = "BONUS";
    this.aag = "APPUYEZ SUR UNE TOUCHE POUR CONTINUER";
    this.alm = "PAS ASSEZ DE CRГ‰DIT";
    this.ybm = "gagne";
    this.pxk = "V A L U E";
    this.of = "SUR";
    this.mzm = "EFFLEURE L'Г‰CRAN POUR CONTINUER";
    this.lnz = "CHARGEMENT EN COURS ...";
    this.hho = "CHARGEMENT DE L'HISTORIQUE EN COURS ...";
    this.stp = "Erreur de communication";
    this.oyy = "Vous avez atteint une des limites!";
    this.qbw = "Vous avez atteint le nombre maximum des jeux gratuits!";
    this.vnh = "Le jeu sera terminГ©";
    this.cua = "Le jeu sera dГ©marrГ© de nouveau";
    this.zqs = "GAGNГ‰";
    this.error = "ERREUR";
    this.gvb = "JEU GRATUIT";
    this.cod = "AUTO";
    this.jrj = "ID DU JEU";
    this.adh = "TEMPS DE JEU";
    this.cxz = "Les";
    this.ood = "derniers jeux";
    this.isr = "AVOIR";
    this.audio = "AUDIO";
    this.zsk = "MUSIQUE";
    this.shj = "PLEIN Г‰CRAN";
    this.jwu = "PLEIN|Г‰CRAN";
    this.language = "LANGUE";
    this.yoh = "Ne pas afficher encore une fois";
    this.ica = "Impossible de charger des sounds!";
    this.sru = "Manque de ressources!";
    this.oij = "Jouer sans son?";
    this.uci = "CONFIGUR.";
    this.qdg = "Merci de tourner votre matГ©riel!";
    this.brk = "INFO";
    this.ijl = "Veuillez dГ©sactiver le MODE PRIVГ‰ dans le navigateur afin de dГ©marrer le jeu.";
    this.zzo = "Ce jeu est optimisГ© pour Google Chrome.";
    this.xxk = "Veuilllez utiliser la version Г  jour de";
    this.wjm = "Malheureusement, ce browser n'est intГ©gralement supportГ©.";
    this.aqq = "Impossible de dГ©marrer ce jeu au mode jeu gratuit!";
    this.qxr = "Tournez votre matГ©riel dans le mode portrait pour jouer comme sur une vГ©ritable machine!";
    this.jyj = "Adapte l'interface de jeu Г  tes besoins!";
    this.ppe = "CHOISIS LA BONNE COULEUR AFIN DE DOUBLER LE GAIN";
    this.zok = "CHOISIS LA BONNE COULEUR DE LA CARTE AFIN DE QUADRUPLER LE GAIN";
    this.uyd = "GAMBLE POUR LA CHANCE DE MULTIPLIER LE GAIN";
    this.zrz = "Statistiques";
    this.nol = "Nombre des jeux";
    this.tqd = "Total des mises";
    this.hwj = "Gain total";
    this.tmu = "Temps total du jeu";
    this.yrf = "J'ai lu le message";
    this.ezg = "TERMINER|LE JEU";
    this.kaq = "Historique";
    this.cmo = "Il n'y a pas encore de jeux jouГ©s.";
    this.state = "Г‰TAT";
    this.fek = "Jeu principal";
    this.gvh = "Pris automatiquement";
    this.rsu = "Pris";
    this.wff = "Bonusspins";
    this.cyq = "Respin";
    this.ljs = "Bonus";
    this.snw = "Premier Deal";
    this.rcw = "DeuxiГЁme Deal";
    this.ljf = "TroisiГЁme Deal";
    this.rbt = "AUTOSTART CONFIGURATION";
    this.qfi = "Nombre des jeux:";
    this.vol = "ArrГЄter autostart";
    this.ige = "CrГ©dit infГ©rieur Г :";
    this.ufy = "CrГ©dit supГ©rieur Г :";
    this.ops = "Gain supГ©rieur Г :";
    this.wwl = "L'autostart est arrГЄtГ© au dГ©but du bonus.";
    this.jwv = "Partager sur Facebook";
    this.rup = "POUR PLUS D'INFORMATIONS, CONSULTEZ LES RГ€GLES DU JEU.";
    this.umw = "Reality Check";
    this.mgk = "Tu as demandГ© un Reality Check.";
    this.ayv = "Appuie sur HISTORIQUE pour afficher ton historique de jeu.";
    this.mkz = "Game break";
    this.lzi = "Game limits";
    this.reh = "Self test";
    this.bzr = "Aucune connexion avec le gaming serveur!";
    this.uzk = "Tentatives de connexion";
    this.fvo = "Connexion Г©chouГ©e!";
    this.jih = "Il y a dГ©jГ  une session active!";
    this.dle = "LE VERSEMENT THГ‰ORIQUE AU JOUEUR POUR CE JEU S'Г‰LГ€VE ГЂ XY."
}
mfp.prototype = new oag;

function uxc() {
    this.xhq = "NAJMANJI ULOG JE";
    this.iao = "MAX ULOG";
    this.rek = "MIN. ULOG";
    this.mqv = "MAKS. ULOG";
    this.vzf = "ULOG";
    this.start = "START";
    this.lia = "POMOД†";
    this.acc = "LISTA DOBITAKA";
    this.nng = "IZBORNIK";
    this.lvw = "VIЕ E|IGARA";
    this.cld = "STOP";
    this.vkp = "KREDIT";
    this.dlg = "KRAJ IGRE";
    this.tgq = "DOBITAK!";
    this.jjq = "SRETNO!";
    this.win = "DOBITAK";
    this.sut = "ZADNJI DOBITAK";
    this.ygw = "UPIЕ I";
    this.pgw = "UPIЕ I";
    this.cwc = "DUPLANJE";
    this.rcy = "AUTO|START";
    this.pmc = "UZMI|1/2";
    this.quj = "IZLAZ";
    this.cjt = "PRITISNITE START";
    this.bxv = "BIRAJTE ULOG";
    this.poo = "UZMI|1/2";
    this.ret = "POVRATAK|U IGRU";
    this.lpo = "Ukupni dobitci";
    this.sjx = "Upozorenje";
    this.mcz = "UKUPNI";
    this.gpg = "MOLIMO PRIДЊEKAJTE ...";
    this.yzm = "ViЕЎe igara";
    this.xjg = "BRZINA";
    this.oyz = "Kod kvara na ureД‘aju nema jamstva.";
    this.jxn = "DALJE";
    this.nik = "AUTOSTART";
    this.zje = "LISTA DOBITAKA";
    this.byq = "DUPLANJE";
    this.left = "LIJEVA";
    this.daj = "DESNA";
    this.ok = "OK";
    this.eps = "PREKID";
    this.dti = "Duplanje";
    this.aob = "Uzmi 1/2";
    this.skt = "PRAVILA IGRE";
    this.fjd = "PRAVILA IGRE";
    this.vlk = "Bonus!";
    this.lfe = "BONUS";
    this.aag = "ZA NASTAVITI PRITISNITE BILO KOJU TIPKU";
    this.alm = "NEMATE DOVOLJNO KREDITA.";
    this.ybm = "dobici";
    this.pxk = "V A L U E";
    this.of = "OD";
    this.mzm = "ZA NASTAVAK DODIRNITE ZASLON";
    this.lnz = "UДЊITAVANJA ...";
    this.hho = "POVIJEST UДЊITAVANJA ...";
    this.stp = "Komunikacijska pogreЕЎka";
    this.oyy = "Dostigli ste jednu od graniДЌnih vrijednosti!";
    this.qbw = "Dostigli ste maksimum besplatnih igara!";
    this.vnh = "Igra se zatvara";
    this.cua = "Igra se iznova uДЌitava";
    this.zqs = "OSVOJENO";
    this.error = "POGREЕ KA";
    this.gvb = "FREEPLAY";
    this.cod = "AUTO";
    this.jrj = "ID IGRE";
    this.adh = "Vrijeme igre";
    this.cxz = "posljednjih";
    this.ood = "igara";
    this.isr = "DEPOZIT";
    this.audio = "ZVUKA";
    this.zsk = "GLAZBA";
    this.shj = "PUN ZASLON";
    this.jwu = "PUN ZASLON";
    this.language = "JEZIKA";
    this.yoh = "Ne prikazuj ponovo";
    this.ica = "Zvukovi se ne mogu uДЌitati!";
    this.sru = "Nedostaju resursi!";
    this.oij = "ЕЅelite li igrati uz zvuk?";
    this.uci = "POSTAVKE";
    this.qdg = "UkljuДЌite svoj ureД‘aj!";
    this.brk = "INFORMACIJE";
    this.ijl = "Molimo deaktivirajte PRIVATNI MOD u VaЕЎem pregledniku kako biste mogli igrati";
    this.zzo = "Ova igra je optimizirana za Google Chrome.";
    this.xxk = "Molimo koristite se trenutnom inaДЌicom";
    this.wjm = "NaЕѕalost ovaj preglednik nije u potpunosti podrЕѕan";
    this.aqq = "Ova se igra ne moЕѕe pokrenuti u reЕѕimu slobodne igre!";
    this.qxr = "Podesite svoj ureД‘aj na portretni format kako biste igrali kao na pravoma automatu!";
    this.jyj = "Prilagodite suДЌelje igre svojim potrebama!";
    this.ppe = "ODABERI PRAVU BOJU I TIME UDVOSTRUДЊI DOBITAK";
    this.zok = "ODABERI PRAVI ZNAK I TIME UДЊETVEROSTRUДЊI DOBITAK";
    this.uyd = "KOCKANJEM OSVOJI Е ANSU ZA POVEД†ANJE DOBITKA";
    this.zrz = "Statistike";
    this.nol = "Ukupno igara";
    this.tqd = "Ukupni ulog";
    this.hwj = "Ukupno dobitaka";
    this.tmu = "Ukupno vrijeme igre";
    this.yrf = "ProДЌitao sam ovu poruku";
    this.ezg = "IZLAZ|IZ IGRE";
    this.kaq = "Povijest";
    this.cmo = "Nema odigranih igara.";
    this.state = "STANJE";
    this.fek = "Glavna igra";
    this.gvh = "Auto. pokupljeno";
    this.rsu = "Pokupljeno";
    this.wff = "Besplatne igre";
    this.cyq = "Dodatne okretaje";
    this.ljs = "Bonus";
    this.snw = "Prvo dijeljenje";
    this.rcw = "Drugo dijeljenje";
    this.ljf = "TreД‡e dijeljenje";
    this.rbt = "POSTAVKE AUTOMATSKE IGRE";
    this.qfi = "Ukupno igara:";
    this.vol = "Zaustavljanje automatske igre";
    this.ige = "Kredit manji od:";
    this.ufy = "Kredit veД‡i od:";
    this.ops = "Dobitak veД‡i od:";
    this.wwl = "Automatska igra Д‡e se zaustaviti na poДЌetku besplatne igre.";
    this.jwv = "Podijeli na Facebooku";
    this.rup = "ZA VIЕ E INFORMACIJA POGLEDAJTE PRAVILA IGRE.";
    this.umw = "Reality Check";
    this.mgk = "ZatraЕѕili ste Reality Check.";
    this.ayv = "Pritisni POVIJEST za pregled prijaЕЎnjih igara.";
    this.mkz = "Game break";
    this.lzi = "Game limits";
    this.reh = "Self test";
    this.bzr = "Nema konekcije sa serverom za igranje!";
    this.uzk = "PokuЕЎaji povezivanja";
    this.fvo = "Prijavljivanje nije uspjelo!";
    this.jih = "Aktivna sesija veД‡ postoji!";
    this.dle = "TEORETSKI POVRATAK NA IGRAДЊA ZA OVU IGRU JE XY."
}
uxc.prototype = new oag;

function wyu() {
    this.xhq = "MINIMA PUNTATA Г€";
    this.iao = "PUNTATA MASSIMA";
    this.rek = "MIN. PUNTATA";
    this.mqv = "MASS. PUNTATA";
    this.vzf = "PUNTATA";
    this.start = "START";
    this.lia = "AIUTO";
    this.acc = "TABELLA VINCITE";
    this.nng = "MENU";
    this.lvw = "SCELTA|GIOCHI";
    this.cld = "STOP";
    this.vkp = "CREDITO";
    this.dlg = "FINE PARTITA";
    this.tgq = "VINCITORE!";
    this.jjq = "BUONA FORTUNA!";
    this.win = "VINCITA";
    this.sut = "ULTIMA VINCITA";
    this.ygw = "INCASSA";
    this.pgw = "INCASSA";
    this.cwc = "GAMBLE";
    this.rcy = "AUTO|START";
    this.pmc = "METГЂ";
    this.quj = "FINE";
    this.cjt = "PREMI START";
    this.bxv = "SCEGLI PUNTATA";
    this.poo = "METГЂ";
    this.ret = "RITORNO|AL GIOCO";
    this.lpo = "Totale vincita";
    this.sjx = "Attenzione";
    this.mcz = "TOTALE";
    this.gpg = "ATTENDERE PREGO ...";
    this.yzm = "Scelta Giochi";
    this.xjg = "VELOCITГЂ";
    this.oyz = "In caso di malfunzionamento nessuna responsabilitГ  assunta.";
    this.jxn = "CONTINUA";
    this.nik = "AUTOSTART";
    this.zje = "TABELLA VINCITE";
    this.byq = "GAMBLE";
    this.left = "SINISTRA";
    this.daj = "DESTRA";
    this.ok = "OK";
    this.eps = "CANCELLA";
    this.dti = "Gamble";
    this.aob = "MetГ ";
    this.skt = "REGOLAMENTO";
    this.fjd = "REGOLAMENTO";
    this.vlk = "Bonus!";
    this.lfe = "BONUS";
    this.aag = "PREMI UN TASTO PER CONTINUARE";
    this.alm = "CREDITO INSUFFICIENTE!";
    this.ybm = "vince";
    this.pxk = "V A L U E";
    this.of = "DI";
    this.mzm = "TOCCARE LO SCHERMO PER CONTINUARE";
    this.lnz = "STA CARICANDO ...";
    this.hho = "STA CARICANDO LA CRONACA ...";
    this.stp = "Errore di comunicazione";
    this.oyy = "Hai raggiunto uno dei limiti!";
    this.qbw = "Hai raggiunto il numero massimo di free games!";
    this.vnh = "La partita sta terminando";
    this.cua = "La partita sta ripartendo";
    this.zqs = "VINTO";
    this.error = "ERRORE";
    this.gvb = "FREEPLAY";
    this.cod = "AUTO";
    this.jrj = "GAME ID";
    this.adh = "Durata del gioco";
    this.cxz = "Ultime partite";
    this.ood = "";
    this.isr = "DEPOSITO";
    this.audio = "AUDIO";
    this.zsk = "MUSICA";
    this.shj = "SCHERMO INTERO";
    this.jwu = "SCHERMO INTERO";
    this.language = "LINGUA";
    this.yoh = "Non mostrare di nuovo";
    this.ica = "Suoni non caricabili!";
    this.sru = "Mancano risorse!";
    this.oij = "Giocare senza suoni?";
    this.uci = "SETTAGGI";
    this.qdg = "Prego girare l'apparecchio!";
    this.brk = "INFO";
    this.ijl = "Prego disattivare il MODO PRIVATO nel browser per iniziare la partita";
    this.zzo = "La partita ГЁ ottimizzata per Google Chrome.";
    this.xxk = "Prego utilizzare la versione attuale di";
    this.wjm = "Purtroppo il presente browser non viene supportato interamente";
    this.aqq = "Impossibile avviare questa partita nel modo freeplay!";
    this.qxr = "Girare l'apparecchio nel modo ritratto per giocare come su un apparecchio vero!";
    this.jyj = "Aggiusta l'interfaccia del gioco come ti piace!";
    this.ppe = "SCEGLI IL COLORE GIUSTO PER RADDOPPIARE LA VINCITA";
    this.zok = "SCEGLI IL SEME GIUSTO PER QUADRUPLARE LA VINCITA";
    this.uyd = "GAMBLE PER L'OPPORTUNITГЂ DI AUMENTARE LA VINCITA";
    this.zrz = "Statistica";
    this.nol = "Totale partite";
    this.tqd = "Totale puntata";
    this.hwj = "Totale vincita";
    this.tmu = "Totale durata del gioco";
    this.yrf = "Ho letto il messaggio";
    this.ezg = "TERMINARE|LA PARTITA";
    this.kaq = "Cronaca";
    this.cmo = "Nessuna partita giocata.";
    this.state = "STATO";
    this.fek = "Partita principale";
    this.gvh = "Raccolto autom.";
    this.rsu = "Raccolto";
    this.wff = "Bonusspin";
    this.cyq = "Respin";
    this.ljs = "Bonus";
    this.snw = "Primo deal";
    this.rcw = "Secondo deal";
    this.ljf = "Terzo deal";
    this.rbt = "SETTAGGI AUTOSTART";
    this.qfi = "Numero di partite:";
    this.vol = "Fermare l'autostart";
    this.ige = "Credito piГ№ basso di:";
    this.ufy = "Credito piГ№ alto di:";
    this.ops = "Vincita piГ№ alta di:";
    this.wwl = "L'autostart si ferma all'inizio del bonus.";
    this.jwv = "Dividi su facebook";
    this.rup = "PER ULTERIORI INFORMAZIONI CONSULTARE LE REGOLE DI GIOCO.";
    this.umw = "Reality Check";
    this.mgk = "Avete richiesto un Reality Check.";
    this.ayv = "Premere CRONACA per mostrare la cronaca della giocata.";
    this.mkz = "Game break";
    this.lzi = "Game limits";
    this.reh = "Self test";
    this.bzr = "Nessuna connessione al gaming server!";
    this.uzk = "Tentativi di connessione";
    this.fvo = "Login fallito!";
    this.jih = "Г€ giГ  attiva una seduta!";
    this.dle = "IL PAGAMENTO TEORICO DI QUESTO GIOCO IN FAVORE DEL GIOCATORE AMMONTA A XY."
}
wyu.prototype = new oag;

function hcr() {
    this.xhq = "MIN. INSATSEN Г„R";
    this.iao = "MAXIMAL INSATS";
    this.rek = "MIN. INSATS";
    this.mqv = "MAX. INSATS";
    this.vzf = "INSATS";
    this.start = "STARTA";
    this.lia = "HJГ„LP";
    this.acc = "VINSTTABELL";
    this.nng = "MENY";
    this.lvw = "FLER|SPEL";
    this.cld = "STOPP";
    this.vkp = "KREDIT";
    this.dlg = "SPELET Г„R SLUT";
    this.tgq = "VINNARE!";
    this.jjq = "LYCKA TILL!";
    this.win = "VINN";
    this.sut = "SENASTE VINSTEN";
    this.ygw = "INKASSERA";
    this.pgw = "INKASSERA";
    this.cwc = "DUBBLERA";
    this.rcy = "AUTO|START";
    this.pmc = "HГ„LFTEN|1/2";
    this.quj = "AVSLUTA";
    this.cjt = "TRYCK PГ… STARTA";
    this.bxv = "VГ„LJ INSATS";
    this.poo = "HГ„LFTEN";
    this.ret = "Г…TERGГ…|TILL SPELET";
    this.lpo = "Total Vinst";
    this.sjx = "Varning";
    this.mcz = "TOTALT";
    this.gpg = "VAR VГ„NLIG VГ„NTA ...";
    this.yzm = "Fler spel";
    this.xjg = "TEMPO";
    this.oyz = "Vid tekniskt fel annulleras alla insatser och spel.";
    this.jxn = "FORTSГ„TT";
    this.nik = "AUTOSTART";
    this.zje = "VINSTTABELL";
    this.byq = "DUBBLERA";
    this.left = "VГ„NSTER";
    this.daj = "HГ–GER";
    this.ok = "OK";
    this.eps = "AVBRYT";
    this.dti = "Dubblering";
    this.aob = "HГ¤lften";
    this.skt = "SPELREGLER";
    this.fjd = "SPELREGLER";
    this.vlk = "Bonus!";
    this.lfe = "BONUS";
    this.aag = "TRYCK PГ… EN KNAPP FГ–R ATT FORTSГ„TTA";
    this.alm = "FГ–R LГ…GT SALDO!";
    this.ybm = "vinster";
    this.pxk = "V A L U E";
    this.of = "AV";
    this.mzm = "PEKA PГ… SKГ„RMEN FГ–R ATT FORTSГ„TTA";
    this.lnz = "LГ„SER ...";
    this.hho = "LГ„SER IN HISTORIKEN ...";
    this.stp = "Kommunikationsfel";
    this.oyy = "Du har nГҐtt en av grГ¤nserna!";
    this.qbw = "Du har nГҐtt det maximala antalet gratisspel!";
    this.vnh = "Spelet avslutas";
    this.cua = "Spelet startas om";
    this.zqs = "VUNNA";
    this.error = "FEL";
    this.gvb = "GRATISSPEL";
    this.cod = "AUTO";
    this.jrj = "SPEL-ID";
    this.adh = "SPELTID";
    this.cxz = "senaste";
    this.ood = "spelen";
    this.isr = "INSГ„TTNING";
    this.audio = "LJUD";
    this.zsk = "MUSIK";
    this.shj = "HELSKГ„RM";
    this.jwu = "HELSKГ„RM";
    this.language = "SPRГ…K";
    this.yoh = "Visa inte igen";
    this.ica = "Ljud kan inte laddas!";
    this.sru = "Resurser saknas!";
    this.oij = "Spela utan ljud?";
    this.uci = "INSTГ„LLN.";
    this.qdg = "VГ¤nd din enhet!";
    this.brk = "INFO";
    this.ijl = "Avaktivera PRIVATLГ„GET i din webblГ¤sare fГ¶r att spela spelet.";
    this.zzo = "Det hГ¤r spelet Г¤r optimerat fГ¶r Google Chrome.";
    this.xxk = "AnvГ¤nd den senaste versionen av";
    this.wjm = "TyvГ¤rr stГ¶ds inte den hГ¤r webblГ¤saren fullt ut.";
    this.aqq = "Det hГ¤r spelet kan inte startas i gratisspelslГ¤get!";
    this.qxr = "HГҐll din enhet i portrГ¤ttlГ¤ge fГ¶r att spela som pГҐ en riktig spelautomat!";
    this.jyj = "Anpassa spelgrГ¤nssnittet efter dina behov!";
    this.ppe = "VГ„LJ RГ„TT FГ„RG FГ–R ATT DUBBLA VINSTEN";
    this.zok = "VГ„LJ RГ„TT FГ„RGSVIT FГ–R ATT FYRDUBBLA VINSTEN";
    this.uyd = "SPELA FГ–R ATT FГ… CHANSEN ATT Г–KA VINSTEN";
    this.zrz = "Statistik";
    this.nol = "Totalt antal spel";
    this.tqd = "Totalinsats";
    this.hwj = "Totalvinst";
    this.tmu = "Total speltid";
    this.yrf = "Jag har lГ¤st detta meddelande";
    this.ezg = "AVSLUTA|SPELET";
    this.kaq = "Historik";
    this.cmo = "Inga spel har spelats.";
    this.state = "STATUS";
    this.fek = "Huvudspel";
    this.gvh = "Auto. Inkasserat";
    this.rsu = "Inkasserat";
    this.wff = "Bonusspinn";
    this.cyq = "Respin";
    this.ljs = "Bonus";
    this.snw = "FГ¶rsta given";
    this.rcw = "Andra given";
    this.ljf = "Tredje given";
    this.rbt = "AUTOSPELINSTГ„LLNINGAR";
    this.qfi = "Antal spelrundor:";
    this.vol = "Stoppa automatiskt spel";
    this.ige = "Saldo lГ¤gre Г¤n:";
    this.ufy = "Saldo hГ¶gre Г¤n:";
    this.ops = "Vinst hГ¶gre Г¤n:";
    this.wwl = "Autospelen kommer att stoppas dГҐ bonusen startar.";
    this.jwv = "Dela pГҐ Facebook";
    this.rup = "SE SPELREGLERNA FГ–R MER INFORMATION.";
    this.umw = "Reality Check";
    this.mgk = "Du har begГ¤rt att fГҐ en statusuppdatering.";
    this.ayv = "Tryck pГҐ HISTORIK fГ¶r att visa din spelhistorik.";
    this.mkz = "Spelpaus";
    this.lzi = "SpelgrГ¤nser";
    this.reh = "SjГ¤lvtest";
    this.bzr = "Ingen anslutning till spelservern!";
    this.uzk = "AnslutningsfГ¶rsГ¶k";
    this.fvo = "Inloggningen misslyckades!";
    this.jih = "Det finns redan en aktiv session!";
    this.dle = "DEN TEORETISKA Г…TERBETALNINGEN TILL SPELAREN FГ–R DET HГ„R SPELET Г„R XY."
}
hcr.prototype = new oag;

function lcp() {
    this.pco = "HELD";
    this.aeh = "RED";
    this.bzy = "BLACK";
    this.krl = "HIGH";
    this.usj = "LOW";
    this.fcy = "DEAL CARDS";
    this.kqa = "HOLD CARDS";
    this.pxe = "DRAW CARDS";
    this.bzb = "five equivalent cards (only possible with a wild card)";
    this.inn = "ace - king - queen - jack - ten of the same suit";
    this.upj = "STRAIGHT with cards of the same suit";
    this.xue = "four cards of the same rank";
    this.ala = "combination of THREE OF A KIND and a PAIR";
    this.thd = "five cards of the same suit";
    this.lda = "five cards in rank order, but not of the same suit";
    this.iya = "three cards of the same rank";
    this.lmc = "two distinct pairs and any 5th card";
    this.xmi = "two jacks, queens, kings or aces";
    this.ouz = "four cards of the same suit with any 5th card";
    this.axp = "straight with ace in the center";
    this.acd = "combination of figures which contains jack, queen and king";
    this.ucg = "sequence with even or odd successive values";
    this.dwi = "ROYAL FLUSH containing a wild card";
    this.gim = "four twos with any other card";
    this.gpa = "four 5's, 6's, 7's, 8's, 9's, 10's, JACK's, QUEEN's OR KING's";
    this.rcz = "four 2's, 3's or 4's with any other card";
    this.wlu = "four aces with any other card";
    this.ujp = "four 2's, 3's OR 4's with an Ace 2,3 or 4";
    this.wpy = "four Aces with 2, 3 or 4";
    this.zuy = "two Kings or Aces";
    this.dqn = "two tens, jacks, queens, kings or aces";
    this.som = "FIVE OF A KIND";
    this.uxn = "ROYAL FLUSH";
    this.kny = "STRAIGHT FLUSH";
    this.lje = "FOUR OF A KIND";
    this.afa = "FULL HOUSE";
    this.cjj = "FLUSH";
    this.szv = "STRAIGHT";
    this.abk = "THREE OF A KIND";
    this.exa = "TWO PAIRS";
    this.vit = "HIGH PAIR";
    this.bmt = "FOUR FLUSH";
    this.rhw = "POKER";
    this.oxi = "SKIP STRAIGHT";
    this.gkk = "BLAZE";
    this.qna = "CORNER STRAIGHT";
    this.tvv = "TENS OR BETTER";
    this.crj = "JACKS OR BETTER";
    this.uph = "KINGS OR BETTER";
    this.riz = "WILD ROYAL FLUSH";
    this.ulk = "FOUR DEUCES";
    this.wtc = "FOUR 5 TO KING";
    this.cbq = "FOUR 2 TO 4";
    this.wak = "FOUR ACES";
    this.krv = "FOUR LOW WITH LOW";
    this.okd = "FOUR ACES WITH 2, 3 OR 4";
    this.ktx = "GAMBLE AGAIN OR COLLECT?";
    this.wfv = "SELECT A CARD";
    this.fmg = "If selected card is higher than dealer: WIN!";
    this.sfr = "If selected card is lower than dealer: lose";
    this.opa = "If selected card is same as dealer: tie";
    this.abi = "ACE is highest, two is lowest, no wild cards.";
    this.yfp = "TIE";
    this.mse = "PLAYER";
    this.jkw = "DEALER";
    this.wgs = "BEAT THE DEALER TO DOUBLE THE WIN";
    this.xhj = "SELECT THE CORRECT VALUE TO DOUBLE THE WIN"
}
lcp.prototype = new sll;

function dvv() {
    this.pco = "РЈРґРµСЂР¶Р°С‚СЊ";
    this.aeh = "РљР РђРЎРќР«Р™";
    this.bzy = "BLACK";
    this.krl = "РљР РЈРџРќРђРЇ";
    this.usj = "РњР•Р›РљРђРЇ";
    this.fcy = "Р РђР—Р”Р•Р›РРўР¬ РљРђР РўР«";
    this.kqa = "РЈР”Р•Р Р–РђРўР¬ РљРђР РўР«";
    this.pxe = "Р’Р—РЇРўР¬ РљРђР РўР«";
    this.bzb = "РџСЏС‚СЊ РєР°СЂС‚ РѕРґРЅРѕРіРѕ РЅРѕРјРёРЅР°Р»Р° (РѕРґРЅР° РёР· РЅРёС… РґР¶РѕРєРµСЂ)";
    this.inn = "РўСѓР· - РєРѕСЂРѕР»СЊ - РґР°РјР° - РІР°Р»РµС‚ - 10 РѕРґРЅРѕР№ РјР°СЃС‚Рё";
    this.upj = "STRAIGHT РѕРґРЅРѕР№ РјР°СЃС‚Рё";
    this.xue = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ РѕРґРЅРѕРіРѕ РЅРѕРјРёРЅР°Р»Р°";
    this.ala = "РўСЂРё РєР°СЂС‚С‹ РѕРґРЅРѕРіРѕ РЅРѕРјРёРЅР°Р»Р° Рё РѕРґРЅР° РїР°СЂР°";
    this.thd = "РџСЏС‚СЊ РєР°СЂС‚ РѕРґРЅРѕР№ РјР°СЃС‚Рё";
    this.lda = "РџСЏС‚СЊ РєР°СЂС‚ РїРѕ РїРѕСЂСЏРґРєСѓ, РЅРѕ РЅРµ РѕРґРЅРѕР№ РјР°СЃС‚Рё";
    this.iya = "РўСЂРё РєР°СЂС‚С‹ РѕРґРЅРѕРіРѕ РЅРѕРјРёРЅР°Р»Р°";
    this.lmc = "Р”РІРµ РїР°СЂС‹ Рё РѕРґРЅР° РґРѕРїРѕР». РєР°СЂС‚Р°";
    this.xmi = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ РѕРґРЅРѕР№ РјР°СЃС‚Рё Рё РѕРґРЅР° РґРѕРїРѕР». РєР°СЂС‚Р°";
    this.ouz = "Р”РІР° РІР°Р»РµС‚Р°, РґРІРµ РґР°РјС‹, РґРІР° РєРѕСЂРѕР»СЏ РёР»Рё С‚СѓР·Р°";
    this.axp = "РџСЏС‚СЊ РєР°СЂС‚ РїРѕ РїРѕСЂСЏРґРєСѓ С‡РµСЂРµР· С‚СѓР· (3-2-Рў-Рљ-Р”)";
    this.acd = "РљРѕРјР±РёРЅР°С†РёСЏ РёР· РєР°СЂС‚ СЃ РєР°СЂС‚РёРЅРєР°РјРё: РґРІРµ РІР°Р»РµС‚Р°, РґРІРµ РґР°РјС‹ Рё РєРѕСЂРѕР»СЊ";
    this.ucg = "РџСЏС‚СЊ С‡РµС‚РЅС‹С… РёР»Рё РїСЏС‚СЊ РЅРµ С‡РµС‚РЅС‹С… РєР°СЂС‚ РїРѕ РїРѕСЂСЏРґРєСѓ";
    this.dwi = "ROYAL FLUSH СЃ РґР¶РѕРєРµСЂРѕРј";
    this.gim = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ 2 Рё РѕРґРЅР° РґРѕРїРѕР». РєР°СЂС‚Р°";
    this.gpa = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ 5, 6, 7, 8, 9, 10, РІР°Р»РµС‚, РґР°РјР° РёР»Рё РєРѕСЂРѕР»СЊ";
    this.rcz = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ 2, 3 РёР»Рё 4 СЃ Р»СЋР±РѕР№ РґРѕРїРѕР». РєР°СЂС‚РѕР№.";
    this.wlu = "Р§РµС‚С‹СЂРµ С‚СѓР·Р° Рё РѕРґРЅР° РґРѕРїРѕР». РєР°СЂС‚Р°";
    this.ujp = "Р§РµС‚С‹СЂРµ РґРІРѕР№РєРё, С‚СЂРѕР№РєРё РёР»Рё С‡РµС‚РІРµСЂРєРё СЃ С‚СѓР·РѕРј, РґРІРѕР№РєРѕР№, С‚СЂРѕР№РєРѕР№ РёР»Рё С‡РµС‚РІРµСЂРєРѕР№";
    this.wpy = "Р§РµС‚С‹СЂРµ С‚СѓР·Р° СЃ 2, 3 РёР»Рё 4";
    this.zuy = "Р”РІР° РєРѕСЂРѕР»СЏ РёР»Рё С‚СѓР·Р°";
    this.dqn = "Р”РІРµ РєР°СЂС‚С‹ 10, РІР°Р»РµС‚, РґР°РјР°, РєРѕСЂРѕР»СЊ РёР»Рё С‚СѓР·";
    this.som = "FIVE OF A KIND";
    this.uxn = "ROYAL FLUSH";
    this.kny = "STRAIGHT FLUSH";
    this.lje = "FOUR OF A KIND";
    this.afa = "FULL HOUSE";
    this.cjj = "FLUSH";
    this.szv = "STRAIGHT";
    this.abk = "THREE OF A KIND";
    this.exa = "TWO PAIRS";
    this.vit = "HIGH PAIR";
    this.bmt = "FOUR FLUSH";
    this.rhw = "POKER";
    this.oxi = "SKIP STRAIGHT";
    this.gkk = "BLAZE";
    this.qna = "CORNER STRAIGHT";
    this.tvv = "TENS OR BETTER";
    this.crj = "JACKS OR BETTER";
    this.uph = "KINGS OR BETTER";
    this.riz = "WILD ROYAL FLUSH";
    this.ulk = "FOUR DEUCES";
    this.wtc = "FOUR 5 TO KING";
    this.cbq = "FOUR 2 TO 4";
    this.wak = "FOUR ACES";
    this.krv = "FOUR LOW WITH LOW";
    this.okd = "FOUR ACES WITH 2, 3 OR 4";
    this.ktx = "РЈРґРІРѕРёС‚СЊ РёР»Рё РІР·СЏС‚СЊ?";
    this.wfv = "Р’Р«Р‘Р•Р РРўР• РљРђР РўРЈ";
    this.fmg = "Р•СЃР»Рё Р’Р°С€Рё РєР°СЂС‚С‹ РєСЂСѓРїРЅРµРµ, С‡РµРј РєР°СЂС‚С‹ РґРёР»РµСЂР°, Р’С‹ РІС‹РёРіСЂР°РµС‚Рµ!";
    this.sfr = "Р•СЃР»Рё Р’Р°С€Рё РєР°СЂС‚С‹ РјРµР»СЊС‡Рµ, С‡РµРј РєР°СЂС‚С‹ РґРёР»РµСЂР°, Р’С‹ РЅРµ РІС‹РёРіСЂР°РµС‚Рµ";
    this.opa = "Р•СЃР»Рё РґРѕСЃС‚РѕРёРЅСЃС‚РІРѕ Р’Р°С€РёС… РєР°СЂС‚ СЂР°РІРЅРѕ РєР°СЂС‚Р°Рј РґРёР»РµСЂР°, СЌС‚Рѕ РѕР·РЅР°С‡Р°РµС‚ РЅРёС‡СЊСЋ";
    this.abi = "РўРЈР— СЃР°РјР°СЏ РєСЂСѓРїРЅР°СЏ, Р”Р’Рђ СЃР°РјР°СЏ РјРµР»РєР°СЏ РєР°СЂС‚Р°, РЅРµС‚ РґР¶РѕРєРµСЂРѕРІ.";
    this.wgs = "Р’Р«РР“Р РђР™РўР• РЈ Р РђР—Р”РђР®Р©Р•Р“Рћ, Р§РўРћР‘Р« РЈР”Р’РћРРўР¬ Р’Р«РР“Р Р«РЁ";
    this.yfp = "Р РћР’РќРћ";
    this.mse = "РР“Р РћРљ";
    this.jkw = "DEALER";
    this.xhj = "Р’Р«Р‘Р•Р РРўР• РџР РђР’РР›Р¬РќР«Р™ РќРћРњРРќРђР›, Р§РўРћР‘Р« РЈР”Р’РћРРўР¬ Р’Р«РР“Р Р«РЁ."
}
dvv.prototype = new dhi;

function ont() {
    this.pco = "PARAR";
    this.aeh = "ROJO";
    this.bzy = "NEGRO";
    this.krl = "ALTO";
    this.usj = "BAJO";
    this.fcy = "DAR CARTAS";
    this.kqa = "RETENER CARTAS";
    this.pxe = "DAR CARTAS";
    this.bzb = "Cinco cartas iguales (sГіlo posible con el comodin)";
    this.inn = "As - rey - dama - sota - 10 del mismo color";
    this.upj = "STRAIGHT del mismo color";
    this.axp = "Escalera con as en el centro";
    this.acd = "CombinaciГіn de figuras con sota, dama y rey";
    this.xue = "Cuatro cartas del mismo valor";
    this.ucg = "Secuencia de cinco cartas pares o impares de valores sucesivos";
    this.ala = "CombinaciГіn entre THREE OF A KIND y PAIR";
    this.thd = "Cinco cartas del mismo color";
    this.lda = "Cinco cartas puestas en orden pero no del mismo color";
    this.iya = "Tres cartas equivalentes";
    this.lmc = "Dos pares diferentes y una quinta carta";
    this.xmi = "Cuatro cartas del mismo color con una quinta carta";
    this.ouz = "Dos sotas, damas, reyes o ases";
    this.dwi = "ROYAL FLUSH con comodin";
    this.gim = "Cuatro doses con otra carta";
    this.gpa = "Cuatro 5, 6, 7, 8, 9, 10, sotas, damas o reyes";
    this.rcz = "Cuatro de dos, de tres o de cuatro con otra carta";
    this.wlu = "Cuatro ases con otra carta";
    this.ujp = "Cuatro 2, 3 o 4 con un as, una 2, 3 o 4";
    this.wpy = "Cuatro ases con una 2, 3 o 4";
    this.zuy = "Dos reyes o dos ases";
    this.dqn = "Dos 10, sotas, damas, reyes o ases";
    this.som = "FIVE OF A KIND";
    this.uxn = "ROYAL FLUSH";
    this.kny = "STRAIGHT FLUSH";
    this.lje = "FOUR OF A KIND";
    this.afa = "FULL HOUSE";
    this.cjj = "FLUSH";
    this.szv = "STRAIGHT";
    this.abk = "THREE OF A KIND";
    this.exa = "TWO PAIRS";
    this.vit = "HIGH PAIR";
    this.bmt = "FOUR FLUSH";
    this.rhw = "POKER";
    this.oxi = "SKIP STRAIGHT";
    this.gkk = "BLAZE";
    this.qna = "CORNER STRAIGHT";
    this.tvv = "TENS OR BETTER";
    this.crj = "JACKS OR BETTER";
    this.uph = "KINGS OR BETTER";
    this.riz = "WILD ROYAL FLUSH";
    this.ulk = "FOUR DEUCES";
    this.wtc = "FOUR 5 TO KING";
    this.cbq = "FOUR 2 TO 4";
    this.wak = "FOUR ACES";
    this.krv = "FOUR LOW WITH LOW";
    this.okd = "FOUR ACES WITH 2, 3 OR 4";
    this.ktx = "Arriesgar otra vez o tomar el premio?";
    this.wfv = "Tome una carta";
    this.fmg = "Si la carta es mГЎs alta que la del crupier: hay premio!";
    this.sfr = "Si la carta elegida es mГЎs baja que la del crupier: no hay premio!";
    this.opa = "Si la carta elegida es la misma que la del crupier: QUEDA IGUAL";
    this.abi = "ACE es la mГЎs alta, dos es la mГЎs baja, no hay comodin.";
    this.wgs = "GANAR LA MANO PARA DOBLAR EL PREMIO";
    this.xhj = "SELECCIONAR EL VALOR CORRECTO PARA DOBLAR EL PREMIO";
    this.yfp = "IGUAL";
    this.mse = "JUGADOR";
    this.jkw = "MANO"
}
ont.prototype = new guq;

function nzr() {
    this.pco = "HALTEN";
    this.aeh = "ROT";
    this.bzy = "SCHWARZ";
    this.krl = "HOCH";
    this.usj = "TIEF";
    this.fcy = "KARTEN GEBEN";
    this.kqa = "KARTEN HALTEN";
    this.pxe = "KARTEN GEBEN";
    this.bzb = "FГјnf gleiche Karten (nur mit Joker mГ¶glich)";
    this.inn = "Ass - KГ¶nig - Dame - Buben - 10er der selben Farbe";
    this.upj = "STRAIGHT in der selben Farbe";
    this.xue = "Vier wertgleiche Karten";
    this.ala = "Kombination aus THREE OF A KIND und PAIR";
    this.thd = "FГјnf Karten mit der selben Farbe";
    this.lda = "FГјnf Karten in geordneter Reihenfolge, ohne der selben Farbe";
    this.iya = "Drei gleichwertige Karten";
    this.lmc = "Zwei verschiedene Paare und eine 5. Karte";
    this.xmi = "Zwei Buben, Damen, KГ¶nige oder Assen";
    this.ouz = "Vier Karten der selben Farbe mit einer 5. Karte";
    this.axp = "Straight mit Ass in der Mitte";
    this.acd = "Bildkarten welche Bube, Dame und KГ¶nig enthalten";
    this.ucg = "FГјnf gerade oder ungerade aufeinanderfolgende Werte";
    this.dwi = "ROYAL FLUSH mit Joker";
    this.gim = "Vier Zweier mit einer anderen Karte";
    this.gpa = "Vier 5er, 6er, 7er, 8er, 9er, 10er, Buben, Damen oder KГ¶nige";
    this.rcz = "Vier 2er,3er oder 4er mit einer anderen Karte";
    this.wlu = "Vier Assen mit einer anderen Karte";
    this.ujp = "Vier 2er, 3er oder 4er mit einer As, einem 2er, 3er oder 4er";
    this.wpy = "Vier Assen mit einer 2, 3 oder 4";
    this.zuy = "Zwei KГ¶nige oder zwei Assen";
    this.dqn = "Zwei 10er, Buben, Damen, KГ¶nige oder Assen";
    this.som = "FIVE OF A KIND";
    this.uxn = "ROYAL FLUSH";
    this.kny = "STRAIGHT FLUSH";
    this.lje = "FOUR OF A KIND";
    this.afa = "FULL HOUSE";
    this.cjj = "FLUSH";
    this.szv = "STRAIGHT";
    this.abk = "THREE OF A KIND";
    this.exa = "TWO PAIRS";
    this.vit = "HIGH PAIR";
    this.bmt = "FOUR FLUSH";
    this.rhw = "POKER";
    this.oxi = "SKIP STRAIGHT";
    this.gkk = "BLAZE";
    this.qna = "CORNER STRAIGHT";
    this.tvv = "TENS OR BETTER";
    this.crj = "JACKS OR BETTER";
    this.uph = "KINGS OR BETTER";
    this.riz = "WILD ROYAL FLUSH";
    this.ulk = "FOUR DEUCES";
    this.wtc = "FOUR 5 TO KING";
    this.cbq = "FOUR 2 TO 4";
    this.wak = "FOUR ACES";
    this.krv = "FOUR LOW WITH LOW";
    this.okd = "FOUR ACES WITH 2, 3 OR 4";
    this.ktx = "NOCHEINMAL GAMBELN ODER GEWINN NEHMEN?";
    this.wfv = "NIMM EINE KARTE";
    this.fmg = "Wenn die gewГ¤hlte Karte hГ¶her ist als die vom Dealer: Gewinn!";
    this.sfr = "Wenn die gewГ¤hlte Karte niedriger ist als die vom Dealer: Kein Gewinn";
    this.opa = "Wenn die gewГ¤hlte Karte die selbe ist wie die vom Dealer: GLEICH";
    this.abi = "Ass ist die hГ¶chste Karte, Zwei die niedrigste, keine Joker.";
    this.wgs = "BESIEGE DEN GEBER UM DEN GEWINN ZU VERDOPPELN";
    this.xhj = "WГ„HLE DEN RICHTIGEN WERT UM DEN GEWINN ZU VERDOPPELN";
    this.yfp = "GLEICH";
    this.mse = "SPIELER";
    this.jkw = "GEBER"
}
nzr.prototype = new dfd;

function hrb() {
    this.pco = "TUTUNUZ";
    this.aeh = "KIRMIZI";
    this.bzy = "SIYAH";
    this.krl = "YГњKSEK";
    this.usj = "DERIN";
    this.fcy = "KARTLARI VERД°NД°Z";
    this.kqa = "KARTLARI TUTUNUZ";
    this.pxe = "KARTLARI VERД°NД°Z";
    this.bzb = "BeЕџ ayni kartlar (tek jokerle mГјmkГјn)";
    this.inn = "Ass - papaz - dama - valeler - 10lar ayni renkli";
    this.upj = "STRAIGHT ayni renkli";
    this.xue = "DГ¶rt ayni deДџerde olan kartlar";
    this.ala = "Kombinasyon THREE OF A KIND ve PAIR le";
    this.thd = "BeЕџ ayni renkli kartlar";
    this.lda = "BeЕџ kartlar dГјzenli bir sД±ralamada, ayni renk siz";
    this.iya = "ГњГ§ ayni deДџerinde olan kartlar";
    this.lmc = "Iki deДџiЕџik Г§iftle ve bir 5. kart";
    this.xmi = "Iki valeler, damalar, papazlar veya asslar";
    this.ouz = "Ayni renkten dГ¶rt kart ve bir 5. kart";
    this.axp = "AsвЂ™Д± ortada olan Straight";
    this.acd = "Vale, kД±z ve papaz gГ¶steren resimli kartlar";
    this.ucg = "Arka arkaya beЕџ Г§ift veya tek deДџer";
    this.dwi = "ROYAL FLUSH  joker le";
    this.gim = "DГ¶rt ikili baЕџka bir kartla";
    this.gpa = "DГ¶rt 5вЂ™li, 6вЂ™lД±, 7вЂ™li, 8вЂ™li, 9вЂ™lu, 10вЂ™lu, vale, kД±z veya papaz";
    this.rcz = "DГ¶rt 2ler,3ler veya 4ler baЕџka bir kartla";
    this.wlu = "DГ¶rt as baЕџka bir kartla";
    this.ujp = "Bir as ile bir 2'li, 3'lГј veya 4'lГј ile dГ¶rt adet 2'li, 3'lГј veya 4'lГј";
    this.wpy = "2,3 veya 4 ile dГ¶rt as";
    this.zuy = "Iki papazlar veya iki asslar";
    this.dqn = "Iki 10lar, valeler, damalar, papazlar veya asslar";
    this.som = "FIVE OF A KIND";
    this.uxn = "ROYAL FLUSH";
    this.kny = "STRAIGHT FLUSH";
    this.lje = "FOUR OF A KIND";
    this.afa = "FULL HOUSE";
    this.cjj = "FLUSH";
    this.szv = "STRAIGHT";
    this.abk = "THREE OF A KIND";
    this.exa = "TWO PAIRS";
    this.vit = "HIGH PAIR";
    this.bmt = "FOUR FLUSH";
    this.rhw = "POKER";
    this.oxi = "SKIP STRAIGHT";
    this.gkk = "BLAZE";
    this.qna = "CORNER STRAIGHT";
    this.tvv = "TENS OR BETTER";
    this.crj = "JACKS OR BETTER";
    this.uph = "KINGS OR BETTER";
    this.riz = "WILD ROYAL FLUSH";
    this.ulk = "FOUR DEUCES";
    this.wtc = "FOUR 5 TO KING";
    this.cbq = "FOUR 2 TO 4";
    this.wak = "FOUR ACES";
    this.krv = "FOUR LOW WITH LOW";
    this.okd = "FOUR ACES WITH 2, 3 OR 4";
    this.ktx = "Bir daha riziko veya kazanГ§Д± alД±nД±z?";
    this.wfv = "Bir kart al";
    this.fmg = "SeГ§ilen kart DealerвЂ™inkinden yГјksekse: KazanГ§!";
    this.sfr = "SeГ§ilen kart DealerвЂ™inkinden dГјЕџГјkse: KazanГ§ yok";
    this.opa = "SeГ§ilen kart DealerвЂ™inkiyle aynД± ise: PAT";
    this.abi = "ACE is highest, two is lowest, Joker yok";
    this.wgs = "KAДћITLARI DAДћITANI YENEREK KAZANCINI Д°KД°YE KATLAYABД°LД°RSД°N";
    this.yfp = "AYNI";
    this.mse = "OYUNCU";
    this.jkw = "DEALER";
    this.xhj = "DOДћRU DEДћERД° SEГ‡EREK KAZANCINI Д°KД°YE KATLARSIN"
}
hrb.prototype = new ebv;

function nlp() {
    this.pco = "DRЕЅET";
    this.aeh = "CERVENГЃ";
    this.bzy = "CERNГЃ";
    this.krl = "VELKГЃ";
    this.usj = "MALГЃ";
    this.fcy = "DГЃT KARTY";
    this.kqa = "KARTY DRЕЅET";
    this.pxe = "DГЃT KARTY";
    this.bzb = "Pet stejnГЅch karet(moЕѕnГ© pouze s Jokerem)";
    this.inn = "Eso - krГЎl - krГЎlovna - kluk - desГ­tka stejnГ© barvy";
    this.upj = "STRAIGHT s kartami stejnГ© barvy";
    this.xue = "Ctyri karty stejnГ© hodnoty";
    this.ala = "Kombinace z THREE OF A KIND a PAIR";
    this.thd = "Pet karet stejnГ© barvy";
    this.lda = "Pet karet usporГЎdanГЅch v rade, ale ne stejnГ© barvy";
    this.iya = "Tri karty stejnГ© hodnoty";
    this.lmc = "Dve odliЕЎnГ© dvojice a 5. karta";
    this.xmi = "Dva klucii, krГЎlovny, krГЎlovГ© nebo esa";
    this.ouz = "Ctyrii karty stejnГ© barvy s 5. kartou";
    this.axp = "postupka s esem uprostred";
    this.acd = "kombinace obsahujГ­cГ­ pouze postavy (jack, queen  a king)";
    this.ucg = "postupka vytvorenГЎ ze sudГЅch nebo lichГЅch za sebou nГЎsledujГ­cГ­ch cГ­sel";
    this.dwi = "ROYAL FLUSH s Jokerem";
    this.gim = "Ctyri dvojky s jinou kartou";
    this.gpa = "ДЊtyЕ™i 5ky, 6ky, 7ky,8ky,9ky,10ky, kluci,krГЎlovny nebo krГЎlovГ©";
    this.rcz = "ДЊtyЕ™i 2ky,3ky nebo 4ky s dalЕЎГ­ kartou";
    this.wlu = "ДЊtyri Esa s dalЕЎГ­ kartou";
    this.ujp = "ДЊtyЕ™i 2, 3 nebo 4 s Esem, 2,3 nebo 4";
    this.wpy = "ДЊtyЕ™i Esa s jednou 2,3 nebo 4";
    this.zuy = "Dva KrГЎlovГ© nebo dvД› Esa";
    this.dqn = "Dve desГ­tky, kluci, krГЎlovny, krГЎlovГ© nebo esa";
    this.som = "FIVE OF A KIND";
    this.uxn = "ROYAL FLUSH";
    this.kny = "STRAIGHT FLUSH";
    this.lje = "FOUR OF A KIND";
    this.afa = "FULL HOUSE";
    this.cjj = "FLUSH";
    this.szv = "STRAIGHT";
    this.abk = "THREE OF A KIND";
    this.exa = "TWO PAIRS";
    this.vit = "HIGH PAIR";
    this.bmt = "FOUR FLUSH";
    this.rhw = "POKER";
    this.oxi = "SKIP STRAIGHT";
    this.gkk = "BLAZE";
    this.qna = "CORNER STRAIGHT";
    this.tvv = "TENS OR BETTER";
    this.crj = "JACKS OR BETTER";
    this.uph = "KINGS OR BETTER";
    this.riz = "WILD ROYAL FLUSH";
    this.ulk = "FOUR DEUCES";
    this.wtc = "FOUR 5 TO KING";
    this.cbq = "FOUR 2 TO 4";
    this.wak = "FOUR ACES";
    this.krv = "FOUR LOW WITH LOW";
    this.okd = "FOUR ACES WITH 2, 3 OR 4";
    this.ktx = "HRГЃT ZNOVU NEBO VZГЌT VГќHRU?";
    this.wfv = "ZVOL KARTU";
    this.fmg = "Je-li zvolenГЎ karta vyЕЎЕЎГ­ neЕѕ dealerova: VГЅhra!";
    this.sfr = "Je-li  zvolenГЎ karta niЕѕЕЎiГ­ neЕѕ dealerova: ЕЅГЎdnГЎ vГЅhra!";
    this.opa = "Je-li  zvolenГЎ karta shodnГЎ s dealerovou: nerozhodnГЅ vГЅsledek";
    this.abi = "Eso je nejvyЕЎЕЎГ­, dvД› je nejniЕѕЕЎГ­, ЕѕГЎdnГ© divokГ© karty.";
    this.wgs = "PORAZIT DEALERA KE ZDVOJNГЃSOBENГЌ VГќHRY";
    this.xhj = "VYBRAT SPRГЃVNOU HODNOTU KE ZDVOJNГЃSOBENГЌ VГќHRY";
    this.yfp = "STEJNГ‰";
    this.mse = "HRГЃДЊ";
    this.jkw = "DEALER"
}
nlp.prototype = new gcc;

function luu() {
    this.pco = "HOIA";
    this.aeh = "PUNANE";
    this.bzy = "MUST";
    this.krl = "KГ•RGE";
    this.usj = "MADAL";
    this.fcy = "JAGA KAARDID";
    this.kqa = "HOIA KAARTE";
    this.pxe = "JAGA KAARDID";
    this.bzb = "viis vГµrdvГ¤Г¤rset kaarti (vГµimalik ainult koos Wild kaardiga)";
    this.inn = "sama masti Г¤ss - kuningas - emand - soldat - kГјmme";
    this.upj = "RIDA samavГ¤rvi kaartidest";
    this.xue = "neli sama vГ¤Г¤rtusega kaarti";
    this.ala = "kombinatsioon KOLMIK ja PAAR";
    this.thd = "viis sama vГ¤rvi kaarti";
    this.lda = "viis jГ¤rjestikust, kuid erivГ¤rvi kaarti";
    this.iya = "kolm vГµrdvГ¤Г¤rset kaarti";
    this.lmc = "kaks kindlat paari ja ГјkskГµik milline viies kaart";
    this.xmi = "kaks soldatit, emandat, kuningat vГµi Г¤ssa";
    this.ouz = "neli sama vГ¤rvi kaarti koos ГјkskГµik millise viienda kaardiga";
    this.dwi = "KUNINGLIK MASTIRIDA, mis sisaldab Wild kaarti";
    this.gim = "neli kahte koos ГјkskГµik millise muu kaardiga";
    this.gpa = "neli viite, kuute, seitset, kaheksat, Гјheksat, kГјmmet, Soldatit, Emandat vГµi Kuningat";
    this.rcz = "neli kahte, kolme vГµi nelja koos ГјkskГµik millise muu kaardiga";
    this.wlu = "neli Г¤ssa ГјkskГµik millise muu kaardiga";
    this.ujp = "Neli 2-te, 3-e vГµi 4-ja koos 2, 3, vГµi 4";
    this.wpy = "Neli Г¤ssa ja 2, 3, vГµi 4";
    this.zuy = "kaks Kuningat vГµi Г„ssa";
    this.dqn = "kaks kГјmmet, soldatit, emandat, kuningat vГµi Г¤ssa";
    this.som = "FIVE OF A KIND";
    this.uxn = "ROYAL FLUSH";
    this.kny = "STRAIGHT FLUSH";
    this.lje = "FOUR OF A KIND";
    this.afa = "FULL HOUSE";
    this.cjj = "FLUSH";
    this.szv = "STRAIGHT";
    this.abk = "THREE OF A KIND";
    this.exa = "TWO PAIRS";
    this.vit = "HIGH PAIR";
    this.bmt = "FOUR FLUSH";
    this.rhw = "POKER";
    this.oxi = "SKIP STRAIGHT";
    this.gkk = "BLAZE";
    this.qna = "CORNER STRAIGHT";
    this.tvv = "TENS OR BETTER";
    this.crj = "JACKS OR BETTER";
    this.uph = "KINGS OR BETTER";
    this.riz = "WILD ROYAL FLUSH";
    this.ulk = "FOUR DEUCES";
    this.wtc = "FOUR 5 TO KING";
    this.cbq = "FOUR 2 TO 4";
    this.wak = "FOUR ACES";
    this.krv = "FOUR LOW WITH LOW";
    this.okd = "FOUR ACES WITH 2, 3 OR 4";
    this.yfp = "VIIK";
    this.mse = "PLAYER";
    this.jkw = "DEALER";
    this.ktx = "MГ„NGI VEEL VГ•I VГ•TA VГ•IT?";
    this.fmg = "Kui valitud kaart on suurem kui diileril: OLED VГ•ITNUD!";
    this.sfr = "Kui valitud kaart on vГ¤iksem kui diileril: kaotad";
    this.opa = "Kui valitud kaart on diileri kaardiga vГµrdne: viik";
    this.abi = "Г„SS on kГµrgeim, kaks madalaim, metsikuid kaarte ei ole.";
    this.axp = "rida Г¤ssaga keskel";
    this.acd = "kombinatsioon soldatist, emandast ja kuningast";
    this.ucg = "kaheste vahedega rida";
    this.wfv = "VALI KAART";
    this.wgs = "VГ•IDA DIILERIT, ET KAHEKORDISTADA OMA VГ•IT";
    this.xhj = "VГ•IDU DUUBELDAMISEKS VALI Г•IGE VГ„Г„RTUS"
}
luu.prototype = new kmx;

function uzz() {
    this.pco = "ОљОЎО‘О¤О—ОЈО¤О•";
    this.aeh = "ОљОџОљОљО™ОќОџ";
    this.bzy = "ОњО‘ОҐОЎОџ";
    this.krl = "ОҐОЁО—О›Оџ";
    this.usj = "О§О‘ОњО—О›Оџ";
    this.fcy = "ОњОџО™ОЎО‘ОЈО¤О• О§О‘ОЎО¤О™О‘";
    this.kqa = "ОљОЎО‘О¤О—ОЈО¤О• О§О‘ОЎО¤О™О‘";
    this.pxe = "О¤ОЎО‘О’О—ОћО¤О• О§О‘ОЎО¤О™О‘";
    this.bzb = "ПЂО­ОЅП„Оµ ОЇОґО№О± П‡О±ПЃП„О№О¬ (ОјПЊОЅО· ПЂО№ОёО±ОЅПЊП„О·П„О± ОјОµ П„Ої Joker)";
    this.inn = "О¬ПѓПѓОїП‚ - ПЃО®ОіО±П‚ - ОЅП„О¬ОјО± - ОІО±О»О­П‚ - ОґО­ОєО± О±ПЂПЊ П„Ої ОЇОґО№Ої П‡ПЃПЋОјО±";
    this.upj = "STRAIGHT ОјОµ П‡О±ПЃП„О№О¬ О±ПЂПЊ П„Ої ОЇОґО№Ої П‡ПЃПЋОјО±";
    this.xue = "П„О­ПѓПѓОµПЃО± П‡О±ПЃП„О№О¬ ОјОµ П„О·ОЅ ОЇОґО№О± О±ОѕОЇО±";
    this.ala = "ПѓП…ОЅОґП…О±ПѓОјПЊП‚ О±ПЂПЊ THREE OF A KIND ОєО±О№ О­ОЅО± PAIR";
    this.thd = "ПЂО­ОЅП„Оµ П‡О±ПЃП„О№О¬ ОјОµ П„Ої ОЇОґО№Ої П‡ПЃПЋОјО±";
    this.lda = "ПЂО­ОЅП„Оµ П‡О±ПЃП„О№О¬ ПѓОµ О±ПЌОѕОїП…ПѓО± ПѓОµО№ПЃО¬, О±О»О»О¬ ПЊП‡О№ ОЇОґО№Ої П‡ПЃПЋОјО±";
    this.iya = "П„ПЃОЇО± П‡О±ПЃП„О№О¬ ОЇОґО№О±П‚ О±ОѕОЇО±П‚";
    this.lmc = "ОґПЌОї ОґО№О±П†ОїПЃОµП„О№ОєО¬ О¶ОµП…ОіО¬ПЃО№О± ОєО±О№ ОїПЂОїО№ОїОґО®ПЂОїП„Оµ ПЂО­ОјПЂП„Ої П‡О±ПЃП„ОЇ";
    this.xmi = "ОґПЌОї ОІО±О»О­ОґОµП‚, ОЅП„О¬ОјОµП‚, ПЃО®ОіОµП‚ О® О¬ПѓПѓОїО№";
    this.ouz = "П„О­ПѓПѓОµПЃО± П‡О±ПЃП„О№О¬ О±ПЂПЊ П„Ої ОЇОґО№Ої П‡ПЃПЋОјО± ОјО±О¶ОЇ ОјОµ ОєО¬ОёОµ ПЂО­ОјПЂП„О· ОєО¬ПЃП„О±";
    this.axp = "Straight ОјОµ О¬ПѓПѓОї ПѓП„Ої ОєО­ОЅП„ПЃОї";
    this.acd = "ПѓП…ОЅОґО№О±ПѓОјПЊП‚ О±ПЂПЊ П†О№ОіОїПЌПЃОµП‚ ПЂОїП… ОІОіО±ОЇОЅОµО№ ОІО±О»О­П‚, ОЅП„О¬ОјО± ОєО±О№ ПЃО®ОіО±П‚";
    this.ucg = "ПѓОµО№ПЃО¬ ОјО±О¶ОЇ ОјОµ ОјОїОЅО¬ О® О¶П…ОіО¬ О­П‡ОµО№ ОґО№О±ОґОїП‡О№ОєО® О±ОѕОЇО±";
    this.dwi = "ROYAL FLUSH ПЂОµПЃО№О­П‡ОµО№ ОєО±О№ Joker";
    this.gim = "П„О­ПѓПѓОµПЃО± ОґП…О¬ПЃО№О± ОјО±О¶ОЇ ОјОµ ОєО¬ОёОµ О¬О»О»О· ОєО¬ПЃП„О±";
    this.gpa = "П„О­ПѓПѓОµПЃО± 5's, 6's,7's, 8's, 9's, 10's, О’О‘О›О•О”О•ОЈ, ОќО¤О‘ОњО•ОЈ О® ОЎО—О“О•ОЈ";
    this.rcz = "О¤О­ПѓПѓОµПЃО± 2's О® 4's ОјО±О¶ОЇ ОјОµ ОєО¬ОёОµ О¬О»О»О· ОєО¬ПЃП„О±";
    this.wlu = "П„О­ПѓПѓОµПЃО№П‚ О¬ПѓПѓОїО№ ОјО±О¶ОЇ ОјОµ ОєО¬ОёОµ О¬О»О»О· ОєО¬ПЃП„О±";
    this.ujp = "О¤О­ПѓПѓОµПЃО± 2О¬ПЃО№О±, 3О¬ПЃО№О± О® 4О¬ПЃО№О± ОјО±О¶ОЇ ОјОµ О­ОЅО±ОЅ О†ПѓПѓОї, О­ОЅО± 2О¬ПЃО№, 3О¬ПЃО№ О® 4О¬ПЃО№";
    this.wpy = "О¤О­ПѓПѓОµПЃО№П‚ О¬ПѓПѓОїО№ ОјО±О¶ОЇ ОјОµ О­ОЅО± 2, 3 О® 4";
    this.zuy = "ОґПЌОї ОЎО®ОіОµП‚ О® О†ПѓПѓОїО№";
    this.dqn = "ОґПЌОї ОґОµОєО¬ПЃО№О±, ОІО±О»О­ОґОµП‚, ОЅП„О¬ОјОµП‚, ПЃО®ОіОµП‚ О® О¬ПѓПѓОїО№";
    this.som = "FIVE OF A KIND";
    this.uxn = "ROYAL FLUSH";
    this.kny = "STRAIGHT FLUSH";
    this.lje = "FOUR OF A KIND";
    this.afa = "FULL HOUSE";
    this.cjj = "FLUSH";
    this.szv = "STRAIGHT";
    this.abk = "THREE OF A KIND";
    this.exa = "TWO PAIRS";
    this.vit = "HIGH PAIR";
    this.bmt = "FOUR FLUSH";
    this.rhw = "POKER";
    this.oxi = "SKIP STRAIGHT";
    this.gkk = "BLAZE";
    this.qna = "CORNER STRAIGHT";
    this.tvv = "TENS OR BETTER";
    this.crj = "JACKS OR BETTER";
    this.uph = "KINGS OR BETTER";
    this.riz = "WILD ROYAL FLUSH";
    this.ulk = "FOUR DEUCES";
    this.wtc = "FOUR 5 TO KING";
    this.cbq = "FOUR 2 TO 4";
    this.wak = "FOUR ACES";
    this.krv = "FOUR LOW WITH LOW";
    this.okd = "FOUR ACES WITH 2, 3 OR 4";
    this.wgs = "ОљО•ОЎО”О™ОЈО¤О• О¤ОџОќ ОќО¤О™О›О•ОЎ О“О™О‘ ОќО‘ О”О™О О›О‘ОЈО™О‘ОЈО•О¤О• О¤Оџ ОљО•ОЎО”ОџОЈ ОЈО‘ОЈ";
    this.yfp = "О™ОЈОџО О‘О›О™О‘";
    this.mse = "О О‘IО§О¤О—ОЈ";
    this.jkw = "ОќО¤HО›О•ОЎ";
    this.ktx = "ОћО‘ОќA ОЎIОЈОљОџ H О О‘ОЎО‘О›О‘О’H;";
    this.fmg = "О‘ОЅ О­П‡ОµП„Оµ П‡О±ПЃП„ОЇ ОјОµОіО±О»ПЌП„ОµПЃОї О±ПЂПЊ П„ОїОЅ ОєПЃОїП…ПЂО№О­ПЃО·: ОљО•ОЎО”О™О–О•О¤О•!";
    this.sfr = "О‘ОЅ О­П‡ОµП„Оµ П‡О±ПЃП„ОЇ ОјО№ОєПЃПЊП„ОµПЃОї О±ПЂПЊ П„ОїОЅ ОєПЃОїП…ПЂО№О­ПЃО·: О§О‘ОќО•О¤О•!";
    this.opa = "О‘ОЅ О­П‡ОµП„Оµ П„Ої ОЇОґО№Ої П‡О±ПЃП„ОЇ ОјОµ П„ОїОЅ ОєПЃОїП…ПЂО№О­ПЃО·: О№ПѓОїОІО±ОёОјО®П„Оµ";
    this.abi = "О‘ПѓПѓОїП‚ ОµОЇОЅО±О№ П„Ої ОјОµОіО±О»ПЌП„ОµПЃОї, ОґПЌОї ОµОЇОЅО±О№ П„Ої ОјО№ОєПЃПЊП„ОµПЃОї, ОґОµОЅ П…ПЂО¬ПЃП‡ОµО№ О¤О¶ПЊОєОµПЃ";
    this.wfv = "О•О О™О›EОћО¤О• ОљAОЎО¤О‘";
    this.xhj = "О•О О™О›О•ОћО¤О• О¤О— ОЈО©ОЈО¤О— О‘ОћО™О‘ О“О™О‘ ОќО‘ О”О™О О›О‘ОЈО™О‘ОЈО•О¤О• О¤Оџ ОљО•ОЎО”ОџОЈ ОЈО‘ОЈ"
}
uzz.prototype = new pqm;

function jgo() {
    this.pco = "Р—РђР”РЄР Р–РђРќР";
    this.aeh = "Р§Р•Р Р’Р•РќРђ";
    this.bzy = "Р§Р•Р РќРђ";
    this.krl = "Р“РћР›РЇРњРђ";
    this.usj = "РњРђР›РљРђ";
    this.fcy = "Р РђР—Р”РђР’РђРќР• РќРђ РљРђР РўРРўР•";
    this.kqa = "Р—РђРџРђР—Р•РўР• РљРђР РўР";
    this.pxe = "РР—РўР•Р“Р›Р•РўР• РљРђР РўР";
    this.bzb = "РїРµС‚ РµРґРЅР°РєРІРё РєР°СЂС‚Рё (СЃР°РјРѕ СЃ РґР¶РѕРєРµСЂ)";
    this.inn = "РђСЃРµ - РџРѕРї - Р”Р°РјР° - Р’Р°Р»Рµ - 10 РѕС‚ РµРґРёРЅ Рё СЃСЉС‰ С†РІСЏС‚";
    this.upj = "РљР•РќРўРђ СЃ РєР°СЂС‚Рё РѕС‚ РµРґРёРЅ Рё СЃСЉС‰ С†РІСЏС‚";
    this.xue = "С‡РµС‚РёСЂРё РєР°СЂС‚Рё СЃ РµРґРЅР° Рё СЃСЉС‰Р° СЃС‚РѕР№РЅРѕСЃС‚";
    this.ala = "РєРѕРјР±РёРЅР°С†РёСЏ РѕС‚ С‚СЂРё РµРґРЅР°РєРІРё РєР°СЂС‚Рё Рё РµРґРёРЅ С‡РёС„С‚";
    this.thd = "РїРµС‚ РµРґРЅР°РєРІРё РєР°СЂС‚Рё";
    this.lda = "РїРµС‚ РїРѕСЂРµРґРЅРё РєР°СЂС‚Рё, РЅРѕ РѕС‚ СЂР°Р·Р»РёС‡РµРЅ С†РІСЏС‚";
    this.iya = "С‚СЂРё РєР°СЂС‚Рё СЃ РµРґРЅР° Рё СЃСЉС‰Р° СЃС‚РѕР№РЅРѕСЃС‚";
    this.lmc = "РґРІРµ СЂР°Р·Р»РёС‡РЅРё РґРІРѕР№РєРё Рё РЅСЏРєРѕСЏ РґСЂСѓРіР° 5-С‚Р° РєР°СЂС‚Р°";
    this.xmi = "РґРІРµ Р’Р°Р»РµС‚Р°, Р”Р°РјРё, РџРѕРїР° РёР»Рё РђСЃР°";
    this.ouz = "С‡РµС‚РёСЂРё РєР°СЂС‚Рё РѕС‚ РµРґРёРЅ Рё СЃСЉС‰ С†РІСЏС‚ СЃ РЅСЏРєРѕСЏ РґСЂСѓРіР° РєР°СЂС‚Р°";
    this.dwi = "РљР•РќРў Р¤Р›Р•РЁ Р РћРЇР› СЃ РґР¶РѕРєРµСЂ";
    this.gim = "С‡РµС‚РёСЂРё 2-РєРё СЃ РЅСЏРєРѕСЏ РґСЂСѓРіР° РєР°СЂС‚Р°";
    this.gpa = "С‡РµС‚РёСЂРё 5-С†Рё, 6-С†Рё, 7-С†Рё, 8-С†Рё, 9-РєРё, 10-РєРё, Р’РђР›Р•РўРђ, Р”РђРњР РёР»Рё РџРћРџРћР’Р•";
    this.rcz = "С‡РµС‚РёСЂРё 2-РєРё, 3-РєРё РёР»Рё 4-РєРё СЃ РЅСЏРєРѕСЏ РґСЂСѓРіР° РєР°СЂС‚Р°";
    this.wlu = "С‡РµС‚РёСЂРё РђСЃР° СЃ РЅСЏРєРѕСЏ РґСЂСѓРіР° РєР°СЂС‚Р°";
    this.ujp = "С‡РµС‚РёСЂРё 2-РєРё, 3-РєРё, РёР»Рё 4-РєРё СЃ РђСЃ, 2-РєР°, 3-РєР° РёР»Рё 4-РєР°";
    this.wpy = "С‡РµС‚РёСЂРё РђСЃР° СЃ 2-РєР°, 3-РєР° РёР»Рё 4-РєР°";
    this.zuy = "РґРІР° РџРѕРїР° РёР»Рё РђСЃР°";
    this.dqn = "РґРІРµ 10-РєРё, Р’Р°Р»РµС‚Р°, Р”Р°РјРё, РџРѕРїР° РёР»Рё РђСЃР°";
    this.som = "FIVE OF A KIND";
    this.uxn = "ROYAL FLUSH";
    this.kny = "STRAIGHT FLUSH";
    this.lje = "FOUR OF A KIND";
    this.afa = "FULL HOUSE";
    this.cjj = "FLUSH";
    this.szv = "STRAIGHT";
    this.abk = "THREE OF A KIND";
    this.exa = "TWO PAIRS";
    this.vit = "HIGH PAIR";
    this.bmt = "FOUR FLUSH";
    this.rhw = "POKER";
    this.oxi = "SKIP STRAIGHT";
    this.gkk = "BLAZE";
    this.qna = "CORNER STRAIGHT";
    this.tvv = "TENS OR BETTER";
    this.crj = "JACKS OR BETTER";
    this.uph = "KINGS OR BETTER";
    this.riz = "WILD ROYAL FLUSH";
    this.ulk = "FOUR DEUCES";
    this.wtc = "FOUR 5 TO KING";
    this.cbq = "FOUR 2 TO 4";
    this.wak = "FOUR ACES";
    this.krv = "FOUR LOW WITH LOW";
    this.okd = "FOUR ACES WITH 2, 3 OR 4";
    this.yfp = "РќР•Р Р•РЁР•РќРћ";
    this.mse = "РР“Р РђР§";
    this.jkw = "Р”РР›РЄР ";
    this.ktx = "Р”РЈР‘Р›РР РђР™РўР• РћРўРќРћР’Рћ РР›Р РџР РР‘Р•Р Р•РўР•?";
    this.fmg = "РђРєРѕ РёР·Р±СЂР°РЅР°С‚Р° РєР°СЂС‚Р° Рµ РїРѕ-РіРѕР»СЏРјР° РѕС‚ РєР°СЂС‚Р°С‚Р° РЅР° РґРёР»СЉСЂР°:РџР•Р§Р•Р›РРўР•!";
    this.sfr = "РђРєРѕ РёР·Р±СЂР°РЅР°С‚Р° РєР°СЂС‚Р° Рµ РїРѕ-РјР°Р»РєР° РѕС‚ РґРёР»СЉСЂРѕРІР°С‚Р°:Р“РЈР‘РРўР•";
    this.opa = "РђРєРѕ РёР·Р±СЂР°РЅР°С‚Р° Рµ СЃСЉС‰Р°С‚Р°:РќРµСЂРµС€РµРЅРѕ";
    this.abi = "РђСЃ Рµ РЅР°Р№-РіРѕР»СЏРјР°С‚Р°, 2-РєР° Рµ РЅР°Р№-РјР°Р»РєР°С‚Р°, Р±РµР· РґР¶РѕРєРµСЂ РєР°СЂС‚Рё.";
    this.axp = "РїРµС‚ РїРѕСЂРµРґРЅРё РєР°СЂС‚Рё СЃ РђСЃ РІ СЃСЂРµРґР°С‚Р°";
    this.acd = "РєРѕРјР±РёРЅР°С†РёСЏ РѕС‚ РєР°СЂС‚Рё РІ РєРѕРёС‚Рѕ РёРјР°(K -Q -J -РџРѕРї, Р”Р°РјР°, Р’Р°Р»Рµ)";
    this.ucg = "РїРµС‚ РєР°СЂС‚Рё СЃ С‡РµС‚РЅРё РёР»Рё РЅРµС‡РµС‚РЅРё СЃС‚РѕР№РЅРѕСЃС‚Рё";
    this.wfv = "Р—РђР”Р РЄР–РўР• РљРђР РўР";
    this.wgs = "РџРћР‘Р•Р”Р Р”РР›РЄР Рђ, Р—Рђ Р”Рђ РЈР”Р’РћРРЁ РџР•Р§РђР›Р‘РђРўРђ";
    this.xhj = "РР—Р‘Р•Р Р РџР РђР’РР›РќРђРўРђ РЎРўРћР™РќРћРЎРў, Р—Рђ Р”Рђ РЈР”Р’РћРРЁ РџР•Р§РђР›Р‘РђРўРђ"
}
jgo.prototype = new ysn;

function pms() {
    this.pco = "бѓ“бѓђбѓбѓ­бѓбѓ бѓ”бѓ—";
    this.aeh = "бѓ¬бѓбѓ—бѓ”бѓљбѓ";
    this.bzy = "бѓЁбѓђбѓ•бѓ";
    this.krl = "бѓ›бѓђбѓ¦бѓђбѓљбѓ";
    this.usj = "бѓ“бѓђбѓ‘бѓљбѓђ";
    this.fcy = "бѓђбѓбѓ¦бѓ”бѓ— бѓ‘бѓђбѓ бѓђбѓ—бѓ";
    this.kqa = "бѓ“бѓђбѓбѓ­бѓбѓ бѓ”бѓ— бѓ‘бѓђбѓ бѓђбѓ—бѓ”бѓ‘бѓ";
    this.pxe = "бѓђбѓбѓ¦бѓ”бѓ— бѓ‘бѓђбѓ бѓђбѓ—бѓ";
    this.bzb = "бѓ®бѓЈбѓ—бѓ бѓбѓ’бѓбѓ•бѓ” бѓ›бѓњбѓбѓЁбѓ•бѓњбѓ”бѓљбѓќбѓ‘бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ (бѓЁбѓ”бѓЎбѓђбѓ«бѓљбѓќбѓђ бѓ›бѓќбѓћбѓќбѓ•бѓ”бѓ‘бѓЈбѓљ бѓбѓҐбѓњбѓђбѓЎ бѓ›бѓ®бѓќбѓљбѓќбѓ“ бѓЇбѓќбѓ™бѓ”бѓ бѓбѓ—)";
    this.inn = "бѓбѓ’бѓбѓ•бѓ” бѓ¤бѓ”бѓ бѓбѓЎ бѓўбѓЈбѓ–бѓ - бѓ›бѓ”бѓ¤бѓ” - бѓ“бѓђбѓ›бѓђ - бѓ•бѓђбѓљбѓ”бѓўбѓ - бѓђбѓ—бѓбѓђбѓњбѓ";
    this.upj = "Straight бѓбѓ’бѓбѓ•бѓ” бѓ¤бѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ”бѓ‘бѓбѓ—";
    this.xue = "бѓбѓ’бѓбѓ•бѓ” бѓбѓ”бѓ бѓђбѓ бѓҐбѓбѓбѓЎ бѓќбѓ—бѓ®бѓ бѓ™бѓђбѓ бѓўбѓ";
    this.ala = "Three Of A Kind-бѓбѓЎбѓђ бѓ“бѓђ бѓ”бѓ бѓ—бѓ Pair-бѓбѓЎ бѓ™бѓќбѓ›бѓ‘бѓбѓњбѓђбѓЄбѓбѓђ";
    this.thd = "бѓ®бѓЈбѓ—бѓ бѓ”бѓ бѓ—бѓ бѓ“бѓђ бѓбѓ’бѓбѓ•бѓ” бѓ¤бѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ";
    this.lda = "бѓ®бѓЈбѓ—бѓ бѓ—бѓђбѓњбѓ›бѓбѓ›бѓ“бѓ”бѓ•бѓ бѓЈбѓљбѓ бѓ™бѓђбѓ бѓўбѓ";
    this.iya = "бѓЎбѓђбѓ›бѓ бѓ—бѓђбѓњбѓђбѓ‘бѓђбѓ бѓ бѓ™бѓђбѓ бѓўбѓ";
    this.lmc = "бѓќбѓ бѓ бѓќбѓ  бѓ—бѓђбѓњбѓђбѓ‘бѓђбѓ  бѓ™бѓђбѓ бѓўбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.xmi = "бѓќбѓ бѓ бѓ—бѓђбѓњбѓђбѓ‘бѓђбѓ бѓ бѓ™бѓђбѓ бѓўбѓ бѓ•бѓђбѓљбѓ”бѓўбѓбѓ— бѓ–бѓ”бѓ•бѓбѓ—бѓ™бѓ”бѓњ";
    this.ouz = "бѓќбѓ—бѓ®бѓ бѓЎбѓ®бѓ•бѓђбѓ“бѓђбѓЎбѓ®бѓ•бѓђ бѓ”бѓ бѓ—бѓ бѓ“бѓђ бѓбѓ’бѓбѓ•бѓ” бѓ¤бѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ";
    this.axp = "Straight бѓЁбѓЈбѓђбѓЁбѓ бѓўбѓЈбѓ–бѓбѓ—";
    this.acd = "5 бѓњбѓђбѓ®бѓђбѓўбѓбѓђбѓњбѓ бѓ™бѓђбѓ бѓўбѓ";
    this.ucg = "Straight бѓЎбѓђбѓ“бѓђбѓЄ бѓ§бѓќбѓ•бѓ”бѓљбѓ бѓ›бѓ”бѓќбѓ бѓ” бѓ™бѓђбѓ бѓўбѓ бѓђбѓ™бѓљбѓбѓђ";
    this.dwi = "ROYAL FLUSH бѓ бѓќбѓ›бѓ”бѓљбѓбѓЄ бѓЁбѓ”бѓбѓЄбѓђбѓ•бѓЎ бѓЇбѓќбѓ™бѓ”бѓ бѓЎ";
    this.gim = "бѓќбѓ—бѓ®бѓ бѓќбѓ бѓбѓђбѓњбѓ бѓњбѓ”бѓ‘бѓбѓЎбѓ›бѓбѓ”бѓ  бѓЎбѓ®бѓ•бѓђ бѓ™бѓђбѓ бѓўбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.gpa = "бѓќбѓ—бѓ®бѓ 5-бѓбѓђбѓњбѓ, 6-бѓбѓђбѓњбѓ, 7-бѓбѓђбѓњбѓ, 8-бѓбѓђбѓњбѓ, 9-бѓбѓђбѓњбѓ, 10-бѓбѓђбѓњбѓ, бѓ•бѓђбѓљбѓ”бѓўбѓ, бѓ“бѓђбѓ›бѓђ бѓђбѓњ бѓ›бѓ”бѓ¤бѓ”";
    this.rcz = "бѓќбѓ—бѓ®бѓ 2-бѓбѓђбѓњбѓ, 3-бѓбѓђбѓњбѓ бѓђбѓњ 4-бѓбѓђбѓњбѓ бѓњбѓ”бѓ‘бѓбѓЎбѓ›бѓбѓ”бѓ  бѓЎбѓ®бѓ•бѓђ бѓ™бѓђбѓ бѓўбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.wlu = "бѓќбѓ—бѓ®бѓ бѓўбѓЈбѓ–бѓ бѓњбѓ”бѓ‘бѓбѓЎбѓ›бѓбѓ”бѓ  бѓЎбѓ®бѓ•бѓђ бѓ™бѓђбѓ бѓўбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.ujp = "бѓќбѓ—бѓ®бѓ 2-бѓбѓђбѓњбѓ, 3-бѓбѓђбѓњбѓ бѓђбѓњ 4-бѓбѓђбѓњбѓ бѓўбѓЈбѓ–бѓ—бѓђбѓњ 2-бѓбѓђбѓњбѓ—бѓђбѓњ, 3-бѓбѓђбѓњбѓ—бѓђбѓњ бѓђбѓњ 4-бѓбѓђбѓњбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.wpy = "бѓќбѓ—бѓ®бѓ бѓўбѓЈбѓ–бѓ 2, 3 бѓђбѓњ 4-бѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.zuy = "бѓќбѓ бѓ бѓ›бѓ”бѓ¤бѓ” бѓђбѓњ бѓўбѓЈбѓ–бѓ";
    this.dqn = "бѓќбѓ бѓ бѓђбѓ—бѓбѓђбѓњбѓ, бѓ•бѓђбѓљбѓ”бѓўбѓ, бѓ“бѓђбѓ›бѓђ, бѓ›бѓ”бѓ¤бѓ” бѓђбѓњ бѓўбѓЈбѓ–бѓ";
    this.som = "FIVE OF A KIND";
    this.uxn = "ROYAL FLUSH";
    this.kny = "STRAIGHT FLUSH";
    this.lje = "FOUR OF A KIND";
    this.afa = "FULL HOUSE";
    this.cjj = "FLUSH";
    this.szv = "STRAIGHT";
    this.abk = "THREE OF A KIND";
    this.exa = "TWO PAIRS";
    this.vit = "HIGH PAIR";
    this.bmt = "FOUR FLUSH";
    this.rhw = "POKER";
    this.oxi = "SKIP STRAIGHT";
    this.gkk = "BLAZE";
    this.qna = "CORNER STRAIGHT";
    this.tvv = "TENS OR BETTER";
    this.crj = "JACKS OR BETTER";
    this.uph = "KINGS OR BETTER";
    this.riz = "WILD ROYAL FLUSH";
    this.ulk = "FOUR DEUCES";
    this.wtc = "FOUR 5 TO KING";
    this.cbq = "FOUR 2 TO 4";
    this.wak = "FOUR ACES";
    this.krv = "FOUR LOW WITH LOW";
    this.okd = "FOUR ACES WITH 2, 3 OR 4";
    this.ktx = "бѓбѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ— бѓђбѓњ бѓђбѓбѓ¦бѓ”бѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ?";
    this.wfv = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓ™бѓђбѓ бѓўбѓ";
    this.fmg = "бѓ—бѓЈ бѓђбѓ бѓ©бѓ”бѓЈбѓљбѓ бѓ™бѓђбѓ бѓўбѓ бѓ“бѓбѓљбѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ–бѓ” бѓЈбѓ¤бѓ бѓќ бѓ›бѓђбѓ¦бѓђбѓљбѓбѓђ: бѓ—бѓҐбѓ•бѓ”бѓњ бѓ›бѓќбѓбѓ’бѓ”бѓ‘бѓ—!";
    this.sfr = "бѓ—бѓЈ бѓђбѓ бѓ©бѓ”бѓЈбѓљбѓ бѓ™бѓђбѓ бѓўбѓ бѓ“бѓбѓљбѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ–бѓ” бѓЈбѓ¤бѓ бѓќ бѓ“бѓђбѓ‘бѓђбѓљбѓбѓђ: бѓ—бѓҐбѓ•бѓ”бѓњ бѓ¬бѓђбѓђбѓ’бѓ”бѓ‘бѓ—";
    this.opa = "бѓ—бѓЈ бѓђбѓ бѓ©бѓ”бѓЈбѓљбѓ бѓ™бѓђбѓ бѓўбѓ бѓбѓ’бѓбѓ•бѓ”бѓђ бѓ бѓђбѓЄ бѓ“бѓбѓљбѓ”бѓ бѓЎ бѓђбѓҐбѓ•бѓЎ: бѓђбѓњбѓ’бѓђбѓ бѓбѓЁбѓбѓђ бѓ¤бѓ бѓ”";
    this.abi = "бѓўбѓЈбѓ–бѓ бѓђбѓ бѓбѓЎ бѓ§бѓ•бѓ”бѓљбѓђбѓ–бѓ” бѓ›бѓђбѓ¦бѓђбѓљбѓ, бѓќбѓ бѓбѓђбѓњбѓ бѓ§бѓ•бѓ”бѓљбѓђбѓ–бѓ” бѓ“бѓђбѓ‘бѓђбѓљбѓ, бѓЇбѓќбѓ™бѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ бѓђбѓ  бѓ—бѓђбѓ›бѓђбѓЁбѓ“бѓ”бѓ‘бѓђ.";
    this.yfp = "бѓ¤бѓ бѓ”";
    this.mse = "бѓ›бѓќбѓ—бѓђбѓ›бѓђбѓЁбѓ”";
    this.jkw = "бѓ“бѓбѓљбѓ”бѓ бѓ";
    this.wgs = "бѓ›бѓќбѓЈбѓ’бѓ”бѓ— бѓ“бѓбѓљбѓ”бѓ бѓЎ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓќбѓ бѓ›бѓђбѓ’бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.xhj = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓЎбѓ¬бѓќбѓ бѓ бѓЎбѓбѓ“бѓбѓ“бѓ” бѓ бѓќбѓ› бѓ’бѓђбѓђбѓќбѓ бѓ›бѓђбѓ’бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ"
}
pms.prototype = new ngr;

function cqc() {
    this.pco = "TART";
    this.aeh = "PIROS";
    this.bzy = "FEKETE";
    this.krl = "MAGAS";
    this.usj = "ALACSONY";
    this.fcy = "KГ‰RJEN LAPOKAT";
    this.kqa = "TARTSON LAPOKAT";
    this.pxe = "KГ‰RJEN LAPOKAT";
    this.bzb = "Г¶t egyforma lap (az Г¶tГ¶dik a JOKER)";
    this.inn = "ГЎsz - kirГЎly - dГЎma - bubi - tizes egy szГ­nben";
    this.upj = "SOR egyforma szГ­nЕ± lapokbГіl";
    this.xue = "nГ©gy egyforma lap";
    this.ala = "hГЎrom Г©s kettЕ‘ egyforma lap";
    this.thd = "Г¶t egyforma szГ­nЕ± lap";
    this.lda = "Г¶t sorban kГ¶vetkezЕ‘ lap nem egyforma szГ­nben";
    this.iya = "hГЎrom egyforma lap";
    this.lmc = "kettЕ‘ pГЎr Г©s mГ©g egy lap";
    this.xmi = "kettЕ‘ Bubi, DГЎma, KirГЎly vagy ГЃsz";
    this.ouz = "nГ©gy egyforma Г©s egy mГЎsmilyen szГ­nЕ± lap";
    this.axp = "5 sorban kГ¶vetkezЕ‘ lap A-val a kГ¶zГ©pen";
    this.acd = "5 'kГ©pes' lap";
    this.ucg = "5 egymГЎst kГ¶vetЕ‘ pГЎros vagy pГЎratlan lap";
    this.dwi = "ROYAL FLUSH amelyben van Joker";
    this.gim = "nГ©gy kettes Г©s mГ©g egy lap";
    this.gpa = "nГ©gy 5-Г¶s, 6-os, 7-es, 8-as, 9-es, 10-es, Bubi, DГЎma vagy KirГЎly";
    this.rcz = "nГ©gy kettes, hГЎrmas vagy nГ©gyes + egy lap";
    this.wlu = "nГ©gy ГЎsz Г©s mГ©g egy lap";
    this.ujp = "nГ©gy 2, 3 vagy 4 meg egy ГЎsz, 2, 3 vagy 4";
    this.wpy = "nГ©gy ГЃsz Г©s 2, 3 vagy 4";
    this.zuy = "kettЕ‘ KirГЎly vagy ГЃsz";
    this.dqn = "kettЕ‘ tizes, bubi, dГЎma, kirГЎly vagy ГЎsz";
    this.som = "FIVE OF A KIND";
    this.uxn = "ROYAL FLUSH";
    this.kny = "STRAIGHT FLUSH";
    this.lje = "FOUR OF A KIND";
    this.afa = "FULL HOUSE";
    this.cjj = "FLUSH";
    this.szv = "STRAIGHT";
    this.abk = "THREE OF A KIND";
    this.exa = "TWO PAIRS";
    this.vit = "HIGH PAIR";
    this.bmt = "FOUR FLUSH";
    this.rhw = "POKER";
    this.oxi = "SKIP STRAIGHT";
    this.gkk = "BLAZE";
    this.qna = "CORNER STRAIGHT";
    this.tvv = "TENS OR BETTER";
    this.crj = "JACKS OR BETTER";
    this.uph = "KINGS OR BETTER";
    this.riz = "WILD ROYAL FLUSH";
    this.ulk = "FOUR DEUCES";
    this.wtc = "FOUR 5 TO KING";
    this.cbq = "FOUR 2 TO 4";
    this.wak = "FOUR ACES";
    this.krv = "FOUR LOW WITH LOW";
    this.okd = "FOUR ACES WITH 2, 3 OR 4";
    this.ktx = "SZOROZZA VAGY FELГЌRJA?";
    this.wfv = "VГЃLASSZON EGY LAPOT";
    this.fmg = "Ha a kivГЎlasztott lap az osztГі lapjГЎtГіl nagyobb: NYERT!";
    this.sfr = "Ha a kivГЎlasztott lap az osztГі lapjГЎtГіl kisebb: veszГ­tett";
    this.opa = "Ha a kГ©t lap egyforma: dГ¶ntetlen";
    this.abi = "Az ГЃSZ a legnagyobb a kettes pedig a legkisebb lap.";
    this.yfp = "DГ–NTETLEN";
    this.mse = "JГЃTГ‰KOS";
    this.jkw = "OSZTГ“";
    this.wgs = "GYЕђZZE LE AZ OSZTГ“T, HOGY MEGDUPLГЃZZA A NYEREMГ‰NYT";
    this.xhj = "VГЃLASSZA A MEGFELELЕђT, HOGY MEGDUPLГЃZZA A NYEREMГ‰NYT"
}
cqc.prototype = new ymb;

function kgl() {
    this.pco = "ЕўINERE";
    this.aeh = "ROЕћU";
    this.bzy = "NEGRU";
    this.krl = "MARE";
    this.usj = "MICД‚";
    this.fcy = "ГЋMPД‚RЕўIRE CД‚RЕўI";
    this.kqa = "ЕўINERE CД‚RЕўI";
    this.pxe = "ГЋMPД‚RЕўIRE CД‚RЕўI";
    this.bzb = "Cinci cДѓrЕЈi identice (posibil numai cu joker)";
    this.inn = "As - rege - damДѓ - valet - zece de aceeaЕџi culoare";
    this.upj = "STRAIGHT cu cДѓrЕЈi de aceeaЕџi culoare";
    this.xue = "Patru cДѓrЕЈi de aceeaЕџi valoare";
    this.ala = "CombinaЕЈie din THREE OF A KIND Еџi PAIR";
    this.thd = "Cinci cДѓrЕЈi de aceeaЕџi culoare";
    this.lda = "Cinci cДѓrЕЈi Г®n succesiune ordonatДѓ, nu de aceeaЕџi culoare";
    this.iya = "Trei cДѓrЕЈi egale ca valoare";
    this.lmc = "DouДѓ perechi diferite Еџi o a cincea carte";
    this.xmi = "DouДѓ cДѓrЕЈi cu valeЕЈi, dame, regi sau aЕџi";
    this.ouz = "Patru cДѓrЕЈi de aceeaЕџi culoare cu o a 5-a carte";
    this.axp = "Straight cu as Г®n mijloc";
    this.acd = "CombinaЕЈie de cДѓrЕЈi cu figuri cu valet, damДѓ Еџi rege";
    this.ucg = "Cinci valori succesive cu soЕЈ sau fДѓrДѓ soЕЈ";
    this.dwi = "ROYAL FLUSH cu joker";
    this.gim = "Patru cДѓrЕЈi de doi cu o altДѓ carte";
    this.gpa = "Patru cДѓrЕЈi de 5, 6, 7, 8, 9, 10, valeЕЈi, dame sau regi";
    this.rcz = "Patru cДѓrЕЈi de 2, 3 sau 4 cu o altДѓ carte";
    this.wlu = "Patru aЕџi cu o altДѓ carte";
    this.ujp = "Patru cДѓrЕЈi de 2, 3 sau 4 cu un as, o carte de 2, 3 sau 4";
    this.wpy = "Patru aЕџi cu o carte de 2, 3 sau 4";
    this.zuy = "Doi regi sau doi aЕџi.";
    this.dqn = "DouДѓ cДѓrЕЈi de 10, valeЕЈi, dame, regi sau aЕџi";
    this.som = "FIVE OF A KIND";
    this.uxn = "ROYAL FLUSH";
    this.kny = "STRAIGHT FLUSH";
    this.lje = "FOUR OF A KIND";
    this.afa = "FULL HOUSE";
    this.cjj = "FLUSH";
    this.szv = "STRAIGHT";
    this.abk = "THREE OF A KIND";
    this.exa = "TWO PAIRS";
    this.vit = "HIGH PAIR";
    this.bmt = "FOUR FLUSH";
    this.rhw = "POKER";
    this.oxi = "SKIP STRAIGHT";
    this.gkk = "BLAZE";
    this.qna = "CORNER STRAIGHT";
    this.tvv = "TENS OR BETTER";
    this.crj = "JACKS OR BETTER";
    this.uph = "KINGS OR BETTER";
    this.riz = "WILD ROYAL FLUSH";
    this.ulk = "FOUR DEUCES";
    this.wtc = "FOUR 5 TO KING";
    this.cbq = "FOUR 2 TO 4";
    this.wak = "FOUR ACES";
    this.krv = "FOUR LOW WITH LOW";
    this.okd = "FOUR ACES WITH 2, 3 OR 4";
    this.ktx = "GAMBLE SAU RIDICAREA CГ‚ЕћTIGULUI?";
    this.wfv = "ALEGEЕўI O CARTE";
    this.fmg = "CГўnd cartea aleasДѓ este mai mare decГўt cea a dealerului: cГўЕџtig!";
    this.sfr = "CГўnd cartea aleasДѓ este mai micДѓ decГўt cea a dealerului: fДѓrДѓ cГўЕџtig";
    this.opa = " CГўnd cartea aleasДѓ este identicДѓ cu cea a dealerului: egal";
    this.abi = "As este cartea cea mai mare, 2 este cartea cea mai micДѓ, fДѓrДѓ joker.";
    this.yfp = "EGAL";
    this.mse = "PLAYER";
    this.jkw = "DEALER";
    this.wgs = "ГЋNVINGE DEALERUL PENTRU DUBLAREA PROFITULUI";
    this.xhj = "SELECTEAZД‚ VALOAREA CORECTД‚ PENTRU DUBLAREA CГ‚ЕћTIGULUI"
}
kgl.prototype = new yjy;

function rdd() {
    this.pco = "HELD";
    this.aeh = "VERMELHO";
    this.bzy = "PRETO";
    this.krl = "ALTO";
    this.usj = "BAIXO";
    this.fcy = "DAR CARTAS";
    this.kqa = "RETER CARTAS";
    this.pxe = "DAR CARTAS";
    this.bzb = "Cinco cartas iguais com o mesmo valor (sГі Г© possГ­vel com curinga)";
    this.inn = "ГЃs - Rei - Dama - Valete - Dez de um naipe";
    this.upj = "STRAIGHT do mesmo naipe";
    this.xue = "Quatro cartas do mesmo valor";
    this.ala = "CombinaГ§ГЈo de THREE OF A KIND e PAIR";
    this.thd = "Cinco cartas com o mesmo naipe";
    this.lda = "Cinco cartas sucessivas, sem o mesmo naipe";
    this.iya = "TrГЄs cartas do mesmo valor";
    this.lmc = "Dois pares diferentes e uma 5ВЄ carta";
    this.xmi = "Dois valetes, damas, reis ou ГЎses";
    this.ouz = "Quatro cartas do mesmo naipe com uma 5ВЄ";
    this.axp = "Uma escada com um ГЎs no centro";
    this.acd = "Uma combinaГ§ГЈo somente de figuras";
    this.ucg = "SequГЄncia de pares ou Г­mpares de sucessivos valores";
    this.dwi = "ROYAL FLUSH com curinga";
    this.gim = "Quatro dois com uma outra carta";
    this.gpa = "Quatro 5, 6, 7, 8, 9, 10, valete, dama, rei";
    this.rcz = "Quatro 2, 3 ou 4 com outra carta";
    this.wlu = "Quatro ГЎses com uma outra carta";
    this.ujp = "Quatro 2,3 ou 4 A, 2, 3 ou 4";
    this.wpy = "Quatro ГЎses com 2,3 ou 4";
    this.zuy = "Dois reis ou dois ГЎses";
    this.dqn = "Dois 10, valetes, damas, reis ou ГЎses";
    this.som = "FIVE OF A KIND";
    this.uxn = "ROYAL FLUSH";
    this.kny = "STRAIGHT FLUSH";
    this.lje = "FOUR OF A KIND";
    this.afa = "FULL HOUSE";
    this.cjj = "FLUSH";
    this.szv = "STRAIGHT";
    this.abk = "THREE OF A KIND";
    this.exa = "TWO PAIRS";
    this.vit = "HIGH PAIR";
    this.bmt = "FOUR FLUSH";
    this.rhw = "POKER";
    this.oxi = "SKIP STRAIGHT";
    this.gkk = "BLAZE";
    this.qna = "CORNER STRAIGHT";
    this.tvv = "TENS OR BETTER";
    this.crj = "JACKS OR BETTER";
    this.uph = "KINGS OR BETTER";
    this.riz = "WILD ROYAL FLUSH";
    this.ulk = "FOUR DEUCES";
    this.wtc = "FOUR 5 TO KING";
    this.cbq = "FOUR 2 TO 4";
    this.wak = "FOUR ACES";
    this.krv = "FOUR LOW WITH LOW";
    this.okd = "FOUR ACES WITH 2, 3 OR 4";
    this.ktx = "JOGAR OU RECOLHER O PRГ‰MIO?";
    this.wfv = "ESCOLHA UMA CARTA";
    this.fmg = "Se a carta selecionada for mais alta do que a do crupier: PRГ‰MIO";
    this.sfr = "Se a carta selecionada for menor do que a do crupier: Nenhum prГ©mio";
    this.opa = "Se a carta selecionada for a mesma que a do crupier: Empate";
    this.abi = "Az Г© carta mais alta, dois Г© a menor, nГЈo hГЎ curingas.";
    this.yfp = "EMPATE";
    this.mse = "JOGADOR";
    this.jkw = "CRUPIER";
    this.wgs = "GANHE DO DEALER PARA DOBRAR O GANHO";
    this.xhj = "ESCOLHA O VALOR CERTO PARA DUBRAR O GANHO"
}
rdd.prototype = new grb;

function yhx() {
    this.pco = "GARDER";
    this.aeh = "ROUGE";
    this.bzy = "NOIR";
    this.krl = "HAUT";
    this.usj = "BAS";
    this.fcy = "DONNER DES CARTES";
    this.kqa = "GARDER DES CARTES";
    this.pxe = "DONNER DES CARTES";
    this.bzb = "Cinq cartes identiques (possible seulement avec un joker)";
    this.inn = "As, roi, dame, valet, 10 de la mГЄme couleur";
    this.upj = "STRAIGHT dans la mГЄme couleur";
    this.xue = "Quatre cartes de la mГЄme valeur";
    this.ala = "Combinaison de trois (BRELAN) et un PAIRE";
    this.thd = "Cinq cartes de la mГЄme couleur";
    this.lda = "Cinq cartes dans l'ordre, mais pas de la mГЄme couleur";
    this.iya = "Trois cartes de la mГЄme valeur";
    this.lmc = "Deux paires diffГ©rentes et une 5ГЁme carte";
    this.xmi = "Deux valets, dames, rois ou as";
    this.ouz = "Quatre cartes de la mГЄme couleur avec une 5ГЁme carte";
    this.axp = "Straight avec un as au milieu";
    this.acd = "Cartes qui comprennent le valet, la dame et le roi";
    this.ucg = "Cinq cartes consГ©cutives paires ou impaires";
    this.dwi = "QUINTE FLUSH avec joker";
    this.gim = "Quatre deux avec une autre carte";
    this.gpa = "Quatre 5, 6, 7, 8, 9, 10, valets, dames ou rois";
    this.rcz = "Quatre 2, 3 ou 4 avec une autre carte";
    this.wlu = "Quatres as avec une autre carte";
    this.ujp = "Quatre 2,3 ou 4 avec A, 2, 3, ou 4";
    this.wpy = "Quatre as avec un 2, 3, ou 4";
    this.zuy = "Deux rois ou deux as.";
    this.dqn = "Deux 10, valets, dames, rois ou as";
    this.som = "FIVE OF A KIND";
    this.uxn = "ROYAL FLUSH";
    this.kny = "STRAIGHT FLUSH";
    this.lje = "FOUR OF A KIND";
    this.afa = "FULL HOUSE";
    this.cjj = "FLUSH";
    this.szv = "STRAIGHT";
    this.abk = "THREE OF A KIND";
    this.exa = "TWO PAIRS";
    this.vit = "HIGH PAIR";
    this.bmt = "FOUR FLUSH";
    this.rhw = "POKER";
    this.oxi = "SKIP STRAIGHT";
    this.gkk = "BLAZE";
    this.qna = "CORNER STRAIGHT";
    this.tvv = "TENS OR BETTER";
    this.crj = "JACKS OR BETTER";
    this.uph = "KINGS OR BETTER";
    this.riz = "WILD ROYAL FLUSH";
    this.ulk = "FOUR DEUCES";
    this.wtc = "FOUR 5 TO KING";
    this.cbq = "FOUR 2 TO 4";
    this.wak = "FOUR ACES";
    this.krv = "FOUR LOW WITH LOW";
    this.okd = "FOUR ACES WITH 2, 3 OR 4";
    this.ktx = "GAMBLE OU PRENDRE GAIN?";
    this.wfv = "PRENDS UNE CARTE";
    this.fmg = "Si la carte sГ©lectionnГ©e est supГ©rieure Г  celle du dealer: GAIN";
    this.sfr = "Si la carte sГ©lectionnГ©e est infГ©rieure Г  celle du dealer: PAS DE GAIN";
    this.opa = "Si la carte sГ©lectionnГ©e est identique Г  celle du dealer: EGALITГ‰";
    this.abi = "L'as a la valeur la plus importante, le deux la moins importante, aucun joker.";
    this.yfp = "EGALITГ‰";
    this.mse = "JOUER";
    this.jkw = "NOUN";
    this.wgs = "VAINCS LE DONNEUR AFIN DE DOUBLER LE GAIN";
    this.xhj = "CHOISIS LA BONNE VALEUR AFIN DE DOUBLER LE GAIN"
}
yhx.prototype = new mfp;

function iog() {
    this.pco = "ZADRЕЅI";
    this.aeh = "CRVENA";
    this.bzy = "CRNA";
    this.krl = "VELIKA";
    this.usj = "MALA";
    this.fcy = "DIJELI KARTE";
    this.kqa = "ZADRЕЅI KARTE";
    this.pxe = "DIJELI KARTE";
    this.bzb = "Pet istih karata (moguД‡e samo s dЕѕokerom)";
    this.inn = "As - kralj - dama - deДЌko - desetka u istoj boji";
    this.upj = "STRAIGHT u istoj boji";
    this.xue = "ДЊetiri jednake karte";
    this.ala = "Kombinacija od TRI ISTE i PARA";
    this.thd = "Pet karata u istoj boji";
    this.lda = "Pet karata u nizu, ali ne u istoj boji";
    this.iya = "Tri jednake karte";
    this.lmc = "Dva razliДЌita para i neka 5. karta";
    this.xmi = "Dva deДЌka, dame, kralja ili asa";
    this.ouz = "ДЊetiri karte u istoj boji s nekom 5. kartom";
    this.axp = "Pet karata u redu, As u sredini";
    this.acd = "5 karata sa slikama (deДЌko, dama i kralj + 2 slike)";
    this.ucg = "5 uzastopnih parnih ili neparnih karata";
    this.dwi = "ROYAL FLUSH s dЕѕokerom";
    this.gim = "ДЊetiri dvojke s nekom drugom kartom";
    this.gpa = "ДЊetiri petice, ЕЎestice, sedmice, osmice, devetke, desetke, deДЌka, dame ili kralja";
    this.rcz = "ДЊetiri dvojke, trojke ili ДЌetvorke s nekom drugom kartom";
    this.wlu = "ДЊetiri asa sa nekom drugom kartom";
    this.ujp = "ДЊetiri 2,3 ili 4 sa A, 2, 3 ili 4";
    this.wpy = "ДЊetiri asa s 2, 3 ili 4";
    this.zuy = "Dva kralja ili dva asa";
    this.dqn = "Dvije desetke, deДЌka, dame, kralja ili asa";
    this.som = "FIVE OF A KIND";
    this.uxn = "ROYAL FLUSH";
    this.kny = "STRAIGHT FLUSH";
    this.lje = "FOUR OF A KIND";
    this.afa = "FULL HOUSE";
    this.cjj = "FLUSH";
    this.szv = "STRAIGHT";
    this.abk = "THREE OF A KIND";
    this.exa = "TWO PAIRS";
    this.vit = "HIGH PAIR";
    this.bmt = "FOUR FLUSH";
    this.rhw = "POKER";
    this.oxi = "SKIP STRAIGHT";
    this.gkk = "BLAZE";
    this.qna = "CORNER STRAIGHT";
    this.tvv = "TENS OR BETTER";
    this.crj = "JACKS OR BETTER";
    this.uph = "KINGS OR BETTER";
    this.riz = "WILD ROYAL FLUSH";
    this.ulk = "FOUR DEUCES";
    this.wtc = "FOUR 5 TO KING";
    this.cbq = "FOUR 2 TO 4";
    this.wak = "FOUR ACES";
    this.krv = "FOUR LOW WITH LOW";
    this.okd = "FOUR ACES WITH 2, 3 OR 4";
    this.ktx = "IGRAJ ILI POKUPI DOBITAK?";
    this.wfv = "ODABERITE KARTU";
    this.fmg = "Ako je odabrana karta veД‡a od dilerove karte: DOBITAK";
    this.sfr = "Ako je odabrana karta manja od dilerove karte: NEMA DOBITKA";
    this.opa = "Ako je odabrana karta ista kao dilerova: NERIJEЕ ENO";
    this.abi = "As je najveД‡a karta, 2 je najmanja karta, nema dЕѕokera.";
    this.yfp = "ISTA";
    this.mse = "IGRAДЊ";
    this.jkw = "DILER";
    this.wgs = "POBJEDI DJELITELJA I TIME UDVOSTRUДЊI DOBITAK";
    this.xhj = "ODABERI PRAVU VRIJEDNOST I TIME UDVOSTRUДЊI DOBITAK"
}
iog.prototype = new uxc;

function exv() {
    this.pco = "TENERE";
    this.aeh = "ROSSO";
    this.bzy = "NERO";
    this.krl = "ALTO";
    this.usj = "BASSO";
    this.fcy = "NUOVE CARTE";
    this.kqa = "BLOCCA CARTE";
    this.pxe = "NUOVE CARTE";
    this.bzb = "Cinque carte uguali (possibile soltanto con il joker)";
    this.inn = "Asso - Re - Dama - Fante - 10 di un colore";
    this.upj = "STRAIGHT dello stesso colore";
    this.xue = "Quattro carte dello stesso valore";
    this.ala = "Combinazione tra THREE OF A KIND e una COPPIA";
    this.thd = "Cinque carte dello stesso colore";
    this.lda = "Cinque carte in ordine cronologico, senza aver lo stesso colore";
    this.iya = "Tre carte dello stesso valore";
    this.lmc = "Due coppie diverse e una quinta carta";
    this.xmi = "Due fanti, dame, re o assi";
    this.ouz = "Quattro carte dello stesso colore con una quinta carta";
    this.axp = "Straight con asso in centro";
    this.acd = "5 carte solo con figure";
    this.ucg = "Straight ove sempre una carta su due manca";
    this.dwi = "ROYAL FLUSH con Jolly";
    this.gim = "Quattro due con un'altra carta";
    this.gpa = "Quattro carte da 5, 6, 7, 8, 9, 10, fante, dama o re";
    this.rcz = "Quattro carte da 2, 3 o 4 con un'altra carta";
    this.wlu = "Quattro assi con un'altra carta";
    this.ujp = "Quattro 2,3 o 4 con Asso, 2, 3 o 4";
    this.wpy = "Quattro assi con il 2, 3 o 4";
    this.zuy = "Due re o due assi";
    this.dqn = "Due carte da 10, fante, dama, re o asso";
    this.som = "FIVE OF A KIND";
    this.uxn = "ROYAL FLUSH";
    this.kny = "STRAIGHT FLUSH";
    this.lje = "FOUR OF A KIND";
    this.afa = "FULL HOUSE";
    this.cjj = "FLUSH";
    this.szv = "STRAIGHT";
    this.abk = "THREE OF A KIND";
    this.exa = "TWO PAIRS";
    this.vit = "HIGH PAIR";
    this.bmt = "FOUR FLUSH";
    this.rhw = "POKER";
    this.oxi = "SKIP STRAIGHT";
    this.gkk = "BLAZE";
    this.qna = "CORNER STRAIGHT";
    this.tvv = "TENS OR BETTER";
    this.crj = "JACKS OR BETTER";
    this.uph = "KINGS OR BETTER";
    this.riz = "WILD ROYAL FLUSH";
    this.ulk = "FOUR DEUCES";
    this.wtc = "FOUR 5 TO KING";
    this.cbq = "FOUR 2 TO 4";
    this.wak = "FOUR ACES";
    this.krv = "FOUR LOW WITH LOW";
    this.okd = "FOUR ACES WITH 2, 3 OR 4";
    this.ktx = "GAMBLE O RACCOGLIERE VINCITA?";
    this.wfv = "PRENDI UNA CARTA";
    this.fmg = "Se la carta selezionata ГЁ piГ№ alta di quella del mazziere: VINCITA";
    this.sfr = "Se la carta selezionata ГЁ piГ№ bassa di quella del mazziere: NESSUNA VINCITA";
    this.opa = "Se la carta selezionata ГЁ uguale a quella del mazziere:ALLA PARI";
    this.abi = "L'asso ГЁ la piГ№ alta, il due la piГ№ bassa, nessuno jolly.";
    this.yfp = "ALLA PARI";
    this.mse = "GIOCATORE";
    this.jkw = "DEALER";
    this.wgs = "VINCI SUL DEALER PER RADDOPPIARE LA VINCITA";
    this.xhj = "SCEGLI IL VALORE GIUSTO PER RADDOPPIARE LA VINCITA"
}
exv.prototype = new wyu;

function ije() {
    this.pco = "HГ…LLET";
    this.aeh = "RГ–TT";
    this.bzy = "SVART";
    this.krl = "HГ–G";
    this.usj = "LГ…G";
    this.fcy = "TA KORT";
    this.kqa = "BEHГ…LL KORTEN";
    this.pxe = "TA KORT";
    this.bzb = "Fem kort av samma vГ¤rde (endast mГ¶jligt med Joker)";
    this.inn = "Ess - Kung - Dam - Knekt - Tio i samma fГ¤rg";
    this.upj = "Stege i samma fГ¤rg";
    this.xue = "Fyra kort av samma vГ¤rde";
    this.ala = "Kombination bestГҐende av TRISS och PAR";
    this.thd = "Fem kort i samma fГ¤rg";
    this.lda = "Fem kort i fГ¶ljd, men inte i samma fГ¤rg";
    this.iya = "Tre kort av samma vГ¤rde";
    this.lmc = "TvГҐ olika par och ett 5:e kort";
    this.xmi = "TvГҐ Knektar, Damer, Kungar eller Ess";
    this.ouz = "Fyra kort i en fГ¤rg med ett 5:e kort";
    this.axp = "Stege med Ess i mitten";
    this.acd = "Kort som visar Knekt, Dam och Kung";
    this.ucg = "Stege med fem udda eller fem jГ¤mna kort i fГ¶ljd";
    this.dwi = "ROYAL FLUSH med Joker";
    this.gim = "Fyra tvГҐor med nГҐgot annat kort";
    this.gpa = "Fyra 5:or, 6:or, 7:or, 8:or, 9:or, 10:or, Knektar, Damer eller Kungar";
    this.rcz = "Fyra 2:or, 3:or eller 4:or med nГҐgot annat kort";
    this.wlu = "Fyra Ess med nГҐgot annat kort";
    this.ujp = "Fyra 2:or, 3:or eller 4:or med ett Ess, en 2:a, 3:a eller 4:a";
    this.wpy = "Fyra Ess med en 2:a, 3:a eller 4:a";
    this.zuy = "TvГҐ Kungar eller tvГҐ Ess";
    this.dqn = "TvГҐ 10:or, Knektar, Damer, Kungar eller Ess.";
    this.som = "FIVE OF A KIND";
    this.uxn = "ROYAL FLUSH";
    this.kny = "STRAIGHT FLUSH";
    this.lje = "FOUR OF A KIND";
    this.afa = "FULL HOUSE";
    this.cjj = "FLUSH";
    this.szv = "STRAIGHT";
    this.abk = "THREE OF A KIND";
    this.exa = "TWO PAIRS";
    this.vit = "HIGH PAIR";
    this.bmt = "FOUR FLUSH";
    this.rhw = "POKER";
    this.oxi = "SKIP STRAIGHT";
    this.gkk = "BLAZE";
    this.qna = "CORNER STRAIGHT";
    this.tvv = "TENS OR BETTER";
    this.crj = "JACKS OR BETTER";
    this.uph = "KINGS OR BETTER";
    this.riz = "WILD ROYAL FLUSH";
    this.ulk = "FOUR DEUCES";
    this.wtc = "FOUR 5 TO KING";
    this.cbq = "FOUR 2 TO 4";
    this.wak = "FOUR ACES";
    this.krv = "FOUR LOW WITH LOW";
    this.okd = "FOUR ACES WITH 2, 3 OR 4";
    this.ktx = "DUBBLERA ELLER INKASSERA?";
    this.wfv = "VГ„LJ ETT KORT";
    this.fmg = "Om valt kort Г¤r hГ¶gre Г¤n givens: VINST!";
    this.sfr = "Om valt kort Г¤r lГ¤gre Г¤n givens: fГ¶rlust";
    this.opa = "Om valt kort Г¤r samma som givens: lika";
    this.abi = "Ess Г¤r hГ¶gst, tvГҐ Г¤r lГ¤gst, inga Jokerkort.";
    this.yfp = "LIKA";
    this.mse = "SPELARE";
    this.jkw = "GIVARE";
    this.wgs = "SLГ… DEALERN FГ–R ATT DUBBLA VINSTEN";
    this.xhj = "VГ„LJ RГ„TT VALГ–R FГ–R ATT DUBBLA VINSTEN"
}
ije.prototype = new hcr;

function mnx() {
    this.wkq = "CARD DEAL";
    this.cut = "GO FOR ...";
    this.khd = "7...A = HIGH";
    this.uhv = "A...7 = LOW"
}
mnx.prototype = new lcp;

function chw() {
    this.wkq = "РџРѕР»РѕР¶РёС‚СЊ РєР°СЂС‚С‹";
    this.cut = "РћСЃС‚Р°РЅРѕРІРёС‚РµСЃСЊ";
    this.khd = "7...A = Р’Р«РЎРћРљРђРЇ";
    this.uhv = "A...7 = РќРР—РљРђРЇ"
}
chw.prototype = new dvv;

function liy() {
    this.wkq = "REPARTIR CARTAS";
    this.cut = "APOSTAR POR...";
    this.khd = "7...A = ALTO";
    this.uhv = "A...7 = BAJO"
}
liy.prototype = new ont;

function qtz() {
    this.wkq = "KARTEN AUFLEGEN";
    this.cut = "HALTE AUF...";
    this.khd = "7...A = HOCH";
    this.uhv = "A...7 = TIEF"
}
qtz.prototype = new nzr;

function xgx() {
    this.wkq = "KARTLARI AГ‡";
    this.cut = "AГ‡IK TUT ...";
    this.khd = "7...A = YГњKSEK";
    this.uhv = "A...7 = DГњЕћГњK"
}
xgx.prototype = new hrb;

function tre() {
    this.wkq = "ROZDAT KARTY";
    this.cut = "JDI NA ...";
    this.khd = "7...A = VYSOKГ‰";
    this.uhv = "A...7 = NГЌZKГ‰"
}
tre.prototype = new nlp;

function tfw() {
    this.wkq = "KAARDI JAGAMINE";
    this.cut = "MINE ...";
    this.khd = "7...A = SUUR";
    this.uhv = "A...7 = VГ„IKE"
}
tfw.prototype = new luu;

function tav() {
    this.wkq = "ОњОџО™ОЎО‘ОЈОњО‘ О¤ОЎО‘О ОџОҐО›О‘ОЈ";
    this.cut = "О О—О“О‘О™ОќО• О“О™О‘ ...";
    this.khd = "7...A = ОҐОЁО—О›О‘";
    this.uhv = "A...7 = О§О‘ОњО—О›О‘"
}
tav.prototype = new uzz;

function cml() {
    this.wkq = "Р РђР—Р”РђР’РђРќР• РќРђ РљРђР РўРђ";
    this.cut = "РћРўРР”Р Р—Рђ ...";
    this.khd = "7...A = Р’РРЎРћРљРђ";
    this.uhv = "A...7 = РќРРЎРљРђ"
}
cml.prototype = new jgo;

function mkd() {
    this.wkq = "бѓ™бѓђбѓ бѓўбѓбѓЎ бѓ“бѓђбѓ бѓбѓ’бѓ”бѓ‘бѓђ";
    this.cut = "бѓ›бѓбѓ“бѓбѓ— бѓ бѓќбѓ› ...";
    this.khd = "7...A = бѓ›бѓђбѓ¦бѓљбѓђ";
    this.uhv = "A...7 = бѓ“бѓђбѓ‘бѓљбѓђ"
}
mkd.prototype = new pms;

function her() {
    this.wkq = "LEOSZTГЃS";
    this.cut = "MEGTART...";
    this.khd = "7...A = MAGAS";
    this.uhv = "A...7 = ALACSONY"
}
her.prototype = new cqc;

function nmj() {
    this.wkq = "DISTRIBUIRE CД‚RЕўI";
    this.cut = "ЕўINE PE ...";
    this.khd = "7...A = MARE";
    this.uhv = "A...7 = MIC"
}
nmj.prototype = new kgl;

function ezs() {
    this.wkq = "REPARTIR CARTAS";
    this.cut = "APOSTO POR ...";
    this.khd = "7...A = ALTO";
    this.uhv = "A...7 = BAIXO"
}
ezs.prototype = new rdd;

function vlm() {
    this.wkq = "DONNE LES CARTES";
    this.cut = "Г‚RRETE SUR ...";
    this.khd = "7...A = Г‰LEVГ‰";
    this.uhv = "A...7 = MOINS Г‰LEVГ‰"
}
vlm.prototype = new yhx;

function dhz() {
    this.wkq = "PODIJELI KARTE";
    this.cut = "ZADRЕЅI ...";
    this.khd = "7...A = VELIKE";
    this.uhv = "A...7 = MALE"
}
dhz.prototype = new iog;

function jtc() {
    this.wkq = "NUOVE CARTE";
    this.cut = "TENERE SU ...";
    this.khd = "7...A = ALTO";
    this.uhv = "A...7 = BASSO"
}
jtc.prototype = new exv;

function you() {
    this.wkq = "GIVEN";
    this.cut = "HГ…LL PГ… ...";
    this.khd = "7...A = HГ–G";
    this.uhv = "A...7 = LГ…G"
}
you.prototype = new ije;

function vrm() {
    this.bxf = {
        backgroundColor: "rgb(0, 0, 0)"
    };
    this.vev = {
        backgroundColor: "rgb(0,0,0)",
        ajf: "rgba(0,0,0,0.3)"
    };
    this.wzn = {
        vev: {
            font: "arial",
            gas: "bold",
            backgroundColor: "black",
            niq: "rgb(0,100,10)",
            bwu: "rgb(80,255,100)",
            qdr: "rgb(120,120,120)",
            zcu: "red",
            mdu: "white",
            lkk: "white",
            nkl: null
        },
        uyw: {
            font: "arial",
            gas: "bold",
            backgroundColor: "black",
            niq: "rgb(0,100,10)",
            bwu: "rgb(80,255,100)",
            qdr: "rgb(120,120,120)",
            zcu: "red",
            mdu: "white",
            lkk: "rgb(230,190,10)",
            nkl: null
        }
    };
    this.xji = {
        font: "arial",
        gas: "bold",
        backgroundColor: "rgb(0,0,0)",
        tww: null,
        lkk: "rgb(255,255,255)",
        epw: "rgb(30,30,30)",
        borderColor: "rgb(80,80,80)"
    };
    this.rbo = {
        font: "arial",
        gas: "bold",
        backgroundColor: "black",
        ogn: "rgb(50,50,50)",
        ogh: "rgb(255,255,255)",
        lkk: "white",
        nfa: 0.8,
        ucn: {
            hpn: {
                font: "sanf-serif",
                gas: "",
                textAlign: "center",
                khg: "round",
                backgroundColor: "black",
                lkk: "white",
                borderColor: null,
                epw: null,
                nlw: 1
            }
        }
    };
    this.kaq = {
        font: "arial",
        gas: "bold",
        backgroundColor: "rgb(20,20,30)",
        borderColor: "rgb(0,0,0)",
        laq: "rgba(255,255,255,0.2)",
        lkk: "rgb(255,255,255)",
        kag: "rgba(0,0,0,0.3)",
        display: {
            qta: "arial",
            wdy: "arial",
            gas: "bold",
            lkk: "rgb(255,255,255)",
            xja: "rgb(255,255,255)",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "rgba(255,255,255,0.5)"
        },
        hpn: {
            font: "arial",
            gas: "bold",
            lkk: "rgb(0,0,0)",
            xee: "rgb(150,150,150)",
            backgroundColor: "rgba(255,255,255,0.8)",
            tww: "rgba(255,255,255,1)",
            rjj: "rgba(255,255,255,0.8)",
            vhr: "rgba(255,255,255,1)",
            borderColor: "rgba(200,200,200,0.5)",
            khg: "rect",
            cjm: -1
        }
    };
    this.zrz = {
        font: "arial",
        gas: "bold",
        rnk: "rgb(0,0,200)",
        qan: "rgb(255,255,255)",
        xox: "rgb(0,0,150)",
        backgroundColor: "rgb(220,240,255)",
        cls: "rgb(180,220,255)",
        poj: "rgb(10,20,25)",
        jwc: "rgb(130,220,255)",
        lmn: "rgb(130,190,255)",
        lkk: "rgb(255,255,255)",
        bmd: "rgb(130,190,255)",
        zua: "rgb(100,160,255)",
        wko: "rgb(255,255,255)",
        hpn: {
            khg: "rect",
            font: "arial",
            gas: "bold",
            lkk: "rgb(255,255,255)",
            phf: null,
            backgroundColor: "rgb(90,160,255)",
            xof: "rgb(90,160,255)",
            borderColor: "rgb(60,120,200)",
            epw: "rgb(40,80,140)"
        },
        ene: {
            khg: "round",
            font: "arial",
            gas: "bold",
            lkk: "rgb(255,255,255)",
            phf: null,
            backgroundColor: "rgba(0,0,100,0.5)",
            xof: "rgba(150,150,255,0.5)",
            borderColor: "rgb(90,170,255)",
            epw: "rgb(40,80,140)"
        }
    };
    this.dso = {};
    this.rvn = {
        tnp: ["rgb(255,0,0)", "rgb(255,200,0)", "rgb(0,255,200)", "rgb(240,240,240)"]
    };
    this.jtd = {
        type: "left",
        font: "arial",
        gas: "bold",
        backgroundColor: "rgba(0,0,0,0.7)",
        tww: null,
        borderColor: "rgb(0,0,0)",
        epw: "rgb(180,180,180)",
        cls: "rgba(0,0,0,0.6)",
        jau: null,
        xja: "rgb(255,200,0)",
        lkk: "white",
        nin: {
            font: "arial",
            gas: "bold",
            backgroundColor: "rgb(100,100,100)",
            tww: "rgb(100,100,100)",
            rjj: null,
            vhr: null,
            borderColor: "rgb(100,100,100)",
            lkk: "rgb(255,255,255)",
            xee: "rgb(255,200,0)",
            khg: "triangle",
            cjm: 1
        },
        ejv: {
            font: "arial",
            gas: "bold",
            backgroundColor: "rgb(100,100,100)",
            tww: "rgb(100,100,100)",
            rjj: null,
            vhr: null,
            borderColor: "rgb(100,100,100)",
            lkk: "rgb(255,255,255)",
            xee: "rgb(255,200,0)",
            khg: "triangle",
            cjm: 0
        },
        ibn: {
            font: "arial",
            gas: "bold",
            backgroundColor: "rgb(100,100,100)",
            tww: "rgb(15,15,15)",
            rjj: "rgb(100,100,100)",
            vhr: "rgb(15,15,15)",
            borderColor: "rgb(150,150,150)",
            lkk: "rgb(255,255,255)",
            xee: "rgb(255,200,0)",
            khg: "rect",
            cjm: -1
        },
        display: {
            wdy: "sans-serif",
            qta: "sans-serif",
            gas: "bold",
            xja: null,
            lkk: "yellow",
            borderColor: "rgb(100,100,100)",
            epw: null,
            backgroundColor: "black"
        },
        gcn: {
            font: "arial",
            gas: "bold",
            backgroundColor: null,
            tww: null,
            lkk: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.odc = {
        font: "arial",
        gas: "bold",
        backgroundColor: "rgb(180,180,180)",
        tww: "rgb(120,120,120)",
        borderColor: "rgb(80,80,80)",
        epw: "rgb(30,30,30)",
        lkk: "white",
        dfk: {
            font: "arial",
            gas: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            tww: null,
            rjj: "rgba(100,100,100,0.5)",
            vhr: null,
            borderColor: null,
            lkk: "white",
            khg: "rect",
            cjm: -1
        },
        nin: {
            font: "arial",
            gas: "bold",
            backgroundColor: "rgb(255,255,255)",
            tww: "rgb(255,255,255)",
            rjj: null,
            vhr: null,
            borderColor: "rgb(255,255,255)",
            lkk: "rgb(0,0,0)",
            xee: "rgb(0,0,0)",
            khg: "triangle",
            cjm: 1
        },
        ejv: {
            font: "arial",
            gas: "bold",
            backgroundColor: "rgb(255,255,255)",
            tww: "rgb(255,255,255)",
            rjj: null,
            vhr: null,
            borderColor: "rgb(255,255,255)",
            lkk: "rgb(0,0,0)",
            xee: "rgb(0,0,0)",
            khg: "triangle",
            cjm: 0
        },
        tua: {
            khg: "rect",
            font: "arial",
            gas: "bold",
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,0.1)",
            lkk: "white",
            nlw: 1,
            borderColor: "rgb(255,255,255)",
            epw: "rgb(220,220,220)"
        },
        display: {
            wdy: "sans-serif",
            qta: "sans-serif",
            gas: "bold",
            xja: null,
            lkk: "white",
            borderColor: "white",
            epw: null,
            backgroundColor: "rgb(0,0,0)"
        },
        gcn: {
            font: "arial",
            gas: "bold",
            backgroundColor: null,
            tww: null,
            lkk: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.vny = {
        shz: [{
            wdy: "sans-serif",
            yno: "verdana",
            gas: "bold",
            xja: "rgb(255,255,100)",
            mei: "rgb(210,190,40)",
            phf: "rgb(252,247,0)",
            vkl: "rgb(220,200,0)",
            ogn: "rgb(0,0,0)"
        }, {
            wdy: "sans-serif",
            yno: "verdana",
            gas: "bold",
            xja: "rgb(250,250,250)",
            mei: "rgb(210,210,210)",
            phf: "rgb(255,255,255)",
            vkl: "rgb(220,220,220)",
            ogn: "rgb(0,0,0)"
        }, {
            wdy: "sans-serif",
            yno: "verdana",
            gas: "bold",
            xja: "rgb(230,230,230)",
            mei: "rgb(190,190,190)",
            phf: "rgb(255,255,255)",
            vkl: "rgb(220,220,220)",
            ogn: "rgb(0,0,0)"
        }, {
            wdy: "sans-serif",
            yno: "verdana",
            gas: "bold",
            xja: "rgb(230,230,230)",
            mei: "rgb(190,190,190)",
            phf: "rgb(255,255,255)",
            vkl: "rgb(220,220,220)",
            ogn: "rgb(0,0,0)"
        }],
        rca: {
            wdy: "sans-serif",
            yno: "sans-serif",
            gas: "bold",
            xja: "rgb(236,225,207)",
            mei: "rgb(214,170,102)",
            phf: "rgb(245,220,148)",
            vkl: "rgb(190,137,40)"
        },
        mja: {}
    };
    this.qki = {
        rdc: "rgb(240,240,240)",
        zpx: "rgb(255,255,255)",
        borderColor: "rgb(200,200,200)",
        kag: "rgba(0,80,150,0.6)",
        display: {
            qta: "arial",
            wdy: "arial",
            gas: "bold",
            lkk: "rgb(0,80,151)",
            xja: "rgb(0,30,80)",
            backgroundColor: "rgb(255,255,255)",
            borderColor: "rgb(200,200,200)"
        }
    }
}

function qct() {
    this.lvi = {
        backgroundColor: null,
        tww: null,
        cls: "rgb(0,0,0)",
        poj: "rgb(0,0,0)",
        zpz: null,
        jgi: 0.5,
        hpn: {
            khg: "rect",
            font: "verdana",
            gas: "bold",
            backgroundColor: "rgb(0,0,0)",
            xof: "rgb(150,150,150)",
            lkk: "rgb(255,255,255)",
            phf: "rgb(255,255,0)",
            borderColor: "rgb(150,150,150)",
            epw: "rgb(0,0,0)"
        },
        display: {
            qta: "sans-serif",
            wdy: "sans-serif",
            gas: "bold",
            backgroundColor: "black",
            lkk: "yellow",
            xja: "yellow",
            borderColor: "rgb(255,255,255)",
            epw: "rgb(160,160,160)"
        },
        brk: {
            font: "verdana",
            gas: "bold",
            backgroundColor: "rgb(75, 5, 5)",
            borderColor: null,
            lkk: "rgb(255, 255, 0)"
        }
    };
    this.cwc = {
        backgroundColor: null,
        cls: "rgb(0,0,0)",
        poj: "rgb(0,0,0)",
        display: {
            qta: "sans-serif",
            wdy: "sans-serif",
            gas: "bold",
            backgroundColor: "black",
            lkk: "yellow",
            xja: "yellow",
            borderColor: "rgb(255,255,255)",
            epw: "rgb(160,160,160)"
        },
        hpn: {
            khg: "rect",
            font: "verdana",
            gas: "bold",
            backgroundColor: "rgb(0,0,0)",
            xof: "rgb(150,150,150)",
            lkk: "rgb(255,255,255)",
            phf: null,
            borderColor: "rgb(150,150,150)",
            epw: "rgb(0,0,0)"
        },
        brk: {
            font: "verdana",
            gas: "bold",
            backgroundColor: "rgb(75, 5, 5)",
            borderColor: null,
            lkk: "rgb(255, 255, 0)"
        }
    };
    this.lia = {
        backgroundColor: null,
        cls: "rgb(0,0,0)",
        poj: "rgb(0,0,0)",
        hpn: {
            khg: "rect",
            font: "verdana",
            gas: "bold",
            backgroundColor: "rgb(0,0,0)",
            xof: "rgb(150,150,150)",
            lkk: "rgb(255,255,255)",
            phf: null,
            borderColor: "rgb(150,150,150)",
            epw: "rgb(0,0,0)"
        },
    };
    this.hqs = {
        font: "arial",
        gas: "bold",
        aiv: "yellow",
        sac: "yellow",
        lkk: "yellow"
    };
    this.tvl = {
        font: "sans-serif",
        gas: "bold",
        swf: "red",
        thi: "orange",
        ogn: "white"
    };
    this.acc = {
        font: "arial",
        gas: "bold",
        lkk: "yellow"
    };
    this.grz = {
        font: "sans-serif",
        gas: "bold",
        lkk: "rgb(255,255,255)",
        backgroundColor: "rgb(0,0,0)",
        zft: "rgb(0,0,0)",
        bfk: "rgb(255,0,0)",
        mfk: "rgb(255,255,0)",
        wyk: "rgb(80,80,80)",
        mts: "rgb(15,15,15)",
        ndd: "rgb(0,0,0)",
        dgs: "rgb(180,180,180)",
        hwb: "rgb(0,0,0)",
        oxz: 0.7
    }
}
qct.prototype = new vrm;

function isi() {
    this.lvi.backgroundColor = "rgb(0,0,60)";
    this.lvi.cls = "rgb(0,0,60)";
    this.lvi.poj = "rgb(0,0,10)";
    this.lvi.brk.backgroundColor = "rgb(0, 0, 40)";
    this.lvi.hpn.backgroundColor = "rgb(20,0,120)";
    this.lvi.hpn.xof = "rgb(20,0,220)";
    this.lvi.hpn.borderColor = "rgb(20,0,140)";
    this.lvi.hpn.epw = "rgb(0,0,40)";
    this.hqs.sac = "green";
    this.acc.borderColor = "rgb(0,0,40)";
    this.acc.xwg = ["rgb(189,0,0)", "rgb(0,189,189)", "rgb(0,189,0)", "rgb(189,189,0)"];
    this.acc.gek = "red";
    this.acc.hqn = "yellow";
    this.cwc.backgroundColor = "rgb(0,0,60)";
    this.cwc.cls = "rgb(0,0,60)";
    this.cwc.poj = "rgb(0,0,10)";
    this.cwc.brk.backgroundColor = "rgb(0,0,40)";
    this.cwc.hpn.backgroundColor = "rgb(20,0,120)";
    this.cwc.hpn.xof = "rgb(20,0,220)";
    this.cwc.hpn.borderColor = "rgb(20,0,140)";
    this.cwc.hpn.epw = "rgb(0,0,40)";
    this.cwc.lkk = "rgb(189,189,0)";
    this.cwc.font = "verdana";
    this.cwc.gas = "bold";
    this.cwc.tvl = {
        font: "sans-serif",
        gas: "bold",
        swf: "red",
        thi: null,
        ogn: "white"
    };
    this.cwc.qiq = {
        font: "arial",
        gas: "bold",
        lkk: "red"
    };
    this.lia.cls = "rgb(0,0,60)";
    this.lia.poj = "rgb(0,0,10)";
    this.lia.hpn.backgroundColor = "rgb(20,0,120)";
    this.lia.hpn.borderColor = "rgb(20,0,140)";
    this.lia.hpn.epw = "rgb(0,0,40)";
    this.lia.win = {
        font: "arial",
        gas: "bold",
        lkk: "white",
        xja: "yellow",
        vzq: "verdana",
        zjb: "bold italic",
        ueh: "white"
    };
    this.tvd = {
        font: "verdana",
        gas: "bold",
        kbn: "rgb(189,189,0)",
        zxk: "rgb(0,189,0)",
        nud: "rgb(189,0,0)"
    };
    this.qiq = {
        font: "arial",
        gas: "bold",
        lkk: "red"
    };
    this.rbo.ucn.hpn.backgroundColor = "rgb(20,0,120)";
    this.odc.backgroundColor = "rgb(0,0,80)";
    this.odc.tww = "rgb(0,0,40)"
}
isi.prototype = new qct;

function mhn() {
    this.type = "800_600";
    this.wnz = true;
    this.szz = false;
    this.jzh = false;
    this.pze = true;
    this.mjy = false;
    this.aui = false;
    this.xbh = false;
    this.xzx = false
}

function fhp() {
    this.wnz = false;
    this.canvas = {
        gst: new dho(0, 0, 800, 620)
    };
    this.grg = {
        gst: new dho(),
        xru: 0
    };
    this.vev = {
        gst: new dho(0, 20, 800, 600),
        ylx: 0
    };
    this.mdh = {
        btq: new dho(0, 40, 440, 36),
        vhj: new dho(5, 2, 140, 30),
        sej: new dho(150, 2, 140, 30),
        wdd: new dho(295, 2, 140, 30),
        ufm: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.wzn = {
        vev: {
            gst: new dho(0, 0, 500, 360),
            vrr: new dho(5, 325, 490, 30),
            luy: new dho(5, 329, 490, 14),
            mjs: new dho(50, 345, 400, 6),
            zri: new dho(5, 285, 490, 70),
            xaq: new dho(120, 300, 260, 55),
            fontSize: 14,
            qim: 18,
            jvk: 26,
            slk: 5,
            nib: 12,
            dxd: 5,
            rqq: 2
        },
        uyw: {
            gst: new dho(0, 0, 800, 620),
            vrr: new dho(),
            luy: new dho(),
            mjs: new dho(200, 425, 400, 8),
            zri: new dho(100, 372, 600, 84),
            xaq: new dho(270, 394, 260, 70),
            fontSize: 18,
            qim: 24,
            jvk: 20,
            slk: 0,
            nib: 12,
            dxd: 7,
            rqq: 0
        }
    };
    this.xji = {
        gst: new dho(0, 0, 800, 20),
        fontSize: 12,
        eaa: 19,
        kvh: 15,
        iua: 120,
        nib: 2,
        dxd: 2,
        fuu: 2,
        gau: 40
    };
    this.rbo = {
        gst: new dho(0, 20, 800, 70),
        fontSize: 10,
        juv: 10,
        edo: 20,
        vbc: 40,
        ylx: 4,
        nib: 10,
        dxd: 5,
        slk: 10,
        ufm: {
            fontSize: 17,
            slk: 2
        }
    };
    this.zrz = {
        gst: new dho(0, 20, 800, 600),
        btq: new dho(),
        ufm: {
            ovc: 20,
            cov: 0,
            nib: 0,
            gef: 0,
            jzo: 0,
            txi: 8,
            qsg: 8,
            ylx: 0
        },
        xka: new dho(0, 20, 800, 40),
        nel: new dho(0, 100, 800, 40),
        sug: new dho(0, 140, 800, 40),
        fbb: new dho(0, 180, 800, 40),
        vdf: new dho(225, 275, 350, 100),
        hli: new dho(200, 480, 400, 40),
        fll: {
            voa: new dho(340, 540, 120, 55)
        },
        kro: {
            voa: new dho(250, 540, 120, 55),
            scr: new dho(430, 540, 120, 55)
        },
        pqq: 36,
        fontSize: 30,
        toj: 22,
        dxd: 3,
        nib: 5,
        ylx: 2,
        pve: 3,
        joe: 10
    };
    this.dso = {
        gst: new dho(-10, 25, 310, 50),
        xka: new dho(10, 4, 240, 24),
        luy: new dho(10, 28, 240, 18),
        sqi: new dho(260, 10, 40, 30),
        fkk: new dho(7, 2, 26, 26),
        fip: 16,
        ovc: 12,
        eqh: 18
    };
    this.rvn = {
        gst: new dho(150, 160, 500, 280),
        fip: 26,
        fontSize: 20,
        jiw: new dho(465, 5, 30, 30),
        xka: new dho(30, 5, 440, 30),
        hli: new dho(20, 40, 460, 160),
        wec: new dho(20, 230, 460, 40),
        ufm: {
            fontSize: 20
        }
    };
    this.jtd = {
        gst: new dho(0, 55, 560, 430),
        ylx: 2,
        zng: 0,
        yar: 5,
        bhh: 10,
        fip: 26,
        pee: 20,
        xka: new dho(30, 15, 500, 30),
        inp: new dho(20, 50, 520, 60),
        zfg: new dho(40, 60, 220, 40),
        rrd: new dho(328, 60, 30, 40),
        moj: new dho(360, 60, 120, 40),
        bjk: new dho(482, 60, 30, 40),
        pka: new dho(20, 120, 520, 200),
        huh: new dho(40, 120, 480, 40),
        wjy: new dho(30, 160, 280, 40),
        qtq: new dho(328, 160, 30, 40),
        yky: new dho(360, 160, 120, 40),
        wkr: new dho(482, 160, 30, 40),
        ltr: new dho(30, 215, 280, 40),
        ftp: new dho(328, 215, 30, 40),
        gnr: new dho(360, 215, 120, 40),
        qdt: new dho(482, 215, 30, 40),
        vdi: new dho(30, 270, 280, 40),
        zwb: new dho(328, 270, 30, 40),
        idp: new dho(360, 270, 120, 40),
        aqa: new dho(482, 270, 30, 40),
        vrr: new dho(30, 330, 500, 30),
        pwt: new dho(210, 370, 140, 50),
        igq: new dho(),
        gcn: {
            luy: new dho(40, 0, 240, 40),
            dns: new dho(7, 12, 16, 16),
            fontSize: 20,
            txi: 0,
            ylx: 2
        },
        ejv: {
            txi: 3,
            nib: -5,
            dxd: -1,
            qsg: 6,
            fontSize: 20,
            ylx: 0
        },
        nin: {
            txi: 3,
            nib: 5,
            dxd: 0,
            qsg: 6,
            fontSize: 20,
            ylx: 0
        },
        ibn: {
            txi: 6,
            nib: 0,
            dxd: 0,
            qsg: 6,
            fontSize: 26,
            ylx: 2
        },
        display: {
            fip: 16,
            ovc: 24,
            tnv: 0,
            gef: 0,
            ylx: 2,
            uku: 3,
            vls: 3,
            eyp: 3,
            usf: 3
        }
    };
    this.vny = {
        gst: [
            [new dho(2, 20, 130, 44)],
            [new dho(2, 20, 130, 44), new dho(668, 20, 130, 44)],
            [new dho(2, 20, 130, 23), new dho(668, 20, 130, 23), new dho(2, 41, 130, 23)],
            [new dho(2, 20, 130, 23), new dho(668, 20, 130, 23), new dho(2, 41, 130, 23), new dho(668, 41, 130, 23)]
        ],
        display: {
            ltt: new dho(0, 0, 130, 44),
            mcv: new dho(0, 0, 130, 44),
            bag: new dho(),
            xka: new dho(2, 3, 126, 19),
            ahk: new dho(8, 24, 114, 19),
            fip: 16,
            cov: 18,
            rbl: 0
        },
        nxq: {
            ltt: new dho(0, 0, 130, 23),
            mcv: new dho(0, 0, 130, 23),
            bag: new dho(2, 2, 19, 19),
            xka: new dho(),
            ahk: new dho(22, 3, 100, 19),
            fip: 14,
            cov: 18,
            rbl: 0
        },
        rca: {
            gst: new dho(62, 100, 676, 372),
            ltt: new dho(32, 10, 612, 351),
            mcv: new dho(0, 0, 676, 372),
            bag: new dho(301, 263, 74, 74),
            xka: new dho(120, 58, 436, 56),
            ahk: new dho(32, 140, 612, 96),
            fip: 68,
            cov: 100,
            rbl: 0
        },
        mja: {
            gst: new dho(38, 80, 724, 369),
            low: new dho(100, 53, 525, 50),
            ahk: new dho(186, 153, 332, 94),
            xrg: 340,
            prx: 30,
            key: {
                _0: new dho(2, 0, 90, 94),
                _1: new dho(98, 0, 90, 94),
                _2: new dho(194, 0, 90, 94),
                _3: new dho(290, 0, 90, 94),
                _4: new dho(386, 0, 90, 94),
                _5: new dho(482, 0, 90, 94),
                _6: new dho(578, 0, 90, 94),
                _7: new dho(674, 0, 90, 94),
                _8: new dho(770, 0, 90, 94),
                _9: new dho(866, 0, 90, 94),
                _cm: new dho(962, 0, 28, 94),
                _dt: new dho(999, 0, 28, 94),
                _sp: new dho(1036, 0, 28, 94)
            }
        }
    }
}
fhp.prototype = new mhn;

function tza() {
    this.szz = true
}
tza.prototype = new fhp;

function bii() {
    this.mjy = true;
    this.jzh = true;
    this.wnz = false;
    this.szz = true;
    this.canvas = {
        gst: new dho(0, 0, 800, 1165)
    };
    this.grg = {
        gst: new dho(),
        xru: 0
    };
    this.vev = {
        gst: new dho(0, 550, 800, 615),
        ylx: 10
    };
    this.mdh = {
        btq: new dho(0, 330, 440, 36),
        vhj: new dho(5, 2, 140, 30),
        sej: new dho(150, 2, 140, 30),
        wdd: new dho(295, 2, 140, 30),
        ufm: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.wzn = {
        vev: {
            gst: new dho(0, 0, 500, 360),
            vrr: new dho(5, 325, 490, 30),
            luy: new dho(5, 329, 490, 14),
            mjs: new dho(50, 345, 400, 6),
            zri: new dho(5, 285, 490, 70),
            xaq: new dho(120, 300, 260, 55),
            fontSize: 14,
            qim: 18,
            jvk: 26,
            slk: 5,
            nib: 12,
            dxd: 5,
            rqq: 2
        },
        uyw: {
            gst: new dho(0, 0, 800, 600),
            vrr: new dho(),
            luy: new dho(),
            mjs: new dho(200, 411, 400, 8),
            zri: new dho(100, 360, 600, 110),
            xaq: new dho(270, 380, 260, 70),
            fontSize: 18,
            qim: 24,
            jvk: 20,
            slk: 0,
            nib: 12,
            dxd: 7,
            rqq: 0
        }
    };
    this.top = {
        gst: new dho(0, 20, 800, 520)
    };
    this.xji = {
        gst: new dho(0, 0, 800, 20),
        fontSize: 12,
        eaa: 19,
        kvh: 15,
        iua: 120,
        nib: 2,
        dxd: 2,
        fuu: 2,
        gau: 60
    };
    this.rbo = {
        gst: new dho(0, 20, 800, 70),
        fontSize: 10,
        juv: 10,
        edo: 20,
        vbc: 40,
        ylx: 4,
        nib: 10,
        dxd: 5,
        slk: 10,
        ufm: {
            fontSize: 17,
            slk: 2
        }
    };
    this.zrz = {
        gst: new dho(0, 550, 800, 615),
        btq: new dho(),
        ufm: {
            ovc: 26,
            cov: 0,
            nib: 0,
            gef: 0,
            jzo: 0,
            txi: 10,
            qsg: 10,
            ylx: 2
        },
        xka: new dho(0, 20, 800, 40),
        nel: new dho(0, 100, 800, 40),
        sug: new dho(0, 140, 800, 40),
        fbb: new dho(0, 180, 800, 40),
        vdf: new dho(225, 275, 350, 100),
        hli: new dho(200, 480, 400, 40),
        fll: {
            voa: new dho(340, 540, 120, 68)
        },
        kro: {
            voa: new dho(250, 540, 120, 68),
            scr: new dho(430, 540, 120, 68)
        },
        pqq: 36,
        fontSize: 30,
        toj: 22,
        dxd: 3,
        nib: 5,
        ylx: 2,
        pve: 3,
        joe: 10,
    };
    this.dso = {
        gst: new dho(-10, 545, 310, 50),
        xka: new dho(10, 4, 240, 24),
        luy: new dho(10, 28, 240, 18),
        sqi: new dho(260, 10, 40, 30),
        fkk: new dho(7, 2, 26, 26),
        fip: 16,
        ovc: 12,
        eqh: 18
    };
    this.rvn = {
        gst: new dho(150, 690, 500, 280),
        fip: 26,
        fontSize: 20,
        jiw: new dho(465, 5, 30, 30),
        xka: new dho(30, 5, 440, 40),
        hli: new dho(20, 40, 460, 160),
        wec: new dho(20, 230, 460, 40),
        ufm: {
            fontSize: 20
        }
    };
    this.jtd = {
        gst: new dho(0, 585, 560, 430),
        ylx: 2,
        zng: 0,
        yar: 5,
        bhh: 10,
        fip: 26,
        pee: 20,
        xka: new dho(30, 15, 500, 30),
        inp: new dho(20, 50, 520, 60),
        zfg: new dho(40, 60, 220, 40),
        rrd: new dho(328, 60, 30, 40),
        moj: new dho(360, 60, 120, 40),
        bjk: new dho(482, 60, 30, 40),
        pka: new dho(20, 120, 520, 200),
        huh: new dho(40, 120, 480, 40),
        wjy: new dho(30, 160, 280, 40),
        qtq: new dho(328, 160, 30, 40),
        yky: new dho(360, 160, 120, 40),
        wkr: new dho(482, 160, 30, 40),
        ltr: new dho(30, 215, 280, 40),
        ftp: new dho(328, 215, 30, 40),
        gnr: new dho(360, 215, 120, 40),
        qdt: new dho(482, 215, 30, 40),
        vdi: new dho(30, 270, 280, 40),
        zwb: new dho(328, 270, 30, 40),
        idp: new dho(360, 270, 120, 40),
        aqa: new dho(482, 270, 30, 40),
        vrr: new dho(30, 330, 500, 30),
        pwt: new dho(210, 370, 140, 50),
        igq: new dho(),
        gcn: {
            luy: new dho(40, 0, 240, 40),
            dns: new dho(7, 12, 16, 16),
            fontSize: 20,
            txi: 0,
            ylx: 2
        },
        ejv: {
            txi: 3,
            nib: -5,
            dxd: -1,
            qsg: 6,
            fontSize: 20,
            ylx: 0
        },
        nin: {
            txi: 3,
            nib: 5,
            dxd: 0,
            qsg: 6,
            fontSize: 20,
            ylx: 0
        },
        ibn: {
            txi: 6,
            nib: 0,
            dxd: 0,
            qsg: 6,
            fontSize: 26,
            ylx: 2
        },
        display: {
            fip: 16,
            ovc: 24,
            tnv: 0,
            gef: 0,
            ylx: 2,
            uku: 3,
            vls: 3,
            eyp: 3,
            usf: 3
        }
    };
    this.vny = {
        gst: [
            [new dho(2, 550, 130, 44)],
            [new dho(2, 550, 130, 44), new dho(668, 550, 130, 44)],
            [new dho(2, 550, 130, 23), new dho(668, 550, 130, 23), new dho(2, 571, 130, 23)],
            [new dho(2, 550, 130, 23), new dho(668, 550, 130, 23), new dho(2, 571, 130, 23), new dho(668, 571, 130, 23)]
        ],
        display: {
            ltt: new dho(0, 0, 130, 44),
            mcv: new dho(0, 0, 130, 44),
            bag: new dho(),
            xka: new dho(2, 3, 126, 19),
            ahk: new dho(8, 24, 114, 19),
            fip: 16,
            cov: 18,
            rbl: 0
        },
        nxq: {
            ltt: new dho(0, 0, 130, 23),
            mcv: new dho(0, 0, 130, 23),
            bag: new dho(2, 2, 19, 19),
            xka: new dho(),
            ahk: new dho(22, 3, 100, 19),
            fip: 14,
            cov: 18,
            rbl: 0
        },
        rca: {
            gst: new dho(62, 640, 676, 372),
            ltt: new dho(32, 10, 612, 351),
            mcv: new dho(0, 0, 676, 372),
            bag: new dho(301, 263, 74, 74),
            xka: new dho(120, 58, 436, 56),
            ahk: new dho(32, 140, 612, 96),
            fip: 68,
            cov: 100,
            rbl: 0
        },
        mja: {
            gst: new dho(38, 610, 724, 369),
            low: new dho(100, 53, 525, 50),
            ahk: new dho(186, 153, 332, 94),
            xrg: 360,
            prx: 30,
            key: {
                _0: new dho(2, 0, 90, 94),
                _1: new dho(98, 0, 90, 94),
                _2: new dho(194, 0, 90, 94),
                _3: new dho(290, 0, 90, 94),
                _4: new dho(386, 0, 90, 94),
                _5: new dho(482, 0, 90, 94),
                _6: new dho(578, 0, 90, 94),
                _7: new dho(674, 0, 90, 94),
                _8: new dho(770, 0, 90, 94),
                _9: new dho(866, 0, 90, 94),
                _cm: new dho(962, 0, 28, 94),
                _dt: new dho(999, 0, 28, 94),
                _sp: new dho(1036, 0, 28, 94)
            }
        }
    }
}
bii.prototype = new mhn;

function rlp() {
    this.wnz = false;
    this.aui = true;
    this.xbh = true;
    this.canvas = {
        gst: new dho(0, 0, 960, 630)
    };
    this.grg = {
        gst: new dho(),
        xru: 0,
        lpx: 0
    };
    this.vev = {
        gst: new dho(160, 30, 800, 600),
        ylx: 0
    };
    this.mdh = {
        btq: new dho(460, 25, 500, 34),
        vhj: new dho(5, 2, 160, 30),
        sej: new dho(170, 2, 160, 30),
        wdd: new dho(335, 2, 160, 30),
        ufm: {
            fontSize: 16,
            textIndent: 32
        }
    };
    this.wzn = {
        vev: {
            gst: new dho(0, 0, 640, 460),
            vrr: new dho(6, 416, 628, 38),
            luy: new dho(6, 420, 628, 17),
            mjs: new dho(64, 442, 512, 7),
            zri: new dho(6, 364, 628, 90),
            xaq: new dho(140, 384, 360, 70),
            fontSize: 18,
            qim: 20,
            jvk: 30,
            slk: 6,
            nib: 12,
            dxd: 6,
            rqq: 3
        },
        uyw: {
            gst: new dho(0, 0, 960, 630),
            vrr: new dho(),
            luy: new dho(),
            mjs: new dho(280, 431, 400, 8),
            zri: new dho(180, 380, 600, 90),
            xaq: new dho(350, 400, 260, 70),
            fontSize: 18,
            qim: 24,
            jvk: 20,
            slk: 0,
            nib: 12,
            dxd: 7,
            rqq: 0
        }
    };
    this.xji = {
        gst: new dho(160, 0, 800, 30),
        fontSize: 16,
        eaa: 26,
        kvh: 15,
        iua: 160,
        nib: 2,
        dxd: 2,
        fuu: 2,
        gau: 0
    };
    this.rbo = {};
    this.zrz = {
        gst: new dho(0, 0, 960, 630),
        btq: new dho(0, 0, 160, 630),
        ufm: {
            ovc: 0,
            cov: 0,
            nib: 0,
            gef: 0,
            jzo: 0,
            qsg: 8,
            txi: 16,
            ylx: 4
        },
        xka: new dho(160, 50, 800, 40),
        nel: new dho(160, 130, 800, 40),
        sug: new dho(160, 170, 800, 40),
        fbb: new dho(160, 210, 800, 40),
        vdf: new dho(385, 305, 350, 100),
        hli: new dho(360, 510, 400, 40),
        fll: {
            voa: new dho(10, 455, 140, 100),
        },
        kro: {
            voa: new dho(10, 355, 140, 100),
            scr: new dho(10, 165, 140, 100)
        },
        pqq: 36,
        fontSize: 30,
        toj: 22,
        dxd: 3,
        nib: 5,
        ylx: 2,
        pve: 3,
        joe: 10
    };
    this.odc = {
        gst: new dho(160, 30, 800, 600),
        ylx: 0,
        txi: 0,
        myv: 50,
        cvg: 30,
        pee: 30,
        nyy: new dho(30, 180, 410, 60),
        bhw: new dho(460, 180, 50, 60),
        kog: new dho(512, 180, 210, 60),
        idd: new dho(724, 180, 50, 60),
        sey: new dho(30, 310, 410, 60),
        bhz: new dho(460, 310, 50, 60),
        oir: new dho(512, 310, 210, 60),
        vsc: new dho(724, 310, 50, 60),
        rfq: new dho(30, 440, 410, 60),
        iud: new dho(512, 440, 210, 60),
        xgk: new dho(40, 530, 720, 50),
        zfg: new dho(30, 120, 360, 60),
        rrd: new dho(460, 120, 50, 60),
        moj: new dho(512, 120, 210, 60),
        bjk: new dho(724, 120, 50, 60),
        bft: new dho(40, 200, 760, 70),
        wjy: new dho(30, 280, 410, 60),
        qtq: new dho(460, 280, 50, 60),
        yky: new dho(512, 280, 210, 60),
        wkr: new dho(724, 280, 50, 60),
        ltr: new dho(30, 360, 410, 60),
        ftp: new dho(460, 360, 50, 60),
        gnr: new dho(512, 360, 210, 60),
        qdt: new dho(724, 360, 50, 60),
        vdi: new dho(30, 440, 410, 60),
        zwb: new dho(460, 440, 50, 60),
        idp: new dho(512, 440, 210, 60),
        aqa: new dho(724, 440, 50, 60),
        vrr: new dho(40, 530, 720, 50),
        cag: {
            lmg: new dho(0, 0, 267, 90),
            pjw: new dho(267, 0, 266, 90),
            ovf: new dho(533, 0, 267, 90),
            ksj: new dho()
        },
        chv: {
            lmg: new dho(0, 0, 200, 90),
            qys: new dho(200, 0, 200, 90),
            pjw: new dho(400, 0, 200, 90),
            ovf: new dho(600, 0, 200, 90),
            ksj: new dho()
        },
        wnm: [new dho(132, 205, 200, 160), new dho(464, 205, 200, 160)],
        voo: [new dho(50, 205, 200, 160), new dho(300, 205, 200, 160), new dho(550, 205, 200, 160)],
        sdz: [new dho(132, 130, 200, 160), new dho(464, 130, 200, 160), new dho(132, 360, 200, 160), new dho(464, 360, 200, 160)],
        qcr: [new dho(50, 130, 200, 160), new dho(300, 130, 200, 160), new dho(550, 130, 200, 160), new dho(50, 360, 200, 160), new dho(300, 360, 200, 160), new dho(550, 360, 200, 160)],
        ejv: {
            txi: 3,
            nib: -10,
            dxd: -1,
            qsg: 6,
            fontSize: 36,
            ylx: 0
        },
        nin: {
            txi: 3,
            nib: 10,
            dxd: -1,
            qsg: 6,
            fontSize: 36,
            ylx: 0
        },
        dfk: {
            fontSize: 36,
            nib: 0,
            dxd: 0,
            qsg: 10,
            txi: 0,
            ylx: 0
        },
        tua: {
            fontSize: 26,
            slk: 5,
            txi: 26,
            ylx: 4,
            nlz: 40
        },
        ycg: {
            fip: 16,
            ovc: 40,
            tnv: 0,
            gef: 0,
            ylx: 2,
            slk: 3
        },
        xkl: {
            fip: 16,
            ovc: 40,
            tnv: 0,
            gef: 0,
            ylx: 2,
            slk: 3
        },
        gcn: {
            luy: new dho(50, 0, 360, 60),
            dns: new dho(0, 13, 30, 30),
            fontSize: 30,
            txi: 0,
            ylx: 2
        }
    };
    this.dso = {
        gst: new dho(660, 30, 310, 60),
        xka: new dho(60, 6, 240, 26),
        luy: new dho(60, 34, 240, 20),
        sqi: new dho(5, 11, 50, 38),
        fkk: new dho(8, 2, 34, 34),
        fip: 16,
        ovc: 12,
        eqh: 24
    };
    this.rvn = {
        gst: new dho(280, 150, 560, 330),
        fip: 26,
        fontSize: 20,
        jiw: new dho(515, 5, 40, 40),
        xka: new dho(40, 5, 480, 30),
        hli: new dho(20, 40, 520, 195),
        wec: new dho(20, 265, 520, 54),
        ufm: {
            fontSize: 20
        }
    };
    this.vny = {
        gst: [
            [new dho(162, 30, 130, 44)],
            [new dho(162, 30, 130, 44), new dho(828, 30, 130, 44)],
            [new dho(162, 30, 130, 23), new dho(828, 30, 130, 23), new dho(162, 51, 130, 23)],
            [new dho(162, 30, 130, 23), new dho(828, 30, 130, 23), new dho(162, 51, 130, 23), new dho(828, 51, 130, 23)]
        ],
        display: {
            ltt: new dho(0, 0, 130, 44),
            mcv: new dho(0, 0, 130, 44),
            bag: new dho(),
            xka: new dho(2, 3, 126, 19),
            ahk: new dho(8, 24, 114, 19),
            fip: 16,
            cov: 18,
            rbl: 0
        },
        nxq: {
            ltt: new dho(0, 0, 130, 23),
            mcv: new dho(0, 0, 130, 23),
            bag: new dho(2, 2, 19, 19),
            xka: new dho(),
            ahk: new dho(22, 3, 100, 19),
            fip: 14,
            cov: 18,
            rbl: 0
        },
        rca: {
            gst: new dho(222, 110, 676, 372),
            ltt: new dho(32, 10, 612, 351),
            mcv: new dho(0, 0, 676, 372),
            bag: new dho(301, 263, 74, 74),
            xka: new dho(120, 58, 436, 56),
            ahk: new dho(32, 140, 612, 96),
            fip: 68,
            cov: 100,
            rbl: 0
        },
        mja: {
            gst: new dho(198, 90, 724, 369),
            low: new dho(100, 53, 525, 50),
            ahk: new dho(186, 153, 332, 94),
            xrg: 340,
            prx: 30,
            key: {
                _0: new dho(2, 0, 90, 94),
                _1: new dho(98, 0, 90, 94),
                _2: new dho(194, 0, 90, 94),
                _3: new dho(290, 0, 90, 94),
                _4: new dho(386, 0, 90, 94),
                _5: new dho(482, 0, 90, 94),
                _6: new dho(578, 0, 90, 94),
                _7: new dho(674, 0, 90, 94),
                _8: new dho(770, 0, 90, 94),
                _9: new dho(866, 0, 90, 94),
                _cm: new dho(962, 0, 28, 94),
                _dt: new dho(999, 0, 28, 94),
                _sp: new dho(1036, 0, 28, 94)
            }
        }
    }
}
rlp.prototype = new mhn;

function tye() {
    this.wnz = false;
    this.aui = true;
    this.xbh = true;
    this.canvas = {
        gst: new dho(0, 0, 960, 630)
    };
    this.grg = {
        gst: new dho(),
        xru: 0,
        lpx: 0
    };
    this.vev = {
        gst: new dho(0, 30, 800, 600),
        ylx: 0
    };
    this.mdh = {
        btq: new dho(0, 25, 500, 34),
        vhj: new dho(5, 2, 160, 30),
        sej: new dho(170, 2, 160, 30),
        wdd: new dho(335, 2, 160, 30),
        ufm: {
            fontSize: 16,
            textIndent: 32
        }
    };
    this.wzn = {
        vev: {
            gst: new dho(0, 0, 640, 460),
            vrr: new dho(6, 416, 628, 38),
            luy: new dho(6, 420, 628, 17),
            mjs: new dho(64, 442, 512, 7),
            zri: new dho(6, 364, 628, 90),
            xaq: new dho(140, 384, 360, 70),
            fontSize: 18,
            qim: 20,
            jvk: 30,
            slk: 6,
            nib: 12,
            dxd: 6,
            rqq: 3
        },
        uyw: {
            gst: new dho(0, 0, 960, 630),
            vrr: new dho(),
            luy: new dho(),
            mjs: new dho(280, 431, 400, 8),
            zri: new dho(180, 380, 600, 90),
            xaq: new dho(350, 400, 260, 70),
            fontSize: 18,
            qim: 24,
            jvk: 20,
            slk: 0,
            nib: 12,
            dxd: 7,
            rqq: 0
        }
    };
    this.xji = {
        gst: new dho(0, 0, 800, 30),
        fontSize: 16,
        eaa: 26,
        kvh: 15,
        iua: 160,
        nib: 2,
        dxd: 2,
        fuu: 2,
        gau: 0
    };
    this.rbo = {};
    this.zrz = {
        gst: new dho(0, 0, 960, 630),
        btq: new dho(800, 0, 160, 630),
        ufm: {
            ovc: 0,
            cov: 0,
            nib: 0,
            gef: 0,
            jzo: 0,
            qsg: 8,
            txi: 16,
            ylx: 4
        },
        xka: new dho(0, 50, 800, 40),
        nel: new dho(0, 130, 800, 40),
        sug: new dho(0, 170, 800, 40),
        fbb: new dho(0, 210, 800, 40),
        vdf: new dho(225, 305, 350, 100),
        hli: new dho(200, 510, 400, 40),
        fll: {
            voa: new dho(810, 455, 140, 100),
        },
        kro: {
            voa: new dho(810, 355, 140, 100),
            scr: new dho(810, 165, 140, 100)
        },
        pqq: 36,
        fontSize: 30,
        toj: 22,
        dxd: 3,
        nib: 5,
        ylx: 2,
        pve: 3,
        joe: 10
    };
    this.odc = {
        gst: new dho(0, 30, 800, 600),
        ylx: 0,
        txi: 0,
        myv: 50,
        cvg: 30,
        pee: 30,
        nyy: new dho(30, 180, 410, 60),
        bhw: new dho(460, 180, 50, 60),
        kog: new dho(512, 180, 210, 60),
        idd: new dho(724, 180, 50, 60),
        sey: new dho(30, 310, 410, 60),
        bhz: new dho(460, 310, 50, 60),
        oir: new dho(512, 310, 210, 60),
        vsc: new dho(724, 310, 50, 60),
        rfq: new dho(30, 440, 410, 60),
        iud: new dho(512, 440, 210, 60),
        xgk: new dho(40, 530, 720, 50),
        zfg: new dho(30, 120, 360, 60),
        rrd: new dho(460, 120, 50, 60),
        moj: new dho(512, 120, 210, 60),
        bjk: new dho(724, 120, 50, 60),
        bft: new dho(40, 200, 760, 70),
        wjy: new dho(30, 280, 410, 60),
        qtq: new dho(460, 280, 50, 60),
        yky: new dho(512, 280, 210, 60),
        wkr: new dho(724, 280, 50, 60),
        ltr: new dho(30, 360, 410, 60),
        ftp: new dho(460, 360, 50, 60),
        gnr: new dho(512, 360, 210, 60),
        qdt: new dho(724, 360, 50, 60),
        vdi: new dho(30, 440, 410, 60),
        zwb: new dho(460, 440, 50, 60),
        idp: new dho(512, 440, 210, 60),
        aqa: new dho(724, 440, 50, 60),
        vrr: new dho(40, 530, 720, 50),
        cag: {
            lmg: new dho(0, 0, 267, 90),
            pjw: new dho(267, 0, 266, 90),
            ovf: new dho(533, 0, 267, 90),
            ksj: new dho()
        },
        chv: {
            lmg: new dho(0, 0, 200, 90),
            qys: new dho(200, 0, 200, 90),
            pjw: new dho(400, 0, 200, 90),
            ovf: new dho(600, 0, 200, 90),
            ksj: new dho()
        },
        wnm: [new dho(132, 205, 200, 160), new dho(464, 205, 200, 160)],
        voo: [new dho(50, 205, 200, 160), new dho(300, 205, 200, 160), new dho(550, 205, 200, 160)],
        sdz: [new dho(132, 130, 200, 160), new dho(464, 130, 200, 160), new dho(132, 360, 200, 160), new dho(464, 360, 200, 160)],
        qcr: [new dho(50, 130, 200, 160), new dho(300, 130, 200, 160), new dho(550, 130, 200, 160), new dho(50, 360, 200, 160), new dho(300, 360, 200, 160), new dho(550, 360, 200, 160)],
        ejv: {
            txi: 3,
            nib: -10,
            dxd: -1,
            qsg: 6,
            fontSize: 36,
            ylx: 0
        },
        nin: {
            txi: 3,
            nib: 10,
            dxd: -1,
            qsg: 6,
            fontSize: 36,
            ylx: 0
        },
        dfk: {
            fontSize: 36,
            nib: 0,
            dxd: 0,
            qsg: 10,
            txi: 0,
            ylx: 0
        },
        tua: {
            fontSize: 26,
            slk: 5,
            txi: 26,
            ylx: 4,
            nlz: 40
        },
        ycg: {
            fip: 16,
            ovc: 40,
            tnv: 0,
            gef: 0,
            ylx: 2,
            slk: 3
        },
        xkl: {
            fip: 16,
            ovc: 40,
            tnv: 0,
            gef: 0,
            ylx: 2,
            slk: 3
        },
        gcn: {
            luy: new dho(50, 0, 360, 60),
            dns: new dho(0, 13, 30, 30),
            fontSize: 30,
            txi: 0,
            ylx: 2
        }
    };
    this.dso = {
        gst: new dho(-10, 30, 310, 60),
        xka: new dho(10, 6, 240, 26),
        luy: new dho(10, 34, 240, 20),
        sqi: new dho(255, 11, 50, 38),
        fkk: new dho(8, 2, 34, 34),
        fip: 16,
        ovc: 12,
        eqh: 24
    };
    this.rvn = {
        gst: new dho(120, 150, 560, 330),
        fip: 26,
        fontSize: 20,
        jiw: new dho(515, 5, 40, 40),
        xka: new dho(40, 5, 480, 30),
        hli: new dho(20, 40, 520, 195),
        wec: new dho(20, 265, 520, 54),
        ufm: {
            fontSize: 20
        }
    };
    this.vny = {
        gst: [
            [new dho(2, 30, 130, 44)],
            [new dho(2, 30, 130, 44), new dho(668, 30, 130, 44)],
            [new dho(2, 30, 130, 23), new dho(668, 30, 130, 23), new dho(2, 51, 130, 23)],
            [new dho(2, 30, 130, 23), new dho(668, 30, 130, 23), new dho(2, 51, 130, 23), new dho(668, 51, 130, 23)]
        ],
        display: {
            ltt: new dho(0, 0, 130, 44),
            mcv: new dho(0, 0, 130, 44),
            bag: new dho(),
            xka: new dho(2, 3, 126, 19),
            ahk: new dho(8, 24, 114, 19),
            fip: 16,
            cov: 18,
            rbl: 0
        },
        nxq: {
            ltt: new dho(0, 0, 130, 23),
            mcv: new dho(0, 0, 130, 23),
            bag: new dho(2, 2, 19, 19),
            xka: new dho(),
            ahk: new dho(22, 3, 100, 19),
            fip: 14,
            cov: 18,
            rbl: 0
        },
        rca: {
            gst: new dho(62, 110, 676, 372),
            ltt: new dho(32, 10, 612, 351),
            mcv: new dho(0, 0, 676, 372),
            bag: new dho(301, 263, 74, 74),
            xka: new dho(120, 58, 436, 56),
            ahk: new dho(32, 140, 612, 96),
            fip: 68,
            cov: 100,
            rbl: 0
        },
        mja: {
            gst: new dho(38, 90, 724, 369),
            low: new dho(100, 53, 525, 50),
            ahk: new dho(186, 153, 332, 94),
            xrg: 340,
            prx: 30,
            key: {
                _0: new dho(2, 0, 90, 94),
                _1: new dho(98, 0, 90, 94),
                _2: new dho(194, 0, 90, 94),
                _3: new dho(290, 0, 90, 94),
                _4: new dho(386, 0, 90, 94),
                _5: new dho(482, 0, 90, 94),
                _6: new dho(578, 0, 90, 94),
                _7: new dho(674, 0, 90, 94),
                _8: new dho(770, 0, 90, 94),
                _9: new dho(866, 0, 90, 94),
                _cm: new dho(962, 0, 28, 94),
                _dt: new dho(999, 0, 28, 94),
                _sp: new dho(1036, 0, 28, 94)
            }
        }
    }
}
tye.prototype = new mhn;

function yyf() {
    this.oqk = true;
    this.vbf = true;
    this.lvi = {
        gst: new dho(0, 496, 800, 124),
        ezm: new dho(0, 0, 800, 124),
        kvp: new dho(),
        brk: {
            gst: new dho(187, 14, 470, 40),
            dxd: 10,
            fontSize: 18,
            txi: 3,
            kfj: 2,
            qsg: 6,
            ylx: 2
        },
        wdl: {
            ovc: 22,
            cov: 0,
            nib: 0,
            gef: 0,
            jzo: 0,
            txi: 10,
            qsg: 8,
            ylx: 2
        },
        tag: {
            ovc: 16,
            cov: 0,
            nib: 0,
            gef: 0,
            jzo: 0,
            txi: 8,
            qsg: 6,
            ylx: 2
        },
        pvn: {
            ovc: 16,
            cov: 16,
            nib: 0,
            txi: 8,
            qsg: 6,
            ylx: 2,
            gef: 24,
            jzo: -24
        },
        display: {
            tnv: -12,
            gef: 11,
            ovc: 26,
            fip: 15,
            ylx: 2,
            uku: 3,
            vls: 3,
            eyp: 3,
            usf: 3
        },
        boy: new dho(5, 10, 150, 48),
        itj: new dho(689, 10, 106, 48),
        hex: {
            ule: new dho(686, 68, 110, 53),
            yqe: new dho(492, 68, 80, 53),
            zcg: new dho(382, 68, 80, 53),
            scr: new dho(272, 68, 80, 53),
            ckm: new dho(25, 68, 110, 53),
            ill: new dho()
        },
        pmy: {
            ule: new dho(686, 68, 110, 53),
            ckm: new dho(532, 68, 80, 53),
            yqe: new dho(432, 68, 80, 53),
            zcg: new dho(332, 68, 80, 53),
            scr: new dho(232, 68, 80, 53),
            yxe: new dho(40, 68, 80, 53),
            ill: new dho()
        },
        vql: {
            ule: new dho(686, 68, 110, 53),
            ckm: new dho(492, 68, 80, 53),
            yqe: new dho(382, 68, 80, 53),
            zcg: new dho(272, 68, 80, 53),
            yxe: new dho(40, 68, 80, 53),
            ill: new dho()
        },
        aus: {
            ule: new dho(686, 68, 110, 53),
            yqe: new dho(492, 68, 80, 53),
            zcg: new dho(382, 68, 80, 53),
            scr: new dho(272, 68, 80, 53),
            ckm: new dho(25, 68, 110, 53),
            ill: new dho()
        },
        zvz: 15
    };
    this.lia = {
        gst: new dho(0, 20, 800, 600),
        btq: new dho(0, 540, 800, 60),
        scr: new dho(711, 544, 73, 53),
        jxf: new dho(11, 544, 73, 53),
        phb: new dho(316, 544, 73, 53),
        rld: new dho(411, 544, 73, 53),
        ufm: {
            ovc: 16,
            cov: 0,
            nib: 0,
            gef: 0,
            jzo: 0,
            qsg: 6,
            txi: 8,
            ylx: 2
        }
    };
    this.cwc = {
        gst: new dho(0, 20, 800, 600),
        btq: new dho(0, 485, 800, 115),
        brk: {
            gst: new dho(187, 490, 470, 40),
            fontSize: 18,
            dxd: 14,
            txi: 3,
            kfj: 2,
            qsg: 6,
            ylx: 2
        },
        ufm: {
            ovc: 18,
            cov: 0,
            nib: 0,
            gef: 0,
            jzo: 0,
            qsg: 8,
            txi: 10,
            ylx: 2
        },
        display: {
            tnv: -12,
            gef: 11,
            ovc: 26,
            fip: 15,
            ylx: 2,
            uku: 3,
            vls: 3,
            eyp: 3,
            usf: 3
        },
        gex: new dho(689, 486, 106, 48),
        ady: new dho(5, 486, 150, 48)
    };
    this.eve = {
        gst: new dho(710, 35, 90, 450),
        xka: new dho(5, 5, 80, 15),
        fym: new dho(50, 25, 35, 410),
        fontSize: 15,
        tfg: 20,
        ylx: 2,
        txi: 5,
        kae: 4,
        fzg: 10,
        epy: 5
    };
    this.hqs = {
        fontSize: 18,
        xpx: 128,
        zqu: 176,
        cnl: 0,
        kjb: 20,
        jct: true
    };
    this.qfe = new dho(20, 290, 128, 205);
    this.kth = new dho(176, 290, 128, 205);
    this.mcd = new dho(333, 290, 128, 205);
    this.pqa = new dho(490, 290, 128, 205);
    this.ewr = new dho(646, 290, 128, 205);
    this.tvl = {
        gst: new dho(363, 72, 408, 155),
        fontSize: 50,
        nib: 0,
        dxd: 9,
        slk: 0,
        rbl: 2
    };
    this.acc = {
        gst: new dho(355, 30, 424, 236),
        fontSize: 20,
        slk: 6
    }
}
yyf.prototype = new fhp;

function uwh() {
    this.szz = true
}
uwh.prototype = new yyf;

function nmh() {
    this.oqk = true;
    this.vbf = true;
    this.lvi = {
        gst: new dho(0, 1026, 800, 139),
        ezm: new dho(0, 0, 800, 139),
        kvp: new dho(),
        brk: {
            gst: new dho(187, 14, 470, 40),
            dxd: 10,
            fontSize: 18,
            txi: 3,
            kfj: 2,
            qsg: 6,
            ylx: 2
        },
        wdl: {
            ovc: 28,
            cov: 0,
            nib: 0,
            gef: 0,
            jzo: 0,
            txi: 12,
            qsg: 10,
            ylx: 2
        },
        tag: {
            ovc: 21,
            cov: 0,
            nib: 0,
            gef: 0,
            jzo: 0,
            txi: 10,
            qsg: 8,
            ylx: 2
        },
        pvn: {
            ovc: 21,
            cov: 21,
            nib: 0,
            txi: 8,
            qsg: 6,
            ylx: 2,
            gef: 30,
            jzo: -32
        },
        display: {
            tnv: -12,
            gef: 11,
            ovc: 26,
            fip: 15,
            ylx: 2,
            uku: 3,
            vls: 3,
            eyp: 3,
            usf: 3
        },
        boy: new dho(5, 10, 150, 48),
        itj: new dho(689, 10, 106, 48),
        hex: {
            ule: new dho(675, 68, 120, 68),
            yqe: new dho(486, 68, 100, 68),
            zcg: new dho(371, 68, 100, 68),
            scr: new dho(256, 68, 100, 68),
            ckm: new dho(20, 68, 120, 68),
            ill: new dho()
        },
        pmy: {
            ule: new dho(675, 68, 110, 68),
            ckm: new dho(536, 68, 100, 68),
            yqe: new dho(426, 68, 100, 68),
            zcg: new dho(316, 68, 100, 68),
            scr: new dho(206, 68, 100, 68),
            yxe: new dho(30, 68, 100, 68),
            ill: new dho()
        },
        vql: {
            ule: new dho(675, 68, 120, 68),
            ckm: new dho(486, 68, 100, 68),
            yqe: new dho(371, 68, 100, 68),
            zcg: new dho(256, 68, 100, 68),
            yxe: new dho(30, 68, 100, 68),
            ill: new dho()
        },
        aus: {
            ule: new dho(675, 68, 120, 68),
            yqe: new dho(486, 68, 100, 68),
            zcg: new dho(371, 68, 100, 68),
            scr: new dho(256, 68, 100, 68),
            ckm: new dho(20, 68, 120, 68),
            ill: new dho()
        },
        zvz: 15
    };
    this.lia = {
        gst: new dho(0, 550, 800, 615),
        btq: new dho(0, 540, 800, 75),
        scr: new dho(695, 544, 90, 68),
        jxf: new dho(11, 544, 90, 68),
        phb: new dho(295, 544, 90, 68),
        rld: new dho(415, 544, 90, 68),
        ufm: {
            ovc: 21,
            cov: 0,
            nib: 0,
            gef: 0,
            jzo: 0,
            qsg: 8,
            txi: 10,
            ylx: 2
        }
    };
    this.cwc = {
        gst: new dho(0, 550, 800, 615),
        btq: new dho(0, 485, 800, 130),
        brk: {
            gst: new dho(187, 490, 470, 40),
            fontSize: 18,
            dxd: 14,
            txi: 3,
            kfj: 2,
            qsg: 6,
            ylx: 2
        },
        ufm: {
            ovc: 23,
            cov: 0,
            nib: 0,
            gef: 0,
            jzo: 0,
            qsg: 10,
            txi: 12,
            ylx: 2
        },
        display: {
            tnv: -12,
            gef: 11,
            ovc: 26,
            fip: 15,
            ylx: 2,
            uku: 3,
            vls: 3,
            eyp: 3,
            usf: 3
        },
        gex: new dho(689, 486, 106, 48),
        ady: new dho(5, 486, 150, 48)
    };
    this.eve = {
        gst: new dho(710, 565, 90, 450),
        xka: new dho(5, 5, 80, 15),
        fym: new dho(50, 25, 35, 410),
        fontSize: 15,
        tfg: 20,
        ylx: 2,
        txi: 5,
        kae: 4,
        fzg: 10,
        epy: 5
    };
    this.hqs = {
        fontSize: 18,
        xpx: 128,
        zqu: 176,
        cnl: 0,
        kjb: 20,
        jct: true
    };
    this.qfe = new dho(20, 820, 128, 205);
    this.kth = new dho(176, 820, 128, 205);
    this.mcd = new dho(333, 820, 128, 205);
    this.pqa = new dho(490, 820, 128, 205);
    this.ewr = new dho(646, 820, 128, 205);
    this.tvl = {
        gst: new dho(363, 602, 408, 155),
        fontSize: 50,
        nib: 0,
        dxd: 9,
        slk: 0,
        rbl: 2
    };
    this.acc = {
        gst: new dho(355, 560, 424, 236),
        fontSize: 20,
        slk: 6
    };
    this.top = {
        gst: new dho(0, 20, 800, 520)
    }
}
nmh.prototype = new bii;

function dyt() {
    this.oqk = false;
    this.vbf = true;
    this.lvi = {
        gst: new dho(0, 0, 960, 630),
        ezm: new dho(160, 506, 800, 124),
        kvp: new dho(0, 0, 160, 630),
        brk: {
            gst: new dho(385, 525, 390, 70),
            dxd: 14,
            fontSize: 24,
            txi: 3,
            kfj: 2,
            qsg: 6,
            ylx: 2
        },
        wdl: {
            ovc: 0,
            cov: 0,
            nib: 0,
            gef: 0,
            jzo: 0,
            txi: 24,
            qsg: 8,
            ylx: 6
        },
        tag: {
            ovc: 0,
            cov: 0,
            nib: 0,
            gef: 0,
            jzo: 0,
            txi: 16,
            qsg: 8,
            ylx: 4
        },
        pvn: {
            ovc: 0,
            cov: 24,
            nib: 0,
            txi: 24,
            qsg: 8,
            ylx: 6,
            gef: 0,
            jzo: -130
        },
        display: {
            tnv: -20,
            gef: 16,
            ovc: 32,
            fip: 18,
            ylx: 3,
            uku: 3,
            vls: 3,
            eyp: 3,
            usf: 3
        },
        boy: new dho(165, 525, 180, 70),
        itj: new dho(815, 525, 140, 70),
        hex: {
            ule: new dho(10, 215, 140, 200),
            yqe: new dho(),
            zcg: new dho(),
            scr: new dho(10, 455, 140, 100),
            ckm: new dho(),
            ill: new dho(10, 75, 140, 100)
        },
        pmy: {
            ule: new dho(10, 215, 140, 200),
            ckm: new dho(),
            yqe: new dho(),
            zcg: new dho(),
            scr: new dho(10, 455, 140, 100),
            yxe: new dho(),
            ill: new dho(10, 75, 140, 100)
        },
        vql: {
            ule: new dho(10, 215, 140, 200),
            ckm: new dho(),
            yqe: new dho(),
            zcg: new dho(),
            yxe: new dho(),
            ill: new dho(10, 75, 140, 100)
        },
        aus: {
            ule: new dho(10, 215, 140, 200),
            yqe: new dho(),
            zcg: new dho(),
            scr: new dho(10, 455, 140, 100),
            ckm: new dho(),
            ill: new dho(10, 75, 140, 100)
        },
        zvz: 15
    };
    this.lia = {
        gst: new dho(0, 0, 960, 630),
        btq: new dho(0, 0, 160, 630),
        scr: new dho(10, 455, 140, 100),
        jxf: new dho(),
        phb: new dho(10, 75, 140, 100),
        rld: new dho(10, 265, 140, 100),
        ufm: {
            ovc: 0,
            cov: 0,
            nib: 0,
            gef: 0,
            jzo: 0,
            qsg: 16,
            txi: 16,
            ylx: 4
        }
    };
    this.cwc = {
        gst: new dho(0, 0, 960, 630),
        btq: new dho(0, 0, 160, 630),
        brk: {
            gst: new dho(390, 525, 390, 70),
            fontSize: 20,
            dxd: 14,
            txi: 3,
            kfj: 2,
            qsg: 6,
            ylx: 2
        },
        ufm: {
            ovc: 24,
            cov: 0,
            nib: 0,
            gef: 0,
            jzo: 0,
            qsg: 8,
            txi: 16,
            ylx: 4
        },
        display: {
            tnv: -20,
            gef: 16,
            ovc: 32,
            fip: 18,
            ylx: 3,
            uku: 3,
            vls: 3,
            eyp: 3,
            usf: 3
        },
        ady: new dho(165, 525, 180, 70),
        gex: new dho(815, 525, 140, 70),
    };
    this.hqs = {
        fontSize: 18,
        xpx: 128,
        zqu: 176,
        cnl: 0,
        kjb: 20,
        jct: true
    };
    this.qfe = new dho(180, 300, 128, 205);
    this.kth = new dho(336, 300, 128, 205);
    this.mcd = new dho(493, 300, 128, 205);
    this.pqa = new dho(650, 300, 128, 205);
    this.ewr = new dho(806, 300, 128, 205);
    this.tvl = {
        gst: new dho(523, 82, 408, 155),
        fontSize: 50,
        nib: 0,
        dxd: 9,
        slk: 0,
        rbl: 2
    };
    this.acc = {
        gst: new dho(515, 40, 424, 236),
        fontSize: 20,
        slk: 6
    };
    this.odc.nyy = new dho();
    this.odc.kog = new dho();
    this.odc.sey = new dho();
    this.odc.bhz = new dho();
    this.odc.oir = new dho();
    this.odc.vsc = new dho();
    this.odc.rfq = new dho(30, 180, 410, 60);
    this.odc.iud = new dho(512, 180, 210, 60)
}
dyt.prototype = new rlp;

function agz() {
    this.oqk = false;
    this.vbf = true;
    this.lvi = {
        gst: new dho(0, 0, 960, 630),
        ezm: new dho(0, 506, 800, 124),
        kvp: new dho(800, 0, 160, 630),
        brk: {
            gst: new dho(225, 525, 390, 70),
            dxd: 14,
            fontSize: 24,
            txi: 3,
            kfj: 2,
            qsg: 6,
            ylx: 2
        },
        wdl: {
            ovc: 0,
            cov: 0,
            nib: 0,
            gef: 0,
            jzo: 0,
            txi: 24,
            qsg: 8,
            ylx: 6
        },
        tag: {
            ovc: 0,
            cov: 0,
            nib: 0,
            gef: 0,
            jzo: 0,
            txi: 16,
            qsg: 8,
            ylx: 4
        },
        pvn: {
            ovc: 0,
            cov: 24,
            nib: 0,
            txi: 24,
            qsg: 8,
            ylx: 6,
            gef: 0,
            jzo: -130
        },
        display: {
            tnv: -20,
            gef: 16,
            ovc: 32,
            fip: 18,
            ylx: 3,
            uku: 3,
            vls: 3,
            eyp: 3,
            usf: 3
        },
        boy: new dho(5, 525, 180, 70),
        itj: new dho(655, 525, 140, 70),
        hex: {
            ule: new dho(810, 215, 140, 200),
            yqe: new dho(),
            zcg: new dho(),
            scr: new dho(810, 455, 140, 100),
            ckm: new dho(),
            ill: new dho(810, 75, 140, 100)
        },
        pmy: {
            ule: new dho(810, 215, 140, 200),
            ckm: new dho(),
            yqe: new dho(),
            zcg: new dho(),
            scr: new dho(810, 455, 140, 100),
            yxe: new dho(),
            ill: new dho(810, 75, 140, 100)
        },
        vql: {
            ule: new dho(810, 215, 140, 200),
            ckm: new dho(),
            yqe: new dho(),
            zcg: new dho(),
            yxe: new dho(),
            ill: new dho(810, 75, 140, 100)
        },
        aus: {
            ule: new dho(810, 215, 140, 200),
            yqe: new dho(),
            zcg: new dho(),
            scr: new dho(810, 455, 140, 100),
            ckm: new dho(),
            ill: new dho(810, 75, 140, 100)
        },
        zvz: 15
    };
    this.lia = {
        gst: new dho(0, 0, 960, 630),
        btq: new dho(800, 0, 160, 630),
        scr: new dho(810, 455, 140, 100),
        jxf: new dho(),
        phb: new dho(810, 75, 140, 100),
        rld: new dho(810, 265, 140, 100),
        ufm: {
            ovc: 0,
            cov: 0,
            nib: 0,
            gef: 0,
            jzo: 0,
            qsg: 16,
            txi: 16,
            ylx: 4
        }
    };
    this.cwc = {
        gst: new dho(0, 0, 960, 630),
        btq: new dho(800, 0, 160, 630),
        brk: {
            gst: new dho(230, 525, 390, 70),
            fontSize: 20,
            dxd: 14,
            txi: 3,
            kfj: 2,
            qsg: 6,
            ylx: 2
        },
        ufm: {
            ovc: 24,
            cov: 0,
            nib: 0,
            gef: 0,
            jzo: 0,
            qsg: 8,
            txi: 16,
            ylx: 4
        },
        display: {
            tnv: -20,
            gef: 16,
            ovc: 32,
            fip: 18,
            ylx: 3,
            uku: 3,
            vls: 3,
            eyp: 3,
            usf: 3
        },
        ady: new dho(5, 525, 180, 70),
        gex: new dho(655, 525, 140, 70),
    };
    this.hqs = {
        fontSize: 18,
        xpx: 128,
        zqu: 176,
        cnl: 0,
        kjb: 20,
        jct: true
    };
    this.qfe = new dho(20, 300, 128, 205);
    this.kth = new dho(176, 300, 128, 205);
    this.mcd = new dho(333, 300, 128, 205);
    this.pqa = new dho(490, 300, 128, 205);
    this.ewr = new dho(646, 300, 128, 205);
    this.tvl = {
        gst: new dho(363, 82, 408, 155),
        fontSize: 50,
        nib: 0,
        dxd: 9,
        slk: 0,
        rbl: 2
    };
    this.acc = {
        gst: new dho(355, 40, 424, 236),
        fontSize: 20,
        slk: 6
    };
    this.odc.nyy = new dho();
    this.odc.kog = new dho();
    this.odc.sey = new dho();
    this.odc.bhz = new dho();
    this.odc.oir = new dho();
    this.odc.vsc = new dho();
    this.odc.rfq = new dho(30, 180, 410, 60);
    this.odc.iud = new dho(512, 180, 210, 60)
}
agz.prototype = new tye;

function drp() {
    this.hqs.xpx = 125;
    this.hqs.zqu = 175;
    this.hqs.jct = false;
    this.qfe = new dho(20, 295, 128, 205);
    this.kth = new dho(176, 295, 128, 205);
    this.mcd = new dho(333, 295, 128, 205);
    this.pqa = new dho(490, 295, 128, 205);
    this.ewr = new dho(646, 295, 128, 205);
    this.acc.gst = new dho(352, 30, 420, 250);
    this.acc.fontSize = 20;
    this.acc.slk = 6;
    this.acc.ylx = 3;
    this.tvl.gst = new dho(358, 72, 408, 155);
    this.tvl.fontSize = 40;
    this.tvl.fip = 40;
    this.tvl.dxd = 40;
    this.tvl.tnv = -40;
    this.qiq = {
        gst: new dho(20, 140, 315, 80),
        fontSize: 14,
        vic: [new dho(0, 6, 52, 56), new dho(60, 6, 52, 56), new dho(120, 6, 52, 56), new dho(180, 6, 52, 56)]
    };
    this.mkq = {
        gst: new dho(31, 30, 218, 112)
    };
    this.tvd = {
        gst: new dho(20, 230, 230, 22),
        fontSize: 18
    };
    this.cwc.hqs = {
        gst: new dho(19, 266, 430, 176),
        xpx: 125,
        zqu: 175,
        nib: 30,
    };
    this.cwc.tvl = {
        gst: new dho(358, 90, 408, 155),
        fontSize: 40,
        fip: 40,
        nib: 0,
        dxd: 40,
        tnv: -40,
        slk: 0,
        rbl: 2
    };
    this.cwc.kaq = {
        gst: new dho(45, 145, 95, 55),
        xpx: 125,
        zqu: 175,
        mrl: 19,
        uww: 54
    };
    this.cwc.tag = {
        ovc: 16,
        cov: 0,
        nib: 0,
        gef: 0,
        jzo: 0,
        txi: 8,
        qsg: 6,
        ylx: 2
    };
    this.cwc.qiq = {
        gst: new dho(358, 17, 408, 75),
        fontSize: 14,
        vic: [new dho(25, 0, 52, 56), new dho(127, 0, 52, 56), new dho(229, 0, 52, 56), new dho(331, 0, 52, 56)]
    };
    this.cwc.mtk = new dho(686, 544, 110, 53);
    this.cwc.cik = new dho(382, 544, 80, 53);
    this.cwc.xeg = new dho(272, 544, 80, 53);
    this.cwc.xmw = new dho(492, 544, 80, 53);
    this.cwc.sld = new dho(610, 290, 160, 125);
    this.cwc.fontSize = 16;
    this.lia.win = {
        gst: new dho(0, 0, 800, 600),
        fontSize: 16,
        fip: 40,
        pee: 12,
        lineWidth: 1,
        xka: new dho(),
        vrr: new dho(0, 530, 800, 20),
        gud: [new dho(111, 25, 180, 20), new dho(111, 95, 180, 20), new dho(111, 165, 180, 20), new dho(111, 235, 180, 20), new dho(111, 305, 180, 20), new dho(111, 375, 180, 20), new dho(111, 445, 180, 20), new dho(506, 25, 180, 20), new dho(506, 95, 180, 20), new dho(506, 165, 180, 20), new dho(506, 235, 180, 20), new dho(506, 305, 180, 20), new dho(506, 375, 180, 20), new dho(506, 445, 180, 20)],
        luy: [new dho(111, 46, 278, 34), new dho(111, 116, 278, 34), new dho(111, 186, 278, 34), new dho(111, 256, 278, 34), new dho(111, 326, 278, 34), new dho(111, 396, 278, 34), new dho(111, 466, 278, 34), new dho(506, 46, 278, 34), new dho(506, 116, 278, 34), new dho(506, 186, 278, 34), new dho(506, 256, 278, 34), new dho(506, 326, 278, 34), new dho(506, 396, 278, 34), new dho(506, 466, 278, 34)]
    }
}
drp.prototype = new yyf;

function vnn() {
    this.szz = true
}
vnn.prototype = new drp;

function yth() {
    this.hqs.xpx = 125;
    this.hqs.zqu = 175;
    this.hqs.jct = false;
    this.qfe = new dho(20, 825, 128, 205);
    this.kth = new dho(176, 825, 128, 205);
    this.mcd = new dho(333, 825, 128, 205);
    this.pqa = new dho(490, 825, 128, 205);
    this.ewr = new dho(646, 825, 128, 205);
    this.acc.gst = new dho(352, 550, 420, 250);
    this.acc.fontSize = 20;
    this.acc.slk = 6;
    this.acc.ylx = 3;
    this.tvl.gst = new dho(358, 602, 408, 155);
    this.tvl.fontSize = 40;
    this.tvl.fip = 40;
    this.tvl.dxd = 40;
    this.tvl.tnv = -40;
    this.qiq = {
        gst: new dho(20, 670, 315, 80),
        fontSize: 14,
        vic: [new dho(0, 6, 52, 56), new dho(60, 6, 52, 56), new dho(120, 6, 52, 56), new dho(180, 6, 52, 56)]
    };
    this.mkq = {
        gst: new dho(31, 560, 218, 112)
    };
    this.tvd = {
        gst: new dho(20, 760, 230, 22),
        fontSize: 18
    };
    this.cwc.hqs = {
        gst: new dho(19, 266, 430, 176),
        xpx: 125,
        zqu: 175,
        nib: 30,
    };
    this.cwc.tvl = {
        gst: new dho(358, 90, 408, 155),
        fontSize: 40,
        fip: 40,
        nib: 0,
        dxd: 40,
        tnv: -40,
        slk: 0,
        rbl: 2
    };
    this.cwc.kaq = {
        gst: new dho(45, 145, 95, 55),
        xpx: 125,
        zqu: 175,
        mrl: 19,
        uww: 54
    };
    this.cwc.tag = {
        ovc: 16,
        cov: 0,
        nib: 0,
        gef: 0,
        jzo: 0,
        txi: 8,
        qsg: 6,
        ylx: 2
    };
    this.cwc.qiq = {
        gst: new dho(358, 17, 408, 75),
        fontSize: 14,
        vic: [new dho(25, 0, 52, 56), new dho(127, 0, 52, 56), new dho(229, 0, 52, 56), new dho(331, 0, 52, 56)]
    };
    this.cwc.mtk = new dho(675, 544, 120, 68);
    this.cwc.cik = new dho(371, 544, 100, 68);
    this.cwc.xeg = new dho(256, 544, 100, 68);
    this.cwc.xmw = new dho(486, 544, 100, 68);
    this.cwc.sld = new dho(610, 290, 160, 125);
    this.cwc.fontSize = 16;
    this.lia.win = {
        gst: new dho(0, 0, 800, 615),
        fontSize: 16,
        fip: 40,
        pee: 12,
        lineWidth: 1,
        xka: new dho(),
        vrr: new dho(0, 530, 800, 20),
        gud: [new dho(111, 25, 180, 20), new dho(111, 95, 180, 20), new dho(111, 165, 180, 20), new dho(111, 235, 180, 20), new dho(111, 305, 180, 20), new dho(111, 375, 180, 20), new dho(111, 445, 180, 20), new dho(506, 25, 180, 20), new dho(506, 95, 180, 20), new dho(506, 165, 180, 20), new dho(506, 235, 180, 20), new dho(506, 305, 180, 20), new dho(506, 375, 180, 20), new dho(506, 445, 180, 20)],
        luy: [new dho(111, 46, 278, 34), new dho(111, 116, 278, 34), new dho(111, 186, 278, 34), new dho(111, 256, 278, 34), new dho(111, 326, 278, 34), new dho(111, 396, 278, 34), new dho(111, 466, 278, 34), new dho(506, 46, 278, 34), new dho(506, 116, 278, 34), new dho(506, 186, 278, 34), new dho(506, 256, 278, 34), new dho(506, 326, 278, 34), new dho(506, 396, 278, 34), new dho(506, 466, 278, 34)]
    };
    this.top.win = {
        gst: new dho(0, 0, 800, 520),
        fontSize: 16,
        fip: 40,
        pee: 12,
        lineWidth: 1,
        xka: new dho(),
        vrr: new dho(0, 506, 800, 14),
        gud: [new dho(111, 25, 180, 20), new dho(111, 95, 180, 20), new dho(111, 165, 180, 20), new dho(111, 235, 180, 20), new dho(111, 305, 180, 20), new dho(111, 375, 180, 20), new dho(111, 445, 180, 20), new dho(506, 25, 180, 20), new dho(506, 95, 180, 20), new dho(506, 165, 180, 20), new dho(506, 235, 180, 20), new dho(506, 305, 180, 20), new dho(506, 375, 180, 20), new dho(506, 445, 180, 20)],
        luy: [new dho(111, 46, 278, 34), new dho(111, 116, 278, 34), new dho(111, 186, 278, 34), new dho(111, 256, 278, 34), new dho(111, 326, 278, 34), new dho(111, 396, 278, 34), new dho(111, 466, 278, 34), new dho(506, 46, 278, 34), new dho(506, 116, 278, 34), new dho(506, 186, 278, 34), new dho(506, 256, 278, 34), new dho(506, 326, 278, 34), new dho(506, 396, 278, 34), new dho(506, 466, 278, 34)]
    }
}
yth.prototype = new nmh;

function gzg() {
    this.hqs.xpx = 125;
    this.hqs.zqu = 175;
    this.hqs.jct = false;
    this.qfe = new dho(180, 305, 128, 205);
    this.kth = new dho(336, 305, 128, 205);
    this.mcd = new dho(493, 305, 128, 205);
    this.pqa = new dho(650, 305, 128, 205);
    this.ewr = new dho(806, 305, 128, 205);
    this.acc.gst = new dho(512, 40, 420, 250);
    this.acc.fontSize = 20;
    this.acc.slk = 6;
    this.acc.ylx = 3;
    this.tvl.gst = new dho(518, 82, 408, 155);
    this.tvl.fontSize = 40;
    this.tvl.fip = 40;
    this.tvl.dxd = 40;
    this.tvl.tnv = -40;
    this.qiq = {
        gst: new dho(180, 150, 315, 80),
        fontSize: 14,
        vic: [new dho(0, 6, 52, 56), new dho(60, 6, 52, 56), new dho(120, 6, 52, 56), new dho(180, 6, 52, 56)]
    };
    this.mkq = {
        gst: new dho(191, 40, 218, 112)
    };
    this.tvd = {
        gst: new dho(180, 240, 230, 22),
        fontSize: 18
    };
    this.cwc.hqs = {
        gst: new dho(179, 296, 430, 176),
        xpx: 125,
        zqu: 175,
        nib: 30,
    };
    this.cwc.tvl = {
        gst: new dho(518, 120, 408, 155),
        fontSize: 40,
        fip: 40,
        nib: 0,
        dxd: 40,
        tnv: -40,
        slk: 0,
        rbl: 2
    };
    this.cwc.kaq = {
        gst: new dho(205, 175, 95, 55),
        xpx: 125,
        zqu: 175,
        mrl: 19,
        uww: 54
    };
    this.cwc.tag = {
        ovc: 26,
        cov: 0,
        nib: 0,
        gef: 0,
        jzo: 0,
        txi: 16,
        qsg: 8,
        ylx: 4
    };
    this.cwc.qiq = {
        gst: new dho(518, 47, 408, 75),
        fontSize: 14,
        vic: [new dho(25, 0, 52, 56), new dho(127, 0, 52, 56), new dho(229, 0, 52, 56), new dho(331, 0, 52, 56)]
    };
    this.cwc.mtk = new dho(10, 455, 140, 100);
    this.cwc.cik = new dho(10, 65, 140, 100);
    this.cwc.xeg = new dho(10, 325, 140, 100);
    this.cwc.xmw = new dho(10, 195, 140, 100);
    this.cwc.sld = new dho(770, 320, 160, 125);
    this.cwc.fontSize = 16;
    this.lia.win = {
        gst: new dho(160, 30, 800, 600),
        fontSize: 16,
        fip: 40,
        pee: 20,
        lineWidth: 1,
        xka: new dho(),
        vrr: new dho(0, 530, 800, 40),
        gud: [new dho(111, 25, 180, 20), new dho(111, 95, 180, 20), new dho(111, 165, 180, 20), new dho(111, 235, 180, 20), new dho(111, 305, 180, 20), new dho(111, 375, 180, 20), new dho(111, 445, 180, 20), new dho(506, 25, 180, 20), new dho(506, 95, 180, 20), new dho(506, 165, 180, 20), new dho(506, 235, 180, 20), new dho(506, 305, 180, 20), new dho(506, 375, 180, 20), new dho(506, 445, 180, 20)],
        luy: [new dho(111, 46, 278, 34), new dho(111, 116, 278, 34), new dho(111, 186, 278, 34), new dho(111, 256, 278, 34), new dho(111, 326, 278, 34), new dho(111, 396, 278, 34), new dho(111, 466, 278, 34), new dho(506, 46, 278, 34), new dho(506, 116, 278, 34), new dho(506, 186, 278, 34), new dho(506, 256, 278, 34), new dho(506, 326, 278, 34), new dho(506, 396, 278, 34), new dho(506, 466, 278, 34)]
    }
}
gzg.prototype = new dyt;

function tkp() {
    this.hqs.xpx = 125;
    this.hqs.zqu = 175;
    this.hqs.jct = false;
    this.qfe = new dho(20, 305, 128, 205);
    this.kth = new dho(176, 305, 128, 205);
    this.mcd = new dho(333, 305, 128, 205);
    this.pqa = new dho(490, 305, 128, 205);
    this.ewr = new dho(646, 305, 128, 205);
    this.acc.gst = new dho(352, 40, 420, 250);
    this.acc.fontSize = 20;
    this.acc.slk = 6;
    this.acc.ylx = 3;
    this.tvl.gst = new dho(358, 82, 408, 155);
    this.tvl.fontSize = 40;
    this.tvl.fip = 40;
    this.tvl.dxd = 40;
    this.tvl.tnv = -40;
    this.qiq = {
        gst: new dho(20, 150, 315, 80),
        fontSize: 14,
        vic: [new dho(0, 6, 52, 56), new dho(60, 6, 52, 56), new dho(120, 6, 52, 56), new dho(180, 6, 52, 56)]
    };
    this.mkq = {
        gst: new dho(31, 40, 218, 112)
    };
    this.tvd = {
        gst: new dho(20, 240, 230, 22),
        fontSize: 18
    };
    this.cwc.hqs = {
        gst: new dho(19, 296, 430, 176),
        xpx: 125,
        zqu: 175,
        nib: 30,
    };
    this.cwc.tvl = {
        gst: new dho(358, 120, 408, 155),
        fontSize: 40,
        fip: 40,
        nib: 0,
        dxd: 40,
        tnv: -40,
        slk: 0,
        rbl: 2
    };
    this.cwc.kaq = {
        gst: new dho(45, 175, 95, 55),
        xpx: 125,
        zqu: 175,
        mrl: 19,
        uww: 54
    };
    this.cwc.tag = {
        ovc: 26,
        cov: 0,
        nib: 0,
        gef: 0,
        jzo: 0,
        txi: 16,
        qsg: 8,
        ylx: 4
    };
    this.cwc.qiq = {
        gst: new dho(358, 47, 408, 75),
        fontSize: 14,
        vic: [new dho(25, 0, 52, 56), new dho(127, 0, 52, 56), new dho(229, 0, 52, 56), new dho(331, 0, 52, 56)]
    };
    this.cwc.mtk = new dho(810, 455, 140, 100);
    this.cwc.cik = new dho(810, 65, 140, 100);
    this.cwc.xeg = new dho(810, 325, 140, 100);
    this.cwc.xmw = new dho(810, 195, 140, 100);
    this.cwc.sld = new dho(610, 320, 160, 125);
    this.cwc.fontSize = 16;
    this.lia.win = {
        gst: new dho(0, 30, 800, 600),
        fontSize: 16,
        fip: 40,
        pee: 20,
        lineWidth: 1,
        xka: new dho(),
        vrr: new dho(0, 530, 800, 40),
        gud: [new dho(111, 25, 180, 20), new dho(111, 95, 180, 20), new dho(111, 165, 180, 20), new dho(111, 235, 180, 20), new dho(111, 305, 180, 20), new dho(111, 375, 180, 20), new dho(111, 445, 180, 20), new dho(506, 25, 180, 20), new dho(506, 95, 180, 20), new dho(506, 165, 180, 20), new dho(506, 235, 180, 20), new dho(506, 305, 180, 20), new dho(506, 375, 180, 20), new dho(506, 445, 180, 20)],
        luy: [new dho(111, 46, 278, 34), new dho(111, 116, 278, 34), new dho(111, 186, 278, 34), new dho(111, 256, 278, 34), new dho(111, 326, 278, 34), new dho(111, 396, 278, 34), new dho(111, 466, 278, 34), new dho(506, 46, 278, 34), new dho(506, 116, 278, 34), new dho(506, 186, 278, 34), new dho(506, 256, 278, 34), new dho(506, 326, 278, 34), new dho(506, 396, 278, 34), new dho(506, 466, 278, 34)]
    }
}
tkp.prototype = new agz;
var kit = {
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
    vth: {
        erw: 0,
        tox: 1,
        uym: 2,
        rha: 3,
        unk: 4,
        pvi: 5,
        soc: 10,
        ygp: 11,
        qln: 12,
        ded: 13,
        oiy: 14,
        kxs: 15,
        svo: 16
    },
    os: {
        ioz: 0,
        utx: 1,
        txt: 2,
        wep: 3,
        nht: 4
    },
    ekl: {
        auv: 1,
        vso: 3,
        nzg: 4,
        rhc: 5,
        ote: 7,
        gdj: 8,
        lgp: 11,
        ild: 13,
        sjb: 14,
        xtd: 6,
        hai: 9,
        gwb: 10
    },
    gtz: {
        las: 1,
        auz: 2,
        xtc: 4,
        bzf: 8,
        abv: 16,
        cdt: 32
    },
    vew: {
        lgb: 1,
        bie: 2,
        rtk: 3,
        bjm: 4,
        rjc: 5,
        mpl: 6,
        xiu: 7,
        vpm: 94,
        ykm: 95,
        ljx: 96,
        mpb: 97,
        cpx: 98,
        psb: 99,
        roulette: {
            zvq: 2,
            aao: 9,
            uoj: 10
        }
    },
    ui: {
        aou: "minimal",
        snp: "modern",
        nzg: "classic"
    },
    mwi: {
        vtt: "auto",
        jeb: "left",
        gmy: "right"
    },
    wzn: {
        zlk: 0,
        rna: 4
    },
    vny: {
        syo: {
            ueb: "ji",
            ptv: "jv",
            sdv: "jh"
        }
    },
    ufd: {
        wos: {
            deg: 1,
            pel: 2
        },
        sgn: {
            ocg: 1,
            apz: 2,
            hjr: 3
        }
    },
    lll: {
        mhw: 0,
        vmm: 1
    }
};
kit.kxt = (function() {
    var g = ["moz", "webkit", "ms", "o"],
        f = 0,
        d = 0;
    var b = document.createElement("canvas");
    if (!(b.getContext && b.getContext("2d"))) {
        f += kit.gtz.las
    }
    if (!(window.WebSocket || window.MozWebSocket)) {
        f += kit.gtz.auz
    }
    try {
        if (!(window.localStorage && window.sessionStorage)) {
            f += kit.gtz.xtc
        } else {
            sessionStorage.dummy = true;
            sessionStorage.removeItem("dummy")
        }
    } catch (c) {
        f += kit.gtz.xtc
    }
    if (!(b.style.MozTransform != undefined || b.style.WebkitTransform != undefined || b.style.OTransform != undefined || b.style.msTransform != undefined)) {
        f += kit.gtz.bzf
    }
    try {
        if (window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
            window.AudioContext = webkitAudioContext;
            if (!AudioContext.prototype.hasOwnProperty("createGain")) {
                AudioContext.prototype.createGain = AudioContext.prototype.createGainNode
            }
            AudioContext.prototype.mvb = AudioContext.prototype.createBufferSource;
            AudioContext.prototype.createBufferSource = function() {
                var e = this.mvb();
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
            window.slo = window.requestAnimationFrame;
            window.evs = window.cancelAnimationFrame || window.cancelRequestAnimationFrame
        }
        for (var a = 0; a < g.length && !window.slo; ++a) {
            window.slo = window[g[a] + "RequestAnimationFrame"];
            window.evs = window[g[a] + "CancelAnimationFrame"] || window[g[a] + "CancelRequestAnimationFrame"]
        }
        if (!window.slo || !window.evs) {
            window.slo = function(l, i) {
                var e = new Date().getTime();
                var j = Math.max(0, 16 - (e - d));
                var k = window.setTimeout(function() {
                    l(e + j)
                }, j);
                d = e + j;
                return k
            }
        }
        if (!window.evs) {
            window.evs = function(e) {
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
        console.error(c.vew)
    }
    return f
})();

function lps() {
    var a = {};
    this.qcy = 1;
    this.yqa = 1;
    this.vug = 0.6;
    this.pjc = 0.4;
    this.fbq = function() {};
    this.iok = function(b, c) {
        a[b] = c
    };
    this.jnc = function(b) {
        if (a[b]) {
            return a[b]
        } else {
            return this.qcy
        }
    }
}

function wbi() {
    this.audio = {
        bgt: 65,
        hno: -1,
        value: "A",
        omx: null
    };
    this.shj = {
        bgt: 70,
        hno: 122,
        value: "F",
        omx: "F11"
    };
    this.kaq = {
        bgt: 72,
        hno: -1,
        value: "H",
        omx: null
    };
    this.zrz = {
        bgt: 83,
        hno: -1,
        value: "S",
        omx: null
    };
    this.isr = {
        bgt: 68,
        hno: -1,
        value: "D",
        omx: null
    };
    this.ok = {
        bgt: 13,
        hno: -1,
        value: "OK",
        omx: null
    };
    this.mqk = [this.audio, this.shj, this.kaq, this.zrz, this.isr, this.ok]
}

function qey() {
    var o = this;
    this.jeq = false;
    this.oeo = null;
    this.wop = false;
    this.sri = false;
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
    this.fbq = function() {
        this.nvh();
        this.znc();
        this.wop = false;
        this.sri = false
    };
    this.nvh = function() {
        try {
            if (webAudioEngine == null) {
                webAudioEngine = new AudioContext()
            }
            this.oeo = webAudioEngine.createGain();
            this.oeo.connect(webAudioEngine.destination);
            this.jeq = true
        } catch (p) {
            this.jeq = false
        }
    };
    this.znc = function() {
        m = kit.vcj.uya()
    };
    this.pqj = function(p) {
        l = p
    };
    this.fzf = function(p) {
        c = p
    };
    this.rgs = function(t, s, p, q) {
        var r = new uap(t);
        r.fbq(this.jeq, s, p, l.jnc(t));
        i[t] = r;
        k.push(r);
        d.push({
            zpc: r,
            fqt: q,
            qnq: o.mfq,
            zon: m
        })
    };
    this.vqg = function(r, q) {
        var p = new Image();
        f[r] = p;
        d.push({
            zpc: p,
            fqt: q,
            qnq: null
        })
    };
    this.tlk = function(q, p) {
        d.unshift({
            zpc: null,
            fqt: q,
            qnq: o.aaw,
            ntt: p
        })
    };
    this.zrf = function() {
        n = true;
        g = d.length;
        b = 0;
        while (d.length > 0) {
            o.pjn(d.shift())
        }
    };
    this.start = function() {
        if (!o.wop) {
            return
        }
        o.wop = false;
        n = false;
        g = d.length;
        b = 0;
        j = 1;
        for (var q = 0; q < j && d.length > 0; q++) {
            a.push(d.shift())
        }
        for (var p = 0; p < a.length; p++) {
            o.pjn(a.shift())
        }
    };
    this.yce = function() {
        b++;
        if (o.pek()) {
            o.wop = true;
            kit.vev.wlm()
        }
    };
    this.pme = function() {
        o.nct()
    };
    this.ipi = function() {
        o.sri = true;
        o.nct()
    };
    this.nct = function() {
        b++;
        o.hxg();
        if (o.pek()) {
            o.aju()
        } else {
            o.hvv()
        }
    };
    this.hxg = function() {
        var p = kit.vev.pxa.fei("loading");
        e = Math.round(100 * b / g);
        if (e < 100) {
            if (p) {
                p.xgz(e)
            }
        }
    };
    this.aju = function() {
        var q = kit.vev.pxa.fei("loading");
        if (o.sri) {
            kit.vev.zhy(kit.vev.language.ica);
            var p = confirm(kit.vev.language.oij);
            if (p == true) {
                kit.vev.tff = false;
                o.clf();
                kit.vev.tvw()
            } else {
                if (kit.vev.wvi) {
                    kit.vev.wvi.rwx({
                        sender: kit.vev.kyz,
                        lang: sessionStorage.sessionValue1.toUpperCase(),
                        data: {
                            success: false
                        }
                    })
                }
                setTimeout(kit.vev.tma, 1000)
            }
        } else {
            if (!kit.vev.jmf) {
                e = 100;
                if (q) {
                    q.xgz(e)
                }
                if (c === true) {
                    q.lyx()
                } else {
                    setTimeout(kit.vev.tvw, 200)
                }
            }
        }
    };
    this.kuv = function() {
        return e
    };
    this.hvv = function() {
        if (d.length > 0) {
            a.push(d.shift());
            if (j === 1 && (a[0].zpc instanceof Image || a[0].zpc instanceof uap)) {
                j = 30;
                for (var p = 0; p < j && d.length > 0; p++) {
                    a.push(d.shift())
                }
            }
        } else {}
        if (a.length > 0) {
            o.pjn(a.shift())
        }
    };
    this.pek = function() {
        return (g > 0 && b == g)
    };
    this.pjn = function(p) {
        if (p.zpc instanceof Image) {
            if (n === true) {
                this.yho(p.zpc, p.fqt)
            } else {
                this.fps(p.zpc, p.fqt)
            }
        } else {
            if (p.zpc instanceof uap) {
                this.nbl(p.zpc, p.fqt, p.qnq, p.zon)
            } else {
                this.hdg(p.fqt, p.ntt, p.qnq)
            }
        }
    };
    this.yho = function(q, p) {
        q.onload = function() {
            kit.vev.qug.yce()
        };
        q.onerror = function() {
            console.error("can not load image " + p)
        };
        q.src = p + "?v=" + kit.vev.ijv
    };
    this.fps = function(q, p) {
        q.onload = function() {
            kit.vev.qug.pme()
        };
        q.onerror = function() {
            console.error("can not load image " + p);
            kit.vev.zhy(kit.vev.language.sru);
            setTimeout(kit.vev.tma, 3000)
        };
        q.src = p + "?v=" + kit.vev.ijv
    };
    this.nbl = function(q, r, s, p) {
        q.load(r, s, p)
    };
    this.hdg = function(s, p, t) {
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
            kit.vev.zhy(kit.vev.language.sru);
            setTimeout(kit.vev.tma, 3000)
        };
        try {
            q.send()
        } catch (r) {
            console.error("can not load from " + s + p);
            kit.vev.zhy(kit.vev.language.sru);
            setTimeout(kit.vev.tma, 3000)
        }
    };
    this.mfq = function(q, p) {
        i[q].hhc = p
    };
    this.aaw = function(r, q) {
        var p = new Image();
        p.onload = function() {
            o.aqm(p, q.data)
        };
        p.onerror = function() {
            console.error("can not load image " + r + q.src);
            kit.vev.zhy(kit.vev.language.sru);
            setTimeout(kit.vev.tma, 3000)
        };
        p.src = r + q.src + "?v=" + kit.vev.ijv
    };
    this.aqm = function(r, u) {
        var s = null,
            q = null;
        for (var t = 0, p = u.length; t < p; t++) {
            s = document.createElement("canvas");
            s.width = u[t].rect.w;
            s.height = u[t].rect.h;
            q = s.getContext("2d");
            q.drawImage(r, u[t].rect.x, u[t].rect.y, u[t].rect.w, u[t].rect.h, 0, 0, u[t].rect.w, u[t].rect.h);
            o.vfh(u[t].id, s)
        }
        kit.vev.qug.pme()
    };
    this.enq = function(p) {
        if (i && i[p]) {
            return i[p]
        } else {}
        return null
    };
    this.vfh = function(q, p) {
        if (p && !f[q]) {
            f[q] = p
        } else {}
        return null
    };
    this.uyv = function(p) {
        if (f[p]) {
            return f[p]
        } else {}
        return null
    };
    this.bgz = function(p) {
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
    this.zuk = function(p) {
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
    this.eze = function(q, p) {
        if (i && i[q]) {
            i[q].play(p)
        } else {}
    };
    this.qyk = function(p) {
        if (i && i[p]) {
            i[p].stop()
        } else {}
    };
    this.mip = function(q, p) {
        if (i && i[q]) {
            i[q].yku(p)
        } else {}
    };
    this.mrj = function(s, q, r, p) {
        p = (p != null && p === true);
        if (i && i[s]) {
            i[s].ocm(l.jnc(s) * q, r, p)
        }
    };
    this.njy = function(p) {
        if (i && i[p]) {
            return i[p].ial()
        }
        return 0
    };
    this.qhc = function(p) {
        if (this.jeq) {
            this.oeo.gain.setValueAtTime(p, webAudioEngine.currentTime)
        }
    };
    this.oxw = function(q) {
        if (this.jeq) {
            this.oeo.gain.setValueAtTime((q) ? 0 : 1, webAudioEngine.currentTime)
        } else {
            if (k) {
                for (var p = 0; p < k.length; p++) {
                    k[p].yku(q)
                }
            }
        }
    };
    this.clf = function() {
        if (k) {
            for (var p = 0; p < k.length; p++) {
                k[p].clear()
            }
        }
        k = null;
        i = null
    }
}

function itm() {
    this.hll = {};
    this.gaj = {};
    this.yrj = [];
    this.fbq = function() {
        this.hll = {};
        this.gaj = {};
        this.yrj = []
    };
    this.kbh = function(b) {
        this.hll[b] = b
    };
    this.dcj = function(f, e, d) {
        this.gaj[f] = e;
        this.gaj[f].vbj = [];
        if (d && this.hll) {
            for (var c = 0, b = d.length; c < b; c++) {
                if (this.hll[d[c]]) {
                    this.gaj[f].vbj.push(d[c])
                } else {}
            }
        }
        this.yrj.push(this.gaj[f])
    };
    this.jfj = function() {
        var c = [];
        for (var d = 0, b = this.yrj.length; d < b; d++) {
            if (this.yrj[d] != null) {
                c.push(this.yrj[d])
            }
        }
        return c
    };
    this.fei = function(b) {
        if (this.gaj && this.gaj[b]) {
            return this.gaj[b]
        }
        return null
    };
    this.nlq = function(g) {
        if (this.hll && this.hll[g]) {
            var d = [];
            for (var f = 0, b = this.yrj.length; f < b; f++) {
                for (var e = 0, c = this.yrj[f].vbj.length; e < c; e++) {
                    if (this.yrj[f].vbj[e] == g) {
                        d.push(this.yrj[f])
                    }
                }
            }
            return d
        }
        return []
    };
    this.kbd = function() {
        return this.hll
    };
    this.clq = function(e) {
        var d = -1;
        if (this.gaj && this.gaj[e]) {
            for (var c = 0, b = this.yrj.length; c < b; c++) {
                if (this.yrj[c] == this.gaj[e]) {
                    d = c;
                    this.gaj[e] = null
                }
            }
        }
        if (d >= 0) {
            this.yrj.splice(d, 1)
        }
    };
    this.btd = function(f) {
        if (this.hll && this.hll[f]) {
            this.hll[f] = null;
            for (var e = 0, b = this.yrj.length; e < b; e++) {
                for (var d = 0, c = this.yrj[e].vbj.length; d < c; d++) {
                    if (this.yrj[e].vbj[d] == f) {
                        this.yrj[e].vbj.splice(d, 1)
                    }
                }
            }
        }
    };
    this.fdt = function(e, d, c, b) {
        return a(this.fei(e), d, c, b)
    };
    this.rwe = function(f, d, c) {
        for (var e = 0, b = this.yrj.length; e < b; e++) {
            a(this.yrj[e], f, d, c)
        }
    };
    this.eqb = function(k, l, f, e) {
        if (this.hll && this.hll[k]) {
            for (var g = 0, b = this.yrj.length; g < b; g++) {
                for (var d = 0, c = this.yrj[g].vbj.length; d < c; d++) {
                    if (this.yrj[g].vbj[d] == k) {
                        a(this.yrj[g], l, f, e)
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

function uap(b) {
    var a = this;
    this.vdk = null;
    this.loop = false;
    this.muted = false;
    this.volume = 1;
    this.id = b;
    this.bbw = false;
    this.hhc = null;
    this.vrl = null;
    this.xyp = 0;
    this.nmk = 0;
    this.bmz = 0;
    this.uht = 0;
    this.lvx = 30000;
    this.ram = "";
    this.sfs = "";
    this.kms = "";
    this.xtk = null;
    this.mcl = 1;
    this.zes = 0;
    this.wgx = -1;
    this.bka = 0;
    this.wwa = 0;
    this.uog = false;
    this.fbq = function(c, f, d, e) {
        this.bbw = c;
        if (e) {
            this.mcl = e;
            this.volume = e
        }
        if (f) {
            this.vdk = f
        }
        if (d) {
            this.loop = d
        }
    };
    this.play = function(c) {
        if (typeof c == "undefined") {
            c = 0
        }
        if (this.bbw) {
            clearTimeout(this.wgx);
            if (this.hhc) {
                this.volume = (this.muted === true) ? 0 : kit.fng.value40 * this.mcl;
                this.uog = false;
                this.vrl = webAudioEngine.createBufferSource();
                this.vrl.buffer = this.hhc;
                this.vrl.loop = this.loop;
                this.xyp = webAudioEngine.createGain();
                this.xyp.gain.setValueAtTime(this.volume, webAudioEngine.currentTime);
                this.vrl.connect(this.xyp);
                this.xyp.connect(kit.vev.qug.oeo);
                this.vrl.start(0, c);
                this.zes = webAudioEngine.currentTime;
                if (this.vdk) {
                    this.nmk = setTimeout(a.vdk, a.hhc.duration * 1000)
                }
            }
        } else {
            if (this.vrl) {
                if (this.loop) {
                    if (kit.vcj.yub != kit.vth.unk && kit.vcj.yub != kit.vth.oiy) {
                        this.bmz = setInterval(a.uff, a.vrl.duration * 1000)
                    }
                }
                this.vrl.currentTime = 0;
                this.vrl.play()
            }
        }
    };
    this.uff = function() {
        if (!a.vrl.paused || (kit.vcj.yub != kit.vth.uym && kit.vcj.yub != kit.vth.qln)) {
            a.vrl.currentTime = 0
        }
    };
    this.stop = function() {
        if (a) {
            if (a.bbw) {
                a.zes = 0;
                if (a.vrl) {
                    a.vrl.stop(0);
                    a.vrl = null
                }
                clearTimeout(a.nmk);
                if (a.wgx >= 0) {
                    clearTimeout(a.wgx);
                    a.wgx = -1
                }
            } else {
                if (a.vrl) {
                    a.vrl.currentTime = 0;
                    a.vrl.pause();
                    clearInterval(a.bmz);
                    if (a.wgx >= 0) {
                        clearTimeout(a.wgx);
                        a.wgx = -1
                    }
                }
            }
        }
    };
    this.load = function(e, c, d) {
        this.ram = d[0];
        if (d.length >= 2) {
            this.sfs = d[1];
            this.kms = e;
            this.xtk = c
        }
        e += this.ram + "?v=" + kit.vev.ijv;
        if (this.bbw) {
            this.sbj(e, c)
        } else {
            this.dqd(e)
        }
    };
    this.ujf = function() {
        if (this.bbw) {
            this.sbj(this.kms + this.sfs + "?v=" + kit.vev.ijv, this.xtk)
        }
    };
    this.dqd = function(c) {
        this.vrl = new Audio();
        this.uht = setTimeout(function() {
            console.error("can not load audio " + c);
            kit.vev.qug.ipi()
        }, this.lvx);
        this.vrl.addEventListener("canplaythrough", function() {
            this.removeEventListener("canplaythrough", arguments.callee, false);
            clearTimeout(a.uht);
            kit.vev.qug.pme();
            a.jei()
        }, false);
        this.vrl.addEventListener("error", function() {
            clearTimeout(a.uht);
            console.error("can not load audio " + c);
            kit.vev.qug.ipi()
        }, false);
        this.vrl.volume = kit.fng.value40 * this.volume;
        this.vrl.src = c;
        this.vrl.load()
    };
    this.sbj = function(f, g) {
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
                kit.vev.qug.pme()
            }, function() {
                a.whi("can not decode audio ", f)
            })
        };
        c.onerror = function() {
            a.whi("can not load audio ", f)
        };
        try {
            c.send()
        } catch (d) {
            a.whi("can not load audio from ", f)
        }
    };
    this.whi = function(d, c) {
        console.error(d + c);
        if (a.sfs != "" && c.indexOf(a.sfs) < 0) {
            a.ujf()
        } else {
            kit.vev.qug.ipi()
        }
    };
    this.qmc = function(c) {
        this.vdk = c;
        this.jei()
    };
    this.jei = function() {
        if (!this.bbw) {
            if (this.vdk) {
                if (this.vrl) {
                    this.vrl.addEventListener("ended", function() {
                        a.vdk()
                    }, false)
                }
            }
            if (kit.vcj.yub == kit.vth.unk || kit.vcj.yub == kit.vth.oiy) {
                if (this.loop) {
                    if (this.vrl) {
                        this.vrl.addEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.itd = function() {
        if (!this.bur) {
            if (this.vdk) {
                if (this.vrl) {
                    this.vrl.removeEventListener("ended", function() {
                        a.vdk()
                    }, false)
                }
            }
            if (kit.vcj.yub == kit.vth.unk || kit.vcj.yub == kit.vth.oiy) {
                if (this.loop) {
                    if (this.vrl) {
                        this.vrl.removeEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.ocm = function(d, e, c) {
        if (this.bbw === true && this.xyp) {
            this.volume = (this.muted === true) ? 0 : kit.fng.value40 * d * this.mcl;
            if (e > 0) {
                this.xyp.gain.linearRampToValueAtTime(this.volume, webAudioEngine.currentTime + (e / 1000))
            } else {
                this.xyp.gain.setValueAtTime(this.volume, webAudioEngine.currentTime)
            }
            if (c === true) {
                this.wgx = setTimeout(this.stop, e)
            }
        } else {
            if (!this.bbw && c === true) {
                this.wgx = setTimeout(this.stop, e)
            }
        }
    };
    this.yku = function(c) {
        this.muted = c;
        if (!this.bbw) {
            if (this.vrl && this.vrl.readyState > 0) {
                this.vrl.muted = c
            }
        } else {
            if (this.xyp) {
                this.xyp.gain.linearRampToValueAtTime((this.muted === true) ? 0 : kit.fng.value40 * this.volume, webAudioEngine.currentTime)
            }
        }
    };
    this.clear = function() {
        if (this.bbw) {
            if (this.vrl) {
                this.vrl.stop(0);
                clearTimeout(this.nmk);
                this.vrl = null
            }
        } else {
            if (this.vrl && this.vrl.readyState > 0) {
                this.vrl.currentTime = 0;
                this.vrl.pause();
                if (this.vdk) {
                    this.itd(this.vdk)
                }
                this.vrl = null
            }
        }
    };
    this.ial = function() {
        if (this.bbw && this.zes > 0) {
            return (webAudioEngine.currentTime - this.zes) % this.hhc.duration
        }
        return 0
    }
}

function yjf() {
    var a = null;
    this.aif = "";
    var b = null;
    this.connect = function(c) {
        a = this;
        this.aif = c;
        b = new WebSocket(this.aif);
        b.onopen = function(d) {
            a.wsp(d)
        };
        b.onclose = function(d) {
            a.sso(d)
        };
        b.onmessage = function(d) {
            a.xpc(d)
        };
        b.onerror = function(d) {
            a.lij(d)
        }
    };
    this.pfn = function(c) {};
    this.nki = function(c) {
        b.send(c)
    };
    this.wsp = function(c) {
        this.nki("A/u25vlt")
    };
    this.sso = function(c) {};
    this.xpc = function(c) {
        this.pfn(c.data)
    };
    this.lij = function(c) {}
}

function yrl() {
    var b = null;
    this.pni = null;
    this.kxt = 0;
    this.qxk = -1;
    this.vew = -1;
    this.uue = -1;
    this.fzk = 0;
    this.aif = "";
    this.xnx = "";
    this.lzn = "";
    this.vcb = "";
    this.kyz = "";
    this.ijv = "";
    this.umu = "";
    this.edf = "";
    this.gos = [];
    this.fvc = [];
    this.ort = [];
    this.gty = [];
    var g = false;
    var a = false;
    var d = false;
    var f = false;
    var c = null;
    var e = 1;
    this.fbq = function(i) {
        this.pni = i;
        b = this;
        g = false;
        a = false;
        d = false;
        f = false;
        c = new WebSocket(this.aif);
        c.onopen = function(j) {
            b.wsp(j)
        };
        c.onclose = function(j) {
            b.sso(j)
        };
        c.onmessage = function(j) {
            b.xpc(j)
        };
        c.onerror = function(j) {
            b.lij(j)
        }
    };
    this.esq = function(i) {
        var j = parseInt(i.charAt(this.fzk), 16);
        this.fzk++;
        return j
    };
    this.bwk = function(i) {
        var k = 0;
        var j = i.charAt(this.fzk);
        j += i.charAt(this.fzk + 1);
        this.fzk += 2;
        k = parseInt(j, 16);
        return k
    };
    this.mcb = function(m) {
        var j = this.ydz(m);
        var n = [];
        for (var k = 0; k < j; k++) {
            n[k] = parseInt(m.charAt(this.fzk), 16);
            this.fzk += 1
        }
        return n
    };
    this.ydz = function(n) {
        var m = 0;
        var j = parseInt(n.charAt(this.fzk), 16);
        this.fzk++;
        var o = "";
        for (var k = 0; k < j; k++) {
            o += n.charAt(this.fzk);
            this.fzk += 1
        }
        m = parseInt(o, 16);
        return m
    };
    this.hdb = function(i) {
        var j = "";
        if (this.fzk < i.length) {
            j = i.substring(this.fzk, i.length)
        }
        return j
    };
    this.pfn = function(i) {};
    this.ssj = function(o) {
        var u = o.substr(0, 2),
            l = o.substring(2),
            k = [],
            t = [],
            s = [],
            q = null;
        if (l && l.length > 0) {
            if (u === kit.vny.syo.ueb || u === kit.vny.syo.ptv) {
                k = l.split("|");
                for (var p = 0, r = k.length; p < r; p++) {
                    t = k[p].split(":");
                    if (u === kit.vny.syo.ueb && t.length >= 3) {
                        if (t[2].toLowerCase() != "mystery") {
                            this.gos[p] = {
                                qwb: t[0],
                                value: Number(t[1]),
                                vwd: t[2]
                            };
                            if (t.length >= 5) {
                                this.gos[p].wlc = t[3];
                                this.gos[p].qge = t[4]
                            }
                        }
                    } else {
                        if (u === kit.vny.syo.ptv && t.length >= 2) {
                            for (var p = 0, r = this.gos.length; p < r; p++) {
                                if (this.gos[p].qwb === t[0]) {
                                    this.gos[p].value = Number(t[1])
                                }
                            }
                        }
                    }
                }
                if (u === kit.vny.syo.ueb) {
                    s = [];
                    for (var p = 0, r = this.gos.length; p < r; p++) {
                        s.push({
                            qwb: this.gos[p].qwb,
                            value: (Number)(this.gos[p].qwb.split("_")[1])
                        })
                    }
                    s.sort(function(j, i) {
                        return j.value - i.value
                    });
                    for (var p = 0, r = this.gos.length; p < r; p++) {
                        for (var n = 0, m = s.length; n < m; n++) {
                            if (this.gos[p].qwb == s[n].qwb) {
                                this.gos[p].gst = n;
                                break
                            }
                        }
                    }
                } else {
                    if (u === kit.vny.syo.ptv) {
                        this.pni.rll(this.gos)
                    }
                }
            } else {
                if (u === kit.vny.syo.sdv) {
                    t = l.split(":");
                    if (t.length >= 3) {
                        q = {
                            qwb: t[0],
                            value: Number(t[1]),
                            vkp: Number(t[2])
                        };
                        if (t.length >= 5) {
                            q.xnx = t[3];
                            q.ouu = t[4]
                        }
                        this.pni.yhq(q)
                    }
                }
            }
        }
    };
    this.close = function() {
        g = true;
        if (c.readyState >= 2) {
            b.pni.sdc.orc()
        } else {
            b.nki("A/u260");
            if (kit.fng.value66 > 0) {
                setTimeout(b.hgh, kit.fng.value66)
            }
        }
    };
    this.qgd = function(i) {
        if (this.pni.sdc.xdp) {
            setTimeout(function() {
                window.location.reload()
            }, i)
        } else {
            this.pni.sdc.qsu(e);
            setTimeout(function() {
                if (e < kit.fng.value46) {
                    b.pni.sdc.connect();
                    e++
                } else {
                    b.pni.sdc.gqm()
                }
            }, i)
        }
    };
    this.pca = function() {
        return g
    };
    this.suw = function() {
        g = true;
        d = true;
        this.nki("A/u260");
        if (kit.fng.value66 > 0) {
            setTimeout(this.hgh, kit.fng.value66)
        }
    };
    this.kyt = function() {
        g = true;
        f = true;
        this.nki("A/u260");
        if (kit.fng.value66 > 0) {
            setTimeout(this.hgh, kit.fng.value66)
        }
    };
    this.wsp = function(i) {
        var j = -(new Date().getTimezoneOffset() / 60),
            m = window.navigator.userLanguage || window.navigator.language,
            l = (kit.vev) ? kit.vcj.yub + "|" + kit.vev.ily + "|" + j + "|" + m : "",
            k = (kit.vev && kit.vev.gll > 0) ? "," + kit.vev.gll : "";
        a = false;
        this.pni.alr();
        this.nki("A/u25" + this.xnx + "," + this.lzn + "," + this.vcb + "," + this.kyz + "," + this.ijv + "," + this.umu + "," + this.edf + "," + l + k)
    };
    this.sso = function(i) {
        if (a) {
            return
        }
        a = true;
        if (!g) {
            if (kit.vcj.yub == kit.vth.erw || kit.vcj.yub == kit.vth.soc) {
                setTimeout(b.xwm, 500)
            } else {
                this.pni.knr()
            }
        } else {
            if (d) {
                if (kit.fng.value13 == true) {
                    this.pni.sdc.kwa()
                } else {
                    this.pni.sdc.vww()
                }
            } else {
                if (f) {
                    this.pni.sdc.wmm()
                } else {
                    this.pni.sdc.tma()
                }
            }
        }
    };
    this.xpc = function(i) {
        this.pfn(i.data)
    };
    this.lij = function(i) {};
    this.nki = function(i) {
        if (c.readyState >= 2) {
            this.sso()
        }
        this.kxt = 0;
		var tmpPar=':::{"gameData":"'+i+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"MultiWinTripleAM"}';i=tmpPar;
        c.send(i)
    };
    this.xwm = function() {
        b.pni.knr()
    };
    this.hgh = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.sso()
    }
}

function zqg() {
    this.sdc = null;
    this.qis = null;
    this.aif = "";
    this.xnx = "";
    this.lzn = "";
    this.vcb = "";
    this.kyz = "";
    this.umu = "";
    this.edf = "";
    this.alr = function() {};
    this.xpc = function(a) {
        this.sdc.pmx(a)
    };
    this.grr = function() {};
    this.knr = function() {
        if (sessionStorage.sessionActive) {
            return
        }
        if (this.sdc != null && !this.qis.pca()) {
            this.sdc.ndv(this.sdc.language.bzr, true)
        }
    };
    this.lij = function(a) {
        if (this.qis.kxt == 1 && a.toLowerCase().indexOf("active") == 0) {
            sessionStorage.sessionActive = true
        }
        if (this.sdc != null) {
            if (this.sdc.wvi) {
                this.sdc.wvi.rwx({
                    sender: this.sdc.kyz,
                    lang: sessionStorage.sessionValue1.toUpperCase(),
                    data: {
                        success: false
                    }
                })
            }
            this.sdc.ndv(a, true)
        }
    };
    this.qgd = function(a) {
        this.qis.qgd(a)
    };
    this.psj = function() {
        this.sdc.frd(this.qis.vkp)
    };
    this.rll = function(a) {
        this.sdc.rll(a)
    };
    this.yhq = function(a) {
        this.sdc.yhq(a)
    };
    this.xif = function() {};
    this.vpw = function() {
        this.sdc.vpw()
    };
    this.pdb = function() {
        this.sdc.pdb()
    }
}

function zif() {
    var b = null;
    this.sdc = null;
    this.aif = "";
    this.xnx = "";
    this.lzn = "";
    this.vcb = "";
    this.kyz = "";
    this.ijv = " ";
    var c = null;
    var e = false;
    var a = false;
    var d = "StatsServer";
    this.qjc = true;
    this.nvd = false;
    this.klt = false;
    this.fzk = 0;
    this.sww = 0;
    this.jvc = 0;
    this.zrk = 0;
    this.zjc = 0;
    this.fbq = function(f, g) {
        this.aif = g;
        this.sdc = f;
        this.klt = false;
        return this
    };
    this.connect = function(g, j, i, k, f, l) {
        b = this;
        e = false;
        a = false;
        this.xnx = j;
        this.lzn = i;
        this.vcb = k;
        this.kyz = g;
        this.ijv = f;
        this.qjc = true;
        this.nvd = l;
        c = new WebSocket(this.aif);
        c.onopen = function(m) {
            b.wsp(m)
        };
        c.onclose = function(m) {
            b.sso(m)
        };
        c.onmessage = function(m) {
            b.xpc(m)
        };
        c.onerror = function(m) {
            b.lij(m)
        }
    };
    this.esq = function(f) {
        var g = parseInt(f.charAt(this.fzk), 16);
        this.fzk++;
        return g
    };
    this.ydz = function(k) {
        var j = 0;
        var f = parseInt(k.charAt(this.fzk), 16);
        this.fzk++;
        var m = "";
        for (var g = 0; g < f; g++) {
            m += k.charAt(this.fzk);
            this.fzk += 1
        }
        j = parseInt(m, 16);
        return j
    };
    this.pfn = function(i) {
        var k = this.sdc.pxa.fei("stats");
        if (i != null && i != "null" && i) {
            if (i == "010101010101010") {
                this.kzr()
            } else {
                this.fzk = 0;
                this.uue = this.esq(i);
                if (this.uue == 0) {
                    var j = [];
                    j[0] = this.ydz(i);
                    j[1] = this.ydz(i);
                    j[2] = this.ydz(i);
                    j[3] = this.ydz(i);
                    j[4] = this.ydz(i);
                    j[5] = this.ydz(i);
                    j[6] = this.ydz(i);
                    if (kit.fng.value36) {
                        this.jvc = j[0];
                        this.zrk = j[1];
                        this.zjc = j[2]
                    } else {
                        if (kit.fng.value37) {
                            var g = kit.fng.value39;
                            var f = j[4];
                            f = (g <= f) ? (this.nvd) ? 100 : g * 60000 : (g - f) * 60000;
                            this.sww = j[3] * 60000;
                            this.zrk = j[5];
                            this.zjc = j[6];
                            this.sdc.tds(f);
                            if (!this.klt) {
                                this.klt = true;
                                this.sdc.pey(j[3] * 60000)
                            }
                            if (this.nvd) {
                                this.close(false)
                            }
                        }
                    }
                    if (!this.nvd) {
                        if (k) {
                            k.kdv(this.jvc, this.zrk, this.zjc, this.sww)
                        }
                    }
                } else {
                    console.error("Statistic error: " + i);
                    if (!this.nvd) {
                        if (k) {
                            k.kdv(0, 0, 0, 0)
                        }
                    }
                }
            }
        } else {
            console.error("no statistic data")
        }
    };
    this.kzr = function() {
        this.nki("A/u270," + this.kyz)
    };
    this.nki = function(f) {
        if (c && !e) {
            this.kxt = 0;
            c.send(f)
        }
    };
    this.close = function(f) {
        this.qjc = f;
        if (c && c.readyState >= 2) {
            if (this.sdc && this.qjc) {
                this.sdc.qjc()
            }
        } else {
            this.nki("A/u260");
            if (kit.fng.value66 > 0) {
                setTimeout(this.hgh, kit.fng.value66)
            }
        }
        e = true
    };
    this.wsp = function(f) {
        a = false;
        this.nki("A/u25" + this.xnx + "," + this.lzn + "," + this.vcb + "," + d + "," + this.ijv)
    };
    this.sso = function(f) {
        if (a) {
            return
        }
        a = true;
        if (!e) {} else {
            if (!this.nvd) {
                if (this.sdc && this.qjc) {
                    this.sdc.qjc()
                }
            }
        }
    };
    this.xpc = function(f) {
        this.pfn(f.data)
    };
    this.lij = function(f) {};
    this.hgh = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.sso()
    }
}

function dho(a, d, b, c) {
    this.x = a || 0;
    this.y = d || 0;
    this.width = b || 0;
    this.height = c || 0;
    this.ohv = function() {
        return this.x + this.width
    };
    this.oby = function() {
        return this.y + this.height
    };
    this.nuy = function() {
        return this.x + this.width / 2
    };
    this.pch = function() {
        return this.y + this.height / 2
    };
    this.jiz = function(e, f) {
        if (e >= this.x && e <= this.x + this.width && f >= this.y && f <= this.y + this.height) {
            return true
        }
        return false
    };
    this.rje = function(f, e) {
        this.x = Math.round(this.x * f);
        this.y = Math.round(this.y * e);
        this.width = Math.round(this.width * f);
        this.height = Math.round(this.height * e)
    }
}

function wyf() {
    this.yub = -1;
    this.jtx = -1;
    this.pqo = false;
    this.lou = false;
    this.vzn = false;
    this.mbi = false;
    this.cno = false;
    this.xaa = false;
    this.yke = false;
    this.fje = true;
    this.xgd = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Ama_Android") >= 0) {
            this.pqo = true;
            this.vzn = true;
            this.yub = kit.vth.uym
        } else {
            if (a.indexOf("Edge") >= 0) {
                if (a.indexOf("Phone") >= 0) {
                    this.vzn = true
                }
                this.yub = kit.vth.pvi
            } else {
                if (a.indexOf("Chrome") >= 0) {
                    if (a.indexOf("Android") >= 0) {
                        this.yub = kit.vth.qln;
                        this.vzn = true
                    } else {
                        this.yub = kit.vth.uym
                    }
                } else {
                    if (a.indexOf("Safari") >= 0) {
                        if (a.indexOf("Mobile") >= 0 || this.dxw()) {
                            if (a.indexOf("Android") >= 0) {
                                this.yub = kit.vth.svo;
                                this.vzn = true
                            } else {
                                this.yub = kit.vth.ygp;
                                this.vzn = true;
                                this.mbi = (a.indexOf("OS 7_") < 0 && !(a.indexOf("OS 8_") >= 0 && a.indexOf("CriOS") >= 0));
                                this.cno = (a.indexOf("CriOS") < 0 && a.indexOf("Coast") < 0);
                                this.xaa = (a.indexOf("7.0 Mobile") >= 0)
                            }
                        } else {
                            this.yub = kit.vth.tox
                        }
                    } else {
                        if (a.indexOf("Opera") >= 0) {
                            this.yub = kit.vth.rha
                        } else {
                            if (a.indexOf("MSIE") >= 0 || a.indexOf("Trident/7") >= 0) {
                                if (a.indexOf("IEMobile/10") >= 0) {
                                    this.yub = kit.vth.kxs;
                                    this.vzn = true
                                } else {
                                    if (window.innerHeight >= window.outerHeight) {
                                        this.yub = kit.vth.oiy;
                                        this.vzn = true
                                    } else {
                                        if (a.indexOf("Trident/7") >= 0 && a.indexOf("Tablet PC") >= 0) {
                                            this.yub = kit.vth.oiy;
                                            this.vzn = true
                                        } else {
                                            this.yub = kit.vth.unk
                                        }
                                    }
                                }
                            } else {
                                if (a.indexOf("iPad") >= 0) {
                                    this.yub = kit.vth.ygp;
                                    this.lou = true;
                                    this.vzn = true
                                } else {
                                    if (a.indexOf("iPhone") >= 0) {
                                        this.yub = kit.vth.ygp;
                                        this.lou = true;
                                        this.vzn = true
                                    } else {
                                        if (a.indexOf("Android") >= 0) {
                                            this.yub = kit.vth.soc;
                                            this.vzn = true
                                        } else {
                                            this.yub = kit.vth.erw
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
    this.fud = function() {
        var a = navigator.language.split("")[0];
        return a
    };
    this.qra = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Win") >= 0) {
            this.jtx = kit.os.ioz;
            if (a.indexOf("NT 5.1") >= 0 || a.indexOf("NT 5.2") >= 0) {
                this.yke = true
            }
        } else {
            if (a.indexOf("iPhone") >= 0 || a.indexOf("iPad") >= 0 || (a.indexOf("Mac") >= 0 && this.dxw())) {
                this.jtx = kit.os.wep
            } else {
                if (a.indexOf("Mac") >= 0) {
                    this.jtx = kit.os.txt
                } else {
                    if (a.indexOf("Android") >= 0) {
                        this.jtx = kit.os.nht;
                        if (a.indexOf("Android 4.0") >= 0 || a.indexOf("Android 4.1") >= 0 || a.indexOf("Android 4.2") >= 0 || a.indexOf("Android 4.3") >= 0) {
                            this.fje = false
                        }
                    } else {
                        if (a.indexOf("Linux") >= 0) {
                            this.jtx = kit.os.utx
                        }
                    }
                }
            }
        }
    };
    this.yve = function() {
        return this.xaa
    };
    this.spb = function() {
        return (this.cno && !this.xaa)
    };
    this.zrx = function() {
        return this.mbi
    };
    this.unf = function() {
        try {
            return window.self !== window.top
        } catch (a) {
            return true
        }
    };
    this.meu = function() {
        return (document.documentElement.requestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullscreen)
    };
    this.dxw = function() {
        if (("ontouchstart" in window) || window.qkw) {
            return true
        }
        return false
    };
    this.chg = function() {
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
    this.vsg = function() {
        return (this.igr() === true)
    };
    this.igr = function() {
        if ((screen.width <= kit.fng.value73.w && screen.height <= kit.fng.value73.h) || (screen.height <= kit.fng.value73.w && screen.width <= kit.fng.value73.h)) {
            return true
        }
        return false
    };
    this.mzq = function(i, j, k, n, e, b, f, l, m, a, d, g) {
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
    this.gix = function(b, a) {
        if (b) {
            b.style.left = a.x + "px";
            b.style.top = a.y + "px";
            b.style.width = a.width + "px";
            b.style.height = a.height + "px"
        }
    };
    this.ccn = function() {
        return (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
    };
    this.mtb = function() {
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
    this.aty = function() {
        try {
            if (screen.orientation && screen.orientation.lock && screen.orientation.unlock) {
                return true
            }
        } catch (a) {
            return false
        }
        return false
    };
    this.jvb = function(b) {
        try {
            if (this.aty() === true) {
                screen.orientation.lock(b)
            }
        } catch (a) {}
    };
    this.tgb = function() {
        try {
            if (this.aty() === true) {
                screen.orientation.unlock()
            }
        } catch (a) {}
    };
    this.ulg = function() {
        return false
    };
    this.nup = function(c, a) {
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
    this.uya = function() {
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
    this.bom = function(q, o, f, l, k, a, p, d, r, g, n, j) {
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
    this.enf = function(q, o, f, l, k, a, p, d, s, g, r, n, j) {
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
    this.cxi = function(q, o, f, l, k, a, p, d, s, g, r, n, j) {
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
    this.hoi = function(r, m, t, k, j, q, p, n, c, d, u, b, z, s) {
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
    this.cjl = function(m, g, d, a, j, b, k, l, f) {
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
    this.iwj = function(n, i, f, a, k, c, m, b, l, g, o) {
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
    this.flx = function(o, d, k, j, n, l, f, p, q, g, m, c) {
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
    this.cqk = function(q, j, g, b, m, p, l, d, f, o, a, n, i, r) {
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
    this.zrw = function(m, g, d, a, j, k, b, l, f, n) {
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
    this.ljj = function(k, g, d, c, i, a, j, f, l) {
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

function noe() {
    this.parent = null;
    this.context2D = null;
    this.hlo = null;
    this.evc = null;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.otq = true;
    this.wre = false;
    this.fbq = function(a, d, c) {
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
                this.hlo = document.createElement("canvas");
                this.hlo.width = this.width;
                this.hlo.height = this.height;
                this.context2D = this.hlo.getContext("2d");
                if (c) {
                    this.evc = c
                }
            }
            this.wre = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.mya = function(a) {
        try {
            this.x = a.x || 0;
            this.y = a.y || 0;
            this.width = a.width || 0;
            this.height = a.height || 0;
            if (this.hlo) {
                this.hlo.width = this.width;
                this.hlo.height = this.height
            }
            this.wre = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.goa = function(a) {};
    this.wez = function(a) {};
    this.dwr = function(a, b) {
        this.otq = a;
        if (b && b === true) {
            this.parent.xgz(this.x, this.y, this.width, this.height)
        }
    };
    this.aod = function() {
        return (this.otq && !this.wre)
    };
    this.xgz = function() {}
}

function yoq() {
    this.bqe = null;
    this.ikg = null;
    this.uvs = -1;
    this.mtx = -1;
    this.zyp = false;
    this.fol = false;
    this.ssb = false;
    this.gwq = 0;
    this.udp = 0;
    var a = 200;
    this.fbq = function(c, f, d, b, e) {
        this.bqe = b;
        this.ikg = e;
        yoq.prototype.fbq.call(this, c, f, d)
    };
    this.dan = function(b, d, c) {
        this.zyp = b;
        c = (c === false) ? false : true;
        if (d && d === true && this.aod()) {
            this.parent.xgz(this.x, this.y, this.width, this.height)
        }
        if (this.zyp === true && c === true) {
            clearTimeout(this.gwq);
            this.gwq = setTimeout(this.urm, a)
        }
    };
    this.gqn = function() {
        return this.zyp
    };
    this.awu = function(b, c) {
        this.ssb = b;
        c = (c === false) ? false : true;
        clearTimeout(this.udp);
        if (this.ssb === true && c === true) {
            this.udp = setTimeout(this.ugg, a)
        }
    };
    this.wob = function() {
        return this.ssb
    };
    this.yya = function(b, c) {
        this.ikg = b;
        if (c && c === true && this.aod()) {
            this.parent.xgz(this.x, this.y, this.width, this.height)
        }
    };
    this.vba = function(b) {
        this.fol = b
    };
    this.vka = function() {
        return this.fol
    };
    this.ncb = function() {};
    this.ugg = function() {};
    this.urm = function() {}
}
yoq.prototype = new noe;

function yxf() {
    var a = this;
    this.gki = null;
    this.value = "";
    this.ozs = false;
    this.cxr = "round";
    this.bnn = null;
    this.yxa = "bold";
    this.cra = null;
    this.tse = null;
    this.usi = null;
    this.xnw = null;
    this.nii = null;
    this.uuh = 0;
    this.mov = 6;
    this.hwf = -2;
    this.vly = 2;
    this.mpy = -4;
    this.rgy = 8;
    this.ygu = 26;
    this.jrb = 0;
    this.etr = 1;
    this.zef = 0;
    this.gsa = 0;
    this.sys = -1;
    this.edm = 10;
    this.zxz = 0;
    this.isd = 0;
    this.xal = false;
    this.sjq = -1;
    this.wjc = true;
    this.fbq = function(d, g, e, c, b, f) {
        yxf.prototype.fbq.call(this, d, g, e, c, f);
        this.gki = b;
        if (this.bqe) {
            this.uuh = Math.round(this.bqe.height / 2)
        }
    };
    this.goa = function(b) {
        try {
            this.cxr = b.khg;
            this.bnn = b.font;
            this.yxa = b.gas;
            this.cra = b.backgroundColor;
            this.tse = b.xof;
            this.usi = b.lkk;
            this.xnw = b.phf;
            if (b.borderColor && b.epw) {
                this.nii = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.nii.addColorStop(0, b.borderColor);
                this.nii.addColorStop(1, b.epw)
            } else {
                this.nii = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.wez = function(b) {
        try {
            this.ygu = b.ovc;
            this.jrb = b.cov;
            this.mov = b.qsg;
            this.hwf = b.nib;
            this.vly = b.gef;
            this.mpy = b.jzo;
            this.rgy = b.txi;
            this.etr = b.ylx
        } catch (c) {
            console.error(c)
        }
    };
    this.ofo = function() {
        if (this.yxc()) {
            clearInterval(this.sjq);
            this.sjq = -1
        }
        this.wjc = false;
        this.sjq = setInterval(this.rsf, 400)
    };
    this.ktf = function() {
        this.wjc = true;
        clearInterval(this.sjq);
        this.sjq = -1;
        this.faw(false)
    };
    this.faw = function(b, c) {
        this.xal = b;
        c = (c === false) ? false : true;
        if (c === true && this.aod() === true) {
            this.parent.xgz(this.x, this.y, this.width, this.height)
        }
    };
    this.yxc = function() {
        return (this.sjq >= 0)
    };
    this.fvx = function(b, c) {
        this.value = b;
        if (c && c === true && this.aod()) {
            this.parent.xgz(this.x, this.y, this.width, this.height)
        }
    };
    this.zsd = function(b) {
        this.zef = Math.round(b / this.edm);
        this.zxz = 0;
        this.isd = 0;
        this.gsa = new Date().getTime();
        this.sys = setTimeout(this.efx, this.zef)
    };
    this.kqv = function() {
        if (a.sys >= 0) {
            clearTimeout(a.sys);
            a.sys = -1
        }
        a.zxz = 0;
        a.urm()
    };
    this.prg = function() {
        if (a.sys >= 0) {
            clearInterval(a.sys);
            a.sys = -1
        }
        a.zxz = 1;
        a.urm()
    };
    this.efx = function() {
        var b = 0,
            c = new Date().getTime();
        a.isd += 1;
        if (a.isd < a.edm) {
            a.zxz += 1 / a.edm;
            a.parent.xgz(a.x, a.y, a.width, a.height);
            b = a.zef + (a.isd * a.zef - (c - a.gsa));
            a.sys = setTimeout(a.efx, b)
        } else {
            a.prg()
        }
    };
    this.xgz = function() {
        if (!this.aod()) {
            return
        }
        var g = null,
            f = 0,
            c = 0,
            n = 0,
            k = 0,
            l = this.width / 2 - this.etr,
            d = (this.cxr === "roundedT" || this.cxr === "roundedL") ? this.rgy : 0,
            b = (this.cxr === "roundedT" || this.cxr === "roundedR") ? this.rgy : 0,
            o = (this.cxr === "roundedB" || this.cxr === "roundedR") ? this.rgy : 0,
            q = (this.cxr === "roundedB" || this.cxr === "roundedL") ? this.rgy : 0,
            e = 1,
            m = String(this.value),
            p = this.context2D;
        p.save();
        p.textAlign = "center";
        p.textBaseline = "bottom";
        if (this.xal || this.zxz >= 1) {
            if (this.cxr === "round") {
                kit.vcj.ljj(p, this.x + this.width / 2, this.y + this.height / 2, l, this.tse, 1, this.nii, this.etr, 1)
            } else {
                if (this.cxr === "rect") {
                    kit.vcj.cjl(p, this.x, this.y, this.width, this.height, this.rgy, this.tse, this.nii, this.etr)
                } else {
                    if (this.cxr === "roundedT" || this.cxr === "roundedB" || this.cxr === "roundedR" || this.cxr === "roundedL") {
                        kit.vcj.cqk(p, this.x, this.y, this.width, this.height, d, b, o, q, this.tse, 1, this.nii, this.etr, 1)
                    }
                }
            }
            if (this.gki || this.bqe) {
                if (this.gqn()) {
                    p.drawImage((this.gki) ? this.gki : this.bqe, 0, this.uuh, this.bqe.width, this.uuh, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage((this.gki) ? this.gki : this.bqe, 0, 0, this.bqe.width, this.uuh, this.x, this.y, this.width, this.height)
                }
            }
        } else {
            if (this.ozs && this.vka() === false) {
                p.globalAlpha = 0.5
            }
            if (this.zxz > 0) {
                if (this.cxr === "round") {
                    kit.vcj.ljj(p, this.x + this.width / 2, this.y + this.height / 2, l, this.cra, 1 - this.isd / this.edm, this.nii, this.etr, 1);
                    kit.vcj.ljj(p, this.x + this.width / 2, this.y + this.height / 2, l, this.tse, this.isd / this.edm)
                } else {
                    if (this.cxr === "rect") {
                        pkd = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                        pkd.addColorStop(1 - this.zxz, this.cra);
                        pkd.addColorStop(1 - this.zxz, this.tse);
                        kit.vcj.iwj(p, this.x, this.y, this.width, this.height, this.rgy, pkd, 1, this.nii, this.etr, 1)
                    } else {
                        if (this.cxr === "roundedT" || this.cxr === "roundedB" || this.cxr === "roundedR" || this.cxr === "roundedL") {
                            pkd = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                            pkd.addColorStop(1 - this.zxz, this.cra);
                            pkd.addColorStop(1 - this.zxz, this.tse);
                            kit.vcj.cqk(p, this.x, this.y, this.width, this.height, d, b, o, q, pkd, 1, this.nii, this.etr, 1)
                        }
                    }
                }
            } else {
                if (this.cxr === "round") {
                    kit.vcj.ljj(p, this.x + this.width / 2, this.y + this.height / 2, l, this.cra, 1, this.nii, this.etr, 1)
                } else {
                    if (this.cxr === "rect") {
                        kit.vcj.cjl(p, this.x, this.y, this.width, this.height, this.rgy, this.cra, this.nii, this.etr)
                    } else {
                        if (this.cxr === "roundedT" || this.cxr === "roundedB" || this.cxr === "roundedR" || this.cxr === "roundedL") {
                            kit.vcj.cqk(p, this.x, this.y, this.width, this.height, d, b, o, q, this.cra, 1, this.nii, this.etr, 1)
                        }
                    }
                }
            }
            if (this.bqe) {
                if (this.gqn()) {
                    p.drawImage(this.bqe, 0, this.uuh, this.bqe.width, this.uuh, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage(this.bqe, 0, 0, this.bqe.width, this.uuh, this.x, this.y, this.width, this.height)
                }
            }
        }
        if (m && this.jrb > 0) {
            f = (this.gqn()) ? 2 : 0;
            c = this.jrb;
            p.font = this.yxa + " " + c + "px " + this.bnn;
            p.fillStyle = this.xnw;
            n = p.measureText(m).width;
            if (n > this.width - 2 * this.mov) {
                e = ((this.width - 2 * this.mov) / n);
                c = Math.round(e * c) - 1;
                p.font = this.yxa + " " + c + "px " + this.bnn
            }
            if (c > this.height / 2 - this.mov) {
                e = ((this.height / 2 - this.mov) / c);
                c = Math.round(e * c) - 1;
                p.font = this.yxa + " " + c + "px " + this.bnn
            }
            k = (this.height / 2 - c) / 2;
            k += c;
            p.fillText(m, this.x + this.width / 2 + this.hwf, this.y - this.mpy + k + f)
        }
        if (this.ikg && this.ikg != "" && this.ygu > 0) {
            g = this.ikg.split("|");
            f = (this.gqn()) ? 2 : 0;
            c = this.ygu;
            p.font = this.yxa + " " + c + "px " + this.bnn;
            p.fillStyle = this.usi;
            for (var j = 0; j < g.length; j++) {
                n = (p.measureText(g[j]).width > n) ? p.measureText(g[j]).width : n
            }
            if (n > this.width - 2 * this.mov) {
                e = ((this.width - 2 * this.mov) / n);
                c = Math.round(e * c) - 1;
                p.font = this.yxa + " " + c + "px " + this.bnn
            }
            if (this.jrb > 0) {
                if (c * g.length > this.height / 2 - this.mov) {
                    e = ((this.height / 2 - this.mov) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.yxa + " " + c + "px " + this.bnn
                }
                k = this.height / 2 + (this.height / 2 - c * g.length) / 2
            } else {
                if (c * g.length > this.height - 2 * this.mov) {
                    e = ((this.height - 2 * this.mov) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.yxa + " " + c + "px " + this.bnn
                }
                k = (this.height - c * g.length) / 2
            }
            k += c;
            for (var j = 0; j < g.length; j++) {
                p.fillText(g[j], this.x + this.width / 2 + this.hwf, this.y - this.vly + k + f);
                k += c
            }
        }
        p.restore();
        if (this.evc && this.hlo) {
            this.evc.drawImage(this.hlo, this.x, this.y)
        }
    };
    this.rsf = function() {
        if (!a.wjc) {
            a.faw(!a.xal)
        }
    };
    this.ugg = function() {
        a.ssb = false
    };
    this.urm = function() {
        a.zyp = false;
        if (a.aod()) {
            a.parent.xgz(a.x, a.y, a.width, a.height)
        }
    }
}
yxf.prototype = new yoq;

function wyv() {
    this.yas = 0;
    this.rxi = [];
    this.fbq = function(a, c, b) {
        wyv.prototype.fbq.call(this, a, c, b);
        this.yas = 0;
        this.rxi = []
    };
    this.lmi = function(a, b) {
        if (b && b === true) {
            this.rxi.unshift(a)
        } else {
            this.rxi.push(a)
        }
    };
    this.agr = function(a) {
        if (a && a === true) {
            this.rxi.shift()
        } else {
            this.rxi.pop()
        }
    };
    this.jom = function(a) {
        this.yas = a
    };
    this.qgq = function() {
        return this.yas
    };
    this.xgz = function() {
        if (!this.aod() || !this.parent.avk()) {
            return
        }
        if (this.yas < this.rxi.length) {
            this.rxi[this.yas].xgz()
        }
        try {
            if (this.evc && this.hlo) {
                this.evc.drawImage(this.hlo, this.x, this.y)
            }
        } catch (a) {}
    }
}
wyv.prototype = new noe;

function pkx() {
    var a = this;
    this.tjx = null;
    this.yas = 0;
    this.rxi = [];
    this.cra = null;
    this.lci = null;
    this.qml = null;
    this.osb = new dho();
    this.fbq = function(b, d, c) {
        pkx.prototype.fbq.call(this, b, d, c);
        this.otq = false;
        this.yas = 0;
        this.rxi = [];
        this.lsb()
    };
    this.lsb = function() {
        this.tjx = new itm();
        this.tjx.fbq();
        this.tjx.kbh("buttons")
    };
    this.wez = function(f) {
        try {
            var d = this.tjx.nlq("buttons"),
                c = 0,
                b = d.length;
            this.osb = f.btq;
            for (; c < b; c++) {
                d[c].wez(f.ufm)
            }
            this.tjx.fdt("return", "#mya", [f.scr]);
            this.tjx.fdt("page", "#mya", [f.jxf]);
            this.tjx.fdt("prev", "#mya", [f.phb]);
            this.tjx.fdt("next", "#mya", [f.rld])
        } catch (g) {
            console.error(g)
        }
    };
    this.goa = function(d) {
        try {
            var f = this.tjx.nlq("buttons");
            this.cra = d.backgroundColor;
            this.lci = d.cls;
            this.qml = d.poj;
            for (var c = 0, b = f.length; c < b; c++) {
                f[c].goa((this.parent.ekl.xzx === false) ? d.hpn : (this.parent.ily === kit.ekl.xtd) ? d.sks : d.zal)
            }
        } catch (g) {
            console.error(g)
        }
    };
    this.fwl = function(m, l) {
        var k = this.tjx.nlq("buttons"),
            g = this.tjx.fei("return"),
            c = m - this.x,
            n = l - this.y;
        for (var e = 0, f = k.length; e < f; e++) {
            var b = k[e];
            if (c >= b.x && c <= b.x + b.width && n >= b.y && n <= b.y + b.height && b.aod() == true) {
                if (b.vka() && !b.wob()) {
                    if (b != g) {
                        b.dan(true, true)
                    }
                    this.parent.qug.qyk("btn");
                    this.parent.qug.eze("btn");
                    b.ncb();
                    for (var d = 0; d < f; d++) {
                        k[d].awu(true)
                    }
                    return true
                }
            }
        }
        return false
    };
    this.qua = function() {
        var e = this.tjx.nlq("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.gqn() === true) {
                c.dan(false, true);
                return true
            }
        }
        return false
    };
    this.xba = function(k) {
        var g = this.tjx.nlq("buttons"),
            c = this.tjx.fei("return");
        for (var f = 0, b = g.length; f < b; f++) {
            var d = g[f];
            if (k == d.uvs) {
                if (d.vka() && !d.wob()) {
                    if (d != c) {
                        d.dan(true, true)
                    }
                    this.parent.qug.qyk("btn");
                    this.parent.qug.eze("btn");
                    d.ncb();
                    for (var e = 0; e < b; e++) {
                        g[e].awu(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.hrl = function() {
        var e = this.tjx.nlq("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.gqn() === true) {
                c.dan(false, true);
                return true
            }
        }
        return false
    };
    this.lmi = function(b, c) {
        if (c && c === true) {
            this.rxi.unshift(b);
            this.yas++
        } else {
            this.rxi.push(b)
        }
    };
    this.agr = function(b) {
        if (b && b === true) {
            this.rxi.shift();
            this.yas--
        } else {
            this.rxi.pop()
        }
    };
    this.rcc = function() {
        return this.rxi.length
    };
    this.coa = function(e, c, b) {
        var d = (this.parent.ekl.xzx === false) ? c.hpn : (this.parent.ily === kit.ekl.xtd) ? c.sks : c.zal;
        if (this.parent.rka === false) {
            this.tjx.dcj("return", this.nvt(e.scr, this.parent.language.ret, (this.parent.ekl.xbh === false) ? b : this.parent.qug.uyv("btn_re"), this.mvs, (this.parent.mum.nwq) ? this.parent.mum.nwq : null, e.ufm, d), ["buttons"]);
            this.tjx.dcj("page", this.nvt(e.jxf, (this.yas + 1) + "/" + this.rxi.length, b, this.fsq, null, e.ufm, d), ["buttons"]);
            this.tjx.dcj("prev", this.nvt(e.phb, this.parent.language.gdd, (this.parent.ekl.xbh === false) ? b : this.parent.qug.uyv("btn_pr"), this.xfu, (this.parent.mum.nxt) ? this.parent.mum.nxt : null, e.ufm, d), ["buttons"]);
            this.tjx.dcj("next", this.nvt(e.rld, this.parent.language.vpp, (this.parent.ekl.xbh === false) ? b : this.parent.qug.uyv("btn_ne"), this.fsq, (this.parent.mum.twg) ? this.parent.mum.twg : null, e.ufm, d), ["buttons"])
        }
    };
    this.nvt = function(g, j, b, i, d, f, e) {
        var c = new yxf();
        c.fbq(g, this.context2D, null, b, null, j);
        c.parent = this;
        c.ncb = i;
        c.wez(f);
        c.goa(e);
        if (d) {
            c.uvs = d.bgt
        }
        return c
    };
    this.xgz = function(l, j, m, e) {
        if (!this.aod() || !this.parent.avk()) {
            return
        }
        var b = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = null,
            g = this.tjx.nlq("buttons"),
            d = null;
        if (this.parent.ekl.xzx === false) {
            d = this.parent.qug.uyv("btn_back")
        } else {
            if (this.parent.ily === kit.ekl.xtd) {
                d = (this.parent.qug.uyv("h_right" + this.yas) != null) ? this.parent.qug.uyv("h_right" + this.yas) : this.parent.qug.uyv("h_right")
            } else {
                d = (this.parent.qug.uyv("h_left" + this.yas) != null) ? this.parent.qug.uyv("h_left" + this.yas) : this.parent.qug.uyv("h_left")
            }
        }
        n.save();
        if (b) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        if (this.yas >= 0 && this.yas < this.rxi.length) {
            this.rxi[this.yas].xgz()
        }
        if (d) {
            k = n.createLinearGradient(this.osb.x, this.osb.y, this.osb.x + this.osb.width, this.osb.y);
            k.addColorStop(0.2, this.lci);
            k.addColorStop(1, this.qml);
            n.fillStyle = k;
            n.save();
            if (this.parent.ekl.xzx === false) {
                if (this.parent.ily === kit.ekl.hai) {
                    n.translate(this.osb.width / 2, this.osb.height / 2);
                    n.rotate(Math.PI);
                    n.translate(-this.osb.width / 2, -this.osb.height / 2)
                }
                n.fillRect(this.osb.x, this.osb.y, this.osb.width, this.osb.height)
            }
            n.drawImage(d, this.osb.x, this.osb.y, this.osb.width, this.osb.height);
            n.restore()
        } else {
            if (this.cra != null) {
                n.fillStyle = this.cra;
                n.fillRect(this.osb.x, this.osb.y, this.osb.width, this.osb.height)
            }
        }
        for (var c = 0, f = g.length; c < f; c++) {
            g[c].xgz()
        }
        n.restore();
        if (this.evc && this.hlo) {
            if (b) {
                this.evc.drawImage(this.hlo, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.evc.drawImage(this.hlo, this.x, this.y)
            }
        }
    };
    this.buz = function(f, g) {
        var e = this.tjx.fei("page"),
            c = this.tjx.fei("return"),
            b = this.tjx.fei("next"),
            d = this.tjx.fei("prev");
        if (e != null) {
            e.yya((this.yas + 1) + "/" + this.rxi.length)
        }
        if (c != null) {
            c.dwr(f)
        }
        if (b != null && d != null && e != null) {
            if (f) {
                if (this.rxi.length > 1) {
                    b.dwr(f);
                    d.dwr(f);
                    e.dwr(f)
                } else {
                    b.dwr(false);
                    d.dwr(false);
                    e.dwr(false)
                }
            } else {
                b.dwr(f);
                d.dwr(f);
                e.dwr(f)
            }
        }
        if (g && g === true) {
            this.xgz()
        }
    };
    this.wyc = function() {
        this.yas = 0;
        this.buz(true);
        this.dwr(true, true)
    };
    this.yen = function() {
        this.buz(false);
        this.dwr(false, true)
    };
    this.cxx = function() {
        var d = this.tjx.fei("page"),
            b = this.tjx.fei("next"),
            c = this.tjx.fei("prev");
        this.yas = (this.yas < this.rxi.length) ? this.yas : this.rxi.length - 1;
        this.yas = (this.yas < 0) ? 0 : this.yas;
        d.yya((this.yas + 1) + "/" + this.rxi.length, true);
        if (this.rxi.length == 1) {
            b.dwr(false);
            c.dwr(false);
            d.dwr(false)
        } else {
            b.dwr(true);
            c.dwr(true);
            d.dwr(true)
        }
    };
    this.zdr = function(c) {
        var e = this.tjx.nlq("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            e[d].vba(c)
        }
    };
    this.mvs = function() {
        a.parent.rcg()
    };
    this.fsq = function() {
        var b = a.tjx.fei("page");
        if (a.yas < a.rxi.length - 1) {
            a.yas++
        } else {
            a.yas = 0
        }
        if (b) {
            b.yya((a.yas + 1) + "/" + a.rxi.length, false)
        }
        a.xgz()
    };
    this.xfu = function() {
        var b = a.tjx.fei("page");
        if (a.yas > 0) {
            a.yas--
        } else {
            a.yas = a.rxi.length - 1
        }
        if (b) {
            b.yya((a.yas + 1) + "/" + a.rxi.length, false)
        }
        a.xgz()
    }
}
pkx.prototype = new noe;

function vmi() {
    this.bqe = new Image();
    this.vwd = null;
    this.nws = [];
    this.fwd = [];
    this.rut = null;
    this.bnn = null;
    this.yxa = "bold";
    this.pnd = null;
    this.usi = null;
    this.box = null;
    this.erd = 0;
    this.ssc = [];
    this.jma = null;
    this.dxo = 40;
    this.phy = 18;
    this.owr = 1;
    this.fbq = function(b, d, c, a) {
        this.bqe = a;
        this.nws = [];
        this.ssc = [];
        vmi.prototype.fbq.call(this, b, d, c)
    };
    this.wez = function(a) {
        try {
            this.jma = a.xka;
            this.ssc = a.luy;
            this.phy = a.fontSize;
            this.dxo = a.fip;
            this.owr = a.lineWidth
        } catch (b) {
            console.error(b)
        }
    };
    this.goa = function(a) {
        try {
            this.rut = a.wdy;
            this.bnn = a.font;
            this.yxa = a.gas;
            this.pnd = a.ogn;
            this.usi = a.lkk;
            this.box = a.xja
        } catch (b) {
            console.error(b)
        }
    };
    this.xgz = function() {
        if (!this.aod()) {
            return
        }
        var b = this.context2D;
        b.save();
        b.fillStyle = this.usi;
        if (this.pnd) {
            b.strokeStyle = this.pnd
        }
        b.lineJoin = "round";
        b.lineCap = "round";
        b.lineWidth = this.owr;
        b.font = this.yxa + " " + this.phy + "px " + this.bnn;
        b.textBaseline = "bottom";
        b.textAlign = "center";
        b.drawImage(this.bqe, 0, 0);
        if ((this.height - this.bqe.height) > 0) {
            var a = this.parent.osb;
            b.drawImage(this.bqe, a.x, a.y, a.width, this.bqe.height - a.y, a.x, a.y, a.width, a.height)
        }
        if (this.vwd && this.jma) {
            kit.vcj.bom(b, this.vwd, this.box, this.jma.x, this.jma.y, this.jma.width, this.jma.height, this.rut, this.dxo, this.yxa)
        }
        for (var c = 0; c < this.nws.length; c++) {
            this.hoi(this.nws[c], this.ssc[c], this.phy, this.bnn)
        }
        b.restore();
        if (this.evc && this.hlo) {
            this.evc.drawImage(this.hlo, this.x, this.y)
        }
    };
    this.hwt = function(j, f, g, d) {
        var b = this.context2D,
            c = 0;
        this.fwd = [];
        b.save();
        b.font = this.yxa + " " + g + "px " + d;
        this.osw(b, g, j, f, d);
        for (var e = 0, a = this.fwd.length; e < a; e++) {
            c = (f.height + this.erd) / (this.fwd.length + 1) * (e + 1);
            b.fillText(this.fwd[e], (f.x), f.y + c);
            if (this.pnd != null && b.lineWidth >= 1) {
                b.strokeText(this.fwd[e], (f.x), f.y + c)
            }
        }
        b.restore()
    };
    this.hoi = function(g, e, f, c) {
        var a = this.context2D,
            b = 0;
        this.fwd = [];
        a.save();
        a.font = this.yxa + " " + f + "px " + c;
        this.osw(a, f, g, e, c);
        for (var d = 0; d < this.fwd.length; d++) {
            b = (e.height + this.erd) / (this.fwd.length + 1) * (d + 1);
            a.fillText(this.fwd[d], (e.x + e.width / 2), e.y + b);
            if (this.pnd != null && a.lineWidth >= 1) {
                a.strokeText(this.fwd[d], (e.x + e.width / 2), e.y + b)
            }
        }
        a.restore()
    };
    this.osw = function(m, o, l, g, b) {
        var a = 1,
            k = 0,
            j = "",
            f = 0,
            d = 0,
            c = 0,
            n = 0;
        n = m.measureText(l).width / g.width;
        n = (n >= Math.round(n)) ? Math.round(n) + 1 : Math.round(n);
        this.erd = o;
        if (this.erd * n > g.height) {
            a = g.height / (this.erd * n);
            this.erd = Math.round(a * this.erd) - 1;
            m.font = this.yxa + " " + this.erd + "px " + b;
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
                this.fwd[d] = l.substring(c, l.length)
            } else {
                if (l.charAt(e) == "|") {
                    this.fwd[d] = l.substring(c, e);
                    d++;
                    c = e + 1;
                    j = l.substring(f + 1, e)
                } else {
                    if (k >= g.width) {
                        this.fwd[d] = l.substring(c, f);
                        d++;
                        c = f + 1;
                        j = l.substring(f + 1, e)
                    }
                }
            }
        }
    }
}
vmi.prototype = new noe;

function fnr() {
    var a = this;
    this.bqe = new Image();
    this.lmt = "";
    this.vdt = "";
    this.pfj = -1;
    this.mnq = 0;
    this.vho = 0;
    this.xey = 5000;
    this.bnn = null;
    this.yxa = "bold";
    this.usi = null;
    this.cra = null;
    this.vpe = null;
    this.rgy = 0;
    this.asl = 0;
    this.mov = 0;
    this.etr = 0;
    this.mgv = 0;
    this.phy = 0;
    this.hiz = null;
    this.lul = 0;
    this.xdn = [];
    this.ygf = 0;
    this.ofi = true;
    this.zru = 0;
    this.wez = function(b) {
        try {
            this.phy = b.fontSize;
            this.mgv = b.dxd;
            this.rgy = b.txi;
            this.asl = b.kfj;
            this.mov = b.qsg;
            this.etr = b.ylx
        } catch (c) {
            console.error(c)
        }
    };
    this.goa = function(b) {
        try {
            this.bnn = b.font;
            this.yxa = b.gas;
            this.cra = b.backgroundColor;
            this.usi = b.lkk;
            this.vpe = b.borderColor
        } catch (c) {
            console.error(c)
        }
    };
    this.sho = function(e, c, d, b) {
        this.lmt = e;
        this.vdt = c;
        this.pfj = d;
        this.mnq = b;
        this.ofi = true;
        clearTimeout(this.zru);
        if (this.aod() === true) {
            this.parent.xgz(this.x, this.y, this.width, this.height)
        }
    };
    this.xjj = function(b, c) {
        this.lmt = b;
        this.vdt = undefined;
        this.ofi = c;
        if (this.ofi) {
            clearTimeout(this.zru)
        }
        if (this.aod() === true) {
            this.parent.xgz(this.x, this.y, this.width, this.height)
        }
    };
    this.ick = function() {
        this.lmt = "";
        this.vdt = undefined;
        this.ofi = true;
        clearTimeout(this.zru);
        if (this.aod() === true) {
            this.parent.xgz(this.x, this.y, this.width, this.height)
        }
    };
    this.nvi = function(b, c) {
        this.lul = 0;
        this.ygf = b;
        this.ofi = false;
        if (c && c > 0) {
            this.zru = setTimeout(this.zah, c)
        } else {
            this.zru = setTimeout(this.zah, this.xey)
        }
    };
    this.fnv = function(b) {
        this.lul = 0;
        this.ygf = b;
        if (this.ofi) {
            this.xjj(this.xdn[this.ygf][this.lul], false)
        }
        this.ofi = false;
        this.zru = setTimeout(this.zah, this.xey)
    };
    this.swa = function() {
        this.ofi = false;
        this.zru = setTimeout(this.zah, this.xey)
    };
    this.nnc = function() {
        this.ofi = true;
        clearTimeout(this.zru)
    };
    this.bga = function() {
        return this.ofi
    };
    this.zah = function() {
        if (!a.ofi) {
            a.lul = (a.xdn[a.ygf][a.lul + 1] != undefined) ? a.lul + 1 : 0;
            a.zru = setTimeout(a.zah, a.xey);
            a.xjj(a.xdn[a.ygf][a.lul], a.ofi)
        }
    };
    this.xzh = function(b) {
        this.xdn[b] = []
    };
    this.qaz = function(d, b) {
        for (var c = 0; c < d.length; c++) {
            this.xdn[b][c] = d[c]
        }
    };
    this.xtj = function(b) {
        this.hiz = b
    };
    this.xgz = function() {
        if (!this.aod()) {
            return
        }
        var o = this.context2D,
            m = this.phy,
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
            q = (this.vpe && this.etr) ? this.mov + this.etr : this.mov;
        o.save();
        if (this.cra) {
            kit.vcj.cjl(o, this.x, this.y, this.width, this.height, this.rgy, this.cra, this.vpe, this.etr)
        } else {
            if (this.hiz) {
                o.putImageData(this.hiz, this.x, this.y)
            }
        }
        o.lineJoin = "round";
        o.lineCap = "round";
        o.fillStyle = this.usi;
        o.font = this.yxa + " " + m + "px " + this.bnn;
        o.textBaseline = "bottom";
        o.textAlign = "center";
        l = o.measureText(this.lmt).width;
        b += l;
        n = o.measureText("WW").width;
        if (this.vdt != undefined && this.pfj >= 0) {
            j = o.measureText(this.vdt).width;
            b += j;
            b += this.mnq * (this.bqe.width + this.asl);
            if (this.mnq % 2 != 0) {
                s = this.x + (this.width) / 2 - (this.mnq / 2) * (this.bqe.width + this.asl);
                x = s - n;
                e = s + (this.mnq) * (this.bqe.width + this.asl) + n
            } else {
                s = this.x + (this.width) / 2 - (this.mnq / 2) * (this.bqe.width) - (this.mnq - 1) / 2 * this.asl;
                x = s - n;
                e = s + (this.mnq) * (this.bqe.width) + (this.mnq - 1) * this.asl + n
            }
            for (var u = 0; u < this.mnq; u++) {
                o.drawImage(this.bqe, 0, this.vho * this.pfj, this.bqe.width, this.vho, s + (u * (this.asl + this.bqe.width)), this.y + ((this.height - this.vho) / 2), this.bqe.width, this.vho)
            }
            o.textAlign = "right";
            o.fillText(this.lmt, x, this.y + m + this.mgv);
            o.textAlign = "left";
            o.fillText(this.vdt, e, this.y + m + this.mgv)
        } else {
            if (this.lmt != undefined) {
                do {
                    if (g.length > 1) {
                        m -= 2;
                        o.font = this.yxa + " " + m + "px " + this.bnn
                    }
                    g = [];
                    d = "";
                    v = 0;
                    y = 0;
                    t = 0;
                    for (var p = t; p < this.lmt.length; p++) {
                        d += this.lmt.charAt(p);
                        k = o.measureText(d).width;
                        if ((this.lmt.charAt(p) == " ") || (this.lmt.charAt(p) == "|")) {
                            v = p
                        }
                        if (p == this.lmt.length - 1) {
                            g[y] = this.lmt.substring(t, this.lmt.length)
                        } else {
                            if (this.lmt.charAt(p) == "|") {
                                g[y] = this.lmt.substring(t, v);
                                y++;
                                t = v + 1;
                                d = this.lmt.substring(v + 1, p)
                            } else {
                                if (k >= this.width - 2 * q) {
                                    g[y] = this.lmt.substring(t, v);
                                    y++;
                                    t = v + 1;
                                    d = this.lmt.substring(v + 1, p)
                                }
                            }
                        }
                    }
                } while (g.length > 2);
                if (g.length > 1 && m == this.phy) {
                    o.font = this.yxa + " " + (m - 3) + "px " + this.bnn;
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
fnr.prototype = new noe;

function mia() {
    this.gwe = null;
    this.tjc = null;
    this.dqe = null;
    this.jhr = false;
    this.fol = false;
    this.qyq = true;
    this.alz = false;
    this.nav = false;
    this.dth = 0;
    this.sgl = 0;
    this.sas = 0;
    this.kss = "";
    this.roc = "";
    this.lci = null;
    this.qml = null;
    this.bnn = "arial";
    this.yxa = "bold";
    this.csv = "arial";
    this.rgn = "rgb(0,0,200)";
    this.dyo = "rgb(255,255,255)";
    this.hwo = "rgb(0,0,150)";
    this.cra = "rgb(220,240,255)";
    this.dcp = "rgb(130,220,255)";
    this.abx = "rgb(130,190,255)";
    this.usi = "rgb(255,255,255)";
    this.kco = "rgb(130,190,255)";
    this.wlk = "rgb(100,160,255)";
    this.djf = "rgb(255,255,255)";
    this.osb = new dho();
    this.jma = null;
    this.ryo = null;
    this.umm = null;
    this.ghs = null;
    this.ghe = null;
    this.hlq = null;
    this.nrj = null;
    this.fgr = null;
    this.etr = 2;
    this.ook = 3;
    this.cjw = 10;
    this.mgv = 3;
    this.hwf = 5;
    this.xar = 36;
    this.phy = 30;
    this.fux = 22;
    this.fbq = function(a, c, b) {
        mia.prototype.fbq.call(this, a, c, b);
        this.alz = kit.fng.value37
    };
    this.bih = function(b) {
        try {
            var a = (kit.fng.value37) ? b.kro : b.fll;
            this.jma = b.xka;
            this.ryo = b.nel;
            this.umm = b.sug;
            this.ghs = b.fbb;
            this.ghe = b.vdf;
            this.hlq = b.hli;
            this.osb = b.btq;
            this.xar = b.pqq;
            this.phy = b.fontSize;
            this.fux = b.toj;
            this.mgv = b.dxd;
            this.hwf = b.nib;
            this.etr = b.ylx;
            this.ook = b.pve;
            this.cjw = b.joe;
            if (kit.fng.value36) {
                this.roc = this.parent.dcq(this.parent.language.zrz)
            } else {
                if (kit.fng.value37) {
                    this.roc = this.parent.dcq(this.parent.language.umw)
                }
            }
            this.gwe = [];
            this.tjc = this.nvt(a.voa, this.parent.language.ret, this.parent.dgo, (this.parent.ekl.xbh === false) ? this.parent.qug.uyv("btn") : this.parent.qug.uyv("btn_re"), b.ufm);
            this.gwe.push(this.tjc);
            if (kit.fng.value37) {
                this.dqe = this.nvt(a.scr, this.parent.language.ezg, this.parent.ljb, (this.parent.ekl.xbh === false) ? this.parent.qug.uyv("btn") : this.parent.qug.uyv("btn_e"), b.ufm);
                this.gwe.push(this.dqe)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.wez = function(b) {
        try {
            var a = (kit.fng.value37) ? b.kro : b.fll;
            this.jma = b.xka;
            this.ryo = b.nel;
            this.umm = b.sug;
            this.ghs = b.fbb;
            this.ghe = b.vdf;
            this.hlq = b.hli;
            this.osb = b.btq;
            if (this.tjc) {
                this.tjc.mya(a.voa);
                this.tjc.wez(b.ufm)
            }
            if (this.dqe) {
                this.dqe.mya(a.scr);
                this.dqe.wez(b.ufm)
            }
            this.xar = b.pqq;
            this.phy = b.fontSize;
            this.fux = b.toj;
            this.mgv = b.dxd;
            this.hwf = b.nib;
            this.etr = b.ylx;
            this.ook = b.pve;
            this.cjw = b.joe
        } catch (c) {
            console.error(c)
        }
    };
    this.goa = function(c) {
        try {
            this.bnn = c.font;
            this.yxa = c.gas;
            this.rgn = c.rnk;
            this.dyo = c.qan;
            this.hwo = c.xox;
            this.cra = c.backgroundColor;
            this.dcp = c.jwc;
            this.abx = c.lmn;
            this.usi = c.lkk;
            this.kco = c.bmd;
            this.wlk = c.zua;
            this.djf = c.wko;
            this.lci = c.cls;
            this.qml = c.poj;
            for (var b = 0, a = this.gwe.length; b < a; b++) {
                this.gwe[b].goa((this.parent.ekl.xzx === true) ? c.ene : c.hpn)
            }
        } catch (d) {
            console.error(d)
        }
    };
    this.fwl = function(d, k) {
        var c = d - this.x,
            g = k - this.y;
        for (var f = 0, b = this.gwe.length; f < b; f++) {
            var a = this.gwe[f];
            if (c >= a.x && c <= a.x + a.width && g >= a.y && g <= a.y + a.height && a.aod() === true) {
                if (a.vka() === true && a.wob() === false && this.qyq) {
                    a.dan(true, true);
                    this.parent.qug.qyk("btn");
                    this.parent.qug.eze("btn");
                    a.ncb();
                    for (var e = 0; e < b; e++) {
                        this.gwe[e].awu(true)
                    }
                    return true
                }
            }
        }
        if (c >= this.hlq.x && c <= this.hlq.x + this.hlq.width && g >= this.hlq.y && g <= this.hlq.y + this.hlq.height && this.alz && this.fol) {
            this.adw()
        }
        return true
    };
    this.qua = function() {};
    this.xba = function() {};
    this.hrl = function() {};
    this.nvt = function(d, f, e, a, c) {
        var b = new yxf();
        b.fbq(d, this.context2D, null, a, null, f);
        b.parent = this;
        b.ncb = e;
        b.wez(c);
        return b
    };
    this.zdr = function(c) {
        this.fol = c;
        for (var b = 0, a = this.gwe.length; b < a; b++) {
            this.gwe[b].vba(c)
        }
    };
    this.adw = function() {
        this.qyq = !this.qyq;
        this.parent.xgz()
    };
    this.kdv = function(d, a, c, b) {
        this.nav = false;
        this.jpd = true;
        this.kss = this.cue(b);
        this.dth = d;
        this.sgl = a;
        this.sas = c;
        if (this.aod()) {
            this.zdr(true);
            this.xgz()
        }
    };
    this.cue = function(b) {
        var d = Math.floor(b / 3600000);
        b = b - d * 3600000;
        var a = Math.floor(b / 60000);
        b = b - a * 60000;
        var c = Math.floor(b / 1000);
        return this.vbb(d) + ":" + this.vbb(a) + ":" + this.vbb(c)
    };
    this.vbb = function(a) {
        if (a < 10) {
            return "0" + a
        }
        return a
    };
    this.vao = function(a, b) {
        this.nav = a;
        if (b && b === true) {
            this.xgz()
        }
    };
    this.dwr = function(a, b) {
        this.jpd = false;
        if (kit.fng.value37) {
            this.qyq = false
        }
        this.vao(a, false);
        mia.prototype.dwr.call(this, a, b)
    };
    this.xgz = function(j, f, k, d) {
        if (!this.aod() || !this.parent.avk()) {
            return
        }
        var a = (j != null && f != null && k != null && d != null),
            g = null,
            l = this.context2D,
            c = this.parent.qug.uyv("btn_back");
        l.save();
        if (a) {
            l.beginPath();
            l.rect(j, f, k, d);
            l.closePath();
            l.clip()
        }
        l.fillStyle = this.cra;
        l.fillRect(0, 0, this.width, this.height);
        if (c) {
            g = l.createLinearGradient(this.osb.x, this.osb.y, this.osb.x + this.osb.width, this.osb.y);
            g.addColorStop(0.2, this.lci);
            g.addColorStop(1, this.qml);
            l.fillStyle = g;
            l.save();
            if (this.parent.ily === kit.ekl.hai) {
                l.translate(this.osb.width / 2, this.osb.height / 2);
                l.rotate(Math.PI);
                l.translate(-this.osb.width / 2, -this.osb.height / 2)
            }
            l.fillRect(this.osb.x, this.osb.y, this.osb.width, this.osb.height);
            l.drawImage(c, this.osb.x, this.osb.y, this.osb.width, this.osb.height);
            l.restore()
        } else {
            if (this.parent.ekl.xzx === true) {
                kit.vcj.zrw(l, this.osb.x, this.osb.y, this.osb.width, this.osb.height, this.lci, 1)
            }
        }
        kit.vcj.cjl(l, this.jma.x, this.jma.y, this.jma.width, this.jma.height, 0, this.dcp);
        kit.vcj.bom(l, this.roc, this.usi, this.jma.x, this.jma.y + this.mgv, this.jma.width, this.jma.height, this.bnn, this.xar, this.yxa);
        kit.vcj.cjl(l, this.ryo.x, this.ryo.y, this.ryo.width, this.ryo.height, 0, this.dcp);
        if (kit.fng.value36) {
            kit.vcj.enf(l, this.parent.dcq(this.parent.language.nol), this.usi, this.ryo.x, this.ryo.y + this.mgv, this.ryo.width, this.ryo.height, this.bnn, this.phy, this.yxa, this.hwf)
        } else {
            if (kit.fng.value37) {
                kit.vcj.enf(l, this.parent.dcq(this.parent.language.tmu), this.usi, this.ryo.x, this.ryo.y + this.mgv, this.ryo.width, this.ryo.height, this.bnn, this.phy, this.yxa, this.hwf)
            }
        }
        kit.vcj.cjl(l, this.umm.x, this.umm.y, this.umm.width, this.umm.height, 0, this.abx);
        kit.vcj.enf(l, this.parent.dcq(this.parent.language.tqd), this.usi, this.umm.x, this.umm.y + this.mgv, this.umm.width, this.umm.height, this.bnn, this.phy, this.yxa, this.hwf);
        kit.vcj.cjl(l, this.ghs.x, this.ghs.y, this.ghs.width, this.ghs.height, 0, this.dcp);
        kit.vcj.enf(l, this.parent.dcq(this.parent.language.hwj), this.usi, this.ghs.x, this.ghs.y + this.mgv, this.ghs.width, this.ghs.height, this.bnn, this.phy, this.yxa, this.hwf);
        if (this.alz) {
            this.eti(l)
        }
        if (this.jpd) {
            if (kit.fng.value36) {
                kit.vcj.cxi(l, this.dth, this.usi, this.ryo.x, this.ryo.y + this.mgv, this.ryo.width, this.ryo.height, this.bnn, this.phy, this.yxa, this.hwf)
            } else {
                if (kit.fng.value37) {
                    kit.vcj.cxi(l, this.kss, this.usi, this.ryo.x, this.ryo.y + this.mgv, this.ryo.width, this.ryo.height, this.bnn, this.phy, this.yxa, this.hwf)
                }
            }
            kit.vcj.cxi(l, this.parent.ywx(this.sgl), this.usi, this.umm.x, this.umm.y + this.mgv, this.umm.width, this.umm.height, this.bnn, this.phy, this.yxa, this.hwf);
            kit.vcj.cxi(l, this.parent.ywx(this.sas), this.usi, this.ghs.x, this.ghs.y + this.mgv, this.ghs.width, this.ghs.height, this.bnn, this.phy, this.yxa, this.hwf)
        }
        for (var b = 0, e = this.gwe.length; b < e; b++) {
            this.gwe[b].xgz()
        }
        if (this.nav) {
            kit.vcj.iwj(l, this.ghe.x, this.ghe.y, this.ghe.width, this.ghe.height, this.ook, this.rgn, 0.3, this.hwo, this.etr, 1);
            kit.vcj.bom(l, this.parent.dcq(this.parent.language.gpg), this.dyo, this.ghe.x, this.ghe.y, this.ghe.width, this.ghe.height, this.bnn, this.phy, this.yxa)
        }
        l.restore();
        if (this.evc && this.hlo) {
            if (a) {
                this.evc.drawImage(this.hlo, j, f, k, d, this.x + j, this.y + f, k, d)
            } else {
                this.evc.drawImage(this.hlo, this.x, this.y)
            }
        }
    };
    this.eti = function(b) {
        var c = Math.round(this.hlq.height / 2),
            a = Math.round(this.hlq.x + c),
            d = Math.round(this.hlq.y + c / 2);
        b.save();
        kit.vcj.cjl(b, this.hlq.x, this.hlq.y, this.hlq.width, this.hlq.height, this.cjw, this.kco, this.wlk, this.etr);
        kit.vcj.bom(b, this.parent.language.yrf, this.usi, this.hlq.x + this.hlq.height, this.hlq.y, this.hlq.width - this.hlq.height, this.hlq.height, this.bnn, this.fux, this.yxa);
        kit.vcj.zrw(b, a, d, c, c, null, 0, this.djf, this.etr, 1);
        if (this.qyq) {
            kit.vcj.zrw(b, a + c / 4, d + c / 4, c / 2, c / 2, this.djf, 1)
        }
        b.restore()
    }
}
mia.prototype = new noe;

function qyr() {
    var a = this;
    this.ugg = function() {
        a.ssb = false
    };
    this.xgz = function() {
        if (!this.aod()) {
            return
        }
        var b = this.context2D;
        b.save();
        if (this.bqe != null) {
            b.drawImage(this.bqe, 0, 0, this.bqe.width, this.bqe.height, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
qyr.prototype = new yoq;

function pjz() {
    this.vwd = "";
    this.ikg = "";
    this.bqe = null;
    this.rut = "sans-serif";
    this.lca = "sans-serif";
    this.yxa = "bold";
    this.box = null;
    this.usi = null;
    this.vpe = null;
    this.cio = null;
    this.cra = null;
    this.dxo = 16;
    this.ygu = 20;
    this.cfl = 0;
    this.vly = 0;
    this.etr = 2;
    this.nyv = 3;
    this.rln = 3;
    this.kac = 3;
    this.kfa = 3;
    this.fbq = function(a, e, b, d, c) {
        pjz.prototype.fbq.call(this, a, e, b);
        this.vwd = d;
        this.ikg = c
    };
    this.wez = function(a) {
        try {
            this.dxo = a.fip;
            this.ygu = a.ovc;
            this.cfl = a.tnv;
            this.vly = a.gef;
            this.etr = a.ylx;
            this.nyv = a.uku;
            this.rln = a.vls;
            this.kac = a.eyp;
            this.kfa = a.usf
        } catch (b) {
            console.error(b)
        }
    };
    this.goa = function(a) {
        try {
            this.rut = a.wdy;
            this.lca = a.qta;
            this.yxa = a.gas;
            this.box = a.xja;
            this.usi = a.lkk;
            this.vpe = a.borderColor;
            this.cio = a.epw;
            this.cra = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.yya = function(a, b) {
        this.ikg = a;
        if (b && b === true && this.context2D != null && this.aod() === true) {
            this.parent.xgz(this.x, this.y, this.width, this.height)
        }
    };
    this.wrl = function(a, b) {
        this.vwd = a;
        if (b && b === true && this.context2D != null && this.aod() === true) {
            this.parent.xgz(this.x, this.y, this.width, this.height)
        }
    };
    this.xgz = function() {
        if (!this.aod()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.cio) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.vpe);
            b.addColorStop(1, this.cio);
            kit.vcj.cqk(a, this.x, this.y, this.width, this.height, this.nyv, this.rln, this.kac, this.kfa, this.cra, 1, b, this.etr, 1)
        } else {
            kit.vcj.cqk(a, this.x, this.y, this.width, this.height, this.nyv, this.rln, this.kac, this.kfa, this.cra, 1, this.vpe, this.etr, 1)
        }
        if (this.vwd != null) {
            kit.vcj.bom(a, this.vwd, this.box, this.x + this.etr, this.y + this.cfl, this.width - 2 * this.etr, this.height, this.rut, this.dxo, this.yxa)
        }
        if (this.ikg != null) {
            if (this.vwd != null) {
                kit.vcj.bom(a, this.ikg, this.usi, this.x + this.etr, this.y + this.vly, this.width - 2 * this.etr, this.height, this.lca, this.ygu, this.yxa)
            } else {
                kit.vcj.bom(a, this.ikg, this.usi, this.x + this.etr, this.y + this.etr, this.width - 2 * this.etr, this.height, this.lca, this.ygu, this.yxa)
            }
        }
        if (this.bqe) {
            a.drawImage(this.bqe, 0, 0, this.bqe.width, this.bqe.height, this.x + this.etr, this.y + this.etr, this.width - 2 * this.etr, this.height - 2 * this.etr)
        }
        a.restore();
        if (this.evc && this.hlo) {
            this.evc.drawImage(this.hlo, this.x, this.y)
        }
    }
}
pjz.prototype = new noe;

function fcs() {
    this.bqe = new Image();
    this.ikg = "";
    this.apy = true;
    this.bnn = null;
    this.yxa = "bold";
    this.uxg = "red";
    this.jhu = "orange";
    this.pnd = "white";
    this.phy = 40;
    this.hwf = 0;
    this.mgv = 0;
    this.qfg = 0;
    this.poh = 2;
    this.ugi = null;
    this.iaq = 0;
    this.qeg = 0;
    this.fbq = function(a, e, c, b, d) {
        fcs.prototype.fbq.call(this, a, e, c);
        this.bqe = b;
        this.ikg = d
    };
    this.wez = function(a) {
        try {
            this.phy = a.fontSize;
            this.hwf = a.nib;
            this.mgv = a.dxd;
            this.qfg = a.slk;
            this.poh = a.rbl
        } catch (b) {
            console.error(b)
        }
    };
    this.goa = function(a) {
        try {
            this.bnn = a.font;
            this.yxa = a.gas;
            this.uxg = a.swf;
            this.jhu = a.thi;
            this.pnd = a.ogn
        } catch (b) {
            console.error(b)
        }
    };
    this.yya = function(a, b) {
        this.ikg = a;
        if (b && b === true && this.context2D != null) {
            this.dwr(true, true)
        }
    };
    this.ujy = function(a, b) {
        this.ikg = a;
        this.apy = false;
        if (b && b === true && this.context2D != null) {
            this.dwr(true, true)
        }
    };
    this.dwr = function(a, b) {
        this.otq = a;
        if (b && b === true && this.context2D != null) {
            if (this.hlo == null && this.aod()) {
                this.xgz()
            } else {
                if (this.parent != null) {
                    this.parent.xgz(this.x, this.y, this.width, this.height)
                }
            }
        }
    };
    this.mez = function(a, b, c) {
        this.ugi = a;
        this.iaq = b;
        this.qeg = c
    };
    this.xgz = function() {
        if (!this.aod() || !this.parent.avk()) {
            return
        }
        var b = this.context2D,
            c = null,
            a = (this.hlo != null) ? 0 : this.x,
            d = (this.hlo != null) ? 0 : this.y;
        b.save();
        if (this.hlo == null) {
            b.beginPath();
            b.rect(this.x, this.y, this.width, this.height);
            b.closePath();
            b.clip()
        }
        if (this.apy === true) {
            if (this.ugi != null) {
                b.drawImage(this.ugi, this.x + this.iaq, this.y + this.qeg, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            if (this.bqe != null) {
                b.drawImage(this.bqe, a, d)
            }
        }
        c = b.createLinearGradient(a + this.width / 2 + this.hwf, d, a + this.width / 2 + this.hwf, d + this.height);
        c.addColorStop(0, this.uxg);
        c.addColorStop(1, this.jhu);
        kit.vcj.bom(b, this.ikg, c, a + this.qfg + this.hwf, d + this.mgv, this.width - 2 * this.qfg, this.height, this.bnn, this.phy, this.yxa, this.pnd, this.poh);
        b.restore();
        if (this.evc && this.hlo) {
            this.evc.drawImage(this.hlo, this.x, this.y)
        }
    }
}
fcs.prototype = new noe;

function any() {
    var a = this;
    this.state = 0;
    this.mzb = 1;
    this.brk = null;
    this.kgh = null;
    this.ivl = null;
    this.cxr = "round";
    this.bnn = null;
    this.yxa = "bold";
    this.qrv = "center";
    this.cra = null;
    this.usi = null;
    this.law = 1;
    this.nii = null;
    this.phy = 17;
    this.qfg = 2;
    this.rgy = 0;
    this.etr = 1;
    this.oxs = 0;
    this.tnr = 0;
    this.pvu = 0;
    this.wez = function(b) {
        try {
            this.phy = b.fontSize;
            this.qfg = b.slk;
            this.rgy = b.txi;
            this.etr = b.ylx;
            this.pvu = b.nlz
        } catch (c) {
            console.error(c)
        }
    };
    this.goa = function(b) {
        try {
            this.cxr = b.khg;
            this.bnn = b.font;
            this.yxa = b.gas;
            this.qrv = b.textAlign;
            this.cra = b.backgroundColor;
            this.usi = b.lkk;
            this.law = b.nlw;
            if (b.borderColor && b.epw) {
                this.nii = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.nii.addColorStop(0, b.borderColor);
                this.nii.addColorStop(1, b.epw)
            } else {
                this.nii = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.bfw = function() {
        return this.cxr
    };
    this.ozz = function(c, b) {
        this.state = c;
        this.mzb = b
    };
    this.vfh = function(b) {
        this.bqe = b;
        if (this.cxr === "round") {
            this.oxs = this.width / 2 - this.qfg
        }
        if (this.bqe) {
            this.tnr = Math.round(this.bqe.height / (2 * this.mzb))
        }
    };
    this.gbu = function(b) {
        this.state = (b < this.mzb) ? b : this.state
    };
    this.oia = function(b) {
        this.brk = b
    };
    this.ugg = function() {
        a.ssb = false
    };
    this.urm = function() {
        a.zyp = false;
        if (a.aod()) {
            a.parent.xgz(a.x, a.y, a.width, a.height)
        }
    };
    this.xgz = function() {
        if (!this.aod()) {
            return
        }
        var l = this.context2D,
            e = (this.vka()) ? this.law : this.law / 2,
            b = this.phy,
            d = null,
            c = 0,
            k = 0,
            j = 0,
            g = 0;
        l.save();
        if (this.bqe && this.ncb) {
            if (!this.vka()) {
                l.globalAlpha = e
            }
            if (this.cxr === "round") {
                kit.vcj.ljj(l, this.x + this.width / 2, this.y + this.height / 2, this.oxs, this.cra, e * this.law)
            } else {
                if (this.cxr === "rect") {
                    kit.vcj.iwj(l, this.x, this.y, this.width, this.height, this.rgy, this.cra, e * this.law, this.nii, this.etr, e)
                }
            }
            if (this.gqn()) {
                if (this.cxr === "round") {
                    l.drawImage(this.bqe, 0, (this.state * 2 * this.tnr) + this.tnr, this.bqe.width, this.tnr, this.x, this.y, this.width, this.height)
                } else {
                    if (this.cxr === "rect") {
                        l.drawImage(this.bqe, 0, (this.state * 2 * this.tnr) + this.tnr, this.bqe.width, this.tnr, this.x, this.y, this.width, this.height)
                    }
                }
            } else {
                if (this.cxr === "round") {
                    l.drawImage(this.bqe, 0, (this.state * 2 * this.tnr), this.bqe.width, this.tnr, this.x, this.y, this.width, this.height)
                } else {
                    if (this.cxr === "rect") {
                        l.drawImage(this.bqe, 0, (this.state * 2 * this.tnr), this.bqe.width, this.tnr, this.x, this.y, this.width, this.height)
                    }
                }
            }
            if (this.ikg != null) {
                l.textAlign = this.qrv;
                l.textBaseline = "bottom";
                l.font = this.yxa + " " + b + "px " + this.bnn;
                l.fillStyle = this.usi;
                d = this.ikg.split("|");
                j = 0;
                g = (this.qrv === "center") ? this.x + this.width / 2 : (this.qrv === "left") ? this.x + 2 * this.qfg : this.x + this.width - 2 * this.qfg;
                for (var f = 0; f < d.length; f++) {
                    j = (l.measureText(d[f]).width > j) ? l.measureText(d[f]).width : j
                }
                if (j > this.width - 2 * this.qfg) {
                    c = ((this.width - 2 * this.qfg) / j);
                    b = Math.round(c * b) - 1;
                    l.font = this.yxa + " " + b + "px " + this.bnn
                }
                if (b * d.length > this.pvu) {
                    c = ((this.pvu) / (b * d.length));
                    b = Math.round(c * b) - 1;
                    l.font = this.yxa + " " + b + "px " + this.bnn
                }
                k = (this.height - this.qfg - this.pvu) + (this.pvu - b * d.length) / 2;
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
any.prototype = new yoq;

function ttn() {
    var a = this;
    this.cxr = "rect";
    this.gcj = -1;
    this.bnn = null;
    this.yxa = "bold";
    this.cra = null;
    this.ard = null;
    this.iqc = null;
    this.yxn = null;
    this.vpe = null;
    this.usi = null;
    this.tvk = null;
    this.rgy = 3;
    this.hwf = -2;
    this.mgv = 2;
    this.mov = 6;
    this.phy = 26;
    this.etr = 2;
    this.wez = function(b) {
        try {
            this.phy = b.fontSize;
            this.hwf = b.nib;
            this.mgv = b.dxd;
            this.mov = b.qsg;
            this.rgy = b.txi;
            this.etr = b.ylx
        } catch (c) {
            console.error(c)
        }
    };
    this.goa = function(b) {
        try {
            this.bnn = b.font;
            this.yxa = b.gas;
            this.cra = b.backgroundColor;
            this.ard = b.tww;
            this.iqc = b.rjj;
            this.yxn = b.vhr;
            this.vpe = b.borderColor;
            this.usi = b.lkk;
            this.tvk = b.xee;
            this.cxr = b.khg;
            this.gcj = b.cjm
        } catch (c) {
            console.error(c)
        }
    };
    this.bfw = function() {
        return this.cxr
    };
    this.ugg = function() {
        a.ssb = false
    };
    this.urm = function() {
        a.zyp = false;
        if (a.aod()) {
            a.parent.xgz(a.x, a.y, a.width, a.height)
        }
    };
    this.xgz = function() {
        if (!this.aod()) {
            return
        }
        var p = this.context2D,
            l = null,
            n = this.cra,
            m = this.ard,
            b = this.phy,
            f = null,
            d = 0,
            o = 0,
            c = 1,
            k = 0,
            e = (this.gcj == 0 || this.gcj == 3) ? this.rgy : 0;
        lt = (this.gcj == 1 || this.gcj == 3) ? this.rgy : 0;
        rb = (this.gcj == 0 || this.gcj == 2) ? this.rgy : 0;
        lb = (this.gcj == 1 || this.gcj == 2) ? this.rgy : 0;
        h = 0;
        p.save();
        p.lineJoin = "round";
        p.lineCap = "round";
        p.textAlign = "center";
        if (this.gqn()) {
            n = (this.iqc != null) ? this.iqc : n;
            m = (this.yxn != null) ? this.yxn : m
        }
        if (n != null) {
            if (m != null) {
                l = p.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                l.addColorStop(1, m);
                l.addColorStop(0, n);
                if (this.cxr === "rrect") {
                    kit.vcj.cqk(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, l, 1, this.vpe, this.etr, 1)
                } else {
                    if (this.cxr === "rect") {
                        if (this.vpe) {
                            kit.vcj.cjl(p, this.x, this.y, this.width, this.height, this.rgy, l, this.vpe, this.etr)
                        } else {
                            kit.vcj.zrw(p, this.x, this.y, this.width, this.height, l, 1)
                        }
                    } else {
                        if (this.cxr === "triangle") {
                            kit.vcj.flx(p, this.gcj, this.x, this.y, this.width, this.height, this.rgy, l, 1, this.vpe, this.etr, 1)
                        }
                    }
                }
            } else {
                if (this.cxr === "rrect") {
                    kit.vcj.cqk(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, n, 1, this.vpe, this.etr, 1)
                } else {
                    if (this.cxr === "rect") {
                        if (this.vpe) {
                            kit.vcj.cjl(p, this.x, this.y, this.width, this.height, this.rgy, n, this.vpe, this.etr, 1)
                        } else {
                            kit.vcj.zrw(p, this.x, this.y, this.width, this.height, n, 1)
                        }
                    } else {
                        if (this.cxr === "triangle") {
                            kit.vcj.flx(p, this.gcj, this.x, this.y, this.width, this.height, this.rgy, n, 1, this.vpe, this.etr, 1)
                        }
                    }
                }
            }
        }
        if (this.bqe != null) {
            h = this.height - 2 * this.mov;
            p.drawImage(this.bqe, this.x + this.width / 2 - h / 2, this.y + this.mov, h, h)
        }
        if (this.ikg != null) {
            p.textAlign = "center";
            p.textBaseline = "bottom";
            f = this.ikg.split("|");
            d = 0;
            if (this.gqn()) {
                d = 1;
                p.fillStyle = this.tvk
            } else {
                p.fillStyle = this.usi
            }
            p.font = this.yxa + " " + b + "px " + this.bnn;
            for (var g = 0, j = f.length; g < j; g++) {
                o = (p.measureText(f[g]).width > o) ? p.measureText(f[g]).width : o
            }
            if (o > this.width - 2 * this.mov) {
                c = ((this.width - 2 * this.mov) / o);
                b = Math.round(c * b) - 1;
                p.font = this.yxa + " " + b + "px " + this.bnn
            }
            if (b * f.length > this.height) {
                c = ((this.height) / (b * f.length));
                b = Math.round(c * b) - 1;
                p.font = this.yxa + " " + b + "px " + this.bnn
            }
            k = (this.height - b * f.length) / 2;
            k += b;
            for (var g = 0; g < f.length; g++) {
                p.fillText(f[g], (this.x + this.width / 2) + this.hwf, this.y - this.mgv + k + d);
                k += b
            }
        }
        p.restore()
    }
}
ttn.prototype = new yoq;

function wng() {
    var a = this;
    this.ikg = null;
    this.fol = false;
    this.ssb = false;
    this.pal = false;
    this.bnn = null;
    this.yxa = "bold";
    this.qrv = "center";
    this.cra = null;
    this.vpe = null;
    this.usi = null;
    this.uws = "rect";
    this.mfu = new dho();
    this.ihk = new dho();
    this.phy = 16;
    this.rgy = 8;
    this.etr = 1;
    this.udp = 0;
    var b = 200;
    this.fbq = function(c, f, d, e) {
        this.ikg = e;
        wng.prototype.fbq.call(this, c, f, d)
    };
    this.goa = function(c) {
        try {
            this.bnn = c.font;
            this.yxa = c.gas;
            this.qrv = c.textAlign;
            this.cra = c.backgroundColor;
            this.vpe = c.borderColor;
            this.usi = c.lkk;
            this.uws = c.type
        } catch (d) {
            console.error(d)
        }
    };
    this.wez = function(c) {
        try {
            this.mfu = c.luy;
            this.ihk = c.dns;
            this.phy = c.fontSize;
            this.rgy = c.txi;
            this.etr = c.ylx
        } catch (d) {
            console.error(d)
        }
    };
    this.vba = function(c) {
        this.fol = c
    };
    this.vka = function() {
        return this.fol
    };
    this.lbk = function(c, d) {
        this.pal = c;
        if (d && d === true) {
            this.parent.xgz(this.x, this.y, this.width, this.height)
        }
    };
    this.jjl = function() {
        return this.pal
    };
    this.yya = function(c, d) {
        this.ikg = c;
        if (d && d === true && this.aod()) {
            this.parent.xgz(this.x, this.y, this.width, this.height)
        }
    };
    this.awu = function(c, d) {
        this.ssb = c;
        d = (d === false) ? false : true;
        clearTimeout(this.udp);
        if (this.ssb === true && d === true) {
            this.udp = setTimeout(this.ugg, b)
        }
    };
    this.wob = function() {
        return this.ssb
    };
    this.ugg = function() {
        a.ssb = false
    };
    this.xgz = function() {
        if (!this.aod()) {
            return
        }
        var c = this.context2D;
        c.save();
        kit.vcj.cjl(c, this.x, this.y, this.width, this.height, this.rgy, this.cra, this.vpe, this.etr);
        if (this.uws === "rect") {
            kit.vcj.zrw(c, this.x + this.ihk.x, this.y + this.ihk.y, this.ihk.width, this.ihk.height, this.usi, 0.2, this.usi, this.etr, 1);
            if (this.pal === true) {
                kit.vcj.zrw(c, this.x + this.ihk.x + this.ihk.width / 4, this.y + this.ihk.y + this.ihk.height / 4, this.ihk.width / 2, this.ihk.height / 2, this.usi, 1)
            }
        } else {
            if (this.uws === "round") {
                kit.vcj.ljj(c, this.x + this.ihk.x + this.ihk.width / 2, this.y + this.ihk.y + this.ihk.height / 2, this.ihk.width / 2, this.usi, 0.2, this.usi, this.etr, 1);
                if (this.pal === true) {
                    kit.vcj.ljj(c, this.x + this.ihk.x + this.ihk.width / 2, this.y + this.ihk.y + this.ihk.height / 2, this.ihk.width / 4, this.usi, 1)
                }
            }
        }
        if (this.ikg && this.ikg != "") {
            kit.vcj.hoi(c, this.ikg, this.usi, this.x + this.mfu.x, this.y + this.mfu.y, this.mfu.width, this.mfu.height, this.bnn, this.phy, this.yxa, this.qrv, true)
        }
        c.restore();
        if (this.evc && this.hlo) {
            this.evc.drawImage(this.hlo, this.x, this.y)
        }
    };
    this.ncb = {}
}
wng.prototype = new noe;

function skz() {
    var b = this;
    var c = 0;
    var a = 1;
    this.tjx = null;
    this.vwd = "";
    this.fub = "";
    this.dsz = "";
    this.bux = "";
    this.hec = false;
    this.dth = [];
    this.wwv = 0;
    this.alk = 0;
    this.vxt = 0;
    this.wvm = 0;
    this.hlu = 0;
    this.jue = 0;
    this.meh = 0;
    this.tni = 0;
    this.lwa = false;
    this.mox = false;
    this.pwv = false;
    this.uws = "center";
    this.bnn = "arial";
    this.yxa = "bold";
    this.box = "white";
    this.usi = "white";
    this.cra = "black";
    this.ard = null;
    this.vpe = "white";
    this.cio = "rgb(150,150,150)";
    this.lci = null;
    this.rgt = null;
    this.etr = 3;
    this.gqi = 0;
    this.tjt = 0;
    this.nwf = 0;
    this.dxo = 30;
    this.elk = 24;
    this.jma = new dho();
    this.iru = new dho();
    this.nde = new dho();
    this.uvy = new dho();
    this.eqj = new dho();
    this.zar = new dho();
    this.nna = new dho();
    this.exk = new dho();
    this.wnq = new dho();
    this.sus = 7;
    this.dit = 0;
    this.nmt = 0;
    this.usw = 0;
    this.iwn = c;
    this.zes = 0;
    this.mnh = 89;
    this.lbw = false;
    this.hiv = 0;
    this.adz = 0;
    this.sjk = 0;
    this.bmz = 0;
    this.gxf = null;
    this.rbw = 0;
    this.fzs = 1;
    this.bxa = 250;
    this.fbq = function(d, f, e) {
        skz.prototype.fbq.call(this, d, f, e);
        this.tjx = new itm();
        this.tjx.fbq();
        this.tjx.kbh("buttons");
        this.tjx.kbh("checkboxes");
        this.tjx.kbh("displays");
        this.tjx.kbh("lbuttons");
        this.tjx.kbh("mbuttons");
        this.tjx.kbh("vbuttons");
        this.tjx.kbh("cbuttons")
    };
    this.bih = function(d) {
        try {
            this.coa(d);
            this.rqt(d)
        } catch (f) {
            console.error(f)
        }
    };
    this.goa = function(k) {
        try {
            var n = this.tjx.nlq("lbuttons"),
                m = this.tjx.nlq("mbuttons"),
                f = this.tjx.nlq("cbuttons"),
                g = this.tjx.nlq("displays");
            this.uws = k.type;
            this.bnn = k.font;
            this.yxa = k.gas;
            this.box = k.xja;
            this.usi = k.lkk;
            this.cra = k.backgroundColor;
            this.ard = k.tww;
            this.vpe = k.borderColor;
            this.lci = k.cls;
            this.rgt = k.jau;
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].goa(k.nin)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].goa(k.ejv)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].goa(k.ibn)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].goa(k.display)
            }
            this.tjx.eqb("checkboxes", "#goa", [k.gcn])
        } catch (l) {
            console.error(l)
        }
    };
    this.wez = function(k) {
        try {
            var n = this.tjx.nlq("lbuttons"),
                m = this.tjx.nlq("mbuttons"),
                f = this.tjx.nlq("cbuttons"),
                g = this.tjx.nlq("displays");
            this.etr = k.ylx;
            this.gqi = k.zng;
            this.tjt = k.yar;
            this.nwf = k.bhh;
            this.dxo = k.fip;
            this.elk = k.pee;
            this.jma = k.xka;
            this.iru = k.vrr;
            this.nde = k.inp;
            this.uvy = k.zfg;
            this.eqj = k.pka;
            this.zar = k.huh;
            this.tjx.fdt("lgames", "#mya", [k.rrd]);
            this.tjx.fdt("mgames", "#mya", [k.bjk]);
            this.tjx.fdt("lmincredit", "#mya", [k.qtq]);
            this.tjx.fdt("mmincredit", "#mya", [k.wkr]);
            this.tjx.fdt("lmaxcredit", "#mya", [k.ftp]);
            this.tjx.fdt("mmaxcredit", "#mya", [k.qdt]);
            this.tjx.fdt("lmaxwin", "#mya", [k.zwb]);
            this.tjx.fdt("mmaxwin", "#mya", [k.aqa]);
            this.tjx.fdt("start", "#mya", [k.pwt]);
            this.tjx.fdt("cancel", "#mya", [k.igq]);
            this.tjx.fdt("gamesd", "#mya", [k.moj]);
            this.tjx.fdt("mincreditd", "#mya", [k.yky]);
            this.tjx.fdt("maxcreditd", "#mya", [k.gnr]);
            this.tjx.fdt("maxwind", "#mya", [k.idp]);
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].wez(k.nin)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].wez(k.ejv)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].wez(k.ibn)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].wez(k.display)
            }
            this.tjx.fdt("cmincredit", "#mya", [k.wjy]);
            this.tjx.fdt("cmaxcredit", "#mya", [k.ltr]);
            this.tjx.fdt("cmaxwin", "#mya", [k.vdi]);
            this.tjx.eqb("checkboxes", "#wez", [k.gcn])
        } catch (l) {
            console.error(l)
        }
    };
    this.coa = function(d) {
        this.tjx.dcj("start", this.nvt(d.pwt, this.parent.language.start, this.xpg, this.parent.mum.uyo), ["buttons", "cbuttons"]);
        this.tjx.dcj("cancel", this.nvt(d.igq, this.parent.language.eps, this.lhd, this.parent.mum.mnz), ["buttons", "cbuttons"]);
        this.tjx.dcj("lgames", this.nvt(d.rrd, "", this.spo, null), ["buttons", "lbuttons", "vbuttons"]);
        this.tjx.dcj("mgames", this.nvt(d.bjk, "+", this.mtp, null), ["buttons", "mbuttons", "vbuttons"]);
        this.tjx.dcj("lmincredit", this.nvt(d.qtq, "", this.efr, null), ["buttons", "lbuttons", "vbuttons"]);
        this.tjx.dcj("mmincredit", this.nvt(d.wkr, "+", this.oid, null), ["buttons", "mbuttons", "vbuttons"]);
        this.tjx.dcj("lmaxcredit", this.nvt(d.ftp, "", this.lbg, null), ["buttons", "lbuttons", "vbuttons"]);
        this.tjx.dcj("mmaxcredit", this.nvt(d.qdt, "+", this.ssx, null), ["buttons", "mbuttons", "vbuttons"]);
        this.tjx.dcj("lmaxwin", this.nvt(d.zwb, "", this.dfu, null), ["buttons", "lbuttons", "vbuttons"]);
        this.tjx.dcj("mmaxwin", this.nvt(d.aqa, "+", this.hqq, null), ["buttons", "mbuttons", "vbuttons"]);
        this.tjx.dcj("cmincredit", this.xta(d.wjy, "", this.tyv), ["checkboxes"]);
        this.tjx.dcj("cmaxcredit", this.xta(d.ltr, "", this.qyb), ["checkboxes"]);
        this.tjx.dcj("cmaxwin", this.xta(d.vdi, "", this.wme), ["checkboxes"])
    };
    this.rqt = function(d) {
        this.tjx.dcj("gamesd", this.qcw(d.moj, null, (this.dth[this.wwv] > 0) ? this.dth[this.wwv] : "---"), ["displays"]);
        this.tjx.dcj("mincreditd", this.qcw(d.yky, null, "---"), ["displays"]);
        this.tjx.dcj("maxcreditd", this.qcw(d.gnr, null, "---"), ["displays"]);
        this.tjx.dcj("maxwind", this.qcw(d.idp, null, "---"), ["displays"])
    };
    this.qcw = function(d, g, f) {
        var e = new pjz();
        e.fbq(d, this.context2D, null, g, f);
        e.parent = this;
        return e
    };
    this.nvt = function(f, i, g, e) {
        var d = new ttn();
        d.fbq(f, this.context2D, null, null, i);
        d.parent = this;
        d.ncb = g;
        if (e) {
            d.uvs = e.bgt
        }
        return d
    };
    this.xta = function(e, g, f) {
        var d = new wng();
        d.fbq(e, this.context2D, null, g);
        d.parent = this;
        d.ncb = f;
        return d
    };
    this.fwl = function(r, n) {
        var s = this.tjx.nlq("vbuttons"),
            l = this.tjx.nlq("cbuttons"),
            g = this.tjx.nlq("checkboxes"),
            p = this.tjx.fei("cancel"),
            q = r - this.x,
            o = n - this.y;
        if (this.twb) {
            return true
        }
        if ((!p || !p.aod()) && (r < this.x || r > this.x + this.width || n < this.y || n > this.y + this.height)) {
            this.pwv = true;
            this.yen();
            return true
        }
        for (var f = 0, m = s.length; f < m; f++) {
            var d = s[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.aod() === true && d.vka() === true && d.wob() === false) {
                    d.dan(true, false, false);
                    this.rbw = 0;
                    this.fzs = 1;
                    if (d.ncb() === false) {
                        this.gxf = function() {
                            if (d.ncb() === true) {
                                clearInterval(b.bmz);
                                d.dan(false, false);
                                b.parent.xgz();
                                for (var i = 0; i < m; i++) {
                                    s[i].awu(false)
                                }
                            }
                        };
                        this.bmz = setInterval(this.gxf, this.bxa)
                    }
                    for (var e = 0; e < m; e++) {
                        s[e].awu(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = l.length; f < m; f++) {
            var d = l[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.aod() === true && d.vka() === true) {
                    this.parent.qug.qyk("btn");
                    this.parent.qug.eze("btn");
                    d.dan(true, false);
                    d.ncb();
                    for (var e = 0; e < m; e++) {
                        l[e].awu(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = g.length; f < m; f++) {
            var k = g[f];
            if (q >= k.x && q <= k.x + k.width && o >= k.y && o <= k.y + k.height) {
                if (k.aod() === true && k.vka() === true) {
                    k.lbk(!k.jjl(), true);
                    k.ncb();
                    for (var e = 0; e < m; e++) {
                        g[e].awu(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.qua = function() {
        var e = this.tjx.nlq("vbuttons"),
            j = this.tjx.nlq("cbuttons");
        for (var g = 0, d = e.length; g < d; g++) {
            var f = e[g];
            if (f.gqn() == true) {
                clearInterval(this.bmz);
                f.dan(false, false);
                this.parent.xgz();
                return true
            }
        }
        for (var g = 0, d = j.length; g < d; g++) {
            var f = j[g];
            if (f.gqn() == true) {
                f.dan(false, false);
                this.parent.xgz();
                return true
            }
        }
        return false
    };
    this.xba = function(l) {
        var k = this.tjx.nlq("buttons");
        if (this.twb) {
            return true
        }
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l == f.uvs) {
                if (f.vka() && !f.wob()) {
                    this.parent.qug.qyk("btn");
                    this.parent.qug.eze("btn");
                    f.dan(true, false);
                    f.ncb();
                    for (var e = 0; e < d; e++) {
                        k[e].awu(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.hrl = function() {
        var g = this.tjx.nlq("buttons");
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.gqn() == true) {
                e.dan(false, false);
                this.parent.xgz();
                return true
            }
        }
        return false
    };
    this.zdr = function(d) {
        this.tjx.eqb("buttons", "#vba", [d]);
        this.tjx.eqb("checkboxes", "#vba", [d]);
        if (d === true && this.mox === true) {
            this.tjx.fdt("cmincredit", "#vba", [false])
        }
    };
    this.lbt = function(d) {
        this.dth = d.g;
        this.alk = d.v;
        this.vxt = d.v;
        this.lwa = d.r;
        this.mox = d.l;
        if (typeof d.m != "undefined" && d.m != null && d.m > 0) {
            this.wvm = d.m;
            this.hlu = d.m
        }
    };
    this.lkd = function() {
        if (this.lwa === true) {
            this.jue = this.parent.vkp;
            this.meh = this.parent.vkp;
            this.wwv = 0;
            this.tni = 0
        }
    };
    this.jbu = function() {
        if (this.dth.length > 0 && this.wwv >= 0 && this.pwv === false) {
            return this.dth[this.wwv]
        }
        return 0
    };
    this.uzf = function() {
        var d = this.tjx.fei("cmincredit") == null || this.tjx.fdt("cmincredit", "#jjl");
        if (this.jue > 0 && d === true) {
            return this.jue
        }
        return 0
    };
    this.fmc = function() {
        var d = this.tjx.fei("cmaxcredit") == null || this.tjx.fdt("cmaxcredit", "#jjl");
        if (this.meh > 0 && d === true) {
            return this.meh
        }
        return 0
    };
    this.rui = function() {
        var d = this.tjx.fei("cmaxwin") == null || this.tjx.fdt("cmaxwin", "#jjl");
        if (this.tni > 0 && d === true) {
            return this.tni
        }
        return 0
    };
    this.wyc = function() {
        var f = this.tjx.fei("cmincredit") == null || this.tjx.fdt("cmincredit", "#jjl"),
            d = this.tjx.fei("cmaxcredit") == null || this.tjx.fdt("cmaxcredit", "#jjl"),
            e = this.tjx.fei("cmaxwin") == null || this.tjx.fdt("cmaxwin", "#jjl");
        this.lbw = false;
        this.pwv = false;
        this.vxt = (this.hlu > 0) ? this.parent.pex() * this.hlu : this.vxt;
        this.alk = (this.wvm > 0) ? this.parent.pex() * this.wvm : this.alk;
        if (this.lwa === true) {
            f = this.mox;
            d = false;
            e = false;
            this.lkd()
        } else {
            if (this.mox === true) {
                f = true;
                this.jue = (this.jue < this.parent.vkp) ? this.jue : this.parent.vkp;
                this.jue = (this.jue > 0) ? this.jue : this.parent.vkp
            } else {
                f = (this.jue <= this.parent.vkp) ? f : false;
                this.jue = (this.jue < this.parent.vkp) ? this.jue : this.parent.vkp
            }
            d = (this.meh >= this.parent.vkp) ? d : false;
            this.meh = (this.meh > this.parent.vkp) ? this.meh : this.parent.vkp
        }
        this.tjx.fdt("cmincredit", "#lbk", [f]);
        this.tjx.fdt("cmaxcredit", "#lbk", [d]);
        this.tjx.fdt("cmaxwin", "#lbk", [e]);
        this.tjx.fdt("gamesd", "#yya", [(this.dth[this.wwv] > 0) ? this.dth[this.wwv] : "---"]);
        this.tjx.fdt("mincreditd", "#yya", [(f === true && this.jue > 0) ? this.parent.ywx(this.jue) : "---"]);
        this.tjx.fdt("maxcreditd", "#yya", [(d === true && this.meh > 0) ? this.parent.ywx(this.meh) : "---"]);
        this.tjx.fdt("maxwind", "#yya", [(e === true && this.tni > 0) ? this.parent.ywx(this.tni) : "---"]);
        this.tjx.fdt("lmincredit", "#dwr", [f]);
        this.tjx.fdt("mmincredit", "#dwr", [f && this.jue < this.parent.vkp]);
        this.tjx.fdt("lmaxcredit", "#dwr", [d && this.meh > this.parent.vkp]);
        this.tjx.fdt("mmaxcredit", "#dwr", [d]);
        this.tjx.fdt("lmaxwin", "#dwr", [e && this.tni > this.vxt]);
        this.tjx.fdt("mmaxwin", "#dwr", [e]);
        if (this.hec === false) {
            this.zdr(true);
            this.dwr(true);
            this.parent.xgz()
        } else {
            this.fec();
            this.parent.qug.qyk("panel_out");
            this.parent.qug.eze("panel_out");
            this.lif()
        }
    };
    this.yen = function() {
        b.zdr(false);
        if (b.hec === false) {
            b.dwr(false);
            b.parent.xgz()
        } else {
            b.oqe();
            b.parent.qug.qyk("panel_out");
            b.parent.qug.eze("panel_out");
            b.lif()
        }
    };
    this.fec = function() {
        this.dwr(true);
        this.twb = true;
        this.fol = false;
        this.iwn = c;
        this.dit = Math.floor(this.width / this.sus);
        this.usw = 0;
        this.nmt = 0;
        this.zes = new Date().getTime()
    };
    this.oqe = function() {
        this.twb = true;
        this.fol = false;
        this.iwn = a;
        this.dit = -Math.floor(this.width / this.sus);
        this.usw = 1;
        this.nmt = this.width;
        this.zes = new Date().getTime()
    };
    this.lif = function() {
        var d = b.mnh,
            e = new Date().getTime();
        if (b.usw < b.sus) {
            b.nmt += b.dit;
            b.usw++;
            b.parent.xgz();
            d = (((b.iwn === a) ? b.usw - 1 : b.usw) * b.mnh - (e - b.zes));
            b.hiv = setTimeout(b.lif, d)
        } else {
            b.twb = false;
            b.fol = true;
            if (b.iwn == a) {
                b.dwr(false);
                b.parent.gkg();
                if (b.lbw === true) {
                    b.adz = setTimeout(b.parent.cht, 200)
                }
            } else {
                if (b.iwn == c) {
                    b.zdr(true)
                }
            }
            b.parent.xgz()
        }
    };
    this.stop = function() {
        clearTimeout(this.hiv);
        clearTimeout(this.sjk);
        clearTimeout(this.adz);
        clearInterval(this.bmz)
    };
    this.jfd = function(d) {
        this.vwd = d.rbt;
        this.fub = d.qfi;
        this.dsz = d.vol;
        this.tjx.fdt("start", "#yya", [d.start]);
        this.tjx.fdt("cancel", "#yya", [d.eps]);
        this.tjx.fdt("cmincredit", "#yya", [d.ige]);
        this.tjx.fdt("cmaxcredit", "#yya", [d.ufy]);
        this.tjx.fdt("cmaxwin", "#yya", [d.ops]);
        if (this.parent.gkp === true && kit.fng.value44.d === true) {
            this.bux = d.wwl
        }
    };
    this.xgz = function(n, m, o, j) {
        if (!this.aod()) {
            return
        }
        var f = (n != null && m != null && o != null && j != null),
            p = this.context2D,
            d = this.tjx.jfj(),
            e = this.cra,
            l = this.vpe;
        if (this.ard) {
            e = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            e.addColorStop(0, this.cra);
            e.addColorStop(1, this.ard)
        }
        if (this.cio) {
            if (this.uws === "center") {
                l = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height)
            } else {
                if (this.uws === "left") {
                    l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                } else {
                    if (this.uws === "right") {
                        l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                    }
                }
            }
            if (this.uws === "left") {
                l.addColorStop(1, this.vpe);
                l.addColorStop(0, this.cio)
            } else {
                if (this.uws === "center" || this.uws === "right") {
                    l.addColorStop(0, this.vpe);
                    l.addColorStop(1, this.cio)
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
        kit.vcj.cqk(p, 0, 0, this.width, this.height, this.gqi, this.tjt, this.tjt, this.gqi, e, 1, l, this.etr, 1);
        kit.vcj.cjl(p, this.nde.x, this.nde.y, this.nde.width, this.nde.height, this.nwf, this.lci, this.rgt, this.etr / 2);
        kit.vcj.cjl(p, this.eqj.x, this.eqj.y, this.eqj.width, this.eqj.height, this.nwf, this.lci, this.rgt, this.etr / 2);
        kit.vcj.bom(p, this.vwd, this.box, this.jma.x, this.jma.y, this.jma.width, this.jma.height, this.bnn, this.dxo, this.yxa);
        kit.vcj.hoi(p, this.bux, this.usi, this.iru.x, this.iru.y, this.iru.width, this.iru.height, this.bnn, this.elk, this.yxa, "center", true);
        kit.vcj.enf(p, this.fub, this.usi, this.uvy.x, this.uvy.y, this.uvy.width, this.uvy.height, this.bnn, this.elk, this.yxa, 0);
        kit.vcj.bom(p, this.dsz, this.usi, this.zar.x, this.zar.y, this.zar.width, this.zar.height, this.bnn, this.elk, this.yxa);
        for (var g = 0, k = d.length; g < k; g++) {
            d[g].xgz()
        }
        p.restore();
        if (this.evc && this.hlo) {
            if (this.twb) {
                if (this.nmt > 0) {
                    if (this.uws === "left") {
                        this.evc.drawImage(this.hlo, this.width - this.nmt, 0, this.nmt, this.height, this.x, this.y, this.nmt, this.height)
                    } else {
                        if (this.uws === "right") {
                            this.evc.drawImage(this.hlo, 0, 0, this.nmt, this.height, this.x + this.width - this.nmt, this.y, this.nmt, this.height)
                        }
                    }
                }
            } else {
                if (f) {
                    this.evc.drawImage(this.hlo, n, m, o, j, this.x + n, this.y + m, o, j)
                } else {
                    this.evc.drawImage(this.hlo, this.x, this.y)
                }
            }
        }
    };
    this.xpg = function() {
        b.parent.xgz();
        if (b.dth[b.wwv] <= 0) {
            return
        }
        if (b.hec === false) {
            b.sjk = setTimeout(b.parent.gkg, 400);
            b.adz = setTimeout(b.parent.cht, 500)
        } else {
            b.twb = true;
            b.lbw = true;
            b.sjk = setTimeout(b.yen, 400)
        }
    };
    this.lhd = function() {
        b.parent.xgz();
        b.pwv = true;
        if (b.hec === false) {
            b.sjk = setTimeout(b.parent.gkg, 400)
        } else {
            b.twb = true;
            b.sjk = setTimeout(b.yen, 400)
        }
    };
    this.mtp = function() {
        b.wwv = (b.wwv < b.dth.length - 1) ? b.wwv + 1 : 0;
        b.parent.qug.eze("step0");
        b.tjx.fdt("gamesd", "#yya", [(b.dth[b.wwv] > 0) ? b.dth[b.wwv] : "---"]);
        b.parent.xgz();
        return (b.wwv >= b.dth.length - 1)
    };
    this.spo = function() {
        b.wwv = (b.wwv > 0) ? b.wwv - 1 : b.dth.length - 1;
        b.parent.qug.eze("step0");
        b.tjx.fdt("gamesd", "#yya", [(b.dth[b.wwv] > 0) ? b.dth[b.wwv] : "---"]);
        b.parent.xgz();
        return (b.wwv <= 0)
    };
    this.oid = function() {
        var d = b.tjx.fei("cmincredit") == null || b.tjx.fdt("cmincredit", "#jjl");
        if (d === true) {
            if (++b.rbw > 10) {
                b.fzs = 10
            }
            b.jue = (b.jue + (b.alk * b.fzs) <= b.parent.vkp) ? b.jue + (b.alk * b.fzs) : b.parent.vkp;
            b.parent.qug.eze("step0");
            b.tjx.fdt("mincreditd", "#yya", [(b.jue > 0) ? b.parent.ywx(b.jue) : "---"]);
            b.tjx.fdt("mmincredit", "#dwr", [d && b.jue < b.parent.vkp]);
            b.tjx.fdt("lmincredit", "#dwr", [d && b.jue > 0]);
            b.parent.xgz();
            return (b.jue >= b.parent.vkp)
        }
        return true
    };
    this.efr = function() {
        var d = b.tjx.fei("cmincredit") == null || b.tjx.fdt("cmincredit", "#jjl");
        if (d === true) {
            if (++b.rbw > 10) {
                b.fzs = 10
            }
            b.jue = (b.jue - (b.alk * b.fzs) > 0) ? b.jue - (b.alk * b.fzs) : 0;
            b.parent.qug.eze("step0");
            b.tjx.fdt("mincreditd", "#yya", [(b.jue > 0) ? b.parent.ywx(b.jue) : "---"]);
            b.tjx.fdt("mmincredit", "#dwr", [d && b.jue < b.parent.vkp]);
            b.tjx.fdt("lmincredit", "#dwr", [d && b.jue > 0]);
            b.parent.xgz();
            return (b.jue >= b.parent.vkp || b.jue <= 0)
        }
        return true
    };
    this.ssx = function() {
        var d = b.tjx.fei("cmaxcredit") == null || b.tjx.fdt("cmaxcredit", "#jjl");
        if (d === true) {
            if (++b.rbw > 10) {
                b.fzs = 10
            }
            b.meh = (b.meh + (b.vxt * b.fzs) > 0) ? b.meh + (b.vxt * b.fzs) : 0;
            b.parent.qug.eze("step0");
            b.tjx.fdt("maxcreditd", "#yya", [(b.meh > 0) ? b.parent.ywx(b.meh) : "---"]);
            b.tjx.fdt("lmaxcredit", "#dwr", [d && b.meh > b.parent.vkp]);
            b.parent.xgz();
            return (b.meh <= b.parent.vkp)
        }
        return true
    };
    this.lbg = function() {
        var d = b.tjx.fei("cmaxcredit") == null || b.tjx.fdt("cmaxcredit", "#jjl");
        if (d === true) {
            if (++b.rbw > 10) {
                b.fzs = 10
            }
            b.meh = (b.meh - (b.vxt * b.fzs) > b.parent.vkp) ? b.meh - (b.vxt * b.fzs) : b.parent.vkp;
            b.parent.qug.eze("step0");
            b.tjx.fdt("maxcreditd", "#yya", [(b.meh > 0) ? b.parent.ywx(b.meh) : "---"]);
            b.tjx.fdt("lmaxcredit", "#dwr", [d && b.meh > b.parent.vkp]);
            b.parent.xgz();
            return (b.meh <= b.parent.vkp)
        }
        return true
    };
    this.hqq = function() {
        var d = b.tjx.fei("cmaxwin") == null || b.tjx.fdt("cmaxwin", "#jjl");
        if (d === true) {
            if (++b.rbw > 10) {
                b.fzs = 10
            }
            b.tni = (b.tni + (b.vxt * b.fzs) > 0) ? b.tni + (b.vxt * b.fzs) : 0;
            b.parent.qug.eze("step0");
            b.tjx.fdt("maxwind", "#yya", [(b.tni > 0) ? b.parent.ywx(b.tni) : "---"]);
            b.tjx.fdt("lmaxwin", "#dwr", [d && b.tni > b.vxt]);
            b.parent.xgz();
            return (b.tni <= b.vxt)
        }
        return true
    };
    this.dfu = function() {
        var d = b.tjx.fei("cmaxwin") == null || b.tjx.fdt("cmaxwin", "#jjl");
        if (d === true) {
            if (++b.rbw > 10) {
                b.fzs = 10
            }
            b.tni = (b.tni - (b.vxt * b.fzs) > 0) ? b.tni - (b.vxt * b.fzs) : b.vxt;
            b.parent.qug.eze("step0");
            b.tjx.fdt("maxwind", "#yya", [(b.tni > 0) ? b.parent.ywx(b.tni) : "---"]);
            b.tjx.fdt("lmaxwin", "#dwr", [d && b.tni > b.vxt]);
            b.parent.xgz();
            return (b.tni <= b.vxt)
        }
        return true
    };
    this.tyv = function() {
        var d = b.tjx.fei("cmincredit") == null || b.tjx.fdt("cmincredit", "#jjl");
        b.jue = b.parent.vkp;
        b.tjx.fdt("mincreditd", "#yya", [(d === true && b.jue > 0) ? b.parent.ywx(b.jue) : "---"]);
        b.tjx.fdt("lmincredit", "#dwr", [d]);
        b.tjx.fdt("mmincredit", "#dwr", [d && b.jue < b.parent.vkp]);
        b.parent.xgz()
    };
    this.qyb = function() {
        var d = b.tjx.fei("cmaxcredit") == null || b.tjx.fdt("cmaxcredit", "#jjl");
        b.meh = b.parent.vkp;
        b.tjx.fdt("maxcreditd", "#yya", [(d === true && b.meh > 0) ? b.parent.ywx(b.meh) : "---"]);
        b.tjx.fdt("lmaxcredit", "#dwr", [d && b.meh > b.parent.vkp]);
        b.tjx.fdt("mmaxcredit", "#dwr", [d]);
        b.parent.xgz()
    };
    this.wme = function() {
        var d = b.tjx.fei("cmaxwin") == null || b.tjx.fdt("cmaxwin", "#jjl");
        if (b.tni === 0) {
            b.tni = b.vxt
        }
        b.tjx.fdt("maxwind", "#yya", [(d === true && b.tni > 0) ? b.parent.ywx(b.tni) : "---"]);
        b.tjx.fdt("lmaxwin", "#dwr", [d && b.tni > b.vxt]);
        b.tjx.fdt("mmaxwin", "#dwr", [d]);
        b.parent.xgz()
    }
}
skz.prototype = new noe;

function kcf() {
    this.gmy = "right";
    this.jeb = "left";
    this.xwu = null;
    this.ldg = null;
    this.vwd = null;
    this.rep = -1;
    this.kwu = -1;
    this.fol = true;
    this.pal = false;
    this.ssb = false;
    this.twb = false;
    this.cgz = 0;
    this.eit = 0;
    this.nfr = [];
    this.tzj = 0;
    this.yas = 0;
    this.pxg = 1;
    this.afi = 0;
    this.esz = 0;
    this.uws = this.gmy;
    this.bnn = null;
    this.yxa = "bold";
    this.usi = "rgb(255,255,255)";
    this.cra = "rgb(0,0,0)";
    this.nlc = "rgb(0,0,0)";
    this.pks = "rgb(0,0,0)";
    this.bxe = 0.7;
    this.qrk = null;
    this.qje = null;
    this.fmu = null;
    this.bqg = new dho();
    this.jyw = new dho();
    this.vty = new dho();
    this.jma = new dho();
    this.etr = 2;
    this.rgy = 5;
    this.jhw = 4;
    this.fly = 10;
    this.vle = 5;
    this.phy = 15;
    var a = 200;
    this.pfc = function(c, d, f) {
        this.nfr = [];
        this.cgz = (d < 0) ? 0 : d;
        this.eit = (f < 0) ? 0 : f;
        for (var e = this.cgz, b = 0; e <= this.eit; e++) {
            this.nfr[b++] = c[e]
        }
        this.tzj = this.nfr.length;
        this.afi = this.bqg.height / this.tzj
    };
    this.wez = function(b) {
        try {
            this.phy = b.fontSize;
            this.etr = b.ylx;
            this.rgy = b.txi;
            this.jhw = b.kae;
            this.fly = b.fzg;
            this.vle = b.epy;
            this.bqg = new dho(b.fym.x, b.fym.y + b.tfg, b.fym.width, b.fym.height - 2 * b.tfg);
            this.jyw = new dho(b.fym.x, b.fym.y, b.fym.width, b.tfg);
            this.vty = new dho(b.fym.x, b.fym.y + b.fym.height - b.tfg, b.fym.width, b.tfg);
            this.jma = b.xka
        } catch (c) {
            console.error(c)
        }
    };
    this.goa = function(b) {
        try {
            this.bnn = b.font;
            this.yxa = b.gas;
            this.usi = b.lkk;
            this.cra = b.backgroundColor;
            this.nlc = b.zft;
            this.pks = b.hwb;
            this.bxe = b.oxz;
            this.qje = this.context2D.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            this.qje.addColorStop(0, b.bfk);
            this.qje.addColorStop(1, b.mfk);
            this.qrk = this.context2D.createLinearGradient(this.bqg.x, 0, this.bqg.x + this.bqg.width, 0);
            this.fmu = this.context2D.createLinearGradient(this.width, this.height / 2, 0, this.height / 2);
            if (this.uws === this.gmy) {
                this.qrk.addColorStop(0, b.mts);
                this.qrk.addColorStop(1, b.wyk);
                this.fmu.addColorStop(0, b.dgs);
                this.fmu.addColorStop(1, b.ndd)
            } else {
                if (this.uws === this.jeb) {
                    this.qrk.addColorStop(0, b.wyk);
                    this.qrk.addColorStop(1, b.mts);
                    this.fmu.addColorStop(0, b.ndd);
                    this.fmu.addColorStop(1, b.dgs)
                }
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.fwl = function(b, f, c) {
        if (this.twb || !this.fol || this.ssb) {
            return true
        }
        if ((b < this.x || b > this.x + this.width || f < this.y || f > this.y + this.height)) {
            return false
        } else {
            var e = b - this.x,
                d = f - this.y;
            if (this.vty.jiz(e, d)) {
                this.tqr(-1);
                this.eze();
                this.awu(true, true)
            } else {
                if (this.jyw.jiz(e, d)) {
                    this.tqr(1);
                    this.eze();
                    this.awu(true, true)
                } else {
                    if (this.bqg.jiz(e, d)) {
                        this.pal = true;
                        this.uoq(f);
                        this.awu(true, true)
                    }
                }
            }
            this.ncb(this.yas);
            return true
        }
    };
    this.qua = function() {
        if (this.pal) {
            this.pal = false;
            this.eze();
            return true
        }
        return false
    };
    this.xba = function(b) {
        if (this.twb || !this.fol || this.ssb) {
            return true
        }
        if (b == this.kwu) {
            this.tqr(-1);
            this.eze();
            this.awu(true, true);
            this.ncb(this.yas);
            return true
        } else {
            if (b == this.rep) {
                this.tqr(1);
                this.eze();
                this.awu(true, true);
                this.ncb(this.yas);
                return true
            }
        }
        return false
    };
    this.hrl = function() {};
    this.lab = function(b, d, c) {
        if (!this.pal) {
            return false
        }
        if (b >= this.x + this.bqg.x && b <= this.x + this.bqg.x + this.bqg.width && d >= this.y + this.bqg.y && d <= this.y + this.bqg.y + this.bqg.height) {
            this.uoq(d);
            this.ncb(this.yas);
            return true
        }
        return false
    };
    this.awu = function(b, c) {
        this.ssb = b;
        c = (c === false) ? false : true;
        clearTimeout(this.udp);
        if (this.ssb === true && c === true) {
            this.udp = setTimeout(this.ugg, a)
        }
    };
    this.ugg = function() {};
    this.ncb = function(b) {};
    this.eze = function() {};
    this.hdk = function(b, c) {
        this.cgz = (b < 0) ? 0 : b;
        this.eit = (c < 0) ? 0 : c;
        if (this.nfr) {
            this.eit = (this.eit > this.nfr.length - 1) ? this.nfr.length - 1 : this.eit
        }
    };
    this.wyc = function() {
        this.dwr(true, true)
    };
    this.yen = function() {
        this.dwr(false, true)
    };
    this.vba = function(b) {
        this.fol = b
    };
    this.vka = function() {
        return this.fol
    };
    this.jom = function(b, c) {
        this.yas = b;
        if (this.yas < this.cgz) {
            this.yas = this.cgz
        }
        if (this.yas >= this.eit) {
            this.yas = this.eit
        }
        this.pxg = this.yas + 1;
        if (c && c === true) {
            this.parent.xgz()
        }
    };
    this.mhq = function(d, e) {
        this.yas = 0;
        for (var c = 0, b = this.nfr.length; c < b; c++) {
            if (this.nfr[c] == d) {
                this.yas = c;
                break
            }
        }
        this.yas = (this.yas >= this.cgz) ? this.yas : this.cgz;
        this.yas = (this.yas < this.eit) ? this.yas : this.eit;
        this.pxg = this.yas + 1;
        if (e) {
            this.parent.xgz()
        }
    };
    this.uoq = function(b) {
        this.yas = Math.ceil(((this.bqg.height) - (b - this.bqg.y - this.y)) / this.afi) - 1;
        this.yas = (this.yas >= this.cgz) ? this.yas : this.cgz;
        this.yas = (this.yas < this.eit) ? this.yas : this.eit;
        this.pxg = this.yas + 1;
        this.parent.xgz()
    };
    this.tqr = function(b) {
        this.yas += b;
        this.yas = (this.yas >= this.cgz) ? this.yas : this.cgz;
        this.yas = (this.yas < this.eit) ? this.yas : this.eit;
        this.pxg = this.yas + 1;
        this.parent.xgz()
    };
    this.xgz = function() {
        if (!this.aod() || !this.parent.avk()) {
            return
        }
        this.pnz();
        if (this.evc && this.hlo) {
            this.evc.drawImage(this.gtx, this.x, this.y)
        }
    };
    this.pnz = function() {
        var b = this.context2D;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        this.pqi(b);
        this.rjq(b);
        this.hpx(b);
        this.qxa(b);
        this.ugc(b);
        b.restore()
    };
    this.pqi = function(b) {
        if (this.uws === this.jeb) {
            kit.vcj.cqk(b, 0, 0, this.width, this.height, this.rgy, 0, 0, this.rgy, this.cra, 0.4, this.fmu, this.etr, 1)
        } else {
            if (this.uws === this.gmy) {
                kit.vcj.cqk(b, 0, 0, this.width, this.height, 0, this.rgy, this.rgy, 0, this.cra, 0.4, this.fmu, this.etr, 1)
            }
        }
    };
    this.rjq = function(b) {
        kit.vcj.zrw(b, this.bqg.x, this.bqg.y, this.bqg.width, this.bqg.height, this.nlc, 1)
    };
    this.hpx = function(b) {
        kit.vcj.zrw(b, this.bqg.x, this.bqg.y + this.bqg.height - Math.round(this.pxg * this.afi), this.bqg.width, Math.round(this.pxg * this.afi), this.qje, 1)
    };
    this.qxa = function(b) {
        kit.vcj.zrw(b, this.bqg.x - this.jhw, this.bqg.y - this.jhw, this.bqg.width + 2 * this.jhw, this.bqg.height + 2 * this.jhw, null, 0, this.qrk, this.jhw, 1);
        if (this.uws === this.jeb) {
            kit.vcj.cqk(b, this.bqg.x - this.jhw, this.jyw.y, this.bqg.width + 2 * this.jhw, this.jyw.height, this.fly, 0, 0, 0, this.qrk, 1);
            kit.vcj.cqk(b, this.bqg.x - this.jhw, this.vty.y, this.bqg.width + 2 * this.jhw, this.vty.height, 0, 0, 0, this.fly, this.qrk, 1)
        } else {
            if (this.uws === this.gmy) {
                kit.vcj.cqk(b, this.bqg.x - this.jhw, this.jyw.y, this.bqg.width + 2 * this.jhw, this.jyw.height, 0, this.fly, 0, 0, this.qrk, 1);
                kit.vcj.cqk(b, this.bqg.x - this.jhw, this.vty.y, this.bqg.width + 2 * this.jhw, this.vty.height, 0, 0, this.fly, 0, this.qrk, 1)
            }
        }
        b.strokeStyle = this.qrk;
        b.lineWidth = Math.round(this.jhw / 4);
        b.beginPath();
        for (var c = 1; c < this.tzj; c++) {
            b.moveTo(this.bqg.x, this.bqg.y + this.bqg.height - Math.round(c * this.afi));
            b.lineTo(this.bqg.x + this.bqg.width, this.bqg.y + this.bqg.height - Math.round(c * this.afi))
        }
        b.closePath();
        b.stroke();
        if (this.xwu) {
            if (this.uws === this.jeb) {
                b.drawImage(this.xwu, 0, 0, this.xwu.width / 2, this.xwu.height, this.bqg.x, this.bqg.y, this.bqg.width, this.bqg.height)
            } else {
                if (this.uws === this.gmy) {
                    b.drawImage(this.xwu, this.xwu.width / 2, 0, this.xwu.width / 2, this.xwu.height, this.bqg.x, this.bqg.y, this.bqg.width, this.bqg.height)
                }
            }
        }
    };
    this.ugc = function(c) {
        var f = this.usi,
            e = this.usi,
            b = 0,
            d = 0;
        if (this.uws === this.jeb) {
            b = this.vle;
            d = this.bqg.x - 2 * this.vle
        } else {
            if (this.uws === this.gmy) {
                b = this.bqg.x + this.bqg.width + this.vle;
                d = this.width - this.vle - (this.bqg.x + this.bqg.width + this.vle)
            }
        }
        if (this.yas > 0 && this.yas < this.nfr.length - 1) {
            kit.vcj.zrw(c, b, this.bqg.y + ((this.tzj - this.pxg) * this.afi), d, this.afi, this.pks, this.bxe);
            kit.vcj.cxi(c, this.nfr[this.yas], this.qje, b, this.bqg.y + ((this.tzj - this.pxg) * this.afi) + (this.afi - this.phy) / 2, d, this.phy, this.bnn, this.phy, this.yxa, this.vle)
        } else {
            if (this.yas == 0) {
                f = this.qje
            } else {
                if (this.yas == this.nfr.length - 1) {
                    e = this.qje
                }
            }
        }
        kit.vcj.zrw(c, b, this.bqg.y + (this.afi * (this.tzj - 1)), d, this.afi, this.pks, this.bxe);
        kit.vcj.cxi(c, this.nfr[0], f, b, this.bqg.y + (this.afi * (this.tzj - 1)) + (this.afi - this.phy) / 2, d, this.phy, this.bnn, this.phy, this.yxa, this.vle);
        kit.vcj.zrw(c, b, this.bqg.y, d, this.afi, this.pks, this.bxe);
        kit.vcj.cxi(c, this.nfr[this.nfr.length - 1], e, b, this.bqg.y + (this.afi - this.phy) / 2, d, this.phy, this.bnn, this.phy, this.yxa, this.vle);
        kit.vcj.bom(c, "+", this.usi, this.jyw.x, this.jyw.y, this.jyw.width, this.jyw.height, this.bnn, this.phy, this.yxa);
        kit.vcj.bom(c, "", this.usi, this.vty.x, this.vty.y, this.vty.width, this.vty.height, this.bnn, this.phy, this.yxa);
        if (this.vwd) {
            kit.vcj.bom(c, this.vwd, this.usi, this.jma.x, this.jma.y, this.jma.width, this.jma.height, this.bnn, this.phy, this.yxa)
        }
    }
}
kcf.prototype = new noe;

function ujh() {
    var a = this;
    this.tjx = null;
    this.emj = false;
    this.mbu = "";
    this.axl = "";
    this.spw = "";
    this.feq = "";
    this.bux = "";
    this.fub = "";
    this.dsz = "";
    this.bnn = "arial";
    this.yxa = "bold";
    this.usi = "white";
    this.cra = "black";
    this.ard = null;
    this.vpe = "white";
    this.cio = "rgb(150,150,150)";
    this.etr = 3;
    this.rgy = 4;
    this.qzx = 24;
    this.udn = 24;
    this.elk = 24;
    this.olu = new dho();
    this.ydj = new dho();
    this.ahj = new dho();
    this.pxh = new dho();
    this.apn = new dho();
    this.zum = new dho();
    this.hny = new dho();
    this.dth = [];
    this.wwv = 0;
    this.alk = 0;
    this.vxt = 0;
    this.wvm = 0;
    this.hlu = 0;
    this.jue = 0;
    this.meh = 0;
    this.tni = 0;
    this.zps = false;
    this.mox = false;
    this.yas = 0;
    this.trx = true;
    this.mbj = true;
    this.gxf = null;
    this.bmz = 0;
    this.rbw = 0;
    this.fzs = 1;
    this.bxa = 250;
    this.fbq = function(b, d, c) {
        ujh.prototype.fbq.call(this, b, d, c);
        this.tjx = new itm();
        this.tjx.fbq();
        this.tjx.kbh("buttons");
        this.tjx.kbh("displays");
        this.tjx.kbh("checkboxes");
        this.tjx.kbh("lbuttons");
        this.tjx.kbh("mbuttons");
        this.tjx.kbh("tbuttons");
        this.tjx.kbh("bbuttons");
        this.tjx.kbh("bdisplays");
        this.tjx.kbh("abuttons");
        this.tjx.kbh("adisplays");
        this.tjx.kbh("acheckboxes");
        this.tjx.kbh("sbuttons");
        this.tjx.kbh("hbuttons")
    };
    this.bih = function(b) {
        try {
            this.coa(b);
            this.upb(b);
            this.qfz(b)
        } catch (c) {
            console.error(c)
        }
    };
    this.goa = function(b) {
        try {
            var c = this.tjx.nlq("lbuttons"),
                n = this.tjx.nlq("mbuttons"),
                k = this.tjx.nlq("tbuttons"),
                m = this.tjx.nlq("sbuttons"),
                l = this.tjx.nlq("hbuttons"),
                f = this.tjx.nlq("displays");
            this.bnn = b.font;
            this.yxa = b.gas;
            this.usi = b.lkk;
            this.cra = b.backgroundColor;
            this.ard = b.tww;
            this.vpe = b.borderColor;
            this.cio = b.epw;
            for (var d = 0, g = c.length; d < g; d++) {
                c[d].goa(b.nin)
            }
            for (var d = 0, g = n.length; d < g; d++) {
                n[d].goa(b.ejv)
            }
            for (var d = 0, g = k.length; d < g; d++) {
                k[d].goa(b.dfk)
            }
            for (var d = 0, g = f.length; d < g; d++) {
                f[d].goa(b.display)
            }
            for (var d = 0, g = m.length; d < g; d++) {
                m[d].goa(b.tua)
            }
            for (var d = 0, g = l.length; d < g; d++) {
                l[d].goa(b.tua)
            }
            this.tjx.eqb("checkboxes", "#goa", [b.gcn])
        } catch (j) {
            console.error(j)
        }
    };
    this.wez = function(g) {
        try {
            var b = this.tjx.nlq("lbuttons"),
                o = this.tjx.nlq("mbuttons"),
                l = this.tjx.nlq("tbuttons"),
                n = this.tjx.nlq("sbuttons"),
                m = this.tjx.nlq("hbuttons"),
                c = this.tjx.nlq("bdisplays"),
                f = this.tjx.nlq("adisplays");
            uit = this.tjx.nlq("checkboxes"), zdo = n.length, yai = (zdo <= 2) ? g.wnm : (zdo <= 3) ? g.voo : (zdo <= 4) ? g.sdz : g.qcr, zdo = m.length, hmw = (zdo <= 2) ? g.wnm : (zdo <= 3) ? g.voo : (zdo <= 4) ? g.sdz : g.qcr, lla = (this.parent.hxx() != null) ? g.chv : g.cag;
            this.etr = g.ylx;
            this.rgy = g.txi;
            this.qzx = g.myv;
            this.udn = g.cvg;
            this.elk = g.pee;
            this.olu = g.nyy;
            this.ydj = g.sey;
            this.ahj = g.rfq;
            this.pxh = g.xgk;
            this.apn = g.vrr;
            this.zum = g.zfg;
            this.hny = g.bft;
            this.tjx.fdt("bett", "#mya", [lla.lmg]);
            this.tjx.fdt("autot", "#mya", [lla.qys]);
            this.tjx.fdt("helpt", "#mya", [lla.pjw]);
            this.tjx.fdt("settingt", "#mya", [lla.ovf]);
            this.tjx.fdt("returnt", "#mya", [lla.ksj]);
            this.tjx.fdt("lbet", "#mya", [g.bhw]);
            this.tjx.fdt("mbet", "#mya", [g.idd]);
            this.tjx.fdt("llines", "#mya", [g.bhz]);
            this.tjx.fdt("mlines", "#mya", [g.vsc]);
            this.tjx.fdt("betd", "#mya", [g.kog]);
            this.tjx.fdt("linesd", "#mya", [g.oir]);
            this.tjx.fdt("totald", "#mya", [g.iud]);
            this.tjx.fdt("lgames", "#mya", [g.rrd]);
            this.tjx.fdt("mgames", "#mya", [g.bjk]);
            this.tjx.fdt("lmincredit", "#mya", [g.qtq]);
            this.tjx.fdt("mmincredit", "#mya", [g.wkr]);
            this.tjx.fdt("lmaxcredit", "#mya", [g.ftp]);
            this.tjx.fdt("mmaxcredit", "#mya", [g.qdt]);
            this.tjx.fdt("lmaxwin", "#mya", [g.zwb]);
            this.tjx.fdt("mmaxwin", "#mya", [g.aqa]);
            this.tjx.fdt("gamesd", "#mya", [g.moj]);
            this.tjx.fdt("mincreditd", "#mya", [g.yky]);
            this.tjx.fdt("maxcreditd", "#mya", [g.gnr]);
            this.tjx.fdt("maxwind", "#mya", [g.idp]);
            this.tjx.fdt("cmincredit", "#mya", [g.wjy]);
            this.tjx.fdt("cmaxcredit", "#mya", [g.ltr]);
            this.tjx.fdt("cmaxwin", "#mya", [g.vdi]);
            for (var d = 0, j = b.length; d < j; d++) {
                b[d].wez(g.nin)
            }
            for (var d = 0, j = o.length; d < j; d++) {
                o[d].wez(g.ejv)
            }
            for (var d = 0, j = l.length; d < j; d++) {
                l[d].wez(g.dfk)
            }
            for (var d = 0, j = c.length; d < j; d++) {
                c[d].wez(g.ycg)
            }
            for (var d = 0, j = f.length; d < j; d++) {
                f[d].wez(g.xkl)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].wez(g.tua)
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].wez(g.tua)
            }
            for (var d = 0, j = uit.length; d < j; d++) {
                uit[d].wez(g.gcn)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].mya(yai[d])
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].mya(hmw[d])
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.coa = function(c) {
        var b = (this.parent.hxx() != null) ? c.chv : c.cag;
        this.tjx.dcj("bett", this.vgf(b.lmg, null, this.parent.qug.uyv("btn_b"), this.wkj, null), ["buttons", "tbuttons"]);
        if (this.parent.hxx() != null) {
            this.tjx.dcj("autot", this.vgf(b.qys, null, this.parent.qug.uyv("btn_as"), this.hxo, null), ["buttons", "tbuttons"])
        }
        this.tjx.dcj("helpt", this.vgf(b.pjw, null, this.parent.qug.uyv("btn_i"), this.sfm, null), ["buttons", "tbuttons"]);
        this.tjx.dcj("settingt", this.vgf(b.ovf, null, this.parent.qug.uyv("btn_se"), this.ucx, null), ["buttons", "tbuttons"]);
        this.tjx.dcj("returnt", this.vgf(b.ksj, null, this.parent.qug.uyv("btn_c"), this.mvs, null), ["buttons", "tbuttons"])
    };
    this.upb = function(b) {
        this.tjx.dcj("betd", this.qcw(b.kog, null, this.parent.ghh), ["displays", "bdisplays"]);
        this.tjx.dcj("lbet", this.nvt(b.bhw, "", this.parent.ovg), ["buttons", "lbuttons", "bbuttons"]);
        this.tjx.dcj("mbet", this.nvt(b.idd, "+", this.parent.pxy), ["buttons", "mbuttons", "bbuttons"]);
        this.tjx.dcj("linesd", this.qcw(b.oir, null, this.parent.lbz), ["displays", "bdisplays"]);
        if (this.emj) {
            this.tjx.dcj("llines", this.nvt(b.bhz, "", this.parent.poq), ["buttons", "lbuttons", "bbuttons"]);
            this.tjx.dcj("mlines", this.nvt(b.vsc, "+", this.parent.ogf), ["buttons", "mbuttons", "bbuttons"])
        }
        this.tjx.dcj("totald", this.qcw(b.iud, null, this.parent.pex()), ["displays", "bdisplays"])
    };
    this.qfz = function(b) {
        this.tjx.dcj("gamesd", this.qcw(b.moj, null, this.dth[this.wwv]), ["displays", "adisplays"]);
        this.tjx.dcj("lgames", this.nvt(b.rrd, "", this.spo), ["buttons", "lbuttons", "abuttons"]);
        this.tjx.dcj("mgames", this.nvt(b.bjk, "+", this.mtp), ["buttons", "mbuttons", "abuttons"]);
        this.tjx.dcj("mincreditd", this.qcw(b.yky, null, "---"), ["displays", "adisplays"]);
        this.tjx.dcj("lmincredit", this.nvt(b.qtq, "", this.efr), ["buttons", "lbuttons", "abuttons"]);
        this.tjx.dcj("mmincredit", this.nvt(b.wkr, "+", this.oid), ["buttons", "mbuttons", "abuttons"]);
        this.tjx.dcj("maxcreditd", this.qcw(b.gnr, null, "---"), ["displays", "adisplays"]);
        this.tjx.dcj("lmaxcredit", this.nvt(b.ftp, "", this.lbg), ["buttons", "lbuttons", "abuttons"]);
        this.tjx.dcj("mmaxcredit", this.nvt(b.qdt, "+", this.ssx), ["buttons", "mbuttons", "abuttons"]);
        this.tjx.dcj("maxwind", this.qcw(b.idp, null, "---"), ["displays", "adisplays"]);
        this.tjx.dcj("lmaxwin", this.nvt(b.zwb, "", this.dfu), ["buttons", "lbuttons", "abuttons"]);
        this.tjx.dcj("mmaxwin", this.nvt(b.aqa, "+", this.hqq), ["buttons", "mbuttons", "abuttons"]);
        this.tjx.dcj("cmincredit", this.xta(b.wjy, "", this.tyv), ["checkboxes", "acheckboxes"]);
        this.tjx.dcj("cmaxcredit", this.xta(b.ltr, "", this.qyb), ["checkboxes", "acheckboxes"]);
        this.tjx.dcj("cmaxwin", this.xta(b.vdi, "", this.wme), ["checkboxes", "acheckboxes"])
    };
    this.vgj = function(i, g, f, e, d, b) {
        var c = new any();
        c.fbq(new dho(0, 0, 1, 1), this.context2D);
        c.parent = this;
        c.ncb = e;
        c.ikg = g;
        c.ozz(d, b);
        c.wez(this.parent.ekl.odc.tua);
        c.goa(this.parent.style.odc.tua);
        c.vfh(f);
        this.tjx.dcj(i, c, ["buttons", "sbuttons"])
    };
    this.gtq = function(f, e, d, c) {
        var b = new any();
        b.fbq(new dho(0, 0, 1, 1), this.context2D);
        b.parent = this;
        b.ncb = c;
        b.ikg = e;
        b.wez(this.parent.ekl.odc.tua);
        b.goa(this.parent.style.odc.tua);
        b.vfh(d);
        this.tjx.dcj(f, b, ["buttons", "hbuttons"])
    };
    this.qcw = function(b, e, d) {
        var c = new pjz();
        c.fbq(b, this.context2D, null, e, d);
        c.parent = this;
        return c
    };
    this.nvt = function(c, e, d) {
        var b = new ttn();
        b.fbq(c, this.context2D, null, null, e);
        b.parent = this;
        b.ncb = d;
        return b
    };
    this.vgf = function(d, g, f, e, c) {
        var b = new ttn();
        b.fbq(d, this.context2D, null, f, g);
        b.parent = this;
        b.ncb = e;
        if (c != null) {
            b.uvs = c
        }
        return b
    };
    this.xta = function(c, e, d) {
        var b = new wng();
        b.fbq(c, this.context2D, null, e);
        b.parent = this;
        b.ncb = d;
        return b
    };
    this.fwl = function(o, n) {
        var m = this.tjx.nlq("buttons"),
            g = this.tjx.nlq("checkboxes"),
            f = o - this.x,
            d = n - this.y;
        for (var e = 0, l = m.length; e < l; e++) {
            var b = m[e];
            if (f >= b.x && f <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.aod() === true) {
                if (b.vka() === true && b.wob() === false) {
                    if (b instanceof any) {
                        this.parent.qug.qyk("btn");
                        this.parent.qug.eze("btn");
                        b.dan(true, true, true);
                        b.ncb()
                    } else {
                        if (b instanceof ttn) {
                            if (b.bfw() === "rect") {
                                this.parent.qug.qyk("btn");
                                this.parent.qug.eze("btn");
                                b.dan(true, true, false);
                                b.ncb()
                            } else {
                                b.dan(true, false, false);
                                this.rbw = 0;
                                this.fzs = 1;
                                if (b.ncb() === false) {
                                    this.gxf = function() {
                                        if (b.ncb() === true) {
                                            clearInterval(a.bmz);
                                            b.dan(false, true);
                                            for (var i = 0; i < l; i++) {
                                                m[i].awu(false)
                                            }
                                        }
                                    };
                                    this.bmz = setInterval(this.gxf, this.bxa)
                                }
                            }
                        }
                    }
                    for (var c = 0; c < l; c++) {
                        m[c].awu(true)
                    }
                    return true
                }
            }
        }
        for (var e = 0, l = g.length; e < l; e++) {
            var k = g[e];
            if (f >= k.x && f <= k.x + k.width && d >= k.y && d <= k.y + k.height) {
                if (k.aod() === true && k.vka() === true) {
                    k.lbk(!k.jjl(), true);
                    k.ncb();
                    for (var c = 0; c < l; c++) {
                        g[c].awu(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.qua = function() {
        var e = this.tjx.nlq("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.gqn() == true && !(c instanceof ttn && c.bfw() === "rect")) {
                clearInterval(this.bmz);
                c.dan(false, true);
                return true
            }
        }
        return false
    };
    this.xba = function(b) {};
    this.hrl = function(b) {};
    this.kdv = function(c, b, d) {
        this.tjx.fdt("betd", "#yya", [c]);
        this.tjx.fdt("linesd", "#yya", [b]);
        this.tjx.fdt("totald", "#yya", [d]);
        this.parent.xgz()
    };
    this.ppm = function(b) {
        this.dth = b.g;
        this.alk = b.v;
        this.vxt = b.v;
        this.zps = b.r;
        this.mox = b.l;
        if (typeof b.m != "undefined" && b.m != null && b.m > 0) {
            this.wvm = b.m;
            this.hlu = b.m
        }
    };
    this.qxw = function() {
        if (this.zps === true) {
            this.jue = this.parent.vkp;
            this.meh = this.parent.vkp;
            this.wwv = 0;
            this.tni = 0
        }
    };
    this.jbu = function() {
        if (this.dth.length > 0 && this.wwv >= 0) {
            return this.dth[this.wwv]
        }
        return 0
    };
    this.uzf = function() {
        var b = this.tjx.fei("cmincredit") == null || this.tjx.fdt("cmincredit", "#jjl");
        if (this.jue > 0 && b === true) {
            return this.jue
        }
        return 0
    };
    this.fmc = function() {
        var b = this.tjx.fei("cmaxcredit") == null || this.tjx.fdt("cmaxcredit", "#jjl");
        if (this.meh > 0 && b === true) {
            return this.meh
        }
        return 0
    };
    this.rui = function() {
        var b = this.tjx.fei("cmaxwin") == null || this.tjx.fdt("cmaxwin", "#jjl");
        if (this.tni > 0 && b === true) {
            return this.tni
        }
        return 0
    };
    this.wyc = function(c, f, d) {
        if (this.dth && this.dth.length > 0) {
            var g = this.tjx.fei("cmincredit") == null || this.tjx.fdt("cmincredit", "#jjl"),
                e = this.tjx.fei("cmaxcredit") == null || this.tjx.fdt("cmaxcredit", "#jjl"),
                b = this.tjx.fei("cmaxwin") == null || this.tjx.fdt("cmaxwin", "#jjl");
            if (this.zps === true) {
                g = this.mox;
                e = false;
                b = false;
                this.qxw()
            } else {
                if (this.mox === true) {
                    g = true;
                    this.jue = (this.jue < this.parent.vkp) ? this.jue : this.parent.vkp;
                    this.jue = (this.jue > 0) ? this.jue : this.parent.vkp
                } else {
                    g = (this.jue < this.parent.vkp) ? g : false;
                    this.jue = (this.jue < this.parent.vkp) ? this.jue : this.parent.vkp
                }
                e = (this.meh > this.parent.vkp) ? e : false;
                this.meh = (this.meh > this.parent.vkp) ? this.meh : this.parent.vkp
            }
            this.tjx.fdt("cmincredit", "#lbk", [g]);
            this.tjx.fdt("cmaxcredit", "#lbk", [e]);
            this.tjx.fdt("cmaxwin", "#lbk", [b]);
            this.tjx.fdt("gamesd", "#yya", [(this.dth[this.wwv] > 0) ? this.dth[this.wwv] : "---"]);
            this.tjx.fdt("mincreditd", "#yya", [(g === true && this.jue > 0) ? this.parent.ywx(this.jue) : "---"]);
            this.tjx.fdt("maxcreditd", "#yya", [(e === true && this.meh > 0) ? this.parent.ywx(this.meh) : "---"]);
            this.tjx.fdt("maxwind", "#yya", [(b === true && this.tni > 0) ? this.parent.ywx(this.tni) : "---"]);
            this.tjx.fdt("lmincredit", "#dwr", [g]);
            this.tjx.fdt("mmincredit", "#dwr", [g]);
            this.tjx.fdt("lmaxcredit", "#dwr", [e]);
            this.tjx.fdt("mmaxcredit", "#dwr", [e]);
            this.tjx.fdt("lmaxwin", "#dwr", [b]);
            this.tjx.fdt("mmaxwin", "#dwr", [b])
        }
        this.trx = c;
        this.mbj = f;
        if (typeof d == "number") {
            if (d === 0) {
                this.wkj()
            } else {
                if (d === 1) {
                    if (this.parent.hxx() != null) {
                        this.hxo()
                    } else {
                        this.sfm()
                    }
                } else {
                    if (d === 2) {
                        if (this.parent.hxx() != null) {
                            this.sfm()
                        } else {
                            this.ucx()
                        }
                    } else {
                        if (d === 3 && this.parent.hxx() != null) {
                            this.ucx()
                        }
                    }
                }
            }
        } else {
            this.wkj()
        }
        this.tjx.eqb("tbuttons", "#vba", [true]);
        this.dwr(true);
        this.parent.xgz()
    };
    this.yen = function() {
        this.tjx.eqb("tbuttons", "#vba", [false]);
        this.tjx.eqb("bbuttons", "#vba", [false]);
        this.tjx.eqb("sbuttons", "#vba", [false]);
        this.tjx.eqb("abuttons", "#vba", [false]);
        this.tjx.eqb("acheckboxes", "#vba", [false]);
        this.dwr(false);
        this.parent.xgz()
    };
    this.stop = function() {
        clearInterval(this.bmz)
    };
    this.jfd = function(d, b) {
        var c = "";
        this.tjx.fdt("language", "#yya", [kit.vev.dcq(d.language)]);
        this.tjx.fdt("audio", "#yya", [kit.vev.dcq(d.audio)]);
        this.tjx.fdt("melody", "#yya", [kit.vev.dcq(d.zsk)]);
        this.tjx.fdt("fullscreen", "#yya", [kit.vev.dcq(d.shj)]);
        this.tjx.fdt("turbo", "#yya", [kit.vev.dcq(d.xjg)]);
        this.tjx.fdt("help", "#yya", [kit.vev.dcq(d.acc)]);
        this.tjx.fdt("history", "#yya", [kit.vev.dcq(d.kaq)]);
        this.tjx.fdt("statistic", "#yya", [kit.vev.dcq(d.zrz)]);
        this.tjx.fdt("rules", "#yya", [kit.vev.dcq(d.fjd)]);
        this.tjx.fdt("gamble", "#yya", [kit.vev.dcq(d.byq)]);
        if (kit.vev.qrb[kit.vev.kus] === kit.mwi.jeb) {
            c = kit.vev.dcq(d.left)
        } else {
            if (kit.vev.qrb[kit.vev.kus] === kit.mwi.gmy) {
                c = kit.vev.dcq(d.daj)
            } else {
                if (kit.vev.qrb[kit.vev.kus] === kit.mwi.vtt) {
                    c = kit.vev.dcq(d.cod)
                }
            }
        }
        this.tjx.fdt("adjustment", "#yya", [c]);
        if (b && b === true) {
            this.mbu = kit.vev.dcq(d.vzf) + "/" + kit.vev.dcq(d.mzk) + ":";
            this.axl = kit.vev.dcq(d.lbz) + ":"
        } else {
            this.mbu = kit.vev.dcq(d.vzf) + ":"
        }
        this.spw = kit.vev.dcq(d.tqd) + ":";
        this.fub = kit.vev.dcq(d.qfi);
        this.dsz = kit.vev.dcq(d.vol);
        if (this.parent.gkp === true && kit.fng.value44.d === true) {
            this.bux = kit.vev.dcq(d.wwl)
        }
        this.tjx.fdt("cmincredit", "#yya", [kit.vev.dcq(d.ige)]);
        this.tjx.fdt("cmaxcredit", "#yya", [kit.vev.dcq(d.ufy)]);
        this.tjx.fdt("cmaxwin", "#yya", [kit.vev.dcq(d.ops)])
    };
    this.xgz = function(l, j, m, e) {
        if (!this.aod() || !this.parent.avk()) {
            return
        }
        var c = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = this.tjx.nlq("tbuttons"),
            b = this.cra,
            g = this.vpe;
        if (this.ard) {
            b = n.createRadialGradient(this.x + this.width / 2, this.y + this.height / 2, this.height / 6, this.x + this.width / 2, this.y + this.height / 2, this.height);
            b.addColorStop(0, this.cra);
            b.addColorStop(1, this.ard)
        }
        if (this.cio) {
            g = n.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            g.addColorStop(0, this.vpe);
            g.addColorStop(1, this.cio)
        }
        n.save();
        n.clearRect(0, 0, this.width, this.height);
        if (c) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        kit.vcj.cjl(n, 0, 0, this.width, this.height, this.rgy, b, g, this.etr);
        for (var d = 0, f = k.length; d < f; d++) {
            k[d].xgz()
        }
        if (this.yas === 0) {
            this.tru(n)
        } else {
            if (this.yas === 1) {
                this.fzt(n)
            } else {
                if (this.yas === 2) {
                    this.eli(n)
                } else {
                    if (this.yas === 3) {
                        this.ruo(n)
                    }
                }
            }
        }
        n.restore();
        if (this.evc && this.hlo) {
            if (c) {
                this.evc.drawImage(this.hlo, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.evc.drawImage(this.hlo, this.x, this.y)
            }
        }
    };
    this.tru = function(c) {
        var f = this.tjx.nlq("bbuttons"),
            d = this.tjx.nlq("bdisplays");
        if (this.olu.width > 0 && this.olu.height > 0) {
            kit.vcj.enf(c, this.mbu, this.usi, this.olu.x, this.olu.y, this.olu.width, this.olu.height, this.bnn, this.qzx, this.yxa, 0)
        }
        if (this.ydj.width > 0 && this.ydj.height > 0) {
            kit.vcj.enf(c, this.axl, this.usi, this.ydj.x, this.ydj.y, this.ydj.width, this.ydj.height, this.bnn, this.qzx, this.yxa, 0)
        }
        if (this.ahj.width > 0 && this.ahj.height > 0) {
            kit.vcj.enf(c, this.spw, this.usi, this.ahj.x, this.ahj.y, this.ahj.width, this.ahj.height, this.bnn, this.qzx, this.yxa, 0)
        }
        kit.vcj.hoi(c, this.feq, this.usi, this.pxh.x, this.pxh.y, this.pxh.width, this.pxh.height, this.bnn, this.elk, this.yxa, "center", true);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].xgz()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].xgz()
        }
    };
    this.fzt = function(c) {
        var f = this.tjx.nlq("abuttons"),
            d = this.tjx.nlq("adisplays"),
            g = this.tjx.nlq("acheckboxes");
        kit.vcj.hoi(c, this.bux, this.usi, this.apn.x, this.apn.y, this.apn.width, this.apn.height, this.bnn, this.elk, this.yxa, "center", true);
        kit.vcj.enf(c, this.fub, this.usi, this.zum.x, this.zum.y, this.zum.width, this.zum.height, this.bnn, this.udn, this.yxa, 0);
        kit.vcj.bom(c, this.dsz, this.usi, this.hny.x, this.hny.y, this.hny.width, this.hny.height, this.bnn, this.udn, this.yxa);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].xgz()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].xgz()
        }
        for (var e = 0, b = g.length; e < b; e++) {
            g[e].xgz()
        }
    };
    this.eli = function(c) {
        var d = this.tjx.nlq("hbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].xgz()
        }
    };
    this.ruo = function(c) {
        var d = this.tjx.nlq("sbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].xgz()
        }
    };
    this.mtp = function() {
        a.wwv = (a.wwv < a.dth.length - 1) ? a.wwv + 1 : 0;
        a.parent.qug.eze("btn");
        a.tjx.fdt("gamesd", "#yya", [(a.dth[a.wwv] > 0) ? a.dth[a.wwv] : "---"]);
        a.xgz();
        return (a.wwv >= a.dth.length - 1)
    };
    this.spo = function() {
        a.wwv = (a.wwv > 0) ? a.wwv - 1 : a.dth.length - 1;
        a.parent.qug.eze("btn");
        a.tjx.fdt("gamesd", "#yya", [(a.dth[a.wwv] > 0) ? a.dth[a.wwv] : "---"]);
        a.xgz();
        return (a.wwv <= 0)
    };
    this.oid = function() {
        var b = a.tjx.fei("cmincredit") == null || a.tjx.fdt("cmincredit", "#jjl");
        if (b === true) {
            if (++a.rbw > 10) {
                a.fzs = 10
            }
            a.jue = (a.jue + (a.alk * a.fzs) <= a.parent.vkp) ? a.jue + (a.alk * a.fzs) : a.parent.vkp;
            a.parent.qug.eze("btn");
            a.tjx.fdt("mincreditd", "#yya", [(a.jue > 0) ? a.parent.ywx(a.jue) : "---"]);
            a.tjx.fdt("mmincredit", "#dwr", [b && a.jue < a.parent.vkp]);
            a.tjx.fdt("lmincredit", "#dwr", [b && a.jue > 0]);
            a.xgz();
            return (a.jue >= a.parent.vkp)
        }
        return true
    };
    this.efr = function() {
        var b = a.tjx.fei("cmincredit") == null || a.tjx.fdt("cmincredit", "#jjl");
        if (b === true) {
            if (++a.rbw > 10) {
                a.fzs = 10
            }
            a.jue = (a.jue - (a.alk * a.fzs) > 0) ? a.jue - (a.alk * a.fzs) : 0;
            a.parent.qug.eze("btn");
            a.tjx.fdt("mincreditd", "#yya", [(a.jue > 0) ? a.parent.ywx(a.jue) : "---"]);
            a.tjx.fdt("mmincredit", "#dwr", [b && a.jue < a.parent.vkp]);
            a.tjx.fdt("lmincredit", "#dwr", [b && a.jue > 0]);
            a.xgz();
            return (a.jue >= a.parent.vkp || a.jue <= 0)
        }
        return true
    };
    this.ssx = function() {
        var b = a.tjx.fei("cmaxcredit") == null || a.tjx.fdt("cmaxcredit", "#jjl");
        if (b === true) {
            if (++a.rbw > 10) {
                a.fzs = 10
            }
            a.meh = (a.meh + (a.vxt * a.fzs) > 0) ? a.meh + (a.vxt * a.fzs) : 0;
            a.parent.qug.eze("btn");
            a.tjx.fdt("maxcreditd", "#yya", [(a.meh > 0) ? a.parent.ywx(a.meh) : "---"]);
            a.tjx.fdt("lmaxcredit", "#dwr", [b && a.meh > a.parent.vkp]);
            a.xgz();
            return (a.meh <= a.parent.vkp)
        }
        return true
    };
    this.lbg = function() {
        var b = a.tjx.fei("cmaxcredit") == null || a.tjx.fdt("cmaxcredit", "#jjl");
        if (b === true) {
            if (++a.rbw > 10) {
                a.fzs = 10
            }
            a.meh = (a.meh - (a.vxt * a.fzs) > a.parent.vkp) ? a.meh - (a.vxt * a.fzs) : a.parent.vkp;
            a.parent.qug.eze("btn");
            a.tjx.fdt("maxcreditd", "#yya", [(a.meh > 0) ? a.parent.ywx(a.meh) : "---"]);
            a.tjx.fdt("lmaxcredit", "#dwr", [b && a.meh > a.parent.vkp]);
            a.xgz();
            return (a.meh <= a.parent.vkp)
        }
        return true
    };
    this.hqq = function() {
        var b = a.tjx.fei("cmaxwin") == null || a.tjx.fdt("cmaxwin", "#jjl");
        if (b === true) {
            if (++a.rbw > 10) {
                a.fzs = 10
            }
            a.tni = (a.tni + (a.vxt * a.fzs) > 0) ? a.tni + (a.vxt * a.fzs) : 0;
            a.parent.qug.eze("btn");
            a.tjx.fdt("maxwind", "#yya", [(a.tni > 0) ? a.parent.ywx(a.tni) : "---"]);
            a.tjx.fdt("lmaxwin", "#dwr", [b && a.tni > a.vxt]);
            a.xgz();
            return (a.tni <= a.vxt)
        }
        return true
    };
    this.dfu = function() {
        var b = a.tjx.fei("cmaxwin") == null || a.tjx.fdt("cmaxwin", "#jjl");
        if (b === true) {
            if (++a.rbw > 10) {
                a.fzs = 10
            }
            a.tni = (a.tni - (a.vxt * a.fzs) > 0) ? a.tni - (a.vxt * a.fzs) : a.vxt;
            a.parent.qug.eze("btn");
            a.tjx.fdt("maxwind", "#yya", [(a.tni > 0) ? a.parent.ywx(a.tni) : "---"]);
            a.tjx.fdt("lmaxwin", "#dwr", [b && a.tni > a.vxt]);
            a.xgz();
            return (a.tni <= a.vxt)
        }
        return true
    };
    this.tyv = function() {
        var b = a.tjx.fei("cmincredit") == null || a.tjx.fdt("cmincredit", "#jjl");
        a.jue = a.parent.vkp;
        a.tjx.fdt("mincreditd", "#yya", [(b === true && a.jue > 0) ? a.parent.ywx(a.jue) : "---"]);
        a.tjx.fdt("lmincredit", "#dwr", [b]);
        a.tjx.fdt("mmincredit", "#dwr", [b && a.jue < a.parent.vkp]);
        a.xgz()
    };
    this.qyb = function() {
        var b = a.tjx.fei("cmaxcredit") == null || a.tjx.fdt("cmaxcredit", "#jjl");
        a.meh = a.parent.vkp;
        a.tjx.fdt("maxcreditd", "#yya", [(b === true && a.meh > 0) ? a.parent.ywx(a.meh) : "---"]);
        a.tjx.fdt("lmaxcredit", "#dwr", [b && a.meh > a.parent.vkp]);
        a.tjx.fdt("mmaxcredit", "#dwr", [b]);
        a.xgz()
    };
    this.wme = function() {
        var b = a.tjx.fei("cmaxwin") == null || a.tjx.fdt("cmaxwin", "#jjl");
        if (a.tni === 0) {
            a.tni = a.vxt
        }
        a.tjx.fdt("maxwind", "#yya", [(b === true && a.tni > 0) ? a.parent.ywx(a.tni) : "---"]);
        a.tjx.fdt("lmaxwin", "#dwr", [b && a.tni > a.vxt]);
        a.tjx.fdt("mmaxwin", "#dwr", [b]);
        a.xgz()
    };
    this.wkj = function() {
        a.yas = 0;
        a.tjx.fdt("bett", "#dan", [true, false, false]);
        a.tjx.fdt("autot", "#dan", [false, false, false]);
        a.tjx.fdt("helpt", "#dan", [false, false, false]);
        a.tjx.fdt("settingt", "#dan", [false, false, false]);
        a.tjx.fdt("returnt", "#dan", [false, false, false]);
        a.tjx.eqb("bbuttons", "#vba", [a.trx]);
        a.tjx.eqb("bbuttons", "#dwr", [a.trx]);
        a.tjx.eqb("abuttons", "#vba", [false]);
        a.tjx.eqb("acheckboxes", "#vba", [false]);
        a.tjx.eqb("hbuttons", "#vba", [false]);
        a.tjx.eqb("sbuttons", "#vba", [false]);
        a.xgz()
    };
    this.hxo = function() {
        var d = a.tjx.fei("cmincredit") == null || a.tjx.fdt("cmincredit", "#jjl"),
            c = a.tjx.fei("cmaxcredit") == null || a.tjx.fdt("cmaxcredit", "#jjl"),
            b = a.tjx.fei("cmaxwin") == null || a.tjx.fdt("cmaxwin", "#jjl");
        a.yas = 1;
        a.alk = (a.wvm > 0) ? a.parent.pex() * a.wvm : a.alk;
        a.vxt = (a.hlu > 0) ? a.parent.pex() * a.hlu : a.vxt;
        a.tjx.fdt("bett", "#dan", [false, false, false]);
        a.tjx.fdt("autot", "#dan", [true, false, false]);
        a.tjx.fdt("helpt", "#dan", [false, false, false]);
        a.tjx.fdt("settingt", "#dan", [false, false, false]);
        a.tjx.fdt("returnt", "#dan", [false, false, false]);
        a.tjx.eqb("bbuttons", "#vba", [false]);
        a.tjx.eqb("abuttons", "#vba", [true]);
        a.tjx.fdt("mmincredit", "#dwr", [d && a.jue < a.parent.vkp]);
        a.tjx.fdt("lmaxcredit", "#dwr", [c && a.meh > a.parent.vkp]);
        a.tjx.fdt("lmaxwin", "#dwr", [b && a.tni > a.vxt]);
        a.tjx.eqb("acheckboxes", "#vba", [true]);
        a.tjx.eqb("hbuttons", "#vba", [false]);
        a.tjx.eqb("sbuttons", "#vba", [false]);
        if (a.mox === true) {
            a.tjx.fdt("cmincredit", "#vba", [false])
        }
        a.xgz()
    };
    this.sfm = function() {
        a.yas = 2;
        a.tjx.fdt("bett", "#dan", [false, false, false]);
        a.tjx.fdt("autot", "#dan", [false, false, false]);
        a.tjx.fdt("helpt", "#dan", [true, false, false]);
        a.tjx.fdt("settingt", "#dan", [false, false, false]);
        a.tjx.fdt("returnt", "#dan", [false, false, false]);
        a.tjx.eqb("bbuttons", "#vba", [false]);
        a.tjx.eqb("abuttons", "#vba", [false]);
        a.tjx.eqb("acheckboxes", "#vba", [false]);
        a.tjx.eqb("hbuttons", "#vba", [true]);
        a.tjx.eqb("sbuttons", "#vba", [false]);
        a.xgz()
    };
    this.ucx = function() {
        a.yas = 3;
        a.tjx.fdt("bett", "#dan", [false, false, false]);
        a.tjx.fdt("autot", "#dan", [false, false, false]);
        a.tjx.fdt("helpt", "#dan", [false, false, false]);
        a.tjx.fdt("settingt", "#dan", [true, false, false]);
        a.tjx.fdt("returnt", "#dan", [false, false, false]);
        a.tjx.eqb("bbuttons", "#vba", [false]);
        a.tjx.eqb("abuttons", "#vba", [false]);
        a.tjx.eqb("acheckboxes", "#vba", [false]);
        a.tjx.eqb("hbuttons", "#vba", [false]);
        a.tjx.eqb("sbuttons", "#vba", [true]);
        a.tjx.fdt("gamble", "#vba", [a.mbj]);
        a.xgz()
    };
    this.mvs = function() {
        a.parent.jmr();
        a.tjx.fdt("returnt", "#dan", [false, false, false])
    }
}
ujh.prototype = new noe;

function cbd() {
    var a = this;
    this.bnn = null;
    this.yxa = "bold";
    this.cra = "rgb(0,0,0)";
    this.ard = null;
    this.usi = "rgb(255,255,255)";
    this.cio = null;
    this.vpe = "rgb(60,60,60)";
    this.rhp = null;
    this.osm = null;
    this.fol = false;
    this.qot = [];
    this.lhv = [];
    this.ebx = null;
    this.uuc = 19;
    this.nfk = 15;
    this.iqp = 120;
    this.hwf = 2;
    this.mgv = 2;
    this.qpy = 2;
    this.ikw = 10;
    this.phy = 12;
    this.fbq = function(b, d, c) {
        cbd.prototype.fbq.call(this, b, d, c)
    };
    this.wez = function(b) {
        try {
            this.phy = b.fontSize;
            this.uuc = b.eaa;
            this.nfk = b.kvh;
            this.iqp = b.iua;
            this.hwf = b.nib;
            this.mgv = b.dxd;
            this.qpy = b.fuu;
            this.ikw = b.gau
        } catch (c) {
            console.error(c)
        }
    };
    this.goa = function(b) {
        try {
            this.bnn = b.font;
            this.yxa = b.gas;
            this.cra = b.backgroundColor;
            this.ard = b.tww;
            this.usi = b.lkk;
            this.vpe = b.borderColor;
            this.cio = b.epw;
            if (this.ard) {
                this.rhp = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.rhp.addColorStop(0, this.ard);
                this.rhp.addColorStop(0.5, this.cra)
            } else {
                this.rhp = this.cra
            }
            if (this.cio) {
                this.osm = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.osm.addColorStop(0, this.cio);
                this.osm.addColorStop(1, this.vpe)
            } else {
                this.osm = this.vpe
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.fwl = function(b, g, c) {
        var e = b - this.x,
            d = g - this.y,
            f = (c && c === true) ? this.ikw : 0;
        if (e >= this.x && e <= this.x + this.width && d >= this.y && d <= this.y + this.height + f && this.vka()) {
            this.parent.xax();
            return true
        }
        return false
    };
    this.ptz = function(d, b, c) {
        this.lhv.push({
            id: d,
            anf: b,
            value: c,
            jwy: null
        })
    };
    this.mul = function(e, c, d, b) {
        this.lhv.push({
            id: e,
            anf: c,
            value: d,
            jwy: b
        })
    };
    this.ctt = function(d, b, c) {
        this.qot.push({
            id: d,
            qwb: b,
            value: c
        })
    };
    this.gbu = function(e, d) {
        for (var c = 0, b = this.lhv.length; c < b; c++) {
            if (this.lhv[c].id == e) {
                this.lhv[c].value = d;
                return true
            }
        }
        return false
    };
    this.rlr = function(c, e) {
        for (var d = 0, b = c.length; d < b; d++) {
            if (c[d] == e) {
                return d
            }
        }
        return -1
    };
    this.oia = function(e, d) {
        for (var c = 0, b = this.qot.length; c < b; c++) {
            if (this.qot[c].id == e) {
                if (this.qot[c].value != d) {
                    this.qot[c].value = d;
                    return true
                } else {
                    return false
                }
            }
        }
        return false
    };
    this.uvc = function(b) {
        this.ebx = b
    };
    this.vba = function(b) {
        this.fol = b
    };
    this.vka = function(b) {
        return this.fol
    };
    this.trg = function(c, b) {
        if (this.gbu(c, b)) {
            window.slo(a.xgz)
        }
    };
    this.xoi = function(c, b) {
        if (this.oia(c, b)) {
            window.slo(a.xgz)
        }
    };
    this.fxa = function(b) {
        this.uvc(b);
        window.slo(a.xgz)
    };
    this.xgz = function() {
        if (!a.aod() || !a.parent.avk()) {
            return
        }
        var e = (a.height - a.phy) / 2 + a.mgv,
            c = a.hwf + a.uuc * a.lhv.length,
            d = a.width - c - (a.iqp * a.qot.length),
            b = a.context2D;
        b.save();
        kit.vcj.zrw(b, 0, 0, a.width, a.height, a.rhp, 1);
        a.wyq(b, e);
        a.ynw(b, e);
        if (a.ebx && a.ebx != "") {
            kit.vcj.bom(b, a.ebx, a.usi, c, e, d, a.phy, a.bnn, a.phy, a.yxa)
        } else {
            if (a.vka()) {
                a.tha(b)
            }
        }
        a.zmk(b, 0, a.height - a.qpy / 2, a.width, a.height - a.qpy / 2);
        b.restore();
        if (a.evc && a.hlo) {
            a.evc.drawImage(a.hlo, a.x, a.y)
        }
    };
    this.wyq = function(d, g) {
        var c = 0;
        for (var f = 0, b = this.lhv.length; f < b; f++) {
            if (this.lhv[f].jwy) {
                var e = this.rlr(this.lhv[f].jwy, this.lhv[f].value);
                if (this.lhv[f].anf instanceof Array) {
                    kit.vcj.bom(d, this.lhv[f].anf[e], this.usi, c, g, this.uuc, this.phy, this.bnn, this.phy, this.yxa)
                } else {
                    if (this.lhv[f].anf instanceof Image || this.lhv[f].anf instanceof HTMLCanvasElement) {
                        d.drawImage(this.lhv[f].anf, e * this.nfk, 0, this.nfk, this.lhv[f].anf.height, c + this.hwf, g - this.mgv, this.uuc - 2 * this.hwf, this.phy)
                    }
                }
            } else {
                d.save();
                d.globalAlpha = (this.lhv[f].value == true) ? 1 : 0.3;
                if (this.lhv[f].anf instanceof String) {
                    kit.vcj.bom(d, this.lhv[f].anf, this.usi, c, g, this.uuc, this.phy, this.bnn, this.phy, this.yxa)
                } else {
                    if (this.lhv[f].anf instanceof Image || this.lhv[f].anf instanceof HTMLCanvasElement) {
                        d.drawImage(this.lhv[f].anf, c + this.hwf, g - this.mgv, this.uuc - 2 * this.hwf, this.phy)
                    }
                }
                d.restore()
            }
            c += this.uuc;
            this.zmk(d, c, 0, c, this.height)
        }
        return c
    };
    this.ynw = function(d, f) {
        var c = this.width - this.hwf - this.iqp * this.qot.length;
        for (var e = 0, b = this.qot.length; e < b; e++) {
            if (this.qot[e].id == "freeplay") {
                kit.vcj.zrw(d, c, 0, this.iqp, this.height, "red", 0.4)
            } else {
                if (this.qot[e].id == "freespin") {
                    kit.vcj.zrw(d, c, 0, this.iqp, this.height, "rgb(100,255,100)", 0.5)
                }
            }
            this.zmk(d, c, 0, c, this.height);
            kit.vcj.bom(d, this.qot[e].qwb + this.qot[e].value, this.usi, c, f, this.iqp, this.phy, this.bnn, this.phy, this.yxa);
            c += this.iqp
        }
    };
    this.zmk = function(b, d, f, c, e) {
        b.save();
        b.strokeStyle = this.osm;
        b.lineWidth = this.qpy;
        b.beginPath();
        b.moveTo(d, f);
        b.lineTo(c, e);
        b.stroke();
        b.restore()
    };
    this.tha = function(c) {
        if (this.parent.pxa.fei("topb") == null) {
            return
        }
        var g = 3 * this.height,
            j = this.qpy,
            e = 9,
            d = Math.floor(this.height / 5),
            b = (this.width - g) / 2,
            k = this.qpy;
        c.save();
        c.strokeStyle = this.vpe;
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
cbd.prototype = new noe;

function bue() {
    var b = this;
    var c = 0;
    var a = 1;
    this.adg = 7;
    this.klj = 89;
    this.nnt = 10000;
    this.tjx = null;
    this.fol = false;
    this.twb = false;
    this.hoe = -1;
    this.hiv = 0;
    this.bnn = null;
    this.yxa = "bold";
    this.cra = "black";
    this.pnd = null;
    this.qtv = null;
    this.fmu = null;
    this.usi = "white";
    this.ysy = 0.8;
    this.pgv = 0;
    this.glx = 0;
    this.usw = 0;
    this.iwn = 0;
    this.fxc = 0;
    this.gvl = 0;
    this.ydi = 0;
    this.hwf = 10;
    this.mgv = 5;
    this.qfg = 10;
    this.xay = this.hwf;
    this.pvc = 10;
    this.lih = 20;
    this.cmq = 40;
    this.etr = 4;
    this.phy = 10;
    this.llj = null;
    this.dra = null;
    this.xec = "";
    this.bth = null;
    this.fbq = function(d, f, e) {
        bue.prototype.fbq.call(this, d, f, e);
        this.tjx = new itm();
        this.tjx.fbq();
        this.tjx.kbh("buttons");
        this.tjx.kbh("system");
        this.tjx.kbh("setting")
    };
    this.wez = function(d) {
        try {
            this.phy = d.fontSize;
            this.pvc = d.juv;
            this.lih = d.edo;
            this.cmq = d.vbc;
            this.etr = d.ylx;
            this.hwf = d.nib;
            this.mgv = d.dxd;
            this.qfg = d.slk
        } catch (f) {
            console.error(f)
        }
    };
    this.goa = function(g, m) {
        try {
            var k = this.tjx.nlq("buttons"),
                j = (m === true) ? g.kjc.hpn : g.ucn.hpn;
            this.bnn = g.font;
            this.yxa = g.gas;
            this.cra = g.backgroundColor;
            this.pnd = g.ogn;
            this.qtv = g.ogh;
            this.usi = g.lkk;
            this.ysy = g.nfa;
            if (this.pnd && this.qtv) {
                this.fmu = this.context2D.createLinearGradient(0, 0, this.width, 0);
                this.fmu.addColorStop(0, this.pnd);
                this.fmu.addColorStop(0.5, this.qtv);
                this.fmu.addColorStop(1, this.pnd)
            }
            for (var f = 0, d = k.length; f < d; f++) {
                k[f].goa(j)
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.fwl = function(p, o) {
        var n = this.tjx.jfj(),
            q = this.tjx.fei("audio"),
            r = this.tjx.fei("language"),
            f = this.tjx.fei("history"),
            e = p - this.x,
            d = o - this.y;
        if (this.twb) {
            return true
        }
        for (var l = 0, m = n.length; l < m; l++) {
            var g = n[l];
            if (e >= g.x && e <= g.x + g.width && d >= g.y && d <= g.y + g.height && g.aod()) {
                if (g.vka() && !g.wob()) {
                    if (g != q && g != r) {
                        this.parent.qug.qyk("btn");
                        this.parent.qug.eze("btn")
                    }
                    g.dan(true, true, false);
                    g.ncb();
                    for (var k = 0; k < m; k++) {
                        n[k].awu(true)
                    }
                    if (g != f) {
                        if (this.hoe >= 0) {
                            clearTimeout(this.hoe);
                            this.hoe = -1
                        }
                        this.hoe = setTimeout(this.fvq, this.nnt)
                    }
                }
                return true
            }
        }
        if (this.aod() && this.vka()) {
            if (p < this.x + this.fxc || p > this.x + this.fxc + this.gvl || o < this.y || o > this.y + this.height) {
                if (this.hoe >= 0) {
                    clearTimeout(this.hoe);
                    this.hoe = -1
                }
                return false
            }
        }
        return true
    };
    this.qua = function() {
        var g = this.tjx.jfj();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.gqn() == true) {
                e.dan(false, true);
                return true
            }
        }
        return false
    };
    this.xba = function(e) {
        var o = this.tjx.jfj(),
            d = this.tjx.nlq("system"),
            m = this.tjx.nlq("setting"),
            q = this.tjx.fei("audio"),
            l = 0,
            k = 0,
            n = 0,
            g = 0;
        if (this.twb) {
            return true
        }
        for (l = 0, n = m.length; l < n; l++) {
            var f = m[l];
            if ((e == f.uvs || e == f.mtx) && !f.wob()) {
                if (f != q) {
                    this.parent.qug.qyk("btn");
                    this.parent.qug.eze("btn")
                }
                f.dan(true, true, false);
                f.ncb();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].awu(true)
                }
                if (this.hoe >= 0) {
                    clearTimeout(this.hoe);
                    this.hoe = -1
                }
                return true
            }
        }
        for (l = 0, n = d.length; l < n; l++) {
            var f = d[l];
            if ((e == f.uvs || e == f.mtx) && f.vka() && !f.wob()) {
                if (f != q) {
                    this.parent.qug.qyk("btn");
                    this.parent.qug.eze("btn")
                }
                f.dan(true, true, false);
                f.ncb();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].awu(true)
                }
                if (this.hoe >= 0) {
                    clearTimeout(this.hoe);
                    this.hoe = -1
                }
                return true
            }
        }
        if (this.aod() && this.vka()) {
            if (this.parent.mum) {
                for (l = 0, n = this.parent.mum.mqk.length; l < n; l++) {
                    var p = this.parent.mum.mqk[l];
                    if (p.bgt == e || p.bgt == e) {
                        if (this.hoe >= 0) {
                            clearTimeout(this.hoe);
                            this.hoe = -1
                        }
                        return false
                    }
                }
            }
        }
        return false
    };
    this.hrl = function() {
        var g = this.tjx.jfj();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.gqn() == true) {
                e.dan(false, true, false);
                return true
            }
        }
        return false
    };
    this.lab = function(e, m) {
        var k = this.tjx.jfj(),
            l = e - this.x,
            j = m - this.y;
        this.dra = this.llj;
        this.llj = null;
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l >= f.x && l <= f.x + f.width && j >= f.y && j <= f.y + f.height && f.aod() && f.vka() && !f.wob()) {
                this.llj = f
            }
        }
        if (this.llj) {
            this.phi(true)
        } else {
            this.phi(false)
        }
        return true
    };
    this.vgj = function(e, f, g, i, l, d, m) {
        this.ydi = g.width;
        var k = new dho(this.xay, this.mgv, this.ydi, this.ydi);
        var j = new any();
        j.fbq(k, this.context2D);
        j.parent = this;
        j.ncb = i;
        j.brk = f;
        j.ozz(d, m);
        j.wez(this.parent.ekl.rbo.ufm);
        j.goa(this.parent.style.rbo.ucn.hpn);
        j.vfh(g);
        if (l != null) {
            j.mtx = l.hno;
            j.uvs = l.bgt;
            j.kgh = l.value
        }
        this.tjx.dcj(e, j, ["buttons", "setting"]);
        this.xay += this.ydi + this.hwf;
        this.gvl = this.xay
    };
    this.nfp = function(k, j, i, g, e) {
        this.ydi = i.width;
        var f = new dho(this.xay, this.mgv, this.ydi, this.ydi);
        var d = new any();
        d.fbq(f, this.context2D);
        d.parent = this;
        d.ncb = g;
        d.brk = j;
        d.wez(this.parent.ekl.rbo.ufm);
        d.goa(this.parent.style.rbo.ucn.hpn);
        d.vfh(i);
        if (e != null) {
            d.mtx = e.hno;
            d.uvs = e.bgt;
            d.kgh = e.value
        }
        this.tjx.dcj(k, d, ["buttons", "system"]);
        this.xay += this.ydi + this.hwf;
        this.gvl = this.xay
    };
    this.qeb = function() {
        var f = this.tjx.jfj();
        this.gvl += 2 * this.qfg;
        this.fxc = Math.round((this.width - this.gvl) / 2);
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].x += this.fxc + this.qfg
        }
    };
    this.tap = function() {
        return this.gvl
    };
    this.vba = function(d) {
        this.fol = d
    };
    this.vka = function() {
        return this.fol
    };
    this.zdr = function(g) {
        var f = this.tjx.jfj();
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].vba(g)
        }
        this.parent.xgz()
    };
    this.ncp = function(g) {
        var f = this.tjx.nlq("system");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].vba(g)
        }
        this.parent.xgz()
    };
    this.vxl = function(g) {
        var f = this.tjx.nlq("setting");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].vba(g)
        }
        this.parent.xgz()
    };
    this.wyc = function() {
        if (this.aod()) {
            return
        }
        if (this.twb) {
            if (this.iwn === a) {
                this.bth = this.wyc
            } else {
                this.bth = null
            }
        } else {
            this.bth = null;
            this.fec();
            this.msl()
        }
    };
    this.xiw = function(d) {
        if (this.parent.wkd) {
            this.parent.wkd()
        }
        this.stop();
        this.twb = false;
        this.bth = null;
        this.dwr(true, d);
        if (this.hoe >= 0) {
            clearTimeout(this.hoe);
            this.hoe = -1
        }
        this.hoe = setTimeout(this.fvq, this.nnt)
    };
    this.fvq = function() {
        if (b.aod()) {
            b.parent.qug.qyk("panel_out");
            b.parent.qug.eze("panel_out");
            b.yen()
        }
    };
    this.yen = function() {
        if (!this.aod()) {
            return
        }
        if (this.twb) {
            if (this.iwn === c) {
                this.bth = this.yen
            } else {
                this.bth = null
            }
        } else {
            this.bth = null;
            this.oqe();
            this.msl();
            if (this.hoe >= 0) {
                clearTimeout(this.hoe);
                this.hoe = -1
            }
        }
    };
    this.ibt = function(d) {
        if (this.parent.cty) {
            this.parent.cty()
        }
        this.stop();
        this.twb = false;
        this.bth = null;
        this.dwr(false, d);
        if (typeof this.xwi === "function") {
            this.xwi();
            this.xwi = null
        }
    };
    this.fec = function() {
        this.dwr(true);
        this.twb = true;
        this.fol = false;
        this.iwn = c;
        this.pgv = Math.floor(this.height / this.adg);
        this.usw = 1;
        this.glx = Math.floor(this.height / this.adg)
    };
    this.oqe = function() {
        if (this.parent.cty) {
            this.parent.cty()
        }
        this.twb = true;
        this.fol = false;
        this.iwn = a;
        this.pgv = -Math.floor(this.height / this.adg);
        this.usw = 1;
        this.glx = this.height
    };
    this.msl = function() {
        this.hiv = setInterval(this.hec, this.klj)
    };
    this.dxb = function() {
        if (b.iwn == c) {
            if (b.parent.wkd) {
                b.parent.wkd()
            }
            if (b.hoe >= 0) {
                clearTimeout(b.hoe);
                b.hoe = -1
            }
            b.hoe = setTimeout(b.fvq, b.nnt)
        }
        clearInterval(b.hiv);
        if (b.bth) {
            b.bth()
        }
    };
    this.stop = function() {
        clearTimeout(this.hoe);
        clearInterval(this.hiv);
        this.hoe = -1
    };
    this.hec = function() {
        if (!b.lif()) {
            b.dxb()
        }
    };
    this.lif = function() {
        if (b.usw < b.adg) {
            b.parent.xgz(b.x, b.y, b.width, b.height);
            b.glx += b.pgv;
            b.usw++;
            return true
        } else {
            b.twb = false;
            b.fol = true;
            if (b.iwn == a) {
                b.dwr(false);
                if (typeof b.xwi === "function") {
                    b.xwi();
                    b.xwi = null
                }
            }
            b.parent.xgz(b.x, b.y, b.width, b.height);
            return false
        }
    };
    this.xgz = function(n, m, o, g) {
        if (!this.aod() || !this.parent.avk()) {
            return
        }
        var p = this.context2D,
            e = (n != null && m != null && o != null && g != null),
            l = this.tjx.jfj(),
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
        this.wfq(p);
        for (var f = 0, j = l.length; f < j; f++) {
            l[f].xgz()
        }
        if (this.llj && this.xec != "") {
            k = this.llj.x - this.hwf - this.ydi;
            d = 3 * this.ydi + 2 * this.hwf;
            if (k + d >= this.fxc + this.gvl) {
                k = this.fxc + this.gvl - d;
                kit.vcj.cxi(p, this.xec, this.usi, k, this.llj.y + this.llj.height, d, this.phy, this.bnn, this.phy, this.yxa, this.hwf)
            } else {
                kit.vcj.bom(p, this.xec, this.usi, k, this.llj.y + this.llj.height, d, this.phy, this.bnn, this.phy, this.yxa)
            }
        }
        p.restore();
        if (this.twb) {
            if (this.evc && this.hlo && this.glx > 0) {
                this.evc.drawImage(this.hlo, 0, this.height - this.glx, this.width, this.glx, this.x, this.y, this.width, this.glx)
            }
        } else {
            if (e) {
                this.parent.xgz(this.x + n, this.y + m, o, g)
            } else {
                if (this.evc && this.hlo) {
                    this.evc.drawImage(this.hlo, this.x, this.y)
                }
            }
        }
    };
    this.wfq = function(d) {
        var f = this.etr,
            e = f / 2;
        d.save();
        d.strokeStyle = this.fmu;
        d.fillStyle = this.cra;
        d.lineWidth = f;
        d.beginPath();
        d.moveTo(e, 0);
        d.arcTo(e, this.pvc, this.pvc + e, this.pvc, this.pvc);
        d.arcTo(this.fxc, this.pvc, this.fxc, this.height - this.lih - e, this.cmq);
        d.arcTo(this.fxc, this.height - e, this.fxc + this.lih, this.height - e, this.lih);
        d.lineTo(this.fxc + this.gvl - this.lih, this.height - e);
        d.arcTo(this.fxc + this.gvl, this.height - e, this.fxc + this.gvl, this.height - this.lih - e, this.lih);
        d.arcTo(this.fxc + this.gvl, this.pvc, this.width - this.pvc - e, this.pvc, this.cmq);
        d.arcTo(this.width - e, this.pvc, this.width - e, 0, this.pvc);
        d.stroke();
        d.closePath();
        d.globalAlpha = this.ysy;
        d.fill();
        d.restore()
    };
    this.phi = function(d) {
        if (this.llj && this.llj != this.dra) {
            if (d && this.llj) {
                this.xec = this.parent.dcq(this.llj.brk);
                if (!kit.vcj.vzn) {
                    this.xec = (this.llj.kgh) ? this.xec + " [" + this.llj.kgh + "]" : this.xec
                }
            } else {
                this.xec = ""
            }
            this.parent.xgz(this.x, this.y, this.width, this.height)
        } else {
            if (d && (this.llj && this.xec != this.parent.dcq(this.llj.brk))) {
                this.xec = this.parent.dcq(this.llj.brk);
                if (!kit.vcj.vzn) {
                    this.xec = (this.llj.kgh) ? this.xec + " [" + this.llj.kgh + "]" : this.xec
                }
            }
            this.parent.xgz(this.x, this.y, this.width, this.height)
        }
    };
    this.xwi = null
}
bue.prototype = new noe;

function ufh() {
    var a = this;
    this.fjs = "LOADING ... ";
    this.nft = "ERROR";
    this.iii = null;
    this.nkl = null;
    this.nzx = false;
    this.yjr = false;
    this.dtw = true;
    this.ncb = null;
    this.iex = null;
    this.mnu = null;
    this.hiv = 0;
    this.gxm = 0;
    this.ppk = false;
    this.zes = 0;
    this.mnh = 60;
    this.afi = 0;
    this.bnn = "arial";
    this.yxa = "bold";
    this.nli = "black";
    this.kid = "rgb(0,100,10)";
    this.qrg = "rgb(80,255,100)";
    this.ybf = "rgb(120,120,120)";
    this.syb = "red";
    this.hzz = "white";
    this.usi = "yellow";
    this.phy = 14;
    this.mli = 18;
    this.rrv = 20;
    this.iru;
    this.mfu;
    this.kos;
    this.ohs;
    this.qfg = 5;
    this.hwf = 12;
    this.mgv = 5;
    this.rhe = 2;
    this.gvf = new dho();
    this.bna = new dho();
    this.hyq = [];
    this.vai = 0;
    this.nfv = 20;
    this.fbq = function(b, d, c) {
        ufh.prototype.fbq.call(this, b, d, c);
        this.iex = document.createElement("canvas");
        this.mnu = this.iex.getContext("2d")
    };
    this.wez = function(b) {
        try {
            this.phy = b.fontSize;
            this.mli = b.qim;
            this.rrv = b.jvk;
            this.qfg = b.slk;
            this.hwf = b.nib;
            this.mgv = b.dxd;
            this.rhe = b.rqq;
            this.iru = b.vrr;
            this.mfu = b.luy;
            this.kos = b.mjs;
            this.ohs = b.zri;
            this.gvf = b.xaq;
            if (this.bna.width > 0 && this.bna.height) {
                this.qyf()
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.goa = function(b) {
        try {
            this.bnn = b.font;
            this.yxa = b.gas;
            this.nli = b.backgroundColor;
            this.kid = b.niq;
            this.qrg = b.bwu;
            this.ybf = b.qdr;
            this.syb = b.zcu;
            this.hzz = b.mdu;
            this.usi = b.lkk;
            this.nkl = b.nkl
        } catch (c) {
            console.error(c)
        }
    };
    this.fwl = function(b, e) {
        var d = b - this.x,
            c = e - this.y;
        if (d >= this.bna.x && d <= this.bna.x + this.bna.width && c >= this.bna.y && c <= this.bna.y + this.bna.height) {
            this.ncb();
            return true
        }
        return false
    };
    this.xgz = function(b) {
        if (b && b >= 0) {
            this.gxm = b
        }
        if (!this.aod()) {
            return
        }
        if (kit.fng.value45 == kit.wzn.zlk) {
            this.wdh()
        } else {
            if (kit.fng.value45 == kit.wzn.rna) {
                this.mro()
            }
        }
    };
    this.wdh = function() {
        if (this.nzx) {
            var c = this.context2D,
                b = this.kos.width / 100;
            c.save();
            if (this.yjr === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.qug.uyv("splash"), 0, 0, this.width, this.height);
            if (this.nkl) {
                kit.vcj.zrw(c, this.qfg, this.qfg, this.width - 2 * this.qfg, this.height - 2 * this.qfg, this.nkl, 0.3)
            }
            if (this.iii != null && this.iii != "") {
                this.wdt(this.ohs, true)
            } else {
                if (this.ppk) {
                    kit.vcj.zrw(c, this.gvf.x, this.gvf.y, this.gvf.width, this.gvf.height, this.nli, 0.7);
                    c.drawImage(this.iex, this.gvf.x + this.gvf.width * (1 - this.hyq[this.vai]) / 2, this.gvf.y + this.gvf.height * (1 - this.hyq[this.vai]) / 2, this.gvf.width * this.hyq[this.vai], this.gvf.height * this.hyq[this.vai])
                } else {
                    if (this.dtw === true) {
                        if (this.yjr === false) {
                            kit.vcj.zrw(c, this.iru.x, this.iru.y, this.iru.width, this.iru.height, this.nli, 0.7)
                        }
                        var e = this.fjs + " " + this.gxm + "%";
                        var d = c.createLinearGradient(this.kos.x, this.kos.y, this.kos.x + this.kos.width, this.kos.y);
                        d.addColorStop(0, this.kid);
                        d.addColorStop(1, this.qrg);
                        kit.vcj.bom(c, e, this.hzz, this.mfu.x, this.mfu.y, this.mfu.width, this.mfu.height, this.bnn, this.phy, this.yxa);
                        kit.vcj.iwj(c, this.kos.x - this.rhe, this.kos.y, this.kos.width + 2 * this.rhe, this.kos.height, this.rhe, this.nli, 0.8, this.ybf, this.rhe, 0.8);
                        kit.vcj.zrw(c, this.kos.x, this.kos.y + this.rhe / 2, b * this.gxm, this.kos.height - this.rhe, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.mro = function() {
        if (this.nzx) {
            var c = this.context2D,
                b = this.kos.width / 100;
            c.save();
            if (this.yjr === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.qug.uyv("splash"), 0, 0, this.width, this.height);
            if (this.iii != null && this.iii != "") {
                this.wdt(this.ohs, true)
            } else {
                if (this.ppk) {
                    c.drawImage(this.parent.qug.uyv("continue"), this.gvf.x, this.gvf.y, this.gvf.width, this.gvf.height);
                    c.drawImage(this.iex, this.gvf.x + this.gvf.width * (1 - this.hyq[this.vai]) / 2, this.gvf.y + this.gvf.height * (1 - this.hyq[this.vai]) / 2, this.gvf.width * this.hyq[this.vai], this.gvf.height * this.hyq[this.vai])
                } else {
                    if (this.dtw === true) {
                        kit.vcj.zrw(c, this.kos.x, this.kos.y, this.kos.width, this.kos.height, "rgb(0,0,0)", 0.5);
                        kit.vcj.zrw(c, this.kos.x, this.kos.y, b * this.gxm, this.kos.height, "rgb(0,250,0)", 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.wdt = function(c, m) {
        var l = this.context2D,
            o = [],
            d = this.phy,
            k = this.iii,
            f = "",
            t = 0,
            v = 0,
            s = 0,
            u = 0,
            n = "center",
            e = Math.round(d * 1.5),
            j = Math.round(this.mli * 1.5),
            b = 0,
            w = 1,
            q = 0,
            g = 0;
        l.save();
        l.font = this.yxa + " " + d + "px " + this.bnn;
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
                    if (u >= c.width - 2 * this.hwf) {
                        o[v] = k.substring(s, t);
                        v++;
                        s = t + 1;
                        f = k.substring(t + 1, p)
                    }
                }
            }
        }
        b = v * (e);
        if (b > (c.height - j - this.mgv)) {
            w = (c.height - j - this.mgv) / b;
            d = Math.round(d * w) - 1;
            l.font = this.yxa + " " + d + "px " + this.bnn;
            e = Math.round(d * 1.5);
            b = v * (e)
        }
        if (d < 10) {
            w = 10 / d;
            d = Math.round(d * w);
            l.font = this.yxa + " " + d + "px " + this.bnn;
            e = Math.round(d * 1.5);
            b = v * (e);
            g = (c.height - (j + b + this.mgv));
            c.height = j + b + this.mgv;
            c.y += g
        }
        l.textAlign = n;
        l.lineJoin = "round";
        l.lineCap = "round";
        if (m && m === true) {
            kit.vcj.zrw(l, c.x, c.y, c.width, c.height, this.nli, 0.7)
        }
        if (this.nft != null) {
            l.font = this.yxa + " " + this.mli + "px " + this.bnn;
            l.fillStyle = this.syb;
            l.textBaseline = "bottom";
            l.fillText(this.nft, c.x + c.width / 2, c.y + this.mli + this.mgv)
        }
        l.font = this.yxa + " " + d + "px " + this.bnn;
        l.fillStyle = this.hzz;
        if (o.length == 1) {
            q = j + b + e;
            l.fillText(o[0], (c.x + c.width / 2), c.y + q)
        } else {
            for (var p = 0, r = o.length; p < r; p++) {
                q = j + (b + e) / (r + 1) * (p + 1);
                if (n == "start") {
                    l.fillText(o[p], (c.x + this.hwf), c.y + q)
                } else {
                    l.fillText(o[p], (c.x + c.width / 2), c.y + q)
                }
            }
        }
        l.restore()
    };
    this.rvj = function() {
        return (this.ppk)
    };
    this.lyx = function() {
        for (var b = 0; b < this.nfv; b++) {
            this.hyq[b] = 1 - Math.sin(Math.PI * b / (this.nfv - 1)) * 0.04
        }
        this.hyq[this.nfv - 1] = 1;
        this.ppk = true;
        this.vai = 0;
        this.qyf();
        this.hiv = setInterval(this.xdl, this.mnh);
        this.xgz()
    };
    this.xdl = function() {
        a.xgz();
        a.vai = (a.vai < a.nfv - 1) ? a.vai + 1 : 0
    };
    this.stop = function() {
        this.ppk = false;
        clearTimeout(this.hiv)
    };
    this.qyf = function() {
        var b = this.mnu;
        this.bna = this.gvf;
        this.iex.width = Math.round(this.bna.width);
        this.iex.height = Math.round(this.bna.height);
        b.save();
        b.clearRect(0, 0, this.iex.width, this.iex.height);
        kit.vcj.hoi(b, this.parent.language.jxn, this.usi, 0, 0, this.iex.width, this.iex.height, this.bnn, this.rrv, this.yxa, "center", true);
        b.restore()
    }
}
ufh.prototype = new noe;

function hey() {
    var b = this;
    var c = 0;
    var a = 1;
    var e = 2;
    var d = 3;
    this.mau = null;
    this.eqc = null;
    this.pvv = null;
    this.yvx = null;
    this.ylv = null;
    this.bug = [];
    this.avl = 0;
    this.dar = [];
    this.mdd = [];
    this.yas = 0;
    this.bcz = false;
    this.otq = false;
    this.fbq = function() {
        this.mau = document.getElementById("messageOverlay");
        this.eqc = document.getElementById("messagePanel");
        this.pvv = document.getElementById("messageTitle");
        this.yvx = document.getElementById("messageText");
        this.ylv = document.getElementById("btne");
        if (this.ylv) {
            this.ylv.innerHTML = "\u00D7";
            this.ylv.onclick = this.yen;
            this.ylv.ontouchend = this.yen
        }
        for (var f = 0; f < 4; f++) {
            this.bug[f] = document.getElementById("btn" + (f + 1))
        }
    };
    this.goa = function(f) {
        try {
            this.dar = f.tnp
        } catch (g) {
            console.error(g)
        }
    };
    this.wez = function(j) {
        try {
            if (this.eqc) {
                kit.vcj.gix(this.eqc, j.gst)
            }
            if (this.pvv) {
                this.pvv.style.fontSize = j.fip + "px";
                kit.vcj.gix(this.pvv, j.xka)
            }
            if (this.yvx) {
                this.yvx.style.fontSize = j.ovc + "px";
                kit.vcj.gix(this.yvx, j.hli)
            }
            if (this.ylv) {
                kit.vcj.gix(this.ylv, j.jiw)
            }
            for (var g = 0, f = this.bug.length; g < f; g++) {
                this.bug[g].style.fontSize = j.ufm.fontSize + "px";
                this.bug[g].style.top = j.wec.y + "px";
                this.bug[g].style.height = j.wec.height + "px"
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.wyc = function(j) {
        this.mdd.length = 0;
        this.yas = 0;
        for (var g = 0, f = j.length; g < f; g++) {
            this.mdd[g] = j[g]
        }
        this.xoe(this.mdd[this.yas])
    };
    this.yen = function() {
        if (b.eqc) {
            b.otq = false;
            b.eqc.style.display = "none";
            b.mau.style.display = "none";
            kit.vev.uxw();
            kit.vev.ams = false
        }
    };
    this.xoe = function(l) {
        var n = this.mdd.length > 1,
            m = "";
        if (l.Buttons && l.Buttons.length >= 1) {
            for (var k = l.Buttons.length - 1; k >= 0; k--) {
                if (l.Buttons[k].Action.toLowerCase() == "cashier") {
                    l.Buttons.splice(k, 1)
                }
            }
        }
        if (l.mwa === kit.vew.vpm || l.mwa === kit.vew.psb) {
            this.avl = d;
            this.bcz = (l.DisplayType == kit.ufd.wos.deg) ? true : false
        } else {
            if (l.mwa === kit.vew.rtk || l.mwa === kit.vew.bjm || l.mwa === kit.vew.xiu || l.mwa === kit.vew.roulette.aao || l.mwa === kit.vew.roulette.uoj) {
                this.avl = a;
                this.bcz = false
            } else {
                if (l.mwa === kit.vew.rjc || l.mwa === kit.vew.mpl) {
                    this.avl = c;
                    this.bcz = false
                } else {
                    if (l.mwa === kit.vew.ykm || l.mwa === kit.vew.ljx || l.mwa === kit.vew.mpb) {
                        this.avl = e;
                        this.bcz = false
                    }
                }
            }
        }
        if (l.Title && this.pvv) {
            this.pvv.style.color = this.dar[this.avl];
            this.pvv.innerHTML = l.Title
        }
        if (l.Text && this.yvx) {
            this.yvx.innerHTML = l.Text.replace(/[\r]?\n/g, "<br>")
        }
        if (n) {
            this.bug[0].innerHTML = "\u2039";
            this.bug[0].onclick = this.ojy;
            this.bug[0].ontouchend = this.ojy;
            this.bug[0].style.display = "inline-block";
            this.bug[this.bug.length - 1].innerHTML = "\u203A";
            this.bug[this.bug.length - 1].onclick = this.ugh;
            this.bug[this.bug.length - 1].ontouchend = this.ugh;
            this.bug[this.bug.length - 1].style.display = "inline-block"
        }
        for (var k = 0, g = (n) ? 1 : 0, f = (n) ? this.bug.length - 1 : this.bug.length; g < f; g++, k++) {
            if (l.Buttons && k < l.Buttons.length) {
                m = l.Buttons[k].Text;
                if (m.indexOf("_") != 0) {
                    this.bug[g].innerHTML = m
                } else {
                    var j = m.substr(1);
                    if (j == "exit") {
                        this.bug[g].innerHTML = kit.vev.language.quj
                    } else {
                        if (j == "continue") {
                            this.bug[g].innerHTML = kit.vev.language.jxn.replace(/ /g, "")
                        } else {
                            this.bug[g].innerHTML = j.toUpperCase()
                        }
                    }
                }
                if (l.Buttons[k].Action.toLowerCase() == "quit") {
                    this.bug[g].onclick = kit.vev.gqm;
                    this.bug[g].ontouchend = kit.vev.gqm
                } else {
                    if (l.Buttons[k].Action.toLowerCase() == "continue") {
                        if (l.mwa === kit.vew.vpm) {
                            this.bug[g].onclick = this.rhb.bind(this, l.Buttons[k].Link);
                            this.bug[g].ontouchend = this.rhb.bind(this, l.Buttons[k].Link)
                        } else {
                            if (l.mwa === kit.vew.psb || l.mwa === kit.vew.ykm || l.mwa === kit.vew.ljx) {
                                this.bug[g].onclick = this.ajo;
                                this.bug[g].ontouchend = this.ajo
                            } else {
                                if (l.mwa === kit.vew.rjc || l.mwa === kit.vew.mpl || l.mwa === kit.vew.mpb) {
                                    this.bug[g].onclick = this.kre;
                                    this.bug[g].ontouchend = this.kre
                                }
                            }
                        }
                    } else {
                        if (l.Buttons[k].Action.toLowerCase() == "history") {
                            this.bug[g].onclick = kit.vev.bcr;
                            this.bug[g].ontouchend = kit.vev.bcr
                        } else {
                            if (l.Buttons[k].Action.toLowerCase() == "link") {
                                if (l.Buttons[k].LinkType === kit.ufd.sgn.ocg) {
                                    this.bug[g].onclick = this.koa.bind(this, l.Buttons[k].Link);
                                    this.bug[g].ontouchend = this.koa.bind(this, l.Buttons[k].Link)
                                } else {
                                    if (l.Buttons[k].LinkType === kit.ufd.sgn.apz) {
                                        this.bug[g].onclick = this.rhb.bind(this, l.Buttons[k].Link);
                                        this.bug[g].ontouchend = this.rhb.bind(this, l.Buttons[k].Link)
                                    } else {
                                        if (l.Buttons[k].LinkType === kit.ufd.sgn.hjr) {
                                            this.bug[g].onclick = this.yle.bind(this, l.Buttons[k].Link);
                                            this.bug[g].ontouchend = this.yle.bind(this, l.Buttons[k].Link)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                this.bug[g].style.display = "inline-block"
            } else {
                this.bug[g].style.display = "none"
            }
        }
        this.ylv.style.display = (this.bcz) ? "inline-block" : "none";
        if (this.eqc) {
            this.otq = true;
            this.eqc.style.display = "block";
            this.mau.style.display = "block";
            kit.vev.uxw();
            kit.vev.ams = true
        }
    };
    this.aod = function() {
        if (this.otq) {
            return true
        }
        return false
    };
    this.ajo = function() {
        b.yen();
        kit.vev.tcp(kit.vev.state)
    };
    this.rhb = function(f) {
        var g = null;
        if (f) {
            g = kit.vcj.nup("GET", f);
            if (!g) {
                console.error("Could not send request!")
            } else {
                g.onerror = function() {
                    console.error("Error on request!")
                }
            }
            g.send()
        }
        if (kit.vev.wvi) {
            kit.vev.wvi.wcj({
                sender: kit.vev.kyz,
                lang: sessionStorage.sessionValue1.toUpperCase()
            })
        }
        b.yen();
        kit.vev.ixi()
    };
    this.yle = function(j) {
        var k = null;
        if (j == null) {
            console.error("Request url is missing!");
            return
        }
        k = kit.vcj.nup("GET", j);
        if (!k) {
            console.error("Could not send request!")
        } else {
            for (var g = 0, f = b.bug.length; g < f; g++) {
                b.bug[g].disabled = true
            }
            k.onload = function() {
                b.yen();
                for (var m = 0, l = b.bug.length; m < l; m++) {
                    b.bug[m].disabled = false
                }
                kit.vev.ixi()
            };
            k.onerror = function() {
                console.error("Error on request!");
                for (var m = 0, l = b.bug.length; m < l; m++) {
                    b.bug[m].disabled = false
                }
            }
        }
        if (kit.vev.wvi) {
            kit.vev.wvi.wcj({
                sender: kit.vev.kyz,
                lang: sessionStorage.sessionValue1.toUpperCase()
            })
        }
        k.send()
    };
    this.kre = function() {
        window.location.reload()
    };
    this.koa = function(f) {
        if (kit.vev.wvi) {
            kit.vev.wvi.wcj({
                sender: kit.vev.kyz,
                lang: sessionStorage.sessionValue1.toUpperCase()
            })
        }
        window.location.href = f
    };
    this.ojy = function() {
        b.yas = (b.yas > 0) ? b.yas - 1 : b.mdd.length - 1;
        b.xoe(b.mdd[b.yas])
    };
    this.ugh = function() {
        b.yas = (b.yas < b.mdd.length - 1) ? b.yas + 1 : 0;
        b.xoe(b.mdd[b.yas])
    }
}
kit.fng = new Settings();
kit.vcj = new wyf();

function kcd() {
    this.ruv = "";
    this.irq = "";
    this.eym = null;
    this.canvas = null;
    this.context2D = null;
    this.grg = null;
    this.skn = null;
    this.vhl = null;
    this.rvn = null;
    this.dso = null;
    this.pgx = {};
    this.offsetLeft = 0;
    this.offsetTop = 0;
    this.mxr = 0;
    this.zki = 0;
    this.gvo = false;
    this.width = 0;
    this.height = 0;
    this.pwb = 0;
    this.hqz = 0;
    this.seb = 1;
    this.aax = 1;
    this.dlf = false;
    this.shj = false;
    this.style = null;
    this.ekl = null;
    this.ily = -1;
    this.usv = false;
    this.jmf = false;
    this.xdp = false;
    this.fzo = false;
    this.ams = false;
    this.ynd = false;
    this.uix = false;
    this.udu = false;
    this.dcx = "";
    this.kov = "";
    this.ksh = "";
    this.cpz = "";
    this.umu = "";
    this.edf = "";
    this.ijv = "1_1_60";
    try {
        if (kit.fng.value19) {
            this.dcx = sessionStorage.sessionValue2;
            this.kov = sessionStorage.sessionValue2
        } else {
            var c = a("hash");
            if (c != "") {
                sessionStorage.sessionValue2 = c
            }
            if (sessionStorage.sessionValue2 != "freeplay") {
                this.ksh = sessionStorage.sessionValue2
            } else {
                this.dcx = sessionStorage.sessionValue2;
                this.kov = sessionStorage.sessionValue2;
                if (a("w") != "") {
                    this.ksh = sessionStorage.sessionValue2
                } else {
                    this.ksh = ""
                }
            }
        }
    } catch (b) {}
    this.pni = null;
    this.sum = null;
    this.amr = false;
    this.prz = null;
    this.qug = null;
    this.pxa = null;
    this.tff = true;
    this.gsv = [0, 0.5, 1];
    try {
        if (sessionStorage.sessionValue6) {
            if (sessionStorage.sessionValue6 == "false") {
                this.znd = 0
            } else {
                if (sessionStorage.sessionValue6 == "true") {
                    this.znd = this.gsv.length - 1
                } else {
                    this.znd = Number(sessionStorage.sessionValue6)
                }
            }
        } else {
            this.znd = this.gsv.length - 1
        }
    } catch (b) {
        this.znd = 0
    }
    this.pfm = 0;
    this.language = new oag();
    this.mgx = 0;
    this.ydb = 1;
    this.zhl = this.ydb;
    this.qrb = [kit.mwi.vtt, kit.mwi.jeb, kit.mwi.gmy];
    this.kus = (kit.vcj.ulg()) ? 0 : this.qrb.length - 1;
    try {
        if (localStorage.localValue1) {
            this.kus = Number(localStorage.localValue1);
            if (!kit.vcj.ulg() && this.qrb[this.kus] === kit.mwi.vtt) {
                this.kus = this.qrb.length - 1
            }
        }
    } catch (b) {}
    this.qop = false;
    this.kyz = "";
    this.nyb = "";
    this.wqc = 0;
    this.state = 0;
    this.rai = false;
    this.did = 5000;
    this.nvb = 0;
    this.fwt = 0;
    this.fum = 0;
    this.gub = 0;
    this.rka = false;
    this.qvt = false;
    this.lsh = false;
    this.mum = null;
    this.mjo = 0;
    this.nxv = 0;
    this.hys = 0;
    this.hzd = -1;
    this.pku = -1;
    this.bsw = 0;
    this.vny = null;
    this.gty = [];
    this.tio = [];
    this.wvi = null;
    this.bby = false;
    this.vce = 0;
    this.gll = 0;
    this.gkw = false;

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
    this.fbq = function(d) {
        this.gbs();
        kit.vcj.xgd();
        kit.vcj.qra();
        this.wlo();
        if (!this.rka) {
            this.ffd()
        }
        this.nix(this.wvk(d.ekl));
        this.xxr();
        this.coq();
        this.flw();
        this.jup();
        this.fre();
        this.rqp();
        this.vgv();
        this.icz();
        this.uld();
        this.grs();
        return this
    };
    this.flw = function() {};
    this.gbs = function() {};
    this.icz = function() {
        try {
            if (kit.fng.value64 && !this.lsh) {
                this.prz = new yjf();
                this.prz.connect("ws://127.0.0.1:2001/vltclient")
            }
        } catch (d) {
            console.error("Can not connect to terminal!")
        }
    };
    this.wlo = function() {
        try {
            var j = a("exit");
            if (j != "") {
                sessionStorage.sessionValue5 = j
            }
            if ((!sessionStorage.sessionValue5 || sessionStorage.sessionValue5 == "null") && kit.fng.value8) {
                sessionStorage.sessionValue5 = kit.fng.value8
            }
            var p = a("curr");
            if (p != "") {
                sessionStorage.sessionValue8 = p
            }
            if (sessionStorage.sessionValue8 && sessionStorage.sessionValue8 != "") {
                this.edf = sessionStorage.sessionValue8;
                if (kit.fng.value72) {
                    var o = kit.fng.value72[this.edf];
                    if (kit.fng.value21.e === true && o) {
                        kit.fng.value21.s = o.s;
                        kit.fng.value21.m = o.m;
                        kit.fng.value21.ts = o.ts;
                        kit.fng.value21.cs = o.cs
                    }
                    if (kit.fng.value76 && kit.fng.value76.f === true && o) {
                        kit.fng.value76.s = o.s;
                        kit.fng.value76.m = o.m;
                        kit.fng.value76.ts = o.ts;
                        kit.fng.value76.cs = o.cs
                    }
                }
            }
            if (this.rqg()) {
                sessionStorage.sessionValue7 = ""
            }
            var d = a("w");
            if (d != "") {
                sessionStorage.sessionValue7 = d
            }
            if (sessionStorage.sessionValue7 && sessionStorage.sessionValue7 != "") {
                this.umu = sessionStorage.sessionValue7
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
                sessionStorage.sessionValue14 = (kit.vcj.vzn) ? kit.fng.value51.m : kit.fng.value51.d
            }
            var i = a("sessionTime");
            if (i != "") {
                sessionStorage.sessionValue15 = i
            }
            if (sessionStorage.sessionValue15 != "true" && sessionStorage.sessionValue15 != "false") {
                sessionStorage.sessionValue15 = kit.fng.value11
            }
            var t = a("realityCheckURL");
            if (t != "") {
                sessionStorage.sessionValue16 = t
            }
            var n = a("realityCheckTime");
            if (n != "") {
                sessionStorage.sessionValue17 = n
            }
            if (kit.fng.value39 > 0) {
                sessionStorage.sessionValue17 = kit.fng.value39
            }
            var s = a("loggedInTime");
            if (sessionStorage.sessionValue18 != null) {
                var g = sessionStorage.sessionValue18.split(";");
                if (g.length == 2) {
                    this.vce = Number(g[0]);
                    this.gll = Number(g[1])
                }
            }
            if (s != "") {
                if (Number(s) != this.gll) {
                    this.gll = Number(s);
                    this.vce = new Date().getTime() - (this.gll * 1000);
                    sessionStorage.sessionValue18 = this.vce + ";" + this.gll
                }
            }
            if (kit.fng.value86 === true) {
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
            console.error(k.vew)
        }
    };
    this.vgv = function() {
        if (!(kit.vcj.jtx == kit.os.nht && kit.vcj.yub == kit.vth.soc)) {
            document.ontouchstart = kit.vev.vod
        }
        if (kit.vcj.yub != kit.vth.erw && kit.vcj.yub != kit.vth.soc) {
            document.ontouchmove = kit.vev.txc;
            document.ontouchend = kit.vev.xya
        }
        if (!kit.vcj.pqo) {
            document.onmousedown = kit.vev.kbe;
            document.onmouseup = kit.vev.qpz;
            document.onmousemove = kit.vev.xmb
        }
        document.onkeydown = kit.vev.rxg;
        document.onkeyup = kit.vev.opz;
        document.oncontextmenu = kit.vev.wqz;
        this.ynd = (this.fge() && kit.vcj.meu() && kit.vcj.vzn);
        if (kit.vcj.unf() === false && kit.vcj.jtx === kit.os.wep && kit.vcj.spb() === true && screen.width <= 414 && this.rpm()) {
            this.bsw = setInterval(this.vos, 1000)
        }
    };
    this.vod = function(d) {
        if (kit.vev.usv === true) {
            kit.vev.oko();
            kit.vev.min()
        }
        kit.vev.fwl(d)
    };
    this.xya = function(d) {
        if (kit.vev.usv === true) {
            if (kit.vev.ynd) {
                kit.vev.vdm()
            } else {
                kit.vev.qua(d)
            }
        } else {
            if (kit.vev.uix) {
                kit.vev.afm()
            }
        }
    };
    this.txc = function(d) {
        kit.vev.okq(d)
    };
    this.kbe = function(d) {
        window.focus();
        if (kit.vev.usv === true) {
            kit.vev.oko();
            kit.vev.min()
        }
        kit.vev.fwl(d)
    };
    this.qpz = function(d) {
        if (kit.vev.usv === true) {
            kit.vev.qua(d)
        }
    };
    this.xmb = function(d) {};
    this.rxg = function(d) {
        if ((d.keyCode == 122 && (kit.vcj.jtx == kit.os.ioz || kit.vcj.jtx == kit.os.utx)) || (d.keyCode == 70 && d.ctrlKey && kit.vcj.jtx == kit.os.txt)) {
            return
        }
        kit.vev.oko();
        kit.vev.min();
        kit.vev.xba(d)
    };
    this.opz = function(d) {
        kit.vev.hrl(d)
    };
    this.wqz = function() {
        return false
    };
    this.fwl = function(d) {};
    this.qua = function(d) {};
    this.xba = function(d) {};
    this.hrl = function(d) {};
    this.okq = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        return
    };
    this.fui = function() {
        var f = kit.vev.pxa.fei("topb"),
            e = kit.vev.pxa.fei("settings"),
            d = kit.vev.pxa.fei("topi"),
            g = kit.vev.pxa.fei("gameb");
        if (kit.vcj.yub == kit.vth.erw || kit.vcj.yub == kit.vth.unk) {
            kit.vev.shj = (window.innerWidth == window.outerWidth)
        } else {
            if (kit.vcj.yub == kit.vth.tox || kit.vcj.yub == kit.vth.uym) {
                kit.vev.shj = (window.innerHeight >= window.outerHeight)
            } else {
                if (kit.vcj.yub == kit.vth.pvi) {
                    kit.vev.shj = (document.fullscreenElement) ? true : false
                } else {
                    if (kit.vcj.vzn) {
                        if (kit.vcj.yub == kit.vth.qln || kit.vcj.yub == kit.vth.ded || kit.vcj.yub == kit.vth.ygp) {
                            kit.vev.shj = (document.webkitFullscreenElement) ? true : false
                        } else {
                            if (kit.vcj.yub == kit.vth.soc) {
                                kit.vev.shj = (document.mozFullScreenElement) ? true : false
                            }
                        }
                    }
                }
            }
        }
        if (d) {
            d.gbu("fullscreen", kit.vev.shj)
        }
        if (f) {
            f.tjx.fdt("fullscreen", "#gbu", [(kit.vev.shj) ? 1 : 0])
        }
        if (e) {
            e.tjx.fdt("fullscreen", "#gbu", [(kit.vev.shj) ? 1 : 0])
        }
        if (g) {
            g.tjx.fdt("fullscreen", "#gbu", [(kit.vev.shj) ? 1 : 0])
        }
        kit.vev.iot();
        kit.vev.opv();
        kit.vev.lrp();
        if (kit.vcj.spb() === true && kit.vcj.unf() === false) {
            document.body.style.height = "5000px"
        }
        if (!kit.vcj.unf() && kit.vcj.yub === kit.vth.ygp && kit.vev.zki < screen.width) {
            window.scrollTo(0, 0)
        }
    };
    this.euk = function() {
        kit.vev.fui();
        kit.vev.vos()
    };
    this.vos = function() {
        if (kit.vcj.spb() === true && kit.vcj.unf() === false) {
            if (kit.vev.rpm() === true) {
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
                            kit.vev.fui();
                            window.ontouchmove = kit.vev.euk
                        }
                    } else {
                        e.className = null;
                        d.className = null;
                        f.style.display = "none";
                        document.ontouchstart = kit.vev.vod;
                        document.ontouchmove = kit.vev.txc;
                        document.ontouchend = kit.vev.xya;
                        if (window.ontouchmove != null) {
                            kit.vev.fui();
                            window.ontouchmove = null
                        }
                        window.scrollTo(0, 0)
                    }
                }
            }
        }
    };
    this.cqh = function(g) {
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
                    kit.vcj.mzq(e, i, i)
                }
                f.innerHTML = kit.vev.language.qdg;
                k.className = "rotateAnim";
                j.style.display = "block";
                kit.vev.ams = true
            } else {
                j.style.display = "none";
                k.className = null;
                kit.vev.ams = false
            }
        }
    };
    this.ilt = function() {
        var d = kit.vev.pxa.fei("settings");
        kit.vev.fui();
        if (d) {
            d.tjx.fdt("adjustment", "#gbu", [(kit.vev.ily === kit.ekl.xtd) ? 0 : 1]);
            d.xgz()
        }
        if (kit.vev.qop === true) {
            kit.vev.ams = true;
            kit.vev.zzh(true);
            kit.vev.cqh(true)
        } else {
            kit.vev.ams = false;
            kit.vev.zzh((kit.vev.gsv[kit.vev.znd] === 0));
            kit.vev.cqh(false)
        }
    };
    this.iot = function() {
        this.mxr = window.innerWidth, this.zki = window.innerHeight;
        this.gvo = false;
        if (kit.vcj.unf() == true && kit.fng.value69 === true) {
            if (kit.vcj.yve() === true) {
                this.gvo = true;
                this.mxr = (window.innerWidth > window.outerWidth) ? window.outerWidth : window.innerWidth;
                this.zki = (window.innerHeight > window.outerHeight) ? window.outerHeight : window.innerHeight;
                if (this.mxr > this.zki) {
                    this.zki *= 0.98
                }
            } else {
                if (kit.vcj.spb() === true) {
                    this.gvo = true;
                    if (window.orientation === 90 || window.orientation === -90) {
                        if (screen.height === 1024) {
                            this.mxr = 1024;
                            this.zki = (window.innerHeight < 704) ? 662 : 704
                        } else {
                            if (screen.height === 736) {
                                this.mxr = 736;
                                this.zki = (window.innerHeight < 414 || window.innerHeight === 475) ? 370 : 414
                            } else {
                                if (screen.height === 667) {
                                    this.mxr = 667;
                                    this.zki = 375
                                }
                            }
                        }
                    } else {
                        if (screen.height === 1024) {
                            this.mxr = 768;
                            this.zki = (window.innerHeight < 960) ? 928 : 960
                        } else {
                            if (screen.height === 736) {
                                this.mxr = 414;
                                this.zki = 628
                            } else {
                                if (screen.height === 667) {
                                    this.mxr = 375;
                                    this.zki = 559
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.lrp = function() {
        var g = 0,
            j = 0,
            f = 1,
            e = 1,
            i = this.mxr,
            d = this.zki;
        this.dlf = (this.shj || i < this.width || d < this.height || this.ekl.szz);
        g = this.huc(this.dlf);
        f = ((i - j) / this.width).toString();
        f = Number(f.substring(0, (f.length > 5) ? 5 : f.length));
        e = ((d - g) / this.height).toString();
        e = Number(e.substring(0, (e.length > 5) ? 5 : e.length));
        if (this.dlf) {
            if (this.ekl.wnz || sessionStorage.sessionValue22 == "proportional") {
                if (f > e) {
                    this.seb = e;
                    this.aax = e
                } else {
                    this.seb = f;
                    this.aax = f
                }
            } else {
                this.seb = f;
                this.aax = e
            }
        } else {
            this.seb = 1;
            this.aax = 1
        }
        kit.vcj.mzq(this.canvas, this.seb, this.aax);
        if (this.grg != null) {
            kit.vcj.mzq(this.grg, this.seb, this.aax, ((this.ekl.grg.gst.x) - ((this.ekl.grg.gst.x + this.ekl.grg.lpx) / 2 * (1 - this.seb))), ((this.ekl.grg.gst.y) - ((this.ekl.grg.gst.y + this.ekl.grg.xru) / 2 * (1 - this.aax))))
        }
        if (this.vhl != null) {
            kit.vcj.mzq(this.vhl, this.seb, this.aax)
        }
        if (this.dlf) {
            this.offsetLeft = Math.floor((i - (this.canvas.width * this.seb))) / 2;
            this.offsetTop = Math.floor((d - (this.canvas.height * this.aax))) / 2
        } else {
            this.offsetLeft = this.eym.offsetLeft;
            this.offsetTop = this.eym.offsetTop
        }
    };
    this.opv = function() {
        if (this.egj() === true) {
            var e = null;
            if (this.qrb[this.kus] === kit.mwi.vtt) {
                if (window.orientation === -90) {
                    e = kit.ekl.hai
                } else {
                    e = kit.ekl.xtd
                }
            } else {
                if (this.qrb[this.kus] === kit.mwi.jeb) {
                    e = kit.ekl.hai
                } else {
                    if (this.qrb[this.kus] === kit.mwi.gmy) {
                        e = kit.ekl.xtd
                    }
                }
            }
            this.qop = (this.zki > this.mxr);
            this.nix(e);
            this.iiw(false);
            if (this.fzo === true) {
                this.xgz()
            } else {
                this.pxa.fdt("loading", "#xgz")
            }
        } else {
            if (kit.vcj.vzn) {
                var f = (this.mxr > this.zki) ? this.ydb : this.mgx,
                    d = this.ekl.mjy,
                    e = null;
                if (f != this.zhl) {
                    this.zhl = f;
                    if (this.rka) {
                        e = (this.zhl == this.ydb) ? kit.ekl.ild : kit.ekl.ote
                    } else {
                        e = (this.zhl == this.ydb) ? kit.fng.value33 : kit.fng.value32
                    }
                    this.nix(e);
                    this.iiw((d != this.ekl.mjy) || this.rka);
                    if (this.fzo === true) {
                        if (this.rka && this.qvt) {
                            this.uao(this.dcq(this.language.cmo))
                        } else {
                            this.xgz()
                        }
                    } else {
                        this.pxa.fdt("loading", "#xgz")
                    }
                }
            } else {
                if (!this.rka) {
                    e = (this.shj) ? kit.fng.value15 : kit.fng.value14;
                    this.nix(e);
                    this.iiw(false);
                    if (this.fzo === true) {
                        this.xgz()
                    } else {
                        this.pxa.fdt("loading", "#xgz")
                    }
                }
            }
        }
    };
    this.egj = function() {
        return false
    };
    this.rpm = function() {
        return false
    };
    this.nix = function(d) {};
    this.xxr = function() {
        this.style = new vrm()
    };
    this.huc = function(d) {
        var e = 0;
        if (kit.vcj.yve() && window.innerWidth > window.innerHeight && d) {
            if (this.usv === true && document.body.style.backgroundColor !== this.style.bxf.backgroundColor) {
                document.body.style.backgroundColor = this.style.bxf.backgroundColor
            }
        }
        return e
    };
    this.bog = function() {
        if (kit.vcj.yve() && !kit.vcj.unf() && window.innerWidth > window.innerHeight) {
            return 0
        }
        return 0
    };
    this.rbz = function() {
        return false
    };
    this.jup = function() {
        if (kit.vcj.pqo) {
            this.qug = new mqs()
        } else {
            this.qug = new qey()
        }
        this.qug.fbq();
        this.qug.pqj(this.wge())
    };
    this.fre = function() {
        this.pxa = new itm();
        this.pxa.fbq();
        this.pxa.kbh("jackpots")
    };
    this.wge = function() {
        var d = new lps();
        d.fbq();
        return d
    };
    this.ffd = function() {
        this.mum = new wbi()
    };
    this.coq = function() {
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
                    for (var k = 0, g = kit.fng.value5.length; k < g; k++) {
                        if (o[l] === kit.fng.value5[k] && p.indexOf(o[l]) < 0) {
                            p.push(o[l])
                        }
                    }
                }
                if (p.length == 0) {
                    p.push(kit.fng.value5[0])
                }
                kit.fng.value5 = [];
                for (var l = 0, m = p.length; l < m; l++) {
                    kit.fng.value5.push(p[l])
                }
            }
            if (sessionStorage.sessionValue1 == null) {
                var q = kit.vcj.fud();
                if (this.lit(q)) {
                    sessionStorage.sessionValue1 = q
                } else {
                    if (q === kit.language.EN && this.lit(kit.language.US)) {
                        sessionStorage.sessionValue1 = kit.language.US
                    } else {
                        if (q === kit.language.DE && this.lit(kit.language.AT)) {
                            sessionStorage.sessionValue1 = kit.language.AT
                        } else {
                            if (q === kit.language.ES && this.lit(kit.language.MX)) {
                                sessionStorage.sessionValue1 = kit.language.MX
                            } else {
                                if (q === kit.language.ES && this.lit(kit.language.CO)) {
                                    sessionStorage.sessionValue1 = kit.language.CO
                                } else {
                                    if (q === kit.language.ES && this.lit(kit.language.CL)) {
                                        sessionStorage.sessionValue1 = kit.language.CL
                                    } else {
                                        if (q === kit.language.ES && this.lit(kit.language.VE)) {
                                            sessionStorage.sessionValue1 = kit.language.VE
                                        } else {
                                            if (q === kit.language.EN && this.lit(kit.language.BR)) {
                                                sessionStorage.sessionValue1 = kit.language.BR
                                            } else {
                                                sessionStorage.sessionValue1 = kit.fng.value5[0]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this.lit(sessionStorage.sessionValue1)) {
                for (var l = 0, m = kit.fng.value5.length; l < m; l++) {
                    if (kit.fng.value5[l] == sessionStorage.sessionValue1) {
                        this.pfm = l;
                        break
                    }
                }
                this.language = this.wtj(sessionStorage.sessionValue1)
            } else {
                this.pfm = 0;
                this.language = this.wtj(kit.fng.value5[this.pfm]);
                sessionStorage.sessionValue1 = kit.fng.value5[this.pfm]
            }
        } catch (n) {
            this.pfm = 0;
            this.language = this.wtj(kit.fng.value5[this.pfm]);
            console.error(n.vew)
        }
    };
    this.uld = function() {
        var d = (kit.fng.value45 == kit.wzn.zlk) ? this.ekl.wzn.vev : this.ekl.wzn.uyw;
        this.eym = document.getElementById("gameArea");
        if (this.gvo === false) {
            this.eym.style.marginTop = (-d.gst.height / 2) + "px";
            this.eym.style.marginLeft = (-d.gst.width / 2) + "px"
        } else {
            this.eym.style.left = "0px";
            this.eym.style.top = "0px";
            this.eym.style.marginTop = ((window.innerHeight - d.gst.height) / 2) + "px";
            this.eym.style.marginLeft = ((window.innerWidth - d.gst.width) / 2) + "px"
        }
        this.eym.style.width = (d.gst.width > window.innerWidth) ? window.innerWidth + "px" : d.gst.width + "px";
        this.eym.style.height = (d.gst.height > window.innerHeight) ? window.innerHeight + "px" : d.gst.height + "px";
        this.canvas = document.getElementById("canvas");
        this.canvas.width = Math.round(d.gst.width);
        this.canvas.height = Math.round(d.gst.height);
        this.context2D = this.canvas.getContext("2d");
        this.vhl = document.getElementById("gameOverlay");
        if (this.vhl) {
            this.vhl.style.width = d.gst.width + "px";
            this.vhl.style.height = d.gst.height + "px"
        }
        this.jxy(d)
    };
    this.jxy = function(e) {
        var f = new ufh(),
            d = (kit.fng.value45 == kit.wzn.zlk) ? this.style.wzn.vev : this.style.wzn.uyw;
        f.fbq(e.gst, this.context2D);
        f.parent = this;
        f.ncb = (kit.vcj.vzn) ? this.jzj : this.afm;
        f.fjs = (this.rka) ? this.language.hho : this.language.lnz;
        f.nft = this.language.error;
        f.wez(e);
        f.goa(d);
        this.pxa.dcj("loading", f)
    };
    this.jus = function() {
        var d = new cbd();
        d.fbq(this.ekl.xji.gst, null, this.context2D);
        d.parent = this;
        d.wez(this.ekl.xji);
        d.goa(this.style.xji);
        if (sessionStorage.sessionValue15 == "true" && kit.fng.value49) {
            d.ctt("time", "", "--:-- [--:--]")
        } else {
            if (sessionStorage.sessionValue15 == "true" || kit.fng.value49) {
                d.ctt("time", "", "--:--")
            }
        }
        if (this.rqg()) {
            d.ctt("freeplay", "", this.language.gvb)
        } else {
            d.ctt("id", "", "")
        }
        this.pxa.dcj("topi", d)
    };
    this.ppf = function() {
        var d = new bue();
        d.fbq(this.ekl.rbo.gst, null, this.context2D);
        d.parent = this;
        d.wez(this.ekl.rbo);
        d.goa(this.style.rbo, false);
        d.dwr(false);
        this.pxa.dcj("topb", d)
    };
    this.yjs = function() {};
    this.xtt = function() {
        var d = new mia();
        d.fbq(this.ekl.zrz.gst, null, this.context2D);
        d.parent = this;
        d.bih(this.ekl.zrz);
        d.goa(this.style.zrz);
        d.dwr(false);
        this.pxa.dcj("stats", d)
    };
    this.zxn = function() {
        this.rvn = new hey();
        this.rvn.fbq();
        this.rvn.goa(this.style.rvn);
        this.rvn.wez(this.ekl.rvn)
    };
    this.mae = function() {
        this.dso = new hip();
        this.dso.fbq();
        this.dso.goa(this.style.dso);
        this.dso.wez(this.ekl.dso)
    };
    this.krf = function() {
        if (this.wac()) {
            this.pgx.ddm = document.getElementById("jurisdictionDiv");
            this.pgx.uuq = document.getElementById("btnsp");
            this.pgx.xav = document.getElementById("btnsl");
            this.pgx.boe = document.getElementById("btnst");
            if (this.pgx.uuq) {
                this.pgx.uuq.innerHTML = this.language.mkz;
                this.pgx.uuq.onclick = this.gdg;
                this.pgx.uuq.ontouchend = this.gdg
            }
            if (this.pgx.xav) {
                this.pgx.xav.innerHTML = this.language.lzi;
                this.pgx.xav.onclick = this.elf;
                this.pgx.xav.ontouchend = this.elf
            }
            if (this.pgx.boe) {
                this.pgx.boe.innerHTML = this.language.reh;
                this.pgx.boe.onclick = this.zyl;
                this.pgx.boe.ontouchend = this.zyl
            }
            this.uhw();
            this.uxw()
        }
    };
    this.qfz = function(e) {
        var d = new skz();
        d.fbq(this.ekl.jtd.gst, null, this.context2D);
        d.parent = this;
        d.hec = true;
        if (e) {
            d.lbt(e)
        }
        d.bih(this.ekl.jtd);
        d.jfd(this.language);
        d.goa(this.style.jtd);
        d.wez(this.ekl.jtd);
        d.dwr(false);
        this.pxa.dcj("autop", d)
    };
    this.mhu = function(d) {
        var e = new ujh();
        e.fbq(this.ekl.odc.gst, null, this.context2D);
        e.parent = this;
        if (d) {
            e.ppm(d)
        }
        e.dwr(false);
        this.pxa.dcj("settings", e)
    };
    this.iiw = function(d) {};
    this.url = function() {
        var d = this.pxa.fei("stats");
        if (d) {
            d.mya(this.ekl.zrz.gst);
            d.wez(this.ekl.zrz)
        }
    };
    this.jwh = function() {
        if (this.rvn) {
            this.rvn.wez(this.ekl.rvn)
        }
    };
    this.szt = function() {
        if (this.dso) {
            this.dso.wez(this.ekl.dso)
        }
    };
    this.uhw = function() {
        var d = null,
            e = 0;
        if (this.pgx) {
            d = this.ekl.mdh;
            if (this.pgx.ddm) {
                kit.vcj.gix(this.pgx.ddm, d.btq)
            }
            if (this.pgx.uuq) {
                this.pgx.uuq.style.fontSize = d.ufm.fontSize + "px";
                this.pgx.uuq.style.textIndent = d.ufm.textIndent + "px";
                kit.vcj.gix(this.pgx.uuq, d.vhj)
            }
            if (this.pgx.xav) {
                this.pgx.xav.style.fontSize = d.ufm.fontSize + "px";
                this.pgx.xav.style.textIndent = d.ufm.textIndent + "px";
                kit.vcj.gix(this.pgx.xav, d.sej)
            }
            if (this.pgx.boe) {
                this.pgx.boe.style.fontSize = d.ufm.fontSize + "px";
                this.pgx.boe.style.textIndent = d.ufm.textIndent + "px";
                kit.vcj.gix(this.pgx.boe, d.wdd)
            }
            if (this.pgx.ddm) {
                e = (d.btq.width - d.btq.height) / 2;
                if (this.ily == kit.ekl.hai) {
                    this.pgx.ddm.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + e + "px)"
                } else {
                    this.pgx.ddm.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + (-e) + "px)"
                }
            }
        }
    };
    this.jmc = function() {
        var d = this.pxa.fei("autop");
        if (d) {
            d.mya(this.ekl.jtd.gst);
            d.wez(this.ekl.jtd)
        }
    };
    this.qny = function() {
        var d = this.pxa.fei("settings");
        if (d) {
            d.mya(this.ekl.odc.gst);
            d.wez(this.ekl.odc)
        }
    };
    this.kxl = function() {
        var d = this.pxa.fei("topi");
        if (d) {
            d.mya(this.ekl.xji.gst);
            d.wez(this.ekl.xji)
        }
    };
    this.jhq = function() {
        var d = this.pxa.fei("topb");
        if (d) {
            d.mya(this.ekl.rbo.gst);
            d.wez(this.ekl.rbo)
        }
    };
    this.zcd = function() {
        var e = this.pxa.fei("loading"),
            d = (kit.fng.value45 == kit.wzn.zlk) ? this.ekl.wzn.vev : this.ekl.wzn.uyw;
        if (e) {
            this.canvas.width = 0;
            if (this.gvo === false) {
                this.eym.style.marginTop = (-d.gst.height / 2) + "px";
                this.eym.style.marginLeft = (-d.gst.width / 2) + "px"
            } else {
                this.eym.style.left = "0px";
                this.eym.style.top = "0px";
                this.eym.style.marginTop = ((this.zki - d.gst.height) / 2) + "px";
                this.eym.style.marginLeft = ((this.mxr - d.gst.width) / 2) + "px"
            }
            this.eym.style.width = (d.gst.width > this.mxr) ? this.mxr + "px" : d.gst.width + "px";
            this.eym.style.height = (d.gst.height > this.zki) ? this.zki + "px" : d.gst.height + "px";
            this.canvas.width = Math.round(d.gst.width);
            this.canvas.height = Math.round(d.gst.height);
            if (this.vhl) {
                this.vhl.style.width = d.gst.width + "px";
                this.vhl.style.height = d.gst.height + "px"
            }
            e.mya(d.gst);
            e.wez(d)
        }
    };
    this.rqp = function() {
        if (kit.vcj.vzn && !kit.vcj.pqo) {
            if (!this.qug.jeq && kit.vcj.yub != kit.vth.oiy) {
                this.tff = false;
                this.znd = 0
            }
        }
    };
    this.wvk = function(d) {
        if (kit.vcj.vzn) {
            if (!this.rka) {
                return kit.ekl.sjb
            } else {
                if (!this.lsh) {
                    return kit.ekl.ild
                }
            }
        }
        return d
    };
    this.wlm = function() {
        var d = this.pxa.fei("loading");
        this.fui();
        if (d) {
            d.nzx = true
        }
        if ((kit.vcj.yub === kit.vth.qln || kit.vcj.yub === kit.vth.uym || kit.vcj.yub === kit.vth.svo) && kit.vcj.jtx === kit.os.nht && kit.vcj.fje === true) {
            if (this.qug.jeq === false || kit.vcj.meu() === false || kit.vcj.aty() === false) {
                kit.kxt = kit.gtz.auz
            }
        }
        if (kit.kxt == 0) {
            if (this.tff === true && kit.vcj.uya().length === 0) {
                this.tff = false
            }
            if (d) {
                d.xgz(0)
            }
            this.fvm();
            if (this.tff === true) {
                this.mbb()
            }
            this.qug.start()
        } else {
            if (d) {
                if (kit.kxt == kit.gtz.xtc && kit.vcj.yub === kit.vth.ygp) {
                    d.iii = this.language.ijl;
                    d.xgz(0)
                } else {
                    if (kit.kxt == kit.vew.cpx) {
                        d.iii = this.language.aqq;
                        d.xgz(0)
                    } else {
                        d.iii = this.language.wjm;
                        if (kit.vcj.jtx === kit.os.nht || kit.vcj.jtx === kit.os.utx) {
                            if (kit.kxt != kit.gtz.xtc && sessionStorage.sessionValue1 === kit.language.TR) {
                                d.iii += "|Google Chrome" + this.language.xxk
                            } else {
                                if (kit.kxt != kit.gtz.xtc && (sessionStorage.sessionValue1 === kit.language.GE || sessionStorage.sessionValue1 === kit.language.HU)) {
                                    d.iii += "|" + this.language.yrk + " Google Chrome" + this.language.fxm
                                } else {
                                    d.iii += "|" + this.language.xxk + " Google Chrome"
                                }
                            }
                        } else {
                            if (kit.vcj.jtx === kit.os.ioz || kit.vcj.jtx === kit.os.utx) {
                                if (kit.kxt != kit.gtz.xtc && sessionStorage.sessionValue1 === kit.language.TR) {
                                    d.iii += "|Google Chrome, Mozilla Firefox" + this.language.xxk
                                } else {
                                    if (kit.kxt != kit.gtz.xtc && (sessionStorage.sessionValue1 === kit.language.GE || sessionStorage.sessionValue1 === kit.language.HU)) {
                                        d.iii += "|" + this.language.yrk + " Google Chrome, Mozilla Firefox" + this.language.fxm
                                    } else {
                                        d.iii += "|" + this.language.xxk + " Google Chrome, Mozilla Firefox"
                                    }
                                }
                            }
                        }
                        console.error("Errorcode: " + kit.kxt);
                        d.xgz(0)
                    }
                }
            }
        }
    };
    this.fvm = function() {};
    this.mbb = function() {};
    this.grs = function() {
        var e = this.ruv + this.ekl.type + "/",
            d = this.pxa.fei("loading");
        if (!this.rka) {
            this.qug.vqg("continue", kit.fng.value30 + "/basic/images/" + this.ekl.type + "/btn_continue.png")
        }
        if (kit.fng.value45 == kit.wzn.zlk) {
            e += "load.jpg"
        } else {
            if (kit.fng.value45 == kit.wzn.rna) {
                e += "load_amanet.jpg"
            }
        }
        if (e.indexOf(".png") >= 0) {
            if (d) {
                d.yjr = true
            }
        }
        this.qug.vqg("splash", e);
        this.qug.zrf()
    };
    this.gwy = function() {};
    this.lit = function(e) {
        for (var d = 0; d < kit.fng.value5.length; d++) {
            if (kit.fng.value5[d] == e) {
                return true
            }
        }
        return false
    };
    this.tvw = function() {
        kit.vev.jmf = true;
        if (!kit.vev.rka) {
            kit.vev.thb();
            if (kit.vev.hui()) {
                kit.vev.cbv()
            }
        } else {
            kit.vev.hwn()
        }
        kit.vev.connect()
    };
    this.thb = function() {};
    this.hwn = function() {};
    this.connect = function() {
        this.pni.connect(this.kyz, this.dcx, this.kov, this.ksh, this.ijv, this.umu, this.edf)
    };
    this.qgd = function(d) {
        if (typeof d === "undefined") {
            kit.vev.pni.qgd(0)
        } else {
            kit.vev.pni.qgd(d)
        }
    };
    this.qsu = function(d) {
        this.fwt = 0;
        this.fum = 0;
        this.gub = d;
        clearInterval(this.mjo);
        this.mjo = setInterval(this.jnp, 1000)
    };
    this.jnp = function() {
        var d = kit.vev.pxa.fei("loading");
        kit.vev.fwt++;
        kit.vev.fum = Math.round(kit.fng.value47 / 1000) - kit.vev.fwt;
        kit.vev.fum = (kit.vev.fum > 0) ? kit.vev.fum : 0;
        if (!kit.vev.usv) {
            if (d) {
                d.iii = kit.vev.language.bzr + "|" + kit.vev.language.uzk + ": " + kit.vev.gub + " (" + kit.vev.fum + " sec)";
                d.xgz(0)
            }
        }
    };
    this.hxx = function() {
        return kit.fng.value74
    };
    this.xgz = function(d, g, e, f) {};
    this.avk = function() {
        return (this.fzo === true && this.usv === true && this.qop === false)
    };
    this.uao = function(e) {
        var d = this.pxa.fei("history");
        this.fzo = true;
        if (this.usv) {
            if (this.ekl.jzh) {
                kit.vcj.zrw(this.context2D, this.ekl.vev.gst.x - this.ekl.vev.ylx, this.ekl.vev.gst.y - this.ekl.vev.ylx, this.ekl.vev.gst.width + 2 * this.ekl.vev.ylx, this.ekl.vev.gst.height + 2 * this.ekl.vev.ylx, "black", 1)
            }
            kit.vcj.bom(this.context2D, e, "white", this.ekl.vev.gst.x, this.ekl.vev.gst.y, this.ekl.vev.gst.width, this.ekl.vev.gst.height, "arial", 28, "bold");
            if (d) {
                d.xgz()
            }
        }
    };
    this.bcr = function() {
        if (kit.vev.rvn) {
            kit.vev.rvn.yen()
        }
        kit.vev.cmn(false);
        kit.vev.xpj.zdr(false);
        kit.vev.xpj.tjx.fdt("exit", "#vba", [true]);
        if (kit.vcj.ccn()) {
            kit.vcj.mtb();
            setTimeout(kit.vev.fui, 1400)
        }
        if (kit.fng.value67 > 0) {
            kit.vev.qgd(kit.fng.value67)
        } else {
            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null" && kit.vev.wvi) {
                kit.vev.wvi.rye({
                    sender: kit.vev.kyz,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                });
                window.location.href = decodeURIComponent(sessionStorage.sessionValue16)
            } else {
                if (sessionStorage.sessionValue5 && sessionStorage.sessionValue5 != "null" && kit.vev.wvi) {
                    kit.vev.wvi.pip({
                        sender: kit.vev.kyz,
                        lang: sessionStorage.sessionValue1.toUpperCase()
                    });
                    if (sessionStorage.sessionValue5 !== "(api)") {
                        window.location.href = decodeURIComponent(sessionStorage.sessionValue5)
                    }
                }
            }
        }
    };
    this.gqm = function() {
        clearTimeout(kit.vev.hzd);
        kit.vev.cmn(false);
        if (kit.vev.xpj) {
            kit.vev.xpj.zdr(false)
        }
        if (!kit.vev.rka) {
            kit.vev.stop();
            if (kit.vev.xpj) {
                kit.vev.xpj.tjx.fdt("info", "#xjj", [kit.vev.language.gpg]);
                kit.vev.xgz()
            }
            if (kit.vev.egj() === true && kit.vcj.ccn()) {
                kit.vcj.mtb();
                setTimeout(kit.vev.fui, 800);
                setTimeout(kit.vev.pni.qis.close, 800)
            } else {
                kit.vev.pni.qis.close()
            }
        } else {
            kit.vev.pni.close()
        }
    };
    this.oup = function() {
        kit.vev.ynd = true
    };
    this.vdm = function() {
        if (kit.vcj.vzn == true) {
            if (kit.vev.ynd == true) {
                kit.vev.ynd = false;
                kit.vcj.mtb();
                setTimeout(kit.vev.fui, 1400)
            }
        } else {
            kit.vcj.mtb();
            setTimeout(kit.vev.fui, 1400)
        }
    };
    this.qwx = function() {
        var e = (kit.vev.egj() === true) ? "smartphone" : "desktop",
            i = "en";
        if (sessionStorage.sessionValue1 == kit.language.ES || sessionStorage.sessionValue1 == kit.language.CO || sessionStorage.sessionValue1 == kit.language.CL || sessionStorage.sessionValue1 == kit.language.MX || sessionStorage.sessionValue1 == kit.language.VE) {
            i = "es"
        } else {
            if (sessionStorage.sessionValue1 == kit.language.RO) {
                i = "ro"
            } else {
                if (sessionStorage.sessionValue1 == kit.language.PT || sessionStorage.sessionValue1 == kit.language.BR) {
                    i = "pt"
                } else {
                    if (sessionStorage.sessionValue1 == kit.language.HR) {
                        i = "hr"
                    } else {
                        if (sessionStorage.sessionValue1 == kit.language.DE) {
                            i = "de"
                        } else {
                            if (sessionStorage.sessionValue1 == kit.language.SE) {
                                i = "se"
                            }
                        }
                    }
                }
            }
        }
        if (kit.vev.dle != "") {
            var f = null,
                g = "",
                d = "";
            if (kit.vev.dle != "") {
                g += "rtp=" + kit.vev.dle
            }
            if (kit.vev.pcb != "") {
                g += (kit.vev.dle != "") ? "&" : "";
                g += "maxwin=" + ((kit.vev.pcb == "0") ? "0" : kit.vev.ybn(Number(kit.vev.pcb) * kit.vev.ugx()))
            }
            d = encodeURIComponent(g);
            f = window.open(kit.fng.value30 + "/gamerules/" + i + "/" + e + "/" + kit.vev.kyz.toLowerCase() + ".html?" + d, "_blank", (e === "desktop") ? "width=800,scrollbars=yes" : null);
            if (f == null || typeof f === "undefined") {
                window.location.href = kit.fng.value30 + "/gamerules/" + i + "/" + e + "/" + kit.vev.kyz.toLowerCase() + ".html?" + d
            }
        }
    };
    this.hcz = function() {
        kit.vev.amr = false;
        kit.vev.jej();
        kit.vev.izx();
        kit.vev.wmm()
    };
    this.dgo = function() {
        var d = kit.vev.pxa.fei("stats");
        if (d) {
            d.vao(true, true)
        }
        kit.vev.sum.close(true)
    };
    this.ljb = function() {
        var d = kit.vev.pxa.fei("stats");
        kit.vev.stop();
        if (d && d.aod()) {
            d.vao(true, true)
        }
        kit.vev.pni.qis.close();
        if (kit.vev.sum) {
            kit.vev.sum.close(false)
        }
    };
    this.uvx = function() {
        clearTimeout(kit.vev.hzd);
        kit.vev.xpj.zdr(false);
        kit.vev.stop();
        kit.vev.pni.qis.suw()
    };
    this.fnt = function() {
        if (kit.vev.qvt) {
            return
        }
        var d = kit.vev.pxa.fei("history");
        if (d) {
            d.zdr(false)
        }
        kit.vev.stop();
        kit.vev.pni.iyy(kit.vev.wqc)
    };
    this.fsc = function() {
        if (kit.vev.qvt) {
            return
        }
        var d = kit.vev.pxa.fei("history");
        if (d) {
            d.zdr(false)
        }
        kit.vev.stop();
        kit.vev.pni.pyr(kit.vev.wqc)
    };
    this.jqf = function() {
        var d = kit.vev.pxa.fei("history");
        if (d) {
            d.zdr(false)
        }
        kit.vev.stop();
        clearInterval(kit.vev.bsw);
        kit.vev.iqi();
        kit.vev.pni.close()
    };
    this.wmg = function() {
        kit.vev.qug.qyk("btn");
        kit.vev.qug.eze("btn");
        kit.vev.bfj()
    };
    this.xad = function() {
        var f = kit.vev.pxa.fei("topb"),
            e = kit.vev.pxa.fei("settings"),
            g = kit.vev.pxa.fei("gameb"),
            d = kit.vev.pxa.fei("topi");
        if (webAudioEngine && webAudioEngine.state == "suspended") {
            webAudioEngine.resume()
        }
        if (kit.vev.qug.jeq === true) {
            kit.vev.znd = (kit.vev.znd === kit.vev.gsv.length - 1) ? 0 : kit.vev.znd + 1;
            kit.vev.ywz(kit.vev.gsv[kit.vev.znd])
        } else {
            kit.vev.znd = (kit.vev.znd === kit.vev.gsv.length - 1) ? 0 : kit.vev.gsv.length - 1;
            kit.vev.zzh((kit.vev.gsv[kit.vev.znd] === 0))
        }
        sessionStorage.sessionValue6 = kit.vev.znd;
        if (kit.vev.gsv[kit.vev.znd] > 0) {
            kit.vev.qug.eze("audioon")
        }
        if (d) {
            d.trg("audio", kit.vev.gsv[kit.vev.znd])
        }
        if (f) {
            f.tjx.fdt("audio", "#gbu", [kit.vev.znd])
        }
        if (e) {
            e.tjx.fdt("audio", "#gbu", [kit.vev.znd])
        }
        if (g) {
            g.tjx.fdt("audio", "#gbu", [kit.vev.znd])
        }
        kit.vev.xgz()
    };
    this.jzj = function() {
        kit.vev.uix = true
    };
    this.afm = function() {};
    this.znv = function() {
        var d = kit.vev.pxa.fei("settings");
        if (d) {
            if (d.aod()) {
                kit.vev.jmr()
            } else {
                kit.vev.zvp()
            }
            kit.vev.qug.eze("btn");
            if (kit.vev.ekl.xzx === false) {
                kit.vev.xpj.tjx.fdt("setting", "#faw", [d.aod()])
            }
        }
    };
    this.dwv = function() {
        var d = kit.vev.pxa.fei("settings"),
            e = "";
        kit.vev.kus = (kit.vev.kus < kit.vev.qrb.length - 1) ? kit.vev.kus + 1 : (kit.vcj.ulg()) ? 0 : 1;
        localStorage.localValue1 = kit.vev.kus;
        kit.vev.fui();
        if (d) {
            d.tjx.fdt("adjustment", "#gbu", [(kit.vev.ily === kit.ekl.xtd) ? 0 : 1]);
            if (kit.vev.qrb[kit.vev.kus] === kit.mwi.jeb) {
                e = kit.vev.language.left
            } else {
                if (kit.vev.qrb[kit.vev.kus] === kit.mwi.gmy) {
                    e = kit.vev.language.daj
                } else {
                    if (kit.vev.qrb[kit.vev.kus] === kit.mwi.vtt) {
                        e = kit.vev.language.cod
                    }
                }
            }
            d.tjx.fdt("adjustment", "#yya", [e])
        }
    };
    this.gdg = function() {
        if (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue21)
        }
    };
    this.elf = function() {
        if (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue20)
        }
    };
    this.zyl = function() {
        if (sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue19)
        }
    };
    this.psj = function(e, d) {
        this.xpj.tjx.fdt("creditd", "#yya", [this.ybn(e), d])
    };
    this.qrt = function(e, d) {
        if (e > 0) {
            this.xpj.tjx.fdt("betd", "#yya", [this.ybn(e), d])
        } else {
            this.xpj.tjx.fdt("betd", "#yya", ["", d])
        }
    };
    this.ffh = function(e) {
        var d = this.pxa.fei("topi");
        this.wqc = e;
        if (d) {
            d.xoi("id", (e > 0) ? e : "")
        }
    };
    this.qgk = function() {
        var e = "",
            d = kit.vev.pxa.fei("topi");
        if (kit.fng.value49) {
            e += kit.vev.lgi()
        }
        if (kit.fng.value49 && sessionStorage.sessionValue15 == "true") {
            e += " ["
        }
        if (sessionStorage.sessionValue15 == "true") {
            e += kit.vev.wni()
        }
        if (kit.fng.value49 && sessionStorage.sessionValue15 == "true") {
            e += "]"
        }
        if (d) {
            d.xoi("time", e)
        }
    };
    this.wni = function() {
        return this.getTime(new Date().getTime() - this.skb)
    };
    this.lgi = function() {
        var d = new Date();
        return this.vbb(d.getHours()) + ":" + this.vbb(d.getMinutes())
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
        return this.vbb(d) + ":" + this.vbb(f)
    };
    this.vbb = function(d) {
        if (d < 0) {
            return "00"
        } else {
            if (d < 10) {
                return "0" + d
            }
        }
        return d
    };
    this.qhz = function() {
        if (sessionStorage.sessionValue15 == "true" || kit.fng.value49) {
            if (kit.fng.value49) {
                this.lgi()
            }
            this.skb = (this.vce > 0) ? this.vce : new Date().getTime();
            this.qgk();
            this.nxv = setInterval(this.qgk, 1000)
        }
    };
    this.elt = function() {
        clearInterval(this.nxv)
    };
    this.pey = function(d) {
        this.skb -= d
    };
    this.zhy = function(d, f) {
        var e = this.pxa.fei("loading");
        if (e && e.iii == null) {
            if (f && f !== "") {
                e.nft = f
            } else {
                e.nft = this.language.error
            }
            e.iii = d;
            e.xgz(this.qug.kuv())
        }
    };
    this.zvp = function() {};
    this.jmr = function() {};
    this.xoh = function() {};
    this.gkg = function() {};
    this.bfj = function() {
        var g = false,
            i = this.pxa.fei("topb"),
            f = this.pxa.fei("settings"),
            j = this.pxa.fei("gameb"),
            d = this.pxa.fei("topi");
        this.pfm = (this.pfm + 1 == kit.fng.value5.length) ? 0 : this.pfm + 1;
        sessionStorage.sessionValue1 = kit.fng.value5[this.pfm];
        this.language = this.wtj(kit.fng.value5[this.pfm]);
        this.jfd();
        if (i && g == false) {
            var e = i.tjx.fei("language");
            if (e) {
                e.vfh(this.fbe(kit.fng.value5[this.pfm]));
                g = true
            }
            i.phi(true)
        }
        if (f && g == false) {
            var e = f.tjx.fei("language");
            if (e) {
                e.vfh(this.fbe(kit.fng.value5[this.pfm]));
                g = true
            }
        }
        if (j && g == false) {
            var e = j.tjx.fei("language");
            if (e) {
                e.vfh(this.fbe(kit.fng.value5[this.pfm]));
                g = true
            }
        }
        if (g == false) {
            var e = this.xpj.tjx.fei("lang");
            if (e) {
                e.bqe = this.fbe(kit.fng.value5[this.pfm])
            }
        }
        if (d) {
            d.gbu("language", sessionStorage.sessionValue1)
        }
        this.xgz()
    };
    this.jfd = function() {};
    this.wtj = function(d) {
        if (d == kit.language.EN || d == kit.language.US) {
            return new sll()
        } else {
            if (d == kit.language.ES || d == kit.language.CO || d == kit.language.MX || d == kit.language.CL || d == kit.language.VE) {
                return new guq()
            } else {
                if (d == kit.language.DE || d == kit.language.AT) {
                    return new dfd()
                } else {
                    if (d == kit.language.PT || d == kit.language.BR) {
                        return new grb()
                    } else {
                        if (d == kit.language.RU) {
                            return new dhi()
                        } else {
                            if (d == kit.language.EE) {
                                return new kmx()
                            } else {
                                if (d == kit.language.TR) {
                                    return new ebv()
                                } else {
                                    if (d == kit.language.CZ) {
                                        return new gcc()
                                    } else {
                                        if (d == kit.language.GR) {
                                            return new pqm()
                                        } else {
                                            if (d == kit.language.BG) {
                                                return new ysn()
                                            } else {
                                                if (d == kit.language.GE) {
                                                    return new ngr()
                                                } else {
                                                    if (d == kit.language.HU) {
                                                        return new ymb()
                                                    } else {
                                                        if (d == kit.language.RO) {
                                                            return new yjy()
                                                        } else {
                                                            if (d == kit.language.FR) {
                                                                return new mfp()
                                                            } else {
                                                                if (d == kit.language.HR) {
                                                                    return new uxc()
                                                                } else {
                                                                    if (d == kit.language.IT) {
                                                                        return new wyu()
                                                                    } else {
                                                                        if (d == kit.language.SE) {
                                                                            return new hcr()
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
    this.fbe = function(d) {
        if (d) {
            return this.qug.uyv(d)
        }
        return null
    };
    this.rtv = function() {
        this.qug.clf()
    };
    this.iqi = function() {};
    this.zzh = function(d) {
        this.qug.oxw(d)
    };
    this.ywz = function(d) {
        this.qug.qhc(d)
    };
    this.voh = function() {
        this.yjs();
        var d = this.pxa.fei("history");
        this.usv = true;
        this.qvt = true;
        if (d) {
            d.qff(true)
        }
        this.uao(this.dcq(this.language.cmo))
    };
    this.vww = function() {
        loadGame("hist_" + kit.vev.kyz.toLowerCase(), kit.fng.value30 + "/" + kit.vev.kyz.toLowerCase() + "/src/hist_" + kit.vev.kyz.toLowerCase(), "UTF-8");
        removeGame(kit.vev.kyz.toLowerCase(), kit.fng.value30 + "/" + kit.vev.kyz.toLowerCase() + "/src/" + kit.vev.kyz.toLowerCase())
    };
    this.kwa = function() {
        var d = "./history_" + this.kyz.toLowerCase() + ".html";
        if (sessionStorage.sessionValue12) {
            d += "?config=" + sessionStorage.sessionValue12
        }
        window.location.href = d
    };
    this.tma = function() {
        var d = null;
        if (kit.vev.lsh) {
            return
        }
        if (sessionStorage.sessionValue5 != null) {
            if (kit.vev.wvi) {
                kit.vev.wvi.pip({
                    sender: kit.vev.kyz,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                })
            }
            sessionStorage.exitGame = "true";
            d = decodeURIComponent(sessionStorage.sessionValue5);
            kit.vev.ikt();
             if (d !== "(api)") {
               window.parent.postMessage('CloseGame',"*");	
            }
        } else {
            removeGame(kit.vev.kyz.toLowerCase(), kit.fng.value30 + "/" + kit.vev.kyz.toLowerCase() + "/src/" + kit.vev.kyz.toLowerCase());
            removeGame("hist_" + kit.vev.kyz.toLowerCase(), kit.fng.value30 + "/" + kit.vev.kyz.toLowerCase() + "/src/hist_" + kit.vev.kyz.toLowerCase());
            loadMenu("menu", kit.fng.value1001, "UTF-8", true)
        }
    };
    this.orc = function() {
        var d = null;
        if (sessionStorage.sessionValue5 != null) {
            if (kit.vev.wvi) {
                kit.vev.wvi.pip({
                    sender: kit.vev.kyz,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                })
            }
            d = decodeURIComponent(sessionStorage.sessionValue5);
            kit.vev.ikt();
             if (d !== "(api)") {
               window.parent.postMessage('CloseGame',"*");	
            }
        } else {
            removeGame(kit.vev.kyz.toLowerCase(), kit.fng.value30 + "/" + kit.vev.kyz.toLowerCase() + "/src/" + kit.vev.kyz.toLowerCase());
            removeGame("hist_" + kit.vev.kyz.toLowerCase(), kit.fng.value30 + "/" + kit.vev.kyz.toLowerCase() + "/src/hist_" + kit.vev.kyz.toLowerCase());
            loadMenu("menu", kit.fng.value1001, "UTF-8", false)
        }
    };
    this.ikt = function() {
        if (!kit.vev.rka && kit.fng.value83) {
            sessionStorage.clear()
        }
    };
    this.hpy = function(f) {
        var g = null;
        if (this.rvn) {
            for (var e = 0, d = f.length; e < d; e++) {
                g = f[e];
                if (g.mwa !== kit.vew.vpm) {
                    if (g.mwa === kit.vew.rtk || g.mwa === kit.vew.xiu) {
                        g.Title = this.language.sjx;
                        g.Text = (g.mwa === kit.vew.rtk) ? this.language.oyy : this.language.qbw;
                        g.Buttons = [{
                            Text: this.language.quj,
                            Action: "quit"
                        }]
                    } else {
                        if (g.mwa === kit.vew.bjm) {
                            g.Title = this.language.umw;
                            g.Text = this.language.mgk + "\n";
                            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                                g.Text += this.language.ayv;
                                g.Buttons = [{
                                    Text: this.dcq(this.language.kaq),
                                    Action: "history"
                                }, {
                                    Text: this.language.quj,
                                    Action: "quit"
                                }]
                            } else {
                                g.Buttons = [{
                                    Text: this.language.quj,
                                    Action: "quit"
                                }]
                            }
                        } else {
                            if (g.mwa === kit.vew.ykm || g.mwa === kit.vew.ljx || g.mwa === kit.vew.mpb) {
                                g.Title = this.urp;
                                if (g.mwa === kit.vew.ykm) {
                                    g.Text = this.language.freerounds_startinfo + " " + this.freeRoundTotal + " " + this.language.freerounds + "\n\n" + this.language.hle
                                } else {
                                    if (g.mwa === kit.vew.ljx) {
                                        g.Text = this.language.freerounds_info1 + " " + (this.freeRoundTotal - this.cfc) + " " + this.language.freerounds_info2 + "\n\n" + this.language.hle
                                    } else {
                                        if (g.mwa === kit.vew.mpb) {
                                            g.Text = this.language.freerounds_played + ": " + this.cfc + "\n" + this.language.freerounds_win + ": " + this.ywx(this.bdy)
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
                    if (g.mwa === kit.vew.rjc || g.mwa === kit.vew.mpl) {
                        g.Title = this.language.stp;
                        g.Text = this.language.cua;
                        g.Buttons = [{
                            Text: this.language.ok,
                            Action: "continue"
                        }]
                    } else {
                        if (g.mwa === kit.vew.psb) {
                            g.Title = this.language.brk;
                            g.Text = this.language.zzo;
                            g.Buttons = [{
                                Text: this.language.ok,
                                Action: "continue"
                            }]
                        } else {
                            if (g.mwa === kit.vew.roulette.aao || g.mwa === kit.vew.roulette.uoj) {
                                g.Title = this.language.sjx;
                                g.Text = (g.mwa === kit.vew.roulette.aao) ? this.language.pcu : this.language.srq;
                                g.Buttons = [{
                                    Text: this.language.quj,
                                    Action: "quit"
                                }]
                            }
                        }
                    }
                }
            }
            this.rvn.wyc(f)
        }
    };
    this.stop = function() {
        this.elt();
        this.szk();
        this.fjy();
        clearTimeout(this.hys);
        if (!this.rka) {
            clearInterval(this.bsw)
        }
        this.pxa.fdt("autop", "#stop");
        this.pxa.fdt("settings", "#stop");
        this.pxa.fdt("topb", "#stop")
    };
    this.rqg = function() {
        var d = false;
        if (this.cpz.toLowerCase().indexOf("freeplay") === 0) {
            d = true
        } else {
            if (this.dcx == "freeplay" && this.kov == "freeplay") {
                d = true
            } else {
                if (this.ksh && (this.ksh == "b71d982ffcbe56eb8cd11fa05963bbee" || this.ksh.toLowerCase() == "freeplay")) {
                    d = true
                } else {
                    if (kit.fng.value68 != null && this.edf.toLowerCase() === kit.fng.value68.toLowerCase()) {
                        d = true
                    }
                }
            }
        }
        if (d === true) {
            kit.fng.value21.e = false;
            if (kit.fng.value76) {
                kit.fng.value76.f = false
            }
        }
        return d
    };
    this.yqh = function() {
        return (kit.fng.value65 > 0)
    };
    this.fge = function() {
        return (this.rka === false)
    };
    this.afg = function() {
        return false
    };
    this.xyl = function() {
        if (kit.vev.yqh() && kit.vev.afg()) {
            clearTimeout(kit.vev.hzd);
            kit.vev.hzd = setTimeout(kit.vev.gqm, kit.fng.value65)
        }
    };
    this.oko = function() {
        if (kit.vev.yqh() && kit.vev.hzd >= 0) {
            if (kit.vev.afg()) {
                clearTimeout(kit.vev.hzd);
                kit.vev.hzd = setTimeout(kit.vev.gqm, kit.fng.value65)
            } else {
                clearTimeout(kit.vev.hzd);
                kit.vev.hzd = -1
            }
        }
    };
    this.szk = function() {
        if (kit.vev.yqh()) {
            clearTimeout(kit.vev.hzd);
            kit.vev.hzd = -1
        }
    };
    this.old = function() {
        return false
    };
    this.eje = function() {
        return false
    };
    this.ofz = function() {
        if (kit.vev.old() && kit.vev.eje() && kit.vev.pku < 0) {
            clearTimeout(kit.vev.pku);
            kit.vev.pku = setTimeout(kit.vev.pdt, kit.vev.did)
        }
    };
    this.min = function() {
        if (kit.vev.old() && kit.vev.pku >= 0) {
            if (kit.vev.eje()) {
                clearTimeout(kit.vev.pku);
                kit.vev.pku = setTimeout(kit.vev.pdt, kit.vev.did)
            } else {
                clearTimeout(kit.vev.pku);
                kit.vev.pku = -1
            }
        }
    };
    this.fjy = function() {
        if (kit.vev.old()) {
            clearTimeout(kit.vev.pku);
            kit.vev.pku = -1
        }
    };
    this.pdt = function() {};
    this.iga = function() {};
    this.ezb = function(f) {
        var e = Number(f.replace(/_*/g, "")),
            d = Number(this.ijv.replace(/_*/g, ""));
        if (e > d) {
            this.ijv = f
        }
    };
    this.cmn = function(g) {
        var e = (g && !this.rcy),
            f = this.pxa.fei("topb"),
            d = this.pxa.fei("topi");
        if (d) {
            d.vba(e)
        }
        if (f) {
            f.vba(e);
            f.zdr(e)
        }
    };
    this.qvr = function(g) {
        var e = (g && !this.rcy),
            f = this.pxa.fei("topb"),
            d = this.pxa.fei("topi");
        if (d) {
            d.vba(e)
        }
        if (f) {
            f.vba(e);
            f.ncp(e)
        }
    };
    this.dzq = function(g) {
        var e = (g && !this.rcy),
            f = this.pxa.fei("topb"),
            d = this.pxa.fei("topi");
        if (d) {
            d.vba(e)
        }
        if (f) {
            f.vba(e);
            f.vxl(e)
        }
    };
    this.xax = function() {
        var d = this.pxa.fei("topb");
        if (d && !d.aod()) {
            this.qug.qyk("panel_in");
            this.qug.eze("panel_in");
            d.wyc()
        }
    };
    this.jej = function(d) {
        var e = this.pxa.fei("topb");
        if (e && e.aod()) {
            this.qug.qyk("panel_out");
            this.qug.eze("panel_out");
            if (d) {
                e.xwi = d
            }
            e.yen()
        }
    };
    this.ywx = function(f) {
        if (this.nvb > 0) {
            return (f * this.nvb).toFixed(0).toString()
        } else {
            if (kit.fng.value21.e == false || this.lsh == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (kit.fng.value21.m != 1) {
                    e = f * kit.fng.value21.m;
                    var g = kit.fng.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = kit.fng.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.woy(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.ybn = function(f) {
        if (this.nvb > 0) {
            var e = (f * this.nvb).toFixed(0).toString();
            if (kit.fng.value21.e == true && kit.fng.value21.m == 1 && kit.fng.value21.s && this.lsh == false) {
                e = kit.fng.value21.s + " " + e
            }
            return e
        } else {
            if (kit.fng.value21.e == false || this.lsh == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (kit.fng.value21.m != 1) {
                    e = f * kit.fng.value21.m;
                    var g = kit.fng.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = kit.fng.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.woy(e, (d == 0) ? 0 : d + 1);
                if (kit.fng.value21.s) {
                    e = kit.fng.value21.s + " " + e
                }
                return e
            }
        }
    };
    this.woy = function(l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (kit.fng.value21.cs != null) {
                l = l.replace(/\./, kit.fng.value21.cs)
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
                    if (kit.fng.value21.ts != null) {
                        e += kit.fng.value21.ts
                    }
                }
            }
            if (kit.fng.value21.cs != null) {
                f = f.replace(/\./, kit.fng.value21.cs)
            }
            return e + f
        }
    };
    this.hzl = function(f) {
        if (this.nvb > 0) {
            return (f * this.nvb).toFixed(0).toString()
        } else {
            if (kit.fng.value76.f == false || this.lsh == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (kit.fng.value76.m != 1) {
                    e = f * kit.fng.value76.m;
                    var g = kit.fng.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = kit.fng.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.jqq(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.hze = function(f) {
        if (this.nvb > 0) {
            var e = (f * this.nvb).toFixed(0).toString();
            if (kit.fng.value76.f == true && kit.fng.value76.m == 1 && kit.fng.value76.s && this.lsh == false) {
                e = kit.fng.value76.s + " " + e
            }
            return e
        } else {
            if (kit.fng.value76.f == false || this.lsh == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (kit.fng.value76.m != 1) {
                    e = f * kit.fng.value76.m;
                    var g = kit.fng.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = kit.fng.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.jqq(e, (d == 0) ? 0 : d + 1);
                if (kit.fng.value76.s) {
                    e = kit.fng.value76.s + " " + e
                }
                return e
            }
        }
    };
    this.jqq = function(l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (kit.fng.value76.cs != null) {
                l = l.replace(/\./, kit.fng.value76.cs)
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
                    if (kit.fng.value76.ts != null) {
                        e += kit.fng.value76.ts
                    }
                }
            }
            if (kit.fng.value76.cs != null) {
                f = f.replace(/\./, kit.fng.value76.cs)
            }
            return e + f
        }
    };
    this.dcq = function(d) {
        if (d && sessionStorage.sessionValue1 !== kit.language.GE) {
            return d.toUpperCase()
        }
        return d
    };
    this.gzw = function() {
        for (var f = 0, d = this.pni.qis.gos.length, e = null, g = 0; f < d; f++) {
            e = this.pni.qis.gos[f];
            g = e.qwb.substring(e.qwb.length - 1);
            this.pxa.dcj(e.qwb, this.jig(this.ekl.vny.gst[d - 1][e.gst], (d > 2) ? this.ekl.vny.nxq : this.ekl.vny.display, this.style.vny.shz[e.gst], e.vwd, e.value, this.qug.uyv((d > 2) ? e.qwb + "_smalldsp" : e.qwb + "_dsp"), (d <= 2) ? [this.qug.uyv("jackpot_frame")] : (Number(g) <= 2) ? [this.qug.uyv("jackpot_topframe")] : [this.qug.uyv("jackpot_bottomframe")], (d > 2) ? this.qug.uyv(e.qwb + "_sym") : null), ["jackpots"])
        }
        this.pxa.dcj("jwp", this.jig(this.ekl.vny.rca.gst, this.ekl.vny.rca, this.style.vny.rca, null, null, null, [this.qug.uyv("jackpot_win_0"), this.qug.uyv("jackpot_win_1"), this.qug.uyv("jackpot_win_2")], null));
        this.pxa.fdt("jwp", "#dwr", [false]);
        if (this.awj()) {
            this.pxa.dcj("mjwp", this.mee(this.ekl.vny.mja.gst, this.ekl.vny.mja, this.style.vny.mja, this.qug.uyv("mj_bg"), this.qug.uyv("mj_font"), this.qug.uyv("mj_label"), [this.qug.uyv("mj_0"), this.qug.uyv("mj_1"), this.qug.uyv("mj_2"), this.qug.uyv("mj_3"), this.qug.uyv("mj_4"), this.qug.uyv("mj_5")]));
            this.pxa.fdt("mjwp", "#dwr", [false])
        }
    };
    this.wtx = function() {
        var e = this.pxa.nlq("jackpots"),
            f = this.pxa.fei("jwp"),
            k = this.pxa.fei("mjwp");
        for (var j = 0, d = this.pni.qis.gos.length, g = null; j < d; j++) {
            g = this.pni.qis.gos[j];
            e[j].mya(this.ekl.vny.gst[d - 1][g.gst]);
            e[j].wez((d > 2) ? this.ekl.vny.nxq : this.ekl.vny.display)
        }
        if (f) {
            f.mya(this.ekl.vny.rca.gst);
            f.wez(this.ekl.vny.rca)
        }
        if (k) {
            k.mya(this.ekl.vny.mja.gst);
            k.wez(this.ekl.vny.mja)
        }
    };
    this.jig = function(k, i, e, l, m, f, d, g) {
        var j = new kyd();
        j.fbq(k, null, this.context2D);
        j.parent = this;
        j.mhj = f;
        j.ywl = d;
        j.muf = g;
        j.wrl(l);
        j.fvx(m);
        j.goa(e);
        j.wez(i);
        return j
    };
    this.mee = function(j, i, g, k, l, f, e) {
        var d = new ybb();
        d.fbq(j, null, this.context2D);
        d.parent = this;
        d.brb = k;
        d.oak = l;
        d.rgg = f;
        d.dfl = e;
        d.goa(g);
        d.wez(i);
        return d
    };
    this.rll = function(f) {
        if (this.ysl() === true) {
            for (var e = 0, d = f.length; e < d; e++) {
                this.pxa.fdt(f[e].qwb, "#fvx", [f[e].value])
            }
            this.xgz()
        }
    };
    this.yhq = function(d) {
        if (this.ysl() === true) {
            this.vny = {
                qwb: d.qwb,
                value: d.value,
                vkp: d.vkp
            }
        }
    };
    this.mbx = function() {
        this.vny = null
    };
    this.jxt = function() {
        return false
    };
    this.awj = function() {
        return false
    };
    this.ysl = function() {
        return (!this.rka && this.pni.qis.gos.length > 0 && this.jxt())
    };
    this.asg = function() {
        return (this.vny != null)
    };
    this.wac = function() {
        return (kit.fng.value86 === true && ((sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") || (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") || (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null")))
    };
    this.pdb = function() {
        if (this.zee() && this.zrl()) {
            this.pte()
        }
    };
    this.zrl = function() {
        return false
    };
    this.zee = function() {
        if (this.rka) {
            return false
        }
        return (this.pni.qis.ort.length + this.pni.qis.fvc.length > 0)
    };
    this.pte = function() {
        var g = null,
            e = this.pni.qis.ort.length,
            d = this.pni.qis.fvc.length;
        if (d + e > 0) {
            for (var f = e - 1; f >= 0; f--) {
                g = this.pni.qis.ort.splice(f, 1)[0];
                g.mwa = kit.vew.vpm;
                this.tio.push(g)
            }
            for (var f = d - 1; f >= 0; f--) {
                g = this.pni.qis.fvc.splice(f, 1)[0];
                g.mwa = kit.vew.vpm;
                this.tio.push(g)
            }
            if (this.rvn && !this.rvn.aod()) {
                this.ixi()
            }
        }
    };
    this.ixi = function() {
        var d = null;
        if (this.tio.length > 0) {
            d = this.tio.shift();
            this.hpy([d])
        }
    };
    this.rap = function() {
        if (kit.vev.gty.length > 0) {
            kit.vev.hpy(kit.vev.gty)
        }
    };
    this.tpe = function() {
        this.tio.length = 0
    };
    this.sdw = function() {
        this.gty.length = 0;
        if (this.dso) {
            this.dso.yen()
        }
    };
    this.vpw = function() {
        var f = null,
            d = this.pni.qis.gty.length;
        if (d > 0) {
            for (var e = d - 1; e >= 0; e--) {
                f = this.pni.qis.gty.splice(e, 1)[0];
                f.mwa = kit.vew.vpm;
                this.gty.push(f)
            }
            if (this.dso) {
                this.dso.wyc(this.gty[0].Title, this.gty[0].Text, this.gty.length)
            }
        }
    };
    this.uxw = function() {
        var d = false;
        if (this.rvn && this.rvn.aod()) {
            d = true
        }
        if (this.dso && this.dso.aod()) {
            d = true
        }
        if (this.wac()) {
            d = true
        }
        if (this.vhl) {
            this.vhl.style.display = (d) ? "block" : "none"
        }
    };
    this.exp = function() {
        this.cmn(false);
        this.xpj.zdr(false);
        this.xpj.tjx.fdt("info", "#ick");
        this.hpy([{
            mwa: kit.vew.bjm
        }])
    };
    this.kxp = function() {
        kit.vev.bby = true
    };
    this.cbv = function() {
        this.sum = new zif().fbq(this, kit.fng.value6)
    };
    this.jng = function() {
        if (this.sum) {
            this.sum.connect(this.kyz, this.dcx, this.kov, this.ksh, this.ijv, true)
        }
    };
    this.wmm = function() {
        if (kit.vev.sum) {
            kit.vev.sum.connect(kit.vev.kyz, kit.vev.dcx, kit.vev.kov, kit.vev.ksh, kit.vev.ijv, false)
        }
    };
    this.izx = function() {};
    this.qjc = function() {};
    this.tds = function(d) {
        if (!this.rqg() && !this.rka) {
            clearTimeout(this.hys);
            if (this.hui()) {
                this.hys = setTimeout(this.gii, d)
            } else {
                if (Number(sessionStorage.sessionValue17) > 0) {
                    this.hys = setTimeout(this.kxp, Number(sessionStorage.sessionValue17) * 60000)
                }
            }
        }
    };
    this.gii = function() {
        kit.vev.amr = true
    };
    this.hui = function() {
        return kit.fng.value36 || kit.fng.value37
    }
}

function vwj() {
    this.fbq = function() {
        this.iok("btn", this.vug);
        this.iok("gamble_on", this.vug);
        this.iok("gamble_off", this.vug);
        this.iok("panel_in", this.vug);
        this.iok("panel_out", this.vug);
        this.iok("audioon", this.vug);
        for (var a = 0; a < 12; a++) {
            this.iok("step" + a, this.vug)
        }
        this.iok("maxstep", this.vug);
        this.iok("gambleprop", this.pjc)
    }
}
vwj.prototype = new lps;

function qrz() {
    this.xjg = {
        bgt: 84,
        hno: -1,
        value: "T",
        omx: null
    };
    this.lia = {
        bgt: 80,
        hno: -1,
        value: "P",
        omx: null
    };
    this.start = {
        bgt: 32,
        hno: -1,
        value: "SPACE",
        omx: null
    };
    this.rcy = {
        bgt: 16,
        hno: -1,
        value: "SHIFT",
        omx: null
    };
    this.chp = {
        bgt: 38,
        hno: -1,
        value: "\u25B2",
        omx: null
    };
    this.uvf = {
        bgt: 40,
        hno: -1,
        value: "\u25BC",
        omx: null
    };
    this.cwc = {
        bgt: 71,
        hno: -1,
        value: "G",
        omx: null
    };
    this.yzm = {
        bgt: 27,
        hno: -1,
        value: "ESC",
        omx: null
    };
    this.language = {
        bgt: 76,
        hno: -1,
        value: "L",
        omx: null
    };
    this.uyo = {
        bgt: 13,
        hno: -1,
        value: "ENTER",
        omx: null
    };
    this.mnz = {
        bgt: 27,
        hno: -1,
        value: "ESC",
        omx: null
    };
    this.twg = {
        bgt: 39,
        hno: -1,
        value: "\u25B6",
        omx: null
    };
    this.nxt = {
        bgt: 37,
        hno: -1,
        value: "\u25C0",
        omx: null
    };
    this.nwq = {
        bgt: 27,
        hno: -1,
        value: "ESC",
        omx: null
    };
    this.mqk.push(this.xjg);
    this.mqk.push(this.lia);
    this.mqk.push(this.start);
    this.mqk.push(this.chp);
    this.mqk.push(this.uvf);
    this.mqk.push(this.yzm);
    this.mqk.push(this.language);
    this.mqk.push(this.rcy);
    this.mqk.push(this.cwc)
}
qrz.prototype = new wbi;

function jdz(g, c, f, e, i, a, d, b) {
    this.aif = g;
    this.xnx = f;
    this.lzn = e;
    this.vcb = i;
    this.kyz = c;
    this.ijv = a;
    this.umu = d;
    this.edf = b;
    this.gil = [];
    this.dzg = [];
    this.hkt = [];
    this.iaz = [];
    this.nug = [];
    this.wqc = 0;
    this.vkp = 0;
    this.win = 0;
    this.pak = 0;
    this.wlc = 0;
    this.zjw = 0;
    this.hwy = 0;
    this.vvg = 0;
    this.mmp = -1;
    this.eih = -1;
    this.cpc = 0;
    this.rcy = false;
    this.kdr = -1;
    this.zut = 0;
    this.xkq = "";
    this.pfn = function(l) {
        if (l != null) {
            this.fzk = 0;
            this.uue = this.esq(l);
            if (this.uue == 0) {
                this.qxk = this.bwk(l);
                this.vew = this.esq(l);
                this.wqc = this.ydz(l);
                this.vkp = this.ydz(l);
                this.win = this.ydz(l);
                this.pak = this.ydz(l);
                this.hwy = this.bwk(l);
                this.wlc = this.ydz(l);
                this.zjw = this.ydz(l);
                this.vvg = this.ydz(l);
                for (var j = 0; j < 8; j++) {
                    this.hkt[j] = this.bwk(l)
                }
                for (var j = 0; j < 5; j++) {
                    this.dzg[j] = this.ydz(l)
                }
                for (var j = 0; j < 5; j++) {
                    this.gil[j] = this.ydz(l)
                }
                this.mmp = this.bwk(l);
                this.eih = this.bwk(l);
                this.cpc = this.bwk(l);
                this.zut = this.bwk(l);
                this.kdr = this.bwk(l);
                var m = this.bwk(l);
                for (var j = 0; j < m; j++) {
                    this.iaz[j] = this.ydz(l)
                }
                var k = this.bwk(l);
                for (var j = 0; j < k; j++) {
                    this.nug[j] = this.ydz(l)
                }
                this.sub(l);
                if (this.qxk == 0) {
                    this.nki("A/u250")
                } else {
                    this.pni.epm()
                }
            } else {
                if (this.uue == 1) {
                    this.qxk = this.bwk(l);
                    this.vew = this.esq(l);
                    this.wqc = this.ydz(l);
                    this.vkp = this.ydz(l);
                    this.win = this.ydz(l);
                    this.pak = this.ydz(l);
                    this.hwy = this.bwk(l);
                    this.wlc = this.ydz(l);
                    this.zjw = this.ydz(l);
                    this.vvg = this.ydz(l);
                    for (var j = 0; j < 8; j++) {
                        this.hkt[j] = this.bwk(l)
                    }
                    for (var j = 0; j < 5; j++) {
                        this.dzg[j] = this.ydz(l)
                    }
                    for (var j = 0; j < 5; j++) {
                        this.gil[j] = this.ydz(l)
                    }
                    this.mmp = this.bwk(l);
                    this.eih = this.bwk(l);
                    this.cpc = this.bwk(l);
                    this.rcy = (this.bwk(l) == 1) ? true : false;
                    this.zut = this.bwk(l);
                    this.kdr = this.bwk(l);
                    this.sub(l);
                    if (this.vew == 0) {
                        if (this.qxk == kit.rhw.mzb.xej) {
                            this.pni.epm()
                        } else {
                            if (this.qxk == kit.rhw.mzb.zqp) {
                                this.pni.vxf()
                            } else {
                                if (this.qxk == kit.rhw.mzb.iwo) {
                                    this.pni.tcl()
                                } else {
                                    if (this.qxk == kit.rhw.mzb.obd) {
                                        this.pni.sbg()
                                    } else {
                                        if (this.qxk == kit.rhw.mzb.zsb) {
                                            this.pni.bpq()
                                        } else {
                                            if (this.qxk == kit.rhw.mzb.dco) {
                                                this.pni.ytb()
                                            } else {
                                                if (this.qxk == kit.rhw.mzb.yxu) {
                                                    this.pni.svx()
                                                } else {
                                                    if (this.qxk == kit.rhw.mzb.zyo) {
                                                        this.pni.zdc()
                                                    } else {
                                                        if (this.qxk == kit.rhw.mzb.qbz) {
                                                            this.pni.jut()
                                                        } else {
                                                            if (this.qxk == kit.rhw.mzb.uoo) {
                                                                this.pni.bid()
                                                            } else {
                                                                if (this.qxk == kit.rhw.mzb.egv) {
                                                                    this.pni.tbn()
                                                                } else {
                                                                    if (this.qxk == kit.rhw.mzb.rfc) {
                                                                        this.pni.grr()
                                                                    } else {
                                                                        this.ttj()
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
                        this.pni.xpc(this.vew)
                    }
                } else {
                    if (this.uue == 2) {} else {
                        if (this.uue == 3) {
                            this.vkp = this.ydz(l);
                            this.pni.psj()
                        } else {
                            if (this.uue === 8) {
                                this.nki("8")
                            } else {
                                if (this.uue == 9) {
                                    this.pni.sdc.cpz = l.substring(this.fzk)
                                } else {
                                    this.kxt = this.esq(l);
                                    this.pni.lij(l.substring(2))
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.sub = function(j) {
        if (this.uue == 0) {
            this.xkq = this.hdb(j);
            if (kit.fng.value21.e === true && kit.fng.value21.s !== "") {
                this.xkq = ""
            }
        }
    };
    this.ttj = function() {};
    this.til = function(j, k) {
        this.nki("A/u251," + j + "," + k)
    };
    this.ylk = function(j, l, k) {
        this.nki("A/u2512," + k[0] + "," + k[1] + "," + k[2] + "," + k[3] + "," + k[4] + "," + j + "," + l)
    };
    this.hon = function(j, l, k) {
        this.nki("A/u253," + k[0] + "," + k[1] + "," + k[2] + "," + k[3] + "," + k[4] + "," + j + "," + l)
    };
    this.ygw = function() {
        this.nki("A/u257")
    };
    this.poo = function() {
        this.nki("A/u259")
    };
    this.cwc = function(j) {
        this.nki("A/u258," + j)
    };
    this.zvs = function() {
        this.nki("A/u2514")
    };
    this.vet = function() {
        this.nki("A/u2515")
    };
    this.pva = function(j) {
        this.nki("A/u2513," + j)
    }
}
jdz.prototype = new yrl;

function sgi() {
    this.fbq = function(a, b) {
        this.aif = b;
        this.sdc = a;
        return this
    };
    this.connect = function(c, f, e, g, a, d, b) {
        this.xnx = f;
        this.lzn = e;
        this.vcb = g;
        this.kyz = c;
        this.umu = d;
        this.edf = b;
        this.qis = new jdz(this.aif, c, f, e, g, a, d, b);
        this.qis.fbq(this)
    };
    this.til = function(a, b) {
        this.qis.til(a, b)
    };
    this.ylk = function(a, c, b) {
        this.qis.ylk(a, c, b)
    };
    this.hon = function(a, c, b) {
        this.qis.hon(a, c, b)
    };
    this.ygw = function() {
        this.qis.ygw()
    };
    this.poo = function() {
        this.qis.poo()
    };
    this.cwc = function(a) {
        this.qis.cwc(a)
    };
    this.zvs = function() {
        this.qis.zvs()
    };
    this.vet = function() {
        this.qis.vet()
    };
    this.pva = function(a) {
        this.qis.pva(a)
    };
    this.epm = function() {
        var c = this.qis.qxk;
        for (var b = 0; b < this.qis.dzg.length; b++) {
            this.sdc.dzg[b] = this.qis.dzg[b]
        }
        for (var b = 0; b < this.qis.gil.length; b++) {
            this.sdc.gil[b] = this.qis.gil[b]
        }
        this.sdc.vkp = this.qis.vkp;
        this.sdc.wlc = this.qis.wlc;
        this.sdc.zjw = this.qis.zjw;
        for (var b = 0, a = this.qis.iaz.length; b < a && this.qis.iaz[b] <= this.qis.zjw; b++) {
            this.sdc.iaz[b] = this.qis.iaz[b]
        }
        if (c == kit.rhw.mzb.xej || (c == kit.rhw.mzb.iwo && this.qis.win + this.qis.pak == 0) || c == kit.rhw.mzb.obd || (c == kit.rhw.mzb.zsb && this.qis.win + this.qis.pak == 0) || c == kit.rhw.mzb.yxu || (c == kit.rhw.mzb.qbz && this.qis.win + this.qis.pak == 0) || (c == kit.rhw.mzb.zqp && this.sdc.qcv == true)) {
            this.sdc.bvj = true
        } else {
            this.sdc.bvj = false
        }
        this.sdc.bkh = this.qis.hwy;
        this.sdc.totalBet = this.sdc.iaz[this.sdc.bkh];
        this.sdc.win = this.qis.win;
        this.sdc.bap = this.qis.mmp;
        this.sdc.eih = this.qis.eih;
        this.sdc.cpc = this.qis.cpc;
        this.sdc.state = c;
        this.xif();
        this.sdc.qpj();
        this.sdc.efq(this.qis.qxk, this.qis.wqc, this.qis.hkt, this.qis.zut, this.qis.kdr)
    };
    this.vxf = function() {
        for (var a = 0; a < this.qis.dzg.length; a++) {
            this.sdc.dzg[a] = this.qis.dzg[a]
        }
        for (var a = 0; a < this.qis.gil.length; a++) {
            this.sdc.gil[a] = this.qis.gil[a]
        }
        this.sdc.vkp = this.qis.vkp;
        this.sdc.bap = this.qis.mmp;
        this.sdc.state = this.qis.qxk;
        this.sdc.eih = this.qis.eih;
        this.xif();
        this.sdc.xds();
        this.sdc.ffh(this.qis.wqc)
    };
    this.zdc = function() {
        for (var a = 0; a < this.qis.dzg.length; a++) {
            this.sdc.dzg[a] = this.qis.dzg[a]
        }
        for (var a = 0; a < this.qis.gil.length; a++) {
            this.sdc.gil[a] = this.qis.gil[a]
        }
        this.sdc.vkp = this.qis.vkp;
        this.sdc.eih = this.qis.eih;
        this.sdc.bap = this.qis.mmp;
        this.sdc.state = this.qis.qxk;
        this.xif();
        this.sdc.exj();
        this.sdc.ffh(this.qis.wqc)
    };
    this.tcl = function() {
        for (var a = 0; a < this.qis.dzg.length; a++) {
            this.sdc.dzg[a] = this.qis.dzg[a]
        }
        for (var a = 0; a < this.qis.gil.length; a++) {
            this.sdc.gil[a] = this.qis.gil[a]
        }
        this.sdc.vkp = this.qis.vkp;
        this.sdc.win = this.qis.win;
        this.sdc.eih = this.qis.eih;
        this.sdc.bap = this.qis.mmp;
        this.sdc.state = this.qis.qxk;
        if (this.sdc.win > 0) {
            this.sdc.hvq.mmd(this.qis.hkt, this.qis.zut)
        }
        this.xif();
        this.sdc.bmo();
        this.sdc.ffh(this.qis.wqc)
    };
    this.sbg = function() {
        this.sdc.vkp = this.qis.vkp;
        this.sdc.state = this.qis.qxk;
        this.xif();
        this.sdc.lja()
    };
    this.svx = function() {
        for (var a = 0; a < this.qis.dzg.length; a++) {
            this.sdc.dzg[a] = this.qis.dzg[a]
        }
        for (var a = 0; a < this.qis.gil.length; a++) {
            this.sdc.gil[a] = this.qis.gil[a]
        }
        this.sdc.vkp = this.qis.vkp;
        this.sdc.win = this.qis.win;
        this.sdc.eih = this.qis.eih;
        this.sdc.bap = this.qis.mmp;
        this.sdc.state = this.qis.qxk;
        if (this.sdc.win > 0) {
            this.sdc.hvq.mmd(this.qis.hkt, this.qis.zut)
        }
        this.xif();
        this.sdc.oft(this.qis.zut);
        this.sdc.ffh(this.qis.wqc)
    };
    this.bpq = function() {
        this.sdc.vkp = this.qis.vkp;
        this.sdc.win = this.qis.win;
        this.sdc.state = this.qis.qxk;
        this.sdc.hvq.mmd(this.qis.hkt, this.qis.zut);
        this.xif();
        this.sdc.iae();
        this.sdc.ffh(this.qis.wqc)
    };
    this.ytb = function() {
        this.sdc.vkp = this.qis.vkp;
        this.sdc.win = this.qis.win;
        this.sdc.state = this.qis.qxk;
        this.xif();
        this.sdc.qbb();
        this.sdc.ffh(this.qis.wqc)
    };
    this.jut = function() {
        this.sdc.vkp = this.qis.vkp;
        this.sdc.win = this.qis.win;
        this.sdc.state = this.qis.qxk;
        this.sdc.hvq.mmd(this.qis.hkt, this.qis.zut);
        this.xif();
        this.sdc.fln(this.qis.zut);
        this.sdc.ffh(this.qis.wqc)
    };
    this.bid = function() {
        this.sdc.vkp = this.qis.vkp;
        this.sdc.win = this.qis.win;
        this.sdc.state = this.qis.qxk;
        this.xif();
        this.sdc.mes(this.qis.kdr);
        this.sdc.ffh(this.qis.wqc)
    };
    this.tbn = function() {
        this.sdc.vkp = this.qis.vkp;
        this.sdc.win = this.qis.win;
        this.sdc.state = this.qis.qxk;
        this.sdc.hvq.mmd(this.qis.hkt, this.qis.zut);
        this.xif();
        this.sdc.dto(this.qis.kdr);
        this.sdc.ffh(this.qis.wqc)
    };
    this.xif = function() {
        this.sdc.xkq = this.qis.xkq
    }
}
sgi.prototype = new zqg;

function cin() {
    var a = this;
    this.gdv = false;
    this.eqd = null;
    this.tjx = null;
    this.fol = false;
    this.gni = -1;
    this.bmz = 0;
    this.cxe = null;
    this.cck = 800;
    this.vim = 0;
    this.ycb = null;
    this.gqo = null;
    this.cra = null;
    this.ard = null;
    this.yqo = null;
    this.lci = null;
    this.qml = null;
    this.tnw = new dho();
    this.kkf = new dho();
    this.hyj = 30;
    this.fbq = function(b, d, c) {
        cin.prototype.fbq.call(this, b, d, c);
        this.ycb = document.createElement("canvas");
        this.ycb.width = this.width;
        this.ycb.height = this.height;
        this.gqo = this.ycb.getContext("2d");
        this.lsb()
    };
    this.bih = function(c, b) {
        try {
            this.hyj = c.zvz;
            this.tnw = c.ezm;
            this.kkf = c.kvp;
            this.coa(c);
            this.rqt(c);
            this.stb(c);
            this.goa(b, false)
        } catch (d) {
            console.error(d)
        }
    };
    this.wez = function(f) {
        try {
            var c = {},
                b = this.tjx.fei("info"),
                m = this.tjx.fei("creditd"),
                l = this.tjx.fei("betd"),
                k = this.tjx.nlq("buttons");
            if (this.parent.hxx() != null) {
                c = f.aus
            } else {
                if (kit.fng.value57 === kit.ui.snp) {
                    c = f.hex
                } else {
                    if (kit.fng.value57 === kit.ui.nzg) {
                        c = f.pmy
                    } else {
                        if (kit.fng.value57 === kit.ui.aou) {
                            c = f.vql
                        }
                    }
                }
            }
            this.hyj = f.zvz;
            this.tnw = f.ezm;
            this.kkf = f.kvp;
            if (m) {
                m.wez(f.display);
                m.mya(f.boy)
            }
            if (l) {
                l.wez(f.display);
                l.mya(f.itj)
            }
            if (b) {
                b.wez(f.brk);
                b.mya(f.brk.gst)
            }
            this.tva();
            for (var d = 0, g = k.length; d < g; d++) {
                if (k[d] instanceof yxf) {
                    k[d].wez(f.tag)
                }
            }
            if (this.parent.hxx() != null) {
                this.tjx.fdt("astart", "#wez", [f.pvn]);
                if (this.parent.egj() === true) {
                    this.tjx.fdt("start", "#wez", [f.pvn])
                } else {
                    this.tjx.fdt("start", "#wez", [f.wdl])
                }
            } else {
                this.tjx.fdt("start", "#wez", [f.wdl]);
                if (kit.fng.value57 === kit.ui.snp) {
                    this.tjx.fdt("astart", "#wez", [f.wdl])
                }
            }
            this.tjx.fdt("start", "#mya", [c.ule]);
            this.tjx.fdt("astart", "#mya", [c.ckm]);
            this.tjx.fdt("bet", "#mya", [c.yqe]);
            this.tjx.fdt("gamble", "#mya", [c.zcg]);
            this.tjx.fdt("exit", "#mya", [c.scr]);
            this.tjx.fdt("lang", "#mya", [c.yxe]);
            this.tjx.fdt("setting", "#mya", [c.ill])
        } catch (j) {
            console.error(j)
        }
    };
    this.goa = function(f) {
        try {
            var k = this.tjx.fei("info"),
                c = this.tjx.nlq("displays"),
                g = this.tjx.nlq("buttons");
            this.cra = f.backgroundColor;
            this.ard = f.tww;
            this.lci = f.cls;
            this.qml = f.poj;
            if (k) {
                k.goa(f.brk)
            }
            for (var d = 0, b = g.length; d < b; d++) {
                g[d].goa(f.hpn)
            }
            for (var d = 0, b = c.length; d < b; d++) {
                c[d].goa(f.display)
            }
            this.tva()
        } catch (j) {
            console.error(j)
        }
    };
    this.fwl = function(o, n, p) {
        var m = this.tjx.nlq("buttons"),
            d = this.tjx.fei("bet"),
            b = this.tjx.fei("start"),
            k = this.tjx.fei("betd"),
            c = this.tjx.fei("creditd");
        eve = this.parent.pxa.fei("betsel"), jpe = o - this.x, hrv = n - this.y;
        for (var g = 0, l = m.length; g < l; g++) {
            var e = m[g];
            if (jpe >= e.x && jpe <= e.x + e.width && hrv >= e.y && hrv <= e.y + e.height && e.aod() == true) {
                if (e.vka() && !e.wob()) {
                    if (e === d) {
                        e.dan(true, true, false);
                        for (var f = 0; f < l; f++) {
                            m[f].awu(true, false)
                        }
                        e.ncb();
                        this.cxe = function() {
                            if (e.ncb() === true) {
                                clearInterval(a.bmz);
                                e.dan(false, true);
                                for (var i = 0; i < l; i++) {
                                    m[i].awu(false)
                                }
                            }
                        };
                        this.bmz = setInterval(this.cxe, e.nhl)
                    } else {
                        if (e === b && b.ncb === this.vep) {
                            e.dan(true, true, false)
                        } else {
                            e.dan(true, true)
                        }
                        e.ncb();
                        for (var f = 0; f < l; f++) {
                            m[f].awu(true)
                        }
                    }
                    return true
                }
            }
        }
        if (d && d.vka() && !d.wob()) {
            if (k && jpe >= k.x && jpe <= k.x + k.width && hrv >= k.y && hrv <= k.y + k.height) {
                if (!p) {
                    if (eve && eve.vka()) {
                        this.parent.afp()
                    }
                    return true
                }
            } else {
                if (c && jpe >= c.x && jpe <= c.x + c.width && hrv >= c.y && hrv <= c.y + c.height) {
                    if (!p) {
                        this.parent.zun()
                    }
                    return true
                }
            }
        }
        return false
    };
    this.qua = function() {
        var f = this.tjx.nlq("buttons"),
            k = this.tjx.fei("bet"),
            g = this.tjx.fei("start");
        for (var d = 0, b = f.length; d < b; d++) {
            var e = f[d];
            if (e.gqn() === true) {
                e.dan(false, true);
                if (e === k) {
                    clearInterval(this.bmz);
                    for (var c = 0; c < b; c++) {
                        f[c].awu(false)
                    }
                } else {
                    if (e === g && g.ncb === this.vep) {
                        clearTimeout(this.vim);
                        a.parent.qug.qyk("auto_fill");
                        this.tjx.fdt("start", "#kqv")
                    }
                }
                return true
            }
        }
        return false
    };
    this.xba = function(g) {
        var f = this.tjx.nlq("buttons"),
            k = this.tjx.fei("bet");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (g == d.uvs) {
                if (d.vka() && !d.wob()) {
                    d.dan(true, true);
                    d.ncb();
                    for (var c = 0; c < b; c++) {
                        f[c].awu(true)
                    }
                }
                return true
            }
        }
        if (g == this.parent.mum.uvf.bgt) {
            if (k && k.vka() && !k.wob()) {
                this.parent.ovg();
                for (var c = 0, b = f.length; c < b; c++) {
                    f[c].awu(true)
                }
            }
            return true
        }
        return false
    };
    this.hrl = function() {
        var e = this.tjx.nlq("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.gqn() == true) {
                c.dan(false, true);
                return true
            }
        }
        return false
    };
    this.tfd = function(l, k, m) {
        var j = this.tjx.nlq("buttons"),
            c = this.tjx.fei("bet");
        if (l != null && k != null) {
            var e = l - this.x;
            var d = k - this.y;
            for (var f = 0, g = j.length; f < g; f++) {
                var b = j[f];
                if (e >= b.x && e <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.aod() && b.vka() && !b.wob()) {
                    return b.ncb
                }
            }
        } else {
            if (m != null) {
                for (var f = 0, g = j.length; f < g; f++) {
                    var b = j[f];
                    if (m == b.uvs && b.aod() && b.vka() && !b.wob()) {
                        return b.ncb
                    }
                }
                if (m == this.parent.mum.uvf.bgt && c && c.aod() && c.vka() && !c.wob()) {
                    return this.parent.ovg
                }
            }
        }
        return null
    };
    this.lsb = function() {
        this.tjx = new itm();
        this.tjx.fbq();
        this.tjx.kbh("displays");
        this.tjx.kbh("buttons");
        this.tjx.kbh("allbuttons");
        this.tjx.kbh("infos");
        this.tjx.kbh("start");
        this.tjx.kbh("collect");
        this.tjx.kbh("game");
        this.tjx.kbh("hold");
        this.tjx.kbh("settings")
    };
    this.stb = function(b) {
        var c = this.dkw(b.brk.gst);
        c.wez(b.brk);
        this.tjx.dcj("info", c, ["infos"])
    };
    this.coa = function(c) {
        var b = {};
        if (this.parent.hxx() != null) {
            b = c.aus
        } else {
            if (kit.fng.value57 === kit.ui.snp) {
                b = c.hex
            } else {
                if (kit.fng.value57 === kit.ui.nzg) {
                    b = c.pmy
                } else {
                    if (kit.fng.value57 === kit.ui.aou) {
                        b = c.vql
                    }
                }
            }
        }
        if (this.parent.hxx() != null) {
            this.tjx.dcj("astart", this.cug(b.ckm, this.parent.language.nik, "---", this.parent.qug.uyv("btn_s"), this.parent.cht, (!this.parent.rka) ? this.parent.mum.rcy : null, c.pvn), ["buttons", "allbuttons", "start", "collect", "hold"]);
            if (this.parent.egj() === true) {
                this.tjx.dcj("start", this.cug(b.ule, (this.parent.ekl.xbh === false) ? this.parent.language.start : null, "---", (this.parent.ekl.xbh === false) ? this.parent.qug.uyv("btn") : this.parent.qug.uyv("btn_dl"), (this.parent.egj() === true) ? this.vep : this.parent.agg, (!this.parent.rka) ? this.parent.mum.start : null, c.pvn), ["buttons", "allbuttons", "start", "collect", "hold"])
            } else {
                this.tjx.dcj("start", this.nvt(b.ule, (this.parent.ekl.xbh === false) ? this.parent.language.start : null, (this.parent.ekl.xbh === false) ? this.parent.qug.uyv("btn") : this.parent.qug.uyv("btn_dl"), (this.parent.egj() === true) ? this.vep : this.parent.agg, (!this.parent.rka) ? this.parent.mum.start : null, c.wdl), ["buttons", "allbuttons", "start", "collect", "hold"])
            }
        } else {
            this.tjx.dcj("start", this.nvt(b.ule, (this.parent.ekl.xbh === false) ? this.parent.language.start : null, (this.parent.ekl.xbh === false) ? this.parent.qug.uyv("btn") : this.parent.qug.uyv("btn_dl"), (this.parent.egj() === true) ? this.vep : this.parent.agg, (!this.parent.rka) ? this.parent.mum.start : null, c.wdl), ["buttons", "allbuttons", "start", "collect", "hold"]);
            this.tjx.dcj("astart", this.nvt(b.ckm, this.parent.language.rcy, (kit.fng.value57 === kit.ui.snp) ? this.parent.qug.uyv("btn") : this.parent.qug.uyv("btn_s"), this.parent.cht, (!this.parent.rka) ? this.parent.mum.rcy : null, c.tag), ["buttons", "allbuttons", "start", "collect", "game", "hold"])
        }
        this.tjx.dcj("bet", this.nvt(b.yqe, this.parent.language.vzf, this.parent.qug.uyv("btn_s"), this.parent.pxy, (!this.parent.rka) ? this.parent.mum.chp : null, c.tag), ["buttons", "allbuttons"]);
        this.tjx.fei("bet").nhl = 300;
        this.tjx.dcj("gamble", this.nvt(b.zcg, this.parent.language.cwc, this.parent.qug.uyv("btn_s"), this.parent.huf, (!this.parent.rka) ? this.parent.mum.cwc : null, c.tag), ["buttons", "allbuttons", "start", "game", "collect", "hold"]);
        if (this.parent.hxx() != null) {
            this.tjx.dcj("exit", this.nvt(b.scr, (this.parent.ekl.xbh === true) ? null : (kit.fng.value50.g === true) ? this.parent.language.quj : this.parent.language.lvw, (this.parent.ekl.xbh === false) ? this.parent.qug.uyv("btn_s") : this.parent.qug.uyv("btn_e"), this.parent.gqm, (!this.parent.rka) ? this.parent.mum.yzm : null, c.tag), ["buttons", "allbuttons", "collect"])
        } else {
            if (kit.fng.value57 !== kit.ui.aou) {
                this.tjx.dcj("exit", this.nvt(b.scr, (this.parent.ekl.xbh === true) ? null : (kit.fng.value50.g === true) ? this.parent.language.quj : this.parent.language.lvw, (this.parent.ekl.xbh === false) ? this.parent.qug.uyv("btn_s") : this.parent.qug.uyv("btn_e"), this.parent.gqm, (!this.parent.rka) ? this.parent.mum.yzm : null, c.tag), ["buttons", "allbuttons", "collect"])
            }
            if (kit.fng.value57 !== kit.ui.snp && this.parent.hxx() == null) {
                this.tjx.dcj("lang", this.kdk(b.yxe, this.parent.fbe(sessionStorage.sessionValue1), this.parent.wmg, (!this.parent.rka) ? this.parent.mum.language : null), ["buttons", "allbuttons", "hold"])
            }
        }
        this.tjx.dcj("setting", this.nvt(b.ill, null, (this.parent.ekl.xbh === true) ? this.parent.qug.uyv("btn_m") : this.parent.qug.uyv("btn_s"), this.parent.znv, null, c.tag), ["buttons", "settings"])
    };
    this.rqt = function(c) {
        var b = this.parent.qug.uyv("display_effect");
        this.tjx.dcj("creditd", this.qcw(c.boy, (this.parent.rqg()) ? this.parent.language.gvb : this.parent.language.vkp, this.parent.ybn(this.parent.vkp), b, c.display), ["displays"]);
        this.tjx.dcj("betd", this.qcw(c.itj, this.parent.language.vzf, this.parent.ybn(this.parent.totalBet), b, c.display), ["displays"])
    };
    this.jsx = function() {
        if (this.gni == 1) {
            this.zdr(this.fol)
        } else {
            if (this.gni == 2) {
                this.qyu(this.fol)
            } else {
                if (this.gni == 3) {
                    this.avg(this.fol)
                } else {
                    if (this.gni == 4) {
                        this.lvf(this.fol)
                    } else {
                        if (this.gni == 5) {
                            this.aws(this.fol)
                        } else {
                            if (this.gni == 6) {
                                this.vxl(this.fol)
                            }
                        }
                    }
                }
            }
        }
    };
    this.zdr = function(d) {
        var c = this.tjx.nlq("allbuttons"),
            e = 0,
            b = 0;
        this.fol = d;
        this.gni = 1;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].vba(d)
        }
    };
    this.qyu = function(d) {
        var c = this.tjx.nlq("allbuttons"),
            f = this.tjx.nlq("start"),
            e = 0,
            b = 0;
        this.fol = d;
        this.gni = 2;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].vba(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].vba(d)
        }
    };
    this.avg = function(d) {
        var c = this.tjx.nlq("allbuttons"),
            f = this.tjx.nlq("game"),
            e = 0,
            b = 0;
        this.fol = d;
        this.gni = 3;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].vba(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].vba(d)
        }
    };
    this.lvf = function(d) {
        var c = this.tjx.nlq("allbuttons"),
            f = this.tjx.nlq("hold"),
            e = 0,
            b = 0;
        this.fol = d;
        this.gni = 4;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].vba(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].vba(d)
        }
    };
    this.aws = function(d) {
        var c = this.tjx.nlq("allbuttons"),
            f = (this.gdv === true) ? this.tjx.nlq("collect") : this.tjx.nlq("start"),
            e = 0,
            b = 0;
        this.fol = d;
        this.gni = 5;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].vba(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].vba(d)
        }
    };
    this.vxl = function(e) {
        var c = this.tjx.nlq("allbuttons"),
            d = this.tjx.nlq("settings"),
            f = 0,
            b = 0;
        this.fol = e;
        this.gni = 6;
        for (f = 0, b = c.length; f < b; f++) {
            c[f].vba(false)
        }
        for (f = 0, b = d.length; f < b; f++) {
            d[f].vba(e)
        }
    };
    this.qcw = function(c, g, f, e, b) {
        var d = new pjz();
        d.fbq(c, this.context2D, null, g, f);
        d.parent = this;
        d.bqe = e;
        d.wez(b);
        return d
    };
    this.nvt = function(e, i, g, f, c, d) {
        var b = new yxf();
        b.fbq(e, this.context2D, null, g, null, i);
        b.parent = this;
        b.ncb = f;
        b.wez(d);
        if (c) {
            b.uvs = c.bgt
        }
        return b
    };
    this.cug = function(e, j, g, i, f, c, d) {
        var b = new yxf();
        b.fbq(e, this.context2D, null, i, null, j);
        b.parent = this;
        b.ncb = f;
        b.value = g;
        b.wez(d);
        if (c) {
            b.uvs = c.bgt
        }
        return b
    };
    this.kdk = function(d, f, e, c) {
        var b = new qyr();
        b.fbq(d, this.context2D, null, f, null);
        b.parent = this;
        b.ncb = e;
        if (c) {
            b.uvs = c.bgt
        }
        return b
    };
    this.dkw = function(b) {
        var c = new fnr();
        c.fbq(b, this.context2D);
        c.parent = this;
        return c
    };
    this.vxq = function(c, b) {
        var d = this.tjx.fei("info");
        if (d) {
            d.xzh(b);
            d.qaz(c, b)
        }
    };
    this.stop = function() {
        clearInterval(this.bmz)
    };
    this.tva = function() {
        var b = this.gqo;
        b.save();
        if (this.cra != null) {
            var d = b.createLinearGradient(this.tnw.x, this.tnw.y, this.tnw.x, this.tnw.y + this.tnw.height);
            d.addColorStop(0, this.cra);
            b.fillStyle = d;
            b.fillRect(this.tnw.x, this.tnw.y, this.tnw.width, this.tnw.height)
        }
        if (this.ard != null) {
            var d = b.createLinearGradient(this.tnw.x, this.tnw.y, this.tnw.x, this.tnw.y + this.hyj);
            d.addColorStop(0, this.ard);
            d.addColorStop(1, this.cra);
            b.fillStyle = d;
            b.fillRect(this.tnw.x, this.tnw.y, this.tnw.width, this.hyj)
        }
        if (this.eqd != null) {
            b.drawImage(this.eqd, this.tnw.x, this.tnw.y, this.tnw.width, this.tnw.height)
        }
        if (this.kkf && this.kkf.width > 0 && this.kkf.height > 0) {
            var d = b.createLinearGradient(this.kkf.x, this.kkf.y, this.kkf.x + this.kkf.width, this.kkf.y),
                c = this.parent.qug.uyv("btn_back");
            d.addColorStop(0.2, this.lci);
            d.addColorStop(1, this.qml);
            b.fillStyle = d;
            if (this.parent.ily === kit.ekl.xtd) {
                b.fillRect(this.kkf.x, this.kkf.y, this.kkf.width, this.kkf.height);
                if (c) {
                    b.drawImage(c, this.kkf.x, this.kkf.y, this.kkf.width, this.kkf.height)
                }
            } else {
                if (this.parent.ily === kit.ekl.hai) {
                    b.save();
                    b.translate(this.kkf.width / 2, this.kkf.height / 2);
                    b.rotate(Math.PI);
                    b.translate(-this.kkf.width / 2, -this.kkf.height / 2);
                    b.fillRect(this.kkf.x, this.kkf.y, this.kkf.width, this.kkf.height);
                    if (c) {
                        b.drawImage(c, this.kkf.x, this.kkf.y, this.kkf.width, this.kkf.height)
                    }
                    b.restore()
                }
            }
        }
        b.restore()
    };
    this.xgz = function(k, g, l, e) {
        if (!this.aod() || !this.parent.avk()) {
            return
        }
        var c = (k != null && g != null && l != null && e != null),
            j = (c === true) ? new dho(k, g, l, e) : new dho(this.x, this.y, this.width, this.height),
            m = this.context2D,
            b = this.tjx.jfj();
        m.save();
        if (c) {
            m.beginPath();
            m.rect(k, g, l, e);
            m.closePath();
            m.clip()
        }
        if (this.ycb != null) {
            m.drawImage(this.ycb, 0, 0)
        }
        for (var d = 0, f = b.length; d < f; d++) {
            b[d].xgz()
        }
        if (this.parent.nmd === true && this.parent.egj() === false) {
            this.parent.esk(m, j)
        }
        m.restore();
        if (this.evc && this.hlo) {
            if (c) {
                this.evc.drawImage(this.hlo, k, g, l, e, this.x + k, this.y + g, l, e)
            } else {
                this.evc.drawImage(this.hlo, this.x, this.y)
            }
        }
    };
    this.vep = function() {
        if (a.parent.rcy === true) {
            a.parent.cht()
        } else {
            a.parent.agg();
            if (a.parent.tvp() === true) {
                a.parent.qug.eze("auto_fill");
                a.tjx.fdt("start", "#zsd", [a.cck]);
                a.vim = setTimeout(a.ibj, a.cck)
            }
        }
    };
    this.ibj = function() {
        a.parent.cht();
        a.tjx.fdt("start", "#prg")
    }
}
cin.prototype = new noe;

function yxd() {
    this.bqe = null;
    this.ilj = [];
    this.rre = [];
    this.ffw = [];
    this.bnn = "arial";
    this.yxa = "bold";
    this.usi = "yellow";
    this.phy = 30;
    this.qfg = 6;
    this.goa = function(a) {
        try {
            this.bnn = a.font;
            this.yxa = a.gas;
            this.usi = a.lkk
        } catch (b) {
            console.error(b)
        }
    };
    this.wez = function(a) {
        try {
            this.phy = a.fontSize;
            this.qfg = a.slk
        } catch (b) {
            console.error(b)
        }
    };
    this.kwr = function(c) {
        for (var b = 0, a = c.length; b < a; b++) {
            this.ffw[b] = c[a - 1 - b]
        }
    };
    this.arq = function(c) {
        for (var b = 0, a = c.length; b < a; b++) {
            this.rre[b] = c[a - 1 - b];
            this.ilj[b] = c[a - 1 - b]
        }
    };
    this.ovk = function(c) {
        for (var b = 0, a = this.rre.length; b < a; b++) {
            this.ilj[b] = this.rre[b] * c
        }
        this.xgz()
    };
    this.xgz = function() {
        if (!this.aod() || !this.parent.avk()) {
            return
        }
        var b = this.context2D,
            g = this.height - 2 * this.qfg,
            c = this.width,
            d = Math.round(g / this.ffw.length),
            f = (this.phy < d) ? this.phy : d - 2;
        b.save();
        if (this.bqe != null) {
            b.drawImage(this.bqe, 0, 0)
        }
        for (var e = 0, a = this.ffw.length; e < a; e++) {
            kit.vcj.enf(b, this.ffw[e], this.usi, 0, this.qfg + d * (e), c, f, this.bnn, f, this.yxa, this.qfg)
        }
        for (var e = 0, a = this.ilj.length; e < a; e++) {
            kit.vcj.cxi(b, this.parent.ywx(this.ilj[e]), this.usi, 0, this.qfg + d * (e), c, f, this.bnn, f, this.yxa, this.qfg)
        }
        b.restore();
        if (this.evc && this.hlo) {
            this.evc.drawImage(this.hlo, this.x, this.y)
        }
    }
}
yxd.prototype = new noe;

function rzc() {
    var a = this;
    this.ivp = 0;
    this.xhk = 1;
    this.adg = 7;
    this.hiv = 0;
    this.dit = 0;
    this.nmt = 0;
    this.usw = 0;
    this.iwn = this.ivp;
    this.uws = this.jeb;
    this.fec = function() {
        this.dwr(true);
        this.twb = true;
        this.fol = false;
        this.iwn = this.ivp;
        this.dit = Math.floor(this.width / this.adg);
        this.usw = 0;
        this.nmt = 0
    };
    this.oqe = function() {
        this.twb = true;
        this.fol = false;
        this.iwn = this.xhk;
        this.dit = -Math.floor(this.width / this.adg);
        this.usw = 1;
        this.nmt = this.width
    };
    this.lif = function() {
        if (a.usw < a.adg) {
            a.nmt += a.dit;
            a.usw++;
            return true
        } else {
            a.twb = false;
            a.fol = true;
            if (a.iwn == a.xhk) {
                a.dwr(false)
            }
            return false
        }
    };
    this.eze = function() {
        if (this.yas == this.eit) {
            this.parent.qug.eze("maxstep")
        } else {
            this.parent.qug.eze("step" + (this.yas % 12))
        }
    };
    this.ugg = function() {
        a.ssb = false
    };
    this.xgz = function() {
        if (!this.aod() || !this.parent.avk()) {
            return
        }
        this.pnz();
        if (this.evc && this.hlo) {
            if (this.twb) {
                if (this.nmt > 0) {
                    if (this.uws == this.gmy) {
                        this.evc.drawImage(this.hlo, this.width - this.nmt, 0, this.nmt, this.height, this.x, this.y, this.nmt, this.height)
                    } else {
                        if (this.uws == this.jeb) {
                            this.evc.drawImage(this.hlo, 0, 0, this.nmt, this.height, this.x + this.width - this.nmt, this.y, this.nmt, this.height)
                        }
                    }
                }
            } else {
                this.evc.drawImage(this.hlo, this.x, this.y)
            }
        }
    };
    this.ugc = function(c) {
        var f = this.usi,
            e = this.usi,
            b = 0,
            d = 0;
        if (this.uws == this.jeb) {
            b = this.vle;
            d = this.bqg.x - 2 * this.vle
        } else {
            if (this.uws == this.gmy) {
                b = this.bqg.x + this.bqg.width + this.vle;
                d = this.width - this.vle - (this.bqg.x + this.bqg.width + this.vle)
            }
        }
        if (this.yas > 0 && this.yas < this.nfr.length - 1) {
            kit.vcj.zrw(c, b, this.bqg.y + ((this.tzj - this.pxg) * this.afi), d, this.afi, this.pks, this.bxe);
            kit.vcj.cxi(c, this.parent.ywx(this.nfr[this.yas]), this.qje, b, this.bqg.y + ((this.tzj - this.pxg) * this.afi) + (this.afi - this.phy) / 2, d, this.phy, this.bnn, this.phy, this.yxa, this.vle)
        } else {
            if (this.yas == 0) {
                f = this.qje
            } else {
                if (this.yas == this.nfr.length - 1) {
                    e = this.qje
                }
            }
        }
        kit.vcj.zrw(c, b, this.bqg.y + (this.afi * (this.tzj - 1)), d, this.afi, this.pks, this.bxe);
        kit.vcj.cxi(c, this.parent.ywx(this.nfr[0]), f, b, this.bqg.y + (this.afi * (this.tzj - 1)) + (this.afi - this.phy) / 2, d, this.phy, this.bnn, this.phy, this.yxa, this.vle);
        kit.vcj.zrw(c, b, this.bqg.y, d, this.afi, this.pks, this.bxe);
        kit.vcj.cxi(c, this.parent.ywx(this.nfr[this.nfr.length - 1]), e, b, this.bqg.y + (this.afi - this.phy) / 2, d, this.phy, this.bnn, this.phy, this.yxa, this.vle);
        kit.vcj.bom(c, "+", this.usi, this.jyw.x, this.jyw.y, this.jyw.width, this.jyw.height, this.bnn, this.phy, this.yxa);
        kit.vcj.bom(c, "", this.usi, this.vty.x, this.vty.y, this.vty.width, this.vty.height, this.bnn, this.phy, this.yxa);
        if (this.vwd) {
            kit.vcj.bom(c, this.vwd, this.usi, this.jma.x, this.jma.y, this.jma.width, this.jma.height, this.bnn, this.phy, this.yxa)
        }
    }
}
rzc.prototype = new kcf;

function wtk() {
    this.bqe = null;
    this.fmy = [];
    this.fol = false;
    this.ilj = false;
    this.qyi = false;
    this.kko = false;
    this.npr = true;
    this.ktg = -1;
    this.xec = null;
    this.ycb = null;
    this.gqo = null;
    this.bnn = "arial";
    this.yxa = "bold";
    this.zgt = "yellow";
    this.xgb = "yellow";
    this.usi = "yellow";
    this.phy = 18;
    this.ozm = 0;
    this.yuz = 0;
    this.ykj = 20;
    this.ubp = 0;
    this.goa = function(a) {
        try {
            this.bnn = a.font;
            this.yxa = a.gas;
            this.zgt = a.aiv;
            this.xgb = a.sac;
            this.usi = a.lkk
        } catch (b) {
            console.error(b)
        }
    };
    this.wez = function(a) {
        try {
            this.phy = a.fontSize;
            this.ozm = a.xpx;
            this.yuz = a.zqu;
            this.ykj = a.kjb;
            this.ubp = a.cnl;
            this.npr = a.jct
        } catch (b) {
            console.error(b)
        }
    };
    this.fwl = function(a, b) {
        if (a >= this.x && a <= this.x + this.width && b >= this.y && b <= this.y + this.height && this.aod() === true) {
            if (this.vka() === true) {
                this.parent.gnx(this.qyi);
                this.dan();
                if (this.qyi) {
                    this.parent.qug.eze("hold")
                } else {
                    this.parent.qug.eze("unhold")
                }
                return true
            }
        }
        return false
    };
    this.qua = function() {};
    this.xba = function() {};
    this.hrl = function() {};
    this.vba = function(a) {
        this.fol = a
    };
    this.vka = function() {
        return this.fol
    };
    this.jzm = function(a) {
        if (this.ycb == null) {
            this.ycb = document.createElement("canvas");
            this.ycb.width = this.width;
            this.ycb.height = this.height;
            this.gqo = this.ycb.getContext("2d");
            this.gqo.save();
            this.gqo.drawImage(a, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height);
            this.gqo.restore()
        }
    };
    this.dan = function() {
        this.qyi = !this.qyi;
        if (this.qyi) {
            this.xec = this.parent.language.pco;
            this.usi = this.zgt
        }
        this.xgz()
    };
    this.fvx = function(d, e) {
        var a = 0,
            c = false;
        if (d == this.parent.wsn) {
            this.ktg = d;
            c = true
        } else {
            if ((a = this.parent.kno.length) > 0) {
                for (var b = 0; b < a && !c; b++) {
                    if (d == this.parent.kno[b]) {
                        this.ktg = this.parent.tve[b];
                        c = true
                    }
                }
            }
        }
        if (!c) {
            this.ktg = d
        }
        if (e && e === true) {
            this.xgz()
        }
    };
    this.sxs = function(a, b) {
        this.qyi = a;
        if (this.qyi) {
            this.xec = this.parent.language.pco;
            this.usi = this.zgt
        }
        if (b && b === true) {
            this.xgz()
        }
    };
    this.tom = function() {
        return this.qyi
    };
    this.vbs = function(a, b) {
        this.ilj = a;
        if (this.ilj) {
            this.xec = this.parent.language.win;
            this.usi = this.xgb
        }
        if (b && b === true) {
            this.xgz()
        }
    };
    this.xsv = function() {
        return this.ilj
    };
    this.oia = function(c, b, a, d) {
        this.kko = c;
        this.xec = b;
        if (a) {
            this.usi = a
        }
        if (d && d === true) {
            this.xgz()
        }
    };
    this.lox = function() {
        return this.kko
    };
    this.xgz = function() {
        if (!this.aod() || !this.parent.avk()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.beginPath();
        a.rect(this.x, this.y, this.width, this.height);
        a.closePath();
        a.clip();
        if (this.ycb != null) {
            a.drawImage(this.ycb, this.x, this.y)
        }
        if (this.bqe != null) {
            if (this.qyi || this.ilj) {
                if (this.npr) {
                    a.drawImage(this.bqe, this.fmy[this.ktg] * this.ozm, 0, this.ozm, this.yuz, this.x, this.y + this.ykj, this.ozm, this.yuz)
                } else {
                    a.drawImage(this.bqe, this.fmy[this.ktg] * this.ozm, 0, this.ozm, this.yuz, this.x, this.y, this.ozm, this.yuz)
                }
            } else {
                a.drawImage(this.bqe, this.fmy[this.ktg] * this.ozm, 0, this.ozm, this.yuz, this.x, this.y + this.ubp, this.ozm, this.yuz)
            }
        }
        if (this.qyi || this.ilj || this.kko) {
            b = this.xec
        }
        if (b != null) {
            if (this.npr) {
                kit.vcj.bom(a, b, this.usi, this.x, this.y, this.width, this.ykj, this.bnn, this.phy, this.yxa)
            } else {
                kit.vcj.bom(a, b, this.usi, this.x, this.y + this.yuz, this.width, this.ykj, this.bnn, this.phy, this.yxa)
            }
        }
        a.restore()
    }
}
wtk.prototype = new noe;
kit.rhw = {
    mzb: {
        xej: 0,
        lqj: 1,
        zqp: 2,
        cwl: 3,
        iwo: 4,
        fxz: 5,
        zlk: 6,
        obd: 7,
        zsb: 8,
        dco: 9,
        yxu: 10,
        zyo: 11,
        dzy: 12,
        qbz: 13,
        uoo: 14,
        egv: 15,
        rfc: 68
    }
};

function mtg() {
    this.gld = false;
    this.goo = null;
    this.cmb = null;
    this.qjq = null;
    this.llr = null;
    this.kig = null;
    this.upm = [];
    this.xpj = null;
    this.lim = null;
    this.win = 0;
    this.pak = 0;
    this.bkh = 0;
    this.totalBet = 1000;
    this.iaz = [];
    this.wlc = 0;
    this.zjw = 0;
    this.vkp = 0;
    this.xnj = [];
    this.vda = [];
    this.fmy = [];
    this.wsn = 63;
    this.eih = -1;
    this.cpc = -1;
    this.dzg = [];
    this.gil = [];
    this.xjx = 0;
    this.dzu = null;
    this.ztu = null;
    this.jib = null;
    this.hvq = null;
    this.gif = null;
    this.hyk = false;
    this.cwc = false;
    this.guu = false;
    this.rtw = false;
    this.nmd = false;
    this.dmj = true;
    this.rcy = false;
    this.pds = 1;
    this.gpj = 0;
    this.axw = 150;
    this.azn = 150;
    this.uvo = 200;
    this.wxu = 120;
    this.zpr = 0;
    this.kno = [];
    this.tve = [];
    this.nwj = true;
    this.gov = true;
    this.cuu = false;
    this.gkt = 0;
    this.iof = 0;
    this.egl = 50;
    this.itx = 100;
    this.soa = false;
    this.dup = 0;
    this.foo = 0;
    this.ruy = false;
    this.fkm = 0;
    this.fuy = 0;
    this.gox = 2;
    this.yrp = 1;
    this.qcv = false;
    this.bap = 0;
    this.fxr = 0;
    this.bvj = false;
    this.ogy = 0;
    this.ati = 0;
    this.lds = 0;
    this.vuj = -1;
    this.cwu = 0;
    this.yni = 0;
    this.vdr = 0;
    this.kaj = true;
    this.xjg = false;
    this.nxj = false;
    this.kye = false;
    this.lmj = true;
    this.neo = null;
    this.jxh = false;
    this.gdv = true;
    this.xkq = "";
    this.ckp = 0;
    this.tbd = 0;
    this.mxt = 0;
    this.ipv = 0;
    this.wge = function() {
        var a = new vwj();
        a.fbq();
        return a
    };
    this.ffd = function() {
        this.mum = new qrz()
    };
    this.pfc = function() {
        while (this.bkh < this.znn()) {
            this.bkh++
        }
        var b = this.jsq(this.bvj);
        if (this.bkh > b) {
            var a = (b < 0) ? 0 : b;
            this.bkh = a
        }
        this.totalBet = this.iaz[this.bkh];
        this.vrp();
        this.nro();
        this.vgb();
        this.zzz()
    };
    this.amv = function() {
        this.baw();
        this.mtr();
        this.nia();
        this.qhy();
        if (this.ekl.vbf) {
            this.qgh()
        }
        if (this.ekl.oqk) {
            this.avm()
        }
        if (this.ekl.pze) {
            this.jus();
            if (!this.ekl.aui) {
                this.ppf()
            }
        }
        if (this.rka) {
            this.yjs()
        } else {
            if (this.ekl.mjy) {
                this.jaj()
            }
            this.zxn();
            if (this.hui()) {
                this.xtt()
            }
            if (this.hxx() != null && !this.egj()) {
                this.qfz(this.hxx())
            }
        }
        if (!(this.rka && !this.lsh)) {
            this.nrb();
            this.sqf()
        }
        if (this.ekl.aui) {
            this.mhu(this.hxx())
        }
        this.emw()
    };
    this.qpj = function() {
        if (!this.xdp) {
            if (this.gvo === false) {
                this.eym.style.marginTop = (-this.height / 2 + this.bog()) + "px";
                this.eym.style.marginLeft = (-this.width / 2) + "px"
            } else {
                this.eym.style.left = "0px";
                this.eym.style.top = "0px";
                this.eym.style.marginTop = ((this.zki - this.height) / 2 + this.bog()) + "px";
                this.eym.style.marginLeft = ((this.mxr - this.width) / 2) + "px"
            }
            this.eym.style.width = (this.width > this.mxr) ? this.mxr + "px" : this.width + "px";
            this.eym.style.height = (this.height > this.zki) ? this.zki + "px" : this.height + "px";
            this.canvas.width = Math.round(this.width);
            this.canvas.height = Math.round(this.height);
            this.context2D = this.canvas.getContext("2d");
            if (this.vhl) {
                this.vhl.style.width = this.width + "px";
                this.vhl.style.height = this.height + "px"
            }
            this.offsetLeft = this.eym.offsetLeft;
            this.offsetTop = this.eym.offsetTop;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.xdp = true
        }
    };
    this.emw = function() {};
    this.jus = function() {
        mtg.prototype.jus.call(this);
        var a = this.pxa.fei("topi");
        try {
            if (a) {
                if (kit.fng.value57 === kit.ui.snp || this.hxx() != null) {
                    a.mul("language", this.qug.uyv("icon_l"), sessionStorage.sessionValue1, [kit.language.EN, kit.language.DE, kit.language.RU, kit.language.EE, kit.language.ES, kit.language.TR, kit.language.CZ, kit.language.GR, kit.language.AT, kit.language.US, kit.language.BG, kit.language.CO, kit.language.MX, kit.language.CL, kit.language.VE, kit.language.BR, kit.language.GE, kit.language.HU, kit.language.RO, kit.language.PT, kit.language.FR, kit.language.HR, kit.language.IT, kit.language.SE])
                }
                if (this.egj() === false) {
                    a.ptz("help", new String("?"), true)
                }
                if (kit.fng.value27 && this.tff) {
                    a.mul("audio", this.qug.uyv("icon_a"), this.gsv[this.znd], this.gsv)
                }
                if (sessionStorage.sessionValue14 == "true" && kit.vcj.meu()) {
                    a.ptz("fullscreen", this.qug.uyv("icon_f"), this.shj)
                }
                if (kit.fng.value28 && this.kaj) {
                    a.ptz("turbo", this.qug.uyv("icon_t"), this.xjg)
                }
                a.ptz("auto", this.qug.uyv("icon_as"), this.rcy);
                a.ptz("gamble", this.qug.uyv("icon_g"), this.cwc)
            }
        } catch (b) {
            console.error(b)
        }
    };
    this.ppf = function() {
        mtg.prototype.ppf.call(this);
        var b = this.pxa.fei("topb");
        try {
            if (b) {
                if (kit.fng.value5.length > 1 && (kit.fng.value57 === kit.ui.snp || this.hxx() != null)) {
                    b.vgj("language", this.language.language, this.fbe(kit.fng.value5[this.pfm]), this.wmg, this.mum.language, 0, 1)
                }
                if (kit.fng.value27 && this.tff) {
                    b.vgj("audio", this.language.audio, this.qug.uyv("btn_a"), this.xad, this.mum.audio, this.znd, this.gsv.length)
                }
                if (sessionStorage.sessionValue14 == "true" && kit.vcj.meu()) {
                    b.vgj("fullscreen", this.language.shj, this.qug.uyv("btn_f"), (kit.vcj.vzn) ? this.oup : this.vdm, this.mum.shj, (this.shj) ? 1 : 0, 2)
                }
                if (kit.fng.value28 && this.kaj) {
                    b.vgj("turbo", this.language.xjg, this.qug.uyv("btn_t"), this.jme, this.mum.xjg, (this.xjg) ? 1 : 0, 2)
                }
                b.nfp("help", this.language.acc, this.qug.uyv("btn_p"), this.onl, this.mum.lia);
                if (kit.fng.value12 && !this.rqg()) {
                    b.nfp("history", this.language.kaq, this.qug.uyv("btn_h"), this.uvx, this.mum.kaq)
                }
                if (kit.fng.value36 && !this.rqg()) {
                    b.nfp("statistic", this.language.zrz, this.qug.uyv("btn_st"), this.hcz, this.mum.zrz)
                }
                b.qeb()
            }
        } catch (a) {
            console.error(a)
        }
    };
    this.mhu = function(a) {
        mtg.prototype.mhu.call(this, a);
        var b = this.pxa.fei("settings"),
            c = "";
        if (b) {
            b.vgj("language", this.language.language, this.fbe(kit.fng.value5[this.pfm]), this.wmg, 0, 1);
            if (kit.fng.value27 && this.tff) {
                b.vgj("audio", this.language.audio, this.qug.uyv("btn_a"), this.xad, this.znd, this.gsv.length)
            }
            if (sessionStorage.sessionValue14 == "true" && kit.vcj.meu()) {
                b.vgj("fullscreen", this.language.shj, this.qug.uyv("btn_f"), this.oup, (this.shj) ? 1 : 0, 2)
            }
            if (kit.fng.value28 && this.kaj) {
                b.vgj("turbo", this.language.xjg, this.qug.uyv("btn_t"), this.jme, (this.xjg) ? 1 : 0, 2)
            }
            b.vgj("gamble", this.language.cwc, this.qug.uyv("btn_g"), this.huf, (this.cwc) ? 1 : 0, 2);
            if (this.qrb[this.kus] === kit.mwi.jeb) {
                c = this.language.left
            } else {
                if (this.qrb[this.kus] === kit.mwi.gmy) {
                    c = this.language.daj
                } else {
                    if (this.qrb[this.kus] === kit.mwi.vtt) {
                        c = this.language.cod
                    }
                }
            }
            b.vgj("adjustment", c, this.qug.uyv("btn_l"), this.dwv, (this.ily === kit.vcj.vcq) ? 0 : 1, 2);
            b.gtq("help", this.language.zje, this.qug.uyv("btn_p"), this.onl);
            if (kit.fng.value12 && !this.rqg()) {
                b.gtq("history", this.language.kaq, this.qug.uyv("btn_h"), this.uvx)
            }
            if (kit.fng.value36 && !this.rqg()) {
                b.gtq("statistic", this.language.zrz, this.qug.uyv("btn_st"), this.hcz)
            }
            b.emj = false;
            b.bih(this.ekl.odc);
            b.wez(this.ekl.odc);
            b.goa(this.style.odc);
            b.jfd(this.language, false)
        }
    };
    this.baw = function() {
        this.xpj = new cin();
        this.xpj.parent = this;
        this.xpj.gdv = this.gdv;
        this.xpj.eqd = this.qug.uyv("control_back");
        this.xpj.fbq(this.ekl.lvi.gst, null, this.context2D);
        this.xpj.bih(this.ekl.lvi, this.style.lvi);
        this.xpj.vxq(this.dzu, 0);
        this.xpj.vxq(this.jib, 1);
        this.xpj.vxq(this.ztu, 2)
    };
    this.avm = function() {
        var a = new rzc();
        a.fbq(this.ekl.eve.gst, null, this.context2D);
        a.parent = this;
        a.vwd = this.language.vzf;
        a.ncb = this.gej;
        a.rep = this.mum.chp.bgt;
        a.kwu = this.mum.uvf.bgt;
        a.xwu = this.qug.uyv("effect");
        a.wez(this.ekl.eve);
        a.goa(this.style.grz);
        a.pfc(this.iaz, this.znn(), this.jsq(false));
        a.jom(this.bkh, false);
        a.dwr(false);
        this.pxa.dcj("betsel", a)
    };
    this.sqf = function() {
        this.lim.coa(this.ekl.lia, this.style.lia, this.qug.uyv("btn_s"))
    };
    this.jaj = function() {
        var a = new wyv();
        a.fbq(this.ekl.top.gst, null, this.context2D);
        a.parent = this;
        this.pxa.dcj("tops", a)
    };
    this.mtr = function() {
        this.goo = new wtk();
        this.cmb = new wtk();
        this.qjq = new wtk();
        this.llr = new wtk();
        this.kig = new wtk();
        this.goo.fbq(this.ekl.qfe, this.context2D);
        this.cmb.fbq(this.ekl.kth, this.context2D);
        this.qjq.fbq(this.ekl.mcd, this.context2D);
        this.llr.fbq(this.ekl.pqa, this.context2D);
        this.kig.fbq(this.ekl.ewr, this.context2D);
        this.upm = [this.goo, this.cmb, this.qjq, this.llr, this.kig];
        for (var b = 0, a = this.upm.length; b < a; b++) {
            this.upm[b].parent = this;
            this.upm[b].bqe = this.qug.uyv("cards");
            this.upm[b].fmy = this.fmy;
            this.upm[b].fvx(this.wsn);
            this.upm[b].goa(this.style.hqs);
            this.upm[b].wez(this.ekl.hqs)
        }
    };
    this.nrb = function() {
        this.lim = new pkx();
        this.lim.fbq(this.ekl.lia.gst, null, this.context2D);
        this.lim.parent = this;
        this.lim.buz(false);
        this.lim.wez(this.ekl.lia);
        this.lim.goa(this.style.lia)
    };
    this.nia = function() {
        var a = new yxd();
        a.fbq(this.ekl.acc.gst, null, this.context2D);
        a.parent = this;
        a.bqe = this.qug.uyv("paytable");
        a.wez(this.ekl.acc);
        a.goa(this.style.acc);
        a.arq(this.xnj);
        a.kwr(this.vda);
        this.pxa.dcj("paytable", a)
    };
    this.qhy = function() {};
    this.qgh = function() {
        var a = new fcs();
        a.fbq(this.ekl.tvl.gst, this.context2D, null, this.qug.uyv("winpanel"), "");
        a.parent = this;
        a.wez(this.ekl.tvl);
        a.goa(this.style.tvl);
        a.dwr(false);
        this.pxa.dcj("winp", a)
    };
    this.yjs = function() {
        var a = new avn();
        a.fbq(this.ekl.kaq.gst, null, this.context2D);
        a.parent = this;
        a.bih(this.ekl.kaq);
        a.goa(this.style.kaq);
        this.pxa.dcj("history", a)
    };
    this.efq = function(d, b, c, a, e) {
        this.usv = true;
        this.state = d;
        this.wqc = b;
        this.muv = e;
        this.lgk = a;
        clearInterval(this.mjo);
        if (this.tff) {
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                this.znd = 0
            }
            if (this.qug.jeq === true) {
                this.ywz(this.gsv[this.znd])
            } else {
                this.zzh((this.gsv[this.znd] === 0))
            }
        }
        if (this.qop === true) {
            this.ams = true
        }
        this.pfc();
        this.amv();
        this.qhz();
        this.tds();
        this.hvq.mmd(c, a);
        window.slo(this.hkh)
    };
    this.hkh = function() {
        kit.vev.ffh(kit.vev.wqc);
        kit.vev.fzo = true;
        kit.vev.fui();
        kit.vev.xgz();
        if (kit.vev.qop === true) {
            kit.vev.cqh(true)
        }
        if (kit.vcj.jtx === kit.os.nht && kit.vcj.yub !== kit.vth.qln) {
            kit.vev.hpy([{
                mwa: kit.vew.psb
            }])
        } else {
            kit.vev.tcp(kit.vev.state)
        }
        kit.vev.jfd();
        if (kit.fng.value37 && !kit.vev.rqg()) {
            kit.vev.jng()
        }
    };
    this.thb = function() {
        this.pni = new sgi().fbq(this, kit.fng.value6)
    };
    this.hwn = function() {
        this.pni = new gwl().fbq(this, kit.fng.value6)
    };
    this.fwl = function(c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.ams) {
            return
        }
        var p = 0,
            o = 0,
            d = false,
            q = false,
            l = false,
            j = this.pxa.fei("loading"),
            b = this.pxa.fei("stats"),
            r = this.pxa.fei("topb"),
            n = this.pxa.fei("topi"),
            a = this.pxa.fei("betsel"),
            m = this.pxa.fei("autop"),
            e = this.pxa.fei("settings");
        if (c.touches) {
            var g = c.touches[0];
            d = true;
            if (!this.dlf) {
                p = g.pageX - this.offsetLeft;
                o = g.pageY - this.offsetTop
            } else {
                p = Math.round((g.pageX - this.offsetLeft) / this.seb);
                o = Math.round((g.pageY - this.offsetTop) / this.aax)
            }
        } else {
            if (c.which != 1) {
                return
            }
            if (!this.dlf) {
                p = c.pageX - this.offsetLeft;
                o = c.pageY - this.offsetTop
            } else {
                p = Math.round((c.pageX - this.offsetLeft) / this.seb);
                o = Math.round((c.pageY - this.offsetTop) / this.aax)
            }
        }
        if (this.usv === true) {
            if (m && m.aod()) {
                if (m.fwl(p, o)) {
                    return
                }
            }
            if (r && r.aod()) {
                if (r.fwl(p, o)) {
                    clearTimeout(this.vdr);
                    return
                } else {
                    l = true
                }
            }
            if (a) {
                if (a.aod()) {
                    if (a.fwl(p, o, d)) {
                        clearTimeout(this.vdr);
                        return
                    } else {
                        q = true
                    }
                }
            }
            if (l) {
                this.jej(this.xpj.tfd(p, o, null));
                return
            } else {
                if (q) {
                    if (a && a.vka()) {
                        this.kyy(this.xpj.tfd(p, o, null))
                    }
                    return
                }
            }
            if (e && e.aod()) {
                if (e.fwl(p, o)) {
                    return
                }
            }
            if (n) {
                if (n.fwl(p, o, d)) {
                    return
                }
            }
            if (b && b.aod()) {
                if (b.fwl(p, o)) {
                    return
                }
            }
            if (this.lim && this.lim.aod()) {
                if (this.lim.fwl(p, o)) {
                    return
                }
            }
            if (this.hvq && this.hvq.aod()) {
                if (this.hvq.fwl(p, o)) {
                    return
                }
            }
            if (this.xpj) {
                if (this.xpj.fwl(p, o, q)) {
                    return
                }
            }
            if (this.upm) {
                for (var f = 0, k = this.upm.length; f < k; f++) {
                    if (this.upm[f].fwl(p, o)) {
                        return
                    }
                }
            }
        } else {
            if (j && j.aod()) {
                if (j.fwl(p, o)) {
                    return
                }
            }
        }
    };
    this.qua = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        if (this.ams) {
            return
        }
        var e = this.pxa.fei("topb"),
            b = this.pxa.fei("betsel"),
            a = this.pxa.fei("autop"),
            c = this.pxa.fei("settings");
        if (this.usv === true) {
            if (a && a.aod()) {
                if (a.qua()) {
                    return
                }
            }
            if (b) {
                if (b.qua()) {
                    return
                }
            }
            if (this.lim && this.lim.aod()) {
                if (this.lim.qua()) {
                    return
                }
            }
            if (this.hvq && this.hvq.aod()) {
                if (this.hvq.qua()) {
                    return
                }
            }
            if (this.xpj) {
                if (this.xpj.qua()) {
                    return
                }
            }
            if (e) {
                if (e.qua()) {
                    return
                }
            }
            if (c) {
                if (c.qua()) {
                    return
                }
            }
        }
    };
    this.xba = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        if (this.ams) {
            return
        }
        var f = false,
            c = false,
            e = this.pxa.fei("topb"),
            b = this.pxa.fei("betsel"),
            a = this.pxa.fei("autop");
        if (a && a.aod()) {
            if (a.xba(d.keyCode)) {
                return
            }
        }
        if (e) {
            if (e.xba(d.keyCode)) {
                clearTimeout(this.vdr);
                return
            } else {
                if (e.aod() && e.vka()) {
                    c = true
                }
            }
        }
        if (b) {
            if (b.aod()) {
                if (b.xba(d.keyCode)) {
                    clearTimeout(this.vdr);
                    return
                } else {
                    f = true
                }
            }
        }
        if (c) {
            this.jej(this.xpj.tfd(null, null, d.keyCode));
            return
        } else {
            if (f) {
                if (b && b.vka()) {
                    this.kyy(this.xpj.tfd(null, null, d.keyCode))
                }
                return
            }
        }
        if (this.lim && this.lim.aod()) {
            if (this.lim.xba(d.keyCode)) {
                return
            }
        }
        if (this.hvq && this.hvq.aod()) {
            if (this.hvq.xba(d.keyCode)) {
                return
            }
        }
        if (this.xpj) {
            if (this.xpj.xba(d.keyCode)) {
                return
            }
        }
    };
    this.hrl = function(b) {
        if (b.preventDefault) {
            b.preventDefault()
        }
        if (b.stopPropagation) {
            b.stopPropagation()
        }
        if (this.ams) {
            return
        }
        var a = this.pxa.fei("autop"),
            c = this.pxa.fei("topb");
        if (a && a.aod()) {
            if (a.hrl()) {
                return
            }
        }
        if (this.lim && this.lim.aod()) {
            if (this.lim.hrl()) {
                return
            }
        }
        if (this.hvq && this.hvq.aod()) {
            if (this.hvq.hrl()) {
                return
            }
        }
        if (this.xpj) {
            if (this.xpj.hrl()) {
                return
            }
        }
        if (c) {
            if (c.hrl()) {
                return
            }
        }
    };
    this.egj = function() {
        return (kit.vcj.vsg() && !this.rka)
    };
    this.rpm = function() {
        return (kit.vcj.vsg() && !this.lsh)
    };
    this.nix = function(a) {
        this.ekl = this.nar(a);
        this.width = this.ekl.canvas.gst.width;
        this.height = this.ekl.canvas.gst.height;
        this.duz()
    };
    this.xxr = function() {
        this.style = new qct()
    };
    this.nar = function(a) {
        this.ily = a;
        if (a == kit.ekl.auv) {
            return new isl()
        } else {
            if (a == kit.ekl.vso) {
                return new whe()
            } else {
                if (a == kit.ekl.nzg) {
                    return new yyf()
                } else {
                    if (a == kit.ekl.rhc) {
                        return new nmh()
                    } else {
                        if (a == kit.ekl.ote) {
                            return new jez()
                        } else {
                            if (a == kit.ekl.gdj) {
                                return new usg()
                            } else {
                                if (a == kit.ekl.lgp) {
                                    return new spg()
                                } else {
                                    if (a == kit.ekl.ild) {
                                        return new zaz()
                                    } else {
                                        if (a == kit.ekl.sjb) {
                                            return new uwh()
                                        } else {
                                            if (a == kit.ekl.hai) {
                                                return new dyt()
                                            } else {
                                                if (a == kit.ekl.xtd) {
                                                    return new agz()
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
    this.duz = function() {};
    this.iiw = function(a) {
        if (this.xdp) {
            this.htc();
            this.bow(a)
        } else {
            this.zcd()
        }
    };
    this.htc = function() {
        this.canvas.width = 0;
        if (this.gvo === false) {
            this.eym.style.marginTop = (-this.height / 2 + this.bog()) + "px";
            this.eym.style.marginLeft = (-this.width / 2) + "px"
        } else {
            this.eym.style.left = "0px";
            this.eym.style.top = "0px";
            this.eym.style.marginTop = ((this.zki - this.height) / 2 + this.bog()) + "px";
            this.eym.style.marginLeft = ((this.mxr - this.width) / 2) + "px"
        }
        this.eym.style.width = (this.width > this.mxr) ? this.mxr + "px" : this.width + "px";
        this.eym.style.height = (this.height > this.zki) ? this.zki + "px" : this.height + "px";
        this.canvas.width = Math.round(this.width);
        this.canvas.height = Math.round(this.height);
        if (this.vhl) {
            this.vhl.style.width = this.width + "px";
            this.vhl.style.height = this.height + "px"
        }
        this.width = this.canvas.width;
        this.height = this.canvas.height
    };
    this.bow = function(a) {
        this.mho();
        this.msk();
        this.gpv();
        this.oyo();
        if (!(this.rka && !this.lsh)) {
            this.nua()
        }
        if (!this.rka) {
            if (this.ekl.mjy) {
                if (this.pxa.fei("tops")) {
                    this.qng()
                } else {
                    this.jaj()
                }
            } else {
                this.pxa.clq("tops")
            }
            this.jwh();
            this.jmc();
            if (this.hui()) {
                this.url()
            }
        } else {
            this.yjs()
        }
        if (this.ekl.vbf) {
            this.ncl()
        }
        if (this.ekl.oqk) {
            this.ucq()
        }
        if (this.ekl.pze) {
            this.kxl();
            if (!this.ekl.aui) {
                this.jhq()
            }
        }
        if (this.ekl.aui) {
            this.qny()
        }
        this.izd();
        if (a) {
            this.nov()
        }
    };
    this.mho = function() {
        if (this.xpj) {
            this.xpj.mya(this.ekl.lvi.gst);
            this.xpj.wez(this.ekl.lvi)
        }
    };
    this.jhq = function() {
        mtg.prototype.jhq.call(this);
        var b = this.pxa.fei("topb");
        if (b) {
            if (this.lmj) {
                var a = b.tjx.fei("help");
                if (a) {
                    a.vba(!this.ekl.mjy)
                }
            }
        }
    };
    this.ucq = function() {
        var a = this.pxa.fei("betsel");
        if (a) {
            a.mya(this.ekl.eve.gst);
            a.wez(this.ekl.eve)
        }
    };
    this.msk = function() {
        if (this.goo) {
            this.goo.mya(this.ekl.qfe)
        }
        if (this.cmb) {
            this.cmb.mya(this.ekl.kth)
        }
        if (this.qjq) {
            this.qjq.mya(this.ekl.mcd)
        }
        if (this.llr) {
            this.llr.mya(this.ekl.pqa)
        }
        if (this.kig) {
            this.kig.mya(this.ekl.ewr)
        }
        for (var b = 0, a = this.upm.length; b < a; b++) {
            this.upm[b].wez(this.ekl.hqs)
        }
    };
    this.ncl = function() {
        var a = this.pxa.fei("winp");
        if (a) {
            a.mya(this.ekl.tvl.gst);
            a.wez(this.ekl.tvl)
        }
    };
    this.nua = function() {
        if (this.lim) {
            this.lim.mya(this.ekl.lia.gst);
            this.lim.wez(this.ekl.lia)
        }
    };
    this.qng = function() {
        var a = this.pxa.fei("tops");
        if (a) {
            a.mya(this.ekl.top.gst);
            a.dwr(this.ekl.mjy)
        }
    };
    this.gpv = function() {
        var a = this.pxa.fei("paytable");
        if (a) {
            a.mya(this.ekl.acc.gst);
            a.wez(this.ekl.acc)
        }
    };
    this.oyo = function() {};
    this.izd = function() {};
    this.nov = function() {
        if (this.pxa.fei("tops")) {
            this.lim.agr(true);
            this.hxd();
            if (this.lim.rcc() == 0) {
                this.rcg()
            }
        } else {
            this.luj = null;
            this.lim.lmi(this.glt, true)
        }
        this.lim.cxx()
    };
    this.vrp = function() {
        this.dzu = [];
        if (this.rqg() === false && this.xkq != "") {
            this.dzu.push(this.xkq)
        }
        this.dzu.push(this.language.fcy);
        this.dzu.push(this.language.rek + " " + this.ywx(this.hdj()) + ((this.egj() === true) ? "|" : " ") + this.language.mqv + " " + this.ywx(this.ugx()));
        this.dzu.push(this.language.bxv)
    };
    this.nro = function() {
        this.ztu = [];
        this.ztu[0] = this.language.kqa;
        this.ztu[1] = this.language.pxe
    };
    this.vgb = function() {
        this.jib = [];
        this.jib[0] = this.language.uyd;
        this.jib[1] = this.language.pgw
    };
    this.zzz = function() {
        this.gif = [];
        this.gif[0] = this.language.xhj
    };
    this.jup = function() {
        mtg.prototype.jup.call(this);
        if (this.fge() === true) {
            this.qug.fzf(true)
        }
    };
    this.mbb = function() {
        var b = kit.fng.value30 + "/poker/sounds/";
        this.qug.rgs("collect", null, false, b + "collect");
        this.qug.rgs("collectend", null, false, b + "collect1");
        b = kit.fng.value30 + "/basic/sounds/";
        if (!kit.fng.value55) {
            if (this.egj() === false) {
                this.qug.rgs("btn", null, false, b + "btn");
                this.qug.rgs("auto_on", null, false, b + "auto_on");
                this.qug.rgs("gamble_on", null, false, b + "gamble_on");
                this.qug.rgs("gamble_off", null, false, b + "gamble_off");
                this.qug.rgs("gambleprop", null, true, b + "gambleprop");
                this.qug.rgs("auto_off", null, false, b + "auto_off");
                for (var a = 0; a < 12; a++) {
                    this.qug.rgs("step" + a, null, false, b + "step" + (a + 1))
                }
                this.qug.rgs("maxstep", null, false, b + "maxstep")
            } else {
                this.qug.rgs("btn", null, false, b + "btn2");
                this.qug.rgs("auto_fill", null, false, b + "auto_fill")
            }
        } else {
            this.qug.rgs("btn", null, false, b + "ama_btn");
            if (this.egj() === false) {
                this.qug.rgs("gamble_on", null, false, b + "ama_gamble_on");
                this.qug.rgs("gamble_off", null, false, b + "ama_gamble_off");
                this.qug.rgs("gambleprop", null, true, b + "ama_gambleprop");
                for (var a = 0; a < 12; a++) {
                    this.qug.rgs("step" + a, null, false, b + "ama_step")
                }
                this.qug.rgs("maxstep", null, false, b + "ama_step")
            }
        }
        this.qug.rgs("silence", null, false, b + "silence");
        this.qug.rgs("audioon", null, false, b + "audio_on");
        if (this.egj() === false) {
            this.qug.rgs("panel_in", null, false, b + "panel_in");
            this.qug.rgs("panel_out", null, false, b + "panel_out")
        }
        this.eyc();
        this.dgf()
    };
    this.dgf = function() {
        var b = kit.fng.value30 + "/poker/sounds/";
        this.qug.rgs("hold", null, false, b + "hold");
        this.qug.rgs("unhold", null, false, b + "unhold");
        for (var a = 0; a < 5; a++) {
            this.qug.rgs("deal" + a, null, false, b + "deal2")
        }
    };
    this.eyc = function() {
        for (var a = 0; a < this.fuy; a++) {
            this.qug.rgs("win" + a, this.czi, false, this.irq + "win" + (a + 1))
        }
    };
    this.fvm = function() {
        var a = this.ruv + this.ekl.type + "/";
        this.qug.vqg("icon", a + "icon_out.png");
        this.qug.vqg("back", a + "main.jpg");
        this.qug.vqg("cards", a + "cardDeck.png");
        this.qug.vqg("winpanel", a + "winPanel.png");
        this.qug.vqg("help", a + "help.jpg");
        a = kit.fng.value30 + "/basic/images/" + this.ekl.type + "/";
        if (this.ekl.xbh === true) {
            this.qug.vqg("btn_back", a + "buttonback.png")
        }
        a = kit.fng.value30 + "/poker/images/" + this.ekl.type + "/";
        if (this.egj() === true) {
            this.qug.tlk(a, "gui_mobile_v15.json")
        } else {
            if (kit.fng.value57 === kit.ui.snp || this.hxx() != null) {
                this.qug.tlk(a, "gui_desktop_v25.json")
            } else {
                this.qug.tlk(a, "gui_desktop_v15.json")
            }
        }
        this.bkn()
    };
    this.bkn = function() {
        var a = this.ruv + this.ekl.type + "/";
        this.qug.vqg("g_back", a + "gamble.jpg")
    };
    this.olw = function() {
        if (this.guu && !this.cuu) {
            this.psj(this.vkp - this.win - this.pak, true)
        } else {
            this.psj(this.vkp, true)
        }
        this.qrt(this.totalBet, true);
        this.yeq();
        this.pxa.fdt("tops", "#xgz");
        this.pxa.fdt("settings", "#kdv", [0, 0, this.ywx(this.pex())]);
        this.xgz()
    };
    this.xgz = function(m, l, n, t) {
        if (kit.vev.avk()) {
            var a = (m != null && l != null && n != null && t != null),
                c = (a === true) ? new dho(m, l, n, t) : new dho(kit.vev.ekl.vev.gst.x, kit.vev.ekl.vev.gst.y, kit.vev.ekl.vev.gst.width, kit.vev.ekl.vev.gst.height),
                q = kit.vev.context2D,
                e = kit.vev.canvas,
                f = (kit.vev.lsh === true) ? kit.vev.style.vev.ajf : kit.vev.style.vev.backgroundColor,
                z = kit.vev.pxa.fei("stats"),
                b = kit.vev.pxa.fei("history"),
                u = kit.vev.pxa.fei("topb"),
                g = kit.vev.pxa.fei("topi"),
                j = kit.vev.pxa.fei("betsel"),
                v = kit.vev.pxa.fei("paytable"),
                p = kit.vev.pxa.fei("tops"),
                k = kit.vev.pxa.fei("winp"),
                o = kit.vev.pxa.fei("autop"),
                d = kit.vev.pxa.fei("settings");
            kit.vev.nmd = false;
            q.save();
            if (a) {
                q.beginPath();
                q.rect(m, l, n, t);
                q.closePath();
                q.clip()
            }
            q.clearRect(0, 0, kit.vev.width, kit.vev.height);
            q.restore();
            if (kit.vev.ekl.jzh) {
                kit.vcj.zrw(q, kit.vev.ekl.vev.gst.x - kit.vev.ekl.vev.ylx, kit.vev.ekl.vev.gst.y - kit.vev.ekl.vev.ylx, kit.vev.ekl.vev.gst.width + 2 * kit.vev.ekl.vev.ylx, kit.vev.ekl.vev.gst.height + 2 * kit.vev.ekl.vev.ylx, f, 1)
            }
            if (b) {
                b.xgz()
            }
            if (g) {
                g.xgz()
            }
            if (p && p.aod()) {
                p.xgz()
            }
            if (z && z.aod()) {
                z.xgz()
            } else {
                if (kit.vev.lim != null && kit.vev.lim.aod()) {
                    kit.vev.lim.xgz()
                } else {
                    if (kit.vev.hvq != null && kit.vev.hvq.aod()) {
                        kit.vev.hvq.xgz()
                    } else {
                        q.drawImage(kit.vev.qug.uyv("back"), kit.vev.ekl.vev.gst.x, kit.vev.ekl.vev.gst.y);
                        if (kit.vev.xpj) {
                            kit.vev.xpj.xgz()
                        }
                        for (var r = 0, s = kit.vev.upm.length; r < s; r++) {
                            kit.vev.upm[r].jzm(e);
                            kit.vev.upm[r].xgz()
                        }
                        if (k) {
                            k.xgz()
                        }
                        if (v) {
                            v.xgz()
                        }
                    }
                }
            }
            if (j) {
                j.xgz()
            }
            if (u) {
                u.xgz()
            }
            if (o) {
                o.xgz()
            }
            if (d) {
                d.xgz()
            }
        }
    };
    this.esk = function(a, b) {
        this.nmd = true;
        kit.vcj.zrw(a, b.x, b.y, b.width, b.height, "black", 0.5)
    };
    this.tef = function() {
        this.jnd();
        if (this.state == kit.rhw.mzb.iwo && this.eih > 0) {
            this.qug.qyk("win" + (this.eih - 1))
        }
        this.xpj.tjx.fdt("info", "#ick");
        this.cmn(false);
        this.xpj.zdr(false);
        this.lof(false);
        this.lim.wyc();
        this.lim.zdr(true);
        this.pxa.fdt("settings", "#yen");
        this.xpj.tjx.fdt("setting", "#faw", [this.pxa.fdt("settings", "#aod")])
    };
    this.rcg = function() {
        this.lim.zdr(false);
        if (this.state != kit.rhw.mzb.zqp && this.state != kit.rhw.mzb.zyo) {
            this.xpj.zdr(true)
        } else {
            this.xpj.lvf(true)
        }
        this.cmn(true);
        this.lof(true);
        this.lim.yen();
        this.xpj.tjx.fdt("info", "#fnv", [0])
    };
    this.vlh = function() {
        var a = kit.vev.xpj.tjx.fei("gamble");
        kit.vev.bsi();
        kit.vev.syx();
        if (a) {
            a.ktf();
            a.faw(kit.vev.cwc)
        }
        kit.vev.jnd();
        kit.vev.qug.qyk("win" + (kit.vev.eih - 1));
        kit.vev.xpj.tjx.fdt("info", "#ick");
        kit.vev.xpj.zdr(false);
        kit.vev.lof(false);
        kit.vev.hvq.zdr(true);
        kit.vev.hvq.mqb(kit.vev.vkp, kit.vev.win + kit.vev.pak, kit.vev.eih, false);
        kit.vev.hvq.wyc(!kit.vev.rcy)
    };
    this.ywb = function() {
        kit.vev.xyl();
        kit.vev.hvq.juj();
        kit.vev.lof(true);
        kit.vev.hvq.zdr(false);
        kit.vev.hvq.dwr(false, true);
        kit.vev.xpj.tjx.fdt("start", "#yya", [kit.vev.language.start, true]);
        kit.vev.cuu = true;
        if (kit.vev.rcy) {
            kit.vev.xpj.avg(true);
            kit.vev.yni = setTimeout(kit.vev.wpg, 800)
        } else {
            kit.vev.xpj.zdr(true);
            if (!(kit.vev.rcy || kit.vev.guu)) {
                kit.vev.cmn(true)
            }
            kit.vev.xpj.tjx.fdt("info", "#fnv", [0])
        }
    };
    this.unp = function() {
        var a = this.pxa.fei("tops");
        if (a) {
            a.jom(0);
            this.xgz()
        }
    };
    this.iqy = function() {
        this.zbv();
        this.olw();
        this.syx();
        this.cmn(false);
        this.mww(false);
        this.pxa.fdt("winp", "#dwr", [false]);
        this.pxa.fdt("paytable", "#dwr", [true]);
        this.emt()
    };
    this.csx = function() {
        this.sli();
        if (this.gox == this.yrp) {
            this.olw()
        }
        this.cmn(false);
        this.mww(false);
        this.emt()
    };
    this.onr = function() {
        this.blz();
        if (this.gox >= 2 && this.yrp == 2) {
            this.olw()
        }
        this.cmn(false);
        this.mww(false);
        this.emt()
    };
    this.sgg = function() {
        var a = kit.vev.axw,
            b = 0;
        if (kit.vev.fxr == 0) {
            kit.vev.gpj = new Date().getTime()
        } else {
            b = new Date().getTime();
            a = kit.vev.axw + (kit.vev.zpr * kit.vev.axw - (b - kit.vev.gpj))
        }
        if (!kit.vev.upm[kit.vev.fxr].tom()) {
            kit.vev.zpr += 1;
            kit.vev.qug.eze("deal" + (kit.vev.zpr - 1));
            kit.vev.upm[kit.vev.fxr].fvx(kit.vev.dzg[kit.vev.fxr], true)
        } else {
            a = 0
        }
        kit.vev.fxr++;
        if (a <= 0) {
            a = 0
        }
        if (kit.vev.fxr < kit.vev.dzg.length) {
            if (a == 0) {
                kit.vev.sgg()
            } else {
                kit.vev.ati = setTimeout(kit.vev.sgg, a)
            }
        } else {
            kit.vev.ati = setTimeout(kit.vev.gse, kit.vev.axw)
        }
    };
    this.kju = function() {
        var a = 40,
            b = a,
            c = 0;
        if (kit.vev.fxr == 0) {
            kit.vev.gpj = new Date().getTime()
        } else {
            c = new Date().getTime();
            b = a + (kit.vev.zpr * a - (c - kit.vev.gpj))
        }
        if (!kit.vev.upm[kit.vev.fxr].tom()) {
            kit.vev.zpr += 1;
            kit.vev.upm[kit.vev.fxr].fvx(kit.vev.wsn, true)
        } else {
            b = 0
        }
        kit.vev.fxr++;
        if (b <= 0) {
            b = 0
        }
        if (kit.vev.fxr < kit.vev.dzg.length) {
            if (b == 0) {
                kit.vev.kju()
            } else {
                kit.vev.ati = setTimeout(kit.vev.kju, b)
            }
        } else {
            kit.vev.ati = setTimeout(kit.vev.yiq, 200)
        }
    };
    this.emt = function() {
        this.gld = true;
        this.zpr = 0;
        this.mel();
        if (this.bap == 1) {
            for (var b = 0, a = this.dzg.length; b < a; b++) {
                this.upm[b].fvx(this.wsn, false)
            }
            this.xpj.tjx.fdt("info", "#xjj", [this.language.jjq, true]);
            this.xgz();
            this.fxr = 0;
            this.ati = setTimeout(this.sgg, 200)
        } else {
            this.xpj.tjx.fdt("info", "#ick");
            for (var b = 0, a = this.dzg.length; b < a; b++) {
                if (!this.upm[b].tom()) {
                    this.upm[b].fvx(this.wsn, false)
                }
            }
            this.xgz();
            this.ati = setTimeout(this.hxn, 200)
        }
    };
    this.hxn = function() {
        if (kit.vev.xjx > 0) {
            kit.vev.fxr = 0;
            kit.vev.sgg()
        } else {
            kit.vev.gse()
        }
    };
    this.yiq = function() {
        kit.vev.zpr = 0;
        for (var b = 0, a = kit.vev.qug.bgz("deal"); b < a; b++) {
            kit.vev.qug.qyk("deal" + b)
        }
        if (kit.vev.bap == 1) {
            kit.vev.fxr = 0;
            kit.vev.sgg()
        } else {
            if (kit.vev.xjx > 0) {
                kit.vev.fxr = 0;
                kit.vev.sgg()
            } else {
                kit.vev.gse()
            }
        }
    };
    this.gse = function() {
        kit.vev.gld = false;
        kit.vev.dmj = true;
        if (kit.vev.qmy()) {
            if (kit.vev.bap == 1) {
                kit.vev.xin()
            } else {
                if (kit.vev.bap == 2) {
                    kit.vev.ndc()
                }
            }
            kit.vev.ekb(true);
            kit.vev.mww(true);
            kit.vev.xpj.tjx.fdt("info", "#fnv", [2]);
            if (kit.vev.rcy) {
                kit.vev.xpj.qyu(true);
                kit.vev.yni = setTimeout(kit.vev.wpg, 800)
            } else {
                kit.vev.xpj.lvf(true);
                if ((kit.vev.gox == 3 && (kit.vev.yrp == 3 || (kit.vev.yrp == 2 && kit.vev.bap == 2))) || (kit.vev.gox == 2 && kit.vev.yrp == 2)) {
                    kit.vev.xpj.tjx.fdt("bet", "#vba", [kit.vev.qcv]);
                    kit.vev.xpj.tjx.fdt("exit", "#vba", [true])
                }
                if (kit.vev.gox == kit.vev.yrp) {
                    kit.vev.xyl()
                }
                kit.vev.cmn(true)
            }
        } else {
            kit.vev.nye();
            kit.vev.ayb();
            if (kit.vev.win > 0) {
                kit.vev.cuu = false;
                kit.vev.gpl()
            } else {
                if (!kit.vev.ghx()) {
                    kit.vev.xyl();
                    kit.vev.xpj.tjx.fdt("info", "#xjj", [kit.vev.language.dlg, true]);
                    if (kit.vev.rcy) {
                        kit.vev.xpj.qyu(true);
                        kit.vev.yni = setTimeout(kit.vev.wpg, 800)
                    } else {
                        kit.vev.xpj.zdr(true);
                        kit.vev.cmn(true)
                    }
                } else {
                    kit.vev.fcx()
                }
            }
        }
    };
    this.mel = function() {
        if (kit.fng.value79 > 0) {
            this.axw = kit.fng.value79 / this.upm.length
        } else {
            if (this.xjg) {
                this.axw = this.wxu
            } else {
                if (this.bap == 1) {
                    this.axw = this.azn
                } else {
                    this.axw = this.uvo
                }
            }
        }
    };
    this.ekb = function(d) {
        var c = false;
        this.gov = true;
        for (var b = 0, a = this.gil.length; b < a; b++) {
            if (this.gil[b] > 0) {
                this.upm[b].sxs(true, false);
                if (!c && d) {
                    this.qug.eze("hold");
                    c = true
                }
            } else {
                this.upm[b].sxs(false, false)
            }
        }
        this.xgz()
    };
    this.ayb = function() {
        for (var b = 0, a = this.gil.length; b < a; b++) {
            this.upm[b].sxs(false, false);
            if (this.nwj) {
                if (this.gil[b] > 0) {
                    this.upm[b].vbs(true, false)
                } else {
                    this.upm[b].vbs(false, false)
                }
            }
        }
        this.xgz()
    };
    this.gpl = function() {
        this.xpj.zdr(false);
        this.zry(this.win);
        this.xpj.tjx.fdt("info", "#xjj", [this.language.tgq, false]);
        this.rtw = false;
        if (!this.rka) {
            this.qug.eze("win" + (this.eih - 1))
        }
        this.xgz();
        this.pji()
    };
    this.fcx = function() {};
    this.ghx = function() {
        return false
    };
    this.zry = function(a) {
        this.pxa.fdt("winp", "#yya", [this.ywx(a), false]);
        this.pxa.fdt("winp", "#dwr", [true]);
        this.pxa.fdt("paytable", "#dwr", [false])
    };
    this.pji = function() {
        if (this.cwc && this.hyk) {
            setTimeout(this.vlh, 1000)
        } else {
            if ((this.guu || this.rcy)) {
                if (!this.ruy && !this.cuu) {
                    this.xpj.tjx.fdt("start", "#yya", [this.language.ygw, true]);
                    if (this.guu) {
                        this.ruy = true;
                        this.xpj.zdr(false);
                        setTimeout(this.ygw, 2000)
                    } else {
                        if (this.rcy) {
                            this.yni = setTimeout(this.wpg, 800)
                        }
                    }
                }
            } else {
                this.xpj.tjx.fdt("start", "#yya", [this.language.ygw, true]);
                if (!this.rka) {
                    this.xpj.tjx.fdt("gamble", "#ofo");
                    this.xpj.tjx.fdt("info", "#nvi", [1])
                } else {
                    if (!this.inAutogamble && !this.crn) {
                        this.xpj.tjx.fdt("gamble", "#ofo")
                    }
                }
                setTimeout(this.ykl, 400)
            }
        }
    };
    this.ykl = function() {
        kit.vev.xpj.aws(true)
    };
    this.zbv = function() {};
    this.sli = function() {};
    this.blz = function() {};
    this.xin = function() {};
    this.ndc = function() {};
    this.nye = function() {};
    this.qmy = function() {
        return this.state == kit.rhw.mzb.zqp || this.state == kit.rhw.mzb.zyo
    };
    this.gnx = function(a) {
        if (this.gov) {
            if (!a) {
                this.syx()
            }
            this.gov = false
        }
    };
    this.syx = function() {
        for (var b = 0, a = this.upm.length; b < a; b++) {
            this.upm[b].sxs(false, false);
            this.upm[b].vbs(false, false)
        }
        this.xgz()
    };
    this.nco = function() {
        return !this.guu
    };
    this.ept = function() {
        var b = this.xpj.tjx.fei("gamble"),
            a = this.xpj.tjx.fei("info");
        this.xpj.zdr(false);
        this.syx();
        this.bsi();
        if (b) {
            b.ktf();
            b.faw(this.cwc)
        }
        if (a) {
            a.ick();
            a.xjj(this.language.sut + ": " + this.ywx(this.win + this.pak));
            a.nvi(0)
        }
        this.pni.ygw()
    };
    this.ygw = function() {
        if (!kit.vev.cuu) {
            kit.vev.syx();
            kit.vev.qug.qyk("collect");
            kit.vev.qug.qyk("collectend");
            if (kit.vev.neo != kit.vev.gqm) {
                kit.vev.xpj.qyu(true)
            }
            kit.vev.qug.qyk("win" + (kit.vev.eih - 1));
            kit.vev.gkt = 10;
            if (kit.vev.win + kit.vev.pak < kit.vev.gkt) {
                kit.vev.gkt = kit.vev.win + kit.vev.pak;
                kit.vev.cnm()
            } else {
                if (kit.vev.win + kit.vev.pak >= kit.vev.pex() * 25) {
                    kit.vev.gkt = 20
                }
                kit.vev.cnm()
            }
        }
    };
    this.nrx = function() {
        this.cuu = true;
        this.ruy = false;
        clearTimeout(this.lds);
        this.qug.qyk("collect");
        this.qug.eze("collectend");
        this.psj(this.vkp, true);
        this.jnd();
        this.cmn(true);
        this.xpj.tjx.fdt("start", "#yya", [this.language.start, true]);
        if (!this.rcy) {
            this.xpj.zdr(true)
        } else {
            this.yni = setTimeout(this.wpg, 500)
        }
    };
    this.cnm = function() {
        this.kye = false;
        this.soa = (this.win + this.pak > this.totalBet) ? true : false;
        this.iof = 0;
        this.owo = this.win + this.pak;
        this.fkm = this.vkp - this.win - this.pak;
        this.dup = 0;
        this.foo = this.win + this.pak;
        this.gpj = new Date().getTime();
        this.ruy = true;
        this.lds = setTimeout(this.eei, this.itx)
    };
    this.eei = function() {
        var c = 0,
            a = kit.vev.egl,
            b = 0;
        if (kit.vev.foo > 0) {
            if (!kit.vev.kye) {
                kit.vev.qug.eze("collect");
                kit.vev.kye = true
            }
            c = Math.round(kit.vev.foo / kit.vev.gkt);
            kit.vev.foo -= c;
            if (kit.vev.foo < 0) {
                kit.vev.foo = 0
            }
            kit.vev.nny(kit.vev.owo - (kit.vev.win + kit.vev.pak - kit.vev.foo));
            kit.vev.psj(kit.vev.fkm + (kit.vev.win + kit.vev.pak - kit.vev.foo), true);
            kit.vev.iof++;
            kit.vev.gkt -= 1;
            a = kit.vev.egl;
            b = new Date().getTime();
            a = kit.vev.itx + (kit.vev.iof * kit.vev.itx - (b - kit.vev.gpj));
            kit.vev.lds = setTimeout(kit.vev.eei, a)
        } else {
            kit.vev.qug.qyk("collect");
            kit.vev.qug.eze("collectend");
            kit.vev.ruy = false;
            kit.vev.cuu = true;
            clearTimeout(kit.vev.lds);
            kit.vev.jnd();
            kit.vev.xpj.tjx.fdt("start", "#yya", [kit.vev.language.start, true]);
            if (kit.vev.neo == kit.vev.gqm) {
                kit.vev.neo()
            } else {
                if (!(kit.vev.rcy)) {
                    kit.vev.xpj.zdr(true);
                    kit.vev.cmn(true)
                } else {
                    kit.vev.xpj.avg(true);
                    kit.vev.xpj.tjx.fdt("info", "#xjj", [kit.vev.language.sut + ": " + kit.vev.ywx(kit.vev.win + kit.vev.pak)]);
                    kit.vev.yni = setTimeout(kit.vev.wpg, 500)
                }
            }
        }
    };
    this.zdm = function(a, b, c) {
        if (a <= b) {
            return 1
        }
        var d = 0,
            e = this.kdy(a, b, c),
            f = 0;
        while (a > f) {
            e = this.kdy(a - f, b, c);
            f += e;
            d++
        }
        return d
    };
    this.kdy = function(d, a, b) {
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
    this.tcp = function(d) {
        var e = this.muv,
            c = this.lgk;
        this.rai = true;
        this.xpj.tjx.fdt("info", "#xjj", ["", true]);
        this.olw();
        if (d == kit.rhw.mzb.xej) {
            this.xyl();
            this.xpj.tjx.fdt("info", "#fnv", [0]);
            this.xpj.zdr(true);
            this.cmn(true);
            this.oje()
        } else {
            if (d == kit.rhw.mzb.zqp) {
                for (var b = 0, a = this.dzg.length; b < a; b++) {
                    this.upm[b].fvx(this.dzg[b], false)
                }
                this.xin();
                this.ekb(false);
                this.mww(true);
                this.xpj.tjx.fdt("info", "#fnv", [2]);
                this.xpj.lvf(true);
                if (this.gox == this.yrp) {
                    this.xpj.tjx.fdt("exit", "#vba", [true]);
                    this.xpj.tjx.fdt("bet", "#vba", [this.qcv]);
                    this.xyl()
                }
                this.cmn(true)
            } else {
                if (d == kit.rhw.mzb.iwo) {
                    for (var b = 0, a = this.dzg.length; b < a; b++) {
                        this.upm[b].fvx(this.dzg[b], false)
                    }
                    this.nye();
                    this.ayb();
                    if (this.win > 0) {
                        if (this.egj() === false) {
                            this.hyk = true
                        } else {
                            this.hyk = false;
                            this.guu = true
                        }
                        this.cuu = false;
                        this.gpl()
                    } else {
                        if (this.ghx()) {
                            this.hyk = true;
                            this.fcx()
                        } else {
                            this.xyl();
                            this.xpj.tjx.fdt("info", "#fnv", [0]);
                            this.xpj.zdr(true);
                            this.cmn(true);
                            this.oje()
                        }
                    }
                } else {
                    if (d == kit.rhw.mzb.obd) {
                        this.cuu = true;
                        for (var b = 0, a = this.dzg.length; b < a; b++) {
                            this.upm[b].fvx(this.dzg[b], false)
                        }
                        this.xyl();
                        this.xpj.tjx.fdt("info", "#fnv", [0]);
                        this.xpj.zdr(true);
                        this.cmn(true);
                        this.oje()
                    } else {
                        if (d == kit.rhw.mzb.zsb) {
                            for (var b = 0, a = this.dzg.length; b < a; b++) {
                                this.upm[b].fvx(this.dzg[b], false)
                            }
                            this.xgz();
                            if (!this.hvq.aod() && this.win + this.pak > 0) {
                                this.vlh();
                                this.hvq.mqb(this.vkp, this.win + this.pak, this.eih, true)
                            }
                            if (this.win + this.pak == 0) {
                                this.xyl();
                                this.xpj.tjx.fdt("info", "#fnv", [0]);
                                this.xpj.zdr(true);
                                this.cmn(true);
                                this.oje()
                            }
                        } else {
                            if (d == kit.rhw.mzb.dco) {
                                for (var b = 0, a = this.dzg.length; b < a; b++) {
                                    this.upm[b].fvx(this.dzg[b], false)
                                }
                                if (!this.hvq.aod()) {
                                    this.vlh()
                                }
                                this.psj(this.vkp, false);
                                this.hvq.mqb(this.vkp, this.win + this.pak, this.eih, true);
                                this.hvq.zdr(true)
                            } else {
                                if (d == kit.rhw.mzb.yxu) {
                                    this.cuu = true;
                                    for (var b = 0, a = this.dzg.length; b < a; b++) {
                                        this.upm[b].fvx(this.dzg[b], false)
                                    }
                                    this.xyl();
                                    this.xpj.tjx.fdt("info", "#fnv", [0]);
                                    this.xpj.zdr(true);
                                    this.cmn(true);
                                    this.oje()
                                } else {
                                    if (d == kit.rhw.mzb.zyo) {
                                        for (var b = 0, a = this.dzg.length; b < a; b++) {
                                            this.upm[b].fvx(this.dzg[b], false)
                                        }
                                        this.ndc();
                                        this.ekb(false);
                                        this.mww(true);
                                        this.xpj.tjx.fdt("info", "#fnv", [2]);
                                        this.xpj.lvf(true);
                                        if ((this.gox == 3 && this.yrp >= 2) && this.xpj.dqe != null) {
                                            this.xpj.tjx.fdt("exit", "#vba", [true])
                                        }
                                    } else {
                                        if (d == kit.rhw.mzb.qbz) {
                                            for (var b = 0, a = this.dzg.length; b < a; b++) {
                                                this.upm[b].fvx(this.dzg[b], false)
                                            }
                                            if (!this.hvq.aod()) {
                                                this.vlh()
                                            }
                                            this.psj(this.vkp, false);
                                            this.hvq.mqb(this.vkp, this.win, this.eih, true);
                                            this.hvq.buz(false);
                                            this.hvq.fyn(c)
                                        } else {
                                            if (d == kit.rhw.mzb.uoo || d == kit.rhw.mzb.egv) {
                                                for (var b = 0, a = this.dzg.length; b < a; b++) {
                                                    this.upm[b].fvx(this.dzg[b], false)
                                                }
                                                if (!this.hvq.aod()) {
                                                    this.vlh()
                                                }
                                                this.psj(this.vkp, false);
                                                this.hvq.mqb(this.vkp, this.win, this.eih, true);
                                                this.hvq.buz(false);
                                                this.hvq.gdb(e)
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
    this.xds = function() {
        this.rai = false;
        this.guu = false;
        this.hyk = false;
        this.xjx = 5;
        this.iqy();
        this.xpj.avg(true);
        this.met()
    };
    this.exj = function() {
        this.rai = false;
        this.guu = false;
        this.hyk = false;
        this.csx();
        this.xpj.avg(true)
    };
    this.bmo = function() {
        this.rai = false;
        this.guu = false;
        this.hyk = true;
        this.cuu = false;
        this.onr();
        this.xpj.avg(true)
    };
    this.oft = function(a) {
        this.rai = false;
        this.guu = true;
        this.hyk = false;
        this.cuu = false;
        if (this.hvq.aod()) {
            this.hvq.mqb(this.vkp, this.win + this.pak, this.eih, true);
            this.hvq.juj();
            this.psj(this.vkp, false);
            try {
                if (this.hvq instanceof oyp) {
                    this.hvq.fyn(a, true)
                } else {
                    setTimeout(this.hvq.tas, 500)
                }
            } catch (b) {
                setTimeout(this.hvq.tas, 500)
            }
        } else {
            this.onr();
            this.xpj.avg(true)
        }
    };
    this.lja = function() {
        this.rai = false;
        this.hyk = false;
        this.dmj = true;
        this.szk();
        if (this.hvq.aod()) {
            this.hvq.juj();
            this.psj(this.vkp, false);
            setTimeout(this.hvq.tas, 100)
        } else {
            this.ygw()
        }
    };
    this.iae = function() {
        this.rai = false;
        if (!this.hvq.aod() && this.win + this.pak > 0) {
            this.vlh()
        }
        this.hvq.mqb(this.vkp, this.win + this.pak, this.eih, true);
        if (this.win + this.pak == 0) {
            this.hvq.tjx.fdt("info", "#ick");
            setTimeout(this.ywb, 1000)
        } else {
            this.hvq.ojp()
        }
    };
    this.qbb = function() {
        this.rai = false;
        if (!this.hvq.aod()) {
            this.vlh()
        }
        this.psj(this.vkp, false);
        this.hvq.mqb(this.vkp, this.win + this.pak, this.eih, true);
        this.hvq.zdr(true)
    };
    this.mes = function(a) {
        this.rai = false;
        if (!this.hvq.aod() && this.win > 0) {
            this.vlh()
        }
        this.hvq.mqb(this.vkp, this.win, this.eih, true);
        this.hvq.buz(false);
        this.hvq.gdb(a)
    };
    this.dto = function(a) {
        this.rai = false;
        if (!this.hvq.aod() && this.win > 0) {
            this.vlh()
        }
        this.hvq.mqb(this.vkp, this.win, this.eih, true);
        this.hvq.buz(false);
        this.hvq.gdb(a)
    };
    this.fln = function(a) {
        this.rai = false;
        this.hvq.mqb(this.vkp, this.win, this.eih, true);
        this.hvq.fyn(a, false)
    };
    this.ndv = function(b, d) {
        var c = this.pxa.fei("stats"),
            a = this.pxa.fei("history");
        if (b == "authfailed") {
            b = this.language.fvo
        } else {
            if (b.toLowerCase().indexOf("active") == 0) {
                b = this.language.jih
            }
        }
        if (this.jmf) {
            if (!this.rka) {
                if (c && c.aod()) {
                    c.zdr(false);
                    c.dwr(false)
                }
                this.pxa.fdt("settings", "#yen");
                if (this.hvq != null && this.hvq.aod()) {
                    this.hvq.tjx.fdt("info", "#xjj", [b, true]);
                    this.hvq.zdr(false);
                    this.elt()
                } else {
                    if (this.xpj != null) {
                        if (this.lim != null && this.lim.aod()) {
                            this.rcg()
                        }
                        this.xpj.zdr(false);
                        this.stop();
                        this.xpj.tjx.fdt("setting", "#faw", [false]);
                        this.xpj.tjx.fdt("info", "#xjj", [b, true])
                    } else {
                        this.zhy(b)
                    }
                }
            } else {
                this.stop();
                this.yjs();
                if (a) {
                    a.qff(true)
                }
                this.uao(this.dcq(b))
            }
        } else {
            this.zhy(b)
        }
        if (d) {
            if (!this.rka && this.pni.qis.kxt == 0 && kit.fng.value46 > 0) {
                this.qgd((this.xdp) ? kit.fng.value71 : kit.fng.value47)
            } else {
                setTimeout(this.gqm, kit.fng.value10)
            }
        }
    };
    this.pmx = function(a) {
        if (a == kit.vew.lgb) {
            this.xpj.tjx.fdt("info", "#xjj", [this.language.alm, true])
        } else {
            if (a == kit.vew.bie) {
                this.xpj.tjx.fdt("info", "#xjj", [this.language.xhq + " " + this.ywx(this.wlc), true])
            } else {
                if (a >= kit.vew.rtk) {
                    this.xpj.tjx.fdt("info", "#ick");
                    if (a == kit.vew.rjc || a == kit.vew.mpl) {
                        this.stop()
                    }
                    this.xpj.zdr(false);
                    this.cmn(false)
                }
            }
        }
        this.aow();
        if (a < kit.vew.rtk) {
            this.dmj = true;
            this.xpj.zdr(true);
            this.cmn(true)
        } else {
            this.hpy([{
                mwa: a
            }])
        }
    };
    this.frd = function(a) {
        this.vkp = a;
        if (!(this.hvq.aod() || this.lim.aod())) {
            this.psj(a, true)
        } else {
            if (this.hvq.aod()) {
                this.hvq.tjx.fdt("creditd", "#yya", [this.ybn(a), true]);
                this.psj(a, false)
            }
        }
        if (this.vkp > 0) {
            this.szk()
        } else {
            this.xyl()
        }
    };
    this.agg = function() {
        clearTimeout(kit.vev.yni);
        if (kit.vev.dmj) {
            if (kit.vev.win + kit.vev.pak > 0 && !kit.vev.cuu) {
                if (!kit.vev.ruy) {
                    if (kit.vev.nco()) {
                        kit.vev.dmj = false;
                        kit.vev.ept()
                    }
                } else {
                    kit.vev.nrx()
                }
            } else {
                if (!kit.vev.gld) {
                    if (kit.vev.bby) {
                        kit.vev.aow();
                        kit.vev.exp();
                        return
                    } else {
                        if (kit.vev.amr) {
                            kit.vev.aow();
                            kit.vev.hcz();
                            return
                        }
                    }
                    kit.vev.dmj = false;
                    if (kit.vev.egj() === true) {
                        kit.vev.pds = (!kit.vev.cwc) ? 1 : 0
                    } else {
                        if (kit.fng.value62 === true) {
                            kit.vev.pds = 0;
                            if (kit.vev.rcy) {
                                kit.vev.pds |= 2
                            }
                            if (kit.vev.cwc) {
                                kit.vev.pds |= 4
                            }
                        } else {
                            kit.vev.pds = (kit.vev.rcy && !kit.vev.cwc) ? 1 : 0
                        }
                    }
                    kit.vev.hjo();
                    if ((kit.vev.state == kit.rhw.mzb.xej || kit.vev.state == kit.rhw.mzb.iwo || kit.vev.state == kit.rhw.mzb.obd || kit.vev.state == kit.rhw.mzb.zsb || kit.vev.state == kit.rhw.mzb.yxu || kit.vev.state == kit.rhw.mzb.qbz) || kit.vev.phn()) {
                        if (kit.vev.vkp >= kit.vev.pex() && kit.vev.pex() >= kit.vev.wlc) {
                            kit.vev.pni.til(kit.vev.bkh, kit.vev.pds);
                            kit.vev.xpj.zdr(false)
                        } else {
                            kit.vev.lor();
                            kit.vev.aow();
                            kit.vev.xpj.zdr(true);
                            kit.vev.cmn(true);
                            kit.vev.dmj = true
                        }
                    } else {
                        if (kit.vev.state == kit.rhw.mzb.zqp) {
                            if (kit.vev.gox == 2 && kit.vev.yrp == 2 && kit.vev.qcv && (kit.vev.xjx == 5 || kit.vev.totalBet != kit.vev.ccc)) {
                                kit.vev.pni.til(kit.vev.bkh, kit.vev.pds);
                                kit.vev.xpj.zdr(false);
                                kit.vev.mww(false);
                                return
                            }
                            kit.vev.nmu();
                            if (kit.vev.gox == 2 || (kit.vev.gox == 3 && kit.vev.xjx == 0 && kit.vev.eih > 0)) {
                                kit.vev.pni.hon(kit.vev.bkh, kit.vev.pds, kit.vev.gil);
                                kit.vev.xpj.zdr(false)
                            } else {
                                if (kit.vev.gox == 3) {
                                    kit.vev.pni.ylk(kit.vev.bkh, kit.vev.pds, kit.vev.gil);
                                    kit.vev.xpj.zdr(false)
                                }
                            }
                        } else {
                            if (kit.vev.state == kit.rhw.mzb.zyo) {
                                kit.vev.nmu();
                                kit.vev.pni.hon(kit.vev.bkh, kit.vev.pds, kit.vev.gil);
                                kit.vev.xpj.zdr(false)
                            }
                        }
                    }
                    kit.vev.mww(false)
                }
            }
        }
    };
    this.cht = function() {
        var a = kit.vev.pxa.fei("topi"),
            c = 0,
            b = 0,
            d = 0;
        if (!kit.fng.value55) {
            kit.vev.qug.qyk("auto_on");
            kit.vev.qug.qyk("auto_off")
        }
        if (kit.vev.rcy) {
            kit.vev.rcy = false;
            kit.vev.qxw();
            kit.vev.xpj.tjx.fdt("astart", "#faw", [kit.vev.rcy]);
            kit.vev.xpj.tjx.fdt("start", "#yya", [kit.vev.language.start, true]);
            if (!kit.fng.value55) {
                kit.vev.qug.eze("auto_off")
            }
        } else {
            if (kit.vev.hxx() != null && kit.vev.ckp <= 0 && kit.vev.egj() === false) {
                if (a && a.vka() === true) {
                    kit.vev.cmn(false);
                    kit.vev.xpj.zdr(false);
                    kit.vev.id = setTimeout(kit.vev.xoh, 300)
                }
            } else {
                kit.vev.rcy = true;
                if (kit.vev.hxx() != null && kit.vev.egj() === true) {
                    kit.vev.ckp = kit.vev.pxa.fdt("settings", "#jbu");
                    c = kit.vev.pxa.fdt("settings", "#uzf");
                    b = kit.vev.pxa.fdt("settings", "#fmc");
                    d = kit.vev.pxa.fdt("settings", "#rui");
                    kit.vev.tbd = (c > 0) ? c : 0;
                    kit.vev.mxt = (b > 0) ? b : 0;
                    kit.vev.ipv = (d > 0) ? d : 0;
                    kit.vev.met()
                }
                kit.vev.xpj.tjx.fdt("astart", "#faw", [kit.vev.rcy]);
                kit.vev.xpj.tjx.fdt("start", "#yya", [kit.vev.language.start, true]);
                if (!kit.fng.value55) {
                    kit.vev.qug.eze("auto_on")
                }
                kit.vev.agg()
            }
        }
        if (a) {
            a.trg("auto", kit.vev.rcy)
        }
    };
    this.gqm = function() {
        if (kit.kxt == 0 && kit.vev.rka === false && kit.vev.win + kit.vev.pak > 0 && !kit.vev.cuu && kit.vev.nco()) {
            if (!kit.vev.ruy) {
                kit.vev.ept()
            }
            kit.vev.neo = kit.vev.gqm
        } else {
            mtg.prototype.gqm.call(this)
        }
    };
    this.pxy = function() {
        if (kit.vev.bkh < kit.vev.iaz.length - 1) {
            if (kit.vev.bkh >= kit.vev.jsq(true)) {
                kit.vev.bkh = 0;
                while (kit.vev.bkh < kit.vev.znn()) {
                    kit.vev.bkh++
                }
            } else {
                kit.vev.bkh++
            }
        } else {
            kit.vev.bkh = 0;
            while (kit.vev.bkh < kit.vev.znn()) {
                kit.vev.bkh++
            }
        }
        kit.vev.grr(false);
        if (kit.vev.bkh >= kit.vev.jsq(true)) {
            return true
        }
        return false
    };
    this.ovg = function() {
        if (kit.vev.bkh > 0) {
            if (kit.vev.bkh <= kit.vev.znn()) {
                kit.vev.bkh = kit.vev.iaz.length;
                while (kit.vev.bkh > kit.vev.jsq(true)) {
                    kit.vev.bkh--
                }
            } else {
                kit.vev.bkh--
            }
        } else {
            kit.vev.bkh = kit.vev.iaz.length;
            while (kit.vev.bkh > kit.vev.jsq(true)) {
                kit.vev.bkh--
            }
        }
        if (kit.vev.bkh < 0) {
            kit.vev.bkh = 0
        }
        kit.vev.grr(false);
        if (kit.vev.bkh <= kit.vev.znn()) {
            return true
        }
        return false
    };
    this.huf = function() {
        var a = kit.vev.pxa.fei("topi"),
            b = kit.vev.pxa.fei("settings");
        if (kit.vev.egj() === false && kit.vev.hyk && kit.vev.win + kit.vev.pak > 0) {
            if (!kit.vev.gld) {
                kit.vev.rai = false;
                kit.vev.vlh()
            }
        } else {
            kit.vev.qug.qyk("gamble_on");
            kit.vev.qug.qyk("gamble_off");
            kit.vev.cwc = !kit.vev.cwc;
            if (kit.vev.cwc) {
                kit.vev.qug.eze("gamble_on")
            } else {
                kit.vev.qug.eze("gamble_off")
            }
            kit.vev.xpj.tjx.fdt("gamble", "#faw", [kit.vev.cwc]);
            if (a) {
                a.trg("gamble", kit.vev.cwc)
            }
            if (b) {
                b.tjx.fdt("gamble", "#gbu", [(kit.vev.cwc) ? 1 : 0])
            }
        }
    };
    this.onl = function() {
        if (!kit.vev.lim.aod()) {
            kit.vev.jej();
            if (kit.vev.pxa.fei("tops")) {
                kit.vev.unp()
            }
            if (kit.vev.lim.rcc() > 0) {
                kit.vev.tef()
            }
        } else {
            kit.vev.rcg()
        }
    };
    this.jme = function() {
        var a = kit.vev.pxa.fei("topi"),
            b = kit.vev.pxa.fei("settings"),
            c = kit.vev.pxa.fei("topb");
        kit.vev.xjg = !kit.vev.xjg;
        if (a) {
            a.trg("turbo", kit.vev.xjg)
        }
        if (c) {
            c.tjx.fdt("turbo", "#gbu", [(kit.vev.xjg) ? 1 : 0])
        }
        if (b) {
            b.tjx.fdt("turbo", "#gbu", [(kit.vev.xjg) ? 1 : 0])
        }
    };
    this.vdm = function() {
        var a = false;
        if (kit.vcj.vzn == true) {
            if (kit.vev.ynd == true) {
                kit.vev.ynd = false;
                a = kit.vcj.mtb();
                setTimeout(kit.vev.fui, 1400)
            }
        } else {
            a = kit.vcj.mtb();
            setTimeout(kit.vev.fui, 1400)
        }
    };
    this.afm = function() {
        if (kit.vev.qug.pek() && !kit.vev.udu) {
            kit.vev.uix = false;
            kit.vev.udu = true;
            kit.vev.pxa.fdt("loading", "#stop");
            setTimeout(kit.vev.tvw, 100);
            kit.vev.qug.eze("silence");
            if (kit.vcj.meu() && kit.vcj.vzn) {
                kit.vev.vdm()
            }
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                webAudioEngine.resume()
            }
        }
    };
    this.wtj = function(a) {
        if (a == kit.language.EN || a == kit.language.US) {
            return new lcp()
        } else {
            if (a == kit.language.ES || a == kit.language.CO || a == kit.language.MX || a == kit.language.CL || a == kit.language.VE) {
                return new ont()
            } else {
                if (a == kit.language.DE || a == kit.language.AT) {
                    return new nzr()
                } else {
                    if (a == kit.language.PT || a == kit.language.BR) {
                        return new rdd()
                    } else {
                        if (a == kit.language.RU) {
                            return new dvv()
                        } else {
                            if (a == kit.language.EE) {
                                return new luu()
                            } else {
                                if (a == kit.language.TR) {
                                    return new hrb()
                                } else {
                                    if (a == kit.language.CZ) {
                                        return new nlp()
                                    } else {
                                        if (a == kit.language.GR) {
                                            return new uzz()
                                        } else {
                                            if (a == kit.language.BG) {
                                                return new jgo()
                                            } else {
                                                if (a == kit.language.GE) {
                                                    return new pms()
                                                } else {
                                                    if (a == kit.language.HU) {
                                                        return new cqc()
                                                    } else {
                                                        if (a == kit.language.RO) {
                                                            return new kgl()
                                                        } else {
                                                            if (a == kit.language.FR) {
                                                                return new yhx()
                                                            } else {
                                                                if (a == kit.language.HR) {
                                                                    return new iog()
                                                                } else {
                                                                    if (a == kit.language.IT) {
                                                                        return new exv()
                                                                    } else {
                                                                        if (a == kit.language.SE) {
                                                                            return new ije()
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
    this.jfd = function() {
        var f = this.pxa.fei("stats"),
            e = this.pxa.fei("topb"),
            c = this.pxa.fei("topi"),
            b = this.pxa.fei("betsel");
        this.vrp();
        this.xpj.vxq(this.dzu, 0);
        this.jib[0] = this.language.uyd;
        this.jib[1] = this.language.pgw;
        this.xpj.vxq(this.jib, 1);
        this.ztu[0] = this.language.kqa;
        this.ztu[1] = this.language.pxe;
        this.xpj.vxq(this.ztu, 2);
        if (this.rcy) {
            this.xpj.tjx.fdt("start", "#yya", [this.language.start])
        } else {
            if (this.win + this.pak > 0 && !this.guu && !this.cuu) {
                this.xpj.tjx.fdt("start", "#yya", [this.language.ygw])
            } else {
                this.xpj.tjx.fdt("start", "#yya", [this.language.start])
            }
        }
        if (this.hxx() != null) {
            this.xpj.tjx.fdt("astart", "#yya", [this.language.nik])
        } else {
            this.xpj.tjx.fdt("astart", "#yya", [this.language.rcy])
        }
        this.xpj.tjx.fdt("gamble", "#yya", [this.language.cwc]);
        this.xpj.tjx.fdt("exit", "#yya", [(kit.fng.value50.g === true) ? this.language.quj : this.language.lvw]);
        this.xpj.tjx.fdt("bet", "#yya", [this.language.vzf]);
        this.xpj.tjx.fdt("creditd", "#wrl", [(this.rqg()) ? this.language.gvb : this.language.vkp]);
        this.xpj.tjx.fdt("betd", "#wrl", [this.language.vzf]);
        if (e) {
            e.tjx.fdt("language", "#oia", [this.language.language]);
            e.tjx.fdt("audio", "#oia", [this.language.audio]);
            e.tjx.fdt("turbo", "#oia", [this.language.xjg]);
            e.tjx.fdt("fullscreen", "#oia", [this.language.shj]);
            e.tjx.fdt("help", "#oia", [this.language.lia]);
            e.tjx.fdt("history", "#oia", [this.language.kaq]);
            e.tjx.fdt("statistic", "#oia", [this.language.zrz]);
            e.tjx.fdt("deposit", "#oia", [this.language.isr])
        }
        if (c) {
            c.oia("freeplay", this.language.gvb)
        }
        if (b) {
            b.vwd = this.language.vzf
        }
        if (f) {
            if (kit.fng.value36) {
                f.vwd = this.dcq(this.language.zrz)
            } else {
                if (kit.fng.value37) {
                    f.vwd = this.dcq(this.language.umw)
                }
            }
            if (f.tjc != null) {
                f.tjc.yya(this.language.ret, false)
            }
            if (f.dqe != null) {
                f.dqe.yya(this.language.ezg, false)
            }
        }
        this.lim.tjx.fdt("return", "#yya", [this.language.ret, false]);
        for (var d = 0, a = this.upm.length; d < a; d++) {
            if (this.upm[d].xsv()) {
                this.upm[d].vbs(true, false)
            } else {
                if (this.upm[d].tom()) {
                    this.upm[d].sxs(true, false)
                }
            }
        }
        this.pxa.fdt("settings", "#jfd", [this.language, false]);
        this.pxa.fdt("autop", "#jfd", [this.language]);
        this.igf()
    };
    this.igf = function() {
        this.gif[0] = this.language.xhj;
        this.hvq.vxq(this.gif)
    };
    this.pex = function() {
        return this.totalBet
    };
    this.hdj = function() {
        return this.wlc
    };
    this.ugx = function() {
        return this.zjw
    };
    this.jsq = function(b) {
        for (var c = 0; c < this.iaz.length; c++) {
            var a = this.iaz[c];
            if (a > this.zjw || (b && (this.vkp > 0 && this.vkp < a))) {
                return c - 1
            } else {
                if (a == this.zjw || c == this.iaz.length - 1) {
                    return c
                }
            }
        }
        return -1
    };
    this.znn = function() {
        for (var b = 0; b < this.iaz.length; b++) {
            var a = this.iaz[b];
            if (a >= this.wlc && a < this.zjw) {
                return b
            }
        }
        return -1
    };
    this.lor = function() {
        var c = this.jsq(true),
            a = this.znn(),
            b = this.iaz.length - 1;
        b = (b > c) ? c : b;
        if (b > 0) {
            while (this.iaz[b] > this.vkp) {
                b--;
                if (b <= a) {
                    break
                }
            }
        }
        this.bkh = (b < a) ? a : b;
        this.grr(false);
        if (this.pex() > this.vkp) {
            this.xpj.tjx.fdt("info", "#xjj", [this.language.alm, true])
        } else {
            if (this.pex() < this.wlc) {
                this.xpj.tjx.fdt("info", "#xjj", [this.language.xhq + " " + this.wlc, true])
            }
        }
    };
    this.grr = function(b) {
        var a = this.xpj.tjx.fei("info");
        this.totalBet = this.iaz[this.bkh];
        this.olw();
        if (a && a.bga() === false) {
            a.xjj(this.dzu[2], true)
        }
        if (this.egj() == true) {
            this.qug.eze("btn")
        } else {
            if (this.bkh == this.jsq(true)) {
                this.qug.eze("maxstep")
            } else {
                this.qug.eze("step" + (this.bkh % 12))
            }
        }
        this.pxa.fdt("betsel", "#jom", [this.bkh, true])
    };
    this.dka = function() {
        this.totalBet = this.iaz[this.bkh];
        this.olw()
    };
    this.gej = function(a) {
        kit.vev.bkh = a;
        kit.vev.dka()
    };
    this.yeq = function() {
        this.pxa.fdt("paytable", "#ovk", [this.totalBet])
    };
    this.stop = function() {
        mtg.prototype.stop.call(this);
        this.cty();
        if (this.xpj != null) {
            this.xpj.tjx.fdt("gamble", "#ktf");
            this.xpj.tjx.fdt("info", "#ick");
            this.xpj.stop()
        }
        clearTimeout(this.vuj);
        clearTimeout(this.lds);
        clearTimeout(this.ogy);
        clearTimeout(this.ati);
        clearTimeout(this.cwu);
        this.yvs();
        if (this.hvq != null && this.hvq.aod()) {
            this.hvq.juj();
            try {
                if (this.hvq instanceof oyp) {
                    this.hvq.tjx.fdt("gamble", "#ktf")
                } else {
                    this.hvq.tjx.fdt("info", "#ick")
                }
            } catch (a) {
                this.hvq.tjx.fdt("info", "#ick")
            }
        }
        this.rtv();
        if (!this.rka) {
            this.xgz()
        }
    };
    this.yvs = function() {};
    this.jnd = function() {
        var a = this.pxa.fei("winp");
        if (a && a.aod()) {
            a.dwr(false, true)
        }
    };
    this.nny = function(a) {
        this.pxa.fdt("winp", "#yya", [this.ywx(a), true])
    };
    this.mww = function(c) {
        if (!(c && this.rcy)) {
            for (var b = 0, a = this.upm.length; b < a; b++) {
                this.upm[b].vba(c)
            }
        }
    };
    this.lof = function(a) {
        this.xpj.tjx.eqb("buttons", "#dwr", [a]);
        this.xgz()
    };
    this.hjo = function() {
        this.xjx = 5;
        for (var b = 0, a = this.upm.length; b < a; b++) {
            if (this.upm[b].tom()) {
                this.xjx--
            }
        }
    };
    this.nmu = function() {
        for (var b = 0, a = this.upm.length; b < a; b++) {
            if (this.upm[b].tom()) {
                this.gil[b] = this.dzg[b]
            } else {
                this.gil[b] = 0
            }
        }
    };
    this.nsa = function(b) {
        for (var c = 0, a = this.kno.length; c < a; c++) {
            if (b == this.kno[c]) {
                return true
            }
        }
        return false
    };
    this.wiu = function(b) {
        for (var c = 0, a = this.kno.length; c < a; c++) {
            if (b == this.kno[c]) {
                if (this.tve[c]) {
                    return this.tve[c]
                }
            }
        }
        return -1
    };
    this.phn = function() {
        return false
    };
    this.czi = function() {
        if (!kit.vev.cuu && !kit.vev.ruy && !(kit.vev.guu || kit.vev.rcy) && !(kit.vev.cwc && kit.vev.hyk)) {
            if (kit.vev.win + kit.vev.pak > 0 && !kit.vev.rtw) {
                kit.vev.qug.qyk("gambleprop");
                kit.vev.qug.eze("gambleprop")
            }
        }
    };
    this.bsi = function() {
        if (!this.rka) {
            this.qug.qyk("gambleprop");
            this.rtw = true
        }
    };
    this.cmn = function(e) {
        mtg.prototype.cmn.call(this, e);
        var d = this.pxa.fei("topb"),
            c = (this.pxa.fei("tops") != null),
            a = (e && !this.rcy);
        if (this.xpj) {
            this.xpj.tjx.fdt("setting", "#vba", [a])
        }
        if (c) {
            var a = (e && !this.rcy);
            if (this.lmj && d) {
                var b = d.tjx.fei("help");
                if (b) {
                    b.vba(a && !c)
                }
            }
        }
    };
    this.qvr = function(e) {
        mtg.prototype.qvr.call(this, e);
        var d = this.pxa.fei("topb"),
            c = (this.pxa.fei("tops") != null),
            a = (e && !this.rcy);
        if (this.xpj) {
            this.xpj.tjx.fdt("setting", "#vba", [a])
        }
        if (c) {
            var a = (e && !this.rcy);
            if (this.lmj && d) {
                var b = d.tjx.fei("help");
                if (b) {
                    b.vba(a && !c)
                }
            }
        }
    };
    this.dzq = function(e) {
        mtg.prototype.dzq.call(this, e);
        var d = this.pxa.fei("topb"),
            c = (this.pxa.fei("tops") != null),
            a = (e && !this.rcy);
        if (this.xpj) {
            this.xpj.tjx.fdt("setting", "#vba", [a])
        }
        if (c) {
            var a = (e && !this.rcy);
            if (this.lmj && d) {
                var b = d.tjx.fei("help");
                if (b) {
                    b.vba(a && !c)
                }
            }
        }
    };
    this.ilt = function() {
        mtg.prototype.ilt.call(this);
        if (kit.vev.qop === true && kit.vev.fzo === true) {
            kit.vev.aow()
        }
    };
    this.tvp = function() {
        if (kit.fng.value74 != null && this.pxa.fdt("settings", "#jbu") <= 0) {
            return false
        } else {
            if ((this.state == kit.rhw.mzb.xej || this.state == kit.rhw.mzb.iwo || this.state == kit.rhw.mzb.obd || this.state == kit.rhw.mzb.zsb || this.state == kit.rhw.mzb.yxu || this.state == kit.rhw.mzb.qbz) || this.phn()) {
                if (!(this.vkp >= this.pex() && this.pex() >= this.wlc)) {
                    return false
                }
            }
        }
        return true
    };
    this.quc = function() {
        var b = this.pxa.fei("stats"),
            a = this.pxa.fei("settings");
        if (this.lim && this.lim.aod()) {
            return false
        } else {
            if (this.hvq && this.hvq.aod()) {
                return false
            } else {
                if (b && b.aod()) {
                    return false
                } else {
                    if (a && a.aod()) {
                        return false
                    }
                }
            }
        }
        return true
    };
    this.oje = function() {
        if (kit.fng.value78 && this.egj() === false) {
            if (kit.fng.value78.t === true) {
                this.pxa.fdt("topb", "#dwr", [true])
            }
            if (kit.fng.value78.b === true) {
                this.pxa.fdt("betsel", "#dwr", [true])
            }
            if (kit.fng.value78.t === true || kit.fng.value78.b === true) {
                this.wkd()
            }
            this.xgz();
            if (kit.fng.value78.d > 0) {
                this.vdr = setTimeout(this.nzc, kit.fng.value78.d)
            }
        }
    };
    this.nzc = function() {
        kit.vev.kyy();
        clearTimeout(kit.vev.vdr)
    };
    this.jej = function(b) {
        var a = this.pxa.fei("betsel");
        if (a && a.aod() && a.vka()) {
            this.kyy(b)
        } else {
            mtg.prototype.jej.call(this, b)
        }
    };
    this.wkd = function() {
        if (this.canvas) {
            this.canvas.onmousemove = function(a) {
                kit.vev.okq(a)
            };
            this.canvas.ontouchmove = function(a) {
                kit.vev.okq(a)
            }
        }
    };
    this.cty = function() {
        if (this.canvas) {
            this.canvas.onmousemove = null;
            this.canvas.ontouchmove = null
        }
    };
    this.okq = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        var b = 0,
            g = 0,
            c = false,
            e = this.pxa.fei("topb"),
            a = this.pxa.fei("betsel");
        if (d.touches) {
            var f = d.touches[0];
            c = true;
            if (!this.dlf) {
                b = f.pageX - this.offsetLeft;
                g = f.pageY - this.offsetTop
            } else {
                b = Math.round((f.pageX - this.offsetLeft) / this.seb);
                g = Math.round((f.pageY - this.offsetTop) / this.aax)
            }
        } else {
            if (!this.dlf) {
                b = d.pageX - this.offsetLeft;
                g = d.pageY - this.offsetTop
            } else {
                b = Math.round((d.pageX - this.offsetLeft) / this.seb);
                g = Math.round((d.pageY - this.offsetTop) / this.aax)
            }
        }
        if (a && a.aod()) {
            if (a.lab(b, g, c)) {
                return
            }
        }
        if (e && e.aod()) {
            e.lab(b, g)
        }
    };
    this.afp = function() {
        if (this.vuj >= 0) {
            return
        }
        this.pxa.fdt("betsel", "#fec");
        this.qug.qyk("panel_in");
        this.qug.eze("panel_in");
        this.cmn(false);
        this.gpj = new Date().getTime();
        this.iof = 0;
        this.vuj = setTimeout(this.yeg, 89)
    };
    this.kyy = function(b) {
        var c = this.pxa.fei("topb"),
            a = this.pxa.fei("betsel");
        if (this.vuj >= 0 || !((c && c.aod()) || (a && a.aod()))) {
            return
        }
        if (b == this.ovg || b == this.pxy) {
            b();
            return
        }
        if (c) {
            c.oqe()
        }
        if (a) {
            a.oqe()
        }
        this.qug.qyk("panel_out");
        this.qug.eze("panel_out");
        this.tvy = b;
        this.gpj = new Date().getTime();
        this.iof = 0;
        this.vuj = setTimeout(this.kqu, 89)
    };
    this.yeg = function() {
        var a = kit.vev.pxa.fei("betsel"),
            d = (!a || (a && !a.lif())),
            c = 0,
            b = 0;
        kit.vev.xgz();
        kit.vev.iof++;
        if (d) {
            kit.vev.wkd();
            clearTimeout(kit.vev.vuj);
            kit.vev.vuj = -1
        } else {
            c = new Date().getTime();
            b = 89 + (kit.vev.iof * 89 - (c - kit.vev.gpj));
            kit.vev.vuj = setTimeout(kit.vev.yeg, b)
        }
    };
    this.kqu = function() {
        var a = kit.vev.pxa.fei("betsel"),
            e = kit.vev.pxa.fei("topb"),
            f = (!a || (a && !a.lif())),
            b = (!e || (e && !e.lif())),
            d = 0,
            c = 0;
        kit.vev.xgz();
        kit.vev.iof++;
        if (f && b) {
            kit.vev.cty();
            clearTimeout(kit.vev.vuj);
            if (kit.vev.quc()) {
                kit.vev.cmn(true)
            }
            kit.vev.vuj = -1;
            if (typeof kit.vev.tvy === "function") {
                kit.vev.tvy();
                kit.vev.tvy = null
            }
        } else {
            d = new Date().getTime();
            c = 89 + (kit.vev.iof * 89 - (d - kit.vev.gpj));
            kit.vev.vuj = setTimeout(kit.vev.kqu, c)
        }
    };
    this.tvy = function() {};
    this.afg = function() {
        return (this.vkp == 0 && (this.state == kit.rhw.mzb.xej || (this.state == kit.rhw.mzb.iwo && (this.win + this.pak) == 0) || this.state == kit.rhw.mzb.obd || (this.state == kit.rhw.mzb.zsb && (this.win + this.pak) == 0) || this.state == kit.rhw.mzb.yxu || (this.state == kit.rhw.mzb.qbz && (this.win + this.pak) == 0) || (this.state == kit.rhw.mzb.zqp && this.qcv == true)))
    };
    this.zun = function() {
        if (kit.vev.xkq != "" && kit.vev.rqg() === false) {
            kit.vev.xpj.tjx.fdt("info", "#nnc");
            kit.vev.xpj.tjx.fdt("info", "#fnv", [0])
        }
    };
    this.izx = function() {
        if (this.state == kit.rhw.mzb.iwo && this.eih > 0) {
            this.qug.qyk("win" + (this.eih - 1))
        }
        this.xpj.tjx.fdt("info", "#ick");
        this.xpj.zdr(false);
        this.cmn(false);
        this.lof(false);
        this.pxa.fdt("settings", "#yen");
        this.xpj.tjx.fdt("setting", "#faw", [this.pxa.fdt("settings", "#aod")]);
        this.pxa.fdt("stats", "#dwr", [true]);
        this.xgz()
    };
    this.qjc = function() {
        this.pxa.fdt("stats", "#zdr", [false]);
        this.pxa.fdt("stats", "#dwr", [false]);
        if (this.state != kit.rhw.mzb.zqp && this.state != kit.rhw.mzb.zyo) {
            this.xpj.zdr(true)
        } else {
            this.xpj.lvf(true)
        }
        this.cmn(true);
        this.lof(true);
        this.xgz();
        this.xpj.tjx.fdt("info", "#fnv", [0])
    };
    this.zvp = function() {
        var a = this.xpj.tjx.fdt("bet", "#vka");
        this.jnd();
        if (this.state == kit.rhw.mzb.iwo && this.eih > 0) {
            this.qug.qyk("win" + (this.eih - 1))
        }
        this.xpj.tjx.fdt("info", "#ick");
        this.lof(false);
        this.xpj.tjx.eqb("settings", "#dwr", [true]);
        this.cmn(false);
        this.xpj.zdr(false);
        this.xpj.vxl(true);
        this.pxa.fdt("settings", "#wyc", [a, true])
    };
    this.jmr = function() {
        this.pxa.fdt("settings", "#yen");
        if (this.state != kit.rhw.mzb.zqp && this.state != kit.rhw.mzb.zyo) {
            this.xpj.zdr(true)
        } else {
            this.xpj.lvf(true)
        }
        this.cmn(true);
        this.lof(true);
        this.xpj.tjx.fdt("info", "#fnv", [0])
    };
    this.xoh = function() {
        kit.vev.cmn(false);
        kit.vev.xpj.zdr(false);
        kit.vev.xpj.tjx.fdt("info", "#nnc");
        kit.vev.pxa.fdt("autop", "#wyc")
    };
    this.gkg = function() {
        var a = kit.vev.pxa.fei("autop");
        if (a) {
            kit.vev.ckp = a.jbu();
            kit.vev.tbd = (a.uzf() > 0) ? a.uzf() : 0;
            kit.vev.mxt = (a.fmc() > 0) ? a.fmc() : 0;
            kit.vev.ipv = (a.rui() > 0) ? a.rui() : 0;
            if (kit.vev.ckp <= 0) {
                kit.vev.cmn(true);
                kit.vev.xpj.zdr(true);
                kit.vev.xpj.tjx.fdt("info", "#swa")
            } else {
                kit.vev.xpj.tjx.fdt("astart", "#fvx", [(kit.vev.ckp >= 0) ? kit.vev.ckp : "---"])
            }
        }
    };
    this.met = function() {
        if (this.hxx() != null && this.ckp >= 0) {
            this.ckp -= 1;
            this.xpj.tjx.fdt("astart", "#fvx", [(this.ckp >= 0) ? this.ckp : "---", true]);
            this.xpj.tjx.fdt("start", "#fvx", [(this.ckp >= 0) ? this.ckp : "---", true])
        }
    };
    this.qxw = function() {
        if (kit.vev.hxx() != null) {
            kit.vev.ckp = 0;
            kit.vev.tbd = 0;
            kit.vev.mxt = 0;
            kit.vev.ipv = 0;
            kit.vev.xpj.tjx.fdt("astart", "#fvx", ["---"]);
            kit.vev.xpj.tjx.fdt("start", "#fvx", ["---"])
        }
        kit.vev.xpj.tjx.fdt("start", "#kqv");
        kit.vev.pxa.fdt("autop", "#lkd");
        kit.vev.pxa.fdt("settings", "#qxw")
    };
    this.aow = function() {
        var a = kit.vev.pxa.fei("topi");
        kit.vev.rcy = false;
        kit.vev.qxw();
        kit.vev.xpj.tjx.fdt("astart", "#faw", [kit.vev.rcy]);
        if (a) {
            a.trg("auto", kit.vev.rcy)
        }
    };
    this.wpg = function() {
        kit.vev.hjo();
        var a = ((kit.vev.win + kit.vev.pak > 0 && kit.vev.cuu || kit.vev.win + kit.vev.pak === 0) && (kit.vev.state == kit.rhw.mzb.xej || kit.vev.state == kit.rhw.mzb.iwo || kit.vev.state == kit.rhw.mzb.obd || kit.vev.state == kit.rhw.mzb.zsb || kit.vev.state == kit.rhw.mzb.yxu || kit.vev.state == kit.rhw.mzb.qbz) || (kit.vev.state == kit.rhw.mzb.zqp && kit.vev.gox == 2 && kit.vev.yrp == 2 && kit.vev.qcv && (kit.vev.xjx == 5 || kit.vev.totalBet != kit.vev.ccc)) || kit.vev.phn());
        if (kit.vev.hxx() != null && a === true && (kit.vev.ckp <= 0 || (kit.vev.vkp - kit.vev.pex() < kit.vev.tbd) || (kit.vev.mxt > 0 && kit.vev.vkp >= kit.vev.mxt) || (kit.vev.ipv > 0 && kit.vev.win > kit.vev.ipv))) {
            if (kit.vev.rcy === true) {
                kit.vev.cht()
            }
            kit.vev.cmn(true);
            kit.vev.xpj.tjx.fdt("info", "#swa");
            kit.vev.xpj.zdr(true)
        } else {
            kit.vev.agg()
        }
    }
}
mtg.prototype = new kcd;

function ref() {
    this.bqe = null;
    this.fmy = [];
    this.ojw = [];
    this.yas = 0;
    this.hwf = 30;
    this.ozm = 0;
    this.yuz = 0;
    this.wez = function(a) {
        try {
            this.ozm = a.xpx;
            this.yuz = a.zqu;
            this.hwf = a.nib
        } catch (b) {
            console.error(b)
        }
    };
    this.ghr = function(d, a, c) {
        this.ojw = [];
        for (var b = 0; b < a; b++) {
            this.ojw[a - 1 - b] = vyd(d[b])
        }
        if (c) {
            this.ojw[a] = -1
        }
    };
    this.xgz = function() {
        if (!this.aod()) {
            return
        }
        var b = this.context2D;
        b.save();
        if (this.bqe != null) {
            for (var c = 0, a = this.ojw.length; c < a; c++) {
                if (this.ojw[c] < 0) {
                    b.drawImage(this.bqe, this.bqe.width - this.ozm, 0, this.ozm, this.yuz, this.x + this.hwf * c, this.y, this.ozm, this.yuz)
                } else {
                    b.drawImage(this.bqe, this.ozm * this.fmy[this.ojw[c]], 0, this.ozm, this.yuz, this.x + this.hwf * c, this.y, this.ozm, this.yuz)
                }
            }
        }
        b.restore()
    }
}
ref.prototype = new noe;

function fwf() {
    this.fmy = [];
    this.bqe = new Image();
    this.ojw = [];
    this.ozm = 0;
    this.yuz = 0;
    this.ndh = 36;
    this.wjt = 64;
    this.wez = function(a) {
        try {
            this.wjt = a.uww;
            this.ndh = a.mrl;
            this.ozm = a.xpx;
            this.yuz = a.zqu
        } catch (b) {
            console.error(b)
        }
    };
    this.ghr = function(b) {
        for (var a = 0; a < 5; a++) {
            this.ojw[a] = vyd(b[a])
        }
    };
    this.xgz = function() {
        if (!this.aod()) {
            return
        }
        var a = this.context2D;
        a.save();
        for (var b = 0; b < this.ojw.length; b++) {
            a.drawImage(this.bqe, this.ozm * this.fmy[this.ojw[b]], 0, this.ndh, this.wjt, this.x + this.ndh * b, this.y, this.ndh, this.wjt)
        }
        a.restore()
    }
}
fwf.prototype = new noe;

function yut() {
    this.fto = {
        bgt: 32,
        hno: -1,
        value: "SPACE",
        omx: null
    };
    this.mfg = {
        bgt: 8,
        hno: -1,
        value: "BACKSPACE",
        omx: null
    };
    this.twk = {
        bgt: 38,
        hno: -1,
        value: "\u25B2",
        omx: null
    };
    this.jbg = {
        bgt: 40,
        hno: -1,
        value: "\u25BC",
        omx: null
    }
}
yut.prototype = new qrz;

function hiq(g, c, f, e, i, a, d, b) {
    this.aif = g;
    this.xnx = f;
    this.lzn = e;
    this.vcb = i;
    this.kyz = c;
    this.ijv = a;
    this.umu = d;
    this.edf = b;
    this.caz = 1;
    this.gox = 2;
    this.yrp = 1;
    this.fxs = 0;
    this.aig = 0;
    this.ayp = 0;
    this.ofx = [];
    this.sub = function(k) {
        if (this.uue == 0) {
            this.caz = this.bwk(k);
            this.gox = this.bwk(k);
            this.yrp = this.bwk(k);
            this.fxs = this.bwk(k);
            this.aig = this.ydz(k);
            this.ayp = this.ydz(k);
            for (var j = 0; j < 4; j++) {
                this.ofx[j] = this.ydz(k)
            }
        } else {
            if (this.uue == 1) {
                this.fxs = this.bwk(k);
                this.aig = this.ydz(k);
                this.ayp = this.ydz(k);
                for (var j = 0; j < 4; j++) {
                    this.ofx[j] = this.ydz(k)
                }
            }
        }
        hiq.prototype.sub.call(this, k)
    }
}
hiq.prototype = new jdz;

function xnh() {
    this.fbq = function(a, b) {
        this.aif = b;
        this.sdc = a;
        return this
    };
    this.connect = function(c, f, e, g, a, d, b) {
        this.xnx = f;
        this.lzn = e;
        this.vcb = g;
        this.kyz = c;
        this.umu = d;
        this.edf = b;
        this.qis = new hiq(this.aif, c, f, e, g, a, d, b);
        this.qis.fbq(this)
    };
    this.xif = function() {
        this.sdc.gox = this.qis.gox;
        this.sdc.yrp = this.qis.yrp;
        this.sdc.fxs = this.qis.fxs;
        this.sdc.aig = this.qis.aig;
        this.sdc.ayp = this.qis.ayp;
        for (var b = 0, a = this.qis.ofx.length; b < a; b++) {
            this.sdc.ofx[b] = this.qis.ofx[b]
        }
        xnh.prototype.xif.call(this)
    }
}
xnh.prototype = new sgi;

function tgr() {
    this.vwd = null;
    this.dxo = 40;
    this.cfl = 0;
    this.wez = function(a) {
        tgr.prototype.wez.call(this, a);
        try {
            this.dxo = a.fip;
            this.cfl = a.tnv
        } catch (b) {
            console.error(b)
        }
    };
    this.wrl = function(a, b) {
        this.vwd = a;
        if (b && b === true && this.context2D != null) {
            this.dwr(true, true)
        }
    };
    this.xgz = function() {
        if (!this.aod() || (this.parent === kit.vev && !this.parent.avk())) {
            return
        }
        var b = this.context2D,
            a = (this.hlo != null) ? 0 : this.x,
            c = (this.hlo != null) ? 0 : this.y;
        b.save();
        if (this.apy && this.bqe != null) {
            b.drawImage(this.bqe, a, c)
        }
        if (this.ikg != null) {
            kit.vcj.bom(b, this.ikg, this.uxg, a + this.hwf, c + this.mgv, this.width, this.height, this.bnn, this.phy, this.yxa, this.pnd, this.poh)
        }
        if (this.vwd != null) {
            kit.vcj.bom(b, this.vwd, this.uxg, a + this.hwf, c + this.cfl, this.width, this.height, this.bnn, this.dxo, this.yxa, this.pnd, this.poh)
        }
        b.restore();
        if (this.evc && this.hlo) {
            this.evc.drawImage(this.hlo, this.x, this.y)
        }
    }
}
tgr.prototype = new fcs;

function vyd(a) {
    var c = iib(a);
    var b = kwv(a);
    return c + b * 13
}

function iib(a) {
    return a >> 2
}

function kwv(a) {
    return a & 3
}

function itc() {
    var b = this;
    var a = 2;
    var c = 3;
    this.bqe = null;
    this.fmy = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38];
    this.uep = 0;
    this.upm = [];
    this.tjx = null;
    this.kye = false;
    this.soa = false;
    this.gkt = 10;
    this.iof = 0;
    this.owo = 0;
    this.fkm = 0;
    this.dup = 0;
    this.foo = 0;
    this.gpj = 0;
    this.xup = false;
    this.sjq = 0;
    this.gbn = 0;
    this.xal = false;
    this.duc = [340, 280, 220, 180];
    this.cra = null;
    this.lci = null;
    this.qml = null;
    this.usi = "yellow";
    this.bnn = "verdana";
    this.yxa = "bold";
    this.osb = new dho();
    this.dmh = new dho();
    this.phy = 16;
    this.fbq = function(d, f, e) {
        itc.prototype.fbq.call(this, d, f, e);
        this.lsb()
    };
    this.bih = function(f, d) {
        try {
            this.coa(f);
            this.rqt(f);
            this.stb(f);
            this.uza(f, d);
            this.han(f, d);
            this.qgh(f);
            this.qzo(f)
        } catch (g) {
            console.error(g)
        }
    };
    this.wez = function(m) {
        try {
            var r = this.tjx.nlq("bbuttons"),
                q = this.tjx.nlq("sbuttons"),
                l = this.tjx.nlq("displays"),
                j = this.tjx.fei("card"),
                g = this.tjx.fei("info"),
                p = this.tjx.fei("history"),
                f = this.tjx.fei("winp"),
                d = this.tjx.fei("sevenp");
            for (var k = 0, n = r.length; k < n; k++) {
                r[k].wez(m.ufm)
            }
            for (var k = 0, n = q.length; k < n; k++) {
                q[k].wez(m.tag)
            }
            for (var k = 0, n = l.length; k < n; k++) {
                l[k].wez(m.display)
            }
            if (j) {
                j.mya(m.hqs.gst);
                j.wez(m.hqs)
            }
            if (g) {
                g.mya(m.brk.gst);
                g.wez(m.brk)
            }
            if (f) {
                f.mya(m.tvl.gst);
                f.wez(m.tvl)
            }
            if (p) {
                p.mya(m.kaq.gst);
                p.wez(m.kaq)
            }
            if (d) {
                d.mya(m.qiq.gst);
                d.wez(m.qiq)
            }
            this.tjx.fdt("collect", "#mya", [m.mtk]);
            this.tjx.fdt("half", "#mya", [m.cik]);
            this.tjx.fdt("lowred", "#mya", [m.xeg]);
            this.tjx.fdt("highblack", "#mya", [m.xmw]);
            this.tjx.fdt("creditd", "#mya", [m.ady]);
            this.tjx.fdt("wind", "#mya", [m.gex]);
            this.osb = m.btq;
            this.dmh = m.sld;
            this.phy = m.fontSize
        } catch (o) {
            console.error(o)
        }
    };
    this.goa = function(d) {
        try {
            var p = this.tjx.nlq("buttons"),
                m = this.tjx.nlq("displays"),
                k = this.tjx.fei("card"),
                j = this.tjx.fei("info"),
                g = this.tjx.fei("winp"),
                f = this.tjx.fei("sevenp");
            this.cra = d.backgroundColor;
            this.lci = d.cls;
            this.qml = d.poj;
            this.usi = d.lkk;
            this.bnn = d.font;
            this.yxa = d.gas;
            for (var l = 0, n = p.length; l < n; l++) {
                p[l].goa(d.hpn)
            }
            for (var l = 0, n = m.length; l < n; l++) {
                m[l].goa(d.display)
            }
            if (k) {
                k.goa(d.hqs)
            }
            if (j) {
                j.goa(d.brk)
            }
            if (g) {
                g.goa(d.tvl)
            }
            if (f) {
                f.goa(d.qiq)
            }
        } catch (o) {
            console.error(o)
        }
    };
    this.fwl = function(o, n) {
        var l = o - this.x,
            k = n - this.y,
            m = this.tjx.nlq("buttons");
        for (var f = 0, g = m.length; f < g; f++) {
            var d = m[f];
            if (l >= d.x && l <= d.x + d.width && k >= d.y && k <= d.y + d.height && d.aod(true)) {
                if (d.vka() && !d.wob()) {
                    d.dan(true, false, true);
                    this.xgz();
                    this.parent.qug.qyk("btn");
                    this.parent.qug.eze("btn");
                    d.ncb();
                    for (var e = 0; e < g; e++) {
                        m[e].awu(true)
                    }
                    return true
                }
            }
        }
        return false
    };
    this.qua = function() {
        var g = this.tjx.nlq("buttons");
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.gqn() == true) {
                e.dan(false, true);
                return true
            }
        }
        return false
    };
    this.xba = function(l) {
        var k = this.tjx.nlq("buttons");
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (f.uvs == l) {
                if (f.vka() && !f.wob()) {
                    f.dan(true, false, true);
                    this.xgz();
                    this.parent.qug.qyk("btn");
                    this.parent.qug.eze("btn");
                    f.ncb();
                    for (var e = 0; e < d; e++) {
                        k[e].awu(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.hrl = function() {
        var g = this.tjx.nlq("buttons");
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.gqn() == true) {
                e.dan(false, true);
                return true
            }
        }
        return false
    };
    this.mqb = function(g, e, d, f) {
        this.tjx.fdt("creditd", "#yya", [this.parent.ybn(g), false]);
        if (!this.parent.rka) {
            this.tjx.fdt("wind", "#yya", [this.parent.ybn(e + this.parent.ayp), false])
        } else {
            this.tjx.fdt("wind", "#yya", [this.parent.ybn(e), false])
        }
        this.tjx.fdt("winp", "#yya", [this.parent.ywx(e), false]);
        this.tjx.fdt("winp", "#wrl", [this.parent.vda[d - 1], false]);
        this.lbl(this.parent.aig);
        if (f && f === true) {
            this.xgz()
        }
    };
    this.mmd = function(e, d) {
        this.upm = e;
        this.tjx.fdt("history", "#ghr", [e]);
        this.tjx.fdt("card", "#ghr", [e, d, false]);
        this.uep = d
    };
    this.lbl = function(g) {
        var e = this.tjx.fei("sevenp");
        if (e) {
            for (var f = 0; f < g; f++) {
                e.cox[f] = true
            }
            for (var f = g, d = e.cox.length; f < d; f++) {
                e.cox[f] = false
            }
        }
    };
    this.jij = function(d) {
        if (d == c) {
            this.xal = false
        } else {
            this.xal = true
        }
    };
    this.ojp = function() {
        if (this.parent.ayp > 0) {
            this.parent.qug.eze("gamblewin7")
        } else {
            if (this.parent.win > 0) {
                this.parent.qug.eze("gamblewin")
            }
        }
        setTimeout(b.jjw, 1000)
    };
    this.jjw = function() {
        b.xgz();
        b.vox();
        b.zdr(true)
    };
    this.wyc = function() {
        this.tjx.fdt("info", "#dwr", [true]);
        this.dwr(true, true);
        this.vox();
        this.tjx.fdt("info", "#fnv", [0])
    };
    this.vox = function() {
        this.tjx.fdt("card", "#ghr", [this.upm, this.uep, true]);
        this.xgz();
        this.xal = true;
        this.sjq = setInterval(b.mqe, (b.uep < 3) ? b.duc[b.uep] : b.duc[3])
    };
    this.mqe = function() {
        b.xal = !b.xal;
        b.tjx.fdt("highblack", "#faw", [b.xal]);
        b.tjx.fdt("lowred", "#faw", [!b.xal]);
        if (b.xal) {
            b.parent.qug.eze("blink1");
            b.parent.qug.qyk("blink2")
        } else {
            b.parent.qug.eze("blink2");
            b.parent.qug.qyk("blink1")
        }
        b.omp()
    };
    this.juj = function() {
        clearInterval(this.sjq);
        this.parent.qug.qyk("blink1");
        this.parent.qug.qyk("blink2");
        this.tjx.fdt("highblack", "#faw", [false]);
        this.tjx.fdt("lowred", "#faw", [false])
    };
    this.vxq = function(e, d) {
        this.tjx.fdt("info", "#xzh", [d]);
        this.tjx.fdt("info", "#qaz", [e, d])
    };
    this.lsb = function() {
        this.tjx = new itm();
        this.tjx.fbq();
        this.tjx.kbh("buttons");
        this.tjx.kbh("displays");
        this.tjx.kbh("bbuttons");
        this.tjx.kbh("sbuttons")
    };
    this.coa = function(d) {
        this.tjx.dcj("collect", this.nvt(d.mtk, this.parent.language.ygw, this.parent.qug.uyv("btn"), (!this.parent.rka) ? this.parent.mum.fto : null, this.ker, d.ufm), ["buttons", "bbuttons"]);
        this.tjx.dcj("half", this.nvt(d.cik, this.parent.language.poo, this.parent.qug.uyv("btn_s"), (!this.parent.rka) ? this.parent.mum.mfg : null, this.xyh, d.tag), ["buttons", "sbuttons"]);
        this.tjx.dcj("lowred", this.nvt(d.xeg, this.parent.language.usj, this.parent.qug.uyv("btn_s"), (!this.parent.rka) ? this.parent.mum.jbg : null, this.rnl, d.tag), ["buttons", "sbuttons"]);
        this.tjx.dcj("highblack", this.nvt(d.xmw, this.parent.language.krl, this.parent.qug.uyv("btn_s"), (!this.parent.rka) ? this.parent.mum.twk : null, this.erb, d.tag), ["buttons", "sbuttons"])
    };
    this.rqt = function(d) {
        this.tjx.dcj("creditd", this.qcw(d.ady, (this.parent.rqg()) ? this.parent.language.gvb : this.parent.language.vkp, this.parent.ybn(this.parent.vkp), d.display), ["displays"]);
        this.tjx.dcj("wind", this.qcw(d.gex, this.parent.language.win, this.parent.ybn(this.parent.win), d.display), ["displays"])
    };
    this.stb = function(d) {
        var e = new fnr();
        e.fbq(d.brk.gst, this.context2D);
        e.parent = this;
        e.wez(d.brk);
        this.tjx.dcj("info", e)
    };
    this.uza = function(f, d) {
        var e = new ref();
        e.fbq(f.hqs.gst, this.context2D);
        e.bqe = d;
        e.fmy = this.fmy;
        e.wez(f.hqs);
        this.tjx.dcj("card", e)
    };
    this.han = function(e, d) {
        var f = new fwf();
        f.fbq(e.kaq.gst, this.context2D);
        f.bqe = d;
        f.fmy = this.fmy;
        f.wez(e.kaq);
        this.tjx.dcj("history", f)
    };
    this.qzo = function(e) {
        var d = new eay();
        d.fbq(e.qiq.gst, null, this.context2D);
        d.parent = this;
        d.opi.push(this.parent.qug.uyv("seven1"));
        d.opi.push(this.parent.qug.uyv("seven2"));
        d.opi.push(this.parent.qug.uyv("seven3"));
        d.opi.push(this.parent.qug.uyv("seven4"));
        d.ggy = true;
        d.tgh = this.parent.ofx;
        d.wez(e.qiq);
        this.tjx.dcj("sevenp", d)
    };
    this.qgh = function(d) {
        var e = new tgr();
        e.fbq(d.tvl.gst, null, this.context2D, this.parent.qug.uyv("winpanel"), "");
        e.parent = this;
        e.wez(d.tvl);
        this.tjx.dcj("winp", e)
    };
    this.nvt = function(g, k, j, e, i, f) {
        var d = new yxf();
        d.fbq(g, this.context2D, null, j, null, k);
        d.parent = this;
        d.ncb = i;
        d.wez(f);
        if (e) {
            d.uvs = e.bgt
        }
        return d
    };
    this.qcw = function(e, i, g, d) {
        var f = new pjz();
        f.fbq(e, this.context2D, null, i, g);
        f.parent = this;
        f.bqe = this.parent.qug.uyv("display_effect");
        f.wez(d);
        return f
    };
    this.zdr = function(d) {
        this.tjx.eqb("buttons", "#vba", [d])
    };
    this.ker = function() {
        b.zdr(false);
        b.parent.pni.ygw()
    };
    this.xyh = function() {
        b.zdr(false);
        b.parent.pni.poo()
    };
    this.rnl = function() {
        b.zdr(false);
        b.xal = false;
        b.juj();
        b.parent.pni.cwc(c)
    };
    this.erb = function() {
        b.zdr(false);
        b.xal = true;
        b.juj();
        b.parent.pni.cwc(a)
    };
    this.tas = function() {
        b.tjx.fdt("info", "#ick");
        setTimeout(b.cnm, 10)
    };
    this.cnm = function() {
        b.kye = false;
        b.soa = (b.parent.win + b.parent.ayp > b.parent.totalBet) ? true : false;
        b.gkt = 10;
        b.iof = 0;
        b.owo = b.parent.win + b.parent.ayp;
        b.fkm = b.parent.vkp - (b.parent.win + b.parent.ayp);
        b.dup = 0;
        b.foo = b.parent.win + b.parent.ayp;
        b.gpj = new Date().getTime();
        b.xup = true;
        var d = 0;
        if (b.parent.ayp > 0) {
            b.nny(b.parent.ywx(b.parent.win + b.parent.ayp));
            d = 400
        }
        b.gbn = setTimeout(b.eei, b.parent.itx + d)
    };
    this.eei = function() {
        var f = Math.round(b.foo / b.gkt),
            d = 0,
            e = 0;
        if (b.foo > 0) {
            if (!b.kye) {
                b.parent.qug.qyk("collect");
                b.parent.qug.eze("collect");
                b.kye = true
            }
            b.foo -= f;
            if (b.foo < 0) {
                b.foo = 0
            }
            b.tjx.fdt("wind", "#yya", [b.parent.ybn(b.owo - ((b.parent.win + b.parent.ayp) - b.foo)), true]);
            b.tjx.fdt("creditd", "#yya", [b.parent.ybn(b.fkm + ((b.parent.win + b.parent.ayp) - b.foo)), true]);
            b.nny(b.parent.ywx(b.owo - ((b.parent.win + b.parent.ayp) - b.foo)));
            b.iof++;
            b.gkt -= 1;
            d = b.parent.egl;
            e = new Date().getTime();
            d = b.parent.itx + (b.iof * b.parent.itx - (e - b.gpj));
            b.gbn = setTimeout(b.eei, d)
        } else {
            b.parent.qug.qyk("collect");
            b.parent.qug.eze("collectend");
            b.xup = false;
            clearTimeout(b.gbn);
            setTimeout(b.parent.ywb, 100)
        }
    };
    this.nny = function(d) {
        this.tjx.fdt("winp", "#yya", [d, true])
    };
    this.xgz = function(p, n, q, l) {
        if (!this.aod() || !this.parent.avk()) {
            return
        }
        var g = (p != null && n != null && q != null && l != null),
            r = this.context2D,
            f = this.hlo,
            o = null,
            d = this.tjx.jfj(),
            e = this.tjx.fei("sevenp"),
            k = this.parent.qug.uyv("btn_back");
        r.save();
        if (g) {
            r.beginPath();
            r.rect(p, n, q, l);
            r.closePath();
            r.clip()
        }
        if (k) {
            r.drawImage(this.bqe, (this.osb.x == 0) ? this.osb.width : 0, this.height - k.height);
            if (e) {
                e.qqu(f)
            }
            o = r.createLinearGradient(this.osb.x, this.osb.y, this.osb.x + this.osb.width, this.osb.y);
            o.addColorStop(0.2, this.lci);
            o.addColorStop(1, this.qml);
            r.fillStyle = o;
            r.save();
            if (this.parent.ily === kit.ekl.hai) {
                r.translate(this.osb.width / 2, this.osb.height / 2);
                r.rotate(Math.PI);
                r.translate(-this.osb.width / 2, -this.osb.height / 2)
            }
            r.fillRect(this.osb.x, this.osb.y, this.osb.width, this.osb.height);
            r.drawImage(k, this.osb.x, this.osb.y, this.osb.width, this.osb.height);
            r.restore()
        } else {
            r.drawImage(this.bqe, 0, 0);
            if (e) {
                e.qqu(f)
            }
            if (this.cra != null) {
                kit.vcj.zrw(r, this.osb.x, this.osb.y, this.osb.width, this.osb.height, this.cra, 1)
            }
        }
        if (!(this.parent.rka && (this.parent.state == kit.rhw.mzb.obd || this.parent.state == kit.rhw.mzb.dco || this.parent.state == kit.rhw.mzb.yxu))) {
            this.emi(r)
        }
        for (var j = 0, m = d.length; j < m; j++) {
            d[j].xgz()
        }
        r.restore();
        if (this.evc && this.hlo) {
            if (g) {
                this.evc.drawImage(this.hlo, p, n, q, l, this.x + p, this.y + n, q, l)
            } else {
                this.evc.drawImage(this.hlo, this.x, this.y)
            }
        }
    };
    this.omp = function() {
        var d = this.context2D,
            e = this.parent.qug.uyv("btn_back");
        d.save();
        d.beginPath();
        d.rect(this.dmh.x, this.dmh.y, this.dmh.width, this.dmh.height);
        d.closePath();
        d.clip();
        if (e) {
            d.drawImage(this.bqe, (this.osb.x == 0) ? this.osb.width : 0, this.height - e.height)
        } else {
            d.drawImage(this.bqe, 0, 0)
        }
        this.emi(d);
        d.restore();
        if (this.evc && this.hlo) {
            this.evc.drawImage(this.hlo, this.x, this.y)
        }
    };
    this.emi = function(d) {
        var e = (this.xal) ? this.parent.language.khd : this.parent.language.uhv;
        if (this.xal) {
            kit.vcj.bom(d, e, this.usi, this.dmh.x, this.dmh.y, this.dmh.width, this.phy, this.bnn, this.phy, this.yxa)
        } else {
            kit.vcj.bom(d, e, this.usi, this.dmh.x, this.dmh.y + this.dmh.height - this.phy - 2, this.dmh.width, this.phy, this.bnn, this.phy, this.yxa)
        }
    }
}
itc.prototype = new noe;

function eay() {
    this.opi = [];
    this.tgh = [];
    this.cox = [false, false, false, false];
    this.wuy = 500;
    this.ggy = false;
    this.ycb = null;
    this.gqo = null;
    this.vft = 1;
    this.bnn = "arial";
    this.yxa = "bold";
    this.usi = "red";
    this.phy = 14;
    this.qsq = [];
    this.goa = function(a) {
        try {
            this.bnn = a.font;
            this.yxa = a.gas, this.usi = a.lkk
        } catch (b) {
            console.error(b)
        }
    };
    this.wez = function(a) {
        try {
            this.phy = a.fontSize;
            this.qsq = a.vic
        } catch (b) {
            console.error(b)
        }
    };
    this.qqu = function(a) {
        if (this.ycb == null) {
            this.ycb = document.createElement("canvas");
            this.ycb.width = this.width;
            this.ycb.height = this.height;
            this.gqo = this.ycb.getContext("2d");
            this.gqo.save();
            this.gqo.drawImage(a, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height);
            this.gqo.restore()
        }
    };
    this.ifc = function(a, b) {
        this.vft = a;
        if (b && b === true) {
            this.xgz()
        }
    };
    this.xgz = function() {
        if (!this.aod() || (this.parent === kit.vev && !this.parent.avk())) {
            return
        }
        var c = this.context2D,
            b = (this.hlo != null) ? 0 : this.x,
            e = (this.hlo != null) ? 0 : this.y;
        c.save();
        if (this._backgroundBackbuffer != null) {
            c.drawImage(this.ycb, b, e)
        }
        for (var d = 0, a = this.opi.length; d < a; d++) {
            if (this.opi[d] != null) {
                if (this.cox[d]) {
                    c.drawImage(this.opi[d], 0, this.opi[d].height / 2, this.opi[d].width, this.opi[d].height / 2, b + this.qsq[d].x, e + this.qsq[d].y, this.qsq[d].width, this.qsq[d].height);
                    if (this.ggy) {
                        kit.vcj.bom(c, kit.vev.ywx(this.tgh[d] * this.vft), this.usi, b + this.qsq[d].x, e + this.qsq[d].y + this.qsq[d].height, this.qsq[d].width, this.phy, this.bnn, this.phy, this.yxa)
                    }
                } else {
                    c.drawImage(this.opi[d], 0, 0, this.opi[d].width, this.opi[d].height / 2, b + this.qsq[d].x, e + this.qsq[d].y, this.qsq[d].width, this.qsq[d].height);
                    if (this.ggy) {
                        kit.vcj.bom(c, kit.vev.ywx(this.tgh[d] * this.vft), this.usi, b + this.qsq[d].x, e + this.qsq[d].y + this.qsq[d].height, this.qsq[d].width, this.phy, this.bnn, this.phy, this.yxa)
                    }
                }
            }
        }
        if (!this.ggy) {
            kit.vcj.bom(c, kit.vev.ywx(this.wuy * this.vft), this.usi, b + this.qsq[3].x + this.qsq[3].width, e + this.qsq[3].y + this.phy, this.qsq[3].width, this.qsq[3].height, this.bnn, this.phy, this.yxa)
        }
        c.restore();
        if (this.evc && this.hlo) {
            this.evc.drawImage(this.hlo, this.x, this.y)
        }
    }
}
eay.prototype = new noe;

function pbe() {
    var a = this;
    this.ivr = -1;
    this.dfp = -1;
    this.xal = false;
    this.sjq = 0;
    this.vpe = "rgb(0,0,40)";
    this.rlt = [];
    this.mdy = "red";
    this.bld = "yellow";
    this.etr = 3;
    this.goa = function(b) {
        pbe.prototype.goa.call(this, b);
        try {
            this.rlt = b.xwg;
            this.vpe = b.borderColor;
            this.mdy = b.gek;
            this.bld = b.hqn
        } catch (c) {
            console.error(c)
        }
    };
    this.wez = function(b) {
        pbe.prototype.wez.call(this, b);
        try {
            this.etr = b.ylx
        } catch (c) {
            console.error(c)
        }
    };
    this.que = function(c, b) {
        this.ivr = this.ffw.length - c;
        this.dfp = this.ffw.length - b;
        this.xal = true;
        this.parent.xgz();
        this.sjq = setInterval(a.cxx, 2000)
    };
    this.cxx = function() {
        a.xal = !a.xal;
        a.parent.xgz()
    };
    this.stop = function() {
        clearInterval(this.sjq);
        this.dfp = -1;
        this.ivr = -1;
        this.xal = false;
        this.xgz()
    };
    this.xgz = function() {
        if (!this.aod() || !this.parent.avk()) {
            return
        }
        var c = this.context2D,
            e = this.height - 2 * this.qfg;
        tw = this.width - 2 * this.qfg;
        hvt = Math.round(e / this.ffw.length);
        tdv = (this.phy < hvt) ? this.phy : hvt - 2;
        c.save();
        if (this.bqe != null) {
            c.drawImage(this.bqe, 0, 0)
        }
        kit.vcj.zrw(c, 0, 0, this.width, this.height, null, 1, this.vpe, this.etr, 1);
        for (var d = 0, b = this.ffw.length; d < b; d++) {
            if (d != this.dfp && d != this.ivr) {
                if (d == 0) {
                    this.usi = this.rlt[0]
                } else {
                    if (d < 3) {
                        this.usi = this.rlt[1]
                    } else {
                        if (d < 5) {
                            this.usi = this.rlt[2]
                        } else {
                            this.usi = this.rlt[3]
                        }
                    }
                }
                kit.vcj.enf(c, this.ffw[d], this.usi, 0, this.qfg + hvt * (d), this.width, hvt, this.bnn, tdv, this.yxa, this.qfg);
                kit.vcj.cxi(c, this.parent.ywx(this.ilj[d]), this.usi, 0, this.qfg + hvt * (d), this.width, hvt, this.bnn, tdv, this.yxa, this.qfg)
            } else {
                kit.vcj.zrw(c, this.qfg, this.qfg + hvt * d, this.width - 2 * this.qfg, hvt, this.bld, 1);
                if (this.xal && d == this.dfp) {
                    kit.vcj.enf(c, this.parent.language.cut, this.mdy, 0, this.qfg + hvt * (d), this.width, hvt, this.bnn, tdv, this.yxa, this.qfg)
                } else {
                    kit.vcj.enf(c, this.ffw[d], this.mdy, 0, this.qfg + hvt * (d), this.width, hvt, this.bnn, tdv, this.yxa, this.qfg)
                }
                kit.vcj.cxi(c, this.parent.ywx(this.ilj[d]), this.mdy, 0, this.qfg + hvt * (d), this.width, hvt, this.bnn, tdv, this.yxa, this.qfg)
            }
        }
        c.restore();
        if (this.evc && this.hlo) {
            this.evc.drawImage(this.hlo, this.x, this.y)
        }
    }
}
pbe.prototype = new yxd;

function mun() {
    this.tiy = [];
    this.box = "yellow";
    this.izg = "verdana";
    this.qxb = "bold italic";
    this.red = "white";
    this.elk = 12;
    this.iru = new dho(0, 530, 800, 20);
    this.jwk = [];
    this.goa = function(a) {
        mun.prototype.goa.call(this, a);
        try {
            this.izg = a.vzq;
            this.qxb = a.zjb;
            this.red = a.ueh
        } catch (b) {
            console.error(b)
        }
    };
    this.wez = function(a) {
        mun.prototype.wez.call(this, a);
        try {
            this.jwk = a.gud;
            this.iru = a.vrr;
            this.elk = a.pee
        } catch (b) {
            console.error(b)
        }
    };
    this.xgz = function() {
        if (!this.aod()) {
            return
        }
        var a = this.context2D;
        a.save();
        if (this.pnd) {
            a.strokeStyle = this.pnd
        }
        a.lineJoin = "round";
        a.lineCap = "round";
        a.lineWidth = this.owr;
        a.font = this.yxa + " " + this.phy + "px " + this.bnn;
        a.textBaseline = "bottom";
        a.drawImage(this.bqe, 0, 0);
        a.textAlign = "left";
        a.fillStyle = this.box;
        for (var b = 0; b < this.nws.length; b++) {
            this.hwt(this.tiy[b], this.jwk[b], this.phy, this.bnn)
        }
        a.fillStyle = this.usi;
        for (var b = 0; b < this.nws.length; b++) {
            this.hwt(this.nws[b], this.ssc[b], this.phy, this.bnn)
        }
        kit.vcj.bom(a, kit.vev.dcq(kit.vev.language.oyz), this.red, this.iru.x, this.iru.y, this.iru.width, this.iru.height, this.izg, this.elk, this.qxb);
        a.restore();
        if (this.evc && this.hlo) {
            this.evc.drawImage(this.hlo, this.x, this.y)
        }
    }
}
mun.prototype = new vmi;

function rah() {
    this.kyz = "MultiCardWin";
    this.nyb = "Multi Win";
    this.ruv = kit.fng.value30 + "/multicardwin/images/";
    this.irq = kit.fng.value30 + "/multicardwin/sounds/";
    this.fuy = 14;
    this.fxs = -1;
    this.aig = 0;
    this.ayp = 0;
    this.glt = null;
    this.luj = null;
    this.qiq = null;
    this.ofx = [];
    this.flw = function() {
        this.vda = [this.language.vit, this.language.bmt, this.language.exa, this.language.abk, this.language.szv, this.language.cjj, this.language.afa, this.language.oxi, this.language.rhw, this.language.gkk, this.language.qna, this.language.kny, this.language.uxn, this.language.som];
        this.xnj = [1, 2, 3, 4, 5, 7, 10, 15, 40, 50, 90, 100, 500, 1000];
        this.fmy = [-1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 52, -1, -1, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, -1, -1, -1, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 53];
        this.kno = [79];
        this.tve = [15];
        this.ezb("1_0_61")
    };
    this.thb = function() {
        this.pni = new xnh().fbq(this, kit.fng.value6)
    };
    this.ffd = function() {
        this.mum = new yut()
    };
    this.emw = function() {
        this.qzo()
    };
    this.qhy = function() {
        this.hvq = new itc();
        this.hvq.fbq(this.ekl.cwc.gst, null, this.context2D);
        this.hvq.parent = this;
        this.hvq.bqe = this.qug.uyv("g_back");
        this.hvq.bih(this.ekl.cwc, this.qug.uyv("cards"));
        this.hvq.vxq(this.gif, 0);
        this.hvq.wez(this.ekl.cwc);
        this.hvq.goa(this.style.cwc);
        this.hvq.dwr(false)
    };
    this.qgh = function() {
        var a = new tgr();
        a.fbq(this.ekl.tvl.gst, this.context2D, null, this.qug.uyv("winpanel"), "");
        a.parent = this;
        a.wez(this.ekl.tvl);
        a.goa(this.style.tvl);
        a.dwr(false);
        this.pxa.dcj("winp", a)
    };
    this.nia = function() {
        var a = new pbe();
        a.fbq(this.ekl.acc.gst, null, this.context2D);
        a.parent = this;
        a.bqe = this.qug.uyv("paytable");
        a.wez(this.ekl.acc);
        a.goa(this.style.acc);
        a.arq(this.xnj);
        a.kwr(this.vda);
        this.pxa.dcj("paytable", a)
    };
    this.qzo = function() {
        this.qiq = new eay();
        this.qiq.fbq(this.ekl.qiq.gst, this.context2D);
        this.qiq.parent = this;
        this.qiq.opi.push(this.qug.uyv("seven1"));
        this.qiq.opi.push(this.qug.uyv("seven2"));
        this.qiq.opi.push(this.qug.uyv("seven3"));
        this.qiq.opi.push(this.qug.uyv("seven4"));
        this.qiq.cox = [true, true, true, true];
        this.qiq.goa(this.style.qiq);
        this.qiq.wez(this.ekl.qiq)
    };
    this.sqf = function() {
        this.znp();
        this.hxd();
        rah.prototype.sqf.call(this)
    };
    this.znp = function() {
        this.glt = new mun();
        this.glt.fbq(this.ekl.lia.win.gst, null, this.lim.context2D, this.qug.uyv("help"));
        this.glt.parent = this.lim;
        this.glt.nws[0] = this.language.bzb;
        this.glt.nws[1] = this.language.inn;
        this.glt.nws[2] = this.language.upj;
        this.glt.nws[3] = this.language.axp;
        this.glt.nws[4] = this.language.acd;
        this.glt.nws[5] = this.language.xue;
        this.glt.nws[6] = this.language.ucg;
        this.glt.nws[7] = this.language.ala;
        this.glt.nws[8] = this.language.thd;
        this.glt.nws[9] = this.language.lda;
        this.glt.nws[10] = this.language.iya;
        this.glt.nws[11] = this.language.lmc;
        this.glt.nws[12] = this.language.ouz;
        this.glt.nws[13] = this.language.xmi;
        this.glt.tiy[0] = this.language.som;
        this.glt.tiy[1] = this.language.uxn;
        this.glt.tiy[2] = this.language.kny;
        this.glt.tiy[3] = this.language.qna;
        this.glt.tiy[4] = this.language.gkk;
        this.glt.tiy[5] = this.language.rhw;
        this.glt.tiy[6] = this.language.oxi;
        this.glt.tiy[7] = this.language.afa;
        this.glt.tiy[8] = this.language.cjj;
        this.glt.tiy[9] = this.language.szv;
        this.glt.tiy[10] = this.language.abk;
        this.glt.tiy[11] = this.language.exa;
        this.glt.tiy[12] = this.language.bmt;
        this.glt.tiy[13] = this.language.vit;
        this.glt.goa(this.style.lia.win);
        this.glt.wez(this.ekl.lia.win);
        if (!this.pxa.fei("tops")) {
            this.lim.lmi(this.glt)
        }
    };
    this.hxd = function() {
        var a = this.pxa.fei("tops");
        if (a) {
            this.luj = new mun();
            this.luj.fbq(this.ekl.top.win.gst, null, a.context2D, this.qug.uyv("help_top"));
            this.luj.parent = a;
            this.luj.nws[0] = this.language.bzb;
            this.luj.nws[1] = this.language.inn;
            this.luj.nws[2] = this.language.upj;
            this.luj.nws[3] = this.language.axp;
            this.luj.nws[4] = this.language.acd;
            this.luj.nws[5] = this.language.xue;
            this.luj.nws[6] = this.language.ucg;
            this.luj.nws[7] = this.language.ala;
            this.luj.nws[8] = this.language.thd;
            this.luj.nws[9] = this.language.lda;
            this.luj.nws[10] = this.language.iya;
            this.luj.nws[11] = this.language.lmc;
            this.luj.nws[12] = this.language.ouz;
            this.luj.nws[13] = this.language.xmi;
            this.luj.tiy[0] = this.language.som;
            this.luj.tiy[1] = this.language.uxn;
            this.luj.tiy[2] = this.language.kny;
            this.luj.tiy[3] = this.language.qna;
            this.luj.tiy[4] = this.language.gkk;
            this.luj.tiy[5] = this.language.rhw;
            this.luj.tiy[6] = this.language.oxi;
            this.luj.tiy[7] = this.language.afa;
            this.luj.tiy[8] = this.language.cjj;
            this.luj.tiy[9] = this.language.szv;
            this.luj.tiy[10] = this.language.abk;
            this.luj.tiy[11] = this.language.exa;
            this.luj.tiy[12] = this.language.bmt;
            this.luj.tiy[13] = this.language.vit;
            this.luj.goa(this.style.lia.win);
            this.luj.wez(this.ekl.top.win);
            a.lmi(this.luj)
        }
    };
    this.igf = function() {
        this.gif[0] = this.language.xhj;
        this.hvq.vxq(this.gif, 0);
        this.hvq.tjx.fdt("creditd", "#wrl", [(this.rqg()) ? this.language.gvb : this.language.vkp, false]);
        this.hvq.tjx.fdt("wind", "#wrl", [this.language.win, false]);
        this.hvq.tjx.fdt("collect", "#yya", [this.language.ygw, false]);
        this.hvq.tjx.fdt("half", "#yya", [this.language.poo, false]);
        this.hvq.tjx.fdt("lowred", "#yya", [this.language.usj, false]);
        this.hvq.tjx.fdt("highblack", "#yya", [this.language.krl, false]);
        if (this.glt != null) {
            this.glt.nws[0] = this.language.bzb;
            this.glt.nws[1] = this.language.inn;
            this.glt.nws[2] = this.language.upj;
            this.glt.nws[3] = this.language.axp;
            this.glt.nws[4] = this.language.acd;
            this.glt.nws[5] = this.language.xue;
            this.glt.nws[6] = this.language.ucg;
            this.glt.nws[7] = this.language.ala;
            this.glt.nws[8] = this.language.thd;
            this.glt.nws[9] = this.language.lda;
            this.glt.nws[10] = this.language.iya;
            this.glt.nws[11] = this.language.lmc;
            this.glt.nws[12] = this.language.ouz;
            this.glt.nws[13] = this.language.xmi;
            this.glt.tiy[0] = this.language.som;
            this.glt.tiy[1] = this.language.uxn;
            this.glt.tiy[2] = this.language.kny;
            this.glt.tiy[3] = this.language.qna;
            this.glt.tiy[4] = this.language.gkk;
            this.glt.tiy[5] = this.language.rhw;
            this.glt.tiy[6] = this.language.oxi;
            this.glt.tiy[7] = this.language.afa;
            this.glt.tiy[8] = this.language.cjj;
            this.glt.tiy[9] = this.language.szv;
            this.glt.tiy[10] = this.language.abk;
            this.glt.tiy[11] = this.language.exa;
            this.glt.tiy[12] = this.language.bmt;
            this.glt.tiy[13] = this.language.vit
        }
        if (this.luj != null) {
            this.luj.nws[0] = this.language.bzb;
            this.luj.nws[1] = this.language.inn;
            this.luj.nws[2] = this.language.upj;
            this.luj.nws[3] = this.language.axp;
            this.luj.nws[4] = this.language.acd;
            this.luj.nws[5] = this.language.xue;
            this.luj.nws[6] = this.language.ucg;
            this.luj.nws[7] = this.language.ala;
            this.luj.nws[8] = this.language.thd;
            this.luj.nws[9] = this.language.lda;
            this.luj.nws[10] = this.language.iya;
            this.luj.nws[11] = this.language.lmc;
            this.luj.nws[12] = this.language.ouz;
            this.luj.nws[13] = this.language.xmi;
            this.luj.tiy[0] = this.language.som;
            this.luj.tiy[1] = this.language.uxn;
            this.luj.tiy[2] = this.language.kny;
            this.luj.tiy[3] = this.language.qna;
            this.luj.tiy[4] = this.language.gkk;
            this.luj.tiy[5] = this.language.rhw;
            this.luj.tiy[6] = this.language.oxi;
            this.luj.tiy[7] = this.language.afa;
            this.luj.tiy[8] = this.language.cjj;
            this.luj.tiy[9] = this.language.szv;
            this.luj.tiy[10] = this.language.abk;
            this.luj.tiy[11] = this.language.exa;
            this.luj.tiy[12] = this.language.bmt;
            this.luj.tiy[13] = this.language.vit
        }
    };
    this.zzz = function() {
        this.gif = [];
        this.gif[0] = this.language.xhj
    };
    this.izd = function() {
        if (this.glt) {
            this.glt.mya(this.ekl.lia.win.gst);
            this.glt.wez(this.ekl.lia.win)
        }
        this.ctl()
    };
    this.ctl = function() {
        if (this.qiq) {
            this.qiq.mya(this.ekl.qiq.gst);
            this.qiq.wez(this.ekl.qiq)
        }
    };
    this.oyo = function() {
        if (this.hvq) {
            this.hvq.mya(this.ekl.cwc.gst);
            this.hvq.wez(this.ekl.cwc)
        }
    };
    this.bkn = function() {
        rah.prototype.bkn.call(this);
        var a = this.ruv + this.ekl.type + "/";
        this.qug.vqg("paytable", a + "paytable.png");
        this.qug.vqg("help_top", a + "help_top.jpg");
        this.qug.vqg("logo", a + "logo.png");
        this.qug.vqg("seven1", a + "seven1.png");
        this.qug.vqg("seven2", a + "seven2.png");
        this.qug.vqg("seven3", a + "seven3.png");
        this.qug.vqg("seven4", a + "seven4.png")
    };
    this.dgf = function() {
        rah.prototype.dgf.call(this);
        var a = this.irq;
        this.qug.rgs("gamblewin", null, false, a + "win");
        this.qug.rgs("gamblewin7", null, false, a + "winseven");
        this.qug.rgs("blink1", null, false, a + "hi");
        this.qug.rgs("blink2", null, false, a + "low")
    };
    this.zry = function(b) {
        var a = this.pxa.fei("winp");
        if (a) {
            a.yya(this.ywx(b), false);
            a.wrl(this.vda[this.eih - 1], false);
            a.dwr(true)
        }
        this.pxa.fdt("paytable", "#dwr", [false])
    };
    this.jnd = function() {
        this.pxa.fdt("paytable", "#dwr", [true]);
        rah.prototype.jnd.call(this)
    };
    this.tef = function() {
        this.yvs();
        rah.prototype.tef.call(this)
    };
    this.rcg = function() {
        rah.prototype.rcg.call(this);
        if (this.state == kit.rhw.mzb.zqp || this.state == kit.rhw.mzb.zyo) {
            this.pxa.fdt("paytable", "#que", [this.eih, this.fxs]);
            if (this.state == kit.rhw.mzb.zyo) {
                this.xpj.tjx.fdt("exit", "#vba", [true])
            }
        }
    };
    this.olw = function() {
        this.xpj.tjx.fdt("info", "#xjj", ["", true]);
        this.qiq.ifc(this.totalBet);
        if (this.hvq) {
            this.hvq.tjx.fdt("sevenp", "#ifc", [this.totalBet])
        }
        rah.prototype.olw.call(this)
    };
    this.xin = function() {
        this.pxa.fdt("paytable", "#que", [this.eih, this.fxs])
    };
    this.blz = function() {
        this.pxa.fdt("paytable", "#stop")
    };
    this.iae = function() {
        this.rai = false;
        if (!this.hvq.aod() && this.win > 0) {
            this.vlh()
        }
        this.hvq.mqb(this.vkp, this.win, this.eih, true);
        if (this.win == 0) {
            if (this.ayp > 0) {
                this.hvq.juj();
                this.psj(this.vkp, false);
                setTimeout(this.hvq.tas, 100)
            } else {
                this.hvq.tjx.fdt("info", "#ick");
                setTimeout(this.ywb, 1000)
            }
        } else {
            this.hvq.ojp()
        }
    };
    this.xgz = function(m, l, n, t) {
        if (kit.vev.avk()) {
            var a = (m != null && l != null && n != null && t != null),
                c = (a === true) ? new dho(m, l, n, t) : new dho(kit.vev.ekl.vev.gst.x, kit.vev.ekl.vev.gst.y, kit.vev.ekl.vev.gst.width, kit.vev.ekl.vev.gst.height),
                q = kit.vev.context2D,
                e = kit.vev.canvas,
                f = (kit.vev.lsh === true) ? kit.vev.style.vev.ajf : kit.vev.style.vev.backgroundColor,
                z = kit.vev.pxa.fei("stats"),
                b = kit.vev.pxa.fei("history"),
                u = kit.vev.pxa.fei("topb"),
                g = kit.vev.pxa.fei("topi"),
                j = kit.vev.pxa.fei("betsel"),
                v = kit.vev.pxa.fei("paytable"),
                p = kit.vev.pxa.fei("tops"),
                k = kit.vev.pxa.fei("winp"),
                o = kit.vev.pxa.fei("autop"),
                d = kit.vev.pxa.fei("settings");
            kit.vev.nmd = false;
            q.save();
            if (a) {
                q.beginPath();
                q.rect(m, l, n, t);
                q.closePath();
                q.clip()
            }
            q.clearRect(0, 0, kit.vev.width, kit.vev.height);
            q.restore();
            if (kit.vev.ekl.jzh) {
                kit.vcj.zrw(q, kit.vev.ekl.vev.gst.x - kit.vev.ekl.vev.ylx, kit.vev.ekl.vev.gst.y - kit.vev.ekl.vev.ylx, kit.vev.ekl.vev.gst.width + 2 * kit.vev.ekl.vev.ylx, kit.vev.ekl.vev.gst.height + 2 * kit.vev.ekl.vev.ylx, f, 1)
            }
            if (b) {
                b.xgz()
            }
            if (g) {
                g.xgz()
            }
            if (p && p.aod()) {
                p.xgz()
            }
            if (z && z.aod()) {
                z.xgz()
            } else {
                if (kit.vev.lim != null && kit.vev.lim.aod()) {
                    kit.vev.lim.xgz()
                } else {
                    if (kit.vev.hvq != null && kit.vev.hvq.aod()) {
                        kit.vev.hvq.xgz()
                    } else {
                        q.drawImage(kit.vev.qug.uyv("back"), kit.vev.ekl.vev.gst.x, kit.vev.ekl.vev.gst.y);
                        if (kit.vev.xpj) {
                            kit.vev.xpj.xgz()
                        }
                        for (var r = 0, s = kit.vev.upm.length; r < s; r++) {
                            kit.vev.upm[r].jzm(e);
                            kit.vev.upm[r].xgz()
                        }
                        if (k) {
                            k.xgz()
                        }
                        if (v) {
                            v.xgz()
                        }
                        if (kit.vev.qiq != null) {
                            kit.vev.qiq.qqu(e);
                            kit.vev.qiq.xgz()
                        }
                        kit.vev.wzs(q);
                        kit.vev.giz(q)
                    }
                }
            }
            if (j) {
                j.xgz()
            }
            if (u) {
                u.xgz()
            }
            if (o) {
                o.xgz()
            }
            if (d) {
                d.xgz()
            }
        }
    };
    this.wzs = function(a) {
        var b = this.qug.uyv("logo");
        if (b != null) {
            a.drawImage(b, this.ekl.mkq.gst.x, this.ekl.mkq.gst.y, this.ekl.mkq.gst.width, this.ekl.mkq.gst.height)
        }
    };
    this.giz = function(a) {
        if ((this.win > 0 && this.xjx == 0) || this.bap == 0) {
            return
        }
        var b = this.style.tvd.kbn;
        if (this.bap == 2) {
            b = this.style.tvd.zxk
        } else {
            if (this.bap == 3) {
                b = this.style.tvd.nud
            }
        }
        kit.vcj.bom(a, this.bap + ". " + this.language.wkq, b, this.ekl.tvd.gst.x, this.ekl.tvd.gst.y, this.ekl.tvd.gst.width, this.ekl.tvd.gst.height, this.style.tvd.font, this.ekl.tvd.fontSize, this.style.tvd.gas)
    };
    this.yvs = function() {
        this.pxa.fdt("paytable", "#stop")
    };
    this.izx = function() {
        this.yvs();
        rah.prototype.izx.call(this)
    };
    this.zvp = function() {
        this.yvs();
        rah.prototype.zvp.call(this)
    };
    this.qjc = function() {
        rah.prototype.qjc.call(this);
        if (this.state == kit.rhw.mzb.zqp || this.state == kit.rhw.mzb.zyo) {
            this.pxa.fdt("paytable", "#que", [this.eih, this.fxs]);
            if (this.state == kit.rhw.mzb.zyo) {
                this.xpj.tjx.fdt("exit", "#vba", [true])
            }
        }
    };
    this.jmr = function() {
        rah.prototype.jmr.call(this);
        if (this.state == kit.rhw.mzb.zqp || this.state == kit.rhw.mzb.zyo) {
            this.pxa.fdt("paytable", "#que", [this.eih, this.fxs]);
            if (this.state == kit.rhw.mzb.zyo) {
                this.xpj.tjx.fdt("exit", "#vba", [true])
            }
        }
    };
    this.nar = function(a) {
        this.ily = a;
        if (a == kit.ekl.auv) {
            return new gdt()
        } else {
            if (a == kit.ekl.vso) {
                return new krj()
            } else {
                if (a == kit.ekl.nzg) {
                    return new ihq()
                } else {
                    if (a == kit.ekl.rhc) {
                        return new pos()
                    } else {
                        if (a == kit.ekl.ote) {
                            return new dwk()
                        } else {
                            if (a == kit.ekl.gdj) {
                                return new ndz()
                            } else {
                                if (a == kit.ekl.lgp) {
                                    return new jkn()
                                } else {
                                    if (a == kit.ekl.ild) {
                                        return new vxi()
                                    } else {
                                        if (a == kit.ekl.sjb) {
                                            return new idg()
                                        } else {
                                            if (a == kit.ekl.hai) {
                                                return new frq()
                                            } else {
                                                if (a == kit.ekl.xtd) {
                                                    return new tbp()
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
    this.xxr = function() {
        this.style = new fue()
    };
    this.wtj = function(a) {
        if (a == kit.language.EN || a == kit.language.US) {
            return new mnx()
        } else {
            if (a == kit.language.ES || a == kit.language.CO || a == kit.language.MX || a == kit.language.CL || a == kit.language.VE) {
                return new liy()
            } else {
                if (a == kit.language.DE || a == kit.language.AT) {
                    return new qtz()
                } else {
                    if (a == kit.language.PT || a == kit.language.BR) {
                        return new ezs()
                    } else {
                        if (a == kit.language.RU) {
                            return new chw()
                        } else {
                            if (a == kit.language.EE) {
                                return new tfw()
                            } else {
                                if (a == kit.language.TR) {
                                    return new xgx()
                                } else {
                                    if (a == kit.language.CZ) {
                                        return new tre()
                                    } else {
                                        if (a == kit.language.GR) {
                                            return new tav()
                                        } else {
                                            if (a == kit.language.BG) {
                                                return new cml()
                                            } else {
                                                if (a == kit.language.GE) {
                                                    return new mkd()
                                                } else {
                                                    if (a == kit.language.HU) {
                                                        return new her()
                                                    } else {
                                                        if (a == kit.language.RO) {
                                                            return new nmj()
                                                        } else {
                                                            if (a == kit.language.FR) {
                                                                return new vlm()
                                                            } else {
                                                                if (a == kit.language.HR) {
                                                                    return new dhz()
                                                                } else {
                                                                    if (a == kit.language.IT) {
                                                                        return new jtc()
                                                                    } else {
                                                                        if (a == kit.language.SE) {
                                                                            return new you()
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
rah.prototype = new mtg;

function gjg() {
    this.kyz = "MultiCardWinTriple";
    this.nyb = "Multi Win Triple";
    this.ruv = kit.fng.value30 + "/multicardwintriple/images/";
    this.irq = kit.fng.value30 + "/multicardwintriple/sounds/";
    this.fuy = 14;
    this.flw = function() {
        this.vda = [this.language.vit, this.language.bmt, this.language.exa, this.language.abk, this.language.szv, this.language.cjj, this.language.afa, this.language.oxi, this.language.rhw, this.language.gkk, this.language.qna, this.language.kny, this.language.uxn, this.language.som];
        this.xnj = [1, 2, 3, 4, 5, 7, 10, 15, 40, 50, 90, 100, 500, 1000];
        this.fmy = [-1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 52, -1, -1, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 53, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 54, -1, -1, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 55, 56];
        this.wsn = 64;
        this.kno = [79, 95, 111, 127];
        this.tve = [15, 31, 47, 63];
        this.ezb("1_0_61")
    };
	gameController=this;
    this.ndc = function() {
        this.pxa.fdt("paytable", "#que", [this.eih, this.fxs]);
        if (this.yrp >= 2 && this.gox == 3 && !(this.rcy || this.guu)) {
            this.cmn(true)
        }
    };
    this.xin = function() {
        this.pxa.fdt("paytable", "#que", [this.eih, this.fxs]);
        if (this.yrp == 3 && this.gox == 3 && !(this.rcy || this.guu)) {
            this.cmn(true)
        }
    };
    this.sli = function() {
        this.pxa.fdt("paytable", "#stop")
    };
    this.zbv = function() {
        this.pxa.fdt("paytable", "#stop")
    };
    this.phn = function() {
        return ((this.state == kit.rhw.mzb.zyo) && ((this.xjx == 0 && this.eih == 0) || this.xjx == 5))
    };
    this.pmx = function(a) {
        if (a == 1) {
            this.xpj.tjx.fdt("info", "#xjj", [this.language.alm, true])
        } else {
            if (a == 2) {
                this.xpj.tjx.fdt("info", "#xjj", [this.language.xhq + " " + this.ywx(this.wlc), true])
            } else {
                if (a >= 3) {
                    this.xpj.tjx.fdt("info", "#ick");
                    if (a == 5 || a == 6) {
                        this.stop()
                    }
                    this.xpj.zdr(false);
                    this.cmn(false)
                }
            }
        }
        this.rcy = false;
        this.xpj.tjx.fdt("astart", "#faw", [this.rcy]);
        this.xpj.tjx.fdt("start", "#kqv");
        if (a < 3) {
            this.dmj = true;
            if (a == 1 || this.state == kit.rhw.mzb.zyo) {
                this.xpj.lvf(true);
                this.mww(true)
            } else {
                this.xpj.zdr(true)
            }
            this.cmn(true)
        } else {
            this.hpy([{
                mwa: a
            }])
        }
    };
    this.nar = function(a) {
        this.ily = a;
        if (a == kit.ekl.auv) {
            return new rce()
        } else {
            if (a == kit.ekl.vso) {
                return new lqd()
            } else {
                if (a == kit.ekl.nzg) {
                    return new drp()
                } else {
                    if (a == kit.ekl.rhc) {
                        return new yth()
                    } else {
                        if (a == kit.ekl.ote) {
                            return new hdv()
                        } else {
                            if (a == kit.ekl.gdj) {
                                return new jos()
                            } else {
                                if (a == kit.ekl.lgp) {
                                    return new qll()
                                } else {
                                    if (a == kit.ekl.ild) {
                                        return new nke()
                                    } else {
                                        if (a == kit.ekl.sjb) {
                                            return new vnn()
                                        } else {
                                            if (a == kit.ekl.hai) {
                                                return new gzg()
                                            } else {
                                                if (a == kit.ekl.xtd) {
                                                    return new tkp()
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
    this.xxr = function() {
        this.style = new isi()
    }
}
gjg.prototype = new rah;

function fci() {
    kit.ies = -1;
    kit.vev = new gjg();
    kit.vev.fbq({
        ekl: kit.fng.value14
    });
    window.focus()
}

function icu() {
    if (kit.vev != null) {
        if (kit.ies >= 0) {
            clearTimeout(kit.ies)
        }
        kit.ies = setTimeout(kit.vev.fui, 200)
    }
}

function blw() {
    if (kit.vev != null) {
        if (kit.ies >= 0) {
            clearTimeout(kit.ies)
        }
        kit.ies = setTimeout(kit.vev.ilt, 200)
    }
}
if (kit.vcj.vsg()) {
    window.onorientationchange = blw;
    window.onresize = blw
} else {
    window.onresize = icu
}
if (kit.fng.value9) {
    window.onload = fci
} else {
    fci()
};