
var gameController;
var gameWS=new WebSocket(serverString);

 /*------WS ADDON--------*/
        
setInterval(function(){
		//
		var j='A/u350,0';
		var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"JacksOrBetterAM"}';j=tmpPar;
		gameWS.send(j);	
		},5000);
		
		
		gameWS.onmessage=function(k){
		
		var tmpMess=k.data.split("#");

			if(tmpMess[0]=='UPDATE' && gameController.win<=0 && gameController.qjd.iye!=undefined){
			
			if(gameController.qqk!=parseInt(tmpMess[1])){
				
			gameController.qqk=parseInt(tmpMess[1]);	
			
			gameController.qjd.iye.nxn("creditd", "#xqa", [gameController.fki(tmpMess[1]), true]);	
				
			}
			
			
			
			}	
			
		}
		
		/*--------------*/

/////////////////

function uzv() {
    this.vhe = "Info";
    this.bzh = "DEPOSIT";
    this.audio = "AUDIO";
    this.dop = "TIP";
    this.ykf = "TURBO";
    this.hgr = "STATISTIC";
    this.dwr = "HISTORY";
    this.fxh = "SHORTCUTS";
    this.cce = "HELP";
    this.uud = "PAYTABLE";
    this.language = "LANGUAGE";
    this.kgz = ">>";
    this.jes = "<<";
    this.qez = "Fullscreen is not supported!"
}

function cdi() {
    this.ctr = "MINIMUM BET IS";
    this.dir = "MAX BET";
    this.bbb = "MIN.BET";
    this.kct = "MAX.BET";
    this.llk = "BET";
    this.start = "START";
    this.cce = "HELP";
    this.uud = "PAYTABLE";
    this.bmm = "MENU";
    this.wrk = "MORE|GAMES";
    this.ruk = "STOP";
    this.qqk = "CREDIT";
    this.mmg = "GAME OVER";
    this.nuu = "WINNER!";
    this.igc = "GOOD LUCK!";
    this.win = "WIN";
    this.cet = "LAST WIN";
    this.khy = "COLLECT";
    this.dco = "COLLECT";
    this.wqw = "GAMBLE";
    this.mye = "AUTO|START";
    this.bgb = "HALF|GAMBLE";
    this.cnn = "EXIT";
    this.imo = "START GAME";
    this.wyg = "CHOOSE BET";
    this.umg = "HALF";
    this.ret = "RETURN|TO GAME";
    this.qwo = "Total Win";
    this.kkt = "Warning";
    this.beu = "TOTAL";
    this.vhz = "PLEASE WAIT ...";
    this.gyb = "More Games";
    this.ykf = "SPEED";
    this.hix = "Malfunction voids all pays and plays.";
    this.agz = "C O N T I N U E";
    this.nvj = "AUTOSTART";
    this.dxp = "PAYTABLE";
    this.scg = "GAMBLE";
    this.left = "LEFT";
    this.gom = "RIGHT";
    this.ok = "OK";
    this.hra = "CANCEL";
    this.smt = "Gamble";
    this.atn = "Half";
    this.ioo = "GAME RULES";
    this.qux = "GAME RULES";
    this.ylt = "Bonus!";
    this.kql = "BONUS";
    this.kti = "PRESS ANY KEY TO CONTINUE";
    this.smh = "NOT ENOUGH CREDIT!";
    this.tit = "wins";
    this.ruy = "V A L U E";
    this.of = "OF";
    this.ruo = "TOUCH THE SCREEN TO CONTINUE";
    this.pku = "LOADING ...";
    this.ksx = "LOADING HISTORY ...";
    this.bqb = "Communication Error";
    this.rpt = "You have reached one of the limits!";
    this.kho = "You have reached the maximum amount of free games!";
    this.akc = "Game will be closed";
    this.qcg = "Game will be restarted";
    this.nun = "WON";
    this.error = "ERROR";
    this.lso = "FREEPLAY";
    this.nxc = "AUTO";
    this.zsz = "GAME ID";
    this.rvs = "Playing Time";
    this.rjo = "last";
    this.mgd = "games";
    this.bzh = "DEPOSIT";
    this.audio = "AUDIO";
    this.nht = "MUSIC";
    this.oga = "FULLSCREEN";
    this.djx = "FULLSCREEN";
    this.language = "LANGUAGE";
    this.xkg = "Do not show again";
    this.rgq = "Sounds can not be loaded!";
    this.vsv = "Resources missing!";
    this.otq = "Play without sound?";
    this.jtf = "SETTINGS";
    this.guq = "Please turn your device!";
    this.vhe = "INFO";
    this.vod = "Please disable PRIVATE MODE in your browser to play the game.";
    this.xgu = "This game is optimized for Google Chrome.";
    this.tml = "Please use the current version of";
    this.wlf = "Unfortunately this browser is not fully supported.";
    this.acr = "This game can not be started in freeplay mode!";
    this.jyn = "Turn your device to the portrait mode to play like on a real slot machine!";
    this.civ = "Adjust the game interface to your needs!";
    this.gor = "SELECT THE CORRECT COLOR TO DOUBLE THE WIN";
    this.xnk = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.kcy = "GAMBLE FOR A CHANCE TO INCREASE THE WIN";
    this.hgr = "Statistic";
    this.zoj = "Total Games";
    this.agj = "Total Bets";
    this.lml = "Total Wins";
    this.vfa = "Total Play Time";
    this.qza = "I have read this message";
    this.tla = "EXIT|GAME";
    this.dwr = "History";
    this.zqg = "No games played.";
    this.state = "STATE";
    this.yqt = "Main Game";
    this.wzr = "Auto Collected";
    this.jbv = "Collected";
    this.bpv = "Bonusspins";
    this.inw = "Respin";
    this.hmw = "Bonus";
    this.oir = "First Deal";
    this.aoz = "Second Deal";
    this.gkk = "Third Deal";
    this.dzg = "AUTOSTART SETTINGS";
    this.wld = "Amount of games:";
    this.vvi = "Stop autostart";
    this.khi = "Credit lower than:";
    this.jtp = "Credit higher than:";
    this.vfh = "Win higher than:";
    this.sqf = "The autostart will be stopped at the beginning of the bonus.";
    this.oaw = "Share on Facebook";
    this.sku = "FOR MORE INFORMATION, SEE THE GAME RULES.";
    this.qii = "Reality Check";
    this.mkn = "You have requested a Reality Check.";
    this.mid = "Press HISTORY to view your game history.";
    this.edd = "Game break";
    this.lus = "Game limits";
    this.ivd = "Self test";
    this.euy = "THE THEORETICAL RETURN TO THE PLAYER FOR THIS GAME IS XY."
}
cdi.prototype = new uzv;

function twg() {
    this.ctr = "МИНИМАЛЬНАЯ СТАВКА -";
    this.dir = "МАКС.|СТАВКА";
    this.bbb = "МИН.СТAВКА";
    this.kct = "МАКС.СТAВКА";
    this.llk = "СТАВКА";
    this.start = "СТАРТ";
    this.cce = "ПОМОЩЬ";
    this.uud = "ТАБЛИЦА ВЫПЛАТ";
    this.bmm = "МЕНЮ";
    this.wrk = "ДРУГИЕ|ИГРЫ";
    this.ruk = "СТОП";
    this.qqk = "КРЕДИТ";
    this.mmg = "КОНЕЦ ИГРЫ";
    this.nuu = "ПОБЕДИТЕЛЬ!";
    this.igc = "ЖЕЛАЕМ УДАЧИ!";
    this.win = "ВЫИГРЫШ";
    this.cet = "ПОСЛЕД. ВЫИГРЫШ";
    this.tit = "выйгрыши";
    this.khy = "ЗАБРАТЬ|ВЫИГРЫШ";
    this.dco = "ЗАБРАТЬ ВЫИГРЫШ";
    this.wqw = "ИГРА|НА|РИСК";
    this.mye = "АВТО|ИГРА";
    this.bgb = "УМЕНЬШИТЬ|РИСК";
    this.of = "ВЫКЛ.";
    this.cnn = "ВЫХОД";
    this.imo = "НАЖМИТЕ СТАРТ";
    this.wyg = "ВЫБЕРИТЕ СТАВКУ";
    this.umg = "ВЗЯТЬ|1/2";
    this.kti = "НАЖМИ ЛЮБУЮ КЛАВИШУ, ЧТОБЫ ПРОДОЛЖИТЬ";
    this.ruo = "ПРИКОСНИТЕСЬ К ЭКРАНУ ДЛЯ ПРОДОЛЖЕНИЯ";
    this.ret = "ОБРАТНО|В ГЛАВНУЮ|ИГРУ";
    this.abe = "Множитель для Бонуса";
    this.bhs = "БОНУС СТАРТ ВЫИГРЫШ:";
    this.qwo = "ОБЩИЙ ВЫИГРЫШ";
    this.pku = "Загрузка ...";
    this.ksx = "Загрузка Истории ...";
    this.error = "ОШИБКА";
    this.smh = "НЕ ДОСТАТОЧНО КРЕДИТА.";
    this.rpt = "Достигнут один из лимитов!";
    this.kkt = "Внимание";
    this.bqb = "ошибка обмена данных";
    this.kho = "Вы получили максимальное количество свободных игр!";
    this.akc = "Игра заканчивается";
    this.qcg = "Игра начинается заново";
    this.ylt = "Бонус!";
    this.kql = "БОНУС";
    this.nun = "ВЫИГРЫШ";
    this.beu = "ВСЕГО";
    this.vhz = "Пожалуйста подождите ...";
    this.error = "ОШИБКА";
    this.lso = "FREEPLAY";
    this.gyb = "ВЫБОР ИГРЫ";
    this.zsz = "GAME ID";
    this.rvs = "Playing Time";
    this.rjo = "последняя";
    this.mgd = "игры";
    this.bzh = "ДЕПОЗИТ";
    this.audio = "Звук";
    this.nht = "МУЗЫКА";
    this.ykf = "СКОРОСТЬ";
    this.oga = "ПОЛНОЭКРАННЫЙ";
    this.djx = "ПОЛНОЭКРАННЫЙ";
    this.language = "ЯЗЫК";
    this.hix = "ПРИ НЕИСПРАВНОСТИ ВСЕ ИГРЫ И ВЫИГРЫШИ АННУЛИРУЮТСЯ.";
    this.agz = "П Р О Д О Л Ж И Т Ь";
    this.xkg = "Больше не показывать";
    this.nvj = "АВТОИГРА";
    this.dxp = "ТАБЛИЦА ВЫПЛАТ";
    this.scg = "ИГРА НА РИСК";
    this.rgq = "Звук не загружается!";
    this.vsv = "Ресурсы отсутствуют!";
    this.otq = "Играть без звука?";
    this.jtf = "НАСТРОЙКА";
    this.guq = "Поверните, пожалуйста, ваше устройство!";
    this.left = "ЛЕВО";
    this.gom = "ПРАВО";
    this.nxc = "АВТО";
    this.ruy = "V A L U E";
    this.vhe = "ИНФОРМАЦИЯ";
    this.vod = "Выключите, пожалуйста, ЧАСТНЫЙ РЕЖИМ в браузере,чтобы начать игру.";
    this.xgu = "Настоящая игра оптимизирована для Google Chrome.";
    this.tml = "Используйте, пожалуйста, актуальную версию";
    this.wlf = "К сожалению нет полной поддержки браузера.";
    this.acr = "Запуск этой игры в режиме свободных игр невозможен!";
    this.jyn = "Поверните прибор в положение портретного режима для игры как на настоящем игральном автомате!";
    this.civ = "Приспособь интерфейс к своим потребностям!";
    this.sku = "ДОПОЛНИТЕЛЬНУЮ ИНФОРМАЦИЮ ВЫ МОЖЕТЕ ПОЛУЧИТЬ В ПРАВИЛАХ ИГРЫ.";
    this.qii = "Проверку реальности";
    this.mkn = "Вы запросили проверку реальности.";
    this.mid = "Нажмите ИСТОРИЯ, чтобы посмотреть свою историю игры.";
    this.edd = "Game break";
    this.lus = "Game limits";
    this.ivd = "Self test";
    this.ioo = "ПРАВИЛА ИГРЫ";
    this.qux = "ПРАВИЛА ИГРЫ";
    this.gor = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УДВОИТЬ ВЫИГРЫШ";
    this.xnk = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ В 4 РАЗА.";
    this.kcy = "СТАВЬТЕ НА РИСК, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ.";
    this.hgr = "Статус";
    this.zoj = "количество игр";
    this.agj = "вся ставка";
    this.lml = "общий выигрыш";
    this.vfa = "общее время игры";
    this.qza = "Я сообщение прочитал.";
    this.tla = "ИГРУ|ЗАКОНЧИТЬ";
    this.ok = "OK";
    this.dwr = "История";
    this.zqg = "нет истории.";
    this.state = "STATE";
    this.yqt = "Main Game";
    this.wzr = "Auto Collected";
    this.jbv = "Collected";
    this.bpv = "Bonusspins";
    this.smt = "Gamble";
    this.atn = "Half";
    this.inw = "Respin";
    this.hmw = "Bonus";
    this.oir = "First Deal";
    this.aoz = "Second Deal";
    this.gkk = "Third Deal";
    this.hra = "ИЗМЕНИТЬ";
    this.dzg = "НАСТРОЙКА АВТОСТАРТА";
    this.wld = "Количество игр:";
    this.vvi = "Автостарт остановить";
    this.khi = "Кредит ниже, чем:";
    this.jtp = "Кредит выше, чем:";
    this.vfh = "Выигрыш выше, чем:";
    this.sqf = "Автостарт прерывается, если начинается бонусная игра.";
    this.oaw = "Поделись в фейсбук";
    this.euy = "ТЕОРЕТИЧЕСКАЯ ВЫПЛАТА ИГРОКУ СОСТАВЛЯЕТ В ЭТОЙ ИГРЕ XY."
}
twg.prototype = new uzv;

function hoq() {
    this.ctr = "APUESTA MINIMA ES";
    this.dir = "APUESTA|MAXIMA";
    this.bbb = "APUESTA MIN.";
    this.kct = "APUESTA MAX.";
    this.llk = "APUESTA";
    this.start = "START";
    this.cce = "AYUDA";
    this.uud = "PLAN DE|GANANCIAS";
    this.bmm = "MENU";
    this.wrk = "MAS|JUEGOS";
    this.ruk = "PARADA";
    this.qqk = "CREDITOS";
    this.mmg = "FIN DEL JUEGO";
    this.nuu = "¡GANADOR!";
    this.igc = "¡MUCHA SUERTE!";
    this.win = "PREMIO";
    this.cet = "ULTIMOS PREMIO";
    this.tit = "gana";
    this.khy = "COBRAR";
    this.dco = "COBRAR";
    this.wqw = "RIESGO";
    this.mye = "AUTO|START";
    this.bgb = "MEDIA|APUESTA";
    this.of = "DE";
    this.cnn = "SALIR";
    this.imo = "¡PULSE START!";
    this.wyg = "ELIJA SU APUESTA";
    this.umg = "MITAD";
    this.kti = "PULSE UNA TECLA PARA CONTINUAR";
    this.ruo = "TOCAR LA PANTALLA PARA CONTINUAR";
    this.ret = "VOLVER|AL JUEGO";
    this.qwo = "Premio total";
    this.pku = "CARGANDO ...";
    this.ksx = "CARGANDO HISTORIAL ...";
    this.smh = "No hay bastante CREDITO";
    this.rpt = "¡Ha alcanzado uno de los limites!";
    this.kkt = "Advertencia";
    this.bqb = "Error de comunicación";
    this.kho = "¡Ha alcanzado la máxima cantidad de juegos gratis!";
    this.akc = "El juego se cerrará";
    this.qcg = "El juego se reiniciará";
    this.ylt = "¡BONUS!";
    this.kql = "BONUS";
    this.nun = "GANADO";
    this.beu = "TOTAL";
    this.qoj = "TURBO SI";
    this.vkt = "TURBO NO";
    this.vhz = "POR FAVOR ESPERE ...";
    this.error = "ERROR";
    this.lso = "FREEPLAY";
    this.gyb = "MAS JUEGOS";
    this.zsz = "ID DE JUEGO";
    this.rvs = "Playing Time";
    this.rjo = "ultimos";
    this.mgd = "juegos";
    this.bzh = "DEPÓSITO";
    this.audio = "AUDIO";
    this.nht = "MÚSICA";
    this.ykf = "VELOCIDAD";
    this.oga = "PANTALLA COMPLETA";
    this.djx = "PANTALLA|COMPLETA";
    this.language = "IDIOMA";
    this.hix = "UN MAL FUNCIONAMIENTO ANULA TODA JUGADA Y TODO PAGO.";
    this.agz = "A D E L A N T E";
    this.xkg = "No mostrar de nuevo";
    this.nvj = "AUTOSTART";
    this.dxp = "PLAN DE GANANCIAS";
    this.scg = "RIESGO";
    this.rgq = "No se pueden cargar los sonidos.";
    this.vsv = "Faltan recursos.";
    this.otq = "¿Jugar sin sonido?";
    this.jtf = "AJUSTES";
    this.ruy = "V A L U E";
    this.guq = "¡Encienda su dispositivo!";
    this.left = "IZQUIERDA";
    this.gom = "DERECHA";
    this.nxc = "AUTOMÁTICO";
    this.vhe = "INFORMACIÓN";
    this.vod = "Desactive el MODO PRIVADO en su explorador para jugar el juego.";
    this.xgu = "Este juego está optimizado para Google Chrome.";
    this.tml = "Use la versión actual de";
    this.wlf = "Desafortunadamente, este explorador no es compatible.";
    this.acr = "¡Este juego no puede iniciarse en modo de juego libre!";
    this.jyn = "¡Gire el dispositivo a posición vertical como en la máquina tragamonedas real!";
    this.civ = "¡Ajuste la interfaz del juego a sus necesidades!";
    this.sku = "PARA MÁS INFORMACIÓN MIRE LAS REGLAS DEL JUEGO.";
    this.qii = "Reality Check";
    this.mkn = "Has solicitado un Reality Check.";
    this.mid = "Pulsa HISTORIAL para visualizar tu historial de juego.";
    this.edd = "Game break";
    this.lus = "Game limits";
    this.ivd = "Self test";
    this.ioo = "REGLAS DEL JUEGO";
    this.qux = "REGLAS|DEL JUEGO";
    this.gor = "SELECCIONAR EL COLOR CORRECTO PARA DOBLAR EL PREMIO";
    this.xnk = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.kcy = "JUGAR UNA POSIBILIDAD DE MULTIPLICAR LA GANANCIA";
    this.hgr = "ESTADO";
    this.zoj = "Número de juegos";
    this.agj = "Apuesta total";
    this.lml = "Ganancia total";
    this.vfa = "Tiempo total de juego";
    this.qza = "He leído el mensaje.";
    this.tla = "TERMINAR|JUEGO";
    this.ok = "OK";
    this.dwr = "HISTORIAL";
    this.zqg = "Aún no hay juegos.";
    this.state = "Estado";
    this.yqt = "Juego principal";
    this.wzr = "Ganancia automática";
    this.jbv = "Ganancia";
    this.bpv = "BONUSSPINS";
    this.smt = "Apuesta";
    this.atn = "Mitad";
    this.inw = "Respin";
    this.hmw = "Bonus";
    this.oir = "Primera mano";
    this.aoz = "Segunda mano";
    this.gkk = "Tercera mano";
    this.hra = "CANCELAR";
    this.dzg = "CONFIGURACIONES DE AUTOSTART";
    this.wld = "Cantidad de juegos:";
    this.vvi = "Detener Autostart";
    this.khi = "Crédito menor que:";
    this.jtp = "Crédito mayor que:";
    this.vfh = "Ganancia mayor que:";
    this.sqf = "El Autostart se detendrá al principio del bonus.";
    this.oaw = "Compartir en Facebook";
    this.euy = "EL PORCENTAJE TEÓRICO DE DEVOLUCIÓN AL JUGADOR PARA ESTE JUEGO ES XY."
}
hoq.prototype = new uzv;

function jqm() {
    this.ctr = "MINIMALER EINSATZ IST";
    this.dir = "MAX. EINSATZ";
    this.bbb = "MIN. EINSATZ";
    this.kct = "MAX. EINSATZ";
    this.llk = "EINSATZ";
    this.start = "START";
    this.cce = "HILFE";
    this.uud = "GEWINNPLAN";
    this.bmm = "MENÜ";
    this.wrk = "MEHR|SPIELE";
    this.qqk = "KREDIT";
    this.mmg = "SPIEL ENDE";
    this.nuu = "GEWINNER!";
    this.igc = "VIEL GLÜCK!";
    this.win = "GEWINN";
    this.cet = "LETZTER GEWINN";
    this.tit = "gewinnt";
    this.khy = "NEHMEN";
    this.dco = "NEHMEN";
    this.wqw = "RISIKO";
    this.mye = "AUTO|START";
    this.bgb = "HALF|GAMBLE";
    this.ruk = "STOP";
    this.of = "VON";
    this.cnn = "EXIT";
    this.imo = "START DRÜCKEN";
    this.wyg = "EINSATZ WÄHLEN";
    this.umg = "TEILEN";
    this.kti = "DRÜCKE EINE TASTE UM FORTZUFAHREN";
    this.ruo = "BERÜHRE DEN BILDSCHIRM UM FORTZUFAHREN";
    this.ret = "ZURÜCK|ZUM SPIEL";
    this.qwo = "Gesamt Gewinn";
    this.pku = "LÄDT ...";
    this.ksx = "LÄDT HISTORIE ...";
    this.smh = "NICHT GENUG KREDIT!";
    this.kkt = "Achtung";
    this.bqb = "Kommunikationsfehler";
    this.rpt = "Sie haben eines der Limits erreicht!";
    this.kho = "Sie haben die maximale Anzahl an Freispielen erreicht!";
    this.akc = "Das Spiel wird beendet";
    this.qcg = "Das Spiel wird neu gestartet";
    this.ylt = "Bonus!";
    this.kql = "BONUS";
    this.nun = "GEWONNEN";
    this.beu = "TOTAL";
    this.vhz = "BITTE WARTEN ...";
    this.error = "FEHLER";
    this.lso = "FREEPLAY";
    this.gyb = "MEHR|SPIELE";
    this.zsz = "SPIEL ID";
    this.rvs = "Spielzeit";
    this.rjo = "Letzten";
    this.mgd = "Spiele";
    this.bzh = "GUTHABEN";
    this.audio = "AUDIO";
    this.nht = "MUSIK";
    this.ykf = "SPEED";
    this.oga = "VOLLBILD";
    this.djx = "VOLLBILD";
    this.language = "SPRACHE";
    this.hix = "Bei Gerätestörung keine Haftung.";
    this.agz = "W E I T E R";
    this.xkg = "Nicht noch einmal anzeigen";
    this.nvj = "AUTOSTART";
    this.scg = "RISIKO";
    this.dxp = "GEWINNPLAN";
    this.rgq = "Sounds können nicht geladen werden!";
    this.vsv = "Ressourcen fehlen!";
    this.otq = "Ohne Ton spielen?";
    this.jtf = "EINSTELL.";
    this.guq = "Bitte drehen sie ihr Gerät!";
    this.left = "LINKS";
    this.gom = "RECHTS";
    this.nxc = "AUTOM.";
    this.ruy = "V A L U E";
    this.vhe = "INFO";
    this.vod = "Bitte deaktivieren sie den PRIVATEN MODUS im Browser um das Spiel zu starten";
    this.xgu = "Dieses Spiel ist optimiert für Google Chrome.";
    this.tml = "Bitte benutzen sie die aktuelle Version von";
    this.wlf = "Leider wird dieser Browser nicht unterstützt.";
    this.acr = "Dieses Spiel kann nicht im Freispiel-Modus gestartet werden!";
    this.jyn = "Drehen sie ihr Gerät in den Portraitmodus, um wie auf einem echten Automaten zu spielen!";
    this.civ = "Passe die Spieloberfläche deinen Bedürfnissen an!";
    this.sku = "ZUSÄTZLICHE INFORMATION FINDEN SIE IN DEN SPIELREGELN.";
    this.qii = "Reality Check";
    this.mkn = "Du hast einen Reality Check angefordert.";
    this.mid = "Drücke HISTORIE um deine Spielhistorie anzuzeigen.";
    this.edd = "Spielpause";
    this.lus = "Spiellimits";
    this.ivd = "Selbsttest";
    this.ioo = "SPIELREGELN";
    this.qux = "SPIELREGELN";
    this.gor = "WÄHLE DIE RICHTIGE FARBE UM DEN GEWINN ZU VERDOPPELN";
    this.xnk = "WÄHLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.kcy = "DRÜCKE RISIKO FÜR EINE CHANCE DEN GEWINN ZU VERVIELFACHEN";
    this.hgr = "Statistik";
    this.zoj = "Anzahl der Spiele";
    this.agj = "Gesamteinsatz";
    this.lml = "Gesamtgewinn";
    this.vfa = "Gesamtspielzeit";
    this.qza = "Ich habe die Nachricht gelesen";
    this.tla = "SPIEL|BEENDEN";
    this.ok = "OK";
    this.dwr = "Historie";
    this.zqg = "Es existieren noch keine Spiele.";
    this.state = "STATUS";
    this.yqt = "Hauptspiel";
    this.wzr = "Auto. Nehmen";
    this.jbv = "Genommen";
    this.bpv = "Bonusspins";
    this.smt = "Risiko";
    this.atn = "Halb";
    this.inw = "Respin";
    this.hmw = "Bonus";
    this.oir = "Erster Deal";
    this.aoz = "Zweiter Deal";
    this.gkk = "Dritter Deal";
    this.hra = "ABBRUCH";
    this.dzg = "AUTOSTART EINSTELLUNGEN";
    this.wld = "Anzahl der Spiele: ";
    this.vvi = "Autostart anhalten";
    this.khi = "Kredit niedriger als:";
    this.jtp = "Kredit höher als:";
    this.vfh = "Gewinn höher als:";
    this.sqf = "Der Autostart wird am Bonusbeginn gestoppt.";
    this.oaw = "Auf Facebook teilen";
    this.euy = "DIE THEORETISCHE AUSZAHLUNG AN DEN SPIELER FÜR DIESES SPIEL BETRÄGT XY."
}
jqm.prototype = new uzv;

function yth() {
    this.ctr = "MINIMUM BANKO";
    this.dir = "MAKS. BANKO";
    this.bbb = "MIN. BANKO";
    this.kct = "MAKS. BANKO";
    this.llk = "BANKO";
    this.start = "BAŞLAT";
    this.cce = "YARDIM";
    this.uud = "Kazanç planı";
    this.bmm = "MENÜ";
    this.wrk = "DAHA ÇOK|OYUN";
    this.ruk = "DUR";
    this.qqk = "KREDI";
    this.mmg = "OYUN BİTTİ";
    this.nuu = "KAZANDINIZ!";
    this.igc = "BOL ŞANSLAR!";
    this.win = "KAZANÇ";
    this.cet = "SON KAZANÇ";
    this.tit = "kazanır";
    this.khy = "ALMAK";
    this.dco = "ALMAK";
    this.wqw = "RIZIKO";
    this.mye = "OTOMATİK|BAŞLATMA";
    this.bgb = "YARI|RIZIKO";
    this.of = "VEREN";
    this.cnn = "ÇIKIŞ";
    this.imo = "BAŞLAT TUŞUNA BASINIZ";
    this.wyg = "BANKO SEÇİNİZ";
    this.umg = "ALMAK|1/2";
    this.kti = "DEVAM ETMEK IÇIN KLAVYEDE HER HANGI BIR YERE BASINIZ";
    this.ruo = "DEVAM ETMEK İÇİN EKRANA DOKUN";
    this.ret = "OYUNA|GERI";
    this.qwo = "Toplam kazanç";
    this.pku = "YÜKLÜYOR ...";
    this.ksx = "GEÇMIŞI YÜKLÜYOR ...";
    this.smh = "YETERSİZ KREDİ.";
    this.rpt = "Limitlerin birine ulaştınız!";
    this.kkt = "Dikkat";
    this.bqb = "İletişim hatası";
    this.kho = "Maksimum bedava oyun sayısına ulaşmış bulunuyorsunuz!";
    this.akc = "Oyun sonlandırılıyor";
    this.qcg = "Oyun yeniden başlatılıyor";
    this.ylt = "Bedava oyun primi!";
    this.kql = "PRİM";
    this.nun = "KAZANDINIZ";
    this.beu = "TOPLAM";
    this.vhz = "LÜTFEN BEKLEYIN ...";
    this.error = "HATA";
    this.lso = "FREEPLAY";
    this.gyb = "DAHA ÇOK OYUN";
    this.zsz = "OYUN ID";
    this.rvs = "OYUN SÜRESİ";
    this.rjo = "Son";
    this.mgd = "oyun";
    this.bzh = "BAKIYE";
    this.audio = "AUDIO";
    this.nht = "MÜZIK";
    this.ykf = "HıZ";
    this.oga = "TAM EKRAN";
    this.djx = "TAM EKRAN";
    this.language = "LISAN";
    this.hix = "CIHAZ ARIZALANDIĞINDA MESULIYET KABUL EDILMEZ.";
    this.agz = "İ L E R I";
    this.xkg = "Tekrar gösterme";
    this.nvj = "OTOMATİK|BAŞLATMA";
    this.scg = "RIZIKO";
    this.dxp = "Kazanç planı";
    this.rgq = "Sesler yüklenemiyorlar!";
    this.vsv = "Kaynaklar eksik!";
    this.otq = "Sessiz oynayacak mısınız?";
    this.jtf = "AYARLAR";
    this.guq = "Lütfen cihazınını döndürün!";
    this.left = "SOL";
    this.gom = "SAĞ";
    this.nxc = "OTOMATIK";
    this.ruy = "V A L U E";
    this.vhe = "BILGI";
    this.vod = "Oyunu başlatmak için lütfen ağ tarayıcınızda ÖZEL MOD'u kapatınız.";
    this.xgu = "Bu oyun Google Chrome için optimize edilmiştir.";
    this.tml = "'nin güncel versiyonunu kullanın";
    this.wlf = "Maalesef bu ağ tarayıcısı tam olarak desteklenmiyor.";
    this.acr = "Bu oyunun serbest modunda başlatılması mümkün değildir!";
    this.jyn = "Cihazınızı portre moduna çevirerek gerçek bir otomatikte oynar gibi oynayın!";
    this.civ = "Oyun yüzeyini kendi ihtiyaçlarına göre düzenle!";
    this.sku = "DAHA FAZLA BİLGİYİ OYUN KURALLARINDA BULABİLİRSİNİZ.";
    this.qii = "Reality Check";
    this.mkn = "Reality Check talebinde bulundun.";
    this.mid = "Oyun geçmişini görmek için GEÇMİŞ tuşuna bas.";
    this.edd = "Game break";
    this.lus = "Game limits";
    this.ivd = "Self test";
    this.ioo = "OYUNUN KURALLARı";
    this.qux = "OYUNUN|KURALLARı";
    this.gor = "DOĞRU RENGİ SEÇEREK KAZANCININ İKİYE KATLARSIN";
    this.xnk = "DOĞRU KART RENGİNİ SEÇEREK KAZANCINI DÖRDE KATLARSIN.";
    this.kcy = "KAZANCI KATLAMA ŞANSI İÇİN GAMBLE (RİSK)";
    this.hgr = "İstatistik";
    this.zoj = "Toplam oyunlar";
    this.agj = "Toplam bankolar";
    this.lml = "Toplam kazançlar";
    this.vfa = "Toplam oyun süresi";
    this.qza = "Bu mesajı okudum.";
    this.tla = "OYUNU|KAPAT";
    this.ok = "OK";
    this.dwr = "GEÇMİŞ";
    this.zqg = "Henüz hiç bir oyun yok.";
    this.state = "STATÜ";
    this.yqt = "Ana oyun";
    this.wzr = "Otomatik olarak kazandınız";
    this.jbv = "Toplandı";
    this.bpv = "Prim oyunlar";
    this.smt = "Riziko";
    this.atn = "Yarım";
    this.inw = "Respin";
    this.hmw = "Prim";
    this.oir = "İlk anlaşma";
    this.aoz = "İkinci anlaşma";
    this.gkk = "Üçüncü anlaşma";
    this.hra = "İPTAL";
    this.dzg = "OTOMATIK BAŞLAT AYARLARı";
    this.wld = "Oyun sayısı:";
    this.vvi = "Otomatik başlatmayı durdur";
    this.khi = "Kredi bundan düşüktür:";
    this.jtp = "Kredi bundan yüksektir:";
    this.vfh = "Kazanç bundan yüksektir:";
    this.sqf = "Otomatik başlatma prim başlangıcında durduruluyor.";
    this.oaw = "Facebook'ta paylaş";
    this.euy = "OYUNCUYA TEORIK OLARAK ÖDENECEK MEBLAĞ % XY ORANıNDADıR."
}
yth.prototype = new uzv;

function byo() {
    this.ctr = "MINIMÁLNÍ SÁZKA JE";
    this.dir = "MAX. SÁZKA";
    this.bbb = "MIN. SÁZKA";
    this.kct = "MAX. SÁZKA";
    this.llk = "SÁZKA";
    this.start = "START";
    this.cce = "POMOC";
    this.uud = "VÝHERNÍ PLÁN";
    this.bmm = "MENU";
    this.wrk = "DALŠÍ|HRY";
    this.ruk = "STOP";
    this.qqk = "KREDIT";
    this.mmg = "KONEC HRY";
    this.nuu = "VÍTEZ!";
    this.igc = "HODNE ŠTESTÍ!";
    this.win = "VÝHRA";
    this.cet = "POSL. VÝHRA";
    this.tit = "vyhrává";
    this.khy = "VEZMI";
    this.dco = "VEZMI";
    this.wqw = "HRA";
    this.mye = "AUTO|START";
    this.bgb = "POLOVICNÍ|HRA";
    this.of = "Z";
    this.cnn = "VÝSTUP";
    this.imo = "START HRY";
    this.wyg = "VYBRAT SÁZKU";
    this.umg = "POLOVINA";
    this.kti = "POKRACUJ DOTEKEM OBRAZOVKY";
    this.ruo = "PRO POKRAČOVÁNÍ SE DOTKNĚTE OBRAZOVKY";
    this.ret = "ZPET|DO HRY";
    this.qwo = "Celková výhra";
    this.pku = "NAHRÁVÁM ...";
    this.ksx = "NAHRÁVÁM HISTORII ...";
    this.smh = "Nedostatecný kredit.";
    this.rpt = "Dosáhli jste jednoho z limitů!";
    this.kkt = "Varování";
    this.bqb = "Chyba komunikace";
    this.kho = "Dosáhli jste maximálního počtu her zdarma!";
    this.akc = "Hra se zavře";
    this.qcg = "Hra se restartuje";
    this.ylt = "Bonus!";
    this.kql = "BONUS";
    this.nun = "VYHRÁL";
    this.beu = "CELKOVÁ";
    this.vhz = "ČEKEJTE PROSÍM ...";
    this.error = "ERROR";
    this.lso = "FREEPLAY";
    this.gyb = "DALŠÍ HRY";
    this.zsz = "ID HRY";
    this.rvs = "HRACÍ DOBA";
    this.rjo = "Poslední";
    this.mgd = "hry";
    this.bzh = "MÍT K DOBRU";
    this.audio = "AUDIO";
    this.nht = "MUZIKA";
    this.ykf = "RYCHLOST";
    this.oga = "FULLSCREEN";
    this.djx = "FULLSCREEN";
    this.language = "ŘEČ";
    this.hix = "Při poruše jsou všechny hry a výhry neplatné.";
    this.agz = "P O K R A Č U J";
    this.xkg = "Nezobrazujte znovu";
    this.nvj = "AUTOSTART";
    this.scg = "HRA";
    this.dxp = "VÝHERNÍ PLÁN";
    this.rgq = "Zvuk nelze nahrát!";
    this.vsv = "Chybí zdroje!";
    this.otq = "Hrát bez zvuku?";
    this.jtf = "NASTAVENÍ";
    this.ruy = "V A L U E";
    this.guq = "Otočte své zařízení, prosím!";
    this.left = "VLEVO";
    this.gom = "VPRAVO";
    this.nxc = "AUTO";
    this.vhe = "INFORMACE";
    this.vod = "Abyste mohli hrát hru, vypněte SOUKROMÝ REŽIM ve svém prohlížeči, prosím.";
    this.xgu = "Tato hra je optimalizovaná pro Google Chrome.";
    this.tml = "Použijte aktuální verzi";
    this.wlf = "Tento prohlížeč není bohužel plně podporován.";
    this.acr = "Tuto hru nelze spustit v režimu hry zdarma!";
    this.jyn = "Otočte zařízení tak, aby zobrazilo hru jako na skutečném automatu!";
    this.civ = "Nastavte rozhraní hry svým potřebám!";
    this.sku = "VÍCE INFORMACÍ NALEZNETE V PRAVIDLECH HRY.";
    this.qii = "Reality Check";
    this.mkn = "Požádali jste o kontrolu reality.";
    this.mid = "Pro zobrazení vaší herní historie stiskněte HISTORIE.";
    this.edd = "Game break";
    this.lus = "Game limits";
    this.ivd = "Self test";
    this.ioo = "PRAVIDLA HRY";
    this.qux = "PRAVIDLA HRY";
    this.gor = "VYBRAT SPRÁVNOU BARVU KE ZDVOJNÁSOBENÍ VÝHRY";
    this.xnk = "VYBRAT SPRÁVNOU BARVU KARTY KE ZČTYŘNÁSOBENÍ VÝHRY";
    this.kcy = "VSADIT NA ŠANCI ZVÝŠIT VÝHRU";
    this.hgr = "Statistika";
    this.zoj = "Celkem hry";
    this.agj = "Celkem sázky";
    this.lml = "Celkem výhry";
    this.vfa = "Celková hrací doba";
    this.qza = "Zprávu jsem četl/a.";
    this.tla = "UKONČIT|HRU";
    this.ok = "OK";
    this.dwr = "HISTORIE";
    this.zqg = "Žádné odehrané hry.";
    this.state = "STATUS";
    this.yqt = "Hlavní hra";
    this.wzr = "Automaticky vybráno";
    this.jbv = "Vybráno";
    this.bpv = "Bonusspins";
    this.smt = "Hra";
    this.atn = "Polovina";
    this.inw = "Respin";
    this.hmw = "Bonus";
    this.oir = "První vyložení";
    this.aoz = "Druhé vyložení";
    this.gkk = "Třetí vyložení";
    this.hra = "ZRUŠIT";
    this.dzg = "NASTAVENÍ AUTOMATICKÉHO STARTU";
    this.wld = "Množství her:";
    this.vvi = "Zastavit automatický start";
    this.khi = "Kredit nižší než:";
    this.jtp = "Kredit vyšší než:";
    this.vfh = "Výhra vyšší než:";
    this.sqf = "Automatický start se zastaví na začátku bonusu.";
    this.oaw = "Sdílet na Facebooku";
    this.euy = "TEORETICKÁ NÁVRATNOST HRÁČI V TÉTO HŘE JE XY."
}
byo.prototype = new uzv;

function rxf() {
    this.ctr = "MIINIMUMPANUS ON";
    this.dir = "MAX PANUS";
    this.bbb = "MIN PANUS";
    this.kct = "MAX PANUS";
    this.llk = "PANUS";
    this.start = "START";
    this.cce = "ABI";
    this.uud = "VÕIDU TABEL";
    this.bmm = "MENÜÜ";
    this.wrk = "VALI|MÄNG";
    this.ruk = "STOPP";
    this.qqk = "KREDIIT";
    this.mmg = "MÄNG ON LÕPPENUD!";
    this.nuu = "OLED VÕITNUD!";
    this.igc = "SOOVIME EDU!";
    this.win = "VÕIT";
    this.cet = "EELMINE VÕIT";
    this.khy = "VÕTA|VÕIT";
    this.dco = "VÕTA VÕIT";
    this.wqw = "DUUBEL|DAMINE";
    this.mye = "AUTO|START";
    this.bgb = "POOLITA|DUUBELDA";
    this.of = "OF";
    this.cnn = "VÄLJA";
    this.imo = "ALUSTA MÄNGU";
    this.wyg = "VALI PANUS";
    this.umg = "POOLIK";
    this.kti = "JÄTKAMISEKS VAJUTAGE ÜKSKÕIK MILLIST NUPPU";
    this.ret = "TAGASI|MÄNGU";
    this.qwo = "Koguvõit";
    this.smh = "POLE PIISAVALT KREDIITI.";
    this.ylt = "Boonus!";
    this.kql = "BOONUS";
    this.vhz = "PALUN OODAKE ...";
    this.gyb = "Vali Mäng";
    this.audio = "HELI";
    this.nht = "MUUSIKA";
    this.ykf = "KIIRUS";
    this.oga = "TÄISEKRAAN";
    this.djx = "TÄISEKRAAN";
    this.hix = "RIKKE KORRAL KÕIK MÄNGUD JA VÕIDUD TÜHISTATAKSE.";
    this.lgv = "MÄNGU LÕPP";
    this.language = "KEEL";
    this.ioo = "MÄNGUREEGLID";
    this.qux = "MÄNGUREEGLID";
    this.pku = "LAADIMINE ...";
    this.ksx = "AJALOO LAADIMINE ...";
    this.rpt = "Oled saavutanud ühe limiitidest!";
    this.kkt = "Hoiatus";
    this.bqb = "Ühenduse viga";
    this.kho = "Te olete jõudnud tasuta mängude maksimaalse arvuni!";
    this.akc = "Mäng suletakse";
    this.qcg = "Mäng taaskäivitatakse";
    this.ruo = "JÄTKAMISEKS PUUDUTA EKRAANI";
    this.jtf = "SÄTTED";
    this.ruy = "V A L U E";
    this.guq = "Pöörake oma seadet!";
    this.vhe = "INFO";
    this.vod = "Mängu mängimiseks keelake oma brauseris PRIVAATREŽIIM.";
    this.xgu = "See mäng on optimeeritud Google Chrome jaoks.";
    this.tml = "Palun kasutage praeguse versiooni";
    this.wlf = "Kahjuks ei toetata seda brauserit täielikult.";
    this.acr = "Seda mängu ei saa tasuta mängimise režiimis käivitada!";
    this.left = "VASAK";
    this.gom = "PAREM";
    this.nxc = "AUTOMAATNE";
    this.nun = "VÕITIS";
    this.tit = "võidetud";
    this.beu = "KOKKU";
    this.error = "VIGA";
    this.lso = "TASUTA MÄNG";
    this.zsz = "MÄNGU ID";
    this.rvs = "MÄNGUAEG";
    this.rjo = "Viimased";
    this.mgd = "mängu";
    this.bzh = "SISSEMAKSE";
    this.gor = "VÕIDU DUUBELDAMISEKS VALI ÕIGE VÄRV";
    this.xnk = "VÕIDU NELJAKORDISTAMISEKS VALI ÕIGE MAST";
    this.kcy = "RISKI, ET SUURENDADA OMA VÕITU";
    this.hgr = "Statistika";
    this.zoj = "Mänge kokku";
    this.agj = "Kogupanus";
    this.lml = "Koguvõit";
    this.vfa = "Mänguaeg kokku";
    this.qza = "Olen seda teadet lugenud.";
    this.tla = "MÄNGU|LÕPP";
    this.dwr = "Ajalugu";
    this.zqg = "Ühtegi mängu ei ole mängitud.";
    this.state = "OLEK";
    this.yqt = "Põhimäng";
    this.wzr = "Automaatne väljavõtt";
    this.jbv = "Välja võetud";
    this.bpv = "Bonusspins";
    this.smt = "Gamble";
    this.atn = "Pool";
    this.inw = "Respin";
    this.hmw = "Boonus";
    this.oir = "Esimene jagamine";
    this.aoz = "Teine jagamine";
    this.gkk = "Kolmas jagamine";
    this.agz = "J Ä T K A";
    this.xkg = "Ära seda enam näita";
    this.nvj = "AUTOSTART";
    this.scg = "DUUBEL DAMINE";
    this.dxp = "VÕIDU TABEL";
    this.rgq = "Helisid ei saa laadida!";
    this.vsv = "Ressursid puuduvad!";
    this.otq = "Soovid mängida ilma helideta?";
    this.jyn = "Keera seade vertikaalasendisse, et mängida nagu päris mänguautomaadil!";
    this.civ = "Kohanda mänguliidest vastavalt oma vajadustele!";
    this.sku = "VAATA LISAINFOT MÄNGUREEGLITEST.";
    this.hra = "TÜHISTA";
    this.dzg = "AUTOMAATKÄIVITUSE SÄTTED";
    this.wld = "Mängude arv:";
    this.vvi = "Peata automaatkäivitus";
    this.khi = "Krediit madalam kui:";
    this.jtp = "Krediit kõrgem kui:";
    this.vfh = "Võit suurem kui:";
    this.sqf = "Automaatkäivitus peatatakse boonuse alguses.";
    this.oaw = "Jaga Facebookis";
    this.ok = "OK";
    this.qii = "Reality Check";
    this.mkn = "Olete soovinud reaalsuskontrolli.";
    this.mid = "Oma mänguajaloo vaatamiseks vajutage AJALUGU.";
    this.edd = "Game break";
    this.lus = "Game limits";
    this.ivd = "Self test";
    this.euy = "SELLE MÄNGU MÄNGIJA TEOREETILINE TULU ON XY."
}
rxf.prototype = new uzv;

function dmk() {
    this.ctr = "ΤΟ ΕΛAΧΙΣΤΟ ΣΤΟIΧΗΜΑ ΕIΝΑΙ";
    this.dir = "ΜEΓΙΣΤΟ ΣΤΟIΧΗΜΑ";
    this.bbb = "EΛΑΧ. ΣΤΟΙΧΗΜΑ";
    this.kct = "ΜΕΓ. ΣΤΟΙΧΗΜΑ";
    this.llk = "ΣΤΟIΧΗΜΑ";
    this.start = "EΝΑΡΞΗ";
    this.cce = "ΒΟHΘΕΙΑ";
    this.uud = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.bmm = "ΜΕΝΟY";
    this.wrk = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.ruk = "ΣΤΟΠ";
    this.qqk = "ΠIΣΤΩΣΗ";
    this.mmg = "TEΛΟΣ ΠΑΙΧΝΙΔΙΟY!";
    this.nuu = "ΝΙΚΗΤΗΣ!";
    this.igc = "ΚΑΛΗ ΤΥΧΗ!";
    this.win = "ΚEΡΔΟΣ";
    this.cet = "ΤΕΛΕΥΤΑIΟ ΚEΡΔΟΣ";
    this.khy = "ΠΑΡΑΛΑΒH";
    this.dco = "ΠΑΡΑΛΑΒH";
    this.wqw = "ΤΖΟΓAΡΩ";
    this.mye = "ΑΥΤOΜΑΤΗ|EΝΑΡΞΗ";
    this.bgb = "ΠΑΡΑΛΑΒH|ΤΖΟΓAΡΩ";
    this.of = "ΑΠO";
    this.cnn = "EΞΟΔΟΣ";
    this.imo = "ΑΡΧΙΖΕΙ ΠΑΙΧΝΙΔΙ";
    this.wyg = "ΕΠΙΛΕΞΤΕ ΣΤΟΙΧΗΜΑ";
    this.umg = "ΠΑΡΑΛΑΒH|1/2";
    this.kti = "ΠAΤΗΣΕ EΝΑ ΠΛHΚΤΡΟ ΓΙΑ ΝΑ ΣΥΝΕΧIΣΕΙΣ";
    this.ret = "EΠΙΣΤΡΟΦH|ΣΤΟ|ΠΑΙΧΝIΔΙ";
    this.qwo = "ΣΥΝΟΛΙΚO ΚEΡΔΟΣ";
    this.smh = "ΔΕΝ ΑΡΚΕΤH ΠIΣΤΩΣΗ.";
    this.ylt = "Μπόνουσ!";
    this.kql = "ΜΠOΝΟΥΣ";
    this.vhz = "ΠΑΡΑΚΑΛΩ ΠΕΡΙΜEΝΕΤΕ ...";
    this.gyb = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.audio = "ΗΧΟΣ";
    this.nht = "ΜΟΥΣΙΚΉ";
    this.ykf = "ΤΑΧYΤΗΤΑ";
    this.oga = "ΠΛΗΡΗΣ ΟΘΟΝΗ";
    this.djx = "ΠΛΗΡΗΣ|ΟΘΟΝΗ";
    this.hix = "ΣΕ ΠΕΡΙΠΤΩΣΗ ΒΛΑΒΗΣ ΤΗΣ ΣΥΣΚΕΥΗΣ ΔΕΝ ΑΝΑΛΑΜΒΑΝΟΥΜΕ ΚΑΜΙΑ ΕΥΘΥΝΗ.";
    this.language = "ΓΛΩΣΣΑ";
    this.beu = "ΣYΝΟΛΟ";
    this.ioo = "ΚΑΝΌΝΕς ΠΑΙΧΝΙΔΙΟΎ";
    this.qux = "ΚΑΝΌΝΕς|ΠΑΙΧΝΙΔΙΟΎ";
    this.pku = "ΦΟΡΤΩΣΗ ...";
    this.ksx = "ΦΟΡΤΩΣΗ ΙΣΤΟΡΙΚΟΥ...";
    this.rpt = "Ξεπεράσατε κάποιο όριο!";
    this.kkt = "Προειδοποίηση";
    this.bqb = "Σφάλμα επικοινωνίας";
    this.kho = "Φτάσατε στο ανώτατο όριο δωρεάν παιχνιδιών!";
    this.akc = "Το παιχνίδι θα τερματιστεί";
    this.qcg = "Το παιχνίδι θα εκκινηθεί εκ νέου";
    this.ruo = "ΑΓΓΙΞΤΕ ΤΗΝ ΟΘΟΝΗ ΓΙΑ ΝΑ ΣΥΝΕΧΙΣΕΤΕ";
    this.jtf = "ΡΥΘΜΙΣΕΙΣ";
    this.ruy = "V A L U E";
    this.guq = "Παρακαλούμε, περιστρέψτε τη συσκευή σας!";
    this.vhe = "ΠΛΗΡΟΦΟΡΊΕς";
    this.vod = "Παρακαλούμε, απενεργοποιήστε τη λειτουργία PRIVATE MODE του προγράμματος περιήγησης, προκειμένου να εκκινηθεί το παιχνίδι.";
    this.xgu = "Αυτό το παιχνίδι έχει βελτιστοποιηθεί για Google Chrome.";
    this.tml = "Παρακαλούμε, χρησιμοποιήστε την τρέχουσα έκδοση του";
    this.wlf = "Δυστυχώς, αυτό το πρόγραμμα περιήγησης δεν υποστηρίζεται πλήρως.";
    this.acr = "Αυτό το παιχνίδι δεν μπορεί να διεξαχθεί στη δωρεάν λειτουργία!";
    this.left = "ΑΡΙΣΤΕΡA";
    this.gom = "ΔΕΞΙA";
    this.nxc = "AΥΤOΜΑΤΟ";
    this.nun = "ΚEΡΔΙΣΕ";
    this.tit = "κερδίζει";
    this.error = "ΣΦΑΛΜΑ";
    this.lso = "ΔΩΡΕAΝ ΠΑΙΧΝIΔΙ";
    this.zsz = "ΤΑΥΤΟΤΗΤΑ ΠΑΙΧΝΙΔΙΟΥ";
    this.rvs = "ΧΡΟΝΟΣ ΠΑΙΧΝΙΔΙΟΥ";
    this.rjo = "Τελευταία";
    this.mgd = "παιχνίδια";
    this.bzh = "ΠΙΣΤΩΤΙΚO ΥΠOΛΟΙΠΟ";
    this.gor = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΓΙΑ ΝΑ ΔΙΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.xnk = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΦΥΛΛΟΥ ΓΙΑ ΝΑ ΤΕΤΡΑΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.kcy = "ΠΟΝΤΑΡΕΤΕ ΓΙΑ ΝΑ ΕΧΕΤΕ ΤΗΝ ΕΥΚΑΙΡΙΑ ΠΟΛΛΑΠΛΑΣΙΑΣΜΟΥ ΤΟΥ ΚΕΡΔΟΥΣ ΣΑΣ";
    this.hgr = "Στατιστικά";
    this.zoj = "Σύνολο παιχνιδιών";
    this.agj = "Συνολικό ποντάρισμα";
    this.lml = "Συνολικό κέρδος";
    this.vfa = "Συνολικός χρόνος παιχνιδιού";
    this.qza = "Eχω διαβάσει το μήνυμα.";
    this.tla = "ΛΗΞΗ|ΠΑΙΧΝΙΔΙΟΥ";
    this.dwr = "ΙΣΤΟΡΙΚΟ";
    this.zqg = "Ακόμη δεν υπάρχει κάποιο παιχνίδι.";
    this.state = "ΚΑΤAΣΤΑΣΗ";
    this.yqt = "Κύριο παιχνίδι";
    this.wzr = "Αυτόματη λήψη";
    this.jbv = "Ελήφθησαν";
    this.bpv = "Bonusspins";
    this.smt = "Τζογάρω";
    this.atn = "Hμισυ";
    this.inw = "Respin";
    this.hmw = "Μπόνουσ";
    this.oir = "Πρώτο μοίρασμα";
    this.aoz = "Δεύτερο μοίρασμα";
    this.gkk = "Τρίτο μοίρασμα";
    this.agz = "Σ Υ Ν  E Χ Ε Ι Α";
    this.xkg = "Να μην προβληθεί ξανά";
    this.nvj = "ΑΥΤΟΜΑΤΗ|ΕΝΑΡΞΗ";
    this.scg = "ΤΖΟΓAΡΩ";
    this.dxp = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.rgq = "Η φόρτωση ήχων δεν είναι εφικτή!";
    this.vsv = "Λείπουν πόροι!";
    this.otq = "Παιχνίδι χωρίς ήχο?";
    this.jyn = "Γυρίστε τη συσκευή σας σε λειτουργία πορτρέτου για να παίξετε όπως σε μια πραγματική μηχανή slot!";
    this.civ = "Προσάρμοσε την επιφάνεια εργασίας στις προτιμήσεις σου!";
    this.sku = "ΓΙΑ ΠΕΡΙΣΣΌΤΕΡΕΣ ΠΛΗΡΟΦΟΡΊΕΣ, ΔΕΊΤΕ ΤΟΥΣ ΚΑΝΟΝΙΣΜΟΎΣ ΤΟΥ ΠΑΙΧΝΙΔΙΟΎ.";
    this.hra = "ΑΚΎΡΩΣΗ";
    this.dzg = "ΡΥΘΜΉΣΕΙς AUTOSTART";
    this.wld = "Αριθμός παιχνιδιών:";
    this.vvi = "Διακοπή autostart";
    this.khi = "Μονάδες χαμηλότερα από:";
    this.jtp = "Μονάδες υψηλότερες από:";
    this.vfh = "Κέρδος υψηλότερο από:";
    this.sqf = "Το autostart θα σταματήσει με το ξεκίνημα του μπόνους.";
    this.oaw = "Κοινοποίηση στο Facebook";
    this.ok = "OK";
    this.qii = "έλεγχο πραγματικότητας";
    this.mkn = "Ζητήσατε τον έλεγχο πραγματικότητας.";
    this.mid = "Πατήστε το ΙΣΤΟΡΙΚΟ για να δείτε το ιστορικό των παιχνιδιών σας.";
    this.edd = "Game break";
    this.lus = "Game limits";
    this.ivd = "Self test";
    this.euy = "Η ΘΕΩΡΗΤΙΚΉ ΕΠΙΣΤΡΟΦΉ ΣΤΟΝ ΠΑΊΚΤΗ ΓΙΑ ΑΥΤΌ ΤΟ ΠΑΙΧΝΊΔΙ ΕΊΝΑΙ XY."
}
dmk.prototype = new uzv;

function rln() {
    this.ctr = "МИН. ЗАЛОГ Е";
    this.dir = "МАКС. ЗАЛОГ";
    this.bbb = "МИНИМ. ЗАЛОГ";
    this.kct = "МАКС. ЗАЛОГ";
    this.llk = "ЗАЛОГ";
    this.start = "СТАРТ";
    this.cce = "ПОМОЩ";
    this.uud = "ПЛАН НА|ПЕЧАЛБИТЕ";
    this.bmm = "МЕНЮ";
    this.wrk = "ПОВЕЧЕ|ИГРИ";
    this.ruk = "СТОП";
    this.qqk = "КРЕДИТ";
    this.mmg = "ИГРАТА ЗАВЪРШИ";
    this.nuu = "ПЕЧЕЛИТЕ!";
    this.igc = "УСПЕХ!";
    this.win = "ПЕЧАЛБА";
    this.cet = "ПОСЛ.ПЕЧАЛБА";
    this.khy = "ПРИБИРАНЕ";
    this.dco = "ПРИБИРАНЕ";
    this.wqw = "ДУБЛИРАНЕ";
    this.mye = "АВТО|СТАРТ";
    this.bgb = "ДЕЛЕНЕ|ДУБЛ.";
    this.of = "ОТ";
    this.cnn = "ИЗХОД";
    this.imo = "ЗАПОЧНЕТЕ ИГРАТА";
    this.wyg = "ИЗБЕРЕТЕ ЗАЛОГ";
    this.umg = "ДЕЛЕНЕ";
    this.kti = "НАТИСНЕТЕ НЯКОЙ БУТОН ЗА ДА ПРОДЪЛЖИТЕ";
    this.ret = "ВРЪЩАНЕ|КЪМ|ИГРАТА";
    this.qwo = "ОБЩА ПЕЧАЛБА";
    this.smh = "НЕ ДОСТАТЪЧЕН КРЕДИТ.";
    this.ylt = "Бонус!";
    this.kql = "БОНУС";
    this.vhz = "МОЛЯ ИЗЧАКАЙТЕ ...";
    this.gyb = "Повече Игри";
    this.ykf = "ТУРБО";
    this.hix = "ПОВРЕДА АНУЛИРА ВСИЧКИ ЗАЛАГАНИЯ И ПЛАЩАНИЯ.";
    this.language = "ЕЗИК";
    this.ioo = "ПРАВИЛА НА ИГРАТА";
    this.qux = "ПРАВИЛА|НА ИГРАТА";
    this.pku = "ЗАРЕЖДАНЕ ...";
    this.ksx = "ЗАРЕЖДАНЕ НА ИСТОРИЯ ...";
    this.rpt = "Достигна един от лимитите!";
    this.kkt = "Предупреждение";
    this.bqb = "Комуникационна грешка";
    this.kho = "Достигнали сте максималния брой безплатни игри!";
    this.akc = "Играта ще бъде затворена";
    this.qcg = "Играта ще бъде рестартирана";
    this.ruo = "ДОКОСНЕТЕ ЕКРАНА, ЗА ДА ПРОДЪЛЖИТЕ";
    this.jtf = "НАСТРОЙКИ";
    this.ruy = "V A L U E";
    this.guq = "Моля, включете устройството!";
    this.vhe = "ИНФОРМАЦИЯ";
    this.vod = "Моля, деактивирайте ЧАСТЕН РЕЖИМ на браузъра, за да играете играта.";
    this.xgu = "Тази игра е оптимизирана за Google Chrome.";
    this.tml = "Моля, използвайте текущата версия на";
    this.wlf = "За съжаление този браузър не се поддържа напълно.";
    this.acr = "Тази игра не може да се стартира в режим на свободна игра!";
    this.left = "ЛЯВА";
    this.gom = "ДЯСНА";
    this.nxc = "АВТО";
    this.nun = "СПЕЧЕЛЕНО";
    this.tit = "печалби";
    this.beu = "ОБЩО";
    this.error = "ГРЕШКА";
    this.lso = "БЕЗПЛАТНА ИГРА";
    this.audio = "ЗВУК";
    this.nht = "МУЗИКА";
    this.oga = "ПЪЛЕН ЕКРАН";
    this.djx = "ПЪЛЕН|ЕКРАН";
    this.zsz = "ИД НА ИГРА";
    this.rvs = "ВРЕМЕ НА ИГРА";
    this.rjo = "Последни";
    this.mgd = "игри";
    this.bzh = "ДЕПОЗИТ";
    this.gor = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УДВОИШ ПЕЧАЛБАТА";
    this.xnk = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УЧЕТВОРИШ ПЕЧАЛБАТА";
    this.kcy = "ИГРАЙ ЗА ШАНС ДА УВЕЛИЧИШ ПЕЧАЛБАТА";
    this.hgr = "Статистика";
    this.zoj = "Общо игри";
    this.agj = "Общо залог";
    this.lml = "Общо печалби";
    this.vfa = "Общо време на игра";
    this.qza = "Прочетох това съобщение.";
    this.tla = "ИЗХОД|ОТ|ИГРАТА";
    this.dwr = "ИСТОРИЯ";
    this.zqg = "Няма играни игри.";
    this.state = "СТАТУС";
    this.yqt = "Основна игра";
    this.wzr = "Автоматично събрани";
    this.jbv = "Събрани";
    this.bpv = "Бонус-игри";
    this.smt = "Дублиране";
    this.atn = "Половина";
    this.inw = "Respin";
    this.hmw = "Бонус";
    this.oir = "Първо раздаване";
    this.aoz = "Второ раздаване";
    this.gkk = "Трето раздаване";
    this.agz = "П Р О Д Ъ Л Ж А В А М";
    this.xkg = "Не показвай отново";
    this.nvj = "AUTOSTART";
    this.scg = "ДУБЛИРАНЕ";
    this.dxp = "ПЛАН НА ПЕЧАЛБИТЕ";
    this.rgq = "Звукът не може да бъде зареден!";
    this.vsv = "Липсват ресурси!";
    this.otq = "Игра без звук?";
    this.jyn = "Завъртете устройството си в портретен режим, за да играете като на истинска слот машина!";
    this.civ = "Настройте интерфейса на играта според своите нужди!";
    this.sku = "ЗА ПОВЕЧЕ ИНФОРМАЦИЯ ВИЖТЕ ПРАВИЛАТА НА ИГРАТА.";
    this.hra = "ИЗЧИСТВАНЕ";
    this.dzg = "НАСТРОЙКИ НА АВТОМАТИЧНОТО СТАРТИРАНЕ";
    this.wld = "Брой игри:";
    this.vvi = "Спри автоматичния старт";
    this.khi = "Кредит по-малък от:";
    this.jtp = "Кредит по-висок от:";
    this.vfh = "Спечели повече от:";
    this.sqf = "Автоматичното стартиране ще бъде спряно в началото на бонуса.";
    this.oaw = "Сподели във Facebook";
    this.ok = "OK";
    this.qii = "Reality Check";
    this.mkn = "Заявили сте проверка на реалността.";
    this.mid = "Натиснете ИСТОРИЯ, за да видите хронологията си на игра.";
    this.edd = "Game break";
    this.lus = "Game limits";
    this.ivd = "Self test";
    this.euy = "ТЕОРЕТИЧНАТА ВЪЗВРАЩАЕМОСТ НА ИГРАЧА ЗА ТАЗИ ИГРА Е XY."
}
rln.prototype = new uzv;

function dmc() {
    this.ctr = "მინიმალური ფსონი არის";
    this.dir = "მაქსიმალური ფსონი";
    this.bbb = "მინიმალური ფსონი";
    this.kct = "მაქსიმალური ფსონი";
    this.llk = "ფსონი";
    this.start = "დაწყება";
    this.cce = "დახმარება";
    this.uud = "გადახდის მრიცხველი";
    this.bmm = "მენიუ";
    this.wrk = "მეტი|თამაშები";
    this.ruk = "გაჩერება";
    this.qqk = "კრედიტი";
    this.mmg = "თამაში დასრულებულია";
    this.nuu = "გამარჯვებული!";
    this.igc = "გისურვებთ წარმატებას!";
    this.win = "მოგება";
    this.cet = "ბოლო მოგება";
    this.khy = "შეგროვება";
    this.dco = "შეგროვება";
    this.wqw = "აზარტი";
    this.mye = "ავტო|დაწყება";
    this.bgb = "ნახევარი";
    this.cnn = "გამოსვლა";
    this.imo = "თამაშის დაწყება";
    this.wyg = "აირჩიეთ ფსონი";
    this.umg = "ნახევარი";
    this.ret = "თამაშზე|დაბრუნება";
    this.qwo = "მთლიანი მოგება";
    this.kkt = "გაფრთხილება";
    this.beu = "მთლიანი";
    this.vhz = "გთხოვთ, დაელოდოთ ...";
    this.gyb = "მეტი თამაშები";
    this.ykf = "ტურბო";
    this.hix = "გაუმართაობის შემთხვევაში ყველა მოგება და ნათამაშები წაიშლება.";
    this.agz = "გაგრძელება";
    this.nvj = "ავტო დაწყება";
    this.dxp = "გადახდის მრიცხველი";
    this.scg = "აზარტი";
    this.left = "მარცხნივ";
    this.gom = "მარჯვნივ";
    this.nxc = "ავტომატურად";
    this.ok = "კი";
    this.hra = "გაუქმება";
    this.smt = "აზარტი";
    this.atn = "ნახევარი";
    this.ioo = "თამაშის წესები";
    this.qux = "თამაშის წესები";
    this.ylt = "BONUS!";
    this.kql = "ბონუს";
    this.kti = "დააჭირეთ ნებისმიერ ღილაკს რომ გააგრძელოთ";
    this.smh = "არა საკმარისი კრედიტი.";
    this.ruo = "შეეხეთ ეკრანს რომ გააგრძელოთ";
    this.pku = "ჩატვირთვის  ...";
    this.ksx = "ჩატვირთვის  ისტორია  ...";
    this.bqb = "საკომუნიკაციო შეცდომა";
    this.rpt = "თქვენ ერთ ერთი ლიმიტი ამოწურეთ!";
    this.kho = "თქვენ უფასო თამაშების მაქსიმალური რაოდენობის ლიმიტი უკვე ამოწურეთ!";
    this.akc = "თამაში დასრულდება";
    this.qcg = "თამაში გადაიტვირთება";
    this.nun = "მოგებულია";
    this.tit = "wins";
    this.ruy = "V A L U E";
    this.error = "შეცდომა";
    this.lso = "უფასო თამაში";
    this.zsz = "თამაშის  ნომერი";
    this.rvs = "სათამაშო დრო";
    this.rjo = "ბოლო ";
    this.mgd = "თამაშები";
    this.bzh = "დეპოზიტი";
    this.audio = "ხმა";
    this.nht = "მუსიკა";
    this.oga = "სრული ეკრანი";
    this.djx = "სრული ეკრანი";
    this.language = "ენის";
    this.xkg = "მომავალში აღარ ჩვენება";
    this.rgq = "ხმის ჩატვირთვა ვერ ხერხდება!";
    this.vsv = "არასაკმარისი რესურსები!";
    this.otq = "გინდათ ხმის გარეშე ითამაშოთ?";
    this.guq = "გთხოვთ მოაბრუნოთ თქვენი მოწყობილობა!";
    this.vod = "გთხოვთ, გამორთოთ პირადი რეჟიმი თქვენს ბრაუზერში რომ შეძლოთ თამაში.";
    this.xgu = "ეს თამაში ოპტიმიზირებულია Google Chrome-ისათვის.";
    this.fzz = "გთხოვთ გამოიყენოთ";
    this.ypj = "-ის მიმდინარე ვერსია";
    this.wlf = "სამწუხაროდ, ამ ბრაუზერზე თამაში სრულად ვერ ხერხდება.";
    this.acr = "ამ თამაშის თამაში უფასოდ შეუძლებელია!";
    this.jyn = "ჩართეთ თქვენი მოწყობილობა პორტრეტის რეჟიმზე რომ ითამაშოთ ისე თითქოს რეალურ სლოტ მოწყობილობაზე თამაშობდეთ!";
    this.civ = "მოარგეთ თამაშის ინტერფეისი თქვენს საჭიროებებს!";
    this.gor = "აირჩიეთ სწორი ფერი რომ გააორმაგოთ მოგება";
    this.xnk = "აირჩიეთ კარტის სწორი ფერი რომ გააოთხმაგოთ მოგება";
    this.kcy = "დადეთ ფსონი რომ გაზარდოთ მოგების შანსი";
    this.zoj = "მთლიანი თამაშები";
    this.agj = "ფსონი მთლიანად";
    this.lml = "მთლიანი მოგება";
    this.vfa = "მთლიანი სათამაშო დრო";
    this.qza = "მე გავეცანი ამ გზავნილს.";
    this.tla = "თამაშის|დამთავრება";
    this.dwr = "მოვლენების ჩანაწერი";
    this.zqg = "ნათამაშები თამაშები არ არის.";
    this.state = "მდგომარეობა";
    this.yqt = "ძირითადი თამაში";
    this.wzr = "ავტომატურად შეგროვება";
    this.jbv = "აღებულ იქნა";
    this.oir = "პირველი დარიგება";
    this.aoz = "მეორე დარიგება";
    this.gkk = "მესამე დარიგება";
    this.dzg = "ავტოგამშვების პარამეტრები";
    this.wld = "თამაშების რაოდენობა:";
    this.vvi = "შეაჩერეთ ავტოგამშვები";
    this.khi = "კრედიტი უფრო დაბალი ვიდრე:";
    this.jtp = "კრედიტი უფრო მაღალი ვიდრე:";
    this.vfh = "მოიგეთ უფრო მეტი ვიდრე:";
    this.sqf = "ავტოგამშვები შეჩერდება ბონუსის დასაწყისში.";
    this.oaw = "გააზიარეთ ფეისბუქზე";
    this.hgr = "სტატისტიკა";
    this.of = "/";
    this.bpv = "Bonus თამაში";
    this.hmw = "ბონუსი";
    this.vhe = "ინფორმაცია";
    this.jtf = "პარამეტრ.";
    this.inw = "ხელახლა დატრიალების";
    this.sku = "მეტი ინფორმაციისათვის, იხილეთ თამაშის წესები.";
    this.qii = "რეალობის შემოწმება";
    this.mkn = "თქვენ მოითხოვეთ რეალობის შემოწმება.";
    this.mid = "თქვენი თამაშის ისტორიის სანახავად დააჭირეთ მოვლენების ჩანაწერი-ს.";
    this.edd = "Game break";
    this.lus = "Game limits";
    this.ivd = "Self test";
    this.euy = "თეორიული დაბრუნება მოთამაშეზე ამ თამაშში არის XY."
}
dmc.prototype = new uzv;

function wig() {
    this.ctr = "A MINIMUM TÉT";
    this.dir = "MAXIMUM TÉT";
    this.bbb = "MIN. TÉT";
    this.kct = "MAX. TÉT";
    this.llk = "TÉT";
    this.start = "START";
    this.cce = "SÚGÓ";
    this.uud = "SÚGÓ";
    this.bmm = "MENÜ";
    this.wrk = "MENÜ";
    this.ruk = "STOP";
    this.qqk = "HITEL";
    this.mmg = "A JÁTÉKNAK VÉGE";
    this.nuu = "NYEREMÉNY!";
    this.igc = "SOK SZERENCSÉT!";
    this.win = "NYEREMÉNY";
    this.cet = "UTOLSÓ NYER.";
    this.khy = "FELÍR";
    this.dco = "FELÍR";
    this.wqw = "SZORZÁS";
    this.mye = "AUTO|START";
    this.bgb = "FELEZÉS";
    this.cnn = "KILÉPÉS";
    this.imo = "START";
    this.wyg = "VÁLASSZON TÉTET";
    this.umg = "FELEZÉS";
    this.ret = "VISSZA A|JÁTÉKHOZ";
    this.qwo = "Összes Nyeremény";
    this.kkt = "Figyelmeztetés";
    this.beu = "ÖSSZES";
    this.vhz = "KÉREM VÁRJON ...";
    this.gyb = "Menü";
    this.ykf = "SEBESSÉG";
    this.hix = "A MEGHIBÁSODÁS ÉRVÉNYTELENÍT MINDEN JÁTÉKOT ÉS KIFIZETÉST.";
    this.agz = "T O V Á B B";
    this.nvj = "AUTOSTART";
    this.dxp = "SÚGÓ";
    this.scg = "SZORZÁS";
    this.left = "BAL";
    this.gom = "JOBB";
    this.ok = "OK";
    this.hra = "MÉGSEM";
    this.smt = "Szorzás";
    this.atn = "Felezés";
    this.ioo = "JÁTÉKSZABÁLYOK";
    this.qux = "JÁTÉKSZABÁLYOK";
    this.ylt = "Bónusz!";
    this.kql = "BÓNUSZ";
    this.kti = "A FOLYTATÁSHOZ NYOMJON MEG EGY GOMBOT";
    this.smh = "NINCS ELÉG HITEL";
    this.ruy = "V A L U E";
    this.tit = "nyeremények";
    this.of = "/";
    this.ruo = "ÉRINTSE MEG A KÉPERNYŐT A FOLYTATÁSHOZ";
    this.pku = "BETÖLTÉSE ...";
    this.ksx = "JÁTÉK TÖRTÉNET BETÖLTÉSE ...";
    this.bqb = "Kommunikációs hiba";
    this.rpt = "Elérte az egyik limitet!";
    this.kho = "Elérte a szabad játékok maximum számát!";
    this.akc = "A játék megállítva";
    this.qcg = "Játék újraindul";
    this.nun = "NYERT";
    this.error = "HIBA";
    this.lso = "FREEPLAY";
    this.nxc = "AUTO";
    this.zsz = "JÁTÉK ID";
    this.rvs = "Játék Idő";
    this.rjo = "utolsó";
    this.mgd = "játék";
    this.bzh = "HITEL";
    this.audio = "HANG";
    this.nht = "ZENE";
    this.oga = "TELJES KÉPERNYŐ";
    this.djx = "TELJES KÉPERNYŐ";
    this.language = "NYELV";
    this.xkg = "Ne mutassa mégegyszer";
    this.rgq = "A hangot nem lehet betölteni!";
    this.vsv = "Források hiányoznak!";
    this.otq = "Játék hang nélkül?";
    this.jtf = "BEÁLLÍTÁS";
    this.guq = "Kérjük fordítsa el a készüléket!";
    this.vhe = "INFÓ";
    this.vod = "A játékhoz kérem tiltsa le a Privát Böngészés módot a böngészőjében.";
    this.xgu = "Ez a játék Google Chrome böngészőre van optimalizálva.";
    this.fzz = "Kérjük használja a(z)";
    this.ypj = " legújabb verzióját!";
    this.wlf = "Sajnos ez a böngésző nem teljesen támogatott.";
    this.acr = "Ez a játék nem indítható FreePlay módban!";
    this.jyn = "Fordítsa a készülékét álló módba, hogy úgy játsszon, mint egy igazi nyerőgépen!";
    this.civ = "Állítsa be a játék felületét az Ön igényeinek megfelelően!";
    this.gor = "VÁLASSZA KI A MEGFELELŐ SZÍNT, HOGY MEGDUPLÁZZA A NYEREMÉNYT";
    this.xnk = "VÁLASSZA KI A MEGFELELŐ KÁRTYASZÍNT, HOGY MEGNÉGYSZEREZZE A NYEREMÉNYT";
    this.kcy = "SZORZÁS EGY LEHETŐSÉG, HOGY NÖVELJE A NYEREMÉNYT";
    this.hgr = "Statisztika";
    this.zoj = "Összes Játék";
    this.agj = "Összes Tét";
    this.lml = "Összes Nyeremény";
    this.vfa = "Összes Játék Idő";
    this.qza = "Elolvastam az üzenetet.";
    this.tla = "KILÉPÉS";
    this.dwr = "Előzmények";
    this.zqg = "Nincsenek játékok.";
    this.state = "STÁTUSZ";
    this.yqt = "Fő Játék";
    this.wzr = "Autom. Felírás";
    this.jbv = "Felírva";
    this.bpv = "Bónusz játék";
    this.inw = "Respin";
    this.hmw = "Bónusz";
    this.oir = "Első Leosztás";
    this.aoz = "Második Leosztás";
    this.gkk = "Harmadik Leosztás";
    this.dzg = "AUTOSTART BEÁLLÍTÁS";
    this.wld = "Játékok száma:";
    this.vvi = "Stop autostart";
    this.khi = "A hitel kevesebb, mint:";
    this.jtp = "A hitel több, mint:";
    this.vfh = "A nyeremény több, mint:";
    this.sqf = "Az AUTOSTART funkció kikapcsolódik a bónusz játék kezdetén.";
    this.oaw = "Megosztás a Facebook-on";
    this.sku = "KIEGÉSZÍTŐ TÁJÉKOZTATÁST A JÁTÉKSZABÁLYOKBAN TALÁL.";
    this.qii = "Reality Check";
    this.mkn = "Ön egy valóság-ellenőrzést kért.";
    this.mid = "Nyomja meg az ELŐZMÉNYEK lehetőséget, hogy megtekintse a játéka előzményeit.";
    this.edd = "Game break";
    this.lus = "Game limits";
    this.ivd = "Self test";
    this.euy = "A JÁTÉKOSNAK AZ ELVI KIFIZETÉS ÖSSZEGE EBBEN A JÁTÉKBAN XY."
}
wig.prototype = new uzv;

function pdd() {
    this.ctr = "MIZA MINIMĂ ESTE";
    this.dir = "MIZA MAXIMĂ";
    this.bbb = "MIZA MIN.";
    this.kct = "MIZA MAX.";
    this.llk = "MIZĂ";
    this.start = "START";
    this.cce = "AJUTOR";
    this.uud = "LISTA|CÂŞTIGURI";
    this.bmm = "MENIU";
    this.wrk = "MENIUL|JOCULUI";
    this.ruk = "STOP";
    this.qqk = "CREDIT";
    this.mmg = "SFÂRŞIT JOCUL";
    this.nuu = "CÂŞTIGĂTOR!";
    this.igc = "MULT NOROC!";
    this.win = "CÂŞTIG";
    this.cet = "ULTIMUL CÂŞTIG";
    this.khy = "COLECTA";
    this.dco = "COLECTA";
    this.wqw = "JOC";
    this.mye = "AUTO|START";
    this.bgb = "COLECTARE|1/2";
    this.cnn = "IEŞIRE";
    this.imo = "APĂSAŢI START";
    this.wyg = "ALEGEŢI MIZA";
    this.umg = "COLECTARE|1/2";
    this.ret = "ÎNAPOI|LA JOC";
    this.qwo = "Câştig total";
    this.kkt = "Avertizare";
    this.beu = "TOTAL";
    this.vhz = "AŞTEPTAŢI VĂ ROG ...";
    this.gyb = "Meniul Jocului";
    this.ykf = "VITEZĂ";
    this.hix = "FĂRĂ GARANŢIE LA DEFECTAREA APARATULUI.";
    this.agz = "C O N T I N U A R E";
    this.nvj = "AUTOSTART";
    this.dxp = "LISTA CÂŞTIGURI";
    this.scg = "JOC";
    this.left = "STÂNGA";
    this.gom = "DREAPTA";
    this.ok = "OK";
    this.hra = "ÎNTRERUPERE";
    this.smt = "Joc";
    this.atn = "Colectare 1/2";
    this.ioo = "REGULILE JOCULUI";
    this.qux = "REGULILE|JOCULUI";
    this.ylt = "Bonus!";
    this.kql = "BONUS";
    this.kti = "PENTRU CONTINUARE APASĂ PE UN BUTON";
    this.smh = "CREDIT INSUFICIENT.";
    this.tit = "câştigă";
    this.ruy = "V A L U E";
    this.of = "DIN";
    this.ruo = "ATINGEȚI ECRANUL PENTRU A CONTINUA";
    this.pku = "ÎNCARCĂ ...";
    this.ksx = "ÎNCARCĂ ISTORIC ...";
    this.bqb = "Eroare de comunicare";
    this.rpt = "Aţi atins una dintre limite!";
    this.kho = "Aţi atins numărul maxim de jocuri gratis!";
    this.akc = "Jocul se încheie";
    this.qcg = "Jocul se restartează";
    this.nun = "CÂŞTIGAT";
    this.error = "EROARE";
    this.lso = "FREEPLAY";
    this.nxc = "AUTO";
    this.zsz = "ID JOC";
    this.rvs = "TIMP DE JOC";
    this.rjo = "ultimele";
    this.mgd = "jocuri";
    this.bzh = "CREDIT";
    this.audio = "AUDIO";
    this.nht = "MUZICĂ";
    this.oga = "ECRAN COMPLET";
    this.djx = "ECRAN|COMPLET";
    this.language = "LIMBA";
    this.xkg = "Nu reafișați";
    this.rgq = "Sunetele nu pot fi încărcate!";
    this.vsv = "Lipsesc resurse!";
    this.otq = "Jucaţi fără sunet?";
    this.jtf = "SETĂRI";
    this.guq = "Vă rugăm opriţi aparatul!";
    this.vhe = "INFO";
    this.vod = "Vă rugăm dezactivaţi PRIVATE MODE în browser-ul dvs. pentru a juca.";
    this.xgu = "Acest joc este optimizat pentru Google Chrome.";
    this.tml = "Vă rugăm utilizaţi versiunea actuală";
    this.wlf = "Din păcate acest browser nu este sprijinit complet.";
    this.acr = "Acest joc nu poate fi pornit în modul freeplay!";
    this.jyn = "Treceţi aparatul dvs. în modul portret, pentru a juca ca la o maşină automată!";
    this.civ = "Ajustează interfaţa de joc nevoilor dvs!";
    this.gor = "SELECTEAZĂ CULOAREA CORECTĂ PENTRU DUBLAREA CÂŞTIGULUI";
    this.xnk = "SELECTEAZĂ CULOAREA CORECTĂ A CĂRŢII PENTRU A CÂŞTIGA DE 4 ORI";
    this.kcy = "JOACĂ PENTRU ŞANSA DE A CREŞTE PROFITUL";
    this.hgr = "Statistică";
    this.zoj = "Număr jocuri";
    this.agj = "Pariuri totale";
    this.lml = "Câştig total";
    this.vfa = "Timp total de joc";
    this.qza = "Am citit mesajul.";
    this.tla = "ÎNCHEIERE|JOC";
    this.dwr = "ISTORIC";
    this.zqg = "Nu există jocuri.";
    this.state = "STATUT";
    this.yqt = "Joc principal";
    this.wzr = "Auto colectare";
    this.jbv = "Colectat";
    this.bpv = "Bonusspins";
    this.inw = "Respin";
    this.hmw = "Bonus";
    this.oir = "Primul Deal";
    this.aoz = "Al doilea deal";
    this.gkk = "Al treilea deal";
    this.dzg = "SETĂRI AUTOSTART";
    this.wld = "Numărul jocurilor:";
    this.vvi = "Oprire autostart";
    this.khi = "Credit sub:";
    this.jtp = "Credit peste:";
    this.vfh = "Câștig peste:";
    this.sqf = "Autostart se va opti la începerea bonusului.";
    this.oaw = "Distribuie Facebook";
    this.sku = "PENTRU INFORMAŢII SUPLIMENTARE, VEZI REGULILE JOCULUI.";
    this.qii = "Reality Check";
    this.mkn = "Ai cerut un Reality Check.";
    this.mid = "Apasă ISTORIC pentru a vedea istoricul tău de joc.";
    this.edd = "Game break";
    this.lus = "Game limits";
    this.ivd = "Self test";
    this.euy = "DECONTAREA TEORETICĂ CĂTRE JUCĂTORI A ACESTUI JOC ESTE DE XY."
}
pdd.prototype = new uzv;

function lxz() {
    this.ctr = "MÍNIMA APOSTA É";
    this.dir = "MÁX. APOSTA";
    this.bbb = "MÍN. APOSTA";
    this.kct = "MÁX. APOSTA";
    this.llk = "APOSTA";
    this.start = "PARTIDA";
    this.cce = "AJUDA";
    this.uud = "ESQUEMA|DE PAGOS";
    this.bmm = "MENU";
    this.wrk = "SELEÇÃO|DE JOGOS";
    this.ruk = "PARADA";
    this.qqk = "CRÉDITO";
    this.mmg = "FIM DO JOGO";
    this.nuu = "VENCEDOR!";
    this.igc = "BOA SORTE!";
    this.win = "GANHO";
    this.cet = "ULTIMO GANHO";
    this.khy = "COLETAR";
    this.dco = "COLETAR";
    this.wqw = "JOGADA";
    this.mye = "AUTO|PARTIDA";
    this.bgb = "METADE";
    this.cnn = "SAÍDA";
    this.imo = "PREMIR PARTIDA";
    this.wyg = "SELECIONAR APOSTA";
    this.umg = "METADE";
    this.ret = "VOLTAR|PARA|O JOGO";
    this.qwo = "Ganho total";
    this.kkt = "Aviso";
    this.beu = "TOTAL";
    this.vhz = "AGUARDE POR FAVOR ...";
    this.gyb = "Seleção de jogos";
    this.ykf = "VELOCIDADE";
    this.hix = "NÃO SE ASSUME RESPONSABILIDADE POR AVARIAS NA MÁQUINA.";
    this.agz = "C O N T I N U A R";
    this.nvj = "AUTOPARTIDA";
    this.dxp = "ESQUEMA DE PAGOS";
    this.scg = "JOGADA";
    this.left = "ESQUERDA";
    this.gom = "DIREITA";
    this.ok = "OK";
    this.hra = "CANCELAR";
    this.smt = "Jogada";
    this.atn = "Metade";
    this.ioo = "REGRAS DO JOGO";
    this.qux = "REGRAS|DO JOGO";
    this.ylt = "Bonus!";
    this.kql = "BONUS";
    this.kti = "PREMIR QUALQUER TECLA PARA CONTINUAR";
    this.smh = "NÃO HÁ CRÉDITO SUFICIENTE!";
    this.tit = "ganha";
    this.ruy = "V A L U E";
    this.of = "DE";
    this.ruo = "TOCAR NA TELA PARA CONTINUAR";
    this.pku = "CARREGANDO ...";
    this.ksx = "CARREGANDO HISTÓRICO ...";
    this.bqb = "Erro de comunicação";
    this.rpt = "Alcançou um dos limities!";
    this.kho = "Alcançou a quantidade máxima de jogos livres!";
    this.akc = "O jogo será encerrado";
    this.qcg = "O jogo será reiniciado";
    this.nun = "GANHOU";
    this.error = "ERRO";
    this.lso = "FREEPLAY";
    this.nxc = "AUTO";
    this.zsz = "ID JOGO";
    this.rvs = "Playing Time";
    this.rjo = "Últimos";
    this.mgd = "jogos";
    this.bzh = "DEPOSIT";
    this.audio = "AUDIO";
    this.nht = "MUSIC";
    this.oga = "TELA CHEIA";
    this.djx = "TELA|CHEIA";
    this.language = "IDIOMA";
    this.xkg = "Não exibir novamente";
    this.rgq = "Sounds não podem ser carregados!";
    this.vsv = "Faltam recursos!";
    this.otq = "Jogar sem som?";
    this.jtf = "AJUSTES";
    this.guq = "Favor girar o seu aparelho!";
    this.vhe = "INFORMAÇÃO";
    this.vod = "Favor desativar o MODO PRIVADO no browser para iniciar o jogo.";
    this.xgu = "Este jogo é otimizado por Google Chrome.";
    this.tml = "Favor usar a versão atual de";
    this.wlf = "Infelizmente este browser não é completamente suportado.";
    this.acr = "Este jogo não pode ser iniciado no modo de jogo livre!";
    this.jyn = "Girar o seu aparelho para o modo de portrait, para jogar como em uma máquina real!";
    this.civ = "Adapte a interface do jogo às suas necessidades!";
    this.gor = "ESCOLHA A COR CERTA PARA DOBRAR O GANHO";
    this.xnk = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.kcy = "GAMBLE PARA A CHANCE DE AUMENTAR O GANHO";
    this.hgr = "Estatísticas";
    this.zoj = "Número de jogos";
    this.agj = "Aposta total";
    this.lml = "Ganho total";
    this.vfa = "Tempo total do jogo";
    this.qza = "Eu lí esta mensagem.";
    this.tla = "ENCERRAR|JOGO";
    this.dwr = "HISTÓRICO";
    this.zqg = "Ainda não existem jogos.";
    this.state = "ESTADO";
    this.yqt = "Jogo principal";
    this.wzr = "Coletado automaticamente";
    this.jbv = "Coletado";
    this.bpv = "Bonusspins";
    this.inw = "Respin";
    this.hmw = "Bonus";
    this.oir = "Primeiro Deal";
    this.aoz = "Segundo Deal";
    this.gkk = "Terceiro Deal";
    this.dzg = "AJUSTES AUTOPARTIDA";
    this.wld = "Número de jogos:";
    this.vvi = "Parar autopartida";
    this.khi = "Crédito menor do que:";
    this.jtp = "Crédito maior do que:";
    this.vfh = "Ganho maior do que:";
    this.sqf = "O autopartida será parado no início do bonus.";
    this.oaw = "Participar no Facebook";
    this.sku = "PARA MAIS INFORMAÇÕES, CONSULTE AS REGRAS DO JOGO.";
    this.qii = "Reality Check";
    this.mkn = "Solicitaste um Reality Check.";
    this.mid = "Pressione HISTÓRICO para ver seu histórico de jogos.";
    this.edd = "Game break";
    this.lus = "Game limits";
    this.ivd = "Self test";
    this.euy = "O PAGAMENTO TEÓRICO AO JOGADOR PARA ESTE JOGO É DE XY."
}
lxz.prototype = new uzv;

function vdj() {
    this.ctr = "LA MISE MINIMALE EST DE";
    this.dir = "MISE MAX.";
    this.bbb = "MISE MINI";
    this.kct = "MISE MAX.";
    this.llk = "MISE";
    this.start = "DEPART";
    this.cce = "AIDE";
    this.uud = "TABLEAU|DES PAIEMENTS";
    this.bmm = "MENU";
    this.wrk = "PLUS|DE JEUX";
    this.ruk = "ARRÊTEZ";
    this.qqk = "CRÉDIT";
    this.mmg = "FIN DU JEU";
    this.nuu = "GAGNANT!";
    this.igc = "BONNE CHANCE!";
    this.win = "GAIN";
    this.cet = "DERNIER GAIN";
    this.khy = "ENCAISSER";
    this.dco = "ENCAISSER";
    this.wqw = "DOUBLER";
    this.mye = "AUTO|LANCER";
    this.bgb = "ENCAISSER|MOITIÉ";
    this.cnn = "SORTIE";
    this.imo = "APPUYEZ SUR START";
    this.wyg = "CHOISIR LA MISE";
    this.umg = "ENCAISSER|MOITIÉ";
    this.ret = "RETOUR|AU JEU";
    this.qwo = "Gain total";
    this.kkt = "Avertissement";
    this.beu = "TOTALE";
    this.vhz = "ATTENDEZ S'IL VOUS PLAÎT ...";
    this.gyb = "Plus de jeux";
    this.ykf = "VITESSE";
    this.hix = "Á L'OCCASION D´ERREUR D´APPAREIL DÉCLINER TOUTE RESPONSABILITÉ.";
    this.agz = "C O N T I N U E R";
    this.nvj = "AUTO LANCER";
    this.dxp = "TABLEAU DES PAIEMENTS";
    this.scg = "DOUBLER";
    this.left = "GAUCHE";
    this.gom = "DROITE";
    this.ok = "OK";
    this.hra = "ANNULER";
    this.smt = "Doubler";
    this.atn = "Encaisser moitié";
    this.ioo = "RÈGLES DU JEU";
    this.qux = "RÈGLES DU JEU";
    this.ylt = "Bonus!";
    this.kql = "BONUS";
    this.kti = "APPUYEZ SUR UNE TOUCHE POUR CONTINUER";
    this.smh = "PAS ASSEZ DE CRÉDIT";
    this.tit = "gagne";
    this.ruy = "V A L U E";
    this.of = "SUR";
    this.ruo = "EFFLEURE L'ÉCRAN POUR CONTINUER";
    this.pku = "CHARGEMENT EN COURS ...";
    this.ksx = "CHARGEMENT DE L'HISTORIQUE EN COURS ...";
    this.bqb = "Erreur de communication";
    this.rpt = "Vous avez atteint une des limites!";
    this.kho = "Vous avez atteint le nombre maximum des jeux gratuits!";
    this.akc = "Le jeu sera terminé";
    this.qcg = "Le jeu sera démarré de nouveau";
    this.nun = "GAGNÉ";
    this.error = "ERREUR";
    this.lso = "JEU GRATUIT";
    this.nxc = "AUTO";
    this.zsz = "ID DU JEU";
    this.rvs = "TEMPS DE JEU";
    this.rjo = "Les";
    this.mgd = "derniers jeux";
    this.bzh = "AVOIR";
    this.audio = "AUDIO";
    this.nht = "MUSIQUE";
    this.oga = "PLEIN ÉCRAN";
    this.djx = "PLEIN|ÉCRAN";
    this.language = "LANGUE";
    this.xkg = "Ne pas afficher encore une fois";
    this.rgq = "Impossible de charger des sounds!";
    this.vsv = "Manque de ressources!";
    this.otq = "Jouer sans son?";
    this.jtf = "CONFIGUR.";
    this.guq = "Merci de tourner votre matériel!";
    this.vhe = "INFO";
    this.vod = "Veuillez désactiver le MODE PRIVÉ dans le navigateur afin de démarrer le jeu.";
    this.xgu = "Ce jeu est optimisé pour Google Chrome.";
    this.tml = "Veuilllez utiliser la version à jour de";
    this.wlf = "Malheureusement, ce browser n'est intégralement supporté.";
    this.acr = "Impossible de démarrer ce jeu au mode jeu gratuit!";
    this.jyn = "Tournez votre matériel dans le mode portrait pour jouer comme sur une véritable machine!";
    this.civ = "Adapte l'interface de jeu à tes besoins!";
    this.gor = "CHOISIS LA BONNE COULEUR AFIN DE DOUBLER LE GAIN";
    this.xnk = "CHOISIS LA BONNE COULEUR DE LA CARTE AFIN DE QUADRUPLER LE GAIN";
    this.kcy = "GAMBLE POUR LA CHANCE DE MULTIPLIER LE GAIN";
    this.hgr = "Statistiques";
    this.zoj = "Nombre des jeux";
    this.agj = "Total des mises";
    this.lml = "Gain total";
    this.vfa = "Temps total du jeu";
    this.qza = "J'ai lu le message";
    this.tla = "TERMINER|LE JEU";
    this.dwr = "Historique";
    this.zqg = "Il n'y a pas encore de jeux joués.";
    this.state = "ÉTAT";
    this.yqt = "Jeu principal";
    this.wzr = "Pris automatiquement";
    this.jbv = "Pris";
    this.bpv = "Bonusspins";
    this.inw = "Respin";
    this.hmw = "Bonus";
    this.oir = "Premier Deal";
    this.aoz = "Deuxième Deal";
    this.gkk = "Troisième Deal";
    this.dzg = "AUTOSTART CONFIGURATION";
    this.wld = "Nombre des jeux:";
    this.vvi = "Arrêter autostart";
    this.khi = "Crédit inférieur à:";
    this.jtp = "Crédit supérieur à:";
    this.vfh = "Gain supérieur à:";
    this.sqf = "L'autostart est arrêté au début du bonus.";
    this.oaw = "Partager sur Facebook";
    this.sku = "POUR PLUS D'INFORMATIONS, CONSULTEZ LES RÈGLES DU JEU.";
    this.qii = "Reality Check";
    this.mkn = "Tu as demandé un Reality Check.";
    this.mid = "Appuie sur HISTORIQUE pour afficher ton historique de jeu.";
    this.edd = "Game break";
    this.lus = "Game limits";
    this.ivd = "Self test";
    this.euy = "LE VERSEMENT THÉORIQUE AU JOUEUR POUR CE JEU S'ÉLÈVE À XY."
}
vdj.prototype = new uzv;

function cks() {
    this.ctr = "NAJMANJI ULOG JE";
    this.dir = "MAX ULOG";
    this.bbb = "MIN. ULOG";
    this.kct = "MAKS. ULOG";
    this.llk = "ULOG";
    this.start = "START";
    this.cce = "POMOĆ";
    this.uud = "LISTA DOBITAKA";
    this.bmm = "IZBORNIK";
    this.wrk = "VIŠE|IGARA";
    this.ruk = "STOP";
    this.qqk = "KREDIT";
    this.mmg = "KRAJ IGRE";
    this.nuu = "DOBITAK!";
    this.igc = "SRETNO!";
    this.win = "DOBITAK";
    this.cet = "ZADNJI DOBITAK";
    this.khy = "UPIŠI";
    this.dco = "UPIŠI";
    this.wqw = "DUPLANJE";
    this.mye = "AUTO|START";
    this.bgb = "UZMI|1/2";
    this.cnn = "IZLAZ";
    this.imo = "PRETISNITE START";
    this.wyg = "BIRAJTE ULOG";
    this.umg = "UZMI|1/2";
    this.ret = "POVRATAK|U IGRU";
    this.qwo = "Ukubni dobitci";
    this.kkt = "Upozorenje";
    this.beu = "UKUBNI";
    this.vhz = "MOLIMO PRIČEKAJTE ...";
    this.gyb = "Više igara";
    this.ykf = "BRZINA";
    this.hix = "Kod kvara na uređaju nema jamstva.";
    this.agz = "D A L J E";
    this.nvj = "AUTOSTART";
    this.dxp = "LISTA DOBITAKA";
    this.scg = "DUPLANJE";
    this.left = "LIJEVA";
    this.gom = "DESNA";
    this.ok = "OK";
    this.hra = "PREKID";
    this.smt = "Duplanje";
    this.atn = "Uzmi 1/2";
    this.ioo = "PRAVILA IGRE";
    this.qux = "PRAVILA IGRE";
    this.ylt = "Bonus!";
    this.kql = "BONUS";
    this.kti = "ZA NASTAVITI PRITISNITE BILO KOJU TIPKU";
    this.smh = "NEMATE DOVOLJNO KREDITA.";
    this.tit = "dobici";
    this.ruy = "V A L U E";
    this.of = "OD";
    this.ruo = "ZA NASTAVAK DODIRNITE ZASLON";
    this.pku = "UČITAVANJA ...";
    this.ksx = "POVIJEST UČITAVANJA ...";
    this.bqb = "Komunikacijska pogreška";
    this.rpt = "Dostigli ste jednu od graničnih vrijednosti!";
    this.kho = "Dostigli ste maksimum besplatnih igara!";
    this.akc = "Igra se zatvara";
    this.qcg = "Igra se iznova učitava";
    this.nun = "OSVOJENO";
    this.error = "POGREŠKA";
    this.lso = "FREEPLAY";
    this.nxc = "AUTO";
    this.zsz = "ID IGRE";
    this.rvs = "Vrijeme igre";
    this.rjo = "posljednjih";
    this.mgd = "igara";
    this.bzh = "DEPOZIT";
    this.audio = "ZVUKA";
    this.nht = "GLAZBA";
    this.oga = "PUN ZASLON";
    this.djx = "PUN ZASLON";
    this.language = "JEZIKA";
    this.xkg = "Ne prikazuj ponovo";
    this.rgq = "Zvukovi se ne mogu učitati!";
    this.vsv = "Nedostaju resursi!";
    this.otq = "Želite li igrati uz zvuk?";
    this.jtf = "POSTAVKE";
    this.guq = "Uključite svoj uređaj!";
    this.vhe = "INFORMACIJE";
    this.vod = "Molimo deaktivirajte PRIVATNI MOD u Vašem pregledniku kako biste mogli igrati";
    this.xgu = "Ova igra je optimizirana za Google Chrome.";
    this.tml = "Molimo koristite se trenutnom inačicom";
    this.wlf = "Nažalost ovaj preglednik nije u potpunosti podržan";
    this.acr = "Ova se igra ne može pokrenuti u režimu slobodne igre!";
    this.jyn = "Podesite svoj uređaj na portretni format kako biste igrali kao na pravoma automatu!";
    this.civ = "Prilagodite sučelje igre svojim potrebama!";
    this.gor = "ODABERI PRAVU BOJU I TIME UDVOSTRUČI DOBITAK";
    this.xnk = "ODABERI PRAVI ZNAK I TIME UČETVEROSTRUČI DOBITAK";
    this.kcy = "KOCKANJEM OSVOJI ŠANSU ZA POVEĆANJE DOBITKA";
    this.hgr = "Statistike";
    this.zoj = "Ukupno igara";
    this.agj = "Ukupni ulog";
    this.lml = "Ukupno dobitaka";
    this.vfa = "Ukupno vrijeme igre";
    this.qza = "Pročitao sam ovu poruku";
    this.tla = "IZLAZ|IZ IGRE";
    this.dwr = "Povijest";
    this.zqg = "Nema odigranih igara.";
    this.state = "STANJE";
    this.yqt = "Glavna igra";
    this.wzr = "Auto. pokupljeno";
    this.jbv = "Pokupljeno";
    this.bpv = "Besplatne igre";
    this.inw = "Dodatne okretaje";
    this.hmw = "Bonus";
    this.oir = "Prvo dijeljenje";
    this.aoz = "Drugo dijeljenje";
    this.gkk = "Treće dijeljenje";
    this.dzg = "POSTAVKE AUTOMATSKE IGRE";
    this.wld = "Ukupno igara:";
    this.vvi = "Zaustavljanje automatske igre";
    this.khi = "Kredit manji od:";
    this.jtp = "Kredit veći od:";
    this.vfh = "Dobitak veći od:";
    this.sqf = "Automatska igra će se zaustaviti na početku besplatne igre.";
    this.oaw = "Podijeli na Facebooku";
    this.sku = "ZA VIŠE INFORMACIJA POGLEDAJTE PRAVILA IGRE.";
    this.qii = "Reality Check";
    this.mkn = "Zatražili ste Reality Check.";
    this.mid = "Pritisni POVIJEST za pregled prijašnjih igara.";
    this.edd = "Game break";
    this.lus = "Game limits";
    this.ivd = "Self test";
    this.euy = "TEORETSKI POVRATAK NA IGRAČA ZA OVU IGRU JE XY."
}
cks.prototype = new uzv;

function mac() {
    this.ctr = "MINIMA PUNTATA È";
    this.dir = "PUNTATA MASSIMA";
    this.bbb = "MIN. PUNTATA";
    this.kct = "MASS. PUNTATA";
    this.llk = "PUNTATA";
    this.start = "START";
    this.cce = "AIUTO";
    this.uud = "TABELLA VINCITE";
    this.bmm = "MENU";
    this.wrk = "SCELTA|GIOCHI";
    this.ruk = "STOP";
    this.qqk = "CREDITO";
    this.mmg = "FINE PARTITA";
    this.nuu = "VINCITORE!";
    this.igc = "BUONA FORTUNA!";
    this.win = "VINCITA";
    this.cet = "ULTIMA VINCITA";
    this.khy = "INCASSA";
    this.dco = "INCASSA";
    this.wqw = "GAMBLE";
    this.mye = "AUTO|START";
    this.bgb = "METÀ";
    this.cnn = "FINE";
    this.imo = "PREMI START";
    this.wyg = "SCEGLI PUNTATA";
    this.umg = "METÀ";
    this.ret = "RITORNO|AL GIOCO";
    this.qwo = "Totale vincita";
    this.kkt = "Attenzione";
    this.beu = "TOTALE";
    this.vhz = "ATTENDERE PREGO ...";
    this.gyb = "Scelta Giochi";
    this.ykf = "VELOCITÀ";
    this.hix = "In caso di malfunzionamento nessuna responsabilità assunta.";
    this.agz = "C O N T I N U A";
    this.nvj = "AUTOSTART";
    this.dxp = "TABELLA VINCITE";
    this.scg = "GAMBLE";
    this.left = "SINISTRA";
    this.gom = "DESTRA";
    this.ok = "OK";
    this.hra = "CANCELLA";
    this.smt = "Gamble";
    this.atn = "Metà";
    this.ioo = "REGOLAMENTO";
    this.qux = "REGOLAMENTO";
    this.ylt = "Bonus!";
    this.kql = "BONUS";
    this.kti = "PREMI UN TASTO PER CONTINUARE";
    this.smh = "CREDITO INSUFFICIENTE!";
    this.tit = "vince";
    this.ruy = "V A L U E";
    this.of = "DI";
    this.ruo = "TOCCARE LO SCHERMO PER CONTINUARE";
    this.pku = "STA CARICANDO ...";
    this.ksx = "STA CARICANDO LA CRONACA ...";
    this.bqb = "Errore di comunicazione";
    this.rpt = "Hai raggiunto uno dei limiti!";
    this.kho = "Hai raggiunto il numero massimo di free games!";
    this.akc = "La partita sta terminando";
    this.qcg = "La partita sta ripartendo";
    this.nun = "VINTO";
    this.error = "ERRORE";
    this.lso = "FREEPLAY";
    this.nxc = "AUTO";
    this.zsz = "GAME ID";
    this.rvs = "Durata del gioco";
    this.rjo = "Ultime partite";
    this.mgd = "";
    this.bzh = "DEPOSITO";
    this.audio = "AUDIO";
    this.nht = "MUSICA";
    this.oga = "SCHERMO INTERO";
    this.djx = "SCHERMO INTERO";
    this.language = "LINGUA";
    this.xkg = "Non mostrare di nuovo";
    this.rgq = "Suoni non caricabili!";
    this.vsv = "Mancano risorse!";
    this.otq = "Giocare senza suoni?";
    this.jtf = "SETTAGGI";
    this.guq = "Prego girare l'apparecchio!";
    this.vhe = "INFO";
    this.vod = "Prego disattivare il MODO PRIVATO nel browser per iniziare la partita";
    this.xgu = "La partita è ottimizzata per Google Chrome.";
    this.tml = "Prego utilizzare la versione attuale di";
    this.wlf = "Purtroppo il presente browser non viene supportato interamente";
    this.acr = "Impossibile avviare questa partita nel modo freeplay!";
    this.jyn = "Girare l'apparecchio nel modo ritratto per giocare come su un apparecchio vero!";
    this.civ = "Aggiusta l'interfaccia del gioco come ti piace!";
    this.gor = "SCEGLI IL COLORE GIUSTO PER RADDOPPIARE LA VINCITA";
    this.xnk = "SCEGLI IL SEME GIUSTO PER QUADRUPLARE LA VINCITA";
    this.kcy = "GAMBLE PER L'OPPORTUNITÀ DI AUMENTARE LA VINCITA";
    this.hgr = "Statistica";
    this.zoj = "Totale partite";
    this.agj = "Totale puntata";
    this.lml = "Totale vincita";
    this.vfa = "Totale durata del gioco";
    this.qza = "Ho letto il messaggio";
    this.tla = "TERMINARE|LA PARTITA";
    this.dwr = "Cronaca";
    this.zqg = "Nessuna partita giocata.";
    this.state = "STATO";
    this.yqt = "Partita principale";
    this.wzr = "Raccolto autom.";
    this.jbv = "Raccolto";
    this.bpv = "Bonusspin";
    this.inw = "Respin";
    this.hmw = "Bonus";
    this.oir = "Primo deal";
    this.aoz = "Secondo deal";
    this.gkk = "Terzo deal";
    this.dzg = "SETTAGGI AUTOSTART";
    this.wld = "Numero di partite:";
    this.vvi = "Fermare l'autostart";
    this.khi = "Credito più basso di:";
    this.jtp = "Credito più alto di:";
    this.vfh = "Vincita più alta di:";
    this.sqf = "L'autostart si ferma all'inizio del bonus.";
    this.oaw = "Dividi su facebook";
    this.sku = "PER ULTERIORI INFORMAZIONI CONSULTARE LE REGOLE DI GIOCO.";
    this.qii = "Reality Check";
    this.mkn = "Avete richiesto un Reality Check.";
    this.mid = "Premere CRONACA per mostrare la cronaca della giocata.";
    this.edd = "Game break";
    this.lus = "Game limits";
    this.ivd = "Self test";
    this.euy = "IL PAGAMENTO TEORICO DI QUESTO GIOCO IN FAVORE DEL GIOCATORE AMMONTA A XY."
}
mac.prototype = new uzv;

function wgv() {
    this.ctr = "MIN. INSATSEN ÄR";
    this.dir = "MAXIMAL INSATS";
    this.bbb = "MIN. INSATS";
    this.kct = "MAX. INSATS";
    this.llk = "INSATS";
    this.start = "STARTA";
    this.cce = "HJÄLP";
    this.uud = "VINSTTABELL";
    this.bmm = "MENY";
    this.wrk = "FLER|SPEL";
    this.ruk = "STOPP";
    this.qqk = "KREDIT";
    this.mmg = "SPELET ÄR SLUT";
    this.nuu = "VINNARE!";
    this.igc = "LYCKA TILL!";
    this.win = "VINN";
    this.cet = "SENASTE VINSTEN";
    this.khy = "INKASSERA";
    this.dco = "INKASSERA";
    this.wqw = "DUBBLERA";
    this.mye = "AUTO|START";
    this.bgb = "HÄLFTEN|1/2";
    this.cnn = "AVSLUTA";
    this.imo = "TRYCK PÅ START";
    this.wyg = "VÄLJ INSATS";
    this.umg = "HÄLFTEN";
    this.ret = "ÅTERGÅ|TILL SPELET";
    this.qwo = "Total Vinst";
    this.kkt = "Varning";
    this.beu = "TOTALT";
    this.vhz = "VAR VÄNLIG VÄNTA ...";
    this.gyb = "Fler spel";
    this.ykf = "TEMPO";
    this.hix = "Vid tekniskt fel annulleras alla insatser och spel.";
    this.agz = "F O R T S Ä T T";
    this.nvj = "AUTOSTART";
    this.dxp = "VINSTTABELL";
    this.scg = "DUBBLERA";
    this.left = "VÄNSTER";
    this.gom = "HÖGER";
    this.ok = "OK";
    this.hra = "AVBRYT";
    this.smt = "Dubblering";
    this.atn = "Hälften";
    this.ioo = "SPELREGLER";
    this.qux = "SPELREGLER";
    this.ylt = "Bonus!";
    this.kql = "BONUS";
    this.kti = "TRYCK PÅ EN KNAPP FÖR ATT FORTSÄTTA";
    this.smh = "FÖR LÅGT SALDO!";
    this.tit = "vinster";
    this.ruy = "V A L U E";
    this.of = "AV";
    this.ruo = "PEKA PÅ SKÄRMEN FÖR ATT FORTSÄTTA";
    this.pku = "LÄSER ...";
    this.ksx = "LÄSER IN HISTORIKEN ...";
    this.bqb = "Kommunikationsfel";
    this.rpt = "Du har nått en av gränserna!";
    this.kho = "Du har nått det maximala antalet gratisspel!";
    this.akc = "Spelet avslutas";
    this.qcg = "Spelet startas om";
    this.nun = "VUNNA";
    this.error = "FEL";
    this.lso = "GRATISSPEL";
    this.nxc = "AUTO";
    this.zsz = "SPEL-ID";
    this.rvs = "SPELTID";
    this.rjo = "senaste";
    this.mgd = "spelen";
    this.bzh = "INSÄTTNING";
    this.audio = "LJUD";
    this.nht = "MUSIK";
    this.oga = "HELSKÄRM";
    this.djx = "HELSKÄRM";
    this.language = "SPRÅK";
    this.xkg = "Visa inte igen";
    this.rgq = "Ljud kan inte laddas!";
    this.vsv = "Resurser saknas!";
    this.otq = "Spela utan ljud?";
    this.jtf = "INSTÄLLN.";
    this.guq = "Vänd din enhet!";
    this.vhe = "INFO";
    this.vod = "Avaktivera PRIVATLÄGET i din webbläsare för att spela spelet.";
    this.xgu = "Det här spelet är optimerat för Google Chrome.";
    this.tml = "Använd den senaste versionen av";
    this.wlf = "Tyvärr stöds inte den här webbläsaren fullt ut.";
    this.acr = "Det här spelet kan inte startas i gratisspelsläget!";
    this.jyn = "Håll din enhet i porträttläge för att spela som på en riktig spelautomat!";
    this.civ = "Anpassa spelgränssnittet efter dina behov!";
    this.gor = "VÄLJ RÄTT FÄRG FÖR ATT DUBBLA VINSTEN";
    this.xnk = "VÄLJ RÄTT FÄRGSVIT FÖR ATT FYRDUBBLA VINSTEN";
    this.kcy = "SPELA FÖR ATT FÅ CHANSEN ATT ÖKA VINSTEN";
    this.hgr = "Statistik";
    this.zoj = "Totalt antal spel";
    this.agj = "Totalinsats";
    this.lml = "Totalvinst";
    this.vfa = "Total speltid";
    this.qza = "Jag har läst detta meddelande";
    this.tla = "AVSLUTA|SPELET";
    this.dwr = "Historik";
    this.zqg = "Inga spel har spelats.";
    this.state = "STATUS";
    this.yqt = "Huvudspel";
    this.wzr = "Auto. Inkasserat";
    this.jbv = "Inkasserat";
    this.bpv = "Bonusspinn";
    this.inw = "Respin";
    this.hmw = "Bonus";
    this.oir = "Första given";
    this.aoz = "Andra given";
    this.gkk = "Tredje given";
    this.dzg = "AUTOSTARTINSTÄLLNINGAR";
    this.wld = "Antal spelrundor:";
    this.vvi = "Stoppa autospel";
    this.khi = "Saldo lägre än:";
    this.jtp = "Saldo högre än:";
    this.vfh = "Vinst högre än:";
    this.sqf = "Autospelen kommer att stoppas då bonusen startar.";
    this.oaw = "Dela på Facebook";
    this.sku = "SE SPELREGLERNA FÖR MER INFORMATION.";
    this.qii = "Reality Check";
    this.mkn = "Du har begärt att få en statusuppdatering.";
    this.mid = "Tryck på HISTORIK för att visa din spelhistorik.";
    this.edd = "Spelpaus";
    this.lus = "Spelgränser";
    this.ivd = "Självtest";
    this.euy = "DEN TEORETISKA ÅTERBETALNINGEN TILL SPELAREN FÖR DET HÄR SPELET ÄR XY."
}
wgv.prototype = new uzv;

function bxz() {
    this.kub = "HELD";
    this.cqg = "RED";
    this.mmz = "BLACK";
    this.iss = "HIGH";
    this.xpq = "LOW";
    this.nsp = "DEAL CARDS";
    this.wlb = "HOLD CARDS";
    this.qwz = "DRAW CARDS";
    this.lzx = "five equivalent cards (only possible with a wild card)";
    this.whm = "ace - king - queen - jack - ten of the same suit";
    this.suk = "STRAIGHT with cards of the same suit";
    this.ajf = "four cards of the same rank";
    this.cuo = "combination of THREE OF A KIND and a PAIR";
    this.vor = "five cards of the same suit";
    this.xte = "five cards in rank order, but not of the same suit";
    this.xlo = "three cards of the same rank";
    this.gfw = "two distinct pairs and any 5th card";
    this.met = "two jacks, queens, kings or aces";
    this.ckz = "four cards of the same suit with any 5th card";
    this.kzr = "straight with ace in the center";
    this.tqa = "combination of figures which contains jack, queen and king";
    this.beo = "sequence with even or odd successive values";
    this.zkc = "ROYAL FLUSH containing a wild card";
    this.rik = "four twos with any other card";
    this.cif = "four 5's, 6's, 7's, 8's, 9's, 10's, JACK's, QUEEN's OR KING's";
    this.dhn = "four 2's, 3's or 4's with any other card";
    this.ibs = "four aces with any other card";
    this.acg = "four 2's, 3's OR 4's with an Ace 2,3 or 4";
    this.vhb = "four Aces with 2, 3 or 4";
    this.buh = "two Kings or Aces";
    this.uas = "two tens, jacks, queens, kings or aces";
    this.qny = "FIVE OF A KIND";
    this.bno = "ROYAL FLUSH";
    this.mvg = "STRAIGHT FLUSH";
    this.fgq = "FOUR OF A KIND";
    this.jlz = "FULL HOUSE";
    this.rjq = "FLUSH";
    this.spe = "STRAIGHT";
    this.dri = "THREE OF A KIND";
    this.vhc = "TWO PAIRS";
    this.rzx = "HIGH PAIR";
    this.fho = "FOUR FLUSH";
    this.gfz = "POKER";
    this.ajc = "SKIP STRAIGHT";
    this.hcx = "BLAZE";
    this.hqg = "CORNER STRAIGHT";
    this.dau = "TENS OR BETTER";
    this.cxz = "JACKS OR BETTER";
    this.knv = "KINGS OR BETTER";
    this.pzi = "WILD ROYAL FLUSH";
    this.mst = "FOUR DEUCES";
    this.obz = "FOUR 5 TO KING";
    this.ces = "FOUR 2 TO 4";
    this.epw = "FOUR ACES";
    this.tpp = "FOUR LOW WITH LOW";
    this.dcf = "FOUR ACES WITH 2, 3 OR 4";
    this.biu = "GAMBLE AGAIN OR COLLECT?";
    this.jcs = "SELECT A CARD";
    this.gxq = "If selected card is higher than dealer: WIN!";
    this.uht = "If selected card is lower than dealer: lose";
    this.uum = "If selected card is same as dealer: tie";
    this.jml = "ACE is highest, two is lowest, no wild cards.";
    this.ybh = "TIE";
    this.wem = "PLAYER";
    this.mvx = "DEALER";
    this.nwe = "BEAT THE DEALER TO DOUBLE THE WIN";
    this.rev = "SELECT THE CORRECT VALUE TO DOUBLE THE WIN"
}
bxz.prototype = new cdi;

function fjs() {
    this.kub = "Удержать";
    this.cqg = "КРАСНЫЙ";
    this.mmz = "BLACK";
    this.iss = "КРУПНАЯ";
    this.xpq = "МЕЛКАЯ";
    this.nsp = "РАЗДЕЛИТЬ КАРТЫ";
    this.wlb = "УДЕРЖАТЬ КАРТЫ";
    this.qwz = "ВЗЯТЬ КАРТЫ";
    this.lzx = "Пять карт одного номинала (одна из них джокер)";
    this.whm = "Туз - король - дама - валет - 10 одной масти";
    this.suk = "STRAIGHT одной масти";
    this.ajf = "Четыре карты одного номинала";
    this.cuo = "Три карты одного номинала и одна пара";
    this.vor = "Пять карт одной масти";
    this.xte = "Пять карт по порядку, но не одной масти";
    this.xlo = "Три карты одного номинала";
    this.gfw = "Две пары и одна допол. карта";
    this.met = "Четыре карты одной масти и одна допол. карта";
    this.ckz = "Два валета, две дамы, два короля или туза";
    this.kzr = "Пять карт по порядку через туз (3-2-Т-К-Д)";
    this.tqa = "Комбинация из карт с картинками: две валета, две дамы и король";
    this.beo = "Пять четных или пять не четных карт по порядку";
    this.zkc = "ROYAL FLUSH с джокером";
    this.rik = "Четыре карты 2 и одна допол. карта";
    this.cif = "Четыре карты 5, 6, 7, 8, 9, 10, валет, дама или король";
    this.dhn = "Четыре карты 2, 3 или 4 с любой допол. картой.";
    this.ibs = "Четыре туза и одна допол. карта";
    this.acg = "Четыре двойки, тройки или четверки с тузом, двойкой, тройкой или четверкой";
    this.vhb = "Четыре туза с 2, 3 или 4";
    this.buh = "Два короля или туза";
    this.uas = "Две карты 10, валет, дама, король или туз";
    this.qny = "FIVE OF A KIND";
    this.bno = "ROYAL FLUSH";
    this.mvg = "STRAIGHT FLUSH";
    this.fgq = "FOUR OF A KIND";
    this.jlz = "FULL HOUSE";
    this.rjq = "FLUSH";
    this.spe = "STRAIGHT";
    this.dri = "THREE OF A KIND";
    this.vhc = "TWO PAIRS";
    this.rzx = "HIGH PAIR";
    this.fho = "FOUR FLUSH";
    this.gfz = "POKER";
    this.ajc = "SKIP STRAIGHT";
    this.hcx = "BLAZE";
    this.hqg = "CORNER STRAIGHT";
    this.dau = "TENS OR BETTER";
    this.cxz = "JACKS OR BETTER";
    this.knv = "KINGS OR BETTER";
    this.pzi = "WILD ROYAL FLUSH";
    this.mst = "FOUR DEUCES";
    this.obz = "FOUR 5 TO KING";
    this.ces = "FOUR 2 TO 4";
    this.epw = "FOUR ACES";
    this.tpp = "FOUR LOW WITH LOW";
    this.dcf = "FOUR ACES WITH 2, 3 OR 4";
    this.biu = "Удвоить или взять?";
    this.jcs = "ВЫБЕРИТЕ КАРТУ";
    this.gxq = "Если Ваши карты крупнее, чем карты дилера, Вы выиграете!";
    this.uht = "Если Ваши карты мельче, чем карты дилера, Вы не выиграете";
    this.uum = "Если достоинство Ваших карт равно картам дилера, это означает ничью";
    this.jml = "ТУЗ самая крупная, ДВА самая мелкая карта, нет джокеров.";
    this.nwe = "ВЫИГРАЙТЕ У РАЗДАЮЩЕГО, ЧТОБЫ УДВОИТЬ ВЫИГРЫШ";
    this.ybh = "РОВНО";
    this.wem = "ИГРОК";
    this.mvx = "DEALER";
    this.rev = "ВЫБЕРИТЕ ПРАВИЛЬНЫЙ НОМИНАЛ, ЧТОБЫ УДВОИТЬ ВЫИГРЫШ."
}
fjs.prototype = new twg;

function ook() {
    this.kub = "PARAR";
    this.cqg = "ROJO";
    this.mmz = "NEGRO";
    this.iss = "ALTO";
    this.xpq = "BAJO";
    this.nsp = "DAR CARTAS";
    this.wlb = "RETENER CARTAS";
    this.qwz = "DAR CARTAS";
    this.lzx = "Cinco cartas iguales (sólo posible con el comodin)";
    this.whm = "As - rey - dama - sota - 10 del mismo color";
    this.suk = "STRAIGHT del mismo color";
    this.kzr = "Escalera con as en el centro";
    this.tqa = "Combinación de figuras con sota, dama y rey";
    this.ajf = "Cuatro cartas del mismo valor";
    this.beo = "Secuencia de cinco cartas pares o impares de valores sucesivos";
    this.cuo = "Combinación entre THREE OF A KIND y PAIR";
    this.vor = "Cinco cartas del mismo color";
    this.xte = "Cinco cartas puestas en orden pero no del mismo color";
    this.xlo = "Tres cartas equivalentes";
    this.gfw = "Dos pares diferentes y una quinta carta";
    this.met = "Cuatro cartas del mismo color con una quinta carta";
    this.ckz = "Dos sotas, damas, reyes o ases";
    this.zkc = "ROYAL FLUSH con comodin";
    this.rik = "Cuatro doses con otra carta";
    this.cif = "Cuatro 5, 6, 7, 8, 9, 10, sotas, damas o reyes";
    this.dhn = "Cuatro de dos, de tres o de cuatro con otra carta";
    this.ibs = "Cuatro ases con otra carta";
    this.acg = "Cuatro 2, 3 o 4 con un as, una 2, 3 o 4";
    this.vhb = "Cuatro ases con una 2, 3 o 4";
    this.buh = "Dos reyes o dos ases";
    this.uas = "Dos 10, sotas, damas, reyes o ases";
    this.qny = "FIVE OF A KIND";
    this.bno = "ROYAL FLUSH";
    this.mvg = "STRAIGHT FLUSH";
    this.fgq = "FOUR OF A KIND";
    this.jlz = "FULL HOUSE";
    this.rjq = "FLUSH";
    this.spe = "STRAIGHT";
    this.dri = "THREE OF A KIND";
    this.vhc = "TWO PAIRS";
    this.rzx = "HIGH PAIR";
    this.fho = "FOUR FLUSH";
    this.gfz = "POKER";
    this.ajc = "SKIP STRAIGHT";
    this.hcx = "BLAZE";
    this.hqg = "CORNER STRAIGHT";
    this.dau = "TENS OR BETTER";
    this.cxz = "JACKS OR BETTER";
    this.knv = "KINGS OR BETTER";
    this.pzi = "WILD ROYAL FLUSH";
    this.mst = "FOUR DEUCES";
    this.obz = "FOUR 5 TO KING";
    this.ces = "FOUR 2 TO 4";
    this.epw = "FOUR ACES";
    this.tpp = "FOUR LOW WITH LOW";
    this.dcf = "FOUR ACES WITH 2, 3 OR 4";
    this.biu = "Arriesgar otra vez o tomar el premio?";
    this.jcs = "Tome una carta";
    this.gxq = "Si la carta es más alta que la del crupier: hay premio!";
    this.uht = "Si la carta elegida es más baja que la del crupier: no hay premio!";
    this.uum = "Si la carta elegida es la misma que la del crupier: QUEDA IGUAL";
    this.jml = "ACE es la más alta, dos es la más baja, no hay comodin.";
    this.nwe = "GANAR LA MANO PARA DOBLAR EL PREMIO";
    this.rev = "SELECCIONAR EL VALOR CORRECTO PARA DOBLAR EL PREMIO";
    this.ybh = "IGUAL";
    this.wem = "JUGADOR";
    this.mvx = "MANO"
}
ook.prototype = new hoq;

function hss() {
    this.kub = "HALTEN";
    this.cqg = "ROT";
    this.mmz = "SCHWARZ";
    this.iss = "HOCH";
    this.xpq = "TIEF";
    this.nsp = "KARTEN GEBEN";
    this.wlb = "KARTEN HALTEN";
    this.qwz = "KARTEN GEBEN";
    this.lzx = "Fünf gleiche Karten (nur mit Joker möglich)";
    this.whm = "Ass - König - Dame - Buben - 10er der selben Farbe";
    this.suk = "STRAIGHT in der selben Farbe";
    this.ajf = "Vier wertgleiche Karten";
    this.cuo = "Kombination aus THREE OF A KIND und PAIR";
    this.vor = "Fünf Karten mit der selben Farbe";
    this.xte = "Fünf Karten in geordneter Reihenfolge, ohne der selben Farbe";
    this.xlo = "Drei gleichwertige Karten";
    this.gfw = "Zwei verschiedene Paare und eine 5. Karte";
    this.met = "Zwei Buben, Damen, Könige oder Assen";
    this.ckz = "Vier Karten der selben Farbe mit einer 5. Karte";
    this.kzr = "Straight mit Ass in der Mitte";
    this.tqa = "Bildkarten welche Bube, Dame und König enthalten";
    this.beo = "Fünf gerade oder ungerade aufeinanderfolgende Werte";
    this.zkc = "ROYAL FLUSH mit Joker";
    this.rik = "Vier Zweier mit einer anderen Karte";
    this.cif = "Vier 5er, 6er, 7er, 8er, 9er, 10er, Buben, Damen oder Könige";
    this.dhn = "Vier 2er,3er oder 4er mit einer anderen Karte";
    this.ibs = "Vier Assen mit einer anderen Karte";
    this.acg = "Vier 2er, 3er oder 4er mit einer As, einem 2er, 3er oder 4er";
    this.vhb = "Vier Assen mit einer 2, 3 oder 4";
    this.buh = "Zwei Könige oder zwei Assen";
    this.uas = "Zwei 10er, Buben, Damen, Könige oder Assen";
    this.qny = "FIVE OF A KIND";
    this.bno = "ROYAL FLUSH";
    this.mvg = "STRAIGHT FLUSH";
    this.fgq = "FOUR OF A KIND";
    this.jlz = "FULL HOUSE";
    this.rjq = "FLUSH";
    this.spe = "STRAIGHT";
    this.dri = "THREE OF A KIND";
    this.vhc = "TWO PAIRS";
    this.rzx = "HIGH PAIR";
    this.fho = "FOUR FLUSH";
    this.gfz = "POKER";
    this.ajc = "SKIP STRAIGHT";
    this.hcx = "BLAZE";
    this.hqg = "CORNER STRAIGHT";
    this.dau = "TENS OR BETTER";
    this.cxz = "JACKS OR BETTER";
    this.knv = "KINGS OR BETTER";
    this.pzi = "WILD ROYAL FLUSH";
    this.mst = "FOUR DEUCES";
    this.obz = "FOUR 5 TO KING";
    this.ces = "FOUR 2 TO 4";
    this.epw = "FOUR ACES";
    this.tpp = "FOUR LOW WITH LOW";
    this.dcf = "FOUR ACES WITH 2, 3 OR 4";
    this.biu = "NOCHEINMAL GAMBELN ODER GEWINN NEHMEN?";
    this.jcs = "NIMM EINE KARTE";
    this.gxq = "Wenn die gewählte Karte höher ist als die vom Dealer: Gewinn!";
    this.uht = "Wenn die gewählte Karte niedriger ist als die vom Dealer: Kein Gewinn";
    this.uum = "Wenn die gewählte Karte die selbe ist wie die vom Dealer: GLEICH";
    this.jml = "Ass ist die höchste Karte, Zwei die niedrigste, keine Joker.";
    this.nwe = "BESIEGE DEN GEBER UM DEN GEWINN ZU VERDOPPELN";
    this.rev = "WÄHLE DEN RICHTIGEN WERT UM DEN GEWINN ZU VERDOPPELN";
    this.ybh = "GLEICH";
    this.wem = "SPIELER";
    this.mvx = "GEBER"
}
hss.prototype = new jqm;

function agc() {
    this.kub = "TUTUNUZ";
    this.cqg = "KIRMIZI";
    this.mmz = "SIYAH";
    this.iss = "YÜKSEK";
    this.xpq = "DERIN";
    this.nsp = "KARTLARI VERİNİZ";
    this.wlb = "KARTLARI TUTUNUZ";
    this.qwz = "KARTLARI VERİNİZ";
    this.lzx = "Beş ayni kartlar (tek jokerle mümkün)";
    this.whm = "Ass - papaz - dama - valeler - 10lar ayni renkli";
    this.suk = "STRAIGHT ayni renkli";
    this.ajf = "Dört ayni değerde olan kartlar";
    this.cuo = "Kombinasyon THREE OF A KIND ve PAIR le";
    this.vor = "Beş ayni renkli kartlar";
    this.xte = "Beş kartlar düzenli bir sıralamada, ayni renk siz";
    this.xlo = "Üç ayni değerinde olan kartlar";
    this.gfw = "Iki değişik çiftle ve bir 5. kart";
    this.met = "Iki valeler, damalar, papazlar veya asslar";
    this.ckz = "Ayni renkten dört kart ve bir 5. kart";
    this.kzr = "As’ı ortada olan Straight";
    this.tqa = "Vale, kız ve papaz gösteren resimli kartlar";
    this.beo = "Arka arkaya beş çift veya tek değer";
    this.zkc = "ROYAL FLUSH  joker le";
    this.rik = "Dört ikili başka bir kartla";
    this.cif = "Dört 5’li, 6’lı, 7’li, 8’li, 9’lu, 10’lu, vale, kız veya papaz";
    this.dhn = "Dört 2ler,3ler veya 4ler başka bir kartla";
    this.ibs = "Dört as başka bir kartla";
    this.acg = "Bir as ile bir 2'li, 3'lü veya 4'lü ile dört adet 2'li, 3'lü veya 4'lü";
    this.vhb = "2,3 veya 4 ile dört as";
    this.buh = "Iki papazlar veya iki asslar";
    this.uas = "Iki 10lar, valeler, damalar, papazlar veya asslar";
    this.qny = "FIVE OF A KIND";
    this.bno = "ROYAL FLUSH";
    this.mvg = "STRAIGHT FLUSH";
    this.fgq = "FOUR OF A KIND";
    this.jlz = "FULL HOUSE";
    this.rjq = "FLUSH";
    this.spe = "STRAIGHT";
    this.dri = "THREE OF A KIND";
    this.vhc = "TWO PAIRS";
    this.rzx = "HIGH PAIR";
    this.fho = "FOUR FLUSH";
    this.gfz = "POKER";
    this.ajc = "SKIP STRAIGHT";
    this.hcx = "BLAZE";
    this.hqg = "CORNER STRAIGHT";
    this.dau = "TENS OR BETTER";
    this.cxz = "JACKS OR BETTER";
    this.knv = "KINGS OR BETTER";
    this.pzi = "WILD ROYAL FLUSH";
    this.mst = "FOUR DEUCES";
    this.obz = "FOUR 5 TO KING";
    this.ces = "FOUR 2 TO 4";
    this.epw = "FOUR ACES";
    this.tpp = "FOUR LOW WITH LOW";
    this.dcf = "FOUR ACES WITH 2, 3 OR 4";
    this.biu = "Bir daha riziko veya kazançı alınız?";
    this.jcs = "Bir kart al";
    this.gxq = "Seçilen kart Dealer’inkinden yüksekse: Kazanç!";
    this.uht = "Seçilen kart Dealer’inkinden düşükse: Kazanç yok";
    this.uum = "Seçilen kart Dealer’inkiyle aynı ise: PAT";
    this.jml = "ACE is highest, two is lowest, Joker yok";
    this.nwe = "KAĞITLARI DAĞITANI YENEREK KAZANCINI İKİYE KATLAYABİLİRSİN";
    this.ybh = "AYNI";
    this.wem = "OYUNCU";
    this.mvx = "DEALER";
    this.rev = "DOĞRU DEĞERİ SEÇEREK KAZANCINI İKİYE KATLARSIN"
}
agc.prototype = new yth;

function pqb() {
    this.kub = "DRŽET";
    this.cqg = "CERVENÁ";
    this.mmz = "CERNÁ";
    this.iss = "VELKÁ";
    this.xpq = "MALÁ";
    this.nsp = "DÁT KARTY";
    this.wlb = "KARTY DRŽET";
    this.qwz = "DÁT KARTY";
    this.lzx = "Pet stejných karet(možné pouze s Jokerem)";
    this.whm = "Eso - král - královna - kluk - desítka stejné barvy";
    this.suk = "STRAIGHT s kartami stejné barvy";
    this.ajf = "Ctyri karty stejné hodnoty";
    this.cuo = "Kombinace z THREE OF A KIND a PAIR";
    this.vor = "Pet karet stejné barvy";
    this.xte = "Pet karet usporádaných v rade, ale ne stejné barvy";
    this.xlo = "Tri karty stejné hodnoty";
    this.gfw = "Dve odlišné dvojice a 5. karta";
    this.met = "Dva klucii, královny, králové nebo esa";
    this.ckz = "Ctyrii karty stejné barvy s 5. kartou";
    this.kzr = "postupka s esem uprostred";
    this.tqa = "kombinace obsahující pouze postavy (jack, queen  a king)";
    this.beo = "postupka vytvorená ze sudých nebo lichých za sebou následujících císel";
    this.zkc = "ROYAL FLUSH s Jokerem";
    this.rik = "Ctyri dvojky s jinou kartou";
    this.cif = "Čtyři 5ky, 6ky, 7ky,8ky,9ky,10ky, kluci,královny nebo králové";
    this.dhn = "Čtyři 2ky,3ky nebo 4ky s další kartou";
    this.ibs = "Čtyri Esa s další kartou";
    this.acg = "Čtyři 2, 3 nebo 4 s Esem, 2,3 nebo 4";
    this.vhb = "Čtyři Esa s jednou 2,3 nebo 4";
    this.buh = "Dva Králové nebo dvě Esa";
    this.uas = "Dve desítky, kluci, královny, králové nebo esa";
    this.qny = "FIVE OF A KIND";
    this.bno = "ROYAL FLUSH";
    this.mvg = "STRAIGHT FLUSH";
    this.fgq = "FOUR OF A KIND";
    this.jlz = "FULL HOUSE";
    this.rjq = "FLUSH";
    this.spe = "STRAIGHT";
    this.dri = "THREE OF A KIND";
    this.vhc = "TWO PAIRS";
    this.rzx = "HIGH PAIR";
    this.fho = "FOUR FLUSH";
    this.gfz = "POKER";
    this.ajc = "SKIP STRAIGHT";
    this.hcx = "BLAZE";
    this.hqg = "CORNER STRAIGHT";
    this.dau = "TENS OR BETTER";
    this.cxz = "JACKS OR BETTER";
    this.knv = "KINGS OR BETTER";
    this.pzi = "WILD ROYAL FLUSH";
    this.mst = "FOUR DEUCES";
    this.obz = "FOUR 5 TO KING";
    this.ces = "FOUR 2 TO 4";
    this.epw = "FOUR ACES";
    this.tpp = "FOUR LOW WITH LOW";
    this.dcf = "FOUR ACES WITH 2, 3 OR 4";
    this.biu = "HRÁT ZNOVU NEBO VZÍT VÝHRU?";
    this.jcs = "ZVOL KARTU";
    this.gxq = "Je-li zvolená karta vyšší než dealerova: Výhra!";
    this.uht = "Je-li  zvolená karta nižšií než dealerova: Žádná výhra!";
    this.uum = "Je-li  zvolená karta shodná s dealerovou: nerozhodný výsledek";
    this.jml = "Eso je nejvyšší, dvě je nejnižší, žádné divoké karty.";
    this.nwe = "PORAZIT DEALERA KE ZDVOJNÁSOBENÍ VÝHRY";
    this.rev = "VYBRAT SPRÁVNOU HODNOTU KE ZDVOJNÁSOBENÍ VÝHRY";
    this.ybh = "STEJNÉ";
    this.wem = "HRÁČ";
    this.mvx = "DEALER"
}
pqb.prototype = new byo;

function geq() {
    this.kub = "HOIA";
    this.cqg = "PUNANE";
    this.mmz = "MUST";
    this.iss = "KÕRGE";
    this.xpq = "MADAL";
    this.nsp = "JAGA KAARDID";
    this.wlb = "HOIA KAARTE";
    this.qwz = "JAGA KAARDID";
    this.lzx = "viis võrdväärset kaarti (võimalik ainult koos Wild kaardiga)";
    this.whm = "sama masti äss - kuningas - emand - soldat - kümme";
    this.suk = "RIDA samavärvi kaartidest";
    this.ajf = "neli sama väärtusega kaarti";
    this.cuo = "kombinatsioon KOLMIK ja PAAR";
    this.vor = "viis sama värvi kaarti";
    this.xte = "viis järjestikust, kuid erivärvi kaarti";
    this.xlo = "kolm võrdväärset kaarti";
    this.gfw = "kaks kindlat paari ja ükskõik milline viies kaart";
    this.met = "kaks soldatit, emandat, kuningat või ässa";
    this.ckz = "neli sama värvi kaarti koos ükskõik millise viienda kaardiga";
    this.zkc = "KUNINGLIK MASTIRIDA, mis sisaldab Wild kaarti";
    this.rik = "neli kahte koos ükskõik millise muu kaardiga";
    this.cif = "neli viite, kuute, seitset, kaheksat, üheksat, kümmet, Soldatit, Emandat või Kuningat";
    this.dhn = "neli kahte, kolme või nelja koos ükskõik millise muu kaardiga";
    this.ibs = "neli ässa ükskõik millise muu kaardiga";
    this.acg = "Neli 2-te, 3-e või 4-ja koos 2, 3, või 4";
    this.vhb = "Neli ässa ja 2, 3, või 4";
    this.buh = "kaks Kuningat või Ässa";
    this.uas = "kaks kümmet, soldatit, emandat, kuningat või ässa";
    this.qny = "FIVE OF A KIND";
    this.bno = "ROYAL FLUSH";
    this.mvg = "STRAIGHT FLUSH";
    this.fgq = "FOUR OF A KIND";
    this.jlz = "FULL HOUSE";
    this.rjq = "FLUSH";
    this.spe = "STRAIGHT";
    this.dri = "THREE OF A KIND";
    this.vhc = "TWO PAIRS";
    this.rzx = "HIGH PAIR";
    this.fho = "FOUR FLUSH";
    this.gfz = "POKER";
    this.ajc = "SKIP STRAIGHT";
    this.hcx = "BLAZE";
    this.hqg = "CORNER STRAIGHT";
    this.dau = "TENS OR BETTER";
    this.cxz = "JACKS OR BETTER";
    this.knv = "KINGS OR BETTER";
    this.pzi = "WILD ROYAL FLUSH";
    this.mst = "FOUR DEUCES";
    this.obz = "FOUR 5 TO KING";
    this.ces = "FOUR 2 TO 4";
    this.epw = "FOUR ACES";
    this.tpp = "FOUR LOW WITH LOW";
    this.dcf = "FOUR ACES WITH 2, 3 OR 4";
    this.ybh = "VIIK";
    this.wem = "PLAYER";
    this.mvx = "DEALER";
    this.biu = "MÄNGI VEEL VÕI VÕTA VÕIT?";
    this.gxq = "Kui valitud kaart on suurem kui diileril: OLED VÕITNUD!";
    this.uht = "Kui valitud kaart on väiksem kui diileril: kaotad";
    this.uum = "Kui valitud kaart on diileri kaardiga võrdne: viik";
    this.jml = "ÄSS on kõrgeim, kaks madalaim, metsikuid kaarte ei ole.";
    this.kzr = "rida ässaga keskel";
    this.tqa = "kombinatsioon soldatist, emandast ja kuningast";
    this.beo = "kaheste vahedega rida";
    this.jcs = "VALI KAART";
    this.nwe = "VÕIDA DIILERIT, ET KAHEKORDISTADA OMA VÕIT";
    this.rev = "VÕIDU DUUBELDAMISEKS VALI ÕIGE VÄÄRTUS"
}
geq.prototype = new rxf;

function ugs() {
    this.kub = "ΚΡΑΤΗΣΤΕ";
    this.cqg = "ΚΟΚΚΙΝΟ";
    this.mmz = "ΜΑΥΡΟ";
    this.iss = "ΥΨΗΛΟ";
    this.xpq = "ΧΑΜΗΛΟ";
    this.nsp = "ΜΟΙΡΑΣΤΕ ΧΑΡΤΙΑ";
    this.wlb = "ΚΡΑΤΗΣΤΕ ΧΑΡΤΙΑ";
    this.qwz = "ΤΡΑΒΗΞΤΕ ΧΑΡΤΙΑ";
    this.lzx = "πέντε ίδια χαρτιά (μόνη πιθανότητα με το Joker)";
    this.whm = "άσσος - ρήγας - ντάμα - βαλές - δέκα από το ίδιο χρώμα";
    this.suk = "STRAIGHT με χαρτιά από το ίδιο χρώμα";
    this.ajf = "τέσσερα χαρτιά με την ίδια αξία";
    this.cuo = "συνδυασμός από THREE OF A KIND και ένα PAIR";
    this.vor = "πέντε χαρτιά με το ίδιο χρώμα";
    this.xte = "πέντε χαρτιά σε αύξουσα σειρά, αλλά όχι ίδιο χρώμα";
    this.xlo = "τρία χαρτιά ίδιας αξίας";
    this.gfw = "δύο διαφορετικά ζευγάρια και οποιοδήποτε πέμπτο χαρτί";
    this.met = "δύο βαλέδες, ντάμες, ρήγες ή άσσοι";
    this.ckz = "τέσσερα χαρτιά από το ίδιο χρώμα μαζί με κάθε πέμπτη κάρτα";
    this.kzr = "Straight με άσσο στο κέντρο";
    this.tqa = "συνδιασμός από φιγούρες που βγαίνει βαλές, ντάμα και ρήγας";
    this.beo = "σειρά μαζί με μονά ή ζυγά έχει διαδοχική αξία";
    this.zkc = "ROYAL FLUSH περιέχει και Joker";
    this.rik = "τέσσερα δυάρια μαζί με κάθε άλλη κάρτα";
    this.cif = "τέσσερα 5's, 6's,7's, 8's, 9's, 10's, ΒΑΛΕΔΕΣ, ΝΤΑΜΕΣ ή ΡΗΓΕΣ";
    this.dhn = "Τέσσερα 2's ή 4's μαζί με κάθε άλλη κάρτα";
    this.ibs = "τέσσερις άσσοι μαζί με κάθε άλλη κάρτα";
    this.acg = "Τέσσερα 2άρια, 3άρια ή 4άρια μαζί με έναν Άσσο, ένα 2άρι, 3άρι ή 4άρι";
    this.vhb = "Τέσσερις άσσοι μαζί με ένα 2, 3 ή 4";
    this.buh = "δύο Ρήγες ή Άσσοι";
    this.uas = "δύο δεκάρια, βαλέδες, ντάμες, ρήγες ή άσσοι";
    this.qny = "FIVE OF A KIND";
    this.bno = "ROYAL FLUSH";
    this.mvg = "STRAIGHT FLUSH";
    this.fgq = "FOUR OF A KIND";
    this.jlz = "FULL HOUSE";
    this.rjq = "FLUSH";
    this.spe = "STRAIGHT";
    this.dri = "THREE OF A KIND";
    this.vhc = "TWO PAIRS";
    this.rzx = "HIGH PAIR";
    this.fho = "FOUR FLUSH";
    this.gfz = "POKER";
    this.ajc = "SKIP STRAIGHT";
    this.hcx = "BLAZE";
    this.hqg = "CORNER STRAIGHT";
    this.dau = "TENS OR BETTER";
    this.cxz = "JACKS OR BETTER";
    this.knv = "KINGS OR BETTER";
    this.pzi = "WILD ROYAL FLUSH";
    this.mst = "FOUR DEUCES";
    this.obz = "FOUR 5 TO KING";
    this.ces = "FOUR 2 TO 4";
    this.epw = "FOUR ACES";
    this.tpp = "FOUR LOW WITH LOW";
    this.dcf = "FOUR ACES WITH 2, 3 OR 4";
    this.nwe = "ΚΕΡΔΙΣΤΕ ΤΟΝ ΝΤΙΛΕΡ ΓΙΑ ΝΑ ΔΙΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.ybh = "ΙΣΟΠΑΛΙΑ";
    this.wem = "ΠΑIΧΤΗΣ";
    this.mvx = "ΝΤHΛΕΡ";
    this.biu = "ΞΑΝA ΡIΣΚΟ H ΠΑΡΑΛΑΒH;";
    this.gxq = "Αν έχετε χαρτί μεγαλύτερο από τον κρουπιέρη: ΚΕΡΔΙΖΕΤΕ!";
    this.uht = "Αν έχετε χαρτί μικρότερο από τον κρουπιέρη: ΧΑΝΕΤΕ!";
    this.uum = "Αν έχετε το ίδιο χαρτί με τον κρουπιέρη: ισοβαθμήτε";
    this.jml = "Ασσος είναι το μεγαλύτερο, δύο είναι το μικρότερο, δεν υπάρχει Τζόκερ";
    this.jcs = "ΕΠΙΛEΞΤΕ ΚAΡΤΑ";
    this.rev = "ΕΠΙΛΕΞΤΕ ΤΗ ΣΩΣΤΗ ΑΞΙΑ ΓΙΑ ΝΑ ΔΙΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ"
}
ugs.prototype = new dmk;

function nbd() {
    this.kub = "ЗАДЪРЖАНИ";
    this.cqg = "ЧЕРВЕНА";
    this.mmz = "ЧЕРНА";
    this.iss = "ГОЛЯМА";
    this.xpq = "МАЛКА";
    this.nsp = "РАЗДАВАНЕ НА КАРТИТЕ";
    this.wlb = "ЗАПАЗЕТЕ КАРТИ";
    this.qwz = "ИЗТЕГЛЕТЕ КАРТИ";
    this.lzx = "пет еднакви карти (само с джокер)";
    this.whm = "Асе - Поп - Дама - Вале - 10 от един и същ цвят";
    this.suk = "КЕНТА с карти от един и същ цвят";
    this.ajf = "четири карти с една и съща стойност";
    this.cuo = "комбинация от три еднакви карти и един чифт";
    this.vor = "пет еднакви карти";
    this.xte = "пет поредни карти, но от различен цвят";
    this.xlo = "три карти с една и съща стойност";
    this.gfw = "две различни двойки и някоя друга 5-та карта";
    this.met = "две Валета, Дами, Попа или Аса";
    this.ckz = "четири карти от един и същ цвят с някоя друга карта";
    this.zkc = "КЕНТ ФЛЕШ РОЯЛ с джокер";
    this.rik = "четири 2-ки с някоя друга карта";
    this.cif = "четири 5-ци, 6-ци, 7-ци, 8-ци, 9-ки, 10-ки, ВАЛЕТА, ДАМИ или ПОПОВЕ";
    this.dhn = "четири 2-ки, 3-ки или 4-ки с някоя друга карта";
    this.ibs = "четири Аса с някоя друга карта";
    this.acg = "четири 2-ки, 3-ки, или 4-ки с Ас, 2-ка, 3-ка или 4-ка";
    this.vhb = "четири Аса с 2-ка, 3-ка или 4-ка";
    this.buh = "два Попа или Аса";
    this.uas = "две 10-ки, Валета, Дами, Попа или Аса";
    this.qny = "FIVE OF A KIND";
    this.bno = "ROYAL FLUSH";
    this.mvg = "STRAIGHT FLUSH";
    this.fgq = "FOUR OF A KIND";
    this.jlz = "FULL HOUSE";
    this.rjq = "FLUSH";
    this.spe = "STRAIGHT";
    this.dri = "THREE OF A KIND";
    this.vhc = "TWO PAIRS";
    this.rzx = "HIGH PAIR";
    this.fho = "FOUR FLUSH";
    this.gfz = "POKER";
    this.ajc = "SKIP STRAIGHT";
    this.hcx = "BLAZE";
    this.hqg = "CORNER STRAIGHT";
    this.dau = "TENS OR BETTER";
    this.cxz = "JACKS OR BETTER";
    this.knv = "KINGS OR BETTER";
    this.pzi = "WILD ROYAL FLUSH";
    this.mst = "FOUR DEUCES";
    this.obz = "FOUR 5 TO KING";
    this.ces = "FOUR 2 TO 4";
    this.epw = "FOUR ACES";
    this.tpp = "FOUR LOW WITH LOW";
    this.dcf = "FOUR ACES WITH 2, 3 OR 4";
    this.ybh = "НЕРЕШЕНО";
    this.wem = "ИГРАЧ";
    this.mvx = "ДИЛЪР";
    this.biu = "ДУБЛИРАЙТЕ ОТНОВО ИЛИ ПРИБЕРЕТЕ?";
    this.gxq = "Ако избраната карта е по-голяма от картата на дилъра:ПЕЧЕЛИТЕ!";
    this.uht = "Ако избраната карта е по-малка от дилъровата:ГУБИТЕ";
    this.uum = "Ако избраната е същата:Нерешено";
    this.jml = "Ас е най-голямата, 2-ка е най-малката, без джокер карти.";
    this.kzr = "пет поредни карти с Ас в средата";
    this.tqa = "комбинация от карти в които има(K -Q -J -Поп, Дама, Вале)";
    this.beo = "пет карти с четни или нечетни стойности";
    this.jcs = "ЗАДРЪЖТЕ КАРТИ";
    this.nwe = "ПОБЕДИ ДИЛЪРА, ЗА ДА УДВОИШ ПЕЧАЛБАТА";
    this.rev = "ИЗБЕРИ ПРАВИЛНАТА СТОЙНОСТ, ЗА ДА УДВОИШ ПЕЧАЛБАТА"
}
nbd.prototype = new rln;

function pzq() {
    this.kub = "დაიჭირეთ";
    this.cqg = "წითელი";
    this.mmz = "შავი";
    this.iss = "მაღალი";
    this.xpq = "დაბლა";
    this.nsp = "აიღეთ ბარათი";
    this.wlb = "დაიჭირეთ ბარათები";
    this.qwz = "აიღეთ ბარათი";
    this.lzx = "ხუთი იგივე მნიშვნელობის კარტი (შესაძლოა მოპოვებულ იქნას მხოლოდ ჯოკერით)";
    this.whm = "იგივე ფერის ტუზი - მეფე - დამა - ვალეტი - ათიანი";
    this.suk = "Straight იგივე ფერის კარტებით";
    this.ajf = "იგივე იერარქიის ოთხი კარტი";
    this.cuo = "Three Of A Kind-ისა და ერთი Pair-ის კომბინაცია";
    this.vor = "ხუთი ერთი და იგივე ფერის კარტი";
    this.xte = "ხუთი თანმიმდევრული კარტი";
    this.xlo = "სამი თანაბარი კარტი";
    this.gfw = "ორი ორ თანაბარ კარტთან ერთად";
    this.met = "ორი თანაბარი კარტი ვალეტით ზევითკენ";
    this.ckz = "ოთხი სხვადასხვა ერთი და იგივე ფერის კარტი";
    this.kzr = "Straight შუაში ტუზით";
    this.tqa = "5 ნახატიანი კარტი";
    this.beo = "Straight სადაც ყოველი მეორე კარტი აკლია";
    this.zkc = "ROYAL FLUSH რომელიც შეიცავს ჯოკერს";
    this.rik = "ოთხი ორიანი ნებისმიერ სხვა კარტთან ერთად";
    this.cif = "ოთხი 5-იანი, 6-იანი, 7-იანი, 8-იანი, 9-იანი, 10-იანი, ვალეტი, დამა ან მეფე";
    this.dhn = "ოთხი 2-იანი, 3-იანი ან 4-იანი ნებისმიერ სხვა კარტთან ერთად";
    this.ibs = "ოთხი ტუზი ნებისმიერ სხვა კარტთან ერთად";
    this.acg = "ოთხი 2-იანი, 3-იანი ან 4-იანი ტუზთან 2-იანთან, 3-იანთან ან 4-იანთან ერთად";
    this.vhb = "ოთხი ტუზი 2, 3 ან 4-თან ერთად";
    this.buh = "ორი მეფე ან ტუზი";
    this.uas = "ორი ათიანი, ვალეტი, დამა, მეფე ან ტუზი";
    this.qny = "FIVE OF A KIND";
    this.bno = "ROYAL FLUSH";
    this.mvg = "STRAIGHT FLUSH";
    this.fgq = "FOUR OF A KIND";
    this.jlz = "FULL HOUSE";
    this.rjq = "FLUSH";
    this.spe = "STRAIGHT";
    this.dri = "THREE OF A KIND";
    this.vhc = "TWO PAIRS";
    this.rzx = "HIGH PAIR";
    this.fho = "FOUR FLUSH";
    this.gfz = "POKER";
    this.ajc = "SKIP STRAIGHT";
    this.hcx = "BLAZE";
    this.hqg = "CORNER STRAIGHT";
    this.dau = "TENS OR BETTER";
    this.cxz = "JACKS OR BETTER";
    this.knv = "KINGS OR BETTER";
    this.pzi = "WILD ROYAL FLUSH";
    this.mst = "FOUR DEUCES";
    this.obz = "FOUR 5 TO KING";
    this.ces = "FOUR 2 TO 4";
    this.epw = "FOUR ACES";
    this.tpp = "FOUR LOW WITH LOW";
    this.dcf = "FOUR ACES WITH 2, 3 OR 4";
    this.biu = "ითამაშეთ ან აიღეთ მოგება?";
    this.jcs = "აირჩიეთ კარტი";
    this.gxq = "თუ არჩეული კარტი დილერის კარტზე უფრო მაღალია: თქვენ მოიგებთ!";
    this.uht = "თუ არჩეული კარტი დილერის კარტზე უფრო დაბალია: თქვენ წააგებთ";
    this.uum = "თუ არჩეული კარტი იგივეა რაც დილერს აქვს: ანგარიშია ფრე";
    this.jml = "ტუზი არის ყველაზე მაღალი, ორიანი ყველაზე დაბალი, ჯოკერის კარტი არ თამაშდება.";
    this.ybh = "ფრე";
    this.wem = "მოთამაშე";
    this.mvx = "დილერი";
    this.nwe = "მოუგეთ დილერს რომ გააორმაგოთ მოგება";
    this.rev = "აირჩიეთ სწორი სიდიდე რომ გააორმაგოთ მოგება"
}
pzq.prototype = new dmc;

function rza() {
    this.kub = "TART";
    this.cqg = "PIROS";
    this.mmz = "FEKETE";
    this.iss = "MAGAS";
    this.xpq = "ALACSONY";
    this.nsp = "KÉRJEN LAPOKAT";
    this.wlb = "TARTSON LAPOKAT";
    this.qwz = "KÉRJEN LAPOKAT";
    this.lzx = "öt egyforma lap (az ötödik a JOKER)";
    this.whm = "ász - király - dáma - bubi - tizes egy színben";
    this.suk = "SOR egyforma színű lapokból";
    this.ajf = "négy egyforma lap";
    this.cuo = "három és kettő egyforma lap";
    this.vor = "öt egyforma színű lap";
    this.xte = "öt sorban következő lap nem egyforma színben";
    this.xlo = "három egyforma lap";
    this.gfw = "kettő pár és még egy lap";
    this.met = "kettő Bubi, Dáma, Király vagy Ász";
    this.ckz = "négy egyforma és egy másmilyen színű lap";
    this.kzr = "5 sorban következő lap A-val a középen";
    this.tqa = "5 'képes' lap";
    this.beo = "5 egymást követő páros vagy páratlan lap";
    this.zkc = "ROYAL FLUSH amelyben van Joker";
    this.rik = "négy kettes és még egy lap";
    this.cif = "négy 5-ös, 6-os, 7-es, 8-as, 9-es, 10-es, Bubi, Dáma vagy Király";
    this.dhn = "négy kettes, hármas vagy négyes + egy lap";
    this.ibs = "négy ász és még egy lap";
    this.acg = "négy 2, 3 vagy 4 meg egy ász, 2, 3 vagy 4";
    this.vhb = "négy Ász és 2, 3 vagy 4";
    this.buh = "kettő Király vagy Ász";
    this.uas = "kettő tizes, bubi, dáma, király vagy ász";
    this.qny = "FIVE OF A KIND";
    this.bno = "ROYAL FLUSH";
    this.mvg = "STRAIGHT FLUSH";
    this.fgq = "FOUR OF A KIND";
    this.jlz = "FULL HOUSE";
    this.rjq = "FLUSH";
    this.spe = "STRAIGHT";
    this.dri = "THREE OF A KIND";
    this.vhc = "TWO PAIRS";
    this.rzx = "HIGH PAIR";
    this.fho = "FOUR FLUSH";
    this.gfz = "POKER";
    this.ajc = "SKIP STRAIGHT";
    this.hcx = "BLAZE";
    this.hqg = "CORNER STRAIGHT";
    this.dau = "TENS OR BETTER";
    this.cxz = "JACKS OR BETTER";
    this.knv = "KINGS OR BETTER";
    this.pzi = "WILD ROYAL FLUSH";
    this.mst = "FOUR DEUCES";
    this.obz = "FOUR 5 TO KING";
    this.ces = "FOUR 2 TO 4";
    this.epw = "FOUR ACES";
    this.tpp = "FOUR LOW WITH LOW";
    this.dcf = "FOUR ACES WITH 2, 3 OR 4";
    this.biu = "SZOROZZA VAGY FELÍRJA?";
    this.jcs = "VÁLASSZON EGY LAPOT";
    this.gxq = "Ha a kiválasztott lap az osztó lapjától nagyobb: NYERT!";
    this.uht = "Ha a kiválasztott lap az osztó lapjától kisebb: veszített";
    this.uum = "Ha a két lap egyforma: döntetlen";
    this.jml = "Az ÁSZ a legnagyobb a kettes pedig a legkisebb lap.";
    this.ybh = "DÖNTETLEN";
    this.wem = "JÁTÉKOS";
    this.mvx = "OSZTÓ";
    this.nwe = "GYŐZZE LE AZ OSZTÓT, HOGY MEGDUPLÁZZA A NYEREMÉNYT";
    this.rev = "VÁLASSZA A MEGFELELŐT, HOGY MEGDUPLÁZZA A NYEREMÉNYT"
}
rza.prototype = new wig;

function mpi() {
    this.kub = "ŢINERE";
    this.cqg = "ROŞU";
    this.mmz = "NEGRU";
    this.iss = "MARE";
    this.xpq = "MICĂ";
    this.nsp = "ÎMPĂRŢIRE CĂRŢI";
    this.wlb = "ŢINERE CĂRŢI";
    this.qwz = "ÎMPĂRŢIRE CĂRŢI";
    this.lzx = "Cinci cărţi identice (posibil numai cu joker)";
    this.whm = "As - rege - damă - valet - zece de aceeaşi culoare";
    this.suk = "STRAIGHT cu cărţi de aceeaşi culoare";
    this.ajf = "Patru cărţi de aceeaşi valoare";
    this.cuo = "Combinaţie din THREE OF A KIND şi PAIR";
    this.vor = "Cinci cărţi de aceeaşi culoare";
    this.xte = "Cinci cărţi în succesiune ordonată, nu de aceeaşi culoare";
    this.xlo = "Trei cărţi egale ca valoare";
    this.gfw = "Două perechi diferite şi o a cincea carte";
    this.met = "Două cărţi cu valeţi, dame, regi sau aşi";
    this.ckz = "Patru cărţi de aceeaşi culoare cu o a 5-a carte";
    this.kzr = "Straight cu as în mijloc";
    this.tqa = "Combinaţie de cărţi cu figuri cu valet, damă şi rege";
    this.beo = "Cinci valori succesive cu soţ sau fără soţ";
    this.zkc = "ROYAL FLUSH cu joker";
    this.rik = "Patru cărţi de doi cu o altă carte";
    this.cif = "Patru cărţi de 5, 6, 7, 8, 9, 10, valeţi, dame sau regi";
    this.dhn = "Patru cărţi de 2, 3 sau 4 cu o altă carte";
    this.ibs = "Patru aşi cu o altă carte";
    this.acg = "Patru cărţi de 2, 3 sau 4 cu un as, o carte de 2, 3 sau 4";
    this.vhb = "Patru aşi cu o carte de 2, 3 sau 4";
    this.buh = "Doi regi sau doi aşi.";
    this.uas = "Două cărţi de 10, valeţi, dame, regi sau aşi";
    this.qny = "FIVE OF A KIND";
    this.bno = "ROYAL FLUSH";
    this.mvg = "STRAIGHT FLUSH";
    this.fgq = "FOUR OF A KIND";
    this.jlz = "FULL HOUSE";
    this.rjq = "FLUSH";
    this.spe = "STRAIGHT";
    this.dri = "THREE OF A KIND";
    this.vhc = "TWO PAIRS";
    this.rzx = "HIGH PAIR";
    this.fho = "FOUR FLUSH";
    this.gfz = "POKER";
    this.ajc = "SKIP STRAIGHT";
    this.hcx = "BLAZE";
    this.hqg = "CORNER STRAIGHT";
    this.dau = "TENS OR BETTER";
    this.cxz = "JACKS OR BETTER";
    this.knv = "KINGS OR BETTER";
    this.pzi = "WILD ROYAL FLUSH";
    this.mst = "FOUR DEUCES";
    this.obz = "FOUR 5 TO KING";
    this.ces = "FOUR 2 TO 4";
    this.epw = "FOUR ACES";
    this.tpp = "FOUR LOW WITH LOW";
    this.dcf = "FOUR ACES WITH 2, 3 OR 4";
    this.biu = "GAMBLE SAU RIDICAREA CÂŞTIGULUI?";
    this.jcs = "ALEGEŢI O CARTE";
    this.gxq = "Când cartea aleasă este mai mare decât cea a dealerului: câştig!";
    this.uht = "Când cartea aleasă este mai mică decât cea a dealerului: fără câştig";
    this.uum = " Când cartea aleasă este identică cu cea a dealerului: egal";
    this.jml = "As este cartea cea mai mare, 2 este cartea cea mai mică, fără joker.";
    this.ybh = "EGAL";
    this.wem = "PLAYER";
    this.mvx = "DEALER";
    this.nwe = "ÎNVINGE DEALERUL PENTRU DUBLAREA PROFITULUI";
    this.rev = "SELECTEAZĂ VALOAREA CORECTĂ PENTRU DUBLAREA CÂŞTIGULUI"
}
mpi.prototype = new pdd;

function nmb() {
    this.kub = "HELD";
    this.cqg = "VERMELHO";
    this.mmz = "PRETO";
    this.iss = "ALTO";
    this.xpq = "BAIXO";
    this.nsp = "DAR CARTAS";
    this.wlb = "RETER CARTAS";
    this.qwz = "DAR CARTAS";
    this.lzx = "Cinco cartas iguais com o mesmo valor (só é possível com curinga)";
    this.whm = "Ás - Rei - Dama - Valete - Dez de um naipe";
    this.suk = "STRAIGHT do mesmo naipe";
    this.ajf = "Quatro cartas do mesmo valor";
    this.cuo = "Combinação de THREE OF A KIND e PAIR";
    this.vor = "Cinco cartas com o mesmo naipe";
    this.xte = "Cinco cartas sucessivas, sem o mesmo naipe";
    this.xlo = "Três cartas do mesmo valor";
    this.gfw = "Dois pares diferentes e uma 5ª carta";
    this.met = "Dois valetes, damas, reis ou áses";
    this.ckz = "Quatro cartas do mesmo naipe com uma 5ª";
    this.kzr = "Uma escada com um ás no centro";
    this.tqa = "Uma combinação somente de figuras";
    this.beo = "Sequência de pares ou ímpares de sucessivos valores";
    this.zkc = "ROYAL FLUSH com curinga";
    this.rik = "Quatro dois com uma outra carta";
    this.cif = "Quatro 5, 6, 7, 8, 9, 10, valete, dama, rei";
    this.dhn = "Quatro 2, 3 ou 4 com outra carta";
    this.ibs = "Quatro áses com uma outra carta";
    this.acg = "Quatro 2,3 ou 4 A, 2, 3 ou 4";
    this.vhb = "Quatro áses com 2,3 ou 4";
    this.buh = "Dois reis ou dois áses";
    this.uas = "Dois 10, valetes, damas, reis ou áses";
    this.qny = "FIVE OF A KIND";
    this.bno = "ROYAL FLUSH";
    this.mvg = "STRAIGHT FLUSH";
    this.fgq = "FOUR OF A KIND";
    this.jlz = "FULL HOUSE";
    this.rjq = "FLUSH";
    this.spe = "STRAIGHT";
    this.dri = "THREE OF A KIND";
    this.vhc = "TWO PAIRS";
    this.rzx = "HIGH PAIR";
    this.fho = "FOUR FLUSH";
    this.gfz = "POKER";
    this.ajc = "SKIP STRAIGHT";
    this.hcx = "BLAZE";
    this.hqg = "CORNER STRAIGHT";
    this.dau = "TENS OR BETTER";
    this.cxz = "JACKS OR BETTER";
    this.knv = "KINGS OR BETTER";
    this.pzi = "WILD ROYAL FLUSH";
    this.mst = "FOUR DEUCES";
    this.obz = "FOUR 5 TO KING";
    this.ces = "FOUR 2 TO 4";
    this.epw = "FOUR ACES";
    this.tpp = "FOUR LOW WITH LOW";
    this.dcf = "FOUR ACES WITH 2, 3 OR 4";
    this.biu = "JOGAR OU RECOLHER O PRÉMIO?";
    this.jcs = "ESCOLHA UMA CARTA";
    this.gxq = "Se a carta selecionada for mais alta do que a do crupier: PRÉMIO";
    this.uht = "Se a carta selecionada for menor do que a do crupier: Nenhum prémio";
    this.uum = "Se a carta selecionada for a mesma que a do crupier: Empate";
    this.jml = "Az é carta mais alta, dois é a menor, não há curingas.";
    this.ybh = "EMPATE";
    this.wem = "JOGADOR";
    this.mvx = "CRUPIER";
    this.nwe = "GANHE DO DEALER PARA DOBRAR O GANHO";
    this.rev = "ESCOLHA O VALOR CERTO PARA DUBRAR O GANHO"
}
nmb.prototype = new lxz;

function utx() {
    this.kub = "GARDER";
    this.cqg = "ROUGE";
    this.mmz = "NOIR";
    this.iss = "HAUT";
    this.xpq = "BAS";
    this.nsp = "DONNER DES CARTES";
    this.wlb = "GARDER DES CARTES";
    this.qwz = "DONNER DES CARTES";
    this.lzx = "Cinq cartes identiques (possible seulement avec un joker)";
    this.whm = "As, roi, dame, valet, 10 de la même couleur";
    this.suk = "STRAIGHT dans la même couleur";
    this.ajf = "Quatre cartes de la même valeur";
    this.cuo = "Combinaison de trois (BRELAN) et un PAIRE";
    this.vor = "Cinq cartes de la même couleur";
    this.xte = "Cinq cartes dans l'ordre, mais pas de la même couleur";
    this.xlo = "Trois cartes de la même valeur";
    this.gfw = "Deux paires différentes et une 5ème carte";
    this.met = "Deux valets, dames, rois ou as";
    this.ckz = "Quatre cartes de la même couleur avec une 5ème carte";
    this.kzr = "Straight avec un as au milieu";
    this.tqa = "Cartes qui comprennent le valet, la dame et le roi";
    this.beo = "Cinq cartes consécutives paires ou impaires";
    this.zkc = "QUINTE FLUSH avec joker";
    this.rik = "Quatre deux avec une autre carte";
    this.cif = "Quatre 5, 6, 7, 8, 9, 10, valets, dames ou rois";
    this.dhn = "Quatre 2, 3 ou 4 avec une autre carte";
    this.ibs = "Quatres as avec une autre carte";
    this.acg = "Quatre 2,3 ou 4 avec A, 2, 3, ou 4";
    this.vhb = "Quatre as avec un 2, 3, ou 4";
    this.buh = "Deux rois ou deux as.";
    this.uas = "Deux 10, valets, dames, rois ou as";
    this.qny = "FIVE OF A KIND";
    this.bno = "ROYAL FLUSH";
    this.mvg = "STRAIGHT FLUSH";
    this.fgq = "FOUR OF A KIND";
    this.jlz = "FULL HOUSE";
    this.rjq = "FLUSH";
    this.spe = "STRAIGHT";
    this.dri = "THREE OF A KIND";
    this.vhc = "TWO PAIRS";
    this.rzx = "HIGH PAIR";
    this.fho = "FOUR FLUSH";
    this.gfz = "POKER";
    this.ajc = "SKIP STRAIGHT";
    this.hcx = "BLAZE";
    this.hqg = "CORNER STRAIGHT";
    this.dau = "TENS OR BETTER";
    this.cxz = "JACKS OR BETTER";
    this.knv = "KINGS OR BETTER";
    this.pzi = "WILD ROYAL FLUSH";
    this.mst = "FOUR DEUCES";
    this.obz = "FOUR 5 TO KING";
    this.ces = "FOUR 2 TO 4";
    this.epw = "FOUR ACES";
    this.tpp = "FOUR LOW WITH LOW";
    this.dcf = "FOUR ACES WITH 2, 3 OR 4";
    this.biu = "GAMBLE OU PRENDRE GAIN?";
    this.jcs = "PRENDS UNE CARTE";
    this.gxq = "Si la carte sélectionnée est supérieure à celle du dealer: GAIN";
    this.uht = "Si la carte sélectionnée est inférieure à celle du dealer: PAS DE GAIN";
    this.uum = "Si la carte sélectionnée est identique à celle du dealer: EGALITÉ";
    this.jml = "L'as a la valeur la plus importante, le deux la moins importante, aucun joker.";
    this.ybh = "EGALITÉ";
    this.wem = "JOUER";
    this.mvx = "NOUN";
    this.nwe = "VAINCS LE DONNEUR AFIN DE DOUBLER LE GAIN";
    this.rev = "CHOISIS LA BONNE VALEUR AFIN DE DOUBLER LE GAIN"
}
utx.prototype = new vdj;

function dbn() {
    this.kub = "ZADRŽI";
    this.cqg = "CRVENA";
    this.mmz = "CRNA";
    this.iss = "VELIKA";
    this.xpq = "MALA";
    this.nsp = "DIJELI KARTE";
    this.wlb = "ZADRŽI KARTE";
    this.qwz = "DIJELI KARTE";
    this.lzx = "Pet istih karata (moguće samo s džokerom)";
    this.whm = "As - kralj - dama - dečko - desetka u istoj boji";
    this.suk = "STRAIGHT u istoj boji";
    this.ajf = "Četiri jednake karte";
    this.cuo = "Kombinacija od TRI ISTE i PARA";
    this.vor = "Pet karata u istoj boji";
    this.xte = "Pet karata u nizu, ali ne u istoj boji";
    this.xlo = "Tri jednake karte";
    this.gfw = "Dva različita para i neka 5. karta";
    this.met = "Dva dečka, dame, kralja ili asa";
    this.ckz = "Četiri karte u istoj boji s nekom 5. kartom";
    this.kzr = "Pet karata u redu, As u sredini";
    this.tqa = "5 karata sa slikama (dečko, dama i kralj + 2 slike)";
    this.beo = "5 uzastopnih parnih ili neparnih karata";
    this.zkc = "ROYAL FLUSH s džokerom";
    this.rik = "Četiri dvojke s nekom drugom kartom";
    this.cif = "Četiri petice, šestice, sedmice, osmice, devetke, desetke, dečka, dame ili kralja";
    this.dhn = "Četiri dvojke, trojke ili četvorke s nekom drugom kartom";
    this.ibs = "Četiri asa sa nekom drugom kartom";
    this.acg = "Četiri 2,3 ili 4 sa A, 2, 3 ili 4";
    this.vhb = "Četiri asa s 2, 3 ili 4";
    this.buh = "Dva kralja ili dva asa";
    this.uas = "Dvije desetke, dečka, dame, kralja ili asa";
    this.qny = "FIVE OF A KIND";
    this.bno = "ROYAL FLUSH";
    this.mvg = "STRAIGHT FLUSH";
    this.fgq = "FOUR OF A KIND";
    this.jlz = "FULL HOUSE";
    this.rjq = "FLUSH";
    this.spe = "STRAIGHT";
    this.dri = "THREE OF A KIND";
    this.vhc = "TWO PAIRS";
    this.rzx = "HIGH PAIR";
    this.fho = "FOUR FLUSH";
    this.gfz = "POKER";
    this.ajc = "SKIP STRAIGHT";
    this.hcx = "BLAZE";
    this.hqg = "CORNER STRAIGHT";
    this.dau = "TENS OR BETTER";
    this.cxz = "JACKS OR BETTER";
    this.knv = "KINGS OR BETTER";
    this.pzi = "WILD ROYAL FLUSH";
    this.mst = "FOUR DEUCES";
    this.obz = "FOUR 5 TO KING";
    this.ces = "FOUR 2 TO 4";
    this.epw = "FOUR ACES";
    this.tpp = "FOUR LOW WITH LOW";
    this.dcf = "FOUR ACES WITH 2, 3 OR 4";
    this.biu = "IGRAJ ILI POKUPI DOBITAK?";
    this.jcs = "ODABERITE KARTU";
    this.gxq = "Ako je odabrana karta veća od dilerove karte: DOBITAK";
    this.uht = "Ako je odabrana karta manja od dilerove karte: NEMA DOBITKA";
    this.uum = "Ako je odabrana karta ista kao dilerova: NERIJEŠENO";
    this.jml = "As je najveća karta, 2 je najmanja karta, nema džokera.";
    this.ybh = "ISTA";
    this.wem = "IGRAČ";
    this.mvx = "DILER";
    this.nwe = "POBJEDI DJELITELJA I TIME UDVOSTRUČI DOBITAK";
    this.rev = "ODABERI PRAVU VRIJEDNOST I TIME UDVOSTRUČI DOBITAK"
}
dbn.prototype = new cks;

function rwo() {
    this.kub = "TENERE";
    this.cqg = "ROSSO";
    this.mmz = "NERO";
    this.iss = "ALTO";
    this.xpq = "BASSO";
    this.nsp = "NUOVE CARTE";
    this.wlb = "BLOCCA CARTE";
    this.qwz = "NUOVE CARTE";
    this.lzx = "Cinque carte uguali (possibile soltanto con il joker)";
    this.whm = "Asso - Re - Dama - Fante - 10 di un colore";
    this.suk = "STRAIGHT dello stesso colore";
    this.ajf = "Quattro carte dello stesso valore";
    this.cuo = "Combinazione tra THREE OF A KIND e una COPPIA";
    this.vor = "Cinque carte dello stesso colore";
    this.xte = "Cinque carte in ordine cronologico, senza aver lo stesso colore";
    this.xlo = "Tre carte dello stesso valore";
    this.gfw = "Due coppie diverse e una quinta carta";
    this.met = "Due fanti, dame, re o assi";
    this.ckz = "Quattro carte dello stesso colore con una quinta carta";
    this.kzr = "Straight con asso in centro";
    this.tqa = "5 carte solo con figure";
    this.beo = "Straight ove sempre una carta su due manca";
    this.zkc = "ROYAL FLUSH con Jolly";
    this.rik = "Quattro due con un'altra carta";
    this.cif = "Quattro carte da 5, 6, 7, 8, 9, 10, fante, dama o re";
    this.dhn = "Quattro carte da 2, 3 o 4 con un'altra carta";
    this.ibs = "Quattro assi con un'altra carta";
    this.acg = "Quattro 2,3 o 4 con Asso, 2, 3 o 4";
    this.vhb = "Quattro assi con il 2, 3 o 4";
    this.buh = "Due re o due assi";
    this.uas = "Due carte da 10, fante, dama, re o asso";
    this.qny = "FIVE OF A KIND";
    this.bno = "ROYAL FLUSH";
    this.mvg = "STRAIGHT FLUSH";
    this.fgq = "FOUR OF A KIND";
    this.jlz = "FULL HOUSE";
    this.rjq = "FLUSH";
    this.spe = "STRAIGHT";
    this.dri = "THREE OF A KIND";
    this.vhc = "TWO PAIRS";
    this.rzx = "HIGH PAIR";
    this.fho = "FOUR FLUSH";
    this.gfz = "POKER";
    this.ajc = "SKIP STRAIGHT";
    this.hcx = "BLAZE";
    this.hqg = "CORNER STRAIGHT";
    this.dau = "TENS OR BETTER";
    this.cxz = "JACKS OR BETTER";
    this.knv = "KINGS OR BETTER";
    this.pzi = "WILD ROYAL FLUSH";
    this.mst = "FOUR DEUCES";
    this.obz = "FOUR 5 TO KING";
    this.ces = "FOUR 2 TO 4";
    this.epw = "FOUR ACES";
    this.tpp = "FOUR LOW WITH LOW";
    this.dcf = "FOUR ACES WITH 2, 3 OR 4";
    this.biu = "GAMBLE O RACCOGLIERE VINCITA?";
    this.jcs = "PRENDI UNA CARTA";
    this.gxq = "Se la carta selezionata è più alta di quella del mazziere: VINCITA";
    this.uht = "Se la carta selezionata è più bassa di quella del mazziere: NESSUNA VINCITA";
    this.uum = "Se la carta selezionata è uguale a quella del mazziere:ALLA PARI";
    this.jml = "L'asso è la più alta, il due la più bassa, nessuno jolly.";
    this.ybh = "ALLA PARI";
    this.wem = "GIOCATORE";
    this.mvx = "DEALER";
    this.nwe = "VINCI SUL DEALER PER RADDOPPIARE LA VINCITA";
    this.rev = "SCEGLI IL VALORE GIUSTO PER RADDOPPIARE LA VINCITA"
}
rwo.prototype = new mac;

function num() {
    this.kub = "HÅLLET";
    this.cqg = "RÖTT";
    this.mmz = "SVART";
    this.iss = "HÖG";
    this.xpq = "LÅG";
    this.nsp = "TA KORT";
    this.wlb = "BEHÅLL KORTEN";
    this.qwz = "TA KORT";
    this.lzx = "Fem kort av samma värde (endast möjligt med Joker)";
    this.whm = "Ess - Kung - Dam - Knekt - Tio i samma färg";
    this.suk = "Stege i samma färg";
    this.ajf = "Fyra kort av samma värde";
    this.cuo = "Kombination bestående av TRISS och PAR";
    this.vor = "Fem kort i samma färg";
    this.xte = "Fem kort i följd, men inte i samma färg";
    this.xlo = "Tre kort av samma värde";
    this.gfw = "Två olika par och ett 5:e kort";
    this.met = "Två Knektar, Damer, Kungar eller Ess";
    this.ckz = "Fyra kort i en färg med ett 5:e kort";
    this.kzr = "Stege med Ess i mitten";
    this.tqa = "Kort som visar Knekt, Dam och Kung";
    this.beo = "Stege med fem udda eller fem jämna kort i följd";
    this.zkc = "ROYAL FLUSH med Joker";
    this.rik = "Fyra tvåor med något annat kort";
    this.cif = "Fyra 5:or, 6:or, 7:or, 8:or, 9:or, 10:or, Knektar, Damer eller Kungar";
    this.dhn = "Fyra 2:or, 3:or eller 4:or med något annat kort";
    this.ibs = "Fyra Ess med något annat kort";
    this.acg = "Fyra 2:or, 3:or eller 4:or med ett Ess, en 2:a, 3:a eller 4:a";
    this.vhb = "Fyra Ess med en 2:a, 3:a eller 4:a";
    this.buh = "Två Kungar eller två Ess";
    this.uas = "Två 10:or, Knektar, Damer, Kungar eller Ess.";
    this.qny = "FIVE OF A KIND";
    this.bno = "ROYAL FLUSH";
    this.mvg = "STRAIGHT FLUSH";
    this.fgq = "FOUR OF A KIND";
    this.jlz = "FULL HOUSE";
    this.rjq = "FLUSH";
    this.spe = "STRAIGHT";
    this.dri = "THREE OF A KIND";
    this.vhc = "TWO PAIRS";
    this.rzx = "HIGH PAIR";
    this.fho = "FOUR FLUSH";
    this.gfz = "POKER";
    this.ajc = "SKIP STRAIGHT";
    this.hcx = "BLAZE";
    this.hqg = "CORNER STRAIGHT";
    this.dau = "TENS OR BETTER";
    this.cxz = "JACKS OR BETTER";
    this.knv = "KINGS OR BETTER";
    this.pzi = "WILD ROYAL FLUSH";
    this.mst = "FOUR DEUCES";
    this.obz = "FOUR 5 TO KING";
    this.ces = "FOUR 2 TO 4";
    this.epw = "FOUR ACES";
    this.tpp = "FOUR LOW WITH LOW";
    this.dcf = "FOUR ACES WITH 2, 3 OR 4";
    this.biu = "DUBBLERA ELLER INKASSERA?";
    this.jcs = "VÄLJ ETT KORT";
    this.gxq = "Om valt kort är högre än givens: VINST!";
    this.uht = "Om valt kort är lägre än givens: förlust";
    this.uum = "Om valt kort är samma som givens: lika";
    this.jml = "Ess är högst, två är lägst, inga Jokerkort.";
    this.ybh = "LIKA";
    this.wem = "SPELARE";
    this.mvx = "GIVARE";
    this.nwe = "SLÅ DEALERN FÖR ATT DUBBLA VINSTEN";
    this.rev = "VÄLJ RÄTT VALÖR FÖR ATT DUBBLA VINSTEN"
}
num.prototype = new wgv;

function xnf() {
    this.men = {
        backgroundColor: "rgb(0, 0, 0)"
    };
    this.iyt = {
        backgroundColor: "rgb(0,0,0)"
        , efk: "rgba(0,0,0,0.3)"
    };
    this.pmz = {
        font: "arial"
        , exc: "bold"
        , backgroundColor: "black"
        , rzc: "rgb(0,100,10)"
        , ftx: "rgb(80,255,100)"
        , cai: "rgb(120,120,120)"
        , ssy: "red"
        , xim: "white"
        , lhs: null
    };
    this.cmy = {
        font: "arial"
        , exc: "bold"
        , backgroundColor: "rgb(0,0,0)"
        , rpz: null
        , rbc: "rgb(255,255,255)"
        , axt: "rgb(30,30,30)"
        , borderColor: "rgb(80,80,80)"
    };
    this.wtg = {
        font: "arial"
        , exc: "bold"
        , backgroundColor: "black"
        , kdr: "rgb(50,50,50)"
        , cur: "rgb(255,255,255)"
        , rbc: "white"
        , xnh: 0.8
        , ovo: {
            efj: {
                font: "sanf-serif"
                , exc: ""
                , textAlign: "center"
                , gfk: "round"
                , backgroundColor: "black"
                , rbc: "white"
                , borderColor: null
                , axt: null
                , nrn: 1
            }
        }
    };
    this.dwr = {
        font: "arial"
        , exc: "bold"
        , backgroundColor: "rgb(20,20,30)"
        , borderColor: "rgb(0,0,0)"
        , ijx: "rgba(255,255,255,0.2)"
        , rbc: "rgb(255,255,255)"
        , dnc: "rgba(0,0,0,0.3)"
        , display: {
            rkl: "arial"
            , vpx: "arial"
            , exc: "bold"
            , rbc: "rgb(255,255,255)"
            , xpx: "rgb(255,255,255)"
            , backgroundColor: "rgba(0,0,0,0.2)"
            , borderColor: "rgba(255,255,255,0.5)"
        }
        , efj: {
            font: "arial"
            , exc: "bold"
            , rbc: "rgb(0,0,0)"
            , tas: "rgb(150,150,150)"
            , backgroundColor: "rgba(255,255,255,0.8)"
            , rpz: "rgba(255,255,255,1)"
            , wxi: "rgba(255,255,255,0.8)"
            , lqx: "rgba(255,255,255,1)"
            , borderColor: "rgba(200,200,200,0.5)"
            , gfk: "rect"
            , uaz: -1
        }
    };
    this.hgr = {
        font: "arial"
        , exc: "bold"
        , rlv: "rgb(0,0,200)"
        , izu: "rgb(255,255,255)"
        , kco: "rgb(0,0,150)"
        , backgroundColor: "rgb(220,240,255)"
        , pfp: "rgb(180,220,255)"
        , irj: "rgb(10,20,25)"
        , tbp: "rgb(130,220,255)"
        , stt: "rgb(130,190,255)"
        , rbc: "rgb(255,255,255)"
        , usi: "rgb(130,190,255)"
        , jhs: "rgb(100,160,255)"
        , che: "rgb(255,255,255)"
        , efj: {
            gfk: "rect"
            , font: "arial"
            , exc: "bold"
            , rbc: "rgb(255,255,255)"
            , bex: null
            , backgroundColor: "rgb(90,160,255)"
            , sqp: "rgb(90,160,255)"
            , borderColor: "rgb(60,120,200)"
            , axt: "rgb(40,80,140)"
        }
        , pri: {
            gfk: "round"
            , font: "arial"
            , exc: "bold"
            , rbc: "rgb(255,255,255)"
            , bex: null
            , backgroundColor: "rgba(0,0,100,0.5)"
            , sqp: "rgba(150,150,255,0.5)"
            , borderColor: "rgb(90,170,255)"
            , axt: "rgb(40,80,140)"
        }
    };
    this.ios = {};
    this.xmj = {
        mds: ["rgb(255,0,0)", "rgb(255,200,0)", "rgb(0,255,200)", "rgb(240,240,240)"]
    };
    this.gch = {
        type: "left"
        , font: "arial"
        , exc: "bold"
        , backgroundColor: "rgba(0,0,0,0.7)"
        , rpz: null
        , borderColor: "rgb(0,0,0)"
        , axt: "rgb(180,180,180)"
        , pfp: "rgba(0,0,0,0.6)"
        , vfy: null
        , xpx: "rgb(255,200,0)"
        , rbc: "white"
        , val: {
            font: "arial"
            , exc: "bold"
            , backgroundColor: "rgb(100,100,100)"
            , rpz: "rgb(100,100,100)"
            , wxi: null
            , lqx: null
            , borderColor: "rgb(100,100,100)"
            , rbc: "rgb(255,255,255)"
            , tas: "rgb(255,200,0)"
            , gfk: "triangle"
            , uaz: 1
        }
        , sod: {
            font: "arial"
            , exc: "bold"
            , backgroundColor: "rgb(100,100,100)"
            , rpz: "rgb(100,100,100)"
            , wxi: null
            , lqx: null
            , borderColor: "rgb(100,100,100)"
            , rbc: "rgb(255,255,255)"
            , tas: "rgb(255,200,0)"
            , gfk: "triangle"
            , uaz: 0
        }
        , xzu: {
            font: "arial"
            , exc: "bold"
            , backgroundColor: "rgb(100,100,100)"
            , rpz: "rgb(15,15,15)"
            , wxi: "rgb(100,100,100)"
            , lqx: "rgb(15,15,15)"
            , borderColor: "rgb(150,150,150)"
            , rbc: "rgb(255,255,255)"
            , tas: "rgb(255,200,0)"
            , gfk: "rect"
            , uaz: -1
        }
        , display: {
            vpx: "sans-serif"
            , rkl: "sans-serif"
            , exc: "bold"
            , xpx: null
            , rbc: "yellow"
            , borderColor: "rgb(100,100,100)"
            , axt: null
            , backgroundColor: "black"
        }
        , zen: {
            font: "arial"
            , exc: "bold"
            , backgroundColor: null
            , rpz: null
            , rbc: "white"
            , textAlign: "left"
            , type: "round"
        }
    };
    this.frl = {
        font: "arial"
        , exc: "bold"
        , backgroundColor: "rgb(180,180,180)"
        , rpz: "rgb(120,120,120)"
        , borderColor: "rgb(80,80,80)"
        , axt: "rgb(30,30,30)"
        , rbc: "white"
        , fmh: {
            font: "arial"
            , exc: "bold"
            , backgroundColor: "rgba(0,0,0,0.5)"
            , rpz: null
            , wxi: "rgba(100,100,100,0.5)"
            , lqx: null
            , borderColor: null
            , rbc: "white"
            , gfk: "rect"
            , uaz: -1
        }
        , val: {
            font: "arial"
            , exc: "bold"
            , backgroundColor: "rgb(255,255,255)"
            , rpz: "rgb(255,255,255)"
            , wxi: null
            , lqx: null
            , borderColor: "rgb(255,255,255)"
            , rbc: "rgb(0,0,0)"
            , tas: "rgb(0,0,0)"
            , gfk: "triangle"
            , uaz: 1
        }
        , sod: {
            font: "arial"
            , exc: "bold"
            , backgroundColor: "rgb(255,255,255)"
            , rpz: "rgb(255,255,255)"
            , wxi: null
            , lqx: null
            , borderColor: "rgb(255,255,255)"
            , rbc: "rgb(0,0,0)"
            , tas: "rgb(0,0,0)"
            , gfk: "triangle"
            , uaz: 0
        }
        , msx: {
            gfk: "rect"
            , font: "arial"
            , exc: "bold"
            , textAlign: "center"
            , backgroundColor: "rgba(255,255,255,0.1)"
            , rbc: "white"
            , nrn: 1
            , borderColor: "rgb(255,255,255)"
            , axt: "rgb(220,220,220)"
        }
        , display: {
            vpx: "sans-serif"
            , rkl: "sans-serif"
            , exc: "bold"
            , xpx: null
            , rbc: "white"
            , borderColor: "white"
            , axt: null
            , backgroundColor: "rgb(0,0,0)"
        }
        , zen: {
            font: "arial"
            , exc: "bold"
            , backgroundColor: null
            , rpz: null
            , rbc: "white"
            , textAlign: "left"
            , type: "round"
        }
    };
    this.yvn = {
        ndc: [{
            vpx: "sans-serif"
            , oai: "sans-serif"
            , exc: "bold"
            , xpx: "rgb(236,225,207)"
            , mya: "rgb(214,170,102)"
            , bex: "rgb(245,220,148)"
            , ihm: "rgb(190,137,40)"
            , rmo: "rgba(150,120,30,0.3)"
            , borderColor: "rgb(150,110,30)"
            , axt: "rgb(200,170,50)"
            , backgroundColor: "rgb(100,70,30)"
            , rpz: "rgb(0,0,0)"
            , qvq: "rgb(0,0,0)"
        }, {
            vpx: "sans-serif"
            , oai: "sans-serif"
            , exc: "bold"
            , xpx: "rgb(230,230,230)"
            , mya: "rgb(190,190,190)"
            , bex: "rgb(240,240,240)"
            , ihm: "rgb(160,160,160)"
            , rmo: "rgba(120,120,120,0.3)"
            , borderColor: "rgb(120,120,120)"
            , axt: "rgb(170,170,170)"
            , backgroundColor: "rgb(100,100,100)"
            , rpz: "rgb(0,0,0)"
            , qvq: "rgb(0,0,0)"
        }]
        , bhr: {
            vpx: "sans-serif"
            , oai: "sans-serif"
            , exc: "bold"
            , xpx: "rgb(236,225,207)"
            , mya: "rgb(214,170,102)"
            , bex: "rgb(245,220,148)"
            , ihm: "rgb(190,137,40)"
            , rmo: null
            , borderColor: null
            , axt: null
            , backgroundColor: null
            , rpz: null
            , qvq: null
        }
        , fcm: {}
    };
    this.ztf = {
        cgu: "rgb(240,240,240)"
        , exp: "rgb(255,255,255)"
        , borderColor: "rgb(200,200,200)"
        , dnc: "rgba(0,80,150,0.6)"
        , display: {
            rkl: "arial"
            , vpx: "arial"
            , exc: "bold"
            , rbc: "rgb(0,80,151)"
            , xpx: "rgb(0,30,80)"
            , backgroundColor: "rgb(255,255,255)"
            , borderColor: "rgb(200,200,200)"
        }
    }
}

function aoi() {
    this.ney = {
        backgroundColor: null
        , rpz: null
        , pfp: "rgb(0,0,0)"
        , irj: "rgb(0,0,0)"
        , vwr: null
        , abw: 0.5
        , efj: {
            gfk: "rect"
            , font: "verdana"
            , exc: "bold"
            , backgroundColor: "rgb(0,0,0)"
            , sqp: "rgb(150,150,150)"
            , rbc: "rgb(255,255,255)"
            , bex: "rgb(255,255,0)"
            , borderColor: "rgb(150,150,150)"
            , axt: "rgb(0,0,0)"
        }
        , display: {
            rkl: "sans-serif"
            , vpx: "sans-serif"
            , exc: "bold"
            , backgroundColor: "black"
            , rbc: "yellow"
            , xpx: "yellow"
            , borderColor: "rgb(255,255,255)"
            , axt: "rgb(160,160,160)"
        }
        , vhe: {
            font: "verdana"
            , exc: "bold"
            , backgroundColor: "rgb(75, 5, 5)"
            , borderColor: null
            , rbc: "rgb(255, 255, 0)"
        }
    };
    this.wqw = {
        backgroundColor: null
        , pfp: "rgb(0,0,0)"
        , irj: "rgb(0,0,0)"
        , display: {
            rkl: "sans-serif"
            , vpx: "sans-serif"
            , exc: "bold"
            , backgroundColor: "black"
            , rbc: "yellow"
            , xpx: "yellow"
            , borderColor: "rgb(255,255,255)"
            , axt: "rgb(160,160,160)"
        }
        , efj: {
            gfk: "rect"
            , font: "verdana"
            , exc: "bold"
            , backgroundColor: "rgb(0,0,0)"
            , sqp: "rgb(150,150,150)"
            , rbc: "rgb(255,255,255)"
            , bex: null
            , borderColor: "rgb(150,150,150)"
            , axt: "rgb(0,0,0)"
        }
        , vhe: {
            font: "verdana"
            , exc: "bold"
            , backgroundColor: "rgb(75, 5, 5)"
            , borderColor: null
            , rbc: "rgb(255, 255, 0)"
        }
    };
    this.cce = {
        backgroundColor: null
        , pfp: "rgb(0,0,0)"
        , irj: "rgb(0,0,0)"
        , efj: {
            gfk: "rect"
            , font: "verdana"
            , exc: "bold"
            , backgroundColor: "rgb(0,0,0)"
            , sqp: "rgb(150,150,150)"
            , rbc: "rgb(255,255,255)"
            , bex: null
            , borderColor: "rgb(150,150,150)"
            , axt: "rgb(0,0,0)"
        }
    , };
    this.rds = {
        font: "arial"
        , exc: "bold"
        , gix: "yellow"
        , kqm: "yellow"
        , rbc: "yellow"
    };
    this.bdh = {
        font: "sans-serif"
        , exc: "bold"
        , zdd: "red"
        , sds: "orange"
        , kdr: "white"
    };
    this.uud = {
        font: "arial"
        , exc: "bold"
        , rbc: "yellow"
    };
    this.wfi = {
        font: "sans-serif"
        , exc: "bold"
        , rbc: "rgb(255,255,255)"
        , backgroundColor: "rgb(0,0,0)"
        , hdr: "rgb(0,0,0)"
        , ftg: "rgb(255,0,0)"
        , thu: "rgb(255,255,0)"
        , pil: "rgb(80,80,80)"
        , kaq: "rgb(15,15,15)"
        , cja: "rgb(0,0,0)"
        , wkt: "rgb(180,180,180)"
        , lxr: "rgb(0,0,0)"
        , rzp: 0.7
    }
}
aoi.prototype = new xnf;

function jcf() {
    this.ney.backgroundColor = "rgb(0,0,110)";
    this.ney.pfp = "rgb(0,0,110)";
    this.ney.irj = "rgb(0,0,30)";
    this.ney.vhe.backgroundColor = "rgb(0, 0, 50)";
    this.ney.efj.backgroundColor = "rgb(0,0,170)";
    this.ney.efj.sqp = "rgb(0,0,255)";
    this.ney.efj.borderColor = "rgb(0,0,190)";
    this.ney.efj.axt = "rgb(0,0,50)";
    this.rds.gix = "white";
    this.wqw.backgroundColor = "rgb(0,0,110)";
    this.wqw.pfp = "rgb(0,0,110)";
    this.wqw.irj = "rgb(0,0,30)";
    this.wqw.vhe.backgroundColor = "rgb(0,0,50)";
    this.wqw.efj.backgroundColor = "rgb(0,0,170)";
    this.wqw.efj.sqp = "rgb(0,0,255)";
    this.wqw.efj.borderColor = "rgb(0,0,190)";
    this.wqw.efj.axt = "rgb(0,0,50)";
    this.wqw.font = "arial";
    this.wqw.exc = "bold";
    this.wqw.rbc = "white";
    this.wqw.rds = {
        font: "arial"
        , exc: "bold"
        , gix: "white"
        , kqm: "yellow"
        , rbc: "yellow"
    };
    this.cce.pfp = "rgb(0,0,110)";
    this.cce.irj = "rgb(0,0,30)";
    this.cce.efj.backgroundColor = "rgb(0,0,170)";
    this.cce.efj.borderColor = "rgb(0,0,190)";
    this.cce.efj.axt = "rgb(0,0,50)";
    this.cce.win = {
        font: "arial"
        , exc: "bold"
        , rbc: "white"
        , xpx: "yellow"
        , hpp: "verdana"
        , xrf: "bold italic"
        , djg: "white"
    };
    this.wtg.ovo.efj.backgroundColor = "rgb(0,0,170)";
    this.uud.roa = "red";
    this.frl.backgroundColor = "rgb(0,0,110)";
    this.frl.rpz = "rgb(0,0,50)"
}
jcf.prototype = new aoi;

function zvg() {
    this.type = "800_600";
    this.jyr = true;
    this.mxy = false;
    this.wab = false;
    this.mgs = true;
    this.arx = false;
    this.inc = false;
    this.osy = false;
    this.sdv = false
}

function tdg() {
    this.jyr = false;
    this.canvas = {
        yhm: new qlq(0, 0, 800, 620)
    };
    this.aqx = {
        yhm: new qlq()
        , vnd: 0
    };
    this.iyt = {
        yhm: new qlq(0, 20, 800, 600)
        , zqj: 0
    };
    this.err = {
        kju: new qlq(0, 40, 440, 36)
        , hib: new qlq(5, 2, 140, 30)
        , vto: new qlq(150, 2, 140, 30)
        , yro: new qlq(295, 2, 140, 30)
        , zoc: {
            fontSize: 14
            , textIndent: 32
        }
    };
    this.pmz = {
        iyt: {
            yhm: new qlq(0, 0, 500, 360)
            , mul: new qlq(0, 0, 500, 360)
            , edk: new qlq(5, 325, 490, 30)
            , fzt: new qlq(5, 329, 490, 14)
            , hbs: new qlq(50, 345, 400, 6)
            , ahr: new qlq(5, 285, 490, 70)
            , fontSize: 14
            , ywd: 18
            , ike: 5
            , guo: 12
            , hpu: 5
            , idh: 2
            , ehi: 0
            , oxx: {
                yhm: new qlq()
                , x: 0
                , yaz: 0
                , idq: 0
            }
            , dht: {
                mul: new qlq()
                , fzt: new qlq()
                , ngo: new qlq()
            }
        }
        , eux: {
            yhm: new qlq(0, 0, 800, 600)
            , mul: new qlq(140, 105, 520, 390)
            , edk: new qlq()
            , fzt: new qlq(140, 295, 520, 21)
            , hbs: new qlq(192, 320, 416, 3)
            , ahr: new qlq(140, 275, 520, 95)
            , fontSize: 18
            , ywd: 24
            , ike: 0
            , guo: 12
            , hpu: 7
            , idh: 3
            , ehi: 9
            , oxx: {
                yhm: new qlq(400, 459, 0, 3)
                , x: 33
                , yaz: 15
                , idq: 20
            }
            , dht: {
                mul: new qlq(50, 0, 700, 450)
                , fzt: new qlq(100, 460, 600, 60)
                , ngo: new qlq(200, 540, 400, 40)
            }
        }
        , jcq: {
            yhm: new qlq(0, 0, 800, 600)
            , mul: new qlq(0, 0, 800, 600)
            , edk: new qlq()
            , fzt: new qlq(50, 420, 700, 21)
            , hbs: new qlq()
            , ahr: new qlq(50, 410, 700, 80)
            , fontSize: 18
            , ywd: 24
            , ike: 0
            , guo: 12
            , hpu: 7
            , idh: 0
            , ehi: 0
            , oxx: {
                yhm: new qlq(260, 119, 280, 280)
                , x: 0
                , yaz: 0
                , idq: 0
            }
            , dht: {
                mul: new qlq(50, 0, 700, 450)
                , fzt: new qlq(100, 460, 600, 60)
                , ngo: new qlq(200, 540, 400, 40)
            }
        }
    };
    this.cmy = {
        yhm: new qlq(0, 0, 800, 20)
        , fontSize: 12
        , lrh: 19
        , yqs: 15
        , bcr: 120
        , guo: 2
        , hpu: 2
        , rne: 2
        , ilq: 40
    };
    this.wtg = {
        yhm: new qlq(0, 20, 800, 70)
        , fontSize: 10
        , uip: 10
        , ovu: 20
        , scu: 40
        , zqj: 4
        , guo: 10
        , hpu: 5
        , ike: 10
        , zoc: {
            fontSize: 17
            , ike: 2
        }
    };
    this.hgr = {
        yhm: new qlq(0, 20, 800, 600)
        , kju: new qlq()
        , zoc: {
            qim: 20
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , edp: 8
            , wzy: 8
            , zqj: 0
        }
        , vuf: new qlq(0, 20, 800, 40)
        , sst: new qlq(0, 100, 800, 40)
        , plq: new qlq(0, 140, 800, 40)
        , iht: new qlq(0, 180, 800, 40)
        , ttc: new qlq(225, 275, 350, 100)
        , wby: new qlq(200, 480, 400, 40)
        , pch: {
            aom: new qlq(340, 540, 120, 55)
        }
        , dyb: {
            aom: new qlq(250, 540, 120, 55)
            , biq: new qlq(430, 540, 120, 55)
        }
        , ddh: 36
        , fontSize: 30
        , sxy: 22
        , hpu: 3
        , guo: 5
        , zqj: 2
        , duf: 3
        , mjt: 10
    };
    this.ios = {
        yhm: new qlq(-10, 25, 310, 50)
        , vuf: new qlq(10, 4, 240, 24)
        , fzt: new qlq(10, 28, 240, 18)
        , nnt: new qlq(260, 10, 40, 30)
        , sca: new qlq(7, 2, 26, 26)
        , jbh: 16
        , qim: 12
        , kmq: 18
    };
    this.xmj = {
        yhm: new qlq(150, 160, 500, 280)
        , jbh: 26
        , fontSize: 20
        , bwc: new qlq(465, 5, 30, 30)
        , vuf: new qlq(30, 5, 440, 30)
        , wby: new qlq(20, 40, 460, 160)
        , dsd: new qlq(20, 230, 460, 40)
        , zoc: {
            fontSize: 20
        }
    };
    this.gch = {
        yhm: new qlq(0, 55, 560, 430)
        , zqj: 2
        , mpk: 0
        , fhf: 5
        , vzj: 10
        , jbh: 26
        , aib: 20
        , vuf: new qlq(30, 15, 500, 30)
        , gid: new qlq(20, 50, 520, 60)
        , agn: new qlq(40, 60, 220, 40)
        , rzh: new qlq(328, 60, 30, 40)
        , bjj: new qlq(360, 60, 120, 40)
        , ste: new qlq(482, 60, 30, 40)
        , nsq: new qlq(20, 120, 520, 200)
        , wnb: new qlq(40, 120, 480, 40)
        , bih: new qlq(30, 160, 280, 40)
        , rqm: new qlq(328, 160, 30, 40)
        , aof: new qlq(360, 160, 120, 40)
        , sgh: new qlq(482, 160, 30, 40)
        , cme: new qlq(30, 215, 280, 40)
        , yjj: new qlq(328, 215, 30, 40)
        , udt: new qlq(360, 215, 120, 40)
        , nlr: new qlq(482, 215, 30, 40)
        , upp: new qlq(30, 270, 280, 40)
        , isk: new qlq(328, 270, 30, 40)
        , ncq: new qlq(360, 270, 120, 40)
        , dyp: new qlq(482, 270, 30, 40)
        , edk: new qlq(30, 330, 500, 30)
        , jqf: new qlq(210, 370, 140, 50)
        , ply: new qlq()
        , zen: {
            fzt: new qlq(40, 0, 240, 40)
            , ihc: new qlq(7, 12, 16, 16)
            , fontSize: 20
            , edp: 0
            , zqj: 2
        }
        , sod: {
            edp: 3
            , guo: -5
            , hpu: -1
            , wzy: 6
            , fontSize: 20
            , zqj: 0
        }
        , val: {
            edp: 3
            , guo: 5
            , hpu: 0
            , wzy: 6
            , fontSize: 20
            , zqj: 0
        }
        , xzu: {
            edp: 6
            , guo: 0
            , hpu: 0
            , wzy: 6
            , fontSize: 26
            , zqj: 2
        }
        , display: {
            jbh: 16
            , qim: 24
            , boy: 0
            , kxg: 0
            , zqj: 2
            , yyh: 3
            , fkj: 3
            , dtx: 3
            , veu: 3
        }
    };
    this.yvn = {
        yhm: [new qlq(2, 20, 130, 46), new qlq(668, 20, 130, 46)]
        , display: {
            nkf: new qlq(6, 16, 118, 22)
            , jbh: 14
            , lha: 20
            , boy: -11
            , ukh: 10
            , ike: 8
            , zqj: 3
            , cxh: 0
            , jgm: 4
        }
        , bhr: {
            yhm: new qlq(50, 130, 700, 300)
            , nkf: new qlq()
            , jbh: 66
            , lha: 150
            , boy: -90
            , ukh: 60
            , ike: 10
            , zqj: 0
            , cxh: 0
            , jgm: 0
        }
        , fcm: {
            yhm: new qlq(38, 80, 724, 369)
            , bwj: new qlq(100, 53, 525, 50)
            , nkf: new qlq(186, 153, 332, 94)
            , apn: 340
            , glk: 30
            , eme: {
                _0: new qlq(2, 0, 90, 94)
                , _1: new qlq(98, 0, 90, 94)
                , _2: new qlq(194, 0, 90, 94)
                , _3: new qlq(290, 0, 90, 94)
                , _4: new qlq(386, 0, 90, 94)
                , _5: new qlq(482, 0, 90, 94)
                , _6: new qlq(578, 0, 90, 94)
                , _7: new qlq(674, 0, 90, 94)
                , _8: new qlq(770, 0, 90, 94)
                , _9: new qlq(866, 0, 90, 94)
                , _cm: new qlq(962, 0, 28, 94)
                , _dt: new qlq(999, 0, 28, 94)
                , _sp: new qlq(1036, 0, 28, 94)
            }
        }
    }
}
tdg.prototype = new zvg;

function gnb() {
    this.mxy = true
}
gnb.prototype = new tdg;

function xpc() {
    this.arx = true;
    this.wab = true;
    this.jyr = false;
    this.mxy = true;
    this.canvas = {
        yhm: new qlq(0, 0, 800, 1165)
    };
    this.aqx = {
        yhm: new qlq()
        , vnd: 0
    };
    this.iyt = {
        yhm: new qlq(0, 550, 800, 615)
        , zqj: 10
    };
    this.err = {
        kju: new qlq(0, 330, 440, 36)
        , hib: new qlq(5, 2, 140, 30)
        , vto: new qlq(150, 2, 140, 30)
        , yro: new qlq(295, 2, 140, 30)
        , zoc: {
            fontSize: 14
            , textIndent: 32
        }
    };
    this.pmz = {
        iyt: {
            yhm: new qlq(0, 0, 500, 360)
            , mul: new qlq(0, 0, 500, 360)
            , edk: new qlq(5, 325, 490, 30)
            , fzt: new qlq(5, 329, 490, 14)
            , hbs: new qlq(50, 345, 400, 6)
            , ahr: new qlq(5, 285, 490, 70)
            , fontSize: 14
            , ywd: 18
            , ike: 5
            , guo: 12
            , hpu: 5
            , idh: 2
            , ehi: 0
            , oxx: {
                yhm: new qlq()
                , x: 0
                , yaz: 0
                , idq: 0
            }
            , dht: {
                mul: new qlq()
                , fzt: new qlq()
                , ngo: new qlq()
            }
        }
        , eux: {
            yhm: new qlq(0, 0, 800, 600)
            , mul: new qlq(100, 75, 600, 450)
            , edk: new qlq()
            , fzt: new qlq(100, 295, 600, 24)
            , hbs: new qlq(160, 325, 480, 3)
            , ahr: new qlq(100, 265, 600, 115)
            , fontSize: 21
            , ywd: 26
            , ike: 0
            , guo: 12
            , hpu: 8
            , idh: 3
            , ehi: 10
            , oxx: {
                yhm: new qlq(400, 484, 0, 3)
                , x: 38
                , yaz: 17
                , idq: 23
            }
            , dht: {
                mul: new qlq(50, 0, 700, 450)
                , fzt: new qlq(100, 460, 600, 60)
                , ngo: new qlq(200, 540, 400, 40)
            }
        }
        , jcq: {
            yhm: new qlq(0, 0, 800, 600)
            , mul: new qlq(0, 0, 800, 600)
            , edk: new qlq()
            , fzt: new qlq(50, 420, 700, 21)
            , hbs: new qlq()
            , ahr: new qlq(50, 410, 700, 80)
            , fontSize: 18
            , ywd: 24
            , ike: 0
            , guo: 12
            , hpu: 7
            , idh: 0
            , ehi: 0
            , oxx: {
                yhm: new qlq(260, 119, 280, 280)
                , x: 0
                , yaz: 0
                , idq: 0
            }
            , dht: {
                mul: new qlq(50, 0, 700, 450)
                , fzt: new qlq(100, 460, 600, 60)
                , ngo: new qlq(200, 540, 400, 40)
            }
        }
    };
    this.top = {
        yhm: new qlq(0, 20, 800, 520)
    };
    this.cmy = {
        yhm: new qlq(0, 0, 800, 20)
        , fontSize: 12
        , lrh: 19
        , yqs: 15
        , bcr: 120
        , guo: 2
        , hpu: 2
        , rne: 2
        , ilq: 60
    };
    this.wtg = {
        yhm: new qlq(0, 20, 800, 70)
        , fontSize: 10
        , uip: 10
        , ovu: 20
        , scu: 40
        , zqj: 4
        , guo: 10
        , hpu: 5
        , ike: 10
        , zoc: {
            fontSize: 17
            , ike: 2
        }
    };
    this.hgr = {
        yhm: new qlq(0, 550, 800, 615)
        , kju: new qlq()
        , zoc: {
            qim: 26
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , edp: 10
            , wzy: 10
            , zqj: 2
        }
        , vuf: new qlq(0, 20, 800, 40)
        , sst: new qlq(0, 100, 800, 40)
        , plq: new qlq(0, 140, 800, 40)
        , iht: new qlq(0, 180, 800, 40)
        , ttc: new qlq(225, 275, 350, 100)
        , wby: new qlq(200, 480, 400, 40)
        , pch: {
            aom: new qlq(340, 540, 120, 68)
        }
        , dyb: {
            aom: new qlq(250, 540, 120, 68)
            , biq: new qlq(430, 540, 120, 68)
        }
        , ddh: 36
        , fontSize: 30
        , sxy: 22
        , hpu: 3
        , guo: 5
        , zqj: 2
        , duf: 3
        , mjt: 10
    , };
    this.ios = {
        yhm: new qlq(-10, 545, 310, 50)
        , vuf: new qlq(10, 4, 240, 24)
        , fzt: new qlq(10, 28, 240, 18)
        , nnt: new qlq(260, 10, 40, 30)
        , sca: new qlq(7, 2, 26, 26)
        , jbh: 16
        , qim: 12
        , kmq: 18
    };
    this.xmj = {
        yhm: new qlq(150, 690, 500, 280)
        , jbh: 26
        , fontSize: 20
        , bwc: new qlq(465, 5, 30, 30)
        , vuf: new qlq(30, 5, 440, 40)
        , wby: new qlq(20, 40, 460, 160)
        , dsd: new qlq(20, 230, 460, 40)
        , zoc: {
            fontSize: 20
        }
    };
    this.gch = {
        yhm: new qlq(0, 585, 560, 430)
        , zqj: 2
        , mpk: 0
        , fhf: 5
        , vzj: 10
        , jbh: 26
        , aib: 20
        , vuf: new qlq(30, 15, 500, 30)
        , gid: new qlq(20, 50, 520, 60)
        , agn: new qlq(40, 60, 220, 40)
        , rzh: new qlq(328, 60, 30, 40)
        , bjj: new qlq(360, 60, 120, 40)
        , ste: new qlq(482, 60, 30, 40)
        , nsq: new qlq(20, 120, 520, 200)
        , wnb: new qlq(40, 120, 480, 40)
        , bih: new qlq(30, 160, 280, 40)
        , rqm: new qlq(328, 160, 30, 40)
        , aof: new qlq(360, 160, 120, 40)
        , sgh: new qlq(482, 160, 30, 40)
        , cme: new qlq(30, 215, 280, 40)
        , yjj: new qlq(328, 215, 30, 40)
        , udt: new qlq(360, 215, 120, 40)
        , nlr: new qlq(482, 215, 30, 40)
        , upp: new qlq(30, 270, 280, 40)
        , isk: new qlq(328, 270, 30, 40)
        , ncq: new qlq(360, 270, 120, 40)
        , dyp: new qlq(482, 270, 30, 40)
        , edk: new qlq(30, 330, 500, 30)
        , jqf: new qlq(210, 370, 140, 50)
        , ply: new qlq()
        , zen: {
            fzt: new qlq(40, 0, 240, 40)
            , ihc: new qlq(7, 12, 16, 16)
            , fontSize: 20
            , edp: 0
            , zqj: 2
        }
        , sod: {
            edp: 3
            , guo: -5
            , hpu: -1
            , wzy: 6
            , fontSize: 20
            , zqj: 0
        }
        , val: {
            edp: 3
            , guo: 5
            , hpu: 0
            , wzy: 6
            , fontSize: 20
            , zqj: 0
        }
        , xzu: {
            edp: 6
            , guo: 0
            , hpu: 0
            , wzy: 6
            , fontSize: 26
            , zqj: 2
        }
        , display: {
            jbh: 16
            , qim: 24
            , boy: 0
            , kxg: 0
            , zqj: 2
            , yyh: 3
            , fkj: 3
            , dtx: 3
            , veu: 3
        }
    };
    this.yvn = {
        yhm: [new qlq(2, 550, 130, 46), new qlq(668, 550, 130, 46)]
        , display: {
            nkf: new qlq(6, 16, 118, 23)
            , jbh: 14
            , lha: 20
            , boy: -11
            , ukh: 10
            , ike: 8
            , zqj: 3
            , cxh: 0
            , jgm: 4
        }
        , bhr: {
            yhm: new qlq(50, 660, 700, 300)
            , nkf: new qlq()
            , jbh: 66
            , lha: 150
            , boy: -90
            , ukh: 60
            , ike: 10
            , zqj: 0
            , cxh: 0
            , jgm: 0
        }
        , fcm: {
            yhm: new qlq(38, 610, 724, 369)
            , bwj: new qlq(100, 53, 525, 50)
            , nkf: new qlq(186, 153, 332, 94)
            , apn: 360
            , glk: 30
            , eme: {
                _0: new qlq(2, 0, 90, 94)
                , _1: new qlq(98, 0, 90, 94)
                , _2: new qlq(194, 0, 90, 94)
                , _3: new qlq(290, 0, 90, 94)
                , _4: new qlq(386, 0, 90, 94)
                , _5: new qlq(482, 0, 90, 94)
                , _6: new qlq(578, 0, 90, 94)
                , _7: new qlq(674, 0, 90, 94)
                , _8: new qlq(770, 0, 90, 94)
                , _9: new qlq(866, 0, 90, 94)
                , _cm: new qlq(962, 0, 28, 94)
                , _dt: new qlq(999, 0, 28, 94)
                , _sp: new qlq(1036, 0, 28, 94)
            }
        }
    }
}
xpc.prototype = new zvg;

function esr() {
    this.wab = true;
    this.canvas = {
        yhm: new qlq(0, 0, 810, 625)
    };
    this.aqx = {
        yhm: new qlq()
        , vnd: 0
    };
    this.iyt = {
        yhm: new qlq(5, 20, 800, 600)
        , zqj: 20
    };
    this.err = {
        kju: new qlq(5, 40, 440, 36)
        , hib: new qlq(5, 2, 140, 30)
        , vto: new qlq(150, 2, 140, 30)
        , yro: new qlq(295, 2, 140, 30)
        , zoc: {
            fontSize: 14
            , textIndent: 32
        }
    };
    this.pmz = {
        iyt: {
            yhm: new qlq(0, 0, 500, 360)
            , mul: new qlq(0, 0, 500, 360)
            , edk: new qlq(5, 325, 490, 30)
            , fzt: new qlq(5, 329, 490, 14)
            , hbs: new qlq(50, 345, 400, 6)
            , ahr: new qlq(5, 285, 490, 70)
            , fontSize: 14
            , ywd: 18
            , ike: 5
            , guo: 12
            , hpu: 5
            , idh: 2
            , ehi: 0
            , oxx: {
                yhm: new qlq()
                , x: 0
                , yaz: 0
                , idq: 0
            }
            , dht: {
                mul: new qlq()
                , fzt: new qlq()
                , ngo: new qlq()
            }
        }
        , eux: {
            yhm: new qlq(0, 0, 800, 600)
            , mul: new qlq(140, 105, 520, 390)
            , edk: new qlq()
            , fzt: new qlq(140, 295, 520, 21)
            , hbs: new qlq(192, 320, 416, 3)
            , ahr: new qlq(140, 275, 520, 95)
            , fontSize: 18
            , ywd: 24
            , ike: 0
            , guo: 12
            , hpu: 7
            , idh: 3
            , ehi: 9
            , oxx: {
                yhm: new qlq(400, 459, 0, 3)
                , x: 33
                , yaz: 15
                , idq: 20
            }
            , dht: {
                mul: new qlq(50, 0, 700, 450)
                , fzt: new qlq(100, 460, 600, 60)
                , ngo: new qlq(200, 540, 400, 40)
            }
        }
        , jcq: {
            yhm: new qlq(0, 0, 800, 600)
            , mul: new qlq(0, 0, 800, 600)
            , edk: new qlq()
            , fzt: new qlq(50, 420, 700, 21)
            , hbs: new qlq()
            , ahr: new qlq(50, 410, 700, 80)
            , fontSize: 18
            , ywd: 24
            , ike: 0
            , guo: 12
            , hpu: 7
            , idh: 0
            , ehi: 0
            , oxx: {
                yhm: new qlq(260, 119, 280, 280)
                , x: 0
                , yaz: 0
                , idq: 0
            }
            , dht: {
                mul: new qlq(50, 0, 700, 450)
                , fzt: new qlq(100, 460, 600, 60)
                , ngo: new qlq(200, 540, 400, 40)
            }
        }
    };
    this.cmy = {
        yhm: new qlq(5, 0, 800, 20)
        , fontSize: 12
        , lrh: 19
        , yqs: 15
        , bcr: 120
        , guo: 2
        , hpu: 2
        , rne: 2
        , ilq: 40
    };
    this.wtg = {
        yhm: new qlq(5, 20, 800, 70)
        , fontSize: 10
        , uip: 10
        , ovu: 20
        , scu: 40
        , zqj: 4
        , guo: 10
        , hpu: 5
        , ike: 10
        , zoc: {
            fontSize: 17
            , ike: 2
        }
    };
    this.hgr = {
        yhm: new qlq(5, 20, 800, 600)
        , kju: new qlq()
        , zoc: {
            qim: 20
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , edp: 8
            , wzy: 8
            , zqj: 2
        }
        , vuf: new qlq(0, 20, 800, 40)
        , sst: new qlq(0, 100, 800, 40)
        , plq: new qlq(0, 140, 800, 40)
        , iht: new qlq(0, 180, 800, 40)
        , ttc: new qlq(225, 275, 350, 100)
        , wby: new qlq(200, 480, 400, 40)
        , pch: {
            aom: new qlq(340, 540, 120, 55)
        }
        , dyb: {
            aom: new qlq(250, 540, 120, 55)
            , biq: new qlq(430, 540, 120, 55)
        }
        , ddh: 36
        , fontSize: 30
        , sxy: 22
        , hpu: 3
        , guo: 5
        , zqj: 2
        , duf: 3
        , mjt: 10
    };
    this.ios = {
        yhm: new qlq(-10, 25, 310, 50)
        , vuf: new qlq(10, 4, 240, 24)
        , fzt: new qlq(10, 28, 240, 18)
        , nnt: new qlq(260, 10, 40, 30)
        , sca: new qlq(7, 2, 26, 26)
        , jbh: 16
        , qim: 12
        , kmq: 18
    };
    this.xmj = {
        yhm: new qlq(155, 160, 500, 280)
        , jbh: 26
        , fontSize: 20
        , bwc: new qlq(465, 5, 30, 30)
        , vuf: new qlq(30, 5, 440, 40)
        , wby: new qlq(20, 40, 460, 160)
        , dsd: new qlq(20, 230, 460, 40)
        , zoc: {
            fontSize: 20
        }
    };
    this.gch = {
        yhm: new qlq(5, 55, 560, 430)
        , zqj: 2
        , mpk: 0
        , fhf: 5
        , vzj: 10
        , jbh: 26
        , aib: 20
        , vuf: new qlq(30, 15, 500, 30)
        , gid: new qlq(20, 50, 520, 60)
        , agn: new qlq(40, 60, 220, 40)
        , rzh: new qlq(328, 60, 30, 40)
        , bjj: new qlq(360, 60, 120, 40)
        , ste: new qlq(482, 60, 30, 40)
        , nsq: new qlq(20, 120, 520, 200)
        , wnb: new qlq(40, 120, 480, 40)
        , bih: new qlq(30, 160, 280, 40)
        , rqm: new qlq(328, 160, 30, 40)
        , aof: new qlq(360, 160, 120, 40)
        , sgh: new qlq(482, 160, 30, 40)
        , cme: new qlq(30, 215, 280, 40)
        , yjj: new qlq(328, 215, 30, 40)
        , udt: new qlq(360, 215, 120, 40)
        , nlr: new qlq(482, 215, 30, 40)
        , upp: new qlq(30, 270, 280, 40)
        , isk: new qlq(328, 270, 30, 40)
        , ncq: new qlq(360, 270, 120, 40)
        , dyp: new qlq(482, 270, 30, 40)
        , edk: new qlq(30, 330, 500, 30)
        , jqf: new qlq(210, 370, 140, 50)
        , ply: new qlq()
        , zen: {
            fzt: new qlq(40, 0, 240, 40)
            , ihc: new qlq(7, 12, 16, 16)
            , fontSize: 20
            , edp: 0
            , zqj: 2
        }
        , sod: {
            edp: 3
            , guo: -5
            , hpu: -1
            , wzy: 6
            , fontSize: 20
            , zqj: 0
        }
        , val: {
            edp: 3
            , guo: 5
            , hpu: 0
            , wzy: 6
            , fontSize: 20
            , zqj: 0
        }
        , xzu: {
            edp: 6
            , guo: 0
            , hpu: 0
            , wzy: 6
            , fontSize: 26
            , zqj: 2
        }
        , display: {
            jbh: 16
            , qim: 24
            , boy: 0
            , kxg: 0
            , zqj: 2
            , yyh: 3
            , fkj: 3
            , dtx: 3
            , veu: 3
        }
    };
    this.yvn = {
        yhm: [new qlq(7, 20, 130, 46), new qlq(673, 20, 130, 46)]
        , display: {
            nkf: new qlq(6, 16, 118, 22)
            , jbh: 14
            , lha: 20
            , boy: -11
            , ukh: 10
            , zqj: 3
            , ike: 8
            , cxh: 0
            , jgm: 4
        }
        , bhr: {
            yhm: new qlq(55, 130, 700, 300)
            , nkf: new qlq()
            , jbh: 66
            , lha: 150
            , boy: -90
            , ukh: 60
            , ike: 10
            , zqj: 0
            , cxh: 0
            , jgm: 0
        }
        , fcm: {
            yhm: new qlq(43, 80, 724, 369)
            , bwj: new qlq(100, 53, 525, 50)
            , nkf: new qlq(186, 153, 332, 94)
            , apn: 340
            , glk: 30
            , eme: {
                _0: new qlq(2, 0, 90, 94)
                , _1: new qlq(98, 0, 90, 94)
                , _2: new qlq(194, 0, 90, 94)
                , _3: new qlq(290, 0, 90, 94)
                , _4: new qlq(386, 0, 90, 94)
                , _5: new qlq(482, 0, 90, 94)
                , _6: new qlq(578, 0, 90, 94)
                , _7: new qlq(674, 0, 90, 94)
                , _8: new qlq(770, 0, 90, 94)
                , _9: new qlq(866, 0, 90, 94)
                , _cm: new qlq(962, 0, 28, 94)
                , _dt: new qlq(999, 0, 28, 94)
                , _sp: new qlq(1036, 0, 28, 94)
            }
        }
    }
}
esr.prototype = new zvg;

function hgj() {
    this.mxy = true
}
hgj.prototype = new esr;

function yaw() {
    this.jyr = false;
    this.inc = true;
    this.osy = true;
    this.canvas = {
        yhm: new qlq(0, 0, 960, 630)
    };
    this.aqx = {
        yhm: new qlq()
        , vnd: 0
        , crs: 0
    };
    this.iyt = {
        yhm: new qlq(0, 30, 800, 600)
        , zqj: 0
    };
    this.err = {
        kju: new qlq(0, 25, 500, 34)
        , hib: new qlq(5, 2, 160, 30)
        , vto: new qlq(170, 2, 160, 30)
        , yro: new qlq(335, 2, 160, 30)
        , zoc: {
            fontSize: 16
            , textIndent: 32
        }
    };
    this.pmz = {
        iyt: {
            yhm: new qlq(0, 0, 640, 460)
            , mul: new qlq(0, 0, 640, 460)
            , edk: new qlq(6, 416, 628, 38)
            , fzt: new qlq(6, 420, 628, 17)
            , hbs: new qlq(64, 442, 512, 7)
            , ahr: new qlq(6, 364, 628, 90)
            , fontSize: 18
            , ywd: 20
            , ike: 6
            , guo: 12
            , hpu: 6
            , idh: 3
            , ehi: 0
            , oxx: {
                yhm: new qlq()
                , x: 0
                , yaz: 0
                , idq: 0
            }
            , dht: {
                mul: new qlq()
                , fzt: new qlq()
                , ngo: new qlq()
            }
        }
        , eux: {
            yhm: new qlq(0, 0, 800, 600)
            , mul: new qlq(100, 75, 600, 450)
            , edk: new qlq()
            , fzt: new qlq(100, 295, 600, 24)
            , hbs: new qlq(160, 325, 480, 3)
            , ahr: new qlq(100, 265, 600, 115)
            , fontSize: 21
            , ywd: 26
            , ike: 0
            , guo: 12
            , hpu: 8
            , idh: 3
            , ehi: 10
            , oxx: {
                yhm: new qlq(400, 484, 0, 3)
                , x: 38
                , yaz: 17
                , idq: 23
            }
            , dht: {
                mul: new qlq(50, 0, 700, 450)
                , fzt: new qlq(100, 430, 600, 60)
                , ngo: new qlq(200, 510, 400, 40)
            }
        }
        , jcq: {
            yhm: new qlq(0, 0, 800, 600)
            , mul: new qlq(0, 0, 800, 600)
            , edk: new qlq()
            , fzt: new qlq(50, 420, 700, 21)
            , hbs: new qlq()
            , ahr: new qlq(50, 410, 700, 80)
            , fontSize: 18
            , ywd: 24
            , ike: 0
            , guo: 12
            , hpu: 7
            , idh: 0
            , ehi: 0
            , oxx: {
                yhm: new qlq(260, 119, 280, 280)
                , x: 0
                , yaz: 0
                , idq: 0
            }
            , dht: {
                mul: new qlq(50, 0, 700, 450)
                , fzt: new qlq(100, 460, 600, 60)
                , ngo: new qlq(200, 540, 400, 40)
            }
        }
    };
    this.cmy = {
        yhm: new qlq(0, 0, 800, 30)
        , fontSize: 16
        , lrh: 26
        , yqs: 15
        , bcr: 160
        , guo: 2
        , hpu: 2
        , rne: 2
        , ilq: 0
    };
    this.wtg = {};
    this.hgr = {
        yhm: new qlq(0, 0, 960, 630)
        , kju: new qlq(800, 0, 160, 630)
        , zoc: {
            qim: 0
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , wzy: 8
            , edp: 16
            , zqj: 4
        }
        , vuf: new qlq(0, 50, 800, 40)
        , sst: new qlq(0, 130, 800, 40)
        , plq: new qlq(0, 170, 800, 40)
        , iht: new qlq(0, 210, 800, 40)
        , ttc: new qlq(225, 305, 350, 100)
        , wby: new qlq(200, 510, 400, 40)
        , pch: {
            aom: new qlq(810, 455, 140, 100)
        , }
        , dyb: {
            aom: new qlq(810, 355, 140, 100)
            , biq: new qlq(810, 165, 140, 100)
        }
        , ddh: 36
        , fontSize: 30
        , sxy: 22
        , hpu: 3
        , guo: 5
        , zqj: 2
        , duf: 3
        , mjt: 10
    };
    this.frl = {
        yhm: new qlq(0, 30, 800, 600)
        , zqj: 0
        , edp: 0
        , xmp: 50
        , glx: 30
        , aib: 30
        , llb: new qlq(30, 180, 410, 60)
        , hja: new qlq(460, 180, 50, 60)
        , jfv: new qlq(512, 180, 210, 60)
        , cow: new qlq(724, 180, 50, 60)
        , iec: new qlq(30, 310, 410, 60)
        , nke: new qlq(460, 310, 50, 60)
        , dnu: new qlq(512, 310, 210, 60)
        , zit: new qlq(724, 310, 50, 60)
        , nnf: new qlq(30, 440, 410, 60)
        , jgp: new qlq(512, 440, 210, 60)
        , rnl: new qlq(40, 530, 720, 50)
        , agn: new qlq(30, 120, 360, 60)
        , rzh: new qlq(460, 120, 50, 60)
        , bjj: new qlq(512, 120, 210, 60)
        , ste: new qlq(724, 120, 50, 60)
        , bxj: new qlq(40, 200, 760, 70)
        , bih: new qlq(30, 280, 410, 60)
        , rqm: new qlq(460, 280, 50, 60)
        , aof: new qlq(512, 280, 210, 60)
        , sgh: new qlq(724, 280, 50, 60)
        , cme: new qlq(30, 360, 410, 60)
        , yjj: new qlq(460, 360, 50, 60)
        , udt: new qlq(512, 360, 210, 60)
        , nlr: new qlq(724, 360, 50, 60)
        , upp: new qlq(30, 440, 410, 60)
        , isk: new qlq(460, 440, 50, 60)
        , ncq: new qlq(512, 440, 210, 60)
        , dyp: new qlq(724, 440, 50, 60)
        , edk: new qlq(40, 530, 720, 50)
        , cvr: {
            fdn: new qlq(0, 0, 267, 90)
            , qzq: new qlq(267, 0, 266, 90)
            , bec: new qlq(533, 0, 267, 90)
            , iax: new qlq()
        }
        , krl: {
            fdn: new qlq(0, 0, 200, 90)
            , jsb: new qlq(200, 0, 200, 90)
            , qzq: new qlq(400, 0, 200, 90)
            , bec: new qlq(600, 0, 200, 90)
            , iax: new qlq()
        }
        , tmc: [new qlq(132, 205, 200, 160), new qlq(464, 205, 200, 160)]
        , wvq: [new qlq(50, 205, 200, 160), new qlq(300, 205, 200, 160), new qlq(550, 205, 200, 160)]
        , ujl: [new qlq(132, 130, 200, 160), new qlq(464, 130, 200, 160), new qlq(132, 360, 200, 160), new qlq(464, 360, 200, 160)]
        , piy: [new qlq(50, 130, 200, 160), new qlq(300, 130, 200, 160), new qlq(550, 130, 200, 160), new qlq(50, 360, 200, 160), new qlq(300, 360, 200, 160), new qlq(550, 360, 200, 160)]
        , sod: {
            edp: 3
            , guo: -10
            , hpu: -1
            , wzy: 6
            , fontSize: 36
            , zqj: 0
        }
        , val: {
            edp: 3
            , guo: 10
            , hpu: -1
            , wzy: 6
            , fontSize: 36
            , zqj: 0
        }
        , fmh: {
            fontSize: 36
            , guo: 0
            , hpu: 0
            , wzy: 10
            , edp: 0
            , zqj: 0
        }
        , msx: {
            fontSize: 26
            , ike: 5
            , edp: 26
            , zqj: 4
            , awp: 40
        }
        , hxv: {
            jbh: 16
            , qim: 40
            , boy: 0
            , kxg: 0
            , zqj: 2
            , ike: 3
        }
        , bmf: {
            jbh: 16
            , qim: 40
            , boy: 0
            , kxg: 0
            , zqj: 2
            , ike: 3
        }
        , zen: {
            fzt: new qlq(50, 0, 360, 60)
            , ihc: new qlq(0, 13, 30, 30)
            , fontSize: 30
            , edp: 0
            , zqj: 2
        }
    };
    this.ios = {
        yhm: new qlq(-10, 30, 310, 60)
        , vuf: new qlq(10, 6, 240, 26)
        , fzt: new qlq(10, 34, 240, 20)
        , nnt: new qlq(255, 11, 50, 38)
        , sca: new qlq(8, 2, 34, 34)
        , jbh: 16
        , qim: 12
        , kmq: 24
    };
    this.xmj = {
        yhm: new qlq(120, 150, 560, 330)
        , jbh: 26
        , fontSize: 20
        , bwc: new qlq(515, 5, 40, 40)
        , vuf: new qlq(40, 5, 480, 30)
        , wby: new qlq(20, 40, 520, 195)
        , dsd: new qlq(20, 265, 520, 54)
        , zoc: {
            fontSize: 20
        }
    };
    this.yvn = {
        yhm: [new qlq(2, 30, 130, 46), new qlq(668, 30, 130, 46)]
        , display: {
            nkf: new qlq(6, 16, 118, 23)
            , jbh: 14
            , lha: 20
            , boy: -11
            , ukh: 10
            , ike: 8
            , zqj: 3
            , cxh: 0
            , jgm: 4
        }
        , bhr: {
            yhm: new qlq(50, 140, 700, 300)
            , nkf: new qlq()
            , jbh: 66
            , lha: 150
            , boy: -90
            , ukh: 60
            , ike: 10
            , zqj: 0
            , cxh: 0
            , jgm: 0
        }
        , fcm: {
            yhm: new qlq(38, 90, 724, 369)
            , bwj: new qlq(100, 53, 525, 50)
            , nkf: new qlq(186, 153, 332, 94)
            , apn: 340
            , glk: 30
            , eme: {
                _0: new qlq(2, 0, 90, 94)
                , _1: new qlq(98, 0, 90, 94)
                , _2: new qlq(194, 0, 90, 94)
                , _3: new qlq(290, 0, 90, 94)
                , _4: new qlq(386, 0, 90, 94)
                , _5: new qlq(482, 0, 90, 94)
                , _6: new qlq(578, 0, 90, 94)
                , _7: new qlq(674, 0, 90, 94)
                , _8: new qlq(770, 0, 90, 94)
                , _9: new qlq(866, 0, 90, 94)
                , _cm: new qlq(962, 0, 28, 94)
                , _dt: new qlq(999, 0, 28, 94)
                , _sp: new qlq(1036, 0, 28, 94)
            }
        }
    }
}
yaw.prototype = new zvg;

function tme() {
    this.jyr = false;
    this.inc = true;
    this.osy = true;
    this.canvas = {
        yhm: new qlq(0, 0, 960, 630)
    };
    this.aqx = {
        yhm: new qlq()
        , vnd: 0
        , crs: 0
    };
    this.iyt = {
        yhm: new qlq(160, 30, 800, 600)
        , zqj: 0
    };
    this.err = {
        kju: new qlq(460, 25, 500, 34)
        , hib: new qlq(5, 2, 160, 30)
        , vto: new qlq(170, 2, 160, 30)
        , yro: new qlq(335, 2, 160, 30)
        , zoc: {
            fontSize: 16
            , textIndent: 32
        }
    };
    this.pmz = {
        iyt: {
            yhm: new qlq(0, 0, 640, 460)
            , mul: new qlq(0, 0, 640, 460)
            , edk: new qlq(6, 416, 628, 38)
            , fzt: new qlq(6, 420, 628, 17)
            , hbs: new qlq(64, 442, 512, 7)
            , ahr: new qlq(6, 364, 628, 90)
            , fontSize: 18
            , ywd: 20
            , ike: 6
            , guo: 12
            , hpu: 6
            , idh: 3
            , ehi: 0
            , oxx: {
                yhm: new qlq()
                , x: 0
                , yaz: 0
                , idq: 0
            }
            , dht: {
                mul: new qlq()
                , fzt: new qlq()
                , ngo: new qlq()
            }
        }
        , eux: {
            yhm: new qlq(0, 0, 800, 600)
            , mul: new qlq(100, 75, 600, 450)
            , edk: new qlq()
            , fzt: new qlq(100, 295, 600, 24)
            , hbs: new qlq(160, 325, 480, 3)
            , ahr: new qlq(100, 265, 600, 115)
            , fontSize: 21
            , ywd: 26
            , ike: 0
            , guo: 12
            , hpu: 8
            , idh: 3
            , ehi: 10
            , oxx: {
                yhm: new qlq(400, 484, 0, 3)
                , x: 38
                , yaz: 17
                , idq: 23
            }
            , dht: {
                mul: new qlq(50, 0, 700, 450)
                , fzt: new qlq(100, 430, 600, 60)
                , ngo: new qlq(200, 510, 400, 40)
            }
        }
        , jcq: {
            yhm: new qlq(0, 0, 800, 600)
            , mul: new qlq(0, 0, 800, 600)
            , edk: new qlq()
            , fzt: new qlq(50, 420, 700, 21)
            , hbs: new qlq()
            , ahr: new qlq(50, 410, 700, 80)
            , fontSize: 18
            , ywd: 24
            , ike: 0
            , guo: 12
            , hpu: 7
            , idh: 0
            , ehi: 0
            , oxx: {
                yhm: new qlq(260, 119, 280, 280)
                , x: 0
                , yaz: 0
                , idq: 0
            }
            , dht: {
                mul: new qlq(50, 0, 700, 450)
                , fzt: new qlq(100, 460, 600, 60)
                , ngo: new qlq(200, 540, 400, 40)
            }
        }
    };
    this.cmy = {
        yhm: new qlq(160, 0, 800, 30)
        , fontSize: 16
        , lrh: 26
        , yqs: 15
        , bcr: 160
        , guo: 2
        , hpu: 2
        , rne: 2
        , ilq: 0
    };
    this.wtg = {};
    this.hgr = {
        yhm: new qlq(0, 0, 960, 630)
        , kju: new qlq(0, 0, 160, 630)
        , zoc: {
            qim: 0
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , wzy: 8
            , edp: 16
            , zqj: 4
        }
        , vuf: new qlq(160, 50, 800, 40)
        , sst: new qlq(160, 130, 800, 40)
        , plq: new qlq(160, 170, 800, 40)
        , iht: new qlq(160, 210, 800, 40)
        , ttc: new qlq(385, 305, 350, 100)
        , wby: new qlq(360, 510, 400, 40)
        , pch: {
            aom: new qlq(10, 455, 140, 100)
        , }
        , dyb: {
            aom: new qlq(10, 355, 140, 100)
            , biq: new qlq(10, 165, 140, 100)
        }
        , ddh: 36
        , fontSize: 30
        , sxy: 22
        , hpu: 3
        , guo: 5
        , zqj: 2
        , duf: 3
        , mjt: 10
    };
    this.frl = {
        yhm: new qlq(160, 30, 800, 600)
        , zqj: 0
        , edp: 0
        , xmp: 50
        , glx: 30
        , aib: 30
        , llb: new qlq(30, 180, 410, 60)
        , hja: new qlq(460, 180, 50, 60)
        , jfv: new qlq(512, 180, 210, 60)
        , cow: new qlq(724, 180, 50, 60)
        , iec: new qlq(30, 310, 410, 60)
        , nke: new qlq(460, 310, 50, 60)
        , dnu: new qlq(512, 310, 210, 60)
        , zit: new qlq(724, 310, 50, 60)
        , nnf: new qlq(30, 440, 410, 60)
        , jgp: new qlq(512, 440, 210, 60)
        , rnl: new qlq(40, 530, 720, 50)
        , agn: new qlq(30, 120, 360, 60)
        , rzh: new qlq(460, 120, 50, 60)
        , bjj: new qlq(512, 120, 210, 60)
        , ste: new qlq(724, 120, 50, 60)
        , bxj: new qlq(40, 200, 760, 70)
        , bih: new qlq(30, 280, 410, 60)
        , rqm: new qlq(460, 280, 50, 60)
        , aof: new qlq(512, 280, 210, 60)
        , sgh: new qlq(724, 280, 50, 60)
        , cme: new qlq(30, 360, 410, 60)
        , yjj: new qlq(460, 360, 50, 60)
        , udt: new qlq(512, 360, 210, 60)
        , nlr: new qlq(724, 360, 50, 60)
        , upp: new qlq(30, 440, 410, 60)
        , isk: new qlq(460, 440, 50, 60)
        , ncq: new qlq(512, 440, 210, 60)
        , dyp: new qlq(724, 440, 50, 60)
        , edk: new qlq(40, 530, 720, 50)
        , cvr: {
            fdn: new qlq(0, 0, 267, 90)
            , qzq: new qlq(267, 0, 266, 90)
            , bec: new qlq(533, 0, 267, 90)
            , iax: new qlq()
        }
        , krl: {
            fdn: new qlq(0, 0, 200, 90)
            , jsb: new qlq(200, 0, 200, 90)
            , qzq: new qlq(400, 0, 200, 90)
            , bec: new qlq(600, 0, 200, 90)
            , iax: new qlq()
        }
        , tmc: [new qlq(132, 205, 200, 160), new qlq(464, 205, 200, 160)]
        , wvq: [new qlq(50, 205, 200, 160), new qlq(300, 205, 200, 160), new qlq(550, 205, 200, 160)]
        , ujl: [new qlq(132, 130, 200, 160), new qlq(464, 130, 200, 160), new qlq(132, 360, 200, 160), new qlq(464, 360, 200, 160)]
        , piy: [new qlq(50, 130, 200, 160), new qlq(300, 130, 200, 160), new qlq(550, 130, 200, 160), new qlq(50, 360, 200, 160), new qlq(300, 360, 200, 160), new qlq(550, 360, 200, 160)]
        , sod: {
            edp: 3
            , guo: -10
            , hpu: -1
            , wzy: 6
            , fontSize: 36
            , zqj: 0
        }
        , val: {
            edp: 3
            , guo: 10
            , hpu: -1
            , wzy: 6
            , fontSize: 36
            , zqj: 0
        }
        , fmh: {
            fontSize: 36
            , guo: 0
            , hpu: 0
            , wzy: 10
            , edp: 0
            , zqj: 0
        }
        , msx: {
            fontSize: 26
            , ike: 5
            , edp: 26
            , zqj: 4
            , awp: 40
        }
        , hxv: {
            jbh: 16
            , qim: 40
            , boy: 0
            , kxg: 0
            , zqj: 2
            , ike: 3
        }
        , bmf: {
            jbh: 16
            , qim: 40
            , boy: 0
            , kxg: 0
            , zqj: 2
            , ike: 3
        }
        , zen: {
            fzt: new qlq(50, 0, 360, 60)
            , ihc: new qlq(0, 13, 30, 30)
            , fontSize: 30
            , edp: 0
            , zqj: 2
        }
    };
    this.ios = {
        yhm: new qlq(660, 30, 310, 60)
        , vuf: new qlq(60, 6, 240, 26)
        , fzt: new qlq(60, 34, 240, 20)
        , nnt: new qlq(5, 11, 50, 38)
        , sca: new qlq(8, 2, 34, 34)
        , jbh: 16
        , qim: 12
        , kmq: 24
    };
    this.xmj = {
        yhm: new qlq(280, 150, 560, 330)
        , jbh: 26
        , fontSize: 20
        , bwc: new qlq(515, 5, 40, 40)
        , vuf: new qlq(40, 5, 480, 30)
        , wby: new qlq(20, 40, 520, 195)
        , dsd: new qlq(20, 265, 520, 54)
        , zoc: {
            fontSize: 20
        }
    };
    this.yvn = {
        yhm: [new qlq(162, 30, 130, 46), new qlq(828, 30, 130, 46)]
        , display: {
            nkf: new qlq(6, 16, 118, 23)
            , jbh: 14
            , lha: 20
            , boy: -11
            , ukh: 10
            , ike: 8
            , zqj: 3
            , cxh: 0
            , jgm: 4
        }
        , bhr: {
            yhm: new qlq(210, 140, 700, 300)
            , nkf: new qlq()
            , jbh: 66
            , lha: 150
            , boy: -90
            , ukh: 60
            , ike: 10
            , zqj: 0
            , cxh: 0
            , jgm: 0
        }
        , fcm: {
            yhm: new qlq(198, 90, 724, 369)
            , bwj: new qlq(100, 53, 525, 50)
            , nkf: new qlq(186, 153, 332, 94)
            , apn: 340
            , glk: 30
            , eme: {
                _0: new qlq(2, 0, 90, 94)
                , _1: new qlq(98, 0, 90, 94)
                , _2: new qlq(194, 0, 90, 94)
                , _3: new qlq(290, 0, 90, 94)
                , _4: new qlq(386, 0, 90, 94)
                , _5: new qlq(482, 0, 90, 94)
                , _6: new qlq(578, 0, 90, 94)
                , _7: new qlq(674, 0, 90, 94)
                , _8: new qlq(770, 0, 90, 94)
                , _9: new qlq(866, 0, 90, 94)
                , _cm: new qlq(962, 0, 28, 94)
                , _dt: new qlq(999, 0, 28, 94)
                , _sp: new qlq(1036, 0, 28, 94)
            }
        }
    }
}
tme.prototype = new zvg;

function bng() {
    this.cvx = true;
    this.ais = true;
    this.ney = {
        yhm: new qlq(0, 496, 800, 124)
        , jrz: new qlq(0, 0, 800, 124)
        , xkb: new qlq()
        , vhe: {
            yhm: new qlq(187, 14, 470, 40)
            , hpu: 10
            , fontSize: 18
            , edp: 3
            , fuh: 2
            , wzy: 6
            , zqj: 2
        }
        , jle: {
            qim: 22
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , edp: 10
            , wzy: 8
            , zqj: 2
        }
        , khc: {
            qim: 16
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , edp: 8
            , wzy: 6
            , zqj: 2
        }
        , dkj: {
            qim: 16
            , lha: 16
            , guo: 0
            , edp: 8
            , wzy: 6
            , zqj: 2
            , kxg: 24
            , ukh: -24
        }
        , display: {
            boy: -12
            , kxg: 11
            , qim: 26
            , jbh: 15
            , zqj: 2
            , yyh: 3
            , fkj: 3
            , dtx: 3
            , veu: 3
        }
        , dft: new qlq(5, 10, 150, 48)
        , vfm: new qlq(689, 10, 106, 48)
        , miv: {
            ngo: new qlq(686, 68, 110, 53)
            , cic: new qlq(492, 68, 80, 53)
            , hva: new qlq(382, 68, 80, 53)
            , biq: new qlq(272, 68, 80, 53)
            , cwl: new qlq(25, 68, 110, 53)
            , fnv: new qlq()
        }
        , dcl: {
            ngo: new qlq(686, 68, 110, 53)
            , cwl: new qlq(532, 68, 80, 53)
            , cic: new qlq(432, 68, 80, 53)
            , hva: new qlq(332, 68, 80, 53)
            , biq: new qlq(232, 68, 80, 53)
            , oen: new qlq(40, 68, 80, 53)
            , fnv: new qlq()
        }
        , thq: {
            ngo: new qlq(686, 68, 110, 53)
            , cwl: new qlq(492, 68, 80, 53)
            , cic: new qlq(382, 68, 80, 53)
            , hva: new qlq(272, 68, 80, 53)
            , oen: new qlq(40, 68, 80, 53)
            , fnv: new qlq()
        }
        , xjd: {
            ngo: new qlq(686, 68, 110, 53)
            , cic: new qlq(492, 68, 80, 53)
            , hva: new qlq(382, 68, 80, 53)
            , biq: new qlq(272, 68, 80, 53)
            , cwl: new qlq(25, 68, 110, 53)
            , fnv: new qlq()
        }
        , nuz: 15
    };
    this.cce = {
        yhm: new qlq(0, 20, 800, 600)
        , kju: new qlq(0, 540, 800, 60)
        , biq: new qlq(711, 544, 73, 53)
        , tfk: new qlq(11, 544, 73, 53)
        , vqc: new qlq(316, 544, 73, 53)
        , uea: new qlq(411, 544, 73, 53)
        , zoc: {
            qim: 16
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , wzy: 6
            , edp: 8
            , zqj: 2
        }
    };
    this.wqw = {
        yhm: new qlq(0, 20, 800, 600)
        , kju: new qlq(0, 485, 800, 115)
        , vhe: {
            yhm: new qlq(187, 490, 470, 40)
            , fontSize: 18
            , hpu: 14
            , edp: 3
            , fuh: 2
            , wzy: 6
            , zqj: 2
        }
        , zoc: {
            qim: 18
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , wzy: 8
            , edp: 10
            , zqj: 2
        }
        , display: {
            boy: -12
            , kxg: 11
            , qim: 26
            , jbh: 15
            , zqj: 2
            , yyh: 3
            , fkj: 3
            , dtx: 3
            , veu: 3
        }
        , tja: new qlq(689, 486, 106, 48)
        , ens: new qlq(5, 486, 150, 48)
    };
    this.nbk = {
        yhm: new qlq(710, 35, 90, 450)
        , vuf: new qlq(5, 5, 80, 15)
        , eaq: new qlq(50, 25, 35, 410)
        , fontSize: 15
        , axa: 20
        , zqj: 2
        , edp: 5
        , fdk: 4
        , sfc: 10
        , wxv: 5
    };
    this.rds = {
        fontSize: 18
        , zkr: 128
        , pzr: 176
        , xyy: 0
        , dxw: 20
        , hfv: true
    };
    this.axb = new qlq(20, 290, 128, 205);
    this.cvj = new qlq(176, 290, 128, 205);
    this.ndi = new qlq(333, 290, 128, 205);
    this.rze = new qlq(490, 290, 128, 205);
    this.wnf = new qlq(646, 290, 128, 205);
    this.bdh = {
        yhm: new qlq(363, 72, 408, 155)
        , fontSize: 50
        , guo: 0
        , hpu: 9
        , ike: 0
        , usf: 2
    };
    this.uud = {
        yhm: new qlq(355, 30, 424, 236)
        , fontSize: 20
        , ike: 6
    }
}
bng.prototype = new tdg;

function dhb() {
    this.mxy = true
}
dhb.prototype = new bng;

function cyj() {
    this.cvx = true;
    this.ais = true;
    this.ney = {
        yhm: new qlq(0, 1026, 800, 139)
        , jrz: new qlq(0, 0, 800, 139)
        , xkb: new qlq()
        , vhe: {
            yhm: new qlq(187, 14, 470, 40)
            , hpu: 10
            , fontSize: 18
            , edp: 3
            , fuh: 2
            , wzy: 6
            , zqj: 2
        }
        , jle: {
            qim: 28
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , edp: 12
            , wzy: 10
            , zqj: 2
        }
        , khc: {
            qim: 21
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , edp: 10
            , wzy: 8
            , zqj: 2
        }
        , dkj: {
            qim: 21
            , lha: 21
            , guo: 0
            , edp: 8
            , wzy: 6
            , zqj: 2
            , kxg: 30
            , ukh: -32
        }
        , display: {
            boy: -12
            , kxg: 11
            , qim: 26
            , jbh: 15
            , zqj: 2
            , yyh: 3
            , fkj: 3
            , dtx: 3
            , veu: 3
        }
        , dft: new qlq(5, 10, 150, 48)
        , vfm: new qlq(689, 10, 106, 48)
        , miv: {
            ngo: new qlq(675, 68, 120, 68)
            , cic: new qlq(486, 68, 100, 68)
            , hva: new qlq(371, 68, 100, 68)
            , biq: new qlq(256, 68, 100, 68)
            , cwl: new qlq(20, 68, 120, 68)
            , fnv: new qlq()
        }
        , dcl: {
            ngo: new qlq(675, 68, 110, 68)
            , cwl: new qlq(536, 68, 100, 68)
            , cic: new qlq(426, 68, 100, 68)
            , hva: new qlq(316, 68, 100, 68)
            , biq: new qlq(206, 68, 100, 68)
            , oen: new qlq(30, 68, 100, 68)
            , fnv: new qlq()
        }
        , thq: {
            ngo: new qlq(675, 68, 120, 68)
            , cwl: new qlq(486, 68, 100, 68)
            , cic: new qlq(371, 68, 100, 68)
            , hva: new qlq(256, 68, 100, 68)
            , oen: new qlq(30, 68, 100, 68)
            , fnv: new qlq()
        }
        , xjd: {
            ngo: new qlq(675, 68, 120, 68)
            , cic: new qlq(486, 68, 100, 68)
            , hva: new qlq(371, 68, 100, 68)
            , biq: new qlq(256, 68, 100, 68)
            , cwl: new qlq(20, 68, 120, 68)
            , fnv: new qlq()
        }
        , nuz: 15
    };
    this.cce = {
        yhm: new qlq(0, 550, 800, 615)
        , kju: new qlq(0, 540, 800, 75)
        , biq: new qlq(695, 544, 90, 68)
        , tfk: new qlq(11, 544, 90, 68)
        , vqc: new qlq(295, 544, 90, 68)
        , uea: new qlq(415, 544, 90, 68)
        , zoc: {
            qim: 21
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , wzy: 8
            , edp: 10
            , zqj: 2
        }
    };
    this.wqw = {
        yhm: new qlq(0, 550, 800, 615)
        , kju: new qlq(0, 485, 800, 130)
        , vhe: {
            yhm: new qlq(187, 490, 470, 40)
            , fontSize: 18
            , hpu: 14
            , edp: 3
            , fuh: 2
            , wzy: 6
            , zqj: 2
        }
        , zoc: {
            qim: 23
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , wzy: 10
            , edp: 12
            , zqj: 2
        }
        , display: {
            boy: -12
            , kxg: 11
            , qim: 26
            , jbh: 15
            , zqj: 2
            , yyh: 3
            , fkj: 3
            , dtx: 3
            , veu: 3
        }
        , tja: new qlq(689, 486, 106, 48)
        , ens: new qlq(5, 486, 150, 48)
    };
    this.nbk = {
        yhm: new qlq(710, 565, 90, 450)
        , vuf: new qlq(5, 5, 80, 15)
        , eaq: new qlq(50, 25, 35, 410)
        , fontSize: 15
        , axa: 20
        , zqj: 2
        , edp: 5
        , fdk: 4
        , sfc: 10
        , wxv: 5
    };
    this.rds = {
        fontSize: 18
        , zkr: 128
        , pzr: 176
        , xyy: 0
        , dxw: 20
        , hfv: true
    };
    this.axb = new qlq(20, 820, 128, 205);
    this.cvj = new qlq(176, 820, 128, 205);
    this.ndi = new qlq(333, 820, 128, 205);
    this.rze = new qlq(490, 820, 128, 205);
    this.wnf = new qlq(646, 820, 128, 205);
    this.bdh = {
        yhm: new qlq(363, 602, 408, 155)
        , fontSize: 50
        , guo: 0
        , hpu: 9
        , ike: 0
        , usf: 2
    };
    this.uud = {
        yhm: new qlq(355, 560, 424, 236)
        , fontSize: 20
        , ike: 6
    };
    this.top = {
        yhm: new qlq(0, 20, 800, 520)
    }
}
cyj.prototype = new xpc;

function cfc() {
    this.cvx = true;
    this.ais = true;
    this.ney = {
        yhm: new qlq(5, 496, 800, 124)
        , jrz: new qlq(0, 0, 800, 124)
        , xkb: new qlq()
        , vhe: {
            yhm: new qlq(187, 14, 470, 40)
            , hpu: 10
            , fontSize: 18
            , edp: 3
            , fuh: 2
            , wzy: 6
            , zqj: 2
        }
        , jle: {
            qim: 22
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , edp: 10
            , wzy: 8
            , zqj: 2
        }
        , khc: {
            qim: 16
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , edp: 8
            , wzy: 6
            , zqj: 2
        }
        , dkj: {
            qim: 16
            , lha: 16
            , guo: 0
            , edp: 8
            , wzy: 6
            , zqj: 2
            , kxg: 24
            , ukh: -24
        }
        , display: {
            boy: -12
            , kxg: 11
            , qim: 26
            , jbh: 15
            , zqj: 2
            , yyh: 3
            , fkj: 3
            , dtx: 3
            , veu: 3
        }
        , dft: new qlq(5, 10, 150, 48)
        , vfm: new qlq(689, 10, 106, 48)
        , miv: {
            ngo: new qlq(686, 68, 110, 53)
            , cic: new qlq(492, 68, 80, 53)
            , hva: new qlq(382, 68, 80, 53)
            , biq: new qlq(272, 68, 80, 53)
            , cwl: new qlq(25, 68, 110, 53)
            , fnv: new qlq()
        }
        , dcl: {
            ngo: new qlq(686, 68, 110, 53)
            , cwl: new qlq(532, 68, 80, 53)
            , cic: new qlq(432, 68, 80, 53)
            , hva: new qlq(332, 68, 80, 53)
            , biq: new qlq(232, 68, 80, 53)
            , oen: new qlq(40, 68, 80, 53)
            , fnv: new qlq()
        }
        , thq: {
            ngo: new qlq(686, 68, 110, 53)
            , cwl: new qlq(492, 68, 80, 53)
            , cic: new qlq(382, 68, 80, 53)
            , hva: new qlq(272, 68, 80, 53)
            , oen: new qlq(40, 68, 80, 53)
            , fnv: new qlq()
        }
        , xjd: {
            ngo: new qlq(686, 68, 110, 53)
            , cic: new qlq(492, 68, 80, 53)
            , hva: new qlq(382, 68, 80, 53)
            , biq: new qlq(272, 68, 80, 53)
            , cwl: new qlq(25, 68, 110, 53)
            , fnv: new qlq()
        }
        , nuz: 15
    };
    this.cce = {
        yhm: new qlq(5, 20, 800, 600)
        , kju: new qlq(0, 540, 800, 60)
        , biq: new qlq(711, 544, 73, 53)
        , tfk: new qlq(11, 544, 73, 53)
        , vqc: new qlq(316, 544, 73, 53)
        , uea: new qlq(411, 544, 73, 53)
        , zoc: {
            qim: 16
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , wzy: 6
            , edp: 8
            , zqj: 2
        }
    };
    this.wqw = {
        yhm: new qlq(5, 20, 800, 600)
        , kju: new qlq(0, 485, 800, 115)
        , vhe: {
            yhm: new qlq(187, 490, 470, 40)
            , fontSize: 18
            , hpu: 14
            , edp: 3
            , fuh: 2
            , wzy: 6
            , zqj: 2
        }
        , zoc: {
            qim: 18
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , wzy: 8
            , edp: 10
            , zqj: 2
        }
        , display: {
            boy: -12
            , kxg: 11
            , qim: 26
            , jbh: 15
            , zqj: 2
            , yyh: 3
            , fkj: 3
            , dtx: 3
            , veu: 3
        }
        , tja: new qlq(689, 486, 106, 48)
        , ens: new qlq(5, 486, 150, 48)
    };
    this.nbk = {
        yhm: new qlq(715, 35, 90, 450)
        , vuf: new qlq(5, 5, 80, 15)
        , eaq: new qlq(50, 25, 35, 410)
        , fontSize: 15
        , axa: 20
        , zqj: 2
        , edp: 5
        , fdk: 4
        , sfc: 10
        , wxv: 5
    };
    this.rds = {
        fontSize: 18
        , zkr: 128
        , pzr: 176
        , xyy: 0
        , dxw: 20
        , hfv: true
    };
    this.axb = new qlq(25, 290, 128, 205);
    this.cvj = new qlq(181, 290, 128, 205);
    this.ndi = new qlq(338, 290, 128, 205);
    this.rze = new qlq(495, 290, 128, 205);
    this.wnf = new qlq(651, 290, 128, 205);
    this.bdh = {
        yhm: new qlq(368, 72, 408, 155)
        , fontSize: 50
        , guo: 0
        , hpu: 9
        , ike: 0
        , usf: 2
    };
    this.uud = {
        yhm: new qlq(360, 30, 424, 236)
        , fontSize: 20
        , ike: 6
    }
}
cfc.prototype = new esr;

function qua() {
    this.mxy = true
}
qua.prototype = new cfc;

function fth() {
    this.cvx = false;
    this.ais = true;
    this.ney = {
        yhm: new qlq(0, 0, 960, 630)
        , jrz: new qlq(0, 506, 800, 124)
        , xkb: new qlq(800, 0, 160, 630)
        , vhe: {
            yhm: new qlq(225, 525, 390, 70)
            , hpu: 14
            , fontSize: 24
            , edp: 3
            , fuh: 2
            , wzy: 6
            , zqj: 2
        }
        , jle: {
            qim: 0
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , edp: 24
            , wzy: 8
            , zqj: 6
        }
        , khc: {
            qim: 0
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , edp: 16
            , wzy: 8
            , zqj: 4
        }
        , dkj: {
            qim: 0
            , lha: 24
            , guo: 0
            , edp: 24
            , wzy: 8
            , zqj: 6
            , kxg: 0
            , ukh: -130
        }
        , display: {
            boy: -20
            , kxg: 16
            , qim: 32
            , jbh: 18
            , zqj: 3
            , yyh: 3
            , fkj: 3
            , dtx: 3
            , veu: 3
        }
        , dft: new qlq(5, 525, 180, 70)
        , vfm: new qlq(655, 525, 140, 70)
        , miv: {
            ngo: new qlq(810, 215, 140, 200)
            , cic: new qlq()
            , hva: new qlq()
            , biq: new qlq(810, 455, 140, 100)
            , cwl: new qlq()
            , fnv: new qlq(810, 75, 140, 100)
        }
        , dcl: {
            ngo: new qlq(810, 215, 140, 200)
            , cwl: new qlq()
            , cic: new qlq()
            , hva: new qlq()
            , biq: new qlq(810, 455, 140, 100)
            , oen: new qlq()
            , fnv: new qlq(810, 75, 140, 100)
        }
        , thq: {
            ngo: new qlq(810, 215, 140, 200)
            , cwl: new qlq()
            , cic: new qlq()
            , hva: new qlq()
            , oen: new qlq()
            , fnv: new qlq(810, 75, 140, 100)
        }
        , xjd: {
            ngo: new qlq(810, 215, 140, 200)
            , cic: new qlq()
            , hva: new qlq()
            , biq: new qlq(810, 455, 140, 100)
            , cwl: new qlq()
            , fnv: new qlq(810, 75, 140, 100)
        }
        , nuz: 15
    };
    this.cce = {
        yhm: new qlq(0, 0, 960, 630)
        , kju: new qlq(800, 0, 160, 630)
        , biq: new qlq(810, 455, 140, 100)
        , tfk: new qlq()
        , vqc: new qlq(810, 75, 140, 100)
        , uea: new qlq(810, 265, 140, 100)
        , zoc: {
            qim: 0
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , wzy: 16
            , edp: 16
            , zqj: 4
        }
    };
    this.wqw = {
        yhm: new qlq(0, 0, 960, 630)
        , kju: new qlq(800, 0, 160, 630)
        , vhe: {
            yhm: new qlq(230, 525, 390, 70)
            , fontSize: 20
            , hpu: 14
            , edp: 3
            , fuh: 2
            , wzy: 6
            , zqj: 2
        }
        , zoc: {
            qim: 24
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , wzy: 8
            , edp: 16
            , zqj: 4
        }
        , display: {
            boy: -20
            , kxg: 16
            , qim: 32
            , jbh: 18
            , zqj: 3
            , yyh: 3
            , fkj: 3
            , dtx: 3
            , veu: 3
        }
        , ens: new qlq(5, 525, 180, 70)
        , tja: new qlq(655, 525, 140, 70)
    , };
    this.rds = {
        fontSize: 18
        , zkr: 128
        , pzr: 176
        , xyy: 0
        , dxw: 20
        , hfv: true
    };
    this.axb = new qlq(20, 300, 128, 205);
    this.cvj = new qlq(176, 300, 128, 205);
    this.ndi = new qlq(333, 300, 128, 205);
    this.rze = new qlq(490, 300, 128, 205);
    this.wnf = new qlq(646, 300, 128, 205);
    this.bdh = {
        yhm: new qlq(363, 82, 408, 155)
        , fontSize: 50
        , guo: 0
        , hpu: 9
        , ike: 0
        , usf: 2
    };
    this.uud = {
        yhm: new qlq(355, 40, 424, 236)
        , fontSize: 20
        , ike: 6
    };
    this.frl.llb = new qlq();
    this.frl.jfv = new qlq();
    this.frl.iec = new qlq();
    this.frl.nke = new qlq();
    this.frl.dnu = new qlq();
    this.frl.zit = new qlq();
    this.frl.nnf = new qlq(30, 180, 410, 60);
    this.frl.jgp = new qlq(512, 180, 210, 60)
}
fth.prototype = new yaw;

function esd() {
    this.cvx = false;
    this.ais = true;
    this.ney = {
        yhm: new qlq(0, 0, 960, 630)
        , jrz: new qlq(160, 506, 800, 124)
        , xkb: new qlq(0, 0, 160, 630)
        , vhe: {
            yhm: new qlq(385, 525, 390, 70)
            , hpu: 14
            , fontSize: 24
            , edp: 3
            , fuh: 2
            , wzy: 6
            , zqj: 2
        }
        , jle: {
            qim: 0
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , edp: 24
            , wzy: 8
            , zqj: 6
        }
        , khc: {
            qim: 0
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , edp: 16
            , wzy: 8
            , zqj: 4
        }
        , dkj: {
            qim: 0
            , lha: 24
            , guo: 0
            , edp: 24
            , wzy: 8
            , zqj: 6
            , kxg: 0
            , ukh: -130
        }
        , display: {
            boy: -20
            , kxg: 16
            , qim: 32
            , jbh: 18
            , zqj: 3
            , yyh: 3
            , fkj: 3
            , dtx: 3
            , veu: 3
        }
        , dft: new qlq(165, 525, 180, 70)
        , vfm: new qlq(815, 525, 140, 70)
        , miv: {
            ngo: new qlq(10, 215, 140, 200)
            , cic: new qlq()
            , hva: new qlq()
            , biq: new qlq(10, 455, 140, 100)
            , cwl: new qlq()
            , fnv: new qlq(10, 75, 140, 100)
        }
        , dcl: {
            ngo: new qlq(10, 215, 140, 200)
            , cwl: new qlq()
            , cic: new qlq()
            , hva: new qlq()
            , biq: new qlq(10, 455, 140, 100)
            , oen: new qlq()
            , fnv: new qlq(10, 75, 140, 100)
        }
        , thq: {
            ngo: new qlq(10, 215, 140, 200)
            , cwl: new qlq()
            , cic: new qlq()
            , hva: new qlq()
            , oen: new qlq()
            , fnv: new qlq(10, 75, 140, 100)
        }
        , xjd: {
            ngo: new qlq(10, 215, 140, 200)
            , cic: new qlq()
            , hva: new qlq()
            , biq: new qlq(10, 455, 140, 100)
            , cwl: new qlq()
            , fnv: new qlq(10, 75, 140, 100)
        }
        , nuz: 15
    };
    this.cce = {
        yhm: new qlq(0, 0, 960, 630)
        , kju: new qlq(0, 0, 160, 630)
        , biq: new qlq(10, 455, 140, 100)
        , tfk: new qlq()
        , vqc: new qlq(10, 75, 140, 100)
        , uea: new qlq(10, 265, 140, 100)
        , zoc: {
            qim: 0
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , wzy: 16
            , edp: 16
            , zqj: 4
        }
    };
    this.wqw = {
        yhm: new qlq(0, 0, 960, 630)
        , kju: new qlq(0, 0, 160, 630)
        , vhe: {
            yhm: new qlq(390, 525, 390, 70)
            , fontSize: 20
            , hpu: 14
            , edp: 3
            , fuh: 2
            , wzy: 6
            , zqj: 2
        }
        , zoc: {
            qim: 24
            , lha: 0
            , guo: 0
            , kxg: 0
            , ukh: 0
            , wzy: 8
            , edp: 16
            , zqj: 4
        }
        , display: {
            boy: -20
            , kxg: 16
            , qim: 32
            , jbh: 18
            , zqj: 3
            , yyh: 3
            , fkj: 3
            , dtx: 3
            , veu: 3
        }
        , ens: new qlq(165, 525, 180, 70)
        , tja: new qlq(815, 525, 140, 70)
    , };
    this.rds = {
        fontSize: 18
        , zkr: 128
        , pzr: 176
        , xyy: 0
        , dxw: 20
        , hfv: true
    };
    this.axb = new qlq(180, 300, 128, 205);
    this.cvj = new qlq(336, 300, 128, 205);
    this.ndi = new qlq(493, 300, 128, 205);
    this.rze = new qlq(650, 300, 128, 205);
    this.wnf = new qlq(806, 300, 128, 205);
    this.bdh = {
        yhm: new qlq(523, 82, 408, 155)
        , fontSize: 50
        , guo: 0
        , hpu: 9
        , ike: 0
        , usf: 2
    };
    this.uud = {
        yhm: new qlq(515, 40, 424, 236)
        , fontSize: 20
        , ike: 6
    };
    this.frl.llb = new qlq();
    this.frl.jfv = new qlq();
    this.frl.iec = new qlq();
    this.frl.nke = new qlq();
    this.frl.dnu = new qlq();
    this.frl.zit = new qlq();
    this.frl.nnf = new qlq(30, 180, 410, 60);
    this.frl.jgp = new qlq(512, 180, 210, 60)
}
esd.prototype = new tme;

function jvu() {
    this.axb = new qlq(20, 250, 147, 227);
    this.cvj = new qlq(174, 250, 147, 227);
    this.ndi = new qlq(328, 250, 147, 227);
    this.rze = new qlq(479, 250, 147, 227);
    this.wnf = new qlq(632, 250, 147, 227);
    this.rds.zkr = 145;
    this.rds.pzr = 202;
    this.rds.xyy = 20;
    this.bdh.yhm = new qlq(110, 290, 584, 60);
    this.bdh.fontSize = 40;
    this.bdh.ike = 10;
    this.bdh.hpu = 3;
    this.uud.yhm = new qlq(22, 42, 756, 193);
    this.uud.ike = 5;
    this.uud.guo = 2;
    this.uud.tja = [new qlq(209, 2, 103, 189), new qlq(314, 2, 103, 189), new qlq(419, 2, 103, 189), new qlq(524, 2, 103, 189), new qlq(629, 2, 125, 189)];
    this.wqw.rds = {
        fontSize: 18
        , zkr: 145
        , pzr: 202
        , xyy: 20
        , dxw: 20
        , hfv: true
    };
    this.wqw.axb = new qlq(20, 175, 147, 227);
    this.wqw.cvj = new qlq(174, 175, 147, 227);
    this.wqw.ndi = new qlq(327, 175, 147, 227);
    this.wqw.rze = new qlq(479, 175, 147, 227);
    this.wqw.wnf = new qlq(632, 175, 147, 227);
    this.wqw.ckc = new qlq(415, 544, 110, 53);
    this.wqw.hva = new qlq(275, 544, 110, 53);
    this.wqw.edk = new qlq(50, 20, 700, 120);
    this.wqw.fontSize = 20;
    this.cce.win = {
        yhm: new qlq(0, 0, 800, 600)
        , fontSize: 16
        , jbh: 40
        , aib: 12
        , lineWidth: 1
        , vuf: new qlq()
        , edk: new qlq(0, 530, 800, 20)
        , wno: [new qlq(32, 40, 180, 20), new qlq(452, 40, 180, 20), new qlq(32, 140, 180, 20), new qlq(452, 140, 180, 20), new qlq(32, 240, 180, 20), new qlq(452, 240, 180, 20), new qlq(32, 340, 180, 20), new qlq(452, 340, 180, 20), new qlq(32, 440, 180, 20)]
        , fzt: [new qlq(170, 60, 190, 50), new qlq(590, 60, 190, 50), new qlq(170, 160, 190, 50), new qlq(590, 160, 190, 50), new qlq(170, 260, 190, 50), new qlq(590, 260, 190, 50), new qlq(170, 360, 190, 50), new qlq(590, 360, 190, 50), new qlq(170, 460, 190, 50)]
    }
}
jvu.prototype = new bng;

function bgi() {
    this.mxy = true
}
bgi.prototype = new jvu;

function zvs() {
    this.axb = new qlq(20, 780, 147, 227);
    this.cvj = new qlq(174, 780, 147, 227);
    this.ndi = new qlq(328, 780, 147, 227);
    this.rze = new qlq(479, 780, 147, 227);
    this.wnf = new qlq(632, 780, 147, 227);
    this.rds.zkr = 145;
    this.rds.pzr = 202;
    this.rds.xyy = 20;
    this.bdh.yhm = new qlq(110, 820, 584, 60);
    this.bdh.fontSize = 40;
    this.bdh.ike = 10;
    this.bdh.hpu = 3;
    this.uud.yhm = new qlq(22, 572, 756, 193);
    this.uud.ike = 5;
    this.uud.guo = 2;
    this.uud.tja = [new qlq(209, 2, 103, 189), new qlq(314, 2, 103, 189), new qlq(419, 2, 103, 189), new qlq(524, 2, 103, 189), new qlq(629, 2, 125, 189)];
    this.wqw.rds = {
        fontSize: 18
        , zkr: 145
        , pzr: 202
        , xyy: 20
        , dxw: 20
        , hfv: true
    };
    this.wqw.axb = new qlq(20, 175, 147, 227);
    this.wqw.cvj = new qlq(174, 175, 147, 227);
    this.wqw.ndi = new qlq(327, 175, 147, 227);
    this.wqw.rze = new qlq(479, 175, 147, 227);
    this.wqw.wnf = new qlq(632, 175, 147, 227);
    this.wqw.ckc = new qlq(415, 544, 120, 68);
    this.wqw.hva = new qlq(265, 544, 120, 68);
    this.wqw.edk = new qlq(50, 20, 700, 120);
    this.wqw.fontSize = 20;
    this.cce.win = {
        yhm: new qlq(0, 0, 800, 615)
        , fontSize: 16
        , jbh: 40
        , aib: 12
        , lineWidth: 1
        , vuf: new qlq()
        , edk: new qlq(0, 530, 800, 20)
        , wno: [new qlq(32, 40, 180, 20), new qlq(452, 40, 180, 20), new qlq(32, 140, 180, 20), new qlq(452, 140, 180, 20), new qlq(32, 240, 180, 20), new qlq(452, 240, 180, 20), new qlq(32, 340, 180, 20), new qlq(452, 340, 180, 20), new qlq(32, 440, 180, 20)]
        , fzt: [new qlq(170, 60, 190, 50), new qlq(590, 60, 190, 50), new qlq(170, 160, 190, 50), new qlq(590, 160, 190, 50), new qlq(170, 260, 190, 50), new qlq(590, 260, 190, 50), new qlq(170, 360, 190, 50), new qlq(590, 360, 190, 50), new qlq(170, 460, 190, 50)]
    };
    this.top.win = {
        yhm: new qlq(0, 0, 800, 520)
        , fontSize: 16
        , jbh: 40
        , aib: 12
        , lineWidth: 1
        , vuf: new qlq()
        , edk: new qlq(0, 500, 800, 20)
        , wno: [new qlq(32, 20, 180, 20), new qlq(452, 20, 180, 20), new qlq(32, 120, 180, 20), new qlq(452, 120, 180, 20), new qlq(32, 220, 180, 20), new qlq(452, 220, 180, 20), new qlq(32, 320, 180, 20), new qlq(452, 320, 180, 20), new qlq(32, 420, 180, 20)]
        , fzt: [new qlq(170, 40, 190, 50), new qlq(590, 40, 190, 50), new qlq(170, 140, 190, 50), new qlq(590, 140, 190, 50), new qlq(170, 240, 190, 50), new qlq(590, 240, 190, 50), new qlq(170, 340, 190, 50), new qlq(590, 340, 190, 50), new qlq(170, 440, 190, 50)]
    }
}
zvs.prototype = new cyj;

function wnh() {
    this.axb = new qlq(25, 250, 147, 227);
    this.cvj = new qlq(179, 250, 147, 227);
    this.ndi = new qlq(332, 250, 147, 227);
    this.rze = new qlq(484, 250, 147, 227);
    this.wnf = new qlq(637, 250, 147, 227);
    this.rds.zkr = 145;
    this.rds.pzr = 202;
    this.rds.xyy = 20;
    this.bdh.yhm = new qlq(115, 290, 584, 60);
    this.bdh.fontSize = 40;
    this.bdh.ike = 10;
    this.bdh.hpu = 3;
    this.uud.yhm = new qlq(27, 42, 756, 193);
    this.uud.ike = 5;
    this.uud.guo = 2;
    this.uud.tja = [new qlq(209, 2, 103, 189), new qlq(314, 2, 103, 189), new qlq(419, 2, 103, 189), new qlq(524, 2, 103, 189), new qlq(629, 2, 125, 189)];
    this.wqw.rds = {
        fontSize: 18
        , zkr: 145
        , pzr: 202
        , xyy: 20
        , dxw: 20
        , hfv: true
    };
    this.wqw.axb = new qlq(20, 175, 147, 227);
    this.wqw.cvj = new qlq(174, 175, 147, 227);
    this.wqw.ndi = new qlq(327, 175, 147, 227);
    this.wqw.rze = new qlq(479, 175, 147, 227);
    this.wqw.wnf = new qlq(632, 175, 147, 227);
    this.wqw.ckc = new qlq(415, 544, 110, 53);
    this.wqw.hva = new qlq(275, 544, 110, 53);
    this.wqw.edk = new qlq(50, 20, 700, 120);
    this.wqw.fontSize = 20;
    this.cce.win = {
        yhm: new qlq(0, 0, 800, 600)
        , fontSize: 16
        , jbh: 40
        , aib: 12
        , lineWidth: 1
        , vuf: new qlq()
        , edk: new qlq(0, 530, 800, 20)
        , wno: [new qlq(32, 40, 180, 20), new qlq(452, 40, 180, 20), new qlq(32, 140, 180, 20), new qlq(452, 140, 180, 20), new qlq(32, 240, 180, 20), new qlq(452, 240, 180, 20), new qlq(32, 340, 180, 20), new qlq(452, 340, 180, 20), new qlq(32, 440, 180, 20)]
        , fzt: [new qlq(170, 60, 190, 50), new qlq(590, 60, 190, 50), new qlq(170, 160, 190, 50), new qlq(590, 160, 190, 50), new qlq(170, 260, 190, 50), new qlq(590, 260, 190, 50), new qlq(170, 360, 190, 50), new qlq(590, 360, 190, 50), new qlq(170, 460, 190, 50)]
    }
}
wnh.prototype = new cfc;

function wux() {
    this.mxy = true
}
wux.prototype = new wnh;

function evw() {
    this.axb = new qlq(20, 260, 147, 227);
    this.cvj = new qlq(174, 260, 147, 227);
    this.ndi = new qlq(328, 260, 147, 227);
    this.rze = new qlq(479, 260, 147, 227);
    this.wnf = new qlq(632, 260, 147, 227);
    this.rds.zkr = 145;
    this.rds.pzr = 202;
    this.rds.xyy = 20;
    this.bdh.yhm = new qlq(110, 300, 584, 60);
    this.bdh.fontSize = 40;
    this.bdh.ike = 10;
    this.bdh.hpu = 3;
    this.uud.yhm = new qlq(22, 52, 756, 193);
    this.uud.ike = 5;
    this.uud.guo = 2;
    this.uud.tja = [new qlq(209, 2, 103, 189), new qlq(314, 2, 103, 189), new qlq(419, 2, 103, 189), new qlq(524, 2, 103, 189), new qlq(629, 2, 125, 189)];
    this.wqw.rds = {
        fontSize: 18
        , zkr: 145
        , pzr: 202
        , xyy: 20
        , dxw: 20
        , hfv: true
    };
    this.wqw.axb = new qlq(20, 205, 147, 227);
    this.wqw.cvj = new qlq(174, 205, 147, 227);
    this.wqw.ndi = new qlq(327, 205, 147, 227);
    this.wqw.rze = new qlq(479, 205, 147, 227);
    this.wqw.wnf = new qlq(632, 205, 147, 227);
    this.wqw.ckc = new qlq(810, 365, 140, 100);
    this.wqw.hva = new qlq(810, 165, 140, 100);
    this.wqw.edk = new qlq(50, 50, 700, 120);
    this.wqw.fontSize = 20;
    this.cce.win = {
        yhm: new qlq(0, 30, 800, 600)
        , fontSize: 16
        , jbh: 40
        , aib: 20
        , lineWidth: 1
        , vuf: new qlq()
        , edk: new qlq(0, 530, 800, 40)
        , wno: [new qlq(32, 40, 180, 20), new qlq(452, 40, 180, 20), new qlq(32, 140, 180, 20), new qlq(452, 140, 180, 20), new qlq(32, 240, 180, 20), new qlq(452, 240, 180, 20), new qlq(32, 340, 180, 20), new qlq(452, 340, 180, 20), new qlq(32, 440, 180, 20)]
        , fzt: [new qlq(170, 60, 190, 50), new qlq(590, 60, 190, 50), new qlq(170, 160, 190, 50), new qlq(590, 160, 190, 50), new qlq(170, 260, 190, 50), new qlq(590, 260, 190, 50), new qlq(170, 360, 190, 50), new qlq(590, 360, 190, 50), new qlq(170, 460, 190, 50)]
    }
}
evw.prototype = new fth;

function uwa() {
    this.axb = new qlq(180, 260, 147, 227);
    this.cvj = new qlq(334, 260, 147, 227);
    this.ndi = new qlq(488, 260, 147, 227);
    this.rze = new qlq(639, 260, 147, 227);
    this.wnf = new qlq(792, 260, 147, 227);
    this.rds.zkr = 145;
    this.rds.pzr = 202;
    this.rds.xyy = 20;
    this.bdh.yhm = new qlq(270, 300, 584, 60);
    this.bdh.fontSize = 40;
    this.bdh.ike = 10;
    this.bdh.hpu = 3;
    this.uud.yhm = new qlq(182, 52, 756, 193);
    this.uud.ike = 5;
    this.uud.guo = 2;
    this.uud.tja = [new qlq(209, 2, 103, 189), new qlq(314, 2, 103, 189), new qlq(419, 2, 103, 189), new qlq(524, 2, 103, 189), new qlq(629, 2, 125, 189)];
    this.wqw.rds = {
        fontSize: 18
        , zkr: 145
        , pzr: 202
        , xyy: 20
        , dxw: 20
        , hfv: true
    };
    this.wqw.axb = new qlq(180, 205, 147, 227);
    this.wqw.cvj = new qlq(334, 205, 147, 227);
    this.wqw.ndi = new qlq(487, 205, 147, 227);
    this.wqw.rze = new qlq(639, 205, 147, 227);
    this.wqw.wnf = new qlq(792, 205, 147, 227);
    this.wqw.ckc = new qlq(10, 365, 140, 100);
    this.wqw.hva = new qlq(10, 165, 140, 100);
    this.wqw.edk = new qlq(210, 50, 700, 120);
    this.wqw.fontSize = 20;
    this.cce.win = {
        yhm: new qlq(160, 30, 800, 600)
        , fontSize: 16
        , jbh: 40
        , aib: 20
        , lineWidth: 1
        , vuf: new qlq()
        , edk: new qlq(0, 530, 800, 40)
        , wno: [new qlq(32, 40, 180, 20), new qlq(452, 40, 180, 20), new qlq(32, 140, 180, 20), new qlq(452, 140, 180, 20), new qlq(32, 240, 180, 20), new qlq(452, 240, 180, 20), new qlq(32, 340, 180, 20), new qlq(452, 340, 180, 20), new qlq(32, 440, 180, 20)]
        , fzt: [new qlq(170, 60, 190, 50), new qlq(590, 60, 190, 50), new qlq(170, 160, 190, 50), new qlq(590, 160, 190, 50), new qlq(170, 260, 190, 50), new qlq(590, 260, 190, 50), new qlq(170, 360, 190, 50), new qlq(590, 360, 190, 50), new qlq(170, 460, 190, 50)]
    }
}
uwa.prototype = new esd;
var vit = {
    language: {
        EN: "en"
        , RU: "ru"
        , EE: "et"
        , ES: "es"
        , DE: "de"
        , TR: "tr"
        , CZ: "cs"
        , GR: "el"
        , AT: "at"
        , US: "us"
        , BG: "bg"
        , CO: "co"
        , CL: "cl"
        , MX: "mx"
        , VE: "ve"
        , BR: "br"
        , GE: "ka"
        , HU: "hu"
        , RO: "ro"
        , PT: "pt"
        , FR: "fr"
        , HR: "hr"
        , IT: "it"
        , SE: "sv"
    }
    , yly: {
        shq: 0
        , fbe: 1
        , ggh: 2
        , lvf: 3
        , opm: 4
        , wqj: 5
        , jjx: 10
        , fyk: 11
        , gbr: 12
        , xxf: 13
        , qfk: 14
        , hul: 15
        , uai: 16
    }
    , os: {
        rop: 0
        , dqp: 1
        , cmt: 2
        , bxf: 3
        , ref: 4
    }
    , vkm: {
        duh: 1
        , udd: 3
        , qog: 4
        , rgo: 5
        , vpj: 7
        , ywj: 8
        , oxs: 11
        , ppq: 13
        , gtp: 14
        , yvt: 6
        , hws: 9
        , pix: 10
    }
    , qqa: {
        zje: 1
        , hek: 2
        , mhs: 4
        , sby: 8
        , ksb: 16
        , iiy: 32
    }
    , gba: {
        fih: 1
        , udb: 2
        , kxs: 3
        , gvc: 4
        , ahe: 5
        , cal: 6
        , kyc: 7
        , ouv: 94
        , upa: 95
        , bxt: 96
        , fru: 97
        , xsp: 98
        , jrg: 99
        , roulette: {
            cew: 2
            , oye: 9
            , edf: 10
        }
    }
    , ui: {
        ldo: "minimal"
        , mwv: "modern"
        , qog: "classic"
    }
    , zop: {
        bac: "auto"
        , cib: "left"
        , odl: "right"
    }
    , pmz: {
        dye: 0
        , exr: 1
        , chb: 2
        , rqb: 3
        , vzw: 4
    }
    , yvn: {
        nsg: {
            kvb: "ji"
            , hnx: "jv"
            , enp: "jh"
        }
    }
    , oca: {
        xdb: {
            ydu: 1
            , xrm: 2
        }
        , mvt: {
            bjy: 1
            , syx: 2
            , vrl: 3
        }
    }
};
vit.gfj = (function() {
    var g = ["moz", "webkit", "ms", "o"]
        , f = 0
        , d = 0;
    var b = document.createElement("canvas");
    if (!(b.getContext && b.getContext("2d"))) {
        f += vit.qqa.zje
    }
    if (!(window.WebSocket || window.MozWebSocket)) {
        f += vit.qqa.hek
    }
    try {
        if (!(window.localStorage && window.sessionStorage)) {
            f += vit.qqa.mhs
        } else {
            sessionStorage.dummy = true;
            sessionStorage.removeItem("dummy")
        }
    } catch (c) {
        f += vit.qqa.mhs
    }
    if (!(b.style.MozTransform != undefined || b.style.WebkitTransform != undefined || b.style.OTransform != undefined || b.style.msTransform != undefined)) {
        f += vit.qqa.sby
    }
    try {
        if (window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
            window.AudioContext = webkitAudioContext;
            if (!AudioContext.prototype.hasOwnProperty("createGain")) {
                AudioContext.prototype.createGain = AudioContext.prototype.createGainNode
            }
            AudioContext.prototype.nzn = AudioContext.prototype.createBufferSource;
            AudioContext.prototype.createBufferSource = function() {
                var e = this.nzn();
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
            window.gan = window.requestAnimationFrame;
            window.ijd = window.cancelAnimationFrame || window.cancelRequestAnimationFrame
        }
        for (var a = 0; a < g.length && !window.gan; ++a) {
            window.gan = window[g[a] + "RequestAnimationFrame"];
            window.ijd = window[g[a] + "CancelAnimationFrame"] || window[g[a] + "CancelRequestAnimationFrame"]
        }
        if (!window.gan || !window.ijd) {
            window.gan = function(l, i) {
                var e = new Date().getTime();
                var j = Math.max(0, 16 - (e - d));
                var k = window.setTimeout(function() {
                    l(e + j)
                }, j);
                d = e + j;
                return k
            }
        }
        if (!window.ijd) {
            window.ijd = function(e) {
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
        console.error(c.gba)
    }
    return f
})();

function zno() {
    var a = {};
    this.rqx = 1;
    this.veh = 1;
    this.jbt = 0.6;
    this.wto = 0.4;
    this.zij = function() {};
    this.ocz = function(b, c) {
        a[b] = c
    };
    this.ijv = function(b) {
        if (a[b]) {
            return a[b]
        } else {
            return this.rqx
        }
    }
}

function ysw() {
    this.audio = {
        vql: 65
        , ojt: -1
        , value: "A"
        , irm: null
    };
    this.oga = {
        vql: 70
        , ojt: 122
        , value: "F"
        , irm: "F11"
    };
    this.dwr = {
        vql: 72
        , ojt: -1
        , value: "H"
        , irm: null
    };
    this.hgr = {
        vql: 83
        , ojt: -1
        , value: "S"
        , irm: null
    };
    this.bzh = {
        vql: 68
        , ojt: -1
        , value: "D"
        , irm: null
    };
    this.ok = {
        vql: 13
        , ojt: -1
        , value: "OK"
        , irm: null
    };
    this.tvi = [this.audio, this.oga, this.dwr, this.hgr, this.bzh, this.ok]
}

function auk() {
    var p = this;
    this.pkk = false;
    this.hld = null;
    this.sho = false;
    this.els = false;
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
    var o = false;
    this.zij = function() {
        this.kmx();
        this.hoi();
        this.sho = false;
        this.els = false
    };
    this.kmx = function() {
        try {
            if (webAudioEngine == null) {
                webAudioEngine = new AudioContext()
            }
            this.hld = webAudioEngine.createGain();
            this.hld.connect(webAudioEngine.destination);
            this.pkk = true
        } catch (q) {
            this.pkk = false
        }
    };
    this.hoi = function() {
        m = vit.gtm.mca()
    };
    this.twe = function(q) {
        l = q
    };
    this.uqe = function(q) {
        c = q
    };
    this.yhs = function(q) {
        n = q
    };
    this.ony = function(u, t, q, r) {
        var s = new duc(u);
        s.zij(this.pkk, t, q, l.ijv(u));
        i[u] = s;
        k.push(s);
        d.push({
            wah: s
            , ypx: r
            , jwr: p.clg
            , ika: m
        })
    };
    this.yoq = function(s, r) {
        var q = new Image();
        f[s] = q;
        d.push({
            wah: q
            , ypx: r
            , jwr: null
        })
    };
    this.pze = function(r, q) {
        d.unshift({
            wah: null
            , ypx: r
            , jwr: p.xeh
            , gpz: q
        })
    };
    this.dih = function() {
        o = true;
        g = d.length;
        b = 0;
        while (d.length > 0) {
            p.iik(d.shift())
        }
    };
    this.start = function() {
        if (!p.sho) {
            return
        }
        p.sho = false;
        o = false;
        g = d.length;
        b = 0;
        j = 1;
        for (var r = 0; r < j && d.length > 0; r++) {
            a.push(d.shift())
        }
        for (var q = 0; q < a.length; q++) {
            p.iik(a.shift())
        }
    };
    this.moa = function() {
        b++;
        if (p.ore()) {
            p.sho = true;
            vit.iyt.hil()
        }
    };
    this.lgx = function() {
        p.tqu()
    };
    this.zve = function() {
        p.els = true;
        p.tqu()
    };
    this.tqu = function() {
        b++;
        p.fyd();
        if (p.ore()) {
            p.sgw()
        } else {
            p.bxo()
        }
    };
    this.fyd = function() {
        var q = vit.iyt.vxx.szb("loading");
        e = Math.round(100 * b / g);
        if (e < 100) {
            if (q) {
                q.isl(e)
            }
        }
    };
    this.sgw = function() {
        var s = vit.iyt.vxx.szb("loading");
        if (p.els) {
            vit.iyt.jbe(vit.iyt.language.rgq);
            var q = confirm(vit.iyt.language.otq);
            if (q == true) {
                vit.iyt.vww = false;
                p.qeb();
                vit.iyt.fzh()
            } else {
                vit.iyt.gsw({
                    type: "gameDataLoaded"
                    , sender: vit.iyt.xgb
                    , lang: sessionStorage.sessionValue1.toUpperCase()
                    , data: {
                        success: false
                    }
                });
                setTimeout(vit.iyt.zcq, 1000)
            }
        } else {
            if (!vit.iyt.kkr) {
                e = 100;
                if (s) {
                    s.isl(e)
                }
                if (c === true) {
                    if (n === true) {
                        s.fuj((vit.iyt.xyq() === true) ? vit.iyt.language.civ : vit.iyt.language.jyn, vit.iyt.tud.dra("device_info"))
                    } else {
                        s.fuj(vit.iyt.language.ruo, null)
                    }
                } else {
                    setTimeout(vit.iyt.fzh, 200)
                }
            }
        }
    };
    this.ijo = function() {
        return e
    };
    this.bxo = function() {
        if (d.length > 0) {
            a.push(d.shift());
            if (j === 1 && (a[0].wah instanceof Image || a[0].wah instanceof duc)) {
                j = 30;
                for (var q = 0; q < j && d.length > 0; q++) {
                    a.push(d.shift())
                }
            }
        } else {}
        if (a.length > 0) {
            p.iik(a.shift())
        }
    };
    this.ore = function() {
        return (g > 0 && b == g)
    };
    this.iik = function(q) {
        if (q.wah instanceof Image) {
            if (o === true) {
                this.hsf(q.wah, q.ypx)
            } else {
                this.bey(q.wah, q.ypx)
            }
        } else {
            if (q.wah instanceof duc) {
                this.icv(q.wah, q.ypx, q.jwr, q.ika)
            } else {
                this.slg(q.ypx, q.gpz, q.jwr)
            }
        }
    };
    this.hsf = function(r, q) {
        r.onload = function() {
            vit.iyt.tud.moa()
        };
        r.onerror = function() {
            console.error("can not load image " + q)
        };
        r.src = q + "?v=" + vit.iyt.znm
    };
    this.bey = function(r, q) {
        r.onload = function() {
            vit.iyt.tud.lgx()
        };
        r.onerror = function() {
            console.error("can not load image " + q);
            vit.iyt.jbe(vit.iyt.language.vsv);
            setTimeout(vit.iyt.zcq, 3000)
        };
        r.src = q + "?v=" + vit.iyt.znm
    };
    this.icv = function(r, s, t, q) {
        r.load(s, t, q)
    };
    this.slg = function(t, q, u) {
        var r = new XMLHttpRequest();
        r.open("GET", t + q, true);
        r.responseType = "text";
        r.onreadystatechange = function() {
            if (r.readyState == 4 && r.status == 200) {
                var v = JSON.parse(r.responseText);
                u(t, v)
            }
        };
        r.onerror = function() {
            console.error("can not load " + t + q);
            vit.iyt.jbe(vit.iyt.language.vsv);
            setTimeout(vit.iyt.zcq, 3000)
        };
        try {
            r.send()
        } catch (s) {
            console.error("can not load from " + t + q);
            vit.iyt.jbe(vit.iyt.language.vsv);
            setTimeout(vit.iyt.zcq, 3000)
        }
    };
    this.clg = function(r, q) {
        i[r].sgj = q
    };
    this.xeh = function(s, r) {
        var q = new Image();
        q.onload = function() {
            p.zgf(q, r.data)
        };
        q.onerror = function() {
            console.error("can not load image " + s + r.src);
            vit.iyt.jbe(vit.iyt.language.vsv);
            setTimeout(vit.iyt.zcq, 3000)
        };
        q.src = s + r.src + "?v=" + vit.iyt.znm
    };
    this.zgf = function(s, v) {
        var t = null
            , r = null;
        for (var u = 0, q = v.length; u < q; u++) {
            t = document.createElement("canvas");
            t.width = v[u].rect.w;
            t.height = v[u].rect.h;
            r = t.getContext("2d");
            r.drawImage(s, v[u].rect.x, v[u].rect.y, v[u].rect.w, v[u].rect.h, 0, 0, v[u].rect.w, v[u].rect.h);
            p.rfj(v[u].id, t)
        }
        vit.iyt.tud.lgx()
    };
    this.lpf = function(q) {
        if (i && i[q]) {
            return i[q]
        } else {}
        return null
    };
    this.rfj = function(r, q) {
        if (q && !f[r]) {
            f[r] = q
        } else {}
        return null
    };
    this.dra = function(q) {
        if (f[q]) {
            return f[q]
        } else {}
        return null
    };
    this.enn = function(q) {
        if (!i) {
            return 0
        }
        var r = 0
            , s = true;
        while (s) {
            if (i[q + r]) {
                r++
            } else {
                s = false
            }
        }
        return r
    };
    this.osc = function(q) {
        if (!f) {
            return 0
        }
        var r = 0
            , s = true;
        while (s) {
            if (f[q + r]) {
                r++
            } else {
                s = false
            }
        }
        return r
    };
    this.jfc = function(r, q) {
        if (i && i[r]) {
            i[r].play(q)
        } else {}
    };
    this.qic = function(q) {
        if (i && i[q]) {
            i[q].stop()
        } else {}
    };
    this.etq = function(r, q) {
        if (i && i[r]) {
            i[r].hrx(q)
        } else {}
    };
    this.sen = function(t, r, s, q) {
        q = (q != null && q === true);
        if (i && i[t]) {
            i[t].gky(l.ijv(t) * r, s, q)
        }
    };
    this.rrb = function(q) {
        if (i && i[q]) {
            return i[q].tve()
        }
        return 0
    };
    this.eib = function(q) {
        if (this.pkk) {
            this.hld.gain.setValueAtTime(q, webAudioEngine.currentTime)
        }
    };
    this.hsy = function(r) {
        if (this.pkk) {
            this.hld.gain.setValueAtTime((r) ? 0 : 1, webAudioEngine.currentTime)
        } else {
            if (k) {
                for (var q = 0; q < k.length; q++) {
                    k[q].hrx(r)
                }
            }
        }
    };
    this.qeb = function() {
        if (k) {
            for (var q = 0; q < k.length; q++) {
                k[q].clear()
            }
        }
        k = null;
        i = null
    }
}

function cia() {
    this.zay = {};
    this.fbl = {};
    this.agf = [];
    this.zij = function() {
        this.zay = {};
        this.fbl = {};
        this.agf = []
    };
    this.mzk = function(b) {
        this.zay[b] = b
    };
    this.eiu = function(f, e, d) {
        this.fbl[f] = e;
        this.fbl[f].pqk = [];
        if (d && this.zay) {
            for (var c = 0, b = d.length; c < b; c++) {
                if (this.zay[d[c]]) {
                    this.fbl[f].pqk.push(d[c])
                } else {}
            }
        }
        this.agf.push(this.fbl[f])
    };
    this.anz = function() {
        var c = [];
        for (var d = 0, b = this.agf.length; d < b; d++) {
            if (this.agf[d] != null) {
                c.push(this.agf[d])
            }
        }
        return c
    };
    this.szb = function(b) {
        if (this.fbl && this.fbl[b]) {
            return this.fbl[b]
        }
        return null
    };
    this.rys = function(g) {
        if (this.zay && this.zay[g]) {
            var d = [];
            for (var f = 0, b = this.agf.length; f < b; f++) {
                for (var e = 0, c = this.agf[f].pqk.length; e < c; e++) {
                    if (this.agf[f].pqk[e] == g) {
                        d.push(this.agf[f])
                    }
                }
            }
            return d
        }
        return []
    };
    this.gtk = function() {
        return this.zay
    };
    this.gxo = function(e) {
        var d = -1;
        if (this.fbl && this.fbl[e]) {
            for (var c = 0, b = this.agf.length; c < b; c++) {
                if (this.agf[c] == this.fbl[e]) {
                    d = c;
                    this.fbl[e] = null
                }
            }
        }
        if (d >= 0) {
            this.agf.splice(d, 1)
        }
    };
    this.ngs = function(f) {
        if (this.zay && this.zay[f]) {
            this.zay[f] = null;
            for (var e = 0, b = this.agf.length; e < b; e++) {
                for (var d = 0, c = this.agf[e].pqk.length; d < c; d++) {
                    if (this.agf[e].pqk[d] == f) {
                        this.agf[e].pqk.splice(d, 1)
                    }
                }
            }
        }
    };
    this.nxn = function(e, d, c, b) {
        return a(this.szb(e), d, c, b)
    };
    this.pmn = function(f, d, c) {
        for (var e = 0, b = this.agf.length; e < b; e++) {
            a(this.agf[e], f, d, c)
        }
    };
    this.moq = function(k, l, f, e) {
        if (this.zay && this.zay[k]) {
            for (var g = 0, b = this.agf.length; g < b; g++) {
                for (var d = 0, c = this.agf[g].pqk.length; d < c; d++) {
                    if (this.agf[g].pqk[d] == k) {
                        a(this.agf[g], l, f, e)
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

function duc(b) {
    var a = this;
    this.nyn = null;
    this.loop = false;
    this.muted = false;
    this.volume = 1;
    this.id = b;
    this.tns = false;
    this.sgj = null;
    this.jwx = null;
    this.xzi = 0;
    this.egl = 0;
    this.ayv = 0;
    this.xfb = 0;
    this.ujp = 30000;
    this.ntz = "";
    this.aqk = "";
    this.kjl = "";
    this.fud = null;
    this.ljh = 1;
    this.pbq = 0;
    this.wgu = -1;
    this.zui = 0;
    this.uff = 0;
    this.tmz = false;
    this.zij = function(c, f, d, e) {
        this.tns = c;
        if (e) {
            this.ljh = e;
            this.volume = e
        }
        if (f) {
            this.nyn = f
        }
        if (d) {
            this.loop = d
        }
    };
    this.play = function(c) {
        if (typeof c == "undefined") {
            c = 0
        }
        if (this.tns) {
            clearTimeout(this.wgu);
            if (this.sgj) {
                this.volume = (this.muted === true) ? 0 : vit.vjo.value40 * this.ljh;
                this.tmz = false;
                this.jwx = webAudioEngine.createBufferSource();
                this.jwx.buffer = this.sgj;
                this.jwx.loop = this.loop;
                this.xzi = webAudioEngine.createGain();
                this.xzi.gain.setValueAtTime(this.volume, webAudioEngine.currentTime);
                this.jwx.connect(this.xzi);
                this.xzi.connect(vit.iyt.tud.hld);
                this.jwx.start(0, c);
                this.pbq = webAudioEngine.currentTime;
                if (this.nyn) {
                    this.egl = setTimeout(a.nyn, a.sgj.duration * 1000)
                }
            }
        } else {
            if (this.jwx) {
                if (this.loop) {
                    if (vit.gtm.grh != vit.yly.opm && vit.gtm.grh != vit.yly.qfk) {
                        this.ayv = setInterval(a.xhq, a.jwx.duration * 1000)
                    }
                }
                this.jwx.currentTime = 0;
                this.jwx.play()
            }
        }
    };
    this.xhq = function() {
        if (!a.jwx.paused || (vit.gtm.grh != vit.yly.ggh && vit.gtm.grh != vit.yly.gbr)) {
            a.jwx.currentTime = 0
        }
    };
    this.stop = function() {
        if (a) {
            if (a.tns) {
                a.pbq = 0;
                if (a.jwx) {
                    a.jwx.stop(0);
                    a.jwx = null
                }
                clearTimeout(a.egl);
                if (a.wgu >= 0) {
                    clearTimeout(a.wgu);
                    a.wgu = -1
                }
            } else {
                if (a.jwx) {
                    a.jwx.currentTime = 0;
                    a.jwx.pause();
                    clearInterval(a.ayv);
                    if (a.wgu >= 0) {
                        clearTimeout(a.wgu);
                        a.wgu = -1
                    }
                }
            }
        }
    };
    this.load = function(e, c, d) {
        this.ntz = d[0];
        if (d.length >= 2) {
            this.aqk = d[1];
            this.kjl = e;
            this.fud = c
        }
        e += this.ntz + "?v=" + vit.iyt.znm;
        if (this.tns) {
            this.afd(e, c)
        } else {
            this.vdh(e)
        }
    };
    this.osj = function() {
        if (this.tns) {
            this.afd(this.kjl + this.aqk + "?v=" + vit.iyt.znm, this.fud)
        }
    };
    this.vdh = function(c) {
        this.jwx = new Audio();
        this.xfb = setTimeout(function() {
            console.error("can not load audio " + c);
            vit.iyt.tud.zve()
        }, this.ujp);
        this.jwx.addEventListener("canplaythrough", function() {
            this.removeEventListener("canplaythrough", arguments.callee, false);
            clearTimeout(a.xfb);
            vit.iyt.tud.lgx();
            a.pwi()
        }, false);
        this.jwx.addEventListener("error", function() {
            clearTimeout(a.xfb);
            console.error("can not load audio " + c);
            vit.iyt.tud.zve()
        }, false);
        this.jwx.volume = vit.vjo.value40 * this.volume;
        this.jwx.src = c;
        this.jwx.load()
    };
    this.afd = function(f, g) {
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
                vit.iyt.tud.lgx()
            }, function() {
                a.fks("can not decode audio ", f)
            })
        };
        c.onerror = function() {
            a.fks("can not load audio ", f)
        };
        try {
            c.send()
        } catch (d) {
            a.fks("can not load audio from ", f)
        }
    };
    this.fks = function(d, c) {
        console.error(d + c);
        if (a.aqk != "" && c.indexOf(a.aqk) < 0) {
            a.osj()
        } else {
            vit.iyt.tud.zve()
        }
    };
    this.vxa = function(c) {
        this.nyn = c;
        this.pwi()
    };
    this.pwi = function() {
        if (!this.tns) {
            if (this.nyn) {
                if (this.jwx) {
                    this.jwx.addEventListener("ended", function() {
                        a.nyn()
                    }, false)
                }
            }
            if (vit.gtm.grh == vit.yly.opm || vit.gtm.grh == vit.yly.qfk) {
                if (this.loop) {
                    if (this.jwx) {
                        this.jwx.addEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.jfo = function() {
        if (!this.iys) {
            if (this.nyn) {
                if (this.jwx) {
                    this.jwx.removeEventListener("ended", function() {
                        a.nyn()
                    }, false)
                }
            }
            if (vit.gtm.grh == vit.yly.opm || vit.gtm.grh == vit.yly.qfk) {
                if (this.loop) {
                    if (this.jwx) {
                        this.jwx.removeEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.gky = function(d, e, c) {
        if (this.tns === true && this.xzi) {
            this.volume = (this.muted === true) ? 0 : vit.vjo.value40 * d * this.ljh;
            if (e > 0) {
                this.xzi.gain.linearRampToValueAtTime(this.volume, webAudioEngine.currentTime + (e / 1000))
            } else {
                this.xzi.gain.setValueAtTime(this.volume, webAudioEngine.currentTime)
            }
            if (c === true) {
                this.wgu = setTimeout(this.stop, e)
            }
        } else {
            if (!this.tns && c === true) {
                this.wgu = setTimeout(this.stop, e)
            }
        }
    };
    this.hrx = function(c) {
        this.muted = c;
        if (!this.tns) {
            if (this.jwx && this.jwx.readyState > 0) {
                this.jwx.muted = c
            }
        } else {
            if (this.xzi) {
                this.xzi.gain.linearRampToValueAtTime((this.muted === true) ? 0 : vit.vjo.value40 * this.volume, webAudioEngine.currentTime)
            }
        }
    };
    this.clear = function() {
        if (this.tns) {
            if (this.jwx) {
                this.jwx.stop(0);
                clearTimeout(this.egl);
                this.jwx = null
            }
        } else {
            if (this.jwx && this.jwx.readyState > 0) {
                this.jwx.currentTime = 0;
                this.jwx.pause();
                if (this.nyn) {
                    this.jfo(this.nyn)
                }
                this.jwx = null
            }
        }
    };
    this.tve = function() {
        if (this.tns && this.pbq > 0) {
            return (webAudioEngine.currentTime - this.pbq) % this.sgj.duration
        }
        return 0
    }
}

function ktk() {
    var a = null;
    this.lri = "";
    var b = null;
    this.connect = function(c) {
        a = this;
        this.lri = c;
        b = new WebSocket(this.lri);
        b.onopen = function(d) {
            a.fuk(d)
        };
        b.onclose = function(d) {
            a.lbn(d)
        };
        b.onmessage = function(d) {
            a.ltx(d)
        };
        b.onerror = function(d) {
            a.yco(d)
        }
    };
    this.nkd = function(c) {};
    this.cch = function(c) {
        b.send(c)
    };
    this.fuk = function(c) {
        this.cch("A/u25vlt")
    };
    this.lbn = function(c) {};
    this.ltx = function(c) {
        this.nkd(c.data)
    };
    this.yco = function(c) {}
}

function gld() {
    var b = null;
    this.uhc = null;
    this.gfj = 0;
    this.cgm = -1;
    this.gba = -1;
    this.zdf = -1;
    this.bvc = 0;
    this.lri = "";
    this.zcw = "";
    this.axv = "";
    this.njg = "";
    this.xgb = "";
    this.znm = "";
    this.ixr = "";
    this.bij = "";
    this.gtg = [];
    this.cgq = [];
    this.mem = [];
    this.fwq = [];
    var g = false;
    var a = false;
    var d = false;
    var f = false;
    var c = null;
    var e = 1;
    this.zij = function(i) {
        this.uhc = i;
        b = this;
        g = false;
        a = false;
        d = false;
        f = false;
        c = new WebSocket(this.lri);
        c.onopen = function(j) {
            b.fuk(j)
        };
        c.onclose = function(j) {
            b.lbn(j)
        };
        c.onmessage = function(j) {
            b.ltx(j)
        };
        c.onerror = function(j) {
            b.yco(j)
        }
    };
    this.gte = function(i) {
        var j = parseInt(i.charAt(this.bvc), 16);
        this.bvc++;
        return j
    };
    this.sji = function(i) {
        var k = 0;
        var j = i.charAt(this.bvc);
        j += i.charAt(this.bvc + 1);
        this.bvc += 2;
        k = parseInt(j, 16);
        return k
    };
    this.xrv = function(m) {
        var j = this.ero(m);
        var n = [];
        for (var k = 0; k < j; k++) {
            n[k] = parseInt(m.charAt(this.bvc), 16);
            this.bvc += 1
        }
        return n
    };
    this.ero = function(n) {
        var m = 0;
        var j = parseInt(n.charAt(this.bvc), 16);
        this.bvc++;
        var o = "";
        for (var k = 0; k < j; k++) {
            o += n.charAt(this.bvc);
            this.bvc += 1
        }
        m = parseInt(o, 16);
        return m
    };
    this.dbh = function(i) {
        var j = "";
        if (this.bvc < i.length) {
            j = i.substring(this.bvc, i.length)
        }
        return j
    };
    this.nkd = function(i) {};
    this.qvi = function(o) {
        var u = o.substr(0, 2)
            , l = o.substring(2)
            , k = []
            , t = []
            , s = []
            , q = null;
        if (l && l.length > 0) {
            if (u === vit.yvn.nsg.kvb || u === vit.yvn.nsg.hnx) {
                k = l.split("|");
                for (var p = 0, r = k.length; p < r; p++) {
                    t = k[p].split(":");
                    if (u === vit.yvn.nsg.kvb && t.length >= 3) {
                        if (t[2].toLowerCase() != "mystery") {
                            this.gtg[p] = {
                                fxa: t[0]
                                , value: Number(t[1])
                                , itb: t[2]
                            };
                            if (t.length >= 5) {
                                this.gtg[p].xqb = t[3];
                                this.gtg[p].pyi = t[4]
                            }
                        }
                    } else {
                        if (u === vit.yvn.nsg.hnx && t.length >= 2) {
                            for (var p = 0, r = this.gtg.length; p < r; p++) {
                                if (this.gtg[p].fxa === t[0]) {
                                    this.gtg[p].value = Number(t[1])
                                }
                            }
                        }
                    }
                }
                if (u === vit.yvn.nsg.kvb) {
                    s = [];
                    for (var p = 0, r = this.gtg.length; p < r; p++) {
                        s.push({
                            fxa: this.gtg[p].fxa
                            , value: (Number)(this.gtg[p].fxa.split("_")[1])
                        })
                    }
                    s.sort(function(j, i) {
                        return j.value - i.value
                    });
                    for (var p = 0, r = this.gtg.length; p < r; p++) {
                        for (var n = 0, m = s.length; n < m; n++) {
                            if (this.gtg[p].fxa == s[n].fxa) {
                                this.gtg[p].yhm = n;
                                break
                            }
                        }
                    }
                } else {
                    if (u === vit.yvn.nsg.hnx) {
                        this.uhc.nyi(this.gtg)
                    }
                }
            } else {
                if (u === vit.yvn.nsg.enp) {
                    t = l.split(":");
                    if (t.length >= 3) {
                        q = {
                            fxa: t[0]
                            , value: Number(t[1])
                            , qqk: Number(t[2])
                        };
                        if (t.length >= 5) {
                            q.zcw = t[3];
                            q.zrj = t[4]
                        }
                        this.uhc.tmx(q)
                    }
                }
            }
        }
    };
    this.close = function() {
        g = true;
        if (c.readyState >= 2) {
            b.uhc.hxb.ybc()
        } else {
            b.cch("A/u260");
            if (vit.vjo.value66 > 0) {
                setTimeout(b.qhf, vit.vjo.value66)
            }
        }
    };
    this.fxn = function(i) {
        if (this.uhc.hxb.xny) {
            setTimeout(function() {
                window.location.reload()
            }, i)
        } else {
            this.uhc.hxb.ljw(e);
            setTimeout(function() {
                if (e < vit.vjo.value46) {
                    b.uhc.hxb.connect();
                    e++
                } else {
                    b.uhc.hxb.owa()
                }
            }, i)
        }
    };
    this.pgd = function() {
        return g
    };
    this.abf = function() {
        g = true;
        d = true;
        this.cch("A/u260");
        if (vit.vjo.value66 > 0) {
            setTimeout(this.qhf, vit.vjo.value66)
        }
    };
    this.lxy = function() {
        g = true;
        f = true;
        this.cch("A/u260");
        if (vit.vjo.value66 > 0) {
            setTimeout(this.qhf, vit.vjo.value66)
        }
    };
    this.fuk = function(i) {
        var j = -(new Date().getTimezoneOffset() / 60)
            , m = window.navigator.userLanguage || window.navigator.language
            , l = (vit.iyt) ? vit.gtm.grh + "|" + vit.iyt.nof + "|" + j + "|" + m : ""
            , k = (vit.iyt && vit.iyt.dos > 0) ? "," + vit.iyt.dos : "";
        a = false;
        this.uhc.vmg();
        this.cch("A/u25" + this.zcw + "," + this.axv + "," + this.njg + "," + this.xgb + "," + this.znm + "," + this.ixr + "," + this.bij + "," + l + k)
    };
    this.lbn = function(i) {
        if (a) {
            return
        }
        a = true;
        if (!g) {
            if (vit.gtm.grh == vit.yly.shq || vit.gtm.grh == vit.yly.jjx) {
                setTimeout(b.ryi, 500)
            } else {
                this.uhc.ybp()
            }
        } else {
            if (d) {
                if (vit.vjo.value13 == true) {
                    this.uhc.hxb.cec()
                } else {
                    this.uhc.hxb.wgq()
                }
            } else {
                if (f) {
                    this.uhc.hxb.iqu()
                } else {
                    this.uhc.hxb.zcq()
                }
            }
        }
    };
    this.ltx = function(i) {
        this.nkd(i.data)
    };
    this.yco = function(i) {};
    this.cch = function(i) {
        if (c.readyState >= 2) {
            this.lbn()
        }
        this.gfj = 0;
		var tmpPar=':::{"gameData":"'+i+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"JacksOrBetterAM"}';i=tmpPar;
        c.send(i)
    };
    this.ryi = function() {
        b.uhc.ybp()
    };
    this.qhf = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.lbn()
    }
}

function itw() {
    this.hxb = null;
    this.uth = null;
    this.lri = "";
    this.zcw = "";
    this.axv = "";
    this.njg = "";
    this.xgb = "";
    this.ixr = "";
    this.bij = "";
    this.vmg = function() {};
    this.ltx = function(a) {
        this.hxb.bco(a)
    };
    this.hly = function() {};
    this.ybp = function() {
        if (sessionStorage.sessionActive) {
            return
        }
        if (this.hxb != null && !this.uth.pgd()) {
            this.hxb.uco("Can not connect to gaming server!", true)
        }
    };
    this.yco = function(a) {
        if (this.uth.gfj == 1 && a.toLowerCase().indexOf("active") == 0) {
            sessionStorage.sessionActive = true
        }
        if (this.hxb != null) {
            this.hxb.gsw({
                type: "gameDataLoaded"
                , sender: this.hxb.xgb
                , lang: sessionStorage.sessionValue1.toUpperCase()
                , data: {
                    success: false
                }
            });
            this.hxb.uco(a, true)
        }
    };
    this.fxn = function(a) {
        this.uth.fxn(a)
    };
    this.pqf = function() {
        this.hxb.okl(this.uth.qqk)
    };
    this.nyi = function(a) {
        this.hxb.nyi(a)
    };
    this.tmx = function(a) {
        this.hxb.tmx(a)
    };
    this.xpe = function() {};
    this.wki = function() {
        this.hxb.wki()
    };
    this.zam = function() {
        this.hxb.zam()
    }
}

function qiw() {
    var b = null;
    this.hxb = null;
    this.lri = "";
    this.zcw = "";
    this.axv = "";
    this.njg = "";
    this.xgb = "";
    this.znm = " ";
    var c = null;
    var e = false;
    var a = false;
    var d = "StatsServer";
    this.htv = true;
    this.qaa = false;
    this.puj = false;
    this.bvc = 0;
    this.loe = 0;
    this.fgi = 0;
    this.ylm = 0;
    this.zjx = 0;
    this.zij = function(f, g) {
        this.lri = g;
        this.hxb = f;
        this.puj = false;
        return this
    };
    this.connect = function(g, j, i, k, f, l) {
        b = this;
        e = false;
        a = false;
        this.zcw = j;
        this.axv = i;
        this.njg = k;
        this.xgb = g;
        this.znm = f;
        this.htv = true;
        this.qaa = l;
        c = new WebSocket(this.lri);
        c.onopen = function(m) {
            b.fuk(m)
        };
        c.onclose = function(m) {
            b.lbn(m)
        };
        c.onmessage = function(m) {
            b.ltx(m)
        };
        c.onerror = function(m) {
            b.yco(m)
        }
    };
    this.gte = function(f) {
        var g = parseInt(f.charAt(this.bvc), 16);
        this.bvc++;
        return g
    };
    this.ero = function(k) {
        var j = 0;
        var f = parseInt(k.charAt(this.bvc), 16);
        this.bvc++;
        var m = "";
        for (var g = 0; g < f; g++) {
            m += k.charAt(this.bvc);
            this.bvc += 1
        }
        j = parseInt(m, 16);
        return j
    };
    this.nkd = function(i) {
        var k = this.hxb.vxx.szb("stats");
        if (i != null && i != "null" && i) {
            if (i == "010101010101010") {
                this.yfg()
            } else {
                this.bvc = 0;
                this.zdf = this.gte(i);
                if (this.zdf == 0) {
                    var j = [];
                    j[0] = this.ero(i);
                    j[1] = this.ero(i);
                    j[2] = this.ero(i);
                    j[3] = this.ero(i);
                    j[4] = this.ero(i);
                    j[5] = this.ero(i);
                    j[6] = this.ero(i);
                    if (vit.vjo.value36) {
                        this.fgi = j[0];
                        this.ylm = j[1];
                        this.zjx = j[2]
                    } else {
                        if (vit.vjo.value37) {
                            var g = vit.vjo.value39;
                            var f = j[4];
                            f = (g <= f) ? (this.qaa) ? 100 : g * 60000 : (g - f) * 60000;
                            this.loe = j[3] * 60000;
                            this.ylm = j[5];
                            this.zjx = j[6];
                            this.hxb.dvn(f);
                            if (!this.puj) {
                                this.puj = true;
                                this.hxb.iap(j[3] * 60000)
                            }
                            if (this.qaa) {
                                this.close(false)
                            }
                        }
                    }
                    if (!this.qaa) {
                        if (k) {
                            k.sfm(this.fgi, this.ylm, this.zjx, this.loe)
                        }
                    }
                } else {
                    console.error("Statistic error: " + i);
                    if (!this.qaa) {
                        if (k) {
                            k.sfm(0, 0, 0, 0)
                        }
                    }
                }
            }
        } else {
            console.error("no statistic data")
        }
    };
    this.yfg = function() {
        this.cch("A/u270," + this.xgb)
    };
    this.cch = function(f) {
        if (c && !e) {
            this.gfj = 0;
            c.send(f)
        }
    };
    this.close = function(f) {
        this.htv = f;
        if (c && c.readyState >= 2) {
            if (this.hxb && this.htv) {
                this.hxb.htv()
            }
        } else {
            this.cch("A/u260");
            if (vit.vjo.value66 > 0) {
                setTimeout(this.qhf, vit.vjo.value66)
            }
        }
        e = true
    };
    this.fuk = function(f) {
        a = false;
        this.cch("A/u25" + this.zcw + "," + this.axv + "," + this.njg + "," + d + "," + this.znm)
    };
    this.lbn = function(f) {
        if (a) {
            return
        }
        a = true;
        if (!e) {} else {
            if (!this.qaa) {
                if (this.hxb && this.htv) {
                    this.hxb.htv()
                }
            }
        }
    };
    this.ltx = function(f) {
        this.nkd(f.data)
    };
    this.yco = function(f) {};
    this.qhf = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.lbn()
    }
}

function qlq(a, d, b, c) {
    this.x = a || 0;
    this.y = d || 0;
    this.width = b || 0;
    this.height = c || 0;
    this.pky = function() {
        return this.x + this.width
    };
    this.rmb = function() {
        return this.y + this.height
    };
    this.xzf = function() {
        return this.x + this.width / 2
    };
    this.caq = function() {
        return this.y + this.height / 2
    };
    this.vrr = function(e, f) {
        if (e >= this.x && e <= this.x + this.width && f >= this.y && f <= this.y + this.height) {
            return true
        }
        return false
    };
    this.jpy = function(f, e) {
        this.x = Math.round(this.x * f);
        this.y = Math.round(this.y * e);
        this.width = Math.round(this.width * f);
        this.height = Math.round(this.height * e)
    }
}

function gbb() {
    this.grh = -1;
    this.wan = -1;
    this.jsk = false;
    this.uoh = false;
    this.xcn = false;
    this.dkg = false;
    this.fwy = false;
    this.kqc = false;
    this.quh = false;
    this.rme = true;
    this.qnf = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Ama_Android") >= 0) {
            this.jsk = true;
            this.xcn = true;
            this.grh = vit.yly.ggh
        } else {
            if (a.indexOf("Edge") >= 0) {
                if (a.indexOf("Phone") >= 0) {
                    this.xcn = true
                }
                this.grh = vit.yly.wqj
            } else {
                if (a.indexOf("Chrome") >= 0) {
                    if (a.indexOf("Android") >= 0) {
                        this.grh = vit.yly.gbr;
                        this.xcn = true
                    } else {
                        this.grh = vit.yly.ggh
                    }
                } else {
                    if (a.indexOf("Safari") >= 0) {
                        if (a.indexOf("Mobile") >= 0) {
                            if (a.indexOf("Android") >= 0) {
                                this.grh = vit.yly.uai;
                                this.xcn = true
                            } else {
                                this.grh = vit.yly.fyk;
                                this.xcn = true;
                                this.dkg = (a.indexOf("OS 7_") < 0 && !(a.indexOf("OS 8_") >= 0 && a.indexOf("CriOS") >= 0));
                                this.fwy = (a.indexOf("CriOS") < 0 && a.indexOf("Coast") < 0);
                                this.kqc = (a.indexOf("7.0 Mobile") >= 0)
                            }
                        } else {
                            this.grh = vit.yly.fbe
                        }
                    } else {
                        if (a.indexOf("Opera") >= 0) {
                            this.grh = vit.yly.lvf
                        } else {
                            if (a.indexOf("MSIE") >= 0 || a.indexOf("Trident/7") >= 0) {
                                if (a.indexOf("IEMobile/10") >= 0) {
                                    this.grh = vit.yly.hul;
                                    this.xcn = true
                                } else {
                                    if (window.innerHeight >= window.outerHeight) {
                                        this.grh = vit.yly.qfk;
                                        this.xcn = true
                                    } else {
                                        if (a.indexOf("Trident/7") >= 0 && a.indexOf("Tablet PC") >= 0) {
                                            this.grh = vit.yly.qfk;
                                            this.xcn = true
                                        } else {
                                            this.grh = vit.yly.opm
                                        }
                                    }
                                }
                            } else {
                                if (a.indexOf("iPad") >= 0) {
                                    this.grh = vit.yly.fyk;
                                    this.uoh = true;
                                    this.xcn = true
                                } else {
                                    if (a.indexOf("iPhone") >= 0) {
                                        this.grh = vit.yly.fyk;
                                        this.uoh = true;
                                        this.xcn = true
                                    } else {
                                        if (a.indexOf("Android") >= 0) {
                                            this.grh = vit.yly.jjx;
                                            this.xcn = true
                                        } else {
                                            this.grh = vit.yly.shq
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
    this.ygr = function() {
        var a = navigator.language.split("")[0];
        return a
    };
    this.hev = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Win") >= 0) {
            this.wan = vit.os.rop;
            if (a.indexOf("NT 5.1") >= 0 || a.indexOf("NT 5.2") >= 0) {
                this.quh = true
            }
        } else {
            if (a.indexOf("iPhone") >= 0 || a.indexOf("iPad") >= 0) {
                this.wan = vit.os.bxf
            } else {
                if (a.indexOf("Mac") >= 0) {
                    this.wan = vit.os.cmt
                } else {
                    if (a.indexOf("Android") >= 0) {
                        this.wan = vit.os.ref;
                        if (a.indexOf("Android 4.0") >= 0 || a.indexOf("Android 4.1") >= 0 || a.indexOf("Android 4.2") >= 0 || a.indexOf("Android 4.3") >= 0) {
                            this.rme = false
                        }
                    } else {
                        if (a.indexOf("Linux") >= 0) {
                            this.wan = vit.os.dqp
                        }
                    }
                }
            }
        }
    };
    this.rbs = function() {
        return this.kqc
    };
    this.bla = function() {
        return (this.fwy && !this.kqc)
    };
    this.aay = function() {
        return this.dkg
    };
    this.opt = function() {
        try {
            return window.self !== window.top
        } catch (a) {
            return true
        }
    };
    this.lpp = function() {
        return (document.documentElement.requestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullscreen)
    };
    this.uvg = function() {
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
    this.yeu = function() {
        return (this.pvi() === true)
    };
    this.pvi = function() {
        if ((screen.width <= vit.vjo.value73.w && screen.height <= vit.vjo.value73.h) || (screen.height <= vit.vjo.value73.w && screen.width <= vit.vjo.value73.h)) {
            return true
        }
        return false
    };
    this.jdm = function(i, j, k, n, e, b, f, l, m, a, d, g) {
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
    this.ggn = function(b, a) {
        if (b) {
            b.style.left = a.x + "px";
            b.style.top = a.y + "px";
            b.style.width = a.width + "px";
            b.style.height = a.height + "px"
        }
    };
    this.anw = function() {
        return (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
    };
    this.vvd = function() {
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
    this.ewg = function() {
        try {
            if (screen.orientation && screen.orientation.lock && screen.orientation.unlock) {
                return true
            }
        } catch (a) {
            return false
        }
        return false
    };
    this.mfj = function(b) {
        try {
            if (this.ewg() === true) {
                screen.orientation.lock(b)
            }
        } catch (a) {}
    };
    this.gro = function() {
        try {
            if (this.ewg() === true) {
                screen.orientation.unlock()
            }
        } catch (a) {}
    };
    this.fzv = function() {
        return false
    };
    this.gsw = function(a) {
        if (vit.vjo.value77 !== undefined && vit.vjo.value77) {
            if (a !== null && a !== undefined) {
                window.parent.postMessage(a, "*")
            }
        }
    };
    this.jrm = function(c, a) {
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
    this.mca = function() {
        var b = document.createElement("audio")
            , c = [];
        if (!!(b.canPlayType && b.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""))) {
            c.push(".ogg")
        }
        if (!!(b.canPlayType && b.canPlayType("audio/mpeg;").replace(/no/, ""))) {
            c.push(".mp3")
        }
        return c
    };
    this.xwp = function(q, o, f, l, k, a, p, d, r, g, n, j) {
        try {
            var m = 0
                , b = r
                , c = 1;
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
    this.gzk = function(q, o, f, l, k, a, p, d, s, g, r, n, j) {
        try {
            var m = 0
                , b = s
                , c = 1;
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
    this.adt = function(q, o, f, l, k, a, p, d, s, g, r, n, j) {
        try {
            var m = 0
                , b = s
                , c = 1;
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
    this.vis = function(r, m, t, k, j, q, p, n, c, d, u, b, z, s) {
        try {
            var l = 0
                , D = 0
                , E = 0
                , a = 0
                , g = []
                , f = ""
                , C = 0
                , F = 0
                , A = 0
                , G = 1;
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
    this.gzv = function(m, g, d, a, j, b, k, l, f) {
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
    this.bqh = function(n, i, f, a, k, c, m, b, l, g, o) {
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
    this.jpn = function(o, d, k, j, n, l, f, p, q, g, m, c) {
        try {
            var b = Math.round(f / 2)
                , i = 0
                , r = 1
                , a = 2
                , t = 3;
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
    this.hde = function(q, j, g, b, m, p, l, d, f, o, a, n, i, r) {
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
    this.ami = function(m, g, d, a, j, k, b, l, f, n) {
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
    this.xjw = function(k, g, d, c, i, a, j, f, l) {
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

function pzb() {
    this.parent = null;
    this.context2D = null;
    this.nxv = null;
    this.riv = null;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.uho = true;
    this.uxb = false;
    this.zij = function(a, d, c) {
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
                this.nxv = document.createElement("canvas");
                this.nxv.width = this.width;
                this.nxv.height = this.height;
                this.context2D = this.nxv.getContext("2d");
                if (c) {
                    this.riv = c
                }
            }
            this.uxb = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.giu = function(a) {
        try {
            this.x = a.x || 0;
            this.y = a.y || 0;
            this.width = a.width || 0;
            this.height = a.height || 0;
            if (this.nxv) {
                this.nxv.width = this.width;
                this.nxv.height = this.height
            }
            this.uxb = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.yek = function(a) {};
    this.zxd = function(a) {};
    this.ief = function(a, b) {
        this.uho = a;
        if (b && b === true) {
            this.parent.isl(this.x, this.y, this.width, this.height)
        }
    };
    this.zeb = function() {
        return (this.uho && !this.uxb)
    };
    this.isl = function() {}
}

function ejr() {
    this.ivz = null;
    this.zjd = null;
    this.rrz = -1;
    this.smg = -1;
    this.aff = false;
    this.csv = false;
    this.ilo = false;
    this.sgv = 0;
    this.dlf = 0;
    var a = 200;
    this.zij = function(c, f, d, b, e) {
        this.ivz = b;
        this.zjd = e;
        ejr.prototype.zij.call(this, c, f, d)
    };
    this.eqb = function(b, d, c) {
        this.aff = b;
        c = (c === false) ? false : true;
        if (d && d === true && this.zeb()) {
            this.parent.isl(this.x, this.y, this.width, this.height)
        }
        if (this.aff === true && c === true) {
            clearTimeout(this.sgv);
            this.sgv = setTimeout(this.aez, a)
        }
    };
    this.xoe = function() {
        return this.aff
    };
    this.ixb = function(b, c) {
        this.ilo = b;
        c = (c === false) ? false : true;
        clearTimeout(this.dlf);
        if (this.ilo === true && c === true) {
            this.dlf = setTimeout(this.nca, a)
        }
    };
    this.umv = function() {
        return this.ilo
    };
    this.xqa = function(b, c) {
        this.zjd = b;
        if (c && c === true && this.zeb()) {
            this.parent.isl(this.x, this.y, this.width, this.height)
        }
    };
    this.umq = function(b) {
        this.csv = b
    };
    this.ijh = function() {
        return this.csv
    };
    this.vve = function() {};
    this.nca = function() {};
    this.aez = function() {}
}
ejr.prototype = new pzb;

function tpq() {
    var a = this;
    this.yaa = null;
    this.value = "";
    this.qwa = false;
    this.nop = "round";
    this.dpv = null;
    this.yjy = "bold";
    this.blt = null;
    this.jjq = null;
    this.eqn = null;
    this.jwt = null;
    this.nis = null;
    this.kmo = 0;
    this.qkr = 6;
    this.txo = -2;
    this.key = 2;
    this.emc = -4;
    this.kzn = 8;
    this.euo = 26;
    this.jno = 0;
    this.zev = 1;
    this.hvx = 0;
    this.iyn = 0;
    this.lwr = -1;
    this.ywx = 10;
    this.wzl = 0;
    this.kbx = 0;
    this.efp = false;
    this.lfj = -1;
    this.fjk = true;
    this.zij = function(d, g, e, c, b, f) {
        tpq.prototype.zij.call(this, d, g, e, c, f);
        this.yaa = b;
        if (this.ivz) {
            this.kmo = Math.round(this.ivz.height / 2)
        }
    };
    this.yek = function(b) {
        try {
            this.nop = b.gfk;
            this.dpv = b.font;
            this.yjy = b.exc;
            this.blt = b.backgroundColor;
            this.jjq = b.sqp;
            this.eqn = b.rbc;
            this.jwt = b.bex;
            if (b.borderColor && b.axt) {
                this.nis = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.nis.addColorStop(0, b.borderColor);
                this.nis.addColorStop(1, b.axt)
            } else {
                this.nis = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.zxd = function(b) {
        try {
            this.euo = b.qim;
            this.jno = b.lha;
            this.qkr = b.wzy;
            this.txo = b.guo;
            this.key = b.kxg;
            this.emc = b.ukh;
            this.kzn = b.edp;
            this.zev = b.zqj
        } catch (c) {
            console.error(c)
        }
    };
    this.jar = function() {
        if (this.xep()) {
            clearInterval(this.lfj);
            this.lfj = -1
        }
        this.fjk = false;
        this.lfj = setInterval(this.ysa, 400)
    };
    this.vrd = function() {
        this.fjk = true;
        clearInterval(this.lfj);
        this.lfj = -1;
        this.thf(false)
    };
    this.thf = function(b, c) {
        this.efp = b;
        c = (c === false) ? false : true;
        if (c === true && this.zeb() === true) {
            this.parent.isl(this.x, this.y, this.width, this.height)
        }
    };
    this.xep = function() {
        return (this.lfj >= 0)
    };
    this.kii = function(b, c) {
        this.value = b;
        if (c && c === true && this.zeb()) {
            this.parent.isl(this.x, this.y, this.width, this.height)
        }
    };
    this.qjk = function(b) {
        this.hvx = Math.round(b / this.ywx);
        this.wzl = 0;
        this.kbx = 0;
        this.iyn = new Date().getTime();
        this.lwr = setTimeout(this.zpp, this.hvx)
    };
    this.kdl = function() {
        if (a.lwr >= 0) {
            clearTimeout(a.lwr);
            a.lwr = -1
        }
        a.wzl = 0;
        a.aez()
    };
    this.pwn = function() {
        if (a.lwr >= 0) {
            clearInterval(a.lwr);
            a.lwr = -1
        }
        a.wzl = 1;
        a.aez()
    };
    this.zpp = function() {
        var b = 0
            , c = new Date().getTime();
        a.kbx += 1;
        if (a.kbx < a.ywx) {
            a.wzl += 1 / a.ywx;
            a.parent.isl(a.x, a.y, a.width, a.height);
            b = a.hvx + (a.kbx * a.hvx - (c - a.iyn));
            a.lwr = setTimeout(a.zpp, b)
        } else {
            a.pwn()
        }
    };
    this.isl = function() {
        if (!this.zeb()) {
            return
        }
        var g = null
            , f = 0
            , c = 0
            , n = 0
            , k = 0
            , l = this.width / 2 - this.zev
            , d = (this.nop === "roundedT" || this.nop === "roundedL") ? this.kzn : 0
            , b = (this.nop === "roundedT" || this.nop === "roundedR") ? this.kzn : 0
            , o = (this.nop === "roundedB" || this.nop === "roundedR") ? this.kzn : 0
            , q = (this.nop === "roundedB" || this.nop === "roundedL") ? this.kzn : 0
            , e = 1
            , m = String(this.value)
            , p = this.context2D;
        p.save();
        p.textAlign = "center";
        p.textBaseline = "bottom";
        if (this.efp || this.wzl >= 1) {
            if (this.nop === "round") {
                vit.gtm.xjw(p, this.x + this.width / 2, this.y + this.height / 2, l, this.jjq, 1, this.nis, this.zev, 1)
            } else {
                if (this.nop === "rect") {
                    vit.gtm.gzv(p, this.x, this.y, this.width, this.height, this.kzn, this.jjq, this.nis, this.zev)
                } else {
                    if (this.nop === "roundedT" || this.nop === "roundedB" || this.nop === "roundedR" || this.nop === "roundedL") {
                        vit.gtm.hde(p, this.x, this.y, this.width, this.height, d, b, o, q, this.jjq, 1, this.nis, this.zev, 1)
                    }
                }
            }
            if (this.yaa || this.ivz) {
                if (this.xoe()) {
                    p.drawImage((this.yaa) ? this.yaa : this.ivz, 0, this.kmo, this.ivz.width, this.kmo, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage((this.yaa) ? this.yaa : this.ivz, 0, 0, this.ivz.width, this.kmo, this.x, this.y, this.width, this.height)
                }
            }
        } else {
            if (this.qwa && this.ijh() === false) {
                p.globalAlpha = 0.5
            }
            if (this.wzl > 0) {
                if (this.nop === "round") {
                    vit.gtm.xjw(p, this.x + this.width / 2, this.y + this.height / 2, l, this.blt, 1 - this.kbx / this.ywx, this.nis, this.zev, 1);
                    vit.gtm.xjw(p, this.x + this.width / 2, this.y + this.height / 2, l, this.jjq, this.kbx / this.ywx)
                } else {
                    if (this.nop === "rect") {
                        nvd = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                        nvd.addColorStop(1 - this.wzl, this.blt);
                        nvd.addColorStop(1 - this.wzl, this.jjq);
                        vit.gtm.bqh(p, this.x, this.y, this.width, this.height, this.kzn, nvd, 1, this.nis, this.zev, 1)
                    } else {
                        if (this.nop === "roundedT" || this.nop === "roundedB" || this.nop === "roundedR" || this.nop === "roundedL") {
                            nvd = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                            nvd.addColorStop(1 - this.wzl, this.blt);
                            nvd.addColorStop(1 - this.wzl, this.jjq);
                            vit.gtm.hde(p, this.x, this.y, this.width, this.height, d, b, o, q, nvd, 1, this.nis, this.zev, 1)
                        }
                    }
                }
            } else {
                if (this.nop === "round") {
                    vit.gtm.xjw(p, this.x + this.width / 2, this.y + this.height / 2, l, this.blt, 1, this.nis, this.zev, 1)
                } else {
                    if (this.nop === "rect") {
                        vit.gtm.gzv(p, this.x, this.y, this.width, this.height, this.kzn, this.blt, this.nis, this.zev)
                    } else {
                        if (this.nop === "roundedT" || this.nop === "roundedB" || this.nop === "roundedR" || this.nop === "roundedL") {
                            vit.gtm.hde(p, this.x, this.y, this.width, this.height, d, b, o, q, this.blt, 1, this.nis, this.zev, 1)
                        }
                    }
                }
            }
            if (this.ivz) {
                if (this.xoe()) {
                    p.drawImage(this.ivz, 0, this.kmo, this.ivz.width, this.kmo, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage(this.ivz, 0, 0, this.ivz.width, this.kmo, this.x, this.y, this.width, this.height)
                }
            }
        }
        if (m && this.jno > 0) {
            f = (this.xoe()) ? 2 : 0;
            c = this.jno;
            p.font = this.yjy + " " + c + "px " + this.dpv;
            p.fillStyle = this.jwt;
            n = p.measureText(m).width;
            if (n > this.width - 2 * this.qkr) {
                e = ((this.width - 2 * this.qkr) / n);
                c = Math.round(e * c) - 1;
                p.font = this.yjy + " " + c + "px " + this.dpv
            }
            if (c > this.height / 2 - this.qkr) {
                e = ((this.height / 2 - this.qkr) / c);
                c = Math.round(e * c) - 1;
                p.font = this.yjy + " " + c + "px " + this.dpv
            }
            k = (this.height / 2 - c) / 2;
            k += c;
            p.fillText(m, this.x + this.width / 2 + this.txo, this.y - this.emc + k + f)
        }
        if (this.zjd && this.zjd != "" && this.euo > 0) {
            g = this.zjd.split("|");
            f = (this.xoe()) ? 2 : 0;
            c = this.euo;
            p.font = this.yjy + " " + c + "px " + this.dpv;
            p.fillStyle = this.eqn;
            for (var j = 0; j < g.length; j++) {
                n = (p.measureText(g[j]).width > n) ? p.measureText(g[j]).width : n
            }
            if (n > this.width - 2 * this.qkr) {
                e = ((this.width - 2 * this.qkr) / n);
                c = Math.round(e * c) - 1;
                p.font = this.yjy + " " + c + "px " + this.dpv
            }
            if (this.jno > 0) {
                if (c * g.length > this.height / 2 - this.qkr) {
                    e = ((this.height / 2 - this.qkr) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.yjy + " " + c + "px " + this.dpv
                }
                k = this.height / 2 + (this.height / 2 - c * g.length) / 2
            } else {
                if (c * g.length > this.height - 2 * this.qkr) {
                    e = ((this.height - 2 * this.qkr) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.yjy + " " + c + "px " + this.dpv
                }
                k = (this.height - c * g.length) / 2
            }
            k += c;
            for (var j = 0; j < g.length; j++) {
                p.fillText(g[j], this.x + this.width / 2 + this.txo, this.y - this.key + k + f);
                k += c
            }
        }
        p.restore();
        if (this.riv && this.nxv) {
            this.riv.drawImage(this.nxv, this.x, this.y)
        }
    };
    this.ysa = function() {
        if (!a.fjk) {
            a.thf(!a.efp)
        }
    };
    this.nca = function() {
        a.ilo = false
    };
    this.aez = function() {
        a.aff = false;
        if (a.zeb()) {
            a.parent.isl(a.x, a.y, a.width, a.height)
        }
    }
}
tpq.prototype = new ejr;

function bjo() {
    this.tnt = 0;
    this.kse = [];
    this.zij = function(a, c, b) {
        bjo.prototype.zij.call(this, a, c, b);
        this.tnt = 0;
        this.kse = []
    };
    this.iqi = function(a, b) {
        if (b && b === true) {
            this.kse.unshift(a)
        } else {
            this.kse.push(a)
        }
    };
    this.bbe = function(a) {
        if (a && a === true) {
            this.kse.shift()
        } else {
            this.kse.pop()
        }
    };
    this.vuo = function(a) {
        this.tnt = a
    };
    this.kxh = function() {
        return this.tnt
    };
    this.isl = function() {
        if (!this.zeb() || !this.parent.tgx()) {
            return
        }
        if (this.tnt < this.kse.length) {
            this.kse[this.tnt].isl()
        }
        try {
            if (this.riv && this.nxv) {
                this.riv.drawImage(this.nxv, this.x, this.y)
            }
        } catch (a) {}
    }
}
bjo.prototype = new pzb;

function xbo() {
    var a = this;
    this.iye = null;
    this.tnt = 0;
    this.kse = [];
    this.blt = null;
    this.ujz = null;
    this.jvo = null;
    this.sdg = new qlq();
    this.zij = function(b, d, c) {
        xbo.prototype.zij.call(this, b, d, c);
        this.uho = false;
        this.tnt = 0;
        this.kse = [];
        this.ozo()
    };
    this.ozo = function() {
        this.iye = new cia();
        this.iye.zij();
        this.iye.mzk("buttons")
    };
    this.zxd = function(f) {
        try {
            var d = this.iye.rys("buttons")
                , c = 0
                , b = d.length;
            this.sdg = f.kju;
            for (; c < b; c++) {
                d[c].zxd(f.zoc)
            }
            this.iye.nxn("return", "#giu", [f.biq]);
            this.iye.nxn("page", "#giu", [f.tfk]);
            this.iye.nxn("prev", "#giu", [f.vqc]);
            this.iye.nxn("next", "#giu", [f.uea])
        } catch (g) {
            console.error(g)
        }
    };
    this.yek = function(d) {
        try {
            var f = this.iye.rys("buttons");
            this.blt = d.backgroundColor;
            this.ujz = d.pfp;
            this.jvo = d.irj;
            for (var c = 0, b = f.length; c < b; c++) {
                f[c].yek((this.parent.vkm.sdv === false) ? d.efj : (this.parent.nof === vit.vkm.yvt) ? d.qhg : d.lxj)
            }
        } catch (g) {
            console.error(g)
        }
    };
    this.kng = function(m, l) {
        var k = this.iye.rys("buttons")
            , g = this.iye.szb("return")
            , c = m - this.x
            , n = l - this.y;
        for (var e = 0, f = k.length; e < f; e++) {
            var b = k[e];
            if (c >= b.x && c <= b.x + b.width && n >= b.y && n <= b.y + b.height && b.zeb() == true) {
                if (b.ijh() && !b.umv()) {
                    if (b != g) {
                        b.eqb(true, true)
                    }
                    this.parent.tud.qic("btn");
                    this.parent.tud.jfc("btn");
                    b.vve();
                    for (var d = 0; d < f; d++) {
                        k[d].ixb(true)
                    }
                    return true
                }
            }
        }
        return false
    };
    this.szw = function() {
        var e = this.iye.rys("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.xoe() === true) {
                c.eqb(false, true);
                return true
            }
        }
        return false
    };
    this.zls = function(k) {
        var g = this.iye.rys("buttons")
            , c = this.iye.szb("return");
        for (var f = 0, b = g.length; f < b; f++) {
            var d = g[f];
            if (k == d.rrz) {
                if (d.ijh() && !d.umv()) {
                    if (d != c) {
                        d.eqb(true, true)
                    }
                    this.parent.tud.qic("btn");
                    this.parent.tud.jfc("btn");
                    d.vve();
                    for (var e = 0; e < b; e++) {
                        g[e].ixb(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.gjg = function() {
        var e = this.iye.rys("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.xoe() === true) {
                c.eqb(false, true);
                return true
            }
        }
        return false
    };
    this.iqi = function(b, c) {
        if (c && c === true) {
            this.kse.unshift(b);
            this.tnt++
        } else {
            this.kse.push(b)
        }
    };
    this.bbe = function(b) {
        if (b && b === true) {
            this.kse.shift();
            this.tnt--
        } else {
            this.kse.pop()
        }
    };
    this.ybf = function() {
        return this.kse.length
    };
    this.qyf = function(e, c, b) {
        var d = (this.parent.vkm.sdv === false) ? c.efj : (this.parent.nof === vit.vkm.yvt) ? c.qhg : c.lxj;
        if (this.parent.mwk === false) {
            this.iye.eiu("return", this.gki(e.biq, this.parent.language.ret, (this.parent.vkm.osy === false) ? b : this.parent.tud.dra("btn_re"), this.cgp, (this.parent.ulp.epy) ? this.parent.ulp.epy : null, e.zoc, d), ["buttons"]);
            this.iye.eiu("page", this.gki(e.tfk, (this.tnt + 1) + "/" + this.kse.length, b, this.rcz, null, e.zoc, d), ["buttons"]);
            this.iye.eiu("prev", this.gki(e.vqc, this.parent.language.jes, (this.parent.vkm.osy === false) ? b : this.parent.tud.dra("btn_pr"), this.xio, (this.parent.ulp.iwm) ? this.parent.ulp.iwm : null, e.zoc, d), ["buttons"]);
            this.iye.eiu("next", this.gki(e.uea, this.parent.language.kgz, (this.parent.vkm.osy === false) ? b : this.parent.tud.dra("btn_ne"), this.rcz, (this.parent.ulp.rxc) ? this.parent.ulp.rxc : null, e.zoc, d), ["buttons"])
        }
    };
    this.gki = function(g, j, b, i, d, f, e) {
        var c = new tpq();
        c.zij(g, this.context2D, null, b, null, j);
        c.parent = this;
        c.vve = i;
        c.zxd(f);
        c.yek(e);
        if (d) {
            c.rrz = d.vql
        }
        return c
    };
    this.isl = function(l, j, m, e) {
        if (!this.zeb() || !this.parent.tgx()) {
            return
        }
        var b = (l != null && j != null && m != null && e != null)
            , n = this.context2D
            , k = null
            , g = this.iye.rys("buttons")
            , d = null;
        if (this.parent.vkm.sdv === false) {
            d = this.parent.tud.dra("btn_back")
        } else {
            if (this.parent.nof === vit.vkm.yvt) {
                d = (this.parent.tud.dra("h_right" + this.tnt) != null) ? this.parent.tud.dra("h_right" + this.tnt) : this.parent.tud.dra("h_right")
            } else {
                d = (this.parent.tud.dra("h_left" + this.tnt) != null) ? this.parent.tud.dra("h_left" + this.tnt) : this.parent.tud.dra("h_left")
            }
        }
        n.save();
        if (b) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        if (this.tnt >= 0 && this.tnt < this.kse.length) {
            this.kse[this.tnt].isl()
        }
        if (d) {
            k = n.createLinearGradient(this.sdg.x, this.sdg.y, this.sdg.x + this.sdg.width, this.sdg.y);
            k.addColorStop(0.2, this.ujz);
            k.addColorStop(1, this.jvo);
            n.fillStyle = k;
            n.save();
            if (this.parent.vkm.sdv === false) {
                if (this.parent.nof === vit.vkm.hws) {
                    n.translate(this.sdg.width / 2, this.sdg.height / 2);
                    n.rotate(Math.PI);
                    n.translate(-this.sdg.width / 2, -this.sdg.height / 2)
                }
                n.fillRect(this.sdg.x, this.sdg.y, this.sdg.width, this.sdg.height)
            }
            n.drawImage(d, this.sdg.x, this.sdg.y, this.sdg.width, this.sdg.height);
            n.restore()
        } else {
            if (this.blt != null) {
                n.fillStyle = this.blt;
                n.fillRect(this.sdg.x, this.sdg.y, this.sdg.width, this.sdg.height)
            }
        }
        for (var c = 0, f = g.length; c < f; c++) {
            g[c].isl()
        }
        n.restore();
        if (this.riv && this.nxv) {
            if (b) {
                this.riv.drawImage(this.nxv, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.riv.drawImage(this.nxv, this.x, this.y)
            }
        }
    };
    this.faa = function(f, g) {
        var e = this.iye.szb("page")
            , c = this.iye.szb("return")
            , b = this.iye.szb("next")
            , d = this.iye.szb("prev");
        if (e != null) {
            e.xqa((this.tnt + 1) + "/" + this.kse.length)
        }
        if (c != null) {
            c.ief(f)
        }
        if (b != null && d != null && e != null) {
            if (f) {
                if (this.kse.length > 1) {
                    b.ief(f);
                    d.ief(f);
                    e.ief(f)
                } else {
                    b.ief(false);
                    d.ief(false);
                    e.ief(false)
                }
            } else {
                b.ief(f);
                d.ief(f);
                e.ief(f)
            }
        }
        if (g && g === true) {
            this.isl()
        }
    };
    this.lyq = function() {
        this.tnt = 0;
        this.faa(true);
        this.ief(true, true)
    };
    this.duw = function() {
        this.faa(false);
        this.ief(false, true)
    };
    this.sxa = function() {
        var d = this.iye.szb("page")
            , b = this.iye.szb("next")
            , c = this.iye.szb("prev");
        this.tnt = (this.tnt < this.kse.length) ? this.tnt : this.kse.length - 1;
        this.tnt = (this.tnt < 0) ? 0 : this.tnt;
        d.xqa((this.tnt + 1) + "/" + this.kse.length, true);
        if (this.kse.length == 1) {
            b.ief(false);
            c.ief(false);
            d.ief(false)
        } else {
            b.ief(true);
            c.ief(true);
            d.ief(true)
        }
    };
    this.ahn = function(c) {
        var e = this.iye.rys("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            e[d].umq(c)
        }
    };
    this.cgp = function() {
        a.parent.hsm()
    };
    this.rcz = function() {
        var b = a.iye.szb("page");
        if (a.tnt < a.kse.length - 1) {
            a.tnt++
        } else {
            a.tnt = 0
        }
        if (b) {
            b.xqa((a.tnt + 1) + "/" + a.kse.length, false)
        }
        a.isl()
    };
    this.xio = function() {
        var b = a.iye.szb("page");
        if (a.tnt > 0) {
            a.tnt--
        } else {
            a.tnt = a.kse.length - 1
        }
        if (b) {
            b.xqa((a.tnt + 1) + "/" + a.kse.length, false)
        }
        a.isl()
    }
}
xbo.prototype = new pzb;

function zlz() {
    this.ivz = new Image();
    this.itb = null;
    this.ldn = [];
    this.zrg = [];
    this.xfn = null;
    this.dpv = null;
    this.yjy = "bold";
    this.qch = null;
    this.eqn = null;
    this.sog = null;
    this.npo = 0;
    this.cfv = [];
    this.ssa = null;
    this.blc = 40;
    this.qyx = 18;
    this.jmp = 1;
    this.zij = function(b, d, c, a) {
        this.ivz = a;
        this.ldn = [];
        this.cfv = [];
        zlz.prototype.zij.call(this, b, d, c)
    };
    this.zxd = function(a) {
        try {
            this.ssa = a.vuf;
            this.cfv = a.fzt;
            this.qyx = a.fontSize;
            this.blc = a.jbh;
            this.jmp = a.lineWidth
        } catch (b) {
            console.error(b)
        }
    };
    this.yek = function(a) {
        try {
            this.xfn = a.vpx;
            this.dpv = a.font;
            this.yjy = a.exc;
            this.qch = a.kdr;
            this.eqn = a.rbc;
            this.sog = a.xpx
        } catch (b) {
            console.error(b)
        }
    };
    this.isl = function() {
        if (!this.zeb()) {
            return
        }
        var b = this.context2D;
        b.save();
        b.fillStyle = this.eqn;
        if (this.qch) {
            b.strokeStyle = this.qch
        }
        b.lineJoin = "round";
        b.lineCap = "round";
        b.lineWidth = this.jmp;
        b.font = this.yjy + " " + this.qyx + "px " + this.dpv;
        b.textBaseline = "bottom";
        b.textAlign = "center";
        b.drawImage(this.ivz, 0, 0);
        if ((this.height - this.ivz.height) > 0) {
            var a = this.parent.sdg;
            b.drawImage(this.ivz, a.x, a.y, a.width, this.ivz.height - a.y, a.x, a.y, a.width, a.height)
        }
        if (this.itb && this.ssa) {
            vit.gtm.xwp(b, this.itb, this.sog, this.ssa.x, this.ssa.y, this.ssa.width, this.ssa.height, this.xfn, this.blc, this.yjy)
        }
        for (var c = 0; c < this.ldn.length; c++) {
            this.vis(this.ldn[c], this.cfv[c], this.qyx, this.dpv)
        }
        b.restore();
        if (this.riv && this.nxv) {
            this.riv.drawImage(this.nxv, this.x, this.y)
        }
    };
    this.tlr = function(j, f, g, d) {
        var b = this.context2D
            , c = 0;
        this.zrg = [];
        b.save();
        b.font = this.yjy + " " + g + "px " + d;
        this.yrj(b, g, j, f, d);
        for (var e = 0, a = this.zrg.length; e < a; e++) {
            c = (f.height + this.npo) / (this.zrg.length + 1) * (e + 1);
            b.fillText(this.zrg[e], (f.x), f.y + c);
            if (this.qch != null && b.lineWidth >= 1) {
                b.strokeText(this.zrg[e], (f.x), f.y + c)
            }
        }
        b.restore()
    };
    this.vis = function(g, e, f, c) {
        var a = this.context2D
            , b = 0;
        this.zrg = [];
        a.save();
        a.font = this.yjy + " " + f + "px " + c;
        this.yrj(a, f, g, e, c);
        for (var d = 0; d < this.zrg.length; d++) {
            b = (e.height + this.npo) / (this.zrg.length + 1) * (d + 1);
            a.fillText(this.zrg[d], (e.x + e.width / 2), e.y + b);
            if (this.qch != null && a.lineWidth >= 1) {
                a.strokeText(this.zrg[d], (e.x + e.width / 2), e.y + b)
            }
        }
        a.restore()
    };
    this.yrj = function(m, o, l, g, b) {
        var a = 1
            , k = 0
            , j = ""
            , f = 0
            , d = 0
            , c = 0
            , n = 0;
        n = m.measureText(l).width / g.width;
        n = (n >= Math.round(n)) ? Math.round(n) + 1 : Math.round(n);
        this.npo = o;
        if (this.npo * n > g.height) {
            a = g.height / (this.npo * n);
            this.npo = Math.round(a * this.npo) - 1;
            m.font = this.yjy + " " + this.npo + "px " + b;
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
                this.zrg[d] = l.substring(c, l.length)
            } else {
                if (l.charAt(e) == "|") {
                    this.zrg[d] = l.substring(c, e);
                    d++;
                    c = e + 1;
                    j = l.substring(f + 1, e)
                } else {
                    if (k >= g.width) {
                        this.zrg[d] = l.substring(c, f);
                        d++;
                        c = f + 1;
                        j = l.substring(f + 1, e)
                    }
                }
            }
        }
    }
}
zlz.prototype = new pzb;

function suv() {
    var a = this;
    this.ivz = new Image();
    this.aiy = "";
    this.dli = "";
    this.wff = -1;
    this.lrr = 0;
    this.gfq = 0;
    this.zyl = 5000;
    this.dpv = null;
    this.yjy = "bold";
    this.eqn = null;
    this.blt = null;
    this.lqc = null;
    this.kzn = 0;
    this.lme = 0;
    this.qkr = 0;
    this.zev = 0;
    this.qwx = 0;
    this.qyx = 0;
    this.fil = null;
    this.caa = 0;
    this.xak = [];
    this.yes = 0;
    this.aci = true;
    this.bqa = 0;
    this.zxd = function(b) {
        try {
            this.qyx = b.fontSize;
            this.qwx = b.hpu;
            this.kzn = b.edp;
            this.lme = b.fuh;
            this.qkr = b.wzy;
            this.zev = b.zqj
        } catch (c) {
            console.error(c)
        }
    };
    this.yek = function(b) {
        try {
            this.dpv = b.font;
            this.yjy = b.exc;
            this.blt = b.backgroundColor;
            this.eqn = b.rbc;
            this.lqc = b.borderColor
        } catch (c) {
            console.error(c)
        }
    };
    this.tep = function(e, c, d, b) {
        this.aiy = e;
        this.dli = c;
        this.wff = d;
        this.lrr = b;
        this.aci = true;
        clearTimeout(this.bqa);
        if (this.zeb() === true) {
            this.parent.isl(this.x, this.y, this.width, this.height)
        }
    };
    this.ila = function(b, c) {
        this.aiy = b;
        this.dli = undefined;
        this.aci = c;
        if (this.aci) {
            clearTimeout(this.bqa)
        }
        if (this.zeb() === true) {
            this.parent.isl(this.x, this.y, this.width, this.height)
        }
    };
    this.bmy = function() {
        this.aiy = "";
        this.dli = undefined;
        this.aci = true;
        clearTimeout(this.bqa);
        if (this.zeb() === true) {
            this.parent.isl(this.x, this.y, this.width, this.height)
        }
    };
    this.uxs = function(b, c) {
        this.caa = 0;
        this.yes = b;
        this.aci = false;
        if (c && c > 0) {
            this.bqa = setTimeout(this.gox, c)
        } else {
            this.bqa = setTimeout(this.gox, this.zyl)
        }
    };
    this.rih = function(b) {
        this.caa = 0;
        this.yes = b;
        if (this.aci) {
            this.ila(this.xak[this.yes][this.caa], false)
        }
        this.aci = false;
        this.bqa = setTimeout(this.gox, this.zyl)
    };
    this.mbf = function() {
        this.aci = false;
        this.bqa = setTimeout(this.gox, this.zyl)
    };
    this.skl = function() {
        this.aci = true;
        clearTimeout(this.bqa)
    };
    this.ema = function() {
        return this.aci
    };
    this.gox = function() {
        if (!a.aci) {
            a.caa = (a.xak[a.yes][a.caa + 1] != undefined) ? a.caa + 1 : 0;
            a.bqa = setTimeout(a.gox, a.zyl);
            a.ila(a.xak[a.yes][a.caa], a.aci)
        }
    };
    this.ljz = function(b) {
        this.xak[b] = []
    };
    this.wrm = function(d, b) {
        for (var c = 0; c < d.length; c++) {
            this.xak[b][c] = d[c]
        }
    };
    this.omu = function(b) {
        this.fil = b
    };
    this.isl = function() {
        if (!this.zeb()) {
            return
        }
        var o = this.context2D
            , m = this.qyx
            , b = 0
            , k = 0
            , l = 0
            , j = 0
            , n = 0
            , s = 0
            , x = 0
            , e = 0
            , g = []
            , d = ""
            , v = 0
            , y = 0
            , t = 0
            , f = 1
            , r = 0
            , q = (this.lqc && this.zev) ? this.qkr + this.zev : this.qkr;
        o.save();
        if (this.blt) {
            vit.gtm.gzv(o, this.x, this.y, this.width, this.height, this.kzn, this.blt, this.lqc, this.zev)
        } else {
            if (this.fil) {
                o.putImageData(this.fil, this.x, this.y)
            }
        }
        o.lineJoin = "round";
        o.lineCap = "round";
        o.fillStyle = this.eqn;
        o.font = this.yjy + " " + m + "px " + this.dpv;
        o.textBaseline = "bottom";
        o.textAlign = "center";
        l = o.measureText(this.aiy).width;
        b += l;
        n = o.measureText("WW").width;
        if (this.dli != undefined && this.wff >= 0) {
            j = o.measureText(this.dli).width;
            b += j;
            b += this.lrr * (this.ivz.width + this.lme);
            if (this.lrr % 2 != 0) {
                s = this.x + (this.width) / 2 - (this.lrr / 2) * (this.ivz.width + this.lme);
                x = s - n;
                e = s + (this.lrr) * (this.ivz.width + this.lme) + n
            } else {
                s = this.x + (this.width) / 2 - (this.lrr / 2) * (this.ivz.width) - (this.lrr - 1) / 2 * this.lme;
                x = s - n;
                e = s + (this.lrr) * (this.ivz.width) + (this.lrr - 1) * this.lme + n
            }
            for (var u = 0; u < this.lrr; u++) {
                o.drawImage(this.ivz, 0, this.gfq * this.wff, this.ivz.width, this.gfq, s + (u * (this.lme + this.ivz.width)), this.y + ((this.height - this.gfq) / 2), this.ivz.width, this.gfq)
            }
            o.textAlign = "right";
            o.fillText(this.aiy, x, this.y + m + this.qwx);
            o.textAlign = "left";
            o.fillText(this.dli, e, this.y + m + this.qwx)
        } else {
            if (this.aiy != undefined) {
                do {
                    if (g.length > 1) {
                        m -= 2;
                        o.font = this.yjy + " " + m + "px " + this.dpv
                    }
                    g = [];
                    d = "";
                    v = 0;
                    y = 0;
                    t = 0;
                    for (var p = t; p < this.aiy.length; p++) {
                        d += this.aiy.charAt(p);
                        k = o.measureText(d).width;
                        if ((this.aiy.charAt(p) == " ") || (this.aiy.charAt(p) == "|")) {
                            v = p
                        }
                        if (p == this.aiy.length - 1) {
                            g[y] = this.aiy.substring(t, this.aiy.length)
                        } else {
                            if (this.aiy.charAt(p) == "|") {
                                g[y] = this.aiy.substring(t, v);
                                y++;
                                t = v + 1;
                                d = this.aiy.substring(v + 1, p)
                            } else {
                                if (k >= this.width - 2 * q) {
                                    g[y] = this.aiy.substring(t, v);
                                    y++;
                                    t = v + 1;
                                    d = this.aiy.substring(v + 1, p)
                                }
                            }
                        }
                    }
                } while (g.length > 2);
                if (g.length > 1 && m == this.qyx) {
                    o.font = this.yjy + " " + (m - 3) + "px " + this.dpv;
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
suv.prototype = new pzb;

function zph() {
    this.bnb = null;
    this.xxq = null;
    this.kyv = null;
    this.toy = false;
    this.csv = false;
    this.rje = true;
    this.vqu = false;
    this.fit = false;
    this.eqq = 0;
    this.qak = 0;
    this.djh = 0;
    this.dsv = "";
    this.ysg = "";
    this.ujz = null;
    this.jvo = null;
    this.dpv = "arial";
    this.yjy = "bold";
    this.pff = "arial";
    this.cbm = "rgb(0,0,200)";
    this.nzv = "rgb(255,255,255)";
    this.rkc = "rgb(0,0,150)";
    this.blt = "rgb(220,240,255)";
    this.dzt = "rgb(130,220,255)";
    this.bwz = "rgb(130,190,255)";
    this.eqn = "rgb(255,255,255)";
    this.evg = "rgb(130,190,255)";
    this.ckt = "rgb(100,160,255)";
    this.mnh = "rgb(255,255,255)";
    this.sdg = new qlq();
    this.ssa = null;
    this.zao = null;
    this.rky = null;
    this.rab = null;
    this.eue = null;
    this.cra = null;
    this.rkm = null;
    this.adi = null;
    this.zev = 2;
    this.unv = 3;
    this.hrl = 10;
    this.qwx = 3;
    this.txo = 5;
    this.vbz = 36;
    this.qyx = 30;
    this.ohp = 22;
    this.zij = function(a, c, b) {
        zph.prototype.zij.call(this, a, c, b);
        this.vqu = vit.vjo.value37
    };
    this.ewp = function(b) {
        try {
            var a = (vit.vjo.value37) ? b.dyb : b.pch;
            this.ssa = b.vuf;
            this.zao = b.sst;
            this.rky = b.plq;
            this.rab = b.iht;
            this.eue = b.ttc;
            this.cra = b.wby;
            this.sdg = b.kju;
            this.vbz = b.ddh;
            this.qyx = b.fontSize;
            this.ohp = b.sxy;
            this.qwx = b.hpu;
            this.txo = b.guo;
            this.zev = b.zqj;
            this.unv = b.duf;
            this.hrl = b.mjt;
            if (vit.vjo.value36) {
                this.ysg = this.parent.jkm(this.parent.language.hgr)
            } else {
                if (vit.vjo.value37) {
                    this.ysg = this.parent.jkm(this.parent.language.qii)
                }
            }
            this.bnb = [];
            this.xxq = this.gki(a.aom, this.parent.language.ret, this.parent.ffv, (this.parent.vkm.osy === false) ? this.parent.tud.dra("btn") : this.parent.tud.dra("btn_re"), b.zoc);
            this.bnb.push(this.xxq);
            if (vit.vjo.value37) {
                this.kyv = this.gki(a.biq, this.parent.language.tla, this.parent.utt, (this.parent.vkm.osy === false) ? this.parent.tud.dra("btn") : this.parent.tud.dra("btn_e"), b.zoc);
                this.bnb.push(this.kyv)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.zxd = function(b) {
        try {
            var a = (vit.vjo.value37) ? b.dyb : b.pch;
            this.ssa = b.vuf;
            this.zao = b.sst;
            this.rky = b.plq;
            this.rab = b.iht;
            this.eue = b.ttc;
            this.cra = b.wby;
            this.sdg = b.kju;
            if (this.xxq) {
                this.xxq.giu(a.aom);
                this.xxq.zxd(b.zoc)
            }
            if (this.kyv) {
                this.kyv.giu(a.biq);
                this.kyv.zxd(b.zoc)
            }
            this.vbz = b.ddh;
            this.qyx = b.fontSize;
            this.ohp = b.sxy;
            this.qwx = b.hpu;
            this.txo = b.guo;
            this.zev = b.zqj;
            this.unv = b.duf;
            this.hrl = b.mjt
        } catch (c) {
            console.error(c)
        }
    };
    this.yek = function(c) {
        try {
            this.dpv = c.font;
            this.yjy = c.exc;
            this.cbm = c.rlv;
            this.nzv = c.izu;
            this.rkc = c.kco;
            this.blt = c.backgroundColor;
            this.dzt = c.tbp;
            this.bwz = c.stt;
            this.eqn = c.rbc;
            this.evg = c.usi;
            this.ckt = c.jhs;
            this.mnh = c.che;
            this.ujz = c.pfp;
            this.jvo = c.irj;
            for (var b = 0, a = this.bnb.length; b < a; b++) {
                this.bnb[b].yek((this.parent.vkm.sdv === true) ? c.pri : c.efj)
            }
        } catch (d) {
            console.error(d)
        }
    };
    this.kng = function(d, k) {
        var c = d - this.x
            , g = k - this.y;
        for (var f = 0, b = this.bnb.length; f < b; f++) {
            var a = this.bnb[f];
            if (c >= a.x && c <= a.x + a.width && g >= a.y && g <= a.y + a.height && a.zeb() === true) {
                if (a.ijh() === true && a.umv() === false && this.rje) {
                    a.eqb(true, true);
                    this.parent.tud.qic("btn");
                    this.parent.tud.jfc("btn");
                    a.vve();
                    for (var e = 0; e < b; e++) {
                        this.bnb[e].ixb(true)
                    }
                    return true
                }
            }
        }
        if (c >= this.cra.x && c <= this.cra.x + this.cra.width && g >= this.cra.y && g <= this.cra.y + this.cra.height && this.vqu && this.csv) {
            this.koe()
        }
        return true
    };
    this.szw = function() {};
    this.zls = function() {};
    this.gjg = function() {};
    this.gki = function(d, f, e, a, c) {
        var b = new tpq();
        b.zij(d, this.context2D, null, a, null, f);
        b.parent = this;
        b.vve = e;
        b.zxd(c);
        return b
    };
    this.ahn = function(c) {
        this.csv = c;
        for (var b = 0, a = this.bnb.length; b < a; b++) {
            this.bnb[b].umq(c)
        }
    };
    this.koe = function() {
        this.rje = !this.rje;
        this.parent.isl()
    };
    this.sfm = function(d, a, c, b) {
        this.fit = false;
        this.noj = true;
        this.dsv = this.qst(b);
        this.eqq = d;
        this.qak = a;
        this.djh = c;
        if (this.zeb()) {
            this.ahn(true);
            this.isl()
        }
    };
    this.qst = function(b) {
        var d = Math.floor(b / 3600000);
        b = b - d * 3600000;
        var a = Math.floor(b / 60000);
        b = b - a * 60000;
        var c = Math.floor(b / 1000);
        return this.qbx(d) + ":" + this.qbx(a) + ":" + this.qbx(c)
    };
    this.qbx = function(a) {
        if (a < 10) {
            return "0" + a
        }
        return a
    };
    this.rly = function(a, b) {
        this.fit = a;
        if (b && b === true) {
            this.isl()
        }
    };
    this.ief = function(a, b) {
        this.noj = false;
        if (vit.vjo.value37) {
            this.rje = false
        }
        this.rly(a, false);
        zph.prototype.ief.call(this, a, b)
    };
    this.isl = function(j, f, k, d) {
        if (!this.zeb() || !this.parent.tgx()) {
            return
        }
        var a = (j != null && f != null && k != null && d != null)
            , g = null
            , l = this.context2D
            , c = this.parent.tud.dra("btn_back");
        l.save();
        if (a) {
            l.beginPath();
            l.rect(j, f, k, d);
            l.closePath();
            l.clip()
        }
        l.fillStyle = this.blt;
        l.fillRect(0, 0, this.width, this.height);
        if (c) {
            g = l.createLinearGradient(this.sdg.x, this.sdg.y, this.sdg.x + this.sdg.width, this.sdg.y);
            g.addColorStop(0.2, this.ujz);
            g.addColorStop(1, this.jvo);
            l.fillStyle = g;
            l.save();
            if (this.parent.nof === vit.vkm.hws) {
                l.translate(this.sdg.width / 2, this.sdg.height / 2);
                l.rotate(Math.PI);
                l.translate(-this.sdg.width / 2, -this.sdg.height / 2)
            }
            l.fillRect(this.sdg.x, this.sdg.y, this.sdg.width, this.sdg.height);
            l.drawImage(c, this.sdg.x, this.sdg.y, this.sdg.width, this.sdg.height);
            l.restore()
        } else {
            if (this.parent.vkm.sdv === true) {
                vit.gtm.ami(l, this.sdg.x, this.sdg.y, this.sdg.width, this.sdg.height, this.ujz, 1)
            }
        }
        vit.gtm.gzv(l, this.ssa.x, this.ssa.y, this.ssa.width, this.ssa.height, 0, this.dzt);
        vit.gtm.xwp(l, this.ysg, this.eqn, this.ssa.x, this.ssa.y + this.qwx, this.ssa.width, this.ssa.height, this.dpv, this.vbz, this.yjy);
        vit.gtm.gzv(l, this.zao.x, this.zao.y, this.zao.width, this.zao.height, 0, this.dzt);
        if (vit.vjo.value36) {
            vit.gtm.gzk(l, this.parent.jkm(this.parent.language.zoj), this.eqn, this.zao.x, this.zao.y + this.qwx, this.zao.width, this.zao.height, this.dpv, this.qyx, this.yjy, this.txo)
        } else {
            if (vit.vjo.value37) {
                vit.gtm.gzk(l, this.parent.jkm(this.parent.language.vfa), this.eqn, this.zao.x, this.zao.y + this.qwx, this.zao.width, this.zao.height, this.dpv, this.qyx, this.yjy, this.txo)
            }
        }
        vit.gtm.gzv(l, this.rky.x, this.rky.y, this.rky.width, this.rky.height, 0, this.bwz);
        vit.gtm.gzk(l, this.parent.jkm(this.parent.language.agj), this.eqn, this.rky.x, this.rky.y + this.qwx, this.rky.width, this.rky.height, this.dpv, this.qyx, this.yjy, this.txo);
        vit.gtm.gzv(l, this.rab.x, this.rab.y, this.rab.width, this.rab.height, 0, this.dzt);
        vit.gtm.gzk(l, this.parent.jkm(this.parent.language.lml), this.eqn, this.rab.x, this.rab.y + this.qwx, this.rab.width, this.rab.height, this.dpv, this.qyx, this.yjy, this.txo);
        if (this.vqu) {
            this.dzv(l)
        }
        if (this.noj) {
            if (vit.vjo.value36) {
                vit.gtm.adt(l, this.eqq, this.eqn, this.zao.x, this.zao.y + this.qwx, this.zao.width, this.zao.height, this.dpv, this.qyx, this.yjy, this.txo)
            } else {
                if (vit.vjo.value37) {
                    vit.gtm.adt(l, this.dsv, this.eqn, this.zao.x, this.zao.y + this.qwx, this.zao.width, this.zao.height, this.dpv, this.qyx, this.yjy, this.txo)
                }
            }
            vit.gtm.adt(l, this.parent.lmh(this.qak), this.eqn, this.rky.x, this.rky.y + this.qwx, this.rky.width, this.rky.height, this.dpv, this.qyx, this.yjy, this.txo);
            vit.gtm.adt(l, this.parent.lmh(this.djh), this.eqn, this.rab.x, this.rab.y + this.qwx, this.rab.width, this.rab.height, this.dpv, this.qyx, this.yjy, this.txo)
        }
        for (var b = 0, e = this.bnb.length; b < e; b++) {
            this.bnb[b].isl()
        }
        if (this.fit) {
            vit.gtm.bqh(l, this.eue.x, this.eue.y, this.eue.width, this.eue.height, this.unv, this.cbm, 0.3, this.rkc, this.zev, 1);
            vit.gtm.xwp(l, this.parent.jkm(this.parent.language.vhz), this.nzv, this.eue.x, this.eue.y, this.eue.width, this.eue.height, this.dpv, this.qyx, this.yjy)
        }
        l.restore();
        if (this.riv && this.nxv) {
            if (a) {
                this.riv.drawImage(this.nxv, j, f, k, d, this.x + j, this.y + f, k, d)
            } else {
                this.riv.drawImage(this.nxv, this.x, this.y)
            }
        }
    };
    this.dzv = function(b) {
        var c = Math.round(this.cra.height / 2)
            , a = Math.round(this.cra.x + c)
            , d = Math.round(this.cra.y + c / 2);
        b.save();
        vit.gtm.gzv(b, this.cra.x, this.cra.y, this.cra.width, this.cra.height, this.hrl, this.evg, this.ckt, this.zev);
        vit.gtm.xwp(b, this.parent.language.qza, this.eqn, this.cra.x + this.cra.height, this.cra.y, this.cra.width - this.cra.height, this.cra.height, this.dpv, this.ohp, this.yjy);
        vit.gtm.ami(b, a, d, c, c, null, 0, this.mnh, this.zev, 1);
        if (this.rje) {
            vit.gtm.ami(b, a + c / 4, d + c / 4, c / 2, c / 2, this.mnh, 1)
        }
        b.restore()
    }
}
zph.prototype = new pzb;

function nvv() {
    var a = this;
    this.nca = function() {
        a.ilo = false
    };
    this.isl = function() {
        if (!this.zeb()) {
            return
        }
        var b = this.context2D;
        b.save();
        if (this.ivz != null) {
            b.drawImage(this.ivz, 0, 0, this.ivz.width, this.ivz.height, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
nvv.prototype = new ejr;

function jns() {
    this.itb = "";
    this.zjd = "";
    this.ivz = null;
    this.xfn = "sans-serif";
    this.mvb = "sans-serif";
    this.yjy = "bold";
    this.sog = null;
    this.eqn = null;
    this.lqc = null;
    this.stq = null;
    this.blt = null;
    this.blc = 16;
    this.euo = 20;
    this.nmh = 0;
    this.key = 0;
    this.zev = 2;
    this.ccl = 3;
    this.rlg = 3;
    this.sjp = 3;
    this.swa = 3;
    this.zij = function(a, e, b, d, c) {
        jns.prototype.zij.call(this, a, e, b);
        this.itb = d;
        this.zjd = c
    };
    this.zxd = function(a) {
        try {
            this.blc = a.jbh;
            this.euo = a.qim;
            this.nmh = a.boy;
            this.key = a.kxg;
            this.zev = a.zqj;
            this.ccl = a.yyh;
            this.rlg = a.fkj;
            this.sjp = a.dtx;
            this.swa = a.veu
        } catch (b) {
            console.error(b)
        }
    };
    this.yek = function(a) {
        try {
            this.xfn = a.vpx;
            this.mvb = a.rkl;
            this.yjy = a.exc;
            this.sog = a.xpx;
            this.eqn = a.rbc;
            this.lqc = a.borderColor;
            this.stq = a.axt;
            this.blt = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.xqa = function(a, b) {
        this.zjd = a;
        if (b && b === true && this.context2D != null && this.zeb() === true) {
            this.parent.isl(this.x, this.y, this.width, this.height)
        }
    };
    this.elr = function(a, b) {
        this.itb = a;
        if (b && b === true && this.context2D != null && this.zeb() === true) {
            this.parent.isl(this.x, this.y, this.width, this.height)
        }
    };
    this.isl = function() {
        if (!this.zeb()) {
            return
        }
        var a = this.context2D
            , b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.stq) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.lqc);
            b.addColorStop(1, this.stq);
            vit.gtm.hde(a, this.x, this.y, this.width, this.height, this.ccl, this.rlg, this.sjp, this.swa, this.blt, 1, b, this.zev, 1)
        } else {
            vit.gtm.hde(a, this.x, this.y, this.width, this.height, this.ccl, this.rlg, this.sjp, this.swa, this.blt, 1, this.lqc, this.zev, 1)
        }
        if (this.itb != null) {
            vit.gtm.xwp(a, this.itb, this.sog, this.x + this.zev, this.y + this.nmh, this.width - 2 * this.zev, this.height, this.xfn, this.blc, this.yjy)
        }
        if (this.zjd != null) {
            if (this.itb != null) {
                vit.gtm.xwp(a, this.zjd, this.eqn, this.x + this.zev, this.y + this.key, this.width - 2 * this.zev, this.height, this.mvb, this.euo, this.yjy)
            } else {
                vit.gtm.xwp(a, this.zjd, this.eqn, this.x + this.zev, this.y + this.zev, this.width - 2 * this.zev, this.height, this.mvb, this.euo, this.yjy)
            }
        }
        if (this.ivz) {
            a.drawImage(this.ivz, 0, 0, this.ivz.width, this.ivz.height, this.x + this.zev, this.y + this.zev, this.width - 2 * this.zev, this.height - 2 * this.zev)
        }
        a.restore();
        if (this.riv && this.nxv) {
            this.riv.drawImage(this.nxv, this.x, this.y)
        }
    }
}
jns.prototype = new pzb;

function ber() {
    this.ivz = new Image();
    this.zjd = "";
    this.vmw = true;
    this.dpv = null;
    this.yjy = "bold";
    this.eoj = "red";
    this.yna = "orange";
    this.qch = "white";
    this.qyx = 40;
    this.txo = 0;
    this.qwx = 0;
    this.wla = 0;
    this.zew = 2;
    this.ffp = null;
    this.nqi = 0;
    this.dce = 0;
    this.zij = function(a, e, c, b, d) {
        ber.prototype.zij.call(this, a, e, c);
        this.ivz = b;
        this.zjd = d
    };
    this.zxd = function(a) {
        try {
            this.qyx = a.fontSize;
            this.txo = a.guo;
            this.qwx = a.hpu;
            this.wla = a.ike;
            this.zew = a.usf
        } catch (b) {
            console.error(b)
        }
    };
    this.yek = function(a) {
        try {
            this.dpv = a.font;
            this.yjy = a.exc;
            this.eoj = a.zdd;
            this.yna = a.sds;
            this.qch = a.kdr
        } catch (b) {
            console.error(b)
        }
    };
    this.xqa = function(a, b) {
        this.zjd = a;
        if (b && b === true && this.context2D != null) {
            this.ief(true, true)
        }
    };
    this.pcc = function(a, b) {
        this.zjd = a;
        this.vmw = false;
        if (b && b === true && this.context2D != null) {
            this.ief(true, true)
        }
    };
    this.ief = function(a, b) {
        this.uho = a;
        if (b && b === true && this.context2D != null) {
            if (this.nxv == null && this.zeb()) {
                this.isl()
            } else {
                if (this.parent != null) {
                    this.parent.isl(this.x, this.y, this.width, this.height)
                }
            }
        }
    };
    this.wwu = function(a, b, c) {
        this.ffp = a;
        this.nqi = b;
        this.dce = c
    };
    this.isl = function() {
        if (!this.zeb() || !this.parent.tgx()) {
            return
        }
        var b = this.context2D
            , c = null
            , a = (this.nxv != null) ? 0 : this.x
            , d = (this.nxv != null) ? 0 : this.y;
        b.save();
        if (this.nxv == null) {
            b.beginPath();
            b.rect(this.x, this.y, this.width, this.height);
            b.closePath();
            b.clip()
        }
        if (this.vmw === true) {
            if (this.ffp != null) {
                b.drawImage(this.ffp, this.x + this.nqi, this.y + this.dce, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            if (this.ivz != null) {
                b.drawImage(this.ivz, a, d)
            }
        }
        c = b.createLinearGradient(a + this.width / 2 + this.txo, d, a + this.width / 2 + this.txo, d + this.height);
        c.addColorStop(0, this.eoj);
        c.addColorStop(1, this.yna);
        vit.gtm.xwp(b, this.zjd, c, a + this.wla + this.txo, d + this.qwx, this.width - 2 * this.wla, this.height, this.dpv, this.qyx, this.yjy, this.qch, this.zew);
        b.restore();
        if (this.riv && this.nxv) {
            this.riv.drawImage(this.nxv, this.x, this.y)
        }
    }
}
ber.prototype = new pzb;

function wle() {
    var a = this;
    this.state = 0;
    this.pcv = 1;
    this.vhe = null;
    this.wdl = null;
    this.efx = null;
    this.nop = "round";
    this.dpv = null;
    this.yjy = "bold";
    this.vrn = "center";
    this.blt = null;
    this.eqn = null;
    this.yys = 1;
    this.nis = null;
    this.qyx = 17;
    this.wla = 2;
    this.kzn = 0;
    this.zev = 1;
    this.piu = 0;
    this.hme = 0;
    this.qqm = 0;
    this.zxd = function(b) {
        try {
            this.qyx = b.fontSize;
            this.wla = b.ike;
            this.kzn = b.edp;
            this.zev = b.zqj;
            this.qqm = b.awp
        } catch (c) {
            console.error(c)
        }
    };
    this.yek = function(b) {
        try {
            this.nop = b.gfk;
            this.dpv = b.font;
            this.yjy = b.exc;
            this.vrn = b.textAlign;
            this.blt = b.backgroundColor;
            this.eqn = b.rbc;
            this.yys = b.nrn;
            if (b.borderColor && b.axt) {
                this.nis = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.nis.addColorStop(0, b.borderColor);
                this.nis.addColorStop(1, b.axt)
            } else {
                this.nis = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.qlp = function() {
        return this.nop
    };
    this.gkl = function(c, b) {
        this.state = c;
        this.pcv = b
    };
    this.rfj = function(b) {
        this.ivz = b;
        if (this.nop === "round") {
            this.piu = this.width / 2 - this.wla
        }
        if (this.ivz) {
            this.hme = Math.round(this.ivz.height / (2 * this.pcv))
        }
    };
    this.plj = function(b) {
        this.state = (b < this.pcv) ? b : this.state
    };
    this.rou = function(b) {
        this.vhe = b
    };
    this.nca = function() {
        a.ilo = false
    };
    this.aez = function() {
        a.aff = false;
        if (a.zeb()) {
            a.parent.isl(a.x, a.y, a.width, a.height)
        }
    };
    this.isl = function() {
        if (!this.zeb()) {
            return
        }
        var l = this.context2D
            , e = (this.ijh()) ? this.yys : this.yys / 2
            , b = this.qyx
            , d = null
            , c = 0
            , k = 0
            , j = 0
            , g = 0;
        l.save();
        if (this.ivz && this.vve) {
            if (!this.ijh()) {
                l.globalAlpha = e
            }
            if (this.nop === "round") {
                vit.gtm.xjw(l, this.x + this.width / 2, this.y + this.height / 2, this.piu, this.blt, e * this.yys)
            } else {
                if (this.nop === "rect") {
                    vit.gtm.bqh(l, this.x, this.y, this.width, this.height, this.kzn, this.blt, e * this.yys, this.nis, this.zev, e)
                }
            }
            if (this.xoe()) {
                if (this.nop === "round") {
                    l.drawImage(this.ivz, 0, (this.state * 2 * this.hme) + this.hme, this.ivz.width, this.hme, this.x, this.y, this.width, this.height)
                } else {
                    if (this.nop === "rect") {
                        l.drawImage(this.ivz, 0, (this.state * 2 * this.hme) + this.hme, this.ivz.width, this.hme, this.x, this.y, this.width, this.height)
                    }
                }
            } else {
                if (this.nop === "round") {
                    l.drawImage(this.ivz, 0, (this.state * 2 * this.hme), this.ivz.width, this.hme, this.x, this.y, this.width, this.height)
                } else {
                    if (this.nop === "rect") {
                        l.drawImage(this.ivz, 0, (this.state * 2 * this.hme), this.ivz.width, this.hme, this.x, this.y, this.width, this.height)
                    }
                }
            }
            if (this.zjd != null) {
                l.textAlign = this.vrn;
                l.textBaseline = "bottom";
                l.font = this.yjy + " " + b + "px " + this.dpv;
                l.fillStyle = this.eqn;
                d = this.zjd.split("|");
                j = 0;
                g = (this.vrn === "center") ? this.x + this.width / 2 : (this.vrn === "left") ? this.x + 2 * this.wla : this.x + this.width - 2 * this.wla;
                for (var f = 0; f < d.length; f++) {
                    j = (l.measureText(d[f]).width > j) ? l.measureText(d[f]).width : j
                }
                if (j > this.width - 2 * this.wla) {
                    c = ((this.width - 2 * this.wla) / j);
                    b = Math.round(c * b) - 1;
                    l.font = this.yjy + " " + b + "px " + this.dpv
                }
                if (b * d.length > this.qqm) {
                    c = ((this.qqm) / (b * d.length));
                    b = Math.round(c * b) - 1;
                    l.font = this.yjy + " " + b + "px " + this.dpv
                }
                k = (this.height - this.wla - this.qqm) + (this.qqm - b * d.length) / 2;
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
wle.prototype = new ejr;

function hkq() {
    var a = this;
    this.nop = "rect";
    this.gpg = -1;
    this.dpv = null;
    this.yjy = "bold";
    this.blt = null;
    this.ccx = null;
    this.pcm = null;
    this.lec = null;
    this.lqc = null;
    this.eqn = null;
    this.joj = null;
    this.kzn = 3;
    this.txo = -2;
    this.qwx = 2;
    this.qkr = 6;
    this.qyx = 26;
    this.zev = 2;
    this.zxd = function(b) {
        try {
            this.qyx = b.fontSize;
            this.txo = b.guo;
            this.qwx = b.hpu;
            this.qkr = b.wzy;
            this.kzn = b.edp;
            this.zev = b.zqj
        } catch (c) {
            console.error(c)
        }
    };
    this.yek = function(b) {
        try {
            this.dpv = b.font;
            this.yjy = b.exc;
            this.blt = b.backgroundColor;
            this.ccx = b.rpz;
            this.pcm = b.wxi;
            this.lec = b.lqx;
            this.lqc = b.borderColor;
            this.eqn = b.rbc;
            this.joj = b.tas;
            this.nop = b.gfk;
            this.gpg = b.uaz
        } catch (c) {
            console.error(c)
        }
    };
    this.qlp = function() {
        return this.nop
    };
    this.nca = function() {
        a.ilo = false
    };
    this.aez = function() {
        a.aff = false;
        if (a.zeb()) {
            a.parent.isl(a.x, a.y, a.width, a.height)
        }
    };
    this.isl = function() {
        if (!this.zeb()) {
            return
        }
        var p = this.context2D
            , l = null
            , n = this.blt
            , m = this.ccx
            , b = this.qyx
            , f = null
            , d = 0
            , o = 0
            , c = 1
            , k = 0
            , e = (this.gpg == 0 || this.gpg == 3) ? this.kzn : 0;
        lt = (this.gpg == 1 || this.gpg == 3) ? this.kzn : 0;
        rb = (this.gpg == 0 || this.gpg == 2) ? this.kzn : 0;
        lb = (this.gpg == 1 || this.gpg == 2) ? this.kzn : 0;
        h = 0;
        p.save();
        p.lineJoin = "round";
        p.lineCap = "round";
        p.textAlign = "center";
        if (this.xoe()) {
            n = (this.pcm != null) ? this.pcm : n;
            m = (this.lec != null) ? this.lec : m
        }
        if (n != null) {
            if (m != null) {
                l = p.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                l.addColorStop(1, m);
                l.addColorStop(0, n);
                if (this.nop === "rrect") {
                    vit.gtm.hde(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, l, 1, this.lqc, this.zev, 1)
                } else {
                    if (this.nop === "rect") {
                        if (this.lqc) {
                            vit.gtm.gzv(p, this.x, this.y, this.width, this.height, this.kzn, l, this.lqc, this.zev)
                        } else {
                            vit.gtm.ami(p, this.x, this.y, this.width, this.height, l, 1)
                        }
                    } else {
                        if (this.nop === "triangle") {
                            vit.gtm.jpn(p, this.gpg, this.x, this.y, this.width, this.height, this.kzn, l, 1, this.lqc, this.zev, 1)
                        }
                    }
                }
            } else {
                if (this.nop === "rrect") {
                    vit.gtm.hde(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, n, 1, this.lqc, this.zev, 1)
                } else {
                    if (this.nop === "rect") {
                        if (this.lqc) {
                            vit.gtm.gzv(p, this.x, this.y, this.width, this.height, this.kzn, n, this.lqc, this.zev, 1)
                        } else {
                            vit.gtm.ami(p, this.x, this.y, this.width, this.height, n, 1)
                        }
                    } else {
                        if (this.nop === "triangle") {
                            vit.gtm.jpn(p, this.gpg, this.x, this.y, this.width, this.height, this.kzn, n, 1, this.lqc, this.zev, 1)
                        }
                    }
                }
            }
        }
        if (this.ivz != null) {
            h = this.height - 2 * this.qkr;
            p.drawImage(this.ivz, this.x + this.width / 2 - h / 2, this.y + this.qkr, h, h)
        }
        if (this.zjd != null) {
            p.textAlign = "center";
            p.textBaseline = "bottom";
            f = this.zjd.split("|");
            d = 0;
            if (this.xoe()) {
                d = 1;
                p.fillStyle = this.joj
            } else {
                p.fillStyle = this.eqn
            }
            p.font = this.yjy + " " + b + "px " + this.dpv;
            for (var g = 0, j = f.length; g < j; g++) {
                o = (p.measureText(f[g]).width > o) ? p.measureText(f[g]).width : o
            }
            if (o > this.width - 2 * this.qkr) {
                c = ((this.width - 2 * this.qkr) / o);
                b = Math.round(c * b) - 1;
                p.font = this.yjy + " " + b + "px " + this.dpv
            }
            if (b * f.length > this.height) {
                c = ((this.height) / (b * f.length));
                b = Math.round(c * b) - 1;
                p.font = this.yjy + " " + b + "px " + this.dpv
            }
            k = (this.height - b * f.length) / 2;
            k += b;
            for (var g = 0; g < f.length; g++) {
                p.fillText(f[g], (this.x + this.width / 2) + this.txo, this.y - this.qwx + k + d);
                k += b
            }
        }
        p.restore()
    }
}
hkq.prototype = new ejr;

function rtn() {
    var a = this;
    this.zjd = null;
    this.csv = false;
    this.ilo = false;
    this.zly = false;
    this.dpv = null;
    this.yjy = "bold";
    this.vrn = "center";
    this.blt = null;
    this.lqc = null;
    this.eqn = null;
    this.pxt = "rect";
    this.xmh = new qlq();
    this.hia = new qlq();
    this.qyx = 16;
    this.kzn = 8;
    this.zev = 1;
    this.dlf = 0;
    var b = 200;
    this.zij = function(c, f, d, e) {
        this.zjd = e;
        rtn.prototype.zij.call(this, c, f, d)
    };
    this.yek = function(c) {
        try {
            this.dpv = c.font;
            this.yjy = c.exc;
            this.vrn = c.textAlign;
            this.blt = c.backgroundColor;
            this.lqc = c.borderColor;
            this.eqn = c.rbc;
            this.pxt = c.type
        } catch (d) {
            console.error(d)
        }
    };
    this.zxd = function(c) {
        try {
            this.xmh = c.fzt;
            this.hia = c.ihc;
            this.qyx = c.fontSize;
            this.kzn = c.edp;
            this.zev = c.zqj
        } catch (d) {
            console.error(d)
        }
    };
    this.umq = function(c) {
        this.csv = c
    };
    this.ijh = function() {
        return this.csv
    };
    this.joe = function(c, d) {
        this.zly = c;
        if (d && d === true) {
            this.parent.isl(this.x, this.y, this.width, this.height)
        }
    };
    this.mrf = function() {
        return this.zly
    };
    this.xqa = function(c, d) {
        this.zjd = c;
        if (d && d === true && this.zeb()) {
            this.parent.isl(this.x, this.y, this.width, this.height)
        }
    };
    this.ixb = function(c, d) {
        this.ilo = c;
        d = (d === false) ? false : true;
        clearTimeout(this.dlf);
        if (this.ilo === true && d === true) {
            this.dlf = setTimeout(this.nca, b)
        }
    };
    this.umv = function() {
        return this.ilo
    };
    this.nca = function() {
        a.ilo = false
    };
    this.isl = function() {
        if (!this.zeb()) {
            return
        }
        var c = this.context2D;
        c.save();
        vit.gtm.gzv(c, this.x, this.y, this.width, this.height, this.kzn, this.blt, this.lqc, this.zev);
        if (this.pxt === "rect") {
            vit.gtm.ami(c, this.x + this.hia.x, this.y + this.hia.y, this.hia.width, this.hia.height, this.eqn, 0.2, this.eqn, this.zev, 1);
            if (this.zly === true) {
                vit.gtm.ami(c, this.x + this.hia.x + this.hia.width / 4, this.y + this.hia.y + this.hia.height / 4, this.hia.width / 2, this.hia.height / 2, this.eqn, 1)
            }
        } else {
            if (this.pxt === "round") {
                vit.gtm.xjw(c, this.x + this.hia.x + this.hia.width / 2, this.y + this.hia.y + this.hia.height / 2, this.hia.width / 2, this.eqn, 0.2, this.eqn, this.zev, 1);
                if (this.zly === true) {
                    vit.gtm.xjw(c, this.x + this.hia.x + this.hia.width / 2, this.y + this.hia.y + this.hia.height / 2, this.hia.width / 4, this.eqn, 1)
                }
            }
        }
        if (this.zjd && this.zjd != "") {
            vit.gtm.vis(c, this.zjd, this.eqn, this.x + this.xmh.x, this.y + this.xmh.y, this.xmh.width, this.xmh.height, this.dpv, this.qyx, this.yjy, this.vrn, true)
        }
        c.restore();
        if (this.riv && this.nxv) {
            this.riv.drawImage(this.nxv, this.x, this.y)
        }
    };
    this.vve = {}
}
rtn.prototype = new pzb;

function wco() {
    var b = this;
    var c = 0;
    var a = 1;
    this.iye = null;
    this.itb = "";
    this.eha = "";
    this.eit = "";
    this.fcp = "";
    this.ghs = false;
    this.eqq = [];
    this.wrz = 0;
    this.ipj = 0;
    this.tyt = 0;
    this.bkp = 0;
    this.hxy = 0;
    this.hzi = 0;
    this.ljp = 0;
    this.bko = 0;
    this.bim = false;
    this.ejw = false;
    this.zkm = false;
    this.pxt = "center";
    this.dpv = "arial";
    this.yjy = "bold";
    this.sog = "white";
    this.eqn = "white";
    this.blt = "black";
    this.ccx = null;
    this.lqc = "white";
    this.stq = "rgb(150,150,150)";
    this.ujz = null;
    this.zvl = null;
    this.zev = 3;
    this.bvk = 0;
    this.fma = 0;
    this.drm = 0;
    this.blc = 30;
    this.dgj = 24;
    this.ssa = new qlq();
    this.gtb = new qlq();
    this.yfa = new qlq();
    this.dpy = new qlq();
    this.qxz = new qlq();
    this.hvc = new qlq();
    this.krk = new qlq();
    this.qgl = new qlq();
    this.krr = new qlq();
    this.est = 7;
    this.vbj = 0;
    this.xrc = 0;
    this.apr = 0;
    this.wih = c;
    this.pbq = 0;
    this.ktt = 89;
    this.ymb = false;
    this.fkn = 0;
    this.hrm = 0;
    this.zee = 0;
    this.ayv = 0;
    this.icg = null;
    this.izv = 0;
    this.eol = 1;
    this.spy = 250;
    this.zij = function(d, f, e) {
        wco.prototype.zij.call(this, d, f, e);
        this.iye = new cia();
        this.iye.zij();
        this.iye.mzk("buttons");
        this.iye.mzk("checkboxes");
        this.iye.mzk("displays");
        this.iye.mzk("lbuttons");
        this.iye.mzk("mbuttons");
        this.iye.mzk("vbuttons");
        this.iye.mzk("cbuttons")
    };
    this.ewp = function(d) {
        try {
            this.qyf(d);
            this.qlh(d)
        } catch (f) {
            console.error(f)
        }
    };
    this.yek = function(k) {
        try {
            var n = this.iye.rys("lbuttons")
                , m = this.iye.rys("mbuttons")
                , f = this.iye.rys("cbuttons")
                , g = this.iye.rys("displays");
            this.pxt = k.type;
            this.dpv = k.font;
            this.yjy = k.exc;
            this.sog = k.xpx;
            this.eqn = k.rbc;
            this.blt = k.backgroundColor;
            this.ccx = k.rpz;
            this.lqc = k.borderColor;
            this.ujz = k.pfp;
            this.zvl = k.vfy;
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].yek(k.val)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].yek(k.sod)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].yek(k.xzu)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].yek(k.display)
            }
            this.iye.moq("checkboxes", "#yek", [k.zen])
        } catch (l) {
            console.error(l)
        }
    };
    this.zxd = function(k) {
        try {
            var n = this.iye.rys("lbuttons")
                , m = this.iye.rys("mbuttons")
                , f = this.iye.rys("cbuttons")
                , g = this.iye.rys("displays");
            this.zev = k.zqj;
            this.bvk = k.mpk;
            this.fma = k.fhf;
            this.drm = k.vzj;
            this.blc = k.jbh;
            this.dgj = k.aib;
            this.ssa = k.vuf;
            this.gtb = k.edk;
            this.yfa = k.gid;
            this.dpy = k.agn;
            this.qxz = k.nsq;
            this.hvc = k.wnb;
            this.iye.nxn("lgames", "#giu", [k.rzh]);
            this.iye.nxn("mgames", "#giu", [k.ste]);
            this.iye.nxn("lmincredit", "#giu", [k.rqm]);
            this.iye.nxn("mmincredit", "#giu", [k.sgh]);
            this.iye.nxn("lmaxcredit", "#giu", [k.yjj]);
            this.iye.nxn("mmaxcredit", "#giu", [k.nlr]);
            this.iye.nxn("lmaxwin", "#giu", [k.isk]);
            this.iye.nxn("mmaxwin", "#giu", [k.dyp]);
            this.iye.nxn("start", "#giu", [k.jqf]);
            this.iye.nxn("cancel", "#giu", [k.ply]);
            this.iye.nxn("gamesd", "#giu", [k.bjj]);
            this.iye.nxn("mincreditd", "#giu", [k.aof]);
            this.iye.nxn("maxcreditd", "#giu", [k.udt]);
            this.iye.nxn("maxwind", "#giu", [k.ncq]);
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].zxd(k.val)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].zxd(k.sod)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].zxd(k.xzu)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].zxd(k.display)
            }
            this.iye.nxn("cmincredit", "#giu", [k.bih]);
            this.iye.nxn("cmaxcredit", "#giu", [k.cme]);
            this.iye.nxn("cmaxwin", "#giu", [k.upp]);
            this.iye.moq("checkboxes", "#zxd", [k.zen])
        } catch (l) {
            console.error(l)
        }
    };
    this.qyf = function(d) {
        this.iye.eiu("start", this.gki(d.jqf, this.parent.language.start, this.ibz, this.parent.ulp.aky), ["buttons", "cbuttons"]);
        this.iye.eiu("cancel", this.gki(d.ply, this.parent.language.hra, this.mik, this.parent.ulp.kcw), ["buttons", "cbuttons"]);
        this.iye.eiu("lgames", this.gki(d.rzh, "", this.whx, null), ["buttons", "lbuttons", "vbuttons"]);
        this.iye.eiu("mgames", this.gki(d.ste, "+", this.bmr, null), ["buttons", "mbuttons", "vbuttons"]);
        this.iye.eiu("lmincredit", this.gki(d.rqm, "", this.rrn, null), ["buttons", "lbuttons", "vbuttons"]);
        this.iye.eiu("mmincredit", this.gki(d.sgh, "+", this.vlx, null), ["buttons", "mbuttons", "vbuttons"]);
        this.iye.eiu("lmaxcredit", this.gki(d.yjj, "", this.xmw, null), ["buttons", "lbuttons", "vbuttons"]);
        this.iye.eiu("mmaxcredit", this.gki(d.nlr, "+", this.xsc, null), ["buttons", "mbuttons", "vbuttons"]);
        this.iye.eiu("lmaxwin", this.gki(d.isk, "", this.xao, null), ["buttons", "lbuttons", "vbuttons"]);
        this.iye.eiu("mmaxwin", this.gki(d.dyp, "+", this.njh, null), ["buttons", "mbuttons", "vbuttons"]);
        this.iye.eiu("cmincredit", this.iuw(d.bih, "", this.szt), ["checkboxes"]);
        this.iye.eiu("cmaxcredit", this.iuw(d.cme, "", this.vfq), ["checkboxes"]);
        this.iye.eiu("cmaxwin", this.iuw(d.upp, "", this.hug), ["checkboxes"])
    };
    this.qlh = function(d) {
        this.iye.eiu("gamesd", this.svy(d.bjj, null, (this.eqq[this.wrz] > 0) ? this.eqq[this.wrz] : "---"), ["displays"]);
        this.iye.eiu("mincreditd", this.svy(d.aof, null, "---"), ["displays"]);
        this.iye.eiu("maxcreditd", this.svy(d.udt, null, "---"), ["displays"]);
        this.iye.eiu("maxwind", this.svy(d.ncq, null, "---"), ["displays"])
    };
    this.svy = function(d, g, f) {
        var e = new jns();
        e.zij(d, this.context2D, null, g, f);
        e.parent = this;
        return e
    };
    this.gki = function(f, i, g, e) {
        var d = new hkq();
        d.zij(f, this.context2D, null, null, i);
        d.parent = this;
        d.vve = g;
        if (e) {
            d.rrz = e.vql
        }
        return d
    };
    this.iuw = function(e, g, f) {
        var d = new rtn();
        d.zij(e, this.context2D, null, g);
        d.parent = this;
        d.vve = f;
        return d
    };
    this.kng = function(r, n) {
        var s = this.iye.rys("vbuttons")
            , l = this.iye.rys("cbuttons")
            , g = this.iye.rys("checkboxes")
            , p = this.iye.szb("cancel")
            , q = r - this.x
            , o = n - this.y;
        if (this.izn) {
            return true
        }
        if ((!p || !p.zeb()) && (r < this.x || r > this.x + this.width || n < this.y || n > this.y + this.height)) {
            this.zkm = true;
            this.duw();
            return true
        }
        for (var f = 0, m = s.length; f < m; f++) {
            var d = s[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.zeb() === true && d.ijh() === true && d.umv() === false) {
                    d.eqb(true, false, false);
                    this.izv = 0;
                    this.eol = 1;
                    if (d.vve() === false) {
                        this.icg = function() {
                            if (d.vve() === true) {
                                clearInterval(b.ayv);
                                d.eqb(false, false);
                                b.parent.isl();
                                for (var i = 0; i < m; i++) {
                                    s[i].ixb(false)
                                }
                            }
                        };
                        this.ayv = setInterval(this.icg, this.spy)
                    }
                    for (var e = 0; e < m; e++) {
                        s[e].ixb(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = l.length; f < m; f++) {
            var d = l[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.zeb() === true && d.ijh() === true) {
                    this.parent.tud.qic("btn");
                    this.parent.tud.jfc("btn");
                    d.eqb(true, false);
                    d.vve();
                    for (var e = 0; e < m; e++) {
                        l[e].ixb(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = g.length; f < m; f++) {
            var k = g[f];
            if (q >= k.x && q <= k.x + k.width && o >= k.y && o <= k.y + k.height) {
                if (k.zeb() === true && k.ijh() === true) {
                    k.joe(!k.mrf(), true);
                    k.vve();
                    for (var e = 0; e < m; e++) {
                        g[e].ixb(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.szw = function() {
        var e = this.iye.rys("vbuttons")
            , j = this.iye.rys("cbuttons");
        for (var g = 0, d = e.length; g < d; g++) {
            var f = e[g];
            if (f.xoe() == true) {
                clearInterval(this.ayv);
                f.eqb(false, false);
                this.parent.isl();
                return true
            }
        }
        for (var g = 0, d = j.length; g < d; g++) {
            var f = j[g];
            if (f.xoe() == true) {
                f.eqb(false, false);
                this.parent.isl();
                return true
            }
        }
        return false
    };
    this.zls = function(l) {
        var k = this.iye.rys("buttons");
        if (this.izn) {
            return true
        }
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l == f.rrz) {
                if (f.ijh() && !f.umv()) {
                    this.parent.tud.qic("btn");
                    this.parent.tud.jfc("btn");
                    f.eqb(true, false);
                    f.vve();
                    for (var e = 0; e < d; e++) {
                        k[e].ixb(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.gjg = function() {
        var g = this.iye.rys("buttons");
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.xoe() == true) {
                e.eqb(false, false);
                this.parent.isl();
                return true
            }
        }
        return false
    };
    this.ahn = function(d) {
        this.iye.moq("buttons", "#umq", [d]);
        this.iye.moq("checkboxes", "#umq", [d]);
        if (d === true && this.ejw === true) {
            this.iye.nxn("cmincredit", "#umq", [false])
        }
    };
    this.gvv = function(d) {
        this.eqq = d.g;
        this.ipj = d.v;
        this.tyt = d.v;
        this.bim = d.r;
        this.ejw = d.l;
        if (typeof d.m != "undefined" && d.m != null && d.m > 0) {
            this.bkp = d.m;
            this.hxy = d.m
        }
    };
    this.lhi = function() {
        if (this.bim === true) {
            this.hzi = this.parent.qqk;
            this.ljp = this.parent.qqk;
            this.wrz = 0;
            this.bko = 0
        }
    };
    this.fbh = function() {
        if (this.eqq.length > 0 && this.wrz >= 0 && this.zkm === false) {
            return this.eqq[this.wrz]
        }
        return 0
    };
    this.jtu = function() {
        var d = this.iye.szb("cmincredit") == null || this.iye.nxn("cmincredit", "#mrf");
        if (this.hzi > 0 && d === true) {
            return this.hzi
        }
        return 0
    };
    this.hvi = function() {
        var d = this.iye.szb("cmaxcredit") == null || this.iye.nxn("cmaxcredit", "#mrf");
        if (this.ljp > 0 && d === true) {
            return this.ljp
        }
        return 0
    };
    this.los = function() {
        var d = this.iye.szb("cmaxwin") == null || this.iye.nxn("cmaxwin", "#mrf");
        if (this.bko > 0 && d === true) {
            return this.bko
        }
        return 0
    };
    this.lyq = function() {
        var f = this.iye.szb("cmincredit") == null || this.iye.nxn("cmincredit", "#mrf")
            , d = this.iye.szb("cmaxcredit") == null || this.iye.nxn("cmaxcredit", "#mrf")
            , e = this.iye.szb("cmaxwin") == null || this.iye.nxn("cmaxwin", "#mrf");
        this.ymb = false;
        this.zkm = false;
        this.tyt = (this.hxy > 0) ? this.parent.jxl() * this.hxy : this.tyt;
        this.ipj = (this.bkp > 0) ? this.parent.jxl() * this.bkp : this.ipj;
        if (this.bim === true) {
            f = this.ejw;
            d = false;
            e = false;
            this.lhi()
        } else {
            if (this.ejw === true) {
                f = true;
                this.hzi = (this.hzi < this.parent.qqk) ? this.hzi : this.parent.qqk;
                this.hzi = (this.hzi > 0) ? this.hzi : this.parent.qqk
            } else {
                f = (this.hzi <= this.parent.qqk) ? f : false;
                this.hzi = (this.hzi < this.parent.qqk) ? this.hzi : this.parent.qqk
            }
            d = (this.ljp >= this.parent.qqk) ? d : false;
            this.ljp = (this.ljp > this.parent.qqk) ? this.ljp : this.parent.qqk
        }
        this.iye.nxn("cmincredit", "#joe", [f]);
        this.iye.nxn("cmaxcredit", "#joe", [d]);
        this.iye.nxn("cmaxwin", "#joe", [e]);
        this.iye.nxn("gamesd", "#xqa", [(this.eqq[this.wrz] > 0) ? this.eqq[this.wrz] : "---"]);
        this.iye.nxn("mincreditd", "#xqa", [(f === true && this.hzi > 0) ? this.parent.lmh(this.hzi) : "---"]);
        this.iye.nxn("maxcreditd", "#xqa", [(d === true && this.ljp > 0) ? this.parent.lmh(this.ljp) : "---"]);
        this.iye.nxn("maxwind", "#xqa", [(e === true && this.bko > 0) ? this.parent.lmh(this.bko) : "---"]);
        this.iye.nxn("lmincredit", "#ief", [f]);
        this.iye.nxn("mmincredit", "#ief", [f && this.hzi < this.parent.qqk]);
        this.iye.nxn("lmaxcredit", "#ief", [d && this.ljp > this.parent.qqk]);
        this.iye.nxn("mmaxcredit", "#ief", [d]);
        this.iye.nxn("lmaxwin", "#ief", [e && this.bko > this.tyt]);
        this.iye.nxn("mmaxwin", "#ief", [e]);
        if (this.ghs === false) {
            this.ahn(true);
            this.ief(true);
            this.parent.isl()
        } else {
            this.qxs();
            this.parent.tud.qic("panel_out");
            this.parent.tud.jfc("panel_out");
            this.pxv()
        }
    };
    this.duw = function() {
        b.ahn(false);
        if (b.ghs === false) {
            b.ief(false);
            b.parent.isl()
        } else {
            b.nrw();
            b.parent.tud.qic("panel_out");
            b.parent.tud.jfc("panel_out");
            b.pxv()
        }
    };
    this.qxs = function() {
        this.ief(true);
        this.izn = true;
        this.csv = false;
        this.wih = c;
        this.vbj = Math.floor(this.width / this.est);
        this.apr = 0;
        this.xrc = 0;
        this.pbq = new Date().getTime()
    };
    this.nrw = function() {
        this.izn = true;
        this.csv = false;
        this.wih = a;
        this.vbj = -Math.floor(this.width / this.est);
        this.apr = 1;
        this.xrc = this.width;
        this.pbq = new Date().getTime()
    };
    this.pxv = function() {
        var d = b.ktt
            , e = new Date().getTime();
        if (b.apr < b.est) {
            b.xrc += b.vbj;
            b.apr++;
            b.parent.isl();
            d = (((b.wih === a) ? b.apr - 1 : b.apr) * b.ktt - (e - b.pbq));
            b.fkn = setTimeout(b.pxv, d)
        } else {
            b.izn = false;
            b.csv = true;
            if (b.wih == a) {
                b.ief(false);
                b.parent.fez();
                if (b.ymb === true) {
                    b.hrm = setTimeout(b.parent.jmm, 200)
                }
            } else {
                if (b.wih == c) {
                    b.ahn(true)
                }
            }
            b.parent.isl()
        }
    };
    this.stop = function() {
        clearTimeout(this.fkn);
        clearTimeout(this.zee);
        clearTimeout(this.hrm);
        clearInterval(this.ayv)
    };
    this.btw = function(d) {
        this.itb = d.dzg;
        this.eha = d.wld;
        this.eit = d.vvi;
        this.iye.nxn("start", "#xqa", [d.start]);
        this.iye.nxn("cancel", "#xqa", [d.hra]);
        this.iye.nxn("cmincredit", "#xqa", [d.khi]);
        this.iye.nxn("cmaxcredit", "#xqa", [d.jtp]);
        this.iye.nxn("cmaxwin", "#xqa", [d.vfh]);
        if (this.parent.uge === true && vit.vjo.value44.d === true) {
            this.fcp = d.sqf
        }
    };
    this.isl = function(n, m, o, j) {
        if (!this.zeb()) {
            return
        }
        var f = (n != null && m != null && o != null && j != null)
            , p = this.context2D
            , d = this.iye.anz()
            , e = this.blt
            , l = this.lqc;
        if (this.ccx) {
            e = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            e.addColorStop(0, this.blt);
            e.addColorStop(1, this.ccx)
        }
        if (this.stq) {
            if (this.pxt === "center") {
                l = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height)
            } else {
                if (this.pxt === "left") {
                    l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                } else {
                    if (this.pxt === "right") {
                        l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                    }
                }
            }
            if (this.pxt === "left") {
                l.addColorStop(1, this.lqc);
                l.addColorStop(0, this.stq)
            } else {
                if (this.pxt === "center" || this.pxt === "right") {
                    l.addColorStop(0, this.lqc);
                    l.addColorStop(1, this.stq)
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
        vit.gtm.hde(p, 0, 0, this.width, this.height, this.bvk, this.fma, this.fma, this.bvk, e, 1, l, this.zev, 1);
        vit.gtm.gzv(p, this.yfa.x, this.yfa.y, this.yfa.width, this.yfa.height, this.drm, this.ujz, this.zvl, this.zev / 2);
        vit.gtm.gzv(p, this.qxz.x, this.qxz.y, this.qxz.width, this.qxz.height, this.drm, this.ujz, this.zvl, this.zev / 2);
        vit.gtm.xwp(p, this.itb, this.sog, this.ssa.x, this.ssa.y, this.ssa.width, this.ssa.height, this.dpv, this.blc, this.yjy);
        vit.gtm.vis(p, this.fcp, this.eqn, this.gtb.x, this.gtb.y, this.gtb.width, this.gtb.height, this.dpv, this.dgj, this.yjy, "center", true);
        vit.gtm.gzk(p, this.eha, this.eqn, this.dpy.x, this.dpy.y, this.dpy.width, this.dpy.height, this.dpv, this.dgj, this.yjy, 0);
        vit.gtm.xwp(p, this.eit, this.eqn, this.hvc.x, this.hvc.y, this.hvc.width, this.hvc.height, this.dpv, this.dgj, this.yjy);
        for (var g = 0, k = d.length; g < k; g++) {
            d[g].isl()
        }
        p.restore();
        if (this.riv && this.nxv) {
            if (this.izn) {
                if (this.xrc > 0) {
                    if (this.pxt === "left") {
                        this.riv.drawImage(this.nxv, this.width - this.xrc, 0, this.xrc, this.height, this.x, this.y, this.xrc, this.height)
                    } else {
                        if (this.pxt === "right") {
                            this.riv.drawImage(this.nxv, 0, 0, this.xrc, this.height, this.x + this.width - this.xrc, this.y, this.xrc, this.height)
                        }
                    }
                }
            } else {
                if (f) {
                    this.riv.drawImage(this.nxv, n, m, o, j, this.x + n, this.y + m, o, j)
                } else {
                    this.riv.drawImage(this.nxv, this.x, this.y)
                }
            }
        }
    };
    this.ibz = function() {
        b.parent.isl();
        if (b.eqq[b.wrz] <= 0) {
            return
        }
        if (b.ghs === false) {
            b.zee = setTimeout(b.parent.fez, 400);
            b.hrm = setTimeout(b.parent.jmm, 500)
        } else {
            b.izn = true;
            b.ymb = true;
            b.zee = setTimeout(b.duw, 400)
        }
    };
    this.mik = function() {
        b.parent.isl();
        b.zkm = true;
        if (b.ghs === false) {
            b.zee = setTimeout(b.parent.fez, 400)
        } else {
            b.izn = true;
            b.zee = setTimeout(b.duw, 400)
        }
    };
    this.bmr = function() {
        b.wrz = (b.wrz < b.eqq.length - 1) ? b.wrz + 1 : 0;
        b.parent.tud.jfc("step0");
        b.iye.nxn("gamesd", "#xqa", [(b.eqq[b.wrz] > 0) ? b.eqq[b.wrz] : "---"]);
        b.parent.isl();
        return (b.wrz >= b.eqq.length - 1)
    };
    this.whx = function() {
        b.wrz = (b.wrz > 0) ? b.wrz - 1 : b.eqq.length - 1;
        b.parent.tud.jfc("step0");
        b.iye.nxn("gamesd", "#xqa", [(b.eqq[b.wrz] > 0) ? b.eqq[b.wrz] : "---"]);
        b.parent.isl();
        return (b.wrz <= 0)
    };
    this.vlx = function() {
        var d = b.iye.szb("cmincredit") == null || b.iye.nxn("cmincredit", "#mrf");
        if (d === true) {
            if (++b.izv > 10) {
                b.eol = 10
            }
            b.hzi = (b.hzi + (b.ipj * b.eol) <= b.parent.qqk) ? b.hzi + (b.ipj * b.eol) : b.parent.qqk;
            b.parent.tud.jfc("step0");
            b.iye.nxn("mincreditd", "#xqa", [(b.hzi > 0) ? b.parent.lmh(b.hzi) : "---"]);
            b.iye.nxn("mmincredit", "#ief", [d && b.hzi < b.parent.qqk]);
            b.iye.nxn("lmincredit", "#ief", [d && b.hzi > 0]);
            b.parent.isl();
            return (b.hzi >= b.parent.qqk)
        }
        return true
    };
    this.rrn = function() {
        var d = b.iye.szb("cmincredit") == null || b.iye.nxn("cmincredit", "#mrf");
        if (d === true) {
            if (++b.izv > 10) {
                b.eol = 10
            }
            b.hzi = (b.hzi - (b.ipj * b.eol) > 0) ? b.hzi - (b.ipj * b.eol) : 0;
            b.parent.tud.jfc("step0");
            b.iye.nxn("mincreditd", "#xqa", [(b.hzi > 0) ? b.parent.lmh(b.hzi) : "---"]);
            b.iye.nxn("mmincredit", "#ief", [d && b.hzi < b.parent.qqk]);
            b.iye.nxn("lmincredit", "#ief", [d && b.hzi > 0]);
            b.parent.isl();
            return (b.hzi >= b.parent.qqk || b.hzi <= 0)
        }
        return true
    };
    this.xsc = function() {
        var d = b.iye.szb("cmaxcredit") == null || b.iye.nxn("cmaxcredit", "#mrf");
        if (d === true) {
            if (++b.izv > 10) {
                b.eol = 10
            }
            b.ljp = (b.ljp + (b.tyt * b.eol) > 0) ? b.ljp + (b.tyt * b.eol) : 0;
            b.parent.tud.jfc("step0");
            b.iye.nxn("maxcreditd", "#xqa", [(b.ljp > 0) ? b.parent.lmh(b.ljp) : "---"]);
            b.iye.nxn("lmaxcredit", "#ief", [d && b.ljp > b.parent.qqk]);
            b.parent.isl();
            return (b.ljp <= b.parent.qqk)
        }
        return true
    };
    this.xmw = function() {
        var d = b.iye.szb("cmaxcredit") == null || b.iye.nxn("cmaxcredit", "#mrf");
        if (d === true) {
            if (++b.izv > 10) {
                b.eol = 10
            }
            b.ljp = (b.ljp - (b.tyt * b.eol) > b.parent.qqk) ? b.ljp - (b.tyt * b.eol) : b.parent.qqk;
            b.parent.tud.jfc("step0");
            b.iye.nxn("maxcreditd", "#xqa", [(b.ljp > 0) ? b.parent.lmh(b.ljp) : "---"]);
            b.iye.nxn("lmaxcredit", "#ief", [d && b.ljp > b.parent.qqk]);
            b.parent.isl();
            return (b.ljp <= b.parent.qqk)
        }
        return true
    };
    this.njh = function() {
        var d = b.iye.szb("cmaxwin") == null || b.iye.nxn("cmaxwin", "#mrf");
        if (d === true) {
            if (++b.izv > 10) {
                b.eol = 10
            }
            b.bko = (b.bko + (b.tyt * b.eol) > 0) ? b.bko + (b.tyt * b.eol) : 0;
            b.parent.tud.jfc("step0");
            b.iye.nxn("maxwind", "#xqa", [(b.bko > 0) ? b.parent.lmh(b.bko) : "---"]);
            b.iye.nxn("lmaxwin", "#ief", [d && b.bko > b.tyt]);
            b.parent.isl();
            return (b.bko <= b.tyt)
        }
        return true
    };
    this.xao = function() {
        var d = b.iye.szb("cmaxwin") == null || b.iye.nxn("cmaxwin", "#mrf");
        if (d === true) {
            if (++b.izv > 10) {
                b.eol = 10
            }
            b.bko = (b.bko - (b.tyt * b.eol) > 0) ? b.bko - (b.tyt * b.eol) : b.tyt;
            b.parent.tud.jfc("step0");
            b.iye.nxn("maxwind", "#xqa", [(b.bko > 0) ? b.parent.lmh(b.bko) : "---"]);
            b.iye.nxn("lmaxwin", "#ief", [d && b.bko > b.tyt]);
            b.parent.isl();
            return (b.bko <= b.tyt)
        }
        return true
    };
    this.szt = function() {
        var d = b.iye.szb("cmincredit") == null || b.iye.nxn("cmincredit", "#mrf");
        b.hzi = b.parent.qqk;
        b.iye.nxn("mincreditd", "#xqa", [(d === true && b.hzi > 0) ? b.parent.lmh(b.hzi) : "---"]);
        b.iye.nxn("lmincredit", "#ief", [d]);
        b.iye.nxn("mmincredit", "#ief", [d && b.hzi < b.parent.qqk]);
        b.parent.isl()
    };
    this.vfq = function() {
        var d = b.iye.szb("cmaxcredit") == null || b.iye.nxn("cmaxcredit", "#mrf");
        b.ljp = b.parent.qqk;
        b.iye.nxn("maxcreditd", "#xqa", [(d === true && b.ljp > 0) ? b.parent.lmh(b.ljp) : "---"]);
        b.iye.nxn("lmaxcredit", "#ief", [d && b.ljp > b.parent.qqk]);
        b.iye.nxn("mmaxcredit", "#ief", [d]);
        b.parent.isl()
    };
    this.hug = function() {
        var d = b.iye.szb("cmaxwin") == null || b.iye.nxn("cmaxwin", "#mrf");
        if (b.bko === 0) {
            b.bko = b.tyt
        }
        b.iye.nxn("maxwind", "#xqa", [(d === true && b.bko > 0) ? b.parent.lmh(b.bko) : "---"]);
        b.iye.nxn("lmaxwin", "#ief", [d && b.bko > b.tyt]);
        b.iye.nxn("mmaxwin", "#ief", [d]);
        b.parent.isl()
    }
}
wco.prototype = new pzb;

function lvy() {
    this.odl = "right";
    this.cib = "left";
    this.bga = null;
    this.bta = null;
    this.itb = null;
    this.xta = -1;
    this.gdn = -1;
    this.csv = true;
    this.zly = false;
    this.ilo = false;
    this.izn = false;
    this.zqo = 0;
    this.bna = 0;
    this.qoz = [];
    this.bho = 0;
    this.tnt = 0;
    this.nap = 1;
    this.sns = 0;
    this.szo = 0;
    this.pxt = this.odl;
    this.dpv = null;
    this.yjy = "bold";
    this.eqn = "rgb(255,255,255)";
    this.blt = "rgb(0,0,0)";
    this.skz = "rgb(0,0,0)";
    this.svh = "rgb(0,0,0)";
    this.skp = 0.7;
    this.vhi = null;
    this.mzh = null;
    this.wcr = null;
    this.fuw = new qlq();
    this.jfj = new qlq();
    this.fcn = new qlq();
    this.ssa = new qlq();
    this.zev = 2;
    this.kzn = 5;
    this.bxu = 4;
    this.avj = 10;
    this.tzo = 5;
    this.qyx = 15;
    var a = 200;
    this.oab = function(c, d, f) {
        this.qoz = [];
        this.zqo = (d < 0) ? 0 : d;
        this.bna = (f < 0) ? 0 : f;
        for (var e = this.zqo, b = 0; e <= this.bna; e++) {
            this.qoz[b++] = c[e]
        }
        this.bho = this.qoz.length;
        this.sns = this.fuw.height / this.bho
    };
    this.zxd = function(b) {
        try {
            this.qyx = b.fontSize;
            this.zev = b.zqj;
            this.kzn = b.edp;
            this.bxu = b.fdk;
            this.avj = b.sfc;
            this.tzo = b.wxv;
            this.fuw = new qlq(b.eaq.x, b.eaq.y + b.axa, b.eaq.width, b.eaq.height - 2 * b.axa);
            this.jfj = new qlq(b.eaq.x, b.eaq.y, b.eaq.width, b.axa);
            this.fcn = new qlq(b.eaq.x, b.eaq.y + b.eaq.height - b.axa, b.eaq.width, b.axa);
            this.ssa = b.vuf
        } catch (c) {
            console.error(c)
        }
    };
    this.yek = function(b) {
        try {
            this.dpv = b.font;
            this.yjy = b.exc;
            this.eqn = b.rbc;
            this.blt = b.backgroundColor;
            this.skz = b.hdr;
            this.svh = b.lxr;
            this.skp = b.rzp;
            this.mzh = this.context2D.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            this.mzh.addColorStop(0, b.ftg);
            this.mzh.addColorStop(1, b.thu);
            this.vhi = this.context2D.createLinearGradient(this.fuw.x, 0, this.fuw.x + this.fuw.width, 0);
            this.wcr = this.context2D.createLinearGradient(this.width, this.height / 2, 0, this.height / 2);
            if (this.pxt === this.odl) {
                this.vhi.addColorStop(0, b.kaq);
                this.vhi.addColorStop(1, b.pil);
                this.wcr.addColorStop(0, b.wkt);
                this.wcr.addColorStop(1, b.cja)
            } else {
                if (this.pxt === this.cib) {
                    this.vhi.addColorStop(0, b.pil);
                    this.vhi.addColorStop(1, b.kaq);
                    this.wcr.addColorStop(0, b.cja);
                    this.wcr.addColorStop(1, b.wkt)
                }
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.kng = function(b, f, c) {
        if (this.izn || !this.csv || this.ilo) {
            return true
        }
        if ((b < this.x || b > this.x + this.width || f < this.y || f > this.y + this.height)) {
            return false
        } else {
            var e = b - this.x
                , d = f - this.y;
            if (this.fcn.vrr(e, d)) {
                this.gvx(-1);
                this.jfc();
                this.ixb(true, true)
            } else {
                if (this.jfj.vrr(e, d)) {
                    this.gvx(1);
                    this.jfc();
                    this.ixb(true, true)
                } else {
                    if (this.fuw.vrr(e, d)) {
                        this.zly = true;
                        this.zid(f);
                        this.ixb(true, true)
                    }
                }
            }
            this.vve(this.tnt);
            return true
        }
    };
    this.szw = function() {
        if (this.zly) {
            this.zly = false;
            this.jfc();
            return true
        }
        return false
    };
    this.zls = function(b) {
        if (this.izn || !this.csv || this.ilo) {
            return true
        }
        if (b == this.gdn) {
            this.gvx(-1);
            this.jfc();
            this.ixb(true, true);
            this.vve(this.tnt);
            return true
        } else {
            if (b == this.xta) {
                this.gvx(1);
                this.jfc();
                this.ixb(true, true);
                this.vve(this.tnt);
                return true
            }
        }
        return false
    };
    this.gjg = function() {};
    this.qsj = function(b, d, c) {
        if (!this.zly) {
            return false
        }
        if (b >= this.x + this.fuw.x && b <= this.x + this.fuw.x + this.fuw.width && d >= this.y + this.fuw.y && d <= this.y + this.fuw.y + this.fuw.height) {
            this.zid(d);
            this.vve(this.tnt);
            return true
        }
        return false
    };
    this.ixb = function(b, c) {
        this.ilo = b;
        c = (c === false) ? false : true;
        clearTimeout(this.dlf);
        if (this.ilo === true && c === true) {
            this.dlf = setTimeout(this.nca, a)
        }
    };
    this.nca = function() {};
    this.vve = function(b) {};
    this.jfc = function() {};
    this.evk = function(b, c) {
        this.zqo = (b < 0) ? 0 : b;
        this.bna = (c < 0) ? 0 : c;
        if (this.qoz) {
            this.bna = (this.bna > this.qoz.length - 1) ? this.qoz.length - 1 : this.bna
        }
    };
    this.lyq = function() {
        this.ief(true, true)
    };
    this.duw = function() {
        this.ief(false, true)
    };
    this.umq = function(b) {
        this.csv = b
    };
    this.ijh = function() {
        return this.csv
    };
    this.vuo = function(b, c) {
        this.tnt = b;
        if (this.tnt < this.zqo) {
            this.tnt = this.zqo
        }
        if (this.tnt >= this.bna) {
            this.tnt = this.bna
        }
        this.nap = this.tnt + 1;
        if (c && c === true) {
            this.parent.isl()
        }
    };
    this.trb = function(d, e) {
        this.tnt = 0;
        for (var c = 0, b = this.qoz.length; c < b; c++) {
            if (this.qoz[c] == d) {
                this.tnt = c;
                break
            }
        }
        this.tnt = (this.tnt >= this.zqo) ? this.tnt : this.zqo;
        this.tnt = (this.tnt < this.bna) ? this.tnt : this.bna;
        this.nap = this.tnt + 1;
        if (e) {
            this.parent.isl()
        }
    };
    this.zid = function(b) {
        this.tnt = Math.ceil(((this.fuw.height) - (b - this.fuw.y - this.y)) / this.sns) - 1;
        this.tnt = (this.tnt >= this.zqo) ? this.tnt : this.zqo;
        this.tnt = (this.tnt < this.bna) ? this.tnt : this.bna;
        this.nap = this.tnt + 1;
        this.parent.isl()
    };
    this.gvx = function(b) {
        this.tnt += b;
        this.tnt = (this.tnt >= this.zqo) ? this.tnt : this.zqo;
        this.tnt = (this.tnt < this.bna) ? this.tnt : this.bna;
        this.nap = this.tnt + 1;
        this.parent.isl()
    };
    this.isl = function() {
        if (!this.zeb() || !this.parent.tgx()) {
            return
        }
        this.sov();
        if (this.riv && this.nxv) {
            this.riv.drawImage(this.sex, this.x, this.y)
        }
    };
    this.sov = function() {
        var b = this.context2D;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        this.bnx(b);
        this.jbq(b);
        this.lcs(b);
        this.idr(b);
        this.ztw(b);
        b.restore()
    };
    this.bnx = function(b) {
        if (this.pxt === this.cib) {
            vit.gtm.hde(b, 0, 0, this.width, this.height, this.kzn, 0, 0, this.kzn, this.blt, 0.4, this.wcr, this.zev, 1)
        } else {
            if (this.pxt === this.odl) {
                vit.gtm.hde(b, 0, 0, this.width, this.height, 0, this.kzn, this.kzn, 0, this.blt, 0.4, this.wcr, this.zev, 1)
            }
        }
    };
    this.jbq = function(b) {
        vit.gtm.ami(b, this.fuw.x, this.fuw.y, this.fuw.width, this.fuw.height, this.skz, 1)
    };
    this.lcs = function(b) {
        vit.gtm.ami(b, this.fuw.x, this.fuw.y + this.fuw.height - Math.round(this.nap * this.sns), this.fuw.width, Math.round(this.nap * this.sns), this.mzh, 1)
    };
    this.idr = function(b) {
        vit.gtm.ami(b, this.fuw.x - this.bxu, this.fuw.y - this.bxu, this.fuw.width + 2 * this.bxu, this.fuw.height + 2 * this.bxu, null, 0, this.vhi, this.bxu, 1);
        if (this.pxt === this.cib) {
            vit.gtm.hde(b, this.fuw.x - this.bxu, this.jfj.y, this.fuw.width + 2 * this.bxu, this.jfj.height, this.avj, 0, 0, 0, this.vhi, 1);
            vit.gtm.hde(b, this.fuw.x - this.bxu, this.fcn.y, this.fuw.width + 2 * this.bxu, this.fcn.height, 0, 0, 0, this.avj, this.vhi, 1)
        } else {
            if (this.pxt === this.odl) {
                vit.gtm.hde(b, this.fuw.x - this.bxu, this.jfj.y, this.fuw.width + 2 * this.bxu, this.jfj.height, 0, this.avj, 0, 0, this.vhi, 1);
                vit.gtm.hde(b, this.fuw.x - this.bxu, this.fcn.y, this.fuw.width + 2 * this.bxu, this.fcn.height, 0, 0, this.avj, 0, this.vhi, 1)
            }
        }
        b.strokeStyle = this.vhi;
        b.lineWidth = Math.round(this.bxu / 4);
        b.beginPath();
        for (var c = 1; c < this.bho; c++) {
            b.moveTo(this.fuw.x, this.fuw.y + this.fuw.height - Math.round(c * this.sns));
            b.lineTo(this.fuw.x + this.fuw.width, this.fuw.y + this.fuw.height - Math.round(c * this.sns))
        }
        b.closePath();
        b.stroke();
        if (this.bga) {
            if (this.pxt === this.cib) {
                b.drawImage(this.bga, 0, 0, this.bga.width / 2, this.bga.height, this.fuw.x, this.fuw.y, this.fuw.width, this.fuw.height)
            } else {
                if (this.pxt === this.odl) {
                    b.drawImage(this.bga, this.bga.width / 2, 0, this.bga.width / 2, this.bga.height, this.fuw.x, this.fuw.y, this.fuw.width, this.fuw.height)
                }
            }
        }
    };
    this.ztw = function(c) {
        var f = this.eqn
            , e = this.eqn
            , b = 0
            , d = 0;
        if (this.pxt === this.cib) {
            b = this.tzo;
            d = this.fuw.x - 2 * this.tzo
        } else {
            if (this.pxt === this.odl) {
                b = this.fuw.x + this.fuw.width + this.tzo;
                d = this.width - this.tzo - (this.fuw.x + this.fuw.width + this.tzo)
            }
        }
        if (this.tnt > 0 && this.tnt < this.qoz.length - 1) {
            vit.gtm.ami(c, b, this.fuw.y + ((this.bho - this.nap) * this.sns), d, this.sns, this.svh, this.skp);
            vit.gtm.adt(c, this.qoz[this.tnt], this.mzh, b, this.fuw.y + ((this.bho - this.nap) * this.sns) + (this.sns - this.qyx) / 2, d, this.qyx, this.dpv, this.qyx, this.yjy, this.tzo)
        } else {
            if (this.tnt == 0) {
                f = this.mzh
            } else {
                if (this.tnt == this.qoz.length - 1) {
                    e = this.mzh
                }
            }
        }
        vit.gtm.ami(c, b, this.fuw.y + (this.sns * (this.bho - 1)), d, this.sns, this.svh, this.skp);
        vit.gtm.adt(c, this.qoz[0], f, b, this.fuw.y + (this.sns * (this.bho - 1)) + (this.sns - this.qyx) / 2, d, this.qyx, this.dpv, this.qyx, this.yjy, this.tzo);
        vit.gtm.ami(c, b, this.fuw.y, d, this.sns, this.svh, this.skp);
        vit.gtm.adt(c, this.qoz[this.qoz.length - 1], e, b, this.fuw.y + (this.sns - this.qyx) / 2, d, this.qyx, this.dpv, this.qyx, this.yjy, this.tzo);
        vit.gtm.xwp(c, "+", this.eqn, this.jfj.x, this.jfj.y, this.jfj.width, this.jfj.height, this.dpv, this.qyx, this.yjy);
        vit.gtm.xwp(c, "", this.eqn, this.fcn.x, this.fcn.y, this.fcn.width, this.fcn.height, this.dpv, this.qyx, this.yjy);
        if (this.itb) {
            vit.gtm.xwp(c, this.itb, this.eqn, this.ssa.x, this.ssa.y, this.ssa.width, this.ssa.height, this.dpv, this.qyx, this.yjy)
        }
    }
}
lvy.prototype = new pzb;

function yzv() {
    var a = this;
    this.iye = null;
    this.ktm = false;
    this.ltc = "";
    this.vie = "";
    this.mxq = "";
    this.jfk = "";
    this.fcp = "";
    this.eha = "";
    this.eit = "";
    this.dpv = "arial";
    this.yjy = "bold";
    this.eqn = "white";
    this.blt = "black";
    this.ccx = null;
    this.lqc = "white";
    this.stq = "rgb(150,150,150)";
    this.zev = 3;
    this.kzn = 4;
    this.fin = 24;
    this.utm = 24;
    this.dgj = 24;
    this.qhb = new qlq();
    this.adx = new qlq();
    this.xoh = new qlq();
    this.nmk = new qlq();
    this.mkk = new qlq();
    this.yre = new qlq();
    this.sto = new qlq();
    this.eqq = [];
    this.wrz = 0;
    this.ipj = 0;
    this.tyt = 0;
    this.bkp = 0;
    this.hxy = 0;
    this.hzi = 0;
    this.ljp = 0;
    this.bko = 0;
    this.nvw = false;
    this.ejw = false;
    this.tnt = 0;
    this.ywr = true;
    this.wad = true;
    this.icg = null;
    this.ayv = 0;
    this.izv = 0;
    this.eol = 1;
    this.spy = 250;
    this.zij = function(b, d, c) {
        yzv.prototype.zij.call(this, b, d, c);
        this.iye = new cia();
        this.iye.zij();
        this.iye.mzk("buttons");
        this.iye.mzk("displays");
        this.iye.mzk("checkboxes");
        this.iye.mzk("lbuttons");
        this.iye.mzk("mbuttons");
        this.iye.mzk("tbuttons");
        this.iye.mzk("bbuttons");
        this.iye.mzk("bdisplays");
        this.iye.mzk("abuttons");
        this.iye.mzk("adisplays");
        this.iye.mzk("acheckboxes");
        this.iye.mzk("sbuttons");
        this.iye.mzk("hbuttons")
    };
    this.ewp = function(b) {
        try {
            this.qyf(b);
            this.fhb(b);
            this.kuf(b)
        } catch (c) {
            console.error(c)
        }
    };
    this.yek = function(b) {
        try {
            var c = this.iye.rys("lbuttons")
                , n = this.iye.rys("mbuttons")
                , k = this.iye.rys("tbuttons")
                , m = this.iye.rys("sbuttons")
                , l = this.iye.rys("hbuttons")
                , f = this.iye.rys("displays");
            this.dpv = b.font;
            this.yjy = b.exc;
            this.eqn = b.rbc;
            this.blt = b.backgroundColor;
            this.ccx = b.rpz;
            this.lqc = b.borderColor;
            this.stq = b.axt;
            for (var d = 0, g = c.length; d < g; d++) {
                c[d].yek(b.val)
            }
            for (var d = 0, g = n.length; d < g; d++) {
                n[d].yek(b.sod)
            }
            for (var d = 0, g = k.length; d < g; d++) {
                k[d].yek(b.fmh)
            }
            for (var d = 0, g = f.length; d < g; d++) {
                f[d].yek(b.display)
            }
            for (var d = 0, g = m.length; d < g; d++) {
                m[d].yek(b.msx)
            }
            for (var d = 0, g = l.length; d < g; d++) {
                l[d].yek(b.msx)
            }
            this.iye.moq("checkboxes", "#yek", [b.zen])
        } catch (j) {
            console.error(j)
        }
    };
    this.zxd = function(g) {
        try {
            var b = this.iye.rys("lbuttons")
                , o = this.iye.rys("mbuttons")
                , l = this.iye.rys("tbuttons")
                , n = this.iye.rys("sbuttons")
                , m = this.iye.rys("hbuttons")
                , c = this.iye.rys("bdisplays")
                , f = this.iye.rys("adisplays");
            nfc = this.iye.rys("checkboxes"), xvg = n.length, nze = (xvg <= 2) ? g.tmc : (xvg <= 3) ? g.wvq : (xvg <= 4) ? g.ujl : g.piy, xvg = m.length, zpw = (xvg <= 2) ? g.tmc : (xvg <= 3) ? g.wvq : (xvg <= 4) ? g.ujl : g.piy, jhq = (this.parent.ynv() != null) ? g.krl : g.cvr;
            this.zev = g.zqj;
            this.kzn = g.edp;
            this.fin = g.xmp;
            this.utm = g.glx;
            this.dgj = g.aib;
            this.qhb = g.llb;
            this.adx = g.iec;
            this.xoh = g.nnf;
            this.nmk = g.rnl;
            this.mkk = g.edk;
            this.yre = g.agn;
            this.sto = g.bxj;
            this.iye.nxn("bett", "#giu", [jhq.fdn]);
            this.iye.nxn("autot", "#giu", [jhq.jsb]);
            this.iye.nxn("helpt", "#giu", [jhq.qzq]);
            this.iye.nxn("settingt", "#giu", [jhq.bec]);
            this.iye.nxn("returnt", "#giu", [jhq.iax]);
            this.iye.nxn("lbet", "#giu", [g.hja]);
            this.iye.nxn("mbet", "#giu", [g.cow]);
            this.iye.nxn("llines", "#giu", [g.nke]);
            this.iye.nxn("mlines", "#giu", [g.zit]);
            this.iye.nxn("betd", "#giu", [g.jfv]);
            this.iye.nxn("linesd", "#giu", [g.dnu]);
            this.iye.nxn("totald", "#giu", [g.jgp]);
            this.iye.nxn("lgames", "#giu", [g.rzh]);
            this.iye.nxn("mgames", "#giu", [g.ste]);
            this.iye.nxn("lmincredit", "#giu", [g.rqm]);
            this.iye.nxn("mmincredit", "#giu", [g.sgh]);
            this.iye.nxn("lmaxcredit", "#giu", [g.yjj]);
            this.iye.nxn("mmaxcredit", "#giu", [g.nlr]);
            this.iye.nxn("lmaxwin", "#giu", [g.isk]);
            this.iye.nxn("mmaxwin", "#giu", [g.dyp]);
            this.iye.nxn("gamesd", "#giu", [g.bjj]);
            this.iye.nxn("mincreditd", "#giu", [g.aof]);
            this.iye.nxn("maxcreditd", "#giu", [g.udt]);
            this.iye.nxn("maxwind", "#giu", [g.ncq]);
            this.iye.nxn("cmincredit", "#giu", [g.bih]);
            this.iye.nxn("cmaxcredit", "#giu", [g.cme]);
            this.iye.nxn("cmaxwin", "#giu", [g.upp]);
            for (var d = 0, j = b.length; d < j; d++) {
                b[d].zxd(g.val)
            }
            for (var d = 0, j = o.length; d < j; d++) {
                o[d].zxd(g.sod)
            }
            for (var d = 0, j = l.length; d < j; d++) {
                l[d].zxd(g.fmh)
            }
            for (var d = 0, j = c.length; d < j; d++) {
                c[d].zxd(g.hxv)
            }
            for (var d = 0, j = f.length; d < j; d++) {
                f[d].zxd(g.bmf)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].zxd(g.msx)
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].zxd(g.msx)
            }
            for (var d = 0, j = nfc.length; d < j; d++) {
                nfc[d].zxd(g.zen)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].giu(nze[d])
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].giu(zpw[d])
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.qyf = function(c) {
        var b = (this.parent.ynv() != null) ? c.krl : c.cvr;
        this.iye.eiu("bett", this.qnq(b.fdn, null, this.parent.tud.dra("btn_b"), this.hwz, null), ["buttons", "tbuttons"]);
        if (this.parent.ynv() != null) {
            this.iye.eiu("autot", this.qnq(b.jsb, null, this.parent.tud.dra("btn_as"), this.jbm, null), ["buttons", "tbuttons"])
        }
        this.iye.eiu("helpt", this.qnq(b.qzq, null, this.parent.tud.dra("btn_i"), this.iah, null), ["buttons", "tbuttons"]);
        this.iye.eiu("settingt", this.qnq(b.bec, null, this.parent.tud.dra("btn_se"), this.buu, null), ["buttons", "tbuttons"]);
        this.iye.eiu("returnt", this.qnq(b.iax, null, this.parent.tud.dra("btn_c"), this.cgp, null), ["buttons", "tbuttons"])
    };
    this.fhb = function(b) {
        this.iye.eiu("betd", this.svy(b.jfv, null, this.parent.wca), ["displays", "bdisplays"]);
        this.iye.eiu("lbet", this.gki(b.hja, "", this.parent.kka), ["buttons", "lbuttons", "bbuttons"]);
        this.iye.eiu("mbet", this.gki(b.cow, "+", this.parent.jyp), ["buttons", "mbuttons", "bbuttons"]);
        this.iye.eiu("linesd", this.svy(b.dnu, null, this.parent.ieq), ["displays", "bdisplays"]);
        if (this.ktm) {
            this.iye.eiu("llines", this.gki(b.nke, "", this.parent.exm), ["buttons", "lbuttons", "bbuttons"]);
            this.iye.eiu("mlines", this.gki(b.zit, "+", this.parent.kbe), ["buttons", "mbuttons", "bbuttons"])
        }
        this.iye.eiu("totald", this.svy(b.jgp, null, this.parent.jxl()), ["displays", "bdisplays"])
    };
    this.kuf = function(b) {
        this.iye.eiu("gamesd", this.svy(b.bjj, null, this.eqq[this.wrz]), ["displays", "adisplays"]);
        this.iye.eiu("lgames", this.gki(b.rzh, "", this.whx), ["buttons", "lbuttons", "abuttons"]);
        this.iye.eiu("mgames", this.gki(b.ste, "+", this.bmr), ["buttons", "mbuttons", "abuttons"]);
        this.iye.eiu("mincreditd", this.svy(b.aof, null, "---"), ["displays", "adisplays"]);
        this.iye.eiu("lmincredit", this.gki(b.rqm, "", this.rrn), ["buttons", "lbuttons", "abuttons"]);
        this.iye.eiu("mmincredit", this.gki(b.sgh, "+", this.vlx), ["buttons", "mbuttons", "abuttons"]);
        this.iye.eiu("maxcreditd", this.svy(b.udt, null, "---"), ["displays", "adisplays"]);
        this.iye.eiu("lmaxcredit", this.gki(b.yjj, "", this.xmw), ["buttons", "lbuttons", "abuttons"]);
        this.iye.eiu("mmaxcredit", this.gki(b.nlr, "+", this.xsc), ["buttons", "mbuttons", "abuttons"]);
        this.iye.eiu("maxwind", this.svy(b.ncq, null, "---"), ["displays", "adisplays"]);
        this.iye.eiu("lmaxwin", this.gki(b.isk, "", this.xao), ["buttons", "lbuttons", "abuttons"]);
        this.iye.eiu("mmaxwin", this.gki(b.dyp, "+", this.njh), ["buttons", "mbuttons", "abuttons"]);
        this.iye.eiu("cmincredit", this.iuw(b.bih, "", this.szt), ["checkboxes", "acheckboxes"]);
        this.iye.eiu("cmaxcredit", this.iuw(b.cme, "", this.vfq), ["checkboxes", "acheckboxes"]);
        this.iye.eiu("cmaxwin", this.iuw(b.upp, "", this.hug), ["checkboxes", "acheckboxes"])
    };
    this.hcw = function(i, g, f, e, d, b) {
        var c = new wle();
        c.zij(new qlq(0, 0, 1, 1), this.context2D);
        c.parent = this;
        c.vve = e;
        c.zjd = g;
        c.gkl(d, b);
        c.zxd(this.parent.vkm.frl.msx);
        c.yek(this.parent.style.frl.msx);
        c.rfj(f);
        this.iye.eiu(i, c, ["buttons", "sbuttons"])
    };
    this.sxx = function(f, e, d, c) {
        var b = new wle();
        b.zij(new qlq(0, 0, 1, 1), this.context2D);
        b.parent = this;
        b.vve = c;
        b.zjd = e;
        b.zxd(this.parent.vkm.frl.msx);
        b.yek(this.parent.style.frl.msx);
        b.rfj(d);
        this.iye.eiu(f, b, ["buttons", "hbuttons"])
    };
    this.svy = function(b, e, d) {
        var c = new jns();
        c.zij(b, this.context2D, null, e, d);
        c.parent = this;
        return c
    };
    this.gki = function(c, e, d) {
        var b = new hkq();
        b.zij(c, this.context2D, null, null, e);
        b.parent = this;
        b.vve = d;
        return b
    };
    this.qnq = function(d, g, f, e, c) {
        var b = new hkq();
        b.zij(d, this.context2D, null, f, g);
        b.parent = this;
        b.vve = e;
        if (c != null) {
            b.rrz = c
        }
        return b
    };
    this.iuw = function(c, e, d) {
        var b = new rtn();
        b.zij(c, this.context2D, null, e);
        b.parent = this;
        b.vve = d;
        return b
    };
    this.kng = function(o, n) {
        var m = this.iye.rys("buttons")
            , g = this.iye.rys("checkboxes")
            , f = o - this.x
            , d = n - this.y;
        for (var e = 0, l = m.length; e < l; e++) {
            var b = m[e];
            if (f >= b.x && f <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.zeb() === true) {
                if (b.ijh() === true && b.umv() === false) {
                    if (b instanceof wle) {
                        this.parent.tud.qic("btn");
                        this.parent.tud.jfc("btn");
                        b.eqb(true, true, true);
                        b.vve()
                    } else {
                        if (b instanceof hkq) {
                            if (b.qlp() === "rect") {
                                this.parent.tud.qic("btn");
                                this.parent.tud.jfc("btn");
                                b.eqb(true, true, false);
                                b.vve()
                            } else {
                                b.eqb(true, false, false);
                                this.izv = 0;
                                this.eol = 1;
                                if (b.vve() === false) {
                                    this.icg = function() {
                                        if (b.vve() === true) {
                                            clearInterval(a.ayv);
                                            b.eqb(false, true);
                                            for (var i = 0; i < l; i++) {
                                                m[i].ixb(false)
                                            }
                                        }
                                    };
                                    this.ayv = setInterval(this.icg, this.spy)
                                }
                            }
                        }
                    }
                    for (var c = 0; c < l; c++) {
                        m[c].ixb(true)
                    }
                    return true
                }
            }
        }
        for (var e = 0, l = g.length; e < l; e++) {
            var k = g[e];
            if (f >= k.x && f <= k.x + k.width && d >= k.y && d <= k.y + k.height) {
                if (k.zeb() === true && k.ijh() === true) {
                    k.joe(!k.mrf(), true);
                    k.vve();
                    for (var c = 0; c < l; c++) {
                        g[c].ixb(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.szw = function() {
        var e = this.iye.rys("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.xoe() == true && !(c instanceof hkq && c.qlp() === "rect")) {
                clearInterval(this.ayv);
                c.eqb(false, true);
                return true
            }
        }
        return false
    };
    this.zls = function(b) {};
    this.gjg = function(b) {};
    this.sfm = function(c, b, d) {
        this.iye.nxn("betd", "#xqa", [c]);
        this.iye.nxn("linesd", "#xqa", [b]);
        this.iye.nxn("totald", "#xqa", [d]);
        this.parent.isl()
    };
    this.azx = function(b) {
        this.eqq = b.g;
        this.ipj = b.v;
        this.tyt = b.v;
        this.nvw = b.r;
        this.ejw = b.l;
        if (typeof b.m != "undefined" && b.m != null && b.m > 0) {
            this.bkp = b.m;
            this.hxy = b.m
        }
    };
    this.lok = function() {
        if (this.nvw === true) {
            this.hzi = this.parent.qqk;
            this.ljp = this.parent.qqk;
            this.wrz = 0;
            this.bko = 0
        }
    };
    this.fbh = function() {
        if (this.eqq.length > 0 && this.wrz >= 0) {
            return this.eqq[this.wrz]
        }
        return 0
    };
    this.jtu = function() {
        var b = this.iye.szb("cmincredit") == null || this.iye.nxn("cmincredit", "#mrf");
        if (this.hzi > 0 && b === true) {
            return this.hzi
        }
        return 0
    };
    this.hvi = function() {
        var b = this.iye.szb("cmaxcredit") == null || this.iye.nxn("cmaxcredit", "#mrf");
        if (this.ljp > 0 && b === true) {
            return this.ljp
        }
        return 0
    };
    this.los = function() {
        var b = this.iye.szb("cmaxwin") == null || this.iye.nxn("cmaxwin", "#mrf");
        if (this.bko > 0 && b === true) {
            return this.bko
        }
        return 0
    };
    this.lyq = function(c, f, d) {
        if (this.eqq && this.eqq.length > 0) {
            var g = this.iye.szb("cmincredit") == null || this.iye.nxn("cmincredit", "#mrf")
                , e = this.iye.szb("cmaxcredit") == null || this.iye.nxn("cmaxcredit", "#mrf")
                , b = this.iye.szb("cmaxwin") == null || this.iye.nxn("cmaxwin", "#mrf");
            if (this.nvw === true) {
                g = this.ejw;
                e = false;
                b = false;
                this.lok()
            } else {
                if (this.ejw === true) {
                    g = true;
                    this.hzi = (this.hzi < this.parent.qqk) ? this.hzi : this.parent.qqk;
                    this.hzi = (this.hzi > 0) ? this.hzi : this.parent.qqk
                } else {
                    g = (this.hzi < this.parent.qqk) ? g : false;
                    this.hzi = (this.hzi < this.parent.qqk) ? this.hzi : this.parent.qqk
                }
                e = (this.ljp > this.parent.qqk) ? e : false;
                this.ljp = (this.ljp > this.parent.qqk) ? this.ljp : this.parent.qqk
            }
            this.iye.nxn("cmincredit", "#joe", [g]);
            this.iye.nxn("cmaxcredit", "#joe", [e]);
            this.iye.nxn("cmaxwin", "#joe", [b]);
            this.iye.nxn("gamesd", "#xqa", [(this.eqq[this.wrz] > 0) ? this.eqq[this.wrz] : "---"]);
            this.iye.nxn("mincreditd", "#xqa", [(g === true && this.hzi > 0) ? this.parent.lmh(this.hzi) : "---"]);
            this.iye.nxn("maxcreditd", "#xqa", [(e === true && this.ljp > 0) ? this.parent.lmh(this.ljp) : "---"]);
            this.iye.nxn("maxwind", "#xqa", [(b === true && this.bko > 0) ? this.parent.lmh(this.bko) : "---"]);
            this.iye.nxn("lmincredit", "#ief", [g]);
            this.iye.nxn("mmincredit", "#ief", [g]);
            this.iye.nxn("lmaxcredit", "#ief", [e]);
            this.iye.nxn("mmaxcredit", "#ief", [e]);
            this.iye.nxn("lmaxwin", "#ief", [b]);
            this.iye.nxn("mmaxwin", "#ief", [b])
        }
        this.ywr = c;
        this.wad = f;
        if (typeof d == "number") {
            if (d === 0) {
                this.hwz()
            } else {
                if (d === 1) {
                    if (this.parent.ynv() != null) {
                        this.jbm()
                    } else {
                        this.iah()
                    }
                } else {
                    if (d === 2) {
                        if (this.parent.ynv() != null) {
                            this.iah()
                        } else {
                            this.buu()
                        }
                    } else {
                        if (d === 3 && this.parent.ynv() != null) {
                            this.buu()
                        }
                    }
                }
            }
        } else {
            this.hwz()
        }
        this.iye.moq("tbuttons", "#umq", [true]);
        this.ief(true);
        this.parent.isl()
    };
    this.duw = function() {
        this.iye.moq("tbuttons", "#umq", [false]);
        this.iye.moq("bbuttons", "#umq", [false]);
        this.iye.moq("sbuttons", "#umq", [false]);
        this.iye.moq("abuttons", "#umq", [false]);
        this.iye.moq("acheckboxes", "#umq", [false]);
        this.ief(false);
        this.parent.isl()
    };
    this.stop = function() {
        clearInterval(this.ayv)
    };
    this.btw = function(d, b) {
        var c = "";
        this.iye.nxn("language", "#xqa", [vit.iyt.jkm(d.language)]);
        this.iye.nxn("audio", "#xqa", [vit.iyt.jkm(d.audio)]);
        this.iye.nxn("melody", "#xqa", [vit.iyt.jkm(d.nht)]);
        this.iye.nxn("fullscreen", "#xqa", [vit.iyt.jkm(d.oga)]);
        this.iye.nxn("turbo", "#xqa", [vit.iyt.jkm(d.ykf)]);
        this.iye.nxn("help", "#xqa", [vit.iyt.jkm(d.uud)]);
        this.iye.nxn("history", "#xqa", [vit.iyt.jkm(d.dwr)]);
        this.iye.nxn("statistic", "#xqa", [vit.iyt.jkm(d.hgr)]);
        this.iye.nxn("rules", "#xqa", [vit.iyt.jkm(d.qux)]);
        this.iye.nxn("gamble", "#xqa", [vit.iyt.jkm(d.scg)]);
        if (vit.iyt.yzk[vit.iyt.trp] === vit.zop.cib) {
            c = vit.iyt.jkm(d.left)
        } else {
            if (vit.iyt.yzk[vit.iyt.trp] === vit.zop.odl) {
                c = vit.iyt.jkm(d.gom)
            } else {
                if (vit.iyt.yzk[vit.iyt.trp] === vit.zop.bac) {
                    c = vit.iyt.jkm(d.nxc)
                }
            }
        }
        this.iye.nxn("adjustment", "#xqa", [c]);
        if (b && b === true) {
            this.ltc = vit.iyt.jkm(d.llk) + "/" + vit.iyt.jkm(d.erd) + ":";
            this.vie = vit.iyt.jkm(d.ieq) + ":"
        } else {
            this.ltc = vit.iyt.jkm(d.llk) + ":"
        }
        this.mxq = vit.iyt.jkm(d.agj) + ":";
        this.eha = vit.iyt.jkm(d.wld);
        this.eit = vit.iyt.jkm(d.vvi);
        if (this.parent.uge === true && vit.vjo.value44.d === true) {
            this.fcp = vit.iyt.jkm(d.sqf)
        }
        this.iye.nxn("cmincredit", "#xqa", [vit.iyt.jkm(d.khi)]);
        this.iye.nxn("cmaxcredit", "#xqa", [vit.iyt.jkm(d.jtp)]);
        this.iye.nxn("cmaxwin", "#xqa", [vit.iyt.jkm(d.vfh)])
    };
    this.isl = function(l, j, m, e) {
        if (!this.zeb() || !this.parent.tgx()) {
            return
        }
        var c = (l != null && j != null && m != null && e != null)
            , n = this.context2D
            , k = this.iye.rys("tbuttons")
            , b = this.blt
            , g = this.lqc;
        if (this.ccx) {
            b = n.createRadialGradient(this.x + this.width / 2, this.y + this.height / 2, this.height / 6, this.x + this.width / 2, this.y + this.height / 2, this.height);
            b.addColorStop(0, this.blt);
            b.addColorStop(1, this.ccx)
        }
        if (this.stq) {
            g = n.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            g.addColorStop(0, this.lqc);
            g.addColorStop(1, this.stq)
        }
        n.save();
        n.clearRect(0, 0, this.width, this.height);
        if (c) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        vit.gtm.gzv(n, 0, 0, this.width, this.height, this.kzn, b, g, this.zev);
        for (var d = 0, f = k.length; d < f; d++) {
            k[d].isl()
        }
        if (this.tnt === 0) {
            this.yqp(n)
        } else {
            if (this.tnt === 1) {
                this.rlk(n)
            } else {
                if (this.tnt === 2) {
                    this.pxw(n)
                } else {
                    if (this.tnt === 3) {
                        this.did(n)
                    }
                }
            }
        }
        n.restore();
        if (this.riv && this.nxv) {
            if (c) {
                this.riv.drawImage(this.nxv, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.riv.drawImage(this.nxv, this.x, this.y)
            }
        }
    };
    this.yqp = function(c) {
        var f = this.iye.rys("bbuttons")
            , d = this.iye.rys("bdisplays");
        if (this.qhb.width > 0 && this.qhb.height > 0) {
            vit.gtm.gzk(c, this.ltc, this.eqn, this.qhb.x, this.qhb.y, this.qhb.width, this.qhb.height, this.dpv, this.fin, this.yjy, 0)
        }
        if (this.adx.width > 0 && this.adx.height > 0) {
            vit.gtm.gzk(c, this.vie, this.eqn, this.adx.x, this.adx.y, this.adx.width, this.adx.height, this.dpv, this.fin, this.yjy, 0)
        }
        if (this.xoh.width > 0 && this.xoh.height > 0) {
            vit.gtm.gzk(c, this.mxq, this.eqn, this.xoh.x, this.xoh.y, this.xoh.width, this.xoh.height, this.dpv, this.fin, this.yjy, 0)
        }
        vit.gtm.vis(c, this.jfk, this.eqn, this.nmk.x, this.nmk.y, this.nmk.width, this.nmk.height, this.dpv, this.dgj, this.yjy, "center", true);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].isl()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].isl()
        }
    };
    this.rlk = function(c) {
        var f = this.iye.rys("abuttons")
            , d = this.iye.rys("adisplays")
            , g = this.iye.rys("acheckboxes");
        vit.gtm.vis(c, this.fcp, this.eqn, this.mkk.x, this.mkk.y, this.mkk.width, this.mkk.height, this.dpv, this.dgj, this.yjy, "center", true);
        vit.gtm.gzk(c, this.eha, this.eqn, this.yre.x, this.yre.y, this.yre.width, this.yre.height, this.dpv, this.utm, this.yjy, 0);
        vit.gtm.xwp(c, this.eit, this.eqn, this.sto.x, this.sto.y, this.sto.width, this.sto.height, this.dpv, this.utm, this.yjy);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].isl()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].isl()
        }
        for (var e = 0, b = g.length; e < b; e++) {
            g[e].isl()
        }
    };
    this.pxw = function(c) {
        var d = this.iye.rys("hbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].isl()
        }
    };
    this.did = function(c) {
        var d = this.iye.rys("sbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].isl()
        }
    };
    this.bmr = function() {
        a.wrz = (a.wrz < a.eqq.length - 1) ? a.wrz + 1 : 0;
        a.parent.tud.jfc("btn");
        a.iye.nxn("gamesd", "#xqa", [(a.eqq[a.wrz] > 0) ? a.eqq[a.wrz] : "---"]);
        a.isl();
        return (a.wrz >= a.eqq.length - 1)
    };
    this.whx = function() {
        a.wrz = (a.wrz > 0) ? a.wrz - 1 : a.eqq.length - 1;
        a.parent.tud.jfc("btn");
        a.iye.nxn("gamesd", "#xqa", [(a.eqq[a.wrz] > 0) ? a.eqq[a.wrz] : "---"]);
        a.isl();
        return (a.wrz <= 0)
    };
    this.vlx = function() {
        var b = a.iye.szb("cmincredit") == null || a.iye.nxn("cmincredit", "#mrf");
        if (b === true) {
            if (++a.izv > 10) {
                a.eol = 10
            }
            a.hzi = (a.hzi + (a.ipj * a.eol) <= a.parent.qqk) ? a.hzi + (a.ipj * a.eol) : a.parent.qqk;
            a.parent.tud.jfc("btn");
            a.iye.nxn("mincreditd", "#xqa", [(a.hzi > 0) ? a.parent.lmh(a.hzi) : "---"]);
            a.iye.nxn("mmincredit", "#ief", [b && a.hzi < a.parent.qqk]);
            a.iye.nxn("lmincredit", "#ief", [b && a.hzi > 0]);
            a.isl();
            return (a.hzi >= a.parent.qqk)
        }
        return true
    };
    this.rrn = function() {
        var b = a.iye.szb("cmincredit") == null || a.iye.nxn("cmincredit", "#mrf");
        if (b === true) {
            if (++a.izv > 10) {
                a.eol = 10
            }
            a.hzi = (a.hzi - (a.ipj * a.eol) > 0) ? a.hzi - (a.ipj * a.eol) : 0;
            a.parent.tud.jfc("btn");
            a.iye.nxn("mincreditd", "#xqa", [(a.hzi > 0) ? a.parent.lmh(a.hzi) : "---"]);
            a.iye.nxn("mmincredit", "#ief", [b && a.hzi < a.parent.qqk]);
            a.iye.nxn("lmincredit", "#ief", [b && a.hzi > 0]);
            a.isl();
            return (a.hzi >= a.parent.qqk || a.hzi <= 0)
        }
        return true
    };
    this.xsc = function() {
        var b = a.iye.szb("cmaxcredit") == null || a.iye.nxn("cmaxcredit", "#mrf");
        if (b === true) {
            if (++a.izv > 10) {
                a.eol = 10
            }
            a.ljp = (a.ljp + (a.tyt * a.eol) > 0) ? a.ljp + (a.tyt * a.eol) : 0;
            a.parent.tud.jfc("btn");
            a.iye.nxn("maxcreditd", "#xqa", [(a.ljp > 0) ? a.parent.lmh(a.ljp) : "---"]);
            a.iye.nxn("lmaxcredit", "#ief", [b && a.ljp > a.parent.qqk]);
            a.isl();
            return (a.ljp <= a.parent.qqk)
        }
        return true
    };
    this.xmw = function() {
        var b = a.iye.szb("cmaxcredit") == null || a.iye.nxn("cmaxcredit", "#mrf");
        if (b === true) {
            if (++a.izv > 10) {
                a.eol = 10
            }
            a.ljp = (a.ljp - (a.tyt * a.eol) > a.parent.qqk) ? a.ljp - (a.tyt * a.eol) : a.parent.qqk;
            a.parent.tud.jfc("btn");
            a.iye.nxn("maxcreditd", "#xqa", [(a.ljp > 0) ? a.parent.lmh(a.ljp) : "---"]);
            a.iye.nxn("lmaxcredit", "#ief", [b && a.ljp > a.parent.qqk]);
            a.isl();
            return (a.ljp <= a.parent.qqk)
        }
        return true
    };
    this.njh = function() {
        var b = a.iye.szb("cmaxwin") == null || a.iye.nxn("cmaxwin", "#mrf");
        if (b === true) {
            if (++a.izv > 10) {
                a.eol = 10
            }
            a.bko = (a.bko + (a.tyt * a.eol) > 0) ? a.bko + (a.tyt * a.eol) : 0;
            a.parent.tud.jfc("btn");
            a.iye.nxn("maxwind", "#xqa", [(a.bko > 0) ? a.parent.lmh(a.bko) : "---"]);
            a.iye.nxn("lmaxwin", "#ief", [b && a.bko > a.tyt]);
            a.isl();
            return (a.bko <= a.tyt)
        }
        return true
    };
    this.xao = function() {
        var b = a.iye.szb("cmaxwin") == null || a.iye.nxn("cmaxwin", "#mrf");
        if (b === true) {
            if (++a.izv > 10) {
                a.eol = 10
            }
            a.bko = (a.bko - (a.tyt * a.eol) > 0) ? a.bko - (a.tyt * a.eol) : a.tyt;
            a.parent.tud.jfc("btn");
            a.iye.nxn("maxwind", "#xqa", [(a.bko > 0) ? a.parent.lmh(a.bko) : "---"]);
            a.iye.nxn("lmaxwin", "#ief", [b && a.bko > a.tyt]);
            a.isl();
            return (a.bko <= a.tyt)
        }
        return true
    };
    this.szt = function() {
        var b = a.iye.szb("cmincredit") == null || a.iye.nxn("cmincredit", "#mrf");
        a.hzi = a.parent.qqk;
        a.iye.nxn("mincreditd", "#xqa", [(b === true && a.hzi > 0) ? a.parent.lmh(a.hzi) : "---"]);
        a.iye.nxn("lmincredit", "#ief", [b]);
        a.iye.nxn("mmincredit", "#ief", [b && a.hzi < a.parent.qqk]);
        a.isl()
    };
    this.vfq = function() {
        var b = a.iye.szb("cmaxcredit") == null || a.iye.nxn("cmaxcredit", "#mrf");
        a.ljp = a.parent.qqk;
        a.iye.nxn("maxcreditd", "#xqa", [(b === true && a.ljp > 0) ? a.parent.lmh(a.ljp) : "---"]);
        a.iye.nxn("lmaxcredit", "#ief", [b && a.ljp > a.parent.qqk]);
        a.iye.nxn("mmaxcredit", "#ief", [b]);
        a.isl()
    };
    this.hug = function() {
        var b = a.iye.szb("cmaxwin") == null || a.iye.nxn("cmaxwin", "#mrf");
        if (a.bko === 0) {
            a.bko = a.tyt
        }
        a.iye.nxn("maxwind", "#xqa", [(b === true && a.bko > 0) ? a.parent.lmh(a.bko) : "---"]);
        a.iye.nxn("lmaxwin", "#ief", [b && a.bko > a.tyt]);
        a.iye.nxn("mmaxwin", "#ief", [b]);
        a.isl()
    };
    this.hwz = function() {
        a.tnt = 0;
        a.iye.nxn("bett", "#eqb", [true, false, false]);
        a.iye.nxn("autot", "#eqb", [false, false, false]);
        a.iye.nxn("helpt", "#eqb", [false, false, false]);
        a.iye.nxn("settingt", "#eqb", [false, false, false]);
        a.iye.nxn("returnt", "#eqb", [false, false, false]);
        a.iye.moq("bbuttons", "#umq", [a.ywr]);
        a.iye.moq("bbuttons", "#ief", [a.ywr]);
        a.iye.moq("abuttons", "#umq", [false]);
        a.iye.moq("acheckboxes", "#umq", [false]);
        a.iye.moq("hbuttons", "#umq", [false]);
        a.iye.moq("sbuttons", "#umq", [false]);
        a.isl()
    };
    this.jbm = function() {
        var d = a.iye.szb("cmincredit") == null || a.iye.nxn("cmincredit", "#mrf")
            , c = a.iye.szb("cmaxcredit") == null || a.iye.nxn("cmaxcredit", "#mrf")
            , b = a.iye.szb("cmaxwin") == null || a.iye.nxn("cmaxwin", "#mrf");
        a.tnt = 1;
        a.ipj = (a.bkp > 0) ? a.parent.jxl() * a.bkp : a.ipj;
        a.tyt = (a.hxy > 0) ? a.parent.jxl() * a.hxy : a.tyt;
        a.iye.nxn("bett", "#eqb", [false, false, false]);
        a.iye.nxn("autot", "#eqb", [true, false, false]);
        a.iye.nxn("helpt", "#eqb", [false, false, false]);
        a.iye.nxn("settingt", "#eqb", [false, false, false]);
        a.iye.nxn("returnt", "#eqb", [false, false, false]);
        a.iye.moq("bbuttons", "#umq", [false]);
        a.iye.moq("abuttons", "#umq", [true]);
        a.iye.nxn("mmincredit", "#ief", [d && a.hzi < a.parent.qqk]);
        a.iye.nxn("lmaxcredit", "#ief", [c && a.ljp > a.parent.qqk]);
        a.iye.nxn("lmaxwin", "#ief", [b && a.bko > a.tyt]);
        a.iye.moq("acheckboxes", "#umq", [true]);
        a.iye.moq("hbuttons", "#umq", [false]);
        a.iye.moq("sbuttons", "#umq", [false]);
        if (a.ejw === true) {
            a.iye.nxn("cmincredit", "#umq", [false])
        }
        a.isl()
    };
    this.iah = function() {
        a.tnt = 2;
        a.iye.nxn("bett", "#eqb", [false, false, false]);
        a.iye.nxn("autot", "#eqb", [false, false, false]);
        a.iye.nxn("helpt", "#eqb", [true, false, false]);
        a.iye.nxn("settingt", "#eqb", [false, false, false]);
        a.iye.nxn("returnt", "#eqb", [false, false, false]);
        a.iye.moq("bbuttons", "#umq", [false]);
        a.iye.moq("abuttons", "#umq", [false]);
        a.iye.moq("acheckboxes", "#umq", [false]);
        a.iye.moq("hbuttons", "#umq", [true]);
        a.iye.moq("sbuttons", "#umq", [false]);
        a.isl()
    };
    this.buu = function() {
        a.tnt = 3;
        a.iye.nxn("bett", "#eqb", [false, false, false]);
        a.iye.nxn("autot", "#eqb", [false, false, false]);
        a.iye.nxn("helpt", "#eqb", [false, false, false]);
        a.iye.nxn("settingt", "#eqb", [true, false, false]);
        a.iye.nxn("returnt", "#eqb", [false, false, false]);
        a.iye.moq("bbuttons", "#umq", [false]);
        a.iye.moq("abuttons", "#umq", [false]);
        a.iye.moq("acheckboxes", "#umq", [false]);
        a.iye.moq("hbuttons", "#umq", [false]);
        a.iye.moq("sbuttons", "#umq", [true]);
        a.iye.nxn("gamble", "#umq", [a.wad]);
        a.isl()
    };
    this.cgp = function() {
        a.parent.ysr();
        a.iye.nxn("returnt", "#eqb", [false, false, false])
    }
}
yzv.prototype = new pzb;

function pgz() {
    var a = this;
    this.dpv = null;
    this.yjy = "bold";
    this.blt = "rgb(0,0,0)";
    this.ccx = null;
    this.eqn = "rgb(255,255,255)";
    this.stq = null;
    this.lqc = "rgb(60,60,60)";
    this.ytj = null;
    this.mhj = null;
    this.csv = false;
    this.aun = [];
    this.gzc = [];
    this.bks = null;
    this.ewh = 19;
    this.zvd = 15;
    this.toe = 120;
    this.txo = 2;
    this.qwx = 2;
    this.blk = 2;
    this.del = 10;
    this.qyx = 12;
    this.zij = function(b, d, c) {
        pgz.prototype.zij.call(this, b, d, c)
    };
    this.zxd = function(b) {
        try {
            this.qyx = b.fontSize;
            this.ewh = b.lrh;
            this.zvd = b.yqs;
            this.toe = b.bcr;
            this.txo = b.guo;
            this.qwx = b.hpu;
            this.blk = b.rne;
            this.del = b.ilq
        } catch (c) {
            console.error(c)
        }
    };
    this.yek = function(b) {
        try {
            this.dpv = b.font;
            this.yjy = b.exc;
            this.blt = b.backgroundColor;
            this.ccx = b.rpz;
            this.eqn = b.rbc;
            this.lqc = b.borderColor;
            this.stq = b.axt;
            if (this.ccx) {
                this.ytj = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.ytj.addColorStop(0, this.ccx);
                this.ytj.addColorStop(0.5, this.blt)
            } else {
                this.ytj = this.blt
            }
            if (this.stq) {
                this.mhj = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.mhj.addColorStop(0, this.stq);
                this.mhj.addColorStop(1, this.lqc)
            } else {
                this.mhj = this.lqc
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.kng = function(b, g, c) {
        var e = b - this.x
            , d = g - this.y
            , f = (c && c === true) ? this.del : 0;
        if (e >= this.x && e <= this.x + this.width && d >= this.y && d <= this.y + this.height + f && this.ijh()) {
            this.parent.ptu();
            return true
        }
        return false
    };
    this.ivm = function(d, b, c) {
        this.gzc.push({
            id: d
            , kuh: b
            , value: c
            , fbm: null
        })
    };
    this.dcz = function(e, c, d, b) {
        this.gzc.push({
            id: e
            , kuh: c
            , value: d
            , fbm: b
        })
    };
    this.keo = function(d, b, c) {
        this.aun.push({
            id: d
            , fxa: b
            , value: c
        })
    };
    this.plj = function(e, d) {
        for (var c = 0, b = this.gzc.length; c < b; c++) {
            if (this.gzc[c].id == e) {
                this.gzc[c].value = d;
                return true
            }
        }
        return false
    };
    this.yph = function(c, e) {
        for (var d = 0, b = c.length; d < b; d++) {
            if (c[d] == e) {
                return d
            }
        }
        return -1
    };
    this.rou = function(e, d) {
        for (var c = 0, b = this.aun.length; c < b; c++) {
            if (this.aun[c].id == e) {
                if (this.aun[c].value != d) {
                    this.aun[c].value = d;
                    return true
                } else {
                    return false
                }
            }
        }
        return false
    };
    this.ckr = function(b) {
        this.bks = b
    };
    this.umq = function(b) {
        this.csv = b
    };
    this.ijh = function(b) {
        return this.csv
    };
    this.qdi = function(c, b) {
        if (this.plj(c, b)) {
            window.gan(a.isl)
        }
    };
    this.yqr = function(c, b) {
        if (this.rou(c, b)) {
            window.gan(a.isl)
        }
    };
    this.wpy = function(b) {
        this.ckr(b);
        window.gan(a.isl)
    };
    this.isl = function() {
        if (!a.zeb() || !a.parent.tgx()) {
            return
        }
        var e = (a.height - a.qyx) / 2 + a.qwx
            , c = a.txo + a.ewh * a.gzc.length
            , d = a.width - c - (a.toe * a.aun.length)
            , b = a.context2D;
        b.save();
        vit.gtm.ami(b, 0, 0, a.width, a.height, a.ytj, 1);
        a.khe(b, e);
        a.bkn(b, e);
        if (a.bks && a.bks != "") {
            vit.gtm.xwp(b, a.bks, a.eqn, c, e, d, a.qyx, a.dpv, a.qyx, a.yjy)
        } else {
            if (a.ijh()) {
                a.ydm(b)
            }
        }
        a.diw(b, 0, a.height - a.blk / 2, a.width, a.height - a.blk / 2);
        b.restore();
        if (a.riv && a.nxv) {
            a.riv.drawImage(a.nxv, a.x, a.y)
        }
    };
    this.khe = function(d, g) {
        var c = 0;
        for (var f = 0, b = this.gzc.length; f < b; f++) {
            if (this.gzc[f].fbm) {
                var e = this.yph(this.gzc[f].fbm, this.gzc[f].value);
                if (this.gzc[f].kuh instanceof Array) {
                    vit.gtm.xwp(d, this.gzc[f].kuh[e], this.eqn, c, g, this.ewh, this.qyx, this.dpv, this.qyx, this.yjy)
                } else {
                    if (this.gzc[f].kuh instanceof Image || this.gzc[f].kuh instanceof HTMLCanvasElement) {
                        d.drawImage(this.gzc[f].kuh, e * this.zvd, 0, this.zvd, this.gzc[f].kuh.height, c + this.txo, g - this.qwx, this.ewh - 2 * this.txo, this.qyx)
                    }
                }
            } else {
                d.save();
                d.globalAlpha = (this.gzc[f].value == true) ? 1 : 0.3;
                if (this.gzc[f].kuh instanceof String) {
                    vit.gtm.xwp(d, this.gzc[f].kuh, this.eqn, c, g, this.ewh, this.qyx, this.dpv, this.qyx, this.yjy)
                } else {
                    if (this.gzc[f].kuh instanceof Image || this.gzc[f].kuh instanceof HTMLCanvasElement) {
                        d.drawImage(this.gzc[f].kuh, c + this.txo, g - this.qwx, this.ewh - 2 * this.txo, this.qyx)
                    }
                }
                d.restore()
            }
            c += this.ewh;
            this.diw(d, c, 0, c, this.height)
        }
        return c
    };
    this.bkn = function(d, f) {
        var c = this.width - this.txo - this.toe * this.aun.length;
        for (var e = 0, b = this.aun.length; e < b; e++) {
            if (this.aun[e].id == "freeplay") {
                vit.gtm.ami(d, c, 0, this.toe, this.height, "red", 0.4)
            } else {
                if (this.aun[e].id == "freespin") {
                    vit.gtm.ami(d, c, 0, this.toe, this.height, "rgb(100,255,100)", 0.5)
                }
            }
            this.diw(d, c, 0, c, this.height);
            vit.gtm.xwp(d, this.aun[e].fxa + this.aun[e].value, this.eqn, c, f, this.toe, this.qyx, this.dpv, this.qyx, this.yjy);
            c += this.toe
        }
    };
    this.diw = function(b, d, f, c, e) {
        b.save();
        b.strokeStyle = this.mhj;
        b.lineWidth = this.blk;
        b.beginPath();
        b.moveTo(d, f);
        b.lineTo(c, e);
        b.stroke();
        b.restore()
    };
    this.ydm = function(c) {
        if (this.parent.vxx.szb("topb") == null) {
            return
        }
        var g = 3 * this.height
            , j = this.blk
            , e = 9
            , d = Math.floor(this.height / 5)
            , b = (this.width - g) / 2
            , k = this.blk;
        c.save();
        c.strokeStyle = this.lqc;
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
pgz.prototype = new pzb;

function ijk() {
    var b = this;
    var c = 0;
    var a = 1;
    this.fbc = 7;
    this.dsg = 89;
    this.yse = 10000;
    this.iye = null;
    this.csv = false;
    this.izn = false;
    this.rmt = -1;
    this.fkn = 0;
    this.dpv = null;
    this.yjy = "bold";
    this.blt = "black";
    this.qch = null;
    this.nwx = null;
    this.wcr = null;
    this.eqn = "white";
    this.yvc = 0.8;
    this.uzr = 0;
    this.fpy = 0;
    this.apr = 0;
    this.wih = 0;
    this.kzi = 0;
    this.nut = 0;
    this.cje = 0;
    this.txo = 10;
    this.qwx = 5;
    this.wla = 10;
    this.xdd = this.txo;
    this.lwj = 10;
    this.whu = 20;
    this.gim = 40;
    this.zev = 4;
    this.qyx = 10;
    this.jrv = null;
    this.ihf = null;
    this.pav = "";
    this.dns = null;
    this.zij = function(d, f, e) {
        ijk.prototype.zij.call(this, d, f, e);
        this.iye = new cia();
        this.iye.zij();
        this.iye.mzk("buttons");
        this.iye.mzk("system");
        this.iye.mzk("setting")
    };
    this.zxd = function(d) {
        try {
            this.qyx = d.fontSize;
            this.lwj = d.uip;
            this.whu = d.ovu;
            this.gim = d.scu;
            this.zev = d.zqj;
            this.txo = d.guo;
            this.qwx = d.hpu;
            this.wla = d.ike
        } catch (f) {
            console.error(f)
        }
    };
    this.yek = function(g, m) {
        try {
            var k = this.iye.rys("buttons")
                , j = (m === true) ? g.its.efj : g.ovo.efj;
            this.dpv = g.font;
            this.yjy = g.exc;
            this.blt = g.backgroundColor;
            this.qch = g.kdr;
            this.nwx = g.cur;
            this.eqn = g.rbc;
            this.yvc = g.xnh;
            if (this.qch && this.nwx) {
                this.wcr = this.context2D.createLinearGradient(0, 0, this.width, 0);
                this.wcr.addColorStop(0, this.qch);
                this.wcr.addColorStop(0.5, this.nwx);
                this.wcr.addColorStop(1, this.qch)
            }
            for (var f = 0, d = k.length; f < d; f++) {
                k[f].yek(j)
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.kng = function(p, o) {
        var n = this.iye.anz()
            , q = this.iye.szb("audio")
            , r = this.iye.szb("language")
            , f = this.iye.szb("history")
            , e = p - this.x
            , d = o - this.y;
        if (this.izn) {
            return true
        }
        for (var l = 0, m = n.length; l < m; l++) {
            var g = n[l];
            if (e >= g.x && e <= g.x + g.width && d >= g.y && d <= g.y + g.height && g.zeb()) {
                if (g.ijh() && !g.umv()) {
                    if (g != q && g != r) {
                        this.parent.tud.qic("btn");
                        this.parent.tud.jfc("btn")
                    }
                    g.eqb(true, true, false);
                    g.vve();
                    for (var k = 0; k < m; k++) {
                        n[k].ixb(true)
                    }
                    if (g != f) {
                        if (this.rmt >= 0) {
                            clearTimeout(this.rmt);
                            this.rmt = -1
                        }
                        this.rmt = setTimeout(this.lps, this.yse)
                    }
                }
                return true
            }
        }
        if (this.zeb() && this.ijh()) {
            if (p < this.x + this.kzi || p > this.x + this.kzi + this.nut || o < this.y || o > this.y + this.height) {
                if (this.rmt >= 0) {
                    clearTimeout(this.rmt);
                    this.rmt = -1
                }
                return false
            }
        }
        return true
    };
    this.szw = function() {
        var g = this.iye.anz();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.xoe() == true) {
                e.eqb(false, true);
                return true
            }
        }
        return false
    };
    this.zls = function(e) {
        var o = this.iye.anz()
            , d = this.iye.rys("system")
            , m = this.iye.rys("setting")
            , q = this.iye.szb("audio")
            , l = 0
            , k = 0
            , n = 0
            , g = 0;
        if (this.izn) {
            return true
        }
        for (l = 0, n = m.length; l < n; l++) {
            var f = m[l];
            if ((e == f.rrz || e == f.smg) && !f.umv()) {
                if (f != q) {
                    this.parent.tud.qic("btn");
                    this.parent.tud.jfc("btn")
                }
                f.eqb(true, true, false);
                f.vve();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].ixb(true)
                }
                if (this.rmt >= 0) {
                    clearTimeout(this.rmt);
                    this.rmt = -1
                }
                return true
            }
        }
        for (l = 0, n = d.length; l < n; l++) {
            var f = d[l];
            if ((e == f.rrz || e == f.smg) && f.ijh() && !f.umv()) {
                if (f != q) {
                    this.parent.tud.qic("btn");
                    this.parent.tud.jfc("btn")
                }
                f.eqb(true, true, false);
                f.vve();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].ixb(true)
                }
                if (this.rmt >= 0) {
                    clearTimeout(this.rmt);
                    this.rmt = -1
                }
                return true
            }
        }
        if (this.zeb() && this.ijh()) {
            if (this.parent.ulp) {
                for (l = 0, n = this.parent.ulp.tvi.length; l < n; l++) {
                    var p = this.parent.ulp.tvi[l];
                    if (p.vql == e || p.vql == e) {
                        if (this.rmt >= 0) {
                            clearTimeout(this.rmt);
                            this.rmt = -1
                        }
                        return false
                    }
                }
            }
        }
        return false
    };
    this.gjg = function() {
        var g = this.iye.anz();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.xoe() == true) {
                e.eqb(false, true, false);
                return true
            }
        }
        return false
    };
    this.qsj = function(e, m) {
        var k = this.iye.anz()
            , l = e - this.x
            , j = m - this.y;
        this.ihf = this.jrv;
        this.jrv = null;
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l >= f.x && l <= f.x + f.width && j >= f.y && j <= f.y + f.height && f.zeb() && f.ijh() && !f.umv()) {
                this.jrv = f
            }
        }
        if (this.jrv) {
            this.uqx(true)
        } else {
            this.uqx(false)
        }
        return true
    };
    this.hcw = function(e, f, g, i, l, d, m) {
        this.cje = g.width;
        var k = new qlq(this.xdd, this.qwx, this.cje, this.cje);
        var j = new wle();
        j.zij(k, this.context2D);
        j.parent = this;
        j.vve = i;
        j.vhe = f;
        j.gkl(d, m);
        j.zxd(this.parent.vkm.wtg.zoc);
        j.yek(this.parent.style.wtg.ovo.efj);
        j.rfj(g);
        if (l != null) {
            j.smg = l.ojt;
            j.rrz = l.vql;
            j.wdl = l.value
        }
        this.iye.eiu(e, j, ["buttons", "setting"]);
        this.xdd += this.cje + this.txo;
        this.nut = this.xdd
    };
    this.ltg = function(k, j, i, g, e) {
        this.cje = i.width;
        var f = new qlq(this.xdd, this.qwx, this.cje, this.cje);
        var d = new wle();
        d.zij(f, this.context2D);
        d.parent = this;
        d.vve = g;
        d.vhe = j;
        d.zxd(this.parent.vkm.wtg.zoc);
        d.yek(this.parent.style.wtg.ovo.efj);
        d.rfj(i);
        if (e != null) {
            d.smg = e.ojt;
            d.rrz = e.vql;
            d.wdl = e.value
        }
        this.iye.eiu(k, d, ["buttons", "system"]);
        this.xdd += this.cje + this.txo;
        this.nut = this.xdd
    };
    this.ztk = function() {
        var f = this.iye.anz();
        this.nut += 2 * this.wla;
        this.kzi = Math.round((this.width - this.nut) / 2);
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].x += this.kzi + this.wla
        }
    };
    this.zzt = function() {
        return this.nut
    };
    this.umq = function(d) {
        this.csv = d
    };
    this.ijh = function() {
        return this.csv
    };
    this.ahn = function(g) {
        var f = this.iye.anz();
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].umq(g)
        }
        this.parent.isl()
    };
    this.nrd = function(g) {
        var f = this.iye.rys("system");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].umq(g)
        }
        this.parent.isl()
    };
    this.zvo = function(g) {
        var f = this.iye.rys("setting");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].umq(g)
        }
        this.parent.isl()
    };
    this.lyq = function() {
        if (this.zeb()) {
            return
        }
        if (this.izn) {
            if (this.wih === a) {
                this.dns = this.lyq
            } else {
                this.dns = null
            }
        } else {
            this.dns = null;
            this.qxs();
            this.dtr()
        }
    };
    this.ghh = function(d) {
        if (this.parent.rob) {
            this.parent.rob()
        }
        this.stop();
        this.izn = false;
        this.dns = null;
        this.ief(true, d);
        if (this.rmt >= 0) {
            clearTimeout(this.rmt);
            this.rmt = -1
        }
        this.rmt = setTimeout(this.lps, this.yse)
    };
    this.lps = function() {
        if (b.zeb()) {
            b.parent.tud.qic("panel_out");
            b.parent.tud.jfc("panel_out");
            b.duw()
        }
    };
    this.duw = function() {
        if (!this.zeb()) {
            return
        }
        if (this.izn) {
            if (this.wih === c) {
                this.dns = this.duw
            } else {
                this.dns = null
            }
        } else {
            this.dns = null;
            this.nrw();
            this.dtr();
            if (this.rmt >= 0) {
                clearTimeout(this.rmt);
                this.rmt = -1
            }
        }
    };
    this.tvd = function(d) {
        if (this.parent.qhv) {
            this.parent.qhv()
        }
        this.stop();
        this.izn = false;
        this.dns = null;
        this.ief(false, d);
        if (typeof this.whv === "function") {
            this.whv();
            this.whv = null
        }
    };
    this.qxs = function() {
        this.ief(true);
        this.izn = true;
        this.csv = false;
        this.wih = c;
        this.uzr = Math.floor(this.height / this.fbc);
        this.apr = 1;
        this.fpy = Math.floor(this.height / this.fbc)
    };
    this.nrw = function() {
        if (this.parent.qhv) {
            this.parent.qhv()
        }
        this.izn = true;
        this.csv = false;
        this.wih = a;
        this.uzr = -Math.floor(this.height / this.fbc);
        this.apr = 1;
        this.fpy = this.height
    };
    this.dtr = function() {
        this.fkn = setInterval(this.ghs, this.dsg)
    };
    this.vnv = function() {
        if (b.wih == c) {
            if (b.parent.rob) {
                b.parent.rob()
            }
            if (b.rmt >= 0) {
                clearTimeout(b.rmt);
                b.rmt = -1
            }
            b.rmt = setTimeout(b.lps, b.yse)
        }
        clearInterval(b.fkn);
        if (b.dns) {
            b.dns()
        }
    };
    this.stop = function() {
        clearTimeout(this.rmt);
        clearInterval(this.fkn);
        this.rmt = -1
    };
    this.ghs = function() {
        if (!b.pxv()) {
            b.vnv()
        }
    };
    this.pxv = function() {
        if (b.apr < b.fbc) {
            b.parent.isl(b.x, b.y, b.width, b.height);
            b.fpy += b.uzr;
            b.apr++;
            return true
        } else {
            b.izn = false;
            b.csv = true;
            if (b.wih == a) {
                b.ief(false);
                if (typeof b.whv === "function") {
                    b.whv();
                    b.whv = null
                }
            }
            b.parent.isl(b.x, b.y, b.width, b.height);
            return false
        }
    };
    this.isl = function(n, m, o, g) {
        if (!this.zeb() || !this.parent.tgx()) {
            return
        }
        var p = this.context2D
            , e = (n != null && m != null && o != null && g != null)
            , l = this.iye.anz()
            , k = 0
            , d = 0;
        p.save();
        if (e) {
            p.beginPath();
            p.rect(n, m, o, g);
            p.closePath();
            p.clip()
        }
        p.clearRect(0, 0, this.width, this.height);
        this.ded(p);
        for (var f = 0, j = l.length; f < j; f++) {
            l[f].isl()
        }
        if (this.jrv && this.pav != "") {
            k = this.jrv.x - this.txo - this.cje;
            d = 3 * this.cje + 2 * this.txo;
            if (k + d >= this.kzi + this.nut) {
                k = this.kzi + this.nut - d;
                vit.gtm.adt(p, this.pav, this.eqn, k, this.jrv.y + this.jrv.height, d, this.qyx, this.dpv, this.qyx, this.yjy, this.txo)
            } else {
                vit.gtm.xwp(p, this.pav, this.eqn, k, this.jrv.y + this.jrv.height, d, this.qyx, this.dpv, this.qyx, this.yjy)
            }
        }
        p.restore();
        if (this.izn) {
            if (this.riv && this.nxv && this.fpy > 0) {
                this.riv.drawImage(this.nxv, 0, this.height - this.fpy, this.width, this.fpy, this.x, this.y, this.width, this.fpy)
            }
        } else {
            if (e) {
                this.parent.isl(this.x + n, this.y + m, o, g)
            } else {
                if (this.riv && this.nxv) {
                    this.riv.drawImage(this.nxv, this.x, this.y)
                }
            }
        }
    };
    this.ded = function(d) {
        var f = this.zev
            , e = f / 2;
        d.save();
        d.strokeStyle = this.wcr;
        d.fillStyle = this.blt;
        d.lineWidth = f;
        d.beginPath();
        d.moveTo(e, 0);
        d.arcTo(e, this.lwj, this.lwj + e, this.lwj, this.lwj);
        d.arcTo(this.kzi, this.lwj, this.kzi, this.height - this.whu - e, this.gim);
        d.arcTo(this.kzi, this.height - e, this.kzi + this.whu, this.height - e, this.whu);
        d.lineTo(this.kzi + this.nut - this.whu, this.height - e);
        d.arcTo(this.kzi + this.nut, this.height - e, this.kzi + this.nut, this.height - this.whu - e, this.whu);
        d.arcTo(this.kzi + this.nut, this.lwj, this.width - this.lwj - e, this.lwj, this.gim);
        d.arcTo(this.width - e, this.lwj, this.width - e, 0, this.lwj);
        d.stroke();
        d.closePath();
        d.globalAlpha = this.yvc;
        d.fill();
        d.restore()
    };
    this.uqx = function(d) {
        if (this.jrv && this.jrv != this.ihf) {
            if (d && this.jrv) {
                this.pav = this.parent.jkm(this.jrv.vhe);
                if (!vit.gtm.xcn) {
                    this.pav = (this.jrv.wdl) ? this.pav + " [" + this.jrv.wdl + "]" : this.pav
                }
            } else {
                this.pav = ""
            }
            this.parent.isl(this.x, this.y, this.width, this.height)
        } else {
            if (d && (this.jrv && this.pav != this.parent.jkm(this.jrv.vhe))) {
                this.pav = this.parent.jkm(this.jrv.vhe);
                if (!vit.gtm.xcn) {
                    this.pav = (this.jrv.wdl) ? this.pav + " [" + this.jrv.wdl + "]" : this.pav
                }
            }
            this.parent.isl(this.x, this.y, this.width, this.height)
        }
    };
    this.whv = null
}
ijk.prototype = new pzb;

function ugo() {
    var a = this;
    this.wmv = "LOADING ... ";
    this.prg = "ERROR";
    this.trx = null;
    this.lhs = null;
    this.kgv = false;
    this.fpf = false;
    this.kkz = true;
    this.ygc = null;
    this.mmi = null;
    this.fkn = 0;
    this.zfy = 0;
    this.snr = false;
    this.iqv = false;
    this.pbq = 0;
    this.ktt = 60;
    this.sns = 0;
    this.zvk = null;
    this.pav = null;
    this.ltz = null;
    this.vqu = true;
    this.dpv = null;
    this.yjy = "bold";
    this.jlb = "black";
    this.rjm = "rgb(0,100,10)";
    this.zfr = "rgb(80,255,100)";
    this.kcc = "rgb(120,120,120)";
    this.upj = "red";
    this.fro = "white";
    this.qyx = 14;
    this.abx = 18;
    this.gtb;
    this.xmh;
    this.hnb;
    this.noh;
    this.wla = 5;
    this.txo = 12;
    this.qwx = 5;
    this.guf = 2;
    this.zql = 7;
    this.wbh = new qlq();
    this.pea = 0;
    this.clw = 0;
    this.qjn = 0;
    this.voy = new qlq();
    this.cfe = new qlq();
    this.lsc = new qlq();
    this.kqn = new qlq();
    this.zij = function(b, d, c) {
        ugo.prototype.zij.call(this, b, d, c);
        if (vit.vjo.value45 == vit.pmz.vzw) {
            this.ygc = document.createElement("canvas");
            this.mmi = this.ygc.getContext("2d")
        }
    };
    this.zxd = function(b) {
        try {
            this.qyx = b.fontSize;
            this.abx = b.ywd;
            this.wla = b.ike;
            this.txo = b.guo;
            this.qwx = b.hpu;
            this.guf = b.idh;
            this.zql = b.ehi;
            this.gtb = b.edk;
            this.xmh = b.fzt;
            this.hnb = b.hbs;
            this.noh = b.ahr;
            this.wbh = b.oxx.yhm;
            this.pea = b.oxx.x;
            this.clw = b.oxx.idq;
            this.qjn = b.oxx.yaz;
            this.voy = b.mul;
            this.cfe = b.dht.mul;
            this.lsc = b.dht.fzt;
            this.kqn = b.dht.ngo;
            if (vit.vjo.value45 == vit.pmz.vzw) {
                this.ygc.width = Math.round(this.wbh.width);
                this.ygc.height = Math.round(this.wbh.height)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.yek = function(b) {
        try {
            this.dpv = b.font;
            this.yjy = b.exc;
            this.jlb = b.backgroundColor;
            this.rjm = b.rzc;
            this.zfr = b.ftx;
            this.kcc = b.cai;
            this.upj = b.ssy;
            this.fro = b.xim;
            this.lhs = b.lhs
        } catch (c) {
            console.error(c)
        }
    };
    this.isl = function(b) {
        if (b && b >= 0) {
            this.zfy = b
        }
        if (!this.zeb()) {
            return
        }
        if (vit.vjo.value45 == vit.pmz.dye) {
            this.acs()
        } else {
            if (vit.vjo.value45 == vit.pmz.chb || vit.vjo.value45 == vit.pmz.vzw) {
                if (!this.trx && this.pav && this.ltz) {
                    this.dom()
                } else {
                    if (vit.vjo.value45 == vit.pmz.chb) {
                        this.ugx()
                    } else {
                        if (vit.vjo.value45 == vit.pmz.vzw) {
                            if (b === 100) {
                                this.vih()
                            }
                            this.lka()
                        }
                    }
                }
            }
        }
    };
    this.acs = function() {
        if (this.kgv) {
            var c = this.context2D
                , b = this.hnb.width / 100;
            c.save();
            if (this.fpf === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.tud.dra("splash"), 0, 0, this.width, this.height);
            if (this.lhs) {
                vit.gtm.ami(c, this.wla, this.wla, this.width - 2 * this.wla, this.height - 2 * this.wla, this.lhs, 0.3)
            }
            if (this.trx != null && this.trx != "") {
                this.kvc(this.noh, true)
            } else {
                if (this.pav != null && this.pav != "") {
                    this.dzv(this.noh, true)
                } else {
                    if (this.kkz === true) {
                        if (this.fpf === false) {
                            vit.gtm.ami(c, this.gtb.x, this.gtb.y, this.gtb.width, this.gtb.height, this.jlb, 0.5)
                        }
                        var e = this.wmv + " " + this.zfy + "%";
                        var d = c.createLinearGradient(this.hnb.x, this.hnb.y, this.hnb.x + this.hnb.width, this.hnb.y);
                        d.addColorStop(0, this.rjm);
                        d.addColorStop(1, this.zfr);
                        vit.gtm.xwp(c, e, this.fro, this.xmh.x, this.xmh.y, this.xmh.width, this.xmh.height, this.dpv, this.qyx, this.yjy);
                        vit.gtm.bqh(c, this.hnb.x - this.guf, this.hnb.y, this.hnb.width + 2 * this.guf, this.hnb.height, this.guf, this.jlb, 0.8, this.kcc, this.guf, 0.8);
                        vit.gtm.ami(c, this.hnb.x, this.hnb.y + this.guf / 2, b * this.zfy, this.hnb.height - this.guf, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.ugx = function() {
        if (this.kgv) {
            var c = this.context2D
                , b = this.hnb.width / 100;
            c.save();
            if (this.fpf === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            if (this.snr === true && this.zvk) {
                c.beginPath();
                c.rect(this.zvk.x, this.zvk.y, this.zvk.width, this.zvk.height);
                c.closePath();
                c.clip()
            }
            c.drawImage(this.parent.tud.dra("splash"), this.voy.x, this.voy.y, this.voy.width, this.voy.height);
            if (this.trx != null && this.trx != "") {
                this.kvc(this.noh, false)
            } else {
                if (this.pav != null && this.pav != "") {
                    this.dzv(this.noh, false)
                } else {
                    if (this.kkz === true) {
                        var e = this.wmv + " " + this.zfy + "%";
                        var d = c.createLinearGradient(this.hnb.x, this.hnb.y, this.hnb.x + this.hnb.width, this.hnb.y);
                        d.addColorStop(0, this.rjm);
                        d.addColorStop(1, this.zfr);
                        var f = c.createLinearGradient(this.hnb.x + (b * this.zfy) - this.zql, this.hnb.y, this.hnb.x + (b * this.zfy), this.hnb.y);
                        f.addColorStop(0, "rgb(100,100,100)");
                        f.addColorStop(1, "rgb(255,255,255)");
                        vit.gtm.xwp(c, e, this.fro, this.xmh.x, this.xmh.y, this.xmh.width, this.xmh.height, this.dpv, this.qyx, this.yjy);
                        vit.gtm.ami(c, this.hnb.x, this.hnb.y, this.hnb.width, this.hnb.height, "rgb(12,15,25)", 1);
                        if (this.zfy > 0 && this.zfy < 100) {
                            vit.gtm.bqh(c, this.hnb.x + (b * this.zfy) - this.zql + this.guf / 2, this.hnb.y - this.guf, this.zql, this.hnb.height + 2 * this.guf, this.guf, f, 0.5)
                        }
                        vit.gtm.ami(c, this.hnb.x, this.hnb.y, b * this.zfy, this.hnb.height, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.lka = function() {
        if (this.kgv) {
            var c = this.context2D
                , b = this.hnb.width / 100;
            c.save();
            if (this.fpf === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.tud.dra("splash"), this.voy.x, this.voy.y, this.voy.width, this.voy.height);
            if (this.iqv) {
                c.drawImage(this.ygc, this.wbh.x, this.wbh.y)
            }
            if (this.trx != null && this.trx != "") {
                this.kvc(this.noh, false)
            } else {
                if (this.pav != null && this.pav != "") {
                    this.dzv(this.noh, false)
                } else {
                    if (this.kkz === true) {
                        var e = this.wmv + " " + this.zfy + "%";
                        var d = c.createLinearGradient(this.hnb.x, this.hnb.y, this.hnb.x + this.hnb.width, this.hnb.y);
                        d.addColorStop(0, this.rjm);
                        d.addColorStop(1, this.zfr);
                        var f = c.createLinearGradient(this.hnb.x + (b * this.zfy) - this.zql, this.hnb.y, this.hnb.x + (b * this.zfy), this.hnb.y);
                        f.addColorStop(0, "rgb(100,100,100)");
                        f.addColorStop(1, "rgb(255,255,255)");
                        vit.gtm.xwp(c, e, this.fro, this.xmh.x, this.xmh.y, this.xmh.width, this.xmh.height, this.dpv, this.qyx, this.yjy);
                        vit.gtm.ami(c, this.hnb.x, this.hnb.y, this.hnb.width, this.hnb.height, "rgb(12,15,25)", 1);
                        if (this.zfy > 0 && this.zfy < 100) {
                            vit.gtm.bqh(c, this.hnb.x + (b * this.zfy) - this.zql + this.guf / 2, this.hnb.y - this.guf, this.zql, this.hnb.height + 2 * this.guf, this.guf, f, 0.5)
                        }
                        vit.gtm.ami(c, this.hnb.x, this.hnb.y, b * this.zfy, this.hnb.height, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.dom = function() {
        if (this.kgv) {
            var b = this.context2D;
            b.save();
            b.clearRect(0, 0, this.width, this.height);
            if (this.ltz) {
                b.drawImage(this.ltz, this.cfe.x, this.cfe.y, this.cfe.width, this.cfe.height)
            }
            if (this.pav != null && this.pav != "") {
                vit.gtm.vis(b, this.pav, this.fro, this.lsc.x, this.lsc.y, this.lsc.width, this.lsc.height, this.dpv, this.qyx, this.yjy, "center", true)
            }
            if (this.vqu === true) {
                vit.gtm.vis(b, "[ " + this.parent.language.agz + " ]", this.fro, this.kqn.x, this.kqn.y, this.kqn.width, this.kqn.height, this.dpv, 2 * this.qyx, this.yjy, "center", true)
            }
            b.restore()
        }
    };
    this.kvc = function(c, m) {
        var l = this.context2D
            , o = []
            , d = this.qyx
            , k = this.trx
            , f = ""
            , t = 0
            , v = 0
            , s = 0
            , u = 0
            , n = "center"
            , e = Math.round(d * 1.5)
            , j = Math.round(this.abx * 1.5)
            , b = 0
            , w = 1
            , q = 0
            , g = 0;
        l.save();
        l.font = this.yjy + " " + d + "px " + this.dpv;
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
                    if (u >= c.width - 2 * this.txo) {
                        o[v] = k.substring(s, t);
                        v++;
                        s = t + 1;
                        f = k.substring(t + 1, p)
                    }
                }
            }
        }
        b = v * (e);
        if (b > (c.height - j - this.qwx)) {
            w = (c.height - j - this.qwx) / b;
            d = Math.round(d * w) - 1;
            l.font = this.yjy + " " + d + "px " + this.dpv;
            e = Math.round(d * 1.5);
            b = v * (e)
        }
        if (d < 10) {
            w = 10 / d;
            d = Math.round(d * w);
            l.font = this.yjy + " " + d + "px " + this.dpv;
            e = Math.round(d * 1.5);
            b = v * (e);
            g = (c.height - (j + b + this.qwx));
            c.height = j + b + this.qwx;
            c.y += g
        }
        l.textAlign = n;
        l.lineJoin = "round";
        l.lineCap = "round";
        if (m && m === true) {
            vit.gtm.ami(l, c.x, c.y, c.width, c.height, this.jlb, 0.7)
        }
        if (this.prg != null) {
            l.font = this.yjy + " " + this.abx + "px " + this.dpv;
            l.fillStyle = this.upj;
            l.textBaseline = "bottom";
            l.fillText(this.prg, c.x + c.width / 2, c.y + this.abx + this.qwx)
        }
        l.font = this.yjy + " " + d + "px " + this.dpv;
        l.fillStyle = this.fro;
        if (o.length == 1) {
            q = j + b + e;
            l.fillText(o[0], (c.x + c.width / 2), c.y + q)
        } else {
            for (var p = 0, r = o.length; p < r; p++) {
                q = j + (b + e) / (r + 1) * (p + 1);
                if (n == "start") {
                    l.fillText(o[p], (c.x + this.txo), c.y + q)
                } else {
                    l.fillText(o[p], (c.x + c.width / 2), c.y + q)
                }
            }
        }
        l.restore()
    };
    this.dzv = function(c, d) {
        var b = this.context2D;
        b.save();
        if (d && d === true) {
            vit.gtm.ami(b, c.x, c.y, c.width, c.height, this.jlb, 0.7)
        }
        if (this.vqu === true) {
            vit.gtm.vis(b, this.pav, this.fro, c.x, c.y, c.width, c.height, this.dpv, this.qyx, this.yjy, "center", true)
        }
        b.restore()
    };
    this.start = function() {
        this.snr = true;
        this.pbq = new Date().getTime();
        this.zvk = new qlq(this.wbh.x, this.wbh.y, this.wbh.width, this.wbh.height);
        this.sns = 0;
        this.ghs()
    };
    this.stop = function() {
        this.snr = false;
        this.zvk = null;
        clearTimeout(this.fkn)
    };
    this.ghs = function() {
        var b = 0
            , c = new Date().getTime();
        if (a.sns < 6) {
            a.zvk.x -= a.pea;
            a.zvk.width += 2 * a.pea
        } else {
            if (a.sns < 12) {
                a.zvk.y -= a.qjn;
                a.zvk.height += a.clw
            } else {
                a.stop();
                if (typeof a.bcj === "function") {
                    a.bcj()
                }
            }
        }
        a.isl();
        a.sns++;
        if (a.sns <= 12) {
            b = (a.sns * a.ktt - (c - a.pbq));
            a.fkn = setTimeout(a.ghs, b)
        }
    };
    this.ngn = function() {
        this.iqv = true;
        this.pbq = new Date().getTime();
        this.sns = 0;
        this.ktt = 89;
        this.kau()
    };
    this.vih = function() {
        this.iqv = false;
        clearTimeout(this.fkn)
    };
    this.kau = function() {
        var d = 0
            , e = new Date().getTime()
            , b = a.mmi
            , c = a.parent.tud.dra("splashanim");
        if (a.iqv === true) {
            a.sns++;
            b.save();
            b.clearRect(0, 0, c.width, c.height);
            b.translate(c.width / 2, c.height / 2);
            b.rotate(Math.PI / 6 * (a.sns % 12));
            b.translate(-c.width / 2, -c.height / 2);
            b.drawImage(c, 0, 0);
            b.restore();
            a.isl();
            d = (a.sns * a.ktt - (e - a.pbq));
            a.fkn = setTimeout(a.kau, d)
        }
    };
    this.vsf = function() {
        return (this.snr || this.iqv)
    };
    this.fuj = function(c, b) {
        this.pav = c;
        this.ltz = b;
        this.snr = true;
        this.vqu = true;
        this.fkn = setInterval(this.mjd, 800);
        this.isl()
    };
    this.mjd = function() {
        a.vqu = !a.vqu;
        a.isl()
    };
    this.bcj = null
}
ugo.prototype = new pzb;

function lne() {
    var b = this;
    var c = 0;
    var a = 1;
    var e = 2;
    var d = 3;
    this.mmn = null;
    this.equ = null;
    this.lyb = null;
    this.bzz = null;
    this.qca = null;
    this.nli = [];
    this.lci = 0;
    this.rhl = [];
    this.rep = [];
    this.tnt = 0;
    this.nnh = false;
    this.uho = false;
    this.zij = function() {
        this.mmn = document.getElementById("messageOverlay");
        this.equ = document.getElementById("messagePanel");
        this.lyb = document.getElementById("messageTitle");
        this.bzz = document.getElementById("messageText");
        this.qca = document.getElementById("btne");
        if (this.qca) {
            this.qca.innerHTML = "\u00D7";
            this.qca.onclick = this.duw;
            this.qca.ontouchend = this.duw
        }
        for (var f = 0; f < 4; f++) {
            this.nli[f] = document.getElementById("btn" + (f + 1))
        }
    };
    this.yek = function(f) {
        try {
            this.rhl = f.mds
        } catch (g) {
            console.error(g)
        }
    };
    this.zxd = function(j) {
        try {
            if (this.equ) {
                vit.gtm.ggn(this.equ, j.yhm)
            }
            if (this.lyb) {
                this.lyb.style.fontSize = j.jbh + "px";
                vit.gtm.ggn(this.lyb, j.vuf)
            }
            if (this.bzz) {
                this.bzz.style.fontSize = j.qim + "px";
                vit.gtm.ggn(this.bzz, j.wby)
            }
            if (this.qca) {
                vit.gtm.ggn(this.qca, j.bwc)
            }
            for (var g = 0, f = this.nli.length; g < f; g++) {
                this.nli[g].style.fontSize = j.zoc.fontSize + "px";
                this.nli[g].style.top = j.dsd.y + "px";
                this.nli[g].style.height = j.dsd.height + "px"
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.lyq = function(j) {
        this.rep.length = 0;
        this.tnt = 0;
        for (var g = 0, f = j.length; g < f; g++) {
            this.rep[g] = j[g]
        }
        this.rmz(this.rep[this.tnt])
    };
    this.duw = function() {
        if (b.equ) {
            b.uho = false;
            b.equ.style.display = "none";
            b.mmn.style.display = "none";
            vit.iyt.xee();
            vit.iyt.tij = false
        }
    };
    this.rmz = function(l) {
        var n = this.rep.length > 1
            , m = "";
        if (l.Buttons && l.Buttons.length >= 1) {
            for (var k = l.Buttons.length - 1; k >= 0; k--) {
                if (l.Buttons[k].Action.toLowerCase() == "cashier") {
                    l.Buttons.splice(k, 1)
                }
            }
        }
        if (l.vri === vit.gba.ouv || l.vri === vit.gba.jrg) {
            this.lci = d;
            this.nnh = (l.DisplayType == vit.oca.xdb.ydu) ? true : false
        } else {
            if (l.vri === vit.gba.kxs || l.vri === vit.gba.gvc || l.vri === vit.gba.kyc || l.vri === vit.gba.roulette.oye || l.vri === vit.gba.roulette.edf) {
                this.lci = a;
                this.nnh = false
            } else {
                if (l.vri === vit.gba.ahe || l.vri === vit.gba.cal) {
                    this.lci = c;
                    this.nnh = false
                } else {
                    if (l.vri === vit.gba.upa || l.vri === vit.gba.bxt || l.vri === vit.gba.fru) {
                        this.lci = e;
                        this.nnh = false
                    }
                }
            }
        }
        if (l.Title && this.lyb) {
            this.lyb.style.color = this.rhl[this.lci];
            this.lyb.innerHTML = l.Title
        }
        if (l.Text && this.bzz) {
            this.bzz.innerHTML = l.Text.replace(/[\r]?\n/g, "<br>")
        }
        if (n) {
            this.nli[0].innerHTML = "\u2039";
            this.nli[0].onclick = this.nlj;
            this.nli[0].ontouchend = this.nlj;
            this.nli[0].style.display = "inline-block";
            this.nli[this.nli.length - 1].innerHTML = "\u203A";
            this.nli[this.nli.length - 1].onclick = this.skx;
            this.nli[this.nli.length - 1].ontouchend = this.skx;
            this.nli[this.nli.length - 1].style.display = "inline-block"
        }
        for (var k = 0, g = (n) ? 1 : 0, f = (n) ? this.nli.length - 1 : this.nli.length; g < f; g++, k++) {
            if (l.Buttons && k < l.Buttons.length) {
                m = l.Buttons[k].Text;
                if (m.indexOf("_") != 0) {
                    this.nli[g].innerHTML = m
                } else {
                    var j = m.substr(1);
                    if (j == "exit") {
                        this.nli[g].innerHTML = vit.iyt.language.cnn
                    } else {
                        if (j == "continue") {
                            this.nli[g].innerHTML = vit.iyt.language.agz.replace(/ /g, "")
                        } else {
                            this.nli[g].innerHTML = j.toUpperCase()
                        }
                    }
                }
                if (l.Buttons[k].Action.toLowerCase() == "quit") {
                    this.nli[g].onclick = vit.iyt.owa;
                    this.nli[g].ontouchend = vit.iyt.owa
                } else {
                    if (l.Buttons[k].Action.toLowerCase() == "continue") {
                        if (l.vri === vit.gba.ouv) {
                            this.nli[g].onclick = this.kni.bind(this, l.Buttons[k].Link);
                            this.nli[g].ontouchend = this.kni.bind(this, l.Buttons[k].Link)
                        } else {
                            if (l.vri === vit.gba.jrg || l.vri === vit.gba.upa || l.vri === vit.gba.bxt) {
                                this.nli[g].onclick = this.ooh;
                                this.nli[g].ontouchend = this.ooh
                            } else {
                                if (l.vri === vit.gba.ahe || l.vri === vit.gba.cal || l.vri === vit.gba.fru) {
                                    this.nli[g].onclick = this.pvb;
                                    this.nli[g].ontouchend = this.pvb
                                }
                            }
                        }
                    } else {
                        if (l.Buttons[k].Action.toLowerCase() == "history") {
                            this.nli[g].onclick = vit.iyt.gfb;
                            this.nli[g].ontouchend = vit.iyt.gfb
                        } else {
                            if (l.Buttons[k].Action.toLowerCase() == "link") {
                                if (l.Buttons[k].LinkType === vit.oca.mvt.bjy) {
                                    this.nli[g].onclick = this.ehv.bind(this, l.Buttons[k].Link);
                                    this.nli[g].ontouchend = this.ehv.bind(this, l.Buttons[k].Link)
                                } else {
                                    if (l.Buttons[k].LinkType === vit.oca.mvt.syx) {
                                        this.nli[g].onclick = this.kni.bind(this, l.Buttons[k].Link);
                                        this.nli[g].ontouchend = this.kni.bind(this, l.Buttons[k].Link)
                                    } else {
                                        if (l.Buttons[k].LinkType === vit.oca.mvt.vrl) {
                                            this.nli[g].onclick = this.yeb.bind(this, l.Buttons[k].Link);
                                            this.nli[g].ontouchend = this.yeb.bind(this, l.Buttons[k].Link)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                this.nli[g].style.display = "inline-block"
            } else {
                this.nli[g].style.display = "none"
            }
        }
        this.qca.style.display = (this.nnh) ? "inline-block" : "none";
        if (this.equ) {
            this.uho = true;
            this.equ.style.display = "block";
            this.mmn.style.display = "block";
            vit.iyt.xee();
            vit.iyt.tij = true
        }
    };
    this.zeb = function() {
        if (this.uho) {
            return true
        }
        return false
    };
    this.ooh = function() {
        b.duw();
        vit.iyt.ppb(vit.iyt.state)
    };
    this.kni = function(f) {
        var g = null;
        if (f) {
            g = vit.gtm.jrm("GET", f);
            if (!g) {
                console.error("Could not send request!")
            } else {
                g.onerror = function() {
                    console.error("Error on request!")
                }
            }
            g.send()
        }
        vit.iyt.gsw({
            type: "link"
            , sender: vit.iyt.xgb
            , lang: sessionStorage.sessionValue1.toUpperCase()
        });
        b.duw();
        vit.iyt.yip()
    };
    this.yeb = function(j) {
        var k = null;
        if (j == null) {
            console.error("Request url is missing!");
            return
        }
        k = vit.gtm.jrm("GET", j);
        if (!k) {
            console.error("Could not send request!")
        } else {
            for (var g = 0, f = b.nli.length; g < f; g++) {
                b.nli[g].disabled = true
            }
            k.onload = function() {
                b.duw();
                for (var m = 0, l = b.nli.length; m < l; m++) {
                    b.nli[m].disabled = false
                }
                vit.iyt.yip()
            };
            k.onerror = function() {
                console.error("Error on request!");
                for (var m = 0, l = b.nli.length; m < l; m++) {
                    b.nli[m].disabled = false
                }
            }
        }
        vit.iyt.gsw({
            type: "link"
            , sender: vit.iyt.xgb
            , lang: sessionStorage.sessionValue1.toUpperCase()
        });
        k.send()
    };
    this.pvb = function() {
        window.location.reload()
    };
    this.ehv = function(f) {
        vit.iyt.gsw({
            type: "link"
            , sender: vit.iyt.xgb
            , lang: sessionStorage.sessionValue1.toUpperCase()
        });
     window.parent.postMessage('CloseGame',"*");
    };
    this.nlj = function() {
        b.tnt = (b.tnt > 0) ? b.tnt - 1 : b.rep.length - 1;
        b.rmz(b.rep[b.tnt])
    };
    this.skx = function() {
        b.tnt = (b.tnt < b.rep.length - 1) ? b.tnt + 1 : 0;
        b.rmz(b.rep[b.tnt])
    }
}
vit.vjo = new Settings();
vit.gtm = new gbb();

function lek() {
    this.awr = "";
    this.szl = "";
    this.zym = null;
    this.canvas = null;
    this.context2D = null;
    this.aqx = null;
    this.ixs = null;
    this.qbn = null;
    this.xmj = null;
    this.ios = null;
    this.cef = {};
    this.offsetLeft = 0;
    this.offsetTop = 0;
    this.ubn = 0;
    this.wrx = 0;
    this.ujb = false;
    this.width = 0;
    this.height = 0;
    this.jhe = 0;
    this.khn = 0;
    this.kqu = 1;
    this.vav = 1;
    this.qlm = false;
    this.oga = false;
    this.style = null;
    this.vkm = null;
    this.nof = -1;
    this.wxa = false;
    this.kkr = false;
    this.xny = false;
    this.jdy = false;
    this.tij = false;
    this.okf = false;
    this.ohw = false;
    this.pye = "";
    this.ihi = "";
    this.ndw = "";
    this.cty = "";
    this.ixr = "";
    this.bij = "";
    this.znm = "1_1_60";
    try {
        if (vit.vjo.value19) {
            this.pye = sessionStorage.sessionValue2;
            this.ihi = sessionStorage.sessionValue2
        } else {
            var c = a("hash");
            if (c != "") {
                sessionStorage.sessionValue2 = c
            }
            if (sessionStorage.sessionValue2 != "freeplay") {
                this.ndw = sessionStorage.sessionValue2
            } else {
                this.pye = sessionStorage.sessionValue2;
                this.ihi = sessionStorage.sessionValue2;
                if (a("w") != "") {
                    this.ndw = sessionStorage.sessionValue2
                } else {
                    this.ndw = ""
                }
            }
        }
    } catch (b) {}
    this.uhc = null;
    this.wil = null;
    this.dpm = false;
    this.xnr = null;
    this.tud = null;
    this.vxx = null;
    this.vww = true;
    this.lsb = [0, 0.5, 1];
    try {
        if (sessionStorage.sessionValue6) {
            if (sessionStorage.sessionValue6 == "false") {
                this.xdu = 0
            } else {
                if (sessionStorage.sessionValue6 == "true") {
                    this.xdu = this.lsb.length - 1
                } else {
                    this.xdu = Number(sessionStorage.sessionValue6)
                }
            }
        } else {
            this.xdu = this.lsb.length - 1
        }
    } catch (b) {
        this.xdu = 0
    }
    this.jhf = 0;
    this.language = new uzv();
    this.uyg = 0;
    this.uxy = 1;
    this.gfi = this.uxy;
    this.yzk = [vit.zop.bac, vit.zop.cib, vit.zop.odl];
    this.trp = (vit.gtm.fzv()) ? 0 : this.yzk.length - 1;
    try {
        if (localStorage.localValue1) {
            this.trp = Number(localStorage.localValue1);
            if (!vit.gtm.fzv() && this.yzk[this.trp] === vit.zop.bac) {
                this.trp = this.yzk.length - 1
            }
        }
    } catch (b) {}
    this.uil = false;
    this.xgb = "";
    this.pay = "";
    this.lyz = 0;
    this.state = 0;
    this.sek = false;
    this.srb = 5000;
    this.ash = 0;
    this.zmo = 0;
    this.dfw = 0;
    this.eze = 0;
    this.mwk = false;
    this.fka = false;
    this.yra = false;
    this.ulp = null;
    this.qlx = 0;
    this.aww = 0;
    this.oau = 0;
    this.frx = -1;
    this.pej = -1;
    this.aqt = 0;
    this.yvn = null;
    this.fwq = [];
    this.fyh = [];
    this.irz = false;
    this.kyz = 0;
    this.dos = 0;
    this.qvk = false;

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
    this.zij = function(d) {
        this.gsw({
            type: "onAppFrameReady"
            , sender: this.xgb
        });
        vit.gtm.qnf();
        vit.gtm.hev();
        this.vjc();
        if (!this.mwk) {
            this.mqd()
        }
        this.tzy(this.czu(d.vkm));
        this.jii();
        this.bha();
        this.sma();
        this.wum();
        this.kxw();
        this.sfs();
        this.ifx();
        this.ivk();
        this.rdu();
        this.rdi();
        return this
    };
    this.sma = function() {};
    this.ivk = function() {
        try {
            if (vit.vjo.value64 && !this.yra) {
                this.xnr = new ktk();
                this.xnr.connect("ws://127.0.0.1:2001/vltclient")
            }
        } catch (d) {
            console.error("Can not connect to terminal!")
        }
    };
    this.vjc = function() {
        try {
            var i = a("exit");
            if (i != "") {
                sessionStorage.sessionValue5 = i
            }
            if ((!sessionStorage.sessionValue5 || sessionStorage.sessionValue5 == "null") && vit.vjo.value8) {
                sessionStorage.sessionValue5 = vit.vjo.value8
            }
            var o = a("curr");
            if (o != "") {
                sessionStorage.sessionValue8 = o
            }
            if (sessionStorage.sessionValue8 && sessionStorage.sessionValue8 != "") {
                this.bij = sessionStorage.sessionValue8;
                if (vit.vjo.value72) {
                    var m = vit.vjo.value72[this.bij];
                    if (vit.vjo.value21.e === true && m) {
                        vit.vjo.value21.s = m.s;
                        vit.vjo.value21.m = m.m;
                        vit.vjo.value21.ts = m.ts;
                        vit.vjo.value21.cs = m.cs
                    }
                    if (vit.vjo.value76 && vit.vjo.value76.f === true && m) {
                        vit.vjo.value76.s = m.s;
                        vit.vjo.value76.m = m.m;
                        vit.vjo.value76.ts = m.ts;
                        vit.vjo.value76.cs = m.cs
                    }
                }
            }
            if (this.zmf()) {
                sessionStorage.sessionValue7 = ""
            }
            var d = a("w");
            if (d != "") {
                sessionStorage.sessionValue7 = d
            }
            if (sessionStorage.sessionValue7 && sessionStorage.sessionValue7 != "") {
                this.ixr = sessionStorage.sessionValue7
            }
            var q = a("fullscreen");
            if (q != "") {
                sessionStorage.sessionValue14 = q
            }
            if (sessionStorage.sessionValue14 != "true" && sessionStorage.sessionValue14 != "false") {
                sessionStorage.sessionValue14 = (vit.gtm.xcn) ? vit.vjo.value51.m : vit.vjo.value51.d
            }
            var g = a("sessionTime");
            if (g != "") {
                sessionStorage.sessionValue15 = g
            }
            if (sessionStorage.sessionValue15 != "true" && sessionStorage.sessionValue15 != "false") {
                sessionStorage.sessionValue15 = vit.vjo.value11
            }
            var s = a("realityCheckURL");
            if (s != "") {
                sessionStorage.sessionValue16 = s
            }
            var n = a("realityCheckTime");
            if (n != "") {
                sessionStorage.sessionValue17 = n
            }
            if (vit.vjo.value39 > 0) {
                sessionStorage.sessionValue17 = vit.vjo.value39
            }
            var r = a("loggedInTime");
            if (sessionStorage.sessionValue18 != null) {
                var f = sessionStorage.sessionValue18.split(";");
                if (f.length == 2) {
                    this.kyz = Number(f[0]);
                    this.dos = Number(f[1])
                }
            }
            if (r != "") {
                if (Number(r) != this.dos) {
                    this.dos = Number(r);
                    this.kyz = new Date().getTime() - (this.dos * 1000);
                    sessionStorage.sessionValue18 = this.kyz + ";" + this.dos
                }
            }
            if (vit.vjo.value86 === true) {
                var p = a("selfTestURL");
                if (p != "") {
                    sessionStorage.sessionValue19 = p
                }
                var l = a("limitsURL");
                if (l != "") {
                    sessionStorage.sessionValue20 = l
                }
                var k = a("pauseURL");
                if (k != "") {
                    sessionStorage.sessionValue21 = k
                }
            }
        } catch (j) {
            console.error(j.gba)
        }
    };
    this.ifx = function() {
        if (!(vit.gtm.wan == vit.os.ref && vit.gtm.grh == vit.yly.jjx)) {
            document.ontouchstart = vit.iyt.qbf
        }
        if (vit.gtm.grh != vit.yly.shq && vit.gtm.grh != vit.yly.jjx) {
            document.ontouchmove = vit.iyt.unk;
            document.ontouchend = vit.iyt.boo
        }
        if (!vit.gtm.jsk) {
            document.onmousedown = vit.iyt.yii;
            document.onmouseup = vit.iyt.rgc;
            document.onmousemove = vit.iyt.xcw
        }
        document.onkeydown = vit.iyt.bqn;
        document.onkeyup = vit.iyt.vbl;
        document.oncontextmenu = vit.iyt.zbz;
        this.okf = this.pya();
        if (vit.gtm.opt() === false && vit.gtm.wan === vit.os.bxf && vit.gtm.bla() === true && screen.width <= 414 && this.wyf()) {
            this.aqt = setInterval(this.hks, 1000)
        }
    };
    this.qbf = function(d) {
        vit.iyt.kxd();
        vit.iyt.wnx();
        vit.iyt.kng(d)
    };
    this.boo = function(d) {
        if (vit.iyt.wxa === true) {
            if (vit.iyt.okf) {
                vit.iyt.rzw()
            } else {
                vit.iyt.szw(d)
            }
        } else {
            if (vit.iyt.pya()) {
                vit.iyt.gbk()
            }
        }
    };
    this.unk = function(d) {
        vit.iyt.ueu(d)
    };
    this.yii = function(d) {
        window.focus();
        if (vit.iyt.wxa === true) {
            vit.iyt.kxd();
            vit.iyt.wnx();
            vit.iyt.kng(d)
        } else {
            if (vit.iyt.pya()) {
                vit.iyt.gbk()
            }
        }
    };
    this.rgc = function(d) {
        vit.iyt.szw(d)
    };
    this.xcw = function(d) {};
    this.bqn = function(d) {
        if ((d.keyCode == 122 && (vit.gtm.wan == vit.os.rop || vit.gtm.wan == vit.os.dqp)) || (d.keyCode == 70 && d.ctrlKey && vit.gtm.wan == vit.os.cmt)) {
            return
        }
        vit.iyt.kxd();
        vit.iyt.wnx();
        vit.iyt.zls(d)
    };
    this.vbl = function(d) {
        vit.iyt.gjg(d)
    };
    this.zbz = function() {
        return false
    };
    this.kng = function(d) {};
    this.szw = function(d) {};
    this.zls = function(d) {};
    this.gjg = function(d) {};
    this.ueu = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        return
    };
    this.gsw = function(d) {};
    this.ejj = function() {
        var f = vit.iyt.vxx.szb("topb")
            , e = vit.iyt.vxx.szb("settings")
            , d = vit.iyt.vxx.szb("topi")
            , g = vit.iyt.vxx.szb("gameb");
        if (vit.gtm.grh == vit.yly.shq || vit.gtm.grh == vit.yly.opm) {
            vit.iyt.oga = (window.innerWidth == window.outerWidth)
        } else {
            if (vit.gtm.grh == vit.yly.fbe || vit.gtm.grh == vit.yly.ggh) {
                vit.iyt.oga = (window.innerHeight >= window.outerHeight)
            } else {
                if (vit.gtm.grh == vit.yly.wqj) {
                    vit.iyt.oga = (document.fullscreenElement) ? true : false
                } else {
                    if (vit.gtm.xcn) {
                        if (vit.gtm.grh == vit.yly.gbr || vit.gtm.grh == vit.yly.xxf || vit.gtm.grh == vit.yly.fyk) {
                            vit.iyt.oga = (document.webkitFullscreenElement) ? true : false
                        } else {
                            if (vit.gtm.grh == vit.yly.jjx) {
                                vit.iyt.oga = (document.mozFullScreenElement) ? true : false
                            }
                        }
                    }
                }
            }
        }
        if (d) {
            d.plj("fullscreen", vit.iyt.oga)
        }
        if (f) {
            f.iye.nxn("fullscreen", "#plj", [(vit.iyt.oga) ? 1 : 0])
        }
        if (e) {
            e.iye.nxn("fullscreen", "#plj", [(vit.iyt.oga) ? 1 : 0])
        }
        if (g) {
            g.iye.nxn("fullscreen", "#plj", [(vit.iyt.oga) ? 1 : 0])
        }
        vit.iyt.uau();
        vit.iyt.ast();
        vit.iyt.rto();
        if (vit.gtm.bla() === true && vit.gtm.opt() === false) {
            document.body.style.height = "5000px"
        }
        if (!vit.gtm.opt() && vit.gtm.grh === vit.yly.fyk && vit.iyt.wrx < screen.width) {
            window.scrollTo(0, 0)
        }
    };
    this.hzx = function() {
        vit.iyt.ejj();
        vit.iyt.hks()
    };
    this.hks = function() {
        if (vit.gtm.bla() === true && vit.gtm.opt() === false) {
            if (vit.iyt.wyf() === true && vit.iyt.jdy === true) {
                var f = document.getElementById("slideUpOverlay")
                    , e = document.getElementById("slideElem1")
                    , d = document.getElementById("slideElem2");
                if (f && e && d) {
                    if (window.innerHeight < screen.width) {
                        e.className = "slideUpAnim1";
                        d.className = "slideUpAnim2";
                        f.style.display = "block";
                        document.ontouchstart = null;
                        document.ontouchend = null;
                        document.ontouchmove = null;
                        if (window.ontouchmove == null) {
                            vit.iyt.ejj();
                            window.ontouchmove = vit.iyt.hzx
                        }
                    } else {
                        e.className = null;
                        d.className = null;
                        f.style.display = "none";
                        document.ontouchstart = vit.iyt.qbf;
                        document.ontouchmove = vit.iyt.unk;
                        document.ontouchend = vit.iyt.boo;
                        if (window.ontouchmove != null) {
                            vit.iyt.ejj();
                            window.ontouchmove = null
                        }
                        window.scrollTo(0, 0)
                    }
                }
            }
        }
    };
    this.hvv = function(g) {
        var j = document.getElementById("rotateOverlay")
            , e = document.getElementById("rotatePanel")
            , k = document.getElementById("rotate")
            , f = document.getElementById("rotateInfo")
            , d = 500
            , l = 700
            , n = window.innerHeight / d
            , m = window.innerWidth / l
            , i = (n < m) ? n : m;
        if (j && k) {
            if (g === true) {
                if (i < 1) {
                    vit.gtm.jdm(e, i, i)
                }
                f.innerHTML = vit.iyt.language.guq;
                k.className = "rotateAnim";
                j.style.display = "block";
                vit.iyt.tij = true
            } else {
                j.style.display = "none";
                k.className = null;
                vit.iyt.tij = false
            }
        }
    };
    this.aog = function() {
        var d = vit.iyt.vxx.szb("settings");
        vit.iyt.ejj();
        if (d) {
            d.iye.nxn("adjustment", "#plj", [(vit.iyt.nof === vit.vkm.yvt) ? 0 : 1]);
            d.isl()
        }
        if (vit.iyt.uil === true) {
            vit.iyt.tij = true;
            vit.iyt.otw(true);
            vit.iyt.hvv(true)
        } else {
            vit.iyt.tij = false;
            vit.iyt.otw((vit.iyt.lsb[vit.iyt.xdu] === 0));
            vit.iyt.hvv(false)
        }
    };
    this.uau = function() {
        this.ubn = window.innerWidth, this.wrx = window.innerHeight;
        this.ujb = false;
        if (vit.gtm.opt() == true && vit.vjo.value69 === true) {
            if (vit.gtm.rbs() === true) {
                this.ujb = true;
                this.ubn = (window.innerWidth > window.outerWidth) ? window.outerWidth : window.innerWidth;
                this.wrx = (window.innerHeight > window.outerHeight) ? window.outerHeight : window.innerHeight;
                if (this.ubn > this.wrx) {
                    this.wrx *= 0.98
                }
            } else {
                if (vit.gtm.bla() === true) {
                    this.ujb = true;
                    if (window.orientation === 90 || window.orientation === -90) {
                        if (screen.height === 1024) {
                            this.ubn = 1024;
                            this.wrx = (window.innerHeight < 704) ? 662 : 704
                        } else {
                            if (screen.height === 736) {
                                this.ubn = 736;
                                this.wrx = (window.innerHeight < 414 || window.innerHeight === 475) ? 370 : 414
                            } else {
                                if (screen.height === 667) {
                                    this.ubn = 667;
                                    this.wrx = 375
                                }
                            }
                        }
                    } else {
                        if (screen.height === 1024) {
                            this.ubn = 768;
                            this.wrx = (window.innerHeight < 960) ? 928 : 960
                        } else {
                            if (screen.height === 736) {
                                this.ubn = 414;
                                this.wrx = 628
                            } else {
                                if (screen.height === 667) {
                                    this.ubn = 375;
                                    this.wrx = 559
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.rto = function() {
        var g = 0
            , j = 0
            , f = 1
            , e = 1
            , i = this.ubn
            , d = this.wrx;
        this.qlm = (this.oga || i < this.width || d < this.height || this.vkm.mxy);
        g = this.rcf(this.qlm);
        f = ((i - j) / this.width).toString();
        f = Number(f.substring(0, (f.length > 5) ? 5 : f.length));
        e = ((d - g) / this.height).toString();
        e = Number(e.substring(0, (e.length > 5) ? 5 : e.length));
        if (this.qlm) {
            if (this.vkm.jyr) {
                if (f > e) {
                    this.kqu = e;
                    this.vav = e
                } else {
                    this.kqu = f;
                    this.vav = f
                }
            } else {
                this.kqu = f;
                this.vav = e
            }
        } else {
            this.kqu = 1;
            this.vav = 1
        }
        vit.gtm.jdm(this.canvas, this.kqu, this.vav);
        if (this.aqx != null) {
            vit.gtm.jdm(this.aqx, this.kqu, this.vav, ((this.vkm.aqx.yhm.x) - ((this.vkm.aqx.yhm.x + this.vkm.aqx.crs) / 2 * (1 - this.kqu))), ((this.vkm.aqx.yhm.y) - ((this.vkm.aqx.yhm.y + this.vkm.aqx.vnd) / 2 * (1 - this.vav))))
        }
        if (this.qbn != null) {
            vit.gtm.jdm(this.qbn, this.kqu, this.vav)
        }
        if (this.qlm) {
            this.offsetLeft = Math.floor((i - (this.canvas.width * this.kqu))) / 2;
            this.offsetTop = Math.floor((d - (this.canvas.height * this.vav))) / 2
        } else {
            this.offsetLeft = this.zym.offsetLeft;
            this.offsetTop = this.zym.offsetTop
        }
    };
    this.ast = function() {
        if (this.xyq() === true) {
            var e = null;
            if (this.yzk[this.trp] === vit.zop.bac) {
                if (window.orientation === -90) {
                    e = vit.vkm.hws
                } else {
                    e = vit.vkm.yvt
                }
            } else {
                if (this.yzk[this.trp] === vit.zop.cib) {
                    e = vit.vkm.hws
                } else {
                    if (this.yzk[this.trp] === vit.zop.odl) {
                        e = vit.vkm.yvt
                    }
                }
            }
            this.uil = (this.wrx > this.ubn);
            this.tzy(e);
            this.drv(false);
            if (this.jdy === true) {
                this.isl()
            } else {
                this.vxx.nxn("loading", "#isl")
            }
        } else {
            if (vit.gtm.xcn) {
                var f = (this.ubn > this.wrx) ? this.uxy : this.uyg
                    , d = this.vkm.arx
                    , e = null;
                if (f != this.gfi) {
                    this.gfi = f;
                    if (this.mwk) {
                        e = (this.gfi == this.uxy) ? vit.vkm.ppq : vit.vkm.vpj
                    } else {
                        e = (this.gfi == this.uxy) ? vit.vjo.value33 : vit.vjo.value32
                    }
                    this.tzy(e);
                    this.drv((d != this.vkm.arx) || this.mwk);
                    if (this.jdy === true) {
                        if (this.mwk && this.fka) {
                            this.iqk(this.jkm(this.language.zqg))
                        } else {
                            this.isl()
                        }
                    } else {
                        this.vxx.nxn("loading", "#isl")
                    }
                }
            } else {
                if (!this.mwk) {
                    e = (this.oga) ? vit.vjo.value15 : vit.vjo.value14;
                    this.tzy(e);
                    this.drv(false);
                    if (this.jdy === true) {
                        this.isl()
                    } else {
                        this.vxx.nxn("loading", "#isl")
                    }
                }
            }
        }
    };
    this.xyq = function() {
        return false
    };
    this.wyf = function() {
        return false
    };
    this.tzy = function(d) {};
    this.jii = function() {
        this.style = new xnf()
    };
    this.rcf = function(d) {
        var e = 0;
        if (vit.gtm.rbs() && window.innerWidth > window.innerHeight && d) {
            if (this.wxa === true && document.body.style.backgroundColor !== this.style.men.backgroundColor) {
                document.body.style.backgroundColor = this.style.men.backgroundColor
            }
        }
        return e
    };
    this.bvn = function() {
        if (vit.gtm.rbs() && !vit.gtm.opt() && window.innerWidth > window.innerHeight) {
            return 0
        }
        return 0
    };
    this.yti = function() {
        return false
    };
    this.wum = function() {
        if (vit.gtm.jsk) {
            this.tud = new mbl()
        } else {
            this.tud = new auk()
        }
        this.tud.zij();
        this.tud.twe(this.lze())
    };
    this.kxw = function() {
        this.vxx = new cia();
        this.vxx.zij();
        this.vxx.mzk("jackpots")
    };
    this.lze = function() {
        var d = new zno();
        d.zij();
        return d
    };
    this.mqd = function() {
        this.ulp = new ysw()
    };
    this.bha = function() {
        try {
            var d = a("lang")
                , f = a("uselang")
                , o = []
                , p = [];
            if (d != "") {
                sessionStorage.sessionValue1 = d
            }
            if (f != "") {
                sessionStorage.sessionValue11 = f
            }
            if (sessionStorage.sessionValue11) {
                o = sessionStorage.sessionValue11.split(",");
                for (var l = 0, m = o.length; l < m; l++) {
                    for (var k = 0, g = vit.vjo.value5.length; k < g; k++) {
                        if (o[l] === vit.vjo.value5[k] && p.indexOf(o[l]) < 0) {
                            p.push(o[l])
                        }
                    }
                }
                if (p.length == 0) {
                    p.push(vit.vjo.value5[0])
                }
                vit.vjo.value5 = [];
                for (var l = 0, m = p.length; l < m; l++) {
                    vit.vjo.value5.push(p[l])
                }
            }
            if (sessionStorage.sessionValue1 == null) {
                var q = vit.gtm.ygr();
                if (this.ouz(q)) {
                    sessionStorage.sessionValue1 = q
                } else {
                    if (q === vit.language.EN && this.ouz(vit.language.US)) {
                        sessionStorage.sessionValue1 = vit.language.US
                    } else {
                        if (q === vit.language.DE && this.ouz(vit.language.AT)) {
                            sessionStorage.sessionValue1 = vit.language.AT
                        } else {
                            if (q === vit.language.ES && this.ouz(vit.language.MX)) {
                                sessionStorage.sessionValue1 = vit.language.MX
                            } else {
                                if (q === vit.language.ES && this.ouz(vit.language.CO)) {
                                    sessionStorage.sessionValue1 = vit.language.CO
                                } else {
                                    if (q === vit.language.ES && this.ouz(vit.language.CL)) {
                                        sessionStorage.sessionValue1 = vit.language.CL
                                    } else {
                                        if (q === vit.language.ES && this.ouz(vit.language.VE)) {
                                            sessionStorage.sessionValue1 = vit.language.VE
                                        } else {
                                            if (q === vit.language.EN && this.ouz(vit.language.BR)) {
                                                sessionStorage.sessionValue1 = vit.language.BR
                                            } else {
                                                sessionStorage.sessionValue1 = vit.vjo.value5[0]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this.ouz(sessionStorage.sessionValue1)) {
                for (var l = 0, m = vit.vjo.value5.length; l < m; l++) {
                    if (vit.vjo.value5[l] == sessionStorage.sessionValue1) {
                        this.jhf = l;
                        break
                    }
                }
                this.language = this.rat(sessionStorage.sessionValue1)
            } else {
                this.jhf = 0;
                this.language = this.rat(vit.vjo.value5[this.jhf]);
                sessionStorage.sessionValue1 = vit.vjo.value5[this.jhf]
            }
        } catch (n) {
            this.jhf = 0;
            this.language = this.rat(vit.vjo.value5[this.jhf]);
            console.error(n.gba)
        }
    };
    this.rdu = function() {
        var d = (vit.vjo.value45 == vit.pmz.dye) ? this.vkm.pmz.iyt : (vit.vjo.value45 == vit.pmz.chb) ? this.vkm.pmz.eux : this.vkm.pmz.jcq;
        this.zym = document.getElementById("gameArea");
        if (this.ujb === false) {
            this.zym.style.marginTop = (-d.yhm.height / 2) + "px";
            this.zym.style.marginLeft = (-d.yhm.width / 2) + "px"
        } else {
            this.zym.style.left = "0px";
            this.zym.style.top = "0px";
            this.zym.style.marginTop = ((window.innerHeight - d.yhm.height) / 2) + "px";
            this.zym.style.marginLeft = ((window.innerWidth - d.yhm.width) / 2) + "px"
        }
        this.zym.style.width = (d.yhm.width > window.innerWidth) ? window.innerWidth + "px" : d.yhm.width + "px";
        this.zym.style.height = (d.yhm.height > window.innerHeight) ? window.innerHeight + "px" : d.yhm.height + "px";
        this.canvas = document.getElementById("canvas");
        this.canvas.width = Math.round(d.yhm.width);
        this.canvas.height = Math.round(d.yhm.height);
        this.context2D = this.canvas.getContext("2d");
        this.qbn = document.getElementById("gameOverlay");
        if (this.qbn) {
            this.qbn.style.width = d.yhm.width + "px";
            this.qbn.style.height = d.yhm.height + "px"
        }
        this.wqk(d)
    };
    this.wqk = function(d) {
        var e = new ugo();
        e.zij(d.yhm, this.context2D);
        e.parent = this;
        e.wmv = (this.mwk) ? this.language.ksx : this.language.pku;
        e.prg = this.language.error;
        e.zxd(d);
        e.yek(this.style.pmz);
        this.vxx.eiu("loading", e)
    };
    this.jzr = function() {
        var d = new pgz();
        d.zij(this.vkm.cmy.yhm, null, this.context2D);
        d.parent = this;
        d.zxd(this.vkm.cmy);
        d.yek(this.style.cmy);
        if (sessionStorage.sessionValue15 == "true" && vit.vjo.value49) {
            d.keo("time", "", "--:-- [--:--]")
        } else {
            if (sessionStorage.sessionValue15 == "true" || vit.vjo.value49) {
                d.keo("time", "", "--:--")
            }
        }
        if (this.zmf()) {
            d.keo("freeplay", "", this.language.lso)
        } else {
            d.keo("id", "", "")
        }
        this.vxx.eiu("topi", d)
    };
    this.cbs = function() {
        var d = new ijk();
        d.zij(this.vkm.wtg.yhm, null, this.context2D);
        d.parent = this;
        d.zxd(this.vkm.wtg);
        d.yek(this.style.wtg, false);
        d.ief(false);
        this.vxx.eiu("topb", d)
    };
    this.ndk = function() {};
    this.ssf = function() {
        var d = new zph();
        d.zij(this.vkm.hgr.yhm, null, this.context2D);
        d.parent = this;
        d.ewp(this.vkm.hgr);
        d.yek(this.style.hgr);
        d.ief(false);
        this.vxx.eiu("stats", d)
    };
    this.gfo = function() {
        this.xmj = new lne();
        this.xmj.zij();
        this.xmj.yek(this.style.xmj);
        this.xmj.zxd(this.vkm.xmj)
    };
    this.nxq = function() {
        this.ios = new fdj();
        this.ios.zij();
        this.ios.yek(this.style.ios);
        this.ios.zxd(this.vkm.ios)
    };
    this.ufk = function() {
        if (this.vdx()) {
            this.cef.epi = document.getElementById("jurisdictionDiv");
            this.cef.taw = document.getElementById("btnsp");
            this.cef.nom = document.getElementById("btnsl");
            this.cef.gpf = document.getElementById("btnst");
            if (this.cef.taw) {
                this.cef.taw.innerHTML = this.language.edd;
                this.cef.taw.onclick = this.cva;
                this.cef.taw.ontouchend = this.cva
            }
            if (this.cef.nom) {
                this.cef.nom.innerHTML = this.language.lus;
                this.cef.nom.onclick = this.qms;
                this.cef.nom.ontouchend = this.qms
            }
            if (this.cef.gpf) {
                this.cef.gpf.innerHTML = this.language.ivd;
                this.cef.gpf.onclick = this.yvx;
                this.cef.gpf.ontouchend = this.yvx
            }
            this.dfo();
            this.xee()
        }
    };
    this.kuf = function(e) {
        var d = new wco();
        d.zij(this.vkm.gch.yhm, null, this.context2D);
        d.parent = this;
        d.ghs = true;
        if (e) {
            d.gvv(e)
        }
        d.ewp(this.vkm.gch);
        d.btw(this.language);
        d.yek(this.style.gch);
        d.zxd(this.vkm.gch);
        d.ief(false);
        this.vxx.eiu("autop", d)
    };
    this.yfh = function(d) {
        var e = new yzv();
        e.zij(this.vkm.frl.yhm, null, this.context2D);
        e.parent = this;
        if (d) {
            e.azx(d)
        }
        e.ief(false);
        this.vxx.eiu("settings", e)
    };
    this.drv = function(d) {};
    this.ehl = function() {
        var d = this.vxx.szb("stats");
        if (d) {
            d.giu(this.vkm.hgr.yhm);
            d.zxd(this.vkm.hgr)
        }
    };
    this.osa = function() {
        if (this.xmj) {
            this.xmj.zxd(this.vkm.xmj)
        }
    };
    this.dfx = function() {
        if (this.ios) {
            this.ios.zxd(this.vkm.ios)
        }
    };
    this.dfo = function() {
        var d = null
            , e = 0;
        if (this.cef) {
            d = this.vkm.err;
            if (this.cef.epi) {
                vit.gtm.ggn(this.cef.epi, d.kju)
            }
            if (this.cef.taw) {
                this.cef.taw.style.fontSize = d.zoc.fontSize + "px";
                this.cef.taw.style.textIndent = d.zoc.textIndent + "px";
                vit.gtm.ggn(this.cef.taw, d.hib)
            }
            if (this.cef.nom) {
                this.cef.nom.style.fontSize = d.zoc.fontSize + "px";
                this.cef.nom.style.textIndent = d.zoc.textIndent + "px";
                vit.gtm.ggn(this.cef.nom, d.vto)
            }
            if (this.cef.gpf) {
                this.cef.gpf.style.fontSize = d.zoc.fontSize + "px";
                this.cef.gpf.style.textIndent = d.zoc.textIndent + "px";
                vit.gtm.ggn(this.cef.gpf, d.yro)
            }
            if (this.cef.epi) {
                e = (d.kju.width - d.kju.height) / 2;
                if (this.nof == vit.vkm.hws) {
                    this.cef.epi.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + e + "px)"
                } else {
                    this.cef.epi.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + (-e) + "px)"
                }
            }
        }
    };
    this.oke = function() {
        var d = this.vxx.szb("autop");
        if (d) {
            d.giu(this.vkm.gch.yhm);
            d.zxd(this.vkm.gch)
        }
    };
    this.hys = function() {
        var d = this.vxx.szb("settings");
        if (d) {
            d.giu(this.vkm.frl.yhm);
            d.zxd(this.vkm.frl)
        }
    };
    this.bfi = function() {
        var d = this.vxx.szb("topi");
        if (d) {
            d.giu(this.vkm.cmy.yhm);
            d.zxd(this.vkm.cmy)
        }
    };
    this.qqz = function() {
        var d = this.vxx.szb("topb");
        if (d) {
            d.giu(this.vkm.wtg.yhm);
            d.zxd(this.vkm.wtg)
        }
    };
    this.pee = function() {
        var e = this.vxx.szb("loading")
            , d = (vit.vjo.value45 == vit.pmz.dye) ? this.vkm.pmz.iyt : (vit.vjo.value45 == vit.pmz.chb) ? this.vkm.pmz.eux : this.vkm.pmz.jcq;
        if (e) {
            this.canvas.width = 0;
            if (this.ujb === false) {
                this.zym.style.marginTop = (-d.yhm.height / 2) + "px";
                this.zym.style.marginLeft = (-d.yhm.width / 2) + "px"
            } else {
                this.zym.style.left = "0px";
                this.zym.style.top = "0px";
                this.zym.style.marginTop = ((this.wrx - d.yhm.height) / 2) + "px";
                this.zym.style.marginLeft = ((this.ubn - d.yhm.width) / 2) + "px"
            }
            this.zym.style.width = (d.yhm.width > this.ubn) ? this.ubn + "px" : d.yhm.width + "px";
            this.zym.style.height = (d.yhm.height > this.wrx) ? this.wrx + "px" : d.yhm.height + "px";
            this.canvas.width = Math.round(d.yhm.width);
            this.canvas.height = Math.round(d.yhm.height);
            if (this.qbn) {
                this.qbn.style.width = d.yhm.width + "px";
                this.qbn.style.height = d.yhm.height + "px"
            }
            e.giu(d.yhm);
            e.zxd(d)
        }
    };
    this.sfs = function() {
        if (vit.gtm.xcn && !vit.gtm.jsk) {
            if (!this.tud.pkk && vit.gtm.grh != vit.yly.qfk) {
                this.vww = false;
                this.xdu = 0
            }
        }
    };
    this.czu = function(d) {
        if (vit.gtm.xcn) {
            if (!this.mwk) {
                return vit.vkm.gtp
            } else {
                if (!this.yra) {
                    return vit.vkm.ppq
                }
            }
        }
        return d
    };
    this.hil = function() {
        var d = this.vxx.szb("loading");
        this.ejj();
        if (d) {
            d.kgv = true
        }
        if ((vit.gtm.grh === vit.yly.gbr || vit.gtm.grh === vit.yly.ggh || vit.gtm.grh === vit.yly.uai) && vit.gtm.wan === vit.os.ref && vit.gtm.rme === true) {
            if (this.tud.pkk === false || vit.gtm.lpp() === false || vit.gtm.ewg() === false) {
                vit.gfj = vit.qqa.hek
            }
        }
        if (vit.gfj == 0) {
            if (this.vww === true && vit.gtm.mca().length === 0) {
                this.vww = false
            }
            if (d) {
                if (vit.vjo.value45 === vit.pmz.chb) {
                    d.start()
                } else {
                    if (vit.vjo.value45 === vit.pmz.vzw) {
                        d.ngn()
                    }
                }
                d.isl(0)
            }
            this.pdb();
            if (this.vww === true) {
                this.pmp()
            }
            if (d && d.vsf() && vit.vjo.value45 === vit.pmz.chb) {
                d.bcj = vit.iyt.tud.start
            } else {
                this.tud.start()
            }
        } else {
            if (d) {
                if (vit.gfj == vit.qqa.mhs && vit.gtm.grh === vit.yly.fyk) {
                    d.trx = this.language.vod;
                    d.isl(0)
                } else {
                    if (vit.gfj == vit.gba.xsp) {
                        d.trx = this.language.acr;
                        d.isl(0)
                    } else {
                        d.trx = this.language.wlf;
                        if (vit.gtm.wan === vit.os.ref || vit.gtm.wan === vit.os.dqp) {
                            if (vit.gfj != vit.qqa.mhs && sessionStorage.sessionValue1 === vit.language.TR) {
                                d.trx += "|Google Chrome" + this.language.tml
                            } else {
                                if (vit.gfj != vit.qqa.mhs && (sessionStorage.sessionValue1 === vit.language.GE || sessionStorage.sessionValue1 === vit.language.HU)) {
                                    d.trx += "|" + this.language.fzz + " Google Chrome" + this.language.ypj
                                } else {
                                    d.trx += "|" + this.language.tml + " Google Chrome"
                                }
                            }
                        } else {
                            if (vit.gtm.wan === vit.os.rop || vit.gtm.wan === vit.os.dqp) {
                                if (vit.gfj != vit.qqa.mhs && sessionStorage.sessionValue1 === vit.language.TR) {
                                    d.trx += "|Google Chrome, Mozilla Firefox" + this.language.tml
                                } else {
                                    if (vit.gfj != vit.qqa.mhs && (sessionStorage.sessionValue1 === vit.language.GE || sessionStorage.sessionValue1 === vit.language.HU)) {
                                        d.trx += "|" + this.language.fzz + " Google Chrome, Mozilla Firefox" + this.language.ypj
                                    } else {
                                        d.trx += "|" + this.language.tml + " Google Chrome, Mozilla Firefox"
                                    }
                                }
                            }
                        }
                        console.error("Errorcode: " + vit.gfj);
                        d.isl(0)
                    }
                }
            }
        }
    };
    this.pdb = function() {};
    this.pmp = function() {};
    this.rdi = function() {
        var e = this.awr + this.vkm.type + "/"
            , d = this.vxx.szb("loading");
        if (vit.vjo.value45 == vit.pmz.dye) {
            e += "load.jpg"
        } else {
            if (vit.vjo.value45 == vit.pmz.chb) {
                e += "load_amatic.png"
            } else {
                if (vit.vjo.value45 == vit.pmz.vzw) {
                    this.tud.yoq("splashanim", vit.vjo.value30 + "/basic/images/" + this.vkm.type + "/loadanim.png");
                    e += "load_amanet.png"
                }
            }
        }
        if (e.indexOf(".png") >= 0) {
            if (d) {
                d.fpf = true
            }
        }
        this.tud.yoq("splash", e);
        this.tud.dih()
    };
    this.txc = function() {};
    this.ouz = function(e) {
        for (var d = 0; d < vit.vjo.value5.length; d++) {
            if (vit.vjo.value5[d] == e) {
                return true
            }
        }
        return false
    };
    this.fzh = function() {
        vit.iyt.kkr = true;
        if (!vit.iyt.mwk) {
            vit.iyt.cle();
            if (vit.iyt.oza()) {
                vit.iyt.xmt()
            }
        } else {
            vit.iyt.qlg()
        }
        vit.iyt.connect()
    };
    this.cle = function() {};
    this.qlg = function() {};
    this.connect = function() {
        this.uhc.connect(this.xgb, this.pye, this.ihi, this.ndw, this.znm, this.ixr, this.bij)
    };
    this.fxn = function(d) {
        if (typeof d === "undefined") {
            vit.iyt.uhc.fxn(0)
        } else {
            vit.iyt.uhc.fxn(d)
        }
    };
    this.ljw = function(d) {
        this.zmo = 0;
        this.dfw = 0;
        this.eze = d;
        clearInterval(this.qlx);
        this.qlx = setInterval(this.rpf, 1000)
    };
    this.rpf = function() {
        var d = vit.iyt.vxx.szb("loading");
        vit.iyt.zmo++;
        vit.iyt.dfw = Math.round(vit.vjo.value47 / 1000) - vit.iyt.zmo;
        vit.iyt.dfw = (vit.iyt.dfw > 0) ? vit.iyt.dfw : 0;
        if (!vit.iyt.wxa) {
            if (d) {
                d.trx = "Can not connect to game server!|Tries to connect: " + vit.iyt.eze + " (" + vit.iyt.dfw + " sec)";
                d.isl(0)
            }
        }
    };
    this.ynv = function() {
        return vit.vjo.value74
    };
    this.isl = function(d, g, e, f) {};
    this.tgx = function() {
        return (this.jdy === true && this.wxa === true && this.uil === false)
    };
    this.iqk = function(e) {
        var d = this.vxx.szb("history");
        this.jdy = true;
        if (this.wxa) {
            if (this.vkm.wab) {
                vit.gtm.ami(this.context2D, this.vkm.iyt.yhm.x - this.vkm.iyt.zqj, this.vkm.iyt.yhm.y - this.vkm.iyt.zqj, this.vkm.iyt.yhm.width + 2 * this.vkm.iyt.zqj, this.vkm.iyt.yhm.height + 2 * this.vkm.iyt.zqj, "black", 1)
            }
            vit.gtm.xwp(this.context2D, e, "white", this.vkm.iyt.yhm.x, this.vkm.iyt.yhm.y, this.vkm.iyt.yhm.width, this.vkm.iyt.yhm.height, "arial", 28, "bold");
            if (d) {
                d.isl()
            }
        }
    };
    this.gfb = function() {
        if (vit.iyt.xmj) {
            vit.iyt.xmj.duw()
        }
        vit.iyt.aqo(false);
        vit.iyt.qjd.ahn(false);
        vit.iyt.qjd.iye.nxn("exit", "#umq", [true]);
        if (vit.gtm.anw()) {
            vit.gtm.vvd();
            setTimeout(vit.iyt.ejj, 1400)
        }
        if (vit.vjo.value67 > 0) {
            vit.iyt.fxn(vit.vjo.value67)
        } else {
            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                vit.iyt.gsw({
                    type: "history"
                    , sender: vit.iyt.xgb
                    , lang: sessionStorage.sessionValue1.toUpperCase()
                });
                window.location.href = decodeURIComponent(sessionStorage.sessionValue16)
            } else {
                if (sessionStorage.sessionValue5 && sessionStorage.sessionValue5 != "null") {
                    vit.iyt.gsw({
                        type: "quit"
                        , sender: vit.iyt.xgb
                        , lang: sessionStorage.sessionValue1.toUpperCase()
                    });
                    if (sessionStorage.sessionValue5 !== "(api)") {
                       window.parent.postMessage('CloseGame',"*");
                    }
                }
            }
        }
    };
    this.owa = function() {
        clearTimeout(vit.iyt.frx);
        vit.iyt.aqo(false);
        if (vit.iyt.qjd) {
            vit.iyt.qjd.ahn(false)
        }
        if (!vit.iyt.mwk) {
            vit.iyt.stop();
            if (vit.iyt.qjd) {
                vit.iyt.qjd.iye.nxn("info", "#ila", [vit.iyt.language.vhz]);
                vit.iyt.isl()
            }
            if (vit.iyt.xyq() === true && vit.gtm.anw()) {
                vit.gtm.vvd();
                setTimeout(vit.iyt.ejj, 800);
                setTimeout(vit.iyt.uhc.uth.close, 800)
            } else {
                vit.iyt.uhc.uth.close()
            }
        } else {
            vit.iyt.uhc.close()
        }
    };
    this.kvk = function() {
        vit.iyt.okf = true
    };
    this.rzw = function() {
        if (vit.gtm.xcn == true) {
            if (vit.iyt.okf == true) {
                vit.iyt.okf = false;
                vit.gtm.vvd();
                setTimeout(vit.iyt.ejj, 1400)
            }
        } else {
            vit.gtm.vvd();
            setTimeout(vit.iyt.ejj, 1400)
        }
    };
    this.lww = function() {
        var e = (vit.iyt.xyq() === true) ? "smartphone" : "desktop"
            , i = "en";
        if (sessionStorage.sessionValue1 == vit.language.ES || sessionStorage.sessionValue1 == vit.language.CO || sessionStorage.sessionValue1 == vit.language.CL || sessionStorage.sessionValue1 == vit.language.MX || sessionStorage.sessionValue1 == vit.language.VE) {
            i = "es"
        } else {
            if (sessionStorage.sessionValue1 == vit.language.RO) {
                i = "ro"
            } else {
                if (sessionStorage.sessionValue1 == vit.language.PT || sessionStorage.sessionValue1 == vit.language.BR) {
                    i = "pt"
                } else {
                    if (sessionStorage.sessionValue1 == vit.language.HR) {
                        i = "hr"
                    } else {
                        if (sessionStorage.sessionValue1 == vit.language.DE) {
                            i = "de"
                        } else {
                            if (sessionStorage.sessionValue1 == vit.language.SE) {
                                i = "se"
                            }
                        }
                    }
                }
            }
        }
        if (vit.iyt.euy != "") {
            var f = null
                , g = ""
                , d = "";
            if (vit.iyt.euy != "") {
                g += "rtp=" + vit.iyt.euy
            }
            if (vit.iyt.wna != "") {
                g += (vit.iyt.euy != "") ? "&" : "";
                g += "maxwin=" + ((vit.iyt.wna == "0") ? "0" : vit.iyt.fki(Number(vit.iyt.wna) * vit.iyt.bfk()))
            }
            d = encodeURIComponent(g);
            f = window.open(vit.vjo.value30 + "/gamerules/" + i + "/" + e + "/" + vit.iyt.xgb.toLowerCase() + ".html?" + d, "_blank", (e === "desktop") ? "width=800,scrollbars=yes" : null);
            if (f == null || typeof f === "undefined") {
                window.location.href = vit.vjo.value30 + "/gamerules/" + i + "/" + e + "/" + vit.iyt.xgb.toLowerCase() + ".html?" + d
            }
        }
    };
    this.ogs = function() {
        vit.iyt.dpm = false;
        vit.iyt.gzl();
        vit.iyt.fiw();
        vit.iyt.iqu()
    };
    this.ffv = function() {
        var d = vit.iyt.vxx.szb("stats");
        if (d) {
            d.rly(true, true)
        }
        vit.iyt.wil.close(true)
    };
    this.utt = function() {
        var d = vit.iyt.vxx.szb("stats");
        vit.iyt.stop();
        if (d && d.zeb()) {
            d.rly(true, true)
        }
        vit.iyt.uhc.uth.close();
        if (vit.iyt.wil) {
            vit.iyt.wil.close(false)
        }
    };
    this.jia = function() {
        clearTimeout(vit.iyt.frx);
        vit.iyt.qjd.ahn(false);
        vit.iyt.stop();
        vit.iyt.uhc.uth.abf()
    };
    this.xea = function() {
        if (vit.iyt.fka) {
            return
        }
        var d = vit.iyt.vxx.szb("history");
        if (d) {
            d.ahn(false)
        }
        vit.iyt.stop();
        vit.iyt.uhc.fcq(vit.iyt.lyz)
    };
    this.lje = function() {
        if (vit.iyt.fka) {
            return
        }
        var d = vit.iyt.vxx.szb("history");
        if (d) {
            d.ahn(false)
        }
        vit.iyt.stop();
        vit.iyt.uhc.ahk(vit.iyt.lyz)
    };
    this.gfs = function() {
        var d = vit.iyt.vxx.szb("history");
        if (d) {
            d.ahn(false)
        }
        vit.iyt.stop();
        clearInterval(vit.iyt.aqt);
        vit.iyt.vld();
        vit.iyt.uhc.close()
    };
    this.prq = function() {
        vit.iyt.tud.qic("btn");
        vit.iyt.tud.jfc("btn");
        vit.iyt.qto()
    };
    this.qab = function() {
        var f = vit.iyt.vxx.szb("topb")
            , e = vit.iyt.vxx.szb("settings")
            , g = vit.iyt.vxx.szb("gameb")
            , d = vit.iyt.vxx.szb("topi");
        if (webAudioEngine && webAudioEngine.state == "suspended") {
            webAudioEngine.resume()
        }
        if (vit.iyt.tud.pkk === true) {
            vit.iyt.xdu = (vit.iyt.xdu === vit.iyt.lsb.length - 1) ? 0 : vit.iyt.xdu + 1;
            vit.iyt.fnc(vit.iyt.lsb[vit.iyt.xdu])
        } else {
            vit.iyt.xdu = (vit.iyt.xdu === vit.iyt.lsb.length - 1) ? 0 : vit.iyt.lsb.length - 1;
            vit.iyt.otw((vit.iyt.lsb[vit.iyt.xdu] === 0))
        }
        sessionStorage.sessionValue6 = vit.iyt.xdu;
        if (vit.iyt.lsb[vit.iyt.xdu] > 0) {
            vit.iyt.tud.jfc("audioon")
        }
        if (d) {
            d.qdi("audio", vit.iyt.lsb[vit.iyt.xdu])
        }
        if (f) {
            f.iye.nxn("audio", "#plj", [vit.iyt.xdu])
        }
        if (e) {
            e.iye.nxn("audio", "#plj", [vit.iyt.xdu])
        }
        if (g) {
            g.iye.nxn("audio", "#plj", [vit.iyt.xdu])
        }
        vit.iyt.isl()
    };
    this.gbk = function() {};
    this.gsn = function() {
        var d = vit.iyt.vxx.szb("settings");
        if (d) {
            if (d.zeb()) {
                vit.iyt.ysr()
            } else {
                vit.iyt.uga()
            }
            vit.iyt.tud.jfc("btn");
            if (vit.iyt.vkm.sdv === false) {
                vit.iyt.qjd.iye.nxn("setting", "#thf", [d.zeb()])
            }
        }
    };
    this.koa = function() {
        var d = vit.iyt.vxx.szb("settings")
            , e = "";
        vit.iyt.trp = (vit.iyt.trp < vit.iyt.yzk.length - 1) ? vit.iyt.trp + 1 : (vit.gtm.fzv()) ? 0 : 1;
        localStorage.localValue1 = vit.iyt.trp;
        vit.iyt.ejj();
        if (d) {
            d.iye.nxn("adjustment", "#plj", [(vit.iyt.nof === vit.vkm.yvt) ? 0 : 1]);
            if (vit.iyt.yzk[vit.iyt.trp] === vit.zop.cib) {
                e = vit.iyt.language.left
            } else {
                if (vit.iyt.yzk[vit.iyt.trp] === vit.zop.odl) {
                    e = vit.iyt.language.gom
                } else {
                    if (vit.iyt.yzk[vit.iyt.trp] === vit.zop.bac) {
                        e = vit.iyt.language.nxc
                    }
                }
            }
            d.iye.nxn("adjustment", "#xqa", [e])
        }
    };
    this.cva = function() {
        if (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null") {
            window.parent.postMessage('CloseGame',"*");
        }
    };
    this.qms = function() {
        if (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") {
          window.parent.postMessage('CloseGame',"*");
        }
    };
    this.yvx = function() {
        if (sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") {
          window.parent.postMessage('CloseGame',"*");
        }
    };
    this.pqf = function(e, d) {
        this.qjd.iye.nxn("creditd", "#xqa", [this.fki(e), d])
    };
    this.sxo = function(e, d) {
        if (e > 0) {
            this.qjd.iye.nxn("betd", "#xqa", [this.fki(e), d])
        } else {
            this.qjd.iye.nxn("betd", "#xqa", ["", d])
        }
    };
    this.nbw = function(e) {
        var d = this.vxx.szb("topi");
        this.lyz = e;
        if (d) {
            d.yqr("id", (e > 0) ? e : "")
        }
    };
    this.aqc = function() {
        var e = ""
            , d = vit.iyt.vxx.szb("topi");
        if (vit.vjo.value49) {
            e += vit.iyt.lbg()
        }
        if (vit.vjo.value49 && sessionStorage.sessionValue15 == "true") {
            e += " ["
        }
        if (sessionStorage.sessionValue15 == "true") {
            e += vit.iyt.ugy()
        }
        if (vit.vjo.value49 && sessionStorage.sessionValue15 == "true") {
            e += "]"
        }
        if (d) {
            d.yqr("time", e)
        }
    };
    this.ugy = function() {
        return this.getTime(new Date().getTime() - this.weu)
    };
    this.lbg = function() {
        var d = new Date();
        return this.qbx(d.getHours()) + ":" + this.qbx(d.getMinutes())
    };
    this.getTime = function(e) {
        var g = e
            , d = 0
            , f = 0;
        d = Math.floor(e / (60000));
        g = e - d * 60000;
        f = Math.round(g / 1000);
        if (f >= 60) {
            f -= 60;
            d++
        }
        return this.qbx(d) + ":" + this.qbx(f)
    };
    this.qbx = function(d) {
        if (d < 0) {
            return "00"
        } else {
            if (d < 10) {
                return "0" + d
            }
        }
        return d
    };
    this.vny = function() {
        if (sessionStorage.sessionValue15 == "true" || vit.vjo.value49) {
            if (vit.vjo.value49) {
                this.lbg()
            }
            this.weu = (this.kyz > 0) ? this.kyz : new Date().getTime();
            this.aqc();
            this.aww = setInterval(this.aqc, 1000)
        }
    };
    this.axh = function() {
        clearInterval(this.aww)
    };
    this.iap = function(d) {
        this.weu -= d
    };
    this.jbe = function(d, f) {
        var e = this.vxx.szb("loading");
        if (e && e.trx == null) {
            if (f && f !== "") {
                e.prg = f
            } else {
                e.prg = this.language.error
            }
            e.trx = d;
            e.isl(this.tud.ijo())
        }
    };
    this.uga = function() {};
    this.ysr = function() {};
    this.egt = function() {};
    this.fez = function() {};
    this.qto = function() {
        var g = false
            , i = this.vxx.szb("topb")
            , f = this.vxx.szb("settings")
            , j = this.vxx.szb("gameb")
            , d = this.vxx.szb("topi");
        this.jhf = (this.jhf + 1 == vit.vjo.value5.length) ? 0 : this.jhf + 1;
        sessionStorage.sessionValue1 = vit.vjo.value5[this.jhf];
        this.language = this.rat(vit.vjo.value5[this.jhf]);
        this.btw();
        if (i && g == false) {
            var e = i.iye.szb("language");
            if (e) {
                e.rfj(this.pfq(vit.vjo.value5[this.jhf]));
                g = true
            }
            i.uqx(true)
        }
        if (f && g == false) {
            var e = f.iye.szb("language");
            if (e) {
                e.rfj(this.pfq(vit.vjo.value5[this.jhf]));
                g = true
            }
        }
        if (j && g == false) {
            var e = j.iye.szb("language");
            if (e) {
                e.rfj(this.pfq(vit.vjo.value5[this.jhf]));
                g = true
            }
        }
        if (g == false) {
            var e = this.qjd.iye.szb("lang");
            if (e) {
                e.ivz = this.pfq(vit.vjo.value5[this.jhf])
            }
        }
        if (d) {
            d.plj("language", sessionStorage.sessionValue1)
        }
        this.isl()
    };
    this.btw = function() {};
    this.rat = function(d) {
        if (d == vit.language.EN || d == vit.language.US) {
            return new cdi()
        } else {
            if (d == vit.language.ES || d == vit.language.CO || d == vit.language.MX || d == vit.language.CL || d == vit.language.VE) {
                return new hoq()
            } else {
                if (d == vit.language.DE || d == vit.language.AT) {
                    return new jqm()
                } else {
                    if (d == vit.language.PT || d == vit.language.BR) {
                        return new lxz()
                    } else {
                        if (d == vit.language.RU) {
                            return new twg()
                        } else {
                            if (d == vit.language.EE) {
                                return new rxf()
                            } else {
                                if (d == vit.language.TR) {
                                    return new yth()
                                } else {
                                    if (d == vit.language.CZ) {
                                        return new byo()
                                    } else {
                                        if (d == vit.language.GR) {
                                            return new dmk()
                                        } else {
                                            if (d == vit.language.BG) {
                                                return new rln()
                                            } else {
                                                if (d == vit.language.GE) {
                                                    return new dmc()
                                                } else {
                                                    if (d == vit.language.HU) {
                                                        return new wig()
                                                    } else {
                                                        if (d == vit.language.RO) {
                                                            return new pdd()
                                                        } else {
                                                            if (d == vit.language.FR) {
                                                                return new vdj()
                                                            } else {
                                                                if (d == vit.language.HR) {
                                                                    return new cks()
                                                                } else {
                                                                    if (d == vit.language.IT) {
                                                                        return new mac()
                                                                    } else {
                                                                        if (d == vit.language.SE) {
                                                                            return new wgv()
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
    this.pfq = function(d) {
        if (d) {
            return this.tud.dra(d)
        }
        return null
    };
    this.xwo = function() {
        this.tud.qeb()
    };
    this.vld = function() {};
    this.otw = function(d) {
        this.tud.hsy(d)
    };
    this.fnc = function(d) {
        this.tud.eib(d)
    };
    this.der = function() {
        this.ndk();
        var d = this.vxx.szb("history");
        this.wxa = true;
        this.fka = true;
        if (d) {
            d.kqp(true)
        }
        this.iqk(this.jkm(this.language.zqg))
    };
    this.wgq = function() {
        loadGame("hist_" + vit.iyt.xgb.toLowerCase(), vit.vjo.value30 + "/" + vit.iyt.xgb.toLowerCase() + "/src/hist_" + vit.iyt.xgb.toLowerCase(), "UTF-8");
        removeGame(vit.iyt.xgb.toLowerCase(), vit.vjo.value30 + "/" + vit.iyt.xgb.toLowerCase() + "/src/" + vit.iyt.xgb.toLowerCase())
    };
    this.cec = function() {
        var d = "./history_" + this.xgb.toLowerCase() + ".html";
        if (sessionStorage.sessionValue12) {
            d += "?config=" + sessionStorage.sessionValue12
        }
        window.location.href = d
    };
    this.zcq = function() {
        var d = null;
        if (vit.iyt.yra) {
            return
        }
        if (sessionStorage.sessionValue5 != null) {
            vit.iyt.gsw({
                type: "quit"
                , sender: vit.iyt.xgb
                , lang: sessionStorage.sessionValue1.toUpperCase()
            });
            sessionStorage.exitGame = "true";
            d = decodeURIComponent(sessionStorage.sessionValue5);
            vit.iyt.ydx();
            if (d !== "(api)") {
              window.parent.postMessage('CloseGame',"*");
            }
        } else {
            removeGame(vit.iyt.xgb.toLowerCase(), vit.vjo.value30 + "/" + vit.iyt.xgb.toLowerCase() + "/src/" + vit.iyt.xgb.toLowerCase());
            removeGame("hist_" + vit.iyt.xgb.toLowerCase(), vit.vjo.value30 + "/" + vit.iyt.xgb.toLowerCase() + "/src/hist_" + vit.iyt.xgb.toLowerCase());
            loadMenu("menu", vit.vjo.value1001, "UTF-8", true)
        }
    };
    this.ybc = function() {
        var d = null;
        if (sessionStorage.sessionValue5 != null) {
            vit.iyt.gsw({
                type: "quit"
                , sender: vit.iyt.xgb
                , lang: sessionStorage.sessionValue1.toUpperCase()
            });
            d = decodeURIComponent(sessionStorage.sessionValue5);
            vit.iyt.ydx();
            if (d !== "(api)") {
                window.parent.postMessage('CloseGame',"*");
            }
        } else {
            removeGame(vit.iyt.xgb.toLowerCase(), vit.vjo.value30 + "/" + vit.iyt.xgb.toLowerCase() + "/src/" + vit.iyt.xgb.toLowerCase());
            removeGame("hist_" + vit.iyt.xgb.toLowerCase(), vit.vjo.value30 + "/" + vit.iyt.xgb.toLowerCase() + "/src/hist_" + vit.iyt.xgb.toLowerCase());
            loadMenu("menu", vit.vjo.value1001, "UTF-8", false)
        }
    };
    this.ydx = function() {
        if (!vit.iyt.mwk && vit.vjo.value83) {
            sessionStorage.clear()
        }
    };
    this.fto = function(f) {
        var g = null;
        if (this.xmj) {
            for (var e = 0, d = f.length; e < d; e++) {
                g = f[e];
                if (g.vri !== vit.gba.ouv) {
                    if (g.vri === vit.gba.kxs || g.vri === vit.gba.kyc) {
                        g.Title = this.language.kkt;
                        g.Text = (g.vri === vit.gba.kxs) ? this.language.rpt : this.language.kho;
                        g.Buttons = [{
                            Text: this.language.cnn
                            , Action: "quit"
                        }]
                    } else {
                        if (g.vri === vit.gba.gvc) {
                            g.Title = this.language.qii;
                            g.Text = this.language.mkn + "\n";
                            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                                g.Text += this.language.mid;
                                g.Buttons = [{
                                    Text: this.jkm(this.language.dwr)
                                    , Action: "history"
                                }, {
                                    Text: this.language.cnn
                                    , Action: "quit"
                                }]
                            } else {
                                g.Buttons = [{
                                    Text: this.language.cnn
                                    , Action: "quit"
                                }]
                            }
                        } else {
                            if (g.vri === vit.gba.upa || g.vri === vit.gba.bxt || g.vri === vit.gba.fru) {
                                g.Title = this.qkh;
                                if (g.vri === vit.gba.upa) {
                                    g.Text = this.language.freerounds_startinfo + " " + this.freeRoundTotal + " " + this.language.freerounds + "\n\n" + this.language.wud
                                } else {
                                    if (g.vri === vit.gba.bxt) {
                                        g.Text = this.language.freerounds_info1 + " " + (this.freeRoundTotal - this.qrs) + " " + this.language.freerounds_info2 + "\n\n" + this.language.wud
                                    } else {
                                        if (g.vri === vit.gba.fru) {
                                            g.Text = this.language.freerounds_played + ": " + this.qrs + "\n" + this.language.freerounds_win + ": " + this.lmh(this.rqn)
                                        }
                                    }
                                }
                                g.Buttons = [{
                                    Text: this.language.ok
                                    , Action: "continue"
                                }]
                            }
                        }
                    }
                    if (g.vri === vit.gba.ahe || g.vri === vit.gba.cal) {
                        g.Title = this.language.bqb;
                        g.Text = this.language.qcg;
                        g.Buttons = [{
                            Text: this.language.ok
                            , Action: "continue"
                        }]
                    } else {
                        if (g.vri === vit.gba.jrg) {
                            g.Title = this.language.vhe;
                            g.Text = this.language.xgu;
                            g.Buttons = [{
                                Text: this.language.ok
                                , Action: "continue"
                            }]
                        } else {
                            if (g.vri === vit.gba.roulette.oye || g.vri === vit.gba.roulette.edf) {
                                g.Title = this.language.kkt;
                                g.Text = (g.vri === vit.gba.roulette.oye) ? this.language.bwq : this.language.ecd;
                                g.Buttons = [{
                                    Text: this.language.cnn
                                    , Action: "quit"
                                }]
                            }
                        }
                    }
                }
            }
            this.xmj.lyq(f)
        }
    };
    this.stop = function() {
        this.axh();
        this.tov();
        this.hvs();
        clearTimeout(this.oau);
        if (!this.mwk) {
            clearInterval(this.aqt)
        }
        this.vxx.nxn("autop", "#stop");
        this.vxx.nxn("settings", "#stop");
        this.vxx.nxn("topb", "#stop")
    };
    this.zmf = function() {
        var d = false;
        if (this.cty.toLowerCase().indexOf("freeplay") === 0) {
            d = true
        } else {
            if (this.pye == "freeplay" && this.ihi == "freeplay") {
                d = true
            } else {
                if (this.ndw && (this.ndw == "b71d982ffcbe56eb8cd11fa05963bbee" || this.ndw.toLowerCase() == "freeplay")) {
                    d = true
                } else {
                    if (vit.vjo.value68 != null && this.bij.toLowerCase() === vit.vjo.value68.toLowerCase()) {
                        d = true
                    }
                }
            }
        }
        if (d === true) {
            vit.vjo.value21.e = false;
            if (vit.vjo.value76) {
                vit.vjo.value76.f = false
            }
        }
        return d
    };
    this.cwp = function() {
        return (vit.vjo.value65 > 0)
    };
    this.pya = function() {
        return (((vit.gtm.wan === vit.os.bxf && vit.gtm.aay() === true) || vit.gtm.wan === vit.os.ref) && this.mwk === false)
    };
    this.afp = function() {
        return false
    };
    this.toq = function() {
        if (vit.iyt.cwp() && vit.iyt.afp()) {
            clearTimeout(vit.iyt.frx);
            vit.iyt.frx = setTimeout(vit.iyt.owa, vit.vjo.value65)
        }
    };
    this.kxd = function() {
        if (vit.iyt.cwp() && vit.iyt.frx >= 0) {
            if (vit.iyt.afp()) {
                clearTimeout(vit.iyt.frx);
                vit.iyt.frx = setTimeout(vit.iyt.owa, vit.vjo.value65)
            } else {
                clearTimeout(vit.iyt.frx);
                vit.iyt.frx = -1
            }
        }
    };
    this.tov = function() {
        if (vit.iyt.cwp()) {
            clearTimeout(vit.iyt.frx);
            vit.iyt.frx = -1
        }
    };
    this.fcc = function() {
        return false
    };
    this.buc = function() {
        return false
    };
    this.ewx = function() {
        if (vit.iyt.fcc() && vit.iyt.buc() && vit.iyt.pej < 0) {
            clearTimeout(vit.iyt.pej);
            vit.iyt.pej = setTimeout(vit.iyt.vuy, vit.iyt.srb)
        }
    };
    this.wnx = function() {
        if (vit.iyt.fcc() && vit.iyt.pej >= 0) {
            if (vit.iyt.buc()) {
                clearTimeout(vit.iyt.pej);
                vit.iyt.pej = setTimeout(vit.iyt.vuy, vit.iyt.srb)
            } else {
                clearTimeout(vit.iyt.pej);
                vit.iyt.pej = -1
            }
        }
    };
    this.hvs = function() {
        if (vit.iyt.fcc()) {
            clearTimeout(vit.iyt.pej);
            vit.iyt.pej = -1
        }
    };
    this.vuy = function() {};
    this.obo = function() {};
    this.itm = function(f) {
        var e = Number(f.replace(/_*/g, ""))
            , d = Number(this.znm.replace(/_*/g, ""));
        if (e > d) {
            this.znm = f
        }
    };
    this.aqo = function(g) {
        var e = (g && !this.mye)
            , f = this.vxx.szb("topb")
            , d = this.vxx.szb("topi");
        if (d) {
            d.umq(e)
        }
        if (f) {
            f.umq(e);
            f.ahn(e)
        }
    };
    this.lxv = function(g) {
        var e = (g && !this.mye)
            , f = this.vxx.szb("topb")
            , d = this.vxx.szb("topi");
        if (d) {
            d.umq(e)
        }
        if (f) {
            f.umq(e);
            f.nrd(e)
        }
    };
    this.dwc = function(g) {
        var e = (g && !this.mye)
            , f = this.vxx.szb("topb")
            , d = this.vxx.szb("topi");
        if (d) {
            d.umq(e)
        }
        if (f) {
            f.umq(e);
            f.zvo(e)
        }
    };
    this.ptu = function() {
        var d = this.vxx.szb("topb");
        if (d && !d.zeb()) {
            this.tud.qic("panel_in");
            this.tud.jfc("panel_in");
            d.lyq()
        }
    };
    this.gzl = function(d) {
        var e = this.vxx.szb("topb");
        if (e && e.zeb()) {
            this.tud.qic("panel_out");
            this.tud.jfc("panel_out");
            if (d) {
                e.whv = d
            }
            e.duw()
        }
    };
    this.lmh = function(f) {
        if (this.ash > 0) {
            return (f * this.ash).toFixed(0).toString()
        } else {
            if (vit.vjo.value21.e == false || this.yra == true) {
                return f.toString()
            } else {
                var e = Number(f)
                    , d = 0;
                if (vit.vjo.value21.m != 1) {
                    e = f * vit.vjo.value21.m;
                    var g = vit.vjo.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = vit.vjo.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.hzw(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.fki = function(f) {
        if (this.ash > 0) {
            var e = (f * this.ash).toFixed(0).toString();
            if (vit.vjo.value21.e == true && vit.vjo.value21.m == 1 && vit.vjo.value21.s && this.yra == false) {
                e = vit.vjo.value21.s + " " + e
            }
            return e
        } else {
            if (vit.vjo.value21.e == false || this.yra == true) {
                return f.toString()
            } else {
                var e = Number(f)
                    , d = 0;
                if (vit.vjo.value21.m != 1) {
                    e = f * vit.vjo.value21.m;
                    var g = vit.vjo.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = vit.vjo.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.hzw(e, (d == 0) ? 0 : d + 1);
                if (vit.vjo.value21.s) {
                    e = vit.vjo.value21.s + " " + e
                }
                return e
            }
        }
    };
    this.hzw = function(l, k) {
        var e = ""
            , g = ""
            , f = ""
            , d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (vit.vjo.value21.cs != null) {
                l = l.replace(/\./, vit.vjo.value21.cs)
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
                    if (vit.vjo.value21.ts != null) {
                        e += vit.vjo.value21.ts
                    }
                }
            }
            if (vit.vjo.value21.cs != null) {
                f = f.replace(/\./, vit.vjo.value21.cs)
            }
            return e + f
        }
    };
    this.zhk = function(f) {
        if (this.ash > 0) {
            return (f * this.ash).toFixed(0).toString()
        } else {
            if (vit.vjo.value76.f == false || this.yra == true) {
                return f.toString()
            } else {
                var e = Number(f)
                    , d = 0;
                if (vit.vjo.value76.m != 1) {
                    e = f * vit.vjo.value76.m;
                    var g = vit.vjo.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = vit.vjo.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.muh(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.zeu = function(f) {
        if (this.ash > 0) {
            var e = (f * this.ash).toFixed(0).toString();
            if (vit.vjo.value76.f == true && vit.vjo.value76.m == 1 && vit.vjo.value76.s && this.yra == false) {
                e = vit.vjo.value76.s + " " + e
            }
            return e
        } else {
            if (vit.vjo.value76.f == false || this.yra == true) {
                return f.toString()
            } else {
                var e = Number(f)
                    , d = 0;
                if (vit.vjo.value76.m != 1) {
                    e = f * vit.vjo.value76.m;
                    var g = vit.vjo.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = vit.vjo.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.muh(e, (d == 0) ? 0 : d + 1);
                if (vit.vjo.value76.s) {
                    e = vit.vjo.value76.s + " " + e
                }
                return e
            }
        }
    };
    this.muh = function(l, k) {
        var e = ""
            , g = ""
            , f = ""
            , d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (vit.vjo.value76.cs != null) {
                l = l.replace(/\./, vit.vjo.value76.cs)
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
                    if (vit.vjo.value76.ts != null) {
                        e += vit.vjo.value76.ts
                    }
                }
            }
            if (vit.vjo.value76.cs != null) {
                f = f.replace(/\./, vit.vjo.value76.cs)
            }
            return e + f
        }
    };
    this.jkm = function(d) {
        if (d && sessionStorage.sessionValue1 !== vit.language.GE) {
            return d.toUpperCase()
        }
        return d
    };
    this.apd = function() {
        for (var e = 0, d = this.uhc.uth.gtg.length; e < d; e++) {
            this.vxx.eiu(this.uhc.uth.gtg[e].fxa, this.uiu(this.uhc.uth.gtg[e], this.vkm.yvn.yhm[this.uhc.uth.gtg[e].yhm], this.vkm.yvn.display, this.style.yvn.ndc[this.uhc.uth.gtg[e].yhm], null), ["jackpots"])
        }
        this.vxx.eiu("jwp", this.uiu(null, this.vkm.yvn.bhr.yhm, this.vkm.yvn.bhr, this.style.yvn.bhr, this.tud.dra("jackpot")));
        this.vxx.nxn("jwp", "#ief", [false]);
        if (this.wus()) {
            this.vxx.eiu("mjwp", this.hho(this.vkm.yvn.fcm.yhm, this.vkm.yvn.fcm, this.style.yvn.fcm, this.tud.dra("mj_bg"), this.tud.dra("mj_font"), this.tud.dra("mj_label"), [this.tud.dra("mj_0"), this.tud.dra("mj_1"), this.tud.dra("mj_2"), this.tud.dra("mj_3"), this.tud.dra("mj_4"), this.tud.dra("mj_5")]));
            this.vxx.nxn("mjwp", "#ief", [false])
        }
    };
    this.jfe = function() {
        var e = this.vxx.rys("jackpots")
            , f = this.vxx.szb("jwp")
            , j = this.vxx.szb("mjwp");
        for (var g = 0, d = e.length; g < d; g++) {
            e[g].giu(this.vkm.yvn.yhm[this.uhc.uth.gtg[g].yhm]);
            e[g].zxd(this.vkm.yvn.display)
        }
        if (f) {
            f.giu(this.vkm.yvn.bhr.yhm);
            f.zxd(this.vkm.yvn.bhr)
        }
        if (j) {
            j.giu(this.vkm.yvn.fcm.yhm);
            j.zxd(this.vkm.yvn.fcm)
        }
    };
    this.uiu = function(f, j, i, g, d) {
        var e = new zfh();
        e.zij(j, null, this.context2D);
        e.parent = this;
        e.ivz = d;
        e.yek(g);
        e.zxd(i);
        if (f) {
            e.elr(f.itb);
            e.kii(f.value)
        }
        return e
    };
    this.hho = function(j, i, g, k, l, f, e) {
        var d = new wet();
        d.zij(j, null, this.context2D);
        d.parent = this;
        d.yqi = k;
        d.qsh = l;
        d.jgy = f;
        d.fww = e;
        d.yek(g);
        d.zxd(i);
        return d
    };
    this.nyi = function(f) {
        if (this.fui() === true) {
            for (var e = 0, d = f.length; e < d; e++) {
                this.vxx.nxn(f[e].fxa, "#kii", [f[e].value])
            }
            this.isl()
        }
    };
    this.tmx = function(d) {
        if (this.fui() === true) {
            this.yvn = {
                fxa: d.fxa
                , value: d.value
                , qqk: d.qqk
            }
        }
    };
    this.osh = function() {
        this.yvn = null
    };
    this.ogk = function() {
        return false
    };
    this.wus = function() {
        return false
    };
    this.fui = function() {
        return (!this.mwk && this.uhc.uth.gtg.length > 0 && this.ogk())
    };
    this.uuc = function() {
        return (this.yvn != null)
    };
    this.vdx = function() {
        return (vit.vjo.value86 === true && ((sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") || (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") || (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null")))
    };
    this.zam = function() {
        if (this.vmz() && this.rte()) {
            this.fnj()
        }
    };
    this.rte = function() {
        return false
    };
    this.vmz = function() {
        if (this.mwk) {
            return false
        }
        return (this.uhc.uth.mem.length + this.uhc.uth.cgq.length > 0)
    };
    this.fnj = function() {
        var g = null
            , e = this.uhc.uth.mem.length
            , d = this.uhc.uth.cgq.length;
        if (d + e > 0) {
            for (var f = e - 1; f >= 0; f--) {
                g = this.uhc.uth.mem.splice(f, 1)[0];
                g.vri = vit.gba.ouv;
                this.fyh.push(g)
            }
            for (var f = d - 1; f >= 0; f--) {
                g = this.uhc.uth.cgq.splice(f, 1)[0];
                g.vri = vit.gba.ouv;
                this.fyh.push(g)
            }
            if (this.xmj && !this.xmj.zeb()) {
                this.yip()
            }
        }
    };
    this.yip = function() {
        var d = null;
        if (this.fyh.length > 0) {
            d = this.fyh.shift();
            this.fto([d])
        }
    };
    this.opf = function() {
        if (vit.iyt.fwq.length > 0) {
            vit.iyt.fto(vit.iyt.fwq)
        }
    };
    this.dzp = function() {
        this.fyh.length = 0
    };
    this.ouo = function() {
        this.fwq.length = 0;
        if (this.ios) {
            this.ios.duw()
        }
    };
    this.wki = function() {
        var f = null
            , d = this.uhc.uth.fwq.length;
        if (d > 0) {
            for (var e = d - 1; e >= 0; e--) {
                f = this.uhc.uth.fwq.splice(e, 1)[0];
                f.vri = vit.gba.ouv;
                this.fwq.push(f)
            }
            if (this.ios) {
                this.ios.lyq(this.fwq[0].Title, this.fwq[0].Text, this.fwq.length)
            }
        }
    };
    this.xee = function() {
        var d = false;
        if (this.xmj && this.xmj.zeb()) {
            d = true
        }
        if (this.ios && this.ios.zeb()) {
            d = true
        }
        if (this.vdx()) {
            d = true
        }
        if (this.qbn) {
            this.qbn.style.display = (d) ? "block" : "none"
        }
    };
    this.xsu = function() {
        this.aqo(false);
        this.qjd.ahn(false);
        this.qjd.iye.nxn("info", "#bmy");
        this.fto([{
            vri: vit.gba.gvc
        }])
    };
    this.yle = function() {
        vit.iyt.irz = true
    };
    this.xmt = function() {
        this.wil = new qiw().zij(this, vit.vjo.value6)
    };
    this.ocd = function() {
        if (this.wil) {
            this.wil.connect(this.xgb, this.pye, this.ihi, this.ndw, this.znm, true)
        }
    };
    this.iqu = function() {
        if (vit.iyt.wil) {
            vit.iyt.wil.connect(vit.iyt.xgb, vit.iyt.pye, vit.iyt.ihi, vit.iyt.ndw, vit.iyt.znm, false)
        }
    };
    this.fiw = function() {};
    this.htv = function() {};
    this.dvn = function(d) {
        if (!this.zmf() && !this.mwk) {
            clearTimeout(this.oau);
            if (this.oza()) {
                this.oau = setTimeout(this.tqh, d)
            } else {
                if (Number(sessionStorage.sessionValue17) > 0) {
                    this.oau = setTimeout(this.yle, Number(sessionStorage.sessionValue17) * 60000)
                }
            }
        }
    };
    this.tqh = function() {
        vit.iyt.dpm = true
    };
    this.oza = function() {
        return vit.vjo.value36 || vit.vjo.value37
    }
}

function rtt() {
    this.zij = function() {
        this.ocz("btn", this.jbt);
        this.ocz("gamble_on", this.jbt);
        this.ocz("gamble_off", this.jbt);
        this.ocz("panel_in", this.jbt);
        this.ocz("panel_out", this.jbt);
        this.ocz("audioon", this.jbt);
        for (var a = 0; a < 12; a++) {
            this.ocz("step" + a, this.jbt)
        }
        this.ocz("maxstep", this.jbt);
        this.ocz("gambleprop", this.wto)
    }
}
rtt.prototype = new zno;

function mkz() {
    this.ykf = {
        vql: 84
        , ojt: -1
        , value: "T"
        , irm: null
    };
    this.cce = {
        vql: 80
        , ojt: -1
        , value: "P"
        , irm: null
    };
    this.start = {
        vql: 32
        , ojt: -1
        , value: "SPACE"
        , irm: null
    };
    this.mye = {
        vql: 16
        , ojt: -1
        , value: "SHIFT"
        , irm: null
    };
    this.vys = {
        vql: 38
        , ojt: -1
        , value: "\u25B2"
        , irm: null
    };
    this.waa = {
        vql: 40
        , ojt: -1
        , value: "\u25BC"
        , irm: null
    };
    this.wqw = {
        vql: 71
        , ojt: -1
        , value: "G"
        , irm: null
    };
    this.gyb = {
        vql: 27
        , ojt: -1
        , value: "ESC"
        , irm: null
    };
    this.language = {
        vql: 76
        , ojt: -1
        , value: "L"
        , irm: null
    };
    this.aky = {
        vql: 13
        , ojt: -1
        , value: "ENTER"
        , irm: null
    };
    this.kcw = {
        vql: 27
        , ojt: -1
        , value: "ESC"
        , irm: null
    };
    this.rxc = {
        vql: 39
        , ojt: -1
        , value: "\u25B6"
        , irm: null
    };
    this.iwm = {
        vql: 37
        , ojt: -1
        , value: "\u25C0"
        , irm: null
    };
    this.epy = {
        vql: 27
        , ojt: -1
        , value: "ESC"
        , irm: null
    };
    this.tvi.push(this.ykf);
    this.tvi.push(this.cce);
    this.tvi.push(this.start);
    this.tvi.push(this.vys);
    this.tvi.push(this.waa);
    this.tvi.push(this.gyb);
    this.tvi.push(this.language);
    this.tvi.push(this.mye);
    this.tvi.push(this.wqw)
}
mkz.prototype = new ysw;

function pqj(g, c, f, e, i, a, d, b) {
    this.lri = g;
    this.zcw = f;
    this.axv = e;
    this.njg = i;
    this.xgb = c;
    this.znm = a;
    this.ixr = d;
    this.bij = b;
    this.ufj = [];
    this.kqx = [];
    this.mcd = [];
    this.hpx = [];
    this.klv = [];
    this.lyz = 0;
    this.qqk = 0;
    this.win = 0;
    this.wmb = 0;
    this.xqb = 0;
    this.taj = 0;
    this.cqz = 0;
    this.yzy = 0;
    this.ejt = -1;
    this.pmo = -1;
    this.zia = 0;
    this.mye = false;
    this.lqi = -1;
    this.erv = 0;
    this.qtp = "";
    this.nkd = function(l) {
        if (l != null) {
            this.bvc = 0;
            this.zdf = this.gte(l);
            if (this.zdf == 0) {
                this.cgm = this.sji(l);
                this.gba = this.gte(l);
                this.lyz = this.ero(l);
                this.qqk = this.ero(l);
                this.win = this.ero(l);
                this.wmb = this.ero(l);
                this.cqz = this.sji(l);
                this.xqb = this.ero(l);
                this.taj = this.ero(l);
                this.yzy = this.ero(l);
                for (var j = 0; j < 8; j++) {
                    this.mcd[j] = this.sji(l)
                }
                for (var j = 0; j < 5; j++) {
                    this.kqx[j] = this.ero(l)
                }
                for (var j = 0; j < 5; j++) {
                    this.ufj[j] = this.ero(l)
                }
                this.ejt = this.sji(l);
                this.pmo = this.sji(l);
                this.zia = this.sji(l);
                this.erv = this.sji(l);
                this.lqi = this.sji(l);
                var m = this.sji(l);
                for (var j = 0; j < m; j++) {
                    this.hpx[j] = this.ero(l)
                }
                var k = this.sji(l);
                for (var j = 0; j < k; j++) {
                    this.klv[j] = this.ero(l)
                }
                this.ocf(l);
                if (this.cgm == 0) {
                    this.cch("A/u250")
                } else {
                    this.uhc.ozn()
                }
            } else {
                if (this.zdf == 1) {
                    this.cgm = this.sji(l);
                    this.gba = this.gte(l);
                    this.lyz = this.ero(l);
                    this.qqk = this.ero(l);
                    this.win = this.ero(l);
                    this.wmb = this.ero(l);
                    this.cqz = this.sji(l);
                    this.xqb = this.ero(l);
                    this.taj = this.ero(l);
                    this.yzy = this.ero(l);
                    for (var j = 0; j < 8; j++) {
                        this.mcd[j] = this.sji(l)
                    }
                    for (var j = 0; j < 5; j++) {
                        this.kqx[j] = this.ero(l)
                    }
                    for (var j = 0; j < 5; j++) {
                        this.ufj[j] = this.ero(l)
                    }
                    this.ejt = this.sji(l);
                    this.pmo = this.sji(l);
                    this.zia = this.sji(l);
                    this.mye = (this.sji(l) == 1) ? true : false;
                    this.erv = this.sji(l);
                    this.lqi = this.sji(l);
                    this.ocf(l);
                    if (this.gba == 0) {
                        if (this.cgm == vit.gfz.pcv.frr) {
                            this.uhc.ozn()
                        } else {
                            if (this.cgm == vit.gfz.pcv.gzt) {
                                this.uhc.aan()
                            } else {
                                if (this.cgm == vit.gfz.pcv.cdl) {
                                    this.uhc.fxy()
                                } else {
                                    if (this.cgm == vit.gfz.pcv.hrf) {
                                        this.uhc.sat()
                                    } else {
                                        if (this.cgm == vit.gfz.pcv.hpm) {
                                            this.uhc.hbd()
                                        } else {
                                            if (this.cgm == vit.gfz.pcv.raz) {
                                                this.uhc.zyn()
                                            } else {
                                                if (this.cgm == vit.gfz.pcv.uzg) {
                                                    this.uhc.hxm()
                                                } else {
                                                    if (this.cgm == vit.gfz.pcv.fyl) {
                                                        this.uhc.jpo()
                                                    } else {
                                                        if (this.cgm == vit.gfz.pcv.ozw) {
                                                            this.uhc.sfq()
                                                        } else {
                                                            if (this.cgm == vit.gfz.pcv.gxe) {
                                                                this.uhc.pmx()
                                                            } else {
                                                                if (this.cgm == vit.gfz.pcv.reh) {
                                                                    this.uhc.ttn()
                                                                } else {
                                                                    if (this.cgm == vit.gfz.pcv.tiu) {
                                                                        this.uhc.hly()
                                                                    } else {
                                                                        this.kza()
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
                        this.uhc.ltx(this.gba)
                    }
                } else {
                    if (this.zdf == 2) {} else {
                        if (this.zdf == 3) {
                            this.qqk = this.ero(l);
                            this.uhc.pqf()
                        } else {
                            if (this.zdf === 8) {
                                this.cch("8")
                            } else {
                                if (this.zdf == 9) {
                                    this.uhc.hxb.cty = l.substring(this.bvc)
                                } else {
                                    this.gfj = this.gte(l);
                                    this.uhc.yco(l.substring(2))
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.ocf = function(j) {
        if (this.zdf == 0) {
            this.qtp = this.dbh(j);
            if (vit.vjo.value21.e === true && vit.vjo.value21.s !== "") {
                this.qtp = ""
            }
        }
    };
    this.kza = function() {};
    this.ifh = function(j, k) {
        this.cch("A/u251," + j + "," + k)
    };
    this.eeu = function(j, l, k) {
        this.cch("A/u2512," + k[0] + "," + k[1] + "," + k[2] + "," + k[3] + "," + k[4] + "," + j + "," + l)
    };
    this.qdb = function(j, l, k) {
        this.cch("A/u253," + k[0] + "," + k[1] + "," + k[2] + "," + k[3] + "," + k[4] + "," + j + "," + l)
    };
    this.khy = function() {
        this.cch("A/u257")
    };
    this.umg = function() {
        this.cch("A/u259")
    };
    this.wqw = function(j) {
        this.cch("A/u258," + j)
    };
    this.syr = function() {
        this.cch("A/u2514")
    };
    this.gap = function() {
        this.cch("A/u2515")
    };
    this.tfj = function(j) {
        this.cch("A/u2513," + j)
    }
}
pqj.prototype = new gld;

function lru() {
    this.zij = function(a, b) {
        this.lri = b;
        this.hxb = a;
        return this
    };
    this.connect = function(c, f, e, g, a, d, b) {
        this.zcw = f;
        this.axv = e;
        this.njg = g;
        this.xgb = c;
        this.ixr = d;
        this.bij = b;
        this.uth = new pqj(this.lri, c, f, e, g, a, d, b);
        this.uth.zij(this)
    };
    this.ifh = function(a, b) {
        this.uth.ifh(a, b)
    };
    this.eeu = function(a, c, b) {
        this.uth.eeu(a, c, b)
    };
    this.qdb = function(a, c, b) {
        this.uth.qdb(a, c, b)
    };
    this.khy = function() {
        this.uth.khy()
    };
    this.umg = function() {
        this.uth.umg()
    };
    this.wqw = function(a) {
        this.uth.wqw(a)
    };
    this.syr = function() {
        this.uth.syr()
    };
    this.gap = function() {
        this.uth.gap()
    };
    this.tfj = function(a) {
        this.uth.tfj(a)
    };
    this.ozn = function() {
        var c = this.uth.cgm;
        for (var b = 0; b < this.uth.kqx.length; b++) {
            this.hxb.kqx[b] = this.uth.kqx[b]
        }
        for (var b = 0; b < this.uth.ufj.length; b++) {
            this.hxb.ufj[b] = this.uth.ufj[b]
        }
        this.hxb.qqk = this.uth.qqk;
        this.hxb.xqb = this.uth.xqb;
        this.hxb.taj = this.uth.taj;
        for (var b = 0, a = this.uth.hpx.length; b < a && this.uth.hpx[b] <= this.uth.taj; b++) {
            this.hxb.hpx[b] = this.uth.hpx[b]
        }
        if (c == vit.gfz.pcv.frr || (c == vit.gfz.pcv.cdl && this.uth.win + this.uth.wmb == 0) || c == vit.gfz.pcv.hrf || (c == vit.gfz.pcv.hpm && this.uth.win + this.uth.wmb == 0) || c == vit.gfz.pcv.uzg || (c == vit.gfz.pcv.ozw && this.uth.win + this.uth.wmb == 0) || (c == vit.gfz.pcv.gzt && this.hxb.pso == true)) {
            this.hxb.tmq = true
        } else {
            this.hxb.tmq = false
        }
        this.hxb.ykg = this.uth.cqz;
        this.hxb.totalBet = this.hxb.hpx[this.hxb.ykg];
        this.hxb.win = this.uth.win;
        this.hxb.rcs = this.uth.ejt;
        this.hxb.pmo = this.uth.pmo;
        this.hxb.zia = this.uth.zia;
        this.hxb.state = c;
        this.xpe();
        this.hxb.gqv();
        this.hxb.iac(this.uth.cgm, this.uth.lyz, this.uth.mcd, this.uth.erv, this.uth.lqi)
    };
    this.aan = function() {
        for (var a = 0; a < this.uth.kqx.length; a++) {
            this.hxb.kqx[a] = this.uth.kqx[a]
        }
        for (var a = 0; a < this.uth.ufj.length; a++) {
            this.hxb.ufj[a] = this.uth.ufj[a]
        }
        this.hxb.qqk = this.uth.qqk;
        this.hxb.rcs = this.uth.ejt;
        this.hxb.state = this.uth.cgm;
        this.hxb.pmo = this.uth.pmo;
        this.xpe();
        this.hxb.gve();
        this.hxb.nbw(this.uth.lyz)
    };
    this.jpo = function() {
        for (var a = 0; a < this.uth.kqx.length; a++) {
            this.hxb.kqx[a] = this.uth.kqx[a]
        }
        for (var a = 0; a < this.uth.ufj.length; a++) {
            this.hxb.ufj[a] = this.uth.ufj[a]
        }
        this.hxb.qqk = this.uth.qqk;
        this.hxb.pmo = this.uth.pmo;
        this.hxb.rcs = this.uth.ejt;
        this.hxb.state = this.uth.cgm;
        this.xpe();
        this.hxb.yxo();
        this.hxb.nbw(this.uth.lyz)
    };
    this.fxy = function() {
        for (var a = 0; a < this.uth.kqx.length; a++) {
            this.hxb.kqx[a] = this.uth.kqx[a]
        }
        for (var a = 0; a < this.uth.ufj.length; a++) {
            this.hxb.ufj[a] = this.uth.ufj[a]
        }
        this.hxb.qqk = this.uth.qqk;
        this.hxb.win = this.uth.win;
        this.hxb.pmo = this.uth.pmo;
        this.hxb.rcs = this.uth.ejt;
        this.hxb.state = this.uth.cgm;
        if (this.hxb.win > 0) {
            this.hxb.qtr.wwi(this.uth.mcd, this.uth.erv)
        }
        this.xpe();
        this.hxb.nuy();
        this.hxb.nbw(this.uth.lyz)
    };
    this.sat = function() {
        this.hxb.qqk = this.uth.qqk;
        this.hxb.state = this.uth.cgm;
        this.xpe();
        this.hxb.vnu()
    };
    this.hxm = function() {
        for (var a = 0; a < this.uth.kqx.length; a++) {
            this.hxb.kqx[a] = this.uth.kqx[a]
        }
        for (var a = 0; a < this.uth.ufj.length; a++) {
            this.hxb.ufj[a] = this.uth.ufj[a]
        }
        this.hxb.qqk = this.uth.qqk;
        this.hxb.win = this.uth.win;
        this.hxb.pmo = this.uth.pmo;
        this.hxb.rcs = this.uth.ejt;
        this.hxb.state = this.uth.cgm;
        if (this.hxb.win > 0) {
            this.hxb.qtr.wwi(this.uth.mcd, this.uth.erv)
        }
        this.xpe();
        this.hxb.jxw(this.uth.erv);
        this.hxb.nbw(this.uth.lyz)
    };
    this.hbd = function() {
        this.hxb.qqk = this.uth.qqk;
        this.hxb.win = this.uth.win;
        this.hxb.state = this.uth.cgm;
        this.hxb.qtr.wwi(this.uth.mcd, this.uth.erv);
        this.xpe();
        this.hxb.vlb();
        this.hxb.nbw(this.uth.lyz)
    };
    this.zyn = function() {
        this.hxb.qqk = this.uth.qqk;
        this.hxb.win = this.uth.win;
        this.hxb.state = this.uth.cgm;
        this.xpe();
        this.hxb.ceq();
        this.hxb.nbw(this.uth.lyz)
    };
    this.sfq = function() {
        this.hxb.qqk = this.uth.qqk;
        this.hxb.win = this.uth.win;
        this.hxb.state = this.uth.cgm;
        this.hxb.qtr.wwi(this.uth.mcd, this.uth.erv);
        this.xpe();
        this.hxb.bsy(this.uth.erv);
        this.hxb.nbw(this.uth.lyz)
    };
    this.pmx = function() {
        this.hxb.qqk = this.uth.qqk;
        this.hxb.win = this.uth.win;
        this.hxb.state = this.uth.cgm;
        this.xpe();
        this.hxb.utg(this.uth.lqi);
        this.hxb.nbw(this.uth.lyz)
    };
    this.ttn = function() {
        this.hxb.qqk = this.uth.qqk;
        this.hxb.win = this.uth.win;
        this.hxb.state = this.uth.cgm;
        this.hxb.qtr.wwi(this.uth.mcd, this.uth.erv);
        this.xpe();
        this.hxb.vyq(this.uth.lqi);
        this.hxb.nbw(this.uth.lyz)
    };
    this.xpe = function() {
        this.hxb.qtp = this.uth.qtp
    }
}
lru.prototype = new itw;

function odu() {
    var a = this;
    this.tfq = false;
    this.mxa = null;
    this.iye = null;
    this.csv = false;
    this.cjm = -1;
    this.ayv = 0;
    this.jbs = null;
    this.rhu = 800;
    this.zha = 0;
    this.fil = null;
    this.blt = null;
    this.ccx = null;
    this.igb = null;
    this.ujz = null;
    this.jvo = null;
    this.mqa = new qlq();
    this.rpj = new qlq();
    this.hvg = 30;
    this.zij = function(b, d, c) {
        odu.prototype.zij.call(this, b, d, c);
        this.ozo()
    };
    this.ewp = function(c, b) {
        try {
            this.hvg = c.nuz;
            this.mqa = c.jrz;
            this.rpj = c.xkb;
            this.qyf(c);
            this.qlh(c);
            this.mso(c);
            this.yek(b, false)
        } catch (d) {
            console.error(d)
        }
    };
    this.zxd = function(f) {
        try {
            var c = {}
                , b = this.iye.szb("info")
                , m = this.iye.szb("creditd")
                , l = this.iye.szb("betd")
                , k = this.iye.rys("buttons");
            if (this.parent.ynv() != null) {
                c = f.xjd
            } else {
                if (vit.vjo.value57 === vit.ui.mwv) {
                    c = f.miv
                } else {
                    if (vit.vjo.value57 === vit.ui.qog) {
                        c = f.dcl
                    } else {
                        if (vit.vjo.value57 === vit.ui.ldo) {
                            c = f.thq
                        }
                    }
                }
            }
            this.hvg = f.nuz;
            this.mqa = f.jrz;
            this.rpj = f.xkb;
            if (m) {
                m.zxd(f.display);
                m.giu(f.dft)
            }
            if (l) {
                l.zxd(f.display);
                l.giu(f.vfm)
            }
            if (b) {
                b.zxd(f.vhe);
                b.giu(f.vhe.yhm)
            }
            this.xfk();
            for (var d = 0, g = k.length; d < g; d++) {
                if (k[d] instanceof tpq) {
                    k[d].zxd(f.khc)
                }
            }
            if (this.parent.ynv() != null) {
                this.iye.nxn("astart", "#zxd", [f.dkj]);
                if (this.parent.xyq() === true) {
                    this.iye.nxn("start", "#zxd", [f.dkj])
                } else {
                    this.iye.nxn("start", "#zxd", [f.jle])
                }
            } else {
                this.iye.nxn("start", "#zxd", [f.jle]);
                if (vit.vjo.value57 === vit.ui.mwv) {
                    this.iye.nxn("astart", "#zxd", [f.jle])
                }
            }
            this.iye.nxn("start", "#giu", [c.ngo]);
            this.iye.nxn("astart", "#giu", [c.cwl]);
            this.iye.nxn("bet", "#giu", [c.cic]);
            this.iye.nxn("gamble", "#giu", [c.hva]);
            this.iye.nxn("exit", "#giu", [c.biq]);
            this.iye.nxn("lang", "#giu", [c.oen]);
            this.iye.nxn("setting", "#giu", [c.fnv])
        } catch (j) {
            console.error(j)
        }
    };
    this.yek = function(f) {
        try {
            var k = this.iye.szb("info")
                , c = this.iye.rys("displays")
                , g = this.iye.rys("buttons");
            this.blt = f.backgroundColor;
            this.ccx = f.rpz;
            this.ujz = f.pfp;
            this.jvo = f.irj;
            if (k) {
                k.yek(f.vhe)
            }
            for (var d = 0, b = g.length; d < b; d++) {
                g[d].yek(f.efj)
            }
            for (var d = 0, b = c.length; d < b; d++) {
                c[d].yek(f.display)
            }
            this.xfk()
        } catch (j) {
            console.error(j)
        }
    };
    this.kng = function(o, n, p) {
        var m = this.iye.rys("buttons")
            , d = this.iye.szb("bet")
            , b = this.iye.szb("start")
            , k = this.iye.szb("betd")
            , c = this.iye.szb("creditd");
        nbk = this.parent.vxx.szb("betsel"), ygw = o - this.x, dtp = n - this.y;
        for (var g = 0, l = m.length; g < l; g++) {
            var e = m[g];
            if (ygw >= e.x && ygw <= e.x + e.width && dtp >= e.y && dtp <= e.y + e.height && e.zeb() == true) {
                if (e.ijh() && !e.umv()) {
                    if (e === d) {
                        e.eqb(true, true, false);
                        for (var f = 0; f < l; f++) {
                            m[f].ixb(true, false)
                        }
                        e.vve();
                        this.jbs = function() {
                            if (e.vve() === true) {
                                clearInterval(a.ayv);
                                e.eqb(false, true);
                                for (var i = 0; i < l; i++) {
                                    m[i].ixb(false)
                                }
                            }
                        };
                        this.ayv = setInterval(this.jbs, e.awm)
                    } else {
                        if (e === b && b.vve === this.ywh) {
                            e.eqb(true, true, false)
                        } else {
                            e.eqb(true, true)
                        }
                        e.vve();
                        for (var f = 0; f < l; f++) {
                            m[f].ixb(true)
                        }
                    }
                    return true
                }
            }
        }
        if (d && d.ijh() && !d.umv()) {
            if (k && ygw >= k.x && ygw <= k.x + k.width && dtp >= k.y && dtp <= k.y + k.height) {
                if (!p) {
                    if (nbk && nbk.ijh()) {
                        this.parent.cpd()
                    }
                    return true
                }
            } else {
                if (c && ygw >= c.x && ygw <= c.x + c.width && dtp >= c.y && dtp <= c.y + c.height) {
                    if (!p) {
                        this.parent.qih()
                    }
                    return true
                }
            }
        }
        return false
    };
    this.szw = function() {
        var f = this.iye.rys("buttons")
            , k = this.iye.szb("bet")
            , g = this.iye.szb("start");
        for (var d = 0, b = f.length; d < b; d++) {
            var e = f[d];
            if (e.xoe() === true) {
                e.eqb(false, true);
                if (e === k) {
                    clearInterval(this.ayv);
                    for (var c = 0; c < b; c++) {
                        f[c].ixb(false)
                    }
                } else {
                    if (e === g && g.vve === this.ywh) {
                        clearTimeout(this.zha);
                        a.parent.tud.qic("auto_fill");
                        this.iye.nxn("start", "#kdl")
                    }
                }
                return true
            }
        }
        return false
    };
    this.zls = function(g) {
        var f = this.iye.rys("buttons")
            , k = this.iye.szb("bet");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (g == d.rrz) {
                if (d.ijh() && !d.umv()) {
                    d.eqb(true, true);
                    d.vve();
                    for (var c = 0; c < b; c++) {
                        f[c].ixb(true)
                    }
                }
                return true
            }
        }
        if (g == this.parent.ulp.waa.vql) {
            if (k && k.ijh() && !k.umv()) {
                this.parent.kka();
                for (var c = 0, b = f.length; c < b; c++) {
                    f[c].ixb(true)
                }
            }
            return true
        }
        return false
    };
    this.gjg = function() {
        var e = this.iye.rys("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.xoe() == true) {
                c.eqb(false, true);
                return true
            }
        }
        return false
    };
    this.ovk = function(l, k, m) {
        var j = this.iye.rys("buttons")
            , c = this.iye.szb("bet");
        if (l != null && k != null) {
            var e = l - this.x;
            var d = k - this.y;
            for (var f = 0, g = j.length; f < g; f++) {
                var b = j[f];
                if (e >= b.x && e <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.zeb() && b.ijh() && !b.umv()) {
                    return b.vve
                }
            }
        } else {
            if (m != null) {
                for (var f = 0, g = j.length; f < g; f++) {
                    var b = j[f];
                    if (m == b.rrz && b.zeb() && b.ijh() && !b.umv()) {
                        return b.vve
                    }
                }
                if (m == this.parent.ulp.waa.vql && c && c.zeb() && c.ijh() && !c.umv()) {
                    return this.parent.kka
                }
            }
        }
        return null
    };
    this.ozo = function() {
        this.iye = new cia();
        this.iye.zij();
        this.iye.mzk("displays");
        this.iye.mzk("buttons");
        this.iye.mzk("allbuttons");
        this.iye.mzk("infos");
        this.iye.mzk("start");
        this.iye.mzk("collect");
        this.iye.mzk("game");
        this.iye.mzk("hold");
        this.iye.mzk("settings")
    };
    this.mso = function(b) {
        var c = this.wtz(b.vhe.yhm);
        c.zxd(b.vhe);
        this.iye.eiu("info", c, ["infos"])
    };
    this.qyf = function(c) {
        var b = {};
        if (this.parent.ynv() != null) {
            b = c.xjd
        } else {
            if (vit.vjo.value57 === vit.ui.mwv) {
                b = c.miv
            } else {
                if (vit.vjo.value57 === vit.ui.qog) {
                    b = c.dcl
                } else {
                    if (vit.vjo.value57 === vit.ui.ldo) {
                        b = c.thq
                    }
                }
            }
        }
        if (this.parent.ynv() != null) {
            this.iye.eiu("astart", this.pkd(b.cwl, this.parent.language.nvj, "---", this.parent.tud.dra("btn_s"), this.parent.jmm, (!this.parent.mwk) ? this.parent.ulp.mye : null, c.dkj), ["buttons", "allbuttons", "start", "collect", "hold"]);
            if (this.parent.xyq() === true) {
                this.iye.eiu("start", this.pkd(b.ngo, (this.parent.vkm.osy === false) ? this.parent.language.start : null, "---", (this.parent.vkm.osy === false) ? this.parent.tud.dra("btn") : this.parent.tud.dra("btn_dl"), (this.parent.xyq() === true) ? this.ywh : this.parent.snz, (!this.parent.mwk) ? this.parent.ulp.start : null, c.dkj), ["buttons", "allbuttons", "start", "collect", "hold"])
            } else {
                this.iye.eiu("start", this.gki(b.ngo, (this.parent.vkm.osy === false) ? this.parent.language.start : null, (this.parent.vkm.osy === false) ? this.parent.tud.dra("btn") : this.parent.tud.dra("btn_dl"), (this.parent.xyq() === true) ? this.ywh : this.parent.snz, (!this.parent.mwk) ? this.parent.ulp.start : null, c.jle), ["buttons", "allbuttons", "start", "collect", "hold"])
            }
        } else {
            this.iye.eiu("start", this.gki(b.ngo, (this.parent.vkm.osy === false) ? this.parent.language.start : null, (this.parent.vkm.osy === false) ? this.parent.tud.dra("btn") : this.parent.tud.dra("btn_dl"), (this.parent.xyq() === true) ? this.ywh : this.parent.snz, (!this.parent.mwk) ? this.parent.ulp.start : null, c.jle), ["buttons", "allbuttons", "start", "collect", "hold"]);
            this.iye.eiu("astart", this.gki(b.cwl, this.parent.language.mye, (vit.vjo.value57 === vit.ui.mwv) ? this.parent.tud.dra("btn") : this.parent.tud.dra("btn_s"), this.parent.jmm, (!this.parent.mwk) ? this.parent.ulp.mye : null, c.khc), ["buttons", "allbuttons", "start", "collect", "game", "hold"])
        }
        this.iye.eiu("bet", this.gki(b.cic, this.parent.language.llk, this.parent.tud.dra("btn_s"), this.parent.jyp, (!this.parent.mwk) ? this.parent.ulp.vys : null, c.khc), ["buttons", "allbuttons"]);
        this.iye.szb("bet").awm = 300;
        this.iye.eiu("gamble", this.gki(b.hva, this.parent.language.wqw, this.parent.tud.dra("btn_s"), this.parent.trs, (!this.parent.mwk) ? this.parent.ulp.wqw : null, c.khc), ["buttons", "allbuttons", "start", "game", "collect", "hold"]);
        if (this.parent.ynv() != null) {
            this.iye.eiu("exit", this.gki(b.biq, (this.parent.vkm.osy === true) ? null : (vit.vjo.value50.g === true) ? this.parent.language.cnn : this.parent.language.wrk, (this.parent.vkm.osy === false) ? this.parent.tud.dra("btn_s") : this.parent.tud.dra("btn_e"), this.parent.owa, (!this.parent.mwk) ? this.parent.ulp.gyb : null, c.khc), ["buttons", "allbuttons", "collect"])
        } else {
            if (vit.vjo.value57 !== vit.ui.ldo) {
                this.iye.eiu("exit", this.gki(b.biq, (this.parent.vkm.osy === true) ? null : (vit.vjo.value50.g === true) ? this.parent.language.cnn : this.parent.language.wrk, (this.parent.vkm.osy === false) ? this.parent.tud.dra("btn_s") : this.parent.tud.dra("btn_e"), this.parent.owa, (!this.parent.mwk) ? this.parent.ulp.gyb : null, c.khc), ["buttons", "allbuttons", "collect"])
            }
            if (vit.vjo.value57 !== vit.ui.mwv && this.parent.ynv() == null) {
                this.iye.eiu("lang", this.lic(b.oen, this.parent.pfq(sessionStorage.sessionValue1), this.parent.prq, (!this.parent.mwk) ? this.parent.ulp.language : null), ["buttons", "allbuttons", "hold"])
            }
        }
        this.iye.eiu("setting", this.gki(b.fnv, null, (this.parent.vkm.osy === true) ? this.parent.tud.dra("btn_m") : this.parent.tud.dra("btn_s"), this.parent.gsn, null, c.khc), ["buttons", "settings"])
    };
    this.qlh = function(c) {
        var b = this.parent.tud.dra("display_effect");
        this.iye.eiu("creditd", this.svy(c.dft, (this.parent.zmf()) ? this.parent.language.lso : this.parent.language.qqk, this.parent.fki(this.parent.qqk), b, c.display), ["displays"]);
        this.iye.eiu("betd", this.svy(c.vfm, this.parent.language.llk, this.parent.fki(this.parent.totalBet), b, c.display), ["displays"])
    };
    this.fct = function() {
        if (this.cjm == 1) {
            this.ahn(this.csv)
        } else {
            if (this.cjm == 2) {
                this.ztl(this.csv)
            } else {
                if (this.cjm == 3) {
                    this.hyz(this.csv)
                } else {
                    if (this.cjm == 4) {
                        this.qxb(this.csv)
                    } else {
                        if (this.cjm == 5) {
                            this.nzw(this.csv)
                        } else {
                            if (this.cjm == 6) {
                                this.zvo(this.csv)
                            }
                        }
                    }
                }
            }
        }
    };
    this.ahn = function(d) {
        var c = this.iye.rys("allbuttons")
            , e = 0
            , b = 0;
        this.csv = d;
        this.cjm = 1;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].umq(d)
        }
    };
    this.ztl = function(d) {
        var c = this.iye.rys("allbuttons")
            , f = this.iye.rys("start")
            , e = 0
            , b = 0;
        this.csv = d;
        this.cjm = 2;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].umq(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].umq(d)
        }
    };
    this.hyz = function(d) {
        var c = this.iye.rys("allbuttons")
            , f = this.iye.rys("game")
            , e = 0
            , b = 0;
        this.csv = d;
        this.cjm = 3;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].umq(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].umq(d)
        }
    };
    this.qxb = function(d) {
        var c = this.iye.rys("allbuttons")
            , f = this.iye.rys("hold")
            , e = 0
            , b = 0;
        this.csv = d;
        this.cjm = 4;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].umq(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].umq(d)
        }
    };
    this.nzw = function(d) {
        var c = this.iye.rys("allbuttons")
            , f = (this.tfq === true) ? this.iye.rys("collect") : this.iye.rys("start")
            , e = 0
            , b = 0;
        this.csv = d;
        this.cjm = 5;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].umq(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].umq(d)
        }
    };
    this.zvo = function(e) {
        var c = this.iye.rys("allbuttons")
            , d = this.iye.rys("settings")
            , f = 0
            , b = 0;
        this.csv = e;
        this.cjm = 6;
        for (f = 0, b = c.length; f < b; f++) {
            c[f].umq(false)
        }
        for (f = 0, b = d.length; f < b; f++) {
            d[f].umq(e)
        }
    };
    this.svy = function(c, g, f, e, b) {
        var d = new jns();
        d.zij(c, this.context2D, null, g, f);
        d.parent = this;
        d.ivz = e;
        d.zxd(b);
        return d
    };
    this.gki = function(e, i, g, f, c, d) {
        var b = new tpq();
        b.zij(e, this.context2D, null, g, null, i);
        b.parent = this;
        b.vve = f;
        b.zxd(d);
        if (c) {
            b.rrz = c.vql
        }
        return b
    };
    this.pkd = function(e, j, g, i, f, c, d) {
        var b = new tpq();
        b.zij(e, this.context2D, null, i, null, j);
        b.parent = this;
        b.vve = f;
        b.value = g;
        b.zxd(d);
        if (c) {
            b.rrz = c.vql
        }
        return b
    };
    this.lic = function(d, f, e, c) {
        var b = new nvv();
        b.zij(d, this.context2D, null, f, null);
        b.parent = this;
        b.vve = e;
        if (c) {
            b.rrz = c.vql
        }
        return b
    };
    this.wtz = function(b) {
        var c = new suv();
        c.zij(b, this.context2D);
        c.parent = this;
        return c
    };
    this.zae = function(c, b) {
        var d = this.iye.szb("info");
        if (d) {
            d.ljz(b);
            d.wrm(c, b)
        }
    };
    this.stop = function() {
        clearInterval(this.ayv)
    };
    this.xfk = function() {
        var b = this.context2D;
        b.save();
        if (this.blt != null) {
            var f = b.createLinearGradient(this.mqa.x, this.mqa.y, this.mqa.x, this.mqa.y + this.mqa.height);
            f.addColorStop(0, this.blt);
            b.fillStyle = f;
            b.fillRect(this.mqa.x, this.mqa.y, this.mqa.width, this.mqa.height)
        }
        if (this.ccx != null) {
            var f = b.createLinearGradient(this.mqa.x, this.mqa.y, this.mqa.x, this.mqa.y + this.hvg);
            f.addColorStop(0, this.ccx);
            f.addColorStop(1, this.blt);
            b.fillStyle = f;
            b.fillRect(this.mqa.x, this.mqa.y, this.mqa.width, this.hvg)
        }
        if (this.mxa != null) {
            b.drawImage(this.mxa, this.mqa.x, this.mqa.y, this.mqa.width, this.mqa.height)
        }
        if (this.rpj && this.rpj.width > 0 && this.rpj.height > 0) {
            var f = b.createLinearGradient(this.rpj.x, this.rpj.y, this.rpj.x + this.rpj.width, this.rpj.y)
                , c = this.parent.tud.dra("btn_back");
            f.addColorStop(0.2, this.ujz);
            f.addColorStop(1, this.jvo);
            b.fillStyle = f;
            if (this.parent.nof === vit.vkm.yvt) {
                b.fillRect(this.rpj.x, this.rpj.y, this.rpj.width, this.rpj.height);
                if (c) {
                    b.drawImage(c, this.rpj.x, this.rpj.y, this.rpj.width, this.rpj.height)
                }
            } else {
                if (this.parent.nof === vit.vkm.hws) {
                    b.save();
                    b.translate(this.rpj.width / 2, this.rpj.height / 2);
                    b.rotate(Math.PI);
                    b.translate(-this.rpj.width / 2, -this.rpj.height / 2);
                    b.fillRect(this.rpj.x, this.rpj.y, this.rpj.width, this.rpj.height);
                    if (c) {
                        b.drawImage(c, this.rpj.x, this.rpj.y, this.rpj.width, this.rpj.height)
                    }
                    b.restore()
                }
            }
        }
        try {
            this.fil = b.getImageData(0, 0, this.width, this.height)
        } catch (d) {
            netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
            this.fil = b.getImageData(0, 0, this.width, this.height)
        }
        b.clearRect(0, 0, this.width, this.height);
        b.restore()
    };
    this.isl = function(k, g, l, e) {
        if (!this.zeb() || !this.parent.tgx()) {
            return
        }
        var c = (k != null && g != null && l != null && e != null)
            , j = (c === true) ? new qlq(k, g, l, e) : new qlq(this.x, this.y, this.width, this.height)
            , m = this.context2D
            , b = this.iye.anz();
        m.save();
        if (c) {
            m.beginPath();
            m.rect(k, g, l, e);
            m.closePath();
            m.clip()
        }
        if (this.fil != null) {
            m.putImageData(this.fil, 0, 0)
        }
        for (var d = 0, f = b.length; d < f; d++) {
            b[d].isl()
        }
        if (this.parent.zzx === true && this.parent.xyq() === false) {
            this.parent.icd(m, j)
        }
        m.restore();
        if (this.riv && this.nxv) {
            if (c) {
                this.riv.drawImage(this.nxv, k, g, l, e, this.x + k, this.y + g, l, e)
            } else {
                this.riv.drawImage(this.nxv, this.x, this.y)
            }
        }
    };
    this.ywh = function() {
        if (a.parent.mye === true) {
            a.parent.jmm()
        } else {
            a.parent.snz();
            if (a.parent.myo() === true) {
                a.parent.tud.jfc("auto_fill");
                a.iye.nxn("start", "#qjk", [a.rhu]);
                a.zha = setTimeout(a.etf, a.rhu)
            }
        }
    };
    this.etf = function() {
        a.parent.jmm();
        a.iye.nxn("start", "#pwn")
    }
}
odu.prototype = new pzb;

function ngi() {
    this.ivz = null;
    this.mcu = [];
    this.ubz = [];
    this.flj = [];
    this.dpv = "arial";
    this.yjy = "bold";
    this.eqn = "yellow";
    this.qyx = 30;
    this.wla = 6;
    this.yek = function(a) {
        try {
            this.dpv = a.font;
            this.yjy = a.exc;
            this.eqn = a.rbc
        } catch (b) {
            console.error(b)
        }
    };
    this.zxd = function(a) {
        try {
            this.qyx = a.fontSize;
            this.wla = a.ike
        } catch (b) {
            console.error(b)
        }
    };
    this.uar = function(c) {
        for (var b = 0, a = c.length; b < a; b++) {
            this.flj[b] = c[a - 1 - b]
        }
    };
    this.kot = function(c) {
        for (var b = 0, a = c.length; b < a; b++) {
            this.ubz[b] = c[a - 1 - b];
            this.mcu[b] = c[a - 1 - b]
        }
    };
    this.cbc = function(c) {
        for (var b = 0, a = this.ubz.length; b < a; b++) {
            this.mcu[b] = this.ubz[b] * c
        }
        this.isl()
    };
    this.isl = function() {
        if (!this.zeb() || !this.parent.tgx()) {
            return
        }
        var b = this.context2D
            , g = this.height - 2 * this.wla
            , c = this.width
            , d = Math.round(g / this.flj.length)
            , f = (this.qyx < d) ? this.qyx : d - 2;
        b.save();
        if (this.ivz != null) {
            b.drawImage(this.ivz, 0, 0)
        }
        for (var e = 0, a = this.flj.length; e < a; e++) {
            vit.gtm.gzk(b, this.flj[e], this.eqn, 0, this.wla + d * (e), c, f, this.dpv, f, this.yjy, this.wla)
        }
        for (var e = 0, a = this.mcu.length; e < a; e++) {
            vit.gtm.adt(b, this.parent.lmh(this.mcu[e]), this.eqn, 0, this.wla + d * (e), c, f, this.dpv, f, this.yjy, this.wla)
        }
        b.restore();
        if (this.riv && this.nxv) {
            this.riv.drawImage(this.nxv, this.x, this.y)
        }
    }
}
ngi.prototype = new pzb;

function sig() {
    var a = this;
    this.qpc = 0;
    this.qzf = 1;
    this.fbc = 7;
    this.fkn = 0;
    this.vbj = 0;
    this.xrc = 0;
    this.apr = 0;
    this.wih = this.qpc;
    this.pxt = this.cib;
    this.qxs = function() {
        this.ief(true);
        this.izn = true;
        this.csv = false;
        this.wih = this.qpc;
        this.vbj = Math.floor(this.width / this.fbc);
        this.apr = 0;
        this.xrc = 0
    };
    this.nrw = function() {
        this.izn = true;
        this.csv = false;
        this.wih = this.qzf;
        this.vbj = -Math.floor(this.width / this.fbc);
        this.apr = 1;
        this.xrc = this.width
    };
    this.pxv = function() {
        if (a.apr < a.fbc) {
            a.xrc += a.vbj;
            a.apr++;
            return true
        } else {
            a.izn = false;
            a.csv = true;
            if (a.wih == a.qzf) {
                a.ief(false)
            }
            return false
        }
    };
    this.jfc = function() {
        if (this.tnt == this.bna) {
            this.parent.tud.jfc("maxstep")
        } else {
            this.parent.tud.jfc("step" + (this.tnt % 12))
        }
    };
    this.nca = function() {
        a.ilo = false
    };
    this.isl = function() {
        if (!this.zeb() || !this.parent.tgx()) {
            return
        }
        this.sov();
        if (this.riv && this.nxv) {
            if (this.izn) {
                if (this.xrc > 0) {
                    if (this.pxt == this.odl) {
                        this.riv.drawImage(this.nxv, this.width - this.xrc, 0, this.xrc, this.height, this.x, this.y, this.xrc, this.height)
                    } else {
                        if (this.pxt == this.cib) {
                            this.riv.drawImage(this.nxv, 0, 0, this.xrc, this.height, this.x + this.width - this.xrc, this.y, this.xrc, this.height)
                        }
                    }
                }
            } else {
                this.riv.drawImage(this.nxv, this.x, this.y)
            }
        }
    };
    this.ztw = function(c) {
        var f = this.eqn
            , e = this.eqn
            , b = 0
            , d = 0;
        if (this.pxt == this.cib) {
            b = this.tzo;
            d = this.fuw.x - 2 * this.tzo
        } else {
            if (this.pxt == this.odl) {
                b = this.fuw.x + this.fuw.width + this.tzo;
                d = this.width - this.tzo - (this.fuw.x + this.fuw.width + this.tzo)
            }
        }
        if (this.tnt > 0 && this.tnt < this.qoz.length - 1) {
            vit.gtm.ami(c, b, this.fuw.y + ((this.bho - this.nap) * this.sns), d, this.sns, this.svh, this.skp);
            vit.gtm.adt(c, this.parent.lmh(this.qoz[this.tnt]), this.mzh, b, this.fuw.y + ((this.bho - this.nap) * this.sns) + (this.sns - this.qyx) / 2, d, this.qyx, this.dpv, this.qyx, this.yjy, this.tzo)
        } else {
            if (this.tnt == 0) {
                f = this.mzh
            } else {
                if (this.tnt == this.qoz.length - 1) {
                    e = this.mzh
                }
            }
        }
        vit.gtm.ami(c, b, this.fuw.y + (this.sns * (this.bho - 1)), d, this.sns, this.svh, this.skp);
        vit.gtm.adt(c, this.parent.lmh(this.qoz[0]), f, b, this.fuw.y + (this.sns * (this.bho - 1)) + (this.sns - this.qyx) / 2, d, this.qyx, this.dpv, this.qyx, this.yjy, this.tzo);
        vit.gtm.ami(c, b, this.fuw.y, d, this.sns, this.svh, this.skp);
        vit.gtm.adt(c, this.parent.lmh(this.qoz[this.qoz.length - 1]), e, b, this.fuw.y + (this.sns - this.qyx) / 2, d, this.qyx, this.dpv, this.qyx, this.yjy, this.tzo);
        vit.gtm.xwp(c, "+", this.eqn, this.jfj.x, this.jfj.y, this.jfj.width, this.jfj.height, this.dpv, this.qyx, this.yjy);
        vit.gtm.xwp(c, "", this.eqn, this.fcn.x, this.fcn.y, this.fcn.width, this.fcn.height, this.dpv, this.qyx, this.yjy);
        if (this.itb) {
            vit.gtm.xwp(c, this.itb, this.eqn, this.ssa.x, this.ssa.y, this.ssa.width, this.ssa.height, this.dpv, this.qyx, this.yjy)
        }
    }
}
sig.prototype = new lvy;

function duk() {
    this.ivz = null;
    this.vsm = [];
    this.csv = false;
    this.mcu = false;
    this.ncf = false;
    this.tmw = false;
    this.yqj = true;
    this.sos = -1;
    this.pav = null;
    this.fil = null;
    this.dpv = "arial";
    this.yjy = "bold";
    this.aat = "yellow";
    this.dxd = "yellow";
    this.eqn = "yellow";
    this.qyx = 18;
    this.nns = 0;
    this.bhn = 0;
    this.kle = 20;
    this.eym = 0;
    this.yek = function(a) {
        try {
            this.dpv = a.font;
            this.yjy = a.exc;
            this.aat = a.gix;
            this.dxd = a.kqm;
            this.eqn = a.rbc
        } catch (b) {
            console.error(b)
        }
    };
    this.zxd = function(a) {
        try {
            this.qyx = a.fontSize;
            this.nns = a.zkr;
            this.bhn = a.pzr;
            this.kle = a.dxw;
            this.eym = a.xyy;
            this.yqj = a.hfv
        } catch (b) {
            console.error(b)
        }
    };
    this.kng = function(a, b) {
        if (a >= this.x && a <= this.x + this.width && b >= this.y && b <= this.y + this.height && this.zeb() === true) {
            if (this.ijh() === true) {
                this.parent.uka(this.ncf);
                this.eqb();
                if (this.ncf) {
                    this.parent.tud.jfc("hold")
                } else {
                    this.parent.tud.jfc("unhold")
                }
                return true
            }
        }
        return false
    };
    this.szw = function() {};
    this.zls = function() {};
    this.gjg = function() {};
    this.umq = function(a) {
        this.csv = a
    };
    this.ijh = function() {
        return this.csv
    };
    this.ylq = function(a) {
        if (this.fil == null) {
            try {
                this.fil = a.getImageData(this.x, this.y, this.width, this.height)
            } catch (b) {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
                this.fil = a.getImageData(this.x, this.y, this.width, this.height)
            }
        }
    };
    this.eqb = function() {
        this.ncf = !this.ncf;
        if (this.ncf) {
            this.pav = this.parent.language.kub;
            this.eqn = this.aat
        }
        this.isl()
    };
    this.kii = function(d, e) {
        var a = 0
            , c = false;
        if (d == this.parent.ixg) {
            this.sos = d;
            c = true
        } else {
            if ((a = this.parent.dfy.length) > 0) {
                for (var b = 0; b < a && !c; b++) {
                    if (d == this.parent.dfy[b]) {
                        this.sos = this.parent.tqs[b];
                        c = true
                    }
                }
            }
        }
        if (!c) {
            this.sos = d
        }
        if (e && e === true) {
            this.isl()
        }
    };
    this.lux = function(a, b) {
        this.ncf = a;
        if (this.ncf) {
            this.pav = this.parent.language.kub;
            this.eqn = this.aat
        }
        if (b && b === true) {
            this.isl()
        }
    };
    this.sso = function() {
        return this.ncf
    };
    this.msu = function(a, b) {
        this.mcu = a;
        if (this.mcu) {
            this.pav = this.parent.language.win;
            this.eqn = this.dxd
        }
        if (b && b === true) {
            this.isl()
        }
    };
    this.dca = function() {
        return this.mcu
    };
    this.rou = function(c, b, a, d) {
        this.tmw = c;
        this.pav = b;
        if (a) {
            this.eqn = a
        }
        if (d && d === true) {
            this.isl()
        }
    };
    this.dhv = function() {
        return this.tmw
    };
    this.isl = function() {
        if (!this.zeb() || !this.parent.tgx()) {
            return
        }
        var a = this.context2D
            , b = null;
        a.save();
        a.beginPath();
        a.rect(this.x, this.y, this.width, this.height);
        a.closePath();
        a.clip();
        if (this.fil != null) {
            a.putImageData(this.fil, this.x, this.y)
        }
        if (this.ivz != null) {
            if (this.ncf || this.mcu) {
                if (this.yqj) {
                    a.drawImage(this.ivz, this.vsm[this.sos] * this.nns, 0, this.nns, this.bhn, this.x, this.y + this.kle, this.nns, this.bhn)
                } else {
                    a.drawImage(this.ivz, this.vsm[this.sos] * this.nns, 0, this.nns, this.bhn, this.x, this.y, this.nns, this.bhn)
                }
            } else {
                a.drawImage(this.ivz, this.vsm[this.sos] * this.nns, 0, this.nns, this.bhn, this.x, this.y + this.eym, this.nns, this.bhn)
            }
        }
        if (this.ncf || this.mcu || this.tmw) {
            b = this.pav
        }
        if (b != null) {
            if (this.yqj) {
                vit.gtm.xwp(a, b, this.eqn, this.x, this.y, this.width, this.kle, this.dpv, this.qyx, this.yjy)
            } else {
                vit.gtm.xwp(a, b, this.eqn, this.x, this.y + this.bhn, this.width, this.kle, this.dpv, this.qyx, this.yjy)
            }
        }
        a.restore()
    }
}
duk.prototype = new pzb;
vit.gfz = {
    pcv: {
        frr: 0
        , rnz: 1
        , gzt: 2
        , isc: 3
        , cdl: 4
        , tso: 5
        , dye: 6
        , hrf: 7
        , hpm: 8
        , raz: 9
        , uzg: 10
        , fyl: 11
        , txm: 12
        , ozw: 13
        , gxe: 14
        , reh: 15
        , tiu: 68
    }
};

function uww() {
    this.swe = false;
    this.kwc = null;
    this.lhb = null;
    this.ibt = null;
    this.yow = null;
    this.kax = null;
    this.wwk = [];
    this.qjd = null;
    this.ird = null;
    this.win = 0;
    this.wmb = 0;
    this.ykg = 0;
    this.totalBet = 1000;
    this.hpx = [];
    this.xqb = 0;
    this.taj = 0;
    this.qqk = 0;
    this.vom = [];
    this.cjd = [];
    this.vsm = [];
    this.ixg = 63;
    this.pmo = -1;
    this.zia = -1;
    this.kqx = [];
    this.ufj = [];
    this.wwr = 0;
    this.syu = null;
    this.jqp = null;
    this.bzt = null;
    this.qtr = null;
    this.tyx = null;
    this.ili = false;
    this.wqw = false;
    this.axm = false;
    this.qwe = false;
    this.zzx = false;
    this.bzg = true;
    this.mye = false;
    this.mot = 1;
    this.ibl = 0;
    this.aul = 150;
    this.nct = 150;
    this.tzb = 200;
    this.omn = 120;
    this.sps = 0;
    this.dfy = [];
    this.tqs = [];
    this.knd = true;
    this.ngp = true;
    this.muk = false;
    this.uca = 0;
    this.qfs = 0;
    this.pfa = 50;
    this.hir = 100;
    this.ygp = false;
    this.sok = 0;
    this.fha = 0;
    this.vtx = false;
    this.itp = 0;
    this.kjx = 0;
    this.uie = 2;
    this.lot = 1;
    this.pso = false;
    this.rcs = 0;
    this.jtc = 0;
    this.tmq = false;
    this.hue = 0;
    this.wxq = 0;
    this.wmu = 0;
    this.sol = -1;
    this.rap = 0;
    this.gxu = 0;
    this.qxd = 0;
    this.ssv = true;
    this.ykf = false;
    this.aur = false;
    this.zwk = false;
    this.zhj = true;
    this.gbu = null;
    this.wcu = false;
    this.tfq = true;
    this.qtp = "";
    this.qft = 0;
    this.yyv = 0;
    this.ayb = 0;
    this.mht = 0;
    this.lze = function() {
        var a = new rtt();
        a.zij();
        return a
    };
    this.mqd = function() {
        this.ulp = new mkz()
    };
    this.oab = function() {
        while (this.ykg < this.lfy()) {
            this.ykg++
        }
        var b = this.ogu(this.tmq);
        if (this.ykg > b) {
            var a = (b < 0) ? 0 : b;
            this.ykg = a
        }
        this.totalBet = this.hpx[this.ykg];
        this.rno();
        this.kbt();
        this.cnt();
        this.ugp()
    };
    this.sfo = function() {
        this.uhy();
        this.rle();
        this.knq();
        this.rpv();
        if (this.vkm.ais) {
            this.mra()
        }
        if (this.vkm.cvx) {
            this.enf()
        }
        if (this.vkm.mgs) {
            this.jzr();
            if (!this.vkm.inc) {
                this.cbs()
            }
        }
        if (this.mwk) {
            this.ndk()
        } else {
            if (this.vkm.arx) {
                this.egw()
            }
            this.gfo();
            if (this.oza()) {
                this.ssf()
            }
            if (this.ynv() != null && !this.xyq()) {
                this.kuf(this.ynv())
            }
        }
        if (!(this.mwk && !this.yra)) {
            this.won();
            this.qcx()
        }
        if (this.vkm.inc) {
            this.yfh(this.ynv())
        }
        this.api()
    };
    this.gqv = function() {
        if (!this.xny) {
            if (this.ujb === false) {
                this.zym.style.marginTop = (-this.height / 2 + this.bvn()) + "px";
                this.zym.style.marginLeft = (-this.width / 2) + "px"
            } else {
                this.zym.style.left = "0px";
                this.zym.style.top = "0px";
                this.zym.style.marginTop = ((this.wrx - this.height) / 2 + this.bvn()) + "px";
                this.zym.style.marginLeft = ((this.ubn - this.width) / 2) + "px"
            }
            this.zym.style.width = (this.width > this.ubn) ? this.ubn + "px" : this.width + "px";
            this.zym.style.height = (this.height > this.wrx) ? this.wrx + "px" : this.height + "px";
            this.canvas.width = Math.round(this.width);
            this.canvas.height = Math.round(this.height);
            this.context2D = this.canvas.getContext("2d");
            if (this.qbn) {
                this.qbn.style.width = this.width + "px";
                this.qbn.style.height = this.height + "px"
            }
            this.offsetLeft = this.zym.offsetLeft;
            this.offsetTop = this.zym.offsetTop;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.xny = true
        }
    };
    this.api = function() {};
    this.jzr = function() {
        uww.prototype.jzr.call(this);
        var a = this.vxx.szb("topi");
        try {
            if (a) {
                if (vit.vjo.value57 === vit.ui.mwv || this.ynv() != null) {
                    a.dcz("language", this.tud.dra("icon_l"), sessionStorage.sessionValue1, [vit.language.EN, vit.language.DE, vit.language.RU, vit.language.EE, vit.language.ES, vit.language.TR, vit.language.CZ, vit.language.GR, vit.language.AT, vit.language.US, vit.language.BG, vit.language.CO, vit.language.MX, vit.language.CL, vit.language.VE, vit.language.BR, vit.language.GE, vit.language.HU, vit.language.RO, vit.language.PT, vit.language.FR, vit.language.HR, vit.language.IT, vit.language.SE])
                }
                if (this.xyq() === false) {
                    a.ivm("help", new String("?"), true)
                }
                if (vit.vjo.value27 && this.vww) {
                    a.dcz("audio", this.tud.dra("icon_a"), this.lsb[this.xdu], this.lsb)
                }
                if (sessionStorage.sessionValue14 == "true" && vit.gtm.lpp()) {
                    a.ivm("fullscreen", this.tud.dra("icon_f"), this.oga)
                }
                if (vit.vjo.value28 && this.ssv) {
                    a.ivm("turbo", this.tud.dra("icon_t"), this.ykf)
                }
                a.ivm("auto", this.tud.dra("icon_as"), this.mye);
                a.ivm("gamble", this.tud.dra("icon_g"), this.wqw)
            }
        } catch (b) {
            console.error(b)
        }
    };
    this.cbs = function() {
        uww.prototype.cbs.call(this);
        var b = this.vxx.szb("topb");
        try {
            if (b) {
                if (vit.vjo.value5.length > 1 && (vit.vjo.value57 === vit.ui.mwv || this.ynv() != null)) {
                    b.hcw("language", this.language.language, this.pfq(vit.vjo.value5[this.jhf]), this.prq, this.ulp.language, 0, 1)
                }
                if (vit.vjo.value27 && this.vww) {
                    b.hcw("audio", this.language.audio, this.tud.dra("btn_a"), this.qab, this.ulp.audio, this.xdu, this.lsb.length)
                }
                if (sessionStorage.sessionValue14 == "true" && vit.gtm.lpp()) {
                    b.hcw("fullscreen", this.language.oga, this.tud.dra("btn_f"), (vit.gtm.xcn) ? this.kvk : this.rzw, this.ulp.oga, (this.oga) ? 1 : 0, 2)
                }
                if (vit.vjo.value28 && this.ssv) {
                    b.hcw("turbo", this.language.ykf, this.tud.dra("btn_t"), this.njl, this.ulp.ykf, (this.ykf) ? 1 : 0, 2)
                }
                b.ltg("help", this.language.uud, this.tud.dra("btn_p"), this.zfd, this.ulp.cce);
                if (vit.vjo.value12 && !this.zmf()) {
                    b.ltg("history", this.language.dwr, this.tud.dra("btn_h"), this.jia, this.ulp.dwr)
                }
                if (vit.vjo.value36 && !this.zmf()) {
                    b.ltg("statistic", this.language.hgr, this.tud.dra("btn_st"), this.ogs, this.ulp.hgr)
                }
                b.ztk()
            }
        } catch (a) {
            console.error(a)
        }
    };
    this.yfh = function(a) {
        uww.prototype.yfh.call(this, a);
        var b = this.vxx.szb("settings")
            , c = "";
        if (b) {
            b.hcw("language", this.language.language, this.pfq(vit.vjo.value5[this.jhf]), this.prq, 0, 1);
            if (vit.vjo.value27 && this.vww) {
                b.hcw("audio", this.language.audio, this.tud.dra("btn_a"), this.qab, this.xdu, this.lsb.length)
            }
            if (sessionStorage.sessionValue14 == "true" && vit.gtm.lpp()) {
                b.hcw("fullscreen", this.language.oga, this.tud.dra("btn_f"), this.kvk, (this.oga) ? 1 : 0, 2)
            }
            if (vit.vjo.value28 && this.ssv) {
                b.hcw("turbo", this.language.ykf, this.tud.dra("btn_t"), this.njl, (this.ykf) ? 1 : 0, 2)
            }
            b.hcw("gamble", this.language.wqw, this.tud.dra("btn_g"), this.trs, (this.wqw) ? 1 : 0, 2);
            if (this.yzk[this.trp] === vit.zop.cib) {
                c = this.language.left
            } else {
                if (this.yzk[this.trp] === vit.zop.odl) {
                    c = this.language.gom
                } else {
                    if (this.yzk[this.trp] === vit.zop.bac) {
                        c = this.language.nxc
                    }
                }
            }
            b.hcw("adjustment", c, this.tud.dra("btn_l"), this.koa, (this.nof === vit.gtm.zav) ? 0 : 1, 2);
            b.sxx("help", this.language.dxp, this.tud.dra("btn_p"), this.zfd);
            if (vit.vjo.value12 && !this.zmf()) {
                b.sxx("history", this.language.dwr, this.tud.dra("btn_h"), this.jia)
            }
            if (vit.vjo.value36 && !this.zmf()) {
                b.sxx("statistic", this.language.hgr, this.tud.dra("btn_st"), this.ogs)
            }
            b.ktm = false;
            b.ewp(this.vkm.frl);
            b.zxd(this.vkm.frl);
            b.yek(this.style.frl);
            b.btw(this.language, false)
        }
    };
    this.uhy = function() {
        this.qjd = new odu();
        this.qjd.parent = this;
        this.qjd.tfq = this.tfq;
        this.qjd.mxa = this.tud.dra("control_back");
        this.qjd.zij(this.vkm.ney.yhm, null, this.context2D);
        this.qjd.ewp(this.vkm.ney, this.style.ney);
        this.qjd.zae(this.syu, 0);
        this.qjd.zae(this.bzt, 1);
        this.qjd.zae(this.jqp, 2)
    };
    this.enf = function() {
        var a = new sig();
        a.zij(this.vkm.nbk.yhm, null, this.context2D);
        a.parent = this;
        a.itb = this.language.llk;
        a.vve = this.cie;
        a.xta = this.ulp.vys.vql;
        a.gdn = this.ulp.waa.vql;
        a.bga = this.tud.dra("effect");
        a.zxd(this.vkm.nbk);
        a.yek(this.style.wfi);
        a.oab(this.hpx, this.lfy(), this.ogu(false));
        a.vuo(this.ykg, false);
        a.ief(false);
        this.vxx.eiu("betsel", a)
    };
    this.qcx = function() {
        this.ird.qyf(this.vkm.cce, this.style.cce, this.tud.dra("btn_s"))
    };
    this.egw = function() {
        var a = new bjo();
        a.zij(this.vkm.top.yhm, null, this.context2D);
        a.parent = this;
        this.vxx.eiu("tops", a)
    };
    this.rle = function() {
        this.kwc = new duk();
        this.lhb = new duk();
        this.ibt = new duk();
        this.yow = new duk();
        this.kax = new duk();
        this.kwc.zij(this.vkm.axb, this.context2D);
        this.lhb.zij(this.vkm.cvj, this.context2D);
        this.ibt.zij(this.vkm.ndi, this.context2D);
        this.yow.zij(this.vkm.rze, this.context2D);
        this.kax.zij(this.vkm.wnf, this.context2D);
        this.wwk = [this.kwc, this.lhb, this.ibt, this.yow, this.kax];
        for (var b = 0, a = this.wwk.length; b < a; b++) {
            this.wwk[b].parent = this;
            this.wwk[b].ivz = this.tud.dra("cards");
            this.wwk[b].vsm = this.vsm;
            this.wwk[b].kii(this.ixg);
            this.wwk[b].yek(this.style.rds);
            this.wwk[b].zxd(this.vkm.rds)
        }
    };
    this.won = function() {
        this.ird = new xbo();
        this.ird.zij(this.vkm.cce.yhm, null, this.context2D);
        this.ird.parent = this;
        this.ird.faa(false);
        this.ird.zxd(this.vkm.cce);
        this.ird.yek(this.style.cce)
    };
    this.knq = function() {
        var a = new ngi();
        a.zij(this.vkm.uud.yhm, null, this.context2D);
        a.parent = this;
        a.ivz = this.tud.dra("paytable");
        a.zxd(this.vkm.uud);
        a.yek(this.style.uud);
        a.kot(this.vom);
        a.uar(this.cjd);
        this.vxx.eiu("paytable", a)
    };
    this.rpv = function() {};
    this.mra = function() {
        var a = new ber();
        a.zij(this.vkm.bdh.yhm, this.context2D, null, this.tud.dra("winpanel"), "");
        a.parent = this;
        a.zxd(this.vkm.bdh);
        a.yek(this.style.bdh);
        a.ief(false);
        this.vxx.eiu("winp", a)
    };
    this.ndk = function() {
        var a = new hax();
        a.zij(this.vkm.dwr.yhm, null, this.context2D);
        a.parent = this;
        a.ewp(this.vkm.dwr);
        a.yek(this.style.dwr);
        this.vxx.eiu("history", a)
    };
    this.iac = function(d, b, c, a, e) {
        this.wxa = true;
        this.state = d;
        this.lyz = b;
        this.mir = e;
        this.kgw = a;
        clearInterval(this.qlx);
        if (this.vww) {
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                this.xdu = 0
            }
            if (this.tud.pkk === true) {
                this.fnc(this.lsb[this.xdu])
            } else {
                this.otw((this.lsb[this.xdu] === 0))
            }
        }
        if (this.uil === true) {
            this.tij = true
        }
        this.oab();
        this.sfo();
        this.vny();
        this.dvn();
        this.qtr.wwi(c, a);
        window.gan(this.rag)
    };
    this.rag = function() {
        vit.iyt.nbw(vit.iyt.lyz);
        vit.iyt.jdy = true;
        vit.iyt.ejj();
        vit.iyt.isl();
        if (vit.iyt.uil === true) {
            vit.iyt.hvv(true)
        }
        if (vit.gtm.wan === vit.os.ref && vit.gtm.grh !== vit.yly.gbr) {
            vit.iyt.fto([{
                vri: vit.gba.jrg
            }])
        } else {
            vit.iyt.ppb(vit.iyt.state)
        }
        vit.iyt.btw();
        if (vit.vjo.value37 && !vit.iyt.zmf()) {
            vit.iyt.ocd()
        }
    };
    this.cle = function() {
        this.uhc = new lru().zij(this, vit.vjo.value6)
    };
    this.qlg = function() {
        this.uhc = new omr().zij(this, vit.vjo.value6)
    };
    this.kng = function(c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.tij) {
            return
        }
        var o = 0
            , n = 0
            , d = false
            , p = false
            , k = false
            , b = this.vxx.szb("stats")
            , q = this.vxx.szb("topb")
            , m = this.vxx.szb("topi")
            , a = this.vxx.szb("betsel")
            , l = this.vxx.szb("autop")
            , e = this.vxx.szb("settings");
        if (c.touches) {
            var g = c.touches[0];
            d = true;
            if (!this.qlm) {
                o = g.pageX - this.offsetLeft;
                n = g.pageY - this.offsetTop
            } else {
                o = Math.round((g.pageX - this.offsetLeft) / this.kqu);
                n = Math.round((g.pageY - this.offsetTop) / this.vav)
            }
        } else {
            if (c.which != 1) {
                return
            }
            if (!this.qlm) {
                o = c.pageX - this.offsetLeft;
                n = c.pageY - this.offsetTop
            } else {
                o = Math.round((c.pageX - this.offsetLeft) / this.kqu);
                n = Math.round((c.pageY - this.offsetTop) / this.vav)
            }
        }
        if (l && l.zeb()) {
            if (l.kng(o, n)) {
                return
            }
        }
        if (q && q.zeb()) {
            if (q.kng(o, n)) {
                clearTimeout(this.qxd);
                return
            } else {
                k = true
            }
        }
        if (a) {
            if (a.zeb()) {
                if (a.kng(o, n, d)) {
                    clearTimeout(this.qxd);
                    return
                } else {
                    p = true
                }
            }
        }
        if (k) {
            this.gzl(this.qjd.ovk(o, n, null));
            return
        } else {
            if (p) {
                if (a && a.ijh()) {
                    this.llc(this.qjd.ovk(o, n, null))
                }
                return
            }
        }
        if (e && e.zeb()) {
            if (e.kng(o, n)) {
                return
            }
        }
        if (m) {
            if (m.kng(o, n, d)) {
                return
            }
        }
        if (b && b.zeb()) {
            if (b.kng(o, n)) {
                return
            }
        }
        if (this.ird && this.ird.zeb()) {
            if (this.ird.kng(o, n)) {
                return
            }
        }
        if (this.qtr && this.qtr.zeb()) {
            if (this.qtr.kng(o, n)) {
                return
            }
        }
        if (this.qjd) {
            if (this.qjd.kng(o, n, p)) {
                return
            }
        }
        if (this.wwk) {
            for (var f = 0, j = this.wwk.length; f < j; f++) {
                if (this.wwk[f].kng(o, n)) {
                    return
                }
            }
        }
    };
    this.szw = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        if (this.tij) {
            return
        }
        var e = this.vxx.szb("topb")
            , b = this.vxx.szb("betsel")
            , a = this.vxx.szb("autop")
            , c = this.vxx.szb("settings");
        if (a && a.zeb()) {
            if (a.szw()) {
                return
            }
        }
        if (b) {
            if (b.szw()) {
                return
            }
        }
        if (this.ird && this.ird.zeb()) {
            if (this.ird.szw()) {
                return
            }
        }
        if (this.qtr && this.qtr.zeb()) {
            if (this.qtr.szw()) {
                return
            }
        }
        if (this.qjd) {
            if (this.qjd.szw()) {
                return
            }
        }
        if (e) {
            if (e.szw()) {
                return
            }
        }
        if (c) {
            if (c.szw()) {
                return
            }
        }
    };
    this.zls = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        if (this.tij) {
            return
        }
        var f = false
            , c = false
            , e = this.vxx.szb("topb")
            , b = this.vxx.szb("betsel")
            , a = this.vxx.szb("autop");
        if (a && a.zeb()) {
            if (a.zls(d.keyCode)) {
                return
            }
        }
        if (e) {
            if (e.zls(d.keyCode)) {
                clearTimeout(this.qxd);
                return
            } else {
                if (e.zeb() && e.ijh()) {
                    c = true
                }
            }
        }
        if (b) {
            if (b.zeb()) {
                if (b.zls(d.keyCode)) {
                    clearTimeout(this.qxd);
                    return
                } else {
                    f = true
                }
            }
        }
        if (c) {
            this.gzl(this.qjd.ovk(null, null, d.keyCode));
            return
        } else {
            if (f) {
                if (b && b.ijh()) {
                    this.llc(this.qjd.ovk(null, null, d.keyCode))
                }
                return
            }
        }
        if (this.ird && this.ird.zeb()) {
            if (this.ird.zls(d.keyCode)) {
                return
            }
        }
        if (this.qtr && this.qtr.zeb()) {
            if (this.qtr.zls(d.keyCode)) {
                return
            }
        }
        if (this.qjd) {
            if (this.qjd.zls(d.keyCode)) {
                return
            }
        }
    };
    this.gjg = function(b) {
        if (b.preventDefault) {
            b.preventDefault()
        }
        if (b.stopPropagation) {
            b.stopPropagation()
        }
        if (this.tij) {
            return
        }
        var a = this.vxx.szb("autop")
            , c = this.vxx.szb("topb");
        if (a && a.zeb()) {
            if (a.gjg()) {
                return
            }
        }
        if (this.ird && this.ird.zeb()) {
            if (this.ird.gjg()) {
                return
            }
        }
        if (this.qtr && this.qtr.zeb()) {
            if (this.qtr.gjg()) {
                return
            }
        }
        if (this.qjd) {
            if (this.qjd.gjg()) {
                return
            }
        }
        if (c) {
            if (c.gjg()) {
                return
            }
        }
    };
    this.xyq = function() {
        return (vit.gtm.yeu() && !this.mwk)
    };
    this.wyf = function() {
        return (vit.gtm.yeu() && !this.yra)
    };
    this.tzy = function(a) {
        this.vkm = this.pje(a);
        this.width = this.vkm.canvas.yhm.width;
        this.height = this.vkm.canvas.yhm.height;
        this.vci()
    };
    this.jii = function() {
        this.style = new aoi()
    };
    this.pje = function(a) {
        this.nof = a;
        if (a == vit.vkm.duh) {
            return new cfc()
        } else {
            if (a == vit.vkm.udd) {
                return new ryj()
            } else {
                if (a == vit.vkm.qog) {
                    return new bng()
                } else {
                    if (a == vit.vkm.rgo) {
                        return new cyj()
                    } else {
                        if (a == vit.vkm.vpj) {
                            return new mgu()
                        } else {
                            if (a == vit.vkm.ywj) {
                                return new jya()
                            } else {
                                if (a == vit.vkm.oxs) {
                                    return new qua()
                                } else {
                                    if (a == vit.vkm.ppq) {
                                        return new pfk()
                                    } else {
                                        if (a == vit.vkm.gtp) {
                                            return new dhb()
                                        } else {
                                            if (a == vit.vkm.hws) {
                                                return new esd()
                                            } else {
                                                if (a == vit.vkm.yvt) {
                                                    return new fth()
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
    this.vci = function() {};
    this.drv = function(a) {
        if (this.xny) {
            this.rhe();
            this.sia(a)
        } else {
            this.pee()
        }
    };
    this.rhe = function() {
        this.canvas.width = 0;
        if (this.ujb === false) {
            this.zym.style.marginTop = (-this.height / 2 + this.bvn()) + "px";
            this.zym.style.marginLeft = (-this.width / 2) + "px"
        } else {
            this.zym.style.left = "0px";
            this.zym.style.top = "0px";
            this.zym.style.marginTop = ((this.wrx - this.height) / 2 + this.bvn()) + "px";
            this.zym.style.marginLeft = ((this.ubn - this.width) / 2) + "px"
        }
        this.zym.style.width = (this.width > this.ubn) ? this.ubn + "px" : this.width + "px";
        this.zym.style.height = (this.height > this.wrx) ? this.wrx + "px" : this.height + "px";
        this.canvas.width = Math.round(this.width);
        this.canvas.height = Math.round(this.height);
        if (this.qbn) {
            this.qbn.style.width = this.width + "px";
            this.qbn.style.height = this.height + "px"
        }
        this.width = this.canvas.width;
        this.height = this.canvas.height
    };
    this.sia = function(a) {
        this.ctd();
        this.voc();
        this.vwg();
        this.ovt();
        if (!(this.mwk && !this.yra)) {
            this.jup()
        }
        if (!this.mwk) {
            if (this.vkm.arx) {
                if (this.vxx.szb("tops")) {
                    this.jlf()
                } else {
                    this.egw()
                }
            } else {
                this.vxx.gxo("tops")
            }
            this.osa();
            this.oke();
            if (this.oza()) {
                this.ehl()
            }
        } else {
            this.ndk()
        }
        if (this.vkm.ais) {
            this.cku()
        }
        if (this.vkm.cvx) {
            this.ves()
        }
        if (this.vkm.mgs) {
            this.bfi();
            if (!this.vkm.inc) {
                this.qqz()
            }
        }
        if (this.vkm.inc) {
            this.hys()
        }
        this.jxq();
        if (a) {
            this.mgf()
        }
    };
    this.ctd = function() {
        if (this.qjd) {
            this.qjd.giu(this.vkm.ney.yhm);
            this.qjd.zxd(this.vkm.ney)
        }
    };
    this.qqz = function() {
        uww.prototype.qqz.call(this);
        var b = this.vxx.szb("topb");
        if (b) {
            if (this.zhj) {
                var a = b.iye.szb("help");
                if (a) {
                    a.umq(!this.vkm.arx)
                }
            }
        }
    };
    this.ves = function() {
        var a = this.vxx.szb("betsel");
        if (a) {
            a.giu(this.vkm.nbk.yhm);
            a.zxd(this.vkm.nbk)
        }
    };
    this.voc = function() {
        if (this.kwc) {
            this.kwc.giu(this.vkm.axb)
        }
        if (this.lhb) {
            this.lhb.giu(this.vkm.cvj)
        }
        if (this.ibt) {
            this.ibt.giu(this.vkm.ndi)
        }
        if (this.yow) {
            this.yow.giu(this.vkm.rze)
        }
        if (this.kax) {
            this.kax.giu(this.vkm.wnf)
        }
        for (var b = 0, a = this.wwk.length; b < a; b++) {
            this.wwk[b].zxd(this.vkm.rds)
        }
    };
    this.cku = function() {
        var a = this.vxx.szb("winp");
        if (a) {
            a.giu(this.vkm.bdh.yhm);
            a.zxd(this.vkm.bdh)
        }
    };
    this.jup = function() {
        if (this.ird) {
            this.ird.giu(this.vkm.cce.yhm);
            this.ird.zxd(this.vkm.cce)
        }
    };
    this.jlf = function() {
        var a = this.vxx.szb("tops");
        if (a) {
            a.giu(this.vkm.top.yhm);
            a.ief(this.vkm.arx)
        }
    };
    this.vwg = function() {
        var a = this.vxx.szb("paytable");
        if (a) {
            a.giu(this.vkm.uud.yhm);
            a.zxd(this.vkm.uud)
        }
    };
    this.ovt = function() {};
    this.jxq = function() {};
    this.mgf = function() {
        if (this.vxx.szb("tops")) {
            this.ird.bbe(true);
            this.cph();
            if (this.ird.ybf() == 0) {
                this.hsm()
            }
        } else {
            this.xei = null;
            this.ird.iqi(this.vkr, true)
        }
        this.ird.sxa()
    };
    this.rno = function() {
        this.syu = [];
        if (this.zmf() === false && this.qtp != "") {
            this.syu.push(this.qtp)
        }
        this.syu.push(this.language.nsp);
        this.syu.push(this.language.bbb + " " + this.lmh(this.uwd()) + ((this.xyq() === true) ? "|" : " ") + this.language.kct + " " + this.lmh(this.bfk()));
        this.syu.push(this.language.wyg)
    };
    this.kbt = function() {
        this.jqp = [];
        this.jqp[0] = this.language.wlb;
        this.jqp[1] = this.language.qwz
    };
    this.cnt = function() {
        this.bzt = [];
        this.bzt[0] = this.language.kcy;
        this.bzt[1] = this.language.dco
    };
    this.ugp = function() {
        this.tyx = [];
        this.tyx[0] = this.language.rev
    };
    this.wum = function() {
        uww.prototype.wum.call(this);
        if (this.pya() === true) {
            this.tud.uqe(true);
            this.tud.yhs(vit.vjo.value45 === vit.pmz.chb || vit.vjo.value45 === vit.pmz.vzw)
        }
    };
    this.pmp = function() {
        var b = vit.vjo.value30 + "/poker/sounds/";
        this.tud.ony("collect", null, false, b + "collect");
        this.tud.ony("collectend", null, false, b + "collect1");
        b = vit.vjo.value30 + "/basic/sounds/";
        if (!vit.vjo.value55) {
            if (this.xyq() === false) {
                this.tud.ony("btn", null, false, b + "btn");
                this.tud.ony("auto_on", null, false, b + "auto_on");
                this.tud.ony("gamble_on", null, false, b + "gamble_on");
                this.tud.ony("gamble_off", null, false, b + "gamble_off");
                this.tud.ony("gambleprop", null, true, b + "gambleprop");
                this.tud.ony("auto_off", null, false, b + "auto_off");
                for (var a = 0; a < 12; a++) {
                    this.tud.ony("step" + a, null, false, b + "step" + (a + 1))
                }
                this.tud.ony("maxstep", null, false, b + "maxstep")
            } else {
                this.tud.ony("btn", null, false, b + "btn2");
                this.tud.ony("auto_fill", null, false, b + "auto_fill")
            }
        } else {
            this.tud.ony("btn", null, false, b + "ama_btn");
            if (this.xyq() === false) {
                this.tud.ony("gamble_on", null, false, b + "ama_gamble_on");
                this.tud.ony("gamble_off", null, false, b + "ama_gamble_off");
                this.tud.ony("gambleprop", null, true, b + "ama_gambleprop");
                for (var a = 0; a < 12; a++) {
                    this.tud.ony("step" + a, null, false, b + "ama_step")
                }
                this.tud.ony("maxstep", null, false, b + "ama_step")
            }
        }
        this.tud.ony("silence", null, false, b + "silence");
        this.tud.ony("audioon", null, false, b + "audio_on");
        if (this.xyq() === false) {
            this.tud.ony("panel_in", null, false, b + "panel_in");
            this.tud.ony("panel_out", null, false, b + "panel_out")
        }
        this.tnu();
        this.zmz()
    };
    this.zmz = function() {
        var b = vit.vjo.value30 + "/poker/sounds/";
        this.tud.ony("hold", null, false, b + "hold");
        this.tud.ony("unhold", null, false, b + "unhold");
        for (var a = 0; a < 5; a++) {
            this.tud.ony("deal" + a, null, false, b + "deal2")
        }
    };
    this.tnu = function() {
        for (var a = 0; a < this.kjx; a++) {
            this.tud.ony("win" + a, this.zch, false, this.szl + "win" + (a + 1))
        }
    };
    this.pdb = function() {
        var a = this.awr + this.vkm.type + "/";
        this.tud.yoq("icon", a + "icon_out.png");
        this.tud.yoq("back", a + "main.jpg");
        this.tud.yoq("cards", a + "cardDeck.png");
        this.tud.yoq("winpanel", a + "winPanel.png");
        this.tud.yoq("help", a + "help.jpg");
        if (this.pya() === true && (vit.vjo.value45 === vit.pmz.chb || vit.vjo.value45 === vit.pmz.vzw)) {
            this.tud.yoq("device_info", a + "info_" + ((this.xyq() === true) ? "smartphone.png" : "tablet.png"))
        }
        a = vit.vjo.value30 + "/basic/images/" + this.vkm.type + "/";
        if (this.vkm.osy === true) {
            this.tud.yoq("btn_back", a + "buttonback.png")
        }
        a = vit.vjo.value30 + "/poker/images/" + this.vkm.type + "/";
        if (this.xyq() === true) {
            this.tud.pze(a, "gui_mobile_v15.json")
        } else {
            if (vit.vjo.value57 === vit.ui.mwv || this.ynv() != null) {
                this.tud.pze(a, "gui_desktop_v25.json")
            } else {
                this.tud.pze(a, "gui_desktop_v15.json")
            }
        }
        this.ybo()
    };
    this.ybo = function() {
        var a = this.awr + this.vkm.type + "/";
        this.tud.yoq("g_back", a + "gamble.jpg")
    };
    this.sjh = function() {
        if (this.axm && !this.muk) {
            this.pqf(this.qqk - this.win - this.wmb, true)
        } else {
            this.pqf(this.qqk, true)
        }
        this.sxo(this.totalBet, true);
        this.hsj();
        this.vxx.nxn("tops", "#isl");
        this.vxx.nxn("settings", "#sfm", [0, 0, this.lmh(this.jxl())]);
        this.isl()
    };
    this.isl = function(l, k, m, s) {
        if (vit.iyt.tgx()) {
            var a = (l != null && k != null && m != null && s != null)
                , c = (a === true) ? new qlq(l, k, m, s) : new qlq(vit.iyt.vkm.iyt.yhm.x, vit.iyt.vkm.iyt.yhm.y, vit.iyt.vkm.iyt.yhm.width, vit.iyt.vkm.iyt.yhm.height)
                , p = vit.iyt.context2D
                , e = (vit.iyt.yra === true) ? vit.iyt.style.iyt.efk : vit.iyt.style.iyt.backgroundColor
                , v = vit.iyt.vxx.szb("stats")
                , b = vit.iyt.vxx.szb("history")
                , t = vit.iyt.vxx.szb("topb")
                , f = vit.iyt.vxx.szb("topi")
                , g = vit.iyt.vxx.szb("betsel")
                , u = vit.iyt.vxx.szb("paytable")
                , o = vit.iyt.vxx.szb("tops")
                , j = vit.iyt.vxx.szb("winp")
                , n = vit.iyt.vxx.szb("autop")
                , d = vit.iyt.vxx.szb("settings");
            vit.iyt.zzx = false;
            p.save();
            if (a) {
                p.beginPath();
                p.rect(l, k, m, s);
                p.closePath();
                p.clip()
            }
            p.clearRect(0, 0, vit.iyt.width, vit.iyt.height);
            p.restore();
            if (vit.iyt.vkm.wab) {
                vit.gtm.ami(p, vit.iyt.vkm.iyt.yhm.x - vit.iyt.vkm.iyt.zqj, vit.iyt.vkm.iyt.yhm.y - vit.iyt.vkm.iyt.zqj, vit.iyt.vkm.iyt.yhm.width + 2 * vit.iyt.vkm.iyt.zqj, vit.iyt.vkm.iyt.yhm.height + 2 * vit.iyt.vkm.iyt.zqj, e, 1)
            }
            if (b) {
                b.isl()
            }
            if (f) {
                f.isl()
            }
            if (o && o.zeb()) {
                o.isl()
            }
            if (v && v.zeb()) {
                v.isl()
            } else {
                if (vit.iyt.ird != null && vit.iyt.ird.zeb()) {
                    vit.iyt.ird.isl()
                } else {
                    if (vit.iyt.qtr != null && vit.iyt.qtr.zeb()) {
                        vit.iyt.qtr.isl()
                    } else {
                        p.drawImage(vit.iyt.tud.dra("back"), vit.iyt.vkm.iyt.yhm.x, vit.iyt.vkm.iyt.yhm.y);
                        if (vit.iyt.qjd) {
                            vit.iyt.qjd.isl()
                        }
                        for (var q = 0, r = vit.iyt.wwk.length; q < r; q++) {
                            vit.iyt.wwk[q].ylq(p);
                            vit.iyt.wwk[q].isl()
                        }
                        if (j) {
                            j.isl()
                        }
                        if (u) {
                            u.isl()
                        }
                    }
                }
            }
            if (g) {
                g.isl()
            }
            if (t) {
                t.isl()
            }
            if (n) {
                n.isl()
            }
            if (d) {
                d.isl()
            }
        }
    };
    this.icd = function(a, b) {
        this.zzx = true;
        vit.gtm.ami(a, b.x, b.y, b.width, b.height, "black", 0.5)
    };
    this.vap = function() {
        this.jae();
        if (this.state == vit.gfz.pcv.cdl && this.pmo > 0) {
            this.tud.qic("win" + (this.pmo - 1))
        }
        this.qjd.iye.nxn("info", "#bmy");
        this.aqo(false);
        this.qjd.ahn(false);
        this.tvz(false);
        this.ird.lyq();
        this.ird.ahn(true);
        this.vxx.nxn("settings", "#duw");
        this.qjd.iye.nxn("setting", "#thf", [this.vxx.nxn("settings", "#zeb")])
    };
    this.hsm = function() {
        this.ird.ahn(false);
        if (this.state != vit.gfz.pcv.gzt && this.state != vit.gfz.pcv.fyl) {
            this.qjd.ahn(true)
        } else {
            this.qjd.qxb(true)
        }
        this.aqo(true);
        this.tvz(true);
        this.ird.duw();
        this.qjd.iye.nxn("info", "#rih", [0])
    };
    this.hmx = function() {
        var a = vit.iyt.qjd.iye.szb("gamble");
        vit.iyt.kos();
        vit.iyt.bkg();
        if (a) {
            a.vrd();
            a.thf(vit.iyt.wqw)
        }
        vit.iyt.jae();
        vit.iyt.tud.qic("win" + (vit.iyt.pmo - 1));
        vit.iyt.qjd.iye.nxn("info", "#bmy");
        vit.iyt.qjd.ahn(false);
        vit.iyt.tvz(false);
        vit.iyt.qtr.ahn(true);
        vit.iyt.qtr.qcz(vit.iyt.qqk, vit.iyt.win + vit.iyt.wmb, vit.iyt.pmo, false);
        vit.iyt.qtr.lyq(!vit.iyt.mye)
    };
    this.fid = function() {
        vit.iyt.toq();
        vit.iyt.qtr.kwu();
        vit.iyt.tvz(true);
        vit.iyt.qtr.ahn(false);
        vit.iyt.qtr.ief(false, true);
        vit.iyt.qjd.iye.nxn("start", "#xqa", [vit.iyt.language.start, true]);
        vit.iyt.muk = true;
        if (vit.iyt.mye) {
            vit.iyt.qjd.hyz(true);
            vit.iyt.gxu = setTimeout(vit.iyt.zll, 800)
        } else {
            vit.iyt.qjd.ahn(true);
            if (!(vit.iyt.mye || vit.iyt.axm)) {
                vit.iyt.aqo(true)
            }
            vit.iyt.qjd.iye.nxn("info", "#rih", [0])
        }
    };
    this.jrk = function() {
        var a = this.vxx.szb("tops");
        if (a) {
            a.vuo(0);
            this.isl()
        }
    };
    this.sgk = function() {
        this.cpx();
        this.sjh();
        this.bkg();
        this.aqo(false);
        this.bdw(false);
        this.vxx.nxn("winp", "#ief", [false]);
        this.vxx.nxn("paytable", "#ief", [true]);
        this.ptf()
    };
    this.jlh = function() {
        this.tzj();
        if (this.uie == this.lot) {
            this.sjh()
        }
        this.aqo(false);
        this.bdw(false);
        this.ptf()
    };
    this.ugk = function() {
        this.afv();
        if (this.uie >= 2 && this.lot == 2) {
            this.sjh()
        }
        this.aqo(false);
        this.bdw(false);
        this.ptf()
    };
    this.dgm = function() {
        var a = vit.iyt.aul
            , b = 0;
        if (vit.iyt.jtc == 0) {
            vit.iyt.ibl = new Date().getTime()
        } else {
            b = new Date().getTime();
            a = vit.iyt.aul + (vit.iyt.sps * vit.iyt.aul - (b - vit.iyt.ibl))
        }
        if (!vit.iyt.wwk[vit.iyt.jtc].sso()) {
            vit.iyt.sps += 1;
            vit.iyt.tud.jfc("deal" + (vit.iyt.sps - 1));
            vit.iyt.wwk[vit.iyt.jtc].kii(vit.iyt.kqx[vit.iyt.jtc], true)
        } else {
            a = 0
        }
        vit.iyt.jtc++;
        if (a <= 0) {
            a = 0
        }
        if (vit.iyt.jtc < vit.iyt.kqx.length) {
            if (a == 0) {
                vit.iyt.dgm()
            } else {
                vit.iyt.wxq = setTimeout(vit.iyt.dgm, a)
            }
        } else {
            vit.iyt.wxq = setTimeout(vit.iyt.ukd, vit.iyt.aul)
        }
    };
    this.eps = function() {
        var a = 40
            , b = a
            , c = 0;
        if (vit.iyt.jtc == 0) {
            vit.iyt.ibl = new Date().getTime()
        } else {
            c = new Date().getTime();
            b = a + (vit.iyt.sps * a - (c - vit.iyt.ibl))
        }
        if (!vit.iyt.wwk[vit.iyt.jtc].sso()) {
            vit.iyt.sps += 1;
            vit.iyt.wwk[vit.iyt.jtc].kii(vit.iyt.ixg, true)
        } else {
            b = 0
        }
        vit.iyt.jtc++;
        if (b <= 0) {
            b = 0
        }
        if (vit.iyt.jtc < vit.iyt.kqx.length) {
            if (b == 0) {
                vit.iyt.eps()
            } else {
                vit.iyt.wxq = setTimeout(vit.iyt.eps, b)
            }
        } else {
            vit.iyt.wxq = setTimeout(vit.iyt.nwn, 200)
        }
    };
    this.ptf = function() {
        this.swe = true;
        this.sps = 0;
        this.car();
        if (this.rcs == 1) {
            for (var b = 0, a = this.kqx.length; b < a; b++) {
                this.wwk[b].kii(this.ixg, false)
            }
            this.qjd.iye.nxn("info", "#ila", [this.language.igc, true]);
            this.isl();
            this.jtc = 0;
            this.wxq = setTimeout(this.dgm, 200)
        } else {
            this.qjd.iye.nxn("info", "#bmy");
            for (var b = 0, a = this.kqx.length; b < a; b++) {
                if (!this.wwk[b].sso()) {
                    this.wwk[b].kii(this.ixg, false)
                }
            }
            this.isl();
            this.wxq = setTimeout(this.xue, 200)
        }
    };
    this.xue = function() {
        if (vit.iyt.wwr > 0) {
            vit.iyt.jtc = 0;
            vit.iyt.dgm()
        } else {
            vit.iyt.ukd()
        }
    };
    this.nwn = function() {
        vit.iyt.sps = 0;
        for (var b = 0, a = vit.iyt.tud.enn("deal"); b < a; b++) {
            vit.iyt.tud.qic("deal" + b)
        }
        if (vit.iyt.rcs == 1) {
            vit.iyt.jtc = 0;
            vit.iyt.dgm()
        } else {
            if (vit.iyt.wwr > 0) {
                vit.iyt.jtc = 0;
                vit.iyt.dgm()
            } else {
                vit.iyt.ukd()
            }
        }
    };
    this.ukd = function() {
        vit.iyt.swe = false;
        vit.iyt.bzg = true;
        if (vit.iyt.gbh()) {
            if (vit.iyt.rcs == 1) {
                vit.iyt.xks()
            } else {
                if (vit.iyt.rcs == 2) {
                    vit.iyt.cys()
                }
            }
            vit.iyt.vem(true);
            vit.iyt.bdw(true);
            vit.iyt.qjd.iye.nxn("info", "#rih", [2]);
            if (vit.iyt.mye) {
                vit.iyt.qjd.ztl(true);
                vit.iyt.gxu = setTimeout(vit.iyt.zll, 800)
            } else {
                vit.iyt.qjd.qxb(true);
                if ((vit.iyt.uie == 3 && (vit.iyt.lot == 3 || (vit.iyt.lot == 2 && vit.iyt.rcs == 2))) || (vit.iyt.uie == 2 && vit.iyt.lot == 2)) {
                    vit.iyt.qjd.iye.nxn("bet", "#umq", [vit.iyt.pso]);
                    vit.iyt.qjd.iye.nxn("exit", "#umq", [true])
                }
                if (vit.iyt.uie == vit.iyt.lot) {
                    vit.iyt.toq()
                }
                vit.iyt.aqo(true)
            }
        } else {
            vit.iyt.mxz();
            vit.iyt.jux();
            if (vit.iyt.win > 0) {
                vit.iyt.muk = false;
                vit.iyt.wps()
            } else {
                if (!vit.iyt.ihb()) {
                    vit.iyt.toq();
                    vit.iyt.qjd.iye.nxn("info", "#ila", [vit.iyt.language.mmg, true]);
                    if (vit.iyt.mye) {
                        vit.iyt.qjd.ztl(true);
                        vit.iyt.gxu = setTimeout(vit.iyt.zll, 800)
                    } else {
                        vit.iyt.qjd.ahn(true);
                        vit.iyt.aqo(true)
                    }
                } else {
                    vit.iyt.rqi()
                }
            }
        }
    };
    this.car = function() {
        if (vit.vjo.value79 > 0) {
            this.aul = vit.vjo.value79 / this.wwk.length
        } else {
            if (this.ykf) {
                this.aul = this.omn
            } else {
                if (this.rcs == 1) {
                    this.aul = this.nct
                } else {
                    this.aul = this.tzb
                }
            }
        }
    };
    this.vem = function(d) {
        var c = false;
        this.ngp = true;
        for (var b = 0, a = this.ufj.length; b < a; b++) {
            if (this.ufj[b] > 0) {
                this.wwk[b].lux(true, false);
                if (!c && d) {
                    this.tud.jfc("hold");
                    c = true
                }
            } else {
                this.wwk[b].lux(false, false)
            }
        }
        this.isl()
    };
    this.jux = function() {
        for (var b = 0, a = this.ufj.length; b < a; b++) {
            this.wwk[b].lux(false, false);
            if (this.knd) {
                if (this.ufj[b] > 0) {
                    this.wwk[b].msu(true, false)
                } else {
                    this.wwk[b].msu(false, false)
                }
            }
        }
        this.isl()
    };
    this.wps = function() {
        this.qjd.ahn(false);
        this.xwh(this.win);
        this.qjd.iye.nxn("info", "#ila", [this.language.nuu, false]);
        this.qwe = false;
        if (!this.mwk) {
            this.tud.jfc("win" + (this.pmo - 1))
        }
        this.isl();
        this.elj()
    };
    this.rqi = function() {};
    this.ihb = function() {
        return false
    };
    this.xwh = function(a) {
        this.vxx.nxn("winp", "#xqa", [this.lmh(a), false]);
        this.vxx.nxn("winp", "#ief", [true]);
        this.vxx.nxn("paytable", "#ief", [false])
    };
    this.elj = function() {
        if (this.wqw && this.ili) {
            setTimeout(this.hmx, 1000)
        } else {
            if ((this.axm || this.mye)) {
                if (!this.vtx && !this.muk) {
                    this.qjd.iye.nxn("start", "#xqa", [this.language.khy, true]);
                    if (this.axm) {
                        this.vtx = true;
                        this.qjd.ahn(false);
                        setTimeout(this.khy, 2000)
                    } else {
                        if (this.mye) {
                            this.gxu = setTimeout(this.zll, 800)
                        }
                    }
                }
            } else {
                this.qjd.iye.nxn("start", "#xqa", [this.language.khy, true]);
                if (!this.mwk) {
                    this.qjd.iye.nxn("gamble", "#jar");
                    this.qjd.iye.nxn("info", "#uxs", [1])
                } else {
                    if (!this.inAutogamble && !this.xsi) {
                        this.qjd.iye.nxn("gamble", "#jar")
                    }
                }
                setTimeout(this.ddo, 400)
            }
        }
    };
    this.ddo = function() {
        vit.iyt.qjd.nzw(true)
    };
    this.cpx = function() {};
    this.tzj = function() {};
    this.afv = function() {};
    this.xks = function() {};
    this.cys = function() {};
    this.mxz = function() {};
    this.gbh = function() {
        return this.state == vit.gfz.pcv.gzt || this.state == vit.gfz.pcv.fyl
    };
    this.uka = function(a) {
        if (this.ngp) {
            if (!a) {
                this.bkg()
            }
            this.ngp = false
        }
    };
    this.bkg = function() {
        for (var b = 0, a = this.wwk.length; b < a; b++) {
            this.wwk[b].lux(false, false);
            this.wwk[b].msu(false, false)
        }
        this.isl()
    };
    this.yqv = function() {
        return !this.axm
    };
    this.nmg = function() {
        var b = this.qjd.iye.szb("gamble")
            , a = this.qjd.iye.szb("info");
        this.qjd.ahn(false);
        this.bkg();
        this.kos();
        if (b) {
            b.vrd();
            b.thf(this.wqw)
        }
        if (a) {
            a.bmy();
            a.ila(this.language.cet + ": " + this.lmh(this.win + this.wmb));
            a.uxs(0)
        }
        this.uhc.khy()
    };
    this.khy = function() {
        if (!vit.iyt.muk) {
            vit.iyt.bkg();
            vit.iyt.tud.qic("collect");
            vit.iyt.tud.qic("collectend");
            if (vit.iyt.gbu != vit.iyt.owa) {
                vit.iyt.qjd.ztl(true)
            }
            vit.iyt.tud.qic("win" + (vit.iyt.pmo - 1));
            vit.iyt.uca = 10;
            if (vit.iyt.win + vit.iyt.wmb < vit.iyt.uca) {
                vit.iyt.uca = vit.iyt.win + vit.iyt.wmb;
                vit.iyt.rfz()
            } else {
                if (vit.iyt.win + vit.iyt.wmb >= vit.iyt.jxl() * 25) {
                    vit.iyt.uca = 20
                }
                vit.iyt.rfz()
            }
        }
    };
    this.iyv = function() {
        this.muk = true;
        this.vtx = false;
        clearTimeout(this.wmu);
        this.tud.qic("collect");
        this.tud.jfc("collectend");
        this.pqf(this.qqk, true);
        this.jae();
        this.aqo(true);
        this.qjd.iye.nxn("start", "#xqa", [this.language.start, true]);
        if (!this.mye) {
            this.qjd.ahn(true)
        } else {
            this.gxu = setTimeout(this.zll, 500)
        }
    };
    this.rfz = function() {
        this.zwk = false;
        this.ygp = (this.win + this.wmb > this.totalBet) ? true : false;
        this.qfs = 0;
        this.xpj = this.win + this.wmb;
        this.itp = this.qqk - this.win - this.wmb;
        this.sok = 0;
        this.fha = this.win + this.wmb;
        this.ibl = new Date().getTime();
        this.vtx = true;
        this.wmu = setTimeout(this.chy, this.hir)
    };
    this.chy = function() {
        var c = 0
            , a = vit.iyt.pfa
            , b = 0;
        if (vit.iyt.fha > 0) {
            if (!vit.iyt.zwk) {
                vit.iyt.tud.jfc("collect");
                vit.iyt.zwk = true
            }
            c = Math.round(vit.iyt.fha / vit.iyt.uca);
            vit.iyt.fha -= c;
            if (vit.iyt.fha < 0) {
                vit.iyt.fha = 0
            }
            vit.iyt.gpb(vit.iyt.xpj - (vit.iyt.win + vit.iyt.wmb - vit.iyt.fha));
            vit.iyt.pqf(vit.iyt.itp + (vit.iyt.win + vit.iyt.wmb - vit.iyt.fha), true);
            vit.iyt.qfs++;
            vit.iyt.uca -= 1;
            a = vit.iyt.pfa;
            b = new Date().getTime();
            a = vit.iyt.hir + (vit.iyt.qfs * vit.iyt.hir - (b - vit.iyt.ibl));
            vit.iyt.wmu = setTimeout(vit.iyt.chy, a)
        } else {
            vit.iyt.tud.qic("collect");
            vit.iyt.tud.jfc("collectend");
            vit.iyt.vtx = false;
            vit.iyt.muk = true;
            clearTimeout(vit.iyt.wmu);
            vit.iyt.jae();
            vit.iyt.qjd.iye.nxn("start", "#xqa", [vit.iyt.language.start, true]);
            if (vit.iyt.gbu == vit.iyt.owa) {
                vit.iyt.gbu()
            } else {
                if (!(vit.iyt.mye)) {
                    vit.iyt.qjd.ahn(true);
                    vit.iyt.aqo(true)
                } else {
                    vit.iyt.qjd.hyz(true);
                    vit.iyt.qjd.iye.nxn("info", "#ila", [vit.iyt.language.cet + ": " + vit.iyt.lmh(vit.iyt.win + vit.iyt.wmb)]);
                    vit.iyt.gxu = setTimeout(vit.iyt.zll, 500)
                }
            }
        }
    };
    this.gwu = function(a, b, c) {
        if (a <= b) {
            return 1
        }
        var d = 0
            , e = this.nlz(a, b, c)
            , f = 0;
        while (a > f) {
            e = this.nlz(a - f, b, c);
            f += e;
            d++
        }
        return d
    };
    this.nlz = function(d, a, b) {
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
    this.ppb = function(d) {
        var e = this.mir
            , c = this.kgw;
        this.sek = true;
        this.qjd.iye.nxn("info", "#ila", ["", true]);
        this.sjh();
        if (d == vit.gfz.pcv.frr) {
            this.toq();
            this.qjd.iye.nxn("info", "#rih", [0]);
            this.qjd.ahn(true);
            this.aqo(true);
            this.aps()
        } else {
            if (d == vit.gfz.pcv.gzt) {
                for (var b = 0, a = this.kqx.length; b < a; b++) {
                    this.wwk[b].kii(this.kqx[b], false)
                }
                this.xks();
                this.vem(false);
                this.bdw(true);
                this.qjd.iye.nxn("info", "#rih", [2]);
                this.qjd.qxb(true);
                if (this.uie == this.lot) {
                    this.qjd.iye.nxn("exit", "#umq", [true]);
                    this.qjd.iye.nxn("bet", "#umq", [this.pso]);
                    this.toq()
                }
                this.aqo(true)
            } else {
                if (d == vit.gfz.pcv.cdl) {
                    for (var b = 0, a = this.kqx.length; b < a; b++) {
                        this.wwk[b].kii(this.kqx[b], false)
                    }
                    this.mxz();
                    this.jux();
                    if (this.win > 0) {
                        if (this.xyq() === false) {
                            this.ili = true
                        } else {
                            this.ili = false;
                            this.axm = true
                        }
                        this.muk = false;
                        this.wps()
                    } else {
                        if (this.ihb()) {
                            this.ili = true;
                            this.rqi()
                        } else {
                            this.toq();
                            this.qjd.iye.nxn("info", "#rih", [0]);
                            this.qjd.ahn(true);
                            this.aqo(true);
                            this.aps()
                        }
                    }
                } else {
                    if (d == vit.gfz.pcv.hrf) {
                        this.muk = true;
                        for (var b = 0, a = this.kqx.length; b < a; b++) {
                            this.wwk[b].kii(this.kqx[b], false)
                        }
                        this.toq();
                        this.qjd.iye.nxn("info", "#rih", [0]);
                        this.qjd.ahn(true);
                        this.aqo(true);
                        this.aps()
                    } else {
                        if (d == vit.gfz.pcv.hpm) {
                            for (var b = 0, a = this.kqx.length; b < a; b++) {
                                this.wwk[b].kii(this.kqx[b], false)
                            }
                            this.isl();
                            if (!this.qtr.zeb() && this.win + this.wmb > 0) {
                                this.hmx();
                                this.qtr.qcz(this.qqk, this.win + this.wmb, this.pmo, true)
                            }
                            if (this.win + this.wmb == 0) {
                                this.toq();
                                this.qjd.iye.nxn("info", "#rih", [0]);
                                this.qjd.ahn(true);
                                this.aqo(true);
                                this.aps()
                            }
                        } else {
                            if (d == vit.gfz.pcv.raz) {
                                for (var b = 0, a = this.kqx.length; b < a; b++) {
                                    this.wwk[b].kii(this.kqx[b], false)
                                }
                                if (!this.qtr.zeb()) {
                                    this.hmx()
                                }
                                this.pqf(this.qqk, false);
                                this.qtr.qcz(this.qqk, this.win + this.wmb, this.pmo, true);
                                this.qtr.ahn(true)
                            } else {
                                if (d == vit.gfz.pcv.uzg) {
                                    this.muk = true;
                                    for (var b = 0, a = this.kqx.length; b < a; b++) {
                                        this.wwk[b].kii(this.kqx[b], false)
                                    }
                                    this.toq();
                                    this.qjd.iye.nxn("info", "#rih", [0]);
                                    this.qjd.ahn(true);
                                    this.aqo(true);
                                    this.aps()
                                } else {
                                    if (d == vit.gfz.pcv.fyl) {
                                        for (var b = 0, a = this.kqx.length; b < a; b++) {
                                            this.wwk[b].kii(this.kqx[b], false)
                                        }
                                        this.cys();
                                        this.vem(false);
                                        this.bdw(true);
                                        this.qjd.iye.nxn("info", "#rih", [2]);
                                        this.qjd.qxb(true);
                                        if ((this.uie == 3 && this.lot >= 2) && this.qjd.kyv != null) {
                                            this.qjd.iye.nxn("exit", "#umq", [true])
                                        }
                                    } else {
                                        if (d == vit.gfz.pcv.ozw) {
                                            for (var b = 0, a = this.kqx.length; b < a; b++) {
                                                this.wwk[b].kii(this.kqx[b], false)
                                            }
                                            if (!this.qtr.zeb()) {
                                                this.hmx()
                                            }
                                            this.pqf(this.qqk, false);
                                            this.qtr.qcz(this.qqk, this.win, this.pmo, true);
                                            this.qtr.faa(false);
                                            this.qtr.rrh(c)
                                        } else {
                                            if (d == vit.gfz.pcv.gxe || d == vit.gfz.pcv.reh) {
                                                for (var b = 0, a = this.kqx.length; b < a; b++) {
                                                    this.wwk[b].kii(this.kqx[b], false)
                                                }
                                                if (!this.qtr.zeb()) {
                                                    this.hmx()
                                                }
                                                this.pqf(this.qqk, false);
                                                this.qtr.qcz(this.qqk, this.win, this.pmo, true);
                                                this.qtr.faa(false);
                                                this.qtr.omf(e)
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
    this.gve = function() {
        this.sek = false;
        this.axm = false;
        this.ili = false;
        this.wwr = 5;
        this.sgk();
        this.qjd.hyz(true);
        this.kiu()
    };
    this.yxo = function() {
        this.sek = false;
        this.axm = false;
        this.ili = false;
        this.jlh();
        this.qjd.hyz(true)
    };
    this.nuy = function() {
        this.sek = false;
        this.axm = false;
        this.ili = true;
        this.muk = false;
        this.ugk();
        this.qjd.hyz(true)
    };
    this.jxw = function(a) {
        this.sek = false;
        this.axm = true;
        this.ili = false;
        this.muk = false;
        if (this.qtr.zeb()) {
            this.qtr.qcz(this.qqk, this.win + this.wmb, this.pmo, true);
            this.qtr.kwu();
            this.pqf(this.qqk, false);
            try {
                if (this.qtr instanceof knh) {
                    this.qtr.rrh(a, true)
                } else {
                    setTimeout(this.qtr.jrf, 500)
                }
            } catch (b) {
                setTimeout(this.qtr.jrf, 500)
            }
        } else {
            this.ugk();
            this.qjd.hyz(true)
        }
    };
    this.vnu = function() {
        this.sek = false;
        this.ili = false;
        this.bzg = true;
        this.tov();
        if (this.qtr.zeb()) {
            this.qtr.kwu();
            this.pqf(this.qqk, false);
            setTimeout(this.qtr.jrf, 100)
        } else {
            this.khy()
        }
    };
    this.vlb = function() {
        this.sek = false;
        if (!this.qtr.zeb() && this.win + this.wmb > 0) {
            this.hmx()
        }
        this.qtr.qcz(this.qqk, this.win + this.wmb, this.pmo, true);
        if (this.win + this.wmb == 0) {
            this.qtr.iye.nxn("info", "#bmy");
            setTimeout(this.fid, 1000)
        } else {
            this.qtr.tqv()
        }
    };
    this.ceq = function() {
        this.sek = false;
        if (!this.qtr.zeb()) {
            this.hmx()
        }
        this.pqf(this.qqk, false);
        this.qtr.qcz(this.qqk, this.win + this.wmb, this.pmo, true);
        this.qtr.ahn(true)
    };
    this.utg = function(a) {
        this.sek = false;
        if (!this.qtr.zeb() && this.win > 0) {
            this.hmx()
        }
        this.qtr.qcz(this.qqk, this.win, this.pmo, true);
        this.qtr.faa(false);
        this.qtr.omf(a)
    };
    this.vyq = function(a) {
        this.sek = false;
        if (!this.qtr.zeb() && this.win > 0) {
            this.hmx()
        }
        this.qtr.qcz(this.qqk, this.win, this.pmo, true);
        this.qtr.faa(false);
        this.qtr.omf(a)
    };
    this.bsy = function(a) {
        this.sek = false;
        this.qtr.qcz(this.qqk, this.win, this.pmo, true);
        this.qtr.rrh(a, false)
    };
    this.uco = function(b, d) {
        var c = this.vxx.szb("stats")
            , a = this.vxx.szb("history");
        if (this.kkr) {
            if (!this.mwk) {
                if (c && c.zeb()) {
                    c.ahn(false);
                    c.ief(false)
                }
                this.vxx.nxn("settings", "#duw");
                if (this.qtr != null && this.qtr.zeb()) {
                    this.qtr.iye.nxn("info", "#ila", [b, true]);
                    this.qtr.ahn(false);
                    this.axh()
                } else {
                    if (this.qjd != null) {
                        if (this.ird != null && this.ird.zeb()) {
                            this.hsm()
                        }
                        this.qjd.ahn(false);
                        this.stop();
                        this.qjd.iye.nxn("setting", "#thf", [false]);
                        this.qjd.iye.nxn("info", "#ila", [b, true])
                    } else {
                        this.jbe(b)
                    }
                }
            } else {
                this.stop();
                this.ndk();
                if (a) {
                    a.kqp(true)
                }
                this.iqk(this.jkm(b))
            }
        } else {
            this.jbe(b)
        }
        if (d) {
            if (!this.mwk && this.uhc.uth.gfj == 0 && vit.vjo.value46 > 0) {
                this.fxn((this.xny) ? vit.vjo.value71 : vit.vjo.value47)
            } else {
                setTimeout(this.owa, vit.vjo.value10)
            }
        }
    };
    this.bco = function(a) {
        if (a == vit.gba.fih) {
            this.qjd.iye.nxn("info", "#ila", [this.language.smh, true])
        } else {
            if (a == vit.gba.udb) {
                this.qjd.iye.nxn("info", "#ila", [this.language.ctr + " " + this.lmh(this.xqb), true])
            } else {
                if (a >= vit.gba.kxs) {
                    this.qjd.iye.nxn("info", "#bmy");
                    if (a == vit.gba.ahe || a == vit.gba.cal) {
                        this.stop()
                    }
                    this.qjd.ahn(false);
                    this.aqo(false)
                }
            }
        }
        this.cnz();
        if (a < vit.gba.kxs) {
            this.bzg = true;
            this.qjd.ahn(true);
            this.aqo(true)
        } else {
            this.fto([{
                vri: a
            }])
        }
    };
    this.okl = function(a) {
        this.qqk = a;
        if (!(this.qtr.zeb() || this.ird.zeb())) {
            this.pqf(a, true)
        } else {
            if (this.qtr.zeb()) {
                this.qtr.iye.nxn("creditd", "#xqa", [this.fki(a), true]);
                this.pqf(a, false)
            }
        }
        if (this.qqk > 0) {
            this.tov()
        } else {
            this.toq()
        }
    };
    this.snz = function() {
        clearTimeout(vit.iyt.gxu);
        if (vit.iyt.bzg) {
            if (vit.iyt.win + vit.iyt.wmb > 0 && !vit.iyt.muk) {
                if (!vit.iyt.vtx) {
                    if (vit.iyt.yqv()) {
                        vit.iyt.bzg = false;
                        vit.iyt.nmg()
                    }
                } else {
                    vit.iyt.iyv()
                }
            } else {
                if (!vit.iyt.swe) {
                    if (vit.iyt.irz) {
                        vit.iyt.cnz();
                        vit.iyt.xsu();
                        return
                    } else {
                        if (vit.iyt.dpm) {
                            vit.iyt.cnz();
                            vit.iyt.ogs();
                            return
                        }
                    }
                    vit.iyt.bzg = false;
                    if (vit.iyt.xyq() === true) {
                        vit.iyt.mot = (!vit.iyt.wqw) ? 1 : 0
                    } else {
                        if (vit.vjo.value62 === true) {
                            vit.iyt.mot = 0;
                            if (vit.iyt.mye) {
                                vit.iyt.mot |= 2
                            }
                            if (vit.iyt.wqw) {
                                vit.iyt.mot |= 4
                            }
                        } else {
                            vit.iyt.mot = (vit.iyt.mye && !vit.iyt.wqw) ? 1 : 0
                        }
                    }
                    vit.iyt.yoe();
                    if ((vit.iyt.state == vit.gfz.pcv.frr || vit.iyt.state == vit.gfz.pcv.cdl || vit.iyt.state == vit.gfz.pcv.hrf || vit.iyt.state == vit.gfz.pcv.hpm || vit.iyt.state == vit.gfz.pcv.uzg || vit.iyt.state == vit.gfz.pcv.ozw) || vit.iyt.gwe()) {
                        if (vit.iyt.qqk >= vit.iyt.jxl() && vit.iyt.jxl() >= vit.iyt.xqb) {
                            vit.iyt.uhc.ifh(vit.iyt.ykg, vit.iyt.mot);
                            vit.iyt.qjd.ahn(false)
                        } else {
                            vit.iyt.skc();
                            vit.iyt.cnz();
                            vit.iyt.qjd.ahn(true);
                            vit.iyt.aqo(true);
                            vit.iyt.bzg = true
                        }
                    } else {
                        if (vit.iyt.state == vit.gfz.pcv.gzt) {
                            if (vit.iyt.uie == 2 && vit.iyt.lot == 2 && vit.iyt.pso && (vit.iyt.wwr == 5 || vit.iyt.totalBet != vit.iyt.zpd)) {
                                vit.iyt.uhc.ifh(vit.iyt.ykg, vit.iyt.mot);
                                vit.iyt.qjd.ahn(false);
                                vit.iyt.bdw(false);
                                return
                            }
                            vit.iyt.tiy();
                            if (vit.iyt.uie == 2 || (vit.iyt.uie == 3 && vit.iyt.wwr == 0 && vit.iyt.pmo > 0)) {
                                vit.iyt.uhc.qdb(vit.iyt.ykg, vit.iyt.mot, vit.iyt.ufj);
                                vit.iyt.qjd.ahn(false)
                            } else {
                                if (vit.iyt.uie == 3) {
                                    vit.iyt.uhc.eeu(vit.iyt.ykg, vit.iyt.mot, vit.iyt.ufj);
                                    vit.iyt.qjd.ahn(false)
                                }
                            }
                        } else {
                            if (vit.iyt.state == vit.gfz.pcv.fyl) {
                                vit.iyt.tiy();
                                vit.iyt.uhc.qdb(vit.iyt.ykg, vit.iyt.mot, vit.iyt.ufj);
                                vit.iyt.qjd.ahn(false)
                            }
                        }
                    }
                    vit.iyt.bdw(false)
                }
            }
        }
    };
    this.jmm = function() {
        var a = vit.iyt.vxx.szb("topi")
            , c = 0
            , b = 0
            , d = 0;
        if (!vit.vjo.value55) {
            vit.iyt.tud.qic("auto_on");
            vit.iyt.tud.qic("auto_off")
        }
        if (vit.iyt.mye) {
            vit.iyt.mye = false;
            vit.iyt.lok();
            vit.iyt.qjd.iye.nxn("astart", "#thf", [vit.iyt.mye]);
            vit.iyt.qjd.iye.nxn("start", "#xqa", [vit.iyt.language.start, true]);
            if (!vit.vjo.value55) {
                vit.iyt.tud.jfc("auto_off")
            }
        } else {
            if (vit.iyt.ynv() != null && vit.iyt.qft <= 0 && vit.iyt.xyq() === false) {
                if (a && a.ijh() === true) {
                    vit.iyt.aqo(false);
                    vit.iyt.qjd.ahn(false);
                    vit.iyt.id = setTimeout(vit.iyt.egt, 300)
                }
            } else {
                vit.iyt.mye = true;
                if (vit.iyt.ynv() != null && vit.iyt.xyq() === true) {
                    vit.iyt.qft = vit.iyt.vxx.nxn("settings", "#fbh");
                    c = vit.iyt.vxx.nxn("settings", "#jtu");
                    b = vit.iyt.vxx.nxn("settings", "#hvi");
                    d = vit.iyt.vxx.nxn("settings", "#los");
                    vit.iyt.yyv = (c > 0) ? c : 0;
                    vit.iyt.ayb = (b > 0) ? b : 0;
                    vit.iyt.mht = (d > 0) ? d : 0;
                    vit.iyt.kiu()
                }
                vit.iyt.qjd.iye.nxn("astart", "#thf", [vit.iyt.mye]);
                vit.iyt.qjd.iye.nxn("start", "#xqa", [vit.iyt.language.start, true]);
                if (!vit.vjo.value55) {
                    vit.iyt.tud.jfc("auto_on")
                }
                vit.iyt.snz()
            }
        }
        if (a) {
            a.qdi("auto", vit.iyt.mye)
        }
    };
    this.owa = function() {
        if (vit.gfj == 0 && vit.iyt.mwk === false && vit.iyt.win + vit.iyt.wmb > 0 && !vit.iyt.muk && vit.iyt.yqv()) {
            if (!vit.iyt.vtx) {
                vit.iyt.nmg()
            }
            vit.iyt.gbu = vit.iyt.owa
        } else {
            uww.prototype.owa.call(this)
        }
    };
    this.jyp = function() {
        if (vit.iyt.ykg < vit.iyt.hpx.length - 1) {
            if (vit.iyt.ykg >= vit.iyt.ogu(true)) {
                vit.iyt.ykg = 0;
                while (vit.iyt.ykg < vit.iyt.lfy()) {
                    vit.iyt.ykg++
                }
            } else {
                vit.iyt.ykg++
            }
        } else {
            vit.iyt.ykg = 0;
            while (vit.iyt.ykg < vit.iyt.lfy()) {
                vit.iyt.ykg++
            }
        }
        vit.iyt.hly(false);
        if (vit.iyt.ykg >= vit.iyt.ogu(true)) {
            return true
        }
        return false
    };
    this.kka = function() {
        if (vit.iyt.ykg > 0) {
            if (vit.iyt.ykg <= vit.iyt.lfy()) {
                vit.iyt.ykg = vit.iyt.hpx.length;
                while (vit.iyt.ykg > vit.iyt.ogu(true)) {
                    vit.iyt.ykg--
                }
            } else {
                vit.iyt.ykg--
            }
        } else {
            vit.iyt.ykg = vit.iyt.hpx.length;
            while (vit.iyt.ykg > vit.iyt.ogu(true)) {
                vit.iyt.ykg--
            }
        }
        if (vit.iyt.ykg < 0) {
            vit.iyt.ykg = 0
        }
        vit.iyt.hly(false);
        if (vit.iyt.ykg <= vit.iyt.lfy()) {
            return true
        }
        return false
    };
    this.trs = function() {
        var a = vit.iyt.vxx.szb("topi")
            , b = vit.iyt.vxx.szb("settings");
        if (vit.iyt.xyq() === false && vit.iyt.ili && vit.iyt.win + vit.iyt.wmb > 0) {
            if (!vit.iyt.swe) {
                vit.iyt.sek = false;
                vit.iyt.hmx()
            }
        } else {
            vit.iyt.tud.qic("gamble_on");
            vit.iyt.tud.qic("gamble_off");
            vit.iyt.wqw = !vit.iyt.wqw;
            if (vit.iyt.wqw) {
                vit.iyt.tud.jfc("gamble_on")
            } else {
                vit.iyt.tud.jfc("gamble_off")
            }
            vit.iyt.qjd.iye.nxn("gamble", "#thf", [vit.iyt.wqw]);
            if (a) {
                a.qdi("gamble", vit.iyt.wqw)
            }
            if (b) {
                b.iye.nxn("gamble", "#plj", [(vit.iyt.wqw) ? 1 : 0])
            }
        }
    };
    this.zfd = function() {
        if (!vit.iyt.ird.zeb()) {
            vit.iyt.gzl();
            if (vit.iyt.vxx.szb("tops")) {
                vit.iyt.jrk()
            }
            if (vit.iyt.ird.ybf() > 0) {
                vit.iyt.vap()
            }
        } else {
            vit.iyt.hsm()
        }
    };
    this.njl = function() {
        var a = vit.iyt.vxx.szb("topi")
            , b = vit.iyt.vxx.szb("settings")
            , c = vit.iyt.vxx.szb("topb");
        vit.iyt.ykf = !vit.iyt.ykf;
        if (a) {
            a.qdi("turbo", vit.iyt.ykf)
        }
        if (c) {
            c.iye.nxn("turbo", "#plj", [(vit.iyt.ykf) ? 1 : 0])
        }
        if (b) {
            b.iye.nxn("turbo", "#plj", [(vit.iyt.ykf) ? 1 : 0])
        }
    };
    this.rzw = function() {
        var a = false;
        if (vit.gtm.xcn == true) {
            if (vit.iyt.okf == true) {
                vit.iyt.okf = false;
                a = vit.gtm.vvd();
                setTimeout(vit.iyt.ejj, 1400)
            }
        } else {
            a = vit.gtm.vvd();
            setTimeout(vit.iyt.ejj, 1400)
        }
    };
    this.gbk = function() {
        if (vit.iyt.tud.ore() && !vit.iyt.ohw) {
            vit.iyt.ohw = true;
            vit.iyt.vxx.nxn("loading", "#stop");
            setTimeout(vit.iyt.fzh, 100);
            vit.iyt.tud.jfc("silence");
            if (vit.gtm.lpp()) {
                vit.iyt.rzw()
            }
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                webAudioEngine.resume()
            }
        }
    };
    this.rat = function(a) {
        if (a == vit.language.EN || a == vit.language.US) {
            return new bxz()
        } else {
            if (a == vit.language.ES || a == vit.language.CO || a == vit.language.MX || a == vit.language.CL || a == vit.language.VE) {
                return new ook()
            } else {
                if (a == vit.language.DE || a == vit.language.AT) {
                    return new hss()
                } else {
                    if (a == vit.language.PT || a == vit.language.BR) {
                        return new nmb()
                    } else {
                        if (a == vit.language.RU) {
                            return new fjs()
                        } else {
                            if (a == vit.language.EE) {
                                return new geq()
                            } else {
                                if (a == vit.language.TR) {
                                    return new agc()
                                } else {
                                    if (a == vit.language.CZ) {
                                        return new pqb()
                                    } else {
                                        if (a == vit.language.GR) {
                                            return new ugs()
                                        } else {
                                            if (a == vit.language.BG) {
                                                return new nbd()
                                            } else {
                                                if (a == vit.language.GE) {
                                                    return new pzq()
                                                } else {
                                                    if (a == vit.language.HU) {
                                                        return new rza()
                                                    } else {
                                                        if (a == vit.language.RO) {
                                                            return new mpi()
                                                        } else {
                                                            if (a == vit.language.FR) {
                                                                return new utx()
                                                            } else {
                                                                if (a == vit.language.HR) {
                                                                    return new dbn()
                                                                } else {
                                                                    if (a == vit.language.IT) {
                                                                        return new rwo()
                                                                    } else {
                                                                        if (a == vit.language.SE) {
                                                                            return new num()
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
    this.btw = function() {
        var f = this.vxx.szb("stats")
            , e = this.vxx.szb("topb")
            , c = this.vxx.szb("topi")
            , b = this.vxx.szb("betsel");
        this.rno();
        this.qjd.zae(this.syu, 0);
        this.bzt[0] = this.language.kcy;
        this.bzt[1] = this.language.dco;
        this.qjd.zae(this.bzt, 1);
        this.jqp[0] = this.language.wlb;
        this.jqp[1] = this.language.qwz;
        this.qjd.zae(this.jqp, 2);
        if (this.mye) {
            this.qjd.iye.nxn("start", "#xqa", [this.language.start])
        } else {
            if (this.win + this.wmb > 0 && !this.axm && !this.muk) {
                this.qjd.iye.nxn("start", "#xqa", [this.language.khy])
            } else {
                this.qjd.iye.nxn("start", "#xqa", [this.language.start])
            }
        }
        if (this.ynv() != null) {
            this.qjd.iye.nxn("astart", "#xqa", [this.language.nvj])
        } else {
            this.qjd.iye.nxn("astart", "#xqa", [this.language.mye])
        }
        this.qjd.iye.nxn("gamble", "#xqa", [this.language.wqw]);
        this.qjd.iye.nxn("exit", "#xqa", [(vit.vjo.value50.g === true) ? this.language.cnn : this.language.wrk]);
        this.qjd.iye.nxn("bet", "#xqa", [this.language.llk]);
        this.qjd.iye.nxn("creditd", "#elr", [(this.zmf()) ? this.language.lso : this.language.qqk]);
        this.qjd.iye.nxn("betd", "#elr", [this.language.llk]);
        if (e) {
            e.iye.nxn("language", "#rou", [this.language.language]);
            e.iye.nxn("audio", "#rou", [this.language.audio]);
            e.iye.nxn("turbo", "#rou", [this.language.ykf]);
            e.iye.nxn("fullscreen", "#rou", [this.language.oga]);
            e.iye.nxn("help", "#rou", [this.language.cce]);
            e.iye.nxn("history", "#rou", [this.language.dwr]);
            e.iye.nxn("statistic", "#rou", [this.language.hgr]);
            e.iye.nxn("deposit", "#rou", [this.language.bzh])
        }
        if (c) {
            c.rou("freeplay", this.language.lso)
        }
        if (b) {
            b.itb = this.language.llk
        }
        if (f) {
            if (vit.vjo.value36) {
                f.itb = this.jkm(this.language.hgr)
            } else {
                if (vit.vjo.value37) {
                    f.itb = this.jkm(this.language.qii)
                }
            }
            if (f.xxq != null) {
                f.xxq.xqa(this.language.ret, false)
            }
            if (f.kyv != null) {
                f.kyv.xqa(this.language.tla, false)
            }
        }
        this.ird.iye.nxn("return", "#xqa", [this.language.ret, false]);
        for (var d = 0, a = this.wwk.length; d < a; d++) {
            if (this.wwk[d].dca()) {
                this.wwk[d].msu(true, false)
            } else {
                if (this.wwk[d].sso()) {
                    this.wwk[d].lux(true, false)
                }
            }
        }
        this.vxx.nxn("settings", "#btw", [this.language, false]);
        this.vxx.nxn("autop", "#btw", [this.language]);
        this.vgf()
    };
    this.vgf = function() {
        this.tyx[0] = this.language.rev;
        this.qtr.zae(this.tyx)
    };
    this.jxl = function() {
        return this.totalBet
    };
    this.uwd = function() {
        return this.xqb
    };
    this.bfk = function() {
        return this.taj
    };
    this.ogu = function(b) {
        for (var c = 0; c < this.hpx.length; c++) {
            var a = this.hpx[c];
            if (a > this.taj || (b && (this.qqk > 0 && this.qqk < a))) {
                return c - 1
            } else {
                if (a == this.taj || c == this.hpx.length - 1) {
                    return c
                }
            }
        }
        return -1
    };
    this.lfy = function() {
        for (var b = 0; b < this.hpx.length; b++) {
            var a = this.hpx[b];
            if (a >= this.xqb && a < this.taj) {
                return b
            }
        }
        return -1
    };
    this.skc = function() {
        var c = this.ogu(true)
            , a = this.lfy()
            , b = this.hpx.length - 1;
        b = (b > c) ? c : b;
        if (b > 0) {
            while (this.hpx[b] > this.qqk) {
                b--;
                if (b <= a) {
                    break
                }
            }
        }
        this.ykg = (b < a) ? a : b;
        this.hly(false);
        if (this.jxl() > this.qqk) {
            this.qjd.iye.nxn("info", "#ila", [this.language.smh, true])
        } else {
            if (this.jxl() < this.xqb) {
                this.qjd.iye.nxn("info", "#ila", [this.language.ctr + " " + this.xqb, true])
            }
        }
    };
    this.hly = function(b) {
        var a = this.qjd.iye.szb("info");
        this.totalBet = this.hpx[this.ykg];
        this.sjh();
        if (a && a.ema() === false) {
            a.ila(this.syu[2], true)
        }
        if (this.xyq() == true) {
            this.tud.jfc("btn")
        } else {
            if (this.ykg == this.ogu(true)) {
                this.tud.jfc("maxstep")
            } else {
                this.tud.jfc("step" + (this.ykg % 12))
            }
        }
        this.vxx.nxn("betsel", "#vuo", [this.ykg, true])
    };
    this.rhv = function() {
        this.totalBet = this.hpx[this.ykg];
        this.sjh()
    };
    this.cie = function(a) {
        vit.iyt.ykg = a;
        vit.iyt.rhv()
    };
    this.hsj = function() {
        this.vxx.nxn("paytable", "#cbc", [this.totalBet])
    };
    this.stop = function() {
        uww.prototype.stop.call(this);
        this.qhv();
        if (this.qjd != null) {
            this.qjd.iye.nxn("gamble", "#vrd");
            this.qjd.iye.nxn("info", "#bmy");
            this.qjd.stop()
        }
        clearTimeout(this.sol);
        clearTimeout(this.wmu);
        clearTimeout(this.hue);
        clearTimeout(this.wxq);
        clearTimeout(this.rap);
        this.elt();
        if (this.qtr != null && this.qtr.zeb()) {
            this.qtr.kwu();
            try {
                if (this.qtr instanceof knh) {
                    this.qtr.iye.nxn("gamble", "#vrd")
                } else {
                    this.qtr.iye.nxn("info", "#bmy")
                }
            } catch (a) {
                this.qtr.iye.nxn("info", "#bmy")
            }
        }
        this.xwo();
        if (!this.mwk) {
            this.isl()
        }
    };
    this.elt = function() {};
    this.jae = function() {
        var a = this.vxx.szb("winp");
        if (a && a.zeb()) {
            a.ief(false, true)
        }
    };
    this.gpb = function(a) {
        this.vxx.nxn("winp", "#xqa", [this.lmh(a), true])
    };
    this.bdw = function(c) {
        if (!(c && this.mye)) {
            for (var b = 0, a = this.wwk.length; b < a; b++) {
                this.wwk[b].umq(c)
            }
        }
    };
    this.tvz = function(a) {
        this.qjd.iye.moq("buttons", "#ief", [a]);
        this.isl()
    };
    this.yoe = function() {
        this.wwr = 5;
        for (var b = 0, a = this.wwk.length; b < a; b++) {
            if (this.wwk[b].sso()) {
                this.wwr--
            }
        }
    };
    this.tiy = function() {
        for (var b = 0, a = this.wwk.length; b < a; b++) {
            if (this.wwk[b].sso()) {
                this.ufj[b] = this.kqx[b]
            } else {
                this.ufj[b] = 0
            }
        }
    };
    this.dqo = function(b) {
        for (var c = 0, a = this.dfy.length; c < a; c++) {
            if (b == this.dfy[c]) {
                return true
            }
        }
        return false
    };
    this.sfd = function(b) {
        for (var c = 0, a = this.dfy.length; c < a; c++) {
            if (b == this.dfy[c]) {
                if (this.tqs[c]) {
                    return this.tqs[c]
                }
            }
        }
        return -1
    };
    this.gwe = function() {
        return false
    };
    this.zch = function() {
        if (!vit.iyt.muk && !vit.iyt.vtx && !(vit.iyt.axm || vit.iyt.mye) && !(vit.iyt.wqw && vit.iyt.ili)) {
            if (vit.iyt.win + vit.iyt.wmb > 0 && !vit.iyt.qwe) {
                vit.iyt.tud.qic("gambleprop");
                vit.iyt.tud.jfc("gambleprop")
            }
        }
    };
    this.kos = function() {
        if (!this.mwk) {
            this.tud.qic("gambleprop");
            this.qwe = true
        }
    };
    this.aqo = function(e) {
        uww.prototype.aqo.call(this, e);
        var d = this.vxx.szb("topb")
            , c = (this.vxx.szb("tops") != null)
            , a = (e && !this.mye);
        if (this.qjd) {
            this.qjd.iye.nxn("setting", "#umq", [a])
        }
        if (c) {
            var a = (e && !this.mye);
            if (this.zhj && d) {
                var b = d.iye.szb("help");
                if (b) {
                    b.umq(a && !c)
                }
            }
        }
    };
    this.lxv = function(e) {
        uww.prototype.lxv.call(this, e);
        var d = this.vxx.szb("topb")
            , c = (this.vxx.szb("tops") != null)
            , a = (e && !this.mye);
        if (this.qjd) {
            this.qjd.iye.nxn("setting", "#umq", [a])
        }
        if (c) {
            var a = (e && !this.mye);
            if (this.zhj && d) {
                var b = d.iye.szb("help");
                if (b) {
                    b.umq(a && !c)
                }
            }
        }
    };
    this.dwc = function(e) {
        uww.prototype.dwc.call(this, e);
        var d = this.vxx.szb("topb")
            , c = (this.vxx.szb("tops") != null)
            , a = (e && !this.mye);
        if (this.qjd) {
            this.qjd.iye.nxn("setting", "#umq", [a])
        }
        if (c) {
            var a = (e && !this.mye);
            if (this.zhj && d) {
                var b = d.iye.szb("help");
                if (b) {
                    b.umq(a && !c)
                }
            }
        }
    };
    this.aog = function() {
        uww.prototype.aog.call(this);
        if (vit.iyt.uil === true && vit.iyt.jdy === true) {
            vit.iyt.cnz()
        }
    };
    this.myo = function() {
        if (vit.vjo.value74 != null && this.vxx.nxn("settings", "#fbh") <= 0) {
            return false
        } else {
            if ((this.state == vit.gfz.pcv.frr || this.state == vit.gfz.pcv.cdl || this.state == vit.gfz.pcv.hrf || this.state == vit.gfz.pcv.hpm || this.state == vit.gfz.pcv.uzg || this.state == vit.gfz.pcv.ozw) || this.gwe()) {
                if (!(this.qqk >= this.jxl() && this.jxl() >= this.xqb)) {
                    return false
                }
            }
        }
        return true
    };
    this.yum = function() {
        var b = this.vxx.szb("stats")
            , a = this.vxx.szb("settings");
        if (this.ird && this.ird.zeb()) {
            return false
        } else {
            if (this.qtr && this.qtr.zeb()) {
                return false
            } else {
                if (b && b.zeb()) {
                    return false
                } else {
                    if (a && a.zeb()) {
                        return false
                    }
                }
            }
        }
        return true
    };
    this.aps = function() {
        if (vit.vjo.value78 && this.xyq() === false) {
            if (vit.vjo.value78.t === true) {
                this.vxx.nxn("topb", "#ief", [true])
            }
            if (vit.vjo.value78.b === true) {
                this.vxx.nxn("betsel", "#ief", [true])
            }
            if (vit.vjo.value78.t === true || vit.vjo.value78.b === true) {
                this.rob()
            }
            this.isl();
            if (vit.vjo.value78.d > 0) {
                this.qxd = setTimeout(this.yiy, vit.vjo.value78.d)
            }
        }
    };
    this.yiy = function() {
        vit.iyt.llc();
        clearTimeout(vit.iyt.qxd)
    };
    this.gzl = function(b) {
        var a = this.vxx.szb("betsel");
        if (a && a.zeb() && a.ijh()) {
            this.llc(b)
        } else {
            uww.prototype.gzl.call(this, b)
        }
    };
    this.rob = function() {
        if (this.canvas) {
            this.canvas.onmousemove = function(a) {
                vit.iyt.ueu(a)
            };
            this.canvas.ontouchmove = function(a) {
                vit.iyt.ueu(a)
            }
        }
    };
    this.qhv = function() {
        if (this.canvas) {
            this.canvas.onmousemove = null;
            this.canvas.ontouchmove = null
        }
    };
    this.ueu = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        var b = 0
            , g = 0
            , c = false
            , e = this.vxx.szb("topb")
            , a = this.vxx.szb("betsel");
        if (d.touches) {
            var f = d.touches[0];
            c = true;
            if (!this.qlm) {
                b = f.pageX - this.offsetLeft;
                g = f.pageY - this.offsetTop
            } else {
                b = Math.round((f.pageX - this.offsetLeft) / this.kqu);
                g = Math.round((f.pageY - this.offsetTop) / this.vav)
            }
        } else {
            if (!this.qlm) {
                b = d.pageX - this.offsetLeft;
                g = d.pageY - this.offsetTop
            } else {
                b = Math.round((d.pageX - this.offsetLeft) / this.kqu);
                g = Math.round((d.pageY - this.offsetTop) / this.vav)
            }
        }
        if (a && a.zeb()) {
            if (a.qsj(b, g, c)) {
                return
            }
        }
        if (e && e.zeb()) {
            e.qsj(b, g)
        }
    };
    this.cpd = function() {
        if (this.sol >= 0) {
            return
        }
        this.vxx.nxn("betsel", "#qxs");
        this.tud.qic("panel_in");
        this.tud.jfc("panel_in");
        this.aqo(false);
        this.ibl = new Date().getTime();
        this.qfs = 0;
        this.sol = setTimeout(this.eyu, 89)
    };
    this.llc = function(b) {
        var c = this.vxx.szb("topb")
            , a = this.vxx.szb("betsel");
        if (this.sol >= 0 || !((c && c.zeb()) || (a && a.zeb()))) {
            return
        }
        if (b == this.kka || b == this.jyp) {
            b();
            return
        }
        if (c) {
            c.nrw()
        }
        if (a) {
            a.nrw()
        }
        this.tud.qic("panel_out");
        this.tud.jfc("panel_out");
        this.tej = b;
        this.ibl = new Date().getTime();
        this.qfs = 0;
        this.sol = setTimeout(this.rwl, 89)
    };
    this.eyu = function() {
        var a = vit.iyt.vxx.szb("betsel")
            , d = (!a || (a && !a.pxv()))
            , c = 0
            , b = 0;
        vit.iyt.isl();
        vit.iyt.qfs++;
        if (d) {
            vit.iyt.rob();
            clearTimeout(vit.iyt.sol);
            vit.iyt.sol = -1
        } else {
            c = new Date().getTime();
            b = 89 + (vit.iyt.qfs * 89 - (c - vit.iyt.ibl));
            vit.iyt.sol = setTimeout(vit.iyt.eyu, b)
        }
    };
    this.rwl = function() {
        var a = vit.iyt.vxx.szb("betsel")
            , e = vit.iyt.vxx.szb("topb")
            , f = (!a || (a && !a.pxv()))
            , b = (!e || (e && !e.pxv()))
            , d = 0
            , c = 0;
        vit.iyt.isl();
        vit.iyt.qfs++;
        if (f && b) {
            vit.iyt.qhv();
            clearTimeout(vit.iyt.sol);
            if (vit.iyt.yum()) {
                vit.iyt.aqo(true)
            }
            vit.iyt.sol = -1;
            if (typeof vit.iyt.tej === "function") {
                vit.iyt.tej();
                vit.iyt.tej = null
            }
        } else {
            d = new Date().getTime();
            c = 89 + (vit.iyt.qfs * 89 - (d - vit.iyt.ibl));
            vit.iyt.sol = setTimeout(vit.iyt.rwl, c)
        }
    };
    this.tej = function() {};
    this.afp = function() {
        return (this.qqk == 0 && (this.state == vit.gfz.pcv.frr || (this.state == vit.gfz.pcv.cdl && (this.win + this.wmb) == 0) || this.state == vit.gfz.pcv.hrf || (this.state == vit.gfz.pcv.hpm && (this.win + this.wmb) == 0) || this.state == vit.gfz.pcv.uzg || (this.state == vit.gfz.pcv.ozw && (this.win + this.wmb) == 0) || (this.state == vit.gfz.pcv.gzt && this.pso == true)))
    };
    this.qih = function() {
        if (vit.iyt.qtp != "" && vit.iyt.zmf() === false) {
            vit.iyt.qjd.iye.nxn("info", "#skl");
            vit.iyt.qjd.iye.nxn("info", "#rih", [0])
        }
    };
    this.fiw = function() {
        if (this.state == vit.gfz.pcv.cdl && this.pmo > 0) {
            this.tud.qic("win" + (this.pmo - 1))
        }
        this.qjd.iye.nxn("info", "#bmy");
        this.qjd.ahn(false);
        this.aqo(false);
        this.tvz(false);
        this.vxx.nxn("settings", "#duw");
        this.qjd.iye.nxn("setting", "#thf", [this.vxx.nxn("settings", "#zeb")]);
        this.vxx.nxn("stats", "#ief", [true]);
        this.isl()
    };
    this.htv = function() {
        this.vxx.nxn("stats", "#ahn", [false]);
        this.vxx.nxn("stats", "#ief", [false]);
        if (this.state != vit.gfz.pcv.gzt && this.state != vit.gfz.pcv.fyl) {
            this.qjd.ahn(true)
        } else {
            this.qjd.qxb(true)
        }
        this.aqo(true);
        this.tvz(true);
        this.isl();
        this.qjd.iye.nxn("info", "#rih", [0])
    };
    this.uga = function() {
        var a = this.qjd.iye.nxn("bet", "#ijh");
        this.jae();
        if (this.state == vit.gfz.pcv.cdl && this.pmo > 0) {
            this.tud.qic("win" + (this.pmo - 1))
        }
        this.qjd.iye.nxn("info", "#bmy");
        this.tvz(false);
        this.qjd.iye.moq("settings", "#ief", [true]);
        this.aqo(false);
        this.qjd.ahn(false);
        this.qjd.zvo(true);
        this.vxx.nxn("settings", "#lyq", [a, true])
    };
    this.ysr = function() {
        this.vxx.nxn("settings", "#duw");
        if (this.state != vit.gfz.pcv.gzt && this.state != vit.gfz.pcv.fyl) {
            this.qjd.ahn(true)
        } else {
            this.qjd.qxb(true)
        }
        this.aqo(true);
        this.tvz(true);
        this.qjd.iye.nxn("info", "#rih", [0])
    };
    this.egt = function() {
        vit.iyt.aqo(false);
        vit.iyt.qjd.ahn(false);
        vit.iyt.qjd.iye.nxn("info", "#skl");
        vit.iyt.vxx.nxn("autop", "#lyq")
    };
    this.fez = function() {
        var a = vit.iyt.vxx.szb("autop");
        if (a) {
            vit.iyt.qft = a.fbh();
            vit.iyt.yyv = (a.jtu() > 0) ? a.jtu() : 0;
            vit.iyt.ayb = (a.hvi() > 0) ? a.hvi() : 0;
            vit.iyt.mht = (a.los() > 0) ? a.los() : 0;
            if (vit.iyt.qft <= 0) {
                vit.iyt.aqo(true);
                vit.iyt.qjd.ahn(true);
                vit.iyt.qjd.iye.nxn("info", "#mbf")
            } else {
                vit.iyt.qjd.iye.nxn("astart", "#kii", [(vit.iyt.qft >= 0) ? vit.iyt.qft : "---"])
            }
        }
    };
    this.kiu = function() {
        if (this.ynv() != null && this.qft >= 0) {
            this.qft -= 1;
            this.qjd.iye.nxn("astart", "#kii", [(this.qft >= 0) ? this.qft : "---", true]);
            this.qjd.iye.nxn("start", "#kii", [(this.qft >= 0) ? this.qft : "---", true])
        }
    };
    this.lok = function() {
        if (vit.iyt.ynv() != null) {
            vit.iyt.qft = 0;
            vit.iyt.yyv = 0;
            vit.iyt.ayb = 0;
            vit.iyt.mht = 0;
            vit.iyt.qjd.iye.nxn("astart", "#kii", ["---"]);
            vit.iyt.qjd.iye.nxn("start", "#kii", ["---"])
        }
        vit.iyt.qjd.iye.nxn("start", "#kdl");
        vit.iyt.vxx.nxn("autop", "#lhi");
        vit.iyt.vxx.nxn("settings", "#lok")
    };
    this.cnz = function() {
        var a = vit.iyt.vxx.szb("topi");
        vit.iyt.mye = false;
        vit.iyt.lok();
        vit.iyt.qjd.iye.nxn("astart", "#thf", [vit.iyt.mye]);
        if (a) {
            a.qdi("auto", vit.iyt.mye)
        }
    };
    this.zll = function() {
        vit.iyt.yoe();
        var a = ((vit.iyt.win + vit.iyt.wmb > 0 && vit.iyt.muk || vit.iyt.win + vit.iyt.wmb === 0) && (vit.iyt.state == vit.gfz.pcv.frr || vit.iyt.state == vit.gfz.pcv.cdl || vit.iyt.state == vit.gfz.pcv.hrf || vit.iyt.state == vit.gfz.pcv.hpm || vit.iyt.state == vit.gfz.pcv.uzg || vit.iyt.state == vit.gfz.pcv.ozw) || (vit.iyt.state == vit.gfz.pcv.gzt && vit.iyt.uie == 2 && vit.iyt.lot == 2 && vit.iyt.pso && (vit.iyt.wwr == 5 || vit.iyt.totalBet != vit.iyt.zpd)) || vit.iyt.gwe());
        if (vit.iyt.ynv() != null && a === true && (vit.iyt.qft <= 0 || (vit.iyt.qqk - vit.iyt.jxl() < vit.iyt.yyv) || (vit.iyt.ayb > 0 && vit.iyt.qqk >= vit.iyt.ayb) || (vit.iyt.mht > 0 && vit.iyt.win > vit.iyt.mht))) {
            if (vit.iyt.mye === true) {
                vit.iyt.jmm()
            }
            vit.iyt.aqo(true);
            vit.iyt.qjd.iye.nxn("info", "#mbf");
            vit.iyt.qjd.ahn(true)
        } else {
            vit.iyt.snz()
        }
    }
}
uww.prototype = new lek;

function sly(a) {
    var c = vjy(a);
    var b = kbw(a);
    return c + b * 13
}

function vjy(a) {
    return a >> 2
}

function kbw(a) {
    return a & 3
}

function knh() {
    var a = this;
    this.ivz = null;
    this.jyo = null;
    this.zwk = false;
    this.ygp = false;
    this.uca = 10;
    this.qfs = 0;
    this.xpj = 0;
    this.itp = 0;
    this.sok = 0;
    this.fha = 0;
    this.ibl = 0;
    this.qty = false;
    this.wmu = 0;
    this.vsm = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 53];
    this.ixg = 52;
    this.aul = 150;
    this.sps = 0;
    this.mcd = [];
    this.dca = false;
    this.win = 0;
    this.erv = 0;
    this.syu = [];
    this.gxa = 0;
    this.audio = true;
    this.axm = false;
    this.jtc = 0;
    this.lqi = -1;
    this.iye = null;
    this.blt = null;
    this.ujz = null;
    this.jvo = null;
    this.dpv = "arial";
    this.yjy = "bold";
    this.eqn = "white";
    this.sdg = null;
    this.qyx = 20;
    this.gtb = new qlq(50, 20, 700, 120);
    this.ire = false;
    this.zij = function(b, d, c) {
        knh.prototype.zij.call(this, b, d, c);
        this.ozo()
    };
    this.ewp = function(b) {
        try {
            this.qyf(b);
            this.qlh(b);
            this.mso(b);
            this.rle(b)
        } catch (c) {
            console.error(c)
        }
    };
    this.zxd = function(g) {
        try {
            var f = this.iye.rys("buttons")
                , c = this.iye.rys("displays")
                , l = this.iye.rys("cards")
                , k = this.iye.szb("info");
            for (var d = 0, b = f.length; d < b; d++) {
                f[d].zxd(g.zoc)
            }
            for (var d = 0, b = c.length; d < b; d++) {
                c[d].zxd(g.display)
            }
            for (var d = 0, b = l.length; d < b; d++) {
                l[d].zxd(g.rds)
            }
            if (k) {
                k.zxd(g.vhe);
                k.giu(g.vhe.yhm)
            }
            this.iye.nxn("collect", "#giu", [g.ckc]);
            this.iye.nxn("gamble", "#giu", [g.hva]);
            this.iye.nxn("creditd", "#giu", [g.ens]);
            this.iye.nxn("wind", "#giu", [g.tja]);
            this.iye.nxn("card1", "#giu", [g.axb]);
            this.iye.nxn("card2", "#giu", [g.cvj]);
            this.iye.nxn("card3", "#giu", [g.ndi]);
            this.iye.nxn("card4", "#giu", [g.rze]);
            this.iye.nxn("card5", "#giu", [g.wnf]);
            this.sdg = g.kju;
            this.gtb = g.edk;
            this.qyx = g.fontSize
        } catch (j) {
            console.error(j)
        }
    };
    this.yek = function(f) {
        try {
            var g = this.iye.rys("buttons")
                , c = this.iye.rys("displays")
                , l = this.iye.rys("cards")
                , k = this.iye.szb("info");
            this.blt = f.backgroundColor;
            this.ujz = f.pfp;
            this.jvo = f.irj;
            this.dpv = f.font;
            this.yjy = f.exc;
            this.eqn = f.rbc;
            for (var d = 0, b = g.length; d < b; d++) {
                g[d].yek(f.efj)
            }
            for (var d = 0, b = c.length; d < b; d++) {
                c[d].yek(f.display)
            }
            for (var d = 0, b = l.length; d < b; d++) {
                l[d].yek(f.rds)
            }
            if (k) {
                k.yek(f.vhe)
            }
        } catch (j) {
            console.error(j)
        }
    };
    this.kng = function(o, n) {
        var m = this.iye.rys("buttons")
            , b = this.iye.rys("cards")
            , l = o - this.x
            , k = n - this.y;
        for (var f = 0, g = m.length; f < g; f++) {
            var c = m[f];
            if (l >= c.x && l <= c.x + c.width && k >= c.y && k <= c.y + c.height && c.zeb() === true && c.ijh() === true && c.umv() === false) {
                this.parent.tud.qic("btn");
                this.parent.tud.jfc("btn");
                c.eqb(true, false, true);
                this.isl();
                c.vve();
                for (var e = 0; e < g; e++) {
                    m[e].ixb(true)
                }
                return true
            }
        }
        for (var f = 1, g = b.length; f < g; f++) {
            var d = b[f];
            if (l >= d.x && l <= d.x + d.width && k >= d.y && k <= d.y + d.height && d.zeb() === true && d.ijh() === true) {
                d.rou(true, this.parent.language.wem, "white", true);
                this.bdw(false);
                this.ahn(false);
                this.xqc();
                this.parent.uhc.tfj(f);
                return true
            }
        }
        return false
    };
    this.szw = function() {
        var e = this.iye.rys("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.xoe() === true) {
                c.eqb(false, true);
                return true
            }
        }
        return false
    };
    this.zls = function(g) {
        var f = this.iye.rys("buttons");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (d.rrz == g) {
                if (d.zeb() === true && d.ijh() === true && d.umv() === false) {
                    this.parent.tud.qic("btn");
                    this.parent.tud.jfc("btn");
                    d.eqb(true, false, true);
                    this.isl();
                    d.vve();
                    for (var c = 0; c < b; c++) {
                        f[c].ixb(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.gjg = function() {
        var e = this.iye.rys("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.xoe() === true) {
                c.eqb(false, true);
                return true
            }
        }
        return false
    };
    this.ozo = function() {
        this.iye = new cia();
        this.iye.zij();
        this.iye.mzk("buttons");
        this.iye.mzk("displays");
        this.iye.mzk("cards")
    };
    this.qyf = function(b) {
        this.iye.eiu("collect", this.gki(b.ckc, this.parent.language.khy, this.parent.tud.dra("btn"), (!this.parent.mwk) ? this.parent.ulp.ovy : null, this.itj, b.zoc), ["buttons"]);
        this.iye.eiu("gamble", this.gki(b.hva, this.parent.language.wqw, this.parent.tud.dra("btn"), (!this.parent.mwk) ? this.parent.ulp.vzz : null, this.wqw, b.zoc), ["buttons"])
    };
    this.qlh = function(b) {
        this.iye.eiu("creditd", this.svy(b.ens, (this.parent.zmf()) ? this.parent.language.lso : this.parent.language.qqk, this.parent.fki(this.parent.qqk), "yellow", b.display), ["displays"]);
        this.iye.eiu("wind", this.svy(b.tja, this.parent.language.win, this.parent.fki(this.parent.win), "yellow", b.display), ["displays"])
    };
    this.rle = function(b) {
        this.iye.eiu("card1", this.ixd(b.axb, this.parent.tud.dra("cards"), b.rds), ["cards"]);
        this.iye.eiu("card2", this.ixd(b.cvj, this.parent.tud.dra("cards"), b.rds), ["cards"]);
        this.iye.eiu("card3", this.ixd(b.ndi, this.parent.tud.dra("cards"), b.rds), ["cards"]);
        this.iye.eiu("card4", this.ixd(b.rze, this.parent.tud.dra("cards"), b.rds), ["cards"]);
        this.iye.eiu("card5", this.ixd(b.wnf, this.parent.tud.dra("cards"), b.rds), ["cards"])
    };
    this.mso = function(b) {
        var c = new suv();
        c.zij(b.vhe.yhm, this.context2D);
        c.parent = this;
        c.zxd(b.vhe);
        this.iye.eiu("info", c)
    };
    this.ixd = function(d, e, c) {
        var b = new duk();
        b.zij(d, this.context2D);
        b.parent = this.parent;
        b.ivz = e;
        b.vsm = this.vsm;
        b.kii(this.ixg);
        b.zxd(c);
        return b
    };
    this.gki = function(e, i, g, c, f, d) {
        var b = new tpq();
        b.zij(e, this.context2D, null, g, null, i);
        b.parent = this;
        b.vve = f;
        b.zxd(d);
        if (c) {
            b.rrz = c.vql
        }
        return b
    };
    this.svy = function(c, g, f, d, b) {
        var e = new jns();
        e.zij(c, this.context2D, null, g, f);
        e.parent = this;
        e.ivz = this.parent.tud.dra("display_effect");
        e.zxd(b);
        return e
    };
    this.ahn = function(e) {
        var d = this.iye.rys("buttons");
        for (var c = 0, b = d.length; c < b; c++) {
            d[c].umq(e)
        }
    };
    this.bdw = function(e) {
        var d = this.iye.rys("cards");
        for (var c = 1, b = d.length; c < b; c++) {
            d[c].umq(e)
        }
    };
    this.qcz = function(e, c, b, d) {
        this.win = c;
        this.iye.nxn("creditd", "#xqa", [this.parent.fki(e), false]);
        this.iye.nxn("wind", "#xqa", [this.parent.fki(c), false]);
        if (d && d === true) {
            this.isl()
        }
    };
    this.wwi = function(d, b) {
        for (var c = 0; c < 5; c++) {
            this.mcd[c] = d[c]
        }
    };
    this.hsh = function(f, d) {
        var k = this.iye.szb("info")
            , j = this.iye.rys("cards");
        if (f > 0) {
            if (!d) {
                var e = vjy(this.mcd[f])
                    , c = vjy(this.mcd[0]);
                if (k) {
                    if (e > c) {
                        k.ila(this.parent.language.nuu, true)
                    } else {
                        k.ila("", true)
                    }
                }
                j[f].rou(true, this.parent.language.wem, "white", false)
            } else {
                if (k) {
                    k.ila("", true)
                }
                j[f].rou(true, "", "white", false)
            }
        } else {
            if (k) {
                k.ila("", true)
            }
        }
        j[0].rou(true, this.parent.language.mvx, "white", false);
        for (var g = 0, b = this.mcd.length; g < b; g++) {
            if (this.mcd[g] >= 0) {
                j[g].kii(sly(this.mcd[g]), false)
            } else {
                j[g].kii(this.ixg, false)
            }
        }
    };
    this.zae = function(d, b) {
        var c = this.iye.szb("info");
        if (c) {
            c.ljz(b);
            c.wrm(d, b)
        }
    };
    this.ila = function(d) {
        this.syu = [];
        for (var c = 0, b = d.length; c < b; c++) {
            this.syu[c] = d[c]
        }
    };
    this.faa = function(e) {
        var d = this.iye.rys("buttons");
        for (var c = 0, b = d.length; c < b; c++) {
            d[c].ief(e)
        }
    };
    this.lyq = function(d) {
        var f = this.iye.szb("info")
            , e = this.iye.rys("cards")
            , g = this.iye.szb("gamble");
        this.ahn(!d);
        this.faa((this.parent.state == vit.gfz.pcv.ozw || this.parent.state == vit.gfz.pcv.reh || (this.parent.state == vit.gfz.pcv.cdl && !d)));
        if (f) {
            f.ief(true)
        }
        for (var c = 0, b = e.length; c < b; c++) {
            e[c].kii(this.ixg, false);
            e[c].rou(false, "", null, false)
        }
        this.ief(true, true);
        if (!this.parent.sek && d) {
            this.ire = true;
            this.parent.uhc.syr()
        } else {
            if (!d) {
                this.ire = false;
                if (g) {
                    g.jar()
                }
                if (f) {
                    f.rih(3)
                }
                this.pwk()
            }
        }
    };
    this.omf = function(e) {
        var d = this.iye.rys("cards");
        for (var c = 0, b = this.parent.tud.enn("deal"); c < b; c++) {
            this.parent.tud.qic("deal" + c)
        }
        this.lqi = sly(e);
        for (var c = 0, b = d.length; c < b; c++) {
            d[c].kii(this.ixg, false);
            d[c].rou(false, "", null, false)
        }
        this.isl();
        setTimeout(this.fis, 400)
    };
    this.fis = function() {
        var c = a.iye.szb("card1")
            , b = a.iye.szb("info");
        a.parent.tud.jfc("deal0");
        if (c) {
            c.kii(a.lqi, true);
            c.rou(true, a.parent.language.mvx, "white", true)
        }
        if (b) {
            b.bmy();
            b.rih(0)
        }
        a.isl();
        a.bdw(true);
        a.kgd()
    };
    this.rrh = function(d, c) {
        var e = this.iye.szb("card1")
            , b = this.iye.szb("card" + (d + 1));
        this.dca = vjy(this.mcd[d]) > vjy(this.mcd[0]);
        this.erv = d;
        this.axm = c;
        this.sps = 0;
        if (e) {
            e.kii(sly(this.mcd[0]), true);
            e.rou(true, this.parent.language.mvx, "white", true)
        }
        this.parent.tud.jfc("deal" + this.sps);
        if (b) {
            b.kii(sly(this.mcd[d]), true);
            b.rou(true, this.parent.language.wem, "white", true)
        }
        this.isl();
        this.jtc = 1;
        setTimeout(this.dgm, 500)
    };
    this.dgm = function() {
        var c = a.aul
            , b = a.iye.szb("card" + (a.jtc + 1));
        if (a.jtc == 1) {
            a.ibl = new Date().getTime()
        } else {
            var d = new Date().getTime();
            c = a.aul + (a.sps * a.aul - (d - a.ibl))
        }
        if (b && !b.dhv()) {
            a.sps += 1;
            a.parent.tud.jfc("deal" + (a.sps - 1));
            b.kii(sly(a.mcd[a.jtc]), true);
            a.isl()
        } else {
            c = 0
        }
        a.jtc++;
        if (c <= 0) {
            c = 0
        }
        if (a.jtc < 5) {
            if (c == 0) {
                a.dgm()
            } else {
                setTimeout(a.dgm, c)
            }
        } else {
            setTimeout(a.ukd, a.aul)
        }
    };
    this.ukd = function() {
        var b = a.iye.szb("card" + (a.erv + 1))
            , d = a.iye.szb("info")
            , c = a.iye.szb("gamble");
        if (a.win > 0) {
            if (a.axm) {
                a.jrf()
            } else {
                if (d) {
                    d.bmy()
                }
                if (a.dca) {
                    a.parent.tud.jfc("gamblewin");
                    if (b) {
                        b.rou(true, a.parent.language.win, "yellow", true)
                    }
                    if (d) {
                        d.rih(1)
                    }
                } else {
                    if (b) {
                        b.rou(true, a.parent.language.ybh, "yellow", true)
                    }
                    if (d) {
                        d.rih(2)
                    }
                    a.pwk()
                }
                a.faa(true);
                if (c) {
                    c.jar()
                }
                a.isl()
            }
        } else {
            if (d) {
                d.bmy()
            }
            setTimeout(a.parent.fid, 1000)
        }
    };
    this.kwu = function() {};
    this.kgd = function() {
        this.audio = true;
        this.gxa = setInterval(function() {
            a.audio = !a.audio;
            if (a.audio) {
                a.parent.tud.jfc("gamble1");
                a.parent.tud.qic("gamble2")
            } else {
                a.parent.tud.jfc("gamble2");
                a.parent.tud.qic("gamble1")
            }
        }, 400)
    };
    this.pwk = function() {
        vit.iyt.tud.qic("gambleprop");
        vit.iyt.tud.jfc("gambleprop");
        vit.iyt.qtr.ahn(true)
    };
    this.xqc = function() {
        clearInterval(this.gxa);
        this.parent.tud.qic("gamble1");
        this.parent.tud.qic("gamble2")
    };
    this.itj = function() {
        a.ahn(false);
        a.iye.nxn("gamble", "#vrd");
        a.parent.tud.qic("gambleprop");
        a.parent.uhc.khy()
    };
    this.wqw = function() {
        a.ahn(false);
        a.iye.nxn("gamble", "#vrd");
        a.parent.tud.qic("gambleprop");
        if (a.ire == false) {
            a.ire = true;
            a.parent.uhc.syr()
        } else {
            a.parent.uhc.gap()
        }
    };
    this.jrf = function() {
        a.iye.nxn("info", "#bmy");
        setTimeout(a.rfz, 10)
    };
    this.rfz = function() {
        a.zwk = false;
        a.ygp = (a.parent.win > a.parent.totalBet) ? true : false;
        a.uca = 10;
        a.qfs = 0;
        a.xpj = a.parent.win;
        a.itp = a.parent.qqk - a.parent.win;
        a.sok = 0;
        a.fha = a.parent.win;
        a.ibl = new Date().getTime();
        a.qty = true;
        a.wmu = setTimeout(a.chy, a.parent.hir)
    };
    this.chy = function() {
        var b = 0
            , c = a.parent.pfa
            , d = 0;
        if (a.fha > 0) {
            if (!a.zwk) {
                a.parent.tud.qic("collect");
                a.parent.tud.jfc("collect");
                a.zwk = true
            }
            b = Math.round(a.fha / a.uca);
            a.fha -= b;
            if (a.fha < 0) {
                a.fha = 0
            }
            a.iye.nxn("wind", "#xqa", [a.parent.fki(a.xpj - (a.parent.win - a.fha)), true]);
            a.iye.nxn("creditd", "#xqa", [a.parent.fki(a.itp + (a.parent.win - a.fha)), true]);
            a.qfs++;
            a.uca -= 1;
            d = new Date().getTime();
            c = a.parent.hir + (a.qfs * a.parent.hir - (d - a.ibl));
            a.wmu = setTimeout(a.chy, c)
        } else {
            a.parent.tud.qic("collect");
            a.parent.tud.jfc("collectend");
            a.qty = false;
            clearTimeout(a.wmu);
            setTimeout(a.parent.fid, 100)
        }
    };
    this.isl = function(m, l, n, g) {
        if (!this.zeb() || !this.parent.tgx()) {
            return
        }
        var c = (m != null && l != null && n != null && g != null)
            , p = this.context2D
            , b = this.iye.rys("cards")
            , k = this.iye.rys("buttons")
            , f = this.iye.rys("displays")
            , o = this.iye.szb("info")
            , e = this.parent.tud.dra("btn_back")
            , d = 0
            , j = 0;
        p.save();
        if (c) {
            p.beginPath();
            p.rect(m, l, n, g);
            p.closePath();
            p.clip()
        }
        if (e) {
            p.drawImage(this.ivz, (this.sdg.x == 0) ? this.sdg.width : 0, this.height - e.height);
            ixy = p.createLinearGradient(this.sdg.x, this.sdg.y, this.sdg.x + this.sdg.width, this.sdg.y);
            ixy.addColorStop(0.2, this.ujz);
            ixy.addColorStop(1, this.jvo);
            p.fillStyle = ixy;
            p.save();
            if (this.parent.nof === vit.vkm.hws) {
                p.translate(this.sdg.width / 2, this.sdg.height / 2);
                p.rotate(Math.PI);
                p.translate(-this.sdg.width / 2, -this.sdg.height / 2)
            }
            p.fillRect(this.sdg.x, this.sdg.y, this.sdg.width, this.sdg.height);
            p.drawImage(e, this.sdg.x, this.sdg.y, this.sdg.width, this.sdg.height);
            p.restore()
        } else {
            p.drawImage(this.ivz, 0, 0);
            if (this.blt != null) {
                vit.gtm.ami(p, this.sdg.x, this.sdg.y, this.sdg.width, this.sdg.height, this.blt, 1)
            }
        }
        this.mvh(p);
        p.restore();
        for (d = 0, j = b.length; d < j; d++) {
            b[d].ylq(p);
            b[d].isl()
        }
        for (d = 0, j = k.length; d < j; d++) {
            k[d].isl()
        }
        o.isl();
        for (d = 0, j = f.length; d < j; d++) {
            f[d].isl()
        }
        if (this.riv && this.nxv) {
            if (c) {
                this.riv.drawImage(this.nxv, m, l, n, g, this.x + m, this.y + l, n, g)
            } else {
                this.riv.drawImage(this.nxv, this.x, this.y)
            }
        }
    };
    this.mvh = function(c) {
        var d = Math.round(this.gtb.height / this.syu.length) - 1;
        for (var e = 0, b = this.syu.length; e < b; e++) {
            vit.gtm.xwp(c, this.syu[e], this.eqn, this.gtb.x, this.gtb.y + (e) * d, this.gtb.width, this.qyx, this.dpv, this.qyx, this.yjy)
        }
    }
}
knh.prototype = new pzb;

function vhg() {
    this.ovy = {
        vql: 32
        , ojt: -1
        , value: "SPACE"
        , irm: null
    };
    this.vzz = {
        vql: 8
        , ojt: -1
        , value: "BACKSPACE"
        , irm: null
    }
}
vhg.prototype = new mkz;

function jap() {
    this.gju = [800, 800, 500, 800, 800];
    this.vgr = [1, 2, 3, 4, 5];
    this.mcu = [
        []
        , []
        , []
        , []
        , []
    ];
    this.nbg = 0;
    this.fgl = -1;
    this.dln = 0;
    this.zkt = "red";
    this.eyk = [];
    this.txo = 2;
    this.yek = function(a) {
        jap.prototype.yek.call(this, a);
        try {
            this.zkt = a.roa
        } catch (b) {
            console.error(b)
        }
    };
    this.zxd = function(a) {
        jap.prototype.zxd.call(this, a);
        try {
            this.eyk = a.tja;
            this.txo = a.guo
        } catch (b) {
            console.error(b)
        }
    };
    this.kng = function(b, j) {
        var g = b - this.x
            , f = j - this.y
            , e = this.parent.qjd.iye.szb("bet");
        for (var c = 0, a = this.eyk.length; c < a; c++) {
            var d = this.eyk[c];
            if (g >= d.x && g <= d.x + d.width && f >= d.y && f <= d.y + d.height && this.zeb() === true) {
                if (e && e.ijh() === true) {
                    if (c < 3) {
                        this.parent.ykg = this.parent.lfy() + c
                    } else {
                        if (c == 4) {
                            this.parent.ykg = this.parent.ogu()
                        } else {
                            if (this.parent.ykg < this.parent.hpx.length - 1) {
                                if (this.parent.ykg >= this.parent.ogu() - 1) {
                                    this.parent.ykg = 0;
                                    while (this.parent.ykg < this.parent.lfy() + 3) {
                                        this.parent.ykg++
                                    }
                                } else {
                                    if (this.parent.ykg < this.parent.lfy() + 3) {
                                        this.parent.ykg = this.parent.lfy() + 3
                                    } else {
                                        this.parent.ykg++
                                    }
                                }
                            } else {
                                this.parent.ykg = 0;
                                while (this.parent.ykg < this.parent.lfy() + 3) {
                                    this.parent.ykg++
                                }
                            }
                        }
                    }
                    this.parent.hly(false);
                    this.parent.qjd.iye.moq("buttons", "#ixb", [true]);
                    return true
                }
            }
        }
        return false
    };
    this.szw = function() {};
    this.zls = function() {};
    this.gjg = function() {};
    this.kot = function(f) {
        var e = 0;
        this.dln = this.parent.lfy();
        for (; e < 4; e++) {
            this.vgr[e] = this.parent.hpx[this.dln + e]
        }
        this.vgr[e] = this.parent.taj;
        for (var e = 0, b = f.length; e < b; e++) {
            this.ubz[e] = f[b - 1 - e]
        }
        for (var a = 0, d = this.vgr.length; a < d; a++) {
            for (var e = 0, c = this.ubz.length; e < c; e++) {
                if (e == 0 && a == 4) {
                    this.mcu[a][e] = this.gju[this.parent.zia] * this.vgr[a]
                } else {
                    this.mcu[a][e] = this.ubz[e] * this.vgr[a]
                }
            }
        }
    };
    this.cbc = function(c) {
        if (c < this.parent.taj && c > this.parent.hpx[this.dln + 2]) {
            this.nbg = 3;
            this.vgr[3] = c;
            for (var b = 0, a = this.ubz.length; b < a; b++) {
                this.mcu[3][b] = this.ubz[b] * this.vgr[3]
            }
        } else {
            if (c == this.parent.hpx[this.dln]) {
                this.nbg = 0
            } else {
                if (c == this.parent.hpx[this.dln + 1]) {
                    this.nbg = 1
                } else {
                    if (c == this.parent.hpx[this.dln + 2]) {
                        this.nbg = 2
                    } else {
                        if (c == this.parent.taj) {
                            this.nbg = 4
                        }
                    }
                }
            }
        }
        this.isl()
    };
    this.wps = function(a, b) {
        this.fgl = this.flj.length - a;
        if (b && b === true) {
            this.isl()
        }
    };
    this.tcu = function(a) {
        this.fgl = -1;
        if (a && a === true) {
            this.isl()
        }
    };
    this.isl = function() {
        if (!this.zeb() || !this.parent.tgx()) {
            return
        }
        var l = this.context2D
            , b = this.height - 2 * this.wla
            , a = Math.round(b / this.flj.length)
            , c = (this.qyx < a) ? this.qyx : a - 2;
        l.save();
        if (this.ivz != null) {
            l.drawImage(this.ivz, 0, 0)
        }
        vit.gtm.ami(l, this.eyk[this.nbg].x, this.eyk[this.nbg].y, this.eyk[this.nbg].width, this.eyk[this.nbg].height, this.zkt, 1);
        for (var g = 0, k = this.flj.length; g < k; g++) {
            if (g == this.fgl) {
                vit.gtm.gzk(l, this.flj[g], "white", 0, this.wla + a * (g), 200, a, this.dpv, c, this.yjy, this.wla)
            } else {
                vit.gtm.gzk(l, this.flj[g], this.eqn, 0, this.wla + a * (g), 200, a, this.dpv, c, this.yjy, this.wla)
            }
        }
        for (var g = 0, e = this.mcu.length; g < e; g++) {
            for (var f = 0, d = this.mcu[g].length; f < d; f++) {
                if ((g == 4 && f == 0) || (this.fgl == f && g == this.nbg)) {
                    vit.gtm.adt(l, this.parent.lmh(this.mcu[g][f]), "white", this.eyk[g].x, this.wla + a * (f), this.eyk[g].width, a, this.dpv, c, this.yjy, this.txo)
                } else {
                    vit.gtm.adt(l, this.parent.lmh(this.mcu[g][f]), this.eqn, this.eyk[g].x, this.wla + a * (f), this.eyk[g].width, a, this.dpv, c, this.yjy, this.txo)
                }
            }
        }
        l.restore();
        if (this.riv && this.nxv) {
            this.riv.drawImage(this.nxv, this.x, this.y)
        }
    }
}
jap.prototype = new ngi;

function gsc() {
    this.uzf = [];
    this.cpm = "verdana";
    this.gnr = "bold italic";
    this.rnv = "white";
    this.jrs = [];
    this.dgj = 12;
    this.gtb = new qlq();
    this.yek = function(a) {
        gsc.prototype.yek.call(this, a);
        try {
            this.cpm = a.hpp;
            this.gnr = a.xrf;
            this.rnv = a.djg
        } catch (b) {
            console.error(b)
        }
    };
    this.zxd = function(a) {
        gsc.prototype.zxd.call(this, a);
        try {
            this.jrs = a.wno;
            this.gtb = a.edk;
            this.dgj = a.aib
        } catch (b) {
            console.error(b)
        }
    };
    this.isl = function() {
        if (!this.zeb()) {
            return
        }
        var a = this.context2D;
        a.save();
        if (this.qch) {
            a.strokeStyle = this.qch
        }
        a.lineJoin = "round";
        a.lineCap = "round";
        a.lineWidth = this.jmp;
        a.font = this.yjy + " " + this.qyx + "px " + this.dpv;
        a.textBaseline = "bottom";
        a.drawImage(this.ivz, 0, 0);
        a.textAlign = "left";
        a.fillStyle = this.sog;
        for (var b = 0; b < this.uzf.length; b++) {
            this.tlr(this.uzf[b], this.jrs[b], this.qyx, this.dpv)
        }
        a.textAlign = "center";
        a.fillStyle = this.eqn;
        for (var b = 0; b < this.ldn.length; b++) {
            this.vis(this.ldn[b], this.cfv[b], this.qyx, this.dpv)
        }
        vit.gtm.xwp(a, vit.iyt.jkm(vit.iyt.language.hix), this.rnv, this.gtb.x, this.gtb.y, this.gtb.width, this.gtb.height, this.cpm, this.dgj, this.gnr);
        a.restore();
        if (this.riv && this.nxv) {
            this.riv.drawImage(this.nxv, this.x, this.y)
        }
    }
}
gsc.prototype = new zlz;

function ria() {
    this.xgb = "JacksOrBetter";
    this.pay = "Jacks Or Better";
    this.awr = vit.vjo.value30 + "/jacksorbetter/images/";
    this.szl = vit.vjo.value30 + "/jacksorbetter/sounds/";
    this.kjx = 9;
    this.vkr = null;
    this.xei = null;
    this.aak = [
        [1, 2, 3, 4, 6, 9, 25, 50, 250]
        , [1, 2, 3, 4, 5, 8, 25, 50, 250]
        , [1, 2, 3, 4, 5, 8, 25, 50, 250]
        , [1, 2, 3, 4, 5, 7, 25, 50, 250]
        , [1, 2, 3, 4, 5, 6, 25, 50, 250]
    ];
	gameController=this;
    this.nea = null;
    this.zro = null;
    this.ysn = null;
    this.oll = null;
    this.sma = function() {
        this.cjd = [this.language.cxz, this.language.vhc, this.language.dri, this.language.spe, this.language.rjq, this.language.jlz, this.language.fgq, this.language.mvg, this.language.bno];
        this.vsm = [-1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -1, -1, -1, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, -1, -1, -1, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 53];
        this.ixg = 63;
        this.itm("1_0_61")
    };
    this.kng = function(c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.tij) {
            return
        }
        var p = 0
            , o = 0
            , d = false
            , q = false
            , l = false
            , b = this.vxx.szb("stats")
            , r = this.vxx.szb("topb")
            , n = this.vxx.szb("topi")
            , a = this.vxx.szb("betsel")
            , k = this.vxx.szb("paytable")
            , m = this.vxx.szb("autop")
            , e = this.vxx.szb("settings");
        if (c.touches) {
            var g = c.touches[0];
            d = true;
            if (!this.qlm) {
                p = g.pageX - this.offsetLeft;
                o = g.pageY - this.offsetTop
            } else {
                p = Math.round((g.pageX - this.offsetLeft) / this.kqu);
                o = Math.round((g.pageY - this.offsetTop) / this.vav)
            }
        } else {
            if (c.which != 1) {
                return
            }
            if (!this.qlm) {
                p = c.pageX - this.offsetLeft;
                o = c.pageY - this.offsetTop
            } else {
                p = Math.round((c.pageX - this.offsetLeft) / this.kqu);
                o = Math.round((c.pageY - this.offsetTop) / this.vav)
            }
        }
        if (m && m.zeb()) {
            if (m.kng(p, o)) {
                return
            }
        }
        if (r && r.zeb()) {
            if (r.kng(p, o)) {
                clearTimeout(this.qxd);
                return
            } else {
                l = true
            }
        }
        if (a) {
            if (a.zeb()) {
                if (a.kng(p, o, d)) {
                    clearTimeout(this.qxd);
                    return
                } else {
                    q = true
                }
            }
        }
        if (l) {
            this.gzl(this.qjd.ovk(p, o, null));
            return
        } else {
            if (q) {
                if (a && a.ijh()) {
                    this.llc(this.qjd.ovk(p, o, null))
                }
                return
            }
        }
        if (e && e.zeb()) {
            if (e.kng(p, o)) {
                return
            }
        }
        if (n) {
            if (n.kng(p, o, d)) {
                return
            }
        }
        if (b && b.zeb()) {
            if (b.kng(p, o)) {
                return
            }
        }
        if (this.ird && this.ird.zeb()) {
            if (this.ird.kng(p, o)) {
                return
            }
        }
        if (this.qtr && this.qtr.zeb()) {
            if (this.qtr.kng(p, o)) {
                return
            }
        }
        if (this.qjd != null) {
            if (this.qjd.kng(p, o, q)) {
                return
            }
        }
        if (this.wwk != null) {
            for (var f = 0, j = this.wwk.length; f < j; f++) {
                if (this.wwk[f].kng(p, o)) {
                    return
                }
            }
        }
        if (k) {
            if (k.kng(p, o)) {
                return
            }
        }
    };
    this.mqd = function() {
        this.ulp = new vhg()
    };
    this.oab = function() {
        ria.prototype.oab.call(this);
        this.vom = this.aak[this.zia]
    };
    this.rpv = function() {
        this.qtr = new knh();
        this.qtr.zij(this.vkm.wqw.yhm, null, this.context2D);
        this.qtr.parent = this;
        this.qtr.ivz = this.tud.dra("g_back");
        this.qtr.ewp(this.vkm.wqw);
        this.qtr.zae(this.tyx, 0);
        this.qtr.zae(this.nea, 1);
        this.qtr.zae(this.zro, 2);
        this.qtr.zae(this.oll, 3);
        this.qtr.ila(this.ysn);
        this.qtr.yek(this.style.wqw);
        this.qtr.zxd(this.vkm.wqw);
        this.qtr.ief(false);
        var a = this.tud.lpf("gamblewin");
        if (!this.mwk && a != null) {
            a.vxa(this.qtr.pwk)
        }
    };
    this.knq = function() {
        var a = new jap();
        a.zij(this.vkm.uud.yhm, null, this.context2D);
        a.parent = this;
        a.ivz = this.tud.dra("paytable");
        a.yek(this.style.uud);
        a.zxd(this.vkm.uud);
        a.kot(this.vom);
        a.uar(this.cjd);
        this.vxx.eiu("paytable", a)
    };
    this.qcx = function() {
        this.iwy();
        this.cph();
        ria.prototype.qcx.call(this)
    };
    this.iwy = function() {
        this.vkr = new gsc();
        this.vkr.zij(this.vkm.cce.win.yhm, null, this.ird.context2D, this.tud.dra("help"));
        this.vkr.parent = this.ird;
        this.vkr.ldn[0] = this.language.whm;
        this.vkr.ldn[1] = this.language.suk;
        this.vkr.ldn[2] = this.language.ajf;
        this.vkr.ldn[3] = this.language.cuo;
        this.vkr.ldn[4] = this.language.vor;
        this.vkr.ldn[5] = this.language.xte;
        this.vkr.ldn[6] = this.language.xlo;
        this.vkr.ldn[7] = this.language.gfw;
        this.vkr.ldn[8] = this.language.met;
        this.vkr.uzf[0] = this.language.bno;
        this.vkr.uzf[1] = this.language.mvg;
        this.vkr.uzf[2] = this.language.fgq;
        this.vkr.uzf[3] = this.language.jlz;
        this.vkr.uzf[4] = this.language.rjq;
        this.vkr.uzf[5] = this.language.spe;
        this.vkr.uzf[6] = this.language.dri;
        this.vkr.uzf[7] = this.language.vhc;
        this.vkr.uzf[8] = this.language.cxz;
        this.vkr.yek(this.style.cce.win);
        this.vkr.zxd(this.vkm.cce.win);
        if (!this.vxx.szb("tops")) {
            this.ird.iqi(this.vkr)
        }
    };
    this.cph = function() {
        var a = this.vxx.szb("tops");
        if (a) {
            this.xei = new gsc();
            this.xei.zij(this.vkm.top.win.yhm, null, a.context2D, this.tud.dra("help_top"));
            this.xei.parent = a;
            this.xei.ldn[0] = this.language.whm;
            this.xei.ldn[1] = this.language.suk;
            this.xei.ldn[2] = this.language.ajf;
            this.xei.ldn[3] = this.language.cuo;
            this.xei.ldn[4] = this.language.vor;
            this.xei.ldn[5] = this.language.xte;
            this.xei.ldn[6] = this.language.xlo;
            this.xei.ldn[7] = this.language.gfw;
            this.xei.ldn[8] = this.language.met;
            this.xei.uzf[0] = this.language.bno;
            this.xei.uzf[0] = this.language.mvg;
            this.xei.uzf[0] = this.language.fgq;
            this.xei.uzf[0] = this.language.jlz;
            this.xei.uzf[0] = this.language.rjq;
            this.xei.uzf[0] = this.language.spe;
            this.xei.uzf[0] = this.language.dri;
            this.xei.uzf[0] = this.language.vhc;
            this.xei.uzf[0] = this.language.cxz;
            this.xei.yek(this.style.cce.win);
            this.xei.zxd(this.vkm.top.win);
            a.iqi(this.xei)
        }
    };
    this.vgf = function() {
        this.tyx[0] = this.language.jcs;
        this.tyx[1] = this.language.nwe;
        this.qtr.zae(this.tyx, 0);
        this.nea[0] = this.language.nuu;
        this.nea[1] = this.language.biu;
        this.qtr.zae(this.nea, 1);
        this.zro[0] = this.language.ybh;
        this.zro[1] = this.language.biu;
        this.qtr.zae(this.zro, 2);
        this.oll[0] = this.language.kcy;
        this.oll[1] = this.language.dco;
        this.qtr.zae(this.oll, 3);
        this.ysn[0] = this.language.gxq;
        this.ysn[1] = this.language.uht;
        this.ysn[2] = this.language.uum;
        this.ysn[3] = this.language.jml;
        this.qtr.ila(this.ysn);
        this.qtr.iye.nxn("creditd", "#elr", [(this.zmf()) ? this.language.lso : this.language.qqk, false]);
        this.qtr.iye.nxn("wind", "#elr", [this.language.win, false]);
        this.qtr.iye.nxn("collect", "#xqa", [this.language.khy, false]);
        this.qtr.iye.nxn("gamble", "#xqa", [this.language.wqw, false]);
        if (this.vkr != null) {
            this.vkr.ldn[0] = this.language.whm;
            this.vkr.ldn[1] = this.language.suk;
            this.vkr.ldn[2] = this.language.ajf;
            this.vkr.ldn[3] = this.language.cuo;
            this.vkr.ldn[4] = this.language.vor;
            this.vkr.ldn[5] = this.language.xte;
            this.vkr.ldn[6] = this.language.xlo;
            this.vkr.ldn[7] = this.language.gfw;
            this.vkr.ldn[8] = this.language.met;
            this.vkr.uzf[0] = this.language.bno;
            this.vkr.uzf[1] = this.language.mvg;
            this.vkr.uzf[2] = this.language.fgq;
            this.vkr.uzf[3] = this.language.jlz;
            this.vkr.uzf[4] = this.language.rjq;
            this.vkr.uzf[5] = this.language.spe;
            this.vkr.uzf[6] = this.language.dri;
            this.vkr.uzf[7] = this.language.vhc;
            this.vkr.uzf[8] = this.language.cxz
        }
        if (this.xei != null) {
            this.xei.ldn[0] = this.language.whm;
            this.xei.ldn[1] = this.language.suk;
            this.xei.ldn[2] = this.language.ajf;
            this.xei.ldn[3] = this.language.cuo;
            this.xei.ldn[4] = this.language.vor;
            this.xei.ldn[5] = this.language.xte;
            this.xei.ldn[6] = this.language.xlo;
            this.xei.ldn[7] = this.language.gfw;
            this.xei.ldn[8] = this.language.met;
            this.xei.uzf[0] = this.language.bno;
            this.xei.uzf[1] = this.language.mvg;
            this.xei.uzf[2] = this.language.fgq;
            this.xei.uzf[3] = this.language.jlz;
            this.xei.uzf[4] = this.language.rjq;
            this.xei.uzf[5] = this.language.spe;
            this.xei.uzf[6] = this.language.dri;
            this.xei.uzf[7] = this.language.vhc;
            this.xei.uzf[8] = this.language.cxz
        }
    };
    this.ugp = function() {
        this.tyx = [];
        this.tyx[0] = this.language.jcs;
        this.tyx[1] = this.language.nwe;
        this.nea = [];
        this.nea[0] = this.language.nuu;
        this.nea[1] = this.language.biu;
        this.zro = [];
        this.zro[0] = this.language.ybh;
        this.zro[1] = this.language.biu;
        this.oll = [];
        this.oll[0] = this.language.kcy;
        this.oll[1] = this.language.dco;
        this.ysn = [];
        this.ysn[0] = this.language.gxq;
        this.ysn[1] = this.language.uht;
        this.ysn[2] = this.language.uum;
        this.ysn[3] = this.language.jml
    };
    this.jxq = function() {
        if (this.vkr) {
            this.vkr.giu(this.vkm.cce.win.yhm);
            this.vkr.zxd(this.vkm.cce.win)
        }
    };
    this.ovt = function() {
        if (this.qtr) {
            this.qtr.giu(this.vkm.wqw.yhm);
            this.qtr.zxd(this.vkm.wqw)
        }
    };
    this.ybo = function() {
        ria.prototype.ybo.call(this);
        var a = this.awr + this.vkm.type + "/";
        this.tud.yoq("paytable", a + "paytable.png");
        this.tud.yoq("help_top", a + "help_top.jpg")
    };
    this.zmz = function() {
        ria.prototype.zmz.call(this);
        var a = this.szl;
        this.tud.ony("gamblewin", null, false, a + "win11");
        this.tud.ony("gamble1", null, false, a + "gamble1");
        this.tud.ony("gamble2", null, false, a + "gamble2")
    };
    this.xwh = function(b) {
        var a = this.vxx.szb("winp");
        if (a) {
            a.xqa(this.cjd[this.pmo - 1] + " " + this.language.tit + " " + this.lmh(b), false);
            a.ief(true)
        }
        this.vxx.nxn("paytable", "#wps", [this.pmo, false])
    };
    this.gpb = function(a) {
        this.vxx.nxn("winp", "#xqa", [this.cjd[this.pmo - 1] + " " + this.language.tit + " " + this.lmh(a), true])
    };
    this.jae = function() {
        this.vxx.nxn("paytable", "#tcu");
        ria.prototype.jae.call(this)
    };
    this.pje = function(a) {
        this.nof = a;
        if (a == vit.vkm.duh) {
            return new wnh()
        } else {
            if (a == vit.vkm.udd) {
                return new atk()
            } else {
                if (a == vit.vkm.qog) {
                    return new jvu()
                } else {
                    if (a == vit.vkm.rgo) {
                        return new zvs()
                    } else {
                        if (a == vit.vkm.vpj) {
                            return new hmu()
                        } else {
                            if (a == vit.vkm.ywj) {
                                return new cho()
                            } else {
                                if (a == vit.vkm.oxs) {
                                    return new wux()
                                } else {
                                    if (a == vit.vkm.ppq) {
                                        return new xni()
                                    } else {
                                        if (a == vit.vkm.gtp) {
                                            return new bgi()
                                        } else {
                                            if (a == vit.vkm.hws) {
                                                return new uwa()
                                            } else {
                                                if (a == vit.vkm.yvt) {
                                                    return new evw()
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
    this.jii = function() {
        this.style = new jcf()
    }
}
ria.prototype = new uww;

function nsx() {
    vit.htd = -1;
    vit.iyt = new ria();
    vit.iyt.zij({
        vkm: vit.vjo.value14
    });
    window.focus()
}

function ewb() {
    if (vit.iyt != null) {
        if (vit.htd >= 0) {
            clearTimeout(vit.htd)
        }
        vit.htd = setTimeout(vit.iyt.ejj, 200)
    }
}

function ccm() {
    if (vit.iyt != null) {
        if (vit.htd >= 0) {
            clearTimeout(vit.htd)
        }
        vit.htd = setTimeout(vit.iyt.aog, 200)
    }
}
if (vit.gtm.yeu()) {
    window.onorientationchange = ccm;
    window.onresize = ccm
} else {
    window.onresize = ewb
}
if (vit.vjo.value9) {
    window.onload = nsx
} else {
    nsx()
};