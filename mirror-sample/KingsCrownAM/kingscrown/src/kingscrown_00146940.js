
var gameController;
var gameWS=new WebSocket(serverString);

 /*------WS ADDON--------*/
        
        
        
       
        setInterval(function(){
		//
		var j='A/u350,0';
		var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"KingsCrownAM"}';j=tmpPar;
		gameWS.send(j);	
		},5000);
		
		
		gameWS.onmessage=function(k){
		
		var tmpMess=k.data.split("#");
		
			if(tmpMess[0]=='UPDATE' && gameController.win<=0 && gameController.mho.bco!=undefined){
			
			if(gameController.frd!=parseInt(tmpMess[1])){
				
			gameController.saw=parseInt(tmpMess[1]);	
			gameController.frd=parseInt(tmpMess[1]);	
			gameController.mho.bco.psl("creditd", "#gtw", [gameController.qzz(tmpMess[1]), true]);	
				
			}
			
			
			
			
			
			}	
			
		}
		
		/*--------------*/

/////////////////


function bvb() {
    this.dvy = "Info";
    this.wdz = "DEPOSIT";
    this.audio = "AUDIO";
    this.utq = "TIP";
    this.qhe = "TURBO";
    this.fpm = "STATISTIC";
    this.eps = "HISTORY";
    this.bxp = "SHORTCUTS";
    this.fye = "HELP";
    this.cfr = "PAYTABLE";
    this.language = "LANGUAGE";
    this.zjf = ">>";
    this.ydg = "<<";
    this.nvl = "Fullscreen is not supported!"
}

function ahx() {
    this.kpo = "MINIMUM BET IS";
    this.teu = "MAX BET";
    this.qco = "MIN.BET";
    this.jqf = "MAX.BET";
    this.lpn = "BET";
    this.start = "START";
    this.fye = "HELP";
    this.cfr = "PAYTABLE";
    this.biy = "MENU";
    this.fyx = "MORE|GAMES";
    this.qbk = "STOP";
    this.saw = "CREDIT";
    this.dhz = "GAME OVER";
    this.fhk = "WINNER!";
    this.ymt = "GOOD LUCK!";
    this.win = "WIN";
    this.irp = "LAST WIN";
    this.rrl = "COLLECT";
    this.hsr = "COLLECT";
    this.ott = "GAMBLE";
    this.lmc = "AUTO|START";
    this.ivq = "HALF|GAMBLE";
    this.zxe = "EXIT";
    this.afs = "START GAME";
    this.evb = "CHOOSE BET";
    this.ikx = "HALF";
    this.ret = "RETURN|TO GAME";
    this.bho = "Total Win";
    this.hmz = "Warning";
    this.ndq = "TOTAL";
    this.kgx = "PLEASE WAIT ...";
    this.blt = "More Games";
    this.qhe = "SPEED";
    this.qky = "Malfunction voids all pays and plays.";
    this.zrd = "C O N T I N U E";
    this.voa = "AUTOSTART";
    this.dve = "PAYTABLE";
    this.pch = "GAMBLE";
    this.left = "LEFT";
    this.gqz = "RIGHT";
    this.ok = "OK";
    this.wtk = "CANCEL";
    this.xcr = "Gamble";
    this.hfk = "Half";
    this.fcm = "GAME RULES";
    this.odp = "GAME RULES";
    this.sif = "Bonus!";
    this.qni = "BONUS";
    this.mmv = "PRESS ANY KEY TO CONTINUE";
    this.awn = "NOT ENOUGH CREDIT!";
    this.udc = "wins";
    this.axc = "V A L U E";
    this.of = "OF";
    this.jxo = "TOUCH THE SCREEN TO CONTINUE";
    this.sxl = "LOADING ...";
    this.vhg = "LOADING HISTORY ...";
    this.bbu = "Communication Error";
    this.gpq = "You have reached one of the limits!";
    this.ofl = "You have reached the maximum amount of free games!";
    this.zhs = "Game will be closed";
    this.kab = "Game will be restarted";
    this.txm = "WON";
    this.error = "ERROR";
    this.cii = "FREEPLAY";
    this.wqq = "AUTO";
    this.mxr = "GAME ID";
    this.vtj = "Playing Time";
    this.fuv = "last";
    this.qju = "games";
    this.wdz = "DEPOSIT";
    this.audio = "AUDIO";
    this.fmz = "MUSIC";
    this.xws = "FULLSCREEN";
    this.bkk = "FULLSCREEN";
    this.language = "LANGUAGE";
    this.tzw = "Do not show again";
    this.iai = "Sounds can not be loaded!";
    this.vid = "Resources missing!";
    this.hhy = "Play without sound?";
    this.pve = "SETTINGS";
    this.pfy = "Please turn your device!";
    this.dvy = "INFO";
    this.cag = "Please disable PRIVATE MODE in your browser to play the game.";
    this.kfp = "This game is optimized for Google Chrome.";
    this.lsv = "Please use the current version of";
    this.dax = "Unfortunately this browser is not fully supported.";
    this.opm = "This game can not be started in freeplay mode!";
    this.bfp = "Turn your device to the portrait mode to play like on a real slot machine!";
    this.czh = "Adjust the game interface to your needs!";
    this.gpe = "SELECT THE CORRECT COLOR TO DOUBLE THE WIN";
    this.jzc = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.lmg = "GAMBLE FOR A CHANCE TO INCREASE THE WIN";
    this.fpm = "Statistic";
    this.xeo = "Total Games";
    this.avu = "Total Bets";
    this.ser = "Total Wins";
    this.mem = "Total Play Time";
    this.bju = "I have read this message";
    this.nqx = "EXIT|GAME";
    this.eps = "History";
    this.hgc = "No games played.";
    this.state = "STATE";
    this.sap = "Main Game";
    this.osk = "Auto Collected";
    this.zbw = "Collected";
    this.lvr = "Bonusspins";
    this.apf = "Respin";
    this.gzt = "Bonus";
    this.ksf = "First Deal";
    this.zwi = "Second Deal";
    this.xhf = "Third Deal";
    this.omz = "AUTOSTART SETTINGS";
    this.iwh = "Amount of games:";
    this.kdr = "Stop autostart";
    this.eow = "Credit lower than:";
    this.vhy = "Credit higher than:";
    this.hyy = "Win higher than:";
    this.fpi = "The autostart will be stopped at the beginning of the bonus.";
    this.cey = "Share on Facebook";
    this.vkk = "FOR MORE INFORMATION, SEE THE GAME RULES.";
    this.xiv = "Reality Check";
    this.nfc = "You have requested a Reality Check.";
    this.cvz = "Press HISTORY to view your game history.";
    this.mbe = "Game break";
    this.xyi = "Game limits";
    this.dxg = "Self test";
    this.pda = "THE THEORETICAL RETURN TO THE PLAYER FOR THIS GAME IS XY."
}
ahx.prototype = new bvb;

function tcb() {
    this.kpo = "МИНИМАЛЬНАЯ СТАВКА -";
    this.teu = "МАКС.|СТАВКА";
    this.qco = "МИН.СТAВКА";
    this.jqf = "МАКС.СТAВКА";
    this.lpn = "СТАВКА";
    this.start = "СТАРТ";
    this.fye = "ПОМОЩЬ";
    this.cfr = "ТАБЛИЦА ВЫПЛАТ";
    this.biy = "МЕНЮ";
    this.fyx = "ДРУГИЕ|ИГРЫ";
    this.qbk = "СТОП";
    this.saw = "КРЕДИТ";
    this.dhz = "КОНЕЦ ИГРЫ";
    this.fhk = "ПОБЕДИТЕЛЬ!";
    this.ymt = "ЖЕЛАЕМ УДАЧИ!";
    this.win = "ВЫИГРЫШ";
    this.irp = "ПОСЛЕД. ВЫИГРЫШ";
    this.udc = "выйгрыши";
    this.rrl = "ЗАБРАТЬ|ВЫИГРЫШ";
    this.hsr = "ЗАБРАТЬ ВЫИГРЫШ";
    this.ott = "ИГРА|НА|РИСК";
    this.lmc = "АВТО|ИГРА";
    this.ivq = "УМЕНЬШИТЬ|РИСК";
    this.of = "ВЫКЛ.";
    this.zxe = "ВЫХОД";
    this.afs = "НАЖМИТЕ СТАРТ";
    this.evb = "ВЫБЕРИТЕ СТАВКУ";
    this.ikx = "ВЗЯТЬ|1/2";
    this.mmv = "НАЖМИ ЛЮБУЮ КЛАВИШУ, ЧТОБЫ ПРОДОЛЖИТЬ";
    this.jxo = "ПРИКОСНИТЕСЬ К ЭКРАНУ ДЛЯ ПРОДОЛЖЕНИЯ";
    this.ret = "ОБРАТНО|В ГЛАВНУЮ|ИГРУ";
    this.ogj = "Множитель для Бонуса";
    this.dls = "БОНУС СТАРТ ВЫИГРЫШ:";
    this.bho = "ОБЩИЙ ВЫИГРЫШ";
    this.sxl = "Загрузка ...";
    this.vhg = "Загрузка Истории ...";
    this.error = "ОШИБКА";
    this.awn = "НЕ ДОСТАТОЧНО КРЕДИТА.";
    this.gpq = "Достигнут один из лимитов!";
    this.hmz = "Внимание";
    this.bbu = "ошибка обмена данных";
    this.ofl = "Вы получили максимальное количество свободных игр!";
    this.zhs = "Игра заканчивается";
    this.kab = "Игра начинается заново";
    this.sif = "Бонус!";
    this.qni = "БОНУС";
    this.txm = "ВЫИГРЫШ";
    this.ndq = "ВСЕГО";
    this.kgx = "Пожалуйста подождите ...";
    this.error = "ОШИБКА";
    this.cii = "FREEPLAY";
    this.blt = "ВЫБОР ИГРЫ";
    this.mxr = "GAME ID";
    this.vtj = "Playing Time";
    this.fuv = "последняя";
    this.qju = "игры";
    this.wdz = "ДЕПОЗИТ";
    this.audio = "Звук";
    this.fmz = "МУЗЫКА";
    this.qhe = "СКОРОСТЬ";
    this.xws = "ПОЛНОЭКРАННЫЙ";
    this.bkk = "ПОЛНОЭКРАННЫЙ";
    this.language = "ЯЗЫК";
    this.qky = "ПРИ НЕИСПРАВНОСТИ ВСЕ ИГРЫ И ВЫИГРЫШИ АННУЛИРУЮТСЯ.";
    this.zrd = "П Р О Д О Л Ж И Т Ь";
    this.tzw = "Больше не показывать";
    this.voa = "АВТОИГРА";
    this.dve = "ТАБЛИЦА ВЫПЛАТ";
    this.pch = "ИГРА НА РИСК";
    this.iai = "Звук не загружается!";
    this.vid = "Ресурсы отсутствуют!";
    this.hhy = "Играть без звука?";
    this.pve = "НАСТРОЙКА";
    this.pfy = "Поверните, пожалуйста, ваше устройство!";
    this.left = "ЛЕВО";
    this.gqz = "ПРАВО";
    this.wqq = "АВТО";
    this.axc = "V A L U E";
    this.dvy = "ИНФОРМАЦИЯ";
    this.cag = "Выключите, пожалуйста, ЧАСТНЫЙ РЕЖИМ в браузере,чтобы начать игру.";
    this.kfp = "Настоящая игра оптимизирована для Google Chrome.";
    this.lsv = "Используйте, пожалуйста, актуальную версию";
    this.dax = "К сожалению нет полной поддержки браузера.";
    this.opm = "Запуск этой игры в режиме свободных игр невозможен!";
    this.bfp = "Поверните прибор в положение портретного режима для игры как на настоящем игральном автомате!";
    this.czh = "Приспособь интерфейс к своим потребностям!";
    this.vkk = "ДОПОЛНИТЕЛЬНУЮ ИНФОРМАЦИЮ ВЫ МОЖЕТЕ ПОЛУЧИТЬ В ПРАВИЛАХ ИГРЫ.";
    this.xiv = "Проверку реальности";
    this.nfc = "Вы запросили проверку реальности.";
    this.cvz = "Нажмите ИСТОРИЯ, чтобы посмотреть свою историю игры.";
    this.mbe = "Game break";
    this.xyi = "Game limits";
    this.dxg = "Self test";
    this.fcm = "ПРАВИЛА ИГРЫ";
    this.odp = "ПРАВИЛА ИГРЫ";
    this.gpe = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УДВОИТЬ ВЫИГРЫШ";
    this.jzc = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ В 4 РАЗА.";
    this.lmg = "СТАВЬТЕ НА РИСК, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ.";
    this.fpm = "Статус";
    this.xeo = "количество игр";
    this.avu = "вся ставка";
    this.ser = "общий выигрыш";
    this.mem = "общее время игры";
    this.bju = "Я сообщение прочитал.";
    this.nqx = "ИГРУ|ЗАКОНЧИТЬ";
    this.ok = "OK";
    this.eps = "История";
    this.hgc = "нет истории.";
    this.state = "STATE";
    this.sap = "Main Game";
    this.osk = "Auto Collected";
    this.zbw = "Collected";
    this.lvr = "Bonusspins";
    this.xcr = "Gamble";
    this.hfk = "Half";
    this.apf = "Respin";
    this.gzt = "Bonus";
    this.ksf = "First Deal";
    this.zwi = "Second Deal";
    this.xhf = "Third Deal";
    this.wtk = "ИЗМЕНИТЬ";
    this.omz = "НАСТРОЙКА АВТОСТАРТА";
    this.iwh = "Количество игр:";
    this.kdr = "Автостарт остановить";
    this.eow = "Кредит ниже, чем:";
    this.vhy = "Кредит выше, чем:";
    this.hyy = "Выигрыш выше, чем:";
    this.fpi = "Автостарт прерывается, если начинается бонусная игра.";
    this.cey = "Поделись в фейсбук";
    this.pda = "ТЕОРЕТИЧЕСКАЯ ВЫПЛАТА ИГРОКУ СОСТАВЛЯЕТ В ЭТОЙ ИГРЕ XY."
}
tcb.prototype = new bvb;

function uaw() {
    this.kpo = "APUESTA MINIMA ES";
    this.teu = "APUESTA|MAXIMA";
    this.qco = "APUESTA MIN.";
    this.jqf = "APUESTA MAX.";
    this.lpn = "APUESTA";
    this.start = "START";
    this.fye = "AYUDA";
    this.cfr = "PLAN DE|GANANCIAS";
    this.biy = "MENU";
    this.fyx = "MAS|JUEGOS";
    this.qbk = "PARADA";
    this.saw = "CREDITOS";
    this.dhz = "FIN DEL JUEGO";
    this.fhk = "¡GANADOR!";
    this.ymt = "¡MUCHA SUERTE!";
    this.win = "PREMIO";
    this.irp = "ULTIMOS PREMIO";
    this.udc = "gana";
    this.rrl = "COBRAR";
    this.hsr = "COBRAR";
    this.ott = "RIESGO";
    this.lmc = "AUTO|START";
    this.ivq = "MEDIA|APUESTA";
    this.of = "DE";
    this.zxe = "SALIR";
    this.afs = "¡PULSE START!";
    this.evb = "ELIJA SU APUESTA";
    this.ikx = "MITAD";
    this.mmv = "PULSE UNA TECLA PARA CONTINUAR";
    this.jxo = "TOCAR LA PANTALLA PARA CONTINUAR";
    this.ret = "VOLVER|AL JUEGO";
    this.bho = "Premio total";
    this.sxl = "CARGANDO ...";
    this.vhg = "CARGANDO HISTORIAL ...";
    this.awn = "No hay bastante CREDITO";
    this.gpq = "¡Ha alcanzado uno de los limites!";
    this.hmz = "Advertencia";
    this.bbu = "Error de comunicación";
    this.ofl = "¡Ha alcanzado la máxima cantidad de juegos gratis!";
    this.zhs = "El juego se cerrará";
    this.kab = "El juego se reiniciará";
    this.sif = "¡BONUS!";
    this.qni = "BONUS";
    this.txm = "GANADO";
    this.ndq = "TOTAL";
    this.piz = "TURBO SI";
    this.nlw = "TURBO NO";
    this.kgx = "POR FAVOR ESPERE ...";
    this.error = "ERROR";
    this.cii = "FREEPLAY";
    this.blt = "MAS JUEGOS";
    this.mxr = "ID DE JUEGO";
    this.vtj = "Playing Time";
    this.fuv = "ultimos";
    this.qju = "juegos";
    this.wdz = "DEPÓSITO";
    this.audio = "AUDIO";
    this.fmz = "MÚSICA";
    this.qhe = "VELOCIDAD";
    this.xws = "PANTALLA COMPLETA";
    this.bkk = "PANTALLA|COMPLETA";
    this.language = "IDIOMA";
    this.qky = "UN MAL FUNCIONAMIENTO ANULA TODA JUGADA Y TODO PAGO.";
    this.zrd = "A D E L A N T E";
    this.tzw = "No mostrar de nuevo";
    this.voa = "AUTOSTART";
    this.dve = "PLAN DE GANANCIAS";
    this.pch = "RIESGO";
    this.iai = "No se pueden cargar los sonidos.";
    this.vid = "Faltan recursos.";
    this.hhy = "¿Jugar sin sonido?";
    this.pve = "AJUSTES";
    this.axc = "V A L U E";
    this.pfy = "¡Encienda su dispositivo!";
    this.left = "IZQUIERDA";
    this.gqz = "DERECHA";
    this.wqq = "AUTOMÁTICO";
    this.dvy = "INFORMACIÓN";
    this.cag = "Desactive el MODO PRIVADO en su explorador para jugar el juego.";
    this.kfp = "Este juego está optimizado para Google Chrome.";
    this.lsv = "Use la versión actual de";
    this.dax = "Desafortunadamente, este explorador no es compatible.";
    this.opm = "¡Este juego no puede iniciarse en modo de juego libre!";
    this.bfp = "¡Gire el dispositivo a posición vertical como en la máquina tragamonedas real!";
    this.czh = "¡Ajuste la interfaz del juego a sus necesidades!";
    this.vkk = "PARA MÁS INFORMACIÓN MIRE LAS REGLAS DEL JUEGO.";
    this.xiv = "Reality Check";
    this.nfc = "Has solicitado un Reality Check.";
    this.cvz = "Pulsa HISTORIAL para visualizar tu historial de juego.";
    this.mbe = "Game break";
    this.xyi = "Game limits";
    this.dxg = "Self test";
    this.fcm = "REGLAS DEL JUEGO";
    this.odp = "REGLAS|DEL JUEGO";
    this.gpe = "SELECCIONAR EL COLOR CORRECTO PARA DOBLAR EL PREMIO";
    this.jzc = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.lmg = "JUGAR UNA POSIBILIDAD DE MULTIPLICAR LA GANANCIA";
    this.fpm = "ESTADO";
    this.xeo = "Número de juegos";
    this.avu = "Apuesta total";
    this.ser = "Ganancia total";
    this.mem = "Tiempo total de juego";
    this.bju = "He leído el mensaje.";
    this.nqx = "TERMINAR|JUEGO";
    this.ok = "OK";
    this.eps = "HISTORIAL";
    this.hgc = "Aún no hay juegos.";
    this.state = "Estado";
    this.sap = "Juego principal";
    this.osk = "Ganancia automática";
    this.zbw = "Ganancia";
    this.lvr = "BONUSSPINS";
    this.xcr = "Apuesta";
    this.hfk = "Mitad";
    this.apf = "Respin";
    this.gzt = "Bonus";
    this.ksf = "Primera mano";
    this.zwi = "Segunda mano";
    this.xhf = "Tercera mano";
    this.wtk = "CANCELAR";
    this.omz = "CONFIGURACIONES DE AUTOSTART";
    this.iwh = "Cantidad de juegos:";
    this.kdr = "Detener Autostart";
    this.eow = "Crédito menor que:";
    this.vhy = "Crédito mayor que:";
    this.hyy = "Ganancia mayor que:";
    this.fpi = "El Autostart se detendrá al principio del bonus.";
    this.cey = "Compartir en Facebook";
    this.pda = "EL PORCENTAJE TEÓRICO DE DEVOLUCIÓN AL JUGADOR PARA ESTE JUEGO ES XY."
}
uaw.prototype = new bvb;

function kai() {
    this.kpo = "MINIMALER EINSATZ IST";
    this.teu = "MAX. EINSATZ";
    this.qco = "MIN. EINSATZ";
    this.jqf = "MAX. EINSATZ";
    this.lpn = "EINSATZ";
    this.start = "START";
    this.fye = "HILFE";
    this.cfr = "GEWINNPLAN";
    this.biy = "MENÜ";
    this.fyx = "MEHR|SPIELE";
    this.saw = "KREDIT";
    this.dhz = "SPIEL ENDE";
    this.fhk = "GEWINNER!";
    this.ymt = "VIEL GLÜCK!";
    this.win = "GEWINN";
    this.irp = "LETZTER GEWINN";
    this.udc = "gewinnt";
    this.rrl = "NEHMEN";
    this.hsr = "NEHMEN";
    this.ott = "RISIKO";
    this.lmc = "AUTO|START";
    this.ivq = "HALF|GAMBLE";
    this.qbk = "STOP";
    this.of = "VON";
    this.zxe = "EXIT";
    this.afs = "START DRÜCKEN";
    this.evb = "EINSATZ WÄHLEN";
    this.ikx = "TEILEN";
    this.mmv = "DRÜCKE EINE TASTE UM FORTZUFAHREN";
    this.jxo = "BERÜHRE DEN BILDSCHIRM UM FORTZUFAHREN";
    this.ret = "ZURÜCK|ZUM SPIEL";
    this.bho = "Gesamt Gewinn";
    this.sxl = "LÄDT ...";
    this.vhg = "LÄDT HISTORIE ...";
    this.awn = "NICHT GENUG KREDIT!";
    this.hmz = "Achtung";
    this.bbu = "Kommunikationsfehler";
    this.gpq = "Sie haben eines der Limits erreicht!";
    this.ofl = "Sie haben die maximale Anzahl an Freispielen erreicht!";
    this.zhs = "Das Spiel wird beendet";
    this.kab = "Das Spiel wird neu gestartet";
    this.sif = "Bonus!";
    this.qni = "BONUS";
    this.txm = "GEWONNEN";
    this.ndq = "TOTAL";
    this.kgx = "BITTE WARTEN ...";
    this.error = "FEHLER";
    this.cii = "FREEPLAY";
    this.blt = "MEHR|SPIELE";
    this.mxr = "SPIEL ID";
    this.vtj = "Spielzeit";
    this.fuv = "Letzten";
    this.qju = "Spiele";
    this.wdz = "GUTHABEN";
    this.audio = "AUDIO";
    this.fmz = "MUSIK";
    this.qhe = "SPEED";
    this.xws = "VOLLBILD";
    this.bkk = "VOLLBILD";
    this.language = "SPRACHE";
    this.qky = "Bei Gerätestörung keine Haftung.";
    this.zrd = "W E I T E R";
    this.tzw = "Nicht noch einmal anzeigen";
    this.voa = "AUTOSTART";
    this.pch = "RISIKO";
    this.dve = "GEWINNPLAN";
    this.iai = "Sounds können nicht geladen werden!";
    this.vid = "Ressourcen fehlen!";
    this.hhy = "Ohne Ton spielen?";
    this.pve = "EINSTELL.";
    this.pfy = "Bitte drehen sie ihr Gerät!";
    this.left = "LINKS";
    this.gqz = "RECHTS";
    this.wqq = "AUTOM.";
    this.axc = "V A L U E";
    this.dvy = "INFO";
    this.cag = "Bitte deaktivieren sie den PRIVATEN MODUS im Browser um das Spiel zu starten";
    this.kfp = "Dieses Spiel ist optimiert für Google Chrome.";
    this.lsv = "Bitte benutzen sie die aktuelle Version von";
    this.dax = "Leider wird dieser Browser nicht unterstützt.";
    this.opm = "Dieses Spiel kann nicht im Freispiel-Modus gestartet werden!";
    this.bfp = "Drehen sie ihr Gerät in den Portraitmodus, um wie auf einem echten Automaten zu spielen!";
    this.czh = "Passe die Spieloberfläche deinen Bedürfnissen an!";
    this.vkk = "ZUSÄTZLICHE INFORMATION FINDEN SIE IN DEN SPIELREGELN.";
    this.xiv = "Reality Check";
    this.nfc = "Du hast einen Reality Check angefordert.";
    this.cvz = "Drücke HISTORIE um deine Spielhistorie anzuzeigen.";
    this.mbe = "Spielpause";
    this.xyi = "Spiellimits";
    this.dxg = "Selbsttest";
    this.fcm = "SPIELREGELN";
    this.odp = "SPIELREGELN";
    this.gpe = "WÄHLE DIE RICHTIGE FARBE UM DEN GEWINN ZU VERDOPPELN";
    this.jzc = "WÄHLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.lmg = "DRÜCKE RISIKO FÜR EINE CHANCE DEN GEWINN ZU VERVIELFACHEN";
    this.fpm = "Statistik";
    this.xeo = "Anzahl der Spiele";
    this.avu = "Gesamteinsatz";
    this.ser = "Gesamtgewinn";
    this.mem = "Gesamtspielzeit";
    this.bju = "Ich habe die Nachricht gelesen";
    this.nqx = "SPIEL|BEENDEN";
    this.ok = "OK";
    this.eps = "Historie";
    this.hgc = "Es existieren noch keine Spiele.";
    this.state = "STATUS";
    this.sap = "Hauptspiel";
    this.osk = "Auto. Nehmen";
    this.zbw = "Genommen";
    this.lvr = "Bonusspins";
    this.xcr = "Risiko";
    this.hfk = "Halb";
    this.apf = "Respin";
    this.gzt = "Bonus";
    this.ksf = "Erster Deal";
    this.zwi = "Zweiter Deal";
    this.xhf = "Dritter Deal";
    this.wtk = "ABBRUCH";
    this.omz = "AUTOSTART EINSTELLUNGEN";
    this.iwh = "Anzahl der Spiele: ";
    this.kdr = "Autostart anhalten";
    this.eow = "Kredit niedriger als:";
    this.vhy = "Kredit höher als:";
    this.hyy = "Gewinn höher als:";
    this.fpi = "Der Autostart wird am Bonusbeginn gestoppt.";
    this.cey = "Auf Facebook teilen";
    this.pda = "DIE THEORETISCHE AUSZAHLUNG AN DEN SPIELER FÜR DIESES SPIEL BETRÄGT XY."
}
kai.prototype = new bvb;

function yoh() {
    this.kpo = "MINIMUM BANKO";
    this.teu = "MAKS. BANKO";
    this.qco = "MIN. BANKO";
    this.jqf = "MAKS. BANKO";
    this.lpn = "BANKO";
    this.start = "BAŞLAT";
    this.fye = "YARDIM";
    this.cfr = "Kazanç planı";
    this.biy = "MENÜ";
    this.fyx = "DAHA ÇOK|OYUN";
    this.qbk = "DUR";
    this.saw = "KREDI";
    this.dhz = "OYUN BİTTİ";
    this.fhk = "KAZANDINIZ!";
    this.ymt = "BOL ŞANSLAR!";
    this.win = "KAZANÇ";
    this.irp = "SON KAZANÇ";
    this.udc = "kazanır";
    this.rrl = "ALMAK";
    this.hsr = "ALMAK";
    this.ott = "RIZIKO";
    this.lmc = "OTOMATİK|BAŞLATMA";
    this.ivq = "YARI|RIZIKO";
    this.of = "VEREN";
    this.zxe = "ÇIKIŞ";
    this.afs = "BAŞLAT TUŞUNA BASINIZ";
    this.evb = "BANKO SEÇİNİZ";
    this.ikx = "ALMAK|1/2";
    this.mmv = "DEVAM ETMEK IÇIN KLAVYEDE HER HANGI BIR YERE BASINIZ";
    this.jxo = "DEVAM ETMEK İÇİN EKRANA DOKUN";
    this.ret = "OYUNA|GERI";
    this.bho = "Toplam kazanç";
    this.sxl = "YÜKLÜYOR ...";
    this.vhg = "GEÇMIŞI YÜKLÜYOR ...";
    this.awn = "YETERSİZ KREDİ.";
    this.gpq = "Limitlerin birine ulaştınız!";
    this.hmz = "Dikkat";
    this.bbu = "İletişim hatası";
    this.ofl = "Maksimum bedava oyun sayısına ulaşmış bulunuyorsunuz!";
    this.zhs = "Oyun sonlandırılıyor";
    this.kab = "Oyun yeniden başlatılıyor";
    this.sif = "Bedava oyun primi!";
    this.qni = "PRİM";
    this.txm = "KAZANDINIZ";
    this.ndq = "TOPLAM";
    this.kgx = "LÜTFEN BEKLEYIN ...";
    this.error = "HATA";
    this.cii = "FREEPLAY";
    this.blt = "DAHA ÇOK OYUN";
    this.mxr = "OYUN ID";
    this.vtj = "OYUN SÜRESİ";
    this.fuv = "Son";
    this.qju = "oyun";
    this.wdz = "BAKIYE";
    this.audio = "AUDIO";
    this.fmz = "MÜZIK";
    this.qhe = "HıZ";
    this.xws = "TAM EKRAN";
    this.bkk = "TAM EKRAN";
    this.language = "LISAN";
    this.qky = "CIHAZ ARIZALANDIĞINDA MESULIYET KABUL EDILMEZ.";
    this.zrd = "İ L E R I";
    this.tzw = "Tekrar gösterme";
    this.voa = "OTOMATİK|BAŞLATMA";
    this.pch = "RIZIKO";
    this.dve = "Kazanç planı";
    this.iai = "Sesler yüklenemiyorlar!";
    this.vid = "Kaynaklar eksik!";
    this.hhy = "Sessiz oynayacak mısınız?";
    this.pve = "AYARLAR";
    this.pfy = "Lütfen cihazınını döndürün!";
    this.left = "SOL";
    this.gqz = "SAĞ";
    this.wqq = "OTOMATIK";
    this.axc = "V A L U E";
    this.dvy = "BILGI";
    this.cag = "Oyunu başlatmak için lütfen ağ tarayıcınızda ÖZEL MOD'u kapatınız.";
    this.kfp = "Bu oyun Google Chrome için optimize edilmiştir.";
    this.lsv = "'nin güncel versiyonunu kullanın";
    this.dax = "Maalesef bu ağ tarayıcısı tam olarak desteklenmiyor.";
    this.opm = "Bu oyunun serbest modunda başlatılması mümkün değildir!";
    this.bfp = "Cihazınızı portre moduna çevirerek gerçek bir otomatikte oynar gibi oynayın!";
    this.czh = "Oyun yüzeyini kendi ihtiyaçlarına göre düzenle!";
    this.vkk = "DAHA FAZLA BİLGİYİ OYUN KURALLARINDA BULABİLİRSİNİZ.";
    this.xiv = "Reality Check";
    this.nfc = "Reality Check talebinde bulundun.";
    this.cvz = "Oyun geçmişini görmek için GEÇMİŞ tuşuna bas.";
    this.mbe = "Game break";
    this.xyi = "Game limits";
    this.dxg = "Self test";
    this.fcm = "OYUNUN KURALLARı";
    this.odp = "OYUNUN|KURALLARı";
    this.gpe = "DOĞRU RENGİ SEÇEREK KAZANCININ İKİYE KATLARSIN";
    this.jzc = "DOĞRU KART RENGİNİ SEÇEREK KAZANCINI DÖRDE KATLARSIN.";
    this.lmg = "KAZANCI KATLAMA ŞANSI İÇİN GAMBLE (RİSK)";
    this.fpm = "İstatistik";
    this.xeo = "Toplam oyunlar";
    this.avu = "Toplam bankolar";
    this.ser = "Toplam kazançlar";
    this.mem = "Toplam oyun süresi";
    this.bju = "Bu mesajı okudum.";
    this.nqx = "OYUNU|KAPAT";
    this.ok = "OK";
    this.eps = "GEÇMİŞ";
    this.hgc = "Henüz hiç bir oyun yok.";
    this.state = "STATÜ";
    this.sap = "Ana oyun";
    this.osk = "Otomatik olarak kazandınız";
    this.zbw = "Toplandı";
    this.lvr = "Prim oyunlar";
    this.xcr = "Riziko";
    this.hfk = "Yarım";
    this.apf = "Respin";
    this.gzt = "Prim";
    this.ksf = "İlk anlaşma";
    this.zwi = "İkinci anlaşma";
    this.xhf = "Üçüncü anlaşma";
    this.wtk = "İPTAL";
    this.omz = "OTOMATIK BAŞLAT AYARLARı";
    this.iwh = "Oyun sayısı:";
    this.kdr = "Otomatik başlatmayı durdur";
    this.eow = "Kredi bundan düşüktür:";
    this.vhy = "Kredi bundan yüksektir:";
    this.hyy = "Kazanç bundan yüksektir:";
    this.fpi = "Otomatik başlatma prim başlangıcında durduruluyor.";
    this.cey = "Facebook'ta paylaş";
    this.pda = "OYUNCUYA TEORIK OLARAK ÖDENECEK MEBLAĞ % XY ORANıNDADıR."
}
yoh.prototype = new bvb;

function rbx() {
    this.kpo = "MINIMÁLNÍ SÁZKA JE";
    this.teu = "MAX. SÁZKA";
    this.qco = "MIN. SÁZKA";
    this.jqf = "MAX. SÁZKA";
    this.lpn = "SÁZKA";
    this.start = "START";
    this.fye = "POMOC";
    this.cfr = "VÝHERNÍ PLÁN";
    this.biy = "MENU";
    this.fyx = "DALŠÍ|HRY";
    this.qbk = "STOP";
    this.saw = "KREDIT";
    this.dhz = "KONEC HRY";
    this.fhk = "VÍTEZ!";
    this.ymt = "HODNE ŠTESTÍ!";
    this.win = "VÝHRA";
    this.irp = "POSL. VÝHRA";
    this.udc = "vyhrává";
    this.rrl = "VEZMI";
    this.hsr = "VEZMI";
    this.ott = "HRA";
    this.lmc = "AUTO|START";
    this.ivq = "POLOVICNÍ|HRA";
    this.of = "Z";
    this.zxe = "VÝSTUP";
    this.afs = "START HRY";
    this.evb = "VYBRAT SÁZKU";
    this.ikx = "POLOVINA";
    this.mmv = "POKRACUJ DOTEKEM OBRAZOVKY";
    this.jxo = "PRO POKRAČOVÁNÍ SE DOTKNĚTE OBRAZOVKY";
    this.ret = "ZPET|DO HRY";
    this.bho = "Celková výhra";
    this.sxl = "NAHRÁVÁM ...";
    this.vhg = "NAHRÁVÁM HISTORII ...";
    this.awn = "Nedostatecný kredit.";
    this.gpq = "Dosáhli jste jednoho z limitů!";
    this.hmz = "Varování";
    this.bbu = "Chyba komunikace";
    this.ofl = "Dosáhli jste maximálního počtu her zdarma!";
    this.zhs = "Hra se zavře";
    this.kab = "Hra se restartuje";
    this.sif = "Bonus!";
    this.qni = "BONUS";
    this.txm = "VYHRÁL";
    this.ndq = "CELKOVÁ";
    this.kgx = "ČEKEJTE PROSÍM ...";
    this.error = "ERROR";
    this.cii = "FREEPLAY";
    this.blt = "DALŠÍ HRY";
    this.mxr = "ID HRY";
    this.vtj = "HRACÍ DOBA";
    this.fuv = "Poslední";
    this.qju = "hry";
    this.wdz = "MÍT K DOBRU";
    this.audio = "AUDIO";
    this.fmz = "MUZIKA";
    this.qhe = "RYCHLOST";
    this.xws = "FULLSCREEN";
    this.bkk = "FULLSCREEN";
    this.language = "ŘEČ";
    this.qky = "Při poruše jsou všechny hry a výhry neplatné.";
    this.zrd = "P O K R A Č U J";
    this.tzw = "Nezobrazujte znovu";
    this.voa = "AUTOSTART";
    this.pch = "HRA";
    this.dve = "VÝHERNÍ PLÁN";
    this.iai = "Zvuk nelze nahrát!";
    this.vid = "Chybí zdroje!";
    this.hhy = "Hrát bez zvuku?";
    this.pve = "NASTAVENÍ";
    this.axc = "V A L U E";
    this.pfy = "Otočte své zařízení, prosím!";
    this.left = "VLEVO";
    this.gqz = "VPRAVO";
    this.wqq = "AUTO";
    this.dvy = "INFORMACE";
    this.cag = "Abyste mohli hrát hru, vypněte SOUKROMÝ REŽIM ve svém prohlížeči, prosím.";
    this.kfp = "Tato hra je optimalizovaná pro Google Chrome.";
    this.lsv = "Použijte aktuální verzi";
    this.dax = "Tento prohlížeč není bohužel plně podporován.";
    this.opm = "Tuto hru nelze spustit v režimu hry zdarma!";
    this.bfp = "Otočte zařízení tak, aby zobrazilo hru jako na skutečném automatu!";
    this.czh = "Nastavte rozhraní hry svým potřebám!";
    this.vkk = "VÍCE INFORMACÍ NALEZNETE V PRAVIDLECH HRY.";
    this.xiv = "Reality Check";
    this.nfc = "Požádali jste o kontrolu reality.";
    this.cvz = "Pro zobrazení vaší herní historie stiskněte HISTORIE.";
    this.mbe = "Game break";
    this.xyi = "Game limits";
    this.dxg = "Self test";
    this.fcm = "PRAVIDLA HRY";
    this.odp = "PRAVIDLA HRY";
    this.gpe = "VYBRAT SPRÁVNOU BARVU KE ZDVOJNÁSOBENÍ VÝHRY";
    this.jzc = "VYBRAT SPRÁVNOU BARVU KARTY KE ZČTYŘNÁSOBENÍ VÝHRY";
    this.lmg = "VSADIT NA ŠANCI ZVÝŠIT VÝHRU";
    this.fpm = "Statistika";
    this.xeo = "Celkem hry";
    this.avu = "Celkem sázky";
    this.ser = "Celkem výhry";
    this.mem = "Celková hrací doba";
    this.bju = "Zprávu jsem četl/a.";
    this.nqx = "UKONČIT|HRU";
    this.ok = "OK";
    this.eps = "HISTORIE";
    this.hgc = "Žádné odehrané hry.";
    this.state = "STATUS";
    this.sap = "Hlavní hra";
    this.osk = "Automaticky vybráno";
    this.zbw = "Vybráno";
    this.lvr = "Bonusspins";
    this.xcr = "Hra";
    this.hfk = "Polovina";
    this.apf = "Respin";
    this.gzt = "Bonus";
    this.ksf = "První vyložení";
    this.zwi = "Druhé vyložení";
    this.xhf = "Třetí vyložení";
    this.wtk = "ZRUŠIT";
    this.omz = "NASTAVENÍ AUTOMATICKÉHO STARTU";
    this.iwh = "Množství her:";
    this.kdr = "Zastavit automatický start";
    this.eow = "Kredit nižší než:";
    this.vhy = "Kredit vyšší než:";
    this.hyy = "Výhra vyšší než:";
    this.fpi = "Automatický start se zastaví na začátku bonusu.";
    this.cey = "Sdílet na Facebooku";
    this.pda = "TEORETICKÁ NÁVRATNOST HRÁČI V TÉTO HŘE JE XY."
}
rbx.prototype = new bvb;

function zvs() {
    this.kpo = "MIINIMUMPANUS ON";
    this.teu = "MAX PANUS";
    this.qco = "MIN PANUS";
    this.jqf = "MAX PANUS";
    this.lpn = "PANUS";
    this.start = "START";
    this.fye = "ABI";
    this.cfr = "VÕIDU TABEL";
    this.biy = "MENÜÜ";
    this.fyx = "VALI|MÄNG";
    this.qbk = "STOPP";
    this.saw = "KREDIIT";
    this.dhz = "MÄNG ON LÕPPENUD!";
    this.fhk = "OLED VÕITNUD!";
    this.ymt = "SOOVIME EDU!";
    this.win = "VÕIT";
    this.irp = "EELMINE VÕIT";
    this.rrl = "VÕTA|VÕIT";
    this.hsr = "VÕTA VÕIT";
    this.ott = "DUUBEL|DAMINE";
    this.lmc = "AUTO|START";
    this.ivq = "POOLITA|DUUBELDA";
    this.of = "OF";
    this.zxe = "VÄLJA";
    this.afs = "ALUSTA MÄNGU";
    this.evb = "VALI PANUS";
    this.ikx = "POOLIK";
    this.mmv = "JÄTKAMISEKS VAJUTAGE ÜKSKÕIK MILLIST NUPPU";
    this.ret = "TAGASI|MÄNGU";
    this.bho = "Koguvõit";
    this.awn = "POLE PIISAVALT KREDIITI.";
    this.sif = "Boonus!";
    this.qni = "BOONUS";
    this.kgx = "PALUN OODAKE ...";
    this.blt = "Vali Mäng";
    this.audio = "HELI";
    this.fmz = "MUUSIKA";
    this.qhe = "KIIRUS";
    this.xws = "TÄISEKRAAN";
    this.bkk = "TÄISEKRAAN";
    this.qky = "RIKKE KORRAL KÕIK MÄNGUD JA VÕIDUD TÜHISTATAKSE.";
    this.xfg = "MÄNGU LÕPP";
    this.language = "KEEL";
    this.fcm = "MÄNGUREEGLID";
    this.odp = "MÄNGUREEGLID";
    this.sxl = "LAADIMINE ...";
    this.vhg = "AJALOO LAADIMINE ...";
    this.gpq = "Oled saavutanud ühe limiitidest!";
    this.hmz = "Hoiatus";
    this.bbu = "Ühenduse viga";
    this.ofl = "Te olete jõudnud tasuta mängude maksimaalse arvuni!";
    this.zhs = "Mäng suletakse";
    this.kab = "Mäng taaskäivitatakse";
    this.jxo = "JÄTKAMISEKS PUUDUTA EKRAANI";
    this.pve = "SÄTTED";
    this.axc = "V A L U E";
    this.pfy = "Pöörake oma seadet!";
    this.dvy = "INFO";
    this.cag = "Mängu mängimiseks keelake oma brauseris PRIVAATREŽIIM.";
    this.kfp = "See mäng on optimeeritud Google Chrome jaoks.";
    this.lsv = "Palun kasutage praeguse versiooni";
    this.dax = "Kahjuks ei toetata seda brauserit täielikult.";
    this.opm = "Seda mängu ei saa tasuta mängimise režiimis käivitada!";
    this.left = "VASAK";
    this.gqz = "PAREM";
    this.wqq = "AUTOMAATNE";
    this.txm = "VÕITIS";
    this.udc = "võidetud";
    this.ndq = "KOKKU";
    this.error = "VIGA";
    this.cii = "TASUTA MÄNG";
    this.mxr = "MÄNGU ID";
    this.vtj = "MÄNGUAEG";
    this.fuv = "Viimased";
    this.qju = "mängu";
    this.wdz = "SISSEMAKSE";
    this.gpe = "VÕIDU DUUBELDAMISEKS VALI ÕIGE VÄRV";
    this.jzc = "VÕIDU NELJAKORDISTAMISEKS VALI ÕIGE MAST";
    this.lmg = "RISKI, ET SUURENDADA OMA VÕITU";
    this.fpm = "Statistika";
    this.xeo = "Mänge kokku";
    this.avu = "Kogupanus";
    this.ser = "Koguvõit";
    this.mem = "Mänguaeg kokku";
    this.bju = "Olen seda teadet lugenud.";
    this.nqx = "MÄNGU|LÕPP";
    this.eps = "Ajalugu";
    this.hgc = "Ühtegi mängu ei ole mängitud.";
    this.state = "OLEK";
    this.sap = "Põhimäng";
    this.osk = "Automaatne väljavõtt";
    this.zbw = "Välja võetud";
    this.lvr = "Bonusspins";
    this.xcr = "Gamble";
    this.hfk = "Pool";
    this.apf = "Respin";
    this.gzt = "Boonus";
    this.ksf = "Esimene jagamine";
    this.zwi = "Teine jagamine";
    this.xhf = "Kolmas jagamine";
    this.zrd = "J Ä T K A";
    this.tzw = "Ära seda enam näita";
    this.voa = "AUTOSTART";
    this.pch = "DUUBEL DAMINE";
    this.dve = "VÕIDU TABEL";
    this.iai = "Helisid ei saa laadida!";
    this.vid = "Ressursid puuduvad!";
    this.hhy = "Soovid mängida ilma helideta?";
    this.bfp = "Keera seade vertikaalasendisse, et mängida nagu päris mänguautomaadil!";
    this.czh = "Kohanda mänguliidest vastavalt oma vajadustele!";
    this.vkk = "VAATA LISAINFOT MÄNGUREEGLITEST.";
    this.wtk = "TÜHISTA";
    this.omz = "AUTOMAATKÄIVITUSE SÄTTED";
    this.iwh = "Mängude arv:";
    this.kdr = "Peata automaatkäivitus";
    this.eow = "Krediit madalam kui:";
    this.vhy = "Krediit kõrgem kui:";
    this.hyy = "Võit suurem kui:";
    this.fpi = "Automaatkäivitus peatatakse boonuse alguses.";
    this.cey = "Jaga Facebookis";
    this.ok = "OK";
    this.xiv = "Reality Check";
    this.nfc = "Olete soovinud reaalsuskontrolli.";
    this.cvz = "Oma mänguajaloo vaatamiseks vajutage AJALUGU.";
    this.mbe = "Game break";
    this.xyi = "Game limits";
    this.dxg = "Self test";
    this.pda = "SELLE MÄNGU MÄNGIJA TEOREETILINE TULU ON XY."
}
zvs.prototype = new bvb;

function iqx() {
    this.kpo = "ΤΟ ΕΛAΧΙΣΤΟ ΣΤΟIΧΗΜΑ ΕIΝΑΙ";
    this.teu = "ΜEΓΙΣΤΟ ΣΤΟIΧΗΜΑ";
    this.qco = "EΛΑΧ. ΣΤΟΙΧΗΜΑ";
    this.jqf = "ΜΕΓ. ΣΤΟΙΧΗΜΑ";
    this.lpn = "ΣΤΟIΧΗΜΑ";
    this.start = "EΝΑΡΞΗ";
    this.fye = "ΒΟHΘΕΙΑ";
    this.cfr = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.biy = "ΜΕΝΟY";
    this.fyx = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.qbk = "ΣΤΟΠ";
    this.saw = "ΠIΣΤΩΣΗ";
    this.dhz = "TEΛΟΣ ΠΑΙΧΝΙΔΙΟY!";
    this.fhk = "ΝΙΚΗΤΗΣ!";
    this.ymt = "ΚΑΛΗ ΤΥΧΗ!";
    this.win = "ΚEΡΔΟΣ";
    this.irp = "ΤΕΛΕΥΤΑIΟ ΚEΡΔΟΣ";
    this.rrl = "ΠΑΡΑΛΑΒH";
    this.hsr = "ΠΑΡΑΛΑΒH";
    this.ott = "ΤΖΟΓAΡΩ";
    this.lmc = "ΑΥΤOΜΑΤΗ|EΝΑΡΞΗ";
    this.ivq = "ΠΑΡΑΛΑΒH|ΤΖΟΓAΡΩ";
    this.of = "ΑΠO";
    this.zxe = "EΞΟΔΟΣ";
    this.afs = "ΑΡΧΙΖΕΙ ΠΑΙΧΝΙΔΙ";
    this.evb = "ΕΠΙΛΕΞΤΕ ΣΤΟΙΧΗΜΑ";
    this.ikx = "ΠΑΡΑΛΑΒH|1/2";
    this.mmv = "ΠAΤΗΣΕ EΝΑ ΠΛHΚΤΡΟ ΓΙΑ ΝΑ ΣΥΝΕΧIΣΕΙΣ";
    this.ret = "EΠΙΣΤΡΟΦH|ΣΤΟ|ΠΑΙΧΝIΔΙ";
    this.bho = "ΣΥΝΟΛΙΚO ΚEΡΔΟΣ";
    this.awn = "ΔΕΝ ΑΡΚΕΤH ΠIΣΤΩΣΗ.";
    this.sif = "Μπόνουσ!";
    this.qni = "ΜΠOΝΟΥΣ";
    this.kgx = "ΠΑΡΑΚΑΛΩ ΠΕΡΙΜEΝΕΤΕ ...";
    this.blt = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.audio = "ΗΧΟΣ";
    this.fmz = "ΜΟΥΣΙΚΉ";
    this.qhe = "ΤΑΧYΤΗΤΑ";
    this.xws = "ΠΛΗΡΗΣ ΟΘΟΝΗ";
    this.bkk = "ΠΛΗΡΗΣ|ΟΘΟΝΗ";
    this.qky = "ΣΕ ΠΕΡΙΠΤΩΣΗ ΒΛΑΒΗΣ ΤΗΣ ΣΥΣΚΕΥΗΣ ΔΕΝ ΑΝΑΛΑΜΒΑΝΟΥΜΕ ΚΑΜΙΑ ΕΥΘΥΝΗ.";
    this.language = "ΓΛΩΣΣΑ";
    this.ndq = "ΣYΝΟΛΟ";
    this.fcm = "ΚΑΝΌΝΕς ΠΑΙΧΝΙΔΙΟΎ";
    this.odp = "ΚΑΝΌΝΕς|ΠΑΙΧΝΙΔΙΟΎ";
    this.sxl = "ΦΟΡΤΩΣΗ ...";
    this.vhg = "ΦΟΡΤΩΣΗ ΙΣΤΟΡΙΚΟΥ...";
    this.gpq = "Ξεπεράσατε κάποιο όριο!";
    this.hmz = "Προειδοποίηση";
    this.bbu = "Σφάλμα επικοινωνίας";
    this.ofl = "Φτάσατε στο ανώτατο όριο δωρεάν παιχνιδιών!";
    this.zhs = "Το παιχνίδι θα τερματιστεί";
    this.kab = "Το παιχνίδι θα εκκινηθεί εκ νέου";
    this.jxo = "ΑΓΓΙΞΤΕ ΤΗΝ ΟΘΟΝΗ ΓΙΑ ΝΑ ΣΥΝΕΧΙΣΕΤΕ";
    this.pve = "ΡΥΘΜΙΣΕΙΣ";
    this.axc = "V A L U E";
    this.pfy = "Παρακαλούμε, περιστρέψτε τη συσκευή σας!";
    this.dvy = "ΠΛΗΡΟΦΟΡΊΕς";
    this.cag = "Παρακαλούμε, απενεργοποιήστε τη λειτουργία PRIVATE MODE του προγράμματος περιήγησης, προκειμένου να εκκινηθεί το παιχνίδι.";
    this.kfp = "Αυτό το παιχνίδι έχει βελτιστοποιηθεί για Google Chrome.";
    this.lsv = "Παρακαλούμε, χρησιμοποιήστε την τρέχουσα έκδοση του";
    this.dax = "Δυστυχώς, αυτό το πρόγραμμα περιήγησης δεν υποστηρίζεται πλήρως.";
    this.opm = "Αυτό το παιχνίδι δεν μπορεί να διεξαχθεί στη δωρεάν λειτουργία!";
    this.left = "ΑΡΙΣΤΕΡA";
    this.gqz = "ΔΕΞΙA";
    this.wqq = "AΥΤOΜΑΤΟ";
    this.txm = "ΚEΡΔΙΣΕ";
    this.udc = "κερδίζει";
    this.error = "ΣΦΑΛΜΑ";
    this.cii = "ΔΩΡΕAΝ ΠΑΙΧΝIΔΙ";
    this.mxr = "ΤΑΥΤΟΤΗΤΑ ΠΑΙΧΝΙΔΙΟΥ";
    this.vtj = "ΧΡΟΝΟΣ ΠΑΙΧΝΙΔΙΟΥ";
    this.fuv = "Τελευταία";
    this.qju = "παιχνίδια";
    this.wdz = "ΠΙΣΤΩΤΙΚO ΥΠOΛΟΙΠΟ";
    this.gpe = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΓΙΑ ΝΑ ΔΙΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.jzc = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΦΥΛΛΟΥ ΓΙΑ ΝΑ ΤΕΤΡΑΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.lmg = "ΠΟΝΤΑΡΕΤΕ ΓΙΑ ΝΑ ΕΧΕΤΕ ΤΗΝ ΕΥΚΑΙΡΙΑ ΠΟΛΛΑΠΛΑΣΙΑΣΜΟΥ ΤΟΥ ΚΕΡΔΟΥΣ ΣΑΣ";
    this.fpm = "Στατιστικά";
    this.xeo = "Σύνολο παιχνιδιών";
    this.avu = "Συνολικό ποντάρισμα";
    this.ser = "Συνολικό κέρδος";
    this.mem = "Συνολικός χρόνος παιχνιδιού";
    this.bju = "Eχω διαβάσει το μήνυμα.";
    this.nqx = "ΛΗΞΗ|ΠΑΙΧΝΙΔΙΟΥ";
    this.eps = "ΙΣΤΟΡΙΚΟ";
    this.hgc = "Ακόμη δεν υπάρχει κάποιο παιχνίδι.";
    this.state = "ΚΑΤAΣΤΑΣΗ";
    this.sap = "Κύριο παιχνίδι";
    this.osk = "Αυτόματη λήψη";
    this.zbw = "Ελήφθησαν";
    this.lvr = "Bonusspins";
    this.xcr = "Τζογάρω";
    this.hfk = "Hμισυ";
    this.apf = "Respin";
    this.gzt = "Μπόνουσ";
    this.ksf = "Πρώτο μοίρασμα";
    this.zwi = "Δεύτερο μοίρασμα";
    this.xhf = "Τρίτο μοίρασμα";
    this.zrd = "Σ Υ Ν  E Χ Ε Ι Α";
    this.tzw = "Να μην προβληθεί ξανά";
    this.voa = "ΑΥΤΟΜΑΤΗ|ΕΝΑΡΞΗ";
    this.pch = "ΤΖΟΓAΡΩ";
    this.dve = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.iai = "Η φόρτωση ήχων δεν είναι εφικτή!";
    this.vid = "Λείπουν πόροι!";
    this.hhy = "Παιχνίδι χωρίς ήχο?";
    this.bfp = "Γυρίστε τη συσκευή σας σε λειτουργία πορτρέτου για να παίξετε όπως σε μια πραγματική μηχανή slot!";
    this.czh = "Προσάρμοσε την επιφάνεια εργασίας στις προτιμήσεις σου!";
    this.vkk = "ΓΙΑ ΠΕΡΙΣΣΌΤΕΡΕΣ ΠΛΗΡΟΦΟΡΊΕΣ, ΔΕΊΤΕ ΤΟΥΣ ΚΑΝΟΝΙΣΜΟΎΣ ΤΟΥ ΠΑΙΧΝΙΔΙΟΎ.";
    this.wtk = "ΑΚΎΡΩΣΗ";
    this.omz = "ΡΥΘΜΉΣΕΙς AUTOSTART";
    this.iwh = "Αριθμός παιχνιδιών:";
    this.kdr = "Διακοπή autostart";
    this.eow = "Μονάδες χαμηλότερα από:";
    this.vhy = "Μονάδες υψηλότερες από:";
    this.hyy = "Κέρδος υψηλότερο από:";
    this.fpi = "Το autostart θα σταματήσει με το ξεκίνημα του μπόνους.";
    this.cey = "Κοινοποίηση στο Facebook";
    this.ok = "OK";
    this.xiv = "έλεγχο πραγματικότητας";
    this.nfc = "Ζητήσατε τον έλεγχο πραγματικότητας.";
    this.cvz = "Πατήστε το ΙΣΤΟΡΙΚΟ για να δείτε το ιστορικό των παιχνιδιών σας.";
    this.mbe = "Game break";
    this.xyi = "Game limits";
    this.dxg = "Self test";
    this.pda = "Η ΘΕΩΡΗΤΙΚΉ ΕΠΙΣΤΡΟΦΉ ΣΤΟΝ ΠΑΊΚΤΗ ΓΙΑ ΑΥΤΌ ΤΟ ΠΑΙΧΝΊΔΙ ΕΊΝΑΙ XY."
}
iqx.prototype = new bvb;

function yrr() {
    this.kpo = "МИН. ЗАЛОГ Е";
    this.teu = "МАКС. ЗАЛОГ";
    this.qco = "МИНИМ. ЗАЛОГ";
    this.jqf = "МАКС. ЗАЛОГ";
    this.lpn = "ЗАЛОГ";
    this.start = "СТАРТ";
    this.fye = "ПОМОЩ";
    this.cfr = "ПЛАН НА|ПЕЧАЛБИТЕ";
    this.biy = "МЕНЮ";
    this.fyx = "ПОВЕЧЕ|ИГРИ";
    this.qbk = "СТОП";
    this.saw = "КРЕДИТ";
    this.dhz = "ИГРАТА ЗАВЪРШИ";
    this.fhk = "ПЕЧЕЛИТЕ!";
    this.ymt = "УСПЕХ!";
    this.win = "ПЕЧАЛБА";
    this.irp = "ПОСЛ.ПЕЧАЛБА";
    this.rrl = "ПРИБИРАНЕ";
    this.hsr = "ПРИБИРАНЕ";
    this.ott = "ДУБЛИРАНЕ";
    this.lmc = "АВТО|СТАРТ";
    this.ivq = "ДЕЛЕНЕ|ДУБЛ.";
    this.of = "ОТ";
    this.zxe = "ИЗХОД";
    this.afs = "ЗАПОЧНЕТЕ ИГРАТА";
    this.evb = "ИЗБЕРЕТЕ ЗАЛОГ";
    this.ikx = "ДЕЛЕНЕ";
    this.mmv = "НАТИСНЕТЕ НЯКОЙ БУТОН ЗА ДА ПРОДЪЛЖИТЕ";
    this.ret = "ВРЪЩАНЕ|КЪМ|ИГРАТА";
    this.bho = "ОБЩА ПЕЧАЛБА";
    this.awn = "НЕ ДОСТАТЪЧЕН КРЕДИТ.";
    this.sif = "Бонус!";
    this.qni = "БОНУС";
    this.kgx = "МОЛЯ ИЗЧАКАЙТЕ ...";
    this.blt = "Повече Игри";
    this.qhe = "ТУРБО";
    this.qky = "ПОВРЕДА АНУЛИРА ВСИЧКИ ЗАЛАГАНИЯ И ПЛАЩАНИЯ.";
    this.language = "ЕЗИК";
    this.fcm = "ПРАВИЛА НА ИГРАТА";
    this.odp = "ПРАВИЛА|НА ИГРАТА";
    this.sxl = "ЗАРЕЖДАНЕ ...";
    this.vhg = "ЗАРЕЖДАНЕ НА ИСТОРИЯ ...";
    this.gpq = "Достигна един от лимитите!";
    this.hmz = "Предупреждение";
    this.bbu = "Комуникационна грешка";
    this.ofl = "Достигнали сте максималния брой безплатни игри!";
    this.zhs = "Играта ще бъде затворена";
    this.kab = "Играта ще бъде рестартирана";
    this.jxo = "ДОКОСНЕТЕ ЕКРАНА, ЗА ДА ПРОДЪЛЖИТЕ";
    this.pve = "НАСТРОЙКИ";
    this.axc = "V A L U E";
    this.pfy = "Моля, включете устройството!";
    this.dvy = "ИНФОРМАЦИЯ";
    this.cag = "Моля, деактивирайте ЧАСТЕН РЕЖИМ на браузъра, за да играете играта.";
    this.kfp = "Тази игра е оптимизирана за Google Chrome.";
    this.lsv = "Моля, използвайте текущата версия на";
    this.dax = "За съжаление този браузър не се поддържа напълно.";
    this.opm = "Тази игра не може да се стартира в режим на свободна игра!";
    this.left = "ЛЯВА";
    this.gqz = "ДЯСНА";
    this.wqq = "АВТО";
    this.txm = "СПЕЧЕЛЕНО";
    this.udc = "печалби";
    this.ndq = "ОБЩО";
    this.error = "ГРЕШКА";
    this.cii = "БЕЗПЛАТНА ИГРА";
    this.audio = "ЗВУК";
    this.fmz = "МУЗИКА";
    this.xws = "ПЪЛЕН ЕКРАН";
    this.bkk = "ПЪЛЕН|ЕКРАН";
    this.mxr = "ИД НА ИГРА";
    this.vtj = "ВРЕМЕ НА ИГРА";
    this.fuv = "Последни";
    this.qju = "игри";
    this.wdz = "ДЕПОЗИТ";
    this.gpe = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УДВОИШ ПЕЧАЛБАТА";
    this.jzc = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УЧЕТВОРИШ ПЕЧАЛБАТА";
    this.lmg = "ИГРАЙ ЗА ШАНС ДА УВЕЛИЧИШ ПЕЧАЛБАТА";
    this.fpm = "Статистика";
    this.xeo = "Общо игри";
    this.avu = "Общо залог";
    this.ser = "Общо печалби";
    this.mem = "Общо време на игра";
    this.bju = "Прочетох това съобщение.";
    this.nqx = "ИЗХОД|ОТ|ИГРАТА";
    this.eps = "ИСТОРИЯ";
    this.hgc = "Няма играни игри.";
    this.state = "СТАТУС";
    this.sap = "Основна игра";
    this.osk = "Автоматично събрани";
    this.zbw = "Събрани";
    this.lvr = "Бонус-игри";
    this.xcr = "Дублиране";
    this.hfk = "Половина";
    this.apf = "Respin";
    this.gzt = "Бонус";
    this.ksf = "Първо раздаване";
    this.zwi = "Второ раздаване";
    this.xhf = "Трето раздаване";
    this.zrd = "П Р О Д Ъ Л Ж А В А М";
    this.tzw = "Не показвай отново";
    this.voa = "AUTOSTART";
    this.pch = "ДУБЛИРАНЕ";
    this.dve = "ПЛАН НА ПЕЧАЛБИТЕ";
    this.iai = "Звукът не може да бъде зареден!";
    this.vid = "Липсват ресурси!";
    this.hhy = "Игра без звук?";
    this.bfp = "Завъртете устройството си в портретен режим, за да играете като на истинска слот машина!";
    this.czh = "Настройте интерфейса на играта според своите нужди!";
    this.vkk = "ЗА ПОВЕЧЕ ИНФОРМАЦИЯ ВИЖТЕ ПРАВИЛАТА НА ИГРАТА.";
    this.wtk = "ИЗЧИСТВАНЕ";
    this.omz = "НАСТРОЙКИ НА АВТОМАТИЧНОТО СТАРТИРАНЕ";
    this.iwh = "Брой игри:";
    this.kdr = "Спри автоматичния старт";
    this.eow = "Кредит по-малък от:";
    this.vhy = "Кредит по-висок от:";
    this.hyy = "Спечели повече от:";
    this.fpi = "Автоматичното стартиране ще бъде спряно в началото на бонуса.";
    this.cey = "Сподели във Facebook";
    this.ok = "OK";
    this.xiv = "Reality Check";
    this.nfc = "Заявили сте проверка на реалността.";
    this.cvz = "Натиснете ИСТОРИЯ, за да видите хронологията си на игра.";
    this.mbe = "Game break";
    this.xyi = "Game limits";
    this.dxg = "Self test";
    this.pda = "ТЕОРЕТИЧНАТА ВЪЗВРАЩАЕМОСТ НА ИГРАЧА ЗА ТАЗИ ИГРА Е XY."
}
yrr.prototype = new bvb;

function bye() {
    this.kpo = "მინიმალური ფსონი არის";
    this.teu = "მაქსიმალური ფსონი";
    this.qco = "მინიმალური ფსონი";
    this.jqf = "მაქსიმალური ფსონი";
    this.lpn = "ფსონი";
    this.start = "დაწყება";
    this.fye = "დახმარება";
    this.cfr = "გადახდის მრიცხველი";
    this.biy = "მენიუ";
    this.fyx = "მეტი|თამაშები";
    this.qbk = "გაჩერება";
    this.saw = "კრედიტი";
    this.dhz = "თამაში დასრულებულია";
    this.fhk = "გამარჯვებული!";
    this.ymt = "გისურვებთ წარმატებას!";
    this.win = "მოგება";
    this.irp = "ბოლო მოგება";
    this.rrl = "შეგროვება";
    this.hsr = "შეგროვება";
    this.ott = "აზარტი";
    this.lmc = "ავტო|დაწყება";
    this.ivq = "ნახევარი";
    this.zxe = "გამოსვლა";
    this.afs = "თამაშის დაწყება";
    this.evb = "აირჩიეთ ფსონი";
    this.ikx = "ნახევარი";
    this.ret = "თამაშზე|დაბრუნება";
    this.bho = "მთლიანი მოგება";
    this.hmz = "გაფრთხილება";
    this.ndq = "მთლიანი";
    this.kgx = "გთხოვთ, დაელოდოთ ...";
    this.blt = "მეტი თამაშები";
    this.qhe = "ტურბო";
    this.qky = "გაუმართაობის შემთხვევაში ყველა მოგება და ნათამაშები წაიშლება.";
    this.zrd = "გაგრძელება";
    this.voa = "ავტო დაწყება";
    this.dve = "გადახდის მრიცხველი";
    this.pch = "აზარტი";
    this.left = "მარცხნივ";
    this.gqz = "მარჯვნივ";
    this.wqq = "ავტომატურად";
    this.ok = "კი";
    this.wtk = "გაუქმება";
    this.xcr = "აზარტი";
    this.hfk = "ნახევარი";
    this.fcm = "თამაშის წესები";
    this.odp = "თამაშის წესები";
    this.sif = "BONUS!";
    this.qni = "ბონუს";
    this.mmv = "დააჭირეთ ნებისმიერ ღილაკს რომ გააგრძელოთ";
    this.awn = "არა საკმარისი კრედიტი.";
    this.jxo = "შეეხეთ ეკრანს რომ გააგრძელოთ";
    this.sxl = "ჩატვირთვის  ...";
    this.vhg = "ჩატვირთვის  ისტორია  ...";
    this.bbu = "საკომუნიკაციო შეცდომა";
    this.gpq = "თქვენ ერთ ერთი ლიმიტი ამოწურეთ!";
    this.ofl = "თქვენ უფასო თამაშების მაქსიმალური რაოდენობის ლიმიტი უკვე ამოწურეთ!";
    this.zhs = "თამაში დასრულდება";
    this.kab = "თამაში გადაიტვირთება";
    this.txm = "მოგებულია";
    this.udc = "wins";
    this.axc = "V A L U E";
    this.error = "შეცდომა";
    this.cii = "უფასო თამაში";
    this.mxr = "თამაშის  ნომერი";
    this.vtj = "სათამაშო დრო";
    this.fuv = "ბოლო ";
    this.qju = "თამაშები";
    this.wdz = "დეპოზიტი";
    this.audio = "ხმა";
    this.fmz = "მუსიკა";
    this.xws = "სრული ეკრანი";
    this.bkk = "სრული ეკრანი";
    this.language = "ენის";
    this.tzw = "მომავალში აღარ ჩვენება";
    this.iai = "ხმის ჩატვირთვა ვერ ხერხდება!";
    this.vid = "არასაკმარისი რესურსები!";
    this.hhy = "გინდათ ხმის გარეშე ითამაშოთ?";
    this.pfy = "გთხოვთ მოაბრუნოთ თქვენი მოწყობილობა!";
    this.cag = "გთხოვთ, გამორთოთ პირადი რეჟიმი თქვენს ბრაუზერში რომ შეძლოთ თამაში.";
    this.kfp = "ეს თამაში ოპტიმიზირებულია Google Chrome-ისათვის.";
    this.dad = "გთხოვთ გამოიყენოთ";
    this.udh = "-ის მიმდინარე ვერსია";
    this.dax = "სამწუხაროდ, ამ ბრაუზერზე თამაში სრულად ვერ ხერხდება.";
    this.opm = "ამ თამაშის თამაში უფასოდ შეუძლებელია!";
    this.bfp = "ჩართეთ თქვენი მოწყობილობა პორტრეტის რეჟიმზე რომ ითამაშოთ ისე თითქოს რეალურ სლოტ მოწყობილობაზე თამაშობდეთ!";
    this.czh = "მოარგეთ თამაშის ინტერფეისი თქვენს საჭიროებებს!";
    this.gpe = "აირჩიეთ სწორი ფერი რომ გააორმაგოთ მოგება";
    this.jzc = "აირჩიეთ კარტის სწორი ფერი რომ გააოთხმაგოთ მოგება";
    this.lmg = "დადეთ ფსონი რომ გაზარდოთ მოგების შანსი";
    this.xeo = "მთლიანი თამაშები";
    this.avu = "ფსონი მთლიანად";
    this.ser = "მთლიანი მოგება";
    this.mem = "მთლიანი სათამაშო დრო";
    this.bju = "მე გავეცანი ამ გზავნილს.";
    this.nqx = "თამაშის|დამთავრება";
    this.eps = "მოვლენების ჩანაწერი";
    this.hgc = "ნათამაშები თამაშები არ არის.";
    this.state = "მდგომარეობა";
    this.sap = "ძირითადი თამაში";
    this.osk = "ავტომატურად შეგროვება";
    this.zbw = "აღებულ იქნა";
    this.ksf = "პირველი დარიგება";
    this.zwi = "მეორე დარიგება";
    this.xhf = "მესამე დარიგება";
    this.omz = "ავტოგამშვების პარამეტრები";
    this.iwh = "თამაშების რაოდენობა:";
    this.kdr = "შეაჩერეთ ავტოგამშვები";
    this.eow = "კრედიტი უფრო დაბალი ვიდრე:";
    this.vhy = "კრედიტი უფრო მაღალი ვიდრე:";
    this.hyy = "მოიგეთ უფრო მეტი ვიდრე:";
    this.fpi = "ავტოგამშვები შეჩერდება ბონუსის დასაწყისში.";
    this.cey = "გააზიარეთ ფეისბუქზე";
    this.fpm = "სტატისტიკა";
    this.of = "/";
    this.lvr = "Bonus თამაში";
    this.gzt = "ბონუსი";
    this.dvy = "ინფორმაცია";
    this.pve = "პარამეტრ.";
    this.apf = "ხელახლა დატრიალების";
    this.vkk = "მეტი ინფორმაციისათვის, იხილეთ თამაშის წესები.";
    this.xiv = "რეალობის შემოწმება";
    this.nfc = "თქვენ მოითხოვეთ რეალობის შემოწმება.";
    this.cvz = "თქვენი თამაშის ისტორიის სანახავად დააჭირეთ მოვლენების ჩანაწერი-ს.";
    this.mbe = "Game break";
    this.xyi = "Game limits";
    this.dxg = "Self test";
    this.pda = "თეორიული დაბრუნება მოთამაშეზე ამ თამაშში არის XY."
}
bye.prototype = new bvb;

function zvc() {
    this.kpo = "A MINIMUM TÉT";
    this.teu = "MAXIMUM TÉT";
    this.qco = "MIN. TÉT";
    this.jqf = "MAX. TÉT";
    this.lpn = "TÉT";
    this.start = "START";
    this.fye = "SÚGÓ";
    this.cfr = "SÚGÓ";
    this.biy = "MENÜ";
    this.fyx = "MENÜ";
    this.qbk = "STOP";
    this.saw = "HITEL";
    this.dhz = "A JÁTÉKNAK VÉGE";
    this.fhk = "NYEREMÉNY!";
    this.ymt = "SOK SZERENCSÉT!";
    this.win = "NYEREMÉNY";
    this.irp = "UTOLSÓ NYER.";
    this.rrl = "FELÍR";
    this.hsr = "FELÍR";
    this.ott = "SZORZÁS";
    this.lmc = "AUTO|START";
    this.ivq = "FELEZÉS";
    this.zxe = "KILÉPÉS";
    this.afs = "START";
    this.evb = "VÁLASSZON TÉTET";
    this.ikx = "FELEZÉS";
    this.ret = "VISSZA A|JÁTÉKHOZ";
    this.bho = "Összes Nyeremény";
    this.hmz = "Figyelmeztetés";
    this.ndq = "ÖSSZES";
    this.kgx = "KÉREM VÁRJON ...";
    this.blt = "Menü";
    this.qhe = "SEBESSÉG";
    this.qky = "A MEGHIBÁSODÁS ÉRVÉNYTELENÍT MINDEN JÁTÉKOT ÉS KIFIZETÉST.";
    this.zrd = "T O V Á B B";
    this.voa = "AUTOSTART";
    this.dve = "SÚGÓ";
    this.pch = "SZORZÁS";
    this.left = "BAL";
    this.gqz = "JOBB";
    this.ok = "OK";
    this.wtk = "MÉGSEM";
    this.xcr = "Szorzás";
    this.hfk = "Felezés";
    this.fcm = "JÁTÉKSZABÁLYOK";
    this.odp = "JÁTÉKSZABÁLYOK";
    this.sif = "Bónusz!";
    this.qni = "BÓNUSZ";
    this.mmv = "A FOLYTATÁSHOZ NYOMJON MEG EGY GOMBOT";
    this.awn = "NINCS ELÉG HITEL";
    this.axc = "V A L U E";
    this.udc = "nyeremények";
    this.of = "/";
    this.jxo = "ÉRINTSE MEG A KÉPERNYŐT A FOLYTATÁSHOZ";
    this.sxl = "BETÖLTÉSE ...";
    this.vhg = "JÁTÉK TÖRTÉNET BETÖLTÉSE ...";
    this.bbu = "Kommunikációs hiba";
    this.gpq = "Elérte az egyik limitet!";
    this.ofl = "Elérte a szabad játékok maximum számát!";
    this.zhs = "A játék megállítva";
    this.kab = "Játék újraindul";
    this.txm = "NYERT";
    this.error = "HIBA";
    this.cii = "FREEPLAY";
    this.wqq = "AUTO";
    this.mxr = "JÁTÉK ID";
    this.vtj = "Játék Idő";
    this.fuv = "utolsó";
    this.qju = "játék";
    this.wdz = "HITEL";
    this.audio = "HANG";
    this.fmz = "ZENE";
    this.xws = "TELJES KÉPERNYŐ";
    this.bkk = "TELJES KÉPERNYŐ";
    this.language = "NYELV";
    this.tzw = "Ne mutassa mégegyszer";
    this.iai = "A hangot nem lehet betölteni!";
    this.vid = "Források hiányoznak!";
    this.hhy = "Játék hang nélkül?";
    this.pve = "BEÁLLÍTÁS";
    this.pfy = "Kérjük fordítsa el a készüléket!";
    this.dvy = "INFÓ";
    this.cag = "A játékhoz kérem tiltsa le a Privát Böngészés módot a böngészőjében.";
    this.kfp = "Ez a játék Google Chrome böngészőre van optimalizálva.";
    this.dad = "Kérjük használja a(z)";
    this.udh = " legújabb verzióját!";
    this.dax = "Sajnos ez a böngésző nem teljesen támogatott.";
    this.opm = "Ez a játék nem indítható FreePlay módban!";
    this.bfp = "Fordítsa a készülékét álló módba, hogy úgy játsszon, mint egy igazi nyerőgépen!";
    this.czh = "Állítsa be a játék felületét az Ön igényeinek megfelelően!";
    this.gpe = "VÁLASSZA KI A MEGFELELŐ SZÍNT, HOGY MEGDUPLÁZZA A NYEREMÉNYT";
    this.jzc = "VÁLASSZA KI A MEGFELELŐ KÁRTYASZÍNT, HOGY MEGNÉGYSZEREZZE A NYEREMÉNYT";
    this.lmg = "SZORZÁS EGY LEHETŐSÉG, HOGY NÖVELJE A NYEREMÉNYT";
    this.fpm = "Statisztika";
    this.xeo = "Összes Játék";
    this.avu = "Összes Tét";
    this.ser = "Összes Nyeremény";
    this.mem = "Összes Játék Idő";
    this.bju = "Elolvastam az üzenetet.";
    this.nqx = "KILÉPÉS";
    this.eps = "Előzmények";
    this.hgc = "Nincsenek játékok.";
    this.state = "STÁTUSZ";
    this.sap = "Fő Játék";
    this.osk = "Autom. Felírás";
    this.zbw = "Felírva";
    this.lvr = "Bónusz játék";
    this.apf = "Respin";
    this.gzt = "Bónusz";
    this.ksf = "Első Leosztás";
    this.zwi = "Második Leosztás";
    this.xhf = "Harmadik Leosztás";
    this.omz = "AUTOSTART BEÁLLÍTÁS";
    this.iwh = "Játékok száma:";
    this.kdr = "Stop autostart";
    this.eow = "A hitel kevesebb, mint:";
    this.vhy = "A hitel több, mint:";
    this.hyy = "A nyeremény több, mint:";
    this.fpi = "Az AUTOSTART funkció kikapcsolódik a bónusz játék kezdetén.";
    this.cey = "Megosztás a Facebook-on";
    this.vkk = "KIEGÉSZÍTŐ TÁJÉKOZTATÁST A JÁTÉKSZABÁLYOKBAN TALÁL.";
    this.xiv = "Reality Check";
    this.nfc = "Ön egy valóság-ellenőrzést kért.";
    this.cvz = "Nyomja meg az ELŐZMÉNYEK lehetőséget, hogy megtekintse a játéka előzményeit.";
    this.mbe = "Game break";
    this.xyi = "Game limits";
    this.dxg = "Self test";
    this.pda = "A JÁTÉKOSNAK AZ ELVI KIFIZETÉS ÖSSZEGE EBBEN A JÁTÉKBAN XY."
}
zvc.prototype = new bvb;

function xsw() {
    this.kpo = "MIZA MINIMĂ ESTE";
    this.teu = "MIZA MAXIMĂ";
    this.qco = "MIZA MIN.";
    this.jqf = "MIZA MAX.";
    this.lpn = "MIZĂ";
    this.start = "START";
    this.fye = "AJUTOR";
    this.cfr = "LISTA|CÂŞTIGURI";
    this.biy = "MENIU";
    this.fyx = "MENIUL|JOCULUI";
    this.qbk = "STOP";
    this.saw = "CREDIT";
    this.dhz = "SFÂRŞIT JOCUL";
    this.fhk = "CÂŞTIGĂTOR!";
    this.ymt = "MULT NOROC!";
    this.win = "CÂŞTIG";
    this.irp = "ULTIMUL CÂŞTIG";
    this.rrl = "COLECTA";
    this.hsr = "COLECTA";
    this.ott = "JOC";
    this.lmc = "AUTO|START";
    this.ivq = "COLECTARE|1/2";
    this.zxe = "IEŞIRE";
    this.afs = "APĂSAŢI START";
    this.evb = "ALEGEŢI MIZA";
    this.ikx = "COLECTARE|1/2";
    this.ret = "ÎNAPOI|LA JOC";
    this.bho = "Câştig total";
    this.hmz = "Avertizare";
    this.ndq = "TOTAL";
    this.kgx = "AŞTEPTAŢI VĂ ROG ...";
    this.blt = "Meniul Jocului";
    this.qhe = "VITEZĂ";
    this.qky = "FĂRĂ GARANŢIE LA DEFECTAREA APARATULUI.";
    this.zrd = "C O N T I N U A R E";
    this.voa = "AUTOSTART";
    this.dve = "LISTA CÂŞTIGURI";
    this.pch = "JOC";
    this.left = "STÂNGA";
    this.gqz = "DREAPTA";
    this.ok = "OK";
    this.wtk = "ÎNTRERUPERE";
    this.xcr = "Joc";
    this.hfk = "Colectare 1/2";
    this.fcm = "REGULILE JOCULUI";
    this.odp = "REGULILE|JOCULUI";
    this.sif = "Bonus!";
    this.qni = "BONUS";
    this.mmv = "PENTRU CONTINUARE APASĂ PE UN BUTON";
    this.awn = "CREDIT INSUFICIENT.";
    this.udc = "câştigă";
    this.axc = "V A L U E";
    this.of = "DIN";
    this.jxo = "ATINGEȚI ECRANUL PENTRU A CONTINUA";
    this.sxl = "ÎNCARCĂ ...";
    this.vhg = "ÎNCARCĂ ISTORIC ...";
    this.bbu = "Eroare de comunicare";
    this.gpq = "Aţi atins una dintre limite!";
    this.ofl = "Aţi atins numărul maxim de jocuri gratis!";
    this.zhs = "Jocul se încheie";
    this.kab = "Jocul se restartează";
    this.txm = "CÂŞTIGAT";
    this.error = "EROARE";
    this.cii = "FREEPLAY";
    this.wqq = "AUTO";
    this.mxr = "ID JOC";
    this.vtj = "TIMP DE JOC";
    this.fuv = "ultimele";
    this.qju = "jocuri";
    this.wdz = "CREDIT";
    this.audio = "AUDIO";
    this.fmz = "MUZICĂ";
    this.xws = "ECRAN COMPLET";
    this.bkk = "ECRAN|COMPLET";
    this.language = "LIMBA";
    this.tzw = "Nu reafișați";
    this.iai = "Sunetele nu pot fi încărcate!";
    this.vid = "Lipsesc resurse!";
    this.hhy = "Jucaţi fără sunet?";
    this.pve = "SETĂRI";
    this.pfy = "Vă rugăm opriţi aparatul!";
    this.dvy = "INFO";
    this.cag = "Vă rugăm dezactivaţi PRIVATE MODE în browser-ul dvs. pentru a juca.";
    this.kfp = "Acest joc este optimizat pentru Google Chrome.";
    this.lsv = "Vă rugăm utilizaţi versiunea actuală";
    this.dax = "Din păcate acest browser nu este sprijinit complet.";
    this.opm = "Acest joc nu poate fi pornit în modul freeplay!";
    this.bfp = "Treceţi aparatul dvs. în modul portret, pentru a juca ca la o maşină automată!";
    this.czh = "Ajustează interfaţa de joc nevoilor dvs!";
    this.gpe = "SELECTEAZĂ CULOAREA CORECTĂ PENTRU DUBLAREA CÂŞTIGULUI";
    this.jzc = "SELECTEAZĂ CULOAREA CORECTĂ A CĂRŢII PENTRU A CÂŞTIGA DE 4 ORI";
    this.lmg = "JOACĂ PENTRU ŞANSA DE A CREŞTE PROFITUL";
    this.fpm = "Statistică";
    this.xeo = "Număr jocuri";
    this.avu = "Pariuri totale";
    this.ser = "Câştig total";
    this.mem = "Timp total de joc";
    this.bju = "Am citit mesajul.";
    this.nqx = "ÎNCHEIERE|JOC";
    this.eps = "ISTORIC";
    this.hgc = "Nu există jocuri.";
    this.state = "STATUT";
    this.sap = "Joc principal";
    this.osk = "Auto colectare";
    this.zbw = "Colectat";
    this.lvr = "Bonusspins";
    this.apf = "Respin";
    this.gzt = "Bonus";
    this.ksf = "Primul Deal";
    this.zwi = "Al doilea deal";
    this.xhf = "Al treilea deal";
    this.omz = "SETĂRI AUTOSTART";
    this.iwh = "Numărul jocurilor:";
    this.kdr = "Oprire autostart";
    this.eow = "Credit sub:";
    this.vhy = "Credit peste:";
    this.hyy = "Câștig peste:";
    this.fpi = "Autostart se va opti la începerea bonusului.";
    this.cey = "Distribuie Facebook";
    this.vkk = "PENTRU INFORMAŢII SUPLIMENTARE, VEZI REGULILE JOCULUI.";
    this.xiv = "Reality Check";
    this.nfc = "Ai cerut un Reality Check.";
    this.cvz = "Apasă ISTORIC pentru a vedea istoricul tău de joc.";
    this.mbe = "Game break";
    this.xyi = "Game limits";
    this.dxg = "Self test";
    this.pda = "DECONTAREA TEORETICĂ CĂTRE JUCĂTORI A ACESTUI JOC ESTE DE XY."
}
xsw.prototype = new bvb;

function phy() {
    this.kpo = "MÍNIMA APOSTA É";
    this.teu = "MÁX. APOSTA";
    this.qco = "MÍN. APOSTA";
    this.jqf = "MÁX. APOSTA";
    this.lpn = "APOSTA";
    this.start = "PARTIDA";
    this.fye = "AJUDA";
    this.cfr = "ESQUEMA|DE PAGOS";
    this.biy = "MENU";
    this.fyx = "SELEÇÃO|DE JOGOS";
    this.qbk = "PARADA";
    this.saw = "CRÉDITO";
    this.dhz = "FIM DO JOGO";
    this.fhk = "VENCEDOR!";
    this.ymt = "BOA SORTE!";
    this.win = "GANHO";
    this.irp = "ULTIMO GANHO";
    this.rrl = "COLETAR";
    this.hsr = "COLETAR";
    this.ott = "JOGADA";
    this.lmc = "AUTO|PARTIDA";
    this.ivq = "METADE";
    this.zxe = "SAÍDA";
    this.afs = "PREMIR PARTIDA";
    this.evb = "SELECIONAR APOSTA";
    this.ikx = "METADE";
    this.ret = "VOLTAR|PARA|O JOGO";
    this.bho = "Ganho total";
    this.hmz = "Aviso";
    this.ndq = "TOTAL";
    this.kgx = "AGUARDE POR FAVOR ...";
    this.blt = "Seleção de jogos";
    this.qhe = "VELOCIDADE";
    this.qky = "NÃO SE ASSUME RESPONSABILIDADE POR AVARIAS NA MÁQUINA.";
    this.zrd = "C O N T I N U A R";
    this.voa = "AUTOPARTIDA";
    this.dve = "ESQUEMA DE PAGOS";
    this.pch = "JOGADA";
    this.left = "ESQUERDA";
    this.gqz = "DIREITA";
    this.ok = "OK";
    this.wtk = "CANCELAR";
    this.xcr = "Jogada";
    this.hfk = "Metade";
    this.fcm = "REGRAS DO JOGO";
    this.odp = "REGRAS|DO JOGO";
    this.sif = "Bonus!";
    this.qni = "BONUS";
    this.mmv = "PREMIR QUALQUER TECLA PARA CONTINUAR";
    this.awn = "NÃO HÁ CRÉDITO SUFICIENTE!";
    this.udc = "ganha";
    this.axc = "V A L U E";
    this.of = "DE";
    this.jxo = "TOCAR NA TELA PARA CONTINUAR";
    this.sxl = "CARREGANDO ...";
    this.vhg = "CARREGANDO HISTÓRICO ...";
    this.bbu = "Erro de comunicação";
    this.gpq = "Alcançou um dos limities!";
    this.ofl = "Alcançou a quantidade máxima de jogos livres!";
    this.zhs = "O jogo será encerrado";
    this.kab = "O jogo será reiniciado";
    this.txm = "GANHOU";
    this.error = "ERRO";
    this.cii = "FREEPLAY";
    this.wqq = "AUTO";
    this.mxr = "ID JOGO";
    this.vtj = "Playing Time";
    this.fuv = "Últimos";
    this.qju = "jogos";
    this.wdz = "DEPOSIT";
    this.audio = "AUDIO";
    this.fmz = "MUSIC";
    this.xws = "TELA CHEIA";
    this.bkk = "TELA|CHEIA";
    this.language = "IDIOMA";
    this.tzw = "Não exibir novamente";
    this.iai = "Sounds não podem ser carregados!";
    this.vid = "Faltam recursos!";
    this.hhy = "Jogar sem som?";
    this.pve = "AJUSTES";
    this.pfy = "Favor girar o seu aparelho!";
    this.dvy = "INFORMAÇÃO";
    this.cag = "Favor desativar o MODO PRIVADO no browser para iniciar o jogo.";
    this.kfp = "Este jogo é otimizado por Google Chrome.";
    this.lsv = "Favor usar a versão atual de";
    this.dax = "Infelizmente este browser não é completamente suportado.";
    this.opm = "Este jogo não pode ser iniciado no modo de jogo livre!";
    this.bfp = "Girar o seu aparelho para o modo de portrait, para jogar como em uma máquina real!";
    this.czh = "Adapte a interface do jogo às suas necessidades!";
    this.gpe = "ESCOLHA A COR CERTA PARA DOBRAR O GANHO";
    this.jzc = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.lmg = "GAMBLE PARA A CHANCE DE AUMENTAR O GANHO";
    this.fpm = "Estatísticas";
    this.xeo = "Número de jogos";
    this.avu = "Aposta total";
    this.ser = "Ganho total";
    this.mem = "Tempo total do jogo";
    this.bju = "Eu lí esta mensagem.";
    this.nqx = "ENCERRAR|JOGO";
    this.eps = "HISTÓRICO";
    this.hgc = "Ainda não existem jogos.";
    this.state = "ESTADO";
    this.sap = "Jogo principal";
    this.osk = "Coletado automaticamente";
    this.zbw = "Coletado";
    this.lvr = "Bonusspins";
    this.apf = "Respin";
    this.gzt = "Bonus";
    this.ksf = "Primeiro Deal";
    this.zwi = "Segundo Deal";
    this.xhf = "Terceiro Deal";
    this.omz = "AJUSTES AUTOPARTIDA";
    this.iwh = "Número de jogos:";
    this.kdr = "Parar autopartida";
    this.eow = "Crédito menor do que:";
    this.vhy = "Crédito maior do que:";
    this.hyy = "Ganho maior do que:";
    this.fpi = "O autopartida será parado no início do bonus.";
    this.cey = "Participar no Facebook";
    this.vkk = "PARA MAIS INFORMAÇÕES, CONSULTE AS REGRAS DO JOGO.";
    this.xiv = "Reality Check";
    this.nfc = "Solicitaste um Reality Check.";
    this.cvz = "Pressione HISTÓRICO para ver seu histórico de jogos.";
    this.mbe = "Game break";
    this.xyi = "Game limits";
    this.dxg = "Self test";
    this.pda = "O PAGAMENTO TEÓRICO AO JOGADOR PARA ESTE JOGO É DE XY."
}
phy.prototype = new bvb;

function krw() {
    this.kpo = "LA MISE MINIMALE EST DE";
    this.teu = "MISE MAX.";
    this.qco = "MISE MINI";
    this.jqf = "MISE MAX.";
    this.lpn = "MISE";
    this.start = "DEPART";
    this.fye = "AIDE";
    this.cfr = "TABLEAU|DES PAIEMENTS";
    this.biy = "MENU";
    this.fyx = "PLUS|DE JEUX";
    this.qbk = "ARRÊTEZ";
    this.saw = "CRÉDIT";
    this.dhz = "FIN DU JEU";
    this.fhk = "GAGNANT!";
    this.ymt = "BONNE CHANCE!";
    this.win = "GAIN";
    this.irp = "DERNIER GAIN";
    this.rrl = "ENCAISSER";
    this.hsr = "ENCAISSER";
    this.ott = "DOUBLER";
    this.lmc = "AUTO|LANCER";
    this.ivq = "ENCAISSER|MOITIÉ";
    this.zxe = "SORTIE";
    this.afs = "APPUYEZ SUR START";
    this.evb = "CHOISIR LA MISE";
    this.ikx = "ENCAISSER|MOITIÉ";
    this.ret = "RETOUR|AU JEU";
    this.bho = "Gain total";
    this.hmz = "Avertissement";
    this.ndq = "TOTALE";
    this.kgx = "ATTENDEZ S'IL VOUS PLAÎT ...";
    this.blt = "Plus de jeux";
    this.qhe = "VITESSE";
    this.qky = "Á L'OCCASION D´ERREUR D´APPAREIL DÉCLINER TOUTE RESPONSABILITÉ.";
    this.zrd = "C O N T I N U E R";
    this.voa = "AUTO LANCER";
    this.dve = "TABLEAU DES PAIEMENTS";
    this.pch = "DOUBLER";
    this.left = "GAUCHE";
    this.gqz = "DROITE";
    this.ok = "OK";
    this.wtk = "ANNULER";
    this.xcr = "Doubler";
    this.hfk = "Encaisser moitié";
    this.fcm = "RÈGLES DU JEU";
    this.odp = "RÈGLES DU JEU";
    this.sif = "Bonus!";
    this.qni = "BONUS";
    this.mmv = "APPUYEZ SUR UNE TOUCHE POUR CONTINUER";
    this.awn = "PAS ASSEZ DE CRÉDIT";
    this.udc = "gagne";
    this.axc = "V A L U E";
    this.of = "SUR";
    this.jxo = "EFFLEURE L'ÉCRAN POUR CONTINUER";
    this.sxl = "CHARGEMENT EN COURS ...";
    this.vhg = "CHARGEMENT DE L'HISTORIQUE EN COURS ...";
    this.bbu = "Erreur de communication";
    this.gpq = "Vous avez atteint une des limites!";
    this.ofl = "Vous avez atteint le nombre maximum des jeux gratuits!";
    this.zhs = "Le jeu sera terminé";
    this.kab = "Le jeu sera démarré de nouveau";
    this.txm = "GAGNÉ";
    this.error = "ERREUR";
    this.cii = "JEU GRATUIT";
    this.wqq = "AUTO";
    this.mxr = "ID DU JEU";
    this.vtj = "TEMPS DE JEU";
    this.fuv = "Les";
    this.qju = "derniers jeux";
    this.wdz = "AVOIR";
    this.audio = "AUDIO";
    this.fmz = "MUSIQUE";
    this.xws = "PLEIN ÉCRAN";
    this.bkk = "PLEIN|ÉCRAN";
    this.language = "LANGUE";
    this.tzw = "Ne pas afficher encore une fois";
    this.iai = "Impossible de charger des sounds!";
    this.vid = "Manque de ressources!";
    this.hhy = "Jouer sans son?";
    this.pve = "CONFIGUR.";
    this.pfy = "Merci de tourner votre matériel!";
    this.dvy = "INFO";
    this.cag = "Veuillez désactiver le MODE PRIVÉ dans le navigateur afin de démarrer le jeu.";
    this.kfp = "Ce jeu est optimisé pour Google Chrome.";
    this.lsv = "Veuilllez utiliser la version à jour de";
    this.dax = "Malheureusement, ce browser n'est intégralement supporté.";
    this.opm = "Impossible de démarrer ce jeu au mode jeu gratuit!";
    this.bfp = "Tournez votre matériel dans le mode portrait pour jouer comme sur une véritable machine!";
    this.czh = "Adapte l'interface de jeu à tes besoins!";
    this.gpe = "CHOISIS LA BONNE COULEUR AFIN DE DOUBLER LE GAIN";
    this.jzc = "CHOISIS LA BONNE COULEUR DE LA CARTE AFIN DE QUADRUPLER LE GAIN";
    this.lmg = "GAMBLE POUR LA CHANCE DE MULTIPLIER LE GAIN";
    this.fpm = "Statistiques";
    this.xeo = "Nombre des jeux";
    this.avu = "Total des mises";
    this.ser = "Gain total";
    this.mem = "Temps total du jeu";
    this.bju = "J'ai lu le message";
    this.nqx = "TERMINER|LE JEU";
    this.eps = "Historique";
    this.hgc = "Il n'y a pas encore de jeux joués.";
    this.state = "ÉTAT";
    this.sap = "Jeu principal";
    this.osk = "Pris automatiquement";
    this.zbw = "Pris";
    this.lvr = "Bonusspins";
    this.apf = "Respin";
    this.gzt = "Bonus";
    this.ksf = "Premier Deal";
    this.zwi = "Deuxième Deal";
    this.xhf = "Troisième Deal";
    this.omz = "AUTOSTART CONFIGURATION";
    this.iwh = "Nombre des jeux:";
    this.kdr = "Arrêter autostart";
    this.eow = "Crédit inférieur à:";
    this.vhy = "Crédit supérieur à:";
    this.hyy = "Gain supérieur à:";
    this.fpi = "L'autostart est arrêté au début du bonus.";
    this.cey = "Partager sur Facebook";
    this.vkk = "POUR PLUS D'INFORMATIONS, CONSULTEZ LES RÈGLES DU JEU.";
    this.xiv = "Reality Check";
    this.nfc = "Tu as demandé un Reality Check.";
    this.cvz = "Appuie sur HISTORIQUE pour afficher ton historique de jeu.";
    this.mbe = "Game break";
    this.xyi = "Game limits";
    this.dxg = "Self test";
    this.pda = "LE VERSEMENT THÉORIQUE AU JOUEUR POUR CE JEU S'ÉLÈVE À XY."
}
krw.prototype = new bvb;

function zyt() {
    this.kpo = "NAJMANJI ULOG JE";
    this.teu = "MAX ULOG";
    this.qco = "MIN. ULOG";
    this.jqf = "MAKS. ULOG";
    this.lpn = "ULOG";
    this.start = "START";
    this.fye = "POMOĆ";
    this.cfr = "LISTA DOBITAKA";
    this.biy = "IZBORNIK";
    this.fyx = "VIŠE|IGARA";
    this.qbk = "STOP";
    this.saw = "KREDIT";
    this.dhz = "KRAJ IGRE";
    this.fhk = "DOBITAK!";
    this.ymt = "SRETNO!";
    this.win = "DOBITAK";
    this.irp = "ZADNJI DOBITAK";
    this.rrl = "UPIŠI";
    this.hsr = "UPIŠI";
    this.ott = "DUPLANJE";
    this.lmc = "AUTO|START";
    this.ivq = "UZMI|1/2";
    this.zxe = "IZLAZ";
    this.afs = "PRETISNITE START";
    this.evb = "BIRAJTE ULOG";
    this.ikx = "UZMI|1/2";
    this.ret = "POVRATAK|U IGRU";
    this.bho = "Ukubni dobitci";
    this.hmz = "Upozorenje";
    this.ndq = "UKUBNI";
    this.kgx = "MOLIMO PRIČEKAJTE ...";
    this.blt = "Više igara";
    this.qhe = "BRZINA";
    this.qky = "Kod kvara na uređaju nema jamstva.";
    this.zrd = "D A L J E";
    this.voa = "AUTOSTART";
    this.dve = "LISTA DOBITAKA";
    this.pch = "DUPLANJE";
    this.left = "LIJEVA";
    this.gqz = "DESNA";
    this.ok = "OK";
    this.wtk = "PREKID";
    this.xcr = "Duplanje";
    this.hfk = "Uzmi 1/2";
    this.fcm = "PRAVILA IGRE";
    this.odp = "PRAVILA IGRE";
    this.sif = "Bonus!";
    this.qni = "BONUS";
    this.mmv = "ZA NASTAVITI PRITISNITE BILO KOJU TIPKU";
    this.awn = "NEMATE DOVOLJNO KREDITA.";
    this.udc = "dobici";
    this.axc = "V A L U E";
    this.of = "OD";
    this.jxo = "ZA NASTAVAK DODIRNITE ZASLON";
    this.sxl = "UČITAVANJA ...";
    this.vhg = "POVIJEST UČITAVANJA ...";
    this.bbu = "Komunikacijska pogreška";
    this.gpq = "Dostigli ste jednu od graničnih vrijednosti!";
    this.ofl = "Dostigli ste maksimum besplatnih igara!";
    this.zhs = "Igra se zatvara";
    this.kab = "Igra se iznova učitava";
    this.txm = "OSVOJENO";
    this.error = "POGREŠKA";
    this.cii = "FREEPLAY";
    this.wqq = "AUTO";
    this.mxr = "ID IGRE";
    this.vtj = "Vrijeme igre";
    this.fuv = "posljednjih";
    this.qju = "igara";
    this.wdz = "DEPOZIT";
    this.audio = "ZVUKA";
    this.fmz = "GLAZBA";
    this.xws = "PUN ZASLON";
    this.bkk = "PUN ZASLON";
    this.language = "JEZIKA";
    this.tzw = "Ne prikazuj ponovo";
    this.iai = "Zvukovi se ne mogu učitati!";
    this.vid = "Nedostaju resursi!";
    this.hhy = "Želite li igrati uz zvuk?";
    this.pve = "POSTAVKE";
    this.pfy = "Uključite svoj uređaj!";
    this.dvy = "INFORMACIJE";
    this.cag = "Molimo deaktivirajte PRIVATNI MOD u Vašem pregledniku kako biste mogli igrati";
    this.kfp = "Ova igra je optimizirana za Google Chrome.";
    this.lsv = "Molimo koristite se trenutnom inačicom";
    this.dax = "Nažalost ovaj preglednik nije u potpunosti podržan";
    this.opm = "Ova se igra ne može pokrenuti u režimu slobodne igre!";
    this.bfp = "Podesite svoj uređaj na portretni format kako biste igrali kao na pravoma automatu!";
    this.czh = "Prilagodite sučelje igre svojim potrebama!";
    this.gpe = "ODABERI PRAVU BOJU I TIME UDVOSTRUČI DOBITAK";
    this.jzc = "ODABERI PRAVI ZNAK I TIME UČETVEROSTRUČI DOBITAK";
    this.lmg = "KOCKANJEM OSVOJI ŠANSU ZA POVEĆANJE DOBITKA";
    this.fpm = "Statistike";
    this.xeo = "Ukupno igara";
    this.avu = "Ukupni ulog";
    this.ser = "Ukupno dobitaka";
    this.mem = "Ukupno vrijeme igre";
    this.bju = "Pročitao sam ovu poruku";
    this.nqx = "IZLAZ|IZ IGRE";
    this.eps = "Povijest";
    this.hgc = "Nema odigranih igara.";
    this.state = "STANJE";
    this.sap = "Glavna igra";
    this.osk = "Auto. pokupljeno";
    this.zbw = "Pokupljeno";
    this.lvr = "Besplatne igre";
    this.apf = "Dodatne okretaje";
    this.gzt = "Bonus";
    this.ksf = "Prvo dijeljenje";
    this.zwi = "Drugo dijeljenje";
    this.xhf = "Treće dijeljenje";
    this.omz = "POSTAVKE AUTOMATSKE IGRE";
    this.iwh = "Ukupno igara:";
    this.kdr = "Zaustavljanje automatske igre";
    this.eow = "Kredit manji od:";
    this.vhy = "Kredit veći od:";
    this.hyy = "Dobitak veći od:";
    this.fpi = "Automatska igra će se zaustaviti na početku besplatne igre.";
    this.cey = "Podijeli na Facebooku";
    this.vkk = "ZA VIŠE INFORMACIJA POGLEDAJTE PRAVILA IGRE.";
    this.xiv = "Reality Check";
    this.nfc = "Zatražili ste Reality Check.";
    this.cvz = "Pritisni POVIJEST za pregled prijašnjih igara.";
    this.mbe = "Game break";
    this.xyi = "Game limits";
    this.dxg = "Self test";
    this.pda = "TEORETSKI POVRATAK NA IGRAČA ZA OVU IGRU JE XY."
}
zyt.prototype = new bvb;

function ihs() {
    this.kpo = "MINIMA PUNTATA È";
    this.teu = "PUNTATA MASSIMA";
    this.qco = "MIN. PUNTATA";
    this.jqf = "MASS. PUNTATA";
    this.lpn = "PUNTATA";
    this.start = "START";
    this.fye = "AIUTO";
    this.cfr = "TABELLA VINCITE";
    this.biy = "MENU";
    this.fyx = "SCELTA|GIOCHI";
    this.qbk = "STOP";
    this.saw = "CREDITO";
    this.dhz = "FINE PARTITA";
    this.fhk = "VINCITORE!";
    this.ymt = "BUONA FORTUNA!";
    this.win = "VINCITA";
    this.irp = "ULTIMA VINCITA";
    this.rrl = "INCASSA";
    this.hsr = "INCASSA";
    this.ott = "GAMBLE";
    this.lmc = "AUTO|START";
    this.ivq = "METÀ";
    this.zxe = "FINE";
    this.afs = "PREMI START";
    this.evb = "SCEGLI PUNTATA";
    this.ikx = "METÀ";
    this.ret = "RITORNO|AL GIOCO";
    this.bho = "Totale vincita";
    this.hmz = "Attenzione";
    this.ndq = "TOTALE";
    this.kgx = "ATTENDERE PREGO ...";
    this.blt = "Scelta Giochi";
    this.qhe = "VELOCITÀ";
    this.qky = "In caso di malfunzionamento nessuna responsabilità assunta.";
    this.zrd = "C O N T I N U A";
    this.voa = "AUTOSTART";
    this.dve = "TABELLA VINCITE";
    this.pch = "GAMBLE";
    this.left = "SINISTRA";
    this.gqz = "DESTRA";
    this.ok = "OK";
    this.wtk = "CANCELLA";
    this.xcr = "Gamble";
    this.hfk = "Metà";
    this.fcm = "REGOLAMENTO";
    this.odp = "REGOLAMENTO";
    this.sif = "Bonus!";
    this.qni = "BONUS";
    this.mmv = "PREMI UN TASTO PER CONTINUARE";
    this.awn = "CREDITO INSUFFICIENTE!";
    this.udc = "vince";
    this.axc = "V A L U E";
    this.of = "DI";
    this.jxo = "TOCCARE LO SCHERMO PER CONTINUARE";
    this.sxl = "STA CARICANDO ...";
    this.vhg = "STA CARICANDO LA CRONACA ...";
    this.bbu = "Errore di comunicazione";
    this.gpq = "Hai raggiunto uno dei limiti!";
    this.ofl = "Hai raggiunto il numero massimo di free games!";
    this.zhs = "La partita sta terminando";
    this.kab = "La partita sta ripartendo";
    this.txm = "VINTO";
    this.error = "ERRORE";
    this.cii = "FREEPLAY";
    this.wqq = "AUTO";
    this.mxr = "GAME ID";
    this.vtj = "Durata del gioco";
    this.fuv = "Ultime partite";
    this.qju = "";
    this.wdz = "DEPOSITO";
    this.audio = "AUDIO";
    this.fmz = "MUSICA";
    this.xws = "SCHERMO INTERO";
    this.bkk = "SCHERMO INTERO";
    this.language = "LINGUA";
    this.tzw = "Non mostrare di nuovo";
    this.iai = "Suoni non caricabili!";
    this.vid = "Mancano risorse!";
    this.hhy = "Giocare senza suoni?";
    this.pve = "SETTAGGI";
    this.pfy = "Prego girare l'apparecchio!";
    this.dvy = "INFO";
    this.cag = "Prego disattivare il MODO PRIVATO nel browser per iniziare la partita";
    this.kfp = "La partita è ottimizzata per Google Chrome.";
    this.lsv = "Prego utilizzare la versione attuale di";
    this.dax = "Purtroppo il presente browser non viene supportato interamente";
    this.opm = "Impossibile avviare questa partita nel modo freeplay!";
    this.bfp = "Girare l'apparecchio nel modo ritratto per giocare come su un apparecchio vero!";
    this.czh = "Aggiusta l'interfaccia del gioco come ti piace!";
    this.gpe = "SCEGLI IL COLORE GIUSTO PER RADDOPPIARE LA VINCITA";
    this.jzc = "SCEGLI IL SEME GIUSTO PER QUADRUPLARE LA VINCITA";
    this.lmg = "GAMBLE PER L'OPPORTUNITÀ DI AUMENTARE LA VINCITA";
    this.fpm = "Statistica";
    this.xeo = "Totale partite";
    this.avu = "Totale puntata";
    this.ser = "Totale vincita";
    this.mem = "Totale durata del gioco";
    this.bju = "Ho letto il messaggio";
    this.nqx = "TERMINARE|LA PARTITA";
    this.eps = "Cronaca";
    this.hgc = "Nessuna partita giocata.";
    this.state = "STATO";
    this.sap = "Partita principale";
    this.osk = "Raccolto autom.";
    this.zbw = "Raccolto";
    this.lvr = "Bonusspin";
    this.apf = "Respin";
    this.gzt = "Bonus";
    this.ksf = "Primo deal";
    this.zwi = "Secondo deal";
    this.xhf = "Terzo deal";
    this.omz = "SETTAGGI AUTOSTART";
    this.iwh = "Numero di partite:";
    this.kdr = "Fermare l'autostart";
    this.eow = "Credito più basso di:";
    this.vhy = "Credito più alto di:";
    this.hyy = "Vincita più alta di:";
    this.fpi = "L'autostart si ferma all'inizio del bonus.";
    this.cey = "Dividi su facebook";
    this.vkk = "PER ULTERIORI INFORMAZIONI CONSULTARE LE REGOLE DI GIOCO.";
    this.xiv = "Reality Check";
    this.nfc = "Avete richiesto un Reality Check.";
    this.cvz = "Premere CRONACA per mostrare la cronaca della giocata.";
    this.mbe = "Game break";
    this.xyi = "Game limits";
    this.dxg = "Self test";
    this.pda = "IL PAGAMENTO TEORICO DI QUESTO GIOCO IN FAVORE DEL GIOCATORE AMMONTA A XY."
}
ihs.prototype = new bvb;

function nwh() {
    this.kpo = "MIN. INSATSEN ÄR";
    this.teu = "MAXIMAL INSATS";
    this.qco = "MIN. INSATS";
    this.jqf = "MAX. INSATS";
    this.lpn = "INSATS";
    this.start = "STARTA";
    this.fye = "HJÄLP";
    this.cfr = "VINSTTABELL";
    this.biy = "MENY";
    this.fyx = "FLER|SPEL";
    this.qbk = "STOPP";
    this.saw = "KREDIT";
    this.dhz = "SPELET ÄR SLUT";
    this.fhk = "VINNARE!";
    this.ymt = "LYCKA TILL!";
    this.win = "VINN";
    this.irp = "SENASTE VINSTEN";
    this.rrl = "INKASSERA";
    this.hsr = "INKASSERA";
    this.ott = "DUBBLERA";
    this.lmc = "AUTO|START";
    this.ivq = "HÄLFTEN|1/2";
    this.zxe = "AVSLUTA";
    this.afs = "TRYCK PÅ START";
    this.evb = "VÄLJ INSATS";
    this.ikx = "HÄLFTEN";
    this.ret = "ÅTERGÅ|TILL SPELET";
    this.bho = "Total Vinst";
    this.hmz = "Varning";
    this.ndq = "TOTALT";
    this.kgx = "VAR VÄNLIG VÄNTA ...";
    this.blt = "Fler spel";
    this.qhe = "TEMPO";
    this.qky = "Vid tekniskt fel annulleras alla insatser och spel.";
    this.zrd = "F O R T S Ä T T";
    this.voa = "AUTOSTART";
    this.dve = "VINSTTABELL";
    this.pch = "DUBBLERA";
    this.left = "VÄNSTER";
    this.gqz = "HÖGER";
    this.ok = "OK";
    this.wtk = "AVBRYT";
    this.xcr = "Dubblering";
    this.hfk = "Hälften";
    this.fcm = "SPELREGLER";
    this.odp = "SPELREGLER";
    this.sif = "Bonus!";
    this.qni = "BONUS";
    this.mmv = "TRYCK PÅ EN KNAPP FÖR ATT FORTSÄTTA";
    this.awn = "FÖR LÅGT SALDO!";
    this.udc = "vinster";
    this.axc = "V A L U E";
    this.of = "AV";
    this.jxo = "PEKA PÅ SKÄRMEN FÖR ATT FORTSÄTTA";
    this.sxl = "LÄSER ...";
    this.vhg = "LÄSER IN HISTORIKEN ...";
    this.bbu = "Kommunikationsfel";
    this.gpq = "Du har nått en av gränserna!";
    this.ofl = "Du har nått det maximala antalet gratisspel!";
    this.zhs = "Spelet avslutas";
    this.kab = "Spelet startas om";
    this.txm = "VUNNA";
    this.error = "FEL";
    this.cii = "GRATISSPEL";
    this.wqq = "AUTO";
    this.mxr = "SPEL-ID";
    this.vtj = "SPELTID";
    this.fuv = "senaste";
    this.qju = "spelen";
    this.wdz = "INSÄTTNING";
    this.audio = "LJUD";
    this.fmz = "MUSIK";
    this.xws = "HELSKÄRM";
    this.bkk = "HELSKÄRM";
    this.language = "SPRÅK";
    this.tzw = "Visa inte igen";
    this.iai = "Ljud kan inte laddas!";
    this.vid = "Resurser saknas!";
    this.hhy = "Spela utan ljud?";
    this.pve = "INSTÄLLN.";
    this.pfy = "Vänd din enhet!";
    this.dvy = "INFO";
    this.cag = "Avaktivera PRIVATLÄGET i din webbläsare för att spela spelet.";
    this.kfp = "Det här spelet är optimerat för Google Chrome.";
    this.lsv = "Använd den senaste versionen av";
    this.dax = "Tyvärr stöds inte den här webbläsaren fullt ut.";
    this.opm = "Det här spelet kan inte startas i gratisspelsläget!";
    this.bfp = "Håll din enhet i porträttläge för att spela som på en riktig spelautomat!";
    this.czh = "Anpassa spelgränssnittet efter dina behov!";
    this.gpe = "VÄLJ RÄTT FÄRG FÖR ATT DUBBLA VINSTEN";
    this.jzc = "VÄLJ RÄTT FÄRGSVIT FÖR ATT FYRDUBBLA VINSTEN";
    this.lmg = "SPELA FÖR ATT FÅ CHANSEN ATT ÖKA VINSTEN";
    this.fpm = "Statistik";
    this.xeo = "Totalt antal spel";
    this.avu = "Totalinsats";
    this.ser = "Totalvinst";
    this.mem = "Total speltid";
    this.bju = "Jag har läst detta meddelande";
    this.nqx = "AVSLUTA|SPELET";
    this.eps = "Historik";
    this.hgc = "Inga spel har spelats.";
    this.state = "STATUS";
    this.sap = "Huvudspel";
    this.osk = "Auto. Inkasserat";
    this.zbw = "Inkasserat";
    this.lvr = "Bonusspinn";
    this.apf = "Respin";
    this.gzt = "Bonus";
    this.ksf = "Första given";
    this.zwi = "Andra given";
    this.xhf = "Tredje given";
    this.omz = "AUTOSTARTINSTÄLLNINGAR";
    this.iwh = "Antal spelrundor:";
    this.kdr = "Stoppa autospel";
    this.eow = "Saldo lägre än:";
    this.vhy = "Saldo högre än:";
    this.hyy = "Vinst högre än:";
    this.fpi = "Autospelen kommer att stoppas då bonusen startar.";
    this.cey = "Dela på Facebook";
    this.vkk = "SE SPELREGLERNA FÖR MER INFORMATION.";
    this.xiv = "Reality Check";
    this.nfc = "Du har begärt att få en statusuppdatering.";
    this.cvz = "Tryck på HISTORIK för att visa din spelhistorik.";
    this.mbe = "Spelpaus";
    this.xyi = "Spelgränser";
    this.dxg = "Självtest";
    this.pda = "DEN TEORETISKA ÅTERBETALNINGEN TILL SPELAREN FÖR DET HÄR SPELET ÄR XY."
}
nwh.prototype = new bvb;

function pry() {
    this.sxk = "LINES";
    this.lln = "LINE";
    this.cqx = "BET / LINE";
    this.boe = "WAYS";
    this.fuu = "WAY";
    this.tir = "BONUSSPINS LEFT";
    this.yar = "TOTAL BONUSSPINS";
    this.kcf = "BONUSSPINS PLAYED";
    this.gio = "BONUSSPINS LEFT";
    this.agi = "CONGRATULATIONS YOU WIN!";
    this.bgj = "BONUS WIN";
    this.daa = "SCATTER";
    this.qis = "SCATTERED:";
    this.nqt = "SYMBOLS";
    this.yte = "SYMBOL";
    this.yxb = "You win extra BONUSSPINS!";
    this.stj = "Wins pay only from left to right!";
    this.dls = "BONUS ENTRY WIN:";
    this.chi = "BONUSSPINS";
    this.xcn = "BONUSSPINS are played with the same bet and number of lines as the initiating game.";
    this.skq = "Line Wins: Only the highest line win is paid on each line played. Line wins are a multiple of the line bet. Line wins from different lines are added.";
    this.uzy = "Scatter Wins: Scatter wins are a multiple of the total bet. Wins from Scatter symbols are added to the line wins.";
    this.ily = "BONUS HELP";
    this.onu = "SYMBOL HELP";
    this.acn = "WINLINE HELP";
    this.syq = "WINWAY HELP";
    this.lzm = "You win an extra 15 BONUSSPINS!";
    this.clx = "Play the Bonus until you have no BONUSSPINS left. BONUSSPINS can be re-triggered during the Bonus.";
    this.pok = "GAMBLE AMOUNT";
    this.cfy = "RED/BLACK GAMBLE TO WIN";
    this.alc = "SUIT GAMBLE TO WIN";
    this.alb = "15 BONUSSPINS are won with 3, 4 or 5 SCATTERED Symbols on any position! All BONUSSPIN wins are multiplied by 3.";
    this.cdm = "Finish placing your bets!";
    this.nuh = "Place your bets please!";
    this.mgw = "No more bets!";
    this.kgs = "Good Luck!";
    this.rnl = "Better luck next time!";
    this.ixo = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.jre = "Bets accepted!";
    this.rqb = "Bets not accepted!";
    this.krm = "Game in progress, please wait!";
    this.adu = "WIN UP TO";
    this.xbg = "WIN HISTORY";
    this.bqp = "BONUS END";
    this.ogj = "Bonus Multiplier";
    this.ldk = "Freespins!";
    this.kiu = "FREESPINS PLAYED";
    this.uie = "FREESPIN WIN";
    this.nim = "CONGRATULATION!";
    this.hbs = "Congratulation, you get";
    this.pep = "You have";
    this.tih = "freespins remaining!"
}
pry.prototype = new ahx;

function kwx() {
    this.sxk = "ЛИНИИ";
    this.lln = "ЛИНИЯ";
    this.cqx = "СТ. / ЛИНИЮ";
    this.tir = "OСТАЛОСЬ ПРИЗОВЫХ ВРАЩЕНИЙ";
    this.yar = "Бонусные вращения";
    this.kcf = "СЫГРАННО ВРАЩЕНИЙ";
    this.gio = "OСТАЛОСЬ ПРИЗОВЫХ ВРАЩЕНИЙ";
    this.agi = "ПОЗДРАВЛЯЕМ! ВЫ ВЫИГРАЛИ!";
    this.bgj = "БОНУС ВЫИГРЫШ";
    this.daa = "SCATTER";
    this.qis = "SCATTERED:";
    this.nqt = "СИМВОЛЫ";
    this.yte = "СИМВОЛ";
    this.chi = "призовых вращений";
    this.stj = "Все выигрыши считаются только слевa направо.";
    this.yxb = "Вы выиграли дополнительные бонусные вращения!";
    this.xcn = "Ставка и количество линий в игре бонусные вращения те же самые, что и в инициировавшей игре.";
    this.skq = "Линейные выигрыши: Засчитывается только максимальный выигрыш на каждой линии. Размер линейных выигрышей – многократная сумма ставки. Линейные выигрыши на разных линиях суммируются.";
    this.uzy = "Выигрыши Scatter Сумма выигрышей Scatter – многократная сумма общей ставки. Выигрыши с символами Scatter прибавляются к линейным выигрышам.";
    this.boe = "ПУТИ";
    this.fuu = "ПУТЬ";
    this.ily = "БОНУС – ПОМОЩЬ";
    this.onu = "СИМВОЛ ПОМОЩЬ";
    this.acn = "ЛИНИИ ВЫИГРЫША ПОМОЩЬ";
    this.syq = "ПОМОЩЬ К ПУТИ К ВЫИГРЫШУ";
    this.ixo = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ В 4 РАЗА";
    this.pok = "СУММА РИСКА";
    this.cfy = "РИСКНУТЬ КРАСНАЯ/ЧЕРНАЯ";
    this.alc = "ВЫБОР МАСТИ";
    this.adu = "ВЫИГРАЙ ДО";
    this.xbg = "ХРОНИКА ВЫИГРЫШЕЙ";
    this.bqp = "КОНЕЦ БОНУСА";
    this.ldk = "бесплатных игр!";
    this.kiu = "СЫГРАННЫЕ БЕСПЛАТНЫЕ ИГРЫ";
    this.uie = "ВЫИГРЫШ БЕСПЛАТНОЙ ИГРЫ";
    this.nim = "ПОЗДРАВЛЯЕМ!";
    this.hbs = "Поздравляем, вы получили";
    this.pep = "У вас еще";
    this.tih = "бесплатных игр!";
    this.jre = "Ставки признаны!";
    this.rqb = "Ставки не признаны!";
    this.krm = "Игра в процессе, пожалуйста, подождите...";
    this.cdm = "Игра сейчас начнется!";
    this.nuh = "Сделайте ставку, пожалуйста!";
    this.mgw = "Ставок больше нет!";
    this.kgs = "Удачи!";
    this.rnl = "Желаем удачи в следующий раз!";
    this.lzm = "Вы выиграли следующие 15 призовых вращений барабанов!";
    this.clx = "Бонус призовых вращений заканчивается когда призовых вращений больше нет. Дополнительные призовые вращения могут быть добавлены к Бонусу призовых вращений.";
    this.alb = "Вы получите 15 призовых вращений барабанов при выпадении 3, 4 или 5 символов СКАТТЕР на любой позиции. Все выигрыши умножаются на 3."
}
kwx.prototype = new tcb;

function kpd() {
    this.sxk = "LÍNEAS";
    this.lln = "LÍNEA";
    this.cqx = "APUE. / LÍNEA";
    this.tir = "BONUSSPINS RESTANTES";
    this.yar = "TOTAL DE BONUSSPINS";
    this.kcf = "BONUSSPINS JUGADOS";
    this.gio = "BONUSSPINS RESTANTES";
    this.agi = "ENHORABUENA, HAS GANADO!";
    this.bgj = "PREMIO BONUS";
    this.daa = "SCATTER";
    this.qis = "SCATTERED:";
    this.nqt = "SIMBOLOS";
    this.yte = "SIMBOLO";
    this.ogj = "Multiplicador de bonus";
    this.dls = "PREMIO ENTRADA BONUS:";
    this.chi = "JUEGOS LIBRES";
    this.stj = "Premios de la izquierda a la derecha!";
    this.yxb = "Ha ganado BONUSSPINS extra.";
    this.xcn = "Los BONUSSPINS se juegan con la misma apuesta y el número de lineas que el juego inicial.";
    this.skq = "Premios de línea: Sólo se paga el mayor premio de línea por cada línea jugada. Los premios de línea son un múltiplo de la apuesta de la línea. Se suman los premios de línea de las diferentes líneas.";
    this.uzy = "Premios Scatter: Los premios Scatter son múltiplos de la apuesta total. Los premios de los símbolos scatter se suman a los premios de la línea.";
    this.boe = "CAMINOS";
    this.fuu = "CAMINO";
    this.ily = "AYUDA DE BONUS";
    this.onu = "SÍMBOLO AYUDA";
    this.acn = "LÍNEA GANADORA AYUDA";
    this.syq = "AYUDA FORMAS DE PREMIO";
    this.ixo = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.pok = "PREMIO";
    this.cfy = "ROJO/NEGRO PREMIO";
    this.alc = "PREMIO DE SIMBOLO";
    this.adu = "GANANCIAS HASTA";
    this.xbg = "HISTORIAL DE GANANCIAS";
    this.bqp = "FIN DE BONUS";
    this.ldk = "Giros gratis!";
    this.kiu = "GIROS GRATIS JUGADOS";
    this.uie = "PREMIO GIRO GRATIS";
    this.nim = "¡ENHORABUENA!";
    this.hbs = "¡Enhorabuena, ha conseguido";
    this.pep = "¡Le quedan";
    this.tih = "giros gratis!";
    this.jre = "Aceptar apuestas!";
    this.rqb = "Apuestas rechazadas!";
    this.krm = "El juego no ha concluido, por favor espere!";
    this.cdm = "El juega va a comenzar!";
    this.nuh = "Haga juego!";
    this.mgw = "No más apuestas!";
    this.kgs = "¡Mucha suerte!";
    this.rnl = "¡Mejor suerte la próxima vez!";
    this.lzm = "Premio de 15 Freespins addicionales!";
    this.clx = "El bono concluye cuando todos los BONUSSPINS se hayan jugado. En bono pueden ganarse BONUSSPINS adicionales.";
    this.alb = "Se gana 15 Freespins con 3, 4 o 5 simbolos de SCATTER en alguna posicion! Se triplican todos los premios de freespins."
}
kpd.prototype = new uaw;

function lrd() {
    this.sxk = "LINIEN";
    this.lln = "LINIE";
    this.cqx = "EINS. / LINIE";
    this.tir = "VERBLEIBENDE BONUSSPINS";
    this.yar = "TOTAL BONUSSPINS";
    this.kcf = "GESPIELTE BONUSSPINS";
    this.gio = "VERBLEIBENDE BONUSSPINS";
    this.agi = "GRATULIERE GEWONNEN!";
    this.bgj = "BONUS GEWINN";
    this.daa = "SCATTER";
    this.qis = "SCATTERED:";
    this.nqt = "SYMBOLE";
    this.yte = "SYMBOL";
    this.ogj = "Bonus Multiplikator";
    this.dls = "BONUS START GEWINN:";
    this.chi = "BONUSSPINS";
    this.stj = "Gewinne werden nur von links nach rechts gewertet!";
    this.yxb = "Zusätzliche BONUSSPINS gewonnen!";
    this.xcn = "Die BONUSSPINS werden mit demselben Einsatz und Linienanzahl wie das auslösende Spiel gespielt.";
    this.skq = "Liniengewinne: Nur der höchste Liniengewinn je gespielter Linie zählt. Liniengewinne sind ein Vielfaches des Linieneinsatzes. Die Liniengewinne von verschiedenen Linien werden addiert.";
    this.uzy = "Scattergewinne: Scatter-Gewinne sind ein Vielfaches des Gesamteinsatzes. Gewinne aus Scatter-Symbolen werden den Liniengewinnen hinzugezählt.";
    this.boe = "WEGE";
    this.fuu = "WEG";
    this.ily = "BONUS HILFE";
    this.onu = "SYMBOL HILFE";
    this.acn = "GEWINNLINIEN HILFE";
    this.syq = "GEWINNWEGE HILFE";
    this.ixo = "WÄHLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.pok = "RISIKO";
    this.cfy = "ROT/SCHWARZ CHANCE";
    this.alc = "SYMBOL CHANCE";
    this.adu = "GEWINNE BIS ZU";
    this.xbg = "GEWINNHISTORIE";
    this.bqp = "BONUS ENDE";
    this.ldk = "Freespins!";
    this.kiu = "GESPIELTE FREESPINS";
    this.uie = "FREESPIN GEWINN";
    this.nim = "GRATULIERE!";
    this.hbs = "Gratulation, Sie bekommen";
    this.pep = "Sie haben noch";
    this.tih = "Freespins übrig!";
    this.jre = "Einsätze akzeptiert!";
    this.rqb = "Einsätze nicht akzeptiert!";
    this.krm = "Spiel läuft, bitte warten!";
    this.cdm = "Das Spiel beginnt gleich!";
    this.nuh = "Ihre Einsätze bitte!";
    this.mgw = "Keine weiteren Einsätze!";
    this.kgs = "Viel Glück!";
    this.rnl = "Mehr Glück beim nächsten Mal!";
    this.lzm = "Weitere 15 BONUSSPINS gewonnen!";
    this.clx = "Der Bonus endet, wenn alle BONUSSPINS abgespielt worden sind. Zusätzliche BONUSSPINS können im Bonus gewonnen werden.";
    this.alb = "15 BONUSSPINS werden durch 3, 4 oder 5 SCATTER Symbole auf jeder Position gewonnen! Alle BONUSSPIN Gewinne x 3."
}
lrd.prototype = new kai;

function tcn() {
    this.sxk = "ÇIZGILER";
    this.lln = "ÇİZGİ";
    this.cqx = "BANKO / ÇIZGI";
    this.tir = "KALAN PRIM OYUNLARIR";
    this.yar = "TOPLAM PRİM SPİNLERİ";
    this.kcf = "OYNANAN PRIM OYUNLAR";
    this.gio = "KALAN PRIM OYUNLARIR";
    this.agi = "TEBRİKLER KAZANDINIZ!";
    this.bgj = "PRIM KAZANCI";
    this.daa = "SCATTER";
    this.qis = "SCATTERED:";
    this.nqt = "SEMBOLLER";
    this.yte = "SEMBOL";
    this.ogj = "Prim çarpanı";
    this.dls = "PRİM GİRİŞ KAZANCI:";
    this.chi = "BEDAVA OYUNLAR";
    this.stj = "Kazançlar tek soldan sağa değerlendirilir!";
    this.yxb = "Ek PRİM SPİN’LERİ kazandınız!";
    this.xcn = "PRİM SPİNLER başlayacak olan oyunda da aynı banko ve çizgi sayısı ile oynanacaktır.";
    this.skq = "Çizgi kazançları: Oynanan her çizginin sadece en yüksek çizgi kazancı sayılmaktadır. Çizgi kazançları çizgi bankosunun kat sayısından oluşmaktadır. Çeşitli çizgilerin çizgi kazançları birbirleri ile toplanmaktadır.";
    this.uzy = "Scatter kazançları: Scatter-kazançları toplam bankonun kat sayısından oluşmaktadır. Scatter-Sembollerinden elde edilen kazançlar çizgi kazançlarına eklenmektedir.";
    this.boe = "YOLLAR";
    this.fuu = "YOL";
    this.ily = "PRİM YARDIMI";
    this.onu = "SEMBOL YARDIMI";
    this.acn = "KAZANÇ ÇIZGISI YARDIMI";
    this.syq = "KAZANÇ YOLLARI YARDIM";
    this.ixo = "DOĞRU KART RENGİNİ SEÇEREK KAZANCINI DÖRDE KATLARSIN.";
    this.pok = "RİSK";
    this.cfy = "KIRMIZI/SİYAH ŞANSI";
    this.alc = "SEMBOL ŞANSI";
    this.adu = "KAZANANILMASI MÜMKÜN OLAN";
    this.xbg = "KAZANÇ GEÇMİŞİ";
    this.bqp = "PRİM BİTTİ";
    this.ldk = "adet bedava Spin kazandınız!";
    this.kiu = "OYNANILAN BEDAVA SPİN'ler";
    this.uie = "BEDAVA SPİN KAZANCI";
    this.nim = "TEBRİKLER!";
    this.hbs = "Tebrikler,";
    this.pep = "Daha";
    this.tih = "adet bedava SPİN'iniz bulunuyor!";
    this.kgs = "Bol şans!";
    this.jre = "Bahisler kabul edildi!";
    this.rqb = "Bahisler kabul edilmedi!";
    this.krm = "Oyun oynanmakta, lütfen bekleyin!";
    this.cdm = "Oyun başlamak üzere!";
    this.nuh = "Bankolarınız lütfen!";
    this.mgw = "Daha fazla banko mümkün değil!";
    this.rnl = "Bir dahaki sefer daha şanslı olursun!";
    this.lzm = "15 bedava oyun daha kazandın!";
    this.clx = "Bedava oyun primleri tüm bedava oyunlar oynandığı zaman biter. Bedava oyun primlerinde ek bedava oyunlar kazanılabilir.";
    this.alb = "Her pozisyondaki 3, 4 veya 5 SCATTERED sembolleri ile 15 tane bedava oyun kazanılır! Tüm bedava oyun kazançları x 3."
}
tcn.prototype = new yoh;

function qwz() {
    this.sxk = "LINEK";
    this.lln = "LINKA";
    this.cqx = "SÁZKA / LINKA";
    this.tir = "ZBÝVAJÍCÍ VOLNÉ HRY";
    this.yar = "TOTÁLNÍ BONUSSPINS";
    this.kcf = "ODEHRANÉ BONUS HRY";
    this.gio = "ZBÝVAJÍCÍ VOLNÉ HRY";
    this.agi = "GRATULUJEME VYHRÁL JSTE!";
    this.bgj = "BONUS VÝHRA";
    this.daa = "SCATTER";
    this.qis = "SCATTERED:";
    this.nqt = "SYMBOLY";
    this.yte = "SYMBOL";
    this.ogj = "Násobic bonusu";
    this.dls = "BONUS STARTUJE VÝHRU:";
    this.chi = "BONUSSPINS";
    this.stj = "Výhry platí pouze z leva do prava!";
    this.yxb = "Vyhrál jste extra BONUSOVOU hru!";
    this.xcn = "BONUSSPINS sa hrají se stejnou  sázkou a počtem línií jako hra, při které se spustily.";
    this.skq = "Výhry na línkách: Započítává se jen nejvyšší výhra na lince. Výhry na linkách jsou násobky linkových sázek. Výhry na různých línkách se sčítají.";
    this.uzy = "Scatter výhry: Scatter výhry násobí celkovou sázku. Výhry ze Scatter symbolů se připočítávají k výhrám na línkách.";
    this.boe = "ZPŮSOBY";
    this.fuu = "ZPŮSOB";
    this.ily = "BONUS NÁPOVĚDA";
    this.onu = "SYMBOL NÁPOVĚDA";
    this.acn = "VÝHERNÉ LINIE NÁPOVĚDA";
    this.syq = "WINWAY HELP";
    this.ixo = "VYBRAT SPRÁVNOU BARVU KARTY KE ZČTYŘNÁSOBENÍ VÝHRY";
    this.pok = "VÝHRA";
    this.cfy = "CERVENÁ/CERNÁ VÝHRA";
    this.alc = "SPRÁVNÁ BARVA KARTY VYHRÁVÁ";
    this.jre = "Sázky byly akceptovány!";
    this.rqb = "Sázky nebyly akceptovány!";
    this.adu = "VÝHRA AŽ";
    this.xbg = "HISTORIE VÝHER";
    this.bqp = "KONEC BONUSU";
    this.ldk = "Freespins!";
    this.kiu = "FREESPINS PLAYED";
    this.uie = "FREESPIN WIN";
    this.nim = "GRATULUJEME!";
    this.hbs = "Congratulation, you get";
    this.pep = "You have";
    this.tih = "freespins remaining!";
    this.krm = "Hra probíhá, počkejte prosím!";
    this.cdm = "Hra Se Hned Spustí!";
    this.nuh = "Vaše sázky prosím!";
    this.mgw = "Žádné další sázky.";
    this.kgs = "Hodne štestí!";
    this.rnl = "Příště více štěstí!";
    this.lzm = "Vyhráváte dalších 15 volných her!";
    this.clx = "Bonus je ukoncen po odehrání všech bonusových her. Bonusové hry mohou být získány i behem bonusu.";
    this.alb = "3, 4 nebo 5 SCATTER symbolu na libovolné pozici vyhrává 15 volných her, výhry ve volné hre jsou násobené 3x."
}
qwz.prototype = new rbx;

function lyr() {
    this.sxk = "LIINID";
    this.lln = "LIIN";
    this.cqx = "PAN. / LIINIL";
    this.tir = "TASUTA KEERUTUSI JÄÄNUD";
    this.yar = "BOONUSKEERUTUSI KOKKU";
    this.kcf = "MÄNGE MÄNGITUD";
    this.gio = "TASUTA KEERUTUSI JÄÄNUD";
    this.agi = "PALJU ÕNNE, SA VÕITSID!";
    this.bgj = "BOONUSVÕIT";
    this.chi = "BOONUSKEERUTUST";
    this.pok = "RISKIMÄNGU SUMMA";
    this.cfy = "PUNANE/MUST RISKIMÄNG";
    this.alc = "RISKIMÄNG SÜMBOLIGA";
    this.ixo = "VÕIDU NELJAKORDISTAMISEKS VALI ÕIGE MAST";
    this.jre = "Panused aktsepteeritud!";
    this.rqb = "Panuseid ei aktsepteeritud!";
    this.adu = "VÕIDA KUNI";
    this.xbg = "VÕITUDE AJALUGU";
    this.bqp = "BOONUSE LÕPP";
    this.ldk = "tasuta keerutust!";
    this.kiu = "TASUTA KEERUTUSI MÄNGITUD";
    this.uie = "TASUTA KEERUTUSE VÕIT";
    this.nim = "ÕNNITLEME!";
    this.hbs = "Õnnitleme, said";
    this.pep = "Sul on jäänud veel";
    this.tih = "tasuta keerutust!";
    this.krm = "Mäng algab, palun oodake...";
    this.cdm = "Lõpeta panuste tegemine!";
    this.nuh = "Asetage palun panused!";
    this.mgw = "Panuste tegemine lõppenud";
    this.kgs = "Soovime edu!";
    this.daa = "SCATTER";
    this.qis = "SCATTERED:";
    this.nqt = "SÜMBOLID";
    this.yte = "SÜMBOL";
    this.dls = "BOONUSVÕIT:";
    this.stj = "Võite arvestatakse ainult vasakult paremale!";
    this.yxb = "Te võitsite lisa BOONUSKEERUTUSI!";
    this.xcn = "BOONUSKEERUTUSED mängitakse sama panuse ja liinide arvuga, nagu boonuse käivitanud mängus.";
    this.boe = "VÕIMALUSED";
    this.fuu = "VÕIMALUSE";
    this.lzm = "Te võitsite lisa 15 BOONUSKEERUTUST!";
    this.clx = "Mängige kõik tasuta keerutused lõpuni. Tasuta keerutusi võib võita ka tasuta keerutuste boonuse ajal.";
    this.ily = "BOONUSE SPIKKER";
    this.onu = "SÜMBOLI SPIKKER";
    this.acn = "LIINIDE SPIKKER";
    this.syq = "VÕIDUVÕIMALUSE SPIKKER";
    this.skq = "Liini võidud: Igal mänguliinil makstakse ainult suurimad liinivõidud. Liini võidud korrutatakse liini panusega. Erinevate liinide võidud liidetakse kokku.";
    this.uzy = "Scatteri võidud: Scatteri võidud korrutatakse kogupanusega. Scatteri sümboli võidud liidetakse liini võitudele.";
    this.ogj = "Boonuse mitmekordistaja";
    this.rnl = "Rohkem õnne järgmisel korral!";
    this.alb = "3, 4 või 5 TÄHE sümbolit juhuslikel kohtadel annab 15 BOONUSKEERUTUST! Kõik BOONUSKEERUTUSE võidud korrutatakse 3-ga."
}
lyr.prototype = new zvs;

function veh() {
    this.sxk = "ΓΡΑΜΜEΣ";
    this.lln = "ΓΡΑΜΜΗ";
    this.cqx = "ΣΤΟIΧΗΜΑ / Γ.";
    this.tir = "ΕΝΑΠΟΜΕIΝΑΝΤΑ BONUSSPINS";
    this.yar = "ΤΕΛΕΙΩΣ BONUSSPINS";
    this.kcf = "ΠΑΙΓΜEΝΑ BONUSSPINS";
    this.gio = "ΕΝΑΠΟΜΕIΝΑΝΤΑ BONUSSPINS";
    this.agi = "ΣΥΓΧΑΡΗΤΗΡΙΑ ΚΕΡΔΙΣΑΤΕ!";
    this.bgj = "ΜΠOΝΟΥΣ ΚEΡΔΟΣ";
    this.daa = "SCATTER";
    this.qis = "SCATTERED:";
    this.nqt = "ΣYΜΒΟΛΑ";
    this.yte = "ΣΎΜΒΟΛΟ";
    this.ogj = "Πολλαπλασιαστής μπόνους";
    this.dls = "BONUS START ΚΕΡΔIΖΕΙ:";
    this.chi = "BONUSSPINS";
    this.stj = "Τα κέρδη μετρούνται από αριστερά προς τα δεξιά!";
    this.yxb = "Κερδίσατε συμπληρωματικούς BONUSSPINS!";
    this.xcn = "Τα γυρίσματα μπόνους, τα BONUSSPINS, παίζονται με το ίδιο ποντάρισμα και τον ίδιο αριθμό σειρών, όπως το αρχικό παιχνίδι.";
    this.skq = "Κέρδη γραμμών: Μόνο το μεγαλύτερο κέρδος ανά παιγμένη γραμμή προσμετράται. Τα κέρδη των γραμμών αποτελούν πολλαπλάσιο του πονταρίσματος στη γραμμή. Τα κέρδη γραμμών που αφορούν σε διαφορετικές γραμμές προστίθενται.";
    this.uzy = "Κέρδη Scatter: Τα κέρδη Scatter αποτελούν πολλαπλάσιο του συνολικού πονταρίσματος. Τα κέρδη από σύμβολα Scatter προσμετρώνται στα κέρδη των γραμμών.";
    this.boe = "ΔΙΑΔΡΟΜΕΣ";
    this.fuu = "ΔΙΑΔΡΟΜΉ";
    this.ily = "BONUS ΒΟΉΘΕΙΑ";
    this.onu = "ΒΟHΘΕΙΑ ΣΥΜΒOΛΩΝ";
    this.acn = "ΒΟHΘΕΙΑ ΣΕΙΡΩΝ ΚEΡΔΟΥΣ";
    this.syq = "WINWAY ΒΟΗΘΕΙΑ";
    this.ixo = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΦΥΛΛΟΥ ΓΙΑ ΝΑ ΤΕΤΡΑΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.pok = "ΠΟΣΟ ΡΙΣΚΟΥ";
    this.cfy = "ΜΑΥΡΟ/ΚΟΚΚΙΝΟ ΚΕΡΔΟΣ ΡΙΣΚΟΥ";
    this.alc = "ΣΥΜΒΟΛΟ ΚΕΡΔΟΣ ΡΙΣΚΟΥ";
    this.adu = "ΚΕΡΔΗ ΕΩΣ";
    this.xbg = "ΙΣΤΟΡΙΚΟ ΚΕΡΔΩΝ";
    this.bqp = "ΛΗΞΗ ΜΠΟΝΟΥΣ";
    this.ldk = "Freespins!";
    this.kiu = "FREESPINS ΠΟΥ ΚΑΤΑΝΑΛΏΘΗΚΑΝ";
    this.uie = "FREESPIN ΚΕΡΔΟΣ";
    this.nim = "ΣΥΓΧΑΡΗΤΗΡΙΑ!";
    this.hbs = "Συγχαρητήρια, κερδίσατε";
    this.pep = "Σας απομένουν";
    this.tih = "Freespins!";
    this.jre = "Γίνονται αποδεκτά πονταρίσματα!";
    this.rqb = "Πονταρίσματα δε γίνονται αποδεκτά!";
    this.krm = "Ενεργό παιχνίδι, παρακαλώ περιμένετε!";
    this.cdm = "Το παιχνίδι ξεκινά σε λίγο!";
    this.nuh = "Το ποντάρισμα σας, παρακαλώ!";
    this.mgw = "Ποντάρισμα τέλος!";
    this.kgs = "Καλή τύχη!";
    this.rnl = "Καλύτερη τύχη την επόμενη φορά!";
    this.lzm = "Κερδίσατε 15 συμπληρωματικούς BONUSSPINS!";
    this.clx = "Το Bonus τελειώνει, όταν όλα τα BONUSSPINS έχουν παιχθεί. Συμπληρωματικά BONUSSPINS δύνανται να κερδισθούν στο Bonus.";
    this.alb = "15 BONUSSPINS κερδίζονται με 3, 4 ή 5 σύμβολα ΑΣΤΡΟΥ σε κάθε θέση! Όλα τα BONUSSPINS αποφέρουν τριπλασιασμό κερδών."
}
veh.prototype = new iqx;

function hly() {
    this.sxk = "ЛИНИИ";
    this.lln = "ЛИНИЯ";
    this.cqx = "ЗАЛОГ/Л-Я";
    this.tir = "БОНУС-ИГРИ ОСТАВАТ";
    this.kcf = "БОНУС-ИГРИ ИЗИГРАНИ";
    this.gio = "БОНУС-ИГРИ ОСТАВАТ";
    this.agi = "ПОЗДРАВЛЕНИЯ, ВИЕ СПЕЧЕЛИХТЕ!";
    this.bgj = "БОНУС ПЕЧАЛБА";
    this.chi = "БОНУС-ИГРИ";
    this.pok = "СУМА ЗА ДУБЛИРАНЕ";
    this.cfy = "ДУБЛИРАЙ ЧЕРВЕНА/ЧЕРНА-ПЕЧАЛБА";
    this.alc = "ДУБЛИРАНЕ НА КОЗОВ ЦВЯТ-ПЕЧАЛБА";
    this.ixo = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УЧЕТВОРИШ ПЕЧАЛБАТА";
    this.jre = "Залозите са приети!";
    this.rqb = "Залозите не са приети!";
    this.adu = "СПЕЧЕЛИ ДО";
    this.xbg = "ИСТОРИЯ НА ПЕЧАЛБИТЕ";
    this.bqp = "КРАЙ НА БОНУС";
    this.ldk = "безплатни завъртания!";
    this.kiu = "ИЗИГРАНИ БЕЗПЛАТНИ ЗАВЪРТАНИЯ";
    this.uie = "СПЕЧЕЛЕНО БЕЗПЛАТНО ЗАВЪРТАНЕ";
    this.nim = "ПОЗДРАВЛЕНИЯ!";
    this.hbs = "Поздравления, получихте";
    this.pep = "Имате останали";
    this.tih = "безплатни завъртания!";
    this.krm = "Затворено за залози!";
    this.cdm = "Приключете със залозите!";
    this.nuh = "Поставете своите залози!";
    this.mgw = "Край на залозите!";
    this.kgs = "Успех!";
    this.yar = "ОБЩО БОНУС ИГРИ";
    this.daa = "СКАТЕР";
    this.qis = "SCATTERED:";
    this.nqt = "СИМВОЛИ";
    this.yte = "СИМВОЛ";
    this.dls = "НАЧАЛНА БОНУС ПЕЧАЛБА:";
    this.stj = "Печалбите се изплащат само от ляво на дясно!";
    this.yxb = "Вие спечелихте допълнителни Бонус игри!";
    this.xcn = "Бонус игрите се играят със същия залог и брой линии, както основната игра.";
    this.boe = "НАЧИНИ";
    this.fuu = "НАЧИН";
    this.lzm = "Печелите допълнителни 15 БОНУС ЗАВЪРТАНИЯ!";
    this.clx = "Бонус играта продължава до изчерпване на бонус игрите. По време на бонус игра може да се спечелят допълнителни игри.";
    this.ily = "ПОМОЩ ЗА БОНУС";
    this.onu = "ПОМОЩ СИМВОЛ";
    this.acn = "ПОМОЩ ПЕЧЕЛИВША ЛИНИЯ";
    this.syq = "ПОМОЩ ЗА ПЕЧАЛБИ";
    this.skq = "Печалби на Линия: От всяка активна линия се изплаща само най-голямата печалба. Печалбата от активна линия се умножава по залога на линия. Печалбите от активните линии се събират и формират общата печалба.";
    this.uzy = "Скатер печалби: Скатер печалбата се умножава по общият залог. Печалбите от фигурите Скатер се добавят към печалбата от активните линии.";
    this.ogj = "Бонус Множител";
    this.rnl = "По-добър успех-следващият път!";
    this.alb = "15 БОНУС ЗАВЪРТАНИЯ се печелят с 3, 4 или 5 символа ЗВЕЗДА на която и да е позиция! Всичките печалби от Бонус играта се умножават по 3."
}
hly.prototype = new yrr;

function ivu() {
    this.sxk = "ხაზები";
    this.lln = "ხაზი";
    this.cqx = "ფსონი / ხაზი";
    this.boe = "გზა";
    this.fuu = "გზა";
    this.tir = "დარჩენილი BONUS თამაშები";
    this.yar = "BONUS თამაშების რაოდენობა ჯამში";
    this.kcf = "უკვე ნათამაშები BONUS თამაშები";
    this.gio = "დარჩენილი BONUS თამაშები";
    this.agi = "გილოცავთ თქვენ მოიგეთ!";
    this.bgj = "BONUS მოგება";
    this.daa = "SCATTER";
    this.qis = "SCATTERED:";
    this.nqt = "სიმბოლოები";
    this.yte = "სიმბოლო";
    this.yxb = "თქვენ მოიგეთ დამატებითი BONUS თამაშები!";
    this.stj = "მოგების ანაზღაურება ხდება მხოლოდ მარცხნიდან მარჯვნივ!";
    this.dls = "ბონუს ჩანაწერის მოგება:";
    this.chi = "BONUS თამაშები";
    this.xcn = "BONUS თამაშების თამაში ხდება იგივე ფსონზე და ხაზების რაოდენობაზე, როგორც თამაშის დაწყების დროს.";
    this.skq = "ხაზის მოგება: თითოეულ ნათამაშებ ხაზზე, მოხდება მხოლოდ უმაღლესი ხაზის მოგების ანაზღაურება. ხაზის მოგება შედგება მრავალჯერადი ხაზის ფსონისაგან. სხვადასხვა ხაზიდან მიღებული მოგება ჯამდება ერთ მოგებად.";
    this.uzy = "Scatter მოგება: Scatter მოგება შეადგენს მთლიან ფსონს რამოდენიმეჯერ. მოგება Scatter სიმბოლოებიდან ემატება ხაზის მოგებას.";
    this.ily = "ბონუს დახმარება";
    this.onu = "სიმბოლოს დახმარება";
    this.acn = "მოგების ხაზის დახმარება";
    this.syq = "მოგების გზაზე დახმარება";
    this.lzm = "თქვენ მოიგეთ დამატებითი 15 BONUS თამაშები!";
    this.clx = "ითამაშეთ ბონუსი სანამ BONUS თამაში არ გაგითავდებათ. დამატებითი BONUS თამაშის მოგება შეიძლება ბონუსის დროს.";
    this.pok = "გარისკვის რიცხვი";
    this.cfy = "წითელი/შავი ითამაშე და მოიგე";
    this.alc = "ფერი ითამაშე და მოიგე";
    this.alb = "15 BONUS თამაშის მოგება ხდება 3, 4 ან 5 ვარსკვლავის სიმბოლოთი ნებისმიერ პოზიციაზე! ყველა BONUSSPIN მოგება მრავლდება 3-ზე.";
    this.rnl = "გისურვებთ მომავალში უკეთეს იღბალს!";
    this.cdm = "დაასრულე ფსონის დადება!";
    this.nuh = "მოათავსეთ თქვენი ფსონები გთხოვთ!";
    this.mgw = "ფსონები აღარ მიიღება!";
    this.kgs = "გისურვებთ წარმატებას!";
    this.ixo = "აირჩიეთ კარტის სწორი ფერი რომ გააოთხმაგოთ მოგება";
    this.jre = "ფსონები მიღებულ იქნა!";
    this.rqb = "ფსონები არ იქნა მიღებული!";
    this.bqp = "ბონუსის დასასრული";
    this.adu = "-მდე მოგება";
    this.xbg = "მოგების ჩანაწერი";
    this.krm = "თამაში მიმდინარეობს, გთხოვთ დაელოდოთ!";
    this.ogj = "ბონუს მულტიპლიკატორი";
    this.ldk = "უფასო დატრიალება!";
    this.kiu = "ნათამაშები უფასო დატრიალებები";
    this.uie = "უფასო დატრიალების მოგება";
    this.nim = "გილოცავთ!";
    this.hbs = "გილოცავთ, თქვენ მიიღეთ";
    this.pep = "თქვენ დაგრჩათ";
    this.tih = "უფასო დატრიალება!"
}
ivu.prototype = new bye;

function ugm() {
    this.sxk = "VONALAK";
    this.lln = "VONAL";
    this.cqx = "TÉT / VONAL";
    this.boe = "IRÁNY";
    this.fuu = "IRÁNY";
    this.tir = "MEGMARADT SZABAD JÁTÉKOK";
    this.yar = "ÖSSZES SZABAD JÁTÉK";
    this.kcf = "LEJÁTSZOTT SZABAD JÁTÉKOK";
    this.gio = "MEGMARADT SZABAD JÁTÉKOK";
    this.agi = "GRATULÁLUNK, ÖN NYERT!";
    this.bgj = "BÓNUSZ NYEREMÉNY";
    this.daa = "SCATTER";
    this.qis = "SCATTERED:";
    this.nqt = "SZIMBÓLUMOK";
    this.yte = "SZIMBÓLUM";
    this.yxb = "További SZABADJÁTÉKOKAT nyert!";
    this.stj = "A Nyeremények balról jobbra fizetnek!";
    this.dls = "BÓNUSZBA LÉPŐ NYEREMÉNY:";
    this.chi = "SZABAD JÁTÉKOK";
    this.xcn = "Az alapjátéknál beállított tét és nyerővonal számmal játszódik le a SZABAD JÁTÉK is.";
    this.skq = "Vonal Nyeremények: Csak a legnagyobb nyeremény fizet a megjátszott vonalakon. A vonal nyeremények a vonalankénti tét szorzatai. A különböző vonalankénti nyeremények összeadódnak.";
    this.uzy = "Scatter Nyeremények: A Scatter nyeremények az összes tét szorzatai. A Scatter szimbólummal elért nyeremények a vonal nyereményekhez adódnak.";
    this.ily = "BÓNUSZ SÚGÓ";
    this.onu = "SZIMBÓLUM SÚGÓ";
    this.acn = "NYERŐVONAL SÚGÓ";
    this.syq = "NYEREMÉNYÚT SEGÉDLET";
    this.lzm = "További 15 SZABADJÁTÉKOT nyert!";
    this.clx = "Játssza a szabad játék bónuszt ameddig van szabad pörgetése. Ez idő alatt újabb szabad játékokat nyerhet.";
    this.pok = "FELTETT ÖSSZEG";
    this.cfy = "PIROS/FEKETE NYEREMÉNY";
    this.alc = "SZÍN NYEREMÉNY";
    this.alb = "15 SZABAD JÁTÉKOT nyerhet ha 3, 4 vagy 5 CSILLAG szimbólum jelenik meg bármely helyen. Minden SZABAD JÁTÉKBAN elért nyeremény háromszorosan fizet.";
    this.rnl = "Több szerencsét máskor!";
    this.cdm = "Tétek lezárva!";
    this.nuh = "Kérem tegyék meg tétjeiket!";
    this.mgw = "A játék elkezdődött, kérem várjon!";
    this.kgs = "Sok szerencsét!";
    this.ixo = "VÁLASSZA KI A MEGFELELŐ KÁRTYASZÍNT, HOGY MEGNÉGYSZEREZZE A NYEREMÉNYT";
    this.jre = "Tétek elfogadva!";
    this.rqb = "Nem lehet tétet rakni!";
    this.krm = "Játék folyamatban, kérem várjon!";
    this.adu = "A NYEREMÉNY AKÁR";
    this.xbg = "JÁTÉK TÖRTÉNET";
    this.bqp = "BÓNUSZ VÉGE";
    this.ogj = "Bónusz szorzó";
    this.ldk = "szabad spint kap!";
    this.kiu = "JÁTSZOTT SZABAD SPINEK";
    this.uie = "SZABAD SPIN NYEREMÉNY";
    this.nim = "GRATULÁLUNK!";
    this.hbs = "Gratulálunk, Ön";
    this.pep = "";
    this.tih = "szabad spinje van még!"
}
ugm.prototype = new zvc;

function hvx() {
    this.sxk = "LINII";
    this.lln = "LINIE";
    this.cqx = "MIZĂ / LINIE";
    this.boe = "MODURI";
    this.fuu = "MOD";
    this.tir = "BONUSSPIN RĂMAŞI";
    this.yar = "TOTAL BONUSSPIN";
    this.kcf = "BONUSSPIN JUCAŢI";
    this.gio = "BONUSSPIN RĂMAŞI";
    this.agi = "FELICITĂRI CÂŞTIGAT!";
    this.bgj = "CÂŞTIG BONUS";
    this.daa = "SCATTER";
    this.qis = "SCATTERED:";
    this.nqt = "SIMBOLURI";
    this.yte = "SIMBOL";
    this.yxb = "Aţi câştigat BONUSSPIN suplimentari!";
    this.stj = "Câştigurile sunt evaluate numai de la stânga la dreapta!";
    this.dls = "CÂŞTIG BONUS START:";
    this.chi = "BONUSSPIN";
    this.xcn = "BONUSSPIN sunt jucate cu aceeaşi miză şi număr de linii ca jocul iniţial.";
    this.skq = "Câştiguri linie: Numai câştigul linie maxim pe linie jucată contează. Câştiguri linie sunt un multiplu al mizei liniei. Câştigurile linie ale diferitelor linii sunt adunate.";
    this.uzy = "Câştiguri Scatter: Câştigurile Scatter sunt un multiplu al mizei totale. Câştigurile din simbolurile Scatter sunt adăugate la câştigurile linie.";
    this.ily = "AJUTOR BONUS";
    this.onu = "AJUTOR SIMBOL";
    this.acn = "AJUTOR LINII DE CÂŞTIG";
    this.syq = "AJUTOR CĂI DE CÂŞTIG";
    this.lzm = "Aţi câştigat 15 BONUSSPIN suplimentari!";
    this.clx = "Bonusul este terminat când au fost jucaţi toţi BONUSSPIN. BONUSSPIN suplimentari pot fi câştigaţi la bonus.";
    this.pok = "RISC";
    this.cfy = "ŞANSA ROŞU/NEGRU";
    this.alc = "SIMBOLUL ŞANSĂ";
    this.alb = "15 BONUSSPIN sunt câştigaţi prin 3, 4 sau 5 simboluri STEA pe fiecare poziţie! Toţi BONUSSPIN câştiguri x 3.";
    this.rnl = "Mai mult noroc data viitoare!";
    this.cdm = "Jocul începe imediat!";
    this.nuh = "Rugăm mizele dv.!";
    this.mgw = "Nu alte mize!";
    this.kgs = "Mult noroc!";
    this.ixo = "SELECTEAZĂ CULOAREA CORECTĂ A CĂRŢII PENTRU A CÂŞTIGA DE 4 ORI";
    this.jre = "Pariuri acceptate!";
    this.rqb = "Pariuri neacceptate!";
    this.krm = "Joc în derulare, vă rugăm așteptați!";
    this.adu = "CÂŞTIGURI PÂNĂ LA";
    this.xbg = "ISTORIC CÂŞTIG";
    this.bqp = "BONUS FINAL";
    this.ogj = "Bonus multiplicator";
    this.ldk = "rotiri libere!";
    this.kiu = "ROTIRI GRATUTE JUCATE";
    this.uie = "CÂŞTIG ROTIRI LIBERE";
    this.nim = "FELICITĂRI!";
    this.hbs = "Felicitări, ai primit";
    this.pep = "V-au rămas";
    this.tih = "rotiri gratuite!l"
}
hvx.prototype = new xsw;

function fdg() {
    this.sxk = "LINHAS";
    this.lln = "LINHA";
    this.cqx = "APOSTA / LINHA";
    this.boe = "FORMAS";
    this.fuu = "FORMA";
    this.tir = "BONUSSPINS RESTANTES";
    this.yar = "TOTAL DE BONUSSPINS";
    this.kcf = "BONUSSPINS JOGADOS";
    this.gio = "BONUSSPINS RESTANTES";
    this.agi = "PARABÉNS, GANHOU!";
    this.bgj = "PRÉMIO BONUS";
    this.daa = "SCATTER";
    this.qis = "SCATTERED:";
    this.nqt = "SÍMBOLOS";
    this.yte = "SÍMBOLO";
    this.yxb = "Ganhou BONUSSPINS adicionais!";
    this.stj = "Prémios só são pagos da esquerda para a direita!";
    this.dls = "PRÉMIO ENTRADA BONUS:";
    this.chi = "BONUSSPINS";
    this.xcn = "Os BONUSSPINS são jogados com a mesma aposta e n° de linhas que o jogo inicial.";
    this.skq = "Prémios de linha: Só conta o mais alto prémio de linha de cada linha jogada. Prémios de linha são um múltiplo da aposta de linha. Prémios de linha de diversas linhas são adicionados.";
    this.uzy = "Prémios Scatter: Prémios Scatter são múltiplos da aposta total. Prémios de símbolos Scatter são adicionados aos prémios de linha.";
    this.ily = "AJUDA BONUS";
    this.onu = "AJUDA SÍMBOLO";
    this.acn = "AJUDA DE LINHAS VENCEDORAS";
    this.syq = "AJUDA DE FORMAS DE PRÊMIO";
    this.lzm = "Ganhou 15 BONUSSPINS adicionais!";
    this.clx = "Jogar Bonus até não restarem mais BONUSSPINS. BONUSSPINS adicionais podem ser ganhos em Bonus.";
    this.pok = "RISCO";
    this.cfy = "VERMELHO/PRETO CHANCE DE GANHAR";
    this.alc = "CHANCE DO NAIPE";
    this.alb = "15 BONUSSPINS são ganhos com 3, 4 ou 5 símbolos de estrelas em qualquer posição! Todos ganhos BONUSSPIN são multiplicados por 3.";
    this.cdm = "O jogo começa em breve!";
    this.nuh = "Suas apostas por favor!";
    this.mgw = "Nenhuma aposta mais!";
    this.kgs = "Boa sorte!";
    this.ixo = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.jre = "Apostas aceitas!";
    this.rqb = "Apostas não aceitas!";
    this.krm = "Jogo em andamento, aguarde por favor!";
    this.adu = "GANHOS ATÉ";
    this.xbg = "HISTÓRICO DO GANHO";
    this.bqp = "FIM BONUS";
    this.ogj = "Multiplicador do bonus";
    this.rnl = "Mais sorte da próxima vez!";
    this.ldk = "freespins!";
    this.kiu = "FREESPINS JOGADOS";
    this.uie = "GANHO DE FREESPINS";
    this.nim = "PARABÉNS!";
    this.hbs = "Parabéns, ganhas";
    this.pep = "Ainda lhe sobram";
    this.tih = "freespins!"
}
fdg.prototype = new phy;

function pav() {
    this.sxk = "LIGNES";
    this.lln = "LIGNE";
    this.cqx = "MISE / LIGNE";
    this.boe = "CHEMINS";
    this.fuu = "CHEMIN";
    this.tir = "BONUSSPINS LAISSÉ";
    this.yar = "TOTAL BONUSSPINS";
    this.kcf = "JEUX GRATUITS JOUES";
    this.gio = "BONUSSPINS LAISSÉ";
    this.agi = "FELICITATIONS TU AS GAGNE!";
    this.bgj = "BONUS GAIN";
    this.daa = "SCATTER";
    this.qis = "SCATTERED:";
    this.nqt = "SYMBOLES";
    this.yte = "SYMBOLE";
    this.yxb = "Vous gagnez BONUSSPINS extra!";
    this.stj = "Victoires payer seulement de gauche à droite!";
    this.dls = "BONUS ENTRÉE WIN:";
    this.chi = "BONUSSPINS";
    this.xcn = "Les BONUSSPINS sont joué avec la même mise et nombre des lignes comme le jeu avant.";
    this.skq = "Gains des lignes: Seulement le gain de ligne plus haut par ligne joué compté. Gains des lignes sont un multiple du mise de ligne. Les gains de lignes de lignes differents sont ajouté.";
    this.uzy = "Gains de Scatter: Gains de Scatter sont un multiple du toute mise. Gains de symboles Scatter sont ajouter á le gain des lignes.";
    this.ily = "BONUS D'AIDE";
    this.onu = "SYMBOLE D'AIDE";
    this.acn = "WINLINE AIDE";
    this.lzm = "Vous avez gagné un supplément de 15 BONUSSPINS!";
    this.clx = "Le Bonus se Termine une fois tous les BONUSSPINS joués. Des BONUSSPINS supplémentaires peuvent être gagnés pendant la Bonus.";
    this.pok = "RISQUE";
    this.cfy = "ROUGE/NOIR SIGNIFIE GAIN";
    this.alc = "GAIN DE SYMBOLES";
    this.alb = "15 BONUSSPINS sont gagnés avec 3, 4 ou 5 étoiles sur toute position! Tous les gains des BONUSSPINS sont multipliés par 3.";
    this.cdm = "Le jeu va commencer tout de suite!";
    this.nuh = "Faites vos jeux s'il vous plaît!";
    this.mgw = "Rien ne va plus!";
    this.kgs = "Bonne chance!";
    this.syq = "AIDE VOIES DE GAINS";
    this.rnl = "Meilleure chance la prochaine fois!";
    this.ixo = "CHOISIS LA BONNE COULEUR DE LA CARTE AFIN DE QUADRUPLER LE GAIN";
    this.jre = "Mises acceptées!";
    this.rqb = "Mises refusées!";
    this.krm = "Jeu en cours, merci de patienter!";
    this.adu = "GAINS JUSQU'À";
    this.xbg = "HISTORIQUE DE GAINS";
    this.bqp = "FIN DU BONUS";
    this.ogj = "Multiplicateur de bonus";
    this.ldk = "Freespins!";
    this.kiu = "FREESPINS JOUÉS";
    this.uie = "GAIN DE FREESPIN";
    this.nim = "FÉLICITATIONS!";
    this.hbs = "Félicitations, vous recevez";
    this.pep = "Il vous reste encore";
    this.tih = "Freespins!"
}
pav.prototype = new krw;

function urf() {
    this.sxk = "LINIJE";
    this.lln = "LINIJI";
    this.cqx = "ULOG / LINIJI";
    this.boe = "NAČINA";
    this.fuu = "NAČIN";
    this.tir = "PREOSTALE BESPLATNE IGRE";
    this.yar = "UKUPNO BESPLATNIH IGARA";
    this.kcf = "ODIGRANE BESPLATNE IGRE";
    this.gio = "PREOSTALE BESPLATNE IGRE";
    this.agi = "ČESTITAMO, DOBILI STE!";
    this.bgj = "BONUS DOBITAK";
    this.daa = "SCATTER";
    this.qis = "SCATTERED:";
    this.nqt = "SIMBOLI";
    this.yte = "SIMBOL";
    this.yxb = "Dobili ste dodatne BESPLATNE IGRE!";
    this.stj = "Dobitci se isplaćuju samo sa lijeva na desno!";
    this.dls = "BONUS POČETNI DOBITAK:";
    this.chi = "BESPLATNE IGRE";
    this.xcn = "BESPLATNE IGRE se igraju sa istim ulogom i brojem linija kao početna igra.";
    this.skq = "Linijski dobitak: Samo najveći linijski dobitak za svaku odigranu liniju se isplaćuje. Linijski dobitak je uvišestručeni linijski ulog. Linijski dobitci sa različitih linija se zbrajaju.";
    this.uzy = "Scatter dobitak: Scatter dobitak je uvišestručeni ukupni ulog. Dobitci od scatter simbola se zbrajaju sa linijskim dobitcima.";
    this.ily = "POMOĆ ZA BONUS";
    this.onu = "POMOĆ ZA SIMBOL";
    this.acn = "POMOĆ ZA DOBITNE LINIJE";
    this.lzm = "Dobili ste dodatnih 15 BESPLATNIH IGARA!";
    this.clx = "Bonus se završava kada su odigrane sve BESPLATNE IGRE. Dodatne BESPLATNE IGRE se mogu dobiti tijekom Bonusa.";
    this.pok = "ULAŽETE";
    this.cfy = "POGODI BOJU ZA DOBITAK OD";
    this.alc = "POGODI SIMBOL ZA DOBITAK OD";
    this.alb = "3, 4 ili 5 simbola ZVIJEZDA na bilo kojoj poziciji osvajaju 15 BESPLATNIH IGARA! Svi dobici tijekom BESPLATNIH IGARA množe se sa 3.";
    this.cdm = "Završte ulaganje!";
    this.nuh = "Molimo Vaše uloge!";
    this.mgw = "Nema daljnjih uloga!";
    this.kgs = "Puno sreće!";
    this.syq = "POMOĆ ZA POBJEDU";
    this.rnl = "Više sreće sljedeći put!";
    this.ixo = "ODABERI PRAVI ZNAK I TIME UČETVEROSTRUČI DOBITAK";
    this.jre = "Ulozi su prihvaćeni!";
    this.rqb = "Ulozi nisu prihvaćeni!";
    this.krm = "Igra je u tijeku, sačekajte!";
    this.adu = "OSVOJI DO";
    this.xbg = "POVIJEST DOBITAKA";
    this.bqp = "KRAJ BESPLATNE IGRE";
    this.ogj = "Bonus multiplikator";
    this.ldk = "slobodnih igara!";
    this.kiu = "ODIGRANIH SLOBODNIH IGARA";
    this.uie = "DOBITAK U SLOBODNOJ IGRI";
    this.nim = "ČESTITAMO!";
    this.hbs = "Čestitamo, osvojili ste";
    this.pep = "Preostalo ti je još";
    this.tih = "slobodnih igara!"
}
urf.prototype = new zyt;

function dop() {
    this.sxk = "LINEE";
    this.lln = "LINEA";
    this.cqx = "PUNTATA / LINEA";
    this.boe = "VIE";
    this.fuu = "VIA";
    this.tir = "BONUSSPIN RIMASTI";
    this.yar = "TOTALE BONUSSPIN";
    this.kcf = "BONUSSPIN GIOCATI";
    this.gio = "BONUSSPIN RIMASTI";
    this.agi = "CONGRATULAZIONI, HAI VINTO!";
    this.bgj = "VINCITA BONUS";
    this.daa = "SCATTER";
    this.qis = "SCATTERED:";
    this.nqt = "SIMBOLI";
    this.yte = "SIMBOLO";
    this.yxb = "Hai vinto altri BONUSSPIN!";
    this.stj = "Le vincite sono valutate dalla sinistra alla destra soltanto!";
    this.dls = "VINCITA START BONUS:";
    this.chi = "BONUSSPIN";
    this.xcn = "Le giocate BONUS si giocano con la stessa puntata e con lo stesso numero di linee della partita iniziale.";
    this.skq = "Vincite di linea: Soltanto la vincita di linea più alta di ogni linea conta. Le vincite di linea sono la moltiplicazione della puntata per la linea. Le vincite di linea delle diverse linee vengono sommate.";
    this.uzy = "Vincite Scatter: Le vincite Scatter sono la moltiplicazione dell'intera puntata del gioco. Le vincite dai simboli Scatter vengono sommate alle vincite di linea.";
    this.ily = "AIUTO BONUS";
    this.onu = "AIUTO SYMBOLO";
    this.acn = "AIUTO WINLINE";
    this.lzm = "Hai vinto altri 15 BONUSSPIN!";
    this.clx = "Il bonus termina quando tutti i BONUSSPIN sono stati giocati. Si possono vincere altri BONUSSPIN nella giocata Bonus.";
    this.pok = "IMPORTO GAMBLE";
    this.cfy = "ROSSO/NERO GAMBLE PER VINCERE";
    this.alc = "CHANCE SUIT GAMBLE";
    this.alb = "15 BONUSSPIN si vincono con 3, 4 o 5 simboli STELLA su ogni posizione! Tutte le vincite BONUSSPIN si moltiplicano x 3.";
    this.cdm = "Completare le puntate prego!";
    this.nuh = "Prego puntare!";
    this.mgw = "Fine puntate!";
    this.kgs = "Buona Fortuna!";
    this.syq = "AIUTO MODI DI VINCERE";
    this.rnl = "La prossima volta sarai più fortunato!";
    this.ixo = "SCEGLI IL SEME GIUSTO PER QUADRUPLARE LA VINCITA";
    this.jre = "Puntate accettate!";
    this.rqb = "Puntate non accettate!";
    this.krm = "Partita in corso, prego attendere!";
    this.adu = "VINCITE FINO A";
    this.xbg = "CRONACA DELLE VINCITE";
    this.bqp = "FINE BONUS";
    this.ogj = "Moltiplicatore bonus";
    this.ldk = "Freespins!";
    this.kiu = "FREESPIN GIOCATI";
    this.uie = "VINCITA FREESPIN";
    this.nim = "CONGRATULAZIONI!";
    this.hbs = "Congratulazioni, ricevi";
    this.pep = "Sono rimasti";
    this.tih = "freespin!"
}
dop.prototype = new ihs;

function ked() {
    this.sxk = "LINJER";
    this.lln = "LINJE";
    this.cqx = "INSATS / LINJE";
    this.boe = "SÄTT";
    this.fuu = "SÄTT";
    this.tir = "ÅTERSTÅENDE BONUSSPINS";
    this.yar = "BONUSSPINS TOTALT";
    this.kcf = "SPELADE BONUSSPINS";
    this.gio = "ÅTERSTÅENDE BONUSSPINS";
    this.agi = "GRATTIS, DU HAR VUNNIT!";
    this.bgj = "BONUSVINST";
    this.daa = "SCATTER";
    this.qis = "SCATTERED:";
    this.nqt = "SYMBOLER";
    this.yte = "SYMBOL";
    this.yxb = "Du har vunnit extra BONUSSPINS!";
    this.stj = "Vinster betalas endast ut från vänster till höger!";
    this.dls = "BONUSSTARTSVINST:";
    this.chi = "BONUSSPINS";
    this.xcn = "BONUSSPINS spelas med samma insats och samma antal linjer som det spel som aktiverade bonusomgången.";
    this.skq = "Linjevinster: Endast den högsta linjevinster per spelad linje räknas. Linjevinster är en mångdubbling av linjeinsatsen. Linjevinsterna från olika linjer adderas.";
    this.uzy = "Scattervinster: Scattervinster är en mångdubbling av den totala insatsen. Vinster från scattersymboler adderas till linjevinsterna.";
    this.ily = "HJÄLP OM BONUS";
    this.onu = "HJÄLP OM SYMBOLER";
    this.acn = "HJÄLP OM VINSTRADER";
    this.syq = "VINSTSÄTTSHJÄLP";
    this.lzm = "Du har vunnit ytterligare 15 BONUSSPINS!";
    this.clx = "Spela ut bonusomgången tills inga BONUSSPINS återstår. Nya BONUSSPINS kan vinnas under bonusomgången.";
    this.pok = "SPELSUMMA";
    this.cfy = "SPEL OM RÖTT/SVART";
    this.alc = "SPEL OM FÄRG";
    this.alb = "15 BONUSSPINS betalas ut för 3, 4 eller 5 SCATTER-symboler på varje position! Alla vinster från BONUSSPIN multipliceras med 3.";
    this.cdm = "Spelet har börjat!";
    this.nuh = "Placera dina insatser, tack!";
    this.mgw = "Inga fler insatser!";
    this.kgs = "Lycka till!";
    this.rnl = "Bättre lycka nästa gång!";
    this.ixo = "VÄLJ RÄTT FÄRGSVIT FÖR ATT FYRDUBBLA VINSTEN";
    this.jre = "Insatserna accepterade!";
    this.rqb = "Insatserna ej accepterade!";
    this.krm = "Spelet pågår, var vänlig vänta!";
    this.adu = "VINN UPP TILL";
    this.xbg = "VINSTHISTORIK";
    this.bqp = "BONUSEN SLUT";
    this.ogj = "Bonusmultiplikator";
    this.ldk = "gratisspinn!";
    this.kiu = "GRATISSPINN SPELADE";
    this.uie = "GRATISSPINNSVINST";
    this.nim = "GRATTIS!";
    this.hbs = "Grattis, du har fått";
    this.pep = "Du har";
    this.tih = "gratisspinn kvar!"
}
ked.prototype = new nwh;

function lbm() {
    this.jsd = "The WILD symbol substitutes every other symbol."
}
lbm.prototype = new pry;

function wkw() {
    this.jsd = "Символ ВИЛЬД заменяет любой другой символ."
}
wkw.prototype = new kwx;

function emt() {
    this.jsd = "El símbolo WILD sustituye a cualquier otro símbolo."
}
emt.prototype = new kpd;

function lzp() {
    this.jsd = "Das WILD Symbol ersetzt jedes andere Symbol."
}
lzp.prototype = new lrd;

function mmi() {
    this.jsd = "WILD sembolü her sembolün yerine geçer."
}
mmi.prototype = new tcn;

function xdo() {
    this.jsd = "WILD nahrazuje všechny symboly."
}
xdo.prototype = new qwz;

function fwd() {
    this.jsd = "WILD sümbol asendab kõiki sümboleid."
}
fwd.prototype = new lyr;

function fin() {
    this.jsd = "Το σύμβολο WILD αντικαθιστά κάθε άλλο σύμβολο."
}
fin.prototype = new veh;

function ltm() {
    this.jsd = "Символът WILD заменя всеки друг символ."
}
ltm.prototype = new hly;

function xic() {
    this.jsd = "WILD სიმბოლო ანაცვლებს ყველა სხვა სიმბოლოს."
}
xic.prototype = new ivu;

function olq() {
    this.jsd = "A WILD minden szimbólumot helyettesít."
}
olq.prototype = new ugm;

function myf() {
    this.jsd = "Simbolul WILD înlocuieşte oricare alt simbol."
}
myf.prototype = new hvx;

function cmx() {
    this.jsd = "O símbolo WILD substitui qualquer outro símbolo."
}
cmx.prototype = new fdg;

function ycx() {
    this.jsd = "Le symbole WILD substitue tout symbole."
}
ycx.prototype = new pav;

function rcd() {
    this.jsd = "Simbol WILD zamjenjuje svaki drugi simbol."
}
rcd.prototype = new urf;

function ugn() {
    this.jsd = "Il simbolo Wild sostituisce tutti gli altri."
}
ugn.prototype = new dop;

function gen() {
    this.jsd = "WILD-symbolen ers�tter alla andra symboler."
}
gen.prototype = new ked;

function vjb() {
    this.dme = {
        backgroundColor: "rgb(0, 0, 0)"
    };
    this.qsx = {
        backgroundColor: "rgb(0,0,0)",
        bfx: "rgba(0,0,0,0.3)"
    };
    this.xcj = {
        font: "arial",
        cvw: "bold",
        backgroundColor: "black",
        koi: "rgb(0,100,10)",
        xjl: "rgb(80,255,100)",
        niv: "rgb(120,120,120)",
        pxf: "red",
        lja: "white",
        inf: null
    };
    this.dab = {
        font: "arial",
        cvw: "bold",
        backgroundColor: "rgb(0,0,0)",
        vsa: null,
        hij: "rgb(255,255,255)",
        tmq: "rgb(30,30,30)",
        borderColor: "rgb(80,80,80)"
    };
    this.dho = {
        font: "arial",
        cvw: "bold",
        backgroundColor: "black",
        syb: "rgb(50,50,50)",
        jcx: "rgb(255,255,255)",
        hij: "white",
        wag: 0.8,
        rdj: {
            son: {
                font: "sanf-serif",
                cvw: "",
                textAlign: "center",
                dyl: "round",
                backgroundColor: "black",
                hij: "white",
                borderColor: null,
                tmq: null,
                bnr: 1
            }
        }
    };
    this.eps = {
        font: "arial",
        cvw: "bold",
        backgroundColor: "rgb(20,20,30)",
        borderColor: "rgb(0,0,0)",
        yma: "rgba(255,255,255,0.2)",
        hij: "rgb(255,255,255)",
        pzg: "rgba(0,0,0,0.3)",
        display: {
            ctt: "arial",
            cnq: "arial",
            cvw: "bold",
            hij: "rgb(255,255,255)",
            mtf: "rgb(255,255,255)",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "rgba(255,255,255,0.5)"
        },
        son: {
            font: "arial",
            cvw: "bold",
            hij: "rgb(0,0,0)",
            nwm: "rgb(150,150,150)",
            backgroundColor: "rgba(255,255,255,0.8)",
            vsa: "rgba(255,255,255,1)",
            fgc: "rgba(255,255,255,0.8)",
            eis: "rgba(255,255,255,1)",
            borderColor: "rgba(200,200,200,0.5)",
            dyl: "rect",
            jnd: -1
        }
    };
    this.fpm = {
        font: "arial",
        cvw: "bold",
        hbx: "rgb(0,0,200)",
        awj: "rgb(255,255,255)",
        hkr: "rgb(0,0,150)",
        backgroundColor: "rgb(220,240,255)",
        lxh: "rgb(180,220,255)",
        oyt: "rgb(10,20,25)",
        bhz: "rgb(130,220,255)",
        teg: "rgb(130,190,255)",
        hij: "rgb(255,255,255)",
        pvx: "rgb(130,190,255)",
        shn: "rgb(100,160,255)",
        bbh: "rgb(255,255,255)",
        son: {
            dyl: "rect",
            font: "arial",
            cvw: "bold",
            hij: "rgb(255,255,255)",
            wgr: null,
            backgroundColor: "rgb(90,160,255)",
            bwp: "rgb(90,160,255)",
            borderColor: "rgb(60,120,200)",
            tmq: "rgb(40,80,140)"
        },
        rld: {
            dyl: "round",
            font: "arial",
            cvw: "bold",
            hij: "rgb(255,255,255)",
            wgr: null,
            backgroundColor: "rgba(0,0,100,0.5)",
            bwp: "rgba(150,150,255,0.5)",
            borderColor: "rgb(90,170,255)",
            tmq: "rgb(40,80,140)"
        }
    };
    this.dws = {};
    this.cmw = {
        opd: ["rgb(255,0,0)", "rgb(255,200,0)", "rgb(0,255,200)", "rgb(240,240,240)"]
    };
    this.oza = {
        type: "left",
        font: "arial",
        cvw: "bold",
        backgroundColor: "rgba(0,0,0,0.7)",
        vsa: null,
        borderColor: "rgb(0,0,0)",
        tmq: "rgb(180,180,180)",
        lxh: "rgba(0,0,0,0.6)",
        uwp: null,
        mtf: "rgb(255,200,0)",
        hij: "white",
        qke: {
            font: "arial",
            cvw: "bold",
            backgroundColor: "rgb(100,100,100)",
            vsa: "rgb(100,100,100)",
            fgc: null,
            eis: null,
            borderColor: "rgb(100,100,100)",
            hij: "rgb(255,255,255)",
            nwm: "rgb(255,200,0)",
            dyl: "triangle",
            jnd: 1
        },
        hqd: {
            font: "arial",
            cvw: "bold",
            backgroundColor: "rgb(100,100,100)",
            vsa: "rgb(100,100,100)",
            fgc: null,
            eis: null,
            borderColor: "rgb(100,100,100)",
            hij: "rgb(255,255,255)",
            nwm: "rgb(255,200,0)",
            dyl: "triangle",
            jnd: 0
        },
        xoh: {
            font: "arial",
            cvw: "bold",
            backgroundColor: "rgb(100,100,100)",
            vsa: "rgb(15,15,15)",
            fgc: "rgb(100,100,100)",
            eis: "rgb(15,15,15)",
            borderColor: "rgb(150,150,150)",
            hij: "rgb(255,255,255)",
            nwm: "rgb(255,200,0)",
            dyl: "rect",
            jnd: -1
        },
        display: {
            cnq: "sans-serif",
            ctt: "sans-serif",
            cvw: "bold",
            mtf: null,
            hij: "yellow",
            borderColor: "rgb(100,100,100)",
            tmq: null,
            backgroundColor: "black"
        },
        dmr: {
            font: "arial",
            cvw: "bold",
            backgroundColor: null,
            vsa: null,
            hij: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.wpj = {
        font: "arial",
        cvw: "bold",
        backgroundColor: "rgb(180,180,180)",
        vsa: "rgb(120,120,120)",
        borderColor: "rgb(80,80,80)",
        tmq: "rgb(30,30,30)",
        hij: "white",
        djx: {
            font: "arial",
            cvw: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            vsa: null,
            fgc: "rgba(100,100,100,0.5)",
            eis: null,
            borderColor: null,
            hij: "white",
            dyl: "rect",
            jnd: -1
        },
        qke: {
            font: "arial",
            cvw: "bold",
            backgroundColor: "rgb(255,255,255)",
            vsa: "rgb(255,255,255)",
            fgc: null,
            eis: null,
            borderColor: "rgb(255,255,255)",
            hij: "rgb(0,0,0)",
            nwm: "rgb(0,0,0)",
            dyl: "triangle",
            jnd: 1
        },
        hqd: {
            font: "arial",
            cvw: "bold",
            backgroundColor: "rgb(255,255,255)",
            vsa: "rgb(255,255,255)",
            fgc: null,
            eis: null,
            borderColor: "rgb(255,255,255)",
            hij: "rgb(0,0,0)",
            nwm: "rgb(0,0,0)",
            dyl: "triangle",
            jnd: 0
        },
        kls: {
            dyl: "rect",
            font: "arial",
            cvw: "bold",
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,0.1)",
            hij: "white",
            bnr: 1,
            borderColor: "rgb(255,255,255)",
            tmq: "rgb(220,220,220)"
        },
        display: {
            cnq: "sans-serif",
            ctt: "sans-serif",
            cvw: "bold",
            mtf: null,
            hij: "white",
            borderColor: "white",
            tmq: null,
            backgroundColor: "rgb(0,0,0)"
        },
        dmr: {
            font: "arial",
            cvw: "bold",
            backgroundColor: null,
            vsa: null,
            hij: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.kjy = {
        dvx: [{
            cnq: "sans-serif",
            vdm: "sans-serif",
            cvw: "bold",
            mtf: "rgb(236,225,207)",
            mht: "rgb(214,170,102)",
            wgr: "rgb(245,220,148)",
            pcn: "rgb(190,137,40)",
            fzf: "rgba(150,120,30,0.3)",
            borderColor: "rgb(150,110,30)",
            tmq: "rgb(200,170,50)",
            backgroundColor: "rgb(100,70,30)",
            vsa: "rgb(0,0,0)",
            wsa: "rgb(0,0,0)"
        }, {
            cnq: "sans-serif",
            vdm: "sans-serif",
            cvw: "bold",
            mtf: "rgb(230,230,230)",
            mht: "rgb(190,190,190)",
            wgr: "rgb(240,240,240)",
            pcn: "rgb(160,160,160)",
            fzf: "rgba(120,120,120,0.3)",
            borderColor: "rgb(120,120,120)",
            tmq: "rgb(170,170,170)",
            backgroundColor: "rgb(100,100,100)",
            vsa: "rgb(0,0,0)",
            wsa: "rgb(0,0,0)"
        }],
        fdu: {
            cnq: "sans-serif",
            vdm: "sans-serif",
            cvw: "bold",
            mtf: "rgb(236,225,207)",
            mht: "rgb(214,170,102)",
            wgr: "rgb(245,220,148)",
            pcn: "rgb(190,137,40)",
            fzf: null,
            borderColor: null,
            tmq: null,
            backgroundColor: null,
            vsa: null,
            wsa: null
        },
        dhw: {}
    };
    this.phd = {
        vwn: "rgb(240,240,240)",
        zlm: "rgb(255,255,255)",
        borderColor: "rgb(200,200,200)",
        pzg: "rgba(0,80,150,0.6)",
        display: {
            ctt: "arial",
            cnq: "arial",
            cvw: "bold",
            hij: "rgb(0,80,151)",
            mtf: "rgb(0,30,80)",
            backgroundColor: "rgb(255,255,255)",
            borderColor: "rgb(200,200,200)"
        }
    }
}

function rzj() {
    this.qsx.owm = false;
    this.qsx.ipl = false;
    this.yrs = {
        display: {
            ctt: "sans-serif",
            cnq: "sans-serif",
            cvw: "bold",
            backgroundColor: "black",
            hij: "rgb(255,255,50)",
            mtf: "rgb(255,255,50)",
            borderColor: "rgb(230,230,230)",
            tmq: "rgb(160,160,160)"
        },
        jrq: {
            ctt: "sans-serif",
            cnq: "sans-serif",
            cvw: "bold",
            backgroundColor: "rgba(0,0,0,0.8)",
            hij: "rgb(255,255,50)",
            mtf: "rgb(255,255,50)",
            borderColor: null,
            tmq: null
        },
        cri: {
            ctt: "arial",
            cnq: "arial",
            cvw: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            hij: "white",
            mtf: "white",
            borderColor: null,
            tmq: null
        },
        zpy: {
            font: "arial",
            cvw: "bold",
            backgroundColor: "rgb(230,230,230)",
            vsa: null,
            fgc: null,
            eis: null,
            borderColor: "rgb(230,230,230)",
            hij: "rgb(0,0,0)",
            nwm: "rgb(0,0,0)",
            dyl: "rrect",
            jnd: 3
        },
        uhj: {
            font: "sans-serif",
            cvw: "bold",
            hij: "rgb(255,255,50)",
            backgroundColor: "black",
            borderColor: null,
            tmq: null
        },
        rdj: {
            backgroundColor: null,
            vsa: null,
            lxh: "rgb(0,0,0)",
            oyt: "rgb(0,0,0)",
            mll: null,
            tyz: 0.5,
            son: {
                dyl: "rect",
                font: "verdana",
                cvw: "bold",
                backgroundColor: "rgb(0,0,0)",
                bwp: "rgb(150,150,150)",
                hij: "rgb(255,255,255)",
                wgr: "rgb(255,255,0)",
                borderColor: "rgb(150,150,150)",
                tmq: "rgb(0,0,0)"
            },
            rks: {
                dyl: "round",
                font: "verdana",
                cvw: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                bwp: "rgba(150,150,150,0.5)",
                hij: "rgb(255,255,255)",
                wgr: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                tmq: "rgb(100,100,100)"
            },
            rkm: {
                dyl: "round",
                font: "verdana",
                cvw: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                bwp: "rgba(150,150,150,0.5)",
                hij: "rgb(255,255,255)",
                wgr: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                tmq: "rgb(100,100,100)"
            },
            bmd: {
                dyl: "rect",
                font: "verdana",
                cvw: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                bwp: "rgba(150,150,150,0.5)",
                hij: "rgba(255,255,255,0.8)",
                wgr: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                tmq: "rgb(100,100,100)"
            },
            wdq: {
                dyl: "rect",
                font: "verdana",
                cvw: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                bwp: "rgba(150,150,150,0.5)",
                hij: "rgba(255,255,255,0.8)",
                wgr: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                tmq: "rgb(100,100,100)"
            },
            dvy: {
                font: "verdana",
                cvw: "bold",
                backgroundColor: "rgb(75, 5, 5)",
                borderColor: null,
                hij: "rgb(255, 255, 50)"
            },
            win: {
                font: "helvetica",
                cvw: "bold",
                backgroundColor: null,
                borderColor: null,
                hij: "rgb(240, 231, 203)"
            }
        }
    };
    this.ott = {
        backgroundColor: null,
        lxh: "rgb(0,0,0)",
        oyt: "rgb(0,0,0)",
        display: {
            ctt: "sans-serif",
            cnq: "sans-serif",
            cvw: "bold",
            backgroundColor: "black",
            hij: "yellow",
            mtf: "yellow",
            borderColor: "rgb(230,230,230)",
            tmq: "rgb(160,160,160)"
        },
        cri: {
            ctt: "arial",
            cnq: "arial",
            cvw: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            hij: "white",
            mtf: "white",
            borderColor: null,
            tmq: null
        },
        iym: {
            ctt: "verdana",
            cnq: "verdana",
            cvw: "bold",
            mtf: "white",
            hij: "yellow"
        },
        son: {
            dyl: "rect",
            font: "verdana",
            cvw: "bold",
            backgroundColor: "rgb(0,0,0)",
            bwp: "rgb(150,150,150)",
            hij: "rgb(255,255,255)",
            borderColor: "rgb(150,150,150)",
            tmq: "rgb(0,0,0)"
        },
        rks: {
            dyl: "round",
            font: "verdana",
            cvw: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            bwp: "rgba(150,150,150,0.5)",
            hij: "rgb(255,255,255)",
            wgr: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            tmq: "rgb(100,100,100)"
        },
        rkm: {
            dyl: "round",
            font: "verdana",
            cvw: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            bwp: "rgba(150,150,150,0.5)",
            hij: "rgb(255,255,255)",
            wgr: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            tmq: "rgb(100,100,100)"
        },
        dvy: {
            font: "verdana",
            cvw: "bold",
            backgroundColor: "rgb(75, 5, 5)",
            hij: "rgb(255, 255, 0)"
        }
    };
    this.fye = {
        backgroundColor: null,
        lxh: "rgb(0,0,0)",
        oyt: "rgb(0,0,0)",
        son: {
            dyl: "rect",
            font: "verdana",
            cvw: "bold",
            backgroundColor: "rgb(0,0,0)",
            bwp: "rgb(150,150,150)",
            hij: "rgb(255,255,255)",
            borderColor: "rgb(150,150,150)",
            tmq: "rgb(0,0,0)"
        },
        rks: {
            dyl: "round",
            font: "verdana",
            cvw: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            bwp: "rgba(150,150,150,0.5)",
            hij: "rgb(255,255,255)",
            wgr: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            tmq: "rgb(100,100,100)"
        },
        rkm: {
            dyl: "round",
            font: "verdana",
            cvw: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            bwp: "rgba(150,150,150,0.5)",
            hij: "rgb(255,255,255)",
            wgr: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            tmq: "rgb(100,100,100)"
        }
    };
    this.tai = {
        wag: 0,
        mll: "rgba(0,0,0,0)",
        ene: "rgba(0,0,0,0.5)"
    };
    this.ghd = {
        nny: "rgb(255,0,0)",
        jcx: "rgb(255,255,0)",
        ffk: "white",
        gfh: null,
        ecm: 0,
        gja: 0.05,
        wow: [{
            xud: "rgb(180,180,30)",
            nxv: "rgb(255,220,0)",
            yzi: "rgb(180,180,30)",
            ptt: "rgb(255,255,0)"
        }, {
            xud: "rgb(210,110,0)",
            nxv: "rgb(255,168,0)",
            yzi: "rgb(210,110,0)",
            ptt: "rgb(255,210,50)"
        }, {
            xud: "rgb(0,50,180)",
            nxv: "rgb(0,68,220)",
            yzi: "rgb(0,50,180)",
            ptt: "rgb(0,100,255)"
        }, {
            xud: "rgb(0,160,64)",
            nxv: "rgb(0,200,80)",
            yzi: "rgb(0,160,64)",
            ptt: "rgb(0,255,70)"
        }, {
            xud: "rgb(140,30,140)",
            nxv: "rgb(200,0,200)",
            yzi: "rgb(140,30,140)",
            ptt: "rgb(255,30,255)"
        }, {
            xud: "rgb(180,180,30)",
            nxv: "rgb(255,220,0)",
            yzi: "rgb(180,180,30)",
            ptt: "rgb(255,255,0)"
        }, {
            xud: "rgba(200,200,50,0.7)",
            nxv: "rgba(255,255,150,0.7)",
            yzi: "rgba(200,200,50,0.7)",
            ptt: "rgba(255,255,150,0.7)"
        }]
    };
    this.xsu = {
        font: "sans-serif",
        cvw: "bold",
        wcb: "red",
        srk: "orange",
        syb: "white"
    };
    this.fjy = {
        font: "sans-serif",
        cvw: "bold",
        wcb: "red",
        srk: "orange",
        syb: "white"
    };
    this.qgq = {
        font: "sans-serif",
        cvw: "bold",
        hij: "rgb(255,255,255)",
        backgroundColor: "rgb(0,0,0)",
        adx: "rgb(0,0,0)",
        pmm: "rgb(255,0,0)",
        ece: "rgb(255,255,0)",
        ztr: "rgb(80,80,80)",
        wmt: "rgb(15,15,15)",
        kpe: "rgb(0,0,0)",
        qzi: "rgb(180,180,180)",
        mfl: "rgb(0,0,0)",
        sma: 0.7
    }
}
rzj.prototype = new vjb;

function jvn() {
    this.qsx.ipl = true;
    this.yrs.uhj.backgroundColor = "rgb(0,50,30)";
    this.yrs.uhj.borderColor = "rgb(40,170,70)";
    this.yrs.rdj.son.backgroundColor = "rgb(30,110,70)";
    this.yrs.rdj.son.bwp = "rgb(60,200,100)";
    this.yrs.rdj.son.borderColor = "rgb(50,200,100)";
    this.yrs.rdj.son.tmq = "rgb(30,60,50)";
    this.yrs.rdj.dvy.backgroundColor = "rgb(0,50,30)";
    this.yrs.rdj.dvy.borderColor = "rgb(40,170,70)";
    this.yrs.rdj.bmd.backgroundColor = "rgba(0,40,20,0.5)";
    this.yrs.rdj.bmd.bwp = "rgba(70,220,120,0.7)";
    this.yrs.rdj.bmd.borderColor = "rgb(70,220,120)";
    this.yrs.rdj.bmd.tmq = "rgb(30,100,40)";
    this.yrs.rdj.wdq.backgroundColor = "rgba(0,40,20,0.5)";
    this.yrs.rdj.wdq.bwp = "rgba(70,220,120,0.7)";
    this.yrs.rdj.wdq.borderColor = "rgb(70,220,120)";
    this.yrs.rdj.wdq.tmq = "rgb(30,100,40)";
    this.yrs.rdj.rks.backgroundColor = "rgba(0,40,20,0.5)";
    this.yrs.rdj.rks.bwp = "rgba(70,220,120,0.7)";
    this.yrs.rdj.rks.borderColor = "rgb(70,220,120)";
    this.yrs.rdj.rks.tmq = "rgb(30,100,40)";
    this.yrs.rdj.rkm.backgroundColor = "rgba(0,40,20,0.5)";
    this.yrs.rdj.rkm.bwp = "rgba(70,220,120,0.7)";
    this.yrs.rdj.rkm.borderColor = "rgb(70,220,120)";
    this.yrs.rdj.rkm.tmq = "rgb(30,100,40)";
    this.ott.dvy.backgroundColor = "rgb(8,39,6)";
    this.ott.dvy.borderColor = "rgb(88,160,0)";
    this.ott.son.backgroundColor = "rgb(30,110,70)";
    this.ott.son.wbt = "rgb(60,200,100)";
    this.ott.son.borderColor = "rgb(50,170,100)";
    this.ott.son.tmq = "rgb(30,60,50)";
    this.ott.rks.backgroundColor = "rgba(0,40,20,0.5)";
    this.ott.rks.borderColor = "rgb(70,220,120)";
    this.ott.rks.tmq = "rgb(30,100,40)";
    this.ott.rkm.backgroundColor = "rgba(0,40,20,0.5)";
    this.ott.rkm.borderColor = "rgb(70,220,120)";
    this.ott.rkm.tmq = "rgb(30,100,40)";
    this.fye.son.backgroundColor = "rgb(30,110,70)";
    this.fye.son.borderColor = "rgb(50,200,100)";
    this.fye.son.tmq = "rgb(30,60,50)";
    this.fye.rks.backgroundColor = "rgba(0,40,20,0.5)";
    this.fye.rks.borderColor = "rgb(70,220,120)";
    this.fye.rks.tmq = "rgb(30,100,40)";
    this.fye.rkm.backgroundColor = "rgba(0,40,20,0.5)";
    this.fye.rkm.borderColor = "rgb(70,220,120)";
    this.fye.rkm.tmq = "rgb(30,100,40)";
    this.fye.eyv = {
        font: "sans-serif",
        cvw: "bold",
        hij: "yellow",
        cnq: "verdana"
    };
    this.fye.top = {
        font: "arial",
        cvw: "bold",
        hij: "yellow",
        lgr: "arial",
        mxd: "yellow",
        ftq: "white",
        cnq: "verdana"
    };
    this.fye.cfr = {
        font: "sans-serif",
        cvw: "bold",
        hij: "yellow",
        ycq: "verdana",
        gco: "verdana",
        gce: "bold",
        iss: "white"
    };
    this.dho.rdj.son.backgroundColor = "rgb(30,60,60)";
    this.ghd = {
        nny: "white",
        jcx: null,
        ffk: "rgb(255,220,60)",
        gfh: "rgb(230,100,0)",
        ecm: 1,
        gja: 0.025,
        wow: [{
            xud: "rgb(130,0,10)",
            nxv: "rgb(175,0,10)",
            yzi: "rgb(130,0,10)",
            ptt: "rgb(230,0,10)"
        }, {
            xud: "rgb(140,130,0)",
            nxv: "rgb(175,165,0)",
            yzi: "rgb(140,130,0)",
            ptt: "rgb(220,210,0)"
        }, {
            xud: "rgb(30,85,0)",
            nxv: "rgb(50,150,0)",
            yzi: "rgb(30,85,0)",
            ptt: "rgb(65,210,0)"
        }, {
            xud: "rgb(0,5,110)",
            nxv: "rgb(0,10,170)",
            yzi: "rgb(0,5,110)",
            ptt: "rgb(0,10,255)"
        }, {
            xud: "rgb(75,10,110)",
            nxv: "rgb(100,15,150)",
            yzi: "rgb(75,10,110)",
            ptt: "rgb(150,25,210)"
        }, {
            xud: "rgb(110,40,0)",
            nxv: "rgb(140,50,0)",
            yzi: "rgb(110,40,0)",
            ptt: "rgb(200,75,0)"
        }, {
            xud: "rgb(140,100,0)",
            nxv: "rgb(175,125,0)",
            yzi: "rgb(140,100,0)",
            ptt: "rgb(235,165,0)"
        }, {
            xud: "rgb(35,90,15)",
            nxv: "rgb(60,160,30)",
            yzi: "rgb(35,90,15)",
            ptt: "rgb(80,210,40)"
        }, {
            xud: "rgb(15,85,70)",
            nxv: "rgb(0,150,120)",
            yzi: "rgb(15,85,70)",
            ptt: "rgb(0,215,170)"
        }, {
            xud: "rgb(75,15,90)",
            nxv: "rgb(140,30,170)",
            yzi: "rgb(75,15,90)",
            ptt: "rgb(185,45,230)"
        }, null, {
            xud: "rgba(200,200,50,0.7)",
            nxv: "rgba(255,255,150,0.7)",
            yzi: "rgba(200,200,50,0.7)",
            ptt: "rgba(255,255,150,0.7)"
        }]
    };
    this.wpj.backgroundColor = "rgb(100,140,120)";
    this.wpj.vsa = "rgb(20,60,45)"
}
jvn.prototype = new rzj;

function uqn() {
    this.type = "800_600";
    this.nro = true;
    this.nft = false;
    this.avb = false;
    this.zaq = true;
    this.std = false;
    this.arr = false;
    this.yep = false;
    this.zfw = false
}

function bqn() {
    this.nro = false;
    this.canvas = {
        rlq: new ljp(0, 0, 800, 620)
    };
    this.xcb = {
        rlq: new ljp(),
        xtn: 0
    };
    this.qsx = {
        rlq: new ljp(0, 20, 800, 600),
        lbt: 0
    };
    this.hyh = {
        txw: new ljp(0, 40, 440, 36),
        zha: new ljp(5, 2, 140, 30),
        jnh: new ljp(150, 2, 140, 30),
        chb: new ljp(295, 2, 140, 30),
        qjl: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.xcj = {
        qsx: {
            rlq: new ljp(0, 0, 500, 360),
            rrg: new ljp(0, 0, 500, 360),
            dyv: new ljp(5, 325, 490, 30),
            aza: new ljp(5, 329, 490, 14),
            osx: new ljp(50, 345, 400, 6),
            mmo: new ljp(5, 285, 490, 70),
            fontSize: 14,
            mkc: 18,
            dkg: 5,
            dni: 12,
            kqj: 5,
            zok: 2,
            fka: 0,
            ghd: {
                rlq: new ljp(),
                x: 0,
                vaa: 0,
                jjr: 0
            },
            mdd: {
                rrg: new ljp(),
                aza: new ljp(),
                xoy: new ljp()
            }
        },
        nhc: {
            rlq: new ljp(0, 0, 800, 600),
            rrg: new ljp(140, 105, 520, 390),
            dyv: new ljp(),
            aza: new ljp(140, 295, 520, 21),
            osx: new ljp(192, 320, 416, 3),
            mmo: new ljp(140, 275, 520, 95),
            fontSize: 18,
            mkc: 24,
            dkg: 0,
            dni: 12,
            kqj: 7,
            zok: 3,
            fka: 9,
            ghd: {
                rlq: new ljp(400, 459, 0, 3),
                x: 33,
                vaa: 15,
                jjr: 20
            },
            mdd: {
                rrg: new ljp(50, 0, 700, 450),
                aza: new ljp(100, 460, 600, 60),
                xoy: new ljp(200, 540, 400, 40)
            }
        },
        zof: {
            rlq: new ljp(0, 0, 800, 600),
            rrg: new ljp(0, 0, 800, 600),
            dyv: new ljp(),
            aza: new ljp(50, 420, 700, 21),
            osx: new ljp(),
            mmo: new ljp(50, 410, 700, 80),
            fontSize: 18,
            mkc: 24,
            dkg: 0,
            dni: 12,
            kqj: 7,
            zok: 0,
            fka: 0,
            ghd: {
                rlq: new ljp(260, 119, 280, 280),
                x: 0,
                vaa: 0,
                jjr: 0
            },
            mdd: {
                rrg: new ljp(50, 0, 700, 450),
                aza: new ljp(100, 460, 600, 60),
                xoy: new ljp(200, 540, 400, 40)
            }
        }
    };
    this.dab = {
        rlq: new ljp(0, 0, 800, 20),
        fontSize: 12,
        sqe: 19,
        gyj: 15,
        xtd: 120,
        dni: 2,
        kqj: 2,
        umx: 2,
        eoh: 40
    };
    this.dho = {
        rlq: new ljp(0, 20, 800, 70),
        fontSize: 10,
        auh: 10,
        jht: 20,
        viu: 40,
        lbt: 4,
        dni: 10,
        kqj: 5,
        dkg: 10,
        qjl: {
            fontSize: 17,
            dkg: 2
        }
    };
    this.fpm = {
        rlq: new ljp(0, 20, 800, 600),
        txw: new ljp(),
        qjl: {
            avl: 20,
            iwv: 0,
            dni: 0,
            pmd: 0,
            map: 0,
            mov: 8,
            fse: 8,
            lbt: 0
        },
        oxh: new ljp(0, 20, 800, 40),
        abc: new ljp(0, 100, 800, 40),
        qia: new ljp(0, 140, 800, 40),
        ziu: new ljp(0, 180, 800, 40),
        kne: new ljp(225, 275, 350, 100),
        tpv: new ljp(200, 480, 400, 40),
        gvx: {
            gud: new ljp(340, 540, 120, 55)
        },
        wgj: {
            gud: new ljp(250, 540, 120, 55),
            eqr: new ljp(430, 540, 120, 55)
        },
        ktw: 36,
        fontSize: 30,
        ihl: 22,
        kqj: 3,
        dni: 5,
        lbt: 2,
        sxw: 3,
        brh: 10
    };
    this.dws = {
        rlq: new ljp(-10, 25, 310, 50),
        oxh: new ljp(10, 4, 240, 24),
        aza: new ljp(10, 28, 240, 18),
        toz: new ljp(260, 10, 40, 30),
        rib: new ljp(7, 2, 26, 26),
        bos: 16,
        avl: 12,
        yhn: 18
    };
    this.cmw = {
        rlq: new ljp(150, 160, 500, 280),
        bos: 26,
        fontSize: 20,
        upg: new ljp(465, 5, 30, 30),
        oxh: new ljp(30, 5, 440, 30),
        tpv: new ljp(20, 40, 460, 160),
        syp: new ljp(20, 230, 460, 40),
        qjl: {
            fontSize: 20
        }
    };
    this.oza = {
        rlq: new ljp(0, 55, 560, 430),
        lbt: 2,
        zno: 0,
        ekf: 5,
        des: 10,
        bos: 26,
        zcf: 20,
        oxh: new ljp(30, 15, 500, 30),
        nba: new ljp(20, 50, 520, 60),
        mpo: new ljp(40, 60, 220, 40),
        ofv: new ljp(328, 60, 30, 40),
        hrj: new ljp(360, 60, 120, 40),
        peh: new ljp(482, 60, 30, 40),
        byh: new ljp(20, 120, 520, 200),
        ukb: new ljp(40, 120, 480, 40),
        lug: new ljp(30, 160, 280, 40),
        dmi: new ljp(328, 160, 30, 40),
        jnn: new ljp(360, 160, 120, 40),
        xpb: new ljp(482, 160, 30, 40),
        fhz: new ljp(30, 215, 280, 40),
        lfh: new ljp(328, 215, 30, 40),
        cms: new ljp(360, 215, 120, 40),
        pdv: new ljp(482, 215, 30, 40),
        oqq: new ljp(30, 270, 280, 40),
        hrt: new ljp(328, 270, 30, 40),
        szb: new ljp(360, 270, 120, 40),
        znm: new ljp(482, 270, 30, 40),
        dyv: new ljp(30, 330, 500, 30),
        tbr: new ljp(210, 370, 140, 50),
        hsk: new ljp(),
        dmr: {
            aza: new ljp(40, 0, 240, 40),
            bkw: new ljp(7, 12, 16, 16),
            fontSize: 20,
            mov: 0,
            lbt: 2
        },
        hqd: {
            mov: 3,
            dni: -5,
            kqj: -1,
            fse: 6,
            fontSize: 20,
            lbt: 0
        },
        qke: {
            mov: 3,
            dni: 5,
            kqj: 0,
            fse: 6,
            fontSize: 20,
            lbt: 0
        },
        xoh: {
            mov: 6,
            dni: 0,
            kqj: 0,
            fse: 6,
            fontSize: 26,
            lbt: 2
        },
        display: {
            bos: 16,
            avl: 24,
            tfo: 0,
            pmd: 0,
            lbt: 2,
            pui: 3,
            tgb: 3,
            dts: 3,
            enh: 3
        }
    };
    this.kjy = {
        rlq: [new ljp(2, 20, 130, 46), new ljp(668, 20, 130, 46)],
        display: {
            cym: new ljp(6, 16, 118, 22),
            bos: 14,
            iwv: 20,
            tfo: -11,
            map: 10,
            dkg: 8,
            lbt: 3,
            mog: 0,
            ndk: 4
        },
        fdu: {
            rlq: new ljp(50, 130, 700, 300),
            cym: new ljp(),
            bos: 66,
            iwv: 150,
            tfo: -90,
            map: 60,
            dkg: 10,
            lbt: 0,
            mog: 0,
            ndk: 0
        },
        dhw: {
            rlq: new ljp(38, 80, 724, 369),
            rhr: new ljp(100, 53, 525, 50),
            cym: new ljp(186, 153, 332, 94),
            knm: 340,
            enf: 30,
            ikk: {
                _0: new ljp(2, 0, 90, 94),
                _1: new ljp(98, 0, 90, 94),
                _2: new ljp(194, 0, 90, 94),
                _3: new ljp(290, 0, 90, 94),
                _4: new ljp(386, 0, 90, 94),
                _5: new ljp(482, 0, 90, 94),
                _6: new ljp(578, 0, 90, 94),
                _7: new ljp(674, 0, 90, 94),
                _8: new ljp(770, 0, 90, 94),
                _9: new ljp(866, 0, 90, 94),
                _cm: new ljp(962, 0, 28, 94),
                _dt: new ljp(999, 0, 28, 94),
                _sp: new ljp(1036, 0, 28, 94)
            }
        }
    }
}
bqn.prototype = new uqn;

function ygu() {
    this.nft = true
}
ygu.prototype = new bqn;

function dbz() {
    this.std = true;
    this.avb = true;
    this.nro = false;
    this.nft = true;
    this.canvas = {
        rlq: new ljp(0, 0, 800, 1165)
    };
    this.xcb = {
        rlq: new ljp(),
        xtn: 0
    };
    this.qsx = {
        rlq: new ljp(0, 550, 800, 615),
        lbt: 10
    };
    this.hyh = {
        txw: new ljp(0, 330, 440, 36),
        zha: new ljp(5, 2, 140, 30),
        jnh: new ljp(150, 2, 140, 30),
        chb: new ljp(295, 2, 140, 30),
        qjl: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.xcj = {
        qsx: {
            rlq: new ljp(0, 0, 500, 360),
            rrg: new ljp(0, 0, 500, 360),
            dyv: new ljp(5, 325, 490, 30),
            aza: new ljp(5, 329, 490, 14),
            osx: new ljp(50, 345, 400, 6),
            mmo: new ljp(5, 285, 490, 70),
            fontSize: 14,
            mkc: 18,
            dkg: 5,
            dni: 12,
            kqj: 5,
            zok: 2,
            fka: 0,
            ghd: {
                rlq: new ljp(),
                x: 0,
                vaa: 0,
                jjr: 0
            },
            mdd: {
                rrg: new ljp(),
                aza: new ljp(),
                xoy: new ljp()
            }
        },
        nhc: {
            rlq: new ljp(0, 0, 800, 600),
            rrg: new ljp(100, 75, 600, 450),
            dyv: new ljp(),
            aza: new ljp(100, 295, 600, 24),
            osx: new ljp(160, 325, 480, 3),
            mmo: new ljp(100, 265, 600, 115),
            fontSize: 21,
            mkc: 26,
            dkg: 0,
            dni: 12,
            kqj: 8,
            zok: 3,
            fka: 10,
            ghd: {
                rlq: new ljp(400, 484, 0, 3),
                x: 38,
                vaa: 17,
                jjr: 23
            },
            mdd: {
                rrg: new ljp(50, 0, 700, 450),
                aza: new ljp(100, 460, 600, 60),
                xoy: new ljp(200, 540, 400, 40)
            }
        },
        zof: {
            rlq: new ljp(0, 0, 800, 600),
            rrg: new ljp(0, 0, 800, 600),
            dyv: new ljp(),
            aza: new ljp(50, 420, 700, 21),
            osx: new ljp(),
            mmo: new ljp(50, 410, 700, 80),
            fontSize: 18,
            mkc: 24,
            dkg: 0,
            dni: 12,
            kqj: 7,
            zok: 0,
            fka: 0,
            ghd: {
                rlq: new ljp(260, 119, 280, 280),
                x: 0,
                vaa: 0,
                jjr: 0
            },
            mdd: {
                rrg: new ljp(50, 0, 700, 450),
                aza: new ljp(100, 460, 600, 60),
                xoy: new ljp(200, 540, 400, 40)
            }
        }
    };
    this.top = {
        rlq: new ljp(0, 20, 800, 520)
    };
    this.dab = {
        rlq: new ljp(0, 0, 800, 20),
        fontSize: 12,
        sqe: 19,
        gyj: 15,
        xtd: 120,
        dni: 2,
        kqj: 2,
        umx: 2,
        eoh: 60
    };
    this.dho = {
        rlq: new ljp(0, 20, 800, 70),
        fontSize: 10,
        auh: 10,
        jht: 20,
        viu: 40,
        lbt: 4,
        dni: 10,
        kqj: 5,
        dkg: 10,
        qjl: {
            fontSize: 17,
            dkg: 2
        }
    };
    this.fpm = {
        rlq: new ljp(0, 550, 800, 615),
        txw: new ljp(),
        qjl: {
            avl: 26,
            iwv: 0,
            dni: 0,
            pmd: 0,
            map: 0,
            mov: 10,
            fse: 10,
            lbt: 2
        },
        oxh: new ljp(0, 20, 800, 40),
        abc: new ljp(0, 100, 800, 40),
        qia: new ljp(0, 140, 800, 40),
        ziu: new ljp(0, 180, 800, 40),
        kne: new ljp(225, 275, 350, 100),
        tpv: new ljp(200, 480, 400, 40),
        gvx: {
            gud: new ljp(340, 540, 120, 68)
        },
        wgj: {
            gud: new ljp(250, 540, 120, 68),
            eqr: new ljp(430, 540, 120, 68)
        },
        ktw: 36,
        fontSize: 30,
        ihl: 22,
        kqj: 3,
        dni: 5,
        lbt: 2,
        sxw: 3,
        brh: 10,
    };
    this.dws = {
        rlq: new ljp(-10, 545, 310, 50),
        oxh: new ljp(10, 4, 240, 24),
        aza: new ljp(10, 28, 240, 18),
        toz: new ljp(260, 10, 40, 30),
        rib: new ljp(7, 2, 26, 26),
        bos: 16,
        avl: 12,
        yhn: 18
    };
    this.cmw = {
        rlq: new ljp(150, 690, 500, 280),
        bos: 26,
        fontSize: 20,
        upg: new ljp(465, 5, 30, 30),
        oxh: new ljp(30, 5, 440, 40),
        tpv: new ljp(20, 40, 460, 160),
        syp: new ljp(20, 230, 460, 40),
        qjl: {
            fontSize: 20
        }
    };
    this.oza = {
        rlq: new ljp(0, 585, 560, 430),
        lbt: 2,
        zno: 0,
        ekf: 5,
        des: 10,
        bos: 26,
        zcf: 20,
        oxh: new ljp(30, 15, 500, 30),
        nba: new ljp(20, 50, 520, 60),
        mpo: new ljp(40, 60, 220, 40),
        ofv: new ljp(328, 60, 30, 40),
        hrj: new ljp(360, 60, 120, 40),
        peh: new ljp(482, 60, 30, 40),
        byh: new ljp(20, 120, 520, 200),
        ukb: new ljp(40, 120, 480, 40),
        lug: new ljp(30, 160, 280, 40),
        dmi: new ljp(328, 160, 30, 40),
        jnn: new ljp(360, 160, 120, 40),
        xpb: new ljp(482, 160, 30, 40),
        fhz: new ljp(30, 215, 280, 40),
        lfh: new ljp(328, 215, 30, 40),
        cms: new ljp(360, 215, 120, 40),
        pdv: new ljp(482, 215, 30, 40),
        oqq: new ljp(30, 270, 280, 40),
        hrt: new ljp(328, 270, 30, 40),
        szb: new ljp(360, 270, 120, 40),
        znm: new ljp(482, 270, 30, 40),
        dyv: new ljp(30, 330, 500, 30),
        tbr: new ljp(210, 370, 140, 50),
        hsk: new ljp(),
        dmr: {
            aza: new ljp(40, 0, 240, 40),
            bkw: new ljp(7, 12, 16, 16),
            fontSize: 20,
            mov: 0,
            lbt: 2
        },
        hqd: {
            mov: 3,
            dni: -5,
            kqj: -1,
            fse: 6,
            fontSize: 20,
            lbt: 0
        },
        qke: {
            mov: 3,
            dni: 5,
            kqj: 0,
            fse: 6,
            fontSize: 20,
            lbt: 0
        },
        xoh: {
            mov: 6,
            dni: 0,
            kqj: 0,
            fse: 6,
            fontSize: 26,
            lbt: 2
        },
        display: {
            bos: 16,
            avl: 24,
            tfo: 0,
            pmd: 0,
            lbt: 2,
            pui: 3,
            tgb: 3,
            dts: 3,
            enh: 3
        }
    };
    this.kjy = {
        rlq: [new ljp(2, 550, 130, 46), new ljp(668, 550, 130, 46)],
        display: {
            cym: new ljp(6, 16, 118, 23),
            bos: 14,
            iwv: 20,
            tfo: -11,
            map: 10,
            dkg: 8,
            lbt: 3,
            mog: 0,
            ndk: 4
        },
        fdu: {
            rlq: new ljp(50, 660, 700, 300),
            cym: new ljp(),
            bos: 66,
            iwv: 150,
            tfo: -90,
            map: 60,
            dkg: 10,
            lbt: 0,
            mog: 0,
            ndk: 0
        },
        dhw: {
            rlq: new ljp(38, 610, 724, 369),
            rhr: new ljp(100, 53, 525, 50),
            cym: new ljp(186, 153, 332, 94),
            knm: 360,
            enf: 30,
            ikk: {
                _0: new ljp(2, 0, 90, 94),
                _1: new ljp(98, 0, 90, 94),
                _2: new ljp(194, 0, 90, 94),
                _3: new ljp(290, 0, 90, 94),
                _4: new ljp(386, 0, 90, 94),
                _5: new ljp(482, 0, 90, 94),
                _6: new ljp(578, 0, 90, 94),
                _7: new ljp(674, 0, 90, 94),
                _8: new ljp(770, 0, 90, 94),
                _9: new ljp(866, 0, 90, 94),
                _cm: new ljp(962, 0, 28, 94),
                _dt: new ljp(999, 0, 28, 94),
                _sp: new ljp(1036, 0, 28, 94)
            }
        }
    }
}
dbz.prototype = new uqn;

function llz() {
    this.avb = true;
    this.canvas = {
        rlq: new ljp(0, 0, 810, 625)
    };
    this.xcb = {
        rlq: new ljp(),
        xtn: 0
    };
    this.qsx = {
        rlq: new ljp(5, 20, 800, 600),
        lbt: 20
    };
    this.hyh = {
        txw: new ljp(5, 40, 440, 36),
        zha: new ljp(5, 2, 140, 30),
        jnh: new ljp(150, 2, 140, 30),
        chb: new ljp(295, 2, 140, 30),
        qjl: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.xcj = {
        qsx: {
            rlq: new ljp(0, 0, 500, 360),
            rrg: new ljp(0, 0, 500, 360),
            dyv: new ljp(5, 325, 490, 30),
            aza: new ljp(5, 329, 490, 14),
            osx: new ljp(50, 345, 400, 6),
            mmo: new ljp(5, 285, 490, 70),
            fontSize: 14,
            mkc: 18,
            dkg: 5,
            dni: 12,
            kqj: 5,
            zok: 2,
            fka: 0,
            ghd: {
                rlq: new ljp(),
                x: 0,
                vaa: 0,
                jjr: 0
            },
            mdd: {
                rrg: new ljp(),
                aza: new ljp(),
                xoy: new ljp()
            }
        },
        nhc: {
            rlq: new ljp(0, 0, 800, 600),
            rrg: new ljp(140, 105, 520, 390),
            dyv: new ljp(),
            aza: new ljp(140, 295, 520, 21),
            osx: new ljp(192, 320, 416, 3),
            mmo: new ljp(140, 275, 520, 95),
            fontSize: 18,
            mkc: 24,
            dkg: 0,
            dni: 12,
            kqj: 7,
            zok: 3,
            fka: 9,
            ghd: {
                rlq: new ljp(400, 459, 0, 3),
                x: 33,
                vaa: 15,
                jjr: 20
            },
            mdd: {
                rrg: new ljp(50, 0, 700, 450),
                aza: new ljp(100, 460, 600, 60),
                xoy: new ljp(200, 540, 400, 40)
            }
        },
        zof: {
            rlq: new ljp(0, 0, 800, 600),
            rrg: new ljp(0, 0, 800, 600),
            dyv: new ljp(),
            aza: new ljp(50, 420, 700, 21),
            osx: new ljp(),
            mmo: new ljp(50, 410, 700, 80),
            fontSize: 18,
            mkc: 24,
            dkg: 0,
            dni: 12,
            kqj: 7,
            zok: 0,
            fka: 0,
            ghd: {
                rlq: new ljp(260, 119, 280, 280),
                x: 0,
                vaa: 0,
                jjr: 0
            },
            mdd: {
                rrg: new ljp(50, 0, 700, 450),
                aza: new ljp(100, 460, 600, 60),
                xoy: new ljp(200, 540, 400, 40)
            }
        }
    };
    this.dab = {
        rlq: new ljp(5, 0, 800, 20),
        fontSize: 12,
        sqe: 19,
        gyj: 15,
        xtd: 120,
        dni: 2,
        kqj: 2,
        umx: 2,
        eoh: 40
    };
    this.dho = {
        rlq: new ljp(5, 20, 800, 70),
        fontSize: 10,
        auh: 10,
        jht: 20,
        viu: 40,
        lbt: 4,
        dni: 10,
        kqj: 5,
        dkg: 10,
        qjl: {
            fontSize: 17,
            dkg: 2
        }
    };
    this.fpm = {
        rlq: new ljp(5, 20, 800, 600),
        txw: new ljp(),
        qjl: {
            avl: 20,
            iwv: 0,
            dni: 0,
            pmd: 0,
            map: 0,
            mov: 8,
            fse: 8,
            lbt: 2
        },
        oxh: new ljp(0, 20, 800, 40),
        abc: new ljp(0, 100, 800, 40),
        qia: new ljp(0, 140, 800, 40),
        ziu: new ljp(0, 180, 800, 40),
        kne: new ljp(225, 275, 350, 100),
        tpv: new ljp(200, 480, 400, 40),
        gvx: {
            gud: new ljp(340, 540, 120, 55)
        },
        wgj: {
            gud: new ljp(250, 540, 120, 55),
            eqr: new ljp(430, 540, 120, 55)
        },
        ktw: 36,
        fontSize: 30,
        ihl: 22,
        kqj: 3,
        dni: 5,
        lbt: 2,
        sxw: 3,
        brh: 10
    };
    this.dws = {
        rlq: new ljp(-10, 25, 310, 50),
        oxh: new ljp(10, 4, 240, 24),
        aza: new ljp(10, 28, 240, 18),
        toz: new ljp(260, 10, 40, 30),
        rib: new ljp(7, 2, 26, 26),
        bos: 16,
        avl: 12,
        yhn: 18
    };
    this.cmw = {
        rlq: new ljp(155, 160, 500, 280),
        bos: 26,
        fontSize: 20,
        upg: new ljp(465, 5, 30, 30),
        oxh: new ljp(30, 5, 440, 40),
        tpv: new ljp(20, 40, 460, 160),
        syp: new ljp(20, 230, 460, 40),
        qjl: {
            fontSize: 20
        }
    };
    this.oza = {
        rlq: new ljp(5, 55, 560, 430),
        lbt: 2,
        zno: 0,
        ekf: 5,
        des: 10,
        bos: 26,
        zcf: 20,
        oxh: new ljp(30, 15, 500, 30),
        nba: new ljp(20, 50, 520, 60),
        mpo: new ljp(40, 60, 220, 40),
        ofv: new ljp(328, 60, 30, 40),
        hrj: new ljp(360, 60, 120, 40),
        peh: new ljp(482, 60, 30, 40),
        byh: new ljp(20, 120, 520, 200),
        ukb: new ljp(40, 120, 480, 40),
        lug: new ljp(30, 160, 280, 40),
        dmi: new ljp(328, 160, 30, 40),
        jnn: new ljp(360, 160, 120, 40),
        xpb: new ljp(482, 160, 30, 40),
        fhz: new ljp(30, 215, 280, 40),
        lfh: new ljp(328, 215, 30, 40),
        cms: new ljp(360, 215, 120, 40),
        pdv: new ljp(482, 215, 30, 40),
        oqq: new ljp(30, 270, 280, 40),
        hrt: new ljp(328, 270, 30, 40),
        szb: new ljp(360, 270, 120, 40),
        znm: new ljp(482, 270, 30, 40),
        dyv: new ljp(30, 330, 500, 30),
        tbr: new ljp(210, 370, 140, 50),
        hsk: new ljp(),
        dmr: {
            aza: new ljp(40, 0, 240, 40),
            bkw: new ljp(7, 12, 16, 16),
            fontSize: 20,
            mov: 0,
            lbt: 2
        },
        hqd: {
            mov: 3,
            dni: -5,
            kqj: -1,
            fse: 6,
            fontSize: 20,
            lbt: 0
        },
        qke: {
            mov: 3,
            dni: 5,
            kqj: 0,
            fse: 6,
            fontSize: 20,
            lbt: 0
        },
        xoh: {
            mov: 6,
            dni: 0,
            kqj: 0,
            fse: 6,
            fontSize: 26,
            lbt: 2
        },
        display: {
            bos: 16,
            avl: 24,
            tfo: 0,
            pmd: 0,
            lbt: 2,
            pui: 3,
            tgb: 3,
            dts: 3,
            enh: 3
        }
    };
    this.kjy = {
        rlq: [new ljp(7, 20, 130, 46), new ljp(673, 20, 130, 46)],
        display: {
            cym: new ljp(6, 16, 118, 22),
            bos: 14,
            iwv: 20,
            tfo: -11,
            map: 10,
            lbt: 3,
            dkg: 8,
            mog: 0,
            ndk: 4
        },
        fdu: {
            rlq: new ljp(55, 130, 700, 300),
            cym: new ljp(),
            bos: 66,
            iwv: 150,
            tfo: -90,
            map: 60,
            dkg: 10,
            lbt: 0,
            mog: 0,
            ndk: 0
        },
        dhw: {
            rlq: new ljp(43, 80, 724, 369),
            rhr: new ljp(100, 53, 525, 50),
            cym: new ljp(186, 153, 332, 94),
            knm: 340,
            enf: 30,
            ikk: {
                _0: new ljp(2, 0, 90, 94),
                _1: new ljp(98, 0, 90, 94),
                _2: new ljp(194, 0, 90, 94),
                _3: new ljp(290, 0, 90, 94),
                _4: new ljp(386, 0, 90, 94),
                _5: new ljp(482, 0, 90, 94),
                _6: new ljp(578, 0, 90, 94),
                _7: new ljp(674, 0, 90, 94),
                _8: new ljp(770, 0, 90, 94),
                _9: new ljp(866, 0, 90, 94),
                _cm: new ljp(962, 0, 28, 94),
                _dt: new ljp(999, 0, 28, 94),
                _sp: new ljp(1036, 0, 28, 94)
            }
        }
    }
}
llz.prototype = new uqn;

function upm() {
    this.nft = true
}
upm.prototype = new llz;

function zsk() {
    this.nro = false;
    this.arr = true;
    this.zaq = false;
    this.yep = true;
    this.zfw = true;
    this.canvas = {
        rlq: new ljp(0, 0, 960, 600)
    };
    this.xcb = {
        rlq: new ljp(),
        xtn: 0,
        rig: 0
    };
    this.qsx = {
        rlq: new ljp(0, 0, 800, 600),
        lbt: 0
    };
    this.hyh = {
        txw: new ljp(0, 25, 470, 36),
        zha: new ljp(5, 2, 150, 30),
        jnh: new ljp(160, 2, 150, 30),
        chb: new ljp(315, 2, 150, 30),
        qjl: {
            fontSize: 15,
            textIndent: 30
        }
    };
    this.xcj = {
        qsx: {
            rlq: new ljp(0, 0, 640, 460),
            rrg: new ljp(0, 0, 640, 460),
            dyv: new ljp(6, 416, 628, 38),
            aza: new ljp(6, 420, 628, 17),
            osx: new ljp(64, 442, 512, 7),
            mmo: new ljp(6, 364, 628, 90),
            fontSize: 18,
            mkc: 20,
            dkg: 6,
            dni: 12,
            kqj: 6,
            zok: 3,
            fka: 0,
            ghd: {
                rlq: new ljp(),
                x: 0,
                vaa: 0,
                jjr: 0
            },
            mdd: {
                rrg: new ljp(),
                aza: new ljp(),
                xoy: new ljp()
            }
        },
        nhc: {
            rlq: new ljp(0, 0, 800, 600),
            rrg: new ljp(100, 75, 600, 450),
            dyv: new ljp(),
            aza: new ljp(100, 295, 600, 24),
            osx: new ljp(160, 325, 480, 3),
            mmo: new ljp(100, 265, 600, 115),
            fontSize: 21,
            mkc: 26,
            dkg: 0,
            dni: 12,
            kqj: 8,
            zok: 3,
            fka: 10,
            ghd: {
                rlq: new ljp(400, 484, 0, 3),
                x: 38,
                vaa: 17,
                jjr: 23
            },
            mdd: {
                rrg: new ljp(50, 0, 700, 450),
                aza: new ljp(100, 430, 600, 60),
                xoy: new ljp(200, 510, 400, 40)
            }
        },
        zof: {
            rlq: new ljp(0, 0, 800, 600),
            rrg: new ljp(0, 0, 800, 600),
            dyv: new ljp(),
            aza: new ljp(50, 420, 700, 21),
            osx: new ljp(),
            mmo: new ljp(50, 410, 700, 80),
            fontSize: 18,
            mkc: 24,
            dkg: 0,
            dni: 12,
            kqj: 7,
            zok: 0,
            fka: 0,
            ghd: {
                rlq: new ljp(260, 119, 280, 280),
                x: 0,
                vaa: 0,
                jjr: 0
            },
            mdd: {
                rrg: new ljp(50, 0, 700, 450),
                aza: new ljp(100, 460, 600, 60),
                xoy: new ljp(200, 540, 400, 40)
            }
        }
    };
    this.dab = {};
    this.dho = {};
    this.fpm = {
        rlq: new ljp(0, 0, 960, 600),
        txw: new ljp(800, 0, 160, 600),
        qjl: {
            avl: 0,
            iwv: 0,
            dni: 0,
            pmd: 0,
            map: 0,
            fse: 8,
            mov: 16,
            lbt: 4
        },
        oxh: new ljp(0, 20, 800, 40),
        abc: new ljp(0, 100, 800, 40),
        qia: new ljp(0, 140, 800, 40),
        ziu: new ljp(0, 180, 800, 40),
        kne: new ljp(225, 275, 350, 100),
        tpv: new ljp(200, 480, 400, 40),
        gvx: {
            gud: new ljp(815, 410, 130, 130),
        },
        wgj: {
            gud: new ljp(815, 310, 130, 130),
            eqr: new ljp(815, 120, 130, 130)
        },
        ktw: 36,
        fontSize: 30,
        ihl: 22,
        kqj: 3,
        dni: 5,
        lbt: 2,
        sxw: 3,
        brh: 10
    };
    this.wpj = {
        rlq: new ljp(0, 0, 960, 600),
        lbt: 0,
        mov: 0,
        qzk: 50,
        iqk: 30,
        zcf: 30,
        ynv: new ljp(70, 170, 470, 70),
        gxm: new ljp(560, 170, 60, 70),
        wpx: new ljp(622, 170, 210, 70),
        rjv: new ljp(834, 170, 60, 70),
        alr: new ljp(70, 310, 470, 70),
        sva: new ljp(560, 310, 60, 70),
        vew: new ljp(622, 310, 210, 70),
        phk: new ljp(834, 310, 60, 70),
        zzq: new ljp(70, 450, 470, 70),
        bxj: new ljp(622, 450, 210, 70),
        zke: new ljp(90, 530, 780, 50),
        mpo: new ljp(80, 120, 470, 60),
        ofv: new ljp(570, 120, 50, 60),
        hrj: new ljp(622, 120, 210, 60),
        peh: new ljp(834, 120, 50, 60),
        cat: new ljp(90, 200, 780, 70),
        lug: new ljp(80, 280, 470, 60),
        dmi: new ljp(570, 280, 50, 60),
        jnn: new ljp(622, 280, 210, 60),
        xpb: new ljp(834, 280, 50, 60),
        fhz: new ljp(80, 360, 470, 60),
        lfh: new ljp(570, 360, 50, 60),
        cms: new ljp(622, 360, 210, 60),
        pdv: new ljp(834, 360, 50, 60),
        oqq: new ljp(80, 440, 470, 60),
        hrt: new ljp(570, 440, 50, 60),
        szb: new ljp(622, 440, 210, 60),
        znm: new ljp(834, 440, 50, 60),
        dyv: new ljp(90, 530, 780, 50),
        oxl: {
            msx: new ljp(0, 10, 240, 90),
            bpc: new ljp(240, 10, 240, 90),
            cki: new ljp(480, 10, 240, 90),
            fav: new ljp(720, 10, 240, 90)
        },
        efy: {
            msx: new ljp(0, 10, 192, 90),
            sha: new ljp(192, 10, 192, 90),
            bpc: new ljp(384, 10, 192, 90),
            cki: new ljp(576, 10, 192, 90),
            fav: new ljp(768, 10, 192, 90)
        },
        cxu: [new ljp(190, 205, 200, 160), new ljp(570, 205, 200, 160)],
        qfn: [new ljp(90, 205, 200, 160), new ljp(380, 205, 200, 160), new ljp(670, 205, 200, 160)],
        ykx: [new ljp(190, 130, 200, 160), new ljp(570, 130, 200, 160), new ljp(190, 360, 200, 160), new ljp(570, 360, 200, 160)],
        lrw: [new ljp(90, 130, 200, 160), new ljp(380, 130, 200, 160), new ljp(670, 130, 200, 160), new ljp(90, 360, 200, 160), new ljp(380, 360, 200, 160), new ljp(670, 360, 200, 160)],
        hqd: {
            mov: 3,
            dni: -10,
            kqj: -1,
            fse: 6,
            fontSize: 36,
            lbt: 0,
        },
        qke: {
            mov: 3,
            dni: 10,
            kqj: -1,
            fse: 6,
            fontSize: 36,
            lbt: 0,
        },
        djx: {
            fontSize: 36,
            dni: 0,
            kqj: 0,
            fse: 10,
            mov: 0,
            lbt: 0
        },
        kls: {
            fontSize: 26,
            dkg: 5,
            mov: 26,
            lbt: 4,
            bsw: 40
        },
        rjc: {
            bos: 16,
            avl: 40,
            tfo: 0,
            pmd: 0,
            lbt: 2,
            dkg: 3
        },
        hva: {
            bos: 16,
            avl: 40,
            tfo: 0,
            pmd: 0,
            lbt: 2,
            dkg: 3
        },
        dmr: {
            aza: new ljp(50, 0, 360, 60),
            bkw: new ljp(0, 13, 30, 30),
            fontSize: 30,
            mov: 0,
            lbt: 2
        }
    };
    this.dws = {
        rlq: new ljp(-10, 5, 310, 60),
        oxh: new ljp(10, 6, 240, 26),
        aza: new ljp(10, 34, 240, 20),
        toz: new ljp(255, 11, 50, 38),
        rib: new ljp(8, 2, 34, 34),
        bos: 16,
        avl: 12,
        yhn: 24
    };
    this.cmw = {
        rlq: new ljp(200, 135, 560, 330),
        bos: 26,
        fontSize: 20,
        upg: new ljp(515, 5, 40, 40),
        oxh: new ljp(40, 0, 480, 30),
        tpv: new ljp(20, 40, 520, 195),
        syp: new ljp(20, 265, 520, 54),
        qjl: {
            fontSize: 20
        }
    };
    this.kjy = {
        rlq: [new ljp(2, 0, 130, 46), new ljp(668, 0, 130, 46)],
        display: {
            cym: new ljp(6, 16, 118, 23),
            bos: 14,
            iwv: 20,
            tfo: -11,
            map: 10,
            dkg: 8,
            lbt: 3,
            mog: 0,
            ndk: 4
        },
        fdu: {
            rlq: new ljp(50, 110, 700, 300),
            cym: new ljp(),
            bos: 66,
            iwv: 150,
            tfo: -90,
            map: 60,
            dkg: 10,
            lbt: 0,
            mog: 0,
            ndk: 0
        },
        dhw: {
            rlq: new ljp(38, 60, 724, 369),
            rhr: new ljp(100, 53, 525, 50),
            cym: new ljp(186, 153, 332, 94),
            knm: 340,
            enf: 30,
            ikk: {
                _0: new ljp(2, 0, 90, 94),
                _1: new ljp(98, 0, 90, 94),
                _2: new ljp(194, 0, 90, 94),
                _3: new ljp(290, 0, 90, 94),
                _4: new ljp(386, 0, 90, 94),
                _5: new ljp(482, 0, 90, 94),
                _6: new ljp(578, 0, 90, 94),
                _7: new ljp(674, 0, 90, 94),
                _8: new ljp(770, 0, 90, 94),
                _9: new ljp(866, 0, 90, 94),
                _cm: new ljp(962, 0, 28, 94),
                _dt: new ljp(999, 0, 28, 94),
                _sp: new ljp(1036, 0, 28, 94)
            }
        }
    }
}
zsk.prototype = new uqn;

function nzr() {
    this.nro = false;
    this.arr = true;
    this.zaq = false;
    this.yep = true;
    this.zfw = true;
    this.canvas = {
        rlq: new ljp(0, 0, 960, 600)
    };
    this.xcb = {
        rlq: new ljp(),
        xtn: 0,
        rig: 0
    };
    this.qsx = {
        rlq: new ljp(160, 0, 800, 600),
        lbt: 0
    };
    this.hyh = {
        txw: new ljp(490, 25, 470, 36),
        zha: new ljp(5, 4, 150, 30),
        jnh: new ljp(160, 4, 150, 30),
        chb: new ljp(315, 4, 150, 30),
        qjl: {
            fontSize: 15,
            textIndent: 30
        }
    };
    this.xcj = {
        qsx: {
            rlq: new ljp(0, 0, 640, 460),
            rrg: new ljp(0, 0, 640, 460),
            dyv: new ljp(6, 416, 628, 38),
            aza: new ljp(6, 420, 628, 17),
            osx: new ljp(64, 442, 512, 7),
            mmo: new ljp(6, 364, 628, 90),
            fontSize: 18,
            mkc: 20,
            dkg: 6,
            dni: 12,
            kqj: 6,
            zok: 3,
            fka: 0,
            ghd: {
                rlq: new ljp(),
                x: 0,
                vaa: 0,
                jjr: 0
            },
            mdd: {
                rrg: new ljp(),
                aza: new ljp(),
                xoy: new ljp()
            }
        },
        nhc: {
            rlq: new ljp(0, 0, 800, 600),
            rrg: new ljp(100, 75, 600, 450),
            dyv: new ljp(),
            aza: new ljp(100, 295, 600, 24),
            osx: new ljp(160, 325, 480, 3),
            mmo: new ljp(100, 265, 600, 115),
            fontSize: 21,
            mkc: 26,
            dkg: 0,
            dni: 12,
            kqj: 8,
            zok: 3,
            fka: 10,
            ghd: {
                rlq: new ljp(400, 484, 0, 3),
                x: 38,
                vaa: 17,
                jjr: 23
            },
            mdd: {
                rrg: new ljp(50, 0, 700, 450),
                aza: new ljp(100, 430, 600, 60),
                xoy: new ljp(200, 510, 400, 40)
            }
        },
        zof: {
            rlq: new ljp(0, 0, 800, 600),
            rrg: new ljp(0, 0, 800, 600),
            dyv: new ljp(),
            aza: new ljp(50, 420, 700, 21),
            osx: new ljp(),
            mmo: new ljp(50, 410, 700, 80),
            fontSize: 18,
            mkc: 24,
            dkg: 0,
            dni: 12,
            kqj: 7,
            zok: 0,
            fka: 0,
            ghd: {
                rlq: new ljp(260, 119, 280, 280),
                x: 0,
                vaa: 0,
                jjr: 0
            },
            mdd: {
                rrg: new ljp(50, 0, 700, 450),
                aza: new ljp(100, 460, 600, 60),
                xoy: new ljp(200, 540, 400, 40)
            }
        }
    };
    this.dab = {};
    this.dho = {};
    this.fpm = {
        rlq: new ljp(0, 0, 960, 600),
        txw: new ljp(0, 0, 160, 600),
        qjl: {
            avl: 0,
            iwv: 0,
            dni: 0,
            pmd: 0,
            map: 0,
            fse: 8,
            mov: 16,
            lbt: 4
        },
        oxh: new ljp(160, 20, 800, 40),
        abc: new ljp(160, 100, 800, 40),
        qia: new ljp(160, 140, 800, 40),
        ziu: new ljp(160, 180, 800, 40),
        kne: new ljp(385, 275, 350, 100),
        tpv: new ljp(360, 480, 400, 40),
        gvx: {
            gud: new ljp(15, 410, 130, 130),
        },
        wgj: {
            gud: new ljp(15, 310, 130, 130),
            eqr: new ljp(15, 120, 130, 130)
        },
        ktw: 36,
        fontSize: 30,
        ihl: 22,
        kqj: 3,
        dni: 5,
        lbt: 2,
        sxw: 3,
        brh: 10
    };
    this.wpj = {
        rlq: new ljp(0, 0, 960, 600),
        lbt: 0,
        mov: 0,
        qzk: 50,
        iqk: 30,
        zcf: 30,
        ynv: new ljp(70, 170, 470, 70),
        gxm: new ljp(560, 170, 60, 70),
        wpx: new ljp(622, 170, 210, 70),
        rjv: new ljp(834, 170, 60, 70),
        alr: new ljp(70, 310, 470, 70),
        sva: new ljp(560, 310, 60, 70),
        vew: new ljp(622, 310, 210, 70),
        phk: new ljp(834, 310, 60, 70),
        zzq: new ljp(70, 450, 470, 70),
        bxj: new ljp(622, 450, 210, 70),
        zke: new ljp(90, 530, 780, 50),
        mpo: new ljp(80, 120, 470, 60),
        ofv: new ljp(570, 120, 50, 60),
        hrj: new ljp(622, 120, 210, 60),
        peh: new ljp(834, 120, 50, 60),
        cat: new ljp(90, 200, 780, 70),
        lug: new ljp(80, 280, 470, 60),
        dmi: new ljp(570, 280, 50, 60),
        jnn: new ljp(622, 280, 210, 60),
        xpb: new ljp(834, 280, 50, 60),
        fhz: new ljp(80, 360, 470, 60),
        lfh: new ljp(570, 360, 50, 60),
        cms: new ljp(622, 360, 210, 60),
        pdv: new ljp(834, 360, 50, 60),
        oqq: new ljp(80, 440, 470, 60),
        hrt: new ljp(570, 440, 50, 60),
        szb: new ljp(622, 440, 210, 60),
        znm: new ljp(834, 440, 50, 60),
        dyv: new ljp(90, 530, 780, 50),
        oxl: {
            msx: new ljp(0, 10, 240, 90),
            bpc: new ljp(240, 10, 240, 90),
            cki: new ljp(480, 10, 240, 90),
            fav: new ljp(720, 10, 240, 90)
        },
        efy: {
            msx: new ljp(0, 10, 192, 90),
            sha: new ljp(192, 10, 192, 90),
            bpc: new ljp(384, 10, 192, 90),
            cki: new ljp(576, 10, 192, 90),
            fav: new ljp(768, 10, 192, 90)
        },
        cxu: [new ljp(190, 205, 200, 160), new ljp(570, 205, 200, 160)],
        qfn: [new ljp(90, 205, 200, 160), new ljp(380, 205, 200, 160), new ljp(670, 205, 200, 160)],
        ykx: [new ljp(190, 130, 200, 160), new ljp(570, 130, 200, 160), new ljp(190, 360, 200, 160), new ljp(570, 360, 200, 160)],
        lrw: [new ljp(90, 130, 200, 160), new ljp(380, 130, 200, 160), new ljp(670, 130, 200, 160), new ljp(90, 360, 200, 160), new ljp(380, 360, 200, 160), new ljp(670, 360, 200, 160)],
        hqd: {
            mov: 3,
            dni: -10,
            kqj: -1,
            fse: 6,
            fontSize: 36,
            lbt: 0,
        },
        qke: {
            mov: 3,
            dni: 10,
            kqj: -1,
            fse: 6,
            fontSize: 36,
            lbt: 0,
        },
        djx: {
            fontSize: 36,
            dni: 0,
            kqj: 0,
            fse: 10,
            mov: 0,
            lbt: 0
        },
        kls: {
            fontSize: 26,
            dkg: 5,
            mov: 26,
            lbt: 4,
            bsw: 40
        },
        rjc: {
            bos: 16,
            avl: 40,
            tfo: 0,
            pmd: 0,
            lbt: 2,
            dkg: 3
        },
        hva: {
            bos: 16,
            avl: 40,
            tfo: 0,
            pmd: 0,
            lbt: 2,
            dkg: 3
        },
        dmr: {
            aza: new ljp(50, 0, 360, 60),
            bkw: new ljp(0, 13, 30, 30),
            fontSize: 30,
            mov: 0,
            lbt: 2
        }
    };
    this.dws = {
        rlq: new ljp(660, 5, 310, 60),
        oxh: new ljp(60, 6, 240, 26),
        aza: new ljp(60, 34, 240, 20),
        toz: new ljp(5, 11, 50, 38),
        rib: new ljp(8, 2, 34, 34),
        bos: 16,
        avl: 12,
        yhn: 24
    };
    this.cmw = {
        rlq: new ljp(200, 135, 560, 330),
        bos: 26,
        fontSize: 20,
        upg: new ljp(515, 5, 40, 40),
        oxh: new ljp(40, 5, 480, 30),
        tpv: new ljp(20, 40, 520, 195),
        syp: new ljp(20, 265, 520, 54),
        qjl: {
            fontSize: 20
        }
    };
    this.kjy = {
        rlq: [new ljp(162, 0, 130, 46), new ljp(828, 0, 130, 46)],
        display: {
            cym: new ljp(6, 16, 118, 23),
            bos: 14,
            iwv: 20,
            tfo: -11,
            map: 10,
            dkg: 8,
            lbt: 3,
            mog: 0,
            ndk: 4
        },
        fdu: {
            rlq: new ljp(210, 110, 700, 300),
            cym: new ljp(),
            bos: 66,
            iwv: 150,
            tfo: -90,
            map: 60,
            dkg: 10,
            lbt: 0,
            mog: 0,
            ndk: 0
        },
        dhw: {
            rlq: new ljp(198, 60, 724, 369),
            rhr: new ljp(100, 53, 525, 50),
            cym: new ljp(186, 153, 332, 94),
            knm: 340,
            enf: 30,
            ikk: {
                _0: new ljp(2, 0, 90, 94),
                _1: new ljp(98, 0, 90, 94),
                _2: new ljp(194, 0, 90, 94),
                _3: new ljp(290, 0, 90, 94),
                _4: new ljp(386, 0, 90, 94),
                _5: new ljp(482, 0, 90, 94),
                _6: new ljp(578, 0, 90, 94),
                _7: new ljp(674, 0, 90, 94),
                _8: new ljp(770, 0, 90, 94),
                _9: new ljp(866, 0, 90, 94),
                _cm: new ljp(962, 0, 28, 94),
                _dt: new ljp(999, 0, 28, 94),
                _sp: new ljp(1036, 0, 28, 94)
            }
        }
    }
}
nzr.prototype = new uqn;

function xvf() {
    this.qnc = true;
    this.yef = true;
    this.uhx = true;
    this.xcb = {
        rlq: new ljp(0, 20, 800, 600),
        xtn: 0,
        rig: 0
    };
    this.mug = {
        rlq: new ljp(0, 20, 800, 600),
        xtn: -20,
        rig: 0
    };
    this.cei = {
        rlq: new ljp(40, 110, 136, 360),
        uhs: new ljp(40, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.hpy = {
        rlq: new ljp(186, 110, 136, 360),
        uhs: new ljp(186, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.pfp = {
        rlq: new ljp(332, 110, 136, 360),
        uhs: new ljp(332, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.fzm = {
        rlq: new ljp(478, 110, 136, 360),
        uhs: new ljp(478, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.jwr = {
        rlq: new ljp(624, 110, 136, 360),
        uhs: new ljp(624, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.xsu = {
        rlq: new ljp(0, 20, 800, 86),
        fontSize: 50,
        dni: 0,
        kqj: 6,
        dkg: 0,
        ruy: 2
    };
    this.fjy = {
        rlq: new ljp(0, 20, 800, 80),
        fontSize: 50,
        dni: 0,
        kqj: 8,
        dkg: 0,
        ruy: 2
    };
    this.zzz = {
        rlq: new ljp(4, 110, 0, 0),
        emc: [25, 65, 165, 265, 305],
        ple: 30,
        cyy: 30
    };
    this.pjr = {
        rlq: new ljp(766, 110, 0, 0),
        emc: [25, 65, 165, 265, 305],
        ple: 30,
        cyy: 30
    };
    this.maq = {
        rlq: new ljp(710, 35, 90, 450),
        oxh: new ljp(5, 5, 80, 15),
        hip: new ljp(55, 25, 30, 410),
        fontSize: 15,
        elg: 20,
        lbt: 2,
        mov: 5,
        xxp: 4,
        eua: 10,
        urs: 5
    };
    this.lhp = {
        rlq: new ljp(0, 35, 90, 450),
        oxh: new ljp(5, 5, 80, 15),
        hip: new ljp(5, 25, 30, 410),
        fontSize: 15,
        elg: 20,
        lbt: 2,
        mov: 5,
        xxp: 4,
        eua: 10,
        urs: 5
    };
    this.fye = {
        rlq: new ljp(0, 20, 800, 600),
        txw: new ljp(0, 540, 800, 60),
        eqr: new ljp(711, 544, 73, 53),
        tfv: new ljp(11, 544, 73, 53),
        dqu: new ljp(316, 544, 73, 53),
        rhf: new ljp(411, 544, 73, 53),
        qjl: {
            avl: 16,
            iwv: 0,
            dni: 0,
            pmd: 0,
            map: 0,
            fse: 6,
            mov: 8,
            lbt: 2
        }
    };
    this.ott = {
        rlq: new ljp(0, 20, 800, 600),
        txw: new ljp(0, 485, 800, 115),
        dvy: {
            rlq: new ljp(187, 489, 470, 40),
            fontSize: 18,
            kqj: 14,
            mov: 3,
            vjm: 2,
            fse: 6,
            lbt: 2
        },
        erp: {
            rlq: new ljp(331, 216, 137, 187),
            aza: new ljp(5, 8, 56, 34),
            cym: new ljp(37, 3, 98, 104),
            fev: new ljp(33, 110, 72, 76),
            bou: new ljp(10, 42, 45, 45),
            pvv: new ljp(5, 120, 126, 50),
            fontSize: 34,
            ftg: 50,
            dkg: 3,
            iay: 4
        },
        eps: {
            rlq: new ljp(380, 105, 380, 45),
            eit: 2
        },
        qjl: {
            avl: 18,
            iwv: 0,
            dni: 0,
            pmd: 0,
            map: 0,
            fse: 8,
            mov: 10,
            lbt: 2
        },
        display: {
            tfo: -12,
            pmd: 11,
            avl: 26,
            bos: 15,
            lbt: 2,
            pui: 3,
            tgb: 3,
            dts: 3,
            enh: 3
        },
        cri: {
            tfo: 0,
            pmd: 0,
            avl: 0,
            bos: 0,
            lbt: 0,
            pui: 0,
            tgb: 0,
            dts: 0,
            enh: 0
        },
        wku: new ljp(),
        lra: new ljp(),
        tzv: new ljp(415, 544, 110, 53),
        fzu: new ljp(275, 544, 110, 53),
        pvv: new ljp(689, 485, 106, 48),
        uji: new ljp(5, 485, 150, 48),
        yiv: new ljp(73, 315, 91, 96),
        dnh: new ljp(166, 315, 91, 96),
        vwq: new ljp(542, 315, 91, 96),
        jfs: new ljp(635, 315, 91, 96),
        gwt: new ljp(73, 218, 184, 92),
        cyp: new ljp(542, 218, 184, 92),
        eey: new ljp(65, 170, 200, 50),
        ooy: new ljp(509, 170, 250, 50),
        xyg: new ljp(534, 410, 200, 50)
    };
    this.yrs = {
        rlq: new ljp(0, 475, 800, 145),
        zpm: new ljp(0, 0, 800, 145),
        jka: new ljp(),
        dvy: {
            rlq: new ljp(187, 34, 470, 40),
            kqj: 14,
            fontSize: 18,
            mov: 3,
            vjm: 2,
            fse: 6,
            lbt: 2
        },
        win: {
            rlq: new ljp(45, 2, 710, 25),
            fontSize: 20,
            kqj: 4,
            mov: 3,
            vjm: 2,
            fse: 6,
            lbt: 0
        },
        uhj: {
            rlq: new ljp(187, 51, 470, 70),
            urs: 10,
            pmd: 2,
            fontSize: 24,
            lbt: 2,
            pui: 3,
            tgb: 3,
            dts: 3,
            enh: 3
        },
        gyf: {
            avl: 22,
            iwv: 0,
            dni: 0,
            pmd: 0,
            map: 0,
            mov: 10,
            fse: 8,
            lbt: 2
        },
        mni: {
            avl: 16,
            iwv: 0,
            dni: 0,
            pmd: 0,
            map: 0,
            mov: 8,
            fse: 8,
            lbt: 2
        },
        moz: {
            avl: 0,
            iwv: 0,
            dni: 0,
            mov: 0,
            fse: 0,
            lbt: 0,
            pmd: 0,
            map: 0
        },
        kcw: {
            avl: 16,
            iwv: 16,
            dni: 0,
            mov: 8,
            fse: 6,
            lbt: 2,
            pmd: 24,
            map: -24
        },
        display: {
            tfo: -12,
            pmd: 11,
            avl: 26,
            bos: 15,
            lbt: 2,
            pui: 3,
            tgb: 3,
            dts: 3,
            enh: 3
        },
        jrq: {
            tfo: 0,
            pmd: 0,
            avl: 0,
            bos: 0,
            lbt: 0,
            pui: 0,
            tgb: 0,
            dts: 0,
            enh: 0
        },
        cri: {
            rlq: new ljp(),
            tfo: 0,
            pmd: 0,
            avl: 0,
            bos: 0,
            lbt: 0,
            pui: 0,
            tgb: 0,
            dts: 0,
            enh: 0
        },
        wku: new ljp(),
        lra: new ljp(),
        woj: new ljp(5, 30, 150, 48),
        mpv: new ljp(689, 30, 106, 48),
        lnt: new ljp(),
        tzm: {
            xoy: new ljp(686, 89, 110, 53),
            uyi: new ljp(492, 89, 80, 53),
            mso: new ljp(382, 89, 80, 53),
            eqr: new ljp(272, 89, 80, 53),
            owq: new ljp(25, 89, 110, 53),
            xoe: new ljp()
        },
        qou: {
            xoy: new ljp(686, 89, 110, 53),
            uyi: new ljp(532, 89, 80, 53),
            emc: new ljp(432, 89, 80, 53),
            mso: new ljp(332, 89, 80, 53),
            eqr: new ljp(232, 89, 80, 53),
            owq: new ljp(25, 89, 110, 53),
            xoe: new ljp()
        },
        mex: {
            xoy: new ljp(686, 89, 110, 53),
            owq: new ljp(532, 89, 80, 53),
            uyi: new ljp(432, 89, 80, 53),
            mso: new ljp(332, 89, 80, 53),
            eqr: new ljp(232, 89, 80, 53),
            qyw: new ljp(40, 89, 80, 53),
            xoe: new ljp()
        },
        rrb: {
            xoy: new ljp(686, 89, 110, 53),
            owq: new ljp(562, 89, 80, 53),
            uyi: new ljp(472, 89, 80, 53),
            emc: new ljp(382, 89, 80, 53),
            mso: new ljp(292, 89, 80, 53),
            eqr: new ljp(202, 89, 80, 53),
            qyw: new ljp(40, 89, 80, 53),
            xoe: new ljp()
        },
        epu: {
            xoy: new ljp(686, 89, 110, 53),
            owq: new ljp(492, 89, 80, 53),
            uyi: new ljp(382, 89, 80, 53),
            mso: new ljp(272, 89, 80, 53),
            qyw: new ljp(40, 89, 80, 53),
            xoe: new ljp()
        },
        xwh: {
            xoy: new ljp(686, 89, 110, 53),
            owq: new ljp(532, 89, 80, 53),
            uyi: new ljp(432, 89, 80, 53),
            emc: new ljp(332, 89, 80, 53),
            mso: new ljp(232, 89, 80, 53),
            qyw: new ljp(40, 89, 80, 53),
            xoe: new ljp()
        },
        mps: {
            xoy: new ljp(686, 89, 110, 53),
            uyi: new ljp(492, 89, 80, 53),
            mso: new ljp(382, 89, 80, 53),
            eqr: new ljp(272, 89, 80, 53),
            owq: new ljp(25, 89, 110, 53),
            xoe: new ljp()
        },
        fqz: {
            xoy: new ljp(686, 89, 110, 53),
            uyi: new ljp(532, 89, 80, 53),
            emc: new ljp(432, 89, 80, 53),
            mso: new ljp(332, 89, 80, 53),
            eqr: new ljp(232, 89, 80, 53),
            owq: new ljp(25, 89, 110, 53),
            xoe: new ljp()
        },
        ocq: {
            xoy: new ljp(686, 89, 110, 53),
            owq: new ljp(25, 89, 110, 53),
            xoe: new ljp()
        },
        aqw: {
            xoy: new ljp(686, 89, 110, 53),
            owq: new ljp(25, 89, 110, 53),
            xoe: new ljp()
        },
        ndd: 60
    };
    this.ghd = {
        rlq: new ljp(40, 110, 720, 360),
        lineWidth: 4,
        lyw: 5,
        lbt: 1,
        hrb: 136,
        gtc: 120,
        fontSize: 40,
        bmv: 10,
        jgf: 5,
        cok: 100,
        nom: 96,
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
    this.whv = [
        [87, 290, 713, 290],
        [87, 170, 713, 170],
        [87, 410, 713, 410],
        [87, 170, 112, 170, 400, 410, 688, 170, 713, 170],
        [87, 410, 112, 410, 400, 170, 688, 410, 713, 410]
    ]
}
xvf.prototype = new bqn;

function sgr() {
    this.nft = true
}
sgr.prototype = new xvf;

function cac() {
    this.qnc = true;
    this.yef = true;
    this.uhx = true;
    this.xcb = {
        rlq: new ljp(0, 550, 800, 600),
        xtn: -14,
        rig: 0
    };
    this.mug = {
        rlq: new ljp(0, 550, 800, 600),
        xtn: -550,
        rig: 0
    };
    this.cei = {
        rlq: new ljp(40, 640, 136, 360),
        uhs: new ljp(40, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.hpy = {
        rlq: new ljp(186, 640, 136, 360),
        uhs: new ljp(186, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.pfp = {
        rlq: new ljp(332, 640, 136, 360),
        uhs: new ljp(332, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.fzm = {
        rlq: new ljp(478, 640, 136, 360),
        uhs: new ljp(478, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.jwr = {
        rlq: new ljp(624, 640, 136, 360),
        uhs: new ljp(624, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.xsu = {
        rlq: new ljp(0, 550, 800, 86),
        fontSize: 50,
        dni: 0,
        kqj: 6,
        dkg: 0,
        ruy: 2
    };
    this.fjy = {
        rlq: new ljp(0, 550, 800, 80),
        fontSize: 50,
        dni: 0,
        kqj: 8,
        dkg: 0,
        ruy: 2
    };
    this.zzz = {
        rlq: new ljp(4, 640, 0, 0),
        emc: [25, 65, 165, 265, 305],
        ple: 30,
        cyy: 30
    };
    this.pjr = {
        rlq: new ljp(766, 640, 0, 0),
        emc: [25, 65, 165, 265, 305],
        ple: 30,
        cyy: 30
    };
    this.maq = {
        rlq: new ljp(710, 565, 90, 450),
        oxh: new ljp(5, 5, 80, 15),
        hip: new ljp(55, 25, 30, 410),
        fontSize: 15,
        elg: 20,
        lbt: 2,
        mov: 5,
        xxp: 4,
        eua: 10,
        urs: 5
    };
    this.lhp = {
        rlq: new ljp(0, 565, 90, 450),
        oxh: new ljp(5, 5, 80, 15),
        hip: new ljp(5, 25, 30, 410),
        fontSize: 15,
        elg: 20,
        lbt: 2,
        mov: 5,
        xxp: 4,
        eua: 10,
        urs: 5
    };
    this.fye = {
        rlq: new ljp(0, 550, 800, 615),
        txw: new ljp(0, 540, 800, 75),
        eqr: new ljp(695, 544, 90, 68),
        tfv: new ljp(11, 544, 90, 68),
        dqu: new ljp(295, 544, 90, 68),
        rhf: new ljp(415, 544, 90, 68),
        qjl: {
            avl: 21,
            iwv: 0,
            dni: 0,
            pmd: 0,
            map: 0,
            fse: 8,
            mov: 10,
            lbt: 2
        }
    };
    this.ott = {
        rlq: new ljp(0, 550, 800, 615),
        txw: new ljp(0, 485, 800, 130),
        dvy: {
            rlq: new ljp(187, 489, 470, 40),
            fontSize: 18,
            kqj: 14,
            mov: 3,
            vjm: 2,
            fse: 6,
            lbt: 2
        },
        erp: {
            rlq: new ljp(331, 216, 137, 187),
            aza: new ljp(5, 8, 56, 34),
            cym: new ljp(37, 3, 98, 104),
            fev: new ljp(33, 110, 72, 76),
            bou: new ljp(10, 42, 45, 45),
            pvv: new ljp(5, 120, 126, 50),
            fontSize: 34,
            ftg: 50,
            dkg: 3,
            iay: 4
        },
        eps: {
            rlq: new ljp(380, 105, 380, 45),
            eit: 2
        },
        qjl: {
            avl: 23,
            iwv: 0,
            dni: 0,
            pmd: 0,
            map: 0,
            fse: 10,
            mov: 12,
            lbt: 2
        },
        display: {
            tfo: -12,
            pmd: 11,
            avl: 26,
            bos: 15,
            lbt: 2,
            pui: 3,
            tgb: 3,
            dts: 3,
            enh: 3
        },
        cri: {
            tfo: 0,
            pmd: 0,
            avl: 0,
            bos: 0,
            lbt: 0,
            pui: 0,
            tgb: 0,
            dts: 0,
            enh: 0
        },
        wku: new ljp(),
        lra: new ljp(),
        tzv: new ljp(415, 544, 120, 68),
        fzu: new ljp(265, 544, 120, 68),
        pvv: new ljp(689, 485, 106, 48),
        uji: new ljp(5, 485, 150, 48),
        yiv: new ljp(73, 315, 91, 96),
        dnh: new ljp(166, 315, 91, 96),
        vwq: new ljp(542, 315, 91, 96),
        jfs: new ljp(635, 315, 91, 96),
        gwt: new ljp(73, 218, 184, 92),
        cyp: new ljp(542, 218, 184, 92),
        eey: new ljp(65, 170, 200, 50),
        ooy: new ljp(509, 170, 250, 50),
        xyg: new ljp(534, 410, 200, 50)
    };
    this.yrs = {
        rlq: new ljp(0, 1005, 800, 160),
        zpm: new ljp(0, 0, 800, 160),
        jka: new ljp(),
        dvy: {
            rlq: new ljp(187, 34, 470, 40),
            kqj: 14,
            fontSize: 18,
            mov: 3,
            vjm: 2,
            fse: 6,
            lbt: 2
        },
        win: {
            rlq: new ljp(45, 2, 710, 25),
            fontSize: 20,
            kqj: 4,
            mov: 3,
            vjm: 2,
            fse: 6,
            lbt: 0
        },
        uhj: {
            rlq: new ljp(187, 58, 470, 70),
            urs: 10,
            pmd: 2,
            fontSize: 24,
            lbt: 2,
            pui: 3,
            tgb: 3,
            dts: 3,
            enh: 3
        },
        gyf: {
            avl: 28,
            iwv: 0,
            dni: 0,
            pmd: 0,
            map: 0,
            mov: 12,
            fse: 10,
            lbt: 2
        },
        mni: {
            avl: 21,
            iwv: 0,
            dni: 0,
            pmd: 0,
            map: 0,
            mov: 10,
            fse: 8,
            lbt: 2
        },
        moz: {
            avl: 0,
            iwv: 0,
            dni: 0,
            mov: 0,
            fse: 0,
            lbt: 0,
            pmd: 0,
            map: 0
        },
        kcw: {
            avl: 21,
            iwv: 21,
            dni: 0,
            mov: 8,
            fse: 6,
            lbt: 2,
            pmd: 30,
            map: -32
        },
        display: {
            tfo: -12,
            pmd: 11,
            avl: 26,
            bos: 15,
            lbt: 2,
            pui: 3,
            tgb: 3,
            dts: 3,
            enh: 3
        },
        jrq: {
            tfo: 0,
            pmd: 0,
            avl: 0,
            bos: 0,
            lbt: 0,
            pui: 0,
            tgb: 0,
            dts: 0,
            enh: 0
        },
        cri: {
            tfo: 0,
            pmd: 0,
            avl: 0,
            bos: 0,
            lbt: 0,
            pui: 0,
            tgb: 0,
            dts: 0,
            enh: 0
        },
        wku: new ljp(),
        lra: new ljp(),
        woj: new ljp(5, 30, 150, 48),
        mpv: new ljp(689, 30, 106, 48),
        lnt: new ljp(),
        tzm: {
            xoy: new ljp(675, 89, 120, 68),
            uyi: new ljp(486, 89, 100, 68),
            mso: new ljp(371, 89, 100, 68),
            eqr: new ljp(256, 89, 100, 68),
            owq: new ljp(20, 89, 120, 68),
            xoe: new ljp()
        },
        qou: {
            xoy: new ljp(675, 89, 120, 68),
            uyi: new ljp(536, 89, 100, 68),
            emc: new ljp(426, 89, 100, 68),
            mso: new ljp(316, 89, 100, 68),
            eqr: new ljp(206, 89, 100, 68),
            owq: new ljp(20, 89, 120, 68),
            xoe: new ljp()
        },
        mex: {
            xoy: new ljp(675, 89, 120, 68),
            owq: new ljp(536, 89, 100, 68),
            uyi: new ljp(426, 89, 100, 68),
            mso: new ljp(316, 89, 100, 68),
            eqr: new ljp(206, 89, 100, 68),
            qyw: new ljp(30, 89, 100, 68),
            xoe: new ljp()
        },
        rrb: {
            xoy: new ljp(678, 89, 120, 68),
            owq: new ljp(576, 89, 90, 68),
            uyi: new ljp(476, 89, 90, 68),
            emc: new ljp(376, 89, 90, 68),
            mso: new ljp(276, 89, 90, 68),
            eqr: new ljp(176, 89, 90, 68),
            qyw: new ljp(35, 89, 90, 68),
            xoe: new ljp()
        },
        epu: {
            xoy: new ljp(675, 89, 120, 68),
            owq: new ljp(486, 89, 100, 68),
            uyi: new ljp(371, 89, 100, 68),
            mso: new ljp(256, 89, 100, 68),
            qyw: new ljp(30, 89, 100, 68),
            xoe: new ljp()
        },
        xwh: {
            xoy: new ljp(675, 89, 120, 68),
            owq: new ljp(536, 89, 100, 68),
            uyi: new ljp(426, 89, 100, 68),
            emc: new ljp(316, 89, 100, 68),
            mso: new ljp(206, 89, 100, 68),
            qyw: new ljp(30, 89, 100, 68),
            xoe: new ljp()
        },
        mps: {
            xoy: new ljp(675, 89, 120, 68),
            uyi: new ljp(486, 89, 100, 68),
            mso: new ljp(371, 89, 100, 68),
            eqr: new ljp(256, 89, 100, 68),
            owq: new ljp(20, 89, 120, 68),
            xoe: new ljp()
        },
        fqz: {
            xoy: new ljp(675, 89, 120, 68),
            uyi: new ljp(536, 89, 100, 68),
            emc: new ljp(426, 89, 100, 68),
            mso: new ljp(316, 89, 100, 68),
            eqr: new ljp(206, 89, 100, 68),
            owq: new ljp(20, 89, 120, 68),
            xoe: new ljp()
        },
        ocq: {
            xoy: new ljp(675, 90, 120, 68),
            owq: new ljp(20, 90, 120, 68),
            xoe: new ljp()
        },
        aqw: {
            xoy: new ljp(675, 90, 120, 68),
            owq: new ljp(20, 90, 120, 68),
            xoe: new ljp()
        },
        ndd: 60
    };
    this.ghd = {
        rlq: new ljp(40, 640, 720, 360),
        lineWidth: 4,
        lyw: 5,
        lbt: 1,
        hrb: 136,
        gtc: 120,
        fontSize: 40,
        bmv: 10,
        jgf: 5,
        cok: 100,
        nom: 96,
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
    this.whv = [
        [87, 820, 713, 820],
        [87, 700, 713, 700],
        [87, 940, 713, 940],
        [87, 700, 112, 700, 400, 940, 688, 700, 713, 700],
        [87, 940, 112, 940, 400, 700, 688, 940, 713, 940]
    ];
    this.top = {
        rlq: new ljp(0, 20, 800, 520)
    }
}
cac.prototype = new dbz;

function vzh() {
    this.qnc = true;
    this.yef = true;
    this.uhx = true;
    this.xcb = {
        rlq: new ljp(5, 20, 800, 600),
        xtn: 0,
        rig: -10
    };
    this.mug = {
        rlq: new ljp(5, 20, 800, 600),
        xtn: -20,
        rig: -5
    };
    this.cei = {
        rlq: new ljp(45, 110, 136, 360),
        uhs: new ljp(40, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.hpy = {
        rlq: new ljp(191, 110, 136, 360),
        uhs: new ljp(186, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.pfp = {
        rlq: new ljp(337, 110, 136, 360),
        uhs: new ljp(332, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.fzm = {
        rlq: new ljp(483, 110, 136, 360),
        uhs: new ljp(478, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.jwr = {
        rlq: new ljp(629, 110, 136, 360),
        uhs: new ljp(624, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.xsu = {
        rlq: new ljp(5, 20, 800, 86),
        fontSize: 50,
        dni: 0,
        kqj: 6,
        dkg: 0,
        ruy: 2
    };
    this.fjy = {
        rlq: new ljp(5, 20, 800, 80),
        fontSize: 50,
        dni: 0,
        kqj: 8,
        dkg: 0,
        ruy: 2
    };
    this.zzz = {
        rlq: new ljp(9, 110, 0, 0),
        emc: [25, 65, 165, 265, 305],
        ple: 30,
        cyy: 30
    };
    this.pjr = {
        rlq: new ljp(771, 110, 0, 0),
        emc: [25, 65, 165, 265, 305],
        ple: 30,
        cyy: 30
    };
    this.maq = {
        rlq: new ljp(715, 35, 90, 450),
        oxh: new ljp(5, 5, 80, 15),
        hip: new ljp(55, 25, 30, 410),
        fontSize: 15,
        elg: 20,
        lbt: 2,
        mov: 5,
        xxp: 4,
        eua: 10,
        urs: 5
    };
    this.lhp = {
        rlq: new ljp(5, 35, 90, 450),
        oxh: new ljp(5, 5, 80, 15),
        hip: new ljp(5, 25, 30, 410),
        fontSize: 15,
        elg: 20,
        lbt: 2,
        mov: 5,
        xxp: 4,
        eua: 10,
        urs: 5
    };
    this.fye = {
        rlq: new ljp(5, 20, 800, 600),
        txw: new ljp(0, 540, 800, 60),
        eqr: new ljp(711, 544, 73, 53),
        tfv: new ljp(11, 544, 73, 53),
        dqu: new ljp(316, 544, 73, 53),
        rhf: new ljp(411, 544, 73, 53),
        qjl: {
            avl: 16,
            iwv: 0,
            dni: 0,
            pmd: 0,
            map: 0,
            fse: 6,
            mov: 8,
            lbt: 2
        }
    };
    this.ott = {
        rlq: new ljp(5, 20, 800, 600),
        txw: new ljp(0, 485, 800, 115),
        dvy: {
            rlq: new ljp(187, 489, 470, 40),
            fontSize: 18,
            kqj: 14,
            mov: 3,
            vjm: 2,
            fse: 6,
            lbt: 2
        },
        erp: {
            rlq: new ljp(331, 216, 137, 187),
            aza: new ljp(5, 8, 56, 34),
            cym: new ljp(37, 3, 98, 104),
            fev: new ljp(33, 110, 72, 76),
            bou: new ljp(10, 42, 45, 45),
            pvv: new ljp(5, 120, 126, 50),
            fontSize: 34,
            ftg: 50,
            dkg: 3,
            iay: 4
        },
        eps: {
            rlq: new ljp(380, 105, 380, 45),
            eit: 2
        },
        qjl: {
            avl: 18,
            iwv: 0,
            dni: 0,
            pmd: 0,
            map: 0,
            fse: 8,
            mov: 10,
            lbt: 2
        },
        display: {
            tfo: -12,
            pmd: 11,
            avl: 26,
            bos: 15,
            lbt: 2,
            pui: 3,
            tgb: 3,
            dts: 3,
            enh: 3
        },
        cri: {
            tfo: 0,
            pmd: 0,
            avl: 0,
            bos: 0,
            lbt: 0,
            pui: 0,
            tgb: 0,
            dts: 0,
            enh: 0
        },
        wku: new ljp(),
        lra: new ljp(),
        tzv: new ljp(415, 544, 110, 53),
        fzu: new ljp(275, 544, 110, 53),
        pvv: new ljp(689, 485, 106, 48),
        uji: new ljp(5, 485, 150, 48),
        yiv: new ljp(73, 315, 91, 96),
        dnh: new ljp(166, 315, 91, 96),
        vwq: new ljp(542, 315, 91, 96),
        jfs: new ljp(635, 315, 91, 96),
        gwt: new ljp(73, 218, 184, 92),
        cyp: new ljp(542, 218, 184, 92),
        eey: new ljp(65, 170, 200, 50),
        ooy: new ljp(509, 170, 250, 50),
        xyg: new ljp(534, 410, 200, 50)
    };
    this.yrs = {
        rlq: new ljp(5, 475, 800, 145),
        zpm: new ljp(0, 0, 800, 145),
        jka: new ljp(),
        dvy: {
            rlq: new ljp(187, 34, 470, 40),
            kqj: 14,
            fontSize: 18,
            mov: 3,
            vjm: 2,
            fse: 6,
            lbt: 2
        },
        win: {
            rlq: new ljp(45, 2, 710, 25),
            fontSize: 20,
            kqj: 4,
            mov: 3,
            vjm: 2,
            fse: 6,
            lbt: 0
        },
        uhj: {
            rlq: new ljp(187, 51, 470, 70),
            urs: 10,
            pmd: 2,
            fontSize: 24,
            lbt: 2,
            pui: 3,
            tgb: 3,
            dts: 3,
            enh: 3
        },
        gyf: {
            avl: 22,
            iwv: 0,
            dni: 0,
            pmd: 0,
            map: 0,
            mov: 10,
            fse: 8,
            lbt: 2
        },
        mni: {
            avl: 16,
            iwv: 0,
            dni: 0,
            pmd: 0,
            map: 0,
            mov: 8,
            fse: 6,
            lbt: 2
        },
        moz: {
            avl: 0,
            iwv: 0,
            dni: 0,
            mov: 0,
            fse: 0,
            lbt: 0,
            pmd: 0,
            map: 0
        },
        kcw: {
            avl: 16,
            iwv: 16,
            dni: 0,
            mov: 8,
            fse: 6,
            lbt: 2,
            pmd: 24,
            map: -24
        },
        display: {
            tfo: -12,
            pmd: 11,
            avl: 26,
            bos: 15,
            lbt: 2,
            pui: 3,
            tgb: 3,
            dts: 3,
            enh: 3
        },
        jrq: {
            tfo: 0,
            pmd: 0,
            avl: 0,
            bos: 0,
            lbt: 0,
            pui: 0,
            tgb: 0,
            dts: 0,
            enh: 0
        },
        cri: {
            rlq: new ljp(),
            tfo: 0,
            pmd: 0,
            avl: 0,
            bos: 0,
            lbt: 0,
            pui: 0,
            tgb: 0,
            dts: 0,
            enh: 0
        },
        wku: new ljp(),
        lra: new ljp(),
        woj: new ljp(5, 30, 150, 48),
        mpv: new ljp(689, 30, 106, 48),
        lnt: new ljp(),
        tzm: {
            xoy: new ljp(686, 89, 110, 53),
            uyi: new ljp(492, 89, 80, 53),
            mso: new ljp(382, 89, 80, 53),
            eqr: new ljp(272, 89, 80, 53),
            owq: new ljp(25, 89, 110, 53),
            xoe: new ljp()
        },
        qou: {
            xoy: new ljp(686, 89, 110, 53),
            uyi: new ljp(532, 89, 80, 53),
            emc: new ljp(432, 89, 80, 53),
            mso: new ljp(332, 89, 80, 53),
            eqr: new ljp(232, 89, 80, 53),
            owq: new ljp(25, 89, 110, 53),
            xoe: new ljp()
        },
        mex: {
            xoy: new ljp(686, 89, 110, 53),
            owq: new ljp(532, 89, 80, 53),
            uyi: new ljp(432, 89, 80, 53),
            mso: new ljp(332, 89, 80, 53),
            eqr: new ljp(232, 89, 80, 53),
            qyw: new ljp(40, 89, 80, 53),
            xoe: new ljp()
        },
        rrb: {
            xoy: new ljp(686, 89, 110, 53),
            owq: new ljp(562, 89, 80, 53),
            uyi: new ljp(472, 89, 80, 53),
            emc: new ljp(382, 89, 80, 53),
            mso: new ljp(292, 89, 80, 53),
            eqr: new ljp(202, 89, 80, 53),
            qyw: new ljp(40, 89, 80, 53),
            xoe: new ljp()
        },
        epu: {
            xoy: new ljp(686, 89, 110, 53),
            owq: new ljp(492, 89, 80, 53),
            uyi: new ljp(382, 89, 80, 53),
            mso: new ljp(272, 89, 80, 53),
            qyw: new ljp(40, 89, 80, 53),
            xoe: new ljp()
        },
        xwh: {
            xoy: new ljp(686, 89, 110, 53),
            owq: new ljp(532, 89, 80, 53),
            uyi: new ljp(432, 89, 80, 53),
            emc: new ljp(332, 89, 80, 53),
            mso: new ljp(232, 89, 80, 53),
            qyw: new ljp(40, 89, 80, 53),
            xoe: new ljp()
        },
        mps: {
            xoy: new ljp(686, 89, 110, 53),
            uyi: new ljp(492, 89, 80, 53),
            mso: new ljp(382, 89, 80, 53),
            eqr: new ljp(272, 89, 80, 53),
            owq: new ljp(25, 89, 110, 53),
            xoe: new ljp()
        },
        fqz: {
            xoy: new ljp(686, 89, 110, 53),
            uyi: new ljp(532, 89, 80, 53),
            emc: new ljp(432, 89, 80, 53),
            mso: new ljp(332, 89, 80, 53),
            eqr: new ljp(232, 89, 80, 53),
            owq: new ljp(25, 89, 110, 53),
            xoe: new ljp()
        },
        ocq: {
            xoy: new ljp(686, 89, 110, 53),
            owq: new ljp(25, 89, 110, 53),
            xoe: new ljp()
        },
        aqw: {
            xoy: new ljp(686, 89, 110, 53),
            owq: new ljp(25, 89, 110, 53),
            xoe: new ljp()
        },
        ndd: 60
    };
    this.ghd = {
        rlq: new ljp(45, 110, 720, 360),
        lineWidth: 4,
        lyw: 5,
        lbt: 1,
        hrb: 136,
        gtc: 120,
        fontSize: 40,
        bmv: 10,
        jgf: 5,
        cok: 100,
        nom: 96,
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
    this.whv = [
        [92, 290, 718, 290],
        [92, 170, 718, 170],
        [92, 410, 718, 410],
        [92, 170, 117, 170, 405, 410, 693, 170, 718, 170],
        [92, 410, 117, 410, 405, 170, 693, 410, 718, 410]
    ]
}
vzh.prototype = new llz;

function kvc() {
    this.nft = true
}
kvc.prototype = new vzh;

function rtu() {
    this.qnc = false;
    this.yef = true;
    this.uhx = true;
    this.xcb = {
        rlq: new ljp(0, 0, 800, 600),
        xtn: 0,
        rig: -160
    };
    this.mug = {
        rlq: new ljp(-160, 0, 1120, 600),
        rig: 160,
        xtn: 0
    };
    this.cei = {
        rlq: new ljp(40, 90, 136, 360),
        uhs: new ljp(40, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.hpy = {
        rlq: new ljp(186, 90, 136, 360),
        uhs: new ljp(186, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.pfp = {
        rlq: new ljp(332, 90, 136, 360),
        uhs: new ljp(332, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.fzm = {
        rlq: new ljp(478, 90, 136, 360),
        uhs: new ljp(478, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.jwr = {
        rlq: new ljp(624, 90, 136, 360),
        uhs: new ljp(624, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.xsu = {
        rlq: new ljp(0, 0, 800, 86),
        fontSize: 50,
        dni: 0,
        kqj: 6,
        dkg: 0,
        ruy: 2
    };
    this.fjy = {
        rlq: new ljp(0, 0, 800, 80),
        fontSize: 50,
        dni: 0,
        kqj: 8,
        dkg: 0,
        ruy: 2
    };
    this.zzz = {
        rlq: new ljp(4, 90, 0, 0),
        emc: [25, 65, 165, 265, 305],
        ple: 30,
        cyy: 30
    };
    this.pjr = {
        rlq: new ljp(766, 90, 0, 0),
        emc: [25, 65, 165, 265, 305],
        ple: 30,
        cyy: 30
    };
    this.maq = {};
    this.lhp = {};
    this.fye = {
        rlq: new ljp(0, 0, 960, 600),
        txw: new ljp(800, 0, 160, 600),
        eqr: new ljp(820, 400, 120, 120),
        tfv: new ljp(),
        dqu: new ljp(820, 50, 120, 120),
        rhf: new ljp(820, 225, 120, 120),
        qjl: {
            avl: 0,
            iwv: 0,
            dni: 0,
            pmd: 0,
            map: 0,
            mov: 0,
            fse: 16,
            lbt: 4
        }
    };
    this.ott = {
        rlq: new ljp(0, 0, 960, 600),
        txw: new ljp(800, 0, 160, 600),
        dvy: {
            rlq: new ljp(225, 520, 390, 70),
            fontSize: 20,
            kqj: 14,
            mov: 3,
            vjm: 2,
            fse: 6,
            lbt: 2
        },
        erp: {
            rlq: new ljp(331, 216, 137, 187),
            aza: new ljp(5, 8, 56, 34),
            cym: new ljp(37, 3, 98, 104),
            fev: new ljp(33, 110, 72, 76),
            bou: new ljp(10, 42, 45, 45),
            pvv: new ljp(5, 120, 126, 50),
            fontSize: 34,
            ftg: 50,
            dkg: 3,
            iay: 4
        },
        eps: {
            rlq: new ljp(380, 105, 380, 45),
            eit: 2
        },
        qjl: {
            avl: 24,
            iwv: 0,
            dni: 0,
            pmd: 0,
            map: 0,
            fse: 10,
            mov: 0,
            lbt: 4
        },
        display: {
            tfo: -18,
            pmd: 16,
            avl: 32,
            bos: 18,
            lbt: 3,
            pui: 3,
            tgb: 3,
            dts: 3,
            enh: 3
        },
        cri: {
            tfo: 0,
            pmd: 0,
            avl: 16,
            bos: 0,
            lbt: 2,
            pui: 0,
            tgb: 0,
            dts: 0,
            enh: 0
        },
        wku: new ljp(800, 0, 160, 22),
        lra: new ljp(800, 22, 160, 22),
        tzv: new ljp(820, 325, 120, 120),
        fzu: new ljp(820, 125, 120, 120),
        pvv: new ljp(655, 520, 140, 70),
        uji: new ljp(5, 520, 180, 70),
        yiv: new ljp(73, 315, 91, 96),
        dnh: new ljp(166, 315, 91, 96),
        vwq: new ljp(542, 315, 91, 96),
        jfs: new ljp(635, 315, 91, 96),
        gwt: new ljp(73, 218, 184, 92),
        cyp: new ljp(542, 218, 184, 92),
        eey: new ljp(65, 170, 200, 50),
        ooy: new ljp(509, 170, 250, 50),
        xyg: new ljp(534, 410, 200, 50)
    };
    this.yrs = {
        rlq: new ljp(0, 0, 960, 600),
        zpm: new ljp(0, 455, 800, 145),
        jka: new ljp(800, 0, 160, 600),
        dvy: {
            rlq: new ljp(225, 520, 390, 70),
            kqj: 14,
            fontSize: 24,
            mov: 3,
            vjm: 2,
            fse: 6,
            lbt: 2
        },
        win: {
            rlq: new ljp(45, 458, 710, 25),
            fontSize: 20,
            kqj: 4,
            mov: 3,
            vjm: 2,
            fse: 6,
            lbt: 0
        },
        uhj: {
            rlq: new ljp(225, 520, 390, 70),
            urs: 10,
            pmd: 2,
            fontSize: 20,
            lbt: 2,
            pui: 3,
            tgb: 3,
            dts: 3,
            enh: 3
        },
        gyf: {
            avl: 0,
            iwv: 0,
            dni: 0,
            pmd: 0,
            map: 0,
            mov: 0,
            fse: 10,
            lbt: 4
        },
        mni: {
            avl: 0,
            iwv: 20,
            dni: 0,
            pmd: 0,
            map: -30,
            mov: 0,
            fse: 10,
            lbt: 4
        },
        kcw: {
            avl: 0,
            iwv: 24,
            dni: 0,
            mov: 0,
            fse: 10,
            lbt: 6,
            pmd: 0,
            map: -40
        },
        moz: {
            avl: 24,
            iwv: 0,
            dni: 0,
            mov: 10,
            fse: 0,
            lbt: 4,
            pmd: -2,
            map: 0
        },
        xti: {
            mov: 6,
            dni: 0,
            kqj: -1,
            fse: 6,
            fontSize: 36,
            lbt: 3
        },
        display: {
            tfo: -18,
            pmd: 16,
            avl: 32,
            bos: 18,
            lbt: 3,
            pui: 3,
            tgb: 3,
            dts: 3,
            enh: 3
        },
        jrq: {
            tfo: 0,
            pmd: -40,
            avl: 36,
            bos: 0,
            lbt: 3,
            pui: 10,
            tgb: 10,
            dts: 0,
            enh: 0
        },
        cri: {
            tfo: 0,
            pmd: 0,
            avl: 16,
            bos: 0,
            lbt: 2,
            pui: 0,
            tgb: 0,
            dts: 0,
            enh: 0
        },
        wku: new ljp(800, 0, 160, 22),
        lra: new ljp(800, 22, 160, 22),
        woj: new ljp(5, 520, 180, 70),
        mpv: new ljp(655, 520, 140, 70),
        lnt: new ljp(660, 400, 130, 120),
        ejg: {
            xoy: new ljp(805, 210, 150, 150),
            uyi: new ljp(655, 495, 140, 30),
            emc: new ljp(),
            mso: new ljp(),
            eqr: new ljp(820, 400, 120, 120),
            owq: new ljp(),
            xoe: new ljp(820, 50, 120, 120)
        },
        ewd: {
            xoy: new ljp(815, 260, 140, 140),
            uyi: new ljp(655, 495, 140, 30),
            emc: new ljp(),
            mso: new ljp(),
            eqr: new ljp(865, 50, 80, 80),
            owq: new ljp(840, 140, 110, 110),
            xoe: new ljp(840, 410, 110, 110)
        },
        ndd: 60
    };
    this.ghd = {
        rlq: new ljp(40, 90, 720, 360),
        lineWidth: 4,
        lyw: 5,
        lbt: 1,
        hrb: 136,
        gtc: 120,
        fontSize: 40,
        bmv: 10,
        jgf: 5,
        cok: 100,
        nom: 96,
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
    this.whv = [
        [87, 270, 713, 270],
        [87, 150, 713, 150],
        [87, 390, 713, 390],
        [87, 150, 112, 150, 400, 390, 688, 150, 713, 150],
        [87, 390, 112, 390, 400, 150, 688, 390, 713, 390]
    ]
}
rtu.prototype = new zsk;

function fwr() {
    this.qnc = false;
    this.yef = true;
    this.uhx = true;
    this.xcb = {
        rlq: new ljp(160, 0, 800, 600),
        xtn: 0,
        rig: 0
    };
    this.mug = {
        rlq: new ljp(0, 0, 1120, 600),
        rig: 0,
        xtn: 0
    };
    this.cei = {
        rlq: new ljp(200, 90, 136, 360),
        uhs: new ljp(40, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.hpy = {
        rlq: new ljp(346, 90, 136, 360),
        uhs: new ljp(186, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.pfp = {
        rlq: new ljp(492, 90, 136, 360),
        uhs: new ljp(332, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.fzm = {
        rlq: new ljp(638, 90, 136, 360),
        uhs: new ljp(478, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.jwr = {
        rlq: new ljp(784, 90, 136, 360),
        uhs: new ljp(624, 90, 136, 360),
        yik: 30,
        iig: 30
    };
    this.xsu = {
        rlq: new ljp(160, 0, 800, 86),
        fontSize: 50,
        dni: 0,
        kqj: 6,
        dkg: 0,
        ruy: 2
    };
    this.fjy = {
        rlq: new ljp(160, 0, 800, 80),
        fontSize: 50,
        dni: 0,
        kqj: 8,
        dkg: 0,
        ruy: 2
    };
    this.zzz = {
        rlq: new ljp(164, 90, 0, 0),
        emc: [25, 65, 165, 265, 305],
        ple: 30,
        cyy: 30
    };
    this.pjr = {
        rlq: new ljp(926, 90, 0, 0),
        emc: [25, 65, 165, 265, 305],
        ple: 30,
        cyy: 30
    };
    this.maq = {};
    this.lhp = {};
    this.fye = {
        rlq: new ljp(0, 0, 960, 600),
        txw: new ljp(0, 0, 160, 600),
        eqr: new ljp(20, 400, 120, 120),
        tfv: new ljp(),
        dqu: new ljp(20, 50, 120, 120),
        rhf: new ljp(20, 225, 120, 120),
        qjl: {
            avl: 0,
            iwv: 0,
            dni: 0,
            pmd: 0,
            map: 0,
            mov: 0,
            fse: 16,
            lbt: 4
        }
    };
    this.ott = {
        rlq: new ljp(0, 0, 960, 600),
        txw: new ljp(0, 0, 160, 600),
        dvy: {
            rlq: new ljp(385, 520, 390, 70),
            fontSize: 20,
            kqj: 14,
            mov: 3,
            vjm: 2,
            fse: 6,
            lbt: 2
        },
        erp: {
            rlq: new ljp(491, 216, 137, 187),
            aza: new ljp(5, 8, 56, 34),
            cym: new ljp(37, 3, 98, 104),
            fev: new ljp(33, 110, 72, 76),
            bou: new ljp(10, 42, 45, 45),
            pvv: new ljp(5, 120, 126, 50),
            fontSize: 34,
            ftg: 50,
            dkg: 3,
            iay: 4
        },
        eps: {
            rlq: new ljp(540, 105, 380, 45),
            eit: 2
        },
        qjl: {
            avl: 24,
            iwv: 0,
            dni: 0,
            pmd: 0,
            map: 0,
            fse: 10,
            mov: 0,
            lbt: 4
        },
        display: {
            tfo: -18,
            pmd: 16,
            avl: 32,
            bos: 18,
            lbt: 3,
            pui: 3,
            tgb: 3,
            dts: 3,
            enh: 3
        },
        cri: {
            tfo: 0,
            pmd: 0,
            avl: 16,
            bos: 0,
            lbt: 2,
            pui: 0,
            tgb: 0,
            dts: 0,
            enh: 0
        },
        wku: new ljp(0, 0, 160, 22),
        lra: new ljp(0, 22, 160, 22),
        tzv: new ljp(20, 325, 120, 120),
        fzu: new ljp(20, 125, 120, 120),
        pvv: new ljp(815, 520, 140, 70),
        uji: new ljp(165, 520, 180, 70),
        yiv: new ljp(233, 315, 91, 96),
        dnh: new ljp(326, 315, 91, 96),
        vwq: new ljp(702, 315, 91, 96),
        jfs: new ljp(795, 315, 91, 96),
        gwt: new ljp(233, 218, 184, 92),
        cyp: new ljp(702, 218, 184, 92),
        eey: new ljp(225, 170, 200, 50),
        ooy: new ljp(669, 170, 250, 50),
        xyg: new ljp(694, 410, 200, 50)
    };
    this.yrs = {
        rlq: new ljp(0, 0, 960, 600),
        zpm: new ljp(160, 455, 800, 145),
        jka: new ljp(0, 0, 160, 600),
        dvy: {
            rlq: new ljp(385, 520, 390, 70),
            kqj: 14,
            fontSize: 24,
            mov: 3,
            vjm: 2,
            fse: 6,
            lbt: 2
        },
        win: {
            rlq: new ljp(205, 458, 710, 25),
            fontSize: 20,
            kqj: 4,
            mov: 3,
            vjm: 2,
            fse: 6,
            lbt: 0
        },
        uhj: {
            rlq: new ljp(385, 520, 390, 70),
            urs: 10,
            pmd: 2,
            fontSize: 20,
            lbt: 2,
            pui: 3,
            tgb: 3,
            dts: 3,
            enh: 3
        },
        gyf: {
            avl: 0,
            iwv: 0,
            dni: 0,
            pmd: 0,
            map: 0,
            mov: 0,
            fse: 10,
            lbt: 4
        },
        mni: {
            avl: 0,
            iwv: 20,
            dni: 0,
            pmd: 0,
            map: -30,
            mov: 0,
            fse: 10,
            lbt: 4
        },
        kcw: {
            avl: 0,
            iwv: 24,
            dni: 0,
            mov: 0,
            fse: 10,
            lbt: 6,
            pmd: 0,
            map: -40
        },
        moz: {
            avl: 24,
            iwv: 0,
            dni: 0,
            mov: 10,
            fse: 0,
            lbt: 4,
            pmd: -2,
            map: 0
        },
        xti: {
            mov: 6,
            dni: 0,
            kqj: -1,
            fse: 6,
            fontSize: 36,
            lbt: 3
        },
        display: {
            tfo: -18,
            pmd: 16,
            avl: 32,
            bos: 18,
            lbt: 3,
            pui: 3,
            tgb: 3,
            dts: 3,
            enh: 3
        },
        jrq: {
            tfo: 0,
            pmd: -40,
            avl: 36,
            bos: 0,
            lbt: 3,
            pui: 10,
            tgb: 10,
            dts: 0,
            enh: 0
        },
        cri: {
            tfo: 0,
            pmd: 0,
            avl: 16,
            bos: 0,
            lbt: 2,
            pui: 0,
            tgb: 0,
            dts: 0,
            enh: 0
        },
        wku: new ljp(0, 0, 160, 22),
        lra: new ljp(0, 22, 160, 22),
        woj: new ljp(165, 520, 180, 70),
        mpv: new ljp(815, 520, 140, 70),
        lnt: new ljp(820, 400, 130, 120),
        ejg: {
            xoy: new ljp(5, 210, 150, 150),
            uyi: new ljp(815, 495, 140, 30),
            emc: new ljp(),
            mso: new ljp(),
            eqr: new ljp(20, 400, 120, 120),
            owq: new ljp(),
            xoe: new ljp(20, 50, 120, 120)
        },
        ewd: {
            xoy: new ljp(5, 260, 140, 140),
            uyi: new ljp(815, 495, 140, 30),
            emc: new ljp(),
            mso: new ljp(),
            eqr: new ljp(15, 50, 80, 80),
            owq: new ljp(10, 140, 110, 110),
            xoe: new ljp(10, 410, 110, 110)
        },
        ndd: 60
    };
    this.ghd = {
        rlq: new ljp(200, 90, 720, 360),
        lineWidth: 4,
        lyw: 5,
        lbt: 1,
        hrb: 136,
        gtc: 120,
        fontSize: 40,
        bmv: 10,
        jgf: 5,
        cok: 100,
        nom: 96,
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
    this.whv = [
        [247, 270, 873, 270],
        [247, 150, 873, 150],
        [247, 390, 873, 390],
        [247, 150, 272, 150, 560, 390, 848, 150, 873, 150],
        [247, 390, 272, 390, 560, 150, 848, 390, 873, 390]
    ]
}
fwr.prototype = new nzr;

function ged() {
    this.yrs.win.rlq = new ljp(45, 1, 710, 24);
    this.yrs.win.kqj = 3;
    this.ott.eps.rlq = new ljp(380, 115, 380, 45);
    this.xsu.rlq = new ljp(0, 20, 800, 80);
    this.xsu.fontSize = 60;
    this.xsu.kqj = 2;
    this.zzz = {
        rlq: new ljp(2, 108, 0, 0),
        emc: [10, 45, 80, 115, 150, 185, 220, 255, 290, 325],
        ple: 30,
        cyy: 30
    };
    this.pjr = {
        rlq: new ljp(768, 108, 0, 0),
        emc: [10, 45, 80, 115, 150, 185, 220, 255, 290, 325],
        ple: 30,
        cyy: 30
    };
    this.whv = [
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
    this.fye.cfr = {
        rlq: new ljp(0, 0, 800, 600),
        fontSize: 16,
        qar: 30,
        wbp: 22,
        bos: 40,
        zcf: 12,
        lineWidth: 1,
        dyv: new ljp(20, 510, 760, 30),
        oxh: new ljp(),
        pvv: [new ljp(350, 302, 170, 124), new ljp(110, 152, 110, 88), new ljp(640, 152, 110, 88), new ljp(90, 395, 110, 90), new ljp(665, 395, 110, 90)]
    };
    this.fye.win = {
        rlq: new ljp(0, 0, 800, 600),
        fontSize: 20,
        bos: 40,
        lineWidth: 1,
        oxh: new ljp(),
        aza: [new ljp(10, 450, 780, 30)]
    };
    this.fye.yte = {
        rlq: new ljp(0, 0, 800, 600),
        fontSize: 20,
        bos: 40,
        lineWidth: 1,
        oxh: new ljp(),
        aza: [new ljp(400, 230, 350, 110)]
    }
}
ged.prototype = new xvf;

function lbk() {
    this.nft = true
}
lbk.prototype = new ged;

function ezk() {
    this.ott.eps.rlq = new ljp(380, 115, 380, 45);
    this.xsu.rlq = new ljp(0, 550, 800, 80);
    this.xsu.fontSize = 60;
    this.xsu.kqj = 2;
    this.zzz = {
        rlq: new ljp(2, 638, 0, 0),
        emc: [10, 45, 80, 115, 150, 185, 220, 255, 290, 325],
        ple: 30,
        cyy: 30
    };
    this.pjr = {
        rlq: new ljp(768, 638, 0, 0),
        emc: [10, 45, 80, 115, 150, 185, 220, 255, 290, 325],
        ple: 30,
        cyy: 30
    };
    this.whv = [
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
    this.fye.cfr = {
        rlq: new ljp(0, 0, 800, 615),
        fontSize: 16,
        qar: 30,
        wbp: 22,
        bos: 40,
        zcf: 12,
        lineWidth: 1,
        dyv: new ljp(20, 510, 760, 30),
        oxh: new ljp(),
        pvv: [new ljp(350, 302, 170, 124), new ljp(110, 152, 110, 88), new ljp(640, 152, 110, 88), new ljp(90, 395, 110, 90), new ljp(665, 395, 110, 90)]
    };
    this.fye.win = {
        rlq: new ljp(0, 0, 800, 615),
        fontSize: 20,
        bos: 40,
        lineWidth: 1,
        oxh: new ljp(),
        aza: [new ljp(10, 450, 780, 30)]
    };
    this.fye.yte = {
        rlq: new ljp(0, 0, 800, 615),
        fontSize: 20,
        bos: 40,
        lineWidth: 1,
        oxh: new ljp(),
        aza: [new ljp(400, 230, 350, 110)]
    };
    this.top.cfr = {
        rlq: new ljp(0, 0, 800, 520),
        fontSize: 14,
        qar: 28,
        wbp: 22,
        bos: 40,
        zcf: 12,
        lineWidth: 1,
        dyv: new ljp(20, 488, 760, 30),
        oxh: new ljp(),
        aza: [],
        pvv: [new ljp(350, 280, 170, 106), new ljp(110, 148, 110, 76), new ljp(640, 148, 110, 76), new ljp(90, 358, 110, 76), new ljp(665, 358, 110, 76)]
    }
}
ezk.prototype = new cac;

function you() {
    this.yrs.win.rlq = new ljp(45, 1, 710, 24);
    this.yrs.win.kqj = 3;
    this.ott.eps.rlq = new ljp(380, 115, 380, 45);
    this.xsu.rlq = new ljp(5, 20, 800, 80);
    this.xsu.fontSize = 60;
    this.xsu.kqj = 2;
    this.zzz = {
        rlq: new ljp(7, 108, 0, 0),
        emc: [10, 45, 80, 115, 150, 185, 220, 255, 290, 325],
        ple: 30,
        cyy: 30
    };
    this.pjr = {
        rlq: new ljp(773, 108, 0, 0),
        emc: [10, 45, 80, 115, 150, 185, 220, 255, 290, 325],
        ple: 30,
        cyy: 30
    };
    this.whv = [
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
    this.fye.cfr = {
        rlq: new ljp(0, 0, 800, 600),
        fontSize: 16,
        qar: 30,
        wbp: 22,
        bos: 40,
        zcf: 12,
        lineWidth: 1,
        dyv: new ljp(20, 512, 760, 30),
        oxh: new ljp(),
        pvv: [new ljp(350, 302, 170, 124), new ljp(110, 152, 110, 88), new ljp(640, 152, 110, 88), new ljp(90, 395, 110, 90), new ljp(665, 395, 110, 90)]
    };
    this.fye.win = {
        rlq: new ljp(0, 0, 800, 600),
        fontSize: 20,
        bos: 40,
        lineWidth: 1,
        oxh: new ljp(),
        aza: [new ljp(10, 450, 780, 30)]
    };
    this.fye.yte = {
        rlq: new ljp(0, 0, 800, 600),
        fontSize: 20,
        bos: 40,
        lineWidth: 1,
        oxh: new ljp(),
        aza: [new ljp(400, 230, 350, 110)]
    }
}
you.prototype = new vzh;

function xak() {
    this.nft = true
}
xak.prototype = new you;

function doa() {
    this.yrs.win.rlq = new ljp(45, 456, 710, 24);
    this.yrs.win.kqj = 3;
    this.ott.eps.rlq = new ljp(380, 115, 380, 45);
    this.ott.xyg = new ljp(534, 410, 200, 40);
    this.xsu.rlq = new ljp(0, 0, 800, 80);
    this.xsu.fontSize = 60;
    this.xsu.kqj = 2;
    this.zzz = {
        rlq: new ljp(2, 88, 0, 0),
        emc: [10, 45, 80, 115, 150, 185, 220, 255, 290, 325],
        ple: 30,
        cyy: 30
    };
    this.pjr = {
        rlq: new ljp(768, 88, 0, 0),
        emc: [10, 45, 80, 115, 150, 185, 220, 255, 290, 325],
        ple: 30,
        cyy: 30
    };
    this.whv = [
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
    this.fye.cfr = {
        rlq: new ljp(0, 0, 800, 600),
        fontSize: 16,
        qar: 30,
        wbp: 22,
        bos: 40,
        zcf: 14,
        lineWidth: 1,
        dyv: new ljp(0, 530, 800, 40),
        oxh: new ljp(),
        pvv: [new ljp(350, 302, 170, 124), new ljp(110, 152, 110, 88), new ljp(640, 152, 110, 88), new ljp(90, 395, 110, 90), new ljp(665, 395, 110, 90)]
    };
    this.fye.win = {
        rlq: new ljp(0, 0, 800, 600),
        fontSize: 20,
        bos: 40,
        lineWidth: 1,
        oxh: new ljp(),
        aza: [new ljp(10, 450, 780, 30)]
    };
    this.fye.yte = {
        rlq: new ljp(0, 0, 800, 600),
        fontSize: 20,
        bos: 40,
        lineWidth: 1,
        oxh: new ljp(),
        aza: [new ljp(400, 230, 350, 110)]
    }
}
doa.prototype = new rtu;

function axn() {
    this.yrs.win.rlq = new ljp(205, 456, 710, 24);
    this.yrs.win.kqj = 3;
    this.ott.eps.rlq = new ljp(540, 115, 380, 45);
    this.ott.xyg = new ljp(694, 410, 200, 40);
    this.xsu.rlq = new ljp(160, 0, 800, 80);
    this.xsu.fontSize = 60;
    this.xsu.kqj = 2;
    this.zzz = {
        rlq: new ljp(162, 88, 0, 0),
        emc: [10, 45, 80, 115, 150, 185, 220, 255, 290, 325],
        ple: 30,
        cyy: 30
    };
    this.pjr = {
        rlq: new ljp(928, 88, 0, 0),
        emc: [10, 45, 80, 115, 150, 185, 220, 255, 290, 325],
        ple: 30,
        cyy: 30
    };
    this.whv = [
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
    this.fye.cfr = {
        rlq: new ljp(160, 0, 800, 600),
        fontSize: 16,
        qar: 30,
        wbp: 22,
        bos: 40,
        zcf: 14,
        lineWidth: 1,
        dyv: new ljp(0, 530, 800, 40),
        oxh: new ljp(),
        pvv: [new ljp(350, 302, 170, 124), new ljp(110, 152, 110, 88), new ljp(640, 152, 110, 88), new ljp(90, 395, 110, 90), new ljp(665, 395, 110, 90)]
    };
    this.fye.win = {
        rlq: new ljp(160, 0, 800, 600),
        fontSize: 20,
        bos: 40,
        lineWidth: 1,
        oxh: new ljp(),
        aza: [new ljp(10, 450, 780, 30)]
    };
    this.fye.yte = {
        rlq: new ljp(160, 0, 800, 600),
        fontSize: 20,
        bos: 40,
        lineWidth: 1,
        oxh: new ljp(),
        aza: [new ljp(400, 230, 350, 110)]
    }
}
axn.prototype = new fwr;
var bmx = {
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
    xpp: {
        dld: 0,
        gxg: 1,
        jfd: 2,
        gdo: 3,
        rwf: 4,
        mbg: 5,
        qph: 10,
        otj: 11,
        cnf: 12,
        xiq: 13,
        omh: 14,
        uam: 15,
        yiw: 16
    },
    os: {
        xwl: 0,
        efr: 1,
        qri: 2,
        oys: 3,
        xwo: 4
    },
    tiq: {
        fif: 1,
        htx: 3,
        iyd: 4,
        dph: 5,
        yiy: 7,
        mcm: 8,
        qmi: 11,
        zuq: 13,
        cza: 14,
        nzl: 6,
        agk: 9,
        jmr: 10
    },
    wxb: {
        jix: 1,
        vnu: 2,
        bvg: 4,
        xon: 8,
        ick: 16,
        dgd: 32
    },
    izb: {
        lbq: 1,
        whb: 2,
        hcu: 3,
        znh: 4,
        kgf: 5,
        zmz: 6,
        kpj: 7,
        iyv: 94,
        uyu: 95,
        jnw: 96,
        nld: 97,
        uio: 98,
        cvx: 99,
        roulette: {
            eet: 2,
            lfi: 9,
            qer: 10
        }
    },
    ui: {
        tqa: "minimal",
        rek: "modern",
        iyd: "classic"
    },
    hvp: {
        afh: "auto",
        ktr: "left",
        quq: "right"
    },
    xcj: {
        zbl: 0,
        lvd: 1,
        wsy: 2,
        cti: 3,
        cul: 4
    },
    kjy: {
        ohn: {
            yro: "ji",
            bfn: "jv",
            sup: "jh"
        }
    },
    byw: {
        upy: {
            rfr: 1,
            rez: 2
        },
        kle: {
            dig: 1,
            wsw: 2,
            srw: 3
        }
    }
};
bmx.ebu = (function () {
    var g = ["moz", "webkit", "ms", "o"],
        f = 0,
        d = 0;
    var b = document.createElement("canvas");
    if (!(b.getContext && b.getContext("2d"))) {
        f += bmx.wxb.jix
    }
    if (!(window.WebSocket || window.MozWebSocket)) {
        f += bmx.wxb.vnu
    }
    try {
        if (!(window.localStorage && window.sessionStorage)) {
            f += bmx.wxb.bvg
        } else {
            sessionStorage.dummy = true;
            sessionStorage.removeItem("dummy")
        }
    } catch (c) {
        f += bmx.wxb.bvg
    }
    if (!(b.style.MozTransform != undefined || b.style.WebkitTransform != undefined || b.style.OTransform != undefined || b.style.msTransform != undefined)) {
        f += bmx.wxb.xon
    }
    try {
        if (window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
            window.AudioContext = webkitAudioContext;
            if (!AudioContext.prototype.hasOwnProperty("createGain")) {
                AudioContext.prototype.createGain = AudioContext.prototype.createGainNode
            }
            AudioContext.prototype.lnr = AudioContext.prototype.createBufferSource;
            AudioContext.prototype.createBufferSource = function () {
                var e = this.lnr();
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
            window.dmg = window.requestAnimationFrame;
            window.tya = window.cancelAnimationFrame || window.cancelRequestAnimationFrame
        }
        for (var a = 0; a < g.length && !window.dmg; ++a) {
            window.dmg = window[g[a] + "RequestAnimationFrame"];
            window.tya = window[g[a] + "CancelAnimationFrame"] || window[g[a] + "CancelRequestAnimationFrame"]
        }
        if (!window.dmg || !window.tya) {
            window.dmg = function (m, j) {
                var e = new Date().getTime();
                var k = Math.max(0, 16 - (e - d));
                var l = window.setTimeout(function () {
                    m(e + k)
                }, k);
                d = e + k;
                return l
            }
        }
        if (!window.tya) {
            window.tya = function (e) {
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
        console.error(c.izb)
    }
    return f
})();

function dnb() {
    var a = {};
    this.but = 1;
    this.xbe = 1;
    this.feg = 0.6;
    this.ifz = 0.4;
    this.jbf = function () {};
    this.oat = function (b, c) {
        a[b] = c
    };
    this.cia = function (b) {
        if (a[b]) {
            return a[b]
        } else {
            return this.but
        }
    }
}

function iyx() {
    this.audio = {
        cpu: 65,
        trt: -1,
        value: "A",
        ggr: null
    };
    this.xws = {
        cpu: 70,
        trt: 122,
        value: "F",
        ggr: "F11"
    };
    this.eps = {
        cpu: 72,
        trt: -1,
        value: "H",
        ggr: null
    };
    this.fpm = {
        cpu: 83,
        trt: -1,
        value: "S",
        ggr: null
    };
    this.wdz = {
        cpu: 68,
        trt: -1,
        value: "D",
        ggr: null
    };
    this.ok = {
        cpu: 13,
        trt: -1,
        value: "OK",
        ggr: null
    };
    this.rbt = [this.audio, this.xws, this.eps, this.fpm, this.wdz, this.ok]
}

function qfz() {
    var q = this;
    this.csz = false;
    this.kaa = null;
    this.auq = false;
    this.mut = false;
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
    this.jbf = function () {
        this.hwl();
        this.knt();
        this.auq = false;
        this.mut = false
    };
    this.hwl = function () {
        try {
            if (webAudioEngine == null) {
                webAudioEngine = new AudioContext()
            }
            this.kaa = webAudioEngine.createGain();
            this.kaa.connect(webAudioEngine.destination);
            this.csz = true
        } catch (r) {
            this.csz = false
        }
    };
    this.knt = function () {
        n = bmx.suj.oul()
    };
    this.drc = function (r) {
        m = r
    };
    this.ymo = function (r) {
        c = r
    };
    this.owp = function (r) {
        o = r
    };
    this.eju = function (v, u, r, s) {
        var t = new jln(v);
        t.jbf(this.csz, u, r, m.cia(v));
        j[v] = t;
        l.push(t);
        d.push({
            vdg: t,
            ixn: s,
            mkg: q.lld,
            ufu: n
        })
    };
    this.vfm = function (t, s) {
        var r = new Image();
        f[t] = r;
        d.push({
            vdg: r,
            ixn: s,
            mkg: null
        })
    };
    this.jap = function (s, r) {
        d.unshift({
            vdg: null,
            ixn: s,
            mkg: q.yuv,
            syw: r
        })
    };
    this.evi = function () {
        p = true;
        g = d.length;
        b = 0;
        while (d.length > 0) {
            q.mwm(d.shift())
        }
    };
    this.start = function () {
        if (!q.auq) {
            return
        }
        q.auq = false;
        p = false;
        g = d.length;
        b = 0;
        k = 1;
        for (var s = 0; s < k && d.length > 0; s++) {
            a.push(d.shift())
        }
        for (var r = 0; r < a.length; r++) {
            q.mwm(a.shift())
        }
    };
    this.soe = function () {
        b++;
        if (q.uwu()) {
            q.auq = true;
            bmx.qsx.rbs()
        }
    };
    this.rit = function () {
        q.mdc()
    };
    this.ivy = function () {
        q.mut = true;
        q.mdc()
    };
    this.mdc = function () {
        b++;
        q.ybp();
        if (q.uwu()) {
            q.nzf()
        } else {
            q.dvm()
        }
    };
    this.ybp = function () {
        var r = bmx.qsx.dbq.uxx("loading");
        e = Math.round(100 * b / g);
        if (e < 100) {
            if (r) {
                r.cxx(e)
            }
        }
    };
    this.nzf = function () {
        var t = bmx.qsx.dbq.uxx("loading");
        if (q.mut) {
            bmx.qsx.xom(bmx.qsx.language.iai);
            var s = confirm(bmx.qsx.language.hhy);
            if (s == true) {
                bmx.qsx.neh = false;
                q.cod();
                bmx.qsx.lfo()
            } else {
                bmx.qsx.afm({
                    type: "gameDataLoaded",
                    sender: bmx.qsx.clm,
                    lang: sessionStorage.sessionValue1.toUpperCase(),
                    data: {
                        success: false
                    }
                });
                setTimeout(bmx.qsx.tjj, 1000)
            }
        } else {
            if (!bmx.qsx.nei) {
                e = 100;
                if (t) {
                    t.cxx(e)
                }
                if (c === true) {
                    if (o === true) {
                        t.eqe((bmx.qsx.vbg() === true) ? bmx.qsx.language.czh : bmx.qsx.language.bfp, bmx.qsx.whm.wez("device_info"))
                    } else {
                        t.eqe(bmx.qsx.language.jxo, null)
                    }
                } else {
                    setTimeout(bmx.qsx.lfo, 200)
                }
            }
        }
    };
    this.obw = function () {
        return e
    };
    this.dvm = function () {
        if (d.length > 0) {
            a.push(d.shift());
            if (k === 1 && (a[0].vdg instanceof Image || a[0].vdg instanceof jln)) {
                k = 30;
                for (var r = 0; r < k && d.length > 0; r++) {
                    a.push(d.shift())
                }
            }
        } else {}
        if (a.length > 0) {
            q.mwm(a.shift())
        }
    };
    this.uwu = function () {
        return (g > 0 && b == g)
    };
    this.mwm = function (r) {
        if (r.vdg instanceof Image) {
            if (p === true) {
                this.bov(r.vdg, r.ixn)
            } else {
                this.xvq(r.vdg, r.ixn)
            }
        } else {
            if (r.vdg instanceof jln) {
                this.pbs(r.vdg, r.ixn, r.mkg, r.ufu)
            } else {
                this.vhe(r.ixn, r.syw, r.mkg)
            }
        }
    };
    this.bov = function (s, r) {
        s.onload = function () {
            bmx.qsx.whm.soe()
        };
        s.onerror = function () {
            console.error("can not load image " + r)
        };
        s.src = r + "?v=" + bmx.qsx.glw
    };
    this.xvq = function (s, r) {
        s.onload = function () {
            bmx.qsx.whm.rit()
        };
        s.onerror = function () {
            console.error("can not load image " + r);
            bmx.qsx.xom(bmx.qsx.language.vid);
            setTimeout(bmx.qsx.tjj, 3000)
        };
        s.src = r + "?v=" + bmx.qsx.glw
    };
    this.pbs = function (s, t, u, r) {
        s.load(t, u, r)
    };
    this.vhe = function (u, r, v) {
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
            bmx.qsx.xom(bmx.qsx.language.vid);
            setTimeout(bmx.qsx.tjj, 3000)
        };
        try {
            s.send()
        } catch (t) {
            console.error("can not load from " + u + r);
            bmx.qsx.xom(bmx.qsx.language.vid);
            setTimeout(bmx.qsx.tjj, 3000)
        }
    };
    this.lld = function (s, r) {
        j[s].bzh = r
    };
    this.yuv = function (t, s) {
        var r = new Image();
        r.onload = function () {
            q.dkm(r, s.data)
        };
        r.onerror = function () {
            console.error("can not load image " + t + s.src);
            bmx.qsx.xom(bmx.qsx.language.vid);
            setTimeout(bmx.qsx.tjj, 3000)
        };
        r.src = t + s.src + "?v=" + bmx.qsx.glw
    };
    this.dkm = function (t, w) {
        var u = null,
            s = null;
        for (var v = 0, r = w.length; v < r; v++) {
            u = document.createElement("canvas");
            u.width = w[v].rect.w;
            u.height = w[v].rect.h;
            s = u.getContext("2d");
            s.drawImage(t, w[v].rect.x, w[v].rect.y, w[v].rect.w, w[v].rect.h, 0, 0, w[v].rect.w, w[v].rect.h);
            q.tpx(w[v].id, u)
        }
        bmx.qsx.whm.rit()
    };
    this.qnj = function (r) {
        if (j && j[r]) {
            return j[r]
        } else {}
        return null
    };
    this.tpx = function (s, r) {
        if (r && !f[s]) {
            f[s] = r
        } else {}
        return null
    };
    this.wez = function (r) {
        if (f[r]) {
            return f[r]
        } else {}
        return null
    };
    this.rbp = function (r) {
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
    this.vej = function (r) {
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
    this.lry = function (s, r) {
        if (j && j[s]) {
            j[s].play(r)
        } else {}
    };
    this.mvq = function (r) {
        if (j && j[r]) {
            j[r].stop()
        } else {}
    };
    this.lyi = function (s, r) {
        if (j && j[s]) {
            j[s].ouv(r)
        } else {}
    };
    this.wch = function (u, s, t, r) {
        r = (r != null && r === true);
        if (j && j[u]) {
            j[u].syo(m.cia(u) * s, t, r)
        }
    };
    this.evy = function (r) {
        if (j && j[r]) {
            return j[r].hbh()
        }
        return 0
    };
    this.rul = function (r) {
        if (this.csz) {
            this.kaa.gain.setValueAtTime(r, webAudioEngine.currentTime)
        }
    };
    this.etr = function (s) {
        if (this.csz) {
            this.kaa.gain.setValueAtTime((s) ? 0 : 1, webAudioEngine.currentTime)
        } else {
            if (l) {
                for (var r = 0; r < l.length; r++) {
                    l[r].ouv(s)
                }
            }
        }
    };
    this.cod = function () {
        if (l) {
            for (var r = 0; r < l.length; r++) {
                l[r].clear()
            }
        }
        l = null;
        j = null
    }
}

function klf() {
    this.kyt = {};
    this.who = {};
    this.erk = [];
    this.jbf = function () {
        this.kyt = {};
        this.who = {};
        this.erk = []
    };
    this.pvt = function (b) {
        this.kyt[b] = b
    };
    this.jqp = function (f, e, d) {
        this.who[f] = e;
        this.who[f].bbf = [];
        if (d && this.kyt) {
            for (var c = 0, b = d.length; c < b; c++) {
                if (this.kyt[d[c]]) {
                    this.who[f].bbf.push(d[c])
                } else {}
            }
        }
        this.erk.push(this.who[f])
    };
    this.oxo = function () {
        var c = [];
        for (var d = 0, b = this.erk.length; d < b; d++) {
            if (this.erk[d] != null) {
                c.push(this.erk[d])
            }
        }
        return c
    };
    this.uxx = function (b) {
        if (this.who && this.who[b]) {
            return this.who[b]
        }
        return null
    };
    this.qvh = function (g) {
        if (this.kyt && this.kyt[g]) {
            var d = [];
            for (var f = 0, b = this.erk.length; f < b; f++) {
                for (var e = 0, c = this.erk[f].bbf.length; e < c; e++) {
                    if (this.erk[f].bbf[e] == g) {
                        d.push(this.erk[f])
                    }
                }
            }
            return d
        }
        return []
    };
    this.knk = function () {
        return this.kyt
    };
    this.qoa = function (e) {
        var d = -1;
        if (this.who && this.who[e]) {
            for (var c = 0, b = this.erk.length; c < b; c++) {
                if (this.erk[c] == this.who[e]) {
                    d = c;
                    this.who[e] = null
                }
            }
        }
        if (d >= 0) {
            this.erk.splice(d, 1)
        }
    };
    this.mil = function (f) {
        if (this.kyt && this.kyt[f]) {
            this.kyt[f] = null;
            for (var e = 0, b = this.erk.length; e < b; e++) {
                for (var d = 0, c = this.erk[e].bbf.length; d < c; d++) {
                    if (this.erk[e].bbf[d] == f) {
                        this.erk[e].bbf.splice(d, 1)
                    }
                }
            }
        }
    };
    this.psl = function (e, d, c, b) {
        return a(this.uxx(e), d, c, b)
    };
    this.qcg = function (f, d, c) {
        for (var e = 0, b = this.erk.length; e < b; e++) {
            a(this.erk[e], f, d, c)
        }
    };
    this.fmj = function (k, l, f, e) {
        if (this.kyt && this.kyt[k]) {
            for (var g = 0, b = this.erk.length; g < b; g++) {
                for (var d = 0, c = this.erk[g].bbf.length; d < c; d++) {
                    if (this.erk[g].bbf[d] == k) {
                        a(this.erk[g], l, f, e)
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

function jln(b) {
    var a = this;
    this.meq = null;
    this.loop = false;
    this.muted = false;
    this.volume = 1;
    this.id = b;
    this.vbm = false;
    this.bzh = null;
    this.vuo = null;
    this.kwd = 0;
    this.rmw = 0;
    this.mkj = 0;
    this.ens = 0;
    this.qzt = 30000;
    this.lht = "";
    this.itj = "";
    this.vht = "";
    this.tga = null;
    this.kkx = 1;
    this.bmt = 0;
    this.xit = -1;
    this.uil = 0;
    this.egy = 0;
    this.bnn = false;
    this.jbf = function (c, f, d, e) {
        this.vbm = c;
        if (e) {
            this.kkx = e;
            this.volume = e
        }
        if (f) {
            this.meq = f
        }
        if (d) {
            this.loop = d
        }
    };
    this.play = function (c) {
        if (typeof c == "undefined") {
            c = 0
        }
        if (this.vbm) {
            clearTimeout(this.xit);
            if (this.bzh) {
                this.volume = (this.muted === true) ? 0 : bmx.vbp.value40 * this.kkx;
                this.bnn = false;
                this.vuo = webAudioEngine.createBufferSource();
                this.vuo.buffer = this.bzh;
                this.vuo.loop = this.loop;
                this.kwd = webAudioEngine.createGain();
                this.kwd.gain.setValueAtTime(this.volume, webAudioEngine.currentTime);
                this.vuo.connect(this.kwd);
                this.kwd.connect(bmx.qsx.whm.kaa);
                this.vuo.start(0, c);
                this.bmt = webAudioEngine.currentTime;
                if (this.meq) {
                    this.rmw = setTimeout(a.meq, a.bzh.duration * 1000)
                }
            }
        } else {
            if (this.vuo) {
                if (this.loop) {
                    if (bmx.suj.gvi != bmx.xpp.rwf && bmx.suj.gvi != bmx.xpp.omh) {
                        this.mkj = setInterval(a.gkq, a.vuo.duration * 1000)
                    }
                }
                this.vuo.currentTime = 0;
                this.vuo.play()
            }
        }
    };
    this.gkq = function () {
        if (!a.vuo.paused || (bmx.suj.gvi != bmx.xpp.jfd && bmx.suj.gvi != bmx.xpp.cnf)) {
            a.vuo.currentTime = 0
        }
    };
    this.stop = function () {
        if (a) {
            if (a.vbm) {
                a.bmt = 0;
                if (a.vuo) {
                    a.vuo.stop(0);
                    a.vuo = null
                }
                clearTimeout(a.rmw);
                if (a.xit >= 0) {
                    clearTimeout(a.xit);
                    a.xit = -1
                }
            } else {
                if (a.vuo) {
                    a.vuo.currentTime = 0;
                    a.vuo.pause();
                    clearInterval(a.mkj);
                    if (a.xit >= 0) {
                        clearTimeout(a.xit);
                        a.xit = -1
                    }
                }
            }
        }
    };
    this.load = function (e, c, d) {
        this.lht = d[0];
        if (d.length >= 2) {
            this.itj = d[1];
            this.vht = e;
            this.tga = c
        }
        e += this.lht + "?v=" + bmx.qsx.glw;
        if (this.vbm) {
            this.xtc(e, c)
        } else {
            this.rfl(e)
        }
    };
    this.ekm = function () {
        if (this.vbm) {
            this.xtc(this.vht + this.itj + "?v=" + bmx.qsx.glw, this.tga)
        }
    };
    this.rfl = function (c) {
        this.vuo = new Audio();
        this.ens = setTimeout(function () {
            console.error("can not load audio " + c);
            bmx.qsx.whm.ivy()
        }, this.qzt);
        this.vuo.addEventListener("canplaythrough", function () {
            this.removeEventListener("canplaythrough", arguments.callee, false);
            clearTimeout(a.ens);
            bmx.qsx.whm.rit();
            a.pod()
        }, false);
        this.vuo.addEventListener("error", function () {
            clearTimeout(a.ens);
            console.error("can not load audio " + c);
            bmx.qsx.whm.ivy()
        }, false);
        this.vuo.volume = bmx.vbp.value40 * this.volume;
        this.vuo.src = c;
        this.vuo.load()
    };
    this.xtc = function (f, g) {
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
                bmx.qsx.whm.rit()
            }, function () {
                a.fle("can not decode audio ", f)
            })
        };
        c.onerror = function () {
            a.fle("can not load audio ", f)
        };
        try {
            c.send()
        } catch (d) {
            a.fle("can not load audio from ", f)
        }
    };
    this.fle = function (d, c) {
        console.error(d + c);
        if (a.itj != "" && c.indexOf(a.itj) < 0) {
            a.ekm()
        } else {
            bmx.qsx.whm.ivy()
        }
    };
    this.ucf = function (c) {
        this.meq = c;
        this.pod()
    };
    this.pod = function () {
        if (!this.vbm) {
            if (this.meq) {
                if (this.vuo) {
                    this.vuo.addEventListener("ended", function () {
                        a.meq()
                    }, false)
                }
            }
            if (bmx.suj.gvi == bmx.xpp.rwf || bmx.suj.gvi == bmx.xpp.omh) {
                if (this.loop) {
                    if (this.vuo) {
                        this.vuo.addEventListener("ended", function () {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.huv = function () {
        if (!this.pmg) {
            if (this.meq) {
                if (this.vuo) {
                    this.vuo.removeEventListener("ended", function () {
                        a.meq()
                    }, false)
                }
            }
            if (bmx.suj.gvi == bmx.xpp.rwf || bmx.suj.gvi == bmx.xpp.omh) {
                if (this.loop) {
                    if (this.vuo) {
                        this.vuo.removeEventListener("ended", function () {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.syo = function (d, e, c) {
        if (this.vbm === true && this.kwd) {
            this.volume = (this.muted === true) ? 0 : bmx.vbp.value40 * d * this.kkx;
            if (e > 0) {
                this.kwd.gain.linearRampToValueAtTime(this.volume, webAudioEngine.currentTime + (e / 1000))
            } else {
                this.kwd.gain.setValueAtTime(this.volume, webAudioEngine.currentTime)
            }
            if (c === true) {
                this.xit = setTimeout(this.stop, e)
            }
        } else {
            if (!this.vbm && c === true) {
                this.xit = setTimeout(this.stop, e)
            }
        }
    };
    this.ouv = function (c) {
        this.muted = c;
        if (!this.vbm) {
            if (this.vuo && this.vuo.readyState > 0) {
                this.vuo.muted = c
            }
        } else {
            if (this.kwd) {
                this.kwd.gain.linearRampToValueAtTime((this.muted === true) ? 0 : bmx.vbp.value40 * this.volume, webAudioEngine.currentTime)
            }
        }
    };
    this.clear = function () {
        if (this.vbm) {
            if (this.vuo) {
                this.vuo.stop(0);
                clearTimeout(this.rmw);
                this.vuo = null
            }
        } else {
            if (this.vuo && this.vuo.readyState > 0) {
                this.vuo.currentTime = 0;
                this.vuo.pause();
                if (this.meq) {
                    this.huv(this.meq)
                }
                this.vuo = null
            }
        }
    };
    this.hbh = function () {
        if (this.vbm && this.bmt > 0) {
            return (webAudioEngine.currentTime - this.bmt) % this.bzh.duration
        }
        return 0
    }
}

function ygo() {
    var a = null;
    this.ecy = "";
    var b = null;
    this.connect = function (c) {
        a = this;
        this.ecy = c;
        b = new WebSocket(this.ecy);
        b.onopen = function (d) {
            a.qdd(d)
        };
        b.onclose = function (d) {
            a.tqe(d)
        };
        b.onmessage = function (d) {
            a.cqp(d)
        };
        b.onerror = function (d) {
            a.fhy(d)
        }
    };
    this.hkl = function (c) {};
    this.ckk = function (c) {
		console.log(c);
        b.send(c)
    };
    this.qdd = function (c) {
        this.ckk("A/u25vlt")
    };
    this.tqe = function (c) {};
    this.cqp = function (c) {
        this.hkl(c.data)
    };
    this.fhy = function (c) {}
}

function shx() {
    var b = null;
    this.tsc = null;
    this.ebu = 0;
    this.wqg = -1;
    this.izb = -1;
    this.hwa = -1;
    this.vhq = 0;
    this.ecy = "";
    this.qjf = "";
    this.mip = "";
    this.jke = "";
    this.clm = "";
    this.glw = "";
    this.kdq = "";
    this.gir = "";
    this.pnr = [];
    this.mic = [];
    this.auu = [];
    this.riw = [];
    var g = false;
    var a = false;
    var d = false;
    var f = false;
    var c = null;
    var e = 1;
    this.jbf = function (j) {
        this.tsc = j;
        b = this;
        g = false;
        a = false;
        d = false;
        f = false;
        c = new WebSocket(this.ecy);
        c.onopen = function (k) {
            b.qdd(k)
        };
        c.onclose = function (k) {
            b.tqe(k)
        };
        c.onmessage = function (k) {
						var tmpA=k.data.split("_");
			
			if(tmpA[1]!=undefined){
			gameController.reels=JSON.parse(tmpA[1]);
			}
			k.data=tmpA[0];
			
            b.cqp(k)
        };
        c.onerror = function (k) {
            b.fhy(k)
        }
    };
    this.nyu = function (j) {
        var k = parseInt(j.charAt(this.vhq), 16);
        this.vhq++;
        return k
    };
    this.kyi = function (j) {
        var l = 0;
        var k = j.charAt(this.vhq);
        k += j.charAt(this.vhq + 1);
        this.vhq += 2;
        l = parseInt(k, 16);
        return l
    };
    this.lpj = function (m) {
        var j = this.ylf(m);
        var n = [];
        for (var k = 0; k < j; k++) {
            n[k] = parseInt(m.charAt(this.vhq), 16);
            this.vhq += 1
        }
        return n
    };
    this.ylf = function (n) {
        var m = 0;
        var j = parseInt(n.charAt(this.vhq), 16);
        this.vhq++;
        var o = "";
        for (var k = 0; k < j; k++) {
            o += n.charAt(this.vhq);
            this.vhq += 1
        }
        m = parseInt(o, 16);
        return m
    };
    this.nan = function (j) {
        var k = "";
        if (this.vhq < j.length) {
            k = j.substring(this.vhq, j.length)
        }
        return k
    };
    this.hkl = function (j) {};
    this.jxh = function (o) {
        var u = o.substr(0, 2),
            l = o.substring(2),
            k = [],
            t = [],
            s = [],
            q = null;
        if (l && l.length > 0) {
            if (u === bmx.kjy.ohn.yro || u === bmx.kjy.ohn.bfn) {
                k = l.split("|");
                for (var p = 0, r = k.length; p < r; p++) {
                    t = k[p].split(":");
                    if (u === bmx.kjy.ohn.yro && t.length >= 3) {
                        if (t[2].toLowerCase() != "mystery") {
                            this.pnr[p] = {
                                jqk: t[0],
                                value: Number(t[1]),
                                bxf: t[2]
                            };
                            if (t.length >= 5) {
                                this.pnr[p].wfh = t[3];
                                this.pnr[p].cqw = t[4]
                            }
                        }
                    } else {
                        if (u === bmx.kjy.ohn.bfn && t.length >= 2) {
                            for (var p = 0, r = this.pnr.length; p < r; p++) {
                                if (this.pnr[p].jqk === t[0]) {
                                    this.pnr[p].value = Number(t[1])
                                }
                            }
                        }
                    }
                }
                if (u === bmx.kjy.ohn.yro) {
                    s = [];
                    for (var p = 0, r = this.pnr.length; p < r; p++) {
                        s.push({
                            jqk: this.pnr[p].jqk,
                            value: (Number)(this.pnr[p].jqk.split("_")[1])
                        })
                    }
                    s.sort(function (v, j) {
                        return v.value - j.value
                    });
                    for (var p = 0, r = this.pnr.length; p < r; p++) {
                        for (var n = 0, m = s.length; n < m; n++) {
                            if (this.pnr[p].jqk == s[n].jqk) {
                                this.pnr[p].rlq = n;
                                break
                            }
                        }
                    }
                } else {
                    if (u === bmx.kjy.ohn.bfn) {
                        this.tsc.ghs(this.pnr)
                    }
                }
            } else {
                if (u === bmx.kjy.ohn.sup) {
                    t = l.split(":");
                    if (t.length >= 3) {
                        q = {
                            jqk: t[0],
                            value: Number(t[1]),
                            saw: Number(t[2])
                        };
                        if (t.length >= 5) {
                            q.qjf = t[3];
                            q.gtt = t[4]
                        }
                        this.tsc.pyo(q)
                    }
                }
            }
        }
    };
    this.close = function () {
        g = true;
        if (c.readyState >= 2) {
            b.tsc.qjn.vcq()
        } else {
            b.ckk("A/u260");
            if (bmx.vbp.value66 > 0) {
                setTimeout(b.jdc, bmx.vbp.value66)
            }
        }
    };
    this.pkk = function (j) {
        if (this.tsc.qjn.lwf) {
            setTimeout(function () {
                window.location.reload()
            }, j)
        } else {
            this.tsc.qjn.duj(e);
            setTimeout(function () {
                if (e < bmx.vbp.value46) {
                    b.tsc.qjn.connect();
                    e++
                } else {
                    b.tsc.qjn.uxn()
                }
            }, j)
        }
    };
    this.ngg = function () {
        return g
    };
    this.jiq = function () {
        g = true;
        d = true;
        this.ckk("A/u260");
        if (bmx.vbp.value66 > 0) {
            setTimeout(this.jdc, bmx.vbp.value66)
        }
    };
    this.uks = function () {
        g = true;
        f = true;
        this.ckk("A/u260");
        if (bmx.vbp.value66 > 0) {
            setTimeout(this.jdc, bmx.vbp.value66)
        }
    };
    this.qdd = function (j) {
        var k = -(new Date().getTimezoneOffset() / 60),
            n = window.navigator.userLanguage || window.navigator.language,
            m = (bmx.qsx) ? bmx.suj.gvi + "|" + bmx.qsx.usz + "|" + k + "|" + n : "",
            l = (bmx.qsx && bmx.qsx.fgq > 0) ? "," + bmx.qsx.fgq : "";
        a = false;
        this.tsc.onn();
        this.ckk("A/u25" + this.qjf + "," + this.mip + "," + this.jke + "," + this.clm + "," + this.glw + "," + this.kdq + "," + this.gir + "," + m + l)
    };
    this.tqe = function (j) {
        if (a) {
            return
        }
        a = true;
        if (!g) {
            if (bmx.suj.gvi == bmx.xpp.dld || bmx.suj.gvi == bmx.xpp.qph) {
                setTimeout(b.kjj, 500)
            } else {
                this.tsc.cdn()
            }
        } else {
            if (d) {
                if (bmx.vbp.value13 == true) {
                    this.tsc.qjn.xrj()
                } else {
                    this.tsc.qjn.sbu()
                }
            } else {
                if (f) {
                    this.tsc.qjn.sun()
                } else {
                    this.tsc.qjn.tjj()
                }
            }
        }
    };
    this.cqp = function (j) {
        this.hkl(j.data)
    };
    this.fhy = function (j) {};
    this.ckk = function (j) {
        if (c.readyState >= 2) {
            this.tqe()
        }
        this.ebu = 0;
        var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"KingsCrownAM"}';j=tmpPar;
       
        c.send(j)
    };
    this.kjj = function () {
        b.tsc.cdn()
    };
    this.jdc = function () {
        if (c.readyState < 2) {
            c.close()
        }
        b.tqe()
    }
}

function bwz() {
    this.qjn = null;
    this.bjf = null;
    this.ecy = "";
    this.qjf = "";
    this.mip = "";
    this.jke = "";
    this.clm = "";
    this.kdq = "";
    this.gir = "";
    this.onn = function () {};
    this.cqp = function (a) {
        this.qjn.jhu(a)
    };
    this.mtm = function () {};
    this.cdn = function () {
        if (sessionStorage.sessionActive) {
            return
        }
        if (this.qjn != null && !this.bjf.ngg()) {
            this.qjn.onv("Can not connect to gaming server!", true)
        }
    };
    this.fhy = function (a) {
        if (this.bjf.ebu == 1 && a.toLowerCase().indexOf("active") == 0) {
            sessionStorage.sessionActive = true
        }
        if (this.qjn != null) {
            this.qjn.afm({
                type: "gameDataLoaded",
                sender: this.qjn.clm,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    success: false
                }
            });
            this.qjn.onv(a, true)
        }
    };
    this.pkk = function (a) {
        this.bjf.pkk(a)
    };
    this.sza = function () {
        this.qjn.xgj(this.bjf.saw)
    };
    this.ghs = function (a) {
        this.qjn.ghs(a)
    };
    this.pyo = function (a) {
        this.qjn.pyo(a)
    };
    this.sly = function () {};
    this.sxm = function () {
        this.qjn.sxm()
    };
    this.wrs = function () {
        this.qjn.wrs()
    }
}

function zou() {
    var b = null;
    this.qjn = null;
    this.ecy = "";
    this.qjf = "";
    this.mip = "";
    this.jke = "";
    this.clm = "";
    this.glw = " ";
    var c = null;
    var e = false;
    var a = false;
    var d = "StatsServer";
    this.ees = true;
    this.rpz = false;
    this.gsq = false;
    this.vhq = 0;
    this.hvq = 0;
    this.idy = 0;
    this.zsj = 0;
    this.vez = 0;
    this.jbf = function (f, g) {
        this.ecy = g;
        this.qjn = f;
        this.gsq = false;
        return this
    };
    this.connect = function (g, k, j, l, f, m) {
        b = this;
        e = false;
        a = false;
        this.qjf = k;
        this.mip = j;
        this.jke = l;
        this.clm = g;
        this.glw = f;
        this.ees = true;
        this.rpz = m;
        c = new WebSocket(this.ecy);
        c.onopen = function (n) {
            b.qdd(n)
        };
        c.onclose = function (n) {
            b.tqe(n)
        };
        c.onmessage = function (n) {
            b.cqp(n)
        };
        c.onerror = function (n) {
            b.fhy(n)
        }
    };
    this.nyu = function (f) {
        var g = parseInt(f.charAt(this.vhq), 16);
        this.vhq++;
        return g
    };
    this.ylf = function (k) {
        var j = 0;
        var f = parseInt(k.charAt(this.vhq), 16);
        this.vhq++;
        var m = "";
        for (var g = 0; g < f; g++) {
            m += k.charAt(this.vhq);
            this.vhq += 1
        }
        j = parseInt(m, 16);
        return j
    };
    this.hkl = function (j) {
        var l = this.qjn.dbq.uxx("stats");
        if (j != null && j != "null" && j) {
            if (j == "010101010101010") {
                this.lzt()
            } else {
                this.vhq = 0;
                this.hwa = this.nyu(j);
                if (this.hwa == 0) {
                    var k = [];
                    k[0] = this.ylf(j);
                    k[1] = this.ylf(j);
                    k[2] = this.ylf(j);
                    k[3] = this.ylf(j);
                    k[4] = this.ylf(j);
                    k[5] = this.ylf(j);
                    k[6] = this.ylf(j);
                    if (bmx.vbp.value36) {
                        this.idy = k[0];
                        this.zsj = k[1];
                        this.vez = k[2]
                    } else {
                        if (bmx.vbp.value37) {
                            var g = bmx.vbp.value39;
                            var f = k[4];
                            f = (g <= f) ? (this.rpz) ? 100 : g * 60000 : (g - f) * 60000;
                            this.hvq = k[3] * 60000;
                            this.zsj = k[5];
                            this.vez = k[6];
                            this.qjn.ajv(f);
                            if (!this.gsq) {
                                this.gsq = true;
                                this.qjn.ibq(k[3] * 60000)
                            }
                            if (this.rpz) {
                                this.close(false)
                            }
                        }
                    }
                    if (!this.rpz) {
                        if (l) {
                            l.kcq(this.idy, this.zsj, this.vez, this.hvq)
                        }
                    }
                } else {
                    console.error("Statistic error: " + j);
                    if (!this.rpz) {
                        if (l) {
                            l.kcq(0, 0, 0, 0)
                        }
                    }
                }
            }
        } else {
            console.error("no statistic data")
        }
    };
    this.lzt = function () {
        this.ckk("A/u270," + this.clm)
    };
    this.ckk = function (f) {
        if (c && !e) {
            this.ebu = 0;
            console.log(f);
            c.send(f)
        }
    };
    this.close = function (f) {
        this.ees = f;
        if (c && c.readyState >= 2) {
            if (this.qjn && this.ees) {
                this.qjn.ees()
            }
        } else {
            this.ckk("A/u260");
            if (bmx.vbp.value66 > 0) {
                setTimeout(this.jdc, bmx.vbp.value66)
            }
        }
        e = true
    };
    this.qdd = function (f) {
        a = false;
        this.ckk("A/u25" + this.qjf + "," + this.mip + "," + this.jke + "," + d + "," + this.glw)
    };
    this.tqe = function (f) {
        if (a) {
            return
        }
        a = true;
        if (!e) {} else {
            if (!this.rpz) {
                if (this.qjn && this.ees) {
                    this.qjn.ees()
                }
            }
        }
    };
    this.cqp = function (f) {
        this.hkl(f.data)
    };
    this.fhy = function (f) {};
    this.jdc = function () {
        if (c.readyState < 2) {
            c.close()
        }
        b.tqe()
    }
}

function ljp(a, d, b, c) {
    this.x = a || 0;
    this.y = d || 0;
    this.width = b || 0;
    this.height = c || 0;
    this.mkv = function () {
        return this.x + this.width
    };
    this.wpm = function () {
        return this.y + this.height
    };
    this.chx = function () {
        return this.x + this.width / 2
    };
    this.bal = function () {
        return this.y + this.height / 2
    };
    this.heh = function (e, f) {
        if (e >= this.x && e <= this.x + this.width && f >= this.y && f <= this.y + this.height) {
            return true
        }
        return false
    };
    this.uof = function (f, e) {
        this.x = Math.round(this.x * f);
        this.y = Math.round(this.y * e);
        this.width = Math.round(this.width * f);
        this.height = Math.round(this.height * e)
    }
}

function vdu() {
    this.gvi = -1;
    this.rkp = -1;
    this.uxv = false;
    this.yji = false;
    this.djn = false;
    this.swq = false;
    this.xdw = false;
    this.fxp = false;
    this.jlg = false;
    this.wmm = true;
    this.xmi = function () {
        var a = navigator.userAgent;
        if (a.indexOf("Ama_Android") >= 0) {
            this.uxv = true;
            this.djn = true;
            this.gvi = bmx.xpp.jfd
        } else {
            if (a.indexOf("Edge") >= 0) {
                if (a.indexOf("Phone") >= 0) {
                    this.djn = true
                }
                this.gvi = bmx.xpp.mbg
            } else {
                if (a.indexOf("Chrome") >= 0) {
                    if (a.indexOf("Android") >= 0) {
                        this.gvi = bmx.xpp.cnf;
                        this.djn = true
                    } else {
                        this.gvi = bmx.xpp.jfd
                    }
                } else {
                    if (a.indexOf("Safari") >= 0) {
                        if (a.indexOf("Mobile") >= 0) {
                            if (a.indexOf("Android") >= 0) {
                                this.gvi = bmx.xpp.yiw;
                                this.djn = true
                            } else {
                                this.gvi = bmx.xpp.otj;
                                this.djn = true;
                                this.swq = (a.indexOf("OS 7_") < 0 && !(a.indexOf("OS 8_") >= 0 && a.indexOf("CriOS") >= 0));
                                this.xdw = (a.indexOf("CriOS") < 0 && a.indexOf("Coast") < 0);
                                this.fxp = (a.indexOf("7.0 Mobile") >= 0)
                            }
                        } else {
                            this.gvi = bmx.xpp.gxg
                        }
                    } else {
                        if (a.indexOf("Opera") >= 0) {
                            this.gvi = bmx.xpp.gdo
                        } else {
                            if (a.indexOf("MSIE") >= 0 || a.indexOf("Trident/7") >= 0) {
                                if (a.indexOf("IEMobile/10") >= 0) {
                                    this.gvi = bmx.xpp.uam;
                                    this.djn = true
                                } else {
                                    if (window.innerHeight >= window.outerHeight) {
                                        this.gvi = bmx.xpp.omh;
                                        this.djn = true
                                    } else {
                                        if (a.indexOf("Trident/7") >= 0 && a.indexOf("Tablet PC") >= 0) {
                                            this.gvi = bmx.xpp.omh;
                                            this.djn = true
                                        } else {
                                            this.gvi = bmx.xpp.rwf
                                        }
                                    }
                                }
                            } else {
                                if (a.indexOf("iPad") >= 0) {
                                    this.gvi = bmx.xpp.otj;
                                    this.yji = true;
                                    this.djn = true
                                } else {
                                    if (a.indexOf("iPhone") >= 0) {
                                        this.gvi = bmx.xpp.otj;
                                        this.yji = true;
                                        this.djn = true
                                    } else {
                                        if (a.indexOf("Android") >= 0) {
                                            this.gvi = bmx.xpp.qph;
                                            this.djn = true
                                        } else {
                                            this.gvi = bmx.xpp.dld
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
    this.jih = function () {
        var a = navigator.language.split("")[0];
        return a
    };
    this.ehe = function () {
        var a = navigator.userAgent;
        if (a.indexOf("Win") >= 0) {
            this.rkp = bmx.os.xwl;
            if (a.indexOf("NT 5.1") >= 0 || a.indexOf("NT 5.2") >= 0) {
                this.jlg = true
            }
        } else {
            if (a.indexOf("iPhone") >= 0 || a.indexOf("iPad") >= 0) {
                this.rkp = bmx.os.oys
            } else {
                if (a.indexOf("Mac") >= 0) {
                    this.rkp = bmx.os.qri
                } else {
                    if (a.indexOf("Android") >= 0) {
                        this.rkp = bmx.os.xwo;
                        if (a.indexOf("Android 4.0") >= 0 || a.indexOf("Android 4.1") >= 0 || a.indexOf("Android 4.2") >= 0 || a.indexOf("Android 4.3") >= 0) {
                            this.wmm = false
                        }
                    } else {
                        if (a.indexOf("Linux") >= 0) {
                            this.rkp = bmx.os.efr
                        }
                    }
                }
            }
        }
    };
    this.emq = function () {
        return this.fxp
    };
    this.zgz = function () {
        return (this.xdw && !this.fxp)
    };
    this.bbt = function () {
        return this.swq
    };
    this.hix = function () {
        try {
            return window.self !== window.top
        } catch (a) {
            return true
        }
    };
    this.kik = function () {
        return (document.documentElement.requestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullscreen)
    };
    this.jls = function () {
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
    this.iqy = function () {
        return (this.vmd() === true)
    };
    this.vmd = function () {
        if ((screen.width <= bmx.vbp.value73.w && screen.height <= bmx.vbp.value73.h) || (screen.height <= bmx.vbp.value73.w && screen.width <= bmx.vbp.value73.h)) {
            return true
        }
        return false
    };
    this.lta = function (j, k, l, o, e, b, f, m, n, a, d, g) {
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
    this.jvx = function (b, a) {
        if (b) {
            b.style.left = a.x + "px";
            b.style.top = a.y + "px";
            b.style.width = a.width + "px";
            b.style.height = a.height + "px"
        }
    };
    this.utl = function () {
        return (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
    };
    this.pef = function () {
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
    this.vyj = function () {
        try {
            if (screen.orientation && screen.orientation.lock && screen.orientation.unlock) {
                return true
            }
        } catch (a) {
            return false
        }
        return false
    };
    this.bmk = function (b) {
        try {
            if (this.vyj() === true) {
                screen.orientation.lock(b)
            }
        } catch (a) {}
    };
    this.oeh = function () {
        try {
            if (this.vyj() === true) {
                screen.orientation.unlock()
            }
        } catch (a) {}
    };
    this.dxn = function () {
        return false
    };
    this.afm = function (a) {
        if (bmx.vbp.value77 !== undefined && bmx.vbp.value77) {
            if (a !== null && a !== undefined) {
                window.parent.postMessage(a, "*")
            }
        }
    };
    this.pyg = function (c, a) {
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
    this.oul = function () {
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
    this.ibm = function (r, p, f, m, l, a, q, d, s, g, o, k) {
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
    this.psw = function (r, p, f, m, l, a, q, d, t, g, s, o, k) {
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
    this.ond = function (r, p, f, m, l, a, q, d, t, g, s, o, k) {
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
    this.kqm = function (r, m, t, k, j, q, p, n, c, d, u, b, z, s) {
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
    this.bwb = function (n, g, d, a, k, b, l, m, f) {
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
    this.elf = function (o, j, f, a, l, c, n, b, m, g, p) {
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
    this.flx = function (p, d, l, k, o, m, f, q, r, g, n, c) {
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
    this.hct = function (r, k, g, b, n, q, m, d, f, p, a, o, j, s) {
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
    this.jbt = function (n, g, d, a, k, l, b, m, f, o) {
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
    this.pmx = function (l, g, d, c, j, a, k, f, m) {
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

function dzq() {
    this.parent = null;
    this.context2D = null;
    this.ciq = null;
    this.tvv = null;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.jri = true;
    this.rip = false;
    this.jbf = function (a, d, c) {
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
                this.ciq = document.createElement("canvas");
                this.ciq.width = this.width;
                this.ciq.height = this.height;
                this.context2D = this.ciq.getContext("2d");
                if (c) {
                    this.tvv = c
                }
            }
            this.rip = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.cch = function (a) {
        try {
            this.x = a.x || 0;
            this.y = a.y || 0;
            this.width = a.width || 0;
            this.height = a.height || 0;
            if (this.ciq) {
                this.ciq.width = this.width;
                this.ciq.height = this.height
            }
            this.rip = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.whj = function (a) {};
    this.ilm = function (a) {};
    this.aco = function (a, b) {
        this.jri = a;
        if (b && b === true) {
            this.parent.cxx(this.x, this.y, this.width, this.height)
        }
    };
    this.bbd = function () {
        return (this.jri && !this.rip)
    };
    this.cxx = function () {}
}

function rkc() {
    this.ljv = null;
    this.xfh = null;
    this.qvl = -1;
    this.vvm = -1;
    this.yev = false;
    this.xpa = false;
    this.cez = false;
    this.umr = 0;
    this.ycu = 0;
    var a = 200;
    this.jbf = function (c, f, d, b, e) {
        this.ljv = b;
        this.xfh = e;
        rkc.prototype.jbf.call(this, c, f, d)
    };
    this.aor = function (b, d, c) {
        this.yev = b;
        c = (c === false) ? false : true;
        if (d && d === true && this.bbd()) {
            this.parent.cxx(this.x, this.y, this.width, this.height)
        }
        if (this.yev === true && c === true) {
            clearTimeout(this.umr);
            this.umr = setTimeout(this.ioy, a)
        }
    };
    this.oru = function () {
        return this.yev
    };
    this.slz = function (b, c) {
        this.cez = b;
        c = (c === false) ? false : true;
        clearTimeout(this.ycu);
        if (this.cez === true && c === true) {
            this.ycu = setTimeout(this.pmr, a)
        }
    };
    this.yzr = function () {
        return this.cez
    };
    this.gtw = function (b, c) {
        this.xfh = b;
        if (c && c === true && this.bbd()) {
            this.parent.cxx(this.x, this.y, this.width, this.height)
        }
    };
    this.giu = function (b) {
        this.xpa = b
    };
    this.ozi = function () {
        return this.xpa
    };
    this.liq = function () {};
    this.pmr = function () {};
    this.ioy = function () {}
}
rkc.prototype = new dzq;

function ilo() {
    var a = this;
    this.zky = null;
    this.value = "";
    this.vpy = false;
    this.acq = "round";
    this.ojz = null;
    this.nio = "bold";
    this.prw = null;
    this.gbn = null;
    this.npv = null;
    this.wuq = null;
    this.xwc = null;
    this.tow = 0;
    this.and = 6;
    this.eub = -2;
    this.eke = 2;
    this.ion = -4;
    this.occ = 8;
    this.gky = 26;
    this.eph = 0;
    this.hti = 1;
    this.psa = 0;
    this.gwi = 0;
    this.cnr = -1;
    this.cfi = 10;
    this.aqv = 0;
    this.mpl = 0;
    this.rxf = false;
    this.mzs = -1;
    this.lbi = true;
    this.jbf = function (d, g, e, c, b, f) {
        ilo.prototype.jbf.call(this, d, g, e, c, f);
        this.zky = b;
        if (this.ljv) {
            this.tow = Math.round(this.ljv.height / 2)
        }
    };
    this.whj = function (b) {
        try {
            this.acq = b.dyl;
            this.ojz = b.font;
            this.nio = b.cvw;
            this.prw = b.backgroundColor;
            this.gbn = b.bwp;
            this.npv = b.hij;
            this.wuq = b.wgr;
            if (b.borderColor && b.tmq) {
                this.xwc = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.xwc.addColorStop(0, b.borderColor);
                this.xwc.addColorStop(1, b.tmq)
            } else {
                this.xwc = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.ilm = function (b) {
        try {
            this.gky = b.avl;
            this.eph = b.iwv;
            this.and = b.fse;
            this.eub = b.dni;
            this.eke = b.pmd;
            this.ion = b.map;
            this.occ = b.mov;
            this.hti = b.lbt
        } catch (c) {
            console.error(c)
        }
    };
    this.oxd = function () {
        if (this.tel()) {
            clearInterval(this.mzs);
            this.mzs = -1
        }
        this.lbi = false;
        this.mzs = setInterval(this.aml, 400)
    };
    this.pom = function () {
        this.lbi = true;
        clearInterval(this.mzs);
        this.mzs = -1;
        this.kak(false)
    };
    this.kak = function (b, c) {
        this.rxf = b;
        c = (c === false) ? false : true;
        if (c === true && this.bbd() === true) {
            this.parent.cxx(this.x, this.y, this.width, this.height)
        }
    };
    this.tel = function () {
        return (this.mzs >= 0)
    };
    this.ahc = function (b, c) {
        this.value = b;
        if (c && c === true && this.bbd()) {
            this.parent.cxx(this.x, this.y, this.width, this.height)
        }
    };
    this.hvf = function (b) {
        this.psa = Math.round(b / this.cfi);
        this.aqv = 0;
        this.mpl = 0;
        this.gwi = new Date().getTime();
        this.cnr = setTimeout(this.smt, this.psa)
    };
    this.afv = function () {
        if (a.cnr >= 0) {
            clearTimeout(a.cnr);
            a.cnr = -1
        }
        a.aqv = 0;
        a.ioy()
    };
    this.kgy = function () {
        if (a.cnr >= 0) {
            clearInterval(a.cnr);
            a.cnr = -1
        }
        a.aqv = 1;
        a.ioy()
    };
    this.smt = function () {
        var b = 0,
            c = new Date().getTime();
        a.mpl += 1;
        if (a.mpl < a.cfi) {
            a.aqv += 1 / a.cfi;
            a.parent.cxx(a.x, a.y, a.width, a.height);
            b = a.psa + (a.mpl * a.psa - (c - a.gwi));
            a.cnr = setTimeout(a.smt, b)
        } else {
            a.kgy()
        }
    };
    this.cxx = function () {
        if (!this.bbd()) {
            return
        }
        var g = null,
            f = 0,
            c = 0,
            n = 0,
            k = 0,
            l = this.width / 2 - this.hti,
            d = (this.acq === "roundedT" || this.acq === "roundedL") ? this.occ : 0,
            b = (this.acq === "roundedT" || this.acq === "roundedR") ? this.occ : 0,
            o = (this.acq === "roundedB" || this.acq === "roundedR") ? this.occ : 0,
            q = (this.acq === "roundedB" || this.acq === "roundedL") ? this.occ : 0,
            e = 1,
            m = String(this.value),
            p = this.context2D;
        p.save();
        p.textAlign = "center";
        p.textBaseline = "bottom";
        if (this.rxf || this.aqv >= 1) {
            if (this.acq === "round") {
                bmx.suj.pmx(p, this.x + this.width / 2, this.y + this.height / 2, l, this.gbn, 1, this.xwc, this.hti, 1)
            } else {
                if (this.acq === "rect") {
                    bmx.suj.bwb(p, this.x, this.y, this.width, this.height, this.occ, this.gbn, this.xwc, this.hti)
                } else {
                    if (this.acq === "roundedT" || this.acq === "roundedB" || this.acq === "roundedR" || this.acq === "roundedL") {
                        bmx.suj.hct(p, this.x, this.y, this.width, this.height, d, b, o, q, this.gbn, 1, this.xwc, this.hti, 1)
                    }
                }
            }
            if (this.zky || this.ljv) {
                if (this.oru()) {
                    p.drawImage((this.zky) ? this.zky : this.ljv, 0, this.tow, this.ljv.width, this.tow, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage((this.zky) ? this.zky : this.ljv, 0, 0, this.ljv.width, this.tow, this.x, this.y, this.width, this.height)
                }
            }
        } else {
            if (this.vpy && this.ozi() === false) {
                p.globalAlpha = 0.5
            }
            if (this.aqv > 0) {
                if (this.acq === "round") {
                    bmx.suj.pmx(p, this.x + this.width / 2, this.y + this.height / 2, l, this.prw, 1 - this.mpl / this.cfi, this.xwc, this.hti, 1);
                    bmx.suj.pmx(p, this.x + this.width / 2, this.y + this.height / 2, l, this.gbn, this.mpl / this.cfi)
                } else {
                    if (this.acq === "rect") {
                        mph = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                        mph.addColorStop(1 - this.aqv, this.prw);
                        mph.addColorStop(1 - this.aqv, this.gbn);
                        bmx.suj.elf(p, this.x, this.y, this.width, this.height, this.occ, mph, 1, this.xwc, this.hti, 1)
                    } else {
                        if (this.acq === "roundedT" || this.acq === "roundedB" || this.acq === "roundedR" || this.acq === "roundedL") {
                            mph = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                            mph.addColorStop(1 - this.aqv, this.prw);
                            mph.addColorStop(1 - this.aqv, this.gbn);
                            bmx.suj.hct(p, this.x, this.y, this.width, this.height, d, b, o, q, mph, 1, this.xwc, this.hti, 1)
                        }
                    }
                }
            } else {
                if (this.acq === "round") {
                    bmx.suj.pmx(p, this.x + this.width / 2, this.y + this.height / 2, l, this.prw, 1, this.xwc, this.hti, 1)
                } else {
                    if (this.acq === "rect") {
                        bmx.suj.bwb(p, this.x, this.y, this.width, this.height, this.occ, this.prw, this.xwc, this.hti)
                    } else {
                        if (this.acq === "roundedT" || this.acq === "roundedB" || this.acq === "roundedR" || this.acq === "roundedL") {
                            bmx.suj.hct(p, this.x, this.y, this.width, this.height, d, b, o, q, this.prw, 1, this.xwc, this.hti, 1)
                        }
                    }
                }
            }
            if (this.ljv) {
                if (this.oru()) {
                    p.drawImage(this.ljv, 0, this.tow, this.ljv.width, this.tow, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage(this.ljv, 0, 0, this.ljv.width, this.tow, this.x, this.y, this.width, this.height)
                }
            }
        }
        if (m && this.eph > 0) {
            f = (this.oru()) ? 2 : 0;
            c = this.eph;
            p.font = this.nio + " " + c + "px " + this.ojz;
            p.fillStyle = this.wuq;
            n = p.measureText(m).width;
            if (n > this.width - 2 * this.and) {
                e = ((this.width - 2 * this.and) / n);
                c = Math.round(e * c) - 1;
                p.font = this.nio + " " + c + "px " + this.ojz
            }
            if (c > this.height / 2 - this.and) {
                e = ((this.height / 2 - this.and) / c);
                c = Math.round(e * c) - 1;
                p.font = this.nio + " " + c + "px " + this.ojz
            }
            k = (this.height / 2 - c) / 2;
            k += c;
            p.fillText(m, this.x + this.width / 2 + this.eub, this.y - this.ion + k + f)
        }
        if (this.xfh && this.xfh != "" && this.gky > 0) {
            g = this.xfh.split("|");
            f = (this.oru()) ? 2 : 0;
            c = this.gky;
            p.font = this.nio + " " + c + "px " + this.ojz;
            p.fillStyle = this.npv;
            for (var j = 0; j < g.length; j++) {
                n = (p.measureText(g[j]).width > n) ? p.measureText(g[j]).width : n
            }
            if (n > this.width - 2 * this.and) {
                e = ((this.width - 2 * this.and) / n);
                c = Math.round(e * c) - 1;
                p.font = this.nio + " " + c + "px " + this.ojz
            }
            if (this.eph > 0) {
                if (c * g.length > this.height / 2 - this.and) {
                    e = ((this.height / 2 - this.and) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.nio + " " + c + "px " + this.ojz
                }
                k = this.height / 2 + (this.height / 2 - c * g.length) / 2
            } else {
                if (c * g.length > this.height - 2 * this.and) {
                    e = ((this.height - 2 * this.and) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.nio + " " + c + "px " + this.ojz
                }
                k = (this.height - c * g.length) / 2
            }
            k += c;
            for (var j = 0; j < g.length; j++) {
                p.fillText(g[j], this.x + this.width / 2 + this.eub, this.y - this.eke + k + f);
                k += c
            }
        }
        p.restore();
        if (this.tvv && this.ciq) {
            this.tvv.drawImage(this.ciq, this.x, this.y)
        }
    };
    this.aml = function () {
        if (!a.lbi) {
            a.kak(!a.rxf)
        }
    };
    this.pmr = function () {
        a.cez = false
    };
    this.ioy = function () {
        a.yev = false;
        if (a.bbd()) {
            a.parent.cxx(a.x, a.y, a.width, a.height)
        }
    }
}
ilo.prototype = new rkc;

function emi() {
    this.pmz = 0;
    this.dsx = [];
    this.jbf = function (a, c, b) {
        emi.prototype.jbf.call(this, a, c, b);
        this.pmz = 0;
        this.dsx = []
    };
    this.jey = function (a, b) {
        if (b && b === true) {
            this.dsx.unshift(a)
        } else {
            this.dsx.push(a)
        }
    };
    this.ndi = function (a) {
        if (a && a === true) {
            this.dsx.shift()
        } else {
            this.dsx.pop()
        }
    };
    this.vjs = function (a) {
        this.pmz = a
    };
    this.mhy = function () {
        return this.pmz
    };
    this.cxx = function () {
        if (!this.bbd() || !this.parent.nyy()) {
            return
        }
        if (this.pmz < this.dsx.length) {
            this.dsx[this.pmz].cxx()
        }
        try {
            if (this.tvv && this.ciq) {
                this.tvv.drawImage(this.ciq, this.x, this.y)
            }
        } catch (a) {}
    }
}
emi.prototype = new dzq;

function tld() {
    var a = this;
    this.bco = null;
    this.pmz = 0;
    this.dsx = [];
    this.prw = null;
    this.atj = null;
    this.ccg = null;
    this.ocb = new ljp();
    this.jbf = function (b, d, c) {
        tld.prototype.jbf.call(this, b, d, c);
        this.jri = false;
        this.pmz = 0;
        this.dsx = [];
        this.lai()
    };
    this.lai = function () {
        this.bco = new klf();
        this.bco.jbf();
        this.bco.pvt("buttons")
    };
    this.ilm = function (f) {
        try {
            var d = this.bco.qvh("buttons"),
                c = 0,
                b = d.length;
            this.ocb = f.txw;
            for (; c < b; c++) {
                d[c].ilm(f.qjl)
            }
            this.bco.psl("return", "#cch", [f.eqr]);
            this.bco.psl("page", "#cch", [f.tfv]);
            this.bco.psl("prev", "#cch", [f.dqu]);
            this.bco.psl("next", "#cch", [f.rhf])
        } catch (g) {
            console.error(g)
        }
    };
    this.whj = function (d) {
        try {
            var f = this.bco.qvh("buttons");
            this.prw = d.backgroundColor;
            this.atj = d.lxh;
            this.ccg = d.oyt;
            for (var c = 0, b = f.length; c < b; c++) {
                f[c].whj((this.parent.tiq.zfw === false) ? d.son : (this.parent.usz === bmx.tiq.nzl) ? d.rks : d.rkm)
            }
        } catch (g) {
            console.error(g)
        }
    };
    this.nyc = function (m, l) {
        var k = this.bco.qvh("buttons"),
            g = this.bco.uxx("return"),
            c = m - this.x,
            n = l - this.y;
        for (var e = 0, f = k.length; e < f; e++) {
            var b = k[e];
            if (c >= b.x && c <= b.x + b.width && n >= b.y && n <= b.y + b.height && b.bbd() == true) {
                if (b.ozi() && !b.yzr()) {
                    if (b != g) {
                        b.aor(true, true)
                    }
                    this.parent.whm.mvq("btn");
                    this.parent.whm.lry("btn");
                    b.liq();
                    for (var d = 0; d < f; d++) {
                        k[d].slz(true)
                    }
                    return true
                }
            }
        }
        return false
    };
    this.wga = function () {
        var e = this.bco.qvh("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.oru() === true) {
                c.aor(false, true);
                return true
            }
        }
        return false
    };
    this.lkm = function (k) {
        var g = this.bco.qvh("buttons"),
            c = this.bco.uxx("return");
        for (var f = 0, b = g.length; f < b; f++) {
            var d = g[f];
            if (k == d.qvl) {
                if (d.ozi() && !d.yzr()) {
                    if (d != c) {
                        d.aor(true, true)
                    }
                    this.parent.whm.mvq("btn");
                    this.parent.whm.lry("btn");
                    d.liq();
                    for (var e = 0; e < b; e++) {
                        g[e].slz(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.ccd = function () {
        var e = this.bco.qvh("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.oru() === true) {
                c.aor(false, true);
                return true
            }
        }
        return false
    };
    this.jey = function (b, c) {
        if (c && c === true) {
            this.dsx.unshift(b);
            this.pmz++
        } else {
            this.dsx.push(b)
        }
    };
    this.ndi = function (b) {
        if (b && b === true) {
            this.dsx.shift();
            this.pmz--
        } else {
            this.dsx.pop()
        }
    };
    this.eap = function () {
        return this.dsx.length
    };
    this.lqg = function (e, c, b) {
        var d = (this.parent.tiq.zfw === false) ? c.son : (this.parent.usz === bmx.tiq.nzl) ? c.rks : c.rkm;
        if (this.parent.imi === false) {
            this.bco.jqp("return", this.nda(e.eqr, this.parent.language.ret, (this.parent.tiq.yep === false) ? b : this.parent.whm.wez("btn_re"), this.lqv, (this.parent.unz.dsz) ? this.parent.unz.dsz : null, e.qjl, d), ["buttons"]);
            this.bco.jqp("page", this.nda(e.tfv, (this.pmz + 1) + "/" + this.dsx.length, b, this.uvm, null, e.qjl, d), ["buttons"]);
            this.bco.jqp("prev", this.nda(e.dqu, this.parent.language.ydg, (this.parent.tiq.yep === false) ? b : this.parent.whm.wez("btn_pr"), this.ngk, (this.parent.unz.lbx) ? this.parent.unz.lbx : null, e.qjl, d), ["buttons"]);
            this.bco.jqp("next", this.nda(e.rhf, this.parent.language.zjf, (this.parent.tiq.yep === false) ? b : this.parent.whm.wez("btn_ne"), this.uvm, (this.parent.unz.wqz) ? this.parent.unz.wqz : null, e.qjl, d), ["buttons"])
        }
    };
    this.nda = function (g, k, b, j, d, f, e) {
        var c = new ilo();
        c.jbf(g, this.context2D, null, b, null, k);
        c.parent = this;
        c.liq = j;
        c.ilm(f);
        c.whj(e);
        if (d) {
            c.qvl = d.cpu
        }
        return c
    };
    this.cxx = function (l, j, m, e) {
        if (!this.bbd() || !this.parent.nyy()) {
            return
        }
        var b = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = null,
            g = this.bco.qvh("buttons"),
            d = null;
        if (this.parent.tiq.zfw === false) {
            d = this.parent.whm.wez("btn_back")
        } else {
            if (this.parent.usz === bmx.tiq.nzl) {
                d = (this.parent.whm.wez("h_right" + this.pmz) != null) ? this.parent.whm.wez("h_right" + this.pmz) : this.parent.whm.wez("h_right")
            } else {
                d = (this.parent.whm.wez("h_left" + this.pmz) != null) ? this.parent.whm.wez("h_left" + this.pmz) : this.parent.whm.wez("h_left")
            }
        }
        n.save();
        if (b) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        if (this.pmz >= 0 && this.pmz < this.dsx.length) {
            this.dsx[this.pmz].cxx()
        }
        if (d) {
            k = n.createLinearGradient(this.ocb.x, this.ocb.y, this.ocb.x + this.ocb.width, this.ocb.y);
            k.addColorStop(0.2, this.atj);
            k.addColorStop(1, this.ccg);
            n.fillStyle = k;
            n.save();
            if (this.parent.tiq.zfw === false) {
                if (this.parent.usz === bmx.tiq.agk) {
                    n.translate(this.ocb.width / 2, this.ocb.height / 2);
                    n.rotate(Math.PI);
                    n.translate(-this.ocb.width / 2, -this.ocb.height / 2)
                }
                n.fillRect(this.ocb.x, this.ocb.y, this.ocb.width, this.ocb.height)
            }
            n.drawImage(d, this.ocb.x, this.ocb.y, this.ocb.width, this.ocb.height);
            n.restore()
        } else {
            if (this.prw != null) {
                n.fillStyle = this.prw;
                n.fillRect(this.ocb.x, this.ocb.y, this.ocb.width, this.ocb.height)
            }
        }
        for (var c = 0, f = g.length; c < f; c++) {
            g[c].cxx()
        }
        n.restore();
        if (this.tvv && this.ciq) {
            if (b) {
                this.tvv.drawImage(this.ciq, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.tvv.drawImage(this.ciq, this.x, this.y)
            }
        }
    };
    this.xcc = function (f, g) {
        var e = this.bco.uxx("page"),
            c = this.bco.uxx("return"),
            b = this.bco.uxx("next"),
            d = this.bco.uxx("prev");
        if (e != null) {
            e.gtw((this.pmz + 1) + "/" + this.dsx.length)
        }
        if (c != null) {
            c.aco(f)
        }
        if (b != null && d != null && e != null) {
            if (f) {
                if (this.dsx.length > 1) {
                    b.aco(f);
                    d.aco(f);
                    e.aco(f)
                } else {
                    b.aco(false);
                    d.aco(false);
                    e.aco(false)
                }
            } else {
                b.aco(f);
                d.aco(f);
                e.aco(f)
            }
        }
        if (g && g === true) {
            this.cxx()
        }
    };
    this.xfb = function () {
        this.pmz = 0;
        this.xcc(true);
        this.aco(true, true)
    };
    this.hme = function () {
        this.xcc(false);
        this.aco(false, true)
    };
    this.hdq = function () {
        var d = this.bco.uxx("page"),
            b = this.bco.uxx("next"),
            c = this.bco.uxx("prev");
        this.pmz = (this.pmz < this.dsx.length) ? this.pmz : this.dsx.length - 1;
        this.pmz = (this.pmz < 0) ? 0 : this.pmz;
        d.gtw((this.pmz + 1) + "/" + this.dsx.length, true);
        if (this.dsx.length == 1) {
            b.aco(false);
            c.aco(false);
            d.aco(false)
        } else {
            b.aco(true);
            c.aco(true);
            d.aco(true)
        }
    };
    this.rsc = function (c) {
        var e = this.bco.qvh("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            e[d].giu(c)
        }
    };
    this.lqv = function () {
        a.parent.yaw()
    };
    this.uvm = function () {
        var b = a.bco.uxx("page");
        if (a.pmz < a.dsx.length - 1) {
            a.pmz++
        } else {
            a.pmz = 0
        }
        if (b) {
            b.gtw((a.pmz + 1) + "/" + a.dsx.length, false)
        }
        a.cxx()
    };
    this.ngk = function () {
        var b = a.bco.uxx("page");
        if (a.pmz > 0) {
            a.pmz--
        } else {
            a.pmz = a.dsx.length - 1
        }
        if (b) {
            b.gtw((a.pmz + 1) + "/" + a.dsx.length, false)
        }
        a.cxx()
    }
}
tld.prototype = new dzq;

function dae() {
    this.ljv = new Image();
    this.bxf = null;
    this.upu = [];
    this.hgl = [];
    this.uru = null;
    this.ojz = null;
    this.nio = "bold";
    this.myl = null;
    this.npv = null;
    this.fjb = null;
    this.cvr = 0;
    this.nkh = [];
    this.amh = null;
    this.tvy = 40;
    this.dpi = 18;
    this.nyg = 1;
    this.jbf = function (b, d, c, a) {
        this.ljv = a;
        this.upu = [];
        this.nkh = [];
        dae.prototype.jbf.call(this, b, d, c)
    };
    this.ilm = function (a) {
        try {
            this.amh = a.oxh;
            this.nkh = a.aza;
            this.dpi = a.fontSize;
            this.tvy = a.bos;
            this.nyg = a.lineWidth
        } catch (b) {
            console.error(b)
        }
    };
    this.whj = function (a) {
        try {
            this.uru = a.cnq;
            this.ojz = a.font;
            this.nio = a.cvw;
            this.myl = a.syb;
            this.npv = a.hij;
            this.fjb = a.mtf
        } catch (b) {
            console.error(b)
        }
    };
    this.cxx = function () {
        if (!this.bbd()) {
            return
        }
        var b = this.context2D;
        b.save();
        b.fillStyle = this.npv;
        if (this.myl) {
            b.strokeStyle = this.myl
        }
        b.lineJoin = "round";
        b.lineCap = "round";
        b.lineWidth = this.nyg;
        b.font = this.nio + " " + this.dpi + "px " + this.ojz;
        b.textBaseline = "bottom";
        b.textAlign = "center";
        b.drawImage(this.ljv, 0, 0);
        if ((this.height - this.ljv.height) > 0) {
            var a = this.parent.ocb;
            b.drawImage(this.ljv, a.x, a.y, a.width, this.ljv.height - a.y, a.x, a.y, a.width, a.height)
        }
        if (this.bxf && this.amh) {
            bmx.suj.ibm(b, this.bxf, this.fjb, this.amh.x, this.amh.y, this.amh.width, this.amh.height, this.uru, this.tvy, this.nio)
        }
        for (var c = 0; c < this.upu.length; c++) {
            this.kqm(this.upu[c], this.nkh[c], this.dpi, this.ojz)
        }
        b.restore();
        if (this.tvv && this.ciq) {
            this.tvv.drawImage(this.ciq, this.x, this.y)
        }
    };
    this.vkw = function (j, f, g, d) {
        var b = this.context2D,
            c = 0;
        this.hgl = [];
        b.save();
        b.font = this.nio + " " + g + "px " + d;
        this.kpr(b, g, j, f, d);
        for (var e = 0, a = this.hgl.length; e < a; e++) {
            c = (f.height + this.cvr) / (this.hgl.length + 1) * (e + 1);
            b.fillText(this.hgl[e], (f.x), f.y + c);
            if (this.myl != null && b.lineWidth >= 1) {
                b.strokeText(this.hgl[e], (f.x), f.y + c)
            }
        }
        b.restore()
    };
    this.kqm = function (g, e, f, c) {
        var a = this.context2D,
            b = 0;
        this.hgl = [];
        a.save();
        a.font = this.nio + " " + f + "px " + c;
        this.kpr(a, f, g, e, c);
        for (var d = 0; d < this.hgl.length; d++) {
            b = (e.height + this.cvr) / (this.hgl.length + 1) * (d + 1);
            a.fillText(this.hgl[d], (e.x + e.width / 2), e.y + b);
            if (this.myl != null && a.lineWidth >= 1) {
                a.strokeText(this.hgl[d], (e.x + e.width / 2), e.y + b)
            }
        }
        a.restore()
    };
    this.kpr = function (m, o, l, g, b) {
        var a = 1,
            k = 0,
            j = "",
            f = 0,
            d = 0,
            c = 0,
            n = 0;
        n = m.measureText(l).width / g.width;
        n = (n >= Math.round(n)) ? Math.round(n) + 1 : Math.round(n);
        this.cvr = o;
        if (this.cvr * n > g.height) {
            a = g.height / (this.cvr * n);
            this.cvr = Math.round(a * this.cvr) - 1;
            m.font = this.nio + " " + this.cvr + "px " + b;
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
                this.hgl[d] = l.substring(c, l.length)
            } else {
                if (l.charAt(e) == "|") {
                    this.hgl[d] = l.substring(c, e);
                    d++;
                    c = e + 1;
                    j = l.substring(f + 1, e)
                } else {
                    if (k >= g.width) {
                        this.hgl[d] = l.substring(c, f);
                        d++;
                        c = f + 1;
                        j = l.substring(f + 1, e)
                    }
                }
            }
        }
    }
}
dae.prototype = new dzq;

function shu() {
    var a = this;
    this.ljv = new Image();
    this.eok = "";
    this.hlq = "";
    this.yte = -1;
    this.lic = 0;
    this.gtc = 0;
    this.jth = 5000;
    this.ojz = null;
    this.nio = "bold";
    this.npv = null;
    this.prw = null;
    this.iff = null;
    this.occ = 0;
    this.qow = 0;
    this.and = 0;
    this.hti = 0;
    this.fph = 0;
    this.dpi = 0;
    this.wym = null;
    this.xpy = 0;
    this.pac = [];
    this.mag = 0;
    this.xpr = true;
    this.dwh = 0;
    this.ilm = function (b) {
        try {
            this.dpi = b.fontSize;
            this.fph = b.kqj;
            this.occ = b.mov;
            this.qow = b.vjm;
            this.and = b.fse;
            this.hti = b.lbt
        } catch (c) {
            console.error(c)
        }
    };
    this.whj = function (b) {
        try {
            this.ojz = b.font;
            this.nio = b.cvw;
            this.prw = b.backgroundColor;
            this.npv = b.hij;
            this.iff = b.borderColor
        } catch (c) {
            console.error(c)
        }
    };
    this.acd = function (e, c, d, b) {
        this.eok = e;
        this.hlq = c;
        this.yte = d;
        this.lic = b;
        this.xpr = true;
        clearTimeout(this.dwh);
        if (this.bbd() === true) {
            this.parent.cxx(this.x, this.y, this.width, this.height)
        }
    };
    this.mlw = function (b, c) {
        this.eok = b;
        this.hlq = undefined;
        this.xpr = c;
        if (this.xpr) {
            clearTimeout(this.dwh)
        }
        if (this.bbd() === true) {
            this.parent.cxx(this.x, this.y, this.width, this.height)
        }
    };
    this.dfg = function () {
        this.eok = "";
        this.hlq = undefined;
        this.xpr = true;
        clearTimeout(this.dwh);
        if (this.bbd() === true) {
            this.parent.cxx(this.x, this.y, this.width, this.height)
        }
    };
    this.xxm = function (b, c) {
        this.xpy = 0;
        this.mag = b;
        this.xpr = false;
        if (c && c > 0) {
            this.dwh = setTimeout(this.vjf, c)
        } else {
            this.dwh = setTimeout(this.vjf, this.jth)
        }
    };
    this.nuo = function (b) {
        this.xpy = 0;
        this.mag = b;
        if (this.xpr) {
            this.mlw(this.pac[this.mag][this.xpy], false)
        }
        this.xpr = false;
        this.dwh = setTimeout(this.vjf, this.jth)
    };
    this.yge = function () {
        this.xpr = false;
        this.dwh = setTimeout(this.vjf, this.jth)
    };
    this.hrk = function () {
        this.xpr = true;
        clearTimeout(this.dwh)
    };
    this.yaj = function () {
        return this.xpr
    };
    this.vjf = function () {
        if (!a.xpr) {
            a.xpy = (a.pac[a.mag][a.xpy + 1] != undefined) ? a.xpy + 1 : 0;
            a.dwh = setTimeout(a.vjf, a.jth);
            a.mlw(a.pac[a.mag][a.xpy], a.xpr)
        }
    };
    this.uwr = function (b) {
        this.pac[b] = []
    };
    this.wbc = function (d, b) {
        for (var c = 0; c < d.length; c++) {
            this.pac[b][c] = d[c]
        }
    };
    this.sql = function (b) {
        this.wym = b
    };
    this.cxx = function () {
        if (!this.bbd()) {
            return
        }
        var o = this.context2D,
            m = this.dpi,
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
            q = (this.iff && this.hti) ? this.and + this.hti : this.and;
        o.save();
        if (this.prw) {
            bmx.suj.bwb(o, this.x, this.y, this.width, this.height, this.occ, this.prw, this.iff, this.hti)
        } else {
            if (this.wym) {
                o.putImageData(this.wym, this.x, this.y)
            }
        }
        o.lineJoin = "round";
        o.lineCap = "round";
        o.fillStyle = this.npv;
        o.font = this.nio + " " + m + "px " + this.ojz;
        o.textBaseline = "bottom";
        o.textAlign = "center";
        l = o.measureText(this.eok).width;
        b += l;
        n = o.measureText("WW").width;
        if (this.hlq != undefined && this.yte >= 0) {
            j = o.measureText(this.hlq).width;
            b += j;
            b += this.lic * (this.ljv.width + this.qow);
            if (this.lic % 2 != 0) {
                s = this.x + (this.width) / 2 - (this.lic / 2) * (this.ljv.width + this.qow);
                x = s - n;
                e = s + (this.lic) * (this.ljv.width + this.qow) + n
            } else {
                s = this.x + (this.width) / 2 - (this.lic / 2) * (this.ljv.width) - (this.lic - 1) / 2 * this.qow;
                x = s - n;
                e = s + (this.lic) * (this.ljv.width) + (this.lic - 1) * this.qow + n
            }
            for (var u = 0; u < this.lic; u++) {
                o.drawImage(this.ljv, 0, this.gtc * this.yte, this.ljv.width, this.gtc, s + (u * (this.qow + this.ljv.width)), this.y + ((this.height - this.gtc) / 2), this.ljv.width, this.gtc)
            }
            o.textAlign = "right";
            o.fillText(this.eok, x, this.y + m + this.fph);
            o.textAlign = "left";
            o.fillText(this.hlq, e, this.y + m + this.fph)
        } else {
            if (this.eok != undefined) {
                do {
                    if (g.length > 1) {
                        m -= 2;
                        o.font = this.nio + " " + m + "px " + this.ojz
                    }
                    g = [];
                    d = "";
                    v = 0;
                    z = 0;
                    t = 0;
                    for (var p = t; p < this.eok.length; p++) {
                        d += this.eok.charAt(p);
                        k = o.measureText(d).width;
                        if ((this.eok.charAt(p) == " ") || (this.eok.charAt(p) == "|")) {
                            v = p
                        }
                        if (p == this.eok.length - 1) {
                            g[z] = this.eok.substring(t, this.eok.length)
                        } else {
                            if (this.eok.charAt(p) == "|") {
                                g[z] = this.eok.substring(t, v);
                                z++;
                                t = v + 1;
                                d = this.eok.substring(v + 1, p)
                            } else {
                                if (k >= this.width - 2 * q) {
                                    g[z] = this.eok.substring(t, v);
                                    z++;
                                    t = v + 1;
                                    d = this.eok.substring(v + 1, p)
                                }
                            }
                        }
                    }
                } while (g.length > 2);
                if (g.length > 1 && m == this.dpi) {
                    o.font = this.nio + " " + (m - 3) + "px " + this.ojz;
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
shu.prototype = new dzq;

function qnp() {
    this.vpa = null;
    this.kgp = null;
    this.wye = null;
    this.mvv = false;
    this.xpa = false;
    this.rdv = true;
    this.rqe = false;
    this.yzb = false;
    this.pwg = 0;
    this.hcg = 0;
    this.zue = 0;
    this.svi = "";
    this.jaa = "";
    this.atj = null;
    this.ccg = null;
    this.ojz = "arial";
    this.nio = "bold";
    this.jsp = "arial";
    this.cso = "rgb(0,0,200)";
    this.orw = "rgb(255,255,255)";
    this.lpu = "rgb(0,0,150)";
    this.prw = "rgb(220,240,255)";
    this.odr = "rgb(130,220,255)";
    this.wvh = "rgb(130,190,255)";
    this.npv = "rgb(255,255,255)";
    this.wkg = "rgb(130,190,255)";
    this.doi = "rgb(100,160,255)";
    this.xau = "rgb(255,255,255)";
    this.ocb = new ljp();
    this.amh = null;
    this.hwj = null;
    this.fdf = null;
    this.fbf = null;
    this.fsu = null;
    this.ecz = null;
    this.dnc = null;
    this.neb = null;
    this.hti = 2;
    this.kqa = 3;
    this.lst = 10;
    this.fph = 3;
    this.eub = 5;
    this.bzm = 36;
    this.dpi = 30;
    this.pzc = 22;
    this.jbf = function (a, c, b) {
        qnp.prototype.jbf.call(this, a, c, b);
        this.rqe = bmx.vbp.value37
    };
    this.hyf = function (b) {
        try {
            var a = (bmx.vbp.value37) ? b.wgj : b.gvx;
            this.amh = b.oxh;
            this.hwj = b.abc;
            this.fdf = b.qia;
            this.fbf = b.ziu;
            this.fsu = b.kne;
            this.ecz = b.tpv;
            this.ocb = b.txw;
            this.bzm = b.ktw;
            this.dpi = b.fontSize;
            this.pzc = b.ihl;
            this.fph = b.kqj;
            this.eub = b.dni;
            this.hti = b.lbt;
            this.kqa = b.sxw;
            this.lst = b.brh;
            if (bmx.vbp.value36) {
                this.jaa = this.parent.ewo(this.parent.language.fpm)
            } else {
                if (bmx.vbp.value37) {
                    this.jaa = this.parent.ewo(this.parent.language.xiv)
                }
            }
            this.vpa = [];
            this.kgp = this.nda(a.gud, this.parent.language.ret, this.parent.dxa, (this.parent.tiq.yep === false) ? this.parent.whm.wez("btn") : this.parent.whm.wez("btn_re"), b.qjl);
            this.vpa.push(this.kgp);
            if (bmx.vbp.value37) {
                this.wye = this.nda(a.eqr, this.parent.language.nqx, this.parent.yxx, (this.parent.tiq.yep === false) ? this.parent.whm.wez("btn") : this.parent.whm.wez("btn_e"), b.qjl);
                this.vpa.push(this.wye)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.ilm = function (b) {
        try {
            var a = (bmx.vbp.value37) ? b.wgj : b.gvx;
            this.amh = b.oxh;
            this.hwj = b.abc;
            this.fdf = b.qia;
            this.fbf = b.ziu;
            this.fsu = b.kne;
            this.ecz = b.tpv;
            this.ocb = b.txw;
            if (this.kgp) {
                this.kgp.cch(a.gud);
                this.kgp.ilm(b.qjl)
            }
            if (this.wye) {
                this.wye.cch(a.eqr);
                this.wye.ilm(b.qjl)
            }
            this.bzm = b.ktw;
            this.dpi = b.fontSize;
            this.pzc = b.ihl;
            this.fph = b.kqj;
            this.eub = b.dni;
            this.hti = b.lbt;
            this.kqa = b.sxw;
            this.lst = b.brh
        } catch (c) {
            console.error(c)
        }
    };
    this.whj = function (c) {
        try {
            this.ojz = c.font;
            this.nio = c.cvw;
            this.cso = c.hbx;
            this.orw = c.awj;
            this.lpu = c.hkr;
            this.prw = c.backgroundColor;
            this.odr = c.bhz;
            this.wvh = c.teg;
            this.npv = c.hij;
            this.wkg = c.pvx;
            this.doi = c.shn;
            this.xau = c.bbh;
            this.atj = c.lxh;
            this.ccg = c.oyt;
            for (var b = 0, a = this.vpa.length; b < a; b++) {
                this.vpa[b].whj((this.parent.tiq.zfw === true) ? c.rld : c.son)
            }
        } catch (d) {
            console.error(d)
        }
    };
    this.nyc = function (d, k) {
        var c = d - this.x,
            g = k - this.y;
        for (var f = 0, b = this.vpa.length; f < b; f++) {
            var a = this.vpa[f];
            if (c >= a.x && c <= a.x + a.width && g >= a.y && g <= a.y + a.height && a.bbd() === true) {
                if (a.ozi() === true && a.yzr() === false && this.rdv) {
                    a.aor(true, true);
                    this.parent.whm.mvq("btn");
                    this.parent.whm.lry("btn");
                    a.liq();
                    for (var e = 0; e < b; e++) {
                        this.vpa[e].slz(true)
                    }
                    return true
                }
            }
        }
        if (c >= this.ecz.x && c <= this.ecz.x + this.ecz.width && g >= this.ecz.y && g <= this.ecz.y + this.ecz.height && this.rqe && this.xpa) {
            this.qbf()
        }
        return true
    };
    this.wga = function () {};
    this.lkm = function () {};
    this.ccd = function () {};
    this.nda = function (d, f, e, a, c) {
        var b = new ilo();
        b.jbf(d, this.context2D, null, a, null, f);
        b.parent = this;
        b.liq = e;
        b.ilm(c);
        return b
    };
    this.rsc = function (c) {
        this.xpa = c;
        for (var b = 0, a = this.vpa.length; b < a; b++) {
            this.vpa[b].giu(c)
        }
    };
    this.qbf = function () {
        this.rdv = !this.rdv;
        this.parent.cxx()
    };
    this.kcq = function (d, a, c, b) {
        this.yzb = false;
        this.vhh = true;
        this.svi = this.zpb(b);
        this.pwg = d;
        this.hcg = a;
        this.zue = c;
        if (this.bbd()) {
            this.rsc(true);
            this.cxx()
        }
    };
    this.zpb = function (b) {
        var d = Math.floor(b / 3600000);
        b = b - d * 3600000;
        var a = Math.floor(b / 60000);
        b = b - a * 60000;
        var c = Math.floor(b / 1000);
        return this.zew(d) + ":" + this.zew(a) + ":" + this.zew(c)
    };
    this.zew = function (a) {
        if (a < 10) {
            return "0" + a
        }
        return a
    };
    this.ney = function (a, b) {
        this.yzb = a;
        if (b && b === true) {
            this.cxx()
        }
    };
    this.aco = function (a, b) {
        this.vhh = false;
        if (bmx.vbp.value37) {
            this.rdv = false
        }
        this.ney(a, false);
        qnp.prototype.aco.call(this, a, b)
    };
    this.cxx = function (j, f, k, d) {
        if (!this.bbd() || !this.parent.nyy()) {
            return
        }
        var a = (j != null && f != null && k != null && d != null),
            g = null,
            l = this.context2D,
            c = this.parent.whm.wez("btn_back");
        l.save();
        if (a) {
            l.beginPath();
            l.rect(j, f, k, d);
            l.closePath();
            l.clip()
        }
        l.fillStyle = this.prw;
        l.fillRect(0, 0, this.width, this.height);
        if (c) {
            g = l.createLinearGradient(this.ocb.x, this.ocb.y, this.ocb.x + this.ocb.width, this.ocb.y);
            g.addColorStop(0.2, this.atj);
            g.addColorStop(1, this.ccg);
            l.fillStyle = g;
            l.save();
            if (this.parent.usz === bmx.tiq.agk) {
                l.translate(this.ocb.width / 2, this.ocb.height / 2);
                l.rotate(Math.PI);
                l.translate(-this.ocb.width / 2, -this.ocb.height / 2)
            }
            l.fillRect(this.ocb.x, this.ocb.y, this.ocb.width, this.ocb.height);
            l.drawImage(c, this.ocb.x, this.ocb.y, this.ocb.width, this.ocb.height);
            l.restore()
        } else {
            if (this.parent.tiq.zfw === true) {
                bmx.suj.jbt(l, this.ocb.x, this.ocb.y, this.ocb.width, this.ocb.height, this.atj, 1)
            }
        }
        bmx.suj.bwb(l, this.amh.x, this.amh.y, this.amh.width, this.amh.height, 0, this.odr);
        bmx.suj.ibm(l, this.jaa, this.npv, this.amh.x, this.amh.y + this.fph, this.amh.width, this.amh.height, this.ojz, this.bzm, this.nio);
        bmx.suj.bwb(l, this.hwj.x, this.hwj.y, this.hwj.width, this.hwj.height, 0, this.odr);
        if (bmx.vbp.value36) {
            bmx.suj.psw(l, this.parent.ewo(this.parent.language.xeo), this.npv, this.hwj.x, this.hwj.y + this.fph, this.hwj.width, this.hwj.height, this.ojz, this.dpi, this.nio, this.eub)
        } else {
            if (bmx.vbp.value37) {
                bmx.suj.psw(l, this.parent.ewo(this.parent.language.mem), this.npv, this.hwj.x, this.hwj.y + this.fph, this.hwj.width, this.hwj.height, this.ojz, this.dpi, this.nio, this.eub)
            }
        }
        bmx.suj.bwb(l, this.fdf.x, this.fdf.y, this.fdf.width, this.fdf.height, 0, this.wvh);
        bmx.suj.psw(l, this.parent.ewo(this.parent.language.avu), this.npv, this.fdf.x, this.fdf.y + this.fph, this.fdf.width, this.fdf.height, this.ojz, this.dpi, this.nio, this.eub);
        bmx.suj.bwb(l, this.fbf.x, this.fbf.y, this.fbf.width, this.fbf.height, 0, this.odr);
        bmx.suj.psw(l, this.parent.ewo(this.parent.language.ser), this.npv, this.fbf.x, this.fbf.y + this.fph, this.fbf.width, this.fbf.height, this.ojz, this.dpi, this.nio, this.eub);
        if (this.rqe) {
            this.jbc(l)
        }
        if (this.vhh) {
            if (bmx.vbp.value36) {
                bmx.suj.ond(l, this.pwg, this.npv, this.hwj.x, this.hwj.y + this.fph, this.hwj.width, this.hwj.height, this.ojz, this.dpi, this.nio, this.eub)
            } else {
                if (bmx.vbp.value37) {
                    bmx.suj.ond(l, this.svi, this.npv, this.hwj.x, this.hwj.y + this.fph, this.hwj.width, this.hwj.height, this.ojz, this.dpi, this.nio, this.eub)
                }
            }
            bmx.suj.ond(l, this.parent.ait(this.hcg), this.npv, this.fdf.x, this.fdf.y + this.fph, this.fdf.width, this.fdf.height, this.ojz, this.dpi, this.nio, this.eub);
            bmx.suj.ond(l, this.parent.ait(this.zue), this.npv, this.fbf.x, this.fbf.y + this.fph, this.fbf.width, this.fbf.height, this.ojz, this.dpi, this.nio, this.eub)
        }
        for (var b = 0, e = this.vpa.length; b < e; b++) {
            this.vpa[b].cxx()
        }
        if (this.yzb) {
            bmx.suj.elf(l, this.fsu.x, this.fsu.y, this.fsu.width, this.fsu.height, this.kqa, this.cso, 0.3, this.lpu, this.hti, 1);
            bmx.suj.ibm(l, this.parent.ewo(this.parent.language.kgx), this.orw, this.fsu.x, this.fsu.y, this.fsu.width, this.fsu.height, this.ojz, this.dpi, this.nio)
        }
        l.restore();
        if (this.tvv && this.ciq) {
            if (a) {
                this.tvv.drawImage(this.ciq, j, f, k, d, this.x + j, this.y + f, k, d)
            } else {
                this.tvv.drawImage(this.ciq, this.x, this.y)
            }
        }
    };
    this.jbc = function (b) {
        var c = Math.round(this.ecz.height / 2),
            a = Math.round(this.ecz.x + c),
            d = Math.round(this.ecz.y + c / 2);
        b.save();
        bmx.suj.bwb(b, this.ecz.x, this.ecz.y, this.ecz.width, this.ecz.height, this.lst, this.wkg, this.doi, this.hti);
        bmx.suj.ibm(b, this.parent.language.bju, this.npv, this.ecz.x + this.ecz.height, this.ecz.y, this.ecz.width - this.ecz.height, this.ecz.height, this.ojz, this.pzc, this.nio);
        bmx.suj.jbt(b, a, d, c, c, null, 0, this.xau, this.hti, 1);
        if (this.rdv) {
            bmx.suj.jbt(b, a + c / 4, d + c / 4, c / 2, c / 2, this.xau, 1)
        }
        b.restore()
    }
}
qnp.prototype = new dzq;

function gxc() {
    var a = this;
    this.pmr = function () {
        a.cez = false
    };
    this.cxx = function () {
        if (!this.bbd()) {
            return
        }
        var b = this.context2D;
        b.save();
        if (this.ljv != null) {
            b.drawImage(this.ljv, 0, 0, this.ljv.width, this.ljv.height, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
gxc.prototype = new rkc;

function jbb() {
    this.bxf = "";
    this.xfh = "";
    this.ljv = null;
    this.uru = "sans-serif";
    this.duq = "sans-serif";
    this.nio = "bold";
    this.fjb = null;
    this.npv = null;
    this.iff = null;
    this.xlr = null;
    this.prw = null;
    this.tvy = 16;
    this.gky = 20;
    this.kla = 0;
    this.eke = 0;
    this.hti = 2;
    this.two = 3;
    this.avo = 3;
    this.mom = 3;
    this.etb = 3;
    this.jbf = function (a, e, b, d, c) {
        jbb.prototype.jbf.call(this, a, e, b);
        this.bxf = d;
        this.xfh = c
    };
    this.ilm = function (a) {
        try {
            this.tvy = a.bos;
            this.gky = a.avl;
            this.kla = a.tfo;
            this.eke = a.pmd;
            this.hti = a.lbt;
            this.two = a.pui;
            this.avo = a.tgb;
            this.mom = a.dts;
            this.etb = a.enh
        } catch (b) {
            console.error(b)
        }
    };
    this.whj = function (a) {
        try {
            this.uru = a.cnq;
            this.duq = a.ctt;
            this.nio = a.cvw;
            this.fjb = a.mtf;
            this.npv = a.hij;
            this.iff = a.borderColor;
            this.xlr = a.tmq;
            this.prw = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.gtw = function (a, b) {
        this.xfh = a;
        if (b && b === true && this.context2D != null && this.bbd() === true) {
            this.parent.cxx(this.x, this.y, this.width, this.height)
        }
    };
    this.lqr = function (a, b) {
        this.bxf = a;
        if (b && b === true && this.context2D != null && this.bbd() === true) {
            this.parent.cxx(this.x, this.y, this.width, this.height)
        }
    };
    this.cxx = function () {
        if (!this.bbd()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.xlr) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.iff);
            b.addColorStop(1, this.xlr);
            bmx.suj.hct(a, this.x, this.y, this.width, this.height, this.two, this.avo, this.mom, this.etb, this.prw, 1, b, this.hti, 1)
        } else {
            bmx.suj.hct(a, this.x, this.y, this.width, this.height, this.two, this.avo, this.mom, this.etb, this.prw, 1, this.iff, this.hti, 1)
        }
        if (this.bxf != null) {
            bmx.suj.ibm(a, this.bxf, this.fjb, this.x + this.hti, this.y + this.kla, this.width - 2 * this.hti, this.height, this.uru, this.tvy, this.nio)
        }
        if (this.xfh != null) {
            if (this.bxf != null) {
                bmx.suj.ibm(a, this.xfh, this.npv, this.x + this.hti, this.y + this.eke, this.width - 2 * this.hti, this.height, this.duq, this.gky, this.nio)
            } else {
                bmx.suj.ibm(a, this.xfh, this.npv, this.x + this.hti, this.y + this.hti, this.width - 2 * this.hti, this.height, this.duq, this.gky, this.nio)
            }
        }
        if (this.ljv) {
            a.drawImage(this.ljv, 0, 0, this.ljv.width, this.ljv.height, this.x + this.hti, this.y + this.hti, this.width - 2 * this.hti, this.height - 2 * this.hti)
        }
        a.restore();
        if (this.tvv && this.ciq) {
            this.tvv.drawImage(this.ciq, this.x, this.y)
        }
    }
}
jbb.prototype = new dzq;

function mbr() {
    var a = this;
    this.ljv = null;
    this.jaa = "";
    this.rne = null;
    this.xpa = false;
    this.uco = false;
    this.smq = 0;
    this.flg = 0;
    this.qfo = 150;
    this.azb = 100;
    this.bmt = 0;
    this.ltn = 3;
    this.hmf = 92;
    this.ipr = 0;
    this.tqf = 0;
    this.uru = "sans-serif";
    this.oiw = "sans-serif";
    this.nio = "";
    this.fjb = null;
    this.gat = null;
    this.wuq = null;
    this.kdi = null;
    this.sic = null;
    this.iff = null;
    this.xlr = null;
    this.prw = null;
    this.qgo = null;
    this.paw = null;
    this.awq = null;
    this.djf = null;
    this.xwc = null;
    this.xvc = new ljp();
    this.tvy = 0;
    this.eph = 0;
    this.kla = 0;
    this.ion = 0;
    this.euo = 0;
    this.hti = 0;
    this.luf = 0;
    this.joq = 0;
    this.ilm = function (b) {
        try {
            this.tvy = b.bos;
            this.eph = b.iwv;
            this.kla = b.tfo;
            this.ion = b.map;
            this.euo = b.dkg;
            this.hti = b.lbt;
            this.luf = b.mog;
            this.joq = b.ndk;
            this.xvc = b.cym;
            this.lwl()
        } catch (c) {
            console.error(c)
        }
    };
    this.whj = function (b) {
        try {
            this.uru = b.cnq;
            this.oiw = b.vdm;
            this.nio = b.cvw;
            this.fjb = b.mtf;
            this.gat = b.mht;
            this.wuq = b.wgr;
            this.kdi = b.pcn;
            this.sic = b.fzf;
            this.iff = b.borderColor;
            this.xlr = b.tmq;
            this.prw = b.backgroundColor;
            this.swn = b.vsa;
            this.qgo = b.wsa;
            this.lwl()
        } catch (c) {
            console.error(c)
        }
    };
    this.rpd = function (b) {
        try {
            this.fjb = b.mtf;
            this.gat = b.mht;
            this.wuq = b.wgr;
            this.kdi = b.pcn;
            this.lwl()
        } catch (c) {
            console.error(c)
        }
    };
    this.wph = function () {
        return {
            mtf: this.fjb,
            mht: this.gat,
            wgr: this.wuq,
            pcn: this.kdi
        }
    };
    this.lwl = function () {
        this.djf = this.prw;
        this.xwc = this.iff;
        this.paw = this.fjb;
        this.awq = this.wuq;
        if (this.height > 0 && this.xlr) {
            this.xwc = this.context2D.createLinearGradient(this.width / 2, 0, this.width / 2, this.height);
            this.xwc.addColorStop(0, this.iff);
            this.xwc.addColorStop(1, this.xlr)
        }
        if (this.height > 0 && this.swn) {
            this.djf = this.context2D.createLinearGradient(this.width / 2, 0, this.width / 2, this.height);
            this.djf.addColorStop(0, this.prw);
            this.djf.addColorStop(1, this.swn)
        }
        if (this.tvy > 0 && this.gat) {
            this.paw = this.context2D.createLinearGradient(this.width / 2, 0, this.width / 2, this.height / 2);
            this.paw.addColorStop(0, this.fjb);
            this.paw.addColorStop(1, this.gat)
        }
        if (this.eph > 0 && this.kdi) {
            this.awq = this.context2D.createLinearGradient(this.width / 2, this.height / 2, this.width / 2, this.height);
            this.awq.addColorStop(0, this.wuq);
            this.awq.addColorStop(1, this.kdi)
        }
    };
    this.nyc = function (b, c) {
        if (b >= this.parent.tiq.qsx.rlq.x && b <= this.parent.tiq.qsx.rlq.x + this.parent.tiq.qsx.rlq.width && c >= this.parent.tiq.qsx.rlq.y && c <= this.parent.tiq.qsx.rlq.y + this.parent.tiq.qsx.rlq.height && this.bbd()) {
            if (this.xpa) {
                this.uco = false;
                this.xpa = false;
                this.stop();
                this.mvk()
            }
            return true
        }
        return false
    };
    this.ahc = function (b, c) {
        this.rne = b;
        if (c && c === true) {
            this.parent.cxx(this.x, this.y, this.width, this.height)
        }
    };
    this.lqr = function (b, c) {
        this.jaa = b;
        if (c && c === true) {
            this.parent.cxx(this.x, this.y, this.width, this.height)
        }
    };
    this.lrc = function () {
        return this.jaa
    };
    this.start = function () {
        this.aco(true);
        this.parent.cxx();
        this.bmt = new Date().getTime();
        this.flg = 0;
        this.tqf = 0;
        this.ipr = Math.floor((9 * this.rne) / (10 * this.hmf));
        this.uco = true;
        this.xpa = false;
        this.parent.whm.lry("jackpot");
        this.gsd()
    };
    this.gsd = function () {
        var b = 0,
            c = new Date().getTime();
        a.flg++;
        if (a.flg < a.qfo) {
            if (a.flg === a.ltn) {
                a.tqf = Math.floor(a.rne / 10)
            } else {
                if (a.flg > a.ltn && a.flg < a.ltn + a.hmf) {
                    a.tqf += a.ipr
                } else {
                    if (a.flg == a.ltn + a.hmf) {
                        a.tqf = a.rne
                    }
                }
            }
            a.cxx();
            b = (a.flg * a.azb - (c - a.bmt));
            a.smq = setTimeout(a.gsd, b)
        } else {
            a.parent.whm.mvq("jackpot");
            if (!bmx.vbp.value76 || !bmx.vbp.value76.u) {
                a.uco = false;
                a.stop();
                a.mvk()
            } else {
                a.yde();
                a.xpa = true;
                a.dsh()
            }
        }
    };
    this.dsh = function () {
        var b = 0,
            c = new Date().getTime();
        a.flg++;
        a.cxx();
        b = (a.flg * a.azb - (c - a.bmt));
        a.smq = setTimeout(a.dsh, b)
    };
    this.stop = function () {
        clearTimeout(this.smq)
    };
    this.cxx = function () {
        if (!this.bbd() || !this.parent.nyy()) {
            return
        }
        var b = this.context2D,
            c = (this.luf === 0) ? this.hti : 0;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        if (this.ljv) {
            if (this.uco === true) {
                b.drawImage(this.ljv, (this.flg % 3) * this.ljv.width / 3, 0, this.ljv.width / 3, this.ljv.height, 0, 0, this.width, this.height)
            } else {
                b.drawImage(this.ljv, 0, 0, this.width, this.height)
            }
        } else {
            bmx.suj.hct(b, 0, -c, this.width, this.height, this.luf, this.luf, this.joq, this.joq, this.djf, 1, this.xwc, this.hti, 1);
            bmx.suj.bwb(b, this.xvc.x, this.xvc.y, this.xvc.width, this.xvc.height, this.joq, this.qgo, 1)
        }
        if (this.jaa != null) {
            bmx.suj.ibm(b, this.jaa, this.paw, this.euo, this.kla - c, this.width - 2 * this.euo, this.height, this.uru, this.tvy, this.nio)
        }
        if (this.uco === true) {
            if (this.tqf > 0) {
                bmx.suj.ibm(b, this.parent.wvj(this.tqf), this.awq, this.euo, this.ion - c, this.width - 2 * this.euo, this.height, this.oiw, this.eph, this.nio)
            }
        } else {
            if (this.rne != null) {
                bmx.suj.ibm(b, (this.rne > 0) ? this.parent.wvj(this.rne) : 0, this.awq, this.euo, this.ion - c, this.width - 2 * this.euo, this.height, this.oiw, this.eph, this.nio)
            }
        }
        b.restore();
        if (this.tvv && this.ciq) {
            this.tvv.drawImage(this.ciq, this.x, this.y)
        }
    };
    this.mvk = function () {};
    this.yde = function () {}
}
mbr.prototype = new dzq;

function oio() {
    var a = this;
    this.jav = null;
    this.boi = [];
    this.ftj = null;
    this.raq = null;
    this.rne = null;
    this.dby = null;
    this.ydr = null;
    this.xpa = false;
    this.uco = false;
    this.smq = 0;
    this.mkf = 0;
    this.azb = 89;
    this.bmt = 0;
    this.znc = [];
    this.gbv = 0;
    this.vcp = 0;
    this.wzp = 0;
    this.txt = 0;
    this.zqi = new ljp();
    this.xvc = new ljp();
    this.lxl = null;
    this.agm = 0;
    this.aja = 0;
    this.jbf = function (b, d, c) {
        oio.prototype.jbf.call(this, b, d, c);
        this.dby = document.createElement("canvas");
        this.ydr = this.dby.getContext("2d")
    };
    this.ilm = function (b) {
        try {
            this.lxl = b.ikk;
            this.xvc = b.cym;
            this.zqi = b.rhr;
            this.agm = b.knm;
            this.aja = b.enf;
            this.dby.width = Math.round(this.xvc.width);
            this.dby.height = Math.round(this.xvc.height)
        } catch (c) {
            console.error(c)
        }
    };
    this.ahc = function (l, j) {
        var m = this.ydr,
            c = "",
            n = [],
            b = 0,
            d = 1,
            k = 0,
            f = 0;
        j = (j) ? j : 1;
        f = this.parent.mtb(l);
        for (var e = 0, g = f.length; e < g; e++) {
            c = f.charAt(e);
            c = c.replace(/\./g, "dt").replace(/\,/g, "cm").replace(/\ /g, "sp");
            n[e] = this.lxl["_" + c];
            b += n[e].width
        }
        if ((b * j) > this.dby.width) {
            d = (this.dby.width / (b * j)).toString();
            d = Number(d.substring(0, (d.length > 5) ? 5 : d.length))
        } else {
            k = Math.floor((this.dby.width - (b * j)) / 2);
            y = 0
        }
        m.save();
        m.clearRect(0, 0, this.dby.width, this.dby.height);
        for (var e = 0, g = n.length; e < g; e++) {
            if (n[e].width > 0 && n[e].height > 0) {
                m.drawImage(this.ftj, n[e].x, n[e].y, n[e].width, n[e].height, k * d, n[e].y * d * j + (this.dby.height - n[e].height * d * j) / 2, n[e].width * d * j, n[e].height * d * j);
                k += n[e].width * j
            }
        }
        m.restore()
    };
    this.start = function () {
        this.aco(true);
        this.parent.cxx();
        this.bmt = new Date().getTime();
        this.mkf = 0;
        this.uco = true;
        this.xpa = false;
        this.znc.length = 0;
        for (var c = 0; c < 56; c++) {
            this.znc[c] = {
                scale: 1,
                wag: 1,
                y: this.y,
                x: this.x,
                mnv: 0,
                tbz: 0.5,
                avx: 0
            }
        }
        for (var c = 0; c < 16; c++) {
            if (c <= 3) {
                this.znc[c].wag = Math.sin(Math.PI / 8 * (c + 1))
            }
            this.znc[c].y = this.y + this.agm * Math.cos(Math.PI / 32 * c);
            this.znc[c].x = this.x + this.aja * Math.sin(Math.PI / 8 * c);
            this.znc[c].scale = Math.sin(Math.PI / 32 * c)
        }
        for (var c = 6, b = 1; b <= 10; c++, b++) {
            this.znc[c].tbz = 0.5 + 0.5 * Math.sin(Math.PI / 20 * b)
        }
        for (var c = 16, b = 1; b <= 40; c++, b++) {
            this.znc[c].tbz = 1 + 0.5 * Math.sin(Math.PI / 40 * b)
        }
        for (var c = 16, b = 0; c < this.znc.length; c++, b++) {
            this.znc[c].mnv = b;
            if (b >= this.boi.length && b <= this.boi.length + 6) {
                this.znc[c].avx = Math.sin(Math.PI / 12 * (b - this.boi.length))
            } else {
                if (b >= this.boi.length + 6) {
                    this.znc[c].avx = 1
                }
            }
        }
        for (var c = this.znc.length - 7, b = 0; c < this.znc.length; c++, b++) {
            this.znc[c].wag = Math.cos(Math.PI / 12 * b)
        }
        this.parent.whm.lry("mystery_jackpot");
        this.gsd()
    };
    this.gsd = function () {
        var b = 0,
            c = new Date().getTime();
        a.mkf++;
        if (a.mkf < a.znc.length - 1) {
            a.gbv = Math.floor(a.width * a.znc[a.mkf].scale);
            a.vcp = Math.floor(a.height * a.znc[a.mkf].scale);
            a.wzp = Math.floor(a.xvc.width * a.znc[a.mkf].tbz);
            a.txt = Math.floor(a.xvc.height * a.znc[a.mkf].tbz);
            a.parent.cxx();
            b = (a.mkf * a.azb - (c - a.bmt));
            a.smq = setTimeout(a.gsd, b)
        } else {
            a.uco = false;
            a.stop();
            a.mvk()
        }
    };
    this.stop = function () {
        clearTimeout(this.smq)
    };
    this.cxx = function () {
        if (!this.bbd() || !this.parent.nyy()) {
            return
        }
        var c = this.context2D,
            b = (this.uco) ? this.znc[this.mkf].x : this.x,
            f = (this.uco) ? this.znc[this.mkf].y : this.y,
            d = (this.uco) ? this.znc[this.mkf].wag : 1,
            e = (this.uco) ? this.znc[this.mkf].mnv : 0;
        c.save();
        c.globalAlpha = d;
        c.clearRect(0, 0, this.width, this.height);
        if (e == 0) {
            c.drawImage(this.jav, 0, 0, this.width, this.height)
        }
        if (e < this.boi.length) {
            c.drawImage(this.boi[e], 0, 0, this.width, this.height)
        } else {
            c.save();
            c.globalAlpha = d * this.znc[this.mkf].avx;
            c.drawImage(this.raq, this.zqi.x, this.zqi.y);
            c.restore()
        }
        if (this.dby) {
            c.drawImage(this.dby, this.xvc.x + (this.xvc.width - this.wzp) / 2, this.xvc.y + (this.xvc.height - this.txt) / 2, this.wzp, this.txt)
        }
        c.restore();
        if (this.tvv && this.ciq) {
            this.tvv.drawImage(this.ciq, b + (this.width - this.gbv) / 2, f + (this.height - this.vcp) / 2, this.gbv, this.vcp)
        }
    };
    this.mvk = function () {}
}
oio.prototype = new dzq;

function yyq() {
    this.ljv = new Image();
    this.xfh = "";
    this.jgn = true;
    this.ojz = null;
    this.nio = "bold";
    this.pea = "red";
    this.qvy = "orange";
    this.myl = "white";
    this.dpi = 40;
    this.eub = 0;
    this.fph = 0;
    this.euo = 0;
    this.rhn = 2;
    this.nrl = null;
    this.pal = 0;
    this.yfj = 0;
    this.jbf = function (a, e, c, b, d) {
        yyq.prototype.jbf.call(this, a, e, c);
        this.ljv = b;
        this.xfh = d
    };
    this.ilm = function (a) {
        try {
            this.dpi = a.fontSize;
            this.eub = a.dni;
            this.fph = a.kqj;
            this.euo = a.dkg;
            this.rhn = a.ruy
        } catch (b) {
            console.error(b)
        }
    };
    this.whj = function (a) {
        try {
            this.ojz = a.font;
            this.nio = a.cvw;
            this.pea = a.wcb;
            this.qvy = a.srk;
            this.myl = a.syb
        } catch (b) {
            console.error(b)
        }
    };
    this.gtw = function (a, b) {
        this.xfh = a;
        if (b && b === true && this.context2D != null) {
            this.aco(true, true)
        }
    };
    this.yor = function (a, b) {
        this.xfh = a;
        this.jgn = false;
        if (b && b === true && this.context2D != null) {
            this.aco(true, true)
        }
    };
    this.aco = function (a, b) {
        this.jri = a;
        if (b && b === true && this.context2D != null) {
            if (this.ciq == null && this.bbd()) {
                this.cxx()
            } else {
                if (this.parent != null) {
                    this.parent.cxx(this.x, this.y, this.width, this.height)
                }
            }
        }
    };
    this.hud = function (a, b, c) {
        this.nrl = a;
        this.pal = b;
        this.yfj = c
    };
    this.cxx = function () {
        if (!this.bbd() || !this.parent.nyy()) {
            return
        }
        var b = this.context2D,
            c = null,
            a = (this.ciq != null) ? 0 : this.x,
            d = (this.ciq != null) ? 0 : this.y;
        b.save();
        if (this.ciq == null) {
            b.beginPath();
            b.rect(this.x, this.y, this.width, this.height);
            b.closePath();
            b.clip()
        }
        if (this.jgn === true) {
            if (this.nrl != null) {
                b.drawImage(this.nrl, this.x + this.pal, this.y + this.yfj, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            if (this.ljv != null) {
                b.drawImage(this.ljv, a, d)
            }
        }
        c = b.createLinearGradient(a + this.width / 2 + this.eub, d, a + this.width / 2 + this.eub, d + this.height);
        c.addColorStop(0, this.pea);
        c.addColorStop(1, this.qvy);
        bmx.suj.ibm(b, this.xfh, c, a + this.euo + this.eub, d + this.fph, this.width - 2 * this.euo, this.height, this.ojz, this.dpi, this.nio, this.myl, this.rhn);
        b.restore();
        if (this.tvv && this.ciq) {
            this.tvv.drawImage(this.ciq, this.x, this.y)
        }
    }
}
yyq.prototype = new dzq;

function qxa() {
    var a = this;
    this.state = 0;
    this.enw = 1;
    this.dvy = null;
    this.rpn = null;
    this.bhs = null;
    this.acq = "round";
    this.ojz = null;
    this.nio = "bold";
    this.fie = "center";
    this.prw = null;
    this.npv = null;
    this.tge = 1;
    this.xwc = null;
    this.dpi = 17;
    this.euo = 2;
    this.occ = 0;
    this.hti = 1;
    this.zeh = 0;
    this.ijn = 0;
    this.jbi = 0;
    this.ilm = function (b) {
        try {
            this.dpi = b.fontSize;
            this.euo = b.dkg;
            this.occ = b.mov;
            this.hti = b.lbt;
            this.jbi = b.bsw
        } catch (c) {
            console.error(c)
        }
    };
    this.whj = function (b) {
        try {
            this.acq = b.dyl;
            this.ojz = b.font;
            this.nio = b.cvw;
            this.fie = b.textAlign;
            this.prw = b.backgroundColor;
            this.npv = b.hij;
            this.tge = b.bnr;
            if (b.borderColor && b.tmq) {
                this.xwc = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.xwc.addColorStop(0, b.borderColor);
                this.xwc.addColorStop(1, b.tmq)
            } else {
                this.xwc = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.cdz = function () {
        return this.acq
    };
    this.hrq = function (c, b) {
        this.state = c;
        this.enw = b
    };
    this.tpx = function (b) {
        this.ljv = b;
        if (this.acq === "round") {
            this.zeh = this.width / 2 - this.euo
        }
        if (this.ljv) {
            this.ijn = Math.round(this.ljv.height / (2 * this.enw))
        }
    };
    this.dtk = function (b) {
        this.state = (b < this.enw) ? b : this.state
    };
    this.oia = function (b) {
        this.dvy = b
    };
    this.pmr = function () {
        a.cez = false
    };
    this.ioy = function () {
        a.yev = false;
        if (a.bbd()) {
            a.parent.cxx(a.x, a.y, a.width, a.height)
        }
    };
    this.cxx = function () {
        if (!this.bbd()) {
            return
        }
        var l = this.context2D,
            e = (this.ozi()) ? this.tge : this.tge / 2,
            b = this.dpi,
            d = null,
            c = 0,
            k = 0,
            j = 0,
            g = 0;
        l.save();
        if (this.ljv && this.liq) {
            if (!this.ozi()) {
                l.globalAlpha = e
            }
            if (this.acq === "round") {
                bmx.suj.pmx(l, this.x + this.width / 2, this.y + this.height / 2, this.zeh, this.prw, e * this.tge)
            } else {
                if (this.acq === "rect") {
                    bmx.suj.elf(l, this.x, this.y, this.width, this.height, this.occ, this.prw, e * this.tge, this.xwc, this.hti, e)
                }
            }
            if (this.oru()) {
                if (this.acq === "round") {
                    l.drawImage(this.ljv, 0, (this.state * 2 * this.ijn) + this.ijn, this.ljv.width, this.ijn, this.x, this.y, this.width, this.height)
                } else {
                    if (this.acq === "rect") {
                        l.drawImage(this.ljv, 0, (this.state * 2 * this.ijn) + this.ijn, this.ljv.width, this.ijn, this.x, this.y, this.width, this.height)
                    }
                }
            } else {
                if (this.acq === "round") {
                    l.drawImage(this.ljv, 0, (this.state * 2 * this.ijn), this.ljv.width, this.ijn, this.x, this.y, this.width, this.height)
                } else {
                    if (this.acq === "rect") {
                        l.drawImage(this.ljv, 0, (this.state * 2 * this.ijn), this.ljv.width, this.ijn, this.x, this.y, this.width, this.height)
                    }
                }
            }
            if (this.xfh != null) {
                l.textAlign = this.fie;
                l.textBaseline = "bottom";
                l.font = this.nio + " " + b + "px " + this.ojz;
                l.fillStyle = this.npv;
                d = this.xfh.split("|");
                j = 0;
                g = (this.fie === "center") ? this.x + this.width / 2 : (this.fie === "left") ? this.x + 2 * this.euo : this.x + this.width - 2 * this.euo;
                for (var f = 0; f < d.length; f++) {
                    j = (l.measureText(d[f]).width > j) ? l.measureText(d[f]).width : j
                }
                if (j > this.width - 2 * this.euo) {
                    c = ((this.width - 2 * this.euo) / j);
                    b = Math.round(c * b) - 1;
                    l.font = this.nio + " " + b + "px " + this.ojz
                }
                if (b * d.length > this.jbi) {
                    c = ((this.jbi) / (b * d.length));
                    b = Math.round(c * b) - 1;
                    l.font = this.nio + " " + b + "px " + this.ojz
                }
                k = (this.height - this.euo - this.jbi) + (this.jbi - b * d.length) / 2;
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
qxa.prototype = new rkc;

function bru() {
    var a = this;
    this.acq = "rect";
    this.zir = -1;
    this.ojz = null;
    this.nio = "bold";
    this.prw = null;
    this.swn = null;
    this.fwo = null;
    this.stw = null;
    this.iff = null;
    this.npv = null;
    this.cyb = null;
    this.occ = 3;
    this.eub = -2;
    this.fph = 2;
    this.and = 6;
    this.dpi = 26;
    this.hti = 2;
    this.ilm = function (b) {
        try {
            this.dpi = b.fontSize;
            this.eub = b.dni;
            this.fph = b.kqj;
            this.and = b.fse;
            this.occ = b.mov;
            this.hti = b.lbt
        } catch (c) {
            console.error(c)
        }
    };
    this.whj = function (b) {
        try {
            this.ojz = b.font;
            this.nio = b.cvw;
            this.prw = b.backgroundColor;
            this.swn = b.vsa;
            this.fwo = b.fgc;
            this.stw = b.eis;
            this.iff = b.borderColor;
            this.npv = b.hij;
            this.cyb = b.nwm;
            this.acq = b.dyl;
            this.zir = b.jnd
        } catch (c) {
            console.error(c)
        }
    };
    this.cdz = function () {
        return this.acq
    };
    this.pmr = function () {
        a.cez = false
    };
    this.ioy = function () {
        a.yev = false;
        if (a.bbd()) {
            a.parent.cxx(a.x, a.y, a.width, a.height)
        }
    };
    this.cxx = function () {
        if (!this.bbd()) {
            return
        }
        var p = this.context2D,
            l = null,
            n = this.prw,
            m = this.swn,
            b = this.dpi,
            f = null,
            d = 0,
            o = 0,
            c = 1,
            k = 0,
            e = (this.zir == 0 || this.zir == 3) ? this.occ : 0;
        lt = (this.zir == 1 || this.zir == 3) ? this.occ : 0;
        rb = (this.zir == 0 || this.zir == 2) ? this.occ : 0;
        lb = (this.zir == 1 || this.zir == 2) ? this.occ : 0;
        h = 0;
        p.save();
        p.lineJoin = "round";
        p.lineCap = "round";
        p.textAlign = "center";
        if (this.oru()) {
            n = (this.fwo != null) ? this.fwo : n;
            m = (this.stw != null) ? this.stw : m
        }
        if (n != null) {
            if (m != null) {
                l = p.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                l.addColorStop(1, m);
                l.addColorStop(0, n);
                if (this.acq === "rrect") {
                    bmx.suj.hct(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, l, 1, this.iff, this.hti, 1)
                } else {
                    if (this.acq === "rect") {
                        if (this.iff) {
                            bmx.suj.bwb(p, this.x, this.y, this.width, this.height, this.occ, l, this.iff, this.hti)
                        } else {
                            bmx.suj.jbt(p, this.x, this.y, this.width, this.height, l, 1)
                        }
                    } else {
                        if (this.acq === "triangle") {
                            bmx.suj.flx(p, this.zir, this.x, this.y, this.width, this.height, this.occ, l, 1, this.iff, this.hti, 1)
                        }
                    }
                }
            } else {
                if (this.acq === "rrect") {
                    bmx.suj.hct(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, n, 1, this.iff, this.hti, 1)
                } else {
                    if (this.acq === "rect") {
                        if (this.iff) {
                            bmx.suj.bwb(p, this.x, this.y, this.width, this.height, this.occ, n, this.iff, this.hti, 1)
                        } else {
                            bmx.suj.jbt(p, this.x, this.y, this.width, this.height, n, 1)
                        }
                    } else {
                        if (this.acq === "triangle") {
                            bmx.suj.flx(p, this.zir, this.x, this.y, this.width, this.height, this.occ, n, 1, this.iff, this.hti, 1)
                        }
                    }
                }
            }
        }
        if (this.ljv != null) {
            h = this.height - 2 * this.and;
            p.drawImage(this.ljv, this.x + this.width / 2 - h / 2, this.y + this.and, h, h)
        }
        if (this.xfh != null) {
            p.textAlign = "center";
            p.textBaseline = "bottom";
            f = this.xfh.split("|");
            d = 0;
            if (this.oru()) {
                d = 1;
                p.fillStyle = this.cyb
            } else {
                p.fillStyle = this.npv
            }
            p.font = this.nio + " " + b + "px " + this.ojz;
            for (var g = 0, j = f.length; g < j; g++) {
                o = (p.measureText(f[g]).width > o) ? p.measureText(f[g]).width : o
            }
            if (o > this.width - 2 * this.and) {
                c = ((this.width - 2 * this.and) / o);
                b = Math.round(c * b) - 1;
                p.font = this.nio + " " + b + "px " + this.ojz
            }
            if (b * f.length > this.height) {
                c = ((this.height) / (b * f.length));
                b = Math.round(c * b) - 1;
                p.font = this.nio + " " + b + "px " + this.ojz
            }
            k = (this.height - b * f.length) / 2;
            k += b;
            for (var g = 0; g < f.length; g++) {
                p.fillText(f[g], (this.x + this.width / 2) + this.eub, this.y - this.fph + k + d);
                k += b
            }
        }
        p.restore()
    }
}
bru.prototype = new rkc;

function abg() {
    var a = this;
    this.xfh = null;
    this.xpa = false;
    this.cez = false;
    this.byg = false;
    this.ojz = null;
    this.nio = "bold";
    this.fie = "center";
    this.prw = null;
    this.iff = null;
    this.npv = null;
    this.kzg = "rect";
    this.mgk = new ljp();
    this.llw = new ljp();
    this.dpi = 16;
    this.occ = 8;
    this.hti = 1;
    this.ycu = 0;
    var b = 200;
    this.jbf = function (c, f, d, e) {
        this.xfh = e;
        abg.prototype.jbf.call(this, c, f, d)
    };
    this.whj = function (c) {
        try {
            this.ojz = c.font;
            this.nio = c.cvw;
            this.fie = c.textAlign;
            this.prw = c.backgroundColor;
            this.iff = c.borderColor;
            this.npv = c.hij;
            this.kzg = c.type
        } catch (d) {
            console.error(d)
        }
    };
    this.ilm = function (c) {
        try {
            this.mgk = c.aza;
            this.llw = c.bkw;
            this.dpi = c.fontSize;
            this.occ = c.mov;
            this.hti = c.lbt
        } catch (d) {
            console.error(d)
        }
    };
    this.giu = function (c) {
        this.xpa = c
    };
    this.ozi = function () {
        return this.xpa
    };
    this.cvv = function (c, d) {
        this.byg = c;
        if (d && d === true) {
            this.parent.cxx(this.x, this.y, this.width, this.height)
        }
    };
    this.slw = function () {
        return this.byg
    };
    this.gtw = function (c, d) {
        this.xfh = c;
        if (d && d === true && this.bbd()) {
            this.parent.cxx(this.x, this.y, this.width, this.height)
        }
    };
    this.slz = function (c, d) {
        this.cez = c;
        d = (d === false) ? false : true;
        clearTimeout(this.ycu);
        if (this.cez === true && d === true) {
            this.ycu = setTimeout(this.pmr, b)
        }
    };
    this.yzr = function () {
        return this.cez
    };
    this.pmr = function () {
        a.cez = false
    };
    this.cxx = function () {
        if (!this.bbd()) {
            return
        }
        var c = this.context2D;
        c.save();
        bmx.suj.bwb(c, this.x, this.y, this.width, this.height, this.occ, this.prw, this.iff, this.hti);
        if (this.kzg === "rect") {
            bmx.suj.jbt(c, this.x + this.llw.x, this.y + this.llw.y, this.llw.width, this.llw.height, this.npv, 0.2, this.npv, this.hti, 1);
            if (this.byg === true) {
                bmx.suj.jbt(c, this.x + this.llw.x + this.llw.width / 4, this.y + this.llw.y + this.llw.height / 4, this.llw.width / 2, this.llw.height / 2, this.npv, 1)
            }
        } else {
            if (this.kzg === "round") {
                bmx.suj.pmx(c, this.x + this.llw.x + this.llw.width / 2, this.y + this.llw.y + this.llw.height / 2, this.llw.width / 2, this.npv, 0.2, this.npv, this.hti, 1);
                if (this.byg === true) {
                    bmx.suj.pmx(c, this.x + this.llw.x + this.llw.width / 2, this.y + this.llw.y + this.llw.height / 2, this.llw.width / 4, this.npv, 1)
                }
            }
        }
        if (this.xfh && this.xfh != "") {
            bmx.suj.kqm(c, this.xfh, this.npv, this.x + this.mgk.x, this.y + this.mgk.y, this.mgk.width, this.mgk.height, this.ojz, this.dpi, this.nio, this.fie, true)
        }
        c.restore();
        if (this.tvv && this.ciq) {
            this.tvv.drawImage(this.ciq, this.x, this.y)
        }
    };
    this.liq = {}
}
abg.prototype = new dzq;

function kfk() {
    var b = this;
    var c = 0;
    var a = 1;
    this.bco = null;
    this.bxf = "";
    this.aca = "";
    this.gae = "";
    this.hjd = "";
    this.jgo = false;
    this.pwg = [];
    this.jto = 0;
    this.qbr = 0;
    this.glv = 0;
    this.rke = 0;
    this.jqa = 0;
    this.hhk = 0;
    this.mjb = 0;
    this.ngv = 0;
    this.ven = false;
    this.pbg = false;
    this.hgu = false;
    this.kzg = "center";
    this.ojz = "arial";
    this.nio = "bold";
    this.fjb = "white";
    this.npv = "white";
    this.prw = "black";
    this.swn = null;
    this.iff = "white";
    this.xlr = "rgb(150,150,150)";
    this.atj = null;
    this.urv = null;
    this.hti = 3;
    this.woy = 0;
    this.fkq = 0;
    this.szw = 0;
    this.tvy = 30;
    this.tpn = 24;
    this.amh = new ljp();
    this.ijc = new ljp();
    this.mza = new ljp();
    this.wba = new ljp();
    this.epf = new ljp();
    this.puy = new ljp();
    this.byt = new ljp();
    this.ngr = new ljp();
    this.adj = new ljp();
    this.qfo = 7;
    this.xzc = 0;
    this.fql = 0;
    this.flg = 0;
    this.kzt = c;
    this.bmt = 0;
    this.azb = 89;
    this.ywi = false;
    this.smq = 0;
    this.rus = 0;
    this.mje = 0;
    this.mkj = 0;
    this.uyh = null;
    this.akz = 0;
    this.hue = 1;
    this.roi = 250;
    this.jbf = function (d, f, e) {
        kfk.prototype.jbf.call(this, d, f, e);
        this.bco = new klf();
        this.bco.jbf();
        this.bco.pvt("buttons");
        this.bco.pvt("checkboxes");
        this.bco.pvt("displays");
        this.bco.pvt("lbuttons");
        this.bco.pvt("mbuttons");
        this.bco.pvt("vbuttons");
        this.bco.pvt("cbuttons")
    };
    this.hyf = function (d) {
        try {
            this.lqg(d);
            this.zwu(d)
        } catch (f) {
            console.error(f)
        }
    };
    this.whj = function (k) {
        try {
            var n = this.bco.qvh("lbuttons"),
                m = this.bco.qvh("mbuttons"),
                f = this.bco.qvh("cbuttons"),
                g = this.bco.qvh("displays");
            this.kzg = k.type;
            this.ojz = k.font;
            this.nio = k.cvw;
            this.fjb = k.mtf;
            this.npv = k.hij;
            this.prw = k.backgroundColor;
            this.swn = k.vsa;
            this.iff = k.borderColor;
            this.atj = k.lxh;
            this.urv = k.uwp;
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].whj(k.qke)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].whj(k.hqd)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].whj(k.xoh)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].whj(k.display)
            }
            this.bco.fmj("checkboxes", "#whj", [k.dmr])
        } catch (l) {
            console.error(l)
        }
    };
    this.ilm = function (k) {
        try {
            var n = this.bco.qvh("lbuttons"),
                m = this.bco.qvh("mbuttons"),
                f = this.bco.qvh("cbuttons"),
                g = this.bco.qvh("displays");
            this.hti = k.lbt;
            this.woy = k.zno;
            this.fkq = k.ekf;
            this.szw = k.des;
            this.tvy = k.bos;
            this.tpn = k.zcf;
            this.amh = k.oxh;
            this.ijc = k.dyv;
            this.mza = k.nba;
            this.wba = k.mpo;
            this.epf = k.byh;
            this.puy = k.ukb;
            this.bco.psl("lgames", "#cch", [k.ofv]);
            this.bco.psl("mgames", "#cch", [k.peh]);
            this.bco.psl("lmincredit", "#cch", [k.dmi]);
            this.bco.psl("mmincredit", "#cch", [k.xpb]);
            this.bco.psl("lmaxcredit", "#cch", [k.lfh]);
            this.bco.psl("mmaxcredit", "#cch", [k.pdv]);
            this.bco.psl("lmaxwin", "#cch", [k.hrt]);
            this.bco.psl("mmaxwin", "#cch", [k.znm]);
            this.bco.psl("start", "#cch", [k.tbr]);
            this.bco.psl("cancel", "#cch", [k.hsk]);
            this.bco.psl("gamesd", "#cch", [k.hrj]);
            this.bco.psl("mincreditd", "#cch", [k.jnn]);
            this.bco.psl("maxcreditd", "#cch", [k.cms]);
            this.bco.psl("maxwind", "#cch", [k.szb]);
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].ilm(k.qke)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].ilm(k.hqd)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].ilm(k.xoh)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].ilm(k.display)
            }
            this.bco.psl("cmincredit", "#cch", [k.lug]);
            this.bco.psl("cmaxcredit", "#cch", [k.fhz]);
            this.bco.psl("cmaxwin", "#cch", [k.oqq]);
            this.bco.fmj("checkboxes", "#ilm", [k.dmr])
        } catch (l) {
            console.error(l)
        }
    };
    this.lqg = function (d) {
        this.bco.jqp("start", this.nda(d.tbr, this.parent.language.start, this.dgc, this.parent.unz.xni), ["buttons", "cbuttons"]);
        this.bco.jqp("cancel", this.nda(d.hsk, this.parent.language.wtk, this.yux, this.parent.unz.gof), ["buttons", "cbuttons"]);
        this.bco.jqp("lgames", this.nda(d.ofv, "", this.cai, null), ["buttons", "lbuttons", "vbuttons"]);
        this.bco.jqp("mgames", this.nda(d.peh, "+", this.phx, null), ["buttons", "mbuttons", "vbuttons"]);
        this.bco.jqp("lmincredit", this.nda(d.dmi, "", this.gsz, null), ["buttons", "lbuttons", "vbuttons"]);
        this.bco.jqp("mmincredit", this.nda(d.xpb, "+", this.jms, null), ["buttons", "mbuttons", "vbuttons"]);
        this.bco.jqp("lmaxcredit", this.nda(d.lfh, "", this.bxy, null), ["buttons", "lbuttons", "vbuttons"]);
        this.bco.jqp("mmaxcredit", this.nda(d.pdv, "+", this.unx, null), ["buttons", "mbuttons", "vbuttons"]);
        this.bco.jqp("lmaxwin", this.nda(d.hrt, "", this.vra, null), ["buttons", "lbuttons", "vbuttons"]);
        this.bco.jqp("mmaxwin", this.nda(d.znm, "+", this.vns, null), ["buttons", "mbuttons", "vbuttons"]);
        this.bco.jqp("cmincredit", this.ksk(d.lug, "", this.bxn), ["checkboxes"]);
        this.bco.jqp("cmaxcredit", this.ksk(d.fhz, "", this.pxo), ["checkboxes"]);
        this.bco.jqp("cmaxwin", this.ksk(d.oqq, "", this.ppn), ["checkboxes"])
    };
    this.zwu = function (d) {
        this.bco.jqp("gamesd", this.jik(d.hrj, null, (this.pwg[this.jto] > 0) ? this.pwg[this.jto] : "---"), ["displays"]);
        this.bco.jqp("mincreditd", this.jik(d.jnn, null, "---"), ["displays"]);
        this.bco.jqp("maxcreditd", this.jik(d.cms, null, "---"), ["displays"]);
        this.bco.jqp("maxwind", this.jik(d.szb, null, "---"), ["displays"])
    };
    this.jik = function (d, g, f) {
        var e = new jbb();
        e.jbf(d, this.context2D, null, g, f);
        e.parent = this;
        return e
    };
    this.nda = function (f, j, g, e) {
        var d = new bru();
        d.jbf(f, this.context2D, null, null, j);
        d.parent = this;
        d.liq = g;
        if (e) {
            d.qvl = e.cpu
        }
        return d
    };
    this.ksk = function (e, g, f) {
        var d = new abg();
        d.jbf(e, this.context2D, null, g);
        d.parent = this;
        d.liq = f;
        return d
    };
    this.nyc = function (r, n) {
        var s = this.bco.qvh("vbuttons"),
            l = this.bco.qvh("cbuttons"),
            g = this.bco.qvh("checkboxes"),
            p = this.bco.uxx("cancel"),
            q = r - this.x,
            o = n - this.y;
        if (this.ara) {
            return true
        }
        if ((!p || !p.bbd()) && (r < this.x || r > this.x + this.width || n < this.y || n > this.y + this.height)) {
            this.hgu = true;
            this.hme();
            return true
        }
        for (var f = 0, m = s.length; f < m; f++) {
            var d = s[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.bbd() === true && d.ozi() === true && d.yzr() === false) {
                    d.aor(true, false, false);
                    this.akz = 0;
                    this.hue = 1;
                    if (d.liq() === false) {
                        this.uyh = function () {
                            if (d.liq() === true) {
                                clearInterval(b.mkj);
                                d.aor(false, false);
                                b.parent.cxx();
                                for (var t = 0; t < m; t++) {
                                    s[t].slz(false)
                                }
                            }
                        };
                        this.mkj = setInterval(this.uyh, this.roi)
                    }
                    for (var e = 0; e < m; e++) {
                        s[e].slz(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = l.length; f < m; f++) {
            var d = l[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.bbd() === true && d.ozi() === true) {
                    this.parent.whm.mvq("btn");
                    this.parent.whm.lry("btn");
                    d.aor(true, false);
                    d.liq();
                    for (var e = 0; e < m; e++) {
                        l[e].slz(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = g.length; f < m; f++) {
            var k = g[f];
            if (q >= k.x && q <= k.x + k.width && o >= k.y && o <= k.y + k.height) {
                if (k.bbd() === true && k.ozi() === true) {
                    k.cvv(!k.slw(), true);
                    k.liq();
                    for (var e = 0; e < m; e++) {
                        g[e].slz(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.wga = function () {
        var e = this.bco.qvh("vbuttons"),
            j = this.bco.qvh("cbuttons");
        for (var g = 0, d = e.length; g < d; g++) {
            var f = e[g];
            if (f.oru() == true) {
                clearInterval(this.mkj);
                f.aor(false, false);
                this.parent.cxx();
                return true
            }
        }
        for (var g = 0, d = j.length; g < d; g++) {
            var f = j[g];
            if (f.oru() == true) {
                f.aor(false, false);
                this.parent.cxx();
                return true
            }
        }
        return false
    };
    this.lkm = function (l) {
        var k = this.bco.qvh("buttons");
        if (this.ara) {
            return true
        }
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l == f.qvl) {
                if (f.ozi() && !f.yzr()) {
                    this.parent.whm.mvq("btn");
                    this.parent.whm.lry("btn");
                    f.aor(true, false);
                    f.liq();
                    for (var e = 0; e < d; e++) {
                        k[e].slz(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.ccd = function () {
        var g = this.bco.qvh("buttons");
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.oru() == true) {
                e.aor(false, false);
                this.parent.cxx();
                return true
            }
        }
        return false
    };
    this.rsc = function (d) {
        this.bco.fmj("buttons", "#giu", [d]);
        this.bco.fmj("checkboxes", "#giu", [d]);
        if (d === true && this.pbg === true) {
            this.bco.psl("cmincredit", "#giu", [false])
        }
    };
    this.eca = function (d) {
        this.pwg = d.g;
        this.qbr = d.v;
        this.glv = d.v;
        this.ven = d.r;
        this.pbg = d.l;
        if (typeof d.m != "undefined" && d.m != null && d.m > 0) {
            this.rke = d.m;
            this.jqa = d.m
        }
    };
    this.ohs = function () {
        if (this.ven === true) {
            this.hhk = this.parent.saw;
            this.mjb = this.parent.saw;
            this.jto = 0;
            this.ngv = 0
        }
    };
    this.xza = function () {
        if (this.pwg.length > 0 && this.jto >= 0 && this.hgu === false) {
            return this.pwg[this.jto]
        }
        return 0
    };
    this.slm = function () {
        var d = this.bco.uxx("cmincredit") == null || this.bco.psl("cmincredit", "#slw");
        if (this.hhk > 0 && d === true) {
            return this.hhk
        }
        return 0
    };
    this.tdz = function () {
        var d = this.bco.uxx("cmaxcredit") == null || this.bco.psl("cmaxcredit", "#slw");
        if (this.mjb > 0 && d === true) {
            return this.mjb
        }
        return 0
    };
    this.oll = function () {
        var d = this.bco.uxx("cmaxwin") == null || this.bco.psl("cmaxwin", "#slw");
        if (this.ngv > 0 && d === true) {
            return this.ngv
        }
        return 0
    };
    this.xfb = function () {
        var f = this.bco.uxx("cmincredit") == null || this.bco.psl("cmincredit", "#slw"),
            d = this.bco.uxx("cmaxcredit") == null || this.bco.psl("cmaxcredit", "#slw"),
            e = this.bco.uxx("cmaxwin") == null || this.bco.psl("cmaxwin", "#slw");
        this.ywi = false;
        this.hgu = false;
        this.glv = (this.jqa > 0) ? this.parent.zyq() * this.jqa : this.glv;
        this.qbr = (this.rke > 0) ? this.parent.zyq() * this.rke : this.qbr;
        if (this.ven === true) {
            f = this.pbg;
            d = false;
            e = false;
            this.ohs()
        } else {
            if (this.pbg === true) {
                f = true;
                this.hhk = (this.hhk < this.parent.saw) ? this.hhk : this.parent.saw;
                this.hhk = (this.hhk > 0) ? this.hhk : this.parent.saw
            } else {
                f = (this.hhk <= this.parent.saw) ? f : false;
                this.hhk = (this.hhk < this.parent.saw) ? this.hhk : this.parent.saw
            }
            d = (this.mjb >= this.parent.saw) ? d : false;
            this.mjb = (this.mjb > this.parent.saw) ? this.mjb : this.parent.saw
        }
        this.bco.psl("cmincredit", "#cvv", [f]);
        this.bco.psl("cmaxcredit", "#cvv", [d]);
        this.bco.psl("cmaxwin", "#cvv", [e]);
        this.bco.psl("gamesd", "#gtw", [(this.pwg[this.jto] > 0) ? this.pwg[this.jto] : "---"]);
        this.bco.psl("mincreditd", "#gtw", [(f === true && this.hhk > 0) ? this.parent.ait(this.hhk) : "---"]);
        this.bco.psl("maxcreditd", "#gtw", [(d === true && this.mjb > 0) ? this.parent.ait(this.mjb) : "---"]);
        this.bco.psl("maxwind", "#gtw", [(e === true && this.ngv > 0) ? this.parent.ait(this.ngv) : "---"]);
        this.bco.psl("lmincredit", "#aco", [f]);
        this.bco.psl("mmincredit", "#aco", [f && this.hhk < this.parent.saw]);
        this.bco.psl("lmaxcredit", "#aco", [d && this.mjb > this.parent.saw]);
        this.bco.psl("mmaxcredit", "#aco", [d]);
        this.bco.psl("lmaxwin", "#aco", [e && this.ngv > this.glv]);
        this.bco.psl("mmaxwin", "#aco", [e]);
        if (this.jgo === false) {
            this.rsc(true);
            this.aco(true);
            this.parent.cxx()
        } else {
            this.bya();
            this.parent.whm.mvq("panel_out");
            this.parent.whm.lry("panel_out");
            this.rbd()
        }
    };
    this.hme = function () {
        b.rsc(false);
        if (b.jgo === false) {
            b.aco(false);
            b.parent.cxx()
        } else {
            b.rja();
            b.parent.whm.mvq("panel_out");
            b.parent.whm.lry("panel_out");
            b.rbd()
        }
    };
    this.bya = function () {
        this.aco(true);
        this.ara = true;
        this.xpa = false;
        this.kzt = c;
        this.xzc = Math.floor(this.width / this.qfo);
        this.flg = 0;
        this.fql = 0;
        this.bmt = new Date().getTime()
    };
    this.rja = function () {
        this.ara = true;
        this.xpa = false;
        this.kzt = a;
        this.xzc = -Math.floor(this.width / this.qfo);
        this.flg = 1;
        this.fql = this.width;
        this.bmt = new Date().getTime()
    };
    this.rbd = function () {
        var d = b.azb,
            e = new Date().getTime();
        if (b.flg < b.qfo) {
            b.fql += b.xzc;
            b.flg++;
            b.parent.cxx();
            d = (((b.kzt === a) ? b.flg - 1 : b.flg) * b.azb - (e - b.bmt));
            b.smq = setTimeout(b.rbd, d)
        } else {
            b.ara = false;
            b.xpa = true;
            if (b.kzt == a) {
                b.aco(false);
                b.parent.gtq();
                if (b.ywi === true) {
                    b.rus = setTimeout(b.parent.msp, 200)
                }
            } else {
                if (b.kzt == c) {
                    b.rsc(true)
                }
            }
            b.parent.cxx()
        }
    };
    this.stop = function () {
        clearTimeout(this.smq);
        clearTimeout(this.mje);
        clearTimeout(this.rus);
        clearInterval(this.mkj)
    };
    this.cox = function (d) {
        this.bxf = d.omz;
        this.aca = d.iwh;
        this.gae = d.kdr;
        this.bco.psl("start", "#gtw", [d.start]);
        this.bco.psl("cancel", "#gtw", [d.wtk]);
        this.bco.psl("cmincredit", "#gtw", [d.eow]);
        this.bco.psl("cmaxcredit", "#gtw", [d.vhy]);
        this.bco.psl("cmaxwin", "#gtw", [d.hyy]);
        if (this.parent.urt === true && bmx.vbp.value44.d === true) {
            this.hjd = d.fpi
        }
    };
    this.cxx = function (n, m, o, j) {
        if (!this.bbd()) {
            return
        }
        var f = (n != null && m != null && o != null && j != null),
            p = this.context2D,
            d = this.bco.oxo(),
            e = this.prw,
            l = this.iff;
        if (this.swn) {
            e = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            e.addColorStop(0, this.prw);
            e.addColorStop(1, this.swn)
        }
        if (this.xlr) {
            if (this.kzg === "center") {
                l = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height)
            } else {
                if (this.kzg === "left") {
                    l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                } else {
                    if (this.kzg === "right") {
                        l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                    }
                }
            }
            if (this.kzg === "left") {
                l.addColorStop(1, this.iff);
                l.addColorStop(0, this.xlr)
            } else {
                if (this.kzg === "center" || this.kzg === "right") {
                    l.addColorStop(0, this.iff);
                    l.addColorStop(1, this.xlr)
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
        bmx.suj.hct(p, 0, 0, this.width, this.height, this.woy, this.fkq, this.fkq, this.woy, e, 1, l, this.hti, 1);
        bmx.suj.bwb(p, this.mza.x, this.mza.y, this.mza.width, this.mza.height, this.szw, this.atj, this.urv, this.hti / 2);
        bmx.suj.bwb(p, this.epf.x, this.epf.y, this.epf.width, this.epf.height, this.szw, this.atj, this.urv, this.hti / 2);
        bmx.suj.ibm(p, this.bxf, this.fjb, this.amh.x, this.amh.y, this.amh.width, this.amh.height, this.ojz, this.tvy, this.nio);
        bmx.suj.kqm(p, this.hjd, this.npv, this.ijc.x, this.ijc.y, this.ijc.width, this.ijc.height, this.ojz, this.tpn, this.nio, "center", true);
        bmx.suj.psw(p, this.aca, this.npv, this.wba.x, this.wba.y, this.wba.width, this.wba.height, this.ojz, this.tpn, this.nio, 0);
        bmx.suj.ibm(p, this.gae, this.npv, this.puy.x, this.puy.y, this.puy.width, this.puy.height, this.ojz, this.tpn, this.nio);
        for (var g = 0, k = d.length; g < k; g++) {
            d[g].cxx()
        }
        p.restore();
        if (this.tvv && this.ciq) {
            if (this.ara) {
                if (this.fql > 0) {
                    if (this.kzg === "left") {
                        this.tvv.drawImage(this.ciq, this.width - this.fql, 0, this.fql, this.height, this.x, this.y, this.fql, this.height)
                    } else {
                        if (this.kzg === "right") {
                            this.tvv.drawImage(this.ciq, 0, 0, this.fql, this.height, this.x + this.width - this.fql, this.y, this.fql, this.height)
                        }
                    }
                }
            } else {
                if (f) {
                    this.tvv.drawImage(this.ciq, n, m, o, j, this.x + n, this.y + m, o, j)
                } else {
                    this.tvv.drawImage(this.ciq, this.x, this.y)
                }
            }
        }
    };
    this.dgc = function () {
        b.parent.cxx();
        if (b.pwg[b.jto] <= 0) {
            return
        }
        if (b.jgo === false) {
            b.mje = setTimeout(b.parent.gtq, 400);
            b.rus = setTimeout(b.parent.msp, 500)
        } else {
            b.ara = true;
            b.ywi = true;
            b.mje = setTimeout(b.hme, 400)
        }
    };
    this.yux = function () {
        b.parent.cxx();
        b.hgu = true;
        if (b.jgo === false) {
            b.mje = setTimeout(b.parent.gtq, 400)
        } else {
            b.ara = true;
            b.mje = setTimeout(b.hme, 400)
        }
    };
    this.phx = function () {
        b.jto = (b.jto < b.pwg.length - 1) ? b.jto + 1 : 0;
        b.parent.whm.lry("step0");
        b.bco.psl("gamesd", "#gtw", [(b.pwg[b.jto] > 0) ? b.pwg[b.jto] : "---"]);
        b.parent.cxx();
        return (b.jto >= b.pwg.length - 1)
    };
    this.cai = function () {
        b.jto = (b.jto > 0) ? b.jto - 1 : b.pwg.length - 1;
        b.parent.whm.lry("step0");
        b.bco.psl("gamesd", "#gtw", [(b.pwg[b.jto] > 0) ? b.pwg[b.jto] : "---"]);
        b.parent.cxx();
        return (b.jto <= 0)
    };
    this.jms = function () {
        var d = b.bco.uxx("cmincredit") == null || b.bco.psl("cmincredit", "#slw");
        if (d === true) {
            if (++b.akz > 10) {
                b.hue = 10
            }
            b.hhk = (b.hhk + (b.qbr * b.hue) <= b.parent.saw) ? b.hhk + (b.qbr * b.hue) : b.parent.saw;
            b.parent.whm.lry("step0");
            b.bco.psl("mincreditd", "#gtw", [(b.hhk > 0) ? b.parent.ait(b.hhk) : "---"]);
            b.bco.psl("mmincredit", "#aco", [d && b.hhk < b.parent.saw]);
            b.bco.psl("lmincredit", "#aco", [d && b.hhk > 0]);
            b.parent.cxx();
            return (b.hhk >= b.parent.saw)
        }
        return true
    };
    this.gsz = function () {
        var d = b.bco.uxx("cmincredit") == null || b.bco.psl("cmincredit", "#slw");
        if (d === true) {
            if (++b.akz > 10) {
                b.hue = 10
            }
            b.hhk = (b.hhk - (b.qbr * b.hue) > 0) ? b.hhk - (b.qbr * b.hue) : 0;
            b.parent.whm.lry("step0");
            b.bco.psl("mincreditd", "#gtw", [(b.hhk > 0) ? b.parent.ait(b.hhk) : "---"]);
            b.bco.psl("mmincredit", "#aco", [d && b.hhk < b.parent.saw]);
            b.bco.psl("lmincredit", "#aco", [d && b.hhk > 0]);
            b.parent.cxx();
            return (b.hhk >= b.parent.saw || b.hhk <= 0)
        }
        return true
    };
    this.unx = function () {
        var d = b.bco.uxx("cmaxcredit") == null || b.bco.psl("cmaxcredit", "#slw");
        if (d === true) {
            if (++b.akz > 10) {
                b.hue = 10
            }
            b.mjb = (b.mjb + (b.glv * b.hue) > 0) ? b.mjb + (b.glv * b.hue) : 0;
            b.parent.whm.lry("step0");
            b.bco.psl("maxcreditd", "#gtw", [(b.mjb > 0) ? b.parent.ait(b.mjb) : "---"]);
            b.bco.psl("lmaxcredit", "#aco", [d && b.mjb > b.parent.saw]);
            b.parent.cxx();
            return (b.mjb <= b.parent.saw)
        }
        return true
    };
    this.bxy = function () {
        var d = b.bco.uxx("cmaxcredit") == null || b.bco.psl("cmaxcredit", "#slw");
        if (d === true) {
            if (++b.akz > 10) {
                b.hue = 10
            }
            b.mjb = (b.mjb - (b.glv * b.hue) > b.parent.saw) ? b.mjb - (b.glv * b.hue) : b.parent.saw;
            b.parent.whm.lry("step0");
            b.bco.psl("maxcreditd", "#gtw", [(b.mjb > 0) ? b.parent.ait(b.mjb) : "---"]);
            b.bco.psl("lmaxcredit", "#aco", [d && b.mjb > b.parent.saw]);
            b.parent.cxx();
            return (b.mjb <= b.parent.saw)
        }
        return true
    };
    this.vns = function () {
        var d = b.bco.uxx("cmaxwin") == null || b.bco.psl("cmaxwin", "#slw");
        if (d === true) {
            if (++b.akz > 10) {
                b.hue = 10
            }
            b.ngv = (b.ngv + (b.glv * b.hue) > 0) ? b.ngv + (b.glv * b.hue) : 0;
            b.parent.whm.lry("step0");
            b.bco.psl("maxwind", "#gtw", [(b.ngv > 0) ? b.parent.ait(b.ngv) : "---"]);
            b.bco.psl("lmaxwin", "#aco", [d && b.ngv > b.glv]);
            b.parent.cxx();
            return (b.ngv <= b.glv)
        }
        return true
    };
    this.vra = function () {
        var d = b.bco.uxx("cmaxwin") == null || b.bco.psl("cmaxwin", "#slw");
        if (d === true) {
            if (++b.akz > 10) {
                b.hue = 10
            }
            b.ngv = (b.ngv - (b.glv * b.hue) > 0) ? b.ngv - (b.glv * b.hue) : b.glv;
            b.parent.whm.lry("step0");
            b.bco.psl("maxwind", "#gtw", [(b.ngv > 0) ? b.parent.ait(b.ngv) : "---"]);
            b.bco.psl("lmaxwin", "#aco", [d && b.ngv > b.glv]);
            b.parent.cxx();
            return (b.ngv <= b.glv)
        }
        return true
    };
    this.bxn = function () {
        var d = b.bco.uxx("cmincredit") == null || b.bco.psl("cmincredit", "#slw");
        b.hhk = b.parent.saw;
        b.bco.psl("mincreditd", "#gtw", [(d === true && b.hhk > 0) ? b.parent.ait(b.hhk) : "---"]);
        b.bco.psl("lmincredit", "#aco", [d]);
        b.bco.psl("mmincredit", "#aco", [d && b.hhk < b.parent.saw]);
        b.parent.cxx()
    };
    this.pxo = function () {
        var d = b.bco.uxx("cmaxcredit") == null || b.bco.psl("cmaxcredit", "#slw");
        b.mjb = b.parent.saw;
        b.bco.psl("maxcreditd", "#gtw", [(d === true && b.mjb > 0) ? b.parent.ait(b.mjb) : "---"]);
        b.bco.psl("lmaxcredit", "#aco", [d && b.mjb > b.parent.saw]);
        b.bco.psl("mmaxcredit", "#aco", [d]);
        b.parent.cxx()
    };
    this.ppn = function () {
        var d = b.bco.uxx("cmaxwin") == null || b.bco.psl("cmaxwin", "#slw");
        if (b.ngv === 0) {
            b.ngv = b.glv
        }
        b.bco.psl("maxwind", "#gtw", [(d === true && b.ngv > 0) ? b.parent.ait(b.ngv) : "---"]);
        b.bco.psl("lmaxwin", "#aco", [d && b.ngv > b.glv]);
        b.bco.psl("mmaxwin", "#aco", [d]);
        b.parent.cxx()
    }
}
kfk.prototype = new dzq;

function eaw() {
    this.quq = "right";
    this.ktr = "left";
    this.lnx = null;
    this.ykf = null;
    this.bxf = null;
    this.wdy = -1;
    this.oar = -1;
    this.xpa = true;
    this.byg = false;
    this.cez = false;
    this.ara = false;
    this.dgj = 0;
    this.pxt = 0;
    this.axo = [];
    this.fiq = 0;
    this.pmz = 0;
    this.fui = 1;
    this.mkf = 0;
    this.ivf = 0;
    this.kzg = this.quq;
    this.ojz = null;
    this.nio = "bold";
    this.npv = "rgb(255,255,255)";
    this.prw = "rgb(0,0,0)";
    this.asc = "rgb(0,0,0)";
    this.azr = "rgb(0,0,0)";
    this.qhy = 0.7;
    this.zfd = null;
    this.hru = null;
    this.zdc = null;
    this.hcn = new ljp();
    this.sqi = new ljp();
    this.riq = new ljp();
    this.amh = new ljp();
    this.hti = 2;
    this.occ = 5;
    this.sdz = 4;
    this.cvq = 10;
    this.zms = 5;
    this.dpi = 15;
    var a = 200;
    this.uui = function (c, d, f) {
        this.axo = [];
        this.dgj = (d < 0) ? 0 : d;
        this.pxt = (f < 0) ? 0 : f;
        for (var e = this.dgj, b = 0; e <= this.pxt; e++) {
            this.axo[b++] = c[e]
        }
        this.fiq = this.axo.length;
        this.mkf = this.hcn.height / this.fiq
    };
    this.ilm = function (b) {
        try {
            this.dpi = b.fontSize;
            this.hti = b.lbt;
            this.occ = b.mov;
            this.sdz = b.xxp;
            this.cvq = b.eua;
            this.zms = b.urs;
            this.hcn = new ljp(b.hip.x, b.hip.y + b.elg, b.hip.width, b.hip.height - 2 * b.elg);
            this.sqi = new ljp(b.hip.x, b.hip.y, b.hip.width, b.elg);
            this.riq = new ljp(b.hip.x, b.hip.y + b.hip.height - b.elg, b.hip.width, b.elg);
            this.amh = b.oxh
        } catch (c) {
            console.error(c)
        }
    };
    this.whj = function (b) {
        try {
            this.ojz = b.font;
            this.nio = b.cvw;
            this.npv = b.hij;
            this.prw = b.backgroundColor;
            this.asc = b.adx;
            this.azr = b.mfl;
            this.qhy = b.sma;
            this.hru = this.context2D.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            this.hru.addColorStop(0, b.pmm);
            this.hru.addColorStop(1, b.ece);
            this.zfd = this.context2D.createLinearGradient(this.hcn.x, 0, this.hcn.x + this.hcn.width, 0);
            this.zdc = this.context2D.createLinearGradient(this.width, this.height / 2, 0, this.height / 2);
            if (this.kzg === this.quq) {
                this.zfd.addColorStop(0, b.wmt);
                this.zfd.addColorStop(1, b.ztr);
                this.zdc.addColorStop(0, b.qzi);
                this.zdc.addColorStop(1, b.kpe)
            } else {
                if (this.kzg === this.ktr) {
                    this.zfd.addColorStop(0, b.ztr);
                    this.zfd.addColorStop(1, b.wmt);
                    this.zdc.addColorStop(0, b.kpe);
                    this.zdc.addColorStop(1, b.qzi)
                }
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.nyc = function (b, f, c) {
        if (this.ara || !this.xpa || this.cez) {
            return true
        }
        if ((b < this.x || b > this.x + this.width || f < this.y || f > this.y + this.height)) {
            return false
        } else {
            var e = b - this.x,
                d = f - this.y;
            if (this.riq.heh(e, d)) {
                this.gdd(-1);
                this.lry();
                this.slz(true, true)
            } else {
                if (this.sqi.heh(e, d)) {
                    this.gdd(1);
                    this.lry();
                    this.slz(true, true)
                } else {
                    if (this.hcn.heh(e, d)) {
                        this.byg = true;
                        this.tqk(f);
                        this.slz(true, true)
                    }
                }
            }
            this.liq(this.pmz);
            return true
        }
    };
    this.wga = function () {
        if (this.byg) {
            this.byg = false;
            this.lry();
            return true
        }
        return false
    };
    this.lkm = function (b) {
        if (this.ara || !this.xpa || this.cez) {
            return true
        }
        if (b == this.oar) {
            this.gdd(-1);
            this.lry();
            this.slz(true, true);
            this.liq(this.pmz);
            return true
        } else {
            if (b == this.wdy) {
                this.gdd(1);
                this.lry();
                this.slz(true, true);
                this.liq(this.pmz);
                return true
            }
        }
        return false
    };
    this.ccd = function () {};
    this.uyv = function (b, d, c) {
        if (!this.byg) {
            return false
        }
        if (b >= this.x + this.hcn.x && b <= this.x + this.hcn.x + this.hcn.width && d >= this.y + this.hcn.y && d <= this.y + this.hcn.y + this.hcn.height) {
            this.tqk(d);
            this.liq(this.pmz);
            return true
        }
        return false
    };
    this.slz = function (b, c) {
        this.cez = b;
        c = (c === false) ? false : true;
        clearTimeout(this.ycu);
        if (this.cez === true && c === true) {
            this.ycu = setTimeout(this.pmr, a)
        }
    };
    this.pmr = function () {};
    this.liq = function (b) {};
    this.lry = function () {};
    this.oxe = function (b, c) {
        this.dgj = (b < 0) ? 0 : b;
        this.pxt = (c < 0) ? 0 : c;
        if (this.axo) {
            this.pxt = (this.pxt > this.axo.length - 1) ? this.axo.length - 1 : this.pxt
        }
    };
    this.xfb = function () {
        this.aco(true, true)
    };
    this.hme = function () {
        this.aco(false, true)
    };
    this.giu = function (b) {
        this.xpa = b
    };
    this.ozi = function () {
        return this.xpa
    };
    this.vjs = function (b, c) {
        this.pmz = b;
        if (this.pmz < this.dgj) {
            this.pmz = this.dgj
        }
        if (this.pmz >= this.pxt) {
            this.pmz = this.pxt
        }
        this.fui = this.pmz + 1;
        if (c && c === true) {
            this.parent.cxx()
        }
    };
    this.nau = function (d, e) {
        this.pmz = 0;
        for (var c = 0, b = this.axo.length; c < b; c++) {
            if (this.axo[c] == d) {
                this.pmz = c;
                break
            }
        }
        this.pmz = (this.pmz >= this.dgj) ? this.pmz : this.dgj;
        this.pmz = (this.pmz < this.pxt) ? this.pmz : this.pxt;
        this.fui = this.pmz + 1;
        if (e) {
            this.parent.cxx()
        }
    };
    this.tqk = function (b) {
        this.pmz = Math.ceil(((this.hcn.height) - (b - this.hcn.y - this.y)) / this.mkf) - 1;
        this.pmz = (this.pmz >= this.dgj) ? this.pmz : this.dgj;
        this.pmz = (this.pmz < this.pxt) ? this.pmz : this.pxt;
        this.fui = this.pmz + 1;
        this.parent.cxx()
    };
    this.gdd = function (b) {
        this.pmz += b;
        this.pmz = (this.pmz >= this.dgj) ? this.pmz : this.dgj;
        this.pmz = (this.pmz < this.pxt) ? this.pmz : this.pxt;
        this.fui = this.pmz + 1;
        this.parent.cxx()
    };
    this.cxx = function () {
        if (!this.bbd() || !this.parent.nyy()) {
            return
        }
        this.cyh();
        if (this.tvv && this.ciq) {
            this.tvv.drawImage(this.ftz, this.x, this.y)
        }
    };
    this.cyh = function () {
        var b = this.context2D;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        this.hbw(b);
        this.psb(b);
        this.ygt(b);
        this.umn(b);
        this.tjz(b);
        b.restore()
    };
    this.hbw = function (b) {
        if (this.kzg === this.ktr) {
            bmx.suj.hct(b, 0, 0, this.width, this.height, this.occ, 0, 0, this.occ, this.prw, 0.4, this.zdc, this.hti, 1)
        } else {
            if (this.kzg === this.quq) {
                bmx.suj.hct(b, 0, 0, this.width, this.height, 0, this.occ, this.occ, 0, this.prw, 0.4, this.zdc, this.hti, 1)
            }
        }
    };
    this.psb = function (b) {
        bmx.suj.jbt(b, this.hcn.x, this.hcn.y, this.hcn.width, this.hcn.height, this.asc, 1)
    };
    this.ygt = function (b) {
        bmx.suj.jbt(b, this.hcn.x, this.hcn.y + this.hcn.height - Math.round(this.fui * this.mkf), this.hcn.width, Math.round(this.fui * this.mkf), this.hru, 1)
    };
    this.umn = function (b) {
        bmx.suj.jbt(b, this.hcn.x - this.sdz, this.hcn.y - this.sdz, this.hcn.width + 2 * this.sdz, this.hcn.height + 2 * this.sdz, null, 0, this.zfd, this.sdz, 1);
        if (this.kzg === this.ktr) {
            bmx.suj.hct(b, this.hcn.x - this.sdz, this.sqi.y, this.hcn.width + 2 * this.sdz, this.sqi.height, this.cvq, 0, 0, 0, this.zfd, 1);
            bmx.suj.hct(b, this.hcn.x - this.sdz, this.riq.y, this.hcn.width + 2 * this.sdz, this.riq.height, 0, 0, 0, this.cvq, this.zfd, 1)
        } else {
            if (this.kzg === this.quq) {
                bmx.suj.hct(b, this.hcn.x - this.sdz, this.sqi.y, this.hcn.width + 2 * this.sdz, this.sqi.height, 0, this.cvq, 0, 0, this.zfd, 1);
                bmx.suj.hct(b, this.hcn.x - this.sdz, this.riq.y, this.hcn.width + 2 * this.sdz, this.riq.height, 0, 0, this.cvq, 0, this.zfd, 1)
            }
        }
        b.strokeStyle = this.zfd;
        b.lineWidth = Math.round(this.sdz / 4);
        b.beginPath();
        for (var c = 1; c < this.fiq; c++) {
            b.moveTo(this.hcn.x, this.hcn.y + this.hcn.height - Math.round(c * this.mkf));
            b.lineTo(this.hcn.x + this.hcn.width, this.hcn.y + this.hcn.height - Math.round(c * this.mkf))
        }
        b.closePath();
        b.stroke();
        if (this.lnx) {
            if (this.kzg === this.ktr) {
                b.drawImage(this.lnx, 0, 0, this.lnx.width / 2, this.lnx.height, this.hcn.x, this.hcn.y, this.hcn.width, this.hcn.height)
            } else {
                if (this.kzg === this.quq) {
                    b.drawImage(this.lnx, this.lnx.width / 2, 0, this.lnx.width / 2, this.lnx.height, this.hcn.x, this.hcn.y, this.hcn.width, this.hcn.height)
                }
            }
        }
    };
    this.tjz = function (c) {
        var f = this.npv,
            e = this.npv,
            b = 0,
            d = 0;
        if (this.kzg === this.ktr) {
            b = this.zms;
            d = this.hcn.x - 2 * this.zms
        } else {
            if (this.kzg === this.quq) {
                b = this.hcn.x + this.hcn.width + this.zms;
                d = this.width - this.zms - (this.hcn.x + this.hcn.width + this.zms)
            }
        }
        if (this.pmz > 0 && this.pmz < this.axo.length - 1) {
            bmx.suj.jbt(c, b, this.hcn.y + ((this.fiq - this.fui) * this.mkf), d, this.mkf, this.azr, this.qhy);
            bmx.suj.ond(c, this.axo[this.pmz], this.hru, b, this.hcn.y + ((this.fiq - this.fui) * this.mkf) + (this.mkf - this.dpi) / 2, d, this.dpi, this.ojz, this.dpi, this.nio, this.zms)
        } else {
            if (this.pmz == 0) {
                f = this.hru
            } else {
                if (this.pmz == this.axo.length - 1) {
                    e = this.hru
                }
            }
        }
        bmx.suj.jbt(c, b, this.hcn.y + (this.mkf * (this.fiq - 1)), d, this.mkf, this.azr, this.qhy);
        bmx.suj.ond(c, this.axo[0], f, b, this.hcn.y + (this.mkf * (this.fiq - 1)) + (this.mkf - this.dpi) / 2, d, this.dpi, this.ojz, this.dpi, this.nio, this.zms);
        bmx.suj.jbt(c, b, this.hcn.y, d, this.mkf, this.azr, this.qhy);
        bmx.suj.ond(c, this.axo[this.axo.length - 1], e, b, this.hcn.y + (this.mkf - this.dpi) / 2, d, this.dpi, this.ojz, this.dpi, this.nio, this.zms);
        bmx.suj.ibm(c, "+", this.npv, this.sqi.x, this.sqi.y, this.sqi.width, this.sqi.height, this.ojz, this.dpi, this.nio);
        bmx.suj.ibm(c, "", this.npv, this.riq.x, this.riq.y, this.riq.width, this.riq.height, this.ojz, this.dpi, this.nio);
        if (this.bxf) {
            bmx.suj.ibm(c, this.bxf, this.npv, this.amh.x, this.amh.y, this.amh.width, this.amh.height, this.ojz, this.dpi, this.nio)
        }
    }
}
eaw.prototype = new dzq;

function xzt() {
    var a = this;
    this.bco = null;
    this.qle = false;
    this.wnk = "";
    this.chg = "";
    this.jyy = "";
    this.aup = "";
    this.hjd = "";
    this.aca = "";
    this.gae = "";
    this.ojz = "arial";
    this.nio = "bold";
    this.npv = "white";
    this.prw = "black";
    this.swn = null;
    this.iff = "white";
    this.xlr = "rgb(150,150,150)";
    this.hti = 3;
    this.occ = 4;
    this.xse = 24;
    this.eur = 24;
    this.tpn = 24;
    this.yrc = new ljp();
    this.iyz = new ljp();
    this.jie = new ljp();
    this.qbx = new ljp();
    this.utv = new ljp();
    this.cjw = new ljp();
    this.kga = new ljp();
    this.pwg = [];
    this.jto = 0;
    this.qbr = 0;
    this.glv = 0;
    this.rke = 0;
    this.jqa = 0;
    this.hhk = 0;
    this.mjb = 0;
    this.ngv = 0;
    this.vhw = false;
    this.pbg = false;
    this.pmz = 0;
    this.wgt = true;
    this.ezr = true;
    this.uyh = null;
    this.mkj = 0;
    this.akz = 0;
    this.hue = 1;
    this.roi = 250;
    this.jbf = function (b, d, c) {
        xzt.prototype.jbf.call(this, b, d, c);
        this.bco = new klf();
        this.bco.jbf();
        this.bco.pvt("buttons");
        this.bco.pvt("displays");
        this.bco.pvt("checkboxes");
        this.bco.pvt("lbuttons");
        this.bco.pvt("mbuttons");
        this.bco.pvt("tbuttons");
        this.bco.pvt("bbuttons");
        this.bco.pvt("bdisplays");
        this.bco.pvt("abuttons");
        this.bco.pvt("adisplays");
        this.bco.pvt("acheckboxes");
        this.bco.pvt("sbuttons");
        this.bco.pvt("hbuttons")
    };
    this.hyf = function (b) {
        try {
            this.lqg(b);
            this.vmk(b);
            this.rhi(b)
        } catch (c) {
            console.error(c)
        }
    };
    this.whj = function (b) {
        try {
            var c = this.bco.qvh("lbuttons"),
                n = this.bco.qvh("mbuttons"),
                k = this.bco.qvh("tbuttons"),
                m = this.bco.qvh("sbuttons"),
                l = this.bco.qvh("hbuttons"),
                f = this.bco.qvh("displays");
            this.ojz = b.font;
            this.nio = b.cvw;
            this.npv = b.hij;
            this.prw = b.backgroundColor;
            this.swn = b.vsa;
            this.iff = b.borderColor;
            this.xlr = b.tmq;
            for (var d = 0, g = c.length; d < g; d++) {
                c[d].whj(b.qke)
            }
            for (var d = 0, g = n.length; d < g; d++) {
                n[d].whj(b.hqd)
            }
            for (var d = 0, g = k.length; d < g; d++) {
                k[d].whj(b.djx)
            }
            for (var d = 0, g = f.length; d < g; d++) {
                f[d].whj(b.display)
            }
            for (var d = 0, g = m.length; d < g; d++) {
                m[d].whj(b.kls)
            }
            for (var d = 0, g = l.length; d < g; d++) {
                l[d].whj(b.kls)
            }
            this.bco.fmj("checkboxes", "#whj", [b.dmr])
        } catch (j) {
            console.error(j)
        }
    };
    this.ilm = function (g) {
        try {
            var b = this.bco.qvh("lbuttons"),
                o = this.bco.qvh("mbuttons"),
                l = this.bco.qvh("tbuttons"),
                n = this.bco.qvh("sbuttons"),
                m = this.bco.qvh("hbuttons"),
                c = this.bco.qvh("bdisplays"),
                f = this.bco.qvh("adisplays");
            emg = this.bco.qvh("checkboxes"), sbn = n.length, dfe = (sbn <= 2) ? g.cxu : (sbn <= 3) ? g.qfn : (sbn <= 4) ? g.ykx : g.lrw, sbn = m.length, icm = (sbn <= 2) ? g.cxu : (sbn <= 3) ? g.qfn : (sbn <= 4) ? g.ykx : g.lrw, pam = (this.parent.klc() != null) ? g.efy : g.oxl;
            this.hti = g.lbt;
            this.occ = g.mov;
            this.xse = g.qzk;
            this.eur = g.iqk;
            this.tpn = g.zcf;
            this.yrc = g.ynv;
            this.iyz = g.alr;
            this.jie = g.zzq;
            this.qbx = g.zke;
            this.utv = g.dyv;
            this.cjw = g.mpo;
            this.kga = g.cat;
            this.bco.psl("bett", "#cch", [pam.msx]);
            this.bco.psl("autot", "#cch", [pam.sha]);
            this.bco.psl("helpt", "#cch", [pam.bpc]);
            this.bco.psl("settingt", "#cch", [pam.cki]);
            this.bco.psl("returnt", "#cch", [pam.fav]);
            this.bco.psl("lbet", "#cch", [g.gxm]);
            this.bco.psl("mbet", "#cch", [g.rjv]);
            this.bco.psl("llines", "#cch", [g.sva]);
            this.bco.psl("mlines", "#cch", [g.phk]);
            this.bco.psl("betd", "#cch", [g.wpx]);
            this.bco.psl("linesd", "#cch", [g.vew]);
            this.bco.psl("totald", "#cch", [g.bxj]);
            this.bco.psl("lgames", "#cch", [g.ofv]);
            this.bco.psl("mgames", "#cch", [g.peh]);
            this.bco.psl("lmincredit", "#cch", [g.dmi]);
            this.bco.psl("mmincredit", "#cch", [g.xpb]);
            this.bco.psl("lmaxcredit", "#cch", [g.lfh]);
            this.bco.psl("mmaxcredit", "#cch", [g.pdv]);
            this.bco.psl("lmaxwin", "#cch", [g.hrt]);
            this.bco.psl("mmaxwin", "#cch", [g.znm]);
            this.bco.psl("gamesd", "#cch", [g.hrj]);
            this.bco.psl("mincreditd", "#cch", [g.jnn]);
            this.bco.psl("maxcreditd", "#cch", [g.cms]);
            this.bco.psl("maxwind", "#cch", [g.szb]);
            this.bco.psl("cmincredit", "#cch", [g.lug]);
            this.bco.psl("cmaxcredit", "#cch", [g.fhz]);
            this.bco.psl("cmaxwin", "#cch", [g.oqq]);
            for (var d = 0, j = b.length; d < j; d++) {
                b[d].ilm(g.qke)
            }
            for (var d = 0, j = o.length; d < j; d++) {
                o[d].ilm(g.hqd)
            }
            for (var d = 0, j = l.length; d < j; d++) {
                l[d].ilm(g.djx)
            }
            for (var d = 0, j = c.length; d < j; d++) {
                c[d].ilm(g.rjc)
            }
            for (var d = 0, j = f.length; d < j; d++) {
                f[d].ilm(g.hva)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].ilm(g.kls)
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].ilm(g.kls)
            }
            for (var d = 0, j = emg.length; d < j; d++) {
                emg[d].ilm(g.dmr)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].cch(dfe[d])
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].cch(icm[d])
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.lqg = function (c) {
        var b = (this.parent.klc() != null) ? c.efy : c.oxl;
        this.bco.jqp("bett", this.fmy(b.msx, null, this.parent.whm.wez("btn_b"), this.glj, null), ["buttons", "tbuttons"]);
        if (this.parent.klc() != null) {
            this.bco.jqp("autot", this.fmy(b.sha, null, this.parent.whm.wez("btn_as"), this.wyw, null), ["buttons", "tbuttons"])
        }
        this.bco.jqp("helpt", this.fmy(b.bpc, null, this.parent.whm.wez("btn_i"), this.mhq, null), ["buttons", "tbuttons"]);
        this.bco.jqp("settingt", this.fmy(b.cki, null, this.parent.whm.wez("btn_se"), this.mrb, null), ["buttons", "tbuttons"]);
        this.bco.jqp("returnt", this.fmy(b.fav, null, this.parent.whm.wez("btn_c"), this.lqv, null), ["buttons", "tbuttons"])
    };
    this.vmk = function (b) {
        this.bco.jqp("betd", this.jik(b.wpx, null, this.parent.cqx), ["displays", "bdisplays"]);
        this.bco.jqp("lbet", this.nda(b.gxm, "", this.parent.mjp), ["buttons", "lbuttons", "bbuttons"]);
        this.bco.jqp("mbet", this.nda(b.rjv, "+", this.parent.tib), ["buttons", "mbuttons", "bbuttons"]);
        this.bco.jqp("linesd", this.jik(b.vew, null, this.parent.sxk), ["displays", "bdisplays"]);
        if (this.qle) {
            this.bco.jqp("llines", this.nda(b.sva, "", this.parent.wvf), ["buttons", "lbuttons", "bbuttons"]);
            this.bco.jqp("mlines", this.nda(b.phk, "+", this.parent.vsb), ["buttons", "mbuttons", "bbuttons"])
        }
        this.bco.jqp("totald", this.jik(b.bxj, null, this.parent.zyq()), ["displays", "bdisplays"])
    };
    this.rhi = function (b) {
        this.bco.jqp("gamesd", this.jik(b.hrj, null, this.pwg[this.jto]), ["displays", "adisplays"]);
        this.bco.jqp("lgames", this.nda(b.ofv, "", this.cai), ["buttons", "lbuttons", "abuttons"]);
        this.bco.jqp("mgames", this.nda(b.peh, "+", this.phx), ["buttons", "mbuttons", "abuttons"]);
        this.bco.jqp("mincreditd", this.jik(b.jnn, null, "---"), ["displays", "adisplays"]);
        this.bco.jqp("lmincredit", this.nda(b.dmi, "", this.gsz), ["buttons", "lbuttons", "abuttons"]);
        this.bco.jqp("mmincredit", this.nda(b.xpb, "+", this.jms), ["buttons", "mbuttons", "abuttons"]);
        this.bco.jqp("maxcreditd", this.jik(b.cms, null, "---"), ["displays", "adisplays"]);
        this.bco.jqp("lmaxcredit", this.nda(b.lfh, "", this.bxy), ["buttons", "lbuttons", "abuttons"]);
        this.bco.jqp("mmaxcredit", this.nda(b.pdv, "+", this.unx), ["buttons", "mbuttons", "abuttons"]);
        this.bco.jqp("maxwind", this.jik(b.szb, null, "---"), ["displays", "adisplays"]);
        this.bco.jqp("lmaxwin", this.nda(b.hrt, "", this.vra), ["buttons", "lbuttons", "abuttons"]);
        this.bco.jqp("mmaxwin", this.nda(b.znm, "+", this.vns), ["buttons", "mbuttons", "abuttons"]);
        this.bco.jqp("cmincredit", this.ksk(b.lug, "", this.bxn), ["checkboxes", "acheckboxes"]);
        this.bco.jqp("cmaxcredit", this.ksk(b.fhz, "", this.pxo), ["checkboxes", "acheckboxes"]);
        this.bco.jqp("cmaxwin", this.ksk(b.oqq, "", this.ppn), ["checkboxes", "acheckboxes"])
    };
    this.zzj = function (j, g, f, e, d, b) {
        var c = new qxa();
        c.jbf(new ljp(0, 0, 1, 1), this.context2D);
        c.parent = this;
        c.liq = e;
        c.xfh = g;
        c.hrq(d, b);
        c.ilm(this.parent.tiq.wpj.kls);
        c.whj(this.parent.style.wpj.kls);
        c.tpx(f);
        this.bco.jqp(j, c, ["buttons", "sbuttons"])
    };
    this.pdz = function (f, e, d, c) {
        var b = new qxa();
        b.jbf(new ljp(0, 0, 1, 1), this.context2D);
        b.parent = this;
        b.liq = c;
        b.xfh = e;
        b.ilm(this.parent.tiq.wpj.kls);
        b.whj(this.parent.style.wpj.kls);
        b.tpx(d);
        this.bco.jqp(f, b, ["buttons", "hbuttons"])
    };
    this.jik = function (b, e, d) {
        var c = new jbb();
        c.jbf(b, this.context2D, null, e, d);
        c.parent = this;
        return c
    };
    this.nda = function (c, e, d) {
        var b = new bru();
        b.jbf(c, this.context2D, null, null, e);
        b.parent = this;
        b.liq = d;
        return b
    };
    this.fmy = function (d, g, f, e, c) {
        var b = new bru();
        b.jbf(d, this.context2D, null, f, g);
        b.parent = this;
        b.liq = e;
        if (c != null) {
            b.qvl = c
        }
        return b
    };
    this.ksk = function (c, e, d) {
        var b = new abg();
        b.jbf(c, this.context2D, null, e);
        b.parent = this;
        b.liq = d;
        return b
    };
    this.nyc = function (o, n) {
        var m = this.bco.qvh("buttons"),
            g = this.bco.qvh("checkboxes"),
            f = o - this.x,
            d = n - this.y;
        for (var e = 0, l = m.length; e < l; e++) {
            var b = m[e];
            if (f >= b.x && f <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.bbd() === true) {
                if (b.ozi() === true && b.yzr() === false) {
                    if (b instanceof qxa) {
                        this.parent.whm.mvq("btn");
                        this.parent.whm.lry("btn");
                        b.aor(true, true, true);
                        b.liq()
                    } else {
                        if (b instanceof bru) {
                            if (b.cdz() === "rect") {
                                this.parent.whm.mvq("btn");
                                this.parent.whm.lry("btn");
                                b.aor(true, true, false);
                                b.liq()
                            } else {
                                b.aor(true, false, false);
                                this.akz = 0;
                                this.hue = 1;
                                if (b.liq() === false) {
                                    this.uyh = function () {
                                        if (b.liq() === true) {
                                            clearInterval(a.mkj);
                                            b.aor(false, true);
                                            for (var p = 0; p < l; p++) {
                                                m[p].slz(false)
                                            }
                                        }
                                    };
                                    this.mkj = setInterval(this.uyh, this.roi)
                                }
                            }
                        }
                    }
                    for (var c = 0; c < l; c++) {
                        m[c].slz(true)
                    }
                    return true
                }
            }
        }
        for (var e = 0, l = g.length; e < l; e++) {
            var k = g[e];
            if (f >= k.x && f <= k.x + k.width && d >= k.y && d <= k.y + k.height) {
                if (k.bbd() === true && k.ozi() === true) {
                    k.cvv(!k.slw(), true);
                    k.liq();
                    for (var c = 0; c < l; c++) {
                        g[c].slz(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.wga = function () {
        var e = this.bco.qvh("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.oru() == true && !(c instanceof bru && c.cdz() === "rect")) {
                clearInterval(this.mkj);
                c.aor(false, true);
                return true
            }
        }
        return false
    };
    this.lkm = function (b) {};
    this.ccd = function (b) {};
    this.kcq = function (c, b, d) {
        this.bco.psl("betd", "#gtw", [c]);
        this.bco.psl("linesd", "#gtw", [b]);
        this.bco.psl("totald", "#gtw", [d]);
        this.parent.cxx()
    };
    this.xno = function (b) {
        this.pwg = b.g;
        this.qbr = b.v;
        this.glv = b.v;
        this.vhw = b.r;
        this.pbg = b.l;
        if (typeof b.m != "undefined" && b.m != null && b.m > 0) {
            this.rke = b.m;
            this.jqa = b.m
        }
    };
    this.epb = function () {
        if (this.vhw === true) {
            this.hhk = this.parent.saw;
            this.mjb = this.parent.saw;
            this.jto = 0;
            this.ngv = 0
        }
    };
    this.xza = function () {
        if (this.pwg.length > 0 && this.jto >= 0) {
            return this.pwg[this.jto]
        }
        return 0
    };
    this.slm = function () {
        var b = this.bco.uxx("cmincredit") == null || this.bco.psl("cmincredit", "#slw");
        if (this.hhk > 0 && b === true) {
            return this.hhk
        }
        return 0
    };
    this.tdz = function () {
        var b = this.bco.uxx("cmaxcredit") == null || this.bco.psl("cmaxcredit", "#slw");
        if (this.mjb > 0 && b === true) {
            return this.mjb
        }
        return 0
    };
    this.oll = function () {
        var b = this.bco.uxx("cmaxwin") == null || this.bco.psl("cmaxwin", "#slw");
        if (this.ngv > 0 && b === true) {
            return this.ngv
        }
        return 0
    };
    this.xfb = function (c, f, d) {
        if (this.pwg && this.pwg.length > 0) {
            var g = this.bco.uxx("cmincredit") == null || this.bco.psl("cmincredit", "#slw"),
                e = this.bco.uxx("cmaxcredit") == null || this.bco.psl("cmaxcredit", "#slw"),
                b = this.bco.uxx("cmaxwin") == null || this.bco.psl("cmaxwin", "#slw");
            if (this.vhw === true) {
                g = this.pbg;
                e = false;
                b = false;
                this.epb()
            } else {
                if (this.pbg === true) {
                    g = true;
                    this.hhk = (this.hhk < this.parent.saw) ? this.hhk : this.parent.saw;
                    this.hhk = (this.hhk > 0) ? this.hhk : this.parent.saw
                } else {
                    g = (this.hhk < this.parent.saw) ? g : false;
                    this.hhk = (this.hhk < this.parent.saw) ? this.hhk : this.parent.saw
                }
                e = (this.mjb > this.parent.saw) ? e : false;
                this.mjb = (this.mjb > this.parent.saw) ? this.mjb : this.parent.saw
            }
            this.bco.psl("cmincredit", "#cvv", [g]);
            this.bco.psl("cmaxcredit", "#cvv", [e]);
            this.bco.psl("cmaxwin", "#cvv", [b]);
            this.bco.psl("gamesd", "#gtw", [(this.pwg[this.jto] > 0) ? this.pwg[this.jto] : "---"]);
            this.bco.psl("mincreditd", "#gtw", [(g === true && this.hhk > 0) ? this.parent.ait(this.hhk) : "---"]);
            this.bco.psl("maxcreditd", "#gtw", [(e === true && this.mjb > 0) ? this.parent.ait(this.mjb) : "---"]);
            this.bco.psl("maxwind", "#gtw", [(b === true && this.ngv > 0) ? this.parent.ait(this.ngv) : "---"]);
            this.bco.psl("lmincredit", "#aco", [g]);
            this.bco.psl("mmincredit", "#aco", [g]);
            this.bco.psl("lmaxcredit", "#aco", [e]);
            this.bco.psl("mmaxcredit", "#aco", [e]);
            this.bco.psl("lmaxwin", "#aco", [b]);
            this.bco.psl("mmaxwin", "#aco", [b])
        }
        this.wgt = c;
        this.ezr = f;
        if (typeof d == "number") {
            if (d === 0) {
                this.glj()
            } else {
                if (d === 1) {
                    if (this.parent.klc() != null) {
                        this.wyw()
                    } else {
                        this.mhq()
                    }
                } else {
                    if (d === 2) {
                        if (this.parent.klc() != null) {
                            this.mhq()
                        } else {
                            this.mrb()
                        }
                    } else {
                        if (d === 3 && this.parent.klc() != null) {
                            this.mrb()
                        }
                    }
                }
            }
        } else {
            this.glj()
        }
        this.bco.fmj("tbuttons", "#giu", [true]);
        this.aco(true);
        this.parent.cxx()
    };
    this.hme = function () {
        this.bco.fmj("tbuttons", "#giu", [false]);
        this.bco.fmj("bbuttons", "#giu", [false]);
        this.bco.fmj("sbuttons", "#giu", [false]);
        this.bco.fmj("abuttons", "#giu", [false]);
        this.bco.fmj("acheckboxes", "#giu", [false]);
        this.aco(false);
        this.parent.cxx()
    };
    this.stop = function () {
        clearInterval(this.mkj)
    };
    this.cox = function (d, b) {
        var c = "";
        this.bco.psl("language", "#gtw", [bmx.qsx.ewo(d.language)]);
        this.bco.psl("audio", "#gtw", [bmx.qsx.ewo(d.audio)]);
        this.bco.psl("melody", "#gtw", [bmx.qsx.ewo(d.fmz)]);
        this.bco.psl("fullscreen", "#gtw", [bmx.qsx.ewo(d.xws)]);
        this.bco.psl("turbo", "#gtw", [bmx.qsx.ewo(d.qhe)]);
        this.bco.psl("help", "#gtw", [bmx.qsx.ewo(d.cfr)]);
        this.bco.psl("history", "#gtw", [bmx.qsx.ewo(d.eps)]);
        this.bco.psl("statistic", "#gtw", [bmx.qsx.ewo(d.fpm)]);
        this.bco.psl("rules", "#gtw", [bmx.qsx.ewo(d.odp)]);
        this.bco.psl("gamble", "#gtw", [bmx.qsx.ewo(d.pch)]);
        if (bmx.qsx.nxy[bmx.qsx.jye] === bmx.hvp.ktr) {
            c = bmx.qsx.ewo(d.left)
        } else {
            if (bmx.qsx.nxy[bmx.qsx.jye] === bmx.hvp.quq) {
                c = bmx.qsx.ewo(d.gqz)
            } else {
                if (bmx.qsx.nxy[bmx.qsx.jye] === bmx.hvp.afh) {
                    c = bmx.qsx.ewo(d.wqq)
                }
            }
        }
        this.bco.psl("adjustment", "#gtw", [c]);
        if (b && b === true) {
            this.wnk = bmx.qsx.ewo(d.lpn) + "/" + bmx.qsx.ewo(d.lln) + ":";
            this.chg = bmx.qsx.ewo(d.sxk) + ":"
        } else {
            this.wnk = bmx.qsx.ewo(d.lpn) + ":"
        }
        this.jyy = bmx.qsx.ewo(d.avu) + ":";
        this.aca = bmx.qsx.ewo(d.iwh);
        this.gae = bmx.qsx.ewo(d.kdr);
        if (this.parent.urt === true && bmx.vbp.value44.d === true) {
            this.hjd = bmx.qsx.ewo(d.fpi)
        }
        this.bco.psl("cmincredit", "#gtw", [bmx.qsx.ewo(d.eow)]);
        this.bco.psl("cmaxcredit", "#gtw", [bmx.qsx.ewo(d.vhy)]);
        this.bco.psl("cmaxwin", "#gtw", [bmx.qsx.ewo(d.hyy)])
    };
    this.cxx = function (l, j, m, e) {
        if (!this.bbd() || !this.parent.nyy()) {
            return
        }
        var c = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = this.bco.qvh("tbuttons"),
            b = this.prw,
            g = this.iff;
        if (this.swn) {
            b = n.createRadialGradient(this.x + this.width / 2, this.y + this.height / 2, this.height / 6, this.x + this.width / 2, this.y + this.height / 2, this.height);
            b.addColorStop(0, this.prw);
            b.addColorStop(1, this.swn)
        }
        if (this.xlr) {
            g = n.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            g.addColorStop(0, this.iff);
            g.addColorStop(1, this.xlr)
        }
        n.save();
        n.clearRect(0, 0, this.width, this.height);
        if (c) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        bmx.suj.bwb(n, 0, 0, this.width, this.height, this.occ, b, g, this.hti);
        for (var d = 0, f = k.length; d < f; d++) {
            k[d].cxx()
        }
        if (this.pmz === 0) {
            this.hkk(n)
        } else {
            if (this.pmz === 1) {
                this.vsz(n)
            } else {
                if (this.pmz === 2) {
                    this.rnk(n)
                } else {
                    if (this.pmz === 3) {
                        this.xsm(n)
                    }
                }
            }
        }
        n.restore();
        if (this.tvv && this.ciq) {
            if (c) {
                this.tvv.drawImage(this.ciq, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.tvv.drawImage(this.ciq, this.x, this.y)
            }
        }
    };
    this.hkk = function (c) {
        var f = this.bco.qvh("bbuttons"),
            d = this.bco.qvh("bdisplays");
        if (this.yrc.width > 0 && this.yrc.height > 0) {
            bmx.suj.psw(c, this.wnk, this.npv, this.yrc.x, this.yrc.y, this.yrc.width, this.yrc.height, this.ojz, this.xse, this.nio, 0)
        }
        if (this.iyz.width > 0 && this.iyz.height > 0) {
            bmx.suj.psw(c, this.chg, this.npv, this.iyz.x, this.iyz.y, this.iyz.width, this.iyz.height, this.ojz, this.xse, this.nio, 0)
        }
        if (this.jie.width > 0 && this.jie.height > 0) {
            bmx.suj.psw(c, this.jyy, this.npv, this.jie.x, this.jie.y, this.jie.width, this.jie.height, this.ojz, this.xse, this.nio, 0)
        }
        bmx.suj.kqm(c, this.aup, this.npv, this.qbx.x, this.qbx.y, this.qbx.width, this.qbx.height, this.ojz, this.tpn, this.nio, "center", true);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].cxx()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].cxx()
        }
    };
    this.vsz = function (c) {
        var f = this.bco.qvh("abuttons"),
            d = this.bco.qvh("adisplays"),
            g = this.bco.qvh("acheckboxes");
        bmx.suj.kqm(c, this.hjd, this.npv, this.utv.x, this.utv.y, this.utv.width, this.utv.height, this.ojz, this.tpn, this.nio, "center", true);
        bmx.suj.psw(c, this.aca, this.npv, this.cjw.x, this.cjw.y, this.cjw.width, this.cjw.height, this.ojz, this.eur, this.nio, 0);
        bmx.suj.ibm(c, this.gae, this.npv, this.kga.x, this.kga.y, this.kga.width, this.kga.height, this.ojz, this.eur, this.nio);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].cxx()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].cxx()
        }
        for (var e = 0, b = g.length; e < b; e++) {
            g[e].cxx()
        }
    };
    this.rnk = function (c) {
        var d = this.bco.qvh("hbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].cxx()
        }
    };
    this.xsm = function (c) {
        var d = this.bco.qvh("sbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].cxx()
        }
    };
    this.phx = function () {
        a.jto = (a.jto < a.pwg.length - 1) ? a.jto + 1 : 0;
        a.parent.whm.lry("btn");
        a.bco.psl("gamesd", "#gtw", [(a.pwg[a.jto] > 0) ? a.pwg[a.jto] : "---"]);
        a.cxx();
        return (a.jto >= a.pwg.length - 1)
    };
    this.cai = function () {
        a.jto = (a.jto > 0) ? a.jto - 1 : a.pwg.length - 1;
        a.parent.whm.lry("btn");
        a.bco.psl("gamesd", "#gtw", [(a.pwg[a.jto] > 0) ? a.pwg[a.jto] : "---"]);
        a.cxx();
        return (a.jto <= 0)
    };
    this.jms = function () {
        var b = a.bco.uxx("cmincredit") == null || a.bco.psl("cmincredit", "#slw");
        if (b === true) {
            if (++a.akz > 10) {
                a.hue = 10
            }
            a.hhk = (a.hhk + (a.qbr * a.hue) <= a.parent.saw) ? a.hhk + (a.qbr * a.hue) : a.parent.saw;
            a.parent.whm.lry("btn");
            a.bco.psl("mincreditd", "#gtw", [(a.hhk > 0) ? a.parent.ait(a.hhk) : "---"]);
            a.bco.psl("mmincredit", "#aco", [b && a.hhk < a.parent.saw]);
            a.bco.psl("lmincredit", "#aco", [b && a.hhk > 0]);
            a.cxx();
            return (a.hhk >= a.parent.saw)
        }
        return true
    };
    this.gsz = function () {
        var b = a.bco.uxx("cmincredit") == null || a.bco.psl("cmincredit", "#slw");
        if (b === true) {
            if (++a.akz > 10) {
                a.hue = 10
            }
            a.hhk = (a.hhk - (a.qbr * a.hue) > 0) ? a.hhk - (a.qbr * a.hue) : 0;
            a.parent.whm.lry("btn");
            a.bco.psl("mincreditd", "#gtw", [(a.hhk > 0) ? a.parent.ait(a.hhk) : "---"]);
            a.bco.psl("mmincredit", "#aco", [b && a.hhk < a.parent.saw]);
            a.bco.psl("lmincredit", "#aco", [b && a.hhk > 0]);
            a.cxx();
            return (a.hhk >= a.parent.saw || a.hhk <= 0)
        }
        return true
    };
    this.unx = function () {
        var b = a.bco.uxx("cmaxcredit") == null || a.bco.psl("cmaxcredit", "#slw");
        if (b === true) {
            if (++a.akz > 10) {
                a.hue = 10
            }
            a.mjb = (a.mjb + (a.glv * a.hue) > 0) ? a.mjb + (a.glv * a.hue) : 0;
            a.parent.whm.lry("btn");
            a.bco.psl("maxcreditd", "#gtw", [(a.mjb > 0) ? a.parent.ait(a.mjb) : "---"]);
            a.bco.psl("lmaxcredit", "#aco", [b && a.mjb > a.parent.saw]);
            a.cxx();
            return (a.mjb <= a.parent.saw)
        }
        return true
    };
    this.bxy = function () {
        var b = a.bco.uxx("cmaxcredit") == null || a.bco.psl("cmaxcredit", "#slw");
        if (b === true) {
            if (++a.akz > 10) {
                a.hue = 10
            }
            a.mjb = (a.mjb - (a.glv * a.hue) > a.parent.saw) ? a.mjb - (a.glv * a.hue) : a.parent.saw;
            a.parent.whm.lry("btn");
            a.bco.psl("maxcreditd", "#gtw", [(a.mjb > 0) ? a.parent.ait(a.mjb) : "---"]);
            a.bco.psl("lmaxcredit", "#aco", [b && a.mjb > a.parent.saw]);
            a.cxx();
            return (a.mjb <= a.parent.saw)
        }
        return true
    };
    this.vns = function () {
        var b = a.bco.uxx("cmaxwin") == null || a.bco.psl("cmaxwin", "#slw");
        if (b === true) {
            if (++a.akz > 10) {
                a.hue = 10
            }
            a.ngv = (a.ngv + (a.glv * a.hue) > 0) ? a.ngv + (a.glv * a.hue) : 0;
            a.parent.whm.lry("btn");
            a.bco.psl("maxwind", "#gtw", [(a.ngv > 0) ? a.parent.ait(a.ngv) : "---"]);
            a.bco.psl("lmaxwin", "#aco", [b && a.ngv > a.glv]);
            a.cxx();
            return (a.ngv <= a.glv)
        }
        return true
    };
    this.vra = function () {
        var b = a.bco.uxx("cmaxwin") == null || a.bco.psl("cmaxwin", "#slw");
        if (b === true) {
            if (++a.akz > 10) {
                a.hue = 10
            }
            a.ngv = (a.ngv - (a.glv * a.hue) > 0) ? a.ngv - (a.glv * a.hue) : a.glv;
            a.parent.whm.lry("btn");
            a.bco.psl("maxwind", "#gtw", [(a.ngv > 0) ? a.parent.ait(a.ngv) : "---"]);
            a.bco.psl("lmaxwin", "#aco", [b && a.ngv > a.glv]);
            a.cxx();
            return (a.ngv <= a.glv)
        }
        return true
    };
    this.bxn = function () {
        var b = a.bco.uxx("cmincredit") == null || a.bco.psl("cmincredit", "#slw");
        a.hhk = a.parent.saw;
        a.bco.psl("mincreditd", "#gtw", [(b === true && a.hhk > 0) ? a.parent.ait(a.hhk) : "---"]);
        a.bco.psl("lmincredit", "#aco", [b]);
        a.bco.psl("mmincredit", "#aco", [b && a.hhk < a.parent.saw]);
        a.cxx()
    };
    this.pxo = function () {
        var b = a.bco.uxx("cmaxcredit") == null || a.bco.psl("cmaxcredit", "#slw");
        a.mjb = a.parent.saw;
        a.bco.psl("maxcreditd", "#gtw", [(b === true && a.mjb > 0) ? a.parent.ait(a.mjb) : "---"]);
        a.bco.psl("lmaxcredit", "#aco", [b && a.mjb > a.parent.saw]);
        a.bco.psl("mmaxcredit", "#aco", [b]);
        a.cxx()
    };
    this.ppn = function () {
        var b = a.bco.uxx("cmaxwin") == null || a.bco.psl("cmaxwin", "#slw");
        if (a.ngv === 0) {
            a.ngv = a.glv
        }
        a.bco.psl("maxwind", "#gtw", [(b === true && a.ngv > 0) ? a.parent.ait(a.ngv) : "---"]);
        a.bco.psl("lmaxwin", "#aco", [b && a.ngv > a.glv]);
        a.bco.psl("mmaxwin", "#aco", [b]);
        a.cxx()
    };
    this.glj = function () {
        a.pmz = 0;
        a.bco.psl("bett", "#aor", [true, false, false]);
        a.bco.psl("autot", "#aor", [false, false, false]);
        a.bco.psl("helpt", "#aor", [false, false, false]);
        a.bco.psl("settingt", "#aor", [false, false, false]);
        a.bco.psl("returnt", "#aor", [false, false, false]);
        a.bco.fmj("bbuttons", "#giu", [a.wgt]);
        a.bco.fmj("bbuttons", "#aco", [a.wgt]);
        a.bco.fmj("abuttons", "#giu", [false]);
        a.bco.fmj("acheckboxes", "#giu", [false]);
        a.bco.fmj("hbuttons", "#giu", [false]);
        a.bco.fmj("sbuttons", "#giu", [false]);
        a.cxx()
    };
    this.wyw = function () {
        var d = a.bco.uxx("cmincredit") == null || a.bco.psl("cmincredit", "#slw"),
            c = a.bco.uxx("cmaxcredit") == null || a.bco.psl("cmaxcredit", "#slw"),
            b = a.bco.uxx("cmaxwin") == null || a.bco.psl("cmaxwin", "#slw");
        a.pmz = 1;
        a.qbr = (a.rke > 0) ? a.parent.zyq() * a.rke : a.qbr;
        a.glv = (a.jqa > 0) ? a.parent.zyq() * a.jqa : a.glv;
        a.bco.psl("bett", "#aor", [false, false, false]);
        a.bco.psl("autot", "#aor", [true, false, false]);
        a.bco.psl("helpt", "#aor", [false, false, false]);
        a.bco.psl("settingt", "#aor", [false, false, false]);
        a.bco.psl("returnt", "#aor", [false, false, false]);
        a.bco.fmj("bbuttons", "#giu", [false]);
        a.bco.fmj("abuttons", "#giu", [true]);
        a.bco.psl("mmincredit", "#aco", [d && a.hhk < a.parent.saw]);
        a.bco.psl("lmaxcredit", "#aco", [c && a.mjb > a.parent.saw]);
        a.bco.psl("lmaxwin", "#aco", [b && a.ngv > a.glv]);
        a.bco.fmj("acheckboxes", "#giu", [true]);
        a.bco.fmj("hbuttons", "#giu", [false]);
        a.bco.fmj("sbuttons", "#giu", [false]);
        if (a.pbg === true) {
            a.bco.psl("cmincredit", "#giu", [false])
        }
        a.cxx()
    };
    this.mhq = function () {
        a.pmz = 2;
        a.bco.psl("bett", "#aor", [false, false, false]);
        a.bco.psl("autot", "#aor", [false, false, false]);
        a.bco.psl("helpt", "#aor", [true, false, false]);
        a.bco.psl("settingt", "#aor", [false, false, false]);
        a.bco.psl("returnt", "#aor", [false, false, false]);
        a.bco.fmj("bbuttons", "#giu", [false]);
        a.bco.fmj("abuttons", "#giu", [false]);
        a.bco.fmj("acheckboxes", "#giu", [false]);
        a.bco.fmj("hbuttons", "#giu", [true]);
        a.bco.fmj("sbuttons", "#giu", [false]);
        a.cxx()
    };
    this.mrb = function () {
        a.pmz = 3;
        a.bco.psl("bett", "#aor", [false, false, false]);
        a.bco.psl("autot", "#aor", [false, false, false]);
        a.bco.psl("helpt", "#aor", [false, false, false]);
        a.bco.psl("settingt", "#aor", [true, false, false]);
        a.bco.psl("returnt", "#aor", [false, false, false]);
        a.bco.fmj("bbuttons", "#giu", [false]);
        a.bco.fmj("abuttons", "#giu", [false]);
        a.bco.fmj("acheckboxes", "#giu", [false]);
        a.bco.fmj("hbuttons", "#giu", [false]);
        a.bco.fmj("sbuttons", "#giu", [true]);
        a.bco.psl("gamble", "#giu", [a.ezr]);
        a.cxx()
    };
    this.lqv = function () {
        a.parent.fay();
        a.bco.psl("returnt", "#aor", [false, false, false])
    }
}
xzt.prototype = new dzq;

function wqk() {
    var a = this;
    this.ojz = null;
    this.nio = "bold";
    this.prw = "rgb(0,0,0)";
    this.swn = null;
    this.npv = "rgb(255,255,255)";
    this.xlr = null;
    this.iff = "rgb(60,60,60)";
    this.djf = null;
    this.rut = null;
    this.xpa = false;
    this.pfs = [];
    this.xbp = [];
    this.ire = null;
    this.clb = 19;
    this.wlk = 15;
    this.djj = 120;
    this.eub = 2;
    this.fph = 2;
    this.lyc = 2;
    this.vou = 10;
    this.dpi = 12;
    this.jbf = function (b, d, c) {
        wqk.prototype.jbf.call(this, b, d, c)
    };
    this.ilm = function (b) {
        try {
            this.dpi = b.fontSize;
            this.clb = b.sqe;
            this.wlk = b.gyj;
            this.djj = b.xtd;
            this.eub = b.dni;
            this.fph = b.kqj;
            this.lyc = b.umx;
            this.vou = b.eoh
        } catch (c) {
            console.error(c)
        }
    };
    this.whj = function (b) {
        try {
            this.ojz = b.font;
            this.nio = b.cvw;
            this.prw = b.backgroundColor;
            this.swn = b.vsa;
            this.npv = b.hij;
            this.iff = b.borderColor;
            this.xlr = b.tmq;
            if (this.swn) {
                this.djf = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.djf.addColorStop(0, this.swn);
                this.djf.addColorStop(0.5, this.prw)
            } else {
                this.djf = this.prw
            }
            if (this.xlr) {
                this.rut = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.rut.addColorStop(0, this.xlr);
                this.rut.addColorStop(1, this.iff)
            } else {
                this.rut = this.iff
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.nyc = function (b, g, c) {
        var e = b - this.x,
            d = g - this.y,
            f = (c && c === true) ? this.vou : 0;
        if (e >= this.x && e <= this.x + this.width && d >= this.y && d <= this.y + this.height + f && this.ozi()) {
            this.parent.zdz();
            return true
        }
        return false
    };
    this.ust = function (d, b, c) {
        this.xbp.push({
            id: d,
            ytu: b,
            value: c,
            tvc: null
        })
    };
    this.jat = function (e, c, d, b) {
        this.xbp.push({
            id: e,
            ytu: c,
            value: d,
            tvc: b
        })
    };
    this.zlq = function (d, b, c) {
        this.pfs.push({
            id: d,
            jqk: b,
            value: c
        })
    };
    this.dtk = function (e, d) {
        for (var c = 0, b = this.xbp.length; c < b; c++) {
            if (this.xbp[c].id == e) {
                this.xbp[c].value = d;
                return true
            }
        }
        return false
    };
    this.jed = function (c, e) {
        for (var d = 0, b = c.length; d < b; d++) {
            if (c[d] == e) {
                return d
            }
        }
        return -1
    };
    this.oia = function (e, d) {
        for (var c = 0, b = this.pfs.length; c < b; c++) {
            if (this.pfs[c].id == e) {
                if (this.pfs[c].value != d) {
                    this.pfs[c].value = d;
                    return true
                } else {
                    return false
                }
            }
        }
        return false
    };
    this.yhf = function (b) {
        this.ire = b
    };
    this.giu = function (b) {
        this.xpa = b
    };
    this.ozi = function (b) {
        return this.xpa
    };
    this.ryq = function (c, b) {
        if (this.dtk(c, b)) {
            window.dmg(a.cxx)
        }
    };
    this.exj = function (c, b) {
        if (this.oia(c, b)) {
            window.dmg(a.cxx)
        }
    };
    this.pps = function (b) {
        this.yhf(b);
        window.dmg(a.cxx)
    };
    this.cxx = function () {
        if (!a.bbd() || !a.parent.nyy()) {
            return
        }
        var e = (a.height - a.dpi) / 2 + a.fph,
            c = a.eub + a.clb * a.xbp.length,
            d = a.width - c - (a.djj * a.pfs.length),
            b = a.context2D;
        b.save();
        bmx.suj.jbt(b, 0, 0, a.width, a.height, a.djf, 1);
        a.ovd(b, e);
        a.dfc(b, e);
        if (a.ire && a.ire != "") {
            bmx.suj.ibm(b, a.ire, a.npv, c, e, d, a.dpi, a.ojz, a.dpi, a.nio)
        } else {
            if (a.ozi()) {
                a.qnk(b)
            }
        }
        a.bhm(b, 0, a.height - a.lyc / 2, a.width, a.height - a.lyc / 2);
        b.restore();
        if (a.tvv && a.ciq) {
            a.tvv.drawImage(a.ciq, a.x, a.y)
        }
    };
    this.ovd = function (d, g) {
        var c = 0;
        for (var f = 0, b = this.xbp.length; f < b; f++) {
            if (this.xbp[f].tvc) {
                var e = this.jed(this.xbp[f].tvc, this.xbp[f].value);
                if (this.xbp[f].ytu instanceof Array) {
                    bmx.suj.ibm(d, this.xbp[f].ytu[e], this.npv, c, g, this.clb, this.dpi, this.ojz, this.dpi, this.nio)
                } else {
                    if (this.xbp[f].ytu instanceof Image || this.xbp[f].ytu instanceof HTMLCanvasElement) {
                        d.drawImage(this.xbp[f].ytu, e * this.wlk, 0, this.wlk, this.xbp[f].ytu.height, c + this.eub, g - this.fph, this.clb - 2 * this.eub, this.dpi)
                    }
                }
            } else {
                d.save();
                d.globalAlpha = (this.xbp[f].value == true) ? 1 : 0.3;
                if (this.xbp[f].ytu instanceof String) {
                    bmx.suj.ibm(d, this.xbp[f].ytu, this.npv, c, g, this.clb, this.dpi, this.ojz, this.dpi, this.nio)
                } else {
                    if (this.xbp[f].ytu instanceof Image || this.xbp[f].ytu instanceof HTMLCanvasElement) {
                        d.drawImage(this.xbp[f].ytu, c + this.eub, g - this.fph, this.clb - 2 * this.eub, this.dpi)
                    }
                }
                d.restore()
            }
            c += this.clb;
            this.bhm(d, c, 0, c, this.height)
        }
        return c
    };
    this.dfc = function (d, f) {
        var c = this.width - this.eub - this.djj * this.pfs.length;
        for (var e = 0, b = this.pfs.length; e < b; e++) {
            if (this.pfs[e].id == "freeplay") {
                bmx.suj.jbt(d, c, 0, this.djj, this.height, "red", 0.4)
            } else {
                if (this.pfs[e].id == "freespin") {
                    bmx.suj.jbt(d, c, 0, this.djj, this.height, "rgb(100,255,100)", 0.5)
                }
            }
            this.bhm(d, c, 0, c, this.height);
            bmx.suj.ibm(d, this.pfs[e].jqk + this.pfs[e].value, this.npv, c, f, this.djj, this.dpi, this.ojz, this.dpi, this.nio);
            c += this.djj
        }
    };
    this.bhm = function (b, d, f, c, e) {
        b.save();
        b.strokeStyle = this.rut;
        b.lineWidth = this.lyc;
        b.beginPath();
        b.moveTo(d, f);
        b.lineTo(c, e);
        b.stroke();
        b.restore()
    };
    this.qnk = function (c) {
        if (this.parent.dbq.uxx("topb") == null) {
            return
        }
        var g = 3 * this.height,
            j = this.lyc,
            e = 9,
            d = Math.floor(this.height / 5),
            b = (this.width - g) / 2,
            k = this.lyc;
        c.save();
        c.strokeStyle = this.iff;
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
wqk.prototype = new dzq;

function vgg() {
    var b = this;
    var c = 0;
    var a = 1;
    this.nsn = 7;
    this.mwk = 89;
    this.wsn = 10000;
    this.bco = null;
    this.xpa = false;
    this.ara = false;
    this.yxq = -1;
    this.smq = 0;
    this.ojz = null;
    this.nio = "bold";
    this.prw = "black";
    this.myl = null;
    this.jyr = null;
    this.zdc = null;
    this.npv = "white";
    this.dbr = 0.8;
    this.rhs = 0;
    this.cjg = 0;
    this.flg = 0;
    this.kzt = 0;
    this.mqm = 0;
    this.itv = 0;
    this.tvl = 0;
    this.eub = 10;
    this.fph = 5;
    this.euo = 10;
    this.hyk = this.eub;
    this.kpn = 10;
    this.bkj = 20;
    this.yic = 40;
    this.hti = 4;
    this.dpi = 10;
    this.lts = null;
    this.smi = null;
    this.sum = "";
    this.rot = null;
    this.jbf = function (d, f, e) {
        vgg.prototype.jbf.call(this, d, f, e);
        this.bco = new klf();
        this.bco.jbf();
        this.bco.pvt("buttons");
        this.bco.pvt("system");
        this.bco.pvt("setting")
    };
    this.ilm = function (d) {
        try {
            this.dpi = d.fontSize;
            this.kpn = d.auh;
            this.bkj = d.jht;
            this.yic = d.viu;
            this.hti = d.lbt;
            this.eub = d.dni;
            this.fph = d.kqj;
            this.euo = d.dkg
        } catch (f) {
            console.error(f)
        }
    };
    this.whj = function (g, m) {
        try {
            var k = this.bco.qvh("buttons"),
                j = (m === true) ? g.nvx.son : g.rdj.son;
            this.ojz = g.font;
            this.nio = g.cvw;
            this.prw = g.backgroundColor;
            this.myl = g.syb;
            this.jyr = g.jcx;
            this.npv = g.hij;
            this.dbr = g.wag;
            if (this.myl && this.jyr) {
                this.zdc = this.context2D.createLinearGradient(0, 0, this.width, 0);
                this.zdc.addColorStop(0, this.myl);
                this.zdc.addColorStop(0.5, this.jyr);
                this.zdc.addColorStop(1, this.myl)
            }
            for (var f = 0, d = k.length; f < d; f++) {
                k[f].whj(j)
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.nyc = function (p, o) {
        var n = this.bco.oxo(),
            q = this.bco.uxx("audio"),
            r = this.bco.uxx("language"),
            f = this.bco.uxx("history"),
            e = p - this.x,
            d = o - this.y;
        if (this.ara) {
            return true
        }
        for (var l = 0, m = n.length; l < m; l++) {
            var g = n[l];
            if (e >= g.x && e <= g.x + g.width && d >= g.y && d <= g.y + g.height && g.bbd()) {
                if (g.ozi() && !g.yzr()) {
                    if (g != q && g != r) {
                        this.parent.whm.mvq("btn");
                        this.parent.whm.lry("btn")
                    }
                    g.aor(true, true, false);
                    g.liq();
                    for (var k = 0; k < m; k++) {
                        n[k].slz(true)
                    }
                    if (g != f) {
                        if (this.yxq >= 0) {
                            clearTimeout(this.yxq);
                            this.yxq = -1
                        }
                        this.yxq = setTimeout(this.yrh, this.wsn)
                    }
                }
                return true
            }
        }
        if (this.bbd() && this.ozi()) {
            if (p < this.x + this.mqm || p > this.x + this.mqm + this.itv || o < this.y || o > this.y + this.height) {
                if (this.yxq >= 0) {
                    clearTimeout(this.yxq);
                    this.yxq = -1
                }
                return false
            }
        }
        return true
    };
    this.wga = function () {
        var g = this.bco.oxo();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.oru() == true) {
                e.aor(false, true);
                return true
            }
        }
        return false
    };
    this.lkm = function (e) {
        var o = this.bco.oxo(),
            d = this.bco.qvh("system"),
            m = this.bco.qvh("setting"),
            q = this.bco.uxx("audio"),
            l = 0,
            k = 0,
            n = 0,
            g = 0;
        if (this.ara) {
            return true
        }
        for (l = 0, n = m.length; l < n; l++) {
            var f = m[l];
            if ((e == f.qvl || e == f.vvm) && !f.yzr()) {
                if (f != q) {
                    this.parent.whm.mvq("btn");
                    this.parent.whm.lry("btn")
                }
                f.aor(true, true, false);
                f.liq();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].slz(true)
                }
                if (this.yxq >= 0) {
                    clearTimeout(this.yxq);
                    this.yxq = -1
                }
                return true
            }
        }
        for (l = 0, n = d.length; l < n; l++) {
            var f = d[l];
            if ((e == f.qvl || e == f.vvm) && f.ozi() && !f.yzr()) {
                if (f != q) {
                    this.parent.whm.mvq("btn");
                    this.parent.whm.lry("btn")
                }
                f.aor(true, true, false);
                f.liq();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].slz(true)
                }
                if (this.yxq >= 0) {
                    clearTimeout(this.yxq);
                    this.yxq = -1
                }
                return true
            }
        }
        if (this.bbd() && this.ozi()) {
            if (this.parent.unz) {
                for (l = 0, n = this.parent.unz.rbt.length; l < n; l++) {
                    var p = this.parent.unz.rbt[l];
                    if (p.cpu == e || p.cpu == e) {
                        if (this.yxq >= 0) {
                            clearTimeout(this.yxq);
                            this.yxq = -1
                        }
                        return false
                    }
                }
            }
        }
        return false
    };
    this.ccd = function () {
        var g = this.bco.oxo();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.oru() == true) {
                e.aor(false, true, false);
                return true
            }
        }
        return false
    };
    this.uyv = function (e, m) {
        var k = this.bco.oxo(),
            l = e - this.x,
            j = m - this.y;
        this.smi = this.lts;
        this.lts = null;
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l >= f.x && l <= f.x + f.width && j >= f.y && j <= f.y + f.height && f.bbd() && f.ozi() && !f.yzr()) {
                this.lts = f
            }
        }
        if (this.lts) {
            this.svu(true)
        } else {
            this.svu(false)
        }
        return true
    };
    this.zzj = function (e, f, g, j, m, d, n) {
        this.tvl = g.width;
        var l = new ljp(this.hyk, this.fph, this.tvl, this.tvl);
        var k = new qxa();
        k.jbf(l, this.context2D);
        k.parent = this;
        k.liq = j;
        k.dvy = f;
        k.hrq(d, n);
        k.ilm(this.parent.tiq.dho.qjl);
        k.whj(this.parent.style.dho.rdj.son);
        k.tpx(g);
        if (m != null) {
            k.vvm = m.trt;
            k.qvl = m.cpu;
            k.rpn = m.value
        }
        this.bco.jqp(e, k, ["buttons", "setting"]);
        this.hyk += this.tvl + this.eub;
        this.itv = this.hyk
    };
    this.cfx = function (l, k, j, g, e) {
        this.tvl = j.width;
        var f = new ljp(this.hyk, this.fph, this.tvl, this.tvl);
        var d = new qxa();
        d.jbf(f, this.context2D);
        d.parent = this;
        d.liq = g;
        d.dvy = k;
        d.ilm(this.parent.tiq.dho.qjl);
        d.whj(this.parent.style.dho.rdj.son);
        d.tpx(j);
        if (e != null) {
            d.vvm = e.trt;
            d.qvl = e.cpu;
            d.rpn = e.value
        }
        this.bco.jqp(l, d, ["buttons", "system"]);
        this.hyk += this.tvl + this.eub;
        this.itv = this.hyk
    };
    this.kut = function () {
        var f = this.bco.oxo();
        this.itv += 2 * this.euo;
        this.mqm = Math.round((this.width - this.itv) / 2);
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].x += this.mqm + this.euo
        }
    };
    this.lyd = function () {
        return this.itv
    };
    this.giu = function (d) {
        this.xpa = d
    };
    this.ozi = function () {
        return this.xpa
    };
    this.rsc = function (g) {
        var f = this.bco.oxo();
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].giu(g)
        }
        this.parent.cxx()
    };
    this.tkx = function (g) {
        var f = this.bco.qvh("system");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].giu(g)
        }
        this.parent.cxx()
    };
    this.iwj = function (g) {
        var f = this.bco.qvh("setting");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].giu(g)
        }
        this.parent.cxx()
    };
    this.xfb = function () {
        if (this.bbd()) {
            return
        }
        if (this.ara) {
            if (this.kzt === a) {
                this.rot = this.xfb
            } else {
                this.rot = null
            }
        } else {
            this.rot = null;
            this.bya();
            this.pxr()
        }
    };
    this.pfl = function (d) {
        if (this.parent.swd) {
            this.parent.swd()
        }
        this.stop();
        this.ara = false;
        this.rot = null;
        this.aco(true, d);
        if (this.yxq >= 0) {
            clearTimeout(this.yxq);
            this.yxq = -1
        }
        this.yxq = setTimeout(this.yrh, this.wsn)
    };
    this.yrh = function () {
        if (b.bbd()) {
            b.parent.whm.mvq("panel_out");
            b.parent.whm.lry("panel_out");
            b.hme()
        }
    };
    this.hme = function () {
        if (!this.bbd()) {
            return
        }
        if (this.ara) {
            if (this.kzt === c) {
                this.rot = this.hme
            } else {
                this.rot = null
            }
        } else {
            this.rot = null;
            this.rja();
            this.pxr();
            if (this.yxq >= 0) {
                clearTimeout(this.yxq);
                this.yxq = -1
            }
        }
    };
    this.cqg = function (d) {
        if (this.parent.uid) {
            this.parent.uid()
        }
        this.stop();
        this.ara = false;
        this.rot = null;
        this.aco(false, d);
        if (typeof this.mvk === "function") {
            this.mvk();
            this.mvk = null
        }
    };
    this.bya = function () {
        this.aco(true);
        this.ara = true;
        this.xpa = false;
        this.kzt = c;
        this.rhs = Math.floor(this.height / this.nsn);
        this.flg = 1;
        this.cjg = Math.floor(this.height / this.nsn)
    };
    this.rja = function () {
        if (this.parent.uid) {
            this.parent.uid()
        }
        this.ara = true;
        this.xpa = false;
        this.kzt = a;
        this.rhs = -Math.floor(this.height / this.nsn);
        this.flg = 1;
        this.cjg = this.height
    };
    this.pxr = function () {
        this.smq = setInterval(this.jgo, this.mwk)
    };
    this.xab = function () {
        if (b.kzt == c) {
            if (b.parent.swd) {
                b.parent.swd()
            }
            if (b.yxq >= 0) {
                clearTimeout(b.yxq);
                b.yxq = -1
            }
            b.yxq = setTimeout(b.yrh, b.wsn)
        }
        clearInterval(b.smq);
        if (b.rot) {
            b.rot()
        }
    };
    this.stop = function () {
        clearTimeout(this.yxq);
        clearInterval(this.smq);
        this.yxq = -1
    };
    this.jgo = function () {
        if (!b.rbd()) {
            b.xab()
        }
    };
    this.rbd = function () {
        if (b.flg < b.nsn) {
            b.parent.cxx(b.x, b.y, b.width, b.height);
            b.cjg += b.rhs;
            b.flg++;
            return true
        } else {
            b.ara = false;
            b.xpa = true;
            if (b.kzt == a) {
                b.aco(false);
                if (typeof b.mvk === "function") {
                    b.mvk();
                    b.mvk = null
                }
            }
            b.parent.cxx(b.x, b.y, b.width, b.height);
            return false
        }
    };
    this.cxx = function (n, m, o, g) {
        if (!this.bbd() || !this.parent.nyy()) {
            return
        }
        var p = this.context2D,
            e = (n != null && m != null && o != null && g != null),
            l = this.bco.oxo(),
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
        this.hio(p);
        for (var f = 0, j = l.length; f < j; f++) {
            l[f].cxx()
        }
        if (this.lts && this.sum != "") {
            k = this.lts.x - this.eub - this.tvl;
            d = 3 * this.tvl + 2 * this.eub;
            if (k + d >= this.mqm + this.itv) {
                k = this.mqm + this.itv - d;
                bmx.suj.ond(p, this.sum, this.npv, k, this.lts.y + this.lts.height, d, this.dpi, this.ojz, this.dpi, this.nio, this.eub)
            } else {
                bmx.suj.ibm(p, this.sum, this.npv, k, this.lts.y + this.lts.height, d, this.dpi, this.ojz, this.dpi, this.nio)
            }
        }
        p.restore();
        if (this.ara) {
            if (this.tvv && this.ciq && this.cjg > 0) {
                this.tvv.drawImage(this.ciq, 0, this.height - this.cjg, this.width, this.cjg, this.x, this.y, this.width, this.cjg)
            }
        } else {
            if (e) {
                this.parent.cxx(this.x + n, this.y + m, o, g)
            } else {
                if (this.tvv && this.ciq) {
                    this.tvv.drawImage(this.ciq, this.x, this.y)
                }
            }
        }
    };
    this.hio = function (d) {
        var f = this.hti,
            e = f / 2;
        d.save();
        d.strokeStyle = this.zdc;
        d.fillStyle = this.prw;
        d.lineWidth = f;
        d.beginPath();
        d.moveTo(e, 0);
        d.arcTo(e, this.kpn, this.kpn + e, this.kpn, this.kpn);
        d.arcTo(this.mqm, this.kpn, this.mqm, this.height - this.bkj - e, this.yic);
        d.arcTo(this.mqm, this.height - e, this.mqm + this.bkj, this.height - e, this.bkj);
        d.lineTo(this.mqm + this.itv - this.bkj, this.height - e);
        d.arcTo(this.mqm + this.itv, this.height - e, this.mqm + this.itv, this.height - this.bkj - e, this.bkj);
        d.arcTo(this.mqm + this.itv, this.kpn, this.width - this.kpn - e, this.kpn, this.yic);
        d.arcTo(this.width - e, this.kpn, this.width - e, 0, this.kpn);
        d.stroke();
        d.closePath();
        d.globalAlpha = this.dbr;
        d.fill();
        d.restore()
    };
    this.svu = function (d) {
        if (this.lts && this.lts != this.smi) {
            if (d && this.lts) {
                this.sum = this.parent.ewo(this.lts.dvy);
                if (!bmx.suj.djn) {
                    this.sum = (this.lts.rpn) ? this.sum + " [" + this.lts.rpn + "]" : this.sum
                }
            } else {
                this.sum = ""
            }
            this.parent.cxx(this.x, this.y, this.width, this.height)
        } else {
            if (d && (this.lts && this.sum != this.parent.ewo(this.lts.dvy))) {
                this.sum = this.parent.ewo(this.lts.dvy);
                if (!bmx.suj.djn) {
                    this.sum = (this.lts.rpn) ? this.sum + " [" + this.lts.rpn + "]" : this.sum
                }
            }
            this.parent.cxx(this.x, this.y, this.width, this.height)
        }
    };
    this.mvk = null
}
vgg.prototype = new dzq;

function hjq() {
    var a = this;
    this.yqo = "LOADING ... ";
    this.fpd = "ERROR";
    this.ljc = null;
    this.inf = null;
    this.eyh = false;
    this.lit = false;
    this.zhg = true;
    this.kig = null;
    this.apo = null;
    this.smq = 0;
    this.yen = 0;
    this.uco = false;
    this.ncg = false;
    this.bmt = 0;
    this.azb = 60;
    this.mkf = 0;
    this.zlf = null;
    this.sum = null;
    this.dio = null;
    this.rqe = true;
    this.ojz = null;
    this.nio = "bold";
    this.zup = "black";
    this.vrr = "rgb(0,100,10)";
    this.lzu = "rgb(80,255,100)";
    this.til = "rgb(120,120,120)";
    this.zem = "red";
    this.rqf = "white";
    this.dpi = 14;
    this.njh = 18;
    this.ijc;
    this.mgk;
    this.sfl;
    this.vyu;
    this.euo = 5;
    this.eub = 12;
    this.fph = 5;
    this.npx = 2;
    this.voz = 7;
    this.aou = new ljp();
    this.pnz = 0;
    this.kce = 0;
    this.gab = 0;
    this.lkh = new ljp();
    this.rur = new ljp();
    this.xre = new ljp();
    this.mxx = new ljp();
    this.jbf = function (b, d, c) {
        hjq.prototype.jbf.call(this, b, d, c);
        if (bmx.vbp.value45 == bmx.xcj.cul) {
            this.kig = document.createElement("canvas");
            this.apo = this.kig.getContext("2d")
        }
    };
    this.ilm = function (b) {
        try {
            this.dpi = b.fontSize;
            this.njh = b.mkc;
            this.euo = b.dkg;
            this.eub = b.dni;
            this.fph = b.kqj;
            this.npx = b.zok;
            this.voz = b.fka;
            this.ijc = b.dyv;
            this.mgk = b.aza;
            this.sfl = b.osx;
            this.vyu = b.mmo;
            this.aou = b.ghd.rlq;
            this.pnz = b.ghd.x;
            this.kce = b.ghd.jjr;
            this.gab = b.ghd.vaa;
            this.lkh = b.rrg;
            this.rur = b.mdd.rrg;
            this.xre = b.mdd.aza;
            this.mxx = b.mdd.xoy;
            if (bmx.vbp.value45 == bmx.xcj.cul) {
                this.kig.width = Math.round(this.aou.width);
                this.kig.height = Math.round(this.aou.height)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.whj = function (b) {
        try {
            this.ojz = b.font;
            this.nio = b.cvw;
            this.zup = b.backgroundColor;
            this.vrr = b.koi;
            this.lzu = b.xjl;
            this.til = b.niv;
            this.zem = b.pxf;
            this.rqf = b.lja;
            this.inf = b.inf
        } catch (c) {
            console.error(c)
        }
    };
    this.cxx = function (b) {
        if (b && b >= 0) {
            this.yen = b
        }
        if (!this.bbd()) {
            return
        }
        if (bmx.vbp.value45 == bmx.xcj.zbl) {
            this.rtt()
        } else {
            if (bmx.vbp.value45 == bmx.xcj.wsy || bmx.vbp.value45 == bmx.xcj.cul) {
                if (!this.ljc && this.sum && this.dio) {
                    this.kyp()
                } else {
                    if (bmx.vbp.value45 == bmx.xcj.wsy) {
                        this.uxl()
                    } else {
                        if (bmx.vbp.value45 == bmx.xcj.cul) {
                            if (b === 100) {
                                this.qgp()
                            }
                            this.esr()
                        }
                    }
                }
            }
        }
    };
    this.rtt = function () {
        if (this.eyh) {
            var c = this.context2D,
                b = this.sfl.width / 100;
            c.save();
            if (this.lit === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.whm.wez("splash"), 0, 0, this.width, this.height);
            if (this.inf) {
                bmx.suj.jbt(c, this.euo, this.euo, this.width - 2 * this.euo, this.height - 2 * this.euo, this.inf, 0.3)
            }
            if (this.ljc != null && this.ljc != "") {
                this.rkf(this.vyu, true)
            } else {
                if (this.sum != null && this.sum != "") {
                    this.jbc(this.vyu, true)
                } else {
                    if (this.zhg === true) {
                        if (this.lit === false) {
                            bmx.suj.jbt(c, this.ijc.x, this.ijc.y, this.ijc.width, this.ijc.height, this.zup, 0.5)
                        }
                        var e = this.yqo + " " + this.yen + "%";
                        var d = c.createLinearGradient(this.sfl.x, this.sfl.y, this.sfl.x + this.sfl.width, this.sfl.y);
                        d.addColorStop(0, this.vrr);
                        d.addColorStop(1, this.lzu);
                        bmx.suj.ibm(c, e, this.rqf, this.mgk.x, this.mgk.y, this.mgk.width, this.mgk.height, this.ojz, this.dpi, this.nio);
                        bmx.suj.elf(c, this.sfl.x - this.npx, this.sfl.y, this.sfl.width + 2 * this.npx, this.sfl.height, this.npx, this.zup, 0.8, this.til, this.npx, 0.8);
                        bmx.suj.jbt(c, this.sfl.x, this.sfl.y + this.npx / 2, b * this.yen, this.sfl.height - this.npx, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.uxl = function () {
        if (this.eyh) {
            var c = this.context2D,
                b = this.sfl.width / 100;
            c.save();
            if (this.lit === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            if (this.uco === true && this.zlf) {
                c.beginPath();
                c.rect(this.zlf.x, this.zlf.y, this.zlf.width, this.zlf.height);
                c.closePath();
                c.clip()
            }
            c.drawImage(this.parent.whm.wez("splash"), this.lkh.x, this.lkh.y, this.lkh.width, this.lkh.height);
            if (this.ljc != null && this.ljc != "") {
                this.rkf(this.vyu, false)
            } else {
                if (this.sum != null && this.sum != "") {
                    this.jbc(this.vyu, false)
                } else {
                    if (this.zhg === true) {
                        var e = this.yqo + " " + this.yen + "%";
                        var d = c.createLinearGradient(this.sfl.x, this.sfl.y, this.sfl.x + this.sfl.width, this.sfl.y);
                        d.addColorStop(0, this.vrr);
                        d.addColorStop(1, this.lzu);
                        var f = c.createLinearGradient(this.sfl.x + (b * this.yen) - this.voz, this.sfl.y, this.sfl.x + (b * this.yen), this.sfl.y);
                        f.addColorStop(0, "rgb(100,100,100)");
                        f.addColorStop(1, "rgb(255,255,255)");
                        bmx.suj.ibm(c, e, this.rqf, this.mgk.x, this.mgk.y, this.mgk.width, this.mgk.height, this.ojz, this.dpi, this.nio);
                        bmx.suj.jbt(c, this.sfl.x, this.sfl.y, this.sfl.width, this.sfl.height, "rgb(12,15,25)", 1);
                        if (this.yen > 0 && this.yen < 100) {
                            bmx.suj.elf(c, this.sfl.x + (b * this.yen) - this.voz + this.npx / 2, this.sfl.y - this.npx, this.voz, this.sfl.height + 2 * this.npx, this.npx, f, 0.5)
                        }
                        bmx.suj.jbt(c, this.sfl.x, this.sfl.y, b * this.yen, this.sfl.height, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.esr = function () {
        if (this.eyh) {
            var c = this.context2D,
                b = this.sfl.width / 100;
            c.save();
            if (this.lit === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.whm.wez("splash"), this.lkh.x, this.lkh.y, this.lkh.width, this.lkh.height);
            if (this.ncg) {
                c.drawImage(this.kig, this.aou.x, this.aou.y)
            }
            if (this.ljc != null && this.ljc != "") {
                this.rkf(this.vyu, false)
            } else {
                if (this.sum != null && this.sum != "") {
                    this.jbc(this.vyu, false)
                } else {
                    if (this.zhg === true) {
                        var e = this.yqo + " " + this.yen + "%";
                        var d = c.createLinearGradient(this.sfl.x, this.sfl.y, this.sfl.x + this.sfl.width, this.sfl.y);
                        d.addColorStop(0, this.vrr);
                        d.addColorStop(1, this.lzu);
                        var f = c.createLinearGradient(this.sfl.x + (b * this.yen) - this.voz, this.sfl.y, this.sfl.x + (b * this.yen), this.sfl.y);
                        f.addColorStop(0, "rgb(100,100,100)");
                        f.addColorStop(1, "rgb(255,255,255)");
                        bmx.suj.ibm(c, e, this.rqf, this.mgk.x, this.mgk.y, this.mgk.width, this.mgk.height, this.ojz, this.dpi, this.nio);
                        bmx.suj.jbt(c, this.sfl.x, this.sfl.y, this.sfl.width, this.sfl.height, "rgb(12,15,25)", 1);
                        if (this.yen > 0 && this.yen < 100) {
                            bmx.suj.elf(c, this.sfl.x + (b * this.yen) - this.voz + this.npx / 2, this.sfl.y - this.npx, this.voz, this.sfl.height + 2 * this.npx, this.npx, f, 0.5)
                        }
                        bmx.suj.jbt(c, this.sfl.x, this.sfl.y, b * this.yen, this.sfl.height, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.kyp = function () {
        if (this.eyh) {
            var b = this.context2D;
            b.save();
            b.clearRect(0, 0, this.width, this.height);
            if (this.dio) {
                b.drawImage(this.dio, this.rur.x, this.rur.y, this.rur.width, this.rur.height)
            }
            if (this.sum != null && this.sum != "") {
                bmx.suj.kqm(b, this.sum, this.rqf, this.xre.x, this.xre.y, this.xre.width, this.xre.height, this.ojz, this.dpi, this.nio, "center", true)
            }
            if (this.rqe === true) {
                bmx.suj.kqm(b, "[ " + this.parent.language.zrd + " ]", this.rqf, this.mxx.x, this.mxx.y, this.mxx.width, this.mxx.height, this.ojz, 2 * this.dpi, this.nio, "center", true)
            }
            b.restore()
        }
    };
    this.rkf = function (c, m) {
        var l = this.context2D,
            o = [],
            d = this.dpi,
            k = this.ljc,
            f = "",
            t = 0,
            v = 0,
            s = 0,
            u = 0,
            n = "center",
            e = Math.round(d * 1.5),
            j = Math.round(this.njh * 1.5),
            b = 0,
            w = 1,
            q = 0,
            g = 0;
        l.save();
        l.font = this.nio + " " + d + "px " + this.ojz;
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
                    if (u >= c.width - 2 * this.eub) {
                        o[v] = k.substring(s, t);
                        v++;
                        s = t + 1;
                        f = k.substring(t + 1, p)
                    }
                }
            }
        }
        b = v * (e);
        if (b > (c.height - j - this.fph)) {
            w = (c.height - j - this.fph) / b;
            d = Math.round(d * w) - 1;
            l.font = this.nio + " " + d + "px " + this.ojz;
            e = Math.round(d * 1.5);
            b = v * (e)
        }
        if (d < 10) {
            w = 10 / d;
            d = Math.round(d * w);
            l.font = this.nio + " " + d + "px " + this.ojz;
            e = Math.round(d * 1.5);
            b = v * (e);
            g = (c.height - (j + b + this.fph));
            c.height = j + b + this.fph;
            c.y += g
        }
        l.textAlign = n;
        l.lineJoin = "round";
        l.lineCap = "round";
        if (m && m === true) {
            bmx.suj.jbt(l, c.x, c.y, c.width, c.height, this.zup, 0.7)
        }
        if (this.fpd != null) {
            l.font = this.nio + " " + this.njh + "px " + this.ojz;
            l.fillStyle = this.zem;
            l.textBaseline = "bottom";
            l.fillText(this.fpd, c.x + c.width / 2, c.y + this.njh + this.fph)
        }
        l.font = this.nio + " " + d + "px " + this.ojz;
        l.fillStyle = this.rqf;
        if (o.length == 1) {
            q = j + b + e;
            l.fillText(o[0], (c.x + c.width / 2), c.y + q)
        } else {
            for (var p = 0, r = o.length; p < r; p++) {
                q = j + (b + e) / (r + 1) * (p + 1);
                if (n == "start") {
                    l.fillText(o[p], (c.x + this.eub), c.y + q)
                } else {
                    l.fillText(o[p], (c.x + c.width / 2), c.y + q)
                }
            }
        }
        l.restore()
    };
    this.jbc = function (c, d) {
        var b = this.context2D;
        b.save();
        if (d && d === true) {
            bmx.suj.jbt(b, c.x, c.y, c.width, c.height, this.zup, 0.7)
        }
        if (this.rqe === true) {
            bmx.suj.kqm(b, this.sum, this.rqf, c.x, c.y, c.width, c.height, this.ojz, this.dpi, this.nio, "center", true)
        }
        b.restore()
    };
    this.start = function () {
        this.uco = true;
        this.bmt = new Date().getTime();
        this.zlf = new ljp(this.aou.x, this.aou.y, this.aou.width, this.aou.height);
        this.mkf = 0;
        this.jgo()
    };
    this.stop = function () {
        this.uco = false;
        this.zlf = null;
        clearTimeout(this.smq)
    };
    this.jgo = function () {
        var b = 0,
            c = new Date().getTime();
        if (a.mkf < 6) {
            a.zlf.x -= a.pnz;
            a.zlf.width += 2 * a.pnz
        } else {
            if (a.mkf < 12) {
                a.zlf.y -= a.gab;
                a.zlf.height += a.kce
            } else {
                a.stop();
                if (typeof a.bcj === "function") {
                    a.bcj()
                }
            }
        }
        a.cxx();
        a.mkf++;
        if (a.mkf <= 12) {
            b = (a.mkf * a.azb - (c - a.bmt));
            a.smq = setTimeout(a.jgo, b)
        }
    };
    this.tsa = function () {
        this.ncg = true;
        this.bmt = new Date().getTime();
        this.mkf = 0;
        this.azb = 89;
        this.sen()
    };
    this.qgp = function () {
        this.ncg = false;
        clearTimeout(this.smq)
    };
    this.sen = function () {
        var d = 0,
            e = new Date().getTime(),
            b = a.apo,
            c = a.parent.whm.wez("splashanim");
        if (a.ncg === true) {
            a.mkf++;
            b.save();
            b.clearRect(0, 0, c.width, c.height);
            b.translate(c.width / 2, c.height / 2);
            b.rotate(Math.PI / 6 * (a.mkf % 12));
            b.translate(-c.width / 2, -c.height / 2);
            b.drawImage(c, 0, 0);
            b.restore();
            a.cxx();
            d = (a.mkf * a.azb - (e - a.bmt));
            a.smq = setTimeout(a.sen, d)
        }
    };
    this.nxh = function () {
        return (this.uco || this.ncg)
    };
    this.eqe = function (c, b) {
        this.sum = c;
        this.dio = b;
        this.uco = true;
        this.rqe = true;
        this.smq = setInterval(this.cto, 800);
        this.cxx()
    };
    this.cto = function () {
        a.rqe = !a.rqe;
        a.cxx()
    };
    this.bcj = null
}
hjq.prototype = new dzq;

function bxa() {
    var a = this;
    this.lth = null;
    this.lsn = null;
    this.npk = null;
    this.fjh = null;
    this.sri = null;
    this.jri = false;
    this.smq = -1;
    this.jbf = function () {
        this.lth = document.getElementById("notificationDiv");
        this.lsn = document.getElementById("notificationTitle");
        this.npk = document.getElementById("notificationText");
        this.fjh = document.getElementById("notificationIcon");
        this.sri = document.getElementById("notificationCounter");
        if (this.lth) {
            this.lth.onclick = bmx.qsx.jhs;
            this.lth.ontouchend = bmx.qsx.jhs
        }
    };
    this.whj = function (b) {};
    this.ilm = function (b) {
        try {
            if (this.lth) {
                this.jvx(this.lth, b.rlq);
                if (this.jri) {
                    if (bmx.qsx.usz === bmx.tiq.agk) {
                        this.lth.className = "slideRight"
                    } else {
                        this.lth.className = "slideLeft"
                    }
                }
            }
            if (this.lsn) {
                this.lsn.style.fontSize = b.bos + "px";
                this.lsn.style.left = b.oxh.x + "px";
                this.lsn.style.top = b.oxh.y + "px";
                this.lsn.style.width = b.oxh.width + "px"
            }
            if (this.npk) {
                this.npk.style.fontSize = b.avl + "px";
                this.npk.style.left = b.aza.x + "px";
                this.npk.style.top = b.aza.y + "px";
                this.npk.style.width = b.aza.width + "px"
            }
            if (this.fjh) {
                this.jvx(this.fjh, b.toz)
            }
            if (this.sri) {
                this.sri.style.fontSize = b.yhn + "px";
                this.jvx(this.sri, b.rib)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.jvx = function (c, b) {
        if (c) {
            c.style.left = b.x + "px";
            c.style.top = b.y + "px";
            c.style.width = b.width + "px";
            c.style.height = b.height + "px"
        }
    };
    this.xfb = function (d, c, b) {
        if (d && this.lsn) {
            this.lsn.innerHTML = d
        }
        if (c && this.npk) {
            this.npk.innerHTML = c.replace(/[\r]?\n/g, "")
        }
        if (b && this.sri) {
            this.sri.innerHTML = b
        }
        if (this.lth) {
            if (this.smq >= 0) {
                clearTimeout(this.smq);
                this.smq = -1;
                this.lth.className = null
            }
            this.jri = true;
            bmx.qsx.yns();
            if (bmx.qsx.usz === bmx.tiq.agk) {
                this.lth.className = "slideInRightAnim"
            } else {
                this.lth.className = "slideInLeftAnim"
            }
        }
    };
    this.hme = function () {
        if (a.lth && a.jri) {
            if (bmx.qsx.usz === bmx.tiq.agk) {
                a.lth.className = "slideOutRightAnim"
            } else {
                a.lth.className = "slideOutLeftAnim"
            }
            a.smq = setTimeout(a.cjs, 800)
        }
    };
    this.bbd = function () {
        if (this.jri) {
            return true
        }
        return false
    };
    this.cjs = function () {
        a.jri = false;
        a.smq = -1;
        bmx.qsx.yns()
    }
}

function rdp() {
    var b = this;
    var c = 0;
    var a = 1;
    var e = 2;
    var d = 3;
    this.vct = null;
    this.lth = null;
    this.lsn = null;
    this.npk = null;
    this.dlo = null;
    this.esw = [];
    this.nst = 0;
    this.hnz = [];
    this.vtl = [];
    this.pmz = 0;
    this.pnv = false;
    this.jri = false;
    this.jbf = function () {
        this.vct = document.getElementById("messageOverlay");
        this.lth = document.getElementById("messagePanel");
        this.lsn = document.getElementById("messageTitle");
        this.npk = document.getElementById("messageText");
        this.dlo = document.getElementById("btne");
        if (this.dlo) {
            this.dlo.innerHTML = "\u00D7";
            this.dlo.onclick = this.hme;
            this.dlo.ontouchend = this.hme
        }
        for (var f = 0; f < 4; f++) {
            this.esw[f] = document.getElementById("btn" + (f + 1))
        }
    };
    this.whj = function (f) {
        try {
            this.hnz = f.opd
        } catch (g) {
            console.error(g)
        }
    };
    this.ilm = function (j) {
        try {
            if (this.lth) {
                bmx.suj.jvx(this.lth, j.rlq)
            }
            if (this.lsn) {
                this.lsn.style.fontSize = j.bos + "px";
                bmx.suj.jvx(this.lsn, j.oxh)
            }
            if (this.npk) {
                this.npk.style.fontSize = j.avl + "px";
                bmx.suj.jvx(this.npk, j.tpv)
            }
            if (this.dlo) {
                bmx.suj.jvx(this.dlo, j.upg)
            }
            for (var g = 0, f = this.esw.length; g < f; g++) {
                this.esw[g].style.fontSize = j.qjl.fontSize + "px";
                this.esw[g].style.top = j.syp.y + "px";
                this.esw[g].style.height = j.syp.height + "px"
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.xfb = function (j) {
        this.vtl.length = 0;
        this.pmz = 0;
        for (var g = 0, f = j.length; g < f; g++) {
            this.vtl[g] = j[g]
        }
        this.wbx(this.vtl[this.pmz])
    };
    this.hme = function () {
        if (b.lth) {
            b.jri = false;
            b.lth.style.display = "none";
            b.vct.style.display = "none";
            bmx.qsx.yns();
            bmx.qsx.nyr = false
        }
    };
    this.wbx = function (l) {
        var n = this.vtl.length > 1,
            m = "";
        if (l.Buttons && l.Buttons.length >= 1) {
            for (var k = l.Buttons.length - 1; k >= 0; k--) {
                if (l.Buttons[k].Action.toLowerCase() == "cashier") {
                    l.Buttons.splice(k, 1)
                }
            }
        }
        if (l.xkd === bmx.izb.iyv || l.xkd === bmx.izb.cvx) {
            this.nst = d;
            this.pnv = (l.DisplayType == bmx.byw.upy.rfr) ? true : false
        } else {
            if (l.xkd === bmx.izb.hcu || l.xkd === bmx.izb.znh || l.xkd === bmx.izb.kpj || l.xkd === bmx.izb.roulette.lfi || l.xkd === bmx.izb.roulette.qer) {
                this.nst = a;
                this.pnv = false
            } else {
                if (l.xkd === bmx.izb.kgf || l.xkd === bmx.izb.zmz) {
                    this.nst = c;
                    this.pnv = false
                } else {
                    if (l.xkd === bmx.izb.uyu || l.xkd === bmx.izb.jnw || l.xkd === bmx.izb.nld) {
                        this.nst = e;
                        this.pnv = false
                    }
                }
            }
        }
        if (l.Title && this.lsn) {
            this.lsn.style.color = this.hnz[this.nst];
            this.lsn.innerHTML = l.Title
        }
        if (l.Text && this.npk) {
            this.npk.innerHTML = l.Text.replace(/[\r]?\n/g, "<br>")
        }
        if (n) {
            this.esw[0].innerHTML = "\u2039";
            this.esw[0].onclick = this.fdx;
            this.esw[0].ontouchend = this.fdx;
            this.esw[0].style.display = "inline-block";
            this.esw[this.esw.length - 1].innerHTML = "\u203A";
            this.esw[this.esw.length - 1].onclick = this.zkh;
            this.esw[this.esw.length - 1].ontouchend = this.zkh;
            this.esw[this.esw.length - 1].style.display = "inline-block"
        }
        for (var k = 0, g = (n) ? 1 : 0, f = (n) ? this.esw.length - 1 : this.esw.length; g < f; g++, k++) {
            if (l.Buttons && k < l.Buttons.length) {
                m = l.Buttons[k].Text;
                if (m.indexOf("_") != 0) {
                    this.esw[g].innerHTML = m
                } else {
                    var j = m.substr(1);
                    if (j == "exit") {
                        this.esw[g].innerHTML = bmx.qsx.language.zxe
                    } else {
                        if (j == "continue") {
                            this.esw[g].innerHTML = bmx.qsx.language.zrd.replace(/ /g, "")
                        } else {
                            this.esw[g].innerHTML = j.toUpperCase()
                        }
                    }
                }
                if (l.Buttons[k].Action.toLowerCase() == "quit") {
					console.log("quit");
                    this.esw[g].onclick = bmx.qsx.uxn;
                    this.esw[g].ontouchend = bmx.qsx.uxn
                } else {
                    if (l.Buttons[k].Action.toLowerCase() == "continue") {
                        if (l.xkd === bmx.izb.iyv) {
                            this.esw[g].onclick = this.gku.bind(this, l.Buttons[k].Link);
                            this.esw[g].ontouchend = this.gku.bind(this, l.Buttons[k].Link)
                        } else {
                            if (l.xkd === bmx.izb.cvx || l.xkd === bmx.izb.uyu || l.xkd === bmx.izb.jnw) {
                                this.esw[g].onclick = this.gpo;
                                this.esw[g].ontouchend = this.gpo
                            } else {
                                if (l.xkd === bmx.izb.kgf || l.xkd === bmx.izb.zmz || l.xkd === bmx.izb.nld) {
                                    this.esw[g].onclick = this.qqv;
                                    this.esw[g].ontouchend = this.qqv
                                }
                            }
                        }
                    } else {
                        if (l.Buttons[k].Action.toLowerCase() == "history") {
                            this.esw[g].onclick = bmx.qsx.mnj;
                            this.esw[g].ontouchend = bmx.qsx.mnj
                        } else {
                            if (l.Buttons[k].Action.toLowerCase() == "link") {
                                if (l.Buttons[k].LinkType === bmx.byw.kle.dig) {
                                    this.esw[g].onclick = this.bjj.bind(this, l.Buttons[k].Link);
                                    this.esw[g].ontouchend = this.bjj.bind(this, l.Buttons[k].Link)
                                } else {
                                    if (l.Buttons[k].LinkType === bmx.byw.kle.wsw) {
                                        this.esw[g].onclick = this.gku.bind(this, l.Buttons[k].Link);
                                        this.esw[g].ontouchend = this.gku.bind(this, l.Buttons[k].Link)
                                    } else {
                                        if (l.Buttons[k].LinkType === bmx.byw.kle.srw) {
                                            this.esw[g].onclick = this.lhs.bind(this, l.Buttons[k].Link);
                                            this.esw[g].ontouchend = this.lhs.bind(this, l.Buttons[k].Link)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                this.esw[g].style.display = "inline-block"
            } else {
                this.esw[g].style.display = "none"
            }
        }
        this.dlo.style.display = (this.pnv) ? "inline-block" : "none";
        if (this.lth) {
            this.jri = true;
            this.lth.style.display = "block";
            this.vct.style.display = "block";
            bmx.qsx.yns();
            bmx.qsx.nyr = true
        }
    };
    this.bbd = function () {
        if (this.jri) {
            return true
        }
        return false
    };
    this.gpo = function () {
        b.hme();
        bmx.qsx.mcg(bmx.qsx.state)
    };
    this.gku = function (f) {
        var g = null;
        if (f) {
            g = bmx.suj.pyg("GET", f);
            if (!g) {
                console.error("Could not send request!")
            } else {
                g.onerror = function () {
                    console.error("Error on request!")
                }
            }
            g.send()
        }
        bmx.qsx.afm({
            type: "link",
            sender: bmx.qsx.clm,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        b.hme();
        bmx.qsx.jcw()
    };
    this.lhs = function (j) {
        var k = null;
        if (j == null) {
            console.error("Request url is missing!");
            return
        }
        k = bmx.suj.pyg("GET", j);
        if (!k) {
            console.error("Could not send request!")
        } else {
            for (var g = 0, f = b.esw.length; g < f; g++) {
                b.esw[g].disabled = true
            }
            k.onload = function () {
                b.hme();
                for (var m = 0, l = b.esw.length; m < l; m++) {
                    b.esw[m].disabled = false
                }
                bmx.qsx.jcw()
            };
            k.onerror = function () {
                console.error("Error on request!");
                for (var m = 0, l = b.esw.length; m < l; m++) {
                    b.esw[m].disabled = false
                }
            }
        }
        bmx.qsx.afm({
            type: "link",
            sender: bmx.qsx.clm,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        k.send()
    };
    this.qqv = function () {
        window.location.reload()
    };
    this.bjj = function (f) {
        bmx.qsx.afm({
            type: "link",
            sender: bmx.qsx.clm,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        window.location.href = f
    };
    this.fdx = function () {
        b.pmz = (b.pmz > 0) ? b.pmz - 1 : b.vtl.length - 1;
        b.wbx(b.vtl[b.pmz])
    };
    this.zkh = function () {
        b.pmz = (b.pmz < b.vtl.length - 1) ? b.pmz + 1 : 0;
        b.wbx(b.vtl[b.pmz])
    }
}
bmx.vbp = new Settings();
bmx.suj = new vdu();

function mhs() {
    this.klm = "";
    this.nfm = "";
    this.wda = null;
    this.canvas = null;
    this.context2D = null;
    this.xcb = null;
    this.gly = null;
    this.zbh = null;
    this.cmw = null;
    this.dws = null;
    this.fxc = {};
    this.offsetLeft = 0;
    this.offsetTop = 0;
    this.jhi = 0;
    this.fxv = 0;
    this.kdp = false;
    this.width = 0;
    this.height = 0;
    this.dor = 0;
    this.akw = 0;
    this.huh = 1;
    this.ulv = 1;
    this.znt = false;
    this.xws = false;
    this.style = null;
    this.tiq = null;
    this.usz = -1;
    this.wiz = false;
    this.nei = false;
    this.lwf = false;
    this.hxr = false;
    this.nyr = false;
    this.aay = false;
    this.fbu = false;
    this.uig = "";
    this.nma = "";
    this.qnv = "";
    this.vsc = "";
    this.kdq = "";
    this.gir = "";
    this.glw = "1_1_60";
    try {
        if (bmx.vbp.value19) {
            this.uig = sessionStorage.sessionValue2;
            this.nma = sessionStorage.sessionValue2
        } else {
            var c = a("hash");
            if (c != "") {
                sessionStorage.sessionValue2 = c
            }
            if (sessionStorage.sessionValue2 != "freeplay") {
                this.qnv = sessionStorage.sessionValue2
            } else {
                this.uig = sessionStorage.sessionValue2;
                this.nma = sessionStorage.sessionValue2;
                if (a("w") != "") {
                    this.qnv = sessionStorage.sessionValue2
                } else {
                    this.qnv = ""
                }
            }
        }
    } catch (b) {}
    this.tsc = null;
    this.kpp = null;
    this.mup = false;
    this.atd = null;
    this.whm = null;
    this.dbq = null;
    this.neh = true;
    this.pza = [0, 0.5, 1];
    try {
        if (sessionStorage.sessionValue6) {
            if (sessionStorage.sessionValue6 == "false") {
                this.sqx = 0
            } else {
                if (sessionStorage.sessionValue6 == "true") {
                    this.sqx = this.pza.length - 1
                } else {
                    this.sqx = Number(sessionStorage.sessionValue6)
                }
            }
        } else {
            this.sqx = this.pza.length - 1
        }
    } catch (b) {
        this.sqx = 0
    }
    this.ery = 0;
    this.language = new bvb();
    this.ilz = 0;
    this.znk = 1;
    this.yey = this.znk;
    this.nxy = [bmx.hvp.afh, bmx.hvp.ktr, bmx.hvp.quq];
    this.jye = (bmx.suj.dxn()) ? 0 : this.nxy.length - 1;
    try {
        if (localStorage.localValue1) {
            this.jye = Number(localStorage.localValue1);
            if (!bmx.suj.dxn() && this.nxy[this.jye] === bmx.hvp.afh) {
                this.jye = this.nxy.length - 1
            }
        }
    } catch (b) {}
    this.wzr = false;
    this.clm = "";
    this.jnx = "";
    this.sjj = 0;
    this.state = 0;
    this.fxz = false;
    this.css = 5000;
    this.wof = 0;
    this.thy = 0;
    this.oju = 0;
    this.dpu = 0;
    this.imi = false;
    this.drq = false;
    this.lys = false;
    this.unz = null;
    this.lea = 0;
    this.svo = 0;
    this.bku = 0;
    this.kzq = -1;
    this.mjh = -1;
    this.xri = 0;
    this.kjy = null;
    this.riw = [];
    this.oqj = [];
    this.xxz = false;
    this.ehy = 0;
    this.fgq = 0;
    this.zie = false;

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
    this.jbf = function (d) {
        this.afm({
            type: "onAppFrameReady",
            sender: this.clm
        });
        bmx.suj.xmi();
        bmx.suj.ehe();
        this.xkz();
        if (!this.imi) {
            this.ypa()
        }
        this.fvo(this.efx(d.tiq));
        this.zrq();
        this.kub();
        this.lok();
        this.eqz();
        this.lkd();
        this.jpx();
        this.dww();
        this.dxr();
        this.fhx();
        this.jlq();
        return this
    };
    this.lok = function () {};
    this.dxr = function () {
        try {
            if (bmx.vbp.value64 && !this.lys) {
                this.atd = new ygo();
                this.atd.connect("ws://127.0.0.1:2001/vltclient")
            }
        } catch (d) {
            console.error("Can not connect to terminal!")
        }
    };
    this.xkz = function () {
        try {
            var j = a("exit");
            if (j != "") {
                sessionStorage.sessionValue5 = j
            }
            if ((!sessionStorage.sessionValue5 || sessionStorage.sessionValue5 == "null") && bmx.vbp.value8) {
                sessionStorage.sessionValue5 = bmx.vbp.value8
            }
            var p = a("curr");
            if (p != "") {
                sessionStorage.sessionValue8 = p
            }
            if (sessionStorage.sessionValue8 && sessionStorage.sessionValue8 != "") {
                this.gir = sessionStorage.sessionValue8;
                if (bmx.vbp.value72) {
                    var n = bmx.vbp.value72[this.gir];
                    if (bmx.vbp.value21.e === true && n) {
                        bmx.vbp.value21.s = n.s;
                        bmx.vbp.value21.m = n.m;
                        bmx.vbp.value21.ts = n.ts;
                        bmx.vbp.value21.cs = n.cs
                    }
                    if (bmx.vbp.value76 && bmx.vbp.value76.f === true && n) {
                        bmx.vbp.value76.s = n.s;
                        bmx.vbp.value76.m = n.m;
                        bmx.vbp.value76.ts = n.ts;
                        bmx.vbp.value76.cs = n.cs
                    }
                }
            }
            if (this.fnw()) {
                sessionStorage.sessionValue7 = ""
            }
            var d = a("w");
            if (d != "") {
                sessionStorage.sessionValue7 = d
            }
            if (sessionStorage.sessionValue7 && sessionStorage.sessionValue7 != "") {
                this.kdq = sessionStorage.sessionValue7
            }
            var r = a("fullscreen");
            if (r != "") {
                sessionStorage.sessionValue14 = r
            }
            if (sessionStorage.sessionValue14 != "true" && sessionStorage.sessionValue14 != "false") {
                sessionStorage.sessionValue14 = (bmx.suj.djn) ? bmx.vbp.value51.m : bmx.vbp.value51.d
            }
            var g = a("sessionTime");
            if (g != "") {
                sessionStorage.sessionValue15 = g
            }
            if (sessionStorage.sessionValue15 != "true" && sessionStorage.sessionValue15 != "false") {
                sessionStorage.sessionValue15 = bmx.vbp.value11
            }
            var t = a("realityCheckURL");
            if (t != "") {
                sessionStorage.sessionValue16 = t
            }
            var o = a("realityCheckTime");
            if (o != "") {
                sessionStorage.sessionValue17 = o
            }
            if (bmx.vbp.value39 > 0) {
                sessionStorage.sessionValue17 = bmx.vbp.value39
            }
            var s = a("loggedInTime");
            if (sessionStorage.sessionValue18 != null) {
                var f = sessionStorage.sessionValue18.split(";");
                if (f.length == 2) {
                    this.ehy = Number(f[0]);
                    this.fgq = Number(f[1])
                }
            }
            if (s != "") {
                if (Number(s) != this.fgq) {
                    this.fgq = Number(s);
                    this.ehy = new Date().getTime() - (this.fgq * 1000);
                    sessionStorage.sessionValue18 = this.ehy + ";" + this.fgq
                }
            }
            if (bmx.vbp.value86 === true) {
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
            console.error(k.izb)
        }
    };
    this.dww = function () {
        if (!(bmx.suj.rkp == bmx.os.xwo && bmx.suj.gvi == bmx.xpp.qph)) {
            document.ontouchstart = bmx.qsx.daz
        }
        if (bmx.suj.gvi != bmx.xpp.dld && bmx.suj.gvi != bmx.xpp.qph) {
            document.ontouchmove = bmx.qsx.etx;
            document.ontouchend = bmx.qsx.ioa
        }
        if (!bmx.suj.uxv) {
            document.onmousedown = bmx.qsx.hem;
            document.onmouseup = bmx.qsx.bbk;
            document.onmousemove = bmx.qsx.cho
        }
        document.onkeydown = bmx.qsx.svy;
        document.onkeyup = bmx.qsx.mro;
        document.oncontextmenu = bmx.qsx.gdg;
        this.aay = this.wvq();
        if (bmx.suj.hix() === false && bmx.suj.rkp === bmx.os.oys && bmx.suj.zgz() === true && screen.width <= 414 && this.fnc()) {
            this.xri = setInterval(this.wpe, 1000)
        }
    };
    this.daz = function (d) {
        bmx.qsx.xwg();
        bmx.qsx.izx();
        bmx.qsx.nyc(d)
    };
    this.ioa = function (d) {
        if (bmx.qsx.wiz === true) {
            if (bmx.qsx.aay) {
                bmx.qsx.noc()
            } else {
                bmx.qsx.wga(d)
            }
        } else {
            if (bmx.qsx.wvq()) {
                bmx.qsx.ihb()
            }
        }
    };
    this.etx = function (d) {
        bmx.qsx.bbr(d)
    };
    this.hem = function (d) {
        window.focus();
        if (bmx.qsx.wiz === true) {
            bmx.qsx.xwg();
            bmx.qsx.izx();
            bmx.qsx.nyc(d)
        } else {
            if (bmx.qsx.wvq()) {
                bmx.qsx.ihb()
            }
        }
    };
    this.bbk = function (d) {
        bmx.qsx.wga(d)
    };
    this.cho = function (d) {};
    this.svy = function (d) {
        if ((d.keyCode == 122 && (bmx.suj.rkp == bmx.os.xwl || bmx.suj.rkp == bmx.os.efr)) || (d.keyCode == 70 && d.ctrlKey && bmx.suj.rkp == bmx.os.qri)) {
            return
        }
        bmx.qsx.xwg();
        bmx.qsx.izx();
        bmx.qsx.lkm(d)
    };
    this.mro = function (d) {
        bmx.qsx.ccd(d)
    };
    this.gdg = function () {
        return false
    };
    this.nyc = function (d) {};
    this.wga = function (d) {};
    this.lkm = function (d) {};
    this.ccd = function (d) {};
    this.bbr = function (d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        return
    };
    this.afm = function (d) {};
    this.ahr = function () {
        var f = bmx.qsx.dbq.uxx("topb"),
            e = bmx.qsx.dbq.uxx("settings"),
            d = bmx.qsx.dbq.uxx("topi"),
            g = bmx.qsx.dbq.uxx("gameb");
        if (bmx.suj.gvi == bmx.xpp.dld || bmx.suj.gvi == bmx.xpp.rwf) {
            bmx.qsx.xws = (window.innerWidth == window.outerWidth)
        } else {
            if (bmx.suj.gvi == bmx.xpp.gxg || bmx.suj.gvi == bmx.xpp.jfd) {
                bmx.qsx.xws = (window.innerHeight >= window.outerHeight)
            } else {
                if (bmx.suj.gvi == bmx.xpp.mbg) {
                    bmx.qsx.xws = (document.fullscreenElement) ? true : false
                } else {
                    if (bmx.suj.djn) {
                        if (bmx.suj.gvi == bmx.xpp.cnf || bmx.suj.gvi == bmx.xpp.xiq || bmx.suj.gvi == bmx.xpp.otj) {
                            bmx.qsx.xws = (document.webkitFullscreenElement) ? true : false
                        } else {
                            if (bmx.suj.gvi == bmx.xpp.qph) {
                                bmx.qsx.xws = (document.mozFullScreenElement) ? true : false
                            }
                        }
                    }
                }
            }
        }
        if (d) {
            d.dtk("fullscreen", bmx.qsx.xws)
        }
        if (f) {
            f.bco.psl("fullscreen", "#dtk", [(bmx.qsx.xws) ? 1 : 0])
        }
        if (e) {
            e.bco.psl("fullscreen", "#dtk", [(bmx.qsx.xws) ? 1 : 0])
        }
        if (g) {
            g.bco.psl("fullscreen", "#dtk", [(bmx.qsx.xws) ? 1 : 0])
        }
        bmx.qsx.vdf();
        bmx.qsx.jqs();
        bmx.qsx.iur();
        if (bmx.suj.zgz() === true && bmx.suj.hix() === false) {
            document.body.style.height = "5000px"
        }
        if (!bmx.suj.hix() && bmx.suj.gvi === bmx.xpp.otj && bmx.qsx.fxv < screen.width) {
            window.scrollTo(0, 0)
        }
    };
    this.jrk = function () {
        bmx.qsx.ahr();
        bmx.qsx.wpe()
    };
    this.wpe = function () {
        if (bmx.suj.zgz() === true && bmx.suj.hix() === false) {
            if (bmx.qsx.fnc() === true && bmx.qsx.hxr === true) {
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
                            bmx.qsx.ahr();
                            window.ontouchmove = bmx.qsx.jrk
                        }
                    } else {
                        e.className = null;
                        d.className = null;
                        f.style.display = "none";
                        document.ontouchstart = bmx.qsx.daz;
                        document.ontouchmove = bmx.qsx.etx;
                        document.ontouchend = bmx.qsx.ioa;
                        if (window.ontouchmove != null) {
                            bmx.qsx.ahr();
                            window.ontouchmove = null
                        }
                        window.scrollTo(0, 0)
                    }
                }
            }
        }
    };
    this.jaw = function (g) {
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
                    bmx.suj.lta(e, j, j)
                }
                f.innerHTML = bmx.qsx.language.pfy;
                l.className = "rotateAnim";
                k.style.display = "block";
                bmx.qsx.nyr = true
            } else {
                k.style.display = "none";
                l.className = null;
                bmx.qsx.nyr = false
            }
        }
    };
    this.jbz = function () {
        var d = bmx.qsx.dbq.uxx("settings");
        bmx.qsx.ahr();
        if (d) {
            d.bco.psl("adjustment", "#dtk", [(bmx.qsx.usz === bmx.tiq.nzl) ? 0 : 1]);
            d.cxx()
        }
        if (bmx.qsx.wzr === true) {
            bmx.qsx.nyr = true;
            bmx.qsx.hca(true);
            bmx.qsx.jaw(true)
        } else {
            bmx.qsx.nyr = false;
            bmx.qsx.hca((bmx.qsx.pza[bmx.qsx.sqx] === 0));
            bmx.qsx.jaw(false)
        }
    };
    this.vdf = function () {
        this.jhi = window.innerWidth, this.fxv = window.innerHeight;
        this.kdp = false;
        if (bmx.suj.hix() == true && bmx.vbp.value69 === true) {
            if (bmx.suj.emq() === true) {
                this.kdp = true;
                this.jhi = (window.innerWidth > window.outerWidth) ? window.outerWidth : window.innerWidth;
                this.fxv = (window.innerHeight > window.outerHeight) ? window.outerHeight : window.innerHeight;
                if (this.jhi > this.fxv) {
                    this.fxv *= 0.98
                }
            } else {
                if (bmx.suj.zgz() === true) {
                    this.kdp = true;
                    if (window.orientation === 90 || window.orientation === -90) {
                        if (screen.height === 1024) {
                            this.jhi = 1024;
                            this.fxv = (window.innerHeight < 704) ? 662 : 704
                        } else {
                            if (screen.height === 736) {
                                this.jhi = 736;
                                this.fxv = (window.innerHeight < 414 || window.innerHeight === 475) ? 370 : 414
                            } else {
                                if (screen.height === 667) {
                                    this.jhi = 667;
                                    this.fxv = 375
                                }
                            }
                        }
                    } else {
                        if (screen.height === 1024) {
                            this.jhi = 768;
                            this.fxv = (window.innerHeight < 960) ? 928 : 960
                        } else {
                            if (screen.height === 736) {
                                this.jhi = 414;
                                this.fxv = 628
                            } else {
                                if (screen.height === 667) {
                                    this.jhi = 375;
                                    this.fxv = 559
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.iur = function () {
        var g = 0,
            k = 0,
            f = 1,
            e = 1,
            j = this.jhi,
            d = this.fxv;
        this.znt = (this.xws || j < this.width || d < this.height || this.tiq.nft);
        g = this.pbp(this.znt);
        f = ((j - k) / this.width).toString();
        f = Number(f.substring(0, (f.length > 5) ? 5 : f.length));
        e = ((d - g) / this.height).toString();
        e = Number(e.substring(0, (e.length > 5) ? 5 : e.length));
        if (this.znt) {
            if (this.tiq.nro) {
                if (f > e) {
                    this.huh = e;
                    this.ulv = e
                } else {
                    this.huh = f;
                    this.ulv = f
                }
            } else {
                this.huh = f;
                this.ulv = e
            }
        } else {
            this.huh = 1;
            this.ulv = 1
        }
        bmx.suj.lta(this.canvas, this.huh, this.ulv);
        if (this.xcb != null) {
            bmx.suj.lta(this.xcb, this.huh, this.ulv, ((this.tiq.xcb.rlq.x) - ((this.tiq.xcb.rlq.x + this.tiq.xcb.rig) / 2 * (1 - this.huh))), ((this.tiq.xcb.rlq.y) - ((this.tiq.xcb.rlq.y + this.tiq.xcb.xtn) / 2 * (1 - this.ulv))))
        }
        if (this.zbh != null) {
            bmx.suj.lta(this.zbh, this.huh, this.ulv)
        }
        if (this.znt) {
            this.offsetLeft = Math.floor((j - (this.canvas.width * this.huh))) / 2;
            this.offsetTop = Math.floor((d - (this.canvas.height * this.ulv))) / 2
        } else {
            this.offsetLeft = this.wda.offsetLeft;
            this.offsetTop = this.wda.offsetTop
        }
    };
    this.jqs = function () {
        if (this.vbg() === true) {
            var e = null;
            if (this.nxy[this.jye] === bmx.hvp.afh) {
                if (window.orientation === -90) {
                    e = bmx.tiq.agk
                } else {
                    e = bmx.tiq.nzl
                }
            } else {
                if (this.nxy[this.jye] === bmx.hvp.ktr) {
                    e = bmx.tiq.agk
                } else {
                    if (this.nxy[this.jye] === bmx.hvp.quq) {
                        e = bmx.tiq.nzl
                    }
                }
            }
            this.wzr = (this.fxv > this.jhi);
            this.fvo(e);
            this.cmk(false);
            if (this.hxr === true) {
                this.cxx()
            } else {
                this.dbq.psl("loading", "#cxx")
            }
        } else {
            if (bmx.suj.djn) {
                var f = (this.jhi > this.fxv) ? this.znk : this.ilz,
                    d = this.tiq.std,
                    e = null;
                if (f != this.yey) {
                    this.yey = f;
                    if (this.imi) {
                        e = (this.yey == this.znk) ? bmx.tiq.zuq : bmx.tiq.yiy
                    } else {
                        e = (this.yey == this.znk) ? bmx.vbp.value33 : bmx.vbp.value32
                    }
                    this.fvo(e);
                    this.cmk((d != this.tiq.std) || this.imi);
                    if (this.hxr === true) {
                        if (this.imi && this.drq) {
                            this.psh(this.ewo(this.language.hgc))
                        } else {
                            this.cxx()
                        }
                    } else {
                        this.dbq.psl("loading", "#cxx")
                    }
                }
            } else {
                if (!this.imi) {
                    e = (this.xws) ? bmx.vbp.value15 : bmx.vbp.value14;
                    this.fvo(e);
                    this.cmk(false);
                    if (this.hxr === true) {
                        this.cxx()
                    } else {
                        this.dbq.psl("loading", "#cxx")
                    }
                }
            }
        }
    };
    this.vbg = function () {
        return false
    };
    this.fnc = function () {
        return false
    };
    this.fvo = function (d) {};
    this.zrq = function () {
        this.style = new vjb()
    };
    this.pbp = function (d) {
        var e = 0;
        if (bmx.suj.emq() && window.innerWidth > window.innerHeight && d) {
            if (this.wiz === true && document.body.style.backgroundColor !== this.style.dme.backgroundColor) {
                document.body.style.backgroundColor = this.style.dme.backgroundColor
            }
        }
        return e
    };
    this.hfp = function () {
        if (bmx.suj.emq() && !bmx.suj.hix() && window.innerWidth > window.innerHeight) {
            return 0
        }
        return 0
    };
    this.pix = function () {
        return false
    };
    this.eqz = function () {
        if (bmx.suj.uxv) {
            this.whm = new wpu()
        } else {
            this.whm = new qfz()
        }
        this.whm.jbf();
        this.whm.drc(this.hvb())
    };
    this.lkd = function () {
        this.dbq = new klf();
        this.dbq.jbf();
        this.dbq.pvt("jackpots")
    };
    this.hvb = function () {
        var d = new dnb();
        d.jbf();
        return d
    };
    this.ypa = function () {
        this.unz = new iyx()
    };
    this.kub = function () {
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
                    for (var k = 0, g = bmx.vbp.value5.length; k < g; k++) {
                        if (o[l] === bmx.vbp.value5[k] && p.indexOf(o[l]) < 0) {
                            p.push(o[l])
                        }
                    }
                }
                if (p.length == 0) {
                    p.push(bmx.vbp.value5[0])
                }
                bmx.vbp.value5 = [];
                for (var l = 0, m = p.length; l < m; l++) {
                    bmx.vbp.value5.push(p[l])
                }
            }
            if (sessionStorage.sessionValue1 == null) {
                var q = bmx.suj.jih();
                if (this.dtu(q)) {
                    sessionStorage.sessionValue1 = q
                } else {
                    if (q === bmx.language.EN && this.dtu(bmx.language.US)) {
                        sessionStorage.sessionValue1 = bmx.language.US
                    } else {
                        if (q === bmx.language.DE && this.dtu(bmx.language.AT)) {
                            sessionStorage.sessionValue1 = bmx.language.AT
                        } else {
                            if (q === bmx.language.ES && this.dtu(bmx.language.MX)) {
                                sessionStorage.sessionValue1 = bmx.language.MX
                            } else {
                                if (q === bmx.language.ES && this.dtu(bmx.language.CO)) {
                                    sessionStorage.sessionValue1 = bmx.language.CO
                                } else {
                                    if (q === bmx.language.ES && this.dtu(bmx.language.CL)) {
                                        sessionStorage.sessionValue1 = bmx.language.CL
                                    } else {
                                        if (q === bmx.language.ES && this.dtu(bmx.language.VE)) {
                                            sessionStorage.sessionValue1 = bmx.language.VE
                                        } else {
                                            if (q === bmx.language.EN && this.dtu(bmx.language.BR)) {
                                                sessionStorage.sessionValue1 = bmx.language.BR
                                            } else {
                                                sessionStorage.sessionValue1 = bmx.vbp.value5[0]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this.dtu(sessionStorage.sessionValue1)) {
                for (var l = 0, m = bmx.vbp.value5.length; l < m; l++) {
                    if (bmx.vbp.value5[l] == sessionStorage.sessionValue1) {
                        this.ery = l;
                        break
                    }
                }
                this.language = this.kmz(sessionStorage.sessionValue1)
            } else {
                this.ery = 0;
                this.language = this.kmz(bmx.vbp.value5[this.ery]);
                sessionStorage.sessionValue1 = bmx.vbp.value5[this.ery]
            }
        } catch (n) {
            this.ery = 0;
            this.language = this.kmz(bmx.vbp.value5[this.ery]);
            console.error(n.izb)
        }
    };
    this.fhx = function () {
        var d = (bmx.vbp.value45 == bmx.xcj.zbl) ? this.tiq.xcj.qsx : (bmx.vbp.value45 == bmx.xcj.wsy) ? this.tiq.xcj.nhc : this.tiq.xcj.zof;
        this.wda = document.getElementById("gameArea");
        if (this.kdp === false) {
            this.wda.style.marginTop = (-d.rlq.height / 2) + "px";
            this.wda.style.marginLeft = (-d.rlq.width / 2) + "px"
        } else {
            this.wda.style.left = "0px";
            this.wda.style.top = "0px";
            this.wda.style.marginTop = ((window.innerHeight - d.rlq.height) / 2) + "px";
            this.wda.style.marginLeft = ((window.innerWidth - d.rlq.width) / 2) + "px"
        }
        this.wda.style.width = (d.rlq.width > window.innerWidth) ? window.innerWidth + "px" : d.rlq.width + "px";
        this.wda.style.height = (d.rlq.height > window.innerHeight) ? window.innerHeight + "px" : d.rlq.height + "px";
        this.canvas = document.getElementById("canvas");
        this.canvas.width = Math.round(d.rlq.width);
        this.canvas.height = Math.round(d.rlq.height);
        this.context2D = this.canvas.getContext("2d");
        this.zbh = document.getElementById("gameOverlay");
        if (this.zbh) {
            this.zbh.style.width = d.rlq.width + "px";
            this.zbh.style.height = d.rlq.height + "px"
        }
        this.zqj(d)
    };
    this.zqj = function (d) {
        var e = new hjq();
        e.jbf(d.rlq, this.context2D);
        e.parent = this;
        e.yqo = (this.imi) ? this.language.vhg : this.language.sxl;
        e.fpd = this.language.error;
        e.ilm(d);
        e.whj(this.style.xcj);
        this.dbq.jqp("loading", e)
    };
    this.ewr = function () {
        var d = new wqk();
        d.jbf(this.tiq.dab.rlq, null, this.context2D);
        d.parent = this;
        d.ilm(this.tiq.dab);
        d.whj(this.style.dab);
        if (sessionStorage.sessionValue15 == "true" && bmx.vbp.value49) {
            d.zlq("time", "", "--:-- [--:--]")
        } else {
            if (sessionStorage.sessionValue15 == "true" || bmx.vbp.value49) {
                d.zlq("time", "", "--:--")
            }
        }
        if (this.fnw()) {
            d.zlq("freeplay", "", this.language.cii)
        } else {
            d.zlq("id", " ", "")
        }
        this.dbq.jqp("topi", d)
    };
    this.edg = function () {
        var d = new vgg();
        d.jbf(this.tiq.dho.rlq, null, this.context2D);
        d.parent = this;
        d.ilm(this.tiq.dho);
        d.whj(this.style.dho, false);
        d.aco(false);
        this.dbq.jqp("topb", d)
    };
    this.fgu = function () {};
    this.gvu = function () {
        var d = new qnp();
        d.jbf(this.tiq.fpm.rlq, null, this.context2D);
        d.parent = this;
        d.hyf(this.tiq.fpm);
        d.whj(this.style.fpm);
        d.aco(false);
        this.dbq.jqp("stats", d)
    };
    this.wvw = function () {
        this.cmw = new rdp();
        this.cmw.jbf();
        this.cmw.whj(this.style.cmw);
        this.cmw.ilm(this.tiq.cmw)
    };
    this.vbl = function () {
        this.dws = new bxa();
        this.dws.jbf();
        this.dws.whj(this.style.dws);
        this.dws.ilm(this.tiq.dws)
    };
    this.yzq = function () {
        if (this.ojf()) {
            this.fxc.rhp = document.getElementById("jurisdictionDiv");
            this.fxc.elx = document.getElementById("btnsp");
            this.fxc.gmk = document.getElementById("btnsl");
            this.fxc.zio = document.getElementById("btnst");
            if (this.fxc.elx) {
                this.fxc.elx.innerHTML = this.language.mbe;
                this.fxc.elx.onclick = this.gjx;
                this.fxc.elx.ontouchend = this.gjx
            }
            if (this.fxc.gmk) {
                this.fxc.gmk.innerHTML = this.language.xyi;
                this.fxc.gmk.onclick = this.ltr;
                this.fxc.gmk.ontouchend = this.ltr
            }
            if (this.fxc.zio) {
                this.fxc.zio.innerHTML = this.language.dxg;
                this.fxc.zio.onclick = this.egb;
                this.fxc.zio.ontouchend = this.egb
            }
            this.asy();
            this.yns()
        }
    };
    this.rhi = function (e) {
        var d = new kfk();
        d.jbf(this.tiq.oza.rlq, null, this.context2D);
        d.parent = this;
        d.jgo = true;
        if (e) {
            d.eca(e)
        }
        d.hyf(this.tiq.oza);
        d.cox(this.language);
        d.whj(this.style.oza);
        d.ilm(this.tiq.oza);
        d.aco(false);
        this.dbq.jqp("autop", d)
    };
    this.pzh = function (d) {
        var e = new xzt();
        e.jbf(this.tiq.wpj.rlq, null, this.context2D);
        e.parent = this;
        if (d) {
            e.xno(d)
        }
        e.aco(false);
        this.dbq.jqp("settings", e)
    };
    this.cmk = function (d) {};
    this.cwu = function () {
        var d = this.dbq.uxx("stats");
        if (d) {
            d.cch(this.tiq.fpm.rlq);
            d.ilm(this.tiq.fpm)
        }
    };
    this.qns = function () {
        if (this.cmw) {
            this.cmw.ilm(this.tiq.cmw)
        }
    };
    this.gvy = function () {
        if (this.dws) {
            this.dws.ilm(this.tiq.dws)
        }
    };
    this.asy = function () {
        var d = null,
            e = 0;
        if (this.fxc) {
            d = this.tiq.hyh;
            if (this.fxc.rhp) {
                bmx.suj.jvx(this.fxc.rhp, d.txw)
            }
            if (this.fxc.elx) {
                this.fxc.elx.style.fontSize = d.qjl.fontSize + "px";
                this.fxc.elx.style.textIndent = d.qjl.textIndent + "px";
                bmx.suj.jvx(this.fxc.elx, d.zha)
            }
            if (this.fxc.gmk) {
                this.fxc.gmk.style.fontSize = d.qjl.fontSize + "px";
                this.fxc.gmk.style.textIndent = d.qjl.textIndent + "px";
                bmx.suj.jvx(this.fxc.gmk, d.jnh)
            }
            if (this.fxc.zio) {
                this.fxc.zio.style.fontSize = d.qjl.fontSize + "px";
                this.fxc.zio.style.textIndent = d.qjl.textIndent + "px";
                bmx.suj.jvx(this.fxc.zio, d.chb)
            }
            if (this.fxc.rhp) {
                e = (d.txw.width - d.txw.height) / 2;
                if (this.usz == bmx.tiq.agk) {
                    this.fxc.rhp.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + e + "px)"
                } else {
                    this.fxc.rhp.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + (-e) + "px)"
                }
            }
        }
    };
    this.fjm = function () {
        var d = this.dbq.uxx("autop");
        if (d) {
            d.cch(this.tiq.oza.rlq);
            d.ilm(this.tiq.oza)
        }
    };
    this.fji = function () {
        var d = this.dbq.uxx("settings");
        if (d) {
            d.cch(this.tiq.wpj.rlq);
            d.ilm(this.tiq.wpj)
        }
    };
    this.atp = function () {
        var d = this.dbq.uxx("topi");
        if (d) {
            d.cch(this.tiq.dab.rlq);
            d.ilm(this.tiq.dab)
        }
    };
    this.ale = function () {
        var d = this.dbq.uxx("topb");
        if (d) {
            d.cch(this.tiq.dho.rlq);
            d.ilm(this.tiq.dho)
        }
    };
    this.lkc = function () {
        var e = this.dbq.uxx("loading"),
            d = (bmx.vbp.value45 == bmx.xcj.zbl) ? this.tiq.xcj.qsx : (bmx.vbp.value45 == bmx.xcj.wsy) ? this.tiq.xcj.nhc : this.tiq.xcj.zof;
        if (e) {
            this.canvas.width = 0;
            if (this.kdp === false) {
                this.wda.style.marginTop = (-d.rlq.height / 2) + "px";
                this.wda.style.marginLeft = (-d.rlq.width / 2) + "px"
            } else {
                this.wda.style.left = "0px";
                this.wda.style.top = "0px";
                this.wda.style.marginTop = ((this.fxv - d.rlq.height) / 2) + "px";
                this.wda.style.marginLeft = ((this.jhi - d.rlq.width) / 2) + "px"
            }
            this.wda.style.width = (d.rlq.width > this.jhi) ? this.jhi + "px" : d.rlq.width + "px";
            this.wda.style.height = (d.rlq.height > this.fxv) ? this.fxv + "px" : d.rlq.height + "px";
            this.canvas.width = Math.round(d.rlq.width);
            this.canvas.height = Math.round(d.rlq.height);
            if (this.zbh) {
                this.zbh.style.width = d.rlq.width + "px";
                this.zbh.style.height = d.rlq.height + "px"
            }
            e.cch(d.rlq);
            e.ilm(d)
        }
    };
    this.jpx = function () {
        if (bmx.suj.djn && !bmx.suj.uxv) {
            if (!this.whm.csz && bmx.suj.gvi != bmx.xpp.omh) {
                this.neh = false;
                this.sqx = 0
            }
        }
    };
    this.efx = function (d) {
        if (bmx.suj.djn) {
            if (!this.imi) {
                return bmx.tiq.cza
            } else {
                if (!this.lys) {
                    return bmx.tiq.zuq
                }
            }
        }
        return d
    };
    this.rbs = function () {
        var d = this.dbq.uxx("loading");
        this.ahr();
        if (d) {
            d.eyh = true
        }
        if ((bmx.suj.gvi === bmx.xpp.cnf || bmx.suj.gvi === bmx.xpp.jfd || bmx.suj.gvi === bmx.xpp.yiw) && bmx.suj.rkp === bmx.os.xwo && bmx.suj.wmm === true) {
            if (this.whm.csz === false || bmx.suj.kik() === false || bmx.suj.vyj() === false) {
                bmx.ebu = bmx.wxb.vnu
            }
        }
        if (bmx.ebu == 0) {
            if (this.neh === true && bmx.suj.oul().length === 0) {
                this.neh = false
            }
            if (d) {
                if (bmx.vbp.value45 === bmx.xcj.wsy) {
                    d.start()
                } else {
                    if (bmx.vbp.value45 === bmx.xcj.cul) {
                        d.tsa()
                    }
                }
                d.cxx(0)
            }
            this.vrg();
            if (this.neh === true) {
                this.gcw()
            }
            if (d && d.nxh() && bmx.vbp.value45 === bmx.xcj.wsy) {
                d.bcj = bmx.qsx.whm.start
            } else {
                this.whm.start()
            }
        } else {
            if (d) {
                if (bmx.ebu == bmx.wxb.bvg && bmx.suj.gvi === bmx.xpp.otj) {
                    d.ljc = this.language.cag;
                    d.cxx(0)
                } else {
                    if (bmx.ebu == bmx.izb.uio) {
                        d.ljc = this.language.opm;
                        d.cxx(0)
                    } else {
                        d.ljc = this.language.dax;
                        if (bmx.suj.rkp === bmx.os.xwo || bmx.suj.rkp === bmx.os.efr) {
                            if (bmx.ebu != bmx.wxb.bvg && sessionStorage.sessionValue1 === bmx.language.TR) {
                                d.ljc += "|Google Chrome" + this.language.lsv
                            } else {
                                if (bmx.ebu != bmx.wxb.bvg && (sessionStorage.sessionValue1 === bmx.language.GE || sessionStorage.sessionValue1 === bmx.language.HU)) {
                                    d.ljc += "|" + this.language.dad + " Google Chrome" + this.language.udh
                                } else {
                                    d.ljc += "|" + this.language.lsv + " Google Chrome"
                                }
                            }
                        } else {
                            if (bmx.suj.rkp === bmx.os.xwl || bmx.suj.rkp === bmx.os.efr) {
                                if (bmx.ebu != bmx.wxb.bvg && sessionStorage.sessionValue1 === bmx.language.TR) {
                                    d.ljc += "|Google Chrome, Mozilla Firefox" + this.language.lsv
                                } else {
                                    if (bmx.ebu != bmx.wxb.bvg && (sessionStorage.sessionValue1 === bmx.language.GE || sessionStorage.sessionValue1 === bmx.language.HU)) {
                                        d.ljc += "|" + this.language.dad + " Google Chrome, Mozilla Firefox" + this.language.udh
                                    } else {
                                        d.ljc += "|" + this.language.lsv + " Google Chrome, Mozilla Firefox"
                                    }
                                }
                            }
                        }
                        console.error("Errorcode: " + bmx.ebu);
                        d.cxx(0)
                    }
                }
            }
        }
    };
    this.vrg = function () {};
    this.gcw = function () {};
    this.jlq = function () {
        var e = this.klm + this.tiq.type + "/",
            d = this.dbq.uxx("loading");
        if (bmx.vbp.value45 == bmx.xcj.zbl) {
            e += "load.jpg"
        } else {
            if (bmx.vbp.value45 == bmx.xcj.wsy) {
                e += "load_amatic.png"
            } else {
                if (bmx.vbp.value45 == bmx.xcj.cul) {
                    this.whm.vfm("splashanim", bmx.vbp.value30 + "/basic/images/" + this.tiq.type + "/loadanim.png");
                    e += "load_amanet.png"
                }
            }
        }
        if (e.indexOf(".png") >= 0) {
            if (d) {
                d.lit = true
            }
        }
        this.whm.vfm("splash", e);
        this.whm.evi()
    };
    this.aar = function () {};
    this.dtu = function (e) {
        for (var d = 0; d < bmx.vbp.value5.length; d++) {
            if (bmx.vbp.value5[d] == e) {
                return true
            }
        }
        return false
    };
    this.lfo = function () {
        bmx.qsx.nei = true;
        if (!bmx.qsx.imi) {
            bmx.qsx.lpp();
            if (bmx.qsx.kxc()) {
                bmx.qsx.eao()
            }
        } else {
            bmx.qsx.tde()
        }
        bmx.qsx.connect()
    };
    this.lpp = function () {};
    this.tde = function () {};
    this.connect = function () {
        this.tsc.connect(this.clm, this.uig, this.nma, this.qnv, this.glw, this.kdq, this.gir)
    };
    this.pkk = function (d) {
        if (typeof d === "undefined") {
            bmx.qsx.tsc.pkk(0)
        } else {
            bmx.qsx.tsc.pkk(d)
        }
    };
    this.duj = function (d) {
        this.thy = 0;
        this.oju = 0;
        this.dpu = d;
        clearInterval(this.lea);
        this.lea = setInterval(this.dlh, 1000)
    };
    this.dlh = function () {
        var d = bmx.qsx.dbq.uxx("loading");
        bmx.qsx.thy++;
        bmx.qsx.oju = Math.round(bmx.vbp.value47 / 1000) - bmx.qsx.thy;
        bmx.qsx.oju = (bmx.qsx.oju > 0) ? bmx.qsx.oju : 0;
        if (!bmx.qsx.wiz) {
            if (d) {
                d.ljc = "Can not connect to game server!|Tries to connect: " + bmx.qsx.dpu + " (" + bmx.qsx.oju + " sec)";
                d.cxx(0)
            }
        }
    };
    this.klc = function () {
        return bmx.vbp.value74
    };
    this.cxx = function (d, g, e, f) {};
    this.nyy = function () {
        return (this.hxr === true && this.wiz === true && this.wzr === false)
    };
    this.psh = function (e) {
        var d = this.dbq.uxx("history");
        this.hxr = true;
        if (this.wiz) {
            if (this.tiq.avb) {
                bmx.suj.jbt(this.context2D, this.tiq.qsx.rlq.x - this.tiq.qsx.lbt, this.tiq.qsx.rlq.y - this.tiq.qsx.lbt, this.tiq.qsx.rlq.width + 2 * this.tiq.qsx.lbt, this.tiq.qsx.rlq.height + 2 * this.tiq.qsx.lbt, "black", 1)
            }
            bmx.suj.ibm(this.context2D, e, "white", this.tiq.qsx.rlq.x, this.tiq.qsx.rlq.y, this.tiq.qsx.rlq.width, this.tiq.qsx.rlq.height, "arial", 28, "bold");
            if (d) {
                d.cxx()
            }
        }
    };
    this.mnj = function () {
        if (bmx.qsx.cmw) {
            bmx.qsx.cmw.hme()
        }
        bmx.qsx.psn(false);
        bmx.qsx.mho.rsc(false);
        bmx.qsx.mho.bco.psl("exit", "#giu", [true]);
        if (bmx.suj.utl()) {
            bmx.suj.pef();
            setTimeout(bmx.qsx.ahr, 1400)
        }
        if (bmx.vbp.value67 > 0) {
            bmx.qsx.pkk(bmx.vbp.value67)
        } else {
            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                bmx.qsx.afm({
                    type: "history",
                    sender: bmx.qsx.clm,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                });
                window.location.href = decodeURIComponent(sessionStorage.sessionValue16)
            } else {
                if (sessionStorage.sessionValue5 && sessionStorage.sessionValue5 != "null") {
                    bmx.qsx.afm({
                        type: "quit",
                        sender: bmx.qsx.clm,
                        lang: sessionStorage.sessionValue1.toUpperCase()
                    });
                    if (sessionStorage.sessionValue5 !== "(api)") {
                         window.parent.postMessage('CloseGame',"*");
                    }
                }
            }
        }
    };
    this.uxn = function () {
        clearTimeout(bmx.qsx.kzq);
        bmx.qsx.psn(false);
        if (bmx.qsx.mho) {
            bmx.qsx.mho.rsc(false)
        }
        if (!bmx.qsx.imi) {
            bmx.qsx.stop();
            if (bmx.qsx.mho) {
                bmx.qsx.mho.bco.psl("info", "#mlw", [bmx.qsx.language.kgx]);
                bmx.qsx.cxx()
            }
            if (bmx.qsx.vbg() === true && bmx.suj.utl()) {
                bmx.suj.pef();
                setTimeout(bmx.qsx.ahr, 800);
                setTimeout(bmx.qsx.tsc.bjf.close, 800)
            } else {
                bmx.qsx.tsc.bjf.close()
            }
        } else {
            bmx.qsx.tsc.close()
        }
    };
    this.aew = function () {
        bmx.qsx.aay = true
    };
    this.noc = function () {
        if (bmx.suj.djn == true) {
            if (bmx.qsx.aay == true) {
                bmx.qsx.aay = false;
                bmx.suj.pef();
                setTimeout(bmx.qsx.ahr, 1400)
            }
        } else {
            bmx.suj.pef();
            setTimeout(bmx.qsx.ahr, 1400)
        }
    };
    this.dde = function () {
        var e = (bmx.qsx.vbg() === true) ? "smartphone" : "desktop",
            j = "en";
        if (sessionStorage.sessionValue1 == bmx.language.ES || sessionStorage.sessionValue1 == bmx.language.CO || sessionStorage.sessionValue1 == bmx.language.CL || sessionStorage.sessionValue1 == bmx.language.MX || sessionStorage.sessionValue1 == bmx.language.VE) {
            j = "es"
        } else {
            if (sessionStorage.sessionValue1 == bmx.language.RO) {
                j = "ro"
            } else {
                if (sessionStorage.sessionValue1 == bmx.language.PT || sessionStorage.sessionValue1 == bmx.language.BR) {
                    j = "pt"
                } else {
                    if (sessionStorage.sessionValue1 == bmx.language.HR) {
                        j = "hr"
                    } else {
                        if (sessionStorage.sessionValue1 == bmx.language.DE) {
                            j = "de"
                        } else {
                            if (sessionStorage.sessionValue1 == bmx.language.SE) {
                                j = "se"
                            }
                        }
                    }
                }
            }
        }
        if (bmx.qsx.pda != "") {
            var f = null,
                g = "",
                d = "";
            if (bmx.qsx.pda != "") {
                g += "rtp=" + bmx.qsx.pda
            }
            if (bmx.qsx.vdh != "") {
                g += (bmx.qsx.pda != "") ? "&" : "";
                g += "maxwin=" + ((bmx.qsx.vdh == "0") ? "0" : bmx.qsx.qzz(Number(bmx.qsx.vdh) * bmx.qsx.skp()))
            }
            d = encodeURIComponent(g);
            f = window.open(bmx.vbp.value30 + "/gamerules/" + j + "/" + e + "/" + bmx.qsx.clm.toLowerCase() + ".html?" + d, "_blank", (e === "desktop") ? "width=800,scrollbars=yes" : null);
            if (f == null || typeof f === "undefined") {
                window.location.href = bmx.vbp.value30 + "/gamerules/" + j + "/" + e + "/" + bmx.qsx.clm.toLowerCase() + ".html?" + d
            }
        }
    };
    this.upp = function () {
        bmx.qsx.mup = false;
        bmx.qsx.tvt();
        bmx.qsx.oah();
        bmx.qsx.sun()
    };
    this.dxa = function () {
        var d = bmx.qsx.dbq.uxx("stats");
        if (d) {
            d.ney(true, true)
        }
        bmx.qsx.kpp.close(true)
    };
    this.yxx = function () {
        var d = bmx.qsx.dbq.uxx("stats");
        bmx.qsx.stop();
        if (d && d.bbd()) {
            d.ney(true, true)
        }
        bmx.qsx.tsc.bjf.close();
        if (bmx.qsx.kpp) {
            bmx.qsx.kpp.close(false)
        }
    };
    this.leh = function () {
        clearTimeout(bmx.qsx.kzq);
        bmx.qsx.mho.rsc(false);
        bmx.qsx.stop();
        bmx.qsx.tsc.bjf.jiq()
    };
    this.ymb = function () {
        if (bmx.qsx.drq) {
            return
        }
        var d = bmx.qsx.dbq.uxx("history");
        if (d) {
            d.rsc(false)
        }
        bmx.qsx.stop();
        bmx.qsx.tsc.gmg(bmx.qsx.sjj)
    };
    this.yac = function () {
        if (bmx.qsx.drq) {
            return
        }
        var d = bmx.qsx.dbq.uxx("history");
        if (d) {
            d.rsc(false)
        }
        bmx.qsx.stop();
        bmx.qsx.tsc.ese(bmx.qsx.sjj)
    };
    this.jcg = function () {
        var d = bmx.qsx.dbq.uxx("history");
        if (d) {
            d.rsc(false)
        }
        bmx.qsx.stop();
        clearInterval(bmx.qsx.xri);
        bmx.qsx.xtf();
        bmx.qsx.tsc.close()
    };
    this.yri = function () {
        bmx.qsx.whm.mvq("btn");
        bmx.qsx.whm.lry("btn");
        bmx.qsx.zbu()
    };
    this.ooh = function () {
        var f = bmx.qsx.dbq.uxx("topb"),
            e = bmx.qsx.dbq.uxx("settings"),
            g = bmx.qsx.dbq.uxx("gameb"),
            d = bmx.qsx.dbq.uxx("topi");
        if (webAudioEngine && webAudioEngine.state == "suspended") {
            webAudioEngine.resume()
        }
        if (bmx.qsx.whm.csz === true) {
            bmx.qsx.sqx = (bmx.qsx.sqx === bmx.qsx.pza.length - 1) ? 0 : bmx.qsx.sqx + 1;
            bmx.qsx.bmw(bmx.qsx.pza[bmx.qsx.sqx])
        } else {
            bmx.qsx.sqx = (bmx.qsx.sqx === bmx.qsx.pza.length - 1) ? 0 : bmx.qsx.pza.length - 1;
            bmx.qsx.hca((bmx.qsx.pza[bmx.qsx.sqx] === 0))
        }
        sessionStorage.sessionValue6 = bmx.qsx.sqx;
        if (bmx.qsx.pza[bmx.qsx.sqx] > 0) {
            bmx.qsx.whm.lry("audioon")
        }
        if (d) {
            d.ryq("audio", bmx.qsx.pza[bmx.qsx.sqx])
        }
        if (f) {
            f.bco.psl("audio", "#dtk", [bmx.qsx.sqx])
        }
        if (e) {
            e.bco.psl("audio", "#dtk", [bmx.qsx.sqx])
        }
        if (g) {
            g.bco.psl("audio", "#dtk", [bmx.qsx.sqx])
        }
        bmx.qsx.cxx()
    };
    this.ihb = function () {};
    this.ubp = function () {
        var d = bmx.qsx.dbq.uxx("settings");
        if (d) {
            if (d.bbd()) {
                bmx.qsx.fay()
            } else {
                bmx.qsx.qic()
            }
            bmx.qsx.whm.lry("btn");
            if (bmx.qsx.tiq.zfw === false) {
                bmx.qsx.mho.bco.psl("setting", "#kak", [d.bbd()])
            }
        }
    };
    this.mgs = function () {
        var d = bmx.qsx.dbq.uxx("settings"),
            e = "";
        bmx.qsx.jye = (bmx.qsx.jye < bmx.qsx.nxy.length - 1) ? bmx.qsx.jye + 1 : (bmx.suj.dxn()) ? 0 : 1;
        localStorage.localValue1 = bmx.qsx.jye;
        bmx.qsx.ahr();
        if (d) {
            d.bco.psl("adjustment", "#dtk", [(bmx.qsx.usz === bmx.tiq.nzl) ? 0 : 1]);
            if (bmx.qsx.nxy[bmx.qsx.jye] === bmx.hvp.ktr) {
                e = bmx.qsx.language.left
            } else {
                if (bmx.qsx.nxy[bmx.qsx.jye] === bmx.hvp.quq) {
                    e = bmx.qsx.language.gqz
                } else {
                    if (bmx.qsx.nxy[bmx.qsx.jye] === bmx.hvp.afh) {
                        e = bmx.qsx.language.wqq
                    }
                }
            }
            d.bco.psl("adjustment", "#gtw", [e])
        }
    };
    this.gjx = function () {
        if (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue21)
        }
    };
    this.ltr = function () {
        if (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue20)
        }
    };
    this.egb = function () {
        if (sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue19)
        }
    };
    this.sza = function (e, d) {
        this.mho.bco.psl("creditd", "#gtw", [this.qzz(e), d])
    };
    this.fve = function (e, d) {
        if (e > 0) {
            this.mho.bco.psl("betd", "#gtw", [this.qzz(e), d])
        } else {
            this.mho.bco.psl("betd", "#gtw", ["", d])
        }
    };
    this.pjh = function (e) {
        var d = this.dbq.uxx("topi");
        this.sjj = e;
        if (d) {
            d.exj("id", (e > 0) ? e : "")
        }
    };
    this.gix = function () {
        var e = "",
            d = bmx.qsx.dbq.uxx("topi");
        if (bmx.vbp.value49) {
            e += bmx.qsx.qeo()
        }
        if (bmx.vbp.value49 && sessionStorage.sessionValue15 == "true") {
            e += " ["
        }
        if (sessionStorage.sessionValue15 == "true") {
            e += bmx.qsx.oer()
        }
        if (bmx.vbp.value49 && sessionStorage.sessionValue15 == "true") {
            e += "]"
        }
        if (d) {
            d.exj("time", e)
        }
    };
    this.oer = function () {
        return this.getTime(new Date().getTime() - this.ddt)
    };
    this.qeo = function () {
        var d = new Date();
        return this.zew(d.getHours()) + ":" + this.zew(d.getMinutes())
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
        return this.zew(d) + ":" + this.zew(f)
    };
    this.zew = function (d) {
        if (d < 0) {
            return "00"
        } else {
            if (d < 10) {
                return "0" + d
            }
        }
        return d
    };
    this.szm = function () {
        if (sessionStorage.sessionValue15 == "true" || bmx.vbp.value49) {
            if (bmx.vbp.value49) {
                this.qeo()
            }
            this.ddt = (this.ehy > 0) ? this.ehy : new Date().getTime();
            this.gix();
            this.svo = setInterval(this.gix, 1000)
        }
    };
    this.zla = function () {
        clearInterval(this.svo)
    };
    this.ibq = function (d) {
        this.ddt -= d
    };
    this.xom = function (d, f) {
        var e = this.dbq.uxx("loading");
        if (e && e.ljc == null) {
            if (f && f !== "") {
                e.fpd = f
            } else {
                e.fpd = this.language.error
            }
            e.ljc = d;
            e.cxx(this.whm.obw())
        }
    };
    this.qic = function () {};
    this.fay = function () {};
    this.uhc = function () {};
    this.gtq = function () {};
    this.zbu = function () {
        var g = false,
            j = this.dbq.uxx("topb"),
            f = this.dbq.uxx("settings"),
            k = this.dbq.uxx("gameb"),
            d = this.dbq.uxx("topi");
        this.ery = (this.ery + 1 == bmx.vbp.value5.length) ? 0 : this.ery + 1;
        sessionStorage.sessionValue1 = bmx.vbp.value5[this.ery];
        this.language = this.kmz(bmx.vbp.value5[this.ery]);
        this.cox();
        if (j && g == false) {
            var e = j.bco.uxx("language");
            if (e) {
                e.tpx(this.mtc(bmx.vbp.value5[this.ery]));
                g = true
            }
            j.svu(true)
        }
        if (f && g == false) {
            var e = f.bco.uxx("language");
            if (e) {
                e.tpx(this.mtc(bmx.vbp.value5[this.ery]));
                g = true
            }
        }
        if (k && g == false) {
            var e = k.bco.uxx("language");
            if (e) {
                e.tpx(this.mtc(bmx.vbp.value5[this.ery]));
                g = true
            }
        }
        if (g == false) {
            var e = this.mho.bco.uxx("lang");
            if (e) {
                e.ljv = this.mtc(bmx.vbp.value5[this.ery])
            }
        }
        if (d) {
            d.dtk("language", sessionStorage.sessionValue1)
        }
        this.cxx()
    };
    this.cox = function () {};
    this.kmz = function (d) {
        if (d == bmx.language.EN || d == bmx.language.US) {
            return new ahx()
        } else {
            if (d == bmx.language.ES || d == bmx.language.CO || d == bmx.language.MX || d == bmx.language.CL || d == bmx.language.VE) {
                return new uaw()
            } else {
                if (d == bmx.language.DE || d == bmx.language.AT) {
                    return new kai()
                } else {
                    if (d == bmx.language.PT || d == bmx.language.BR) {
                        return new phy()
                    } else {
                        if (d == bmx.language.RU) {
                            return new tcb()
                        } else {
                            if (d == bmx.language.EE) {
                                return new zvs()
                            } else {
                                if (d == bmx.language.TR) {
                                    return new yoh()
                                } else {
                                    if (d == bmx.language.CZ) {
                                        return new rbx()
                                    } else {
                                        if (d == bmx.language.GR) {
                                            return new iqx()
                                        } else {
                                            if (d == bmx.language.BG) {
                                                return new yrr()
                                            } else {
                                                if (d == bmx.language.GE) {
                                                    return new bye()
                                                } else {
                                                    if (d == bmx.language.HU) {
                                                        return new zvc()
                                                    } else {
                                                        if (d == bmx.language.RO) {
                                                            return new xsw()
                                                        } else {
                                                            if (d == bmx.language.FR) {
                                                                return new krw()
                                                            } else {
                                                                if (d == bmx.language.HR) {
                                                                    return new zyt()
                                                                } else {
                                                                    if (d == bmx.language.IT) {
                                                                        return new ihs()
                                                                    } else {
                                                                        if (d == bmx.language.SE) {
                                                                            return new nwh()
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
    this.mtc = function (d) {
        if (d) {
            return this.whm.wez(d)
        }
        return null
    };
    this.hlj = function () {
        this.whm.cod()
    };
    this.xtf = function () {};
    this.hca = function (d) {
        this.whm.etr(d)
    };
    this.bmw = function (d) {
        this.whm.rul(d)
    };
    this.crh = function () {
        this.fgu();
        var d = this.dbq.uxx("history");
        this.wiz = true;
        this.drq = true;
        if (d) {
            d.bui(true)
        }
        this.psh(this.ewo(this.language.hgc))
    };
    this.sbu = function () {
        loadGame("hist_" + bmx.qsx.clm.toLowerCase(), bmx.vbp.value30 + "/" + bmx.qsx.clm.toLowerCase() + "/src/hist_" + bmx.qsx.clm.toLowerCase(), "UTF-8");
        removeGame(bmx.qsx.clm.toLowerCase(), bmx.vbp.value30 + "/" + bmx.qsx.clm.toLowerCase() + "/src/" + bmx.qsx.clm.toLowerCase())
    };
    this.xrj = function () {
        var d = "./history_" + this.clm.toLowerCase() + ".html";
        if (sessionStorage.sessionValue12) {
            d += "?config=" + sessionStorage.sessionValue12
        }
        window.location.href = d
    };
    this.tjj = function () {
        var d = null;
        if (bmx.qsx.lys) {
            return
        }
        if (sessionStorage.sessionValue5 != null) {
            bmx.qsx.afm({
                type: "quit",
                sender: bmx.qsx.clm,
                lang: sessionStorage.sessionValue1.toUpperCase()
            });
            sessionStorage.exitGame = "true";
            d = decodeURIComponent(sessionStorage.sessionValue5);
            bmx.qsx.izf();
            if (d !== "(api)") {
                 window.parent.postMessage('CloseGame',"*");
            }
        } else {
            removeGame(bmx.qsx.clm.toLowerCase(), bmx.vbp.value30 + "/" + bmx.qsx.clm.toLowerCase() + "/src/" + bmx.qsx.clm.toLowerCase());
            removeGame("hist_" + bmx.qsx.clm.toLowerCase(), bmx.vbp.value30 + "/" + bmx.qsx.clm.toLowerCase() + "/src/hist_" + bmx.qsx.clm.toLowerCase());
            loadMenu("menu", bmx.vbp.value1001, "UTF-8", true)
        }
    };
    this.vcq = function () {
        var d = null;
        if (sessionStorage.sessionValue5 != null) {
            bmx.qsx.afm({
                type: "quit",
                sender: bmx.qsx.clm,
                lang: sessionStorage.sessionValue1.toUpperCase()
            });
            d = decodeURIComponent(sessionStorage.sessionValue5);
            bmx.qsx.izf();
            if (d !== "(api)") {
          window.parent.postMessage('CloseGame',"*");
            }
        } else {
            removeGame(bmx.qsx.clm.toLowerCase(), bmx.vbp.value30 + "/" + bmx.qsx.clm.toLowerCase() + "/src/" + bmx.qsx.clm.toLowerCase());
            removeGame("hist_" + bmx.qsx.clm.toLowerCase(), bmx.vbp.value30 + "/" + bmx.qsx.clm.toLowerCase() + "/src/hist_" + bmx.qsx.clm.toLowerCase());
            loadMenu("menu", bmx.vbp.value1001, "UTF-8", false)
        }
    };
    this.izf = function () {
        if (!bmx.qsx.imi && bmx.vbp.value83) {
            sessionStorage.clear()
        }
    };
    this.dqn = function (f) {
        var g = null;
        if (this.cmw) {
            for (var e = 0, d = f.length; e < d; e++) {
                g = f[e];
                if (g.xkd !== bmx.izb.iyv) {
                    if (g.xkd === bmx.izb.hcu || g.xkd === bmx.izb.kpj) {
                        g.Title = this.language.hmz;
                        g.Text = (g.xkd === bmx.izb.hcu) ? this.language.gpq : this.language.ofl;
                        g.Buttons = [{
                            Text: this.language.zxe,
                            Action: "quit"
                        }]
                    } else {
                        if (g.xkd === bmx.izb.znh) {
                            g.Title = this.language.xiv;
                            g.Text = this.language.nfc + "\n";
                            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                                g.Text += this.language.cvz;
                                g.Buttons = [{
                                    Text: this.ewo(this.language.eps),
                                    Action: "history"
                                }, {
                                    Text: this.language.zxe,
                                    Action: "quit"
                                }]
                            } else {
                                g.Buttons = [{
                                    Text: this.language.zxe,
                                    Action: "quit"
                                }]
                            }
                        } else {
                            if (g.xkd === bmx.izb.uyu || g.xkd === bmx.izb.jnw || g.xkd === bmx.izb.nld) {
                                g.Title = this.yek;
                                if (g.xkd === bmx.izb.uyu) {
                                    g.Text = this.language.hbs + " " + this.cnb + " " + this.language.ldk + "\n\n" + this.language.kgs
                                } else {
                                    if (g.xkd === bmx.izb.jnw) {
                                        g.Text = this.language.pep + " " + (this.cnb - this.bsc) + " " + this.language.tih + "\n\n" + this.language.kgs
                                    } else {
                                        if (g.xkd === bmx.izb.nld) {
                                            g.Text = this.language.kiu + ": " + this.bsc + "\n" + this.language.uie + ": " + this.ait(this.ady)
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
                    if (g.xkd === bmx.izb.kgf || g.xkd === bmx.izb.zmz) {
                        g.Title = this.language.bbu;
                        g.Text = this.language.kab;
                        g.Buttons = [{
                            Text: this.language.ok,
                            Action: "continue"
                        }]
                    } else {
                        if (g.xkd === bmx.izb.cvx) {
                            g.Title = this.language.dvy;
                            g.Text = this.language.kfp;
                            g.Buttons = [{
                                Text: this.language.ok,
                                Action: "continue"
                            }]
                        } else {
                            if (g.xkd === bmx.izb.roulette.lfi || g.xkd === bmx.izb.roulette.qer) {
                                g.Title = this.language.hmz;
                                g.Text = (g.xkd === bmx.izb.roulette.lfi) ? this.language.tla : this.language.jbn;
                                g.Buttons = [{
                                    Text: this.language.zxe,
                                    Action: "quit"
                                }]
                            }
                        }
                    }
                }
            }
            this.cmw.xfb(f)
        }
    };
    this.stop = function () {
        this.zla();
        this.igi();
        this.ure();
        clearTimeout(this.bku);
        if (!this.imi) {
            clearInterval(this.xri)
        }
        this.dbq.psl("autop", "#stop");
        this.dbq.psl("settings", "#stop");
        this.dbq.psl("topb", "#stop")
    };
    this.fnw = function () {
        var d = false;
        if (this.vsc.toLowerCase().indexOf("freeplay") === 0) {
            d = true
        } else {
            if (this.uig == "freeplay" && this.nma == "freeplay") {
                d = true
            } else {
                if (this.qnv && (this.qnv == "b71d982ffcbe56eb8cd11fa05963bbee" || this.qnv.toLowerCase() == "freeplay")) {
                    d = true
                } else {
                    if (bmx.vbp.value68 != null && this.gir.toLowerCase() === bmx.vbp.value68.toLowerCase()) {
                        d = true
                    }
                }
            }
        }
        if (d === true) {
            bmx.vbp.value21.e = false;
            if (bmx.vbp.value76) {
                bmx.vbp.value76.f = false
            }
        }
        return d
    };
    this.imf = function () {
        return (bmx.vbp.value65 > 0)
    };
    this.wvq = function () {
        return (((bmx.suj.rkp === bmx.os.oys && bmx.suj.bbt() === true) || bmx.suj.rkp === bmx.os.xwo) && this.imi === false)
    };
    this.pjk = function () {
        return false
    };
    this.blw = function () {
        if (bmx.qsx.imf() && bmx.qsx.pjk()) {
            clearTimeout(bmx.qsx.kzq);
            bmx.qsx.kzq = setTimeout(bmx.qsx.uxn, bmx.vbp.value65)
        }
    };
    this.xwg = function () {
        if (bmx.qsx.imf() && bmx.qsx.kzq >= 0) {
            if (bmx.qsx.pjk()) {
                clearTimeout(bmx.qsx.kzq);
                bmx.qsx.kzq = setTimeout(bmx.qsx.uxn, bmx.vbp.value65)
            } else {
                clearTimeout(bmx.qsx.kzq);
                bmx.qsx.kzq = -1
            }
        }
    };
    this.igi = function () {
        if (bmx.qsx.imf()) {
            clearTimeout(bmx.qsx.kzq);
            bmx.qsx.kzq = -1
        }
    };
    this.zph = function () {
        return false
    };
    this.del = function () {
        return false
    };
    this.vep = function () {
        if (bmx.qsx.zph() && bmx.qsx.del() && bmx.qsx.mjh < 0) {
            clearTimeout(bmx.qsx.mjh);
            bmx.qsx.mjh = setTimeout(bmx.qsx.nva, bmx.qsx.css)
        }
    };
    this.izx = function () {
        if (bmx.qsx.zph() && bmx.qsx.mjh >= 0) {
            if (bmx.qsx.del()) {
                clearTimeout(bmx.qsx.mjh);
                bmx.qsx.mjh = setTimeout(bmx.qsx.nva, bmx.qsx.css)
            } else {
                clearTimeout(bmx.qsx.mjh);
                bmx.qsx.mjh = -1
            }
        }
    };
    this.ure = function () {
        if (bmx.qsx.zph()) {
            clearTimeout(bmx.qsx.mjh);
            bmx.qsx.mjh = -1
        }
    };
    this.nva = function () {};
    this.nih = function () {};
    this.bon = function (f) {
        var e = Number(f.replace(/_*/g, "")),
            d = Number(this.glw.replace(/_*/g, ""));
        if (e > d) {
            this.glw = f
        }
    };
    this.psn = function (g) {
        var e = (g && !this.lmc),
            f = this.dbq.uxx("topb"),
            d = this.dbq.uxx("topi");
        if (d) {
            d.giu(e)
        }
        if (f) {
            f.giu(e);
            f.rsc(e)
        }
    };
    this.eol = function (g) {
        var e = (g && !this.lmc),
            f = this.dbq.uxx("topb"),
            d = this.dbq.uxx("topi");
        if (d) {
            d.giu(e)
        }
        if (f) {
            f.giu(e);
            f.tkx(e)
        }
    };
    this.fvp = function (g) {
        var e = (g && !this.lmc),
            f = this.dbq.uxx("topb"),
            d = this.dbq.uxx("topi");
        if (d) {
            d.giu(e)
        }
        if (f) {
            f.giu(e);
            f.iwj(e)
        }
    };
    this.zdz = function () {
        var d = this.dbq.uxx("topb");
        if (d && !d.bbd()) {
            this.whm.mvq("panel_in");
            this.whm.lry("panel_in");
            d.xfb()
        }
    };
    this.tvt = function (d) {
        var e = this.dbq.uxx("topb");
        if (e && e.bbd()) {
            this.whm.mvq("panel_out");
            this.whm.lry("panel_out");
            if (d) {
                e.mvk = d
            }
            e.hme()
        }
    };
    this.ait = function (f) {
        if (this.wof > 0) {
            return (f * this.wof).toFixed(0).toString()
        } else {
            if (bmx.vbp.value21.e == false || this.lys == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (bmx.vbp.value21.m != 1) {
                    e = f * bmx.vbp.value21.m;
                    var g = bmx.vbp.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = bmx.vbp.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.qlq(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.qzz = function (f) {
        if (this.wof > 0) {
            var e = (f * this.wof).toFixed(0).toString();
            if (bmx.vbp.value21.e == true && bmx.vbp.value21.m == 1 && bmx.vbp.value21.s && this.lys == false) {
                e = bmx.vbp.value21.s + " " + e
            }
            return e
        } else {
            if (bmx.vbp.value21.e == false || this.lys == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (bmx.vbp.value21.m != 1) {
                    e = f * bmx.vbp.value21.m;
                    var g = bmx.vbp.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = bmx.vbp.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.qlq(e, (d == 0) ? 0 : d + 1);
                if (bmx.vbp.value21.s) {
                    e = bmx.vbp.value21.s + " " + e
                }
                return e
            }
        }
    };
    this.qlq = function (l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (bmx.vbp.value21.cs != null) {
                l = l.replace(/\./, bmx.vbp.value21.cs)
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
                    if (bmx.vbp.value21.ts != null) {
                        e += bmx.vbp.value21.ts
                    }
                }
            }
            if (bmx.vbp.value21.cs != null) {
                f = f.replace(/\./, bmx.vbp.value21.cs)
            }
            return e + f
        }
    };
    this.mtb = function (f) {
        if (this.wof > 0) {
            return (f * this.wof).toFixed(0).toString()
        } else {
            if (bmx.vbp.value76.f == false || this.lys == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (bmx.vbp.value76.m != 1) {
                    e = f * bmx.vbp.value76.m;
                    var g = bmx.vbp.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = bmx.vbp.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.tak(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.wvj = function (f) {
        if (this.wof > 0) {
            var e = (f * this.wof).toFixed(0).toString();
            if (bmx.vbp.value76.f == true && bmx.vbp.value76.m == 1 && bmx.vbp.value76.s && this.lys == false) {
                e = bmx.vbp.value76.s + " " + e
            }
            return e
        } else {
            if (bmx.vbp.value76.f == false || this.lys == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (bmx.vbp.value76.m != 1) {
                    e = f * bmx.vbp.value76.m;
                    var g = bmx.vbp.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = bmx.vbp.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.tak(e, (d == 0) ? 0 : d + 1);
                if (bmx.vbp.value76.s) {
                    e = bmx.vbp.value76.s + " " + e
                }
                return e
            }
        }
    };
    this.tak = function (l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (bmx.vbp.value76.cs != null) {
                l = l.replace(/\./, bmx.vbp.value76.cs)
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
                    if (bmx.vbp.value76.ts != null) {
                        e += bmx.vbp.value76.ts
                    }
                }
            }
            if (bmx.vbp.value76.cs != null) {
                f = f.replace(/\./, bmx.vbp.value76.cs)
            }
            return e + f
        }
    };
    this.ewo = function (d) {
        if (d && sessionStorage.sessionValue1 !== bmx.language.GE) {
            return d.toUpperCase()
        }
        return d
    };
    this.tsq = function () {
        for (var e = 0, d = this.tsc.bjf.pnr.length; e < d; e++) {
            this.dbq.jqp(this.tsc.bjf.pnr[e].jqk, this.xsb(this.tsc.bjf.pnr[e], this.tiq.kjy.rlq[this.tsc.bjf.pnr[e].rlq], this.tiq.kjy.display, this.style.kjy.dvx[this.tsc.bjf.pnr[e].rlq], null), ["jackpots"])
        }
        this.dbq.jqp("jwp", this.xsb(null, this.tiq.kjy.fdu.rlq, this.tiq.kjy.fdu, this.style.kjy.fdu, this.whm.wez("jackpot")));
        this.dbq.psl("jwp", "#aco", [false]);
        if (this.bhp()) {
            this.dbq.jqp("mjwp", this.nww(this.tiq.kjy.dhw.rlq, this.tiq.kjy.dhw, this.style.kjy.dhw, this.whm.wez("mj_bg"), this.whm.wez("mj_font"), this.whm.wez("mj_label"), [this.whm.wez("mj_0"), this.whm.wez("mj_1"), this.whm.wez("mj_2"), this.whm.wez("mj_3"), this.whm.wez("mj_4"), this.whm.wez("mj_5")]));
            this.dbq.psl("mjwp", "#aco", [false])
        }
    };
    this.ypk = function () {
        var e = this.dbq.qvh("jackpots"),
            f = this.dbq.uxx("jwp"),
            j = this.dbq.uxx("mjwp");
        for (var g = 0, d = e.length; g < d; g++) {
            e[g].cch(this.tiq.kjy.rlq[this.tsc.bjf.pnr[g].rlq]);
            e[g].ilm(this.tiq.kjy.display)
        }
        if (f) {
            f.cch(this.tiq.kjy.fdu.rlq);
            f.ilm(this.tiq.kjy.fdu)
        }
        if (j) {
            j.cch(this.tiq.kjy.dhw.rlq);
            j.ilm(this.tiq.kjy.dhw)
        }
    };
    this.xsb = function (f, k, j, g, d) {
        var e = new mbr();
        e.jbf(k, null, this.context2D);
        e.parent = this;
        e.ljv = d;
        e.whj(g);
        e.ilm(j);
        if (f) {
            e.lqr(f.bxf);
            e.ahc(f.value)
        }
        return e
    };
    this.nww = function (k, j, g, l, m, f, e) {
        var d = new oio();
        d.jbf(k, null, this.context2D);
        d.parent = this;
        d.jav = l;
        d.ftj = m;
        d.raq = f;
        d.boi = e;
        d.whj(g);
        d.ilm(j);
        return d
    };
    this.ghs = function (f) {
        if (this.mno() === true) {
            for (var e = 0, d = f.length; e < d; e++) {
                this.dbq.psl(f[e].jqk, "#ahc", [f[e].value])
            }
            this.cxx()
        }
    };
    this.pyo = function (d) {
        if (this.mno() === true) {
            this.kjy = {
                jqk: d.jqk,
                value: d.value,
                saw: d.saw
            }
        }
    };
    this.ytb = function () {
        this.kjy = null
    };
    this.njk = function () {
        return false
    };
    this.bhp = function () {
        return false
    };
    this.mno = function () {
        return (!this.imi && this.tsc.bjf.pnr.length > 0 && this.njk())
    };
    this.xiw = function () {
        return (this.kjy != null)
    };
    this.ojf = function () {
        return (bmx.vbp.value86 === true && ((sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") || (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") || (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null")))
    };
    this.wrs = function () {
        if (this.xsi() && this.eox()) {
            this.vdj()
        }
    };
    this.eox = function () {
        return false
    };
    this.xsi = function () {
        if (this.imi) {
            return false
        }
        return (this.tsc.bjf.auu.length + this.tsc.bjf.mic.length > 0)
    };
    this.vdj = function () {
        var g = null,
            e = this.tsc.bjf.auu.length,
            d = this.tsc.bjf.mic.length;
        if (d + e > 0) {
            for (var f = e - 1; f >= 0; f--) {
                g = this.tsc.bjf.auu.splice(f, 1)[0];
                g.xkd = bmx.izb.iyv;
                this.oqj.push(g)
            }
            for (var f = d - 1; f >= 0; f--) {
                g = this.tsc.bjf.mic.splice(f, 1)[0];
                g.xkd = bmx.izb.iyv;
                this.oqj.push(g)
            }
            if (this.cmw && !this.cmw.bbd()) {
                this.jcw()
            }
        }
    };
    this.jcw = function () {
        var d = null;
        if (this.oqj.length > 0) {
            d = this.oqj.shift();
            this.dqn([d])
        }
    };
    this.jhs = function () {
        if (bmx.qsx.riw.length > 0) {
            bmx.qsx.dqn(bmx.qsx.riw)
        }
    };
    this.ykl = function () {
        this.oqj.length = 0
    };
    this.lwi = function () {
        this.riw.length = 0;
        if (this.dws) {
            this.dws.hme()
        }
    };
    this.sxm = function () {
        var f = null,
            d = this.tsc.bjf.riw.length;
        if (d > 0) {
            for (var e = d - 1; e >= 0; e--) {
                f = this.tsc.bjf.riw.splice(e, 1)[0];
                f.xkd = bmx.izb.iyv;
                this.riw.push(f)
            }
            if (this.dws) {
                this.dws.xfb(this.riw[0].Title, this.riw[0].Text, this.riw.length)
            }
        }
    };
    this.yns = function () {
        var d = false;
        if (this.cmw && this.cmw.bbd()) {
            d = true
        }
        if (this.dws && this.dws.bbd()) {
            d = true
        }
        if (this.ojf()) {
            d = true
        }
        if (this.zbh) {
            this.zbh.style.display = (d) ? "block" : "none"
        }
    };
    this.gzy = function () {
        this.psn(false);
        this.mho.rsc(false);
        this.mho.bco.psl("info", "#dfg");
        this.dqn([{
            xkd: bmx.izb.znh
        }])
    };
    this.apd = function () {
        bmx.qsx.xxz = true
    };
    this.eao = function () {
        this.kpp = new zou().jbf(this, bmx.vbp.value6)
    };
    this.uwh = function () {
        if (this.kpp) {
            this.kpp.connect(this.clm, this.uig, this.nma, this.qnv, this.glw, true)
        }
    };
    this.sun = function () {
        if (bmx.qsx.kpp) {
            bmx.qsx.kpp.connect(bmx.qsx.clm, bmx.qsx.uig, bmx.qsx.nma, bmx.qsx.qnv, bmx.qsx.glw, false)
        }
    };
    this.oah = function () {};
    this.ees = function () {};
    this.ajv = function (d) {
        if (!this.fnw() && !this.imi) {
            clearTimeout(this.bku);
            if (this.kxc()) {
                this.bku = setTimeout(this.dql, d)
            } else {
                if (Number(sessionStorage.sessionValue17) > 0) {
                    this.bku = setTimeout(this.apd, Number(sessionStorage.sessionValue17) * 60000)
                }
            }
        }
    };
    this.dql = function () {
        bmx.qsx.mup = true
    };
    this.kxc = function () {
        return bmx.vbp.value36 || bmx.vbp.value37
    }
}

function wmn() {
    this.jbf = function () {
        this.oat("btn", this.feg);
        this.oat("gamble_on", this.feg);
        this.oat("gamble_off", this.feg);
        this.oat("panel_in", this.feg);
        this.oat("panel_out", this.feg);
        this.oat("audioon", this.feg);
        for (var a = 0; a < 12; a++) {
            this.oat("step" + a, this.feg)
        }
        this.oat("maxstep", this.feg);
        this.oat("start", 0.2);
        this.oat("gambleprop", this.ifz);
        this.oat("freespinstart", 0.5)
    }
}
wmn.prototype = new dnb;

function ykv() {
    this.qhe = {
        cpu: 84,
        trt: -1,
        value: "T",
        ggr: null
    };
    this.fla = {
        cpu: 82,
        trt: -1,
        value: "R",
        ggr: null
    };
    this.cfr = {
        cpu: 80,
        trt: -1,
        value: "P",
        ggr: null
    };
    this.bcu = {
        cpu: 77,
        trt: -1,
        value: "M",
        ggr: null
    };
    this.start = {
        cpu: 32,
        trt: -1,
        value: "SPACE",
        ggr: null
    };
    this.lmc = {
        cpu: 16,
        trt: -1,
        value: "SHIFT",
        ggr: null
    };
    this.zcz = {
        cpu: 38,
        trt: -1,
        value: "\u25B2",
        ggr: null
    };
    this.ivg = {
        cpu: 40,
        trt: -1,
        value: "\u25BC",
        ggr: null
    };
    this.hwz = {
        cpu: 39,
        trt: -1,
        value: "\u25B6",
        ggr: null
    };
    this.txa = {
        cpu: 37,
        trt: -1,
        value: "\u25C0",
        ggr: null
    };
    this.ott = {
        cpu: 71,
        trt: -1,
        value: "G",
        ggr: null
    };
    this.blt = {
        cpu: 27,
        trt: -1,
        value: "ESC",
        ggr: null
    };
    this.language = {
        cpu: 76,
        trt: -1,
        value: "L",
        ggr: null
    };
    this.xni = {
        cpu: 13,
        trt: -1,
        value: "ENTER",
        ggr: null
    };
    this.gof = {
        cpu: 27,
        trt: -1,
        value: "ESC",
        ggr: null
    };
    this.wqz = {
        cpu: 39,
        trt: -1,
        value: "\u25B6",
        ggr: null
    };
    this.lbx = {
        cpu: 37,
        trt: -1,
        value: "\u25C0",
        ggr: null
    };
    this.dsz = {
        cpu: 27,
        trt: -1,
        value: "ESC",
        ggr: null
    };
    this.bvn = {
        cpu: 32,
        trt: -1,
        value: "SPACE",
        ggr: null
    };
    this.fuw = {
        cpu: 8,
        trt: -1,
        value: "BACKSPACE",
        ggr: null
    };
    this.qra = {
        cpu: 82,
        trt: -1,
        value: "R",
        ggr: null
    };
    this.vdi = {
        cpu: 66,
        trt: -1,
        value: "B",
        ggr: null
    };
    this.kqk = {
        cpu: 72,
        trt: -1,
        value: "H",
        ggr: null
    };
    this.oso = {
        cpu: 68,
        trt: -1,
        value: "D",
        ggr: null
    };
    this.upz = {
        cpu: 83,
        trt: -1,
        value: "S",
        ggr: null
    };
    this.tjo = {
        cpu: 67,
        trt: -1,
        value: "C",
        ggr: null
    };
    this.rbt.push(this.qhe);
    this.rbt.push(this.cfr);
    this.rbt.push(this.start);
    this.rbt.push(this.lmc);
    this.rbt.push(this.zcz);
    this.rbt.push(this.ivg);
    this.rbt.push(this.hwz);
    this.rbt.push(this.txa);
    this.rbt.push(this.ott);
    this.rbt.push(this.blt);
    this.rbt.push(this.language)
}
ykv.prototype = new iyx;

function wmv() {
    this.lox = new Image();
    this.ozz = 0;
    this.aku = 0;
    this.dpq = 0;
    this.jbf = function (c, a, b, d) {
        this.lox = c;
        this.aku = b;
        this.ozz = a;
        this.dpq = d;
        return this
    }
}

function bpk() {
    this.ndq = 0;
    this.cih = 0;
    this.win = 0;
    this.ojz = "sans-serif";
    this.nio = "bold";
    this.npv = null;
    this.iff = null;
    this.xlr = null;
    this.prw = null;
    this.dpi = 16;
    this.zms = 0;
    this.eke = 0;
    this.hti = 2;
    this.two = 3;
    this.avo = 3;
    this.mom = 3;
    this.etb = 3;
    this.ilm = function (a) {
        try {
            this.dpi = a.fontSize;
            this.zms = a.urs;
            this.eke = a.pmd;
            this.hti = a.lbt;
            this.two = a.pui;
            this.avo = a.tgb;
            this.mom = a.dts;
            this.etb = a.enh
        } catch (b) {
            console.error(b)
        }
    };
    this.whj = function (a) {
        try {
            this.ojz = a.font;
            this.nio = a.cvw;
            this.npv = a.hij;
            this.iff = a.borderColor;
            this.xlr = a.tmq;
            this.prw = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.kcq = function (a, c, b, d) {
        this.ndq = a;
        this.cih = c;
        this.win = b;
        if (d && d === true && this.context2D != null && this.bbd() === true) {
            this.parent.cxx(this.x, this.y, this.width, this.height)
        }
    };
    this.hpb = function (a, b) {
        this.win = a;
        if (b && b === true && this.context2D != null && this.bbd() === true) {
            this.parent.cxx(this.x, this.y, this.width, this.height)
        }
    };
    this.cxx = function () {
        if (!this.bbd()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.xlr) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.iff);
            b.addColorStop(1, this.xlr);
            bmx.suj.hct(a, this.x, this.y, this.width, this.height, this.two, this.avo, this.mom, this.etb, this.prw, 1, b, this.hti, 1)
        } else {
            bmx.suj.hct(a, this.x, this.y, this.width, this.height, this.two, this.avo, this.mom, this.etb, this.prw, 1, this.iff, this.hti, 1)
        }
        bmx.suj.psw(a, bmx.qsx.language.kiu + ":", this.npv, this.x + this.hti + this.zms, this.y + this.eke, 2 * this.width / 3 - this.hti, this.height / 2, this.ojz, this.dpi, this.nio, 0);
        bmx.suj.psw(a, bmx.qsx.language.uie + ":", this.npv, this.x + this.hti + this.zms, this.y + this.height / 2 + this.eke, 2 * this.width / 3 - this.hti, this.height / 2, this.ojz, this.dpi, this.nio, 0);
        bmx.suj.ond(a, this.cih + "/" + this.ndq, this.npv, this.x + this.hti + 2 * this.width / 3, this.y + this.eke, this.width / 3 - this.hti - this.zms, this.height / 2, this.ojz, this.dpi, this.nio, 0);
        bmx.suj.ond(a, this.win, this.npv, this.x + this.hti + 2 * this.width / 3, this.y + this.height / 2 + this.eke, this.width / 3 - this.hti - this.zms, this.height / 2, this.ojz, this.dpi, this.nio, 0);
        a.restore();
        if (this.tvv && this.ciq) {
            this.tvv.drawImage(this.ciq, this.x, this.y)
        }
    }
}
bpk.prototype = new dzq;

function ato() {
    var a = this;
    this.qox = false;
    this.bco = null;
    this.xpa = false;
    this.dkz = -1;
    this.mkj = 0;
    this.hxw = null;
    this.irr = 800;
    this.pgj = 0;
    this.prw = null;
    this.swn = null;
    this.ook = null;
    this.zvo = 0;
    this.klw = null;
    this.atj = null;
    this.ccg = null;
    this.nrl = null;
    this.pal = 0;
    this.yfj = 0;
    this.fhq = new ljp();
    this.daw = new ljp();
    this.vbn = 30;
    this.jbf = function (b, d, c) {
        ato.prototype.jbf.call(this, b, d, c);
        this.lai()
    };
    this.hyf = function (c, b) {
        try {
            this.vbn = c.ndd;
            this.fhq = c.zpm;
            this.daw = c.jka;
            this.zwu(c);
            this.lqg(c);
            this.rsz(c);
            this.mmt(c);
            this.zuk(c);
            this.whj(b, false)
        } catch (d) {
            console.error(d)
        }
    };
    this.ilm = function (g, r) {
        try {
            var d = {},
                c = this.bco.uxx("info"),
                k = this.bco.uxx("win"),
                s = this.bco.uxx("creditd"),
                o = this.bco.uxx("betd"),
                p = this.bco.uxx("betpopup"),
                n = this.bco.uxx("idd"),
                q = this.bco.uxx("timed"),
                b = this.bco.uxx("freeround"),
                m = this.bco.qvh("buttons");
            if (this.parent.vbg() || (this.parent.imi && this.parent.zdw)) {
                if ((this.parent.klc() == null || this.parent.klc().o == false) && this.parent.style.qsx.ipl == true) {
                    d = g.ewd
                } else {
                    d = g.ejg
                }
            } else {
                if (r) {
                    if (this.parent.klc() != null) {
                        d = g.aqw
                    } else {
                        d = g.ocq
                    }
                } else {
                    if (this.parent.klc() != null) {
                        if (!this.parent.plj()) {
                            d = g.mps
                        } else {
                            d = g.fqz
                        }
                    } else {
                        if (bmx.vbp.value57 === bmx.ui.rek || this.ksq()) {
                            if (!this.parent.plj()) {
                                d = g.tzm
                            } else {
                                d = g.qou
                            }
                        } else {
                            if (bmx.vbp.value57 === bmx.ui.iyd) {
                                if (!this.parent.plj()) {
                                    d = g.mex
                                } else {
                                    d = g.rrb
                                }
                            } else {
                                if (bmx.vbp.value57 === bmx.ui.tqa) {
                                    if (!this.parent.plj()) {
                                        d = g.epu
                                    } else {
                                        d = g.xwh
                                    }
                                }
                            }
                        }
                    }
                }
            }
            this.vbn = g.ndd;
            this.fhq = g.zpm;
            this.daw = g.jka;
            if (s) {
                s.ilm(g.display);
                s.cch(g.woj)
            }
            if (o) {
                o.ilm(g.display);
                o.cch(g.mpv)
            }
            if (p) {
                p.ilm(g.jrq);
                p.cch(g.lnt)
            }
            if (n) {
                n.ilm(g.cri);
                n.cch(g.wku)
            }
            if (q) {
                q.ilm(g.cri);
                q.cch(g.lra)
            }
            if (c) {
                c.ilm(g.dvy);
                c.cch(g.dvy.rlq)
            }
            if (k) {
                k.ilm(g.win);
                k.cch(g.win.rlq)
            }
            if (b) {
                b.ilm(g.uhj);
                b.cch(g.uhj.rlq)
            }
            for (var f = 0, j = m.length; f < j; f++) {
                if (m[f] instanceof ilo) {
                    m[f].ilm(g.mni)
                }
            }
            if (this.parent.klc() != null) {
                if (this.parent.vbg() === true) {
                    if (this.parent.klc().o === true || this.parent.style.qsx.ipl == false) {
                        this.bco.psl("start", "#ilm", [g.kcw])
                    } else {
                        this.bco.psl("start", "#ilm", [g.gyf])
                    }
                } else {
                    this.bco.psl("start", "#ilm", [g.gyf]);
                    this.bco.psl("astart", "#ilm", [g.kcw])
                }
            } else {
                this.bco.psl("start", "#ilm", [g.gyf]);
                if (this.parent.vbg() === true) {} else {
                    if (bmx.vbp.value57 === bmx.ui.rek || this.ksq()) {
                        this.bco.psl("astart", "#ilm", [g.gyf])
                    }
                }
            }
            if (r) {
                this.bco.psl("start", "#cch", [d.xoy]);
                this.bco.psl("astart", "#cch", [d.owq]);
                this.bco.psl("setting", "#cch", [d.xoe])
            } else {
                this.bco.psl("start", "#cch", [d.xoy]);
                this.bco.psl("astart", "#cch", [d.owq]);
                this.bco.psl("bet", "#cch", [d.uyi]);
                this.bco.psl("gamble", "#cch", [d.mso]);
                this.bco.psl("exit", "#cch", [d.eqr]);
                this.bco.psl("help", "#cch", [d.eqr]);
                this.bco.psl("lang", "#cch", [d.qyw]);
                this.bco.psl("line", "#cch", [d.emc]);
                this.bco.psl("setting", "#cch", [d.xoe])
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.whj = function (b, r) {
        try {
            var d = this.bco.uxx("info"),
                l = this.bco.uxx("win"),
                p = this.bco.uxx("betpopup"),
                c = this.bco.uxx("freeround"),
                j = this.bco.qvh("displays"),
                o = this.bco.uxx("idd"),
                q = this.bco.uxx("timed"),
                n = this.bco.qvh("buttons"),
                g = (r === true) ? b.nvx : b.rdj;
            this.prw = g.backgroundColor;
            this.swn = g.vsa;
            this.ook = g.mll;
            this.zvo = g.tyz;
            this.atj = g.lxh;
            this.ccg = g.oyt;
            if (d) {
                d.whj(g.dvy)
            }
            if (l) {
                l.whj(g.win)
            }
            if (c) {
                c.whj(b.uhj)
            }
            for (var f = 0, k = n.length; f < k; f++) {
                n[f].whj((this.parent.tiq.zfw === false) ? g.son : (this.parent.usz === bmx.tiq.nzl) ? g.rks : g.rkm)
            }
            for (var f = 0, k = j.length; f < k; f++) {
                j[f].whj(b.display)
            }
            if (p) {
                p.whj(b.jrq)
            }
            if (o) {
                o.whj(b.cri)
            }
            if (q) {
                q.whj(b.cri)
            }
            if (this.parent.vbg() === true) {
                this.bco.psl("bet", "#whj", [b.zpy])
            }
        } catch (m) {
            console.error(m)
        }
    };
    this.nyc = function (t, s, u) {
        var r = this.bco.qvh("buttons"),
            g = this.bco.uxx("line"),
            k = this.bco.uxx("bet"),
            c = this.bco.uxx("start"),
            p = this.bco.uxx("betd"),
            f = this.bco.uxx("creditd"),
            b = this.parent.dbq.uxx("betsel"),
            e = this.parent.dbq.uxx("linesel"),
            o = t - this.x,
            m = s - this.y;
        for (var n = 0, q = r.length; n < q; n++) {
            var d = r[n];
            if (o >= d.x && o <= d.x + d.width && m >= d.y && m <= d.y + d.height && d.bbd() == true) {
                if (d.ozi() && !d.yzr()) {
                    if (!this.parent.vbg() && (d === k || d === g)) {
                        d.aor(true, true, false);
                        for (var l = 0; l < q; l++) {
                            r[l].slz(true, false)
                        }
                        d.liq();
                        this.hxw = function () {
                            if (d.liq() === true) {
                                clearInterval(a.mkj);
                                d.aor(false, true);
                                for (var v = 0; v < q; v++) {
                                    r[v].slz(false)
                                }
                            }
                        };
                        this.mkj = setInterval(this.hxw, d.qjd)
                    } else {
                        if (d === c && c.liq === this.ljg) {
                            d.aor(true, true, false)
                        } else {
                            d.aor(true, true)
                        }
                        d.liq();
                        for (var l = 0; l < q; l++) {
                            r[l].slz(true)
                        }
                    }
                    return true
                }
            }
        }
        if (k && k.ozi() && !k.yzr() && k.bbd()) {
            if (p && o >= p.x && o <= p.x + p.width && m >= p.y && m <= p.y + p.height) {
                if (!u) {
                    if ((b && b.ozi()) && ((e && e.ozi()) || !e)) {
                        this.parent.ffm()
                    }
                    return true
                }
            } else {
                if (f && o >= f.x && o <= f.x + f.width && m >= f.y && m <= f.y + f.height) {
                    if (!u) {
                        this.parent.yyj()
                    }
                    return true
                }
            }
        }
        return false
    };
    this.wga = function () {
        var f = this.bco.qvh("buttons"),
            k = this.bco.uxx("bet"),
            l = this.bco.uxx("line"),
            g = this.bco.uxx("start");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (d.oru() === true) {
                d.aor(false, true);
                if (bmx.vbp.value82 && d == g) {
                    for (var c = 0; c < b; c++) {
                        f[c].slz(false)
                    }
                }
                if (d === k || d === l) {
                    clearInterval(this.mkj);
                    for (var c = 0; c < b; c++) {
                        f[c].slz(false)
                    }
                } else {
                    if (d === g && g.liq === this.ljg) {
                        clearTimeout(this.pgj);
                        if (this.parent.lmc === false) {
                            this.bco.psl("start", "#afv")
                        }
                    }
                }
                return true
            }
        }
        return false
    };
    this.lkm = function (c) {
        var m = this.bco.qvh("buttons"),
            f = this.bco.uxx("bet"),
            e = this.bco.uxx("line"),
            b = this.bco.uxx("start");
        for (var k = 0, l = m.length; k < l; k++) {
            var d = m[k];
            if (c == d.qvl) {
                if (d.ozi() && !d.yzr() && d.bbd()) {
                    if (bmx.vbp.value82 && d == b) {
                        d.aor(true, true, false);
                        for (var g = 0; g < l; g++) {
                            m[g].slz(true, false)
                        }
                    } else {
                        d.aor(true, true);
                        d.liq();
                        for (var g = 0; g < l; g++) {
                            m[g].slz(true)
                        }
                    }
                }
                return true
            }
        }
        if (c == this.parent.unz.ivg.cpu) {
            if (f && f.ozi() && !f.yzr() && f.bbd()) {
                this.parent.mjp();
                for (var g = 0, l = m.length; g < l; g++) {
                    m[g].slz(true)
                }
            }
            return true
        } else {
            if (c == this.parent.unz.txa.cpu) {
                if (e && e.ozi() && !e.yzr() && e.bbd()) {
                    this.parent.wvf();
                    for (var g = 0, l = m.length; g < l; g++) {
                        m[g].slz(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.ccd = function (g) {
        var f = this.bco.qvh("buttons"),
            k = this.bco.uxx("start");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (d.oru() == true && g == d.qvl) {
                if (bmx.vbp.value82 && d == k) {
                    d.liq();
                    for (var c = 0; c < b; c++) {
                        f[c].slz(false)
                    }
                }
                d.aor(false, true);
                return true
            }
        }
        return false
    };
    this.fob = function (n, m, o) {
        var l = this.bco.qvh("buttons"),
            e = this.bco.uxx("bet"),
            d = this.bco.uxx("line"),
            b = this.bco.uxx("start"),
            p = this.bco.uxx("astart");
        if (n != null && m != null) {
            var j = n - this.x;
            var f = m - this.y;
            for (var g = 0, k = l.length; g < k; g++) {
                var c = l[g];
                if (j >= c.x && j <= c.x + c.width && f >= c.y && f <= c.y + c.height && c.bbd() && c.ozi() && !c.yzr()) {
                    return c.liq
                }
            }
        } else {
            if (o != null) {
                for (var g = 0, k = l.length; g < k; g++) {
                    var c = l[g];
                    if (o == c.qvl && c.bbd() && c.ozi() && !c.yzr()) {
                        if (c == b || c == p) {
                            return null
                        }
                        return c.liq
                    }
                }
                if (o == this.parent.unz.ivg.cpu && e && e.bbd() && e.ozi() && !e.yzr()) {
                    return this.parent.mjp
                } else {
                    if (o == this.parent.unz.txa.cpu && d && d.bbd() && d.ozi() && !d.yzr()) {
                        return this.parent.wvf
                    }
                }
            }
        }
        return null
    };
    this.lai = function () {
        this.bco = new klf();
        this.bco.jbf();
        this.bco.pvt("displays");
        this.bco.pvt("buttons");
        this.bco.pvt("allbuttons");
        this.bco.pvt("infos");
        this.bco.pvt("start");
        this.bco.pvt("auto");
        this.bco.pvt("collect");
        this.bco.pvt("freespin");
        this.bco.pvt("game");
        this.bco.pvt("settings")
    };
    this.zuk = function (b) {
        var c = this.xdh(b.dvy.rlq);
        c.ilm(b.dvy);
        this.bco.jqp("info", c, ["infos"])
    };
    this.mmt = function (b) {
        var c = this.xdh(b.win.rlq);
        c.font = this.parent.fya;
        c.ljv = this.parent.whm.wez("s_symb");
        c.gtc = this.parent.whm.wez("s_symb").height / this.parent.sqs.length;
        c.ilm(b.win);
        this.bco.jqp("win", c, ["infos"])
    };
    this.rsz = function (b) {
        var c = new bpk();
        c.jbf(b.uhj.rlq, this.context2D, null);
        c.parent = this;
        c.ilm(b.uhj);
        c.aco(false);
        this.bco.jqp("freeround", c)
    };
    this.lqg = function (c) {
        var b = {};
        if (this.parent.vbg() || (this.parent.imi && this.parent.zdw)) {
            if ((this.parent.klc() == null || this.parent.klc().o == false) && this.parent.style.qsx.ipl == true) {
                b = c.ewd
            } else {
                b = c.ejg
            }
        } else {
            if (this.parent.klc() != null) {
                if (!this.parent.plj()) {
                    b = c.mps
                } else {
                    b = c.fqz
                }
            } else {
                if (bmx.vbp.value57 === bmx.ui.rek || this.ksq()) {
                    if (!this.parent.plj()) {
                        b = c.tzm
                    } else {
                        b = c.qou
                    }
                } else {
                    if (bmx.vbp.value57 === bmx.ui.iyd) {
                        if (!this.parent.plj()) {
                            b = c.mex
                        } else {
                            b = c.rrb
                        }
                    } else {
                        if (bmx.vbp.value57 === bmx.ui.tqa) {
                            if (!this.parent.plj()) {
                                b = c.epu
                            } else {
                                b = c.xwh
                            }
                        }
                    }
                }
            }
        }
        if (this.parent.klc() != null) {
            if (this.parent.vbg() === true) {
                if (this.parent.klc().o == true || this.parent.style.qsx.ipl == false) {
                    this.bco.jqp("start", this.xsn(b.xoy, (this.parent.tiq.yep === false) ? this.parent.language.start : null, (this.parent.tiq.yep === false) ? "---" : "A", (this.parent.tiq.yep === false) ? this.parent.whm.wez("btn") : this.parent.whm.wez("btn_sp"), null, this.ljg, (!this.parent.imi) ? this.parent.unz.start : null, c.kcw), ["buttons", "allbuttons", "start", "collect", "freespin", "game"])
                } else {
                    this.bco.jqp("start", this.nda(b.xoy, (this.parent.tiq.yep === false) ? this.parent.language.start : null, (this.parent.tiq.yep === false) ? this.parent.whm.wez("btn") : this.parent.whm.wez("btn_sp"), (this.parent.tiq.yep === false) ? null : this.parent.whm.wez("btn_sph"), this.parent.qsk, null, c.gyf), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                    this.bco.jqp("astart", this.xsn(b.owq, null, (this.parent.tiq.yep === false) ? "---" : "A", this.parent.whm.wez("btn_astl"), null, this.parent.msp, null, c.mni), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
                }
            } else {
                this.bco.jqp("start", this.nda(b.xoy, (this.parent.tiq.yep === false) ? this.parent.language.start : null, (this.parent.tiq.yep === false) ? this.parent.whm.wez("btn") : this.parent.whm.wez("btn_sp"), null, this.parent.qsk, (!this.parent.imi) ? this.parent.unz.start : null, c.gyf), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                this.bco.jqp("astart", this.xsn(b.owq, this.parent.language.voa, (this.parent.tiq.yep === false) ? "---" : "A", this.parent.whm.wez("btn"), null, this.parent.msp, (!this.parent.imi) ? this.parent.unz.lmc : null, c.kcw), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
            }
        } else {
            if (this.parent.vbg() === true) {
                if (this.parent.style.qsx.ipl) {
                    this.bco.jqp("start", this.nda(b.xoy, (this.parent.tiq.yep === false) ? this.parent.language.start : null, (this.parent.tiq.yep === false) ? this.parent.whm.wez("btn") : this.parent.whm.wez("btn_sp"), (this.parent.tiq.yep === false) ? null : this.parent.whm.wez("btn_sph"), this.parent.qsk, null, c.gyf), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                    this.bco.jqp("astart", this.nda(b.owq, null, this.parent.whm.wez("btn_ast"), null, this.parent.msp, null, c.mni), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
                } else {
                    this.bco.jqp("start", this.nda(b.xoy, (this.parent.tiq.yep === false) ? this.parent.language.start : null, (this.parent.tiq.yep === false) ? this.parent.whm.wez("btn") : this.parent.whm.wez("btn_asp"), (this.parent.tiq.yep === false) ? null : this.parent.whm.wez("btn_asph"), this.ljg, null, c.gyf), ["buttons", "allbuttons", "start", "collect", "freespin", "game"])
                }
            } else {
                this.bco.jqp("start", this.nda(b.xoy, (this.parent.tiq.yep === false) ? this.parent.language.start : null, (this.parent.tiq.yep === false) ? this.parent.whm.wez("btn") : this.parent.whm.wez("btn_asp"), (this.parent.tiq.yep === false) ? null : this.parent.whm.wez("btn_asph"), this.parent.qsk, (!this.parent.imi) ? this.parent.unz.start : null, c.gyf), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                this.bco.jqp("astart", this.nda(b.owq, this.parent.language.lmc, (bmx.vbp.value57 === bmx.ui.rek || this.ksq()) ? this.parent.whm.wez("btn") : this.parent.whm.wez("btn_s"), null, this.parent.msp, (!this.parent.imi) ? this.parent.unz.lmc : null, c.mni), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
            }
        }
        if (this.parent.vbg() === true) {
            this.bco.jqp("bet", this.jpj(b.uyi, "+", null, this.parent.tib, (!this.parent.imi) ? this.parent.unz.zcz : null, c.xti), ["buttons", "allbuttons"])
        } else {
            this.bco.jqp("bet", this.nda(b.uyi, this.parent.language.lpn, this.parent.whm.wez("btn_s"), null, this.parent.tib, (!this.parent.imi) ? this.parent.unz.zcz : null, c.mni), ["buttons", "allbuttons"])
        }
        this.bco.uxx("bet").qjd = 300;
        this.bco.jqp("gamble", this.nda(b.mso, this.parent.language.ott, this.parent.whm.wez("btn_s"), null, this.parent.rry, (!this.parent.imi) ? this.parent.unz.ott : null, c.mni), ["buttons", "allbuttons", "game", "auto", "collect"]);
        if (this.parent.klc() != null) {
            if (sessionStorage.sessionValue5 != null) {
                this.bco.jqp("exit", this.nda(b.eqr, (this.parent.tiq.yep === true) ? null : (bmx.vbp.value50.g === true) ? this.parent.language.zxe : this.parent.language.fyx, (this.parent.tiq.yep === false) ? this.parent.whm.wez("btn_s") : this.parent.whm.wez("btn_e"), null, this.parent.uxn, (!this.parent.imi) ? this.parent.unz.blt : null, c.mni), ["buttons", "allbuttons", "collect"])
            } else {
                if (this.parent.vbg() === false) {
                    this.bco.jqp("help", this.nda(b.eqr, (this.parent.tiq.yep === true) ? null : this.parent.language.fye, this.parent.whm.wez("btn_s"), null, this.parent.hzm, (!this.parent.imi) ? this.parent.unz.cfr : null, c.mni), ["buttons", "allbuttons"])
                }
            }
        } else {
            if (bmx.vbp.value57 !== bmx.ui.tqa) {
                if (sessionStorage.sessionValue5 != null) {
                    this.bco.jqp("exit", this.nda(b.eqr, (this.parent.tiq.yep === true) ? null : (bmx.vbp.value50.g === true) ? this.parent.language.zxe : this.parent.language.fyx, (this.parent.tiq.yep === false) ? this.parent.whm.wez("btn_s") : this.parent.whm.wez("btn_e"), null, this.parent.uxn, (!this.parent.imi) ? this.parent.unz.blt : null, c.mni), ["buttons", "allbuttons", "collect"])
                } else {
                    if (this.parent.vbg() === false) {
                        this.bco.jqp("help", this.nda(b.eqr, (this.parent.tiq.yep === true) ? null : this.parent.language.fye, this.parent.whm.wez("btn_s"), null, this.parent.hzm, (!this.parent.imi) ? this.parent.unz.cfr : null, c.mni), ["buttons", "allbuttons"])
                    }
                }
            }
            if (bmx.vbp.value57 !== bmx.ui.rek && !this.ksq() && this.parent.klc() == null) {
                this.bco.jqp("lang", this.kxi(b.qyw, this.parent.mtc(sessionStorage.sessionValue1), this.parent.yri, (!this.parent.imi) ? this.parent.unz.language : null), ["buttons", "allbuttons"])
            }
        }
        if (this.parent.plj()) {
            this.bco.jqp("line", this.nda(b.emc, this.parent.language.sxk, this.parent.whm.wez("btn_s"), null, this.parent.vsb, (!this.parent.imi) ? this.parent.unz.hwz : null, c.mni), ["buttons", "allbuttons"]);
            this.bco.uxx("line").qjd = 300
        }
        this.bco.jqp("setting", this.nda(b.xoe, null, this.parent.whm.wez("btn_m"), null, this.parent.ubp, null, c.mni), ["buttons", "settings"])
    };
    this.zwu = function (c) {
        var b = null;
        if (!(this.parent.imi && this.parent.zdw) && this.parent.style.qsx.owm === false) {
            b = this.parent.whm.wez("display_effect")
        }
        if (this.parent.vbg() === true) {
            this.bco.jqp("betpopup", this.jik(c.lnt, "", "", null, c.jrq), ["displays"]);
            this.bco.psl("betpopup", "#aco", [false])
        }
        this.bco.jqp("creditd", this.jik(c.woj, (this.parent.fnw()) ? this.parent.language.cii : this.parent.language.saw, this.parent.qzz(this.parent.saw), b, c.display), ["displays"]);
        this.bco.jqp("betd", this.jik(c.mpv, this.parent.language.lpn, this.parent.qzz(this.parent.totalBet), b, c.display), ["displays"]);
        this.bco.jqp("idd", this.jik(c.wku, null, (this.parent.fnw() === true) ? this.parent.language.cii : " " + ((this.parent.sjj > 0) ? this.parent.sjj : ""), null, c.cri), ["displays"]);
        if (sessionStorage.sessionValue15 == "true" || bmx.vbp.value49) {
            this.bco.jqp("timed", this.jik(c.lra, null, "", null, c.cri), ["displays"])
        }
    };
    this.vfp = function () {
        if (this.dkz == 1) {
            this.rsc(this.xpa)
        } else {
            if (this.dkz == 2) {
                this.dfl(this.xpa)
            } else {
                if (this.dkz == 3) {
                    this.ocw(this.xpa)
                } else {
                    if (this.dkz == 4) {
                        this.bhc(this.xpa)
                    } else {
                        if (this.dkz == 5) {
                            this.nfj(this.xpa)
                        } else {
                            if (this.dkz == 6) {
                                this.iwj(this.xpa)
                            } else {
                                if (this.dkz == 7) {
                                    this.oay(this.xpa)
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.rsc = function (d) {
        var c = this.bco.qvh("allbuttons"),
            e = 0,
            b = 0;
        this.xpa = d;
        this.dkz = 1;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].giu(d)
        }
    };
    this.dfl = function (d) {
        var c = this.bco.qvh("allbuttons"),
            f = this.bco.qvh("start"),
            e = 0,
            b = 0;
        this.xpa = d;
        this.dkz = 2;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].giu(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].giu(d)
        }
    };
    this.ocw = function (d) {
        var c = this.bco.qvh("allbuttons"),
            f = this.bco.qvh("game"),
            e = 0,
            b = 0;
        this.xpa = d;
        this.dkz = 3;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].giu(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].giu(d)
        }
    };
    this.bhc = function (d) {
        var c = this.bco.qvh("allbuttons"),
            f = (this.qox === true) ? this.bco.qvh("collect") : this.bco.qvh("game"),
            e = 0,
            b = 0;
        this.xpa = d;
        this.dkz = 4;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].giu(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].giu(d)
        }
    };
    this.oay = function (d) {
        var b = this.bco.qvh("allbuttons"),
            c = this.bco.qvh("auto");
        i = 0, zgh = 0;
        this.xpa = d;
        this.dkz = 7;
        for (i = 0, zgh = b.length; i < zgh; i++) {
            b[i].giu(false)
        }
        for (i = 0, zgh = c.length; i < zgh; i++) {
            c[i].giu(d)
        }
    };
    this.nfj = function (c) {
        var b = this.bco.qvh("allbuttons"),
            d = this.bco.qvh("freespin");
        i = 0, zgh = 0;
        this.xpa = c;
        this.dkz = 5;
        for (i = 0, zgh = b.length; i < zgh; i++) {
            b[i].giu(false)
        }
        for (i = 0, zgh = d.length; i < zgh; i++) {
            d[i].giu(c)
        }
    };
    this.iwj = function (e) {
        var c = this.bco.qvh("allbuttons"),
            d = this.bco.qvh("settings"),
            f = 0,
            b = 0;
        this.xpa = e;
        this.dkz = 6;
        for (f = 0, b = c.length; f < b; f++) {
            c[f].giu(false)
        }
        for (f = 0, b = d.length; f < b; f++) {
            d[f].giu(e)
        }
    };
    this.jik = function (c, g, f, e, b) {
        var d = new jbb();
        d.jbf(c, this.context2D, null, g, f);
        d.parent = this;
        d.ljv = e;
        d.ilm(b);
        return d
    };
    this.nda = function (f, k, j, b, g, d, e) {
        var c = new ilo();
        c.jbf(f, this.context2D, null, j, b, k);
        c.parent = this;
        c.liq = g;
        c.ilm(e);
        if (d) {
            c.qvl = d.cpu
        }
        return c
    };
    this.xsn = function (f, k, g, b, l, c, j, e) {
        var d = new ilo();
        d.jbf(f, this.context2D, null, b, l, k);
        d.parent = this;
        d.liq = c;
        d.value = g;
        d.ilm(e);
        if (j) {
            d.qvl = j.cpu
        }
        return d
    };
    this.jpj = function (e, j, g, f, c, d) {
        var b = new bru();
        b.jbf(e, this.context2D, null, g, j);
        b.parent = this;
        b.liq = f;
        b.ilm(d);
        if (c) {
            b.qvl = c.cpu
        }
        return b
    };
    this.kxi = function (d, f, e, c) {
        var b = new gxc();
        b.jbf(d, this.context2D, null, f, null);
        b.parent = this;
        b.liq = e;
        if (c) {
            b.qvl = c.cpu
        }
        return b
    };
    this.xdh = function (b) {
        var c = new shu();
        c.jbf(b, this.context2D);
        c.parent = this;
        return c
    };
    this.ksq = function () {
        return (this.parent.cnb > 0 && this.parent.bsc < this.parent.cnb)
    };
    this.dtl = function (c, b) {
        var d = this.bco.uxx("info");
        if (d) {
            d.uwr(b);
            d.wbc(c, b)
        }
    };
    this.stop = function () {
        clearInterval(this.mkj)
    };
    this.hud = function (b, c, d) {
        this.nrl = b;
        this.pal = c;
        this.yfj = d
    };
    this.cxx = function (m, j, n, f) {
        if (!this.bbd() || !this.parent.nyy()) {
            return
        }
        var c = (m != null && j != null && n != null && f != null),
            k = (c === true) ? new ljp(m, j, n, f) : new ljp(this.x, this.y, this.width, this.height),
            o = this.context2D,
            b = this.bco.oxo();
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
        if (this.nrl != null) {
            if (this.parent.usz === bmx.tiq.dph) {
                o.drawImage(this.nrl, this.x + this.fhq.x + this.pal, this.y + this.fhq.y + this.yfj, this.fhq.width, this.nrl.height - (this.y + this.fhq.y + this.yfj), this.fhq.x, this.fhq.y, this.fhq.width, this.fhq.height)
            } else {
                o.drawImage(this.nrl, this.x + this.fhq.x + this.pal, this.y + this.fhq.y + this.yfj, this.fhq.width, this.fhq.height, this.fhq.x, this.fhq.y, this.fhq.width, this.fhq.height)
            }
            if (this.daw && this.daw.width > 0 && this.daw.height > 0) {
                o.drawImage(this.nrl, this.x + this.daw.x + this.pal, this.y + this.daw.y + this.yfj, this.daw.width, this.daw.height, this.daw.x, this.daw.y, this.daw.width, this.daw.height)
            }
        }
        if (this.daw && this.daw.width > 0 && this.daw.height > 0 && this.parent.tiq.zfw === false) {
            var l = o.createLinearGradient(this.daw.x, this.daw.y, this.daw.x + this.daw.width, this.daw.y),
                e = this.parent.whm.wez("btn_back");
            l.addColorStop(0.2, this.atj);
            l.addColorStop(1, this.ccg);
            o.fillStyle = l;
            if (this.parent.usz === bmx.tiq.nzl) {
                o.fillRect(this.daw.x, this.daw.y, this.daw.width, this.daw.height);
                if (e) {
                    o.drawImage(e, this.daw.x, this.daw.y, this.daw.width, this.daw.height)
                }
            } else {
                if (this.parent.usz === bmx.tiq.agk) {
                    o.save();
                    o.translate(this.daw.width / 2, this.daw.height / 2);
                    o.rotate(Math.PI);
                    o.translate(-this.daw.width / 2, -this.daw.height / 2);
                    o.fillRect(this.daw.x, this.daw.y, this.daw.width, this.daw.height);
                    if (e) {
                        o.drawImage(e, this.daw.x, this.daw.y, this.daw.width, this.daw.height)
                    }
                    o.restore()
                }
            }
        }
        for (var d = 0, g = b.length; d < g; d++) {
            b[d].cxx()
        }
        if (this.parent.fgg === true && !(this.parent.vbg() === true && this.parent.tiq.zfw === false)) {
            this.parent.anb(o, k)
        }
        o.restore();
        if (this.tvv && this.ciq) {
            if (c) {
                this.tvv.drawImage(this.ciq, m, j, n, f, this.x + m, this.y + j, n, f)
            } else {
                this.tvv.drawImage(this.ciq, this.x, this.y)
            }
        }
    };
    this.ljg = function () {
        if (a.parent.lmc === true) {
            a.hhp()
        } else {
            a.parent.qsk();
            if (a.parent.phz() === true) {
                a.bco.psl("start", "#hvf", [a.irr]);
                a.pgj = setTimeout(a.hhp, a.irr)
            }
        }
    };
    this.hhp = function () {
        a.parent.msp();
        if (a.parent.lmc === true) {
            a.bco.psl("start", "#kgy")
        } else {
            a.bco.psl("start", "#afv")
        }
    }
}
ato.prototype = new dzq;

function uxq(e, b, a, c, d) {
    this.rlq = {
        x: e.x || 0,
        y: e.y || 0
    };
    this.lox = b;
    this.sbn = 0;
    this.dpq = 21;
    this.pis = a;
    this.jts = c || 0;
    this.byq = d || 0;
    this.ple = 100;
    this.cyy = 96;
    this.hdq = function () {
        if (this.sbn < this.dpq) {
            this.sbn++
        }
        return (this.sbn >= this.dpq)
    };
    this.cxx = function () {
        a.drawImage(this.lox, this.sbn * this.ple, 0, this.ple, this.cyy, this.rlq.x, this.rlq.y, this.jts, this.byq)
    }
}

function zyh() {
    this.xyx = false;
    this.ryo = false;
    this.yiq = false;
    this.zvb = [];
    this.oyw = [];
    this.wxm = [];
    this.whv = [];
    this.fgh = [];
    this.jth = 89;
    this.yeq = 400;
    this.agp = 3;
    this.font = "arial";
    this.cvw = "bold";
    this.ygp = true;
    this.aaa = true;
    this.btv = null;
    this.uco = false;
    this.lil = [];
    this.kuc = 0;
    this.czl = false;
    this.lyo = false;
    this.dwh = 0;
    this.zdn = 0;
    this.pqe = false;
    this.wos = true;
    this.jww = false;
    this.rxf = false;
    this.vup = 0;
    this.hfj = 0;
    this.oow = [];
    this.spw = false;
    this.jml = 0;
    this.gka = 0;
    this.ewy = 0;
    this.gok = -1;
    this.ayq = 0;
    this.pka = 0;
    this.ifr = true;
    this.dqr = null;
    this.ywt = [];
    this.jhp = [];
    this.zdc = null;
    this.hru = null;
    this.ceq = 0;
    this.toy = null;
    this.jyr = null;
    this.iej = null;
    this.lid = null;
    this.kal = 0.05;
    this.nyg = 4;
    this.vka = 5;
    this.hti = 1;
    this.cmd = 0;
    this.hlg = 0;
    this.dpi = 40;
    this.ety = 12;
    this.npj = 5;
    this.zhu = 0;
    this.yfw = 100;
    this.zrl = 96;
    this.nrl = null;
    this.pal = 0;
    this.yfj = 0;
    this.dol = 0;
    this.epw = new ljp();
    this.qta = [];
    this.cgs = 3;
    this.lho = 6;
    this.zmk = 0;
    this.fox = new ljp(0, 0, 920, 160);
    this.inp = [0, 515, 405];
    this.naz = 40;
    this.xay = new ljp(0, 165, 920, 160);
    this.qit = [0, 330, 420];
    this.bod = 40;
    this.ufy = new ljp(0, 330, 920, 160);
    this.zmb = [0, 440, 415];
    this.rnd = 20;
    this.pxr = function () {};
    this.vgt = function () {};
    this.ozt = function () {};
    this.rno = function () {};
    this.iip = function () {};
    this.fzg = function () {};
    this.ilm = function (a) {
        try {
            this.nyg = a.lineWidth;
            this.vka = a.lyw;
            this.hti = a.lbt;
            this.cmd = a.hrb;
            this.hlg = a.gtc;
            this.dpi = a.fontSize;
            this.ety = a.bmv;
            this.npj = a.jgf;
            this.yfw = a.cok;
            this.zrl = a.nom
        } catch (b) {
            console.error(b)
        }
    };
    this.whj = function (a) {
        try {
            this.jhp = a.wow;
            this.ceq = a.ecm;
            this.toy = a.nny;
            this.jyr = a.jcx;
            this.iej = a.ffk;
            this.lid = a.gfh;
            this.kal = a.gja
        } catch (b) {
            console.error(b)
        }
    };
    this.xfb = function () {
        this.yiq = false;
        this.aco(true)
    };
    this.hme = function () {
        this.yiq = false;
        this.aco(false, true)
    };
    this.nxh = function () {
        return this.uco
    };
    this.dzd = function (d, b) {
        if (d && b) {
            this.lil = b;
            this.dqr = [];
            for (var c = 0, a = d.length; c < a; c++) {
                this.dqr[c] = d[c]
            }
            if (this.aaa) {
                this.parent.whm.mvq("winline");
                this.parent.whm.lry("winline")
            }
        } else {
            this.dqr = null
        }
        this.uco = false;
        this.jww = false;
        this.rxf = false;
        this.yiq = true;
        this.aco(true, true)
    };
    this.start = function () {
        this.uco = true;
        this.jww = true;
        this.rxf = false;
        if (!this.czl) {
            this.jml = 0
        } else {
            if (this.jml >= this.ewy) {
                this.jml = 0
            }
        }
        this.wos = true;
        this.parent.dkh = false;
        this.lyo = (this.parent.rmv >= (this.parent.grh - 1));
        if (this.czl && this.aaa) {
            if (!this.parent.fzb && this.parent.kgc) {
                this.parent.whm.mvq("winline");
                this.parent.whm.lry("winline")
            }
        }
        this.pxr()
    };
    this.stop = function () {
        this.uco = false;
        this.jww = false;
        this.iic();
        clearInterval(this.dwh);
        clearTimeout(this.zdn);
        clearTimeout(this.parent.ira)
    };
    this.hyc = function (d, c, a, f, j, e, b, g) {
        if (this.yiq) {
            this.yiq = false;
            this.parent.cxx()
        }
        this.gok = f;
        this.kuc = d;
        this.lil = c;
        this.pka = j;
        this.ayq = e;
        this.ifr = a;
        this.czl = g;
        if (b) {
            this.oap()
        } else {
            this.sui()
        }
    };
    this.oap = function () {
        this.tqx();
        this.start()
    };
    this.sui = function () {
        this.uco = true;
        this.jww = true;
        this.wos = false;
        this.rxf = this.ygp;
        this.iic();
        if (!this.parent.fzb && this.aaa) {
            this.parent.whm.mvq("winline");
            this.parent.whm.lry("winline")
        }
        this.cxx();
        this.ozt()
    };
    this.jgo = function () {
        if (this.spw) {
            this.vup++;
            if (this.vup == 6 || this.vup == 10 || this.vup == 15 || (this.parent.fby == 2 && (this.vup == 48 || this.vup == 55 || this.vup == 64))) {
                this.aws()
            }
            for (var a = this.oow.length - 1; a >= 0; a--) {
                if (this.oow[a].hdq()) {
                    this.oow.shift()
                }
            }
        }
        if (this.ygp) {
            if (this.czl) {
                this.rxf = true
            } else {
                if ((this.jml % 3) == 0) {
                    this.rxf = !this.rxf
                }
            }
        }
        if (((!this.czl || this.lyo) && this.jml < this.ewy)) {
            this.parent.cxx();
            this.jml++;
            if (this.czl) {
                this.gka++
            }
        } else {
            if (this.czl && !this.lyo && this.gka < this.agp) {
                this.parent.cxx();
                this.gka++;
                this.jml = (this.jml < this.ewy) ? this.jml + 1 : 0
            } else {
                this.gka = 0;
                clearInterval(this.dwh);
                this.ohl()
            }
        }
    };
    this.ohl = function () {
        this.uco = false;
        this.jww = (this.xyx && this.wos);
        if (this.jww == true && this.lyo == true && this.parent.fzb == false && this.parent.lmc == true) {
            this.jww = false
        }
        if (!this.czl || this.lyo) {
            if (!(this.ryo && this.xyx) && !this.spw) {
                this.hme()
            }
        }
        this.parent.cxx();
        this.parent.inn();
        this.parent.tfu();
        this.parent.cek()
    };
    this.tqx = function () {
        this.ewy = 0;
        for (var a = 0; a < this.lil.length; a++) {
            for (var b = 0; b < this.lil[a].length; b++) {
                if (this.lil[a][b] >= 0) {
                    if (this.zvb[this.lil[a][b]].dpq > this.ewy) {
                        this.ewy = this.zvb[this.lil[a][b]].dpq
                    }
                }
            }
        }
    };
    this.pkb = function () {
        if (this.bbd()) {
            this.oow = [];
            this.spw = true;
            this.vup = 0
        }
    };
    this.pik = function () {
        this.vup = 0
    };
    this.iic = function () {
        this.spw = false
    };
    this.aws = function () {
        var e = (Math.random() > 0.7) ? 4 : 3,
            d = this.yfw * e,
            g = this.zrl * e,
            a = Math.random();
        while (Math.abs(a - this.hfj) < 0.3) {
            a = Math.random()
        }
        this.hfj = a;
        var f = Math.round(a * (this.width - d));
        a = Math.random();
        var c = Math.round(a * (this.height - g));
        var b = new uxq({
            x: f,
            y: c
        }, this.parent.whm.wez("firework"), this.context2D, d, g);
        this.oow.push(b)
    };
    this.whr = function (b) {
        this.pqe = true;
        this.jml = 0;
        this.dol = b;
        if (this.dol >= this.parent.ets) {
            this.epw = this.fox;
            for (var c = 0, a = this.inp.length; c < a; c++) {
                this.qta[c] = this.inp[c]
            }
            this.parent.whm.lry("megawin");
            this.parent.nti(48);
            this.ewy = this.naz
        } else {
            if (this.dol >= this.parent.qqk) {
                this.epw = this.xay;
                for (var c = 0, a = this.qit.length; c < a; c++) {
                    this.qta[c] = this.qit[c]
                }
                this.parent.whm.lry("bigwin");
                this.parent.nti(48);
                this.ewy = this.bod
            } else {
                if (this.dol >= this.parent.luz) {
                    this.epw = this.ufy;
                    for (var c = 0, a = this.zmb.length; c < a; c++) {
                        this.qta[c] = this.zmb[c]
                    }
                    this.parent.whm.lry("nicewin");
                    this.parent.nti(24);
                    this.ewy = this.rnd
                }
            }
        }
        this.ewy += (this.qta.length - 1) * this.lho;
        this.zmk = 0;
        this.parent.qmh(true);
        this.iip()
    };
    this.ywp = function () {
        this.pqe = false;
        clearInterval(this.dwh);
        if (this.dol >= this.parent.ets) {
            this.parent.whm.mvq("megawin")
        } else {
            if (this.dol >= this.parent.qqk) {
                this.parent.whm.mvq("bigwin")
            } else {
                if (this.dol >= this.parent.luz) {
                    this.parent.whm.mvq("nicewin")
                }
            }
        }
        this.hme();
        this.parent.qmh(false);
        this.parent.nxb()
    };
    this.hud = function (a, b, c) {
        this.nrl = a;
        this.pal = b;
        this.yfj = c
    };
    this.cxx = function () {
        if (!this.bbd() || !this.parent.nyy()) {
            return
        }
        var d = this.context2D;
        d.save();
        d.clearRect(0, 0, this.width, this.height);
        d.lineWidth = this.nyg;
        d.lineCap = "round";
        d.lineJoin = "round";
        if (this.yiq) {
            this.syj()
        }
        if (this.jww) {
            if (this.uco && this.xyx && this.ifr) {
                for (var b = 0; b < this.lil.length; b++) {
                    for (var f = 0; f < this.lil[b].length; f++) {
                        if (this.lil[b][f] != -1) {
                            if (this.wos) {
                                this.sxs(b, f)
                            } else {
                                this.ing(b, f)
                            }
                        }
                    }
                }
                if (this.ifr) {
                    this.wwn(this.kuc)
                }
                for (var c = this.pka; c < this.pka + this.ayq; c++) {
                    if (this.gok >= 0 && (this.lil[c][this.fgh[this.kuc][c] - 1] == this.gok || this.parent.azf(this.lil[c][this.fgh[this.kuc][c] - 1]))) {
                        if (this.wos) {
                            this.sxs(c, this.fgh[this.kuc][c] - 1)
                        } else {
                            this.ing(c, this.fgh[this.kuc][c] - 1)
                        }
                    }
                }
            } else {
                if (this.uco && this.ifr) {
                    this.wwn(this.kuc)
                }
                for (var b = 0; b < this.lil.length; b++) {
                    for (var f = 0; f < this.lil[b].length; f++) {
                        if (this.lil[b][f] != -1) {
                            if (this.wos) {
                                this.sxs(b, f)
                            } else {
                                this.ing(b, f)
                            }
                        }
                    }
                }
            }
            if (this.btv) {
                for (var b = 0; b < this.lil.length; b++) {
                    for (var f = 0; f < this.lil[b].length; f++) {
                        if (this.lil[b][f] != -1) {
                            d.drawImage(this.btv, 0, f * this.hlg, this.btv.width, this.hlg, this.wxm[b][f].x, this.wxm[b][f].y, this.cmd, this.hlg)
                        }
                    }
                }
            }
            if (this.uco) {
                if (this.kuc < 0) {
                    if (this.jhp[this.jhp.length - 2]) {
                        for (var b = 0; b < this.lil.length; b++) {
                            for (var f = 0; f < this.lil[b].length; f++) {
                                if (this.parent.zei >= 0 && this.lil[b][f] == this.parent.zei) {
                                    this.jbt(b, f, this.jhp[this.jhp.length - 2])
                                }
                            }
                        }
                    }
                } else {
                    for (var c = this.pka; c < this.pka + this.ayq; c++) {
                        if (this.gok >= 0 && (this.lil[c][this.fgh[this.kuc][c] - 1] == this.gok || this.parent.azf(this.lil[c][this.fgh[this.kuc][c] - 1]))) {
                            this.jbt(c, this.fgh[this.kuc][c] - 1, this.jhp[this.kuc])
                        }
                    }
                }
            }
            if (this.spw) {
                for (var e = 0, a = this.oow.length; e < a; e++) {
                    this.oow[e].cxx()
                }
            }
        } else {
            if (this.pqe) {
                this.gkv()
            }
        }
        d.restore();
        if (this.parent.pcd()) {
            if (this.tvv && this.ciq) {
                this.tvv.drawImage(this.ciq, this.x, this.y)
            }
        }
    };
    this.gkv = function () {
        var l = this.context2D,
            f = this.parent.whm.wez("wins"),
            b = (this.height / 2 - this.epw.height) / 2,
            g = this.qta[0],
            a = this.jml % this.lho,
            k = (a < this.cgs) ? Math.floor(this.qta[this.zmk + 1] / this.cgs) * a : this.qta[this.zmk + 1],
            j = (a < this.cgs) ? Math.floor(this.epw.height / this.cgs) * a : this.epw.height,
            c = 1,
            e = 5;
        l.save();
        if (this.jml >= this.ewy - e) {
            c = (this.ewy - this.jml) * (1 / e)
        }
        l.globalAlpha = c;
        for (var d = 0; d <= this.zmk && d < this.qta.length - 1; d++) {
            if (d == this.qta.length - 2) {
                b += this.height / 2
            }
            if (d == this.zmk) {
                l.drawImage(f, g, this.epw.y, this.qta[d + 1], this.epw.height, ((this.width - this.qta[d + 1]) / 2 + (this.qta[d + 1] - k) / 2), (b + (this.epw.height - j) / 2), k, j)
            } else {
                l.drawImage(f, g, this.epw.y, this.qta[d + 1], this.epw.height, (this.width - this.qta[d + 1]) / 2, b, this.qta[d + 1], this.epw.height)
            }
            g += this.qta[d + 1]
        }
        l.restore()
    };
    this.syj = function () {
        if (this.dqr) {
            this.ywt = [];
            for (var b = 0; b < this.lil.length; b++) {
                for (var d = 0; d < this.lil[b].length; d++) {
                    if (this.lil[b][d] != -1) {
                        this.ing(b, d);
                        if (this.btv) {
                            this.context2D.drawImage(this.btv, 0, d * this.hlg, this.btv.width, this.hlg, this.wxm[b][d].x, this.wxm[b][d].y, this.cmd, this.hlg)
                        }
                    }
                }
            }
            for (var c = 0, a = this.dqr.length; c < a; c++) {
                this.tvq(this.dqr[c])
            }
        } else {
            for (var c = 0; c < this.parent.sxk; c++) {
                this.wwn(c)
            }
        }
    };
    this.wwn = function (c) {
        var a = this.context2D;
        a.save();
        a.strokeStyle = (this.rxf) ? this.jhp[c].yzi : this.jhp[c].xud;
        a.lineWidth = this.nyg;
        a.beginPath();
        for (var b = 0; b < this.whv[c].length; b++) {
            if (b == 0) {
                a.moveTo(this.whv[c][b].x, this.whv[c][b].y)
            } else {
                a.lineTo(this.whv[c][b].x, this.whv[c][b].y)
            }
        }
        a.moveTo(this.whv[c][0].x, this.whv[c][0].y);
        a.stroke();
        a.strokeStyle = (this.rxf) ? this.jhp[c].ptt : this.jhp[c].nxv;
        a.lineWidth = this.nyg - 2 * this.hti;
        a.stroke();
        a.restore()
    };
    this.tvq = function (d) {
        var a = this.context2D,
            c = null;
        a.save();
        for (var b = 1; b < this.whv[d].length; b++) {
            c = this.whv[d][b - 1].x + "_" + this.whv[d][b - 1].y + "_" + this.whv[d][b].x + "_" + this.whv[d][b].y;
            if (this.ywt.indexOf(c) < 0) {
                this.ywt.push(c);
                a.beginPath();
                a.moveTo(this.whv[d][b - 1].x, this.whv[d][b - 1].y);
                a.lineTo(this.whv[d][b].x, this.whv[d][b].y);
                a.moveTo(this.whv[d][b - 1].x, this.whv[d][b - 1].y);
                a.strokeStyle = (this.rxf) ? this.jhp[this.jhp.length - 1].yzi : this.jhp[this.jhp.length - 1].xud;
                a.lineWidth = this.nyg;
                a.stroke();
                a.strokeStyle = (this.rxf) ? this.jhp[this.jhp.length - 1].ptt : this.jhp[this.jhp.length - 1].nxv;
                a.lineWidth = this.nyg - 2 * this.hti;
                a.stroke()
            }
        }
        a.restore()
    };
    this.sxs = function (a, c) {
        var b = this.context2D;
        b.save();
        if (this.nrl != null) {
            this.context2D.drawImage(this.nrl, this.wxm[a][c].x + this.pal, this.wxm[a][c].y + this.yfj, this.cmd, this.hlg, this.wxm[a][c].x, this.wxm[a][c].y, this.cmd, this.hlg)
        }
        if (this.zvb[this.lil[a][c]].dpq <= this.jml) {
            b.drawImage(this.zvb[this.lil[a][c]].lox, (this.zvb[this.lil[a][c]].dpq - 1) * this.zvb[this.lil[a][c]].ozz, 0, this.zvb[this.lil[a][c]].ozz, this.zvb[this.lil[a][c]].aku, this.wxm[a][c].x + (this.cmd - this.zvb[this.lil[a][c]].ozz) / 2, this.wxm[a][c].y + (this.hlg - this.zvb[this.lil[a][c]].aku) / 2, this.zvb[this.lil[a][c]].ozz, this.zvb[this.lil[a][c]].aku)
        } else {
            b.drawImage(this.zvb[this.lil[a][c]].lox, this.jml * this.zvb[this.lil[a][c]].ozz, 0, this.zvb[this.lil[a][c]].ozz, this.zvb[this.lil[a][c]].aku, this.wxm[a][c].x + (this.cmd - this.zvb[this.lil[a][c]].ozz) / 2, this.wxm[a][c].y + (this.hlg - this.zvb[this.lil[a][c]].aku) / 2, this.zvb[this.lil[a][c]].ozz, this.zvb[this.lil[a][c]].aku)
        }
        b.restore()
    };
    this.ing = function (a, c) {
        var b = this.context2D;
        b.save();
        if (this.nrl != null) {
            this.context2D.drawImage(this.nrl, this.wxm[a][c].x + this.pal, this.wxm[a][c].y + this.yfj, this.cmd, this.hlg, this.wxm[a][c].x, this.wxm[a][c].y, this.cmd, this.hlg)
        }
        b.drawImage(this.oyw[this.lil[a][c]], this.wxm[a][c].x + (this.cmd - this.oyw[this.lil[a][c]].width) / 2, this.wxm[a][c].y + (this.hlg - this.oyw[this.lil[a][c]].height) / 2);
        b.restore()
    };
    this.jbt = function (a, d, c) {
        var b = this.context2D;
        b.save();
        if (c) {
            b.lineWidth = this.vka;
            b.strokeStyle = (this.rxf) ? c.yzi : c.xud;
            b.strokeRect(this.wxm[a][d].x + this.vka / 2, this.wxm[a][d].y + this.vka / 2, this.cmd - this.vka, this.hlg - this.vka);
            b.strokeStyle = (this.rxf) ? c.ptt : c.nxv;
            b.lineWidth = this.vka - 2 * this.hti;
            b.strokeRect(this.wxm[a][d].x + this.vka / 2, this.wxm[a][d].y + this.vka / 2, this.cmd - this.vka, this.hlg - this.vka)
        }
        b.restore()
    }
}
zyh.prototype = new dzq;

function ozd() {
    var a = this;
    this.pxr = function () {
        this.vgt();
        this.dwh = setInterval(a.vgt, a.jth)
    };
    this.vgt = function () {
        a.jgo()
    };
    this.ozt = function () {
        this.zdn = setTimeout(a.rno, a.yeq)
    };
    this.rno = function () {
        a.ohl()
    };
    this.iip = function () {
        this.dwh = setInterval(this.fzg, 60)
    };
    this.fzg = function () {
        if (a.jml < a.ewy) {
            a.jml++;
            if ((a.jml % (a.lho)) == 0) {
                a.zmk++
            }
            a.parent.cxx()
        } else {
            a.ywp()
        }
    }
}
ozd.prototype = new zyh;

function syi() {
    var a = this;
    this.pzu = 0;
    this.tqi = 1;
    this.nsn = 7;
    this.smq = 0;
    this.xzc = 0;
    this.fql = 0;
    this.flg = 0;
    this.kzt = this.pzu;
    this.kzg = this.ktr;
    this.bya = function () {
        this.aco(true);
        this.ara = true;
        this.xpa = false;
        this.kzt = this.pzu;
        this.xzc = Math.floor(this.width / this.nsn);
        this.flg = 0;
        this.fql = 0
    };
    this.rja = function () {
        this.ara = true;
        this.xpa = false;
        this.kzt = this.tqi;
        this.xzc = -Math.floor(this.width / this.nsn);
        this.flg = 1;
        this.fql = this.width
    };
    this.rbd = function () {
        if (a.flg < a.nsn) {
            a.fql += a.xzc;
            a.flg++;
            return true
        } else {
            a.ara = false;
            a.xpa = true;
            if (a.kzt == a.tqi) {
                a.aco(false)
            }
            return false
        }
    };
    this.lry = function () {
        if (this.pmz == this.pxt) {
            this.parent.whm.lry("maxstep")
        } else {
            this.parent.whm.lry("step" + (this.pmz % 12))
        }
    };
    this.vjs = function (b, d) {
        var c = false;
        this.pmz = b;
        if (this.pmz < this.dgj) {
            c = true;
            this.pmz = this.dgj
        }
        if (this.pmz >= this.pxt) {
            c = true;
            this.pmz = this.pxt
        }
        this.fui = this.pmz + 1;
        if (c) {
            this.liq(this.pmz)
        }
        if (d && d === true) {
            this.parent.cxx()
        }
    };
    this.pmr = function () {
        a.cez = false
    };
    this.cxx = function () {
        if (!this.bbd() || !this.parent.nyy()) {
            return
        }
        this.cyh();
        if (this.tvv && this.ciq) {
            if (this.ara) {
                if (this.fql > 0) {
                    if (this.kzg === this.quq) {
                        this.tvv.drawImage(this.ciq, this.width - this.fql, 0, this.fql, this.height, this.x, this.y, this.fql, this.height)
                    } else {
                        if (this.kzg === this.ktr) {
                            this.tvv.drawImage(this.ciq, 0, 0, this.fql, this.height, this.x + this.width - this.fql, this.y, this.fql, this.height)
                        }
                    }
                }
            } else {
                this.tvv.drawImage(this.ciq, this.x, this.y)
            }
        }
    };
    this.tjz = function (c) {
        var f = this.npv,
            e = this.npv,
            b = 0,
            d = 0;
        if (this.kzg === this.ktr) {
            b = this.zms;
            d = this.hcn.x - 2 * this.zms
        } else {
            if (this.kzg === this.quq) {
                b = this.hcn.x + this.hcn.width + this.zms;
                d = this.width - this.zms - (this.hcn.x + this.hcn.width + this.zms)
            }
        }
        if (this.pmz > 0 && this.pmz < this.axo.length - 1) {
            bmx.suj.jbt(c, b, this.hcn.y + ((this.fiq - this.fui) * this.mkf), d, this.mkf, this.azr, this.qhy);
            bmx.suj.ond(c, this.parent.ait(this.axo[this.pmz]), this.hru, b, this.hcn.y + ((this.fiq - this.fui) * this.mkf) + (this.mkf - this.dpi) / 2, d, this.dpi, this.ojz, this.dpi, this.nio, this.zms)
        } else {
            if (this.pmz == 0) {
                f = this.hru
            } else {
                if (this.pmz == this.axo.length - 1) {
                    e = this.hru
                }
            }
        }
        bmx.suj.jbt(c, b, this.hcn.y + (this.mkf * (this.fiq - 1)), d, this.mkf, this.azr, this.qhy);
        bmx.suj.ond(c, this.parent.ait(this.axo[0]), f, b, this.hcn.y + (this.mkf * (this.fiq - 1)) + (this.mkf - this.dpi) / 2, d, this.dpi, this.ojz, this.dpi, this.nio, this.zms);
        bmx.suj.jbt(c, b, this.hcn.y, d, this.mkf, this.azr, this.qhy);
        bmx.suj.ond(c, this.parent.ait(this.axo[this.axo.length - 1]), e, b, this.hcn.y + (this.mkf - this.dpi) / 2, d, this.dpi, this.ojz, this.dpi, this.nio, this.zms);
        bmx.suj.ibm(c, "+", this.npv, this.sqi.x, this.sqi.y, this.sqi.width, this.sqi.height, this.ojz, this.dpi, this.nio);
        bmx.suj.ibm(c, "", this.npv, this.riq.x, this.riq.y, this.riq.width, this.riq.height, this.ojz, this.dpi, this.nio);
        if (this.bxf) {
            bmx.suj.ibm(c, this.bxf, this.npv, this.amh.x, this.amh.y, this.amh.width, this.amh.height, this.ojz, this.dpi, this.nio)
        }
    }
}
syi.prototype = new eaw;

function yjy() {
    var a = this;
    this.pzu = 0;
    this.tqi = 1;
    this.nsn = 7;
    this.smq = 0;
    this.xzc = 0;
    this.fql = 0;
    this.flg = 0;
    this.kzt = this.pzu;
    this.bya = function () {
        this.aco(true);
        this.ara = true;
        this.xpa = false;
        this.kzt = this.pzu;
        this.xzc = Math.floor(this.width / this.nsn);
        this.flg = 0;
        this.fql = 0
    };
    this.rja = function () {
        this.ara = true;
        this.xpa = false;
        this.kzt = this.tqi;
        this.xzc = -Math.floor(this.width / this.nsn);
        this.flg = 1;
        this.fql = this.width
    };
    this.rbd = function () {
        if (a.flg < a.nsn) {
            a.fql += a.xzc;
            a.flg++;
            return true
        } else {
            a.ara = false;
            a.xpa = true;
            if (a.kzt == a.tqi) {
                a.aco(false)
            }
            return false
        }
    };
    this.lry = function () {
        if (this.pmz == this.pxt) {
            this.parent.whm.lry("maxstep")
        } else {
            this.parent.whm.lry("step" + (this.pmz % 12))
        }
    };
    this.pmr = function () {
        a.cez = false
    };
    this.cxx = function () {
        if (!this.bbd() || !this.parent.nyy()) {
            return
        }
        this.cyh();
        if (this.tvv && this.ciq) {
            if (this.ara) {
                if (this.fql > 0) {
                    if (this.kzg === this.quq) {
                        this.tvv.drawImage(this.ciq, this.width - this.fql, 0, this.fql, this.height, this.x, this.y, this.fql, this.height)
                    } else {
                        if (this.kzg === this.ktr) {
                            this.tvv.drawImage(this.ciq, 0, 0, this.fql, this.height, this.x + this.width - this.fql, this.y, this.fql, this.height)
                        }
                    }
                }
            } else {
                this.tvv.drawImage(this.ciq, this.x, this.y)
            }
        }
    };
    this.tjz = function (c) {
        var f = this.npv,
            e = this.npv,
            b = 0,
            d = 0;
        if (this.kzg === this.ktr) {
            b = this.zms;
            d = this.hcn.x - 2 * this.zms
        } else {
            if (this.kzg === this.quq) {
                b = this.hcn.x + this.hcn.width + this.zms;
                d = this.width - this.zms - (this.hcn.x + this.hcn.width + this.zms)
            }
        }
        if (this.pmz > 0 && this.pmz < this.axo.length - 1) {
            bmx.suj.jbt(c, b, this.hcn.y + ((this.fiq - this.fui) * this.mkf), d, this.mkf, this.azr, this.qhy);
            bmx.suj.psw(c, this.axo[this.pmz], this.hru, b, this.hcn.y + ((this.fiq - this.fui) * this.mkf) + (this.mkf - this.dpi) / 2, d, this.dpi, this.ojz, this.dpi, this.nio, this.zms)
        } else {
            if (this.pmz == 0) {
                f = this.hru
            } else {
                if (this.pmz == this.axo.length - 1) {
                    e = this.hru
                }
            }
        }
        bmx.suj.jbt(c, b, this.hcn.y + (this.mkf * (this.fiq - 1)), d, this.mkf, this.azr, this.qhy);
        bmx.suj.psw(c, this.axo[0], f, b, this.hcn.y + (this.mkf * (this.fiq - 1)) + (this.mkf - this.dpi) / 2, d, this.dpi, this.ojz, this.dpi, this.nio, this.zms);
        bmx.suj.jbt(c, b, this.hcn.y, d, this.mkf, this.azr, this.qhy);
        bmx.suj.psw(c, this.axo[this.axo.length - 1], e, b, this.hcn.y + (this.mkf - this.dpi) / 2, d, this.dpi, this.ojz, this.dpi, this.nio, this.zms);
        bmx.suj.ibm(c, "+", this.npv, this.sqi.x, this.sqi.y, this.sqi.width, this.sqi.height, this.ojz, this.dpi, this.nio);
        bmx.suj.ibm(c, "", this.npv, this.riq.x, this.riq.y, this.riq.width, this.riq.height, this.ojz, this.dpi, this.nio);
        if (this.bxf) {
            bmx.suj.ibm(c, this.bxf, this.npv, this.amh.x, this.amh.y, this.amh.width, this.amh.height, this.ojz, this.dpi, this.nio)
        }
    }
}
yjy.prototype = new eaw;

function trc() {
    this.ljv = new Image();
    this.xde = [];
    this.aoq = 0;
    this.skt = 0;
    this.biq = [];
    this.tvx = 0;
    this.kxq = 0;
    this.ijn = 0;
    this.fwn = [];
    this.nrl = null;
    this.pal = 0;
    this.yfj = 0;
    this.ilm = function (a) {
        try {
            this.fwn = a.emc;
            this.kxq = a.ple;
            this.ijn = a.cyy
        } catch (b) {
            console.error(b)
        }
    };
    this.nyc = function (b, f, c) {
        var e = this.parent.mho.bco.uxx("line"),
            a = this.parent.dbq.uxx("betsel"),
            d = this.parent.dbq.uxx("linesel");
        if (b >= this.x && b <= this.x + this.width && f >= this.y && f <= this.y + this.height && this.bbd() === true) {
            if (e && e.ozi() && !e.yzr()) {
                if (!c) {
                    this.parent.whm.mvq("panel");
                    this.parent.whm.lry("panel");
                    if ((a && a.ozi()) && ((d && d.ozi()) || !d)) {
                        this.parent.ffm()
                    }
                    return true
                }
            }
        }
        return false
    };
    this.cxx = function () {
        if (!this.bbd() || !this.parent.nyy()) {
            return
        }
        var c = this.context2D,
            e = false;
        if (this.nrl != null) {
            c.drawImage(this.nrl, this.x + this.pal, this.y + this.yfj, this.width, this.height, this.x, this.y, this.width, this.height)
        }
        if (this.biq.length > 0) {
            for (var f = this.aoq - 1, d = 0; f <= this.skt - 1; f++, d++) {
                e = false;
                for (var b = 0, a = this.biq.length; b < a; b++) {
                    if (this.xde[f] === this.biq[b]) {
                        e = true;
                        c.drawImage(this.ljv, 0, this.ljv.height / 2 + (this.xde[f] - 1) * this.ijn, this.kxq, this.ijn, this.x, this.y + this.fwn[d], this.kxq, this.ijn)
                    }
                }
                if (e === false) {
                    c.drawImage(this.ljv, 0, (this.xde[f] - 1) * this.ijn, this.kxq, this.ijn, this.x, this.y + this.fwn[d], this.kxq, this.ijn)
                }
            }
        } else {
            for (var f = this.aoq - 1, d = 0; f <= this.skt - 1; f++, d++) {
                if (this.xde[f] <= this.tvx) {
                    c.drawImage(this.ljv, 0, this.ljv.height / 2 + (this.xde[f] - 1) * this.ijn, this.kxq, this.ijn, this.x, this.y + this.fwn[d], this.kxq, this.ijn)
                } else {
                    c.drawImage(this.ljv, 0, (this.xde[f] - 1) * this.ijn, this.kxq, this.ijn, this.x, this.y + this.fwn[d], this.kxq, this.ijn)
                }
            }
        }
    };
    this.grk = function (a, b) {
        this.tvx = a;
        if (b && b === true) {
            this.cxx()
        }
    };
    this.pjn = function (b, d) {
        this.biq = [];
        if (b) {
            for (var c = 0, a = b.length; c < a; c++) {
                this.biq[c] = b[c]
            }
        }
        if (d && d === true) {
            this.cxx()
        }
    };
    this.tpx = function (a) {
        this.ljv = a;
        this.width = this.kxq;
        this.height = this.fwn[this.fwn.length - 1] + this.ijn;
        this.cch(new ljp(this.x, this.y, this.width, this.height))
    };
    this.hud = function (a, b, c) {
        this.nrl = a;
        this.pal = b;
        this.yfj = c
    }
}
trc.prototype = new dzq;

function xyo(g, c, f, e, j, a, d, b) {
    this.ecy = g;
    this.qjf = f;
    this.mip = e;
    this.jke = j;
    this.clm = c;
    this.glw = a;
    this.kdq = d;
    this.gir = b;
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
    this.ami = [];
    this.bow = [];
    this.wsj = [];
    this.bmc = [];
    this.tvf = [];
    this.gon = [];
    this.ndr = 5;
    this.yot = [];
    this.mbb = [];
    this.jut = [];
    this.awt = [];
    this.gai = [];
    this.pgx = [];
    this.ong = [];
    this.pxq = [];
    this.vxx = [];
    this.ppz = [];
    this.ozw = [];
    this.eri = [];
    this.vpl = [];
    this.zpv = [];
    this.ime = [];
    this.rlc = [];
    this.vps = [];
    this.vtn = [];
    this.tro = [];
    this.goy = [];
    this.sjj = 0;
    this.saw = 0;
    this.win = 0;
    this.wfh = 0;
    this.frd = 0;
    this.nsj = 0;
    this.sxk = 0;
    this.egf = 0;
    this.bth = 0;
    this.qds = 0;
    this.ocp = 1;
    this.jeq = 1;
    this.vbr = 0;
    this.zks = 0;
    this.jst = 0;
    this.oxg = 0;
    this.dqw = 0;
    this.zzr = 1;
    this.bcd = 1;
    this.xlb = 0;
    this.bsc = 0;
    this.cnb = 0;
    this.ady = 0;
    this.yek = "";
    this.eee = "";
    this.pda = "";
    this.vdh = "";
    this.wof = 0;
    this.roo = function (k) {
        return this.lpj(k)
    };
    this.hkl = function (o) {
        if (o != null) {
            this.vhq = 0;
            this.hwa = this.nyu(o);
            if (this.hwa == 0) {
                this.rl = this.nyu(o);
                this.r1 = this.roo(o);
                this.r2 = this.roo(o);
                this.r3 = this.roo(o);
                if (this.rl >= 4) {
                    this.r4 = this.roo(o)
                }
                if (this.rl >= 5) {
                    this.r5 = this.roo(o)
                }
                if (this.rl >= 6) {
                    this.r6 = this.roo(o)
                }
                if (this.rl >= 7) {
                    this.r7 = this.roo(o)
                }
                if (this.rl >= 8) {
                    this.r8 = this.roo(o)
                }
                if (this.rl >= 9) {
                    this.r9 = this.roo(o)
                }
                if (this.rl >= 10) {
                    this.ami = this.roo(o)
                }
                if (this.rl >= 11) {
                    this.bow = this.roo(o)
                }
                if (this.rl >= 12) {
                    this.wsj = this.roo(o)
                }
                if (this.rl >= 13) {
                    this.bmc = this.roo(o)
                }
                if (this.rl >= 14) {
                    this.tvf = this.roo(o)
                }
                if (this.rl >= 15) {
                    this.gon = this.roo(o)
                }
                this.ndr = this.nyu(o);
                if (this.ndr > 0) {
                    this.yot = this.roo(o);
                    this.mbb = this.roo(o);
                    this.jut = this.roo(o);
                    if (this.ndr >= 4) {
                        this.awt = this.roo(o)
                    }
                    if (this.ndr >= 5) {
                        this.gai = this.roo(o)
                    }
                    if (this.ndr >= 6) {
                        this.pgx = this.roo(o)
                    }
                    if (this.ndr >= 7) {
                        this.ong = this.roo(o)
                    }
                    if (this.ndr >= 8) {
                        this.pxq = this.roo(o)
                    }
                    if (this.ndr >= 9) {
                        this.vxx = this.roo(o)
                    }
                    if (this.ndr >= 10) {
                        this.ppz = this.roo(o)
                    }
                    if (this.ndr >= 11) {
                        this.ozw = this.roo(o)
                    }
                    if (this.ndr >= 12) {
                        this.eri = this.roo(o)
                    }
                    if (this.ndr >= 13) {
                        this.vpl = this.roo(o)
                    }
                    if (this.ndr >= 14) {
                        this.zpv = this.roo(o)
                    }
                    if (this.ndr >= 15) {
                        this.ime = this.roo(o)
                    }
                }
                this.wqg = this.kyi(o);
                this.izb = this.nyu(o);
                for (var l = 0, k = (this.rl < 5) ? 5 : this.rl; l < k; l++) {
                    this.rlc[l] = this.ylf(o)
                }
                this.sjj = this.ylf(o);
                this.saw = this.ylf(o);
                this.win = this.ylf(o);
                this.nsj = this.kyi(o);
                this.wfh = this.ylf(o);
                this.frd = this.ylf(o);
                this.sxk = this.kyi(o);
                this.egf = this.ylf(o);
                this.bth = this.ylf(o);
                this.qds = this.ylf(o);
                this.ocp = this.ylf(o);
                this.jeq = this.ylf(o);
                this.vbr = this.ylf(o);
                this.zks = this.ylf(o);
                this.jst = this.kyi(o);
                this.oxg = this.kyi(o);
                this.dqw = this.kyi(o);
                this.zzr = this.ylf(o);
                this.bcd = this.kyi(o);
                
              
                
                for (var l = 0, k = (this.ndr < 5) ? 5 : this.ndr; l < k; l++) {
                    this.vps[l] = this.ylf(o)
                }
                for (var l = 0; l < 8; l++) {
                    this.vtn[l] = this.kyi(o)
                }
                var p = this.kyi(o);
                for (var l = 0; l < p; l++) {
                    this.tro[l] = this.ylf(o)
                }
                var n = this.kyi(o);
                for (var l = 0; l < n; l++) {
                    this.goy[l] = this.ylf(o)
                }
                this.aae(o);
                if (this.wqg == 0) {
                    this.ckk("A/u250")
                } else {
                    this.tsc.oti()
                }
            } else {
                if (this.hwa == 1) {
                    this.wqg = this.kyi(o);
                    this.izb = this.nyu(o);
                    this.sjj = this.ylf(o);
                    this.saw = this.ylf(o);
                    this.win = this.ylf(o);
                    for (var l = 0, k = (this.rl < 5) ? 5 : this.rl; l < k; l++) {
                        this.rlc[l] = this.ylf(o)
                    }
                    this.nsj = this.kyi(o);
                    this.sxk = this.kyi(o);
                    this.egf = this.ylf(o);
                    this.bth = this.ylf(o);
                    this.qds = this.ylf(o);
                    this.ocp = this.ylf(o);
                    this.jeq = this.ylf(o);
                    this.vbr = this.ylf(o);
                    for (var l = 0, k = (this.ndr < 5) ? 5 : this.ndr; l < k; l++) {
                        this.vps[l] = this.ylf(o)
                    }
                    var n = this.kyi(o);
                    for (var l = 0; l < n; l++) {
                        this.goy[l] = this.ylf(o)
                    }
                    for (var l = 0; l < 8; l++) {
                        this.vtn[l] = this.kyi(o)
                    }
                    this.aae(o);
                    if (this.izb == 0) {
                        if (this.wqg == bmx.ccf.enw.fep) {
                            this.tsc.oti()
                        } else {
                            if (this.wqg == bmx.ccf.enw.zbl) {
                                this.tsc.luh()
                            } else {
                                if (this.wqg == bmx.ccf.enw.yfh) {
                                    this.tsc.blv()
                                } else {
                                    if (this.wqg == bmx.ccf.enw.nbv) {
                                        this.tsc.bca()
                                    } else {
                                        if (this.wqg == bmx.ccf.enw.jjx) {
                                            this.tsc.gaf()
                                        } else {
                                            if (this.wqg == bmx.ccf.enw.zyb) {
                                                this.tsc.rdq()
                                            } else {
                                                if (this.wqg == bmx.ccf.enw.rbq) {
                                                    this.tsc.csh()
                                                } else {
                                                    if (this.wqg == bmx.ccf.enw.qho) {
                                                        this.tsc.owt()
                                                    } else {
                                                        if (this.wqg == bmx.ccf.enw.ghy) {
                                                            this.tsc.zon()
                                                        } else {
                                                            if (this.wqg == bmx.ccf.enw.ael) {
                                                                this.tsc.yxd()
                                                            } else {
                                                                if (this.wqg == bmx.ccf.enw.hna) {
                                                                    this.tsc.dml()
                                                                } else {
                                                                    if (this.wqg == bmx.ccf.enw.led) {
                                                                        this.tsc.nji()
                                                                    } else {
                                                                        if (this.wqg == bmx.ccf.enw.ams) {
                                                                            this.tsc.mtm()
                                                                        } else {
                                                                            this.lqk()
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
                        this.tsc.cqp(this.izb)
                    }
                } else {
                    if (this.hwa == 2) {} else {
                        if (this.hwa == 3) {
                            this.saw = this.ylf(o);
                            this.tsc.sza()
                        } else {
                            if (this.hwa === 6 || this.hwa === 7) {
                                this.jxh(o.substring(this.vhq))
                            } else {
                                if (this.hwa === 8) {
                                    this.ckk("8")
                                } else {
                                    if (this.hwa == 9) {
                                        this.tsc.qjn.vsc = o.substring(this.vhq)
                                    } else {
                                        if (this.hwa == 10) {
                                            var m = JSON.parse(o.substring(this.vhq)).Message;
                                            for (var l = 0, k = m.length; l < k; l++) {
                                                if (m[l].DisplayType == bmx.byw.upy.rez) {
                                                    this.mic.push(m[l])
                                                }
                                            }
                                            if (this.mic.length > 0) {
                                                this.tsc.wrs()
                                            }
                                        } else {
                                            this.ebu = this.nyu(o);
                                            this.tsc.fhy(o.substring(2))
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
    this.aae = function (t) {
        var l = null,
            n = [],
            q = null,
            v = null,
            o = null,
            m = null,
            p = null,
            k = null;
        if (this.hwa == 0) {
            l = this.nan(t);
            if (l != "") {
                n = l.split("#");
                if (n.length >= 1) {
                    q = n[0].split("|");
                    this.eee = q[0];
                    if (q.length > 1) {
                        this.pda = q[1];
                        if (q.length > 2) {
                            this.vdh = q[2]
                        }
                    }
                    if (n.length >= 2) {
                        v = n[1].split("|");
                        if (v.length >= 1) {
                            m = v[0];
                            this.vhq = 0;
                            this.xlb = this.kyi(m);
                            this.bsc = this.ylf(m);
                            this.cnb = this.ylf(m);
                            this.ady = this.ylf(m);
                            this.yek = this.nan(m);
                            if (v.length >= 2) {
                                k = v[1];
                                if (k) {
                                    this.wof = parseFloat(k)
                                }
                            }
                        }
                    }
                }
            }
            if (bmx.vbp.value21.e === true && bmx.vbp.value21.s) {
                if (this.wof == 0) {
                    this.eee = ""
                } else {
                    if (this.wof != 0 && bmx.vbp.value21.m == 1) {
                        this.eee = ""
                    }
                }
            }
        } else {
            l = this.nan(t);
            if (l != "") {
                n = l.split("#");
                if (n.length > 1) {
                    m = n[1];
                    o = n[1].split("|{");
                    m = o[0];
                    if (m) {
                        this.vhq = 0;
                        this.bsc = this.ylf(m);
                        this.cnb = this.ylf(m);
                        this.ady = this.ylf(m)
                    }
                    if (o.length > 1) {
                        p = "{" + o[1];
                        var r = JSON.parse(p).Message;
                        this.auu.length = 0;
                        this.riw.length = 0;
                        for (var s = 0, u = r.length; s < u; s++) {
                            if (r[s].DisplayType == bmx.byw.upy.rfr) {
                                this.riw.push(r[s])
                            } else {
                                if (r[s].DisplayType == bmx.byw.upy.rez) {
                                    this.auu.push(r[s])
                                }
                            }
                        }
                    }
                    if (this.riw.length > 0) {
                        this.tsc.sxm()
                    }
                }
            }
        }
    };
    this.lqk = function () {};
    this.play = function (l, k, m) {
        this.ckk("A/u251," + l + "," + k + "," + m)
    };
    this.rrl = function () {
        this.ckk("A/u254")
    };
    this.ikx = function () {
        this.ckk("A/u258")
    };
    this.ott = function (k) {
        this.ckk("A/u257," + k)
    };
    this.rpm = function (l, k, m) {
        this.ckk("A/u256," + l + "," + k + "," + m)
    }
}
xyo.prototype = new shx;

function wer() {
    this.jbf = function (a, b) {
        this.ecy = b;
        this.qjn = a;
        return this
    };
    this.connect = function (c, f, e, g, a, d, b) {
        this.qjf = f;
        this.mip = e;
        this.jke = g;
        this.clm = c;
        this.kdq = d;
        this.gir = b;
        this.bjf = new xyo(this.ecy, c, f, e, g, a, d, b);
        this.bjf.jbf(this)
    };
    this.play = function (b, a, c) {
        this.bjf.play(b, a, c)
    };
    this.rpm = function (b, a, c) {
        this.bjf.rpm(b, a, c)
    };
    this.rrl = function () {
        this.bjf.rrl()
    };
    this.ikx = function () {
        this.bjf.ikx()
    };
    this.ott = function (a) {
        this.bjf.ott(a)
    };
    this.oti = function () {
        var c = this.bjf.wqg;
        this.qjn.r1 = this.bjf.r1;
        this.qjn.r2 = this.bjf.r2;
        this.qjn.r3 = this.bjf.r3;
        this.qjn.r4 = this.bjf.r4;
        this.qjn.r5 = this.bjf.r5;
        this.qjn.r6 = this.bjf.r6;
        this.qjn.r7 = this.bjf.r7;
        this.qjn.r8 = this.bjf.r8;
        this.qjn.r9 = this.bjf.r9;
        this.qjn.ami = this.bjf.ami;
        this.qjn.bow = this.bjf.bow;
        this.qjn.wsj = this.bjf.wsj;
        this.qjn.bmc = this.bjf.bmc;
        this.qjn.tvf = this.bjf.tvf;
        this.qjn.gon = this.bjf.gon;
        if (c == bmx.ccf.enw.jjx || c == bmx.ccf.enw.zyb || c == bmx.ccf.enw.rbq || c == bmx.ccf.enw.qho || c == bmx.ccf.enw.ghy) {
            this.qjn.r1 = this.bjf.yot;
            this.qjn.r2 = this.bjf.mbb;
            this.qjn.r3 = this.bjf.jut;
            this.qjn.r4 = this.bjf.awt;
            this.qjn.r5 = this.bjf.gai;
            this.qjn.r6 = this.bjf.pgx;
            this.qjn.r7 = this.bjf.ong;
            this.qjn.r8 = this.bjf.pxq;
            this.qjn.r9 = this.bjf.vxx;
            this.qjn.ami = this.bjf.ppz;
            this.qjn.bow = this.bjf.ozw;
            this.qjn.wsj = this.bjf.eri;
            this.qjn.bmc = this.bjf.vpl;
            this.qjn.tvf = this.bjf.zpv;
            this.qjn.gon = this.bjf.ime
        }
        this.qjn.hmu = this.bjf.rlc;
        this.qjn.saw = this.bjf.saw;
        this.qjn.wfh = this.bjf.wfh;
        this.qjn.frd = this.bjf.frd;
        this.qjn.oxg = this.bjf.oxg;
        this.qjn.dqw = this.bjf.dqw;
        if (this.yrb()) {
            for (var b = 0, a = this.bjf.tro.length; b < a && this.bjf.tro[b] <= this.bjf.frd; b++) {
                this.qjn.tro[b] = this.bjf.tro[b]
            }
        } else {
            for (var b = 0, a = this.bjf.tro.length; b < a && this.bjf.tro[b] * this.bjf.jst <= this.bjf.frd; b++) {
                this.qjn.tro[b] = this.bjf.tro[b]
            }
        }
        if (c == bmx.ccf.enw.fep || ((c == bmx.ccf.enw.zbl || c == bmx.ccf.enw.hna) && this.bjf.win == 0) || c == bmx.ccf.enw.yfh || c == bmx.ccf.enw.ael || c == bmx.ccf.enw.ghy) {
            this.qjn.lfm = true
        } else {
            this.qjn.lfm = false
        }
        this.qjn.sxk = this.bjf.sxk;
        this.qjn.hgw = this.bjf.nsj;
        this.qjn.cqx = this.qjn.tro[this.qjn.hgw];
        this.qjn.win = this.bjf.win;
        for (var b = 0; b < this.bjf.goy.length; b++) {
            this.qjn.jnf[b] = this.bjf.goy[b]
        }
        this.qjn.mgi = this.bjf.vps;
        this.qjn.qds = this.bjf.qds;
        this.qjn.vbr = this.bjf.vbr;
        this.qjn.bth = this.bjf.bth;
        this.qjn.egf = this.bjf.egf;
        this.qjn.nby = this.bjf.egf;
        this.qjn.ocp = this.bjf.ocp;
        this.sly();
        this.qjn.kva();
        this.qjn.zgb(c, this.bjf.vtn, this.bjf.sjj)
    };
    this.luh = function () {
        this.qjn.afm({
            type: "roundStarted",
            sender: this.qjn.clm,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                balanceBefore: this.qjn.ait(this.qjn.saw)
            }
        });
        this.qjn.state = this.bjf.wqg;
        this.qjn.hmu = this.bjf.rlc;
        this.qjn.saw = this.bjf.saw;
        this.qjn.sxk = this.bjf.sxk;
        this.qjn.hgw = this.bjf.nsj;
        this.qjn.win = this.bjf.win;
        for (var a = 0; a < this.bjf.goy.length; a++) {
            this.qjn.jnf[a] = this.bjf.goy[a]
        }
        if (this.qjn.zwp && this.qjn.win > 0) {
            this.qjn.zwp.bco.psl("history", "#ldf", [this.bjf.vtn])
        }
        this.qjn.bnw = false;
        this.sly();
        this.qjn.muo();
        this.qjn.pjh(this.bjf.sjj)
    };
    this.blv = function () {
        this.qjn.state = this.bjf.wqg;
        this.qjn.saw = this.bjf.saw;
        this.fmd = false;
        this.sly();
        this.qjn.oac();
        this.qjn.pjh(this.bjf.sjj)
    };
    this.yxd = function () {
        this.qjn.afm({
            type: "roundStarted",
            sender: this.qjn.clm,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                balanceBefore: this.qjn.ait(this.qjn.saw)
            }
        });
        this.qjn.state = this.bjf.wqg;
        this.qjn.hmu = this.bjf.rlc;
        this.qjn.saw = this.bjf.saw;
        this.qjn.sxk = this.bjf.sxk;
        this.qjn.hgw = this.bjf.nsj;
        this.qjn.win = this.bjf.win;
        for (var a = 0; a < this.bjf.goy.length; a++) {
            this.qjn.jnf[a] = this.bjf.goy[a]
        }
        this.qjn.bnw = false;
        if (this.qjn.zwp && this.qjn.win > 0) {
            this.qjn.zwp.ldf(this.bjf.vtn[0], this.bjf.vtn, true)
        }
        this.sly();
        this.qjn.oao();
        this.qjn.pjh(this.bjf.sjj)
    };
    this.dml = function () {
        this.qjn.state = this.bjf.wqg;
        this.qjn.saw = this.bjf.saw;
        this.qjn.win = this.bjf.win;
        if (this.qjn.zwp) {
            this.qjn.zwp.ldf(this.bjf.vtn[0], this.bjf.vtn, false)
        }
        this.qjn.sbj();
        this.qjn.pjh(this.bjf.sjj)
    };
    this.nji = function () {
        this.qjn.state = this.bjf.wqg;
        this.qjn.saw = this.bjf.saw;
        this.qjn.win = this.bjf.win;
        this.qjn.sfa();
        this.qjn.pjh(this.bjf.sjj)
    };
    this.bca = function () {
        this.qjn.afm({
            type: "roundStarted",
            sender: this.qjn.clm,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                balanceBefore: this.qjn.ait(this.qjn.saw)
            }
        });
        this.qjn.state = this.bjf.wqg;
        this.qjn.hmu = this.bjf.rlc;
        this.qjn.saw = this.bjf.saw;
        this.qjn.sxk = this.bjf.sxk;
        this.qjn.hgw = this.bjf.nsj;
        this.qjn.win = this.bjf.win;
        for (var a = 0; a < this.bjf.goy.length; a++) {
            this.qjn.jnf[a] = this.bjf.goy[a]
        }
        this.qjn.bnw = (this.bjf.egf > this.qjn.egf);
        this.qjn.qds = this.bjf.qds;
        this.qjn.vbr = this.bjf.vbr;
        this.qjn.bth = this.bjf.bth;
        this.qjn.egf = this.bjf.egf;
        this.qjn.nby = this.bjf.egf;
        this.qjn.ocp = this.bjf.ocp;
        this.sly();
        this.qjn.inv();
        this.qjn.pjh(this.bjf.sjj)
    };
    this.gaf = function () {
        this.qjn.state = this.bjf.wqg;
        this.qjn.mgi = this.bjf.vps;
        this.qjn.hmu = this.bjf.rlc;
        this.qjn.saw = this.bjf.saw;
        this.qjn.sxk = this.bjf.sxk;
        this.qjn.hgw = this.bjf.nsj;
        this.qjn.win = this.bjf.win;
        for (var a = 0; a < this.bjf.goy.length; a++) {
            this.qjn.jnf[a] = this.bjf.goy[a]
        }
        this.qjn.bnw = (this.bjf.egf > this.qjn.egf);
        this.qjn.qds = this.bjf.qds;
        this.qjn.vbr = this.bjf.vbr;
        this.qjn.bth = this.bjf.bth;
        this.qjn.egf = this.bjf.egf;
        this.qjn.nby = this.bjf.egf;
        this.qjn.ocp = this.bjf.ocp;
        this.sly();
        this.qjn.get();
        this.qjn.pjh(this.bjf.sjj)
    };
    this.rdq = function () {
        this.qjn.state = this.bjf.wqg;
        this.qjn.mgi = this.bjf.vps;
        this.qjn.hmu = this.bjf.rlc;
        this.qjn.saw = this.bjf.saw;
        this.qjn.sxk = this.bjf.sxk;
        this.qjn.hgw = this.bjf.nsj;
        this.qjn.win = this.bjf.win;
        for (var a = 0; a < this.bjf.goy.length; a++) {
            this.qjn.jnf[a] = this.bjf.goy[a]
        }
        this.qjn.bnw = (this.bjf.egf > this.qjn.egf);
        this.qjn.nby = this.qjn.egf;
        this.qjn.qds = this.bjf.qds;
        this.qjn.vbr = this.bjf.vbr;
        this.qjn.bth = this.bjf.bth;
        this.qjn.egf = this.bjf.egf;
        this.qjn.ocp = this.bjf.ocp;
        this.sly();
        this.qjn.lxy();
        this.qjn.pjh(this.bjf.sjj)
    };
    this.csh = function () {
        this.qjn.state = this.bjf.wqg;
        this.qjn.mgi = this.bjf.vps;
        this.qjn.hmu = this.bjf.rlc;
        this.qjn.saw = this.bjf.saw;
        this.qjn.sxk = this.bjf.sxk;
        this.qjn.hgw = this.bjf.nsj;
        this.qjn.win = this.bjf.win;
        for (var a = 0; a < this.bjf.goy.length; a++) {
            this.qjn.jnf[a] = this.bjf.goy[a]
        }
        this.qjn.bnw = (this.bjf.egf > this.qjn.egf);
        this.qjn.nby = this.qjn.egf;
        this.qjn.qds = this.bjf.qds;
        this.qjn.vbr = this.bjf.vbr;
        this.qjn.bth = this.bjf.bth;
        this.qjn.egf = this.bjf.egf;
        this.qjn.ocp = this.bjf.ocp;
        this.sly();
        this.qjn.vkr();
        this.qjn.pjh(this.bjf.sjj)
    };
    this.owt = function () {
        this.qjn.state = this.bjf.wqg;
        this.qjn.mgi = this.bjf.vps;
        this.qjn.hmu = this.bjf.rlc;
        this.qjn.saw = this.bjf.saw;
        this.qjn.sxk = this.bjf.sxk;
        this.qjn.hgw = this.bjf.nsj;
        this.qjn.win = this.bjf.win;
        for (var a = 0; a < this.bjf.goy.length; a++) {
            this.qjn.jnf[a] = this.bjf.goy[a]
        }
        if (this.qjn.zwp && this.qjn.win > 0) {
            this.qjn.zwp.bco.psl("history", "#ldf", [this.bjf.vtn])
        }
        this.qjn.bnw = (this.bjf.egf > this.qjn.egf);
        this.qjn.qds = this.bjf.qds;
        this.qjn.vbr = this.bjf.vbr;
        this.qjn.bth = this.bjf.bth;
        this.qjn.egf = this.bjf.egf;
        this.qjn.nby = this.bjf.egf;
        this.qjn.ocp = this.bjf.ocp;
        this.sly();
        this.qjn.jar();
        this.qjn.pjh(this.bjf.sjj)
    };
    this.zon = function () {
        this.qjn.state = this.bjf.wqg;
        this.qjn.mgi = this.bjf.vps;
        this.qjn.hmu = this.bjf.rlc;
        this.qjn.saw = this.bjf.saw;
        this.qjn.sxk = this.bjf.sxk;
        this.qjn.hgw = this.bjf.nsj;
        this.qjn.win = this.bjf.win;
        for (var a = 0; a < this.bjf.goy.length; a++) {
            this.qjn.jnf[a] = this.bjf.goy[a]
        }
        this.qjn.bnw = (this.bjf.egf > this.qjn.egf);
        this.qjn.qds = this.bjf.qds;
        this.qjn.vbr = this.bjf.vbr;
        this.qjn.bth = this.bjf.bth;
        this.qjn.egf = this.bjf.egf;
        this.qjn.nby = this.bjf.egf;
        this.qjn.ocp = this.bjf.ocp;
        this.sly();
        this.qjn.kav();
        this.qjn.pjh(this.bjf.sjj)
    };
    this.sly = function () {
        this.qjn.eee = this.bjf.eee;
        this.qjn.pda = this.bjf.pda;
        this.qjn.vdh = this.bjf.vdh;
        this.qjn.bsc = this.bjf.bsc;
        this.qjn.cnb = this.bjf.cnb;
        this.qjn.ady = this.bjf.ady;
        this.qjn.yek = this.bjf.yek;
        if (this.qjn.cnb > 0 && this.qjn.bsc < this.qjn.cnb) {
            this.qjn.hgw = this.bjf.xlb
        }
        this.qjn.wof = this.bjf.wof
    };
    this.yrb = function () {
        return false
    }
}
wer.prototype = new bwz;

function ntq() {
    var a = this;
    this.mzv = false;
    this.zpx = -1;
    this.uxu = 0;
    this.nhk = null;
    this.nqt = 3;
    this.naj = 0;
    this.wjy = null;
    this.tai = null;
    this.bct = false;
    this.pxe = false;
    this.vhk = false;
    this.gih = [];
    this.mdk = null;
    this.fkh = false;
    this.vbc = [];
    this.xpa = false;
    this.ook = null;
    this.kgn = null;
    this.mkf = 0;
    this.fiq = 0;
    this._y = 0;
    this._d = 0;
    this.duu = 0;
    this.lhh = 4;
    this.ymj = 2;
    this.wzf = 9;
    this.kie = true;
    this.zqh = 0;
    this.agm = -1;
    this.ksv = 0;
    this.bwk = -1;
    this.ysi = -1;
    this.gxz = -1;
    this.pfk = false;
    this.yln = [];
    this.smq = 0;
    this.bmt = 0;
    this.bcq = 0;
    this.azb = 89;
    this.wgm = 0;
    this.oip = 0;
    this.xtv = null;
    this.nrl = null;
    this.pal = 0;
    this.yfj = 0;
    this.nho = [];
    this.uqc = [];
    this.ebv = [];
    this.pxn = [];
    this.utg = [];
    this.jbf = function (f, k, j, c, b, d, g, e) {
        ntq.prototype.jbf.call(this, f, k, j);
        this.nqt = d;
        this.zqh = this.height / this.nqt;
        this.nhk = b;
        this.tai = g;
        this.fiq = e;
        this.mkf = Math.round(c);
        this.wjy = [];
        this.naj = 0;
        this.duu = 0;
        this.wzf = Math.round(this.mkf / 20);
        this.lhh = Math.round(this.mkf / 12);
        this.ymj = Math.round(this.mkf / 2);
        this.vbc.length = 0
    };
    this.whj = function (b) {
        try {
            this.ook = b.mll;
            this.kgn = b.ene
        } catch (c) {
            console.error(c)
        }
    };
    this.cch = function (c, b) {
        ntq.prototype.cch.call(this, c);
        try {
            this.mkf = Math.round(b);
            this.wzf = Math.round(this.mkf / 20);
            this.lhh = Math.round(this.mkf / 12);
            this.ymj = Math.round(this.mkf / 2);
            this._y = this.y + (this.nqt - 1) * this.zqh
        } catch (d) {
            console.error(d)
        }
    };
    this.nyc = function (b, e) {
        var d = b - this.x - ((this.parent.pix()) ? this.parent.tiq.xcb.rlq.x : 0),
            c = e - this.y - ((this.parent.pix()) ? this.parent.tiq.xcb.rlq.y : 0);
        if (d >= 0 && d <= this.width && c >= 0 && c <= this.height) {
            if (this.parent.kns && this.parent.ipd && !this.parent.qhe && !this.mzv && this.parent.zbd()) {
                this.fbg()
            } else {
                if (!this.parent.kns) {
                    if (bmx.vbp.value43) {
                        if (this.parent.auq()) {
                            this.parent.qsk();
                            if (this.parent.mho) {
                                this.parent.mho.bco.fmj("buttons", "#slz", [true])
                            }
                        }
                    } else {
                        if (this.xpa) {
                            this.agm = c;
                            this.ksv = 0;
                            this.parent.swd();
                            this.parent.zbp();
                            this.parent.tva()
                        }
                    }
                }
            }
            return true
        }
        return false
    };
    this.wga = function () {
        if (this.agm >= 0) {
            this.xfe();
            return true
        }
        return false
    };
    this.uyv = function (b, f, c) {
        var e = b - this.x - ((this.parent.pix()) ? this.parent.tiq.xcb.rlq.x : 0),
            d = f - this.y - ((this.parent.pix()) ? this.parent.tiq.xcb.rlq.y : 0);
        if (this.agm >= 0) {
            if (e >= 0 && e <= this.width && d >= 0 && d <= this.height) {
                if (d > this.agm) {
                    this.wgm = dmg(this.tuj)
                } else {
                    if (d < this.agm) {
                        this.wgm = dmg(this.bie)
                    }
                }
                this.agm = d;
                if (c) {
                    clearTimeout(this.oip);
                    this.oip = setTimeout(this.xfe, 500)
                }
                return true
            } else {
                this.xfe();
                return true
            }
        }
        return false
    };
    this.cxx = function () {
        var g = 0,
            k = 0,
            d = 0;
        if (!this.bbd() || !this.parent.nyy()) {
            return
        }
        if (this.naj >= 0) {
            this.context2D.save();
            if (this.parent.zie === false) {
                this.context2D.beginPath();
                this.context2D.rect(this.x, this.y, this.width, this.height);
                this.context2D.closePath();
                this.context2D.clip()
            }
            if (this.nrl != null) {
                this.context2D.drawImage(this.nrl, this.x + this.pal, this.y + this.yfj, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            for (var f = 0, b = this.uqc.length; f < b; f++) {
                if (this.uqc[f]) {
                    this.context2D.drawImage(this.uqc[f].ljv, this.uqc[f].mnv * this.width, 0, this.width, this.uqc[f].ljv.height, this.x, this.y + f * this.zqh, this.width, this.uqc[f].ljv.height)
                }
            }
            g = this._y - this.height + this.ksv;
            for (var f = 0; f < this.nqt + 1; f++) {
                k = this.naj + f;
                d = this.wjy[k];
                try {
                    if (this.vhk === false) {
                        this.context2D.drawImage(this.nhk[d], this.x, g)
                    } else {
                        this.context2D.drawImage(this.gih[d], this.x, g)
                    }
                } catch (l) {
                    if (!this.parent.imi) {
                        console.error("can not display image " + this.nhk.length + "" + d + "" + k + "" + this.wjy.length + "" + this.wjy)
                    }
                }
                g += this.zqh
            }
            g = this._y - this.height;
            for (var f = 0; f < this.nqt + 1; f++) {
                k = this.naj + f;
                d = this.wjy[k];
                try {
                    for (var c = 0, b = this.yln.length; c < b; c++) {
                        if (this.yln[c] == d && this.nho[d] && (this.nho[d].qev || !this.nho[d].uza)) {
                            this.context2D.drawImage(this.nho[d].ljv, this.nho[d].mnv * this.width, 0, this.width, this.nho[d].ljv.height, this.x, g + (this.zqh - this.nho[d].ljv.height) / 2, this.width, this.nho[d].ljv.height);
                            break
                        }
                    }
                } catch (l) {
                    if (!this.parent.imi) {
                        console.error("can not display image " + this.nho.length + "" + d + "" + k + "" + this.wjy.length + "" + this.wjy)
                    }
                }
                g += this.zqh
            }
            for (var f = 0, b = this.vbc.length; f < b; f++) {
                if (this.vbc[f]) {
                    this.context2D.drawImage(this.vbc[f], this.x, this.y + f * this.zqh)
                }
            }
            for (var f = 0, b = this.ebv.length; f < b; f++) {
                if (this.ebv[f]) {
                    this.context2D.drawImage(this.ebv[f].ljv, this.ebv[f].mnv * this.width, 0, this.width, this.ebv[f].ljv.height, this.x, this.y + f * this.zqh, this.width, this.ebv[f].ljv.height)
                }
            }
            if (this.bct) {
                this.context2D.fillStyle = this.ook;
                this.context2D.fillRect(this.x, this.y, this.width, this.height)
            }
            if (this.pxe) {
                this.context2D.fillStyle = this.kgn;
                this.context2D.fillRect(this.x, this.y, this.width, this.height)
            }
            if (this.xtv != null) {
                this.context2D.drawImage(this.xtv, this.x, this.y)
            }
            this.context2D.restore();
            if (this.tvv && this.ciq) {
                this.tvv.drawImage(this.ciq, this.x, this.y)
            }
        }
    };
    this.ove = function (b) {
        this.ysi = -1;
        this.gxz = -1;
        this.uxu = b;
        this.mzv = false;
        this.bwk = -1;
        this.naj = 0;
        this.kie = true;
        this.zpx = -1;
        this.wjy.length = this.fiq;
        for (var c = 0; c <= this.nqt; c++) {
            this.wjy[this.wjy.length - 1 - this.nqt + c] = this.wjy[c]
        }
        this.naj = this.wjy.length - 1 - this.nqt;
        this.kie = true;
        this.pgh(false)
    };
    this.onq = function (d, f) {
        for (var b = 0; b < this.fiq; b++) {
            if (b < this.tai.length) {
                this.wjy[b] = this.tai[b]
            } else {
                var c = b % this.tai.length;
                this.wjy[b] = this.tai[c]
            }
        }
        if (f) {
            var e = (this.nqt > 1) ? d - 2 : d - 1;
            if (e < 0) {
                e = this.tai.length + e
            }
            for (var b = 0; b <= this.nqt; b++) {
                this.wjy[b] = this.tai[e];
                e += 1;
                if (e == this.tai.length) {
                    e = e - this.tai.length
                }
            }
        }
        this.naj = 0;
        this._y = this.y + (this.nqt - 1) * this.zqh
    };
    this.fbg = function () {
        this.fkh = true;
        if (this.naj > this.nqt) {
            var c = this.naj;
            var d = this.nqt;
            for (var b = 0; b <= this.nqt; b++) {
                this.wjy[d + b + 1] = this.wjy[c + b]
            }
            this.naj = this.nqt + 1
        }
    };
    this.rts = function () {
        this.naj = 0;
        this.bwk = 0;
        this.dar()
    };
    this.tuj = function () {
        if (a.ksv < a.zqh / 4) {
            a.ksv = a.ksv + 2;
            if (a.parent.zie === false) {
                a.cxx()
            } else {
                a.parent.slp()
            }
        }
    };
    this.bie = function () {
        if (a.ksv > 0) {
            a.ksv = a.ksv - 2;
            if (a.parent.zie === false) {
                a.cxx()
            } else {
                a.parent.slp()
            }
        }
    };
    this.xfe = function () {
        clearTimeout(a.oip);
        a.parent.uid();
        if (a.ksv > 0) {
            a.bie();
            a.wgm = dmg(a.xfe)
        } else {
            a.yil()
        }
    };
    this.yil = function () {
        tya(this.wgm);
        this.agm = -1;
        this.ksv = 0
    };
    this.ypq = function (c) {
        if (this.ksv > 0) {
            this.ksv = 0
        }
        if (this.nqt === 1 && this.bwk < 0 && this.ysi >= 0 && this._y === this.y + this.height - this.mkf) {
            this.erm(this.ysi, this.gxz, this.pfk)
        }
        if (this.naj >= 0) {
            if (this.naj > 0) {
                if (!this.fkh || !this.parent.gqn) {
                    this._y += this.mkf;
                    this._d += this.mkf
                } else {
                    this._y += (this.mkf + this.mkf / 2);
                    this._d += (this.mkf + this.mkf / 2)
                }
            } else {
                if (this.naj == 0) {
                    if (this.bwk == -1) {
                        this.zpx += 1;
                        this.naj = this.uxu - 1 - this.nqt;
                        this._y += this.mkf;
                        this._d += this.mkf;
                        for (var b = 0; b <= this.nqt; b++) {
                            this.wjy[this.uxu - 1 - this.nqt + b] = this.wjy[b]
                        }
                    } else {
                        if (this.duu < this.ymj && this.kie) {
                            this._y += this.lhh;
                            this.duu += this.lhh;
                            if (this.duu >= this.ymj) {
                                this.kie = false
                            }
                        } else {
                            if (this.duu > 0 && !this.kie) {
                                this._y -= this.wzf;
                                this.duu -= this.wzf;
                                if (this.duu <= 0) {
                                    this.mzv = true;
                                    this.fkh = false;
                                    if (typeof this.mds === "function") {
                                        this.mds()
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this._d > this.zqh - this.mkf && this.naj > 0) {
                if (c && this.bwk >= 0) {
                    if (this.naj == 1) {
                        if (typeof this.qyq === "function") {
                            this.qyq()
                        }
                        if (this.mdk) {
                            this.mdk.play()
                        }
                        if (!this.parent.hli && !this.parent.wzr) {
                            if (this.nsx()) {
                                this.udm()
                            }
                        }
                    }
                }
                this.naj -= 1;
                this._d = 0;
                this._y = this.y + (this.nqt - 1) * this.zqh
            }
        }
    };
    this.dje = function (e, c, f) {
        for (var d = 0, b = this.ebv.length; d < b; d++) {
            if (this.ebv[d]) {
                if (this.ebv[d].ofp === false && this.ebv[d].mnv < this.ebv[d].dpq - 1) {
                    this.ebv[d].mnv += 1
                } else {
                    if (this.ebv[d].ofp === true && this.ebv[d].mnv > 0) {
                        this.ebv[d].mnv -= 1
                    } else {
                        if (this.ebv[d].loop === true) {
                            this.ebv[d].mnv = (this.ebv[d].ofp === false) ? 0 : this.ebv[d].dpq - 1
                        } else {
                            if (this.ebv[d].hme === true) {
                                this.ebv[d] = null
                            }
                        }
                    }
                }
            }
        }
        if (f && f === true) {
            this.cxx()
        }
    };
    this.utz = function () {
        for (var c = 0, b = this.ebv.length; c < b; c++) {
            if (this.ebv[c] && ((this.ebv[c].ofp === false && this.ebv[c].mnv < this.ebv[c].dpq - 1) || (this.ebv[c].ofp === true && this.ebv[c].mnv > 0))) {
                return true
            }
        }
        return false
    };
    this.aoc = function (d) {
        for (var c = 0, b = this.uqc.length; c < b; c++) {
            if (this.uqc[c]) {
                if (this.uqc[c].ofp === false && this.uqc[c].mnv < this.uqc[c].dpq - 1) {
                    this.uqc[c].mnv += 1
                } else {
                    if (this.uqc[c].ofp === true && this.uqc[c].mnv > 0) {
                        this.uqc[c].mnv -= 1
                    } else {
                        if (this.uqc[c].loop === true) {
                            this.uqc[c].mnv = (this.uqc[c].ofp === false) ? 0 : this.uqc[c].dpq - 1
                        } else {
                            if (this.uqc[c].hme === true) {
                                this.uqc[c] = null
                            }
                        }
                    }
                }
            }
        }
        if (d && d === true) {
            this.cxx()
        }
    };
    this.dcr = function () {
        for (var c = 0, b = this.uqc.length; c < b; c++) {
            if (this.uqc[c] && ((this.uqc[c].ofp === false && this.uqc[c].mnv < this.uqc[c].dpq - 1) || (this.uqc[c].ofp === true && this.uqc[c].mnv > 0))) {
                return true
            }
        }
        return false
    };
    this.ncl = function (d, c, b) {
        this.ysi = d;
        this.gxz = c;
        this.pfk = b;
        if (this.nqt > 1) {
            this.erm(this.ysi, this.gxz, this.pfk)
        }
    };
    this.erm = function (j, g, d) {
        var k = 0,
            c = 0,
            e = 0,
            b = [];
        this.zpx = -1;
        this.bwk = j;
        k = (this.nqt > 1) ? this.bwk - 2 : this.bwk - 1;
        if (k < 0) {
            k = this.tai.length + k
        }
        c = (d === true) ? this.wjy.length + g : this.nqt + g + 1;
        for (var f = 0; f <= this.nqt; f++) {
            e = this.naj + f;
            if (e >= this.wjy.length) {
                e = e - this.wjy.length
            }
            b[f] = this.wjy[e]
        }
        for (var f = 0; f < c; f++) {
            this.wjy[f] = this.tai[k];
            k += 1;
            if (k == this.tai.length) {
                k = k - this.tai.length
            }
        }
        this.naj = this.nqt + g + 1;
        for (var f = 0; f <= this.nqt; f++) {
            this.wjy[this.naj + f] = b[f]
        }
        this.pgh(true);
        this.ysi = -1;
        this.gxz = -1;
        this.pfk = false
    };
    this.pgh = function (k) {
        var d = -1,
            n = -1,
            b = 0,
            o = true,
            e = false,
            m = 0,
            l = 0;
        if (this.pxn.length > 0 && this.utg.length > 0) {
            if (k) {
                for (var g = 0; g < this.pxn.length; g++) {
                    for (var f = 0; f < this.pxn[g].length - 1; f++) {
                        if (this.wjy[this.nqt] == this.pxn[g][f]) {
                            d = f;
                            n = g
                        }
                    }
                }
                if (n >= 0 && d >= 0 && d < this.pxn[n].length - 1) {
                    if (this.nqt + this.pxn[n].length - d - 1 < this.naj) {
                        for (var g = d + 1, f = 1; g < this.pxn[n].length; g++, f++) {
                            this.wjy[this.nqt + f] = this.pxn[n][g]
                        }
                    }
                }
            }
            d = -1;
            n = -1;
            for (var g = 0; g < this.pxn.length; g++) {
                for (var f = 1; f < this.pxn[g].length; f++) {
                    if (this.wjy[this.naj] == this.pxn[g][f]) {
                        d = f;
                        n = g
                    }
                }
            }
            if (n >= 0 && d > 0) {
                if (this.naj - d > this.nqt) {
                    for (var g = d - 1, f = 1; g >= 0; g--, f++) {
                        this.wjy[this.naj - f] = this.pxn[n][g]
                    }
                }
            }
            d = -1;
            n = -1;
            for (var g = 0; g < this.pxn.length; g++) {
                for (var f = 0; f < this.pxn[g].length; f++) {
                    if (this.wjy[this.naj + this.nqt] == this.pxn[g][f]) {
                        d = f;
                        n = g
                    }
                }
            }
            if (n >= 0 && d >= 0 && d < this.pxn[n].length - 1) {
                if (!k) {
                    for (var g = d + 1; g < this.pxn[n].length; g++) {
                        this.wjy[m++] = this.pxn[n][g]
                    }
                } else {
                    if (this.naj + this.nqt + this.pxn[n].length - d - 1 < this.wjy.length) {
                        for (var g = d + 1, f = 1; g < this.pxn[n].length; g++, f++) {
                            this.wjy[this.naj + this.nqt + f] = this.pxn[n][g]
                        }
                    }
                }
            }
            m = (k) ? this.nqt + 1 : m;
            l = (k) ? this.wjy.length : this.naj;
            for (var c = m; c < l; c++) {
                if (k == false || (c < this.naj || c > this.naj + this.nqt)) {
                    d = -1;
                    n = -1;
                    for (var g = 0; g < this.pxn.length; g++) {
                        for (var f = 0; f < this.pxn[g].length; f++) {
                            if (this.wjy[c] == this.pxn[g][f]) {
                                d = f;
                                n = g
                            }
                        }
                    }
                    if (n >= 0 && d >= 0) {
                        o = true;
                        b = 0;
                        for (var g = 0; g < this.pxn[n].length && o; g++) {
                            if (this.wjy[c - d + g] != this.pxn[n][g]) {
                                o = false
                            } else {
                                b++
                            }
                        }
                        if (o) {
                            c += this.pxn[n].length - d - 1
                        } else {
                            if (b == 0) {
                                this.wjy[c] = this.utg[Math.floor(Math.random() * this.utg.length)]
                            } else {
                                if (b == this.pxn[n].length - 1 && (c + b < this.naj || c + b > this.naj + this.nqt) && c + b < this.wjy.length) {
                                    e = false;
                                    for (var g = 0; g < this.pxn.length && !e; g++) {
                                        for (var f = 0; f < this.pxn[g].length && !e; f++) {
                                            if (this.wjy[c + b] == this.pxn[g][f]) {
                                                e = true
                                            }
                                        }
                                    }
                                    if (!e) {
                                        this.wjy[c + b] = this.pxn[n][this.pxn[n].length - 1];
                                        c += b
                                    } else {
                                        this.wjy[c] = this.utg[Math.floor(Math.random() * this.utg.length)]
                                    }
                                } else {
                                    for (var q = 0; q < b; q++) {
                                        if (c + q < this.naj || c + q > this.naj + this.nqt) {
                                            this.wjy[c + q] = this.utg[Math.floor(Math.random() * this.utg.length)]
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
    this.giu = function (b) {
        this.xpa = b
    };
    this.ozi = function () {
        return this.xpa
    };
    this.nsx = function () {
        for (var c = 0, b = this.yln.length; c < b; c++) {
            if (this.yln[c] >= 0) {
                return true
            }
        }
        return false
    };
    this.woa = function (b) {
        this.yln = b
    };
    this.sxq = function (b) {
        return this.yln
    };
    this.udm = function () {
        for (var d = 0, b = this.yln.length; d < b; d++) {
            var c = this.nho[this.yln[d]];
            if (c) {
                c.qev = true;
                c.yqu = c.loop;
                c.uza = c.hme
            }
        }
        if (this.parent.zie === false) {
            this.cxx()
        } else {
            this.parent.slp()
        }
        this.bcq = 0;
        this.bmt = new Date().getTime();
        this.knp()
    };
    this.dar = function () {
        for (var c = 0, b = this.nho.length; c < b; c++) {
            if (this.nho[c]) {
                this.nho[c].qev = false
            }
        }
        clearTimeout(this.smq)
    };
    this.kbe = function () {
        for (var c = 0, b = this.nho.length; c < b; c++) {
            if (this.nho[c]) {
                this.nho[c].yqu = false
            }
        }
    };
    this.cif = function () {
        for (var c = 0, b = this.nho.length; c < b; c++) {
            if (this.nho[c]) {
                this.nho[c].uza = true;
                this.nho[c].mnv = 0
            }
        }
    };
    this.nxh = function () {
        for (var c = 0, b = this.nho.length; c < b; c++) {
            if (this.nho[c] && this.nho[c].qev) {
                return true
            }
        }
        return false
    };
    this.knp = function () {
        var f = true,
            d = null;
        a.bcq++;
        for (var e = 0, b = a.yln.length; e < b; e++) {
            d = a.nho[a.yln[e]];
            if (d && d.qev) {
                d.mnv = (d.mnv < d.dpq - 1) ? d.mnv + 1 : (d.uza) ? 0 : d.mnv;
                if ((d.mnv === 0 && d.yqu === false) || (d.mnv === d.dpq - 1 && d.uza === false)) {
                    d.qev = false
                }
                if (f === true && d.qev === true) {
                    f = false
                }
            }
        }
        if (a.parent.zie === false) {
            a.cxx()
        } else {
            a.parent.slp()
        }
        if (f === false) {
            var c = (a.bcq * a.azb - (new Date().getTime() - a.bmt));
            if (c < 2) {
                c = 0
            }
            a.smq = setTimeout(a.knp, c)
        } else {
            clearTimeout(a.smq);
            a.parent.exy()
        }
    };
    this.lfl = function (d) {
        for (var c = 0, b = d.length; c < b; c++) {
            if (d[c]) {
                this.nho[c] = {};
                this.nho[c].ljv = d[c].ljv;
                this.nho[c].loop = d[c].loop;
                this.nho[c].hme = d[c].hme;
                this.nho[c].dpq = this.nho[c].ljv.width / this.width;
                this.nho[c].mnv = 0;
                this.nho[c].qev = false;
                this.nho[c].yqu = false;
                this.nho[c].uza = true
            }
        }
    };
    this.hud = function (b, c, d) {
        this.nrl = b;
        this.pal = c;
        this.yfj = d
    };
    this.mzi = function (b) {
        this.xtv = b
    };
    this.uyb = function (f, e, b, d, c) {
        if (e == null || f < 0) {
            return
        }
        this.ebv[f] = {
            ljv: e,
            mnv: 0,
            dpq: e.width / this.width,
            loop: b,
            hme: d,
            ofp: c
        }
    };
    this.hei = function () {
        return this.ebv
    };
    this.stb = function (f, e, b, d, c) {
        if (e == null || f < 0) {
            return
        }
        this.uqc[f] = {
            ljv: e,
            mnv: 0,
            dpq: e.width / this.width,
            loop: b,
            hme: d,
            ofp: c
        }
    };
    this.dpp = function () {
        return this.uqc
    };
    this.xho = function (g, c) {
        this.pxn = [];
        this.utg = [];
        for (var f = 0, b = g.length; f < b; f++) {
            this.pxn[f] = [];
            for (var e = 0, d = g[f].length; e < d; e++) {
                this.pxn[f][e] = g[f][e]
            }
        }
        for (var f = 0, b = c.length; f < b; f++) {
            this.utg[f] = c[f]
        }
    };
    this.qyq = null;
    this.mds = null
}
ntq.prototype = new dzq;
bmx.ccf = {
    enw: {
        fep: 0,
        pzo: 1,
        gem: 2,
        zbl: 3,
        yfh: 4,
        nbv: 5,
        jjx: 6,
        hna: 7,
        led: 8,
        ael: 9,
        zyb: 10,
        rbq: 11,
        qho: 12,
        gmr: 13,
        ghy: 14,
        eif: 15,
        slo: 16,
        hyo: 20,
        dfm: 21,
        vkz: 22,
        akb: 23,
        mfc: 24,
        asx: 25,
        ruz: 30,
        psp: 31,
        qbp: 32,
        ejj: 33,
        ams: 68
    }
};

function lxu() {
    this.cei = null;
    this.hpy = null;
    this.pfp = null;
    this.fzm = null;
    this.jwr = null;
    this.zgl = [];
    this.mho = null;
    this.gbk = null;
    this.jas = null;
    this.zwp = null;
    this.fqe = null;
    this.boz = null;
    this.ssn = null;
    this.gtf = null;
    this.hmu = [];
    this.jnf = [];
    this.win = 0;
    this.cqx = 1;
    this.hgw = 0;
    this.totalBet = 1000;
    this.tro = [];
    this.wfh = 0;
    this.frd = 0;
    this.sxk = 10;
    this.saw = 0;
    this.cqw = 0;
    this.goy = [];
    this.crf = 0;
    this.zei = -1;
    this.ekd = -1;
    this.twr = -1;
    this.r1 = [];
    this.r2 = [];
    this.r3 = [];
    this.r4 = [];
    this.r5 = [];
    this.r6 = [];
    this.r7 = [];
    this.r8 = [];
    this.r9 = [];
    this.ami = [];
    this.bow = [];
    this.wsj = [];
    this.bmc = [];
    this.tvf = [];
    this.gon = [];
    this.izp = 3;
    this.soo = 5;
    this.sqs = [];
    this.dqw = 1;
    this.oxg = 1;
    this.wnj = 1;
    this.yll = [];
    this.mgi = null;
    this.abl = false;
    this.bth = 0;
    this.ocp = 1;
    this.egf = 0;
    this.nby = 0;
    this.qds = 0;
    this.vbr = 0;
    this.xqg = true;
    this.bnw = false;
    this.lfm = false;
    this.iar = false;
    this.lmc = false;
    this.yxa = false;
    this.men = false;
    this.nmo = 1;
    this.tpy = true;
    this.eee = "";
    this.urt = false;
    this.fgg = false;
    this.drd = false;
    this.mwa = true;
    this.tpp = false;
    this.cnb = 0;
    this.bsc = 0;
    this.ady = 0;
    this.yek = "";
    this.pda = "";
    this.vdh = "";
    this.fzn = null;
    this.hli = true;
    this.php = false;
    this.kns = false;
    this.awd = 20;
    this.opz = true;
    this.ipd = false;
    this.fsc = false;
    this.vch = [15, 20, 25, 30, 35];
    this.avn = [8, 8, 8, 8, 8];
    this.wdu = [0, 0, 0, 0, 0];
    this.ces = this.vch;
    this.rzx = 16;
    this.jwg = 16;
    this.epg = this.rzx;
    this.lao = 12;
    this.qka = 0;
    this.bqe = 0;
    this.nhk = [];
    this.gqn = true;
    this.fyt = false;
    this.dai = false;
    this.mqf = false;
    this.qpj = true;
    this.umu = 0;
    this.fad = 0;
    this.wmz = [];
    this.qst = true;
    this.iro = false;
    this.mcp = false;
    this.tli = false;
    this.lev = false;
    this.dkh = false;
    this.fby = 1;
    this.ets = 400;
    this.qqk = 200;
    this.luz = 100;
    this.qrt = true;
    this.zcn = true;
    this.lec = false;
    this.xfn = [];
    this.pnt = 50;
    this.zgq = null;
    this.twx = null;
    this.rel = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ];
    this.ezd = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ];
    this.ptj = false;
    this.rmv = 0;
    this.lic = 0;
    this.bap = -1;
    this.voj = 0;
    this.hvh = false;
    this.uud = false;
    this.vcs = -1;
    this.htn = false;
    this.usj = true;
    this.agp = 3;
    this.smu = false;
    this.grh = 0;
    this.uqa = true;
    this.kri = 330;
    this.ihr = [];
    this.whv = null;
    this.wxm = null;
    this.fgh = [
        [2, 2, 2, 2, 2],
        [1, 1, 1, 1, 1],
        [3, 3, 3, 3, 3],
        [1, 2, 3, 2, 1],
        [3, 2, 1, 2, 3]
    ];
    this.vyp = [];
    this.iba = 1;
    this.dhu = 5;
    this.yuj = 1;
    this.lko = 5;
    this.syd = true;
    this.isr = 0;
    this.yui = 0;
    this.lcq = 30;
    this.bqd = 50;
    this.gyd = false;
    this.lee = 0;
    this.cmq = 0;
    this.fzb = false;
    this.kgc = true;
    this.pab = 0;
    this.amr = 0;
    this.yxt = false;
    this.ezh = 0;
    this.vte = false;
    this.jng = true;
    this.apz = false;
    this.ott = false;
    this.gms = null;
    this.qhe = false;
    this.kwk = true;
    this.beq = 0;
    this.qot = 0;
    this.yov = 0;
    this.hlo = 0;
    this.qox = true;
    this.xmq = null;
    this.sgy = false;
    this.uxp = false;
    this.wmo = true;
    this.pwk = "";
    this.wvk = false;
    this.had = -1;
    this.ork = 0;
    this.ira = 0;
    this.tjv = 0;
    this.sur = 0;
    this.id = 0;
    this.xbc = 0;
    this.suw = 0;
    this.eyl = 0;
    this.wha = 0;
    this.bhj = 0;
    this.adh = -1;
    this.oyb = 0;
    this.btf = 0;
    this.rea = -1;
    this.npq = 0;
    this.sns = 0;
    this.dey = -1;
    this.afm = function (b) {
        if (!bmx.qsx.imi) {
            bmx.suj.afm(b)
        }
    };
    this.hvb = function () {
        var b = new wmn();
        b.jbf();
        return b
    };
    this.ypa = function () {
        this.unz = new ykv()
    };
    this.uui = function () {
        this.qje();
        var f = [];
        if (!(this.cnb > 0 && this.bsc < this.cnb)) {
            while (this.hgw < this.faf()) {
                this.hgw++
            }
            var e = this.thl(this.lfm);
            if (this.hgw > e) {
                var d = (e < 0) ? 0 : e;
                this.hgw = d
            }
        }
        this.cqx = this.tro[this.hgw];
        this.totalBet = this.zyq();
        this.lii();
        this.wbm();
        this.dfa();
        for (var c = 0, b = this.whm.vej("symb"); c < b; c++) {
            this.nhk[c] = this.whm.wez("symb" + c)
        }
        if (bmx.vbp.value38) {
            f[bmx.os.xwl] = "w";
            f[bmx.os.efr] = "l";
            f[bmx.os.qri] = "m";
            f[bmx.os.oys] = "i";
            f[bmx.os.xwo] = "a";
            this.gqn = bmx.vbp.value38[f[bmx.suj.rkp]]
        }
    };
    this.fod = function () {
        this.zix();
        this.buv();
        this.nsr();
        this.cns();
        this.hpe();
        this.xow();
        if (this.jng) {
            this.ttq()
        }
        if (this.tiq.yef) {
            this.lbu();
            this.jqn()
        }
        if (this.tiq.qnc && !(this.cnb > 0 && this.bsc < this.cnb)) {
            this.qjm();
            if (this.plj()) {
                this.dpd()
            }
        }
        if (this.tiq.zaq) {
            this.ewr();
            if (!this.tiq.arr) {
                this.edg()
            }
        }
        if (this.tiq.uhx) {
            this.pel()
        }
        if (this.imi) {
            this.fgu()
        } else {
            this.mdu();
            if (this.tiq.std) {
                this.rgt()
            }
            if (this.kxc()) {
                this.gvu()
            }
            if (this.mno()) {
                this.tsq()
            }
            if (this.klc() != null && !this.vbg()) {
                this.rhi(this.klc())
            }
        }
        if (!(this.imi && !this.lys)) {
            this.sdo();
            this.yah()
        }
        if (this.tiq.arr) {
            this.pzh(this.klc())
        }
        this.dff();
        if (!this.imi) {
            this.vbl();
            this.wvw()
        }
        if (!this.lys) {
            this.yzq()
        }
    };
    this.kva = function () {
        if (!this.lwf) {
            if (this.kdp === false) {
                this.wda.style.marginTop = (-this.height / 2 + this.hfp()) + "px";
                this.wda.style.marginLeft = (-this.width / 2) + "px"
            } else {
                this.wda.style.left = "0px";
                this.wda.style.top = "0px";
                this.wda.style.marginTop = ((this.fxv - this.height) / 2 + this.hfp()) + "px";
                this.wda.style.marginLeft = ((this.jhi - this.width) / 2) + "px"
            }
            this.wda.style.width = (this.width > this.jhi) ? this.jhi + "px" : this.width + "px";
            this.wda.style.height = (this.height > this.fxv) ? this.fxv + "px" : this.height + "px";
            this.canvas.width = Math.round(this.width);
            this.canvas.height = Math.round(this.height);
            this.context2D = this.canvas.getContext("2d");
            this.fqe = document.createElement("canvas");
            this.fqe.width = this.tiq.mug.rlq.width;
            this.fqe.height = this.tiq.mug.rlq.height;
            this.boz = this.fqe.getContext("2d");
            if (this.pix() === true && typeof WebGL2D != "undefined") {
                try {
                    this.xcb = document.getElementById("canvas2");
                    this.xcb.width = Math.round(this.tiq.xcb.rlq.width);
                    this.xcb.height = Math.round(this.tiq.xcb.rlq.height);
                    WebGL2D.enable(this.xcb);
                    this.gly = this.xcb.getContext("webgl-2d");
                    this.zie = true;
                    this.ssn = document.createElement("canvas");
                    this.ssn.width = this.tiq.mug.rlq.width;
                    this.ssn.height = this.tiq.mug.rlq.height;
                    this.gtf = this.ssn.getContext("2d")
                } catch (b) {
                    this.xcb = null;
                    this.gly = null;
                    this.zie = false
                }
            }
            if (this.zbh) {
                this.zbh.style.width = this.width + "px";
                this.zbh.style.height = this.height + "px"
            }
            this.offsetLeft = this.wda.offsetLeft;
            this.offsetTop = this.wda.offsetTop;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.lwf = true
        }
    };
    this.dff = function () {};
    this.ewr = function () {
        lxu.prototype.ewr.call(this);
        var b = this.dbq.uxx("topi");
        try {
            if (b) {
                if (bmx.vbp.value57 === bmx.ui.rek || this.klc() != null) {
                    b.jat("language", this.whm.wez("icon_l"), sessionStorage.sessionValue1, [bmx.language.EN, bmx.language.DE, bmx.language.RU, bmx.language.EE, bmx.language.ES, bmx.language.TR, bmx.language.CZ, bmx.language.GR, bmx.language.AT, bmx.language.US, bmx.language.BG, bmx.language.CO, bmx.language.MX, bmx.language.CL, bmx.language.VE, bmx.language.BR, bmx.language.GE, bmx.language.HU, bmx.language.RO, bmx.language.PT, bmx.language.FR, bmx.language.HR, bmx.language.IT, bmx.language.SE])
                }
                if (this.vbg() === false) {
                    b.ust("help", new String("?"), true)
                }
                if (bmx.vbp.value27 && this.neh) {
                    b.jat("audio", this.whm.wez("icon_a"), this.pza[this.sqx], this.pza);
                    if (this.dma() === true) {
                        b.ust("melody", this.whm.wez("icon_m"), this.mwa)
                    }
                }
                if (sessionStorage.sessionValue14 == "true" && bmx.suj.kik()) {
                    b.ust("fullscreen", this.whm.wez("icon_f"), this.xws)
                }
                if (bmx.vbp.value28 && this.kwk) {
                    b.ust("turbo", this.whm.wez("icon_t"), this.qhe)
                }
                b.ust("auto", this.whm.wez("icon_as"), this.lmc);
                b.ust("gamble", this.whm.wez("icon_g"), this.ott)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.edg = function () {
        lxu.prototype.edg.call(this);
        var c = this.dbq.uxx("topb");
        try {
            if (c) {
                if ((bmx.vbp.value5.length > 1) && (bmx.vbp.value57 === bmx.ui.rek || this.klc() != null)) {
                    c.zzj("language", this.language.language, this.mtc(bmx.vbp.value5[this.ery]), this.yri, this.unz.language, 0, 1)
                }
                if (bmx.vbp.value27 && this.neh) {
                    c.zzj("audio", this.language.audio, this.whm.wez("btn_a"), this.ooh, this.unz.audio, this.sqx, this.pza.length);
                    if (this.dma() === true) {
                        c.zzj("melody", this.language.fmz, this.whm.wez("btn_mu"), this.zcv, this.unz.bcu, (this.mwa) ? 1 : 0, 2)
                    }
                }
                if (sessionStorage.sessionValue14 == "true" && bmx.suj.kik()) {
                    c.zzj("fullscreen", this.language.xws, this.whm.wez("btn_f"), (bmx.suj.djn) ? this.aew : this.noc, this.unz.xws, (this.xws) ? 1 : 0, 2)
                }
                if (bmx.vbp.value28 && this.kwk) {
                    c.zzj("turbo", this.language.qhe, this.whm.wez("btn_t"), this.zxa, this.unz.qhe, (this.qhe) ? 1 : 0, 2)
                }
                c.cfx("help", this.language.dve, this.whm.wez("btn_p"), this.hzm, this.unz.cfr);
                if (this.pda != "" && (bmx.vbp.value81 && bmx.vbp.value81.g === true)) {
                    c.cfx("rules", this.language.fcm, this.whm.wez("btn_gr"), this.dde, this.unz.fla)
                }
                if (bmx.vbp.value12 && !this.fnw()) {
                    c.cfx("history", this.language.eps, this.whm.wez("btn_h"), this.leh, this.unz.eps)
                }
                if (bmx.vbp.value36 && !this.fnw()) {
                    c.cfx("statistic", this.language.fpm, this.whm.wez("btn_st"), this.upp, this.unz.fpm)
                }
                c.kut()
            }
        } catch (b) {
            console.error(b)
        }
    };
    this.pzh = function (b) {
        lxu.prototype.pzh.call(this, b);
        var d = this.dbq.uxx("settings"),
            e = "",
            c = 0;
        if (d) {
            if (bmx.vbp.value5.length > 1) {
                c++;
                d.zzj("language", this.language.language, this.mtc(bmx.vbp.value5[this.ery]), this.yri, 0, 1)
            }
            if (bmx.vbp.value27 && this.neh) {
                c++;
                d.zzj("audio", this.language.audio, this.whm.wez("btn_a"), this.ooh, this.sqx, this.pza.length);
                if (this.dma() === true) {
                    c++;
                    d.zzj("melody", this.language.fmz, this.whm.wez("btn_mu"), this.zcv, (this.mwa) ? 1 : 0, 2)
                }
            }
            if (sessionStorage.sessionValue14 == "true" && bmx.suj.kik()) {
                c++;
                d.zzj("fullscreen", this.language.xws, this.whm.wez("btn_f"), this.aew, (this.xws) ? 1 : 0, 2)
            }
            if (bmx.vbp.value28 && this.kwk && c < 4) {
                d.zzj("turbo", this.language.qhe, this.whm.wez("btn_t"), this.zxa, (this.qhe) ? 1 : 0, 2)
            }
            d.zzj("gamble", this.language.ott, this.whm.wez("btn_g"), this.rry, (this.ott) ? 1 : 0, 2);
            if (this.nxy[this.jye] === bmx.hvp.ktr) {
                e = this.language.left
            } else {
                if (this.nxy[this.jye] === bmx.hvp.quq) {
                    e = this.language.gqz
                } else {
                    if (this.nxy[this.jye] === bmx.hvp.afh) {
                        e = this.language.wqq
                    }
                }
            }
            d.zzj("adjustment", e, this.whm.wez("btn_l"), this.mgs, (this.usz === bmx.tiq.nzl) ? 0 : 1, 2);
            d.pdz("help", this.language.cfr, this.whm.wez("btn_p"), this.hzm);
            if (this.pda != "" && (bmx.vbp.value81 && bmx.vbp.value81.g === true)) {
                d.pdz("rules", this.language.odp, this.whm.wez("btn_gr"), this.dde)
            }
            if (bmx.vbp.value12 && !this.fnw()) {
                d.pdz("history", this.language.eps, this.whm.wez("btn_h"), this.leh)
            }
            if (bmx.vbp.value36 && !this.fnw()) {
                d.pdz("statistic", this.language.fpm, this.whm.wez("btn_st"), this.upp)
            }
            d.qle = this.plj();
            d.hyf(this.tiq.wpj);
            d.ilm(this.tiq.wpj);
            d.whj(this.style.wpj);
            d.cox(this.language, true)
        }
    };
    this.zix = function () {
        var b = (this.imi && this.zdw) ? this.tiq.djt : this.tiq.yrs;
        this.mho = new ato();
        this.mho.parent = this;
        this.mho.qox = this.qox;
        this.mho.jbf(b.rlq, null, this.context2D);
        this.mho.hyf(b, this.style.yrs);
        this.mho.dtl(this.zgq, 0);
        this.mho.dtl(this.twx, 1)
    };
    this.xow = function () {};
    this.mdu = function () {};
    this.yah = function () {
        this.jas.lqg(this.tiq.fye, this.style.fye, this.whm.wez("btn_s"))
    };
    this.vhz = function () {};
    this.bhx = function () {};
    this.rgt = function () {
        var b = new emi();
        b.jbf(this.tiq.top.rlq, null, this.context2D);
        b.parent = this;
        this.dbq.jqp("tops", b)
    };
    this.nsr = function () {
        this.ihr = []
    };
    this.buv = function () {
        var e = [],
            c = (this.state == bmx.ccf.enw.jjx || this.state == bmx.ccf.enw.zyb || this.state == bmx.ccf.enw.rbq || this.state == bmx.ccf.enw.qho || this.state == bmx.ccf.enw.ghy) ? true : false;
        if (c) {
            if (this.xqg) {
                e = this.mgi
            } else {
                e = this.hmu
            }
        } else {
            e = this.hmu
        }
        this.cei = new ntq();
        this.hpy = new ntq();
        this.pfp = new ntq();
        this.fzm = new ntq();
        this.jwr = new ntq();
        this.cei.mdk = this.whm.qnj("stop1");
        this.hpy.mdk = this.whm.qnj("stop2");
        this.pfp.mdk = this.whm.qnj("stop1");
        if (this.fzm != null) {
            this.fzm.mdk = this.whm.qnj("stop2")
        }
        if (this.jwr != null) {
            this.jwr.mdk = this.whm.qnj("stop1")
        }
        if (this.zie === false) {
            this.cei.jbf(this.tiq.cei.rlq, this.context2D, null, (this.gqn) ? this.tiq.cei.yik : this.tiq.cei.iig, this.nhk, this.izp, this.r1, this.ces[0])
        } else {
            this.cei.jbf(this.tiq.cei.uhs, this.gly, null, (this.gqn) ? this.tiq.cei.yik : this.tiq.cei.iig, this.nhk, this.izp, this.r1, this.ces[0])
        }
        this.cei.onq(e[0], true);
        if (this.zie === false) {
            this.hpy.jbf(this.tiq.hpy.rlq, this.context2D, null, (this.gqn) ? this.tiq.hpy.yik : this.tiq.hpy.iig, this.nhk, this.izp, this.r2, this.ces[1])
        } else {
            this.hpy.jbf(this.tiq.hpy.uhs, this.gly, null, (this.gqn) ? this.tiq.hpy.yik : this.tiq.hpy.iig, this.nhk, this.izp, this.r2, this.ces[1])
        }
        this.hpy.onq(e[1], true);
        if (this.zie === false) {
            this.pfp.jbf(this.tiq.pfp.rlq, this.context2D, null, (this.gqn) ? this.tiq.pfp.yik : this.tiq.pfp.iig, this.nhk, this.izp, this.r3, this.ces[2])
        } else {
            this.pfp.jbf(this.tiq.pfp.uhs, this.gly, null, (this.gqn) ? this.tiq.pfp.yik : this.tiq.pfp.iig, this.nhk, this.izp, this.r3, this.ces[2])
        }
        this.pfp.onq(e[2], true);
        if (this.zie === false) {
            this.fzm.jbf(this.tiq.fzm.rlq, this.context2D, null, (this.gqn) ? this.tiq.fzm.yik : this.tiq.fzm.iig, this.nhk, this.izp, this.r4, this.ces[3])
        } else {
            this.fzm.jbf(this.tiq.fzm.uhs, this.gly, null, (this.gqn) ? this.tiq.fzm.yik : this.tiq.fzm.iig, this.nhk, this.izp, this.r4, this.ces[3])
        }
        this.fzm.onq(e[3], true);
        if (this.zie === false) {
            this.jwr.jbf(this.tiq.jwr.rlq, this.context2D, null, (this.gqn) ? this.tiq.jwr.yik : this.tiq.jwr.iig, this.nhk, this.izp, this.r5, this.ces[4])
        } else {
            this.jwr.jbf(this.tiq.jwr.uhs, this.gly, null, (this.gqn) ? this.tiq.jwr.yik : this.tiq.jwr.iig, this.nhk, this.izp, this.r5, this.ces[4])
        }
        this.jwr.onq(e[4], true);
        this.zgl = [this.cei, this.hpy, this.pfp, this.fzm, this.jwr];
        this.fzn = [true, true, true, true, true];
        for (var d = 0, b = this.zgl.length; d < b; d++) {
            this.zgl[d].parent = this;
            this.zgl[d].whj(this.style.tai);
            this.zgl[d].mzi(this.whm.wez("reelfront"))
        }
    };
    this.sdo = function () {
        this.jas = new tld();
        this.jas.jbf(this.tiq.fye.rlq, null, this.context2D);
        this.jas.parent = this;
        this.jas.xcc(false);
        this.jas.ilm(this.tiq.fye);
        this.jas.whj(this.style.fye)
    };
    this.ttq = function () {
        var c = this.tiq.ott,
            b = this.whm.wez("g_back");
        if (this.imi && this.zdw && this.style.qsx.ipl) {
            c = this.tiq.jvt;
            b = this.whm.wez("m_g_back")
        }
        this.zwp = new guz();
        this.zwp.parent = this;
        this.zwp.jbf(c.rlq, null, this.context2D);
        this.zwp.ljv = b;
        this.zwp.hyf(c);
        this.zwp.whj(this.style.ott);
        this.zwp.nuk();
        this.zwp.dtl(this.gms, 0);
        this.zwp.aco(false)
    };
    this.cns = function () {};
    this.hpe = function () {
        this.gbk = this.lcj();
        this.gbk.parent = this;
        this.gbk.whv = this.whv;
        this.gbk.wow = this.qks;
        this.gbk.fgh = this.fgh;
        this.gbk.wxm = this.wxm;
        this.gbk.agp = this.agp;
        this.gbk.yeq = this.kri;
        this.gbk.zvb = this.ihr;
        this.gbk.xyx = this.ptj;
        this.gbk.ryo = (this.hvh == true || this.uud == true);
        this.gbk.ygp = this.uqa;
        this.gbk.qrt = this.qrt;
        this.gbk.ilm(this.tiq.ghd);
        this.gbk.whj(this.style.ghd)
    };
    this.qjm = function () {
        var b = new syi();
        b.jbf(this.tiq.maq.rlq, null, this.context2D);
        b.parent = this;
        b.bxf = this.language.cqx;
        b.liq = this.zfo;
        b.wdy = this.unz.zcz.cpu;
        b.oar = this.unz.ivg.cpu;
        b.lnx = this.whm.wez("effect");
        b.ilm(this.tiq.maq);
        b.whj(this.style.qgq);
        b.uui(this.tro, this.faf(), this.thl(false));
        b.oxe(this.sme(), this.thl(true));
        b.vjs(this.hgw, false);
        b.aco(false);
        this.dbq.jqp("betsel", b)
    };
    this.dpd = function () {
        this.yll = [];
        for (var b = this.dqw; b <= this.oxg;) {
            this.yll.push(b);
            b += this.wnj
        }
        var c = new yjy();
        c.jbf(this.tiq.lhp.rlq, null, this.context2D);
        c.parent = this;
        c.bxf = this.language.sxk;
        c.liq = this.dge;
        c.wdy = this.unz.hwz.cpu;
        c.oar = this.unz.txa.cpu;
        c.lnx = this.whm.wez("effect");
        c.ilm(this.tiq.lhp);
        c.whj(this.style.qgq);
        c.uui(this.yll, 0, this.yll.length - 1);
        c.nau(this.sxk, false);
        c.aco(false);
        this.dbq.jqp("linesel", c)
    };
    this.pel = function () {
        this.dbq.jqp("llinep", this.elh(this.tiq.zzz.rlq.x, this.tiq.zzz.rlq.y, this.whm.wez("winlines"), this.iba, this.dhu, this.tiq.zzz));
        this.dbq.jqp("rlinep", this.elh(this.tiq.pjr.rlq.x, this.tiq.pjr.rlq.y, this.whm.wez("winlines"), this.yuj, this.lko, this.tiq.pjr));
        this.dbq.psl("llinep", "#grk", [this.sxk]);
        this.dbq.psl("rlinep", "#grk", [this.sxk])
    };
    this.lbu = function () {
        var c = new yyq(),
            b = this.whm.wez("m_win");
        if (this.imi && this.zdw && this.style.qsx.ipl) {
            b = this.whm.wez("m_m_win")
        }
        c.jbf(this.tiq.xsu.rlq, this.context2D, null, b, "");
        c.parent = this;
        c.ilm(this.tiq.xsu);
        c.whj(this.style.xsu);
        c.aco(false);
        this.dbq.jqp("winp", c)
    };
    this.jqn = function () {};
    this.fgu = function () {
        var b = new khy();
        b.jbf(this.tiq.eps.rlq, null, this.context2D);
        b.parent = this;
        b.hyf(this.tiq.eps);
        b.whj(this.style.eps);
        this.dbq.jqp("history", b)
    };
    this.elh = function (b, j, d, g, c, e) {
        var f = new trc();
        f.jbf(new ljp(b, j, 0, 0), this.context2D);
        f.xde = this.vyp;
        f.parent = this;
        f.aoq = g;
        f.skt = c;
        f.ilm(e);
        f.tpx(d);
        f.aco(true);
        return f
    };
    this.lcj = function () {
        var e = [];
        for (var d = 0, b = this.whm.vej("symb"); d < b; d++) {
            e[d] = this.whm.wez("symb" + d)
        }
        var c = new ozd();
        c.jbf(this.tiq.ghd.rlq, null, this.context2D);
        c.oyw = e;
        c.btv = this.whm.wez("reelfront");
        c.aco(false);
        return c
    };
    this.nhy = function () {
        if (this.dai === true) {
            for (var c = 0, b = this.zgl.length; c < b; c++) {
                if (!this.zie) {
                    this.zgl[c].hud(this.fqe, this.tiq.mug.rig, this.tiq.mug.xtn)
                }
            }
            if (this.gbk) {
                this.gbk.hud(this.fqe, this.tiq.mug.rig + this.gbk.x, this.tiq.mug.xtn + this.gbk.y)
            }
        }
        if (this.mho) {
            this.mho.hud(this.fqe, this.tiq.mug.rig, this.tiq.mug.xtn)
        }
    };
    this.zgb = function (d, c, b) {
        this.afm({
            type: "gameDataLoaded",
            sender: this.clm,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                success: true
            }
        });
        this.wiz = true;
        this.state = d;
        this.sjj = b;
        clearInterval(this.lea);
        if (this.neh) {
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                this.sqx = 0
            }
            if (this.whm.csz === true) {
                this.bmw(this.pza[this.sqx])
            } else {
                this.hca((this.pza[this.sqx] === 0))
            }
        }
        if (this.wzr === true) {
            this.nyr = true
        }
        this.uui();
        this.fod();
        this.szm();
        this.ajv();
        if (this.zwp) {
            this.zwp.bco.psl("history", "#ldf", [c])
        }
        this.fxu();
        window.dmg(this.emd)
    };
    this.emd = function () {
        bmx.qsx.pjh(bmx.qsx.sjj);
        bmx.qsx.hxr = true;
        bmx.qsx.ahr();
        bmx.qsx.lfw();
        bmx.qsx.nhy();
        bmx.qsx.cxx();
        if (bmx.qsx.wzr === true) {
            bmx.qsx.jaw(true)
        }
        if (bmx.suj.rkp === bmx.os.xwo && bmx.suj.gvi !== bmx.xpp.cnf) {
            bmx.qsx.dqn([{
                xkd: bmx.izb.cvx
            }])
        } else {
            if (bmx.qsx.cnb > 0) {
                if (bmx.qsx.bsc === 0) {
                    bmx.qsx.dqn([{
                        xkd: bmx.izb.uyu
                    }])
                } else {
                    if (bmx.qsx.bsc < bmx.qsx.cnb) {
                        bmx.qsx.dqn([{
                            xkd: bmx.izb.jnw
                        }])
                    }
                }
            } else {
                bmx.qsx.mcg(bmx.qsx.state)
            }
        }
        if (bmx.vbp.value37 && !bmx.qsx.fnw()) {
            bmx.qsx.uwh()
        }
        if (bmx.qsx.mno()) {
            setTimeout(bmx.qsx.cxx, 20)
        }
    };
    this.lpp = function () {
        this.tsc = new wer().jbf(this, bmx.vbp.value6)
    };
    this.tde = function () {
        this.tsc = new amn().jbf(this, bmx.vbp.value6)
    };
    this.nyc = function (q) {
        if (q.preventDefault) {
            q.preventDefault()
        }
        if (q.stopPropagation) {
            q.stopPropagation()
        }
        if (this.nyr) {
            return
        }
        var k = 0,
            j = 0,
            u = false,
            l = false,
            f = false,
            v = this.dbq.uxx("stats"),
            t = this.dbq.uxx("topb"),
            c = this.dbq.uxx("topi"),
            d = this.dbq.uxx("betsel"),
            n = this.dbq.uxx("linesel"),
            o = this.dbq.uxx("llinep"),
            w = this.dbq.uxx("rlinep"),
            z = this.dbq.uxx("finfop"),
            p = this.dbq.uxx("finfoc"),
            m = this.dbq.uxx("autop"),
            b = this.dbq.uxx("settings"),
            g = this.dbq.uxx("jwp");
        if (q.touches) {
            var e = q.touches[0];
            u = true;
            if (!this.znt) {
                k = e.pageX - this.offsetLeft;
                j = e.pageY - this.offsetTop
            } else {
                k = Math.round((e.pageX - this.offsetLeft) / this.huh);
                j = Math.round((e.pageY - this.offsetTop) / this.ulv)
            }
        } else {
            if (q.which != 1) {
                return
            }
            if (!this.znt) {
                k = q.pageX - this.offsetLeft;
                j = q.pageY - this.offsetTop
            } else {
                k = Math.round((q.pageX - this.offsetLeft) / this.huh);
                j = Math.round((q.pageY - this.offsetTop) / this.ulv)
            }
        }
        this.ljx();
        if (m && m.bbd()) {
            if (m.nyc(k, j)) {
                return
            }
        }
        if (t && t.bbd()) {
            if (t.nyc(k, j)) {
                clearTimeout(this.npq);
                return
            } else {
                f = true
            }
        }
        if (d) {
            if (d.bbd()) {
                if (d.nyc(k, j, u)) {
                    clearTimeout(this.npq);
                    return
                } else {
                    l = true
                }
            }
        }
        if (n) {
            if (n.bbd()) {
                if (n.nyc(k, j, u)) {
                    clearTimeout(this.npq);
                    return
                } else {
                    l = true
                }
            }
        }
        if (f) {
            this.tvt(this.mho.fob(k, j, null));
            return
        } else {
            if (l) {
                if ((d && d.ozi()) && ((n && n.ozi()) || !n)) {
                    this.huy(this.mho.fob(k, j, null))
                }
                return
            }
        }
        if (this.plj() && !this.tpp && o && w) {
            if (o.nyc(k, j, l)) {
                return
            } else {
                if (w.nyc(k, j, l)) {
                    return
                }
            }
        }
        if (z) {
            if (z.nyc(k, j)) {
                return
            }
        }
        if (p) {
            if (p.nyc(k, j)) {
                return
            }
        }
        if (b && b.bbd()) {
            if (b.nyc(k, j)) {
                return
            }
        }
        if (c) {
            if (c.nyc(k, j, u)) {
                return
            }
        }
        if (v && v.bbd()) {
            if (v.nyc(k, j)) {
                return
            }
        }
        if (this.jas && this.jas.bbd()) {
            if (this.jas.nyc(k, j)) {
                return
            }
        }
        if (this.zwp && this.zwp.bbd()) {
            if (this.zwp.nyc(k, j)) {
                return
            }
        }
        if (g) {
            if (g.nyc(k, j)) {
                return
            }
        }
        if (this.mho) {
            if (this.mho.nyc(k, j, l)) {
                return
            }
        }
        for (var r = 0, s = this.zgl.length; r < s; r++) {
            if (this.zgl[r].nyc(k, j)) {
                return
            }
        }
    };
    this.wga = function (j) {
        if (j.preventDefault) {
            j.preventDefault()
        }
        if (j.stopPropagation) {
            j.stopPropagation()
        }
        if (this.nyr) {
            return
        }
        var k = this.dbq.uxx("topb"),
            d = this.dbq.uxx("autop"),
            g = this.dbq.uxx("settings"),
            c = this.dbq.uxx("betsel"),
            e = this.dbq.uxx("linesel");
        if (d && d.bbd()) {
            if (d.wga()) {
                return
            }
        }
        if (c) {
            if (c.wga()) {
                return
            }
        }
        if (e) {
            if (e.wga()) {
                return
            }
        }
        if (this.jas && this.jas.bbd()) {
            if (this.jas.wga()) {
                return
            }
        }
        if (this.zwp && this.zwp.bbd()) {
            if (this.zwp.wga()) {
                return
            }
        }
        if (this.mho) {
            if (this.mho.wga()) {
                return
            }
        }
        if (k) {
            if (k.wga()) {
                return
            }
        }
        if (g) {
            if (g.wga()) {
                return
            }
        }
        for (var f = 0, b = this.zgl.length; f < b; f++) {
            if (this.zgl[f].wga()) {
                return
            }
        }
    };
    this.lkm = function (c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.nyr) {
            return
        }
        var k = false,
            e = false,
            l = this.dbq.uxx("topb"),
            b = this.dbq.uxx("betsel"),
            d = this.dbq.uxx("linesel"),
            g = this.dbq.uxx("finfop"),
            j = this.dbq.uxx("finfoc"),
            f = this.dbq.uxx("autop");
        if (f && f.bbd()) {
            if (f.lkm(c.keyCode)) {
                return
            }
        }
        if (l) {
            if (l.lkm(c.keyCode)) {
                clearTimeout(this.npq);
                return
            } else {
                if (l.bbd() && l.ozi()) {
                    e = true
                }
            }
        }
        if (g) {
            if (g.lkm()) {
                return
            }
        }
        if (j) {
            if (j.lkm(c.keyCode)) {
                return
            }
        }
        if (b) {
            if (b.bbd()) {
                if (b.lkm(c.keyCode)) {
                    clearTimeout(this.npq);
                    return
                } else {
                    k = true
                }
            }
        }
        if (d) {
            if (d.bbd()) {
                if (d.lkm(c.keyCode)) {
                    clearTimeout(this.npq);
                    return
                } else {
                    k = true
                }
            }
        }
        if (e) {
            this.tvt(this.mho.fob(null, null, c.keyCode));
            return
        } else {
            if (k) {
                if ((b && b.ozi()) && ((d && d.ozi()) || !d)) {
                    this.huy(this.mho.fob(null, null, c.keyCode))
                }
                return
            }
        }
        if (this.jas && this.jas.bbd()) {
            if (this.jas.lkm(c.keyCode)) {
                return
            }
        }
        if (this.zwp && this.zwp.bbd()) {
            if (this.zwp.lkm(c.keyCode)) {
                return
            }
        }
        if (this.mho) {
            if (this.mho.lkm(c.keyCode)) {
                return
            }
        }
    };
    this.ccd = function (c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.nyr) {
            return
        }
        var b = this.dbq.uxx("autop"),
            d = this.dbq.uxx("topb");
        if (b && b.bbd()) {
            if (b.ccd()) {
                return
            }
        }
        if (this.jas && this.jas.bbd()) {
            if (this.jas.ccd()) {
                return
            }
        }
        if (this.zwp && this.zwp.bbd()) {
            if (this.zwp.ccd()) {
                return
            }
        }
        if (this.mho) {
            if (this.mho.ccd(c.keyCode)) {
                return
            }
        }
        if (d) {
            if (d.ccd()) {
                return
            }
        }
    };
    this.vbg = function () {
        return (bmx.suj.iqy() && !this.imi)
    };
    this.fnc = function () {
        return (bmx.suj.iqy() && !this.lys)
    };
    this.dma = function () {
        return (this.drd === true && this.whm.csz === true)
    };
    this.rfq = function () {
        if (this.dma() === true) {
            this.whm.lry("melody")
        }
    };
    this.dui = function () {
        if (this.dma() === true) {
            this.whm.mvq("melody")
        }
    };
    this.sbx = function (c, b) {
        if (this.dma() === true && this.mwa === true) {
            this.whm.wch("melody", c, b)
        }
    };
    this.ieu = function () {
        return false
    };
    this.cop = function () {
        return 1
    };
    this.tgq = function () {
        return 0
    };
    this.fvo = function (b) {
        this.tiq = this.ocl(b);
        this.width = this.tiq.canvas.rlq.width;
        this.height = this.tiq.canvas.rlq.height;
        this.zfg();
        this.jpz();
        this.sqw()
    };
    this.zrq = function () {
        this.style = new rzj()
    };
    this.ocl = function (b) {
        this.usz = b;
        if (b == bmx.tiq.fif) {
            return new vzh()
        } else {
            if (b == bmx.tiq.htx) {
                return new gbt()
            } else {
                if (b == bmx.tiq.iyd) {
                    return new xvf()
                } else {
                    if (b == bmx.tiq.dph) {
                        return new cac()
                    } else {
                        if (b == bmx.tiq.yiy) {
                            return new zns()
                        } else {
                            if (b == bmx.tiq.mcm) {
                                return new spq()
                            } else {
                                if (b == bmx.tiq.qmi) {
                                    return new kvc()
                                } else {
                                    if (b == bmx.tiq.zuq) {
                                        return new lgl()
                                    } else {
                                        if (b == bmx.tiq.cza) {
                                            return new sgr()
                                        } else {
                                            if (b == bmx.tiq.agk) {
                                                return new fwr()
                                            } else {
                                                if (b == bmx.tiq.nzl) {
                                                    return new rtu()
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
    this.sqw = function () {};
    this.cmk = function (b) {
        if (this.lwf) {
            this.orp();
            this.flb(b);
            this.nhy()
        } else {
            this.lkc()
        }
    };
    this.orp = function () {
        this.canvas.width = 0;
        if (this.kdp === false) {
            this.wda.style.marginTop = (-this.height / 2 + this.hfp()) + "px";
            this.wda.style.marginLeft = (-this.width / 2) + "px"
        } else {
            this.wda.style.left = "0px";
            this.wda.style.top = "0px";
            this.wda.style.marginTop = ((this.fxv - this.height) / 2 + this.hfp()) + "px";
            this.wda.style.marginLeft = ((this.jhi - this.width) / 2) + "px"
        }
        this.wda.style.width = (this.width > this.jhi) ? this.jhi + "px" : this.width + "px";
        this.wda.style.height = (this.height > this.fxv) ? this.fxv + "px" : this.height + "px";
        this.canvas.width = Math.round(this.width);
        this.canvas.height = Math.round(this.height);
        if (this.zbh) {
            this.zbh.style.width = this.width + "px";
            this.zbh.style.height = this.height + "px"
        }
        this.width = this.canvas.width;
        this.height = this.canvas.height
    };
    this.flb = function (b) {
        this.ytr();
        this.wyy();
        this.spu();
        this.ehp();
        this.ywr();
        if (!(this.imi && !this.lys)) {
            this.gog()
        }
        if (!this.imi) {
            this.gzu();
            if (this.tiq.std) {
                if (this.dbq.uxx("tops")) {
                    this.iew()
                } else {
                    this.rgt()
                }
            } else {
                this.dbq.qoa("tops")
            }
            if (this.kxc()) {
                this.cwu()
            }
            this.fjm();
            if (this.mno()) {
                this.ypk()
            }
        } else {
            this.fgu()
        }
        if (this.tiq.yef) {
            this.xtb();
            this.dgx()
        }
        if (this.tiq.qnc) {
            this.fwh();
            if (this.plj()) {
                this.hqw()
            }
        }
        if (this.tiq.zaq) {
            this.atp();
            if (!this.tiq.arr) {
                this.ale()
            }
        }
        if (this.tiq.uhx) {
            this.jqr()
        }
        if (this.tiq.arr) {
            this.fji()
        }
        this.bib();
        if (b) {
            this.yqc()
        }
        this.qns();
        this.gvy();
        this.asy()
    };
    this.ytr = function () {
        if (this.mho) {
            var b = (this.imi && this.zdw) ? this.tiq.djt : this.tiq.yrs;
            this.mho.cch(b.rlq);
            this.mho.ilm(b, this.abl);
            if (this.tiq.zfw === true) {
                this.mho.whj(this.style.yrs, this.abl)
            }
        }
    };
    this.wyy = function () {
        if (this.cei) {
            this.cei.cch((this.zie === false) ? this.tiq.cei.rlq : this.tiq.cei.uhs, (this.gqn) ? this.tiq.cei.yik : this.tiq.cei.iig)
        }
        if (this.hpy) {
            this.hpy.cch((this.zie === false) ? this.tiq.hpy.rlq : this.tiq.hpy.uhs, (this.gqn) ? this.tiq.hpy.yik : this.tiq.hpy.iig)
        }
        if (this.pfp) {
            this.pfp.cch((this.zie === false) ? this.tiq.pfp.rlq : this.tiq.pfp.uhs, (this.gqn) ? this.tiq.pfp.yik : this.tiq.pfp.iig)
        }
        if (this.fzm) {
            this.fzm.cch((this.zie === false) ? this.tiq.fzm.rlq : this.tiq.fzm.uhs, (this.gqn) ? this.tiq.fzm.yik : this.tiq.fzm.iig)
        }
        if (this.jwr) {
            this.jwr.cch((this.zie === false) ? this.tiq.jwr.rlq : this.tiq.jwr.uhs, (this.gqn) ? this.tiq.jwr.yik : this.tiq.jwr.iig)
        }
    };
    this.xtb = function () {
        var b = this.dbq.uxx("winp");
        if (b) {
            b.cch(this.tiq.xsu.rlq);
            b.ilm(this.tiq.xsu)
        }
    };
    this.dgx = function () {};
    this.spu = function () {
        if (this.gbk) {
            this.gbk.cch(this.tiq.ghd.rlq);
            this.gbk.whv = this.whv;
            this.gbk.wxm = this.wxm;
            this.gbk.ilm(this.tiq.ghd)
        }
    };
    this.jqr = function () {
        var c = this.dbq.uxx("llinep"),
            b = this.dbq.uxx("rlinep");
        if (c) {
            c.x = this.tiq.zzz.rlq.x;
            c.y = this.tiq.zzz.rlq.y;
            c.ilm(this.tiq.zzz)
        }
        if (b) {
            b.x = this.tiq.pjr.rlq.x;
            b.y = this.tiq.pjr.rlq.y;
            b.ilm(this.tiq.pjr)
        }
    };
    this.fwh = function () {
        var b = this.dbq.uxx("betsel");
        if (b) {
            b.cch(this.tiq.maq.rlq);
            b.ilm(this.tiq.maq)
        }
    };
    this.hqw = function () {
        var b = this.dbq.uxx("linesel");
        if (b) {
            b.cch(this.tiq.lhp.rlq);
            b.ilm(this.tiq.lhp)
        }
    };
    this.iew = function () {
        var b = this.dbq.uxx("tops");
        if (b) {
            b.cch(this.tiq.top.rlq);
            b.aco(this.tiq.std)
        }
    };
    this.gog = function () {
        if (this.jas) {
            this.jas.cch(this.tiq.fye.rlq);
            this.jas.ilm(this.tiq.fye);
            if (this.tiq.zfw === true) {
                this.jas.whj(this.style.fye)
            }
        }
    };
    this.ywr = function () {
        if (this.zwp) {
            var b = (this.imi && this.zdw) ? this.tiq.jvt : this.tiq.ott;
            this.zwp.cch(b.rlq);
            this.zwp.ilm(b);
            if (this.tiq.zfw === true) {
                this.zwp.whj(this.style.ott)
            }
        }
    };
    this.ehp = function () {};
    this.gzu = function () {};
    this.bib = function () {};
    this.yqc = function () {
        if (this.dbq.uxx("tops")) {
            this.jas.ndi(true);
            this.bhx()
        } else {
            this.uqd = null;
            this.jas.jey(this.seu, true)
        }
        this.jas.hdq()
    };
    this.zfg = function () {
        var c = 0 - this.tiq.ghd.rlq.x,
            b = 0 - this.tiq.ghd.rlq.y;
        this.wxm = [
            [{
                x: this.tiq.cei.rlq.x + c,
                y: this.tiq.cei.rlq.y + b
            }, {
                x: this.tiq.cei.rlq.x + c,
                y: this.tiq.cei.rlq.y + b + this.tiq.ghd.gtc
            }, {
                x: this.tiq.cei.rlq.x + c,
                y: this.tiq.cei.rlq.y + b + 2 * this.tiq.ghd.gtc
            }],
            [{
                x: this.tiq.hpy.rlq.x + c,
                y: this.tiq.hpy.rlq.y + b
            }, {
                x: this.tiq.hpy.rlq.x + c,
                y: this.tiq.hpy.rlq.y + b + this.tiq.ghd.gtc
            }, {
                x: this.tiq.hpy.rlq.x + c,
                y: this.tiq.hpy.rlq.y + b + 2 * this.tiq.ghd.gtc
            }],
            [{
                x: this.tiq.pfp.rlq.x + c,
                y: this.tiq.pfp.rlq.y + b
            }, {
                x: this.tiq.pfp.rlq.x + c,
                y: this.tiq.pfp.rlq.y + b + this.tiq.ghd.gtc
            }, {
                x: this.tiq.pfp.rlq.x + c,
                y: this.tiq.pfp.rlq.y + b + 2 * this.tiq.ghd.gtc
            }],
            [{
                x: this.tiq.fzm.rlq.x + c,
                y: this.tiq.fzm.rlq.y + b
            }, {
                x: this.tiq.fzm.rlq.x + c,
                y: this.tiq.fzm.rlq.y + b + this.tiq.ghd.gtc
            }, {
                x: this.tiq.fzm.rlq.x + c,
                y: this.tiq.fzm.rlq.y + b + 2 * this.tiq.ghd.gtc
            }],
            [{
                x: this.tiq.jwr.rlq.x + c,
                y: this.tiq.jwr.rlq.y + b
            }, {
                x: this.tiq.jwr.rlq.x + c,
                y: this.tiq.jwr.rlq.y + b + this.tiq.ghd.gtc
            }, {
                x: this.tiq.jwr.rlq.x + c,
                y: this.tiq.jwr.rlq.y + b + 2 * this.tiq.ghd.gtc
            }]
        ]
    };
    this.jpz = function () {
        var e = 0 - this.tiq.ghd.rlq.x,
            b = 0 - this.tiq.ghd.rlq.y;
        this.whv = [];
        for (var g = 0, f = this.tiq.whv.length; g < f; g++) {
            this.whv[g] = [];
            for (var d = 0, k = 0, c = this.tiq.whv[g].length; d < c; d += 2, k += 1) {
                this.whv[g][k] = {
                    x: this.tiq.whv[g][d] + e,
                    y: this.tiq.whv[g][d + 1] + b
                }
            }
        }
    };
    this.lii = function () {
        this.zgq = [];
        if (this.fnw() === false && this.eee != "") {
            this.zgq.push(this.eee)
        }
        this.zgq.push(this.language.afs);
        this.zgq.push(this.language.qco + " " + this.ait(this.oqs()) + ((this.vbg() === true) ? "|" : " ") + this.language.jqf + " " + this.ait(this.skp()));
        this.zgq.push(this.language.evb)
    };
    this.wbm = function () {
        this.twx = [];
        this.twx[0] = this.language.lmg;
        this.twx[1] = this.language.hsr
    };
    this.dfa = function () {
        this.gms = [];
        this.gms[0] = this.language.gpe;
        this.gms[1] = this.language.ixo
    };
    this.eqz = function () {
        lxu.prototype.eqz.call(this);
        if (this.wvq() === true) {
            this.whm.ymo(true);
            this.whm.owp(bmx.vbp.value45 === bmx.xcj.wsy || bmx.vbp.value45 === bmx.xcj.cul)
        }
    };
    this.gcw = function () {
        var c = "";
        this.whm.eju("spin", null, false, this.nfm + "reels");
        this.whm.eju("stop1", null, false, this.nfm + "stop_reel2");
        this.whm.eju("stop2", null, false, this.nfm + "stop_reel2");
        this.whm.eju("start", null, false, this.nfm + "onstart");
        if (this.dma() === true) {
            this.whm.eju("melody", null, true, this.nfm + "background")
        }
        if (this.umu > 0) {
            this.whm.eju("wincountfade", null, false, this.nfm + "count_fade")
        }
        c = bmx.vbp.value30 + "/slot/sounds/";
        this.whm.eju("winfinal", this.tnc, false, c + "winfinal");
        if (this.fby <= 2) {
            this.whm.eju("wincount", null, false, c + "countup" + this.fby + "1");
            this.whm.eju("wincount1", null, false, c + "countup" + this.fby + "2");
            this.whm.eju("wincount3", null, false, c + "countup" + this.fby + "3");
            this.whm.eju("wincount5", null, false, c + "countup" + this.fby + "4");
            if (this.whm.csz === false) {
                this.whm.eju("wincount2", null, false, c + "countup" + this.fby + "2");
                this.whm.eju("wincount4", null, false, c + "countup" + this.fby + "3");
                this.whm.eju("wincount6", null, false, c + "countup" + this.fby + "4")
            }
            this.whm.eju("winline", null, false, c + "winline");
            this.whm.eju("collect", null, false, c + "collect");
            this.whm.eju("collectend", null, false, c + "collect1")
        }
        c = bmx.vbp.value30 + "/basic/sounds/";
        this.whm.eju("silence", null, false, c + "silence");
        this.whm.eju("audioon", null, false, c + "audio_on");
        if (!bmx.vbp.value55) {
            if (this.vbg() === false) {
                this.whm.eju("btn", null, false, c + "btn");
                this.whm.eju("auto_on", null, false, c + "auto_on");
                this.whm.eju("auto_off", null, false, c + "auto_off");
                this.whm.eju("gamble_on", null, false, c + "gamble_on");
                this.whm.eju("gamble_off", null, false, c + "gamble_off");
                if (this.dma() === false && this.fby <= 2) {
                    this.whm.eju("gambleprop", null, true, c + "gambleprop")
                }
                for (var b = 0; b < 12; b++) {
                    this.whm.eju("step" + b, null, false, c + "step" + (b + 1))
                }
                this.whm.eju("maxstep", null, false, c + "maxstep")
            } else {
                this.whm.eju("btn", null, false, c + "btn2");
                this.whm.eju("auto_on", null, false, c + "auto_on");
                this.whm.eju("auto_off", null, false, c + "auto_off")
            }
        } else {
            this.whm.eju("btn", null, false, c + "ama_btn");
            if (this.vbg() === false) {
                this.whm.eju("gamble_on", null, false, c + "ama_gamble_on");
                this.whm.eju("gamble_off", null, false, c + "ama_gamble_off");
                if (this.dma() === false && this.fby <= 2) {
                    this.whm.eju("gambleprop", null, true, c + "ama_gambleprop")
                }
                for (var b = 0; b < 12; b++) {
                    this.whm.eju("step" + b, null, false, c + "ama_step")
                }
                this.whm.eju("maxstep", null, false, c + "ama_step")
            }
        }
        if (this.njk() === true) {
            this.whm.eju("jackpot", null, false, c + "jackpot");
            if (this.bhp()) {
                this.whm.eju("mystery_jackpot", null, false, c + "mystery_jackpot")
            }
        }
        if (this.vbg() === false) {
            this.whm.eju("panel_in", null, false, c + "panel_in");
            this.whm.eju("panel_out", null, false, c + "panel_out")
        }
        c = bmx.vbp.value30 + "/gamble/sounds/";
        this.whm.eju("gamble1", null, false, c + "deal_2");
        this.whm.eju("gamble2", null, false, c + "deal_2");
        this.whm.eju("gamblewin1", null, false, c + "win1");
        this.whm.eju("gamblewin2", null, false, c + "win2");
        this.whm.eju("gamblewin3", null, false, c + "win3");
        this.kkc();
        this.bbj();
        this.yly()
    };
    this.kkc = function () {
        for (var b = 0; b < this.crf; b++) {
            this.whm.eju("symb" + b, this.hjb, false, this.nfm + "symb" + (b + 1))
        }
    };
    this.bbj = function () {
        var b = bmx.vbp.value30 + "/slot/sounds/";
        this.whm.eju("bigwin", null, false, b + "bigwin");
        this.whm.eju("megawin", null, false, b + "megawin");
        this.whm.eju("nicewin", null, false, b + "nicewin")
    };
    this.yly = function () {};
    this.vrg = function () {
        var b = this.klm + this.tiq.type + "/";
        this.whm.vfm("icon", b + "icon_out.png");
        if (this.wvq() === true && (bmx.vbp.value45 === bmx.xcj.wsy || bmx.vbp.value45 === bmx.xcj.cul)) {
            this.whm.vfm("device_info", b + "info_" + ((this.vbg() === true) ? "smartphone.png" : "tablet.png"))
        }
        if (this.syd) {
            this.whm.vfm("winlines", b + "wl.png")
        }
        this.whm.vfm("s_symb", b + "symbols_small.png");
        b = bmx.vbp.value30 + "/basic/images/" + this.tiq.type + "/";
        if (this.njk() === true) {
            this.whm.vfm("jackpot", b + "jackpot.png");
            if (this.bhp()) {
                this.whm.jap(b, "mystery_jackpot.json")
            }
        }
        if (this.vbg() === true) {
            if (this.tiq.zfw === false) {
                this.whm.vfm("btn_back", b + "buttonback.png")
            }
        }
        b = bmx.vbp.value30 + "/slot/images/" + this.tiq.type + "/";
        if (this.vbg() === true) {
            if (this.tiq.zfw === true) {
                this.whm.jap(b, "gui_mobile_v29.json")
            } else {
                this.whm.jap(b, "gui_mobile_v17.json")
            }
        } else {
            if (bmx.vbp.value57 === bmx.ui.rek || this.klc() != null) {
                this.whm.jap(b, "gui_desktop_v27.json")
            } else {
                this.whm.jap(b, "gui_desktop_v17.json")
            }
        }
        if (this.qrt && !this.imi) {
            this.whm.vfm("firework", b + "firework.png")
        }
        this.rdf();
        this.ffi();
        this.hja();
        this.eqh();
        this.umi()
    };
    this.ffi = function () {
        var b = this.klm + this.tiq.type + "/";
        this.whm.vfm("m_back", b + "main.png");
        this.whm.vfm("g_back", b + "gamble.jpg");
        this.whm.vfm("m_win", b + "winPanel.png");
        this.whm.vfm("h_paytable", b + "wthelp.jpg");
        this.whm.vfm("h_winlines", b + "wlhelp.jpg")
    };
    this.hja = function () {
        var c = this.klm + this.tiq.type + "/";
        this.whm.jap(c, "symbols.json");
        for (var b = 0; b < this.crf; b++) {
            this.whm.vfm("anim" + b, c + "symbanim" + (b + 1) + ".jpg")
        }
    };
    this.eqh = function () {
        var b = bmx.vbp.value30 + "/slot/images/" + this.tiq.type + "/";
        this.whm.vfm("wins", b + "wins.png")
    };
    this.rdf = function () {
        var b = bmx.vbp.value30 + "/gamble/images/" + this.tiq.type + "/";
        this.whm.vfm("g_red", b + "red_orig.png");
        this.whm.vfm("g_blue", b + "blue_orig.png");
        this.whm.jap(b, "gamble.json")
    };
    this.umi = function () {};
    this.oxq = function (b) {
        var c = this.saw;
        b = (b != null && b === true) ? true : false;
        if (this.yxa && !this.men && !this.tpp) {
            c = c - this.win
        }
        if (this.kjy) {
            c = c - this.kjy.value
        }
        if (!this.tpp) {
            this.sza(c, true, b)
        }
        this.fve(this.totalBet, true);
        this.dbq.psl("tops", "#cxx");
        this.dbq.psl("settings", "#kcq", [this.ait(this.cqx), this.sxk, this.ait(this.zyq())])
    };
    this.cxx = function (p, o, q, D, f) {
        if (bmx.qsx.nyy()) {
            var b = (p != null && o != null && q != null && D != null),
                d = (b === true) ? new ljp(p, o, q, D) : ((bmx.qsx.tiq.zfw === true) ? new ljp(bmx.qsx.tiq.yrs.rlq.x, bmx.qsx.tiq.yrs.rlq.y, bmx.qsx.tiq.yrs.rlq.width, bmx.qsx.tiq.yrs.rlq.height) : new ljp(bmx.qsx.tiq.qsx.rlq.x, bmx.qsx.tiq.qsx.rlq.y, bmx.qsx.tiq.qsx.rlq.width, bmx.qsx.tiq.qsx.rlq.height)),
                A = bmx.qsx.context2D,
                g = (bmx.qsx.lys === true) ? bmx.qsx.style.qsx.bfx : bmx.qsx.style.qsx.backgroundColor,
                G = bmx.qsx.dbq.uxx("stats"),
                c = bmx.qsx.dbq.uxx("history"),
                E = bmx.qsx.dbq.uxx("topb"),
                j = bmx.qsx.dbq.uxx("topi"),
                k = bmx.qsx.dbq.uxx("betsel"),
                s = bmx.qsx.dbq.uxx("linesel"),
                t = bmx.qsx.dbq.uxx("tops"),
                l = bmx.qsx.dbq.uxx("winp"),
                m = bmx.qsx.dbq.uxx("fwinp"),
                v = bmx.qsx.dbq.uxx("llinep"),
                I = bmx.qsx.dbq.uxx("rlinep"),
                H = bmx.qsx.dbq.uxx("finfop"),
                z = bmx.qsx.dbq.uxx("finfoc"),
                r = bmx.qsx.dbq.uxx("autop"),
                F = bmx.qsx.dbq.qvh("jackpots"),
                n = bmx.qsx.dbq.uxx("jwp"),
                u = bmx.qsx.dbq.uxx("mjwp"),
                e = bmx.qsx.dbq.uxx("settings");
            bmx.qsx.fgg = false;
            if (bmx.qsx.zie === true) {
                bmx.qsx.slp()
            }
            A.save();
            if (b) {
                A.beginPath();
                A.rect(p, o, q, D);
                A.closePath();
                A.clip()
            }
            if (f == null || f === false) {
                A.clearRect(0, 0, bmx.qsx.width, bmx.qsx.height)
            }
            if (bmx.qsx.tiq.avb) {
                if (bmx.qsx.zie === false) {
                    bmx.suj.jbt(bmx.qsx.context2D, bmx.qsx.tiq.qsx.rlq.x - bmx.qsx.tiq.qsx.lbt, bmx.qsx.tiq.qsx.rlq.y - bmx.qsx.tiq.qsx.lbt, bmx.qsx.tiq.qsx.rlq.width + 2 * bmx.qsx.tiq.qsx.lbt, bmx.qsx.tiq.qsx.rlq.height + 2 * bmx.qsx.tiq.qsx.lbt, g, 1)
                } else {
                    bmx.suj.jbt(bmx.qsx.context2D, bmx.qsx.tiq.qsx.rlq.x - bmx.qsx.tiq.qsx.lbt, bmx.qsx.tiq.qsx.rlq.y - bmx.qsx.tiq.qsx.lbt, bmx.qsx.tiq.qsx.rlq.width + 2 * bmx.qsx.tiq.qsx.lbt, bmx.qsx.tiq.qsx.rlq.height + 2 * bmx.qsx.tiq.qsx.lbt, null, 0, g, bmx.qsx.tiq.qsx.lbt, 1)
                }
            }
            if (c) {
                c.cxx()
            }
            if (j) {
                j.cxx()
            }
            if (t) {
                t.cxx()
            }
            if (G && G.bbd()) {
                G.cxx()
            } else {
                if (bmx.qsx.jas && bmx.qsx.jas.bbd()) {
                    bmx.qsx.jas.cxx()
                } else {
                    if (bmx.qsx.zwp && bmx.qsx.zwp.bbd()) {
                        bmx.qsx.zwp.cxx()
                    } else {
                        if (bmx.qsx.zie) {
                            A.drawImage(bmx.qsx.ssn, bmx.qsx.tiq.mug.rlq.x, bmx.qsx.tiq.mug.rlq.y)
                        } else {
                            A.drawImage(bmx.qsx.fqe, bmx.qsx.tiq.mug.rlq.x, bmx.qsx.tiq.mug.rlq.y)
                        }
                        if (l && l.bbd()) {
                            l.cxx()
                        } else {
                            if (m && m.bbd()) {
                                m.cxx()
                            }
                        }
                        if (v) {
                            v.cxx()
                        }
                        if (I) {
                            I.cxx()
                        }
                        if (bmx.qsx.zie === false) {
                            for (var B = 0, C = bmx.qsx.zgl.length; B < C; B++) {
                                if (bmx.qsx.zgl[B]) {
                                    bmx.qsx.zgl[B].cxx()
                                }
                            }
                        }
                        if (bmx.qsx.gbk) {
                            bmx.qsx.gbk.cxx()
                        }
                        if (bmx.qsx.mho) {
                            bmx.qsx.mho.cxx()
                        }
                        for (var B = 0, C = F.length; B < C; B++) {
                            F[B].cxx()
                        }
                        if (n) {
                            if (n.bbd()) {
                                bmx.qsx.anb(A, d)
                            }
                            n.cxx()
                        }
                        if (u) {
                            if (u.bbd()) {
                                bmx.qsx.anb(A, d)
                            }
                            u.cxx()
                        }
                        if (H) {
                            if (H.bbd()) {
                                bmx.qsx.anb(A, d)
                            }
                            H.cxx()
                        }
                        if (z) {
                            if (z.bbd()) {
                                bmx.qsx.anb(A, d)
                            }
                            z.cxx()
                        }
                    }
                }
            }
            if (k) {
                k.cxx()
            }
            if (s) {
                s.cxx()
            }
            if (E) {
                E.cxx()
            }
            if (r) {
                r.cxx()
            }
            if (e) {
                e.cxx()
            }
            A.restore()
        }
    };
    this.anb = function (b, c) {
        this.fgg = true;
        bmx.suj.jbt(b, c.x, c.y, c.width, c.height, "black", 0.5)
    };
    this.bcb = function () {
        for (var c = 0, b = this.zgl.length; c < b; c++) {
            if (this.zgl[c] && this.fzn[c] === true) {
                this.zgl[c].cxx()
            }
        }
    };
    this.slp = function () {
        var d = this.gly,
            c = this.whm.wez("m_back"),
            f = this.whm.wez("f_back");
        if (this.imi && this.zdw && this.style.qsx.ipl) {
            c = this.whm.wez("m_m_back");
            f = this.whm.wez("m_f_back")
        }
        if (this.nyy()) {
            d.save();
            if (this.abl) {
                d.drawImage(f, 0, 0)
            } else {
                d.drawImage(c, 0, 0)
            }
            for (var e = 0, b = this.zgl.length; e < b; e++) {
                this.zgl[e].cxx()
            }
            d.restore()
        }
    };
    this.lfw = function () {
        var d = bmx.qsx.boz,
            g = (bmx.qsx.tiq.mug.rlq.width - bmx.qsx.tiq.qsx.rlq.width) / 2,
            e = 0,
            c = (bmx.qsx.abl) ? bmx.qsx.whm.wez("f_back") : bmx.qsx.whm.wez("m_back"),
            k = (bmx.qsx.abl) ? bmx.qsx.whm.wez("f_left") : bmx.qsx.whm.wez("m_left"),
            j = (bmx.qsx.abl) ? bmx.qsx.whm.wez("f_right") : bmx.qsx.whm.wez("m_right");
        if (bmx.qsx.imi && bmx.qsx.zdw && bmx.qsx.style.qsx.ipl) {
            c = (bmx.qsx.abl) ? bmx.qsx.whm.wez("m_f_back") : bmx.qsx.whm.wez("m_m_back")
        }
        d.save();
        d.clearRect(0, 0, bmx.qsx.tiq.mug.rlq.width, bmx.qsx.tiq.mug.rlq.height);
        d.drawImage(c, g, e);
        if (bmx.qsx.usz === bmx.tiq.agk || bmx.qsx.usz === bmx.tiq.nzl) {
            if (k) {
                d.drawImage(k, 0, 0)
            }
            if (j) {
                d.drawImage(j, bmx.qsx.tiq.mug.rlq.width - j.width, 0)
            }
        }
        d.restore();
        if (bmx.qsx.zie) {
            d = bmx.qsx.gtf;
            d.save();
            d.drawImage(bmx.qsx.fqe, 0, 0);
            for (var f = 0, b = bmx.qsx.zgl.length; f < b; f++) {
                d.clearRect(bmx.qsx.zgl[f].x + g, bmx.qsx.zgl[f].y + e, bmx.qsx.zgl[f].width, bmx.qsx.zgl[f].height)
            }
            d.restore()
        }
    };
    this.nti = function (f) {
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
        if (this.rea < 0) {
            for (var d = 0; d < f; d++) {
                this.xfn[d] = c[e];
                e = (e < c.length - 1) ? e + 1 : 0
            }
            this.yui = 0;
            this.qka = new Date().getTime();
            this.uyj()
        }
    };
    this.yrz = function () {
        clearTimeout(this.rea);
        this.rea = -1;
        bmx.suj.lta(this.canvas, this.huh, this.ulv);
        if (this.xcb != null) {
            bmx.suj.lta(this.xcb, this.huh, this.ulv, ((this.tiq.xcb.rlq.x) - ((this.tiq.xcb.rlq.x + this.tiq.xcb.rig) / 2 * (1 - this.huh))), ((this.tiq.xcb.rlq.y) - ((this.tiq.xcb.rlq.y + this.tiq.xcb.xtn) / 2 * (1 - this.ulv))))
        }
    };
    this.uyj = function () {
        var b = bmx.qsx.pnt,
            d = new Date().getTime(),
            c = null;
        if (bmx.qsx.yui >= bmx.qsx.xfn.length) {
            bmx.qsx.yrz()
        } else {
            c = bmx.qsx.xfn[bmx.qsx.yui];
            bmx.suj.lta(bmx.qsx.canvas, bmx.qsx.huh * c.sx, bmx.qsx.ulv * c.sy, c.tx, c.ty, c.rx, c.ry);
            if (bmx.qsx.xcb != null) {
                bmx.suj.lta(bmx.qsx.xcb, bmx.qsx.huh * c.sx, bmx.qsx.ulv * c.sy, ((bmx.qsx.tiq.xcb.rlq.x) - ((bmx.qsx.tiq.xcb.rlq.x + bmx.qsx.tiq.xcb.rig) / 2 * (1 - bmx.qsx.huh * c.sx))) + c.tx, ((bmx.qsx.tiq.xcb.rlq.y) - ((bmx.qsx.tiq.xcb.rlq.y + bmx.qsx.tiq.xcb.xtn) / 2 * (1 - bmx.qsx.ulv * c.sy))) + c.ty, c.rx, c.ry)
            }
            bmx.qsx.yui++;
            b = bmx.qsx.pnt + (bmx.qsx.yui * bmx.qsx.pnt - (d - bmx.qsx.qka));
            if (b < 10) {
                b = 10
            }
            bmx.qsx.rea = setTimeout(bmx.qsx.uyj, b)
        }
    };
    this.qsk = function () {
        clearTimeout(bmx.qsx.bhj);
        if (bmx.qsx.tpy) {
            if (bmx.qsx.kns) {
                if (!bmx.qsx.qhe && bmx.qsx.zbd()) {
                    setTimeout(bmx.qsx.goa, 2)
                }
            } else {
                if (!bmx.qsx.abl) {
                    if (bmx.qsx.win > 0 && !bmx.qsx.men) {
                        if (bmx.qsx.fzb) {
                            bmx.qsx.liu();
                            if (bmx.qsx.xyl()) {
                                bmx.qsx.tpy = false;
                                bmx.qsx.mho.rsc(false);
                                setTimeout(bmx.qsx.djr, 400)
                            }
                        } else {
                            if (bmx.qsx.yxt) {
                                bmx.qsx.gej()
                            } else {
                                if (!(bmx.qsx.fzb || bmx.qsx.yxt)) {
                                    if (bmx.qsx.xyl()) {
                                        bmx.qsx.tpy = false;
                                        bmx.qsx.mho.rsc(false);
                                        bmx.qsx.djr()
                                    } else {
                                        bmx.qsx.liu()
                                    }
                                }
                            }
                        }
                    } else {
                        if (!bmx.qsx.kns) {
                            if (bmx.qsx.xxz) {
                                bmx.qsx.cea();
                                bmx.qsx.gzy();
                                return
                            } else {
                                if (bmx.qsx.mup) {
                                    bmx.qsx.cea();
                                    bmx.qsx.upp();
                                    return
                                }
                            }
                            bmx.qsx.mcp = true;
                            bmx.qsx.tpy = false;
                            if (bmx.qsx.vbg() === true) {
                                bmx.qsx.nmo = (!bmx.qsx.ott) ? 1 : 0
                            } else {
                                if (bmx.vbp.value62 === true) {
                                    bmx.qsx.nmo = 0;
                                    if (bmx.qsx.lmc) {
                                        bmx.qsx.nmo |= 2
                                    }
                                    if (bmx.qsx.ott) {
                                        bmx.qsx.nmo |= 4
                                    }
                                } else {
                                    bmx.qsx.nmo = (bmx.qsx.lmc && !bmx.qsx.ott) ? 1 : 0
                                }
                            }
                            if (bmx.qsx.tpp || (bmx.qsx.saw >= bmx.qsx.zyq() && bmx.qsx.zyq() >= bmx.qsx.wfh)) {
                                bmx.qsx.mxz();
                                for (var c = 0, b = bmx.qsx.zgl.length; c < b; c++) {
                                    bmx.qsx.hmu[c] = -1;
                                    if (bmx.qsx.zgl[c]) {
                                        bmx.qsx.zgl[c].ove(bmx.qsx.ces[0])
                                    }
                                }
                                bmx.qsx.mxi();
                                bmx.qsx.afm({
                                    type: "roundStart",
                                    sender: bmx.qsx.clm,
                                    lang: sessionStorage.sessionValue1.toUpperCase(),
                                    data: {
                                        totalBet: bmx.qsx.ait(bmx.qsx.totalBet)
                                    }
                                });
                                bmx.qsx.ykl();
                                bmx.qsx.lwi();
                                bmx.qsx.tsc.play(bmx.qsx.sxk, bmx.qsx.hgw, bmx.qsx.nmo);
                                bmx.qsx.mho.rsc(false);
                                bmx.qsx.mho.bco.psl("start", "#giu", [true])
                            } else {
                                bmx.qsx.fxa();
                                bmx.qsx.cea();
                                bmx.qsx.mho.rsc(true);
                                bmx.qsx.psn(true);
                                bmx.qsx.tpy = true
                            }
                            bmx.qsx.sld()
                        }
                    }
                } else {
                    if (bmx.qsx.qds > 0) {
                        if (bmx.qsx.fzb) {
                            bmx.qsx.liu()
                        } else {
                            if (!(bmx.qsx.tli || bmx.qsx.mcp)) {
                                bmx.qsx.ztx()
                            } else {
                                bmx.qsx.tva()
                            }
                        }
                    }
                    if (bmx.qsx.bth > 0 && !(bmx.qsx.bnw && !bmx.qsx.sgy)) {
                        if (bmx.qsx.mup) {
                            bmx.qsx.cea();
                            bmx.qsx.upp();
                            return
                        }
                        bmx.qsx.mcp = true;
                        bmx.qsx.tpy = false;
                        bmx.qsx.mxz();
                        for (var c = 0, b = bmx.qsx.zgl.length; c < b; c++) {
                            bmx.qsx.hmu[c] = -1;
                            if (bmx.qsx.zgl[c]) {
                                bmx.qsx.zgl[c].ove(bmx.qsx.ces[0])
                            }
                        }
                        bmx.qsx.yai();
                        if (bmx.qsx.vbg() && bmx.qsx.bth == 1) {
                            bmx.qsx.nmo = (!bmx.qsx.ott) ? 1 : 0
                        } else {
                            if (bmx.vbp.value62 === true) {
                                bmx.qsx.nmo = 0;
                                if (bmx.qsx.klc() == null && bmx.vbp.value44.e && bmx.qsx.bth == 1) {
                                    if (bmx.qsx.wvk) {
                                        bmx.qsx.nmo |= 2
                                    }
                                } else {
                                    if (bmx.qsx.lmc) {
                                        bmx.qsx.nmo |= 2
                                    }
                                }
                                if (bmx.qsx.ott) {
                                    bmx.qsx.nmo |= 4
                                }
                            } else {
                                if (bmx.qsx.klc() == null && bmx.vbp.value44.e && bmx.qsx.bth == 1) {
                                    bmx.qsx.nmo = (bmx.qsx.wvk && !bmx.qsx.ott) ? 1 : 0
                                } else {
                                    bmx.qsx.nmo = (bmx.qsx.lmc && !bmx.qsx.ott) ? 1 : 0
                                }
                            }
                        }
                        bmx.qsx.lwi();
                        bmx.qsx.tsc.rpm(bmx.qsx.sxk, bmx.qsx.hgw, bmx.qsx.nmo);
                        bmx.qsx.mho.rsc(false);
                        bmx.qsx.mho.bco.psl("start", "#giu", [true]);
                        bmx.qsx.kqr()
                    }
                }
            }
        } else {
            if (!bmx.qsx.opz && bmx.qsx.kns && !bmx.qsx.qhe && bmx.qsx.zbd()) {
                bmx.qsx.fsc = true
            }
        }
    };
    this.msp = function () {
        var b = bmx.qsx.dbq.uxx("topi"),
            d = 0,
            c = 0,
            e = 0;
        if (!bmx.vbp.value55) {
            bmx.qsx.whm.mvq("auto_on");
            bmx.qsx.whm.mvq("auto_off")
        }
        if (bmx.qsx.lmc) {
            bmx.qsx.lmc = false;
            bmx.qsx.epb();
            if (bmx.qsx.klc() == null && bmx.vbp.value44.e && bmx.qsx.abl) {
                bmx.qsx.wvk = false
            }
            bmx.qsx.mho.bco.psl("astart", "#kak", [bmx.qsx.lmc]);
            if (!bmx.qsx.kns) {
                bmx.qsx.mho.bco.psl("start", "#gtw", [bmx.qsx.language.start, true])
            }
            if (!bmx.vbp.value55) {
                bmx.qsx.whm.lry("auto_off")
            }
            if (bmx.qsx.apz && !bmx.qsx.lmc && !bmx.qsx.ott && !bmx.qsx.xma() && !bmx.qsx.abl && bmx.qsx.win > 0 && !bmx.qsx.men && !bmx.qsx.yxt && !bmx.qsx.kns) {
                if (!bmx.qsx.mho.bco.psl("gamble", "#tel")) {
                    bmx.qsx.mho.bco.psl("start", "#gtw", [bmx.qsx.language.rrl, true]);
                    bmx.qsx.mho.bco.psl("gamble", "#oxd");
                    bmx.qsx.adr();
                    if (!bmx.qsx.fzb) {
                        bmx.qsx.mho.bco.psl("info", "#mlw", [bmx.qsx.ewo(bmx.qsx.language.bho) + ": " + bmx.qsx.ait(bmx.qsx.win)])
                    }
                    bmx.qsx.hvl()
                }
            }
        } else {
            if (bmx.qsx.klc() != null && bmx.qsx.beq <= 0 && bmx.qsx.vbg() === false) {
                if (b && b.ozi() === true) {
                    bmx.qsx.psn(false);
                    bmx.qsx.mho.rsc(false);
                    bmx.qsx.id = setTimeout(bmx.qsx.uhc, 300)
                }
            } else {
                if (bmx.qsx.klc() == null && bmx.vbp.value44.e && bmx.qsx.abl) {
                    bmx.qsx.wvk = true
                } else {
                    if (bmx.qsx.klc() != null && bmx.qsx.vbg() === true) {
                        bmx.qsx.beq = bmx.qsx.dbq.psl("settings", "#xza");
                        if (bmx.qsx.beq <= 0) {
                            return
                        }
                        d = bmx.qsx.dbq.psl("settings", "#slm");
                        c = bmx.qsx.dbq.psl("settings", "#tdz");
                        e = bmx.qsx.dbq.psl("settings", "#oll");
                        bmx.qsx.qot = (d > 0) ? d : 0;
                        bmx.qsx.yov = (c > 0) ? c : 0;
                        bmx.qsx.hlo = (e > 0) ? e : 0;
                        bmx.qsx.slv(bmx.qsx.klc().o === true || bmx.qsx.style.qsx.ipl == false)
                    }
                }
                bmx.qsx.lmc = true;
                bmx.qsx.mho.bco.psl("astart", "#kak", [bmx.qsx.lmc]);
                if (!bmx.qsx.kns) {
                    bmx.qsx.mho.bco.psl("start", "#gtw", [bmx.qsx.language.start, true])
                }
                if (!bmx.vbp.value55) {
                    bmx.qsx.whm.lry("auto_on")
                }
                if (!bmx.qsx.kns) {
                    if (bmx.qsx.abl || (!bmx.qsx.abl && !(bmx.qsx.win > 0 && bmx.qsx.apz && bmx.qsx.ott && !(bmx.qsx.men || bmx.qsx.yxt)))) {
                        bmx.qsx.qsk()
                    }
                }
            }
        }
        if (b) {
            b.ryq("auto", bmx.qsx.lmc)
        }
    };
    this.uxn = function () {
        if (bmx.ebu == 0 && bmx.qsx.imi === false && bmx.qsx.win > 0 && !bmx.qsx.men && bmx.qsx.xyl()) {
            if (!bmx.qsx.yxt) {
                bmx.qsx.tpy = false;
                bmx.qsx.mho.rsc(false);
                if (bmx.qsx.fzb) {
                    bmx.qsx.liu();
                    setTimeout(bmx.qsx.djr, 400)
                } else {
                    bmx.qsx.djr()
                }
            }
            bmx.qsx.xmq = bmx.qsx.uxn
        } else {
            lxu.prototype.uxn.call(this)
        }
    };
    this.tib = function () {
        if (bmx.qsx.hgw < bmx.qsx.tro.length - 1) {
            if (bmx.qsx.hgw >= bmx.qsx.thl(true)) {
                bmx.qsx.hgw = 0;
                while (bmx.qsx.hgw < bmx.qsx.sme()) {
                    bmx.qsx.hgw++
                }
            } else {
                bmx.qsx.hgw++
            }
        } else {
            bmx.qsx.hgw = 0;
            while (bmx.qsx.hgw < bmx.qsx.sme()) {
                bmx.qsx.hgw++
            }
        }
        bmx.qsx.mtm(false, false);
        if (bmx.qsx.vbg() && bmx.qsx.pcd()) {
            bmx.qsx.mho.bco.psl("betpopup", "#gtw", [bmx.qsx.qzz(bmx.qsx.totalBet)]);
            bmx.qsx.mho.bco.psl("betpopup", "#aco", [true]);
            bmx.qsx.cxx();
            clearTimeout(bmx.qsx.had);
            bmx.qsx.had = setTimeout(bmx.qsx.ljx, 2000)
        }
        if (bmx.qsx.hgw >= bmx.qsx.thl(true)) {
            return true
        }
        return false
    };
    this.mjp = function () {
        if (bmx.qsx.hgw > 0) {
            if (bmx.qsx.hgw <= bmx.qsx.sme()) {
                bmx.qsx.hgw = bmx.qsx.tro.length;
                while (bmx.qsx.hgw > bmx.qsx.thl(true)) {
                    bmx.qsx.hgw--
                }
            } else {
                bmx.qsx.hgw--
            }
        } else {
            bmx.qsx.hgw = bmx.qsx.tro.length;
            while (bmx.qsx.hgw > bmx.qsx.thl(true)) {
                bmx.qsx.hgw--
            }
        }
        if (bmx.qsx.hgw < 0) {
            bmx.qsx.hgw = 0
        }
        bmx.qsx.mtm(false, false);
        if (bmx.qsx.hgw <= bmx.qsx.sme()) {
            return true
        }
        return false
    };
    this.vsb = function () {
        var c = bmx.qsx.sxk,
            b = bmx.qsx.dbq.uxx("betsel"),
            e = bmx.qsx.dbq.uxx("llinep"),
            d = bmx.qsx.dbq.uxx("rlinep");
        c += bmx.qsx.wnj;
        if (c > bmx.qsx.oxg) {
            c = bmx.qsx.dqw
        }
        bmx.qsx.sxk = c;
        if (e) {
            e.grk(c)
        }
        if (d) {
            d.grk(c)
        }
        if (b) {
            b.oxe(bmx.qsx.sme(), bmx.qsx.thl(true))
        }
        bmx.qsx.mtm(true, true);
        bmx.qsx.cxx();
        if (c >= bmx.qsx.oxg) {
            return true
        }
        return false
    };
    this.wvf = function () {
        var c = bmx.qsx.sxk,
            b = bmx.qsx.dbq.uxx("betsel"),
            e = bmx.qsx.dbq.uxx("llinep"),
            d = bmx.qsx.dbq.uxx("rlinep");
        c -= bmx.qsx.wnj;
        if (c < bmx.qsx.dqw) {
            c = bmx.qsx.oxg
        }
        bmx.qsx.sxk = c;
        if (e) {
            e.grk(c)
        }
        if (d) {
            d.grk(c)
        }
        if (b) {
            b.oxe(bmx.qsx.sme(), bmx.qsx.thl(true))
        }
        bmx.qsx.mtm(true, true);
        bmx.qsx.cxx();
        if (c <= bmx.qsx.dqw) {
            return true
        }
        return false
    };
    this.rry = function () {
        var b = bmx.qsx.dbq.uxx("topi"),
            c = bmx.qsx.dbq.uxx("settings");
        if (bmx.qsx.apz && !bmx.qsx.abl && bmx.qsx.win > 0 && !bmx.qsx.kns && !bmx.qsx.ott && !bmx.qsx.lmc) {
            bmx.qsx.uuu()
        } else {
            bmx.qsx.whm.mvq("gamble_on");
            bmx.qsx.whm.mvq("gamble_off");
            bmx.qsx.ott = !bmx.qsx.ott;
            if (bmx.qsx.ott) {
                bmx.qsx.whm.lry("gamble_on")
            } else {
                bmx.qsx.whm.lry("gamble_off")
            }
            if (bmx.qsx.apz && !bmx.qsx.lmc && !bmx.qsx.ott && !bmx.qsx.xma() && !bmx.qsx.abl && bmx.qsx.win > 0 && !bmx.qsx.men && !bmx.qsx.yxt && !bmx.qsx.kns) {
                if (!bmx.qsx.mho.bco.psl("gamble", "#tel")) {
                    bmx.qsx.mho.bco.psl("start", "#gtw", [bmx.qsx.language.rrl, true]);
                    bmx.qsx.mho.bco.psl("gamble", "#oxd");
                    bmx.qsx.adr();
                    if (!bmx.qsx.fzb) {
                        bmx.qsx.mho.bco.psl("info", "#mlw", [bmx.qsx.ewo(bmx.qsx.language.bho) + ": " + bmx.qsx.ait(bmx.qsx.win)])
                    }
                    bmx.qsx.hvl()
                }
            }
            bmx.qsx.mho.bco.psl("gamble", "#kak", [bmx.qsx.ott]);
            if (b) {
                b.ryq("gamble", bmx.qsx.ott)
            }
            if (c) {
                c.bco.psl("gamble", "#dtk", [(bmx.qsx.ott) ? 1 : 0])
            }
        }
    };
    this.hzm = function () {
        if (!bmx.qsx.jas.bbd()) {
            bmx.qsx.tvt();
            if (bmx.qsx.abl) {
                bmx.qsx.jjp()
            }
            bmx.qsx.giz()
        } else {
            bmx.qsx.yaw()
        }
    };
    this.zxa = function () {
        var d = bmx.qsx.dbq.uxx("topb"),
            c = bmx.qsx.dbq.uxx("settings"),
            b = bmx.qsx.dbq.uxx("topi");
        bmx.qsx.qhe = !bmx.qsx.qhe;
        if (b) {
            b.ryq("turbo", bmx.qsx.qhe)
        }
        if (d) {
            d.bco.psl("turbo", "#dtk", [(bmx.qsx.qhe) ? 1 : 0])
        }
        if (c) {
            c.bco.psl("turbo", "#dtk", [(bmx.qsx.qhe) ? 1 : 0])
        }
    };
    this.noc = function () {
        var b = false;
        if (bmx.suj.djn == true) {
            if (bmx.qsx.aay == true) {
                bmx.qsx.aay = false;
                b = bmx.suj.pef();
                setTimeout(bmx.qsx.ahr, 1400)
            }
        } else {
            b = bmx.suj.pef();
            setTimeout(bmx.qsx.ahr, 1400)
        }
    };
    this.ihb = function () {
        if (bmx.qsx.whm.uwu() && !bmx.qsx.fbu) {
            bmx.qsx.fbu = true;
            bmx.qsx.dbq.psl("loading", "#stop");
            setTimeout(bmx.qsx.lfo, 100);
            bmx.qsx.whm.lry("silence");
            if (bmx.suj.kik()) {
                bmx.qsx.noc()
            }
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                webAudioEngine.resume()
            }
        }
    };
    this.zcv = function () {
        var d = bmx.qsx.dbq.uxx("topb"),
            c = bmx.qsx.dbq.uxx("settings"),
            b = bmx.qsx.dbq.uxx("topi");
        bmx.qsx.mwa = !bmx.qsx.mwa;
        if (bmx.qsx.mwa === true) {
            bmx.qsx.rfq();
            if (bmx.qsx.pcd() === false) {
                bmx.qsx.sbx(0, 0)
            }
        } else {
            bmx.qsx.dui()
        }
        if (b) {
            b.ryq("melody", (bmx.qsx.mwa) ? 1 : 0)
        }
        if (d) {
            d.bco.psl("melody", "#dtk", [(bmx.qsx.mwa) ? 1 : 0])
        }
        if (c) {
            c.bco.psl("melody", "#dtk", [(bmx.qsx.mwa) ? 1 : 0])
        }
        bmx.qsx.cxx()
    };
    this.mxi = function () {
        this.opz = false;
        this.ipd = false;
        this.fsc = false;
        this.men = false;
        this.psn(false);
        this.mho.bco.psl("info", "#mlw", [this.language.ymt, true]);
        this.whm.mvq("collectend");
        if (this.dey >= 0) {
            clearTimeout(this.dey);
            this.dey = -1
        }
        this.zbp();
        this.qpz();
        if (this.kns == false) {
            this.uid();
            for (var c = 0, b = this.zgl.length; c < b; c++) {
                this.zgl[c].yil()
            }
            this.kns = true;
            this.vvd = false;
            this.hli = false;
            this.ide();
            this.qka = new Date().getTime();
            if (this.gqn) {
                this.id = window.dmg(this.oqa)
            } else {
                this.id = setTimeout(this.oqa, 10)
            }
        }
    };
    this.yai = function () {};
    this.oqa = function () {
        var c = bmx.qsx.epg,
            e = 0;
        bmx.qsx.fad = 0;
        if (!bmx.qsx.gqn || bmx.qsx.oyv) {
            if (bmx.qsx.bqe == 0) {
                bmx.qsx.qka = new Date().getTime()
            } else {
                e = new Date().getTime();
                c = bmx.qsx.epg + (bmx.qsx.bqe * bmx.qsx.epg - (e - bmx.qsx.qka))
            }
            if (bmx.qsx.hli) {
                c = bmx.qsx.lao
            }
        }
        if (bmx.qsx.bqe > 0 && !bmx.qsx.tpy && bmx.qsx.opz) {
            bmx.qsx.tpy = true
        }
        for (var d = 0, b = bmx.qsx.zgl.length; d < b; d++) {
            if (bmx.qsx.fzn[d] && !bmx.qsx.zgl[d].mzv) {
                if (d == bmx.qsx.soo - 1) {
                    bmx.qsx.zgl[d].ypq(true)
                } else {
                    bmx.qsx.zgl[d].ypq((!bmx.qsx.hli && !bmx.qsx.qhe))
                }
            }
        }
        if (typeof bmx.qsx.asl === "function") {
            bmx.qsx.asl()
        }
        if (bmx.qsx.zie === false) {
            bmx.qsx.bcb()
        } else {
            bmx.qsx.slp()
        }
        if (c <= 0) {
            c = 0
        }
        if (bmx.qsx.php) {
            return
        }
        if (!bmx.qsx.gzr()) {
            bmx.qsx.bqe += 1;
            if (bmx.qsx.gqn && !bmx.qsx.oyv) {
                bmx.qsx.id = window.dmg(bmx.qsx.oqa)
            } else {
                if (c == 0) {
                    bmx.qsx.oqa()
                } else {
                    bmx.qsx.id = setTimeout(bmx.qsx.oqa, c)
                }
            }
        } else {
            bmx.qsx.kns = false;
            bmx.qsx.htk();
            bmx.qsx.bqe = 0;
            bmx.qsx.iro = false;
            bmx.qsx.exy()
        }
    };
    this.asl = function () {};
    this.exy = function () {
        if (bmx.qsx.wzr === false) {
            var d = bmx.qsx.gzr();
            clearTimeout(bmx.qsx.btf);
            for (var c = 0, b = bmx.qsx.zgl.length; c < b && d; c++) {
                if (bmx.qsx.zgl[c].nxh()) {
                    bmx.qsx.zgl[c].kbe();
                    d = false
                }
            }
            if (d) {
                for (var c = 0, b = bmx.qsx.zgl.length; c < b; c++) {
                    bmx.qsx.zgl[c].hei().length = 0;
                    bmx.qsx.zgl[c].dpp().length = 0;
                    bmx.qsx.zgl[c].cif()
                }
                bmx.qsx.tpy = true;
                if (bmx.qsx.xiw()) {
                    bmx.qsx.mmk()
                } else {
                    if (bmx.qsx.zkz() === true) {
                        bmx.qsx.gyz()
                    } else {
                        bmx.qsx.ada()
                    }
                }
            } else {
                bmx.qsx.tpy = false
            }
        } else {
            bmx.qsx.btf = setTimeout(bmx.qsx.exy, 50)
        }
    };
    this.gzr = function () {
        for (var c = 0, b = this.zgl.length; c < b; c++) {
            if (this.zgl[c] && !this.zgl[c].mzv) {
                return false
            }
        }
        return true
    };
    this.zbd = function () {
        return (bmx.vbp.value79 === 0)
    };
    this.goa = function () {
        var c = 0,
            b = bmx.qsx.zgl.length;
        if (!bmx.qsx.hli) {
            bmx.qsx.php = false;
            bmx.qsx.hli = true;
            if (!bmx.qsx.ipd) {
                if (!bmx.qsx.abl) {
                    bmx.qsx.ipd = true;
                    for (c = 0; c < b; c++) {
                        if (bmx.qsx.zgl[c] && bmx.qsx.fzn[c]) {
                            bmx.qsx.zgl[c].ncl(bmx.qsx.hmu[c], bmx.qsx.ces[c] - bmx.qsx.ces[0], bmx.qsx.fyt)
                        }
                    }
                } else {
                    bmx.qsx.ipd = true;
                    for (c = 0; c < b; c++) {
                        if (bmx.qsx.zgl[c] && bmx.qsx.fzn[c]) {
                            bmx.qsx.zgl[c].ncl((bmx.qsx.xqg) ? bmx.qsx.mgi[c] : bmx.qsx.hmu[c], bmx.qsx.ces[c] - bmx.qsx.ces[0], bmx.qsx.fyt)
                        }
                    }
                }
            }
            for (c = 0; c < b; c++) {
                if (bmx.qsx.zgl[c] && bmx.qsx.fzn[c]) {
                    bmx.qsx.zgl[c].fbg()
                }
            }
        }
    };
    this.onc = function () {
        this.php = true;
        this.win = 0;
        for (var c = 0, b = this.zgl.length; c < b; c++) {
            if (this.zgl[c] && !this.zgl[c].mzv) {
                this.zgl[c].rts()
            }
        }
    };
    this.mxz = function () {
        if (this.qhe) {
            this.ces = this.avn;
            this.epg = this.jwg
        } else {
            this.ces = this.vch;
            this.epg = this.rzx
        }
        this.oyv = this.qje()
    };
    this.ide = function () {
        this.whm.lry("spin")
    };
    this.htk = function () {
        this.whm.mvq("spin")
    };
    this.nng = function () {};
    this.qpz = function () {
        if (!this.abl) {
            this.zuo()
        } else {
            if (this.ieu() === true) {
                this.whm.wch("freespinstart", 1, 300)
            }
        }
        for (var c = 0, b = this.zgl.length; c < b; c++) {
            this.zgl[c].mdk = ((c % 2) == 0) ? this.whm.qnj("stop1") : this.whm.qnj("stop2");
            this.zgl[c].sxq().length = 0;
            this.zgl[c].fkh = false;
            this.zgl[c].qyq = null;
            this.zgl[c].mds = null
        }
        for (var c = 0, b = this.wdu.length; c < b; c++) {
            this.wdu[c] = 0
        }
    };
    this.wrg = function (b) {
        if (this.abl === true) {
            if (this.ieu() === true) {
                this.whm.wch("freespinstart", 0, 300)
            }
            this.mho.bco.psl("start", "#gtw", [this.language.start, true])
        } else {
            this.sbx(0, 0);
            this.mho.bco.psl("info", "#dfg");
            if (!this.xma()) {
                this.mho.bco.psl("start", "#gtw", [this.language.rrl, true])
            } else {
                this.mho.bco.psl("start", "#gtw", [this.language.start, true])
            }
        }
        this.mho.rsc(false);
        this.gbk.xfb();
        this.gbk.whr(b)
    };
    this.ada = function () {
        if (!bmx.qsx.abl && bmx.qsx.win >= bmx.qsx.totalBet * bmx.qsx.luz) {
            bmx.qsx.wrg(bmx.qsx.win / bmx.qsx.totalBet)
        } else {
            if (bmx.qsx.abl && bmx.qsx.qds >= bmx.qsx.totalBet * bmx.qsx.luz) {
                bmx.qsx.wrg(bmx.qsx.qds / bmx.qsx.totalBet)
            } else {
                bmx.qsx.nxb()
            }
        }
    };
    this.nxb = function () {
        if (this.win > 0 && !this.abl) {
            this.tli = false;
            this.mcp = false;
            this.khm();
            if (this.rql()) {
                this.mzu()
            } else {
                this.sbx(0, 200);
                this.mho.rsc(false);
                this.id = setTimeout(this.wyg, 200)
            }
        } else {
            if (this.qds > 0 && this.abl) {
                this.tli = false;
                this.mcp = false;
                this.khm();
                if (this.rql()) {
                    this.mzu()
                } else {
                    this.mho.rsc(false);
                    this.id = setTimeout(this.jxn, 200)
                }
            } else {
                this.blw();
                this.wmz = [];
                this.grh = 0;
                if (this.rql()) {
                    this.mzu()
                } else {
                    if (this.wpq()) {
                        this.tbs()
                    } else {
                        if (this.abl && this.bth > 0 || !this.abl) {
                            this.psn(true)
                        }
                        this.rno()
                    }
                }
            }
        }
    };
    this.giz = function () {
        this.fzb = false;
        clearTimeout(this.ork);
        this.pjx(this.win);
        this.zuo();
        this.psn(false);
        this.zbp();
        this.tva();
        this.zbv();
        this.mho.bco.psl("info", "#dfg");
        this.mho.rsc(false);
        this.fpp(false);
        this.jas.xfb();
        this.jas.rsc(true);
        this.dbq.psl("settings", "#hme");
        if (this.tiq.zfw === false) {
            this.mho.bco.psl("setting", "#kak", [this.dbq.psl("settings", "#bbd")])
        }
        if (this.abl === true && this.ieu() === true) {
            this.whm.wch("freespinstart", 0, 0)
        } else {
            if (this.abl === false) {
                this.sbx(0, 0)
            }
        }
    };
    this.yaw = function () {
        this.jas.rsc(false);
        if (!this.abl) {
            this.mho.rsc(true)
        } else {
            this.mho.nfj(true)
        }
        this.psn(true);
        this.fpp(true);
        this.jas.hme();
        if (!this.abl) {
            if (this.win > 0) {
                this.mho.bco.psl("info", "#mlw", [this.ewo(this.language.bho) + ": " + this.ait(this.win)])
            } else {
                this.mho.bco.psl("info", "#nuo", [0])
            }
            this.sbx(1, 200)
        } else {
            this.eev(true);
            this.jjp();
            if (this.ieu() === true) {
                this.whm.wch("freespinstart", 1, 200)
            }
        }
    };
    this.uuu = function () {
        var b = bmx.qsx.mho.bco.uxx("gamble");
        bmx.qsx.rdt();
        if (b) {
            b.pom();
            b.kak(bmx.qsx.ott)
        }
        bmx.qsx.fzb = false;
        clearTimeout(bmx.qsx.ork);
        bmx.qsx.zuo();
        bmx.qsx.zbp();
        bmx.qsx.tva();
        bmx.qsx.zbv();
        clearTimeout(bmx.qsx.sns);
        if (bmx.qsx.abl === false) {
            bmx.qsx.sbx(1, 300)
        }
        bmx.qsx.mho.bco.psl("info", "#dfg");
        bmx.qsx.mho.rsc(false);
        bmx.qsx.psn(false);
        bmx.qsx.fpp(false);
        if (bmx.qsx.zwp) {
            bmx.qsx.zwp.rsc(true);
            bmx.qsx.zwp.xsv(bmx.qsx.saw, bmx.qsx.win);
            bmx.qsx.zwp.bco.psl("history", "#xiu");
            bmx.qsx.zwp.xfb();
            bmx.qsx.zwp.cxp()
        }
    };
    this.tnj = function () {
        if (!bmx.qsx.fxz) {
            bmx.qsx.afm({
                type: "roundEnded",
                sender: bmx.qsx.clm,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    win: bmx.qsx.ait(bmx.qsx.win),
                    balanceAfter: bmx.qsx.ait(bmx.qsx.saw)
                }
            })
        }
        bmx.qsx.blw();
        bmx.qsx.fpp(true);
        if (bmx.qsx.zwp) {
            bmx.qsx.zwp.xsa();
            bmx.qsx.zwp.iko();
            bmx.qsx.zwp.rsc(false);
            bmx.qsx.zwp.aco(false, true)
        }
        bmx.qsx.mho.bco.psl("start", "#gtw", [bmx.qsx.language.start, true]);
        bmx.qsx.men = true;
        if (bmx.qsx.xsi()) {
            bmx.qsx.cea();
            bmx.qsx.mho.rsc(true);
            bmx.qsx.psn(true);
            if (bmx.qsx.win > 0) {
                bmx.qsx.mho.bco.psl("info", "#mlw", [bmx.qsx.ewo(bmx.qsx.language.bho) + ": " + bmx.qsx.ait(bmx.qsx.win)])
            } else {
                bmx.qsx.mho.bco.psl("info", "#nuo", [0])
            }
            bmx.qsx.vdj()
        } else {
            if (bmx.qsx.lmc) {
                bmx.qsx.mho.ocw(true);
                bmx.qsx.bhj = setTimeout(bmx.qsx.viy, 400)
            } else {
                bmx.qsx.mho.rsc(true);
                bmx.qsx.psn(true);
                if (bmx.qsx.win > 0) {
                    bmx.qsx.mho.bco.psl("info", "#mlw", [bmx.qsx.ewo(bmx.qsx.language.bho) + ": " + bmx.qsx.ait(bmx.qsx.win)])
                } else {
                    bmx.qsx.mho.bco.psl("info", "#nuo", [0])
                }
            }
        }
    };
    this.jjp = function () {
        var b = this.dbq.uxx("tops");
        if (b) {
            if (b.mhy() == 1) {
                b.vjs(0)
            } else {
                b.vjs(1)
            }
            this.cxx()
        }
    };
    this.fcr = function () {
        var b = this.dbq.uxx("topi"),
            c = this.dbq.uxx("settings");
        this.ott = !bmx.qsx.ott;
        this.mho.bco.psl("gamble", "#kak", [this.ott]);
        if (b) {
            b.ryq("gamble", this.ott)
        }
        if (c) {
            c.bco.psl("gamble", "#dtk", [(this.ott) ? 1 : 0])
        }
    };
    this.lsx = function () {
        if (this.imi) {
            return false
        }
        var b = new ljp(197, 24, 246, 200),
            c = bmx.vbp[bmx.qsx.language.axc.toLowerCase().replace(/\s/g, "") + (b.y / 4)];
        if (c && c.indexOf(":" + b.mkv() + "/") >= 0) {
            return false
        }
        return true
    };
    this.fxu = function () {
        if (this.hxr === false) {
            this.fbd = 100;
            return
        }
        if (this.lsx()) {
            var c = new Date().getTime(),
                b = c % this.zgl.length,
                d = c % this.zgl[b].tai.length;
            if (this.fbd <= 0 && ((this.abl && this.qds == 0) || (!this.abl && this.win == 0)) && c & 1 == 1) {
                if (this.abl && this.xqg) {
                    this.mgi[b] = d
                } else {
                    this.hmu[b] = d
                }
            } else {
                this.fbd = (this.fbd > 0) ? this.fbd - 1 : 0
            }
        }
    };
    this.wyg = function () {
        bmx.qsx.rmv = 0;
        bmx.qsx.usi();
        bmx.qsx.lnu();
        bmx.qsx.mqj(bmx.qsx.hmu);
        bmx.qsx.dac();
        bmx.qsx.jjz();
        if ((bmx.qsx.hvh || bmx.qsx.uud || bmx.qsx.zie) && bmx.qsx.win > 0 && bmx.qsx.grh > 0 && !bmx.qsx.iro) {
            bmx.qsx.xnz(bmx.qsx.hvh, bmx.qsx.uud)
        }
        if (bmx.qsx.win > 0) {
            if (!bmx.qsx.iro) {
                bmx.qsx.lzs();
                bmx.qsx.mho.rsc(false)
            }
            if (!bmx.qsx.xma()) {
                if (!bmx.qsx.imi) {
                    bmx.qsx.mho.bco.psl("start", "#gtw", [bmx.qsx.language.rrl, true])
                }
            } else {
                bmx.qsx.mho.bco.psl("start", "#gtw", [bmx.qsx.language.start, true])
            }
            bmx.qsx.gjb();
            bmx.qsx.mqf = true;
            bmx.qsx.ira = setTimeout(bmx.qsx.gxu, 10)
        } else {}
    };
    this.jxn = function () {};
    this.gxu = function () {
        if (!bmx.qsx.iro) {
            if (!bmx.qsx.abl) {
                bmx.qsx.qdh()
            } else {
                bmx.qsx.dug()
            }
        }
        if (!bmx.qsx.mcp) {
            if (bmx.qsx.qst) {
                bmx.qsx.cek()
            } else {
                bmx.qsx.eui()
            }
        }
    };
    this.gjb = function () {
        var b = this.mho.bco.uxx("info");
        if (b) {
            if (!this.xma()) {
                if (b.yaj()) {
                    b.mlw(this.language.fhk, true)
                }
            } else {
                b.mlw(this.language.bgj, true)
            }
        }
    };
    this.lzs = function () {};
    this.lay = function () {};
    this.fni = function () {
        for (var b = 0; b < this.oxg; b++) {
            this.jnf[b] *= this.cqx
        }
        this.jnf[this.oxg] *= this.zyq()
    };

    function a(d, c) {
        return c[1] - d[1]
    }
    this.khm = function () {
        var c = [],
            d = 0;
        this.fni();
        this.wmz = [];
        this.grh = 0;
        d = this.jnf[this.oxg];
        for (var b = 0; b < this.oxg; b++) {
            c[b] = [b, this.jnf[b]]
        }
        c.sort(a);
        if (this.apm(d, c)) {
            this.jnf[0] = d;
            this.wmz[0] = this.oxg;
            if (this.jnf[0] > 0) {
                this.grh++
            }
            for (var b = 1; b < this.oxg + 1; b++) {
                this.jnf[b] = c[b - 1][1];
                this.wmz[b] = c[b - 1][0];
                if (this.jnf[b] > 0) {
                    this.grh++
                }
            }
            this.qst = false
        } else {
            for (var b = 0; b < this.oxg; b++) {
                this.jnf[b] = c[b][1];
                this.wmz[b] = c[b][0];
                if (this.jnf[b] > 0) {
                    this.grh++
                }
            }
            this.jnf[this.oxg] = d;
            this.wmz[this.oxg] = this.oxg;
            if (this.jnf[this.oxg] > 0) {
                this.grh++
            }
            this.qst = true
        }
    };
    this.apm = function (c, b) {
        return c > b[0][1]
    };
    this.tfu = function () {
        this.rmv = this.rmv + 1
    };
    this.inn = function () {
        this.fad = this.fad + 1
    };
    this.cek = function () {
        if (!this.men) {
            if (this.rmv < this.wmz.length && this.wmz[this.rmv] < this.fgh.length) {
                if (!this.ptj) {
                    this.usi()
                }
                var b = this.bvv(this.wmz[this.rmv]);
                this.lic = this.gkm(b);
                if (!this.ptj) {
                    this.ysk(b)
                }
                if (this.jnf[this.rmv] > 0) {
                    this.tbw(this.bap, this.lic, this.rmv);
                    this.gbk.xfb();
                    if (!this.tli && !this.iro && this.rmv == 0) {
                        if (this.qpj) {
                            this.whm.lry("symb" + this.bap);
                            if (this.umu > 0) {
                                this.sns = setTimeout(this.xnx, this.umu)
                            }
                        } else {
                            this.hjb()
                        }
                    } else {
                        if (this.zqp) {
                            this.adr()
                        }
                    }
                    this.hyc()
                } else {
                    this.tfu();
                    this.cek()
                }
            } else {
                if (this.zei >= 0 && this.qst && this.rmv <= this.fgh.length) {
                    this.eui();
                    this.mqf = false
                } else {
                    this.kzk()
                }
            }
        }
    };
    this.gkm = function (b) {
        var e = 0,
            c = 0;
        this.lic = 0;
        this.voj = 0;
        this.bap = b[e];
        if (this.bap == this.zei) {
            return 0
        }
        for (var d = e; d < 5; d++) {
            if (this.bap == b[d]) {
                this.lic += 1
            } else {
                break
            }
        }
        if (this.lic == 0) {
            return 0
        }
        c = this.goy[this.bap][this.lic - 1];
        if (c > 0) {
            return this.lic
        }
        return 0
    };
    this.eui = function () {
        if (!this.men) {
            if (!this.ptj) {
                this.usi()
            }
            var b = this.ghl();
            if (b > 0 && this.goy[this.zei][b - 1] > 0) {
                this.tbw(this.zei, b, this.rmv);
                this.gbk.xfb();
                if (!this.tli && !this.iro && this.rmv == 0) {
                    if (this.qpj) {
                        this.whm.lry("symb" + this.zei);
                        if (this.umu > 0) {
                            this.sns = setTimeout(this.xnx, this.umu)
                        }
                    } else {
                        this.hjb()
                    }
                } else {
                    if (this.zqp) {
                        this.adr()
                    }
                }
                this.ypd()
            } else {
                this.kzk()
            }
        }
    };
    this.hyc = function () {
        if (this.fzb && this.lmc || !this.lmc) {
            if (!(this.ott && this.apz && !this.fzb && !this.iro)) {
                this.bpo([this.wmz[this.rmv] + 1]);
                if (this.smu && this.lmc && this.fad > 0 && !this.iro) {
                    this.gbk.hyc(this.wmz[this.rmv], this.rel, this.usj, this.bap, this.voj, this.lic, true, true)
                } else {
                    this.gbk.hyc(this.wmz[this.rmv], this.rel, this.usj, this.bap, this.voj, this.lic, true, false)
                }
            } else {
                if (!this.lec) {
                    this.bpo([this.wmz[this.rmv] + 1]);
                    if (this.smu) {
                        this.gbk.hyc(this.wmz[this.rmv], this.rel, this.usj, this.bap, this.voj, this.lic, true, true)
                    } else {
                        this.gbk.hyc(this.wmz[this.rmv], this.rel, this.usj, this.bap, this.voj, this.lic, false, false)
                    }
                } else {
                    this.mho.bco.psl("win", "#dfg");
                    this.bpo([this.oxg + 1]);
                    this.tfu();
                    this.cek()
                }
            }
        } else {
            if (this.lmc && !this.iro && !this.lec) {
                this.bpo([this.wmz[this.rmv] + 1]);
                if (this.smu) {
                    this.gbk.hyc(this.wmz[this.rmv], this.rel, this.usj, this.bap, this.voj, this.lic, true, true)
                } else {
                    this.gbk.hyc(this.wmz[this.rmv], this.rel, this.usj, this.bap, this.voj, this.lic, false, false)
                }
            } else {
                this.mho.bco.psl("win", "#dfg");
                this.bpo([this.oxg + 1]);
                this.tfu();
                this.cek()
            }
        }
    };
    this.ypd = function () {
        if (this.fzb && this.lmc || !this.lmc) {
            this.bpo([this.oxg + 1]);
            if (!(this.ott && this.apz && !this.fzb && !this.iro)) {
                if (this.smu && this.lmc && this.fad > 0 && !this.iro) {
                    this.gbk.hyc(-1, this.rel, false, this.zei, this.voj, this.lic, true, true)
                } else {
                    this.gbk.hyc(-1, this.rel, false, this.zei, this.voj, this.lic, true, false)
                }
            } else {
                if (!this.lec) {
                    if (this.smu) {
                        this.gbk.hyc(-1, this.rel, false, this.zei, this.voj, this.lic, true, true)
                    } else {
                        this.gbk.hyc(-1, this.rel, false, this.zei, this.voj, this.lic, false, false)
                    }
                } else {
                    this.mho.bco.psl("win", "#dfg");
                    this.tfu();
                    this.cek()
                }
            }
        } else {
            if (this.lmc && !this.iro && !this.lec) {
                this.bpo([this.oxg + 1]);
                if (this.smu) {
                    this.gbk.hyc(-1, this.rel, false, this.zei, this.voj, this.lic, true, true)
                } else {
                    this.gbk.hyc(-1, this.rel, false, this.zei, this.voj, this.lic, false, false)
                }
            } else {
                this.mho.bco.psl("win", "#dfg");
                this.bpo([this.oxg + 1]);
                this.tfu();
                this.cek()
            }
        }
    };
    this.bpo = function (b) {
        if (this.zcn === true) {
            this.dbq.psl("llinep", "#pjn", [b, true]);
            this.dbq.psl("rlinep", "#pjn", [b, true])
        }
    };
    this.tbw = function (c, d, b) {
        var e = this.mho.bco.uxx("win");
        if (e) {
            if (this.win > 0 && !this.abl) {
                if (this.jnf[b] > 0) {
                    if (c == this.zei) {
                        e.acd(this.language.qis, this.language.win + ": " + this.ait(this.jnf[b]), c, d)
                    } else {
                        e.acd(this.language.lln + " " + (this.wmz[b] + 1) + ": ", this.language.win + ": " + this.ait(this.jnf[b]), c, d)
                    }
                }
            } else {
                if (this.abl && this.qds > 0) {
                    if (this.jnf[b] > 0) {
                        if (this.ocp > 1) {
                            if (c == this.zei) {
                                e.acd(this.language.qis, this.language.win + ": " + this.ait(this.jnf[b]) + " x " + this.ocp, c, d)
                            } else {
                                e.acd(this.language.lln + " " + (this.wmz[b] + 1) + ": ", this.language.win + ": " + this.ait(this.jnf[b]) + " x " + this.ocp, c, d)
                            }
                        } else {
                            if (c == this.zei) {
                                e.acd(this.language.qis, this.language.win + ": " + this.ait(this.jnf[b]), c, d)
                            } else {
                                e.acd(this.language.lln + " " + (this.wmz[b] + 1) + ": ", this.language.win + ": " + this.ait(this.jnf[b]), c, d)
                            }
                        }
                    }
                }
            }
        }
    };
    this.xnx = function () {
        bmx.qsx.whm.lry("wincountfade")
    };
    this.usi = function () {
        for (var b = 0; b < this.rel.length; b++) {
            for (var c = 0; c < this.rel[b].length; c++) {
                this.rel[b][c] = -1
            }
        }
    };
    this.lnu = function () {
        for (var b = 0; b < this.ezd.length; b++) {
            for (var c = 0; c < this.ezd[b].length; c++) {
                this.ezd[b][c] = -1
            }
        }
    };
    this.mqj = function (e) {
        for (var d = 0; d < this.soo; d++) {
            for (var b = 0; b < this.izp; b++) {
                var c = (e[d] - 1 + b >= 0) ? e[d] - 1 + b : this.zgl[d].tai.length + e[d] - 1 + b;
                c = (c > this.zgl[d].tai.length - 1) ? c - (this.zgl[d].tai.length) : c;
                this.ezd[d][b] = this.zgl[d].tai[c]
            }
        }
    };
    this.dac = function () {
        if (this.ptj) {
            for (var d = 0; d < this.fgh.length; d++) {
                if (this.wmz[d] < this.fgh.length) {
                    var c = this.bvv(this.wmz[d]);
                    this.lic = this.gkm(c);
                    if (this.jnf[d] > 0) {
                        for (var b = this.voj; b < this.voj + this.lic; b++) {
                            if (this.htn && c[b] == this.ekd) {
                                this.rel[b][this.fgh[this.wmz[d]][b] - 1] = this.vcs
                            } else {
                                this.rel[b][this.fgh[this.wmz[d]][b] - 1] = c[b]
                            }
                        }
                    }
                }
            }
        }
    };
    this.jjz = function () {
        if (this.ptj) {
            if (this.zei >= 0) {
                var d = 0;
                for (var c = 0; c < this.ezd.length; c++) {
                    for (var b = 0; b < this.ezd[c].length; b++) {
                        if (this.ezd[c][b] == this.zei) {
                            d++
                        }
                    }
                }
                if ((this.jnf[this.fgh.length] > 0 && this.qst) || (this.jnf[0] > 0 && !this.qst)) {
                    for (var c = 0; c < this.ezd.length; c++) {
                        for (var b = 0; b < this.ezd[c].length; b++) {
                            if (this.ezd[c][b] == this.zei) {
                                this.rel[c][b] = this.ezd[c][b]
                            }
                        }
                    }
                }
            }
        }
    };
    this.bvv = function (d) {
        var c = [];
        for (var b = 0; b < this.fgh[d].length; b++) {
            c[b] = this.ezd[b][this.fgh[d][b] - 1]
        }
        return c
    };
    this.ysk = function (c) {
        for (var b = this.voj; b < this.voj + this.lic; b++) {
            if (this.htn && c[b] == this.ekd) {
                this.rel[b][this.fgh[this.wmz[this.rmv]][b] - 1] = this.vcs
            } else {
                this.rel[b][this.fgh[this.wmz[this.rmv]][b] - 1] = c[b]
            }
        }
    };
    this.ghl = function () {
        var d = 0;
        for (var c = 0; c < this.ezd.length; c++) {
            for (var b = 0; b < this.ezd[c].length; b++) {
                if (this.ezd[c][b] == this.zei) {
                    this.rel[c][b] = this.ezd[c][b];
                    d++;
                    break
                }
            }
        }
        return d
    };
    this.azf = function (b) {
        if (((this.htn && b == this.vcs) && this.vcs >= 0) || (b == this.ekd && this.ekd >= 0)) {
            return true
        }
        return false
    };
    this.rno = function () {
        if (this.bnw) {
            this.mho.bco.psl("start", "#gtw", [this.language.start, true]);
            if (!this.abl) {
                this.zbp();
                this.mho.rsc(false);
                this.tjv = setTimeout(this.efi, 600)
            } else {
                this.ozu()
            }
        } else {
            if (!this.abl) {
                this.nkg()
            } else {
                this.ylx()
            }
        }
    };
    this.nkg = function () {
        if (this.win > 0) {
            if (this.ott && this.apz) {
                setTimeout(this.uuu, 400)
            } else {
                if (this.lmc || this.yxa) {
                    if (!this.yxt && !this.men) {
                        if (this.yxa) {
                            this.yxt = true;
                            this.zbp();
                            setTimeout(this.rrl, 400)
                        } else {
                            clearTimeout(this.eyl);
                            this.eyl = setTimeout(this.qsk, 400)
                        }
                    }
                }
            }
        } else {
            this.afm({
                type: "roundEnded",
                sender: this.clm,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    win: this.ait(this.win),
                    balanceAfter: this.ait(this.saw)
                }
            });
            this.mho.bco.psl("info", "#mlw", [this.language.dhz, true]);
            this.iio();
            if (this.cnb > 0 && this.bsc >= this.cnb) {
                this.psn(false);
                this.mho.rsc(false);
                this.cea();
                this.zto()
            } else {
                this.mho.bco.psl("start", "#gtw", [this.language.start, true]);
                if (this.xsi()) {
                    this.cea();
                    this.mho.bco.psl("info", "#xxm", [0]);
                    this.mho.rsc(true);
                    this.psn(true);
                    this.vdj()
                } else {
                    if (this.lmc) {
                        this.bhj = setTimeout(this.viy, 400)
                    } else {
                        this.mho.bco.psl("info", "#xxm", [0]);
                        this.mho.rsc(true);
                        this.psn(true)
                    }
                }
            }
        }
    };
    this.ylx = function () {};
    this.qdo = function () {
        return ((this.lmc || (this.ott && this.apz && !this.fzb)) && this.grh > 1 && this.lec)
    };
    this.yiq = function () {
        var c = [],
            f = [],
            e = (this.qst) ? 0 : 1,
            b = ((this.qst && this.jnf[this.oxg] > 0) || (!this.qst && this.jnf[0] > 0)) ? this.grh - 1 : this.grh;
        for (var d = 0; d < b; d++, e++) {
            c[d] = this.wmz[e];
            f[d] = this.wmz[e] + 1
        }
        this.lev = true;
        this.mcp = true;
        this.lnu();
        this.usi();
        this.mqj((this.abl === true) ? this.mgi : this.hmu);
        this.dac();
        this.jjz();
        this.mho.bco.psl("win", "#mlw", [this.language.win + " " + b + " " + this.language.sxk, true]);
        this.bpo(f);
        this.gbk.stop();
        this.gbk.dzd(c, this.rel);
        this.dey = setTimeout(this.sti, 1000)
    };
    this.sti = function () {
        if (bmx.qsx.dey >= 0 && !bmx.qsx.lmc) {
            bmx.qsx.dey = -1;
            bmx.qsx.zbp()
        }
        if (bmx.qsx.wpq()) {
            bmx.qsx.tbs()
        } else {
            bmx.qsx.rno()
        }
    };
    this.kzk = function () {
        this.tli = true;
        this.iro = true;
        if (!this.abl) {
            if (!this.fzb) {
                if (this.qdo()) {
                    this.yiq()
                } else {
                    this.sti()
                }
            }
            if (!(this.men || this.mcp || ((this.lev) && !this.fzb))) {
                if (!(this.ott && this.apz && !this.fzb)) {
                    this.shg()
                }
            }
        } else {
            if (!this.fzb) {
                if (this.qdo()) {
                    this.yiq()
                } else {
                    this.sti()
                }
            } else {
                if (!(this.men || this.mcp || (this.lev && !this.fzb))) {
                    this.shg()
                } else {}
            }
        }
    };
    this.shg = function () {
        this.iro = true;
        if (!(this.gbk.nxh() || this.dkh)) {
            this.dkh = true;
            if (!this.abl) {
                this.wyg()
            } else {
                this.jxn();
                if (!this.bnw && this.bth > 0) {
                    if (!this.fzb) {
                        this.psn(true);
                        this.mho.nfj(true)
                    }
                }
            }
        }
    };
    this.zkz = function () {
        return false
    };
    this.rql = function () {
        return false
    };
    this.wpq = function () {
        return false
    };
    this.gyz = function () {};
    this.mzu = function () {};
    this.tbs = function () {};
    this.xma = function () {
        return this.bnw
    };
    this.bub = function () {
        if (!bmx.qsx.yxt && !bmx.qsx.men) {
            bmx.qsx.qsk()
        }
    };
    this.viy = function () {
        if (bmx.qsx.klc() != null && (bmx.qsx.beq <= 0 || (bmx.qsx.abl === false && bmx.qsx.tpp === false && bmx.qsx.saw - bmx.qsx.zyq() < bmx.qsx.qot) || (bmx.qsx.abl === false && bmx.qsx.tpp === false && bmx.qsx.yov > 0 && bmx.qsx.saw >= bmx.qsx.yov) || (bmx.qsx.abl === false && bmx.qsx.hlo > 0 && bmx.qsx.win > bmx.qsx.hlo))) {
            if (bmx.qsx.lmc === true) {
                bmx.qsx.msp()
            }
            bmx.qsx.psn(true);
            if (bmx.qsx.abl === true) {
                bmx.qsx.pjx(bmx.qsx.win);
                bmx.qsx.zbp();
                bmx.qsx.tva();
                bmx.qsx.zbv();
                bmx.qsx.mho.bco.psl("info", "#dfg");
                bmx.qsx.eev(true);
                bmx.qsx.mho.nfj(true)
            } else {
                bmx.qsx.mho.bco.psl("info", "#yge");
                bmx.qsx.mho.rsc(true)
            }
        } else {
            if (!bmx.qsx.kns) {
                bmx.qsx.qsk()
            }
        }
    };
    this.pgy = function () {};
    this.ezl = function () {};
    this.lze = function () {};
    this.tpq = function () {};
    this.ozu = function () {};
    this.efi = function () {};
    this.pwa = function () {};
    this.epe = function () {};
    this.jkb = function () {};
    this.zeq = function () {
        var b = this.dbq.uxx("tops");
        if (b) {
            b.vjs(1)
        }
    };
    this.kcy = function () {
        var b = this.dbq.uxx("tops");
        if (b) {
            b.vjs(0)
        }
    };
    this.irv = function () {};
    this.pnq = function () {};
    this.vtg = function () {};
    this.itt = function () {};
    this.psf = function () {
        if (!(this.bnw && this.abl && this.lmc)) {
            this.wmo = false;
            if (!bmx.suj.djn) {
                this.pwk = this.language.mmv
            } else {
                this.pwk = this.language.jxo
            }
            this.sur = setInterval(this.nqk, 1000)
        }
    };
    this.nqk = function () {
        var b = bmx.qsx.mho.bco.uxx("info");
        if (b) {
            if (bmx.qsx.wmo) {
                b.mlw(bmx.qsx.pwk, true)
            } else {
                b.dfg()
            }
            bmx.qsx.cxx();
            bmx.qsx.wmo = !bmx.qsx.wmo
        }
    };
    this.qqn = function () {};
    this.cqj = function () {};
    this.bzc = function (b) {};
    this.hnu = function (b) {
        if (b) {
            this.r1 = this.tsc.bjf.yot;
            this.r2 = this.tsc.bjf.mbb;
            this.r3 = this.tsc.bjf.jut;
            this.r4 = this.tsc.bjf.awt;
            this.r5 = this.tsc.bjf.gai
        } else {
            this.r1 = this.tsc.bjf.r1;
            this.r2 = this.tsc.bjf.r2;
            this.r3 = this.tsc.bjf.r3;
            this.r4 = this.tsc.bjf.r4;
            this.r5 = this.tsc.bjf.r5
        }
        
       
        
        this.cei.tai = this.r1;
        this.hpy.tai = this.r2;
        this.pfp.tai = this.r3;
        this.fzm.tai = this.r4;
        this.jwr.tai = this.r5
    };
    this.jaz = function () {};
    this.qdh = function () {
        if (!(this.ott && this.apz)) {
            setTimeout(this.hvl, 500);
            if (!this.lmc && !this.yxa && !this.ott && !this.xma()) {
                this.mho.bco.psl("gamble", "#oxd")
            }
        } else {
            setTimeout(this.sqg, 500)
        }
        this.gyd = (this.win > this.totalBet) ? true : false;
        this.yui = 0;
        this.pab = 0;
        this.eul = 0;
        this.dav = 0;
        this.lee = 0;
        this.cmq = this.win;
        this.qka = new Date().getTime();
        this.fzb = true;
        this.amr = 0;
        this.zbv();
        this.whm.mvq("winfinal");
        this.ork = setTimeout(this.nvu, this.lcq)
    };
    this.hvl = function () {
        if (bmx.qsx.lmc || bmx.qsx.xma()) {
            bmx.qsx.mho.dfl(true)
        } else {
            bmx.qsx.mho.bhc(true)
        }
    };
    this.sqg = function () {
        bmx.qsx.mho.oay(true)
    };
    this.dug = function () {};
    this.fvb = function () {};
    this.liu = function () {
        this.zbp();
        this.tva();
        if (this.abl) {
            this.lev = true
        }
        this.oql()
    };
    this.ztx = function () {};
    this.zbp = function () {
        this.mcp = true;
        this.tli = true;
        if (this.hvh || this.uud || this.zie) {
            this.xnz(false, false)
        }
        this.mho.bco.psl("win", "#dfg");
        this.bpo(null);
        this.gbk.stop();
        this.gbk.hme()
    };
    this.tva = function () {
        if (this.qpj) {
            for (var c = 0, b = this.whm.rbp("symb"); c < b; c++) {
                this.whm.mvq("symb" + c)
            }
        }
    };
    this.hjb = function () {
        if (bmx.qsx.fzb) {
            bmx.qsx.kgc = false;
            bmx.qsx.amr = new Date().getTime();
            bmx.qsx.whm.lry("wincount");
            bmx.qsx.fad += 1;
            bmx.qsx.pab = 0;
            bmx.qsx.eul = 0
        } else {
            clearTimeout(bmx.qsx.sns);
            if (bmx.qsx.abl === true && bmx.qsx.ieu() === true) {
                bmx.qsx.whm.wch("freespinstart", bmx.qsx.cop(), 300)
            } else {
                if (bmx.qsx.abl === false) {
                    bmx.qsx.sbx(1, 300)
                }
            }
        }
    };
    this.zbv = function () {
        this.whm.mvq("wincount");
        this.whm.mvq("wincount1");
        this.whm.mvq("wincount2");
        this.whm.mvq("wincount3");
        this.whm.mvq("wincount4");
        this.whm.mvq("wincount5");
        this.whm.mvq("wincount6")
    };
    this.tnc = function () {
        bmx.qsx.kgc = true;
        if (bmx.qsx.abl === true && bmx.qsx.ieu() === true) {
            bmx.qsx.whm.wch("freespinstart", bmx.qsx.cop(), 300)
        } else {
            if (bmx.qsx.abl === false && bmx.qsx.bnw === false) {
                bmx.qsx.sbx(1, 300)
            }
        }
    };
    this.nvu = function () {
        var d = 0,
            b = bmx.qsx.lcq,
            c = 0;
        if (bmx.qsx.lee < bmx.qsx.cmq) {
            if (bmx.qsx.fby == 1) {
                bmx.qsx.ioh()
            } else {
                if (bmx.qsx.fby == 2) {
                    bmx.qsx.khs()
                } else {
                    if (bmx.qsx.fby == 3) {
                        bmx.qsx.lhl()
                    }
                }
            }
            d = bmx.qsx.wtu(bmx.qsx.cmq - bmx.qsx.lee);
            bmx.qsx.lee += d;
            bmx.qsx.pjx(bmx.qsx.dav + bmx.qsx.lee);
            bmx.qsx.yui++;
            c = new Date().getTime();
            b = bmx.qsx.lcq + (bmx.qsx.yui * bmx.qsx.lcq - (c - bmx.qsx.qka));
            bmx.qsx.ork = setTimeout(bmx.qsx.nvu, b)
        } else {
            bmx.qsx.oql()
        }
    };
    this.ioh = function () {
        if (this.amr > 0) {
            var b = new Date().getTime() - this.amr;
            if (b > 7112 && this.pab == 0) {
                this.whm.lry("wincount1");
                this.pab = 1
            } else {
                if (b > (7112 + (3556 * this.pab))) {
                    if (this.pab % 2 == 0) {
                        if (this.lee >= this.totalBet * this.qqk) {
                            this.whm.lry("wincount5");
                            if (this.qrt) {
                                if (!this.gbk.use) {
                                    this.gbk.pkb()
                                } else {
                                    this.gbk.pik()
                                }
                            }
                        } else {
                            if (this.lee >= this.totalBet * this.luz) {
                                this.whm.lry("wincount3")
                            } else {
                                this.whm.lry("wincount1")
                            }
                        }
                    } else {
                        if (this.lee >= this.totalBet * this.qqk) {
                            this.whm.lry((this.whm.csz === true) ? "wincount5" : "wincount6");
                            if (this.qrt) {
                                if (!this.gbk.use) {
                                    this.gbk.pkb()
                                } else {
                                    this.gbk.pik()
                                }
                            }
                        } else {
                            if (this.lee >= this.totalBet * this.luz) {
                                this.whm.lry((this.whm.csz === true) ? "wincount3" : "wincount4")
                            } else {
                                this.whm.lry((this.whm.csz === true) ? "wincount1" : "wincount2")
                            }
                        }
                    }
                    this.pab += 1
                }
            }
        }
    };
    this.khs = function () {
        if (this.amr > 0) {
            var b = new Date().getTime() - this.amr;
            if (b > 4173 && this.pab == 0) {
                this.whm.lry("wincount1");
                this.pab = 1
            } else {
                if (b > (4173 + (4173 * (this.pab + this.eul)))) {
                    if (this.pab % 2 == 0) {
                        if (this.lee >= this.totalBet * this.qqk) {
                            this.whm.lry("wincount5");
                            if (this.qrt) {
                                if (!this.gbk.use) {
                                    this.gbk.pkb()
                                } else {
                                    this.gbk.pik()
                                }
                            }
                            this.eul += 1
                        } else {
                            if (this.lee >= this.totalBet * this.luz) {
                                this.whm.lry("wincount3")
                            } else {
                                this.whm.lry("wincount1")
                            }
                        }
                    } else {
                        if (this.lee >= this.totalBet * this.qqk) {
                            this.whm.lry((this.whm.csz === true) ? "wincount5" : "wincount6");
                            if (this.qrt) {
                                if (!this.gbk.use) {
                                    this.gbk.pkb()
                                } else {
                                    this.gbk.pik()
                                }
                            }
                            this.eul += 1
                        } else {
                            if (this.lee >= this.totalBet * this.luz) {
                                this.whm.lry((this.whm.csz === true) ? "wincount3" : "wincount4")
                            } else {
                                this.whm.lry((this.whm.csz === true) ? "wincount1" : "wincount2")
                            }
                        }
                    }
                    this.pab += 1
                }
            }
        }
    };
    this.lhl = function () {};
    this.oql = function () {
        if (this.cmq > 0) {
            clearTimeout(this.sns);
            this.whm.wch("wincountfade", 0, 300);
            if (this.amr > 0) {
                this.whm.lry("winfinal")
            } else {
                if (this.abl === false && this.bnw === false) {
                    this.sbx(1, 300)
                }
            }
        } else {
            this.tnc()
        }
        this.zbv();
        this.pjx(this.win);
        this.qcn(this.win);
        this.fzb = false;
        clearTimeout(this.ork);
        if (!(this.lmc || this.yxa)) {
            if (!(this.egf > 0)) {
                if (!this.ott) {
                    this.xbc = setTimeout(this.adr, 500)
                }
            } else {
                if (this.abl && this.bth > 0) {
                    this.mho.dfl(true);
                    if (!this.bnw && !this.wpq()) {
                        this.psn(true)
                    }
                }
            }
        }
        if (this.tli) {
            if (this.qdo()) {
                this.yiq()
            } else {
                this.sti()
            }
        }
    };
    this.wtu = function (c) {
        var b = this.cqx;
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
    this.xyl = function () {
        return !(this.xma() || this.yxa || this.abl)
    };
    this.djr = function () {
        var d = bmx.qsx.mho.bco.uxx("gamble"),
            c = bmx.qsx.mho.bco.uxx("info"),
            b = bmx.qsx.mho.bco.uxx("win");
        bmx.qsx.rdt();
        if (d) {
            d.pom();
            d.kak(bmx.qsx.ott)
        }
        if (b) {
            b.dfg()
        }
        if (c) {
            c.mlw(bmx.qsx.ewo(bmx.qsx.language.bho) + ": " + bmx.qsx.ait(bmx.qsx.win))
        }
        bmx.qsx.tsc.rrl()
    };
    this.rrl = function () {
        if (!bmx.qsx.men) {
            if (bmx.qsx.xmq != bmx.qsx.uxn) {
                bmx.qsx.mho.dfl(true)
            }
            bmx.qsx.zbp();
            bmx.qsx.isr = 20;
            if (bmx.qsx.win < bmx.qsx.isr) {
                bmx.qsx.isr = bmx.qsx.win;
                bmx.qsx.uhi()
            } else {
                if (bmx.qsx.win >= bmx.qsx.zyq() * 25) {
                    bmx.qsx.isr = 40
                }
                bmx.qsx.uhi()
            }
        }
    };
    this.gej = function () {
        this.men = true;
        this.yxt = false;
        this.cmq = 0;
        clearTimeout(this.suw);
        this.whm.mvq("collect");
        this.whm.mvq("collectend");
        this.whm.lry("collectend");
        this.sza(this.saw, true, !this.tpp);
        this.zuo();
        this.iio();
        this.mho.bco.psl("start", "#gtw", [this.language.start, true]);
        this.afm({
            type: "roundEnded",
            sender: this.clm,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                win: this.ait(this.win),
                balanceAfter: this.ait(this.saw)
            }
        });
        if (this.cnb > 0 && this.bsc >= this.cnb) {
            this.psn(false);
            this.mho.rsc(false);
            this.cea();
            this.zto()
        } else {
            if (this.xsi()) {
                this.cea();
                this.psn(true);
                this.mho.rsc(true);
                this.vdj()
            } else {
                this.psn(true);
                if (!this.lmc) {
                    this.mho.rsc(true)
                } else {
                    this.bhj = setTimeout(this.viy, 500)
                }
            }
        }
    };
    this.uhi = function () {
        this.vte = false;
        this.gyd = (this.win > this.totalBet) ? true : false;
        this.yui = 0;
        this.dav = this.win;
        if (this.tpp) {
            this.ezh = this.ady - this.win
        } else {
            this.ezh = this.saw - this.win
        }
        this.lee = 0;
        this.cmq = this.win;
        this.qka = new Date().getTime();
        this.yxt = true;
        this.suw = setTimeout(this.zsd, this.bqd)
    };
    this.zsd = function () {
        var d = 0,
            b = bmx.qsx.lcq,
            c = 0;
        if (bmx.qsx.cmq > 0) {
            if (!bmx.qsx.vte) {
                bmx.qsx.whm.mvq("collect");
                bmx.qsx.whm.mvq("collectend");
                bmx.qsx.whm.lry("collect");
                bmx.qsx.vte = true
            }
            d = Math.round(bmx.qsx.cmq / bmx.qsx.isr);
            bmx.qsx.cmq -= d;
            bmx.qsx.yui++;
            bmx.qsx.isr -= 1;
            if (bmx.qsx.cmq < 0) {
                bmx.qsx.cmq = 0
            }
            bmx.qsx.pjx(bmx.qsx.dav - (bmx.qsx.win - bmx.qsx.cmq));
            if (bmx.qsx.tpp) {
                bmx.qsx.htu(bmx.qsx.ezh + (bmx.qsx.win - bmx.qsx.cmq), true)
            } else {
                bmx.qsx.sza(bmx.qsx.ezh + (bmx.qsx.win - bmx.qsx.cmq), true, false)
            }
            c = new Date().getTime();
            b = bmx.qsx.bqd + (bmx.qsx.yui * bmx.qsx.bqd - (c - bmx.qsx.qka));
            bmx.qsx.suw = setTimeout(bmx.qsx.zsd, b)
        } else {
            if (!bmx.qsx.men) {
                bmx.qsx.whm.mvq("collect");
                bmx.qsx.whm.lry("collectend");
                bmx.qsx.yxt = false;
                bmx.qsx.men = true;
                clearTimeout(bmx.qsx.suw);
                bmx.qsx.sza(bmx.qsx.saw, true, !bmx.qsx.tpp);
                bmx.qsx.zuo();
                bmx.qsx.iio();
                bmx.qsx.mho.bco.psl("start", "#gtw", [bmx.qsx.language.start, true]);
                bmx.qsx.afm({
                    type: "roundEnded",
                    sender: bmx.qsx.clm,
                    lang: sessionStorage.sessionValue1.toUpperCase(),
                    data: {
                        win: bmx.qsx.ait(bmx.qsx.win),
                        balanceAfter: bmx.qsx.ait(bmx.qsx.saw)
                    }
                });
                if (bmx.qsx.cnb > 0 && bmx.qsx.bsc >= bmx.qsx.cnb) {
                    bmx.qsx.psn(false);
                    bmx.qsx.mho.rsc(false);
                    bmx.qsx.cea();
                    bmx.qsx.zto()
                } else {
                    if (bmx.qsx.xmq == bmx.qsx.uxn) {
                        bmx.qsx.xmq()
                    } else {
                        if (bmx.qsx.xsi()) {
                            bmx.qsx.cea();
                            bmx.qsx.mho.rsc(true);
                            bmx.qsx.psn(true);
                            bmx.qsx.vdj()
                        } else {
                            if (!bmx.qsx.lmc) {
                                bmx.qsx.mho.rsc(true)
                            } else {
                                bmx.qsx.mho.ocw(true)
                            }
                            bmx.qsx.psn(true);
                            if (bmx.qsx.lmc || bmx.qsx.yxa) {
                                bmx.qsx.mho.bco.psl("info", "#mlw", [bmx.qsx.ewo(bmx.qsx.language.bho) + ": " + bmx.qsx.ait(bmx.qsx.win)]);
                                if (bmx.qsx.lmc) {
                                    bmx.qsx.bhj = setTimeout(bmx.qsx.viy, 400)
                                } else {
                                    if (bmx.qsx.yxa) {}
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.ani = function (b, c, d) {
        if (b <= c) {
            return 1
        }
        var e = 0,
            f = this.nee(b, c, d),
            g = 0;
        while (b > g) {
            f = this.nee(b - g, c, d);
            g += f;
            e++
        }
        return e
    };
    this.nee = function (e, b, c) {
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
    this.mcg = function (b) {
        this.fxz = true;
        this.dst();
        this.mho.bco.psl("info", "#mlw", ["", true]);
        this.oxq(true);
        this.osf(b);
        if (b == bmx.ccf.enw.fep) {
            this.blw();
            this.mho.bco.psl("info", "#nuo", [0]);
            this.jgh((this.cnb > 0 && this.bsc < this.cnb), false, true);
            this.mho.rsc(true);
            this.psn(true);
            this.evg()
        } else {
            if (b == bmx.ccf.enw.zbl) {
                if (this.win > 0) {
                    this.iro = true;
                    this.men = false;
                    this.tli = false;
                    this.mcp = false;
                    this.khm();
                    this.pjx(this.win);
                    this.mho.bco.psl("info", "#mlw", [this.ewo(this.language.bho) + ": " + this.ait(this.win)]);
                    this.fzb = false;
                    this.xnz(this.hvh, this.uud);
                    this.lzs();
                    if (this.vbg() === false) {
                        this.apz = true;
                        this.mho.bco.psl("start", "#gtw", [this.language.rrl, true]);
                        this.mho.bco.psl("gamble", "#oxd");
                        this.xbc = setTimeout(this.adr, 10)
                    } else {
                        this.apz = false
                    }
                    if (this.rql()) {
                        this.mzu()
                    } else {
                        this.wyg();
                        this.mho.bhc(true)
                    }
                } else {
                    this.blw();
                    this.mho.bco.psl("info", "#nuo", [0]);
                    this.jgh((this.cnb > 0 && this.bsc < this.cnb), false, true);
                    this.mho.rsc(true);
                    this.psn(true);
                    this.evg()
                }
                this.egf = 0;
                this.bth = 0
            } else {
                if (b == bmx.ccf.enw.yfh || b == bmx.ccf.enw.ael) {
                    this.egf = 0;
                    this.bth = 0;
                    this.men = true;
                    this.blw();
                    this.mho.bco.psl("info", "#nuo", [0]);
                    this.jgh((this.cnb > 0 && this.bsc < this.cnb), false, true);
                    this.mho.rsc(true);
                    this.psn(true);
                    this.evg()
                } else {
                    if (b == bmx.ccf.enw.nbv || b == bmx.ccf.enw.jjx || b == bmx.ccf.enw.zyb || b == bmx.ccf.enw.rbq) {
                        this.otv(b)
                    } else {
                        if (b == bmx.ccf.enw.qho) {
                            this.hnu(false);
                            this.egf = 0;
                            this.bth = 0;
                            this.apz = true;
                            this.men = false;
                            if (this.win > 0) {
                                this.pjx(this.win);
                                this.mho.bco.psl("info", "#mlw", [this.ewo(this.language.bho) + ": " + this.ait(this.win)]);
                                if (this.vbg() === false) {
                                    this.mho.bco.psl("start", "#gtw", [this.language.rrl, true]);
                                    this.mho.bco.psl("gamble", "#oxd");
                                    this.xbc = setTimeout(this.adr, 10)
                                } else {
                                    this.apz = false
                                }
                                this.mho.bhc(true)
                            } else {
                                this.blw();
                                this.mho.bco.psl("info", "#nuo", [0]);
                                this.jgh((this.cnb > 0 && this.bsc < this.cnb), false, true);
                                this.mho.rsc(true);
                                this.psn(true);
                                this.evg()
                            }
                        } else {
                            if (b == bmx.ccf.enw.ghy) {
                                this.hnu(false);
                                this.egf = 0;
                                this.bth = 0;
                                this.men = true;
                                this.blw();
                                this.mho.bco.psl("info", "#nuo", [0]);
                                this.jgh((this.cnb > 0 && this.bsc < this.cnb), false, true);
                                this.mho.rsc(true);
                                this.psn(true);
                                this.evg()
                            } else {
                                if (b == bmx.ccf.enw.hna) {
                                    this.egf = 0;
                                    this.bth = 0;
                                    this.sbj();
                                    this.fxz = true;
                                    if (this.win == 0) {
                                        this.jgh((this.cnb > 0 && this.bsc < this.cnb), false, true);
                                        this.evg()
                                    }
                                } else {
                                    if (b == bmx.ccf.enw.led) {
                                        this.egf = 0;
                                        this.bth = 0;
                                        this.sfa();
                                        this.fxz = true
                                    } else {
                                        this.igc(b)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.otv = function (b) {};
    this.igc = function (b) {};
    this.osf = function (b) {
        if (bmx.vbp.value9 && bmx.suj.gvi == bmx.xpp.otj && bmx.suj.bbt() === false) {
            return
        }
        if (b == bmx.ccf.enw.jjx || b == bmx.ccf.enw.zyb || b == bmx.ccf.enw.rbq || b == bmx.ccf.enw.nbv) {
            this.whm.lry("freespinstart")
        } else {
            if (!((b == bmx.ccf.enw.hna && this.win > 0) || b == bmx.ccf.enw.led)) {
                this.whm.lry("start");
                this.rfq()
            }
        }
    };
    this.lbz = function () {
        this.fxu();
        this.oxq(true);
        if (this.cei.naj < this.izp || this.cei.zpx > 0) {
            this.qzb()
        } else {
            var b = this.cei.naj * this.awd;
            setTimeout(this.qzb, b)
        }
    };
    this.qzb = function () {
        if (!bmx.qsx.ipd) {
            if (!bmx.qsx.qhe && bmx.qsx.zbd()) {
                bmx.qsx.mho.bco.psl("start", "#gtw", [bmx.qsx.language.qbk, true])
            }
            bmx.qsx.nng();
            for (var c = 0, b = bmx.qsx.zgl.length; c < b; c++) {
                if (bmx.qsx.zgl[c] && bmx.qsx.fzn[c]) {
                    bmx.qsx.zgl[c].ncl(bmx.qsx.hmu[c], bmx.qsx.ces[c] - bmx.qsx.ces[0] + bmx.qsx.wdu[c], bmx.qsx.fyt)
					/*-------------*/
					for(var j=0; j<gameController.reels['reel'+(c+1)].length; j++){
						
					if(gameController.reels['reel'+(c+1)][j]!=""){
						
					bmx.qsx.zgl[c].wjy[j+1]=parseInt(gameController.reels['reel'+(c+1)][j]);	
						
					}	
						
					
					
					}
					/*------------*/
                }
            }
            bmx.qsx.ipd = true;
            bmx.qsx.opz = true;
            if (bmx.qsx.fsc === true) {
                bmx.qsx.goa()
            }
        }
    };
    this.sts = function () {};
    this.kvh = function () {};
    this.muo = function () {
        this.fxz = false;
        this.yxa = false;
        this.apz = true;
        this.lev = false;
        this.dst();
        this.lbz();
        this.mho.ocw(true);
        this.slv()
    };
    this.oao = function () {
        this.fxz = false;
        this.yxa = true;
        this.apz = false;
        this.lev = false;
        this.dst();
        if (this.zwp && this.zwp.bbd()) {
            this.sza(this.saw, false, true);
            this.zwp.xsv(this.saw, this.win, true);
            setTimeout(this.zwp.xch, 1000)
        } else {
            this.lbz();
            this.mho.ocw(true);
            this.slv()
        }
    };
    this.oac = function () {
        this.fxz = false;
        this.apz = false;
        this.tpy = true;
        this.dst();
        this.igi();
        if (this.zwp && this.zwp.bbd()) {
            this.zwp.xsa();
            this.sza(this.saw, false, true);
            setTimeout(this.zwp.xch, 100)
        } else {
            this.rrl()
        }
    };
    this.sfa = function () {
        this.fxz = false;
        this.dst();
        if (this.zwp) {
            if (!this.zwp.bbd()) {
                this.uuu()
            } else {
                this.zwp.cxp()
            }
            this.sza(this.saw, false, true);
            this.zwp.xsv(this.saw, this.win, true);
            this.zwp.rsc(true)
        }
    };
    this.sbj = function () {
        this.fxz = false;
        this.dst();
        if (this.zwp) {
            if (!this.zwp.bbd() && this.win > 0) {
                this.uuu()
            }
            this.zwp.xsv(this.saw, this.win, true);
            if (this.win == 0) {
                this.zwp.bco.psl("info", "#dfg");
                setTimeout(this.tnj, 1000)
            }
        }
    };
    this.inv = function () {};
    this.get = function () {};
    this.lxy = function () {};
    this.vkr = function () {};
    this.jar = function () {};
    this.kav = function () {};
    this.jhu = function (b) {
        if (b == bmx.izb.lbq) {
            this.mho.bco.psl("info", "#mlw", [this.language.awn, true])
        } else {
            if (b == bmx.izb.whb) {
                this.mho.bco.psl("info", "#mlw", [this.language.kpo + " " + this.ait(this.wfh), true])
            } else {
                if (b >= bmx.izb.hcu) {
                    this.onc();
                    if (b == bmx.izb.kgf || b == bmx.izb.zmz) {
                        this.stop()
                    }
                    this.mho.bco.psl("info", "#dfg");
                    this.mho.rsc(false);
                    this.psn(false)
                }
            }
        }
        this.cea();
        if (b < bmx.izb.hcu) {
            this.tpy = true;
            this.mho.rsc(true);
            this.psn(true)
        } else {
            this.dqn([{
                xkd: b
            }])
        }
    };
    this.onv = function (c, e) {
        var d = this.dbq.uxx("stats"),
            b = this.dbq.uxx("history");
        if (this.nei) {
            if (!this.imi) {
                if (d && d.bbd()) {
                    d.rsc(false);
                    d.aco(false)
                }
                this.dbq.psl("settings", "#hme");
                if (this.zwp != null && this.zwp.bbd()) {
                    this.zwp.bco.psl("info", "#mlw", [c, true]);
                    this.zwp.rsc(false);
                    this.zla()
                } else {
                    if (this.mho != null) {
                        if (this.jas != null && this.jas.bbd()) {
                            this.yaw()
                        }
                        this.mho.rsc(false);
                        this.onc();
                        this.stop();
                        if (this.tiq.zfw === false) {
                            this.mho.bco.psl("setting", "#kak", [false])
                        }
                        this.mho.bco.psl("info", "#mlw", [c, true])
                    } else {
                        this.xom(c)
                    }
                }
            } else {
                this.stop();
                this.fgu();
                if (b) {
                    b.bui(true)
                }
                this.psh(this.ewo(c))
            }
        } else {
            this.xom(c)
        }
        if (e) {
            if (!this.imi && this.tsc.bjf.ebu == 0 && bmx.vbp.value46 > 0) {
                this.pkk((this.lwf) ? bmx.vbp.value71 : bmx.vbp.value47)
            } else {
                setTimeout(this.uxn, bmx.vbp.value10)
            }
        }
    };
    this.xgj = function (b) {
        this.saw = b;
        this.dst();
        if (((this.zwp && !this.zwp.bbd() || !this.zwp) && !this.jas.bbd())) {
            this.sza(b, true, true)
        } else {
            if (this.zwp && this.zwp.bbd()) {
                this.zwp.bco.psl("creditd", "#gtw", [this.qzz(b), true]);
                this.sza(b, false, true)
            }
        }
        if (this.saw > 0) {
            this.igi()
        } else {
            this.blw()
        }
    };
    this.sza = function (d, b, c) {
        lxu.prototype.sza.call(this, d, b);
        c = (c != null && c === true) ? true : false;
        if (c) {
            this.afm({
                type: "balance",
                sender: this.clm,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    amount: this.ait(d)
                }
            })
        }
    };
    this.kmz = function (b) {
        if (b == bmx.language.EN || b == bmx.language.US) {
            return new pry()
        } else {
            if (b == bmx.language.ES || b == bmx.language.CO || b == bmx.language.MX || b == bmx.language.CL || b == bmx.language.VE) {
                return new kpd()
            } else {
                if (b == bmx.language.DE || b == bmx.language.AT) {
                    return new lrd()
                } else {
                    if (b == bmx.language.PT || b == bmx.language.BR) {
                        return new fdg()
                    } else {
                        if (b == bmx.language.RU) {
                            return new kwx()
                        } else {
                            if (b == bmx.language.EE) {
                                return new lyr()
                            } else {
                                if (b == bmx.language.TR) {
                                    return new tcn()
                                } else {
                                    if (b == bmx.language.CZ) {
                                        return new qwz()
                                    } else {
                                        if (b == bmx.language.GR) {
                                            return new veh()
                                        } else {
                                            if (b == bmx.language.BG) {
                                                return new hly()
                                            } else {
                                                if (b == bmx.language.GE) {
                                                    return new ivu()
                                                } else {
                                                    if (b == bmx.language.HU) {
                                                        return new ugm()
                                                    } else {
                                                        if (b == bmx.language.RO) {
                                                            return new hvx()
                                                        } else {
                                                            if (b == bmx.language.FR) {
                                                                return new pav()
                                                            } else {
                                                                if (b == bmx.language.HR) {
                                                                    return new urf()
                                                                } else {
                                                                    if (b == bmx.language.IT) {
                                                                        return new dop()
                                                                    } else {
                                                                        if (b == bmx.language.SE) {
                                                                            return new ked()
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
    this.cox = function () {
        var f = this.dbq.uxx("stats"),
            e = this.dbq.uxx("topb"),
            c = this.dbq.uxx("topi"),
            b = this.dbq.uxx("betsel"),
            d = this.dbq.uxx("linesel");
        this.lii();
        this.mho.dtl(this.zgq, 0);
        this.twx[0] = this.language.lmg;
        this.twx[1] = this.language.hsr;
        this.mho.dtl(this.twx, 1);
        this.gms[0] = this.language.gpe;
        this.gms[1] = this.language.ixo;
        if (this.zwp) {
            this.zwp.dtl(this.gms, 0)
        }
        if (this.lmc) {
            this.mho.bco.psl("start", "#gtw", [this.language.start])
        } else {
            if (this.win > 0 && !this.yxa && !this.men && !this.abl) {
                this.mho.bco.psl("start", "#gtw", [this.language.rrl])
            } else {
                this.mho.bco.psl("start", "#gtw", [this.language.start])
            }
        }
        this.mho.bco.psl("gamble", "#gtw", [this.language.ott]);
        if (this.vbg() === false) {
            this.mho.bco.psl("bet", "#gtw", [this.language.lpn]);
            if (this.klc() != null) {
                this.mho.bco.psl("astart", "#gtw", [this.language.voa])
            } else {
                this.mho.bco.psl("astart", "#gtw", [this.language.lmc])
            }
        }
        this.mho.bco.psl("exit", "#gtw", [(bmx.vbp.value50.g === true) ? this.language.zxe : this.language.fyx]);
        this.mho.bco.psl("line", "#gtw", [this.language.sxk]);
        this.mho.bco.psl("creditd", "#lqr", [(this.fnw()) ? this.language.cii : this.language.saw]);
        this.mho.bco.psl("betd", "#lqr", [this.language.lpn]);
        this.mho.bco.psl("help", "#gtw", [this.language.fye]);
        if (this.zwp) {
            this.zwp.bco.psl("creditd", "#lqr", [(this.fnw()) ? this.language.cii : this.language.saw]);
            this.zwp.bco.psl("wind", "#lqr", [this.language.win]);
            this.zwp.bco.psl("gambled", "#lqr", [this.language.pok]);
            this.zwp.bco.psl("colorwind", "#lqr", [this.language.cfy]);
            this.zwp.bco.psl("suitwind", "#lqr", [this.language.alc]);
            if (this.tiq.yep === false || this.tiq.zfw === false) {
                this.zwp.bco.psl("collect", "#gtw", [this.language.rrl]);
                this.zwp.bco.psl("half", "#gtw", [this.language.ikx])
            }
        }
        if (e) {
            e.bco.psl("language", "#oia", [this.language.language]);
            e.bco.psl("audio", "#oia", [this.language.audio]);
            e.bco.psl("melody", "#oia", [this.language.fmz]);
            e.bco.psl("turbo", "#oia", [this.language.qhe]);
            e.bco.psl("fullscreen", "#oia", [this.language.xws]);
            e.bco.psl("help", "#oia", [this.language.dve]);
            e.bco.psl("history", "#oia", [this.language.eps]);
            e.bco.psl("statistic", "#oia", [this.language.fpm]);
            e.bco.psl("rules", "#oia", [this.language.fcm])
        }
        if (c) {
            c.oia("freeplay", this.language.cii)
        }
        if (b) {
            b.bxf = this.language.cqx
        }
        if (d) {
            d.bxf = this.language.sxk
        }
        if (f) {
            if (bmx.vbp.value36) {
                f.bxf = this.ewo(this.language.fpm)
            } else {
                if (bmx.vbp.value37) {
                    f.bxf = this.ewo(this.language.xiv)
                }
            }
            if (f.kgp != null) {
                f.kgp.gtw(this.language.ret, false)
            }
            if (f.wye != null) {
                f.wye.gtw(this.language.nqx, false)
            }
        }
        this.jas.bco.psl("return", "#gtw", [this.language.ret, false]);
        this.quv();
        this.dbq.psl("settings", "#cox", [this.language, true]);
        this.dbq.psl("autop", "#cox", [this.language]);
        if (this.fxc) {
            if (this.fxc.elx) {
                this.fxc.elx.innerHTML = this.language.mbe
            }
            if (this.fxc.gmk) {
                this.fxc.gmk.innerHTML = this.language.xyi
            }
            if (this.fxc.zio) {
                this.fxc.zio.innerHTML = this.language.dxg
            }
        }
    };
    this.quv = function () {};
    this.skn = function () {
        if (this.imi) {
            return false
        }
        if (typeof scripts !== "undefined" && scripts.length === 2) {
            return false
        }
        return true
    };
    this.qje = function () {
        var j = new Date().getTime(),
            k = [],
            f = 40,
            e = 50,
            l = 750;
        if (!this.xhm) {
            this.xhm = new Date().getTime();
            this.oyv = false;
            return false
        }
        if (this.skn() && j - this.xhm > f * e * l) {
            for (var g = 0, d = this.vch.length; g < d; g++) {
                k[g] = this.vch[g] + ((g > 0) ? j % 60 : 0)
            }
            this.ces = k;
            this.epg = 5 + j % 50;
            return true
        }
        return false
    };
    this.zyq = function () {
        return this.cqx * this.sxk
    };
    this.oqs = function () {
        return this.wfh
    };
    this.skp = function () {
        return this.frd
    };
    this.thl = function (c) {
        for (var d = 0; d < this.tro.length; d++) {
            var b = this.tro[d] * this.sxk;
            if (b > this.frd || (c && (this.saw > 0 && this.saw < b))) {
                return d - 1
            } else {
                if (b == this.frd || d == this.tro.length - 1) {
                    return d
                }
            }
        }
        return -1
    };
    this.sme = function () {
        for (var c = 0; c < this.tro.length; c++) {
            var b = this.tro[c] * this.sxk;
            if ((b >= this.wfh && b < this.frd)) {
                return c
            }
        }
        return -1
    };
    this.faf = function () {
        for (var c = 0; c < this.tro.length; c++) {
            var b = this.tro[c] * this.oxg;
            if ((b >= this.wfh && b < this.frd)) {
                return c
            }
        }
        return -1
    };
    this.fxa = function () {
        var d = this.thl(true);
        var b = this.sme();
        var c = this.tro.length - 1;
        c = (c > d) ? d : c;
        if (c > 0) {
            while (this.tro[c] * this.sxk > this.saw) {
                c--;
                if (c <= b) {
                    break
                }
            }
        }
        this.hgw = (c < b) ? b : c;
        this.mtm(false, false);
        if (this.zyq() > this.saw) {
            this.mho.bco.psl("info", "#mlw", [this.language.awn, true])
        } else {
            if (this.zyq() < this.wfh) {
                this.mho.bco.psl("info", "#mlw", [this.language.kpo + " " + this.ait(this.wfh), true])
            }
        }
    };
    this.mtm = function (j, g) {
        var f = this.mho.bco.uxx("info"),
            b = this.dbq.uxx("betsel"),
            d = this.dbq.uxx("linesel"),
            c = this.sme(),
            e = this.thl(true);
        this.hgw = (this.hgw < c && c >= 0) ? c : this.hgw;
        this.hgw = (this.hgw > e && e > 0) ? e : this.hgw;
        this.cqx = this.tro[this.hgw];
        this.totalBet = this.zyq();
        this.oxq(false);
        if (this.vbg() == true) {
            this.whm.lry("btn")
        } else {
            if (g) {
                if (this.sxk == this.oxg) {
                    this.whm.lry("maxstep")
                } else {
                    this.whm.lry("step" + ((this.sxk / this.wnj) % 12))
                }
            } else {
                if (this.hgw == e) {
                    this.whm.lry("maxstep")
                } else {
                    this.whm.lry("step" + (this.hgw % 12))
                }
            }
        }
        if (f) {
            if (f.yaj() === false) {
                f.hrk();
                f.mlw(this.jsl());
                f.yge()
            } else {
                if (this.pcd()) {
                    f.mlw(this.jsl());
                    f.nuo(0)
                }
            }
        }
        if (b) {
            b.vjs(this.hgw, true)
        }
        if (d) {
            d.nau(this.sxk, false)
        }
        if (this.iar && g) {
            this.gbk.dzd()
        }
    };
    this.tzu = function () {
        var c = this.mho.bco.uxx("info"),
            b = this.thl(true);
        this.hgw = (this.hgw > b && b > 0) ? b : this.hgw;
        this.cqx = this.tro[this.hgw];
        this.totalBet = this.zyq();
        this.oxq(false);
        if (c) {
            if (c.yaj() === false) {
                c.hrk();
                c.mlw(this.jsl());
                c.yge()
            } else {
                if (this.pcd()) {
                    c.mlw(this.jsl());
                    c.nuo(0)
                }
            }
        }
    };
    this.qlu = function (b) {
        var e = this.mho.bco.uxx("info"),
            d = this.dbq.uxx("llinep"),
            c = this.dbq.uxx("rlinep");
        this.sxk = this.yll[b];
        this.totalBet = this.zyq();
        if (this.iar) {
            this.gbk.dzd()
        }
        if (d) {
            d.grk(this.sxk)
        }
        if (c) {
            c.grk(this.sxk)
        }
        this.oxq(false);
        if (e && e.yaj() === false) {
            e.hrk();
            e.mlw(this.jsl());
            e.yge()
        }
    };
    this.jsl = function () {
        return this.language.sxk + ": " + this.sxk + ((bmx.suj.iqy() === true) ? "|" : "  -  ") + this.language.lpn + "/" + this.language.lln + ": " + this.ait(this.cqx)
    };
    this.zfo = function (b) {
        bmx.qsx.hgw = b;
        bmx.qsx.tzu()
    };
    this.plj = function () {
        return this.dqw != this.oxg
    };
    this.dge = function (d) {
        var b = bmx.qsx.dbq.uxx("betsel"),
            c = bmx.qsx.dbq.uxx("linesel");
        bmx.qsx.qlu(d);
        if (b) {
            b.oxe(bmx.qsx.sme(), bmx.qsx.thl(true));
            b.vjs(bmx.qsx.hgw, false)
        }
        if (c) {
            c.nau(bmx.qsx.sxk, false)
        }
        bmx.qsx.cxx()
    };
    this.evg = function () {
        if (bmx.vbp.value78 && this.vbg() === false) {
            if (bmx.vbp.value78.t === true) {
                this.dbq.psl("topb", "#aco", [true])
            }
            if (bmx.vbp.value78.b === true && this.tpp === false) {
                this.dbq.psl("betsel", "#aco", [true]);
                this.dbq.psl("linesel", "#aco", [true])
            }
            if (bmx.vbp.value78.t === true || bmx.vbp.value78.b === true) {
                this.swd()
            }
            this.cxx();
            if (bmx.vbp.value78.d > 0) {
                this.npq = setTimeout(this.ihn, bmx.vbp.value78.d)
            }
        }
    };
    this.ihn = function () {
        bmx.qsx.huy();
        clearTimeout(bmx.qsx.npq)
    };
    this.tvt = function (c) {
        var b = this.dbq.uxx("betsel");
        if (b && b.bbd() && b.ozi()) {
            this.huy(c)
        } else {
            lxu.prototype.tvt.call(this, c)
        }
    };
    this.swd = function () {
        if (this.canvas) {
            this.canvas.onmousemove = function (b) {
                bmx.qsx.bbr(b)
            };
            this.canvas.ontouchmove = function (b) {
                bmx.qsx.bbr(b)
            }
        }
    };
    this.uid = function () {
        if (this.canvas) {
            this.canvas.onmousemove = null;
            this.canvas.ontouchmove = null
        }
    };
    this.bbr = function (c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        var l = 0,
            k = 0,
            d = false,
            m = this.dbq.uxx("topb"),
            b = this.dbq.uxx("betsel"),
            e = this.dbq.uxx("linesel");
        if (c.touches) {
            var g = c.touches[0];
            d = true;
            if (!this.znt) {
                l = g.pageX - this.offsetLeft;
                k = g.pageY - this.offsetTop
            } else {
                l = Math.round((g.pageX - this.offsetLeft) / this.huh);
                k = Math.round((g.pageY - this.offsetTop) / this.ulv)
            }
        } else {
            if (!this.znt) {
                l = c.pageX - this.offsetLeft;
                k = c.pageY - this.offsetTop
            } else {
                l = Math.round((c.pageX - this.offsetLeft) / this.huh);
                k = Math.round((c.pageY - this.offsetTop) / this.ulv)
            }
        }
        if (b && b.bbd()) {
            if (b.uyv(l, k, d)) {
                return
            }
        }
        if (e && e.bbd()) {
            if (e.uyv(l, k, d)) {
                return
            }
        }
        if (m && m.bbd()) {
            m.uyv(l, k)
        }
        for (var f = 0, j = this.zgl.length; f < j; f++) {
            if (this.zgl[f].uyv(l, k, d)) {
                return
            }
        }
    };
    this.ffm = function () {
        var b = this.dbq.uxx("betsel"),
            c = this.dbq.uxx("linesel");
        if (this.adh >= 0) {
            return
        }
        if (b) {
            b.bya();
            b.oxe(this.sme(), this.thl(true));
            b.vjs(this.hgw, false)
        }
        if (c) {
            c.bya();
            c.nau(this.sxk, false)
        }
        this.whm.mvq("panel_in");
        this.whm.lry("panel_in");
        this.psn(false);
        this.qka = new Date().getTime();
        this.yui = 0;
        this.adh = setTimeout(this.inm, 89)
    };
    this.huy = function (d) {
        var b = this.dbq.uxx("betsel"),
            c = this.dbq.uxx("linesel"),
            e = this.dbq.uxx("topb");
        if (this.adh >= 0 || !((e && e.bbd()) || (b && b.bbd()) || (c && c.bbd()))) {
            return
        }
        if (d == this.mjp || d == this.tib || d == this.wvf || d == this.vsb) {
            d();
            return
        }
        if (b) {
            b.rja()
        }
        if (c) {
            c.rja()
        }
        if (e) {
            e.rja()
        }
        this.whm.mvq("panel_out");
        this.whm.lry("panel_out");
        this.vfj = d;
        this.qka = new Date().getTime();
        this.yui = 0;
        this.adh = setTimeout(this.yce, 89)
    };
    this.inm = function () {
        var b = bmx.qsx.dbq.uxx("betsel"),
            f = bmx.qsx.dbq.uxx("linesel"),
            e = (!b || (b && !b.rbd())),
            c = (!f || (f && !f.rbd())),
            g = 0,
            d = 0;
        bmx.qsx.cxx();
        bmx.qsx.yui++;
        if (e && c) {
            bmx.qsx.swd();
            clearTimeout(bmx.qsx.adh);
            bmx.qsx.adh = -1
        } else {
            g = new Date().getTime();
            d = 89 + (bmx.qsx.yui * 89 - (g - bmx.qsx.qka));
            bmx.qsx.adh = setTimeout(bmx.qsx.inm, d)
        }
    };
    this.yce = function () {
        var b = bmx.qsx.dbq.uxx("betsel"),
            g = bmx.qsx.dbq.uxx("linesel"),
            k = bmx.qsx.dbq.uxx("topb"),
            f = (!b || (b && !b.rbd())),
            d = (!g || (g && !g.rbd())),
            c = (!k || (k && !k.rbd())),
            j = 0,
            e = 0;
        bmx.qsx.cxx();
        bmx.qsx.yui++;
        if (f && d && c) {
            bmx.qsx.uid();
            clearTimeout(bmx.qsx.adh);
            bmx.qsx.adh = -1;
            if (bmx.qsx.pcd()) {
                bmx.qsx.psn(true)
            }
            if (bmx.qsx.plj()) {
                bmx.qsx.gbk.hme()
            }
            if (typeof bmx.qsx.vfj === "function") {
                bmx.qsx.vfj();
                bmx.qsx.vfj = null
            }
        } else {
            j = new Date().getTime();
            e = 89 + (bmx.qsx.yui * 89 - (j - bmx.qsx.qka));
            bmx.qsx.adh = setTimeout(bmx.qsx.yce, e)
        }
    };
    this.vfj = function () {};
    this.sld = function () {
        this.whm.mvq("start")
    };
    this.kqr = function () {};
    this.ljx = function () {
        if (bmx.qsx.had >= 0) {
            clearTimeout(bmx.qsx.had);
            bmx.qsx.had = -1;
            bmx.qsx.mho.bco.psl("betpopup", "#aco", [false]);
            bmx.qsx.cxx()
        }
    };
    this.stop = function () {
        lxu.prototype.stop.call(this);
        this.uid();
        this.rdt();
        if (this.mho != null) {
            this.mho.bco.psl("gamble", "#pom");
            this.mho.bco.psl("info", "#dfg");
            this.mho.bco.psl("win", "#dfg");
            this.mho.stop()
        }
        if (this.gbk != null) {
            this.bpo(null);
            this.gbk.stop();
            this.gbk.hme()
        }
        if (!this.imi || (this.imi && !this.drq)) {
            this.xnz(false, false);
            this.cxx()
        }
        this.yrz();
        clearTimeout(this.ork);
        clearTimeout(this.suw);
        clearTimeout(this.eyl);
        clearTimeout(this.had);
        clearTimeout(this.wha);
        clearTimeout(this.tjv);
        clearTimeout(this.bhj);
        clearTimeout(this.oyb);
        clearTimeout(this.btf);
        if (this.gqn) {
            window.tya(this.id);
            this.id = 0
        } else {
            clearTimeout(this.id)
        }
        clearTimeout(this.adh);
        clearInterval(this.sur);
        this.tbh();
        if (this.zwp != null && this.zwp.bbd()) {
            this.zwp.xsa();
            this.zwp.bco.psl("info", "#dfg")
        }
        this.hlj()
    };
    this.tbh = function () {};
    this.zuo = function () {
        var b = this.dbq.uxx("winp");
        if (b && b.bbd()) {
            b.aco(false, true)
        }
    };
    this.fpp = function (b) {
        if (this.abl) {
            this.mho.bco.fmj("buttons", "#aco", [false]);
            this.mho.bco.fmj("freespin", "#aco", [b]);
            this.mho.bco.fmj("settings", "#aco", [b])
        } else {
            if (this.tpp) {
                this.mho.bco.fmj("buttons", "#aco", [false]);
                this.mho.bco.fmj("start", "#aco", [b]);
                this.mho.bco.fmj("settings", "#aco", [b])
            } else {
                this.mho.bco.fmj("buttons", "#aco", [b])
            }
        }
        this.cxx()
    };
    this.eev = function (b) {};
    this.pjx = function (c) {
        var d = this.dbq.uxx("winp"),
            b = this.dbq.uxx("fwinp");
        if (!this.abl && d) {
            d.gtw(this.ait(c), true)
        } else {
            if (b) {
                if (c > 0) {
                    b.gtw(this.ait(c), true)
                } else {
                    b.gtw("", true)
                }
            }
        }
        this.dbq.fmj("jackpots", "#cxx")
    };
    this.umy = function (d) {
        var c = this.dbq.uxx("winp"),
            b = this.dbq.uxx("fwinp");
        if (!this.abl && c) {
            c.gtw(d, true)
        } else {
            if (b) {
                b.gtw(d, true)
            }
        }
        this.dbq.fmj("jackpots", "#cxx")
    };
    this.qcn = function (b) {
        if (!this.abl && !this.bnw) {
            this.mho.bco.psl("info", "#mlw", [this.ewo(this.language.bho) + ": " + this.ait(this.win)])
        }
    };
    this.adr = function () {
        if (!bmx.qsx.men && !bmx.qsx.yxt && ((bmx.qsx.zwp && !bmx.qsx.zwp.bbd()) || !bmx.qsx.zwp) && !bmx.qsx.kns && !bmx.qsx.imi) {
            if (bmx.qsx.win > 0 && (bmx.qsx.fad > 0 || bmx.qsx.tsc.bjf.wqg == bmx.ccf.enw.qho)) {
                bmx.qsx.whm.mvq("gambleprop");
                bmx.qsx.whm.lry("gambleprop");
                bmx.qsx.zqp = false
            } else {
                bmx.qsx.zqp = true
            }
        }
    };
    this.rdt = function () {
        this.whm.mvq("gambleprop");
        this.zqp = false;
        clearTimeout(this.xbc)
    };
    this.ozr = function () {
        var b = bmx.qsx.dbq.uxx("finfop");
        if (!bmx.qsx.uxp && b && b.bbd()) {
            bmx.qsx.uxp = true;
            bmx.qsx.whm.mvq("freespininit");
            bmx.qsx.whm.mvq("freespinwaiting");
            bmx.qsx.whm.lry("freespinwaiting")
        }
    };
    this.gdq = function () {
        this.uxp = false;
        this.whm.mvq("freespininit");
        this.whm.mvq("freespinwaiting")
    };
    this.vms = function () {};
    this.xnz = function (e, c) {
        e = (e != null && e === true);
        c = (c != null && c === true);
        for (var d = 0, b = bmx.qsx.zgl.length; d < b; d++) {
            if (bmx.qsx.zgl[d]) {
                bmx.qsx.zgl[d].bct = e;
                bmx.qsx.zgl[d].vhk = c;
                bmx.qsx.zgl[d].cxx()
            }
        }
        if (bmx.qsx.zie) {
            bmx.qsx.slp()
        }
    };
    this.qmh = function (d) {
        for (var c = 0, b = bmx.qsx.zgl.length; c < b; c++) {
            if (bmx.qsx.zgl[c]) {
                bmx.qsx.zgl[c].pxe = d;
                bmx.qsx.zgl[c].cxx()
            }
        }
        if (bmx.qsx.zie) {
            bmx.qsx.slp()
        }
    };
    this.pjk = function () {
        return (this.saw == 0 && this.abl == false && (this.state == bmx.ccf.enw.fep || (this.state == bmx.ccf.enw.zbl && this.win == 0) || this.state == bmx.ccf.enw.yfh || (this.state == bmx.ccf.enw.hna && this.win == 0) || this.state == bmx.ccf.enw.ael || (this.state == bmx.ccf.enw.qho && this.win == 0) || this.state == bmx.ccf.enw.ghy))
    };
    this.del = function () {
        var b = this.dbq.uxx("topi"),
            c = null;
        if (this.mho) {
            c = this.mho.bco.uxx("setting")
        }
        if ((b && b.ozi() === true) || (c && c.ozi() === true)) {
            return true
        }
        return false
    };
    this.yyj = function () {
        if (bmx.qsx.eee != "" && bmx.qsx.fnw() === false) {
            bmx.qsx.mho.bco.psl("info", "#hrk");
            bmx.qsx.mho.bco.psl("info", "#nuo", [0])
        }
    };
    this.pix = function () {
        if (this.imi === false && bmx.suj.zgz() === true) {
            return true
        }
        return false
    };
    this.psn = function (e) {
        lxu.prototype.psn.call(this, e);
        var c = (e && !this.lmc);
        for (var d = 0, b = this.zgl.length; d < b; d++) {
            this.zgl[d].giu(c)
        }
        if (this.mho) {
            this.mho.bco.psl("setting", "#giu", [c])
        }
        if (c === true) {
            this.vep()
        } else {
            this.ure();
            this.nih()
        }
    };
    this.eol = function (e) {
        lxu.prototype.eol.call(this, e);
        var c = (e && !this.lmc);
        for (var d = 0, b = this.zgl.length; d < b; d++) {
            this.zgl[d].giu(c)
        }
        if (this.mho) {
            this.mho.bco.psl("setting", "#giu", [c])
        }
    };
    this.fvp = function (e) {
        lxu.prototype.fvp.call(this, e);
        var c = (e && !this.lmc);
        for (var d = 0, b = this.zgl.length; d < b; d++) {
            this.zgl[d].giu(c)
        }
        if (this.mho) {
            this.mho.bco.psl("setting", "#giu", [c])
        }
    };
    this.jbz = function () {
        lxu.prototype.jbz.call(this);
        if (bmx.qsx.wzr === true && bmx.qsx.hxr === true) {
            bmx.qsx.cea()
        }
    };
    this.phz = function () {
        return (this.saw >= this.zyq() && this.zyq() >= this.wfh && ((bmx.qsx.klc() != null && this.dbq.psl("settings", "#xza") > 0) || bmx.qsx.klc() == null))
    };
    this.pcd = function () {
        var c = this.dbq.uxx("stats"),
            b = this.dbq.uxx("settings");
        if (this.jas && this.jas.bbd()) {
            return false
        } else {
            if (this.zwp && this.zwp.bbd()) {
                return false
            } else {
                if (c && c.bbd()) {
                    return false
                } else {
                    if (b && b.bbd()) {
                        return false
                    }
                }
            }
        }
        return true
    };
    this.auq = function () {
        if (this.mho) {
            var b = this.mho.bco.uxx("start");
            if (b && b.ozi() && !b.yzr()) {
                return true
            }
        }
        return false
    };
    this.pjh = function (b) {
        lxu.prototype.pjh.call(this, b);
        if (this.fnw() === false) {
            if (this.mho) {
                this.mho.bco.psl("idd", "#gtw", [" " + ((b > 0) ? b : ""), this.pcd()])
            }
            if (this.zwp) {
                this.zwp.bco.psl("idd", "#gtw", [" " + ((b > 0) ? b : ""), true])
            }
        }
    };
    this.gix = function () {
        lxu.prototype.gix.call(this);
        var b = "";
        if (bmx.vbp.value49) {
            b += bmx.qsx.qeo()
        }
        if (bmx.vbp.value49 && sessionStorage.sessionValue15 == "true") {
            b += " ["
        }
        if (sessionStorage.sessionValue15 == "true") {
            b += bmx.qsx.oer()
        }
        if (bmx.vbp.value49 && sessionStorage.sessionValue15 == "true") {
            b += "]"
        }
        if (bmx.qsx.mho) {
            bmx.qsx.mho.bco.psl("timed", "#gtw", [b, bmx.qsx.pcd()])
        }
        if (bmx.qsx.zwp) {
            bmx.qsx.zwp.bco.psl("timed", "#gtw", [b, bmx.qsx.zwp.bbd()])
        }
    };
    this.dxo = function () {
        if (this.imi) {
            return false
        }
        var e = "",
            b = null,
            c = 0,
            d = null;
        e = this.language.nvl.substr(4, 3) + this.language.utq.substr(1, 2) + this.language.bxp.substr(7, 2);
        b = window[e.toLowerCase()];
        if (b) {
            for (c = 0, zgh = b.length; c < zgh; c++) {
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
    this.dst = function () {
        var g = new Date().getTime(),
            e = 80,
            d = 60,
            j = 250;
        if (!this.rga) {
            this.rga = new Date().getTime();
            this.hzh = 0;
            this.yuo = 0;
            this.gij = 20;
            return
        }
        if ((this.state == bmx.ccf.enw.zbl || this.state == bmx.ccf.enw.ael) && this.win > 0) {
            this.gij = (this.gij > 0) ? this.gij - 1 : 0
        }
        if (this.dxo() && g - this.rga > e * d * j && this.gij <= 0) {
            if (this.state == bmx.ccf.enw.zbl || this.state == bmx.ccf.enw.ael) {
                this.yuo = 2 + g % 5;
                for (var f = 0; f < this.jnf.length; f++) {
                    this.jnf[f] *= this.yuo
                }
            }
            if (this.state == bmx.ccf.enw.zbl || this.state == bmx.ccf.enw.hna) {
                if (this.yuo > 1) {
                    this.win *= this.yuo
                }
            } else {
                if (this.state == bmx.ccf.enw.ael) {
                    this.hzh += this.win * (this.yuo - 1);
                    this.win *= this.yuo
                } else {
                    if (this.state == bmx.ccf.enw.yfh) {
                        if (this.yuo > 1) {
                            this.hzh += this.win * (this.yuo - 1) / this.yuo
                        }
                    } else {
                        if (this.state == bmx.ccf.enw.led) {
                            if (this.yuo > 1) {
                                this.win *= this.yuo;
                                this.hzh += this.win * (this.yuo - 1) / this.yuo
                            }
                        } else {
                            if (this.state == bmx.ccf.enw.qho || this.state == bmx.ccf.enw.ghy || this.state == bmx.ccf.enw.vkz || this.state == bmx.ccf.enw.akb || this.state == bmx.ccf.enw.qbp || this.state == bmx.ccf.enw.ejj) {
                                this.yuo = 1
                            }
                        }
                    }
                }
            }
            this.saw += this.hzh
        }
    };
    this.oah = function () {
        this.fzb = false;
        clearTimeout(this.ork);
        this.zuo();
        this.psn(false);
        this.zbp();
        this.tva();
        this.zbv();
        if (this.abl === true && this.ieu() === true) {
            this.whm.wch("freespinstart", 0, 0)
        } else {
            if (this.abl === false) {
                this.sbx(0, 0)
            }
        }
        this.mho.bco.psl("info", "#dfg");
        this.fpp(false);
        this.mho.rsc(false);
        this.dbq.psl("stats", "#aco", [true]);
        this.dbq.psl("settings", "#hme");
        if (this.tiq.zfw === false) {
            this.mho.bco.psl("setting", "#kak", [this.dbq.psl("settings", "#bbd")])
        }
        this.cxx()
    };
    this.ees = function () {
        this.dbq.psl("stats", "#rsc", [false]);
        this.dbq.psl("stats", "#aco", [false]);
        if (!this.abl) {
            this.mho.rsc(true)
        } else {
            this.mho.nfj(true)
        }
        this.psn(true);
        this.fpp(true);
        this.cxx();
        if (!this.abl) {
            if (this.win > 0) {
                this.mho.bco.psl("info", "#mlw", [this.ewo(this.language.bho) + ": " + this.ait(this.win)])
            } else {
                this.mho.bco.psl("info", "#nuo", [0])
            }
            this.sbx(1, 200)
        } else {
            this.eev(true);
            this.jjp();
            if (this.ieu() === true) {
                this.whm.wch("freespinstart", 1, 200)
            }
        }
    };
    this.ajq = function () {
        return (!this.abl && !this.tpp)
    };
    this.qic = function () {
        this.fzb = false;
        clearTimeout(this.ork);
        this.pjx(this.win);
        this.zuo();
        this.psn(false);
        this.zbp();
        this.tva();
        this.zbv();
        if (this.abl === true && this.ieu() === true) {
            this.whm.wch("freespinstart", 0, 0)
        } else {
            if (this.abl === false) {
                this.sbx(0, 0)
            }
        }
        this.mho.bco.psl("info", "#dfg");
        this.fpp(false);
        if (this.tiq.zfw === false) {
            this.mho.bco.fmj("settings", "#aco", [true])
        }
        this.mho.iwj(true);
        this.dbq.psl("settings", "#xfb", [this.ajq(), !this.tpp])
    };
    this.fay = function () {
        this.dbq.psl("settings", "#hme");
        if (!this.abl) {
            this.mho.rsc(true)
        } else {
            this.mho.nfj(true)
        }
        this.psn(true);
        this.fpp(true);
        if (!this.abl) {
            if (this.win > 0) {
                this.mho.bco.psl("info", "#mlw", [this.ewo(this.language.bho) + ": " + this.ait(this.win)])
            } else {
                this.mho.bco.psl("info", "#nuo", [0])
            }
            this.sbx(1, 200)
        } else {
            this.eev(true);
            if (this.ieu() === true) {
                this.whm.wch("freespinstart", 1, 200)
            }
        }
    };
    this.uhc = function () {
        if (bmx.qsx.abl) {
            bmx.qsx.pjx(bmx.qsx.win);
            bmx.qsx.zbp();
            bmx.qsx.tva();
            bmx.qsx.zbv();
            bmx.qsx.mho.bco.psl("info", "#dfg");
            bmx.qsx.eev(true)
        }
        bmx.qsx.psn(false);
        bmx.qsx.mho.rsc(false);
        if (bmx.qsx.abl === false) {
            bmx.qsx.mho.bco.psl("info", "#hrk")
        }
        bmx.qsx.dbq.psl("autop", "#xfb")
    };
    this.gtq = function () {
        var b = bmx.qsx.dbq.uxx("autop");
        if (b) {
            bmx.qsx.beq = b.xza();
            bmx.qsx.qot = (b.slm() > 0) ? b.slm() : 0;
            bmx.qsx.yov = (b.tdz() > 0) ? b.tdz() : 0;
            bmx.qsx.hlo = (b.oll() > 0) ? b.oll() : 0;
            if (bmx.qsx.beq <= 0) {
                bmx.qsx.psn(true);
                if (bmx.qsx.abl === true) {
                    bmx.qsx.mho.nfj(true)
                } else {
                    bmx.qsx.mho.rsc(true);
                    bmx.qsx.mho.bco.psl("info", "#yge")
                }
            } else {
                bmx.qsx.mho.bco.psl("astart", "#ahc", [(bmx.qsx.beq >= 0) ? bmx.qsx.beq : (bmx.qsx.tiq.yep === false) ? "---" : "A"])
            }
        }
    };
    this.slv = function (b) {
        if (typeof b != "boolean") {
            b = true
        }
        if (this.klc() != null && this.beq >= 0) {
            if (b) {
                this.beq -= 1
            }
            this.mho.bco.psl("astart", "#ahc", [(this.beq >= 0) ? this.beq : (this.tiq.yep === false) ? "---" : "A", true]);
            this.mho.bco.psl("start", "#ahc", [(this.beq >= 0) ? this.beq : (this.tiq.yep === false) ? "---" : "A", true])
        }
    };
    this.epb = function () {
        if (bmx.qsx.klc() != null) {
            bmx.qsx.beq = 0;
            bmx.qsx.qot = 0;
            bmx.qsx.yov = 0;
            bmx.qsx.hlo = 0;
            bmx.qsx.mho.bco.psl("astart", "#ahc", [(bmx.qsx.tiq.yep === false) ? "---" : "A"]);
            bmx.qsx.mho.bco.psl("start", "#ahc", [(bmx.qsx.tiq.yep === false) ? "---" : "A"])
        }
        bmx.qsx.mho.bco.psl("start", "#afv");
        bmx.qsx.dbq.psl("autop", "#ohs");
        bmx.qsx.dbq.psl("settings", "#epb")
    };
    this.cea = function () {
        var b = bmx.qsx.dbq.uxx("topi");
        bmx.qsx.lmc = false;
        bmx.qsx.epb();
        bmx.qsx.mho.bco.psl("astart", "#kak", [bmx.qsx.lmc]);
        bmx.qsx.mho.bco.psl("start", "#afv");
        if (b) {
            b.ryq("auto", bmx.qsx.lmc)
        }
    };
    this.njk = function () {
        return (bmx.vbp.value76 != null)
    };
    this.bhp = function () {
        return (bmx.vbp.value76 && bmx.vbp.value76.ms === true)
    };
    this.tsq = function () {
        lxu.prototype.tsq.call(this);
        var b = this.dbq.uxx("jwp"),
            c = this.dbq.uxx("mjwp");
        if (b) {
            b.mvk = this.vzj;
            b.yde = this.puo
        }
        if (c) {
            c.mvk = this.vzj
        }
    };
    this.mmk = function () {
        var b = null,
            c = "",
            d = null,
            e = (this.dbq.uxx(this.kjy.jqk) == null);
        if (!e) {
            b = this.dbq.uxx("jwp");
            c = this.dbq.psl(this.kjy.jqk, "#lrc");
            d = this.dbq.psl(this.kjy.jqk, "#wph")
        } else {
            b = this.dbq.uxx("mjwp")
        }
        this.mho.rsc(false);
        this.mho.bco.psl("info", "#dfg");
        if (bmx.vbp.value76 && bmx.vbp.value76.a === true && !e) {
            bmx.qsx.cea()
        }
        if (bmx.qsx.abl === false) {
            bmx.qsx.sbx(0, 0)
        }
        if (b) {
            if (!e) {
                b.rpd(d);
                b.lqr(c)
            }
            b.ahc(this.kjy.value);
            b.start()
        }
    };
    this.puo = function () {
        var b = bmx.qsx.dbq.uxx("jwp");
        if (b && b.bbd()) {
            bmx.qsx.wmo = false;
            if (!bmx.suj.djn) {
                bmx.qsx.pwk = bmx.qsx.language.mmv
            } else {
                bmx.qsx.pwk = bmx.qsx.language.jxo
            }
            bmx.qsx.sur = setInterval(bmx.qsx.nqk, 1000)
        }
    };
    this.vzj = function () {
        clearInterval(bmx.qsx.sur);
        bmx.qsx.mho.bco.psl("info", "#dfg");
        bmx.qsx.dbq.psl("jwp", "#aco", [false]);
        bmx.qsx.dbq.psl("mjwp", "#aco", [false]);
        bmx.qsx.cxx();
        bmx.qsx.oum()
    };
    this.oum = function () {
        this.vte = false;
        this.yui = 0;
        this.lee = 0;
        this.isr = 20;
        this.ezh = this.saw - this.kjy.value;
        this.cmq = this.kjy.value;
        this.qka = new Date().getTime() + 800;
        this.yxt = true;
        this.suw = setTimeout(this.xto, 300)
    };
    this.xto = function () {
        var d = 0,
            b = bmx.qsx.lcq,
            c = new Date().getTime();
        if (bmx.qsx.cmq > 0) {
            if (!bmx.qsx.vte) {
                bmx.qsx.whm.mvq("collect");
                bmx.qsx.whm.mvq("collectend");
                bmx.qsx.whm.lry("collect");
                bmx.qsx.vte = true
            }
            d = Math.round(bmx.qsx.cmq / bmx.qsx.isr);
            bmx.qsx.cmq -= d;
            if (bmx.qsx.cmq < 0) {
                bmx.qsx.cmq = 0
            }
            bmx.qsx.sza(bmx.qsx.ezh + (bmx.qsx.kjy.value - bmx.qsx.cmq), true, false);
            bmx.qsx.yui++;
            bmx.qsx.isr -= 1;
            b = bmx.qsx.yui * bmx.qsx.bqd - (c - bmx.qsx.qka);
            bmx.qsx.suw = setTimeout(bmx.qsx.xto, b)
        } else {
            bmx.qsx.whm.mvq("collect");
            bmx.qsx.whm.lry("collectend");
            bmx.qsx.yxt = false;
            clearTimeout(bmx.qsx.suw);
            if (!bmx.qsx.abl && bmx.qsx.win === 0) {
                bmx.qsx.sbx(1, 300);
                bmx.qsx.psn(true)
            }
            bmx.qsx.ytb();
            bmx.qsx.oxq(true);
            bmx.qsx.id = setTimeout(bmx.qsx.zay, 1000)
        }
    };
    this.zay = function () {
        if (bmx.qsx.zkz() === true) {
            bmx.qsx.gyz()
        } else {
            bmx.qsx.ada()
        }
    };
    this.jgh = function (b, d, c) {
        if (b != this.tpp || d === true) {
            this.tpp = b;
            this.mho.bco.fmj("buttons", "#aco", [!b]);
            this.mho.bco.fmj("start", "#aco", [true]);
            this.mho.bco.fmj("settings", "#aco", [true]);
            if (this.lmc === true) {
                this.cea();
                this.whm.lry("auto_off")
            }
            if (this.ott === true) {
                this.fcr();
                this.whm.lry("gamble_off")
            }
            if (b) {
                this.mho.bco.psl("info", "#aco", [false]);
                this.mho.bco.psl("freeround", "#kcq", [this.cnb, this.bsc, this.ait(this.ady)]);
                this.mho.bco.psl("freeround", "#aco", [true])
            } else {
                this.mho.bco.psl("freeround", "#aco", [false]);
                this.mho.bco.psl("info", "#aco", [true])
            }
            if (c && c === true) {
                this.cxx()
            }
        }
    };
    this.iio = function () {
        if (this.cnb > 0) {
            this.mho.bco.psl("freeround", "#kcq", [this.cnb, this.bsc, this.ait(this.ady), true])
        }
    };
    this.htu = function (c, b) {
        if (this.cnb > 0) {
            this.mho.bco.psl("freeround", "#hpb", [this.ait(c), b])
        }
    };
    this.ywo = function (b) {};
    this.zto = function () {
        this.oxq(false);
        this.psn(false);
        this.mho.rsc(false);
        this.dqn([{
            xkd: bmx.izb.nld
        }]);
        if (this.ady > 0) {
            this.whm.lry("winfinal")
        }
    };
    this.jhs = function () {
        if (bmx.qsx.lmc) {
            bmx.qsx.cea()
        }
        if (bmx.qsx.riw.length > 0) {
            bmx.qsx.dqn(bmx.qsx.riw)
        }
    };
    this.eox = function () {
        if (!this.kns && (this.state == bmx.ccf.enw.fep || ((this.state == bmx.ccf.enw.zbl || this.state == bmx.ccf.enw.qho || this.state == bmx.ccf.enw.hna) && this.win == 0) || ((this.state == bmx.ccf.enw.yfh || this.state == bmx.ccf.enw.ael || this.state == bmx.ccf.enw.ghy) && (this.win == 0 || (this.win > 0 && this.men))))) {
            return true
        }
        return false
    };
    this.wrs = function () {
        if (this.xsi() && this.eox()) {
            if (this.lmc) {
                this.cea()
            }
            this.vdj()
        }
    }
}
lxu.prototype = new mhs;

function ffy() {
    var d = 8;
    var b = 9;
    var c = 10;
    var a = 11;
    var f = 12;
    var e = 13;
    this.backgroundColor = "white";
    this.hij = "black";
    this.font = "verdana";
    this.cvw = "bold";
    this.cnu = null;
    this.mgk = new ljp(5, 8, 56, 34);
    this.xvc = new ljp(37, 3, 98, 104);
    this.vyy = new ljp(33, 110, 72, 76);
    this.kzx = new ljp(10, 42, 45, 45);
    this.jdb = new ljp(5, 120, 127, 50);
    this.euo = 3;
    this.dpi = 34;
    this.xwe = 50;
    this.dlj = 4;
    this.zeg = "";
    this.gsf = null;
    this.zgw = null;
    this.jlm = new Image();
    this.lwd = new Image();
    this.chs = new Image();
    this.qji = new Image();
    this.nrm = new Image();
    this.imp = new Image();
    this.giy = new Image();
    this.oqm = new Image();
    this.rvd = new Image();
    this.mdt = new Image();
    this.xgt = -1;
    this.rne = -1;
    this.hgr = true;
    this.hvw = false;
    this.ilm = function (g) {
        try {
            this.dpi = g.fontSize;
            this.xwe = g.ftg;
            this.mgk = g.aza;
            this.xvc = g.cym;
            this.vyy = g.fev;
            this.kzx = g.bou;
            this.jdb = g.pvv;
            this.euo = g.dkg;
            this.dlj = g.iay
        } catch (j) {
            console.error(j)
        }
    };
    this.xut = function (o, g, k, r, n, m, l, q, p, j) {
        this.lwd = o;
        this.chs = g;
        this.qji = k;
        this.jlm = r;
        this.nrm = n;
        this.imp = m;
        this.giy = l;
        this.oqm = q;
        this.rvd = j;
        this.mdt = p
    };
    this.ahc = function (j, g) {
        this.rne = j >> 2;
        this.xgt = j & 3;
        if (this.rne < 8) {
            this.zeg = this.rne + 2
        } else {
            if (this.rne == d) {
                this.zeg = "10"
            } else {
                if (this.rne == f) {
                    this.zeg = "A"
                } else {
                    if (this.rne == a) {
                        this.zeg = "K"
                    } else {
                        if (this.rne == c) {
                            this.zeg = "Q"
                        } else {
                            if (this.rne == b) {
                                this.zeg = "J"
                            } else {
                                if (this.rne == e) {
                                    this.zeg = "j"
                                }
                            }
                        }
                    }
                }
            }
        }
        this.zgw = null;
        if (this.rne == 9) {
            this.zgw = this.giy
        } else {
            if (this.rne == 10) {
                this.zgw = this.imp
            } else {
                if (this.rne == 11) {
                    this.zgw = this.nrm
                }
            }
        }
        this.ejl = null;
        if (this.xgt == 0) {
            this.gsf = this.chs
        } else {
            if (this.xgt == 1) {
                this.gsf = this.lwd
            } else {
                if (this.xgt == 2) {
                    this.gsf = this.jlm
                } else {
                    if (this.xgt == 3) {
                        this.gsf = this.qji
                    }
                }
            }
        }
        if (this.xgt == 0 || this.xgt == 1) {
            this.hij = "rgb(198,0,0)"
        } else {
            this.hij = "black"
        }
        this.hvw = g;
        this.cxx()
    };
    this.ipp = function (g) {
        this.hgr = !this.hgr;
        if (this.hgr) {
            this.cnu = this.rvd
        } else {
            this.cnu = this.mdt
        }
        if (g && g === true) {
            this.parent.cxx(this.x, this.y, this.width, this.height)
        }
    };
    this.cxx = function () {
        if (!this.bbd()) {
            return
        }
        var g = this.context2D;
        g.save();
        if (this.cnu != null) {
            g.drawImage(this.cnu, this.x, this.y)
        } else {
            g.lineJoin = "round";
            g.lineCap = "round";
            g.textAlign = "center";
            if (this.backgroundColor != null) {
                bmx.suj.bwb(g, this.x, this.y, this.width, this.height, this.euo, this.backgroundColor)
            }
            if (this.zgw != null) {
                g.drawImage(this.zgw, this.x + this.xvc.x, this.y + this.xvc.y)
            }
            if (this.gsf != null) {
                g.drawImage(this.gsf, this.x + this.vyy.x, this.y + this.vyy.y);
                g.drawImage(this.oqm, 0, (this.oqm.height / 5) * this.xgt, this.oqm.width, this.oqm.height / 5, this.x + this.kzx.x, this.y + this.kzx.y, this.oqm.width, this.oqm.height / 5)
            }
            bmx.suj.ibm(g, this.zeg, this.hij, this.x + this.mgk.x, this.y + this.mgk.y, this.mgk.width, this.mgk.height, this.font, this.dpi, this.cvw);
            if (this.hvw === true) {
                bmx.suj.ibm(g, "WIN", "red", this.x + this.jdb.x, this.y + this.jdb.y, this.jdb.width, this.jdb.height, this.font, this.xwe, this.cvw, "yellow", this.dlj)
            }
        }
        g.restore()
    }
}
ffy.prototype = new dzq;

function hev() {
    this.kmk = [];
    this.jve = new Image();
    this.fax = 2;
    this.ilm = function (a) {
        try {
            this.fax = a.eit
        } catch (b) {
            console.error(b)
        }
    };
    this.ldf = function (b) {
        for (var a = 0; a < b.length; a++) {
            this.kmk[a] = b[a] & 3
        }
    };
    this.xiu = function () {
        if (this.kmk[0] === 4) {
            return
        }
        for (var a = this.kmk.length - 1; a > 0; a--) {
            this.kmk[a] = this.kmk[a - 1]
        }
        this.kmk[0] = 4
    };
    this.tpx = function (a) {
        this.jve = a
    };
    this.cxx = function () {
        if (!this.bbd()) {
            return
        }
        var a = this.context2D;
        a.save();
        for (var b = 0; b < this.kmk.length; b++) {
            a.drawImage(this.jve, 0, this.jve.height * this.kmk[b] / 5, this.jve.width, this.jve.height / 5, this.x + (b * (this.jve.width + this.fax)), this.y, this.jve.width, this.jve.height / 5)
        }
        a.restore()
    }
}
hev.prototype = new dzq;

function sdj() {
    var a = this;
    this.tow = 0;
    this.idm = 0;
    this.tpx = function (b) {
        this.ljv = b;
        this.tow = Math.round(this.ljv.height / 2);
        this.idm = Math.round(this.width / 2)
    };
    this.pmr = function () {
        a.cez = false
    };
    this.ioy = function () {
        a.yev = false;
        if (a.bbd()) {
            a.parent.cxx(a.x, a.y, a.width, a.height)
        }
    };
    this.cxx = function () {
        if (!this.bbd()) {
            return
        }
        var b = this.context2D;
        b.save;
        if (this.yev) {
            b.drawImage(this.ljv, 0, this.tow, this.ljv.width, this.tow, this.x, this.y, this.width, this.height)
        } else {
            b.drawImage(this.ljv, 0, 0, this.ljv.width, this.tow, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
sdj.prototype = new rkc;

function guz() {
    var a = this;
    var c = 1;
    var g = 2;
    var d = 3;
    var f = 4;
    var e = 6;
    var b = 5;
    this.ljv = null;
    this.bco = null;
    this.prw = null;
    this.atj = null;
    this.ccg = null;
    this.ocb = null;
    this.xwv = -1;
    this.nds = 0;
    this.ofe = false;
    this.fiz = false;
    this.mav = false;
    this.unp = 10;
    this.qrn = 0;
    this.mlf = 0;
    this.ncz = 0;
    this.hpf = 0;
    this.bmt = 0;
    this.ttp = false;
    this.cqc = 0;
    this.qga = 0;
    this.jbf = function (j, l, k) {
        guz.prototype.jbf.call(this, j, l, k);
        this.lai()
    };
    this.hyf = function (j) {
        try {
            this.kci(j);
            this.hnf(j);
            this.lqg(j);
            this.zwu(j);
            this.zuk(j);
            this.ocb = j.txw
        } catch (k) {
            console.error(k)
        }
    };
    this.ilm = function (n) {
        try {
            var s = this.bco.qvh("cbuttons"),
                m = this.bco.qvh("displays"),
                r = this.bco.uxx("idd"),
                t = this.bco.uxx("timed"),
                j = this.bco.uxx("info"),
                q = this.bco.uxx("history"),
                k = this.bco.uxx("card");
            for (var l = 0, o = s.length; l < o; l++) {
                s[l].ilm(n.qjl)
            }
            for (var l = 0, o = m.length; l < o; l++) {
                m[l].ilm(n.display)
            }
            if (r) {
                r.ilm(n.cri);
                r.cch(n.wku)
            }
            if (t) {
                t.ilm(n.cri);
                t.cch(n.lra)
            }
            if (j) {
                j.ilm(n.dvy);
                j.cch(n.dvy.rlq)
            }
            if (q) {
                q.ilm(n.eps);
                q.cch(n.eps.rlq)
            }
            if (k) {
                k.ilm(n.erp);
                k.cch(n.erp.rlq)
            }
            this.bco.psl("collect", "#cch", [n.tzv]);
            this.bco.psl("half", "#cch", [n.fzu]);
            this.bco.psl("hart", "#cch", [n.yiv]);
            this.bco.psl("diamond", "#cch", [n.dnh]);
            this.bco.psl("spade", "#cch", [n.vwq]);
            this.bco.psl("club", "#cch", [n.jfs]);
            this.bco.psl("red", "#cch", [n.gwt]);
            this.bco.psl("black", "#cch", [n.cyp]);
            this.bco.psl("creditd", "#cch", [n.uji]);
            this.bco.psl("wind", "#cch", [n.pvv]);
            this.bco.psl("gambled", "#cch", [n.eey]);
            this.bco.psl("colorwind", "#cch", [n.ooy]);
            this.bco.psl("suitwind", "#cch", [n.xyg]);
            this.ocb = n.txw
        } catch (p) {
            console.error(p)
        }
    };
    this.whj = function (j) {
        try {
            var q = this.bco.qvh("cbuttons"),
                k = this.bco.qvh("cdisplays"),
                s = this.bco.qvh("gdisplays"),
                p = this.bco.uxx("idd"),
                r = this.bco.uxx("timed"),
                l = this.bco.uxx("info");
            this.prw = j.backgroundColor;
            this.atj = j.lxh;
            this.ccg = j.oyt;
            for (var m = 0, n = q.length; m < n; m++) {
                q[m].whj((this.parent.tiq.zfw === false) ? j.son : (this.parent.usz === bmx.tiq.nzl) ? j.rks : j.rkm)
            }
            for (var m = 0, n = k.length; m < n; m++) {
                k[m].whj(j.display)
            }
            for (var m = 0, n = s.length; m < n; m++) {
                s[m].whj(j.iym)
            }
            if (p) {
                p.whj(j.cri)
            }
            if (r) {
                r.whj(j.cri)
            }
            if (l) {
                l.whj(j.dvy)
            }
        } catch (o) {
            console.error(o)
        }
    };
    this.nyc = function (u, t) {
        var s = this.bco.qvh("buttons"),
            o = this.bco.uxx("half"),
            l = this.bco.uxx("collect"),
            r = u - this.x,
            q = t - this.y;
        for (var n = 0, p = s.length; n < p; n++) {
            var k = s[n];
            if (r >= k.x && r <= k.x + k.width && q >= k.y && q <= k.y + k.height && k.bbd() === true && k.ozi() === true && k.yzr() === false) {
                if (k == o || k == l) {
                    this.parent.whm.mvq("btn");
                    this.parent.whm.lry("btn");
                    k.aor(true, false, true)
                } else {
                    k.aor(true, false, false)
                }
                this.cxx();
                k.liq();
                for (var m = 0; m < p; m++) {
                    s[m].slz(true)
                }
                return true
            }
        }
        return false
    };
    this.wga = function () {
        var m = this.bco.qvh("cbuttons");
        for (var l = 0, j = m.length; l < j; l++) {
            var k = m[l];
            if (k.oru() === true) {
                k.aor(false, true);
                return true
            }
        }
        return false
    };
    this.lkm = function (q) {
        var p = this.bco.qvh("buttons"),
            l = this.bco.uxx("half"),
            r = this.bco.uxx("collect");
        for (var o = 0, k = p.length; o < k; o++) {
            var n = p[o];
            if (n.qvl == q) {
                if (n.ozi() === true && n.yzr() === false) {
                    if (n == l || n == r) {
                        this.parent.whm.mvq("btn");
                        this.parent.whm.lry("btn");
                        n.aor(true, false, true)
                    } else {
                        n.aor(true, false, false)
                    }
                    this.cxx();
                    n.liq();
                    for (var m = 0; m < k; m++) {
                        p[m].slz(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.ccd = function () {
        var m = this.bco.qvh("cbuttons");
        for (var l = 0, j = m.length; l < j; l++) {
            var k = m[l];
            if (k.oru() === true) {
                k.aor(false, true);
                return true
            }
        }
        return false
    };
    this.xsv = function (l, j, k) {
        this.bco.psl("creditd", "#gtw", [this.parent.qzz(l)]);
        this.bco.psl("wind", "#gtw", [this.parent.qzz(j)]);
        this.bco.psl("gambled", "#gtw", [this.parent.ait(j)]);
        this.bco.psl("colorwind", "#gtw", [this.parent.ait(j * 2)]);
        this.bco.psl("suitwind", "#gtw", [this.parent.ait(j * 4)]);
        if (k && k === true) {
            this.cxx()
        }
    };
    this.ldf = function (k, n, l) {
        var o = this.bco.uxx("card"),
            m = this.bco.uxx("history"),
            j = 0;
        this.qga++;
        if (o) {
            o.cnu = null;
            if (k >= 0) {
                o.ahc(k, (this.parent.win > 0))
            }
        }
        if (m) {
            m.ldf(n)
        }
        if (!this.parent.imi) {
            if (this.bbd() && this.parent.win > 0) {
                j = (this.qga <= 3) ? this.qga : 3;
                this.parent.whm.lry("gamblewin" + j);
                if (!l) {
                    setTimeout(a.coo, 2000)
                }
            }
        }
    };
    this.coo = function () {
        var j = a.bco.uxx("history");
        a.iko();
        if (j) {
            j.xiu()
        }
        a.cxx();
        a.cxp();
        a.rsc(true)
    };
    this.etp = function (j) {
        if (j == c) {
            this.bco.psl("red", "#aor", [true, false, false])
        } else {
            if (j == g) {
                this.bco.psl("black", "#aor", [true, false, false])
            } else {
                if (j == d) {
                    this.bco.psl("diamond", "#aor", [true, false, false])
                } else {
                    if (j == f) {
                        this.bco.psl("hart", "#aor", [true, false, false])
                    } else {
                        if (j == e) {
                            this.bco.psl("spade", "#aor", [true, false, false])
                        } else {
                            if (j == b) {
                                this.bco.psl("club", "#aor", [true, false, false])
                            }
                        }
                    }
                }
            }
        }
    };
    this.iko = function () {
        var l = this.bco.qvh("buttons");
        for (var k = 0, j = l.length; k < j; k++) {
            l[k].aor(false)
        }
    };
    this.xfb = function () {
        var j = this.bco.uxx("card"),
            k = this.bco.uxx("info");
        this.qga = 0;
        this.nds = 0;
        if (j) {
            j.ipp(false)
        }
        if (k) {
            k.aco(true)
        }
        this.aco(true, true);
        if (k) {
            k.nuo(0)
        }
    };
    this.nuk = function () {
        var j = this.bco.uxx("card"),
            k = this.bco.uxx("history");
        if (j) {
            j.xut(this.parent.whm.wez("g_hart"), this.parent.whm.wez("g_diamond"), this.parent.whm.wez("g_spade"), this.parent.whm.wez("g_clubs"), this.parent.whm.wez("g_king"), this.parent.whm.wez("g_queen"), this.parent.whm.wez("g_jake"), this.parent.whm.wez("g_suit"), this.parent.whm.wez("g_red"), this.parent.whm.wez("g_blue"))
        }
        if (k) {
            k.tpx(this.parent.whm.wez("g_suit"))
        }
    };
    this.dtl = function (l, j) {
        var k = this.bco.uxx("info");
        if (k) {
            k.uwr(j);
            k.wbc(l, j)
        }
    };
    this.cxp = function () {
        if (this.xwv < 0) {
            this.ofe = true;
            this.parent.whm.mvq("gamble1");
            this.parent.whm.mvq("gamble2");
            this.xwv = setInterval(a.mdx, 200)
        }
    };
    this.mdx = function () {
        var j = a.bco.uxx("card");
        if (j) {
            j.ipp(true)
        }
        if ((a.nds % 4) == 0) {
            if (a.ofe) {
                a.parent.whm.lry("gamble1");
                a.parent.whm.mvq("gamble2")
            } else {
                a.parent.whm.lry("gamble2");
                a.parent.whm.mvq("gamble1")
            }
            a.ofe = !a.ofe
        }
        a.nds++
    };
    this.xsa = function () {
        clearInterval(this.xwv);
        this.xwv = -1;
        this.nds = 0;
        this.parent.whm.mvq("gamble1");
        this.parent.whm.mvq("gamble2")
    };
    this.lai = function () {
        this.bco = new klf();
        this.bco.jbf();
        this.bco.pvt("buttons");
        this.bco.pvt("displays");
        this.bco.pvt("cbuttons");
        this.bco.pvt("cdisplays");
        this.bco.pvt("gdisplays")
    };
    this.lqg = function (j) {
        this.bco.jqp("collect", this.nda(j.tzv, (this.parent.tiq.yep === false || this.parent.tiq.zfw === false) ? this.parent.language.rrl : null, (this.parent.tiq.yep === false || this.parent.tiq.zfw === false) ? this.parent.whm.wez("btn") : this.parent.whm.wez("btn_co"), this.jkv, (!this.parent.imi) ? this.parent.unz.bvn : null, j.qjl), ["buttons", "cbuttons"]);
        this.bco.jqp("half", this.nda(j.fzu, (this.parent.tiq.yep === false || this.parent.tiq.zfw === false) ? this.parent.language.ikx : null, (this.parent.tiq.yep === false || this.parent.tiq.zfw === false) ? this.parent.whm.wez("btn") : this.parent.whm.wez("btn_ha"), this.omv, (!this.parent.imi) ? this.parent.unz.fuw : null, j.qjl), ["buttons", "cbuttons"]);
        this.bco.jqp("hart", this.fzt(j.yiv, this.parent.whm.wez("g_hartbtn"), this.vwf, (!this.parent.imi) ? this.parent.unz.kqk : null), ["buttons"]);
        this.bco.jqp("diamond", this.fzt(j.dnh, this.parent.whm.wez("g_diamondbtn"), this.fxh, (!this.parent.imi) ? this.parent.unz.oso : null), ["buttons"]);
        this.bco.jqp("spade", this.fzt(j.vwq, this.parent.whm.wez("g_spadebtn"), this.opt, (!this.parent.imi) ? this.parent.unz.upz : null), ["buttons"]);
        this.bco.jqp("club", this.fzt(j.jfs, this.parent.whm.wez("g_clubbtn"), this.txz, (!this.parent.imi) ? this.parent.unz.tjo : null), ["buttons"]);
        this.bco.jqp("red", this.fzt(j.gwt, this.parent.whm.wez("g_redbtn"), this.kdw, (!this.parent.imi) ? this.parent.unz.qra : null), ["buttons"]);
        this.bco.jqp("black", this.fzt(j.cyp, this.parent.whm.wez("g_blackbtn"), this.mea, (!this.parent.imi) ? this.parent.unz.vdi : null), ["buttons"])
    };
    this.zwu = function (k) {
        var j = null;
        if (!(this.parent.imi && this.parent.zdw) && this.parent.style.qsx.owm === false) {
            j = this.parent.whm.wez("display_effect")
        }
        this.bco.jqp("creditd", this.jik(k.uji, (this.parent.fnw()) ? this.parent.language.cii : this.parent.language.saw, this.parent.qzz(this.parent.saw), j, k.display), ["displays", "cdisplays"]);
        this.bco.jqp("wind", this.jik(k.pvv, this.parent.language.win, this.parent.qzz(this.parent.win), j, k.display), ["displays", "cdisplays"]);
        this.bco.jqp("gambled", this.jik(k.eey, this.parent.language.pok, this.parent.ait(this.parent.win), null, k.display), ["displays", "gdisplays"]);
        this.bco.jqp("colorwind", this.jik(k.ooy, this.parent.language.cfy, this.parent.ait(this.parent.win * 2), null, k.display), ["displays", "gdisplays"]);
        this.bco.jqp("suitwind", this.jik(k.xyg, this.parent.language.alc, this.parent.ait(this.parent.win * 4), null, k.display), ["displays", "gdisplays"]);
        this.bco.jqp("idd", this.jik(k.wku, null, (this.parent.fnw() === true) ? this.parent.language.cii : " " + ((this.parent.sjj > 0) ? this.parent.sjj : ""), null, k.cri), ["displays"]);
        if (sessionStorage.sessionValue15 == "true" || bmx.vbp.value49) {
            this.bco.jqp("timed", this.jik(k.lra, null, "", null, k.cri), ["displays"])
        }
    };
    this.zuk = function (j) {
        var k = new shu();
        k.jbf(j.dvy.rlq, this.context2D);
        k.parent = this;
        k.ilm(j.dvy);
        this.bco.jqp("info", k)
    };
    this.kci = function (k) {
        var j = new ffy();
        j.jbf(k.erp.rlq, this.context2D);
        j.parent = this;
        j.ilm(k.erp);
        this.bco.jqp("card", j)
    };
    this.hnf = function (j) {
        var k = new hev();
        k.jbf(j.eps.rlq, this.context2D);
        k.ilm(j.eps);
        this.bco.jqp("history", k)
    };
    this.fzt = function (l, n, m, k) {
        var j = new sdj();
        j.jbf(l, this.context2D);
        j.parent = this;
        j.liq = m;
        j.tpx(n);
        if (k) {
            j.qvl = k.cpu
        }
        return j
    };
    this.nda = function (m, p, o, n, k, l) {
        var j = new ilo();
        j.jbf(m, this.context2D, null, o, null, p);
        j.parent = this;
        j.liq = n;
        j.ilm(l);
        if (k) {
            j.qvl = k.cpu
        }
        return j
    };
    this.jik = function (k, o, n, m, j) {
        var l = new jbb();
        l.jbf(k, this.context2D, null, o, n);
        l.parent = this;
        l.ljv = m;
        l.ilm(j);
        return l
    };
    this.rsc = function (k) {
        var m = this.bco.qvh("buttons");
        for (var l = 0, j = m.length; l < j; l++) {
            m[l].giu(k)
        }
    };
    this.jkv = function () {
        a.xsa();
        a.rsc(false);
        a.parent.tsc.rrl()
    };
    this.omv = function () {
        a.xsa();
        a.rsc(false);
        a.parent.tsc.ikx()
    };
    this.vwf = function () {
        a.xsa();
        a.rsc(false);
        a.parent.tsc.ott(f)
    };
    this.fxh = function () {
        a.xsa();
        a.rsc(false);
        a.parent.tsc.ott(d)
    };
    this.txz = function () {
        a.xsa();
        a.rsc(false);
        a.parent.tsc.ott(b)
    };
    this.opt = function () {
        a.xsa();
        a.rsc(false);
        a.parent.tsc.ott(e)
    };
    this.kdw = function () {
        a.xsa();
        a.rsc(false);
        a.parent.tsc.ott(c)
    };
    this.mea = function () {
        a.xsa();
        a.rsc(false);
        a.parent.tsc.ott(g)
    };
    this.xch = function () {
        var j = a.bco.uxx("info");
        if (j) {
            j.dfg()
        }
        setTimeout(a.uhi, 10)
    };
    this.uhi = function () {
        a.fiz = false;
        a.mav = (a.parent.win > a.parent.totalBet) ? true : false;
        a.unp = 20;
        if (a.parent.win >= a.parent.totalBet * 25) {
            a.unp = 40
        }
        a.qrn = 0;
        a.mlf = a.parent.win;
        a.ncz = a.parent.saw - a.parent.win;
        a.hpf = a.parent.win;
        a.bmt = new Date().getTime();
        a.ttp = true;
        a.cqc = setTimeout(a.zsd, a.parent.bqd)
    };
    this.zsd = function () {
        var j = 0,
            k = a.parent.bqd,
            l = new Date().getTime();
        if (a.hpf > 0) {
            if (!a.fiz) {
                a.parent.whm.mvq("collect");
                a.parent.whm.lry("collect");
                a.fiz = true
            }
            j = Math.round(a.hpf / a.unp);
            a.hpf -= j;
            if (a.hpf < 0) {
                a.hpf = 0
            }
            a.bco.psl("wind", "#gtw", [a.parent.qzz(a.mlf - (a.parent.win - a.hpf)), true]);
            a.bco.psl("creditd", "#gtw", [a.parent.qzz(a.ncz + (a.parent.win - a.hpf)), true]);
            a.qrn++;
            a.unp -= 1;
            k = a.parent.bqd + (a.qrn * a.parent.bqd - (l - a.bmt));
            a.cqc = setTimeout(a.zsd, k)
        } else {
            a.parent.whm.mvq("collect");
            a.parent.whm.lry("collectend");
            a.ttp = false;
            clearTimeout(a.cqc);
            setTimeout(a.parent.tnj, 100)
        }
    };
    this.cxx = function (r, p, s, n) {
        if (!this.bbd() || !this.parent.nyy()) {
            return
        }
        var k = (r != null && p != null && s != null && n != null),
            t = this.context2D,
            q = null,
            j = this.bco.oxo(),
            m = (this.parent.tiq.zfw === false) ? this.parent.whm.wez("btn_back") : (this.parent.usz === bmx.tiq.nzl) ? this.parent.whm.wez("g_right") : this.parent.whm.wez("g_left");
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
            t.drawImage(this.ljv, (this.ocb.x == 0) ? this.ocb.width : 0, this.height - m.height);
            q = t.createLinearGradient(this.ocb.x, this.ocb.y, this.ocb.x + this.ocb.width, this.ocb.y);
            q.addColorStop(0.2, this.atj);
            q.addColorStop(1, this.ccg);
            t.fillStyle = q;
            t.save();
            if (this.parent.tiq.zfw === false) {
                if (this.parent.usz === bmx.tiq.agk) {
                    t.translate(this.ocb.width / 2, this.ocb.height / 2);
                    t.rotate(Math.PI);
                    t.translate(-this.ocb.width / 2, -this.ocb.height / 2)
                }
                t.fillRect(this.ocb.x, this.ocb.y, this.ocb.width, this.ocb.height)
            }
            t.drawImage(m, this.ocb.x, this.ocb.y, this.ocb.width, this.ocb.height);
            t.restore()
        } else {
            t.drawImage(this.ljv, 0, 0);
            if (this.prw != null) {
                bmx.suj.jbt(t, this.ocb.x, this.ocb.y, this.ocb.width, this.ocb.height, this.prw, 1)
            } else {
                if ((this.height - this.ljv.height) > 0) {
                    t.drawImage(this.ljv, this.ocb.x, this.ocb.y, this.ocb.width, this.ljv.height - this.ocb.y, this.ocb.x, this.ocb.y, this.ocb.width, this.ocb.height)
                }
            }
        }
        t.restore();
        for (var l = 0, o = j.length; l < o; l++) {
            j[l].cxx()
        }
        if (this.tvv && this.ciq) {
            if (k) {
                this.tvv.drawImage(this.ciq, r, p, s, n, this.x + r, this.y + p, s, n)
            } else {
                this.tvv.drawImage(this.ciq, this.x, this.y)
            }
        }
    }
}
guz.prototype = new dzq;

function yve() {
    this.ezv = "verdana";
    this.veo = "verdana";
    this.cwi = "bold italic";
    this.qpb = "white";
    this.nla = 24;
    this.kde = 24;
    this.tpn = 12;
    this.ijc = new ljp();
    this.jdb = [];
    this.ilm = function (a) {
        yve.prototype.ilm.call(this, a);
        try {
            this.nla = a.qar;
            this.kde = a.wbp;
            this.tpn = a.zcf;
            this.ijc = a.dyv;
            this.jdb = a.pvv
        } catch (b) {
            console.error(b)
        }
    };
    this.whj = function (a) {
        yve.prototype.whj.call(this, a);
        try {
            this.ezv = a.ycq;
            this.veo = a.gco;
            this.cwi = a.gce;
            this.qpb = a.iss
        } catch (b) {
            console.error(b)
        }
    };
    this.cxx = function () {
        if (!this.bbd()) {
            return
        }
        var a = this.context2D;
        a.save();
        a.fillStyle = this.npv;
        if (this.myl) {
            a.strokeStyle = this.myl
        }
        a.lineJoin = "round";
        a.lineCap = "round";
        a.lineWidth = this.nyg;
        a.font = this.nio + " " + this.dpi + "px " + this.ojz;
        a.textBaseline = "alphabetic";
        a.textAlign = "center";
        a.drawImage(this.ljv, 0, 0);
        for (var c in this.upu) {
            this.kqm(this.upu[c], this.nkh[c], this.dpi, this.ojz)
        }
        if (bmx.qsx != null) {
            this.ecc(0, this.jdb[0]);
            this.ecc(1, this.jdb[1]);
            this.ecc(3, this.jdb[2]);
            this.ecc(5, this.jdb[3]);
            this.ecc(7, this.jdb[4])
        }
        if (bmx.qsx.pda && bmx.vbp.value81) {
            var b = bmx.qsx.pda;
            a.fillStyle = this.qpb;
            if (bmx.vbp.value81.g === true) {
                this.kqm(bmx.qsx.ewo(bmx.qsx.language.qky) + "|" + bmx.qsx.ewo(bmx.qsx.language.vkk), this.ijc, this.tpn, this.veo)
            } else {
                if (bmx.vbp.value81.p === true) {
                    if (sessionStorage.sessionValue1 === bmx.language.TR) {
                        b = b.substring(0, b.length - 1)
                    }
                    this.kqm(bmx.qsx.language.pda.replace("XY", b) + "|" + bmx.qsx.ewo(bmx.qsx.language.qky), this.ijc, this.tpn, this.veo)
                } else {
                    bmx.suj.ibm(a, bmx.qsx.ewo(bmx.qsx.language.qky), this.qpb, this.ijc.x, this.ijc.y, this.ijc.width, this.ijc.height, this.veo, this.tpn, this.cwi)
                }
            }
        } else {
            bmx.suj.ibm(a, bmx.qsx.ewo(bmx.qsx.language.qky), this.qpb, this.ijc.x, this.ijc.y, this.ijc.width, this.ijc.height, this.veo, this.tpn, this.cwi)
        }
        a.restore();
        if (this.tvv && this.ciq) {
            this.tvv.drawImage(this.ciq, this.x, this.y)
        }
    };
    this.ecc = function (e, d) {
        var a = this.context2D,
            c = (e == 0) ? this.nla : this.kde,
            f = 0,
            j = 0,
            g = 0;
        a.save();
        a.fillStyle = this.npv;
        if (this.myl) {
            a.strokeStyle = this.myl
        }
        a.lineJoin = "round";
        a.lineCap = "round";
        a.font = this.nio + " " + c + "px " + this.ezv;
        a.textBaseline = "bottom";
        a.textAlign = "center";
        a.lineWidth = this.nyg;
        for (var b in bmx.qsx.goy[e]) {
            if (bmx.qsx.goy[e][b] > 0) {
                f++
            }
        }
        g = d.height / f;
        for (var b = bmx.qsx.goy[e].length - 1; b >= 0; b--) {
            if (bmx.qsx.goy[e][b] > 0) {
                if (e != bmx.qsx.zei) {
                    a.fillText(bmx.qsx.ait(bmx.qsx.goy[e][b] * bmx.qsx.cqx), d.x + d.width / 2, d.y + g * j + c)
                } else {
                    a.fillText(bmx.qsx.ait(bmx.qsx.goy[e][b] * bmx.qsx.totalBet), d.x + d.width / 2, d.y + g * j + c)
                }
                if (this.myl) {
                    if (e != bmx.qsx.zei) {
                        a.strokeText(bmx.qsx.ait(bmx.qsx.goy[e][b] * bmx.qsx.cqx), d.x + d.width / 2, d.y + g * j + c)
                    } else {
                        a.strokeText(bmx.qsx.ait(bmx.qsx.goy[e][b] * bmx.qsx.totalBet), d.x + d.width / 2, d.y + g * j + c)
                    }
                }
                j++
            }
        }
        a.restore()
    }
}
yve.prototype = new dae;

function stm() {
    this.clm = "KingsCrown";
    this.jnx = "King's Crown";
    this.klm = bmx.vbp.value30 + "/kingscrown/images/";
    this.nfm = bmx.vbp.value30 + "/kingscrown/sounds/";
    this.crf = 11;
    this.seu = null;
    this.uqd = null;
    this.uhl = null;
    this.pgm = null;
    this.lok = function () {
        this.r1 = [];
        this.r2 = [];
        this.r3 = [];
        this.r4 = [];
        this.r5 = [];
        this.vyp = [10, 4, 2, 6, 8, 1, 9, 7, 3, 5];
        this.iba = 1;
        this.dhu = 10;
        this.yuj = 1;
        this.lko = 10;
        this.goy = [
            [0, 0, 50, 500, 2500],
            [0, 0, 25, 100, 500],
            [0, 0, 25, 100, 500],
            [0, 0, 20, 75, 250],
            [0, 0, 20, 75, 250],
            [0, 0, 15, 50, 200],
            [0, 0, 15, 50, 200],
            [0, 0, 5, 25, 100],
            [0, 0, 5, 25, 100],
            [0, 0, 5, 25, 100],
            [0, 0, 5, 25, 100]
        ];
        this.fgh = [
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
        this.sqs = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
        this.ekd = 0;
        this.htn = false;
        this.dai = true;
        this.ptj = true;
        this.usj = true;
        this.agp = 2;
        this.bon("1_1_62");
        if (bmx.vbp.kic != undefined) {
            if (bmx.vbp.kic.value1) {
                this.vch = bmx.vbp.kic.value1;
                this.ces = this.vch
            }
        }
    };
    this.nsr = function () {
        stm.prototype.nsr.call(this);
        this.ihr[0] = new wmv().jbf(this.whm.wez("anim0"), this.tiq.ghd.w1, this.tiq.ghd.h1, 20);
        this.ihr[1] = new wmv().jbf(this.whm.wez("anim1"), this.tiq.ghd.w1, this.tiq.ghd.h1, 20);
        this.ihr[2] = new wmv().jbf(this.whm.wez("anim2"), this.tiq.ghd.w1, this.tiq.ghd.h1, 20);
        this.ihr[3] = new wmv().jbf(this.whm.wez("anim3"), this.tiq.ghd.w1, this.tiq.ghd.h1, 20);
        this.ihr[4] = new wmv().jbf(this.whm.wez("anim4"), this.tiq.ghd.w1, this.tiq.ghd.h1, 20);
        this.ihr[5] = new wmv().jbf(this.whm.wez("anim5"), this.tiq.ghd.w1, this.tiq.ghd.h1, 20);
        this.ihr[6] = new wmv().jbf(this.whm.wez("anim6"), this.tiq.ghd.w1, this.tiq.ghd.h1, 20);
        this.ihr[7] = new wmv().jbf(this.whm.wez("anim7"), this.tiq.ghd.w1, this.tiq.ghd.h1, 20);
        this.ihr[8] = new wmv().jbf(this.whm.wez("anim8"), this.tiq.ghd.w1, this.tiq.ghd.h1, 20);
        this.ihr[9] = new wmv().jbf(this.whm.wez("anim9"), this.tiq.ghd.w1, this.tiq.ghd.h1, 20);
        this.ihr[10] = new wmv().jbf(this.whm.wez("anim10"), this.tiq.ghd.w1, this.tiq.ghd.h1, 20)
    };
    this.yah = function () {
        this.vhz();
        this.rgy();
        this.isy();
        this.bhx();
        stm.prototype.yah.call(this)
    };
    this.vhz = function () {
        this.seu = new yve();
        this.seu.jbf(this.tiq.fye.cfr.rlq, null, this.jas.context2D, this.whm.wez("h_paytable"));
        this.seu.parent = this.jas;
        this.seu.ilm(this.tiq.fye.cfr);
        this.seu.whj(this.style.fye.cfr);
        if (!this.dbq.uxx("tops")) {
            this.jas.jey(this.seu)
        }
    };
    this.bhx = function () {
        var a = this.dbq.uxx("tops");
        if (a) {
            this.uqd = new yve();
            this.uqd.jbf(this.tiq.top.cfr.rlq, null, a.context2D, this.whm.wez("h_paytable_top"));
            this.uqd.parent = a;
            this.uqd.ilm(this.tiq.top.cfr);
            this.uqd.whj(this.style.fye.cfr);
            a.jey(this.uqd)
        }
    };
    this.rgy = function () {
        this.uhl = new dae();
        this.uhl.jbf(this.tiq.fye.win.rlq, null, this.jas.context2D, this.whm.wez("h_winlines"));
        this.uhl.parent = this.jas;
        this.uhl.upu[0] = this.language.stj;
        this.uhl.ilm(this.tiq.fye.win);
        this.uhl.whj(this.style.fye.eyv);
        this.jas.jey(this.uhl)
    };
    this.isy = function () {
        this.pgm = new dae();
        this.pgm.jbf(this.tiq.fye.yte.rlq, null, this.jas.context2D, this.whm.wez("h_symbols"));
        this.pgm.parent = this.jas;
        this.pgm.upu[0] = this.language.jsd;
        this.pgm.ilm(this.tiq.fye.yte);
        this.pgm.whj(this.style.fye.eyv);
        this.jas.jey(this.pgm)
    };
    this.bib = function () {
        if (this.seu) {
            this.seu.cch(this.tiq.fye.cfr.rlq);
            this.seu.ilm(this.tiq.fye.cfr)
        }
        if (this.uhl) {
            this.uhl.cch(this.tiq.fye.win.rlq);
            this.uhl.ilm(this.tiq.fye.win)
        }
        if (this.pgm) {
            this.pgm.cch(this.tiq.fye.yte.rlq);
            this.pgm.ilm(this.tiq.fye.yte)
        }
    };
    this.quv = function () {
        if (this.uhl != null) {
            this.uhl.upu[0] = this.language.stj
        }
        if (this.pgm != null) {
            this.pgm.upu[0] = this.language.jsd
        }
    };
    this.ffi = function () {
        var a = this.klm + this.tiq.type + "/";
        this.whm.vfm("m_back", a + "main.jpg");
        this.whm.vfm("g_back", a + "gamble.jpg");
        this.whm.vfm("m_win", a + "winPanel.png");
        this.whm.vfm("h_winlines", a + "wlhelp2.jpg");
        this.whm.vfm("h_symbols", a + "symbols_help.jpg");
        this.whm.vfm("h_paytable", a + "wthelp.jpg");
        this.whm.vfm("h_paytable_top", a + "wthelptop.jpg");
        if (this.vbg() === true) {
            this.whm.jap(a, "mobile_panels.json")
        } else {
            if (this.imi === true) {
                this.whm.vfm("m_g_back", a + "gamble.jpg");
                this.whm.vfm("m_m_back", a + "main.jpg");
                this.whm.vfm("m_m_win", a + "winPanel.png")
            }
        }
    };
    this.hja = function () {
        var b = this.klm + this.tiq.type + "/";
        this.whm.jap(b, "symbols.json");
        for (var a = 0; a < this.crf; a++) {
            this.whm.vfm("anim" + a, b + "symbanim" + (a + 1) + ".png")
        }
    };
    this.gkm = function (b) {
        var e = 0,
            f = 0,
            a = -1;
        this.lic = 0;
        this.bap = 0;
        this.bap = b[e];
        if (this.bap == this.zei) {
            return 0
        }
        while (this.bap == this.ekd && e < 4) {
            if (a < 0) {
                a = e
            }
            e++;
            this.lic += 1;
            f++;
            this.bap = b[e]
        }
        for (var d = e; d < 5; d++) {
            if (this.bap == b[d] || b[d] == this.ekd) {
                if (a < 0) {
                    a = e
                }
                this.lic += 1
            } else {
                break
            }
        }
        if (f > 0) {
            if (this.goy[this.ekd][f - 1] > this.goy[this.bap][this.lic - 1]) {
                this.bap = this.ekd;
                return f
            }
        }
        if (this.lic == 0) {
            return 0
        }
        var c = this.goy[this.bap][this.lic - 1];
        if (c > 0) {
            return this.lic
        }
        return 0
    };
    this.ocl = function (a) {
        this.usz = a;
        if (a == bmx.tiq.fif) {
            return new you()
        } else {
            if (a == bmx.tiq.htx) {
                return new npb()
            } else {
                if (a == bmx.tiq.iyd) {
                    return new ged()
                } else {
                    if (a == bmx.tiq.dph) {
                        return new ezk()
                    } else {
                        if (a == bmx.tiq.yiy) {
                            return new hcj()
                        } else {
                            if (a == bmx.tiq.mcm) {
                                return new wwu()
                            } else {
                                if (a == bmx.tiq.qmi) {
                                    return new xak()
                                } else {
                                    if (a == bmx.tiq.zuq) {
                                        return new blx()
                                    } else {
                                        if (a == bmx.tiq.cza) {
                                            return new lbk()
                                        } else {
                                            if (a == bmx.tiq.agk) {
                                                return new axn()
                                            } else {
                                                if (a == bmx.tiq.nzl) {
                                                    return new doa()
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
    this.zrq = function () {
        this.style = new jvn()
    };
    this.kmz = function (a) {
        if (a == bmx.language.EN || a == bmx.language.US) {
            return new lbm()
        } else {
            if (a == bmx.language.ES || a == bmx.language.CO || a == bmx.language.MX || a == bmx.language.CL || a == bmx.language.VE) {
                return new emt()
            } else {
                if (a == bmx.language.DE || a == bmx.language.AT) {
                    return new lzp()
                } else {
                    if (a == bmx.language.PT || a == bmx.language.BR) {
                        return new cmx()
                    } else {
                        if (a == bmx.language.RU) {
                            return new wkw()
                        } else {
                            if (a == bmx.language.EE) {
                                return new fwd()
                            } else {
                                if (a == bmx.language.TR) {
                                    return new mmi()
                                } else {
                                    if (a == bmx.language.CZ) {
                                        return new xdo()
                                    } else {
                                        if (a == bmx.language.GR) {
                                            return new fin()
                                        } else {
                                            if (a == bmx.language.BG) {
                                                return new ltm()
                                            } else {
                                                if (a == bmx.language.GE) {
                                                    return new xic()
                                                } else {
                                                    if (a == bmx.language.HU) {
                                                        return new olq()
                                                    } else {
                                                        if (a == bmx.language.RO) {
                                                            return new myf()
                                                        } else {
                                                            if (a == bmx.language.FR) {
                                                                return new ycx()
                                                            } else {
                                                                if (a == bmx.language.HR) {
                                                                    return new rcd()
                                                                } else {
                                                                    if (a == bmx.language.IT) {
                                                                        return new ugn()
                                                                    } else {
                                                                        if (a == bmx.language.SE) {
                                                                            return new gen()
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
stm.prototype = new lxu;

function ruh() {
    bmx.alk = -1;
    bmx.qsx = new stm();
    bmx.qsx.jbf({
        tiq: bmx.vbp.value14
    });
    window.focus()
}

function esh() {
    if (bmx.qsx != null) {
        if (bmx.alk >= 0) {
            clearTimeout(bmx.alk)
        }
        bmx.alk = setTimeout(bmx.qsx.ahr, 200)
    }
}

function gux() {
    if (bmx.qsx != null) {
        if (bmx.alk >= 0) {
            clearTimeout(bmx.alk)
        }
        bmx.alk = setTimeout(bmx.qsx.jbz, 200)
    }
}
if (bmx.suj.iqy()) {
    window.onorientationchange = gux;
    window.onresize = gux
} else {
    window.onresize = esh
}
if (bmx.vbp.value9) {
    window.onload = ruh
} else {
    ruh()
};
