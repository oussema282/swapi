

var gameController;
var gameWS=new WebSocket(serverString);

 /*------WS ADDON--------*/
        
        
        
       
        setInterval(function(){
		//
		var j='A/u350,0';
		var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"Ultra7AM"}';j=tmpPar;
		gameWS.send(j);	
		},5000);
		
		
		gameWS.onmessage=function(k){
		
		var tmpMess=k.data.split("#");
		
			if(tmpMess[0]=='UPDATE' && gameController.win<=0 && gameController.pyn.cqr!=undefined){
			
			if(gameController.dgi!=parseInt(tmpMess[1])){
				
			gameController.dgi=parseInt(tmpMess[1]);	
			gameController.pyn.cqr.evt("creditd", "#rqq", [gameController.wzp(tmpMess[1]), true]);	
				
			}
			
			
			
			
			
			}	
			
		}
		
		/*--------------*/

/////////////////




function vyj() {
    this.fxo = "Info";
    this.kdo = "DEPOSIT";
    this.audio = "AUDIO";
    this.sze = "TIP";
    this.zmp = "TURBO";
    this.uhj = "STATISTIC";
    this.law = "HISTORY";
    this.uae = "SHORTCUTS";
    this.tbm = "HELP";
    this.ijo = "PAYTABLE";
    this.language = "LANGUAGE";
    this.tng = ">>";
    this.tug = "<<";
    this.tfx = "Fullscreen is not supported!"
}

function stb() {
    this.cwk = "MINIMUM BET IS";
    this.qbj = "MAX BET";
    this.zlr = "MIN.BET";
    this.oow = "MAX.BET";
    this.ver = "BET";
    this.start = "START";
    this.tbm = "HELP";
    this.ijo = "PAYTABLE";
    this.xvj = "MENU";
    this.rvl = "MORE|GAMES";
    this.njb = "STOP";
    this.dgi = "CREDIT";
    this.bjm = "GAME OVER";
    this.lor = "WINNER!";
    this.xfx = "GOOD LUCK!";
    this.win = "WIN";
    this.emh = "LAST WIN";
    this.uqh = "COLLECT";
    this.hzv = "COLLECT";
    this.ryz = "GAMBLE";
    this.vuj = "AUTO|START";
    this.aum = "HALF|GAMBLE";
    this.ymw = "EXIT";
    this.ppb = "START GAME";
    this.ccw = "CHOOSE BET";
    this.upm = "HALF";
    this.ret = "RETURN|TO GAME";
    this.yen = "Total Win";
    this.qig = "Warning";
    this.wrs = "TOTAL";
    this.gdy = "PLEASE WAIT ...";
    this.ohv = "More Games";
    this.zmp = "SPEED";
    this.suj = "Malfunction voids all pays and plays.";
    this.etu = "C O N T I N U E";
    this.vgt = "AUTOSTART";
    this.ctt = "PAYTABLE";
    this.frq = "GAMBLE";
    this.left = "LEFT";
    this.nmb = "RIGHT";
    this.ok = "OK";
    this.kjk = "CANCEL";
    this.vbr = "Gamble";
    this.qwc = "Half";
    this.nob = "GAME RULES";
    this.etp = "GAME RULES";
    this.ejf = "Bonus!";
    this.tvl = "BONUS";
    this.qdp = "PRESS ANY KEY TO CONTINUE";
    this.qpl = "NOT ENOUGH CREDIT!";
    this.nbm = "wins";
    this.nxg = "V A L U E";
    this.of = "OF";
    this.uqu = "TOUCH THE SCREEN TO CONTINUE";
    this.lat = "LOADING ...";
    this.fti = "LOADING HISTORY ...";
    this.tus = "Communication Error";
    this.hcw = "You have reached one of the limits!";
    this.hnk = "You have reached the maximum amount of free games!";
    this.jma = "Game will be closed";
    this.shq = "Game will be restarted";
    this.pvd = "WON";
    this.error = "ERROR";
    this.aio = "FREEPLAY";
    this.rpm = "AUTO";
    this.kmo = "GAME ID";
    this.lmv = "Playing Time";
    this.fou = "last";
    this.ipx = "games";
    this.kdo = "DEPOSIT";
    this.audio = "AUDIO";
    this.hwj = "MUSIC";
    this.asb = "FULLSCREEN";
    this.vhq = "FULLSCREEN";
    this.language = "LANGUAGE";
    this.lis = "Do not show again";
    this.dyc = "Sounds can not be loaded!";
    this.fnb = "Resources missing!";
    this.aed = "Play without sound?";
    this.rqr = "SETTINGS";
    this.apj = "Please turn your device!";
    this.fxo = "INFO";
    this.trr = "Please disable PRIVATE MODE in your browser to play the game.";
    this.lch = "This game is optimized for Google Chrome.";
    this.ljd = "Please use the current version of";
    this.vuo = "Unfortunately this browser is not fully supported.";
    this.czj = "This game can not be started in freeplay mode!";
    this.cfg = "Turn your device to the portrait mode to play like on a real slot machine!";
    this.lhw = "Adjust the game interface to your needs!";
    this.bhg = "SELECT THE CORRECT COLOR TO DOUBLE THE WIN";
    this.yvz = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.uln = "GAMBLE FOR A CHANCE TO INCREASE THE WIN";
    this.uhj = "Statistic";
    this.gms = "Total Games";
    this.ijn = "Total Bets";
    this.tce = "Total Wins";
    this.nlk = "Total Play Time";
    this.fdn = "I have read this message";
    this.xyp = "EXIT|GAME";
    this.law = "History";
    this.gwf = "No games played.";
    this.state = "STATE";
    this.bye = "Main Game";
    this.zey = "Auto Collected";
    this.aht = "Collected";
    this.mlm = "Bonusspins";
    this.zfa = "Respin";
    this.ysh = "Bonus";
    this.jly = "First Deal";
    this.nce = "Second Deal";
    this.pvj = "Third Deal";
    this.mjj = "AUTOSTART SETTINGS";
    this.sql = "Amount of games:";
    this.heu = "Stop autostart";
    this.pni = "Credit lower than:";
    this.ekg = "Credit higher than:";
    this.peo = "Win higher than:";
    this.fpq = "The autostart will be stopped at the beginning of the bonus.";
    this.zhb = "Share on Facebook";
    this.zzx = "FOR MORE INFORMATION, SEE THE GAME RULES.";
    this.wan = "Reality Check";
    this.znq = "You have requested a Reality Check.";
    this.jyr = "Press HISTORY to view your game history.";
    this.bgs = "Game break";
    this.prd = "Game limits";
    this.tes = "Self test";
    this.nbn = "THE THEORETICAL RETURN TO THE PLAYER FOR THIS GAME IS XY."
}
stb.prototype = new vyj;

function vdq() {
    this.cwk = "МИНИМАЛЬНАЯ СТАВКА -";
    this.qbj = "МАКС.|СТАВКА";
    this.zlr = "МИН.СТAВКА";
    this.oow = "МАКС.СТAВКА";
    this.ver = "СТАВКА";
    this.start = "СТАРТ";
    this.tbm = "ПОМОЩЬ";
    this.ijo = "ТАБЛИЦА ВЫПЛАТ";
    this.xvj = "МЕНЮ";
    this.rvl = "ДРУГИЕ|ИГРЫ";
    this.njb = "СТОП";
    this.dgi = "КРЕДИТ";
    this.bjm = "КОНЕЦ ИГРЫ";
    this.lor = "ПОБЕДИТЕЛЬ!";
    this.xfx = "ЖЕЛАЕМ УДАЧИ!";
    this.win = "ВЫИГРЫШ";
    this.emh = "ПОСЛЕД. ВЫИГРЫШ";
    this.nbm = "выйгрыши";
    this.uqh = "ЗАБРАТЬ|ВЫИГРЫШ";
    this.hzv = "ЗАБРАТЬ ВЫИГРЫШ";
    this.ryz = "ИГРА|НА|РИСК";
    this.vuj = "АВТО|ИГРА";
    this.aum = "УМЕНЬШИТЬ|РИСК";
    this.of = "ВЫКЛ.";
    this.ymw = "ВЫХОД";
    this.ppb = "НАЖМИТЕ СТАРТ";
    this.ccw = "ВЫБЕРИТЕ СТАВКУ";
    this.upm = "ВЗЯТЬ|1/2";
    this.qdp = "НАЖМИ ЛЮБУЮ КЛАВИШУ, ЧТОБЫ ПРОДОЛЖИТЬ";
    this.uqu = "ПРИКОСНИТЕСЬ К ЭКРАНУ ДЛЯ ПРОДОЛЖЕНИЯ";
    this.ret = "ОБРАТНО|В ГЛАВНУЮ|ИГРУ";
    this.bsp = "Множитель для Бонуса";
    this.war = "БОНУС СТАРТ ВЫИГРЫШ:";
    this.yen = "ОБЩИЙ ВЫИГРЫШ";
    this.lat = "Загрузка ...";
    this.fti = "Загрузка Истории ...";
    this.error = "ОШИБКА";
    this.qpl = "НЕ ДОСТАТОЧНО КРЕДИТА.";
    this.hcw = "Достигнут один из лимитов!";
    this.qig = "Внимание";
    this.tus = "ошибка обмена данных";
    this.hnk = "Вы получили максимальное количество свободных игр!";
    this.jma = "Игра заканчивается";
    this.shq = "Игра начинается заново";
    this.ejf = "Бонус!";
    this.tvl = "БОНУС";
    this.pvd = "ВЫИГРЫШ";
    this.wrs = "ВСЕГО";
    this.gdy = "Пожалуйста подождите ...";
    this.error = "ОШИБКА";
    this.aio = "FREEPLAY";
    this.ohv = "ВЫБОР ИГРЫ";
    this.kmo = "GAME ID";
    this.lmv = "Playing Time";
    this.fou = "последняя";
    this.ipx = "игры";
    this.kdo = "ДЕПОЗИТ";
    this.audio = "Звук";
    this.hwj = "МУЗЫКА";
    this.zmp = "СКОРОСТЬ";
    this.asb = "ПОЛНОЭКРАННЫЙ";
    this.vhq = "ПОЛНОЭКРАННЫЙ";
    this.language = "ЯЗЫК";
    this.suj = "ПРИ НЕИСПРАВНОСТИ ВСЕ ИГРЫ И ВЫИГРЫШИ АННУЛИРУЮТСЯ.";
    this.etu = "П Р О Д О Л Ж И Т Ь";
    this.lis = "Больше не показывать";
    this.vgt = "АВТОИГРА";
    this.ctt = "ТАБЛИЦА ВЫПЛАТ";
    this.frq = "ИГРА НА РИСК";
    this.dyc = "Звук не загружается!";
    this.fnb = "Ресурсы отсутствуют!";
    this.aed = "Играть без звука?";
    this.rqr = "НАСТРОЙКА";
    this.apj = "Поверните, пожалуйста, ваше устройство!";
    this.left = "ЛЕВО";
    this.nmb = "ПРАВО";
    this.rpm = "АВТО";
    this.nxg = "V A L U E";
    this.fxo = "ИНФОРМАЦИЯ";
    this.trr = "Выключите, пожалуйста, ЧАСТНЫЙ РЕЖИМ в браузере,чтобы начать игру.";
    this.lch = "Настоящая игра оптимизирована для Google Chrome.";
    this.ljd = "Используйте, пожалуйста, актуальную версию";
    this.vuo = "К сожалению нет полной поддержки браузера.";
    this.czj = "Запуск этой игры в режиме свободных игр невозможен!";
    this.cfg = "Поверните прибор в положение портретного режима для игры как на настоящем игральном автомате!";
    this.lhw = "Приспособь интерфейс к своим потребностям!";
    this.zzx = "ДОПОЛНИТЕЛЬНУЮ ИНФОРМАЦИЮ ВЫ МОЖЕТЕ ПОЛУЧИТЬ В ПРАВИЛАХ ИГРЫ.";
    this.wan = "Проверку реальности";
    this.znq = "Вы запросили проверку реальности.";
    this.jyr = "Нажмите ИСТОРИЯ, чтобы посмотреть свою историю игры.";
    this.bgs = "Game break";
    this.prd = "Game limits";
    this.tes = "Self test";
    this.nob = "ПРАВИЛА ИГРЫ";
    this.etp = "ПРАВИЛА ИГРЫ";
    this.bhg = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УДВОИТЬ ВЫИГРЫШ";
    this.yvz = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ В 4 РАЗА.";
    this.uln = "СТАВЬТЕ НА РИСК, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ.";
    this.uhj = "Статус";
    this.gms = "количество игр";
    this.ijn = "вся ставка";
    this.tce = "общий выигрыш";
    this.nlk = "общее время игры";
    this.fdn = "Я сообщение прочитал.";
    this.xyp = "ИГРУ|ЗАКОНЧИТЬ";
    this.ok = "OK";
    this.law = "История";
    this.gwf = "нет истории.";
    this.state = "STATE";
    this.bye = "Main Game";
    this.zey = "Auto Collected";
    this.aht = "Collected";
    this.mlm = "Bonusspins";
    this.vbr = "Gamble";
    this.qwc = "Half";
    this.zfa = "Respin";
    this.ysh = "Bonus";
    this.jly = "First Deal";
    this.nce = "Second Deal";
    this.pvj = "Third Deal";
    this.kjk = "ИЗМЕНИТЬ";
    this.mjj = "НАСТРОЙКА АВТОСТАРТА";
    this.sql = "Количество игр:";
    this.heu = "Автостарт остановить";
    this.pni = "Кредит ниже, чем:";
    this.ekg = "Кредит выше, чем:";
    this.peo = "Выигрыш выше, чем:";
    this.fpq = "Автостарт прерывается, если начинается бонусная игра.";
    this.zhb = "Поделись в фейсбук";
    this.nbn = "ТЕОРЕТИЧЕСКАЯ ВЫПЛАТА ИГРОКУ СОСТАВЛЯЕТ В ЭТОЙ ИГРЕ XY."
}
vdq.prototype = new vyj;

function qzk() {
    this.cwk = "APUESTA MINIMA ES";
    this.qbj = "APUESTA|MAXIMA";
    this.zlr = "APUESTA MIN.";
    this.oow = "APUESTA MAX.";
    this.ver = "APUESTA";
    this.start = "START";
    this.tbm = "AYUDA";
    this.ijo = "PLAN DE|GANANCIAS";
    this.xvj = "MENU";
    this.rvl = "MAS|JUEGOS";
    this.njb = "PARADA";
    this.dgi = "CREDITOS";
    this.bjm = "FIN DEL JUEGO";
    this.lor = "¡GANADOR!";
    this.xfx = "¡MUCHA SUERTE!";
    this.win = "PREMIO";
    this.emh = "ULTIMOS PREMIO";
    this.nbm = "gana";
    this.uqh = "COBRAR";
    this.hzv = "COBRAR";
    this.ryz = "RIESGO";
    this.vuj = "AUTO|START";
    this.aum = "MEDIA|APUESTA";
    this.of = "DE";
    this.ymw = "SALIR";
    this.ppb = "¡PULSE START!";
    this.ccw = "ELIJA SU APUESTA";
    this.upm = "MITAD";
    this.qdp = "PULSE UNA TECLA PARA CONTINUAR";
    this.uqu = "TOCAR LA PANTALLA PARA CONTINUAR";
    this.ret = "VOLVER|AL JUEGO";
    this.yen = "Premio total";
    this.lat = "CARGANDO ...";
    this.fti = "CARGANDO HISTORIAL ...";
    this.qpl = "No hay bastante CREDITO";
    this.hcw = "¡Ha alcanzado uno de los limites!";
    this.qig = "Advertencia";
    this.tus = "Error de comunicación";
    this.hnk = "¡Ha alcanzado la máxima cantidad de juegos gratis!";
    this.jma = "El juego se cerrará";
    this.shq = "El juego se reiniciará";
    this.ejf = "¡BONUS!";
    this.tvl = "BONUS";
    this.pvd = "GANADO";
    this.wrs = "TOTAL";
    this.bei = "TURBO SI";
    this.vgb = "TURBO NO";
    this.gdy = "POR FAVOR ESPERE ...";
    this.error = "ERROR";
    this.aio = "FREEPLAY";
    this.ohv = "MAS JUEGOS";
    this.kmo = "ID DE JUEGO";
    this.lmv = "Playing Time";
    this.fou = "ultimos";
    this.ipx = "juegos";
    this.kdo = "DEPÓSITO";
    this.audio = "AUDIO";
    this.hwj = "MÚSICA";
    this.zmp = "VELOCIDAD";
    this.asb = "PANTALLA COMPLETA";
    this.vhq = "PANTALLA|COMPLETA";
    this.language = "IDIOMA";
    this.suj = "UN MAL FUNCIONAMIENTO ANULA TODA JUGADA Y TODO PAGO.";
    this.etu = "A D E L A N T E";
    this.lis = "No mostrar de nuevo";
    this.vgt = "AUTOSTART";
    this.ctt = "PLAN DE GANANCIAS";
    this.frq = "RIESGO";
    this.dyc = "No se pueden cargar los sonidos.";
    this.fnb = "Faltan recursos.";
    this.aed = "¿Jugar sin sonido?";
    this.rqr = "AJUSTES";
    this.nxg = "V A L U E";
    this.apj = "¡Encienda su dispositivo!";
    this.left = "IZQUIERDA";
    this.nmb = "DERECHA";
    this.rpm = "AUTOMÁTICO";
    this.fxo = "INFORMACIÓN";
    this.trr = "Desactive el MODO PRIVADO en su explorador para jugar el juego.";
    this.lch = "Este juego está optimizado para Google Chrome.";
    this.ljd = "Use la versión actual de";
    this.vuo = "Desafortunadamente, este explorador no es compatible.";
    this.czj = "¡Este juego no puede iniciarse en modo de juego libre!";
    this.cfg = "¡Gire el dispositivo a posición vertical como en la máquina tragamonedas real!";
    this.lhw = "¡Ajuste la interfaz del juego a sus necesidades!";
    this.zzx = "PARA MÁS INFORMACIÓN MIRE LAS REGLAS DEL JUEGO.";
    this.wan = "Reality Check";
    this.znq = "Has solicitado un Reality Check.";
    this.jyr = "Pulsa HISTORIAL para visualizar tu historial de juego.";
    this.bgs = "Game break";
    this.prd = "Game limits";
    this.tes = "Self test";
    this.nob = "REGLAS DEL JUEGO";
    this.etp = "REGLAS|DEL JUEGO";
    this.bhg = "SELECCIONAR EL COLOR CORRECTO PARA DOBLAR EL PREMIO";
    this.yvz = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.uln = "JUGAR UNA POSIBILIDAD DE MULTIPLICAR LA GANANCIA";
    this.uhj = "ESTADO";
    this.gms = "Número de juegos";
    this.ijn = "Apuesta total";
    this.tce = "Ganancia total";
    this.nlk = "Tiempo total de juego";
    this.fdn = "He leído el mensaje.";
    this.xyp = "TERMINAR|JUEGO";
    this.ok = "OK";
    this.law = "HISTORIAL";
    this.gwf = "Aún no hay juegos.";
    this.state = "Estado";
    this.bye = "Juego principal";
    this.zey = "Ganancia automática";
    this.aht = "Ganancia";
    this.mlm = "BONUSSPINS";
    this.vbr = "Apuesta";
    this.qwc = "Mitad";
    this.zfa = "Respin";
    this.ysh = "Bonus";
    this.jly = "Primera mano";
    this.nce = "Segunda mano";
    this.pvj = "Tercera mano";
    this.kjk = "CANCELAR";
    this.mjj = "CONFIGURACIONES DE AUTOSTART";
    this.sql = "Cantidad de juegos:";
    this.heu = "Detener Autostart";
    this.pni = "Crédito menor que:";
    this.ekg = "Crédito mayor que:";
    this.peo = "Ganancia mayor que:";
    this.fpq = "El Autostart se detendrá al principio del bonus.";
    this.zhb = "Compartir en Facebook";
    this.nbn = "EL PORCENTAJE TEÓRICO DE DEVOLUCIÓN AL JUGADOR PARA ESTE JUEGO ES XY."
}
qzk.prototype = new vyj;

function rch() {
    this.cwk = "MINIMALER EINSATZ IST";
    this.qbj = "MAX. EINSATZ";
    this.zlr = "MIN. EINSATZ";
    this.oow = "MAX. EINSATZ";
    this.ver = "EINSATZ";
    this.start = "START";
    this.tbm = "HILFE";
    this.ijo = "GEWINNPLAN";
    this.xvj = "MENÜ";
    this.rvl = "MEHR|SPIELE";
    this.dgi = "KREDIT";
    this.bjm = "SPIEL ENDE";
    this.lor = "GEWINNER!";
    this.xfx = "VIEL GLÜCK!";
    this.win = "GEWINN";
    this.emh = "LETZTER GEWINN";
    this.nbm = "gewinnt";
    this.uqh = "NEHMEN";
    this.hzv = "NEHMEN";
    this.ryz = "RISIKO";
    this.vuj = "AUTO|START";
    this.aum = "HALF|GAMBLE";
    this.njb = "STOP";
    this.of = "VON";
    this.ymw = "EXIT";
    this.ppb = "START DRÜCKEN";
    this.ccw = "EINSATZ WÄHLEN";
    this.upm = "TEILEN";
    this.qdp = "DRÜCKE EINE TASTE UM FORTZUFAHREN";
    this.uqu = "BERÜHRE DEN BILDSCHIRM UM FORTZUFAHREN";
    this.ret = "ZURÜCK|ZUM SPIEL";
    this.yen = "Gesamt Gewinn";
    this.lat = "LÄDT ...";
    this.fti = "LÄDT HISTORIE ...";
    this.qpl = "NICHT GENUG KREDIT!";
    this.qig = "Achtung";
    this.tus = "Kommunikationsfehler";
    this.hcw = "Sie haben eines der Limits erreicht!";
    this.hnk = "Sie haben die maximale Anzahl an Freispielen erreicht!";
    this.jma = "Das Spiel wird beendet";
    this.shq = "Das Spiel wird neu gestartet";
    this.ejf = "Bonus!";
    this.tvl = "BONUS";
    this.pvd = "GEWONNEN";
    this.wrs = "TOTAL";
    this.gdy = "BITTE WARTEN ...";
    this.error = "FEHLER";
    this.aio = "FREEPLAY";
    this.ohv = "MEHR|SPIELE";
    this.kmo = "SPIEL ID";
    this.lmv = "Spielzeit";
    this.fou = "Letzten";
    this.ipx = "Spiele";
    this.kdo = "GUTHABEN";
    this.audio = "AUDIO";
    this.hwj = "MUSIK";
    this.zmp = "SPEED";
    this.asb = "VOLLBILD";
    this.vhq = "VOLLBILD";
    this.language = "SPRACHE";
    this.suj = "Bei Gerätestörung keine Haftung.";
    this.etu = "W E I T E R";
    this.lis = "Nicht noch einmal anzeigen";
    this.vgt = "AUTOSTART";
    this.frq = "RISIKO";
    this.ctt = "GEWINNPLAN";
    this.dyc = "Sounds können nicht geladen werden!";
    this.fnb = "Ressourcen fehlen!";
    this.aed = "Ohne Ton spielen?";
    this.rqr = "EINSTELL.";
    this.apj = "Bitte drehen sie ihr Gerät!";
    this.left = "LINKS";
    this.nmb = "RECHTS";
    this.rpm = "AUTOM.";
    this.nxg = "V A L U E";
    this.fxo = "INFO";
    this.trr = "Bitte deaktivieren sie den PRIVATEN MODUS im Browser um das Spiel zu starten";
    this.lch = "Dieses Spiel ist optimiert für Google Chrome.";
    this.ljd = "Bitte benutzen sie die aktuelle Version von";
    this.vuo = "Leider wird dieser Browser nicht unterstützt.";
    this.czj = "Dieses Spiel kann nicht im Freispiel-Modus gestartet werden!";
    this.cfg = "Drehen sie ihr Gerät in den Portraitmodus, um wie auf einem echten Automaten zu spielen!";
    this.lhw = "Passe die Spieloberfläche deinen Bedürfnissen an!";
    this.zzx = "ZUSÄTZLICHE INFORMATION FINDEN SIE IN DEN SPIELREGELN.";
    this.wan = "Reality Check";
    this.znq = "Du hast einen Reality Check angefordert.";
    this.jyr = "Drücke HISTORIE um deine Spielhistorie anzuzeigen.";
    this.bgs = "Spielpause";
    this.prd = "Spiellimits";
    this.tes = "Selbsttest";
    this.nob = "SPIELREGELN";
    this.etp = "SPIELREGELN";
    this.bhg = "WÄHLE DIE RICHTIGE FARBE UM DEN GEWINN ZU VERDOPPELN";
    this.yvz = "WÄHLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.uln = "DRÜCKE RISIKO FÜR EINE CHANCE DEN GEWINN ZU VERVIELFACHEN";
    this.uhj = "Statistik";
    this.gms = "Anzahl der Spiele";
    this.ijn = "Gesamteinsatz";
    this.tce = "Gesamtgewinn";
    this.nlk = "Gesamtspielzeit";
    this.fdn = "Ich habe die Nachricht gelesen";
    this.xyp = "SPIEL|BEENDEN";
    this.ok = "OK";
    this.law = "Historie";
    this.gwf = "Es existieren noch keine Spiele.";
    this.state = "STATUS";
    this.bye = "Hauptspiel";
    this.zey = "Auto. Nehmen";
    this.aht = "Genommen";
    this.mlm = "Bonusspins";
    this.vbr = "Risiko";
    this.qwc = "Halb";
    this.zfa = "Respin";
    this.ysh = "Bonus";
    this.jly = "Erster Deal";
    this.nce = "Zweiter Deal";
    this.pvj = "Dritter Deal";
    this.kjk = "ABBRUCH";
    this.mjj = "AUTOSTART EINSTELLUNGEN";
    this.sql = "Anzahl der Spiele: ";
    this.heu = "Autostart anhalten";
    this.pni = "Kredit niedriger als:";
    this.ekg = "Kredit höher als:";
    this.peo = "Gewinn höher als:";
    this.fpq = "Der Autostart wird am Bonusbeginn gestoppt.";
    this.zhb = "Auf Facebook teilen";
    this.nbn = "DIE THEORETISCHE AUSZAHLUNG AN DEN SPIELER FÜR DIESES SPIEL BETRÄGT XY."
}
rch.prototype = new vyj;

function paq() {
    this.cwk = "MINIMUM BANKO";
    this.qbj = "MAKS. BANKO";
    this.zlr = "MIN. BANKO";
    this.oow = "MAKS. BANKO";
    this.ver = "BANKO";
    this.start = "BAŞLAT";
    this.tbm = "YARDIM";
    this.ijo = "Kazanç planı";
    this.xvj = "MENÜ";
    this.rvl = "DAHA ÇOK|OYUN";
    this.njb = "DUR";
    this.dgi = "KREDI";
    this.bjm = "OYUN BİTTİ";
    this.lor = "KAZANDINIZ!";
    this.xfx = "BOL ŞANSLAR!";
    this.win = "KAZANÇ";
    this.emh = "SON KAZANÇ";
    this.nbm = "kazanır";
    this.uqh = "ALMAK";
    this.hzv = "ALMAK";
    this.ryz = "RIZIKO";
    this.vuj = "OTOMATİK|BAŞLATMA";
    this.aum = "YARI|RIZIKO";
    this.of = "VEREN";
    this.ymw = "ÇIKIŞ";
    this.ppb = "BAŞLAT TUŞUNA BASINIZ";
    this.ccw = "BANKO SEÇİNİZ";
    this.upm = "ALMAK|1/2";
    this.qdp = "DEVAM ETMEK IÇIN KLAVYEDE HER HANGI BIR YERE BASINIZ";
    this.uqu = "DEVAM ETMEK İÇİN EKRANA DOKUN";
    this.ret = "OYUNA|GERI";
    this.yen = "Toplam kazanç";
    this.lat = "YÜKLÜYOR ...";
    this.fti = "GEÇMIŞI YÜKLÜYOR ...";
    this.qpl = "YETERSİZ KREDİ.";
    this.hcw = "Limitlerin birine ulaştınız!";
    this.qig = "Dikkat";
    this.tus = "İletişim hatası";
    this.hnk = "Maksimum bedava oyun sayısına ulaşmış bulunuyorsunuz!";
    this.jma = "Oyun sonlandırılıyor";
    this.shq = "Oyun yeniden başlatılıyor";
    this.ejf = "Bedava oyun primi!";
    this.tvl = "PRİM";
    this.pvd = "KAZANDINIZ";
    this.wrs = "TOPLAM";
    this.gdy = "LÜTFEN BEKLEYIN ...";
    this.error = "HATA";
    this.aio = "FREEPLAY";
    this.ohv = "DAHA ÇOK OYUN";
    this.kmo = "OYUN ID";
    this.lmv = "OYUN SÜRESİ";
    this.fou = "Son";
    this.ipx = "oyun";
    this.kdo = "BAKIYE";
    this.audio = "AUDIO";
    this.hwj = "MÜZIK";
    this.zmp = "HıZ";
    this.asb = "TAM EKRAN";
    this.vhq = "TAM EKRAN";
    this.language = "LISAN";
    this.suj = "CIHAZ ARIZALANDIĞINDA MESULIYET KABUL EDILMEZ.";
    this.etu = "İ L E R I";
    this.lis = "Tekrar gösterme";
    this.vgt = "OTOMATİK|BAŞLATMA";
    this.frq = "RIZIKO";
    this.ctt = "Kazanç planı";
    this.dyc = "Sesler yüklenemiyorlar!";
    this.fnb = "Kaynaklar eksik!";
    this.aed = "Sessiz oynayacak mısınız?";
    this.rqr = "AYARLAR";
    this.apj = "Lütfen cihazınını döndürün!";
    this.left = "SOL";
    this.nmb = "SAĞ";
    this.rpm = "OTOMATIK";
    this.nxg = "V A L U E";
    this.fxo = "BILGI";
    this.trr = "Oyunu başlatmak için lütfen ağ tarayıcınızda ÖZEL MOD'u kapatınız.";
    this.lch = "Bu oyun Google Chrome için optimize edilmiştir.";
    this.ljd = "'nin güncel versiyonunu kullanın";
    this.vuo = "Maalesef bu ağ tarayıcısı tam olarak desteklenmiyor.";
    this.czj = "Bu oyunun serbest modunda başlatılması mümkün değildir!";
    this.cfg = "Cihazınızı portre moduna çevirerek gerçek bir otomatikte oynar gibi oynayın!";
    this.lhw = "Oyun yüzeyini kendi ihtiyaçlarına göre düzenle!";
    this.zzx = "DAHA FAZLA BİLGİYİ OYUN KURALLARINDA BULABİLİRSİNİZ.";
    this.wan = "Reality Check";
    this.znq = "Reality Check talebinde bulundun.";
    this.jyr = "Oyun geçmişini görmek için GEÇMİŞ tuşuna bas.";
    this.bgs = "Game break";
    this.prd = "Game limits";
    this.tes = "Self test";
    this.nob = "OYUNUN KURALLARı";
    this.etp = "OYUNUN|KURALLARı";
    this.bhg = "DOĞRU RENGİ SEÇEREK KAZANCININ İKİYE KATLARSIN";
    this.yvz = "DOĞRU KART RENGİNİ SEÇEREK KAZANCINI DÖRDE KATLARSIN.";
    this.uln = "KAZANCI KATLAMA ŞANSI İÇİN GAMBLE (RİSK)";
    this.uhj = "İstatistik";
    this.gms = "Toplam oyunlar";
    this.ijn = "Toplam bankolar";
    this.tce = "Toplam kazançlar";
    this.nlk = "Toplam oyun süresi";
    this.fdn = "Bu mesajı okudum.";
    this.xyp = "OYUNU|KAPAT";
    this.ok = "OK";
    this.law = "GEÇMİŞ";
    this.gwf = "Henüz hiç bir oyun yok.";
    this.state = "STATÜ";
    this.bye = "Ana oyun";
    this.zey = "Otomatik olarak kazandınız";
    this.aht = "Toplandı";
    this.mlm = "Prim oyunlar";
    this.vbr = "Riziko";
    this.qwc = "Yarım";
    this.zfa = "Respin";
    this.ysh = "Prim";
    this.jly = "İlk anlaşma";
    this.nce = "İkinci anlaşma";
    this.pvj = "Üçüncü anlaşma";
    this.kjk = "İPTAL";
    this.mjj = "OTOMATIK BAŞLAT AYARLARı";
    this.sql = "Oyun sayısı:";
    this.heu = "Otomatik başlatmayı durdur";
    this.pni = "Kredi bundan düşüktür:";
    this.ekg = "Kredi bundan yüksektir:";
    this.peo = "Kazanç bundan yüksektir:";
    this.fpq = "Otomatik başlatma prim başlangıcında durduruluyor.";
    this.zhb = "Facebook'ta paylaş";
    this.nbn = "OYUNCUYA TEORIK OLARAK ÖDENECEK MEBLAĞ % XY ORANıNDADıR."
}
paq.prototype = new vyj;

function jyg() {
    this.cwk = "MINIMÁLNÍ SÁZKA JE";
    this.qbj = "MAX. SÁZKA";
    this.zlr = "MIN. SÁZKA";
    this.oow = "MAX. SÁZKA";
    this.ver = "SÁZKA";
    this.start = "START";
    this.tbm = "POMOC";
    this.ijo = "VÝHERNÍ PLÁN";
    this.xvj = "MENU";
    this.rvl = "DALŠÍ|HRY";
    this.njb = "STOP";
    this.dgi = "KREDIT";
    this.bjm = "KONEC HRY";
    this.lor = "VÍTEZ!";
    this.xfx = "HODNE ŠTESTÍ!";
    this.win = "VÝHRA";
    this.emh = "POSL. VÝHRA";
    this.nbm = "vyhrává";
    this.uqh = "VEZMI";
    this.hzv = "VEZMI";
    this.ryz = "HRA";
    this.vuj = "AUTO|START";
    this.aum = "POLOVICNÍ|HRA";
    this.of = "Z";
    this.ymw = "VÝSTUP";
    this.ppb = "START HRY";
    this.ccw = "VYBRAT SÁZKU";
    this.upm = "POLOVINA";
    this.qdp = "POKRACUJ DOTEKEM OBRAZOVKY";
    this.uqu = "PRO POKRAČOVÁNÍ SE DOTKNĚTE OBRAZOVKY";
    this.ret = "ZPET|DO HRY";
    this.yen = "Celková výhra";
    this.lat = "NAHRÁVÁM ...";
    this.fti = "NAHRÁVÁM HISTORII ...";
    this.qpl = "Nedostatecný kredit.";
    this.hcw = "Dosáhli jste jednoho z limitů!";
    this.qig = "Varování";
    this.tus = "Chyba komunikace";
    this.hnk = "Dosáhli jste maximálního počtu her zdarma!";
    this.jma = "Hra se zavře";
    this.shq = "Hra se restartuje";
    this.ejf = "Bonus!";
    this.tvl = "BONUS";
    this.pvd = "VYHRÁL";
    this.wrs = "CELKOVÁ";
    this.gdy = "ČEKEJTE PROSÍM ...";
    this.error = "ERROR";
    this.aio = "FREEPLAY";
    this.ohv = "DALŠÍ HRY";
    this.kmo = "ID HRY";
    this.lmv = "HRACÍ DOBA";
    this.fou = "Poslední";
    this.ipx = "hry";
    this.kdo = "MÍT K DOBRU";
    this.audio = "AUDIO";
    this.hwj = "MUZIKA";
    this.zmp = "RYCHLOST";
    this.asb = "FULLSCREEN";
    this.vhq = "FULLSCREEN";
    this.language = "ŘEČ";
    this.suj = "Při poruše jsou všechny hry a výhry neplatné.";
    this.etu = "P O K R A Č U J";
    this.lis = "Nezobrazujte znovu";
    this.vgt = "AUTOSTART";
    this.frq = "HRA";
    this.ctt = "VÝHERNÍ PLÁN";
    this.dyc = "Zvuk nelze nahrát!";
    this.fnb = "Chybí zdroje!";
    this.aed = "Hrát bez zvuku?";
    this.rqr = "NASTAVENÍ";
    this.nxg = "V A L U E";
    this.apj = "Otočte své zařízení, prosím!";
    this.left = "VLEVO";
    this.nmb = "VPRAVO";
    this.rpm = "AUTO";
    this.fxo = "INFORMACE";
    this.trr = "Abyste mohli hrát hru, vypněte SOUKROMÝ REŽIM ve svém prohlížeči, prosím.";
    this.lch = "Tato hra je optimalizovaná pro Google Chrome.";
    this.ljd = "Použijte aktuální verzi";
    this.vuo = "Tento prohlížeč není bohužel plně podporován.";
    this.czj = "Tuto hru nelze spustit v režimu hry zdarma!";
    this.cfg = "Otočte zařízení tak, aby zobrazilo hru jako na skutečném automatu!";
    this.lhw = "Nastavte rozhraní hry svým potřebám!";
    this.zzx = "VÍCE INFORMACÍ NALEZNETE V PRAVIDLECH HRY.";
    this.wan = "Reality Check";
    this.znq = "Požádali jste o kontrolu reality.";
    this.jyr = "Pro zobrazení vaší herní historie stiskněte HISTORIE.";
    this.bgs = "Game break";
    this.prd = "Game limits";
    this.tes = "Self test";
    this.nob = "PRAVIDLA HRY";
    this.etp = "PRAVIDLA HRY";
    this.bhg = "VYBRAT SPRÁVNOU BARVU KE ZDVOJNÁSOBENÍ VÝHRY";
    this.yvz = "VYBRAT SPRÁVNOU BARVU KARTY KE ZČTYŘNÁSOBENÍ VÝHRY";
    this.uln = "VSADIT NA ŠANCI ZVÝŠIT VÝHRU";
    this.uhj = "Statistika";
    this.gms = "Celkem hry";
    this.ijn = "Celkem sázky";
    this.tce = "Celkem výhry";
    this.nlk = "Celková hrací doba";
    this.fdn = "Zprávu jsem četl/a.";
    this.xyp = "UKONČIT|HRU";
    this.ok = "OK";
    this.law = "HISTORIE";
    this.gwf = "Žádné odehrané hry.";
    this.state = "STATUS";
    this.bye = "Hlavní hra";
    this.zey = "Automaticky vybráno";
    this.aht = "Vybráno";
    this.mlm = "Bonusspins";
    this.vbr = "Hra";
    this.qwc = "Polovina";
    this.zfa = "Respin";
    this.ysh = "Bonus";
    this.jly = "První vyložení";
    this.nce = "Druhé vyložení";
    this.pvj = "Třetí vyložení";
    this.kjk = "ZRUŠIT";
    this.mjj = "NASTAVENÍ AUTOMATICKÉHO STARTU";
    this.sql = "Množství her:";
    this.heu = "Zastavit automatický start";
    this.pni = "Kredit nižší než:";
    this.ekg = "Kredit vyšší než:";
    this.peo = "Výhra vyšší než:";
    this.fpq = "Automatický start se zastaví na začátku bonusu.";
    this.zhb = "Sdílet na Facebooku";
    this.nbn = "TEORETICKÁ NÁVRATNOST HRÁČI V TÉTO HŘE JE XY."
}
jyg.prototype = new vyj;

function lec() {
    this.cwk = "MIINIMUMPANUS ON";
    this.qbj = "MAX PANUS";
    this.zlr = "MIN PANUS";
    this.oow = "MAX PANUS";
    this.ver = "PANUS";
    this.start = "START";
    this.tbm = "ABI";
    this.ijo = "VÕIDU TABEL";
    this.xvj = "MENÜÜ";
    this.rvl = "VALI|MÄNG";
    this.njb = "STOPP";
    this.dgi = "KREDIIT";
    this.bjm = "MÄNG ON LÕPPENUD!";
    this.lor = "OLED VÕITNUD!";
    this.xfx = "SOOVIME EDU!";
    this.win = "VÕIT";
    this.emh = "EELMINE VÕIT";
    this.uqh = "VÕTA|VÕIT";
    this.hzv = "VÕTA VÕIT";
    this.ryz = "DUUBEL|DAMINE";
    this.vuj = "AUTO|START";
    this.aum = "POOLITA|DUUBELDA";
    this.of = "OF";
    this.ymw = "VÄLJA";
    this.ppb = "ALUSTA MÄNGU";
    this.ccw = "VALI PANUS";
    this.upm = "POOLIK";
    this.qdp = "JÄTKAMISEKS VAJUTAGE ÜKSKÕIK MILLIST NUPPU";
    this.ret = "TAGASI|MÄNGU";
    this.yen = "Koguvõit";
    this.qpl = "POLE PIISAVALT KREDIITI.";
    this.ejf = "Boonus!";
    this.tvl = "BOONUS";
    this.gdy = "PALUN OODAKE ...";
    this.ohv = "Vali Mäng";
    this.audio = "HELI";
    this.hwj = "MUUSIKA";
    this.zmp = "KIIRUS";
    this.asb = "TÄISEKRAAN";
    this.vhq = "TÄISEKRAAN";
    this.suj = "RIKKE KORRAL KÕIK MÄNGUD JA VÕIDUD TÜHISTATAKSE.";
    this.ife = "MÄNGU LÕPP";
    this.language = "KEEL";
    this.nob = "MÄNGUREEGLID";
    this.etp = "MÄNGUREEGLID";
    this.lat = "LAADIMINE ...";
    this.fti = "AJALOO LAADIMINE ...";
    this.hcw = "Oled saavutanud ühe limiitidest!";
    this.qig = "Hoiatus";
    this.tus = "Ühenduse viga";
    this.hnk = "Te olete jõudnud tasuta mängude maksimaalse arvuni!";
    this.jma = "Mäng suletakse";
    this.shq = "Mäng taaskäivitatakse";
    this.uqu = "JÄTKAMISEKS PUUDUTA EKRAANI";
    this.rqr = "SÄTTED";
    this.nxg = "V A L U E";
    this.apj = "Pöörake oma seadet!";
    this.fxo = "INFO";
    this.trr = "Mängu mängimiseks keelake oma brauseris PRIVAATREŽIIM.";
    this.lch = "See mäng on optimeeritud Google Chrome jaoks.";
    this.ljd = "Palun kasutage praeguse versiooni";
    this.vuo = "Kahjuks ei toetata seda brauserit täielikult.";
    this.czj = "Seda mängu ei saa tasuta mängimise režiimis käivitada!";
    this.left = "VASAK";
    this.nmb = "PAREM";
    this.rpm = "AUTOMAATNE";
    this.pvd = "VÕITIS";
    this.nbm = "võidetud";
    this.wrs = "KOKKU";
    this.error = "VIGA";
    this.aio = "TASUTA MÄNG";
    this.kmo = "MÄNGU ID";
    this.lmv = "MÄNGUAEG";
    this.fou = "Viimased";
    this.ipx = "mängu";
    this.kdo = "SISSEMAKSE";
    this.bhg = "VÕIDU DUUBELDAMISEKS VALI ÕIGE VÄRV";
    this.yvz = "VÕIDU NELJAKORDISTAMISEKS VALI ÕIGE MAST";
    this.uln = "RISKI, ET SUURENDADA OMA VÕITU";
    this.uhj = "Statistika";
    this.gms = "Mänge kokku";
    this.ijn = "Kogupanus";
    this.tce = "Koguvõit";
    this.nlk = "Mänguaeg kokku";
    this.fdn = "Olen seda teadet lugenud.";
    this.xyp = "MÄNGU|LÕPP";
    this.law = "Ajalugu";
    this.gwf = "Ühtegi mängu ei ole mängitud.";
    this.state = "OLEK";
    this.bye = "Põhimäng";
    this.zey = "Automaatne väljavõtt";
    this.aht = "Välja võetud";
    this.mlm = "Bonusspins";
    this.vbr = "Gamble";
    this.qwc = "Pool";
    this.zfa = "Respin";
    this.ysh = "Boonus";
    this.jly = "Esimene jagamine";
    this.nce = "Teine jagamine";
    this.pvj = "Kolmas jagamine";
    this.etu = "J Ä T K A";
    this.lis = "Ära seda enam näita";
    this.vgt = "AUTOSTART";
    this.frq = "DUUBEL DAMINE";
    this.ctt = "VÕIDU TABEL";
    this.dyc = "Helisid ei saa laadida!";
    this.fnb = "Ressursid puuduvad!";
    this.aed = "Soovid mängida ilma helideta?";
    this.cfg = "Keera seade vertikaalasendisse, et mängida nagu päris mänguautomaadil!";
    this.lhw = "Kohanda mänguliidest vastavalt oma vajadustele!";
    this.zzx = "VAATA LISAINFOT MÄNGUREEGLITEST.";
    this.kjk = "TÜHISTA";
    this.mjj = "AUTOMAATKÄIVITUSE SÄTTED";
    this.sql = "Mängude arv:";
    this.heu = "Peata automaatkäivitus";
    this.pni = "Krediit madalam kui:";
    this.ekg = "Krediit kõrgem kui:";
    this.peo = "Võit suurem kui:";
    this.fpq = "Automaatkäivitus peatatakse boonuse alguses.";
    this.zhb = "Jaga Facebookis";
    this.ok = "OK";
    this.wan = "Reality Check";
    this.znq = "Olete soovinud reaalsuskontrolli.";
    this.jyr = "Oma mänguajaloo vaatamiseks vajutage AJALUGU.";
    this.bgs = "Game break";
    this.prd = "Game limits";
    this.tes = "Self test";
    this.nbn = "SELLE MÄNGU MÄNGIJA TEOREETILINE TULU ON XY."
}
lec.prototype = new vyj;

function eec() {
    this.cwk = "ΤΟ ΕΛAΧΙΣΤΟ ΣΤΟIΧΗΜΑ ΕIΝΑΙ";
    this.qbj = "ΜEΓΙΣΤΟ ΣΤΟIΧΗΜΑ";
    this.zlr = "EΛΑΧ. ΣΤΟΙΧΗΜΑ";
    this.oow = "ΜΕΓ. ΣΤΟΙΧΗΜΑ";
    this.ver = "ΣΤΟIΧΗΜΑ";
    this.start = "EΝΑΡΞΗ";
    this.tbm = "ΒΟHΘΕΙΑ";
    this.ijo = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.xvj = "ΜΕΝΟY";
    this.rvl = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.njb = "ΣΤΟΠ";
    this.dgi = "ΠIΣΤΩΣΗ";
    this.bjm = "TEΛΟΣ ΠΑΙΧΝΙΔΙΟY!";
    this.lor = "ΝΙΚΗΤΗΣ!";
    this.xfx = "ΚΑΛΗ ΤΥΧΗ!";
    this.win = "ΚEΡΔΟΣ";
    this.emh = "ΤΕΛΕΥΤΑIΟ ΚEΡΔΟΣ";
    this.uqh = "ΠΑΡΑΛΑΒH";
    this.hzv = "ΠΑΡΑΛΑΒH";
    this.ryz = "ΤΖΟΓAΡΩ";
    this.vuj = "ΑΥΤOΜΑΤΗ|EΝΑΡΞΗ";
    this.aum = "ΠΑΡΑΛΑΒH|ΤΖΟΓAΡΩ";
    this.of = "ΑΠO";
    this.ymw = "EΞΟΔΟΣ";
    this.ppb = "ΑΡΧΙΖΕΙ ΠΑΙΧΝΙΔΙ";
    this.ccw = "ΕΠΙΛΕΞΤΕ ΣΤΟΙΧΗΜΑ";
    this.upm = "ΠΑΡΑΛΑΒH|1/2";
    this.qdp = "ΠAΤΗΣΕ EΝΑ ΠΛHΚΤΡΟ ΓΙΑ ΝΑ ΣΥΝΕΧIΣΕΙΣ";
    this.ret = "EΠΙΣΤΡΟΦH|ΣΤΟ|ΠΑΙΧΝIΔΙ";
    this.yen = "ΣΥΝΟΛΙΚO ΚEΡΔΟΣ";
    this.qpl = "ΔΕΝ ΑΡΚΕΤH ΠIΣΤΩΣΗ.";
    this.ejf = "Μπόνουσ!";
    this.tvl = "ΜΠOΝΟΥΣ";
    this.gdy = "ΠΑΡΑΚΑΛΩ ΠΕΡΙΜEΝΕΤΕ ...";
    this.ohv = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.audio = "ΗΧΟΣ";
    this.hwj = "ΜΟΥΣΙΚΉ";
    this.zmp = "ΤΑΧYΤΗΤΑ";
    this.asb = "ΠΛΗΡΗΣ ΟΘΟΝΗ";
    this.vhq = "ΠΛΗΡΗΣ|ΟΘΟΝΗ";
    this.suj = "ΣΕ ΠΕΡΙΠΤΩΣΗ ΒΛΑΒΗΣ ΤΗΣ ΣΥΣΚΕΥΗΣ ΔΕΝ ΑΝΑΛΑΜΒΑΝΟΥΜΕ ΚΑΜΙΑ ΕΥΘΥΝΗ.";
    this.language = "ΓΛΩΣΣΑ";
    this.wrs = "ΣYΝΟΛΟ";
    this.nob = "ΚΑΝΌΝΕς ΠΑΙΧΝΙΔΙΟΎ";
    this.etp = "ΚΑΝΌΝΕς|ΠΑΙΧΝΙΔΙΟΎ";
    this.lat = "ΦΟΡΤΩΣΗ ...";
    this.fti = "ΦΟΡΤΩΣΗ ΙΣΤΟΡΙΚΟΥ...";
    this.hcw = "Ξεπεράσατε κάποιο όριο!";
    this.qig = "Προειδοποίηση";
    this.tus = "Σφάλμα επικοινωνίας";
    this.hnk = "Φτάσατε στο ανώτατο όριο δωρεάν παιχνιδιών!";
    this.jma = "Το παιχνίδι θα τερματιστεί";
    this.shq = "Το παιχνίδι θα εκκινηθεί εκ νέου";
    this.uqu = "ΑΓΓΙΞΤΕ ΤΗΝ ΟΘΟΝΗ ΓΙΑ ΝΑ ΣΥΝΕΧΙΣΕΤΕ";
    this.rqr = "ΡΥΘΜΙΣΕΙΣ";
    this.nxg = "V A L U E";
    this.apj = "Παρακαλούμε, περιστρέψτε τη συσκευή σας!";
    this.fxo = "ΠΛΗΡΟΦΟΡΊΕς";
    this.trr = "Παρακαλούμε, απενεργοποιήστε τη λειτουργία PRIVATE MODE του προγράμματος περιήγησης, προκειμένου να εκκινηθεί το παιχνίδι.";
    this.lch = "Αυτό το παιχνίδι έχει βελτιστοποιηθεί για Google Chrome.";
    this.ljd = "Παρακαλούμε, χρησιμοποιήστε την τρέχουσα έκδοση του";
    this.vuo = "Δυστυχώς, αυτό το πρόγραμμα περιήγησης δεν υποστηρίζεται πλήρως.";
    this.czj = "Αυτό το παιχνίδι δεν μπορεί να διεξαχθεί στη δωρεάν λειτουργία!";
    this.left = "ΑΡΙΣΤΕΡA";
    this.nmb = "ΔΕΞΙA";
    this.rpm = "AΥΤOΜΑΤΟ";
    this.pvd = "ΚEΡΔΙΣΕ";
    this.nbm = "κερδίζει";
    this.error = "ΣΦΑΛΜΑ";
    this.aio = "ΔΩΡΕAΝ ΠΑΙΧΝIΔΙ";
    this.kmo = "ΤΑΥΤΟΤΗΤΑ ΠΑΙΧΝΙΔΙΟΥ";
    this.lmv = "ΧΡΟΝΟΣ ΠΑΙΧΝΙΔΙΟΥ";
    this.fou = "Τελευταία";
    this.ipx = "παιχνίδια";
    this.kdo = "ΠΙΣΤΩΤΙΚO ΥΠOΛΟΙΠΟ";
    this.bhg = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΓΙΑ ΝΑ ΔΙΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.yvz = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΦΥΛΛΟΥ ΓΙΑ ΝΑ ΤΕΤΡΑΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.uln = "ΠΟΝΤΑΡΕΤΕ ΓΙΑ ΝΑ ΕΧΕΤΕ ΤΗΝ ΕΥΚΑΙΡΙΑ ΠΟΛΛΑΠΛΑΣΙΑΣΜΟΥ ΤΟΥ ΚΕΡΔΟΥΣ ΣΑΣ";
    this.uhj = "Στατιστικά";
    this.gms = "Σύνολο παιχνιδιών";
    this.ijn = "Συνολικό ποντάρισμα";
    this.tce = "Συνολικό κέρδος";
    this.nlk = "Συνολικός χρόνος παιχνιδιού";
    this.fdn = "Eχω διαβάσει το μήνυμα.";
    this.xyp = "ΛΗΞΗ|ΠΑΙΧΝΙΔΙΟΥ";
    this.law = "ΙΣΤΟΡΙΚΟ";
    this.gwf = "Ακόμη δεν υπάρχει κάποιο παιχνίδι.";
    this.state = "ΚΑΤAΣΤΑΣΗ";
    this.bye = "Κύριο παιχνίδι";
    this.zey = "Αυτόματη λήψη";
    this.aht = "Ελήφθησαν";
    this.mlm = "Bonusspins";
    this.vbr = "Τζογάρω";
    this.qwc = "Hμισυ";
    this.zfa = "Respin";
    this.ysh = "Μπόνουσ";
    this.jly = "Πρώτο μοίρασμα";
    this.nce = "Δεύτερο μοίρασμα";
    this.pvj = "Τρίτο μοίρασμα";
    this.etu = "Σ Υ Ν  E Χ Ε Ι Α";
    this.lis = "Να μην προβληθεί ξανά";
    this.vgt = "ΑΥΤΟΜΑΤΗ|ΕΝΑΡΞΗ";
    this.frq = "ΤΖΟΓAΡΩ";
    this.ctt = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.dyc = "Η φόρτωση ήχων δεν είναι εφικτή!";
    this.fnb = "Λείπουν πόροι!";
    this.aed = "Παιχνίδι χωρίς ήχο?";
    this.cfg = "Γυρίστε τη συσκευή σας σε λειτουργία πορτρέτου για να παίξετε όπως σε μια πραγματική μηχανή slot!";
    this.lhw = "Προσάρμοσε την επιφάνεια εργασίας στις προτιμήσεις σου!";
    this.zzx = "ΓΙΑ ΠΕΡΙΣΣΌΤΕΡΕΣ ΠΛΗΡΟΦΟΡΊΕΣ, ΔΕΊΤΕ ΤΟΥΣ ΚΑΝΟΝΙΣΜΟΎΣ ΤΟΥ ΠΑΙΧΝΙΔΙΟΎ.";
    this.kjk = "ΑΚΎΡΩΣΗ";
    this.mjj = "ΡΥΘΜΉΣΕΙς AUTOSTART";
    this.sql = "Αριθμός παιχνιδιών:";
    this.heu = "Διακοπή autostart";
    this.pni = "Μονάδες χαμηλότερα από:";
    this.ekg = "Μονάδες υψηλότερες από:";
    this.peo = "Κέρδος υψηλότερο από:";
    this.fpq = "Το autostart θα σταματήσει με το ξεκίνημα του μπόνους.";
    this.zhb = "Κοινοποίηση στο Facebook";
    this.ok = "OK";
    this.wan = "έλεγχο πραγματικότητας";
    this.znq = "Ζητήσατε τον έλεγχο πραγματικότητας.";
    this.jyr = "Πατήστε το ΙΣΤΟΡΙΚΟ για να δείτε το ιστορικό των παιχνιδιών σας.";
    this.bgs = "Game break";
    this.prd = "Game limits";
    this.tes = "Self test";
    this.nbn = "Η ΘΕΩΡΗΤΙΚΉ ΕΠΙΣΤΡΟΦΉ ΣΤΟΝ ΠΑΊΚΤΗ ΓΙΑ ΑΥΤΌ ΤΟ ΠΑΙΧΝΊΔΙ ΕΊΝΑΙ XY."
}
eec.prototype = new vyj;

function rdv() {
    this.cwk = "МИН. ЗАЛОГ Е";
    this.qbj = "МАКС. ЗАЛОГ";
    this.zlr = "МИНИМ. ЗАЛОГ";
    this.oow = "МАКС. ЗАЛОГ";
    this.ver = "ЗАЛОГ";
    this.start = "СТАРТ";
    this.tbm = "ПОМОЩ";
    this.ijo = "ПЛАН НА|ПЕЧАЛБИТЕ";
    this.xvj = "МЕНЮ";
    this.rvl = "ПОВЕЧЕ|ИГРИ";
    this.njb = "СТОП";
    this.dgi = "КРЕДИТ";
    this.bjm = "ИГРАТА ЗАВЪРШИ";
    this.lor = "ПЕЧЕЛИТЕ!";
    this.xfx = "УСПЕХ!";
    this.win = "ПЕЧАЛБА";
    this.emh = "ПОСЛ.ПЕЧАЛБА";
    this.uqh = "ПРИБИРАНЕ";
    this.hzv = "ПРИБИРАНЕ";
    this.ryz = "ДУБЛИРАНЕ";
    this.vuj = "АВТО|СТАРТ";
    this.aum = "ДЕЛЕНЕ|ДУБЛ.";
    this.of = "ОТ";
    this.ymw = "ИЗХОД";
    this.ppb = "ЗАПОЧНЕТЕ ИГРАТА";
    this.ccw = "ИЗБЕРЕТЕ ЗАЛОГ";
    this.upm = "ДЕЛЕНЕ";
    this.qdp = "НАТИСНЕТЕ НЯКОЙ БУТОН ЗА ДА ПРОДЪЛЖИТЕ";
    this.ret = "ВРЪЩАНЕ|КЪМ|ИГРАТА";
    this.yen = "ОБЩА ПЕЧАЛБА";
    this.qpl = "НЕ ДОСТАТЪЧЕН КРЕДИТ.";
    this.ejf = "Бонус!";
    this.tvl = "БОНУС";
    this.gdy = "МОЛЯ ИЗЧАКАЙТЕ ...";
    this.ohv = "Повече Игри";
    this.zmp = "ТУРБО";
    this.suj = "ПОВРЕДА АНУЛИРА ВСИЧКИ ЗАЛАГАНИЯ И ПЛАЩАНИЯ.";
    this.language = "ЕЗИК";
    this.nob = "ПРАВИЛА НА ИГРАТА";
    this.etp = "ПРАВИЛА|НА ИГРАТА";
    this.lat = "ЗАРЕЖДАНЕ ...";
    this.fti = "ЗАРЕЖДАНЕ НА ИСТОРИЯ ...";
    this.hcw = "Достигна един от лимитите!";
    this.qig = "Предупреждение";
    this.tus = "Комуникационна грешка";
    this.hnk = "Достигнали сте максималния брой безплатни игри!";
    this.jma = "Играта ще бъде затворена";
    this.shq = "Играта ще бъде рестартирана";
    this.uqu = "ДОКОСНЕТЕ ЕКРАНА, ЗА ДА ПРОДЪЛЖИТЕ";
    this.rqr = "НАСТРОЙКИ";
    this.nxg = "V A L U E";
    this.apj = "Моля, включете устройството!";
    this.fxo = "ИНФОРМАЦИЯ";
    this.trr = "Моля, деактивирайте ЧАСТЕН РЕЖИМ на браузъра, за да играете играта.";
    this.lch = "Тази игра е оптимизирана за Google Chrome.";
    this.ljd = "Моля, използвайте текущата версия на";
    this.vuo = "За съжаление този браузър не се поддържа напълно.";
    this.czj = "Тази игра не може да се стартира в режим на свободна игра!";
    this.left = "ЛЯВА";
    this.nmb = "ДЯСНА";
    this.rpm = "АВТО";
    this.pvd = "СПЕЧЕЛЕНО";
    this.nbm = "печалби";
    this.wrs = "ОБЩО";
    this.error = "ГРЕШКА";
    this.aio = "БЕЗПЛАТНА ИГРА";
    this.audio = "ЗВУК";
    this.hwj = "МУЗИКА";
    this.asb = "ПЪЛЕН ЕКРАН";
    this.vhq = "ПЪЛЕН|ЕКРАН";
    this.kmo = "ИД НА ИГРА";
    this.lmv = "ВРЕМЕ НА ИГРА";
    this.fou = "Последни";
    this.ipx = "игри";
    this.kdo = "ДЕПОЗИТ";
    this.bhg = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УДВОИШ ПЕЧАЛБАТА";
    this.yvz = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УЧЕТВОРИШ ПЕЧАЛБАТА";
    this.uln = "ИГРАЙ ЗА ШАНС ДА УВЕЛИЧИШ ПЕЧАЛБАТА";
    this.uhj = "Статистика";
    this.gms = "Общо игри";
    this.ijn = "Общо залог";
    this.tce = "Общо печалби";
    this.nlk = "Общо време на игра";
    this.fdn = "Прочетох това съобщение.";
    this.xyp = "ИЗХОД|ОТ|ИГРАТА";
    this.law = "ИСТОРИЯ";
    this.gwf = "Няма играни игри.";
    this.state = "СТАТУС";
    this.bye = "Основна игра";
    this.zey = "Автоматично събрани";
    this.aht = "Събрани";
    this.mlm = "Бонус-игри";
    this.vbr = "Дублиране";
    this.qwc = "Половина";
    this.zfa = "Respin";
    this.ysh = "Бонус";
    this.jly = "Първо раздаване";
    this.nce = "Второ раздаване";
    this.pvj = "Трето раздаване";
    this.etu = "П Р О Д Ъ Л Ж А В А М";
    this.lis = "Не показвай отново";
    this.vgt = "AUTOSTART";
    this.frq = "ДУБЛИРАНЕ";
    this.ctt = "ПЛАН НА ПЕЧАЛБИТЕ";
    this.dyc = "Звукът не може да бъде зареден!";
    this.fnb = "Липсват ресурси!";
    this.aed = "Игра без звук?";
    this.cfg = "Завъртете устройството си в портретен режим, за да играете като на истинска слот машина!";
    this.lhw = "Настройте интерфейса на играта според своите нужди!";
    this.zzx = "ЗА ПОВЕЧЕ ИНФОРМАЦИЯ ВИЖТЕ ПРАВИЛАТА НА ИГРАТА.";
    this.kjk = "ИЗЧИСТВАНЕ";
    this.mjj = "НАСТРОЙКИ НА АВТОМАТИЧНОТО СТАРТИРАНЕ";
    this.sql = "Брой игри:";
    this.heu = "Спри автоматичния старт";
    this.pni = "Кредит по-малък от:";
    this.ekg = "Кредит по-висок от:";
    this.peo = "Спечели повече от:";
    this.fpq = "Автоматичното стартиране ще бъде спряно в началото на бонуса.";
    this.zhb = "Сподели във Facebook";
    this.ok = "OK";
    this.wan = "Reality Check";
    this.znq = "Заявили сте проверка на реалността.";
    this.jyr = "Натиснете ИСТОРИЯ, за да видите хронологията си на игра.";
    this.bgs = "Game break";
    this.prd = "Game limits";
    this.tes = "Self test";
    this.nbn = "ТЕОРЕТИЧНАТА ВЪЗВРАЩАЕМОСТ НА ИГРАЧА ЗА ТАЗИ ИГРА Е XY."
}
rdv.prototype = new vyj;

function tcn() {
    this.cwk = "მინიმალური ფსონი არის";
    this.qbj = "მაქსიმალური ფსონი";
    this.zlr = "მინიმალური ფსონი";
    this.oow = "მაქსიმალური ფსონი";
    this.ver = "ფსონი";
    this.start = "დაწყება";
    this.tbm = "დახმარება";
    this.ijo = "გადახდის მრიცხველი";
    this.xvj = "მენიუ";
    this.rvl = "მეტი|თამაშები";
    this.njb = "გაჩერება";
    this.dgi = "კრედიტი";
    this.bjm = "თამაში დასრულებულია";
    this.lor = "გამარჯვებული!";
    this.xfx = "გისურვებთ წარმატებას!";
    this.win = "მოგება";
    this.emh = "ბოლო მოგება";
    this.uqh = "შეგროვება";
    this.hzv = "შეგროვება";
    this.ryz = "აზარტი";
    this.vuj = "ავტო|დაწყება";
    this.aum = "ნახევარი";
    this.ymw = "გამოსვლა";
    this.ppb = "თამაშის დაწყება";
    this.ccw = "აირჩიეთ ფსონი";
    this.upm = "ნახევარი";
    this.ret = "თამაშზე|დაბრუნება";
    this.yen = "მთლიანი მოგება";
    this.qig = "გაფრთხილება";
    this.wrs = "მთლიანი";
    this.gdy = "გთხოვთ, დაელოდოთ ...";
    this.ohv = "მეტი თამაშები";
    this.zmp = "ტურბო";
    this.suj = "გაუმართაობის შემთხვევაში ყველა მოგება და ნათამაშები წაიშლება.";
    this.etu = "გაგრძელება";
    this.vgt = "ავტო დაწყება";
    this.ctt = "გადახდის მრიცხველი";
    this.frq = "აზარტი";
    this.left = "მარცხნივ";
    this.nmb = "მარჯვნივ";
    this.rpm = "ავტომატურად";
    this.ok = "კი";
    this.kjk = "გაუქმება";
    this.vbr = "აზარტი";
    this.qwc = "ნახევარი";
    this.nob = "თამაშის წესები";
    this.etp = "თამაშის წესები";
    this.ejf = "BONUS!";
    this.tvl = "ბონუს";
    this.qdp = "დააჭირეთ ნებისმიერ ღილაკს რომ გააგრძელოთ";
    this.qpl = "არა საკმარისი კრედიტი.";
    this.uqu = "შეეხეთ ეკრანს რომ გააგრძელოთ";
    this.lat = "ჩატვირთვის  ...";
    this.fti = "ჩატვირთვის  ისტორია  ...";
    this.tus = "საკომუნიკაციო შეცდომა";
    this.hcw = "თქვენ ერთ ერთი ლიმიტი ამოწურეთ!";
    this.hnk = "თქვენ უფასო თამაშების მაქსიმალური რაოდენობის ლიმიტი უკვე ამოწურეთ!";
    this.jma = "თამაში დასრულდება";
    this.shq = "თამაში გადაიტვირთება";
    this.pvd = "მოგებულია";
    this.nbm = "wins";
    this.nxg = "V A L U E";
    this.error = "შეცდომა";
    this.aio = "უფასო თამაში";
    this.kmo = "თამაშის  ნომერი";
    this.lmv = "სათამაშო დრო";
    this.fou = "ბოლო ";
    this.ipx = "თამაშები";
    this.kdo = "დეპოზიტი";
    this.audio = "ხმა";
    this.hwj = "მუსიკა";
    this.asb = "სრული ეკრანი";
    this.vhq = "სრული ეკრანი";
    this.language = "ენის";
    this.lis = "მომავალში აღარ ჩვენება";
    this.dyc = "ხმის ჩატვირთვა ვერ ხერხდება!";
    this.fnb = "არასაკმარისი რესურსები!";
    this.aed = "გინდათ ხმის გარეშე ითამაშოთ?";
    this.apj = "გთხოვთ მოაბრუნოთ თქვენი მოწყობილობა!";
    this.trr = "გთხოვთ, გამორთოთ პირადი რეჟიმი თქვენს ბრაუზერში რომ შეძლოთ თამაში.";
    this.lch = "ეს თამაში ოპტიმიზირებულია Google Chrome-ისათვის.";
    this.jyo = "გთხოვთ გამოიყენოთ";
    this.nwv = "-ის მიმდინარე ვერსია";
    this.vuo = "სამწუხაროდ, ამ ბრაუზერზე თამაში სრულად ვერ ხერხდება.";
    this.czj = "ამ თამაშის თამაში უფასოდ შეუძლებელია!";
    this.cfg = "ჩართეთ თქვენი მოწყობილობა პორტრეტის რეჟიმზე რომ ითამაშოთ ისე თითქოს რეალურ სლოტ მოწყობილობაზე თამაშობდეთ!";
    this.lhw = "მოარგეთ თამაშის ინტერფეისი თქვენს საჭიროებებს!";
    this.bhg = "აირჩიეთ სწორი ფერი რომ გააორმაგოთ მოგება";
    this.yvz = "აირჩიეთ კარტის სწორი ფერი რომ გააოთხმაგოთ მოგება";
    this.uln = "დადეთ ფსონი რომ გაზარდოთ მოგების შანსი";
    this.gms = "მთლიანი თამაშები";
    this.ijn = "ფსონი მთლიანად";
    this.tce = "მთლიანი მოგება";
    this.nlk = "მთლიანი სათამაშო დრო";
    this.fdn = "მე გავეცანი ამ გზავნილს.";
    this.xyp = "თამაშის|დამთავრება";
    this.law = "მოვლენების ჩანაწერი";
    this.gwf = "ნათამაშები თამაშები არ არის.";
    this.state = "მდგომარეობა";
    this.bye = "ძირითადი თამაში";
    this.zey = "ავტომატურად შეგროვება";
    this.aht = "აღებულ იქნა";
    this.jly = "პირველი დარიგება";
    this.nce = "მეორე დარიგება";
    this.pvj = "მესამე დარიგება";
    this.mjj = "ავტოგამშვების პარამეტრები";
    this.sql = "თამაშების რაოდენობა:";
    this.heu = "შეაჩერეთ ავტოგამშვები";
    this.pni = "კრედიტი უფრო დაბალი ვიდრე:";
    this.ekg = "კრედიტი უფრო მაღალი ვიდრე:";
    this.peo = "მოიგეთ უფრო მეტი ვიდრე:";
    this.fpq = "ავტოგამშვები შეჩერდება ბონუსის დასაწყისში.";
    this.zhb = "გააზიარეთ ფეისბუქზე";
    this.uhj = "სტატისტიკა";
    this.of = "/";
    this.mlm = "Bonus თამაში";
    this.ysh = "ბონუსი";
    this.fxo = "ინფორმაცია";
    this.rqr = "პარამეტრ.";
    this.zfa = "ხელახლა დატრიალების";
    this.zzx = "მეტი ინფორმაციისათვის, იხილეთ თამაშის წესები.";
    this.wan = "რეალობის შემოწმება";
    this.znq = "თქვენ მოითხოვეთ რეალობის შემოწმება.";
    this.jyr = "თქვენი თამაშის ისტორიის სანახავად დააჭირეთ მოვლენების ჩანაწერი-ს.";
    this.bgs = "Game break";
    this.prd = "Game limits";
    this.tes = "Self test";
    this.nbn = "თეორიული დაბრუნება მოთამაშეზე ამ თამაშში არის XY."
}
tcn.prototype = new vyj;

function txf() {
    this.cwk = "A MINIMUM TÉT";
    this.qbj = "MAXIMUM TÉT";
    this.zlr = "MIN. TÉT";
    this.oow = "MAX. TÉT";
    this.ver = "TÉT";
    this.start = "START";
    this.tbm = "SÚGÓ";
    this.ijo = "SÚGÓ";
    this.xvj = "MENÜ";
    this.rvl = "MENÜ";
    this.njb = "STOP";
    this.dgi = "HITEL";
    this.bjm = "A JÁTÉKNAK VÉGE";
    this.lor = "NYEREMÉNY!";
    this.xfx = "SOK SZERENCSÉT!";
    this.win = "NYEREMÉNY";
    this.emh = "UTOLSÓ NYER.";
    this.uqh = "FELÍR";
    this.hzv = "FELÍR";
    this.ryz = "SZORZÁS";
    this.vuj = "AUTO|START";
    this.aum = "FELEZÉS";
    this.ymw = "KILÉPÉS";
    this.ppb = "START";
    this.ccw = "VÁLASSZON TÉTET";
    this.upm = "FELEZÉS";
    this.ret = "VISSZA A|JÁTÉKHOZ";
    this.yen = "Összes Nyeremény";
    this.qig = "Figyelmeztetés";
    this.wrs = "ÖSSZES";
    this.gdy = "KÉREM VÁRJON ...";
    this.ohv = "Menü";
    this.zmp = "SEBESSÉG";
    this.suj = "A MEGHIBÁSODÁS ÉRVÉNYTELENÍT MINDEN JÁTÉKOT ÉS KIFIZETÉST.";
    this.etu = "T O V Á B B";
    this.vgt = "AUTOSTART";
    this.ctt = "SÚGÓ";
    this.frq = "SZORZÁS";
    this.left = "BAL";
    this.nmb = "JOBB";
    this.ok = "OK";
    this.kjk = "MÉGSEM";
    this.vbr = "Szorzás";
    this.qwc = "Felezés";
    this.nob = "JÁTÉKSZABÁLYOK";
    this.etp = "JÁTÉKSZABÁLYOK";
    this.ejf = "Bónusz!";
    this.tvl = "BÓNUSZ";
    this.qdp = "A FOLYTATÁSHOZ NYOMJON MEG EGY GOMBOT";
    this.qpl = "NINCS ELÉG HITEL";
    this.nxg = "V A L U E";
    this.nbm = "nyeremények";
    this.of = "/";
    this.uqu = "ÉRINTSE MEG A KÉPERNYŐT A FOLYTATÁSHOZ";
    this.lat = "BETÖLTÉSE ...";
    this.fti = "JÁTÉK TÖRTÉNET BETÖLTÉSE ...";
    this.tus = "Kommunikációs hiba";
    this.hcw = "Elérte az egyik limitet!";
    this.hnk = "Elérte a szabad játékok maximum számát!";
    this.jma = "A játék megállítva";
    this.shq = "Játék újraindul";
    this.pvd = "NYERT";
    this.error = "HIBA";
    this.aio = "FREEPLAY";
    this.rpm = "AUTO";
    this.kmo = "JÁTÉK ID";
    this.lmv = "Játék Idő";
    this.fou = "utolsó";
    this.ipx = "játék";
    this.kdo = "HITEL";
    this.audio = "HANG";
    this.hwj = "ZENE";
    this.asb = "TELJES KÉPERNYŐ";
    this.vhq = "TELJES KÉPERNYŐ";
    this.language = "NYELV";
    this.lis = "Ne mutassa mégegyszer";
    this.dyc = "A hangot nem lehet betölteni!";
    this.fnb = "Források hiányoznak!";
    this.aed = "Játék hang nélkül?";
    this.rqr = "BEÁLLÍTÁS";
    this.apj = "Kérjük fordítsa el a készüléket!";
    this.fxo = "INFÓ";
    this.trr = "A játékhoz kérem tiltsa le a Privát Böngészés módot a böngészőjében.";
    this.lch = "Ez a játék Google Chrome böngészőre van optimalizálva.";
    this.jyo = "Kérjük használja a(z)";
    this.nwv = " legújabb verzióját!";
    this.vuo = "Sajnos ez a böngésző nem teljesen támogatott.";
    this.czj = "Ez a játék nem indítható FreePlay módban!";
    this.cfg = "Fordítsa a készülékét álló módba, hogy úgy játsszon, mint egy igazi nyerőgépen!";
    this.lhw = "Állítsa be a játék felületét az Ön igényeinek megfelelően!";
    this.bhg = "VÁLASSZA KI A MEGFELELŐ SZÍNT, HOGY MEGDUPLÁZZA A NYEREMÉNYT";
    this.yvz = "VÁLASSZA KI A MEGFELELŐ KÁRTYASZÍNT, HOGY MEGNÉGYSZEREZZE A NYEREMÉNYT";
    this.uln = "SZORZÁS EGY LEHETŐSÉG, HOGY NÖVELJE A NYEREMÉNYT";
    this.uhj = "Statisztika";
    this.gms = "Összes Játék";
    this.ijn = "Összes Tét";
    this.tce = "Összes Nyeremény";
    this.nlk = "Összes Játék Idő";
    this.fdn = "Elolvastam az üzenetet.";
    this.xyp = "KILÉPÉS";
    this.law = "Előzmények";
    this.gwf = "Nincsenek játékok.";
    this.state = "STÁTUSZ";
    this.bye = "Fő Játék";
    this.zey = "Autom. Felírás";
    this.aht = "Felírva";
    this.mlm = "Bónusz játék";
    this.zfa = "Respin";
    this.ysh = "Bónusz";
    this.jly = "Első Leosztás";
    this.nce = "Második Leosztás";
    this.pvj = "Harmadik Leosztás";
    this.mjj = "AUTOSTART BEÁLLÍTÁS";
    this.sql = "Játékok száma:";
    this.heu = "Stop autostart";
    this.pni = "A hitel kevesebb, mint:";
    this.ekg = "A hitel több, mint:";
    this.peo = "A nyeremény több, mint:";
    this.fpq = "Az AUTOSTART funkció kikapcsolódik a bónusz játék kezdetén.";
    this.zhb = "Megosztás a Facebook-on";
    this.zzx = "KIEGÉSZÍTŐ TÁJÉKOZTATÁST A JÁTÉKSZABÁLYOKBAN TALÁL.";
    this.wan = "Reality Check";
    this.znq = "Ön egy valóság-ellenőrzést kért.";
    this.jyr = "Nyomja meg az ELŐZMÉNYEK lehetőséget, hogy megtekintse a játéka előzményeit.";
    this.bgs = "Game break";
    this.prd = "Game limits";
    this.tes = "Self test";
    this.nbn = "A JÁTÉKOSNAK AZ ELVI KIFIZETÉS ÖSSZEGE EBBEN A JÁTÉKBAN XY."
}
txf.prototype = new vyj;

function egh() {
    this.cwk = "MIZA MINIMĂ ESTE";
    this.qbj = "MIZA MAXIMĂ";
    this.zlr = "MIZA MIN.";
    this.oow = "MIZA MAX.";
    this.ver = "MIZĂ";
    this.start = "START";
    this.tbm = "AJUTOR";
    this.ijo = "LISTA|CÂŞTIGURI";
    this.xvj = "MENIU";
    this.rvl = "MENIUL|JOCULUI";
    this.njb = "STOP";
    this.dgi = "CREDIT";
    this.bjm = "SFÂRŞIT JOCUL";
    this.lor = "CÂŞTIGĂTOR!";
    this.xfx = "MULT NOROC!";
    this.win = "CÂŞTIG";
    this.emh = "ULTIMUL CÂŞTIG";
    this.uqh = "COLECTA";
    this.hzv = "COLECTA";
    this.ryz = "JOC";
    this.vuj = "AUTO|START";
    this.aum = "COLECTARE|1/2";
    this.ymw = "IEŞIRE";
    this.ppb = "APĂSAŢI START";
    this.ccw = "ALEGEŢI MIZA";
    this.upm = "COLECTARE|1/2";
    this.ret = "ÎNAPOI|LA JOC";
    this.yen = "Câştig total";
    this.qig = "Avertizare";
    this.wrs = "TOTAL";
    this.gdy = "AŞTEPTAŢI VĂ ROG ...";
    this.ohv = "Meniul Jocului";
    this.zmp = "VITEZĂ";
    this.suj = "FĂRĂ GARANŢIE LA DEFECTAREA APARATULUI.";
    this.etu = "C O N T I N U A R E";
    this.vgt = "AUTOSTART";
    this.ctt = "LISTA CÂŞTIGURI";
    this.frq = "JOC";
    this.left = "STÂNGA";
    this.nmb = "DREAPTA";
    this.ok = "OK";
    this.kjk = "ÎNTRERUPERE";
    this.vbr = "Joc";
    this.qwc = "Colectare 1/2";
    this.nob = "REGULILE JOCULUI";
    this.etp = "REGULILE|JOCULUI";
    this.ejf = "Bonus!";
    this.tvl = "BONUS";
    this.qdp = "PENTRU CONTINUARE APASĂ PE UN BUTON";
    this.qpl = "CREDIT INSUFICIENT.";
    this.nbm = "câştigă";
    this.nxg = "V A L U E";
    this.of = "DIN";
    this.uqu = "ATINGEȚI ECRANUL PENTRU A CONTINUA";
    this.lat = "ÎNCARCĂ ...";
    this.fti = "ÎNCARCĂ ISTORIC ...";
    this.tus = "Eroare de comunicare";
    this.hcw = "Aţi atins una dintre limite!";
    this.hnk = "Aţi atins numărul maxim de jocuri gratis!";
    this.jma = "Jocul se încheie";
    this.shq = "Jocul se restartează";
    this.pvd = "CÂŞTIGAT";
    this.error = "EROARE";
    this.aio = "FREEPLAY";
    this.rpm = "AUTO";
    this.kmo = "ID JOC";
    this.lmv = "TIMP DE JOC";
    this.fou = "ultimele";
    this.ipx = "jocuri";
    this.kdo = "CREDIT";
    this.audio = "AUDIO";
    this.hwj = "MUZICĂ";
    this.asb = "ECRAN COMPLET";
    this.vhq = "ECRAN|COMPLET";
    this.language = "LIMBA";
    this.lis = "Nu reafișați";
    this.dyc = "Sunetele nu pot fi încărcate!";
    this.fnb = "Lipsesc resurse!";
    this.aed = "Jucaţi fără sunet?";
    this.rqr = "SETĂRI";
    this.apj = "Vă rugăm opriţi aparatul!";
    this.fxo = "INFO";
    this.trr = "Vă rugăm dezactivaţi PRIVATE MODE în browser-ul dvs. pentru a juca.";
    this.lch = "Acest joc este optimizat pentru Google Chrome.";
    this.ljd = "Vă rugăm utilizaţi versiunea actuală";
    this.vuo = "Din păcate acest browser nu este sprijinit complet.";
    this.czj = "Acest joc nu poate fi pornit în modul freeplay!";
    this.cfg = "Treceţi aparatul dvs. în modul portret, pentru a juca ca la o maşină automată!";
    this.lhw = "Ajustează interfaţa de joc nevoilor dvs!";
    this.bhg = "SELECTEAZĂ CULOAREA CORECTĂ PENTRU DUBLAREA CÂŞTIGULUI";
    this.yvz = "SELECTEAZĂ CULOAREA CORECTĂ A CĂRŢII PENTRU A CÂŞTIGA DE 4 ORI";
    this.uln = "JOACĂ PENTRU ŞANSA DE A CREŞTE PROFITUL";
    this.uhj = "Statistică";
    this.gms = "Număr jocuri";
    this.ijn = "Pariuri totale";
    this.tce = "Câştig total";
    this.nlk = "Timp total de joc";
    this.fdn = "Am citit mesajul.";
    this.xyp = "ÎNCHEIERE|JOC";
    this.law = "ISTORIC";
    this.gwf = "Nu există jocuri.";
    this.state = "STATUT";
    this.bye = "Joc principal";
    this.zey = "Auto colectare";
    this.aht = "Colectat";
    this.mlm = "Bonusspins";
    this.zfa = "Respin";
    this.ysh = "Bonus";
    this.jly = "Primul Deal";
    this.nce = "Al doilea deal";
    this.pvj = "Al treilea deal";
    this.mjj = "SETĂRI AUTOSTART";
    this.sql = "Numărul jocurilor:";
    this.heu = "Oprire autostart";
    this.pni = "Credit sub:";
    this.ekg = "Credit peste:";
    this.peo = "Câștig peste:";
    this.fpq = "Autostart se va opti la începerea bonusului.";
    this.zhb = "Distribuie Facebook";
    this.zzx = "PENTRU INFORMAŢII SUPLIMENTARE, VEZI REGULILE JOCULUI.";
    this.wan = "Reality Check";
    this.znq = "Ai cerut un Reality Check.";
    this.jyr = "Apasă ISTORIC pentru a vedea istoricul tău de joc.";
    this.bgs = "Game break";
    this.prd = "Game limits";
    this.tes = "Self test";
    this.nbn = "DECONTAREA TEORETICĂ CĂTRE JUCĂTORI A ACESTUI JOC ESTE DE XY."
}
egh.prototype = new vyj;

function slg() {
    this.cwk = "MÍNIMA APOSTA É";
    this.qbj = "MÁX. APOSTA";
    this.zlr = "MÍN. APOSTA";
    this.oow = "MÁX. APOSTA";
    this.ver = "APOSTA";
    this.start = "PARTIDA";
    this.tbm = "AJUDA";
    this.ijo = "ESQUEMA|DE PAGOS";
    this.xvj = "MENU";
    this.rvl = "SELEÇÃO|DE JOGOS";
    this.njb = "PARADA";
    this.dgi = "CRÉDITO";
    this.bjm = "FIM DO JOGO";
    this.lor = "VENCEDOR!";
    this.xfx = "BOA SORTE!";
    this.win = "GANHO";
    this.emh = "ULTIMO GANHO";
    this.uqh = "COLETAR";
    this.hzv = "COLETAR";
    this.ryz = "JOGADA";
    this.vuj = "AUTO|PARTIDA";
    this.aum = "METADE";
    this.ymw = "SAÍDA";
    this.ppb = "PREMIR PARTIDA";
    this.ccw = "SELECIONAR APOSTA";
    this.upm = "METADE";
    this.ret = "VOLTAR|PARA|O JOGO";
    this.yen = "Ganho total";
    this.qig = "Aviso";
    this.wrs = "TOTAL";
    this.gdy = "AGUARDE POR FAVOR ...";
    this.ohv = "Seleção de jogos";
    this.zmp = "VELOCIDADE";
    this.suj = "NÃO SE ASSUME RESPONSABILIDADE POR AVARIAS NA MÁQUINA.";
    this.etu = "C O N T I N U A R";
    this.vgt = "AUTOPARTIDA";
    this.ctt = "ESQUEMA DE PAGOS";
    this.frq = "JOGADA";
    this.left = "ESQUERDA";
    this.nmb = "DIREITA";
    this.ok = "OK";
    this.kjk = "CANCELAR";
    this.vbr = "Jogada";
    this.qwc = "Metade";
    this.nob = "REGRAS DO JOGO";
    this.etp = "REGRAS|DO JOGO";
    this.ejf = "Bonus!";
    this.tvl = "BONUS";
    this.qdp = "PREMIR QUALQUER TECLA PARA CONTINUAR";
    this.qpl = "NÃO HÁ CRÉDITO SUFICIENTE!";
    this.nbm = "ganha";
    this.nxg = "V A L U E";
    this.of = "DE";
    this.uqu = "TOCAR NA TELA PARA CONTINUAR";
    this.lat = "CARREGANDO ...";
    this.fti = "CARREGANDO HISTÓRICO ...";
    this.tus = "Erro de comunicação";
    this.hcw = "Alcançou um dos limities!";
    this.hnk = "Alcançou a quantidade máxima de jogos livres!";
    this.jma = "O jogo será encerrado";
    this.shq = "O jogo será reiniciado";
    this.pvd = "GANHOU";
    this.error = "ERRO";
    this.aio = "FREEPLAY";
    this.rpm = "AUTO";
    this.kmo = "ID JOGO";
    this.lmv = "Playing Time";
    this.fou = "Últimos";
    this.ipx = "jogos";
    this.kdo = "DEPOSIT";
    this.audio = "AUDIO";
    this.hwj = "MUSIC";
    this.asb = "TELA CHEIA";
    this.vhq = "TELA|CHEIA";
    this.language = "IDIOMA";
    this.lis = "Não exibir novamente";
    this.dyc = "Sounds não podem ser carregados!";
    this.fnb = "Faltam recursos!";
    this.aed = "Jogar sem som?";
    this.rqr = "AJUSTES";
    this.apj = "Favor girar o seu aparelho!";
    this.fxo = "INFORMAÇÃO";
    this.trr = "Favor desativar o MODO PRIVADO no browser para iniciar o jogo.";
    this.lch = "Este jogo é otimizado por Google Chrome.";
    this.ljd = "Favor usar a versão atual de";
    this.vuo = "Infelizmente este browser não é completamente suportado.";
    this.czj = "Este jogo não pode ser iniciado no modo de jogo livre!";
    this.cfg = "Girar o seu aparelho para o modo de portrait, para jogar como em uma máquina real!";
    this.lhw = "Adapte a interface do jogo às suas necessidades!";
    this.bhg = "ESCOLHA A COR CERTA PARA DOBRAR O GANHO";
    this.yvz = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.uln = "GAMBLE PARA A CHANCE DE AUMENTAR O GANHO";
    this.uhj = "Estatísticas";
    this.gms = "Número de jogos";
    this.ijn = "Aposta total";
    this.tce = "Ganho total";
    this.nlk = "Tempo total do jogo";
    this.fdn = "Eu lí esta mensagem.";
    this.xyp = "ENCERRAR|JOGO";
    this.law = "HISTÓRICO";
    this.gwf = "Ainda não existem jogos.";
    this.state = "ESTADO";
    this.bye = "Jogo principal";
    this.zey = "Coletado automaticamente";
    this.aht = "Coletado";
    this.mlm = "Bonusspins";
    this.zfa = "Respin";
    this.ysh = "Bonus";
    this.jly = "Primeiro Deal";
    this.nce = "Segundo Deal";
    this.pvj = "Terceiro Deal";
    this.mjj = "AJUSTES AUTOPARTIDA";
    this.sql = "Número de jogos:";
    this.heu = "Parar autopartida";
    this.pni = "Crédito menor do que:";
    this.ekg = "Crédito maior do que:";
    this.peo = "Ganho maior do que:";
    this.fpq = "O autopartida será parado no início do bonus.";
    this.zhb = "Participar no Facebook";
    this.zzx = "PARA MAIS INFORMAÇÕES, CONSULTE AS REGRAS DO JOGO.";
    this.wan = "Reality Check";
    this.znq = "Solicitaste um Reality Check.";
    this.jyr = "Pressione HISTÓRICO para ver seu histórico de jogos.";
    this.bgs = "Game break";
    this.prd = "Game limits";
    this.tes = "Self test";
    this.nbn = "O PAGAMENTO TEÓRICO AO JOGADOR PARA ESTE JOGO É DE XY."
}
slg.prototype = new vyj;

function zuw() {
    this.cwk = "LA MISE MINIMALE EST DE";
    this.qbj = "MISE MAX.";
    this.zlr = "MISE MINI";
    this.oow = "MISE MAX.";
    this.ver = "MISE";
    this.start = "DEPART";
    this.tbm = "AIDE";
    this.ijo = "TABLEAU|DES PAIEMENTS";
    this.xvj = "MENU";
    this.rvl = "PLUS|DE JEUX";
    this.njb = "ARRÊTEZ";
    this.dgi = "CRÉDIT";
    this.bjm = "FIN DU JEU";
    this.lor = "GAGNANT!";
    this.xfx = "BONNE CHANCE!";
    this.win = "GAIN";
    this.emh = "DERNIER GAIN";
    this.uqh = "ENCAISSER";
    this.hzv = "ENCAISSER";
    this.ryz = "DOUBLER";
    this.vuj = "AUTO|LANCER";
    this.aum = "ENCAISSER|MOITIÉ";
    this.ymw = "SORTIE";
    this.ppb = "APPUYEZ SUR START";
    this.ccw = "CHOISIR LA MISE";
    this.upm = "ENCAISSER|MOITIÉ";
    this.ret = "RETOUR|AU JEU";
    this.yen = "Gain total";
    this.qig = "Avertissement";
    this.wrs = "TOTALE";
    this.gdy = "ATTENDEZ S'IL VOUS PLAÎT ...";
    this.ohv = "Plus de jeux";
    this.zmp = "VITESSE";
    this.suj = "Á L'OCCASION D´ERREUR D´APPAREIL DÉCLINER TOUTE RESPONSABILITÉ.";
    this.etu = "C O N T I N U E R";
    this.vgt = "AUTO LANCER";
    this.ctt = "TABLEAU DES PAIEMENTS";
    this.frq = "DOUBLER";
    this.left = "GAUCHE";
    this.nmb = "DROITE";
    this.ok = "OK";
    this.kjk = "ANNULER";
    this.vbr = "Doubler";
    this.qwc = "Encaisser moitié";
    this.nob = "RÈGLES DU JEU";
    this.etp = "RÈGLES DU JEU";
    this.ejf = "Bonus!";
    this.tvl = "BONUS";
    this.qdp = "APPUYEZ SUR UNE TOUCHE POUR CONTINUER";
    this.qpl = "PAS ASSEZ DE CRÉDIT";
    this.nbm = "gagne";
    this.nxg = "V A L U E";
    this.of = "SUR";
    this.uqu = "EFFLEURE L'ÉCRAN POUR CONTINUER";
    this.lat = "CHARGEMENT EN COURS ...";
    this.fti = "CHARGEMENT DE L'HISTORIQUE EN COURS ...";
    this.tus = "Erreur de communication";
    this.hcw = "Vous avez atteint une des limites!";
    this.hnk = "Vous avez atteint le nombre maximum des jeux gratuits!";
    this.jma = "Le jeu sera terminé";
    this.shq = "Le jeu sera démarré de nouveau";
    this.pvd = "GAGNÉ";
    this.error = "ERREUR";
    this.aio = "JEU GRATUIT";
    this.rpm = "AUTO";
    this.kmo = "ID DU JEU";
    this.lmv = "TEMPS DE JEU";
    this.fou = "Les";
    this.ipx = "derniers jeux";
    this.kdo = "AVOIR";
    this.audio = "AUDIO";
    this.hwj = "MUSIQUE";
    this.asb = "PLEIN ÉCRAN";
    this.vhq = "PLEIN|ÉCRAN";
    this.language = "LANGUE";
    this.lis = "Ne pas afficher encore une fois";
    this.dyc = "Impossible de charger des sounds!";
    this.fnb = "Manque de ressources!";
    this.aed = "Jouer sans son?";
    this.rqr = "CONFIGUR.";
    this.apj = "Merci de tourner votre matériel!";
    this.fxo = "INFO";
    this.trr = "Veuillez désactiver le MODE PRIVÉ dans le navigateur afin de démarrer le jeu.";
    this.lch = "Ce jeu est optimisé pour Google Chrome.";
    this.ljd = "Veuilllez utiliser la version à jour de";
    this.vuo = "Malheureusement, ce browser n'est intégralement supporté.";
    this.czj = "Impossible de démarrer ce jeu au mode jeu gratuit!";
    this.cfg = "Tournez votre matériel dans le mode portrait pour jouer comme sur une véritable machine!";
    this.lhw = "Adapte l'interface de jeu à tes besoins!";
    this.bhg = "CHOISIS LA BONNE COULEUR AFIN DE DOUBLER LE GAIN";
    this.yvz = "CHOISIS LA BONNE COULEUR DE LA CARTE AFIN DE QUADRUPLER LE GAIN";
    this.uln = "GAMBLE POUR LA CHANCE DE MULTIPLIER LE GAIN";
    this.uhj = "Statistiques";
    this.gms = "Nombre des jeux";
    this.ijn = "Total des mises";
    this.tce = "Gain total";
    this.nlk = "Temps total du jeu";
    this.fdn = "J'ai lu le message";
    this.xyp = "TERMINER|LE JEU";
    this.law = "Historique";
    this.gwf = "Il n'y a pas encore de jeux joués.";
    this.state = "ÉTAT";
    this.bye = "Jeu principal";
    this.zey = "Pris automatiquement";
    this.aht = "Pris";
    this.mlm = "Bonusspins";
    this.zfa = "Respin";
    this.ysh = "Bonus";
    this.jly = "Premier Deal";
    this.nce = "Deuxième Deal";
    this.pvj = "Troisième Deal";
    this.mjj = "AUTOSTART CONFIGURATION";
    this.sql = "Nombre des jeux:";
    this.heu = "Arrêter autostart";
    this.pni = "Crédit inférieur à:";
    this.ekg = "Crédit supérieur à:";
    this.peo = "Gain supérieur à:";
    this.fpq = "L'autostart est arrêté au début du bonus.";
    this.zhb = "Partager sur Facebook";
    this.zzx = "POUR PLUS D'INFORMATIONS, CONSULTEZ LES RÈGLES DU JEU.";
    this.wan = "Reality Check";
    this.znq = "Tu as demandé un Reality Check.";
    this.jyr = "Appuie sur HISTORIQUE pour afficher ton historique de jeu.";
    this.bgs = "Game break";
    this.prd = "Game limits";
    this.tes = "Self test";
    this.nbn = "LE VERSEMENT THÉORIQUE AU JOUEUR POUR CE JEU S'ÉLÈVE À XY."
}
zuw.prototype = new vyj;

function itk() {
    this.cwk = "NAJMANJI ULOG JE";
    this.qbj = "MAX ULOG";
    this.zlr = "MIN. ULOG";
    this.oow = "MAKS. ULOG";
    this.ver = "ULOG";
    this.start = "START";
    this.tbm = "POMOĆ";
    this.ijo = "LISTA DOBITAKA";
    this.xvj = "IZBORNIK";
    this.rvl = "VIŠE|IGARA";
    this.njb = "STOP";
    this.dgi = "KREDIT";
    this.bjm = "KRAJ IGRE";
    this.lor = "DOBITAK!";
    this.xfx = "SRETNO!";
    this.win = "DOBITAK";
    this.emh = "ZADNJI DOBITAK";
    this.uqh = "UPIŠI";
    this.hzv = "UPIŠI";
    this.ryz = "DUPLANJE";
    this.vuj = "AUTO|START";
    this.aum = "UZMI|1/2";
    this.ymw = "IZLAZ";
    this.ppb = "PRETISNITE START";
    this.ccw = "BIRAJTE ULOG";
    this.upm = "UZMI|1/2";
    this.ret = "POVRATAK|U IGRU";
    this.yen = "Ukubni dobitci";
    this.qig = "Upozorenje";
    this.wrs = "UKUBNI";
    this.gdy = "MOLIMO PRIČEKAJTE ...";
    this.ohv = "Više igara";
    this.zmp = "BRZINA";
    this.suj = "Kod kvara na uređaju nema jamstva.";
    this.etu = "D A L J E";
    this.vgt = "AUTOSTART";
    this.ctt = "LISTA DOBITAKA";
    this.frq = "DUPLANJE";
    this.left = "LIJEVA";
    this.nmb = "DESNA";
    this.ok = "OK";
    this.kjk = "PREKID";
    this.vbr = "Duplanje";
    this.qwc = "Uzmi 1/2";
    this.nob = "PRAVILA IGRE";
    this.etp = "PRAVILA IGRE";
    this.ejf = "Bonus!";
    this.tvl = "BONUS";
    this.qdp = "ZA NASTAVITI PRITISNITE BILO KOJU TIPKU";
    this.qpl = "NEMATE DOVOLJNO KREDITA.";
    this.nbm = "dobici";
    this.nxg = "V A L U E";
    this.of = "OD";
    this.uqu = "ZA NASTAVAK DODIRNITE ZASLON";
    this.lat = "UČITAVANJA ...";
    this.fti = "POVIJEST UČITAVANJA ...";
    this.tus = "Komunikacijska pogreška";
    this.hcw = "Dostigli ste jednu od graničnih vrijednosti!";
    this.hnk = "Dostigli ste maksimum besplatnih igara!";
    this.jma = "Igra se zatvara";
    this.shq = "Igra se iznova učitava";
    this.pvd = "OSVOJENO";
    this.error = "POGREŠKA";
    this.aio = "FREEPLAY";
    this.rpm = "AUTO";
    this.kmo = "ID IGRE";
    this.lmv = "Vrijeme igre";
    this.fou = "posljednjih";
    this.ipx = "igara";
    this.kdo = "DEPOZIT";
    this.audio = "ZVUKA";
    this.hwj = "GLAZBA";
    this.asb = "PUN ZASLON";
    this.vhq = "PUN ZASLON";
    this.language = "JEZIKA";
    this.lis = "Ne prikazuj ponovo";
    this.dyc = "Zvukovi se ne mogu učitati!";
    this.fnb = "Nedostaju resursi!";
    this.aed = "Želite li igrati uz zvuk?";
    this.rqr = "POSTAVKE";
    this.apj = "Uključite svoj uređaj!";
    this.fxo = "INFORMACIJE";
    this.trr = "Molimo deaktivirajte PRIVATNI MOD u Vašem pregledniku kako biste mogli igrati";
    this.lch = "Ova igra je optimizirana za Google Chrome.";
    this.ljd = "Molimo koristite se trenutnom inačicom";
    this.vuo = "Nažalost ovaj preglednik nije u potpunosti podržan";
    this.czj = "Ova se igra ne može pokrenuti u režimu slobodne igre!";
    this.cfg = "Podesite svoj uređaj na portretni format kako biste igrali kao na pravoma automatu!";
    this.lhw = "Prilagodite sučelje igre svojim potrebama!";
    this.bhg = "ODABERI PRAVU BOJU I TIME UDVOSTRUČI DOBITAK";
    this.yvz = "ODABERI PRAVI ZNAK I TIME UČETVEROSTRUČI DOBITAK";
    this.uln = "KOCKANJEM OSVOJI ŠANSU ZA POVEĆANJE DOBITKA";
    this.uhj = "Statistike";
    this.gms = "Ukupno igara";
    this.ijn = "Ukupni ulog";
    this.tce = "Ukupno dobitaka";
    this.nlk = "Ukupno vrijeme igre";
    this.fdn = "Pročitao sam ovu poruku";
    this.xyp = "IZLAZ|IZ IGRE";
    this.law = "Povijest";
    this.gwf = "Nema odigranih igara.";
    this.state = "STANJE";
    this.bye = "Glavna igra";
    this.zey = "Auto. pokupljeno";
    this.aht = "Pokupljeno";
    this.mlm = "Besplatne igre";
    this.zfa = "Dodatne okretaje";
    this.ysh = "Bonus";
    this.jly = "Prvo dijeljenje";
    this.nce = "Drugo dijeljenje";
    this.pvj = "Treće dijeljenje";
    this.mjj = "POSTAVKE AUTOMATSKE IGRE";
    this.sql = "Ukupno igara:";
    this.heu = "Zaustavljanje automatske igre";
    this.pni = "Kredit manji od:";
    this.ekg = "Kredit veći od:";
    this.peo = "Dobitak veći od:";
    this.fpq = "Automatska igra će se zaustaviti na početku besplatne igre.";
    this.zhb = "Podijeli na Facebooku";
    this.zzx = "ZA VIŠE INFORMACIJA POGLEDAJTE PRAVILA IGRE.";
    this.wan = "Reality Check";
    this.znq = "Zatražili ste Reality Check.";
    this.jyr = "Pritisni POVIJEST za pregled prijašnjih igara.";
    this.bgs = "Game break";
    this.prd = "Game limits";
    this.tes = "Self test";
    this.nbn = "TEORETSKI POVRATAK NA IGRAČA ZA OVU IGRU JE XY."
}
itk.prototype = new vyj;

function vhe() {
    this.cwk = "MINIMA PUNTATA È";
    this.qbj = "PUNTATA MASSIMA";
    this.zlr = "MIN. PUNTATA";
    this.oow = "MASS. PUNTATA";
    this.ver = "PUNTATA";
    this.start = "START";
    this.tbm = "AIUTO";
    this.ijo = "TABELLA VINCITE";
    this.xvj = "MENU";
    this.rvl = "SCELTA|GIOCHI";
    this.njb = "STOP";
    this.dgi = "CREDITO";
    this.bjm = "FINE PARTITA";
    this.lor = "VINCITORE!";
    this.xfx = "BUONA FORTUNA!";
    this.win = "VINCITA";
    this.emh = "ULTIMA VINCITA";
    this.uqh = "INCASSA";
    this.hzv = "INCASSA";
    this.ryz = "GAMBLE";
    this.vuj = "AUTO|START";
    this.aum = "METÀ";
    this.ymw = "FINE";
    this.ppb = "PREMI START";
    this.ccw = "SCEGLI PUNTATA";
    this.upm = "METÀ";
    this.ret = "RITORNO|AL GIOCO";
    this.yen = "Totale vincita";
    this.qig = "Attenzione";
    this.wrs = "TOTALE";
    this.gdy = "ATTENDERE PREGO ...";
    this.ohv = "Scelta Giochi";
    this.zmp = "VELOCITÀ";
    this.suj = "In caso di malfunzionamento nessuna responsabilità assunta.";
    this.etu = "C O N T I N U A";
    this.vgt = "AUTOSTART";
    this.ctt = "TABELLA VINCITE";
    this.frq = "GAMBLE";
    this.left = "SINISTRA";
    this.nmb = "DESTRA";
    this.ok = "OK";
    this.kjk = "CANCELLA";
    this.vbr = "Gamble";
    this.qwc = "Metà";
    this.nob = "REGOLAMENTO";
    this.etp = "REGOLAMENTO";
    this.ejf = "Bonus!";
    this.tvl = "BONUS";
    this.qdp = "PREMI UN TASTO PER CONTINUARE";
    this.qpl = "CREDITO INSUFFICIENTE!";
    this.nbm = "vince";
    this.nxg = "V A L U E";
    this.of = "DI";
    this.uqu = "TOCCARE LO SCHERMO PER CONTINUARE";
    this.lat = "STA CARICANDO ...";
    this.fti = "STA CARICANDO LA CRONACA ...";
    this.tus = "Errore di comunicazione";
    this.hcw = "Hai raggiunto uno dei limiti!";
    this.hnk = "Hai raggiunto il numero massimo di free games!";
    this.jma = "La partita sta terminando";
    this.shq = "La partita sta ripartendo";
    this.pvd = "VINTO";
    this.error = "ERRORE";
    this.aio = "FREEPLAY";
    this.rpm = "AUTO";
    this.kmo = "GAME ID";
    this.lmv = "Durata del gioco";
    this.fou = "Ultime partite";
    this.ipx = "";
    this.kdo = "DEPOSITO";
    this.audio = "AUDIO";
    this.hwj = "MUSICA";
    this.asb = "SCHERMO INTERO";
    this.vhq = "SCHERMO INTERO";
    this.language = "LINGUA";
    this.lis = "Non mostrare di nuovo";
    this.dyc = "Suoni non caricabili!";
    this.fnb = "Mancano risorse!";
    this.aed = "Giocare senza suoni?";
    this.rqr = "SETTAGGI";
    this.apj = "Prego girare l'apparecchio!";
    this.fxo = "INFO";
    this.trr = "Prego disattivare il MODO PRIVATO nel browser per iniziare la partita";
    this.lch = "La partita è ottimizzata per Google Chrome.";
    this.ljd = "Prego utilizzare la versione attuale di";
    this.vuo = "Purtroppo il presente browser non viene supportato interamente";
    this.czj = "Impossibile avviare questa partita nel modo freeplay!";
    this.cfg = "Girare l'apparecchio nel modo ritratto per giocare come su un apparecchio vero!";
    this.lhw = "Aggiusta l'interfaccia del gioco come ti piace!";
    this.bhg = "SCEGLI IL COLORE GIUSTO PER RADDOPPIARE LA VINCITA";
    this.yvz = "SCEGLI IL SEME GIUSTO PER QUADRUPLARE LA VINCITA";
    this.uln = "GAMBLE PER L'OPPORTUNITÀ DI AUMENTARE LA VINCITA";
    this.uhj = "Statistica";
    this.gms = "Totale partite";
    this.ijn = "Totale puntata";
    this.tce = "Totale vincita";
    this.nlk = "Totale durata del gioco";
    this.fdn = "Ho letto il messaggio";
    this.xyp = "TERMINARE|LA PARTITA";
    this.law = "Cronaca";
    this.gwf = "Nessuna partita giocata.";
    this.state = "STATO";
    this.bye = "Partita principale";
    this.zey = "Raccolto autom.";
    this.aht = "Raccolto";
    this.mlm = "Bonusspin";
    this.zfa = "Respin";
    this.ysh = "Bonus";
    this.jly = "Primo deal";
    this.nce = "Secondo deal";
    this.pvj = "Terzo deal";
    this.mjj = "SETTAGGI AUTOSTART";
    this.sql = "Numero di partite:";
    this.heu = "Fermare l'autostart";
    this.pni = "Credito più basso di:";
    this.ekg = "Credito più alto di:";
    this.peo = "Vincita più alta di:";
    this.fpq = "L'autostart si ferma all'inizio del bonus.";
    this.zhb = "Dividi su facebook";
    this.zzx = "PER ULTERIORI INFORMAZIONI CONSULTARE LE REGOLE DI GIOCO.";
    this.wan = "Reality Check";
    this.znq = "Avete richiesto un Reality Check.";
    this.jyr = "Premere CRONACA per mostrare la cronaca della giocata.";
    this.bgs = "Game break";
    this.prd = "Game limits";
    this.tes = "Self test";
    this.nbn = "IL PAGAMENTO TEORICO DI QUESTO GIOCO IN FAVORE DEL GIOCATORE AMMONTA A XY."
}
vhe.prototype = new vyj;

function rwa() {
    this.cwk = "MIN. INSATSEN ÄR";
    this.qbj = "MAXIMAL INSATS";
    this.zlr = "MIN. INSATS";
    this.oow = "MAX. INSATS";
    this.ver = "INSATS";
    this.start = "STARTA";
    this.tbm = "HJÄLP";
    this.ijo = "VINSTTABELL";
    this.xvj = "MENY";
    this.rvl = "FLER|SPEL";
    this.njb = "STOPP";
    this.dgi = "KREDIT";
    this.bjm = "SPELET ÄR SLUT";
    this.lor = "VINNARE!";
    this.xfx = "LYCKA TILL!";
    this.win = "VINN";
    this.emh = "SENASTE VINSTEN";
    this.uqh = "INKASSERA";
    this.hzv = "INKASSERA";
    this.ryz = "DUBBLERA";
    this.vuj = "AUTO|START";
    this.aum = "HÄLFTEN|1/2";
    this.ymw = "AVSLUTA";
    this.ppb = "TRYCK PÅ START";
    this.ccw = "VÄLJ INSATS";
    this.upm = "HÄLFTEN";
    this.ret = "ÅTERGÅ|TILL SPELET";
    this.yen = "Total Vinst";
    this.qig = "Varning";
    this.wrs = "TOTALT";
    this.gdy = "VAR VÄNLIG VÄNTA ...";
    this.ohv = "Fler spel";
    this.zmp = "TEMPO";
    this.suj = "Vid tekniskt fel annulleras alla insatser och spel.";
    this.etu = "F O R T S Ä T T";
    this.vgt = "AUTOSTART";
    this.ctt = "VINSTTABELL";
    this.frq = "DUBBLERA";
    this.left = "VÄNSTER";
    this.nmb = "HÖGER";
    this.ok = "OK";
    this.kjk = "AVBRYT";
    this.vbr = "Dubblering";
    this.qwc = "Hälften";
    this.nob = "SPELREGLER";
    this.etp = "SPELREGLER";
    this.ejf = "Bonus!";
    this.tvl = "BONUS";
    this.qdp = "TRYCK PÅ EN KNAPP FÖR ATT FORTSÄTTA";
    this.qpl = "FÖR LÅGT SALDO!";
    this.nbm = "vinster";
    this.nxg = "V A L U E";
    this.of = "AV";
    this.uqu = "PEKA PÅ SKÄRMEN FÖR ATT FORTSÄTTA";
    this.lat = "LÄSER ...";
    this.fti = "LÄSER IN HISTORIKEN ...";
    this.tus = "Kommunikationsfel";
    this.hcw = "Du har nått en av gränserna!";
    this.hnk = "Du har nått det maximala antalet gratisspel!";
    this.jma = "Spelet avslutas";
    this.shq = "Spelet startas om";
    this.pvd = "VUNNA";
    this.error = "FEL";
    this.aio = "GRATISSPEL";
    this.rpm = "AUTO";
    this.kmo = "SPEL-ID";
    this.lmv = "SPELTID";
    this.fou = "senaste";
    this.ipx = "spelen";
    this.kdo = "INSÄTTNING";
    this.audio = "LJUD";
    this.hwj = "MUSIK";
    this.asb = "HELSKÄRM";
    this.vhq = "HELSKÄRM";
    this.language = "SPRÅK";
    this.lis = "Visa inte igen";
    this.dyc = "Ljud kan inte laddas!";
    this.fnb = "Resurser saknas!";
    this.aed = "Spela utan ljud?";
    this.rqr = "INSTÄLLN.";
    this.apj = "Vänd din enhet!";
    this.fxo = "INFO";
    this.trr = "Avaktivera PRIVATLÄGET i din webbläsare för att spela spelet.";
    this.lch = "Det här spelet är optimerat för Google Chrome.";
    this.ljd = "Använd den senaste versionen av";
    this.vuo = "Tyvärr stöds inte den här webbläsaren fullt ut.";
    this.czj = "Det här spelet kan inte startas i gratisspelsläget!";
    this.cfg = "Håll din enhet i porträttläge för att spela som på en riktig spelautomat!";
    this.lhw = "Anpassa spelgränssnittet efter dina behov!";
    this.bhg = "VÄLJ RÄTT FÄRG FÖR ATT DUBBLA VINSTEN";
    this.yvz = "VÄLJ RÄTT FÄRGSVIT FÖR ATT FYRDUBBLA VINSTEN";
    this.uln = "SPELA FÖR ATT FÅ CHANSEN ATT ÖKA VINSTEN";
    this.uhj = "Statistik";
    this.gms = "Totalt antal spel";
    this.ijn = "Totalinsats";
    this.tce = "Totalvinst";
    this.nlk = "Total speltid";
    this.fdn = "Jag har läst detta meddelande";
    this.xyp = "AVSLUTA|SPELET";
    this.law = "Historik";
    this.gwf = "Inga spel har spelats.";
    this.state = "STATUS";
    this.bye = "Huvudspel";
    this.zey = "Auto. Inkasserat";
    this.aht = "Inkasserat";
    this.mlm = "Bonusspinn";
    this.zfa = "Respin";
    this.ysh = "Bonus";
    this.jly = "Första given";
    this.nce = "Andra given";
    this.pvj = "Tredje given";
    this.mjj = "AUTOSTARTINSTÄLLNINGAR";
    this.sql = "Antal spelrundor:";
    this.heu = "Stoppa autospel";
    this.pni = "Saldo lägre än:";
    this.ekg = "Saldo högre än:";
    this.peo = "Vinst högre än:";
    this.fpq = "Autospelen kommer att stoppas då bonusen startar.";
    this.zhb = "Dela på Facebook";
    this.zzx = "SE SPELREGLERNA FÖR MER INFORMATION.";
    this.wan = "Reality Check";
    this.znq = "Du har begärt att få en statusuppdatering.";
    this.jyr = "Tryck på HISTORIK för att visa din spelhistorik.";
    this.bgs = "Spelpaus";
    this.prd = "Spelgränser";
    this.tes = "Självtest";
    this.nbn = "DEN TEORETISKA ÅTERBETALNINGEN TILL SPELAREN FÖR DET HÄR SPELET ÄR XY."
}
rwa.prototype = new vyj;

function eir() {
    this.gzg = "LINES";
    this.avj = "LINE";
    this.aub = "BET / LINE";
    this.ysv = "WAYS";
    this.yeq = "WAY";
    this.gzp = "BONUSSPINS LEFT";
    this.evs = "TOTAL BONUSSPINS";
    this.nfi = "BONUSSPINS PLAYED";
    this.zmw = "BONUSSPINS LEFT";
    this.lhn = "CONGRATULATIONS YOU WIN!";
    this.tev = "BONUS WIN";
    this.lwg = "SCATTER";
    this.qco = "SCATTERED:";
    this.fpz = "SYMBOLS";
    this.svv = "SYMBOL";
    this.xdu = "You win extra BONUSSPINS!";
    this.egj = "Wins pay only from left to right!";
    this.war = "BONUS ENTRY WIN:";
    this.lqn = "BONUSSPINS";
    this.ncx = "BONUSSPINS are played with the same bet and number of lines as the initiating game.";
    this.tvz = "Line Wins: Only the highest line win is paid on each line played. Line wins are a multiple of the line bet. Line wins from different lines are added.";
    this.rik = "Scatter Wins: Scatter wins are a multiple of the total bet. Wins from Scatter symbols are added to the line wins.";
    this.uua = "BONUS HELP";
    this.sid = "SYMBOL HELP";
    this.uha = "WINLINE HELP";
    this.reg = "WINWAY HELP";
    this.uad = "You win an extra 15 BONUSSPINS!";
    this.uyg = "Play the Bonus until you have no BONUSSPINS left. BONUSSPINS can be re-triggered during the Bonus.";
    this.nnl = "GAMBLE AMOUNT";
    this.tbv = "RED/BLACK GAMBLE TO WIN";
    this.jrx = "SUIT GAMBLE TO WIN";
    this.zoq = "15 BONUSSPINS are won with 3, 4 or 5 SCATTERED Symbols on any position! All BONUSSPIN wins are multiplied by 3.";
    this.ale = "Finish placing your bets!";
    this.rst = "Place your bets please!";
    this.abw = "No more bets!";
    this.uno = "Good Luck!";
    this.sez = "Better luck next time!";
    this.hje = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.wwj = "Bets accepted!";
    this.lfz = "Bets not accepted!";
    this.vef = "Game in progress, please wait!";
    this.hrs = "WIN UP TO";
    this.bnk = "WIN HISTORY";
    this.ylf = "BONUS END";
    this.bsp = "Bonus Multiplier";
    this.fxr = "Freespins!";
    this.apz = "FREESPINS PLAYED";
    this.udy = "FREESPIN WIN";
    this.ivx = "CONGRATULATION!";
    this.azy = "Congratulation, you get";
    this.kio = "You have";
    this.pki = "freespins remaining!"
}
eir.prototype = new stb;

function yit() {
    this.gzg = "ЛИНИИ";
    this.avj = "ЛИНИЯ";
    this.aub = "СТ. / ЛИНИЮ";
    this.gzp = "OСТАЛОСЬ ПРИЗОВЫХ ВРАЩЕНИЙ";
    this.evs = "Бонусные вращения";
    this.nfi = "СЫГРАННО ВРАЩЕНИЙ";
    this.zmw = "OСТАЛОСЬ ПРИЗОВЫХ ВРАЩЕНИЙ";
    this.lhn = "ПОЗДРАВЛЯЕМ! ВЫ ВЫИГРАЛИ!";
    this.tev = "БОНУС ВЫИГРЫШ";
    this.lwg = "SCATTER";
    this.qco = "SCATTERED:";
    this.fpz = "СИМВОЛЫ";
    this.svv = "СИМВОЛ";
    this.lqn = "призовых вращений";
    this.egj = "Все выигрыши считаются только слевa направо.";
    this.xdu = "Вы выиграли дополнительные бонусные вращения!";
    this.ncx = "Ставка и количество линий в игре бонусные вращения те же самые, что и в инициировавшей игре.";
    this.tvz = "Линейные выигрыши: Засчитывается только максимальный выигрыш на каждой линии. Размер линейных выигрышей – многократная сумма ставки. Линейные выигрыши на разных линиях суммируются.";
    this.rik = "Выигрыши Scatter Сумма выигрышей Scatter – многократная сумма общей ставки. Выигрыши с символами Scatter прибавляются к линейным выигрышам.";
    this.ysv = "ПУТИ";
    this.yeq = "ПУТЬ";
    this.uua = "БОНУС – ПОМОЩЬ";
    this.sid = "СИМВОЛ ПОМОЩЬ";
    this.uha = "ЛИНИИ ВЫИГРЫША ПОМОЩЬ";
    this.reg = "ПОМОЩЬ К ПУТИ К ВЫИГРЫШУ";
    this.hje = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ В 4 РАЗА";
    this.nnl = "СУММА РИСКА";
    this.tbv = "РИСКНУТЬ КРАСНАЯ/ЧЕРНАЯ";
    this.jrx = "ВЫБОР МАСТИ";
    this.hrs = "ВЫИГРАЙ ДО";
    this.bnk = "ХРОНИКА ВЫИГРЫШЕЙ";
    this.ylf = "КОНЕЦ БОНУСА";
    this.fxr = "бесплатных игр!";
    this.apz = "СЫГРАННЫЕ БЕСПЛАТНЫЕ ИГРЫ";
    this.udy = "ВЫИГРЫШ БЕСПЛАТНОЙ ИГРЫ";
    this.ivx = "ПОЗДРАВЛЯЕМ!";
    this.azy = "Поздравляем, вы получили";
    this.kio = "У вас еще";
    this.pki = "бесплатных игр!";
    this.wwj = "Ставки признаны!";
    this.lfz = "Ставки не признаны!";
    this.vef = "Игра в процессе, пожалуйста, подождите...";
    this.ale = "Игра сейчас начнется!";
    this.rst = "Сделайте ставку, пожалуйста!";
    this.abw = "Ставок больше нет!";
    this.uno = "Удачи!";
    this.sez = "Желаем удачи в следующий раз!";
    this.uad = "Вы выиграли следующие 15 призовых вращений барабанов!";
    this.uyg = "Бонус призовых вращений заканчивается когда призовых вращений больше нет. Дополнительные призовые вращения могут быть добавлены к Бонусу призовых вращений.";
    this.zoq = "Вы получите 15 призовых вращений барабанов при выпадении 3, 4 или 5 символов СКАТТЕР на любой позиции. Все выигрыши умножаются на 3."
}
yit.prototype = new vdq;

function wok() {
    this.gzg = "LÍNEAS";
    this.avj = "LÍNEA";
    this.aub = "APUE. / LÍNEA";
    this.gzp = "BONUSSPINS RESTANTES";
    this.evs = "TOTAL DE BONUSSPINS";
    this.nfi = "BONUSSPINS JUGADOS";
    this.zmw = "BONUSSPINS RESTANTES";
    this.lhn = "ENHORABUENA, HAS GANADO!";
    this.tev = "PREMIO BONUS";
    this.lwg = "SCATTER";
    this.qco = "SCATTERED:";
    this.fpz = "SIMBOLOS";
    this.svv = "SIMBOLO";
    this.bsp = "Multiplicador de bonus";
    this.war = "PREMIO ENTRADA BONUS:";
    this.lqn = "JUEGOS LIBRES";
    this.egj = "Premios de la izquierda a la derecha!";
    this.xdu = "Ha ganado BONUSSPINS extra.";
    this.ncx = "Los BONUSSPINS se juegan con la misma apuesta y el número de lineas que el juego inicial.";
    this.tvz = "Premios de línea: Sólo se paga el mayor premio de línea por cada línea jugada. Los premios de línea son un múltiplo de la apuesta de la línea. Se suman los premios de línea de las diferentes líneas.";
    this.rik = "Premios Scatter: Los premios Scatter son múltiplos de la apuesta total. Los premios de los símbolos scatter se suman a los premios de la línea.";
    this.ysv = "CAMINOS";
    this.yeq = "CAMINO";
    this.uua = "AYUDA DE BONUS";
    this.sid = "SÍMBOLO AYUDA";
    this.uha = "LÍNEA GANADORA AYUDA";
    this.reg = "AYUDA FORMAS DE PREMIO";
    this.hje = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.nnl = "PREMIO";
    this.tbv = "ROJO/NEGRO PREMIO";
    this.jrx = "PREMIO DE SIMBOLO";
    this.hrs = "GANANCIAS HASTA";
    this.bnk = "HISTORIAL DE GANANCIAS";
    this.ylf = "FIN DE BONUS";
    this.fxr = "Giros gratis!";
    this.apz = "GIROS GRATIS JUGADOS";
    this.udy = "PREMIO GIRO GRATIS";
    this.ivx = "¡ENHORABUENA!";
    this.azy = "¡Enhorabuena, ha conseguido";
    this.kio = "¡Le quedan";
    this.pki = "giros gratis!";
    this.wwj = "Aceptar apuestas!";
    this.lfz = "Apuestas rechazadas!";
    this.vef = "El juego no ha concluido, por favor espere!";
    this.ale = "El juega va a comenzar!";
    this.rst = "Haga juego!";
    this.abw = "No más apuestas!";
    this.uno = "¡Mucha suerte!";
    this.sez = "¡Mejor suerte la próxima vez!";
    this.uad = "Premio de 15 Freespins addicionales!";
    this.uyg = "El bono concluye cuando todos los BONUSSPINS se hayan jugado. En bono pueden ganarse BONUSSPINS adicionales.";
    this.zoq = "Se gana 15 Freespins con 3, 4 o 5 simbolos de SCATTER en alguna posicion! Se triplican todos los premios de freespins."
}
wok.prototype = new qzk;

function rrg() {
    this.gzg = "LINIEN";
    this.avj = "LINIE";
    this.aub = "EINS. / LINIE";
    this.gzp = "VERBLEIBENDE BONUSSPINS";
    this.evs = "TOTAL BONUSSPINS";
    this.nfi = "GESPIELTE BONUSSPINS";
    this.zmw = "VERBLEIBENDE BONUSSPINS";
    this.lhn = "GRATULIERE GEWONNEN!";
    this.tev = "BONUS GEWINN";
    this.lwg = "SCATTER";
    this.qco = "SCATTERED:";
    this.fpz = "SYMBOLE";
    this.svv = "SYMBOL";
    this.bsp = "Bonus Multiplikator";
    this.war = "BONUS START GEWINN:";
    this.lqn = "BONUSSPINS";
    this.egj = "Gewinne werden nur von links nach rechts gewertet!";
    this.xdu = "Zusätzliche BONUSSPINS gewonnen!";
    this.ncx = "Die BONUSSPINS werden mit demselben Einsatz und Linienanzahl wie das auslösende Spiel gespielt.";
    this.tvz = "Liniengewinne: Nur der höchste Liniengewinn je gespielter Linie zählt. Liniengewinne sind ein Vielfaches des Linieneinsatzes. Die Liniengewinne von verschiedenen Linien werden addiert.";
    this.rik = "Scattergewinne: Scatter-Gewinne sind ein Vielfaches des Gesamteinsatzes. Gewinne aus Scatter-Symbolen werden den Liniengewinnen hinzugezählt.";
    this.ysv = "WEGE";
    this.yeq = "WEG";
    this.uua = "BONUS HILFE";
    this.sid = "SYMBOL HILFE";
    this.uha = "GEWINNLINIEN HILFE";
    this.reg = "GEWINNWEGE HILFE";
    this.hje = "WÄHLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.nnl = "RISIKO";
    this.tbv = "ROT/SCHWARZ CHANCE";
    this.jrx = "SYMBOL CHANCE";
    this.hrs = "GEWINNE BIS ZU";
    this.bnk = "GEWINNHISTORIE";
    this.ylf = "BONUS ENDE";
    this.fxr = "Freespins!";
    this.apz = "GESPIELTE FREESPINS";
    this.udy = "FREESPIN GEWINN";
    this.ivx = "GRATULIERE!";
    this.azy = "Gratulation, Sie bekommen";
    this.kio = "Sie haben noch";
    this.pki = "Freespins übrig!";
    this.wwj = "Einsätze akzeptiert!";
    this.lfz = "Einsätze nicht akzeptiert!";
    this.vef = "Spiel läuft, bitte warten!";
    this.ale = "Das Spiel beginnt gleich!";
    this.rst = "Ihre Einsätze bitte!";
    this.abw = "Keine weiteren Einsätze!";
    this.uno = "Viel Glück!";
    this.sez = "Mehr Glück beim nächsten Mal!";
    this.uad = "Weitere 15 BONUSSPINS gewonnen!";
    this.uyg = "Der Bonus endet, wenn alle BONUSSPINS abgespielt worden sind. Zusätzliche BONUSSPINS können im Bonus gewonnen werden.";
    this.zoq = "15 BONUSSPINS werden durch 3, 4 oder 5 SCATTER Symbole auf jeder Position gewonnen! Alle BONUSSPIN Gewinne x 3."
}
rrg.prototype = new rch;

function hdf() {
    this.gzg = "ÇIZGILER";
    this.avj = "ÇİZGİ";
    this.aub = "BANKO / ÇIZGI";
    this.gzp = "KALAN PRIM OYUNLARIR";
    this.evs = "TOPLAM PRİM SPİNLERİ";
    this.nfi = "OYNANAN PRIM OYUNLAR";
    this.zmw = "KALAN PRIM OYUNLARIR";
    this.lhn = "TEBRİKLER KAZANDINIZ!";
    this.tev = "PRIM KAZANCI";
    this.lwg = "SCATTER";
    this.qco = "SCATTERED:";
    this.fpz = "SEMBOLLER";
    this.svv = "SEMBOL";
    this.bsp = "Prim çarpanı";
    this.war = "PRİM GİRİŞ KAZANCI:";
    this.lqn = "BEDAVA OYUNLAR";
    this.egj = "Kazançlar tek soldan sağa değerlendirilir!";
    this.xdu = "Ek PRİM SPİN’LERİ kazandınız!";
    this.ncx = "PRİM SPİNLER başlayacak olan oyunda da aynı banko ve çizgi sayısı ile oynanacaktır.";
    this.tvz = "Çizgi kazançları: Oynanan her çizginin sadece en yüksek çizgi kazancı sayılmaktadır. Çizgi kazançları çizgi bankosunun kat sayısından oluşmaktadır. Çeşitli çizgilerin çizgi kazançları birbirleri ile toplanmaktadır.";
    this.rik = "Scatter kazançları: Scatter-kazançları toplam bankonun kat sayısından oluşmaktadır. Scatter-Sembollerinden elde edilen kazançlar çizgi kazançlarına eklenmektedir.";
    this.ysv = "YOLLAR";
    this.yeq = "YOL";
    this.uua = "PRİM YARDIMI";
    this.sid = "SEMBOL YARDIMI";
    this.uha = "KAZANÇ ÇIZGISI YARDIMI";
    this.reg = "KAZANÇ YOLLARI YARDIM";
    this.hje = "DOĞRU KART RENGİNİ SEÇEREK KAZANCINI DÖRDE KATLARSIN.";
    this.nnl = "RİSK";
    this.tbv = "KIRMIZI/SİYAH ŞANSI";
    this.jrx = "SEMBOL ŞANSI";
    this.hrs = "KAZANANILMASI MÜMKÜN OLAN";
    this.bnk = "KAZANÇ GEÇMİŞİ";
    this.ylf = "PRİM BİTTİ";
    this.fxr = "adet bedava Spin kazandınız!";
    this.apz = "OYNANILAN BEDAVA SPİN'ler";
    this.udy = "BEDAVA SPİN KAZANCI";
    this.ivx = "TEBRİKLER!";
    this.azy = "Tebrikler,";
    this.kio = "Daha";
    this.pki = "adet bedava SPİN'iniz bulunuyor!";
    this.uno = "Bol şans!";
    this.wwj = "Bahisler kabul edildi!";
    this.lfz = "Bahisler kabul edilmedi!";
    this.vef = "Oyun oynanmakta, lütfen bekleyin!";
    this.ale = "Oyun başlamak üzere!";
    this.rst = "Bankolarınız lütfen!";
    this.abw = "Daha fazla banko mümkün değil!";
    this.sez = "Bir dahaki sefer daha şanslı olursun!";
    this.uad = "15 bedava oyun daha kazandın!";
    this.uyg = "Bedava oyun primleri tüm bedava oyunlar oynandığı zaman biter. Bedava oyun primlerinde ek bedava oyunlar kazanılabilir.";
    this.zoq = "Her pozisyondaki 3, 4 veya 5 SCATTERED sembolleri ile 15 tane bedava oyun kazanılır! Tüm bedava oyun kazançları x 3."
}
hdf.prototype = new paq;

function vnk() {
    this.gzg = "LINEK";
    this.avj = "LINKA";
    this.aub = "SÁZKA / LINKA";
    this.gzp = "ZBÝVAJÍCÍ VOLNÉ HRY";
    this.evs = "TOTÁLNÍ BONUSSPINS";
    this.nfi = "ODEHRANÉ BONUS HRY";
    this.zmw = "ZBÝVAJÍCÍ VOLNÉ HRY";
    this.lhn = "GRATULUJEME VYHRÁL JSTE!";
    this.tev = "BONUS VÝHRA";
    this.lwg = "SCATTER";
    this.qco = "SCATTERED:";
    this.fpz = "SYMBOLY";
    this.svv = "SYMBOL";
    this.bsp = "Násobic bonusu";
    this.war = "BONUS STARTUJE VÝHRU:";
    this.lqn = "BONUSSPINS";
    this.egj = "Výhry platí pouze z leva do prava!";
    this.xdu = "Vyhrál jste extra BONUSOVOU hru!";
    this.ncx = "BONUSSPINS sa hrají se stejnou  sázkou a počtem línií jako hra, při které se spustily.";
    this.tvz = "Výhry na línkách: Započítává se jen nejvyšší výhra na lince. Výhry na linkách jsou násobky linkových sázek. Výhry na různých línkách se sčítají.";
    this.rik = "Scatter výhry: Scatter výhry násobí celkovou sázku. Výhry ze Scatter symbolů se připočítávají k výhrám na línkách.";
    this.ysv = "ZPŮSOBY";
    this.yeq = "ZPŮSOB";
    this.uua = "BONUS NÁPOVĚDA";
    this.sid = "SYMBOL NÁPOVĚDA";
    this.uha = "VÝHERNÉ LINIE NÁPOVĚDA";
    this.reg = "WINWAY HELP";
    this.hje = "VYBRAT SPRÁVNOU BARVU KARTY KE ZČTYŘNÁSOBENÍ VÝHRY";
    this.nnl = "VÝHRA";
    this.tbv = "CERVENÁ/CERNÁ VÝHRA";
    this.jrx = "SPRÁVNÁ BARVA KARTY VYHRÁVÁ";
    this.wwj = "Sázky byly akceptovány!";
    this.lfz = "Sázky nebyly akceptovány!";
    this.hrs = "VÝHRA AŽ";
    this.bnk = "HISTORIE VÝHER";
    this.ylf = "KONEC BONUSU";
    this.fxr = "Freespins!";
    this.apz = "FREESPINS PLAYED";
    this.udy = "FREESPIN WIN";
    this.ivx = "GRATULUJEME!";
    this.azy = "Congratulation, you get";
    this.kio = "You have";
    this.pki = "freespins remaining!";
    this.vef = "Hra probíhá, počkejte prosím!";
    this.ale = "Hra Se Hned Spustí!";
    this.rst = "Vaše sázky prosím!";
    this.abw = "Žádné další sázky.";
    this.uno = "Hodne štestí!";
    this.sez = "Příště více štěstí!";
    this.uad = "Vyhráváte dalších 15 volných her!";
    this.uyg = "Bonus je ukoncen po odehrání všech bonusových her. Bonusové hry mohou být získány i behem bonusu.";
    this.zoq = "3, 4 nebo 5 SCATTER symbolu na libovolné pozici vyhrává 15 volných her, výhry ve volné hre jsou násobené 3x."
}
vnk.prototype = new jyg;

function kcs() {
    this.gzg = "LIINID";
    this.avj = "LIIN";
    this.aub = "PAN. / LIINIL";
    this.gzp = "TASUTA KEERUTUSI JÄÄNUD";
    this.evs = "BOONUSKEERUTUSI KOKKU";
    this.nfi = "MÄNGE MÄNGITUD";
    this.zmw = "TASUTA KEERUTUSI JÄÄNUD";
    this.lhn = "PALJU ÕNNE, SA VÕITSID!";
    this.tev = "BOONUSVÕIT";
    this.lqn = "BOONUSKEERUTUST";
    this.nnl = "RISKIMÄNGU SUMMA";
    this.tbv = "PUNANE/MUST RISKIMÄNG";
    this.jrx = "RISKIMÄNG SÜMBOLIGA";
    this.hje = "VÕIDU NELJAKORDISTAMISEKS VALI ÕIGE MAST";
    this.wwj = "Panused aktsepteeritud!";
    this.lfz = "Panuseid ei aktsepteeritud!";
    this.hrs = "VÕIDA KUNI";
    this.bnk = "VÕITUDE AJALUGU";
    this.ylf = "BOONUSE LÕPP";
    this.fxr = "tasuta keerutust!";
    this.apz = "TASUTA KEERUTUSI MÄNGITUD";
    this.udy = "TASUTA KEERUTUSE VÕIT";
    this.ivx = "ÕNNITLEME!";
    this.azy = "Õnnitleme, said";
    this.kio = "Sul on jäänud veel";
    this.pki = "tasuta keerutust!";
    this.vef = "Mäng algab, palun oodake...";
    this.ale = "Lõpeta panuste tegemine!";
    this.rst = "Asetage palun panused!";
    this.abw = "Panuste tegemine lõppenud";
    this.uno = "Soovime edu!";
    this.lwg = "SCATTER";
    this.qco = "SCATTERED:";
    this.fpz = "SÜMBOLID";
    this.svv = "SÜMBOL";
    this.war = "BOONUSVÕIT:";
    this.egj = "Võite arvestatakse ainult vasakult paremale!";
    this.xdu = "Te võitsite lisa BOONUSKEERUTUSI!";
    this.ncx = "BOONUSKEERUTUSED mängitakse sama panuse ja liinide arvuga, nagu boonuse käivitanud mängus.";
    this.ysv = "VÕIMALUSED";
    this.yeq = "VÕIMALUSE";
    this.uad = "Te võitsite lisa 15 BOONUSKEERUTUST!";
    this.uyg = "Mängige kõik tasuta keerutused lõpuni. Tasuta keerutusi võib võita ka tasuta keerutuste boonuse ajal.";
    this.uua = "BOONUSE SPIKKER";
    this.sid = "SÜMBOLI SPIKKER";
    this.uha = "LIINIDE SPIKKER";
    this.reg = "VÕIDUVÕIMALUSE SPIKKER";
    this.tvz = "Liini võidud: Igal mänguliinil makstakse ainult suurimad liinivõidud. Liini võidud korrutatakse liini panusega. Erinevate liinide võidud liidetakse kokku.";
    this.rik = "Scatteri võidud: Scatteri võidud korrutatakse kogupanusega. Scatteri sümboli võidud liidetakse liini võitudele.";
    this.bsp = "Boonuse mitmekordistaja";
    this.sez = "Rohkem õnne järgmisel korral!";
    this.zoq = "3, 4 või 5 TÄHE sümbolit juhuslikel kohtadel annab 15 BOONUSKEERUTUST! Kõik BOONUSKEERUTUSE võidud korrutatakse 3-ga."
}
kcs.prototype = new lec;

function nqz() {
    this.gzg = "ΓΡΑΜΜEΣ";
    this.avj = "ΓΡΑΜΜΗ";
    this.aub = "ΣΤΟIΧΗΜΑ / Γ.";
    this.gzp = "ΕΝΑΠΟΜΕIΝΑΝΤΑ BONUSSPINS";
    this.evs = "ΤΕΛΕΙΩΣ BONUSSPINS";
    this.nfi = "ΠΑΙΓΜEΝΑ BONUSSPINS";
    this.zmw = "ΕΝΑΠΟΜΕIΝΑΝΤΑ BONUSSPINS";
    this.lhn = "ΣΥΓΧΑΡΗΤΗΡΙΑ ΚΕΡΔΙΣΑΤΕ!";
    this.tev = "ΜΠOΝΟΥΣ ΚEΡΔΟΣ";
    this.lwg = "SCATTER";
    this.qco = "SCATTERED:";
    this.fpz = "ΣYΜΒΟΛΑ";
    this.svv = "ΣΎΜΒΟΛΟ";
    this.bsp = "Πολλαπλασιαστής μπόνους";
    this.war = "BONUS START ΚΕΡΔIΖΕΙ:";
    this.lqn = "BONUSSPINS";
    this.egj = "Τα κέρδη μετρούνται από αριστερά προς τα δεξιά!";
    this.xdu = "Κερδίσατε συμπληρωματικούς BONUSSPINS!";
    this.ncx = "Τα γυρίσματα μπόνους, τα BONUSSPINS, παίζονται με το ίδιο ποντάρισμα και τον ίδιο αριθμό σειρών, όπως το αρχικό παιχνίδι.";
    this.tvz = "Κέρδη γραμμών: Μόνο το μεγαλύτερο κέρδος ανά παιγμένη γραμμή προσμετράται. Τα κέρδη των γραμμών αποτελούν πολλαπλάσιο του πονταρίσματος στη γραμμή. Τα κέρδη γραμμών που αφορούν σε διαφορετικές γραμμές προστίθενται.";
    this.rik = "Κέρδη Scatter: Τα κέρδη Scatter αποτελούν πολλαπλάσιο του συνολικού πονταρίσματος. Τα κέρδη από σύμβολα Scatter προσμετρώνται στα κέρδη των γραμμών.";
    this.ysv = "ΔΙΑΔΡΟΜΕΣ";
    this.yeq = "ΔΙΑΔΡΟΜΉ";
    this.uua = "BONUS ΒΟΉΘΕΙΑ";
    this.sid = "ΒΟHΘΕΙΑ ΣΥΜΒOΛΩΝ";
    this.uha = "ΒΟHΘΕΙΑ ΣΕΙΡΩΝ ΚEΡΔΟΥΣ";
    this.reg = "WINWAY ΒΟΗΘΕΙΑ";
    this.hje = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΦΥΛΛΟΥ ΓΙΑ ΝΑ ΤΕΤΡΑΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.nnl = "ΠΟΣΟ ΡΙΣΚΟΥ";
    this.tbv = "ΜΑΥΡΟ/ΚΟΚΚΙΝΟ ΚΕΡΔΟΣ ΡΙΣΚΟΥ";
    this.jrx = "ΣΥΜΒΟΛΟ ΚΕΡΔΟΣ ΡΙΣΚΟΥ";
    this.hrs = "ΚΕΡΔΗ ΕΩΣ";
    this.bnk = "ΙΣΤΟΡΙΚΟ ΚΕΡΔΩΝ";
    this.ylf = "ΛΗΞΗ ΜΠΟΝΟΥΣ";
    this.fxr = "Freespins!";
    this.apz = "FREESPINS ΠΟΥ ΚΑΤΑΝΑΛΏΘΗΚΑΝ";
    this.udy = "FREESPIN ΚΕΡΔΟΣ";
    this.ivx = "ΣΥΓΧΑΡΗΤΗΡΙΑ!";
    this.azy = "Συγχαρητήρια, κερδίσατε";
    this.kio = "Σας απομένουν";
    this.pki = "Freespins!";
    this.wwj = "Γίνονται αποδεκτά πονταρίσματα!";
    this.lfz = "Πονταρίσματα δε γίνονται αποδεκτά!";
    this.vef = "Ενεργό παιχνίδι, παρακαλώ περιμένετε!";
    this.ale = "Το παιχνίδι ξεκινά σε λίγο!";
    this.rst = "Το ποντάρισμα σας, παρακαλώ!";
    this.abw = "Ποντάρισμα τέλος!";
    this.uno = "Καλή τύχη!";
    this.sez = "Καλύτερη τύχη την επόμενη φορά!";
    this.uad = "Κερδίσατε 15 συμπληρωματικούς BONUSSPINS!";
    this.uyg = "Το Bonus τελειώνει, όταν όλα τα BONUSSPINS έχουν παιχθεί. Συμπληρωματικά BONUSSPINS δύνανται να κερδισθούν στο Bonus.";
    this.zoq = "15 BONUSSPINS κερδίζονται με 3, 4 ή 5 σύμβολα ΑΣΤΡΟΥ σε κάθε θέση! Όλα τα BONUSSPINS αποφέρουν τριπλασιασμό κερδών."
}
nqz.prototype = new eec;

function ysn() {
    this.gzg = "ЛИНИИ";
    this.avj = "ЛИНИЯ";
    this.aub = "ЗАЛОГ/Л-Я";
    this.gzp = "БОНУС-ИГРИ ОСТАВАТ";
    this.nfi = "БОНУС-ИГРИ ИЗИГРАНИ";
    this.zmw = "БОНУС-ИГРИ ОСТАВАТ";
    this.lhn = "ПОЗДРАВЛЕНИЯ, ВИЕ СПЕЧЕЛИХТЕ!";
    this.tev = "БОНУС ПЕЧАЛБА";
    this.lqn = "БОНУС-ИГРИ";
    this.nnl = "СУМА ЗА ДУБЛИРАНЕ";
    this.tbv = "ДУБЛИРАЙ ЧЕРВЕНА/ЧЕРНА-ПЕЧАЛБА";
    this.jrx = "ДУБЛИРАНЕ НА КОЗОВ ЦВЯТ-ПЕЧАЛБА";
    this.hje = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УЧЕТВОРИШ ПЕЧАЛБАТА";
    this.wwj = "Залозите са приети!";
    this.lfz = "Залозите не са приети!";
    this.hrs = "СПЕЧЕЛИ ДО";
    this.bnk = "ИСТОРИЯ НА ПЕЧАЛБИТЕ";
    this.ylf = "КРАЙ НА БОНУС";
    this.fxr = "безплатни завъртания!";
    this.apz = "ИЗИГРАНИ БЕЗПЛАТНИ ЗАВЪРТАНИЯ";
    this.udy = "СПЕЧЕЛЕНО БЕЗПЛАТНО ЗАВЪРТАНЕ";
    this.ivx = "ПОЗДРАВЛЕНИЯ!";
    this.azy = "Поздравления, получихте";
    this.kio = "Имате останали";
    this.pki = "безплатни завъртания!";
    this.vef = "Затворено за залози!";
    this.ale = "Приключете със залозите!";
    this.rst = "Поставете своите залози!";
    this.abw = "Край на залозите!";
    this.uno = "Успех!";
    this.evs = "ОБЩО БОНУС ИГРИ";
    this.lwg = "СКАТЕР";
    this.qco = "SCATTERED:";
    this.fpz = "СИМВОЛИ";
    this.svv = "СИМВОЛ";
    this.war = "НАЧАЛНА БОНУС ПЕЧАЛБА:";
    this.egj = "Печалбите се изплащат само от ляво на дясно!";
    this.xdu = "Вие спечелихте допълнителни Бонус игри!";
    this.ncx = "Бонус игрите се играят със същия залог и брой линии, както основната игра.";
    this.ysv = "НАЧИНИ";
    this.yeq = "НАЧИН";
    this.uad = "Печелите допълнителни 15 БОНУС ЗАВЪРТАНИЯ!";
    this.uyg = "Бонус играта продължава до изчерпване на бонус игрите. По време на бонус игра може да се спечелят допълнителни игри.";
    this.uua = "ПОМОЩ ЗА БОНУС";
    this.sid = "ПОМОЩ СИМВОЛ";
    this.uha = "ПОМОЩ ПЕЧЕЛИВША ЛИНИЯ";
    this.reg = "ПОМОЩ ЗА ПЕЧАЛБИ";
    this.tvz = "Печалби на Линия: От всяка активна линия се изплаща само най-голямата печалба. Печалбата от активна линия се умножава по залога на линия. Печалбите от активните линии се събират и формират общата печалба.";
    this.rik = "Скатер печалби: Скатер печалбата се умножава по общият залог. Печалбите от фигурите Скатер се добавят към печалбата от активните линии.";
    this.bsp = "Бонус Множител";
    this.sez = "По-добър успех-следващият път!";
    this.zoq = "15 БОНУС ЗАВЪРТАНИЯ се печелят с 3, 4 или 5 символа ЗВЕЗДА на която и да е позиция! Всичките печалби от Бонус играта се умножават по 3."
}
ysn.prototype = new rdv;

function nqk() {
    this.gzg = "ხაზები";
    this.avj = "ხაზი";
    this.aub = "ფსონი / ხაზი";
    this.ysv = "გზა";
    this.yeq = "გზა";
    this.gzp = "დარჩენილი BONUS თამაშები";
    this.evs = "BONUS თამაშების რაოდენობა ჯამში";
    this.nfi = "უკვე ნათამაშები BONUS თამაშები";
    this.zmw = "დარჩენილი BONUS თამაშები";
    this.lhn = "გილოცავთ თქვენ მოიგეთ!";
    this.tev = "BONUS მოგება";
    this.lwg = "SCATTER";
    this.qco = "SCATTERED:";
    this.fpz = "სიმბოლოები";
    this.svv = "სიმბოლო";
    this.xdu = "თქვენ მოიგეთ დამატებითი BONUS თამაშები!";
    this.egj = "მოგების ანაზღაურება ხდება მხოლოდ მარცხნიდან მარჯვნივ!";
    this.war = "ბონუს ჩანაწერის მოგება:";
    this.lqn = "BONUS თამაშები";
    this.ncx = "BONUS თამაშების თამაში ხდება იგივე ფსონზე და ხაზების რაოდენობაზე, როგორც თამაშის დაწყების დროს.";
    this.tvz = "ხაზის მოგება: თითოეულ ნათამაშებ ხაზზე, მოხდება მხოლოდ უმაღლესი ხაზის მოგების ანაზღაურება. ხაზის მოგება შედგება მრავალჯერადი ხაზის ფსონისაგან. სხვადასხვა ხაზიდან მიღებული მოგება ჯამდება ერთ მოგებად.";
    this.rik = "Scatter მოგება: Scatter მოგება შეადგენს მთლიან ფსონს რამოდენიმეჯერ. მოგება Scatter სიმბოლოებიდან ემატება ხაზის მოგებას.";
    this.uua = "ბონუს დახმარება";
    this.sid = "სიმბოლოს დახმარება";
    this.uha = "მოგების ხაზის დახმარება";
    this.reg = "მოგების გზაზე დახმარება";
    this.uad = "თქვენ მოიგეთ დამატებითი 15 BONUS თამაშები!";
    this.uyg = "ითამაშეთ ბონუსი სანამ BONUS თამაში არ გაგითავდებათ. დამატებითი BONUS თამაშის მოგება შეიძლება ბონუსის დროს.";
    this.nnl = "გარისკვის რიცხვი";
    this.tbv = "წითელი/შავი ითამაშე და მოიგე";
    this.jrx = "ფერი ითამაშე და მოიგე";
    this.zoq = "15 BONUS თამაშის მოგება ხდება 3, 4 ან 5 ვარსკვლავის სიმბოლოთი ნებისმიერ პოზიციაზე! ყველა BONUSSPIN მოგება მრავლდება 3-ზე.";
    this.sez = "გისურვებთ მომავალში უკეთეს იღბალს!";
    this.ale = "დაასრულე ფსონის დადება!";
    this.rst = "მოათავსეთ თქვენი ფსონები გთხოვთ!";
    this.abw = "ფსონები აღარ მიიღება!";
    this.uno = "გისურვებთ წარმატებას!";
    this.hje = "აირჩიეთ კარტის სწორი ფერი რომ გააოთხმაგოთ მოგება";
    this.wwj = "ფსონები მიღებულ იქნა!";
    this.lfz = "ფსონები არ იქნა მიღებული!";
    this.ylf = "ბონუსის დასასრული";
    this.hrs = "-მდე მოგება";
    this.bnk = "მოგების ჩანაწერი";
    this.vef = "თამაში მიმდინარეობს, გთხოვთ დაელოდოთ!";
    this.bsp = "ბონუს მულტიპლიკატორი";
    this.fxr = "უფასო დატრიალება!";
    this.apz = "ნათამაშები უფასო დატრიალებები";
    this.udy = "უფასო დატრიალების მოგება";
    this.ivx = "გილოცავთ!";
    this.azy = "გილოცავთ, თქვენ მიიღეთ";
    this.kio = "თქვენ დაგრჩათ";
    this.pki = "უფასო დატრიალება!"
}
nqk.prototype = new tcn;

function bpr() {
    this.gzg = "VONALAK";
    this.avj = "VONAL";
    this.aub = "TÉT / VONAL";
    this.ysv = "IRÁNY";
    this.yeq = "IRÁNY";
    this.gzp = "MEGMARADT SZABAD JÁTÉKOK";
    this.evs = "ÖSSZES SZABAD JÁTÉK";
    this.nfi = "LEJÁTSZOTT SZABAD JÁTÉKOK";
    this.zmw = "MEGMARADT SZABAD JÁTÉKOK";
    this.lhn = "GRATULÁLUNK, ÖN NYERT!";
    this.tev = "BÓNUSZ NYEREMÉNY";
    this.lwg = "SCATTER";
    this.qco = "SCATTERED:";
    this.fpz = "SZIMBÓLUMOK";
    this.svv = "SZIMBÓLUM";
    this.xdu = "További SZABADJÁTÉKOKAT nyert!";
    this.egj = "A Nyeremények balról jobbra fizetnek!";
    this.war = "BÓNUSZBA LÉPŐ NYEREMÉNY:";
    this.lqn = "SZABAD JÁTÉKOK";
    this.ncx = "Az alapjátéknál beállított tét és nyerővonal számmal játszódik le a SZABAD JÁTÉK is.";
    this.tvz = "Vonal Nyeremények: Csak a legnagyobb nyeremény fizet a megjátszott vonalakon. A vonal nyeremények a vonalankénti tét szorzatai. A különböző vonalankénti nyeremények összeadódnak.";
    this.rik = "Scatter Nyeremények: A Scatter nyeremények az összes tét szorzatai. A Scatter szimbólummal elért nyeremények a vonal nyereményekhez adódnak.";
    this.uua = "BÓNUSZ SÚGÓ";
    this.sid = "SZIMBÓLUM SÚGÓ";
    this.uha = "NYERŐVONAL SÚGÓ";
    this.reg = "NYEREMÉNYÚT SEGÉDLET";
    this.uad = "További 15 SZABADJÁTÉKOT nyert!";
    this.uyg = "Játssza a szabad játék bónuszt ameddig van szabad pörgetése. Ez idő alatt újabb szabad játékokat nyerhet.";
    this.nnl = "FELTETT ÖSSZEG";
    this.tbv = "PIROS/FEKETE NYEREMÉNY";
    this.jrx = "SZÍN NYEREMÉNY";
    this.zoq = "15 SZABAD JÁTÉKOT nyerhet ha 3, 4 vagy 5 CSILLAG szimbólum jelenik meg bármely helyen. Minden SZABAD JÁTÉKBAN elért nyeremény háromszorosan fizet.";
    this.sez = "Több szerencsét máskor!";
    this.ale = "Tétek lezárva!";
    this.rst = "Kérem tegyék meg tétjeiket!";
    this.abw = "A játék elkezdődött, kérem várjon!";
    this.uno = "Sok szerencsét!";
    this.hje = "VÁLASSZA KI A MEGFELELŐ KÁRTYASZÍNT, HOGY MEGNÉGYSZEREZZE A NYEREMÉNYT";
    this.wwj = "Tétek elfogadva!";
    this.lfz = "Nem lehet tétet rakni!";
    this.vef = "Játék folyamatban, kérem várjon!";
    this.hrs = "A NYEREMÉNY AKÁR";
    this.bnk = "JÁTÉK TÖRTÉNET";
    this.ylf = "BÓNUSZ VÉGE";
    this.bsp = "Bónusz szorzó";
    this.fxr = "szabad spint kap!";
    this.apz = "JÁTSZOTT SZABAD SPINEK";
    this.udy = "SZABAD SPIN NYEREMÉNY";
    this.ivx = "GRATULÁLUNK!";
    this.azy = "Gratulálunk, Ön";
    this.kio = "";
    this.pki = "szabad spinje van még!"
}
bpr.prototype = new txf;

function cvx() {
    this.gzg = "LINII";
    this.avj = "LINIE";
    this.aub = "MIZĂ / LINIE";
    this.ysv = "MODURI";
    this.yeq = "MOD";
    this.gzp = "BONUSSPIN RĂMAŞI";
    this.evs = "TOTAL BONUSSPIN";
    this.nfi = "BONUSSPIN JUCAŢI";
    this.zmw = "BONUSSPIN RĂMAŞI";
    this.lhn = "FELICITĂRI CÂŞTIGAT!";
    this.tev = "CÂŞTIG BONUS";
    this.lwg = "SCATTER";
    this.qco = "SCATTERED:";
    this.fpz = "SIMBOLURI";
    this.svv = "SIMBOL";
    this.xdu = "Aţi câştigat BONUSSPIN suplimentari!";
    this.egj = "Câştigurile sunt evaluate numai de la stânga la dreapta!";
    this.war = "CÂŞTIG BONUS START:";
    this.lqn = "BONUSSPIN";
    this.ncx = "BONUSSPIN sunt jucate cu aceeaşi miză şi număr de linii ca jocul iniţial.";
    this.tvz = "Câştiguri linie: Numai câştigul linie maxim pe linie jucată contează. Câştiguri linie sunt un multiplu al mizei liniei. Câştigurile linie ale diferitelor linii sunt adunate.";
    this.rik = "Câştiguri Scatter: Câştigurile Scatter sunt un multiplu al mizei totale. Câştigurile din simbolurile Scatter sunt adăugate la câştigurile linie.";
    this.uua = "AJUTOR BONUS";
    this.sid = "AJUTOR SIMBOL";
    this.uha = "AJUTOR LINII DE CÂŞTIG";
    this.reg = "AJUTOR CĂI DE CÂŞTIG";
    this.uad = "Aţi câştigat 15 BONUSSPIN suplimentari!";
    this.uyg = "Bonusul este terminat când au fost jucaţi toţi BONUSSPIN. BONUSSPIN suplimentari pot fi câştigaţi la bonus.";
    this.nnl = "RISC";
    this.tbv = "ŞANSA ROŞU/NEGRU";
    this.jrx = "SIMBOLUL ŞANSĂ";
    this.zoq = "15 BONUSSPIN sunt câştigaţi prin 3, 4 sau 5 simboluri STEA pe fiecare poziţie! Toţi BONUSSPIN câştiguri x 3.";
    this.sez = "Mai mult noroc data viitoare!";
    this.ale = "Jocul începe imediat!";
    this.rst = "Rugăm mizele dv.!";
    this.abw = "Nu alte mize!";
    this.uno = "Mult noroc!";
    this.hje = "SELECTEAZĂ CULOAREA CORECTĂ A CĂRŢII PENTRU A CÂŞTIGA DE 4 ORI";
    this.wwj = "Pariuri acceptate!";
    this.lfz = "Pariuri neacceptate!";
    this.vef = "Joc în derulare, vă rugăm așteptați!";
    this.hrs = "CÂŞTIGURI PÂNĂ LA";
    this.bnk = "ISTORIC CÂŞTIG";
    this.ylf = "BONUS FINAL";
    this.bsp = "Bonus multiplicator";
    this.fxr = "rotiri libere!";
    this.apz = "ROTIRI GRATUTE JUCATE";
    this.udy = "CÂŞTIG ROTIRI LIBERE";
    this.ivx = "FELICITĂRI!";
    this.azy = "Felicitări, ai primit";
    this.kio = "V-au rămas";
    this.pki = "rotiri gratuite!l"
}
cvx.prototype = new egh;

function stn() {
    this.gzg = "LINHAS";
    this.avj = "LINHA";
    this.aub = "APOSTA / LINHA";
    this.ysv = "FORMAS";
    this.yeq = "FORMA";
    this.gzp = "BONUSSPINS RESTANTES";
    this.evs = "TOTAL DE BONUSSPINS";
    this.nfi = "BONUSSPINS JOGADOS";
    this.zmw = "BONUSSPINS RESTANTES";
    this.lhn = "PARABÉNS, GANHOU!";
    this.tev = "PRÉMIO BONUS";
    this.lwg = "SCATTER";
    this.qco = "SCATTERED:";
    this.fpz = "SÍMBOLOS";
    this.svv = "SÍMBOLO";
    this.xdu = "Ganhou BONUSSPINS adicionais!";
    this.egj = "Prémios só são pagos da esquerda para a direita!";
    this.war = "PRÉMIO ENTRADA BONUS:";
    this.lqn = "BONUSSPINS";
    this.ncx = "Os BONUSSPINS são jogados com a mesma aposta e n° de linhas que o jogo inicial.";
    this.tvz = "Prémios de linha: Só conta o mais alto prémio de linha de cada linha jogada. Prémios de linha são um múltiplo da aposta de linha. Prémios de linha de diversas linhas são adicionados.";
    this.rik = "Prémios Scatter: Prémios Scatter são múltiplos da aposta total. Prémios de símbolos Scatter são adicionados aos prémios de linha.";
    this.uua = "AJUDA BONUS";
    this.sid = "AJUDA SÍMBOLO";
    this.uha = "AJUDA DE LINHAS VENCEDORAS";
    this.reg = "AJUDA DE FORMAS DE PRÊMIO";
    this.uad = "Ganhou 15 BONUSSPINS adicionais!";
    this.uyg = "Jogar Bonus até não restarem mais BONUSSPINS. BONUSSPINS adicionais podem ser ganhos em Bonus.";
    this.nnl = "RISCO";
    this.tbv = "VERMELHO/PRETO CHANCE DE GANHAR";
    this.jrx = "CHANCE DO NAIPE";
    this.zoq = "15 BONUSSPINS são ganhos com 3, 4 ou 5 símbolos de estrelas em qualquer posição! Todos ganhos BONUSSPIN são multiplicados por 3.";
    this.ale = "O jogo começa em breve!";
    this.rst = "Suas apostas por favor!";
    this.abw = "Nenhuma aposta mais!";
    this.uno = "Boa sorte!";
    this.hje = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.wwj = "Apostas aceitas!";
    this.lfz = "Apostas não aceitas!";
    this.vef = "Jogo em andamento, aguarde por favor!";
    this.hrs = "GANHOS ATÉ";
    this.bnk = "HISTÓRICO DO GANHO";
    this.ylf = "FIM BONUS";
    this.bsp = "Multiplicador do bonus";
    this.sez = "Mais sorte da próxima vez!";
    this.fxr = "freespins!";
    this.apz = "FREESPINS JOGADOS";
    this.udy = "GANHO DE FREESPINS";
    this.ivx = "PARABÉNS!";
    this.azy = "Parabéns, ganhas";
    this.kio = "Ainda lhe sobram";
    this.pki = "freespins!"
}
stn.prototype = new slg;

function lqr() {
    this.gzg = "LIGNES";
    this.avj = "LIGNE";
    this.aub = "MISE / LIGNE";
    this.ysv = "CHEMINS";
    this.yeq = "CHEMIN";
    this.gzp = "BONUSSPINS LAISSÉ";
    this.evs = "TOTAL BONUSSPINS";
    this.nfi = "JEUX GRATUITS JOUES";
    this.zmw = "BONUSSPINS LAISSÉ";
    this.lhn = "FELICITATIONS TU AS GAGNE!";
    this.tev = "BONUS GAIN";
    this.lwg = "SCATTER";
    this.qco = "SCATTERED:";
    this.fpz = "SYMBOLES";
    this.svv = "SYMBOLE";
    this.xdu = "Vous gagnez BONUSSPINS extra!";
    this.egj = "Victoires payer seulement de gauche à droite!";
    this.war = "BONUS ENTRÉE WIN:";
    this.lqn = "BONUSSPINS";
    this.ncx = "Les BONUSSPINS sont joué avec la même mise et nombre des lignes comme le jeu avant.";
    this.tvz = "Gains des lignes: Seulement le gain de ligne plus haut par ligne joué compté. Gains des lignes sont un multiple du mise de ligne. Les gains de lignes de lignes differents sont ajouté.";
    this.rik = "Gains de Scatter: Gains de Scatter sont un multiple du toute mise. Gains de symboles Scatter sont ajouter á le gain des lignes.";
    this.uua = "BONUS D'AIDE";
    this.sid = "SYMBOLE D'AIDE";
    this.uha = "WINLINE AIDE";
    this.uad = "Vous avez gagné un supplément de 15 BONUSSPINS!";
    this.uyg = "Le Bonus se Termine une fois tous les BONUSSPINS joués. Des BONUSSPINS supplémentaires peuvent être gagnés pendant la Bonus.";
    this.nnl = "RISQUE";
    this.tbv = "ROUGE/NOIR SIGNIFIE GAIN";
    this.jrx = "GAIN DE SYMBOLES";
    this.zoq = "15 BONUSSPINS sont gagnés avec 3, 4 ou 5 étoiles sur toute position! Tous les gains des BONUSSPINS sont multipliés par 3.";
    this.ale = "Le jeu va commencer tout de suite!";
    this.rst = "Faites vos jeux s'il vous plaît!";
    this.abw = "Rien ne va plus!";
    this.uno = "Bonne chance!";
    this.reg = "AIDE VOIES DE GAINS";
    this.sez = "Meilleure chance la prochaine fois!";
    this.hje = "CHOISIS LA BONNE COULEUR DE LA CARTE AFIN DE QUADRUPLER LE GAIN";
    this.wwj = "Mises acceptées!";
    this.lfz = "Mises refusées!";
    this.vef = "Jeu en cours, merci de patienter!";
    this.hrs = "GAINS JUSQU'À";
    this.bnk = "HISTORIQUE DE GAINS";
    this.ylf = "FIN DU BONUS";
    this.bsp = "Multiplicateur de bonus";
    this.fxr = "Freespins!";
    this.apz = "FREESPINS JOUÉS";
    this.udy = "GAIN DE FREESPIN";
    this.ivx = "FÉLICITATIONS!";
    this.azy = "Félicitations, vous recevez";
    this.kio = "Il vous reste encore";
    this.pki = "Freespins!"
}
lqr.prototype = new zuw;

function oud() {
    this.gzg = "LINIJE";
    this.avj = "LINIJI";
    this.aub = "ULOG / LINIJI";
    this.ysv = "NAČINA";
    this.yeq = "NAČIN";
    this.gzp = "PREOSTALE BESPLATNE IGRE";
    this.evs = "UKUPNO BESPLATNIH IGARA";
    this.nfi = "ODIGRANE BESPLATNE IGRE";
    this.zmw = "PREOSTALE BESPLATNE IGRE";
    this.lhn = "ČESTITAMO, DOBILI STE!";
    this.tev = "BONUS DOBITAK";
    this.lwg = "SCATTER";
    this.qco = "SCATTERED:";
    this.fpz = "SIMBOLI";
    this.svv = "SIMBOL";
    this.xdu = "Dobili ste dodatne BESPLATNE IGRE!";
    this.egj = "Dobitci se isplaćuju samo sa lijeva na desno!";
    this.war = "BONUS POČETNI DOBITAK:";
    this.lqn = "BESPLATNE IGRE";
    this.ncx = "BESPLATNE IGRE se igraju sa istim ulogom i brojem linija kao početna igra.";
    this.tvz = "Linijski dobitak: Samo najveći linijski dobitak za svaku odigranu liniju se isplaćuje. Linijski dobitak je uvišestručeni linijski ulog. Linijski dobitci sa različitih linija se zbrajaju.";
    this.rik = "Scatter dobitak: Scatter dobitak je uvišestručeni ukupni ulog. Dobitci od scatter simbola se zbrajaju sa linijskim dobitcima.";
    this.uua = "POMOĆ ZA BONUS";
    this.sid = "POMOĆ ZA SIMBOL";
    this.uha = "POMOĆ ZA DOBITNE LINIJE";
    this.uad = "Dobili ste dodatnih 15 BESPLATNIH IGARA!";
    this.uyg = "Bonus se završava kada su odigrane sve BESPLATNE IGRE. Dodatne BESPLATNE IGRE se mogu dobiti tijekom Bonusa.";
    this.nnl = "ULAŽETE";
    this.tbv = "POGODI BOJU ZA DOBITAK OD";
    this.jrx = "POGODI SIMBOL ZA DOBITAK OD";
    this.zoq = "3, 4 ili 5 simbola ZVIJEZDA na bilo kojoj poziciji osvajaju 15 BESPLATNIH IGARA! Svi dobici tijekom BESPLATNIH IGARA množe se sa 3.";
    this.ale = "Završte ulaganje!";
    this.rst = "Molimo Vaše uloge!";
    this.abw = "Nema daljnjih uloga!";
    this.uno = "Puno sreće!";
    this.reg = "POMOĆ ZA POBJEDU";
    this.sez = "Više sreće sljedeći put!";
    this.hje = "ODABERI PRAVI ZNAK I TIME UČETVEROSTRUČI DOBITAK";
    this.wwj = "Ulozi su prihvaćeni!";
    this.lfz = "Ulozi nisu prihvaćeni!";
    this.vef = "Igra je u tijeku, sačekajte!";
    this.hrs = "OSVOJI DO";
    this.bnk = "POVIJEST DOBITAKA";
    this.ylf = "KRAJ BESPLATNE IGRE";
    this.bsp = "Bonus multiplikator";
    this.fxr = "slobodnih igara!";
    this.apz = "ODIGRANIH SLOBODNIH IGARA";
    this.udy = "DOBITAK U SLOBODNOJ IGRI";
    this.ivx = "ČESTITAMO!";
    this.azy = "Čestitamo, osvojili ste";
    this.kio = "Preostalo ti je još";
    this.pki = "slobodnih igara!"
}
oud.prototype = new itk;

function got() {
    this.gzg = "LINEE";
    this.avj = "LINEA";
    this.aub = "PUNTATA / LINEA";
    this.ysv = "VIE";
    this.yeq = "VIA";
    this.gzp = "BONUSSPIN RIMASTI";
    this.evs = "TOTALE BONUSSPIN";
    this.nfi = "BONUSSPIN GIOCATI";
    this.zmw = "BONUSSPIN RIMASTI";
    this.lhn = "CONGRATULAZIONI, HAI VINTO!";
    this.tev = "VINCITA BONUS";
    this.lwg = "SCATTER";
    this.qco = "SCATTERED:";
    this.fpz = "SIMBOLI";
    this.svv = "SIMBOLO";
    this.xdu = "Hai vinto altri BONUSSPIN!";
    this.egj = "Le vincite sono valutate dalla sinistra alla destra soltanto!";
    this.war = "VINCITA START BONUS:";
    this.lqn = "BONUSSPIN";
    this.ncx = "Le giocate BONUS si giocano con la stessa puntata e con lo stesso numero di linee della partita iniziale.";
    this.tvz = "Vincite di linea: Soltanto la vincita di linea più alta di ogni linea conta. Le vincite di linea sono la moltiplicazione della puntata per la linea. Le vincite di linea delle diverse linee vengono sommate.";
    this.rik = "Vincite Scatter: Le vincite Scatter sono la moltiplicazione dell'intera puntata del gioco. Le vincite dai simboli Scatter vengono sommate alle vincite di linea.";
    this.uua = "AIUTO BONUS";
    this.sid = "AIUTO SYMBOLO";
    this.uha = "AIUTO WINLINE";
    this.uad = "Hai vinto altri 15 BONUSSPIN!";
    this.uyg = "Il bonus termina quando tutti i BONUSSPIN sono stati giocati. Si possono vincere altri BONUSSPIN nella giocata Bonus.";
    this.nnl = "IMPORTO GAMBLE";
    this.tbv = "ROSSO/NERO GAMBLE PER VINCERE";
    this.jrx = "CHANCE SUIT GAMBLE";
    this.zoq = "15 BONUSSPIN si vincono con 3, 4 o 5 simboli STELLA su ogni posizione! Tutte le vincite BONUSSPIN si moltiplicano x 3.";
    this.ale = "Completare le puntate prego!";
    this.rst = "Prego puntare!";
    this.abw = "Fine puntate!";
    this.uno = "Buona Fortuna!";
    this.reg = "AIUTO MODI DI VINCERE";
    this.sez = "La prossima volta sarai più fortunato!";
    this.hje = "SCEGLI IL SEME GIUSTO PER QUADRUPLARE LA VINCITA";
    this.wwj = "Puntate accettate!";
    this.lfz = "Puntate non accettate!";
    this.vef = "Partita in corso, prego attendere!";
    this.hrs = "VINCITE FINO A";
    this.bnk = "CRONACA DELLE VINCITE";
    this.ylf = "FINE BONUS";
    this.bsp = "Moltiplicatore bonus";
    this.fxr = "Freespins!";
    this.apz = "FREESPIN GIOCATI";
    this.udy = "VINCITA FREESPIN";
    this.ivx = "CONGRATULAZIONI!";
    this.azy = "Congratulazioni, ricevi";
    this.kio = "Sono rimasti";
    this.pki = "freespin!"
}
got.prototype = new vhe;

function jql() {
    this.gzg = "LINJER";
    this.avj = "LINJE";
    this.aub = "INSATS / LINJE";
    this.ysv = "SÄTT";
    this.yeq = "SÄTT";
    this.gzp = "ÅTERSTÅENDE BONUSSPINS";
    this.evs = "BONUSSPINS TOTALT";
    this.nfi = "SPELADE BONUSSPINS";
    this.zmw = "ÅTERSTÅENDE BONUSSPINS";
    this.lhn = "GRATTIS, DU HAR VUNNIT!";
    this.tev = "BONUSVINST";
    this.lwg = "SCATTER";
    this.qco = "SCATTERED:";
    this.fpz = "SYMBOLER";
    this.svv = "SYMBOL";
    this.xdu = "Du har vunnit extra BONUSSPINS!";
    this.egj = "Vinster betalas endast ut från vänster till höger!";
    this.war = "BONUSSTARTSVINST:";
    this.lqn = "BONUSSPINS";
    this.ncx = "BONUSSPINS spelas med samma insats och samma antal linjer som det spel som aktiverade bonusomgången.";
    this.tvz = "Linjevinster: Endast den högsta linjevinster per spelad linje räknas. Linjevinster är en mångdubbling av linjeinsatsen. Linjevinsterna från olika linjer adderas.";
    this.rik = "Scattervinster: Scattervinster är en mångdubbling av den totala insatsen. Vinster från scattersymboler adderas till linjevinsterna.";
    this.uua = "HJÄLP OM BONUS";
    this.sid = "HJÄLP OM SYMBOLER";
    this.uha = "HJÄLP OM VINSTRADER";
    this.reg = "VINSTSÄTTSHJÄLP";
    this.uad = "Du har vunnit ytterligare 15 BONUSSPINS!";
    this.uyg = "Spela ut bonusomgången tills inga BONUSSPINS återstår. Nya BONUSSPINS kan vinnas under bonusomgången.";
    this.nnl = "SPELSUMMA";
    this.tbv = "SPEL OM RÖTT/SVART";
    this.jrx = "SPEL OM FÄRG";
    this.zoq = "15 BONUSSPINS betalas ut för 3, 4 eller 5 SCATTER-symboler på varje position! Alla vinster från BONUSSPIN multipliceras med 3.";
    this.ale = "Spelet har börjat!";
    this.rst = "Placera dina insatser, tack!";
    this.abw = "Inga fler insatser!";
    this.uno = "Lycka till!";
    this.sez = "Bättre lycka nästa gång!";
    this.hje = "VÄLJ RÄTT FÄRGSVIT FÖR ATT FYRDUBBLA VINSTEN";
    this.wwj = "Insatserna accepterade!";
    this.lfz = "Insatserna ej accepterade!";
    this.vef = "Spelet pågår, var vänlig vänta!";
    this.hrs = "VINN UPP TILL";
    this.bnk = "VINSTHISTORIK";
    this.ylf = "BONUSEN SLUT";
    this.bsp = "Bonusmultiplikator";
    this.fxr = "gratisspinn!";
    this.apz = "GRATISSPINN SPELADE";
    this.udy = "GRATISSPINNSVINST";
    this.ivx = "GRATTIS!";
    this.azy = "Grattis, du har fått";
    this.kio = "Du har";
    this.pki = "gratisspinn kvar!"
}
jql.prototype = new rwa;

function jkq() {
    this.nmd = {
        backgroundColor: "rgb(0, 0, 0)"
    };
    this.tlo = {
        backgroundColor: "rgb(0,0,0)",
        nty: "rgba(0,0,0,0.3)"
    };
    this.jgt = {
        font: "arial",
        njm: "bold",
        backgroundColor: "black",
        uaw: "rgb(0,100,10)",
        pir: "rgb(80,255,100)",
        ukp: "rgb(120,120,120)",
        tan: "red",
        pbv: "white",
        ogm: null
    };
    this.gyi = {
        font: "arial",
        njm: "bold",
        backgroundColor: "rgb(0,0,0)",
        tkk: null,
        txr: "rgb(255,255,255)",
        bhj: "rgb(30,30,30)",
        borderColor: "rgb(80,80,80)"
    };
    this.pgu = {
        font: "arial",
        njm: "bold",
        backgroundColor: "black",
        wvz: "rgb(50,50,50)",
        itm: "rgb(255,255,255)",
        txr: "white",
        jya: 0.8,
        ivm: {
            noi: {
                font: "sanf-serif",
                njm: "",
                textAlign: "center",
                frz: "round",
                backgroundColor: "black",
                txr: "white",
                borderColor: null,
                bhj: null,
                mmz: 1
            }
        }
    };
    this.law = {
        font: "arial",
        njm: "bold",
        backgroundColor: "rgb(20,20,30)",
        borderColor: "rgb(0,0,0)",
        jdv: "rgba(255,255,255,0.2)",
        txr: "rgb(255,255,255)",
        cwj: "rgba(0,0,0,0.3)",
        display: {
            njk: "arial",
            yuw: "arial",
            njm: "bold",
            txr: "rgb(255,255,255)",
            clo: "rgb(255,255,255)",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "rgba(255,255,255,0.5)"
        },
        noi: {
            font: "arial",
            njm: "bold",
            txr: "rgb(0,0,0)",
            lnf: "rgb(150,150,150)",
            backgroundColor: "rgba(255,255,255,0.8)",
            tkk: "rgba(255,255,255,1)",
            inh: "rgba(255,255,255,0.8)",
            iaq: "rgba(255,255,255,1)",
            borderColor: "rgba(200,200,200,0.5)",
            frz: "rect",
            pqm: -1
        }
    };
    this.uhj = {
        font: "arial",
        njm: "bold",
        ufj: "rgb(0,0,200)",
        dxy: "rgb(255,255,255)",
        ein: "rgb(0,0,150)",
        backgroundColor: "rgb(220,240,255)",
        kxq: "rgb(180,220,255)",
        nfa: "rgb(10,20,25)",
        zdx: "rgb(130,220,255)",
        ikn: "rgb(130,190,255)",
        txr: "rgb(255,255,255)",
        tjo: "rgb(130,190,255)",
        fyj: "rgb(100,160,255)",
        qmp: "rgb(255,255,255)",
        noi: {
            frz: "rect",
            font: "arial",
            njm: "bold",
            txr: "rgb(255,255,255)",
            xyk: null,
            backgroundColor: "rgb(90,160,255)",
            stg: "rgb(90,160,255)",
            borderColor: "rgb(60,120,200)",
            bhj: "rgb(40,80,140)"
        },
        wxh: {
            frz: "round",
            font: "arial",
            njm: "bold",
            txr: "rgb(255,255,255)",
            xyk: null,
            backgroundColor: "rgba(0,0,100,0.5)",
            stg: "rgba(150,150,255,0.5)",
            borderColor: "rgb(90,170,255)",
            bhj: "rgb(40,80,140)"
        }
    };
    this.sje = {};
    this.aka = {
        xnc: ["rgb(255,0,0)", "rgb(255,200,0)", "rgb(0,255,200)", "rgb(240,240,240)"]
    };
    this.muq = {
        type: "left",
        font: "arial",
        njm: "bold",
        backgroundColor: "rgba(0,0,0,0.7)",
        tkk: null,
        borderColor: "rgb(0,0,0)",
        bhj: "rgb(180,180,180)",
        kxq: "rgba(0,0,0,0.6)",
        xkw: null,
        clo: "rgb(255,200,0)",
        txr: "white",
        idv: {
            font: "arial",
            njm: "bold",
            backgroundColor: "rgb(100,100,100)",
            tkk: "rgb(100,100,100)",
            inh: null,
            iaq: null,
            borderColor: "rgb(100,100,100)",
            txr: "rgb(255,255,255)",
            lnf: "rgb(255,200,0)",
            frz: "triangle",
            pqm: 1
        },
        vyz: {
            font: "arial",
            njm: "bold",
            backgroundColor: "rgb(100,100,100)",
            tkk: "rgb(100,100,100)",
            inh: null,
            iaq: null,
            borderColor: "rgb(100,100,100)",
            txr: "rgb(255,255,255)",
            lnf: "rgb(255,200,0)",
            frz: "triangle",
            pqm: 0
        },
        xsb: {
            font: "arial",
            njm: "bold",
            backgroundColor: "rgb(100,100,100)",
            tkk: "rgb(15,15,15)",
            inh: "rgb(100,100,100)",
            iaq: "rgb(15,15,15)",
            borderColor: "rgb(150,150,150)",
            txr: "rgb(255,255,255)",
            lnf: "rgb(255,200,0)",
            frz: "rect",
            pqm: -1
        },
        display: {
            yuw: "sans-serif",
            njk: "sans-serif",
            njm: "bold",
            clo: null,
            txr: "yellow",
            borderColor: "rgb(100,100,100)",
            bhj: null,
            backgroundColor: "black"
        },
        zcq: {
            font: "arial",
            njm: "bold",
            backgroundColor: null,
            tkk: null,
            txr: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.sqq = {
        font: "arial",
        njm: "bold",
        backgroundColor: "rgb(180,180,180)",
        tkk: "rgb(120,120,120)",
        borderColor: "rgb(80,80,80)",
        bhj: "rgb(30,30,30)",
        txr: "white",
        mwl: {
            font: "arial",
            njm: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            tkk: null,
            inh: "rgba(100,100,100,0.5)",
            iaq: null,
            borderColor: null,
            txr: "white",
            frz: "rect",
            pqm: -1
        },
        idv: {
            font: "arial",
            njm: "bold",
            backgroundColor: "rgb(255,255,255)",
            tkk: "rgb(255,255,255)",
            inh: null,
            iaq: null,
            borderColor: "rgb(255,255,255)",
            txr: "rgb(0,0,0)",
            lnf: "rgb(0,0,0)",
            frz: "triangle",
            pqm: 1
        },
        vyz: {
            font: "arial",
            njm: "bold",
            backgroundColor: "rgb(255,255,255)",
            tkk: "rgb(255,255,255)",
            inh: null,
            iaq: null,
            borderColor: "rgb(255,255,255)",
            txr: "rgb(0,0,0)",
            lnf: "rgb(0,0,0)",
            frz: "triangle",
            pqm: 0
        },
        jde: {
            frz: "rect",
            font: "arial",
            njm: "bold",
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,0.1)",
            txr: "white",
            mmz: 1,
            borderColor: "rgb(255,255,255)",
            bhj: "rgb(220,220,220)"
        },
        display: {
            yuw: "sans-serif",
            njk: "sans-serif",
            njm: "bold",
            clo: null,
            txr: "white",
            borderColor: "white",
            bhj: null,
            backgroundColor: "rgb(0,0,0)"
        },
        zcq: {
            font: "arial",
            njm: "bold",
            backgroundColor: null,
            tkk: null,
            txr: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.opx = {
        mpg: [{
            yuw: "sans-serif",
            nhl: "sans-serif",
            njm: "bold",
            clo: "rgb(236,225,207)",
            rvo: "rgb(214,170,102)",
            xyk: "rgb(245,220,148)",
            myr: "rgb(190,137,40)",
            sdd: "rgba(150,120,30,0.3)",
            borderColor: "rgb(150,110,30)",
            bhj: "rgb(200,170,50)",
            backgroundColor: "rgb(100,70,30)",
            tkk: "rgb(0,0,0)",
            hdv: "rgb(0,0,0)"
        }, {
            yuw: "sans-serif",
            nhl: "sans-serif",
            njm: "bold",
            clo: "rgb(230,230,230)",
            rvo: "rgb(190,190,190)",
            xyk: "rgb(240,240,240)",
            myr: "rgb(160,160,160)",
            sdd: "rgba(120,120,120,0.3)",
            borderColor: "rgb(120,120,120)",
            bhj: "rgb(170,170,170)",
            backgroundColor: "rgb(100,100,100)",
            tkk: "rgb(0,0,0)",
            hdv: "rgb(0,0,0)"
        }],
        nnc: {
            yuw: "sans-serif",
            nhl: "sans-serif",
            njm: "bold",
            clo: "rgb(236,225,207)",
            rvo: "rgb(214,170,102)",
            xyk: "rgb(245,220,148)",
            myr: "rgb(190,137,40)",
            sdd: null,
            borderColor: null,
            bhj: null,
            backgroundColor: null,
            tkk: null,
            hdv: null
        },
        zli: {}
    };
    this.coc = {
        nvr: "rgb(240,240,240)",
        eno: "rgb(255,255,255)",
        borderColor: "rgb(200,200,200)",
        cwj: "rgba(0,80,150,0.6)",
        display: {
            njk: "arial",
            yuw: "arial",
            njm: "bold",
            txr: "rgb(0,80,151)",
            clo: "rgb(0,30,80)",
            backgroundColor: "rgb(255,255,255)",
            borderColor: "rgb(200,200,200)"
        }
    }
}

function lun() {
    this.tlo.ucf = false;
    this.tlo.puz = false;
    this.cmi = {
        display: {
            njk: "sans-serif",
            yuw: "sans-serif",
            njm: "bold",
            backgroundColor: "black",
            txr: "rgb(255,255,50)",
            clo: "rgb(255,255,50)",
            borderColor: "rgb(230,230,230)",
            bhj: "rgb(160,160,160)"
        },
        ymz: {
            njk: "sans-serif",
            yuw: "sans-serif",
            njm: "bold",
            backgroundColor: "rgba(0,0,0,0.8)",
            txr: "rgb(255,255,50)",
            clo: "rgb(255,255,50)",
            borderColor: null,
            bhj: null
        },
        xos: {
            njk: "arial",
            yuw: "arial",
            njm: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            txr: "white",
            clo: "white",
            borderColor: null,
            bhj: null
        },
        gqt: {
            font: "arial",
            njm: "bold",
            backgroundColor: "rgb(230,230,230)",
            tkk: null,
            inh: null,
            iaq: null,
            borderColor: "rgb(230,230,230)",
            txr: "rgb(0,0,0)",
            lnf: "rgb(0,0,0)",
            frz: "rrect",
            pqm: 3
        },
        cdy: {
            font: "sans-serif",
            njm: "bold",
            txr: "rgb(255,255,50)",
            backgroundColor: "black",
            borderColor: null,
            bhj: null
        },
        ivm: {
            backgroundColor: null,
            tkk: null,
            kxq: "rgb(0,0,0)",
            nfa: "rgb(0,0,0)",
            aam: null,
            upw: 0.5,
            noi: {
                frz: "rect",
                font: "verdana",
                njm: "bold",
                backgroundColor: "rgb(0,0,0)",
                stg: "rgb(150,150,150)",
                txr: "rgb(255,255,255)",
                xyk: "rgb(255,255,0)",
                borderColor: "rgb(150,150,150)",
                bhj: "rgb(0,0,0)"
            },
            kib: {
                frz: "round",
                font: "verdana",
                njm: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                stg: "rgba(150,150,150,0.5)",
                txr: "rgb(255,255,255)",
                xyk: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                bhj: "rgb(100,100,100)"
            },
            cvs: {
                frz: "round",
                font: "verdana",
                njm: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                stg: "rgba(150,150,150,0.5)",
                txr: "rgb(255,255,255)",
                xyk: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                bhj: "rgb(100,100,100)"
            },
            bcb: {
                frz: "rect",
                font: "verdana",
                njm: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                stg: "rgba(150,150,150,0.5)",
                txr: "rgba(255,255,255,0.8)",
                xyk: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                bhj: "rgb(100,100,100)"
            },
            qnl: {
                frz: "rect",
                font: "verdana",
                njm: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                stg: "rgba(150,150,150,0.5)",
                txr: "rgba(255,255,255,0.8)",
                xyk: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                bhj: "rgb(100,100,100)"
            },
            fxo: {
                font: "verdana",
                njm: "bold",
                backgroundColor: "rgb(75, 5, 5)",
                borderColor: null,
                txr: "rgb(255, 255, 50)"
            },
            win: {
                font: "helvetica",
                njm: "bold",
                backgroundColor: null,
                borderColor: null,
                txr: "rgb(240, 231, 203)"
            }
        }
    };
    this.ryz = {
        backgroundColor: null,
        kxq: "rgb(0,0,0)",
        nfa: "rgb(0,0,0)",
        display: {
            njk: "sans-serif",
            yuw: "sans-serif",
            njm: "bold",
            backgroundColor: "black",
            txr: "yellow",
            clo: "yellow",
            borderColor: "rgb(230,230,230)",
            bhj: "rgb(160,160,160)"
        },
        xos: {
            njk: "arial",
            yuw: "arial",
            njm: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            txr: "white",
            clo: "white",
            borderColor: null,
            bhj: null
        },
        kdd: {
            njk: "verdana",
            yuw: "verdana",
            njm: "bold",
            clo: "white",
            txr: "yellow"
        },
        noi: {
            frz: "rect",
            font: "verdana",
            njm: "bold",
            backgroundColor: "rgb(0,0,0)",
            stg: "rgb(150,150,150)",
            txr: "rgb(255,255,255)",
            borderColor: "rgb(150,150,150)",
            bhj: "rgb(0,0,0)"
        },
        kib: {
            frz: "round",
            font: "verdana",
            njm: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            stg: "rgba(150,150,150,0.5)",
            txr: "rgb(255,255,255)",
            xyk: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            bhj: "rgb(100,100,100)"
        },
        cvs: {
            frz: "round",
            font: "verdana",
            njm: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            stg: "rgba(150,150,150,0.5)",
            txr: "rgb(255,255,255)",
            xyk: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            bhj: "rgb(100,100,100)"
        },
        fxo: {
            font: "verdana",
            njm: "bold",
            backgroundColor: "rgb(75, 5, 5)",
            txr: "rgb(255, 255, 0)"
        }
    };
    this.tbm = {
        backgroundColor: null,
        kxq: "rgb(0,0,0)",
        nfa: "rgb(0,0,0)",
        noi: {
            frz: "rect",
            font: "verdana",
            njm: "bold",
            backgroundColor: "rgb(0,0,0)",
            stg: "rgb(150,150,150)",
            txr: "rgb(255,255,255)",
            borderColor: "rgb(150,150,150)",
            bhj: "rgb(0,0,0)"
        },
        kib: {
            frz: "round",
            font: "verdana",
            njm: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            stg: "rgba(150,150,150,0.5)",
            txr: "rgb(255,255,255)",
            xyk: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            bhj: "rgb(100,100,100)"
        },
        cvs: {
            frz: "round",
            font: "verdana",
            njm: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            stg: "rgba(150,150,150,0.5)",
            txr: "rgb(255,255,255)",
            xyk: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            bhj: "rgb(100,100,100)"
        }
    };
    this.xbo = {
        jya: 0,
        aam: "rgba(0,0,0,0)",
        iof: "rgba(0,0,0,0.5)"
    };
    this.dvq = {
        yqs: "rgb(255,0,0)",
        itm: "rgb(255,255,0)",
        ogd: "white",
        ewf: null,
        wxi: 0,
        vhi: 0.05,
        kex: [{
            xyy: "rgb(180,180,30)",
            uwq: "rgb(255,220,0)",
            nyt: "rgb(180,180,30)",
            fru: "rgb(255,255,0)"
        }, {
            xyy: "rgb(210,110,0)",
            uwq: "rgb(255,168,0)",
            nyt: "rgb(210,110,0)",
            fru: "rgb(255,210,50)"
        }, {
            xyy: "rgb(0,50,180)",
            uwq: "rgb(0,68,220)",
            nyt: "rgb(0,50,180)",
            fru: "rgb(0,100,255)"
        }, {
            xyy: "rgb(0,160,64)",
            uwq: "rgb(0,200,80)",
            nyt: "rgb(0,160,64)",
            fru: "rgb(0,255,70)"
        }, {
            xyy: "rgb(140,30,140)",
            uwq: "rgb(200,0,200)",
            nyt: "rgb(140,30,140)",
            fru: "rgb(255,30,255)"
        }, {
            xyy: "rgb(180,180,30)",
            uwq: "rgb(255,220,0)",
            nyt: "rgb(180,180,30)",
            fru: "rgb(255,255,0)"
        }, {
            xyy: "rgba(200,200,50,0.7)",
            uwq: "rgba(255,255,150,0.7)",
            nyt: "rgba(200,200,50,0.7)",
            fru: "rgba(255,255,150,0.7)"
        }]
    };
    this.ukx = {
        font: "sans-serif",
        njm: "bold",
        nnr: "red",
        efq: "orange",
        wvz: "white"
    };
    this.xav = {
        font: "sans-serif",
        njm: "bold",
        nnr: "red",
        efq: "orange",
        wvz: "white"
    };
    this.gou = {
        font: "sans-serif",
        njm: "bold",
        txr: "rgb(255,255,255)",
        backgroundColor: "rgb(0,0,0)",
        hew: "rgb(0,0,0)",
        tfn: "rgb(255,0,0)",
        fbi: "rgb(255,255,0)",
        kzq: "rgb(80,80,80)",
        jvd: "rgb(15,15,15)",
        con: "rgb(0,0,0)",
        gpr: "rgb(180,180,180)",
        ywe: "rgb(0,0,0)",
        exu: 0.7
    }
}
lun.prototype = new jkq;

function bvs() {
    this.tlo.puz = true;
    this.cmi.cdy.backgroundColor = "rgb(50,0,0)";
    this.cmi.cdy.borderColor = "rgb(115,24,14)";
    this.cmi.ivm.fxo.backgroundColor = "rgb(50,0,0)";
    this.cmi.ivm.fxo.borderColor = "rgb(115,24,14)";
    this.cmi.ivm.noi.backgroundColor = "rgb(100,20,15)";
    this.cmi.ivm.noi.stg = "rgb(180,30,20)";
    this.cmi.ivm.noi.borderColor = "rgb(160,26,25)";
    this.cmi.ivm.noi.bhj = "rgb(50,10,5)";
    this.cmi.ivm.bcb.backgroundColor = "rgba(50,0,0,0.5)";
    this.cmi.ivm.bcb.stg = "rgba(190,35,25,0.7)";
    this.cmi.ivm.bcb.borderColor = "rgb(130,20,15)";
    this.cmi.ivm.bcb.bhj = "rgb(170,25,20)";
    this.cmi.ivm.qnl.backgroundColor = "rgba(50,0,0,0.3)";
    this.cmi.ivm.qnl.stg = "rgba(255,110,95,0.8)";
    this.cmi.ivm.qnl.borderColor = "rgb(195,40,35)";
    this.cmi.ivm.qnl.bhj = "rgb(255,110,95)";
    this.cmi.ivm.kib.backgroundColor = "rgba(50,0,0,0.5)";
    this.cmi.ivm.kib.stg = "rgba(190,35,25,0.7)";
    this.cmi.ivm.kib.borderColor = "rgb(130,20,15)";
    this.cmi.ivm.kib.bhj = "rgb(170,25,20)";
    this.cmi.ivm.cvs.backgroundColor = "rgba(50,0,0,0.3)";
    this.cmi.ivm.cvs.stg = "rgba(255,110,95,0.8)";
    this.cmi.ivm.cvs.borderColor = "rgb(195,40,35)";
    this.cmi.ivm.cvs.bhj = "rgb(255,110,95)";
    this.ryz.fxo.backgroundColor = "rgba(50,0,0,0.7)";
    this.ryz.fxo.borderColor = "rgb(115,24,14)";
    this.ryz.noi.backgroundColor = "rgb(100,20,15)";
    this.ryz.noi.borderColor = "rgb(160,26,25)";
    this.ryz.noi.bhj = "rgb(50,10,5)";
    this.ryz.kib.backgroundColor = "rgba(50,0,0,0.5)";
    this.ryz.kib.borderColor = "rgb(130,20,15)";
    this.ryz.kib.bhj = "rgb(170,25,20)";
    this.ryz.cvs.backgroundColor = "rgba(50,0,0,0.3)";
    this.ryz.cvs.borderColor = "rgb(195,40,35)";
    this.ryz.cvs.bhj = "rgb(255,110,95)";
    this.tbm.noi.backgroundColor = "rgb(100,20,15)";
    this.tbm.noi.borderColor = "rgb(160,26,25)";
    this.tbm.noi.bhj = "rgb(50,10,5)";
    this.tbm.kib.backgroundColor = "rgba(50,0,0,0.5)";
    this.tbm.kib.borderColor = "rgb(130,20,15)";
    this.tbm.kib.bhj = "rgb(170,25,20)";
    this.tbm.cvs.backgroundColor = "rgba(50,0,0,0.3)";
    this.tbm.cvs.borderColor = "rgb(195,40,35)";
    this.tbm.cvs.bhj = "rgb(255,110,95)";
    this.tbm.kvw = {
        font: "sans-serif",
        njm: "bold",
        txr: "yellow",
        yuw: "verdana"
    };
    this.tbm.top = {
        font: "arial",
        njm: "bold",
        txr: "yellow",
        cjl: "arial",
        bns: "yellow",
        xej: "white",
        yuw: "verdana"
    };
    this.tbm.ijo = {
        font: "sans-serif",
        njm: "bold",
        txr: "yellow",
        ubh: "verdana",
        edq: "verdana",
        ymr: "bold",
        vcy: "white"
    };
    this.pgu.ivm.noi.backgroundColor = "rgb(80,10,5)";
    this.xbo.aam = "rgba(0,0,0,0.35)";
    this.dvq = {
        yqs: "white",
        itm: null,
        ogd: "rgb(255,220,60)",
        ewf: "rgb(230,100,0)",
        wxi: 1,
        vhi: 0.025,
        kex: [{
            xyy: "rgb(110,10,15)",
            uwq: "rgb(200,20,30)",
            nyt: "rgb(110,10,15)",
            fru: "rgb(255,25,35)"
        }, {
            xyy: "rgb(140,140,40)",
            uwq: "rgb(200,200,70)",
            nyt: "rgb(140,140,40)",
            fru: "rgb(255,255,75)"
        }, {
            xyy: "rgb(30,100,50)",
            uwq: "rgb(55,160,75)",
            nyt: "rgb(30,100,50)",
            fru: "rgb(85,235,110)"
        }, {
            xyy: "rgb(40,45,120)",
            uwq: "rgb(60,70,190)",
            nyt: "rgb(40,45,120)",
            fru: "rgb(80,95,255)"
        }, {
            xyy: "rgb(85,50,100)",
            uwq: "rgb(150,80,180)",
            nyt: "rgb(85,50,100)",
            fru: "rgb(210,120,255)"
        }, {
            xyy: "rgb(110,50,0)",
            uwq: "rgb(190,90,5)",
            nyt: "rgb(110,50,0)",
            fru: "rgb(255,120,0)"
        }, {
            xyy: "rgb(135,105,0)",
            uwq: "rgb(200,150,0)",
            nyt: "rgb(135,105,0)",
            fru: "rgb(255,200,0)"
        }, {
            xyy: "rgb(80,120,50)",
            uwq: "rgb(125,190,80)",
            nyt: "rgb(80,120,50)",
            fru: "rgb(165,255,110)"
        }, {
            xyy: "rgb(30,110,90)",
            uwq: "rgb(50,170,150)",
            nyt: "rgb(30,110,90)",
            fru: "rgb(70,240,210)"
        }, {
            xyy: "rgb(110,40,120)",
            uwq: "rgb(180,70,190)",
            nyt: "rgb(110,40,120)",
            fru: "rgb(240,90,255)"
        }, null, {
            xyy: "rgba(200,200,50,0.7)",
            uwq: "rgba(255,255,150,0.7)",
            nyt: "rgba(200,200,50,0.7)",
            fru: "rgba(255,255,150,0.7)"
        }]
    };
    this.sqq.backgroundColor = "rgb(188,39,35)";
    this.sqq.tkk = "rgb(114,19,16)"
}
bvs.prototype = new lun;

function ear() {
    this.type = "800_600";
    this.caa = true;
    this.dux = false;
    this.cqe = false;
    this.ecp = true;
    this.kkg = false;
    this.aom = false;
    this.hkx = false;
    this.xrl = false
}

function jvv() {
    this.caa = false;
    this.canvas = {
        cij: new flw(0, 0, 800, 620)
    };
    this.cod = {
        cij: new flw(),
        ncp: 0
    };
    this.tlo = {
        cij: new flw(0, 20, 800, 600),
        mmg: 0
    };
    this.uiv = {
        zrh: new flw(0, 40, 440, 36),
        cwu: new flw(5, 2, 140, 30),
        ckt: new flw(150, 2, 140, 30),
        fcc: new flw(295, 2, 140, 30),
        krb: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.jgt = {
        tlo: {
            cij: new flw(0, 0, 500, 360),
            ett: new flw(0, 0, 500, 360),
            gfv: new flw(5, 325, 490, 30),
            lrv: new flw(5, 329, 490, 14),
            bva: new flw(50, 345, 400, 6),
            azx: new flw(5, 285, 490, 70),
            fontSize: 14,
            wes: 18,
            zub: 5,
            wkz: 12,
            dhm: 5,
            ojv: 2,
            lhz: 0,
            dvq: {
                cij: new flw(),
                x: 0,
                wkj: 0,
                ktg: 0
            },
            uss: {
                ett: new flw(),
                lrv: new flw(),
                bao: new flw()
            }
        },
        zwd: {
            cij: new flw(0, 0, 800, 600),
            ett: new flw(140, 105, 520, 390),
            gfv: new flw(),
            lrv: new flw(140, 295, 520, 21),
            bva: new flw(192, 320, 416, 3),
            azx: new flw(140, 275, 520, 95),
            fontSize: 18,
            wes: 24,
            zub: 0,
            wkz: 12,
            dhm: 7,
            ojv: 3,
            lhz: 9,
            dvq: {
                cij: new flw(400, 459, 0, 3),
                x: 33,
                wkj: 15,
                ktg: 20
            },
            uss: {
                ett: new flw(50, 0, 700, 450),
                lrv: new flw(100, 460, 600, 60),
                bao: new flw(200, 540, 400, 40)
            }
        },
        tgw: {
            cij: new flw(0, 0, 800, 600),
            ett: new flw(0, 0, 800, 600),
            gfv: new flw(),
            lrv: new flw(50, 420, 700, 21),
            bva: new flw(),
            azx: new flw(50, 410, 700, 80),
            fontSize: 18,
            wes: 24,
            zub: 0,
            wkz: 12,
            dhm: 7,
            ojv: 0,
            lhz: 0,
            dvq: {
                cij: new flw(260, 119, 280, 280),
                x: 0,
                wkj: 0,
                ktg: 0
            },
            uss: {
                ett: new flw(50, 0, 700, 450),
                lrv: new flw(100, 460, 600, 60),
                bao: new flw(200, 540, 400, 40)
            }
        }
    };
    this.gyi = {
        cij: new flw(0, 0, 800, 20),
        fontSize: 12,
        mgt: 19,
        wyc: 15,
        upn: 120,
        wkz: 2,
        dhm: 2,
        hud: 2,
        psh: 40
    };
    this.pgu = {
        cij: new flw(0, 20, 800, 70),
        fontSize: 10,
        osa: 10,
        egq: 20,
        lfi: 40,
        mmg: 4,
        wkz: 10,
        dhm: 5,
        zub: 10,
        krb: {
            fontSize: 17,
            zub: 2
        }
    };
    this.uhj = {
        cij: new flw(0, 20, 800, 600),
        zrh: new flw(),
        krb: {
            ela: 20,
            pie: 0,
            wkz: 0,
            crc: 0,
            ete: 0,
            phq: 8,
            fms: 8,
            mmg: 0
        },
        iht: new flw(0, 20, 800, 40),
        pbr: new flw(0, 100, 800, 40),
        xxn: new flw(0, 140, 800, 40),
        gbv: new flw(0, 180, 800, 40),
        yvy: new flw(225, 275, 350, 100),
        zjp: new flw(200, 480, 400, 40),
        pnf: {
            eed: new flw(340, 540, 120, 55)
        },
        hqr: {
            eed: new flw(250, 540, 120, 55),
            iyz: new flw(430, 540, 120, 55)
        },
        fhd: 36,
        fontSize: 30,
        grt: 22,
        dhm: 3,
        wkz: 5,
        mmg: 2,
        yvm: 3,
        one: 10
    };
    this.sje = {
        cij: new flw(-10, 25, 310, 50),
        iht: new flw(10, 4, 240, 24),
        lrv: new flw(10, 28, 240, 18),
        beo: new flw(260, 10, 40, 30),
        rjt: new flw(7, 2, 26, 26),
        yjs: 16,
        ela: 12,
        xhr: 18
    };
    this.aka = {
        cij: new flw(150, 160, 500, 280),
        yjs: 26,
        fontSize: 20,
        gji: new flw(465, 5, 30, 30),
        iht: new flw(30, 5, 440, 30),
        zjp: new flw(20, 40, 460, 160),
        jlp: new flw(20, 230, 460, 40),
        krb: {
            fontSize: 20
        }
    };
    this.muq = {
        cij: new flw(0, 55, 560, 430),
        mmg: 2,
        ulh: 0,
        lwn: 5,
        nnd: 10,
        yjs: 26,
        djw: 20,
        iht: new flw(30, 15, 500, 30),
        wzi: new flw(20, 50, 520, 60),
        xnx: new flw(40, 60, 220, 40),
        hra: new flw(328, 60, 30, 40),
        ebr: new flw(360, 60, 120, 40),
        xsr: new flw(482, 60, 30, 40),
        vtd: new flw(20, 120, 520, 200),
        xaq: new flw(40, 120, 480, 40),
        pxc: new flw(30, 160, 280, 40),
        peb: new flw(328, 160, 30, 40),
        eby: new flw(360, 160, 120, 40),
        pzx: new flw(482, 160, 30, 40),
        vdd: new flw(30, 215, 280, 40),
        sxn: new flw(328, 215, 30, 40),
        vnj: new flw(360, 215, 120, 40),
        kpb: new flw(482, 215, 30, 40),
        qry: new flw(30, 270, 280, 40),
        fhs: new flw(328, 270, 30, 40),
        ywu: new flw(360, 270, 120, 40),
        kpx: new flw(482, 270, 30, 40),
        gfv: new flw(30, 330, 500, 30),
        xev: new flw(210, 370, 140, 50),
        hal: new flw(),
        zcq: {
            lrv: new flw(40, 0, 240, 40),
            wxt: new flw(7, 12, 16, 16),
            fontSize: 20,
            phq: 0,
            mmg: 2
        },
        vyz: {
            phq: 3,
            wkz: -5,
            dhm: -1,
            fms: 6,
            fontSize: 20,
            mmg: 0
        },
        idv: {
            phq: 3,
            wkz: 5,
            dhm: 0,
            fms: 6,
            fontSize: 20,
            mmg: 0
        },
        xsb: {
            phq: 6,
            wkz: 0,
            dhm: 0,
            fms: 6,
            fontSize: 26,
            mmg: 2
        },
        display: {
            yjs: 16,
            ela: 24,
            kjb: 0,
            crc: 0,
            mmg: 2,
            ggn: 3,
            opw: 3,
            mus: 3,
            fxp: 3
        }
    };
    this.opx = {
        cij: [new flw(2, 20, 130, 46), new flw(668, 20, 130, 46)],
        display: {
            igm: new flw(6, 16, 118, 22),
            yjs: 14,
            pie: 20,
            kjb: -11,
            ete: 10,
            zub: 8,
            mmg: 3,
            tcc: 0,
            rhw: 4
        },
        nnc: {
            cij: new flw(50, 130, 700, 300),
            igm: new flw(),
            yjs: 66,
            pie: 150,
            kjb: -90,
            ete: 60,
            zub: 10,
            mmg: 0,
            tcc: 0,
            rhw: 0
        },
        zli: {
            cij: new flw(38, 80, 724, 369),
            opp: new flw(100, 53, 525, 50),
            igm: new flw(186, 153, 332, 94),
            wzq: 340,
            bnm: 30,
            xfl: {
                _0: new flw(2, 0, 90, 94),
                _1: new flw(98, 0, 90, 94),
                _2: new flw(194, 0, 90, 94),
                _3: new flw(290, 0, 90, 94),
                _4: new flw(386, 0, 90, 94),
                _5: new flw(482, 0, 90, 94),
                _6: new flw(578, 0, 90, 94),
                _7: new flw(674, 0, 90, 94),
                _8: new flw(770, 0, 90, 94),
                _9: new flw(866, 0, 90, 94),
                _cm: new flw(962, 0, 28, 94),
                _dt: new flw(999, 0, 28, 94),
                _sp: new flw(1036, 0, 28, 94)
            }
        }
    }
}
jvv.prototype = new ear;

function lqk() {
    this.dux = true
}
lqk.prototype = new jvv;

function jhj() {
    this.kkg = true;
    this.cqe = true;
    this.caa = false;
    this.dux = true;
    this.canvas = {
        cij: new flw(0, 0, 800, 1165)
    };
    this.cod = {
        cij: new flw(),
        ncp: 0
    };
    this.tlo = {
        cij: new flw(0, 550, 800, 615),
        mmg: 10
    };
    this.uiv = {
        zrh: new flw(0, 330, 440, 36),
        cwu: new flw(5, 2, 140, 30),
        ckt: new flw(150, 2, 140, 30),
        fcc: new flw(295, 2, 140, 30),
        krb: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.jgt = {
        tlo: {
            cij: new flw(0, 0, 500, 360),
            ett: new flw(0, 0, 500, 360),
            gfv: new flw(5, 325, 490, 30),
            lrv: new flw(5, 329, 490, 14),
            bva: new flw(50, 345, 400, 6),
            azx: new flw(5, 285, 490, 70),
            fontSize: 14,
            wes: 18,
            zub: 5,
            wkz: 12,
            dhm: 5,
            ojv: 2,
            lhz: 0,
            dvq: {
                cij: new flw(),
                x: 0,
                wkj: 0,
                ktg: 0
            },
            uss: {
                ett: new flw(),
                lrv: new flw(),
                bao: new flw()
            }
        },
        zwd: {
            cij: new flw(0, 0, 800, 600),
            ett: new flw(100, 75, 600, 450),
            gfv: new flw(),
            lrv: new flw(100, 295, 600, 24),
            bva: new flw(160, 325, 480, 3),
            azx: new flw(100, 265, 600, 115),
            fontSize: 21,
            wes: 26,
            zub: 0,
            wkz: 12,
            dhm: 8,
            ojv: 3,
            lhz: 10,
            dvq: {
                cij: new flw(400, 484, 0, 3),
                x: 38,
                wkj: 17,
                ktg: 23
            },
            uss: {
                ett: new flw(50, 0, 700, 450),
                lrv: new flw(100, 460, 600, 60),
                bao: new flw(200, 540, 400, 40)
            }
        },
        tgw: {
            cij: new flw(0, 0, 800, 600),
            ett: new flw(0, 0, 800, 600),
            gfv: new flw(),
            lrv: new flw(50, 420, 700, 21),
            bva: new flw(),
            azx: new flw(50, 410, 700, 80),
            fontSize: 18,
            wes: 24,
            zub: 0,
            wkz: 12,
            dhm: 7,
            ojv: 0,
            lhz: 0,
            dvq: {
                cij: new flw(260, 119, 280, 280),
                x: 0,
                wkj: 0,
                ktg: 0
            },
            uss: {
                ett: new flw(50, 0, 700, 450),
                lrv: new flw(100, 460, 600, 60),
                bao: new flw(200, 540, 400, 40)
            }
        }
    };
    this.top = {
        cij: new flw(0, 20, 800, 520)
    };
    this.gyi = {
        cij: new flw(0, 0, 800, 20),
        fontSize: 12,
        mgt: 19,
        wyc: 15,
        upn: 120,
        wkz: 2,
        dhm: 2,
        hud: 2,
        psh: 60
    };
    this.pgu = {
        cij: new flw(0, 20, 800, 70),
        fontSize: 10,
        osa: 10,
        egq: 20,
        lfi: 40,
        mmg: 4,
        wkz: 10,
        dhm: 5,
        zub: 10,
        krb: {
            fontSize: 17,
            zub: 2
        }
    };
    this.uhj = {
        cij: new flw(0, 550, 800, 615),
        zrh: new flw(),
        krb: {
            ela: 26,
            pie: 0,
            wkz: 0,
            crc: 0,
            ete: 0,
            phq: 10,
            fms: 10,
            mmg: 2
        },
        iht: new flw(0, 20, 800, 40),
        pbr: new flw(0, 100, 800, 40),
        xxn: new flw(0, 140, 800, 40),
        gbv: new flw(0, 180, 800, 40),
        yvy: new flw(225, 275, 350, 100),
        zjp: new flw(200, 480, 400, 40),
        pnf: {
            eed: new flw(340, 540, 120, 68)
        },
        hqr: {
            eed: new flw(250, 540, 120, 68),
            iyz: new flw(430, 540, 120, 68)
        },
        fhd: 36,
        fontSize: 30,
        grt: 22,
        dhm: 3,
        wkz: 5,
        mmg: 2,
        yvm: 3,
        one: 10,
    };
    this.sje = {
        cij: new flw(-10, 545, 310, 50),
        iht: new flw(10, 4, 240, 24),
        lrv: new flw(10, 28, 240, 18),
        beo: new flw(260, 10, 40, 30),
        rjt: new flw(7, 2, 26, 26),
        yjs: 16,
        ela: 12,
        xhr: 18
    };
    this.aka = {
        cij: new flw(150, 690, 500, 280),
        yjs: 26,
        fontSize: 20,
        gji: new flw(465, 5, 30, 30),
        iht: new flw(30, 5, 440, 40),
        zjp: new flw(20, 40, 460, 160),
        jlp: new flw(20, 230, 460, 40),
        krb: {
            fontSize: 20
        }
    };
    this.muq = {
        cij: new flw(0, 585, 560, 430),
        mmg: 2,
        ulh: 0,
        lwn: 5,
        nnd: 10,
        yjs: 26,
        djw: 20,
        iht: new flw(30, 15, 500, 30),
        wzi: new flw(20, 50, 520, 60),
        xnx: new flw(40, 60, 220, 40),
        hra: new flw(328, 60, 30, 40),
        ebr: new flw(360, 60, 120, 40),
        xsr: new flw(482, 60, 30, 40),
        vtd: new flw(20, 120, 520, 200),
        xaq: new flw(40, 120, 480, 40),
        pxc: new flw(30, 160, 280, 40),
        peb: new flw(328, 160, 30, 40),
        eby: new flw(360, 160, 120, 40),
        pzx: new flw(482, 160, 30, 40),
        vdd: new flw(30, 215, 280, 40),
        sxn: new flw(328, 215, 30, 40),
        vnj: new flw(360, 215, 120, 40),
        kpb: new flw(482, 215, 30, 40),
        qry: new flw(30, 270, 280, 40),
        fhs: new flw(328, 270, 30, 40),
        ywu: new flw(360, 270, 120, 40),
        kpx: new flw(482, 270, 30, 40),
        gfv: new flw(30, 330, 500, 30),
        xev: new flw(210, 370, 140, 50),
        hal: new flw(),
        zcq: {
            lrv: new flw(40, 0, 240, 40),
            wxt: new flw(7, 12, 16, 16),
            fontSize: 20,
            phq: 0,
            mmg: 2
        },
        vyz: {
            phq: 3,
            wkz: -5,
            dhm: -1,
            fms: 6,
            fontSize: 20,
            mmg: 0
        },
        idv: {
            phq: 3,
            wkz: 5,
            dhm: 0,
            fms: 6,
            fontSize: 20,
            mmg: 0
        },
        xsb: {
            phq: 6,
            wkz: 0,
            dhm: 0,
            fms: 6,
            fontSize: 26,
            mmg: 2
        },
        display: {
            yjs: 16,
            ela: 24,
            kjb: 0,
            crc: 0,
            mmg: 2,
            ggn: 3,
            opw: 3,
            mus: 3,
            fxp: 3
        }
    };
    this.opx = {
        cij: [new flw(2, 550, 130, 46), new flw(668, 550, 130, 46)],
        display: {
            igm: new flw(6, 16, 118, 23),
            yjs: 14,
            pie: 20,
            kjb: -11,
            ete: 10,
            zub: 8,
            mmg: 3,
            tcc: 0,
            rhw: 4
        },
        nnc: {
            cij: new flw(50, 660, 700, 300),
            igm: new flw(),
            yjs: 66,
            pie: 150,
            kjb: -90,
            ete: 60,
            zub: 10,
            mmg: 0,
            tcc: 0,
            rhw: 0
        },
        zli: {
            cij: new flw(38, 610, 724, 369),
            opp: new flw(100, 53, 525, 50),
            igm: new flw(186, 153, 332, 94),
            wzq: 360,
            bnm: 30,
            xfl: {
                _0: new flw(2, 0, 90, 94),
                _1: new flw(98, 0, 90, 94),
                _2: new flw(194, 0, 90, 94),
                _3: new flw(290, 0, 90, 94),
                _4: new flw(386, 0, 90, 94),
                _5: new flw(482, 0, 90, 94),
                _6: new flw(578, 0, 90, 94),
                _7: new flw(674, 0, 90, 94),
                _8: new flw(770, 0, 90, 94),
                _9: new flw(866, 0, 90, 94),
                _cm: new flw(962, 0, 28, 94),
                _dt: new flw(999, 0, 28, 94),
                _sp: new flw(1036, 0, 28, 94)
            }
        }
    }
}
jhj.prototype = new ear;

function hhp() {
    this.cqe = true;
    this.canvas = {
        cij: new flw(0, 0, 810, 625)
    };
    this.cod = {
        cij: new flw(),
        ncp: 0
    };
    this.tlo = {
        cij: new flw(5, 20, 800, 600),
        mmg: 20
    };
    this.uiv = {
        zrh: new flw(5, 40, 440, 36),
        cwu: new flw(5, 2, 140, 30),
        ckt: new flw(150, 2, 140, 30),
        fcc: new flw(295, 2, 140, 30),
        krb: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.jgt = {
        tlo: {
            cij: new flw(0, 0, 500, 360),
            ett: new flw(0, 0, 500, 360),
            gfv: new flw(5, 325, 490, 30),
            lrv: new flw(5, 329, 490, 14),
            bva: new flw(50, 345, 400, 6),
            azx: new flw(5, 285, 490, 70),
            fontSize: 14,
            wes: 18,
            zub: 5,
            wkz: 12,
            dhm: 5,
            ojv: 2,
            lhz: 0,
            dvq: {
                cij: new flw(),
                x: 0,
                wkj: 0,
                ktg: 0
            },
            uss: {
                ett: new flw(),
                lrv: new flw(),
                bao: new flw()
            }
        },
        zwd: {
            cij: new flw(0, 0, 800, 600),
            ett: new flw(140, 105, 520, 390),
            gfv: new flw(),
            lrv: new flw(140, 295, 520, 21),
            bva: new flw(192, 320, 416, 3),
            azx: new flw(140, 275, 520, 95),
            fontSize: 18,
            wes: 24,
            zub: 0,
            wkz: 12,
            dhm: 7,
            ojv: 3,
            lhz: 9,
            dvq: {
                cij: new flw(400, 459, 0, 3),
                x: 33,
                wkj: 15,
                ktg: 20
            },
            uss: {
                ett: new flw(50, 0, 700, 450),
                lrv: new flw(100, 460, 600, 60),
                bao: new flw(200, 540, 400, 40)
            }
        },
        tgw: {
            cij: new flw(0, 0, 800, 600),
            ett: new flw(0, 0, 800, 600),
            gfv: new flw(),
            lrv: new flw(50, 420, 700, 21),
            bva: new flw(),
            azx: new flw(50, 410, 700, 80),
            fontSize: 18,
            wes: 24,
            zub: 0,
            wkz: 12,
            dhm: 7,
            ojv: 0,
            lhz: 0,
            dvq: {
                cij: new flw(260, 119, 280, 280),
                x: 0,
                wkj: 0,
                ktg: 0
            },
            uss: {
                ett: new flw(50, 0, 700, 450),
                lrv: new flw(100, 460, 600, 60),
                bao: new flw(200, 540, 400, 40)
            }
        }
    };
    this.gyi = {
        cij: new flw(5, 0, 800, 20),
        fontSize: 12,
        mgt: 19,
        wyc: 15,
        upn: 120,
        wkz: 2,
        dhm: 2,
        hud: 2,
        psh: 40
    };
    this.pgu = {
        cij: new flw(5, 20, 800, 70),
        fontSize: 10,
        osa: 10,
        egq: 20,
        lfi: 40,
        mmg: 4,
        wkz: 10,
        dhm: 5,
        zub: 10,
        krb: {
            fontSize: 17,
            zub: 2
        }
    };
    this.uhj = {
        cij: new flw(5, 20, 800, 600),
        zrh: new flw(),
        krb: {
            ela: 20,
            pie: 0,
            wkz: 0,
            crc: 0,
            ete: 0,
            phq: 8,
            fms: 8,
            mmg: 2
        },
        iht: new flw(0, 20, 800, 40),
        pbr: new flw(0, 100, 800, 40),
        xxn: new flw(0, 140, 800, 40),
        gbv: new flw(0, 180, 800, 40),
        yvy: new flw(225, 275, 350, 100),
        zjp: new flw(200, 480, 400, 40),
        pnf: {
            eed: new flw(340, 540, 120, 55)
        },
        hqr: {
            eed: new flw(250, 540, 120, 55),
            iyz: new flw(430, 540, 120, 55)
        },
        fhd: 36,
        fontSize: 30,
        grt: 22,
        dhm: 3,
        wkz: 5,
        mmg: 2,
        yvm: 3,
        one: 10
    };
    this.sje = {
        cij: new flw(-10, 25, 310, 50),
        iht: new flw(10, 4, 240, 24),
        lrv: new flw(10, 28, 240, 18),
        beo: new flw(260, 10, 40, 30),
        rjt: new flw(7, 2, 26, 26),
        yjs: 16,
        ela: 12,
        xhr: 18
    };
    this.aka = {
        cij: new flw(155, 160, 500, 280),
        yjs: 26,
        fontSize: 20,
        gji: new flw(465, 5, 30, 30),
        iht: new flw(30, 5, 440, 40),
        zjp: new flw(20, 40, 460, 160),
        jlp: new flw(20, 230, 460, 40),
        krb: {
            fontSize: 20
        }
    };
    this.muq = {
        cij: new flw(5, 55, 560, 430),
        mmg: 2,
        ulh: 0,
        lwn: 5,
        nnd: 10,
        yjs: 26,
        djw: 20,
        iht: new flw(30, 15, 500, 30),
        wzi: new flw(20, 50, 520, 60),
        xnx: new flw(40, 60, 220, 40),
        hra: new flw(328, 60, 30, 40),
        ebr: new flw(360, 60, 120, 40),
        xsr: new flw(482, 60, 30, 40),
        vtd: new flw(20, 120, 520, 200),
        xaq: new flw(40, 120, 480, 40),
        pxc: new flw(30, 160, 280, 40),
        peb: new flw(328, 160, 30, 40),
        eby: new flw(360, 160, 120, 40),
        pzx: new flw(482, 160, 30, 40),
        vdd: new flw(30, 215, 280, 40),
        sxn: new flw(328, 215, 30, 40),
        vnj: new flw(360, 215, 120, 40),
        kpb: new flw(482, 215, 30, 40),
        qry: new flw(30, 270, 280, 40),
        fhs: new flw(328, 270, 30, 40),
        ywu: new flw(360, 270, 120, 40),
        kpx: new flw(482, 270, 30, 40),
        gfv: new flw(30, 330, 500, 30),
        xev: new flw(210, 370, 140, 50),
        hal: new flw(),
        zcq: {
            lrv: new flw(40, 0, 240, 40),
            wxt: new flw(7, 12, 16, 16),
            fontSize: 20,
            phq: 0,
            mmg: 2
        },
        vyz: {
            phq: 3,
            wkz: -5,
            dhm: -1,
            fms: 6,
            fontSize: 20,
            mmg: 0
        },
        idv: {
            phq: 3,
            wkz: 5,
            dhm: 0,
            fms: 6,
            fontSize: 20,
            mmg: 0
        },
        xsb: {
            phq: 6,
            wkz: 0,
            dhm: 0,
            fms: 6,
            fontSize: 26,
            mmg: 2
        },
        display: {
            yjs: 16,
            ela: 24,
            kjb: 0,
            crc: 0,
            mmg: 2,
            ggn: 3,
            opw: 3,
            mus: 3,
            fxp: 3
        }
    };
    this.opx = {
        cij: [new flw(7, 20, 130, 46), new flw(673, 20, 130, 46)],
        display: {
            igm: new flw(6, 16, 118, 22),
            yjs: 14,
            pie: 20,
            kjb: -11,
            ete: 10,
            mmg: 3,
            zub: 8,
            tcc: 0,
            rhw: 4
        },
        nnc: {
            cij: new flw(55, 130, 700, 300),
            igm: new flw(),
            yjs: 66,
            pie: 150,
            kjb: -90,
            ete: 60,
            zub: 10,
            mmg: 0,
            tcc: 0,
            rhw: 0
        },
        zli: {
            cij: new flw(43, 80, 724, 369),
            opp: new flw(100, 53, 525, 50),
            igm: new flw(186, 153, 332, 94),
            wzq: 340,
            bnm: 30,
            xfl: {
                _0: new flw(2, 0, 90, 94),
                _1: new flw(98, 0, 90, 94),
                _2: new flw(194, 0, 90, 94),
                _3: new flw(290, 0, 90, 94),
                _4: new flw(386, 0, 90, 94),
                _5: new flw(482, 0, 90, 94),
                _6: new flw(578, 0, 90, 94),
                _7: new flw(674, 0, 90, 94),
                _8: new flw(770, 0, 90, 94),
                _9: new flw(866, 0, 90, 94),
                _cm: new flw(962, 0, 28, 94),
                _dt: new flw(999, 0, 28, 94),
                _sp: new flw(1036, 0, 28, 94)
            }
        }
    }
}
hhp.prototype = new ear;

function zhf() {
    this.dux = true
}
zhf.prototype = new hhp;

function tzv() {
    this.caa = false;
    this.aom = true;
    this.ecp = false;
    this.hkx = true;
    this.xrl = true;
    this.canvas = {
        cij: new flw(0, 0, 960, 600)
    };
    this.cod = {
        cij: new flw(),
        ncp: 0,
        rnr: 0
    };
    this.tlo = {
        cij: new flw(0, 0, 800, 600),
        mmg: 0
    };
    this.uiv = {
        zrh: new flw(0, 25, 470, 36),
        cwu: new flw(5, 2, 150, 30),
        ckt: new flw(160, 2, 150, 30),
        fcc: new flw(315, 2, 150, 30),
        krb: {
            fontSize: 15,
            textIndent: 30
        }
    };
    this.jgt = {
        tlo: {
            cij: new flw(0, 0, 640, 460),
            ett: new flw(0, 0, 640, 460),
            gfv: new flw(6, 416, 628, 38),
            lrv: new flw(6, 420, 628, 17),
            bva: new flw(64, 442, 512, 7),
            azx: new flw(6, 364, 628, 90),
            fontSize: 18,
            wes: 20,
            zub: 6,
            wkz: 12,
            dhm: 6,
            ojv: 3,
            lhz: 0,
            dvq: {
                cij: new flw(),
                x: 0,
                wkj: 0,
                ktg: 0
            },
            uss: {
                ett: new flw(),
                lrv: new flw(),
                bao: new flw()
            }
        },
        zwd: {
            cij: new flw(0, 0, 800, 600),
            ett: new flw(100, 75, 600, 450),
            gfv: new flw(),
            lrv: new flw(100, 295, 600, 24),
            bva: new flw(160, 325, 480, 3),
            azx: new flw(100, 265, 600, 115),
            fontSize: 21,
            wes: 26,
            zub: 0,
            wkz: 12,
            dhm: 8,
            ojv: 3,
            lhz: 10,
            dvq: {
                cij: new flw(400, 484, 0, 3),
                x: 38,
                wkj: 17,
                ktg: 23
            },
            uss: {
                ett: new flw(50, 0, 700, 450),
                lrv: new flw(100, 430, 600, 60),
                bao: new flw(200, 510, 400, 40)
            }
        },
        tgw: {
            cij: new flw(0, 0, 800, 600),
            ett: new flw(0, 0, 800, 600),
            gfv: new flw(),
            lrv: new flw(50, 420, 700, 21),
            bva: new flw(),
            azx: new flw(50, 410, 700, 80),
            fontSize: 18,
            wes: 24,
            zub: 0,
            wkz: 12,
            dhm: 7,
            ojv: 0,
            lhz: 0,
            dvq: {
                cij: new flw(260, 119, 280, 280),
                x: 0,
                wkj: 0,
                ktg: 0
            },
            uss: {
                ett: new flw(50, 0, 700, 450),
                lrv: new flw(100, 460, 600, 60),
                bao: new flw(200, 540, 400, 40)
            }
        }
    };
    this.gyi = {};
    this.pgu = {};
    this.uhj = {
        cij: new flw(0, 0, 960, 600),
        zrh: new flw(800, 0, 160, 600),
        krb: {
            ela: 0,
            pie: 0,
            wkz: 0,
            crc: 0,
            ete: 0,
            fms: 8,
            phq: 16,
            mmg: 4
        },
        iht: new flw(0, 20, 800, 40),
        pbr: new flw(0, 100, 800, 40),
        xxn: new flw(0, 140, 800, 40),
        gbv: new flw(0, 180, 800, 40),
        yvy: new flw(225, 275, 350, 100),
        zjp: new flw(200, 480, 400, 40),
        pnf: {
            eed: new flw(815, 410, 130, 130),
        },
        hqr: {
            eed: new flw(815, 310, 130, 130),
            iyz: new flw(815, 120, 130, 130)
        },
        fhd: 36,
        fontSize: 30,
        grt: 22,
        dhm: 3,
        wkz: 5,
        mmg: 2,
        yvm: 3,
        one: 10
    };
    this.sqq = {
        cij: new flw(0, 0, 960, 600),
        mmg: 0,
        phq: 0,
        iew: 50,
        mqv: 30,
        djw: 30,
        fas: new flw(70, 170, 470, 70),
        pxy: new flw(560, 170, 60, 70),
        nxl: new flw(622, 170, 210, 70),
        pbl: new flw(834, 170, 60, 70),
        ghq: new flw(70, 310, 470, 70),
        wgx: new flw(560, 310, 60, 70),
        cyi: new flw(622, 310, 210, 70),
        vbo: new flw(834, 310, 60, 70),
        jxm: new flw(70, 450, 470, 70),
        gll: new flw(622, 450, 210, 70),
        fwt: new flw(90, 530, 780, 50),
        xnx: new flw(80, 120, 470, 60),
        hra: new flw(570, 120, 50, 60),
        ebr: new flw(622, 120, 210, 60),
        xsr: new flw(834, 120, 50, 60),
        jsy: new flw(90, 200, 780, 70),
        pxc: new flw(80, 280, 470, 60),
        peb: new flw(570, 280, 50, 60),
        eby: new flw(622, 280, 210, 60),
        pzx: new flw(834, 280, 50, 60),
        vdd: new flw(80, 360, 470, 60),
        sxn: new flw(570, 360, 50, 60),
        vnj: new flw(622, 360, 210, 60),
        kpb: new flw(834, 360, 50, 60),
        qry: new flw(80, 440, 470, 60),
        fhs: new flw(570, 440, 50, 60),
        ywu: new flw(622, 440, 210, 60),
        kpx: new flw(834, 440, 50, 60),
        gfv: new flw(90, 530, 780, 50),
        ysy: {
            jdc: new flw(0, 10, 240, 90),
            rhc: new flw(240, 10, 240, 90),
            zzh: new flw(480, 10, 240, 90),
            dgb: new flw(720, 10, 240, 90)
        },
        zeo: {
            jdc: new flw(0, 10, 192, 90),
            xty: new flw(192, 10, 192, 90),
            rhc: new flw(384, 10, 192, 90),
            zzh: new flw(576, 10, 192, 90),
            dgb: new flw(768, 10, 192, 90)
        },
        unz: [new flw(190, 205, 200, 160), new flw(570, 205, 200, 160)],
        wnl: [new flw(90, 205, 200, 160), new flw(380, 205, 200, 160), new flw(670, 205, 200, 160)],
        qjv: [new flw(190, 130, 200, 160), new flw(570, 130, 200, 160), new flw(190, 360, 200, 160), new flw(570, 360, 200, 160)],
        jjg: [new flw(90, 130, 200, 160), new flw(380, 130, 200, 160), new flw(670, 130, 200, 160), new flw(90, 360, 200, 160), new flw(380, 360, 200, 160), new flw(670, 360, 200, 160)],
        vyz: {
            phq: 3,
            wkz: -10,
            dhm: -1,
            fms: 6,
            fontSize: 36,
            mmg: 0,
        },
        idv: {
            phq: 3,
            wkz: 10,
            dhm: -1,
            fms: 6,
            fontSize: 36,
            mmg: 0,
        },
        mwl: {
            fontSize: 36,
            wkz: 0,
            dhm: 0,
            fms: 10,
            phq: 0,
            mmg: 0
        },
        jde: {
            fontSize: 26,
            zub: 5,
            phq: 26,
            mmg: 4,
            xeq: 40
        },
        orz: {
            yjs: 16,
            ela: 40,
            kjb: 0,
            crc: 0,
            mmg: 2,
            zub: 3
        },
        uni: {
            yjs: 16,
            ela: 40,
            kjb: 0,
            crc: 0,
            mmg: 2,
            zub: 3
        },
        zcq: {
            lrv: new flw(50, 0, 360, 60),
            wxt: new flw(0, 13, 30, 30),
            fontSize: 30,
            phq: 0,
            mmg: 2
        }
    };
    this.sje = {
        cij: new flw(-10, 5, 310, 60),
        iht: new flw(10, 6, 240, 26),
        lrv: new flw(10, 34, 240, 20),
        beo: new flw(255, 11, 50, 38),
        rjt: new flw(8, 2, 34, 34),
        yjs: 16,
        ela: 12,
        xhr: 24
    };
    this.aka = {
        cij: new flw(200, 135, 560, 330),
        yjs: 26,
        fontSize: 20,
        gji: new flw(515, 5, 40, 40),
        iht: new flw(40, 0, 480, 30),
        zjp: new flw(20, 40, 520, 195),
        jlp: new flw(20, 265, 520, 54),
        krb: {
            fontSize: 20
        }
    };
    this.opx = {
        cij: [new flw(2, 0, 130, 46), new flw(668, 0, 130, 46)],
        display: {
            igm: new flw(6, 16, 118, 23),
            yjs: 14,
            pie: 20,
            kjb: -11,
            ete: 10,
            zub: 8,
            mmg: 3,
            tcc: 0,
            rhw: 4
        },
        nnc: {
            cij: new flw(50, 110, 700, 300),
            igm: new flw(),
            yjs: 66,
            pie: 150,
            kjb: -90,
            ete: 60,
            zub: 10,
            mmg: 0,
            tcc: 0,
            rhw: 0
        },
        zli: {
            cij: new flw(38, 60, 724, 369),
            opp: new flw(100, 53, 525, 50),
            igm: new flw(186, 153, 332, 94),
            wzq: 340,
            bnm: 30,
            xfl: {
                _0: new flw(2, 0, 90, 94),
                _1: new flw(98, 0, 90, 94),
                _2: new flw(194, 0, 90, 94),
                _3: new flw(290, 0, 90, 94),
                _4: new flw(386, 0, 90, 94),
                _5: new flw(482, 0, 90, 94),
                _6: new flw(578, 0, 90, 94),
                _7: new flw(674, 0, 90, 94),
                _8: new flw(770, 0, 90, 94),
                _9: new flw(866, 0, 90, 94),
                _cm: new flw(962, 0, 28, 94),
                _dt: new flw(999, 0, 28, 94),
                _sp: new flw(1036, 0, 28, 94)
            }
        }
    }
}
tzv.prototype = new ear;

function jgh() {
    this.caa = false;
    this.aom = true;
    this.ecp = false;
    this.hkx = true;
    this.xrl = true;
    this.canvas = {
        cij: new flw(0, 0, 960, 600)
    };
    this.cod = {
        cij: new flw(),
        ncp: 0,
        rnr: 0
    };
    this.tlo = {
        cij: new flw(160, 0, 800, 600),
        mmg: 0
    };
    this.uiv = {
        zrh: new flw(490, 25, 470, 36),
        cwu: new flw(5, 4, 150, 30),
        ckt: new flw(160, 4, 150, 30),
        fcc: new flw(315, 4, 150, 30),
        krb: {
            fontSize: 15,
            textIndent: 30
        }
    };
    this.jgt = {
        tlo: {
            cij: new flw(0, 0, 640, 460),
            ett: new flw(0, 0, 640, 460),
            gfv: new flw(6, 416, 628, 38),
            lrv: new flw(6, 420, 628, 17),
            bva: new flw(64, 442, 512, 7),
            azx: new flw(6, 364, 628, 90),
            fontSize: 18,
            wes: 20,
            zub: 6,
            wkz: 12,
            dhm: 6,
            ojv: 3,
            lhz: 0,
            dvq: {
                cij: new flw(),
                x: 0,
                wkj: 0,
                ktg: 0
            },
            uss: {
                ett: new flw(),
                lrv: new flw(),
                bao: new flw()
            }
        },
        zwd: {
            cij: new flw(0, 0, 800, 600),
            ett: new flw(100, 75, 600, 450),
            gfv: new flw(),
            lrv: new flw(100, 295, 600, 24),
            bva: new flw(160, 325, 480, 3),
            azx: new flw(100, 265, 600, 115),
            fontSize: 21,
            wes: 26,
            zub: 0,
            wkz: 12,
            dhm: 8,
            ojv: 3,
            lhz: 10,
            dvq: {
                cij: new flw(400, 484, 0, 3),
                x: 38,
                wkj: 17,
                ktg: 23
            },
            uss: {
                ett: new flw(50, 0, 700, 450),
                lrv: new flw(100, 430, 600, 60),
                bao: new flw(200, 510, 400, 40)
            }
        },
        tgw: {
            cij: new flw(0, 0, 800, 600),
            ett: new flw(0, 0, 800, 600),
            gfv: new flw(),
            lrv: new flw(50, 420, 700, 21),
            bva: new flw(),
            azx: new flw(50, 410, 700, 80),
            fontSize: 18,
            wes: 24,
            zub: 0,
            wkz: 12,
            dhm: 7,
            ojv: 0,
            lhz: 0,
            dvq: {
                cij: new flw(260, 119, 280, 280),
                x: 0,
                wkj: 0,
                ktg: 0
            },
            uss: {
                ett: new flw(50, 0, 700, 450),
                lrv: new flw(100, 460, 600, 60),
                bao: new flw(200, 540, 400, 40)
            }
        }
    };
    this.gyi = {};
    this.pgu = {};
    this.uhj = {
        cij: new flw(0, 0, 960, 600),
        zrh: new flw(0, 0, 160, 600),
        krb: {
            ela: 0,
            pie: 0,
            wkz: 0,
            crc: 0,
            ete: 0,
            fms: 8,
            phq: 16,
            mmg: 4
        },
        iht: new flw(160, 20, 800, 40),
        pbr: new flw(160, 100, 800, 40),
        xxn: new flw(160, 140, 800, 40),
        gbv: new flw(160, 180, 800, 40),
        yvy: new flw(385, 275, 350, 100),
        zjp: new flw(360, 480, 400, 40),
        pnf: {
            eed: new flw(15, 410, 130, 130),
        },
        hqr: {
            eed: new flw(15, 310, 130, 130),
            iyz: new flw(15, 120, 130, 130)
        },
        fhd: 36,
        fontSize: 30,
        grt: 22,
        dhm: 3,
        wkz: 5,
        mmg: 2,
        yvm: 3,
        one: 10
    };
    this.sqq = {
        cij: new flw(0, 0, 960, 600),
        mmg: 0,
        phq: 0,
        iew: 50,
        mqv: 30,
        djw: 30,
        fas: new flw(70, 170, 470, 70),
        pxy: new flw(560, 170, 60, 70),
        nxl: new flw(622, 170, 210, 70),
        pbl: new flw(834, 170, 60, 70),
        ghq: new flw(70, 310, 470, 70),
        wgx: new flw(560, 310, 60, 70),
        cyi: new flw(622, 310, 210, 70),
        vbo: new flw(834, 310, 60, 70),
        jxm: new flw(70, 450, 470, 70),
        gll: new flw(622, 450, 210, 70),
        fwt: new flw(90, 530, 780, 50),
        xnx: new flw(80, 120, 470, 60),
        hra: new flw(570, 120, 50, 60),
        ebr: new flw(622, 120, 210, 60),
        xsr: new flw(834, 120, 50, 60),
        jsy: new flw(90, 200, 780, 70),
        pxc: new flw(80, 280, 470, 60),
        peb: new flw(570, 280, 50, 60),
        eby: new flw(622, 280, 210, 60),
        pzx: new flw(834, 280, 50, 60),
        vdd: new flw(80, 360, 470, 60),
        sxn: new flw(570, 360, 50, 60),
        vnj: new flw(622, 360, 210, 60),
        kpb: new flw(834, 360, 50, 60),
        qry: new flw(80, 440, 470, 60),
        fhs: new flw(570, 440, 50, 60),
        ywu: new flw(622, 440, 210, 60),
        kpx: new flw(834, 440, 50, 60),
        gfv: new flw(90, 530, 780, 50),
        ysy: {
            jdc: new flw(0, 10, 240, 90),
            rhc: new flw(240, 10, 240, 90),
            zzh: new flw(480, 10, 240, 90),
            dgb: new flw(720, 10, 240, 90)
        },
        zeo: {
            jdc: new flw(0, 10, 192, 90),
            xty: new flw(192, 10, 192, 90),
            rhc: new flw(384, 10, 192, 90),
            zzh: new flw(576, 10, 192, 90),
            dgb: new flw(768, 10, 192, 90)
        },
        unz: [new flw(190, 205, 200, 160), new flw(570, 205, 200, 160)],
        wnl: [new flw(90, 205, 200, 160), new flw(380, 205, 200, 160), new flw(670, 205, 200, 160)],
        qjv: [new flw(190, 130, 200, 160), new flw(570, 130, 200, 160), new flw(190, 360, 200, 160), new flw(570, 360, 200, 160)],
        jjg: [new flw(90, 130, 200, 160), new flw(380, 130, 200, 160), new flw(670, 130, 200, 160), new flw(90, 360, 200, 160), new flw(380, 360, 200, 160), new flw(670, 360, 200, 160)],
        vyz: {
            phq: 3,
            wkz: -10,
            dhm: -1,
            fms: 6,
            fontSize: 36,
            mmg: 0,
        },
        idv: {
            phq: 3,
            wkz: 10,
            dhm: -1,
            fms: 6,
            fontSize: 36,
            mmg: 0,
        },
        mwl: {
            fontSize: 36,
            wkz: 0,
            dhm: 0,
            fms: 10,
            phq: 0,
            mmg: 0
        },
        jde: {
            fontSize: 26,
            zub: 5,
            phq: 26,
            mmg: 4,
            xeq: 40
        },
        orz: {
            yjs: 16,
            ela: 40,
            kjb: 0,
            crc: 0,
            mmg: 2,
            zub: 3
        },
        uni: {
            yjs: 16,
            ela: 40,
            kjb: 0,
            crc: 0,
            mmg: 2,
            zub: 3
        },
        zcq: {
            lrv: new flw(50, 0, 360, 60),
            wxt: new flw(0, 13, 30, 30),
            fontSize: 30,
            phq: 0,
            mmg: 2
        }
    };
    this.sje = {
        cij: new flw(660, 5, 310, 60),
        iht: new flw(60, 6, 240, 26),
        lrv: new flw(60, 34, 240, 20),
        beo: new flw(5, 11, 50, 38),
        rjt: new flw(8, 2, 34, 34),
        yjs: 16,
        ela: 12,
        xhr: 24
    };
    this.aka = {
        cij: new flw(200, 135, 560, 330),
        yjs: 26,
        fontSize: 20,
        gji: new flw(515, 5, 40, 40),
        iht: new flw(40, 5, 480, 30),
        zjp: new flw(20, 40, 520, 195),
        jlp: new flw(20, 265, 520, 54),
        krb: {
            fontSize: 20
        }
    };
    this.opx = {
        cij: [new flw(162, 0, 130, 46), new flw(828, 0, 130, 46)],
        display: {
            igm: new flw(6, 16, 118, 23),
            yjs: 14,
            pie: 20,
            kjb: -11,
            ete: 10,
            zub: 8,
            mmg: 3,
            tcc: 0,
            rhw: 4
        },
        nnc: {
            cij: new flw(210, 110, 700, 300),
            igm: new flw(),
            yjs: 66,
            pie: 150,
            kjb: -90,
            ete: 60,
            zub: 10,
            mmg: 0,
            tcc: 0,
            rhw: 0
        },
        zli: {
            cij: new flw(198, 60, 724, 369),
            opp: new flw(100, 53, 525, 50),
            igm: new flw(186, 153, 332, 94),
            wzq: 340,
            bnm: 30,
            xfl: {
                _0: new flw(2, 0, 90, 94),
                _1: new flw(98, 0, 90, 94),
                _2: new flw(194, 0, 90, 94),
                _3: new flw(290, 0, 90, 94),
                _4: new flw(386, 0, 90, 94),
                _5: new flw(482, 0, 90, 94),
                _6: new flw(578, 0, 90, 94),
                _7: new flw(674, 0, 90, 94),
                _8: new flw(770, 0, 90, 94),
                _9: new flw(866, 0, 90, 94),
                _cm: new flw(962, 0, 28, 94),
                _dt: new flw(999, 0, 28, 94),
                _sp: new flw(1036, 0, 28, 94)
            }
        }
    }
}
jgh.prototype = new ear;

function whj() {
    this.wst = true;
    this.psf = true;
    this.vmf = true;
    this.cod = {
        cij: new flw(0, 20, 800, 600),
        ncp: 0,
        rnr: 0
    };
    this.hii = {
        cij: new flw(0, 20, 800, 600),
        ncp: -20,
        rnr: 0
    };
    this.hxb = {
        cij: new flw(40, 110, 136, 360),
        ufp: new flw(40, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.zpm = {
        cij: new flw(186, 110, 136, 360),
        ufp: new flw(186, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.eak = {
        cij: new flw(332, 110, 136, 360),
        ufp: new flw(332, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.ogp = {
        cij: new flw(478, 110, 136, 360),
        ufp: new flw(478, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.cxy = {
        cij: new flw(624, 110, 136, 360),
        ufp: new flw(624, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.ukx = {
        cij: new flw(0, 20, 800, 86),
        fontSize: 50,
        wkz: 0,
        dhm: 6,
        zub: 0,
        srs: 2
    };
    this.xav = {
        cij: new flw(0, 20, 800, 80),
        fontSize: 50,
        wkz: 0,
        dhm: 8,
        zub: 0,
        srs: 2
    };
    this.ozh = {
        cij: new flw(4, 110, 0, 0),
        ign: [25, 65, 165, 265, 305],
        wty: 30,
        ekl: 30
    };
    this.qhr = {
        cij: new flw(766, 110, 0, 0),
        ign: [25, 65, 165, 265, 305],
        wty: 30,
        ekl: 30
    };
    this.hmm = {
        cij: new flw(710, 35, 90, 450),
        iht: new flw(5, 5, 80, 15),
        cco: new flw(55, 25, 30, 410),
        fontSize: 15,
        ylh: 20,
        mmg: 2,
        phq: 5,
        vbu: 4,
        kfe: 10,
        zwx: 5
    };
    this.qen = {
        cij: new flw(0, 35, 90, 450),
        iht: new flw(5, 5, 80, 15),
        cco: new flw(5, 25, 30, 410),
        fontSize: 15,
        ylh: 20,
        mmg: 2,
        phq: 5,
        vbu: 4,
        kfe: 10,
        zwx: 5
    };
    this.tbm = {
        cij: new flw(0, 20, 800, 600),
        zrh: new flw(0, 540, 800, 60),
        iyz: new flw(711, 544, 73, 53),
        stm: new flw(11, 544, 73, 53),
        ubv: new flw(316, 544, 73, 53),
        zpd: new flw(411, 544, 73, 53),
        krb: {
            ela: 16,
            pie: 0,
            wkz: 0,
            crc: 0,
            ete: 0,
            fms: 6,
            phq: 8,
            mmg: 2
        }
    };
    this.ryz = {
        cij: new flw(0, 20, 800, 600),
        zrh: new flw(0, 485, 800, 115),
        fxo: {
            cij: new flw(187, 489, 470, 40),
            fontSize: 18,
            dhm: 14,
            phq: 3,
            cxx: 2,
            fms: 6,
            mmg: 2
        },
        vos: {
            cij: new flw(331, 216, 137, 187),
            lrv: new flw(5, 8, 56, 34),
            igm: new flw(37, 3, 98, 104),
            rqx: new flw(33, 110, 72, 76),
            gdv: new flw(10, 42, 45, 45),
            kgs: new flw(5, 120, 126, 50),
            fontSize: 34,
            iif: 50,
            zub: 3,
            evg: 4
        },
        law: {
            cij: new flw(380, 105, 380, 45),
            ufq: 2
        },
        krb: {
            ela: 18,
            pie: 0,
            wkz: 0,
            crc: 0,
            ete: 0,
            fms: 8,
            phq: 10,
            mmg: 2
        },
        display: {
            kjb: -12,
            crc: 11,
            ela: 26,
            yjs: 15,
            mmg: 2,
            ggn: 3,
            opw: 3,
            mus: 3,
            fxp: 3
        },
        xos: {
            kjb: 0,
            crc: 0,
            ela: 0,
            yjs: 0,
            mmg: 0,
            ggn: 0,
            opw: 0,
            mus: 0,
            fxp: 0
        },
        bhz: new flw(),
        hzo: new flw(),
        frt: new flw(415, 544, 110, 53),
        iig: new flw(275, 544, 110, 53),
        kgs: new flw(689, 485, 106, 48),
        bnw: new flw(5, 485, 150, 48),
        jgp: new flw(73, 315, 91, 96),
        cia: new flw(166, 315, 91, 96),
        uzw: new flw(542, 315, 91, 96),
        rkm: new flw(635, 315, 91, 96),
        ghe: new flw(73, 218, 184, 92),
        pzz: new flw(542, 218, 184, 92),
        xei: new flw(65, 170, 200, 50),
        tlb: new flw(509, 170, 250, 50),
        bje: new flw(534, 410, 200, 50)
    };
    this.cmi = {
        cij: new flw(0, 475, 800, 145),
        ftu: new flw(0, 0, 800, 145),
        wuf: new flw(),
        fxo: {
            cij: new flw(187, 34, 470, 40),
            dhm: 14,
            fontSize: 18,
            phq: 3,
            cxx: 2,
            fms: 6,
            mmg: 2
        },
        win: {
            cij: new flw(45, 2, 710, 25),
            fontSize: 20,
            dhm: 4,
            phq: 3,
            cxx: 2,
            fms: 6,
            mmg: 0
        },
        cdy: {
            cij: new flw(187, 51, 470, 70),
            zwx: 10,
            crc: 2,
            fontSize: 24,
            mmg: 2,
            ggn: 3,
            opw: 3,
            mus: 3,
            fxp: 3
        },
        uul: {
            ela: 22,
            pie: 0,
            wkz: 0,
            crc: 0,
            ete: 0,
            phq: 10,
            fms: 8,
            mmg: 2
        },
        nwk: {
            ela: 16,
            pie: 0,
            wkz: 0,
            crc: 0,
            ete: 0,
            phq: 8,
            fms: 8,
            mmg: 2
        },
        tsy: {
            ela: 0,
            pie: 0,
            wkz: 0,
            phq: 0,
            fms: 0,
            mmg: 0,
            crc: 0,
            ete: 0
        },
        cvf: {
            ela: 16,
            pie: 16,
            wkz: 0,
            phq: 8,
            fms: 6,
            mmg: 2,
            crc: 24,
            ete: -24
        },
        display: {
            kjb: -12,
            crc: 11,
            ela: 26,
            yjs: 15,
            mmg: 2,
            ggn: 3,
            opw: 3,
            mus: 3,
            fxp: 3
        },
        ymz: {
            kjb: 0,
            crc: 0,
            ela: 0,
            yjs: 0,
            mmg: 0,
            ggn: 0,
            opw: 0,
            mus: 0,
            fxp: 0
        },
        xos: {
            cij: new flw(),
            kjb: 0,
            crc: 0,
            ela: 0,
            yjs: 0,
            mmg: 0,
            ggn: 0,
            opw: 0,
            mus: 0,
            fxp: 0
        },
        bhz: new flw(),
        hzo: new flw(),
        weq: new flw(5, 30, 150, 48),
        uwd: new flw(689, 30, 106, 48),
        ptk: new flw(),
        lxu: {
            bao: new flw(686, 89, 110, 53),
            nki: new flw(492, 89, 80, 53),
            tty: new flw(382, 89, 80, 53),
            iyz: new flw(272, 89, 80, 53),
            ekt: new flw(25, 89, 110, 53),
            piq: new flw()
        },
        gkb: {
            bao: new flw(686, 89, 110, 53),
            nki: new flw(532, 89, 80, 53),
            ign: new flw(432, 89, 80, 53),
            tty: new flw(332, 89, 80, 53),
            iyz: new flw(232, 89, 80, 53),
            ekt: new flw(25, 89, 110, 53),
            piq: new flw()
        },
        doo: {
            bao: new flw(686, 89, 110, 53),
            ekt: new flw(532, 89, 80, 53),
            nki: new flw(432, 89, 80, 53),
            tty: new flw(332, 89, 80, 53),
            iyz: new flw(232, 89, 80, 53),
            gvu: new flw(40, 89, 80, 53),
            piq: new flw()
        },
        nnv: {
            bao: new flw(686, 89, 110, 53),
            ekt: new flw(562, 89, 80, 53),
            nki: new flw(472, 89, 80, 53),
            ign: new flw(382, 89, 80, 53),
            tty: new flw(292, 89, 80, 53),
            iyz: new flw(202, 89, 80, 53),
            gvu: new flw(40, 89, 80, 53),
            piq: new flw()
        },
        keh: {
            bao: new flw(686, 89, 110, 53),
            ekt: new flw(492, 89, 80, 53),
            nki: new flw(382, 89, 80, 53),
            tty: new flw(272, 89, 80, 53),
            gvu: new flw(40, 89, 80, 53),
            piq: new flw()
        },
        yjk: {
            bao: new flw(686, 89, 110, 53),
            ekt: new flw(532, 89, 80, 53),
            nki: new flw(432, 89, 80, 53),
            ign: new flw(332, 89, 80, 53),
            tty: new flw(232, 89, 80, 53),
            gvu: new flw(40, 89, 80, 53),
            piq: new flw()
        },
        stv: {
            bao: new flw(686, 89, 110, 53),
            nki: new flw(492, 89, 80, 53),
            tty: new flw(382, 89, 80, 53),
            iyz: new flw(272, 89, 80, 53),
            ekt: new flw(25, 89, 110, 53),
            piq: new flw()
        },
        zag: {
            bao: new flw(686, 89, 110, 53),
            nki: new flw(532, 89, 80, 53),
            ign: new flw(432, 89, 80, 53),
            tty: new flw(332, 89, 80, 53),
            iyz: new flw(232, 89, 80, 53),
            ekt: new flw(25, 89, 110, 53),
            piq: new flw()
        },
        etk: {
            bao: new flw(686, 89, 110, 53),
            ekt: new flw(25, 89, 110, 53),
            piq: new flw()
        },
        agp: {
            bao: new flw(686, 89, 110, 53),
            ekt: new flw(25, 89, 110, 53),
            piq: new flw()
        },
        oxl: 60
    };
    this.dvq = {
        cij: new flw(40, 110, 720, 360),
        lineWidth: 4,
        hbv: 5,
        mmg: 1,
        dhn: 136,
        zlv: 120,
        fontSize: 40,
        shi: 10,
        ccs: 5,
        fyn: 100,
        rqa: 96,
        w1: 136,
        w2: 126,
        w3: 116,
        w4: 140,
        w5: 320,
        w6: 210,
        h1: 120,
        h2: 110,
        h3: 90,
        h4: 100,
        h5: 88,
        h6: 280
    };
    this.spz = [
        [87, 290, 713, 290],
        [87, 170, 713, 170],
        [87, 410, 713, 410],
        [87, 170, 112, 170, 400, 410, 688, 170, 713, 170],
        [87, 410, 112, 410, 400, 170, 688, 410, 713, 410]
    ]
}
whj.prototype = new jvv;

function bnd() {
    this.dux = true
}
bnd.prototype = new whj;

function mcu() {
    this.wst = true;
    this.psf = true;
    this.vmf = true;
    this.cod = {
        cij: new flw(0, 550, 800, 600),
        ncp: -14,
        rnr: 0
    };
    this.hii = {
        cij: new flw(0, 550, 800, 600),
        ncp: -550,
        rnr: 0
    };
    this.hxb = {
        cij: new flw(40, 640, 136, 360),
        ufp: new flw(40, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.zpm = {
        cij: new flw(186, 640, 136, 360),
        ufp: new flw(186, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.eak = {
        cij: new flw(332, 640, 136, 360),
        ufp: new flw(332, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.ogp = {
        cij: new flw(478, 640, 136, 360),
        ufp: new flw(478, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.cxy = {
        cij: new flw(624, 640, 136, 360),
        ufp: new flw(624, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.ukx = {
        cij: new flw(0, 550, 800, 86),
        fontSize: 50,
        wkz: 0,
        dhm: 6,
        zub: 0,
        srs: 2
    };
    this.xav = {
        cij: new flw(0, 550, 800, 80),
        fontSize: 50,
        wkz: 0,
        dhm: 8,
        zub: 0,
        srs: 2
    };
    this.ozh = {
        cij: new flw(4, 640, 0, 0),
        ign: [25, 65, 165, 265, 305],
        wty: 30,
        ekl: 30
    };
    this.qhr = {
        cij: new flw(766, 640, 0, 0),
        ign: [25, 65, 165, 265, 305],
        wty: 30,
        ekl: 30
    };
    this.hmm = {
        cij: new flw(710, 565, 90, 450),
        iht: new flw(5, 5, 80, 15),
        cco: new flw(55, 25, 30, 410),
        fontSize: 15,
        ylh: 20,
        mmg: 2,
        phq: 5,
        vbu: 4,
        kfe: 10,
        zwx: 5
    };
    this.qen = {
        cij: new flw(0, 565, 90, 450),
        iht: new flw(5, 5, 80, 15),
        cco: new flw(5, 25, 30, 410),
        fontSize: 15,
        ylh: 20,
        mmg: 2,
        phq: 5,
        vbu: 4,
        kfe: 10,
        zwx: 5
    };
    this.tbm = {
        cij: new flw(0, 550, 800, 615),
        zrh: new flw(0, 540, 800, 75),
        iyz: new flw(695, 544, 90, 68),
        stm: new flw(11, 544, 90, 68),
        ubv: new flw(295, 544, 90, 68),
        zpd: new flw(415, 544, 90, 68),
        krb: {
            ela: 21,
            pie: 0,
            wkz: 0,
            crc: 0,
            ete: 0,
            fms: 8,
            phq: 10,
            mmg: 2
        }
    };
    this.ryz = {
        cij: new flw(0, 550, 800, 615),
        zrh: new flw(0, 485, 800, 130),
        fxo: {
            cij: new flw(187, 489, 470, 40),
            fontSize: 18,
            dhm: 14,
            phq: 3,
            cxx: 2,
            fms: 6,
            mmg: 2
        },
        vos: {
            cij: new flw(331, 216, 137, 187),
            lrv: new flw(5, 8, 56, 34),
            igm: new flw(37, 3, 98, 104),
            rqx: new flw(33, 110, 72, 76),
            gdv: new flw(10, 42, 45, 45),
            kgs: new flw(5, 120, 126, 50),
            fontSize: 34,
            iif: 50,
            zub: 3,
            evg: 4
        },
        law: {
            cij: new flw(380, 105, 380, 45),
            ufq: 2
        },
        krb: {
            ela: 23,
            pie: 0,
            wkz: 0,
            crc: 0,
            ete: 0,
            fms: 10,
            phq: 12,
            mmg: 2
        },
        display: {
            kjb: -12,
            crc: 11,
            ela: 26,
            yjs: 15,
            mmg: 2,
            ggn: 3,
            opw: 3,
            mus: 3,
            fxp: 3
        },
        xos: {
            kjb: 0,
            crc: 0,
            ela: 0,
            yjs: 0,
            mmg: 0,
            ggn: 0,
            opw: 0,
            mus: 0,
            fxp: 0
        },
        bhz: new flw(),
        hzo: new flw(),
        frt: new flw(415, 544, 120, 68),
        iig: new flw(265, 544, 120, 68),
        kgs: new flw(689, 485, 106, 48),
        bnw: new flw(5, 485, 150, 48),
        jgp: new flw(73, 315, 91, 96),
        cia: new flw(166, 315, 91, 96),
        uzw: new flw(542, 315, 91, 96),
        rkm: new flw(635, 315, 91, 96),
        ghe: new flw(73, 218, 184, 92),
        pzz: new flw(542, 218, 184, 92),
        xei: new flw(65, 170, 200, 50),
        tlb: new flw(509, 170, 250, 50),
        bje: new flw(534, 410, 200, 50)
    };
    this.cmi = {
        cij: new flw(0, 1005, 800, 160),
        ftu: new flw(0, 0, 800, 160),
        wuf: new flw(),
        fxo: {
            cij: new flw(187, 34, 470, 40),
            dhm: 14,
            fontSize: 18,
            phq: 3,
            cxx: 2,
            fms: 6,
            mmg: 2
        },
        win: {
            cij: new flw(45, 2, 710, 25),
            fontSize: 20,
            dhm: 4,
            phq: 3,
            cxx: 2,
            fms: 6,
            mmg: 0
        },
        cdy: {
            cij: new flw(187, 58, 470, 70),
            zwx: 10,
            crc: 2,
            fontSize: 24,
            mmg: 2,
            ggn: 3,
            opw: 3,
            mus: 3,
            fxp: 3
        },
        uul: {
            ela: 28,
            pie: 0,
            wkz: 0,
            crc: 0,
            ete: 0,
            phq: 12,
            fms: 10,
            mmg: 2
        },
        nwk: {
            ela: 21,
            pie: 0,
            wkz: 0,
            crc: 0,
            ete: 0,
            phq: 10,
            fms: 8,
            mmg: 2
        },
        tsy: {
            ela: 0,
            pie: 0,
            wkz: 0,
            phq: 0,
            fms: 0,
            mmg: 0,
            crc: 0,
            ete: 0
        },
        cvf: {
            ela: 21,
            pie: 21,
            wkz: 0,
            phq: 8,
            fms: 6,
            mmg: 2,
            crc: 30,
            ete: -32
        },
        display: {
            kjb: -12,
            crc: 11,
            ela: 26,
            yjs: 15,
            mmg: 2,
            ggn: 3,
            opw: 3,
            mus: 3,
            fxp: 3
        },
        ymz: {
            kjb: 0,
            crc: 0,
            ela: 0,
            yjs: 0,
            mmg: 0,
            ggn: 0,
            opw: 0,
            mus: 0,
            fxp: 0
        },
        xos: {
            kjb: 0,
            crc: 0,
            ela: 0,
            yjs: 0,
            mmg: 0,
            ggn: 0,
            opw: 0,
            mus: 0,
            fxp: 0
        },
        bhz: new flw(),
        hzo: new flw(),
        weq: new flw(5, 30, 150, 48),
        uwd: new flw(689, 30, 106, 48),
        ptk: new flw(),
        lxu: {
            bao: new flw(675, 89, 120, 68),
            nki: new flw(486, 89, 100, 68),
            tty: new flw(371, 89, 100, 68),
            iyz: new flw(256, 89, 100, 68),
            ekt: new flw(20, 89, 120, 68),
            piq: new flw()
        },
        gkb: {
            bao: new flw(675, 89, 120, 68),
            nki: new flw(536, 89, 100, 68),
            ign: new flw(426, 89, 100, 68),
            tty: new flw(316, 89, 100, 68),
            iyz: new flw(206, 89, 100, 68),
            ekt: new flw(20, 89, 120, 68),
            piq: new flw()
        },
        doo: {
            bao: new flw(675, 89, 120, 68),
            ekt: new flw(536, 89, 100, 68),
            nki: new flw(426, 89, 100, 68),
            tty: new flw(316, 89, 100, 68),
            iyz: new flw(206, 89, 100, 68),
            gvu: new flw(30, 89, 100, 68),
            piq: new flw()
        },
        nnv: {
            bao: new flw(678, 89, 120, 68),
            ekt: new flw(576, 89, 90, 68),
            nki: new flw(476, 89, 90, 68),
            ign: new flw(376, 89, 90, 68),
            tty: new flw(276, 89, 90, 68),
            iyz: new flw(176, 89, 90, 68),
            gvu: new flw(35, 89, 90, 68),
            piq: new flw()
        },
        keh: {
            bao: new flw(675, 89, 120, 68),
            ekt: new flw(486, 89, 100, 68),
            nki: new flw(371, 89, 100, 68),
            tty: new flw(256, 89, 100, 68),
            gvu: new flw(30, 89, 100, 68),
            piq: new flw()
        },
        yjk: {
            bao: new flw(675, 89, 120, 68),
            ekt: new flw(536, 89, 100, 68),
            nki: new flw(426, 89, 100, 68),
            ign: new flw(316, 89, 100, 68),
            tty: new flw(206, 89, 100, 68),
            gvu: new flw(30, 89, 100, 68),
            piq: new flw()
        },
        stv: {
            bao: new flw(675, 89, 120, 68),
            nki: new flw(486, 89, 100, 68),
            tty: new flw(371, 89, 100, 68),
            iyz: new flw(256, 89, 100, 68),
            ekt: new flw(20, 89, 120, 68),
            piq: new flw()
        },
        zag: {
            bao: new flw(675, 89, 120, 68),
            nki: new flw(536, 89, 100, 68),
            ign: new flw(426, 89, 100, 68),
            tty: new flw(316, 89, 100, 68),
            iyz: new flw(206, 89, 100, 68),
            ekt: new flw(20, 89, 120, 68),
            piq: new flw()
        },
        etk: {
            bao: new flw(675, 90, 120, 68),
            ekt: new flw(20, 90, 120, 68),
            piq: new flw()
        },
        agp: {
            bao: new flw(675, 90, 120, 68),
            ekt: new flw(20, 90, 120, 68),
            piq: new flw()
        },
        oxl: 60
    };
    this.dvq = {
        cij: new flw(40, 640, 720, 360),
        lineWidth: 4,
        hbv: 5,
        mmg: 1,
        dhn: 136,
        zlv: 120,
        fontSize: 40,
        shi: 10,
        ccs: 5,
        fyn: 100,
        rqa: 96,
        w1: 136,
        w2: 126,
        w3: 116,
        w4: 140,
        w5: 320,
        w6: 210,
        h1: 120,
        h2: 110,
        h3: 90,
        h4: 100,
        h5: 88,
        h6: 280
    };
    this.spz = [
        [87, 820, 713, 820],
        [87, 700, 713, 700],
        [87, 940, 713, 940],
        [87, 700, 112, 700, 400, 940, 688, 700, 713, 700],
        [87, 940, 112, 940, 400, 700, 688, 940, 713, 940]
    ];
    this.top = {
        cij: new flw(0, 20, 800, 520)
    }
}
mcu.prototype = new jhj;

function caq() {
    this.wst = true;
    this.psf = true;
    this.vmf = true;
    this.cod = {
        cij: new flw(5, 20, 800, 600),
        ncp: 0,
        rnr: -10
    };
    this.hii = {
        cij: new flw(5, 20, 800, 600),
        ncp: -20,
        rnr: -5
    };
    this.hxb = {
        cij: new flw(45, 110, 136, 360),
        ufp: new flw(40, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.zpm = {
        cij: new flw(191, 110, 136, 360),
        ufp: new flw(186, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.eak = {
        cij: new flw(337, 110, 136, 360),
        ufp: new flw(332, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.ogp = {
        cij: new flw(483, 110, 136, 360),
        ufp: new flw(478, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.cxy = {
        cij: new flw(629, 110, 136, 360),
        ufp: new flw(624, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.ukx = {
        cij: new flw(5, 20, 800, 86),
        fontSize: 50,
        wkz: 0,
        dhm: 6,
        zub: 0,
        srs: 2
    };
    this.xav = {
        cij: new flw(5, 20, 800, 80),
        fontSize: 50,
        wkz: 0,
        dhm: 8,
        zub: 0,
        srs: 2
    };
    this.ozh = {
        cij: new flw(9, 110, 0, 0),
        ign: [25, 65, 165, 265, 305],
        wty: 30,
        ekl: 30
    };
    this.qhr = {
        cij: new flw(771, 110, 0, 0),
        ign: [25, 65, 165, 265, 305],
        wty: 30,
        ekl: 30
    };
    this.hmm = {
        cij: new flw(715, 35, 90, 450),
        iht: new flw(5, 5, 80, 15),
        cco: new flw(55, 25, 30, 410),
        fontSize: 15,
        ylh: 20,
        mmg: 2,
        phq: 5,
        vbu: 4,
        kfe: 10,
        zwx: 5
    };
    this.qen = {
        cij: new flw(5, 35, 90, 450),
        iht: new flw(5, 5, 80, 15),
        cco: new flw(5, 25, 30, 410),
        fontSize: 15,
        ylh: 20,
        mmg: 2,
        phq: 5,
        vbu: 4,
        kfe: 10,
        zwx: 5
    };
    this.tbm = {
        cij: new flw(5, 20, 800, 600),
        zrh: new flw(0, 540, 800, 60),
        iyz: new flw(711, 544, 73, 53),
        stm: new flw(11, 544, 73, 53),
        ubv: new flw(316, 544, 73, 53),
        zpd: new flw(411, 544, 73, 53),
        krb: {
            ela: 16,
            pie: 0,
            wkz: 0,
            crc: 0,
            ete: 0,
            fms: 6,
            phq: 8,
            mmg: 2
        }
    };
    this.ryz = {
        cij: new flw(5, 20, 800, 600),
        zrh: new flw(0, 485, 800, 115),
        fxo: {
            cij: new flw(187, 489, 470, 40),
            fontSize: 18,
            dhm: 14,
            phq: 3,
            cxx: 2,
            fms: 6,
            mmg: 2
        },
        vos: {
            cij: new flw(331, 216, 137, 187),
            lrv: new flw(5, 8, 56, 34),
            igm: new flw(37, 3, 98, 104),
            rqx: new flw(33, 110, 72, 76),
            gdv: new flw(10, 42, 45, 45),
            kgs: new flw(5, 120, 126, 50),
            fontSize: 34,
            iif: 50,
            zub: 3,
            evg: 4
        },
        law: {
            cij: new flw(380, 105, 380, 45),
            ufq: 2
        },
        krb: {
            ela: 18,
            pie: 0,
            wkz: 0,
            crc: 0,
            ete: 0,
            fms: 8,
            phq: 10,
            mmg: 2
        },
        display: {
            kjb: -12,
            crc: 11,
            ela: 26,
            yjs: 15,
            mmg: 2,
            ggn: 3,
            opw: 3,
            mus: 3,
            fxp: 3
        },
        xos: {
            kjb: 0,
            crc: 0,
            ela: 0,
            yjs: 0,
            mmg: 0,
            ggn: 0,
            opw: 0,
            mus: 0,
            fxp: 0
        },
        bhz: new flw(),
        hzo: new flw(),
        frt: new flw(415, 544, 110, 53),
        iig: new flw(275, 544, 110, 53),
        kgs: new flw(689, 485, 106, 48),
        bnw: new flw(5, 485, 150, 48),
        jgp: new flw(73, 315, 91, 96),
        cia: new flw(166, 315, 91, 96),
        uzw: new flw(542, 315, 91, 96),
        rkm: new flw(635, 315, 91, 96),
        ghe: new flw(73, 218, 184, 92),
        pzz: new flw(542, 218, 184, 92),
        xei: new flw(65, 170, 200, 50),
        tlb: new flw(509, 170, 250, 50),
        bje: new flw(534, 410, 200, 50)
    };
    this.cmi = {
        cij: new flw(5, 475, 800, 145),
        ftu: new flw(0, 0, 800, 145),
        wuf: new flw(),
        fxo: {
            cij: new flw(187, 34, 470, 40),
            dhm: 14,
            fontSize: 18,
            phq: 3,
            cxx: 2,
            fms: 6,
            mmg: 2
        },
        win: {
            cij: new flw(45, 2, 710, 25),
            fontSize: 20,
            dhm: 4,
            phq: 3,
            cxx: 2,
            fms: 6,
            mmg: 0
        },
        cdy: {
            cij: new flw(187, 51, 470, 70),
            zwx: 10,
            crc: 2,
            fontSize: 24,
            mmg: 2,
            ggn: 3,
            opw: 3,
            mus: 3,
            fxp: 3
        },
        uul: {
            ela: 22,
            pie: 0,
            wkz: 0,
            crc: 0,
            ete: 0,
            phq: 10,
            fms: 8,
            mmg: 2
        },
        nwk: {
            ela: 16,
            pie: 0,
            wkz: 0,
            crc: 0,
            ete: 0,
            phq: 8,
            fms: 6,
            mmg: 2
        },
        tsy: {
            ela: 0,
            pie: 0,
            wkz: 0,
            phq: 0,
            fms: 0,
            mmg: 0,
            crc: 0,
            ete: 0
        },
        cvf: {
            ela: 16,
            pie: 16,
            wkz: 0,
            phq: 8,
            fms: 6,
            mmg: 2,
            crc: 24,
            ete: -24
        },
        display: {
            kjb: -12,
            crc: 11,
            ela: 26,
            yjs: 15,
            mmg: 2,
            ggn: 3,
            opw: 3,
            mus: 3,
            fxp: 3
        },
        ymz: {
            kjb: 0,
            crc: 0,
            ela: 0,
            yjs: 0,
            mmg: 0,
            ggn: 0,
            opw: 0,
            mus: 0,
            fxp: 0
        },
        xos: {
            cij: new flw(),
            kjb: 0,
            crc: 0,
            ela: 0,
            yjs: 0,
            mmg: 0,
            ggn: 0,
            opw: 0,
            mus: 0,
            fxp: 0
        },
        bhz: new flw(),
        hzo: new flw(),
        weq: new flw(5, 30, 150, 48),
        uwd: new flw(689, 30, 106, 48),
        ptk: new flw(),
        lxu: {
            bao: new flw(686, 89, 110, 53),
            nki: new flw(492, 89, 80, 53),
            tty: new flw(382, 89, 80, 53),
            iyz: new flw(272, 89, 80, 53),
            ekt: new flw(25, 89, 110, 53),
            piq: new flw()
        },
        gkb: {
            bao: new flw(686, 89, 110, 53),
            nki: new flw(532, 89, 80, 53),
            ign: new flw(432, 89, 80, 53),
            tty: new flw(332, 89, 80, 53),
            iyz: new flw(232, 89, 80, 53),
            ekt: new flw(25, 89, 110, 53),
            piq: new flw()
        },
        doo: {
            bao: new flw(686, 89, 110, 53),
            ekt: new flw(532, 89, 80, 53),
            nki: new flw(432, 89, 80, 53),
            tty: new flw(332, 89, 80, 53),
            iyz: new flw(232, 89, 80, 53),
            gvu: new flw(40, 89, 80, 53),
            piq: new flw()
        },
        nnv: {
            bao: new flw(686, 89, 110, 53),
            ekt: new flw(562, 89, 80, 53),
            nki: new flw(472, 89, 80, 53),
            ign: new flw(382, 89, 80, 53),
            tty: new flw(292, 89, 80, 53),
            iyz: new flw(202, 89, 80, 53),
            gvu: new flw(40, 89, 80, 53),
            piq: new flw()
        },
        keh: {
            bao: new flw(686, 89, 110, 53),
            ekt: new flw(492, 89, 80, 53),
            nki: new flw(382, 89, 80, 53),
            tty: new flw(272, 89, 80, 53),
            gvu: new flw(40, 89, 80, 53),
            piq: new flw()
        },
        yjk: {
            bao: new flw(686, 89, 110, 53),
            ekt: new flw(532, 89, 80, 53),
            nki: new flw(432, 89, 80, 53),
            ign: new flw(332, 89, 80, 53),
            tty: new flw(232, 89, 80, 53),
            gvu: new flw(40, 89, 80, 53),
            piq: new flw()
        },
        stv: {
            bao: new flw(686, 89, 110, 53),
            nki: new flw(492, 89, 80, 53),
            tty: new flw(382, 89, 80, 53),
            iyz: new flw(272, 89, 80, 53),
            ekt: new flw(25, 89, 110, 53),
            piq: new flw()
        },
        zag: {
            bao: new flw(686, 89, 110, 53),
            nki: new flw(532, 89, 80, 53),
            ign: new flw(432, 89, 80, 53),
            tty: new flw(332, 89, 80, 53),
            iyz: new flw(232, 89, 80, 53),
            ekt: new flw(25, 89, 110, 53),
            piq: new flw()
        },
        etk: {
            bao: new flw(686, 89, 110, 53),
            ekt: new flw(25, 89, 110, 53),
            piq: new flw()
        },
        agp: {
            bao: new flw(686, 89, 110, 53),
            ekt: new flw(25, 89, 110, 53),
            piq: new flw()
        },
        oxl: 60
    };
    this.dvq = {
        cij: new flw(45, 110, 720, 360),
        lineWidth: 4,
        hbv: 5,
        mmg: 1,
        dhn: 136,
        zlv: 120,
        fontSize: 40,
        shi: 10,
        ccs: 5,
        fyn: 100,
        rqa: 96,
        w1: 136,
        w2: 126,
        w3: 116,
        w4: 140,
        w5: 320,
        w6: 210,
        h1: 120,
        h2: 110,
        h3: 90,
        h4: 100,
        h5: 88,
        h6: 280
    };
    this.spz = [
        [92, 290, 718, 290],
        [92, 170, 718, 170],
        [92, 410, 718, 410],
        [92, 170, 117, 170, 405, 410, 693, 170, 718, 170],
        [92, 410, 117, 410, 405, 170, 693, 410, 718, 410]
    ]
}
caq.prototype = new hhp;

function bfy() {
    this.dux = true
}
bfy.prototype = new caq;

function gmz() {
    this.wst = false;
    this.psf = true;
    this.vmf = true;
    this.cod = {
        cij: new flw(0, 0, 800, 600),
        ncp: 0,
        rnr: -160
    };
    this.hii = {
        cij: new flw(-160, 0, 1120, 600),
        rnr: 160,
        ncp: 0
    };
    this.hxb = {
        cij: new flw(40, 90, 136, 360),
        ufp: new flw(40, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.zpm = {
        cij: new flw(186, 90, 136, 360),
        ufp: new flw(186, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.eak = {
        cij: new flw(332, 90, 136, 360),
        ufp: new flw(332, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.ogp = {
        cij: new flw(478, 90, 136, 360),
        ufp: new flw(478, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.cxy = {
        cij: new flw(624, 90, 136, 360),
        ufp: new flw(624, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.ukx = {
        cij: new flw(0, 0, 800, 86),
        fontSize: 50,
        wkz: 0,
        dhm: 6,
        zub: 0,
        srs: 2
    };
    this.xav = {
        cij: new flw(0, 0, 800, 80),
        fontSize: 50,
        wkz: 0,
        dhm: 8,
        zub: 0,
        srs: 2
    };
    this.ozh = {
        cij: new flw(4, 90, 0, 0),
        ign: [25, 65, 165, 265, 305],
        wty: 30,
        ekl: 30
    };
    this.qhr = {
        cij: new flw(766, 90, 0, 0),
        ign: [25, 65, 165, 265, 305],
        wty: 30,
        ekl: 30
    };
    this.hmm = {};
    this.qen = {};
    this.tbm = {
        cij: new flw(0, 0, 960, 600),
        zrh: new flw(800, 0, 160, 600),
        iyz: new flw(820, 400, 120, 120),
        stm: new flw(),
        ubv: new flw(820, 50, 120, 120),
        zpd: new flw(820, 225, 120, 120),
        krb: {
            ela: 0,
            pie: 0,
            wkz: 0,
            crc: 0,
            ete: 0,
            phq: 0,
            fms: 16,
            mmg: 4
        }
    };
    this.ryz = {
        cij: new flw(0, 0, 960, 600),
        zrh: new flw(800, 0, 160, 600),
        fxo: {
            cij: new flw(225, 520, 390, 70),
            fontSize: 20,
            dhm: 14,
            phq: 3,
            cxx: 2,
            fms: 6,
            mmg: 2
        },
        vos: {
            cij: new flw(331, 216, 137, 187),
            lrv: new flw(5, 8, 56, 34),
            igm: new flw(37, 3, 98, 104),
            rqx: new flw(33, 110, 72, 76),
            gdv: new flw(10, 42, 45, 45),
            kgs: new flw(5, 120, 126, 50),
            fontSize: 34,
            iif: 50,
            zub: 3,
            evg: 4
        },
        law: {
            cij: new flw(380, 105, 380, 45),
            ufq: 2
        },
        krb: {
            ela: 24,
            pie: 0,
            wkz: 0,
            crc: 0,
            ete: 0,
            fms: 10,
            phq: 0,
            mmg: 4
        },
        display: {
            kjb: -18,
            crc: 16,
            ela: 32,
            yjs: 18,
            mmg: 3,
            ggn: 3,
            opw: 3,
            mus: 3,
            fxp: 3
        },
        xos: {
            kjb: 0,
            crc: 0,
            ela: 16,
            yjs: 0,
            mmg: 2,
            ggn: 0,
            opw: 0,
            mus: 0,
            fxp: 0
        },
        bhz: new flw(800, 0, 160, 22),
        hzo: new flw(800, 22, 160, 22),
        frt: new flw(820, 325, 120, 120),
        iig: new flw(820, 125, 120, 120),
        kgs: new flw(655, 520, 140, 70),
        bnw: new flw(5, 520, 180, 70),
        jgp: new flw(73, 315, 91, 96),
        cia: new flw(166, 315, 91, 96),
        uzw: new flw(542, 315, 91, 96),
        rkm: new flw(635, 315, 91, 96),
        ghe: new flw(73, 218, 184, 92),
        pzz: new flw(542, 218, 184, 92),
        xei: new flw(65, 170, 200, 50),
        tlb: new flw(509, 170, 250, 50),
        bje: new flw(534, 410, 200, 50)
    };
    this.cmi = {
        cij: new flw(0, 0, 960, 600),
        ftu: new flw(0, 455, 800, 145),
        wuf: new flw(800, 0, 160, 600),
        fxo: {
            cij: new flw(225, 520, 390, 70),
            dhm: 14,
            fontSize: 24,
            phq: 3,
            cxx: 2,
            fms: 6,
            mmg: 2
        },
        win: {
            cij: new flw(45, 458, 710, 25),
            fontSize: 20,
            dhm: 4,
            phq: 3,
            cxx: 2,
            fms: 6,
            mmg: 0
        },
        cdy: {
            cij: new flw(225, 520, 390, 70),
            zwx: 10,
            crc: 2,
            fontSize: 20,
            mmg: 2,
            ggn: 3,
            opw: 3,
            mus: 3,
            fxp: 3
        },
        uul: {
            ela: 0,
            pie: 0,
            wkz: 0,
            crc: 0,
            ete: 0,
            phq: 0,
            fms: 10,
            mmg: 4
        },
        nwk: {
            ela: 0,
            pie: 20,
            wkz: 0,
            crc: 0,
            ete: -30,
            phq: 0,
            fms: 10,
            mmg: 4
        },
        cvf: {
            ela: 0,
            pie: 24,
            wkz: 0,
            phq: 0,
            fms: 10,
            mmg: 6,
            crc: 0,
            ete: -40
        },
        tsy: {
            ela: 24,
            pie: 0,
            wkz: 0,
            phq: 10,
            fms: 0,
            mmg: 4,
            crc: -2,
            ete: 0
        },
        kas: {
            phq: 6,
            wkz: 0,
            dhm: -1,
            fms: 6,
            fontSize: 36,
            mmg: 3
        },
        display: {
            kjb: -18,
            crc: 16,
            ela: 32,
            yjs: 18,
            mmg: 3,
            ggn: 3,
            opw: 3,
            mus: 3,
            fxp: 3
        },
        ymz: {
            kjb: 0,
            crc: -40,
            ela: 36,
            yjs: 0,
            mmg: 3,
            ggn: 10,
            opw: 10,
            mus: 0,
            fxp: 0
        },
        xos: {
            kjb: 0,
            crc: 0,
            ela: 16,
            yjs: 0,
            mmg: 2,
            ggn: 0,
            opw: 0,
            mus: 0,
            fxp: 0
        },
        bhz: new flw(800, 0, 160, 22),
        hzo: new flw(800, 22, 160, 22),
        weq: new flw(5, 520, 180, 70),
        uwd: new flw(655, 520, 140, 70),
        ptk: new flw(660, 400, 130, 120),
        rvw: {
            bao: new flw(805, 210, 150, 150),
            nki: new flw(655, 495, 140, 30),
            ign: new flw(),
            tty: new flw(),
            iyz: new flw(820, 400, 120, 120),
            ekt: new flw(),
            piq: new flw(820, 50, 120, 120)
        },
        fkm: {
            bao: new flw(815, 260, 140, 140),
            nki: new flw(655, 495, 140, 30),
            ign: new flw(),
            tty: new flw(),
            iyz: new flw(865, 50, 80, 80),
            ekt: new flw(840, 140, 110, 110),
            piq: new flw(840, 410, 110, 110)
        },
        oxl: 60
    };
    this.dvq = {
        cij: new flw(40, 90, 720, 360),
        lineWidth: 4,
        hbv: 5,
        mmg: 1,
        dhn: 136,
        zlv: 120,
        fontSize: 40,
        shi: 10,
        ccs: 5,
        fyn: 100,
        rqa: 96,
        w1: 136,
        w2: 126,
        w3: 116,
        w4: 140,
        w5: 320,
        w6: 210,
        h1: 120,
        h2: 110,
        h3: 90,
        h4: 100,
        h5: 88,
        h6: 280
    };
    this.spz = [
        [87, 270, 713, 270],
        [87, 150, 713, 150],
        [87, 390, 713, 390],
        [87, 150, 112, 150, 400, 390, 688, 150, 713, 150],
        [87, 390, 112, 390, 400, 150, 688, 390, 713, 390]
    ]
}
gmz.prototype = new tzv;

function ksx() {
    this.wst = false;
    this.psf = true;
    this.vmf = true;
    this.cod = {
        cij: new flw(160, 0, 800, 600),
        ncp: 0,
        rnr: 0
    };
    this.hii = {
        cij: new flw(0, 0, 1120, 600),
        rnr: 0,
        ncp: 0
    };
    this.hxb = {
        cij: new flw(200, 90, 136, 360),
        ufp: new flw(40, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.zpm = {
        cij: new flw(346, 90, 136, 360),
        ufp: new flw(186, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.eak = {
        cij: new flw(492, 90, 136, 360),
        ufp: new flw(332, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.ogp = {
        cij: new flw(638, 90, 136, 360),
        ufp: new flw(478, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.cxy = {
        cij: new flw(784, 90, 136, 360),
        ufp: new flw(624, 90, 136, 360),
        ofa: 30,
        wiv: 30
    };
    this.ukx = {
        cij: new flw(160, 0, 800, 86),
        fontSize: 50,
        wkz: 0,
        dhm: 6,
        zub: 0,
        srs: 2
    };
    this.xav = {
        cij: new flw(160, 0, 800, 80),
        fontSize: 50,
        wkz: 0,
        dhm: 8,
        zub: 0,
        srs: 2
    };
    this.ozh = {
        cij: new flw(164, 90, 0, 0),
        ign: [25, 65, 165, 265, 305],
        wty: 30,
        ekl: 30
    };
    this.qhr = {
        cij: new flw(926, 90, 0, 0),
        ign: [25, 65, 165, 265, 305],
        wty: 30,
        ekl: 30
    };
    this.hmm = {};
    this.qen = {};
    this.tbm = {
        cij: new flw(0, 0, 960, 600),
        zrh: new flw(0, 0, 160, 600),
        iyz: new flw(20, 400, 120, 120),
        stm: new flw(),
        ubv: new flw(20, 50, 120, 120),
        zpd: new flw(20, 225, 120, 120),
        krb: {
            ela: 0,
            pie: 0,
            wkz: 0,
            crc: 0,
            ete: 0,
            phq: 0,
            fms: 16,
            mmg: 4
        }
    };
    this.ryz = {
        cij: new flw(0, 0, 960, 600),
        zrh: new flw(0, 0, 160, 600),
        fxo: {
            cij: new flw(385, 520, 390, 70),
            fontSize: 20,
            dhm: 14,
            phq: 3,
            cxx: 2,
            fms: 6,
            mmg: 2
        },
        vos: {
            cij: new flw(491, 216, 137, 187),
            lrv: new flw(5, 8, 56, 34),
            igm: new flw(37, 3, 98, 104),
            rqx: new flw(33, 110, 72, 76),
            gdv: new flw(10, 42, 45, 45),
            kgs: new flw(5, 120, 126, 50),
            fontSize: 34,
            iif: 50,
            zub: 3,
            evg: 4
        },
        law: {
            cij: new flw(540, 105, 380, 45),
            ufq: 2
        },
        krb: {
            ela: 24,
            pie: 0,
            wkz: 0,
            crc: 0,
            ete: 0,
            fms: 10,
            phq: 0,
            mmg: 4
        },
        display: {
            kjb: -18,
            crc: 16,
            ela: 32,
            yjs: 18,
            mmg: 3,
            ggn: 3,
            opw: 3,
            mus: 3,
            fxp: 3
        },
        xos: {
            kjb: 0,
            crc: 0,
            ela: 16,
            yjs: 0,
            mmg: 2,
            ggn: 0,
            opw: 0,
            mus: 0,
            fxp: 0
        },
        bhz: new flw(0, 0, 160, 22),
        hzo: new flw(0, 22, 160, 22),
        frt: new flw(20, 325, 120, 120),
        iig: new flw(20, 125, 120, 120),
        kgs: new flw(815, 520, 140, 70),
        bnw: new flw(165, 520, 180, 70),
        jgp: new flw(233, 315, 91, 96),
        cia: new flw(326, 315, 91, 96),
        uzw: new flw(702, 315, 91, 96),
        rkm: new flw(795, 315, 91, 96),
        ghe: new flw(233, 218, 184, 92),
        pzz: new flw(702, 218, 184, 92),
        xei: new flw(225, 170, 200, 50),
        tlb: new flw(669, 170, 250, 50),
        bje: new flw(694, 410, 200, 50)
    };
    this.cmi = {
        cij: new flw(0, 0, 960, 600),
        ftu: new flw(160, 455, 800, 145),
        wuf: new flw(0, 0, 160, 600),
        fxo: {
            cij: new flw(385, 520, 390, 70),
            dhm: 14,
            fontSize: 24,
            phq: 3,
            cxx: 2,
            fms: 6,
            mmg: 2
        },
        win: {
            cij: new flw(205, 458, 710, 25),
            fontSize: 20,
            dhm: 4,
            phq: 3,
            cxx: 2,
            fms: 6,
            mmg: 0
        },
        cdy: {
            cij: new flw(385, 520, 390, 70),
            zwx: 10,
            crc: 2,
            fontSize: 20,
            mmg: 2,
            ggn: 3,
            opw: 3,
            mus: 3,
            fxp: 3
        },
        uul: {
            ela: 0,
            pie: 0,
            wkz: 0,
            crc: 0,
            ete: 0,
            phq: 0,
            fms: 10,
            mmg: 4
        },
        nwk: {
            ela: 0,
            pie: 20,
            wkz: 0,
            crc: 0,
            ete: -30,
            phq: 0,
            fms: 10,
            mmg: 4
        },
        cvf: {
            ela: 0,
            pie: 24,
            wkz: 0,
            phq: 0,
            fms: 10,
            mmg: 6,
            crc: 0,
            ete: -40
        },
        tsy: {
            ela: 24,
            pie: 0,
            wkz: 0,
            phq: 10,
            fms: 0,
            mmg: 4,
            crc: -2,
            ete: 0
        },
        kas: {
            phq: 6,
            wkz: 0,
            dhm: -1,
            fms: 6,
            fontSize: 36,
            mmg: 3
        },
        display: {
            kjb: -18,
            crc: 16,
            ela: 32,
            yjs: 18,
            mmg: 3,
            ggn: 3,
            opw: 3,
            mus: 3,
            fxp: 3
        },
        ymz: {
            kjb: 0,
            crc: -40,
            ela: 36,
            yjs: 0,
            mmg: 3,
            ggn: 10,
            opw: 10,
            mus: 0,
            fxp: 0
        },
        xos: {
            kjb: 0,
            crc: 0,
            ela: 16,
            yjs: 0,
            mmg: 2,
            ggn: 0,
            opw: 0,
            mus: 0,
            fxp: 0
        },
        bhz: new flw(0, 0, 160, 22),
        hzo: new flw(0, 22, 160, 22),
        weq: new flw(165, 520, 180, 70),
        uwd: new flw(815, 520, 140, 70),
        ptk: new flw(820, 400, 130, 120),
        rvw: {
            bao: new flw(5, 210, 150, 150),
            nki: new flw(815, 495, 140, 30),
            ign: new flw(),
            tty: new flw(),
            iyz: new flw(20, 400, 120, 120),
            ekt: new flw(),
            piq: new flw(20, 50, 120, 120)
        },
        fkm: {
            bao: new flw(5, 260, 140, 140),
            nki: new flw(815, 495, 140, 30),
            ign: new flw(),
            tty: new flw(),
            iyz: new flw(15, 50, 80, 80),
            ekt: new flw(10, 140, 110, 110),
            piq: new flw(10, 410, 110, 110)
        },
        oxl: 60
    };
    this.dvq = {
        cij: new flw(200, 90, 720, 360),
        lineWidth: 4,
        hbv: 5,
        mmg: 1,
        dhn: 136,
        zlv: 120,
        fontSize: 40,
        shi: 10,
        ccs: 5,
        fyn: 100,
        rqa: 96,
        w1: 136,
        w2: 126,
        w3: 116,
        w4: 140,
        w5: 320,
        w6: 210,
        h1: 120,
        h2: 110,
        h3: 90,
        h4: 100,
        h5: 88,
        h6: 280
    };
    this.spz = [
        [247, 270, 873, 270],
        [247, 150, 873, 150],
        [247, 390, 873, 390],
        [247, 150, 272, 150, 560, 390, 848, 150, 873, 150],
        [247, 390, 272, 390, 560, 150, 848, 390, 873, 390]
    ]
}
ksx.prototype = new jgh;

function ymg() {
    this.ukx.cij = new flw(0, 20, 800, 80);
    this.ukx.fontSize = 60;
    this.ukx.dhm = 4;
    this.ozh = {
        cij: new flw(2, 105, 0, 0),
        ign: [4, 40, 76, 112, 148, 184, 220, 256, 292, 328],
        wty: 30,
        ekl: 30
    };
    this.qhr = {
        cij: new flw(768, 105, 0, 0),
        ign: [4, 40, 76, 112, 148, 184, 220, 256, 292, 328],
        wty: 30,
        ekl: 30
    };
    this.spz = [
        [87, 290, 713, 290],
        [87, 170, 713, 170],
        [87, 410, 713, 410],
        [87, 170, 112, 170, 400, 410, 688, 170, 713, 170],
        [87, 410, 112, 410, 400, 170, 688, 410, 713, 410],
        [87, 170, 256, 170, 400, 290, 544, 170, 713, 170],
        [87, 410, 256, 410, 400, 290, 544, 410, 713, 410],
        [87, 290, 112, 290, 256, 170, 544, 170, 688, 290, 713, 290],
        [87, 290, 112, 290, 256, 410, 544, 410, 688, 290, 713, 290],
        [87, 170, 112, 170, 256, 290, 544, 290, 688, 170, 713, 170]
    ];
    this.tbm.ijo = {
        cij: new flw(0, 0, 800, 600),
        fontSize: 16,
        ssl: 30,
        vhl: 22,
        yjs: 40,
        djw: 12,
        lineWidth: 1,
        gfv: new flw(20, 510, 760, 30),
        iht: new flw(10, 0, 780, 70),
        kgs: [new flw(360, 162, 140, 108), new flw(100, 172, 120, 82), new flw(625, 172, 120, 82), new flw(175, 398, 120, 74), new flw(545, 392, 120, 96)]
    };
    this.tbm.win = {
        cij: new flw(0, 0, 800, 600),
        fontSize: 20,
        yjs: 40,
        lineWidth: 1,
        iht: new flw(),
        lrv: [new flw(10, 445, 780, 40)]
    }
}
ymg.prototype = new whj;

function poc() {
    this.dux = true
}
poc.prototype = new ymg;

function edc() {
    this.ukx.cij = new flw(0, 550, 800, 80);
    this.ukx.fontSize = 60;
    this.ukx.dhm = 4;
    this.ozh = {
        cij: new flw(2, 635, 0, 0),
        ign: [4, 40, 76, 112, 148, 184, 220, 256, 292, 328],
        wty: 30,
        ekl: 30
    };
    this.qhr = {
        cij: new flw(768, 635, 0, 0),
        ign: [4, 40, 76, 112, 148, 184, 220, 256, 292, 328],
        wty: 30,
        ekl: 30
    };
    this.spz = [
        [87, 820, 713, 820],
        [87, 700, 713, 700],
        [87, 940, 713, 940],
        [87, 700, 112, 700, 400, 940, 688, 700, 713, 700],
        [87, 940, 112, 940, 400, 700, 688, 940, 713, 940],
        [87, 700, 256, 700, 400, 820, 544, 700, 713, 700],
        [87, 940, 256, 940, 400, 820, 544, 940, 713, 940],
        [87, 820, 112, 820, 256, 700, 544, 700, 688, 820, 713, 820],
        [87, 820, 112, 820, 256, 940, 544, 940, 688, 820, 713, 820],
        [87, 700, 112, 700, 256, 820, 544, 820, 688, 700, 713, 700]
    ];
    this.tbm.ijo = {
        cij: new flw(0, 0, 800, 615),
        fontSize: 16,
        ssl: 30,
        vhl: 22,
        yjs: 40,
        djw: 12,
        lineWidth: 1,
        gfv: new flw(20, 510, 760, 30),
        iht: new flw(10, 0, 780, 70),
        kgs: [new flw(360, 162, 140, 108), new flw(100, 172, 120, 82), new flw(625, 172, 120, 82), new flw(175, 398, 120, 74), new flw(545, 392, 120, 96)]
    };
    this.tbm.win = {
        cij: new flw(0, 0, 800, 615),
        fontSize: 20,
        yjs: 40,
        lineWidth: 1,
        iht: new flw(),
        lrv: [new flw(10, 445, 780, 40)]
    };
    this.top.ijo = {
        cij: new flw(0, 0, 800, 520),
        fontSize: 14,
        ssl: 30,
        vhl: 20,
        yjs: 30,
        djw: 12,
        lineWidth: 1,
        gfv: new flw(20, 480, 760, 30),
        iht: new flw(),
        lrv: [],
        kgs: [new flw(360, 142, 140, 86), new flw(100, 150, 120, 70), new flw(625, 150, 120, 70), new flw(175, 346, 120, 64), new flw(545, 340, 120, 80)]
    }
}
edc.prototype = new mcu;

function tsq() {
    this.ukx.cij = new flw(5, 20, 800, 80);
    this.ukx.fontSize = 60;
    this.ukx.dhm = 4;
    this.ozh = {
        cij: new flw(7, 105, 0, 0),
        ign: [4, 40, 76, 112, 148, 184, 220, 256, 292, 328],
        wty: 30,
        ekl: 30
    };
    this.qhr = {
        cij: new flw(773, 105, 0, 0),
        ign: [4, 40, 76, 112, 148, 184, 220, 256, 292, 328],
        wty: 30,
        ekl: 30
    };
    this.spz = [
        [92, 290, 718, 290],
        [92, 170, 718, 170],
        [92, 410, 718, 410],
        [92, 170, 117, 170, 405, 410, 693, 170, 718, 170],
        [92, 410, 117, 410, 405, 170, 693, 410, 718, 410],
        [92, 170, 261, 170, 405, 290, 549, 170, 718, 170],
        [92, 410, 261, 410, 405, 290, 549, 410, 718, 410],
        [92, 290, 117, 290, 261, 170, 549, 170, 693, 290, 718, 290],
        [92, 290, 117, 290, 261, 410, 549, 410, 693, 290, 718, 290],
        [92, 170, 117, 170, 261, 290, 549, 290, 693, 170, 718, 170]
    ];
    this.tbm.ijo = {
        cij: new flw(0, 0, 800, 600),
        fontSize: 16,
        ssl: 30,
        vhl: 22,
        yjs: 40,
        djw: 12,
        lineWidth: 1,
        gfv: new flw(20, 510, 760, 30),
        iht: new flw(10, 0, 780, 70),
        kgs: [new flw(360, 162, 140, 108), new flw(100, 172, 120, 82), new flw(625, 172, 120, 82), new flw(175, 398, 120, 74), new flw(545, 392, 120, 96)]
    };
    this.tbm.win = {
        cij: new flw(0, 0, 800, 600),
        fontSize: 20,
        yjs: 40,
        lineWidth: 1,
        iht: new flw(),
        lrv: [new flw(10, 445, 780, 40)]
    }
}
tsq.prototype = new caq;

function gfi() {
    this.dux = true
}
gfi.prototype = new tsq;

function eyx() {
    this.ukx.cij = new flw(0, 0, 800, 80);
    this.ukx.fontSize = 60;
    this.ukx.dhm = 5;
    this.ozh = {
        cij: new flw(2, 85, 0, 0),
        ign: [4, 40, 76, 112, 148, 184, 220, 256, 292, 328],
        wty: 30,
        ekl: 30
    };
    this.qhr = {
        cij: new flw(768, 85, 0, 0),
        ign: [4, 40, 76, 112, 148, 184, 220, 256, 292, 328],
        wty: 30,
        ekl: 30
    };
    this.spz = [
        [87, 270, 713, 270],
        [87, 150, 713, 150],
        [87, 390, 713, 390],
        [87, 150, 112, 150, 400, 390, 688, 150, 713, 150],
        [87, 390, 112, 390, 400, 150, 688, 390, 713, 390],
        [87, 150, 256, 150, 400, 270, 544, 150, 713, 150],
        [87, 390, 256, 390, 400, 270, 544, 390, 713, 390],
        [87, 270, 112, 270, 256, 150, 544, 150, 688, 270, 713, 270],
        [87, 270, 112, 270, 256, 390, 544, 390, 688, 270, 713, 270],
        [87, 150, 112, 150, 256, 270, 544, 270, 688, 150, 713, 150]
    ];
    this.tbm.ijo = {
        cij: new flw(0, 0, 800, 600),
        fontSize: 16,
        ssl: 30,
        vhl: 22,
        yjs: 40,
        djw: 14,
        lineWidth: 1,
        gfv: new flw(0, 540, 800, 40),
        iht: new flw(10, 0, 780, 70),
        kgs: [new flw(360, 162, 140, 108), new flw(100, 172, 120, 82), new flw(625, 172, 120, 82), new flw(175, 398, 120, 74), new flw(545, 392, 120, 96)]
    };
    this.tbm.win = {
        cij: new flw(0, 0, 800, 600),
        fontSize: 20,
        yjs: 40,
        lineWidth: 1,
        iht: new flw(),
        lrv: [new flw(10, 445, 780, 40)]
    }
}
eyx.prototype = new gmz;

function iep() {
    this.ukx.cij = new flw(160, 0, 800, 80);
    this.ukx.fontSize = 60;
    this.ukx.dhm = 5;
    this.ozh = {
        cij: new flw(162, 85, 0, 0),
        ign: [4, 40, 76, 112, 148, 184, 220, 256, 292, 328],
        wty: 30,
        ekl: 30
    };
    this.qhr = {
        cij: new flw(928, 85, 0, 0),
        ign: [4, 40, 76, 112, 148, 184, 220, 256, 292, 328],
        wty: 30,
        ekl: 30
    };
    this.spz = [
        [247, 270, 873, 270],
        [247, 150, 873, 150],
        [247, 390, 873, 390],
        [247, 150, 272, 150, 560, 390, 848, 150, 873, 150],
        [247, 390, 272, 390, 560, 150, 848, 390, 873, 390],
        [247, 150, 416, 150, 560, 270, 704, 150, 873, 150],
        [247, 390, 416, 390, 560, 270, 704, 390, 873, 390],
        [247, 270, 272, 270, 416, 150, 704, 150, 848, 270, 873, 270],
        [247, 270, 272, 270, 416, 390, 704, 390, 848, 270, 873, 270],
        [247, 150, 272, 150, 416, 270, 704, 270, 848, 150, 873, 150]
    ];
    this.tbm.ijo = {
        cij: new flw(160, 0, 800, 600),
        fontSize: 16,
        ssl: 30,
        vhl: 22,
        yjs: 40,
        djw: 14,
        lineWidth: 1,
        gfv: new flw(0, 540, 800, 40),
        iht: new flw(10, 0, 780, 70),
        kgs: [new flw(360, 162, 140, 108), new flw(100, 172, 120, 82), new flw(625, 172, 120, 82), new flw(175, 398, 120, 74), new flw(545, 392, 120, 96)]
    };
    this.tbm.win = {
        cij: new flw(160, 0, 800, 600),
        fontSize: 20,
        yjs: 40,
        lineWidth: 1,
        iht: new flw(),
        lrv: [new flw(10, 445, 780, 40)]
    }
}
iep.prototype = new ksx;
var neg = {
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
    wpv: {
        ygx: 0,
        frb: 1,
        lqg: 2,
        rsb: 3,
        csm: 4,
        obv: 5,
        qge: 10,
        rsy: 11,
        hih: 12,
        ftv: 13,
        zzm: 14,
        mfx: 15,
        vxr: 16
    },
    os: {
        xnn: 0,
        fhe: 1,
        uoa: 2,
        gjw: 3,
        fis: 4
    },
    don: {
        vcm: 1,
        asd: 3,
        xnf: 4,
        cgk: 5,
        icc: 7,
        ovw: 8,
        etq: 11,
        urp: 13,
        xya: 14,
        pud: 6,
        wso: 9,
        ukm: 10
    },
    gif: {
        qep: 1,
        vko: 2,
        tut: 4,
        ncr: 8,
        msw: 16,
        ocj: 32
    },
    ieh: {
        hav: 1,
        aol: 2,
        swe: 3,
        bel: 4,
        lzi: 5,
        lqw: 6,
        gsp: 7,
        ilr: 94,
        zsh: 95,
        zdt: 96,
        kqw: 97,
        zgg: 98,
        xmx: 99,
        roulette: {
            eqq: 2,
            rmb: 9,
            gyz: 10
        }
    },
    ui: {
        iab: "minimal",
        omt: "modern",
        xnf: "classic"
    },
    gzo: {
        udx: "auto",
        oen: "left",
        dbj: "right"
    },
    jgt: {
        fst: 0,
        zpi: 1,
        gxf: 2,
        mvj: 3,
        cpb: 4
    },
    opx: {
        vah: {
            bjk: "ji",
            bct: "jv",
            igo: "jh"
        }
    },
    jgz: {
        lfv: {
            ysg: 1,
            plz: 2
        },
        lie: {
            ans: 1,
            gas: 2,
            swv: 3
        }
    }
};
neg.gpk = (function () {
    var g = ["moz", "webkit", "ms", "o"],
        f = 0,
        d = 0;
    var b = document.createElement("canvas");
    if (!(b.getContext && b.getContext("2d"))) {
        f += neg.gif.qep
    }
    if (!(window.WebSocket || window.MozWebSocket)) {
        f += neg.gif.vko
    }
    try {
        if (!(window.localStorage && window.sessionStorage)) {
            f += neg.gif.tut
        } else {
            sessionStorage.dummy = true;
            sessionStorage.removeItem("dummy")
        }
    } catch (c) {
        f += neg.gif.tut
    }
    if (!(b.style.MozTransform != undefined || b.style.WebkitTransform != undefined || b.style.OTransform != undefined || b.style.msTransform != undefined)) {
        f += neg.gif.ncr
    }
    try {
        if (window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
            window.AudioContext = webkitAudioContext;
            if (!AudioContext.prototype.hasOwnProperty("createGain")) {
                AudioContext.prototype.createGain = AudioContext.prototype.createGainNode
            }
            AudioContext.prototype.fsw = AudioContext.prototype.createBufferSource;
            AudioContext.prototype.createBufferSource = function () {
                var e = this.fsw();
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
            window.xzm = window.requestAnimationFrame;
            window.irf = window.cancelAnimationFrame || window.cancelRequestAnimationFrame
        }
        for (var a = 0; a < g.length && !window.xzm; ++a) {
            window.xzm = window[g[a] + "RequestAnimationFrame"];
            window.irf = window[g[a] + "CancelAnimationFrame"] || window[g[a] + "CancelRequestAnimationFrame"]
        }
        if (!window.xzm || !window.irf) {
            window.xzm = function (m, j) {
                var e = new Date().getTime();
                var k = Math.max(0, 16 - (e - d));
                var l = window.setTimeout(function () {
                    m(e + k)
                }, k);
                d = e + k;
                return l
            }
        }
        if (!window.irf) {
            window.irf = function (e) {
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
        console.error(c.ieh)
    }
    return f
})();

function byh() {
    var a = {};
    this.lrg = 1;
    this.exj = 1;
    this.lfu = 0.6;
    this.prm = 0.4;
    this.dcf = function () {};
    this.lrk = function (b, c) {
        a[b] = c
    };
    this.xfj = function (b) {
        if (a[b]) {
            return a[b]
        } else {
            return this.lrg
        }
    }
}

function xml() {
    this.audio = {
        xfh: 65,
        acg: -1,
        value: "A",
        fmy: null
    };
    this.asb = {
        xfh: 70,
        acg: 122,
        value: "F",
        fmy: "F11"
    };
    this.law = {
        xfh: 72,
        acg: -1,
        value: "H",
        fmy: null
    };
    this.uhj = {
        xfh: 83,
        acg: -1,
        value: "S",
        fmy: null
    };
    this.kdo = {
        xfh: 68,
        acg: -1,
        value: "D",
        fmy: null
    };
    this.ok = {
        xfh: 13,
        acg: -1,
        value: "OK",
        fmy: null
    };
    this.nbf = [this.audio, this.asb, this.law, this.uhj, this.kdo, this.ok]
}

function bxg() {
    var q = this;
    this.cyp = false;
    this.ylu = null;
    this.kal = false;
    this.cvi = false;
    var f = {};
    var j = {};
    var d = [];
    var a = [];
    var l = [];
    var k = 30;
    var g = 0;
    var b = 0;
    var e = 0;
    var n = [];
    var m = null;
    var c = false;
    var o = false;
    var p = false;
    this.dcf = function () {
        this.xtw();
        this.ugx();
        this.kal = false;
        this.cvi = false
    };
    this.xtw = function () {
        try {
            if (webAudioEngine == null) {
                webAudioEngine = new AudioContext()
            }
            this.ylu = webAudioEngine.createGain();
            this.ylu.connect(webAudioEngine.destination);
            this.cyp = true
        } catch (r) {
            this.cyp = false
        }
    };
    this.ugx = function () {
        n = neg.tlv.xgv()
    };
    this.xrc = function (r) {
        m = r
    };
    this.wqz = function (r) {
        c = r
    };
    this.nzu = function (r) {
        o = r
    };
    this.ivq = function (v, u, r, s) {
        var t = new wrn(v);
        t.dcf(this.cyp, u, r, m.xfj(v));
        j[v] = t;
        l.push(t);
        d.push({
            kda: t,
            ktv: s,
            knv: q.lmn,
            xzv: n
        })
    };
    this.zqx = function (t, s) {
        var r = new Image();
        f[t] = r;
        d.push({
            kda: r,
            ktv: s,
            knv: null
        })
    };
    this.agn = function (s, r) {
        d.unshift({
            kda: null,
            ktv: s,
            knv: q.qxe,
            cba: r
        })
    };
    this.khi = function () {
        p = true;
        g = d.length;
        b = 0;
        while (d.length > 0) {
            q.pos(d.shift())
        }
    };
    this.start = function () {
        if (!q.kal) {
            return
        }
        q.kal = false;
        p = false;
        g = d.length;
        b = 0;
        k = 1;
        for (var s = 0; s < k && d.length > 0; s++) {
            a.push(d.shift())
        }
        for (var r = 0; r < a.length; r++) {
            q.pos(a.shift())
        }
    };
    this.kvs = function () {
        b++;
        if (q.tyq()) {
            q.kal = true;
            neg.tlo.bpe()
        }
    };
    this.zed = function () {
        q.jes()
    };
    this.lme = function () {
        q.cvi = true;
        q.jes()
    };
    this.jes = function () {
        b++;
        q.xwx();
        if (q.tyq()) {
            q.nuh()
        } else {
            q.vvv()
        }
    };
    this.xwx = function () {
        var r = neg.tlo.oxt.dgc("loading");
        e = Math.round(100 * b / g);
        if (e < 100) {
            if (r) {
                r.qay(e)
            }
        }
    };
    this.nuh = function () {
        var t = neg.tlo.oxt.dgc("loading");
        if (q.cvi) {
            neg.tlo.zrb(neg.tlo.language.dyc);
            var s = confirm(neg.tlo.language.aed);
            if (s == true) {
                neg.tlo.kvi = false;
                q.zig();
                neg.tlo.tqw()
            } else {
                neg.tlo.pld({
                    type: "gameDataLoaded",
                    sender: neg.tlo.mvb,
                    lang: sessionStorage.sessionValue1.toUpperCase(),
                    data: {
                        success: false
                    }
                });
                setTimeout(neg.tlo.cst, 1000)
            }
        } else {
            if (!neg.tlo.dpc) {
                e = 100;
                if (t) {
                    t.qay(e)
                }
                if (c === true) {
                    if (o === true) {
                        t.kej((neg.tlo.rok() === true) ? neg.tlo.language.lhw : neg.tlo.language.cfg, neg.tlo.uhx.xzk("device_info"))
                    } else {
                        t.kej(neg.tlo.language.uqu, null)
                    }
                } else {
                    setTimeout(neg.tlo.tqw, 200)
                }
            }
        }
    };
    this.bok = function () {
        return e
    };
    this.vvv = function () {
        if (d.length > 0) {
            a.push(d.shift());
            if (k === 1 && (a[0].kda instanceof Image || a[0].kda instanceof wrn)) {
                k = 30;
                for (var r = 0; r < k && d.length > 0; r++) {
                    a.push(d.shift())
                }
            }
        } else {}
        if (a.length > 0) {
            q.pos(a.shift())
        }
    };
    this.tyq = function () {
        return (g > 0 && b == g)
    };
    this.pos = function (r) {
        if (r.kda instanceof Image) {
            if (p === true) {
                this.nmq(r.kda, r.ktv)
            } else {
                this.wpt(r.kda, r.ktv)
            }
        } else {
            if (r.kda instanceof wrn) {
                this.iwg(r.kda, r.ktv, r.knv, r.xzv)
            } else {
                this.bex(r.ktv, r.cba, r.knv)
            }
        }
    };
    this.nmq = function (s, r) {
        s.onload = function () {
            neg.tlo.uhx.kvs()
        };
        s.onerror = function () {
            console.error("can not load image " + r)
        };
        s.src = r + "?v=" + neg.tlo.qll
    };
    this.wpt = function (s, r) {
        s.onload = function () {
            neg.tlo.uhx.zed()
        };
        s.onerror = function () {
            console.error("can not load image " + r);
            neg.tlo.zrb(neg.tlo.language.fnb);
            setTimeout(neg.tlo.cst, 3000)
        };
        s.src = r + "?v=" + neg.tlo.qll
    };
    this.iwg = function (s, t, u, r) {
        s.load(t, u, r)
    };
    this.bex = function (u, r, v) {
        var s = new XMLHttpRequest();
        s.open("GET", u + r, true);
        s.responseType = "text";
        s.onreadystatechange = function () {
            if (s.readyState == 4 && s.status == 200) {
                var w = JSON.parse(s.responseText);
                v(u, w)
            }
        };
        s.onerror = function () {
            console.error("can not load " + u + r);
            neg.tlo.zrb(neg.tlo.language.fnb);
            setTimeout(neg.tlo.cst, 3000)
        };
        try {
            s.send()
        } catch (t) {
            console.error("can not load from " + u + r);
            neg.tlo.zrb(neg.tlo.language.fnb);
            setTimeout(neg.tlo.cst, 3000)
        }
    };
    this.lmn = function (s, r) {
        j[s].nas = r
    };
    this.qxe = function (t, s) {
        var r = new Image();
        r.onload = function () {
            q.nok(r, s.data)
        };
        r.onerror = function () {
            console.error("can not load image " + t + s.src);
            neg.tlo.zrb(neg.tlo.language.fnb);
            setTimeout(neg.tlo.cst, 3000)
        };
        r.src = t + s.src + "?v=" + neg.tlo.qll
    };
    this.nok = function (t, w) {
        var u = null,
            s = null;
        for (var v = 0, r = w.length; v < r; v++) {
            u = document.createElement("canvas");
            u.width = w[v].rect.w;
            u.height = w[v].rect.h;
            s = u.getContext("2d");
            s.drawImage(t, w[v].rect.x, w[v].rect.y, w[v].rect.w, w[v].rect.h, 0, 0, w[v].rect.w, w[v].rect.h);
            q.uuq(w[v].id, u)
        }
        neg.tlo.uhx.zed()
    };
    this.szx = function (r) {
        if (j && j[r]) {
            return j[r]
        } else {}
        return null
    };
    this.uuq = function (s, r) {
        if (r && !f[s]) {
            f[s] = r
        } else {}
        return null
    };
    this.xzk = function (r) {
        if (f[r]) {
            return f[r]
        } else {}
        return null
    };
    this.pte = function (r) {
        if (!j) {
            return 0
        }
        var s = 0,
            t = true;
        while (t) {
            if (j[r + s]) {
                s++
            } else {
                t = false
            }
        }
        return s
    };
    this.nst = function (r) {
        if (!f) {
            return 0
        }
        var s = 0,
            t = true;
        while (t) {
            if (f[r + s]) {
                s++
            } else {
                t = false
            }
        }
        return s
    };
    this.onc = function (s, r) {
        if (j && j[s]) {
            j[s].play(r)
        } else {}
    };
    this.yiv = function (r) {
        if (j && j[r]) {
            j[r].stop()
        } else {}
    };
    this.fqy = function (s, r) {
        if (j && j[s]) {
            j[s].sis(r)
        } else {}
    };
    this.scw = function (u, s, t, r) {
        r = (r != null && r === true);
        if (j && j[u]) {
            j[u].fea(m.xfj(u) * s, t, r)
        }
    };
    this.zll = function (r) {
        if (j && j[r]) {
            return j[r].lxt()
        }
        return 0
    };
    this.afb = function (r) {
        if (this.cyp) {
            this.ylu.gain.setValueAtTime(r, webAudioEngine.currentTime)
        }
    };
    this.wtc = function (s) {
        if (this.cyp) {
            this.ylu.gain.setValueAtTime((s) ? 0 : 1, webAudioEngine.currentTime)
        } else {
            if (l) {
                for (var r = 0; r < l.length; r++) {
                    l[r].sis(s)
                }
            }
        }
    };
    this.zig = function () {
        if (l) {
            for (var r = 0; r < l.length; r++) {
                l[r].clear()
            }
        }
        l = null;
        j = null
    }
}

function fxb() {
    this.xfk = {};
    this.aao = {};
    this.tqf = [];
    this.dcf = function () {
        this.xfk = {};
        this.aao = {};
        this.tqf = []
    };
    this.erq = function (b) {
        this.xfk[b] = b
    };
    this.pbt = function (f, e, d) {
        this.aao[f] = e;
        this.aao[f].qgi = [];
        if (d && this.xfk) {
            for (var c = 0, b = d.length; c < b; c++) {
                if (this.xfk[d[c]]) {
                    this.aao[f].qgi.push(d[c])
                } else {}
            }
        }
        this.tqf.push(this.aao[f])
    };
    this.vcc = function () {
        var c = [];
        for (var d = 0, b = this.tqf.length; d < b; d++) {
            if (this.tqf[d] != null) {
                c.push(this.tqf[d])
            }
        }
        return c
    };
    this.dgc = function (b) {
        if (this.aao && this.aao[b]) {
            return this.aao[b]
        }
        return null
    };
    this.ydk = function (g) {
        if (this.xfk && this.xfk[g]) {
            var d = [];
            for (var f = 0, b = this.tqf.length; f < b; f++) {
                for (var e = 0, c = this.tqf[f].qgi.length; e < c; e++) {
                    if (this.tqf[f].qgi[e] == g) {
                        d.push(this.tqf[f])
                    }
                }
            }
            return d
        }
        return []
    };
    this.jlm = function () {
        return this.xfk
    };
    this.kqb = function (e) {
        var d = -1;
        if (this.aao && this.aao[e]) {
            for (var c = 0, b = this.tqf.length; c < b; c++) {
                if (this.tqf[c] == this.aao[e]) {
                    d = c;
                    this.aao[e] = null
                }
            }
        }
        if (d >= 0) {
            this.tqf.splice(d, 1)
        }
    };
    this.hak = function (f) {
        if (this.xfk && this.xfk[f]) {
            this.xfk[f] = null;
            for (var e = 0, b = this.tqf.length; e < b; e++) {
                for (var d = 0, c = this.tqf[e].qgi.length; d < c; d++) {
                    if (this.tqf[e].qgi[d] == f) {
                        this.tqf[e].qgi.splice(d, 1)
                    }
                }
            }
        }
    };
    this.evt = function (e, d, c, b) {
        return a(this.dgc(e), d, c, b)
    };
    this.lhq = function (f, d, c) {
        for (var e = 0, b = this.tqf.length; e < b; e++) {
            a(this.tqf[e], f, d, c)
        }
    };
    this.uqk = function (k, l, f, e) {
        if (this.xfk && this.xfk[k]) {
            for (var g = 0, b = this.tqf.length; g < b; g++) {
                for (var d = 0, c = this.tqf[g].qgi.length; d < c; d++) {
                    if (this.tqf[g].qgi[d] == k) {
                        a(this.tqf[g], l, f, e)
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

function wrn(b) {
    var a = this;
    this.wns = null;
    this.loop = false;
    this.muted = false;
    this.volume = 1;
    this.id = b;
    this.oez = false;
    this.nas = null;
    this.ohd = null;
    this.cqk = 0;
    this.eku = 0;
    this.lma = 0;
    this.qhg = 0;
    this.jit = 30000;
    this.xhq = "";
    this.qko = "";
    this.iwu = "";
    this.vly = null;
    this.ilz = 1;
    this.swc = 0;
    this.jxq = -1;
    this.dlm = 0;
    this.ejx = 0;
    this.wwk = false;
    this.dcf = function (c, f, d, e) {
        this.oez = c;
        if (e) {
            this.ilz = e;
            this.volume = e
        }
        if (f) {
            this.wns = f
        }
        if (d) {
            this.loop = d
        }
    };
    this.play = function (c) {
        if (typeof c == "undefined") {
            c = 0
        }
        if (this.oez) {
            clearTimeout(this.jxq);
            if (this.nas) {
                this.volume = (this.muted === true) ? 0 : neg.epl.value40 * this.ilz;
                this.wwk = false;
                this.ohd = webAudioEngine.createBufferSource();
                this.ohd.buffer = this.nas;
                this.ohd.loop = this.loop;
                this.cqk = webAudioEngine.createGain();
                this.cqk.gain.setValueAtTime(this.volume, webAudioEngine.currentTime);
                this.ohd.connect(this.cqk);
                this.cqk.connect(neg.tlo.uhx.ylu);
                this.ohd.start(0, c);
                this.swc = webAudioEngine.currentTime;
                if (this.wns) {
                    this.eku = setTimeout(a.wns, a.nas.duration * 1000)
                }
            }
        } else {
            if (this.ohd) {
                if (this.loop) {
                    if (neg.tlv.egn != neg.wpv.csm && neg.tlv.egn != neg.wpv.zzm) {
                        this.lma = setInterval(a.rpl, a.ohd.duration * 1000)
                    }
                }
                this.ohd.currentTime = 0;
                this.ohd.play()
            }
        }
    };
    this.rpl = function () {
        if (!a.ohd.paused || (neg.tlv.egn != neg.wpv.lqg && neg.tlv.egn != neg.wpv.hih)) {
            a.ohd.currentTime = 0
        }
    };
    this.stop = function () {
        if (a) {
            if (a.oez) {
                a.swc = 0;
                if (a.ohd) {
                    a.ohd.stop(0);
                    a.ohd = null
                }
                clearTimeout(a.eku);
                if (a.jxq >= 0) {
                    clearTimeout(a.jxq);
                    a.jxq = -1
                }
            } else {
                if (a.ohd) {
                    a.ohd.currentTime = 0;
                    a.ohd.pause();
                    clearInterval(a.lma);
                    if (a.jxq >= 0) {
                        clearTimeout(a.jxq);
                        a.jxq = -1
                    }
                }
            }
        }
    };
    this.load = function (e, c, d) {
        this.xhq = d[0];
        if (d.length >= 2) {
            this.qko = d[1];
            this.iwu = e;
            this.vly = c
        }
        e += this.xhq + "?v=" + neg.tlo.qll;
        if (this.oez) {
            this.gct(e, c)
        } else {
            this.oap(e)
        }
    };
    this.vue = function () {
        if (this.oez) {
            this.gct(this.iwu + this.qko + "?v=" + neg.tlo.qll, this.vly)
        }
    };
    this.oap = function (c) {
        this.ohd = new Audio();
        this.qhg = setTimeout(function () {
            console.error("can not load audio " + c);
            neg.tlo.uhx.lme()
        }, this.jit);
        this.ohd.addEventListener("canplaythrough", function () {
            this.removeEventListener("canplaythrough", arguments.callee, false);
            clearTimeout(a.qhg);
            neg.tlo.uhx.zed();
            a.fyu()
        }, false);
        this.ohd.addEventListener("error", function () {
            clearTimeout(a.qhg);
            console.error("can not load audio " + c);
            neg.tlo.uhx.lme()
        }, false);
        this.ohd.volume = neg.epl.value40 * this.volume;
        this.ohd.src = c;
        this.ohd.load()
    };
    this.gct = function (f, g) {
        var c = new XMLHttpRequest();
        c.open("GET", f, true);
        c.responseType = "arraybuffer";
        c.onload = function () {
            webAudioEngine.decodeAudioData(c.response, function (e) {
                if (g) {
                    if (a.id) {
                        g(a.id, e)
                    } else {
                        g(e)
                    }
                }
                neg.tlo.uhx.zed()
            }, function () {
                a.vps("can not decode audio ", f)
            })
        };
        c.onerror = function () {
            a.vps("can not load audio ", f)
        };
        try {
            c.send()
        } catch (d) {
            a.vps("can not load audio from ", f)
        }
    };
    this.vps = function (d, c) {
        console.error(d + c);
        if (a.qko != "" && c.indexOf(a.qko) < 0) {
            a.vue()
        } else {
            neg.tlo.uhx.lme()
        }
    };
    this.dsn = function (c) {
        this.wns = c;
        this.fyu()
    };
    this.fyu = function () {
        if (!this.oez) {
            if (this.wns) {
                if (this.ohd) {
                    this.ohd.addEventListener("ended", function () {
                        a.wns()
                    }, false)
                }
            }
            if (neg.tlv.egn == neg.wpv.csm || neg.tlv.egn == neg.wpv.zzm) {
                if (this.loop) {
                    if (this.ohd) {
                        this.ohd.addEventListener("ended", function () {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.ptv = function () {
        if (!this.uej) {
            if (this.wns) {
                if (this.ohd) {
                    this.ohd.removeEventListener("ended", function () {
                        a.wns()
                    }, false)
                }
            }
            if (neg.tlv.egn == neg.wpv.csm || neg.tlv.egn == neg.wpv.zzm) {
                if (this.loop) {
                    if (this.ohd) {
                        this.ohd.removeEventListener("ended", function () {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.fea = function (d, e, c) {
        if (this.oez === true && this.cqk) {
            this.volume = (this.muted === true) ? 0 : neg.epl.value40 * d * this.ilz;
            if (e > 0) {
                this.cqk.gain.linearRampToValueAtTime(this.volume, webAudioEngine.currentTime + (e / 1000))
            } else {
                this.cqk.gain.setValueAtTime(this.volume, webAudioEngine.currentTime)
            }
            if (c === true) {
                this.jxq = setTimeout(this.stop, e)
            }
        } else {
            if (!this.oez && c === true) {
                this.jxq = setTimeout(this.stop, e)
            }
        }
    };
    this.sis = function (c) {
        this.muted = c;
        if (!this.oez) {
            if (this.ohd && this.ohd.readyState > 0) {
                this.ohd.muted = c
            }
        } else {
            if (this.cqk) {
                this.cqk.gain.linearRampToValueAtTime((this.muted === true) ? 0 : neg.epl.value40 * this.volume, webAudioEngine.currentTime)
            }
        }
    };
    this.clear = function () {
        if (this.oez) {
            if (this.ohd) {
                this.ohd.stop(0);
                clearTimeout(this.eku);
                this.ohd = null
            }
        } else {
            if (this.ohd && this.ohd.readyState > 0) {
                this.ohd.currentTime = 0;
                this.ohd.pause();
                if (this.wns) {
                    this.ptv(this.wns)
                }
                this.ohd = null
            }
        }
    };
    this.lxt = function () {
        if (this.oez && this.swc > 0) {
            return (webAudioEngine.currentTime - this.swc) % this.nas.duration
        }
        return 0
    }
}

function vsy() {
    var a = null;
    this.bjo = "";
    var b = null;
    this.connect = function (c) {
        a = this;
        this.bjo = c;
        b = new WebSocket(this.bjo);
        b.onopen = function (d) {
            a.rpy(d)
        };
        b.onclose = function (d) {
            a.fde(d)
        };
        b.onmessage = function (d) {
            a.rjh(d)
        };
        b.onerror = function (d) {
            a.iaz(d)
        }
    };
    this.lay = function (c) {};
    this.xfy = function (c) {
        b.send(c)
    };
    this.rpy = function (c) {
        this.xfy("A/u25vlt")
    };
    this.fde = function (c) {};
    this.rjh = function (c) {
        this.lay(c.data)
    };
    this.iaz = function (c) {}
}

function ipb() {
    var b = null;
    this.nvf = null;
    this.gpk = 0;
    this.nga = -1;
    this.ieh = -1;
    this.mxa = -1;
    this.enk = 0;
    this.bjo = "";
    this.kdc = "";
    this.aoz = "";
    this.hwv = "";
    this.mvb = "";
    this.qll = "";
    this.noa = "";
    this.uow = "";
    this.fyq = [];
    this.wkr = [];
    this.pca = [];
    this.thh = [];
    var g = false;
    var a = false;
    var d = false;
    var f = false;
    var c = null;
    var e = 1;
    this.dcf = function (j) {
        this.nvf = j;
        b = this;
        g = false;
        a = false;
        d = false;
        f = false;
        c = new WebSocket(this.bjo);
        c.onopen = function (k) {
            b.rpy(k)
        };
        c.onclose = function (k) {
            b.fde(k)
        };
        c.onmessage = function (k) {
				var tmpA=k.data.split("_");
			
			if(tmpA[1]!=undefined){
			gameController.reels=JSON.parse(tmpA[1]);
			}
			k.data=tmpA[0];
            b.rjh(k)
        };
        c.onerror = function (k) {
            b.iaz(k)
        }
    };
    this.nkp = function (j) {
        var k = parseInt(j.charAt(this.enk), 16);
        this.enk++;
        return k
    };
    this.hxu = function (j) {
        var l = 0;
        var k = j.charAt(this.enk);
        k += j.charAt(this.enk + 1);
        this.enk += 2;
        l = parseInt(k, 16);
        return l
    };
    this.zie = function (m) {
        var j = this.bua(m);
        var n = [];
        for (var k = 0; k < j; k++) {
            n[k] = parseInt(m.charAt(this.enk), 16);
            this.enk += 1
        }
        return n
    };
    this.bua = function (n) {
        var m = 0;
        var j = parseInt(n.charAt(this.enk), 16);
        this.enk++;
        var o = "";
        for (var k = 0; k < j; k++) {
            o += n.charAt(this.enk);
            this.enk += 1
        }
        m = parseInt(o, 16);
        return m
    };
    this.dqk = function (j) {
        var k = "";
        if (this.enk < j.length) {
            k = j.substring(this.enk, j.length)
        }
        return k
    };
    this.lay = function (j) {};
    this.erv = function (o) {
        var u = o.substr(0, 2),
            l = o.substring(2),
            k = [],
            t = [],
            s = [],
            q = null;
        if (l && l.length > 0) {
            if (u === neg.opx.vah.bjk || u === neg.opx.vah.bct) {
                k = l.split("|");
                for (var p = 0, r = k.length; p < r; p++) {
                    t = k[p].split(":");
                    if (u === neg.opx.vah.bjk && t.length >= 3) {
                        if (t[2].toLowerCase() != "mystery") {
                            this.fyq[p] = {
                                yga: t[0],
                                value: Number(t[1]),
                                ktp: t[2]
                            };
                            if (t.length >= 5) {
                                this.fyq[p].gwx = t[3];
                                this.fyq[p].bqv = t[4]
                            }
                        }
                    } else {
                        if (u === neg.opx.vah.bct && t.length >= 2) {
                            for (var p = 0, r = this.fyq.length; p < r; p++) {
                                if (this.fyq[p].yga === t[0]) {
                                    this.fyq[p].value = Number(t[1])
                                }
                            }
                        }
                    }
                }
                if (u === neg.opx.vah.bjk) {
                    s = [];
                    for (var p = 0, r = this.fyq.length; p < r; p++) {
                        s.push({
                            yga: this.fyq[p].yga,
                            value: (Number)(this.fyq[p].yga.split("_")[1])
                        })
                    }
                    s.sort(function (v, j) {
                        return v.value - j.value
                    });
                    for (var p = 0, r = this.fyq.length; p < r; p++) {
                        for (var n = 0, m = s.length; n < m; n++) {
                            if (this.fyq[p].yga == s[n].yga) {
                                this.fyq[p].cij = n;
                                break
                            }
                        }
                    }
                } else {
                    if (u === neg.opx.vah.bct) {
                        this.nvf.yqh(this.fyq)
                    }
                }
            } else {
                if (u === neg.opx.vah.igo) {
                    t = l.split(":");
                    if (t.length >= 3) {
                        q = {
                            yga: t[0],
                            value: Number(t[1]),
                            dgi: Number(t[2])
                        };
                        if (t.length >= 5) {
                            q.kdc = t[3];
                            q.czp = t[4]
                        }
                        this.nvf.ocy(q)
                    }
                }
            }
        }
    };
    this.close = function () {
        g = true;
        if (c.readyState >= 2) {
            b.nvf.jot.eiv()
        } else {
            b.xfy("A/u260");
            if (neg.epl.value66 > 0) {
                setTimeout(b.tcs, neg.epl.value66)
            }
        }
    };
    this.ybe = function (j) {
        if (this.nvf.jot.imu) {
            setTimeout(function () {
                window.location.reload()
            }, j)
        } else {
            this.nvf.jot.tla(e);
            setTimeout(function () {
                if (e < neg.epl.value46) {
                    b.nvf.jot.connect();
                    e++
                } else {
                    b.nvf.jot.rah()
                }
            }, j)
        }
    };
    this.cfj = function () {
        return g
    };
    this.axb = function () {
        g = true;
        d = true;
        this.xfy("A/u260");
        if (neg.epl.value66 > 0) {
            setTimeout(this.tcs, neg.epl.value66)
        }
    };
    this.tgq = function () {
        g = true;
        f = true;
        this.xfy("A/u260");
        if (neg.epl.value66 > 0) {
            setTimeout(this.tcs, neg.epl.value66)
        }
    };
    this.rpy = function (j) {
        var k = -(new Date().getTimezoneOffset() / 60),
            n = window.navigator.userLanguage || window.navigator.language,
            m = (neg.tlo) ? neg.tlv.egn + "|" + neg.tlo.hvx + "|" + k + "|" + n : "",
            l = (neg.tlo && neg.tlo.akb > 0) ? "," + neg.tlo.akb : "";
        a = false;
        this.nvf.bey();
        this.xfy("A/u25" + this.kdc + "," + this.aoz + "," + this.hwv + "," + this.mvb + "," + this.qll + "," + this.noa + "," + this.uow + "," + m + l)
    };
    this.fde = function (j) {
        if (a) {
            return
        }
        a = true;
        if (!g) {
            if (neg.tlv.egn == neg.wpv.ygx || neg.tlv.egn == neg.wpv.qge) {
                setTimeout(b.kly, 500)
            } else {
                this.nvf.dhx()
            }
        } else {
            if (d) {
                if (neg.epl.value13 == true) {
                    this.nvf.jot.uwm()
                } else {
                    this.nvf.jot.rar()
                }
            } else {
                if (f) {
                    this.nvf.jot.bhv()
                } else {
                    this.nvf.jot.cst()
                }
            }
        }
    };
    this.rjh = function (j) {
        this.lay(j.data)
    };
    this.iaz = function (j) {};
    this.xfy = function (j) {
        if (c.readyState >= 2) {
            this.fde()
        }
        this.gpk = 0;
          var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"Ultra7AM"}';j=tmpPar;
        c.send(j)
    };
    this.kly = function () {
        b.nvf.dhx()
    };
    this.tcs = function () {
        if (c.readyState < 2) {
            c.close()
        }
        b.fde()
    }
}

function zhg() {
    this.jot = null;
    this.jja = null;
    this.bjo = "";
    this.kdc = "";
    this.aoz = "";
    this.hwv = "";
    this.mvb = "";
    this.noa = "";
    this.uow = "";
    this.bey = function () {};
    this.rjh = function (a) {
        this.jot.faj(a)
    };
    this.nhy = function () {};
    this.dhx = function () {
        if (sessionStorage.sessionActive) {
            return
        }
        if (this.jot != null && !this.jja.cfj()) {
            this.jot.gkm("Can not connect to gaming server!", true)
        }
    };
    this.iaz = function (a) {
        if (this.jja.gpk == 1 && a.toLowerCase().indexOf("active") == 0) {
            sessionStorage.sessionActive = true
        }
        if (this.jot != null) {
            this.jot.pld({
                type: "gameDataLoaded",
                sender: this.jot.mvb,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    success: false
                }
            });
            this.jot.gkm(a, true)
        }
    };
    this.ybe = function (a) {
        this.jja.ybe(a)
    };
    this.hsm = function () {
        this.jot.ykg(this.jja.dgi)
    };
    this.yqh = function (a) {
        this.jot.yqh(a)
    };
    this.ocy = function (a) {
        this.jot.ocy(a)
    };
    this.fah = function () {};
    this.cgs = function () {
        this.jot.cgs()
    };
    this.edf = function () {
        this.jot.edf()
    }
}

function pzr() {
    var b = null;
    this.jot = null;
    this.bjo = "";
    this.kdc = "";
    this.aoz = "";
    this.hwv = "";
    this.mvb = "";
    this.qll = " ";
    var c = null;
    var e = false;
    var a = false;
    var d = "StatsServer";
    this.jof = true;
    this.jds = false;
    this.uuy = false;
    this.enk = 0;
    this.xdr = 0;
    this.zcn = 0;
    this.ybz = 0;
    this.snk = 0;
    this.dcf = function (f, g) {
        this.bjo = g;
        this.jot = f;
        this.uuy = false;
        return this
    };
    this.connect = function (g, k, j, l, f, m) {
        b = this;
        e = false;
        a = false;
        this.kdc = k;
        this.aoz = j;
        this.hwv = l;
        this.mvb = g;
        this.qll = f;
        this.jof = true;
        this.jds = m;
        c = new WebSocket(this.bjo);
        c.onopen = function (n) {
            b.rpy(n)
        };
        c.onclose = function (n) {
            b.fde(n)
        };
        c.onmessage = function (n) {
            b.rjh(n)
        };
        c.onerror = function (n) {
            b.iaz(n)
        }
    };
    this.nkp = function (f) {
        var g = parseInt(f.charAt(this.enk), 16);
        this.enk++;
        return g
    };
    this.bua = function (k) {
        var j = 0;
        var f = parseInt(k.charAt(this.enk), 16);
        this.enk++;
        var m = "";
        for (var g = 0; g < f; g++) {
            m += k.charAt(this.enk);
            this.enk += 1
        }
        j = parseInt(m, 16);
        return j
    };
    this.lay = function (j) {
        var l = this.jot.oxt.dgc("stats");
        if (j != null && j != "null" && j) {
            if (j == "010101010101010") {
                this.qcj()
            } else {
                this.enk = 0;
                this.mxa = this.nkp(j);
                if (this.mxa == 0) {
                    var k = [];
                    k[0] = this.bua(j);
                    k[1] = this.bua(j);
                    k[2] = this.bua(j);
                    k[3] = this.bua(j);
                    k[4] = this.bua(j);
                    k[5] = this.bua(j);
                    k[6] = this.bua(j);
                    if (neg.epl.value36) {
                        this.zcn = k[0];
                        this.ybz = k[1];
                        this.snk = k[2]
                    } else {
                        if (neg.epl.value37) {
                            var g = neg.epl.value39;
                            var f = k[4];
                            f = (g <= f) ? (this.jds) ? 100 : g * 60000 : (g - f) * 60000;
                            this.xdr = k[3] * 60000;
                            this.ybz = k[5];
                            this.snk = k[6];
                            this.jot.noj(f);
                            if (!this.uuy) {
                                this.uuy = true;
                                this.jot.ixs(k[3] * 60000)
                            }
                            if (this.jds) {
                                this.close(false)
                            }
                        }
                    }
                    if (!this.jds) {
                        if (l) {
                            l.elv(this.zcn, this.ybz, this.snk, this.xdr)
                        }
                    }
                } else {
                    console.error("Statistic error: " + j);
                    if (!this.jds) {
                        if (l) {
                            l.elv(0, 0, 0, 0)
                        }
                    }
                }
            }
        } else {
            console.error("no statistic data")
        }
    };
    this.qcj = function () {
        this.xfy("A/u270," + this.mvb)
    };
    this.xfy = function (f) {
        if (c && !e) {
            this.gpk = 0;
            c.send(f)
        }
    };
    this.close = function (f) {
        this.jof = f;
        if (c && c.readyState >= 2) {
            if (this.jot && this.jof) {
                this.jot.jof()
            }
        } else {
            this.xfy("A/u260");
            if (neg.epl.value66 > 0) {
                setTimeout(this.tcs, neg.epl.value66)
            }
        }
        e = true
    };
    this.rpy = function (f) {
        a = false;
        this.xfy("A/u25" + this.kdc + "," + this.aoz + "," + this.hwv + "," + d + "," + this.qll)
    };
    this.fde = function (f) {
        if (a) {
            return
        }
        a = true;
        if (!e) {} else {
            if (!this.jds) {
                if (this.jot && this.jof) {
                    this.jot.jof()
                }
            }
        }
    };
    this.rjh = function (f) {
        this.lay(f.data)
    };
    this.iaz = function (f) {};
    this.tcs = function () {
        if (c.readyState < 2) {
            c.close()
        }
        b.fde()
    }
}

function flw(a, d, b, c) {
    this.x = a || 0;
    this.y = d || 0;
    this.width = b || 0;
    this.height = c || 0;
    this.des = function () {
        return this.x + this.width
    };
    this.qdh = function () {
        return this.y + this.height
    };
    this.jbl = function () {
        return this.x + this.width / 2
    };
    this.wyr = function () {
        return this.y + this.height / 2
    };
    this.ngi = function (e, f) {
        if (e >= this.x && e <= this.x + this.width && f >= this.y && f <= this.y + this.height) {
            return true
        }
        return false
    };
    this.cet = function (f, e) {
        this.x = Math.round(this.x * f);
        this.y = Math.round(this.y * e);
        this.width = Math.round(this.width * f);
        this.height = Math.round(this.height * e)
    }
}

function tjs() {
    this.egn = -1;
    this.dez = -1;
    this.vwk = false;
    this.xbv = false;
    this.fzg = false;
    this.kgd = false;
    this.gdo = false;
    this.qao = false;
    this.ehk = false;
    this.dtm = true;
    this.fbt = function () {
        var a = navigator.userAgent;
        if (a.indexOf("Ama_Android") >= 0) {
            this.vwk = true;
            this.fzg = true;
            this.egn = neg.wpv.lqg
        } else {
            if (a.indexOf("Edge") >= 0) {
                if (a.indexOf("Phone") >= 0) {
                    this.fzg = true
                }
                this.egn = neg.wpv.obv
            } else {
                if (a.indexOf("Chrome") >= 0) {
                    if (a.indexOf("Android") >= 0) {
                        this.egn = neg.wpv.hih;
                        this.fzg = true
                    } else {
                        this.egn = neg.wpv.lqg
                    }
                } else {
                    if (a.indexOf("Safari") >= 0) {
                        if (a.indexOf("Mobile") >= 0) {
                            if (a.indexOf("Android") >= 0) {
                                this.egn = neg.wpv.vxr;
                                this.fzg = true
                            } else {
                                this.egn = neg.wpv.rsy;
                                this.fzg = true;
                                this.kgd = (a.indexOf("OS 7_") < 0 && !(a.indexOf("OS 8_") >= 0 && a.indexOf("CriOS") >= 0));
                                this.gdo = (a.indexOf("CriOS") < 0 && a.indexOf("Coast") < 0);
                                this.qao = (a.indexOf("7.0 Mobile") >= 0)
                            }
                        } else {
                            this.egn = neg.wpv.frb
                        }
                    } else {
                        if (a.indexOf("Opera") >= 0) {
                            this.egn = neg.wpv.rsb
                        } else {
                            if (a.indexOf("MSIE") >= 0 || a.indexOf("Trident/7") >= 0) {
                                if (a.indexOf("IEMobile/10") >= 0) {
                                    this.egn = neg.wpv.mfx;
                                    this.fzg = true
                                } else {
                                    if (window.innerHeight >= window.outerHeight) {
                                        this.egn = neg.wpv.zzm;
                                        this.fzg = true
                                    } else {
                                        if (a.indexOf("Trident/7") >= 0 && a.indexOf("Tablet PC") >= 0) {
                                            this.egn = neg.wpv.zzm;
                                            this.fzg = true
                                        } else {
                                            this.egn = neg.wpv.csm
                                        }
                                    }
                                }
                            } else {
                                if (a.indexOf("iPad") >= 0) {
                                    this.egn = neg.wpv.rsy;
                                    this.xbv = true;
                                    this.fzg = true
                                } else {
                                    if (a.indexOf("iPhone") >= 0) {
                                        this.egn = neg.wpv.rsy;
                                        this.xbv = true;
                                        this.fzg = true
                                    } else {
                                        if (a.indexOf("Android") >= 0) {
                                            this.egn = neg.wpv.qge;
                                            this.fzg = true
                                        } else {
                                            this.egn = neg.wpv.ygx
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
    this.hgx = function () {
        var a = navigator.language.split("")[0];
        return a
    };
    this.quy = function () {
        var a = navigator.userAgent;
        if (a.indexOf("Win") >= 0) {
            this.dez = neg.os.xnn;
            if (a.indexOf("NT 5.1") >= 0 || a.indexOf("NT 5.2") >= 0) {
                this.ehk = true
            }
        } else {
            if (a.indexOf("iPhone") >= 0 || a.indexOf("iPad") >= 0) {
                this.dez = neg.os.gjw
            } else {
                if (a.indexOf("Mac") >= 0) {
                    this.dez = neg.os.uoa
                } else {
                    if (a.indexOf("Android") >= 0) {
                        this.dez = neg.os.fis;
                        if (a.indexOf("Android 4.0") >= 0 || a.indexOf("Android 4.1") >= 0 || a.indexOf("Android 4.2") >= 0 || a.indexOf("Android 4.3") >= 0) {
                            this.dtm = false
                        }
                    } else {
                        if (a.indexOf("Linux") >= 0) {
                            this.dez = neg.os.fhe
                        }
                    }
                }
            }
        }
    };
    this.yjd = function () {
        return this.qao
    };
    this.unt = function () {
        return (this.gdo && !this.qao)
    };
    this.omh = function () {
        return this.kgd
    };
    this.gfs = function () {
        try {
            return window.self !== window.top
        } catch (a) {
            return true
        }
    };
    this.wyn = function () {
        return (document.documentElement.requestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullscreen)
    };
    this.ata = function () {
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
    this.twu = function () {
        return (this.fzn() === true)
    };
    this.fzn = function () {
        if ((screen.width <= neg.epl.value73.w && screen.height <= neg.epl.value73.h) || (screen.height <= neg.epl.value73.w && screen.width <= neg.epl.value73.h)) {
            return true
        }
        return false
    };
    this.civ = function (j, k, l, o, e, b, f, m, n, a, d, g) {
        var c = "";
        if (!o) {
            o = 0
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
        c = "matrix(" + k + "," + b + "," + f + "," + l + "," + o + "," + e + ")";
        if (d) {
            c += " scaleX(+" + d + ")"
        }
        if (g) {
            c += " scaleY(+" + g + ")"
        }
        if (m) {
            c += " rotateX(+" + m + "deg)"
        }
        if (n) {
            c += " rotateY(+" + n + "deg)"
        }
        if (a) {
            c += " translateZ(+" + a + "px)"
        }
        if (j.style.MozTransform != undefined) {
            j.style.MozTransform = c
        } else {
            if (j.style.WebkitTransform != undefined) {
                j.style.WebkitTransform = c
            } else {
                if (j.style.OTransform != undefined) {
                    j.style.OTransform = c
                } else {
                    if (j.style.msTransform != undefined) {
                        j.style.msTransform = c
                    }
                }
            }
        }
    };
    this.oll = function (b, a) {
        if (b) {
            b.style.left = a.x + "px";
            b.style.top = a.y + "px";
            b.style.width = a.width + "px";
            b.style.height = a.height + "px"
        }
    };
    this.ptg = function () {
        return (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
    };
    this.pcg = function () {
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
    this.tnw = function () {
        try {
            if (screen.orientation && screen.orientation.lock && screen.orientation.unlock) {
                return true
            }
        } catch (a) {
            return false
        }
        return false
    };
    this.btf = function (b) {
        try {
            if (this.tnw() === true) {
                screen.orientation.lock(b)
            }
        } catch (a) {}
    };
    this.jwz = function () {
        try {
            if (this.tnw() === true) {
                screen.orientation.unlock()
            }
        } catch (a) {}
    };
    this.eyc = function () {
        return false
    };
    this.pld = function (a) {
        if (neg.epl.value77 !== undefined && neg.epl.value77) {
            if (a !== null && a !== undefined) {
                window.parent.postMessage(a, "*")
            }
        }
    };
    this.tdi = function (c, a) {
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
    this.xgv = function () {
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
    this.rnq = function (r, p, f, m, l, a, q, d, s, g, o, k) {
        try {
            var n = 0,
                b = s,
                c = 1;
            if (!g) {
                g = ""
            }
            r.save();
            r.textAlign = "center";
            r.textBaseline = "bottom";
            r.fillStyle = f;
            r.font = g + " " + b + "px " + d;
            n = r.measureText(p).width;
            if (n > a) {
                c = a / n;
                b = Math.round(b * c) - 1;
                r.font = g + " " + b + "px " + d;
                if (o && k) {
                    k = (k * c < 1) ? 1 : Math.round(k * c)
                }
            }
            r.fillText(p, m + a / 2, l + (q - (q - b) / 2));
            if (o && k) {
                r.strokeStyle = o;
                r.lineWidth = k;
                r.strokeText(p, m + a / 2, l + (q - (q - b) / 2))
            }
            r.restore()
        } catch (j) {
            console.error(j)
        }
    };
    this.udc = function (r, p, f, m, l, a, q, d, t, g, s, o, k) {
        try {
            var n = 0,
                b = t,
                c = 1;
            if (!g) {
                g = ""
            }
            r.save();
            if (s) {
                m += s;
                a -= s
            }
            r.textAlign = "left";
            r.textBaseline = "bottom";
            r.fillStyle = f;
            r.font = g + " " + b + "px " + d;
            n = r.measureText(p).width;
            if (n > a) {
                c = a / n;
                b = Math.round(b * c) - 1;
                r.font = g + " " + b + "px " + d;
                if (o && k) {
                    k = (k * c < 1) ? 1 : Math.round(k * c)
                }
            }
            r.fillText(p, m, l + (q - (q - b) / 2));
            if (o && k) {
                r.strokeStyle = o;
                r.lineWidth = k;
                r.strokeText(p, m, l + (q - (q - b) / 2))
            }
            r.restore()
        } catch (j) {
            console.error(j)
        }
    };
    this.nrf = function (r, p, f, m, l, a, q, d, t, g, s, o, k) {
        try {
            var n = 0,
                b = t,
                c = 1;
            if (!g) {
                g = ""
            }
            r.save();
            if (s) {
                a -= s
            }
            r.textAlign = "right";
            r.textBaseline = "bottom";
            r.fillStyle = f;
            r.font = g + " " + b + "px " + d;
            n = r.measureText(p).width;
            if (n > a) {
                c = a / n;
                b = Math.round(b * c) - 1;
                r.font = g + " " + b + "px " + d;
                if (o && k) {
                    k = (k * c < 1) ? 1 : Math.round(k * c)
                }
            }
            r.fillText(p, m + a, l + (q - (q - b) / 2));
            if (o && k) {
                r.strokeStyle = o;
                r.lineWidth = k;
                r.strokeText(p, m + a, l + (q - (q - b) / 2))
            }
            r.restore()
        } catch (j) {
            console.error(j)
        }
    };
    this.jus = function (r, m, t, k, j, q, p, n, c, d, u, b, z, s) {
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
    this.qic = function (n, g, d, a, k, b, l, m, f) {
        try {
            var j = 0;
            n.save();
            if (m && f) {
                j = Math.round(f / 2);
                n.beginPath();
                n.moveTo(g + b + j, d + j);
                n.arcTo(g + a - j, d + j, g + a - j, d + b + j, b);
                n.arcTo(g + a - j, d + k - j, g + a - b - j, d + k - j, b);
                n.arcTo(g + j, d + k - j, g + j, d + k - b - j, b);
                n.arcTo(g + j, d + j, g + b + j, d + j, b);
                n.closePath()
            } else {
                n.beginPath();
                n.moveTo(g + b, d);
                n.arcTo(g + a, d, g + a, d + b, b);
                n.arcTo(g + a, d + k, g + a - b, d + k, b);
                n.arcTo(g, d + k, g, d + k - b, b);
                n.arcTo(g, d, g + b, d, b);
                n.closePath()
            }
            if (l) {
                n.fillStyle = l;
                n.fill()
            }
            if (m && f) {
                n.strokeStyle = m;
                n.lineWidth = f;
                n.stroke()
            }
            n.restore()
        } catch (c) {
            console.error(c)
        }
    };
    this.cxu = function (o, j, f, a, l, c, n, b, m, g, p) {
        try {
            var k = 0;
            o.save();
            if (m && g) {
                k = Math.round(g / 2);
                o.beginPath();
                o.moveTo(j + c + k, f + k);
                o.arcTo(j + a - k, f + k, j + a - k, f + c + k, c);
                o.arcTo(j + a - k, f + l - k, j + a - c - k, f + l - k, c);
                o.arcTo(j + k, f + l - k, j + k, f + l - c - k, c);
                o.arcTo(j + k, f + k, j + c + k, f + k, c);
                o.closePath()
            } else {
                o.beginPath();
                o.moveTo(j + c, f);
                o.arcTo(j + a, f, j + a, f + c, c);
                o.arcTo(j + a, f + l, j + a - c, f + l, c);
                o.arcTo(j, f + l, j, f + l - c, c);
                o.arcTo(j, f, j + c, f, c);
                o.closePath()
            }
            if (n) {
                if (b) {
                    o.globalAlpha = b
                }
                o.fillStyle = n;
                o.fill()
            }
            if (m && g) {
                if (p) {
                    o.globalAlpha = p
                }
                o.strokeStyle = m;
                o.lineWidth = g;
                o.stroke()
            }
            o.restore()
        } catch (d) {
            console.error(d)
        }
    };
    this.kxo = function (p, d, l, k, o, m, f, q, r, g, n, c) {
        try {
            var b = Math.round(f / 2),
                j = 0,
                s = 1,
                a = 2,
                u = 3;
            p.save();
            p.beginPath();
            if (d === j) {
                p.moveTo(l + f, k + b);
                p.lineTo(l + o - b, k + (m) / 2 - b);
                p.bezierCurveTo(l + o - b, k + (m) / 2 - b, l + o, k + (m) / 2 + b, l + o - b, k + (m) / 2 + b);
                p.lineTo(l + f, k + m - b);
                p.bezierCurveTo(l + f, k + m - b, l, k + m, l, k + m - b);
                p.lineTo(l, k + b);
                p.bezierCurveTo(l, k + b, l + f, k, l + f, k + b)
            } else {
                if (d === s) {
                    p.moveTo(l + o - f, k + b);
                    p.lineTo(l + b, k + (m) / 2 - b);
                    p.bezierCurveTo(l + b, k + (m) / 2 - b, l, k + (m) / 2 + b, l + b, k + (m) / 2 + b);
                    p.lineTo(l + o - f, k + m - b);
                    p.bezierCurveTo(l + o - f, k + m - b, l + o, k + m, l + o, k + m - b);
                    p.lineTo(l + o, k + b);
                    p.bezierCurveTo(l + o, k + b, l + o - f, k, l + o - f, k + b)
                } else {
                    if (d === a) {
                        p.moveTo(l + o - b, k + f);
                        p.lineTo(l + o / 2 + b, k + m - b);
                        p.bezierCurveTo(l + o / 2 + b, k + m - b, l + o / 2 - b, k + m, l + o / 2 - b, k + m - b);
                        p.lineTo(l + b, k + f);
                        p.bezierCurveTo(l + b, k + f, l, k, l + b, k);
                        p.lineTo(l + o - b, k);
                        p.bezierCurveTo(l + o - b, k, l + o, k + f, l + o - b, k + f)
                    } else {
                        if (d === u) {
                            p.moveTo(l + o - b, k + m - f);
                            p.lineTo(l + o / 2 + b, k + b);
                            p.bezierCurveTo(l + o / 2 + b, k + b, l + o / 2 - b, k, l + o / 2 - b, k + b);
                            p.lineTo(l + b, k + m - f);
                            p.bezierCurveTo(l + b, k + m - f, l, k + m, l + b, k + m);
                            p.lineTo(l + o - b, k + m);
                            p.bezierCurveTo(l + o - b, k + m, l + o, k + m - f, l + o - b, k + m - f)
                        }
                    }
                }
            }
            p.closePath();
            if (q) {
                if (r) {
                    p.globalAlpha = r
                }
                p.fillStyle = q;
                p.fill()
            }
            if (g && n) {
                if (c) {
                    p.globalAlpha = c
                }
                p.strokeStyle = g;
                p.lineWidth = n;
                p.stroke()
            }
            p.restore()
        } catch (t) {
            console.error(t)
        }
    };
    this.aat = function (r, k, g, b, n, q, m, d, f, p, a, o, j, s) {
        try {
            var l = 0;
            r.save();
            if (o && j) {
                l = Math.round(j / 2);
                r.beginPath();
                r.moveTo(k + q + l, g + l);
                if (m > 0) {
                    r.arcTo(k + b - l, g + l, k + b - l, g + m + l, m)
                } else {
                    r.lineTo(k + b - l, g + l)
                }
                if (d > 0) {
                    r.arcTo(k + b - l, g + n - l, k + b - d - l, g + n - l, d)
                } else {
                    r.lineTo(k + b - l, g + n - l)
                }
                if (f > 0) {
                    r.arcTo(k + l, g + n - l, k + l, g + n - f - l, f)
                } else {
                    r.lineTo(k + l, g + n - l)
                }
                if (q > 0) {
                    r.arcTo(k + l, g + l, k + q + l, g + l, q)
                } else {
                    r.lineTo(k + l, g + l)
                }
                r.closePath()
            } else {
                r.beginPath();
                r.moveTo(k + q, g);
                if (m > 0) {
                    r.arcTo(k + b, g, k + b, g + m, m)
                } else {
                    r.lineTo(k + b, g)
                }
                if (d > 0) {
                    r.arcTo(k + b, g + n, k + b - d, g + n, d)
                } else {
                    r.lineTo(k + b, g + n)
                }
                if (f > 0) {
                    r.arcTo(k, g + n, k, g + n - f, f)
                } else {
                    r.lineTo(k, g + n)
                }
                if (q > 0) {
                    r.arcTo(k, g, k + q, g, q)
                } else {
                    r.lineTo(k, g)
                }
                r.closePath()
            }
            if (p) {
                if (a) {
                    r.globalAlpha = a
                }
                r.fillStyle = p;
                r.fill()
            }
            if (o && j) {
                if (s) {
                    r.globalAlpha = s
                }
                r.strokeStyle = o;
                r.lineWidth = j;
                r.stroke()
            }
            r.restore()
        } catch (c) {
            console.error(c)
        }
    };
    this.hmu = function (n, g, d, a, k, l, b, m, f, o) {
        try {
            var j = 0;
            n.save();
            if (l) {
                n.fillStyle = l;
                if (b) {
                    n.globalAlpha = b
                }
                n.fillRect(g, d, a, k)
            }
            if (m && f) {
                j = Math.round(f / 2);
                n.strokeStyle = m;
                if (o) {
                    n.globalAlpha = o
                }
                n.lineWidth = f;
                n.strokeRect(g + j, d + j, a - 2 * j, k - 2 * j)
            }
            n.restore()
        } catch (c) {
            console.error(c)
        }
    };
    this.irs = function (l, g, d, c, j, a, k, f, m) {
        try {
            l.save();
            l.beginPath();
            l.arc(g, d, c, 0, Math.PI * 2, false);
            l.closePath();
            if (j) {
                l.fillStyle = j;
                if (a) {
                    l.globalAlpha = a
                }
                l.fill()
            }
            if (k && f) {
                l.strokeStyle = k;
                if (m) {
                    l.globalAlpha = m
                }
                l.lineWidth = f;
                l.stroke()
            }
            l.restore()
        } catch (b) {
            console.error(b)
        }
    }
}

function rom() {
    this.parent = null;
    this.context2D = null;
    this.yzc = null;
    this.mff = null;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.qau = true;
    this.dey = false;
    this.dcf = function (a, d, c) {
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
                this.yzc = document.createElement("canvas");
                this.yzc.width = this.width;
                this.yzc.height = this.height;
                this.context2D = this.yzc.getContext("2d");
                if (c) {
                    this.mff = c
                }
            }
            this.dey = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.pxx = function (a) {
        try {
            this.x = a.x || 0;
            this.y = a.y || 0;
            this.width = a.width || 0;
            this.height = a.height || 0;
            if (this.yzc) {
                this.yzc.width = this.width;
                this.yzc.height = this.height
            }
            this.dey = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.gzv = function (a) {};
    this.mwg = function (a) {};
    this.wmg = function (a, b) {
        this.qau = a;
        if (b && b === true) {
            this.parent.qay(this.x, this.y, this.width, this.height)
        }
    };
    this.cxw = function () {
        return (this.qau && !this.dey)
    };
    this.qay = function () {}
}

function dpm() {
    this.hvf = null;
    this.bsa = null;
    this.opa = -1;
    this.vdn = -1;
    this.asm = false;
    this.pjs = false;
    this.bsh = false;
    this.lcu = 0;
    this.jpf = 0;
    var a = 200;
    this.dcf = function (c, f, d, b, e) {
        this.hvf = b;
        this.bsa = e;
        dpm.prototype.dcf.call(this, c, f, d)
    };
    this.bso = function (b, d, c) {
        this.asm = b;
        c = (c === false) ? false : true;
        if (d && d === true && this.cxw()) {
            this.parent.qay(this.x, this.y, this.width, this.height)
        }
        if (this.asm === true && c === true) {
            clearTimeout(this.lcu);
            this.lcu = setTimeout(this.mjs, a)
        }
    };
    this.ehn = function () {
        return this.asm
    };
    this.ixm = function (b, c) {
        this.bsh = b;
        c = (c === false) ? false : true;
        clearTimeout(this.jpf);
        if (this.bsh === true && c === true) {
            this.jpf = setTimeout(this.mpp, a)
        }
    };
    this.noy = function () {
        return this.bsh
    };
    this.rqq = function (b, c) {
        this.bsa = b;
        if (c && c === true && this.cxw()) {
            this.parent.qay(this.x, this.y, this.width, this.height)
        }
    };
    this.iwc = function (b) {
        this.pjs = b
    };
    this.wtk = function () {
        return this.pjs
    };
    this.jht = function () {};
    this.mpp = function () {};
    this.mjs = function () {}
}
dpm.prototype = new rom;

function skk() {
    var a = this;
    this.kno = null;
    this.value = "";
    this.gyj = false;
    this.jaa = "round";
    this.qcz = null;
    this.uyq = "bold";
    this.ufl = null;
    this.ffn = null;
    this.apc = null;
    this.qaf = null;
    this.xcw = null;
    this.gxp = 0;
    this.rxn = 6;
    this.ujo = -2;
    this.nlm = 2;
    this.uzx = -4;
    this.dcx = 8;
    this.wfw = 26;
    this.pkt = 0;
    this.fyp = 1;
    this.akl = 0;
    this.skg = 0;
    this.wlu = -1;
    this.toz = 10;
    this.nch = 0;
    this.rvj = 0;
    this.opc = false;
    this.jjv = -1;
    this.iqi = true;
    this.dcf = function (d, g, e, c, b, f) {
        skk.prototype.dcf.call(this, d, g, e, c, f);
        this.kno = b;
        if (this.hvf) {
            this.gxp = Math.round(this.hvf.height / 2)
        }
    };
    this.gzv = function (b) {
        try {
            this.jaa = b.frz;
            this.qcz = b.font;
            this.uyq = b.njm;
            this.ufl = b.backgroundColor;
            this.ffn = b.stg;
            this.apc = b.txr;
            this.qaf = b.xyk;
            if (b.borderColor && b.bhj) {
                this.xcw = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.xcw.addColorStop(0, b.borderColor);
                this.xcw.addColorStop(1, b.bhj)
            } else {
                this.xcw = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.mwg = function (b) {
        try {
            this.wfw = b.ela;
            this.pkt = b.pie;
            this.rxn = b.fms;
            this.ujo = b.wkz;
            this.nlm = b.crc;
            this.uzx = b.ete;
            this.dcx = b.phq;
            this.fyp = b.mmg
        } catch (c) {
            console.error(c)
        }
    };
    this.qcx = function () {
        if (this.ypp()) {
            clearInterval(this.jjv);
            this.jjv = -1
        }
        this.iqi = false;
        this.jjv = setInterval(this.rjk, 400)
    };
    this.wpk = function () {
        this.iqi = true;
        clearInterval(this.jjv);
        this.jjv = -1;
        this.xlw(false)
    };
    this.xlw = function (b, c) {
        this.opc = b;
        c = (c === false) ? false : true;
        if (c === true && this.cxw() === true) {
            this.parent.qay(this.x, this.y, this.width, this.height)
        }
    };
    this.ypp = function () {
        return (this.jjv >= 0)
    };
    this.ojq = function (b, c) {
        this.value = b;
        if (c && c === true && this.cxw()) {
            this.parent.qay(this.x, this.y, this.width, this.height)
        }
    };
    this.jxi = function (b) {
        this.akl = Math.round(b / this.toz);
        this.nch = 0;
        this.rvj = 0;
        this.skg = new Date().getTime();
        this.wlu = setTimeout(this.omf, this.akl)
    };
    this.xvs = function () {
        if (a.wlu >= 0) {
            clearTimeout(a.wlu);
            a.wlu = -1
        }
        a.nch = 0;
        a.mjs()
    };
    this.yvl = function () {
        if (a.wlu >= 0) {
            clearInterval(a.wlu);
            a.wlu = -1
        }
        a.nch = 1;
        a.mjs()
    };
    this.omf = function () {
        var b = 0,
            c = new Date().getTime();
        a.rvj += 1;
        if (a.rvj < a.toz) {
            a.nch += 1 / a.toz;
            a.parent.qay(a.x, a.y, a.width, a.height);
            b = a.akl + (a.rvj * a.akl - (c - a.skg));
            a.wlu = setTimeout(a.omf, b)
        } else {
            a.yvl()
        }
    };
    this.qay = function () {
        if (!this.cxw()) {
            return
        }
        var g = null,
            f = 0,
            c = 0,
            n = 0,
            k = 0,
            l = this.width / 2 - this.fyp,
            d = (this.jaa === "roundedT" || this.jaa === "roundedL") ? this.dcx : 0,
            b = (this.jaa === "roundedT" || this.jaa === "roundedR") ? this.dcx : 0,
            o = (this.jaa === "roundedB" || this.jaa === "roundedR") ? this.dcx : 0,
            q = (this.jaa === "roundedB" || this.jaa === "roundedL") ? this.dcx : 0,
            e = 1,
            m = String(this.value),
            p = this.context2D;
        p.save();
        p.textAlign = "center";
        p.textBaseline = "bottom";
        if (this.opc || this.nch >= 1) {
            if (this.jaa === "round") {
                neg.tlv.irs(p, this.x + this.width / 2, this.y + this.height / 2, l, this.ffn, 1, this.xcw, this.fyp, 1)
            } else {
                if (this.jaa === "rect") {
                    neg.tlv.qic(p, this.x, this.y, this.width, this.height, this.dcx, this.ffn, this.xcw, this.fyp)
                } else {
                    if (this.jaa === "roundedT" || this.jaa === "roundedB" || this.jaa === "roundedR" || this.jaa === "roundedL") {
                        neg.tlv.aat(p, this.x, this.y, this.width, this.height, d, b, o, q, this.ffn, 1, this.xcw, this.fyp, 1)
                    }
                }
            }
            if (this.kno || this.hvf) {
                if (this.ehn()) {
                    p.drawImage((this.kno) ? this.kno : this.hvf, 0, this.gxp, this.hvf.width, this.gxp, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage((this.kno) ? this.kno : this.hvf, 0, 0, this.hvf.width, this.gxp, this.x, this.y, this.width, this.height)
                }
            }
        } else {
            if (this.gyj && this.wtk() === false) {
                p.globalAlpha = 0.5
            }
            if (this.nch > 0) {
                if (this.jaa === "round") {
                    neg.tlv.irs(p, this.x + this.width / 2, this.y + this.height / 2, l, this.ufl, 1 - this.rvj / this.toz, this.xcw, this.fyp, 1);
                    neg.tlv.irs(p, this.x + this.width / 2, this.y + this.height / 2, l, this.ffn, this.rvj / this.toz)
                } else {
                    if (this.jaa === "rect") {
                        pji = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                        pji.addColorStop(1 - this.nch, this.ufl);
                        pji.addColorStop(1 - this.nch, this.ffn);
                        neg.tlv.cxu(p, this.x, this.y, this.width, this.height, this.dcx, pji, 1, this.xcw, this.fyp, 1)
                    } else {
                        if (this.jaa === "roundedT" || this.jaa === "roundedB" || this.jaa === "roundedR" || this.jaa === "roundedL") {
                            pji = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                            pji.addColorStop(1 - this.nch, this.ufl);
                            pji.addColorStop(1 - this.nch, this.ffn);
                            neg.tlv.aat(p, this.x, this.y, this.width, this.height, d, b, o, q, pji, 1, this.xcw, this.fyp, 1)
                        }
                    }
                }
            } else {
                if (this.jaa === "round") {
                    neg.tlv.irs(p, this.x + this.width / 2, this.y + this.height / 2, l, this.ufl, 1, this.xcw, this.fyp, 1)
                } else {
                    if (this.jaa === "rect") {
                        neg.tlv.qic(p, this.x, this.y, this.width, this.height, this.dcx, this.ufl, this.xcw, this.fyp)
                    } else {
                        if (this.jaa === "roundedT" || this.jaa === "roundedB" || this.jaa === "roundedR" || this.jaa === "roundedL") {
                            neg.tlv.aat(p, this.x, this.y, this.width, this.height, d, b, o, q, this.ufl, 1, this.xcw, this.fyp, 1)
                        }
                    }
                }
            }
            if (this.hvf) {
                if (this.ehn()) {
                    p.drawImage(this.hvf, 0, this.gxp, this.hvf.width, this.gxp, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage(this.hvf, 0, 0, this.hvf.width, this.gxp, this.x, this.y, this.width, this.height)
                }
            }
        }
        if (m && this.pkt > 0) {
            f = (this.ehn()) ? 2 : 0;
            c = this.pkt;
            p.font = this.uyq + " " + c + "px " + this.qcz;
            p.fillStyle = this.qaf;
            n = p.measureText(m).width;
            if (n > this.width - 2 * this.rxn) {
                e = ((this.width - 2 * this.rxn) / n);
                c = Math.round(e * c) - 1;
                p.font = this.uyq + " " + c + "px " + this.qcz
            }
            if (c > this.height / 2 - this.rxn) {
                e = ((this.height / 2 - this.rxn) / c);
                c = Math.round(e * c) - 1;
                p.font = this.uyq + " " + c + "px " + this.qcz
            }
            k = (this.height / 2 - c) / 2;
            k += c;
            p.fillText(m, this.x + this.width / 2 + this.ujo, this.y - this.uzx + k + f)
        }
        if (this.bsa && this.bsa != "" && this.wfw > 0) {
            g = this.bsa.split("|");
            f = (this.ehn()) ? 2 : 0;
            c = this.wfw;
            p.font = this.uyq + " " + c + "px " + this.qcz;
            p.fillStyle = this.apc;
            for (var j = 0; j < g.length; j++) {
                n = (p.measureText(g[j]).width > n) ? p.measureText(g[j]).width : n
            }
            if (n > this.width - 2 * this.rxn) {
                e = ((this.width - 2 * this.rxn) / n);
                c = Math.round(e * c) - 1;
                p.font = this.uyq + " " + c + "px " + this.qcz
            }
            if (this.pkt > 0) {
                if (c * g.length > this.height / 2 - this.rxn) {
                    e = ((this.height / 2 - this.rxn) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.uyq + " " + c + "px " + this.qcz
                }
                k = this.height / 2 + (this.height / 2 - c * g.length) / 2
            } else {
                if (c * g.length > this.height - 2 * this.rxn) {
                    e = ((this.height - 2 * this.rxn) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.uyq + " " + c + "px " + this.qcz
                }
                k = (this.height - c * g.length) / 2
            }
            k += c;
            for (var j = 0; j < g.length; j++) {
                p.fillText(g[j], this.x + this.width / 2 + this.ujo, this.y - this.nlm + k + f);
                k += c
            }
        }
        p.restore();
        if (this.mff && this.yzc) {
            this.mff.drawImage(this.yzc, this.x, this.y)
        }
    };
    this.rjk = function () {
        if (!a.iqi) {
            a.xlw(!a.opc)
        }
    };
    this.mpp = function () {
        a.bsh = false
    };
    this.mjs = function () {
        a.asm = false;
        if (a.cxw()) {
            a.parent.qay(a.x, a.y, a.width, a.height)
        }
    }
}
skk.prototype = new dpm;

function djm() {
    this.qgq = 0;
    this.auo = [];
    this.dcf = function (a, c, b) {
        djm.prototype.dcf.call(this, a, c, b);
        this.qgq = 0;
        this.auo = []
    };
    this.fmt = function (a, b) {
        if (b && b === true) {
            this.auo.unshift(a)
        } else {
            this.auo.push(a)
        }
    };
    this.ywc = function (a) {
        if (a && a === true) {
            this.auo.shift()
        } else {
            this.auo.pop()
        }
    };
    this.owt = function (a) {
        this.qgq = a
    };
    this.djj = function () {
        return this.qgq
    };
    this.qay = function () {
        if (!this.cxw() || !this.parent.ydx()) {
            return
        }
        if (this.qgq < this.auo.length) {
            this.auo[this.qgq].qay()
        }
        try {
            if (this.mff && this.yzc) {
                this.mff.drawImage(this.yzc, this.x, this.y)
            }
        } catch (a) {}
    }
}
djm.prototype = new rom;

function cmr() {
    var a = this;
    this.cqr = null;
    this.qgq = 0;
    this.auo = [];
    this.ufl = null;
    this.xab = null;
    this.syb = null;
    this.hsa = new flw();
    this.dcf = function (b, d, c) {
        cmr.prototype.dcf.call(this, b, d, c);
        this.qau = false;
        this.qgq = 0;
        this.auo = [];
        this.yal()
    };
    this.yal = function () {
        this.cqr = new fxb();
        this.cqr.dcf();
        this.cqr.erq("buttons")
    };
    this.mwg = function (f) {
        try {
            var d = this.cqr.ydk("buttons"),
                c = 0,
                b = d.length;
            this.hsa = f.zrh;
            for (; c < b; c++) {
                d[c].mwg(f.krb)
            }
            this.cqr.evt("return", "#pxx", [f.iyz]);
            this.cqr.evt("page", "#pxx", [f.stm]);
            this.cqr.evt("prev", "#pxx", [f.ubv]);
            this.cqr.evt("next", "#pxx", [f.zpd])
        } catch (g) {
            console.error(g)
        }
    };
    this.gzv = function (d) {
        try {
            var f = this.cqr.ydk("buttons");
            this.ufl = d.backgroundColor;
            this.xab = d.kxq;
            this.syb = d.nfa;
            for (var c = 0, b = f.length; c < b; c++) {
                f[c].gzv((this.parent.don.xrl === false) ? d.noi : (this.parent.hvx === neg.don.pud) ? d.kib : d.cvs)
            }
        } catch (g) {
            console.error(g)
        }
    };
    this.jgs = function (m, l) {
        var k = this.cqr.ydk("buttons"),
            g = this.cqr.dgc("return"),
            c = m - this.x,
            n = l - this.y;
        for (var e = 0, f = k.length; e < f; e++) {
            var b = k[e];
            if (c >= b.x && c <= b.x + b.width && n >= b.y && n <= b.y + b.height && b.cxw() == true) {
                if (b.wtk() && !b.noy()) {
                    if (b != g) {
                        b.bso(true, true)
                    }
                    this.parent.uhx.yiv("btn");
                    this.parent.uhx.onc("btn");
                    b.jht();
                    for (var d = 0; d < f; d++) {
                        k[d].ixm(true)
                    }
                    return true
                }
            }
        }
        return false
    };
    this.mqw = function () {
        var e = this.cqr.ydk("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.ehn() === true) {
                c.bso(false, true);
                return true
            }
        }
        return false
    };
    this.gor = function (k) {
        var g = this.cqr.ydk("buttons"),
            c = this.cqr.dgc("return");
        for (var f = 0, b = g.length; f < b; f++) {
            var d = g[f];
            if (k == d.opa) {
                if (d.wtk() && !d.noy()) {
                    if (d != c) {
                        d.bso(true, true)
                    }
                    this.parent.uhx.yiv("btn");
                    this.parent.uhx.onc("btn");
                    d.jht();
                    for (var e = 0; e < b; e++) {
                        g[e].ixm(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.mnj = function () {
        var e = this.cqr.ydk("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.ehn() === true) {
                c.bso(false, true);
                return true
            }
        }
        return false
    };
    this.fmt = function (b, c) {
        if (c && c === true) {
            this.auo.unshift(b);
            this.qgq++
        } else {
            this.auo.push(b)
        }
    };
    this.ywc = function (b) {
        if (b && b === true) {
            this.auo.shift();
            this.qgq--
        } else {
            this.auo.pop()
        }
    };
    this.fqq = function () {
        return this.auo.length
    };
    this.opq = function (e, c, b) {
        var d = (this.parent.don.xrl === false) ? c.noi : (this.parent.hvx === neg.don.pud) ? c.kib : c.cvs;
        if (this.parent.ict === false) {
            this.cqr.pbt("return", this.iku(e.iyz, this.parent.language.ret, (this.parent.don.hkx === false) ? b : this.parent.uhx.xzk("btn_re"), this.fri, (this.parent.lwq.yxz) ? this.parent.lwq.yxz : null, e.krb, d), ["buttons"]);
            this.cqr.pbt("page", this.iku(e.stm, (this.qgq + 1) + "/" + this.auo.length, b, this.cgq, null, e.krb, d), ["buttons"]);
            this.cqr.pbt("prev", this.iku(e.ubv, this.parent.language.tug, (this.parent.don.hkx === false) ? b : this.parent.uhx.xzk("btn_pr"), this.ixq, (this.parent.lwq.qeb) ? this.parent.lwq.qeb : null, e.krb, d), ["buttons"]);
            this.cqr.pbt("next", this.iku(e.zpd, this.parent.language.tng, (this.parent.don.hkx === false) ? b : this.parent.uhx.xzk("btn_ne"), this.cgq, (this.parent.lwq.bnj) ? this.parent.lwq.bnj : null, e.krb, d), ["buttons"])
        }
    };
    this.iku = function (g, k, b, j, d, f, e) {
        var c = new skk();
        c.dcf(g, this.context2D, null, b, null, k);
        c.parent = this;
        c.jht = j;
        c.mwg(f);
        c.gzv(e);
        if (d) {
            c.opa = d.xfh
        }
        return c
    };
    this.qay = function (l, j, m, e) {
        if (!this.cxw() || !this.parent.ydx()) {
            return
        }
        var b = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = null,
            g = this.cqr.ydk("buttons"),
            d = null;
        if (this.parent.don.xrl === false) {
            d = this.parent.uhx.xzk("btn_back")
        } else {
            if (this.parent.hvx === neg.don.pud) {
                d = (this.parent.uhx.xzk("h_right" + this.qgq) != null) ? this.parent.uhx.xzk("h_right" + this.qgq) : this.parent.uhx.xzk("h_right")
            } else {
                d = (this.parent.uhx.xzk("h_left" + this.qgq) != null) ? this.parent.uhx.xzk("h_left" + this.qgq) : this.parent.uhx.xzk("h_left")
            }
        }
        n.save();
        if (b) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        if (this.qgq >= 0 && this.qgq < this.auo.length) {
            this.auo[this.qgq].qay()
        }
        if (d) {
            k = n.createLinearGradient(this.hsa.x, this.hsa.y, this.hsa.x + this.hsa.width, this.hsa.y);
            k.addColorStop(0.2, this.xab);
            k.addColorStop(1, this.syb);
            n.fillStyle = k;
            n.save();
            if (this.parent.don.xrl === false) {
                if (this.parent.hvx === neg.don.wso) {
                    n.translate(this.hsa.width / 2, this.hsa.height / 2);
                    n.rotate(Math.PI);
                    n.translate(-this.hsa.width / 2, -this.hsa.height / 2)
                }
                n.fillRect(this.hsa.x, this.hsa.y, this.hsa.width, this.hsa.height)
            }
            n.drawImage(d, this.hsa.x, this.hsa.y, this.hsa.width, this.hsa.height);
            n.restore()
        } else {
            if (this.ufl != null) {
                n.fillStyle = this.ufl;
                n.fillRect(this.hsa.x, this.hsa.y, this.hsa.width, this.hsa.height)
            }
        }
        for (var c = 0, f = g.length; c < f; c++) {
            g[c].qay()
        }
        n.restore();
        if (this.mff && this.yzc) {
            if (b) {
                this.mff.drawImage(this.yzc, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.mff.drawImage(this.yzc, this.x, this.y)
            }
        }
    };
    this.olr = function (f, g) {
        var e = this.cqr.dgc("page"),
            c = this.cqr.dgc("return"),
            b = this.cqr.dgc("next"),
            d = this.cqr.dgc("prev");
        if (e != null) {
            e.rqq((this.qgq + 1) + "/" + this.auo.length)
        }
        if (c != null) {
            c.wmg(f)
        }
        if (b != null && d != null && e != null) {
            if (f) {
                if (this.auo.length > 1) {
                    b.wmg(f);
                    d.wmg(f);
                    e.wmg(f)
                } else {
                    b.wmg(false);
                    d.wmg(false);
                    e.wmg(false)
                }
            } else {
                b.wmg(f);
                d.wmg(f);
                e.wmg(f)
            }
        }
        if (g && g === true) {
            this.qay()
        }
    };
    this.jog = function () {
        this.qgq = 0;
        this.olr(true);
        this.wmg(true, true)
    };
    this.crq = function () {
        this.olr(false);
        this.wmg(false, true)
    };
    this.sps = function () {
        var d = this.cqr.dgc("page"),
            b = this.cqr.dgc("next"),
            c = this.cqr.dgc("prev");
        this.qgq = (this.qgq < this.auo.length) ? this.qgq : this.auo.length - 1;
        this.qgq = (this.qgq < 0) ? 0 : this.qgq;
        d.rqq((this.qgq + 1) + "/" + this.auo.length, true);
        if (this.auo.length == 1) {
            b.wmg(false);
            c.wmg(false);
            d.wmg(false)
        } else {
            b.wmg(true);
            c.wmg(true);
            d.wmg(true)
        }
    };
    this.whl = function (c) {
        var e = this.cqr.ydk("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            e[d].iwc(c)
        }
    };
    this.fri = function () {
        a.parent.bih()
    };
    this.cgq = function () {
        var b = a.cqr.dgc("page");
        if (a.qgq < a.auo.length - 1) {
            a.qgq++
        } else {
            a.qgq = 0
        }
        if (b) {
            b.rqq((a.qgq + 1) + "/" + a.auo.length, false)
        }
        a.qay()
    };
    this.ixq = function () {
        var b = a.cqr.dgc("page");
        if (a.qgq > 0) {
            a.qgq--
        } else {
            a.qgq = a.auo.length - 1
        }
        if (b) {
            b.rqq((a.qgq + 1) + "/" + a.auo.length, false)
        }
        a.qay()
    }
}
cmr.prototype = new rom;

function vxn() {
    this.hvf = new Image();
    this.ktp = null;
    this.jyd = [];
    this.jnw = [];
    this.iat = null;
    this.qcz = null;
    this.uyq = "bold";
    this.djr = null;
    this.apc = null;
    this.whx = null;
    this.rgf = 0;
    this.lqy = [];
    this.gah = null;
    this.bnn = 40;
    this.cef = 18;
    this.gdr = 1;
    this.dcf = function (b, d, c, a) {
        this.hvf = a;
        this.jyd = [];
        this.lqy = [];
        vxn.prototype.dcf.call(this, b, d, c)
    };
    this.mwg = function (a) {
        try {
            this.gah = a.iht;
            this.lqy = a.lrv;
            this.cef = a.fontSize;
            this.bnn = a.yjs;
            this.gdr = a.lineWidth
        } catch (b) {
            console.error(b)
        }
    };
    this.gzv = function (a) {
        try {
            this.iat = a.yuw;
            this.qcz = a.font;
            this.uyq = a.njm;
            this.djr = a.wvz;
            this.apc = a.txr;
            this.whx = a.clo
        } catch (b) {
            console.error(b)
        }
    };
    this.qay = function () {
        if (!this.cxw()) {
            return
        }
        var b = this.context2D;
        b.save();
        b.fillStyle = this.apc;
        if (this.djr) {
            b.strokeStyle = this.djr
        }
        b.lineJoin = "round";
        b.lineCap = "round";
        b.lineWidth = this.gdr;
        b.font = this.uyq + " " + this.cef + "px " + this.qcz;
        b.textBaseline = "bottom";
        b.textAlign = "center";
        b.drawImage(this.hvf, 0, 0);
        if ((this.height - this.hvf.height) > 0) {
            var a = this.parent.hsa;
            b.drawImage(this.hvf, a.x, a.y, a.width, this.hvf.height - a.y, a.x, a.y, a.width, a.height)
        }
        if (this.ktp && this.gah) {
            neg.tlv.rnq(b, this.ktp, this.whx, this.gah.x, this.gah.y, this.gah.width, this.gah.height, this.iat, this.bnn, this.uyq)
        }
        for (var c = 0; c < this.jyd.length; c++) {
            this.jus(this.jyd[c], this.lqy[c], this.cef, this.qcz)
        }
        b.restore();
        if (this.mff && this.yzc) {
            this.mff.drawImage(this.yzc, this.x, this.y)
        }
    };
    this.ypl = function (j, f, g, d) {
        var b = this.context2D,
            c = 0;
        this.jnw = [];
        b.save();
        b.font = this.uyq + " " + g + "px " + d;
        this.aty(b, g, j, f, d);
        for (var e = 0, a = this.jnw.length; e < a; e++) {
            c = (f.height + this.rgf) / (this.jnw.length + 1) * (e + 1);
            b.fillText(this.jnw[e], (f.x), f.y + c);
            if (this.djr != null && b.lineWidth >= 1) {
                b.strokeText(this.jnw[e], (f.x), f.y + c)
            }
        }
        b.restore()
    };
    this.jus = function (g, e, f, c) {
        var a = this.context2D,
            b = 0;
        this.jnw = [];
        a.save();
        a.font = this.uyq + " " + f + "px " + c;
        this.aty(a, f, g, e, c);
        for (var d = 0; d < this.jnw.length; d++) {
            b = (e.height + this.rgf) / (this.jnw.length + 1) * (d + 1);
            a.fillText(this.jnw[d], (e.x + e.width / 2), e.y + b);
            if (this.djr != null && a.lineWidth >= 1) {
                a.strokeText(this.jnw[d], (e.x + e.width / 2), e.y + b)
            }
        }
        a.restore()
    };
    this.aty = function (m, o, l, g, b) {
        var a = 1,
            k = 0,
            j = "",
            f = 0,
            d = 0,
            c = 0,
            n = 0;
        n = m.measureText(l).width / g.width;
        n = (n >= Math.round(n)) ? Math.round(n) + 1 : Math.round(n);
        this.rgf = o;
        if (this.rgf * n > g.height) {
            a = g.height / (this.rgf * n);
            this.rgf = Math.round(a * this.rgf) - 1;
            m.font = this.uyq + " " + this.rgf + "px " + b;
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
                this.jnw[d] = l.substring(c, l.length)
            } else {
                if (l.charAt(e) == "|") {
                    this.jnw[d] = l.substring(c, e);
                    d++;
                    c = e + 1;
                    j = l.substring(f + 1, e)
                } else {
                    if (k >= g.width) {
                        this.jnw[d] = l.substring(c, f);
                        d++;
                        c = f + 1;
                        j = l.substring(f + 1, e)
                    }
                }
            }
        }
    }
}
vxn.prototype = new rom;

function oer() {
    var a = this;
    this.hvf = new Image();
    this.rde = "";
    this.orn = "";
    this.svv = -1;
    this.zjk = 0;
    this.zlv = 0;
    this.ien = 5000;
    this.qcz = null;
    this.uyq = "bold";
    this.apc = null;
    this.ufl = null;
    this.ued = null;
    this.dcx = 0;
    this.xps = 0;
    this.rxn = 0;
    this.fyp = 0;
    this.dqb = 0;
    this.cef = 0;
    this.cdn = null;
    this.wjf = 0;
    this.ghr = [];
    this.gnz = 0;
    this.kqq = true;
    this.mcg = 0;
    this.mwg = function (b) {
        try {
            this.cef = b.fontSize;
            this.dqb = b.dhm;
            this.dcx = b.phq;
            this.xps = b.cxx;
            this.rxn = b.fms;
            this.fyp = b.mmg
        } catch (c) {
            console.error(c)
        }
    };
    this.gzv = function (b) {
        try {
            this.qcz = b.font;
            this.uyq = b.njm;
            this.ufl = b.backgroundColor;
            this.apc = b.txr;
            this.ued = b.borderColor
        } catch (c) {
            console.error(c)
        }
    };
    this.taw = function (e, c, d, b) {
        this.rde = e;
        this.orn = c;
        this.svv = d;
        this.zjk = b;
        this.kqq = true;
        clearTimeout(this.mcg);
        if (this.cxw() === true) {
            this.parent.qay(this.x, this.y, this.width, this.height)
        }
    };
    this.fuh = function (b, c) {
        this.rde = b;
        this.orn = undefined;
        this.kqq = c;
        if (this.kqq) {
            clearTimeout(this.mcg)
        }
        if (this.cxw() === true) {
            this.parent.qay(this.x, this.y, this.width, this.height)
        }
    };
    this.dqs = function () {
        this.rde = "";
        this.orn = undefined;
        this.kqq = true;
        clearTimeout(this.mcg);
        if (this.cxw() === true) {
            this.parent.qay(this.x, this.y, this.width, this.height)
        }
    };
    this.rqt = function (b, c) {
        this.wjf = 0;
        this.gnz = b;
        this.kqq = false;
        if (c && c > 0) {
            this.mcg = setTimeout(this.oio, c)
        } else {
            this.mcg = setTimeout(this.oio, this.ien)
        }
    };
    this.fhg = function (b) {
        this.wjf = 0;
        this.gnz = b;
        if (this.kqq) {
            this.fuh(this.ghr[this.gnz][this.wjf], false)
        }
        this.kqq = false;
        this.mcg = setTimeout(this.oio, this.ien)
    };
    this.tyk = function () {
        this.kqq = false;
        this.mcg = setTimeout(this.oio, this.ien)
    };
    this.pbz = function () {
        this.kqq = true;
        clearTimeout(this.mcg)
    };
    this.kka = function () {
        return this.kqq
    };
    this.oio = function () {
        if (!a.kqq) {
            a.wjf = (a.ghr[a.gnz][a.wjf + 1] != undefined) ? a.wjf + 1 : 0;
            a.mcg = setTimeout(a.oio, a.ien);
            a.fuh(a.ghr[a.gnz][a.wjf], a.kqq)
        }
    };
    this.byr = function (b) {
        this.ghr[b] = []
    };
    this.fzo = function (d, b) {
        for (var c = 0; c < d.length; c++) {
            this.ghr[b][c] = d[c]
        }
    };
    this.zxt = function (b) {
        this.cdn = b
    };
    this.qay = function () {
        if (!this.cxw()) {
            return
        }
        var o = this.context2D,
            m = this.cef,
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
            z = 0,
            t = 0,
            f = 1,
            r = 0,
            q = (this.ued && this.fyp) ? this.rxn + this.fyp : this.rxn;
        o.save();
        if (this.ufl) {
            neg.tlv.qic(o, this.x, this.y, this.width, this.height, this.dcx, this.ufl, this.ued, this.fyp)
        } else {
            if (this.cdn) {
                o.putImageData(this.cdn, this.x, this.y)
            }
        }
        o.lineJoin = "round";
        o.lineCap = "round";
        o.fillStyle = this.apc;
        o.font = this.uyq + " " + m + "px " + this.qcz;
        o.textBaseline = "bottom";
        o.textAlign = "center";
        l = o.measureText(this.rde).width;
        b += l;
        n = o.measureText("WW").width;
        if (this.orn != undefined && this.svv >= 0) {
            j = o.measureText(this.orn).width;
            b += j;
            b += this.zjk * (this.hvf.width + this.xps);
            if (this.zjk % 2 != 0) {
                s = this.x + (this.width) / 2 - (this.zjk / 2) * (this.hvf.width + this.xps);
                x = s - n;
                e = s + (this.zjk) * (this.hvf.width + this.xps) + n
            } else {
                s = this.x + (this.width) / 2 - (this.zjk / 2) * (this.hvf.width) - (this.zjk - 1) / 2 * this.xps;
                x = s - n;
                e = s + (this.zjk) * (this.hvf.width) + (this.zjk - 1) * this.xps + n
            }
            for (var u = 0; u < this.zjk; u++) {
                o.drawImage(this.hvf, 0, this.zlv * this.svv, this.hvf.width, this.zlv, s + (u * (this.xps + this.hvf.width)), this.y + ((this.height - this.zlv) / 2), this.hvf.width, this.zlv)
            }
            o.textAlign = "right";
            o.fillText(this.rde, x, this.y + m + this.dqb);
            o.textAlign = "left";
            o.fillText(this.orn, e, this.y + m + this.dqb)
        } else {
            if (this.rde != undefined) {
                do {
                    if (g.length > 1) {
                        m -= 2;
                        o.font = this.uyq + " " + m + "px " + this.qcz
                    }
                    g = [];
                    d = "";
                    v = 0;
                    z = 0;
                    t = 0;
                    for (var p = t; p < this.rde.length; p++) {
                        d += this.rde.charAt(p);
                        k = o.measureText(d).width;
                        if ((this.rde.charAt(p) == " ") || (this.rde.charAt(p) == "|")) {
                            v = p
                        }
                        if (p == this.rde.length - 1) {
                            g[z] = this.rde.substring(t, this.rde.length)
                        } else {
                            if (this.rde.charAt(p) == "|") {
                                g[z] = this.rde.substring(t, v);
                                z++;
                                t = v + 1;
                                d = this.rde.substring(v + 1, p)
                            } else {
                                if (k >= this.width - 2 * q) {
                                    g[z] = this.rde.substring(t, v);
                                    z++;
                                    t = v + 1;
                                    d = this.rde.substring(v + 1, p)
                                }
                            }
                        }
                    }
                } while (g.length > 2);
                if (g.length > 1 && m == this.cef) {
                    o.font = this.uyq + " " + (m - 3) + "px " + this.qcz;
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
oer.prototype = new rom;

function wtf() {
    this.czs = null;
    this.jcb = null;
    this.ljt = null;
    this.cmm = false;
    this.pjs = false;
    this.baq = true;
    this.odw = false;
    this.daq = false;
    this.aby = 0;
    this.ulj = 0;
    this.uqz = 0;
    this.omc = "";
    this.njf = "";
    this.xab = null;
    this.syb = null;
    this.qcz = "arial";
    this.uyq = "bold";
    this.klu = "arial";
    this.iff = "rgb(0,0,200)";
    this.fli = "rgb(255,255,255)";
    this.fut = "rgb(0,0,150)";
    this.ufl = "rgb(220,240,255)";
    this.aso = "rgb(130,220,255)";
    this.hiu = "rgb(130,190,255)";
    this.apc = "rgb(255,255,255)";
    this.jic = "rgb(130,190,255)";
    this.ohn = "rgb(100,160,255)";
    this.rfo = "rgb(255,255,255)";
    this.hsa = new flw();
    this.gah = null;
    this.fzr = null;
    this.cwl = null;
    this.mit = null;
    this.ats = null;
    this.ejr = null;
    this.wsf = null;
    this.thw = null;
    this.fyp = 2;
    this.aar = 3;
    this.hhw = 10;
    this.dqb = 3;
    this.ujo = 5;
    this.dac = 36;
    this.cef = 30;
    this.ogh = 22;
    this.dcf = function (a, c, b) {
        wtf.prototype.dcf.call(this, a, c, b);
        this.odw = neg.epl.value37
    };
    this.dxu = function (b) {
        try {
            var a = (neg.epl.value37) ? b.hqr : b.pnf;
            this.gah = b.iht;
            this.fzr = b.pbr;
            this.cwl = b.xxn;
            this.mit = b.gbv;
            this.ats = b.yvy;
            this.ejr = b.zjp;
            this.hsa = b.zrh;
            this.dac = b.fhd;
            this.cef = b.fontSize;
            this.ogh = b.grt;
            this.dqb = b.dhm;
            this.ujo = b.wkz;
            this.fyp = b.mmg;
            this.aar = b.yvm;
            this.hhw = b.one;
            if (neg.epl.value36) {
                this.njf = this.parent.vbj(this.parent.language.uhj)
            } else {
                if (neg.epl.value37) {
                    this.njf = this.parent.vbj(this.parent.language.wan)
                }
            }
            this.czs = [];
            this.jcb = this.iku(a.eed, this.parent.language.ret, this.parent.lal, (this.parent.don.hkx === false) ? this.parent.uhx.xzk("btn") : this.parent.uhx.xzk("btn_re"), b.krb);
            this.czs.push(this.jcb);
            if (neg.epl.value37) {
                this.ljt = this.iku(a.iyz, this.parent.language.xyp, this.parent.aue, (this.parent.don.hkx === false) ? this.parent.uhx.xzk("btn") : this.parent.uhx.xzk("btn_e"), b.krb);
                this.czs.push(this.ljt)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.mwg = function (b) {
        try {
            var a = (neg.epl.value37) ? b.hqr : b.pnf;
            this.gah = b.iht;
            this.fzr = b.pbr;
            this.cwl = b.xxn;
            this.mit = b.gbv;
            this.ats = b.yvy;
            this.ejr = b.zjp;
            this.hsa = b.zrh;
            if (this.jcb) {
                this.jcb.pxx(a.eed);
                this.jcb.mwg(b.krb)
            }
            if (this.ljt) {
                this.ljt.pxx(a.iyz);
                this.ljt.mwg(b.krb)
            }
            this.dac = b.fhd;
            this.cef = b.fontSize;
            this.ogh = b.grt;
            this.dqb = b.dhm;
            this.ujo = b.wkz;
            this.fyp = b.mmg;
            this.aar = b.yvm;
            this.hhw = b.one
        } catch (c) {
            console.error(c)
        }
    };
    this.gzv = function (c) {
        try {
            this.qcz = c.font;
            this.uyq = c.njm;
            this.iff = c.ufj;
            this.fli = c.dxy;
            this.fut = c.ein;
            this.ufl = c.backgroundColor;
            this.aso = c.zdx;
            this.hiu = c.ikn;
            this.apc = c.txr;
            this.jic = c.tjo;
            this.ohn = c.fyj;
            this.rfo = c.qmp;
            this.xab = c.kxq;
            this.syb = c.nfa;
            for (var b = 0, a = this.czs.length; b < a; b++) {
                this.czs[b].gzv((this.parent.don.xrl === true) ? c.wxh : c.noi)
            }
        } catch (d) {
            console.error(d)
        }
    };
    this.jgs = function (d, k) {
        var c = d - this.x,
            g = k - this.y;
        for (var f = 0, b = this.czs.length; f < b; f++) {
            var a = this.czs[f];
            if (c >= a.x && c <= a.x + a.width && g >= a.y && g <= a.y + a.height && a.cxw() === true) {
                if (a.wtk() === true && a.noy() === false && this.baq) {
                    a.bso(true, true);
                    this.parent.uhx.yiv("btn");
                    this.parent.uhx.onc("btn");
                    a.jht();
                    for (var e = 0; e < b; e++) {
                        this.czs[e].ixm(true)
                    }
                    return true
                }
            }
        }
        if (c >= this.ejr.x && c <= this.ejr.x + this.ejr.width && g >= this.ejr.y && g <= this.ejr.y + this.ejr.height && this.odw && this.pjs) {
            this.uym()
        }
        return true
    };
    this.mqw = function () {};
    this.gor = function () {};
    this.mnj = function () {};
    this.iku = function (d, f, e, a, c) {
        var b = new skk();
        b.dcf(d, this.context2D, null, a, null, f);
        b.parent = this;
        b.jht = e;
        b.mwg(c);
        return b
    };
    this.whl = function (c) {
        this.pjs = c;
        for (var b = 0, a = this.czs.length; b < a; b++) {
            this.czs[b].iwc(c)
        }
    };
    this.uym = function () {
        this.baq = !this.baq;
        this.parent.qay()
    };
    this.elv = function (d, a, c, b) {
        this.daq = false;
        this.tql = true;
        this.omc = this.sfl(b);
        this.aby = d;
        this.ulj = a;
        this.uqz = c;
        if (this.cxw()) {
            this.whl(true);
            this.qay()
        }
    };
    this.sfl = function (b) {
        var d = Math.floor(b / 3600000);
        b = b - d * 3600000;
        var a = Math.floor(b / 60000);
        b = b - a * 60000;
        var c = Math.floor(b / 1000);
        return this.clh(d) + ":" + this.clh(a) + ":" + this.clh(c)
    };
    this.clh = function (a) {
        if (a < 10) {
            return "0" + a
        }
        return a
    };
    this.oqn = function (a, b) {
        this.daq = a;
        if (b && b === true) {
            this.qay()
        }
    };
    this.wmg = function (a, b) {
        this.tql = false;
        if (neg.epl.value37) {
            this.baq = false
        }
        this.oqn(a, false);
        wtf.prototype.wmg.call(this, a, b)
    };
    this.qay = function (j, f, k, d) {
        if (!this.cxw() || !this.parent.ydx()) {
            return
        }
        var a = (j != null && f != null && k != null && d != null),
            g = null,
            l = this.context2D,
            c = this.parent.uhx.xzk("btn_back");
        l.save();
        if (a) {
            l.beginPath();
            l.rect(j, f, k, d);
            l.closePath();
            l.clip()
        }
        l.fillStyle = this.ufl;
        l.fillRect(0, 0, this.width, this.height);
        if (c) {
            g = l.createLinearGradient(this.hsa.x, this.hsa.y, this.hsa.x + this.hsa.width, this.hsa.y);
            g.addColorStop(0.2, this.xab);
            g.addColorStop(1, this.syb);
            l.fillStyle = g;
            l.save();
            if (this.parent.hvx === neg.don.wso) {
                l.translate(this.hsa.width / 2, this.hsa.height / 2);
                l.rotate(Math.PI);
                l.translate(-this.hsa.width / 2, -this.hsa.height / 2)
            }
            l.fillRect(this.hsa.x, this.hsa.y, this.hsa.width, this.hsa.height);
            l.drawImage(c, this.hsa.x, this.hsa.y, this.hsa.width, this.hsa.height);
            l.restore()
        } else {
            if (this.parent.don.xrl === true) {
                neg.tlv.hmu(l, this.hsa.x, this.hsa.y, this.hsa.width, this.hsa.height, this.xab, 1)
            }
        }
        neg.tlv.qic(l, this.gah.x, this.gah.y, this.gah.width, this.gah.height, 0, this.aso);
        neg.tlv.rnq(l, this.njf, this.apc, this.gah.x, this.gah.y + this.dqb, this.gah.width, this.gah.height, this.qcz, this.dac, this.uyq);
        neg.tlv.qic(l, this.fzr.x, this.fzr.y, this.fzr.width, this.fzr.height, 0, this.aso);
        if (neg.epl.value36) {
            neg.tlv.udc(l, this.parent.vbj(this.parent.language.gms), this.apc, this.fzr.x, this.fzr.y + this.dqb, this.fzr.width, this.fzr.height, this.qcz, this.cef, this.uyq, this.ujo)
        } else {
            if (neg.epl.value37) {
                neg.tlv.udc(l, this.parent.vbj(this.parent.language.nlk), this.apc, this.fzr.x, this.fzr.y + this.dqb, this.fzr.width, this.fzr.height, this.qcz, this.cef, this.uyq, this.ujo)
            }
        }
        neg.tlv.qic(l, this.cwl.x, this.cwl.y, this.cwl.width, this.cwl.height, 0, this.hiu);
        neg.tlv.udc(l, this.parent.vbj(this.parent.language.ijn), this.apc, this.cwl.x, this.cwl.y + this.dqb, this.cwl.width, this.cwl.height, this.qcz, this.cef, this.uyq, this.ujo);
        neg.tlv.qic(l, this.mit.x, this.mit.y, this.mit.width, this.mit.height, 0, this.aso);
        neg.tlv.udc(l, this.parent.vbj(this.parent.language.tce), this.apc, this.mit.x, this.mit.y + this.dqb, this.mit.width, this.mit.height, this.qcz, this.cef, this.uyq, this.ujo);
        if (this.odw) {
            this.qfo(l)
        }
        if (this.tql) {
            if (neg.epl.value36) {
                neg.tlv.nrf(l, this.aby, this.apc, this.fzr.x, this.fzr.y + this.dqb, this.fzr.width, this.fzr.height, this.qcz, this.cef, this.uyq, this.ujo)
            } else {
                if (neg.epl.value37) {
                    neg.tlv.nrf(l, this.omc, this.apc, this.fzr.x, this.fzr.y + this.dqb, this.fzr.width, this.fzr.height, this.qcz, this.cef, this.uyq, this.ujo)
                }
            }
            neg.tlv.nrf(l, this.parent.jea(this.ulj), this.apc, this.cwl.x, this.cwl.y + this.dqb, this.cwl.width, this.cwl.height, this.qcz, this.cef, this.uyq, this.ujo);
            neg.tlv.nrf(l, this.parent.jea(this.uqz), this.apc, this.mit.x, this.mit.y + this.dqb, this.mit.width, this.mit.height, this.qcz, this.cef, this.uyq, this.ujo)
        }
        for (var b = 0, e = this.czs.length; b < e; b++) {
            this.czs[b].qay()
        }
        if (this.daq) {
            neg.tlv.cxu(l, this.ats.x, this.ats.y, this.ats.width, this.ats.height, this.aar, this.iff, 0.3, this.fut, this.fyp, 1);
            neg.tlv.rnq(l, this.parent.vbj(this.parent.language.gdy), this.fli, this.ats.x, this.ats.y, this.ats.width, this.ats.height, this.qcz, this.cef, this.uyq)
        }
        l.restore();
        if (this.mff && this.yzc) {
            if (a) {
                this.mff.drawImage(this.yzc, j, f, k, d, this.x + j, this.y + f, k, d)
            } else {
                this.mff.drawImage(this.yzc, this.x, this.y)
            }
        }
    };
    this.qfo = function (b) {
        var c = Math.round(this.ejr.height / 2),
            a = Math.round(this.ejr.x + c),
            d = Math.round(this.ejr.y + c / 2);
        b.save();
        neg.tlv.qic(b, this.ejr.x, this.ejr.y, this.ejr.width, this.ejr.height, this.hhw, this.jic, this.ohn, this.fyp);
        neg.tlv.rnq(b, this.parent.language.fdn, this.apc, this.ejr.x + this.ejr.height, this.ejr.y, this.ejr.width - this.ejr.height, this.ejr.height, this.qcz, this.ogh, this.uyq);
        neg.tlv.hmu(b, a, d, c, c, null, 0, this.rfo, this.fyp, 1);
        if (this.baq) {
            neg.tlv.hmu(b, a + c / 4, d + c / 4, c / 2, c / 2, this.rfo, 1)
        }
        b.restore()
    }
}
wtf.prototype = new rom;

function niv() {
    var a = this;
    this.mpp = function () {
        a.bsh = false
    };
    this.qay = function () {
        if (!this.cxw()) {
            return
        }
        var b = this.context2D;
        b.save();
        if (this.hvf != null) {
            b.drawImage(this.hvf, 0, 0, this.hvf.width, this.hvf.height, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
niv.prototype = new dpm;

function dvm() {
    this.ktp = "";
    this.bsa = "";
    this.hvf = null;
    this.iat = "sans-serif";
    this.frl = "sans-serif";
    this.uyq = "bold";
    this.whx = null;
    this.apc = null;
    this.ued = null;
    this.yqc = null;
    this.ufl = null;
    this.bnn = 16;
    this.wfw = 20;
    this.mjy = 0;
    this.nlm = 0;
    this.fyp = 2;
    this.rsi = 3;
    this.gsi = 3;
    this.jeb = 3;
    this.bcp = 3;
    this.dcf = function (a, e, b, d, c) {
        dvm.prototype.dcf.call(this, a, e, b);
        this.ktp = d;
        this.bsa = c
    };
    this.mwg = function (a) {
        try {
            this.bnn = a.yjs;
            this.wfw = a.ela;
            this.mjy = a.kjb;
            this.nlm = a.crc;
            this.fyp = a.mmg;
            this.rsi = a.ggn;
            this.gsi = a.opw;
            this.jeb = a.mus;
            this.bcp = a.fxp
        } catch (b) {
            console.error(b)
        }
    };
    this.gzv = function (a) {
        try {
            this.iat = a.yuw;
            this.frl = a.njk;
            this.uyq = a.njm;
            this.whx = a.clo;
            this.apc = a.txr;
            this.ued = a.borderColor;
            this.yqc = a.bhj;
            this.ufl = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.rqq = function (a, b) {
        this.bsa = a;
        if (b && b === true && this.context2D != null && this.cxw() === true) {
            this.parent.qay(this.x, this.y, this.width, this.height)
        }
    };
    this.eum = function (a, b) {
        this.ktp = a;
        if (b && b === true && this.context2D != null && this.cxw() === true) {
            this.parent.qay(this.x, this.y, this.width, this.height)
        }
    };
    this.qay = function () {
        if (!this.cxw()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.yqc) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.ued);
            b.addColorStop(1, this.yqc);
            neg.tlv.aat(a, this.x, this.y, this.width, this.height, this.rsi, this.gsi, this.jeb, this.bcp, this.ufl, 1, b, this.fyp, 1)
        } else {
            neg.tlv.aat(a, this.x, this.y, this.width, this.height, this.rsi, this.gsi, this.jeb, this.bcp, this.ufl, 1, this.ued, this.fyp, 1)
        }
        if (this.ktp != null) {
            neg.tlv.rnq(a, this.ktp, this.whx, this.x + this.fyp, this.y + this.mjy, this.width - 2 * this.fyp, this.height, this.iat, this.bnn, this.uyq)
        }
        if (this.bsa != null) {
            if (this.ktp != null) {
                neg.tlv.rnq(a, this.bsa, this.apc, this.x + this.fyp, this.y + this.nlm, this.width - 2 * this.fyp, this.height, this.frl, this.wfw, this.uyq)
            } else {
                neg.tlv.rnq(a, this.bsa, this.apc, this.x + this.fyp, this.y + this.fyp, this.width - 2 * this.fyp, this.height, this.frl, this.wfw, this.uyq)
            }
        }
        if (this.hvf) {
            a.drawImage(this.hvf, 0, 0, this.hvf.width, this.hvf.height, this.x + this.fyp, this.y + this.fyp, this.width - 2 * this.fyp, this.height - 2 * this.fyp)
        }
        a.restore();
        if (this.mff && this.yzc) {
            this.mff.drawImage(this.yzc, this.x, this.y)
        }
    }
}
dvm.prototype = new rom;

function nvn() {
    var a = this;
    this.hvf = null;
    this.njf = "";
    this.jti = null;
    this.pjs = false;
    this.rgs = false;
    this.ynw = 0;
    this.rif = 0;
    this.zyr = 150;
    this.dnq = 100;
    this.swc = 0;
    this.rgo = 3;
    this.zvv = 92;
    this.snu = 0;
    this.djb = 0;
    this.iat = "sans-serif";
    this.mhr = "sans-serif";
    this.uyq = "";
    this.whx = null;
    this.chk = null;
    this.qaf = null;
    this.fkd = null;
    this.dbs = null;
    this.ued = null;
    this.yqc = null;
    this.ufl = null;
    this.pdw = null;
    this.hvk = null;
    this.fuj = null;
    this.fqu = null;
    this.xcw = null;
    this.gra = new flw();
    this.bnn = 0;
    this.pkt = 0;
    this.mjy = 0;
    this.uzx = 0;
    this.zkl = 0;
    this.fyp = 0;
    this.hbk = 0;
    this.elf = 0;
    this.mwg = function (b) {
        try {
            this.bnn = b.yjs;
            this.pkt = b.pie;
            this.mjy = b.kjb;
            this.uzx = b.ete;
            this.zkl = b.zub;
            this.fyp = b.mmg;
            this.hbk = b.tcc;
            this.elf = b.rhw;
            this.gra = b.igm;
            this.pwl()
        } catch (c) {
            console.error(c)
        }
    };
    this.gzv = function (b) {
        try {
            this.iat = b.yuw;
            this.mhr = b.nhl;
            this.uyq = b.njm;
            this.whx = b.clo;
            this.chk = b.rvo;
            this.qaf = b.xyk;
            this.fkd = b.myr;
            this.dbs = b.sdd;
            this.ued = b.borderColor;
            this.yqc = b.bhj;
            this.ufl = b.backgroundColor;
            this.mgu = b.tkk;
            this.pdw = b.hdv;
            this.pwl()
        } catch (c) {
            console.error(c)
        }
    };
    this.nvl = function (b) {
        try {
            this.whx = b.clo;
            this.chk = b.rvo;
            this.qaf = b.xyk;
            this.fkd = b.myr;
            this.pwl()
        } catch (c) {
            console.error(c)
        }
    };
    this.yuv = function () {
        return {
            clo: this.whx,
            rvo: this.chk,
            xyk: this.qaf,
            myr: this.fkd
        }
    };
    this.pwl = function () {
        this.fqu = this.ufl;
        this.xcw = this.ued;
        this.hvk = this.whx;
        this.fuj = this.qaf;
        if (this.height > 0 && this.yqc) {
            this.xcw = this.context2D.createLinearGradient(this.width / 2, 0, this.width / 2, this.height);
            this.xcw.addColorStop(0, this.ued);
            this.xcw.addColorStop(1, this.yqc)
        }
        if (this.height > 0 && this.mgu) {
            this.fqu = this.context2D.createLinearGradient(this.width / 2, 0, this.width / 2, this.height);
            this.fqu.addColorStop(0, this.ufl);
            this.fqu.addColorStop(1, this.mgu)
        }
        if (this.bnn > 0 && this.chk) {
            this.hvk = this.context2D.createLinearGradient(this.width / 2, 0, this.width / 2, this.height / 2);
            this.hvk.addColorStop(0, this.whx);
            this.hvk.addColorStop(1, this.chk)
        }
        if (this.pkt > 0 && this.fkd) {
            this.fuj = this.context2D.createLinearGradient(this.width / 2, this.height / 2, this.width / 2, this.height);
            this.fuj.addColorStop(0, this.qaf);
            this.fuj.addColorStop(1, this.fkd)
        }
    };
    this.jgs = function (b, c) {
        if (b >= this.parent.don.tlo.cij.x && b <= this.parent.don.tlo.cij.x + this.parent.don.tlo.cij.width && c >= this.parent.don.tlo.cij.y && c <= this.parent.don.tlo.cij.y + this.parent.don.tlo.cij.height && this.cxw()) {
            if (this.pjs) {
                this.rgs = false;
                this.pjs = false;
                this.stop();
                this.acm()
            }
            return true
        }
        return false
    };
    this.ojq = function (b, c) {
        this.jti = b;
        if (c && c === true) {
            this.parent.qay(this.x, this.y, this.width, this.height)
        }
    };
    this.eum = function (b, c) {
        this.njf = b;
        if (c && c === true) {
            this.parent.qay(this.x, this.y, this.width, this.height)
        }
    };
    this.wyh = function () {
        return this.njf
    };
    this.start = function () {
        this.wmg(true);
        this.parent.qay();
        this.swc = new Date().getTime();
        this.rif = 0;
        this.djb = 0;
        this.snu = Math.floor((9 * this.jti) / (10 * this.zvv));
        this.rgs = true;
        this.pjs = false;
        this.parent.uhx.onc("jackpot");
        this.ezc()
    };
    this.ezc = function () {
        var b = 0,
            c = new Date().getTime();
        a.rif++;
        if (a.rif < a.zyr) {
            if (a.rif === a.rgo) {
                a.djb = Math.floor(a.jti / 10)
            } else {
                if (a.rif > a.rgo && a.rif < a.rgo + a.zvv) {
                    a.djb += a.snu
                } else {
                    if (a.rif == a.rgo + a.zvv) {
                        a.djb = a.jti
                    }
                }
            }
            a.qay();
            b = (a.rif * a.dnq - (c - a.swc));
            a.ynw = setTimeout(a.ezc, b)
        } else {
            a.parent.uhx.yiv("jackpot");
            if (!neg.epl.value76 || !neg.epl.value76.u) {
                a.rgs = false;
                a.stop();
                a.acm()
            } else {
                a.haj();
                a.pjs = true;
                a.zql()
            }
        }
    };
    this.zql = function () {
        var b = 0,
            c = new Date().getTime();
        a.rif++;
        a.qay();
        b = (a.rif * a.dnq - (c - a.swc));
        a.ynw = setTimeout(a.zql, b)
    };
    this.stop = function () {
        clearTimeout(this.ynw)
    };
    this.qay = function () {
        if (!this.cxw() || !this.parent.ydx()) {
            return
        }
        var b = this.context2D,
            c = (this.hbk === 0) ? this.fyp : 0;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        if (this.hvf) {
            if (this.rgs === true) {
                b.drawImage(this.hvf, (this.rif % 3) * this.hvf.width / 3, 0, this.hvf.width / 3, this.hvf.height, 0, 0, this.width, this.height)
            } else {
                b.drawImage(this.hvf, 0, 0, this.width, this.height)
            }
        } else {
            neg.tlv.aat(b, 0, -c, this.width, this.height, this.hbk, this.hbk, this.elf, this.elf, this.fqu, 1, this.xcw, this.fyp, 1);
            neg.tlv.qic(b, this.gra.x, this.gra.y, this.gra.width, this.gra.height, this.elf, this.pdw, 1)
        }
        if (this.njf != null) {
            neg.tlv.rnq(b, this.njf, this.hvk, this.zkl, this.mjy - c, this.width - 2 * this.zkl, this.height, this.iat, this.bnn, this.uyq)
        }
        if (this.rgs === true) {
            if (this.djb > 0) {
                neg.tlv.rnq(b, this.parent.nve(this.djb), this.fuj, this.zkl, this.uzx - c, this.width - 2 * this.zkl, this.height, this.mhr, this.pkt, this.uyq)
            }
        } else {
            if (this.jti != null) {
                neg.tlv.rnq(b, (this.jti > 0) ? this.parent.nve(this.jti) : 0, this.fuj, this.zkl, this.uzx - c, this.width - 2 * this.zkl, this.height, this.mhr, this.pkt, this.uyq)
            }
        }
        b.restore();
        if (this.mff && this.yzc) {
            this.mff.drawImage(this.yzc, this.x, this.y)
        }
    };
    this.acm = function () {};
    this.haj = function () {}
}
nvn.prototype = new rom;

function epk() {
    var a = this;
    this.zxk = null;
    this.uxf = [];
    this.sxz = null;
    this.kgw = null;
    this.jti = null;
    this.gzn = null;
    this.hig = null;
    this.pjs = false;
    this.rgs = false;
    this.ynw = 0;
    this.nzm = 0;
    this.dnq = 89;
    this.swc = 0;
    this.ren = [];
    this.mbw = 0;
    this.oyf = 0;
    this.xdf = 0;
    this.aze = 0;
    this.hqh = new flw();
    this.gra = new flw();
    this.yml = null;
    this.adu = 0;
    this.wwg = 0;
    this.dcf = function (b, d, c) {
        epk.prototype.dcf.call(this, b, d, c);
        this.gzn = document.createElement("canvas");
        this.hig = this.gzn.getContext("2d")
    };
    this.mwg = function (b) {
        try {
            this.yml = b.xfl;
            this.gra = b.igm;
            this.hqh = b.opp;
            this.adu = b.wzq;
            this.wwg = b.bnm;
            this.gzn.width = Math.round(this.gra.width);
            this.gzn.height = Math.round(this.gra.height)
        } catch (c) {
            console.error(c)
        }
    };
    this.ojq = function (l, j) {
        var m = this.hig,
            c = "",
            n = [],
            b = 0,
            d = 1,
            k = 0,
            f = 0;
        j = (j) ? j : 1;
        f = this.parent.qdz(l);
        for (var e = 0, g = f.length; e < g; e++) {
            c = f.charAt(e);
            c = c.replace(/\./g, "dt").replace(/\,/g, "cm").replace(/\ /g, "sp");
            n[e] = this.yml["_" + c];
            b += n[e].width
        }
        if ((b * j) > this.gzn.width) {
            d = (this.gzn.width / (b * j)).toString();
            d = Number(d.substring(0, (d.length > 5) ? 5 : d.length))
        } else {
            k = Math.floor((this.gzn.width - (b * j)) / 2);
            y = 0
        }
        m.save();
        m.clearRect(0, 0, this.gzn.width, this.gzn.height);
        for (var e = 0, g = n.length; e < g; e++) {
            if (n[e].width > 0 && n[e].height > 0) {
                m.drawImage(this.sxz, n[e].x, n[e].y, n[e].width, n[e].height, k * d, n[e].y * d * j + (this.gzn.height - n[e].height * d * j) / 2, n[e].width * d * j, n[e].height * d * j);
                k += n[e].width * j
            }
        }
        m.restore()
    };
    this.start = function () {
        this.wmg(true);
        this.parent.qay();
        this.swc = new Date().getTime();
        this.nzm = 0;
        this.rgs = true;
        this.pjs = false;
        this.ren.length = 0;
        for (var c = 0; c < 56; c++) {
            this.ren[c] = {
                scale: 1,
                jya: 1,
                y: this.y,
                x: this.x,
                hbw: 0,
                vwa: 0.5,
                tkx: 0
            }
        }
        for (var c = 0; c < 16; c++) {
            if (c <= 3) {
                this.ren[c].jya = Math.sin(Math.PI / 8 * (c + 1))
            }
            this.ren[c].y = this.y + this.adu * Math.cos(Math.PI / 32 * c);
            this.ren[c].x = this.x + this.wwg * Math.sin(Math.PI / 8 * c);
            this.ren[c].scale = Math.sin(Math.PI / 32 * c)
        }
        for (var c = 6, b = 1; b <= 10; c++, b++) {
            this.ren[c].vwa = 0.5 + 0.5 * Math.sin(Math.PI / 20 * b)
        }
        for (var c = 16, b = 1; b <= 40; c++, b++) {
            this.ren[c].vwa = 1 + 0.5 * Math.sin(Math.PI / 40 * b)
        }
        for (var c = 16, b = 0; c < this.ren.length; c++, b++) {
            this.ren[c].hbw = b;
            if (b >= this.uxf.length && b <= this.uxf.length + 6) {
                this.ren[c].tkx = Math.sin(Math.PI / 12 * (b - this.uxf.length))
            } else {
                if (b >= this.uxf.length + 6) {
                    this.ren[c].tkx = 1
                }
            }
        }
        for (var c = this.ren.length - 7, b = 0; c < this.ren.length; c++, b++) {
            this.ren[c].jya = Math.cos(Math.PI / 12 * b)
        }
        this.parent.uhx.onc("mystery_jackpot");
        this.ezc()
    };
    this.ezc = function () {
        var b = 0,
            c = new Date().getTime();
        a.nzm++;
        if (a.nzm < a.ren.length - 1) {
            a.mbw = Math.floor(a.width * a.ren[a.nzm].scale);
            a.oyf = Math.floor(a.height * a.ren[a.nzm].scale);
            a.xdf = Math.floor(a.gra.width * a.ren[a.nzm].vwa);
            a.aze = Math.floor(a.gra.height * a.ren[a.nzm].vwa);
            a.parent.qay();
            b = (a.nzm * a.dnq - (c - a.swc));
            a.ynw = setTimeout(a.ezc, b)
        } else {
            a.rgs = false;
            a.stop();
            a.acm()
        }
    };
    this.stop = function () {
        clearTimeout(this.ynw)
    };
    this.qay = function () {
        if (!this.cxw() || !this.parent.ydx()) {
            return
        }
        var c = this.context2D,
            b = (this.rgs) ? this.ren[this.nzm].x : this.x,
            f = (this.rgs) ? this.ren[this.nzm].y : this.y,
            d = (this.rgs) ? this.ren[this.nzm].jya : 1,
            e = (this.rgs) ? this.ren[this.nzm].hbw : 0;
        c.save();
        c.globalAlpha = d;
        c.clearRect(0, 0, this.width, this.height);
        if (e == 0) {
            c.drawImage(this.zxk, 0, 0, this.width, this.height)
        }
        if (e < this.uxf.length) {
            c.drawImage(this.uxf[e], 0, 0, this.width, this.height)
        } else {
            c.save();
            c.globalAlpha = d * this.ren[this.nzm].tkx;
            c.drawImage(this.kgw, this.hqh.x, this.hqh.y);
            c.restore()
        }
        if (this.gzn) {
            c.drawImage(this.gzn, this.gra.x + (this.gra.width - this.xdf) / 2, this.gra.y + (this.gra.height - this.aze) / 2, this.xdf, this.aze)
        }
        c.restore();
        if (this.mff && this.yzc) {
            this.mff.drawImage(this.yzc, b + (this.width - this.mbw) / 2, f + (this.height - this.oyf) / 2, this.mbw, this.oyf)
        }
    };
    this.acm = function () {}
}
epk.prototype = new rom;

function zgk() {
    this.hvf = new Image();
    this.bsa = "";
    this.rva = true;
    this.qcz = null;
    this.uyq = "bold";
    this.ntk = "red";
    this.bag = "orange";
    this.djr = "white";
    this.cef = 40;
    this.ujo = 0;
    this.dqb = 0;
    this.zkl = 0;
    this.ruj = 2;
    this.wfg = null;
    this.rfl = 0;
    this.hlg = 0;
    this.dcf = function (a, e, c, b, d) {
        zgk.prototype.dcf.call(this, a, e, c);
        this.hvf = b;
        this.bsa = d
    };
    this.mwg = function (a) {
        try {
            this.cef = a.fontSize;
            this.ujo = a.wkz;
            this.dqb = a.dhm;
            this.zkl = a.zub;
            this.ruj = a.srs
        } catch (b) {
            console.error(b)
        }
    };
    this.gzv = function (a) {
        try {
            this.qcz = a.font;
            this.uyq = a.njm;
            this.ntk = a.nnr;
            this.bag = a.efq;
            this.djr = a.wvz
        } catch (b) {
            console.error(b)
        }
    };
    this.rqq = function (a, b) {
        this.bsa = a;
        if (b && b === true && this.context2D != null) {
            this.wmg(true, true)
        }
    };
    this.elk = function (a, b) {
        this.bsa = a;
        this.rva = false;
        if (b && b === true && this.context2D != null) {
            this.wmg(true, true)
        }
    };
    this.wmg = function (a, b) {
        this.qau = a;
        if (b && b === true && this.context2D != null) {
            if (this.yzc == null && this.cxw()) {
                this.qay()
            } else {
                if (this.parent != null) {
                    this.parent.qay(this.x, this.y, this.width, this.height)
                }
            }
        }
    };
    this.wdu = function (a, b, c) {
        this.wfg = a;
        this.rfl = b;
        this.hlg = c
    };
    this.qay = function () {
        if (!this.cxw() || !this.parent.ydx()) {
            return
        }
        var b = this.context2D,
            c = null,
            a = (this.yzc != null) ? 0 : this.x,
            d = (this.yzc != null) ? 0 : this.y;
        b.save();
        if (this.yzc == null) {
            b.beginPath();
            b.rect(this.x, this.y, this.width, this.height);
            b.closePath();
            b.clip()
        }
        if (this.rva === true) {
            if (this.wfg != null) {
                b.drawImage(this.wfg, this.x + this.rfl, this.y + this.hlg, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            if (this.hvf != null) {
                b.drawImage(this.hvf, a, d)
            }
        }
        c = b.createLinearGradient(a + this.width / 2 + this.ujo, d, a + this.width / 2 + this.ujo, d + this.height);
        c.addColorStop(0, this.ntk);
        c.addColorStop(1, this.bag);
        neg.tlv.rnq(b, this.bsa, c, a + this.zkl + this.ujo, d + this.dqb, this.width - 2 * this.zkl, this.height, this.qcz, this.cef, this.uyq, this.djr, this.ruj);
        b.restore();
        if (this.mff && this.yzc) {
            this.mff.drawImage(this.yzc, this.x, this.y)
        }
    }
}
zgk.prototype = new rom;

function see() {
    var a = this;
    this.state = 0;
    this.jsj = 1;
    this.fxo = null;
    this.tha = null;
    this.yvx = null;
    this.jaa = "round";
    this.qcz = null;
    this.uyq = "bold";
    this.dno = "center";
    this.ufl = null;
    this.apc = null;
    this.rnp = 1;
    this.xcw = null;
    this.cef = 17;
    this.zkl = 2;
    this.dcx = 0;
    this.fyp = 1;
    this.vfw = 0;
    this.jkh = 0;
    this.dqp = 0;
    this.mwg = function (b) {
        try {
            this.cef = b.fontSize;
            this.zkl = b.zub;
            this.dcx = b.phq;
            this.fyp = b.mmg;
            this.dqp = b.xeq
        } catch (c) {
            console.error(c)
        }
    };
    this.gzv = function (b) {
        try {
            this.jaa = b.frz;
            this.qcz = b.font;
            this.uyq = b.njm;
            this.dno = b.textAlign;
            this.ufl = b.backgroundColor;
            this.apc = b.txr;
            this.rnp = b.mmz;
            if (b.borderColor && b.bhj) {
                this.xcw = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.xcw.addColorStop(0, b.borderColor);
                this.xcw.addColorStop(1, b.bhj)
            } else {
                this.xcw = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.yda = function () {
        return this.jaa
    };
    this.hxy = function (c, b) {
        this.state = c;
        this.jsj = b
    };
    this.uuq = function (b) {
        this.hvf = b;
        if (this.jaa === "round") {
            this.vfw = this.width / 2 - this.zkl
        }
        if (this.hvf) {
            this.jkh = Math.round(this.hvf.height / (2 * this.jsj))
        }
    };
    this.lbu = function (b) {
        this.state = (b < this.jsj) ? b : this.state
    };
    this.wag = function (b) {
        this.fxo = b
    };
    this.mpp = function () {
        a.bsh = false
    };
    this.mjs = function () {
        a.asm = false;
        if (a.cxw()) {
            a.parent.qay(a.x, a.y, a.width, a.height)
        }
    };
    this.qay = function () {
        if (!this.cxw()) {
            return
        }
        var l = this.context2D,
            e = (this.wtk()) ? this.rnp : this.rnp / 2,
            b = this.cef,
            d = null,
            c = 0,
            k = 0,
            j = 0,
            g = 0;
        l.save();
        if (this.hvf && this.jht) {
            if (!this.wtk()) {
                l.globalAlpha = e
            }
            if (this.jaa === "round") {
                neg.tlv.irs(l, this.x + this.width / 2, this.y + this.height / 2, this.vfw, this.ufl, e * this.rnp)
            } else {
                if (this.jaa === "rect") {
                    neg.tlv.cxu(l, this.x, this.y, this.width, this.height, this.dcx, this.ufl, e * this.rnp, this.xcw, this.fyp, e)
                }
            }
            if (this.ehn()) {
                if (this.jaa === "round") {
                    l.drawImage(this.hvf, 0, (this.state * 2 * this.jkh) + this.jkh, this.hvf.width, this.jkh, this.x, this.y, this.width, this.height)
                } else {
                    if (this.jaa === "rect") {
                        l.drawImage(this.hvf, 0, (this.state * 2 * this.jkh) + this.jkh, this.hvf.width, this.jkh, this.x, this.y, this.width, this.height)
                    }
                }
            } else {
                if (this.jaa === "round") {
                    l.drawImage(this.hvf, 0, (this.state * 2 * this.jkh), this.hvf.width, this.jkh, this.x, this.y, this.width, this.height)
                } else {
                    if (this.jaa === "rect") {
                        l.drawImage(this.hvf, 0, (this.state * 2 * this.jkh), this.hvf.width, this.jkh, this.x, this.y, this.width, this.height)
                    }
                }
            }
            if (this.bsa != null) {
                l.textAlign = this.dno;
                l.textBaseline = "bottom";
                l.font = this.uyq + " " + b + "px " + this.qcz;
                l.fillStyle = this.apc;
                d = this.bsa.split("|");
                j = 0;
                g = (this.dno === "center") ? this.x + this.width / 2 : (this.dno === "left") ? this.x + 2 * this.zkl : this.x + this.width - 2 * this.zkl;
                for (var f = 0; f < d.length; f++) {
                    j = (l.measureText(d[f]).width > j) ? l.measureText(d[f]).width : j
                }
                if (j > this.width - 2 * this.zkl) {
                    c = ((this.width - 2 * this.zkl) / j);
                    b = Math.round(c * b) - 1;
                    l.font = this.uyq + " " + b + "px " + this.qcz
                }
                if (b * d.length > this.dqp) {
                    c = ((this.dqp) / (b * d.length));
                    b = Math.round(c * b) - 1;
                    l.font = this.uyq + " " + b + "px " + this.qcz
                }
                k = (this.height - this.zkl - this.dqp) + (this.dqp - b * d.length) / 2;
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
see.prototype = new dpm;

function rwv() {
    var a = this;
    this.jaa = "rect";
    this.vtk = -1;
    this.qcz = null;
    this.uyq = "bold";
    this.ufl = null;
    this.mgu = null;
    this.uzb = null;
    this.ltn = null;
    this.ued = null;
    this.apc = null;
    this.yqw = null;
    this.dcx = 3;
    this.ujo = -2;
    this.dqb = 2;
    this.rxn = 6;
    this.cef = 26;
    this.fyp = 2;
    this.mwg = function (b) {
        try {
            this.cef = b.fontSize;
            this.ujo = b.wkz;
            this.dqb = b.dhm;
            this.rxn = b.fms;
            this.dcx = b.phq;
            this.fyp = b.mmg
        } catch (c) {
            console.error(c)
        }
    };
    this.gzv = function (b) {
        try {
            this.qcz = b.font;
            this.uyq = b.njm;
            this.ufl = b.backgroundColor;
            this.mgu = b.tkk;
            this.uzb = b.inh;
            this.ltn = b.iaq;
            this.ued = b.borderColor;
            this.apc = b.txr;
            this.yqw = b.lnf;
            this.jaa = b.frz;
            this.vtk = b.pqm
        } catch (c) {
            console.error(c)
        }
    };
    this.yda = function () {
        return this.jaa
    };
    this.mpp = function () {
        a.bsh = false
    };
    this.mjs = function () {
        a.asm = false;
        if (a.cxw()) {
            a.parent.qay(a.x, a.y, a.width, a.height)
        }
    };
    this.qay = function () {
        if (!this.cxw()) {
            return
        }
        var p = this.context2D,
            l = null,
            n = this.ufl,
            m = this.mgu,
            b = this.cef,
            f = null,
            d = 0,
            o = 0,
            c = 1,
            k = 0,
            e = (this.vtk == 0 || this.vtk == 3) ? this.dcx : 0;
        lt = (this.vtk == 1 || this.vtk == 3) ? this.dcx : 0;
        rb = (this.vtk == 0 || this.vtk == 2) ? this.dcx : 0;
        lb = (this.vtk == 1 || this.vtk == 2) ? this.dcx : 0;
        h = 0;
        p.save();
        p.lineJoin = "round";
        p.lineCap = "round";
        p.textAlign = "center";
        if (this.ehn()) {
            n = (this.uzb != null) ? this.uzb : n;
            m = (this.ltn != null) ? this.ltn : m
        }
        if (n != null) {
            if (m != null) {
                l = p.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                l.addColorStop(1, m);
                l.addColorStop(0, n);
                if (this.jaa === "rrect") {
                    neg.tlv.aat(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, l, 1, this.ued, this.fyp, 1)
                } else {
                    if (this.jaa === "rect") {
                        if (this.ued) {
                            neg.tlv.qic(p, this.x, this.y, this.width, this.height, this.dcx, l, this.ued, this.fyp)
                        } else {
                            neg.tlv.hmu(p, this.x, this.y, this.width, this.height, l, 1)
                        }
                    } else {
                        if (this.jaa === "triangle") {
                            neg.tlv.kxo(p, this.vtk, this.x, this.y, this.width, this.height, this.dcx, l, 1, this.ued, this.fyp, 1)
                        }
                    }
                }
            } else {
                if (this.jaa === "rrect") {
                    neg.tlv.aat(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, n, 1, this.ued, this.fyp, 1)
                } else {
                    if (this.jaa === "rect") {
                        if (this.ued) {
                            neg.tlv.qic(p, this.x, this.y, this.width, this.height, this.dcx, n, this.ued, this.fyp, 1)
                        } else {
                            neg.tlv.hmu(p, this.x, this.y, this.width, this.height, n, 1)
                        }
                    } else {
                        if (this.jaa === "triangle") {
                            neg.tlv.kxo(p, this.vtk, this.x, this.y, this.width, this.height, this.dcx, n, 1, this.ued, this.fyp, 1)
                        }
                    }
                }
            }
        }
        if (this.hvf != null) {
            h = this.height - 2 * this.rxn;
            p.drawImage(this.hvf, this.x + this.width / 2 - h / 2, this.y + this.rxn, h, h)
        }
        if (this.bsa != null) {
            p.textAlign = "center";
            p.textBaseline = "bottom";
            f = this.bsa.split("|");
            d = 0;
            if (this.ehn()) {
                d = 1;
                p.fillStyle = this.yqw
            } else {
                p.fillStyle = this.apc
            }
            p.font = this.uyq + " " + b + "px " + this.qcz;
            for (var g = 0, j = f.length; g < j; g++) {
                o = (p.measureText(f[g]).width > o) ? p.measureText(f[g]).width : o
            }
            if (o > this.width - 2 * this.rxn) {
                c = ((this.width - 2 * this.rxn) / o);
                b = Math.round(c * b) - 1;
                p.font = this.uyq + " " + b + "px " + this.qcz
            }
            if (b * f.length > this.height) {
                c = ((this.height) / (b * f.length));
                b = Math.round(c * b) - 1;
                p.font = this.uyq + " " + b + "px " + this.qcz
            }
            k = (this.height - b * f.length) / 2;
            k += b;
            for (var g = 0; g < f.length; g++) {
                p.fillText(f[g], (this.x + this.width / 2) + this.ujo, this.y - this.dqb + k + d);
                k += b
            }
        }
        p.restore()
    }
}
rwv.prototype = new dpm;

function vep() {
    var a = this;
    this.bsa = null;
    this.pjs = false;
    this.bsh = false;
    this.gli = false;
    this.qcz = null;
    this.uyq = "bold";
    this.dno = "center";
    this.ufl = null;
    this.ued = null;
    this.apc = null;
    this.fvk = "rect";
    this.mnn = new flw();
    this.dqu = new flw();
    this.cef = 16;
    this.dcx = 8;
    this.fyp = 1;
    this.jpf = 0;
    var b = 200;
    this.dcf = function (c, f, d, e) {
        this.bsa = e;
        vep.prototype.dcf.call(this, c, f, d)
    };
    this.gzv = function (c) {
        try {
            this.qcz = c.font;
            this.uyq = c.njm;
            this.dno = c.textAlign;
            this.ufl = c.backgroundColor;
            this.ued = c.borderColor;
            this.apc = c.txr;
            this.fvk = c.type
        } catch (d) {
            console.error(d)
        }
    };
    this.mwg = function (c) {
        try {
            this.mnn = c.lrv;
            this.dqu = c.wxt;
            this.cef = c.fontSize;
            this.dcx = c.phq;
            this.fyp = c.mmg
        } catch (d) {
            console.error(d)
        }
    };
    this.iwc = function (c) {
        this.pjs = c
    };
    this.wtk = function () {
        return this.pjs
    };
    this.pur = function (c, d) {
        this.gli = c;
        if (d && d === true) {
            this.parent.qay(this.x, this.y, this.width, this.height)
        }
    };
    this.tye = function () {
        return this.gli
    };
    this.rqq = function (c, d) {
        this.bsa = c;
        if (d && d === true && this.cxw()) {
            this.parent.qay(this.x, this.y, this.width, this.height)
        }
    };
    this.ixm = function (c, d) {
        this.bsh = c;
        d = (d === false) ? false : true;
        clearTimeout(this.jpf);
        if (this.bsh === true && d === true) {
            this.jpf = setTimeout(this.mpp, b)
        }
    };
    this.noy = function () {
        return this.bsh
    };
    this.mpp = function () {
        a.bsh = false
    };
    this.qay = function () {
        if (!this.cxw()) {
            return
        }
        var c = this.context2D;
        c.save();
        neg.tlv.qic(c, this.x, this.y, this.width, this.height, this.dcx, this.ufl, this.ued, this.fyp);
        if (this.fvk === "rect") {
            neg.tlv.hmu(c, this.x + this.dqu.x, this.y + this.dqu.y, this.dqu.width, this.dqu.height, this.apc, 0.2, this.apc, this.fyp, 1);
            if (this.gli === true) {
                neg.tlv.hmu(c, this.x + this.dqu.x + this.dqu.width / 4, this.y + this.dqu.y + this.dqu.height / 4, this.dqu.width / 2, this.dqu.height / 2, this.apc, 1)
            }
        } else {
            if (this.fvk === "round") {
                neg.tlv.irs(c, this.x + this.dqu.x + this.dqu.width / 2, this.y + this.dqu.y + this.dqu.height / 2, this.dqu.width / 2, this.apc, 0.2, this.apc, this.fyp, 1);
                if (this.gli === true) {
                    neg.tlv.irs(c, this.x + this.dqu.x + this.dqu.width / 2, this.y + this.dqu.y + this.dqu.height / 2, this.dqu.width / 4, this.apc, 1)
                }
            }
        }
        if (this.bsa && this.bsa != "") {
            neg.tlv.jus(c, this.bsa, this.apc, this.x + this.mnn.x, this.y + this.mnn.y, this.mnn.width, this.mnn.height, this.qcz, this.cef, this.uyq, this.dno, true)
        }
        c.restore();
        if (this.mff && this.yzc) {
            this.mff.drawImage(this.yzc, this.x, this.y)
        }
    };
    this.jht = {}
}
vep.prototype = new rom;

function oos() {
    var b = this;
    var c = 0;
    var a = 1;
    this.cqr = null;
    this.ktp = "";
    this.jin = "";
    this.fej = "";
    this.rcg = "";
    this.hlx = false;
    this.aby = [];
    this.qyx = 0;
    this.efe = 0;
    this.zrx = 0;
    this.cnv = 0;
    this.nre = 0;
    this.uqf = 0;
    this.oge = 0;
    this.mlu = 0;
    this.wlv = false;
    this.ldk = false;
    this.lhd = false;
    this.fvk = "center";
    this.qcz = "arial";
    this.uyq = "bold";
    this.whx = "white";
    this.apc = "white";
    this.ufl = "black";
    this.mgu = null;
    this.ued = "white";
    this.yqc = "rgb(150,150,150)";
    this.xab = null;
    this.csc = null;
    this.fyp = 3;
    this.drb = 0;
    this.nbj = 0;
    this.kmn = 0;
    this.bnn = 30;
    this.bjy = 24;
    this.gah = new flw();
    this.qaa = new flw();
    this.vda = new flw();
    this.xtr = new flw();
    this.dsb = new flw();
    this.fqf = new flw();
    this.wyb = new flw();
    this.cqn = new flw();
    this.exf = new flw();
    this.zyr = 7;
    this.tip = 0;
    this.cku = 0;
    this.rif = 0;
    this.mst = c;
    this.swc = 0;
    this.dnq = 89;
    this.qgk = false;
    this.ynw = 0;
    this.qcn = 0;
    this.owi = 0;
    this.lma = 0;
    this.pov = null;
    this.qtm = 0;
    this.myl = 1;
    this.zye = 250;
    this.dcf = function (d, f, e) {
        oos.prototype.dcf.call(this, d, f, e);
        this.cqr = new fxb();
        this.cqr.dcf();
        this.cqr.erq("buttons");
        this.cqr.erq("checkboxes");
        this.cqr.erq("displays");
        this.cqr.erq("lbuttons");
        this.cqr.erq("mbuttons");
        this.cqr.erq("vbuttons");
        this.cqr.erq("cbuttons")
    };
    this.dxu = function (d) {
        try {
            this.opq(d);
            this.pfm(d)
        } catch (f) {
            console.error(f)
        }
    };
    this.gzv = function (k) {
        try {
            var n = this.cqr.ydk("lbuttons"),
                m = this.cqr.ydk("mbuttons"),
                f = this.cqr.ydk("cbuttons"),
                g = this.cqr.ydk("displays");
            this.fvk = k.type;
            this.qcz = k.font;
            this.uyq = k.njm;
            this.whx = k.clo;
            this.apc = k.txr;
            this.ufl = k.backgroundColor;
            this.mgu = k.tkk;
            this.ued = k.borderColor;
            this.xab = k.kxq;
            this.csc = k.xkw;
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].gzv(k.idv)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].gzv(k.vyz)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].gzv(k.xsb)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].gzv(k.display)
            }
            this.cqr.uqk("checkboxes", "#gzv", [k.zcq])
        } catch (l) {
            console.error(l)
        }
    };
    this.mwg = function (k) {
        try {
            var n = this.cqr.ydk("lbuttons"),
                m = this.cqr.ydk("mbuttons"),
                f = this.cqr.ydk("cbuttons"),
                g = this.cqr.ydk("displays");
            this.fyp = k.mmg;
            this.drb = k.ulh;
            this.nbj = k.lwn;
            this.kmn = k.nnd;
            this.bnn = k.yjs;
            this.bjy = k.djw;
            this.gah = k.iht;
            this.qaa = k.gfv;
            this.vda = k.wzi;
            this.xtr = k.xnx;
            this.dsb = k.vtd;
            this.fqf = k.xaq;
            this.cqr.evt("lgames", "#pxx", [k.hra]);
            this.cqr.evt("mgames", "#pxx", [k.xsr]);
            this.cqr.evt("lmincredit", "#pxx", [k.peb]);
            this.cqr.evt("mmincredit", "#pxx", [k.pzx]);
            this.cqr.evt("lmaxcredit", "#pxx", [k.sxn]);
            this.cqr.evt("mmaxcredit", "#pxx", [k.kpb]);
            this.cqr.evt("lmaxwin", "#pxx", [k.fhs]);
            this.cqr.evt("mmaxwin", "#pxx", [k.kpx]);
            this.cqr.evt("start", "#pxx", [k.xev]);
            this.cqr.evt("cancel", "#pxx", [k.hal]);
            this.cqr.evt("gamesd", "#pxx", [k.ebr]);
            this.cqr.evt("mincreditd", "#pxx", [k.eby]);
            this.cqr.evt("maxcreditd", "#pxx", [k.vnj]);
            this.cqr.evt("maxwind", "#pxx", [k.ywu]);
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].mwg(k.idv)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].mwg(k.vyz)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].mwg(k.xsb)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].mwg(k.display)
            }
            this.cqr.evt("cmincredit", "#pxx", [k.pxc]);
            this.cqr.evt("cmaxcredit", "#pxx", [k.vdd]);
            this.cqr.evt("cmaxwin", "#pxx", [k.qry]);
            this.cqr.uqk("checkboxes", "#mwg", [k.zcq])
        } catch (l) {
            console.error(l)
        }
    };
    this.opq = function (d) {
        this.cqr.pbt("start", this.iku(d.xev, this.parent.language.start, this.als, this.parent.lwq.vzc), ["buttons", "cbuttons"]);
        this.cqr.pbt("cancel", this.iku(d.hal, this.parent.language.kjk, this.sxy, this.parent.lwq.may), ["buttons", "cbuttons"]);
        this.cqr.pbt("lgames", this.iku(d.hra, "", this.ykd, null), ["buttons", "lbuttons", "vbuttons"]);
        this.cqr.pbt("mgames", this.iku(d.xsr, "+", this.ghn, null), ["buttons", "mbuttons", "vbuttons"]);
        this.cqr.pbt("lmincredit", this.iku(d.peb, "", this.gcz, null), ["buttons", "lbuttons", "vbuttons"]);
        this.cqr.pbt("mmincredit", this.iku(d.pzx, "+", this.asl, null), ["buttons", "mbuttons", "vbuttons"]);
        this.cqr.pbt("lmaxcredit", this.iku(d.sxn, "", this.siu, null), ["buttons", "lbuttons", "vbuttons"]);
        this.cqr.pbt("mmaxcredit", this.iku(d.kpb, "+", this.aex, null), ["buttons", "mbuttons", "vbuttons"]);
        this.cqr.pbt("lmaxwin", this.iku(d.fhs, "", this.jjh, null), ["buttons", "lbuttons", "vbuttons"]);
        this.cqr.pbt("mmaxwin", this.iku(d.kpx, "+", this.cmq, null), ["buttons", "mbuttons", "vbuttons"]);
        this.cqr.pbt("cmincredit", this.kpz(d.pxc, "", this.bzo), ["checkboxes"]);
        this.cqr.pbt("cmaxcredit", this.kpz(d.vdd, "", this.wul), ["checkboxes"]);
        this.cqr.pbt("cmaxwin", this.kpz(d.qry, "", this.gsb), ["checkboxes"])
    };
    this.pfm = function (d) {
        this.cqr.pbt("gamesd", this.hdx(d.ebr, null, (this.aby[this.qyx] > 0) ? this.aby[this.qyx] : "---"), ["displays"]);
        this.cqr.pbt("mincreditd", this.hdx(d.eby, null, "---"), ["displays"]);
        this.cqr.pbt("maxcreditd", this.hdx(d.vnj, null, "---"), ["displays"]);
        this.cqr.pbt("maxwind", this.hdx(d.ywu, null, "---"), ["displays"])
    };
    this.hdx = function (d, g, f) {
        var e = new dvm();
        e.dcf(d, this.context2D, null, g, f);
        e.parent = this;
        return e
    };
    this.iku = function (f, j, g, e) {
        var d = new rwv();
        d.dcf(f, this.context2D, null, null, j);
        d.parent = this;
        d.jht = g;
        if (e) {
            d.opa = e.xfh
        }
        return d
    };
    this.kpz = function (e, g, f) {
        var d = new vep();
        d.dcf(e, this.context2D, null, g);
        d.parent = this;
        d.jht = f;
        return d
    };
    this.jgs = function (r, n) {
        var s = this.cqr.ydk("vbuttons"),
            l = this.cqr.ydk("cbuttons"),
            g = this.cqr.ydk("checkboxes"),
            p = this.cqr.dgc("cancel"),
            q = r - this.x,
            o = n - this.y;
        if (this.idp) {
            return true
        }
        if ((!p || !p.cxw()) && (r < this.x || r > this.x + this.width || n < this.y || n > this.y + this.height)) {
            this.lhd = true;
            this.crq();
            return true
        }
        for (var f = 0, m = s.length; f < m; f++) {
            var d = s[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.cxw() === true && d.wtk() === true && d.noy() === false) {
                    d.bso(true, false, false);
                    this.qtm = 0;
                    this.myl = 1;
                    if (d.jht() === false) {
                        this.pov = function () {
                            if (d.jht() === true) {
                                clearInterval(b.lma);
                                d.bso(false, false);
                                b.parent.qay();
                                for (var t = 0; t < m; t++) {
                                    s[t].ixm(false)
                                }
                            }
                        };
                        this.lma = setInterval(this.pov, this.zye)
                    }
                    for (var e = 0; e < m; e++) {
                        s[e].ixm(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = l.length; f < m; f++) {
            var d = l[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.cxw() === true && d.wtk() === true) {
                    this.parent.uhx.yiv("btn");
                    this.parent.uhx.onc("btn");
                    d.bso(true, false);
                    d.jht();
                    for (var e = 0; e < m; e++) {
                        l[e].ixm(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = g.length; f < m; f++) {
            var k = g[f];
            if (q >= k.x && q <= k.x + k.width && o >= k.y && o <= k.y + k.height) {
                if (k.cxw() === true && k.wtk() === true) {
                    k.pur(!k.tye(), true);
                    k.jht();
                    for (var e = 0; e < m; e++) {
                        g[e].ixm(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.mqw = function () {
        var e = this.cqr.ydk("vbuttons"),
            j = this.cqr.ydk("cbuttons");
        for (var g = 0, d = e.length; g < d; g++) {
            var f = e[g];
            if (f.ehn() == true) {
                clearInterval(this.lma);
                f.bso(false, false);
                this.parent.qay();
                return true
            }
        }
        for (var g = 0, d = j.length; g < d; g++) {
            var f = j[g];
            if (f.ehn() == true) {
                f.bso(false, false);
                this.parent.qay();
                return true
            }
        }
        return false
    };
    this.gor = function (l) {
        var k = this.cqr.ydk("buttons");
        if (this.idp) {
            return true
        }
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l == f.opa) {
                if (f.wtk() && !f.noy()) {
                    this.parent.uhx.yiv("btn");
                    this.parent.uhx.onc("btn");
                    f.bso(true, false);
                    f.jht();
                    for (var e = 0; e < d; e++) {
                        k[e].ixm(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.mnj = function () {
        var g = this.cqr.ydk("buttons");
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.ehn() == true) {
                e.bso(false, false);
                this.parent.qay();
                return true
            }
        }
        return false
    };
    this.whl = function (d) {
        this.cqr.uqk("buttons", "#iwc", [d]);
        this.cqr.uqk("checkboxes", "#iwc", [d]);
        if (d === true && this.ldk === true) {
            this.cqr.evt("cmincredit", "#iwc", [false])
        }
    };
    this.oze = function (d) {
        this.aby = d.g;
        this.efe = d.v;
        this.zrx = d.v;
        this.wlv = d.r;
        this.ldk = d.l;
        if (typeof d.m != "undefined" && d.m != null && d.m > 0) {
            this.cnv = d.m;
            this.nre = d.m
        }
    };
    this.amu = function () {
        if (this.wlv === true) {
            this.uqf = this.parent.dgi;
            this.oge = this.parent.dgi;
            this.qyx = 0;
            this.mlu = 0
        }
    };
    this.ahn = function () {
        if (this.aby.length > 0 && this.qyx >= 0 && this.lhd === false) {
            return this.aby[this.qyx]
        }
        return 0
    };
    this.xmc = function () {
        var d = this.cqr.dgc("cmincredit") == null || this.cqr.evt("cmincredit", "#tye");
        if (this.uqf > 0 && d === true) {
            return this.uqf
        }
        return 0
    };
    this.aaj = function () {
        var d = this.cqr.dgc("cmaxcredit") == null || this.cqr.evt("cmaxcredit", "#tye");
        if (this.oge > 0 && d === true) {
            return this.oge
        }
        return 0
    };
    this.qlq = function () {
        var d = this.cqr.dgc("cmaxwin") == null || this.cqr.evt("cmaxwin", "#tye");
        if (this.mlu > 0 && d === true) {
            return this.mlu
        }
        return 0
    };
    this.jog = function () {
        var f = this.cqr.dgc("cmincredit") == null || this.cqr.evt("cmincredit", "#tye"),
            d = this.cqr.dgc("cmaxcredit") == null || this.cqr.evt("cmaxcredit", "#tye"),
            e = this.cqr.dgc("cmaxwin") == null || this.cqr.evt("cmaxwin", "#tye");
        this.qgk = false;
        this.lhd = false;
        this.zrx = (this.nre > 0) ? this.parent.ffv() * this.nre : this.zrx;
        this.efe = (this.cnv > 0) ? this.parent.ffv() * this.cnv : this.efe;
        if (this.wlv === true) {
            f = this.ldk;
            d = false;
            e = false;
            this.amu()
        } else {
            if (this.ldk === true) {
                f = true;
                this.uqf = (this.uqf < this.parent.dgi) ? this.uqf : this.parent.dgi;
                this.uqf = (this.uqf > 0) ? this.uqf : this.parent.dgi
            } else {
                f = (this.uqf <= this.parent.dgi) ? f : false;
                this.uqf = (this.uqf < this.parent.dgi) ? this.uqf : this.parent.dgi
            }
            d = (this.oge >= this.parent.dgi) ? d : false;
            this.oge = (this.oge > this.parent.dgi) ? this.oge : this.parent.dgi
        }
        this.cqr.evt("cmincredit", "#pur", [f]);
        this.cqr.evt("cmaxcredit", "#pur", [d]);
        this.cqr.evt("cmaxwin", "#pur", [e]);
        this.cqr.evt("gamesd", "#rqq", [(this.aby[this.qyx] > 0) ? this.aby[this.qyx] : "---"]);
        this.cqr.evt("mincreditd", "#rqq", [(f === true && this.uqf > 0) ? this.parent.jea(this.uqf) : "---"]);
        this.cqr.evt("maxcreditd", "#rqq", [(d === true && this.oge > 0) ? this.parent.jea(this.oge) : "---"]);
        this.cqr.evt("maxwind", "#rqq", [(e === true && this.mlu > 0) ? this.parent.jea(this.mlu) : "---"]);
        this.cqr.evt("lmincredit", "#wmg", [f]);
        this.cqr.evt("mmincredit", "#wmg", [f && this.uqf < this.parent.dgi]);
        this.cqr.evt("lmaxcredit", "#wmg", [d && this.oge > this.parent.dgi]);
        this.cqr.evt("mmaxcredit", "#wmg", [d]);
        this.cqr.evt("lmaxwin", "#wmg", [e && this.mlu > this.zrx]);
        this.cqr.evt("mmaxwin", "#wmg", [e]);
        if (this.hlx === false) {
            this.whl(true);
            this.wmg(true);
            this.parent.qay()
        } else {
            this.jpc();
            this.parent.uhx.yiv("panel_out");
            this.parent.uhx.onc("panel_out");
            this.yfu()
        }
    };
    this.crq = function () {
        b.whl(false);
        if (b.hlx === false) {
            b.wmg(false);
            b.parent.qay()
        } else {
            b.dcv();
            b.parent.uhx.yiv("panel_out");
            b.parent.uhx.onc("panel_out");
            b.yfu()
        }
    };
    this.jpc = function () {
        this.wmg(true);
        this.idp = true;
        this.pjs = false;
        this.mst = c;
        this.tip = Math.floor(this.width / this.zyr);
        this.rif = 0;
        this.cku = 0;
        this.swc = new Date().getTime()
    };
    this.dcv = function () {
        this.idp = true;
        this.pjs = false;
        this.mst = a;
        this.tip = -Math.floor(this.width / this.zyr);
        this.rif = 1;
        this.cku = this.width;
        this.swc = new Date().getTime()
    };
    this.yfu = function () {
        var d = b.dnq,
            e = new Date().getTime();
        if (b.rif < b.zyr) {
            b.cku += b.tip;
            b.rif++;
            b.parent.qay();
            d = (((b.mst === a) ? b.rif - 1 : b.rif) * b.dnq - (e - b.swc));
            b.ynw = setTimeout(b.yfu, d)
        } else {
            b.idp = false;
            b.pjs = true;
            if (b.mst == a) {
                b.wmg(false);
                b.parent.dgu();
                if (b.qgk === true) {
                    b.qcn = setTimeout(b.parent.mlx, 200)
                }
            } else {
                if (b.mst == c) {
                    b.whl(true)
                }
            }
            b.parent.qay()
        }
    };
    this.stop = function () {
        clearTimeout(this.ynw);
        clearTimeout(this.owi);
        clearTimeout(this.qcn);
        clearInterval(this.lma)
    };
    this.hqp = function (d) {
        this.ktp = d.mjj;
        this.jin = d.sql;
        this.fej = d.heu;
        this.cqr.evt("start", "#rqq", [d.start]);
        this.cqr.evt("cancel", "#rqq", [d.kjk]);
        this.cqr.evt("cmincredit", "#rqq", [d.pni]);
        this.cqr.evt("cmaxcredit", "#rqq", [d.ekg]);
        this.cqr.evt("cmaxwin", "#rqq", [d.peo]);
        if (this.parent.whe === true && neg.epl.value44.d === true) {
            this.rcg = d.fpq
        }
    };
    this.qay = function (n, m, o, j) {
        if (!this.cxw()) {
            return
        }
        var f = (n != null && m != null && o != null && j != null),
            p = this.context2D,
            d = this.cqr.vcc(),
            e = this.ufl,
            l = this.ued;
        if (this.mgu) {
            e = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            e.addColorStop(0, this.ufl);
            e.addColorStop(1, this.mgu)
        }
        if (this.yqc) {
            if (this.fvk === "center") {
                l = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height)
            } else {
                if (this.fvk === "left") {
                    l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                } else {
                    if (this.fvk === "right") {
                        l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                    }
                }
            }
            if (this.fvk === "left") {
                l.addColorStop(1, this.ued);
                l.addColorStop(0, this.yqc)
            } else {
                if (this.fvk === "center" || this.fvk === "right") {
                    l.addColorStop(0, this.ued);
                    l.addColorStop(1, this.yqc)
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
        neg.tlv.aat(p, 0, 0, this.width, this.height, this.drb, this.nbj, this.nbj, this.drb, e, 1, l, this.fyp, 1);
        neg.tlv.qic(p, this.vda.x, this.vda.y, this.vda.width, this.vda.height, this.kmn, this.xab, this.csc, this.fyp / 2);
        neg.tlv.qic(p, this.dsb.x, this.dsb.y, this.dsb.width, this.dsb.height, this.kmn, this.xab, this.csc, this.fyp / 2);
        neg.tlv.rnq(p, this.ktp, this.whx, this.gah.x, this.gah.y, this.gah.width, this.gah.height, this.qcz, this.bnn, this.uyq);
        neg.tlv.jus(p, this.rcg, this.apc, this.qaa.x, this.qaa.y, this.qaa.width, this.qaa.height, this.qcz, this.bjy, this.uyq, "center", true);
        neg.tlv.udc(p, this.jin, this.apc, this.xtr.x, this.xtr.y, this.xtr.width, this.xtr.height, this.qcz, this.bjy, this.uyq, 0);
        neg.tlv.rnq(p, this.fej, this.apc, this.fqf.x, this.fqf.y, this.fqf.width, this.fqf.height, this.qcz, this.bjy, this.uyq);
        for (var g = 0, k = d.length; g < k; g++) {
            d[g].qay()
        }
        p.restore();
        if (this.mff && this.yzc) {
            if (this.idp) {
                if (this.cku > 0) {
                    if (this.fvk === "left") {
                        this.mff.drawImage(this.yzc, this.width - this.cku, 0, this.cku, this.height, this.x, this.y, this.cku, this.height)
                    } else {
                        if (this.fvk === "right") {
                            this.mff.drawImage(this.yzc, 0, 0, this.cku, this.height, this.x + this.width - this.cku, this.y, this.cku, this.height)
                        }
                    }
                }
            } else {
                if (f) {
                    this.mff.drawImage(this.yzc, n, m, o, j, this.x + n, this.y + m, o, j)
                } else {
                    this.mff.drawImage(this.yzc, this.x, this.y)
                }
            }
        }
    };
    this.als = function () {
        b.parent.qay();
        if (b.aby[b.qyx] <= 0) {
            return
        }
        if (b.hlx === false) {
            b.owi = setTimeout(b.parent.dgu, 400);
            b.qcn = setTimeout(b.parent.mlx, 500)
        } else {
            b.idp = true;
            b.qgk = true;
            b.owi = setTimeout(b.crq, 400)
        }
    };
    this.sxy = function () {
        b.parent.qay();
        b.lhd = true;
        if (b.hlx === false) {
            b.owi = setTimeout(b.parent.dgu, 400)
        } else {
            b.idp = true;
            b.owi = setTimeout(b.crq, 400)
        }
    };
    this.ghn = function () {
        b.qyx = (b.qyx < b.aby.length - 1) ? b.qyx + 1 : 0;
        b.parent.uhx.onc("step0");
        b.cqr.evt("gamesd", "#rqq", [(b.aby[b.qyx] > 0) ? b.aby[b.qyx] : "---"]);
        b.parent.qay();
        return (b.qyx >= b.aby.length - 1)
    };
    this.ykd = function () {
        b.qyx = (b.qyx > 0) ? b.qyx - 1 : b.aby.length - 1;
        b.parent.uhx.onc("step0");
        b.cqr.evt("gamesd", "#rqq", [(b.aby[b.qyx] > 0) ? b.aby[b.qyx] : "---"]);
        b.parent.qay();
        return (b.qyx <= 0)
    };
    this.asl = function () {
        var d = b.cqr.dgc("cmincredit") == null || b.cqr.evt("cmincredit", "#tye");
        if (d === true) {
            if (++b.qtm > 10) {
                b.myl = 10
            }
            b.uqf = (b.uqf + (b.efe * b.myl) <= b.parent.dgi) ? b.uqf + (b.efe * b.myl) : b.parent.dgi;
            b.parent.uhx.onc("step0");
            b.cqr.evt("mincreditd", "#rqq", [(b.uqf > 0) ? b.parent.jea(b.uqf) : "---"]);
            b.cqr.evt("mmincredit", "#wmg", [d && b.uqf < b.parent.dgi]);
            b.cqr.evt("lmincredit", "#wmg", [d && b.uqf > 0]);
            b.parent.qay();
            return (b.uqf >= b.parent.dgi)
        }
        return true
    };
    this.gcz = function () {
        var d = b.cqr.dgc("cmincredit") == null || b.cqr.evt("cmincredit", "#tye");
        if (d === true) {
            if (++b.qtm > 10) {
                b.myl = 10
            }
            b.uqf = (b.uqf - (b.efe * b.myl) > 0) ? b.uqf - (b.efe * b.myl) : 0;
            b.parent.uhx.onc("step0");
            b.cqr.evt("mincreditd", "#rqq", [(b.uqf > 0) ? b.parent.jea(b.uqf) : "---"]);
            b.cqr.evt("mmincredit", "#wmg", [d && b.uqf < b.parent.dgi]);
            b.cqr.evt("lmincredit", "#wmg", [d && b.uqf > 0]);
            b.parent.qay();
            return (b.uqf >= b.parent.dgi || b.uqf <= 0)
        }
        return true
    };
    this.aex = function () {
        var d = b.cqr.dgc("cmaxcredit") == null || b.cqr.evt("cmaxcredit", "#tye");
        if (d === true) {
            if (++b.qtm > 10) {
                b.myl = 10
            }
            b.oge = (b.oge + (b.zrx * b.myl) > 0) ? b.oge + (b.zrx * b.myl) : 0;
            b.parent.uhx.onc("step0");
            b.cqr.evt("maxcreditd", "#rqq", [(b.oge > 0) ? b.parent.jea(b.oge) : "---"]);
            b.cqr.evt("lmaxcredit", "#wmg", [d && b.oge > b.parent.dgi]);
            b.parent.qay();
            return (b.oge <= b.parent.dgi)
        }
        return true
    };
    this.siu = function () {
        var d = b.cqr.dgc("cmaxcredit") == null || b.cqr.evt("cmaxcredit", "#tye");
        if (d === true) {
            if (++b.qtm > 10) {
                b.myl = 10
            }
            b.oge = (b.oge - (b.zrx * b.myl) > b.parent.dgi) ? b.oge - (b.zrx * b.myl) : b.parent.dgi;
            b.parent.uhx.onc("step0");
            b.cqr.evt("maxcreditd", "#rqq", [(b.oge > 0) ? b.parent.jea(b.oge) : "---"]);
            b.cqr.evt("lmaxcredit", "#wmg", [d && b.oge > b.parent.dgi]);
            b.parent.qay();
            return (b.oge <= b.parent.dgi)
        }
        return true
    };
    this.cmq = function () {
        var d = b.cqr.dgc("cmaxwin") == null || b.cqr.evt("cmaxwin", "#tye");
        if (d === true) {
            if (++b.qtm > 10) {
                b.myl = 10
            }
            b.mlu = (b.mlu + (b.zrx * b.myl) > 0) ? b.mlu + (b.zrx * b.myl) : 0;
            b.parent.uhx.onc("step0");
            b.cqr.evt("maxwind", "#rqq", [(b.mlu > 0) ? b.parent.jea(b.mlu) : "---"]);
            b.cqr.evt("lmaxwin", "#wmg", [d && b.mlu > b.zrx]);
            b.parent.qay();
            return (b.mlu <= b.zrx)
        }
        return true
    };
    this.jjh = function () {
        var d = b.cqr.dgc("cmaxwin") == null || b.cqr.evt("cmaxwin", "#tye");
        if (d === true) {
            if (++b.qtm > 10) {
                b.myl = 10
            }
            b.mlu = (b.mlu - (b.zrx * b.myl) > 0) ? b.mlu - (b.zrx * b.myl) : b.zrx;
            b.parent.uhx.onc("step0");
            b.cqr.evt("maxwind", "#rqq", [(b.mlu > 0) ? b.parent.jea(b.mlu) : "---"]);
            b.cqr.evt("lmaxwin", "#wmg", [d && b.mlu > b.zrx]);
            b.parent.qay();
            return (b.mlu <= b.zrx)
        }
        return true
    };
    this.bzo = function () {
        var d = b.cqr.dgc("cmincredit") == null || b.cqr.evt("cmincredit", "#tye");
        b.uqf = b.parent.dgi;
        b.cqr.evt("mincreditd", "#rqq", [(d === true && b.uqf > 0) ? b.parent.jea(b.uqf) : "---"]);
        b.cqr.evt("lmincredit", "#wmg", [d]);
        b.cqr.evt("mmincredit", "#wmg", [d && b.uqf < b.parent.dgi]);
        b.parent.qay()
    };
    this.wul = function () {
        var d = b.cqr.dgc("cmaxcredit") == null || b.cqr.evt("cmaxcredit", "#tye");
        b.oge = b.parent.dgi;
        b.cqr.evt("maxcreditd", "#rqq", [(d === true && b.oge > 0) ? b.parent.jea(b.oge) : "---"]);
        b.cqr.evt("lmaxcredit", "#wmg", [d && b.oge > b.parent.dgi]);
        b.cqr.evt("mmaxcredit", "#wmg", [d]);
        b.parent.qay()
    };
    this.gsb = function () {
        var d = b.cqr.dgc("cmaxwin") == null || b.cqr.evt("cmaxwin", "#tye");
        if (b.mlu === 0) {
            b.mlu = b.zrx
        }
        b.cqr.evt("maxwind", "#rqq", [(d === true && b.mlu > 0) ? b.parent.jea(b.mlu) : "---"]);
        b.cqr.evt("lmaxwin", "#wmg", [d && b.mlu > b.zrx]);
        b.cqr.evt("mmaxwin", "#wmg", [d]);
        b.parent.qay()
    }
}
oos.prototype = new rom;

function cje() {
    this.dbj = "right";
    this.oen = "left";
    this.shp = null;
    this.knx = null;
    this.ktp = null;
    this.qfs = -1;
    this.akg = -1;
    this.pjs = true;
    this.gli = false;
    this.bsh = false;
    this.idp = false;
    this.ynn = 0;
    this.hhj = 0;
    this.qgc = [];
    this.sfh = 0;
    this.qgq = 0;
    this.tot = 1;
    this.nzm = 0;
    this.ivk = 0;
    this.fvk = this.dbj;
    this.qcz = null;
    this.uyq = "bold";
    this.apc = "rgb(255,255,255)";
    this.ufl = "rgb(0,0,0)";
    this.rvg = "rgb(0,0,0)";
    this.ggs = "rgb(0,0,0)";
    this.bgr = 0.7;
    this.jpa = null;
    this.xge = null;
    this.akr = null;
    this.pug = new flw();
    this.rcm = new flw();
    this.axd = new flw();
    this.gah = new flw();
    this.fyp = 2;
    this.dcx = 5;
    this.cnf = 4;
    this.sky = 10;
    this.nax = 5;
    this.cef = 15;
    var a = 200;
    this.zkt = function (c, d, f) {
        this.qgc = [];
        this.ynn = (d < 0) ? 0 : d;
        this.hhj = (f < 0) ? 0 : f;
        for (var e = this.ynn, b = 0; e <= this.hhj; e++) {
            this.qgc[b++] = c[e]
        }
        this.sfh = this.qgc.length;
        this.nzm = this.pug.height / this.sfh
    };
    this.mwg = function (b) {
        try {
            this.cef = b.fontSize;
            this.fyp = b.mmg;
            this.dcx = b.phq;
            this.cnf = b.vbu;
            this.sky = b.kfe;
            this.nax = b.zwx;
            this.pug = new flw(b.cco.x, b.cco.y + b.ylh, b.cco.width, b.cco.height - 2 * b.ylh);
            this.rcm = new flw(b.cco.x, b.cco.y, b.cco.width, b.ylh);
            this.axd = new flw(b.cco.x, b.cco.y + b.cco.height - b.ylh, b.cco.width, b.ylh);
            this.gah = b.iht
        } catch (c) {
            console.error(c)
        }
    };
    this.gzv = function (b) {
        try {
            this.qcz = b.font;
            this.uyq = b.njm;
            this.apc = b.txr;
            this.ufl = b.backgroundColor;
            this.rvg = b.hew;
            this.ggs = b.ywe;
            this.bgr = b.exu;
            this.xge = this.context2D.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            this.xge.addColorStop(0, b.tfn);
            this.xge.addColorStop(1, b.fbi);
            this.jpa = this.context2D.createLinearGradient(this.pug.x, 0, this.pug.x + this.pug.width, 0);
            this.akr = this.context2D.createLinearGradient(this.width, this.height / 2, 0, this.height / 2);
            if (this.fvk === this.dbj) {
                this.jpa.addColorStop(0, b.jvd);
                this.jpa.addColorStop(1, b.kzq);
                this.akr.addColorStop(0, b.gpr);
                this.akr.addColorStop(1, b.con)
            } else {
                if (this.fvk === this.oen) {
                    this.jpa.addColorStop(0, b.kzq);
                    this.jpa.addColorStop(1, b.jvd);
                    this.akr.addColorStop(0, b.con);
                    this.akr.addColorStop(1, b.gpr)
                }
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.jgs = function (b, f, c) {
        if (this.idp || !this.pjs || this.bsh) {
            return true
        }
        if ((b < this.x || b > this.x + this.width || f < this.y || f > this.y + this.height)) {
            return false
        } else {
            var e = b - this.x,
                d = f - this.y;
            if (this.axd.ngi(e, d)) {
                this.vqk(-1);
                this.onc();
                this.ixm(true, true)
            } else {
                if (this.rcm.ngi(e, d)) {
                    this.vqk(1);
                    this.onc();
                    this.ixm(true, true)
                } else {
                    if (this.pug.ngi(e, d)) {
                        this.gli = true;
                        this.ulr(f);
                        this.ixm(true, true)
                    }
                }
            }
            this.jht(this.qgq);
            return true
        }
    };
    this.mqw = function () {
        if (this.gli) {
            this.gli = false;
            this.onc();
            return true
        }
        return false
    };
    this.gor = function (b) {
        if (this.idp || !this.pjs || this.bsh) {
            return true
        }
        if (b == this.akg) {
            this.vqk(-1);
            this.onc();
            this.ixm(true, true);
            this.jht(this.qgq);
            return true
        } else {
            if (b == this.qfs) {
                this.vqk(1);
                this.onc();
                this.ixm(true, true);
                this.jht(this.qgq);
                return true
            }
        }
        return false
    };
    this.mnj = function () {};
    this.tai = function (b, d, c) {
        if (!this.gli) {
            return false
        }
        if (b >= this.x + this.pug.x && b <= this.x + this.pug.x + this.pug.width && d >= this.y + this.pug.y && d <= this.y + this.pug.y + this.pug.height) {
            this.ulr(d);
            this.jht(this.qgq);
            return true
        }
        return false
    };
    this.ixm = function (b, c) {
        this.bsh = b;
        c = (c === false) ? false : true;
        clearTimeout(this.jpf);
        if (this.bsh === true && c === true) {
            this.jpf = setTimeout(this.mpp, a)
        }
    };
    this.mpp = function () {};
    this.jht = function (b) {};
    this.onc = function () {};
    this.ked = function (b, c) {
        this.ynn = (b < 0) ? 0 : b;
        this.hhj = (c < 0) ? 0 : c;
        if (this.qgc) {
            this.hhj = (this.hhj > this.qgc.length - 1) ? this.qgc.length - 1 : this.hhj
        }
    };
    this.jog = function () {
        this.wmg(true, true)
    };
    this.crq = function () {
        this.wmg(false, true)
    };
    this.iwc = function (b) {
        this.pjs = b
    };
    this.wtk = function () {
        return this.pjs
    };
    this.owt = function (b, c) {
        this.qgq = b;
        if (this.qgq < this.ynn) {
            this.qgq = this.ynn
        }
        if (this.qgq >= this.hhj) {
            this.qgq = this.hhj
        }
        this.tot = this.qgq + 1;
        if (c && c === true) {
            this.parent.qay()
        }
    };
    this.zod = function (d, e) {
        this.qgq = 0;
        for (var c = 0, b = this.qgc.length; c < b; c++) {
            if (this.qgc[c] == d) {
                this.qgq = c;
                break
            }
        }
        this.qgq = (this.qgq >= this.ynn) ? this.qgq : this.ynn;
        this.qgq = (this.qgq < this.hhj) ? this.qgq : this.hhj;
        this.tot = this.qgq + 1;
        if (e) {
            this.parent.qay()
        }
    };
    this.ulr = function (b) {
        this.qgq = Math.ceil(((this.pug.height) - (b - this.pug.y - this.y)) / this.nzm) - 1;
        this.qgq = (this.qgq >= this.ynn) ? this.qgq : this.ynn;
        this.qgq = (this.qgq < this.hhj) ? this.qgq : this.hhj;
        this.tot = this.qgq + 1;
        this.parent.qay()
    };
    this.vqk = function (b) {
        this.qgq += b;
        this.qgq = (this.qgq >= this.ynn) ? this.qgq : this.ynn;
        this.qgq = (this.qgq < this.hhj) ? this.qgq : this.hhj;
        this.tot = this.qgq + 1;
        this.parent.qay()
    };
    this.qay = function () {
        if (!this.cxw() || !this.parent.ydx()) {
            return
        }
        this.gps();
        if (this.mff && this.yzc) {
            this.mff.drawImage(this.nak, this.x, this.y)
        }
    };
    this.gps = function () {
        var b = this.context2D;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        this.szo(b);
        this.hzh(b);
        this.hzn(b);
        this.klq(b);
        this.fnz(b);
        b.restore()
    };
    this.szo = function (b) {
        if (this.fvk === this.oen) {
            neg.tlv.aat(b, 0, 0, this.width, this.height, this.dcx, 0, 0, this.dcx, this.ufl, 0.4, this.akr, this.fyp, 1)
        } else {
            if (this.fvk === this.dbj) {
                neg.tlv.aat(b, 0, 0, this.width, this.height, 0, this.dcx, this.dcx, 0, this.ufl, 0.4, this.akr, this.fyp, 1)
            }
        }
    };
    this.hzh = function (b) {
        neg.tlv.hmu(b, this.pug.x, this.pug.y, this.pug.width, this.pug.height, this.rvg, 1)
    };
    this.hzn = function (b) {
        neg.tlv.hmu(b, this.pug.x, this.pug.y + this.pug.height - Math.round(this.tot * this.nzm), this.pug.width, Math.round(this.tot * this.nzm), this.xge, 1)
    };
    this.klq = function (b) {
        neg.tlv.hmu(b, this.pug.x - this.cnf, this.pug.y - this.cnf, this.pug.width + 2 * this.cnf, this.pug.height + 2 * this.cnf, null, 0, this.jpa, this.cnf, 1);
        if (this.fvk === this.oen) {
            neg.tlv.aat(b, this.pug.x - this.cnf, this.rcm.y, this.pug.width + 2 * this.cnf, this.rcm.height, this.sky, 0, 0, 0, this.jpa, 1);
            neg.tlv.aat(b, this.pug.x - this.cnf, this.axd.y, this.pug.width + 2 * this.cnf, this.axd.height, 0, 0, 0, this.sky, this.jpa, 1)
        } else {
            if (this.fvk === this.dbj) {
                neg.tlv.aat(b, this.pug.x - this.cnf, this.rcm.y, this.pug.width + 2 * this.cnf, this.rcm.height, 0, this.sky, 0, 0, this.jpa, 1);
                neg.tlv.aat(b, this.pug.x - this.cnf, this.axd.y, this.pug.width + 2 * this.cnf, this.axd.height, 0, 0, this.sky, 0, this.jpa, 1)
            }
        }
        b.strokeStyle = this.jpa;
        b.lineWidth = Math.round(this.cnf / 4);
        b.beginPath();
        for (var c = 1; c < this.sfh; c++) {
            b.moveTo(this.pug.x, this.pug.y + this.pug.height - Math.round(c * this.nzm));
            b.lineTo(this.pug.x + this.pug.width, this.pug.y + this.pug.height - Math.round(c * this.nzm))
        }
        b.closePath();
        b.stroke();
        if (this.shp) {
            if (this.fvk === this.oen) {
                b.drawImage(this.shp, 0, 0, this.shp.width / 2, this.shp.height, this.pug.x, this.pug.y, this.pug.width, this.pug.height)
            } else {
                if (this.fvk === this.dbj) {
                    b.drawImage(this.shp, this.shp.width / 2, 0, this.shp.width / 2, this.shp.height, this.pug.x, this.pug.y, this.pug.width, this.pug.height)
                }
            }
        }
    };
    this.fnz = function (c) {
        var f = this.apc,
            e = this.apc,
            b = 0,
            d = 0;
        if (this.fvk === this.oen) {
            b = this.nax;
            d = this.pug.x - 2 * this.nax
        } else {
            if (this.fvk === this.dbj) {
                b = this.pug.x + this.pug.width + this.nax;
                d = this.width - this.nax - (this.pug.x + this.pug.width + this.nax)
            }
        }
        if (this.qgq > 0 && this.qgq < this.qgc.length - 1) {
            neg.tlv.hmu(c, b, this.pug.y + ((this.sfh - this.tot) * this.nzm), d, this.nzm, this.ggs, this.bgr);
            neg.tlv.nrf(c, this.qgc[this.qgq], this.xge, b, this.pug.y + ((this.sfh - this.tot) * this.nzm) + (this.nzm - this.cef) / 2, d, this.cef, this.qcz, this.cef, this.uyq, this.nax)
        } else {
            if (this.qgq == 0) {
                f = this.xge
            } else {
                if (this.qgq == this.qgc.length - 1) {
                    e = this.xge
                }
            }
        }
        neg.tlv.hmu(c, b, this.pug.y + (this.nzm * (this.sfh - 1)), d, this.nzm, this.ggs, this.bgr);
        neg.tlv.nrf(c, this.qgc[0], f, b, this.pug.y + (this.nzm * (this.sfh - 1)) + (this.nzm - this.cef) / 2, d, this.cef, this.qcz, this.cef, this.uyq, this.nax);
        neg.tlv.hmu(c, b, this.pug.y, d, this.nzm, this.ggs, this.bgr);
        neg.tlv.nrf(c, this.qgc[this.qgc.length - 1], e, b, this.pug.y + (this.nzm - this.cef) / 2, d, this.cef, this.qcz, this.cef, this.uyq, this.nax);
        neg.tlv.rnq(c, "+", this.apc, this.rcm.x, this.rcm.y, this.rcm.width, this.rcm.height, this.qcz, this.cef, this.uyq);
        neg.tlv.rnq(c, "", this.apc, this.axd.x, this.axd.y, this.axd.width, this.axd.height, this.qcz, this.cef, this.uyq);
        if (this.ktp) {
            neg.tlv.rnq(c, this.ktp, this.apc, this.gah.x, this.gah.y, this.gah.width, this.gah.height, this.qcz, this.cef, this.uyq)
        }
    }
}
cje.prototype = new rom;

function fer() {
    var a = this;
    this.cqr = null;
    this.ciu = false;
    this.elh = "";
    this.afj = "";
    this.pjp = "";
    this.zje = "";
    this.rcg = "";
    this.jin = "";
    this.fej = "";
    this.qcz = "arial";
    this.uyq = "bold";
    this.apc = "white";
    this.ufl = "black";
    this.mgu = null;
    this.ued = "white";
    this.yqc = "rgb(150,150,150)";
    this.fyp = 3;
    this.dcx = 4;
    this.ufh = 24;
    this.iwr = 24;
    this.bjy = 24;
    this.eju = new flw();
    this.nfh = new flw();
    this.pjl = new flw();
    this.vft = new flw();
    this.yvs = new flw();
    this.ley = new flw();
    this.fqv = new flw();
    this.aby = [];
    this.qyx = 0;
    this.efe = 0;
    this.zrx = 0;
    this.cnv = 0;
    this.nre = 0;
    this.uqf = 0;
    this.oge = 0;
    this.mlu = 0;
    this.ymx = false;
    this.ldk = false;
    this.qgq = 0;
    this.wsw = true;
    this.tue = true;
    this.pov = null;
    this.lma = 0;
    this.qtm = 0;
    this.myl = 1;
    this.zye = 250;
    this.dcf = function (b, d, c) {
        fer.prototype.dcf.call(this, b, d, c);
        this.cqr = new fxb();
        this.cqr.dcf();
        this.cqr.erq("buttons");
        this.cqr.erq("displays");
        this.cqr.erq("checkboxes");
        this.cqr.erq("lbuttons");
        this.cqr.erq("mbuttons");
        this.cqr.erq("tbuttons");
        this.cqr.erq("bbuttons");
        this.cqr.erq("bdisplays");
        this.cqr.erq("abuttons");
        this.cqr.erq("adisplays");
        this.cqr.erq("acheckboxes");
        this.cqr.erq("sbuttons");
        this.cqr.erq("hbuttons")
    };
    this.dxu = function (b) {
        try {
            this.opq(b);
            this.otv(b);
            this.ieu(b)
        } catch (c) {
            console.error(c)
        }
    };
    this.gzv = function (b) {
        try {
            var c = this.cqr.ydk("lbuttons"),
                n = this.cqr.ydk("mbuttons"),
                k = this.cqr.ydk("tbuttons"),
                m = this.cqr.ydk("sbuttons"),
                l = this.cqr.ydk("hbuttons"),
                f = this.cqr.ydk("displays");
            this.qcz = b.font;
            this.uyq = b.njm;
            this.apc = b.txr;
            this.ufl = b.backgroundColor;
            this.mgu = b.tkk;
            this.ued = b.borderColor;
            this.yqc = b.bhj;
            for (var d = 0, g = c.length; d < g; d++) {
                c[d].gzv(b.idv)
            }
            for (var d = 0, g = n.length; d < g; d++) {
                n[d].gzv(b.vyz)
            }
            for (var d = 0, g = k.length; d < g; d++) {
                k[d].gzv(b.mwl)
            }
            for (var d = 0, g = f.length; d < g; d++) {
                f[d].gzv(b.display)
            }
            for (var d = 0, g = m.length; d < g; d++) {
                m[d].gzv(b.jde)
            }
            for (var d = 0, g = l.length; d < g; d++) {
                l[d].gzv(b.jde)
            }
            this.cqr.uqk("checkboxes", "#gzv", [b.zcq])
        } catch (j) {
            console.error(j)
        }
    };
    this.mwg = function (g) {
        try {
            var b = this.cqr.ydk("lbuttons"),
                o = this.cqr.ydk("mbuttons"),
                l = this.cqr.ydk("tbuttons"),
                n = this.cqr.ydk("sbuttons"),
                m = this.cqr.ydk("hbuttons"),
                c = this.cqr.ydk("bdisplays"),
                f = this.cqr.ydk("adisplays");
            bol = this.cqr.ydk("checkboxes"), ule = n.length, bju = (ule <= 2) ? g.unz : (ule <= 3) ? g.wnl : (ule <= 4) ? g.qjv : g.jjg, ule = m.length, lux = (ule <= 2) ? g.unz : (ule <= 3) ? g.wnl : (ule <= 4) ? g.qjv : g.jjg, jeo = (this.parent.qmr() != null) ? g.zeo : g.ysy;
            this.fyp = g.mmg;
            this.dcx = g.phq;
            this.ufh = g.iew;
            this.iwr = g.mqv;
            this.bjy = g.djw;
            this.eju = g.fas;
            this.nfh = g.ghq;
            this.pjl = g.jxm;
            this.vft = g.fwt;
            this.yvs = g.gfv;
            this.ley = g.xnx;
            this.fqv = g.jsy;
            this.cqr.evt("bett", "#pxx", [jeo.jdc]);
            this.cqr.evt("autot", "#pxx", [jeo.xty]);
            this.cqr.evt("helpt", "#pxx", [jeo.rhc]);
            this.cqr.evt("settingt", "#pxx", [jeo.zzh]);
            this.cqr.evt("returnt", "#pxx", [jeo.dgb]);
            this.cqr.evt("lbet", "#pxx", [g.pxy]);
            this.cqr.evt("mbet", "#pxx", [g.pbl]);
            this.cqr.evt("llines", "#pxx", [g.wgx]);
            this.cqr.evt("mlines", "#pxx", [g.vbo]);
            this.cqr.evt("betd", "#pxx", [g.nxl]);
            this.cqr.evt("linesd", "#pxx", [g.cyi]);
            this.cqr.evt("totald", "#pxx", [g.gll]);
            this.cqr.evt("lgames", "#pxx", [g.hra]);
            this.cqr.evt("mgames", "#pxx", [g.xsr]);
            this.cqr.evt("lmincredit", "#pxx", [g.peb]);
            this.cqr.evt("mmincredit", "#pxx", [g.pzx]);
            this.cqr.evt("lmaxcredit", "#pxx", [g.sxn]);
            this.cqr.evt("mmaxcredit", "#pxx", [g.kpb]);
            this.cqr.evt("lmaxwin", "#pxx", [g.fhs]);
            this.cqr.evt("mmaxwin", "#pxx", [g.kpx]);
            this.cqr.evt("gamesd", "#pxx", [g.ebr]);
            this.cqr.evt("mincreditd", "#pxx", [g.eby]);
            this.cqr.evt("maxcreditd", "#pxx", [g.vnj]);
            this.cqr.evt("maxwind", "#pxx", [g.ywu]);
            this.cqr.evt("cmincredit", "#pxx", [g.pxc]);
            this.cqr.evt("cmaxcredit", "#pxx", [g.vdd]);
            this.cqr.evt("cmaxwin", "#pxx", [g.qry]);
            for (var d = 0, j = b.length; d < j; d++) {
                b[d].mwg(g.idv)
            }
            for (var d = 0, j = o.length; d < j; d++) {
                o[d].mwg(g.vyz)
            }
            for (var d = 0, j = l.length; d < j; d++) {
                l[d].mwg(g.mwl)
            }
            for (var d = 0, j = c.length; d < j; d++) {
                c[d].mwg(g.orz)
            }
            for (var d = 0, j = f.length; d < j; d++) {
                f[d].mwg(g.uni)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].mwg(g.jde)
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].mwg(g.jde)
            }
            for (var d = 0, j = bol.length; d < j; d++) {
                bol[d].mwg(g.zcq)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].pxx(bju[d])
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].pxx(lux[d])
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.opq = function (c) {
        var b = (this.parent.qmr() != null) ? c.zeo : c.ysy;
        this.cqr.pbt("bett", this.lbi(b.jdc, null, this.parent.uhx.xzk("btn_b"), this.usl, null), ["buttons", "tbuttons"]);
        if (this.parent.qmr() != null) {
            this.cqr.pbt("autot", this.lbi(b.xty, null, this.parent.uhx.xzk("btn_as"), this.wch, null), ["buttons", "tbuttons"])
        }
        this.cqr.pbt("helpt", this.lbi(b.rhc, null, this.parent.uhx.xzk("btn_i"), this.lmg, null), ["buttons", "tbuttons"]);
        this.cqr.pbt("settingt", this.lbi(b.zzh, null, this.parent.uhx.xzk("btn_se"), this.nkj, null), ["buttons", "tbuttons"]);
        this.cqr.pbt("returnt", this.lbi(b.dgb, null, this.parent.uhx.xzk("btn_c"), this.fri, null), ["buttons", "tbuttons"])
    };
    this.otv = function (b) {
        this.cqr.pbt("betd", this.hdx(b.nxl, null, this.parent.aub), ["displays", "bdisplays"]);
        this.cqr.pbt("lbet", this.iku(b.pxy, "", this.parent.jst), ["buttons", "lbuttons", "bbuttons"]);
        this.cqr.pbt("mbet", this.iku(b.pbl, "+", this.parent.scf), ["buttons", "mbuttons", "bbuttons"]);
        this.cqr.pbt("linesd", this.hdx(b.cyi, null, this.parent.gzg), ["displays", "bdisplays"]);
        if (this.ciu) {
            this.cqr.pbt("llines", this.iku(b.wgx, "", this.parent.abr), ["buttons", "lbuttons", "bbuttons"]);
            this.cqr.pbt("mlines", this.iku(b.vbo, "+", this.parent.flr), ["buttons", "mbuttons", "bbuttons"])
        }
        this.cqr.pbt("totald", this.hdx(b.gll, null, this.parent.ffv()), ["displays", "bdisplays"])
    };
    this.ieu = function (b) {
        this.cqr.pbt("gamesd", this.hdx(b.ebr, null, this.aby[this.qyx]), ["displays", "adisplays"]);
        this.cqr.pbt("lgames", this.iku(b.hra, "", this.ykd), ["buttons", "lbuttons", "abuttons"]);
        this.cqr.pbt("mgames", this.iku(b.xsr, "+", this.ghn), ["buttons", "mbuttons", "abuttons"]);
        this.cqr.pbt("mincreditd", this.hdx(b.eby, null, "---"), ["displays", "adisplays"]);
        this.cqr.pbt("lmincredit", this.iku(b.peb, "", this.gcz), ["buttons", "lbuttons", "abuttons"]);
        this.cqr.pbt("mmincredit", this.iku(b.pzx, "+", this.asl), ["buttons", "mbuttons", "abuttons"]);
        this.cqr.pbt("maxcreditd", this.hdx(b.vnj, null, "---"), ["displays", "adisplays"]);
        this.cqr.pbt("lmaxcredit", this.iku(b.sxn, "", this.siu), ["buttons", "lbuttons", "abuttons"]);
        this.cqr.pbt("mmaxcredit", this.iku(b.kpb, "+", this.aex), ["buttons", "mbuttons", "abuttons"]);
        this.cqr.pbt("maxwind", this.hdx(b.ywu, null, "---"), ["displays", "adisplays"]);
        this.cqr.pbt("lmaxwin", this.iku(b.fhs, "", this.jjh), ["buttons", "lbuttons", "abuttons"]);
        this.cqr.pbt("mmaxwin", this.iku(b.kpx, "+", this.cmq), ["buttons", "mbuttons", "abuttons"]);
        this.cqr.pbt("cmincredit", this.kpz(b.pxc, "", this.bzo), ["checkboxes", "acheckboxes"]);
        this.cqr.pbt("cmaxcredit", this.kpz(b.vdd, "", this.wul), ["checkboxes", "acheckboxes"]);
        this.cqr.pbt("cmaxwin", this.kpz(b.qry, "", this.gsb), ["checkboxes", "acheckboxes"])
    };
    this.sfc = function (j, g, f, e, d, b) {
        var c = new see();
        c.dcf(new flw(0, 0, 1, 1), this.context2D);
        c.parent = this;
        c.jht = e;
        c.bsa = g;
        c.hxy(d, b);
        c.mwg(this.parent.don.sqq.jde);
        c.gzv(this.parent.style.sqq.jde);
        c.uuq(f);
        this.cqr.pbt(j, c, ["buttons", "sbuttons"])
    };
    this.kpr = function (f, e, d, c) {
        var b = new see();
        b.dcf(new flw(0, 0, 1, 1), this.context2D);
        b.parent = this;
        b.jht = c;
        b.bsa = e;
        b.mwg(this.parent.don.sqq.jde);
        b.gzv(this.parent.style.sqq.jde);
        b.uuq(d);
        this.cqr.pbt(f, b, ["buttons", "hbuttons"])
    };
    this.hdx = function (b, e, d) {
        var c = new dvm();
        c.dcf(b, this.context2D, null, e, d);
        c.parent = this;
        return c
    };
    this.iku = function (c, e, d) {
        var b = new rwv();
        b.dcf(c, this.context2D, null, null, e);
        b.parent = this;
        b.jht = d;
        return b
    };
    this.lbi = function (d, g, f, e, c) {
        var b = new rwv();
        b.dcf(d, this.context2D, null, f, g);
        b.parent = this;
        b.jht = e;
        if (c != null) {
            b.opa = c
        }
        return b
    };
    this.kpz = function (c, e, d) {
        var b = new vep();
        b.dcf(c, this.context2D, null, e);
        b.parent = this;
        b.jht = d;
        return b
    };
    this.jgs = function (o, n) {
        var m = this.cqr.ydk("buttons"),
            g = this.cqr.ydk("checkboxes"),
            f = o - this.x,
            d = n - this.y;
        for (var e = 0, l = m.length; e < l; e++) {
            var b = m[e];
            if (f >= b.x && f <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.cxw() === true) {
                if (b.wtk() === true && b.noy() === false) {
                    if (b instanceof see) {
                        this.parent.uhx.yiv("btn");
                        this.parent.uhx.onc("btn");
                        b.bso(true, true, true);
                        b.jht()
                    } else {
                        if (b instanceof rwv) {
                            if (b.yda() === "rect") {
                                this.parent.uhx.yiv("btn");
                                this.parent.uhx.onc("btn");
                                b.bso(true, true, false);
                                b.jht()
                            } else {
                                b.bso(true, false, false);
                                this.qtm = 0;
                                this.myl = 1;
                                if (b.jht() === false) {
                                    this.pov = function () {
                                        if (b.jht() === true) {
                                            clearInterval(a.lma);
                                            b.bso(false, true);
                                            for (var p = 0; p < l; p++) {
                                                m[p].ixm(false)
                                            }
                                        }
                                    };
                                    this.lma = setInterval(this.pov, this.zye)
                                }
                            }
                        }
                    }
                    for (var c = 0; c < l; c++) {
                        m[c].ixm(true)
                    }
                    return true
                }
            }
        }
        for (var e = 0, l = g.length; e < l; e++) {
            var k = g[e];
            if (f >= k.x && f <= k.x + k.width && d >= k.y && d <= k.y + k.height) {
                if (k.cxw() === true && k.wtk() === true) {
                    k.pur(!k.tye(), true);
                    k.jht();
                    for (var c = 0; c < l; c++) {
                        g[c].ixm(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.mqw = function () {
        var e = this.cqr.ydk("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.ehn() == true && !(c instanceof rwv && c.yda() === "rect")) {
                clearInterval(this.lma);
                c.bso(false, true);
                return true
            }
        }
        return false
    };
    this.gor = function (b) {};
    this.mnj = function (b) {};
    this.elv = function (c, b, d) {
        this.cqr.evt("betd", "#rqq", [c]);
        this.cqr.evt("linesd", "#rqq", [b]);
        this.cqr.evt("totald", "#rqq", [d]);
        this.parent.qay()
    };
    this.kvo = function (b) {
        this.aby = b.g;
        this.efe = b.v;
        this.zrx = b.v;
        this.ymx = b.r;
        this.ldk = b.l;
        if (typeof b.m != "undefined" && b.m != null && b.m > 0) {
            this.cnv = b.m;
            this.nre = b.m
        }
    };
    this.plh = function () {
        if (this.ymx === true) {
            this.uqf = this.parent.dgi;
            this.oge = this.parent.dgi;
            this.qyx = 0;
            this.mlu = 0
        }
    };
    this.ahn = function () {
        if (this.aby.length > 0 && this.qyx >= 0) {
            return this.aby[this.qyx]
        }
        return 0
    };
    this.xmc = function () {
        var b = this.cqr.dgc("cmincredit") == null || this.cqr.evt("cmincredit", "#tye");
        if (this.uqf > 0 && b === true) {
            return this.uqf
        }
        return 0
    };
    this.aaj = function () {
        var b = this.cqr.dgc("cmaxcredit") == null || this.cqr.evt("cmaxcredit", "#tye");
        if (this.oge > 0 && b === true) {
            return this.oge
        }
        return 0
    };
    this.qlq = function () {
        var b = this.cqr.dgc("cmaxwin") == null || this.cqr.evt("cmaxwin", "#tye");
        if (this.mlu > 0 && b === true) {
            return this.mlu
        }
        return 0
    };
    this.jog = function (c, f, d) {
        if (this.aby && this.aby.length > 0) {
            var g = this.cqr.dgc("cmincredit") == null || this.cqr.evt("cmincredit", "#tye"),
                e = this.cqr.dgc("cmaxcredit") == null || this.cqr.evt("cmaxcredit", "#tye"),
                b = this.cqr.dgc("cmaxwin") == null || this.cqr.evt("cmaxwin", "#tye");
            if (this.ymx === true) {
                g = this.ldk;
                e = false;
                b = false;
                this.plh()
            } else {
                if (this.ldk === true) {
                    g = true;
                    this.uqf = (this.uqf < this.parent.dgi) ? this.uqf : this.parent.dgi;
                    this.uqf = (this.uqf > 0) ? this.uqf : this.parent.dgi
                } else {
                    g = (this.uqf < this.parent.dgi) ? g : false;
                    this.uqf = (this.uqf < this.parent.dgi) ? this.uqf : this.parent.dgi
                }
                e = (this.oge > this.parent.dgi) ? e : false;
                this.oge = (this.oge > this.parent.dgi) ? this.oge : this.parent.dgi
            }
            this.cqr.evt("cmincredit", "#pur", [g]);
            this.cqr.evt("cmaxcredit", "#pur", [e]);
            this.cqr.evt("cmaxwin", "#pur", [b]);
            this.cqr.evt("gamesd", "#rqq", [(this.aby[this.qyx] > 0) ? this.aby[this.qyx] : "---"]);
            this.cqr.evt("mincreditd", "#rqq", [(g === true && this.uqf > 0) ? this.parent.jea(this.uqf) : "---"]);
            this.cqr.evt("maxcreditd", "#rqq", [(e === true && this.oge > 0) ? this.parent.jea(this.oge) : "---"]);
            this.cqr.evt("maxwind", "#rqq", [(b === true && this.mlu > 0) ? this.parent.jea(this.mlu) : "---"]);
            this.cqr.evt("lmincredit", "#wmg", [g]);
            this.cqr.evt("mmincredit", "#wmg", [g]);
            this.cqr.evt("lmaxcredit", "#wmg", [e]);
            this.cqr.evt("mmaxcredit", "#wmg", [e]);
            this.cqr.evt("lmaxwin", "#wmg", [b]);
            this.cqr.evt("mmaxwin", "#wmg", [b])
        }
        this.wsw = c;
        this.tue = f;
        if (typeof d == "number") {
            if (d === 0) {
                this.usl()
            } else {
                if (d === 1) {
                    if (this.parent.qmr() != null) {
                        this.wch()
                    } else {
                        this.lmg()
                    }
                } else {
                    if (d === 2) {
                        if (this.parent.qmr() != null) {
                            this.lmg()
                        } else {
                            this.nkj()
                        }
                    } else {
                        if (d === 3 && this.parent.qmr() != null) {
                            this.nkj()
                        }
                    }
                }
            }
        } else {
            this.usl()
        }
        this.cqr.uqk("tbuttons", "#iwc", [true]);
        this.wmg(true);
        this.parent.qay()
    };
    this.crq = function () {
        this.cqr.uqk("tbuttons", "#iwc", [false]);
        this.cqr.uqk("bbuttons", "#iwc", [false]);
        this.cqr.uqk("sbuttons", "#iwc", [false]);
        this.cqr.uqk("abuttons", "#iwc", [false]);
        this.cqr.uqk("acheckboxes", "#iwc", [false]);
        this.wmg(false);
        this.parent.qay()
    };
    this.stop = function () {
        clearInterval(this.lma)
    };
    this.hqp = function (d, b) {
        var c = "";
        this.cqr.evt("language", "#rqq", [neg.tlo.vbj(d.language)]);
        this.cqr.evt("audio", "#rqq", [neg.tlo.vbj(d.audio)]);
        this.cqr.evt("melody", "#rqq", [neg.tlo.vbj(d.hwj)]);
        this.cqr.evt("fullscreen", "#rqq", [neg.tlo.vbj(d.asb)]);
        this.cqr.evt("turbo", "#rqq", [neg.tlo.vbj(d.zmp)]);
        this.cqr.evt("help", "#rqq", [neg.tlo.vbj(d.ijo)]);
        this.cqr.evt("history", "#rqq", [neg.tlo.vbj(d.law)]);
        this.cqr.evt("statistic", "#rqq", [neg.tlo.vbj(d.uhj)]);
        this.cqr.evt("rules", "#rqq", [neg.tlo.vbj(d.etp)]);
        this.cqr.evt("gamble", "#rqq", [neg.tlo.vbj(d.frq)]);
        if (neg.tlo.shd[neg.tlo.kre] === neg.gzo.oen) {
            c = neg.tlo.vbj(d.left)
        } else {
            if (neg.tlo.shd[neg.tlo.kre] === neg.gzo.dbj) {
                c = neg.tlo.vbj(d.nmb)
            } else {
                if (neg.tlo.shd[neg.tlo.kre] === neg.gzo.udx) {
                    c = neg.tlo.vbj(d.rpm)
                }
            }
        }
        this.cqr.evt("adjustment", "#rqq", [c]);
        if (b && b === true) {
            this.elh = neg.tlo.vbj(d.ver) + "/" + neg.tlo.vbj(d.avj) + ":";
            this.afj = neg.tlo.vbj(d.gzg) + ":"
        } else {
            this.elh = neg.tlo.vbj(d.ver) + ":"
        }
        this.pjp = neg.tlo.vbj(d.ijn) + ":";
        this.jin = neg.tlo.vbj(d.sql);
        this.fej = neg.tlo.vbj(d.heu);
        if (this.parent.whe === true && neg.epl.value44.d === true) {
            this.rcg = neg.tlo.vbj(d.fpq)
        }
        this.cqr.evt("cmincredit", "#rqq", [neg.tlo.vbj(d.pni)]);
        this.cqr.evt("cmaxcredit", "#rqq", [neg.tlo.vbj(d.ekg)]);
        this.cqr.evt("cmaxwin", "#rqq", [neg.tlo.vbj(d.peo)])
    };
    this.qay = function (l, j, m, e) {
        if (!this.cxw() || !this.parent.ydx()) {
            return
        }
        var c = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = this.cqr.ydk("tbuttons"),
            b = this.ufl,
            g = this.ued;
        if (this.mgu) {
            b = n.createRadialGradient(this.x + this.width / 2, this.y + this.height / 2, this.height / 6, this.x + this.width / 2, this.y + this.height / 2, this.height);
            b.addColorStop(0, this.ufl);
            b.addColorStop(1, this.mgu)
        }
        if (this.yqc) {
            g = n.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            g.addColorStop(0, this.ued);
            g.addColorStop(1, this.yqc)
        }
        n.save();
        n.clearRect(0, 0, this.width, this.height);
        if (c) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        neg.tlv.qic(n, 0, 0, this.width, this.height, this.dcx, b, g, this.fyp);
        for (var d = 0, f = k.length; d < f; d++) {
            k[d].qay()
        }
        if (this.qgq === 0) {
            this.lgo(n)
        } else {
            if (this.qgq === 1) {
                this.iwv(n)
            } else {
                if (this.qgq === 2) {
                    this.ioz(n)
                } else {
                    if (this.qgq === 3) {
                        this.squ(n)
                    }
                }
            }
        }
        n.restore();
        if (this.mff && this.yzc) {
            if (c) {
                this.mff.drawImage(this.yzc, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.mff.drawImage(this.yzc, this.x, this.y)
            }
        }
    };
    this.lgo = function (c) {
        var f = this.cqr.ydk("bbuttons"),
            d = this.cqr.ydk("bdisplays");
        if (this.eju.width > 0 && this.eju.height > 0) {
            neg.tlv.udc(c, this.elh, this.apc, this.eju.x, this.eju.y, this.eju.width, this.eju.height, this.qcz, this.ufh, this.uyq, 0)
        }
        if (this.nfh.width > 0 && this.nfh.height > 0) {
            neg.tlv.udc(c, this.afj, this.apc, this.nfh.x, this.nfh.y, this.nfh.width, this.nfh.height, this.qcz, this.ufh, this.uyq, 0)
        }
        if (this.pjl.width > 0 && this.pjl.height > 0) {
            neg.tlv.udc(c, this.pjp, this.apc, this.pjl.x, this.pjl.y, this.pjl.width, this.pjl.height, this.qcz, this.ufh, this.uyq, 0)
        }
        neg.tlv.jus(c, this.zje, this.apc, this.vft.x, this.vft.y, this.vft.width, this.vft.height, this.qcz, this.bjy, this.uyq, "center", true);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].qay()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].qay()
        }
    };
    this.iwv = function (c) {
        var f = this.cqr.ydk("abuttons"),
            d = this.cqr.ydk("adisplays"),
            g = this.cqr.ydk("acheckboxes");
        neg.tlv.jus(c, this.rcg, this.apc, this.yvs.x, this.yvs.y, this.yvs.width, this.yvs.height, this.qcz, this.bjy, this.uyq, "center", true);
        neg.tlv.udc(c, this.jin, this.apc, this.ley.x, this.ley.y, this.ley.width, this.ley.height, this.qcz, this.iwr, this.uyq, 0);
        neg.tlv.rnq(c, this.fej, this.apc, this.fqv.x, this.fqv.y, this.fqv.width, this.fqv.height, this.qcz, this.iwr, this.uyq);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].qay()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].qay()
        }
        for (var e = 0, b = g.length; e < b; e++) {
            g[e].qay()
        }
    };
    this.ioz = function (c) {
        var d = this.cqr.ydk("hbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].qay()
        }
    };
    this.squ = function (c) {
        var d = this.cqr.ydk("sbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].qay()
        }
    };
    this.ghn = function () {
        a.qyx = (a.qyx < a.aby.length - 1) ? a.qyx + 1 : 0;
        a.parent.uhx.onc("btn");
        a.cqr.evt("gamesd", "#rqq", [(a.aby[a.qyx] > 0) ? a.aby[a.qyx] : "---"]);
        a.qay();
        return (a.qyx >= a.aby.length - 1)
    };
    this.ykd = function () {
        a.qyx = (a.qyx > 0) ? a.qyx - 1 : a.aby.length - 1;
        a.parent.uhx.onc("btn");
        a.cqr.evt("gamesd", "#rqq", [(a.aby[a.qyx] > 0) ? a.aby[a.qyx] : "---"]);
        a.qay();
        return (a.qyx <= 0)
    };
    this.asl = function () {
        var b = a.cqr.dgc("cmincredit") == null || a.cqr.evt("cmincredit", "#tye");
        if (b === true) {
            if (++a.qtm > 10) {
                a.myl = 10
            }
            a.uqf = (a.uqf + (a.efe * a.myl) <= a.parent.dgi) ? a.uqf + (a.efe * a.myl) : a.parent.dgi;
            a.parent.uhx.onc("btn");
            a.cqr.evt("mincreditd", "#rqq", [(a.uqf > 0) ? a.parent.jea(a.uqf) : "---"]);
            a.cqr.evt("mmincredit", "#wmg", [b && a.uqf < a.parent.dgi]);
            a.cqr.evt("lmincredit", "#wmg", [b && a.uqf > 0]);
            a.qay();
            return (a.uqf >= a.parent.dgi)
        }
        return true
    };
    this.gcz = function () {
        var b = a.cqr.dgc("cmincredit") == null || a.cqr.evt("cmincredit", "#tye");
        if (b === true) {
            if (++a.qtm > 10) {
                a.myl = 10
            }
            a.uqf = (a.uqf - (a.efe * a.myl) > 0) ? a.uqf - (a.efe * a.myl) : 0;
            a.parent.uhx.onc("btn");
            a.cqr.evt("mincreditd", "#rqq", [(a.uqf > 0) ? a.parent.jea(a.uqf) : "---"]);
            a.cqr.evt("mmincredit", "#wmg", [b && a.uqf < a.parent.dgi]);
            a.cqr.evt("lmincredit", "#wmg", [b && a.uqf > 0]);
            a.qay();
            return (a.uqf >= a.parent.dgi || a.uqf <= 0)
        }
        return true
    };
    this.aex = function () {
        var b = a.cqr.dgc("cmaxcredit") == null || a.cqr.evt("cmaxcredit", "#tye");
        if (b === true) {
            if (++a.qtm > 10) {
                a.myl = 10
            }
            a.oge = (a.oge + (a.zrx * a.myl) > 0) ? a.oge + (a.zrx * a.myl) : 0;
            a.parent.uhx.onc("btn");
            a.cqr.evt("maxcreditd", "#rqq", [(a.oge > 0) ? a.parent.jea(a.oge) : "---"]);
            a.cqr.evt("lmaxcredit", "#wmg", [b && a.oge > a.parent.dgi]);
            a.qay();
            return (a.oge <= a.parent.dgi)
        }
        return true
    };
    this.siu = function () {
        var b = a.cqr.dgc("cmaxcredit") == null || a.cqr.evt("cmaxcredit", "#tye");
        if (b === true) {
            if (++a.qtm > 10) {
                a.myl = 10
            }
            a.oge = (a.oge - (a.zrx * a.myl) > a.parent.dgi) ? a.oge - (a.zrx * a.myl) : a.parent.dgi;
            a.parent.uhx.onc("btn");
            a.cqr.evt("maxcreditd", "#rqq", [(a.oge > 0) ? a.parent.jea(a.oge) : "---"]);
            a.cqr.evt("lmaxcredit", "#wmg", [b && a.oge > a.parent.dgi]);
            a.qay();
            return (a.oge <= a.parent.dgi)
        }
        return true
    };
    this.cmq = function () {
        var b = a.cqr.dgc("cmaxwin") == null || a.cqr.evt("cmaxwin", "#tye");
        if (b === true) {
            if (++a.qtm > 10) {
                a.myl = 10
            }
            a.mlu = (a.mlu + (a.zrx * a.myl) > 0) ? a.mlu + (a.zrx * a.myl) : 0;
            a.parent.uhx.onc("btn");
            a.cqr.evt("maxwind", "#rqq", [(a.mlu > 0) ? a.parent.jea(a.mlu) : "---"]);
            a.cqr.evt("lmaxwin", "#wmg", [b && a.mlu > a.zrx]);
            a.qay();
            return (a.mlu <= a.zrx)
        }
        return true
    };
    this.jjh = function () {
        var b = a.cqr.dgc("cmaxwin") == null || a.cqr.evt("cmaxwin", "#tye");
        if (b === true) {
            if (++a.qtm > 10) {
                a.myl = 10
            }
            a.mlu = (a.mlu - (a.zrx * a.myl) > 0) ? a.mlu - (a.zrx * a.myl) : a.zrx;
            a.parent.uhx.onc("btn");
            a.cqr.evt("maxwind", "#rqq", [(a.mlu > 0) ? a.parent.jea(a.mlu) : "---"]);
            a.cqr.evt("lmaxwin", "#wmg", [b && a.mlu > a.zrx]);
            a.qay();
            return (a.mlu <= a.zrx)
        }
        return true
    };
    this.bzo = function () {
        var b = a.cqr.dgc("cmincredit") == null || a.cqr.evt("cmincredit", "#tye");
        a.uqf = a.parent.dgi;
        a.cqr.evt("mincreditd", "#rqq", [(b === true && a.uqf > 0) ? a.parent.jea(a.uqf) : "---"]);
        a.cqr.evt("lmincredit", "#wmg", [b]);
        a.cqr.evt("mmincredit", "#wmg", [b && a.uqf < a.parent.dgi]);
        a.qay()
    };
    this.wul = function () {
        var b = a.cqr.dgc("cmaxcredit") == null || a.cqr.evt("cmaxcredit", "#tye");
        a.oge = a.parent.dgi;
        a.cqr.evt("maxcreditd", "#rqq", [(b === true && a.oge > 0) ? a.parent.jea(a.oge) : "---"]);
        a.cqr.evt("lmaxcredit", "#wmg", [b && a.oge > a.parent.dgi]);
        a.cqr.evt("mmaxcredit", "#wmg", [b]);
        a.qay()
    };
    this.gsb = function () {
        var b = a.cqr.dgc("cmaxwin") == null || a.cqr.evt("cmaxwin", "#tye");
        if (a.mlu === 0) {
            a.mlu = a.zrx
        }
        a.cqr.evt("maxwind", "#rqq", [(b === true && a.mlu > 0) ? a.parent.jea(a.mlu) : "---"]);
        a.cqr.evt("lmaxwin", "#wmg", [b && a.mlu > a.zrx]);
        a.cqr.evt("mmaxwin", "#wmg", [b]);
        a.qay()
    };
    this.usl = function () {
        a.qgq = 0;
        a.cqr.evt("bett", "#bso", [true, false, false]);
        a.cqr.evt("autot", "#bso", [false, false, false]);
        a.cqr.evt("helpt", "#bso", [false, false, false]);
        a.cqr.evt("settingt", "#bso", [false, false, false]);
        a.cqr.evt("returnt", "#bso", [false, false, false]);
        a.cqr.uqk("bbuttons", "#iwc", [a.wsw]);
        a.cqr.uqk("bbuttons", "#wmg", [a.wsw]);
        a.cqr.uqk("abuttons", "#iwc", [false]);
        a.cqr.uqk("acheckboxes", "#iwc", [false]);
        a.cqr.uqk("hbuttons", "#iwc", [false]);
        a.cqr.uqk("sbuttons", "#iwc", [false]);
        a.qay()
    };
    this.wch = function () {
        var d = a.cqr.dgc("cmincredit") == null || a.cqr.evt("cmincredit", "#tye"),
            c = a.cqr.dgc("cmaxcredit") == null || a.cqr.evt("cmaxcredit", "#tye"),
            b = a.cqr.dgc("cmaxwin") == null || a.cqr.evt("cmaxwin", "#tye");
        a.qgq = 1;
        a.efe = (a.cnv > 0) ? a.parent.ffv() * a.cnv : a.efe;
        a.zrx = (a.nre > 0) ? a.parent.ffv() * a.nre : a.zrx;
        a.cqr.evt("bett", "#bso", [false, false, false]);
        a.cqr.evt("autot", "#bso", [true, false, false]);
        a.cqr.evt("helpt", "#bso", [false, false, false]);
        a.cqr.evt("settingt", "#bso", [false, false, false]);
        a.cqr.evt("returnt", "#bso", [false, false, false]);
        a.cqr.uqk("bbuttons", "#iwc", [false]);
        a.cqr.uqk("abuttons", "#iwc", [true]);
        a.cqr.evt("mmincredit", "#wmg", [d && a.uqf < a.parent.dgi]);
        a.cqr.evt("lmaxcredit", "#wmg", [c && a.oge > a.parent.dgi]);
        a.cqr.evt("lmaxwin", "#wmg", [b && a.mlu > a.zrx]);
        a.cqr.uqk("acheckboxes", "#iwc", [true]);
        a.cqr.uqk("hbuttons", "#iwc", [false]);
        a.cqr.uqk("sbuttons", "#iwc", [false]);
        if (a.ldk === true) {
            a.cqr.evt("cmincredit", "#iwc", [false])
        }
        a.qay()
    };
    this.lmg = function () {
        a.qgq = 2;
        a.cqr.evt("bett", "#bso", [false, false, false]);
        a.cqr.evt("autot", "#bso", [false, false, false]);
        a.cqr.evt("helpt", "#bso", [true, false, false]);
        a.cqr.evt("settingt", "#bso", [false, false, false]);
        a.cqr.evt("returnt", "#bso", [false, false, false]);
        a.cqr.uqk("bbuttons", "#iwc", [false]);
        a.cqr.uqk("abuttons", "#iwc", [false]);
        a.cqr.uqk("acheckboxes", "#iwc", [false]);
        a.cqr.uqk("hbuttons", "#iwc", [true]);
        a.cqr.uqk("sbuttons", "#iwc", [false]);
        a.qay()
    };
    this.nkj = function () {
        a.qgq = 3;
        a.cqr.evt("bett", "#bso", [false, false, false]);
        a.cqr.evt("autot", "#bso", [false, false, false]);
        a.cqr.evt("helpt", "#bso", [false, false, false]);
        a.cqr.evt("settingt", "#bso", [true, false, false]);
        a.cqr.evt("returnt", "#bso", [false, false, false]);
        a.cqr.uqk("bbuttons", "#iwc", [false]);
        a.cqr.uqk("abuttons", "#iwc", [false]);
        a.cqr.uqk("acheckboxes", "#iwc", [false]);
        a.cqr.uqk("hbuttons", "#iwc", [false]);
        a.cqr.uqk("sbuttons", "#iwc", [true]);
        a.cqr.evt("gamble", "#iwc", [a.tue]);
        a.qay()
    };
    this.fri = function () {
        a.parent.sys();
        a.cqr.evt("returnt", "#bso", [false, false, false])
    }
}
fer.prototype = new rom;

function own() {
    var a = this;
    this.qcz = null;
    this.uyq = "bold";
    this.ufl = "rgb(0,0,0)";
    this.mgu = null;
    this.apc = "rgb(255,255,255)";
    this.yqc = null;
    this.ued = "rgb(60,60,60)";
    this.fqu = null;
    this.uvf = null;
    this.pjs = false;
    this.klt = [];
    this.zcf = [];
    this.pij = null;
    this.jam = 19;
    this.svp = 15;
    this.eaj = 120;
    this.ujo = 2;
    this.dqb = 2;
    this.oea = 2;
    this.xkb = 10;
    this.cef = 12;
    this.dcf = function (b, d, c) {
        own.prototype.dcf.call(this, b, d, c)
    };
    this.mwg = function (b) {
        try {
            this.cef = b.fontSize;
            this.jam = b.mgt;
            this.svp = b.wyc;
            this.eaj = b.upn;
            this.ujo = b.wkz;
            this.dqb = b.dhm;
            this.oea = b.hud;
            this.xkb = b.psh
        } catch (c) {
            console.error(c)
        }
    };
    this.gzv = function (b) {
        try {
            this.qcz = b.font;
            this.uyq = b.njm;
            this.ufl = b.backgroundColor;
            this.mgu = b.tkk;
            this.apc = b.txr;
            this.ued = b.borderColor;
            this.yqc = b.bhj;
            if (this.mgu) {
                this.fqu = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.fqu.addColorStop(0, this.mgu);
                this.fqu.addColorStop(0.5, this.ufl)
            } else {
                this.fqu = this.ufl
            }
            if (this.yqc) {
                this.uvf = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.uvf.addColorStop(0, this.yqc);
                this.uvf.addColorStop(1, this.ued)
            } else {
                this.uvf = this.ued
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.jgs = function (b, g, c) {
        var e = b - this.x,
            d = g - this.y,
            f = (c && c === true) ? this.xkb : 0;
        if (e >= this.x && e <= this.x + this.width && d >= this.y && d <= this.y + this.height + f && this.wtk()) {
            this.parent.vxc();
            return true
        }
        return false
    };
    this.paj = function (d, b, c) {
        this.zcf.push({
            id: d,
            iae: b,
            value: c,
            lpv: null
        })
    };
    this.pko = function (e, c, d, b) {
        this.zcf.push({
            id: e,
            iae: c,
            value: d,
            lpv: b
        })
    };
    this.cvh = function (d, b, c) {
        this.klt.push({
            id: d,
            yga: b,
            value: c
        })
    };
    this.lbu = function (e, d) {
        for (var c = 0, b = this.zcf.length; c < b; c++) {
            if (this.zcf[c].id == e) {
                this.zcf[c].value = d;
                return true
            }
        }
        return false
    };
    this.vyh = function (c, e) {
        for (var d = 0, b = c.length; d < b; d++) {
            if (c[d] == e) {
                return d
            }
        }
        return -1
    };
    this.wag = function (e, d) {
        for (var c = 0, b = this.klt.length; c < b; c++) {
            if (this.klt[c].id == e) {
                if (this.klt[c].value != d) {
                    this.klt[c].value = d;
                    return true
                } else {
                    return false
                }
            }
        }
        return false
    };
    this.vov = function (b) {
        this.pij = b
    };
    this.iwc = function (b) {
        this.pjs = b
    };
    this.wtk = function (b) {
        return this.pjs
    };
    this.zog = function (c, b) {
        if (this.lbu(c, b)) {
            window.xzm(a.qay)
        }
    };
    this.yjr = function (c, b) {
        if (this.wag(c, b)) {
            window.xzm(a.qay)
        }
    };
    this.wsx = function (b) {
        this.vov(b);
        window.xzm(a.qay)
    };
    this.qay = function () {
        if (!a.cxw() || !a.parent.ydx()) {
            return
        }
        var e = (a.height - a.cef) / 2 + a.dqb,
            c = a.ujo + a.jam * a.zcf.length,
            d = a.width - c - (a.eaj * a.klt.length),
            b = a.context2D;
        b.save();
        neg.tlv.hmu(b, 0, 0, a.width, a.height, a.fqu, 1);
        a.rti(b, e);
        a.ikc(b, e);
        if (a.pij && a.pij != "") {
            neg.tlv.rnq(b, a.pij, a.apc, c, e, d, a.cef, a.qcz, a.cef, a.uyq)
        } else {
            if (a.wtk()) {
                a.flj(b)
            }
        }
        a.lgm(b, 0, a.height - a.oea / 2, a.width, a.height - a.oea / 2);
        b.restore();
        if (a.mff && a.yzc) {
            a.mff.drawImage(a.yzc, a.x, a.y)
        }
    };
    this.rti = function (d, g) {
        var c = 0;
        for (var f = 0, b = this.zcf.length; f < b; f++) {
            if (this.zcf[f].lpv) {
                var e = this.vyh(this.zcf[f].lpv, this.zcf[f].value);
                if (this.zcf[f].iae instanceof Array) {
                    neg.tlv.rnq(d, this.zcf[f].iae[e], this.apc, c, g, this.jam, this.cef, this.qcz, this.cef, this.uyq)
                } else {
                    if (this.zcf[f].iae instanceof Image || this.zcf[f].iae instanceof HTMLCanvasElement) {
                        d.drawImage(this.zcf[f].iae, e * this.svp, 0, this.svp, this.zcf[f].iae.height, c + this.ujo, g - this.dqb, this.jam - 2 * this.ujo, this.cef)
                    }
                }
            } else {
                d.save();
                d.globalAlpha = (this.zcf[f].value == true) ? 1 : 0.3;
                if (this.zcf[f].iae instanceof String) {
                    neg.tlv.rnq(d, this.zcf[f].iae, this.apc, c, g, this.jam, this.cef, this.qcz, this.cef, this.uyq)
                } else {
                    if (this.zcf[f].iae instanceof Image || this.zcf[f].iae instanceof HTMLCanvasElement) {
                        d.drawImage(this.zcf[f].iae, c + this.ujo, g - this.dqb, this.jam - 2 * this.ujo, this.cef)
                    }
                }
                d.restore()
            }
            c += this.jam;
            this.lgm(d, c, 0, c, this.height)
        }
        return c
    };
    this.ikc = function (d, f) {
        var c = this.width - this.ujo - this.eaj * this.klt.length;
        for (var e = 0, b = this.klt.length; e < b; e++) {
            if (this.klt[e].id == "freeplay") {
                neg.tlv.hmu(d, c, 0, this.eaj, this.height, "red", 0.4)
            } else {
                if (this.klt[e].id == "freespin") {
                    neg.tlv.hmu(d, c, 0, this.eaj, this.height, "rgb(100,255,100)", 0.5)
                }
            }
            this.lgm(d, c, 0, c, this.height);
            neg.tlv.rnq(d, this.klt[e].yga + this.klt[e].value, this.apc, c, f, this.eaj, this.cef, this.qcz, this.cef, this.uyq);
            c += this.eaj
        }
    };
    this.lgm = function (b, d, f, c, e) {
        b.save();
        b.strokeStyle = this.uvf;
        b.lineWidth = this.oea;
        b.beginPath();
        b.moveTo(d, f);
        b.lineTo(c, e);
        b.stroke();
        b.restore()
    };
    this.flj = function (c) {
        if (this.parent.oxt.dgc("topb") == null) {
            return
        }
        var g = 3 * this.height,
            j = this.oea,
            e = 9,
            d = Math.floor(this.height / 5),
            b = (this.width - g) / 2,
            k = this.oea;
        c.save();
        c.strokeStyle = this.ued;
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
own.prototype = new rom;

function gnc() {
    var b = this;
    var c = 0;
    var a = 1;
    this.ozs = 7;
    this.hmj = 89;
    this.jpx = 10000;
    this.cqr = null;
    this.pjs = false;
    this.idp = false;
    this.ouo = -1;
    this.ynw = 0;
    this.qcz = null;
    this.uyq = "bold";
    this.ufl = "black";
    this.djr = null;
    this.ibd = null;
    this.akr = null;
    this.apc = "white";
    this.laq = 0.8;
    this.fpv = 0;
    this.yfs = 0;
    this.rif = 0;
    this.mst = 0;
    this.nqt = 0;
    this.lup = 0;
    this.dva = 0;
    this.ujo = 10;
    this.dqb = 5;
    this.zkl = 10;
    this.xpk = this.ujo;
    this.kvr = 10;
    this.por = 20;
    this.awp = 40;
    this.fyp = 4;
    this.cef = 10;
    this.ggf = null;
    this.ovq = null;
    this.qsd = "";
    this.vnl = null;
    this.dcf = function (d, f, e) {
        gnc.prototype.dcf.call(this, d, f, e);
        this.cqr = new fxb();
        this.cqr.dcf();
        this.cqr.erq("buttons");
        this.cqr.erq("system");
        this.cqr.erq("setting")
    };
    this.mwg = function (d) {
        try {
            this.cef = d.fontSize;
            this.kvr = d.osa;
            this.por = d.egq;
            this.awp = d.lfi;
            this.fyp = d.mmg;
            this.ujo = d.wkz;
            this.dqb = d.dhm;
            this.zkl = d.zub
        } catch (f) {
            console.error(f)
        }
    };
    this.gzv = function (g, m) {
        try {
            var k = this.cqr.ydk("buttons"),
                j = (m === true) ? g.oko.noi : g.ivm.noi;
            this.qcz = g.font;
            this.uyq = g.njm;
            this.ufl = g.backgroundColor;
            this.djr = g.wvz;
            this.ibd = g.itm;
            this.apc = g.txr;
            this.laq = g.jya;
            if (this.djr && this.ibd) {
                this.akr = this.context2D.createLinearGradient(0, 0, this.width, 0);
                this.akr.addColorStop(0, this.djr);
                this.akr.addColorStop(0.5, this.ibd);
                this.akr.addColorStop(1, this.djr)
            }
            for (var f = 0, d = k.length; f < d; f++) {
                k[f].gzv(j)
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.jgs = function (p, o) {
        var n = this.cqr.vcc(),
            q = this.cqr.dgc("audio"),
            r = this.cqr.dgc("language"),
            f = this.cqr.dgc("history"),
            e = p - this.x,
            d = o - this.y;
        if (this.idp) {
            return true
        }
        for (var l = 0, m = n.length; l < m; l++) {
            var g = n[l];
            if (e >= g.x && e <= g.x + g.width && d >= g.y && d <= g.y + g.height && g.cxw()) {
                if (g.wtk() && !g.noy()) {
                    if (g != q && g != r) {
                        this.parent.uhx.yiv("btn");
                        this.parent.uhx.onc("btn")
                    }
                    g.bso(true, true, false);
                    g.jht();
                    for (var k = 0; k < m; k++) {
                        n[k].ixm(true)
                    }
                    if (g != f) {
                        if (this.ouo >= 0) {
                            clearTimeout(this.ouo);
                            this.ouo = -1
                        }
                        this.ouo = setTimeout(this.oek, this.jpx)
                    }
                }
                return true
            }
        }
        if (this.cxw() && this.wtk()) {
            if (p < this.x + this.nqt || p > this.x + this.nqt + this.lup || o < this.y || o > this.y + this.height) {
                if (this.ouo >= 0) {
                    clearTimeout(this.ouo);
                    this.ouo = -1
                }
                return false
            }
        }
        return true
    };
    this.mqw = function () {
        var g = this.cqr.vcc();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.ehn() == true) {
                e.bso(false, true);
                return true
            }
        }
        return false
    };
    this.gor = function (e) {
        var o = this.cqr.vcc(),
            d = this.cqr.ydk("system"),
            m = this.cqr.ydk("setting"),
            q = this.cqr.dgc("audio"),
            l = 0,
            k = 0,
            n = 0,
            g = 0;
        if (this.idp) {
            return true
        }
        for (l = 0, n = m.length; l < n; l++) {
            var f = m[l];
            if ((e == f.opa || e == f.vdn) && !f.noy()) {
                if (f != q) {
                    this.parent.uhx.yiv("btn");
                    this.parent.uhx.onc("btn")
                }
                f.bso(true, true, false);
                f.jht();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].ixm(true)
                }
                if (this.ouo >= 0) {
                    clearTimeout(this.ouo);
                    this.ouo = -1
                }
                return true
            }
        }
        for (l = 0, n = d.length; l < n; l++) {
            var f = d[l];
            if ((e == f.opa || e == f.vdn) && f.wtk() && !f.noy()) {
                if (f != q) {
                    this.parent.uhx.yiv("btn");
                    this.parent.uhx.onc("btn")
                }
                f.bso(true, true, false);
                f.jht();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].ixm(true)
                }
                if (this.ouo >= 0) {
                    clearTimeout(this.ouo);
                    this.ouo = -1
                }
                return true
            }
        }
        if (this.cxw() && this.wtk()) {
            if (this.parent.lwq) {
                for (l = 0, n = this.parent.lwq.nbf.length; l < n; l++) {
                    var p = this.parent.lwq.nbf[l];
                    if (p.xfh == e || p.xfh == e) {
                        if (this.ouo >= 0) {
                            clearTimeout(this.ouo);
                            this.ouo = -1
                        }
                        return false
                    }
                }
            }
        }
        return false
    };
    this.mnj = function () {
        var g = this.cqr.vcc();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.ehn() == true) {
                e.bso(false, true, false);
                return true
            }
        }
        return false
    };
    this.tai = function (e, m) {
        var k = this.cqr.vcc(),
            l = e - this.x,
            j = m - this.y;
        this.ovq = this.ggf;
        this.ggf = null;
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l >= f.x && l <= f.x + f.width && j >= f.y && j <= f.y + f.height && f.cxw() && f.wtk() && !f.noy()) {
                this.ggf = f
            }
        }
        if (this.ggf) {
            this.ics(true)
        } else {
            this.ics(false)
        }
        return true
    };
    this.sfc = function (e, f, g, j, m, d, n) {
        this.dva = g.width;
        var l = new flw(this.xpk, this.dqb, this.dva, this.dva);
        var k = new see();
        k.dcf(l, this.context2D);
        k.parent = this;
        k.jht = j;
        k.fxo = f;
        k.hxy(d, n);
        k.mwg(this.parent.don.pgu.krb);
        k.gzv(this.parent.style.pgu.ivm.noi);
        k.uuq(g);
        if (m != null) {
            k.vdn = m.acg;
            k.opa = m.xfh;
            k.tha = m.value
        }
        this.cqr.pbt(e, k, ["buttons", "setting"]);
        this.xpk += this.dva + this.ujo;
        this.lup = this.xpk
    };
    this.ogw = function (l, k, j, g, e) {
        this.dva = j.width;
        var f = new flw(this.xpk, this.dqb, this.dva, this.dva);
        var d = new see();
        d.dcf(f, this.context2D);
        d.parent = this;
        d.jht = g;
        d.fxo = k;
        d.mwg(this.parent.don.pgu.krb);
        d.gzv(this.parent.style.pgu.ivm.noi);
        d.uuq(j);
        if (e != null) {
            d.vdn = e.acg;
            d.opa = e.xfh;
            d.tha = e.value
        }
        this.cqr.pbt(l, d, ["buttons", "system"]);
        this.xpk += this.dva + this.ujo;
        this.lup = this.xpk
    };
    this.grl = function () {
        var f = this.cqr.vcc();
        this.lup += 2 * this.zkl;
        this.nqt = Math.round((this.width - this.lup) / 2);
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].x += this.nqt + this.zkl
        }
    };
    this.okb = function () {
        return this.lup
    };
    this.iwc = function (d) {
        this.pjs = d
    };
    this.wtk = function () {
        return this.pjs
    };
    this.whl = function (g) {
        var f = this.cqr.vcc();
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].iwc(g)
        }
        this.parent.qay()
    };
    this.kbh = function (g) {
        var f = this.cqr.ydk("system");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].iwc(g)
        }
        this.parent.qay()
    };
    this.fka = function (g) {
        var f = this.cqr.ydk("setting");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].iwc(g)
        }
        this.parent.qay()
    };
    this.jog = function () {
        if (this.cxw()) {
            return
        }
        if (this.idp) {
            if (this.mst === a) {
                this.vnl = this.jog
            } else {
                this.vnl = null
            }
        } else {
            this.vnl = null;
            this.jpc();
            this.vuc()
        }
    };
    this.guy = function (d) {
        if (this.parent.jhp) {
            this.parent.jhp()
        }
        this.stop();
        this.idp = false;
        this.vnl = null;
        this.wmg(true, d);
        if (this.ouo >= 0) {
            clearTimeout(this.ouo);
            this.ouo = -1
        }
        this.ouo = setTimeout(this.oek, this.jpx)
    };
    this.oek = function () {
        if (b.cxw()) {
            b.parent.uhx.yiv("panel_out");
            b.parent.uhx.onc("panel_out");
            b.crq()
        }
    };
    this.crq = function () {
        if (!this.cxw()) {
            return
        }
        if (this.idp) {
            if (this.mst === c) {
                this.vnl = this.crq
            } else {
                this.vnl = null
            }
        } else {
            this.vnl = null;
            this.dcv();
            this.vuc();
            if (this.ouo >= 0) {
                clearTimeout(this.ouo);
                this.ouo = -1
            }
        }
    };
    this.zsq = function (d) {
        if (this.parent.jdj) {
            this.parent.jdj()
        }
        this.stop();
        this.idp = false;
        this.vnl = null;
        this.wmg(false, d);
        if (typeof this.acm === "function") {
            this.acm();
            this.acm = null
        }
    };
    this.jpc = function () {
        this.wmg(true);
        this.idp = true;
        this.pjs = false;
        this.mst = c;
        this.fpv = Math.floor(this.height / this.ozs);
        this.rif = 1;
        this.yfs = Math.floor(this.height / this.ozs)
    };
    this.dcv = function () {
        if (this.parent.jdj) {
            this.parent.jdj()
        }
        this.idp = true;
        this.pjs = false;
        this.mst = a;
        this.fpv = -Math.floor(this.height / this.ozs);
        this.rif = 1;
        this.yfs = this.height
    };
    this.vuc = function () {
        this.ynw = setInterval(this.hlx, this.hmj)
    };
    this.xnz = function () {
        if (b.mst == c) {
            if (b.parent.jhp) {
                b.parent.jhp()
            }
            if (b.ouo >= 0) {
                clearTimeout(b.ouo);
                b.ouo = -1
            }
            b.ouo = setTimeout(b.oek, b.jpx)
        }
        clearInterval(b.ynw);
        if (b.vnl) {
            b.vnl()
        }
    };
    this.stop = function () {
        clearTimeout(this.ouo);
        clearInterval(this.ynw);
        this.ouo = -1
    };
    this.hlx = function () {
        if (!b.yfu()) {
            b.xnz()
        }
    };
    this.yfu = function () {
        if (b.rif < b.ozs) {
            b.parent.qay(b.x, b.y, b.width, b.height);
            b.yfs += b.fpv;
            b.rif++;
            return true
        } else {
            b.idp = false;
            b.pjs = true;
            if (b.mst == a) {
                b.wmg(false);
                if (typeof b.acm === "function") {
                    b.acm();
                    b.acm = null
                }
            }
            b.parent.qay(b.x, b.y, b.width, b.height);
            return false
        }
    };
    this.qay = function (n, m, o, g) {
        if (!this.cxw() || !this.parent.ydx()) {
            return
        }
        var p = this.context2D,
            e = (n != null && m != null && o != null && g != null),
            l = this.cqr.vcc(),
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
        this.owj(p);
        for (var f = 0, j = l.length; f < j; f++) {
            l[f].qay()
        }
        if (this.ggf && this.qsd != "") {
            k = this.ggf.x - this.ujo - this.dva;
            d = 3 * this.dva + 2 * this.ujo;
            if (k + d >= this.nqt + this.lup) {
                k = this.nqt + this.lup - d;
                neg.tlv.nrf(p, this.qsd, this.apc, k, this.ggf.y + this.ggf.height, d, this.cef, this.qcz, this.cef, this.uyq, this.ujo)
            } else {
                neg.tlv.rnq(p, this.qsd, this.apc, k, this.ggf.y + this.ggf.height, d, this.cef, this.qcz, this.cef, this.uyq)
            }
        }
        p.restore();
        if (this.idp) {
            if (this.mff && this.yzc && this.yfs > 0) {
                this.mff.drawImage(this.yzc, 0, this.height - this.yfs, this.width, this.yfs, this.x, this.y, this.width, this.yfs)
            }
        } else {
            if (e) {
                this.parent.qay(this.x + n, this.y + m, o, g)
            } else {
                if (this.mff && this.yzc) {
                    this.mff.drawImage(this.yzc, this.x, this.y)
                }
            }
        }
    };
    this.owj = function (d) {
        var f = this.fyp,
            e = f / 2;
        d.save();
        d.strokeStyle = this.akr;
        d.fillStyle = this.ufl;
        d.lineWidth = f;
        d.beginPath();
        d.moveTo(e, 0);
        d.arcTo(e, this.kvr, this.kvr + e, this.kvr, this.kvr);
        d.arcTo(this.nqt, this.kvr, this.nqt, this.height - this.por - e, this.awp);
        d.arcTo(this.nqt, this.height - e, this.nqt + this.por, this.height - e, this.por);
        d.lineTo(this.nqt + this.lup - this.por, this.height - e);
        d.arcTo(this.nqt + this.lup, this.height - e, this.nqt + this.lup, this.height - this.por - e, this.por);
        d.arcTo(this.nqt + this.lup, this.kvr, this.width - this.kvr - e, this.kvr, this.awp);
        d.arcTo(this.width - e, this.kvr, this.width - e, 0, this.kvr);
        d.stroke();
        d.closePath();
        d.globalAlpha = this.laq;
        d.fill();
        d.restore()
    };
    this.ics = function (d) {
        if (this.ggf && this.ggf != this.ovq) {
            if (d && this.ggf) {
                this.qsd = this.parent.vbj(this.ggf.fxo);
                if (!neg.tlv.fzg) {
                    this.qsd = (this.ggf.tha) ? this.qsd + " [" + this.ggf.tha + "]" : this.qsd
                }
            } else {
                this.qsd = ""
            }
            this.parent.qay(this.x, this.y, this.width, this.height)
        } else {
            if (d && (this.ggf && this.qsd != this.parent.vbj(this.ggf.fxo))) {
                this.qsd = this.parent.vbj(this.ggf.fxo);
                if (!neg.tlv.fzg) {
                    this.qsd = (this.ggf.tha) ? this.qsd + " [" + this.ggf.tha + "]" : this.qsd
                }
            }
            this.parent.qay(this.x, this.y, this.width, this.height)
        }
    };
    this.acm = null
}
gnc.prototype = new rom;

function zpf() {
    var a = this;
    this.smb = "LOADING ... ";
    this.sgd = "ERROR";
    this.xjq = null;
    this.ogm = null;
    this.rvy = false;
    this.wdk = false;
    this.pre = true;
    this.htu = null;
    this.rhh = null;
    this.ynw = 0;
    this.kbs = 0;
    this.rgs = false;
    this.kki = false;
    this.swc = 0;
    this.dnq = 60;
    this.nzm = 0;
    this.umt = null;
    this.qsd = null;
    this.hlh = null;
    this.odw = true;
    this.qcz = null;
    this.uyq = "bold";
    this.oju = "black";
    this.mdq = "rgb(0,100,10)";
    this.mjh = "rgb(80,255,100)";
    this.iya = "rgb(120,120,120)";
    this.vcl = "red";
    this.otm = "white";
    this.cef = 14;
    this.vhj = 18;
    this.qaa;
    this.mnn;
    this.kvd;
    this.nvk;
    this.zkl = 5;
    this.ujo = 12;
    this.dqb = 5;
    this.jvj = 2;
    this.hls = 7;
    this.etw = new flw();
    this.zpl = 0;
    this.yfh = 0;
    this.jtf = 0;
    this.vsl = new flw();
    this.yfc = new flw();
    this.ohl = new flw();
    this.sbv = new flw();
    this.dcf = function (b, d, c) {
        zpf.prototype.dcf.call(this, b, d, c);
        if (neg.epl.value45 == neg.jgt.cpb) {
            this.htu = document.createElement("canvas");
            this.rhh = this.htu.getContext("2d")
        }
    };
    this.mwg = function (b) {
        try {
            this.cef = b.fontSize;
            this.vhj = b.wes;
            this.zkl = b.zub;
            this.ujo = b.wkz;
            this.dqb = b.dhm;
            this.jvj = b.ojv;
            this.hls = b.lhz;
            this.qaa = b.gfv;
            this.mnn = b.lrv;
            this.kvd = b.bva;
            this.nvk = b.azx;
            this.etw = b.dvq.cij;
            this.zpl = b.dvq.x;
            this.yfh = b.dvq.ktg;
            this.jtf = b.dvq.wkj;
            this.vsl = b.ett;
            this.yfc = b.uss.ett;
            this.ohl = b.uss.lrv;
            this.sbv = b.uss.bao;
            if (neg.epl.value45 == neg.jgt.cpb) {
                this.htu.width = Math.round(this.etw.width);
                this.htu.height = Math.round(this.etw.height)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.gzv = function (b) {
        try {
            this.qcz = b.font;
            this.uyq = b.njm;
            this.oju = b.backgroundColor;
            this.mdq = b.uaw;
            this.mjh = b.pir;
            this.iya = b.ukp;
            this.vcl = b.tan;
            this.otm = b.pbv;
            this.ogm = b.ogm
        } catch (c) {
            console.error(c)
        }
    };
    this.qay = function (b) {
        if (b && b >= 0) {
            this.kbs = b
        }
        if (!this.cxw()) {
            return
        }
        if (neg.epl.value45 == neg.jgt.fst) {
            this.eow()
        } else {
            if (neg.epl.value45 == neg.jgt.gxf || neg.epl.value45 == neg.jgt.cpb) {
                if (!this.xjq && this.qsd && this.hlh) {
                    this.mld()
                } else {
                    if (neg.epl.value45 == neg.jgt.gxf) {
                        this.hzb()
                    } else {
                        if (neg.epl.value45 == neg.jgt.cpb) {
                            if (b === 100) {
                                this.lnb()
                            }
                            this.bae()
                        }
                    }
                }
            }
        }
    };
    this.eow = function () {
        if (this.rvy) {
            var c = this.context2D,
                b = this.kvd.width / 100;
            c.save();
            if (this.wdk === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.uhx.xzk("splash"), 0, 0, this.width, this.height);
            if (this.ogm) {
                neg.tlv.hmu(c, this.zkl, this.zkl, this.width - 2 * this.zkl, this.height - 2 * this.zkl, this.ogm, 0.3)
            }
            if (this.xjq != null && this.xjq != "") {
                this.ido(this.nvk, true)
            } else {
                if (this.qsd != null && this.qsd != "") {
                    this.qfo(this.nvk, true)
                } else {
                    if (this.pre === true) {
                        if (this.wdk === false) {
                            neg.tlv.hmu(c, this.qaa.x, this.qaa.y, this.qaa.width, this.qaa.height, this.oju, 0.5)
                        }
                        var e = this.smb + " " + this.kbs + "%";
                        var d = c.createLinearGradient(this.kvd.x, this.kvd.y, this.kvd.x + this.kvd.width, this.kvd.y);
                        d.addColorStop(0, this.mdq);
                        d.addColorStop(1, this.mjh);
                        neg.tlv.rnq(c, e, this.otm, this.mnn.x, this.mnn.y, this.mnn.width, this.mnn.height, this.qcz, this.cef, this.uyq);
                        neg.tlv.cxu(c, this.kvd.x - this.jvj, this.kvd.y, this.kvd.width + 2 * this.jvj, this.kvd.height, this.jvj, this.oju, 0.8, this.iya, this.jvj, 0.8);
                        neg.tlv.hmu(c, this.kvd.x, this.kvd.y + this.jvj / 2, b * this.kbs, this.kvd.height - this.jvj, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.hzb = function () {
        if (this.rvy) {
            var c = this.context2D,
                b = this.kvd.width / 100;
            c.save();
            if (this.wdk === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            if (this.rgs === true && this.umt) {
                c.beginPath();
                c.rect(this.umt.x, this.umt.y, this.umt.width, this.umt.height);
                c.closePath();
                c.clip()
            }
            c.drawImage(this.parent.uhx.xzk("splash"), this.vsl.x, this.vsl.y, this.vsl.width, this.vsl.height);
            if (this.xjq != null && this.xjq != "") {
                this.ido(this.nvk, false)
            } else {
                if (this.qsd != null && this.qsd != "") {
                    this.qfo(this.nvk, false)
                } else {
                    if (this.pre === true) {
                        var e = this.smb + " " + this.kbs + "%";
                        var d = c.createLinearGradient(this.kvd.x, this.kvd.y, this.kvd.x + this.kvd.width, this.kvd.y);
                        d.addColorStop(0, this.mdq);
                        d.addColorStop(1, this.mjh);
                        var f = c.createLinearGradient(this.kvd.x + (b * this.kbs) - this.hls, this.kvd.y, this.kvd.x + (b * this.kbs), this.kvd.y);
                        f.addColorStop(0, "rgb(100,100,100)");
                        f.addColorStop(1, "rgb(255,255,255)");
                        neg.tlv.rnq(c, e, this.otm, this.mnn.x, this.mnn.y, this.mnn.width, this.mnn.height, this.qcz, this.cef, this.uyq);
                        neg.tlv.hmu(c, this.kvd.x, this.kvd.y, this.kvd.width, this.kvd.height, "rgb(12,15,25)", 1);
                        if (this.kbs > 0 && this.kbs < 100) {
                            neg.tlv.cxu(c, this.kvd.x + (b * this.kbs) - this.hls + this.jvj / 2, this.kvd.y - this.jvj, this.hls, this.kvd.height + 2 * this.jvj, this.jvj, f, 0.5)
                        }
                        neg.tlv.hmu(c, this.kvd.x, this.kvd.y, b * this.kbs, this.kvd.height, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.bae = function () {
        if (this.rvy) {
            var c = this.context2D,
                b = this.kvd.width / 100;
            c.save();
            if (this.wdk === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.uhx.xzk("splash"), this.vsl.x, this.vsl.y, this.vsl.width, this.vsl.height);
            if (this.kki) {
                c.drawImage(this.htu, this.etw.x, this.etw.y)
            }
            if (this.xjq != null && this.xjq != "") {
                this.ido(this.nvk, false)
            } else {
                if (this.qsd != null && this.qsd != "") {
                    this.qfo(this.nvk, false)
                } else {
                    if (this.pre === true) {
                        var e = this.smb + " " + this.kbs + "%";
                        var d = c.createLinearGradient(this.kvd.x, this.kvd.y, this.kvd.x + this.kvd.width, this.kvd.y);
                        d.addColorStop(0, this.mdq);
                        d.addColorStop(1, this.mjh);
                        var f = c.createLinearGradient(this.kvd.x + (b * this.kbs) - this.hls, this.kvd.y, this.kvd.x + (b * this.kbs), this.kvd.y);
                        f.addColorStop(0, "rgb(100,100,100)");
                        f.addColorStop(1, "rgb(255,255,255)");
                        neg.tlv.rnq(c, e, this.otm, this.mnn.x, this.mnn.y, this.mnn.width, this.mnn.height, this.qcz, this.cef, this.uyq);
                        neg.tlv.hmu(c, this.kvd.x, this.kvd.y, this.kvd.width, this.kvd.height, "rgb(12,15,25)", 1);
                        if (this.kbs > 0 && this.kbs < 100) {
                            neg.tlv.cxu(c, this.kvd.x + (b * this.kbs) - this.hls + this.jvj / 2, this.kvd.y - this.jvj, this.hls, this.kvd.height + 2 * this.jvj, this.jvj, f, 0.5)
                        }
                        neg.tlv.hmu(c, this.kvd.x, this.kvd.y, b * this.kbs, this.kvd.height, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.mld = function () {
        if (this.rvy) {
            var b = this.context2D;
            b.save();
            b.clearRect(0, 0, this.width, this.height);
            if (this.hlh) {
                b.drawImage(this.hlh, this.yfc.x, this.yfc.y, this.yfc.width, this.yfc.height)
            }
            if (this.qsd != null && this.qsd != "") {
                neg.tlv.jus(b, this.qsd, this.otm, this.ohl.x, this.ohl.y, this.ohl.width, this.ohl.height, this.qcz, this.cef, this.uyq, "center", true)
            }
            if (this.odw === true) {
                neg.tlv.jus(b, "[ " + this.parent.language.etu + " ]", this.otm, this.sbv.x, this.sbv.y, this.sbv.width, this.sbv.height, this.qcz, 2 * this.cef, this.uyq, "center", true)
            }
            b.restore()
        }
    };
    this.ido = function (c, m) {
        var l = this.context2D,
            o = [],
            d = this.cef,
            k = this.xjq,
            f = "",
            t = 0,
            v = 0,
            s = 0,
            u = 0,
            n = "center",
            e = Math.round(d * 1.5),
            j = Math.round(this.vhj * 1.5),
            b = 0,
            w = 1,
            q = 0,
            g = 0;
        l.save();
        l.font = this.uyq + " " + d + "px " + this.qcz;
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
                    if (u >= c.width - 2 * this.ujo) {
                        o[v] = k.substring(s, t);
                        v++;
                        s = t + 1;
                        f = k.substring(t + 1, p)
                    }
                }
            }
        }
        b = v * (e);
        if (b > (c.height - j - this.dqb)) {
            w = (c.height - j - this.dqb) / b;
            d = Math.round(d * w) - 1;
            l.font = this.uyq + " " + d + "px " + this.qcz;
            e = Math.round(d * 1.5);
            b = v * (e)
        }
        if (d < 10) {
            w = 10 / d;
            d = Math.round(d * w);
            l.font = this.uyq + " " + d + "px " + this.qcz;
            e = Math.round(d * 1.5);
            b = v * (e);
            g = (c.height - (j + b + this.dqb));
            c.height = j + b + this.dqb;
            c.y += g
        }
        l.textAlign = n;
        l.lineJoin = "round";
        l.lineCap = "round";
        if (m && m === true) {
            neg.tlv.hmu(l, c.x, c.y, c.width, c.height, this.oju, 0.7)
        }
        if (this.sgd != null) {
            l.font = this.uyq + " " + this.vhj + "px " + this.qcz;
            l.fillStyle = this.vcl;
            l.textBaseline = "bottom";
            l.fillText(this.sgd, c.x + c.width / 2, c.y + this.vhj + this.dqb)
        }
        l.font = this.uyq + " " + d + "px " + this.qcz;
        l.fillStyle = this.otm;
        if (o.length == 1) {
            q = j + b + e;
            l.fillText(o[0], (c.x + c.width / 2), c.y + q)
        } else {
            for (var p = 0, r = o.length; p < r; p++) {
                q = j + (b + e) / (r + 1) * (p + 1);
                if (n == "start") {
                    l.fillText(o[p], (c.x + this.ujo), c.y + q)
                } else {
                    l.fillText(o[p], (c.x + c.width / 2), c.y + q)
                }
            }
        }
        l.restore()
    };
    this.qfo = function (c, d) {
        var b = this.context2D;
        b.save();
        if (d && d === true) {
            neg.tlv.hmu(b, c.x, c.y, c.width, c.height, this.oju, 0.7)
        }
        if (this.odw === true) {
            neg.tlv.jus(b, this.qsd, this.otm, c.x, c.y, c.width, c.height, this.qcz, this.cef, this.uyq, "center", true)
        }
        b.restore()
    };
    this.start = function () {
        this.rgs = true;
        this.swc = new Date().getTime();
        this.umt = new flw(this.etw.x, this.etw.y, this.etw.width, this.etw.height);
        this.nzm = 0;
        this.hlx()
    };
    this.stop = function () {
        this.rgs = false;
        this.umt = null;
        clearTimeout(this.ynw)
    };
    this.hlx = function () {
        var b = 0,
            c = new Date().getTime();
        if (a.nzm < 6) {
            a.umt.x -= a.zpl;
            a.umt.width += 2 * a.zpl
        } else {
            if (a.nzm < 12) {
                a.umt.y -= a.jtf;
                a.umt.height += a.yfh
            } else {
                a.stop();
                if (typeof a.mbo === "function") {
                    a.mbo()
                }
            }
        }
        a.qay();
        a.nzm++;
        if (a.nzm <= 12) {
            b = (a.nzm * a.dnq - (c - a.swc));
            a.ynw = setTimeout(a.hlx, b)
        }
    };
    this.piz = function () {
        this.kki = true;
        this.swc = new Date().getTime();
        this.nzm = 0;
        this.dnq = 89;
        this.qjl()
    };
    this.lnb = function () {
        this.kki = false;
        clearTimeout(this.ynw)
    };
    this.qjl = function () {
        var d = 0,
            e = new Date().getTime(),
            b = a.rhh,
            c = a.parent.uhx.xzk("splashanim");
        if (a.kki === true) {
            a.nzm++;
            b.save();
            b.clearRect(0, 0, c.width, c.height);
            b.translate(c.width / 2, c.height / 2);
            b.rotate(Math.PI / 6 * (a.nzm % 12));
            b.translate(-c.width / 2, -c.height / 2);
            b.drawImage(c, 0, 0);
            b.restore();
            a.qay();
            d = (a.nzm * a.dnq - (e - a.swc));
            a.ynw = setTimeout(a.qjl, d)
        }
    };
    this.qwh = function () {
        return (this.rgs || this.kki)
    };
    this.kej = function (c, b) {
        this.qsd = c;
        this.hlh = b;
        this.rgs = true;
        this.odw = true;
        this.ynw = setInterval(this.vdp, 800);
        this.qay()
    };
    this.vdp = function () {
        a.odw = !a.odw;
        a.qay()
    };
    this.mbo = null
}
zpf.prototype = new rom;

function zyn() {
    var a = this;
    this.evx = null;
    this.prw = null;
    this.zja = null;
    this.uya = null;
    this.eog = null;
    this.qau = false;
    this.ynw = -1;
    this.dcf = function () {
        this.evx = document.getElementById("notificationDiv");
        this.prw = document.getElementById("notificationTitle");
        this.zja = document.getElementById("notificationText");
        this.uya = document.getElementById("notificationIcon");
        this.eog = document.getElementById("notificationCounter");
        if (this.evx) {
            this.evx.onclick = neg.tlo.qls;
            this.evx.ontouchend = neg.tlo.qls
        }
    };
    this.gzv = function (b) {};
    this.mwg = function (b) {
        try {
            if (this.evx) {
                this.oll(this.evx, b.cij);
                if (this.qau) {
                    if (neg.tlo.hvx === neg.don.wso) {
                        this.evx.className = "slideRight"
                    } else {
                        this.evx.className = "slideLeft"
                    }
                }
            }
            if (this.prw) {
                this.prw.style.fontSize = b.yjs + "px";
                this.prw.style.left = b.iht.x + "px";
                this.prw.style.top = b.iht.y + "px";
                this.prw.style.width = b.iht.width + "px"
            }
            if (this.zja) {
                this.zja.style.fontSize = b.ela + "px";
                this.zja.style.left = b.lrv.x + "px";
                this.zja.style.top = b.lrv.y + "px";
                this.zja.style.width = b.lrv.width + "px"
            }
            if (this.uya) {
                this.oll(this.uya, b.beo)
            }
            if (this.eog) {
                this.eog.style.fontSize = b.xhr + "px";
                this.oll(this.eog, b.rjt)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.oll = function (c, b) {
        if (c) {
            c.style.left = b.x + "px";
            c.style.top = b.y + "px";
            c.style.width = b.width + "px";
            c.style.height = b.height + "px"
        }
    };
    this.jog = function (d, c, b) {
        if (d && this.prw) {
            this.prw.innerHTML = d
        }
        if (c && this.zja) {
            this.zja.innerHTML = c.replace(/[\r]?\n/g, "")
        }
        if (b && this.eog) {
            this.eog.innerHTML = b
        }
        if (this.evx) {
            if (this.ynw >= 0) {
                clearTimeout(this.ynw);
                this.ynw = -1;
                this.evx.className = null
            }
            this.qau = true;
            neg.tlo.awi();
            if (neg.tlo.hvx === neg.don.wso) {
                this.evx.className = "slideInRightAnim"
            } else {
                this.evx.className = "slideInLeftAnim"
            }
        }
    };
    this.crq = function () {
        if (a.evx && a.qau) {
            if (neg.tlo.hvx === neg.don.wso) {
                a.evx.className = "slideOutRightAnim"
            } else {
                a.evx.className = "slideOutLeftAnim"
            }
            a.ynw = setTimeout(a.jbd, 800)
        }
    };
    this.cxw = function () {
        if (this.qau) {
            return true
        }
        return false
    };
    this.jbd = function () {
        a.qau = false;
        a.ynw = -1;
        neg.tlo.awi()
    }
}

function dht() {
    var b = this;
    var c = 0;
    var a = 1;
    var e = 2;
    var d = 3;
    this.dlb = null;
    this.evx = null;
    this.prw = null;
    this.zja = null;
    this.bek = null;
    this.ljb = [];
    this.dvr = 0;
    this.ksw = [];
    this.ngq = [];
    this.qgq = 0;
    this.lzb = false;
    this.qau = false;
    this.dcf = function () {
        this.dlb = document.getElementById("messageOverlay");
        this.evx = document.getElementById("messagePanel");
        this.prw = document.getElementById("messageTitle");
        this.zja = document.getElementById("messageText");
        this.bek = document.getElementById("btne");
        if (this.bek) {
            this.bek.innerHTML = "\u00D7";
            this.bek.onclick = this.crq;
            this.bek.ontouchend = this.crq
        }
        for (var f = 0; f < 4; f++) {
            this.ljb[f] = document.getElementById("btn" + (f + 1))
        }
    };
    this.gzv = function (f) {
        try {
            this.ksw = f.xnc
        } catch (g) {
            console.error(g)
        }
    };
    this.mwg = function (j) {
        try {
            if (this.evx) {
                neg.tlv.oll(this.evx, j.cij)
            }
            if (this.prw) {
                this.prw.style.fontSize = j.yjs + "px";
                neg.tlv.oll(this.prw, j.iht)
            }
            if (this.zja) {
                this.zja.style.fontSize = j.ela + "px";
                neg.tlv.oll(this.zja, j.zjp)
            }
            if (this.bek) {
                neg.tlv.oll(this.bek, j.gji)
            }
            for (var g = 0, f = this.ljb.length; g < f; g++) {
                this.ljb[g].style.fontSize = j.krb.fontSize + "px";
                this.ljb[g].style.top = j.jlp.y + "px";
                this.ljb[g].style.height = j.jlp.height + "px"
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.jog = function (j) {
        this.ngq.length = 0;
        this.qgq = 0;
        for (var g = 0, f = j.length; g < f; g++) {
            this.ngq[g] = j[g]
        }
        this.eeb(this.ngq[this.qgq])
    };
    this.crq = function () {
        if (b.evx) {
            b.qau = false;
            b.evx.style.display = "none";
            b.dlb.style.display = "none";
            neg.tlo.awi();
            neg.tlo.blx = false
        }
    };
    this.eeb = function (l) {
        var n = this.ngq.length > 1,
            m = "";
        if (l.Buttons && l.Buttons.length >= 1) {
            for (var k = l.Buttons.length - 1; k >= 0; k--) {
                if (l.Buttons[k].Action.toLowerCase() == "cashier") {
                    l.Buttons.splice(k, 1)
                }
            }
        }
        if (l.xjv === neg.ieh.ilr || l.xjv === neg.ieh.xmx) {
            this.dvr = d;
            this.lzb = (l.DisplayType == neg.jgz.lfv.ysg) ? true : false
        } else {
            if (l.xjv === neg.ieh.swe || l.xjv === neg.ieh.bel || l.xjv === neg.ieh.gsp || l.xjv === neg.ieh.roulette.rmb || l.xjv === neg.ieh.roulette.gyz) {
                this.dvr = a;
                this.lzb = false
            } else {
                if (l.xjv === neg.ieh.lzi || l.xjv === neg.ieh.lqw) {
                    this.dvr = c;
                    this.lzb = false
                } else {
                    if (l.xjv === neg.ieh.zsh || l.xjv === neg.ieh.zdt || l.xjv === neg.ieh.kqw) {
                        this.dvr = e;
                        this.lzb = false
                    }
                }
            }
        }
        if (l.Title && this.prw) {
            this.prw.style.color = this.ksw[this.dvr];
            this.prw.innerHTML = l.Title
        }
        if (l.Text && this.zja) {
            this.zja.innerHTML = l.Text.replace(/[\r]?\n/g, "<br>")
        }
        if (n) {
            this.ljb[0].innerHTML = "\u2039";
            this.ljb[0].onclick = this.emn;
            this.ljb[0].ontouchend = this.emn;
            this.ljb[0].style.display = "inline-block";
            this.ljb[this.ljb.length - 1].innerHTML = "\u203A";
            this.ljb[this.ljb.length - 1].onclick = this.kay;
            this.ljb[this.ljb.length - 1].ontouchend = this.kay;
            this.ljb[this.ljb.length - 1].style.display = "inline-block"
        }
        for (var k = 0, g = (n) ? 1 : 0, f = (n) ? this.ljb.length - 1 : this.ljb.length; g < f; g++, k++) {
            if (l.Buttons && k < l.Buttons.length) {
                m = l.Buttons[k].Text;
                if (m.indexOf("_") != 0) {
                    this.ljb[g].innerHTML = m
                } else {
                    var j = m.substr(1);
                    if (j == "exit") {
                        this.ljb[g].innerHTML = neg.tlo.language.ymw
                    } else {
                        if (j == "continue") {
                            this.ljb[g].innerHTML = neg.tlo.language.etu.replace(/ /g, "")
                        } else {
                            this.ljb[g].innerHTML = j.toUpperCase()
                        }
                    }
                }
                if (l.Buttons[k].Action.toLowerCase() == "quit") {
                    this.ljb[g].onclick = neg.tlo.rah;
                    this.ljb[g].ontouchend = neg.tlo.rah
                } else {
                    if (l.Buttons[k].Action.toLowerCase() == "continue") {
                        if (l.xjv === neg.ieh.ilr) {
                            this.ljb[g].onclick = this.ove.bind(this, l.Buttons[k].Link);
                            this.ljb[g].ontouchend = this.ove.bind(this, l.Buttons[k].Link)
                        } else {
                            if (l.xjv === neg.ieh.xmx || l.xjv === neg.ieh.zsh || l.xjv === neg.ieh.zdt) {
                                this.ljb[g].onclick = this.szh;
                                this.ljb[g].ontouchend = this.szh
                            } else {
                                if (l.xjv === neg.ieh.lzi || l.xjv === neg.ieh.lqw || l.xjv === neg.ieh.kqw) {
                                    this.ljb[g].onclick = this.loo;
                                    this.ljb[g].ontouchend = this.loo
                                }
                            }
                        }
                    } else {
                        if (l.Buttons[k].Action.toLowerCase() == "history") {
                            this.ljb[g].onclick = neg.tlo.fgy;
                            this.ljb[g].ontouchend = neg.tlo.fgy
                        } else {
                            if (l.Buttons[k].Action.toLowerCase() == "link") {
                                if (l.Buttons[k].LinkType === neg.jgz.lie.ans) {
                                    this.ljb[g].onclick = this.dnl.bind(this, l.Buttons[k].Link);
                                    this.ljb[g].ontouchend = this.dnl.bind(this, l.Buttons[k].Link)
                                } else {
                                    if (l.Buttons[k].LinkType === neg.jgz.lie.gas) {
                                        this.ljb[g].onclick = this.ove.bind(this, l.Buttons[k].Link);
                                        this.ljb[g].ontouchend = this.ove.bind(this, l.Buttons[k].Link)
                                    } else {
                                        if (l.Buttons[k].LinkType === neg.jgz.lie.swv) {
                                            this.ljb[g].onclick = this.qmm.bind(this, l.Buttons[k].Link);
                                            this.ljb[g].ontouchend = this.qmm.bind(this, l.Buttons[k].Link)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                this.ljb[g].style.display = "inline-block"
            } else {
                this.ljb[g].style.display = "none"
            }
        }
        this.bek.style.display = (this.lzb) ? "inline-block" : "none";
        if (this.evx) {
            this.qau = true;
            this.evx.style.display = "block";
            this.dlb.style.display = "block";
            neg.tlo.awi();
            neg.tlo.blx = true
        }
    };
    this.cxw = function () {
        if (this.qau) {
            return true
        }
        return false
    };
    this.szh = function () {
        b.crq();
        neg.tlo.met(neg.tlo.state)
    };
    this.ove = function (f) {
        var g = null;
        if (f) {
            g = neg.tlv.tdi("GET", f);
            if (!g) {
                console.error("Could not send request!")
            } else {
                g.onerror = function () {
                    console.error("Error on request!")
                }
            }
            g.send()
        }
        neg.tlo.pld({
            type: "link",
            sender: neg.tlo.mvb,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        b.crq();
        neg.tlo.rln()
    };
    this.qmm = function (j) {
        var k = null;
        if (j == null) {
            console.error("Request url is missing!");
            return
        }
        k = neg.tlv.tdi("GET", j);
        if (!k) {
            console.error("Could not send request!")
        } else {
            for (var g = 0, f = b.ljb.length; g < f; g++) {
                b.ljb[g].disabled = true
            }
            k.onload = function () {
                b.crq();
                for (var m = 0, l = b.ljb.length; m < l; m++) {
                    b.ljb[m].disabled = false
                }
                neg.tlo.rln()
            };
            k.onerror = function () {
                console.error("Error on request!");
                for (var m = 0, l = b.ljb.length; m < l; m++) {
                    b.ljb[m].disabled = false
                }
            }
        }
        neg.tlo.pld({
            type: "link",
            sender: neg.tlo.mvb,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        k.send()
    };
    this.loo = function () {
        window.location.reload()
    };
    this.dnl = function (f) {
        neg.tlo.pld({
            type: "link",
            sender: neg.tlo.mvb,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        window.location.href = f
    };
    this.emn = function () {
        b.qgq = (b.qgq > 0) ? b.qgq - 1 : b.ngq.length - 1;
        b.eeb(b.ngq[b.qgq])
    };
    this.kay = function () {
        b.qgq = (b.qgq < b.ngq.length - 1) ? b.qgq + 1 : 0;
        b.eeb(b.ngq[b.qgq])
    }
}
neg.epl = new Settings();
neg.tlv = new tjs();

function ydm() {
    this.kvt = "";
    this.rnt = "";
    this.hen = null;
    this.canvas = null;
    this.context2D = null;
    this.cod = null;
    this.rwr = null;
    this.vxi = null;
    this.aka = null;
    this.sje = null;
    this.uoz = {};
    this.offsetLeft = 0;
    this.offsetTop = 0;
    this.aeu = 0;
    this.zjr = 0;
    this.ruz = false;
    this.width = 0;
    this.height = 0;
    this.wez = 0;
    this.skb = 0;
    this.kvl = 1;
    this.xwi = 1;
    this.ftg = false;
    this.asb = false;
    this.style = null;
    this.don = null;
    this.hvx = -1;
    this.yrr = false;
    this.dpc = false;
    this.imu = false;
    this.uiw = false;
    this.blx = false;
    this.ilq = false;
    this.svm = false;
    this.vjg = "";
    this.fmv = "";
    this.abn = "";
    this.uyl = "";
    this.noa = "";
    this.uow = "";
    this.qll = "1_1_60";
    try {
        if (neg.epl.value19) {
            this.vjg = sessionStorage.sessionValue2;
            this.fmv = sessionStorage.sessionValue2
        } else {
            var c = a("hash");
            if (c != "") {
                sessionStorage.sessionValue2 = c
            }
            if (sessionStorage.sessionValue2 != "freeplay") {
                this.abn = sessionStorage.sessionValue2
            } else {
                this.vjg = sessionStorage.sessionValue2;
                this.fmv = sessionStorage.sessionValue2;
                if (a("w") != "") {
                    this.abn = sessionStorage.sessionValue2
                } else {
                    this.abn = ""
                }
            }
        }
    } catch (b) {}
    this.nvf = null;
    this.qmz = null;
    this.uxt = false;
    this.eqh = null;
    this.uhx = null;
    this.oxt = null;
    this.kvi = true;
    this.yje = [0, 0.5, 1];
    try {
        if (sessionStorage.sessionValue6) {
            if (sessionStorage.sessionValue6 == "false") {
                this.ytm = 0
            } else {
                if (sessionStorage.sessionValue6 == "true") {
                    this.ytm = this.yje.length - 1
                } else {
                    this.ytm = Number(sessionStorage.sessionValue6)
                }
            }
        } else {
            this.ytm = this.yje.length - 1
        }
    } catch (b) {
        this.ytm = 0
    }
    this.qny = 0;
    this.language = new vyj();
    this.tlt = 0;
    this.ytj = 1;
    this.ere = this.ytj;
    this.shd = [neg.gzo.udx, neg.gzo.oen, neg.gzo.dbj];
    this.kre = (neg.tlv.eyc()) ? 0 : this.shd.length - 1;
    try {
        if (localStorage.localValue1) {
            this.kre = Number(localStorage.localValue1);
            if (!neg.tlv.eyc() && this.shd[this.kre] === neg.gzo.udx) {
                this.kre = this.shd.length - 1
            }
        }
    } catch (b) {}
    this.rwc = false;
    this.mvb = "";
    this.pog = "";
    this.fgk = 0;
    this.state = 0;
    this.pbd = false;
    this.ick = 5000;
    this.eze = 0;
    this.ufn = 0;
    this.pjc = 0;
    this.xuh = 0;
    this.ict = false;
    this.eqt = false;
    this.vpo = false;
    this.lwq = null;
    this.bki = 0;
    this.icv = 0;
    this.rbd = 0;
    this.cmb = -1;
    this.osn = -1;
    this.ved = 0;
    this.opx = null;
    this.thh = [];
    this.fdv = [];
    this.vid = false;
    this.qyc = 0;
    this.akb = 0;
    this.csv = false;

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
    this.dcf = function (d) {
        this.pld({
            type: "onAppFrameReady",
            sender: this.mvb
        });
        neg.tlv.fbt();
        neg.tlv.quy();
        this.wmo();
        if (!this.ict) {
            this.oto()
        }
        this.dfo(this.wuc(d.don));
        this.zqb();
        this.ese();
        this.rnd();
        this.uvr();
        this.wnt();
        this.jfg();
        this.gay();
        this.goz();
        this.lyz();
        this.vxx();
        return this
    };
    this.rnd = function () {};
    this.goz = function () {
        try {
            if (neg.epl.value64 && !this.vpo) {
                this.eqh = new vsy();
                this.eqh.connect("ws://127.0.0.1:2001/vltclient")
            }
        } catch (d) {
            console.error("Can not connect to terminal!")
        }
    };
    this.wmo = function () {
        try {
            var j = a("exit");
            if (j != "") {
                sessionStorage.sessionValue5 = j
            }
            if ((!sessionStorage.sessionValue5 || sessionStorage.sessionValue5 == "null") && neg.epl.value8) {
                sessionStorage.sessionValue5 = neg.epl.value8
            }
            var p = a("curr");
            if (p != "") {
                sessionStorage.sessionValue8 = p
            }
            if (sessionStorage.sessionValue8 && sessionStorage.sessionValue8 != "") {
                this.uow = sessionStorage.sessionValue8;
                if (neg.epl.value72) {
                    var n = neg.epl.value72[this.uow];
                    if (neg.epl.value21.e === true && n) {
                        neg.epl.value21.s = n.s;
                        neg.epl.value21.m = n.m;
                        neg.epl.value21.ts = n.ts;
                        neg.epl.value21.cs = n.cs
                    }
                    if (neg.epl.value76 && neg.epl.value76.f === true && n) {
                        neg.epl.value76.s = n.s;
                        neg.epl.value76.m = n.m;
                        neg.epl.value76.ts = n.ts;
                        neg.epl.value76.cs = n.cs
                    }
                }
            }
            if (this.kvu()) {
                sessionStorage.sessionValue7 = ""
            }
            var d = a("w");
            if (d != "") {
                sessionStorage.sessionValue7 = d
            }
            if (sessionStorage.sessionValue7 && sessionStorage.sessionValue7 != "") {
                this.noa = sessionStorage.sessionValue7
            }
            var r = a("fullscreen");
            if (r != "") {
                sessionStorage.sessionValue14 = r
            }
            if (sessionStorage.sessionValue14 != "true" && sessionStorage.sessionValue14 != "false") {
                sessionStorage.sessionValue14 = (neg.tlv.fzg) ? neg.epl.value51.m : neg.epl.value51.d
            }
            var g = a("sessionTime");
            if (g != "") {
                sessionStorage.sessionValue15 = g
            }
            if (sessionStorage.sessionValue15 != "true" && sessionStorage.sessionValue15 != "false") {
                sessionStorage.sessionValue15 = neg.epl.value11
            }
            var t = a("realityCheckURL");
            if (t != "") {
                sessionStorage.sessionValue16 = t
            }
            var o = a("realityCheckTime");
            if (o != "") {
                sessionStorage.sessionValue17 = o
            }
            if (neg.epl.value39 > 0) {
                sessionStorage.sessionValue17 = neg.epl.value39
            }
            var s = a("loggedInTime");
            if (sessionStorage.sessionValue18 != null) {
                var f = sessionStorage.sessionValue18.split(";");
                if (f.length == 2) {
                    this.qyc = Number(f[0]);
                    this.akb = Number(f[1])
                }
            }
            if (s != "") {
                if (Number(s) != this.akb) {
                    this.akb = Number(s);
                    this.qyc = new Date().getTime() - (this.akb * 1000);
                    sessionStorage.sessionValue18 = this.qyc + ";" + this.akb
                }
            }
            if (neg.epl.value86 === true) {
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
            console.error(k.ieh)
        }
    };
    this.gay = function () {
        if (!(neg.tlv.dez == neg.os.fis && neg.tlv.egn == neg.wpv.qge)) {
            document.ontouchstart = neg.tlo.tly
        }
        if (neg.tlv.egn != neg.wpv.ygx && neg.tlv.egn != neg.wpv.qge) {
            document.ontouchmove = neg.tlo.oxz;
            document.ontouchend = neg.tlo.hvr
        }
        if (!neg.tlv.vwk) {
            document.onmousedown = neg.tlo.fjc;
            document.onmouseup = neg.tlo.qof;
            document.onmousemove = neg.tlo.wqn
        }
        document.onkeydown = neg.tlo.hpe;
        document.onkeyup = neg.tlo.lhg;
        document.oncontextmenu = neg.tlo.jnk;
        this.ilq = this.zef();
        if (neg.tlv.gfs() === false && neg.tlv.dez === neg.os.gjw && neg.tlv.unt() === true && screen.width <= 414 && this.cgo()) {
            this.ved = setInterval(this.loy, 1000)
        }
    };
    this.tly = function (d) {
        neg.tlo.bxn();
        neg.tlo.onx();
        neg.tlo.jgs(d)
    };
    this.hvr = function (d) {
        if (neg.tlo.yrr === true) {
            if (neg.tlo.ilq) {
                neg.tlo.mht()
            } else {
                neg.tlo.mqw(d)
            }
        } else {
            if (neg.tlo.zef()) {
                neg.tlo.cgi()
            }
        }
    };
    this.oxz = function (d) {
        neg.tlo.oux(d)
    };
    this.fjc = function (d) {
        window.focus();
        if (neg.tlo.yrr === true) {
            neg.tlo.bxn();
            neg.tlo.onx();
            neg.tlo.jgs(d)
        } else {
            if (neg.tlo.zef()) {
                neg.tlo.cgi()
            }
        }
    };
    this.qof = function (d) {
        neg.tlo.mqw(d)
    };
    this.wqn = function (d) {};
    this.hpe = function (d) {
        if ((d.keyCode == 122 && (neg.tlv.dez == neg.os.xnn || neg.tlv.dez == neg.os.fhe)) || (d.keyCode == 70 && d.ctrlKey && neg.tlv.dez == neg.os.uoa)) {
            return
        }
        neg.tlo.bxn();
        neg.tlo.onx();
        neg.tlo.gor(d)
    };
    this.lhg = function (d) {
        neg.tlo.mnj(d)
    };
    this.jnk = function () {
        return false
    };
    this.jgs = function (d) {};
    this.mqw = function (d) {};
    this.gor = function (d) {};
    this.mnj = function (d) {};
    this.oux = function (d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        return
    };
    this.pld = function (d) {};
    this.byb = function () {
        var f = neg.tlo.oxt.dgc("topb"),
            e = neg.tlo.oxt.dgc("settings"),
            d = neg.tlo.oxt.dgc("topi"),
            g = neg.tlo.oxt.dgc("gameb");
        if (neg.tlv.egn == neg.wpv.ygx || neg.tlv.egn == neg.wpv.csm) {
            neg.tlo.asb = (window.innerWidth == window.outerWidth)
        } else {
            if (neg.tlv.egn == neg.wpv.frb || neg.tlv.egn == neg.wpv.lqg) {
                neg.tlo.asb = (window.innerHeight >= window.outerHeight)
            } else {
                if (neg.tlv.egn == neg.wpv.obv) {
                    neg.tlo.asb = (document.fullscreenElement) ? true : false
                } else {
                    if (neg.tlv.fzg) {
                        if (neg.tlv.egn == neg.wpv.hih || neg.tlv.egn == neg.wpv.ftv || neg.tlv.egn == neg.wpv.rsy) {
                            neg.tlo.asb = (document.webkitFullscreenElement) ? true : false
                        } else {
                            if (neg.tlv.egn == neg.wpv.qge) {
                                neg.tlo.asb = (document.mozFullScreenElement) ? true : false
                            }
                        }
                    }
                }
            }
        }
        if (d) {
            d.lbu("fullscreen", neg.tlo.asb)
        }
        if (f) {
            f.cqr.evt("fullscreen", "#lbu", [(neg.tlo.asb) ? 1 : 0])
        }
        if (e) {
            e.cqr.evt("fullscreen", "#lbu", [(neg.tlo.asb) ? 1 : 0])
        }
        if (g) {
            g.cqr.evt("fullscreen", "#lbu", [(neg.tlo.asb) ? 1 : 0])
        }
        neg.tlo.mph();
        neg.tlo.yer();
        neg.tlo.prc();
        if (neg.tlv.unt() === true && neg.tlv.gfs() === false) {
            document.body.style.height = "5000px"
        }
        if (!neg.tlv.gfs() && neg.tlv.egn === neg.wpv.rsy && neg.tlo.zjr < screen.width) {
            window.scrollTo(0, 0)
        }
    };
    this.zsz = function () {
        neg.tlo.byb();
        neg.tlo.loy()
    };
    this.loy = function () {
        if (neg.tlv.unt() === true && neg.tlv.gfs() === false) {
            if (neg.tlo.cgo() === true && neg.tlo.uiw === true) {
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
                            neg.tlo.byb();
                            window.ontouchmove = neg.tlo.zsz
                        }
                    } else {
                        e.className = null;
                        d.className = null;
                        f.style.display = "none";
                        document.ontouchstart = neg.tlo.tly;
                        document.ontouchmove = neg.tlo.oxz;
                        document.ontouchend = neg.tlo.hvr;
                        if (window.ontouchmove != null) {
                            neg.tlo.byb();
                            window.ontouchmove = null
                        }
                        window.scrollTo(0, 0)
                    }
                }
            }
        }
    };
    this.xpc = function (g) {
        var k = document.getElementById("rotateOverlay"),
            e = document.getElementById("rotatePanel"),
            l = document.getElementById("rotate"),
            f = document.getElementById("rotateInfo"),
            d = 500,
            m = 700,
            o = window.innerHeight / d,
            n = window.innerWidth / m,
            j = (o < n) ? o : n;
        if (k && l) {
            if (g === true) {
                if (j < 1) {
                    neg.tlv.civ(e, j, j)
                }
                f.innerHTML = neg.tlo.language.apj;
                l.className = "rotateAnim";
                k.style.display = "block";
                neg.tlo.blx = true
            } else {
                k.style.display = "none";
                l.className = null;
                neg.tlo.blx = false
            }
        }
    };
    this.ghi = function () {
        var d = neg.tlo.oxt.dgc("settings");
        neg.tlo.byb();
        if (d) {
            d.cqr.evt("adjustment", "#lbu", [(neg.tlo.hvx === neg.don.pud) ? 0 : 1]);
            d.qay()
        }
        if (neg.tlo.rwc === true) {
            neg.tlo.blx = true;
            neg.tlo.awd(true);
            neg.tlo.xpc(true)
        } else {
            neg.tlo.blx = false;
            neg.tlo.awd((neg.tlo.yje[neg.tlo.ytm] === 0));
            neg.tlo.xpc(false)
        }
    };
    this.mph = function () {
        this.aeu = window.innerWidth, this.zjr = window.innerHeight;
        this.ruz = false;
        if (neg.tlv.gfs() == true && neg.epl.value69 === true) {
            if (neg.tlv.yjd() === true) {
                this.ruz = true;
                this.aeu = (window.innerWidth > window.outerWidth) ? window.outerWidth : window.innerWidth;
                this.zjr = (window.innerHeight > window.outerHeight) ? window.outerHeight : window.innerHeight;
                if (this.aeu > this.zjr) {
                    this.zjr *= 0.98
                }
            } else {
                if (neg.tlv.unt() === true) {
                    this.ruz = true;
                    if (window.orientation === 90 || window.orientation === -90) {
                        if (screen.height === 1024) {
                            this.aeu = 1024;
                            this.zjr = (window.innerHeight < 704) ? 662 : 704
                        } else {
                            if (screen.height === 736) {
                                this.aeu = 736;
                                this.zjr = (window.innerHeight < 414 || window.innerHeight === 475) ? 370 : 414
                            } else {
                                if (screen.height === 667) {
                                    this.aeu = 667;
                                    this.zjr = 375
                                }
                            }
                        }
                    } else {
                        if (screen.height === 1024) {
                            this.aeu = 768;
                            this.zjr = (window.innerHeight < 960) ? 928 : 960
                        } else {
                            if (screen.height === 736) {
                                this.aeu = 414;
                                this.zjr = 628
                            } else {
                                if (screen.height === 667) {
                                    this.aeu = 375;
                                    this.zjr = 559
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.prc = function () {
        var g = 0,
            k = 0,
            f = 1,
            e = 1,
            j = this.aeu,
            d = this.zjr;
        this.ftg = (this.asb || j < this.width || d < this.height || this.don.dux);
        g = this.oja(this.ftg);
        f = ((j - k) / this.width).toString();
        f = Number(f.substring(0, (f.length > 5) ? 5 : f.length));
        e = ((d - g) / this.height).toString();
        e = Number(e.substring(0, (e.length > 5) ? 5 : e.length));
        if (this.ftg) {
            if (this.don.caa) {
                if (f > e) {
                    this.kvl = e;
                    this.xwi = e
                } else {
                    this.kvl = f;
                    this.xwi = f
                }
            } else {
                this.kvl = f;
                this.xwi = e
            }
        } else {
            this.kvl = 1;
            this.xwi = 1
        }
        neg.tlv.civ(this.canvas, this.kvl, this.xwi);
        if (this.cod != null) {
            neg.tlv.civ(this.cod, this.kvl, this.xwi, ((this.don.cod.cij.x) - ((this.don.cod.cij.x + this.don.cod.rnr) / 2 * (1 - this.kvl))), ((this.don.cod.cij.y) - ((this.don.cod.cij.y + this.don.cod.ncp) / 2 * (1 - this.xwi))))
        }
        if (this.vxi != null) {
            neg.tlv.civ(this.vxi, this.kvl, this.xwi)
        }
        if (this.ftg) {
            this.offsetLeft = Math.floor((j - (this.canvas.width * this.kvl))) / 2;
            this.offsetTop = Math.floor((d - (this.canvas.height * this.xwi))) / 2
        } else {
            this.offsetLeft = this.hen.offsetLeft;
            this.offsetTop = this.hen.offsetTop
        }
    };
    this.yer = function () {
        if (this.rok() === true) {
            var e = null;
            if (this.shd[this.kre] === neg.gzo.udx) {
                if (window.orientation === -90) {
                    e = neg.don.wso
                } else {
                    e = neg.don.pud
                }
            } else {
                if (this.shd[this.kre] === neg.gzo.oen) {
                    e = neg.don.wso
                } else {
                    if (this.shd[this.kre] === neg.gzo.dbj) {
                        e = neg.don.pud
                    }
                }
            }
            this.rwc = (this.zjr > this.aeu);
            this.dfo(e);
            this.riw(false);
            if (this.uiw === true) {
                this.qay()
            } else {
                this.oxt.evt("loading", "#qay")
            }
        } else {
            if (neg.tlv.fzg) {
                var f = (this.aeu > this.zjr) ? this.ytj : this.tlt,
                    d = this.don.kkg,
                    e = null;
                if (f != this.ere) {
                    this.ere = f;
                    if (this.ict) {
                        e = (this.ere == this.ytj) ? neg.don.urp : neg.don.icc
                    } else {
                        e = (this.ere == this.ytj) ? neg.epl.value33 : neg.epl.value32
                    }
                    this.dfo(e);
                    this.riw((d != this.don.kkg) || this.ict);
                    if (this.uiw === true) {
                        if (this.ict && this.eqt) {
                            this.zek(this.vbj(this.language.gwf))
                        } else {
                            this.qay()
                        }
                    } else {
                        this.oxt.evt("loading", "#qay")
                    }
                }
            } else {
                if (!this.ict) {
                    e = (this.asb) ? neg.epl.value15 : neg.epl.value14;
                    this.dfo(e);
                    this.riw(false);
                    if (this.uiw === true) {
                        this.qay()
                    } else {
                        this.oxt.evt("loading", "#qay")
                    }
                }
            }
        }
    };
    this.rok = function () {
        return false
    };
    this.cgo = function () {
        return false
    };
    this.dfo = function (d) {};
    this.zqb = function () {
        this.style = new jkq()
    };
    this.oja = function (d) {
        var e = 0;
        if (neg.tlv.yjd() && window.innerWidth > window.innerHeight && d) {
            if (this.yrr === true && document.body.style.backgroundColor !== this.style.nmd.backgroundColor) {
                document.body.style.backgroundColor = this.style.nmd.backgroundColor
            }
        }
        return e
    };
    this.dkr = function () {
        if (neg.tlv.yjd() && !neg.tlv.gfs() && window.innerWidth > window.innerHeight) {
            return 0
        }
        return 0
    };
    this.rmk = function () {
        return false
    };
    this.uvr = function () {
        if (neg.tlv.vwk) {
            this.uhx = new jfb()
        } else {
            this.uhx = new bxg()
        }
        this.uhx.dcf();
        this.uhx.xrc(this.coz())
    };
    this.wnt = function () {
        this.oxt = new fxb();
        this.oxt.dcf();
        this.oxt.erq("jackpots")
    };
    this.coz = function () {
        var d = new byh();
        d.dcf();
        return d
    };
    this.oto = function () {
        this.lwq = new xml()
    };
    this.ese = function () {
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
                    for (var k = 0, g = neg.epl.value5.length; k < g; k++) {
                        if (o[l] === neg.epl.value5[k] && p.indexOf(o[l]) < 0) {
                            p.push(o[l])
                        }
                    }
                }
                if (p.length == 0) {
                    p.push(neg.epl.value5[0])
                }
                neg.epl.value5 = [];
                for (var l = 0, m = p.length; l < m; l++) {
                    neg.epl.value5.push(p[l])
                }
            }
            if (sessionStorage.sessionValue1 == null) {
                var q = neg.tlv.hgx();
                if (this.tau(q)) {
                    sessionStorage.sessionValue1 = q
                } else {
                    if (q === neg.language.EN && this.tau(neg.language.US)) {
                        sessionStorage.sessionValue1 = neg.language.US
                    } else {
                        if (q === neg.language.DE && this.tau(neg.language.AT)) {
                            sessionStorage.sessionValue1 = neg.language.AT
                        } else {
                            if (q === neg.language.ES && this.tau(neg.language.MX)) {
                                sessionStorage.sessionValue1 = neg.language.MX
                            } else {
                                if (q === neg.language.ES && this.tau(neg.language.CO)) {
                                    sessionStorage.sessionValue1 = neg.language.CO
                                } else {
                                    if (q === neg.language.ES && this.tau(neg.language.CL)) {
                                        sessionStorage.sessionValue1 = neg.language.CL
                                    } else {
                                        if (q === neg.language.ES && this.tau(neg.language.VE)) {
                                            sessionStorage.sessionValue1 = neg.language.VE
                                        } else {
                                            if (q === neg.language.EN && this.tau(neg.language.BR)) {
                                                sessionStorage.sessionValue1 = neg.language.BR
                                            } else {
                                                sessionStorage.sessionValue1 = neg.epl.value5[0]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this.tau(sessionStorage.sessionValue1)) {
                for (var l = 0, m = neg.epl.value5.length; l < m; l++) {
                    if (neg.epl.value5[l] == sessionStorage.sessionValue1) {
                        this.qny = l;
                        break
                    }
                }
                this.language = this.ycp(sessionStorage.sessionValue1)
            } else {
                this.qny = 0;
                this.language = this.ycp(neg.epl.value5[this.qny]);
                sessionStorage.sessionValue1 = neg.epl.value5[this.qny]
            }
        } catch (n) {
            this.qny = 0;
            this.language = this.ycp(neg.epl.value5[this.qny]);
            console.error(n.ieh)
        }
    };
    this.lyz = function () {
        var d = (neg.epl.value45 == neg.jgt.fst) ? this.don.jgt.tlo : (neg.epl.value45 == neg.jgt.gxf) ? this.don.jgt.zwd : this.don.jgt.tgw;
        this.hen = document.getElementById("gameArea");
        if (this.ruz === false) {
            this.hen.style.marginTop = (-d.cij.height / 2) + "px";
            this.hen.style.marginLeft = (-d.cij.width / 2) + "px"
        } else {
            this.hen.style.left = "0px";
            this.hen.style.top = "0px";
            this.hen.style.marginTop = ((window.innerHeight - d.cij.height) / 2) + "px";
            this.hen.style.marginLeft = ((window.innerWidth - d.cij.width) / 2) + "px"
        }
        this.hen.style.width = (d.cij.width > window.innerWidth) ? window.innerWidth + "px" : d.cij.width + "px";
        this.hen.style.height = (d.cij.height > window.innerHeight) ? window.innerHeight + "px" : d.cij.height + "px";
        this.canvas = document.getElementById("canvas");
        this.canvas.width = Math.round(d.cij.width);
        this.canvas.height = Math.round(d.cij.height);
        this.context2D = this.canvas.getContext("2d");
        this.vxi = document.getElementById("gameOverlay");
        if (this.vxi) {
            this.vxi.style.width = d.cij.width + "px";
            this.vxi.style.height = d.cij.height + "px"
        }
        this.ayb(d)
    };
    this.ayb = function (d) {
        var e = new zpf();
        e.dcf(d.cij, this.context2D);
        e.parent = this;
        e.smb = (this.ict) ? this.language.fti : this.language.lat;
        e.sgd = this.language.error;
        e.mwg(d);
        e.gzv(this.style.jgt);
        this.oxt.pbt("loading", e)
    };
    this.flv = function () {
        var d = new own();
        d.dcf(this.don.gyi.cij, null, this.context2D);
        d.parent = this;
        d.mwg(this.don.gyi);
        d.gzv(this.style.gyi);
        if (sessionStorage.sessionValue15 == "true" && neg.epl.value49) {
            d.cvh("time", "", "--:-- [--:--]")
        } else {
            if (sessionStorage.sessionValue15 == "true" || neg.epl.value49) {
                d.cvh("time", "", "--:--")
            }
        }
        if (this.kvu()) {
            d.cvh("freeplay", "", this.language.aio)
        } else {
            d.cvh("id", " ", "")
        }
        this.oxt.pbt("topi", d)
    };
    this.phg = function () {
        var d = new gnc();
        d.dcf(this.don.pgu.cij, null, this.context2D);
        d.parent = this;
        d.mwg(this.don.pgu);
        d.gzv(this.style.pgu, false);
        d.wmg(false);
        this.oxt.pbt("topb", d)
    };
    this.zrf = function () {};
    this.tcv = function () {
        var d = new wtf();
        d.dcf(this.don.uhj.cij, null, this.context2D);
        d.parent = this;
        d.dxu(this.don.uhj);
        d.gzv(this.style.uhj);
        d.wmg(false);
        this.oxt.pbt("stats", d)
    };
    this.vqd = function () {
        this.aka = new dht();
        this.aka.dcf();
        this.aka.gzv(this.style.aka);
        this.aka.mwg(this.don.aka)
    };
    this.xqo = function () {
        this.sje = new zyn();
        this.sje.dcf();
        this.sje.gzv(this.style.sje);
        this.sje.mwg(this.don.sje)
    };
    this.soy = function () {
        if (this.xso()) {
            this.uoz.tni = document.getElementById("jurisdictionDiv");
            this.uoz.byg = document.getElementById("btnsp");
            this.uoz.qdf = document.getElementById("btnsl");
            this.uoz.iut = document.getElementById("btnst");
            if (this.uoz.byg) {
                this.uoz.byg.innerHTML = this.language.bgs;
                this.uoz.byg.onclick = this.ljy;
                this.uoz.byg.ontouchend = this.ljy
            }
            if (this.uoz.qdf) {
                this.uoz.qdf.innerHTML = this.language.prd;
                this.uoz.qdf.onclick = this.qlm;
                this.uoz.qdf.ontouchend = this.qlm
            }
            if (this.uoz.iut) {
                this.uoz.iut.innerHTML = this.language.tes;
                this.uoz.iut.onclick = this.buu;
                this.uoz.iut.ontouchend = this.buu
            }
            this.feg();
            this.awi()
        }
    };
    this.ieu = function (e) {
        var d = new oos();
        d.dcf(this.don.muq.cij, null, this.context2D);
        d.parent = this;
        d.hlx = true;
        if (e) {
            d.oze(e)
        }
        d.dxu(this.don.muq);
        d.hqp(this.language);
        d.gzv(this.style.muq);
        d.mwg(this.don.muq);
        d.wmg(false);
        this.oxt.pbt("autop", d)
    };
    this.lou = function (d) {
        var e = new fer();
        e.dcf(this.don.sqq.cij, null, this.context2D);
        e.parent = this;
        if (d) {
            e.kvo(d)
        }
        e.wmg(false);
        this.oxt.pbt("settings", e)
    };
    this.riw = function (d) {};
    this.pqz = function () {
        var d = this.oxt.dgc("stats");
        if (d) {
            d.pxx(this.don.uhj.cij);
            d.mwg(this.don.uhj)
        }
    };
    this.hja = function () {
        if (this.aka) {
            this.aka.mwg(this.don.aka)
        }
    };
    this.jsh = function () {
        if (this.sje) {
            this.sje.mwg(this.don.sje)
        }
    };
    this.feg = function () {
        var d = null,
            e = 0;
        if (this.uoz) {
            d = this.don.uiv;
            if (this.uoz.tni) {
                neg.tlv.oll(this.uoz.tni, d.zrh)
            }
            if (this.uoz.byg) {
                this.uoz.byg.style.fontSize = d.krb.fontSize + "px";
                this.uoz.byg.style.textIndent = d.krb.textIndent + "px";
                neg.tlv.oll(this.uoz.byg, d.cwu)
            }
            if (this.uoz.qdf) {
                this.uoz.qdf.style.fontSize = d.krb.fontSize + "px";
                this.uoz.qdf.style.textIndent = d.krb.textIndent + "px";
                neg.tlv.oll(this.uoz.qdf, d.ckt)
            }
            if (this.uoz.iut) {
                this.uoz.iut.style.fontSize = d.krb.fontSize + "px";
                this.uoz.iut.style.textIndent = d.krb.textIndent + "px";
                neg.tlv.oll(this.uoz.iut, d.fcc)
            }
            if (this.uoz.tni) {
                e = (d.zrh.width - d.zrh.height) / 2;
                if (this.hvx == neg.don.wso) {
                    this.uoz.tni.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + e + "px)"
                } else {
                    this.uoz.tni.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + (-e) + "px)"
                }
            }
        }
    };
    this.bsn = function () {
        var d = this.oxt.dgc("autop");
        if (d) {
            d.pxx(this.don.muq.cij);
            d.mwg(this.don.muq)
        }
    };
    this.lsz = function () {
        var d = this.oxt.dgc("settings");
        if (d) {
            d.pxx(this.don.sqq.cij);
            d.mwg(this.don.sqq)
        }
    };
    this.mwc = function () {
        var d = this.oxt.dgc("topi");
        if (d) {
            d.pxx(this.don.gyi.cij);
            d.mwg(this.don.gyi)
        }
    };
    this.pgq = function () {
        var d = this.oxt.dgc("topb");
        if (d) {
            d.pxx(this.don.pgu.cij);
            d.mwg(this.don.pgu)
        }
    };
    this.chl = function () {
        var e = this.oxt.dgc("loading"),
            d = (neg.epl.value45 == neg.jgt.fst) ? this.don.jgt.tlo : (neg.epl.value45 == neg.jgt.gxf) ? this.don.jgt.zwd : this.don.jgt.tgw;
        if (e) {
            this.canvas.width = 0;
            if (this.ruz === false) {
                this.hen.style.marginTop = (-d.cij.height / 2) + "px";
                this.hen.style.marginLeft = (-d.cij.width / 2) + "px"
            } else {
                this.hen.style.left = "0px";
                this.hen.style.top = "0px";
                this.hen.style.marginTop = ((this.zjr - d.cij.height) / 2) + "px";
                this.hen.style.marginLeft = ((this.aeu - d.cij.width) / 2) + "px"
            }
            this.hen.style.width = (d.cij.width > this.aeu) ? this.aeu + "px" : d.cij.width + "px";
            this.hen.style.height = (d.cij.height > this.zjr) ? this.zjr + "px" : d.cij.height + "px";
            this.canvas.width = Math.round(d.cij.width);
            this.canvas.height = Math.round(d.cij.height);
            if (this.vxi) {
                this.vxi.style.width = d.cij.width + "px";
                this.vxi.style.height = d.cij.height + "px"
            }
            e.pxx(d.cij);
            e.mwg(d)
        }
    };
    this.jfg = function () {
        if (neg.tlv.fzg && !neg.tlv.vwk) {
            if (!this.uhx.cyp && neg.tlv.egn != neg.wpv.zzm) {
                this.kvi = false;
                this.ytm = 0
            }
        }
    };
    this.wuc = function (d) {
        if (neg.tlv.fzg) {
            if (!this.ict) {
                return neg.don.xya
            } else {
                if (!this.vpo) {
                    return neg.don.urp
                }
            }
        }
        return d
    };
    this.bpe = function () {
        var d = this.oxt.dgc("loading");
        this.byb();
        if (d) {
            d.rvy = true
        }
        if ((neg.tlv.egn === neg.wpv.hih || neg.tlv.egn === neg.wpv.lqg || neg.tlv.egn === neg.wpv.vxr) && neg.tlv.dez === neg.os.fis && neg.tlv.dtm === true) {
            if (this.uhx.cyp === false || neg.tlv.wyn() === false || neg.tlv.tnw() === false) {
                neg.gpk = neg.gif.vko
            }
        }
        if (neg.gpk == 0) {
            if (this.kvi === true && neg.tlv.xgv().length === 0) {
                this.kvi = false
            }
            if (d) {
                if (neg.epl.value45 === neg.jgt.gxf) {
                    d.start()
                } else {
                    if (neg.epl.value45 === neg.jgt.cpb) {
                        d.piz()
                    }
                }
                d.qay(0)
            }
            this.mvq();
            if (this.kvi === true) {
                this.iks()
            }
            if (d && d.qwh() && neg.epl.value45 === neg.jgt.gxf) {
                d.mbo = neg.tlo.uhx.start
            } else {
                this.uhx.start()
            }
        } else {
            if (d) {
                if (neg.gpk == neg.gif.tut && neg.tlv.egn === neg.wpv.rsy) {
                    d.xjq = this.language.trr;
                    d.qay(0)
                } else {
                    if (neg.gpk == neg.ieh.zgg) {
                        d.xjq = this.language.czj;
                        d.qay(0)
                    } else {
                        d.xjq = this.language.vuo;
                        if (neg.tlv.dez === neg.os.fis || neg.tlv.dez === neg.os.fhe) {
                            if (neg.gpk != neg.gif.tut && sessionStorage.sessionValue1 === neg.language.TR) {
                                d.xjq += "|Google Chrome" + this.language.ljd
                            } else {
                                if (neg.gpk != neg.gif.tut && (sessionStorage.sessionValue1 === neg.language.GE || sessionStorage.sessionValue1 === neg.language.HU)) {
                                    d.xjq += "|" + this.language.jyo + " Google Chrome" + this.language.nwv
                                } else {
                                    d.xjq += "|" + this.language.ljd + " Google Chrome"
                                }
                            }
                        } else {
                            if (neg.tlv.dez === neg.os.xnn || neg.tlv.dez === neg.os.fhe) {
                                if (neg.gpk != neg.gif.tut && sessionStorage.sessionValue1 === neg.language.TR) {
                                    d.xjq += "|Google Chrome, Mozilla Firefox" + this.language.ljd
                                } else {
                                    if (neg.gpk != neg.gif.tut && (sessionStorage.sessionValue1 === neg.language.GE || sessionStorage.sessionValue1 === neg.language.HU)) {
                                        d.xjq += "|" + this.language.jyo + " Google Chrome, Mozilla Firefox" + this.language.nwv
                                    } else {
                                        d.xjq += "|" + this.language.ljd + " Google Chrome, Mozilla Firefox"
                                    }
                                }
                            }
                        }
                        console.error("Errorcode: " + neg.gpk);
                        d.qay(0)
                    }
                }
            }
        }
    };
    this.mvq = function () {};
    this.iks = function () {};
    this.vxx = function () {
        var e = this.kvt + this.don.type + "/",
            d = this.oxt.dgc("loading");
        if (neg.epl.value45 == neg.jgt.fst) {
            e += "load.jpg"
        } else {
            if (neg.epl.value45 == neg.jgt.gxf) {
                e += "load_amatic.png"
            } else {
                if (neg.epl.value45 == neg.jgt.cpb) {
                    this.uhx.zqx("splashanim", neg.epl.value30 + "/basic/images/" + this.don.type + "/loadanim.png");
                    e += "load_amanet.png"
                }
            }
        }
        if (e.indexOf(".png") >= 0) {
            if (d) {
                d.wdk = true
            }
        }
        this.uhx.zqx("splash", e);
        this.uhx.khi()
    };
    this.qwn = function () {};
    this.tau = function (e) {
        for (var d = 0; d < neg.epl.value5.length; d++) {
            if (neg.epl.value5[d] == e) {
                return true
            }
        }
        return false
    };
    this.tqw = function () {
        neg.tlo.dpc = true;
        if (!neg.tlo.ict) {
            neg.tlo.caz();
            if (neg.tlo.hgj()) {
                neg.tlo.ntt()
            }
        } else {
            neg.tlo.sqp()
        }
        neg.tlo.connect()
    };
    this.caz = function () {};
    this.sqp = function () {};
    this.connect = function () {
        this.nvf.connect(this.mvb, this.vjg, this.fmv, this.abn, this.qll, this.noa, this.uow)
    };
    this.ybe = function (d) {
        if (typeof d === "undefined") {
            neg.tlo.nvf.ybe(0)
        } else {
            neg.tlo.nvf.ybe(d)
        }
    };
    this.tla = function (d) {
        this.ufn = 0;
        this.pjc = 0;
        this.xuh = d;
        clearInterval(this.bki);
        this.bki = setInterval(this.las, 1000)
    };
    this.las = function () {
        var d = neg.tlo.oxt.dgc("loading");
        neg.tlo.ufn++;
        neg.tlo.pjc = Math.round(neg.epl.value47 / 1000) - neg.tlo.ufn;
        neg.tlo.pjc = (neg.tlo.pjc > 0) ? neg.tlo.pjc : 0;
        if (!neg.tlo.yrr) {
            if (d) {
                d.xjq = "Can not connect to game server!|Tries to connect: " + neg.tlo.xuh + " (" + neg.tlo.pjc + " sec)";
                d.qay(0)
            }
        }
    };
    this.qmr = function () {
        return neg.epl.value74
    };
    this.qay = function (d, g, e, f) {};
    this.ydx = function () {
        return (this.uiw === true && this.yrr === true && this.rwc === false)
    };
    this.zek = function (e) {
        var d = this.oxt.dgc("history");
        this.uiw = true;
        if (this.yrr) {
            if (this.don.cqe) {
                neg.tlv.hmu(this.context2D, this.don.tlo.cij.x - this.don.tlo.mmg, this.don.tlo.cij.y - this.don.tlo.mmg, this.don.tlo.cij.width + 2 * this.don.tlo.mmg, this.don.tlo.cij.height + 2 * this.don.tlo.mmg, "black", 1)
            }
            neg.tlv.rnq(this.context2D, e, "white", this.don.tlo.cij.x, this.don.tlo.cij.y, this.don.tlo.cij.width, this.don.tlo.cij.height, "arial", 28, "bold");
            if (d) {
                d.qay()
            }
        }
    };
    this.fgy = function () {
        if (neg.tlo.aka) {
            neg.tlo.aka.crq()
        }
        neg.tlo.wnp(false);
        neg.tlo.pyn.whl(false);
        neg.tlo.pyn.cqr.evt("exit", "#iwc", [true]);
        if (neg.tlv.ptg()) {
            neg.tlv.pcg();
            setTimeout(neg.tlo.byb, 1400)
        }
        if (neg.epl.value67 > 0) {
            neg.tlo.ybe(neg.epl.value67)
        } else {
            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                neg.tlo.pld({
                    type: "history",
                    sender: neg.tlo.mvb,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                });
                window.location.href = decodeURIComponent(sessionStorage.sessionValue16)
            } else {
                if (sessionStorage.sessionValue5 && sessionStorage.sessionValue5 != "null") {
                    neg.tlo.pld({
                        type: "quit",
                        sender: neg.tlo.mvb,
                        lang: sessionStorage.sessionValue1.toUpperCase()
                    });
                    if (sessionStorage.sessionValue5 !== "(api)") {
                       window.parent.postMessage('CloseGame',"*");
                    }
                }
            }
        }
    };
    this.rah = function () {
        clearTimeout(neg.tlo.cmb);
        neg.tlo.wnp(false);
        if (neg.tlo.pyn) {
            neg.tlo.pyn.whl(false)
        }
        if (!neg.tlo.ict) {
            neg.tlo.stop();
            if (neg.tlo.pyn) {
                neg.tlo.pyn.cqr.evt("info", "#fuh", [neg.tlo.language.gdy]);
                neg.tlo.qay()
            }
            if (neg.tlo.rok() === true && neg.tlv.ptg()) {
                neg.tlv.pcg();
                setTimeout(neg.tlo.byb, 800);
                setTimeout(neg.tlo.nvf.jja.close, 800)
            } else {
                neg.tlo.nvf.jja.close()
            }
        } else {
            neg.tlo.nvf.close()
        }
    };
    this.cbn = function () {
        neg.tlo.ilq = true
    };
    this.mht = function () {
        if (neg.tlv.fzg == true) {
            if (neg.tlo.ilq == true) {
                neg.tlo.ilq = false;
                neg.tlv.pcg();
                setTimeout(neg.tlo.byb, 1400)
            }
        } else {
            neg.tlv.pcg();
            setTimeout(neg.tlo.byb, 1400)
        }
    };
    this.xjd = function () {
        var e = (neg.tlo.rok() === true) ? "smartphone" : "desktop",
            j = "en";
        if (sessionStorage.sessionValue1 == neg.language.ES || sessionStorage.sessionValue1 == neg.language.CO || sessionStorage.sessionValue1 == neg.language.CL || sessionStorage.sessionValue1 == neg.language.MX || sessionStorage.sessionValue1 == neg.language.VE) {
            j = "es"
        } else {
            if (sessionStorage.sessionValue1 == neg.language.RO) {
                j = "ro"
            } else {
                if (sessionStorage.sessionValue1 == neg.language.PT || sessionStorage.sessionValue1 == neg.language.BR) {
                    j = "pt"
                } else {
                    if (sessionStorage.sessionValue1 == neg.language.HR) {
                        j = "hr"
                    } else {
                        if (sessionStorage.sessionValue1 == neg.language.DE) {
                            j = "de"
                        } else {
                            if (sessionStorage.sessionValue1 == neg.language.SE) {
                                j = "se"
                            }
                        }
                    }
                }
            }
        }
        if (neg.tlo.nbn != "") {
            var f = null,
                g = "",
                d = "";
            if (neg.tlo.nbn != "") {
                g += "rtp=" + neg.tlo.nbn
            }
            if (neg.tlo.uce != "") {
                g += (neg.tlo.nbn != "") ? "&" : "";
                g += "maxwin=" + ((neg.tlo.uce == "0") ? "0" : neg.tlo.wzp(Number(neg.tlo.uce) * neg.tlo.vjp()))
            }
            d = encodeURIComponent(g);
            f = window.open(neg.epl.value30 + "/gamerules/" + j + "/" + e + "/" + neg.tlo.mvb.toLowerCase() + ".html?" + d, "_blank", (e === "desktop") ? "width=800,scrollbars=yes" : null);
            if (f == null || typeof f === "undefined") {
                window.location.href = neg.epl.value30 + "/gamerules/" + j + "/" + e + "/" + neg.tlo.mvb.toLowerCase() + ".html?" + d
            }
        }
    };
    this.lvy = function () {
        neg.tlo.uxt = false;
        neg.tlo.qeh();
        neg.tlo.ivr();
        neg.tlo.bhv()
    };
    this.lal = function () {
        var d = neg.tlo.oxt.dgc("stats");
        if (d) {
            d.oqn(true, true)
        }
        neg.tlo.qmz.close(true)
    };
    this.aue = function () {
        var d = neg.tlo.oxt.dgc("stats");
        neg.tlo.stop();
        if (d && d.cxw()) {
            d.oqn(true, true)
        }
        neg.tlo.nvf.jja.close();
        if (neg.tlo.qmz) {
            neg.tlo.qmz.close(false)
        }
    };
    this.lda = function () {
        clearTimeout(neg.tlo.cmb);
        neg.tlo.pyn.whl(false);
        neg.tlo.stop();
        neg.tlo.nvf.jja.axb()
    };
    this.npp = function () {
        if (neg.tlo.eqt) {
            return
        }
        var d = neg.tlo.oxt.dgc("history");
        if (d) {
            d.whl(false)
        }
        neg.tlo.stop();
        neg.tlo.nvf.dmg(neg.tlo.fgk)
    };
    this.rqy = function () {
        if (neg.tlo.eqt) {
            return
        }
        var d = neg.tlo.oxt.dgc("history");
        if (d) {
            d.whl(false)
        }
        neg.tlo.stop();
        neg.tlo.nvf.ywv(neg.tlo.fgk)
    };
    this.nzl = function () {
        var d = neg.tlo.oxt.dgc("history");
        if (d) {
            d.whl(false)
        }
        neg.tlo.stop();
        clearInterval(neg.tlo.ved);
        neg.tlo.pik();
        neg.tlo.nvf.close()
    };
    this.cwr = function () {
        neg.tlo.uhx.yiv("btn");
        neg.tlo.uhx.onc("btn");
        neg.tlo.rbs()
    };
    this.bvn = function () {
        var f = neg.tlo.oxt.dgc("topb"),
            e = neg.tlo.oxt.dgc("settings"),
            g = neg.tlo.oxt.dgc("gameb"),
            d = neg.tlo.oxt.dgc("topi");
        if (webAudioEngine && webAudioEngine.state == "suspended") {
            webAudioEngine.resume()
        }
        if (neg.tlo.uhx.cyp === true) {
            neg.tlo.ytm = (neg.tlo.ytm === neg.tlo.yje.length - 1) ? 0 : neg.tlo.ytm + 1;
            neg.tlo.lft(neg.tlo.yje[neg.tlo.ytm])
        } else {
            neg.tlo.ytm = (neg.tlo.ytm === neg.tlo.yje.length - 1) ? 0 : neg.tlo.yje.length - 1;
            neg.tlo.awd((neg.tlo.yje[neg.tlo.ytm] === 0))
        }
        sessionStorage.sessionValue6 = neg.tlo.ytm;
        if (neg.tlo.yje[neg.tlo.ytm] > 0) {
            neg.tlo.uhx.onc("audioon")
        }
        if (d) {
            d.zog("audio", neg.tlo.yje[neg.tlo.ytm])
        }
        if (f) {
            f.cqr.evt("audio", "#lbu", [neg.tlo.ytm])
        }
        if (e) {
            e.cqr.evt("audio", "#lbu", [neg.tlo.ytm])
        }
        if (g) {
            g.cqr.evt("audio", "#lbu", [neg.tlo.ytm])
        }
        neg.tlo.qay()
    };
    this.cgi = function () {};
    this.vni = function () {
        var d = neg.tlo.oxt.dgc("settings");
        if (d) {
            if (d.cxw()) {
                neg.tlo.sys()
            } else {
                neg.tlo.sbr()
            }
            neg.tlo.uhx.onc("btn");
            if (neg.tlo.don.xrl === false) {
                neg.tlo.pyn.cqr.evt("setting", "#xlw", [d.cxw()])
            }
        }
    };
    this.cvd = function () {
        var d = neg.tlo.oxt.dgc("settings"),
            e = "";
        neg.tlo.kre = (neg.tlo.kre < neg.tlo.shd.length - 1) ? neg.tlo.kre + 1 : (neg.tlv.eyc()) ? 0 : 1;
        localStorage.localValue1 = neg.tlo.kre;
        neg.tlo.byb();
        if (d) {
            d.cqr.evt("adjustment", "#lbu", [(neg.tlo.hvx === neg.don.pud) ? 0 : 1]);
            if (neg.tlo.shd[neg.tlo.kre] === neg.gzo.oen) {
                e = neg.tlo.language.left
            } else {
                if (neg.tlo.shd[neg.tlo.kre] === neg.gzo.dbj) {
                    e = neg.tlo.language.nmb
                } else {
                    if (neg.tlo.shd[neg.tlo.kre] === neg.gzo.udx) {
                        e = neg.tlo.language.rpm
                    }
                }
            }
            d.cqr.evt("adjustment", "#rqq", [e])
        }
    };
    this.ljy = function () {
        if (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue21)
        }
    };
    this.qlm = function () {
        if (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue20)
        }
    };
    this.buu = function () {
        if (sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue19)
        }
    };
    this.hsm = function (e, d) {
        this.pyn.cqr.evt("creditd", "#rqq", [this.wzp(e), d])
    };
    this.fsq = function (e, d) {
        if (e > 0) {
            this.pyn.cqr.evt("betd", "#rqq", [this.wzp(e), d])
        } else {
            this.pyn.cqr.evt("betd", "#rqq", ["", d])
        }
    };
    this.cne = function (e) {
        var d = this.oxt.dgc("topi");
        this.fgk = e;
        if (d) {
            d.yjr("id", (e > 0) ? e : "")
        }
    };
    this.mxn = function () {
        var e = "",
            d = neg.tlo.oxt.dgc("topi");
        if (neg.epl.value49) {
            e += neg.tlo.yqe()
        }
        if (neg.epl.value49 && sessionStorage.sessionValue15 == "true") {
            e += " ["
        }
        if (sessionStorage.sessionValue15 == "true") {
            e += neg.tlo.wam()
        }
        if (neg.epl.value49 && sessionStorage.sessionValue15 == "true") {
            e += "]"
        }
        if (d) {
            d.yjr("time", e)
        }
    };
    this.wam = function () {
        return this.getTime(new Date().getTime() - this.pia)
    };
    this.yqe = function () {
        var d = new Date();
        return this.clh(d.getHours()) + ":" + this.clh(d.getMinutes())
    };
    this.getTime = function (e) {
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
        return this.clh(d) + ":" + this.clh(f)
    };
    this.clh = function (d) {
        if (d < 0) {
            return "00"
        } else {
            if (d < 10) {
                return "0" + d
            }
        }
        return d
    };
    this.ofu = function () {
        if (sessionStorage.sessionValue15 == "true" || neg.epl.value49) {
            if (neg.epl.value49) {
                this.yqe()
            }
            this.pia = (this.qyc > 0) ? this.qyc : new Date().getTime();
            this.mxn();
            this.icv = setInterval(this.mxn, 1000)
        }
    };
    this.ogr = function () {
        clearInterval(this.icv)
    };
    this.ixs = function (d) {
        this.pia -= d
    };
    this.zrb = function (d, f) {
        var e = this.oxt.dgc("loading");
        if (e && e.xjq == null) {
            if (f && f !== "") {
                e.sgd = f
            } else {
                e.sgd = this.language.error
            }
            e.xjq = d;
            e.qay(this.uhx.bok())
        }
    };
    this.sbr = function () {};
    this.sys = function () {};
    this.fsl = function () {};
    this.dgu = function () {};
    this.rbs = function () {
        var g = false,
            j = this.oxt.dgc("topb"),
            f = this.oxt.dgc("settings"),
            k = this.oxt.dgc("gameb"),
            d = this.oxt.dgc("topi");
        this.qny = (this.qny + 1 == neg.epl.value5.length) ? 0 : this.qny + 1;
        sessionStorage.sessionValue1 = neg.epl.value5[this.qny];
        this.language = this.ycp(neg.epl.value5[this.qny]);
        this.hqp();
        if (j && g == false) {
            var e = j.cqr.dgc("language");
            if (e) {
                e.uuq(this.iua(neg.epl.value5[this.qny]));
                g = true
            }
            j.ics(true)
        }
        if (f && g == false) {
            var e = f.cqr.dgc("language");
            if (e) {
                e.uuq(this.iua(neg.epl.value5[this.qny]));
                g = true
            }
        }
        if (k && g == false) {
            var e = k.cqr.dgc("language");
            if (e) {
                e.uuq(this.iua(neg.epl.value5[this.qny]));
                g = true
            }
        }
        if (g == false) {
            var e = this.pyn.cqr.dgc("lang");
            if (e) {
                e.hvf = this.iua(neg.epl.value5[this.qny])
            }
        }
        if (d) {
            d.lbu("language", sessionStorage.sessionValue1)
        }
        this.qay()
    };
    this.hqp = function () {};
    this.ycp = function (d) {
        if (d == neg.language.EN || d == neg.language.US) {
            return new stb()
        } else {
            if (d == neg.language.ES || d == neg.language.CO || d == neg.language.MX || d == neg.language.CL || d == neg.language.VE) {
                return new qzk()
            } else {
                if (d == neg.language.DE || d == neg.language.AT) {
                    return new rch()
                } else {
                    if (d == neg.language.PT || d == neg.language.BR) {
                        return new slg()
                    } else {
                        if (d == neg.language.RU) {
                            return new vdq()
                        } else {
                            if (d == neg.language.EE) {
                                return new lec()
                            } else {
                                if (d == neg.language.TR) {
                                    return new paq()
                                } else {
                                    if (d == neg.language.CZ) {
                                        return new jyg()
                                    } else {
                                        if (d == neg.language.GR) {
                                            return new eec()
                                        } else {
                                            if (d == neg.language.BG) {
                                                return new rdv()
                                            } else {
                                                if (d == neg.language.GE) {
                                                    return new tcn()
                                                } else {
                                                    if (d == neg.language.HU) {
                                                        return new txf()
                                                    } else {
                                                        if (d == neg.language.RO) {
                                                            return new egh()
                                                        } else {
                                                            if (d == neg.language.FR) {
                                                                return new zuw()
                                                            } else {
                                                                if (d == neg.language.HR) {
                                                                    return new itk()
                                                                } else {
                                                                    if (d == neg.language.IT) {
                                                                        return new vhe()
                                                                    } else {
                                                                        if (d == neg.language.SE) {
                                                                            return new rwa()
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
    this.iua = function (d) {
        if (d) {
            return this.uhx.xzk(d)
        }
        return null
    };
    this.iel = function () {
        this.uhx.zig()
    };
    this.pik = function () {};
    this.awd = function (d) {
        this.uhx.wtc(d)
    };
    this.lft = function (d) {
        this.uhx.afb(d)
    };
    this.mkt = function () {
        this.zrf();
        var d = this.oxt.dgc("history");
        this.yrr = true;
        this.eqt = true;
        if (d) {
            d.meq(true)
        }
        this.zek(this.vbj(this.language.gwf))
    };
    this.rar = function () {
        loadGame("hist_" + neg.tlo.mvb.toLowerCase(), neg.epl.value30 + "/" + neg.tlo.mvb.toLowerCase() + "/src/hist_" + neg.tlo.mvb.toLowerCase(), "UTF-8");
        removeGame(neg.tlo.mvb.toLowerCase(), neg.epl.value30 + "/" + neg.tlo.mvb.toLowerCase() + "/src/" + neg.tlo.mvb.toLowerCase())
    };
    this.uwm = function () {
        var d = "./history_" + this.mvb.toLowerCase() + ".html";
        if (sessionStorage.sessionValue12) {
            d += "?config=" + sessionStorage.sessionValue12
        }
        window.location.href = d
    };
    this.cst = function () {
        var d = null;
        if (neg.tlo.vpo) {
            return
        }
        if (sessionStorage.sessionValue5 != null) {
            neg.tlo.pld({
                type: "quit",
                sender: neg.tlo.mvb,
                lang: sessionStorage.sessionValue1.toUpperCase()
            });
            sessionStorage.exitGame = "true";
            d = decodeURIComponent(sessionStorage.sessionValue5);
            neg.tlo.drg();
            if (d !== "(api)") {
               window.parent.postMessage('CloseGame',"*");
            }
        } else {
            removeGame(neg.tlo.mvb.toLowerCase(), neg.epl.value30 + "/" + neg.tlo.mvb.toLowerCase() + "/src/" + neg.tlo.mvb.toLowerCase());
            removeGame("hist_" + neg.tlo.mvb.toLowerCase(), neg.epl.value30 + "/" + neg.tlo.mvb.toLowerCase() + "/src/hist_" + neg.tlo.mvb.toLowerCase());
            loadMenu("menu", neg.epl.value1001, "UTF-8", true)
        }
    };
    this.eiv = function () {
        var d = null;
        if (sessionStorage.sessionValue5 != null) {
            neg.tlo.pld({
                type: "quit",
                sender: neg.tlo.mvb,
                lang: sessionStorage.sessionValue1.toUpperCase()
            });
            d = decodeURIComponent(sessionStorage.sessionValue5);
            neg.tlo.drg();
            if (d !== "(api)") {
               window.parent.postMessage('CloseGame',"*");
            }
        } else {
            removeGame(neg.tlo.mvb.toLowerCase(), neg.epl.value30 + "/" + neg.tlo.mvb.toLowerCase() + "/src/" + neg.tlo.mvb.toLowerCase());
            removeGame("hist_" + neg.tlo.mvb.toLowerCase(), neg.epl.value30 + "/" + neg.tlo.mvb.toLowerCase() + "/src/hist_" + neg.tlo.mvb.toLowerCase());
            loadMenu("menu", neg.epl.value1001, "UTF-8", false)
        }
    };
    this.drg = function () {
        if (!neg.tlo.ict && neg.epl.value83) {
            sessionStorage.clear()
        }
    };
    this.kfs = function (f) {
        var g = null;
        if (this.aka) {
            for (var e = 0, d = f.length; e < d; e++) {
                g = f[e];
                if (g.xjv !== neg.ieh.ilr) {
                    if (g.xjv === neg.ieh.swe || g.xjv === neg.ieh.gsp) {
                        g.Title = this.language.qig;
                        g.Text = (g.xjv === neg.ieh.swe) ? this.language.hcw : this.language.hnk;
                        g.Buttons = [{
                            Text: this.language.ymw,
                            Action: "quit"
                        }]
                    } else {
                        if (g.xjv === neg.ieh.bel) {
                            g.Title = this.language.wan;
                            g.Text = this.language.znq + "\n";
                            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                                g.Text += this.language.jyr;
                                g.Buttons = [{
                                    Text: this.vbj(this.language.law),
                                    Action: "history"
                                }, {
                                    Text: this.language.ymw,
                                    Action: "quit"
                                }]
                            } else {
                                g.Buttons = [{
                                    Text: this.language.ymw,
                                    Action: "quit"
                                }]
                            }
                        } else {
                            if (g.xjv === neg.ieh.zsh || g.xjv === neg.ieh.zdt || g.xjv === neg.ieh.kqw) {
                                g.Title = this.vac;
                                if (g.xjv === neg.ieh.zsh) {
                                    g.Text = this.language.azy + " " + this.igw + " " + this.language.fxr + "\n\n" + this.language.uno
                                } else {
                                    if (g.xjv === neg.ieh.zdt) {
                                        g.Text = this.language.kio + " " + (this.igw - this.boo) + " " + this.language.pki + "\n\n" + this.language.uno
                                    } else {
                                        if (g.xjv === neg.ieh.kqw) {
                                            g.Text = this.language.apz + ": " + this.boo + "\n" + this.language.udy + ": " + this.jea(this.ova)
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
                    if (g.xjv === neg.ieh.lzi || g.xjv === neg.ieh.lqw) {
                        g.Title = this.language.tus;
                        g.Text = this.language.shq;
                        g.Buttons = [{
                            Text: this.language.ok,
                            Action: "continue"
                        }]
                    } else {
                        if (g.xjv === neg.ieh.xmx) {
                            g.Title = this.language.fxo;
                            g.Text = this.language.lch;
                            g.Buttons = [{
                                Text: this.language.ok,
                                Action: "continue"
                            }]
                        } else {
                            if (g.xjv === neg.ieh.roulette.rmb || g.xjv === neg.ieh.roulette.gyz) {
                                g.Title = this.language.qig;
                                g.Text = (g.xjv === neg.ieh.roulette.rmb) ? this.language.rcv : this.language.uxz;
                                g.Buttons = [{
                                    Text: this.language.ymw,
                                    Action: "quit"
                                }]
                            }
                        }
                    }
                }
            }
            this.aka.jog(f)
        }
    };
    this.stop = function () {
        this.ogr();
        this.gap();
        this.osw();
        clearTimeout(this.rbd);
        if (!this.ict) {
            clearInterval(this.ved)
        }
        this.oxt.evt("autop", "#stop");
        this.oxt.evt("settings", "#stop");
        this.oxt.evt("topb", "#stop")
    };
    this.kvu = function () {
        var d = false;
        if (this.uyl.toLowerCase().indexOf("freeplay") === 0) {
            d = true
        } else {
            if (this.vjg == "freeplay" && this.fmv == "freeplay") {
                d = true
            } else {
                if (this.abn && (this.abn == "b71d982ffcbe56eb8cd11fa05963bbee" || this.abn.toLowerCase() == "freeplay")) {
                    d = true
                } else {
                    if (neg.epl.value68 != null && this.uow.toLowerCase() === neg.epl.value68.toLowerCase()) {
                        d = true
                    }
                }
            }
        }
        if (d === true) {
            neg.epl.value21.e = false;
            if (neg.epl.value76) {
                neg.epl.value76.f = false
            }
        }
        return d
    };
    this.pfo = function () {
        return (neg.epl.value65 > 0)
    };
    this.zef = function () {
        return (((neg.tlv.dez === neg.os.gjw && neg.tlv.omh() === true) || neg.tlv.dez === neg.os.fis) && this.ict === false)
    };
    this.kgr = function () {
        return false
    };
    this.znd = function () {
        if (neg.tlo.pfo() && neg.tlo.kgr()) {
            clearTimeout(neg.tlo.cmb);
            neg.tlo.cmb = setTimeout(neg.tlo.rah, neg.epl.value65)
        }
    };
    this.bxn = function () {
        if (neg.tlo.pfo() && neg.tlo.cmb >= 0) {
            if (neg.tlo.kgr()) {
                clearTimeout(neg.tlo.cmb);
                neg.tlo.cmb = setTimeout(neg.tlo.rah, neg.epl.value65)
            } else {
                clearTimeout(neg.tlo.cmb);
                neg.tlo.cmb = -1
            }
        }
    };
    this.gap = function () {
        if (neg.tlo.pfo()) {
            clearTimeout(neg.tlo.cmb);
            neg.tlo.cmb = -1
        }
    };
    this.wsv = function () {
        return false
    };
    this.dhz = function () {
        return false
    };
    this.okl = function () {
        if (neg.tlo.wsv() && neg.tlo.dhz() && neg.tlo.osn < 0) {
            clearTimeout(neg.tlo.osn);
            neg.tlo.osn = setTimeout(neg.tlo.ctp, neg.tlo.ick)
        }
    };
    this.onx = function () {
        if (neg.tlo.wsv() && neg.tlo.osn >= 0) {
            if (neg.tlo.dhz()) {
                clearTimeout(neg.tlo.osn);
                neg.tlo.osn = setTimeout(neg.tlo.ctp, neg.tlo.ick)
            } else {
                clearTimeout(neg.tlo.osn);
                neg.tlo.osn = -1
            }
        }
    };
    this.osw = function () {
        if (neg.tlo.wsv()) {
            clearTimeout(neg.tlo.osn);
            neg.tlo.osn = -1
        }
    };
    this.ctp = function () {};
    this.jnv = function () {};
    this.qlk = function (f) {
        var e = Number(f.replace(/_*/g, "")),
            d = Number(this.qll.replace(/_*/g, ""));
        if (e > d) {
            this.qll = f
        }
    };
    this.wnp = function (g) {
        var e = (g && !this.vuj),
            f = this.oxt.dgc("topb"),
            d = this.oxt.dgc("topi");
        if (d) {
            d.iwc(e)
        }
        if (f) {
            f.iwc(e);
            f.whl(e)
        }
    };
    this.zjy = function (g) {
        var e = (g && !this.vuj),
            f = this.oxt.dgc("topb"),
            d = this.oxt.dgc("topi");
        if (d) {
            d.iwc(e)
        }
        if (f) {
            f.iwc(e);
            f.kbh(e)
        }
    };
    this.cgg = function (g) {
        var e = (g && !this.vuj),
            f = this.oxt.dgc("topb"),
            d = this.oxt.dgc("topi");
        if (d) {
            d.iwc(e)
        }
        if (f) {
            f.iwc(e);
            f.fka(e)
        }
    };
    this.vxc = function () {
        var d = this.oxt.dgc("topb");
        if (d && !d.cxw()) {
            this.uhx.yiv("panel_in");
            this.uhx.onc("panel_in");
            d.jog()
        }
    };
    this.qeh = function (d) {
        var e = this.oxt.dgc("topb");
        if (e && e.cxw()) {
            this.uhx.yiv("panel_out");
            this.uhx.onc("panel_out");
            if (d) {
                e.acm = d
            }
            e.crq()
        }
    };
    this.jea = function (f) {
        if (this.eze > 0) {
            return (f * this.eze).toFixed(0).toString()
        } else {
            if (neg.epl.value21.e == false || this.vpo == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (neg.epl.value21.m != 1) {
                    e = f * neg.epl.value21.m;
                    var g = neg.epl.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = neg.epl.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.yra(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.wzp = function (f) {
        if (this.eze > 0) {
            var e = (f * this.eze).toFixed(0).toString();
            if (neg.epl.value21.e == true && neg.epl.value21.m == 1 && neg.epl.value21.s && this.vpo == false) {
                e = neg.epl.value21.s + " " + e
            }
            return e
        } else {
            if (neg.epl.value21.e == false || this.vpo == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (neg.epl.value21.m != 1) {
                    e = f * neg.epl.value21.m;
                    var g = neg.epl.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = neg.epl.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.yra(e, (d == 0) ? 0 : d + 1);
                if (neg.epl.value21.s) {
                    e = neg.epl.value21.s + " " + e
                }
                return e
            }
        }
    };
    this.yra = function (l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (neg.epl.value21.cs != null) {
                l = l.replace(/\./, neg.epl.value21.cs)
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
                    if (neg.epl.value21.ts != null) {
                        e += neg.epl.value21.ts
                    }
                }
            }
            if (neg.epl.value21.cs != null) {
                f = f.replace(/\./, neg.epl.value21.cs)
            }
            return e + f
        }
    };
    this.qdz = function (f) {
        if (this.eze > 0) {
            return (f * this.eze).toFixed(0).toString()
        } else {
            if (neg.epl.value76.f == false || this.vpo == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (neg.epl.value76.m != 1) {
                    e = f * neg.epl.value76.m;
                    var g = neg.epl.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = neg.epl.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.tjx(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.nve = function (f) {
        if (this.eze > 0) {
            var e = (f * this.eze).toFixed(0).toString();
            if (neg.epl.value76.f == true && neg.epl.value76.m == 1 && neg.epl.value76.s && this.vpo == false) {
                e = neg.epl.value76.s + " " + e
            }
            return e
        } else {
            if (neg.epl.value76.f == false || this.vpo == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (neg.epl.value76.m != 1) {
                    e = f * neg.epl.value76.m;
                    var g = neg.epl.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = neg.epl.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.tjx(e, (d == 0) ? 0 : d + 1);
                if (neg.epl.value76.s) {
                    e = neg.epl.value76.s + " " + e
                }
                return e
            }
        }
    };
    this.tjx = function (l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (neg.epl.value76.cs != null) {
                l = l.replace(/\./, neg.epl.value76.cs)
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
                    if (neg.epl.value76.ts != null) {
                        e += neg.epl.value76.ts
                    }
                }
            }
            if (neg.epl.value76.cs != null) {
                f = f.replace(/\./, neg.epl.value76.cs)
            }
            return e + f
        }
    };
    this.vbj = function (d) {
        if (d && sessionStorage.sessionValue1 !== neg.language.GE) {
            return d.toUpperCase()
        }
        return d
    };
    this.qqi = function () {
        for (var e = 0, d = this.nvf.jja.fyq.length; e < d; e++) {
            this.oxt.pbt(this.nvf.jja.fyq[e].yga, this.hpa(this.nvf.jja.fyq[e], this.don.opx.cij[this.nvf.jja.fyq[e].cij], this.don.opx.display, this.style.opx.mpg[this.nvf.jja.fyq[e].cij], null), ["jackpots"])
        }
        this.oxt.pbt("jwp", this.hpa(null, this.don.opx.nnc.cij, this.don.opx.nnc, this.style.opx.nnc, this.uhx.xzk("jackpot")));
        this.oxt.evt("jwp", "#wmg", [false]);
        if (this.tvw()) {
            this.oxt.pbt("mjwp", this.qaq(this.don.opx.zli.cij, this.don.opx.zli, this.style.opx.zli, this.uhx.xzk("mj_bg"), this.uhx.xzk("mj_font"), this.uhx.xzk("mj_label"), [this.uhx.xzk("mj_0"), this.uhx.xzk("mj_1"), this.uhx.xzk("mj_2"), this.uhx.xzk("mj_3"), this.uhx.xzk("mj_4"), this.uhx.xzk("mj_5")]));
            this.oxt.evt("mjwp", "#wmg", [false])
        }
    };
    this.iqg = function () {
        var e = this.oxt.ydk("jackpots"),
            f = this.oxt.dgc("jwp"),
            j = this.oxt.dgc("mjwp");
        for (var g = 0, d = e.length; g < d; g++) {
            e[g].pxx(this.don.opx.cij[this.nvf.jja.fyq[g].cij]);
            e[g].mwg(this.don.opx.display)
        }
        if (f) {
            f.pxx(this.don.opx.nnc.cij);
            f.mwg(this.don.opx.nnc)
        }
        if (j) {
            j.pxx(this.don.opx.zli.cij);
            j.mwg(this.don.opx.zli)
        }
    };
    this.hpa = function (f, k, j, g, d) {
        var e = new nvn();
        e.dcf(k, null, this.context2D);
        e.parent = this;
        e.hvf = d;
        e.gzv(g);
        e.mwg(j);
        if (f) {
            e.eum(f.ktp);
            e.ojq(f.value)
        }
        return e
    };
    this.qaq = function (k, j, g, l, m, f, e) {
        var d = new epk();
        d.dcf(k, null, this.context2D);
        d.parent = this;
        d.zxk = l;
        d.sxz = m;
        d.kgw = f;
        d.uxf = e;
        d.gzv(g);
        d.mwg(j);
        return d
    };
    this.yqh = function (f) {
        if (this.flg() === true) {
            for (var e = 0, d = f.length; e < d; e++) {
                this.oxt.evt(f[e].yga, "#ojq", [f[e].value])
            }
            this.qay()
        }
    };
    this.ocy = function (d) {
        if (this.flg() === true) {
            this.opx = {
                yga: d.yga,
                value: d.value,
                dgi: d.dgi
            }
        }
    };
    this.khj = function () {
        this.opx = null
    };
    this.rta = function () {
        return false
    };
    this.tvw = function () {
        return false
    };
    this.flg = function () {
        return (!this.ict && this.nvf.jja.fyq.length > 0 && this.rta())
    };
    this.mrc = function () {
        return (this.opx != null)
    };
    this.xso = function () {
        return (neg.epl.value86 === true && ((sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") || (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") || (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null")))
    };
    this.edf = function () {
        if (this.uqw() && this.xsa()) {
            this.zxd()
        }
    };
    this.xsa = function () {
        return false
    };
    this.uqw = function () {
        if (this.ict) {
            return false
        }
        return (this.nvf.jja.pca.length + this.nvf.jja.wkr.length > 0)
    };
    this.zxd = function () {
        var g = null,
            e = this.nvf.jja.pca.length,
            d = this.nvf.jja.wkr.length;
        if (d + e > 0) {
            for (var f = e - 1; f >= 0; f--) {
                g = this.nvf.jja.pca.splice(f, 1)[0];
                g.xjv = neg.ieh.ilr;
                this.fdv.push(g)
            }
            for (var f = d - 1; f >= 0; f--) {
                g = this.nvf.jja.wkr.splice(f, 1)[0];
                g.xjv = neg.ieh.ilr;
                this.fdv.push(g)
            }
            if (this.aka && !this.aka.cxw()) {
                this.rln()
            }
        }
    };
    this.rln = function () {
        var d = null;
        if (this.fdv.length > 0) {
            d = this.fdv.shift();
            this.kfs([d])
        }
    };
    this.qls = function () {
        if (neg.tlo.thh.length > 0) {
            neg.tlo.kfs(neg.tlo.thh)
        }
    };
    this.ixv = function () {
        this.fdv.length = 0
    };
    this.xjy = function () {
        this.thh.length = 0;
        if (this.sje) {
            this.sje.crq()
        }
    };
    this.cgs = function () {
        var f = null,
            d = this.nvf.jja.thh.length;
        if (d > 0) {
            for (var e = d - 1; e >= 0; e--) {
                f = this.nvf.jja.thh.splice(e, 1)[0];
                f.xjv = neg.ieh.ilr;
                this.thh.push(f)
            }
            if (this.sje) {
                this.sje.jog(this.thh[0].Title, this.thh[0].Text, this.thh.length)
            }
        }
    };
    this.awi = function () {
        var d = false;
        if (this.aka && this.aka.cxw()) {
            d = true
        }
        if (this.sje && this.sje.cxw()) {
            d = true
        }
        if (this.xso()) {
            d = true
        }
        if (this.vxi) {
            this.vxi.style.display = (d) ? "block" : "none"
        }
    };
    this.yqy = function () {
        this.wnp(false);
        this.pyn.whl(false);
        this.pyn.cqr.evt("info", "#dqs");
        this.kfs([{
            xjv: neg.ieh.bel
        }])
    };
    this.qix = function () {
        neg.tlo.vid = true
    };
    this.ntt = function () {
        this.qmz = new pzr().dcf(this, neg.epl.value6)
    };
    this.ufv = function () {
        if (this.qmz) {
            this.qmz.connect(this.mvb, this.vjg, this.fmv, this.abn, this.qll, true)
        }
    };
    this.bhv = function () {
        if (neg.tlo.qmz) {
            neg.tlo.qmz.connect(neg.tlo.mvb, neg.tlo.vjg, neg.tlo.fmv, neg.tlo.abn, neg.tlo.qll, false)
        }
    };
    this.ivr = function () {};
    this.jof = function () {};
    this.noj = function (d) {
        if (!this.kvu() && !this.ict) {
            clearTimeout(this.rbd);
            if (this.hgj()) {
                this.rbd = setTimeout(this.unb, d)
            } else {
                if (Number(sessionStorage.sessionValue17) > 0) {
                    this.rbd = setTimeout(this.qix, Number(sessionStorage.sessionValue17) * 60000)
                }
            }
        }
    };
    this.unb = function () {
        neg.tlo.uxt = true
    };
    this.hgj = function () {
        return neg.epl.value36 || neg.epl.value37
    }
}

function clb() {
    this.dcf = function () {
        this.lrk("btn", this.lfu);
        this.lrk("gamble_on", this.lfu);
        this.lrk("gamble_off", this.lfu);
        this.lrk("panel_in", this.lfu);
        this.lrk("panel_out", this.lfu);
        this.lrk("audioon", this.lfu);
        for (var a = 0; a < 12; a++) {
            this.lrk("step" + a, this.lfu)
        }
        this.lrk("maxstep", this.lfu);
        this.lrk("start", 0.2);
        this.lrk("gambleprop", this.prm);
        this.lrk("freespinstart", 0.5)
    }
}
clb.prototype = new byh;

function dmo() {
    this.zmp = {
        xfh: 84,
        acg: -1,
        value: "T",
        fmy: null
    };
    this.kfb = {
        xfh: 82,
        acg: -1,
        value: "R",
        fmy: null
    };
    this.ijo = {
        xfh: 80,
        acg: -1,
        value: "P",
        fmy: null
    };
    this.eqj = {
        xfh: 77,
        acg: -1,
        value: "M",
        fmy: null
    };
    this.start = {
        xfh: 32,
        acg: -1,
        value: "SPACE",
        fmy: null
    };
    this.vuj = {
        xfh: 16,
        acg: -1,
        value: "SHIFT",
        fmy: null
    };
    this.aie = {
        xfh: 38,
        acg: -1,
        value: "\u25B2",
        fmy: null
    };
    this.ieq = {
        xfh: 40,
        acg: -1,
        value: "\u25BC",
        fmy: null
    };
    this.xph = {
        xfh: 39,
        acg: -1,
        value: "\u25B6",
        fmy: null
    };
    this.wil = {
        xfh: 37,
        acg: -1,
        value: "\u25C0",
        fmy: null
    };
    this.ryz = {
        xfh: 71,
        acg: -1,
        value: "G",
        fmy: null
    };
    this.ohv = {
        xfh: 27,
        acg: -1,
        value: "ESC",
        fmy: null
    };
    this.language = {
        xfh: 76,
        acg: -1,
        value: "L",
        fmy: null
    };
    this.vzc = {
        xfh: 13,
        acg: -1,
        value: "ENTER",
        fmy: null
    };
    this.may = {
        xfh: 27,
        acg: -1,
        value: "ESC",
        fmy: null
    };
    this.bnj = {
        xfh: 39,
        acg: -1,
        value: "\u25B6",
        fmy: null
    };
    this.qeb = {
        xfh: 37,
        acg: -1,
        value: "\u25C0",
        fmy: null
    };
    this.yxz = {
        xfh: 27,
        acg: -1,
        value: "ESC",
        fmy: null
    };
    this.afn = {
        xfh: 32,
        acg: -1,
        value: "SPACE",
        fmy: null
    };
    this.lmk = {
        xfh: 8,
        acg: -1,
        value: "BACKSPACE",
        fmy: null
    };
    this.xre = {
        xfh: 82,
        acg: -1,
        value: "R",
        fmy: null
    };
    this.sld = {
        xfh: 66,
        acg: -1,
        value: "B",
        fmy: null
    };
    this.adg = {
        xfh: 72,
        acg: -1,
        value: "H",
        fmy: null
    };
    this.jmi = {
        xfh: 68,
        acg: -1,
        value: "D",
        fmy: null
    };
    this.psl = {
        xfh: 83,
        acg: -1,
        value: "S",
        fmy: null
    };
    this.cac = {
        xfh: 67,
        acg: -1,
        value: "C",
        fmy: null
    };
    this.nbf.push(this.zmp);
    this.nbf.push(this.ijo);
    this.nbf.push(this.start);
    this.nbf.push(this.vuj);
    this.nbf.push(this.aie);
    this.nbf.push(this.ieq);
    this.nbf.push(this.xph);
    this.nbf.push(this.wil);
    this.nbf.push(this.ryz);
    this.nbf.push(this.ohv);
    this.nbf.push(this.language)
}
dmo.prototype = new xml;

function muh() {
    this.fcn = new Image();
    this.nvp = 0;
    this.szt = 0;
    this.rcd = 0;
    this.dcf = function (c, a, b, d) {
        this.fcn = c;
        this.szt = b;
        this.nvp = a;
        this.rcd = d;
        return this
    }
}

function amk() {
    this.wrs = 0;
    this.hwx = 0;
    this.win = 0;
    this.qcz = "sans-serif";
    this.uyq = "bold";
    this.apc = null;
    this.ued = null;
    this.yqc = null;
    this.ufl = null;
    this.cef = 16;
    this.nax = 0;
    this.nlm = 0;
    this.fyp = 2;
    this.rsi = 3;
    this.gsi = 3;
    this.jeb = 3;
    this.bcp = 3;
    this.mwg = function (a) {
        try {
            this.cef = a.fontSize;
            this.nax = a.zwx;
            this.nlm = a.crc;
            this.fyp = a.mmg;
            this.rsi = a.ggn;
            this.gsi = a.opw;
            this.jeb = a.mus;
            this.bcp = a.fxp
        } catch (b) {
            console.error(b)
        }
    };
    this.gzv = function (a) {
        try {
            this.qcz = a.font;
            this.uyq = a.njm;
            this.apc = a.txr;
            this.ued = a.borderColor;
            this.yqc = a.bhj;
            this.ufl = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.elv = function (a, c, b, d) {
        this.wrs = a;
        this.hwx = c;
        this.win = b;
        if (d && d === true && this.context2D != null && this.cxw() === true) {
            this.parent.qay(this.x, this.y, this.width, this.height)
        }
    };
    this.mlc = function (a, b) {
        this.win = a;
        if (b && b === true && this.context2D != null && this.cxw() === true) {
            this.parent.qay(this.x, this.y, this.width, this.height)
        }
    };
    this.qay = function () {
        if (!this.cxw()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.yqc) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.ued);
            b.addColorStop(1, this.yqc);
            neg.tlv.aat(a, this.x, this.y, this.width, this.height, this.rsi, this.gsi, this.jeb, this.bcp, this.ufl, 1, b, this.fyp, 1)
        } else {
            neg.tlv.aat(a, this.x, this.y, this.width, this.height, this.rsi, this.gsi, this.jeb, this.bcp, this.ufl, 1, this.ued, this.fyp, 1)
        }
        neg.tlv.udc(a, neg.tlo.language.apz + ":", this.apc, this.x + this.fyp + this.nax, this.y + this.nlm, 2 * this.width / 3 - this.fyp, this.height / 2, this.qcz, this.cef, this.uyq, 0);
        neg.tlv.udc(a, neg.tlo.language.udy + ":", this.apc, this.x + this.fyp + this.nax, this.y + this.height / 2 + this.nlm, 2 * this.width / 3 - this.fyp, this.height / 2, this.qcz, this.cef, this.uyq, 0);
        neg.tlv.nrf(a, this.hwx + "/" + this.wrs, this.apc, this.x + this.fyp + 2 * this.width / 3, this.y + this.nlm, this.width / 3 - this.fyp - this.nax, this.height / 2, this.qcz, this.cef, this.uyq, 0);
        neg.tlv.nrf(a, this.win, this.apc, this.x + this.fyp + 2 * this.width / 3, this.y + this.height / 2 + this.nlm, this.width / 3 - this.fyp - this.nax, this.height / 2, this.qcz, this.cef, this.uyq, 0);
        a.restore();
        if (this.mff && this.yzc) {
            this.mff.drawImage(this.yzc, this.x, this.y)
        }
    }
}
amk.prototype = new rom;

function fvf() {
    var a = this;
    this.mgx = false;
    this.cqr = null;
    this.pjs = false;
    this.izq = -1;
    this.lma = 0;
    this.qyr = null;
    this.qhm = 800;
    this.fyb = 0;
    this.ufl = null;
    this.mgu = null;
    this.hpn = null;
    this.tdf = 0;
    this.gfu = null;
    this.xab = null;
    this.syb = null;
    this.wfg = null;
    this.rfl = 0;
    this.hlg = 0;
    this.cqg = new flw();
    this.bpt = new flw();
    this.eij = 30;
    this.dcf = function (b, d, c) {
        fvf.prototype.dcf.call(this, b, d, c);
        this.yal()
    };
    this.dxu = function (c, b) {
        try {
            this.eij = c.oxl;
            this.cqg = c.ftu;
            this.bpt = c.wuf;
            this.pfm(c);
            this.opq(c);
            this.eqx(c);
            this.gne(c);
            this.qja(c);
            this.gzv(b, false)
        } catch (d) {
            console.error(d)
        }
    };
    this.mwg = function (g, r) {
        try {
            var d = {},
                c = this.cqr.dgc("info"),
                k = this.cqr.dgc("win"),
                s = this.cqr.dgc("creditd"),
                o = this.cqr.dgc("betd"),
                p = this.cqr.dgc("betpopup"),
                n = this.cqr.dgc("idd"),
                q = this.cqr.dgc("timed"),
                b = this.cqr.dgc("freeround"),
                m = this.cqr.ydk("buttons");
            if (this.parent.rok() || (this.parent.ict && this.parent.lre)) {
                if ((this.parent.qmr() == null || this.parent.qmr().o == false) && this.parent.style.tlo.puz == true) {
                    d = g.fkm
                } else {
                    d = g.rvw
                }
            } else {
                if (r) {
                    if (this.parent.qmr() != null) {
                        d = g.agp
                    } else {
                        d = g.etk
                    }
                } else {
                    if (this.parent.qmr() != null) {
                        if (!this.parent.ipc()) {
                            d = g.stv
                        } else {
                            d = g.zag
                        }
                    } else {
                        if (neg.epl.value57 === neg.ui.omt || this.obs()) {
                            if (!this.parent.ipc()) {
                                d = g.lxu
                            } else {
                                d = g.gkb
                            }
                        } else {
                            if (neg.epl.value57 === neg.ui.xnf) {
                                if (!this.parent.ipc()) {
                                    d = g.doo
                                } else {
                                    d = g.nnv
                                }
                            } else {
                                if (neg.epl.value57 === neg.ui.iab) {
                                    if (!this.parent.ipc()) {
                                        d = g.keh
                                    } else {
                                        d = g.yjk
                                    }
                                }
                            }
                        }
                    }
                }
            }
            this.eij = g.oxl;
            this.cqg = g.ftu;
            this.bpt = g.wuf;
            if (s) {
                s.mwg(g.display);
                s.pxx(g.weq)
            }
            if (o) {
                o.mwg(g.display);
                o.pxx(g.uwd)
            }
            if (p) {
                p.mwg(g.ymz);
                p.pxx(g.ptk)
            }
            if (n) {
                n.mwg(g.xos);
                n.pxx(g.bhz)
            }
            if (q) {
                q.mwg(g.xos);
                q.pxx(g.hzo)
            }
            if (c) {
                c.mwg(g.fxo);
                c.pxx(g.fxo.cij)
            }
            if (k) {
                k.mwg(g.win);
                k.pxx(g.win.cij)
            }
            if (b) {
                b.mwg(g.cdy);
                b.pxx(g.cdy.cij)
            }
            for (var f = 0, j = m.length; f < j; f++) {
                if (m[f] instanceof skk) {
                    m[f].mwg(g.nwk)
                }
            }
            if (this.parent.qmr() != null) {
                if (this.parent.rok() === true) {
                    if (this.parent.qmr().o === true || this.parent.style.tlo.puz == false) {
                        this.cqr.evt("start", "#mwg", [g.cvf])
                    } else {
                        this.cqr.evt("start", "#mwg", [g.uul])
                    }
                } else {
                    this.cqr.evt("start", "#mwg", [g.uul]);
                    this.cqr.evt("astart", "#mwg", [g.cvf])
                }
            } else {
                this.cqr.evt("start", "#mwg", [g.uul]);
                if (this.parent.rok() === true) {} else {
                    if (neg.epl.value57 === neg.ui.omt || this.obs()) {
                        this.cqr.evt("astart", "#mwg", [g.uul])
                    }
                }
            }
            if (r) {
                this.cqr.evt("start", "#pxx", [d.bao]);
                this.cqr.evt("astart", "#pxx", [d.ekt]);
                this.cqr.evt("setting", "#pxx", [d.piq])
            } else {
                this.cqr.evt("start", "#pxx", [d.bao]);
                this.cqr.evt("astart", "#pxx", [d.ekt]);
                this.cqr.evt("bet", "#pxx", [d.nki]);
                this.cqr.evt("gamble", "#pxx", [d.tty]);
                this.cqr.evt("exit", "#pxx", [d.iyz]);
                this.cqr.evt("help", "#pxx", [d.iyz]);
                this.cqr.evt("lang", "#pxx", [d.gvu]);
                this.cqr.evt("line", "#pxx", [d.ign]);
                this.cqr.evt("setting", "#pxx", [d.piq])
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.gzv = function (b, r) {
        try {
            var d = this.cqr.dgc("info"),
                l = this.cqr.dgc("win"),
                p = this.cqr.dgc("betpopup"),
                c = this.cqr.dgc("freeround"),
                j = this.cqr.ydk("displays"),
                o = this.cqr.dgc("idd"),
                q = this.cqr.dgc("timed"),
                n = this.cqr.ydk("buttons"),
                g = (r === true) ? b.oko : b.ivm;
            this.ufl = g.backgroundColor;
            this.mgu = g.tkk;
            this.hpn = g.aam;
            this.tdf = g.upw;
            this.xab = g.kxq;
            this.syb = g.nfa;
            if (d) {
                d.gzv(g.fxo)
            }
            if (l) {
                l.gzv(g.win)
            }
            if (c) {
                c.gzv(b.cdy)
            }
            for (var f = 0, k = n.length; f < k; f++) {
                n[f].gzv((this.parent.don.xrl === false) ? g.noi : (this.parent.hvx === neg.don.pud) ? g.kib : g.cvs)
            }
            for (var f = 0, k = j.length; f < k; f++) {
                j[f].gzv(b.display)
            }
            if (p) {
                p.gzv(b.ymz)
            }
            if (o) {
                o.gzv(b.xos)
            }
            if (q) {
                q.gzv(b.xos)
            }
            if (this.parent.rok() === true) {
                this.cqr.evt("bet", "#gzv", [b.gqt])
            }
        } catch (m) {
            console.error(m)
        }
    };
    this.jgs = function (t, s, u) {
        var r = this.cqr.ydk("buttons"),
            g = this.cqr.dgc("line"),
            k = this.cqr.dgc("bet"),
            c = this.cqr.dgc("start"),
            p = this.cqr.dgc("betd"),
            f = this.cqr.dgc("creditd"),
            b = this.parent.oxt.dgc("betsel"),
            e = this.parent.oxt.dgc("linesel"),
            o = t - this.x,
            m = s - this.y;
        for (var n = 0, q = r.length; n < q; n++) {
            var d = r[n];
            if (o >= d.x && o <= d.x + d.width && m >= d.y && m <= d.y + d.height && d.cxw() == true) {
                if (d.wtk() && !d.noy()) {
                    if (!this.parent.rok() && (d === k || d === g)) {
                        d.bso(true, true, false);
                        for (var l = 0; l < q; l++) {
                            r[l].ixm(true, false)
                        }
                        d.jht();
                        this.qyr = function () {
                            if (d.jht() === true) {
                                clearInterval(a.lma);
                                d.bso(false, true);
                                for (var v = 0; v < q; v++) {
                                    r[v].ixm(false)
                                }
                            }
                        };
                        this.lma = setInterval(this.qyr, d.zib)
                    } else {
                        if (d === c && c.jht === this.zuf) {
                            d.bso(true, true, false)
                        } else {
                            d.bso(true, true)
                        }
                        d.jht();
                        for (var l = 0; l < q; l++) {
                            r[l].ixm(true)
                        }
                    }
                    return true
                }
            }
        }
        if (k && k.wtk() && !k.noy() && k.cxw()) {
            if (p && o >= p.x && o <= p.x + p.width && m >= p.y && m <= p.y + p.height) {
                if (!u) {
                    if ((b && b.wtk()) && ((e && e.wtk()) || !e)) {
                        this.parent.kpe()
                    }
                    return true
                }
            } else {
                if (f && o >= f.x && o <= f.x + f.width && m >= f.y && m <= f.y + f.height) {
                    if (!u) {
                        this.parent.sew()
                    }
                    return true
                }
            }
        }
        return false
    };
    this.mqw = function () {
        var f = this.cqr.ydk("buttons"),
            k = this.cqr.dgc("bet"),
            l = this.cqr.dgc("line"),
            g = this.cqr.dgc("start");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (d.ehn() === true) {
                d.bso(false, true);
                if (neg.epl.value82 && d == g) {
                    for (var c = 0; c < b; c++) {
                        f[c].ixm(false)
                    }
                }
                if (d === k || d === l) {
                    clearInterval(this.lma);
                    for (var c = 0; c < b; c++) {
                        f[c].ixm(false)
                    }
                } else {
                    if (d === g && g.jht === this.zuf) {
                        clearTimeout(this.fyb);
                        if (this.parent.vuj === false) {
                            this.cqr.evt("start", "#xvs")
                        }
                    }
                }
                return true
            }
        }
        return false
    };
    this.gor = function (c) {
        var m = this.cqr.ydk("buttons"),
            f = this.cqr.dgc("bet"),
            e = this.cqr.dgc("line"),
            b = this.cqr.dgc("start");
        for (var k = 0, l = m.length; k < l; k++) {
            var d = m[k];
            if (c == d.opa) {
                if (d.wtk() && !d.noy() && d.cxw()) {
                    if (neg.epl.value82 && d == b) {
                        d.bso(true, true, false);
                        for (var g = 0; g < l; g++) {
                            m[g].ixm(true, false)
                        }
                    } else {
                        d.bso(true, true);
                        d.jht();
                        for (var g = 0; g < l; g++) {
                            m[g].ixm(true)
                        }
                    }
                }
                return true
            }
        }
        if (c == this.parent.lwq.ieq.xfh) {
            if (f && f.wtk() && !f.noy() && f.cxw()) {
                this.parent.jst();
                for (var g = 0, l = m.length; g < l; g++) {
                    m[g].ixm(true)
                }
            }
            return true
        } else {
            if (c == this.parent.lwq.wil.xfh) {
                if (e && e.wtk() && !e.noy() && e.cxw()) {
                    this.parent.abr();
                    for (var g = 0, l = m.length; g < l; g++) {
                        m[g].ixm(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.mnj = function (g) {
        var f = this.cqr.ydk("buttons"),
            k = this.cqr.dgc("start");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (d.ehn() == true && g == d.opa) {
                if (neg.epl.value82 && d == k) {
                    d.jht();
                    for (var c = 0; c < b; c++) {
                        f[c].ixm(false)
                    }
                }
                d.bso(false, true);
                return true
            }
        }
        return false
    };
    this.hik = function (n, m, o) {
        var l = this.cqr.ydk("buttons"),
            e = this.cqr.dgc("bet"),
            d = this.cqr.dgc("line"),
            b = this.cqr.dgc("start"),
            p = this.cqr.dgc("astart");
        if (n != null && m != null) {
            var j = n - this.x;
            var f = m - this.y;
            for (var g = 0, k = l.length; g < k; g++) {
                var c = l[g];
                if (j >= c.x && j <= c.x + c.width && f >= c.y && f <= c.y + c.height && c.cxw() && c.wtk() && !c.noy()) {
                    return c.jht
                }
            }
        } else {
            if (o != null) {
                for (var g = 0, k = l.length; g < k; g++) {
                    var c = l[g];
                    if (o == c.opa && c.cxw() && c.wtk() && !c.noy()) {
                        if (c == b || c == p) {
                            return null
                        }
                        return c.jht
                    }
                }
                if (o == this.parent.lwq.ieq.xfh && e && e.cxw() && e.wtk() && !e.noy()) {
                    return this.parent.jst
                } else {
                    if (o == this.parent.lwq.wil.xfh && d && d.cxw() && d.wtk() && !d.noy()) {
                        return this.parent.abr
                    }
                }
            }
        }
        return null
    };
    this.yal = function () {
        this.cqr = new fxb();
        this.cqr.dcf();
        this.cqr.erq("displays");
        this.cqr.erq("buttons");
        this.cqr.erq("allbuttons");
        this.cqr.erq("infos");
        this.cqr.erq("start");
        this.cqr.erq("auto");
        this.cqr.erq("collect");
        this.cqr.erq("freespin");
        this.cqr.erq("game");
        this.cqr.erq("settings")
    };
    this.qja = function (b) {
        var c = this.kxd(b.fxo.cij);
        c.mwg(b.fxo);
        this.cqr.pbt("info", c, ["infos"])
    };
    this.gne = function (b) {
        var c = this.kxd(b.win.cij);
        c.font = this.parent.sds;
        c.hvf = this.parent.uhx.xzk("s_symb");
        c.zlv = this.parent.uhx.xzk("s_symb").height / this.parent.lot.length;
        c.mwg(b.win);
        this.cqr.pbt("win", c, ["infos"])
    };
    this.eqx = function (b) {
        var c = new amk();
        c.dcf(b.cdy.cij, this.context2D, null);
        c.parent = this;
        c.mwg(b.cdy);
        c.wmg(false);
        this.cqr.pbt("freeround", c)
    };
    this.opq = function (c) {
        var b = {};
        if (this.parent.rok() || (this.parent.ict && this.parent.lre)) {
            if ((this.parent.qmr() == null || this.parent.qmr().o == false) && this.parent.style.tlo.puz == true) {
                b = c.fkm
            } else {
                b = c.rvw
            }
        } else {
            if (this.parent.qmr() != null) {
                if (!this.parent.ipc()) {
                    b = c.stv
                } else {
                    b = c.zag
                }
            } else {
                if (neg.epl.value57 === neg.ui.omt || this.obs()) {
                    if (!this.parent.ipc()) {
                        b = c.lxu
                    } else {
                        b = c.gkb
                    }
                } else {
                    if (neg.epl.value57 === neg.ui.xnf) {
                        if (!this.parent.ipc()) {
                            b = c.doo
                        } else {
                            b = c.nnv
                        }
                    } else {
                        if (neg.epl.value57 === neg.ui.iab) {
                            if (!this.parent.ipc()) {
                                b = c.keh
                            } else {
                                b = c.yjk
                            }
                        }
                    }
                }
            }
        }
        if (this.parent.qmr() != null) {
            if (this.parent.rok() === true) {
                if (this.parent.qmr().o == true || this.parent.style.tlo.puz == false) {
                    this.cqr.pbt("start", this.jyk(b.bao, (this.parent.don.hkx === false) ? this.parent.language.start : null, (this.parent.don.hkx === false) ? "---" : "A", (this.parent.don.hkx === false) ? this.parent.uhx.xzk("btn") : this.parent.uhx.xzk("btn_sp"), null, this.zuf, (!this.parent.ict) ? this.parent.lwq.start : null, c.cvf), ["buttons", "allbuttons", "start", "collect", "freespin", "game"])
                } else {
                    this.cqr.pbt("start", this.iku(b.bao, (this.parent.don.hkx === false) ? this.parent.language.start : null, (this.parent.don.hkx === false) ? this.parent.uhx.xzk("btn") : this.parent.uhx.xzk("btn_sp"), (this.parent.don.hkx === false) ? null : this.parent.uhx.xzk("btn_sph"), this.parent.qzm, null, c.uul), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                    this.cqr.pbt("astart", this.jyk(b.ekt, null, (this.parent.don.hkx === false) ? "---" : "A", this.parent.uhx.xzk("btn_astl"), null, this.parent.mlx, null, c.nwk), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
                }
            } else {
                this.cqr.pbt("start", this.iku(b.bao, (this.parent.don.hkx === false) ? this.parent.language.start : null, (this.parent.don.hkx === false) ? this.parent.uhx.xzk("btn") : this.parent.uhx.xzk("btn_sp"), null, this.parent.qzm, (!this.parent.ict) ? this.parent.lwq.start : null, c.uul), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                this.cqr.pbt("astart", this.jyk(b.ekt, this.parent.language.vgt, (this.parent.don.hkx === false) ? "---" : "A", this.parent.uhx.xzk("btn"), null, this.parent.mlx, (!this.parent.ict) ? this.parent.lwq.vuj : null, c.cvf), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
            }
        } else {
            if (this.parent.rok() === true) {
                if (this.parent.style.tlo.puz) {
                    this.cqr.pbt("start", this.iku(b.bao, (this.parent.don.hkx === false) ? this.parent.language.start : null, (this.parent.don.hkx === false) ? this.parent.uhx.xzk("btn") : this.parent.uhx.xzk("btn_sp"), (this.parent.don.hkx === false) ? null : this.parent.uhx.xzk("btn_sph"), this.parent.qzm, null, c.uul), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                    this.cqr.pbt("astart", this.iku(b.ekt, null, this.parent.uhx.xzk("btn_ast"), null, this.parent.mlx, null, c.nwk), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
                } else {
                    this.cqr.pbt("start", this.iku(b.bao, (this.parent.don.hkx === false) ? this.parent.language.start : null, (this.parent.don.hkx === false) ? this.parent.uhx.xzk("btn") : this.parent.uhx.xzk("btn_asp"), (this.parent.don.hkx === false) ? null : this.parent.uhx.xzk("btn_asph"), this.zuf, null, c.uul), ["buttons", "allbuttons", "start", "collect", "freespin", "game"])
                }
            } else {
                this.cqr.pbt("start", this.iku(b.bao, (this.parent.don.hkx === false) ? this.parent.language.start : null, (this.parent.don.hkx === false) ? this.parent.uhx.xzk("btn") : this.parent.uhx.xzk("btn_asp"), (this.parent.don.hkx === false) ? null : this.parent.uhx.xzk("btn_asph"), this.parent.qzm, (!this.parent.ict) ? this.parent.lwq.start : null, c.uul), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                this.cqr.pbt("astart", this.iku(b.ekt, this.parent.language.vuj, (neg.epl.value57 === neg.ui.omt || this.obs()) ? this.parent.uhx.xzk("btn") : this.parent.uhx.xzk("btn_s"), null, this.parent.mlx, (!this.parent.ict) ? this.parent.lwq.vuj : null, c.nwk), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
            }
        }
        if (this.parent.rok() === true) {
            this.cqr.pbt("bet", this.rjx(b.nki, "+", null, this.parent.scf, (!this.parent.ict) ? this.parent.lwq.aie : null, c.kas), ["buttons", "allbuttons"])
        } else {
            this.cqr.pbt("bet", this.iku(b.nki, this.parent.language.ver, this.parent.uhx.xzk("btn_s"), null, this.parent.scf, (!this.parent.ict) ? this.parent.lwq.aie : null, c.nwk), ["buttons", "allbuttons"])
        }
        this.cqr.dgc("bet").zib = 300;
        this.cqr.pbt("gamble", this.iku(b.tty, this.parent.language.ryz, this.parent.uhx.xzk("btn_s"), null, this.parent.jel, (!this.parent.ict) ? this.parent.lwq.ryz : null, c.nwk), ["buttons", "allbuttons", "game", "auto", "collect"]);
        if (this.parent.qmr() != null) {
            if (sessionStorage.sessionValue5 != null) {
                this.cqr.pbt("exit", this.iku(b.iyz, (this.parent.don.hkx === true) ? null : (neg.epl.value50.g === true) ? this.parent.language.ymw : this.parent.language.rvl, (this.parent.don.hkx === false) ? this.parent.uhx.xzk("btn_s") : this.parent.uhx.xzk("btn_e"), null, this.parent.rah, (!this.parent.ict) ? this.parent.lwq.ohv : null, c.nwk), ["buttons", "allbuttons", "collect"])
            } else {
                if (this.parent.rok() === false) {
                    this.cqr.pbt("help", this.iku(b.iyz, (this.parent.don.hkx === true) ? null : this.parent.language.tbm, this.parent.uhx.xzk("btn_s"), null, this.parent.rbw, (!this.parent.ict) ? this.parent.lwq.ijo : null, c.nwk), ["buttons", "allbuttons"])
                }
            }
        } else {
            if (neg.epl.value57 !== neg.ui.iab) {
                if (sessionStorage.sessionValue5 != null) {
                    this.cqr.pbt("exit", this.iku(b.iyz, (this.parent.don.hkx === true) ? null : (neg.epl.value50.g === true) ? this.parent.language.ymw : this.parent.language.rvl, (this.parent.don.hkx === false) ? this.parent.uhx.xzk("btn_s") : this.parent.uhx.xzk("btn_e"), null, this.parent.rah, (!this.parent.ict) ? this.parent.lwq.ohv : null, c.nwk), ["buttons", "allbuttons", "collect"])
                } else {
                    if (this.parent.rok() === false) {
                        this.cqr.pbt("help", this.iku(b.iyz, (this.parent.don.hkx === true) ? null : this.parent.language.tbm, this.parent.uhx.xzk("btn_s"), null, this.parent.rbw, (!this.parent.ict) ? this.parent.lwq.ijo : null, c.nwk), ["buttons", "allbuttons"])
                    }
                }
            }
            if (neg.epl.value57 !== neg.ui.omt && !this.obs() && this.parent.qmr() == null) {
                this.cqr.pbt("lang", this.qna(b.gvu, this.parent.iua(sessionStorage.sessionValue1), this.parent.cwr, (!this.parent.ict) ? this.parent.lwq.language : null), ["buttons", "allbuttons"])
            }
        }
        if (this.parent.ipc()) {
            this.cqr.pbt("line", this.iku(b.ign, this.parent.language.gzg, this.parent.uhx.xzk("btn_s"), null, this.parent.flr, (!this.parent.ict) ? this.parent.lwq.xph : null, c.nwk), ["buttons", "allbuttons"]);
            this.cqr.dgc("line").zib = 300
        }
        this.cqr.pbt("setting", this.iku(b.piq, null, this.parent.uhx.xzk("btn_m"), null, this.parent.vni, null, c.nwk), ["buttons", "settings"])
    };
    this.pfm = function (c) {
        var b = null;
        if (!(this.parent.ict && this.parent.lre) && this.parent.style.tlo.ucf === false) {
            b = this.parent.uhx.xzk("display_effect")
        }
        if (this.parent.rok() === true) {
            this.cqr.pbt("betpopup", this.hdx(c.ptk, "", "", null, c.ymz), ["displays"]);
            this.cqr.evt("betpopup", "#wmg", [false])
        }
        this.cqr.pbt("creditd", this.hdx(c.weq, (this.parent.kvu()) ? this.parent.language.aio : this.parent.language.dgi, this.parent.wzp(this.parent.dgi), b, c.display), ["displays"]);
        this.cqr.pbt("betd", this.hdx(c.uwd, this.parent.language.ver, this.parent.wzp(this.parent.totalBet), b, c.display), ["displays"]);
        this.cqr.pbt("idd", this.hdx(c.bhz, null, (this.parent.kvu() === true) ? this.parent.language.aio : " " + ((this.parent.fgk > 0) ? this.parent.fgk : ""), null, c.xos), ["displays"]);
        if (sessionStorage.sessionValue15 == "true" || neg.epl.value49) {
            this.cqr.pbt("timed", this.hdx(c.hzo, null, "", null, c.xos), ["displays"])
        }
    };
    this.jki = function () {
        if (this.izq == 1) {
            this.whl(this.pjs)
        } else {
            if (this.izq == 2) {
                this.xzt(this.pjs)
            } else {
                if (this.izq == 3) {
                    this.syu(this.pjs)
                } else {
                    if (this.izq == 4) {
                        this.nun(this.pjs)
                    } else {
                        if (this.izq == 5) {
                            this.ohy(this.pjs)
                        } else {
                            if (this.izq == 6) {
                                this.fka(this.pjs)
                            } else {
                                if (this.izq == 7) {
                                    this.ujm(this.pjs)
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.whl = function (d) {
        var c = this.cqr.ydk("allbuttons"),
            e = 0,
            b = 0;
        this.pjs = d;
        this.izq = 1;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].iwc(d)
        }
    };
    this.xzt = function (d) {
        var c = this.cqr.ydk("allbuttons"),
            f = this.cqr.ydk("start"),
            e = 0,
            b = 0;
        this.pjs = d;
        this.izq = 2;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].iwc(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].iwc(d)
        }
    };
    this.syu = function (d) {
        var c = this.cqr.ydk("allbuttons"),
            f = this.cqr.ydk("game"),
            e = 0,
            b = 0;
        this.pjs = d;
        this.izq = 3;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].iwc(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].iwc(d)
        }
    };
    this.nun = function (d) {
        var c = this.cqr.ydk("allbuttons"),
            f = (this.mgx === true) ? this.cqr.ydk("collect") : this.cqr.ydk("game"),
            e = 0,
            b = 0;
        this.pjs = d;
        this.izq = 4;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].iwc(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].iwc(d)
        }
    };
    this.ujm = function (d) {
        var b = this.cqr.ydk("allbuttons"),
            c = this.cqr.ydk("auto");
        i = 0, otw = 0;
        this.pjs = d;
        this.izq = 7;
        for (i = 0, otw = b.length; i < otw; i++) {
            b[i].iwc(false)
        }
        for (i = 0, otw = c.length; i < otw; i++) {
            c[i].iwc(d)
        }
    };
    this.ohy = function (c) {
        var b = this.cqr.ydk("allbuttons"),
            d = this.cqr.ydk("freespin");
        i = 0, otw = 0;
        this.pjs = c;
        this.izq = 5;
        for (i = 0, otw = b.length; i < otw; i++) {
            b[i].iwc(false)
        }
        for (i = 0, otw = d.length; i < otw; i++) {
            d[i].iwc(c)
        }
    };
    this.fka = function (e) {
        var c = this.cqr.ydk("allbuttons"),
            d = this.cqr.ydk("settings"),
            f = 0,
            b = 0;
        this.pjs = e;
        this.izq = 6;
        for (f = 0, b = c.length; f < b; f++) {
            c[f].iwc(false)
        }
        for (f = 0, b = d.length; f < b; f++) {
            d[f].iwc(e)
        }
    };
    this.hdx = function (c, g, f, e, b) {
        var d = new dvm();
        d.dcf(c, this.context2D, null, g, f);
        d.parent = this;
        d.hvf = e;
        d.mwg(b);
        return d
    };
    this.iku = function (f, k, j, b, g, d, e) {
        var c = new skk();
        c.dcf(f, this.context2D, null, j, b, k);
        c.parent = this;
        c.jht = g;
        c.mwg(e);
        if (d) {
            c.opa = d.xfh
        }
        return c
    };
    this.jyk = function (f, k, g, b, l, c, j, e) {
        var d = new skk();
        d.dcf(f, this.context2D, null, b, l, k);
        d.parent = this;
        d.jht = c;
        d.value = g;
        d.mwg(e);
        if (j) {
            d.opa = j.xfh
        }
        return d
    };
    this.rjx = function (e, j, g, f, c, d) {
        var b = new rwv();
        b.dcf(e, this.context2D, null, g, j);
        b.parent = this;
        b.jht = f;
        b.mwg(d);
        if (c) {
            b.opa = c.xfh
        }
        return b
    };
    this.qna = function (d, f, e, c) {
        var b = new niv();
        b.dcf(d, this.context2D, null, f, null);
        b.parent = this;
        b.jht = e;
        if (c) {
            b.opa = c.xfh
        }
        return b
    };
    this.kxd = function (b) {
        var c = new oer();
        c.dcf(b, this.context2D);
        c.parent = this;
        return c
    };
    this.obs = function () {
        return (this.parent.igw > 0 && this.parent.boo < this.parent.igw)
    };
    this.ffd = function (c, b) {
        var d = this.cqr.dgc("info");
        if (d) {
            d.byr(b);
            d.fzo(c, b)
        }
    };
    this.stop = function () {
        clearInterval(this.lma)
    };
    this.wdu = function (b, c, d) {
        this.wfg = b;
        this.rfl = c;
        this.hlg = d
    };
    this.qay = function (m, j, n, f) {
        if (!this.cxw() || !this.parent.ydx()) {
            return
        }
        var c = (m != null && j != null && n != null && f != null),
            k = (c === true) ? new flw(m, j, n, f) : new flw(this.x, this.y, this.width, this.height),
            o = this.context2D,
            b = this.cqr.vcc();
        o.save();
        if (c) {
            if (n === 0 || f === 0) {
                return
            }
            o.beginPath();
            o.rect(m, j, n, f);
            o.closePath();
            o.clip()
        }
        o.clearRect(0, 0, this.width, this.height);
        if (this.wfg != null) {
            if (this.parent.hvx === neg.don.cgk) {
                o.drawImage(this.wfg, this.x + this.cqg.x + this.rfl, this.y + this.cqg.y + this.hlg, this.cqg.width, this.wfg.height - (this.y + this.cqg.y + this.hlg), this.cqg.x, this.cqg.y, this.cqg.width, this.cqg.height)
            } else {
                o.drawImage(this.wfg, this.x + this.cqg.x + this.rfl, this.y + this.cqg.y + this.hlg, this.cqg.width, this.cqg.height, this.cqg.x, this.cqg.y, this.cqg.width, this.cqg.height)
            }
            if (this.bpt && this.bpt.width > 0 && this.bpt.height > 0) {
                o.drawImage(this.wfg, this.x + this.bpt.x + this.rfl, this.y + this.bpt.y + this.hlg, this.bpt.width, this.bpt.height, this.bpt.x, this.bpt.y, this.bpt.width, this.bpt.height)
            }
        }
        if (this.bpt && this.bpt.width > 0 && this.bpt.height > 0 && this.parent.don.xrl === false) {
            var l = o.createLinearGradient(this.bpt.x, this.bpt.y, this.bpt.x + this.bpt.width, this.bpt.y),
                e = this.parent.uhx.xzk("btn_back");
            l.addColorStop(0.2, this.xab);
            l.addColorStop(1, this.syb);
            o.fillStyle = l;
            if (this.parent.hvx === neg.don.pud) {
                o.fillRect(this.bpt.x, this.bpt.y, this.bpt.width, this.bpt.height);
                if (e) {
                    o.drawImage(e, this.bpt.x, this.bpt.y, this.bpt.width, this.bpt.height)
                }
            } else {
                if (this.parent.hvx === neg.don.wso) {
                    o.save();
                    o.translate(this.bpt.width / 2, this.bpt.height / 2);
                    o.rotate(Math.PI);
                    o.translate(-this.bpt.width / 2, -this.bpt.height / 2);
                    o.fillRect(this.bpt.x, this.bpt.y, this.bpt.width, this.bpt.height);
                    if (e) {
                        o.drawImage(e, this.bpt.x, this.bpt.y, this.bpt.width, this.bpt.height)
                    }
                    o.restore()
                }
            }
        }
        for (var d = 0, g = b.length; d < g; d++) {
            b[d].qay()
        }
        if (this.parent.ebw === true && !(this.parent.rok() === true && this.parent.don.xrl === false)) {
            this.parent.yuo(o, k)
        }
        o.restore();
        if (this.mff && this.yzc) {
            if (c) {
                this.mff.drawImage(this.yzc, m, j, n, f, this.x + m, this.y + j, n, f)
            } else {
                this.mff.drawImage(this.yzc, this.x, this.y)
            }
        }
    };
    this.zuf = function () {
        if (a.parent.vuj === true) {
            a.eaa()
        } else {
            a.parent.qzm();
            if (a.parent.gku() === true) {
                a.cqr.evt("start", "#jxi", [a.qhm]);
                a.fyb = setTimeout(a.eaa, a.qhm)
            }
        }
    };
    this.eaa = function () {
        a.parent.mlx();
        if (a.parent.vuj === true) {
            a.cqr.evt("start", "#yvl")
        } else {
            a.cqr.evt("start", "#xvs")
        }
    }
}
fvf.prototype = new rom;

function yqo(e, b, a, c, d) {
    this.cij = {
        x: e.x || 0,
        y: e.y || 0
    };
    this.fcn = b;
    this.ule = 0;
    this.rcd = 21;
    this.bbd = a;
    this.zvz = c || 0;
    this.qbf = d || 0;
    this.wty = 100;
    this.ekl = 96;
    this.sps = function () {
        if (this.ule < this.rcd) {
            this.ule++
        }
        return (this.ule >= this.rcd)
    };
    this.qay = function () {
        a.drawImage(this.fcn, this.ule * this.wty, 0, this.wty, this.ekl, this.cij.x, this.cij.y, this.zvz, this.qbf)
    }
}

function edj() {
    this.qlo = false;
    this.jsl = false;
    this.ovp = false;
    this.woh = [];
    this.kns = [];
    this.ynx = [];
    this.spz = [];
    this.cig = [];
    this.ien = 89;
    this.frv = 400;
    this.nal = 3;
    this.font = "arial";
    this.njm = "bold";
    this.wlo = true;
    this.cpr = true;
    this.qxd = null;
    this.rgs = false;
    this.jjp = [];
    this.cov = 0;
    this.sww = false;
    this.ncg = false;
    this.mcg = 0;
    this.vsr = 0;
    this.cmh = false;
    this.qlg = true;
    this.sjq = false;
    this.opc = false;
    this.zdb = 0;
    this.ysr = 0;
    this.pef = [];
    this.knu = false;
    this.ugd = 0;
    this.hti = 0;
    this.dov = 0;
    this.joo = -1;
    this.gbo = 0;
    this.nic = 0;
    this.vmw = true;
    this.fum = null;
    this.rog = [];
    this.ijk = [];
    this.akr = null;
    this.xge = null;
    this.euz = 0;
    this.xpe = null;
    this.ibd = null;
    this.xne = null;
    this.vec = null;
    this.yte = 0.05;
    this.gdr = 4;
    this.ifb = 5;
    this.fyp = 1;
    this.oaa = 0;
    this.yph = 0;
    this.cef = 40;
    this.yso = 12;
    this.ffy = 5;
    this.okq = 0;
    this.rxl = 100;
    this.ghj = 96;
    this.wfg = null;
    this.rfl = 0;
    this.hlg = 0;
    this.tco = 0;
    this.tta = new flw();
    this.qwg = [];
    this.cng = 3;
    this.tft = 6;
    this.pto = 0;
    this.gwy = new flw(0, 0, 920, 160);
    this.ndj = [0, 515, 405];
    this.jfj = 40;
    this.xni = new flw(0, 165, 920, 160);
    this.njl = [0, 330, 420];
    this.clw = 40;
    this.yyw = new flw(0, 330, 920, 160);
    this.mhn = [0, 440, 415];
    this.xwb = 20;
    this.vuc = function () {};
    this.rsx = function () {};
    this.kjt = function () {};
    this.npf = function () {};
    this.amb = function () {};
    this.dfb = function () {};
    this.mwg = function (a) {
        try {
            this.gdr = a.lineWidth;
            this.ifb = a.hbv;
            this.fyp = a.mmg;
            this.oaa = a.dhn;
            this.yph = a.zlv;
            this.cef = a.fontSize;
            this.yso = a.shi;
            this.ffy = a.ccs;
            this.rxl = a.fyn;
            this.ghj = a.rqa
        } catch (b) {
            console.error(b)
        }
    };
    this.gzv = function (a) {
        try {
            this.ijk = a.kex;
            this.euz = a.wxi;
            this.xpe = a.yqs;
            this.ibd = a.itm;
            this.xne = a.ogd;
            this.vec = a.ewf;
            this.yte = a.vhi
        } catch (b) {
            console.error(b)
        }
    };
    this.jog = function () {
        this.ovp = false;
        this.wmg(true)
    };
    this.crq = function () {
        this.ovp = false;
        this.wmg(false, true)
    };
    this.qwh = function () {
        return this.rgs
    };
    this.evj = function (d, b) {
        if (d && b) {
            this.jjp = b;
            this.fum = [];
            for (var c = 0, a = d.length; c < a; c++) {
                this.fum[c] = d[c]
            }
            if (this.cpr) {
                this.parent.uhx.yiv("winline");
                this.parent.uhx.onc("winline")
            }
        } else {
            this.fum = null
        }
        this.rgs = false;
        this.sjq = false;
        this.opc = false;
        this.ovp = true;
        this.wmg(true, true)
    };
    this.start = function () {
        this.rgs = true;
        this.sjq = true;
        this.opc = false;
        if (!this.sww) {
            this.ugd = 0
        } else {
            if (this.ugd >= this.dov) {
                this.ugd = 0
            }
        }
        this.qlg = true;
        this.parent.vnt = false;
        this.ncg = (this.parent.ake >= (this.parent.aqz - 1));
        if (this.sww && this.cpr) {
            if (!this.parent.gey && this.parent.avq) {
                this.parent.uhx.yiv("winline");
                this.parent.uhx.onc("winline")
            }
        }
        this.vuc()
    };
    this.stop = function () {
        this.rgs = false;
        this.sjq = false;
        this.hyz();
        clearInterval(this.mcg);
        clearTimeout(this.vsr);
        clearTimeout(this.parent.txy)
    };
    this.sbf = function (d, c, a, f, j, e, b, g) {
        if (this.ovp) {
            this.ovp = false;
            this.parent.qay()
        }
        this.joo = f;
        this.cov = d;
        this.jjp = c;
        this.nic = j;
        this.gbo = e;
        this.vmw = a;
        this.sww = g;
        if (b) {
            this.jkb()
        } else {
            this.hzy()
        }
    };
    this.jkb = function () {
        this.ues();
        this.start()
    };
    this.hzy = function () {
        this.rgs = true;
        this.sjq = true;
        this.qlg = false;
        this.opc = this.wlo;
        this.hyz();
        if (!this.parent.gey && this.cpr) {
            this.parent.uhx.yiv("winline");
            this.parent.uhx.onc("winline")
        }
        this.qay();
        this.kjt()
    };
    this.hlx = function () {
        if (this.knu) {
            this.zdb++;
            if (this.zdb == 6 || this.zdb == 10 || this.zdb == 15 || (this.parent.fdu == 2 && (this.zdb == 48 || this.zdb == 55 || this.zdb == 64))) {
                this.tlf()
            }
            for (var a = this.pef.length - 1; a >= 0; a--) {
                if (this.pef[a].sps()) {
                    this.pef.shift()
                }
            }
        }
        if (this.wlo) {
            if (this.sww) {
                this.opc = true
            } else {
                if ((this.ugd % 3) == 0) {
                    this.opc = !this.opc
                }
            }
        }
        if (((!this.sww || this.ncg) && this.ugd < this.dov)) {
            this.parent.qay();
            this.ugd++;
            if (this.sww) {
                this.hti++
            }
        } else {
            if (this.sww && !this.ncg && this.hti < this.nal) {
                this.parent.qay();
                this.hti++;
                this.ugd = (this.ugd < this.dov) ? this.ugd + 1 : 0
            } else {
                this.hti = 0;
                clearInterval(this.mcg);
                this.nwr()
            }
        }
    };
    this.nwr = function () {
        this.rgs = false;
        this.sjq = (this.qlo && this.qlg);
        if (this.sjq == true && this.ncg == true && this.parent.gey == false && this.parent.vuj == true) {
            this.sjq = false
        }
        if (!this.sww || this.ncg) {
            if (!(this.jsl && this.qlo) && !this.knu) {
                this.crq()
            }
        }
        this.parent.qay();
        this.parent.rzn();
        this.parent.nfs();
        this.parent.udl()
    };
    this.ues = function () {
        this.dov = 0;
        for (var a = 0; a < this.jjp.length; a++) {
            for (var b = 0; b < this.jjp[a].length; b++) {
                if (this.jjp[a][b] >= 0) {
                    if (this.woh[this.jjp[a][b]].rcd > this.dov) {
                        this.dov = this.woh[this.jjp[a][b]].rcd
                    }
                }
            }
        }
    };
    this.jen = function () {
        if (this.cxw()) {
            this.pef = [];
            this.knu = true;
            this.zdb = 0
        }
    };
    this.ily = function () {
        this.zdb = 0
    };
    this.hyz = function () {
        this.knu = false
    };
    this.tlf = function () {
        var e = (Math.random() > 0.7) ? 4 : 3,
            d = this.rxl * e,
            g = this.ghj * e,
            a = Math.random();
        while (Math.abs(a - this.ysr) < 0.3) {
            a = Math.random()
        }
        this.ysr = a;
        var f = Math.round(a * (this.width - d));
        a = Math.random();
        var c = Math.round(a * (this.height - g));
        var b = new yqo({
            x: f,
            y: c
        }, this.parent.uhx.xzk("firework"), this.context2D, d, g);
        this.pef.push(b)
    };
    this.afy = function (b) {
        this.cmh = true;
        this.ugd = 0;
        this.tco = b;
        if (this.tco >= this.parent.mza) {
            this.tta = this.gwy;
            for (var c = 0, a = this.ndj.length; c < a; c++) {
                this.qwg[c] = this.ndj[c]
            }
            this.parent.uhx.onc("megawin");
            this.parent.tez(48);
            this.dov = this.jfj
        } else {
            if (this.tco >= this.parent.ztg) {
                this.tta = this.xni;
                for (var c = 0, a = this.njl.length; c < a; c++) {
                    this.qwg[c] = this.njl[c]
                }
                this.parent.uhx.onc("bigwin");
                this.parent.tez(48);
                this.dov = this.clw
            } else {
                if (this.tco >= this.parent.ytz) {
                    this.tta = this.yyw;
                    for (var c = 0, a = this.mhn.length; c < a; c++) {
                        this.qwg[c] = this.mhn[c]
                    }
                    this.parent.uhx.onc("nicewin");
                    this.parent.tez(24);
                    this.dov = this.xwb
                }
            }
        }
        this.dov += (this.qwg.length - 1) * this.tft;
        this.pto = 0;
        this.parent.ivl(true);
        this.amb()
    };
    this.dps = function () {
        this.cmh = false;
        clearInterval(this.mcg);
        if (this.tco >= this.parent.mza) {
            this.parent.uhx.yiv("megawin")
        } else {
            if (this.tco >= this.parent.ztg) {
                this.parent.uhx.yiv("bigwin")
            } else {
                if (this.tco >= this.parent.ytz) {
                    this.parent.uhx.yiv("nicewin")
                }
            }
        }
        this.crq();
        this.parent.ivl(false);
        this.parent.mtj()
    };
    this.wdu = function (a, b, c) {
        this.wfg = a;
        this.rfl = b;
        this.hlg = c
    };
    this.qay = function () {
        if (!this.cxw() || !this.parent.ydx()) {
            return
        }
        var d = this.context2D;
        d.save();
        d.clearRect(0, 0, this.width, this.height);
        d.lineWidth = this.gdr;
        d.lineCap = "round";
        d.lineJoin = "round";
        if (this.ovp) {
            this.kxl()
        }
        if (this.sjq) {
            if (this.rgs && this.qlo && this.vmw) {
                for (var b = 0; b < this.jjp.length; b++) {
                    for (var f = 0; f < this.jjp[b].length; f++) {
                        if (this.jjp[b][f] != -1) {
                            if (this.qlg) {
                                this.szz(b, f)
                            } else {
                                this.eyf(b, f)
                            }
                        }
                    }
                }
                if (this.vmw) {
                    this.ibm(this.cov)
                }
                for (var c = this.nic; c < this.nic + this.gbo; c++) {
                    if (this.joo >= 0 && (this.jjp[c][this.cig[this.cov][c] - 1] == this.joo || this.parent.fom(this.jjp[c][this.cig[this.cov][c] - 1]))) {
                        if (this.qlg) {
                            this.szz(c, this.cig[this.cov][c] - 1)
                        } else {
                            this.eyf(c, this.cig[this.cov][c] - 1)
                        }
                    }
                }
            } else {
                if (this.rgs && this.vmw) {
                    this.ibm(this.cov)
                }
                for (var b = 0; b < this.jjp.length; b++) {
                    for (var f = 0; f < this.jjp[b].length; f++) {
                        if (this.jjp[b][f] != -1) {
                            if (this.qlg) {
                                this.szz(b, f)
                            } else {
                                this.eyf(b, f)
                            }
                        }
                    }
                }
            }
            if (this.qxd) {
                for (var b = 0; b < this.jjp.length; b++) {
                    for (var f = 0; f < this.jjp[b].length; f++) {
                        if (this.jjp[b][f] != -1) {
                            d.drawImage(this.qxd, 0, f * this.yph, this.qxd.width, this.yph, this.ynx[b][f].x, this.ynx[b][f].y, this.oaa, this.yph)
                        }
                    }
                }
            }
            if (this.rgs) {
                if (this.cov < 0) {
                    if (this.ijk[this.ijk.length - 2]) {
                        for (var b = 0; b < this.jjp.length; b++) {
                            for (var f = 0; f < this.jjp[b].length; f++) {
                                if (this.parent.jwy >= 0 && this.jjp[b][f] == this.parent.jwy) {
                                    this.hmu(b, f, this.ijk[this.ijk.length - 2])
                                }
                            }
                        }
                    }
                } else {
                    for (var c = this.nic; c < this.nic + this.gbo; c++) {
                        if (this.joo >= 0 && (this.jjp[c][this.cig[this.cov][c] - 1] == this.joo || this.parent.fom(this.jjp[c][this.cig[this.cov][c] - 1]))) {
                            this.hmu(c, this.cig[this.cov][c] - 1, this.ijk[this.cov])
                        }
                    }
                }
            }
            if (this.knu) {
                for (var e = 0, a = this.pef.length; e < a; e++) {
                    this.pef[e].qay()
                }
            }
        } else {
            if (this.cmh) {
                this.ddp()
            }
        }
        d.restore();
        if (this.parent.yel()) {
            if (this.mff && this.yzc) {
                this.mff.drawImage(this.yzc, this.x, this.y)
            }
        }
    };
    this.ddp = function () {
        var l = this.context2D,
            f = this.parent.uhx.xzk("wins"),
            b = (this.height / 2 - this.tta.height) / 2,
            g = this.qwg[0],
            a = this.ugd % this.tft,
            k = (a < this.cng) ? Math.floor(this.qwg[this.pto + 1] / this.cng) * a : this.qwg[this.pto + 1],
            j = (a < this.cng) ? Math.floor(this.tta.height / this.cng) * a : this.tta.height,
            c = 1,
            e = 5;
        l.save();
        if (this.ugd >= this.dov - e) {
            c = (this.dov - this.ugd) * (1 / e)
        }
        l.globalAlpha = c;
        for (var d = 0; d <= this.pto && d < this.qwg.length - 1; d++) {
            if (d == this.qwg.length - 2) {
                b += this.height / 2
            }
            if (d == this.pto) {
                l.drawImage(f, g, this.tta.y, this.qwg[d + 1], this.tta.height, ((this.width - this.qwg[d + 1]) / 2 + (this.qwg[d + 1] - k) / 2), (b + (this.tta.height - j) / 2), k, j)
            } else {
                l.drawImage(f, g, this.tta.y, this.qwg[d + 1], this.tta.height, (this.width - this.qwg[d + 1]) / 2, b, this.qwg[d + 1], this.tta.height)
            }
            g += this.qwg[d + 1]
        }
        l.restore()
    };
    this.kxl = function () {
        if (this.fum) {
            this.rog = [];
            for (var b = 0; b < this.jjp.length; b++) {
                for (var d = 0; d < this.jjp[b].length; d++) {
                    if (this.jjp[b][d] != -1) {
                        this.eyf(b, d);
                        if (this.qxd) {
                            this.context2D.drawImage(this.qxd, 0, d * this.yph, this.qxd.width, this.yph, this.ynx[b][d].x, this.ynx[b][d].y, this.oaa, this.yph)
                        }
                    }
                }
            }
            for (var c = 0, a = this.fum.length; c < a; c++) {
                this.hqe(this.fum[c])
            }
        } else {
            for (var c = 0; c < this.parent.gzg; c++) {
                this.ibm(c)
            }
        }
    };
    this.ibm = function (c) {
        var a = this.context2D;
        a.save();
        a.strokeStyle = (this.opc) ? this.ijk[c].nyt : this.ijk[c].xyy;
        a.lineWidth = this.gdr;
        a.beginPath();
        for (var b = 0; b < this.spz[c].length; b++) {
            if (b == 0) {
                a.moveTo(this.spz[c][b].x, this.spz[c][b].y)
            } else {
                a.lineTo(this.spz[c][b].x, this.spz[c][b].y)
            }
        }
        a.moveTo(this.spz[c][0].x, this.spz[c][0].y);
        a.stroke();
        a.strokeStyle = (this.opc) ? this.ijk[c].fru : this.ijk[c].uwq;
        a.lineWidth = this.gdr - 2 * this.fyp;
        a.stroke();
        a.restore()
    };
    this.hqe = function (d) {
        var a = this.context2D,
            c = null;
        a.save();
        for (var b = 1; b < this.spz[d].length; b++) {
            c = this.spz[d][b - 1].x + "_" + this.spz[d][b - 1].y + "_" + this.spz[d][b].x + "_" + this.spz[d][b].y;
            if (this.rog.indexOf(c) < 0) {
                this.rog.push(c);
                a.beginPath();
                a.moveTo(this.spz[d][b - 1].x, this.spz[d][b - 1].y);
                a.lineTo(this.spz[d][b].x, this.spz[d][b].y);
                a.moveTo(this.spz[d][b - 1].x, this.spz[d][b - 1].y);
                a.strokeStyle = (this.opc) ? this.ijk[this.ijk.length - 1].nyt : this.ijk[this.ijk.length - 1].xyy;
                a.lineWidth = this.gdr;
                a.stroke();
                a.strokeStyle = (this.opc) ? this.ijk[this.ijk.length - 1].fru : this.ijk[this.ijk.length - 1].uwq;
                a.lineWidth = this.gdr - 2 * this.fyp;
                a.stroke()
            }
        }
        a.restore()
    };
    this.szz = function (a, c) {
        var b = this.context2D;
        b.save();
        if (this.wfg != null) {
            this.context2D.drawImage(this.wfg, this.ynx[a][c].x + this.rfl, this.ynx[a][c].y + this.hlg, this.oaa, this.yph, this.ynx[a][c].x, this.ynx[a][c].y, this.oaa, this.yph)
        }
        if (this.woh[this.jjp[a][c]].rcd <= this.ugd) {
            b.drawImage(this.woh[this.jjp[a][c]].fcn, (this.woh[this.jjp[a][c]].rcd - 1) * this.woh[this.jjp[a][c]].nvp, 0, this.woh[this.jjp[a][c]].nvp, this.woh[this.jjp[a][c]].szt, this.ynx[a][c].x + (this.oaa - this.woh[this.jjp[a][c]].nvp) / 2, this.ynx[a][c].y + (this.yph - this.woh[this.jjp[a][c]].szt) / 2, this.woh[this.jjp[a][c]].nvp, this.woh[this.jjp[a][c]].szt)
        } else {
            b.drawImage(this.woh[this.jjp[a][c]].fcn, this.ugd * this.woh[this.jjp[a][c]].nvp, 0, this.woh[this.jjp[a][c]].nvp, this.woh[this.jjp[a][c]].szt, this.ynx[a][c].x + (this.oaa - this.woh[this.jjp[a][c]].nvp) / 2, this.ynx[a][c].y + (this.yph - this.woh[this.jjp[a][c]].szt) / 2, this.woh[this.jjp[a][c]].nvp, this.woh[this.jjp[a][c]].szt)
        }
        b.restore()
    };
    this.eyf = function (a, c) {
        var b = this.context2D;
        b.save();
        if (this.wfg != null) {
            this.context2D.drawImage(this.wfg, this.ynx[a][c].x + this.rfl, this.ynx[a][c].y + this.hlg, this.oaa, this.yph, this.ynx[a][c].x, this.ynx[a][c].y, this.oaa, this.yph)
        }
        b.drawImage(this.kns[this.jjp[a][c]], this.ynx[a][c].x + (this.oaa - this.kns[this.jjp[a][c]].width) / 2, this.ynx[a][c].y + (this.yph - this.kns[this.jjp[a][c]].height) / 2);
        b.restore()
    };
    this.hmu = function (a, d, c) {
        var b = this.context2D;
        b.save();
        if (c) {
            b.lineWidth = this.ifb;
            b.strokeStyle = (this.opc) ? c.nyt : c.xyy;
            b.strokeRect(this.ynx[a][d].x + this.ifb / 2, this.ynx[a][d].y + this.ifb / 2, this.oaa - this.ifb, this.yph - this.ifb);
            b.strokeStyle = (this.opc) ? c.fru : c.uwq;
            b.lineWidth = this.ifb - 2 * this.fyp;
            b.strokeRect(this.ynx[a][d].x + this.ifb / 2, this.ynx[a][d].y + this.ifb / 2, this.oaa - this.ifb, this.yph - this.ifb)
        }
        b.restore()
    }
}
edj.prototype = new rom;

function vwu() {
    var a = this;
    this.vuc = function () {
        this.rsx();
        this.mcg = setInterval(a.rsx, a.ien)
    };
    this.rsx = function () {
        a.hlx()
    };
    this.kjt = function () {
        this.vsr = setTimeout(a.npf, a.frv)
    };
    this.npf = function () {
        a.nwr()
    };
    this.amb = function () {
        this.mcg = setInterval(this.dfb, 60)
    };
    this.dfb = function () {
        if (a.ugd < a.dov) {
            a.ugd++;
            if ((a.ugd % (a.tft)) == 0) {
                a.pto++
            }
            a.parent.qay()
        } else {
            a.dps()
        }
    }
}
vwu.prototype = new edj;

function gaq() {
    var a = this;
    this.oin = 0;
    this.jnp = 1;
    this.ozs = 7;
    this.ynw = 0;
    this.tip = 0;
    this.cku = 0;
    this.rif = 0;
    this.mst = this.oin;
    this.fvk = this.oen;
    this.jpc = function () {
        this.wmg(true);
        this.idp = true;
        this.pjs = false;
        this.mst = this.oin;
        this.tip = Math.floor(this.width / this.ozs);
        this.rif = 0;
        this.cku = 0
    };
    this.dcv = function () {
        this.idp = true;
        this.pjs = false;
        this.mst = this.jnp;
        this.tip = -Math.floor(this.width / this.ozs);
        this.rif = 1;
        this.cku = this.width
    };
    this.yfu = function () {
        if (a.rif < a.ozs) {
            a.cku += a.tip;
            a.rif++;
            return true
        } else {
            a.idp = false;
            a.pjs = true;
            if (a.mst == a.jnp) {
                a.wmg(false)
            }
            return false
        }
    };
    this.onc = function () {
        if (this.qgq == this.hhj) {
            this.parent.uhx.onc("maxstep")
        } else {
            this.parent.uhx.onc("step" + (this.qgq % 12))
        }
    };
    this.owt = function (b, d) {
        var c = false;
        this.qgq = b;
        if (this.qgq < this.ynn) {
            c = true;
            this.qgq = this.ynn
        }
        if (this.qgq >= this.hhj) {
            c = true;
            this.qgq = this.hhj
        }
        this.tot = this.qgq + 1;
        if (c) {
            this.jht(this.qgq)
        }
        if (d && d === true) {
            this.parent.qay()
        }
    };
    this.mpp = function () {
        a.bsh = false
    };
    this.qay = function () {
        if (!this.cxw() || !this.parent.ydx()) {
            return
        }
        this.gps();
        if (this.mff && this.yzc) {
            if (this.idp) {
                if (this.cku > 0) {
                    if (this.fvk === this.dbj) {
                        this.mff.drawImage(this.yzc, this.width - this.cku, 0, this.cku, this.height, this.x, this.y, this.cku, this.height)
                    } else {
                        if (this.fvk === this.oen) {
                            this.mff.drawImage(this.yzc, 0, 0, this.cku, this.height, this.x + this.width - this.cku, this.y, this.cku, this.height)
                        }
                    }
                }
            } else {
                this.mff.drawImage(this.yzc, this.x, this.y)
            }
        }
    };
    this.fnz = function (c) {
        var f = this.apc,
            e = this.apc,
            b = 0,
            d = 0;
        if (this.fvk === this.oen) {
            b = this.nax;
            d = this.pug.x - 2 * this.nax
        } else {
            if (this.fvk === this.dbj) {
                b = this.pug.x + this.pug.width + this.nax;
                d = this.width - this.nax - (this.pug.x + this.pug.width + this.nax)
            }
        }
        if (this.qgq > 0 && this.qgq < this.qgc.length - 1) {
            neg.tlv.hmu(c, b, this.pug.y + ((this.sfh - this.tot) * this.nzm), d, this.nzm, this.ggs, this.bgr);
            neg.tlv.nrf(c, this.parent.jea(this.qgc[this.qgq]), this.xge, b, this.pug.y + ((this.sfh - this.tot) * this.nzm) + (this.nzm - this.cef) / 2, d, this.cef, this.qcz, this.cef, this.uyq, this.nax)
        } else {
            if (this.qgq == 0) {
                f = this.xge
            } else {
                if (this.qgq == this.qgc.length - 1) {
                    e = this.xge
                }
            }
        }
        neg.tlv.hmu(c, b, this.pug.y + (this.nzm * (this.sfh - 1)), d, this.nzm, this.ggs, this.bgr);
        neg.tlv.nrf(c, this.parent.jea(this.qgc[0]), f, b, this.pug.y + (this.nzm * (this.sfh - 1)) + (this.nzm - this.cef) / 2, d, this.cef, this.qcz, this.cef, this.uyq, this.nax);
        neg.tlv.hmu(c, b, this.pug.y, d, this.nzm, this.ggs, this.bgr);
        neg.tlv.nrf(c, this.parent.jea(this.qgc[this.qgc.length - 1]), e, b, this.pug.y + (this.nzm - this.cef) / 2, d, this.cef, this.qcz, this.cef, this.uyq, this.nax);
        neg.tlv.rnq(c, "+", this.apc, this.rcm.x, this.rcm.y, this.rcm.width, this.rcm.height, this.qcz, this.cef, this.uyq);
        neg.tlv.rnq(c, "", this.apc, this.axd.x, this.axd.y, this.axd.width, this.axd.height, this.qcz, this.cef, this.uyq);
        if (this.ktp) {
            neg.tlv.rnq(c, this.ktp, this.apc, this.gah.x, this.gah.y, this.gah.width, this.gah.height, this.qcz, this.cef, this.uyq)
        }
    }
}
gaq.prototype = new cje;

function gnm() {
    var a = this;
    this.oin = 0;
    this.jnp = 1;
    this.ozs = 7;
    this.ynw = 0;
    this.tip = 0;
    this.cku = 0;
    this.rif = 0;
    this.mst = this.oin;
    this.jpc = function () {
        this.wmg(true);
        this.idp = true;
        this.pjs = false;
        this.mst = this.oin;
        this.tip = Math.floor(this.width / this.ozs);
        this.rif = 0;
        this.cku = 0
    };
    this.dcv = function () {
        this.idp = true;
        this.pjs = false;
        this.mst = this.jnp;
        this.tip = -Math.floor(this.width / this.ozs);
        this.rif = 1;
        this.cku = this.width
    };
    this.yfu = function () {
        if (a.rif < a.ozs) {
            a.cku += a.tip;
            a.rif++;
            return true
        } else {
            a.idp = false;
            a.pjs = true;
            if (a.mst == a.jnp) {
                a.wmg(false)
            }
            return false
        }
    };
    this.onc = function () {
        if (this.qgq == this.hhj) {
            this.parent.uhx.onc("maxstep")
        } else {
            this.parent.uhx.onc("step" + (this.qgq % 12))
        }
    };
    this.mpp = function () {
        a.bsh = false
    };
    this.qay = function () {
        if (!this.cxw() || !this.parent.ydx()) {
            return
        }
        this.gps();
        if (this.mff && this.yzc) {
            if (this.idp) {
                if (this.cku > 0) {
                    if (this.fvk === this.dbj) {
                        this.mff.drawImage(this.yzc, this.width - this.cku, 0, this.cku, this.height, this.x, this.y, this.cku, this.height)
                    } else {
                        if (this.fvk === this.oen) {
                            this.mff.drawImage(this.yzc, 0, 0, this.cku, this.height, this.x + this.width - this.cku, this.y, this.cku, this.height)
                        }
                    }
                }
            } else {
                this.mff.drawImage(this.yzc, this.x, this.y)
            }
        }
    };
    this.fnz = function (c) {
        var f = this.apc,
            e = this.apc,
            b = 0,
            d = 0;
        if (this.fvk === this.oen) {
            b = this.nax;
            d = this.pug.x - 2 * this.nax
        } else {
            if (this.fvk === this.dbj) {
                b = this.pug.x + this.pug.width + this.nax;
                d = this.width - this.nax - (this.pug.x + this.pug.width + this.nax)
            }
        }
        if (this.qgq > 0 && this.qgq < this.qgc.length - 1) {
            neg.tlv.hmu(c, b, this.pug.y + ((this.sfh - this.tot) * this.nzm), d, this.nzm, this.ggs, this.bgr);
            neg.tlv.udc(c, this.qgc[this.qgq], this.xge, b, this.pug.y + ((this.sfh - this.tot) * this.nzm) + (this.nzm - this.cef) / 2, d, this.cef, this.qcz, this.cef, this.uyq, this.nax)
        } else {
            if (this.qgq == 0) {
                f = this.xge
            } else {
                if (this.qgq == this.qgc.length - 1) {
                    e = this.xge
                }
            }
        }
        neg.tlv.hmu(c, b, this.pug.y + (this.nzm * (this.sfh - 1)), d, this.nzm, this.ggs, this.bgr);
        neg.tlv.udc(c, this.qgc[0], f, b, this.pug.y + (this.nzm * (this.sfh - 1)) + (this.nzm - this.cef) / 2, d, this.cef, this.qcz, this.cef, this.uyq, this.nax);
        neg.tlv.hmu(c, b, this.pug.y, d, this.nzm, this.ggs, this.bgr);
        neg.tlv.udc(c, this.qgc[this.qgc.length - 1], e, b, this.pug.y + (this.nzm - this.cef) / 2, d, this.cef, this.qcz, this.cef, this.uyq, this.nax);
        neg.tlv.rnq(c, "+", this.apc, this.rcm.x, this.rcm.y, this.rcm.width, this.rcm.height, this.qcz, this.cef, this.uyq);
        neg.tlv.rnq(c, "", this.apc, this.axd.x, this.axd.y, this.axd.width, this.axd.height, this.qcz, this.cef, this.uyq);
        if (this.ktp) {
            neg.tlv.rnq(c, this.ktp, this.apc, this.gah.x, this.gah.y, this.gah.width, this.gah.height, this.qcz, this.cef, this.uyq)
        }
    }
}
gnm.prototype = new cje;

function cix() {
    this.hvf = new Image();
    this.vdg = [];
    this.qbq = 0;
    this.iiw = 0;
    this.nqi = [];
    this.bjg = 0;
    this.iok = 0;
    this.jkh = 0;
    this.uxp = [];
    this.wfg = null;
    this.rfl = 0;
    this.hlg = 0;
    this.mwg = function (a) {
        try {
            this.uxp = a.ign;
            this.iok = a.wty;
            this.jkh = a.ekl
        } catch (b) {
            console.error(b)
        }
    };
    this.jgs = function (b, f, c) {
        var e = this.parent.pyn.cqr.dgc("line"),
            a = this.parent.oxt.dgc("betsel"),
            d = this.parent.oxt.dgc("linesel");
        if (b >= this.x && b <= this.x + this.width && f >= this.y && f <= this.y + this.height && this.cxw() === true) {
            if (e && e.wtk() && !e.noy()) {
                if (!c) {
                    this.parent.uhx.yiv("panel");
                    this.parent.uhx.onc("panel");
                    if ((a && a.wtk()) && ((d && d.wtk()) || !d)) {
                        this.parent.kpe()
                    }
                    return true
                }
            }
        }
        return false
    };
    this.qay = function () {
        if (!this.cxw() || !this.parent.ydx()) {
            return
        }
        var c = this.context2D,
            e = false;
        if (this.wfg != null) {
            c.drawImage(this.wfg, this.x + this.rfl, this.y + this.hlg, this.width, this.height, this.x, this.y, this.width, this.height)
        }
        if (this.nqi.length > 0) {
            for (var f = this.qbq - 1, d = 0; f <= this.iiw - 1; f++, d++) {
                e = false;
                for (var b = 0, a = this.nqi.length; b < a; b++) {
                    if (this.vdg[f] === this.nqi[b]) {
                        e = true;
                        c.drawImage(this.hvf, 0, this.hvf.height / 2 + (this.vdg[f] - 1) * this.jkh, this.iok, this.jkh, this.x, this.y + this.uxp[d], this.iok, this.jkh)
                    }
                }
                if (e === false) {
                    c.drawImage(this.hvf, 0, (this.vdg[f] - 1) * this.jkh, this.iok, this.jkh, this.x, this.y + this.uxp[d], this.iok, this.jkh)
                }
            }
        } else {
            for (var f = this.qbq - 1, d = 0; f <= this.iiw - 1; f++, d++) {
                if (this.vdg[f] <= this.bjg) {
                    c.drawImage(this.hvf, 0, this.hvf.height / 2 + (this.vdg[f] - 1) * this.jkh, this.iok, this.jkh, this.x, this.y + this.uxp[d], this.iok, this.jkh)
                } else {
                    c.drawImage(this.hvf, 0, (this.vdg[f] - 1) * this.jkh, this.iok, this.jkh, this.x, this.y + this.uxp[d], this.iok, this.jkh)
                }
            }
        }
    };
    this.czx = function (a, b) {
        this.bjg = a;
        if (b && b === true) {
            this.qay()
        }
    };
    this.cyd = function (b, d) {
        this.nqi = [];
        if (b) {
            for (var c = 0, a = b.length; c < a; c++) {
                this.nqi[c] = b[c]
            }
        }
        if (d && d === true) {
            this.qay()
        }
    };
    this.uuq = function (a) {
        this.hvf = a;
        this.width = this.iok;
        this.height = this.uxp[this.uxp.length - 1] + this.jkh;
        this.pxx(new flw(this.x, this.y, this.width, this.height))
    };
    this.wdu = function (a, b, c) {
        this.wfg = a;
        this.rfl = b;
        this.hlg = c
    }
}
cix.prototype = new rom;

function gqy(g, c, f, e, j, a, d, b) {
    this.bjo = g;
    this.kdc = f;
    this.aoz = e;
    this.hwv = j;
    this.mvb = c;
    this.qll = a;
    this.noa = d;
    this.uow = b;
    this.rl = 5;
    this.r1 = [];
    this.r2 = [];
    this.r3 = [];
    this.r4 = [];
    this.r5 = [];
    this.r6 = [];
    this.r7 = [];
    this.r8 = [];
    this.r9 = [];
    this.bvg = [];
    this.iac = [];
    this.xmz = [];
    this.ene = [];
    this.ljz = [];
    this.zlt = [];
    this.kkb = 5;
    this.vje = [];
    this.rup = [];
    this.ogk = [];
    this.lpf = [];
    this.rte = [];
    this.alv = [];
    this.hxk = [];
    this.xzr = [];
    this.orq = [];
    this.hbl = [];
    this.ojg = [];
    this.tis = [];
    this.eqd = [];
    this.cms = [];
    this.nfq = [];
    this.zqj = [];
    this.jbs = [];
    this.cnn = [];
    this.zjm = [];
    this.lca = [];
    this.fgk = 0;
    this.dgi = 0;
    this.win = 0;
    this.gwx = 0;
    this.rgr = 0;
    this.tte = 0;
    this.gzg = 0;
    this.ccm = 0;
    this.noc = 0;
    this.bpo = 0;
    this.gvv = 1;
    this.voz = 1;
    this.cii = 0;
    this.sbz = 0;
    this.zsy = 0;
    this.dao = 0;
    this.ryj = 0;
    this.guu = 1;
    this.trk = 1;
    this.ucp = 0;
    this.boo = 0;
    this.igw = 0;
    this.ova = 0;
    this.vac = "";
    this.cmz = "";
    this.nbn = "";
    this.uce = "";
    this.eze = 0;
    this.mnz = function (k) {
        return this.zie(k)
    };
    this.lay = function (o) {
        if (o != null) {
            this.enk = 0;
            this.mxa = this.nkp(o);
            if (this.mxa == 0) {
                this.rl = this.nkp(o);
                this.r1 = this.mnz(o);
                this.r2 = this.mnz(o);
                this.r3 = this.mnz(o);
                if (this.rl >= 4) {
                    this.r4 = this.mnz(o)
                }
                if (this.rl >= 5) {
                    this.r5 = this.mnz(o)
                }
                if (this.rl >= 6) {
                    this.r6 = this.mnz(o)
                }
                if (this.rl >= 7) {
                    this.r7 = this.mnz(o)
                }
                if (this.rl >= 8) {
                    this.r8 = this.mnz(o)
                }
                if (this.rl >= 9) {
                    this.r9 = this.mnz(o)
                }
                if (this.rl >= 10) {
                    this.bvg = this.mnz(o)
                }
                if (this.rl >= 11) {
                    this.iac = this.mnz(o)
                }
                if (this.rl >= 12) {
                    this.xmz = this.mnz(o)
                }
                if (this.rl >= 13) {
                    this.ene = this.mnz(o)
                }
                if (this.rl >= 14) {
                    this.ljz = this.mnz(o)
                }
                if (this.rl >= 15) {
                    this.zlt = this.mnz(o)
                }
                this.kkb = this.nkp(o);
                if (this.kkb > 0) {
                    this.vje = this.mnz(o);
                    this.rup = this.mnz(o);
                    this.ogk = this.mnz(o);
                    if (this.kkb >= 4) {
                        this.lpf = this.mnz(o)
                    }
                    if (this.kkb >= 5) {
                        this.rte = this.mnz(o)
                    }
                    if (this.kkb >= 6) {
                        this.alv = this.mnz(o)
                    }
                    if (this.kkb >= 7) {
                        this.hxk = this.mnz(o)
                    }
                    if (this.kkb >= 8) {
                        this.xzr = this.mnz(o)
                    }
                    if (this.kkb >= 9) {
                        this.orq = this.mnz(o)
                    }
                    if (this.kkb >= 10) {
                        this.hbl = this.mnz(o)
                    }
                    if (this.kkb >= 11) {
                        this.ojg = this.mnz(o)
                    }
                    if (this.kkb >= 12) {
                        this.tis = this.mnz(o)
                    }
                    if (this.kkb >= 13) {
                        this.eqd = this.mnz(o)
                    }
                    if (this.kkb >= 14) {
                        this.cms = this.mnz(o)
                    }
                    if (this.kkb >= 15) {
                        this.nfq = this.mnz(o)
                    }
                }
                this.nga = this.hxu(o);
                this.ieh = this.nkp(o);
                for (var l = 0, k = (this.rl < 5) ? 5 : this.rl; l < k; l++) {
                    this.zqj[l] = this.bua(o)
                }
                this.fgk = this.bua(o);
                this.dgi = this.bua(o);
                this.win = this.bua(o);
                this.tte = this.hxu(o);
                this.gwx = this.bua(o);
                this.rgr = this.bua(o);
                this.gzg = this.hxu(o);
                this.ccm = this.bua(o);
                this.noc = this.bua(o);
                this.bpo = this.bua(o);
                this.gvv = this.bua(o);
                this.voz = this.bua(o);
                this.cii = this.bua(o);
                this.sbz = this.bua(o);
                this.zsy = this.hxu(o);
                this.dao = this.hxu(o);
                this.ryj = this.hxu(o);
                this.guu = this.bua(o);
                this.trk = this.hxu(o);
                
                 
                
                for (var l = 0, k = (this.kkb < 5) ? 5 : this.kkb; l < k; l++) {
                    this.jbs[l] = this.bua(o)
                }
                for (var l = 0; l < 8; l++) {
                    this.cnn[l] = this.hxu(o)
                }
                var p = this.hxu(o);
                for (var l = 0; l < p; l++) {
                    this.zjm[l] = this.bua(o)
                }
                var n = this.hxu(o);
                for (var l = 0; l < n; l++) {
                    this.lca[l] = this.bua(o)
                }
                this.cqv(o);
                if (this.nga == 0) {
                    this.xfy("A/u250")
                } else {
                    this.nvf.ndk()
                }
            } else {
                if (this.mxa == 1) {
                    this.nga = this.hxu(o);
                    this.ieh = this.nkp(o);
                    this.fgk = this.bua(o);
                    this.dgi = this.bua(o);
                    this.win = this.bua(o);
                    for (var l = 0, k = (this.rl < 5) ? 5 : this.rl; l < k; l++) {
                        this.zqj[l] = this.bua(o)
                    }
                    this.tte = this.hxu(o);
                    this.gzg = this.hxu(o);
                    this.ccm = this.bua(o);
                    this.noc = this.bua(o);
                    this.bpo = this.bua(o);
                    this.gvv = this.bua(o);
                    this.voz = this.bua(o);
                    this.cii = this.bua(o);
                    for (var l = 0, k = (this.kkb < 5) ? 5 : this.kkb; l < k; l++) {
                        this.jbs[l] = this.bua(o)
                    }
                    var n = this.hxu(o);
                    for (var l = 0; l < n; l++) {
                        this.lca[l] = this.bua(o)
                    }
                    for (var l = 0; l < 8; l++) {
                        this.cnn[l] = this.hxu(o)
                    }
                    this.cqv(o);
                    if (this.ieh == 0) {
                        if (this.nga == neg.tcp.jsj.qyg) {
                            this.nvf.ndk()
                        } else {
                            if (this.nga == neg.tcp.jsj.fst) {
                                this.nvf.pjf()
                            } else {
                                if (this.nga == neg.tcp.jsj.itt) {
                                    this.nvf.dvx()
                                } else {
                                    if (this.nga == neg.tcp.jsj.eny) {
                                        this.nvf.cpv()
                                    } else {
                                        if (this.nga == neg.tcp.jsj.nwd) {
                                            this.nvf.uqn()
                                        } else {
                                            if (this.nga == neg.tcp.jsj.eva) {
                                                this.nvf.tkf()
                                            } else {
                                                if (this.nga == neg.tcp.jsj.xlc) {
                                                    this.nvf.ofr()
                                                } else {
                                                    if (this.nga == neg.tcp.jsj.kra) {
                                                        this.nvf.rux()
                                                    } else {
                                                        if (this.nga == neg.tcp.jsj.ewe) {
                                                            this.nvf.liy()
                                                        } else {
                                                            if (this.nga == neg.tcp.jsj.ezz) {
                                                                this.nvf.ytk()
                                                            } else {
                                                                if (this.nga == neg.tcp.jsj.duo) {
                                                                    this.nvf.icw()
                                                                } else {
                                                                    if (this.nga == neg.tcp.jsj.vqj) {
                                                                        this.nvf.uwo()
                                                                    } else {
                                                                        if (this.nga == neg.tcp.jsj.ndo) {
                                                                            this.nvf.nhy()
                                                                        } else {
                                                                            this.kdx()
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
                    } else {
                        this.nvf.rjh(this.ieh)
                    }
                } else {
                    if (this.mxa == 2) {} else {
                        if (this.mxa == 3) {
                            this.dgi = this.bua(o);
                            this.nvf.hsm()
                        } else {
                            if (this.mxa === 6 || this.mxa === 7) {
                                this.erv(o.substring(this.enk))
                            } else {
                                if (this.mxa === 8) {
                                    this.xfy("8")
                                } else {
                                    if (this.mxa == 9) {
                                        this.nvf.jot.uyl = o.substring(this.enk)
                                    } else {
                                        if (this.mxa == 10) {
                                            var m = JSON.parse(o.substring(this.enk)).Message;
                                            for (var l = 0, k = m.length; l < k; l++) {
                                                if (m[l].DisplayType == neg.jgz.lfv.plz) {
                                                    this.wkr.push(m[l])
                                                }
                                            }
                                            if (this.wkr.length > 0) {
                                                this.nvf.edf()
                                            }
                                        } else {
                                            this.gpk = this.nkp(o);
                                            this.nvf.iaz(o.substring(2))
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
    this.cqv = function (t) {
        var l = null,
            n = [],
            q = null,
            v = null,
            o = null,
            m = null,
            p = null,
            k = null;
        if (this.mxa == 0) {
            l = this.dqk(t);
            if (l != "") {
                n = l.split("#");
                if (n.length >= 1) {
                    q = n[0].split("|");
                    this.cmz = q[0];
                    if (q.length > 1) {
                        this.nbn = q[1];
                        if (q.length > 2) {
                            this.uce = q[2]
                        }
                    }
                    if (n.length >= 2) {
                        v = n[1].split("|");
                        if (v.length >= 1) {
                            m = v[0];
                            this.enk = 0;
                            this.ucp = this.hxu(m);
                            this.boo = this.bua(m);
                            this.igw = this.bua(m);
                            this.ova = this.bua(m);
                            this.vac = this.dqk(m);
                            if (v.length >= 2) {
                                k = v[1];
                                if (k) {
                                    this.eze = parseFloat(k)
                                }
                            }
                        }
                    }
                }
            }
            if (neg.epl.value21.e === true && neg.epl.value21.s) {
                if (this.eze == 0) {
                    this.cmz = ""
                } else {
                    if (this.eze != 0 && neg.epl.value21.m == 1) {
                        this.cmz = ""
                    }
                }
            }
        } else {
            l = this.dqk(t);
            if (l != "") {
                n = l.split("#");
                if (n.length > 1) {
                    m = n[1];
                    o = n[1].split("|{");
                    m = o[0];
                    if (m) {
                        this.enk = 0;
                        this.boo = this.bua(m);
                        this.igw = this.bua(m);
                        this.ova = this.bua(m)
                    }
                    if (o.length > 1) {
                        p = "{" + o[1];
                        var r = JSON.parse(p).Message;
                        this.pca.length = 0;
                        this.thh.length = 0;
                        for (var s = 0, u = r.length; s < u; s++) {
                            if (r[s].DisplayType == neg.jgz.lfv.ysg) {
                                this.thh.push(r[s])
                            } else {
                                if (r[s].DisplayType == neg.jgz.lfv.plz) {
                                    this.pca.push(r[s])
                                }
                            }
                        }
                    }
                    if (this.thh.length > 0) {
                        this.nvf.cgs()
                    }
                }
            }
        }
    };
    this.kdx = function () {};
    this.play = function (l, k, m) {
        this.xfy("A/u251," + l + "," + k + "," + m)
    };
    this.uqh = function () {
        this.xfy("A/u254")
    };
    this.upm = function () {
        this.xfy("A/u258")
    };
    this.ryz = function (k) {
        this.xfy("A/u257," + k)
    };
    this.qqv = function (l, k, m) {
        this.xfy("A/u256," + l + "," + k + "," + m)
    }
}
gqy.prototype = new ipb;

function kel() {
    this.dcf = function (a, b) {
        this.bjo = b;
        this.jot = a;
        return this
    };
    this.connect = function (c, f, e, g, a, d, b) {
        this.kdc = f;
        this.aoz = e;
        this.hwv = g;
        this.mvb = c;
        this.noa = d;
        this.uow = b;
        this.jja = new gqy(this.bjo, c, f, e, g, a, d, b);
        this.jja.dcf(this)
    };
    this.play = function (b, a, c) {
        this.jja.play(b, a, c)
    };
    this.qqv = function (b, a, c) {
        this.jja.qqv(b, a, c)
    };
    this.uqh = function () {
        this.jja.uqh()
    };
    this.upm = function () {
        this.jja.upm()
    };
    this.ryz = function (a) {
        this.jja.ryz(a)
    };
    this.ndk = function () {
        var c = this.jja.nga;
        this.jot.r1 = this.jja.r1;
        this.jot.r2 = this.jja.r2;
        this.jot.r3 = this.jja.r3;
        this.jot.r4 = this.jja.r4;
        this.jot.r5 = this.jja.r5;
        this.jot.r6 = this.jja.r6;
        this.jot.r7 = this.jja.r7;
        this.jot.r8 = this.jja.r8;
        this.jot.r9 = this.jja.r9;
        this.jot.bvg = this.jja.bvg;
        this.jot.iac = this.jja.iac;
        this.jot.xmz = this.jja.xmz;
        this.jot.ene = this.jja.ene;
        this.jot.ljz = this.jja.ljz;
        this.jot.zlt = this.jja.zlt;
        if (c == neg.tcp.jsj.nwd || c == neg.tcp.jsj.eva || c == neg.tcp.jsj.xlc || c == neg.tcp.jsj.kra || c == neg.tcp.jsj.ewe) {
            this.jot.r1 = this.jja.vje;
            this.jot.r2 = this.jja.rup;
            this.jot.r3 = this.jja.ogk;
            this.jot.r4 = this.jja.lpf;
            this.jot.r5 = this.jja.rte;
            this.jot.r6 = this.jja.alv;
            this.jot.r7 = this.jja.hxk;
            this.jot.r8 = this.jja.xzr;
            this.jot.r9 = this.jja.orq;
            this.jot.bvg = this.jja.hbl;
            this.jot.iac = this.jja.ojg;
            this.jot.xmz = this.jja.tis;
            this.jot.ene = this.jja.eqd;
            this.jot.ljz = this.jja.cms;
            this.jot.zlt = this.jja.nfq
        }
        this.jot.osu = this.jja.zqj;
        this.jot.dgi = this.jja.dgi;
        this.jot.gwx = this.jja.gwx;
        this.jot.rgr = this.jja.rgr;
        this.jot.dao = this.jja.dao;
        this.jot.ryj = this.jja.ryj;
        if (this.lyc()) {
            for (var b = 0, a = this.jja.zjm.length; b < a && this.jja.zjm[b] <= this.jja.rgr; b++) {
                this.jot.zjm[b] = this.jja.zjm[b]
            }
        } else {
            for (var b = 0, a = this.jja.zjm.length; b < a && this.jja.zjm[b] * this.jja.zsy <= this.jja.rgr; b++) {
                this.jot.zjm[b] = this.jja.zjm[b]
            }
        }
        if (c == neg.tcp.jsj.qyg || ((c == neg.tcp.jsj.fst || c == neg.tcp.jsj.duo) && this.jja.win == 0) || c == neg.tcp.jsj.itt || c == neg.tcp.jsj.ezz || c == neg.tcp.jsj.ewe) {
            this.jot.oyu = true
        } else {
            this.jot.oyu = false
        }
        this.jot.gzg = this.jja.gzg;
        this.jot.zlq = this.jja.tte;
        this.jot.aub = this.jot.zjm[this.jot.zlq];
        this.jot.win = this.jja.win;
        for (var b = 0; b < this.jja.lca.length; b++) {
            this.jot.aoc[b] = this.jja.lca[b]
        }
        this.jot.rlh = this.jja.jbs;
        this.jot.bpo = this.jja.bpo;
        this.jot.cii = this.jja.cii;
        this.jot.noc = this.jja.noc;
        this.jot.ccm = this.jja.ccm;
        this.jot.zlc = this.jja.ccm;
        this.jot.gvv = this.jja.gvv;
        this.fah();
        this.jot.yoc();
        this.jot.pmi(c, this.jja.cnn, this.jja.fgk)
    };
    this.pjf = function () {
        this.jot.pld({
            type: "roundStarted",
            sender: this.jot.mvb,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                balanceBefore: this.jot.jea(this.jot.dgi)
            }
        });
        this.jot.state = this.jja.nga;
        this.jot.osu = this.jja.zqj;
        this.jot.dgi = this.jja.dgi;
        this.jot.gzg = this.jja.gzg;
        this.jot.zlq = this.jja.tte;
        this.jot.win = this.jja.win;
        for (var a = 0; a < this.jja.lca.length; a++) {
            this.jot.aoc[a] = this.jja.lca[a]
        }
        if (this.jot.aqc && this.jot.win > 0) {
            this.jot.aqc.cqr.evt("history", "#itq", [this.jja.cnn])
        }
        this.jot.ykc = false;
        this.fah();
        this.jot.jxy();
        this.jot.cne(this.jja.fgk)
    };
    this.dvx = function () {
        this.jot.state = this.jja.nga;
        this.jot.dgi = this.jja.dgi;
        this.hdj = false;
        this.fah();
        this.jot.kbv();
        this.jot.cne(this.jja.fgk)
    };
    this.ytk = function () {
        this.jot.pld({
            type: "roundStarted",
            sender: this.jot.mvb,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                balanceBefore: this.jot.jea(this.jot.dgi)
            }
        });
        this.jot.state = this.jja.nga;
        this.jot.osu = this.jja.zqj;
        this.jot.dgi = this.jja.dgi;
        this.jot.gzg = this.jja.gzg;
        this.jot.zlq = this.jja.tte;
        this.jot.win = this.jja.win;
        for (var a = 0; a < this.jja.lca.length; a++) {
            this.jot.aoc[a] = this.jja.lca[a]
        }
        this.jot.ykc = false;
        if (this.jot.aqc && this.jot.win > 0) {
            this.jot.aqc.itq(this.jja.cnn[0], this.jja.cnn, true)
        }
        this.fah();
        this.jot.yhx();
        this.jot.cne(this.jja.fgk)
    };
    this.icw = function () {
        this.jot.state = this.jja.nga;
        this.jot.dgi = this.jja.dgi;
        this.jot.win = this.jja.win;
        if (this.jot.aqc) {
            this.jot.aqc.itq(this.jja.cnn[0], this.jja.cnn, false)
        }
        this.jot.frk();
        this.jot.cne(this.jja.fgk)
    };
    this.uwo = function () {
        this.jot.state = this.jja.nga;
        this.jot.dgi = this.jja.dgi;
        this.jot.win = this.jja.win;
        this.jot.znt();
        this.jot.cne(this.jja.fgk)
    };
    this.cpv = function () {
        this.jot.pld({
            type: "roundStarted",
            sender: this.jot.mvb,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                balanceBefore: this.jot.jea(this.jot.dgi)
            }
        });
        this.jot.state = this.jja.nga;
        this.jot.osu = this.jja.zqj;
        this.jot.dgi = this.jja.dgi;
        this.jot.gzg = this.jja.gzg;
        this.jot.zlq = this.jja.tte;
        this.jot.win = this.jja.win;
        for (var a = 0; a < this.jja.lca.length; a++) {
            this.jot.aoc[a] = this.jja.lca[a]
        }
        this.jot.ykc = (this.jja.ccm > this.jot.ccm);
        this.jot.bpo = this.jja.bpo;
        this.jot.cii = this.jja.cii;
        this.jot.noc = this.jja.noc;
        this.jot.ccm = this.jja.ccm;
        this.jot.zlc = this.jja.ccm;
        this.jot.gvv = this.jja.gvv;
        this.fah();
        this.jot.plk();
        this.jot.cne(this.jja.fgk)
    };
    this.uqn = function () {
        this.jot.state = this.jja.nga;
        this.jot.rlh = this.jja.jbs;
        this.jot.osu = this.jja.zqj;
        this.jot.dgi = this.jja.dgi;
        this.jot.gzg = this.jja.gzg;
        this.jot.zlq = this.jja.tte;
        this.jot.win = this.jja.win;
        for (var a = 0; a < this.jja.lca.length; a++) {
            this.jot.aoc[a] = this.jja.lca[a]
        }
        this.jot.ykc = (this.jja.ccm > this.jot.ccm);
        this.jot.bpo = this.jja.bpo;
        this.jot.cii = this.jja.cii;
        this.jot.noc = this.jja.noc;
        this.jot.ccm = this.jja.ccm;
        this.jot.zlc = this.jja.ccm;
        this.jot.gvv = this.jja.gvv;
        this.fah();
        this.jot.sik();
        this.jot.cne(this.jja.fgk)
    };
    this.tkf = function () {
        this.jot.state = this.jja.nga;
        this.jot.rlh = this.jja.jbs;
        this.jot.osu = this.jja.zqj;
        this.jot.dgi = this.jja.dgi;
        this.jot.gzg = this.jja.gzg;
        this.jot.zlq = this.jja.tte;
        this.jot.win = this.jja.win;
        for (var a = 0; a < this.jja.lca.length; a++) {
            this.jot.aoc[a] = this.jja.lca[a]
        }
        this.jot.ykc = (this.jja.ccm > this.jot.ccm);
        this.jot.zlc = this.jot.ccm;
        this.jot.bpo = this.jja.bpo;
        this.jot.cii = this.jja.cii;
        this.jot.noc = this.jja.noc;
        this.jot.ccm = this.jja.ccm;
        this.jot.gvv = this.jja.gvv;
        this.fah();
        this.jot.uam();
        this.jot.cne(this.jja.fgk)
    };
    this.ofr = function () {
        this.jot.state = this.jja.nga;
        this.jot.rlh = this.jja.jbs;
        this.jot.osu = this.jja.zqj;
        this.jot.dgi = this.jja.dgi;
        this.jot.gzg = this.jja.gzg;
        this.jot.zlq = this.jja.tte;
        this.jot.win = this.jja.win;
        for (var a = 0; a < this.jja.lca.length; a++) {
            this.jot.aoc[a] = this.jja.lca[a]
        }
        this.jot.ykc = (this.jja.ccm > this.jot.ccm);
        this.jot.zlc = this.jot.ccm;
        this.jot.bpo = this.jja.bpo;
        this.jot.cii = this.jja.cii;
        this.jot.noc = this.jja.noc;
        this.jot.ccm = this.jja.ccm;
        this.jot.gvv = this.jja.gvv;
        this.fah();
        this.jot.rzg();
        this.jot.cne(this.jja.fgk)
    };
    this.rux = function () {
        this.jot.state = this.jja.nga;
        this.jot.rlh = this.jja.jbs;
        this.jot.osu = this.jja.zqj;
        this.jot.dgi = this.jja.dgi;
        this.jot.gzg = this.jja.gzg;
        this.jot.zlq = this.jja.tte;
        this.jot.win = this.jja.win;
        for (var a = 0; a < this.jja.lca.length; a++) {
            this.jot.aoc[a] = this.jja.lca[a]
        }
        if (this.jot.aqc && this.jot.win > 0) {
            this.jot.aqc.cqr.evt("history", "#itq", [this.jja.cnn])
        }
        this.jot.ykc = (this.jja.ccm > this.jot.ccm);
        this.jot.bpo = this.jja.bpo;
        this.jot.cii = this.jja.cii;
        this.jot.noc = this.jja.noc;
        this.jot.ccm = this.jja.ccm;
        this.jot.zlc = this.jja.ccm;
        this.jot.gvv = this.jja.gvv;
        this.fah();
        this.jot.avx();
        this.jot.cne(this.jja.fgk)
    };
    this.liy = function () {
        this.jot.state = this.jja.nga;
        this.jot.rlh = this.jja.jbs;
        this.jot.osu = this.jja.zqj;
        this.jot.dgi = this.jja.dgi;
        this.jot.gzg = this.jja.gzg;
        this.jot.zlq = this.jja.tte;
        this.jot.win = this.jja.win;
        for (var a = 0; a < this.jja.lca.length; a++) {
            this.jot.aoc[a] = this.jja.lca[a]
        }
        this.jot.ykc = (this.jja.ccm > this.jot.ccm);
        this.jot.bpo = this.jja.bpo;
        this.jot.cii = this.jja.cii;
        this.jot.noc = this.jja.noc;
        this.jot.ccm = this.jja.ccm;
        this.jot.zlc = this.jja.ccm;
        this.jot.gvv = this.jja.gvv;
        this.fah();
        this.jot.gxe();
        this.jot.cne(this.jja.fgk)
    };
    this.fah = function () {
        this.jot.cmz = this.jja.cmz;
        this.jot.nbn = this.jja.nbn;
        this.jot.uce = this.jja.uce;
        this.jot.boo = this.jja.boo;
        this.jot.igw = this.jja.igw;
        this.jot.ova = this.jja.ova;
        this.jot.vac = this.jja.vac;
        if (this.jot.igw > 0 && this.jot.boo < this.jot.igw) {
            this.jot.zlq = this.jja.ucp
        }
        this.jot.eze = this.jja.eze
    };
    this.lyc = function () {
        return false
    }
}
kel.prototype = new zhg;

function wud() {
    var a = this;
    this.mfg = false;
    this.myc = -1;
    this.jmz = 0;
    this.oik = null;
    this.fpz = 3;
    this.iiy = 0;
    this.enx = null;
    this.xbo = null;
    this.hvh = false;
    this.usn = false;
    this.sny = false;
    this.rgv = [];
    this.xbu = null;
    this.ngy = false;
    this.vzs = [];
    this.pjs = false;
    this.hpn = null;
    this.alc = null;
    this.nzm = 0;
    this.sfh = 0;
    this._y = 0;
    this._d = 0;
    this.abp = 0;
    this.nbe = 4;
    this.vlb = 2;
    this.ouu = 9;
    this.rtd = true;
    this.fkc = 0;
    this.adu = -1;
    this.hcq = 0;
    this.kgi = -1;
    this.hkc = -1;
    this.kjd = -1;
    this.ptu = false;
    this.yzd = [];
    this.ynw = 0;
    this.swc = 0;
    this.hxo = 0;
    this.dnq = 89;
    this.nus = 0;
    this.pmc = 0;
    this.jtb = null;
    this.wfg = null;
    this.rfl = 0;
    this.hlg = 0;
    this.pdl = [];
    this.liw = [];
    this.gcs = [];
    this.leo = [];
    this.wpn = [];
    this.dcf = function (f, k, j, c, b, d, g, e) {
        wud.prototype.dcf.call(this, f, k, j);
        this.fpz = d;
        this.fkc = this.height / this.fpz;
        this.oik = b;
        this.xbo = g;
        this.sfh = e;
        this.nzm = Math.round(c);
        this.enx = [];
        this.iiy = 0;
        this.abp = 0;
        this.ouu = Math.round(this.nzm / 20);
        this.nbe = Math.round(this.nzm / 12);
        this.vlb = Math.round(this.nzm / 2);
        this.vzs.length = 0
    };
    this.gzv = function (b) {
        try {
            this.hpn = b.aam;
            this.alc = b.iof
        } catch (c) {
            console.error(c)
        }
    };
    this.pxx = function (c, b) {
        wud.prototype.pxx.call(this, c);
        try {
            this.nzm = Math.round(b);
            this.ouu = Math.round(this.nzm / 20);
            this.nbe = Math.round(this.nzm / 12);
            this.vlb = Math.round(this.nzm / 2);
            this._y = this.y + (this.fpz - 1) * this.fkc
        } catch (d) {
            console.error(d)
        }
    };
    this.jgs = function (b, e) {
        var d = b - this.x - ((this.parent.rmk()) ? this.parent.don.cod.cij.x : 0),
            c = e - this.y - ((this.parent.rmk()) ? this.parent.don.cod.cij.y : 0);
        if (d >= 0 && d <= this.width && c >= 0 && c <= this.height) {
            if (this.parent.pex && this.parent.nkh && !this.parent.zmp && !this.mfg && this.parent.npb()) {
                this.dmn()
            } else {
                if (!this.parent.pex) {
                    if (neg.epl.value43) {
                        if (this.parent.kal()) {
                            this.parent.qzm();
                            if (this.parent.pyn) {
                                this.parent.pyn.cqr.uqk("buttons", "#ixm", [true])
                            }
                        }
                    } else {
                        if (this.pjs) {
                            this.adu = c;
                            this.hcq = 0;
                            this.parent.jhp();
                            this.parent.hsv();
                            this.parent.mxe()
                        }
                    }
                }
            }
            return true
        }
        return false
    };
    this.mqw = function () {
        if (this.adu >= 0) {
            this.sjp();
            return true
        }
        return false
    };
    this.tai = function (b, f, c) {
        var e = b - this.x - ((this.parent.rmk()) ? this.parent.don.cod.cij.x : 0),
            d = f - this.y - ((this.parent.rmk()) ? this.parent.don.cod.cij.y : 0);
        if (this.adu >= 0) {
            if (e >= 0 && e <= this.width && d >= 0 && d <= this.height) {
                if (d > this.adu) {
                    this.nus = xzm(this.ttf)
                } else {
                    if (d < this.adu) {
                        this.nus = xzm(this.kts)
                    }
                }
                this.adu = d;
                if (c) {
                    clearTimeout(this.pmc);
                    this.pmc = setTimeout(this.sjp, 500)
                }
                return true
            } else {
                this.sjp();
                return true
            }
        }
        return false
    };
    this.qay = function () {
        var g = 0,
            k = 0,
            d = 0;
        if (!this.cxw() || !this.parent.ydx()) {
            return
        }
        if (this.iiy >= 0) {
            this.context2D.save();
            if (this.parent.csv === false) {
                this.context2D.beginPath();
                this.context2D.rect(this.x, this.y, this.width, this.height);
                this.context2D.closePath();
                this.context2D.clip()
            }
            if (this.wfg != null) {
                this.context2D.drawImage(this.wfg, this.x + this.rfl, this.y + this.hlg, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            for (var f = 0, b = this.liw.length; f < b; f++) {
                if (this.liw[f]) {
                    this.context2D.drawImage(this.liw[f].hvf, this.liw[f].hbw * this.width, 0, this.width, this.liw[f].hvf.height, this.x, this.y + f * this.fkc, this.width, this.liw[f].hvf.height)
                }
            }
            g = this._y - this.height + this.hcq;
            for (var f = 0; f < this.fpz + 1; f++) {
                k = this.iiy + f;
                d = this.enx[k];
                try {
                    if (this.sny === false) {
                        this.context2D.drawImage(this.oik[d], this.x, g)
                    } else {
                        this.context2D.drawImage(this.rgv[d], this.x, g)
                    }
                } catch (l) {
                    if (!this.parent.ict) {
                        console.error("can not display image " + this.oik.length + "" + d + "" + k + "" + this.enx.length + "" + this.enx)
                    }
                }
                g += this.fkc
            }
            g = this._y - this.height;
            for (var f = 0; f < this.fpz + 1; f++) {
                k = this.iiy + f;
                d = this.enx[k];
                try {
                    for (var c = 0, b = this.yzd.length; c < b; c++) {
                        if (this.yzd[c] == d && this.pdl[d] && (this.pdl[d].bmb || !this.pdl[d].lpu)) {
                            this.context2D.drawImage(this.pdl[d].hvf, this.pdl[d].hbw * this.width, 0, this.width, this.pdl[d].hvf.height, this.x, g + (this.fkc - this.pdl[d].hvf.height) / 2, this.width, this.pdl[d].hvf.height);
                            break
                        }
                    }
                } catch (l) {
                    if (!this.parent.ict) {
                        console.error("can not display image " + this.pdl.length + "" + d + "" + k + "" + this.enx.length + "" + this.enx)
                    }
                }
                g += this.fkc
            }
            for (var f = 0, b = this.vzs.length; f < b; f++) {
                if (this.vzs[f]) {
                    this.context2D.drawImage(this.vzs[f], this.x, this.y + f * this.fkc)
                }
            }
            for (var f = 0, b = this.gcs.length; f < b; f++) {
                if (this.gcs[f]) {
                    this.context2D.drawImage(this.gcs[f].hvf, this.gcs[f].hbw * this.width, 0, this.width, this.gcs[f].hvf.height, this.x, this.y + f * this.fkc, this.width, this.gcs[f].hvf.height)
                }
            }
            if (this.hvh) {
                this.context2D.fillStyle = this.hpn;
                this.context2D.fillRect(this.x, this.y, this.width, this.height)
            }
            if (this.usn) {
                this.context2D.fillStyle = this.alc;
                this.context2D.fillRect(this.x, this.y, this.width, this.height)
            }
            if (this.jtb != null) {
                this.context2D.drawImage(this.jtb, this.x, this.y)
            }
            this.context2D.restore();
            if (this.mff && this.yzc) {
                this.mff.drawImage(this.yzc, this.x, this.y)
            }
        }
    };
    this.sxx = function (b) {
        this.hkc = -1;
        this.kjd = -1;
        this.jmz = b;
        this.mfg = false;
        this.kgi = -1;
        this.iiy = 0;
        this.rtd = true;
        this.myc = -1;
        this.enx.length = this.sfh;
        for (var c = 0; c <= this.fpz; c++) {
            this.enx[this.enx.length - 1 - this.fpz + c] = this.enx[c]
        }
        this.iiy = this.enx.length - 1 - this.fpz;
        this.rtd = true;
        this.mte(false)
    };
    this.zmm = function (d, f) {
        for (var b = 0; b < this.sfh; b++) {
            if (b < this.xbo.length) {
                this.enx[b] = this.xbo[b]
            } else {
                var c = b % this.xbo.length;
                this.enx[b] = this.xbo[c]
            }
        }
        if (f) {
            var e = (this.fpz > 1) ? d - 2 : d - 1;
            if (e < 0) {
                e = this.xbo.length + e
            }
            for (var b = 0; b <= this.fpz; b++) {
                this.enx[b] = this.xbo[e];
                e += 1;
                if (e == this.xbo.length) {
                    e = e - this.xbo.length
                }
            }
        }
        this.iiy = 0;
        this._y = this.y + (this.fpz - 1) * this.fkc
    };
    this.dmn = function () {
        this.ngy = true;
        if (this.iiy > this.fpz) {
            var c = this.iiy;
            var d = this.fpz;
            for (var b = 0; b <= this.fpz; b++) {
                this.enx[d + b + 1] = this.enx[c + b]
            }
            this.iiy = this.fpz + 1
        }
    };
    this.onq = function () {
        this.iiy = 0;
        this.kgi = 0;
        this.zay()
    };
    this.ttf = function () {
        if (a.hcq < a.fkc / 4) {
            a.hcq = a.hcq + 2;
            if (a.parent.csv === false) {
                a.qay()
            } else {
                a.parent.dky()
            }
        }
    };
    this.kts = function () {
        if (a.hcq > 0) {
            a.hcq = a.hcq - 2;
            if (a.parent.csv === false) {
                a.qay()
            } else {
                a.parent.dky()
            }
        }
    };
    this.sjp = function () {
        clearTimeout(a.pmc);
        a.parent.jdj();
        if (a.hcq > 0) {
            a.kts();
            a.nus = xzm(a.sjp)
        } else {
            a.zoy()
        }
    };
    this.zoy = function () {
        irf(this.nus);
        this.adu = -1;
        this.hcq = 0
    };
    this.zne = function (c) {
        if (this.hcq > 0) {
            this.hcq = 0
        }
        if (this.fpz === 1 && this.kgi < 0 && this.hkc >= 0 && this._y === this.y + this.height - this.nzm) {
            this.oxo(this.hkc, this.kjd, this.ptu)
        }
        if (this.iiy >= 0) {
            if (this.iiy > 0) {
                if (!this.ngy || !this.parent.dkd) {
                    this._y += this.nzm;
                    this._d += this.nzm
                } else {
                    this._y += (this.nzm + this.nzm / 2);
                    this._d += (this.nzm + this.nzm / 2)
                }
            } else {
                if (this.iiy == 0) {
                    if (this.kgi == -1) {
                        this.myc += 1;
                        this.iiy = this.jmz - 1 - this.fpz;
                        this._y += this.nzm;
                        this._d += this.nzm;
                        for (var b = 0; b <= this.fpz; b++) {
                            this.enx[this.jmz - 1 - this.fpz + b] = this.enx[b]
                        }
                    } else {
                        if (this.abp < this.vlb && this.rtd) {
                            this._y += this.nbe;
                            this.abp += this.nbe;
                            if (this.abp >= this.vlb) {
                                this.rtd = false
                            }
                        } else {
                            if (this.abp > 0 && !this.rtd) {
                                this._y -= this.ouu;
                                this.abp -= this.ouu;
                                if (this.abp <= 0) {
                                    this.mfg = true;
                                    this.ngy = false;
                                    if (typeof this.vvj === "function") {
                                        this.vvj()
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this._d > this.fkc - this.nzm && this.iiy > 0) {
                if (c && this.kgi >= 0) {
                    if (this.iiy == 1) {
                        if (typeof this.yis === "function") {
                            this.yis()
                        }
                        if (this.xbu) {
                            this.xbu.play()
                        }
                        if (!this.parent.qlj && !this.parent.rwc) {
                            if (this.zcj()) {
                                this.jph()
                            }
                        }
                    }
                }
                this.iiy -= 1;
                this._d = 0;
                this._y = this.y + (this.fpz - 1) * this.fkc
            }
        }
    };
    this.joj = function (e, c, f) {
        for (var d = 0, b = this.gcs.length; d < b; d++) {
            if (this.gcs[d]) {
                if (this.gcs[d].qru === false && this.gcs[d].hbw < this.gcs[d].rcd - 1) {
                    this.gcs[d].hbw += 1
                } else {
                    if (this.gcs[d].qru === true && this.gcs[d].hbw > 0) {
                        this.gcs[d].hbw -= 1
                    } else {
                        if (this.gcs[d].loop === true) {
                            this.gcs[d].hbw = (this.gcs[d].qru === false) ? 0 : this.gcs[d].rcd - 1
                        } else {
                            if (this.gcs[d].crq === true) {
                                this.gcs[d] = null
                            }
                        }
                    }
                }
            }
        }
        if (f && f === true) {
            this.qay()
        }
    };
    this.gbu = function () {
        for (var c = 0, b = this.gcs.length; c < b; c++) {
            if (this.gcs[c] && ((this.gcs[c].qru === false && this.gcs[c].hbw < this.gcs[c].rcd - 1) || (this.gcs[c].qru === true && this.gcs[c].hbw > 0))) {
                return true
            }
        }
        return false
    };
    this.nyu = function (d) {
        for (var c = 0, b = this.liw.length; c < b; c++) {
            if (this.liw[c]) {
                if (this.liw[c].qru === false && this.liw[c].hbw < this.liw[c].rcd - 1) {
                    this.liw[c].hbw += 1
                } else {
                    if (this.liw[c].qru === true && this.liw[c].hbw > 0) {
                        this.liw[c].hbw -= 1
                    } else {
                        if (this.liw[c].loop === true) {
                            this.liw[c].hbw = (this.liw[c].qru === false) ? 0 : this.liw[c].rcd - 1
                        } else {
                            if (this.liw[c].crq === true) {
                                this.liw[c] = null
                            }
                        }
                    }
                }
            }
        }
        if (d && d === true) {
            this.qay()
        }
    };
    this.zpg = function () {
        for (var c = 0, b = this.liw.length; c < b; c++) {
            if (this.liw[c] && ((this.liw[c].qru === false && this.liw[c].hbw < this.liw[c].rcd - 1) || (this.liw[c].qru === true && this.liw[c].hbw > 0))) {
                return true
            }
        }
        return false
    };
    this.gfa = function (d, c, b) {
        this.hkc = d;
        this.kjd = c;
        this.ptu = b;
        if (this.fpz > 1) {
            this.oxo(this.hkc, this.kjd, this.ptu)
        }
    };
    this.oxo = function (j, g, d) {
        var k = 0,
            c = 0,
            e = 0,
            b = [];
        this.myc = -1;
        this.kgi = j;
        k = (this.fpz > 1) ? this.kgi - 2 : this.kgi - 1;
        if (k < 0) {
            k = this.xbo.length + k
        }
        c = (d === true) ? this.enx.length + g : this.fpz + g + 1;
        for (var f = 0; f <= this.fpz; f++) {
            e = this.iiy + f;
            if (e >= this.enx.length) {
                e = e - this.enx.length
            }
            b[f] = this.enx[e]
        }
        for (var f = 0; f < c; f++) {
            this.enx[f] = this.xbo[k];
            k += 1;
            if (k == this.xbo.length) {
                k = k - this.xbo.length
            }
        }
        this.iiy = this.fpz + g + 1;
        for (var f = 0; f <= this.fpz; f++) {
            this.enx[this.iiy + f] = b[f]
        }
        this.mte(true);
        this.hkc = -1;
        this.kjd = -1;
        this.ptu = false
    };
    this.mte = function (k) {
        var d = -1,
            n = -1,
            b = 0,
            o = true,
            e = false,
            m = 0,
            l = 0;
        if (this.leo.length > 0 && this.wpn.length > 0) {
            if (k) {
                for (var g = 0; g < this.leo.length; g++) {
                    for (var f = 0; f < this.leo[g].length - 1; f++) {
                        if (this.enx[this.fpz] == this.leo[g][f]) {
                            d = f;
                            n = g
                        }
                    }
                }
                if (n >= 0 && d >= 0 && d < this.leo[n].length - 1) {
                    if (this.fpz + this.leo[n].length - d - 1 < this.iiy) {
                        for (var g = d + 1, f = 1; g < this.leo[n].length; g++, f++) {
                            this.enx[this.fpz + f] = this.leo[n][g]
                        }
                    }
                }
            }
            d = -1;
            n = -1;
            for (var g = 0; g < this.leo.length; g++) {
                for (var f = 1; f < this.leo[g].length; f++) {
                    if (this.enx[this.iiy] == this.leo[g][f]) {
                        d = f;
                        n = g
                    }
                }
            }
            if (n >= 0 && d > 0) {
                if (this.iiy - d > this.fpz) {
                    for (var g = d - 1, f = 1; g >= 0; g--, f++) {
                        this.enx[this.iiy - f] = this.leo[n][g]
                    }
                }
            }
            d = -1;
            n = -1;
            for (var g = 0; g < this.leo.length; g++) {
                for (var f = 0; f < this.leo[g].length; f++) {
                    if (this.enx[this.iiy + this.fpz] == this.leo[g][f]) {
                        d = f;
                        n = g
                    }
                }
            }
            if (n >= 0 && d >= 0 && d < this.leo[n].length - 1) {
                if (!k) {
                    for (var g = d + 1; g < this.leo[n].length; g++) {
                        this.enx[m++] = this.leo[n][g]
                    }
                } else {
                    if (this.iiy + this.fpz + this.leo[n].length - d - 1 < this.enx.length) {
                        for (var g = d + 1, f = 1; g < this.leo[n].length; g++, f++) {
                            this.enx[this.iiy + this.fpz + f] = this.leo[n][g]
                        }
                    }
                }
            }
            m = (k) ? this.fpz + 1 : m;
            l = (k) ? this.enx.length : this.iiy;
            for (var c = m; c < l; c++) {
                if (k == false || (c < this.iiy || c > this.iiy + this.fpz)) {
                    d = -1;
                    n = -1;
                    for (var g = 0; g < this.leo.length; g++) {
                        for (var f = 0; f < this.leo[g].length; f++) {
                            if (this.enx[c] == this.leo[g][f]) {
                                d = f;
                                n = g
                            }
                        }
                    }
                    if (n >= 0 && d >= 0) {
                        o = true;
                        b = 0;
                        for (var g = 0; g < this.leo[n].length && o; g++) {
                            if (this.enx[c - d + g] != this.leo[n][g]) {
                                o = false
                            } else {
                                b++
                            }
                        }
                        if (o) {
                            c += this.leo[n].length - d - 1
                        } else {
                            if (b == 0) {
                                this.enx[c] = this.wpn[Math.floor(Math.random() * this.wpn.length)]
                            } else {
                                if (b == this.leo[n].length - 1 && (c + b < this.iiy || c + b > this.iiy + this.fpz) && c + b < this.enx.length) {
                                    e = false;
                                    for (var g = 0; g < this.leo.length && !e; g++) {
                                        for (var f = 0; f < this.leo[g].length && !e; f++) {
                                            if (this.enx[c + b] == this.leo[g][f]) {
                                                e = true
                                            }
                                        }
                                    }
                                    if (!e) {
                                        this.enx[c + b] = this.leo[n][this.leo[n].length - 1];
                                        c += b
                                    } else {
                                        this.enx[c] = this.wpn[Math.floor(Math.random() * this.wpn.length)]
                                    }
                                } else {
                                    for (var q = 0; q < b; q++) {
                                        if (c + q < this.iiy || c + q > this.iiy + this.fpz) {
                                            this.enx[c + q] = this.wpn[Math.floor(Math.random() * this.wpn.length)]
                                        }
                                    }
                                    c += b - 1
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.iwc = function (b) {
        this.pjs = b
    };
    this.wtk = function () {
        return this.pjs
    };
    this.zcj = function () {
        for (var c = 0, b = this.yzd.length; c < b; c++) {
            if (this.yzd[c] >= 0) {
                return true
            }
        }
        return false
    };
    this.fha = function (b) {
        this.yzd = b
    };
    this.wfz = function (b) {
        return this.yzd
    };
    this.jph = function () {
        for (var d = 0, b = this.yzd.length; d < b; d++) {
            var c = this.pdl[this.yzd[d]];
            if (c) {
                c.bmb = true;
                c.add = c.loop;
                c.lpu = c.crq
            }
        }
        if (this.parent.csv === false) {
            this.qay()
        } else {
            this.parent.dky()
        }
        this.hxo = 0;
        this.swc = new Date().getTime();
        this.yjo()
    };
    this.zay = function () {
        for (var c = 0, b = this.pdl.length; c < b; c++) {
            if (this.pdl[c]) {
                this.pdl[c].bmb = false
            }
        }
        clearTimeout(this.ynw)
    };
    this.hcs = function () {
        for (var c = 0, b = this.pdl.length; c < b; c++) {
            if (this.pdl[c]) {
                this.pdl[c].add = false
            }
        }
    };
    this.vye = function () {
        for (var c = 0, b = this.pdl.length; c < b; c++) {
            if (this.pdl[c]) {
                this.pdl[c].lpu = true;
                this.pdl[c].hbw = 0
            }
        }
    };
    this.qwh = function () {
        for (var c = 0, b = this.pdl.length; c < b; c++) {
            if (this.pdl[c] && this.pdl[c].bmb) {
                return true
            }
        }
        return false
    };
    this.yjo = function () {
        var f = true,
            d = null;
        a.hxo++;
        for (var e = 0, b = a.yzd.length; e < b; e++) {
            d = a.pdl[a.yzd[e]];
            if (d && d.bmb) {
                d.hbw = (d.hbw < d.rcd - 1) ? d.hbw + 1 : (d.lpu) ? 0 : d.hbw;
                if ((d.hbw === 0 && d.add === false) || (d.hbw === d.rcd - 1 && d.lpu === false)) {
                    d.bmb = false
                }
                if (f === true && d.bmb === true) {
                    f = false
                }
            }
        }
        if (a.parent.csv === false) {
            a.qay()
        } else {
            a.parent.dky()
        }
        if (f === false) {
            var c = (a.hxo * a.dnq - (new Date().getTime() - a.swc));
            if (c < 2) {
                c = 0
            }
            a.ynw = setTimeout(a.yjo, c)
        } else {
            clearTimeout(a.ynw);
            a.parent.zon()
        }
    };
    this.rjj = function (d) {
        for (var c = 0, b = d.length; c < b; c++) {
            if (d[c]) {
                this.pdl[c] = {};
                this.pdl[c].hvf = d[c].hvf;
                this.pdl[c].loop = d[c].loop;
                this.pdl[c].crq = d[c].crq;
                this.pdl[c].rcd = this.pdl[c].hvf.width / this.width;
                this.pdl[c].hbw = 0;
                this.pdl[c].bmb = false;
                this.pdl[c].add = false;
                this.pdl[c].lpu = true
            }
        }
    };
    this.wdu = function (b, c, d) {
        this.wfg = b;
        this.rfl = c;
        this.hlg = d
    };
    this.aks = function (b) {
        this.jtb = b
    };
    this.cre = function (f, e, b, d, c) {
        if (e == null || f < 0) {
            return
        }
        this.gcs[f] = {
            hvf: e,
            hbw: 0,
            rcd: e.width / this.width,
            loop: b,
            crq: d,
            qru: c
        }
    };
    this.eot = function () {
        return this.gcs
    };
    this.ijp = function (f, e, b, d, c) {
        if (e == null || f < 0) {
            return
        }
        this.liw[f] = {
            hvf: e,
            hbw: 0,
            rcd: e.width / this.width,
            loop: b,
            crq: d,
            qru: c
        }
    };
    this.ise = function () {
        return this.liw
    };
    this.jzh = function (g, c) {
        this.leo = [];
        this.wpn = [];
        for (var f = 0, b = g.length; f < b; f++) {
            this.leo[f] = [];
            for (var e = 0, d = g[f].length; e < d; e++) {
                this.leo[f][e] = g[f][e]
            }
        }
        for (var f = 0, b = c.length; f < b; f++) {
            this.wpn[f] = c[f]
        }
    };
    this.yis = null;
    this.vvj = null
}
wud.prototype = new rom;
neg.tcp = {
    jsj: {
        qyg: 0,
        vwc: 1,
        csy: 2,
        fst: 3,
        itt: 4,
        eny: 5,
        nwd: 6,
        duo: 7,
        vqj: 8,
        ezz: 9,
        eva: 10,
        xlc: 11,
        kra: 12,
        imm: 13,
        ewe: 14,
        zxi: 15,
        hxr: 16,
        rxv: 20,
        dlo: 21,
        hju: 22,
        fif: 23,
        bom: 24,
        vvn: 25,
        wfn: 30,
        fvv: 31,
        hev: 32,
        cxc: 33,
        ndo: 68
    }
};

function dwo() {
    this.hxb = null;
    this.zpm = null;
    this.eak = null;
    this.ogp = null;
    this.cxy = null;
    this.typ = [];
    this.pyn = null;
    this.rjo = null;
    this.rue = null;
    this.aqc = null;
    this.ijr = null;
    this.noq = null;
    this.yya = null;
    this.atn = null;
    this.osu = [];
    this.aoc = [];
    this.win = 0;
    this.aub = 1;
    this.zlq = 0;
    this.totalBet = 1000;
    this.zjm = [];
    this.gwx = 0;
    this.rgr = 0;
    this.gzg = 10;
    this.dgi = 0;
    this.bqv = 0;
    this.lca = [];
    this.yuz = 0;
    this.jwy = -1;
    this.bzu = -1;
    this.nxj = -1;
    this.r1 = [];
    this.r2 = [];
    this.r3 = [];
    this.r4 = [];
    this.r5 = [];
    this.r6 = [];
    this.r7 = [];
    this.r8 = [];
    this.r9 = [];
    this.bvg = [];
    this.iac = [];
    this.xmz = [];
    this.ene = [];
    this.ljz = [];
    this.zlt = [];
    this.pky = 3;
    this.frf = 5;
    this.lot = [];
    this.ryj = 1;
    this.dao = 1;
    this.ffz = 1;
    this.cwa = [];
    this.rlh = null;
    this.bee = false;
    this.noc = 0;
    this.gvv = 1;
    this.ccm = 0;
    this.zlc = 0;
    this.bpo = 0;
    this.cii = 0;
    this.pwc = true;
    this.ykc = false;
    this.oyu = false;
    this.ovr = false;
    this.vuj = false;
    this.guq = false;
    this.jcx = false;
    this.mip = 1;
    this.cpd = true;
    this.cmz = "";
    this.whe = false;
    this.ebw = false;
    this.mtv = false;
    this.ftl = true;
    this.npo = false;
    this.igw = 0;
    this.boo = 0;
    this.ova = 0;
    this.vac = "";
    this.nbn = "";
    this.uce = "";
    this.wxz = null;
    this.qlj = true;
    this.xwh = false;
    this.pex = false;
    this.zyy = 20;
    this.oub = true;
    this.nkh = false;
    this.wpw = false;
    this.lrz = [15, 20, 25, 30, 35];
    this.jfe = [8, 8, 8, 8, 8];
    this.are = [0, 0, 0, 0, 0];
    this.aqb = this.lrz;
    this.rnb = 16;
    this.uvb = 16;
    this.spd = this.rnb;
    this.cdp = 12;
    this.xkr = 0;
    this.eua = 0;
    this.oik = [];
    this.dkd = true;
    this.fge = false;
    this.kbc = false;
    this.thn = false;
    this.xew = true;
    this.kwo = 0;
    this.mxi = 0;
    this.zno = [];
    this.wpb = true;
    this.ibw = false;
    this.slq = false;
    this.cox = false;
    this.nhg = false;
    this.vnt = false;
    this.fdu = 1;
    this.mza = 400;
    this.ztg = 200;
    this.ytz = 100;
    this.tzo = true;
    this.kbz = true;
    this.bid = false;
    this.isc = [];
    this.epg = 50;
    this.tqt = null;
    this.vdy = null;
    this.xgn = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ];
    this.iog = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ];
    this.tlm = false;
    this.ake = 0;
    this.zjk = 0;
    this.snt = -1;
    this.hvm = 0;
    this.qnr = false;
    this.cti = false;
    this.wzs = -1;
    this.xen = false;
    this.upc = true;
    this.nal = 3;
    this.inq = false;
    this.aqz = 0;
    this.iet = true;
    this.yax = 330;
    this.udq = [];
    this.spz = null;
    this.ynx = null;
    this.cig = [
        [2, 2, 2, 2, 2],
        [1, 1, 1, 1, 1],
        [3, 3, 3, 3, 3],
        [1, 2, 3, 2, 1],
        [3, 2, 1, 2, 3]
    ];
    this.qms = [];
    this.rzw = 1;
    this.jrg = 5;
    this.umw = 1;
    this.mhs = 5;
    this.mcr = true;
    this.gwn = 0;
    this.kko = 0;
    this.qtx = 30;
    this.cge = 50;
    this.ghy = false;
    this.uyh = 0;
    this.sqx = 0;
    this.gey = false;
    this.avq = true;
    this.qxm = 0;
    this.css = 0;
    this.fby = false;
    this.xry = 0;
    this.yrb = false;
    this.czm = true;
    this.cpk = false;
    this.ryz = false;
    this.fbr = null;
    this.zmp = false;
    this.oxi = true;
    this.owd = 0;
    this.srt = 0;
    this.say = 0;
    this.efr = 0;
    this.mgx = true;
    this.xfs = null;
    this.ukh = false;
    this.slb = false;
    this.wll = true;
    this.ous = "";
    this.yrl = false;
    this.hji = -1;
    this.mdo = 0;
    this.txy = 0;
    this.yru = 0;
    this.omx = 0;
    this.id = 0;
    this.nzk = 0;
    this.qsn = 0;
    this.imr = 0;
    this.bnz = 0;
    this.wrr = 0;
    this.huq = -1;
    this.wyg = 0;
    this.dxb = 0;
    this.psr = -1;
    this.pfw = 0;
    this.zwh = 0;
    this.jdi = -1;
    this.pld = function (b) {
        if (!neg.tlo.ict) {
            neg.tlv.pld(b)
        }
    };
    this.coz = function () {
        var b = new clb();
        b.dcf();
        return b
    };
    this.oto = function () {
        this.lwq = new dmo()
    };
    this.zkt = function () {
        this.mvp();
        var f = [];
        if (!(this.igw > 0 && this.boo < this.igw)) {
            while (this.zlq < this.zve()) {
                this.zlq++
            }
            var e = this.nfx(this.oyu);
            if (this.zlq > e) {
                var d = (e < 0) ? 0 : e;
                this.zlq = d
            }
        }
        this.aub = this.zjm[this.zlq];
        this.totalBet = this.ffv();
        this.gfd();
        this.otr();
        this.mcf();
        for (var c = 0, b = this.uhx.nst("symb"); c < b; c++) {
            this.oik[c] = this.uhx.xzk("symb" + c)
        }
        if (neg.epl.value38) {
            f[neg.os.xnn] = "w";
            f[neg.os.fhe] = "l";
            f[neg.os.uoa] = "m";
            f[neg.os.gjw] = "i";
            f[neg.os.fis] = "a";
            this.dkd = neg.epl.value38[f[neg.tlv.dez]]
        }
    };
    this.twe = function () {
        this.tqp();
        this.pwu();
        this.lek();
        this.vie();
        this.zvb();
        this.ike();
        if (this.czm) {
            this.dni()
        }
        if (this.don.psf) {
            this.lkc();
            this.phm()
        }
        if (this.don.wst && !(this.igw > 0 && this.boo < this.igw)) {
            this.qor();
            if (this.ipc()) {
                this.ohh()
            }
        }
        if (this.don.ecp) {
            this.flv();
            if (!this.don.aom) {
                this.phg()
            }
        }
        if (this.don.vmf) {
            this.gfg()
        }
        if (this.ict) {
            this.zrf()
        } else {
            this.qlh();
            if (this.don.kkg) {
                this.jfp()
            }
            if (this.hgj()) {
                this.tcv()
            }
            if (this.flg()) {
                this.qqi()
            }
            if (this.qmr() != null && !this.rok()) {
                this.ieu(this.qmr())
            }
        }
        if (!(this.ict && !this.vpo)) {
            this.smw();
            this.rfq()
        }
        if (this.don.aom) {
            this.lou(this.qmr())
        }
        this.uxw();
        if (!this.ict) {
            this.xqo();
            this.vqd()
        }
        if (!this.vpo) {
            this.soy()
        }
    };
    this.yoc = function () {
        if (!this.imu) {
            if (this.ruz === false) {
                this.hen.style.marginTop = (-this.height / 2 + this.dkr()) + "px";
                this.hen.style.marginLeft = (-this.width / 2) + "px"
            } else {
                this.hen.style.left = "0px";
                this.hen.style.top = "0px";
                this.hen.style.marginTop = ((this.zjr - this.height) / 2 + this.dkr()) + "px";
                this.hen.style.marginLeft = ((this.aeu - this.width) / 2) + "px"
            }
            this.hen.style.width = (this.width > this.aeu) ? this.aeu + "px" : this.width + "px";
            this.hen.style.height = (this.height > this.zjr) ? this.zjr + "px" : this.height + "px";
            this.canvas.width = Math.round(this.width);
            this.canvas.height = Math.round(this.height);
            this.context2D = this.canvas.getContext("2d");
            this.ijr = document.createElement("canvas");
            this.ijr.width = this.don.hii.cij.width;
            this.ijr.height = this.don.hii.cij.height;
            this.noq = this.ijr.getContext("2d");
            if (this.rmk() === true && typeof WebGL2D != "undefined") {
                try {
                    this.cod = document.getElementById("canvas2");
                    this.cod.width = Math.round(this.don.cod.cij.width);
                    this.cod.height = Math.round(this.don.cod.cij.height);
                    WebGL2D.enable(this.cod);
                    this.rwr = this.cod.getContext("webgl-2d");
                    this.csv = true;
                    this.yya = document.createElement("canvas");
                    this.yya.width = this.don.hii.cij.width;
                    this.yya.height = this.don.hii.cij.height;
                    this.atn = this.yya.getContext("2d")
                } catch (b) {
                    this.cod = null;
                    this.rwr = null;
                    this.csv = false
                }
            }
            if (this.vxi) {
                this.vxi.style.width = this.width + "px";
                this.vxi.style.height = this.height + "px"
            }
            this.offsetLeft = this.hen.offsetLeft;
            this.offsetTop = this.hen.offsetTop;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.imu = true
        }
    };
    this.uxw = function () {};
    this.flv = function () {
        dwo.prototype.flv.call(this);
        var b = this.oxt.dgc("topi");
        try {
            if (b) {
                if (neg.epl.value57 === neg.ui.omt || this.qmr() != null) {
                    b.pko("language", this.uhx.xzk("icon_l"), sessionStorage.sessionValue1, [neg.language.EN, neg.language.DE, neg.language.RU, neg.language.EE, neg.language.ES, neg.language.TR, neg.language.CZ, neg.language.GR, neg.language.AT, neg.language.US, neg.language.BG, neg.language.CO, neg.language.MX, neg.language.CL, neg.language.VE, neg.language.BR, neg.language.GE, neg.language.HU, neg.language.RO, neg.language.PT, neg.language.FR, neg.language.HR, neg.language.IT, neg.language.SE])
                }
                if (this.rok() === false) {
                    b.paj("help", new String("?"), true)
                }
                if (neg.epl.value27 && this.kvi) {
                    b.pko("audio", this.uhx.xzk("icon_a"), this.yje[this.ytm], this.yje);
                    if (this.gat() === true) {
                        b.paj("melody", this.uhx.xzk("icon_m"), this.ftl)
                    }
                }
                if (sessionStorage.sessionValue14 == "true" && neg.tlv.wyn()) {
                    b.paj("fullscreen", this.uhx.xzk("icon_f"), this.asb)
                }
                if (neg.epl.value28 && this.oxi) {
                    b.paj("turbo", this.uhx.xzk("icon_t"), this.zmp)
                }
                b.paj("auto", this.uhx.xzk("icon_as"), this.vuj);
                b.paj("gamble", this.uhx.xzk("icon_g"), this.ryz)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.phg = function () {
        dwo.prototype.phg.call(this);
        var c = this.oxt.dgc("topb");
        try {
            if (c) {
                if ((neg.epl.value5.length > 1) && (neg.epl.value57 === neg.ui.omt || this.qmr() != null)) {
                    c.sfc("language", this.language.language, this.iua(neg.epl.value5[this.qny]), this.cwr, this.lwq.language, 0, 1)
                }
                if (neg.epl.value27 && this.kvi) {
                    c.sfc("audio", this.language.audio, this.uhx.xzk("btn_a"), this.bvn, this.lwq.audio, this.ytm, this.yje.length);
                    if (this.gat() === true) {
                        c.sfc("melody", this.language.hwj, this.uhx.xzk("btn_mu"), this.lgj, this.lwq.eqj, (this.ftl) ? 1 : 0, 2)
                    }
                }
                if (sessionStorage.sessionValue14 == "true" && neg.tlv.wyn()) {
                    c.sfc("fullscreen", this.language.asb, this.uhx.xzk("btn_f"), (neg.tlv.fzg) ? this.cbn : this.mht, this.lwq.asb, (this.asb) ? 1 : 0, 2)
                }
                if (neg.epl.value28 && this.oxi) {
                    c.sfc("turbo", this.language.zmp, this.uhx.xzk("btn_t"), this.ydc, this.lwq.zmp, (this.zmp) ? 1 : 0, 2)
                }
                c.ogw("help", this.language.ctt, this.uhx.xzk("btn_p"), this.rbw, this.lwq.ijo);
                if (this.nbn != "" && (neg.epl.value81 && neg.epl.value81.g === true)) {
                    c.ogw("rules", this.language.nob, this.uhx.xzk("btn_gr"), this.xjd, this.lwq.kfb)
                }
                if (neg.epl.value12 && !this.kvu()) {
                    c.ogw("history", this.language.law, this.uhx.xzk("btn_h"), this.lda, this.lwq.law)
                }
                if (neg.epl.value36 && !this.kvu()) {
                    c.ogw("statistic", this.language.uhj, this.uhx.xzk("btn_st"), this.lvy, this.lwq.uhj)
                }
                c.grl()
            }
        } catch (b) {
            console.error(b)
        }
    };
    this.lou = function (b) {
        dwo.prototype.lou.call(this, b);
        var d = this.oxt.dgc("settings"),
            e = "",
            c = 0;
        if (d) {
            if (neg.epl.value5.length > 1) {
                c++;
                d.sfc("language", this.language.language, this.iua(neg.epl.value5[this.qny]), this.cwr, 0, 1)
            }
            if (neg.epl.value27 && this.kvi) {
                c++;
                d.sfc("audio", this.language.audio, this.uhx.xzk("btn_a"), this.bvn, this.ytm, this.yje.length);
                if (this.gat() === true) {
                    c++;
                    d.sfc("melody", this.language.hwj, this.uhx.xzk("btn_mu"), this.lgj, (this.ftl) ? 1 : 0, 2)
                }
            }
            if (sessionStorage.sessionValue14 == "true" && neg.tlv.wyn()) {
                c++;
                d.sfc("fullscreen", this.language.asb, this.uhx.xzk("btn_f"), this.cbn, (this.asb) ? 1 : 0, 2)
            }
            if (neg.epl.value28 && this.oxi && c < 4) {
                d.sfc("turbo", this.language.zmp, this.uhx.xzk("btn_t"), this.ydc, (this.zmp) ? 1 : 0, 2)
            }
            d.sfc("gamble", this.language.ryz, this.uhx.xzk("btn_g"), this.jel, (this.ryz) ? 1 : 0, 2);
            if (this.shd[this.kre] === neg.gzo.oen) {
                e = this.language.left
            } else {
                if (this.shd[this.kre] === neg.gzo.dbj) {
                    e = this.language.nmb
                } else {
                    if (this.shd[this.kre] === neg.gzo.udx) {
                        e = this.language.rpm
                    }
                }
            }
            d.sfc("adjustment", e, this.uhx.xzk("btn_l"), this.cvd, (this.hvx === neg.don.pud) ? 0 : 1, 2);
            d.kpr("help", this.language.ijo, this.uhx.xzk("btn_p"), this.rbw);
            if (this.nbn != "" && (neg.epl.value81 && neg.epl.value81.g === true)) {
                d.kpr("rules", this.language.etp, this.uhx.xzk("btn_gr"), this.xjd)
            }
            if (neg.epl.value12 && !this.kvu()) {
                d.kpr("history", this.language.law, this.uhx.xzk("btn_h"), this.lda)
            }
            if (neg.epl.value36 && !this.kvu()) {
                d.kpr("statistic", this.language.uhj, this.uhx.xzk("btn_st"), this.lvy)
            }
            d.ciu = this.ipc();
            d.dxu(this.don.sqq);
            d.mwg(this.don.sqq);
            d.gzv(this.style.sqq);
            d.hqp(this.language, true)
        }
    };
    this.tqp = function () {
        var b = (this.ict && this.lre) ? this.don.gpx : this.don.cmi;
        this.pyn = new fvf();
        this.pyn.parent = this;
        this.pyn.mgx = this.mgx;
        this.pyn.dcf(b.cij, null, this.context2D);
        this.pyn.dxu(b, this.style.cmi);
        this.pyn.ffd(this.tqt, 0);
        this.pyn.ffd(this.vdy, 1)
    };
    this.ike = function () {};
    this.qlh = function () {};
    this.rfq = function () {
        this.rue.opq(this.don.tbm, this.style.tbm, this.uhx.xzk("btn_s"))
    };
    this.bzv = function () {};
    this.swx = function () {};
    this.jfp = function () {
        var b = new djm();
        b.dcf(this.don.top.cij, null, this.context2D);
        b.parent = this;
        this.oxt.pbt("tops", b)
    };
    this.lek = function () {
        this.udq = []
    };
    this.pwu = function () {
        var e = [],
            c = (this.state == neg.tcp.jsj.nwd || this.state == neg.tcp.jsj.eva || this.state == neg.tcp.jsj.xlc || this.state == neg.tcp.jsj.kra || this.state == neg.tcp.jsj.ewe) ? true : false;
        if (c) {
            if (this.pwc) {
                e = this.rlh
            } else {
                e = this.osu
            }
        } else {
            e = this.osu
        }
        this.hxb = new wud();
        this.zpm = new wud();
        this.eak = new wud();
        this.ogp = new wud();
        this.cxy = new wud();
        this.hxb.xbu = this.uhx.szx("stop1");
        this.zpm.xbu = this.uhx.szx("stop2");
        this.eak.xbu = this.uhx.szx("stop1");
        if (this.ogp != null) {
            this.ogp.xbu = this.uhx.szx("stop2")
        }
        if (this.cxy != null) {
            this.cxy.xbu = this.uhx.szx("stop1")
        }
        if (this.csv === false) {
            this.hxb.dcf(this.don.hxb.cij, this.context2D, null, (this.dkd) ? this.don.hxb.ofa : this.don.hxb.wiv, this.oik, this.pky, this.r1, this.aqb[0])
        } else {
            this.hxb.dcf(this.don.hxb.ufp, this.rwr, null, (this.dkd) ? this.don.hxb.ofa : this.don.hxb.wiv, this.oik, this.pky, this.r1, this.aqb[0])
        }
        this.hxb.zmm(e[0], true);
        if (this.csv === false) {
            this.zpm.dcf(this.don.zpm.cij, this.context2D, null, (this.dkd) ? this.don.zpm.ofa : this.don.zpm.wiv, this.oik, this.pky, this.r2, this.aqb[1])
        } else {
            this.zpm.dcf(this.don.zpm.ufp, this.rwr, null, (this.dkd) ? this.don.zpm.ofa : this.don.zpm.wiv, this.oik, this.pky, this.r2, this.aqb[1])
        }
        this.zpm.zmm(e[1], true);
        if (this.csv === false) {
            this.eak.dcf(this.don.eak.cij, this.context2D, null, (this.dkd) ? this.don.eak.ofa : this.don.eak.wiv, this.oik, this.pky, this.r3, this.aqb[2])
        } else {
            this.eak.dcf(this.don.eak.ufp, this.rwr, null, (this.dkd) ? this.don.eak.ofa : this.don.eak.wiv, this.oik, this.pky, this.r3, this.aqb[2])
        }
        this.eak.zmm(e[2], true);
        if (this.csv === false) {
            this.ogp.dcf(this.don.ogp.cij, this.context2D, null, (this.dkd) ? this.don.ogp.ofa : this.don.ogp.wiv, this.oik, this.pky, this.r4, this.aqb[3])
        } else {
            this.ogp.dcf(this.don.ogp.ufp, this.rwr, null, (this.dkd) ? this.don.ogp.ofa : this.don.ogp.wiv, this.oik, this.pky, this.r4, this.aqb[3])
        }
        this.ogp.zmm(e[3], true);
        if (this.csv === false) {
            this.cxy.dcf(this.don.cxy.cij, this.context2D, null, (this.dkd) ? this.don.cxy.ofa : this.don.cxy.wiv, this.oik, this.pky, this.r5, this.aqb[4])
        } else {
            this.cxy.dcf(this.don.cxy.ufp, this.rwr, null, (this.dkd) ? this.don.cxy.ofa : this.don.cxy.wiv, this.oik, this.pky, this.r5, this.aqb[4])
        }
        this.cxy.zmm(e[4], true);
        this.typ = [this.hxb, this.zpm, this.eak, this.ogp, this.cxy];
        this.wxz = [true, true, true, true, true];
        for (var d = 0, b = this.typ.length; d < b; d++) {
            this.typ[d].parent = this;
            this.typ[d].gzv(this.style.xbo);
            this.typ[d].aks(this.uhx.xzk("reelfront"))
        }
    };
    this.smw = function () {
        this.rue = new cmr();
        this.rue.dcf(this.don.tbm.cij, null, this.context2D);
        this.rue.parent = this;
        this.rue.olr(false);
        this.rue.mwg(this.don.tbm);
        this.rue.gzv(this.style.tbm)
    };
    this.dni = function () {
        var c = this.don.ryz,
            b = this.uhx.xzk("g_back");
        if (this.ict && this.lre && this.style.tlo.puz) {
            c = this.don.yio;
            b = this.uhx.xzk("m_g_back")
        }
        this.aqc = new zei();
        this.aqc.parent = this;
        this.aqc.dcf(c.cij, null, this.context2D);
        this.aqc.hvf = b;
        this.aqc.dxu(c);
        this.aqc.gzv(this.style.ryz);
        this.aqc.qei();
        this.aqc.ffd(this.fbr, 0);
        this.aqc.wmg(false)
    };
    this.vie = function () {};
    this.zvb = function () {
        this.rjo = this.jfs();
        this.rjo.parent = this;
        this.rjo.spz = this.spz;
        this.rjo.kex = this.tmv;
        this.rjo.cig = this.cig;
        this.rjo.ynx = this.ynx;
        this.rjo.nal = this.nal;
        this.rjo.frv = this.yax;
        this.rjo.woh = this.udq;
        this.rjo.qlo = this.tlm;
        this.rjo.jsl = (this.qnr == true || this.cti == true);
        this.rjo.wlo = this.iet;
        this.rjo.tzo = this.tzo;
        this.rjo.mwg(this.don.dvq);
        this.rjo.gzv(this.style.dvq)
    };
    this.qor = function () {
        var b = new gaq();
        b.dcf(this.don.hmm.cij, null, this.context2D);
        b.parent = this;
        b.ktp = this.language.aub;
        b.jht = this.ugr;
        b.qfs = this.lwq.aie.xfh;
        b.akg = this.lwq.ieq.xfh;
        b.shp = this.uhx.xzk("effect");
        b.mwg(this.don.hmm);
        b.gzv(this.style.gou);
        b.zkt(this.zjm, this.zve(), this.nfx(false));
        b.ked(this.ltl(), this.nfx(true));
        b.owt(this.zlq, false);
        b.wmg(false);
        this.oxt.pbt("betsel", b)
    };
    this.ohh = function () {
        this.cwa = [];
        for (var b = this.ryj; b <= this.dao;) {
            this.cwa.push(b);
            b += this.ffz
        }
        var c = new gnm();
        c.dcf(this.don.qen.cij, null, this.context2D);
        c.parent = this;
        c.ktp = this.language.gzg;
        c.jht = this.giu;
        c.qfs = this.lwq.xph.xfh;
        c.akg = this.lwq.wil.xfh;
        c.shp = this.uhx.xzk("effect");
        c.mwg(this.don.qen);
        c.gzv(this.style.gou);
        c.zkt(this.cwa, 0, this.cwa.length - 1);
        c.zod(this.gzg, false);
        c.wmg(false);
        this.oxt.pbt("linesel", c)
    };
    this.gfg = function () {
        this.oxt.pbt("llinep", this.atc(this.don.ozh.cij.x, this.don.ozh.cij.y, this.uhx.xzk("winlines"), this.rzw, this.jrg, this.don.ozh));
        this.oxt.pbt("rlinep", this.atc(this.don.qhr.cij.x, this.don.qhr.cij.y, this.uhx.xzk("winlines"), this.umw, this.mhs, this.don.qhr));
        this.oxt.evt("llinep", "#czx", [this.gzg]);
        this.oxt.evt("rlinep", "#czx", [this.gzg])
    };
    this.lkc = function () {
        var c = new zgk(),
            b = this.uhx.xzk("m_win");
        if (this.ict && this.lre && this.style.tlo.puz) {
            b = this.uhx.xzk("m_m_win")
        }
        c.dcf(this.don.ukx.cij, this.context2D, null, b, "");
        c.parent = this;
        c.mwg(this.don.ukx);
        c.gzv(this.style.ukx);
        c.wmg(false);
        this.oxt.pbt("winp", c)
    };
    this.phm = function () {};
    this.zrf = function () {
        var b = new zta();
        b.dcf(this.don.law.cij, null, this.context2D);
        b.parent = this;
        b.dxu(this.don.law);
        b.gzv(this.style.law);
        this.oxt.pbt("history", b)
    };
    this.atc = function (b, j, d, g, c, e) {
        var f = new cix();
        f.dcf(new flw(b, j, 0, 0), this.context2D);
        f.vdg = this.qms;
        f.parent = this;
        f.qbq = g;
        f.iiw = c;
        f.mwg(e);
        f.uuq(d);
        f.wmg(true);
        return f
    };
    this.jfs = function () {
        var e = [];
        for (var d = 0, b = this.uhx.nst("symb"); d < b; d++) {
            e[d] = this.uhx.xzk("symb" + d)
        }
        var c = new vwu();
        c.dcf(this.don.dvq.cij, null, this.context2D);
        c.kns = e;
        c.qxd = this.uhx.xzk("reelfront");
        c.wmg(false);
        return c
    };
    this.eoq = function () {
        if (this.kbc === true) {
            for (var c = 0, b = this.typ.length; c < b; c++) {
                if (!this.csv) {
                    this.typ[c].wdu(this.ijr, this.don.hii.rnr, this.don.hii.ncp)
                }
            }
            if (this.rjo) {
                this.rjo.wdu(this.ijr, this.don.hii.rnr + this.rjo.x, this.don.hii.ncp + this.rjo.y)
            }
        }
        if (this.pyn) {
            this.pyn.wdu(this.ijr, this.don.hii.rnr, this.don.hii.ncp)
        }
    };
    this.pmi = function (d, c, b) {
        this.pld({
            type: "gameDataLoaded",
            sender: this.mvb,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                success: true
            }
        });
        this.yrr = true;
        this.state = d;
        this.fgk = b;
        clearInterval(this.bki);
        if (this.kvi) {
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                this.ytm = 0
            }
            if (this.uhx.cyp === true) {
                this.lft(this.yje[this.ytm])
            } else {
                this.awd((this.yje[this.ytm] === 0))
            }
        }
        if (this.rwc === true) {
            this.blx = true
        }
        this.zkt();
        this.twe();
        this.ofu();
        this.noj();
        if (this.aqc) {
            this.aqc.cqr.evt("history", "#itq", [c])
        }
        this.riq();
        window.xzm(this.dif)
    };
    this.dif = function () {
        neg.tlo.cne(neg.tlo.fgk);
        neg.tlo.uiw = true;
        neg.tlo.byb();
        neg.tlo.jkf();
        neg.tlo.eoq();
        neg.tlo.qay();
        if (neg.tlo.rwc === true) {
            neg.tlo.xpc(true)
        }
        if (neg.tlv.dez === neg.os.fis && neg.tlv.egn !== neg.wpv.hih) {
            neg.tlo.kfs([{
                xjv: neg.ieh.xmx
            }])
        } else {
            if (neg.tlo.igw > 0) {
                if (neg.tlo.boo === 0) {
                    neg.tlo.kfs([{
                        xjv: neg.ieh.zsh
                    }])
                } else {
                    if (neg.tlo.boo < neg.tlo.igw) {
                        neg.tlo.kfs([{
                            xjv: neg.ieh.zdt
                        }])
                    }
                }
            } else {
                neg.tlo.met(neg.tlo.state)
            }
        }
        if (neg.epl.value37 && !neg.tlo.kvu()) {
            neg.tlo.ufv()
        }
        if (neg.tlo.flg()) {
            setTimeout(neg.tlo.qay, 20)
        }
    };
    this.caz = function () {
        this.nvf = new kel().dcf(this, neg.epl.value6)
    };
    this.sqp = function () {
        this.nvf = new zwo().dcf(this, neg.epl.value6)
    };
    this.jgs = function (q) {
        if (q.preventDefault) {
            q.preventDefault()
        }
        if (q.stopPropagation) {
            q.stopPropagation()
        }
        if (this.blx) {
            return
        }
        var k = 0,
            j = 0,
            u = false,
            l = false,
            f = false,
            v = this.oxt.dgc("stats"),
            t = this.oxt.dgc("topb"),
            c = this.oxt.dgc("topi"),
            d = this.oxt.dgc("betsel"),
            n = this.oxt.dgc("linesel"),
            o = this.oxt.dgc("llinep"),
            w = this.oxt.dgc("rlinep"),
            z = this.oxt.dgc("finfop"),
            p = this.oxt.dgc("finfoc"),
            m = this.oxt.dgc("autop"),
            b = this.oxt.dgc("settings"),
            g = this.oxt.dgc("jwp");
        if (q.touches) {
            var e = q.touches[0];
            u = true;
            if (!this.ftg) {
                k = e.pageX - this.offsetLeft;
                j = e.pageY - this.offsetTop
            } else {
                k = Math.round((e.pageX - this.offsetLeft) / this.kvl);
                j = Math.round((e.pageY - this.offsetTop) / this.xwi)
            }
        } else {
            if (q.which != 1) {
                return
            }
            if (!this.ftg) {
                k = q.pageX - this.offsetLeft;
                j = q.pageY - this.offsetTop
            } else {
                k = Math.round((q.pageX - this.offsetLeft) / this.kvl);
                j = Math.round((q.pageY - this.offsetTop) / this.xwi)
            }
        }
        this.acw();
        if (m && m.cxw()) {
            if (m.jgs(k, j)) {
                return
            }
        }
        if (t && t.cxw()) {
            if (t.jgs(k, j)) {
                clearTimeout(this.pfw);
                return
            } else {
                f = true
            }
        }
        if (d) {
            if (d.cxw()) {
                if (d.jgs(k, j, u)) {
                    clearTimeout(this.pfw);
                    return
                } else {
                    l = true
                }
            }
        }
        if (n) {
            if (n.cxw()) {
                if (n.jgs(k, j, u)) {
                    clearTimeout(this.pfw);
                    return
                } else {
                    l = true
                }
            }
        }
        if (f) {
            this.qeh(this.pyn.hik(k, j, null));
            return
        } else {
            if (l) {
                if ((d && d.wtk()) && ((n && n.wtk()) || !n)) {
                    this.pqd(this.pyn.hik(k, j, null))
                }
                return
            }
        }
        if (this.ipc() && !this.npo && o && w) {
            if (o.jgs(k, j, l)) {
                return
            } else {
                if (w.jgs(k, j, l)) {
                    return
                }
            }
        }
        if (z) {
            if (z.jgs(k, j)) {
                return
            }
        }
        if (p) {
            if (p.jgs(k, j)) {
                return
            }
        }
        if (b && b.cxw()) {
            if (b.jgs(k, j)) {
                return
            }
        }
        if (c) {
            if (c.jgs(k, j, u)) {
                return
            }
        }
        if (v && v.cxw()) {
            if (v.jgs(k, j)) {
                return
            }
        }
        if (this.rue && this.rue.cxw()) {
            if (this.rue.jgs(k, j)) {
                return
            }
        }
        if (this.aqc && this.aqc.cxw()) {
            if (this.aqc.jgs(k, j)) {
                return
            }
        }
        if (g) {
            if (g.jgs(k, j)) {
                return
            }
        }
        if (this.pyn) {
            if (this.pyn.jgs(k, j, l)) {
                return
            }
        }
        for (var r = 0, s = this.typ.length; r < s; r++) {
            if (this.typ[r].jgs(k, j)) {
                return
            }
        }
    };
    this.mqw = function (j) {
        if (j.preventDefault) {
            j.preventDefault()
        }
        if (j.stopPropagation) {
            j.stopPropagation()
        }
        if (this.blx) {
            return
        }
        var k = this.oxt.dgc("topb"),
            d = this.oxt.dgc("autop"),
            g = this.oxt.dgc("settings"),
            c = this.oxt.dgc("betsel"),
            e = this.oxt.dgc("linesel");
        if (d && d.cxw()) {
            if (d.mqw()) {
                return
            }
        }
        if (c) {
            if (c.mqw()) {
                return
            }
        }
        if (e) {
            if (e.mqw()) {
                return
            }
        }
        if (this.rue && this.rue.cxw()) {
            if (this.rue.mqw()) {
                return
            }
        }
        if (this.aqc && this.aqc.cxw()) {
            if (this.aqc.mqw()) {
                return
            }
        }
        if (this.pyn) {
            if (this.pyn.mqw()) {
                return
            }
        }
        if (k) {
            if (k.mqw()) {
                return
            }
        }
        if (g) {
            if (g.mqw()) {
                return
            }
        }
        for (var f = 0, b = this.typ.length; f < b; f++) {
            if (this.typ[f].mqw()) {
                return
            }
        }
    };
    this.gor = function (c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.blx) {
            return
        }
        var k = false,
            e = false,
            l = this.oxt.dgc("topb"),
            b = this.oxt.dgc("betsel"),
            d = this.oxt.dgc("linesel"),
            g = this.oxt.dgc("finfop"),
            j = this.oxt.dgc("finfoc"),
            f = this.oxt.dgc("autop");
        if (f && f.cxw()) {
            if (f.gor(c.keyCode)) {
                return
            }
        }
        if (l) {
            if (l.gor(c.keyCode)) {
                clearTimeout(this.pfw);
                return
            } else {
                if (l.cxw() && l.wtk()) {
                    e = true
                }
            }
        }
        if (g) {
            if (g.gor()) {
                return
            }
        }
        if (j) {
            if (j.gor(c.keyCode)) {
                return
            }
        }
        if (b) {
            if (b.cxw()) {
                if (b.gor(c.keyCode)) {
                    clearTimeout(this.pfw);
                    return
                } else {
                    k = true
                }
            }
        }
        if (d) {
            if (d.cxw()) {
                if (d.gor(c.keyCode)) {
                    clearTimeout(this.pfw);
                    return
                } else {
                    k = true
                }
            }
        }
        if (e) {
            this.qeh(this.pyn.hik(null, null, c.keyCode));
            return
        } else {
            if (k) {
                if ((b && b.wtk()) && ((d && d.wtk()) || !d)) {
                    this.pqd(this.pyn.hik(null, null, c.keyCode))
                }
                return
            }
        }
        if (this.rue && this.rue.cxw()) {
            if (this.rue.gor(c.keyCode)) {
                return
            }
        }
        if (this.aqc && this.aqc.cxw()) {
            if (this.aqc.gor(c.keyCode)) {
                return
            }
        }
        if (this.pyn) {
            if (this.pyn.gor(c.keyCode)) {
                return
            }
        }
    };
    this.mnj = function (c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.blx) {
            return
        }
        var b = this.oxt.dgc("autop"),
            d = this.oxt.dgc("topb");
        if (b && b.cxw()) {
            if (b.mnj()) {
                return
            }
        }
        if (this.rue && this.rue.cxw()) {
            if (this.rue.mnj()) {
                return
            }
        }
        if (this.aqc && this.aqc.cxw()) {
            if (this.aqc.mnj()) {
                return
            }
        }
        if (this.pyn) {
            if (this.pyn.mnj(c.keyCode)) {
                return
            }
        }
        if (d) {
            if (d.mnj()) {
                return
            }
        }
    };
    this.rok = function () {
        return (neg.tlv.twu() && !this.ict)
    };
    this.cgo = function () {
        return (neg.tlv.twu() && !this.vpo)
    };
    this.gat = function () {
        return (this.mtv === true && this.uhx.cyp === true)
    };
    this.khe = function () {
        if (this.gat() === true) {
            this.uhx.onc("melody")
        }
    };
    this.mmc = function () {
        if (this.gat() === true) {
            this.uhx.yiv("melody")
        }
    };
    this.mxm = function (c, b) {
        if (this.gat() === true && this.ftl === true) {
            this.uhx.scw("melody", c, b)
        }
    };
    this.cnh = function () {
        return false
    };
    this.ijj = function () {
        return 1
    };
    this.gth = function () {
        return 0
    };
    this.dfo = function (b) {
        this.don = this.gij(b);
        this.width = this.don.canvas.cij.width;
        this.height = this.don.canvas.cij.height;
        this.ghh();
        this.asx();
        this.odm()
    };
    this.zqb = function () {
        this.style = new lun()
    };
    this.gij = function (b) {
        this.hvx = b;
        if (b == neg.don.vcm) {
            return new caq()
        } else {
            if (b == neg.don.asd) {
                return new sjo()
            } else {
                if (b == neg.don.xnf) {
                    return new whj()
                } else {
                    if (b == neg.don.cgk) {
                        return new mcu()
                    } else {
                        if (b == neg.don.icc) {
                            return new kfz()
                        } else {
                            if (b == neg.don.ovw) {
                                return new rtf()
                            } else {
                                if (b == neg.don.etq) {
                                    return new bfy()
                                } else {
                                    if (b == neg.don.urp) {
                                        return new aok()
                                    } else {
                                        if (b == neg.don.xya) {
                                            return new bnd()
                                        } else {
                                            if (b == neg.don.wso) {
                                                return new ksx()
                                            } else {
                                                if (b == neg.don.pud) {
                                                    return new gmz()
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
    this.odm = function () {};
    this.riw = function (b) {
        if (this.imu) {
            this.dwx();
            this.shy(b);
            this.eoq()
        } else {
            this.chl()
        }
    };
    this.dwx = function () {
        this.canvas.width = 0;
        if (this.ruz === false) {
            this.hen.style.marginTop = (-this.height / 2 + this.dkr()) + "px";
            this.hen.style.marginLeft = (-this.width / 2) + "px"
        } else {
            this.hen.style.left = "0px";
            this.hen.style.top = "0px";
            this.hen.style.marginTop = ((this.zjr - this.height) / 2 + this.dkr()) + "px";
            this.hen.style.marginLeft = ((this.aeu - this.width) / 2) + "px"
        }
        this.hen.style.width = (this.width > this.aeu) ? this.aeu + "px" : this.width + "px";
        this.hen.style.height = (this.height > this.zjr) ? this.zjr + "px" : this.height + "px";
        this.canvas.width = Math.round(this.width);
        this.canvas.height = Math.round(this.height);
        if (this.vxi) {
            this.vxi.style.width = this.width + "px";
            this.vxi.style.height = this.height + "px"
        }
        this.width = this.canvas.width;
        this.height = this.canvas.height
    };
    this.shy = function (b) {
        this.evh();
        this.aca();
        this.abe();
        this.ydf();
        this.tdp();
        if (!(this.ict && !this.vpo)) {
            this.rxf()
        }
        if (!this.ict) {
            this.vvf();
            if (this.don.kkg) {
                if (this.oxt.dgc("tops")) {
                    this.wbt()
                } else {
                    this.jfp()
                }
            } else {
                this.oxt.kqb("tops")
            }
            if (this.hgj()) {
                this.pqz()
            }
            this.bsn();
            if (this.flg()) {
                this.iqg()
            }
        } else {
            this.zrf()
        }
        if (this.don.psf) {
            this.pje();
            this.vfy()
        }
        if (this.don.wst) {
            this.ipd();
            if (this.ipc()) {
                this.cgy()
            }
        }
        if (this.don.ecp) {
            this.mwc();
            if (!this.don.aom) {
                this.pgq()
            }
        }
        if (this.don.vmf) {
            this.pju()
        }
        if (this.don.aom) {
            this.lsz()
        }
        this.cbv();
        if (b) {
            this.kuo()
        }
        this.hja();
        this.jsh();
        this.feg()
    };
    this.evh = function () {
        if (this.pyn) {
            var b = (this.ict && this.lre) ? this.don.gpx : this.don.cmi;
            this.pyn.pxx(b.cij);
            this.pyn.mwg(b, this.bee);
            if (this.don.xrl === true) {
                this.pyn.gzv(this.style.cmi, this.bee)
            }
        }
    };
    this.aca = function () {
        if (this.hxb) {
            this.hxb.pxx((this.csv === false) ? this.don.hxb.cij : this.don.hxb.ufp, (this.dkd) ? this.don.hxb.ofa : this.don.hxb.wiv)
        }
        if (this.zpm) {
            this.zpm.pxx((this.csv === false) ? this.don.zpm.cij : this.don.zpm.ufp, (this.dkd) ? this.don.zpm.ofa : this.don.zpm.wiv)
        }
        if (this.eak) {
            this.eak.pxx((this.csv === false) ? this.don.eak.cij : this.don.eak.ufp, (this.dkd) ? this.don.eak.ofa : this.don.eak.wiv)
        }
        if (this.ogp) {
            this.ogp.pxx((this.csv === false) ? this.don.ogp.cij : this.don.ogp.ufp, (this.dkd) ? this.don.ogp.ofa : this.don.ogp.wiv)
        }
        if (this.cxy) {
            this.cxy.pxx((this.csv === false) ? this.don.cxy.cij : this.don.cxy.ufp, (this.dkd) ? this.don.cxy.ofa : this.don.cxy.wiv)
        }
    };
    this.pje = function () {
        var b = this.oxt.dgc("winp");
        if (b) {
            b.pxx(this.don.ukx.cij);
            b.mwg(this.don.ukx)
        }
    };
    this.vfy = function () {};
    this.abe = function () {
        if (this.rjo) {
            this.rjo.pxx(this.don.dvq.cij);
            this.rjo.spz = this.spz;
            this.rjo.ynx = this.ynx;
            this.rjo.mwg(this.don.dvq)
        }
    };
    this.pju = function () {
        var c = this.oxt.dgc("llinep"),
            b = this.oxt.dgc("rlinep");
        if (c) {
            c.x = this.don.ozh.cij.x;
            c.y = this.don.ozh.cij.y;
            c.mwg(this.don.ozh)
        }
        if (b) {
            b.x = this.don.qhr.cij.x;
            b.y = this.don.qhr.cij.y;
            b.mwg(this.don.qhr)
        }
    };
    this.ipd = function () {
        var b = this.oxt.dgc("betsel");
        if (b) {
            b.pxx(this.don.hmm.cij);
            b.mwg(this.don.hmm)
        }
    };
    this.cgy = function () {
        var b = this.oxt.dgc("linesel");
        if (b) {
            b.pxx(this.don.qen.cij);
            b.mwg(this.don.qen)
        }
    };
    this.wbt = function () {
        var b = this.oxt.dgc("tops");
        if (b) {
            b.pxx(this.don.top.cij);
            b.wmg(this.don.kkg)
        }
    };
    this.rxf = function () {
        if (this.rue) {
            this.rue.pxx(this.don.tbm.cij);
            this.rue.mwg(this.don.tbm);
            if (this.don.xrl === true) {
                this.rue.gzv(this.style.tbm)
            }
        }
    };
    this.tdp = function () {
        if (this.aqc) {
            var b = (this.ict && this.lre) ? this.don.yio : this.don.ryz;
            this.aqc.pxx(b.cij);
            this.aqc.mwg(b);
            if (this.don.xrl === true) {
                this.aqc.gzv(this.style.ryz)
            }
        }
    };
    this.ydf = function () {};
    this.vvf = function () {};
    this.cbv = function () {};
    this.kuo = function () {
        if (this.oxt.dgc("tops")) {
            this.rue.ywc(true);
            this.swx()
        } else {
            this.dna = null;
            this.rue.fmt(this.tmc, true)
        }
        this.rue.sps()
    };
    this.ghh = function () {
        var c = 0 - this.don.dvq.cij.x,
            b = 0 - this.don.dvq.cij.y;
        this.ynx = [
            [{
                x: this.don.hxb.cij.x + c,
                y: this.don.hxb.cij.y + b
            }, {
                x: this.don.hxb.cij.x + c,
                y: this.don.hxb.cij.y + b + this.don.dvq.zlv
            }, {
                x: this.don.hxb.cij.x + c,
                y: this.don.hxb.cij.y + b + 2 * this.don.dvq.zlv
            }],
            [{
                x: this.don.zpm.cij.x + c,
                y: this.don.zpm.cij.y + b
            }, {
                x: this.don.zpm.cij.x + c,
                y: this.don.zpm.cij.y + b + this.don.dvq.zlv
            }, {
                x: this.don.zpm.cij.x + c,
                y: this.don.zpm.cij.y + b + 2 * this.don.dvq.zlv
            }],
            [{
                x: this.don.eak.cij.x + c,
                y: this.don.eak.cij.y + b
            }, {
                x: this.don.eak.cij.x + c,
                y: this.don.eak.cij.y + b + this.don.dvq.zlv
            }, {
                x: this.don.eak.cij.x + c,
                y: this.don.eak.cij.y + b + 2 * this.don.dvq.zlv
            }],
            [{
                x: this.don.ogp.cij.x + c,
                y: this.don.ogp.cij.y + b
            }, {
                x: this.don.ogp.cij.x + c,
                y: this.don.ogp.cij.y + b + this.don.dvq.zlv
            }, {
                x: this.don.ogp.cij.x + c,
                y: this.don.ogp.cij.y + b + 2 * this.don.dvq.zlv
            }],
            [{
                x: this.don.cxy.cij.x + c,
                y: this.don.cxy.cij.y + b
            }, {
                x: this.don.cxy.cij.x + c,
                y: this.don.cxy.cij.y + b + this.don.dvq.zlv
            }, {
                x: this.don.cxy.cij.x + c,
                y: this.don.cxy.cij.y + b + 2 * this.don.dvq.zlv
            }]
        ]
    };
    this.asx = function () {
        var e = 0 - this.don.dvq.cij.x,
            b = 0 - this.don.dvq.cij.y;
        this.spz = [];
        for (var g = 0, f = this.don.spz.length; g < f; g++) {
            this.spz[g] = [];
            for (var d = 0, k = 0, c = this.don.spz[g].length; d < c; d += 2, k += 1) {
                this.spz[g][k] = {
                    x: this.don.spz[g][d] + e,
                    y: this.don.spz[g][d + 1] + b
                }
            }
        }
    };
    this.gfd = function () {
        this.tqt = [];
        if (this.kvu() === false && this.cmz != "") {
            this.tqt.push(this.cmz)
        }
        this.tqt.push(this.language.ppb);
        this.tqt.push(this.language.zlr + " " + this.jea(this.xdl()) + ((this.rok() === true) ? "|" : " ") + this.language.oow + " " + this.jea(this.vjp()));
        this.tqt.push(this.language.ccw)
    };
    this.otr = function () {
        this.vdy = [];
        this.vdy[0] = this.language.uln;
        this.vdy[1] = this.language.hzv
    };
    this.mcf = function () {
        this.fbr = [];
        this.fbr[0] = this.language.bhg;
        this.fbr[1] = this.language.hje
    };
    this.uvr = function () {
        dwo.prototype.uvr.call(this);
        if (this.zef() === true) {
            this.uhx.wqz(true);
            this.uhx.nzu(neg.epl.value45 === neg.jgt.gxf || neg.epl.value45 === neg.jgt.cpb)
        }
    };
    this.iks = function () {
        var c = "";
        this.uhx.ivq("spin", null, false, this.rnt + "reels");
        this.uhx.ivq("stop1", null, false, this.rnt + "stop_reel2");
        this.uhx.ivq("stop2", null, false, this.rnt + "stop_reel2");
        this.uhx.ivq("start", null, false, this.rnt + "onstart");
        if (this.gat() === true) {
            this.uhx.ivq("melody", null, true, this.rnt + "background")
        }
        if (this.kwo > 0) {
            this.uhx.ivq("wincountfade", null, false, this.rnt + "count_fade")
        }
        c = neg.epl.value30 + "/slot/sounds/";
        this.uhx.ivq("winfinal", this.eyw, false, c + "winfinal");
        if (this.fdu <= 2) {
            this.uhx.ivq("wincount", null, false, c + "countup" + this.fdu + "1");
            this.uhx.ivq("wincount1", null, false, c + "countup" + this.fdu + "2");
            this.uhx.ivq("wincount3", null, false, c + "countup" + this.fdu + "3");
            this.uhx.ivq("wincount5", null, false, c + "countup" + this.fdu + "4");
            if (this.uhx.cyp === false) {
                this.uhx.ivq("wincount2", null, false, c + "countup" + this.fdu + "2");
                this.uhx.ivq("wincount4", null, false, c + "countup" + this.fdu + "3");
                this.uhx.ivq("wincount6", null, false, c + "countup" + this.fdu + "4")
            }
            this.uhx.ivq("winline", null, false, c + "winline");
            this.uhx.ivq("collect", null, false, c + "collect");
            this.uhx.ivq("collectend", null, false, c + "collect1")
        }
        c = neg.epl.value30 + "/basic/sounds/";
        this.uhx.ivq("silence", null, false, c + "silence");
        this.uhx.ivq("audioon", null, false, c + "audio_on");
        if (!neg.epl.value55) {
            if (this.rok() === false) {
                this.uhx.ivq("btn", null, false, c + "btn");
                this.uhx.ivq("auto_on", null, false, c + "auto_on");
                this.uhx.ivq("auto_off", null, false, c + "auto_off");
                this.uhx.ivq("gamble_on", null, false, c + "gamble_on");
                this.uhx.ivq("gamble_off", null, false, c + "gamble_off");
                if (this.gat() === false && this.fdu <= 2) {
                    this.uhx.ivq("gambleprop", null, true, c + "gambleprop")
                }
                for (var b = 0; b < 12; b++) {
                    this.uhx.ivq("step" + b, null, false, c + "step" + (b + 1))
                }
                this.uhx.ivq("maxstep", null, false, c + "maxstep")
            } else {
                this.uhx.ivq("btn", null, false, c + "btn2");
                this.uhx.ivq("auto_on", null, false, c + "auto_on");
                this.uhx.ivq("auto_off", null, false, c + "auto_off")
            }
        } else {
            this.uhx.ivq("btn", null, false, c + "ama_btn");
            if (this.rok() === false) {
                this.uhx.ivq("gamble_on", null, false, c + "ama_gamble_on");
                this.uhx.ivq("gamble_off", null, false, c + "ama_gamble_off");
                if (this.gat() === false && this.fdu <= 2) {
                    this.uhx.ivq("gambleprop", null, true, c + "ama_gambleprop")
                }
                for (var b = 0; b < 12; b++) {
                    this.uhx.ivq("step" + b, null, false, c + "ama_step")
                }
                this.uhx.ivq("maxstep", null, false, c + "ama_step")
            }
        }
        if (this.rta() === true) {
            this.uhx.ivq("jackpot", null, false, c + "jackpot");
            if (this.tvw()) {
                this.uhx.ivq("mystery_jackpot", null, false, c + "mystery_jackpot")
            }
        }
        if (this.rok() === false) {
            this.uhx.ivq("panel_in", null, false, c + "panel_in");
            this.uhx.ivq("panel_out", null, false, c + "panel_out")
        }
        c = neg.epl.value30 + "/gamble/sounds/";
        this.uhx.ivq("gamble1", null, false, c + "deal_2");
        this.uhx.ivq("gamble2", null, false, c + "deal_2");
        this.uhx.ivq("gamblewin1", null, false, c + "win1");
        this.uhx.ivq("gamblewin2", null, false, c + "win2");
        this.uhx.ivq("gamblewin3", null, false, c + "win3");
        this.and();
        this.snc();
        this.glh()
    };
    this.and = function () {
        for (var b = 0; b < this.yuz; b++) {
            this.uhx.ivq("symb" + b, this.tzh, false, this.rnt + "symb" + (b + 1))
        }
    };
    this.snc = function () {
        var b = neg.epl.value30 + "/slot/sounds/";
        this.uhx.ivq("bigwin", null, false, b + "bigwin");
        this.uhx.ivq("megawin", null, false, b + "megawin");
        this.uhx.ivq("nicewin", null, false, b + "nicewin")
    };
    this.glh = function () {};
    this.mvq = function () {
        var b = this.kvt + this.don.type + "/";
        this.uhx.zqx("icon", b + "icon_out.png");
        if (this.zef() === true && (neg.epl.value45 === neg.jgt.gxf || neg.epl.value45 === neg.jgt.cpb)) {
            this.uhx.zqx("device_info", b + "info_" + ((this.rok() === true) ? "smartphone.png" : "tablet.png"))
        }
        if (this.mcr) {
            this.uhx.zqx("winlines", b + "wl.png")
        }
        this.uhx.zqx("s_symb", b + "symbols_small.png");
        b = neg.epl.value30 + "/basic/images/" + this.don.type + "/";
        if (this.rta() === true) {
            this.uhx.zqx("jackpot", b + "jackpot.png");
            if (this.tvw()) {
                this.uhx.agn(b, "mystery_jackpot.json")
            }
        }
        if (this.rok() === true) {
            if (this.don.xrl === false) {
                this.uhx.zqx("btn_back", b + "buttonback.png")
            }
        }
        b = neg.epl.value30 + "/slot/images/" + this.don.type + "/";
        if (this.rok() === true) {
            if (this.don.xrl === true) {
                this.uhx.agn(b, "gui_mobile_v29.json")
            } else {
                this.uhx.agn(b, "gui_mobile_v17.json")
            }
        } else {
            if (neg.epl.value57 === neg.ui.omt || this.qmr() != null) {
                this.uhx.agn(b, "gui_desktop_v27.json")
            } else {
                this.uhx.agn(b, "gui_desktop_v17.json")
            }
        }
        if (this.tzo && !this.ict) {
            this.uhx.zqx("firework", b + "firework.png")
        }
        this.fxh();
        this.fyx();
        this.hnt();
        this.pgz();
        this.fix()
    };
    this.fyx = function () {
        var b = this.kvt + this.don.type + "/";
        this.uhx.zqx("m_back", b + "main.png");
        this.uhx.zqx("g_back", b + "gamble.jpg");
        this.uhx.zqx("m_win", b + "winPanel.png");
        this.uhx.zqx("h_paytable", b + "wthelp.jpg");
        this.uhx.zqx("h_winlines", b + "wlhelp.jpg")
    };
    this.hnt = function () {
        var c = this.kvt + this.don.type + "/";
        this.uhx.agn(c, "symbols.json");
        for (var b = 0; b < this.yuz; b++) {
            this.uhx.zqx("anim" + b, c + "symbanim" + (b + 1) + ".jpg")
        }
    };
    this.pgz = function () {
        var b = neg.epl.value30 + "/slot/images/" + this.don.type + "/";
        this.uhx.zqx("wins", b + "wins.png")
    };
    this.fxh = function () {
        var b = neg.epl.value30 + "/gamble/images/" + this.don.type + "/";
        this.uhx.zqx("g_red", b + "red_orig.png");
        this.uhx.zqx("g_blue", b + "blue_orig.png");
        this.uhx.agn(b, "gamble.json")
    };
    this.fix = function () {};
    this.twy = function (b) {
        var c = this.dgi;
        b = (b != null && b === true) ? true : false;
        if (this.guq && !this.jcx && !this.npo) {
            c = c - this.win
        }
        if (this.opx) {
            c = c - this.opx.value
        }
        if (!this.npo) {
            this.hsm(c, true, b)
        }
        this.fsq(this.totalBet, true);
        this.oxt.evt("tops", "#qay");
        this.oxt.evt("settings", "#elv", [this.jea(this.aub), this.gzg, this.jea(this.ffv())])
    };
    this.qay = function (p, o, q, D, f) {
        if (neg.tlo.ydx()) {
            var b = (p != null && o != null && q != null && D != null),
                d = (b === true) ? new flw(p, o, q, D) : ((neg.tlo.don.xrl === true) ? new flw(neg.tlo.don.cmi.cij.x, neg.tlo.don.cmi.cij.y, neg.tlo.don.cmi.cij.width, neg.tlo.don.cmi.cij.height) : new flw(neg.tlo.don.tlo.cij.x, neg.tlo.don.tlo.cij.y, neg.tlo.don.tlo.cij.width, neg.tlo.don.tlo.cij.height)),
                A = neg.tlo.context2D,
                g = (neg.tlo.vpo === true) ? neg.tlo.style.tlo.nty : neg.tlo.style.tlo.backgroundColor,
                G = neg.tlo.oxt.dgc("stats"),
                c = neg.tlo.oxt.dgc("history"),
                E = neg.tlo.oxt.dgc("topb"),
                j = neg.tlo.oxt.dgc("topi"),
                k = neg.tlo.oxt.dgc("betsel"),
                s = neg.tlo.oxt.dgc("linesel"),
                t = neg.tlo.oxt.dgc("tops"),
                l = neg.tlo.oxt.dgc("winp"),
                m = neg.tlo.oxt.dgc("fwinp"),
                v = neg.tlo.oxt.dgc("llinep"),
                I = neg.tlo.oxt.dgc("rlinep"),
                H = neg.tlo.oxt.dgc("finfop"),
                z = neg.tlo.oxt.dgc("finfoc"),
                r = neg.tlo.oxt.dgc("autop"),
                F = neg.tlo.oxt.ydk("jackpots"),
                n = neg.tlo.oxt.dgc("jwp"),
                u = neg.tlo.oxt.dgc("mjwp"),
                e = neg.tlo.oxt.dgc("settings");
            neg.tlo.ebw = false;
            if (neg.tlo.csv === true) {
                neg.tlo.dky()
            }
            A.save();
            if (b) {
                A.beginPath();
                A.rect(p, o, q, D);
                A.closePath();
                A.clip()
            }
            if (f == null || f === false) {
                A.clearRect(0, 0, neg.tlo.width, neg.tlo.height)
            }
            if (neg.tlo.don.cqe) {
                if (neg.tlo.csv === false) {
                    neg.tlv.hmu(neg.tlo.context2D, neg.tlo.don.tlo.cij.x - neg.tlo.don.tlo.mmg, neg.tlo.don.tlo.cij.y - neg.tlo.don.tlo.mmg, neg.tlo.don.tlo.cij.width + 2 * neg.tlo.don.tlo.mmg, neg.tlo.don.tlo.cij.height + 2 * neg.tlo.don.tlo.mmg, g, 1)
                } else {
                    neg.tlv.hmu(neg.tlo.context2D, neg.tlo.don.tlo.cij.x - neg.tlo.don.tlo.mmg, neg.tlo.don.tlo.cij.y - neg.tlo.don.tlo.mmg, neg.tlo.don.tlo.cij.width + 2 * neg.tlo.don.tlo.mmg, neg.tlo.don.tlo.cij.height + 2 * neg.tlo.don.tlo.mmg, null, 0, g, neg.tlo.don.tlo.mmg, 1)
                }
            }
            if (c) {
                c.qay()
            }
            if (j) {
                j.qay()
            }
            if (t) {
                t.qay()
            }
            if (G && G.cxw()) {
                G.qay()
            } else {
                if (neg.tlo.rue && neg.tlo.rue.cxw()) {
                    neg.tlo.rue.qay()
                } else {
                    if (neg.tlo.aqc && neg.tlo.aqc.cxw()) {
                        neg.tlo.aqc.qay()
                    } else {
                        if (neg.tlo.csv) {
                            A.drawImage(neg.tlo.yya, neg.tlo.don.hii.cij.x, neg.tlo.don.hii.cij.y)
                        } else {
                            A.drawImage(neg.tlo.ijr, neg.tlo.don.hii.cij.x, neg.tlo.don.hii.cij.y)
                        }
                        if (l && l.cxw()) {
                            l.qay()
                        } else {
                            if (m && m.cxw()) {
                                m.qay()
                            }
                        }
                        if (v) {
                            v.qay()
                        }
                        if (I) {
                            I.qay()
                        }
                        if (neg.tlo.csv === false) {
                            for (var B = 0, C = neg.tlo.typ.length; B < C; B++) {
                                if (neg.tlo.typ[B]) {
                                    neg.tlo.typ[B].qay()
                                }
                            }
                        }
                        if (neg.tlo.rjo) {
                            neg.tlo.rjo.qay()
                        }
                        if (neg.tlo.pyn) {
                            neg.tlo.pyn.qay()
                        }
                        for (var B = 0, C = F.length; B < C; B++) {
                            F[B].qay()
                        }
                        if (n) {
                            if (n.cxw()) {
                                neg.tlo.yuo(A, d)
                            }
                            n.qay()
                        }
                        if (u) {
                            if (u.cxw()) {
                                neg.tlo.yuo(A, d)
                            }
                            u.qay()
                        }
                        if (H) {
                            if (H.cxw()) {
                                neg.tlo.yuo(A, d)
                            }
                            H.qay()
                        }
                        if (z) {
                            if (z.cxw()) {
                                neg.tlo.yuo(A, d)
                            }
                            z.qay()
                        }
                    }
                }
            }
            if (k) {
                k.qay()
            }
            if (s) {
                s.qay()
            }
            if (E) {
                E.qay()
            }
            if (r) {
                r.qay()
            }
            if (e) {
                e.qay()
            }
            A.restore()
        }
    };
    this.yuo = function (b, c) {
        this.ebw = true;
        neg.tlv.hmu(b, c.x, c.y, c.width, c.height, "black", 0.5)
    };
    this.aeq = function () {
        for (var c = 0, b = this.typ.length; c < b; c++) {
            if (this.typ[c] && this.wxz[c] === true) {
                this.typ[c].qay()
            }
        }
    };
    this.dky = function () {
        var d = this.rwr,
            c = this.uhx.xzk("m_back"),
            f = this.uhx.xzk("f_back");
        if (this.ict && this.lre && this.style.tlo.puz) {
            c = this.uhx.xzk("m_m_back");
            f = this.uhx.xzk("m_f_back")
        }
        if (this.ydx()) {
            d.save();
            if (this.bee) {
                d.drawImage(f, 0, 0)
            } else {
                d.drawImage(c, 0, 0)
            }
            for (var e = 0, b = this.typ.length; e < b; e++) {
                this.typ[e].qay()
            }
            d.restore()
        }
    };
    this.jkf = function () {
        var d = neg.tlo.noq,
            g = (neg.tlo.don.hii.cij.width - neg.tlo.don.tlo.cij.width) / 2,
            e = 0,
            c = (neg.tlo.bee) ? neg.tlo.uhx.xzk("f_back") : neg.tlo.uhx.xzk("m_back"),
            k = (neg.tlo.bee) ? neg.tlo.uhx.xzk("f_left") : neg.tlo.uhx.xzk("m_left"),
            j = (neg.tlo.bee) ? neg.tlo.uhx.xzk("f_right") : neg.tlo.uhx.xzk("m_right");
        if (neg.tlo.ict && neg.tlo.lre && neg.tlo.style.tlo.puz) {
            c = (neg.tlo.bee) ? neg.tlo.uhx.xzk("m_f_back") : neg.tlo.uhx.xzk("m_m_back")
        }
        d.save();
        d.clearRect(0, 0, neg.tlo.don.hii.cij.width, neg.tlo.don.hii.cij.height);
        d.drawImage(c, g, e);
        if (neg.tlo.hvx === neg.don.wso || neg.tlo.hvx === neg.don.pud) {
            if (k) {
                d.drawImage(k, 0, 0)
            }
            if (j) {
                d.drawImage(j, neg.tlo.don.hii.cij.width - j.width, 0)
            }
        }
        d.restore();
        if (neg.tlo.csv) {
            d = neg.tlo.atn;
            d.save();
            d.drawImage(neg.tlo.ijr, 0, 0);
            for (var f = 0, b = neg.tlo.typ.length; f < b; f++) {
                d.clearRect(neg.tlo.typ[f].x + g, neg.tlo.typ[f].y + e, neg.tlo.typ[f].width, neg.tlo.typ[f].height)
            }
            d.restore()
        }
    };
    this.tez = function (f) {
        var b = 0.995,
            e = 0,
            c = [{
                sx: b,
                sy: b,
                tx: 4,
                ty: -2,
                rx: 0,
                ry: 0
            }, {
                sx: b,
                sy: b,
                tx: -4,
                ty: -2,
                rx: 0,
                ry: 0
            }, {
                sx: b,
                sy: b,
                tx: 2,
                ty: 0,
                rx: 0,
                ry: 0
            }, {
                sx: b,
                sy: b,
                tx: -2,
                ty: 0,
                rx: 0,
                ry: 0
            }, {
                sx: b,
                sy: b,
                tx: 4,
                ty: 2,
                rx: 0,
                ry: 0
            }, {
                sx: b,
                sy: b,
                tx: -4,
                ty: 2,
                rx: 0,
                ry: 0
            }, {
                sx: b,
                sy: b,
                tx: 2,
                ty: 0,
                rx: 0,
                ry: 0
            }, {
                sx: b,
                sy: b,
                tx: -2,
                ty: 0,
                rx: 0,
                ry: 0
            }, {
                sx: b,
                sy: b,
                tx: 4,
                ty: -2,
                rx: 0,
                ry: 0
            }, {
                sx: b,
                sy: b,
                tx: -4,
                ty: -2,
                rx: 0,
                ry: 0
            }, {
                sx: b,
                sy: b,
                tx: 2,
                ty: -1,
                rx: 0,
                ry: 0
            }, {
                sx: b,
                sy: b,
                tx: 0,
                ty: 0,
                rx: 0,
                ry: 0
            }];
        if (this.psr < 0) {
            for (var d = 0; d < f; d++) {
                this.isc[d] = c[e];
                e = (e < c.length - 1) ? e + 1 : 0
            }
            this.kko = 0;
            this.xkr = new Date().getTime();
            this.smx()
        }
    };
    this.uch = function () {
        clearTimeout(this.psr);
        this.psr = -1;
        neg.tlv.civ(this.canvas, this.kvl, this.xwi);
        if (this.cod != null) {
            neg.tlv.civ(this.cod, this.kvl, this.xwi, ((this.don.cod.cij.x) - ((this.don.cod.cij.x + this.don.cod.rnr) / 2 * (1 - this.kvl))), ((this.don.cod.cij.y) - ((this.don.cod.cij.y + this.don.cod.ncp) / 2 * (1 - this.xwi))))
        }
    };
    this.smx = function () {
        var b = neg.tlo.epg,
            d = new Date().getTime(),
            c = null;
        if (neg.tlo.kko >= neg.tlo.isc.length) {
            neg.tlo.uch()
        } else {
            c = neg.tlo.isc[neg.tlo.kko];
            neg.tlv.civ(neg.tlo.canvas, neg.tlo.kvl * c.sx, neg.tlo.xwi * c.sy, c.tx, c.ty, c.rx, c.ry);
            if (neg.tlo.cod != null) {
                neg.tlv.civ(neg.tlo.cod, neg.tlo.kvl * c.sx, neg.tlo.xwi * c.sy, ((neg.tlo.don.cod.cij.x) - ((neg.tlo.don.cod.cij.x + neg.tlo.don.cod.rnr) / 2 * (1 - neg.tlo.kvl * c.sx))) + c.tx, ((neg.tlo.don.cod.cij.y) - ((neg.tlo.don.cod.cij.y + neg.tlo.don.cod.ncp) / 2 * (1 - neg.tlo.xwi * c.sy))) + c.ty, c.rx, c.ry)
            }
            neg.tlo.kko++;
            b = neg.tlo.epg + (neg.tlo.kko * neg.tlo.epg - (d - neg.tlo.xkr));
            if (b < 10) {
                b = 10
            }
            neg.tlo.psr = setTimeout(neg.tlo.smx, b)
        }
    };
    this.qzm = function () {
        clearTimeout(neg.tlo.wrr);
        if (neg.tlo.cpd) {
            if (neg.tlo.pex) {
                if (!neg.tlo.zmp && neg.tlo.npb()) {
                    setTimeout(neg.tlo.hhq, 2)
                }
            } else {
                if (!neg.tlo.bee) {
                    if (neg.tlo.win > 0 && !neg.tlo.jcx) {
                        if (neg.tlo.gey) {
                            neg.tlo.hpk();
                            if (neg.tlo.kdw()) {
                                neg.tlo.cpd = false;
                                neg.tlo.pyn.whl(false);
                                setTimeout(neg.tlo.rno, 400)
                            }
                        } else {
                            if (neg.tlo.fby) {
                                neg.tlo.wad()
                            } else {
                                if (!(neg.tlo.gey || neg.tlo.fby)) {
                                    if (neg.tlo.kdw()) {
                                        neg.tlo.cpd = false;
                                        neg.tlo.pyn.whl(false);
                                        neg.tlo.rno()
                                    } else {
                                        neg.tlo.hpk()
                                    }
                                }
                            }
                        }
                    } else {
                        if (!neg.tlo.pex) {
                            if (neg.tlo.vid) {
                                neg.tlo.lxc();
                                neg.tlo.yqy();
                                return
                            } else {
                                if (neg.tlo.uxt) {
                                    neg.tlo.lxc();
                                    neg.tlo.lvy();
                                    return
                                }
                            }
                            neg.tlo.slq = true;
                            neg.tlo.cpd = false;
                            if (neg.tlo.rok() === true) {
                                neg.tlo.mip = (!neg.tlo.ryz) ? 1 : 0
                            } else {
                                if (neg.epl.value62 === true) {
                                    neg.tlo.mip = 0;
                                    if (neg.tlo.vuj) {
                                        neg.tlo.mip |= 2
                                    }
                                    if (neg.tlo.ryz) {
                                        neg.tlo.mip |= 4
                                    }
                                } else {
                                    neg.tlo.mip = (neg.tlo.vuj && !neg.tlo.ryz) ? 1 : 0
                                }
                            }
                            if (neg.tlo.npo || (neg.tlo.dgi >= neg.tlo.ffv() && neg.tlo.ffv() >= neg.tlo.gwx)) {
                                neg.tlo.ptb();
                                for (var c = 0, b = neg.tlo.typ.length; c < b; c++) {
                                    neg.tlo.osu[c] = -1;
                                    if (neg.tlo.typ[c]) {
                                        neg.tlo.typ[c].sxx(neg.tlo.aqb[0])
                                    }
                                }
                                neg.tlo.neh();
                                neg.tlo.pld({
                                    type: "roundStart",
                                    sender: neg.tlo.mvb,
                                    lang: sessionStorage.sessionValue1.toUpperCase(),
                                    data: {
                                        totalBet: neg.tlo.jea(neg.tlo.totalBet)
                                    }
                                });
                                neg.tlo.ixv();
                                neg.tlo.xjy();
                                neg.tlo.nvf.play(neg.tlo.gzg, neg.tlo.zlq, neg.tlo.mip);
                                neg.tlo.pyn.whl(false);
                                neg.tlo.pyn.cqr.evt("start", "#iwc", [true])
                            } else {
                                neg.tlo.iwm();
                                neg.tlo.lxc();
                                neg.tlo.pyn.whl(true);
                                neg.tlo.wnp(true);
                                neg.tlo.cpd = true
                            }
                            neg.tlo.lgd()
                        }
                    }
                } else {
                    if (neg.tlo.bpo > 0) {
                        if (neg.tlo.gey) {
                            neg.tlo.hpk()
                        } else {
                            if (!(neg.tlo.cox || neg.tlo.slq)) {
                                neg.tlo.zxx()
                            } else {
                                neg.tlo.mxe()
                            }
                        }
                    }
                    if (neg.tlo.noc > 0 && !(neg.tlo.ykc && !neg.tlo.ukh)) {
                        if (neg.tlo.uxt) {
                            neg.tlo.lxc();
                            neg.tlo.lvy();
                            return
                        }
                        neg.tlo.slq = true;
                        neg.tlo.cpd = false;
                        neg.tlo.ptb();
                        for (var c = 0, b = neg.tlo.typ.length; c < b; c++) {
                            neg.tlo.osu[c] = -1;
                            if (neg.tlo.typ[c]) {
                                neg.tlo.typ[c].sxx(neg.tlo.aqb[0])
                            }
                        }
                        neg.tlo.ppp();
                        if (neg.tlo.rok() && neg.tlo.noc == 1) {
                            neg.tlo.mip = (!neg.tlo.ryz) ? 1 : 0
                        } else {
                            if (neg.epl.value62 === true) {
                                neg.tlo.mip = 0;
                                if (neg.tlo.qmr() == null && neg.epl.value44.e && neg.tlo.noc == 1) {
                                    if (neg.tlo.yrl) {
                                        neg.tlo.mip |= 2
                                    }
                                } else {
                                    if (neg.tlo.vuj) {
                                        neg.tlo.mip |= 2
                                    }
                                }
                                if (neg.tlo.ryz) {
                                    neg.tlo.mip |= 4
                                }
                            } else {
                                if (neg.tlo.qmr() == null && neg.epl.value44.e && neg.tlo.noc == 1) {
                                    neg.tlo.mip = (neg.tlo.yrl && !neg.tlo.ryz) ? 1 : 0
                                } else {
                                    neg.tlo.mip = (neg.tlo.vuj && !neg.tlo.ryz) ? 1 : 0
                                }
                            }
                        }
                        neg.tlo.xjy();
                        neg.tlo.nvf.qqv(neg.tlo.gzg, neg.tlo.zlq, neg.tlo.mip);
                        neg.tlo.pyn.whl(false);
                        neg.tlo.pyn.cqr.evt("start", "#iwc", [true]);
                        neg.tlo.foe()
                    }
                }
            }
        } else {
            if (!neg.tlo.oub && neg.tlo.pex && !neg.tlo.zmp && neg.tlo.npb()) {
                neg.tlo.wpw = true
            }
        }
    };
    this.mlx = function () {
        var b = neg.tlo.oxt.dgc("topi"),
            d = 0,
            c = 0,
            e = 0;
        if (!neg.epl.value55) {
            neg.tlo.uhx.yiv("auto_on");
            neg.tlo.uhx.yiv("auto_off")
        }
        if (neg.tlo.vuj) {
            neg.tlo.vuj = false;
            neg.tlo.plh();
            if (neg.tlo.qmr() == null && neg.epl.value44.e && neg.tlo.bee) {
                neg.tlo.yrl = false
            }
            neg.tlo.pyn.cqr.evt("astart", "#xlw", [neg.tlo.vuj]);
            if (!neg.tlo.pex) {
                neg.tlo.pyn.cqr.evt("start", "#rqq", [neg.tlo.language.start, true])
            }
            if (!neg.epl.value55) {
                neg.tlo.uhx.onc("auto_off")
            }
            if (neg.tlo.cpk && !neg.tlo.vuj && !neg.tlo.ryz && !neg.tlo.nsl() && !neg.tlo.bee && neg.tlo.win > 0 && !neg.tlo.jcx && !neg.tlo.fby && !neg.tlo.pex) {
                if (!neg.tlo.pyn.cqr.evt("gamble", "#ypp")) {
                    neg.tlo.pyn.cqr.evt("start", "#rqq", [neg.tlo.language.uqh, true]);
                    neg.tlo.pyn.cqr.evt("gamble", "#qcx");
                    neg.tlo.vzp();
                    if (!neg.tlo.gey) {
                        neg.tlo.pyn.cqr.evt("info", "#fuh", [neg.tlo.vbj(neg.tlo.language.yen) + ": " + neg.tlo.jea(neg.tlo.win)])
                    }
                    neg.tlo.jri()
                }
            }
        } else {
            if (neg.tlo.qmr() != null && neg.tlo.owd <= 0 && neg.tlo.rok() === false) {
                if (b && b.wtk() === true) {
                    neg.tlo.wnp(false);
                    neg.tlo.pyn.whl(false);
                    neg.tlo.id = setTimeout(neg.tlo.fsl, 300)
                }
            } else {
                if (neg.tlo.qmr() == null && neg.epl.value44.e && neg.tlo.bee) {
                    neg.tlo.yrl = true
                } else {
                    if (neg.tlo.qmr() != null && neg.tlo.rok() === true) {
                        neg.tlo.owd = neg.tlo.oxt.evt("settings", "#ahn");
                        if (neg.tlo.owd <= 0) {
                            return
                        }
                        d = neg.tlo.oxt.evt("settings", "#xmc");
                        c = neg.tlo.oxt.evt("settings", "#aaj");
                        e = neg.tlo.oxt.evt("settings", "#qlq");
                        neg.tlo.srt = (d > 0) ? d : 0;
                        neg.tlo.say = (c > 0) ? c : 0;
                        neg.tlo.efr = (e > 0) ? e : 0;
                        neg.tlo.doe(neg.tlo.qmr().o === true || neg.tlo.style.tlo.puz == false)
                    }
                }
                neg.tlo.vuj = true;
                neg.tlo.pyn.cqr.evt("astart", "#xlw", [neg.tlo.vuj]);
                if (!neg.tlo.pex) {
                    neg.tlo.pyn.cqr.evt("start", "#rqq", [neg.tlo.language.start, true])
                }
                if (!neg.epl.value55) {
                    neg.tlo.uhx.onc("auto_on")
                }
                if (!neg.tlo.pex) {
                    if (neg.tlo.bee || (!neg.tlo.bee && !(neg.tlo.win > 0 && neg.tlo.cpk && neg.tlo.ryz && !(neg.tlo.jcx || neg.tlo.fby)))) {
                        neg.tlo.qzm()
                    }
                }
            }
        }
        if (b) {
            b.zog("auto", neg.tlo.vuj)
        }
    };
    this.rah = function () {
        if (neg.gpk == 0 && neg.tlo.ict === false && neg.tlo.win > 0 && !neg.tlo.jcx && neg.tlo.kdw()) {
            if (!neg.tlo.fby) {
                neg.tlo.cpd = false;
                neg.tlo.pyn.whl(false);
                if (neg.tlo.gey) {
                    neg.tlo.hpk();
                    setTimeout(neg.tlo.rno, 400)
                } else {
                    neg.tlo.rno()
                }
            }
            neg.tlo.xfs = neg.tlo.rah
        } else {
            dwo.prototype.rah.call(this)
        }
    };
    this.scf = function () {
        if (neg.tlo.zlq < neg.tlo.zjm.length - 1) {
            if (neg.tlo.zlq >= neg.tlo.nfx(true)) {
                neg.tlo.zlq = 0;
                while (neg.tlo.zlq < neg.tlo.ltl()) {
                    neg.tlo.zlq++
                }
            } else {
                neg.tlo.zlq++
            }
        } else {
            neg.tlo.zlq = 0;
            while (neg.tlo.zlq < neg.tlo.ltl()) {
                neg.tlo.zlq++
            }
        }
        neg.tlo.nhy(false, false);
        if (neg.tlo.rok() && neg.tlo.yel()) {
            neg.tlo.pyn.cqr.evt("betpopup", "#rqq", [neg.tlo.wzp(neg.tlo.totalBet)]);
            neg.tlo.pyn.cqr.evt("betpopup", "#wmg", [true]);
            neg.tlo.qay();
            clearTimeout(neg.tlo.hji);
            neg.tlo.hji = setTimeout(neg.tlo.acw, 2000)
        }
        if (neg.tlo.zlq >= neg.tlo.nfx(true)) {
            return true
        }
        return false
    };
    this.jst = function () {
        if (neg.tlo.zlq > 0) {
            if (neg.tlo.zlq <= neg.tlo.ltl()) {
                neg.tlo.zlq = neg.tlo.zjm.length;
                while (neg.tlo.zlq > neg.tlo.nfx(true)) {
                    neg.tlo.zlq--
                }
            } else {
                neg.tlo.zlq--
            }
        } else {
            neg.tlo.zlq = neg.tlo.zjm.length;
            while (neg.tlo.zlq > neg.tlo.nfx(true)) {
                neg.tlo.zlq--
            }
        }
        if (neg.tlo.zlq < 0) {
            neg.tlo.zlq = 0
        }
        neg.tlo.nhy(false, false);
        if (neg.tlo.zlq <= neg.tlo.ltl()) {
            return true
        }
        return false
    };
    this.flr = function () {
        var c = neg.tlo.gzg,
            b = neg.tlo.oxt.dgc("betsel"),
            e = neg.tlo.oxt.dgc("llinep"),
            d = neg.tlo.oxt.dgc("rlinep");
        c += neg.tlo.ffz;
        if (c > neg.tlo.dao) {
            c = neg.tlo.ryj
        }
        neg.tlo.gzg = c;
        if (e) {
            e.czx(c)
        }
        if (d) {
            d.czx(c)
        }
        if (b) {
            b.ked(neg.tlo.ltl(), neg.tlo.nfx(true))
        }
        neg.tlo.nhy(true, true);
        neg.tlo.qay();
        if (c >= neg.tlo.dao) {
            return true
        }
        return false
    };
    this.abr = function () {
        var c = neg.tlo.gzg,
            b = neg.tlo.oxt.dgc("betsel"),
            e = neg.tlo.oxt.dgc("llinep"),
            d = neg.tlo.oxt.dgc("rlinep");
        c -= neg.tlo.ffz;
        if (c < neg.tlo.ryj) {
            c = neg.tlo.dao
        }
        neg.tlo.gzg = c;
        if (e) {
            e.czx(c)
        }
        if (d) {
            d.czx(c)
        }
        if (b) {
            b.ked(neg.tlo.ltl(), neg.tlo.nfx(true))
        }
        neg.tlo.nhy(true, true);
        neg.tlo.qay();
        if (c <= neg.tlo.ryj) {
            return true
        }
        return false
    };
    this.jel = function () {
        var b = neg.tlo.oxt.dgc("topi"),
            c = neg.tlo.oxt.dgc("settings");
        if (neg.tlo.cpk && !neg.tlo.bee && neg.tlo.win > 0 && !neg.tlo.pex && !neg.tlo.ryz && !neg.tlo.vuj) {
            neg.tlo.nvq()
        } else {
            neg.tlo.uhx.yiv("gamble_on");
            neg.tlo.uhx.yiv("gamble_off");
            neg.tlo.ryz = !neg.tlo.ryz;
            if (neg.tlo.ryz) {
                neg.tlo.uhx.onc("gamble_on")
            } else {
                neg.tlo.uhx.onc("gamble_off")
            }
            if (neg.tlo.cpk && !neg.tlo.vuj && !neg.tlo.ryz && !neg.tlo.nsl() && !neg.tlo.bee && neg.tlo.win > 0 && !neg.tlo.jcx && !neg.tlo.fby && !neg.tlo.pex) {
                if (!neg.tlo.pyn.cqr.evt("gamble", "#ypp")) {
                    neg.tlo.pyn.cqr.evt("start", "#rqq", [neg.tlo.language.uqh, true]);
                    neg.tlo.pyn.cqr.evt("gamble", "#qcx");
                    neg.tlo.vzp();
                    if (!neg.tlo.gey) {
                        neg.tlo.pyn.cqr.evt("info", "#fuh", [neg.tlo.vbj(neg.tlo.language.yen) + ": " + neg.tlo.jea(neg.tlo.win)])
                    }
                    neg.tlo.jri()
                }
            }
            neg.tlo.pyn.cqr.evt("gamble", "#xlw", [neg.tlo.ryz]);
            if (b) {
                b.zog("gamble", neg.tlo.ryz)
            }
            if (c) {
                c.cqr.evt("gamble", "#lbu", [(neg.tlo.ryz) ? 1 : 0])
            }
        }
    };
    this.rbw = function () {
        if (!neg.tlo.rue.cxw()) {
            neg.tlo.qeh();
            if (neg.tlo.bee) {
                neg.tlo.ggt()
            }
            neg.tlo.unn()
        } else {
            neg.tlo.bih()
        }
    };
    this.ydc = function () {
        var d = neg.tlo.oxt.dgc("topb"),
            c = neg.tlo.oxt.dgc("settings"),
            b = neg.tlo.oxt.dgc("topi");
        neg.tlo.zmp = !neg.tlo.zmp;
        if (b) {
            b.zog("turbo", neg.tlo.zmp)
        }
        if (d) {
            d.cqr.evt("turbo", "#lbu", [(neg.tlo.zmp) ? 1 : 0])
        }
        if (c) {
            c.cqr.evt("turbo", "#lbu", [(neg.tlo.zmp) ? 1 : 0])
        }
    };
    this.mht = function () {
        var b = false;
        if (neg.tlv.fzg == true) {
            if (neg.tlo.ilq == true) {
                neg.tlo.ilq = false;
                b = neg.tlv.pcg();
                setTimeout(neg.tlo.byb, 1400)
            }
        } else {
            b = neg.tlv.pcg();
            setTimeout(neg.tlo.byb, 1400)
        }
    };
    this.cgi = function () {
        if (neg.tlo.uhx.tyq() && !neg.tlo.svm) {
            neg.tlo.svm = true;
            neg.tlo.oxt.evt("loading", "#stop");
            setTimeout(neg.tlo.tqw, 100);
            neg.tlo.uhx.onc("silence");
            if (neg.tlv.wyn()) {
                neg.tlo.mht()
            }
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                webAudioEngine.resume()
            }
        }
    };
    this.lgj = function () {
        var d = neg.tlo.oxt.dgc("topb"),
            c = neg.tlo.oxt.dgc("settings"),
            b = neg.tlo.oxt.dgc("topi");
        neg.tlo.ftl = !neg.tlo.ftl;
        if (neg.tlo.ftl === true) {
            neg.tlo.khe();
            if (neg.tlo.yel() === false) {
                neg.tlo.mxm(0, 0)
            }
        } else {
            neg.tlo.mmc()
        }
        if (b) {
            b.zog("melody", (neg.tlo.ftl) ? 1 : 0)
        }
        if (d) {
            d.cqr.evt("melody", "#lbu", [(neg.tlo.ftl) ? 1 : 0])
        }
        if (c) {
            c.cqr.evt("melody", "#lbu", [(neg.tlo.ftl) ? 1 : 0])
        }
        neg.tlo.qay()
    };
    this.neh = function () {
        this.oub = false;
        this.nkh = false;
        this.wpw = false;
        this.jcx = false;
        this.wnp(false);
        this.pyn.cqr.evt("info", "#fuh", [this.language.xfx, true]);
        this.uhx.yiv("collectend");
        if (this.jdi >= 0) {
            clearTimeout(this.jdi);
            this.jdi = -1
        }
        this.hsv();
        this.vrt();
        if (this.pex == false) {
            this.jdj();
            for (var c = 0, b = this.typ.length; c < b; c++) {
                this.typ[c].zoy()
            }
            this.pex = true;
            this.dch = false;
            this.qlj = false;
            this.omb();
            this.xkr = new Date().getTime();
            if (this.dkd) {
                this.id = window.xzm(this.dzq)
            } else {
                this.id = setTimeout(this.dzq, 10)
            }
        }
    };
    this.ppp = function () {};
    this.dzq = function () {
        var c = neg.tlo.spd,
            e = 0;
        neg.tlo.mxi = 0;
        if (!neg.tlo.dkd || neg.tlo.otb) {
            if (neg.tlo.eua == 0) {
                neg.tlo.xkr = new Date().getTime()
            } else {
                e = new Date().getTime();
                c = neg.tlo.spd + (neg.tlo.eua * neg.tlo.spd - (e - neg.tlo.xkr))
            }
            if (neg.tlo.qlj) {
                c = neg.tlo.cdp
            }
        }
        if (neg.tlo.eua > 0 && !neg.tlo.cpd && neg.tlo.oub) {
            neg.tlo.cpd = true
        }
        for (var d = 0, b = neg.tlo.typ.length; d < b; d++) {
            if (neg.tlo.wxz[d] && !neg.tlo.typ[d].mfg) {
                if (d == neg.tlo.frf - 1) {
                    neg.tlo.typ[d].zne(true)
                } else {
                    neg.tlo.typ[d].zne((!neg.tlo.qlj && !neg.tlo.zmp))
                }
            }
        }
        if (typeof neg.tlo.qip === "function") {
            neg.tlo.qip()
        }
        if (neg.tlo.csv === false) {
            neg.tlo.aeq()
        } else {
            neg.tlo.dky()
        }
        if (c <= 0) {
            c = 0
        }
        if (neg.tlo.xwh) {
            return
        }
        if (!neg.tlo.pfh()) {
            neg.tlo.eua += 1;
            if (neg.tlo.dkd && !neg.tlo.otb) {
                neg.tlo.id = window.xzm(neg.tlo.dzq)
            } else {
                if (c == 0) {
                    neg.tlo.dzq()
                } else {
                    neg.tlo.id = setTimeout(neg.tlo.dzq, c)
                }
            }
        } else {
            neg.tlo.pex = false;
            neg.tlo.vfe();
            neg.tlo.eua = 0;
            neg.tlo.ibw = false;
            neg.tlo.zon()
        }
    };
    this.qip = function () {};
    this.zon = function () {
        if (neg.tlo.rwc === false) {
            var d = neg.tlo.pfh();
            clearTimeout(neg.tlo.dxb);
            for (var c = 0, b = neg.tlo.typ.length; c < b && d; c++) {
                if (neg.tlo.typ[c].qwh()) {
                    neg.tlo.typ[c].hcs();
                    d = false
                }
            }
            if (d) {
                for (var c = 0, b = neg.tlo.typ.length; c < b; c++) {
                    neg.tlo.typ[c].eot().length = 0;
                    neg.tlo.typ[c].ise().length = 0;
                    neg.tlo.typ[c].vye()
                }
                neg.tlo.cpd = true;
                if (neg.tlo.mrc()) {
                    neg.tlo.ijy()
                } else {
                    if (neg.tlo.aik() === true) {
                        neg.tlo.fcm()
                    } else {
                        neg.tlo.bzb()
                    }
                }
            } else {
                neg.tlo.cpd = false
            }
        } else {
            neg.tlo.dxb = setTimeout(neg.tlo.zon, 50)
        }
    };
    this.pfh = function () {
        for (var c = 0, b = this.typ.length; c < b; c++) {
            if (this.typ[c] && !this.typ[c].mfg) {
                return false
            }
        }
        return true
    };
    this.npb = function () {
        return (neg.epl.value79 === 0)
    };
    this.hhq = function () {
        var c = 0,
            b = neg.tlo.typ.length;
        if (!neg.tlo.qlj) {
            neg.tlo.xwh = false;
            neg.tlo.qlj = true;
            if (!neg.tlo.nkh) {
                if (!neg.tlo.bee) {
                    neg.tlo.nkh = true;
                    for (c = 0; c < b; c++) {
                        if (neg.tlo.typ[c] && neg.tlo.wxz[c]) {
                            neg.tlo.typ[c].gfa(neg.tlo.osu[c], neg.tlo.aqb[c] - neg.tlo.aqb[0], neg.tlo.fge)
                        }
                    }
                } else {
                    neg.tlo.nkh = true;
                    for (c = 0; c < b; c++) {
                        if (neg.tlo.typ[c] && neg.tlo.wxz[c]) {
                            neg.tlo.typ[c].gfa((neg.tlo.pwc) ? neg.tlo.rlh[c] : neg.tlo.osu[c], neg.tlo.aqb[c] - neg.tlo.aqb[0], neg.tlo.fge)
                        }
                    }
                }
            }
            for (c = 0; c < b; c++) {
                if (neg.tlo.typ[c] && neg.tlo.wxz[c]) {
                    neg.tlo.typ[c].dmn()
                }
            }
        }
    };
    this.vhy = function () {
        this.xwh = true;
        this.win = 0;
        for (var c = 0, b = this.typ.length; c < b; c++) {
            if (this.typ[c] && !this.typ[c].mfg) {
                this.typ[c].onq()
            }
        }
    };
    this.ptb = function () {
        if (this.zmp) {
            this.aqb = this.jfe;
            this.spd = this.uvb
        } else {
            this.aqb = this.lrz;
            this.spd = this.rnb
        }
        this.otb = this.mvp()
    };
    this.omb = function () {
        this.uhx.onc("spin")
    };
    this.vfe = function () {
        this.uhx.yiv("spin")
    };
    this.ivb = function () {};
    this.vrt = function () {
        if (!this.bee) {
            this.vri()
        } else {
            if (this.cnh() === true) {
                this.uhx.scw("freespinstart", 1, 300)
            }
        }
        for (var c = 0, b = this.typ.length; c < b; c++) {
            this.typ[c].xbu = ((c % 2) == 0) ? this.uhx.szx("stop1") : this.uhx.szx("stop2");
            this.typ[c].wfz().length = 0;
            this.typ[c].ngy = false;
            this.typ[c].yis = null;
            this.typ[c].vvj = null
        }
        for (var c = 0, b = this.are.length; c < b; c++) {
            this.are[c] = 0
        }
    };
    this.pww = function (b) {
        if (this.bee === true) {
            if (this.cnh() === true) {
                this.uhx.scw("freespinstart", 0, 300)
            }
            this.pyn.cqr.evt("start", "#rqq", [this.language.start, true])
        } else {
            this.mxm(0, 0);
            this.pyn.cqr.evt("info", "#dqs");
            if (!this.nsl()) {
                this.pyn.cqr.evt("start", "#rqq", [this.language.uqh, true])
            } else {
                this.pyn.cqr.evt("start", "#rqq", [this.language.start, true])
            }
        }
        this.pyn.whl(false);
        this.rjo.jog();
        this.rjo.afy(b)
    };
    this.bzb = function () {
        if (!neg.tlo.bee && neg.tlo.win >= neg.tlo.totalBet * neg.tlo.ytz) {
            neg.tlo.pww(neg.tlo.win / neg.tlo.totalBet)
        } else {
            if (neg.tlo.bee && neg.tlo.bpo >= neg.tlo.totalBet * neg.tlo.ytz) {
                neg.tlo.pww(neg.tlo.bpo / neg.tlo.totalBet)
            } else {
                neg.tlo.mtj()
            }
        }
    };
    this.mtj = function () {
        if (this.win > 0 && !this.bee) {
            this.cox = false;
            this.slq = false;
            this.goe();
            if (this.xch()) {
                this.len()
            } else {
                this.mxm(0, 200);
                this.pyn.whl(false);
                this.id = setTimeout(this.jmu, 200)
            }
        } else {
            if (this.bpo > 0 && this.bee) {
                this.cox = false;
                this.slq = false;
                this.goe();
                if (this.xch()) {
                    this.len()
                } else {
                    this.pyn.whl(false);
                    this.id = setTimeout(this.zgj, 200)
                }
            } else {
                this.znd();
                this.zno = [];
                this.aqz = 0;
                if (this.xch()) {
                    this.len()
                } else {
                    if (this.yzv()) {
                        this.yan()
                    } else {
                        if (this.bee && this.noc > 0 || !this.bee) {
                            this.wnp(true)
                        }
                        this.npf()
                    }
                }
            }
        }
    };
    this.unn = function () {
        this.gey = false;
        clearTimeout(this.mdo);
        this.kfk(this.win);
        this.vri();
        this.wnp(false);
        this.hsv();
        this.mxe();
        this.poq();
        this.pyn.cqr.evt("info", "#dqs");
        this.pyn.whl(false);
        this.mxl(false);
        this.rue.jog();
        this.rue.whl(true);
        this.oxt.evt("settings", "#crq");
        if (this.don.xrl === false) {
            this.pyn.cqr.evt("setting", "#xlw", [this.oxt.evt("settings", "#cxw")])
        }
        if (this.bee === true && this.cnh() === true) {
            this.uhx.scw("freespinstart", 0, 0)
        } else {
            if (this.bee === false) {
                this.mxm(0, 0)
            }
        }
    };
    this.bih = function () {
        this.rue.whl(false);
        if (!this.bee) {
            this.pyn.whl(true)
        } else {
            this.pyn.ohy(true)
        }
        this.wnp(true);
        this.mxl(true);
        this.rue.crq();
        if (!this.bee) {
            if (this.win > 0) {
                this.pyn.cqr.evt("info", "#fuh", [this.vbj(this.language.yen) + ": " + this.jea(this.win)])
            } else {
                this.pyn.cqr.evt("info", "#fhg", [0])
            }
            this.mxm(1, 200)
        } else {
            this.rsk(true);
            this.ggt();
            if (this.cnh() === true) {
                this.uhx.scw("freespinstart", 1, 200)
            }
        }
    };
    this.nvq = function () {
        var b = neg.tlo.pyn.cqr.dgc("gamble");
        neg.tlo.wgu();
        if (b) {
            b.wpk();
            b.xlw(neg.tlo.ryz)
        }
        neg.tlo.gey = false;
        clearTimeout(neg.tlo.mdo);
        neg.tlo.vri();
        neg.tlo.hsv();
        neg.tlo.mxe();
        neg.tlo.poq();
        clearTimeout(neg.tlo.zwh);
        if (neg.tlo.bee === false) {
            neg.tlo.mxm(1, 300)
        }
        neg.tlo.pyn.cqr.evt("info", "#dqs");
        neg.tlo.pyn.whl(false);
        neg.tlo.wnp(false);
        neg.tlo.mxl(false);
        if (neg.tlo.aqc) {
            neg.tlo.aqc.whl(true);
            neg.tlo.aqc.pqh(neg.tlo.dgi, neg.tlo.win);
            neg.tlo.aqc.cqr.evt("history", "#eee");
            neg.tlo.aqc.jog();
            neg.tlo.aqc.gox()
        }
    };
    this.woj = function () {
        if (!neg.tlo.pbd) {
            neg.tlo.pld({
                type: "roundEnded",
                sender: neg.tlo.mvb,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    win: neg.tlo.jea(neg.tlo.win),
                    balanceAfter: neg.tlo.jea(neg.tlo.dgi)
                }
            })
        }
        neg.tlo.znd();
        neg.tlo.mxl(true);
        if (neg.tlo.aqc) {
            neg.tlo.aqc.bjq();
            neg.tlo.aqc.nrd();
            neg.tlo.aqc.whl(false);
            neg.tlo.aqc.wmg(false, true)
        }
        neg.tlo.pyn.cqr.evt("start", "#rqq", [neg.tlo.language.start, true]);
        neg.tlo.jcx = true;
        if (neg.tlo.uqw()) {
            neg.tlo.lxc();
            neg.tlo.pyn.whl(true);
            neg.tlo.wnp(true);
            if (neg.tlo.win > 0) {
                neg.tlo.pyn.cqr.evt("info", "#fuh", [neg.tlo.vbj(neg.tlo.language.yen) + ": " + neg.tlo.jea(neg.tlo.win)])
            } else {
                neg.tlo.pyn.cqr.evt("info", "#fhg", [0])
            }
            neg.tlo.zxd()
        } else {
            if (neg.tlo.vuj) {
                neg.tlo.pyn.syu(true);
                neg.tlo.wrr = setTimeout(neg.tlo.ufz, 400)
            } else {
                neg.tlo.pyn.whl(true);
                neg.tlo.wnp(true);
                if (neg.tlo.win > 0) {
                    neg.tlo.pyn.cqr.evt("info", "#fuh", [neg.tlo.vbj(neg.tlo.language.yen) + ": " + neg.tlo.jea(neg.tlo.win)])
                } else {
                    neg.tlo.pyn.cqr.evt("info", "#fhg", [0])
                }
            }
        }
    };
    this.ggt = function () {
        var b = this.oxt.dgc("tops");
        if (b) {
            if (b.djj() == 1) {
                b.owt(0)
            } else {
                b.owt(1)
            }
            this.qay()
        }
    };
    this.psi = function () {
        var b = this.oxt.dgc("topi"),
            c = this.oxt.dgc("settings");
        this.ryz = !neg.tlo.ryz;
        this.pyn.cqr.evt("gamble", "#xlw", [this.ryz]);
        if (b) {
            b.zog("gamble", this.ryz)
        }
        if (c) {
            c.cqr.evt("gamble", "#lbu", [(this.ryz) ? 1 : 0])
        }
    };
    this.oar = function () {
        if (this.ict) {
            return false
        }
        var b = new flw(197, 24, 246, 200),
            c = neg.epl[neg.tlo.language.nxg.toLowerCase().replace(/\s/g, "") + (b.y / 4)];
        if (c && c.indexOf(":" + b.des() + "/") >= 0) {
            return false
        }
        return true
    };
    this.riq = function () {
        if (this.uiw === false) {
            this.aqn = 100;
            return
        }
        if (this.oar()) {
            var c = new Date().getTime(),
                b = c % this.typ.length,
                d = c % this.typ[b].xbo.length;
            if (this.aqn <= 0 && ((this.bee && this.bpo == 0) || (!this.bee && this.win == 0)) && c & 1 == 1) {
                if (this.bee && this.pwc) {
                    this.rlh[b] = d
                } else {
                    this.osu[b] = d
                }
            } else {
                this.aqn = (this.aqn > 0) ? this.aqn - 1 : 0
            }
        }
    };
    this.jmu = function () {
        neg.tlo.ake = 0;
        neg.tlo.zfm();
        neg.tlo.duh();
        neg.tlo.mmp(neg.tlo.osu);
        neg.tlo.xim();
        neg.tlo.sxh();
        if ((neg.tlo.qnr || neg.tlo.cti || neg.tlo.csv) && neg.tlo.win > 0 && neg.tlo.aqz > 0 && !neg.tlo.ibw) {
            neg.tlo.bvt(neg.tlo.qnr, neg.tlo.cti)
        }
        if (neg.tlo.win > 0) {
            if (!neg.tlo.ibw) {
                neg.tlo.mxc();
                neg.tlo.pyn.whl(false)
            }
            if (!neg.tlo.nsl()) {
                if (!neg.tlo.ict) {
                    neg.tlo.pyn.cqr.evt("start", "#rqq", [neg.tlo.language.uqh, true])
                }
            } else {
                neg.tlo.pyn.cqr.evt("start", "#rqq", [neg.tlo.language.start, true])
            }
            neg.tlo.kfm();
            neg.tlo.thn = true;
            neg.tlo.txy = setTimeout(neg.tlo.ztv, 10)
        } else {}
    };
    this.zgj = function () {};
    this.ztv = function () {
        if (!neg.tlo.ibw) {
            if (!neg.tlo.bee) {
                neg.tlo.voa()
            } else {
                neg.tlo.ran()
            }
        }
        if (!neg.tlo.slq) {
            if (neg.tlo.wpb) {
                neg.tlo.udl()
            } else {
                neg.tlo.qcy()
            }
        }
    };
    this.kfm = function () {
        var b = this.pyn.cqr.dgc("info");
        if (b) {
            if (!this.nsl()) {
                if (b.kka()) {
                    b.fuh(this.language.lor, true)
                }
            } else {
                b.fuh(this.language.tev, true)
            }
        }
    };
    this.mxc = function () {};
    this.aos = function () {};
    this.ugo = function () {
        for (var b = 0; b < this.dao; b++) {
            this.aoc[b] *= this.aub
        }
        this.aoc[this.dao] *= this.ffv()
    };

    function a(d, c) {
        return c[1] - d[1]
    }
    this.goe = function () {
        var c = [],
            d = 0;
        this.ugo();
        this.zno = [];
        this.aqz = 0;
        d = this.aoc[this.dao];
        for (var b = 0; b < this.dao; b++) {
            c[b] = [b, this.aoc[b]]
        }
        c.sort(a);
        if (this.hbg(d, c)) {
            this.aoc[0] = d;
            this.zno[0] = this.dao;
            if (this.aoc[0] > 0) {
                this.aqz++
            }
            for (var b = 1; b < this.dao + 1; b++) {
                this.aoc[b] = c[b - 1][1];
                this.zno[b] = c[b - 1][0];
                if (this.aoc[b] > 0) {
                    this.aqz++
                }
            }
            this.wpb = false
        } else {
            for (var b = 0; b < this.dao; b++) {
                this.aoc[b] = c[b][1];
                this.zno[b] = c[b][0];
                if (this.aoc[b] > 0) {
                    this.aqz++
                }
            }
            this.aoc[this.dao] = d;
            this.zno[this.dao] = this.dao;
            if (this.aoc[this.dao] > 0) {
                this.aqz++
            }
            this.wpb = true
        }
    };
    this.hbg = function (c, b) {
        return c > b[0][1]
    };
    this.nfs = function () {
        this.ake = this.ake + 1
    };
    this.rzn = function () {
        this.mxi = this.mxi + 1
    };
    this.udl = function () {
        if (!this.jcx) {
            if (this.ake < this.zno.length && this.zno[this.ake] < this.cig.length) {
                if (!this.tlm) {
                    this.zfm()
                }
                var b = this.rad(this.zno[this.ake]);
                this.zjk = this.noh(b);
                if (!this.tlm) {
                    this.hid(b)
                }
                if (this.aoc[this.ake] > 0) {
                    this.dco(this.snt, this.zjk, this.ake);
                    this.rjo.jog();
                    if (!this.cox && !this.ibw && this.ake == 0) {
                        if (this.xew) {
                            this.uhx.onc("symb" + this.snt);
                            if (this.kwo > 0) {
                                this.zwh = setTimeout(this.vud, this.kwo)
                            }
                        } else {
                            this.tzh()
                        }
                    } else {
                        if (this.pzh) {
                            this.vzp()
                        }
                    }
                    this.sbf()
                } else {
                    this.nfs();
                    this.udl()
                }
            } else {
                if (this.jwy >= 0 && this.wpb && this.ake <= this.cig.length) {
                    this.qcy();
                    this.thn = false
                } else {
                    this.uqm()
                }
            }
        }
    };
    this.noh = function (b) {
        var e = 0,
            c = 0;
        this.zjk = 0;
        this.hvm = 0;
        this.snt = b[e];
        if (this.snt == this.jwy) {
            return 0
        }
        for (var d = e; d < 5; d++) {
            if (this.snt == b[d]) {
                this.zjk += 1
            } else {
                break
            }
        }
        if (this.zjk == 0) {
            return 0
        }
        c = this.lca[this.snt][this.zjk - 1];
        if (c > 0) {
            return this.zjk
        }
        return 0
    };
    this.qcy = function () {
        if (!this.jcx) {
            if (!this.tlm) {
                this.zfm()
            }
            var b = this.wzh();
            if (b > 0 && this.lca[this.jwy][b - 1] > 0) {
                this.dco(this.jwy, b, this.ake);
                this.rjo.jog();
                if (!this.cox && !this.ibw && this.ake == 0) {
                    if (this.xew) {
                        this.uhx.onc("symb" + this.jwy);
                        if (this.kwo > 0) {
                            this.zwh = setTimeout(this.vud, this.kwo)
                        }
                    } else {
                        this.tzh()
                    }
                } else {
                    if (this.pzh) {
                        this.vzp()
                    }
                }
                this.hqz()
            } else {
                this.uqm()
            }
        }
    };
    this.sbf = function () {
        if (this.gey && this.vuj || !this.vuj) {
            if (!(this.ryz && this.cpk && !this.gey && !this.ibw)) {
                this.pfk([this.zno[this.ake] + 1]);
                if (this.inq && this.vuj && this.mxi > 0 && !this.ibw) {
                    this.rjo.sbf(this.zno[this.ake], this.xgn, this.upc, this.snt, this.hvm, this.zjk, true, true)
                } else {
                    this.rjo.sbf(this.zno[this.ake], this.xgn, this.upc, this.snt, this.hvm, this.zjk, true, false)
                }
            } else {
                if (!this.bid) {
                    this.pfk([this.zno[this.ake] + 1]);
                    if (this.inq) {
                        this.rjo.sbf(this.zno[this.ake], this.xgn, this.upc, this.snt, this.hvm, this.zjk, true, true)
                    } else {
                        this.rjo.sbf(this.zno[this.ake], this.xgn, this.upc, this.snt, this.hvm, this.zjk, false, false)
                    }
                } else {
                    this.pyn.cqr.evt("win", "#dqs");
                    this.pfk([this.dao + 1]);
                    this.nfs();
                    this.udl()
                }
            }
        } else {
            if (this.vuj && !this.ibw && !this.bid) {
                this.pfk([this.zno[this.ake] + 1]);
                if (this.inq) {
                    this.rjo.sbf(this.zno[this.ake], this.xgn, this.upc, this.snt, this.hvm, this.zjk, true, true)
                } else {
                    this.rjo.sbf(this.zno[this.ake], this.xgn, this.upc, this.snt, this.hvm, this.zjk, false, false)
                }
            } else {
                this.pyn.cqr.evt("win", "#dqs");
                this.pfk([this.dao + 1]);
                this.nfs();
                this.udl()
            }
        }
    };
    this.hqz = function () {
        if (this.gey && this.vuj || !this.vuj) {
            this.pfk([this.dao + 1]);
            if (!(this.ryz && this.cpk && !this.gey && !this.ibw)) {
                if (this.inq && this.vuj && this.mxi > 0 && !this.ibw) {
                    this.rjo.sbf(-1, this.xgn, false, this.jwy, this.hvm, this.zjk, true, true)
                } else {
                    this.rjo.sbf(-1, this.xgn, false, this.jwy, this.hvm, this.zjk, true, false)
                }
            } else {
                if (!this.bid) {
                    if (this.inq) {
                        this.rjo.sbf(-1, this.xgn, false, this.jwy, this.hvm, this.zjk, true, true)
                    } else {
                        this.rjo.sbf(-1, this.xgn, false, this.jwy, this.hvm, this.zjk, false, false)
                    }
                } else {
                    this.pyn.cqr.evt("win", "#dqs");
                    this.nfs();
                    this.udl()
                }
            }
        } else {
            if (this.vuj && !this.ibw && !this.bid) {
                this.pfk([this.dao + 1]);
                if (this.inq) {
                    this.rjo.sbf(-1, this.xgn, false, this.jwy, this.hvm, this.zjk, true, true)
                } else {
                    this.rjo.sbf(-1, this.xgn, false, this.jwy, this.hvm, this.zjk, false, false)
                }
            } else {
                this.pyn.cqr.evt("win", "#dqs");
                this.pfk([this.dao + 1]);
                this.nfs();
                this.udl()
            }
        }
    };
    this.pfk = function (b) {
        if (this.kbz === true) {
            this.oxt.evt("llinep", "#cyd", [b, true]);
            this.oxt.evt("rlinep", "#cyd", [b, true])
        }
    };
    this.dco = function (c, d, b) {
        var e = this.pyn.cqr.dgc("win");
        if (e) {
            if (this.win > 0 && !this.bee) {
                if (this.aoc[b] > 0) {
                    if (c == this.jwy) {
                        e.taw(this.language.qco, this.language.win + ": " + this.jea(this.aoc[b]), c, d)
                    } else {
                        e.taw(this.language.avj + " " + (this.zno[b] + 1) + ": ", this.language.win + ": " + this.jea(this.aoc[b]), c, d)
                    }
                }
            } else {
                if (this.bee && this.bpo > 0) {
                    if (this.aoc[b] > 0) {
                        if (this.gvv > 1) {
                            if (c == this.jwy) {
                                e.taw(this.language.qco, this.language.win + ": " + this.jea(this.aoc[b]) + " x " + this.gvv, c, d)
                            } else {
                                e.taw(this.language.avj + " " + (this.zno[b] + 1) + ": ", this.language.win + ": " + this.jea(this.aoc[b]) + " x " + this.gvv, c, d)
                            }
                        } else {
                            if (c == this.jwy) {
                                e.taw(this.language.qco, this.language.win + ": " + this.jea(this.aoc[b]), c, d)
                            } else {
                                e.taw(this.language.avj + " " + (this.zno[b] + 1) + ": ", this.language.win + ": " + this.jea(this.aoc[b]), c, d)
                            }
                        }
                    }
                }
            }
        }
    };
    this.vud = function () {
        neg.tlo.uhx.onc("wincountfade")
    };
    this.zfm = function () {
        for (var b = 0; b < this.xgn.length; b++) {
            for (var c = 0; c < this.xgn[b].length; c++) {
                this.xgn[b][c] = -1
            }
        }
    };
    this.duh = function () {
        for (var b = 0; b < this.iog.length; b++) {
            for (var c = 0; c < this.iog[b].length; c++) {
                this.iog[b][c] = -1
            }
        }
    };
    this.mmp = function (e) {
        for (var d = 0; d < this.frf; d++) {
            for (var b = 0; b < this.pky; b++) {
                var c = (e[d] - 1 + b >= 0) ? e[d] - 1 + b : this.typ[d].xbo.length + e[d] - 1 + b;
                c = (c > this.typ[d].xbo.length - 1) ? c - (this.typ[d].xbo.length) : c;
                this.iog[d][b] = this.typ[d].xbo[c]
            }
        }
    };
    this.xim = function () {
        if (this.tlm) {
            for (var d = 0; d < this.cig.length; d++) {
                if (this.zno[d] < this.cig.length) {
                    var c = this.rad(this.zno[d]);
                    this.zjk = this.noh(c);
                    if (this.aoc[d] > 0) {
                        for (var b = this.hvm; b < this.hvm + this.zjk; b++) {
                            if (this.xen && c[b] == this.bzu) {
                                this.xgn[b][this.cig[this.zno[d]][b] - 1] = this.wzs
                            } else {
                                this.xgn[b][this.cig[this.zno[d]][b] - 1] = c[b]
                            }
                        }
                    }
                }
            }
        }
    };
    this.sxh = function () {
        if (this.tlm) {
            if (this.jwy >= 0) {
                var d = 0;
                for (var c = 0; c < this.iog.length; c++) {
                    for (var b = 0; b < this.iog[c].length; b++) {
                        if (this.iog[c][b] == this.jwy) {
                            d++
                        }
                    }
                }
                if ((this.aoc[this.cig.length] > 0 && this.wpb) || (this.aoc[0] > 0 && !this.wpb)) {
                    for (var c = 0; c < this.iog.length; c++) {
                        for (var b = 0; b < this.iog[c].length; b++) {
                            if (this.iog[c][b] == this.jwy) {
                                this.xgn[c][b] = this.iog[c][b]
                            }
                        }
                    }
                }
            }
        }
    };
    this.rad = function (d) {
        var c = [];
        for (var b = 0; b < this.cig[d].length; b++) {
            c[b] = this.iog[b][this.cig[d][b] - 1]
        }
        return c
    };
    this.hid = function (c) {
        for (var b = this.hvm; b < this.hvm + this.zjk; b++) {
            if (this.xen && c[b] == this.bzu) {
                this.xgn[b][this.cig[this.zno[this.ake]][b] - 1] = this.wzs
            } else {
                this.xgn[b][this.cig[this.zno[this.ake]][b] - 1] = c[b]
            }
        }
    };
    this.wzh = function () {
        var d = 0;
        for (var c = 0; c < this.iog.length; c++) {
            for (var b = 0; b < this.iog[c].length; b++) {
                if (this.iog[c][b] == this.jwy) {
                    this.xgn[c][b] = this.iog[c][b];
                    d++;
                    break
                }
            }
        }
        return d
    };
    this.fom = function (b) {
        if (((this.xen && b == this.wzs) && this.wzs >= 0) || (b == this.bzu && this.bzu >= 0)) {
            return true
        }
        return false
    };
    this.npf = function () {
        if (this.ykc) {
            this.pyn.cqr.evt("start", "#rqq", [this.language.start, true]);
            if (!this.bee) {
                this.hsv();
                this.pyn.whl(false);
                this.yru = setTimeout(this.zzw, 600)
            } else {
                this.qmc()
            }
        } else {
            if (!this.bee) {
                this.gna()
            } else {
                this.zft()
            }
        }
    };
    this.gna = function () {
        if (this.win > 0) {
            if (this.ryz && this.cpk) {
                setTimeout(this.nvq, 400)
            } else {
                if (this.vuj || this.guq) {
                    if (!this.fby && !this.jcx) {
                        if (this.guq) {
                            this.fby = true;
                            this.hsv();
                            setTimeout(this.uqh, 400)
                        } else {
                            clearTimeout(this.imr);
                            this.imr = setTimeout(this.qzm, 400)
                        }
                    }
                }
            }
        } else {
            this.pld({
                type: "roundEnded",
                sender: this.mvb,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    win: this.jea(this.win),
                    balanceAfter: this.jea(this.dgi)
                }
            });
            this.pyn.cqr.evt("info", "#fuh", [this.language.bjm, true]);
            this.goy();
            if (this.igw > 0 && this.boo >= this.igw) {
                this.wnp(false);
                this.pyn.whl(false);
                this.lxc();
                this.euu()
            } else {
                this.pyn.cqr.evt("start", "#rqq", [this.language.start, true]);
                if (this.uqw()) {
                    this.lxc();
                    this.pyn.cqr.evt("info", "#rqt", [0]);
                    this.pyn.whl(true);
                    this.wnp(true);
                    this.zxd()
                } else {
                    if (this.vuj) {
                        this.wrr = setTimeout(this.ufz, 400)
                    } else {
                        this.pyn.cqr.evt("info", "#rqt", [0]);
                        this.pyn.whl(true);
                        this.wnp(true)
                    }
                }
            }
        }
    };
    this.zft = function () {};
    this.gny = function () {
        return ((this.vuj || (this.ryz && this.cpk && !this.gey)) && this.aqz > 1 && this.bid)
    };
    this.ovp = function () {
        var c = [],
            f = [],
            e = (this.wpb) ? 0 : 1,
            b = ((this.wpb && this.aoc[this.dao] > 0) || (!this.wpb && this.aoc[0] > 0)) ? this.aqz - 1 : this.aqz;
        for (var d = 0; d < b; d++, e++) {
            c[d] = this.zno[e];
            f[d] = this.zno[e] + 1
        }
        this.nhg = true;
        this.slq = true;
        this.duh();
        this.zfm();
        this.mmp((this.bee === true) ? this.rlh : this.osu);
        this.xim();
        this.sxh();
        this.pyn.cqr.evt("win", "#fuh", [this.language.win + " " + b + " " + this.language.gzg, true]);
        this.pfk(f);
        this.rjo.stop();
        this.rjo.evj(c, this.xgn);
        this.jdi = setTimeout(this.lua, 1000)
    };
    this.lua = function () {
        if (neg.tlo.jdi >= 0 && !neg.tlo.vuj) {
            neg.tlo.jdi = -1;
            neg.tlo.hsv()
        }
        if (neg.tlo.yzv()) {
            neg.tlo.yan()
        } else {
            neg.tlo.npf()
        }
    };
    this.uqm = function () {
        this.cox = true;
        this.ibw = true;
        if (!this.bee) {
            if (!this.gey) {
                if (this.gny()) {
                    this.ovp()
                } else {
                    this.lua()
                }
            }
            if (!(this.jcx || this.slq || ((this.nhg) && !this.gey))) {
                if (!(this.ryz && this.cpk && !this.gey)) {
                    this.lpd()
                }
            }
        } else {
            if (!this.gey) {
                if (this.gny()) {
                    this.ovp()
                } else {
                    this.lua()
                }
            } else {
                if (!(this.jcx || this.slq || (this.nhg && !this.gey))) {
                    this.lpd()
                } else {}
            }
        }
    };
    this.lpd = function () {
        this.ibw = true;
        if (!(this.rjo.qwh() || this.vnt)) {
            this.vnt = true;
            if (!this.bee) {
                this.jmu()
            } else {
                this.zgj();
                if (!this.ykc && this.noc > 0) {
                    if (!this.gey) {
                        this.wnp(true);
                        this.pyn.ohy(true)
                    }
                }
            }
        }
    };
    this.aik = function () {
        return false
    };
    this.xch = function () {
        return false
    };
    this.yzv = function () {
        return false
    };
    this.fcm = function () {};
    this.len = function () {};
    this.yan = function () {};
    this.nsl = function () {
        return this.ykc
    };
    this.the = function () {
        if (!neg.tlo.fby && !neg.tlo.jcx) {
            neg.tlo.qzm()
        }
    };
    this.ufz = function () {
        if (neg.tlo.qmr() != null && (neg.tlo.owd <= 0 || (neg.tlo.bee === false && neg.tlo.npo === false && neg.tlo.dgi - neg.tlo.ffv() < neg.tlo.srt) || (neg.tlo.bee === false && neg.tlo.npo === false && neg.tlo.say > 0 && neg.tlo.dgi >= neg.tlo.say) || (neg.tlo.bee === false && neg.tlo.efr > 0 && neg.tlo.win > neg.tlo.efr))) {
            if (neg.tlo.vuj === true) {
                neg.tlo.mlx()
            }
            neg.tlo.wnp(true);
            if (neg.tlo.bee === true) {
                neg.tlo.kfk(neg.tlo.win);
                neg.tlo.hsv();
                neg.tlo.mxe();
                neg.tlo.poq();
                neg.tlo.pyn.cqr.evt("info", "#dqs");
                neg.tlo.rsk(true);
                neg.tlo.pyn.ohy(true)
            } else {
                neg.tlo.pyn.cqr.evt("info", "#tyk");
                neg.tlo.pyn.whl(true)
            }
        } else {
            if (!neg.tlo.pex) {
                neg.tlo.qzm()
            }
        }
    };
    this.jtd = function () {};
    this.xgb = function () {};
    this.mso = function () {};
    this.yor = function () {};
    this.qmc = function () {};
    this.zzw = function () {};
    this.lqt = function () {};
    this.ipg = function () {};
    this.ngn = function () {};
    this.yfr = function () {
        var b = this.oxt.dgc("tops");
        if (b) {
            b.owt(1)
        }
    };
    this.zfz = function () {
        var b = this.oxt.dgc("tops");
        if (b) {
            b.owt(0)
        }
    };
    this.dse = function () {};
    this.hkh = function () {};
    this.tvi = function () {};
    this.zqz = function () {};
    this.tfr = function () {
        if (!(this.ykc && this.bee && this.vuj)) {
            this.wll = false;
            if (!neg.tlv.fzg) {
                this.ous = this.language.qdp
            } else {
                this.ous = this.language.uqu
            }
            this.omx = setInterval(this.gpj, 1000)
        }
    };
    this.gpj = function () {
        var b = neg.tlo.pyn.cqr.dgc("info");
        if (b) {
            if (neg.tlo.wll) {
                b.fuh(neg.tlo.ous, true)
            } else {
                b.dqs()
            }
            neg.tlo.qay();
            neg.tlo.wll = !neg.tlo.wll
        }
    };
    this.hkp = function () {};
    this.kuv = function () {};
    this.soz = function (b) {};
    this.yvb = function (b) {
        if (b) {
            this.r1 = this.nvf.jja.vje;
            this.r2 = this.nvf.jja.rup;
            this.r3 = this.nvf.jja.ogk;
            this.r4 = this.nvf.jja.lpf;
            this.r5 = this.nvf.jja.rte
        } else {
            this.r1 = this.nvf.jja.r1;
            this.r2 = this.nvf.jja.r2;
            this.r3 = this.nvf.jja.r3;
            this.r4 = this.nvf.jja.r4;
            this.r5 = this.nvf.jja.r5
        }
        this.hxb.xbo = this.r1;
        this.zpm.xbo = this.r2;
        this.eak.xbo = this.r3;
        this.ogp.xbo = this.r4;
        this.cxy.xbo = this.r5
    };
    this.odb = function () {};
    this.voa = function () {
        if (!(this.ryz && this.cpk)) {
            setTimeout(this.jri, 500);
            if (!this.vuj && !this.guq && !this.ryz && !this.nsl()) {
                this.pyn.cqr.evt("gamble", "#qcx")
            }
        } else {
            setTimeout(this.kgu, 500)
        }
        this.ghy = (this.win > this.totalBet) ? true : false;
        this.kko = 0;
        this.qxm = 0;
        this.crt = 0;
        this.vej = 0;
        this.uyh = 0;
        this.sqx = this.win;
        this.xkr = new Date().getTime();
        this.gey = true;
        this.css = 0;
        this.poq();
        this.uhx.yiv("winfinal");
        this.mdo = setTimeout(this.umn, this.qtx)
    };
    this.jri = function () {
        if (neg.tlo.vuj || neg.tlo.nsl()) {
            neg.tlo.pyn.xzt(true)
        } else {
            neg.tlo.pyn.nun(true)
        }
    };
    this.kgu = function () {
        neg.tlo.pyn.ujm(true)
    };
    this.ran = function () {};
    this.zby = function () {};
    this.hpk = function () {
        this.hsv();
        this.mxe();
        if (this.bee) {
            this.nhg = true
        }
        this.fxk()
    };
    this.zxx = function () {};
    this.hsv = function () {
        this.slq = true;
        this.cox = true;
        if (this.qnr || this.cti || this.csv) {
            this.bvt(false, false)
        }
        this.pyn.cqr.evt("win", "#dqs");
        this.pfk(null);
        this.rjo.stop();
        this.rjo.crq()
    };
    this.mxe = function () {
        if (this.xew) {
            for (var c = 0, b = this.uhx.pte("symb"); c < b; c++) {
                this.uhx.yiv("symb" + c)
            }
        }
    };
    this.tzh = function () {
        if (neg.tlo.gey) {
            neg.tlo.avq = false;
            neg.tlo.css = new Date().getTime();
            neg.tlo.uhx.onc("wincount");
            neg.tlo.mxi += 1;
            neg.tlo.qxm = 0;
            neg.tlo.crt = 0
        } else {
            clearTimeout(neg.tlo.zwh);
            if (neg.tlo.bee === true && neg.tlo.cnh() === true) {
                neg.tlo.uhx.scw("freespinstart", neg.tlo.ijj(), 300)
            } else {
                if (neg.tlo.bee === false) {
                    neg.tlo.mxm(1, 300)
                }
            }
        }
    };
    this.poq = function () {
        this.uhx.yiv("wincount");
        this.uhx.yiv("wincount1");
        this.uhx.yiv("wincount2");
        this.uhx.yiv("wincount3");
        this.uhx.yiv("wincount4");
        this.uhx.yiv("wincount5");
        this.uhx.yiv("wincount6")
    };
    this.eyw = function () {
        neg.tlo.avq = true;
        if (neg.tlo.bee === true && neg.tlo.cnh() === true) {
            neg.tlo.uhx.scw("freespinstart", neg.tlo.ijj(), 300)
        } else {
            if (neg.tlo.bee === false && neg.tlo.ykc === false) {
                neg.tlo.mxm(1, 300)
            }
        }
    };
    this.umn = function () {
        var d = 0,
            b = neg.tlo.qtx,
            c = 0;
        if (neg.tlo.uyh < neg.tlo.sqx) {
            if (neg.tlo.fdu == 1) {
                neg.tlo.gbl()
            } else {
                if (neg.tlo.fdu == 2) {
                    neg.tlo.hmt()
                } else {
                    if (neg.tlo.fdu == 3) {
                        neg.tlo.gba()
                    }
                }
            }
            d = neg.tlo.sal(neg.tlo.sqx - neg.tlo.uyh);
            neg.tlo.uyh += d;
            neg.tlo.kfk(neg.tlo.vej + neg.tlo.uyh);
            neg.tlo.kko++;
            c = new Date().getTime();
            b = neg.tlo.qtx + (neg.tlo.kko * neg.tlo.qtx - (c - neg.tlo.xkr));
            neg.tlo.mdo = setTimeout(neg.tlo.umn, b)
        } else {
            neg.tlo.fxk()
        }
    };
    this.gbl = function () {
        if (this.css > 0) {
            var b = new Date().getTime() - this.css;
            if (b > 7112 && this.qxm == 0) {
                this.uhx.onc("wincount1");
                this.qxm = 1
            } else {
                if (b > (7112 + (3556 * this.qxm))) {
                    if (this.qxm % 2 == 0) {
                        if (this.uyh >= this.totalBet * this.ztg) {
                            this.uhx.onc("wincount5");
                            if (this.tzo) {
                                if (!this.rjo.kzs) {
                                    this.rjo.jen()
                                } else {
                                    this.rjo.ily()
                                }
                            }
                        } else {
                            if (this.uyh >= this.totalBet * this.ytz) {
                                this.uhx.onc("wincount3")
                            } else {
                                this.uhx.onc("wincount1")
                            }
                        }
                    } else {
                        if (this.uyh >= this.totalBet * this.ztg) {
                            this.uhx.onc((this.uhx.cyp === true) ? "wincount5" : "wincount6");
                            if (this.tzo) {
                                if (!this.rjo.kzs) {
                                    this.rjo.jen()
                                } else {
                                    this.rjo.ily()
                                }
                            }
                        } else {
                            if (this.uyh >= this.totalBet * this.ytz) {
                                this.uhx.onc((this.uhx.cyp === true) ? "wincount3" : "wincount4")
                            } else {
                                this.uhx.onc((this.uhx.cyp === true) ? "wincount1" : "wincount2")
                            }
                        }
                    }
                    this.qxm += 1
                }
            }
        }
    };
    this.hmt = function () {
        if (this.css > 0) {
            var b = new Date().getTime() - this.css;
            if (b > 4173 && this.qxm == 0) {
                this.uhx.onc("wincount1");
                this.qxm = 1
            } else {
                if (b > (4173 + (4173 * (this.qxm + this.crt)))) {
                    if (this.qxm % 2 == 0) {
                        if (this.uyh >= this.totalBet * this.ztg) {
                            this.uhx.onc("wincount5");
                            if (this.tzo) {
                                if (!this.rjo.kzs) {
                                    this.rjo.jen()
                                } else {
                                    this.rjo.ily()
                                }
                            }
                            this.crt += 1
                        } else {
                            if (this.uyh >= this.totalBet * this.ytz) {
                                this.uhx.onc("wincount3")
                            } else {
                                this.uhx.onc("wincount1")
                            }
                        }
                    } else {
                        if (this.uyh >= this.totalBet * this.ztg) {
                            this.uhx.onc((this.uhx.cyp === true) ? "wincount5" : "wincount6");
                            if (this.tzo) {
                                if (!this.rjo.kzs) {
                                    this.rjo.jen()
                                } else {
                                    this.rjo.ily()
                                }
                            }
                            this.crt += 1
                        } else {
                            if (this.uyh >= this.totalBet * this.ytz) {
                                this.uhx.onc((this.uhx.cyp === true) ? "wincount3" : "wincount4")
                            } else {
                                this.uhx.onc((this.uhx.cyp === true) ? "wincount1" : "wincount2")
                            }
                        }
                    }
                    this.qxm += 1
                }
            }
        }
    };
    this.gba = function () {};
    this.fxk = function () {
        if (this.sqx > 0) {
            clearTimeout(this.zwh);
            this.uhx.scw("wincountfade", 0, 300);
            if (this.css > 0) {
                this.uhx.onc("winfinal")
            } else {
                if (this.bee === false && this.ykc === false) {
                    this.mxm(1, 300)
                }
            }
        } else {
            this.eyw()
        }
        this.poq();
        this.kfk(this.win);
        this.kit(this.win);
        this.gey = false;
        clearTimeout(this.mdo);
        if (!(this.vuj || this.guq)) {
            if (!(this.ccm > 0)) {
                if (!this.ryz) {
                    this.nzk = setTimeout(this.vzp, 500)
                }
            } else {
                if (this.bee && this.noc > 0) {
                    this.pyn.xzt(true);
                    if (!this.ykc && !this.yzv()) {
                        this.wnp(true)
                    }
                }
            }
        }
        if (this.cox) {
            if (this.gny()) {
                this.ovp()
            } else {
                this.lua()
            }
        }
    };
    this.sal = function (c) {
        var b = this.aub;
        if (c <= b) {
            if (b > 10) {
                b = Math.round(b / 10)
            } else {
                b = 1
            }
        }
        if (b < 1) {
            b = 1
        }
        return b
    };
    this.kdw = function () {
        return !(this.nsl() || this.guq || this.bee)
    };
    this.rno = function () {
        var d = neg.tlo.pyn.cqr.dgc("gamble"),
            c = neg.tlo.pyn.cqr.dgc("info"),
            b = neg.tlo.pyn.cqr.dgc("win");
        neg.tlo.wgu();
        if (d) {
            d.wpk();
            d.xlw(neg.tlo.ryz)
        }
        if (b) {
            b.dqs()
        }
        if (c) {
            c.fuh(neg.tlo.vbj(neg.tlo.language.yen) + ": " + neg.tlo.jea(neg.tlo.win))
        }
        neg.tlo.nvf.uqh()
    };
    this.uqh = function () {
        if (!neg.tlo.jcx) {
            if (neg.tlo.xfs != neg.tlo.rah) {
                neg.tlo.pyn.xzt(true)
            }
            neg.tlo.hsv();
            neg.tlo.gwn = 20;
            if (neg.tlo.win < neg.tlo.gwn) {
                neg.tlo.gwn = neg.tlo.win;
                neg.tlo.cen()
            } else {
                if (neg.tlo.win >= neg.tlo.ffv() * 25) {
                    neg.tlo.gwn = 40
                }
                neg.tlo.cen()
            }
        }
    };
    this.wad = function () {
        this.jcx = true;
        this.fby = false;
        this.sqx = 0;
        clearTimeout(this.qsn);
        this.uhx.yiv("collect");
        this.uhx.yiv("collectend");
        this.uhx.onc("collectend");
        this.hsm(this.dgi, true, !this.npo);
        this.vri();
        this.goy();
        this.pyn.cqr.evt("start", "#rqq", [this.language.start, true]);
        this.pld({
            type: "roundEnded",
            sender: this.mvb,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                win: this.jea(this.win),
                balanceAfter: this.jea(this.dgi)
            }
        });
        if (this.igw > 0 && this.boo >= this.igw) {
            this.wnp(false);
            this.pyn.whl(false);
            this.lxc();
            this.euu()
        } else {
            if (this.uqw()) {
                this.lxc();
                this.wnp(true);
                this.pyn.whl(true);
                this.zxd()
            } else {
                this.wnp(true);
                if (!this.vuj) {
                    this.pyn.whl(true)
                } else {
                    this.wrr = setTimeout(this.ufz, 500)
                }
            }
        }
    };
    this.cen = function () {
        this.yrb = false;
        this.ghy = (this.win > this.totalBet) ? true : false;
        this.kko = 0;
        this.vej = this.win;
        if (this.npo) {
            this.xry = this.ova - this.win
        } else {
            this.xry = this.dgi - this.win
        }
        this.uyh = 0;
        this.sqx = this.win;
        this.xkr = new Date().getTime();
        this.fby = true;
        this.qsn = setTimeout(this.qhs, this.cge)
    };
    this.qhs = function () {
        var d = 0,
            b = neg.tlo.qtx,
            c = 0;
        if (neg.tlo.sqx > 0) {
            if (!neg.tlo.yrb) {
                neg.tlo.uhx.yiv("collect");
                neg.tlo.uhx.yiv("collectend");
                neg.tlo.uhx.onc("collect");
                neg.tlo.yrb = true
            }
            d = Math.round(neg.tlo.sqx / neg.tlo.gwn);
            neg.tlo.sqx -= d;
            neg.tlo.kko++;
            neg.tlo.gwn -= 1;
            if (neg.tlo.sqx < 0) {
                neg.tlo.sqx = 0
            }
            neg.tlo.kfk(neg.tlo.vej - (neg.tlo.win - neg.tlo.sqx));
            if (neg.tlo.npo) {
                neg.tlo.vfz(neg.tlo.xry + (neg.tlo.win - neg.tlo.sqx), true)
            } else {
                neg.tlo.hsm(neg.tlo.xry + (neg.tlo.win - neg.tlo.sqx), true, false)
            }
            c = new Date().getTime();
            b = neg.tlo.cge + (neg.tlo.kko * neg.tlo.cge - (c - neg.tlo.xkr));
            neg.tlo.qsn = setTimeout(neg.tlo.qhs, b)
        } else {
            if (!neg.tlo.jcx) {
                neg.tlo.uhx.yiv("collect");
                neg.tlo.uhx.onc("collectend");
                neg.tlo.fby = false;
                neg.tlo.jcx = true;
                clearTimeout(neg.tlo.qsn);
                neg.tlo.hsm(neg.tlo.dgi, true, !neg.tlo.npo);
                neg.tlo.vri();
                neg.tlo.goy();
                neg.tlo.pyn.cqr.evt("start", "#rqq", [neg.tlo.language.start, true]);
                neg.tlo.pld({
                    type: "roundEnded",
                    sender: neg.tlo.mvb,
                    lang: sessionStorage.sessionValue1.toUpperCase(),
                    data: {
                        win: neg.tlo.jea(neg.tlo.win),
                        balanceAfter: neg.tlo.jea(neg.tlo.dgi)
                    }
                });
                if (neg.tlo.igw > 0 && neg.tlo.boo >= neg.tlo.igw) {
                    neg.tlo.wnp(false);
                    neg.tlo.pyn.whl(false);
                    neg.tlo.lxc();
                    neg.tlo.euu()
                } else {
                    if (neg.tlo.xfs == neg.tlo.rah) {
                        neg.tlo.xfs()
                    } else {
                        if (neg.tlo.uqw()) {
                            neg.tlo.lxc();
                            neg.tlo.pyn.whl(true);
                            neg.tlo.wnp(true);
                            neg.tlo.zxd()
                        } else {
                            if (!neg.tlo.vuj) {
                                neg.tlo.pyn.whl(true)
                            } else {
                                neg.tlo.pyn.syu(true)
                            }
                            neg.tlo.wnp(true);
                            if (neg.tlo.vuj || neg.tlo.guq) {
                                neg.tlo.pyn.cqr.evt("info", "#fuh", [neg.tlo.vbj(neg.tlo.language.yen) + ": " + neg.tlo.jea(neg.tlo.win)]);
                                if (neg.tlo.vuj) {
                                    neg.tlo.wrr = setTimeout(neg.tlo.ufz, 400)
                                } else {
                                    if (neg.tlo.guq) {}
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.gly = function (b, c, d) {
        if (b <= c) {
            return 1
        }
        var e = 0,
            f = this.ucc(b, c, d),
            g = 0;
        while (b > g) {
            f = this.ucc(b - g, c, d);
            g += f;
            e++
        }
        return e
    };
    this.ucc = function (e, b, c) {
        var d = b;
        if (e <= b && !c) {
            return e
        } else {
            if (c) {
                if (e <= 10) {
                    d = 1
                } else {
                    d = 10;
                    if (e > b) {
                        d = b
                    } else {
                        d = Math.floor(e / 2)
                    }
                }
            }
        }
        return d
    };
    this.met = function (b) {
        this.pbd = true;
        this.cuh();
        this.pyn.cqr.evt("info", "#fuh", ["", true]);
        this.twy(true);
        this.vnf(b);
        if (b == neg.tcp.jsj.qyg) {
            this.znd();
            this.pyn.cqr.evt("info", "#fhg", [0]);
            this.pkn((this.igw > 0 && this.boo < this.igw), false, true);
            this.pyn.whl(true);
            this.wnp(true);
            this.ube()
        } else {
            if (b == neg.tcp.jsj.fst) {
                if (this.win > 0) {
                    this.ibw = true;
                    this.jcx = false;
                    this.cox = false;
                    this.slq = false;
                    this.goe();
                    this.kfk(this.win);
                    this.pyn.cqr.evt("info", "#fuh", [this.vbj(this.language.yen) + ": " + this.jea(this.win)]);
                    this.gey = false;
                    this.bvt(this.qnr, this.cti);
                    this.mxc();
                    if (this.rok() === false) {
                        this.cpk = true;
                        this.pyn.cqr.evt("start", "#rqq", [this.language.uqh, true]);
                        this.pyn.cqr.evt("gamble", "#qcx");
                        this.nzk = setTimeout(this.vzp, 10)
                    } else {
                        this.cpk = false
                    }
                    if (this.xch()) {
                        this.len()
                    } else {
                        this.jmu();
                        this.pyn.nun(true)
                    }
                } else {
                    this.znd();
                    this.pyn.cqr.evt("info", "#fhg", [0]);
                    this.pkn((this.igw > 0 && this.boo < this.igw), false, true);
                    this.pyn.whl(true);
                    this.wnp(true);
                    this.ube()
                }
                this.ccm = 0;
                this.noc = 0
            } else {
                if (b == neg.tcp.jsj.itt || b == neg.tcp.jsj.ezz) {
                    this.ccm = 0;
                    this.noc = 0;
                    this.jcx = true;
                    this.znd();
                    this.pyn.cqr.evt("info", "#fhg", [0]);
                    this.pkn((this.igw > 0 && this.boo < this.igw), false, true);
                    this.pyn.whl(true);
                    this.wnp(true);
                    this.ube()
                } else {
                    if (b == neg.tcp.jsj.eny || b == neg.tcp.jsj.nwd || b == neg.tcp.jsj.eva || b == neg.tcp.jsj.xlc) {
                        this.mks(b)
                    } else {
                        if (b == neg.tcp.jsj.kra) {
                            this.yvb(false);
                            this.ccm = 0;
                            this.noc = 0;
                            this.cpk = true;
                            this.jcx = false;
                            if (this.win > 0) {
                                this.kfk(this.win);
                                this.pyn.cqr.evt("info", "#fuh", [this.vbj(this.language.yen) + ": " + this.jea(this.win)]);
                                if (this.rok() === false) {
                                    this.pyn.cqr.evt("start", "#rqq", [this.language.uqh, true]);
                                    this.pyn.cqr.evt("gamble", "#qcx");
                                    this.nzk = setTimeout(this.vzp, 10)
                                } else {
                                    this.cpk = false
                                }
                                this.pyn.nun(true)
                            } else {
                                this.znd();
                                this.pyn.cqr.evt("info", "#fhg", [0]);
                                this.pkn((this.igw > 0 && this.boo < this.igw), false, true);
                                this.pyn.whl(true);
                                this.wnp(true);
                                this.ube()
                            }
                        } else {
                            if (b == neg.tcp.jsj.ewe) {
                                this.yvb(false);
                                this.ccm = 0;
                                this.noc = 0;
                                this.jcx = true;
                                this.znd();
                                this.pyn.cqr.evt("info", "#fhg", [0]);
                                this.pkn((this.igw > 0 && this.boo < this.igw), false, true);
                                this.pyn.whl(true);
                                this.wnp(true);
                                this.ube()
                            } else {
                                if (b == neg.tcp.jsj.duo) {
                                    this.ccm = 0;
                                    this.noc = 0;
                                    this.frk();
                                    this.pbd = true;
                                    if (this.win == 0) {
                                        this.pkn((this.igw > 0 && this.boo < this.igw), false, true);
                                        this.ube()
                                    }
                                } else {
                                    if (b == neg.tcp.jsj.vqj) {
                                        this.ccm = 0;
                                        this.noc = 0;
                                        this.znt();
                                        this.pbd = true
                                    } else {
                                        this.bvk(b)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.mks = function (b) {};
    this.bvk = function (b) {};
    this.vnf = function (b) {
        if (neg.epl.value9 && neg.tlv.egn == neg.wpv.rsy && neg.tlv.omh() === false) {
            return
        }
        if (b == neg.tcp.jsj.nwd || b == neg.tcp.jsj.eva || b == neg.tcp.jsj.xlc || b == neg.tcp.jsj.eny) {
            this.uhx.onc("freespinstart")
        } else {
            if (!((b == neg.tcp.jsj.duo && this.win > 0) || b == neg.tcp.jsj.vqj)) {
                this.uhx.onc("start");
                this.khe()
            }
        }
    };
    this.yjj = function () {
        this.riq();
        this.twy(true);
        if (this.hxb.iiy < this.pky || this.hxb.myc > 0) {
            this.zlg()
        } else {
            var b = this.hxb.iiy * this.zyy;
            setTimeout(this.zlg, b)
        }
    };
    this.zlg = function () {
        if (!neg.tlo.nkh) {
            if (!neg.tlo.zmp && neg.tlo.npb()) {
                neg.tlo.pyn.cqr.evt("start", "#rqq", [neg.tlo.language.njb, true])
            }
            neg.tlo.ivb();
            for (var c = 0, b = neg.tlo.typ.length; c < b; c++) {
                if (neg.tlo.typ[c] && neg.tlo.wxz[c]) {
                    neg.tlo.typ[c].gfa(neg.tlo.osu[c], neg.tlo.aqb[c] - neg.tlo.aqb[0] + neg.tlo.are[c], neg.tlo.fge)
						/*-------------*/
					for(var j=0; j<gameController.reels['reel'+(c+1)].length; j++){
						
					if(gameController.reels['reel'+(c+1)][j]!=""){
						
					neg.tlo.typ[c].enx[j+1]=parseInt(gameController.reels['reel'+(c+1)][j]);	
						
					}	
						
					
					
					}
					/*------------*/
                }
            }
            neg.tlo.nkh = true;
            neg.tlo.oub = true;
            if (neg.tlo.wpw === true) {
                neg.tlo.hhq()
            }
        }
    };
    this.nyc = function () {};
    this.net = function () {};
    this.jxy = function () {
        this.pbd = false;
        this.guq = false;
        this.cpk = true;
        this.nhg = false;
        this.cuh();
        this.yjj();
        this.pyn.syu(true);
        this.doe()
    };
    this.yhx = function () {
        this.pbd = false;
        this.guq = true;
        this.cpk = false;
        this.nhg = false;
        this.cuh();
        if (this.aqc && this.aqc.cxw()) {
            this.hsm(this.dgi, false, true);
            this.aqc.pqh(this.dgi, this.win, true);
            setTimeout(this.aqc.rgu, 1000)
        } else {
            this.yjj();
            this.pyn.syu(true);
            this.doe()
        }
    };
    this.kbv = function () {
        this.pbd = false;
        this.cpk = false;
        this.cpd = true;
        this.cuh();
        this.gap();
        if (this.aqc && this.aqc.cxw()) {
            this.aqc.bjq();
            this.hsm(this.dgi, false, true);
            setTimeout(this.aqc.rgu, 100)
        } else {
            this.uqh()
        }
    };
    this.znt = function () {
        this.pbd = false;
        this.cuh();
        if (this.aqc) {
            if (!this.aqc.cxw()) {
                this.nvq()
            } else {
                this.aqc.gox()
            }
            this.hsm(this.dgi, false, true);
            this.aqc.pqh(this.dgi, this.win, true);
            this.aqc.whl(true)
        }
    };
    this.frk = function () {
        this.pbd = false;
        this.cuh();
        if (this.aqc) {
            if (!this.aqc.cxw() && this.win > 0) {
                this.nvq()
            }
            this.aqc.pqh(this.dgi, this.win, true);
            if (this.win == 0) {
                this.aqc.cqr.evt("info", "#dqs");
                setTimeout(this.woj, 1000)
            }
        }
    };
    this.plk = function () {};
    this.sik = function () {};
    this.uam = function () {};
    this.rzg = function () {};
    this.avx = function () {};
    this.gxe = function () {};
    this.faj = function (b) {
        if (b == neg.ieh.hav) {
            this.pyn.cqr.evt("info", "#fuh", [this.language.qpl, true])
        } else {
            if (b == neg.ieh.aol) {
                this.pyn.cqr.evt("info", "#fuh", [this.language.cwk + " " + this.jea(this.gwx), true])
            } else {
                if (b >= neg.ieh.swe) {
                    this.vhy();
                    if (b == neg.ieh.lzi || b == neg.ieh.lqw) {
                        this.stop()
                    }
                    this.pyn.cqr.evt("info", "#dqs");
                    this.pyn.whl(false);
                    this.wnp(false)
                }
            }
        }
        this.lxc();
        if (b < neg.ieh.swe) {
            this.cpd = true;
            this.pyn.whl(true);
            this.wnp(true)
        } else {
            this.kfs([{
                xjv: b
            }])
        }
    };
    this.gkm = function (c, e) {
        var d = this.oxt.dgc("stats"),
            b = this.oxt.dgc("history");
        if (this.dpc) {
            if (!this.ict) {
                if (d && d.cxw()) {
                    d.whl(false);
                    d.wmg(false)
                }
                this.oxt.evt("settings", "#crq");
                if (this.aqc != null && this.aqc.cxw()) {
                    this.aqc.cqr.evt("info", "#fuh", [c, true]);
                    this.aqc.whl(false);
                    this.ogr()
                } else {
                    if (this.pyn != null) {
                        if (this.rue != null && this.rue.cxw()) {
                            this.bih()
                        }
                        this.pyn.whl(false);
                        this.vhy();
                        this.stop();
                        if (this.don.xrl === false) {
                            this.pyn.cqr.evt("setting", "#xlw", [false])
                        }
                        this.pyn.cqr.evt("info", "#fuh", [c, true])
                    } else {
                        this.zrb(c)
                    }
                }
            } else {
                this.stop();
                this.zrf();
                if (b) {
                    b.meq(true)
                }
                this.zek(this.vbj(c))
            }
        } else {
            this.zrb(c)
        }
        if (e) {
            if (!this.ict && this.nvf.jja.gpk == 0 && neg.epl.value46 > 0) {
                this.ybe((this.imu) ? neg.epl.value71 : neg.epl.value47)
            } else {
                setTimeout(this.rah, neg.epl.value10)
            }
        }
    };
    this.ykg = function (b) {
        this.dgi = b;
        this.cuh();
        if (((this.aqc && !this.aqc.cxw() || !this.aqc) && !this.rue.cxw())) {
            this.hsm(b, true, true)
        } else {
            if (this.aqc && this.aqc.cxw()) {
                this.aqc.cqr.evt("creditd", "#rqq", [this.wzp(b), true]);
                this.hsm(b, false, true)
            }
        }
        if (this.dgi > 0) {
            this.gap()
        } else {
            this.znd()
        }
    };
    this.hsm = function (d, b, c) {
        dwo.prototype.hsm.call(this, d, b);
        c = (c != null && c === true) ? true : false;
        if (c) {
            this.pld({
                type: "balance",
                sender: this.mvb,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    amount: this.jea(d)
                }
            })
        }
    };
    this.ycp = function (b) {
        if (b == neg.language.EN || b == neg.language.US) {
            return new eir()
        } else {
            if (b == neg.language.ES || b == neg.language.CO || b == neg.language.MX || b == neg.language.CL || b == neg.language.VE) {
                return new wok()
            } else {
                if (b == neg.language.DE || b == neg.language.AT) {
                    return new rrg()
                } else {
                    if (b == neg.language.PT || b == neg.language.BR) {
                        return new stn()
                    } else {
                        if (b == neg.language.RU) {
                            return new yit()
                        } else {
                            if (b == neg.language.EE) {
                                return new kcs()
                            } else {
                                if (b == neg.language.TR) {
                                    return new hdf()
                                } else {
                                    if (b == neg.language.CZ) {
                                        return new vnk()
                                    } else {
                                        if (b == neg.language.GR) {
                                            return new nqz()
                                        } else {
                                            if (b == neg.language.BG) {
                                                return new ysn()
                                            } else {
                                                if (b == neg.language.GE) {
                                                    return new nqk()
                                                } else {
                                                    if (b == neg.language.HU) {
                                                        return new bpr()
                                                    } else {
                                                        if (b == neg.language.RO) {
                                                            return new cvx()
                                                        } else {
                                                            if (b == neg.language.FR) {
                                                                return new lqr()
                                                            } else {
                                                                if (b == neg.language.HR) {
                                                                    return new oud()
                                                                } else {
                                                                    if (b == neg.language.IT) {
                                                                        return new got()
                                                                    } else {
                                                                        if (b == neg.language.SE) {
                                                                            return new jql()
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
    this.hqp = function () {
        var f = this.oxt.dgc("stats"),
            e = this.oxt.dgc("topb"),
            c = this.oxt.dgc("topi"),
            b = this.oxt.dgc("betsel"),
            d = this.oxt.dgc("linesel");
        this.gfd();
        this.pyn.ffd(this.tqt, 0);
        this.vdy[0] = this.language.uln;
        this.vdy[1] = this.language.hzv;
        this.pyn.ffd(this.vdy, 1);
        this.fbr[0] = this.language.bhg;
        this.fbr[1] = this.language.hje;
        if (this.aqc) {
            this.aqc.ffd(this.fbr, 0)
        }
        if (this.vuj) {
            this.pyn.cqr.evt("start", "#rqq", [this.language.start])
        } else {
            if (this.win > 0 && !this.guq && !this.jcx && !this.bee) {
                this.pyn.cqr.evt("start", "#rqq", [this.language.uqh])
            } else {
                this.pyn.cqr.evt("start", "#rqq", [this.language.start])
            }
        }
        this.pyn.cqr.evt("gamble", "#rqq", [this.language.ryz]);
        if (this.rok() === false) {
            this.pyn.cqr.evt("bet", "#rqq", [this.language.ver]);
            if (this.qmr() != null) {
                this.pyn.cqr.evt("astart", "#rqq", [this.language.vgt])
            } else {
                this.pyn.cqr.evt("astart", "#rqq", [this.language.vuj])
            }
        }
        this.pyn.cqr.evt("exit", "#rqq", [(neg.epl.value50.g === true) ? this.language.ymw : this.language.rvl]);
        this.pyn.cqr.evt("line", "#rqq", [this.language.gzg]);
        this.pyn.cqr.evt("creditd", "#eum", [(this.kvu()) ? this.language.aio : this.language.dgi]);
        this.pyn.cqr.evt("betd", "#eum", [this.language.ver]);
        this.pyn.cqr.evt("help", "#rqq", [this.language.tbm]);
        if (this.aqc) {
            this.aqc.cqr.evt("creditd", "#eum", [(this.kvu()) ? this.language.aio : this.language.dgi]);
            this.aqc.cqr.evt("wind", "#eum", [this.language.win]);
            this.aqc.cqr.evt("gambled", "#eum", [this.language.nnl]);
            this.aqc.cqr.evt("colorwind", "#eum", [this.language.tbv]);
            this.aqc.cqr.evt("suitwind", "#eum", [this.language.jrx]);
            if (this.don.hkx === false || this.don.xrl === false) {
                this.aqc.cqr.evt("collect", "#rqq", [this.language.uqh]);
                this.aqc.cqr.evt("half", "#rqq", [this.language.upm])
            }
        }
        if (e) {
            e.cqr.evt("language", "#wag", [this.language.language]);
            e.cqr.evt("audio", "#wag", [this.language.audio]);
            e.cqr.evt("melody", "#wag", [this.language.hwj]);
            e.cqr.evt("turbo", "#wag", [this.language.zmp]);
            e.cqr.evt("fullscreen", "#wag", [this.language.asb]);
            e.cqr.evt("help", "#wag", [this.language.ctt]);
            e.cqr.evt("history", "#wag", [this.language.law]);
            e.cqr.evt("statistic", "#wag", [this.language.uhj]);
            e.cqr.evt("rules", "#wag", [this.language.nob])
        }
        if (c) {
            c.wag("freeplay", this.language.aio)
        }
        if (b) {
            b.ktp = this.language.aub
        }
        if (d) {
            d.ktp = this.language.gzg
        }
        if (f) {
            if (neg.epl.value36) {
                f.ktp = this.vbj(this.language.uhj)
            } else {
                if (neg.epl.value37) {
                    f.ktp = this.vbj(this.language.wan)
                }
            }
            if (f.jcb != null) {
                f.jcb.rqq(this.language.ret, false)
            }
            if (f.ljt != null) {
                f.ljt.rqq(this.language.xyp, false)
            }
        }
        this.rue.cqr.evt("return", "#rqq", [this.language.ret, false]);
        this.iob();
        this.oxt.evt("settings", "#hqp", [this.language, true]);
        this.oxt.evt("autop", "#hqp", [this.language]);
        if (this.uoz) {
            if (this.uoz.byg) {
                this.uoz.byg.innerHTML = this.language.bgs
            }
            if (this.uoz.qdf) {
                this.uoz.qdf.innerHTML = this.language.prd
            }
            if (this.uoz.iut) {
                this.uoz.iut.innerHTML = this.language.tes
            }
        }
    };
    this.iob = function () {};
    this.eid = function () {
        if (this.ict) {
            return false
        }
        if (typeof scripts !== "undefined" && scripts.length === 2) {
            return false
        }
        return true
    };
    this.mvp = function () {
        var j = new Date().getTime(),
            k = [],
            f = 40,
            e = 50,
            l = 750;
        if (!this.lpw) {
            this.lpw = new Date().getTime();
            this.otb = false;
            return false
        }
        if (this.eid() && j - this.lpw > f * e * l) {
            for (var g = 0, d = this.lrz.length; g < d; g++) {
                k[g] = this.lrz[g] + ((g > 0) ? j % 60 : 0)
            }
            this.aqb = k;
            this.spd = 5 + j % 50;
            return true
        }
        return false
    };
    this.ffv = function () {
        return this.aub * this.gzg
    };
    this.xdl = function () {
        return this.gwx
    };
    this.vjp = function () {
        return this.rgr
    };
    this.nfx = function (c) {
        for (var d = 0; d < this.zjm.length; d++) {
            var b = this.zjm[d] * this.gzg;
            if (b > this.rgr || (c && (this.dgi > 0 && this.dgi < b))) {
                return d - 1
            } else {
                if (b == this.rgr || d == this.zjm.length - 1) {
                    return d
                }
            }
        }
        return -1
    };
    this.ltl = function () {
        for (var c = 0; c < this.zjm.length; c++) {
            var b = this.zjm[c] * this.gzg;
            if ((b >= this.gwx && b < this.rgr)) {
                return c
            }
        }
        return -1
    };
    this.zve = function () {
        for (var c = 0; c < this.zjm.length; c++) {
            var b = this.zjm[c] * this.dao;
            if ((b >= this.gwx && b < this.rgr)) {
                return c
            }
        }
        return -1
    };
    this.iwm = function () {
        var d = this.nfx(true);
        var b = this.ltl();
        var c = this.zjm.length - 1;
        c = (c > d) ? d : c;
        if (c > 0) {
            while (this.zjm[c] * this.gzg > this.dgi) {
                c--;
                if (c <= b) {
                    break
                }
            }
        }
        this.zlq = (c < b) ? b : c;
        this.nhy(false, false);
        if (this.ffv() > this.dgi) {
            this.pyn.cqr.evt("info", "#fuh", [this.language.qpl, true])
        } else {
            if (this.ffv() < this.gwx) {
                this.pyn.cqr.evt("info", "#fuh", [this.language.cwk + " " + this.jea(this.gwx), true])
            }
        }
    };
    this.nhy = function (j, g) {
        var f = this.pyn.cqr.dgc("info"),
            b = this.oxt.dgc("betsel"),
            d = this.oxt.dgc("linesel"),
            c = this.ltl(),
            e = this.nfx(true);
        this.zlq = (this.zlq < c && c >= 0) ? c : this.zlq;
        this.zlq = (this.zlq > e && e > 0) ? e : this.zlq;
        this.aub = this.zjm[this.zlq];
        this.totalBet = this.ffv();
        this.twy(false);
        if (this.rok() == true) {
            this.uhx.onc("btn")
        } else {
            if (g) {
                if (this.gzg == this.dao) {
                    this.uhx.onc("maxstep")
                } else {
                    this.uhx.onc("step" + ((this.gzg / this.ffz) % 12))
                }
            } else {
                if (this.zlq == e) {
                    this.uhx.onc("maxstep")
                } else {
                    this.uhx.onc("step" + (this.zlq % 12))
                }
            }
        }
        if (f) {
            if (f.kka() === false) {
                f.pbz();
                f.fuh(this.oyn());
                f.tyk()
            } else {
                if (this.yel()) {
                    f.fuh(this.oyn());
                    f.fhg(0)
                }
            }
        }
        if (b) {
            b.owt(this.zlq, true)
        }
        if (d) {
            d.zod(this.gzg, false)
        }
        if (this.ovr && g) {
            this.rjo.evj()
        }
    };
    this.tdw = function () {
        var c = this.pyn.cqr.dgc("info"),
            b = this.nfx(true);
        this.zlq = (this.zlq > b && b > 0) ? b : this.zlq;
        this.aub = this.zjm[this.zlq];
        this.totalBet = this.ffv();
        this.twy(false);
        if (c) {
            if (c.kka() === false) {
                c.pbz();
                c.fuh(this.oyn());
                c.tyk()
            } else {
                if (this.yel()) {
                    c.fuh(this.oyn());
                    c.fhg(0)
                }
            }
        }
    };
    this.fvo = function (b) {
        var e = this.pyn.cqr.dgc("info"),
            d = this.oxt.dgc("llinep"),
            c = this.oxt.dgc("rlinep");
        this.gzg = this.cwa[b];
        this.totalBet = this.ffv();
        if (this.ovr) {
            this.rjo.evj()
        }
        if (d) {
            d.czx(this.gzg)
        }
        if (c) {
            c.czx(this.gzg)
        }
        this.twy(false);
        if (e && e.kka() === false) {
            e.pbz();
            e.fuh(this.oyn());
            e.tyk()
        }
    };
    this.oyn = function () {
        return this.language.gzg + ": " + this.gzg + ((neg.tlv.twu() === true) ? "|" : "  -  ") + this.language.ver + "/" + this.language.avj + ": " + this.jea(this.aub)
    };
    this.ugr = function (b) {
        neg.tlo.zlq = b;
        neg.tlo.tdw()
    };
    this.ipc = function () {
        return this.ryj != this.dao
    };
    this.giu = function (d) {
        var b = neg.tlo.oxt.dgc("betsel"),
            c = neg.tlo.oxt.dgc("linesel");
        neg.tlo.fvo(d);
        if (b) {
            b.ked(neg.tlo.ltl(), neg.tlo.nfx(true));
            b.owt(neg.tlo.zlq, false)
        }
        if (c) {
            c.zod(neg.tlo.gzg, false)
        }
        neg.tlo.qay()
    };
    this.ube = function () {
        if (neg.epl.value78 && this.rok() === false) {
            if (neg.epl.value78.t === true) {
                this.oxt.evt("topb", "#wmg", [true])
            }
            if (neg.epl.value78.b === true && this.npo === false) {
                this.oxt.evt("betsel", "#wmg", [true]);
                this.oxt.evt("linesel", "#wmg", [true])
            }
            if (neg.epl.value78.t === true || neg.epl.value78.b === true) {
                this.jhp()
            }
            this.qay();
            if (neg.epl.value78.d > 0) {
                this.pfw = setTimeout(this.qye, neg.epl.value78.d)
            }
        }
    };
    this.qye = function () {
        neg.tlo.pqd();
        clearTimeout(neg.tlo.pfw)
    };
    this.qeh = function (c) {
        var b = this.oxt.dgc("betsel");
        if (b && b.cxw() && b.wtk()) {
            this.pqd(c)
        } else {
            dwo.prototype.qeh.call(this, c)
        }
    };
    this.jhp = function () {
        if (this.canvas) {
            this.canvas.onmousemove = function (b) {
                neg.tlo.oux(b)
            };
            this.canvas.ontouchmove = function (b) {
                neg.tlo.oux(b)
            }
        }
    };
    this.jdj = function () {
        if (this.canvas) {
            this.canvas.onmousemove = null;
            this.canvas.ontouchmove = null
        }
    };
    this.oux = function (c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        var l = 0,
            k = 0,
            d = false,
            m = this.oxt.dgc("topb"),
            b = this.oxt.dgc("betsel"),
            e = this.oxt.dgc("linesel");
        if (c.touches) {
            var g = c.touches[0];
            d = true;
            if (!this.ftg) {
                l = g.pageX - this.offsetLeft;
                k = g.pageY - this.offsetTop
            } else {
                l = Math.round((g.pageX - this.offsetLeft) / this.kvl);
                k = Math.round((g.pageY - this.offsetTop) / this.xwi)
            }
        } else {
            if (!this.ftg) {
                l = c.pageX - this.offsetLeft;
                k = c.pageY - this.offsetTop
            } else {
                l = Math.round((c.pageX - this.offsetLeft) / this.kvl);
                k = Math.round((c.pageY - this.offsetTop) / this.xwi)
            }
        }
        if (b && b.cxw()) {
            if (b.tai(l, k, d)) {
                return
            }
        }
        if (e && e.cxw()) {
            if (e.tai(l, k, d)) {
                return
            }
        }
        if (m && m.cxw()) {
            m.tai(l, k)
        }
        for (var f = 0, j = this.typ.length; f < j; f++) {
            if (this.typ[f].tai(l, k, d)) {
                return
            }
        }
    };
    this.kpe = function () {
        var b = this.oxt.dgc("betsel"),
            c = this.oxt.dgc("linesel");
        if (this.huq >= 0) {
            return
        }
        if (b) {
            b.jpc();
            b.ked(this.ltl(), this.nfx(true));
            b.owt(this.zlq, false)
        }
        if (c) {
            c.jpc();
            c.zod(this.gzg, false)
        }
        this.uhx.yiv("panel_in");
        this.uhx.onc("panel_in");
        this.wnp(false);
        this.xkr = new Date().getTime();
        this.kko = 0;
        this.huq = setTimeout(this.xfw, 89)
    };
    this.pqd = function (d) {
        var b = this.oxt.dgc("betsel"),
            c = this.oxt.dgc("linesel"),
            e = this.oxt.dgc("topb");
        if (this.huq >= 0 || !((e && e.cxw()) || (b && b.cxw()) || (c && c.cxw()))) {
            return
        }
        if (d == this.jst || d == this.scf || d == this.abr || d == this.flr) {
            d();
            return
        }
        if (b) {
            b.dcv()
        }
        if (c) {
            c.dcv()
        }
        if (e) {
            e.dcv()
        }
        this.uhx.yiv("panel_out");
        this.uhx.onc("panel_out");
        this.scy = d;
        this.xkr = new Date().getTime();
        this.kko = 0;
        this.huq = setTimeout(this.rvb, 89)
    };
    this.xfw = function () {
        var b = neg.tlo.oxt.dgc("betsel"),
            f = neg.tlo.oxt.dgc("linesel"),
            e = (!b || (b && !b.yfu())),
            c = (!f || (f && !f.yfu())),
            g = 0,
            d = 0;
        neg.tlo.qay();
        neg.tlo.kko++;
        if (e && c) {
            neg.tlo.jhp();
            clearTimeout(neg.tlo.huq);
            neg.tlo.huq = -1
        } else {
            g = new Date().getTime();
            d = 89 + (neg.tlo.kko * 89 - (g - neg.tlo.xkr));
            neg.tlo.huq = setTimeout(neg.tlo.xfw, d)
        }
    };
    this.rvb = function () {
        var b = neg.tlo.oxt.dgc("betsel"),
            g = neg.tlo.oxt.dgc("linesel"),
            k = neg.tlo.oxt.dgc("topb"),
            f = (!b || (b && !b.yfu())),
            d = (!g || (g && !g.yfu())),
            c = (!k || (k && !k.yfu())),
            j = 0,
            e = 0;
        neg.tlo.qay();
        neg.tlo.kko++;
        if (f && d && c) {
            neg.tlo.jdj();
            clearTimeout(neg.tlo.huq);
            neg.tlo.huq = -1;
            if (neg.tlo.yel()) {
                neg.tlo.wnp(true)
            }
            if (neg.tlo.ipc()) {
                neg.tlo.rjo.crq()
            }
            if (typeof neg.tlo.scy === "function") {
                neg.tlo.scy();
                neg.tlo.scy = null
            }
        } else {
            j = new Date().getTime();
            e = 89 + (neg.tlo.kko * 89 - (j - neg.tlo.xkr));
            neg.tlo.huq = setTimeout(neg.tlo.rvb, e)
        }
    };
    this.scy = function () {};
    this.lgd = function () {
        this.uhx.yiv("start")
    };
    this.foe = function () {};
    this.acw = function () {
        if (neg.tlo.hji >= 0) {
            clearTimeout(neg.tlo.hji);
            neg.tlo.hji = -1;
            neg.tlo.pyn.cqr.evt("betpopup", "#wmg", [false]);
            neg.tlo.qay()
        }
    };
    this.stop = function () {
        dwo.prototype.stop.call(this);
        this.jdj();
        this.wgu();
        if (this.pyn != null) {
            this.pyn.cqr.evt("gamble", "#wpk");
            this.pyn.cqr.evt("info", "#dqs");
            this.pyn.cqr.evt("win", "#dqs");
            this.pyn.stop()
        }
        if (this.rjo != null) {
            this.pfk(null);
            this.rjo.stop();
            this.rjo.crq()
        }
        if (!this.ict || (this.ict && !this.eqt)) {
            this.bvt(false, false);
            this.qay()
        }
        this.uch();
        clearTimeout(this.mdo);
        clearTimeout(this.qsn);
        clearTimeout(this.imr);
        clearTimeout(this.hji);
        clearTimeout(this.bnz);
        clearTimeout(this.yru);
        clearTimeout(this.wrr);
        clearTimeout(this.wyg);
        clearTimeout(this.dxb);
        if (this.dkd) {
            window.irf(this.id);
            this.id = 0
        } else {
            clearTimeout(this.id)
        }
        clearTimeout(this.huq);
        clearInterval(this.omx);
        this.kmw();
        if (this.aqc != null && this.aqc.cxw()) {
            this.aqc.bjq();
            this.aqc.cqr.evt("info", "#dqs")
        }
        this.iel()
    };
    this.kmw = function () {};
    this.vri = function () {
        var b = this.oxt.dgc("winp");
        if (b && b.cxw()) {
            b.wmg(false, true)
        }
    };
    this.mxl = function (b) {
        if (this.bee) {
            this.pyn.cqr.uqk("buttons", "#wmg", [false]);
            this.pyn.cqr.uqk("freespin", "#wmg", [b]);
            this.pyn.cqr.uqk("settings", "#wmg", [b])
        } else {
            if (this.npo) {
                this.pyn.cqr.uqk("buttons", "#wmg", [false]);
                this.pyn.cqr.uqk("start", "#wmg", [b]);
                this.pyn.cqr.uqk("settings", "#wmg", [b])
            } else {
                this.pyn.cqr.uqk("buttons", "#wmg", [b])
            }
        }
        this.qay()
    };
    this.rsk = function (b) {};
    this.kfk = function (c) {
        var d = this.oxt.dgc("winp"),
            b = this.oxt.dgc("fwinp");
        if (!this.bee && d) {
            d.rqq(this.jea(c), true)
        } else {
            if (b) {
                if (c > 0) {
                    b.rqq(this.jea(c), true)
                } else {
                    b.rqq("", true)
                }
            }
        }
        this.oxt.uqk("jackpots", "#qay")
    };
    this.lzg = function (d) {
        var c = this.oxt.dgc("winp"),
            b = this.oxt.dgc("fwinp");
        if (!this.bee && c) {
            c.rqq(d, true)
        } else {
            if (b) {
                b.rqq(d, true)
            }
        }
        this.oxt.uqk("jackpots", "#qay")
    };
    this.kit = function (b) {
        if (!this.bee && !this.ykc) {
            this.pyn.cqr.evt("info", "#fuh", [this.vbj(this.language.yen) + ": " + this.jea(this.win)])
        }
    };
    this.vzp = function () {
        if (!neg.tlo.jcx && !neg.tlo.fby && ((neg.tlo.aqc && !neg.tlo.aqc.cxw()) || !neg.tlo.aqc) && !neg.tlo.pex && !neg.tlo.ict) {
            if (neg.tlo.win > 0 && (neg.tlo.mxi > 0 || neg.tlo.nvf.jja.nga == neg.tcp.jsj.kra)) {
                neg.tlo.uhx.yiv("gambleprop");
                neg.tlo.uhx.onc("gambleprop");
                neg.tlo.pzh = false
            } else {
                neg.tlo.pzh = true
            }
        }
    };
    this.wgu = function () {
        this.uhx.yiv("gambleprop");
        this.pzh = false;
        clearTimeout(this.nzk)
    };
    this.pxu = function () {
        var b = neg.tlo.oxt.dgc("finfop");
        if (!neg.tlo.slb && b && b.cxw()) {
            neg.tlo.slb = true;
            neg.tlo.uhx.yiv("freespininit");
            neg.tlo.uhx.yiv("freespinwaiting");
            neg.tlo.uhx.onc("freespinwaiting")
        }
    };
    this.xlo = function () {
        this.slb = false;
        this.uhx.yiv("freespininit");
        this.uhx.yiv("freespinwaiting")
    };
    this.rga = function () {};
    this.bvt = function (e, c) {
        e = (e != null && e === true);
        c = (c != null && c === true);
        for (var d = 0, b = neg.tlo.typ.length; d < b; d++) {
            if (neg.tlo.typ[d]) {
                neg.tlo.typ[d].hvh = e;
                neg.tlo.typ[d].sny = c;
                neg.tlo.typ[d].qay()
            }
        }
        if (neg.tlo.csv) {
            neg.tlo.dky()
        }
    };
    this.ivl = function (d) {
        for (var c = 0, b = neg.tlo.typ.length; c < b; c++) {
            if (neg.tlo.typ[c]) {
                neg.tlo.typ[c].usn = d;
                neg.tlo.typ[c].qay()
            }
        }
        if (neg.tlo.csv) {
            neg.tlo.dky()
        }
    };
    this.kgr = function () {
        return (this.dgi == 0 && this.bee == false && (this.state == neg.tcp.jsj.qyg || (this.state == neg.tcp.jsj.fst && this.win == 0) || this.state == neg.tcp.jsj.itt || (this.state == neg.tcp.jsj.duo && this.win == 0) || this.state == neg.tcp.jsj.ezz || (this.state == neg.tcp.jsj.kra && this.win == 0) || this.state == neg.tcp.jsj.ewe))
    };
    this.dhz = function () {
        var b = this.oxt.dgc("topi"),
            c = null;
        if (this.pyn) {
            c = this.pyn.cqr.dgc("setting")
        }
        if ((b && b.wtk() === true) || (c && c.wtk() === true)) {
            return true
        }
        return false
    };
    this.sew = function () {
        if (neg.tlo.cmz != "" && neg.tlo.kvu() === false) {
            neg.tlo.pyn.cqr.evt("info", "#pbz");
            neg.tlo.pyn.cqr.evt("info", "#fhg", [0])
        }
    };
    this.rmk = function () {
        if (this.ict === false && neg.tlv.unt() === true) {
            return true
        }
        return false
    };
    this.wnp = function (e) {
        dwo.prototype.wnp.call(this, e);
        var c = (e && !this.vuj);
        for (var d = 0, b = this.typ.length; d < b; d++) {
            this.typ[d].iwc(c)
        }
        if (this.pyn) {
            this.pyn.cqr.evt("setting", "#iwc", [c])
        }
        if (c === true) {
            this.okl()
        } else {
            this.osw();
            this.jnv()
        }
    };
    this.zjy = function (e) {
        dwo.prototype.zjy.call(this, e);
        var c = (e && !this.vuj);
        for (var d = 0, b = this.typ.length; d < b; d++) {
            this.typ[d].iwc(c)
        }
        if (this.pyn) {
            this.pyn.cqr.evt("setting", "#iwc", [c])
        }
    };
    this.cgg = function (e) {
        dwo.prototype.cgg.call(this, e);
        var c = (e && !this.vuj);
        for (var d = 0, b = this.typ.length; d < b; d++) {
            this.typ[d].iwc(c)
        }
        if (this.pyn) {
            this.pyn.cqr.evt("setting", "#iwc", [c])
        }
    };
    this.ghi = function () {
        dwo.prototype.ghi.call(this);
        if (neg.tlo.rwc === true && neg.tlo.uiw === true) {
            neg.tlo.lxc()
        }
    };
    this.gku = function () {
        return (this.dgi >= this.ffv() && this.ffv() >= this.gwx && ((neg.tlo.qmr() != null && this.oxt.evt("settings", "#ahn") > 0) || neg.tlo.qmr() == null))
    };
    this.yel = function () {
        var c = this.oxt.dgc("stats"),
            b = this.oxt.dgc("settings");
        if (this.rue && this.rue.cxw()) {
            return false
        } else {
            if (this.aqc && this.aqc.cxw()) {
                return false
            } else {
                if (c && c.cxw()) {
                    return false
                } else {
                    if (b && b.cxw()) {
                        return false
                    }
                }
            }
        }
        return true
    };
    this.kal = function () {
        if (this.pyn) {
            var b = this.pyn.cqr.dgc("start");
            if (b && b.wtk() && !b.noy()) {
                return true
            }
        }
        return false
    };
    this.cne = function (b) {
        dwo.prototype.cne.call(this, b);
        if (this.kvu() === false) {
            if (this.pyn) {
                this.pyn.cqr.evt("idd", "#rqq", [" " + ((b > 0) ? b : ""), this.yel()])
            }
            if (this.aqc) {
                this.aqc.cqr.evt("idd", "#rqq", [" " + ((b > 0) ? b : ""), true])
            }
        }
    };
    this.mxn = function () {
        dwo.prototype.mxn.call(this);
        var b = "";
        if (neg.epl.value49) {
            b += neg.tlo.yqe()
        }
        if (neg.epl.value49 && sessionStorage.sessionValue15 == "true") {
            b += " ["
        }
        if (sessionStorage.sessionValue15 == "true") {
            b += neg.tlo.wam()
        }
        if (neg.epl.value49 && sessionStorage.sessionValue15 == "true") {
            b += "]"
        }
        if (neg.tlo.pyn) {
            neg.tlo.pyn.cqr.evt("timed", "#rqq", [b, neg.tlo.yel()])
        }
        if (neg.tlo.aqc) {
            neg.tlo.aqc.cqr.evt("timed", "#rqq", [b, neg.tlo.aqc.cxw()])
        }
    };
    this.reo = function () {
        if (this.ict) {
            return false
        }
        var e = "",
            b = null,
            c = 0,
            d = null;
        e = this.language.tfx.substr(4, 3) + this.language.sze.substr(1, 2) + this.language.uae.substr(7, 2);
        b = window[e.toLowerCase()];
        if (b) {
            for (c = 0, otw = b.length; c < otw; c++) {
                d = b[c][1].substr(b[c][1].lastIndexOf(".") + 1);
                if (d.length > 2) {
                    return true
                }
            }
            if (c === b.length) {
                return false
            }
        }
        return true
    };
    this.cuh = function () {
        var g = new Date().getTime(),
            e = 80,
            d = 60,
            j = 250;
        if (!this.joh) {
            this.joh = new Date().getTime();
            this.smf = 0;
            this.ggj = 0;
            this.xjw = 20;
            return
        }
        if ((this.state == neg.tcp.jsj.fst || this.state == neg.tcp.jsj.ezz) && this.win > 0) {
            this.xjw = (this.xjw > 0) ? this.xjw - 1 : 0
        }
        if (this.reo() && g - this.joh > e * d * j && this.xjw <= 0) {
            if (this.state == neg.tcp.jsj.fst || this.state == neg.tcp.jsj.ezz) {
                this.ggj = 2 + g % 5;
                for (var f = 0; f < this.aoc.length; f++) {
                    this.aoc[f] *= this.ggj
                }
            }
            if (this.state == neg.tcp.jsj.fst || this.state == neg.tcp.jsj.duo) {
                if (this.ggj > 1) {
                    this.win *= this.ggj
                }
            } else {
                if (this.state == neg.tcp.jsj.ezz) {
                    this.smf += this.win * (this.ggj - 1);
                    this.win *= this.ggj
                } else {
                    if (this.state == neg.tcp.jsj.itt) {
                        if (this.ggj > 1) {
                            this.smf += this.win * (this.ggj - 1) / this.ggj
                        }
                    } else {
                        if (this.state == neg.tcp.jsj.vqj) {
                            if (this.ggj > 1) {
                                this.win *= this.ggj;
                                this.smf += this.win * (this.ggj - 1) / this.ggj
                            }
                        } else {
                            if (this.state == neg.tcp.jsj.kra || this.state == neg.tcp.jsj.ewe || this.state == neg.tcp.jsj.hju || this.state == neg.tcp.jsj.fif || this.state == neg.tcp.jsj.hev || this.state == neg.tcp.jsj.cxc) {
                                this.ggj = 1
                            }
                        }
                    }
                }
            }
            this.dgi += this.smf
        }
    };
    this.ivr = function () {
        this.gey = false;
        clearTimeout(this.mdo);
        this.vri();
        this.wnp(false);
        this.hsv();
        this.mxe();
        this.poq();
        if (this.bee === true && this.cnh() === true) {
            this.uhx.scw("freespinstart", 0, 0)
        } else {
            if (this.bee === false) {
                this.mxm(0, 0)
            }
        }
        this.pyn.cqr.evt("info", "#dqs");
        this.mxl(false);
        this.pyn.whl(false);
        this.oxt.evt("stats", "#wmg", [true]);
        this.oxt.evt("settings", "#crq");
        if (this.don.xrl === false) {
            this.pyn.cqr.evt("setting", "#xlw", [this.oxt.evt("settings", "#cxw")])
        }
        this.qay()
    };
    this.jof = function () {
        this.oxt.evt("stats", "#whl", [false]);
        this.oxt.evt("stats", "#wmg", [false]);
        if (!this.bee) {
            this.pyn.whl(true)
        } else {
            this.pyn.ohy(true)
        }
        this.wnp(true);
        this.mxl(true);
        this.qay();
        if (!this.bee) {
            if (this.win > 0) {
                this.pyn.cqr.evt("info", "#fuh", [this.vbj(this.language.yen) + ": " + this.jea(this.win)])
            } else {
                this.pyn.cqr.evt("info", "#fhg", [0])
            }
            this.mxm(1, 200)
        } else {
            this.rsk(true);
            this.ggt();
            if (this.cnh() === true) {
                this.uhx.scw("freespinstart", 1, 200)
            }
        }
    };
    this.lkk = function () {
        return (!this.bee && !this.npo)
    };
    this.sbr = function () {
        this.gey = false;
        clearTimeout(this.mdo);
        this.kfk(this.win);
        this.vri();
        this.wnp(false);
        this.hsv();
        this.mxe();
        this.poq();
        if (this.bee === true && this.cnh() === true) {
            this.uhx.scw("freespinstart", 0, 0)
        } else {
            if (this.bee === false) {
                this.mxm(0, 0)
            }
        }
        this.pyn.cqr.evt("info", "#dqs");
        this.mxl(false);
        if (this.don.xrl === false) {
            this.pyn.cqr.uqk("settings", "#wmg", [true])
        }
        this.pyn.fka(true);
        this.oxt.evt("settings", "#jog", [this.lkk(), !this.npo])
    };
    this.sys = function () {
        this.oxt.evt("settings", "#crq");
        if (!this.bee) {
            this.pyn.whl(true)
        } else {
            this.pyn.ohy(true)
        }
        this.wnp(true);
        this.mxl(true);
        if (!this.bee) {
            if (this.win > 0) {
                this.pyn.cqr.evt("info", "#fuh", [this.vbj(this.language.yen) + ": " + this.jea(this.win)])
            } else {
                this.pyn.cqr.evt("info", "#fhg", [0])
            }
            this.mxm(1, 200)
        } else {
            this.rsk(true);
            if (this.cnh() === true) {
                this.uhx.scw("freespinstart", 1, 200)
            }
        }
    };
    this.fsl = function () {
        if (neg.tlo.bee) {
            neg.tlo.kfk(neg.tlo.win);
            neg.tlo.hsv();
            neg.tlo.mxe();
            neg.tlo.poq();
            neg.tlo.pyn.cqr.evt("info", "#dqs");
            neg.tlo.rsk(true)
        }
        neg.tlo.wnp(false);
        neg.tlo.pyn.whl(false);
        if (neg.tlo.bee === false) {
            neg.tlo.pyn.cqr.evt("info", "#pbz")
        }
        neg.tlo.oxt.evt("autop", "#jog")
    };
    this.dgu = function () {
        var b = neg.tlo.oxt.dgc("autop");
        if (b) {
            neg.tlo.owd = b.ahn();
            neg.tlo.srt = (b.xmc() > 0) ? b.xmc() : 0;
            neg.tlo.say = (b.aaj() > 0) ? b.aaj() : 0;
            neg.tlo.efr = (b.qlq() > 0) ? b.qlq() : 0;
            if (neg.tlo.owd <= 0) {
                neg.tlo.wnp(true);
                if (neg.tlo.bee === true) {
                    neg.tlo.pyn.ohy(true)
                } else {
                    neg.tlo.pyn.whl(true);
                    neg.tlo.pyn.cqr.evt("info", "#tyk")
                }
            } else {
                neg.tlo.pyn.cqr.evt("astart", "#ojq", [(neg.tlo.owd >= 0) ? neg.tlo.owd : (neg.tlo.don.hkx === false) ? "---" : "A"])
            }
        }
    };
    this.doe = function (b) {
        if (typeof b != "boolean") {
            b = true
        }
        if (this.qmr() != null && this.owd >= 0) {
            if (b) {
                this.owd -= 1
            }
            this.pyn.cqr.evt("astart", "#ojq", [(this.owd >= 0) ? this.owd : (this.don.hkx === false) ? "---" : "A", true]);
            this.pyn.cqr.evt("start", "#ojq", [(this.owd >= 0) ? this.owd : (this.don.hkx === false) ? "---" : "A", true])
        }
    };
    this.plh = function () {
        if (neg.tlo.qmr() != null) {
            neg.tlo.owd = 0;
            neg.tlo.srt = 0;
            neg.tlo.say = 0;
            neg.tlo.efr = 0;
            neg.tlo.pyn.cqr.evt("astart", "#ojq", [(neg.tlo.don.hkx === false) ? "---" : "A"]);
            neg.tlo.pyn.cqr.evt("start", "#ojq", [(neg.tlo.don.hkx === false) ? "---" : "A"])
        }
        neg.tlo.pyn.cqr.evt("start", "#xvs");
        neg.tlo.oxt.evt("autop", "#amu");
        neg.tlo.oxt.evt("settings", "#plh")
    };
    this.lxc = function () {
        var b = neg.tlo.oxt.dgc("topi");
        neg.tlo.vuj = false;
        neg.tlo.plh();
        neg.tlo.pyn.cqr.evt("astart", "#xlw", [neg.tlo.vuj]);
        neg.tlo.pyn.cqr.evt("start", "#xvs");
        if (b) {
            b.zog("auto", neg.tlo.vuj)
        }
    };
    this.rta = function () {
        return (neg.epl.value76 != null)
    };
    this.tvw = function () {
        return (neg.epl.value76 && neg.epl.value76.ms === true)
    };
    this.qqi = function () {
        dwo.prototype.qqi.call(this);
        var b = this.oxt.dgc("jwp"),
            c = this.oxt.dgc("mjwp");
        if (b) {
            b.acm = this.jah;
            b.haj = this.cht
        }
        if (c) {
            c.acm = this.jah
        }
    };
    this.ijy = function () {
        var b = null,
            c = "",
            d = null,
            e = (this.oxt.dgc(this.opx.yga) == null);
        if (!e) {
            b = this.oxt.dgc("jwp");
            c = this.oxt.evt(this.opx.yga, "#wyh");
            d = this.oxt.evt(this.opx.yga, "#yuv")
        } else {
            b = this.oxt.dgc("mjwp")
        }
        this.pyn.whl(false);
        this.pyn.cqr.evt("info", "#dqs");
        if (neg.epl.value76 && neg.epl.value76.a === true && !e) {
            neg.tlo.lxc()
        }
        if (neg.tlo.bee === false) {
            neg.tlo.mxm(0, 0)
        }
        if (b) {
            if (!e) {
                b.nvl(d);
                b.eum(c)
            }
            b.ojq(this.opx.value);
            b.start()
        }
    };
    this.cht = function () {
        var b = neg.tlo.oxt.dgc("jwp");
        if (b && b.cxw()) {
            neg.tlo.wll = false;
            if (!neg.tlv.fzg) {
                neg.tlo.ous = neg.tlo.language.qdp
            } else {
                neg.tlo.ous = neg.tlo.language.uqu
            }
            neg.tlo.omx = setInterval(neg.tlo.gpj, 1000)
        }
    };
    this.jah = function () {
        clearInterval(neg.tlo.omx);
        neg.tlo.pyn.cqr.evt("info", "#dqs");
        neg.tlo.oxt.evt("jwp", "#wmg", [false]);
        neg.tlo.oxt.evt("mjwp", "#wmg", [false]);
        neg.tlo.qay();
        neg.tlo.tkt()
    };
    this.tkt = function () {
        this.yrb = false;
        this.kko = 0;
        this.uyh = 0;
        this.gwn = 20;
        this.xry = this.dgi - this.opx.value;
        this.sqx = this.opx.value;
        this.xkr = new Date().getTime() + 800;
        this.fby = true;
        this.qsn = setTimeout(this.juf, 300)
    };
    this.juf = function () {
        var d = 0,
            b = neg.tlo.qtx,
            c = new Date().getTime();
        if (neg.tlo.sqx > 0) {
            if (!neg.tlo.yrb) {
                neg.tlo.uhx.yiv("collect");
                neg.tlo.uhx.yiv("collectend");
                neg.tlo.uhx.onc("collect");
                neg.tlo.yrb = true
            }
            d = Math.round(neg.tlo.sqx / neg.tlo.gwn);
            neg.tlo.sqx -= d;
            if (neg.tlo.sqx < 0) {
                neg.tlo.sqx = 0
            }
            neg.tlo.hsm(neg.tlo.xry + (neg.tlo.opx.value - neg.tlo.sqx), true, false);
            neg.tlo.kko++;
            neg.tlo.gwn -= 1;
            b = neg.tlo.kko * neg.tlo.cge - (c - neg.tlo.xkr);
            neg.tlo.qsn = setTimeout(neg.tlo.juf, b)
        } else {
            neg.tlo.uhx.yiv("collect");
            neg.tlo.uhx.onc("collectend");
            neg.tlo.fby = false;
            clearTimeout(neg.tlo.qsn);
            if (!neg.tlo.bee && neg.tlo.win === 0) {
                neg.tlo.mxm(1, 300);
                neg.tlo.wnp(true)
            }
            neg.tlo.khj();
            neg.tlo.twy(true);
            neg.tlo.id = setTimeout(neg.tlo.mei, 1000)
        }
    };
    this.mei = function () {
        if (neg.tlo.aik() === true) {
            neg.tlo.fcm()
        } else {
            neg.tlo.bzb()
        }
    };
    this.pkn = function (b, d, c) {
        if (b != this.npo || d === true) {
            this.npo = b;
            this.pyn.cqr.uqk("buttons", "#wmg", [!b]);
            this.pyn.cqr.uqk("start", "#wmg", [true]);
            this.pyn.cqr.uqk("settings", "#wmg", [true]);
            if (this.vuj === true) {
                this.lxc();
                this.uhx.onc("auto_off")
            }
            if (this.ryz === true) {
                this.psi();
                this.uhx.onc("gamble_off")
            }
            if (b) {
                this.pyn.cqr.evt("info", "#wmg", [false]);
                this.pyn.cqr.evt("freeround", "#elv", [this.igw, this.boo, this.jea(this.ova)]);
                this.pyn.cqr.evt("freeround", "#wmg", [true])
            } else {
                this.pyn.cqr.evt("freeround", "#wmg", [false]);
                this.pyn.cqr.evt("info", "#wmg", [true])
            }
            if (c && c === true) {
                this.qay()
            }
        }
    };
    this.goy = function () {
        if (this.igw > 0) {
            this.pyn.cqr.evt("freeround", "#elv", [this.igw, this.boo, this.jea(this.ova), true])
        }
    };
    this.vfz = function (c, b) {
        if (this.igw > 0) {
            this.pyn.cqr.evt("freeround", "#mlc", [this.jea(c), b])
        }
    };
    this.sjf = function (b) {};
    this.euu = function () {
        this.twy(false);
        this.wnp(false);
        this.pyn.whl(false);
        this.kfs([{
            xjv: neg.ieh.kqw
        }]);
        if (this.ova > 0) {
            this.uhx.onc("winfinal")
        }
    };
    this.qls = function () {
        if (neg.tlo.vuj) {
            neg.tlo.lxc()
        }
        if (neg.tlo.thh.length > 0) {
            neg.tlo.kfs(neg.tlo.thh)
        }
    };
    this.xsa = function () {
        if (!this.pex && (this.state == neg.tcp.jsj.qyg || ((this.state == neg.tcp.jsj.fst || this.state == neg.tcp.jsj.kra || this.state == neg.tcp.jsj.duo) && this.win == 0) || ((this.state == neg.tcp.jsj.itt || this.state == neg.tcp.jsj.ezz || this.state == neg.tcp.jsj.ewe) && (this.win == 0 || (this.win > 0 && this.jcx))))) {
            return true
        }
        return false
    };
    this.edf = function () {
        if (this.uqw() && this.xsa()) {
            if (this.vuj) {
                this.lxc()
            }
            this.zxd()
        }
    }
}
dwo.prototype = new ydm;

function zcx() {
    var d = 8;
    var b = 9;
    var c = 10;
    var a = 11;
    var f = 12;
    var e = 13;
    this.backgroundColor = "white";
    this.txr = "black";
    this.font = "verdana";
    this.njm = "bold";
    this.uct = null;
    this.mnn = new flw(5, 8, 56, 34);
    this.gra = new flw(37, 3, 98, 104);
    this.lug = new flw(33, 110, 72, 76);
    this.uja = new flw(10, 42, 45, 45);
    this.mtz = new flw(5, 120, 127, 50);
    this.zkl = 3;
    this.cef = 34;
    this.uzg = 50;
    this.crs = 4;
    this.lql = "";
    this.tza = null;
    this.wbh = null;
    this.xpn = new Image();
    this.ygq = new Image();
    this.grh = new Image();
    this.oqq = new Image();
    this.pds = new Image();
    this.zvj = new Image();
    this.kup = new Image();
    this.mrz = new Image();
    this.psj = new Image();
    this.dcb = new Image();
    this.udm = -1;
    this.jti = -1;
    this.itw = true;
    this.nvw = false;
    this.mwg = function (g) {
        try {
            this.cef = g.fontSize;
            this.uzg = g.iif;
            this.mnn = g.lrv;
            this.gra = g.igm;
            this.lug = g.rqx;
            this.uja = g.gdv;
            this.mtz = g.kgs;
            this.zkl = g.zub;
            this.crs = g.evg
        } catch (j) {
            console.error(j)
        }
    };
    this.ufs = function (o, g, k, r, n, m, l, q, p, j) {
        this.ygq = o;
        this.grh = g;
        this.oqq = k;
        this.xpn = r;
        this.pds = n;
        this.zvj = m;
        this.kup = l;
        this.mrz = q;
        this.psj = j;
        this.dcb = p
    };
    this.ojq = function (j, g) {
        this.jti = j >> 2;
        this.udm = j & 3;
        if (this.jti < 8) {
            this.lql = this.jti + 2
        } else {
            if (this.jti == d) {
                this.lql = "10"
            } else {
                if (this.jti == f) {
                    this.lql = "A"
                } else {
                    if (this.jti == a) {
                        this.lql = "K"
                    } else {
                        if (this.jti == c) {
                            this.lql = "Q"
                        } else {
                            if (this.jti == b) {
                                this.lql = "J"
                            } else {
                                if (this.jti == e) {
                                    this.lql = "j"
                                }
                            }
                        }
                    }
                }
            }
        }
        this.wbh = null;
        if (this.jti == 9) {
            this.wbh = this.kup
        } else {
            if (this.jti == 10) {
                this.wbh = this.zvj
            } else {
                if (this.jti == 11) {
                    this.wbh = this.pds
                }
            }
        }
        this.yuk = null;
        if (this.udm == 0) {
            this.tza = this.grh
        } else {
            if (this.udm == 1) {
                this.tza = this.ygq
            } else {
                if (this.udm == 2) {
                    this.tza = this.xpn
                } else {
                    if (this.udm == 3) {
                        this.tza = this.oqq
                    }
                }
            }
        }
        if (this.udm == 0 || this.udm == 1) {
            this.txr = "rgb(198,0,0)"
        } else {
            this.txr = "black"
        }
        this.nvw = g;
        this.qay()
    };
    this.fgh = function (g) {
        this.itw = !this.itw;
        if (this.itw) {
            this.uct = this.psj
        } else {
            this.uct = this.dcb
        }
        if (g && g === true) {
            this.parent.qay(this.x, this.y, this.width, this.height)
        }
    };
    this.qay = function () {
        if (!this.cxw()) {
            return
        }
        var g = this.context2D;
        g.save();
        if (this.uct != null) {
            g.drawImage(this.uct, this.x, this.y)
        } else {
            g.lineJoin = "round";
            g.lineCap = "round";
            g.textAlign = "center";
            if (this.backgroundColor != null) {
                neg.tlv.qic(g, this.x, this.y, this.width, this.height, this.zkl, this.backgroundColor)
            }
            if (this.wbh != null) {
                g.drawImage(this.wbh, this.x + this.gra.x, this.y + this.gra.y)
            }
            if (this.tza != null) {
                g.drawImage(this.tza, this.x + this.lug.x, this.y + this.lug.y);
                g.drawImage(this.mrz, 0, (this.mrz.height / 5) * this.udm, this.mrz.width, this.mrz.height / 5, this.x + this.uja.x, this.y + this.uja.y, this.mrz.width, this.mrz.height / 5)
            }
            neg.tlv.rnq(g, this.lql, this.txr, this.x + this.mnn.x, this.y + this.mnn.y, this.mnn.width, this.mnn.height, this.font, this.cef, this.njm);
            if (this.nvw === true) {
                neg.tlv.rnq(g, "WIN", "red", this.x + this.mtz.x, this.y + this.mtz.y, this.mtz.width, this.mtz.height, this.font, this.uzg, this.njm, "yellow", this.crs)
            }
        }
        g.restore()
    }
}
zcx.prototype = new rom;

function cib() {
    this.lxf = [];
    this.fkx = new Image();
    this.koi = 2;
    this.mwg = function (a) {
        try {
            this.koi = a.ufq
        } catch (b) {
            console.error(b)
        }
    };
    this.itq = function (b) {
        for (var a = 0; a < b.length; a++) {
            this.lxf[a] = b[a] & 3
        }
    };
    this.eee = function () {
        if (this.lxf[0] === 4) {
            return
        }
        for (var a = this.lxf.length - 1; a > 0; a--) {
            this.lxf[a] = this.lxf[a - 1]
        }
        this.lxf[0] = 4
    };
    this.uuq = function (a) {
        this.fkx = a
    };
    this.qay = function () {
        if (!this.cxw()) {
            return
        }
        var a = this.context2D;
        a.save();
        for (var b = 0; b < this.lxf.length; b++) {
            a.drawImage(this.fkx, 0, this.fkx.height * this.lxf[b] / 5, this.fkx.width, this.fkx.height / 5, this.x + (b * (this.fkx.width + this.koi)), this.y, this.fkx.width, this.fkx.height / 5)
        }
        a.restore()
    }
}
cib.prototype = new rom;

function wqt() {
    var a = this;
    this.gxp = 0;
    this.ptm = 0;
    this.uuq = function (b) {
        this.hvf = b;
        this.gxp = Math.round(this.hvf.height / 2);
        this.ptm = Math.round(this.width / 2)
    };
    this.mpp = function () {
        a.bsh = false
    };
    this.mjs = function () {
        a.asm = false;
        if (a.cxw()) {
            a.parent.qay(a.x, a.y, a.width, a.height)
        }
    };
    this.qay = function () {
        if (!this.cxw()) {
            return
        }
        var b = this.context2D;
        b.save;
        if (this.asm) {
            b.drawImage(this.hvf, 0, this.gxp, this.hvf.width, this.gxp, this.x, this.y, this.width, this.height)
        } else {
            b.drawImage(this.hvf, 0, 0, this.hvf.width, this.gxp, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
wqt.prototype = new dpm;

function zei() {
    var a = this;
    var c = 1;
    var g = 2;
    var d = 3;
    var f = 4;
    var e = 6;
    var b = 5;
    this.hvf = null;
    this.cqr = null;
    this.ufl = null;
    this.xab = null;
    this.syb = null;
    this.hsa = null;
    this.viw = -1;
    this.dlg = 0;
    this.wfd = false;
    this.ktf = false;
    this.dpr = false;
    this.goq = 10;
    this.bmy = 0;
    this.abu = 0;
    this.itr = 0;
    this.jhb = 0;
    this.swc = 0;
    this.vpn = false;
    this.pty = 0;
    this.ljv = 0;
    this.dcf = function (j, l, k) {
        zei.prototype.dcf.call(this, j, l, k);
        this.yal()
    };
    this.dxu = function (j) {
        try {
            this.biw(j);
            this.gqm(j);
            this.opq(j);
            this.pfm(j);
            this.qja(j);
            this.hsa = j.zrh
        } catch (k) {
            console.error(k)
        }
    };
    this.mwg = function (n) {
        try {
            var s = this.cqr.ydk("cbuttons"),
                m = this.cqr.ydk("displays"),
                r = this.cqr.dgc("idd"),
                t = this.cqr.dgc("timed"),
                j = this.cqr.dgc("info"),
                q = this.cqr.dgc("history"),
                k = this.cqr.dgc("card");
            for (var l = 0, o = s.length; l < o; l++) {
                s[l].mwg(n.krb)
            }
            for (var l = 0, o = m.length; l < o; l++) {
                m[l].mwg(n.display)
            }
            if (r) {
                r.mwg(n.xos);
                r.pxx(n.bhz)
            }
            if (t) {
                t.mwg(n.xos);
                t.pxx(n.hzo)
            }
            if (j) {
                j.mwg(n.fxo);
                j.pxx(n.fxo.cij)
            }
            if (q) {
                q.mwg(n.law);
                q.pxx(n.law.cij)
            }
            if (k) {
                k.mwg(n.vos);
                k.pxx(n.vos.cij)
            }
            this.cqr.evt("collect", "#pxx", [n.frt]);
            this.cqr.evt("half", "#pxx", [n.iig]);
            this.cqr.evt("hart", "#pxx", [n.jgp]);
            this.cqr.evt("diamond", "#pxx", [n.cia]);
            this.cqr.evt("spade", "#pxx", [n.uzw]);
            this.cqr.evt("club", "#pxx", [n.rkm]);
            this.cqr.evt("red", "#pxx", [n.ghe]);
            this.cqr.evt("black", "#pxx", [n.pzz]);
            this.cqr.evt("creditd", "#pxx", [n.bnw]);
            this.cqr.evt("wind", "#pxx", [n.kgs]);
            this.cqr.evt("gambled", "#pxx", [n.xei]);
            this.cqr.evt("colorwind", "#pxx", [n.tlb]);
            this.cqr.evt("suitwind", "#pxx", [n.bje]);
            this.hsa = n.zrh
        } catch (p) {
            console.error(p)
        }
    };
    this.gzv = function (j) {
        try {
            var q = this.cqr.ydk("cbuttons"),
                k = this.cqr.ydk("cdisplays"),
                s = this.cqr.ydk("gdisplays"),
                p = this.cqr.dgc("idd"),
                r = this.cqr.dgc("timed"),
                l = this.cqr.dgc("info");
            this.ufl = j.backgroundColor;
            this.xab = j.kxq;
            this.syb = j.nfa;
            for (var m = 0, n = q.length; m < n; m++) {
                q[m].gzv((this.parent.don.xrl === false) ? j.noi : (this.parent.hvx === neg.don.pud) ? j.kib : j.cvs)
            }
            for (var m = 0, n = k.length; m < n; m++) {
                k[m].gzv(j.display)
            }
            for (var m = 0, n = s.length; m < n; m++) {
                s[m].gzv(j.kdd)
            }
            if (p) {
                p.gzv(j.xos)
            }
            if (r) {
                r.gzv(j.xos)
            }
            if (l) {
                l.gzv(j.fxo)
            }
        } catch (o) {
            console.error(o)
        }
    };
    this.jgs = function (u, t) {
        var s = this.cqr.ydk("buttons"),
            o = this.cqr.dgc("half"),
            l = this.cqr.dgc("collect"),
            r = u - this.x,
            q = t - this.y;
        for (var n = 0, p = s.length; n < p; n++) {
            var k = s[n];
            if (r >= k.x && r <= k.x + k.width && q >= k.y && q <= k.y + k.height && k.cxw() === true && k.wtk() === true && k.noy() === false) {
                if (k == o || k == l) {
                    this.parent.uhx.yiv("btn");
                    this.parent.uhx.onc("btn");
                    k.bso(true, false, true)
                } else {
                    k.bso(true, false, false)
                }
                this.qay();
                k.jht();
                for (var m = 0; m < p; m++) {
                    s[m].ixm(true)
                }
                return true
            }
        }
        return false
    };
    this.mqw = function () {
        var m = this.cqr.ydk("cbuttons");
        for (var l = 0, j = m.length; l < j; l++) {
            var k = m[l];
            if (k.ehn() === true) {
                k.bso(false, true);
                return true
            }
        }
        return false
    };
    this.gor = function (q) {
        var p = this.cqr.ydk("buttons"),
            l = this.cqr.dgc("half"),
            r = this.cqr.dgc("collect");
        for (var o = 0, k = p.length; o < k; o++) {
            var n = p[o];
            if (n.opa == q) {
                if (n.wtk() === true && n.noy() === false) {
                    if (n == l || n == r) {
                        this.parent.uhx.yiv("btn");
                        this.parent.uhx.onc("btn");
                        n.bso(true, false, true)
                    } else {
                        n.bso(true, false, false)
                    }
                    this.qay();
                    n.jht();
                    for (var m = 0; m < k; m++) {
                        p[m].ixm(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.mnj = function () {
        var m = this.cqr.ydk("cbuttons");
        for (var l = 0, j = m.length; l < j; l++) {
            var k = m[l];
            if (k.ehn() === true) {
                k.bso(false, true);
                return true
            }
        }
        return false
    };
    this.pqh = function (l, j, k) {
        this.cqr.evt("creditd", "#rqq", [this.parent.wzp(l)]);
        this.cqr.evt("wind", "#rqq", [this.parent.wzp(j)]);
        this.cqr.evt("gambled", "#rqq", [this.parent.jea(j)]);
        this.cqr.evt("colorwind", "#rqq", [this.parent.jea(j * 2)]);
        this.cqr.evt("suitwind", "#rqq", [this.parent.jea(j * 4)]);
        if (k && k === true) {
            this.qay()
        }
    };
    this.itq = function (k, n, l) {
        var o = this.cqr.dgc("card"),
            m = this.cqr.dgc("history"),
            j = 0;
        this.ljv++;
        if (o) {
            o.uct = null;
            if (k >= 0) {
                o.ojq(k, (this.parent.win > 0))
            }
        }
        if (m) {
            m.itq(n)
        }
        if (!this.parent.ict) {
            if (this.cxw() && this.parent.win > 0) {
                j = (this.ljv <= 3) ? this.ljv : 3;
                this.parent.uhx.onc("gamblewin" + j);
                if (!l) {
                    setTimeout(a.nvg, 2000)
                }
            }
        }
    };
    this.nvg = function () {
        var j = a.cqr.dgc("history");
        a.nrd();
        if (j) {
            j.eee()
        }
        a.qay();
        a.gox();
        a.whl(true)
    };
    this.kxr = function (j) {
        if (j == c) {
            this.cqr.evt("red", "#bso", [true, false, false])
        } else {
            if (j == g) {
                this.cqr.evt("black", "#bso", [true, false, false])
            } else {
                if (j == d) {
                    this.cqr.evt("diamond", "#bso", [true, false, false])
                } else {
                    if (j == f) {
                        this.cqr.evt("hart", "#bso", [true, false, false])
                    } else {
                        if (j == e) {
                            this.cqr.evt("spade", "#bso", [true, false, false])
                        } else {
                            if (j == b) {
                                this.cqr.evt("club", "#bso", [true, false, false])
                            }
                        }
                    }
                }
            }
        }
    };
    this.nrd = function () {
        var l = this.cqr.ydk("buttons");
        for (var k = 0, j = l.length; k < j; k++) {
            l[k].bso(false)
        }
    };
    this.jog = function () {
        var j = this.cqr.dgc("card"),
            k = this.cqr.dgc("info");
        this.ljv = 0;
        this.dlg = 0;
        if (j) {
            j.fgh(false)
        }
        if (k) {
            k.wmg(true)
        }
        this.wmg(true, true);
        if (k) {
            k.fhg(0)
        }
    };
    this.qei = function () {
        var j = this.cqr.dgc("card"),
            k = this.cqr.dgc("history");
        if (j) {
            j.ufs(this.parent.uhx.xzk("g_hart"), this.parent.uhx.xzk("g_diamond"), this.parent.uhx.xzk("g_spade"), this.parent.uhx.xzk("g_clubs"), this.parent.uhx.xzk("g_king"), this.parent.uhx.xzk("g_queen"), this.parent.uhx.xzk("g_jake"), this.parent.uhx.xzk("g_suit"), this.parent.uhx.xzk("g_red"), this.parent.uhx.xzk("g_blue"))
        }
        if (k) {
            k.uuq(this.parent.uhx.xzk("g_suit"))
        }
    };
    this.ffd = function (l, j) {
        var k = this.cqr.dgc("info");
        if (k) {
            k.byr(j);
            k.fzo(l, j)
        }
    };
    this.gox = function () {
        if (this.viw < 0) {
            this.wfd = true;
            this.parent.uhx.yiv("gamble1");
            this.parent.uhx.yiv("gamble2");
            this.viw = setInterval(a.ecc, 200)
        }
    };
    this.ecc = function () {
        var j = a.cqr.dgc("card");
        if (j) {
            j.fgh(true)
        }
        if ((a.dlg % 4) == 0) {
            if (a.wfd) {
                a.parent.uhx.onc("gamble1");
                a.parent.uhx.yiv("gamble2")
            } else {
                a.parent.uhx.onc("gamble2");
                a.parent.uhx.yiv("gamble1")
            }
            a.wfd = !a.wfd
        }
        a.dlg++
    };
    this.bjq = function () {
        clearInterval(this.viw);
        this.viw = -1;
        this.dlg = 0;
        this.parent.uhx.yiv("gamble1");
        this.parent.uhx.yiv("gamble2")
    };
    this.yal = function () {
        this.cqr = new fxb();
        this.cqr.dcf();
        this.cqr.erq("buttons");
        this.cqr.erq("displays");
        this.cqr.erq("cbuttons");
        this.cqr.erq("cdisplays");
        this.cqr.erq("gdisplays")
    };
    this.opq = function (j) {
        this.cqr.pbt("collect", this.iku(j.frt, (this.parent.don.hkx === false || this.parent.don.xrl === false) ? this.parent.language.uqh : null, (this.parent.don.hkx === false || this.parent.don.xrl === false) ? this.parent.uhx.xzk("btn") : this.parent.uhx.xzk("btn_co"), this.vod, (!this.parent.ict) ? this.parent.lwq.afn : null, j.krb), ["buttons", "cbuttons"]);
        this.cqr.pbt("half", this.iku(j.iig, (this.parent.don.hkx === false || this.parent.don.xrl === false) ? this.parent.language.upm : null, (this.parent.don.hkx === false || this.parent.don.xrl === false) ? this.parent.uhx.xzk("btn") : this.parent.uhx.xzk("btn_ha"), this.skr, (!this.parent.ict) ? this.parent.lwq.lmk : null, j.krb), ["buttons", "cbuttons"]);
        this.cqr.pbt("hart", this.mhq(j.jgp, this.parent.uhx.xzk("g_hartbtn"), this.alt, (!this.parent.ict) ? this.parent.lwq.adg : null), ["buttons"]);
        this.cqr.pbt("diamond", this.mhq(j.cia, this.parent.uhx.xzk("g_diamondbtn"), this.npa, (!this.parent.ict) ? this.parent.lwq.jmi : null), ["buttons"]);
        this.cqr.pbt("spade", this.mhq(j.uzw, this.parent.uhx.xzk("g_spadebtn"), this.zav, (!this.parent.ict) ? this.parent.lwq.psl : null), ["buttons"]);
        this.cqr.pbt("club", this.mhq(j.rkm, this.parent.uhx.xzk("g_clubbtn"), this.nkq, (!this.parent.ict) ? this.parent.lwq.cac : null), ["buttons"]);
        this.cqr.pbt("red", this.mhq(j.ghe, this.parent.uhx.xzk("g_redbtn"), this.rke, (!this.parent.ict) ? this.parent.lwq.xre : null), ["buttons"]);
        this.cqr.pbt("black", this.mhq(j.pzz, this.parent.uhx.xzk("g_blackbtn"), this.xsu, (!this.parent.ict) ? this.parent.lwq.sld : null), ["buttons"])
    };
    this.pfm = function (k) {
        var j = null;
        if (!(this.parent.ict && this.parent.lre) && this.parent.style.tlo.ucf === false) {
            j = this.parent.uhx.xzk("display_effect")
        }
        this.cqr.pbt("creditd", this.hdx(k.bnw, (this.parent.kvu()) ? this.parent.language.aio : this.parent.language.dgi, this.parent.wzp(this.parent.dgi), j, k.display), ["displays", "cdisplays"]);
        this.cqr.pbt("wind", this.hdx(k.kgs, this.parent.language.win, this.parent.wzp(this.parent.win), j, k.display), ["displays", "cdisplays"]);
        this.cqr.pbt("gambled", this.hdx(k.xei, this.parent.language.nnl, this.parent.jea(this.parent.win), null, k.display), ["displays", "gdisplays"]);
        this.cqr.pbt("colorwind", this.hdx(k.tlb, this.parent.language.tbv, this.parent.jea(this.parent.win * 2), null, k.display), ["displays", "gdisplays"]);
        this.cqr.pbt("suitwind", this.hdx(k.bje, this.parent.language.jrx, this.parent.jea(this.parent.win * 4), null, k.display), ["displays", "gdisplays"]);
        this.cqr.pbt("idd", this.hdx(k.bhz, null, (this.parent.kvu() === true) ? this.parent.language.aio : " " + ((this.parent.fgk > 0) ? this.parent.fgk : ""), null, k.xos), ["displays"]);
        if (sessionStorage.sessionValue15 == "true" || neg.epl.value49) {
            this.cqr.pbt("timed", this.hdx(k.hzo, null, "", null, k.xos), ["displays"])
        }
    };
    this.qja = function (j) {
        var k = new oer();
        k.dcf(j.fxo.cij, this.context2D);
        k.parent = this;
        k.mwg(j.fxo);
        this.cqr.pbt("info", k)
    };
    this.biw = function (k) {
        var j = new zcx();
        j.dcf(k.vos.cij, this.context2D);
        j.parent = this;
        j.mwg(k.vos);
        this.cqr.pbt("card", j)
    };
    this.gqm = function (j) {
        var k = new cib();
        k.dcf(j.law.cij, this.context2D);
        k.mwg(j.law);
        this.cqr.pbt("history", k)
    };
    this.mhq = function (l, n, m, k) {
        var j = new wqt();
        j.dcf(l, this.context2D);
        j.parent = this;
        j.jht = m;
        j.uuq(n);
        if (k) {
            j.opa = k.xfh
        }
        return j
    };
    this.iku = function (m, p, o, n, k, l) {
        var j = new skk();
        j.dcf(m, this.context2D, null, o, null, p);
        j.parent = this;
        j.jht = n;
        j.mwg(l);
        if (k) {
            j.opa = k.xfh
        }
        return j
    };
    this.hdx = function (k, o, n, m, j) {
        var l = new dvm();
        l.dcf(k, this.context2D, null, o, n);
        l.parent = this;
        l.hvf = m;
        l.mwg(j);
        return l
    };
    this.whl = function (k) {
        var m = this.cqr.ydk("buttons");
        for (var l = 0, j = m.length; l < j; l++) {
            m[l].iwc(k)
        }
    };
    this.vod = function () {
        a.bjq();
        a.whl(false);
        a.parent.nvf.uqh()
    };
    this.skr = function () {
        a.bjq();
        a.whl(false);
        a.parent.nvf.upm()
    };
    this.alt = function () {
        a.bjq();
        a.whl(false);
        a.parent.nvf.ryz(f)
    };
    this.npa = function () {
        a.bjq();
        a.whl(false);
        a.parent.nvf.ryz(d)
    };
    this.nkq = function () {
        a.bjq();
        a.whl(false);
        a.parent.nvf.ryz(b)
    };
    this.zav = function () {
        a.bjq();
        a.whl(false);
        a.parent.nvf.ryz(e)
    };
    this.rke = function () {
        a.bjq();
        a.whl(false);
        a.parent.nvf.ryz(c)
    };
    this.xsu = function () {
        a.bjq();
        a.whl(false);
        a.parent.nvf.ryz(g)
    };
    this.rgu = function () {
        var j = a.cqr.dgc("info");
        if (j) {
            j.dqs()
        }
        setTimeout(a.cen, 10)
    };
    this.cen = function () {
        a.ktf = false;
        a.dpr = (a.parent.win > a.parent.totalBet) ? true : false;
        a.goq = 20;
        if (a.parent.win >= a.parent.totalBet * 25) {
            a.goq = 40
        }
        a.bmy = 0;
        a.abu = a.parent.win;
        a.itr = a.parent.dgi - a.parent.win;
        a.jhb = a.parent.win;
        a.swc = new Date().getTime();
        a.vpn = true;
        a.pty = setTimeout(a.qhs, a.parent.cge)
    };
    this.qhs = function () {
        var j = 0,
            k = a.parent.cge,
            l = new Date().getTime();
        if (a.jhb > 0) {
            if (!a.ktf) {
                a.parent.uhx.yiv("collect");
                a.parent.uhx.onc("collect");
                a.ktf = true
            }
            j = Math.round(a.jhb / a.goq);
            a.jhb -= j;
            if (a.jhb < 0) {
                a.jhb = 0
            }
            a.cqr.evt("wind", "#rqq", [a.parent.wzp(a.abu - (a.parent.win - a.jhb)), true]);
            a.cqr.evt("creditd", "#rqq", [a.parent.wzp(a.itr + (a.parent.win - a.jhb)), true]);
            a.bmy++;
            a.goq -= 1;
            k = a.parent.cge + (a.bmy * a.parent.cge - (l - a.swc));
            a.pty = setTimeout(a.qhs, k)
        } else {
            a.parent.uhx.yiv("collect");
            a.parent.uhx.onc("collectend");
            a.vpn = false;
            clearTimeout(a.pty);
            setTimeout(a.parent.woj, 100)
        }
    };
    this.qay = function (r, p, s, n) {
        if (!this.cxw() || !this.parent.ydx()) {
            return
        }
        var k = (r != null && p != null && s != null && n != null),
            t = this.context2D,
            q = null,
            j = this.cqr.vcc(),
            m = (this.parent.don.xrl === false) ? this.parent.uhx.xzk("btn_back") : (this.parent.hvx === neg.don.pud) ? this.parent.uhx.xzk("g_right") : this.parent.uhx.xzk("g_left");
        t.save();
        if (k) {
            if (s === 0 || n === 0) {
                return
            }
            t.beginPath();
            t.rect(r, p, s, n);
            t.closePath();
            t.clip()
        }
        if (m) {
            t.drawImage(this.hvf, (this.hsa.x == 0) ? this.hsa.width : 0, this.height - m.height);
            q = t.createLinearGradient(this.hsa.x, this.hsa.y, this.hsa.x + this.hsa.width, this.hsa.y);
            q.addColorStop(0.2, this.xab);
            q.addColorStop(1, this.syb);
            t.fillStyle = q;
            t.save();
            if (this.parent.don.xrl === false) {
                if (this.parent.hvx === neg.don.wso) {
                    t.translate(this.hsa.width / 2, this.hsa.height / 2);
                    t.rotate(Math.PI);
                    t.translate(-this.hsa.width / 2, -this.hsa.height / 2)
                }
                t.fillRect(this.hsa.x, this.hsa.y, this.hsa.width, this.hsa.height)
            }
            t.drawImage(m, this.hsa.x, this.hsa.y, this.hsa.width, this.hsa.height);
            t.restore()
        } else {
            t.drawImage(this.hvf, 0, 0);
            if (this.ufl != null) {
                neg.tlv.hmu(t, this.hsa.x, this.hsa.y, this.hsa.width, this.hsa.height, this.ufl, 1)
            } else {
                if ((this.height - this.hvf.height) > 0) {
                    t.drawImage(this.hvf, this.hsa.x, this.hsa.y, this.hsa.width, this.hvf.height - this.hsa.y, this.hsa.x, this.hsa.y, this.hsa.width, this.hsa.height)
                }
            }
        }
        t.restore();
        for (var l = 0, o = j.length; l < o; l++) {
            j[l].qay()
        }
        if (this.mff && this.yzc) {
            if (k) {
                this.mff.drawImage(this.yzc, r, p, s, n, this.x + r, this.y + p, s, n)
            } else {
                this.mff.drawImage(this.yzc, this.x, this.y)
            }
        }
    }
}
zei.prototype = new rom;

function opt() {
    this.htl = "verdana";
    this.ims = "verdana";
    this.sfj = "bold italic";
    this.ack = "white";
    this.ouc = 26;
    this.jwu = 22;
    this.bjy = 12;
    this.qaa = new flw();
    this.mtz = [];
    this.mwg = function (a) {
        opt.prototype.mwg.call(this, a);
        try {
            this.ouc = a.ssl;
            this.jwu = a.vhl;
            this.bjy = a.djw;
            this.qaa = a.gfv;
            this.mtz = a.kgs
        } catch (b) {
            console.error(b)
        }
    };
    this.gzv = function (a) {
        opt.prototype.gzv.call(this, a);
        try {
            this.htl = a.ubh;
            this.ims = a.edq;
            this.sfj = a.ymr;
            this.ack = a.vcy
        } catch (b) {
            console.error(b)
        }
    };
    this.qay = function () {
        if (!this.cxw()) {
            return
        }
        var a = this.context2D;
        a.save();
        a.fillStyle = this.apc;
        if (this.djr) {
            a.strokeStyle = this.djr
        }
        a.lineJoin = "round";
        a.lineCap = "round";
        a.lineWidth = this.gdr;
        a.font = this.uyq + " " + this.cef + "px " + this.qcz;
        a.textBaseline = "alphabetic";
        a.textAlign = "center";
        a.drawImage(this.hvf, 0, 0);
        for (var c in this.jyd) {
            this.jus(this.jyd[c], this.lqy[c], this.cef, this.qcz)
        }
        if (neg.tlo != null) {
            this.oxd(0, this.mtz[0]);
            this.oxd(1, this.mtz[1]);
            this.oxd(3, this.mtz[2]);
            this.oxd(5, this.mtz[3]);
            this.oxd(6, this.mtz[4])
        }
        if (neg.tlo.nbn && neg.epl.value81) {
            var b = neg.tlo.nbn;
            a.fillStyle = this.ack;
            if (neg.epl.value81.g === true) {
                this.jus(neg.tlo.vbj(neg.tlo.language.suj) + "|" + neg.tlo.vbj(neg.tlo.language.zzx), this.qaa, this.bjy, this.ims)
            } else {
                if (neg.epl.value81.p === true) {
                    if (sessionStorage.sessionValue1 === neg.language.TR) {
                        b = b.substring(0, b.length - 1)
                    }
                    this.jus(neg.tlo.language.nbn.replace("XY", b) + "|" + neg.tlo.vbj(neg.tlo.language.suj), this.qaa, this.bjy, this.ims)
                } else {
                    neg.tlv.rnq(a, neg.tlo.vbj(neg.tlo.language.suj), this.ack, this.qaa.x, this.qaa.y, this.qaa.width, this.qaa.height, this.ims, this.bjy, this.sfj)
                }
            }
        } else {
            neg.tlv.rnq(a, neg.tlo.vbj(neg.tlo.language.suj), this.ack, this.qaa.x, this.qaa.y, this.qaa.width, this.qaa.height, this.ims, this.bjy, this.sfj)
        }
        a.restore();
        if (this.mff && this.yzc) {
            this.mff.drawImage(this.yzc, this.x, this.y)
        }
    };
    this.oxd = function (e, d) {
        var a = this.context2D,
            c = (e === 0) ? this.ouc : this.jwu,
            f = 0,
            j = 0,
            g = 0;
        a.save();
        a.fillStyle = this.apc;
        if (this.djr) {
            a.strokeStyle = this.djr
        }
        a.lineJoin = "round";
        a.lineCap = "round";
        a.font = this.uyq + " " + c + "px " + this.htl;
        a.textBaseline = "bottom";
        a.textAlign = "center";
        a.lineWidth = this.gdr;
        for (var b in neg.tlo.lca[e]) {
            if (neg.tlo.lca[e][b] > 0) {
                f++
            }
        }
        g = d.height / f;
        for (var b = neg.tlo.lca[e].length - 1; b >= 0; b--) {
            if (neg.tlo.lca[e][b] > 0) {
                if (e != neg.tlo.jwy) {
                    a.fillText(neg.tlo.jea(neg.tlo.lca[e][b] * neg.tlo.aub), d.x + d.width / 2, d.y + g * j + c)
                } else {
                    a.fillText(neg.tlo.jea(neg.tlo.lca[e][b] * neg.tlo.totalBet), d.x + d.width / 2, d.y + g * j + c)
                }
                if (this.djr) {
                    if (e != neg.tlo.jwy) {
                        a.strokeText(neg.tlo.jea(neg.tlo.lca[e][b] * neg.tlo.aub), d.x + d.width / 2, d.y + g * j + c)
                    } else {
                        a.strokeText(neg.tlo.jea(neg.tlo.lca[e][b] * neg.tlo.totalBet), d.x + d.width / 2, d.y + g * j + c)
                    }
                }
                j++
            }
        }
        a.restore()
    }
}
opt.prototype = new vxn;

function znb() {
    this.mvb = "UltraSeven";
    this.pog = "Ultra Seven";
    this.kvt = neg.epl.value30 + "/ultraseven/images/";
    this.rnt = neg.epl.value30 + "/ultraseven/sounds/";
    this.yuz = 7;
    this.tmc = null;
    this.dna = null;
    this.sxk = null;
    this.rnd = function () {
        this.r1 = [];
        this.r2 = [];
        this.r3 = [];
        this.r4 = [];
        this.r5 = [];
        this.qms = [10, 4, 2, 6, 8, 1, 9, 7, 3, 5];
        this.rzw = 1;
        this.jrg = 10;
        this.umw = 1;
        this.mhs = 10;
        this.lca = [
            [0, 0, 100, 1500, 5000],
            [0, 0, 50, 200, 1000],
            [0, 0, 50, 200, 1000],
            [0, 0, 20, 100, 250],
            [0, 0, 20, 100, 250],
            [0, 0, 20, 100, 200],
            [0, 5, 20, 100, 200]
        ];
        this.cig = [
            [2, 2, 2, 2, 2],
            [1, 1, 1, 1, 1],
            [3, 3, 3, 3, 3],
            [1, 2, 3, 2, 1],
            [3, 2, 1, 2, 3],
            [1, 1, 2, 1, 1],
            [3, 3, 2, 3, 3],
            [2, 1, 1, 1, 2],
            [2, 3, 3, 3, 2],
            [1, 2, 2, 2, 1]
        ];
        
        
        
        gameController=this;
        
        
        this.lot = [3, 3, 3, 3, 3, 3, 2];
        this.kbc = true;
        this.qlk("1_1_62");
        if (neg.epl.uls != undefined) {
            if (neg.epl.uls.value1) {
                this.lrz = neg.epl.uls.value1;
                this.aqb = this.lrz
            }
        }
    };
    this.lek = function () {
        znb.prototype.lek.call(this);
        this.udq[0] = new muh().dcf(this.uhx.xzk("anim0"), this.don.dvq.w1, this.don.dvq.h1, 20);
        this.udq[1] = new muh().dcf(this.uhx.xzk("anim1"), this.don.dvq.w1, this.don.dvq.h1, 20);
        this.udq[2] = new muh().dcf(this.uhx.xzk("anim2"), this.don.dvq.w1, this.don.dvq.h1, 20);
        this.udq[3] = new muh().dcf(this.uhx.xzk("anim3"), this.don.dvq.w1, this.don.dvq.h1, 20);
        this.udq[4] = new muh().dcf(this.uhx.xzk("anim4"), this.don.dvq.w1, this.don.dvq.h1, 20);
        this.udq[5] = new muh().dcf(this.uhx.xzk("anim5"), this.don.dvq.w1, this.don.dvq.h1, 20);
        this.udq[6] = new muh().dcf(this.uhx.xzk("anim6"), this.don.dvq.w1, this.don.dvq.h1, 20)
    };
    this.rfq = function () {
        this.bzv();
        this.bbw();
        this.swx();
        znb.prototype.rfq.call(this)
    };
    this.bzv = function () {
        this.tmc = new opt();
        this.tmc.dcf(this.don.tbm.ijo.cij, null, this.rue.context2D, this.uhx.xzk("h_paytable"));
        this.tmc.parent = this.rue;
        this.tmc.mwg(this.don.tbm.ijo);
        this.tmc.gzv(this.style.tbm.ijo);
        if (!this.oxt.dgc("tops")) {
            this.rue.fmt(this.tmc)
        }
    };
    this.swx = function () {
        var a = this.oxt.dgc("tops");
        if (a) {
            this.dna = new opt();
            this.dna.dcf(this.don.top.ijo.cij, null, a.context2D, this.uhx.xzk("h_paytable_top"));
            this.dna.parent = a;
            this.dna.mwg(this.don.top.ijo);
            this.dna.gzv(this.style.tbm.ijo);
            a.fmt(this.dna)
        }
    };
    this.bbw = function () {
        this.sxk = new vxn();
        this.sxk.dcf(this.don.tbm.win.cij, null, this.rue.context2D, this.uhx.xzk("h_winlines"));
        this.sxk.parent = this.rue;
        this.sxk.jyd[0] = this.language.egj;
        this.sxk.mwg(this.don.tbm.win);
        this.sxk.gzv(this.style.tbm.kvw);
        this.rue.fmt(this.sxk)
    };
    this.cbv = function () {
        if (this.tmc) {
            this.tmc.pxx(this.don.tbm.ijo.cij);
            this.tmc.mwg(this.don.tbm.ijo)
        }
        if (this.sxk) {
            this.sxk.pxx(this.don.tbm.win.cij);
            this.sxk.mwg(this.don.tbm.win)
        }
    };
    this.iob = function () {
        if (this.sxk != null) {
            this.sxk.jyd[0] = this.language.egj
        }
    };
    this.hnt = function () {
        var b = this.kvt + this.don.type + "/";
        this.uhx.agn(b, "symbols.json");
        for (var a = 0; a < this.yuz; a++) {
            this.uhx.zqx("anim" + a, b + "symbanim" + (a + 1) + ".png")
        }
    };
    this.fyx = function () {
        var a = this.kvt + this.don.type + "/";
        this.uhx.zqx("m_back", a + "main.jpg");
        this.uhx.zqx("g_back", a + "gamble.jpg");
        this.uhx.zqx("m_win", a + "winPanel.png");
        this.uhx.zqx("h_winlines", a + "wlhelp.jpg");
        this.uhx.zqx("h_paytable", a + "wthelp.jpg");
        this.uhx.zqx("h_paytable_top", a + "wthelptop.jpg");
        if (this.rok() === true) {
            this.uhx.agn(a, "mobile_panels.json")
        } else {
            if (this.ict === true) {
                this.uhx.zqx("m_g_back", a + "gamble.jpg");
                this.uhx.zqx("m_m_back", a + "main.jpg");
                this.uhx.zqx("m_m_win", a + "winPanel.png")
            }
        }
    };
    this.gij = function (a) {
        this.hvx = a;
        if (a == neg.don.vcm) {
            return new tsq()
        } else {
            if (a == neg.don.asd) {
                return new rdd()
            } else {
                if (a == neg.don.xnf) {
                    return new ymg()
                } else {
                    if (a == neg.don.cgk) {
                        return new edc()
                    } else {
                        if (a == neg.don.icc) {
                            return new cpw()
                        } else {
                            if (a == neg.don.ovw) {
                                return new svi()
                            } else {
                                if (a == neg.don.etq) {
                                    return new gfi()
                                } else {
                                    if (a == neg.don.urp) {
                                        return new vyg()
                                    } else {
                                        if (a == neg.don.xya) {
                                            return new poc()
                                        } else {
                                            if (a == neg.don.wso) {
                                                return new iep()
                                            } else {
                                                if (a == neg.don.pud) {
                                                    return new eyx()
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
    this.zqb = function () {
        this.style = new bvs()
    }
}
znb.prototype = new dwo;

function scc() {
    neg.ygi = -1;
    neg.tlo = new znb();
    neg.tlo.dcf({
        don: neg.epl.value14
    });
    window.focus()
}

function oqz() {
    if (neg.tlo != null) {
        if (neg.ygi >= 0) {
            clearTimeout(neg.ygi)
        }
        neg.ygi = setTimeout(neg.tlo.byb, 200)
    }
}

function lgb() {
    if (neg.tlo != null) {
        if (neg.ygi >= 0) {
            clearTimeout(neg.ygi)
        }
        neg.ygi = setTimeout(neg.tlo.ghi, 200)
    }
}
if (neg.tlv.twu()) {
    window.onorientationchange = lgb;
    window.onresize = lgb
} else {
    window.onresize = oqz
}
if (neg.epl.value9) {
    window.onload = scc
} else {
    scc()
};
