
var gameController;
var gameWS=new WebSocket(serverString);

 /*------WS ADDON--------*/
        
        
        
       
        setInterval(function(){
		//
		var j='A/u350,0';
		var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"LightingHotAM"}';j=tmpPar;
		gameWS.send(j);	
		},5000);
		
		console.log(gameController);
	
		gameWS.onmessage=function(k){
	
		    var tmpMess=k.data.split("#");

			if(tmpMess[0]=='UPDATE'  && gameController.ljg.zcr!=undefined){
			
			if(gameController.bex!=parseInt(tmpMess[1])){
				
			gameController.bex=parseInt(tmpMess[1]);	
		
			gameController.ljg.zcr.tew("creditd", "#zja", [gameController.gch(tmpMess[1]), true]);	
			
			}
			
			
			
			
			
			}	
			
		}
		
		/*--------------*/

/////////////////

function sce() {
    this.uso = "Info";
    this.flq = "DEPOSIT";
    this.audio = "AUDIO";
    this.rrp = "TIP";
    this.rpn = "TURBO";
    this.qjx = "STATISTIC";
    this.koc = "HISTORY";
    this.pzp = "SHORTCUTS";
    this.yyz = "HELP";
    this.chk = "PAYTABLE";
    this.language = "LANGUAGE";
    this.icd = ">>";
    this.zyx = "<<";
    this.zof = "Fullscreen is not supported!"
}

function bnz() {
    this.php = "MINIMUM BET IS";
    this.brv = "MAX BET";
    this.mhw = "MIN.BET";
    this.wys = "MAX.BET";
    this.rul = "BET";
    this.start = "START";
    this.yyz = "HELP";
    this.chk = "PAYTABLE";
    this.jpb = "MENU";
    this.wjr = "MORE|GAMES";
    this.yop = "STOP";
    this.bex = "CREDIT";
    this.uob = "GAME OVER";
    this.gvt = "WINNER!";
    this.epj = "GOOD LUCK!";
    this.qio = "WIN";
    this.lon = "LAST WIN";
    this.bpj = "COLLECT";
    this.dye = "COLLECT";
    this.fzw = "GAMBLE";
    this.qsy = "AUTO|START";
    this.xnr = "HALF|GAMBLE";
    this.mxq = "EXIT";
    this.ohp = "START GAME";
    this.lny = "CHOOSE BET";
    this.iip = "HALF";
    this.ret = "RETURN|TO GAME";
    this.vtl = "Total Win";
    this.dro = "Warning";
    this.asx = "TOTAL";
    this.ica = "PLEASE WAIT ...";
    this.vja = "More Games";
    this.rpn = "SPEED";
    this.enn = "Malfunction voids all pays and plays.";
    this.lis = "C O N T I N U E";
    this.pbd = "AUTOSTART";
    this.qiq = "PAYTABLE";
    this.hhy = "GAMBLE";
    this.left = "LEFT";
    this.isz = "RIGHT";
    this.ok = "OK";
    this.zpu = "CANCEL";
    this.fac = "Gamble";
    this.jla = "Half";
    this.xrc = "GAME RULES";
    this.qmt = "GAME RULES";
    this.klh = "Bonus!";
    this.gnl = "BONUS";
    this.tel = "PRESS ANY KEY TO CONTINUE";
    this.apt = "NOT ENOUGH CREDIT.";
    this.cnu = "wins";
    this.dzz = "V A L U E";
    this.of = "OF";
    this.wff = "TOUCH THE SCREEN TO CONTINUE";
    this.hqd = "LOADING ...";
    this.hyl = "LOADING HISTORY ...";
    this.jqe = "Communication Error";
    this.tps = "You have reached one of the limits!";
    this.lwr = "You have reached the maximum amount of free games!";
    this.tpq = "(Game will be closed)";
    this.cls = "(Game will be restarted)";
    this.fus = "WON";
    this.error = "ERROR";
    this.ide = "FREEPLAY";
    this.cmd = "AUTO";
    this.emy = "GAME ID";
    this.fpj = "Playing Time";
    this.hem = "last";
    this.zad = "games";
    this.flq = "DEPOSIT";
    this.audio = "AUDIO";
    this.bqj = "MUSIC";
    this.lzv = "FULLSCREEN";
    this.yqf = "FULLSCREEN";
    this.language = "LANGUAGE";
    this.zju = "Do not show again";
    this.jey = "Sounds can not be loaded!";
    this.ozo = "Resources missing!";
    this.lnn = "Play without sound?";
    this.ghl = "SETTINGS";
    this.nbi = "Please turn your device!";
    this.uso = "INFO";
    this.krt = "Please disable PRIVATE MODE in your browser to play the game.";
    this.kov = "This game is optimized for Google Chrome.";
    this.joq = "Please use the current version of";
    this.mnz = "Unfortunately this browser is not fully supported.";
    this.ddo = "This game can not be started in freeplay mode!";
    this.qmf = "Turn your device to the portrait mode to play like on a real slot machine!";
    this.hds = "Adjust the game interface to your needs!";
    this.lpb = "SELECT THE CORRECT COLOR TO DOUBLE THE WIN";
    this.ups = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.sii = "GAMBLE FOR A CHANCE TO INCREASE THE WIN";
    this.qjx = "Statistic";
    this.cmr = "Total Games";
    this.njk = "Total Bets";
    this.ehm = "Total Wins";
    this.hea = "Reality Check";
    this.hsx = "Total Play Time";
    this.bif = "I have read this message";
    this.azx = "EXIT|GAME";
    this.koc = "History";
    this.csy = "No games played.";
    this.lpe = "STATE";
    this.uwo = "Main Game";
    this.qad = "Auto Collected";
    this.xww = "Collected";
    this.tzw = "Bonusspins";
    this.amm = "Respin";
    this.ckd = "Bonus";
    this.vbm = "First Deal";
    this.zbq = "Second Deal";
    this.beb = "Third Deal";
    this.xyc = "AUTOSTART SETTINGS";
    this.qia = "Amount of games:";
    this.tln = "Stop autostart";
    this.uva = "Credit lower than:";
    this.llk = "Credit higher than:";
    this.bxx = "Win higher than:";
    this.hun = "The autostart will be stopped at the beginning of the bonus.";
    this.mxb = "Share on Facebook";
    this.mdc = "For more information, see the game rules."
}
bnz.prototype = new sce;

function sgq() {
    this.php = "МИНИМАЛЬНАЯ СТАВКА -";
    this.brv = "МАКС.|СТАВКА";
    this.mhw = "МИН.СТВКА";
    this.wys = "МАКС.СТВКА";
    this.rul = "СТАВКА";
    this.start = "СТАРТ";
    this.yyz = "ПОМОЩЬ";
    this.chk = "ТАБЛИЦА ВЫПЛАТ";
    this.jpb = "МЕНЮ";
    this.wjr = "ДРУГИЕ|ИГРЫ";
    this.yop = "СТОП";
    this.bex = "КРЕДИТ";
    this.uob = "КОНЕЦ ИГРЫ";
    this.gvt = "ПОБЕДИТЕЛЬ!";
    this.epj = "ЖЕЛАЕМ УДАЧИ!";
    this.qio = "ВЫИГРЫШ";
    this.lon = "ПОСЛЕД. ВЫИГРЫШ";
    this.cnu = "выйгрыши";
    this.bpj = "ЗАБРАТЬ|ВЫИГРЫШ";
    this.dye = "ЗАБРАТЬ ВЫИГРЫШ";
    this.fzw = "ИГРА|НА|РИСК";
    this.qsy = "АВТО|ИГРА";
    this.xnr = "УМЕНЬШИТЬ|РИСК";
    this.of = "ВЫКЛ.";
    this.mxq = "ВЫХОД";
    this.ohp = "НАЖМИТЕ СТАРТ";
    this.lny = "ВЫБЕРИТЕ СТАВКУ";
    this.iip = "ВЗЯТЬ|1/2";
    this.tel = "НАЖМИ ЛЮБУЮ КЛАВИШУ, ЧТОБЫ ПРОДОЛЖИТЬ";
    this.wff = "ПРИКОСНИТЕСЬ К ЭКРАНУ ДЛЯ ПРОДОЛЖЕНИЯ";
    this.ret = "ОБРАТНО|В ГЛАВНУЮ|ИГРУ";
    this.oyv = "Множитель для Бонуса";
    this.zje = "БОНУС СТАРТ ВЫИГРЫШ:";
    this.vtl = "ОБЩИЙ ВЫИГРЫШ";
    this.hqd = "Загрузка ...";
    this.hyl = "Загрузка Истории ...";
    this.error = "ОШИБКА";
    this.apt = "НЕ ДОСТАТОЧНО КРЕДИТА.";
    this.tps = "Достигнут один из лимитов!";
    this.dro = "Внимание";
    this.jqe = "ошибка обмена данных";
    this.lwr = "Вы получили максимальное количество свободных игр!";
    this.tpq = "(Игра заканчивается)";
    this.cls = "(Игра начинается заново)";
    this.klh = "Бонус!";
    this.gnl = "БОНУС";
    this.fus = "ВЫИГРЫШ";
    this.asx = "ВСЕГО";
    this.ica = "Пожалуйста подождите ...";
    this.error = "ОШИБКА";
    this.ide = "FREEPLAY";
    this.vja = "ВЫБОР ИГРЫ";
    this.emy = "GAME ID";
    this.fpj = "Playing Time";
    this.hem = "последняя";
    this.zad = "игры";
    this.flq = "ДЕПОЗИТ";
    this.audio = "Звук";
    this.bqj = "МУЗЫКА";
    this.rpn = "СКОРОСТЬ";
    this.lzv = "FULLSCREEN";
    this.yqf = "FULLSCREEN";
    this.language = "ЯЗЫК";
    this.enn = "При неисправности все игры и выигрыши аннулируются.";
    this.lis = "П Р О Д О Л Ж И Т Ь";
    this.zju = "Больше не показывать";
    this.pbd = "АВТОИГРА";
    this.qiq = "ТАБЛИЦА ВЫПЛАТ";
    this.hhy = "ИГРА НА РИСК";
    this.jey = "Звук не загружается!";
    this.ozo = "Ресурсы отсутствуют!";
    this.lnn = "Играть без звука?";
    this.ghl = "НАСТРОЙКА";
    this.nbi = "Поверните, пожалуйста, ваше устройство!";
    this.left = "ЛЕВО";
    this.isz = "ПРАВО";
    this.cmd = "АВТО";
    this.dzz = "V A L U E";
    this.uso = "ИНФОРМАЦИЯ";
    this.krt = "Выключите, пожалуйста, ЧАСТНЫЙ РЕЖИМ в браузере,чтобы начать игру.";
    this.kov = "Настоящая игра оптимизирована для Google Chrome.";
    this.joq = "Используйте, пожалуйста, актуальную версию";
    this.mnz = "К сожалению нет полной поддержки браузера.";
    this.ddo = "Запуск этой игры в режиме свободных игр невозможен!";
    this.qmf = "Поверните прибор в положение портретного режима для игры как на настоящем игральном автомате!";
    this.hds = "Приспособь интерфейс к своим потребностям!";
    this.mdc = "For more information, see the game rules.";
    this.xrc = "ПРАВИЛА ИГРЫ";
    this.qmt = "ПРАВИЛА ИГРЫ";
    this.lpb = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УДВОИТЬ ВЫИГРЫШ";
    this.ups = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ В 4 РАЗА.";
    this.sii = "СТАВЬТЕ НА РИСК, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ.";
    this.qjx = "Статус";
    this.cmr = "количество игр";
    this.njk = "вся ставка";
    this.ehm = "общий выигрыш";
    this.hea = "Reality Check";
    this.hsx = "общее время игры";
    this.bif = "Я сообщение прочитал.";
    this.azx = "ИГРУ|ЗАКОНЧИТЬ";
    this.ok = "OK";
    this.koc = "История";
    this.csy = "нет истории.";
    this.lpe = "STATE";
    this.uwo = "Main Game";
    this.qad = "Auto Collected";
    this.xww = "Collected";
    this.tzw = "Bonusspins";
    this.fac = "Gamble";
    this.jla = "Half";
    this.amm = "Respin";
    this.ckd = "Bonus";
    this.vbm = "First Deal";
    this.zbq = "Second Deal";
    this.beb = "Third Deal";
    this.zpu = "ИЗМЕНИТЬ";
    this.xyc = "НАСТРОЙКА АВТОСТАРТА";
    this.qia = "Количество игр:";
    this.tln = "Автостарт остановить";
    this.uva = "Кредит ниже, чем:";
    this.llk = "Кредит выше, чем:";
    this.bxx = "Выигрыш выше, чем:";
    this.hun = "Автостарт прерывается, если начинается бонусная игра.";
    this.mxb = "Поделись в фейсбук"
}
sgq.prototype = new sce;

function rtq() {
    this.php = "APUESTA MINIMA ES";
    this.brv = "APUESTA|MAXIMA";
    this.mhw = "APUESTA MIN.";
    this.wys = "APUESTA MAX.";
    this.rul = "APUESTA";
    this.start = "START";
    this.yyz = "AYUDA";
    this.chk = "PLAN DE|GANANCIAS";
    this.jpb = "MENU";
    this.wjr = "MAS|JUEGOS";
    this.yop = "PARADA";
    this.bex = "CREDITOS";
    this.uob = "FIN DEL JUEGO";
    this.gvt = "¡GANADOR!";
    this.epj = "¡MUCHA SUERTE!";
    this.qio = "PREMIO";
    this.lon = "ULTIMOS PREMIO";
    this.cnu = "gana";
    this.bpj = "COBRAR";
    this.dye = "COBRAR";
    this.fzw = "RIESGO";
    this.qsy = "AUTO|START";
    this.xnr = "MEDIA|APUESTA";
    this.of = "DE";
    this.mxq = "SALIR";
    this.ohp = "¡PULSE START!";
    this.lny = "ELIJA SU APUESTA";
    this.iip = "MITAD";
    this.tel = "PULSE UNA TECLA PARA CONTINUAR";
    this.wff = "TOCAR LA PANTALLA PARA CONTINUAR";
    this.ret = "VOLVER|AL JUEGO";
    this.vtl = "Benificio total";
    this.hqd = "LOADING ...";
    this.hyl = "LOADING HISTORY ...";
    this.apt = "No hay bastante CREDITO";
    this.tps = "¡Ha alcanzado uno de los limites!";
    this.dro = "Advertencia";
    this.jqe = "Error de comunicación";
    this.lwr = "¡Ha alcanzado la máxima cantidad de juegos gratis!";
    this.tpq = "(El juego se cerrará)";
    this.cls = "(El juego se reiniciará)";
    this.klh = "¡BONUS!";
    this.gnl = "BONUS";
    this.fus = "GANADO";
    this.asx = "TOTAL";
    this.leh = "TURBO SI";
    this.xhm = "TURBO NO";
    this.ica = "POR FAVOR ESPERE ...";
    this.error = "ERROR";
    this.ide = "FREEPLAY";
    this.vja = "MAS JUEGOS";
    this.emy = "ID DE JUEGO";
    this.fpj = "Playing Time";
    this.hem = "ultimos";
    this.zad = "juegos";
    this.flq = "DEPÓSITO";
    this.audio = "AUDIO";
    this.bqj = "MÚSICA";
    this.rpn = "VELOCIDAD";
    this.lzv = "PANTALLA COMPLETA";
    this.yqf = "PANTALLA|COMPLETA";
    this.language = "IDIOMA";
    this.enn = "Un mal funcionamiento anula toda jugada y todo pago.";
    this.lis = "A D E L A N T E";
    this.zju = "No mostrar de nuevo";
    this.pbd = "AUTOSTART";
    this.qiq = "PLAN DE GANANCIAS";
    this.hhy = "RIESGO";
    this.jey = "No se pueden cargar los sonidos.";
    this.ozo = "Faltan recursos.";
    this.lnn = "¿Jugar sin sonido?";
    this.ghl = "AJUSTES";
    this.dzz = "V A L U E";
    this.nbi = "¡Encienda su dispositivo!";
    this.left = "IZQUIERDA";
    this.isz = "DERECHA";
    this.cmd = "AUTOMÁTICO";
    this.uso = "INFORMACIÓN";
    this.krt = "Desactive el MODO PRIVADO en su explorador para jugar el juego.";
    this.kov = "Este juego está optimizado para Google Chrome.";
    this.joq = "Use la versión actual de";
    this.mnz = "Desafortunadamente, este explorador no es compatible.";
    this.ddo = "¡Este juego no puede iniciarse en modo de juego libre!";
    this.qmf = "¡Gire el dispositivo a posición vertical como en la máquina tragamonedas real!";
    this.hds = "¡Ajuste la interfaz del juego a sus necesidades!";
    this.mdc = "For more information, see the game rules.";
    this.xrc = "REGLAS DEL JUEGO";
    this.qmt = "REGLAS|DEL JUEGO";
    this.lpb = "SELECCIONAR EL COLOR CORRECTO PARA DOBLAR EL PREMIO";
    this.ups = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.sii = "JUGAR UNA POSIBILIDAD DE MULTIPLICAR LA GANANCIA";
    this.qjx = "ESTADO";
    this.cmr = "Número de juegos";
    this.njk = "Apuesta total";
    this.ehm = "Ganancia total";
    this.hea = "Reality Check";
    this.hsx = "Tiempo total de juego";
    this.bif = "He leído el mensaje.";
    this.azx = "TERMINAR|JUEGO";
    this.ok = "OK";
    this.koc = "HISTORIAL";
    this.csy = "Aún no hay juegos.";
    this.lpe = "Estado";
    this.uwo = "Juego principal";
    this.qad = "Ganancia automática";
    this.xww = "Ganancia";
    this.tzw = "BONUSSPINS";
    this.fac = "Apuesta";
    this.jla = "Mitad";
    this.amm = "Respin";
    this.ckd = "Bonus";
    this.vbm = "Primera mano";
    this.zbq = "Segunda mano";
    this.beb = "Tercera mano";
    this.zpu = "CANCELAR";
    this.xyc = "CONFIGURACIONES DE AUTOSTART";
    this.qia = "Cantidad de juegos:";
    this.tln = "Detener Autostart";
    this.uva = "Crédito menor que:";
    this.llk = "Crédito mayor que:";
    this.bxx = "Ganancia mayor que:";
    this.hun = "El Autostart se detendrá al principio del bonus.";
    this.mxb = "Compartir en Facebook"
}
rtq.prototype = new sce;

function thf() {
    this.php = "MINIMALER EINSATZ IST";
    this.brv = "MAX. EINSATZ";
    this.mhw = "MIN. EINSATZ";
    this.wys = "MAX. EINSATZ";
    this.rul = "EINSATZ";
    this.start = "START";
    this.yyz = "HILFE";
    this.chk = "GEWINNPLAN";
    this.jpb = "MENÜ";
    this.wjr = "MEHR|SPIELE";
    this.bex = "KREDIT";
    this.uob = "SPIEL ENDE";
    this.gvt = "GEWINNER!";
    this.epj = "VIEL GLÜCK!";
    this.qio = "GEWINN";
    this.lon = "LETZTER GEWINN";
    this.cnu = "gewinnt";
    this.bpj = "NEHMEN";
    this.dye = "NEHMEN";
    this.fzw = "RISIKO";
    this.qsy = "AUTO|START";
    this.xnr = "HALF|GAMBLE";
    this.yop = "STOP";
    this.of = "VON";
    this.mxq = "EXIT";
    this.ohp = "START DRÜCKEN";
    this.lny = "EINSATZ WÄHLEN";
    this.iip = "TEILEN";
    this.tel = "DRÜCKE EINE TASTE UM FORTZUFAHREN";
    this.wff = "BERÜHRE DEN BILDSCHIRM UM FORTZUFAHREN";
    this.ret = "ZURÜCK|ZUM SPIEL";
    this.vtl = "Gesamt Gewinn";
    this.hqd = "LÄDT ...";
    this.hyl = "LÄDT HISTORIE ...";
    this.apt = "NICHT GENUG KREDIT!";
    this.dro = "Achtung";
    this.jqe = "Kommunikationsfehler";
    this.tps = "Sie haben eines der Limits erreicht!";
    this.lwr = "Sie haben die maximale Anzahl an Freispielen erreicht!";
    this.tpq = "(Das Spiel wird beendet)";
    this.cls = "(Das Spiel wird neu gestartet)";
    this.klh = "Bonus!";
    this.gnl = "BONUS";
    this.fus = "GEWONNEN";
    this.asx = "TOTAL";
    this.ica = "BITTE WARTEN ...";
    this.error = "FEHLER";
    this.ide = "FREEPLAY";
    this.vja = "MEHR|SPIELE";
    this.emy = "SPIEL ID";
    this.fpj = "Spielzeit";
    this.hem = "Letzten";
    this.zad = "Spiele";
    this.flq = "GUTHABEN";
    this.audio = "AUDIO";
    this.bqj = "MUSIK";
    this.rpn = "SPEED";
    this.lzv = "VOLLBILD";
    this.yqf = "VOLLBILD";
    this.language = "SPRACHE";
    this.enn = "Bei Gerätestörung keine Haftung.";
    this.lis = "W E I T E R";
    this.zju = "Nicht noch einmal anzeigen";
    this.pbd = "AUTOSTART";
    this.hhy = "RISIKO";
    this.qiq = "GEWINNPLAN";
    this.jey = "Sounds können nicht geladen werden!";
    this.ozo = "Ressourcen fehlen!";
    this.lnn = "Ohne Ton spielen?";
    this.ghl = "EINSTELL.";
    this.nbi = "Bitte drehen sie ihr Gerät!";
    this.left = "LINKS";
    this.isz = "RECHTS";
    this.cmd = "AUTOM.";
    this.dzz = "V A L U E";
    this.uso = "INFO";
    this.krt = "Bitte deaktivieren sie den PRIVATEN MODUS im Browser um das Spiel zu starten";
    this.kov = "Dieses Spiel ist optimiert für Google Chrome.";
    this.joq = "Bitte benutzen sie die aktuelle Version von";
    this.mnz = "Leider wird dieser Browser nicht unterstützt.";
    this.ddo = "Dieses Spiel kann nicht im Freispiel-Modus gestartet werden!";
    this.qmf = "Drehen sie ihr Gerät in den Portraitmodus, um wie auf einem echten Automaten zu spielen!";
    this.hds = "Passe die Spieloberfläche deinen Bedürfnissen an!";
    this.mdc = "Zusätzliche Information finden Sie in den Spielregeln.";
    this.xrc = "SPIELREGELN";
    this.qmt = "SPIELREGELN";
    this.lpb = "WÄHLE DIE RICHTIGE FARBE UM DEN GEWINN ZU VERDOPPELN";
    this.ups = "WÄHLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.sii = "DRÜCKE RISIKO FÜR EINE CHANCE DEN GEWINN ZU VERVIELFACHEN";
    this.qjx = "Statistik";
    this.cmr = "Anzahl der Spiele";
    this.njk = "Gesamteinsatz";
    this.ehm = "Gesamtgewinn";
    this.hea = "Reality Check";
    this.hsx = "Gesamtspielzeit";
    this.bif = "Ich habe die Nachricht gelesen";
    this.azx = "SPIEL|BEENDEN";
    this.ok = "OK";
    this.koc = "Historie";
    this.csy = "Es existieren noch keine Spiele.";
    this.lpe = "STATUS";
    this.uwo = "Hauptspiel";
    this.qad = "Auto. Nehmen";
    this.xww = "Genommen";
    this.tzw = "Bonusspins";
    this.fac = "Risiko";
    this.jla = "Halb";
    this.amm = "Respin";
    this.ckd = "Bonus";
    this.vbm = "Erster Deal";
    this.zbq = "Zweiter Deal";
    this.beb = "Dritter Deal";
    this.zpu = "ABBRUCH";
    this.xyc = "AUTOSTART EINSTELLUNGEN";
    this.qia = "Anzahl der Spiele: ";
    this.tln = "Autostart anhalten";
    this.uva = "Kredit niedriger als:";
    this.llk = "Kredit höher als:";
    this.bxx = "Gewinn höher als:";
    this.hun = "Der Autostart wird am Bonusbeginn gestoppt.";
    this.mxb = "Auf Facebook teilen"
}
thf.prototype = new sce;

function pwg() {
    this.php = "MINIMUM BANKO";
    this.brv = "MAKS. BANKO";
    this.mhw = "MIN. BANKO";
    this.wys = "MAKS. BANKO";
    this.rul = "BANKO";
    this.start = "BAŞLAT";
    this.yyz = "YARDIM";
    this.chk = "Kazanç planı";
    this.jpb = "MENÜ";
    this.wjr = "DAHA ÇOK|OYUN";
    this.yop = "DUR";
    this.bex = "KREDI";
    this.uob = "OYUN BİTTİ";
    this.gvt = "KAZANDINIZ!";
    this.epj = "BOL ŞANSLAR!";
    this.qio = "KAZANÇ";
    this.lon = "SON KAZANÇ";
    this.cnu = "kazanır";
    this.bpj = "ALMAK";
    this.dye = "ALMAK";
    this.fzw = "RIZIKO";
    this.qsy = "OTOMATİK|BAŞLATMA";
    this.xnr = "YARI|RIZIKO";
    this.of = "VEREN";
    this.mxq = "ÇIKIŞ";
    this.ohp = "BAŞLAT TUŞUNA BASINIZ";
    this.lny = "BANKO SEÇİNİZ";
    this.iip = "ALMAK|1/2";
    this.tel = "DEVAM ETMEK IÇIN KLAVYEDE HER HANGI BIR YERE BASINIZ";
    this.wff = "DEVAM ETMEK İÇİN EKRANA DOKUN";
    this.ret = "OYUNA|GERI";
    this.vtl = "Toplam kazanç";
    this.hqd = "YÜKLÜYOR ...";
    this.hyl = "GEÇMIŞI YÜKLÜYOR ...";
    this.apt = "YETERSİZ KREDİ.";
    this.tps = "Limitlerin birine ulaştınız!";
    this.dro = "Dikkat";
    this.jqe = "İletişim hatası";
    this.lwr = "Maksimum bedava oyun sayısına ulaşmış bulunuyorsunuz!";
    this.tpq = "(Oyun sonlandırılıyor)";
    this.cls = "(Oyun yeniden başlatılıyor)";
    this.klh = "Bedava oyun primi!";
    this.gnl = "PRİM";
    this.fus = "KAZANDINIZ";
    this.asx = "TOPLAM";
    this.ica = "LÜTFEN BEKLEYIN ...";
    this.error = "HATA";
    this.ide = "FREEPLAY";
    this.vja = "DAHA ÇOK OYUN";
    this.emy = "OYUN ID";
    this.fpj = "OYUN SÜRESİ";
    this.hem = "Son";
    this.zad = "oyun";
    this.flq = "BAKIYE";
    this.audio = "AUDIO";
    this.bqj = "MÜZIK";
    this.rpn = "HıZ";
    this.lzv = "TAM EKRAN";
    this.yqf = "TAM EKRAN";
    this.language = "LISAN";
    this.enn = "Arıza halinde tüm ödemeler ve oyunlar geçersiz sayılır.";
    this.lis = "İ L E R I";
    this.zju = "Tekrar gösterme";
    this.pbd = "OTOMATİK|BAŞLATMA";
    this.hhy = "RIZIKO";
    this.qiq = "Kazanç planı";
    this.jey = "Sesler yüklenemiyorlar!";
    this.ozo = "Kaynaklar eksik!";
    this.lnn = "Sessiz oynayacak mısınız?";
    this.ghl = "AYARLAR";
    this.nbi = "Lütfen cihazınını döndürün!";
    this.left = "SOL";
    this.isz = "SAĞ";
    this.cmd = "OTOMATIK";
    this.dzz = "V A L U E";
    this.uso = "BILGI";
    this.krt = "Oyunu başlatmak için lütfen ağ tarayıcınızda ÖZEL MOD'u kapatınız.";
    this.kov = "Bu oyun Google Chrome için optimize edilmiştir.";
    this.joq = "'nin güncel versiyonunu kullanın";
    this.mnz = "Maalesef bu ağ tarayıcısı tam olarak desteklenmiyor.";
    this.ddo = "Bu oyunun serbest modunda başlatılması mümkün değildir!";
    this.qmf = "Cihazınızı portre moduna çevirerek gerçek bir otomatikte oynar gibi oynayın!";
    this.hds = "Oyun yüzeyini kendi ihtiyaçlarına göre düzenle!";
    this.mdc = "For more information, see the game rules.";
    this.xrc = "OYUNUN KURALLARı";
    this.qmt = "OYUNUN|KURALLARı";
    this.lpb = "DOĞRU RENGİ SEÇEREK KAZANCININ İKİYE KATLARSIN";
    this.ups = "DOĞRU KART RENGİNİ SEÇEREK KAZANCINI DÖRDE KATLARSIN.";
    this.sii = "KAZANCI KATLAMA ŞANSI İÇİN GAMBLE (RİSK)";
    this.qjx = "İstatistik";
    this.cmr = "Toplam oyunlar";
    this.njk = "Toplam bankolar";
    this.ehm = "Toplam kazançlar";
    this.hea = "Reality Check";
    this.hsx = "Toplam oyun süresi";
    this.bif = "Bu mesajı okudum.";
    this.azx = "OYUNU|KAPAT";
    this.ok = "OK";
    this.koc = "GEÇMİŞ";
    this.csy = "Henüz hiç bir oyun yok.";
    this.lpe = "STATÜ";
    this.uwo = "Ana oyun";
    this.qad = "Otomatik olarak kazandınız";
    this.xww = "Toplandı";
    this.tzw = "Prim oyunlar";
    this.fac = "Riziko";
    this.jla = "Yarım";
    this.amm = "Respin";
    this.ckd = "Prim";
    this.vbm = "İlk anlaşma";
    this.zbq = "İkinci anlaşma";
    this.beb = "Üçüncü anlaşma";
    this.zpu = "İPTAL";
    this.xyc = "OTOMATIK BAŞLAT AYARLARı";
    this.qia = "Oyun sayısı:";
    this.tln = "Otomatik başlatmayı durdur";
    this.uva = "Kredi bundan düşüktür:";
    this.llk = "Kredi bundan yüksektir:";
    this.bxx = "Kazanç bundan yüksektir:";
    this.hun = "Otomatik başlatma prim başlangıcında durduruluyor.";
    this.mxb = "Facebook'ta paylaş"
}
pwg.prototype = new sce;

function zez() {
    this.php = "MINIMÁLNÍ SÁZKA JE";
    this.brv = "MAX. SÁZKA";
    this.mhw = "MIN. SÁZKA";
    this.wys = "MAX. SÁZKA";
    this.rul = "SÁZKA";
    this.start = "START";
    this.yyz = "POMOC";
    this.chk = "VÝHERNÍ PLÁN";
    this.jpb = "MENU";
    this.wjr = "DALŠÍ|HRY";
    this.yop = "STOP";
    this.bex = "KREDIT";
    this.uob = "KONEC HRY";
    this.gvt = "VÍTEZ!";
    this.epj = "HODNE ŠTESTÍ!";
    this.qio = "VÝHRA";
    this.lon = "POSL. VÝHRA";
    this.cnu = "vyhrává";
    this.bpj = "VEZMI";
    this.dye = "VEZMI";
    this.fzw = "HRA";
    this.qsy = "AUTO|START";
    this.xnr = "POLOVICNÍ|HRA";
    this.of = "Z";
    this.mxq = "VÝSTUP";
    this.ohp = "START HRY";
    this.lny = "VYBRAT SÁZKU";
    this.iip = "POLOVINA";
    this.tel = "POKRACUJ DOTEKEM OBRAZOVKY";
    this.wff = "PRO POKRAČOVÁNÍ SE DOTKNĚTE OBRAZOVKY";
    this.ret = "ZPET|DO HRY";
    this.vtl = "Celková výhra";
    this.hqd = "NAHRÁVÁM ...";
    this.hyl = "NAHRÁVÁM HISTORII ...";
    this.apt = "Nedostatecný kredit.";
    this.tps = "Dosáhli jste jednoho z limitů!";
    this.dro = "Varování";
    this.jqe = "Chyba komunikace";
    this.lwr = "Dosáhli jste maximálního počtu her zdarma!";
    this.tpq = "(Hra se zavře)";
    this.cls = "(Hra se restartuje)";
    this.klh = "Bonus!";
    this.gnl = "BONUS";
    this.fus = "VYHRÁL";
    this.asx = "CELKOVÁ";
    this.ica = "ČEKEJTE PROSÍM ...";
    this.error = "ERROR";
    this.ide = "FREEPLAY";
    this.vja = "DALŠÍ HRY";
    this.emy = "ID HRY";
    this.fpj = "HRACÍ DOBA";
    this.hem = "Poslední";
    this.zad = "hry";
    this.flq = "MÍT K DOBRU";
    this.audio = "AUDIO";
    this.bqj = "MUZIKA";
    this.rpn = "RYCHLOST";
    this.lzv = "FULLSCREEN";
    this.yqf = "FULLSCREEN";
    this.language = "ŘEČ";
    this.enn = "Při poruše jsou všechny hry a výhry neplatné.";
    this.lis = "P O K R A Č U J";
    this.zju = "Nezobrazujte znovu";
    this.pbd = "AUTOSTART";
    this.hhy = "HRA";
    this.qiq = "VÝHERNÍ PLÁN";
    this.jey = "Zvuk nelze nahrát!";
    this.ozo = "Chybí zdroje!";
    this.lnn = "Hrát bez zvuku?";
    this.ghl = "NASTAVENÍ";
    this.dzz = "V A L U E";
    this.nbi = "Otočte své zařízení, prosím!";
    this.left = "VLEVO";
    this.isz = "VPRAVO";
    this.cmd = "AUTO";
    this.uso = "INFORMACE";
    this.krt = "Abyste mohli hrát hru, vypněte SOUKROMÝ REŽIM ve svém prohlížeči, prosím.";
    this.kov = "Tato hra je optimalizovaná pro Google Chrome.";
    this.joq = "Použijte aktuální verzi";
    this.mnz = "Tento prohlížeč není bohužel plně podporován.";
    this.ddo = "Tuto hru nelze spustit v režimu hry zdarma!";
    this.qmf = "Otočte zařízení tak, aby zobrazilo hru jako na skutečném automatu!";
    this.hds = "Nastavte rozhraní hry svým potřebám!";
    this.mdc = "For more information, see the game rules.";
    this.xrc = "PRAVIDLA HRY";
    this.qmt = "PRAVIDLA HRY";
    this.lpb = "VYBRAT SPRÁVNOU BARVU KE ZDVOJNÁSOBENÍ VÝHRY";
    this.ups = "VYBRAT SPRÁVNOU BARVU KARTY KE ZČTYŘNÁSOBENÍ VÝHRY";
    this.sii = "VSADIT NA ŠANCI ZVÝŠIT VÝHRU";
    this.qjx = "Statistika";
    this.cmr = "Celkem hry";
    this.njk = "Celkem sázky";
    this.ehm = "Celkem výhry";
    this.hea = "Reality Check";
    this.hsx = "Celková hrací doba";
    this.bif = "Zprávu jsem četl/a.";
    this.azx = "UKONČIT|HRU";
    this.ok = "OK";
    this.koc = "HISTORIE";
    this.csy = "Žádné odehrané hry.";
    this.lpe = "STATUS";
    this.uwo = "Hlavní hra";
    this.qad = "Automaticky vybráno";
    this.xww = "Vybráno";
    this.tzw = "Bonusspins";
    this.fac = "Hra";
    this.jla = "Polovina";
    this.amm = "Respin";
    this.ckd = "Bonus";
    this.vbm = "První vyložení";
    this.zbq = "Druhé vyložení";
    this.beb = "Třetí vyložení";
    this.zpu = "ZRUŠIT";
    this.xyc = "NASTAVENÍ AUTOMATICKÉHO STARTU";
    this.qia = "Množství her:";
    this.tln = "Zastavit automatický start";
    this.uva = "Kredit nižší než:";
    this.llk = "Kredit vyšší než:";
    this.bxx = "Výhra vyšší než:";
    this.hun = "Automatický start se zastaví na začátku bonusu.";
    this.mxb = "Sdílet na Facebooku"
}
zez.prototype = new sce;

function raq() {
    this.php = "MIINIMUMPANUS ON";
    this.brv = "MAX PANUS";
    this.mhw = "MIN PANUS";
    this.wys = "MAX PANUS";
    this.rul = "PANUS";
    this.start = "START";
    this.yyz = "ABI";
    this.chk = "VÕIDU TABEL";
    this.jpb = "MENÜÜ";
    this.wjr = "VALI|MÄNG";
    this.yop = "STOPP";
    this.bex = "KREDIIT";
    this.uob = "MÄNG ON LÕPPENUD!";
    this.gvt = "OLED VÕITNUD!";
    this.epj = "SOOVIME EDU!";
    this.qio = "VÕIT";
    this.lon = "EELMINE VÕIT";
    this.bpj = "VÕTA|VÕIT";
    this.dye = "VÕTA VÕIT";
    this.fzw = "DUUBEL|DAMINE";
    this.qsy = "AUTO|START";
    this.xnr = "POOLITA|DUUBELDA";
    this.of = "OF";
    this.mxq = "VÄLJA";
    this.ohp = "ALUSTA MÄNGU";
    this.lny = "VALI PANUS";
    this.iip = "POOLIK";
    this.tel = "JÄTKAMISEKS VAJUTAGE ÜKSKÕIK MILLIST NUPPU";
    this.ret = "TAGASI|MÄNGU";
    this.vtl = "Koguvõit";
    this.apt = "POLE PIISAVALT KREDIITI.";
    this.klh = "Boonus!";
    this.gnl = "BOONUS";
    this.ica = "PALUN OODAKE ...";
    this.vja = "Vali Mäng";
    this.audio = "HELI";
    this.bqj = "MUUSIKA";
    this.rpn = "KIIRUS";
    this.lzv = "TÄISEKRAAN";
    this.yqf = "TÄISEKRAAN";
    this.enn = "Rikke korral kõik mängud ja võidud tühistatakse.";
    this.evx = "MÄNGU LÕPP";
    this.language = "KEEL";
    this.xrc = "MÄNGUREEGLID";
    this.qmt = "MÄNGUREEGLID";
    this.hqd = "LAADIMINE ...";
    this.hyl = "AJALOO LAADIMINE ...";
    this.tps = "Oled saavutanud ühe limiitidest!";
    this.dro = "Hoiatus";
    this.jqe = "Ühenduse viga";
    this.lwr = "Te olete jõudnud tasuta mängude maksimaalse arvuni!";
    this.tpq = "(Mäng suletakse)";
    this.cls = "(Mäng taaskäivitatakse)";
    this.wff = "JÄTKAMISEKS PUUDUTA EKRAANI";
    this.ghl = "SÄTTED";
    this.dzz = "V A L U E";
    this.nbi = "Pöörake oma seadet!";
    this.uso = "INFO";
    this.krt = "Mängu mängimiseks keelake oma brauseris PRIVAATREŽIIM.";
    this.kov = "See mäng on optimeeritud Google Chrome jaoks.";
    this.joq = "Palun kasutage praeguse versiooni";
    this.mnz = "Kahjuks ei toetata seda brauserit täielikult.";
    this.ddo = "Seda mängu ei saa tasuta mängimise režiimis käivitada!";
    this.left = "VASAK";
    this.isz = "PAREM";
    this.cmd = "AUTOMAATNE";
    this.fus = "VÕITIS";
    this.cnu = "võidetud";
    this.asx = "KOKKU";
    this.error = "VIGA";
    this.ide = "TASUTA MÄNG";
    this.emy = "MÄNGU ID";
    this.fpj = "MÄNGUAEG";
    this.hem = "Viimased";
    this.zad = "mängu";
    this.flq = "SISSEMAKSE";
    this.lpb = "VÕIDU DUUBELDAMISEKS VALI ÕIGE VÄRV";
    this.ups = "VÕIDU NELJAKORDISTAMISEKS VALI ÕIGE MAST";
    this.sii = "RISKI, ET SUURENDADA OMA VÕITU";
    this.qjx = "Statistika";
    this.cmr = "Mänge kokku";
    this.njk = "Kogupanus";
    this.ehm = "Koguvõit";
    this.hea = "Reality Check";
    this.hsx = "Mänguaeg kokku";
    this.bif = "Olen seda teadet lugenud.";
    this.azx = "MÄNGU|LÕPP";
    this.koc = "Ajalugu";
    this.csy = "Ühtegi mängu ei ole mängitud.";
    this.lpe = "OLEK";
    this.uwo = "Põhimäng";
    this.qad = "Automaatne väljavõtt";
    this.xww = "Välja võetud";
    this.tzw = "Bonusspins";
    this.fac = "Gamble";
    this.jla = "Pool";
    this.amm = "Respin";
    this.ckd = "Boonus";
    this.vbm = "Esimene jagamine";
    this.zbq = "Teine jagamine";
    this.beb = "Kolmas jagamine";
    this.lis = "J Ä T K A";
    this.zju = "Ära seda enam näita";
    this.pbd = "AUTOSTART";
    this.hhy = "DUUBEL DAMINE";
    this.qiq = "VÕIDU TABEL";
    this.jey = "Helisid ei saa laadida!";
    this.ozo = "Ressursid puuduvad!";
    this.lnn = "Soovid mängida ilma helideta?";
    this.qmf = "Keera seade vertikaalasendisse, et mängida nagu päris mänguautomaadil!";
    this.hds = "Kohanda mänguliidest vastavalt oma vajadustele!";
    this.mdc = "For more information, see the game rules.";
    this.zpu = "TÜHISTA";
    this.xyc = "AUTOMAATKÄIVITUSE SÄTTED";
    this.qia = "Mängude arv:";
    this.tln = "Peata automaatkäivitus";
    this.uva = "Krediit madalam kui:";
    this.llk = "Krediit kõrgem kui:";
    this.bxx = "Võit suurem kui:";
    this.hun = "Automaatkäivitus peatatakse boonuse alguses.";
    this.mxb = "Jaga Facebookis";
    this.ok = "OK"
}
raq.prototype = new sce;

function iwa() {
    this.php = "ΤΟ ΕΛAΧΙΣΤΟ ΣΤΟIΧΗΜΑ ΕIΝΑΙ";
    this.brv = "ΜEΓΙΣΤΟ ΣΤΟIΧΗΜΑ";
    this.mhw = "EΛΑΧ. ΣΤΟΙΧΗΜΑ";
    this.wys = "ΜΕΓ. ΣΤΟΙΧΗΜΑ";
    this.rul = "ΣΤΟIΧΗΜΑ";
    this.start = "EΝΑΡΞΗ";
    this.yyz = "ΒΟHΘΕΙΑ";
    this.chk = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.jpb = "ΜΕΝΟY";
    this.wjr = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.yop = "ΣΤΟΠ";
    this.bex = "ΠIΣΤΩΣΗ";
    this.uob = "TEΛΟΣ ΠΑΙΧΝΙΔΙΟY!";
    this.gvt = "ΝΙΚΗΤΗΣ!";
    this.epj = "ΚΑΛΗ ΤΥΧΗ!";
    this.qio = "ΚEΡΔΟΣ";
    this.lon = "ΤΕΛΕΥΤΑIΟ ΚEΡΔΟΣ";
    this.bpj = "ΠΑΡΑΛΑΒH";
    this.dye = "ΠΑΡΑΛΑΒH";
    this.fzw = "ΤΖΟΓAΡΩ";
    this.qsy = "ΑΥΤOΜΑΤΗ|EΝΑΡΞΗ";
    this.xnr = "ΠΑΡΑΛΑΒH|ΤΖΟΓAΡΩ";
    this.of = "ΑΠO";
    this.mxq = "EΞΟΔΟΣ";
    this.ohp = "ΑΡΧΙΖΕΙ ΠΑΙΧΝΙΔΙ";
    this.lny = "ΕΠΙΛΕΞΤΕ ΣΤΟΙΧΗΜΑ";
    this.iip = "ΠΑΡΑΛΑΒH|1/2";
    this.tel = "ΠAΤΗΣΕ EΝΑ ΠΛHΚΤΡΟ ΓΙΑ ΝΑ ΣΥΝΕΧIΣΕΙΣ";
    this.ret = "EΠΙΣΤΡΟΦH|ΣΤΟ|ΠΑΙΧΝIΔΙ";
    this.vtl = "ΣΥΝΟΛΙΚO ΚEΡΔΟΣ";
    this.apt = "ΔΕΝ ΑΡΚΕΤH ΠIΣΤΩΣΗ.";
    this.klh = "Μπόνουσ!";
    this.gnl = "ΜΠOΝΟΥΣ";
    this.ica = "ΠΑΡΑΚΑΛΩ ΠΕΡΙΜEΝΕΤΕ ...";
    this.vja = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.audio = "ΗΧΟΣ";
    this.bqj = "ΜΟΥΣΙΚΉ";
    this.rpn = "ΤΑΧYΤΗΤΑ";
    this.lzv = "ΠΛΗΡΗΣ ΟΘΟΝΗ";
    this.yqf = "ΠΛΗΡΗΣ|ΟΘΟΝΗ";
    this.enn = "ΣΕ ΠΕΡΙΠΤΩΣΗ ΒΛΑΒΗΣ ΤΗΣ ΣΥΣΚΕΥΗΣ ΔΕΝ ΑΝΑΛΑΜΒΑΝΟΥΜΕ ΚΑΜΙΑ ΕΥΘΥΝΗ.";
    this.language = "ΓΛΩΣΣΑ";
    this.asx = "ΣYΝΟΛΟ";
    this.xrc = "ΚΑΝΌΝΕς ΠΑΙΧΝΙΔΙΟΎ";
    this.qmt = "ΚΑΝΌΝΕς|ΠΑΙΧΝΙΔΙΟΎ";
    this.hqd = "ΦΟΡΤΩΣΗ ...";
    this.hyl = "ΦΟΡΤΩΣΗ ΙΣΤΟΡΙΚΟΥ...";
    this.tps = "Ξεπεράσατε κάποιο όριο!";
    this.dro = "Προειδοποίηση";
    this.jqe = "Σφάλμα επικοινωνίας";
    this.lwr = "Φτάσατε στο ανώτατο όριο δωρεάν παιχνιδιών!";
    this.tpq = "(Το παιχνίδι θα τερματιστεί)";
    this.cls = "(Το παιχνίδι θα εκκινηθεί εκ νέου)";
    this.wff = "ΑΓΓΙΞΤΕ ΤΗΝ ΟΘΟΝΗ ΓΙΑ ΝΑ ΣΥΝΕΧΙΣΕΤΕ";
    this.ghl = "ΡΥΘΜΙΣΕΙΣ";
    this.dzz = "V A L U E";
    this.nbi = "Παρακαλούμε, περιστρέψτε τη συσκευή σας!";
    this.uso = "ΠΛΗΡΟΦΟΡΊΕς";
    this.krt = "Παρακαλούμε, απενεργοποιήστε τη λειτουργία PRIVATE MODE του προγράμματος περιήγησης, προκειμένου να εκκινηθεί το παιχνίδι.";
    this.kov = "Αυτό το παιχνίδι έχει βελτιστοποιηθεί για Google Chrome.";
    this.joq = "Παρακαλούμε, χρησιμοποιήστε την τρέχουσα έκδοση του";
    this.mnz = "Δυστυχώς, αυτό το πρόγραμμα περιήγησης δεν υποστηρίζεται πλήρως.";
    this.ddo = "Αυτό το παιχνίδι δεν μπορεί να διεξαχθεί στη δωρεάν λειτουργία!";
    this.left = "ΑΡΙΣΤΕΡA";
    this.isz = "ΔΕΞΙA";
    this.cmd = "AΥΤOΜΑΤΟ";
    this.fus = "ΚEΡΔΙΣΕ";
    this.cnu = "κερδίζει";
    this.error = "ΣΦΑΛΜΑ";
    this.ide = "ΔΩΡΕAΝ ΠΑΙΧΝIΔΙ";
    this.emy = "ΤΑΥΤΟΤΗΤΑ ΠΑΙΧΝΙΔΙΟΥ";
    this.fpj = "ΧΡΟΝΟΣ ΠΑΙΧΝΙΔΙΟΥ";
    this.hem = "Τελευταία";
    this.zad = "παιχνίδια";
    this.flq = "ΠΙΣΤΩΤΙΚO ΥΠOΛΟΙΠΟ";
    this.lpb = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΓΙΑ ΝΑ ΔΙΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.ups = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΦΥΛΛΟΥ ΓΙΑ ΝΑ ΤΕΤΡΑΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.sii = "ΠΟΝΤΑΡΕΤΕ ΓΙΑ ΝΑ ΕΧΕΤΕ ΤΗΝ ΕΥΚΑΙΡΙΑ ΠΟΛΛΑΠΛΑΣΙΑΣΜΟΥ ΤΟΥ ΚΕΡΔΟΥΣ ΣΑΣ";
    this.qjx = "Στατιστικά";
    this.cmr = "Σύνολο παιχνιδιών";
    this.njk = "Συνολικό ποντάρισμα";
    this.ehm = "Συνολικό κέρδος";
    this.hea = "Reality Check";
    this.hsx = "Συνολικός χρόνος παιχνιδιού";
    this.bif = "Eχω διαβάσει το μήνυμα.";
    this.azx = "ΛΗΞΗ|ΠΑΙΧΝΙΔΙΟΥ";
    this.koc = "ΙΣΤΟΡΙΚΟ";
    this.csy = "Ακόμη δεν υπάρχει κάποιο παιχνίδι.";
    this.lpe = "ΚΑΤAΣΤΑΣΗ";
    this.uwo = "Κύριο παιχνίδι";
    this.qad = "Αυτόματη λήψη";
    this.xww = "Ελήφθησαν";
    this.tzw = "Bonusspins";
    this.fac = "Τζογάρω";
    this.jla = "Hμισυ";
    this.amm = "Respin";
    this.ckd = "Μπόνουσ";
    this.vbm = "Πρώτο μοίρασμα";
    this.zbq = "Δεύτερο μοίρασμα";
    this.beb = "Τρίτο μοίρασμα";
    this.lis = "Σ Υ Ν  E Χ Ε Ι Α";
    this.zju = "Να μην προβληθεί ξανά";
    this.pbd = "ΑΥΤΟΜΑΤΗ|ΕΝΑΡΞΗ";
    this.hhy = "ΤΖΟΓAΡΩ";
    this.qiq = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.jey = "Η φόρτωση ήχων δεν είναι εφικτή!";
    this.ozo = "Λείπουν πόροι!";
    this.lnn = "Παιχνίδι χωρίς ήχο?";
    this.qmf = "Γυρίστε τη συσκευή σας σε λειτουργία πορτρέτου για να παίξετε όπως σε μια πραγματική μηχανή slot!";
    this.hds = "Προσάρμοσε την επιφάνεια εργασίας στις προτιμήσεις σου!";
    this.mdc = "For more information, see the game rules.";
    this.zpu = "ΑΚΎΡΩΣΗ";
    this.xyc = "ΡΥΘΜΉΣΕΙς AUTOSTART";
    this.qia = "Αριθμός παιχνιδιών:";
    this.tln = "Διακοπή autostart";
    this.uva = "Μονάδες χαμηλότερα από:";
    this.llk = "Μονάδες υψηλότερες από:";
    this.bxx = "Κέρδος υψηλότερο από:";
    this.hun = "Το autostart θα σταματήσει με το ξεκίνημα του μπόνους.";
    this.mxb = "Κοινοποίηση στο Facebook";
    this.ok = "OK"
}
iwa.prototype = new sce;

function yip() {
    this.php = "МИН. ЗАЛОГ Е";
    this.brv = "МАКС. ЗАЛОГ";
    this.mhw = "МИНИМ. ЗАЛОГ";
    this.wys = "МАКС. ЗАЛОГ";
    this.rul = "ЗАЛОГ";
    this.start = "СТАРТ";
    this.yyz = "ПОМОЩ";
    this.chk = "ПЛАН НА|ПЕЧАЛБИТЕ";
    this.jpb = "МЕНЮ";
    this.wjr = "ПОВЕЧЕ|ИГРИ";
    this.yop = "СТОП";
    this.bex = "КРЕДИТ";
    this.uob = "ИГРАТА ЗАВЪРШИ";
    this.gvt = "ПЕЧЕЛИТЕ!";
    this.epj = "УСПЕХ!";
    this.qio = "ПЕЧАЛБА";
    this.lon = "ПОСЛ.ПЕЧАЛБА";
    this.bpj = "ПРИБИРАНЕ";
    this.dye = "ПРИБИРАНЕ";
    this.fzw = "ДУБЛИРАНЕ";
    this.qsy = "АВТО|СТАРТ";
    this.xnr = "ДЕЛЕНЕ|ДУБЛ.";
    this.of = "ОТ";
    this.mxq = "ИЗХОД";
    this.ohp = "ЗАПОЧНЕТЕ ИГРАТА";
    this.lny = "ИЗБЕРЕТЕ ЗАЛОГ";
    this.iip = "ДЕЛЕНЕ";
    this.tel = "НАТИСНЕТЕ НЯКОЙ БУТОН ЗА ДА ПРОДЪЛЖИТЕ";
    this.ret = "ВРЪЩАНЕ|КЪМ|ИГРАТА";
    this.vtl = "ОБЩА ПЕЧАЛБА";
    this.apt = "НЕ ДОСТАТЪЧЕН КРЕДИТ.";
    this.klh = "Бонус!";
    this.gnl = "БОНУС";
    this.ica = "МОЛЯ ИЗЧАКАЙТЕ ...";
    this.vja = "Повече Игри";
    this.rpn = "ТУРБО";
    this.enn = "НЕЗПРАВНОСТ НА МАШИНАТА АНУЛИРА ВСИЧКИ ПЕЧАЛБИ И ИГРИ.";
    this.language = "ЕЗИК";
    this.xrc = "ПРАВИЛА НА ИГРАТА";
    this.qmt = "ПРАВИЛА|НА ИГРАТА";
    this.hqd = "ЗАРЕЖДАНЕ ...";
    this.hyl = "ЗАРЕЖДАНЕ НА ИСТОРИЯ ...";
    this.tps = "Достигна един от лимитите!";
    this.dro = "Предупреждение";
    this.jqe = "Комуникационна грешка";
    this.lwr = "Достигнали сте максималния брой безплатни игри!";
    this.tpq = "(Играта ще бъде затворена)";
    this.cls = "(Играта ще бъде рестартирана)";
    this.wff = "ДОКОСНЕТЕ ЕКРАНА, ЗА ДА ПРОДЪЛЖИТЕ";
    this.ghl = "НАСТРОЙКИ";
    this.dzz = "V A L U E";
    this.nbi = "Моля, включете устройството!";
    this.uso = "ИНФОРМАЦИЯ";
    this.krt = "Моля, деактивирайте ЧАСТЕН РЕЖИМ на браузъра, за да играете играта.";
    this.kov = "Тази игра е оптимизирана за Google Chrome.";
    this.joq = "Моля, използвайте текущата версия на";
    this.mnz = "За съжаление този браузър не се поддържа напълно.";
    this.ddo = "Тази игра не може да се стартира в режим на свободна игра!";
    this.left = "ЛЯВА";
    this.isz = "ДЯСНА";
    this.cmd = "АВТО";
    this.fus = "СПЕЧЕЛЕНО";
    this.cnu = "печалби";
    this.asx = "ОБЩО";
    this.error = "ГРЕШКА";
    this.ide = "БЕЗПЛАТНА ИГРА";
    this.audio = "ЗВУК";
    this.bqj = "МУЗИКА";
    this.lzv = "ПЪЛЕН ЕКРАН";
    this.yqf = "ПЪЛЕН|ЕКРАН";
    this.emy = "ИД НА ИГРА";
    this.fpj = "ВРЕМЕ НА ИГРА";
    this.hem = "Последни";
    this.zad = "игри";
    this.flq = "ДЕПОЗИТ";
    this.lpb = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УДВОИШ ПЕЧАЛБАТА";
    this.ups = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УЧЕТВОРИШ ПЕЧАЛБАТА";
    this.sii = "ИГРАЙ ЗА ШАНС ДА УВЕЛИЧИШ ПЕЧАЛБАТА";
    this.qjx = "Статистика";
    this.cmr = "Общо игри";
    this.njk = "Общо залог";
    this.ehm = "Общо печалби";
    this.hea = "Reality Check";
    this.hsx = "Общо време на игра";
    this.bif = "Прочетох това съобщение.";
    this.azx = "ИЗХОД|ОТ|ИГРАТА";
    this.koc = "ИСТОРИЯ";
    this.csy = "Няма играни игри.";
    this.lpe = "СТАТУС";
    this.uwo = "Основна игра";
    this.qad = "Автоматично събрани";
    this.xww = "Събрани";
    this.tzw = "Бонус-игри";
    this.fac = "Дублиране";
    this.jla = "Половина";
    this.amm = "Respin";
    this.ckd = "Бонус";
    this.vbm = "Първо раздаване";
    this.zbq = "Второ раздаване";
    this.beb = "Трето раздаване";
    this.lis = "П Р О Д Ъ Л Ж А В А М";
    this.zju = "Не показвай отново";
    this.pbd = "AUTOSTART";
    this.hhy = "ДУБЛИРАНЕ";
    this.qiq = "ПЛАН НА ПЕЧАЛБИТЕ";
    this.jey = "Звукът не може да бъде зареден!";
    this.ozo = "Липсват ресурси!";
    this.lnn = "Игра без звук?";
    this.qmf = "Завъртете устройството си в портретен режим, за да играете като на истинска слот машина!";
    this.hds = "Настройте интерфейса на играта според своите нужди!";
    this.mdc = "For more information, see the game rules.";
    this.zpu = "ИЗЧИСТВАНЕ";
    this.xyc = "НАСТРОЙКИ НА АВТОМАТИЧНОТО СТАРТИРАНЕ";
    this.qia = "Брой игри:";
    this.tln = "Спри автоматичния старт";
    this.uva = "Кредит по-малък от:";
    this.llk = "Кредит по-висок от:";
    this.bxx = "Спечели повече от:";
    this.hun = "Автоматичното стартиране ще бъде спряно в началото на бонуса.";
    this.mxb = "Сподели във Facebook";
    this.ok = "OK"
}
yip.prototype = new sce;

function lfp() {
    this.php = "მინიმალური ფსონი არის";
    this.brv = "მაქსიმალური ფსონი";
    this.mhw = "მინიმალური ფსონი";
    this.wys = "მაქსიმალური ფსონი";
    this.rul = "ფსონი";
    this.start = "დაწყება";
    this.yyz = "დახმარება";
    this.chk = "გადახდის მრიცხველი";
    this.jpb = "მენიუ";
    this.wjr = "მეტი|თამაშები";
    this.yop = "გაჩერება";
    this.bex = "კრედიტი";
    this.uob = "თამაში დასრულებულია";
    this.gvt = "გამარჯვებული!";
    this.epj = "გისურვებთ წარმატებას!";
    this.qio = "მოგება";
    this.lon = "ბოლო მოგება";
    this.bpj = "შეგროვება";
    this.dye = "შეგროვება";
    this.fzw = "აზარტი";
    this.qsy = "ავტო|დაწყება";
    this.xnr = "ნახევარი";
    this.mxq = "გამოსვლა";
    this.ohp = "თამაშის დაწყება";
    this.lny = "აირჩიეთ ფსონი";
    this.iip = "ნახევარი";
    this.ret = "თამაშზე|დაბრუნება";
    this.vtl = "მთლიანი მოგება";
    this.dro = "გაფრთხილება";
    this.asx = "მთლიანი";
    this.ica = "გთხოვთ, დაელოდოთ ...";
    this.vja = "მეტი თამაშები";
    this.rpn = "ტურბო";
    this.enn = "გაუმართაობის შემთხვევაში ყველა მოგება და ნათამაშები წაიშლება.";
    this.lis = "გაგრძელება";
    this.pbd = "ავტო დაწყება";
    this.qiq = "გადახდის მრიცხველი";
    this.hhy = "აზარტი";
    this.left = "მარცხნივ";
    this.isz = "მარჯვნივ";
    this.cmd = "ავტომატურად";
    this.ok = "კი";
    this.zpu = "გაუქმება";
    this.fac = "აზარტი";
    this.jla = "ნახევარი";
    this.xrc = "თამაშის წესები";
    this.qmt = "თამაშის წესები";
    this.klh = "BONUS!";
    this.gnl = "ბონუს";
    this.tel = "დააჭირეთ ნებისმიერ ღილაკს რომ გააგრძელოთ";
    this.apt = "არა საკმარისი კრედიტი.";
    this.wff = "შეეხეთ ეკრანს რომ გააგრძელოთ";
    this.hqd = "ჩატვირთვის  ...";
    this.hyl = "ჩატვირთვის  ისტორია  ...";
    this.jqe = "საკომუნიკაციო შეცდომა";
    this.tps = "თქვენ ერთ ერთი ლიმიტი ამოწურეთ!";
    this.lwr = "თქვენ უფასო თამაშების მაქსიმალური რაოდენობის ლიმიტი უკვე ამოწურეთ!";
    this.tpq = "(თამაში დასრულდება)";
    this.cls = "(თამაში გადაიტვირთება)";
    this.fus = "მოგებულია";
    this.cnu = "wins";
    this.dzz = "V A L U E";
    this.error = "შეცდომა";
    this.ide = "უფასო თამაში";
    this.emy = "თამაშის  ნომერი";
    this.fpj = "სათამაშო დრო";
    this.hem = "ბოლო ";
    this.zad = "თამაშები";
    this.flq = "დეპოზიტი";
    this.audio = "ხმა";
    this.bqj = "მუსიკა";
    this.lzv = "სრული ეკრანი";
    this.yqf = "სრული ეკრანი";
    this.language = "ენის";
    this.zju = "მომავალში აღარ ჩვენება";
    this.jey = "ხმის ჩატვირთვა ვერ ხერხდება!";
    this.ozo = "არასაკმარისი რესურსები!";
    this.lnn = "გინდათ ხმის გარეშე ითამაშოთ?";
    this.nbi = "გთხოვთ მოაბრუნოთ თქვენი მოწყობილობა!";
    this.krt = "გთხოვთ, გამორთოთ პირადი რეჟიმი თქვენს ბრაუზერში რომ შეძლოთ თამაში.";
    this.kov = "ეს თამაში ოპტიმიზირებულია Google Chrome-ისათვის.";
    this.ixd = "გთხოვთ გამოიყენოთ";
    this.jlh = "-ის მიმდინარე ვერსია";
    this.mnz = "სამწუხაროდ, ამ ბრაუზერზე თამაში სრულად ვერ ხერხდება.";
    this.ddo = "ამ თამაშის თამაში უფასოდ შეუძლებელია!";
    this.qmf = "ჩართეთ თქვენი მოწყობილობა პორტრეტის რეჟიმზე რომ ითამაშოთ ისე თითქოს რეალურ სლოტ მოწყობილობაზე თამაშობდეთ!";
    this.hds = "მოარგეთ თამაშის ინტერფეისი თქვენს საჭიროებებს!";
    this.lpb = "აირჩიეთ სწორი ფერი რომ გააორმაგოთ მოგება";
    this.ups = "აირჩიეთ კარტის სწორი ფერი რომ გააოთხმაგოთ მოგება";
    this.sii = "დადეთ ფსონი რომ გაზარდოთ მოგების შანსი";
    this.cmr = "მთლიანი თამაშები";
    this.njk = "ფსონი მთლიანად";
    this.ehm = "მთლიანი მოგება";
    this.hsx = "მთლიანი სათამაშო დრო";
    this.bif = "მე გავეცანი ამ გზავნილს.";
    this.azx = "თამაშის|დამთავრება";
    this.koc = "მოვლენების ჩანაწერი";
    this.csy = "ნათამაშები თამაშები არ არის.";
    this.lpe = "მდგომარეობა";
    this.uwo = "ძირითადი თამაში";
    this.qad = "ავტომატურად შეგროვება";
    this.xww = "აღებულ იქნა";
    this.vbm = "პირველი დარიგება";
    this.zbq = "მეორე დარიგება";
    this.beb = "მესამე დარიგება";
    this.xyc = "ავტოგამშვების პარამეტრები";
    this.qia = "თამაშების რაოდენობა:";
    this.tln = "შეაჩერეთ ავტოგამშვები";
    this.uva = "კრედიტი უფრო დაბალი ვიდრე:";
    this.llk = "კრედიტი უფრო მაღალი ვიდრე:";
    this.bxx = "მოიგეთ უფრო მეტი ვიდრე:";
    this.hun = "ავტოგამშვები შეჩერდება ბონუსის დასაწყისში.";
    this.mxb = "გააზიარეთ ფეისბუქზე";
    this.qjx = "სტატისტიკა";
    this.of = "/";
    this.tzw = "Bonus თამაში";
    this.ckd = "ბონუსი";
    this.uso = "ინფორმაცია";
    this.ghl = "პარამეტრ.";
    this.amm = "ხელახლა დატრიალების";
    this.hea = "Reality Check";
    this.mdc = "For more information, see the game rules."
}
lfp.prototype = new sce;

function lhu() {
    this.php = "A MINIMUM TÉT";
    this.brv = "MAXIMUM TÉT";
    this.mhw = "MIN. TÉT";
    this.wys = "MAX. TÉT";
    this.rul = "TÉT";
    this.start = "START";
    this.yyz = "SÚGÓ";
    this.chk = "SÚGÓ";
    this.jpb = "MENÜ";
    this.wjr = "MENÜ";
    this.yop = "STOP";
    this.bex = "HITEL";
    this.uob = "A JÁTÉKNAK VÉGE";
    this.gvt = "NYEREMÉNY!";
    this.epj = "SOK SZERENCSÉT!";
    this.qio = "NYEREMÉNY";
    this.lon = "UTOLSÓ NYER.";
    this.bpj = "FELÍR";
    this.dye = "FELÍR";
    this.fzw = "SZORZÁS";
    this.qsy = "AUTO|START";
    this.xnr = "FELEZÉS";
    this.mxq = "KILÉPÉS";
    this.ohp = "START";
    this.lny = "VÁLASSZON TÉTET";
    this.iip = "FELEZÉS";
    this.ret = "VISSZA A|JÁTÉKHOZ";
    this.vtl = "Összes Nyeremény";
    this.dro = "Figyelmeztetés";
    this.asx = "ÖSSZES";
    this.ica = "KÉREM VÁRJON ...";
    this.vja = "Menü";
    this.rpn = "SEBESSÉG";
    this.enn = "A meghibásodás érvénytelenít minden játékot és kifizetést.";
    this.lis = "T O V Á B B";
    this.pbd = "AUTOSTART";
    this.qiq = "SÚGÓ";
    this.hhy = "SZORZÁS";
    this.left = "BAL";
    this.isz = "JOBB";
    this.ok = "OK";
    this.zpu = "MÉGSEM";
    this.fac = "Szorzás";
    this.jla = "Felezés";
    this.xrc = "JÁTÉKSZABÁLYOK";
    this.qmt = "JÁTÉKSZABÁLYOK";
    this.klh = "Bónusz!";
    this.gnl = "BÓNUSZ";
    this.tel = "A FOLYTATÁSHOZ NYOMJON MEG EGY GOMBOT";
    this.apt = "NINCS ELÉG HITEL";
    this.dzz = "V A L U E";
    this.cnu = "nyeremények";
    this.of = "/";
    this.wff = "ÉRINTSE MEG A KÉPERNYŐT A FOLYTATÁSHOZ";
    this.hqd = "BETÖLTÉSE ...";
    this.hyl = "JÁTÉK TÖRTÉNET BETÖLTÉSE ...";
    this.jqe = "Kommunikációs hiba";
    this.tps = "Elérte az egyik limitet!";
    this.lwr = "Elérte a szabad játékok maximum számát!";
    this.tpq = "(A játék megállítva)";
    this.cls = "(Játék újraindul)";
    this.fus = "NYERT";
    this.error = "HIBA";
    this.ide = "FREEPLAY";
    this.cmd = "AUTO";
    this.emy = "JÁTÉK ID";
    this.fpj = "Játék Idő";
    this.hem = "utolsó";
    this.zad = "játék";
    this.flq = "HITEL";
    this.audio = "HANG";
    this.bqj = "ZENE";
    this.lzv = "TELJES KÉPERNYŐ";
    this.yqf = "TELJES KÉPERNYŐ";
    this.language = "NYELV";
    this.zju = "Ne mutassa mégegyszer";
    this.jey = "A hangot nem lehet betölteni!";
    this.ozo = "Források hiányoznak!";
    this.lnn = "Játék hang nélkül?";
    this.ghl = "BEÁLLÍTÁS";
    this.nbi = "Kérjük fordítsa el a készüléket!";
    this.uso = "INFÓ";
    this.krt = "A játékhoz kérem tiltsa le a Privát Böngészés módot a böngészőjében.";
    this.kov = "Ez a játék Google Chrome böngészőre van optimalizálva.";
    this.ixd = "Kérjük használja a(z)";
    this.jlh = " legújabb verzióját!";
    this.mnz = "Sajnos ez a böngésző nem teljesen támogatott.";
    this.ddo = "Ez a játék nem indítható FreePlay módban!";
    this.qmf = "Fordítsa a készülékét álló módba, hogy úgy játsszon, mint egy igazi nyerőgépen!";
    this.hds = "Állítsa be a játék felületét az Ön igényeinek megfelelően!";
    this.lpb = "VÁLASSZA KI A MEGFELELŐ SZÍNT, HOGY MEGDUPLÁZZA A NYEREMÉNYT";
    this.ups = "VÁLASSZA KI A MEGFELELŐ KÁRTYASZÍNT, HOGY MEGNÉGYSZEREZZE A NYEREMÉNYT";
    this.sii = "SZORZÁS EGY LEHETŐSÉG, HOGY NÖVELJE A NYEREMÉNYT";
    this.qjx = "Statisztika";
    this.cmr = "Összes Játék";
    this.njk = "Összes Tét";
    this.ehm = "Összes Nyeremény";
    this.hea = "Reality Check";
    this.hsx = "Összes Játék Idő";
    this.bif = "Elolvastam az üzenetet.";
    this.azx = "KILÉPÉS";
    this.koc = "Játék Történet";
    this.csy = "Nincsenek játékok.";
    this.lpe = "STÁTUSZ";
    this.uwo = "Fő Játék";
    this.qad = "Autom. Felírás";
    this.xww = "Felírva";
    this.tzw = "Bónusz játék";
    this.amm = "Respin";
    this.ckd = "Bónusz";
    this.vbm = "Első Leosztás";
    this.zbq = "Második Leosztás";
    this.beb = "Harmadik Leosztás";
    this.xyc = "AUTOSTART BEÁLLÍTÁS";
    this.qia = "Játékok száma:";
    this.tln = "Stop autostart";
    this.uva = "A hitel kevesebb, mint:";
    this.llk = "A hitel több, mint:";
    this.bxx = "A nyeremény több, mint:";
    this.hun = "Az AUTOSTART funkció kikapcsolódik a bónusz játék kezdetén.";
    this.mxb = "Megosztás a Facebook-on";
    this.mdc = "For more information, see the game rules."
}
lhu.prototype = new sce;

function wyr() {
    this.php = "MIZA MINIMĂ ESTE";
    this.brv = "MIZA MAXIMĂ";
    this.mhw = "MIZA MIN.";
    this.wys = "MIZA MAX.";
    this.rul = "MIZĂ";
    this.start = "START";
    this.yyz = "AJUTOR";
    this.chk = "LISTA|CÂŞTIGURI";
    this.jpb = "MENIU";
    this.wjr = "MENIUL|JOCULUI";
    this.yop = "STOP";
    this.bex = "CREDIT";
    this.uob = "SFÂRŞIT JOCUL";
    this.gvt = "CÂŞTIGĂTOR!";
    this.epj = "MULT NOROC!";
    this.qio = "CÂŞTIG";
    this.lon = "ULTIMUL CÂŞTIG";
    this.bpj = "COLECTA";
    this.dye = "COLECTA";
    this.fzw = "JOC";
    this.qsy = "AUTO|START";
    this.xnr = "COLECTARE|1/2";
    this.mxq = "IEŞIRE";
    this.ohp = "APĂSAŢI START";
    this.lny = "ALEGEŢI MIZA";
    this.iip = "COLECTARE|1/2";
    this.ret = "ÎNAPOI|LA JOC";
    this.vtl = "Câştig total";
    this.dro = "Avertizare";
    this.asx = "TOTAL";
    this.ica = "AŞTEPTAŢI VĂ ROG ...";
    this.vja = "Meniul Jocului";
    this.rpn = "VITEZĂ";
    this.enn = "Fără garanţie la defectarea aparatului.";
    this.lis = "C O N T I N U A R E";
    this.pbd = "AUTOSTART";
    this.qiq = "LISTA CÂŞTIGURI";
    this.hhy = "JOC";
    this.left = "STÂNGA";
    this.isz = "DREAPTA";
    this.ok = "OK";
    this.zpu = "ÎNTRERUPERE";
    this.fac = "Joc";
    this.jla = "Colectare 1/2";
    this.xrc = "REGULILE JOCULUI";
    this.qmt = "REGULILE|JOCULUI";
    this.klh = "Bonus!";
    this.gnl = "BONUS";
    this.tel = "PENTRU CONTINUARE APASĂ PE UN BUTON";
    this.apt = "CREDIT INSUFICIENT.";
    this.cnu = "câştigă";
    this.dzz = "V A L U E";
    this.of = "DIN";
    this.wff = "ATINGEȚI ECRANUL PENTRU A CONTINUA";
    this.hqd = "ÎNCARCĂ ...";
    this.hyl = "ÎNCARCĂ ISTORIC ...";
    this.jqe = "Eroare de comunicare";
    this.tps = "Aţi atins una dintre limite!";
    this.lwr = "Aţi atins numărul maxim de jocuri gratis!";
    this.tpq = "(Jocul se încheie)";
    this.cls = "(Jocul se restartează)";
    this.fus = "CÂŞTIGAT";
    this.error = "EROARE";
    this.ide = "FREEPLAY";
    this.cmd = "AUTO";
    this.emy = "ID JOC";
    this.fpj = "TIMP DE JOC";
    this.hem = "ultimele";
    this.zad = "jocuri";
    this.flq = "CREDIT";
    this.audio = "AUDIO";
    this.bqj = "MUZICĂ";
    this.lzv = "ECRAN COMPLET";
    this.yqf = "ECRAN|COMPLET";
    this.language = "LIMBA";
    this.zju = "Nu reafișați";
    this.jey = "Sunetele nu pot fi încărcate!";
    this.ozo = "Lipsesc resurse!";
    this.lnn = "Jucaţi fără sunet?";
    this.ghl = "SETĂRI";
    this.nbi = "Vă rugăm opriţi aparatul!";
    this.uso = "INFO";
    this.krt = "Vă rugăm dezactivaţi PRIVATE MODE în browser-ul dvs. pentru a juca.";
    this.kov = "Acest joc este optimizat pentru Google Chrome.";
    this.joq = "Vă rugăm utilizaţi versiunea actuală";
    this.mnz = "Din păcate acest browser nu este sprijinit complet.";
    this.ddo = "Acest joc nu poate fi pornit în modul freeplay!";
    this.qmf = "Treceţi aparatul dvs. în modul portret, pentru a juca ca la o maşină automată!";
    this.hds = "Ajustează interfaţa de joc nevoilor dvs!";
    this.lpb = "SELECTEAZĂ CULOAREA CORECTĂ PENTRU DUBLAREA CÂŞTIGULUI";
    this.ups = "SELECTEAZĂ CULOAREA CORECTĂ A CĂRŢII PENTRU A CÂŞTIGA DE 4 ORI";
    this.sii = "JOACĂ PENTRU ŞANSA DE A CREŞTE PROFITUL";
    this.qjx = "Statistică";
    this.cmr = "Număr jocuri";
    this.njk = "Pariuri totale";
    this.ehm = "Câştig total";
    this.hea = "Reality Check";
    this.hsx = "Timp total de joc";
    this.bif = "Am citit mesajul.";
    this.azx = "ÎNCHEIERE|JOC";
    this.koc = "ISTORIC";
    this.csy = "Nu există jocuri.";
    this.lpe = "STATUT";
    this.uwo = "Joc principal";
    this.qad = "Auto colectare";
    this.xww = "Colectat";
    this.tzw = "Bonusspins";
    this.amm = "Respin";
    this.ckd = "Bonus";
    this.vbm = "Primul Deal";
    this.zbq = "Al doilea deal";
    this.beb = "Al treilea deal";
    this.xyc = "SETĂRI AUTOSTART";
    this.qia = "Numărul jocurilor:";
    this.tln = "Oprire autostart";
    this.uva = "Credit sub:";
    this.llk = "Credit peste:";
    this.bxx = "Câștig peste:";
    this.hun = "Autostart se va opti la începerea bonusului.";
    this.mxb = "Distribuie Facebook";
    this.mdc = "For more information, see the game rules."
}
wyr.prototype = new sce;

function dtc() {
    this.php = "MÍNIMA APOSTA É";
    this.brv = "MÁX. APOSTA";
    this.mhw = "MÍN. APOSTA";
    this.wys = "MÁX. APOSTA";
    this.rul = "APOSTA";
    this.start = "PARTIDA";
    this.yyz = "AJUDA";
    this.chk = "ESQUEMA|DE PAGOS";
    this.jpb = "MENU";
    this.wjr = "SELEÇÃO|DE JOGOS";
    this.yop = "PARADA";
    this.bex = "CRÉDITO";
    this.uob = "FIM DO JOGO";
    this.gvt = "VENCEDOR!";
    this.epj = "BOA SORTE!";
    this.qio = "GANHO";
    this.lon = "ULTIMO GANHO";
    this.bpj = "COLETAR";
    this.dye = "COLETAR";
    this.fzw = "JOGADA";
    this.qsy = "AUTO|PARTIDA";
    this.xnr = "METADE";
    this.mxq = "SAÍDA";
    this.ohp = "PREMIR PARTIDA";
    this.lny = "SELECIONAR APOSTA";
    this.iip = "METADE";
    this.ret = "VOLTAR|PARA|O JOGO";
    this.vtl = "Ganho total";
    this.dro = "Aviso";
    this.asx = "TOTAL";
    this.ica = "AGUARDE POR FAVOR ...";
    this.vja = "Seleção de jogos";
    this.rpn = "VELOCIDADE";
    this.enn = "Não se assume responsabilidade por avarias na máquina.";
    this.lis = "C O N T I N U A R";
    this.pbd = "AUTOPARTIDA";
    this.qiq = "ESQUEMA DE PAGOS";
    this.hhy = "JOGADA";
    this.left = "ESQUERDA";
    this.isz = "DIREITA";
    this.ok = "OK";
    this.zpu = "CANCELAR";
    this.fac = "Jogada";
    this.jla = "Metade";
    this.xrc = "REGRAS DO JOGO";
    this.qmt = "REGRAS|DO JOGO";
    this.klh = "Bonus!";
    this.gnl = "BONUS";
    this.tel = "PREMIR QUALQUER TECLA PARA CONTINUAR";
    this.apt = "NÃO HÁ CRÉDITO SUFICIENTE!";
    this.cnu = "ganha";
    this.dzz = "V A L U E";
    this.of = "DE";
    this.wff = "TOCAR NA TELA PARA CONTINUAR";
    this.hqd = "CARREGANDO ...";
    this.hyl = "CARREGANDO HISTÓRICO ...";
    this.jqe = "Erro de comunicação";
    this.tps = "Alcançou um dos limities!";
    this.lwr = "Alcançou a quantidade máxima de jogos livres!";
    this.tpq = "(O jogo será encerrado)";
    this.cls = "(O jogo será reiniciado)";
    this.fus = "GANHOU";
    this.error = "ERRO";
    this.ide = "FREEPLAY";
    this.cmd = "AUTO";
    this.emy = "GAME ID";
    this.fpj = "Playing Time";
    this.hem = "last";
    this.zad = "games";
    this.flq = "DEPOSIT";
    this.audio = "AUDIO";
    this.bqj = "MUSIC";
    this.lzv = "TELA CHEIA";
    this.yqf = "TELA|CHEIA";
    this.language = "IDIOMA";
    this.zju = "Não exibir novamente";
    this.jey = "Sounds não podem ser carregados!";
    this.ozo = "Faltam recursos!";
    this.lnn = "Jogar sem som?";
    this.ghl = "AJUSTES";
    this.nbi = "Favor girar o seu aparelho!";
    this.uso = "INFORMAÇÃO";
    this.krt = "Favor desativar o MODO PRIVADO no browser para iniciar o jogo.";
    this.kov = "Este jogo é otimizado por Google Chrome.";
    this.joq = "Favor usar a versão atual de";
    this.mnz = "Infelizmente este browser não é completamente suportado.";
    this.ddo = "Este jogo não pode ser iniciado no modo de jogo livre!";
    this.qmf = "Girar o seu aparelho para o modo de portrait, para jogar como em uma máquina real!";
    this.hds = "Adapte a interface do jogo às suas necessidades!";
    this.lpb = "ESCOLHA A COR CERTA PARA DOBRAR O GANHO";
    this.ups = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.sii = "GAMBLE PARA A CHANCE DE AUMENTAR O GANHO";
    this.qjx = "Estatísticas";
    this.cmr = "Número de jogos";
    this.njk = "Aposta total";
    this.ehm = "Ganho total";
    this.hea = "Reality Check";
    this.hsx = "Tempo total do jogo";
    this.bif = "Eu lí esta mensagem.";
    this.azx = "ENCERRAR|JOGO";
    this.koc = "HISTÓRICO";
    this.csy = "Ainda não existem jogos.";
    this.lpe = "ESTADO";
    this.uwo = "Jogo principal";
    this.qad = "Coletado automaticamente";
    this.xww = "Coletado";
    this.tzw = "Bonusspins";
    this.amm = "Respin";
    this.ckd = "Bonus";
    this.vbm = "Primeiro Deal";
    this.zbq = "Segundo Deal";
    this.beb = "Terceiro Deal";
    this.xyc = "AJUSTES AUTOSTART";
    this.qia = "Número de jogos:";
    this.tln = "Parar autostart";
    this.uva = "Crédito menor do que:";
    this.llk = "Crédito maior do que:";
    this.bxx = "Ganho maior do que:";
    this.hun = "O autostart será parado no início do bonus.";
    this.mxb = "Participar no Facebook";
    this.mdc = "For more information, see the game rules."
}
dtc.prototype = new sce;

function uwg() {
    this.tss = "LINES";
    this.bmr = "LINE";
    this.aww = "BET / LINE";
    this.vwv = "WAYS";
    this.gkk = "WAY";
    this.crd = "BONUSSPINS LEFT";
    this.fsz = "TOTAL BONUSSPINS";
    this.tqj = "BONUSSPINS PLAYED";
    this.iax = "BONUSSPINS LEFT";
    this.egt = "CONGRATULATIONS YOU WIN!";
    this.jyx = "BONUS WIN";
    this.msu = "SCATTER";
    this.xtd = "SCATTERED:";
    this.mlt = "SYMBOLS";
    this.lzi = "SYMBOL";
    this.jso = "You win extra BONUSSPINS!";
    this.hyb = "Wins pay only from left to right!";
    this.zje = "BONUS ENTRY WIN:";
    this.lin = "BONUSSPINS";
    this.vpi = "BONUSSPINS are played with the same bet and number of lines as the initiating game.";
    this.ykm = "Line Wins: Only the highest line win is paid on each line played. Line wins are a multiple of the line bet. Line wins from different lines are added.";
    this.wfc = "Scatter Wins: Scatter wins are a multiple of the total bet. Wins from Scatter symbols are added to the line wins.";
    this.vri = "BONUS HELP";
    this.nuf = "SYMBOL HELP";
    this.qab = "WINLINE HELP";
    this.ila = "WINWAY HELP";
    this.pcr = "You win an extra 15 BONUSSPINS!";
    this.mqd = "Play the Bonus until you have no BONUSSPINS left. BONUSSPINS can be re-triggered during the Bonus.";
    this.civ = "GAMBLE AMOUNT";
    this.yrz = "RED/BLACK GAMBLE TO WIN";
    this.jnz = "SUIT GAMBLE TO WIN";
    this.fpw = "15 BONUSSPINS are won with 3, 4 or 5 SCATTERED Symbols on any position! All BONUSSPIN wins are multiplied by 3.";
    this.byh = "Finish placing your bets!";
    this.ker = "Place your bets please!";
    this.xao = "No more bets!";
    this.mvu = "Good Luck!";
    this.sbn = "Better luck next time!";
    this.hur = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.ibz = "Bets accepted!";
    this.qmp = "Bets not accepted!";
    this.ify = "Game in progress, please wait!";
    this.pvy = "WIN UP TO";
    this.qtl = "WIN HISTORY";
    this.hec = "BONUS END";
    this.oyv = "Bonus Multiplier";
    this.tia = "Freespins";
    this.kxm = "FREESPINS PLAYED";
    this.trq = "FREESPIN WIN";
    this.qlm = "CONGRATULATION!";
    this.nns = "Congratulation, you get";
    this.xup = "You have";
    this.wli = "freespins remaining!"
}
uwg.prototype = new bnz;

function frc() {
    this.tss = "ЛИНИИ";
    this.bmr = "ЛИНИЯ";
    this.aww = "СТ. / ЛИНИЮ";
    this.crd = "OСТАЛОСЬ ПРИЗОВЫХ ВРАЩЕНИЙ";
    this.fsz = "Бонусные вращения";
    this.tqj = "СЫГРАННО ВРАЩЕНИЙ";
    this.iax = "OСТАЛОСЬ ПРИЗОВЫХ ВРАЩЕНИЙ";
    this.egt = "ПОЗДРАВЛЯЕМ! ВЫ ВЫИГРАЛИ!";
    this.jyx = "БОНУС ВЫИГРЫШ";
    this.msu = "SCATTER";
    this.xtd = "SCATTERED:";
    this.mlt = "СИМВОЛЫ";
    this.lzi = "СИМВОЛ";
    this.lin = "призовых вращений";
    this.hyb = "Все выигрыши считаются только слевa направо.";
    this.jso = "Вы выиграли дополнительные бонусные вращения!";
    this.vpi = "Ставка и количество линий в игре бонусные вращения те же самые, что и в инициировавшей игре.";
    this.ykm = "Линейные выигрыши: Засчитывается только максимальный выигрыш на каждой линии. Размер линейных выигрышей – многократная сумма ставки. Линейные выигрыши на разных линиях суммируются.";
    this.wfc = "Выигрыши Scatter Сумма выигрышей Scatter – многократная сумма общей ставки. Выигрыши с символами Scatter прибавляются к линейным выигрышам.";
    this.vwv = "ПУТИ";
    this.gkk = "ПУТЬ";
    this.vri = "БОНУС – ПОМОЩЬ";
    this.nuf = "СИМВОЛ ПОМОЩЬ";
    this.qab = "ЛИНИИ ВЫИГРЫША ПОМОЩЬ";
    this.ila = "WINWAY HELP";
    this.hur = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ В 4 РАЗА";
    this.civ = "СУММА РИСКА";
    this.yrz = "РИСКНУТЬ КРАСНАЯ/ЧЕРНАЯ";
    this.jnz = "ВЫБОР МАСТИ";
    this.pvy = "ВЫИГРАЙ ДО";
    this.qtl = "ХРОНИКА ВЫИГРЫШЕЙ";
    this.hec = "КОНЕЦ БОНУСА";
    this.tia = "Freespins";
    this.kxm = "FREESPINS PLAYED";
    this.trq = "FREESPIN WIN";
    this.qlm = "ПОЗДРАВЛЯЕМ!";
    this.nns = "Congratulation, you get";
    this.xup = "You have";
    this.wli = "freespins remaining!";
    this.ibz = "Ставки признаны!";
    this.qmp = "Ставки не признаны!";
    this.ify = "Игра в процессе, пожалуйста, подождите...";
    this.byh = "Игра сейчас начнется!";
    this.ker = "Сделайте ставку, пожалуйста!";
    this.xao = "Ставок больше нет!";
    this.mvu = "Удачи!";
    this.sbn = "Желаем удачи в следующий раз!";
    this.pcr = "Вы выиграли следующие 15 призовых вращений барабанов!";
    this.mqd = "Бонус призовых вращений заканчивается когда призовых вращений больше нет. Дополнительные призовые вращения могут быть добавлены к Бонусу призовых вращений.";
    this.fpw = "Вы получите 15 призовых вращений барабанов при выпадении 3, 4 или 5 символов СКАТТЕР на любой позиции. Все выигрыши умножаются на 3."
}
frc.prototype = new sgq;

function pxb() {
    this.tss = "LÍNEAS";
    this.bmr = "LÍNEA";
    this.aww = "APUE. / LÍNEA";
    this.crd = "BONUSSPINS RESTANTES";
    this.fsz = "TOTAL DE BONUSSPINS";
    this.tqj = "BONUSSPINS JUGADOS";
    this.iax = "BONUSSPINS RESTANTES";
    this.egt = "ENHORABUENA HA GANADO";
    this.jyx = "PREMIO BONUS";
    this.msu = "SCATTER";
    this.xtd = "SCATTERED:";
    this.mlt = "SIMBOLOS";
    this.lzi = "SIMBOLO";
    this.oyv = "Multiplicador de bonus";
    this.zje = "PREMIO ENTRADA BONUS:";
    this.lin = "JUEGOS LIBRES";
    this.hyb = "Premios de la izquierda a la derecha!";
    this.jso = "Ha ganado BONUSSPINS extra.";
    this.vpi = "Los BONUSSPINS se juegan con la misma apuesta y el número de lineas que el juego inicial.";
    this.ykm = "Premios de línea: Sólo se paga el mayor premio de línea por cada línea jugada. Los premios de línea son un múltiplo de la apuesta de la línea. Se suman los premios de línea de las diferentes líneas.";
    this.wfc = "Premios Scatter: Los premios Scatter son múltiplos de la apuesta total. Los premios de los símbolos scatter se suman a los premios de la línea.";
    this.vwv = "CAMINOS";
    this.gkk = "CAMINO";
    this.vri = "AYUDA DE BONUS";
    this.nuf = "SÍMBOLO AYUDA";
    this.qab = "LÍNEA GANADORA AYUDA";
    this.ila = "WINWAY HELP";
    this.hur = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.civ = "PREMIO";
    this.yrz = "ROJO/NEGRO PREMIO";
    this.jnz = "PREMIO DE SIMBOLO";
    this.pvy = "GANANCIAS HASTA";
    this.qtl = "HISTORIAL DE GANANCIAS";
    this.hec = "FIN DE BONUS";
    this.tia = "Freespins";
    this.kxm = "FREESPINS PLAYED";
    this.trq = "FREESPIN WIN";
    this.qlm = "¡ENHORABUENA!";
    this.nns = "Congratulation, you get";
    this.xup = "You have";
    this.wli = "freespins remaining!";
    this.ibz = "Aceptar apuestas!";
    this.qmp = "Apuestas rechazadas!";
    this.ify = "El juego no ha concluido, por favor espere!";
    this.byh = "El juega va a comenzar!";
    this.ker = "Haga juego!";
    this.xao = "No más apuestas!";
    this.mvu = "¡Mucha suerte!";
    this.sbn = "¡Mejor suerte la próxima vez!";
    this.pcr = "Premio de 15 Freespins addicionales!";
    this.mqd = "El bono concluye cuando todos los BONUSSPINS se hayan jugado. En bono pueden ganarse BONUSSPINS adicionales.";
    this.fpw = "Se gana 15 Freespins con 3, 4 o 5 simbolos de SCATTER en alguna posicion! Se triplican todos los premios de freespins."
}
pxb.prototype = new rtq;

function eht() {
    this.tss = "LINIEN";
    this.bmr = "LINIE";
    this.aww = "EINS. / LINIE";
    this.crd = "VERBLEIBENDE BONUSSPINS";
    this.fsz = "TOTAL BONUSSPINS";
    this.tqj = "GESPIELTE BONUSSPINS";
    this.iax = "VERBLEIBENDE BONUSSPINS";
    this.egt = "GRATULIERE GEWONNEN!";
    this.jyx = "BONUS GEWINN";
    this.msu = "SCATTER";
    this.xtd = "SCATTERED:";
    this.mlt = "SYMBOLE";
    this.lzi = "SYMBOL";
    this.oyv = "Bonus Multiplikator";
    this.zje = "BONUS START GEWINN:";
    this.lin = "BONUSSPINS";
    this.hyb = "Gewinne werden nur von links nach rechts gewertet!";
    this.jso = "Zusätzliche BONUSSPINS gewonnen!";
    this.vpi = "Die BONUSSPINS werden mit demselben Einsatz und Linienanzahl wie das auslösende Spiel gespielt.";
    this.ykm = "Liniengewinne: Nur der höchste Liniengewinn je gespielter Linie zählt. Liniengewinne sind ein Vielfaches des Linieneinsatzes. Die Liniengewinne von verschiedenen Linien werden addiert.";
    this.wfc = "Scattergewinne: Scatter-Gewinne sind ein Vielfaches des Gesamteinsatzes. Gewinne aus Scatter-Symbolen werden den Liniengewinnen hinzugezählt.";
    this.vwv = "WEGE";
    this.gkk = "WEG";
    this.vri = "BONUS HILFE";
    this.nuf = "SYMBOL HILFE";
    this.qab = "GEWINNLINIEN HILFE";
    this.ila = "GEWINNWEGE HILFE";
    this.hur = "WÄHLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.civ = "RISIKO";
    this.yrz = "ROT/SCHWARZ CHANCE";
    this.jnz = "SYMBOL CHANCE";
    this.pvy = "GEWINNE BIS ZU";
    this.qtl = "GEWINNHISTORIE";
    this.hec = "BONUS ENDE";
    this.tia = "Freespins";
    this.kxm = "GESPIELTE FREESPINS";
    this.trq = "FREESPIN GEWINN";
    this.qlm = "GRATULIERE!";
    this.nns = "Gratulation, Sie bekommen";
    this.xup = "Sie haben noch";
    this.wli = "Freespins übrig!";
    this.ibz = "Einsätze akzeptiert!";
    this.qmp = "Einsätze nicht akzeptiert!";
    this.ify = "Spiel läuft, bitte warten!";
    this.byh = "Das Spiel beginnt gleich!";
    this.ker = "Ihre Einsätze bitte!";
    this.xao = "Keine weiteren Einsätze!";
    this.mvu = "Viel Glück!";
    this.sbn = "Mehr Glück beim nächsten Mal!";
    this.pcr = "Weitere 15 BONUSSPINS gewonnen!";
    this.mqd = "Der Bonus endet, wenn alle BONUSSPINS abgespielt worden sind. Zusätzliche BONUSSPINS können im Bonus gewonnen werden.";
    this.fpw = "15 BONUSSPINS werden durch 3, 4 oder 5 SCATTER Symbole auf jeder Position gewonnen! Alle BONUSSPIN Gewinne x 3."
}
eht.prototype = new thf;

function xbf() {
    this.tss = "ÇIZGILER";
    this.bmr = "ÇİZGİ";
    this.aww = "BANKO / ÇIZGI";
    this.crd = "KALAN PRIM OYUNLARIR";
    this.fsz = "TOPLAM PRİM SPİNLERİ";
    this.tqj = "OYNANAN PRIM OYUNLAR";
    this.iax = "KALAN PRIM OYUNLARIR";
    this.egt = "TEBRİKLER KAZANDINIZ!";
    this.jyx = "PRIM KAZANCI";
    this.msu = "SCATTER";
    this.xtd = "SCATTERED:";
    this.mlt = "SEMBOLLER";
    this.lzi = "SEMBOL";
    this.oyv = "Prim çarpanı";
    this.zje = "PRİM GİRİŞ KAZANCI:";
    this.lin = "BEDAVA OYUNLAR";
    this.hyb = "Kazançlar tek soldan sağa değerlendirilir!";
    this.jso = "Ek PRİM SPİN’LERİ kazandınız!";
    this.vpi = "PRİM SPİNLER başlayacak olan oyunda da aynı banko ve çizgi sayısı ile oynanacaktır.";
    this.ykm = "Çizgi kazançları: Oynanan her çizginin sadece en yüksek çizgi kazancı sayılmaktadır. Çizgi kazançları çizgi bankosunun kat sayısından oluşmaktadır. Çeşitli çizgilerin çizgi kazançları birbirleri ile toplanmaktadır.";
    this.wfc = "Scatter kazançları: Scatter-kazançları toplam bankonun kat sayısından oluşmaktadır. Scatter-Sembollerinden elde edilen kazançlar çizgi kazançlarına eklenmektedir.";
    this.vwv = "YOLLAR";
    this.gkk = "YOL";
    this.vri = "PRİM YARDIMI";
    this.nuf = "SEMBOL YARDIMI";
    this.qab = "KAZANÇ ÇIZGISI YARDIMI";
    this.ila = "WINWAY HELP";
    this.hur = "DOĞRU KART RENGİNİ SEÇEREK KAZANCINI DÖRDE KATLARSIN.";
    this.civ = "RİSK";
    this.yrz = "KIRMIZI/SİYAH ŞANSI";
    this.jnz = "SEMBOL ŞANSI";
    this.pvy = "KAZANANILMASI MÜMKÜN OLAN";
    this.qtl = "KAZANÇ GEÇMİŞİ";
    this.hec = "PRİM BİTTİ";
    this.tia = "Freespins";
    this.kxm = "FREESPINS PLAYED";
    this.trq = "FREESPIN WIN";
    this.qlm = "TEBRİKLER!";
    this.nns = "Congratulation, you get";
    this.xup = "You have";
    this.wli = "freespins remaining!";
    this.mvu = "Bol şans!";
    this.ibz = "Bahisler kabul edildi!";
    this.qmp = "Bahisler kabul edilmedi!";
    this.ify = "Oyun oynanmakta, lütfen bekleyin!";
    this.byh = "Oyun başlamak üzere!";
    this.ker = "Bankolarınız lütfen!";
    this.xao = "Daha fazla banko mümkün değil!";
    this.sbn = "Bir dahaki sefer daha şanslı olursun!";
    this.pcr = "15 bedava oyun daha kazandın!";
    this.mqd = "Bedava oyun primleri tüm bedava oyunlar oynandığı zaman biter. Bedava oyun primlerinde ek bedava oyunlar kazanılabilir.";
    this.fpw = "Her pozisyondaki 3, 4 veya 5 SCATTERED sembolleri ile 15 tane bedava oyun kazanılır! Tüm bedava oyun kazançları x 3."
}
xbf.prototype = new pwg;

function ydt() {
    this.tss = "LINEK";
    this.bmr = "LINKA";
    this.aww = "SÁZKA / LINKA";
    this.crd = "ZBÝVAJÍCÍ VOLNÉ HRY";
    this.fsz = "TOTÁLNÍ BONUSSPINS";
    this.tqj = "ODEHRANÉ BONUS HRY";
    this.iax = "ZBÝVAJÍCÍ VOLNÉ HRY";
    this.egt = "GRATULUJEME VYHRÁL JSTE!";
    this.jyx = "BONUS VÝHRA";
    this.msu = "SCATTER";
    this.xtd = "SCATTERED:";
    this.mlt = "SYMBOLY";
    this.lzi = "SYMBOL";
    this.oyv = "Násobic bonusu";
    this.zje = "BONUS STARTUJE VÝHRU:";
    this.lin = "BONUSSPINS";
    this.hyb = "Výhry platí pouze z leva do prava!";
    this.jso = "Vyhrál jste extra BONUSOVOU hru!";
    this.vpi = "BONUSSPINS sa hrají se stejnou  sázkou a počtem línií jako hra, při které se spustily.";
    this.ykm = "Výhry na línkách: Započítává se jen nejvyšší výhra na lince. Výhry na linkách jsou násobky linkových sázek. Výhry na různých línkách se sčítají.";
    this.wfc = "Scatter výhry: Scatter výhry násobí celkovou sázku. Výhry ze Scatter symbolů se připočítávají k výhrám na línkách.";
    this.vwv = "ZPŮSOBY";
    this.gkk = "ZPŮSOB";
    this.vri = "BONUS NÁPOVĚDA";
    this.nuf = "SYMBOL NÁPOVĚDA";
    this.qab = "VÝHERNÉ LINIE NÁPOVĚDA";
    this.ila = "WINWAY HELP";
    this.hur = "VYBRAT SPRÁVNOU BARVU KARTY KE ZČTYŘNÁSOBENÍ VÝHRY";
    this.civ = "VÝHRA";
    this.yrz = "CERVENÁ/CERNÁ VÝHRA";
    this.jnz = "SPRÁVNÁ BARVA KARTY VYHRÁVÁ";
    this.ibz = "Sázky byly akceptovány!";
    this.qmp = "Sázky nebyly akceptovány!";
    this.pvy = "VÝHRA AŽ";
    this.qtl = "HISTORIE VÝHER";
    this.hec = "KONEC BONUSU";
    this.tia = "Freespins";
    this.kxm = "FREESPINS PLAYED";
    this.trq = "FREESPIN WIN";
    this.qlm = "GRATULUJEME!";
    this.nns = "Congratulation, you get";
    this.xup = "You have";
    this.wli = "freespins remaining!";
    this.ify = "Hra probíhá, počkejte prosím!";
    this.byh = "Hra Se Hned Spustí!";
    this.ker = "Vaše sázky prosím!";
    this.xao = "Žádné další sázky.";
    this.mvu = "Hodne štestí!";
    this.sbn = "Příště více štěstí!";
    this.pcr = "Vyhráváte dalších 15 volných her!";
    this.mqd = "Bonus je ukoncen po odehrání všech bonusových her. Bonusové hry mohou být získány i behem bonusu.";
    this.fpw = "3, 4 nebo 5 SCATTER symbolu na libovolné pozici vyhrává 15 volných her, výhry ve volné hre jsou násobené 3x."
}
ydt.prototype = new zez;

function nvs() {
    this.tss = "LIINID";
    this.bmr = "LIIN";
    this.aww = "PAN. / LIINIL";
    this.crd = "TASUTA KEERUTUSI JÄÄNUD";
    this.fsz = "BOONUSKEERUTUSI KOKKU";
    this.tqj = "MÄNGE MÄNGITUD";
    this.iax = "TASUTA KEERUTUSI JÄÄNUD";
    this.egt = "ÕNNITLEME, SA VÕITSID!";
    this.jyx = "BOONUSVÕIT";
    this.lin = "BOONUSKEERUTUST";
    this.civ = "RISKIMÄNGU SUMMA";
    this.yrz = "PUNANE/MUST RISKIMÄNG";
    this.jnz = "RISKIMÄNG SÜMBOLIGA";
    this.hur = "VÕIDU NELJAKORDISTAMISEKS VALI ÕIGE MAST";
    this.ibz = "Panused aktsepteeritud!";
    this.qmp = "Panuseid ei aktsepteeritud!";
    this.pvy = "VÕIDA KUNI";
    this.qtl = "VÕITUDE AJALUGU";
    this.hec = "BOONUSE LÕPP";
    this.tia = "Freespins";
    this.kxm = "FREESPINS PLAYED";
    this.trq = "FREESPIN WIN";
    this.qlm = "ÕNNITLEME!";
    this.nns = "Congratulation, you get";
    this.xup = "You have";
    this.wli = "freespins remaining!";
    this.ify = "Mäng algab, palun oodake...";
    this.byh = "Lõpeta panuste tegemine!";
    this.ker = "Asetage palun panused!";
    this.xao = "Panuste tegemine lõppenud";
    this.mvu = "Soovime edu!";
    this.msu = "SCATTER";
    this.xtd = "SCATTERED:";
    this.mlt = "SÜMBOLID";
    this.lzi = "SÜMBOL";
    this.zje = "BOONUSVÕIT:";
    this.hyb = "Võite arvestatakse ainult vasakult paremale!";
    this.jso = "Te võitsite lisa BOONUSKEERUTUSI!";
    this.vpi = "BOONUSKEERUTUSED mängitakse sama panuse ja liinide arvuga, nagu boonuse käivitanud mängus.";
    this.vwv = "VÕIMALUSED";
    this.gkk = "VÕIMALUSE";
    this.pcr = "Te võitsite lisa 15 BOONUSKEERUTUST!";
    this.mqd = "Mängige kõik tasuta keerutused lõpuni. Tasuta keerutusi võib võita ka tasuta keerutuste boonuse ajal.";
    this.vri = "BOONUSE SPIKKER";
    this.nuf = "SÜMBOLI SPIKKER";
    this.qab = "LIINIDE SPIKKER";
    this.ila = "WINWAY HELP";
    this.ykm = "Liini võidud: Igal mänguliinil makstakse ainult suurimad liinivõidud. Liini võidud korrutatakse liini panusega. Erinevate liinide võidud liidetakse kokku.";
    this.wfc = "Scatteri võidud: Scatteri võidud korrutatakse kogupanusega. Scatteri sümboli võidud liidetakse liini võitudele.";
    this.oyv = "Boonuse mitmekordistaja";
    this.sbn = "Rohkem õnne järgmisel korral!";
    this.fpw = "3, 4 või 5 TÄHE sümbolit juhuslikel kohtadel annab 15 BOONUSKEERUTUST! Kõik BOONUSKEERUTUSE võidud korrutatakse 3-ga."
}
nvs.prototype = new raq;

function yzf() {
    this.tss = "ΓΡΑΜΜEΣ";
    this.bmr = "ΓΡΑΜΜΗ";
    this.aww = "ΣΤΟIΧΗΜΑ / Γ.";
    this.crd = "ΕΝΑΠΟΜΕIΝΑΝΤΑ BONUSSPINS";
    this.fsz = "ΤΕΛΕΙΩΣ BONUSSPINS";
    this.tqj = "ΠΑΙΓΜEΝΑ BONUSSPINS";
    this.iax = "ΕΝΑΠΟΜΕIΝΑΝΤΑ BONUSSPINS";
    this.egt = "ΣΥΓΧΑΡΗΤΗΡΙΑ ΚΕΡΔΙΣΑΤΕ!";
    this.jyx = "ΜΠOΝΟΥΣ ΚEΡΔΟΣ";
    this.msu = "SCATTER";
    this.xtd = "SCATTERED:";
    this.mlt = "ΣYΜΒΟΛΑ";
    this.lzi = "ΣΎΜΒΟΛΟ";
    this.oyv = "Πολλαπλασιαστής μπόνους";
    this.zje = "BONUS START ΚΕΡΔIΖΕΙ:";
    this.lin = "BONUSSPINS";
    this.hyb = "Τα κέρδη μετρούνται από αριστερά προς τα δεξιά!";
    this.jso = "Κερδίσατε συμπληρωματικούς BONUSSPINS!";
    this.vpi = "Τα γυρίσματα μπόνους, τα BONUSSPINS, παίζονται με το ίδιο ποντάρισμα και τον ίδιο αριθμό σειρών, όπως το αρχικό παιχνίδι.";
    this.ykm = "Κέρδη γραμμών: Μόνο το μεγαλύτερο κέρδος ανά παιγμένη γραμμή προσμετράται. Τα κέρδη των γραμμών αποτελούν πολλαπλάσιο του πονταρίσματος στη γραμμή. Τα κέρδη γραμμών που αφορούν σε διαφορετικές γραμμές προστίθενται.";
    this.wfc = "Κέρδη Scatter: Τα κέρδη Scatter αποτελούν πολλαπλάσιο του συνολικού πονταρίσματος. Τα κέρδη από σύμβολα Scatter προσμετρώνται στα κέρδη των γραμμών.";
    this.vwv = "ΔΙΑΔΡΟΜΕΣ";
    this.gkk = "ΔΙΑΔΡΟΜΉ";
    this.vri = "BONUS ΒΟΉΘΕΙΑ";
    this.nuf = "ΒΟHΘΕΙΑ ΣΥΜΒOΛΩΝ";
    this.qab = "ΒΟHΘΕΙΑ ΣΕΙΡΩΝ ΚEΡΔΟΥΣ";
    this.ila = "WINWAY HELP";
    this.hur = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΦΥΛΛΟΥ ΓΙΑ ΝΑ ΤΕΤΡΑΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.civ = "ΠΟΣΟ ΡΙΣΚΟΥ";
    this.yrz = "ΜΑΥΡΟ/ΚΟΚΚΙΝΟ ΚΕΡΔΟΣ ΡΙΣΚΟΥ";
    this.jnz = "ΣΥΜΒΟΛΟ ΚΕΡΔΟΣ ΡΙΣΚΟΥ";
    this.pvy = "ΚΕΡΔΗ ΕΩΣ";
    this.qtl = "ΙΣΤΟΡΙΚΟ ΚΕΡΔΩΝ";
    this.hec = "ΛΗΞΗ ΜΠΟΝΟΥΣ";
    this.tia = "Freespins";
    this.kxm = "FREESPINS PLAYED";
    this.trq = "FREESPIN WIN";
    this.qlm = "ΣΥΓΧΑΡΗΤΗΡΙΑ!";
    this.nns = "Congratulation, you get";
    this.xup = "You have";
    this.wli = "freespins remaining!";
    this.ibz = "Γίνονται αποδεκτά πονταρίσματα!";
    this.qmp = "Πονταρίσματα δε γίνονται αποδεκτά!";
    this.ify = "Ενεργό παιχνίδι, παρακαλώ περιμένετε!";
    this.byh = "Το παιχνίδι ξεκινά σε λίγο!";
    this.ker = "Το ποντάρισμα σας, παρακαλώ!";
    this.xao = "Ποντάρισμα τέλος!";
    this.mvu = "Καλή τύχη!";
    this.sbn = "Καλύτερη τύχη την επόμενη φορά!";
    this.pcr = "Κερδίσατε 15 συμπληρωματικούς BONUSSPINS!";
    this.mqd = "Το Bonus τελειώνει, όταν όλα τα BONUSSPINS έχουν παιχθεί. Συμπληρωματικά BONUSSPINS δύνανται να κερδισθούν στο Bonus.";
    this.fpw = "15 BONUSSPINS κερδίζονται με 3, 4 ή 5 σύμβολα ΑΣΤΡΟΥ σε κάθε θέση! Όλα τα BONUSSPINS αποφέρουν τριπλασιασμό κερδών."
}
yzf.prototype = new iwa;

function ccg() {
    this.tss = "ЛИНИИ";
    this.bmr = "ЛИНИЯ";
    this.aww = "ЗАЛОГ/Л-Я";
    this.crd = "БОНУС-ИГРИ ОСТАВАТ";
    this.tqj = "БОНУС-ИГРИ ИЗИГРАНИ";
    this.iax = "БОНУС-ИГРИ ОСТАВАТ";
    this.egt = "ПОЗДРАВЛЕНИЯ, ВИЕ СПЕЧЕЛИХТЕ!";
    this.jyx = "БОНУС ПЕЧАЛБА";
    this.lin = "БОНУС-ИГРИ";
    this.civ = "СУМА ЗА ДУБЛИРАНЕ";
    this.yrz = "ДУБЛИРАЙ ЧЕРВЕНА/ЧЕРНА-ПЕЧАЛБА";
    this.jnz = "ДУБЛИРАНЕ НА КОЗОВ ЦВЯТ-ПЕЧАЛБА";
    this.hur = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УЧЕТВОРИШ ПЕЧАЛБАТА";
    this.ibz = "Залозите са приети!";
    this.qmp = "Залозите не са приети!";
    this.pvy = "СПЕЧЕЛИ ДО";
    this.qtl = "ИСТОРИЯ НА ПЕЧАЛБИТЕ";
    this.hec = "КРАЙ НА БОНУС";
    this.tia = "Freespins";
    this.kxm = "FREESPINS PLAYED";
    this.trq = "FREESPIN WIN";
    this.qlm = "ПОЗДРАВЛЕНИЯ!";
    this.nns = "Congratulation, you get";
    this.xup = "You have";
    this.wli = "freespins remaining!";
    this.ify = "Затворено за залози!";
    this.byh = "Приключете със залозите!";
    this.ker = "Поставете своите залози!";
    this.xao = "Край на залозите!";
    this.mvu = "Успех!";
    this.fsz = "ОБЩО БОНУС ИГРИ";
    this.msu = "СКАТЕР";
    this.xtd = "SCATTERED:";
    this.mlt = "СИМВОЛИ";
    this.lzi = "СИМВОЛ";
    this.zje = "НАЧАЛНА БОНУС ПЕЧАЛБА:";
    this.hyb = "Печалбите се изплащат само от ляво на дясно!";
    this.jso = "Вие спечелихте допълнителни Бонус игри!";
    this.vpi = "Бонус игрите се играят със същия залог и брой линии, както основната игра.";
    this.vwv = "НАЧИНИ";
    this.gkk = "НАЧИН";
    this.pcr = "Печелите допълнителни 15 БОНУС ЗАВЪРТАНИЯ!";
    this.mqd = "Бонус играта продължава до изчерпване на бонус игрите. По време на бонус игра може да се спечелят допълнителни игри.";
    this.vri = "ПОМОЩ ЗА БОНУС";
    this.nuf = "ПОМОЩ СИМВОЛ";
    this.qab = "ПОМОЩ ПЕЧЕЛИВША ЛИНИЯ";
    this.ila = "WINWAY HELP";
    this.ykm = "Печалби на Линия: От всяка активна линия се изплаща само най-голямата печалба. Печалбата от активна линия се умножава по залога на линия. Печалбите от активните линии се събират и формират общата печалба.";
    this.wfc = "Скатер печалби: Скатер печалбата се умножава по общият залог. Печалбите от фигурите Скатер се добавят към печалбата от активните линии.";
    this.oyv = "Бонус Множител";
    this.sbn = "По-добър успех-следващият път!";
    this.fpw = "15 БОНУС ЗАВЪРТАНИЯ се печелят с 3, 4 или 5 символа ЗВЕЗДА на която и да е позиция! Всичките печалби от Бонус играта се умножават по 3."
}
ccg.prototype = new yip;

function zwj() {
    this.tss = "ხაზები";
    this.bmr = "ხაზი";
    this.aww = "ფსონი / ხაზი";
    this.vwv = "გზა";
    this.gkk = "გზა";
    this.crd = "დარჩენილი BONUS თამაშები";
    this.fsz = "BONUS თამაშების რაოდენობა ჯამში";
    this.tqj = "უკვე ნათამაშები BONUS თამაშები";
    this.iax = "დარჩენილი BONUS თამაშები";
    this.egt = "გილოცავთ თქვენ მოიგეთ!";
    this.jyx = "BONUS მოგება";
    this.msu = "SCATTER";
    this.xtd = "SCATTERED:";
    this.mlt = "სიმბოლოები";
    this.lzi = "სიმბოლო";
    this.jso = "თქვენ მოიგეთ დამატებითი BONUS თამაშები!";
    this.hyb = "მოგების ანაზღაურება ხდება მხოლოდ მარცხნიდან მარჯვნივ!";
    this.zje = "ბონუს ჩანაწერის მოგება:";
    this.lin = "BONUS თამაშები";
    this.vpi = "BONUS თამაშების თამაში ხდება იგივე ფსონზე და ხაზების რაოდენობაზე, როგორც თამაშის დაწყების დროს.";
    this.ykm = "ხაზის მოგება: თითოეულ ნათამაშებ ხაზზე, მოხდება მხოლოდ უმაღლესი ხაზის მოგების ანაზღაურება. ხაზის მოგება შედგება მრავალჯერადი ხაზის ფსონისაგან. სხვადასხვა ხაზიდან მიღებული მოგება ჯამდება ერთ მოგებად.";
    this.wfc = "Scatter მოგება: Scatter მოგება შეადგენს მთლიან ფსონს რამოდენიმეჯერ. მოგება Scatter სიმბოლოებიდან ემატება ხაზის მოგებას.";
    this.vri = "ბონუს დახმარება";
    this.nuf = "სიმბოლოს დახმარება";
    this.qab = "მოგების ხაზის დახმარება";
    this.ila = "WINWAY HELP";
    this.pcr = "თქვენ მოიგეთ დამატებითი 15 BONUS თამაშები!";
    this.mqd = "ითამაშეთ ბონუსი სანამ BONUS თამაში არ გაგითავდებათ. დამატებითი BONUS თამაშის მოგება შეიძლება ბონუსის დროს.";
    this.civ = "გარისკვის რიცხვი";
    this.yrz = "წითელი/შავი ითამაშე და მოიგე";
    this.jnz = "ფერი ითამაშე და მოიგე";
    this.fpw = "15 BONUS თამაშის მოგება ხდება 3, 4 ან 5 ვარსკვლავის სიმბოლოთი ნებისმიერ პოზიციაზე! ყველა BONUSSPIN მოგება მრავლდება 3-ზე.";
    this.sbn = "გისურვებთ მომავალში უკეთეს იღბალს!";
    this.byh = "დაასრულე ფსონის დადება!";
    this.ker = "მოათავსეთ თქვენი ფსონები გთხოვთ!";
    this.xao = "ფსონები აღარ მიიღება!";
    this.mvu = "გისურვებთ წარმატებას!";
    this.hur = "აირჩიეთ კარტის სწორი ფერი რომ გააოთხმაგოთ მოგება";
    this.ibz = "ფსონები მიღებულ იქნა!";
    this.qmp = "ფსონები არ იქნა მიღებული!";
    this.hec = "ბონუსის დასასრული";
    this.pvy = "-მდე მოგება";
    this.qtl = "მოგების ჩანაწერი";
    this.ify = "თამაში მიმდინარეობს, გთხოვთ დაელოდოთ!";
    this.oyv = "ბონუს მულტიპლიკატორი";
    this.tia = "Freespins";
    this.kxm = "FREESPINS PLAYED";
    this.trq = "FREESPIN WIN";
    this.qlm = "გილოცავთ!";
    this.nns = "Congratulation, you get";
    this.xup = "You have";
    this.wli = "freespins remaining!"
}
zwj.prototype = new lfp;

function nst() {
    this.tss = "VONALAK";
    this.bmr = "VONAL";
    this.aww = "TÉT / VONAL";
    this.vwv = "IRÁNY";
    this.gkk = "IRÁNY";
    this.crd = "MEGMARADT SZABAD JÁTÉKOK";
    this.fsz = "ÖSSZES SZABAD JÁTÉK";
    this.tqj = "LEJÁTSZOTT SZABAD JÁTÉKOK";
    this.iax = "MEGMARADT SZABAD JÁTÉKOK";
    this.egt = "GRATULÁLUNK, ÖN NYERT!";
    this.jyx = "BÓNUSZ NYEREMÉNY";
    this.msu = "SCATTER";
    this.xtd = "SCATTERED:";
    this.mlt = "SZIMBÓLUMOK";
    this.lzi = "SZIMBÓLUM";
    this.jso = "További SZABADJÁTÉKOKAT nyert!";
    this.hyb = "A Nyeremények balról jobbra fizetnek!";
    this.zje = "BÓNUSZBA LÉPŐ NYEREMÉNY:";
    this.lin = "SZABAD JÁTÉKOK";
    this.vpi = "Az alapjátéknál beállított tét és nyerővonal számmal játszódik le a SZABAD JÁTÉK is.";
    this.ykm = "Vonal Nyeremények: Csak a legnagyobb nyeremény fizet a megjátszott vonalakon. A vonal nyeremények a vonalankénti tét szorzatai. A különböző vonalankénti nyeremények összeadódnak.";
    this.wfc = "Scatter Nyeremények: A Scatter nyeremények az összes tét szorzatai. A Scatter szimbólummal elért nyeremények a vonal nyereményekhez adódnak.";
    this.vri = "BÓNUSZ SÚGÓ";
    this.nuf = "SZIMBÓLUM SÚGÓ";
    this.qab = "NYERŐVONAL SÚGÓ";
    this.ila = "WINWAY HELP";
    this.pcr = "További 15 SZABADJÁTÉKOT nyert!";
    this.mqd = "Játssza a szabad játék bónuszt ameddig van szabad pörgetése. Ez idő alatt újabb szabad játékokat nyerhet.";
    this.civ = "FELTETT ÖSSZEG";
    this.yrz = "PIROS/FEKETE NYEREMÉNY";
    this.jnz = "SZÍN NYEREMÉNY";
    this.fpw = "15 SZABAD JÁTÉKOT nyerhet ha 3, 4 vagy 5 CSILLAG szimbólum jelenik meg bármely helyen. Minden SZABAD JÁTÉKBAN elért nyeremény háromszorosan fizet.";
    this.sbn = "Több szerencsét máskor!";
    this.byh = "Tétek lezárva!";
    this.ker = "Kérem tegyék meg tétjeiket!";
    this.xao = "A játék elkezdődött, kérem várjon!";
    this.mvu = "Sok szerencsét!";
    this.hur = "VÁLASSZA KI A MEGFELELŐ KÁRTYASZÍNT, HOGY MEGNÉGYSZEREZZE A NYEREMÉNYT";
    this.ibz = "Tétek elfogadva!";
    this.qmp = "Nem lehet tétet rakni!";
    this.ify = "Játék folyamatban, kérem várjon!";
    this.pvy = "A NYEREMÉNY AKÁR";
    this.qtl = "JÁTÉK TÖRTÉNET";
    this.hec = "BÓNUSZ VÉGE";
    this.oyv = "Bónusz szorzó";
    this.tia = "Freespins";
    this.kxm = "FREESPINS PLAYED";
    this.trq = "FREESPIN WIN";
    this.qlm = "GRATULÁLUNK!";
    this.nns = "Congratulation, you get";
    this.xup = "You have";
    this.wli = "freespins remaining!"
}
nst.prototype = new lhu;

function buv() {
    this.tss = "LINII";
    this.bmr = "LINIE";
    this.aww = "MIZĂ / LINIE";
    this.vwv = "CĂI";
    this.gkk = "CALE";
    this.crd = "BONUSSPIN RĂMAŞI";
    this.fsz = "TOTAL BONUSSPIN";
    this.tqj = "BONUSSPIN JUCAŢI";
    this.iax = "BONUSSPIN RĂMAŞI";
    this.egt = "FELICITĂRI PENTRU CÂŞTIG!";
    this.jyx = "CÂŞTIG BONUS";
    this.msu = "SCATTER";
    this.xtd = "SCATTERED:";
    this.mlt = "SIMBOLURI";
    this.lzi = "SIMBOL";
    this.jso = "Aţi câştigat BONUSSPIN suplimentari!";
    this.hyb = "Câştigurile sunt evaluate numai de la stânga la dreapta!";
    this.zje = "CÂŞTIG BONUS START:";
    this.lin = "BONUSSPIN";
    this.vpi = "BONUSSPIN sunt jucate cu aceeaşi miză şi număr de linii ca jocul iniţial.";
    this.ykm = "Câştiguri linie: Numai câştigul linie maxim pe linie jucată contează. Câştiguri linie sunt un multiplu al mizei liniei. Câştigurile linie ale diferitelor linii sunt adunate.";
    this.wfc = "Câştiguri Scatter: Câştigurile Scatter sunt un multiplu al mizei totale. Câştigurile din simbolurile Scatter sunt adăugate la câştigurile linie.";
    this.vri = "AJUTOR BONUS";
    this.nuf = "AJUTOR SIMBOL";
    this.qab = "AJUTOR LINII DE CÂŞTIG";
    this.ila = "WINWAY HELP";
    this.pcr = "Aţi câştigat 15 BONUSSPIN suplimentari!";
    this.mqd = "Bonusul este terminat când au fost jucaţi toţi BONUSSPIN. BONUSSPIN suplimentari pot fi câştigaţi la bonus.";
    this.civ = "RISC";
    this.yrz = "ŞANSA ROŞU/NEGRU";
    this.jnz = "SIMBOLUL ŞANSĂ";
    this.fpw = "15 BONUSSPIN sunt câştigaţi prin 3, 4 sau 5 simboluri STEA pe fiecare poziţie! Toţi BONUSSPIN câştiguri x 3.";
    this.sbn = "Mai mult noroc data viitoare!";
    this.byh = "Jocul începe imediat!";
    this.ker = "Rugăm mizele dv.!";
    this.xao = "Nu alte mize!";
    this.mvu = "Mult noroc!";
    this.hur = "SELECTEAZĂ CULOAREA CORECTĂ A CĂRŢII PENTRU A CÂŞTIGA DE 4 ORI";
    this.ibz = "Pariuri acceptate!";
    this.qmp = "Pariuri neacceptate!";
    this.ify = "Joc în derulare, vă rugăm așteptați!";
    this.pvy = "CÂŞTIGURI PÂNĂ LA";
    this.qtl = "ISTORIC CÂŞTIG";
    this.hec = "BONUS FINAL";
    this.oyv = "Bonus multiplicator";
    this.tia = "Freespins";
    this.kxm = "FREESPINS PLAYED";
    this.trq = "FREESPIN WIN";
    this.qlm = "FELICITĂRI!";
    this.nns = "Congratulation, you get";
    this.xup = "You have";
    this.wli = "freespins remaining!"
}
buv.prototype = new wyr;

function jtt() {
    this.tss = "LINHAS";
    this.bmr = "LINHA";
    this.aww = "APOSTA / LINHA";
    this.vwv = "FORMAS";
    this.gkk = "FORMA";
    this.crd = "BONUSSPINS RESTANTES";
    this.fsz = "TOTAL DE BONUSSPINS";
    this.tqj = "BONUSSPINS JOGADOS";
    this.iax = "BONUSSPINS RESTANTES";
    this.egt = "PARABÉNS, GANHOU!";
    this.jyx = "PRÉMIO BONUS";
    this.msu = "SCATTER";
    this.xtd = "SCATTERED:";
    this.mlt = "SÍMBOLOS";
    this.lzi = "SÍMBOLO";
    this.jso = "Ganhou BONUSSPINS adicionais!";
    this.hyb = "Prémios só são pagos da esquerda para a direita!";
    this.zje = "PRÉMIO ENTRADA BONUS:";
    this.lin = "BONUSSPINS";
    this.vpi = "Os BONUSSPINS são jogados com a mesma aposta e n° de linhas que o jogo inicial.";
    this.ykm = "Prémios de linha: Só conta o mais alto prémio de linha de cada linha jogada. Prémios de linha são um múltiplo da aposta de linha. Prémios de linha de diversas linhas são adicionados.";
    this.wfc = "Prémios Scatter: Prémios Scatter são múltiplos da aposta total. Prémios de símbolos Scatter são adicionados aos prémios de linha.";
    this.vri = "AJUDA BONUS";
    this.nuf = "AJUDA SÍMBOLO";
    this.qab = "AJUDA DE LINHAS VENCEDORAS";
    this.ila = "WINWAY HELP";
    this.pcr = "Ganhou 15 BONUSSPINS adicionais!";
    this.mqd = "Jogar Bonus até não restarem mais BONUSSPINS. BONUSSPINS adicionais podem ser ganhos em Bonus.";
    this.civ = "RISCO";
    this.yrz = "VERMELHO/PRETO CHANCE DE GANHAR";
    this.jnz = "CHANCE DO NAIPE";
    this.fpw = "15 BONUSSPINS são ganhos com 3, 4 ou 5 símbolos de estrelas em qualquer posição! Todos ganhos BONUSSPIN são multiplicados por 3.";
    this.byh = "O jogo começa em breve!";
    this.ker = "Suas apostas por favor!";
    this.xao = "Nenhuma aposta mais!";
    this.epj = "Boa sorte!";
    this.hur = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.ibz = "Apostas aceitas!";
    this.qmp = "Apostas não aceitas!";
    this.ify = "Jogo em andamento, aguarde por favor!";
    this.pvy = "GANHOS ATÉ";
    this.qtl = "HISTÓRICO DO GANHO";
    this.hec = "FIM BONUS";
    this.oyv = "Multiplicador do bonus";
    this.sbn = "Mais sorte da próxima vez!";
    this.tia = "Freespins";
    this.kxm = "FREESPINS PLAYED";
    this.trq = "FREESPIN WIN";
    this.qlm = "PARABÉNS!";
    this.nns = "Congratulation, you get";
    this.xup = "You have";
    this.wli = "freespins remaining!"
}
jtt.prototype = new dtc;

function fhc() {
    this.sel = "After each winning combination, the combination of symbols in the form of which is noticed and started an outline respin. The number of congruent symbols after respin give a multiplier for the win.";
    this.sfv = "WINNING MULTIPLIER IS NUMBER OF MATCHING SYMBOLS!";
    this.yvq = "SCATTER symbol pays on any position."
}
fhc.prototype = new uwg;

function dcr() {
    this.sel = "Респин для любого выигрыша. Множитель выигрыша соответствует количеству совпадающих символов.";
    this.sfv = "МНОЖИТЕЛЬ ВЫИГРЫША СООТВЕТСТВУЕТ КОЛИЧЕСТВУ СОВПАДАЮЩИХ СИМВОЛОВ.";
    this.yvq = "Символы SCATTER выигрывают в любой позиции."
}
dcr.prototype = new frc;

function eov() {
    this.sel = "Después de cada combinación ganadora, se fijará la combinación de símbolos y se iniciará un giro. El número de símbolos que conjunten tras el giro, da un multiplicador para el premio.";
    this.sfv = "EL MULTIPLICADOR DE PREMIOS ES EL NÚMERO DE SÍMBOLOS QUE COMBINEN.";
    this.yvq = "Combinación ganadora de símbolos SCATTER paga en cualquier posición."
}
eov.prototype = new pxb;

function utm() {
    this.sel = "Nach jeder Gewinnkombination wird die Symbolkombination in Form derer Umrisse gemerkt und ein Respin gestartet. Die Anzahl der deckungsgleichen Symbole nach dem Respin ergeben einen Multiplikator für den Gewinn.";
    this.sfv = "GEWINN MULTIPLIKATOR ENTSPRICHT DER ANZAHL DER ÜBEREINSTIMMENDEN SYMBOLE!";
    this.yvq = "SCATTER Symbole gewinnen auf jeder Position."
}
utm.prototype = new eht;

function ouu() {
    this.sel = "Her kazanç kombinasyonundan sonra sembol kombinasyonunun konturları hafızaya alınır ve bir Respin başlatılır. Respin sonrası birbirine uyumlu sembollerin sayısına göre kazanç kat sayısı belirlenir.";
    this.sfv = "KAZANÇ KAT SAYıSı BIRBIRINE UYUMLU OLAN SEMBOLLERIN SAYıSıNA EŞITTIR!";
    this.yvq = "SCATTER sembolleri her pozisyonda kazanır."
}
ouu.prototype = new xbf;

function vdp() {
    this.sel = "Po každé kombinaci výhry se zapamatuje kombinace symbolů ve formě jejich obrysů a spustí sa Respin. Počet symbolů, které se po Respinu budou překrývat dává násobitele výhry.";
    this.sfv = "NÁSOBITEL VÝHRY ODPOVÍDÁ POČTU SHODNÝCH SYMBOLŮ!";
    this.yvq = "SCATTER symbol vyhrává v libovolné pozici."
}
vdp.prototype = new ydt;

function roy() {
    this.sel = "Peale igat võidu kombinatsiooni, kuvatakse tähistatud sümbolite kombinatsioon ja alustatakse korduvkeerutust. Samasuguste sümbolite arv peale korduvkeerutust annavad võidu kordaja.";
    this.sfv = "KORDUVATE SÜMBOLITE ARV ON VÕIDU KORRUTAJA!";
    this.yvq = "SCATTER sümbol maksab igas positsioonis."
}
roy.prototype = new nvs;

function amq() {
    this.sel = "Μετά από κάθε νικηφόρο συνδυασμό, ο συνδυασμός των συμβόλων αποθηκεύεται με τη μορφή περιγράμματος, ενώ εκκινείται ένας επαναληπτικός γύρος. Ο αριθμός των ταιριαστών συμβόλων, μετά τον επαναληπτικό γύρο, προσδιορίζει τον πολλαπλασιαστή του κέρδους.";
    this.sfv = "Ο ΠΟΛΛΑΠΛΑΣΙΑΣΤΉς ΚΕΡΔΏΝ ΑΝΤΙΣΤΟΙΧΕΊ ΣΤΟΝ ΑΡΙΘΜΌ ΤΩΝ ΤΑΙΡΙΑΣΤΏΝ ΣΥΜΒΌΛΩΝ!";
    this.yvq = "Τα SCATTER σύμβολα κερδίζουν σε κάθε θέση."
}
amq.prototype = new yzf;

function yey() {
    this.sel = "След всяка печеливша комбинация, комбинацията от символи се реализира под формата на очертания и започва повторно завъртаме. Броят на еднаквите символи от повторното завъртане дава множител за печалбата.";
    this.sfv = "ПЕЧЕЛИВШИЯТ МНОЖИТЕЛ Е БРОЯТ НА СЪВПАДАЩИТЕ СИМВОЛИ!";
    this.yvq = "Символът SCATTER се изплаща на всяка позиция."
}
yey.prototype = new ccg;

function frb() {
    this.sel = "ყოველი გამარჯვებული კომბინაციის შემდეგ, სიმბოლოთა კომბინაცია ინახება მონახაზის სახით და იწყება განმეორებითი ტრიალი. შესაბამისი სიმბოლოს რაოდენობა განმეორებითი დატრიალების შემდეგ იძლევა გამარჯვების მულტიპლიკატორს.";
    this.sfv = "გამარჯვების მულტიპლიკატორი წარმოადგენს შესატყვისი სიმბოლოების რაოდენობას!";
    this.yvq = "SCATTER სიმბოლო მოგებას ანაზღაურებს ნებისმიერ პოზიციაზე."
}
frb.prototype = new zwj;

function ogs() {
    this.sel = "Minden nyeremény után a szimbólumok körvonalai a táblán maradnak, és elindul egy újabb pörgetés. Az újrapörgetés után a körvonalakkal egybevágó szimbólumok száma adja meg a nyeremény szorzóját.";
    this.sfv = "A WILD MINDEN SZOMSZÉDOS SZIMBÓLUMA WILD-DÁ VÁLTOZIK.";
    this.yvq = "A SCATTER szimbólum minden helyen fizet."
}
ogs.prototype = new nst;

function jhh() {
    this.sel = "După fiecare combinaţie câştig, combinaţia simbolurilor este memorizată sub forma conturului lor şi este pornit un respin. Din numărul simbolurilor identice după respin rezultă un multiplicator pentru câştig.";
    this.sfv = "MULTIPLICATORUL CÂŞTIG CORESPUNDE NUMĂRULUI SIMBOLURILOR CONCORDANTE!";
    this.yvq = "Simbolurile SCATTER câştigă pe fiecare poziţie."
}
jhh.prototype = new buv;

function alx() {
    this.sel = "Após cada combinação vencedora, a combinação de símbolos é memorizada em sua delineação e é iniciado um respin. O número de símbolos congruentes após o respin resulta num multiplicador para o ganho.";
    this.sfv = "O MULTIPLICADOR DO GANHO CORRESPONDE AO NÚMERO DOS SÍMBOLOS QUE COMBINAM!";
    this.yvq = "Símbolos SCATTER ganham em cada posição."
}
alx.prototype = new jtt;

function mqf() {
    this.izh = {
        backgroundColor: "rgb(0, 0, 0)"
    };
    this.cdg = {
        backgroundColor: "rgb(0,0,0)",
        ukl: "rgba(0,0,0,0.3)"
    };
    this.vwh = {
        font: "arial",
        rxk: "bold",
        backgroundColor: "black",
        cep: "rgb(0,100,10)",
        ncv: "rgb(80,255,100)",
        vhw: "rgb(120,120,120)",
        urv: "red",
        leq: "white",
        ono: null
    };
    this.klc = {
        font: "arial",
        rxk: "bold",
        backgroundColor: "rgb(0,0,0)",
        gia: null,
        riz: "rgb(255,255,255)",
        fnk: "rgb(30,30,30)",
        fsc: "rgb(80,80,80)"
    };
    this.rkt = {
        font: "arial",
        rxk: "bold",
        backgroundColor: "black",
        gey: "rgb(50,50,50)",
        lpa: "rgb(255,255,255)",
        riz: "white",
        euq: 0.8,
        smu: {
            grh: {
                font: "sanf-serif",
                rxk: "",
                textAlign: "center",
                uqy: "round",
                backgroundColor: "black",
                riz: "white",
                fsc: null,
                fnk: null,
                xvt: 1
            }
        }
    };
    this.koc = {
        font: "arial",
        rxk: "bold",
        backgroundColor: "rgb(20,20,30)",
        fsc: "rgb(0,0,0)",
        zeo: "rgba(255,255,255,0.2)",
        riz: "rgb(255,255,255)",
        hoy: "rgba(0,0,0,0.3)",
        display: {
            guo: "arial",
            lkw: "arial",
            rxk: "bold",
            riz: "rgb(255,255,255)",
            nze: "rgb(255,255,255)",
            backgroundColor: "rgba(0,0,0,0.2)",
            fsc: "rgba(255,255,255,0.5)"
        },
        grh: {
            font: "arial",
            rxk: "bold",
            riz: "rgb(0,0,0)",
            stu: "rgb(150,150,150)",
            backgroundColor: "rgba(255,255,255,0.8)",
            gia: "rgba(255,255,255,1)",
            cgj: "rgba(255,255,255,0.8)",
            czm: "rgba(255,255,255,1)",
            fsc: "rgba(200,200,200,0.5)",
            uqy: "rect",
            mku: -1
        }
    };
    this.qjx = {
        font: "arial",
        rxk: "bold",
        zkn: "rgb(0,0,200)",
        exk: "rgb(255,255,255)",
        gbd: "rgb(0,0,150)",
        backgroundColor: "rgb(220,240,255)",
        soi: "rgb(180,220,255)",
        gsn: "rgb(10,20,25)",
        wbj: "rgb(130,220,255)",
        glm: "rgb(130,190,255)",
        riz: "rgb(255,255,255)",
        tms: "rgb(130,190,255)",
        bzi: "rgb(100,160,255)",
        sma: "rgb(255,255,255)",
        grh: {
            uqy: "rect",
            font: "arial",
            rxk: "bold",
            riz: "rgb(255,255,255)",
            adp: null,
            backgroundColor: "rgb(90,160,255)",
            rhc: "rgb(90,160,255)",
            fsc: "rgb(60,120,200)",
            fnk: "rgb(40,80,140)"
        },
        uce: {
            uqy: "round",
            font: "arial",
            rxk: "bold",
            riz: "rgb(255,255,255)",
            adp: null,
            backgroundColor: "rgba(0,0,100,0.5)",
            rhc: "rgba(150,150,255,0.5)",
            fsc: "rgb(90,170,255)",
            fnk: "rgb(40,80,140)"
        }
    };
    this.ptk = {
        font: "arial",
        rxk: "bold",
        backgroundColor: "rgb(30,30,30)",
        gia: "rgb(0,0,0)",
        fsc: "rgb(50,50,50)",
        nze: "rgb(0,255,255)",
        riz: "rgb(240,240,240)",
        eag: ["rgb(255,0,0)", "rgb(255,200,0)", "rgb(0,255,200)"],
        grh: {
            font: "arial",
            rxk: "bold",
            backgroundColor: "rgb(60,60,60)",
            gia: "rgb(40,40,40)",
            cgj: "rgb(20,20,20)",
            czm: "rgb(0,0,0)",
            fsc: "rgb(80,80,80)",
            riz: "rgb(240,240,240)",
            stu: "rgb(140,140,140)",
            uqy: "rect",
            mku: -1
        }
    };
    this.bna = {
        type: "left",
        font: "arial",
        rxk: "bold",
        backgroundColor: "rgba(0,0,0,0.7)",
        gia: null,
        fsc: "rgb(0,0,0)",
        fnk: "rgb(180,180,180)",
        soi: "rgba(0,0,0,0.6)",
        sgg: null,
        nze: "rgb(255,200,0)",
        riz: "white",
        kmt: {
            font: "arial",
            rxk: "bold",
            backgroundColor: "rgb(100,100,100)",
            gia: "rgb(100,100,100)",
            cgj: null,
            czm: null,
            fsc: "rgb(100,100,100)",
            riz: "rgb(255,255,255)",
            stu: "rgb(255,200,0)",
            uqy: "triangle",
            mku: 1
        },
        jjk: {
            font: "arial",
            rxk: "bold",
            backgroundColor: "rgb(100,100,100)",
            gia: "rgb(100,100,100)",
            cgj: null,
            czm: null,
            fsc: "rgb(100,100,100)",
            riz: "rgb(255,255,255)",
            stu: "rgb(255,200,0)",
            uqy: "triangle",
            mku: 0
        },
        teg: {
            font: "arial",
            rxk: "bold",
            backgroundColor: "rgb(100,100,100)",
            gia: "rgb(15,15,15)",
            cgj: "rgb(100,100,100)",
            czm: "rgb(15,15,15)",
            fsc: "rgb(150,150,150)",
            riz: "rgb(255,255,255)",
            stu: "rgb(255,200,0)",
            uqy: "rect",
            mku: -1
        },
        display: {
            lkw: "sans-serif",
            guo: "sans-serif",
            rxk: "bold",
            nze: null,
            riz: "yellow",
            fsc: "rgb(100,100,100)",
            fnk: null,
            backgroundColor: "black"
        },
        bkk: {
            font: "arial",
            rxk: "bold",
            backgroundColor: null,
            gia: null,
            riz: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.dmx = {
        font: "arial",
        rxk: "bold",
        backgroundColor: "rgb(180,180,180)",
        gia: "rgb(120,120,120)",
        fsc: "rgb(80,80,80)",
        fnk: "rgb(30,30,30)",
        riz: "white",
        yiz: {
            font: "arial",
            rxk: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            gia: null,
            cgj: "rgba(100,100,100,0.5)",
            czm: null,
            fsc: null,
            riz: "white",
            uqy: "rect",
            mku: -1
        },
        kmt: {
            font: "arial",
            rxk: "bold",
            backgroundColor: "rgb(255,255,255)",
            gia: "rgb(255,255,255)",
            cgj: null,
            czm: null,
            fsc: "rgb(255,255,255)",
            riz: "rgb(0,0,0)",
            stu: "rgb(0,0,0)",
            uqy: "triangle",
            mku: 1
        },
        jjk: {
            font: "arial",
            rxk: "bold",
            backgroundColor: "rgb(255,255,255)",
            gia: "rgb(255,255,255)",
            cgj: null,
            czm: null,
            fsc: "rgb(255,255,255)",
            riz: "rgb(0,0,0)",
            stu: "rgb(0,0,0)",
            uqy: "triangle",
            mku: 0
        },
        rtn: {
            uqy: "rect",
            font: "arial",
            rxk: "bold",
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,0.1)",
            riz: "white",
            xvt: 1,
            fsc: "rgb(255,255,255)",
            fnk: "rgb(220,220,220)"
        },
        display: {
            lkw: "sans-serif",
            guo: "sans-serif",
            rxk: "bold",
            nze: null,
            riz: "white",
            fsc: "white",
            fnk: null,
            backgroundColor: "rgb(0,0,0)"
        },
        bkk: {
            font: "arial",
            rxk: "bold",
            backgroundColor: null,
            gia: null,
            riz: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.idd = {
        jdg: [{
            lkw: "sans-serif",
            ayk: "sans-serif",
            rxk: "bold",
            nze: "rgb(236,225,207)",
            qta: "rgb(214,170,102)",
            adp: "rgb(245,220,148)",
            bdp: "rgb(190,137,40)",
            jjj: "rgba(150,120,30,0.3)",
            fsc: "rgb(150,110,30)",
            fnk: "rgb(200,170,50)",
            backgroundColor: "rgb(100,70,30)",
            gia: "rgb(0,0,0)",
            qow: "rgb(0,0,0)"
        }, {
            lkw: "sans-serif",
            ayk: "sans-serif",
            rxk: "bold",
            nze: "rgb(230,230,230)",
            qta: "rgb(190,190,190)",
            adp: "rgb(240,240,240)",
            bdp: "rgb(160,160,160)",
            jjj: "rgba(120,120,120,0.3)",
            fsc: "rgb(120,120,120)",
            fnk: "rgb(170,170,170)",
            backgroundColor: "rgb(100,100,100)",
            gia: "rgb(0,0,0)",
            qow: "rgb(0,0,0)"
        }],
        nib: {
            lkw: "sans-serif",
            ayk: "sans-serif",
            rxk: "bold",
            nze: "rgb(236,225,207)",
            qta: "rgb(214,170,102)",
            adp: "rgb(245,220,148)",
            bdp: "rgb(190,137,40)",
            jjj: null,
            fsc: null,
            fnk: null,
            backgroundColor: null,
            gia: null,
            qow: null
        }
    };
    this.fvv = {
        bnf: "rgb(240,240,240)",
        atl: "rgb(255,255,255)",
        fsc: "rgb(200,200,200)",
        hoy: "rgba(0,80,150,0.6)",
        display: {
            guo: "arial",
            lkw: "arial",
            rxk: "bold",
            riz: "rgb(0,80,151)",
            nze: "rgb(0,30,80)",
            backgroundColor: "rgb(255,255,255)",
            fsc: "rgb(200,200,200)"
        }
    }
}

function xox() {
    this.cdg.dxd = false;
    this.cdg.fzp = false;
    this.qus = {
        display: {
            guo: "sans-serif",
            lkw: "sans-serif",
            rxk: "bold",
            backgroundColor: "black",
            riz: "rgb(255,255,50)",
            nze: "rgb(255,255,50)",
            fsc: "rgb(255,255,255)",
            fnk: "rgb(160,160,160)"
        },
        hek: {
            guo: "arial",
            lkw: "arial",
            rxk: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            riz: "white",
            nze: "white",
            fsc: null,
            fnk: null
        },
        fmf: {
            font: "arial",
            rxk: "bold",
            backgroundColor: "rgba(0,0,0,0.7)",
            gia: "rgba(0,0,0,0.7)",
            cgj: null,
            czm: null,
            fsc: "rgb(255,255,255)",
            riz: "rgb(255,255,255)",
            stu: "rgb(255,255,255)",
            uqy: "triangle",
            mku: 3
        },
        exm: {
            font: "sans-serif",
            rxk: "bold",
            riz: "rgb(255,255,50)",
            backgroundColor: "black",
            fsc: null,
            fnk: null
        },
        smu: {
            backgroundColor: null,
            gia: null,
            soi: "rgb(0,0,0)",
            gsn: "rgb(0,0,0)",
            gmz: null,
            ddw: 0.5,
            grh: {
                uqy: "rect",
                font: "verdana",
                rxk: "bold",
                backgroundColor: "rgb(0,0,0)",
                rhc: "rgb(150,150,150)",
                riz: "rgb(255,255,255)",
                adp: "rgb(255,255,0)",
                fsc: "rgb(150,150,150)",
                fnk: "rgb(0,0,0)"
            },
            soz: {
                uqy: "round",
                font: "verdana",
                rxk: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                rhc: "rgba(150,150,150,0.5)",
                riz: "rgb(255,255,255)",
                adp: "rgb(255,255,255)",
                fsc: "rgb(200,200,200)",
                fnk: "rgb(100,100,100)"
            },
            mlc: {
                uqy: "round",
                font: "verdana",
                rxk: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                rhc: "rgba(150,150,150,0.5)",
                riz: "rgb(255,255,255)",
                adp: "rgb(255,255,255)",
                fsc: "rgb(200,200,200)",
                fnk: "rgb(100,100,100)"
            },
            uso: {
                font: "verdana",
                rxk: "bold",
                backgroundColor: "rgb(75, 5, 5)",
                fsc: null,
                riz: "rgb(255, 255, 50)"
            },
            qio: {
                font: "helvetica",
                rxk: "bold",
                backgroundColor: null,
                fsc: null,
                riz: "rgb(240, 231, 203)"
            }
        }
    };
    this.fzw = {
        backgroundColor: null,
        soi: "rgb(0,0,0)",
        gsn: "rgb(0,0,0)",
        display: {
            guo: "sans-serif",
            lkw: "sans-serif",
            rxk: "bold",
            backgroundColor: "black",
            riz: "yellow",
            nze: "yellow",
            fsc: "rgb(255,255,255)",
            fnk: "rgb(160,160,160)"
        },
        hek: {
            guo: "arial",
            lkw: "arial",
            rxk: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            riz: "white",
            nze: "white",
            fsc: null,
            fnk: null
        },
        yql: {
            guo: "verdana",
            lkw: "verdana",
            rxk: "bold",
            nze: "white",
            riz: "yellow"
        },
        grh: {
            uqy: "rect",
            font: "verdana",
            rxk: "bold",
            backgroundColor: "rgb(0,0,0)",
            rhc: "rgb(150,150,150)",
            riz: "rgb(255,255,255)",
            fsc: "rgb(150,150,150)",
            fnk: "rgb(0,0,0)"
        },
        soz: {
            uqy: "round",
            font: "verdana",
            rxk: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            rhc: "rgba(150,150,150,0.5)",
            riz: "rgb(255,255,255)",
            adp: "rgb(255,255,0)",
            fsc: "rgb(200,200,200)",
            fnk: "rgb(100,100,100)"
        },
        mlc: {
            uqy: "round",
            font: "verdana",
            rxk: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            rhc: "rgba(150,150,150,0.5)",
            riz: "rgb(255,255,255)",
            adp: "rgb(255,255,0)",
            fsc: "rgb(200,200,200)",
            fnk: "rgb(100,100,100)"
        },
        uso: {
            font: "verdana",
            rxk: "bold",
            backgroundColor: "rgb(75, 5, 5)",
            riz: "rgb(255, 255, 0)"
        }
    };
    this.yyz = {
        backgroundColor: null,
        soi: "rgb(0,0,0)",
        gsn: "rgb(0,0,0)",
        grh: {
            uqy: "rect",
            font: "verdana",
            rxk: "bold",
            backgroundColor: "rgb(0,0,0)",
            rhc: "rgb(150,150,150)",
            riz: "rgb(255,255,255)",
            fsc: "rgb(150,150,150)",
            fnk: "rgb(0,0,0)"
        },
        soz: {
            uqy: "round",
            font: "verdana",
            rxk: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            rhc: "rgba(150,150,150,0.5)",
            riz: "rgb(255,255,255)",
            adp: "rgb(255,255,0)",
            fsc: "rgb(200,200,200)",
            fnk: "rgb(100,100,100)"
        },
        mlc: {
            uqy: "round",
            font: "verdana",
            rxk: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            rhc: "rgba(150,150,150,0.5)",
            riz: "rgb(255,255,255)",
            adp: "rgb(255,255,0)",
            fsc: "rgb(200,200,200)",
            fnk: "rgb(100,100,100)"
        }
    };
    this.kql = {
        euq: 0,
        gmz: "rgba(0,0,0,0)",
        eer: "rgba(0,0,0,0.5)"
    };
    this.ayn = {
        sui: "rgb(255,0,0)",
        lpa: "rgb(255,255,0)",
        tpn: "white",
        aqz: null,
        omt: 0,
        sgi: 0.05,
        tic: [{
            irh: "rgb(180,180,30)",
            qfo: "rgb(255,220,0)",
            qvh: "rgb(180,180,30)",
            xlt: "rgb(255,255,0)"
        }, {
            irh: "rgb(210,110,0)",
            qfo: "rgb(255,168,0)",
            qvh: "rgb(210,110,0)",
            xlt: "rgb(255,210,50)"
        }, {
            irh: "rgb(0,50,180)",
            qfo: "rgb(0,68,220)",
            qvh: "rgb(0,50,180)",
            xlt: "rgb(0,100,255)"
        }, {
            irh: "rgb(0,160,64)",
            qfo: "rgb(0,200,80)",
            qvh: "rgb(0,160,64)",
            xlt: "rgb(0,255,70)"
        }, {
            irh: "rgb(140,30,140)",
            qfo: "rgb(200,0,200)",
            qvh: "rgb(140,30,140)",
            xlt: "rgb(255,30,255)"
        }, {
            irh: "rgb(180,180,30)",
            qfo: "rgb(255,220,0)",
            qvh: "rgb(180,180,30)",
            xlt: "rgb(255,255,0)"
        }, {
            irh: "rgba(200,200,50,0.7)",
            qfo: "rgba(255,255,150,0.7)",
            qvh: "rgba(200,200,50,0.7)",
            xlt: "rgba(255,255,150,0.7)"
        }]
    };
    this.soa = {
        font: "sans-serif",
        rxk: "bold",
        aet: "red",
        dul: "orange",
        gey: "white"
    };
    this.bpv = {
        font: "sans-serif",
        rxk: "bold",
        aet: "red",
        dul: "orange",
        gey: "white"
    };
    this.fvj = {
        font: "sans-serif",
        rxk: "bold",
        riz: "rgb(255,255,255)",
        backgroundColor: "rgb(0,0,0)",
        ffs: "rgb(0,0,0)",
        gao: "rgb(255,0,0)",
        vph: "rgb(255,255,0)",
        aka: "rgb(80,80,80)",
        jnf: "rgb(15,15,15)",
        oyb: "rgb(0,0,0)",
        mtk: "rgb(180,180,180)",
        dxa: "rgb(0,0,0)",
        fub: 0.7
    }
}
xox.prototype = new mqf;

function mds() {
    this.cdg.fzp = true;
    this.qus.exm.backgroundColor = "rgb(75, 5, 5)";
    this.qus.exm.fsc = "rgb(100,10,10)";
    this.qus.smu.uso.fsc = "rgb(100,10,10)";
    this.qus.smu.grh.backgroundColor = "rgb(170,0,10)";
    this.qus.smu.grh.rhc = "rgb(255,0,0)";
    this.qus.smu.grh.fsc = "rgb(190,0,10)";
    this.qus.smu.grh.fnk = "rgb(50,0,0)";
    this.qus.smu.soz.backgroundColor = "rgba(0,0,0,0.4)";
    this.qus.smu.soz.rhc = "rgba(255,50,30,0.8)";
    this.qus.smu.soz.fsc = "rgb(255,100,80)";
    this.qus.smu.soz.fnk = "rgb(150,30,20)";
    this.qus.smu.mlc.backgroundColor = "rgba(0,0,0,0.4)";
    this.qus.smu.mlc.rhc = "rgba(255,50,30,0.8)";
    this.qus.smu.mlc.fsc = "rgb(255,100,80)";
    this.qus.smu.mlc.fnk = "rgb(150,30,20)";
    this.fzw.grh.backgroundColor = "rgb(170,0,10)";
    this.fzw.grh.fsc = "rgb(190,0,10)";
    this.fzw.grh.fnk = "rgb(50,0,0)";
    this.fzw.soz.backgroundColor = "rgba(0,0,0,0.4)";
    this.fzw.soz.fsc = "rgb(255,100,80)";
    this.fzw.soz.fnk = "rgb(150,30,20)";
    this.fzw.mlc.backgroundColor = "rgba(0,0,0,0.4)";
    this.fzw.mlc.fsc = "rgb(255,100,80)";
    this.fzw.mlc.fnk = "rgb(150,30,20)";
    this.yyz.grh.backgroundColor = "rgb(170,0,10)";
    this.yyz.grh.fsc = "rgb(190,0,10)";
    this.yyz.grh.fnk = "rgb(50,0,0)";
    this.yyz.soz.backgroundColor = "rgba(0,0,0,0.4)";
    this.yyz.soz.fsc = "rgb(255,100,80)";
    this.yyz.soz.fnk = "rgb(150,30,20)";
    this.yyz.mlc.backgroundColor = "rgba(0,0,0,0.4)";
    this.yyz.mlc.fsc = "rgb(255,100,80)";
    this.yyz.mlc.fnk = "rgb(150,30,20)";
    this.yyz.dus = {
        font: "sans-serif",
        rxk: "bold",
        riz: "yellow",
        lkw: "verdana"
    };
    this.yyz.top = {
        font: "arial",
        rxk: "bold",
        riz: "yellow",
        yvv: "arial",
        elh: "yellow",
        yxd: "white",
        lkw: "verdana"
    };
    this.yyz.chk = {
        font: "sans-serif",
        rxk: "bold",
        riz: "yellow",
        dqx: "verdana",
        inx: "verdana",
        sby: "bold",
        rrv: "white"
    };
    this.rkt.smu.grh.backgroundColor = "rgb(170,0,10)";
    this.dso = {
        mhi: "black"
    };
    this.ayn = {
        sui: "white",
        lpa: null,
        tpn: "rgb(255,255,0)",
        aqz: "rgb(255,0,0)",
        omt: 1,
        sgi: 0.025,
        tic: [{
            irh: "rgb(100,0,0)",
            qfo: "rgb(190,0,0)",
            qvh: "rgb(100,0,0)",
            xlt: "rgb(255,0,0)"
        }, {
            irh: "rgb(0,0,100)",
            qfo: "rgb(0,0,190)",
            qvh: "rgb(0,0,100)",
            xlt: "rgb(0,0,255)"
        }, {
            irh: "rgb(0,100,15)",
            qfo: "rgb(0,170,30)",
            qvh: "rgb(0,100,15)",
            xlt: "rgb(0,255,40)"
        }, {
            irh: "rgb(150,150,0)",
            qfo: "rgb(215,210,0)",
            qvh: "rgb(150,150,0)",
            xlt: "rgb(255,255,0)"
        }, {
            irh: "rgb(90,0,140)",
            qfo: "rgb(130,0,200)",
            qvh: "rgb(90,0,140)",
            xlt: "rgb(170,0,255)"
        }, {
            irh: "rgb(40,120,80)",
            qfo: "rgb(75,200,140)",
            qvh: "rgb(40,120,80)",
            xlt: "rgb(90,255,180)"
        }, {
            irh: "rgb(100,15,60)",
            qfo: "rgb(165,20,90)",
            qvh: "rgb(110,15,60)",
            xlt: "rgb(255,35,140)"
        }, {
            irh: "rgb(20,80,140)",
            qfo: "rgb(30,110,190)",
            qvh: "rgb(20,80,140)",
            xlt: "rgb(40,140,255)"
        }, {
            irh: "rgb(170,110,0)",
            qfo: "rgb(210,140,0)",
            qvh: "rgb(170,110,0)",
            xlt: "rgb(255,170,0)"
        }, {
            irh: "rgb(80,120,15)",
            qfo: "rgb(130,190,30)",
            qvh: "rgb(80,120,15)",
            xlt: "rgb(170,255,30)"
        }, {
            irh: "rgb(100,0,0)",
            qfo: "rgb(190,0,0)",
            qvh: "rgb(100,0,0)",
            xlt: "rgb(255,0,0)"
        }, {
            irh: "rgba(200,200,50,0.7)",
            qfo: "rgba(255,255,150,0.7)",
            qvh: "rgba(200,200,50,0.7)",
            xlt: "rgba(255,255,150,0.7)"
        }]
    };
    this.dmx.backgroundColor = "rgb(200,40,10)";
    this.dmx.gia = "rgb(120,10,0)"
}
mds.prototype = new xox;

function isk() {
    this.type = "800_600";
    this.mmr = true;
    this.vwg = false;
    this.nff = false;
    this.pmi = true;
    this.cjk = false;
    this.rnr = false;
    this.smb = false;
    this.abu = false
}

function xag() {
    this.mmr = false;
    this.canvas = {
        mom: new mfo(0, 0, 800, 620)
    };
    this.vrv = {
        mom: new mfo(),
        ibu: 0
    };
    this.cdg = {
        mom: new mfo(0, 20, 800, 600),
        ioh: 0
    };
    this.vwh = {
        cdg: {
            mom: new mfo(0, 0, 500, 360),
            icw: new mfo(0, 0, 500, 360),
            mng: new mfo(5, 325, 490, 30),
            hwt: new mfo(50, 329, 400, 14),
            gqu: new mfo(50, 345, 400, 6),
            ivz: new mfo(5, 285, 490, 70),
            eyf: 14,
            sjg: 18,
            dka: 5,
            sun: 12,
            ocl: 5,
            bud: 2,
            fro: 0,
            ayn: {
                mom: new mfo(),
                x: 0,
                oww: 0,
                spo: 0
            },
            icf: {
                icw: new mfo(),
                hwt: new mfo(),
                yup: new mfo()
            }
        },
        rlr: {
            mom: new mfo(0, 0, 800, 600),
            icw: new mfo(140, 105, 520, 390),
            mng: new mfo(),
            hwt: new mfo(192, 295, 416, 21),
            gqu: new mfo(192, 320, 416, 3),
            ivz: new mfo(140, 275, 520, 95),
            eyf: 18,
            sjg: 24,
            dka: 0,
            sun: 12,
            ocl: 7,
            bud: 3,
            fro: 9,
            ayn: {
                mom: new mfo(400, 459, 0, 3),
                x: 33,
                oww: 15,
                spo: 20
            },
            icf: {
                icw: new mfo(50, 0, 700, 450),
                hwt: new mfo(100, 460, 600, 60),
                yup: new mfo(200, 540, 400, 40)
            }
        },
        xwn: {
            mom: new mfo(0, 0, 800, 600),
            icw: new mfo(0, 0, 800, 600),
            mng: new mfo(),
            hwt: new mfo(250, 420, 300, 21),
            gqu: new mfo(),
            ivz: new mfo(50, 410, 700, 80),
            eyf: 18,
            sjg: 24,
            dka: 0,
            sun: 12,
            ocl: 7,
            bud: 0,
            fro: 0,
            ayn: {
                mom: new mfo(260, 119, 280, 280),
                x: 0,
                oww: 0,
                spo: 0
            },
            icf: {
                icw: new mfo(50, 0, 700, 450),
                hwt: new mfo(100, 460, 600, 60),
                yup: new mfo(200, 540, 400, 40)
            }
        }
    };
    this.klc = {
        mom: new mfo(0, 0, 800, 20),
        eyf: 12,
        auf: 19,
        tsp: 15,
        mga: 120,
        sun: 2,
        ocl: 2,
        yhz: 2,
        lhn: 40
    };
    this.rkt = {
        mom: new mfo(0, 20, 800, 70),
        eyf: 10,
        utd: 10,
        guw: 20,
        wps: 40,
        ioh: 4,
        sun: 10,
        ocl: 5,
        dka: 10,
        rlo: {
            eyf: 17,
            dka: 2
        }
    };
    this.qjx = {
        mom: new mfo(0, 20, 800, 600),
        zvv: new mfo(),
        rlo: {
            kgw: 20,
            npl: 0,
            sun: 0,
            qhj: 0,
            adc: 0,
            usd: 8,
            une: 8,
            ioh: 0
        },
        mck: new mfo(0, 20, 800, 40),
        bbm: new mfo(0, 100, 800, 40),
        ybs: new mfo(0, 140, 800, 40),
        uun: new mfo(0, 180, 800, 40),
        xhe: new mfo(225, 275, 350, 100),
        skx: new mfo(200, 480, 400, 40),
        kfy: {
            msb: new mfo(340, 540, 120, 55)
        },
        eqn: {
            msb: new mfo(250, 540, 120, 55),
            nti: new mfo(430, 540, 120, 55)
        },
        zsk: 36,
        eyf: 30,
        xud: 22,
        ocl: 3,
        sun: 5,
        ioh: 2,
        qpi: 3,
        vfy: 10
    };
    this.ptk = {
        mom: new mfo(200, 175, 400, 250),
        juz: 26,
        eyf: 20,
        hju: 14,
        mck: new mfo(20, 15, 360, 30),
        skx: new mfo(20, 55, 360, 105),
        mng: new mfo(20, 165, 360, 20),
        bwm: new mfo(165, 190, 70, 50),
        cuj: 5,
        ioh: 3,
        rlo: {
            eyf: 20,
            usd: 3,
            sun: 0,
            ocl: 0,
            une: 6,
            ioh: 2
        }
    };
    this.bna = {
        mom: new mfo(0, 55, 560, 430),
        ioh: 2,
        gbw: 0,
        qmw: 5,
        tkx: 10,
        juz: 26,
        hju: 20,
        mck: new mfo(30, 15, 500, 30),
        jls: new mfo(20, 50, 520, 60),
        hhm: new mfo(40, 60, 220, 40),
        xcl: new mfo(328, 60, 30, 40),
        xit: new mfo(360, 60, 120, 40),
        otc: new mfo(482, 60, 30, 40),
        rhw: new mfo(20, 120, 520, 200),
        hhr: new mfo(40, 120, 480, 40),
        jkn: new mfo(30, 160, 280, 40),
        wpk: new mfo(328, 160, 30, 40),
        ysu: new mfo(360, 160, 120, 40),
        obh: new mfo(482, 160, 30, 40),
        jyk: new mfo(30, 215, 280, 40),
        alk: new mfo(328, 215, 30, 40),
        soo: new mfo(360, 215, 120, 40),
        wzy: new mfo(482, 215, 30, 40),
        phd: new mfo(30, 270, 280, 40),
        war: new mfo(328, 270, 30, 40),
        wut: new mfo(360, 270, 120, 40),
        oph: new mfo(482, 270, 30, 40),
        mng: new mfo(30, 330, 500, 30),
        kmb: new mfo(210, 370, 140, 50),
        ugh: new mfo(),
        bkk: {
            hwt: new mfo(40, 0, 240, 40),
            kzz: new mfo(7, 12, 16, 16),
            eyf: 20,
            usd: 0,
            ioh: 2
        },
        jjk: {
            usd: 3,
            sun: -5,
            ocl: -1,
            une: 6,
            eyf: 20,
            ioh: 0
        },
        kmt: {
            usd: 3,
            sun: 5,
            ocl: 0,
            une: 6,
            eyf: 20,
            ioh: 0
        },
        teg: {
            usd: 6,
            sun: 0,
            ocl: 0,
            une: 6,
            eyf: 26,
            ioh: 2,
        },
        display: {
            juz: 16,
            kgw: 24,
            cgm: 0,
            qhj: 0,
            ioh: 2,
            xpe: 3,
            ywn: 3,
            kuh: 3,
            ujb: 3
        }
    };
    this.idd = {
        mom: [new mfo(2, 20, 130, 46), new mfo(668, 20, 130, 46)],
        display: {
            gii: new mfo(6, 16, 118, 22),
            juz: 14,
            npl: 20,
            cgm: -11,
            adc: 10,
            dka: 8,
            ioh: 3,
            dkr: 0,
            oza: 4
        },
        nib: {
            mom: new mfo(50, 130, 700, 300),
            gii: new mfo(),
            juz: 66,
            npl: 150,
            cgm: -90,
            adc: 60,
            dka: 10,
            ioh: 0,
            dkr: 0,
            oza: 0
        }
    }
}
xag.prototype = new isk;

function uhz() {
    this.vwg = true
}
uhz.prototype = new xag;

function gnx() {
    this.cjk = true;
    this.nff = true;
    this.mmr = false;
    this.vwg = true;
    this.canvas = {
        mom: new mfo(0, 0, 800, 1165)
    };
    this.vrv = {
        mom: new mfo(),
        ibu: 0
    };
    this.cdg = {
        mom: new mfo(0, 550, 800, 615),
        ioh: 10
    };
    this.vwh = {
        cdg: {
            mom: new mfo(0, 0, 500, 360),
            icw: new mfo(0, 0, 500, 360),
            mng: new mfo(5, 325, 490, 30),
            hwt: new mfo(50, 329, 400, 14),
            gqu: new mfo(50, 345, 400, 6),
            ivz: new mfo(5, 285, 490, 70),
            eyf: 14,
            sjg: 18,
            dka: 5,
            sun: 12,
            ocl: 5,
            bud: 2,
            fro: 0,
            ayn: {
                mom: new mfo(),
                x: 0,
                oww: 0,
                spo: 0
            },
            icf: {
                icw: new mfo(),
                hwt: new mfo(),
                yup: new mfo()
            }
        },
        rlr: {
            mom: new mfo(0, 0, 800, 600),
            icw: new mfo(100, 75, 600, 450),
            mng: new mfo(),
            hwt: new mfo(160, 295, 480, 24),
            gqu: new mfo(160, 325, 480, 3),
            ivz: new mfo(100, 265, 600, 115),
            eyf: 21,
            sjg: 26,
            dka: 0,
            sun: 12,
            ocl: 8,
            bud: 3,
            fro: 10,
            ayn: {
                mom: new mfo(400, 484, 0, 3),
                x: 38,
                oww: 17,
                spo: 23
            },
            icf: {
                icw: new mfo(50, 0, 700, 450),
                hwt: new mfo(100, 460, 600, 60),
                yup: new mfo(200, 540, 400, 40)
            }
        },
        xwn: {
            mom: new mfo(0, 0, 800, 600),
            icw: new mfo(0, 0, 800, 600),
            mng: new mfo(),
            hwt: new mfo(250, 420, 300, 21),
            gqu: new mfo(),
            ivz: new mfo(50, 410, 700, 80),
            eyf: 18,
            sjg: 24,
            dka: 0,
            sun: 12,
            ocl: 7,
            bud: 0,
            fro: 0,
            ayn: {
                mom: new mfo(260, 119, 280, 280),
                x: 0,
                oww: 0,
                spo: 0
            },
            icf: {
                icw: new mfo(50, 0, 700, 450),
                hwt: new mfo(100, 460, 600, 60),
                yup: new mfo(200, 540, 400, 40)
            }
        }
    };
    this.top = {
        mom: new mfo(0, 20, 800, 520)
    };
    this.klc = {
        mom: new mfo(0, 0, 800, 20),
        eyf: 12,
        auf: 19,
        tsp: 15,
        mga: 120,
        sun: 2,
        ocl: 2,
        yhz: 2,
        lhn: 60
    };
    this.rkt = {
        mom: new mfo(0, 20, 800, 70),
        eyf: 10,
        utd: 10,
        guw: 20,
        wps: 40,
        ioh: 4,
        sun: 10,
        ocl: 5,
        dka: 10,
        rlo: {
            eyf: 17,
            dka: 2
        }
    };
    this.qjx = {
        mom: new mfo(0, 550, 800, 615),
        zvv: new mfo(),
        rlo: {
            kgw: 26,
            npl: 0,
            sun: 0,
            qhj: 0,
            adc: 0,
            usd: 10,
            une: 10,
            ioh: 2
        },
        mck: new mfo(0, 20, 800, 40),
        bbm: new mfo(0, 100, 800, 40),
        ybs: new mfo(0, 140, 800, 40),
        uun: new mfo(0, 180, 800, 40),
        xhe: new mfo(225, 275, 350, 100),
        skx: new mfo(200, 480, 400, 40),
        kfy: {
            msb: new mfo(340, 540, 120, 68)
        },
        eqn: {
            msb: new mfo(250, 540, 120, 68),
            nti: new mfo(430, 540, 120, 68)
        },
        zsk: 36,
        eyf: 30,
        xud: 22,
        ocl: 3,
        sun: 5,
        ioh: 2,
        qpi: 3,
        vfy: 10,
    };
    this.ptk = {
        mom: new mfo(200, 705, 400, 250),
        juz: 26,
        eyf: 20,
        hju: 14,
        mck: new mfo(20, 15, 360, 30),
        skx: new mfo(20, 55, 360, 105),
        mng: new mfo(20, 165, 360, 20),
        bwm: new mfo(165, 190, 70, 50),
        cuj: 5,
        ioh: 3,
        rlo: {
            eyf: 20,
            usd: 3,
            sun: 0,
            ocl: 0,
            une: 6,
            ioh: 2
        }
    };
    this.bna = {
        mom: new mfo(0, 585, 560, 430),
        ioh: 2,
        gbw: 0,
        qmw: 5,
        tkx: 10,
        juz: 26,
        hju: 20,
        mck: new mfo(30, 15, 500, 30),
        jls: new mfo(20, 50, 520, 60),
        hhm: new mfo(40, 60, 220, 40),
        xcl: new mfo(328, 60, 30, 40),
        xit: new mfo(360, 60, 120, 40),
        otc: new mfo(482, 60, 30, 40),
        rhw: new mfo(20, 120, 520, 200),
        hhr: new mfo(40, 120, 480, 40),
        jkn: new mfo(30, 160, 280, 40),
        wpk: new mfo(328, 160, 30, 40),
        ysu: new mfo(360, 160, 120, 40),
        obh: new mfo(482, 160, 30, 40),
        jyk: new mfo(30, 215, 280, 40),
        alk: new mfo(328, 215, 30, 40),
        soo: new mfo(360, 215, 120, 40),
        wzy: new mfo(482, 215, 30, 40),
        phd: new mfo(30, 270, 280, 40),
        war: new mfo(328, 270, 30, 40),
        wut: new mfo(360, 270, 120, 40),
        oph: new mfo(482, 270, 30, 40),
        mng: new mfo(30, 330, 500, 30),
        kmb: new mfo(210, 370, 140, 50),
        ugh: new mfo(),
        bkk: {
            hwt: new mfo(40, 0, 240, 40),
            kzz: new mfo(7, 12, 16, 16),
            eyf: 20,
            usd: 0,
            ioh: 2
        },
        jjk: {
            usd: 3,
            sun: -5,
            ocl: -1,
            une: 6,
            eyf: 20,
            ioh: 0
        },
        kmt: {
            usd: 3,
            sun: 5,
            ocl: 0,
            une: 6,
            eyf: 20,
            ioh: 0
        },
        teg: {
            usd: 6,
            sun: 0,
            ocl: 0,
            une: 6,
            eyf: 26,
            ioh: 2,
        },
        display: {
            juz: 16,
            kgw: 24,
            cgm: 0,
            qhj: 0,
            ioh: 2,
            xpe: 3,
            ywn: 3,
            kuh: 3,
            ujb: 3
        }
    };
    this.idd = {
        mom: [new mfo(2, 550, 130, 46), new mfo(668, 550, 130, 46)],
        display: {
            gii: new mfo(6, 16, 118, 23),
            juz: 14,
            npl: 20,
            cgm: -11,
            adc: 10,
            dka: 8,
            ioh: 3,
            dkr: 0,
            oza: 4
        },
        nib: {
            mom: new mfo(50, 660, 700, 300),
            gii: new mfo(),
            juz: 66,
            npl: 150,
            cgm: -90,
            adc: 60,
            dka: 10,
            ioh: 0,
            dkr: 0,
            oza: 0
        }
    }
}
gnx.prototype = new isk;

function pgq() {
    this.mmr = false;
    this.rnr = true;
    this.pmi = false;
    this.smb = true;
    this.abu = true;
    this.canvas = {
        mom: new mfo(0, 0, 960, 600)
    };
    this.vrv = {
        mom: new mfo(),
        ibu: 0,
        yuo: 0
    };
    this.cdg = {
        mom: new mfo(160, 0, 800, 600),
        ioh: 0
    };
    this.vwh = {
        cdg: {
            mom: new mfo(0, 0, 640, 460),
            icw: new mfo(0, 0, 640, 460),
            mng: new mfo(6, 416, 628, 38),
            hwt: new mfo(64, 420, 512, 17),
            gqu: new mfo(64, 442, 512, 7),
            ivz: new mfo(6, 364, 628, 90),
            eyf: 18,
            sjg: 20,
            dka: 6,
            sun: 12,
            ocl: 6,
            bud: 3,
            fro: 0,
            ayn: {
                mom: new mfo(),
                x: 0,
                oww: 0,
                spo: 0
            },
            icf: {
                icw: new mfo(),
                hwt: new mfo(),
                yup: new mfo()
            }
        },
        rlr: {
            mom: new mfo(0, 0, 800, 600),
            icw: new mfo(100, 75, 600, 450),
            mng: new mfo(),
            hwt: new mfo(160, 295, 480, 24),
            gqu: new mfo(160, 325, 480, 3),
            ivz: new mfo(100, 265, 600, 115),
            eyf: 21,
            sjg: 26,
            dka: 0,
            sun: 12,
            ocl: 8,
            bud: 3,
            fro: 10,
            ayn: {
                mom: new mfo(400, 484, 0, 3),
                x: 38,
                oww: 17,
                spo: 23
            },
            icf: {
                icw: new mfo(50, 0, 700, 450),
                hwt: new mfo(100, 430, 600, 60),
                yup: new mfo(200, 510, 400, 40)
            }
        },
        xwn: {
            mom: new mfo(0, 0, 800, 600),
            icw: new mfo(0, 0, 800, 600),
            mng: new mfo(),
            hwt: new mfo(250, 420, 300, 21),
            gqu: new mfo(),
            ivz: new mfo(50, 410, 700, 80),
            eyf: 18,
            sjg: 24,
            dka: 0,
            sun: 12,
            ocl: 7,
            bud: 0,
            fro: 0,
            ayn: {
                mom: new mfo(260, 119, 280, 280),
                x: 0,
                oww: 0,
                spo: 0
            },
            icf: {
                icw: new mfo(50, 0, 700, 450),
                hwt: new mfo(100, 460, 600, 60),
                yup: new mfo(200, 540, 400, 40)
            }
        }
    };
    this.klc = {};
    this.rkt = {};
    this.qjx = {
        mom: new mfo(0, 0, 960, 600),
        zvv: new mfo(0, 0, 160, 600),
        rlo: {
            kgw: 0,
            npl: 0,
            sun: 0,
            qhj: 0,
            adc: 0,
            une: 8,
            usd: 16,
            ioh: 4
        },
        mck: new mfo(160, 20, 800, 40),
        bbm: new mfo(160, 100, 800, 40),
        ybs: new mfo(160, 140, 800, 40),
        uun: new mfo(160, 180, 800, 40),
        xhe: new mfo(385, 275, 350, 100),
        skx: new mfo(360, 480, 400, 40),
        kfy: {
            msb: new mfo(15, 410, 130, 130),
        },
        eqn: {
            msb: new mfo(15, 310, 130, 130),
            nti: new mfo(15, 120, 130, 130)
        },
        zsk: 36,
        eyf: 30,
        xud: 22,
        ocl: 3,
        sun: 5,
        ioh: 2,
        qpi: 3,
        vfy: 10
    };
    this.dmx = {
        mom: new mfo(0, 0, 960, 600),
        ioh: 0,
        usd: 0,
        bes: 50,
        nte: 30,
        hju: 30,
        vcd: new mfo(70, 170, 470, 70),
        tnf: new mfo(560, 170, 60, 70),
        zhm: new mfo(622, 170, 210, 70),
        oxs: new mfo(834, 170, 60, 70),
        pqr: new mfo(70, 310, 470, 70),
        sez: new mfo(560, 310, 60, 70),
        cxy: new mfo(622, 310, 210, 70),
        apq: new mfo(834, 310, 60, 70),
        yzx: new mfo(70, 450, 470, 70),
        ccq: new mfo(622, 450, 210, 70),
        rxj: new mfo(90, 530, 780, 50),
        hhm: new mfo(80, 120, 470, 60),
        xcl: new mfo(570, 120, 50, 60),
        xit: new mfo(622, 120, 210, 60),
        otc: new mfo(834, 120, 50, 60),
        ynf: new mfo(90, 200, 780, 70),
        jkn: new mfo(80, 280, 470, 60),
        wpk: new mfo(570, 280, 50, 60),
        ysu: new mfo(622, 280, 210, 60),
        obh: new mfo(834, 280, 50, 60),
        jyk: new mfo(80, 360, 470, 60),
        alk: new mfo(570, 360, 50, 60),
        soo: new mfo(622, 360, 210, 60),
        wzy: new mfo(834, 360, 50, 60),
        phd: new mfo(80, 440, 470, 60),
        war: new mfo(570, 440, 50, 60),
        wut: new mfo(622, 440, 210, 60),
        oph: new mfo(834, 440, 50, 60),
        mng: new mfo(90, 530, 780, 50),
        apv: {
            iuw: new mfo(0, 0, 240, 90),
            pim: new mfo(240, 0, 240, 90),
            lsz: new mfo(480, 0, 240, 90),
            qnw: new mfo(720, 0, 240, 90)
        },
        gjh: {
            iuw: new mfo(0, 0, 192, 90),
            qhk: new mfo(192, 0, 192, 90),
            pim: new mfo(384, 0, 192, 90),
            lsz: new mfo(576, 0, 192, 90),
            qnw: new mfo(768, 0, 192, 90)
        },
        xbr: [new mfo(190, 205, 200, 160), new mfo(570, 205, 200, 160)],
        lkv: [new mfo(90, 205, 200, 160), new mfo(380, 205, 200, 160), new mfo(670, 205, 200, 160)],
        eau: [new mfo(190, 130, 200, 160), new mfo(570, 130, 200, 160), new mfo(190, 360, 200, 160), new mfo(570, 360, 200, 160)],
        whm: [new mfo(90, 130, 200, 160), new mfo(380, 130, 200, 160), new mfo(670, 130, 200, 160), new mfo(90, 360, 200, 160), new mfo(380, 360, 200, 160), new mfo(670, 360, 200, 160)],
        jjk: {
            usd: 3,
            sun: -10,
            ocl: -1,
            une: 6,
            eyf: 36,
            ioh: 0,
        },
        kmt: {
            usd: 3,
            sun: 10,
            ocl: -1,
            une: 6,
            eyf: 36,
            ioh: 0,
        },
        yiz: {
            eyf: 36,
            sun: 0,
            ocl: 0,
            une: 10,
            usd: 0,
            ioh: 0
        },
        rtn: {
            eyf: 26,
            dka: 5,
            usd: 26,
            ioh: 4,
            nrj: 40
        },
        sia: {
            juz: 16,
            kgw: 40,
            cgm: 0,
            qhj: 0,
            ioh: 2,
            dka: 3
        },
        jhf: {
            juz: 16,
            kgw: 40,
            cgm: 0,
            qhj: 0,
            ioh: 2,
            dka: 3
        },
        bkk: {
            hwt: new mfo(50, 0, 360, 60),
            kzz: new mfo(0, 13, 30, 30),
            eyf: 30,
            usd: 0,
            ioh: 2
        }
    };
    this.ptk = {
        mom: new mfo(310, 140, 500, 320),
        juz: 36,
        eyf: 30,
        hju: 18,
        mck: new mfo(20, 20, 460, 40),
        skx: new mfo(20, 80, 460, 120),
        mng: new mfo(20, 210, 460, 20),
        bwm: new mfo(200, 245, 100, 60),
        cuj: 5,
        ioh: 3,
        rlo: {
            eyf: 32,
            usd: 3,
            sun: 0,
            ocl: 0,
            une: 6,
            ioh: 2
        }
    };
    this.idd = {
        mom: [new mfo(162, 0, 130, 46), new mfo(828, 0, 130, 46)],
        display: {
            gii: new mfo(6, 16, 118, 23),
            juz: 14,
            npl: 20,
            cgm: -11,
            adc: 10,
            dka: 8,
            ioh: 3,
            dkr: 0,
            oza: 4
        },
        nib: {
            mom: new mfo(210, 110, 700, 300),
            gii: new mfo(),
            juz: 66,
            npl: 150,
            cgm: -90,
            adc: 60,
            dka: 10,
            ioh: 0,
            dkr: 0,
            oza: 0
        }
    }
}
pgq.prototype = new isk;

function afv() {
    this.mmr = false;
    this.rnr = true;
    this.pmi = false;
    this.smb = true;
    this.abu = true;
    this.canvas = {
        mom: new mfo(0, 0, 960, 600)
    };
    this.vrv = {
        mom: new mfo(),
        ibu: 0,
        yuo: 0
    };
    this.cdg = {
        mom: new mfo(0, 0, 800, 600),
        ioh: 0
    };
    this.vwh = {
        cdg: {
            mom: new mfo(0, 0, 640, 460),
            icw: new mfo(0, 0, 640, 460),
            mng: new mfo(6, 416, 628, 38),
            hwt: new mfo(64, 420, 512, 17),
            gqu: new mfo(64, 442, 512, 7),
            ivz: new mfo(6, 364, 628, 90),
            eyf: 18,
            sjg: 20,
            dka: 6,
            sun: 12,
            ocl: 6,
            bud: 3,
            fro: 0,
            ayn: {
                mom: new mfo(),
                x: 0,
                oww: 0,
                spo: 0
            },
            icf: {
                icw: new mfo(),
                hwt: new mfo(),
                yup: new mfo()
            }
        },
        rlr: {
            mom: new mfo(0, 0, 800, 600),
            icw: new mfo(100, 75, 600, 450),
            mng: new mfo(),
            hwt: new mfo(160, 295, 480, 24),
            gqu: new mfo(160, 325, 480, 3),
            ivz: new mfo(100, 265, 600, 115),
            eyf: 21,
            sjg: 26,
            dka: 0,
            sun: 12,
            ocl: 8,
            bud: 3,
            fro: 10,
            ayn: {
                mom: new mfo(400, 484, 0, 3),
                x: 38,
                oww: 17,
                spo: 23
            },
            icf: {
                icw: new mfo(50, 0, 700, 450),
                hwt: new mfo(100, 430, 600, 60),
                yup: new mfo(200, 510, 400, 40)
            }
        },
        xwn: {
            mom: new mfo(0, 0, 800, 600),
            icw: new mfo(0, 0, 800, 600),
            mng: new mfo(),
            hwt: new mfo(250, 420, 300, 21),
            gqu: new mfo(),
            ivz: new mfo(50, 410, 700, 80),
            eyf: 18,
            sjg: 24,
            dka: 0,
            sun: 12,
            ocl: 7,
            bud: 0,
            fro: 0,
            ayn: {
                mom: new mfo(260, 119, 280, 280),
                x: 0,
                oww: 0,
                spo: 0
            },
            icf: {
                icw: new mfo(50, 0, 700, 450),
                hwt: new mfo(100, 460, 600, 60),
                yup: new mfo(200, 540, 400, 40)
            }
        }
    };
    this.klc = {};
    this.rkt = {};
    this.qjx = {
        mom: new mfo(0, 0, 960, 600),
        zvv: new mfo(800, 0, 160, 600),
        rlo: {
            kgw: 0,
            npl: 0,
            sun: 0,
            qhj: 0,
            adc: 0,
            une: 8,
            usd: 16,
            ioh: 4
        },
        mck: new mfo(0, 20, 800, 40),
        bbm: new mfo(0, 100, 800, 40),
        ybs: new mfo(0, 140, 800, 40),
        uun: new mfo(0, 180, 800, 40),
        xhe: new mfo(225, 275, 350, 100),
        skx: new mfo(200, 480, 400, 40),
        kfy: {
            msb: new mfo(815, 410, 130, 130),
        },
        eqn: {
            msb: new mfo(815, 310, 130, 130),
            nti: new mfo(815, 120, 130, 130)
        },
        zsk: 36,
        eyf: 30,
        xud: 22,
        ocl: 3,
        sun: 5,
        ioh: 2,
        qpi: 3,
        vfy: 10
    };
    this.dmx = {
        mom: new mfo(0, 0, 960, 600),
        ioh: 0,
        usd: 0,
        bes: 50,
        nte: 30,
        hju: 30,
        vcd: new mfo(70, 170, 470, 70),
        tnf: new mfo(560, 170, 60, 70),
        zhm: new mfo(622, 170, 210, 70),
        oxs: new mfo(834, 170, 60, 70),
        pqr: new mfo(70, 310, 470, 70),
        sez: new mfo(560, 310, 60, 70),
        cxy: new mfo(622, 310, 210, 70),
        apq: new mfo(834, 310, 60, 70),
        yzx: new mfo(70, 450, 470, 70),
        ccq: new mfo(622, 450, 210, 70),
        rxj: new mfo(90, 530, 780, 50),
        hhm: new mfo(80, 120, 470, 60),
        xcl: new mfo(570, 120, 50, 60),
        xit: new mfo(622, 120, 210, 60),
        otc: new mfo(834, 120, 50, 60),
        ynf: new mfo(90, 200, 780, 70),
        jkn: new mfo(80, 280, 470, 60),
        wpk: new mfo(570, 280, 50, 60),
        ysu: new mfo(622, 280, 210, 60),
        obh: new mfo(834, 280, 50, 60),
        jyk: new mfo(80, 360, 470, 60),
        alk: new mfo(570, 360, 50, 60),
        soo: new mfo(622, 360, 210, 60),
        wzy: new mfo(834, 360, 50, 60),
        phd: new mfo(80, 440, 470, 60),
        war: new mfo(570, 440, 50, 60),
        wut: new mfo(622, 440, 210, 60),
        oph: new mfo(834, 440, 50, 60),
        mng: new mfo(90, 530, 780, 50),
        apv: {
            iuw: new mfo(0, 0, 240, 90),
            pim: new mfo(240, 0, 240, 90),
            lsz: new mfo(480, 0, 240, 90),
            qnw: new mfo(720, 0, 240, 90)
        },
        gjh: {
            iuw: new mfo(0, 0, 192, 90),
            qhk: new mfo(192, 0, 192, 90),
            pim: new mfo(384, 0, 192, 90),
            lsz: new mfo(576, 0, 192, 90),
            qnw: new mfo(768, 0, 192, 90)
        },
        xbr: [new mfo(190, 205, 200, 160), new mfo(570, 205, 200, 160)],
        lkv: [new mfo(90, 205, 200, 160), new mfo(380, 205, 200, 160), new mfo(670, 205, 200, 160)],
        eau: [new mfo(190, 130, 200, 160), new mfo(570, 130, 200, 160), new mfo(190, 360, 200, 160), new mfo(570, 360, 200, 160)],
        whm: [new mfo(90, 130, 200, 160), new mfo(380, 130, 200, 160), new mfo(670, 130, 200, 160), new mfo(90, 360, 200, 160), new mfo(380, 360, 200, 160), new mfo(670, 360, 200, 160)],
        jjk: {
            usd: 3,
            sun: -10,
            ocl: -1,
            une: 6,
            eyf: 36,
            ioh: 0,
        },
        kmt: {
            usd: 3,
            sun: 10,
            ocl: -1,
            une: 6,
            eyf: 36,
            ioh: 0,
        },
        yiz: {
            eyf: 36,
            sun: 0,
            ocl: 0,
            une: 10,
            usd: 0,
            ioh: 0
        },
        rtn: {
            eyf: 26,
            dka: 5,
            usd: 26,
            ioh: 4,
            nrj: 40
        },
        sia: {
            juz: 16,
            kgw: 40,
            cgm: 0,
            qhj: 0,
            ioh: 2,
            dka: 3
        },
        jhf: {
            juz: 16,
            kgw: 40,
            cgm: 0,
            qhj: 0,
            ioh: 2,
            dka: 3
        },
        bkk: {
            hwt: new mfo(50, 0, 360, 60),
            kzz: new mfo(0, 13, 30, 30),
            eyf: 30,
            usd: 0,
            ioh: 2
        }
    };
    this.ptk = {
        mom: new mfo(150, 140, 500, 320),
        juz: 36,
        eyf: 30,
        hju: 18,
        mck: new mfo(20, 20, 460, 40),
        skx: new mfo(20, 80, 460, 120),
        mng: new mfo(20, 210, 460, 20),
        bwm: new mfo(200, 245, 100, 60),
        cuj: 5,
        ioh: 3,
        rlo: {
            eyf: 32,
            usd: 3,
            sun: 0,
            ocl: 0,
            une: 6,
            ioh: 2
        }
    };
    this.idd = {
        mom: [new mfo(2, 0, 130, 46), new mfo(668, 0, 130, 46)],
        display: {
            gii: new mfo(6, 16, 118, 23),
            juz: 14,
            npl: 20,
            cgm: -11,
            adc: 10,
            dka: 8,
            ioh: 3,
            dkr: 0,
            oza: 4
        },
        nib: {
            mom: new mfo(50, 110, 700, 300),
            gii: new mfo(),
            juz: 66,
            npl: 150,
            cgm: -90,
            adc: 60,
            dka: 10,
            ioh: 0,
            dkr: 0,
            oza: 0
        }
    }
}
afv.prototype = new isk;

function hbx() {
    this.mfd = true;
    this.yvm = true;
    this.ixs = true;
    this.vrv = {
        mom: new mfo(0, 20, 800, 600),
        ibu: 0,
        yuo: 0
    };
    this.ggo = {
        mom: new mfo(0, 20, 800, 600),
        ibu: -20,
        yuo: 0
    };
    this.ion = {
        mom: new mfo(40, 110, 136, 360),
        ylh: new mfo(40, 90, 136, 360),
        jsi: 30,
        avu: 30
    };
    this.zyy = {
        mom: new mfo(186, 110, 136, 360),
        ylh: new mfo(186, 90, 136, 360),
        jsi: 30,
        avu: 30
    };
    this.qsl = {
        mom: new mfo(332, 110, 136, 360),
        ylh: new mfo(332, 90, 136, 360),
        jsi: 30,
        avu: 30
    };
    this.ocd = {
        mom: new mfo(478, 110, 136, 360),
        ylh: new mfo(478, 90, 136, 360),
        jsi: 30,
        avu: 30
    };
    this.nic = {
        mom: new mfo(624, 110, 136, 360),
        ylh: new mfo(624, 90, 136, 360),
        jsi: 30,
        avu: 30
    };
    this.soa = {
        mom: new mfo(0, 20, 800, 86),
        eyf: 50,
        sun: 0,
        ocl: 6,
        dka: 0,
        hcb: 2
    };
    this.bpv = {
        mom: new mfo(0, 20, 800, 80),
        eyf: 50,
        sun: 0,
        ocl: 8,
        dka: 0,
        hcb: 2
    };
    this.nul = {
        mom: new mfo(4, 110, 0, 0),
        fok: [25, 65, 165, 265, 305],
        ojy: 30,
        qig: 30
    };
    this.mul = {
        mom: new mfo(766, 110, 0, 0),
        fok: [25, 65, 165, 265, 305],
        ojy: 30,
        qig: 30
    };
    this.ouh = {
        mom: new mfo(710, 35, 90, 450),
        mck: new mfo(5, 5, 80, 15),
        vxs: new mfo(55, 25, 30, 410),
        eyf: 15,
        ilf: 20,
        ioh: 2,
        usd: 5,
        off: 4,
        bgn: 10,
        wul: 5
    };
    this.dfk = {
        mom: new mfo(0, 35, 90, 450),
        mck: new mfo(5, 5, 80, 15),
        vxs: new mfo(5, 25, 30, 410),
        eyf: 15,
        ilf: 20,
        ioh: 2,
        usd: 5,
        off: 4,
        bgn: 10,
        wul: 5
    };
    this.yyz = {
        mom: new mfo(0, 20, 800, 600),
        zvv: new mfo(0, 540, 800, 60),
        nti: new mfo(711, 544, 73, 53),
        gvr: new mfo(11, 544, 73, 53),
        sum: new mfo(316, 544, 73, 53),
        ccl: new mfo(411, 544, 73, 53),
        rlo: {
            kgw: 16,
            npl: 0,
            sun: 0,
            qhj: 0,
            adc: 0,
            une: 6,
            usd: 8,
            ioh: 2
        }
    };
    this.fzw = {
        mom: new mfo(0, 20, 800, 600),
        zvv: new mfo(0, 485, 800, 115),
        uso: {
            mom: new mfo(187, 489, 470, 40),
            eyf: 18,
            ocl: 14,
            usd: 3,
            tak: 2,
            une: 6,
            ioh: 2
        },
        bmb: {
            mom: new mfo(331, 216, 137, 187),
            hwt: new mfo(5, 8, 56, 34),
            gii: new mfo(37, 3, 98, 104),
            mdy: new mfo(33, 110, 72, 76),
            yki: new mfo(10, 42, 45, 45),
            cak: new mfo(5, 120, 126, 50),
            eyf: 34,
            vfd: 50,
            dka: 3,
            mgk: 4
        },
        koc: {
            mom: new mfo(380, 105, 380, 45),
            ioe: 2
        },
        rlo: {
            kgw: 18,
            npl: 0,
            sun: 0,
            qhj: 0,
            adc: 0,
            une: 8,
            usd: 10,
            ioh: 2
        },
        display: {
            cgm: -12,
            qhj: 11,
            kgw: 26,
            juz: 15,
            ioh: 2,
            xpe: 3,
            ywn: 3,
            kuh: 3,
            ujb: 3
        },
        hek: {
            cgm: 0,
            qhj: 0,
            kgw: 0,
            juz: 0,
            ioh: 0,
            xpe: 0,
            ywn: 0,
            kuh: 0,
            ujb: 0
        },
        yal: new mfo(),
        vqo: new mfo(),
        hbi: new mfo(415, 544, 110, 53),
        rac: new mfo(275, 544, 110, 53),
        cak: new mfo(689, 485, 106, 48),
        wwm: new mfo(5, 485, 150, 48),
        qnf: new mfo(73, 315, 91, 96),
        cyu: new mfo(166, 315, 91, 96),
        qyp: new mfo(542, 315, 91, 96),
        dvr: new mfo(635, 315, 91, 96),
        wnq: new mfo(73, 218, 184, 92),
        faf: new mfo(542, 218, 184, 92),
        bqi: new mfo(65, 170, 200, 50),
        jdd: new mfo(509, 170, 250, 50),
        wwv: new mfo(534, 410, 200, 50)
    };
    this.qus = {
        mom: new mfo(0, 475, 800, 145),
        atu: new mfo(0, 0, 800, 145),
        gxp: new mfo(),
        uso: {
            mom: new mfo(187, 34, 470, 40),
            ocl: 14,
            eyf: 18,
            usd: 3,
            tak: 2,
            une: 6,
            ioh: 2
        },
        qio: {
            mom: new mfo(45, 2, 710, 25),
            eyf: 20,
            ocl: 4,
            usd: 3,
            tak: 2,
            une: 6,
            ioh: 0
        },
        exm: {
            mom: new mfo(187, 51, 470, 70),
            wul: 10,
            qhj: 2,
            eyf: 24,
            ioh: 2,
            xpe: 3,
            ywn: 3,
            kuh: 3,
            ujb: 3
        },
        xgy: {
            kgw: 22,
            npl: 0,
            sun: 0,
            qhj: 0,
            adc: 0,
            usd: 10,
            une: 8,
            ioh: 2
        },
        gjw: {
            kgw: 16,
            npl: 0,
            sun: 0,
            qhj: 0,
            adc: 0,
            usd: 8,
            une: 8,
            ioh: 2
        },
        cyi: {
            kgw: 16,
            npl: 16,
            sun: 0,
            usd: 8,
            une: 6,
            ioh: 2,
            qhj: 24,
            adc: -24
        },
        display: {
            cgm: -12,
            qhj: 11,
            kgw: 26,
            juz: 15,
            ioh: 2,
            xpe: 3,
            ywn: 3,
            kuh: 3,
            ujb: 3
        },
        hek: {
            mom: new mfo(),
            cgm: 0,
            qhj: 0,
            kgw: 0,
            juz: 0,
            ioh: 0,
            xpe: 0,
            ywn: 0,
            kuh: 0,
            ujb: 0
        },
        yal: new mfo(),
        vqo: new mfo(),
        aic: new mfo(5, 30, 150, 48),
        alm: new mfo(689, 30, 106, 48),
        kmk: {
            yup: new mfo(686, 89, 110, 53),
            qgw: new mfo(492, 89, 80, 53),
            kqn: new mfo(382, 89, 80, 53),
            nti: new mfo(272, 89, 80, 53),
            ofx: new mfo(25, 89, 110, 53),
            gai: new mfo()
        },
        isa: {
            yup: new mfo(686, 89, 110, 53),
            qgw: new mfo(532, 89, 80, 53),
            fok: new mfo(432, 89, 80, 53),
            kqn: new mfo(332, 89, 80, 53),
            nti: new mfo(232, 89, 80, 53),
            ofx: new mfo(25, 89, 110, 53),
            gai: new mfo()
        },
        smw: {
            yup: new mfo(686, 89, 110, 53),
            ofx: new mfo(532, 89, 80, 53),
            qgw: new mfo(432, 89, 80, 53),
            kqn: new mfo(332, 89, 80, 53),
            nti: new mfo(232, 89, 80, 53),
            tty: new mfo(40, 89, 80, 53),
            gai: new mfo()
        },
        swb: {
            yup: new mfo(686, 89, 110, 53),
            ofx: new mfo(562, 89, 80, 53),
            qgw: new mfo(472, 89, 80, 53),
            fok: new mfo(382, 89, 80, 53),
            kqn: new mfo(292, 89, 80, 53),
            nti: new mfo(202, 89, 80, 53),
            tty: new mfo(40, 89, 80, 53),
            gai: new mfo()
        },
        zob: {
            yup: new mfo(686, 89, 110, 53),
            ofx: new mfo(492, 89, 80, 53),
            qgw: new mfo(382, 89, 80, 53),
            kqn: new mfo(272, 89, 80, 53),
            tty: new mfo(40, 89, 80, 53),
            gai: new mfo()
        },
        ujd: {
            yup: new mfo(686, 89, 110, 53),
            ofx: new mfo(532, 89, 80, 53),
            qgw: new mfo(432, 89, 80, 53),
            fok: new mfo(332, 89, 80, 53),
            kqn: new mfo(232, 89, 80, 53),
            tty: new mfo(40, 89, 80, 53),
            gai: new mfo()
        },
        fnb: {
            yup: new mfo(686, 89, 110, 53),
            qgw: new mfo(492, 89, 80, 53),
            kqn: new mfo(382, 89, 80, 53),
            nti: new mfo(272, 89, 80, 53),
            ofx: new mfo(25, 89, 110, 53),
            gai: new mfo()
        },
        eck: {
            yup: new mfo(686, 89, 110, 53),
            qgw: new mfo(532, 89, 80, 53),
            fok: new mfo(432, 89, 80, 53),
            kqn: new mfo(332, 89, 80, 53),
            nti: new mfo(232, 89, 80, 53),
            ofx: new mfo(25, 89, 110, 53),
            gai: new mfo()
        },
        gup: {
            yup: new mfo(686, 89, 110, 53),
            ofx: new mfo(25, 89, 110, 53),
            gai: new mfo()
        },
        uje: {
            yup: new mfo(686, 89, 110, 53),
            ofx: new mfo(25, 89, 110, 53),
            gai: new mfo()
        },
        smr: 60
    };
    this.ayn = {
        mom: new mfo(40, 110, 720, 360),
        lineWidth: 4,
        fmv: 5,
        ioh: 1,
        uaa: 136,
        pqq: 120,
        eyf: 40,
        occ: 10,
        tlp: 5,
        ufy: 100,
        vwr: 96,
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
    this.eke = [
        [87, 290, 713, 290],
        [87, 170, 713, 170],
        [87, 410, 713, 410],
        [87, 170, 112, 170, 400, 410, 688, 170, 713, 170],
        [87, 410, 112, 410, 400, 170, 688, 410, 713, 410]
    ]
}
hbx.prototype = new xag;

function bmt() {
    this.vwg = true
}
bmt.prototype = new hbx;

function vxt() {
    this.mfd = true;
    this.yvm = true;
    this.ixs = true;
    this.vrv = {
        mom: new mfo(0, 550, 800, 600),
        ibu: -14,
        yuo: 0
    };
    this.ggo = {
        mom: new mfo(0, 550, 800, 600),
        ibu: -550,
        yuo: 0
    };
    this.ion = {
        mom: new mfo(40, 640, 136, 360),
        ylh: new mfo(40, 90, 136, 360),
        jsi: 30,
        avu: 30
    };
    this.zyy = {
        mom: new mfo(186, 640, 136, 360),
        ylh: new mfo(186, 90, 136, 360),
        jsi: 30,
        avu: 30
    };
    this.qsl = {
        mom: new mfo(332, 640, 136, 360),
        ylh: new mfo(332, 90, 136, 360),
        jsi: 30,
        avu: 30
    };
    this.ocd = {
        mom: new mfo(478, 640, 136, 360),
        ylh: new mfo(478, 90, 136, 360),
        jsi: 30,
        avu: 30
    };
    this.nic = {
        mom: new mfo(624, 640, 136, 360),
        ylh: new mfo(624, 90, 136, 360),
        jsi: 30,
        avu: 30
    };
    this.soa = {
        mom: new mfo(0, 550, 800, 86),
        eyf: 50,
        sun: 0,
        ocl: 6,
        dka: 0,
        hcb: 2
    };
    this.bpv = {
        mom: new mfo(0, 550, 800, 80),
        eyf: 50,
        sun: 0,
        ocl: 8,
        dka: 0,
        hcb: 2
    };
    this.nul = {
        mom: new mfo(4, 640, 0, 0),
        fok: [25, 65, 165, 265, 305],
        ojy: 30,
        qig: 30
    };
    this.mul = {
        mom: new mfo(766, 640, 0, 0),
        fok: [25, 65, 165, 265, 305],
        ojy: 30,
        qig: 30
    };
    this.ouh = {
        mom: new mfo(710, 565, 90, 450),
        mck: new mfo(5, 5, 80, 15),
        vxs: new mfo(55, 25, 30, 410),
        eyf: 15,
        ilf: 20,
        ioh: 2,
        usd: 5,
        off: 4,
        bgn: 10,
        wul: 5
    };
    this.dfk = {
        mom: new mfo(0, 565, 90, 450),
        mck: new mfo(5, 5, 80, 15),
        vxs: new mfo(5, 25, 30, 410),
        eyf: 15,
        ilf: 20,
        ioh: 2,
        usd: 5,
        off: 4,
        bgn: 10,
        wul: 5
    };
    this.yyz = {
        mom: new mfo(0, 550, 800, 615),
        zvv: new mfo(0, 540, 800, 75),
        nti: new mfo(695, 544, 90, 68),
        gvr: new mfo(11, 544, 90, 68),
        sum: new mfo(295, 544, 90, 68),
        ccl: new mfo(415, 544, 90, 68),
        rlo: {
            kgw: 21,
            npl: 0,
            sun: 0,
            qhj: 0,
            adc: 0,
            une: 8,
            usd: 10,
            ioh: 2
        }
    };
    this.fzw = {
        mom: new mfo(0, 550, 800, 615),
        zvv: new mfo(0, 485, 800, 130),
        uso: {
            mom: new mfo(187, 489, 470, 40),
            eyf: 18,
            ocl: 14,
            usd: 3,
            tak: 2,
            une: 6,
            ioh: 2
        },
        bmb: {
            mom: new mfo(331, 216, 137, 187),
            hwt: new mfo(5, 8, 56, 34),
            gii: new mfo(37, 3, 98, 104),
            mdy: new mfo(33, 110, 72, 76),
            yki: new mfo(10, 42, 45, 45),
            cak: new mfo(5, 120, 126, 50),
            eyf: 34,
            vfd: 50,
            dka: 3,
            mgk: 4
        },
        koc: {
            mom: new mfo(380, 105, 380, 45),
            ioe: 2
        },
        rlo: {
            kgw: 23,
            npl: 0,
            sun: 0,
            qhj: 0,
            adc: 0,
            une: 10,
            usd: 12,
            ioh: 2
        },
        display: {
            cgm: -12,
            qhj: 11,
            kgw: 26,
            juz: 15,
            ioh: 2,
            xpe: 3,
            ywn: 3,
            kuh: 3,
            ujb: 3
        },
        hek: {
            cgm: 0,
            qhj: 0,
            kgw: 0,
            juz: 0,
            ioh: 0,
            xpe: 0,
            ywn: 0,
            kuh: 0,
            ujb: 0
        },
        yal: new mfo(),
        vqo: new mfo(),
        hbi: new mfo(415, 544, 120, 68),
        rac: new mfo(265, 544, 120, 68),
        cak: new mfo(689, 485, 106, 48),
        wwm: new mfo(5, 485, 150, 48),
        qnf: new mfo(73, 315, 91, 96),
        cyu: new mfo(166, 315, 91, 96),
        qyp: new mfo(542, 315, 91, 96),
        dvr: new mfo(635, 315, 91, 96),
        wnq: new mfo(73, 218, 184, 92),
        faf: new mfo(542, 218, 184, 92),
        bqi: new mfo(65, 170, 200, 50),
        jdd: new mfo(509, 170, 250, 50),
        wwv: new mfo(534, 410, 200, 50)
    };
    this.qus = {
        mom: new mfo(0, 1005, 800, 160),
        atu: new mfo(0, 0, 800, 160),
        gxp: new mfo(),
        uso: {
            mom: new mfo(187, 34, 470, 40),
            ocl: 14,
            eyf: 18,
            usd: 3,
            tak: 2,
            une: 6,
            ioh: 2
        },
        qio: {
            mom: new mfo(45, 2, 710, 25),
            eyf: 20,
            ocl: 4,
            usd: 3,
            tak: 2,
            une: 6,
            ioh: 0
        },
        exm: {
            mom: new mfo(187, 58, 470, 70),
            wul: 10,
            qhj: 2,
            eyf: 24,
            ioh: 2,
            xpe: 3,
            ywn: 3,
            kuh: 3,
            ujb: 3
        },
        xgy: {
            kgw: 28,
            npl: 0,
            sun: 0,
            qhj: 0,
            adc: 0,
            usd: 12,
            une: 10,
            ioh: 2
        },
        gjw: {
            kgw: 21,
            npl: 0,
            sun: 0,
            qhj: 0,
            adc: 0,
            usd: 10,
            une: 8,
            ioh: 2
        },
        cyi: {
            kgw: 21,
            npl: 21,
            sun: 0,
            usd: 8,
            une: 6,
            ioh: 2,
            qhj: 30,
            adc: -32
        },
        display: {
            cgm: -12,
            qhj: 11,
            kgw: 26,
            juz: 15,
            ioh: 2,
            xpe: 3,
            ywn: 3,
            kuh: 3,
            ujb: 3
        },
        hek: {
            cgm: 0,
            qhj: 0,
            kgw: 0,
            juz: 0,
            ioh: 0,
            xpe: 0,
            ywn: 0,
            kuh: 0,
            ujb: 0
        },
        yal: new mfo(),
        vqo: new mfo(),
        aic: new mfo(5, 30, 150, 48),
        alm: new mfo(689, 30, 106, 48),
        kmk: {
            yup: new mfo(675, 89, 120, 68),
            qgw: new mfo(486, 89, 100, 68),
            kqn: new mfo(371, 89, 100, 68),
            nti: new mfo(256, 89, 100, 68),
            ofx: new mfo(20, 89, 120, 68),
            gai: new mfo()
        },
        isa: {
            yup: new mfo(675, 89, 120, 68),
            qgw: new mfo(536, 89, 100, 68),
            fok: new mfo(426, 89, 100, 68),
            kqn: new mfo(316, 89, 100, 68),
            nti: new mfo(206, 89, 100, 68),
            ofx: new mfo(20, 89, 120, 68),
            gai: new mfo()
        },
        smw: {
            yup: new mfo(675, 89, 120, 68),
            ofx: new mfo(536, 89, 100, 68),
            qgw: new mfo(426, 89, 100, 68),
            kqn: new mfo(316, 89, 100, 68),
            nti: new mfo(206, 89, 100, 68),
            tty: new mfo(30, 89, 100, 68),
            gai: new mfo()
        },
        swb: {
            yup: new mfo(678, 89, 120, 68),
            ofx: new mfo(576, 89, 90, 68),
            qgw: new mfo(476, 89, 90, 68),
            fok: new mfo(376, 89, 90, 68),
            kqn: new mfo(276, 89, 90, 68),
            nti: new mfo(176, 89, 90, 68),
            tty: new mfo(35, 89, 90, 68),
            gai: new mfo()
        },
        zob: {
            yup: new mfo(675, 89, 120, 68),
            ofx: new mfo(486, 89, 100, 68),
            qgw: new mfo(371, 89, 100, 68),
            kqn: new mfo(256, 89, 100, 68),
            tty: new mfo(30, 89, 100, 68),
            gai: new mfo()
        },
        ujd: {
            yup: new mfo(675, 89, 120, 68),
            ofx: new mfo(536, 89, 100, 68),
            qgw: new mfo(426, 89, 100, 68),
            fok: new mfo(316, 89, 100, 68),
            kqn: new mfo(206, 89, 100, 68),
            tty: new mfo(30, 89, 100, 68),
            gai: new mfo()
        },
        fnb: {
            yup: new mfo(675, 89, 120, 68),
            qgw: new mfo(486, 89, 100, 68),
            kqn: new mfo(371, 89, 100, 68),
            nti: new mfo(256, 89, 100, 68),
            ofx: new mfo(20, 89, 120, 68),
            gai: new mfo()
        },
        eck: {
            yup: new mfo(675, 89, 120, 68),
            qgw: new mfo(536, 89, 100, 68),
            fok: new mfo(426, 89, 100, 68),
            kqn: new mfo(316, 89, 100, 68),
            nti: new mfo(206, 89, 100, 68),
            ofx: new mfo(20, 89, 120, 68),
            gai: new mfo()
        },
        gup: {
            yup: new mfo(675, 90, 120, 68),
            ofx: new mfo(20, 90, 120, 68),
            gai: new mfo()
        },
        uje: {
            yup: new mfo(675, 90, 120, 68),
            ofx: new mfo(20, 90, 120, 68),
            gai: new mfo()
        },
        smr: 60
    };
    this.ayn = {
        mom: new mfo(40, 640, 720, 360),
        lineWidth: 4,
        fmv: 5,
        ioh: 1,
        uaa: 136,
        pqq: 120,
        eyf: 40,
        occ: 10,
        tlp: 5,
        ufy: 100,
        vwr: 96,
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
    this.eke = [
        [87, 820, 713, 820],
        [87, 700, 713, 700],
        [87, 940, 713, 940],
        [87, 700, 112, 700, 400, 940, 688, 700, 713, 700],
        [87, 940, 112, 940, 400, 700, 688, 940, 713, 940]
    ];
    this.top = {
        mom: new mfo(0, 20, 800, 520)
    }
}
vxt.prototype = new gnx;

function drh() {
    this.mfd = false;
    this.yvm = true;
    this.ixs = true;
    this.vrv = {
        mom: new mfo(160, 0, 800, 600),
        ibu: 0,
        yuo: 0
    };
    this.ggo = {
        mom: new mfo(0, 0, 1120, 600),
        yuo: 0,
        ibu: 0
    };
    this.ion = {
        mom: new mfo(200, 90, 136, 360),
        ylh: new mfo(40, 90, 136, 360),
        jsi: 30,
        avu: 30
    };
    this.zyy = {
        mom: new mfo(346, 90, 136, 360),
        ylh: new mfo(186, 90, 136, 360),
        jsi: 30,
        avu: 30
    };
    this.qsl = {
        mom: new mfo(492, 90, 136, 360),
        ylh: new mfo(332, 90, 136, 360),
        jsi: 30,
        avu: 30
    };
    this.ocd = {
        mom: new mfo(638, 90, 136, 360),
        ylh: new mfo(478, 90, 136, 360),
        jsi: 30,
        avu: 30
    };
    this.nic = {
        mom: new mfo(784, 90, 136, 360),
        ylh: new mfo(624, 90, 136, 360),
        jsi: 30,
        avu: 30
    };
    this.soa = {
        mom: new mfo(160, 0, 800, 86),
        eyf: 50,
        sun: 0,
        ocl: 6,
        dka: 0,
        hcb: 2
    };
    this.bpv = {
        mom: new mfo(160, 0, 800, 80),
        eyf: 50,
        sun: 0,
        ocl: 8,
        dka: 0,
        hcb: 2
    };
    this.nul = {
        mom: new mfo(164, 90, 0, 0),
        fok: [25, 65, 165, 265, 305],
        ojy: 30,
        qig: 30
    };
    this.mul = {
        mom: new mfo(926, 90, 0, 0),
        fok: [25, 65, 165, 265, 305],
        ojy: 30,
        qig: 30
    };
    this.ouh = {};
    this.dfk = {};
    this.yyz = {
        mom: new mfo(0, 0, 960, 600),
        zvv: new mfo(0, 0, 160, 600),
        nti: new mfo(20, 400, 120, 120),
        gvr: new mfo(),
        sum: new mfo(20, 50, 120, 120),
        ccl: new mfo(20, 225, 120, 120),
        rlo: {
            kgw: 0,
            npl: 0,
            sun: 0,
            qhj: 0,
            adc: 0,
            usd: 0,
            une: 16,
            ioh: 4
        }
    };
    this.fzw = {
        mom: new mfo(0, 0, 960, 600),
        zvv: new mfo(0, 0, 160, 600),
        uso: {
            mom: new mfo(385, 520, 390, 70),
            eyf: 20,
            ocl: 14,
            usd: 3,
            tak: 2,
            une: 6,
            ioh: 2
        },
        bmb: {
            mom: new mfo(491, 216, 137, 187),
            hwt: new mfo(5, 8, 56, 34),
            gii: new mfo(37, 3, 98, 104),
            mdy: new mfo(33, 110, 72, 76),
            yki: new mfo(10, 42, 45, 45),
            cak: new mfo(5, 120, 126, 50),
            eyf: 34,
            vfd: 50,
            dka: 3,
            mgk: 4
        },
        koc: {
            mom: new mfo(540, 105, 380, 45),
            ioe: 2
        },
        rlo: {
            kgw: 24,
            npl: 0,
            sun: 0,
            qhj: 0,
            adc: 0,
            une: 10,
            usd: 0,
            ioh: 4
        },
        display: {
            cgm: -18,
            qhj: 16,
            kgw: 32,
            juz: 18,
            ioh: 3,
            xpe: 3,
            ywn: 3,
            kuh: 3,
            ujb: 3
        },
        hek: {
            cgm: 0,
            qhj: 0,
            kgw: 16,
            juz: 0,
            ioh: 2,
            xpe: 0,
            ywn: 0,
            kuh: 0,
            ujb: 0
        },
        yal: new mfo(0, 0, 160, 22),
        vqo: new mfo(0, 22, 160, 22),
        hbi: new mfo(20, 325, 120, 120),
        rac: new mfo(20, 125, 120, 120),
        cak: new mfo(815, 520, 140, 70),
        wwm: new mfo(165, 520, 180, 70),
        qnf: new mfo(233, 315, 91, 96),
        cyu: new mfo(326, 315, 91, 96),
        qyp: new mfo(702, 315, 91, 96),
        dvr: new mfo(795, 315, 91, 96),
        wnq: new mfo(233, 218, 184, 92),
        faf: new mfo(702, 218, 184, 92),
        bqi: new mfo(225, 170, 200, 50),
        jdd: new mfo(669, 170, 250, 50),
        wwv: new mfo(694, 410, 200, 50)
    };
    this.qus = {
        mom: new mfo(0, 0, 960, 600),
        atu: new mfo(160, 455, 800, 145),
        gxp: new mfo(0, 0, 160, 600),
        uso: {
            mom: new mfo(385, 520, 390, 70),
            ocl: 14,
            eyf: 24,
            usd: 3,
            tak: 2,
            une: 6,
            ioh: 2
        },
        qio: {
            mom: new mfo(205, 458, 710, 25),
            eyf: 20,
            ocl: 4,
            usd: 3,
            tak: 2,
            une: 6,
            ioh: 0
        },
        exm: {
            mom: new mfo(385, 520, 390, 70),
            wul: 10,
            qhj: 2,
            eyf: 20,
            ioh: 2,
            xpe: 3,
            ywn: 3,
            kuh: 3,
            ujb: 3
        },
        xgy: {
            kgw: 0,
            npl: 0,
            sun: 0,
            qhj: 0,
            adc: 0,
            usd: 0,
            une: 10,
            ioh: 4
        },
        gjw: {
            kgw: 0,
            npl: 0,
            sun: 0,
            qhj: 0,
            adc: 0,
            usd: 0,
            une: 10,
            ioh: 4
        },
        cyi: {
            kgw: 0,
            npl: 24,
            sun: 0,
            usd: 0,
            une: 10,
            ioh: 6,
            qhj: 0,
            adc: -40
        },
        yjd: {
            usd: 2,
            sun: 0,
            ocl: -4,
            une: 6,
            eyf: 36,
            ioh: 2
        },
        display: {
            cgm: -18,
            qhj: 16,
            kgw: 32,
            juz: 18,
            ioh: 3,
            xpe: 3,
            ywn: 3,
            kuh: 3,
            ujb: 3
        },
        hek: {
            cgm: 0,
            qhj: 0,
            kgw: 16,
            juz: 0,
            ioh: 2,
            xpe: 0,
            ywn: 0,
            kuh: 0,
            ujb: 0
        },
        yal: new mfo(0, 0, 160, 22),
        vqo: new mfo(0, 22, 160, 22),
        aic: new mfo(165, 520, 180, 70),
        alm: new mfo(815, 520, 140, 70),
        kmk: {
            yup: new mfo(5, 210, 150, 150),
            qgw: new mfo(835, 488, 100, 30),
            kqn: new mfo(),
            nti: new mfo(20, 400, 120, 120),
            ofx: new mfo(),
            gai: new mfo(20, 50, 120, 120)
        },
        isa: {
            yup: new mfo(5, 210, 150, 150),
            qgw: new mfo(835, 488, 100, 30),
            fok: new mfo(),
            kqn: new mfo(),
            nti: new mfo(20, 400, 120, 120),
            ofx: new mfo(),
            gai: new mfo(20, 50, 120, 120)
        },
        smw: {
            yup: new mfo(5, 210, 150, 150),
            ofx: new mfo(),
            qgw: new mfo(835, 488, 100, 30),
            kqn: new mfo(),
            nti: new mfo(20, 400, 120, 120),
            tty: new mfo(),
            gai: new mfo(20, 50, 120, 120)
        },
        swb: {
            yup: new mfo(5, 210, 150, 150),
            ofx: new mfo(),
            qgw: new mfo(835, 488, 100, 30),
            fok: new mfo(),
            kqn: new mfo(),
            nti: new mfo(20, 400, 120, 120),
            tty: new mfo(),
            gai: new mfo(20, 50, 120, 120)
        },
        zob: {
            yup: new mfo(5, 210, 150, 150),
            ofx: new mfo(),
            qgw: new mfo(835, 488, 100, 30),
            kqn: new mfo(),
            tty: new mfo(),
            gai: new mfo(20, 50, 120, 120)
        },
        ujd: {
            yup: new mfo(5, 210, 150, 150),
            ofx: new mfo(),
            qgw: new mfo(835, 488, 100, 30),
            fok: new mfo(),
            kqn: new mfo(),
            tty: new mfo(),
            gai: new mfo(20, 50, 120, 120)
        },
        fnb: {
            yup: new mfo(5, 210, 150, 150),
            qgw: new mfo(835, 488, 100, 30),
            kqn: new mfo(),
            nti: new mfo(20, 400, 120, 120),
            ofx: new mfo(),
            gai: new mfo(20, 50, 120, 120)
        },
        eck: {
            yup: new mfo(5, 210, 150, 150),
            qgw: new mfo(835, 488, 100, 30),
            fok: new mfo(),
            kqn: new mfo(),
            nti: new mfo(20, 400, 120, 120),
            ofx: new mfo(),
            gai: new mfo(20, 50, 120, 120)
        },
        gup: {
            yup: new mfo(5, 210, 150, 150),
            ofx: new mfo(),
            gai: new mfo(20, 50, 120, 120)
        },
        uje: {
            yup: new mfo(5, 210, 150, 150),
            ofx: new mfo(),
            gai: new mfo(20, 50, 120, 120)
        },
        smr: 60
    };
    this.ayn = {
        mom: new mfo(200, 90, 720, 360),
        lineWidth: 4,
        fmv: 5,
        ioh: 1,
        uaa: 136,
        pqq: 120,
        eyf: 40,
        occ: 10,
        tlp: 5,
        ufy: 100,
        vwr: 96,
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
    this.eke = [
        [247, 270, 873, 270],
        [247, 150, 873, 150],
        [247, 390, 873, 390],
        [247, 150, 272, 150, 560, 390, 848, 150, 873, 150],
        [247, 390, 272, 390, 560, 150, 848, 390, 873, 390]
    ]
}
drh.prototype = new pgq;

function wvr() {
    this.mfd = false;
    this.yvm = true;
    this.ixs = true;
    this.vrv = {
        mom: new mfo(0, 0, 800, 600),
        ibu: 0,
        yuo: -160
    };
    this.ggo = {
        mom: new mfo(-160, 0, 1120, 600),
        yuo: 160,
        ibu: 0
    };
    this.ion = {
        mom: new mfo(40, 90, 136, 360),
        ylh: new mfo(40, 90, 136, 360),
        jsi: 30,
        avu: 30
    };
    this.zyy = {
        mom: new mfo(186, 90, 136, 360),
        ylh: new mfo(186, 90, 136, 360),
        jsi: 30,
        avu: 30
    };
    this.qsl = {
        mom: new mfo(332, 90, 136, 360),
        ylh: new mfo(332, 90, 136, 360),
        jsi: 30,
        avu: 30
    };
    this.ocd = {
        mom: new mfo(478, 90, 136, 360),
        ylh: new mfo(478, 90, 136, 360),
        jsi: 30,
        avu: 30
    };
    this.nic = {
        mom: new mfo(624, 90, 136, 360),
        ylh: new mfo(624, 90, 136, 360),
        jsi: 30,
        avu: 30
    };
    this.soa = {
        mom: new mfo(0, 0, 800, 86),
        eyf: 50,
        sun: 0,
        ocl: 6,
        dka: 0,
        hcb: 2
    };
    this.bpv = {
        mom: new mfo(0, 0, 800, 80),
        eyf: 50,
        sun: 0,
        ocl: 8,
        dka: 0,
        hcb: 2
    };
    this.nul = {
        mom: new mfo(4, 90, 0, 0),
        fok: [25, 65, 165, 265, 305],
        ojy: 30,
        qig: 30
    };
    this.mul = {
        mom: new mfo(766, 90, 0, 0),
        fok: [25, 65, 165, 265, 305],
        ojy: 30,
        qig: 30
    };
    this.ouh = {};
    this.dfk = {};
    this.yyz = {
        mom: new mfo(0, 0, 960, 600),
        zvv: new mfo(800, 0, 160, 600),
        nti: new mfo(820, 400, 120, 120),
        gvr: new mfo(),
        sum: new mfo(820, 50, 120, 120),
        ccl: new mfo(820, 225, 120, 120),
        rlo: {
            kgw: 0,
            npl: 0,
            sun: 0,
            qhj: 0,
            adc: 0,
            usd: 0,
            une: 16,
            ioh: 4
        }
    };
    this.fzw = {
        mom: new mfo(0, 0, 960, 600),
        zvv: new mfo(800, 0, 160, 600),
        uso: {
            mom: new mfo(225, 520, 390, 70),
            eyf: 20,
            ocl: 14,
            usd: 3,
            tak: 2,
            une: 6,
            ioh: 2
        },
        bmb: {
            mom: new mfo(331, 216, 137, 187),
            hwt: new mfo(5, 8, 56, 34),
            gii: new mfo(37, 3, 98, 104),
            mdy: new mfo(33, 110, 72, 76),
            yki: new mfo(10, 42, 45, 45),
            cak: new mfo(5, 120, 126, 50),
            eyf: 34,
            vfd: 50,
            dka: 3,
            mgk: 4
        },
        koc: {
            mom: new mfo(380, 105, 380, 45),
            ioe: 2
        },
        rlo: {
            kgw: 24,
            npl: 0,
            sun: 0,
            qhj: 0,
            adc: 0,
            une: 10,
            usd: 0,
            ioh: 4
        },
        display: {
            cgm: -18,
            qhj: 16,
            kgw: 32,
            juz: 18,
            ioh: 3,
            xpe: 3,
            ywn: 3,
            kuh: 3,
            ujb: 3
        },
        hek: {
            cgm: 0,
            qhj: 0,
            kgw: 16,
            juz: 0,
            ioh: 2,
            xpe: 0,
            ywn: 0,
            kuh: 0,
            ujb: 0
        },
        yal: new mfo(800, 0, 160, 22),
        vqo: new mfo(800, 22, 160, 22),
        hbi: new mfo(820, 325, 120, 120),
        rac: new mfo(820, 125, 120, 120),
        cak: new mfo(655, 520, 140, 70),
        wwm: new mfo(5, 520, 180, 70),
        qnf: new mfo(73, 315, 91, 96),
        cyu: new mfo(166, 315, 91, 96),
        qyp: new mfo(542, 315, 91, 96),
        dvr: new mfo(635, 315, 91, 96),
        wnq: new mfo(73, 218, 184, 92),
        faf: new mfo(542, 218, 184, 92),
        bqi: new mfo(65, 170, 200, 50),
        jdd: new mfo(509, 170, 250, 50),
        wwv: new mfo(534, 410, 200, 50)
    };
    this.qus = {
        mom: new mfo(0, 0, 960, 600),
        atu: new mfo(0, 455, 800, 145),
        gxp: new mfo(800, 0, 160, 600),
        uso: {
            mom: new mfo(225, 520, 390, 70),
            ocl: 14,
            eyf: 24,
            usd: 3,
            tak: 2,
            une: 6,
            ioh: 2
        },
        qio: {
            mom: new mfo(45, 458, 710, 25),
            eyf: 20,
            ocl: 4,
            usd: 3,
            tak: 2,
            une: 6,
            ioh: 0
        },
        exm: {
            mom: new mfo(225, 520, 390, 70),
            wul: 10,
            qhj: 2,
            eyf: 20,
            ioh: 2,
            xpe: 3,
            ywn: 3,
            kuh: 3,
            ujb: 3
        },
        xgy: {
            kgw: 0,
            npl: 0,
            sun: 0,
            qhj: 0,
            adc: 0,
            usd: 0,
            une: 10,
            ioh: 4
        },
        gjw: {
            kgw: 0,
            npl: 0,
            sun: 0,
            qhj: 0,
            adc: 0,
            usd: 0,
            une: 10,
            ioh: 4
        },
        cyi: {
            kgw: 0,
            npl: 24,
            sun: 0,
            usd: 0,
            une: 10,
            ioh: 6,
            qhj: 0,
            adc: -40
        },
        yjd: {
            usd: 2,
            sun: 0,
            ocl: -4,
            une: 6,
            eyf: 36,
            ioh: 2
        },
        display: {
            cgm: -18,
            qhj: 16,
            kgw: 32,
            juz: 18,
            ioh: 3,
            xpe: 3,
            ywn: 3,
            kuh: 3,
            ujb: 3
        },
        hek: {
            cgm: 0,
            qhj: 0,
            kgw: 16,
            juz: 0,
            ioh: 2,
            xpe: 0,
            ywn: 0,
            kuh: 0,
            ujb: 0
        },
        yal: new mfo(800, 0, 160, 22),
        vqo: new mfo(800, 22, 160, 22),
        aic: new mfo(5, 520, 180, 70),
        alm: new mfo(655, 520, 140, 70),
        kmk: {
            yup: new mfo(805, 210, 150, 150),
            qgw: new mfo(675, 488, 100, 30),
            kqn: new mfo(),
            nti: new mfo(820, 400, 120, 120),
            ofx: new mfo(),
            gai: new mfo(820, 50, 120, 120)
        },
        isa: {
            yup: new mfo(805, 210, 150, 150),
            qgw: new mfo(675, 488, 100, 30),
            fok: new mfo(),
            kqn: new mfo(),
            nti: new mfo(820, 400, 120, 120),
            ofx: new mfo(),
            gai: new mfo(820, 50, 120, 120)
        },
        smw: {
            yup: new mfo(805, 210, 150, 150),
            ofx: new mfo(),
            qgw: new mfo(675, 488, 100, 30),
            kqn: new mfo(),
            nti: new mfo(820, 400, 120, 120),
            tty: new mfo(),
            gai: new mfo(820, 50, 120, 120)
        },
        swb: {
            yup: new mfo(805, 210, 150, 150),
            ofx: new mfo(),
            qgw: new mfo(675, 488, 100, 30),
            fok: new mfo(),
            kqn: new mfo(),
            nti: new mfo(820, 400, 120, 120),
            tty: new mfo(),
            gai: new mfo(820, 50, 120, 120)
        },
        zob: {
            yup: new mfo(805, 210, 150, 150),
            ofx: new mfo(),
            qgw: new mfo(675, 488, 100, 30),
            kqn: new mfo(),
            tty: new mfo(),
            gai: new mfo(820, 50, 120, 120)
        },
        ujd: {
            yup: new mfo(805, 210, 150, 150),
            ofx: new mfo(),
            qgw: new mfo(675, 488, 100, 30),
            fok: new mfo(),
            kqn: new mfo(),
            tty: new mfo(),
            gai: new mfo(820, 50, 120, 120)
        },
        fnb: {
            yup: new mfo(805, 210, 150, 150),
            qgw: new mfo(675, 488, 100, 30),
            kqn: new mfo(),
            nti: new mfo(820, 400, 120, 120),
            ofx: new mfo(),
            gai: new mfo(820, 50, 120, 120)
        },
        eck: {
            yup: new mfo(805, 210, 150, 150),
            qgw: new mfo(675, 488, 100, 30),
            fok: new mfo(),
            kqn: new mfo(),
            nti: new mfo(820, 400, 120, 120),
            ofx: new mfo(),
            gai: new mfo(820, 50, 120, 120)
        },
        gup: {
            yup: new mfo(805, 210, 150, 150),
            ofx: new mfo(),
            gai: new mfo(820, 50, 120, 120)
        },
        uje: {
            yup: new mfo(805, 210, 150, 150),
            ofx: new mfo(),
            gai: new mfo(820, 50, 120, 120)
        },
        smr: 60
    };
    this.ayn = {
        mom: new mfo(40, 90, 720, 360),
        lineWidth: 4,
        fmv: 5,
        ioh: 1,
        uaa: 136,
        pqq: 120,
        eyf: 40,
        occ: 10,
        tlp: 5,
        ufy: 100,
        vwr: 96,
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
    this.eke = [
        [87, 270, 713, 270],
        [87, 150, 713, 150],
        [87, 390, 713, 390],
        [87, 150, 112, 150, 400, 390, 688, 150, 713, 150],
        [87, 390, 112, 390, 400, 150, 688, 390, 713, 390]
    ]
}
wvr.prototype = new afv;

function agu() {
    this.qus.qio.mom = new mfo(45, 1, 710, 24);
    this.qus.qio.ocl = 3;
    this.fzw.koc.mom = new mfo(380, 125, 380, 45);
    this.soa = {
        mom: new mfo(0, 20, 800, 87),
        icw: new mfo(345, 10, 110, 70),
        eyf: 50,
        sun: -140,
        vou: 140,
        ocl: 4,
        dka: 0,
        hcb: 2
    };
    this.nul = {
        mom: new mfo(3, 110, 0, 0),
        fok: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        ojy: 32,
        qig: 33
    };
    this.mul = {
        mom: new mfo(765, 110, 0, 0),
        fok: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        ojy: 32,
        qig: 33
    };
    this.dso = {
        mom: new mfo(40, 110, 720, 360),
        ste: [new mfo(0, 0, 136, 360), new mfo(146, 0, 136, 360), new mfo(292, 0, 136, 360), new mfo(438, 0, 136, 360), new mfo(584, 0, 136, 360)],
        uaa: 136,
        pqq: 120,
        epy: 110,
        viy: 70
    };
    this.eke = [
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
    this.yyz.chk = {
        mom: new mfo(0, 0, 800, 600),
        eyf: 16,
        etn: 26,
        juz: 40,
        hju: 12,
        lineWidth: 1,
        mng: new mfo(20, 500, 760, 30),
        mck: new mfo(),
        hwt: [new mfo(400, 375, 390, 105)],
        cak: [new mfo(340, 138, 150, 100), new mfo(130, 60, 100, 100), new mfo(130, 228, 100, 100), new mfo(670, 60, 110, 100), new mfo(670, 228, 110, 100), new mfo(400, 254, 110, 100)]
    };
    this.yyz.qio = {
        mom: new mfo(0, 0, 800, 600),
        eyf: 22,
        juz: 40,
        lineWidth: 1,
        mck: new mfo(),
        hwt: [new mfo(10, 430, 780, 30)]
    };
    this.yyz.lzi = {
        mom: new mfo(0, 0, 800, 600),
        eyf: 22,
        juz: 40,
        lineWidth: 1,
        mck: new mfo(),
        hwt: [new mfo(350, 95, 420, 150), new mfo(350, 290, 420, 150)]
    }
}
agu.prototype = new hbx;

function wve() {
    this.vwg = true
}
wve.prototype = new agu;

function hki() {
    this.qus.qio.mom = new mfo(45, 1, 710, 24);
    this.qus.qio.ocl = 3;
    this.fzw.koc.mom = new mfo(380, 125, 380, 45);
    this.soa = {
        mom: new mfo(0, 550, 800, 87),
        icw: new mfo(345, 10, 110, 70),
        eyf: 50,
        sun: -140,
        vou: 140,
        ocl: 4,
        dka: 0,
        hcb: 2
    };
    this.nul = {
        mom: new mfo(3, 640, 0, 0),
        fok: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        ojy: 32,
        qig: 33
    };
    this.mul = {
        mom: new mfo(765, 640, 0, 0),
        fok: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        ojy: 32,
        qig: 33
    };
    this.dso = {
        mom: new mfo(40, 640, 720, 360),
        ste: [new mfo(0, 0, 136, 360), new mfo(146, 0, 136, 360), new mfo(292, 0, 136, 360), new mfo(438, 0, 136, 360), new mfo(584, 0, 136, 360)],
        uaa: 136,
        pqq: 120,
        epy: 110,
        viy: 70
    };
    this.eke = [
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
    this.yyz.chk = {
        mom: new mfo(0, 0, 800, 615),
        eyf: 16,
        etn: 26,
        juz: 40,
        hju: 12,
        lineWidth: 1,
        mng: new mfo(20, 500, 760, 30),
        mck: new mfo(),
        hwt: [new mfo(400, 375, 390, 105)],
        cak: [new mfo(340, 138, 150, 100), new mfo(130, 60, 100, 100), new mfo(130, 228, 100, 100), new mfo(670, 60, 110, 100), new mfo(670, 228, 110, 100), new mfo(400, 254, 110, 100)]
    };
    this.yyz.qio = {
        mom: new mfo(0, 0, 800, 615),
        eyf: 22,
        juz: 40,
        lineWidth: 1,
        mck: new mfo(),
        hwt: [new mfo(10, 430, 780, 30)]
    };
    this.yyz.lzi = {
        mom: new mfo(0, 0, 800, 615),
        eyf: 22,
        juz: 40,
        lineWidth: 1,
        mck: new mfo(),
        hwt: [new mfo(350, 95, 420, 150), new mfo(350, 290, 420, 150)]
    };
    this.top.chk = {
        mom: new mfo(0, 0, 800, 520),
        eyf: 16,
        etn: 26,
        juz: 40,
        hju: 12,
        lineWidth: 1,
        mng: new mfo(20, 488, 760, 30),
        mck: new mfo(),
        hwt: [new mfo(400, 365, 390, 110)],
        cak: [new mfo(340, 136, 150, 98), new mfo(130, 58, 100, 98), new mfo(130, 226, 100, 98), new mfo(670, 58, 110, 98), new mfo(670, 226, 110, 98), new mfo(400, 248, 110, 98)],
    }
}
hki.prototype = new vxt;

function xrw() {
    this.qus.qio.mom = new mfo(205, 456, 710, 24);
    this.qus.qio.ocl = 3;
    this.fzw.koc.mom = new mfo(540, 120, 380, 45);
    this.soa = {
        mom: new mfo(160, 0, 800, 87),
        icw: new mfo(345, 10, 110, 70),
        eyf: 50,
        sun: -140,
        vou: 140,
        ocl: 6,
        dka: 0,
        hcb: 2
    };
    this.nul = {
        mom: new mfo(163, 90, 0, 0),
        fok: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        ojy: 32,
        qig: 33
    };
    this.mul = {
        mom: new mfo(925, 90, 0, 0),
        fok: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        ojy: 32,
        qig: 33
    };
    this.dso = {
        mom: new mfo(200, 90, 720, 360),
        ste: [new mfo(0, 0, 136, 360), new mfo(146, 0, 136, 360), new mfo(292, 0, 136, 360), new mfo(438, 0, 136, 360), new mfo(584, 0, 136, 360)],
        uaa: 136,
        pqq: 120,
        epy: 110,
        viy: 70
    };
    this.eke = [
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
    this.yyz.chk = {
        mom: new mfo(160, 0, 800, 600),
        eyf: 16,
        etn: 26,
        juz: 40,
        hju: 16,
        lineWidth: 1,
        mng: new mfo(20, 530, 760, 40),
        mck: new mfo(),
        hwt: [new mfo(400, 375, 390, 105)],
        cak: [new mfo(340, 138, 150, 100), new mfo(130, 60, 100, 100), new mfo(130, 228, 100, 100), new mfo(670, 60, 110, 100), new mfo(670, 228, 110, 100), new mfo(400, 254, 110, 100)]
    };
    this.yyz.qio = {
        mom: new mfo(160, 0, 800, 600),
        eyf: 22,
        juz: 40,
        lineWidth: 1,
        mck: new mfo(),
        hwt: [new mfo(10, 430, 780, 30)]
    };
    this.yyz.lzi = {
        mom: new mfo(160, 0, 800, 600),
        eyf: 22,
        juz: 40,
        lineWidth: 1,
        mck: new mfo(),
        hwt: [new mfo(350, 95, 420, 150), new mfo(350, 290, 420, 150)]
    }
}
xrw.prototype = new drh;

function bvn() {
    this.qus.qio.mom = new mfo(45, 456, 710, 24);
    this.qus.qio.ocl = 3;
    this.fzw.koc.mom = new mfo(380, 120, 380, 45);
    this.soa = {
        mom: new mfo(0, 0, 800, 87),
        icw: new mfo(345, 10, 110, 70),
        eyf: 50,
        sun: -140,
        vou: 140,
        ocl: 6,
        dka: 0,
        hcb: 2
    };
    this.nul = {
        mom: new mfo(3, 90, 0, 0),
        fok: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        ojy: 32,
        qig: 33
    };
    this.mul = {
        mom: new mfo(765, 90, 0, 0),
        fok: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        ojy: 32,
        qig: 33
    };
    this.dso = {
        mom: new mfo(40, 90, 720, 360),
        ste: [new mfo(0, 0, 136, 360), new mfo(146, 0, 136, 360), new mfo(292, 0, 136, 360), new mfo(438, 0, 136, 360), new mfo(584, 0, 136, 360)],
        uaa: 136,
        pqq: 120,
        epy: 110,
        viy: 70
    };
    this.eke = [
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
    this.yyz.chk = {
        mom: new mfo(0, 0, 800, 600),
        eyf: 16,
        etn: 26,
        juz: 40,
        hju: 16,
        lineWidth: 1,
        mng: new mfo(20, 530, 760, 40),
        mck: new mfo(),
        hwt: [new mfo(400, 375, 390, 105)],
        cak: [new mfo(340, 138, 150, 100), new mfo(130, 60, 100, 100), new mfo(130, 228, 100, 100), new mfo(670, 60, 110, 100), new mfo(670, 228, 110, 100), new mfo(400, 254, 110, 100)]
    };
    this.yyz.qio = {
        mom: new mfo(0, 0, 800, 600),
        eyf: 22,
        juz: 40,
        lineWidth: 1,
        mck: new mfo(),
        hwt: [new mfo(10, 430, 780, 30)]
    };
    this.yyz.lzi = {
        mom: new mfo(0, 0, 800, 600),
        eyf: 22,
        juz: 40,
        lineWidth: 1,
        mck: new mfo(),
        hwt: [new mfo(350, 95, 420, 150), new mfo(350, 290, 420, 150)]
    }
}
bvn.prototype = new wvr;
var tvj = {
    language: {
        EN: "en",
        RU: "ru",
        EE: "ee",
        ES: "es",
        DE: "de",
        TR: "tr",
        CZ: "cz",
        GR: "gr",
        AT: "at",
        US: "us",
        BG: "bg",
        CO: "co",
        CL: "cl",
        MX: "mx",
        VE: "ve",
        BR: "br",
        GE: "ge",
        HU: "hu",
        RO: "ro",
        PT: "pt"
    },
    aox: {
        igp: 0,
        bvy: 1,
        cva: 2,
        eye: 3,
        rer: 4,
        kof: 5,
        sng: 10,
        myt: 11,
        kzq: 12,
        hkx: 13,
        vhu: 14,
        rkj: 15,
        idv: 16
    },
    os: {
        rzw: 0,
        olq: 1,
        gei: 2,
        zag: 3,
        wok: 4
    },
    hue: {
        yhw: 1,
        iqn: 3,
        uvn: 4,
        qic: 5,
        nfy: 7,
        iig: 8,
        rlb: 11,
        jsm: 13,
        yjc: 14,
        jif: 6,
        vtc: 9,
        lcq: 10
    },
    dkd: {
        hdu: 1,
        jni: 2,
        wqh: 4,
        dbs: 8,
        hrt: 16,
        vpn: 32
    },
    exp: {
        edw: 1,
        azo: 2,
        gzp: 3,
        fzi: 4,
        vim: 5,
        wmj: 6,
        lkb: 7,
        sch: 95,
        kui: 96,
        fow: 97,
        ndc: 98,
        ouy: 99,
        roulette: {
            daw: 2,
            fcg: 9,
            yxq: 10
        }
    },
    ui: {
        gmi: "minimal",
        owg: "modern",
        uvn: "classic"
    },
    pym: {
        wio: "auto",
        kmv: "left",
        nxg: "right"
    },
    vwh: {
        slx: 0,
        kcy: 1,
        faz: 2,
        wxd: 3,
        hfy: 4
    },
    idd: {
        ciu: {
            xre: "ji",
            csq: "jv",
            gsa: "jh"
        }
    }
};
tvj.nks = (function() {
    var g = ["moz", "webkit", "ms", "o"],
        f = 0,
        d = 0;
    var b = document.createElement("canvas");
    if (!(b.getContext && b.getContext("2d"))) {
        f += tvj.dkd.hdu
    }
    if (!(window.WebSocket || window.MozWebSocket)) {
        f += tvj.dkd.jni
    }
    try {
        if (!(window.localStorage && window.sessionStorage)) {
            f += tvj.dkd.wqh
        } else {
            sessionStorage.von = true;
            sessionStorage.removeItem("dummy")
        }
    } catch (c) {
        f += tvj.dkd.wqh
    }
    if (!(b.style.MozTransform != undefined || b.style.WebkitTransform != undefined || b.style.OTransform != undefined || b.style.msTransform != undefined)) {
        f += tvj.dkd.dbs
    }
    try {
        if (window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
            window.AudioContext = webkitAudioContext;
            if (!AudioContext.prototype.hasOwnProperty("createGain")) {
                AudioContext.prototype.createGain = AudioContext.prototype.createGainNode
            }
            AudioContext.prototype.dsz = AudioContext.prototype.createBufferSource;
            AudioContext.prototype.createBufferSource = function() {
                var e = this.dsz();
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
            window.uhk = window.requestAnimationFrame;
            window.itn = window.cancelAnimationFrame || window.cancelRequestAnimationFrame
        }
        for (var a = 0; a < g.length && !window.uhk; ++a) {
            window.uhk = window[g[a] + "RequestAnimationFrame"];
            window.itn = window[g[a] + "CancelAnimationFrame"] || window[g[a] + "CancelRequestAnimationFrame"]
        }
        if (!window.uhk || !window.itn) {
            window.uhk = function(l, h) {
                var e = new Date().getTime();
                var j = Math.max(0, 16 - (e - d));
                var k = window.setTimeout(function() {
                    l(e + j)
                }, j);
                d = e + j;
                return k
            }
        }
        if (!window.itn) {
            window.itn = function(e) {
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
        console.error(c.exp)
    }
    return f
})();

function zab() {
    var a = {};
    this.vlx = 1;
    this.imf = 1;
    this.tzh = 0.6;
    this.wzi = 0.4;
    this.xpk = function() {};
    this.iyd = function(b, c) {
        a[b] = c
    };
    this.voi = function(b) {
        if (a[b]) {
            return a[b]
        } else {
            return this.vlx
        }
    }
}

function djy() {
    this.audio = {
        woo: 65,
        huo: -1,
        value: "A",
        osb: null
    };
    this.lzv = {
        woo: 70,
        huo: 122,
        value: "F",
        osb: "F11"
    };
    this.koc = {
        woo: 72,
        huo: -1,
        value: "H",
        osb: null
    };
    this.qjx = {
        woo: 83,
        huo: -1,
        value: "S",
        osb: null
    };
    this.flq = {
        woo: 68,
        huo: -1,
        value: "D",
        osb: null
    };
    this.ok = {
        woo: 13,
        huo: -1,
        value: "OK",
        osb: null
    };
    this.osc = [this.audio, this.lzv, this.koc, this.qjx, this.flq, this.ok]
}

function qqf() {
    var p = this;
    this.xjm = false;
    this.cvj = null;
    this.emh = false;
    this.ewn = false;
    var f = {};
    var h = {};
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
    this.xpk = function() {
        this.zbo();
        this.fpa();
        this.emh = false;
        this.ewn = false
    };
    this.zbo = function() {
        try {
            if (webAudioEngine == null) {
                webAudioEngine = new AudioContext()
            }
            this.cvj = webAudioEngine.createGain();
            this.cvj.connect(webAudioEngine.destination);
            this.xjm = true
        } catch (q) {
            this.xjm = false
        }
    };
    this.fpa = function() {
        m = tvj.slh.wgg()
    };
    this.lrw = function(q) {
        l = q
    };
    this.stw = function(q) {
        c = q
    };
    this.bmd = function(q) {
        n = q
    };
    this.qbt = function(u, t, q, r) {
        var s = new vcs(u);
        s.xpk(this.xjm, t, q, l.voi(u));
        h[u] = s;
        k.push(s);
        d.push({
            xhc: s,
            tsj: r,
            bux: p.ecz,
            mjj: m
        })
    };
    this.pnw = function(s, r) {
        var q = new Image();
        f[s] = q;
        d.push({
            xhc: q,
            tsj: r,
            bux: null
        })
    };
    this.pjv = function(r, q) {
        d.unshift({
            xhc: null,
            tsj: r,
            bux: p.kqi,
            ofu: q
        })
    };
    this.swl = function() {
        o = true;
        g = d.length;
        b = 0;
        while (d.length > 0) {
            p.jaq(d.shift())
        }
    };
    this.start = function() {
        if (!p.emh) {
            return
        }
        p.emh = false;
        o = false;
        g = d.length;
        b = 0;
        j = 1;
        for (var r = 0; r < j && d.length > 0; r++) {
            a.push(d.shift())
        }
        for (var q = 0; q < a.length; q++) {
            p.jaq(a.shift())
        }
    };
    this.uvl = function() {
        b++;
        if (p.ynj()) {
            p.emh = true;
            tvj.cdg.ajp()
        }
    };
    this.iow = function() {
        p.zjf()
    };
    this.ext = function() {
        p.ewn = true;
        p.zjf()
    };
    this.zjf = function() {
        b++;
        p.tqb();
        if (p.ynj()) {
            p.fek()
        } else {
            p.bqf()
        }
    };
    this.tqb = function() {
        var q = tvj.cdg.afx.mmc("loading");
        e = Math.round(100 * b / g);
        if (e < 100) {
            if (q) {
                q.mdb(e)
            }
        }
    };
    this.fek = function() {
        var s = tvj.cdg.afx.mmc("loading");
        if (p.ewn) {
            tvj.cdg.bgp(tvj.cdg.language.jey);
            var q = confirm(tvj.cdg.language.lnn);
            if (q == true) {
                tvj.cdg.zvu = false;
                p.hzd();
                tvj.cdg.hiu()
            } else {
                setTimeout(tvj.cdg.wji, 1000)
            }
        } else {
            if (!tvj.cdg.ipy) {
                e = 100;
                if (s) {
                    s.mdb(e)
                }
                if (c === true) {
                    if (n === true) {
                        s.zfp((tvj.cdg.ojz() === true) ? tvj.cdg.language.hds : tvj.cdg.language.qmf, tvj.cdg.xbq.ire("device_info"))
                    } else {
                        s.zfp(tvj.cdg.language.wff, null)
                    }
                } else {
                    setTimeout(tvj.cdg.hiu, 200)
                }
            }
        }
    };
    this.gev = function() {
        return e
    };
    this.bqf = function() {
        if (d.length > 0) {
            a.push(d.shift());
            if (j === 1 && (a[0].xhc instanceof Image || a[0].xhc instanceof vcs)) {
                j = 30;
                for (var q = 0; q < j && d.length > 0; q++) {
                    a.push(d.shift())
                }
            }
        } else {}
        if (a.length > 0) {
            p.jaq(a.shift())
        }
    };
    this.ynj = function() {
        return (g > 0 && b == g)
    };
    this.jaq = function(q) {
        if (q.xhc instanceof Image) {
            if (o === true) {
                this.ppc(q.xhc, q.tsj)
            } else {
                this.ile(q.xhc, q.tsj)
            }
        } else {
            if (q.xhc instanceof vcs) {
                this.kes(q.xhc, q.tsj, q.bux, q.mjj)
            } else {
                this.cpx(q.tsj, q.ofu, q.bux)
            }
        }
    };
    this.ppc = function(r, q) {
        r.onload = function() {
            tvj.cdg.xbq.uvl()
        };
        r.onerror = function() {
            console.error("can not load image " + q)
        };
        r.src = q + "?v=" + tvj.cdg.vyg
    };
    this.ile = function(r, q) {
        r.onload = function() {
            tvj.cdg.xbq.iow()
        };
        r.onerror = function() {
            console.error("can not load image " + q);
            tvj.cdg.bgp(tvj.cdg.language.ozo);
            setTimeout(tvj.cdg.wji, 3000)
        };
        r.src = q + "?v=" + tvj.cdg.vyg
    };
    this.kes = function(r, s, t, q) {
        r.load(s, t, q)
    };
    this.cpx = function(t, q, u) {
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
            tvj.cdg.bgp(tvj.cdg.language.ozo);
            setTimeout(tvj.cdg.wji, 3000)
        };
        try {
            r.send()
        } catch (s) {
            console.error("can not load from " + t + q);
            tvj.cdg.bgp(tvj.cdg.language.ozo);
            setTimeout(tvj.cdg.wji, 3000)
        }
    };
    this.ecz = function(r, q) {
        h[r].iur = q
    };
    this.kqi = function(s, r) {
        var q = new Image();
        q.onload = function() {
            p.kst(q, r.data)
        };
        q.onerror = function() {
            console.error("can not load image " + s + r.src);
            tvj.cdg.bgp(tvj.cdg.language.ozo);
            setTimeout(tvj.cdg.wji, 3000)
        };
        q.src = s + r.src + "?v=" + tvj.cdg.vyg
    };
    this.kst = function(s, v) {
        var t = null,
            r = null;
        for (var u = 0, q = v.length; u < q; u++) {
            t = document.createElement("canvas");
            t.width = v[u].rect.w;
            t.height = v[u].rect.h;
            r = t.getContext("2d");
            r.drawImage(s, v[u].rect.x, v[u].rect.y, v[u].rect.w, v[u].rect.h, 0, 0, v[u].rect.w, v[u].rect.h);
            p.nkk(v[u].id, t)
        }
        tvj.cdg.xbq.iow()
    };
    this.xhq = function(q) {
        if (h && h[q]) {
            return h[q]
        } else {}
        return null
    };
    this.nkk = function(r, q) {
        if (q && !f[r]) {
            f[r] = q
        } else {}
        return null
    };
    this.ire = function(q) {
        if (f[q]) {
            return f[q]
        } else {}
        return null
    };
    this.tuq = function(q) {
        if (!h) {
            return 0
        }
        var r = 0,
            s = true;
        while (s) {
            if (h[q + r]) {
                r++
            } else {
                s = false
            }
        }
        return r
    };
    this.apw = function(q) {
        if (!f) {
            return 0
        }
        var r = 0,
            s = true;
        while (s) {
            if (f[q + r]) {
                r++
            } else {
                s = false
            }
        }
        return r
    };
    this.ruf = function(s, r, q) {
        if (h && h[s]) {
            h[s].play(r, q)
        } else {}
    };
    this.loh = function(q) {
        if (h && h[q]) {
            h[q].stop()
        } else {}
    };
    this.erf = function(r, q) {
        if (h && h[r]) {
            h[r].veb(q)
        } else {}
    };
    this.nvj = function(t, r, s, q) {
        q = (q != null && q === true);
        if (h && h[t]) {
            h[t].gzg(l.voi(t) * r, s, q)
        }
    };
    this.aes = function(r, q) {
        if (h && h[r]) {
            h[r].aes(q)
        }
    };
    this.rqg = function(q) {
        if (h && h[q]) {
            return h[q].igo()
        }
        return 0
    };
    this.lci = function(q) {
        if (this.xjm) {
            this.cvj.gain.value = q
        }
    };
    this.tpa = function(r) {
        if (this.xjm) {
            this.cvj.gain.value = (r) ? 0 : 1
        } else {
            if (k) {
                for (var q = 0; q < k.length; q++) {
                    k[q].veb(r)
                }
            }
        }
    };
    this.hzd = function() {
        if (k) {
            for (var q = 0; q < k.length; q++) {
                k[q].uyd()
            }
        }
        k = null;
        h = null
    }
}

function lts() {
    this.jyw = {};
    this.bom = {};
    this.jiz = [];
    this.xpk = function() {
        this.jyw = {};
        this.bom = {};
        this.jiz = []
    };
    this.yhs = function(b) {
        this.jyw[b] = b
    };
    this.zxg = function(f, e, d) {
        this.bom[f] = e;
        this.bom[f].kfv = [];
        if (d && this.jyw) {
            for (var c = 0, b = d.length; c < b; c++) {
                if (this.jyw[d[c]]) {
                    this.bom[f].kfv.push(d[c])
                } else {}
            }
        }
        this.jiz.push(this.bom[f])
    };
    this.kub = function() {
        var c = [];
        for (var d = 0, b = this.jiz.length; d < b; d++) {
            if (this.jiz[d] != null) {
                c.push(this.jiz[d])
            }
        }
        return c
    };
    this.mmc = function(b) {
        if (this.bom && this.bom[b]) {
            return this.bom[b]
        }
        return null
    };
    this.lkr = function(g) {
        if (this.jyw && this.jyw[g]) {
            var d = [];
            for (var f = 0, b = this.jiz.length; f < b; f++) {
                for (var e = 0, c = this.jiz[f].kfv.length; e < c; e++) {
                    if (this.jiz[f].kfv[e] == g) {
                        d.push(this.jiz[f])
                    }
                }
            }
            return d
        }
        return []
    };
    this.hwj = function() {
        return this.jyw
    };
    this.agn = function(e) {
        var d = -1;
        if (this.bom && this.bom[e]) {
            for (var c = 0, b = this.jiz.length; c < b; c++) {
                if (this.jiz[c] == this.bom[e]) {
                    d = c;
                    this.bom[e] = null
                }
            }
        }
        if (d >= 0) {
            this.jiz.splice(d, 1)
        }
    };
    this.aup = function(f) {
        if (this.jyw && this.jyw[f]) {
            this.jyw[f] = null;
            for (var e = 0, b = this.jiz.length; e < b; e++) {
                for (var d = 0, c = this.jiz[e].kfv.length; d < c; d++) {
                    if (this.jiz[e].kfv[d] == f) {
                        this.jiz[e].kfv.splice(d, 1)
                    }
                }
            }
        }
    };
    this.tew = function(e, d, c, b) {
        return a(this.mmc(e), d, c, b)
    };
    this.owh = function(f, d, c) {
        for (var e = 0, b = this.jiz.length; e < b; e++) {
            a(this.jiz[e], f, d, c)
        }
    };
    this.knk = function(h, k, f, e) {
        if (this.jyw && this.jyw[h]) {
            for (var g = 0, b = this.jiz.length; g < b; g++) {
                for (var d = 0, c = this.jiz[g].kfv.length; d < c; d++) {
                    if (this.jiz[g].kfv[d] == h) {
                        a(this.jiz[g], k, f, e)
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

function vcs(b) {
    var a = this;
    this.gyx = null;
    this.loop = false;
    this.muted = false;
    this.volume = 1;
    this.id = b;
    this.lgh = false;
    this.iur = null;
    this.qaq = null;
    this.tyd = 0;
    this.qml = 0;
    this.unz = 0;
    this.nxa = 0;
    this.euz = 30000;
    this.wjt = "";
    this.zec = "";
    this.nja = "";
    this.zga = null;
    this.nph = 1;
    this.sjc = 0;
    this.kgy = -1;
    this.slz = 0;
    this.smi = 0;
    this.yxs = false;
    this.xpk = function(c, f, d, e) {
        this.lgh = c;
        if (e) {
            this.nph = e;
            this.volume = e
        }
        if (f) {
            this.gyx = f
        }
        if (d) {
            this.loop = d
        }
    };
    this.play = function(d, c) {
        if (typeof d == "undefined") {
            d = 0
        }
        if (typeof c == "undefined") {
            c = 1
        }
        if (this.lgh) {
            clearTimeout(this.kgy);
            if (this.iur) {
                this.volume = this.nph;
                this.yxs = false;
                this.qaq = webAudioEngine.createBufferSource();
                this.qaq.buffer = this.iur;
                this.qaq.loop = this.loop;
                this.qaq.playbackRate.value = c;
                this.tyd = webAudioEngine.createGain();
                this.tyd.gain.linearRampToValueAtTime((this.muted === true) ? 0 : tvj.wxo.value40 * this.volume, webAudioEngine.currentTime);
                this.qaq.connect(this.tyd);
                this.tyd.connect(tvj.cdg.xbq.cvj);
                this.qaq.start(0, d);
                this.sjc = webAudioEngine.currentTime;
                if (this.gyx) {
                    this.qml = setTimeout(a.gyx, a.iur.duration * 1000)
                }
            }
        } else {
            if (this.qaq) {
                if (this.loop) {
                    if (tvj.slh.nqk != tvj.aox.rer && tvj.slh.nqk != tvj.aox.vhu) {
                        this.unz = setInterval(a.lzk, a.qaq.duration * 1000)
                    }
                }
                this.qaq.currentTime = 0;
                this.qaq.play()
            }
        }
    };
    this.lzk = function() {
        if (!a.qaq.paused || (tvj.slh.nqk != tvj.aox.cva && tvj.slh.nqk != tvj.aox.kzq)) {
            a.qaq.currentTime = 0
        }
    };
    this.stop = function() {
        if (a) {
            if (a.lgh) {
                a.sjc = 0;
                if (a.qaq) {
                    a.qaq.stop(0);
                    a.qaq = null
                }
                clearTimeout(a.qml);
                if (a.kgy >= 0) {
                    clearTimeout(a.kgy);
                    a.kgy = -1
                }
            } else {
                if (a.qaq) {
                    a.qaq.currentTime = 0;
                    a.qaq.pause();
                    clearInterval(a.unz);
                    if (a.kgy >= 0) {
                        clearTimeout(a.kgy);
                        a.kgy = -1
                    }
                }
            }
        }
    };
    this.load = function(e, c, d) {
        this.wjt = d[0];
        if (d.length >= 2) {
            this.zec = d[1];
            this.nja = e;
            this.zga = c
        }
        e += this.wjt + "?v=" + tvj.cdg.vyg;
        if (this.lgh) {
            this.uiz(e, c)
        } else {
            this.win(e)
        }
    };
    this.ihd = function() {
        if (this.lgh) {
            this.uiz(this.nja + this.zec + "?v=" + tvj.cdg.vyg, this.zga)
        }
    };
    this.win = function(c) {
        this.qaq = new Audio();
        this.nxa = setTimeout(function() {
            console.error("can not load audio " + c);
            tvj.cdg.xbq.ext()
        }, this.euz);
        this.qaq.addEventListener("canplaythrough", function() {
            this.removeEventListener("canplaythrough", arguments.callee, false);
            clearTimeout(a.nxa);
            tvj.cdg.xbq.iow();
            a.vsw()
        }, false);
        this.qaq.addEventListener("error", function() {
            clearTimeout(a.nxa);
            console.error("can not load audio " + c);
            tvj.cdg.xbq.ext()
        }, false);
        this.qaq.volume = tvj.wxo.value40 * this.volume;
        this.qaq.src = c;
        this.qaq.load()
    };
    this.uiz = function(f, g) {
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
                tvj.cdg.xbq.iow()
            }, function() {
                a.cqx("can not decode audio ", f)
            })
        };
        c.onerror = function() {
            a.cqx("can not load audio ", f)
        };
        try {
            c.send()
        } catch (d) {
            a.cqx("can not load audio from ", f)
        }
    };
    this.cqx = function(d, c) {
        console.error(d + c);
        if (a.zec != "" && c.indexOf(a.zec) < 0) {
            a.ihd()
        } else {
            tvj.cdg.xbq.ext()
        }
    };
    this.skt = function(c) {
        this.gyx = c;
        this.vsw()
    };
    this.vsw = function() {
        if (!this.lgh) {
            if (this.gyx) {
                if (this.qaq) {
                    this.qaq.addEventListener("ended", function() {
                        a.gyx()
                    }, false)
                }
            }
            if (tvj.slh.nqk == tvj.aox.rer || tvj.slh.nqk == tvj.aox.vhu) {
                if (this.loop) {
                    if (this.qaq) {
                        this.qaq.addEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.ldo = function() {
        if (!this.khz) {
            if (this.gyx) {
                if (this.qaq) {
                    this.qaq.removeEventListener("ended", function() {
                        a.gyx()
                    }, false)
                }
            }
            if (tvj.slh.nqk == tvj.aox.rer || tvj.slh.nqk == tvj.aox.vhu) {
                if (this.loop) {
                    if (this.qaq) {
                        this.qaq.removeEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.aes = function(c) {
        if (this.lgh && this.qaq && c) {
            this.qaq.playbackRate.value = c
        }
    };
    this.gzg = function(d, e, c) {
        if (this.lgh === true && this.tyd) {
            this.volume = (this.muted === true) ? 0 : tvj.wxo.value40 * d;
            if (e > 0) {
                this.tyd.gain.linearRampToValueAtTime(this.tyd.gain.value, webAudioEngine.currentTime);
                this.tyd.gain.linearRampToValueAtTime(this.volume, webAudioEngine.currentTime + (e / 1000))
            } else {
                this.tyd.gain.linearRampToValueAtTime(this.volume, webAudioEngine.currentTime)
            }
            if (c === true) {
                this.kgy = setTimeout(this.stop, e)
            }
        } else {
            if (!this.lgh && c === true) {
                this.kgy = setTimeout(this.stop, e)
            }
        }
    };
    this.veb = function(c) {
        this.muted = c;
        if (!this.lgh) {
            if (this.qaq && this.qaq.readyState > 0) {
                this.qaq.muted = c
            }
        } else {
            if (this.tyd) {
                this.tyd.gain.linearRampToValueAtTime((this.muted === true) ? 0 : tvj.wxo.value40 * this.volume, webAudioEngine.currentTime)
            }
        }
    };
    this.uyd = function() {
        if (this.lgh) {
            if (this.qaq) {
                this.qaq.stop(0);
                clearTimeout(this.qml);
                this.qaq = null
            }
        } else {
            if (this.qaq && this.qaq.readyState > 0) {
                this.qaq.currentTime = 0;
                this.qaq.pause();
                if (this.gyx) {
                    this.ldo(this.gyx)
                }
                this.qaq = null
            }
        }
    };
    this.igo = function() {
        if (this.lgh && this.sjc > 0) {
            return (webAudioEngine.currentTime - this.sjc) % this.iur.duration
        }
        return 0
    }
}

function osr() {
    var a = null;
    this.jpx = "";
    var b = null;
    this.connect = function(c) {
        a = this;
        this.jpx = c;
        b = new WebSocket(this.jpx);
        b.onopen = function(d) {
            a.sky(d)
        };
        b.onclose = function(d) {
            a.eir(d)
        };
        b.onmessage = function(d) {
            a.ilw(d)
        };
        b.onerror = function(d) {
            a.znn(d)
        }
    };
    this.lez = function(c) {};
    this.hxg = function(c) {
        b.send(c)
    };
    this.sky = function(c) {
        this.hxg("A/u25vlt")
    };
    this.eir = function(c) {};
    this.ilw = function(c) {
        this.lez(c.data)
    };
    this.znn = function(c) {}
}

function prx() {
    var b = null;
    this.vdt = null;
    this.nks = 0;
    this.kml = -1;
    this.exp = -1;
    this.ggc = -1;
    this.pml = 0;
    this.jpx = "";
    this.iqq = "";
    this.qre = "";
    this.ylr = "";
    this.bdh = "";
    this.vyg = "";
    this.fva = "";
    this.vna = "";
    this.ifj = [];
    var g = false;
    var a = false;
    var d = false;
    var f = false;
    var c = null;
    var e = 1;
    this.xpk = function(h) {
        this.vdt = h;
        b = this;
        g = false;
        a = false;
        d = false;
        f = false;
        c = new WebSocket(this.jpx);
        c.onopen = function(j) {
            b.sky(j)
        };
        c.onclose = function(j) {
            b.eir(j)
        };
        c.onmessage = function(j) {
            b.ilw(j)
        };
        c.onerror = function(j) {
            b.znn(j)
        }
    };
    this.pyd = function(h) {
        var j = parseInt(h.charAt(this.pml), 16);
        this.pml++;
        return j
    };
    this.vsb = function(h) {
        var k = 0;
        var j = h.charAt(this.pml);
        j += h.charAt(this.pml + 1);
        this.pml += 2;
        k = parseInt(j, 16);
        return k
    };
    this.zxm = function(k) {
        var h = this.aws(k);
        var m = [];
        for (var j = 0; j < h; j++) {
            m[j] = parseInt(k.charAt(this.pml), 16);
            this.pml += 1
        }
        return m
    };
    this.aws = function(m) {
        var k = 0;
        var h = parseInt(m.charAt(this.pml), 16);
        this.pml++;
        var n = "";
        for (var j = 0; j < h; j++) {
            n += m.charAt(this.pml);
            this.pml += 1
        }
        k = parseInt(n, 16);
        return k
    };
    this.wrt = function(h) {
        var j = "";
        if (this.pml < h.length) {
            j = h.substring(this.pml, h.length)
        }
        return j
    };
    this.lez = function(h) {};
    this.rhk = function(o) {
        var p = o.substr(0, 2),
            k = o.substring(2),
            n = [],
            j = [],
            l = null;
        if (k && k.length > 0) {
            if (p === tvj.idd.ciu.xre || p === tvj.idd.ciu.csq) {
                n = k.split("|");
                for (var m = 0, h = n.length; m < h; m++) {
                    j = n[m].split(":");
                    if (p === tvj.idd.ciu.xre && j.length >= 3) {
                        this.ifj[m] = {
                            kpr: j[0],
                            value: Number(j[1]),
                            szr: j[2]
                        };
                        if (j.length >= 5) {
                            this.ifj[m].oxk = j[3];
                            this.ifj[m].rqk = j[4]
                        }
                    } else {
                        if (p === tvj.idd.ciu.csq && j.length >= 2) {
                            for (var m = 0, h = this.ifj.length; m < h; m++) {
                                if (this.ifj[m].kpr === j[0]) {
                                    this.ifj[m].value = Number(j[1])
                                }
                            }
                        }
                    }
                }
                if (p === tvj.idd.ciu.csq) {
                    this.vdt.vho(this.ifj)
                }
            } else {
                if (p === tvj.idd.ciu.gsa) {
                    j = k.split(":");
                    if (j.length >= 3) {
                        l = {
                            kpr: j[0],
                            value: Number(j[1]),
                            bex: Number(j[2])
                        };
                        if (j.length >= 5) {
                            l.iqq = j[3];
                            l.hwp = j[4]
                        }
                        this.vdt.rpp(l)
                    }
                }
            }
        }
    };
    this.close = function() {
        g = true;
        if (c.readyState >= 2) {
            b.vdt.mgv.oje()
        } else {
            b.hxg("A/u260");
            if (tvj.wxo.value66 > 0) {
                setTimeout(b.mjk, tvj.wxo.value66)
            }
        }
    };
    this.zer = function(h) {
        if (this.vdt.mgv.elf) {
            setTimeout(function() {
                window.location.reload()
            }, h)
        } else {
            this.vdt.mgv.wga(e);
            setTimeout(function() {
                if (e < tvj.wxo.value46) {
                    b.vdt.mgv.connect();
                    e++
                } else {
                    b.vdt.mgv.trv()
                }
            }, h)
        }
    };
    this.zar = function() {
        return g
    };
    this.sty = function() {
        g = true;
        d = true;
        this.hxg("A/u260");
        if (tvj.wxo.value66 > 0) {
            setTimeout(this.mjk, tvj.wxo.value66)
        }
    };
    this.hin = function() {
        g = true;
        f = true;
        this.hxg("A/u260");
        if (tvj.wxo.value66 > 0) {
            setTimeout(this.mjk, tvj.wxo.value66)
        }
    };
    this.sky = function(h) {
        var j = -(new Date().getTimezoneOffset() / 60),
            l = window.navigator.userLanguage || window.navigator.language,
            k = (tvj.cdg) ? tvj.slh.nqk + "|" + tvj.cdg.jgb + "|" + j + "|" + l : "";
        a = false;
        this.vdt.psu();
        this.hxg("A/u25" + this.iqq + "," + this.qre + "," + this.ylr + "," + this.bdh + "," + this.vyg + "," + this.fva + "," + this.vna + "," + k)
    };
    this.eir = function(h) {
        if (a) {
            return
        }
        a = true;
        if (!g) {
            if (tvj.slh.nqk == tvj.aox.igp || tvj.slh.nqk == tvj.aox.sng) {
                setTimeout(b.lft, 500)
            } else {
                this.vdt.jrr()
            }
        } else {
            if (d) {
                if (tvj.wxo.value13 == true) {
                    this.vdt.mgv.ttc()
                } else {
                    this.vdt.mgv.jmr()
                }
            } else {
                if (f) {
                    this.vdt.mgv.wxq()
                } else {
                    this.vdt.mgv.wji()
                }
            }
        }
    };
    this.ilw = function(h) {
        this.lez(h.data)
    };
    this.znn = function(h) {};
    this.hxg = function(h) {
        if (c.readyState >= 2) {
            this.eir()
        }
        this.nks = 0;
		var tmpPar=':::{"gameData":"'+h+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"LightingHotAM"}';h=tmpPar;
        c.send(h)
    };
    this.lft = function() {
        b.vdt.jrr()
    };
    this.mjk = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.eir()
    }
}

function tjm() {
    this.mgv = null;
    this.doy = null;
    this.jpx = "";
    this.iqq = "";
    this.qre = "";
    this.ylr = "";
    this.bdh = "";
    this.fva = "";
    this.vna = "";
    this.psu = function() {};
    this.ilw = function(a) {
        this.mgv.mah(a)
    };
    this.wrg = function() {};
    this.jrr = function() {
        if (sessionStorage.sessionActive) {
            return
        }
        if (this.mgv != null && !this.doy.zar()) {
            this.mgv.uug("Can not connect to gaming server!", true)
        }
    };
    this.znn = function(a) {
        if (this.doy.nks == 1 && a.toLowerCase().indexOf("active") == 0) {
            sessionStorage.sessionActive = true
        }
        if (this.mgv != null) {
            this.mgv.uug(a, true)
        }
    };
    this.zer = function(a) {
        this.doy.zer(a)
    };
    this.wie = function() {
        this.mgv.kgm(this.doy.bex)
    };
    this.vho = function(a) {
        this.mgv.vho(a)
    };
    this.rpp = function(a) {
        this.mgv.rpp(a)
    };
    this.zrm = function() {}
}

function tec() {
    var b = null;
    this.mgv = null;
    this.jpx = "";
    this.iqq = "";
    this.qre = "";
    this.ylr = "";
    this.bdh = "";
    this.vyg = " ";
    var c = null;
    var e = false;
    var a = false;
    var d = "StatsServer";
    this.afg = true;
    this.hsf = false;
    this.key = false;
    this.pml = 0;
    this.jea = 0;
    this.yzh = 0;
    this.oac = 0;
    this.owe = 0;
    this.xpk = function(f, g) {
        this.jpx = g;
        this.mgv = f;
        this.key = false;
        return this
    };
    this.connect = function(g, j, h, k, f, l) {
        b = this;
        e = false;
        a = false;
        this.iqq = j;
        this.qre = h;
        this.ylr = k;
        this.bdh = g;
        this.vyg = f;
        this.afg = true;
        this.hsf = l;
        c = new WebSocket(this.jpx);
        c.onopen = function(m) {
            b.sky(m)
        };
        c.onclose = function(m) {
            b.eir(m)
        };
        c.onmessage = function(m) {
            b.ilw(m)
        };
        c.onerror = function(m) {
            b.znn(m)
        }
    };
    this.pyd = function(f) {
        var g = parseInt(f.charAt(this.pml), 16);
        this.pml++;
        return g
    };
    this.aws = function(j) {
        var h = 0;
        var f = parseInt(j.charAt(this.pml), 16);
        this.pml++;
        var k = "";
        for (var g = 0; g < f; g++) {
            k += j.charAt(this.pml);
            this.pml += 1
        }
        h = parseInt(k, 16);
        return h
    };
    this.lez = function(h) {
        var k = this.mgv.afx.mmc("stats");
        if (h != null && h != "null" && h) {
            if (h == "010101010101010") {
                this.kkp()
            } else {
                this.pml = 0;
                this.ggc = this.pyd(h);
                if (this.ggc == 0) {
                    var j = [];
                    j[0] = this.aws(h);
                    j[1] = this.aws(h);
                    j[2] = this.aws(h);
                    j[3] = this.aws(h);
                    j[4] = this.aws(h);
                    j[5] = this.aws(h);
                    j[6] = this.aws(h);
                    if (tvj.wxo.value36) {
                        this.yzh = j[0];
                        this.oac = j[1];
                        this.owe = j[2]
                    } else {
                        if (tvj.wxo.value37) {
                            var g = tvj.wxo.value39;
                            var f = j[4];
                            f = (g <= f) ? (this.hsf) ? 100 : g * 60000 : (g - f) * 60000;
                            this.jea = j[3] * 60000;
                            this.oac = j[5];
                            this.owe = j[6];
                            this.mgv.ckh(f);
                            if (!this.key) {
                                this.key = true;
                                this.mgv.rha(j[3] * 60000)
                            }
                            if (this.hsf) {
                                this.close(false)
                            }
                        }
                    }
                    if (!this.hsf) {
                        if (k) {
                            k.svt(this.yzh, this.oac, this.owe, this.jea)
                        }
                    }
                } else {
                    console.error("Statistic error: " + h);
                    if (!this.hsf) {
                        if (k) {
                            k.svt(0, 0, 0, 0)
                        }
                    }
                }
            }
        } else {
            console.error("no statistic data")
        }
    };
    this.kkp = function() {
        this.hxg("A/u270," + this.bdh)
    };
    this.hxg = function(f) {
        if (c && !e) {
            this.nks = 0;
            c.send(f)
        }
    };
    this.close = function(f) {
        this.afg = f;
        if (c && c.readyState >= 2) {
            if (this.mgv && this.afg) {
                this.mgv.afg()
            }
        } else {
            this.hxg("A/u260");
            if (tvj.wxo.value66 > 0) {
                setTimeout(this.mjk, tvj.wxo.value66)
            }
        }
        e = true
    };
    this.sky = function(f) {
        a = false;
        this.hxg("A/u25" + this.iqq + "," + this.qre + "," + this.ylr + "," + d + "," + this.vyg)
    };
    this.eir = function(f) {
        if (a) {
            return
        }
        a = true;
        if (!e) {} else {
            if (!this.hsf) {
                if (this.mgv && this.afg) {
                    this.mgv.afg()
                }
            }
        }
    };
    this.ilw = function(f) {
        this.lez(f.data)
    };
    this.znn = function(f) {};
    this.mjk = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.eir()
    }
}

function mfo(a, d, b, c) {
    this.x = a || 0;
    this.y = d || 0;
    this.width = b || 0;
    this.height = c || 0;
    this.ror = function() {
        return this.x + this.width
    };
    this.xot = function() {
        return this.y + this.height
    };
    this.kqu = function() {
        return this.x + this.width / 2
    };
    this.oet = function() {
        return this.y + this.height / 2
    };
    this.kjq = function(e, f) {
        if (e >= this.x && e <= this.x + this.width && f >= this.y && f <= this.y + this.height) {
            return true
        }
        return false
    };
    this.vzv = function(f, e) {
        this.x = Math.round(this.x * f);
        this.y = Math.round(this.y * e);
        this.width = Math.round(this.width * f);
        this.height = Math.round(this.height * e)
    }
}

function lmb() {
    this.nqk = -1;
    this.rbf = -1;
    this.xxa = false;
    this.gvj = false;
    this.evd = false;
    this.xdk = false;
    this.aoz = false;
    this.cfb = false;
    this.pdt = false;
    this.dfr = false;
    this.dpm = false;
    this.gtq = true;
    this.ndg = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Ama_Android") >= 0) {
            this.xxa = true;
            this.evd = true;
            this.nqk = tvj.aox.cva
        } else {
            if (a.indexOf("Edge") >= 0) {
                if (a.indexOf("Phone") >= 0) {
                    this.evd = true
                }
                this.nqk = tvj.aox.kof
            } else {
                if (a.indexOf("Chrome") >= 0) {
                    if (a.indexOf("Android") >= 0) {
                        if (a.indexOf("OPR") >= 0) {
                            this.nqk = tvj.aox.hkx
                        } else {
                            this.nqk = tvj.aox.kzq
                        }
                        this.evd = true
                    } else {
                        this.nqk = tvj.aox.cva
                    }
                } else {
                    if (a.indexOf("Safari") >= 0) {
                        if (a.indexOf("Mobile") >= 0) {
                            if (a.indexOf("Android") >= 0) {
                                this.nqk = tvj.aox.idv;
                                this.evd = true
                            } else {
                                this.nqk = tvj.aox.myt;
                                this.evd = true;
                                if (a.indexOf("7.0 Mobile") >= 0) {
                                    if (a.indexOf("iPad") >= 0) {
                                        this.aoz = true
                                    }
                                } else {
                                    if (a.indexOf("8.0 Mobile") >= 0) {
                                        this.xdk = true;
                                        this.ort = true
                                    } else {
                                        if (a.indexOf("9.0 Mobile") >= 0) {
                                            this.xdk = true;
                                            this.hkv = true
                                        } else {
                                            if (a.indexOf("10.0 Mobile") >= 0) {
                                                this.xdk = true;
                                                this.cvi = true
                                            } else {
                                                if (a.indexOf("OS 9_") >= 0 || a.indexOf("OS 10_") >= 0) {
                                                    this.xdk = true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            this.nqk = tvj.aox.bvy
                        }
                    } else {
                        if (a.indexOf("Opera") >= 0) {
                            this.nqk = tvj.aox.eye
                        } else {
                            if (a.indexOf("MSIE") >= 0 || a.indexOf("Trident/7") >= 0) {
                                if (a.indexOf("IEMobile/10") >= 0) {
                                    this.nqk = tvj.aox.rkj;
                                    this.evd = true
                                } else {
                                    if (window.innerHeight >= window.outerHeight) {
                                        this.nqk = tvj.aox.vhu;
                                        this.evd = true
                                    } else {
                                        if (a.indexOf("Trident/7") >= 0 && a.indexOf("Tablet PC") >= 0) {
                                            this.nqk = tvj.aox.vhu;
                                            this.evd = true
                                        } else {
                                            this.nqk = tvj.aox.rer
                                        }
                                    }
                                }
                            } else {
                                if (a.indexOf("iPad") >= 0) {
                                    this.nqk = tvj.aox.myt;
                                    this.gvj = true;
                                    this.evd = true
                                } else {
                                    if (a.indexOf("iPhone") >= 0) {
                                        this.nqk = tvj.aox.myt;
                                        this.gvj = true;
                                        this.evd = true
                                    } else {
                                        if (a.indexOf("Android") >= 0) {
                                            this.nqk = tvj.aox.sng;
                                            this.evd = true
                                        } else {
                                            this.nqk = tvj.aox.igp
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
    this.jgz = function() {
        var a = navigator.language.split("")[0];
        return a
    };
    this.aoa = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Win") >= 0) {
            this.rbf = tvj.os.rzw;
            if (a.indexOf("NT 5.1") >= 0 || a.indexOf("NT 5.2") >= 0) {
                this.dpm = true
            }
        } else {
            if (a.indexOf("iPhone") >= 0 || a.indexOf("iPad") >= 0) {
                this.rbf = tvj.os.zag
            } else {
                if (a.indexOf("Mac") >= 0) {
                    this.rbf = tvj.os.gei
                } else {
                    if (a.indexOf("Android") >= 0) {
                        this.rbf = tvj.os.wok;
                        if (a.indexOf("Android 4.0") >= 0 || a.indexOf("Android 4.1") >= 0 || a.indexOf("Android 4.2") >= 0 || a.indexOf("Android 4.3") >= 0) {
                            this.gtq = false
                        }
                    } else {
                        if (a.indexOf("Linux") >= 0) {
                            this.rbf = tvj.os.olq
                        }
                    }
                }
            }
        }
    };
    this.frv = function() {
        return this.aoz
    };
    this.ucg = function() {
        return (this.ort || this.hkv || this.cvi)
    };
    this.qwg = function() {
        return this.xdk
    };
    this.ada = function() {
        try {
            return window.self !== window.top
        } catch (a) {
            return true
        }
    };
    this.ddd = function() {
        return (document.documentElement.requestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullscreen)
    };
    this.aym = function() {
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
    this.mqc = function() {
        return (this.ecu() === true)
    };
    this.ecu = function() {
        if (tvj.wxo.value73 > 0 && screen.width < tvj.wxo.value73 && screen.height < tvj.wxo.value73) {
            return true
        }
        return false
    };
    this.khn = function(h, j, k, n, e, b, f, l, m, a, d, g) {
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
        if (h.style.MozTransform != undefined) {
            h.style.MozTransform = c
        } else {
            if (h.style.WebkitTransform != undefined) {
                h.style.WebkitTransform = c
            } else {
                if (h.style.OTransform != undefined) {
                    h.style.OTransform = c
                } else {
                    if (h.style.msTransform != undefined) {
                        h.style.msTransform = c
                    }
                }
            }
        }
    };
    this.zov = function() {
        return (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
    };
    this.rlu = function() {
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
    this.yxu = function() {
        try {
            if (screen.orientation && screen.orientation.lock && screen.orientation.unlock) {
                return true
            }
        } catch (a) {
            return false
        }
        return false
    };
    this.xil = function(b) {
        try {
            if (this.yxu() === true) {
                screen.orientation.lock(b)
            }
        } catch (a) {}
    };
    this.haq = function() {
        try {
            if (this.yxu() === true) {
                screen.orientation.unlock()
            }
        } catch (a) {}
    };
    this.ksk = function() {
        return false
    };
    this.wgg = function() {
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
    this.edu = function(q, o, f, l, k, a, p, d, r, g, n, j) {
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
        } catch (h) {
            console.error(h)
        }
    };
    this.iuq = function(q, o, f, l, k, a, p, d, s, g, r, n, j) {
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
        } catch (h) {
            console.error(h)
        }
    };
    this.wpo = function(q, o, f, l, k, a, p, d, s, g, r, n, j) {
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
        } catch (h) {
            console.error(h)
        }
    };
    this.hng = function(q, l, s, j, h, p, o, m, c, d, t, b, v, r) {
        try {
            var k = 0,
                C = 0,
                D = 0,
                a = 0,
                g = [],
                f = "",
                B = 0,
                E = 0,
                z = 0,
                F = 1;
            var n = c;
            if (!d) {
                d = ""
            }
            if (!t) {
                t = "left"
            }
            q.save();
            q.textAlign = t;
            q.textBaseline = "bottom";
            q.fillStyle = s;
            q.font = d + " " + n + "px " + m;
            a = q.measureText(l).width / p;
            a = (a >= Math.round(a)) ? Math.round(a) + 1 : Math.round(a);
            if (n * a > o) {
                F = o / (n * a);
                n = Math.round(F * n) - 1;
                q.font = d + " " + n + "px " + m;
                a = q.measureText(l).width / p;
                a = (a > Math.round(a)) ? Math.round(a) + 1 : Math.round(a)
            }
            for (var u = z; u < l.length; u++) {
                f += l.charAt(u);
                k = q.measureText(f).width;
                if (l.charAt(u) == " " || l.charAt(u) == "|") {
                    B = u
                }
                if (u == l.length - 1) {
                    g[E] = l.substring(z, l.length)
                } else {
                    if (l.charAt(u) == "|") {
                        g[E] = l.substring(z, u);
                        E++;
                        z = u + 1;
                        f = l.substring(B + 1, u)
                    } else {
                        if (k >= p) {
                            g[E] = l.substring(z, B);
                            E++;
                            z = B + 1;
                            f = l.substring(B + 1, u)
                        }
                    }
                }
            }
            for (var u = 0; u < g.length; u++) {
                D = (t == "left") ? j : (t == "center") ? (j + p / 2) : j + p;
                if (b) {
                    C = h + (o + n) / (g.length + 1) * (u + 1)
                } else {
                    C = h + Math.round(n * 1.5 * (u + 1))
                }
                q.fillText(g[u], D, C);
                if (v && r) {
                    q.strokeStyle = v;
                    q.lineWidth = r;
                    q.strokeText(g[u], D, C)
                }
            }
            q.restore()
        } catch (A) {
            console.error(A)
        }
    };
    this.ryr = function(m, g, d, a, j, b, k, l, f) {
        try {
            var h = 0;
            m.save();
            if (l && f) {
                h = Math.round(f / 2);
                m.beginPath();
                m.moveTo(g + b + h, d + h);
                m.arcTo(g + a - h, d + h, g + a - h, d + b + h, b);
                m.arcTo(g + a - h, d + j - h, g + a - b - h, d + j - h, b);
                m.arcTo(g + h, d + j - h, g + h, d + j - b - h, b);
                m.arcTo(g + h, d + h, g + b + h, d + h, b);
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
    this.lml = function(n, h, f, a, k, c, m, b, l, g, o) {
        try {
            var j = 0;
            n.save();
            if (l && g) {
                j = Math.round(g / 2);
                n.beginPath();
                n.moveTo(h + c + j, f + j);
                n.arcTo(h + a - j, f + j, h + a - j, f + c + j, c);
                n.arcTo(h + a - j, f + k - j, h + a - c - j, f + k - j, c);
                n.arcTo(h + j, f + k - j, h + j, f + k - c - j, c);
                n.arcTo(h + j, f + j, h + c + j, f + j, c);
                n.closePath()
            } else {
                n.beginPath();
                n.moveTo(h + c, f);
                n.arcTo(h + a, f, h + a, f + c, c);
                n.arcTo(h + a, f + k, h + a - c, f + k, c);
                n.arcTo(h, f + k, h, f + k - c, c);
                n.arcTo(h, f, h + c, f, c);
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
    this.abz = function(o, d, k, j, n, l, f, p, q, g, m, c) {
        try {
            var b = Math.round(f / 2),
                h = 0,
                r = 1,
                a = 2,
                t = 3;
            o.save();
            o.beginPath();
            if (d === h) {
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
    this.dsq = function(q, j, g, b, m, p, l, d, f, o, a, n, h, r) {
        try {
            var k = 0;
            q.save();
            if (n && h) {
                k = Math.round(h / 2);
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
            if (n && h) {
                if (r) {
                    q.globalAlpha = r
                }
                q.strokeStyle = n;
                q.lineWidth = h;
                q.stroke()
            }
            q.restore()
        } catch (c) {
            console.error(c)
        }
    };
    this.ayc = function(m, g, d, a, j, k, b, l, f, n) {
        try {
            var h = 0;
            m.save();
            if (k) {
                m.fillStyle = k;
                if (b) {
                    m.globalAlpha = b
                }
                m.fillRect(g, d, a, j)
            }
            if (l && f) {
                h = Math.round(f / 2);
                m.strokeStyle = l;
                if (n) {
                    m.globalAlpha = n
                }
                m.lineWidth = f;
                m.strokeRect(g + h, d + h, a - 2 * h, j - 2 * h)
            }
            m.restore()
        } catch (c) {
            console.error(c)
        }
    };
    this.yxj = function(k, g, d, c, h, a, j, f, l) {
        try {
            k.save();
            k.beginPath();
            k.arc(g, d, c, 0, Math.PI * 2, false);
            k.closePath();
            if (h) {
                k.fillStyle = h;
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

function kpu() {
    this.parent = null;
    this.context2D = null;
    this.gvg = null;
    this.uek = null;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.gpv = true;
    this.luc = false;
    this.xpk = function(a, d, c) {
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
                this.gvg = document.createElement("canvas");
                this.gvg.width = this.width;
                this.gvg.height = this.height;
                this.context2D = this.gvg.getContext("2d");
                if (c) {
                    this.uek = c
                }
            }
            this.luc = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.gae = function(a) {
        try {
            this.x = a.x || 0;
            this.y = a.y || 0;
            this.width = a.width || 0;
            this.height = a.height || 0;
            if (this.gvg) {
                this.gvg.width = this.width;
                this.gvg.height = this.height
            }
            this.luc = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.gmo = function(a) {};
    this.sqc = function(a) {};
    this.tzp = function(a, b) {
        this.gpv = a;
        if (b && b === true) {
            this.parent.mdb(this.x, this.y, this.width, this.height)
        }
    };
    this.dse = function() {
        return (this.gpv && !this.luc)
    };
    this.mdb = function() {}
}

function dth() {
    this.ifr = null;
    this.vgj = null;
    this.wyv = -1;
    this.wpd = -1;
    this.zop = false;
    this.unn = false;
    this.ulh = false;
    this.hac = 0;
    this.got = 0;
    var a = 200;
    this.xpk = function(c, f, d, b, e) {
        this.ifr = b;
        this.vgj = e;
        dth.prototype.xpk.call(this, c, f, d)
    };
    this.vdy = function(b, d, c) {
        this.zop = b;
        c = (c === false) ? false : true;
        if (d && d === true && this.dse()) {
            this.parent.mdb(this.x, this.y, this.width, this.height)
        }
        if (this.zop === true && c === true) {
            clearTimeout(this.hac);
            this.hac = setTimeout(this.qik, a)
        }
    };
    this.tmr = function() {
        return this.zop
    };
    this.che = function(b, c) {
        this.ulh = b;
        c = (c === false) ? false : true;
        clearTimeout(this.got);
        if (this.ulh === true && c === true) {
            this.got = setTimeout(this.saz, a)
        }
    };
    this.oax = function() {
        return this.ulh
    };
    this.zja = function(b, c) {
        this.vgj = b;
        if (c && c === true && this.dse()) {
            this.parent.mdb(this.x, this.y, this.width, this.height)
        }
    };
    this.vxc = function(b) {
        this.unn = b
    };
    this.skl = function() {
        return this.unn
    };
    this.kgs = function() {};
    this.saz = function() {};
    this.qik = function() {}
}
dth.prototype = new kpu;

function dto() {
    var a = this;
    this.ovj = null;
    this.value = 0;
    this.rie = false;
    this.duq = "round";
    this.qaz = null;
    this.hie = "bold";
    this.ggg = null;
    this.lrn = null;
    this.pwl = null;
    this.bqq = null;
    this.kmx = null;
    this.xfl = 0;
    this.rwg = 6;
    this.ezi = -2;
    this.rpw = 2;
    this.kpb = -4;
    this.jst = 8;
    this.mcn = 26;
    this.xqd = 0;
    this.qtj = 1;
    this.xdz = 0;
    this.nqq = 0;
    this.bjj = -1;
    this.elp = 10;
    this.ihf = 0;
    this.ylm = 0;
    this.dbl = false;
    this.qks = -1;
    this.uyy = true;
    this.xpk = function(d, g, e, c, b, f) {
        dto.prototype.xpk.call(this, d, g, e, c, f);
        this.ovj = b;
        if (this.ifr) {
            this.xfl = Math.round(this.ifr.height / 2)
        }
    };
    this.gmo = function(b) {
        try {
            this.duq = b.uqy;
            this.qaz = b.font;
            this.hie = b.rxk;
            this.ggg = b.backgroundColor;
            this.lrn = b.rhc;
            this.pwl = b.riz;
            this.bqq = b.adp;
            if (b.fsc && b.fnk) {
                this.kmx = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.kmx.addColorStop(0, b.fsc);
                this.kmx.addColorStop(1, b.fnk)
            } else {
                this.kmx = b.fsc
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.sqc = function(b) {
        try {
            this.mcn = b.kgw;
            this.xqd = b.npl;
            this.rwg = b.une;
            this.ezi = b.sun;
            this.rpw = b.qhj;
            this.kpb = b.adc;
            this.jst = b.usd;
            this.qtj = b.ioh
        } catch (c) {
            console.error(c)
        }
    };
    this.xwv = function() {
        if (this.imv()) {
            clearInterval(this.qks);
            this.qks = -1
        }
        this.uyy = false;
        this.qks = setInterval(this.ffn, 400)
    };
    this.xuf = function() {
        this.uyy = true;
        clearInterval(this.qks);
        this.qks = -1;
        this.bml(false)
    };
    this.bml = function(b, c) {
        this.dbl = b;
        c = (c === false) ? false : true;
        if (c === true && this.dse() === true) {
            this.parent.mdb(this.x, this.y, this.width, this.height)
        }
    };
    this.imv = function() {
        return (this.qks >= 0)
    };
    this.yeu = function(b, c) {
        this.value = b;
        if (c && c === true && this.dse()) {
            this.parent.mdb(this.x, this.y, this.width, this.height)
        }
    };
    this.btm = function(b) {
        this.xdz = Math.round(b / this.elp);
        this.ihf = 0;
        this.ylm = 0;
        this.nqq = new Date().getTime();
        this.bjj = setTimeout(this.llq, this.xdz)
    };
    this.qum = function() {
        if (a.bjj >= 0) {
            clearTimeout(a.bjj);
            a.bjj = -1
        }
        a.ihf = 0;
        a.qik()
    };
    this.rtv = function() {
        if (a.bjj >= 0) {
            clearInterval(a.bjj);
            a.bjj = -1
        }
        a.ihf = 1;
        a.qik()
    };
    this.llq = function() {
        var b = 0,
            c = new Date().getTime();
        a.ylm += 1;
        if (a.ylm < a.elp) {
            a.ihf += 1 / a.elp;
            a.parent.mdb(a.x, a.y, a.width, a.height);
            b = a.xdz + (a.ylm * a.xdz - (c - a.nqq));
            a.bjj = setTimeout(a.llq, b)
        } else {
            a.rtv()
        }
    };
    this.mdb = function() {
        if (!this.dse()) {
            return
        }
        var g = null,
            f = 0,
            c = 0,
            m = 0,
            j = 0,
            k = this.width / 2 - this.qtj,
            d = (this.duq === "roundedT" || this.duq === "roundedL") ? this.jst : 0,
            b = (this.duq === "roundedT" || this.duq === "roundedR") ? this.jst : 0,
            n = (this.duq === "roundedB" || this.duq === "roundedR") ? this.jst : 0,
            p = (this.duq === "roundedB" || this.duq === "roundedL") ? this.jst : 0,
            e = 1,
            l = String(this.value),
            o = this.context2D;
        o.save();
        o.textAlign = "center";
        o.textBaseline = "bottom";
        if (this.dbl || this.ihf >= 1) {
            if (this.duq === "round") {
                tvj.slh.yxj(o, this.x + this.width / 2, this.y + this.height / 2, k, this.lrn, 1, this.kmx, this.qtj, 1)
            } else {
                if (this.duq === "rect") {
                    tvj.slh.ryr(o, this.x, this.y, this.width, this.height, this.jst, this.lrn, this.kmx, this.qtj)
                } else {
                    if (this.duq === "roundedT" || this.duq === "roundedB" || this.duq === "roundedR" || this.duq === "roundedL") {
                        tvj.slh.dsq(o, this.x, this.y, this.width, this.height, d, b, n, p, this.lrn, 1, this.kmx, this.qtj, 1)
                    }
                }
            }
            if (this.ovj || this.ifr) {
                if (this.tmr()) {
                    o.drawImage((this.ovj) ? this.ovj : this.ifr, 0, this.xfl, this.ifr.width, this.xfl, this.x, this.y, this.width, this.height)
                } else {
                    o.drawImage((this.ovj) ? this.ovj : this.ifr, 0, 0, this.ifr.width, this.xfl, this.x, this.y, this.width, this.height)
                }
            }
        } else {
            if (this.rie && this.skl() === false) {
                o.globalAlpha = 0.5
            }
            if (this.ihf > 0) {
                if (this.duq === "round") {
                    tvj.slh.yxj(o, this.x + this.width / 2, this.y + this.height / 2, k, this.ggg, 1 - this.ylm / this.elp, this.kmx, this.qtj, 1);
                    tvj.slh.yxj(o, this.x + this.width / 2, this.y + this.height / 2, k, this.lrn, this.ylm / this.elp)
                } else {
                    if (this.duq === "rect") {
                        wbf = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                        wbf.addColorStop(1 - this.ihf, this.ggg);
                        wbf.addColorStop(1 - this.ihf, this.lrn);
                        tvj.slh.lml(o, this.x, this.y, this.width, this.height, this.jst, wbf, 1, this.kmx, this.qtj, 1)
                    } else {
                        if (this.duq === "roundedT" || this.duq === "roundedB" || this.duq === "roundedR" || this.duq === "roundedL") {
                            wbf = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                            wbf.addColorStop(1 - this.ihf, this.ggg);
                            wbf.addColorStop(1 - this.ihf, this.lrn);
                            tvj.slh.dsq(o, this.x, this.y, this.width, this.height, d, b, n, p, wbf, 1, this.kmx, this.qtj, 1)
                        }
                    }
                }
            } else {
                if (this.duq === "round") {
                    tvj.slh.yxj(o, this.x + this.width / 2, this.y + this.height / 2, k, this.ggg, 1, this.kmx, this.qtj, 1)
                } else {
                    if (this.duq === "rect") {
                        tvj.slh.ryr(o, this.x, this.y, this.width, this.height, this.jst, this.ggg, this.kmx, this.qtj)
                    } else {
                        if (this.duq === "roundedT" || this.duq === "roundedB" || this.duq === "roundedR" || this.duq === "roundedL") {
                            tvj.slh.dsq(o, this.x, this.y, this.width, this.height, d, b, n, p, this.ggg, 1, this.kmx, this.qtj, 1)
                        }
                    }
                }
            }
            if (this.ifr) {
                if (this.tmr()) {
                    o.drawImage(this.ifr, 0, this.xfl, this.ifr.width, this.xfl, this.x, this.y, this.width, this.height)
                } else {
                    o.drawImage(this.ifr, 0, 0, this.ifr.width, this.xfl, this.x, this.y, this.width, this.height)
                }
            }
        }
        if (l && this.xqd > 0) {
            f = (this.tmr()) ? 2 : 0;
            c = this.xqd;
            o.font = this.hie + " " + c + "px " + this.qaz;
            o.fillStyle = this.bqq;
            m = o.measureText(l).width;
            if (m > this.width - 2 * this.rwg) {
                e = ((this.width - 2 * this.rwg) / m);
                c = Math.round(e * c) - 1;
                o.font = this.hie + " " + c + "px " + this.qaz
            }
            if (c > this.height / 2 - this.rwg) {
                e = ((this.height / 2 - this.rwg) / c);
                c = Math.round(e * c) - 1;
                o.font = this.hie + " " + c + "px " + this.qaz
            }
            j = (this.height / 2 - c) / 2;
            j += c;
            o.fillText(l, this.x + this.width / 2 + this.ezi, this.y - this.kpb + j + f)
        }
        if (this.vgj && this.vgj != "" && this.mcn > 0) {
            g = this.vgj.split("|");
            f = (this.tmr()) ? 2 : 0;
            c = this.mcn;
            o.font = this.hie + " " + c + "px " + this.qaz;
            o.fillStyle = this.pwl;
            for (var h = 0; h < g.length; h++) {
                m = (o.measureText(g[h]).width > m) ? o.measureText(g[h]).width : m
            }
            if (m > this.width - 2 * this.rwg) {
                e = ((this.width - 2 * this.rwg) / m);
                c = Math.round(e * c) - 1;
                o.font = this.hie + " " + c + "px " + this.qaz
            }
            if (this.xqd > 0) {
                if (c * g.length > this.height / 2 - this.rwg) {
                    e = ((this.height / 2 - this.rwg) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    o.font = this.hie + " " + c + "px " + this.qaz
                }
                j = this.height / 2 + (this.height / 2 - c * g.length) / 2
            } else {
                if (c * g.length > this.height - 2 * this.rwg) {
                    e = ((this.height - 2 * this.rwg) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    o.font = this.hie + " " + c + "px " + this.qaz
                }
                j = (this.height - c * g.length) / 2
            }
            j += c;
            for (var h = 0; h < g.length; h++) {
                o.fillText(g[h], this.x + this.width / 2 + this.ezi, this.y - this.rpw + j + f);
                j += c
            }
        }
        o.restore();
        if (this.uek && this.gvg) {
            this.uek.drawImage(this.gvg, this.x, this.y)
        }
    };
    this.ffn = function() {
        if (!a.uyy) {
            a.bml(!a.dbl)
        }
    };
    this.saz = function() {
        a.ulh = false
    };
    this.qik = function() {
        a.zop = false;
        if (a.dse()) {
            a.parent.mdb(a.x, a.y, a.width, a.height)
        }
    }
}
dto.prototype = new dth;

function ofv() {
    this.ywp = 0;
    this.pug = [];
    this.xpk = function(a, c, b) {
        ofv.prototype.xpk.call(this, a, c, b);
        this.ywp = 0;
        this.pug = []
    };
    this.vyu = function(a, b) {
        if (b && b === true) {
            this.pug.unshift(a)
        } else {
            this.pug.push(a)
        }
    };
    this.iqy = function(a) {
        if (a && a === true) {
            this.pug.shift()
        } else {
            this.pug.pop()
        }
    };
    this.pai = function(a) {
        this.ywp = a
    };
    this.ahs = function() {
        return this.ywp
    };
    this.mdb = function() {
        if (!this.dse() || !this.parent.kez()) {
            return
        }
        if (this.ywp < this.pug.length) {
            this.pug[this.ywp].mdb()
        }
        try {
            if (this.uek && this.gvg) {
                this.uek.drawImage(this.gvg, this.x, this.y)
            }
        } catch (a) {}
    }
}
ofv.prototype = new kpu;

function mtt() {
    var a = this;
    this.zcr = null;
    this.ywp = 0;
    this.pug = [];
    this.ggg = null;
    this.tef = null;
    this.jpt = null;
    this.ldu = new mfo();
    this.xpk = function(b, d, c) {
        mtt.prototype.xpk.call(this, b, d, c);
        this.gpv = false;
        this.ywp = 0;
        this.pug = [];
        this.kid()
    };
    this.kid = function() {
        this.zcr = new lts();
        this.zcr.xpk();
        this.zcr.yhs("buttons")
    };
    this.sqc = function(f) {
        try {
            var d = this.zcr.lkr("buttons"),
                c = 0,
                b = d.length;
            this.ldu = f.zvv;
            for (; c < b; c++) {
                d[c].sqc(f.rlo)
            }
            this.zcr.tew("return", "#gae", [f.nti]);
            this.zcr.tew("page", "#gae", [f.gvr]);
            this.zcr.tew("prev", "#gae", [f.sum]);
            this.zcr.tew("next", "#gae", [f.ccl])
        } catch (g) {
            console.error(g)
        }
    };
    this.gmo = function(d) {
        try {
            var f = this.zcr.lkr("buttons");
            this.ggg = d.backgroundColor;
            this.tef = d.soi;
            this.jpt = d.gsn;
            for (var c = 0, b = f.length; c < b; c++) {
                f[c].gmo((this.parent.hue.abu === false) ? d.grh : (this.parent.jgb === tvj.hue.jif) ? d.soz : d.mlc)
            }
        } catch (g) {
            console.error(g)
        }
    };
    this.nyv = function(l, k) {
        var h = this.zcr.lkr("buttons"),
            g = this.zcr.mmc("return"),
            c = l - this.x,
            m = k - this.y;
        for (var e = 0, f = h.length; e < f; e++) {
            var b = h[e];
            if (c >= b.x && c <= b.x + b.width && m >= b.y && m <= b.y + b.height && b.dse() == true) {
                if (b.skl() && !b.oax()) {
                    if (b != g) {
                        b.vdy(true, true)
                    }
                    this.parent.xbq.loh("btn");
                    this.parent.xbq.ruf("btn");
                    b.kgs();
                    for (var d = 0; d < f; d++) {
                        h[d].che(true)
                    }
                    return true
                }
            }
        }
        return false
    };
    this.hxa = function() {
        var e = this.zcr.lkr("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.tmr() === true) {
                c.vdy(false, true);
                return true
            }
        }
        return false
    };
    this.qgb = function(h) {
        var g = this.zcr.lkr("buttons"),
            c = this.zcr.mmc("return");
        for (var f = 0, b = g.length; f < b; f++) {
            var d = g[f];
            if (h == d.wyv) {
                if (d.skl() && !d.oax()) {
                    if (d != c) {
                        d.vdy(true, true)
                    }
                    this.parent.xbq.loh("btn");
                    this.parent.xbq.ruf("btn");
                    d.kgs();
                    for (var e = 0; e < b; e++) {
                        g[e].che(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.zct = function() {
        var e = this.zcr.lkr("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.tmr() === true) {
                c.vdy(false, true);
                return true
            }
        }
        return false
    };
    this.vyu = function(b, c) {
        if (c && c === true) {
            this.pug.unshift(b);
            this.ywp++
        } else {
            this.pug.push(b)
        }
    };
    this.iqy = function(b) {
        if (b && b === true) {
            this.pug.shift();
            this.ywp--
        } else {
            this.pug.pop()
        }
    };
    this.euc = function() {
        return this.pug.length
    };
    this.tuz = function(e, c, b) {
        var d = (this.parent.hue.abu === false) ? c.grh : (this.parent.jgb === tvj.hue.jif) ? c.soz : c.mlc;
        if (this.parent.uli === false) {
            this.zcr.zxg("return", this.hsz(e.nti, this.parent.language.ret, (this.parent.hue.smb === false) ? b : this.parent.xbq.ire("btn_re"), this.ohk, (this.parent.ayv.qes) ? this.parent.ayv.qes : null, e.rlo, d), ["buttons"]);
            this.zcr.zxg("page", this.hsz(e.gvr, (this.ywp + 1) + "/" + this.pug.length, b, this.kut, null, e.rlo, d), ["buttons"]);
            this.zcr.zxg("prev", this.hsz(e.sum, this.parent.language.zyx, (this.parent.hue.smb === false) ? b : this.parent.xbq.ire("btn_pr"), this.ovb, (this.parent.ayv.uam) ? this.parent.ayv.uam : null, e.rlo, d), ["buttons"]);
            this.zcr.zxg("next", this.hsz(e.ccl, this.parent.language.icd, (this.parent.hue.smb === false) ? b : this.parent.xbq.ire("btn_ne"), this.kut, (this.parent.ayv.med) ? this.parent.ayv.med : null, e.rlo, d), ["buttons"])
        }
    };
    this.hsz = function(g, j, b, h, d, f, e) {
        var c = new dto();
        c.xpk(g, this.context2D, null, b, null, j);
        c.parent = this;
        c.kgs = h;
        c.sqc(f);
        c.gmo(e);
        if (d) {
            c.wyv = d.woo
        }
        return c
    };
    this.mdb = function(l, j, m, e) {
        if (!this.dse() || !this.parent.kez()) {
            return
        }
        var b = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = null,
            g = this.zcr.lkr("buttons"),
            d = null;
        if (this.parent.hue.abu === false) {
            d = this.parent.xbq.ire("btn_back")
        } else {
            if (this.parent.jgb === tvj.hue.jif) {
                d = (this.parent.xbq.ire("h_right" + this.ywp) != null) ? this.parent.xbq.ire("h_right" + this.ywp) : this.parent.xbq.ire("h_right")
            } else {
                d = (this.parent.xbq.ire("h_left" + this.ywp) != null) ? this.parent.xbq.ire("h_left" + this.ywp) : this.parent.xbq.ire("h_left")
            }
        }
        n.save();
        if (b) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        if (this.ywp >= 0 && this.ywp < this.pug.length) {
            this.pug[this.ywp].mdb()
        }
        if (d) {
            k = n.createLinearGradient(this.ldu.x, this.ldu.y, this.ldu.x + this.ldu.width, this.ldu.y);
            k.addColorStop(0.2, this.tef);
            k.addColorStop(1, this.jpt);
            n.fillStyle = k;
            n.save();
            if (this.parent.hue.abu === false) {
                if (this.parent.jgb === tvj.hue.vtc) {
                    n.translate(this.ldu.width / 2, this.ldu.height / 2);
                    n.rotate(Math.PI);
                    n.translate(-this.ldu.width / 2, -this.ldu.height / 2)
                }
                n.fillRect(this.ldu.x, this.ldu.y, this.ldu.width, this.ldu.height)
            }
            n.drawImage(d, this.ldu.x, this.ldu.y, this.ldu.width, this.ldu.height);
            n.restore()
        } else {
            if (this.ggg != null) {
                n.fillStyle = this.ggg;
                n.fillRect(this.ldu.x, this.ldu.y, this.ldu.width, this.ldu.height)
            }
        }
        for (var c = 0, f = g.length; c < f; c++) {
            g[c].mdb()
        }
        n.restore();
        if (this.uek && this.gvg) {
            if (b) {
                this.uek.drawImage(this.gvg, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.uek.drawImage(this.gvg, this.x, this.y)
            }
        }
    };
    this.pva = function(f, g) {
        var e = this.zcr.mmc("page"),
            c = this.zcr.mmc("return"),
            b = this.zcr.mmc("next"),
            d = this.zcr.mmc("prev");
        if (e != null) {
            e.zja((this.ywp + 1) + "/" + this.pug.length)
        }
        if (c != null) {
            c.tzp(f)
        }
        if (b != null && d != null && e != null) {
            if (f) {
                if (this.pug.length > 1) {
                    b.tzp(f);
                    d.tzp(f);
                    e.tzp(f)
                } else {
                    b.tzp(false);
                    d.tzp(false);
                    e.tzp(false)
                }
            } else {
                b.tzp(f);
                d.tzp(f);
                e.tzp(f)
            }
        }
        if (g && g === true) {
            this.mdb()
        }
    };
    this.dns = function() {
        this.ywp = 0;
        this.pva(true);
        this.tzp(true, true)
    };
    this.dwo = function() {
        this.pva(false);
        this.tzp(false, true)
    };
    this.wjx = function() {
        var d = this.zcr.mmc("page"),
            b = this.zcr.mmc("next"),
            c = this.zcr.mmc("prev");
        this.ywp = (this.ywp < this.pug.length) ? this.ywp : this.pug.length - 1;
        this.ywp = (this.ywp < 0) ? 0 : this.ywp;
        d.zja((this.ywp + 1) + "/" + this.pug.length, true);
        if (this.pug.length == 1) {
            b.tzp(false);
            c.tzp(false);
            d.tzp(false)
        } else {
            b.tzp(true);
            c.tzp(true);
            d.tzp(true)
        }
    };
    this.ein = function(c) {
        var e = this.zcr.lkr("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            e[d].vxc(c)
        }
    };
    this.ohk = function() {
        a.parent.yea()
    };
    this.kut = function() {
        var b = a.zcr.mmc("page");
        if (a.ywp < a.pug.length - 1) {
            a.ywp++
        } else {
            a.ywp = 0
        }
        if (b) {
            b.zja((a.ywp + 1) + "/" + a.pug.length, false)
        }
        a.mdb()
    };
    this.ovb = function() {
        var b = a.zcr.mmc("page");
        if (a.ywp > 0) {
            a.ywp--
        } else {
            a.ywp = a.pug.length - 1
        }
        if (b) {
            b.zja((a.ywp + 1) + "/" + a.pug.length, false)
        }
        a.mdb()
    }
}
mtt.prototype = new kpu;

function tnl() {
    this.ifr = new Image();
    this.szr = null;
    this.oes = [];
    this.hxv = [];
    this.ahx = null;
    this.qaz = null;
    this.hie = "bold";
    this.bpo = null;
    this.pwl = null;
    this.dmp = null;
    this.tvp = 0;
    this.yuv = [];
    this.jyi = null;
    this.uhl = 40;
    this.are = 18;
    this.jqs = 1;
    this.xpk = function(b, d, c, a) {
        this.ifr = a;
        this.oes = [];
        this.yuv = [];
        tnl.prototype.xpk.call(this, b, d, c)
    };
    this.sqc = function(a) {
        try {
            this.jyi = a.mck;
            this.yuv = a.hwt;
            this.are = a.eyf;
            this.uhl = a.juz;
            this.jqs = a.lineWidth
        } catch (b) {
            console.error(b)
        }
    };
    this.gmo = function(a) {
        try {
            this.ahx = a.lkw;
            this.qaz = a.font;
            this.hie = a.rxk;
            this.bpo = a.gey;
            this.pwl = a.riz;
            this.dmp = a.nze
        } catch (b) {
            console.error(b)
        }
    };
    this.mdb = function() {
        if (!this.dse()) {
            return
        }
        var b = this.context2D;
        b.save();
        b.fillStyle = this.pwl;
        if (this.bpo) {
            b.strokeStyle = this.bpo
        }
        b.lineJoin = "round";
        b.lineCap = "round";
        b.lineWidth = this.jqs;
        b.font = this.hie + " " + this.are + "px " + this.qaz;
        b.textBaseline = "bottom";
        b.textAlign = "center";
        b.drawImage(this.ifr, 0, 0);
        if ((this.height - this.ifr.height) > 0) {
            var a = this.parent.ldu;
            b.drawImage(this.ifr, a.x, a.y, a.width, this.ifr.height - a.y, a.x, a.y, a.width, a.height)
        }
        if (this.szr && this.jyi) {
            tvj.slh.edu(b, this.szr, this.dmp, this.jyi.x, this.jyi.y, this.jyi.width, this.jyi.height, this.ahx, this.uhl, this.hie)
        }
        for (var c = 0; c < this.oes.length; c++) {
            this.hng(this.oes[c], this.yuv[c], this.are, this.qaz)
        }
        b.restore();
        if (this.uek && this.gvg) {
            this.uek.drawImage(this.gvg, this.x, this.y)
        }
    };
    this.yar = function(h, f, g, d) {
        var b = this.context2D,
            c = 0;
        this.hxv = [];
        b.save();
        b.font = this.hie + " " + g + "px " + d;
        this.udc(b, g, h, f, d);
        for (var e = 0, a = this.hxv.length; e < a; e++) {
            c = (f.height + this.tvp) / (this.hxv.length + 1) * (e + 1);
            b.fillText(this.hxv[e], (f.x), f.y + c);
            if (this.bpo != null && b.lineWidth >= 1) {
                b.strokeText(this.hxv[e], (f.x), f.y + c)
            }
        }
        b.restore()
    };
    this.hng = function(g, e, f, c) {
        var a = this.context2D,
            b = 0;
        this.hxv = [];
        a.save();
        a.font = this.hie + " " + f + "px " + c;
        this.udc(a, f, g, e, c);
        for (var d = 0; d < this.hxv.length; d++) {
            b = (e.height + this.tvp) / (this.hxv.length + 1) * (d + 1);
            a.fillText(this.hxv[d], (e.x + e.width / 2), e.y + b);
            if (this.bpo != null && a.lineWidth >= 1) {
                a.strokeText(this.hxv[d], (e.x + e.width / 2), e.y + b)
            }
        }
        a.restore()
    };
    this.udc = function(l, n, k, g, b) {
        var a = 1,
            j = 0,
            h = "",
            f = 0,
            d = 0,
            c = 0,
            m = 0;
        m = l.measureText(k).width / g.width;
        m = (m >= Math.round(m)) ? Math.round(m) + 1 : Math.round(m);
        this.tvp = n;
        if (this.tvp * m > g.height) {
            a = g.height / (this.tvp * m);
            this.tvp = Math.round(a * this.tvp) - 1;
            l.font = this.hie + " " + this.tvp + "px " + b;
            m = l.measureText(k).width / g.width;
            m = (m > Math.round(m)) ? Math.round(m) + 1 : Math.round(m)
        }
        for (var e = c; e < k.length; e++) {
            h += k.charAt(e);
            j = l.measureText(h).width;
            if (k.charAt(e) == " ") {
                f = e
            }
            if (e == k.length - 1) {
                this.hxv[d] = k.substring(c, k.length)
            } else {
                if (j >= g.width) {
                    this.hxv[d] = k.substring(c, f);
                    d++;
                    c = f + 1;
                    h = k.substring(f + 1, e)
                }
            }
        }
    }
}
tnl.prototype = new kpu;

function idy() {
    var a = this;
    this.ifr = new Image();
    this.mmq = "";
    this.voz = "";
    this.lzi = -1;
    this.vni = 0;
    this.pqq = 0;
    this.opr = 5000;
    this.qaz = null;
    this.hie = "bold";
    this.pwl = null;
    this.ggg = null;
    this.uhb = null;
    this.jst = 0;
    this.oim = 0;
    this.rwg = 0;
    this.qtj = 0;
    this.fgo = 0;
    this.are = 0;
    this.qlb = null;
    this.hsu = 0;
    this.fhr = [];
    this.qto = 0;
    this.zfh = true;
    this.nqe = 0;
    this.sqc = function(b) {
        try {
            this.are = b.eyf;
            this.fgo = b.ocl;
            this.jst = b.usd;
            this.oim = b.tak;
            this.rwg = b.une;
            this.qtj = b.ioh
        } catch (c) {
            console.error(c)
        }
    };
    this.gmo = function(b) {
        try {
            this.qaz = b.font;
            this.hie = b.rxk;
            this.ggg = b.backgroundColor;
            this.pwl = b.riz;
            this.uhb = b.fsc
        } catch (c) {
            console.error(c)
        }
    };
    this.hyr = function(e, c, d, b) {
        this.mmq = e;
        this.voz = c;
        this.lzi = d;
        this.vni = b;
        this.zfh = true;
        clearTimeout(this.nqe);
        if (this.dse() === true) {
            this.parent.mdb(this.x, this.y, this.width, this.height)
        }
    };
    this.ylv = function(b, c) {
        this.mmq = b;
        this.voz = undefined;
        this.zfh = c;
        if (this.zfh) {
            clearTimeout(this.nqe)
        }
        if (this.dse() === true) {
            this.parent.mdb(this.x, this.y, this.width, this.height)
        }
    };
    this.jpi = function() {
        this.mmq = "";
        this.voz = undefined;
        this.zfh = true;
        clearTimeout(this.nqe);
        if (this.dse() === true) {
            this.parent.mdb(this.x, this.y, this.width, this.height)
        }
    };
    this.qlc = function(b, c) {
        this.hsu = 0;
        this.qto = b;
        this.zfh = false;
        if (c && c > 0) {
            this.nqe = setTimeout(this.ohf, c)
        } else {
            this.nqe = setTimeout(this.ohf, this.opr)
        }
    };
    this.sto = function(b) {
        this.hsu = 0;
        this.qto = b;
        if (this.zfh) {
            this.ylv(this.fhr[this.qto][this.hsu], false)
        }
        this.zfh = false;
        this.nqe = setTimeout(this.ohf, this.opr)
    };
    this.ufm = function() {
        this.zfh = false;
        this.nqe = setTimeout(this.ohf, this.opr)
    };
    this.amy = function() {
        this.zfh = true;
        clearTimeout(this.nqe)
    };
    this.uvf = function() {
        return this.zfh
    };
    this.ohf = function() {
        if (!a.zfh) {
            a.hsu = (a.fhr[a.qto][a.hsu + 1] != undefined) ? a.hsu + 1 : 0;
            a.nqe = setTimeout(a.ohf, a.opr);
            a.ylv(a.fhr[a.qto][a.hsu], a.zfh)
        }
    };
    this.bxf = function(b) {
        this.fhr[b] = []
    };
    this.lpl = function(d, b) {
        for (var c = 0; c < d.length; c++) {
            this.fhr[b][c] = d[c]
        }
    };
    this.hrr = function(b) {
        this.qlb = b
    };
    this.mdb = function() {
        if (!this.dse()) {
            return
        }
        var n = this.context2D,
            l = this.are,
            b = 0,
            j = 0,
            k = 0,
            h = 0,
            m = 0,
            r = 0,
            v = 0,
            e = 0,
            g = [],
            d = "",
            u = 0,
            x = 0,
            s = 0,
            f = 1,
            q = 0,
            p = (this.uhb && this.qtj) ? this.rwg + this.qtj : this.rwg;
        n.save();
        if (this.ggg) {
            tvj.slh.ryr(n, this.x, this.y, this.width, this.height, this.jst, this.ggg, this.uhb, this.qtj)
        } else {
            if (this.qlb) {
                n.putImageData(this.qlb, this.x, this.y)
            }
        }
        n.lineJoin = "round";
        n.lineCap = "round";
        n.fillStyle = this.pwl;
        n.font = this.hie + " " + l + "px " + this.qaz;
        n.textBaseline = "bottom";
        n.textAlign = "center";
        k = n.measureText(this.mmq).width;
        b += k;
        m = n.measureText("WW").width;
        if (this.voz != undefined && this.lzi >= 0) {
            h = n.measureText(this.voz).width;
            b += h;
            b += this.vni * (this.ifr.width + this.oim);
            if (this.vni % 2 != 0) {
                r = this.x + (this.width) / 2 - (this.vni / 2) * (this.ifr.width + this.oim);
                v = r - m;
                e = r + (this.vni) * (this.ifr.width + this.oim) + m
            } else {
                r = this.x + (this.width) / 2 - (this.vni / 2) * (this.ifr.width) - (this.vni - 1) / 2 * this.oim;
                v = r - m;
                e = r + (this.vni) * (this.ifr.width) + (this.vni - 1) * this.oim + m
            }
            for (var t = 0; t < this.vni; t++) {
                n.drawImage(this.ifr, 0, this.pqq * this.lzi, this.ifr.width, this.pqq, r + (t * (this.oim + this.ifr.width)), this.y + ((this.height - this.pqq) / 2), this.ifr.width, this.pqq)
            }
            n.textAlign = "right";
            n.fillText(this.mmq, v, this.y + l + this.fgo);
            n.textAlign = "left";
            n.fillText(this.voz, e, this.y + l + this.fgo)
        } else {
            if (this.mmq != undefined) {
                do {
                    if (g.length > 1) {
                        l -= 2;
                        n.font = this.hie + " " + l + "px " + this.qaz
                    }
                    g = [];
                    d = "";
                    u = 0;
                    x = 0;
                    s = 0;
                    for (var o = s; o < this.mmq.length; o++) {
                        d += this.mmq.charAt(o);
                        j = n.measureText(d).width;
                        if ((this.mmq.charAt(o) == " ") || (this.mmq.charAt(o) == "|")) {
                            u = o
                        }
                        if (o == this.mmq.length - 1) {
                            g[x] = this.mmq.substring(s, this.mmq.length)
                        } else {
                            if (this.mmq.charAt(o) == "|") {
                                g[x] = this.mmq.substring(s, u);
                                x++;
                                s = u + 1;
                                d = this.mmq.substring(u + 1, o)
                            } else {
                                if (j >= this.width - 2 * p) {
                                    g[x] = this.mmq.substring(s, u);
                                    x++;
                                    s = u + 1;
                                    d = this.mmq.substring(u + 1, o)
                                }
                            }
                        }
                    }
                } while (g.length > 2);
                if (g.length > 1 && l == this.are) {
                    n.font = this.hie + " " + (l - 3) + "px " + this.qaz;
                    f = 0
                }
                for (var o = 0; o < g.length; o++) {
                    q = (this.height + l) / (g.length + 1) * (o + 1);
                    n.fillText(g[o], (this.x + this.width / 2), this.y + q + f)
                }
            }
        }
        n.restore()
    }
}
idy.prototype = new kpu;

function zbk() {
    this.zho = null;
    this.ukx = null;
    this.ehh = null;
    this.fiv = false;
    this.unn = false;
    this.tun = true;
    this.zjk = false;
    this.ehf = false;
    this.dhw = 0;
    this.dgj = 0;
    this.vec = 0;
    this.cvh = "";
    this.lfm = "";
    this.tef = null;
    this.jpt = null;
    this.qaz = "arial";
    this.hie = "bold";
    this.wdf = "arial";
    this.xwt = "rgb(0,0,200)";
    this.xuc = "rgb(255,255,255)";
    this.wfa = "rgb(0,0,150)";
    this.ggg = "rgb(220,240,255)";
    this.vhj = "rgb(130,220,255)";
    this.sra = "rgb(130,190,255)";
    this.pwl = "rgb(255,255,255)";
    this.hyx = "rgb(130,190,255)";
    this.qxa = "rgb(100,160,255)";
    this.nro = "rgb(255,255,255)";
    this.ldu = new mfo();
    this.jyi = null;
    this.wny = null;
    this.bdi = null;
    this.xnk = null;
    this.uny = null;
    this.gxq = null;
    this.bbf = null;
    this.plg = null;
    this.qtj = 2;
    this.zul = 3;
    this.xef = 10;
    this.fgo = 3;
    this.ezi = 5;
    this.gpd = 36;
    this.are = 30;
    this.fft = 22;
    this.xpk = function(a, c, b) {
        zbk.prototype.xpk.call(this, a, c, b);
        this.zjk = tvj.wxo.value37
    };
    this.zfl = function(b) {
        try {
            var a = (tvj.wxo.value37) ? b.eqn : b.kfy;
            this.jyi = b.mck;
            this.wny = b.bbm;
            this.bdi = b.ybs;
            this.xnk = b.uun;
            this.uny = b.xhe;
            this.gxq = b.skx;
            this.ldu = b.zvv;
            this.gpd = b.zsk;
            this.are = b.eyf;
            this.fft = b.xud;
            this.fgo = b.ocl;
            this.ezi = b.sun;
            this.qtj = b.ioh;
            this.zul = b.qpi;
            this.xef = b.vfy;
            if (tvj.wxo.value36) {
                this.lfm = this.parent.language.qjx.toUpperCase()
            } else {
                if (tvj.wxo.value37) {
                    this.lfm = this.parent.language.hea.toUpperCase()
                }
            }
            this.zho = [];
            this.ukx = this.hsz(a.msb, this.parent.language.ret, this.parent.lqr, (this.parent.hue.smb === false) ? this.parent.xbq.ire("btn") : this.parent.xbq.ire("btn_re"), b.rlo);
            this.zho.push(this.ukx);
            if (tvj.wxo.value37) {
                this.ehh = this.hsz(a.nti, this.parent.language.azx, this.parent.maq, (this.parent.hue.smb === false) ? this.parent.xbq.ire("btn") : this.parent.xbq.ire("btn_e"), b.rlo);
                this.zho.push(this.ehh)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.sqc = function(b) {
        try {
            var a = (tvj.wxo.value37) ? b.eqn : b.kfy;
            this.jyi = b.mck;
            this.wny = b.bbm;
            this.bdi = b.ybs;
            this.xnk = b.uun;
            this.uny = b.xhe;
            this.gxq = b.skx;
            this.ldu = b.zvv;
            if (this.ukx) {
                this.ukx.gae(a.msb);
                this.ukx.sqc(b.rlo)
            }
            if (this.ehh) {
                this.ehh.gae(a.nti);
                this.ehh.sqc(b.rlo)
            }
            this.gpd = b.zsk;
            this.are = b.eyf;
            this.fft = b.xud;
            this.fgo = b.ocl;
            this.ezi = b.sun;
            this.qtj = b.ioh;
            this.zul = b.qpi;
            this.xef = b.vfy
        } catch (c) {
            console.error(c)
        }
    };
    this.gmo = function(c) {
        try {
            this.qaz = c.font;
            this.hie = c.rxk;
            this.xwt = c.zkn;
            this.xuc = c.exk;
            this.wfa = c.gbd;
            this.ggg = c.backgroundColor;
            this.vhj = c.wbj;
            this.sra = c.glm;
            this.pwl = c.riz;
            this.hyx = c.tms;
            this.qxa = c.bzi;
            this.nro = c.sma;
            this.tef = c.soi;
            this.jpt = c.gsn;
            for (var b = 0, a = this.zho.length; b < a; b++) {
                this.zho[b].gmo((this.parent.hue.abu === true) ? c.uce : c.grh)
            }
        } catch (d) {
            console.error(d)
        }
    };
    this.nyv = function(d, h) {
        var c = d - this.x,
            g = h - this.y;
        for (var f = 0, b = this.zho.length; f < b; f++) {
            var a = this.zho[f];
            if (c >= a.x && c <= a.x + a.width && g >= a.y && g <= a.y + a.height && a.dse() === true) {
                if (a.skl() === true && a.oax() === false && this.tun) {
                    a.vdy(true, true);
                    this.parent.xbq.loh("btn");
                    this.parent.xbq.ruf("btn");
                    a.kgs();
                    for (var e = 0; e < b; e++) {
                        this.zho[e].che(true)
                    }
                    return true
                }
            }
        }
        if (c >= this.gxq.x && c <= this.gxq.x + this.gxq.width && g >= this.gxq.y && g <= this.gxq.y + this.gxq.height && this.zjk && this.unn) {
            this.amo()
        }
        return true
    };
    this.hxa = function() {};
    this.qgb = function() {};
    this.zct = function() {};
    this.hsz = function(d, f, e, a, c) {
        var b = new dto();
        b.xpk(d, this.context2D, null, a, null, f);
        b.parent = this;
        b.kgs = e;
        b.sqc(c);
        return b
    };
    this.ein = function(c) {
        this.unn = c;
        for (var b = 0, a = this.zho.length; b < a; b++) {
            this.zho[b].vxc(c)
        }
    };
    this.amo = function() {
        this.tun = !this.tun;
        this.parent.mdb()
    };
    this.svt = function(d, a, c, b) {
        this.ehf = false;
        this.yvi = true;
        this.cvh = this.ppq(b);
        this.dhw = d;
        this.dgj = a;
        this.vec = c;
        if (this.dse()) {
            this.ein(true);
            this.mdb()
        }
    };
    this.ppq = function(b) {
        var d = Math.floor(b / 3600000);
        b = b - d * 3600000;
        var a = Math.floor(b / 60000);
        b = b - a * 60000;
        var c = Math.floor(b / 1000);
        return this.tfc(d) + ":" + this.tfc(a) + ":" + this.tfc(c)
    };
    this.tfc = function(a) {
        if (a < 10) {
            return "0" + a
        }
        return a
    };
    this.puq = function(a, b) {
        this.ehf = a;
        if (b && b === true) {
            this.mdb()
        }
    };
    this.tzp = function(a, b) {
        this.yvi = false;
        if (tvj.wxo.value37) {
            this.tun = false
        }
        this.puq(a, false);
        zbk.prototype.tzp.call(this, a, b)
    };
    this.mdb = function(j, f, k, d) {
        if (!this.dse() || !this.parent.kez()) {
            return
        }
        var a = (j != null && f != null && k != null && d != null),
            g = null,
            l = this.context2D,
            c = this.parent.xbq.ire("btn_back");
        l.save();
        if (a) {
            l.beginPath();
            l.rect(j, f, k, d);
            l.closePath();
            l.clip()
        }
        l.fillStyle = this.ggg;
        l.fillRect(0, 0, this.width, this.height);
        if (c) {
            g = l.createLinearGradient(this.ldu.x, this.ldu.y, this.ldu.x + this.ldu.width, this.ldu.y);
            g.addColorStop(0.2, this.tef);
            g.addColorStop(1, this.jpt);
            l.fillStyle = g;
            l.save();
            if (this.parent.jgb === tvj.hue.vtc) {
                l.translate(this.ldu.width / 2, this.ldu.height / 2);
                l.rotate(Math.PI);
                l.translate(-this.ldu.width / 2, -this.ldu.height / 2)
            }
            l.fillRect(this.ldu.x, this.ldu.y, this.ldu.width, this.ldu.height);
            l.drawImage(c, this.ldu.x, this.ldu.y, this.ldu.width, this.ldu.height);
            l.restore()
        } else {
            if (this.parent.hue.abu === true) {
                tvj.slh.ayc(l, this.ldu.x, this.ldu.y, this.ldu.width, this.ldu.height, this.tef, 1)
            }
        }
        tvj.slh.ryr(l, this.jyi.x, this.jyi.y, this.jyi.width, this.jyi.height, 0, this.vhj);
        tvj.slh.edu(l, this.lfm, this.pwl, this.jyi.x, this.jyi.y + this.fgo, this.jyi.width, this.jyi.height, this.qaz, this.gpd, this.hie);
        tvj.slh.ryr(l, this.wny.x, this.wny.y, this.wny.width, this.wny.height, 0, this.vhj);
        if (tvj.wxo.value36) {
            tvj.slh.iuq(l, this.parent.language.cmr.toUpperCase(), this.pwl, this.wny.x, this.wny.y + this.fgo, this.wny.width, this.wny.height, this.qaz, this.are, this.hie, this.ezi)
        } else {
            if (tvj.wxo.value37) {
                tvj.slh.iuq(l, this.parent.language.hsx.toUpperCase(), this.pwl, this.wny.x, this.wny.y + this.fgo, this.wny.width, this.wny.height, this.qaz, this.are, this.hie, this.ezi)
            }
        }
        tvj.slh.ryr(l, this.bdi.x, this.bdi.y, this.bdi.width, this.bdi.height, 0, this.sra);
        tvj.slh.iuq(l, this.parent.language.njk.toUpperCase(), this.pwl, this.bdi.x, this.bdi.y + this.fgo, this.bdi.width, this.bdi.height, this.qaz, this.are, this.hie, this.ezi);
        tvj.slh.ryr(l, this.xnk.x, this.xnk.y, this.xnk.width, this.xnk.height, 0, this.vhj);
        tvj.slh.iuq(l, this.parent.language.ehm.toUpperCase(), this.pwl, this.xnk.x, this.xnk.y + this.fgo, this.xnk.width, this.xnk.height, this.qaz, this.are, this.hie, this.ezi);
        if (this.zjk) {
            this.emw(l)
        }
        if (this.yvi) {
            if (tvj.wxo.value36) {
                tvj.slh.wpo(l, this.dhw, this.pwl, this.wny.x, this.wny.y + this.fgo, this.wny.width, this.wny.height, this.qaz, this.are, this.hie, this.ezi)
            } else {
                if (tvj.wxo.value37) {
                    tvj.slh.wpo(l, this.cvh, this.pwl, this.wny.x, this.wny.y + this.fgo, this.wny.width, this.wny.height, this.qaz, this.are, this.hie, this.ezi)
                }
            }
            tvj.slh.wpo(l, this.parent.axw(this.dgj), this.pwl, this.bdi.x, this.bdi.y + this.fgo, this.bdi.width, this.bdi.height, this.qaz, this.are, this.hie, this.ezi);
            tvj.slh.wpo(l, this.parent.axw(this.vec), this.pwl, this.xnk.x, this.xnk.y + this.fgo, this.xnk.width, this.xnk.height, this.qaz, this.are, this.hie, this.ezi)
        }
        for (var b = 0, e = this.zho.length; b < e; b++) {
            this.zho[b].mdb()
        }
        if (this.ehf) {
            tvj.slh.lml(l, this.uny.x, this.uny.y, this.uny.width, this.uny.height, this.zul, this.xwt, 0.3, this.wfa, this.qtj, 1);
            tvj.slh.edu(l, this.parent.language.ica.toUpperCase(), this.xuc, this.uny.x, this.uny.y, this.uny.width, this.uny.height, this.qaz, this.are, this.hie)
        }
        l.restore();
        if (this.uek && this.gvg) {
            if (a) {
                this.uek.drawImage(this.gvg, j, f, k, d, this.x + j, this.y + f, k, d)
            } else {
                this.uek.drawImage(this.gvg, this.x, this.y)
            }
        }
    };
    this.emw = function(b) {
        var c = Math.round(this.gxq.height / 2),
            a = Math.round(this.gxq.x + c),
            d = Math.round(this.gxq.y + c / 2);
        b.save();
        tvj.slh.ryr(b, this.gxq.x, this.gxq.y, this.gxq.width, this.gxq.height, this.xef, this.hyx, this.qxa, this.qtj);
        tvj.slh.edu(b, this.parent.language.bif, this.pwl, this.gxq.x + this.gxq.height, this.gxq.y, this.gxq.width - this.gxq.height, this.gxq.height, this.qaz, this.fft, this.hie);
        tvj.slh.ayc(b, a, d, c, c, null, 0, this.nro, this.qtj, 1);
        if (this.tun) {
            tvj.slh.ayc(b, a + c / 4, d + c / 4, c / 2, c / 2, this.nro, 1)
        }
        b.restore()
    }
}
zbk.prototype = new kpu;

function oqn() {
    var a = this;
    this.saz = function() {
        a.ulh = false
    };
    this.mdb = function() {
        if (!this.dse()) {
            return
        }
        var b = this.context2D;
        b.save();
        if (this.ifr != null) {
            b.drawImage(this.ifr, 0, 0, this.ifr.width, this.ifr.height, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
oqn.prototype = new dth;

function eno() {
    this.szr = "";
    this.vgj = "";
    this.ifr = null;
    this.ahx = "sans-serif";
    this.hro = "sans-serif";
    this.hie = "bold";
    this.dmp = null;
    this.pwl = null;
    this.uhb = null;
    this.edr = null;
    this.ggg = null;
    this.uhl = 16;
    this.mcn = 20;
    this.syx = 0;
    this.rpw = 0;
    this.qtj = 2;
    this.trk = 3;
    this.rln = 3;
    this.eoa = 3;
    this.uko = 3;
    this.xpk = function(a, e, b, d, c) {
        eno.prototype.xpk.call(this, a, e, b);
        this.szr = d;
        this.vgj = c
    };
    this.sqc = function(a) {
        try {
            this.uhl = a.juz;
            this.mcn = a.kgw;
            this.syx = a.cgm;
            this.rpw = a.qhj;
            this.qtj = a.ioh;
            this.trk = a.xpe;
            this.rln = a.ywn;
            this.eoa = a.kuh;
            this.uko = a.ujb
        } catch (b) {
            console.error(b)
        }
    };
    this.gmo = function(a) {
        try {
            this.ahx = a.lkw;
            this.hro = a.guo;
            this.hie = a.rxk;
            this.dmp = a.nze;
            this.pwl = a.riz;
            this.uhb = a.fsc;
            this.edr = a.fnk;
            this.ggg = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.zja = function(a, b) {
        this.vgj = a;
        if (b && b === true && this.context2D != null && this.dse() === true) {
            this.parent.mdb(this.x, this.y, this.width, this.height)
        }
    };
    this.cvm = function(a, b) {
        this.szr = a;
        if (b && b === true && this.context2D != null && this.dse() === true) {
            this.parent.mdb(this.x, this.y, this.width, this.height)
        }
    };
    this.mdb = function() {
        if (!this.dse()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.edr) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.uhb);
            b.addColorStop(1, this.edr);
            tvj.slh.dsq(a, this.x, this.y, this.width, this.height, this.trk, this.rln, this.eoa, this.uko, this.ggg, 1, b, this.qtj, 1)
        } else {
            tvj.slh.dsq(a, this.x, this.y, this.width, this.height, this.trk, this.rln, this.eoa, this.uko, this.ggg, 1, this.uhb, this.qtj, 1)
        }
        if (this.szr != null) {
            tvj.slh.edu(a, this.szr, this.dmp, this.x + this.qtj, this.y + this.syx, this.width - 2 * this.qtj, this.height, this.ahx, this.uhl, this.hie)
        }
        if (this.vgj != null) {
            if (this.szr != null) {
                tvj.slh.edu(a, this.vgj, this.pwl, this.x + this.qtj, this.y + this.rpw, this.width - 2 * this.qtj, this.height, this.hro, this.mcn, this.hie)
            } else {
                tvj.slh.edu(a, this.vgj, this.pwl, this.x + this.qtj, this.y + this.qtj, this.width - 2 * this.qtj, this.height, this.hro, this.mcn, this.hie)
            }
        }
        if (this.ifr) {
            a.drawImage(this.ifr, 0, 0, this.ifr.width, this.ifr.height, this.x + this.qtj, this.y + this.qtj, this.width - 2 * this.qtj, this.height - 2 * this.qtj)
        }
        a.restore();
        if (this.uek && this.gvg) {
            this.uek.drawImage(this.gvg, this.x, this.y)
        }
    }
}
eno.prototype = new kpu;

function edk() {
    var a = this;
    this.ifr = null;
    this.lfm = "";
    this.cml = null;
    this.unn = false;
    this.eyy = false;
    this.fpp = 0;
    this.rtk = 0;
    this.wwd = 150;
    this.rju = 100;
    this.sjc = 0;
    this.pbi = 3;
    this.gct = 92;
    this.czx = 0;
    this.hkc = 0;
    this.ahx = "sans-serif";
    this.mzs = "sans-serif";
    this.hie = "";
    this.dmp = null;
    this.czt = null;
    this.bqq = null;
    this.lat = null;
    this.gom = null;
    this.uhb = null;
    this.edr = null;
    this.ggg = null;
    this.ktj = null;
    this.peb = null;
    this.ekl = null;
    this.cej = null;
    this.kmx = null;
    this.ffy = new mfo();
    this.uhl = 0;
    this.xqd = 0;
    this.syx = 0;
    this.kpb = 0;
    this.gtv = 0;
    this.qtj = 0;
    this.hev = 0;
    this.vxj = 0;
    this.sqc = function(b) {
        try {
            this.uhl = b.juz;
            this.xqd = b.npl;
            this.syx = b.cgm;
            this.kpb = b.adc;
            this.gtv = b.dka;
            this.qtj = b.ioh;
            this.hev = b.dkr;
            this.vxj = b.oza;
            this.ffy = b.gii;
            this.ykj()
        } catch (c) {
            console.error(c)
        }
    };
    this.gmo = function(b) {
        try {
            this.ahx = b.lkw;
            this.mzs = b.ayk;
            this.hie = b.rxk;
            this.dmp = b.nze;
            this.czt = b.qta;
            this.bqq = b.adp;
            this.lat = b.bdp;
            this.gom = b.jjj;
            this.uhb = b.fsc;
            this.edr = b.fnk;
            this.ggg = b.backgroundColor;
            this.tvd = b.gia;
            this.ktj = b.qow;
            this.ykj()
        } catch (c) {
            console.error(c)
        }
    };
    this.ntn = function(b) {
        try {
            this.dmp = b.nze;
            this.czt = b.qta;
            this.bqq = b.adp;
            this.lat = b.bdp;
            this.ykj()
        } catch (c) {
            console.error(c)
        }
    };
    this.zyq = function() {
        return {
            nze: this.dmp,
            qta: this.czt,
            adp: this.bqq,
            bdp: this.lat
        }
    };
    this.ykj = function() {
        this.cej = this.ggg;
        this.kmx = this.uhb;
        this.peb = this.dmp;
        this.ekl = this.bqq;
        if (this.height > 0 && this.edr) {
            this.kmx = this.context2D.createLinearGradient(this.width / 2, 0, this.width / 2, this.height);
            this.kmx.addColorStop(0, this.uhb);
            this.kmx.addColorStop(1, this.edr)
        }
        if (this.height > 0 && this.tvd) {
            this.cej = this.context2D.createLinearGradient(this.width / 2, 0, this.width / 2, this.height);
            this.cej.addColorStop(0, this.ggg);
            this.cej.addColorStop(1, this.tvd)
        }
        if (this.uhl > 0 && this.czt) {
            this.peb = this.context2D.createLinearGradient(this.width / 2, 0, this.width / 2, this.height / 2);
            this.peb.addColorStop(0, this.dmp);
            this.peb.addColorStop(1, this.czt)
        }
        if (this.xqd > 0 && this.lat) {
            this.ekl = this.context2D.createLinearGradient(this.width / 2, this.height / 2, this.width / 2, this.height);
            this.ekl.addColorStop(0, this.bqq);
            this.ekl.addColorStop(1, this.lat)
        }
    };
    this.nyv = function(b, c) {
        if (b >= this.parent.hue.cdg.mom.x && b <= this.parent.hue.cdg.mom.x + this.parent.hue.cdg.mom.width && c >= this.parent.hue.cdg.mom.y && c <= this.parent.hue.cdg.mom.y + this.parent.hue.cdg.mom.height && this.dse()) {
            if (this.unn) {
                this.eyy = false;
                this.unn = false;
                this.stop();
                this.kae()
            }
            return true
        }
        return false
    };
    this.yeu = function(b, c) {
        this.cml = b;
        if (c && c === true) {
            this.parent.mdb(this.x, this.y, this.width, this.height)
        }
    };
    this.cvm = function(b, c) {
        this.lfm = b;
        if (c && c === true) {
            this.parent.mdb(this.x, this.y, this.width, this.height)
        }
    };
    this.mgx = function() {
        return this.lfm
    };
    this.start = function() {
        this.tzp(true);
        this.parent.mdb();
        this.sjc = new Date().getTime();
        this.rtk = 0;
        this.hkc = 0;
        this.czx = Math.floor((9 * this.cml) / (10 * this.gct));
        this.eyy = true;
        this.unn = false;
        this.parent.xbq.ruf("jackpot");
        this.iwe()
    };
    this.iwe = function() {
        var b = 0,
            c = new Date().getTime();
        a.rtk++;
        if (a.rtk < a.wwd) {
            if (a.rtk === a.pbi) {
                a.hkc = Math.floor(a.cml / 10)
            } else {
                if (a.rtk > a.pbi && a.rtk < a.pbi + a.gct) {
                    a.hkc += a.czx
                } else {
                    if (a.rtk == a.pbi + a.gct) {
                        a.hkc = a.cml
                    }
                }
            }
            a.mdb();
            b = (a.rtk * a.rju - (c - a.sjc));
            a.fpp = setTimeout(a.iwe, b)
        } else {
            a.parent.xbq.loh("jackpot");
            if (!tvj.wxo.value76 || !tvj.wxo.value76.u) {
                a.eyy = false;
                a.stop();
                a.kae()
            } else {
                a.ldm();
                a.unn = true;
                a.elv()
            }
        }
    };
    this.elv = function() {
        var b = 0,
            c = new Date().getTime();
        a.rtk++;
        a.mdb();
        b = (a.rtk * a.rju - (c - a.sjc));
        a.fpp = setTimeout(a.elv, b)
    };
    this.stop = function() {
        clearTimeout(this.fpp)
    };
    this.mdb = function() {
        if (!this.dse() || !this.parent.kez()) {
            return
        }
        var b = this.context2D,
            c = (this.hev === 0) ? this.qtj : 0;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        if (this.ifr) {
            if (this.eyy === true) {
                b.drawImage(this.ifr, (this.rtk % 3) * this.ifr.width / 3, 0, this.ifr.width / 3, this.ifr.height, 0, 0, this.width, this.height)
            } else {
                b.drawImage(this.ifr, 0, 0, this.width, this.height)
            }
        } else {
            tvj.slh.dsq(b, 0, -c, this.width, this.height, this.hev, this.hev, this.vxj, this.vxj, this.cej, 1, this.kmx, this.qtj, 1);
            tvj.slh.ryr(b, this.ffy.x, this.ffy.y, this.ffy.width, this.ffy.height, this.vxj, this.ktj, 1)
        }
        if (this.lfm != null) {
            tvj.slh.edu(b, this.lfm, this.peb, this.gtv, this.syx - c, this.width - 2 * this.gtv, this.height, this.ahx, this.uhl, this.hie)
        }
        if (this.eyy === true) {
            if (this.hkc > 0) {
                tvj.slh.edu(b, this.parent.aqx(this.hkc), this.ekl, this.gtv, this.kpb - c, this.width - 2 * this.gtv, this.height, this.mzs, this.xqd, this.hie)
            }
        } else {
            if (this.cml != null) {
                tvj.slh.edu(b, (this.cml > 0) ? this.parent.aqx(this.cml) : 0, this.ekl, this.gtv, this.kpb - c, this.width - 2 * this.gtv, this.height, this.mzs, this.xqd, this.hie)
            }
        }
        b.restore();
        if (this.uek && this.gvg) {
            this.uek.drawImage(this.gvg, this.x, this.y)
        }
    };
    this.kae = function() {};
    this.ldm = function() {}
}
edk.prototype = new kpu;

function hzp() {
    this.ifr = new Image();
    this.vgj = "";
    this.pid = true;
    this.qaz = null;
    this.hie = "bold";
    this.hii = "red";
    this.mnm = "orange";
    this.bpo = "white";
    this.are = 40;
    this.ezi = 0;
    this.fgo = 0;
    this.gtv = 0;
    this.okp = 2;
    this.diz = null;
    this.pjz = 0;
    this.wkf = 0;
    this.xpk = function(a, e, c, b, d) {
        hzp.prototype.xpk.call(this, a, e, c);
        this.ifr = b;
        this.vgj = d
    };
    this.sqc = function(a) {
        try {
            this.are = a.eyf;
            this.ezi = a.sun;
            this.fgo = a.ocl;
            this.gtv = a.dka;
            this.okp = a.hcb
        } catch (b) {
            console.error(b)
        }
    };
    this.gmo = function(a) {
        try {
            this.qaz = a.font;
            this.hie = a.rxk;
            this.hii = a.aet;
            this.mnm = a.dul;
            this.bpo = a.gey
        } catch (b) {
            console.error(b)
        }
    };
    this.zja = function(a, b) {
        this.vgj = a;
        if (b && b === true && this.context2D != null) {
            this.tzp(true, true)
        }
    };
    this.odj = function(a, b) {
        this.vgj = a;
        this.pid = false;
        if (b && b === true && this.context2D != null) {
            this.tzp(true, true)
        }
    };
    this.tzp = function(a, b) {
        this.gpv = a;
        if (b && b === true && this.context2D != null) {
            if (this.gvg == null && this.dse()) {
                this.mdb()
            } else {
                if (this.parent != null) {
                    this.parent.mdb(this.x, this.y, this.width, this.height)
                }
            }
        }
    };
    this.jlk = function(a, b, c) {
        this.diz = a;
        this.pjz = b;
        this.wkf = c
    };
    this.mdb = function() {
        if (!this.dse() || !this.parent.kez()) {
            return
        }
        var b = this.context2D,
            c = null,
            a = (this.gvg != null) ? 0 : this.x,
            d = (this.gvg != null) ? 0 : this.y;
        b.save();
        if (this.gvg == null) {
            b.beginPath();
            b.rect(this.x, this.y, this.width, this.height);
            b.closePath();
            b.clip()
        }
        if (this.pid === true) {
            if (this.diz != null) {
                b.drawImage(this.diz, this.x + this.pjz, this.y + this.wkf, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            if (this.ifr != null) {
                b.drawImage(this.ifr, a, d)
            }
        }
        c = b.createLinearGradient(a + this.width / 2 + this.ezi, d, a + this.width / 2 + this.ezi, d + this.height);
        c.addColorStop(0, this.hii);
        c.addColorStop(1, this.mnm);
        tvj.slh.edu(b, this.vgj, c, a + this.gtv + this.ezi, d + this.fgo, this.width - 2 * this.gtv, this.height, this.qaz, this.are, this.hie, this.bpo, this.okp);
        b.restore();
        if (this.uek && this.gvg) {
            this.uek.drawImage(this.gvg, this.x, this.y)
        }
    }
}
hzp.prototype = new kpu;

function fde() {
    var a = this;
    this.lpe = 0;
    this.jef = 1;
    this.uso = null;
    this.ief = null;
    this.ata = null;
    this.duq = "round";
    this.qaz = null;
    this.hie = "bold";
    this.fcp = "center";
    this.ggg = null;
    this.pwl = null;
    this.vtz = 1;
    this.kmx = null;
    this.are = 17;
    this.gtv = 2;
    this.jst = 0;
    this.qtj = 1;
    this.nhb = 0;
    this.lhh = 0;
    this.aeu = 0;
    this.sqc = function(b) {
        try {
            this.are = b.eyf;
            this.gtv = b.dka;
            this.jst = b.usd;
            this.qtj = b.ioh;
            this.aeu = b.nrj
        } catch (c) {
            console.error(c)
        }
    };
    this.gmo = function(b) {
        try {
            this.duq = b.uqy;
            this.qaz = b.font;
            this.hie = b.rxk;
            this.fcp = b.textAlign;
            this.ggg = b.backgroundColor;
            this.pwl = b.riz;
            this.vtz = b.xvt;
            if (b.fsc && b.fnk) {
                this.kmx = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.kmx.addColorStop(0, b.fsc);
                this.kmx.addColorStop(1, b.fnk)
            } else {
                this.kmx = b.fsc
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.zzs = function() {
        return this.duq
    };
    this.mkg = function(c, b) {
        this.lpe = c;
        this.jef = b
    };
    this.nkk = function(b) {
        this.ifr = b;
        if (this.duq === "round") {
            this.nhb = this.width / 2 - this.gtv
        }
        if (this.ifr) {
            this.lhh = Math.round(this.ifr.height / (2 * this.jef))
        }
    };
    this.ibc = function(b) {
        this.lpe = (b < this.jef) ? b : this.lpe
    };
    this.ypq = function(b) {
        this.uso = b
    };
    this.saz = function() {
        a.ulh = false
    };
    this.qik = function() {
        a.zop = false;
        if (a.dse()) {
            a.parent.mdb(a.x, a.y, a.width, a.height)
        }
    };
    this.mdb = function() {
        if (!this.dse()) {
            return
        }
        var k = this.context2D,
            e = (this.skl()) ? this.vtz : this.vtz / 2,
            b = this.are,
            d = null,
            c = 0,
            j = 0,
            h = 0,
            g = 0;
        k.save();
        if (this.ifr && this.kgs) {
            if (!this.skl()) {
                k.globalAlpha = e
            }
            if (this.duq === "round") {
                tvj.slh.yxj(k, this.x + this.width / 2, this.y + this.height / 2, this.nhb, this.ggg, e * this.vtz)
            } else {
                if (this.duq === "rect") {
                    tvj.slh.lml(k, this.x, this.y, this.width, this.height, this.jst, this.ggg, e * this.vtz, this.kmx, this.qtj, e)
                }
            }
            if (this.tmr()) {
                if (this.duq === "round") {
                    k.drawImage(this.ifr, 0, (this.lpe * 2 * this.lhh) + this.lhh, this.ifr.width, this.lhh, this.x, this.y, this.width, this.height)
                } else {
                    if (this.duq === "rect") {
                        k.drawImage(this.ifr, 0, (this.lpe * 2 * this.lhh) + this.lhh, this.ifr.width, this.lhh, this.x, this.y, this.width, this.height)
                    }
                }
            } else {
                if (this.duq === "round") {
                    k.drawImage(this.ifr, 0, (this.lpe * 2 * this.lhh), this.ifr.width, this.lhh, this.x, this.y, this.width, this.height)
                } else {
                    if (this.duq === "rect") {
                        k.drawImage(this.ifr, 0, (this.lpe * 2 * this.lhh), this.ifr.width, this.lhh, this.x, this.y, this.width, this.height)
                    }
                }
            }
            if (this.vgj != null) {
                k.textAlign = this.fcp;
                k.textBaseline = "bottom";
                k.font = this.hie + " " + b + "px " + this.qaz;
                k.fillStyle = this.pwl;
                d = this.vgj.split("|");
                h = 0;
                g = (this.fcp === "center") ? this.x + this.width / 2 : (this.fcp === "left") ? this.x + 2 * this.gtv : this.x + this.width - 2 * this.gtv;
                for (var f = 0; f < d.length; f++) {
                    h = (k.measureText(d[f]).width > h) ? k.measureText(d[f]).width : h
                }
                if (h > this.width - 2 * this.gtv) {
                    c = ((this.width - 2 * this.gtv) / h);
                    b = Math.round(c * b) - 1;
                    k.font = this.hie + " " + b + "px " + this.qaz
                }
                if (b * d.length > this.aeu) {
                    c = ((this.aeu) / (b * d.length));
                    b = Math.round(c * b) - 1;
                    k.font = this.hie + " " + b + "px " + this.qaz
                }
                j = (this.height - this.gtv - this.aeu) + (this.aeu - b * d.length) / 2;
                j += b;
                for (var f = 0; f < d.length; f++) {
                    k.fillText(d[f], g, this.y + j);
                    j += b
                }
            }
        }
        k.restore()
    }
}
fde.prototype = new dth;

function jki() {
    var a = this;
    this.duq = "rect";
    this.dil = -1;
    this.qaz = null;
    this.hie = "bold";
    this.ggg = null;
    this.tvd = null;
    this.wyx = null;
    this.qwc = null;
    this.uhb = null;
    this.pwl = null;
    this.dll = null;
    this.jst = 3;
    this.ezi = -2;
    this.fgo = 2;
    this.rwg = 6;
    this.are = 26;
    this.qtj = 2;
    this.sqc = function(b) {
        try {
            this.are = b.eyf;
            this.ezi = b.sun;
            this.fgo = b.ocl;
            this.rwg = b.une;
            this.jst = b.usd;
            this.qtj = b.ioh
        } catch (c) {
            console.error(c)
        }
    };
    this.gmo = function(b) {
        try {
            this.qaz = b.font;
            this.hie = b.rxk;
            this.ggg = b.backgroundColor;
            this.tvd = b.gia;
            this.wyx = b.cgj;
            this.qwc = b.czm;
            this.uhb = b.fsc;
            this.pwl = b.riz;
            this.dll = b.stu;
            this.duq = b.uqy;
            this.dil = b.mku
        } catch (c) {
            console.error(c)
        }
    };
    this.zzs = function() {
        return this.duq
    };
    this.saz = function() {
        a.ulh = false
    };
    this.qik = function() {
        a.zop = false;
        if (a.dse()) {
            a.parent.mdb(a.x, a.y, a.width, a.height)
        }
    };
    this.mdb = function() {
        if (!this.dse()) {
            return
        }
        var p = this.context2D,
            l = null,
            n = this.ggg,
            m = this.tvd,
            b = this.are,
            e = null,
            d = 0,
            o = 0,
            c = 1,
            k = 0,
            g = 0;
        p.save();
        p.lineJoin = "round";
        p.lineCap = "round";
        p.textAlign = "center";
        if (this.tmr()) {
            n = (this.wyx != null) ? this.wyx : n;
            m = (this.qwc != null) ? this.qwc : m
        }
        if (n != null) {
            if (m != null) {
                l = p.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                l.addColorStop(1, m);
                l.addColorStop(0, n);
                if (this.duq === "rect") {
                    if (this.uhb) {
                        tvj.slh.ryr(p, this.x, this.y, this.width, this.height, this.jst, l, this.uhb, this.qtj)
                    } else {
                        tvj.slh.ayc(p, this.x, this.y, this.width, this.height, l, 1)
                    }
                } else {
                    if (this.duq === "triangle") {
                        tvj.slh.abz(p, this.dil, this.x, this.y, this.width, this.height, this.jst, l, 1, this.uhb, this.qtj, 1)
                    }
                }
            } else {
                if (this.duq === "rect") {
                    if (this.uhb) {
                        tvj.slh.ryr(p, this.x, this.y, this.width, this.height, this.jst, n, this.uhb, this.qtj, 1)
                    } else {
                        tvj.slh.ayc(p, this.x, this.y, this.width, this.height, n, 1)
                    }
                } else {
                    if (this.duq === "triangle") {
                        tvj.slh.abz(p, this.dil, this.x, this.y, this.width, this.height, this.jst, n, 1, this.uhb, this.qtj, 1)
                    }
                }
            }
        }
        if (this.ifr != null) {
            g = this.height - 2 * this.rwg;
            p.drawImage(this.ifr, this.x + this.width / 2 - g / 2, this.y + this.rwg, g, g)
        }
        if (this.vgj != null) {
            p.textAlign = "center";
            p.textBaseline = "bottom";
            e = this.vgj.split("|");
            d = 0;
            if (this.tmr()) {
                d = 1;
                p.fillStyle = this.dll
            } else {
                p.fillStyle = this.pwl
            }
            p.font = this.hie + " " + b + "px " + this.qaz;
            for (var f = 0, j = e.length; f < j; f++) {
                o = (p.measureText(e[f]).width > o) ? p.measureText(e[f]).width : o
            }
            if (o > this.width - 2 * this.rwg) {
                c = ((this.width - 2 * this.rwg) / o);
                b = Math.round(c * b) - 1;
                p.font = this.hie + " " + b + "px " + this.qaz
            }
            if (b * e.length > this.height) {
                c = ((this.height) / (b * e.length));
                b = Math.round(c * b) - 1;
                p.font = this.hie + " " + b + "px " + this.qaz
            }
            k = (this.height - b * e.length) / 2;
            k += b;
            for (var f = 0; f < e.length; f++) {
                p.fillText(e[f], (this.x + this.width / 2) + this.ezi, this.y - this.fgo + k + d);
                k += b
            }
        }
        p.restore()
    }
}
jki.prototype = new dth;

function xes() {
    var a = this;
    this.vgj = null;
    this.unn = false;
    this.ulh = false;
    this.fcn = false;
    this.qaz = null;
    this.hie = "bold";
    this.fcp = "center";
    this.ggg = null;
    this.uhb = null;
    this.pwl = null;
    this.ido = "rect";
    this.azw = new mfo();
    this.ans = new mfo();
    this.are = 16;
    this.jst = 8;
    this.qtj = 1;
    this.got = 0;
    var b = 200;
    this.xpk = function(c, f, d, e) {
        this.vgj = e;
        xes.prototype.xpk.call(this, c, f, d)
    };
    this.gmo = function(c) {
        try {
            this.qaz = c.font;
            this.hie = c.rxk;
            this.fcp = c.textAlign;
            this.ggg = c.backgroundColor;
            this.uhb = c.fsc;
            this.pwl = c.riz;
            this.ido = c.type
        } catch (d) {
            console.error(d)
        }
    };
    this.sqc = function(c) {
        try {
            this.azw = c.hwt;
            this.ans = c.kzz;
            this.are = c.eyf;
            this.jst = c.usd;
            this.qtj = c.ioh
        } catch (d) {
            console.error(d)
        }
    };
    this.vxc = function(c) {
        this.unn = c
    };
    this.skl = function() {
        return this.unn
    };
    this.wej = function(c, d) {
        this.fcn = c;
        if (d && d === true) {
            this.parent.mdb(this.x, this.y, this.width, this.height)
        }
    };
    this.sdn = function() {
        return this.fcn
    };
    this.zja = function(c, d) {
        this.vgj = c;
        if (d && d === true && this.dse()) {
            this.parent.mdb(this.x, this.y, this.width, this.height)
        }
    };
    this.che = function(c, d) {
        this.ulh = c;
        d = (d === false) ? false : true;
        clearTimeout(this.got);
        if (this.ulh === true && d === true) {
            this.got = setTimeout(this.saz, b)
        }
    };
    this.oax = function() {
        return this.ulh
    };
    this.saz = function() {
        a.ulh = false
    };
    this.mdb = function() {
        if (!this.dse()) {
            return
        }
        var c = this.context2D;
        c.save();
        tvj.slh.ryr(c, this.x, this.y, this.width, this.height, this.jst, this.ggg, this.uhb, this.qtj);
        if (this.ido === "rect") {
            tvj.slh.ayc(c, this.x + this.ans.x, this.y + this.ans.y, this.ans.width, this.ans.height, this.pwl, 0.2, this.pwl, this.qtj, 1);
            if (this.fcn === true) {
                tvj.slh.ayc(c, this.x + this.ans.x + this.ans.width / 4, this.y + this.ans.y + this.ans.height / 4, this.ans.width / 2, this.ans.height / 2, this.pwl, 1)
            }
        } else {
            if (this.ido === "round") {
                tvj.slh.yxj(c, this.x + this.ans.x + this.ans.width / 2, this.y + this.ans.y + this.ans.height / 2, this.ans.width / 2, this.pwl, 0.2, this.pwl, this.qtj, 1);
                if (this.fcn === true) {
                    tvj.slh.yxj(c, this.x + this.ans.x + this.ans.width / 2, this.y + this.ans.y + this.ans.height / 2, this.ans.width / 4, this.pwl, 1)
                }
            }
        }
        if (this.vgj && this.vgj != "") {
            tvj.slh.hng(c, this.vgj, this.pwl, this.x + this.azw.x, this.y + this.azw.y, this.azw.width, this.azw.height, this.qaz, this.are, this.hie, this.fcp, true)
        }
        c.restore();
        if (this.uek && this.gvg) {
            this.uek.drawImage(this.gvg, this.x, this.y)
        }
    };
    this.kgs = {}
}
xes.prototype = new kpu;

function rfr() {
    var b = this;
    var c = 0;
    var a = 1;
    this.zcr = null;
    this.szr = "";
    this.uou = "";
    this.fak = "";
    this.rtw = "";
    this.nrg = false;
    this.dhw = [];
    this.wgk = 0;
    this.afr = 0;
    this.rok = 0;
    this.nqt = 0;
    this.tyz = 0;
    this.jzs = 0;
    this.fmy = 0;
    this.hry = 0;
    this.omc = false;
    this.mma = false;
    this.jxc = false;
    this.ido = "center";
    this.qaz = "arial";
    this.hie = "bold";
    this.dmp = "white";
    this.pwl = "white";
    this.ggg = "black";
    this.tvd = null;
    this.uhb = "white";
    this.edr = "rgb(150,150,150)";
    this.tef = null;
    this.vyd = null;
    this.qtj = 3;
    this.nwe = 0;
    this.udp = 0;
    this.khp = 0;
    this.uhl = 30;
    this.stc = 24;
    this.jyi = new mfo();
    this.gbk = new mfo();
    this.efn = new mfo();
    this.auz = new mfo();
    this.zsj = new mfo();
    this.ifc = new mfo();
    this.heu = new mfo();
    this.bht = new mfo();
    this.tao = new mfo();
    this.wwd = 7;
    this.omu = 0;
    this.kky = 0;
    this.rtk = 0;
    this.akx = c;
    this.sjc = 0;
    this.rju = 89;
    this.ksp = false;
    this.fpp = 0;
    this.ozs = 0;
    this.hjk = 0;
    this.unz = 0;
    this.oec = null;
    this.aal = 0;
    this.pbm = 1;
    this.zqo = 250;
    this.xpk = function(d, f, e) {
        rfr.prototype.xpk.call(this, d, f, e);
        this.zcr = new lts();
        this.zcr.xpk();
        this.zcr.yhs("buttons");
        this.zcr.yhs("checkboxes");
        this.zcr.yhs("displays");
        this.zcr.yhs("lbuttons");
        this.zcr.yhs("mbuttons");
        this.zcr.yhs("vbuttons");
        this.zcr.yhs("cbuttons")
    };
    this.zfl = function(d) {
        try {
            this.tuz(d);
            this.egp(d)
        } catch (f) {
            console.error(f)
        }
    };
    this.gmo = function(j) {
        try {
            var m = this.zcr.lkr("lbuttons"),
                l = this.zcr.lkr("mbuttons"),
                f = this.zcr.lkr("cbuttons"),
                g = this.zcr.lkr("displays");
            this.ido = j.type;
            this.qaz = j.font;
            this.hie = j.rxk;
            this.dmp = j.nze;
            this.pwl = j.riz;
            this.ggg = j.backgroundColor;
            this.tvd = j.gia;
            this.uhb = j.fsc;
            this.tef = j.soi;
            this.vyd = j.sgg;
            for (var h = 0, d = m.length; h < d; h++) {
                m[h].gmo(j.kmt)
            }
            for (var h = 0, d = l.length; h < d; h++) {
                l[h].gmo(j.jjk)
            }
            for (var h = 0, d = f.length; h < d; h++) {
                f[h].gmo(j.teg)
            }
            for (var h = 0, d = g.length; h < d; h++) {
                g[h].gmo(j.display)
            }
            this.zcr.knk("checkboxes", "#gmo", [j.bkk])
        } catch (k) {
            console.error(k)
        }
    };
    this.sqc = function(j) {
        try {
            var m = this.zcr.lkr("lbuttons"),
                l = this.zcr.lkr("mbuttons"),
                f = this.zcr.lkr("cbuttons"),
                g = this.zcr.lkr("displays");
            this.qtj = j.ioh;
            this.nwe = j.gbw;
            this.udp = j.qmw;
            this.khp = j.tkx;
            this.uhl = j.juz;
            this.stc = j.hju;
            this.jyi = j.mck;
            this.gbk = j.mng;
            this.efn = j.jls;
            this.auz = j.hhm;
            this.zsj = j.rhw;
            this.ifc = j.hhr;
            this.zcr.tew("lgames", "#gae", [j.xcl]);
            this.zcr.tew("mgames", "#gae", [j.otc]);
            this.zcr.tew("lmincredit", "#gae", [j.wpk]);
            this.zcr.tew("mmincredit", "#gae", [j.obh]);
            this.zcr.tew("lmaxcredit", "#gae", [j.alk]);
            this.zcr.tew("mmaxcredit", "#gae", [j.wzy]);
            this.zcr.tew("lmaxwin", "#gae", [j.war]);
            this.zcr.tew("mmaxwin", "#gae", [j.oph]);
            this.zcr.tew("start", "#gae", [j.kmb]);
            this.zcr.tew("cancel", "#gae", [j.ugh]);
            this.zcr.tew("gamesd", "#gae", [j.xit]);
            this.zcr.tew("mincreditd", "#gae", [j.ysu]);
            this.zcr.tew("maxcreditd", "#gae", [j.soo]);
            this.zcr.tew("maxwind", "#gae", [j.wut]);
            for (var h = 0, d = m.length; h < d; h++) {
                m[h].sqc(j.kmt)
            }
            for (var h = 0, d = l.length; h < d; h++) {
                l[h].sqc(j.jjk)
            }
            for (var h = 0, d = f.length; h < d; h++) {
                f[h].sqc(j.teg)
            }
            for (var h = 0, d = g.length; h < d; h++) {
                g[h].sqc(j.display)
            }
            this.zcr.tew("cmincredit", "#gae", [j.jkn]);
            this.zcr.tew("cmaxcredit", "#gae", [j.jyk]);
            this.zcr.tew("cmaxwin", "#gae", [j.phd]);
            this.zcr.knk("checkboxes", "#sqc", [j.bkk])
        } catch (k) {
            console.error(k)
        }
    };
    this.tuz = function(d) {
        this.zcr.zxg("start", this.hsz(d.kmb, this.parent.language.start, this.uuv, this.parent.ayv.fcw), ["buttons", "cbuttons"]);
        this.zcr.zxg("cancel", this.hsz(d.ugh, this.parent.language.zpu, this.ykp, this.parent.ayv.wuz), ["buttons", "cbuttons"]);
        this.zcr.zxg("lgames", this.hsz(d.xcl, "", this.sis, null), ["buttons", "lbuttons", "vbuttons"]);
        this.zcr.zxg("mgames", this.hsz(d.otc, "+", this.kfs, null), ["buttons", "mbuttons", "vbuttons"]);
        this.zcr.zxg("lmincredit", this.hsz(d.wpk, "", this.qjn, null), ["buttons", "lbuttons", "vbuttons"]);
        this.zcr.zxg("mmincredit", this.hsz(d.obh, "+", this.kmd, null), ["buttons", "mbuttons", "vbuttons"]);
        this.zcr.zxg("lmaxcredit", this.hsz(d.alk, "", this.fra, null), ["buttons", "lbuttons", "vbuttons"]);
        this.zcr.zxg("mmaxcredit", this.hsz(d.wzy, "+", this.jfa, null), ["buttons", "mbuttons", "vbuttons"]);
        this.zcr.zxg("lmaxwin", this.hsz(d.war, "", this.wuv, null), ["buttons", "lbuttons", "vbuttons"]);
        this.zcr.zxg("mmaxwin", this.hsz(d.oph, "+", this.hcv, null), ["buttons", "mbuttons", "vbuttons"]);
        this.zcr.zxg("cmincredit", this.vkp(d.jkn, "", this.lwx), ["checkboxes"]);
        this.zcr.zxg("cmaxcredit", this.vkp(d.jyk, "", this.zmd), ["checkboxes"]);
        this.zcr.zxg("cmaxwin", this.vkp(d.phd, "", this.leo), ["checkboxes"])
    };
    this.egp = function(d) {
        this.zcr.zxg("gamesd", this.hqn(d.xit, null, (this.dhw[this.wgk] > 0) ? this.dhw[this.wgk] : "---"), ["displays"]);
        this.zcr.zxg("mincreditd", this.hqn(d.ysu, null, "---"), ["displays"]);
        this.zcr.zxg("maxcreditd", this.hqn(d.soo, null, "---"), ["displays"]);
        this.zcr.zxg("maxwind", this.hqn(d.wut, null, "---"), ["displays"])
    };
    this.hqn = function(d, g, f) {
        var e = new eno();
        e.xpk(d, this.context2D, null, g, f);
        e.parent = this;
        return e
    };
    this.hsz = function(f, h, g, e) {
        var d = new jki();
        d.xpk(f, this.context2D, null, null, h);
        d.parent = this;
        d.kgs = g;
        if (e) {
            d.wyv = e.woo
        }
        return d
    };
    this.vkp = function(e, g, f) {
        var d = new xes();
        d.xpk(e, this.context2D, null, g);
        d.parent = this;
        d.kgs = f;
        return d
    };
    this.nyv = function(q, m) {
        var r = this.zcr.lkr("vbuttons"),
            k = this.zcr.lkr("cbuttons"),
            g = this.zcr.lkr("checkboxes"),
            o = this.zcr.mmc("cancel"),
            p = q - this.x,
            n = m - this.y;
        if (this.cfp) {
            return true
        }
        if ((!o || !o.dse()) && (q < this.x || q > this.x + this.width || m < this.y || m > this.y + this.height)) {
            this.jxc = true;
            this.dwo();
            return true
        }
        for (var f = 0, l = r.length; f < l; f++) {
            var d = r[f];
            if (p >= d.x && p <= d.x + d.width && n >= d.y && n <= d.y + d.height) {
                if (d.dse() === true && d.skl() === true && d.oax() === false) {
                    d.vdy(true, false, false);
                    this.aal = 0;
                    this.pbm = 1;
                    if (d.kgs() === false) {
                        this.oec = function() {
                            if (d.kgs() === true) {
                                clearInterval(b.unz);
                                d.vdy(false, false);
                                b.parent.mdb();
                                for (var s = 0; s < l; s++) {
                                    r[s].che(false)
                                }
                            }
                        };
                        this.unz = setInterval(this.oec, this.zqo)
                    }
                    for (var e = 0; e < l; e++) {
                        r[e].che(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, l = k.length; f < l; f++) {
            var d = k[f];
            if (p >= d.x && p <= d.x + d.width && n >= d.y && n <= d.y + d.height) {
                if (d.dse() === true && d.skl() === true) {
                    this.parent.xbq.loh("btn");
                    this.parent.xbq.ruf("btn");
                    d.vdy(true, false);
                    d.kgs();
                    for (var e = 0; e < l; e++) {
                        k[e].che(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, l = g.length; f < l; f++) {
            var h = g[f];
            if (p >= h.x && p <= h.x + h.width && n >= h.y && n <= h.y + h.height) {
                if (h.dse() === true && h.skl() === true) {
                    h.wej(!h.sdn(), true);
                    h.kgs();
                    for (var e = 0; e < l; e++) {
                        g[e].che(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.hxa = function() {
        var e = this.zcr.lkr("vbuttons"),
            h = this.zcr.lkr("cbuttons");
        for (var g = 0, d = e.length; g < d; g++) {
            var f = e[g];
            if (f.tmr() == true) {
                clearInterval(this.unz);
                f.vdy(false, false);
                this.parent.mdb();
                return true
            }
        }
        for (var g = 0, d = h.length; g < d; g++) {
            var f = h[g];
            if (f.tmr() == true) {
                f.vdy(false, false);
                this.parent.mdb();
                return true
            }
        }
        return false
    };
    this.qgb = function(k) {
        var h = this.zcr.lkr("buttons");
        if (this.cfp) {
            return true
        }
        for (var g = 0, d = h.length; g < d; g++) {
            var f = h[g];
            if (k == f.wyv) {
                if (f.skl() && !f.oax()) {
                    this.parent.xbq.loh("btn");
                    this.parent.xbq.ruf("btn");
                    f.vdy(true, false);
                    f.kgs();
                    for (var e = 0; e < d; e++) {
                        h[e].che(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.zct = function() {
        var g = this.zcr.lkr("buttons");
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.tmr() == true) {
                e.vdy(false, false);
                this.parent.mdb();
                return true
            }
        }
        return false
    };
    this.ein = function(d) {
        this.zcr.knk("buttons", "#vxc", [d]);
        this.zcr.knk("checkboxes", "#vxc", [d]);
        if (d === true && this.mma === true) {
            this.zcr.tew("cmincredit", "#vxc", [false])
        }
    };
    this.kkg = function(d) {
        this.dhw = d.g;
        this.afr = d.v;
        this.rok = d.v;
        this.omc = d.r;
        this.mma = d.l;
        if (typeof d.m != "undefined" && d.m != null && d.m > 0) {
            this.nqt = d.m;
            this.tyz = d.m
        }
    };
    this.pxq = function() {
        if (this.omc === true) {
            this.jzs = this.parent.bex;
            this.fmy = this.parent.bex;
            this.wgk = 0;
            this.hry = 0
        }
    };
    this.mzz = function() {
        if (this.dhw.length > 0 && this.wgk >= 0 && this.jxc === false) {
            return this.dhw[this.wgk]
        }
        return 0
    };
    this.mll = function() {
        var d = this.zcr.mmc("cmincredit") == null || this.zcr.tew("cmincredit", "#sdn");
        if (this.jzs > 0 && d === true) {
            return this.jzs
        }
        return 0
    };
    this.erl = function() {
        var d = this.zcr.mmc("cmaxcredit") == null || this.zcr.tew("cmaxcredit", "#sdn");
        if (this.fmy > 0 && d === true) {
            return this.fmy
        }
        return 0
    };
    this.wob = function() {
        var d = this.zcr.mmc("cmaxwin") == null || this.zcr.tew("cmaxwin", "#sdn");
        if (this.hry > 0 && d === true) {
            return this.hry
        }
        return 0
    };
    this.dns = function() {
        var f = this.zcr.mmc("cmincredit") == null || this.zcr.tew("cmincredit", "#sdn"),
            d = this.zcr.mmc("cmaxcredit") == null || this.zcr.tew("cmaxcredit", "#sdn"),
            e = this.zcr.mmc("cmaxwin") == null || this.zcr.tew("cmaxwin", "#sdn");
        this.ksp = false;
        this.jxc = false;
        this.rok = (this.tyz > 0) ? this.parent.zyd() * this.tyz : this.rok;
        this.afr = (this.nqt > 0) ? this.parent.zyd() * this.nqt : this.afr;
        if (this.omc === true) {
            f = this.mma;
            d = false;
            e = false;
            this.pxq()
        } else {
            if (this.mma === true) {
                f = true;
                this.jzs = (this.jzs < this.parent.bex) ? this.jzs : this.parent.bex;
                this.jzs = (this.jzs > 0) ? this.jzs : this.parent.bex
            } else {
                f = (this.jzs <= this.parent.bex) ? f : false;
                this.jzs = (this.jzs < this.parent.bex) ? this.jzs : this.parent.bex
            }
            d = (this.fmy >= this.parent.bex) ? d : false;
            this.fmy = (this.fmy > this.parent.bex) ? this.fmy : this.parent.bex
        }
        this.zcr.tew("cmincredit", "#wej", [f]);
        this.zcr.tew("cmaxcredit", "#wej", [d]);
        this.zcr.tew("cmaxwin", "#wej", [e]);
        this.zcr.tew("gamesd", "#zja", [(this.dhw[this.wgk] > 0) ? this.dhw[this.wgk] : "---"]);
        this.zcr.tew("mincreditd", "#zja", [(f === true && this.jzs > 0) ? this.parent.axw(this.jzs) : "---"]);
        this.zcr.tew("maxcreditd", "#zja", [(d === true && this.fmy > 0) ? this.parent.axw(this.fmy) : "---"]);
        this.zcr.tew("maxwind", "#zja", [(e === true && this.hry > 0) ? this.parent.axw(this.hry) : "---"]);
        this.zcr.tew("lmincredit", "#tzp", [f]);
        this.zcr.tew("mmincredit", "#tzp", [f && this.jzs < this.parent.bex]);
        this.zcr.tew("lmaxcredit", "#tzp", [d && this.fmy > this.parent.bex]);
        this.zcr.tew("mmaxcredit", "#tzp", [d]);
        this.zcr.tew("lmaxwin", "#tzp", [e && this.hry > this.rok]);
        this.zcr.tew("mmaxwin", "#tzp", [e]);
        if (this.nrg === false) {
            this.ein(true);
            this.tzp(true);
            this.parent.mdb()
        } else {
            this.dgk();
            this.parent.xbq.loh("panel_out");
            this.parent.xbq.ruf("panel_out");
            this.unf()
        }
    };
    this.dwo = function() {
        b.ein(false);
        if (b.nrg === false) {
            b.tzp(false);
            b.parent.mdb()
        } else {
            b.phn();
            b.parent.xbq.loh("panel_out");
            b.parent.xbq.ruf("panel_out");
            b.unf()
        }
    };
    this.dgk = function() {
        this.tzp(true);
        this.cfp = true;
        this.unn = false;
        this.akx = c;
        this.omu = Math.floor(this.width / this.wwd);
        this.rtk = 0;
        this.kky = 0;
        this.sjc = new Date().getTime()
    };
    this.phn = function() {
        this.cfp = true;
        this.unn = false;
        this.akx = a;
        this.omu = -Math.floor(this.width / this.wwd);
        this.rtk = 1;
        this.kky = this.width;
        this.sjc = new Date().getTime()
    };
    this.unf = function() {
        var d = b.rju,
            e = new Date().getTime();
        if (b.rtk < b.wwd) {
            b.kky += b.omu;
            b.rtk++;
            b.parent.mdb();
            d = (((b.akx === a) ? b.rtk - 1 : b.rtk) * b.rju - (e - b.sjc));
            b.fpp = setTimeout(b.unf, d)
        } else {
            b.cfp = false;
            b.unn = true;
            if (b.akx == a) {
                b.tzp(false);
                b.parent.wcq();
                if (b.ksp === true) {
                    b.ozs = setTimeout(b.parent.vnf, 200)
                }
            } else {
                if (b.akx == c) {
                    b.ein(true)
                }
            }
            b.parent.mdb()
        }
    };
    this.stop = function() {
        clearTimeout(this.fpp);
        clearTimeout(this.hjk);
        clearTimeout(this.ozs);
        clearInterval(this.unz)
    };
    this.msr = function(d) {
        this.szr = d.xyc;
        this.uou = d.qia;
        this.fak = d.tln;
        this.zcr.tew("start", "#zja", [d.start]);
        this.zcr.tew("cancel", "#zja", [d.zpu]);
        this.zcr.tew("cmincredit", "#zja", [d.uva]);
        this.zcr.tew("cmaxcredit", "#zja", [d.llk]);
        this.zcr.tew("cmaxwin", "#zja", [d.bxx]);
        if (this.parent.jhg === true && tvj.wxo.value44.d === true) {
            this.rtw = d.hun
        }
    };
    this.mdb = function(n, m, o, j) {
        if (!this.dse()) {
            return
        }
        var f = (n != null && m != null && o != null && j != null),
            p = this.context2D,
            d = this.zcr.kub(),
            e = this.ggg,
            l = this.uhb;
        if (this.tvd) {
            e = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            e.addColorStop(0, this.ggg);
            e.addColorStop(1, this.tvd)
        }
        if (this.edr) {
            if (this.ido === "center") {
                l = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height)
            } else {
                if (this.ido === "left") {
                    l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                } else {
                    if (this.ido === "right") {
                        l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                    }
                }
            }
            if (this.ido === "left") {
                l.addColorStop(1, this.uhb);
                l.addColorStop(0, this.edr)
            } else {
                if (this.ido === "center" || this.ido === "right") {
                    l.addColorStop(0, this.uhb);
                    l.addColorStop(1, this.edr)
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
        tvj.slh.dsq(p, 0, 0, this.width, this.height, this.nwe, this.udp, this.udp, this.nwe, e, 1, l, this.qtj, 1);
        tvj.slh.ryr(p, this.efn.x, this.efn.y, this.efn.width, this.efn.height, this.khp, this.tef, this.vyd, this.qtj / 2);
        tvj.slh.ryr(p, this.zsj.x, this.zsj.y, this.zsj.width, this.zsj.height, this.khp, this.tef, this.vyd, this.qtj / 2);
        tvj.slh.edu(p, this.szr, this.dmp, this.jyi.x, this.jyi.y, this.jyi.width, this.jyi.height, this.qaz, this.uhl, this.hie);
        tvj.slh.hng(p, this.rtw, this.pwl, this.gbk.x, this.gbk.y, this.gbk.width, this.gbk.height, this.qaz, this.stc, this.hie, "center", true);
        tvj.slh.iuq(p, this.uou, this.pwl, this.auz.x, this.auz.y, this.auz.width, this.auz.height, this.qaz, this.stc, this.hie, 0);
        tvj.slh.edu(p, this.fak, this.pwl, this.ifc.x, this.ifc.y, this.ifc.width, this.ifc.height, this.qaz, this.stc, this.hie);
        for (var g = 0, k = d.length; g < k; g++) {
            d[g].mdb()
        }
        p.restore();
        if (this.uek && this.gvg) {
            if (this.cfp) {
                if (this.kky > 0) {
                    if (this.ido === "left") {
                        this.uek.drawImage(this.gvg, this.width - this.kky, 0, this.kky, this.height, this.x, this.y, this.kky, this.height)
                    } else {
                        if (this.ido === "right") {
                            this.uek.drawImage(this.gvg, 0, 0, this.kky, this.height, this.x + this.width - this.kky, this.y, this.kky, this.height)
                        }
                    }
                }
            } else {
                if (f) {
                    this.uek.drawImage(this.gvg, n, m, o, j, this.x + n, this.y + m, o, j)
                } else {
                    this.uek.drawImage(this.gvg, this.x, this.y)
                }
            }
        }
    };
    this.uuv = function() {
        b.parent.mdb();
        if (b.dhw[b.wgk] <= 0) {
            return
        }
        if (b.nrg === false) {
            b.hjk = setTimeout(b.parent.wcq, 400);
            b.ozs = setTimeout(b.parent.vnf, 500)
        } else {
            b.cfp = true;
            b.ksp = true;
            b.hjk = setTimeout(b.dwo, 400)
        }
    };
    this.ykp = function() {
        b.parent.mdb();
        b.jxc = true;
        if (b.nrg === false) {
            b.hjk = setTimeout(b.parent.wcq, 400)
        } else {
            b.cfp = true;
            b.hjk = setTimeout(b.dwo, 400)
        }
    };
    this.kfs = function() {
        b.wgk = (b.wgk < b.dhw.length - 1) ? b.wgk + 1 : 0;
        b.parent.xbq.ruf("step0");
        b.zcr.tew("gamesd", "#zja", [(b.dhw[b.wgk] > 0) ? b.dhw[b.wgk] : "---"]);
        b.parent.mdb();
        return (b.wgk >= b.dhw.length - 1)
    };
    this.sis = function() {
        b.wgk = (b.wgk > 0) ? b.wgk - 1 : b.dhw.length - 1;
        b.parent.xbq.ruf("step0");
        b.zcr.tew("gamesd", "#zja", [(b.dhw[b.wgk] > 0) ? b.dhw[b.wgk] : "---"]);
        b.parent.mdb();
        return (b.wgk <= 0)
    };
    this.kmd = function() {
        var d = b.zcr.mmc("cmincredit") == null || b.zcr.tew("cmincredit", "#sdn");
        if (d === true) {
            if (++b.aal > 10) {
                b.pbm = 10
            }
            b.jzs = (b.jzs + (b.afr * b.pbm) <= b.parent.bex) ? b.jzs + (b.afr * b.pbm) : b.parent.bex;
            b.parent.xbq.ruf("step0");
            b.zcr.tew("mincreditd", "#zja", [(b.jzs > 0) ? b.parent.axw(b.jzs) : "---"]);
            b.zcr.tew("mmincredit", "#tzp", [d && b.jzs < b.parent.bex]);
            b.zcr.tew("lmincredit", "#tzp", [d && b.jzs > 0]);
            b.parent.mdb();
            return (b.jzs >= b.parent.bex)
        }
        return true
    };
    this.qjn = function() {
        var d = b.zcr.mmc("cmincredit") == null || b.zcr.tew("cmincredit", "#sdn");
        if (d === true) {
            if (++b.aal > 10) {
                b.pbm = 10
            }
            b.jzs = (b.jzs - (b.afr * b.pbm) > 0) ? b.jzs - (b.afr * b.pbm) : 0;
            b.parent.xbq.ruf("step0");
            b.zcr.tew("mincreditd", "#zja", [(b.jzs > 0) ? b.parent.axw(b.jzs) : "---"]);
            b.zcr.tew("mmincredit", "#tzp", [d && b.jzs < b.parent.bex]);
            b.zcr.tew("lmincredit", "#tzp", [d && b.jzs > 0]);
            b.parent.mdb();
            return (b.jzs >= b.parent.bex || b.jzs <= 0)
        }
        return true
    };
    this.jfa = function() {
        var d = b.zcr.mmc("cmaxcredit") == null || b.zcr.tew("cmaxcredit", "#sdn");
        if (d === true) {
            if (++b.aal > 10) {
                b.pbm = 10
            }
            b.fmy = (b.fmy + (b.rok * b.pbm) > 0) ? b.fmy + (b.rok * b.pbm) : 0;
            b.parent.xbq.ruf("step0");
            b.zcr.tew("maxcreditd", "#zja", [(b.fmy > 0) ? b.parent.axw(b.fmy) : "---"]);
            b.zcr.tew("lmaxcredit", "#tzp", [d && b.fmy > b.parent.bex]);
            b.parent.mdb();
            return (b.fmy <= b.parent.bex)
        }
        return true
    };
    this.fra = function() {
        var d = b.zcr.mmc("cmaxcredit") == null || b.zcr.tew("cmaxcredit", "#sdn");
        if (d === true) {
            if (++b.aal > 10) {
                b.pbm = 10
            }
            b.fmy = (b.fmy - (b.rok * b.pbm) > b.parent.bex) ? b.fmy - (b.rok * b.pbm) : b.parent.bex;
            b.parent.xbq.ruf("step0");
            b.zcr.tew("maxcreditd", "#zja", [(b.fmy > 0) ? b.parent.axw(b.fmy) : "---"]);
            b.zcr.tew("lmaxcredit", "#tzp", [d && b.fmy > b.parent.bex]);
            b.parent.mdb();
            return (b.fmy <= b.parent.bex)
        }
        return true
    };
    this.hcv = function() {
        var d = b.zcr.mmc("cmaxwin") == null || b.zcr.tew("cmaxwin", "#sdn");
        if (d === true) {
            if (++b.aal > 10) {
                b.pbm = 10
            }
            b.hry = (b.hry + (b.rok * b.pbm) > 0) ? b.hry + (b.rok * b.pbm) : 0;
            b.parent.xbq.ruf("step0");
            b.zcr.tew("maxwind", "#zja", [(b.hry > 0) ? b.parent.axw(b.hry) : "---"]);
            b.zcr.tew("lmaxwin", "#tzp", [d && b.hry > b.rok]);
            b.parent.mdb();
            return (b.hry <= b.rok)
        }
        return true
    };
    this.wuv = function() {
        var d = b.zcr.mmc("cmaxwin") == null || b.zcr.tew("cmaxwin", "#sdn");
        if (d === true) {
            if (++b.aal > 10) {
                b.pbm = 10
            }
            b.hry = (b.hry - (b.rok * b.pbm) > 0) ? b.hry - (b.rok * b.pbm) : b.rok;
            b.parent.xbq.ruf("step0");
            b.zcr.tew("maxwind", "#zja", [(b.hry > 0) ? b.parent.axw(b.hry) : "---"]);
            b.zcr.tew("lmaxwin", "#tzp", [d && b.hry > b.rok]);
            b.parent.mdb();
            return (b.hry <= b.rok)
        }
        return true
    };
    this.lwx = function() {
        var d = b.zcr.mmc("cmincredit") == null || b.zcr.tew("cmincredit", "#sdn");
        b.jzs = b.parent.bex;
        b.zcr.tew("mincreditd", "#zja", [(d === true && b.jzs > 0) ? b.parent.axw(b.jzs) : "---"]);
        b.zcr.tew("lmincredit", "#tzp", [d]);
        b.zcr.tew("mmincredit", "#tzp", [d && b.jzs < b.parent.bex]);
        b.parent.mdb()
    };
    this.zmd = function() {
        var d = b.zcr.mmc("cmaxcredit") == null || b.zcr.tew("cmaxcredit", "#sdn");
        b.fmy = b.parent.bex;
        b.zcr.tew("maxcreditd", "#zja", [(d === true && b.fmy > 0) ? b.parent.axw(b.fmy) : "---"]);
        b.zcr.tew("lmaxcredit", "#tzp", [d && b.fmy > b.parent.bex]);
        b.zcr.tew("mmaxcredit", "#tzp", [d]);
        b.parent.mdb()
    };
    this.leo = function() {
        var d = b.zcr.mmc("cmaxwin") == null || b.zcr.tew("cmaxwin", "#sdn");
        if (b.hry === 0) {
            b.hry = b.rok
        }
        b.zcr.tew("maxwind", "#zja", [(d === true && b.hry > 0) ? b.parent.axw(b.hry) : "---"]);
        b.zcr.tew("lmaxwin", "#tzp", [d && b.hry > b.rok]);
        b.zcr.tew("mmaxwin", "#tzp", [d]);
        b.parent.mdb()
    }
}
rfr.prototype = new kpu;

function baa() {
    this.nxg = "right";
    this.kmv = "left";
    this.eky = null;
    this.ial = null;
    this.szr = null;
    this.cmx = -1;
    this.hfu = -1;
    this.unn = true;
    this.fcn = false;
    this.ulh = false;
    this.cfp = false;
    this.tbc = 0;
    this.xyw = 0;
    this.eee = [];
    this.wue = 0;
    this.ywp = 0;
    this.xkw = 1;
    this.wmi = 0;
    this.fbj = 0;
    this.ido = this.nxg;
    this.qaz = null;
    this.hie = "bold";
    this.pwl = "rgb(255,255,255)";
    this.ggg = "rgb(0,0,0)";
    this.jvb = "rgb(0,0,0)";
    this.mdw = "rgb(0,0,0)";
    this.kwg = 0.7;
    this.tvq = null;
    this.uim = null;
    this.eac = null;
    this.kqq = new mfo();
    this.ugl = new mfo();
    this.hvd = new mfo();
    this.jyi = new mfo();
    this.qtj = 2;
    this.jst = 5;
    this.pzk = 4;
    this.ysz = 10;
    this.cse = 5;
    this.are = 15;
    var a = 200;
    this.udw = function(c, d, f) {
        this.eee = [];
        this.tbc = (d < 0) ? 0 : d;
        this.xyw = (f < 0) ? 0 : f;
        for (var e = this.tbc, b = 0; e <= this.xyw; e++) {
            this.eee[b++] = c[e]
        }
        this.wue = this.eee.length;
        this.wmi = this.kqq.height / this.wue
    };
    this.sqc = function(b) {
        try {
            this.are = b.eyf;
            this.qtj = b.ioh;
            this.jst = b.usd;
            this.pzk = b.off;
            this.ysz = b.bgn;
            this.cse = b.wul;
            this.kqq = new mfo(b.vxs.x, b.vxs.y + b.ilf, b.vxs.width, b.vxs.height - 2 * b.ilf);
            this.ugl = new mfo(b.vxs.x, b.vxs.y, b.vxs.width, b.ilf);
            this.hvd = new mfo(b.vxs.x, b.vxs.y + b.vxs.height - b.ilf, b.vxs.width, b.ilf);
            this.jyi = b.mck
        } catch (c) {
            console.error(c)
        }
    };
    this.gmo = function(b) {
        try {
            this.qaz = b.font;
            this.hie = b.rxk;
            this.pwl = b.riz;
            this.ggg = b.backgroundColor;
            this.jvb = b.ffs;
            this.mdw = b.dxa;
            this.kwg = b.fub;
            this.uim = this.context2D.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            this.uim.addColorStop(0, b.gao);
            this.uim.addColorStop(1, b.vph);
            this.tvq = this.context2D.createLinearGradient(this.kqq.x, 0, this.kqq.x + this.kqq.width, 0);
            this.eac = this.context2D.createLinearGradient(this.width, this.height / 2, 0, this.height / 2);
            if (this.ido === this.nxg) {
                this.tvq.addColorStop(0, b.jnf);
                this.tvq.addColorStop(1, b.aka);
                this.eac.addColorStop(0, b.mtk);
                this.eac.addColorStop(1, b.oyb)
            } else {
                if (this.ido === this.kmv) {
                    this.tvq.addColorStop(0, b.aka);
                    this.tvq.addColorStop(1, b.jnf);
                    this.eac.addColorStop(0, b.oyb);
                    this.eac.addColorStop(1, b.mtk)
                }
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.nyv = function(b, f, c) {
        if (this.cfp || !this.unn || this.ulh) {
            return true
        }
        if ((b < this.x || b > this.x + this.width || f < this.y || f > this.y + this.height)) {
            return false
        } else {
            var e = b - this.x,
                d = f - this.y;
            if (this.hvd.kjq(e, d)) {
                this.bvx(-1);
                this.ruf();
                this.che(true, true)
            } else {
                if (this.ugl.kjq(e, d)) {
                    this.bvx(1);
                    this.ruf();
                    this.che(true, true)
                } else {
                    if (this.kqq.kjq(e, d)) {
                        this.fcn = true;
                        this.shu(f);
                        this.che(true, true)
                    }
                }
            }
            this.kgs(this.ywp);
            return true
        }
    };
    this.hxa = function() {
        if (this.fcn) {
            this.fcn = false;
            this.ruf();
            return true
        }
        return false
    };
    this.qgb = function(b) {
        if (this.cfp || !this.unn || this.ulh) {
            return true
        }
        if (b == this.hfu) {
            this.bvx(-1);
            this.ruf();
            this.che(true, true);
            this.kgs(this.ywp);
            return true
        } else {
            if (b == this.cmx) {
                this.bvx(1);
                this.ruf();
                this.che(true, true);
                this.kgs(this.ywp);
                return true
            }
        }
        return false
    };
    this.zct = function() {};
    this.awi = function(b, d, c) {
        if (!this.fcn) {
            return false
        }
        if (b >= this.x + this.kqq.x && b <= this.x + this.kqq.x + this.kqq.width && d >= this.y + this.kqq.y && d <= this.y + this.kqq.y + this.kqq.height) {
            this.shu(d);
            this.kgs(this.ywp);
            return true
        }
        return false
    };
    this.che = function(b, c) {
        this.ulh = b;
        c = (c === false) ? false : true;
        clearTimeout(this.got);
        if (this.ulh === true && c === true) {
            this.got = setTimeout(this.saz, a)
        }
    };
    this.saz = function() {};
    this.kgs = function(b) {};
    this.ruf = function() {};
    this.mns = function(b, c) {
        this.tbc = (b < 0) ? 0 : b;
        this.xyw = (c < 0) ? 0 : c;
        if (this.eee) {
            this.xyw = (this.xyw > this.eee.length - 1) ? this.eee.length - 1 : this.xyw
        }
    };
    this.dns = function() {
        this.tzp(true, true)
    };
    this.dwo = function() {
        this.tzp(false, true)
    };
    this.vxc = function(b) {
        this.unn = b
    };
    this.skl = function() {
        return this.unn
    };
    this.pai = function(b, c) {
        this.ywp = b;
        if (this.ywp < this.tbc) {
            this.ywp = this.tbc
        }
        if (this.ywp >= this.xyw) {
            this.ywp = this.xyw
        }
        this.xkw = this.ywp + 1;
        if (c && c === true) {
            this.parent.mdb()
        }
    };
    this.cab = function(d, e) {
        this.ywp = 0;
        for (var c = 0, b = this.eee.length; c < b; c++) {
            if (this.eee[c] == d) {
                this.ywp = c;
                break
            }
        }
        this.ywp = (this.ywp >= this.tbc) ? this.ywp : this.tbc;
        this.ywp = (this.ywp < this.xyw) ? this.ywp : this.xyw;
        this.xkw = this.ywp + 1;
        if (e) {
            this.parent.mdb()
        }
    };
    this.shu = function(b) {
        this.ywp = Math.ceil(((this.kqq.height) - (b - this.kqq.y - this.y)) / this.wmi) - 1;
        this.ywp = (this.ywp >= this.tbc) ? this.ywp : this.tbc;
        this.ywp = (this.ywp < this.xyw) ? this.ywp : this.xyw;
        this.xkw = this.ywp + 1;
        this.parent.mdb()
    };
    this.bvx = function(b) {
        this.ywp += b;
        this.ywp = (this.ywp >= this.tbc) ? this.ywp : this.tbc;
        this.ywp = (this.ywp < this.xyw) ? this.ywp : this.xyw;
        this.xkw = this.ywp + 1;
        this.parent.mdb()
    };
    this.mdb = function() {
        if (!this.dse() || !this.parent.kez()) {
            return
        }
        this.urd();
        if (this.uek && this.gvg) {
            this.uek.drawImage(this.tdm, this.x, this.y)
        }
    };
    this.urd = function() {
        var b = this.context2D;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        this.qhp(b);
        this.did(b);
        this.ssf(b);
        this.agz(b);
        this.eqc(b);
        b.restore()
    };
    this.qhp = function(b) {
        if (this.ido === this.kmv) {
            tvj.slh.dsq(b, 0, 0, this.width, this.height, this.jst, 0, 0, this.jst, this.ggg, 0.4, this.eac, this.qtj, 1)
        } else {
            if (this.ido === this.nxg) {
                tvj.slh.dsq(b, 0, 0, this.width, this.height, 0, this.jst, this.jst, 0, this.ggg, 0.4, this.eac, this.qtj, 1)
            }
        }
    };
    this.did = function(b) {
        tvj.slh.ayc(b, this.kqq.x, this.kqq.y, this.kqq.width, this.kqq.height, this.jvb, 1)
    };
    this.ssf = function(b) {
        tvj.slh.ayc(b, this.kqq.x, this.kqq.y + this.kqq.height - Math.round(this.xkw * this.wmi), this.kqq.width, Math.round(this.xkw * this.wmi), this.uim, 1)
    };
    this.agz = function(b) {
        tvj.slh.ayc(b, this.kqq.x - this.pzk, this.kqq.y - this.pzk, this.kqq.width + 2 * this.pzk, this.kqq.height + 2 * this.pzk, null, 0, this.tvq, this.pzk, 1);
        if (this.ido === this.kmv) {
            tvj.slh.dsq(b, this.kqq.x - this.pzk, this.ugl.y, this.kqq.width + 2 * this.pzk, this.ugl.height, this.ysz, 0, 0, 0, this.tvq, 1);
            tvj.slh.dsq(b, this.kqq.x - this.pzk, this.hvd.y, this.kqq.width + 2 * this.pzk, this.hvd.height, 0, 0, 0, this.ysz, this.tvq, 1)
        } else {
            if (this.ido === this.nxg) {
                tvj.slh.dsq(b, this.kqq.x - this.pzk, this.ugl.y, this.kqq.width + 2 * this.pzk, this.ugl.height, 0, this.ysz, 0, 0, this.tvq, 1);
                tvj.slh.dsq(b, this.kqq.x - this.pzk, this.hvd.y, this.kqq.width + 2 * this.pzk, this.hvd.height, 0, 0, this.ysz, 0, this.tvq, 1)
            }
        }
        b.strokeStyle = this.tvq;
        b.lineWidth = Math.round(this.pzk / 4);
        b.beginPath();
        for (var c = 1; c < this.wue; c++) {
            b.moveTo(this.kqq.x, this.kqq.y + this.kqq.height - Math.round(c * this.wmi));
            b.lineTo(this.kqq.x + this.kqq.width, this.kqq.y + this.kqq.height - Math.round(c * this.wmi))
        }
        b.closePath();
        b.stroke();
        if (this.eky) {
            if (this.ido === this.kmv) {
                b.drawImage(this.eky, 0, 0, this.eky.width / 2, this.eky.height, this.kqq.x, this.kqq.y, this.kqq.width, this.kqq.height)
            } else {
                if (this.ido === this.nxg) {
                    b.drawImage(this.eky, this.eky.width / 2, 0, this.eky.width / 2, this.eky.height, this.kqq.x, this.kqq.y, this.kqq.width, this.kqq.height)
                }
            }
        }
    };
    this.eqc = function(c) {
        var f = this.pwl,
            e = this.pwl,
            b = 0,
            d = 0;
        if (this.ido === this.kmv) {
            b = this.cse;
            d = this.kqq.x - 2 * this.cse
        } else {
            if (this.ido === this.nxg) {
                b = this.kqq.x + this.kqq.width + this.cse;
                d = this.width - this.cse - (this.kqq.x + this.kqq.width + this.cse)
            }
        }
        if (this.ywp > 0 && this.ywp < this.eee.length - 1) {
            tvj.slh.ayc(c, b, this.kqq.y + ((this.wue - this.xkw) * this.wmi), d, this.wmi, this.mdw, this.kwg);
            tvj.slh.wpo(c, this.eee[this.ywp], this.uim, b, this.kqq.y + ((this.wue - this.xkw) * this.wmi) + (this.wmi - this.are) / 2, d, this.are, this.qaz, this.are, this.hie, this.cse)
        } else {
            if (this.ywp == 0) {
                f = this.uim
            } else {
                if (this.ywp == this.eee.length - 1) {
                    e = this.uim
                }
            }
        }
        tvj.slh.ayc(c, b, this.kqq.y + (this.wmi * (this.wue - 1)), d, this.wmi, this.mdw, this.kwg);
        tvj.slh.wpo(c, this.eee[0], f, b, this.kqq.y + (this.wmi * (this.wue - 1)) + (this.wmi - this.are) / 2, d, this.are, this.qaz, this.are, this.hie, this.cse);
        tvj.slh.ayc(c, b, this.kqq.y, d, this.wmi, this.mdw, this.kwg);
        tvj.slh.wpo(c, this.eee[this.eee.length - 1], e, b, this.kqq.y + (this.wmi - this.are) / 2, d, this.are, this.qaz, this.are, this.hie, this.cse);
        tvj.slh.edu(c, "+", this.pwl, this.ugl.x, this.ugl.y, this.ugl.width, this.ugl.height, this.qaz, this.are, this.hie);
        tvj.slh.edu(c, "", this.pwl, this.hvd.x, this.hvd.y, this.hvd.width, this.hvd.height, this.qaz, this.are, this.hie);
        if (this.szr) {
            tvj.slh.edu(c, this.szr, this.pwl, this.jyi.x, this.jyi.y, this.jyi.width, this.jyi.height, this.qaz, this.are, this.hie)
        }
    }
}
baa.prototype = new kpu;

function tmq() {
    var a = this;
    this.zcr = null;
    this.fvg = false;
    this.pkh = "";
    this.jjg = "";
    this.npg = "";
    this.hgo = "";
    this.rtw = "";
    this.uou = "";
    this.fak = "";
    this.qaz = "arial";
    this.hie = "bold";
    this.pwl = "white";
    this.ggg = "black";
    this.tvd = null;
    this.uhb = "white";
    this.edr = "rgb(150,150,150)";
    this.qtj = 3;
    this.jst = 4;
    this.eyn = 24;
    this.dnt = 24;
    this.stc = 24;
    this.sjq = new mfo();
    this.edq = new mfo();
    this.fxn = new mfo();
    this.upx = new mfo();
    this.ryz = new mfo();
    this.uvj = new mfo();
    this.uxy = new mfo();
    this.dhw = [];
    this.wgk = 0;
    this.afr = 0;
    this.rok = 0;
    this.nqt = 0;
    this.tyz = 0;
    this.jzs = 0;
    this.fmy = 0;
    this.hry = 0;
    this.gfj = false;
    this.mma = false;
    this.ywp = 0;
    this.bfi = true;
    this.qra = true;
    this.oec = null;
    this.unz = 0;
    this.aal = 0;
    this.pbm = 1;
    this.zqo = 250;
    this.xpk = function(b, d, c) {
        tmq.prototype.xpk.call(this, b, d, c);
        this.zcr = new lts();
        this.zcr.xpk();
        this.zcr.yhs("buttons");
        this.zcr.yhs("displays");
        this.zcr.yhs("checkboxes");
        this.zcr.yhs("lbuttons");
        this.zcr.yhs("mbuttons");
        this.zcr.yhs("tbuttons");
        this.zcr.yhs("bbuttons");
        this.zcr.yhs("bdisplays");
        this.zcr.yhs("abuttons");
        this.zcr.yhs("adisplays");
        this.zcr.yhs("acheckboxes");
        this.zcr.yhs("sbuttons");
        this.zcr.yhs("hbuttons")
    };
    this.zfl = function(b) {
        try {
            this.tuz(b);
            this.hdy(b);
            this.bxt(b)
        } catch (c) {
            console.error(c)
        }
    };
    this.gmo = function(b) {
        try {
            var c = this.zcr.lkr("lbuttons"),
                m = this.zcr.lkr("mbuttons"),
                j = this.zcr.lkr("tbuttons"),
                l = this.zcr.lkr("sbuttons"),
                k = this.zcr.lkr("hbuttons"),
                f = this.zcr.lkr("displays");
            this.qaz = b.font;
            this.hie = b.rxk;
            this.pwl = b.riz;
            this.ggg = b.backgroundColor;
            this.tvd = b.gia;
            this.uhb = b.fsc;
            this.edr = b.fnk;
            for (var d = 0, g = c.length; d < g; d++) {
                c[d].gmo(b.kmt)
            }
            for (var d = 0, g = m.length; d < g; d++) {
                m[d].gmo(b.jjk)
            }
            for (var d = 0, g = j.length; d < g; d++) {
                j[d].gmo(b.yiz)
            }
            for (var d = 0, g = f.length; d < g; d++) {
                f[d].gmo(b.display)
            }
            for (var d = 0, g = l.length; d < g; d++) {
                l[d].gmo(b.rtn)
            }
            for (var d = 0, g = k.length; d < g; d++) {
                k[d].gmo(b.rtn)
            }
            this.zcr.knk("checkboxes", "#gmo", [b.bkk])
        } catch (h) {
            console.error(h)
        }
    };
    this.sqc = function(g) {
        try {
            var b = this.zcr.lkr("lbuttons"),
                n = this.zcr.lkr("mbuttons"),
                k = this.zcr.lkr("tbuttons"),
                m = this.zcr.lkr("sbuttons"),
                l = this.zcr.lkr("hbuttons"),
                c = this.zcr.lkr("bdisplays"),
                f = this.zcr.lkr("adisplays");
            fsv = this.zcr.lkr("checkboxes"), wvw = m.length, imu = (wvw <= 2) ? g.xbr : (wvw <= 3) ? g.lkv : (wvw <= 4) ? g.eau : g.whm, wvw = l.length, wmv = (wvw <= 2) ? g.xbr : (wvw <= 3) ? g.lkv : (wvw <= 4) ? g.eau : g.whm, ypd = (this.parent.gln() != null) ? g.gjh : g.apv;
            this.qtj = g.ioh;
            this.jst = g.usd;
            this.eyn = g.bes;
            this.dnt = g.nte;
            this.stc = g.hju;
            this.sjq = g.vcd;
            this.edq = g.pqr;
            this.fxn = g.yzx;
            this.upx = g.rxj;
            this.ryz = g.mng;
            this.uvj = g.hhm;
            this.uxy = g.ynf;
            this.zcr.tew("bett", "#gae", [ypd.iuw]);
            this.zcr.tew("autot", "#gae", [ypd.qhk]);
            this.zcr.tew("helpt", "#gae", [ypd.pim]);
            this.zcr.tew("settingt", "#gae", [ypd.lsz]);
            this.zcr.tew("returnt", "#gae", [ypd.qnw]);
            this.zcr.tew("lbet", "#gae", [g.tnf]);
            this.zcr.tew("mbet", "#gae", [g.oxs]);
            this.zcr.tew("llines", "#gae", [g.sez]);
            this.zcr.tew("mlines", "#gae", [g.apq]);
            this.zcr.tew("betd", "#gae", [g.zhm]);
            this.zcr.tew("linesd", "#gae", [g.cxy]);
            this.zcr.tew("totald", "#gae", [g.ccq]);
            this.zcr.tew("lgames", "#gae", [g.xcl]);
            this.zcr.tew("mgames", "#gae", [g.otc]);
            this.zcr.tew("lmincredit", "#gae", [g.wpk]);
            this.zcr.tew("mmincredit", "#gae", [g.obh]);
            this.zcr.tew("lmaxcredit", "#gae", [g.alk]);
            this.zcr.tew("mmaxcredit", "#gae", [g.wzy]);
            this.zcr.tew("lmaxwin", "#gae", [g.war]);
            this.zcr.tew("mmaxwin", "#gae", [g.oph]);
            this.zcr.tew("gamesd", "#gae", [g.xit]);
            this.zcr.tew("mincreditd", "#gae", [g.ysu]);
            this.zcr.tew("maxcreditd", "#gae", [g.soo]);
            this.zcr.tew("maxwind", "#gae", [g.wut]);
            this.zcr.tew("cmincredit", "#gae", [g.jkn]);
            this.zcr.tew("cmaxcredit", "#gae", [g.jyk]);
            this.zcr.tew("cmaxwin", "#gae", [g.phd]);
            for (var d = 0, h = b.length; d < h; d++) {
                b[d].sqc(g.kmt)
            }
            for (var d = 0, h = n.length; d < h; d++) {
                n[d].sqc(g.jjk)
            }
            for (var d = 0, h = k.length; d < h; d++) {
                k[d].sqc(g.yiz)
            }
            for (var d = 0, h = c.length; d < h; d++) {
                c[d].sqc(g.sia)
            }
            for (var d = 0, h = f.length; d < h; d++) {
                f[d].sqc(g.jhf)
            }
            for (var d = 0, h = m.length; d < h; d++) {
                m[d].sqc(g.rtn)
            }
            for (var d = 0, h = l.length; d < h; d++) {
                l[d].sqc(g.rtn)
            }
            for (var d = 0, h = fsv.length; d < h; d++) {
                fsv[d].sqc(g.bkk)
            }
            for (var d = 0, h = m.length; d < h; d++) {
                m[d].gae(imu[d])
            }
            for (var d = 0, h = l.length; d < h; d++) {
                l[d].gae(wmv[d])
            }
        } catch (j) {
            console.error(j)
        }
    };
    this.tuz = function(c) {
        var b = (this.parent.gln() != null) ? c.gjh : c.apv;
        this.zcr.zxg("bett", this.ffj(b.iuw, null, this.parent.xbq.ire("btn_b"), this.ksb, null), ["buttons", "tbuttons"]);
        if (this.parent.gln() != null) {
            this.zcr.zxg("autot", this.ffj(b.qhk, null, this.parent.xbq.ire("btn_as"), this.hhe, null), ["buttons", "tbuttons"])
        }
        this.zcr.zxg("helpt", this.ffj(b.pim, null, this.parent.xbq.ire("btn_i"), this.liw, null), ["buttons", "tbuttons"]);
        this.zcr.zxg("settingt", this.ffj(b.lsz, null, this.parent.xbq.ire("btn_se"), this.wll, null), ["buttons", "tbuttons"]);
        this.zcr.zxg("returnt", this.ffj(b.qnw, null, this.parent.xbq.ire("btn_c"), this.ohk, null), ["buttons", "tbuttons"])
    };
    this.hdy = function(b) {
        this.zcr.zxg("betd", this.hqn(b.zhm, null, this.parent.aww), ["displays", "bdisplays"]);
        this.zcr.zxg("lbet", this.hsz(b.tnf, "", this.parent.afn), ["buttons", "lbuttons", "bbuttons"]);
        this.zcr.zxg("mbet", this.hsz(b.oxs, "+", this.parent.vpk), ["buttons", "mbuttons", "bbuttons"]);
        this.zcr.zxg("linesd", this.hqn(b.cxy, null, this.parent.tss), ["displays", "bdisplays"]);
        if (this.fvg) {
            this.zcr.zxg("llines", this.hsz(b.sez, "", this.parent.alr), ["buttons", "lbuttons", "bbuttons"]);
            this.zcr.zxg("mlines", this.hsz(b.apq, "+", this.parent.cuq), ["buttons", "mbuttons", "bbuttons"])
        }
        this.zcr.zxg("totald", this.hqn(b.ccq, null, this.parent.zyd()), ["displays", "bdisplays"])
    };
    this.bxt = function(b) {
        this.zcr.zxg("gamesd", this.hqn(b.xit, null, this.dhw[this.wgk]), ["displays", "adisplays"]);
        this.zcr.zxg("lgames", this.hsz(b.xcl, "", this.sis), ["buttons", "lbuttons", "abuttons"]);
        this.zcr.zxg("mgames", this.hsz(b.otc, "+", this.kfs), ["buttons", "mbuttons", "abuttons"]);
        this.zcr.zxg("mincreditd", this.hqn(b.ysu, null, "---"), ["displays", "adisplays"]);
        this.zcr.zxg("lmincredit", this.hsz(b.wpk, "", this.qjn), ["buttons", "lbuttons", "abuttons"]);
        this.zcr.zxg("mmincredit", this.hsz(b.obh, "+", this.kmd), ["buttons", "mbuttons", "abuttons"]);
        this.zcr.zxg("maxcreditd", this.hqn(b.soo, null, "---"), ["displays", "adisplays"]);
        this.zcr.zxg("lmaxcredit", this.hsz(b.alk, "", this.fra), ["buttons", "lbuttons", "abuttons"]);
        this.zcr.zxg("mmaxcredit", this.hsz(b.wzy, "+", this.jfa), ["buttons", "mbuttons", "abuttons"]);
        this.zcr.zxg("maxwind", this.hqn(b.wut, null, "---"), ["displays", "adisplays"]);
        this.zcr.zxg("lmaxwin", this.hsz(b.war, "", this.wuv), ["buttons", "lbuttons", "abuttons"]);
        this.zcr.zxg("mmaxwin", this.hsz(b.oph, "+", this.hcv), ["buttons", "mbuttons", "abuttons"]);
        this.zcr.zxg("cmincredit", this.vkp(b.jkn, "", this.lwx), ["checkboxes", "acheckboxes"]);
        this.zcr.zxg("cmaxcredit", this.vkp(b.jyk, "", this.zmd), ["checkboxes", "acheckboxes"]);
        this.zcr.zxg("cmaxwin", this.vkp(b.phd, "", this.leo), ["checkboxes", "acheckboxes"])
    };
    this.trn = function(h, g, f, e, d, b) {
        var c = new fde();
        c.xpk(new mfo(0, 0, 1, 1), this.context2D);
        c.parent = this;
        c.kgs = e;
        c.vgj = g;
        c.mkg(d, b);
        c.sqc(this.parent.hue.dmx.rtn);
        c.gmo(this.parent.style.dmx.rtn);
        c.nkk(f);
        this.zcr.zxg(h, c, ["buttons", "sbuttons"])
    };
    this.kfj = function(f, e, d, c) {
        var b = new fde();
        b.xpk(new mfo(0, 0, 1, 1), this.context2D);
        b.parent = this;
        b.kgs = c;
        b.vgj = e;
        b.sqc(this.parent.hue.dmx.rtn);
        b.gmo(this.parent.style.dmx.rtn);
        b.nkk(d);
        this.zcr.zxg(f, b, ["buttons", "hbuttons"])
    };
    this.hqn = function(b, e, d) {
        var c = new eno();
        c.xpk(b, this.context2D, null, e, d);
        c.parent = this;
        return c
    };
    this.hsz = function(c, e, d) {
        var b = new jki();
        b.xpk(c, this.context2D, null, null, e);
        b.parent = this;
        b.kgs = d;
        return b
    };
    this.ffj = function(d, g, f, e, c) {
        var b = new jki();
        b.xpk(d, this.context2D, null, f, g);
        b.parent = this;
        b.kgs = e;
        if (c != null) {
            b.wyv = c
        }
        return b
    };
    this.vkp = function(c, e, d) {
        var b = new xes();
        b.xpk(c, this.context2D, null, e);
        b.parent = this;
        b.kgs = d;
        return b
    };
    this.nyv = function(n, m) {
        var l = this.zcr.lkr("buttons"),
            g = this.zcr.lkr("checkboxes"),
            f = n - this.x,
            d = m - this.y;
        for (var e = 0, k = l.length; e < k; e++) {
            var b = l[e];
            if (f >= b.x && f <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.dse() === true) {
                if (b.skl() === true && b.oax() === false) {
                    if (b instanceof fde) {
                        this.parent.xbq.loh("btn");
                        this.parent.xbq.ruf("btn");
                        b.vdy(true, true, true);
                        b.kgs()
                    } else {
                        if (b instanceof jki) {
                            if (b.zzs() === "rect") {
                                this.parent.xbq.loh("btn");
                                this.parent.xbq.ruf("btn");
                                b.vdy(true, true, false);
                                b.kgs()
                            } else {
                                b.vdy(true, false, false);
                                this.aal = 0;
                                this.pbm = 1;
                                if (b.kgs() === false) {
                                    this.oec = function() {
                                        if (b.kgs() === true) {
                                            clearInterval(a.unz);
                                            b.vdy(false, true);
                                            for (var o = 0; o < k; o++) {
                                                l[o].che(false)
                                            }
                                        }
                                    };
                                    this.unz = setInterval(this.oec, this.zqo)
                                }
                            }
                        }
                    }
                    for (var c = 0; c < k; c++) {
                        l[c].che(true)
                    }
                    return true
                }
            }
        }
        for (var e = 0, k = g.length; e < k; e++) {
            var h = g[e];
            if (f >= h.x && f <= h.x + h.width && d >= h.y && d <= h.y + h.height) {
                if (h.dse() === true && h.skl() === true) {
                    h.wej(!h.sdn(), true);
                    h.kgs();
                    for (var c = 0; c < k; c++) {
                        g[c].che(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.hxa = function() {
        var e = this.zcr.lkr("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.tmr() == true && !(c instanceof jki && c.zzs() === "rect")) {
                clearInterval(this.unz);
                c.vdy(false, true);
                return true
            }
        }
        return false
    };
    this.qgb = function(b) {};
    this.zct = function(b) {};
    this.svt = function(c, b, d) {
        this.zcr.tew("betd", "#zja", [c]);
        this.zcr.tew("linesd", "#zja", [b]);
        this.zcr.tew("totald", "#zja", [d]);
        this.parent.mdb()
    };
    this.ywx = function(b) {
        this.dhw = b.g;
        this.afr = b.v;
        this.rok = b.v;
        this.gfj = b.r;
        this.mma = b.l;
        if (typeof b.m != "undefined" && b.m != null && b.m > 0) {
            this.nqt = b.m;
            this.tyz = b.m
        }
    };
    this.flz = function() {
        if (this.gfj === true) {
            this.jzs = this.parent.bex;
            this.fmy = this.parent.bex;
            this.wgk = 0;
            this.hry = 0
        }
    };
    this.mzz = function() {
        if (this.dhw.length > 0 && this.wgk >= 0) {
            return this.dhw[this.wgk]
        }
        return 0
    };
    this.mll = function() {
        var b = this.zcr.mmc("cmincredit") == null || this.zcr.tew("cmincredit", "#sdn");
        if (this.jzs > 0 && b === true) {
            return this.jzs
        }
        return 0
    };
    this.erl = function() {
        var b = this.zcr.mmc("cmaxcredit") == null || this.zcr.tew("cmaxcredit", "#sdn");
        if (this.fmy > 0 && b === true) {
            return this.fmy
        }
        return 0
    };
    this.wob = function() {
        var b = this.zcr.mmc("cmaxwin") == null || this.zcr.tew("cmaxwin", "#sdn");
        if (this.hry > 0 && b === true) {
            return this.hry
        }
        return 0
    };
    this.dns = function(c, e) {
        if (this.dhw && this.dhw.length > 0) {
            var f = this.zcr.mmc("cmincredit") == null || this.zcr.tew("cmincredit", "#sdn"),
                d = this.zcr.mmc("cmaxcredit") == null || this.zcr.tew("cmaxcredit", "#sdn"),
                b = this.zcr.mmc("cmaxwin") == null || this.zcr.tew("cmaxwin", "#sdn");
            if (this.gfj === true) {
                f = this.mma;
                d = false;
                b = false;
                this.flz()
            } else {
                if (this.mma === true) {
                    f = true;
                    this.jzs = (this.jzs < this.parent.bex) ? this.jzs : this.parent.bex;
                    this.jzs = (this.jzs > 0) ? this.jzs : this.parent.bex
                } else {
                    f = (this.jzs < this.parent.bex) ? f : false;
                    this.jzs = (this.jzs < this.parent.bex) ? this.jzs : this.parent.bex
                }
                d = (this.fmy > this.parent.bex) ? d : false;
                this.fmy = (this.fmy > this.parent.bex) ? this.fmy : this.parent.bex
            }
            this.zcr.tew("cmincredit", "#wej", [f]);
            this.zcr.tew("cmaxcredit", "#wej", [d]);
            this.zcr.tew("cmaxwin", "#wej", [b]);
            this.zcr.tew("gamesd", "#zja", [(this.dhw[this.wgk] > 0) ? this.dhw[this.wgk] : "---"]);
            this.zcr.tew("mincreditd", "#zja", [(f === true && this.jzs > 0) ? this.parent.axw(this.jzs) : "---"]);
            this.zcr.tew("maxcreditd", "#zja", [(d === true && this.fmy > 0) ? this.parent.axw(this.fmy) : "---"]);
            this.zcr.tew("maxwind", "#zja", [(b === true && this.hry > 0) ? this.parent.axw(this.hry) : "---"]);
            this.zcr.tew("lmincredit", "#tzp", [f]);
            this.zcr.tew("mmincredit", "#tzp", [f]);
            this.zcr.tew("lmaxcredit", "#tzp", [d]);
            this.zcr.tew("mmaxcredit", "#tzp", [d]);
            this.zcr.tew("lmaxwin", "#tzp", [b]);
            this.zcr.tew("mmaxwin", "#tzp", [b])
        }
        this.bfi = c;
        this.qra = e;
        this.ksb();
        this.zcr.knk("tbuttons", "#vxc", [true]);
        this.tzp(true);
        this.parent.mdb()
    };
    this.dwo = function() {
        this.zcr.knk("tbuttons", "#vxc", [false]);
        this.zcr.knk("bbuttons", "#vxc", [false]);
        this.zcr.knk("sbuttons", "#vxc", [false]);
        this.zcr.knk("abuttons", "#vxc", [false]);
        this.zcr.knk("acheckboxes", "#vxc", [false]);
        this.tzp(false);
        this.parent.mdb()
    };
    this.stop = function() {
        clearInterval(this.unz)
    };
    this.msr = function(d, b) {
        var c = "";
        this.zcr.tew("language", "#zja", [d.language.toUpperCase()]);
        this.zcr.tew("audio", "#zja", [d.audio.toUpperCase()]);
        this.zcr.tew("melody", "#zja", [d.bqj.toUpperCase()]);
        this.zcr.tew("fullscreen", "#zja", [d.lzv.toUpperCase()]);
        this.zcr.tew("turbo", "#zja", [d.rpn.toUpperCase()]);
        this.zcr.tew("help", "#zja", [d.chk.toUpperCase()]);
        this.zcr.tew("history", "#zja", [d.koc.toUpperCase()]);
        this.zcr.tew("statistic", "#zja", [d.qjx.toUpperCase()]);
        this.zcr.tew("rules", "#zja", [d.qmt.toUpperCase()]);
        this.zcr.tew("gamble", "#zja", [d.hhy.toUpperCase()]);
        if (tvj.cdg.yna[tvj.cdg.kby] === tvj.pym.kmv) {
            c = tvj.cdg.language.left.toUpperCase()
        } else {
            if (tvj.cdg.yna[tvj.cdg.kby] === tvj.pym.nxg) {
                c = tvj.cdg.language.isz.toUpperCase()
            } else {
                if (tvj.cdg.yna[tvj.cdg.kby] === tvj.pym.wio) {
                    c = tvj.cdg.language.cmd.toUpperCase()
                }
            }
        }
        this.zcr.tew("adjustment", "#zja", [c]);
        if (b && b === true) {
            this.pkh = d.rul.toUpperCase() + "/" + d.bmr.toUpperCase() + ":";
            this.jjg = d.tss.toUpperCase() + ":"
        } else {
            this.pkh = d.rul.toUpperCase() + ":"
        }
        this.npg = d.njk.toUpperCase() + ":";
        this.uou = d.qia.toUpperCase();
        this.fak = d.tln.toUpperCase();
        if (this.parent.jhg === true && tvj.wxo.value44.d === true) {
            this.rtw = d.hun.toUpperCase()
        }
        this.zcr.tew("cmincredit", "#zja", [d.uva.toUpperCase()]);
        this.zcr.tew("cmaxcredit", "#zja", [d.llk.toUpperCase()]);
        this.zcr.tew("cmaxwin", "#zja", [d.bxx.toUpperCase()])
    };
    this.mdb = function(l, j, m, e) {
        if (!this.dse() || !this.parent.kez()) {
            return
        }
        var c = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = this.zcr.lkr("tbuttons"),
            b = this.ggg,
            g = this.uhb;
        if (this.tvd) {
            b = n.createRadialGradient(this.x + this.width / 2, this.y + this.height / 2, this.height / 6, this.x + this.width / 2, this.y + this.height / 2, this.height);
            b.addColorStop(0, this.ggg);
            b.addColorStop(1, this.tvd)
        }
        if (this.edr) {
            g = n.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            g.addColorStop(0, this.uhb);
            g.addColorStop(1, this.edr)
        }
        n.save();
        n.clearRect(0, 0, this.width, this.height);
        if (c) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        tvj.slh.ryr(n, 0, 0, this.width, this.height, this.jst, b, g, this.qtj);
        for (var d = 0, f = k.length; d < f; d++) {
            k[d].mdb()
        }
        if (this.ywp === 0) {
            this.nzu(n)
        } else {
            if (this.ywp === 1) {
                this.smh(n)
            } else {
                if (this.ywp === 2) {
                    this.bym(n)
                } else {
                    if (this.ywp === 3) {
                        this.ihq(n)
                    }
                }
            }
        }
        n.restore();
        if (this.uek && this.gvg) {
            if (c) {
                this.uek.drawImage(this.gvg, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.uek.drawImage(this.gvg, this.x, this.y)
            }
        }
    };
    this.nzu = function(c) {
        var f = this.zcr.lkr("bbuttons"),
            d = this.zcr.lkr("bdisplays");
        if (this.sjq.width > 0 && this.sjq.height > 0) {
            tvj.slh.iuq(c, this.pkh, this.pwl, this.sjq.x, this.sjq.y, this.sjq.width, this.sjq.height, this.qaz, this.eyn, this.hie, 0)
        }
        if (this.edq.width > 0 && this.edq.height > 0) {
            tvj.slh.iuq(c, this.jjg, this.pwl, this.edq.x, this.edq.y, this.edq.width, this.edq.height, this.qaz, this.eyn, this.hie, 0)
        }
        if (this.fxn.width > 0 && this.fxn.height > 0) {
            tvj.slh.iuq(c, this.npg, this.pwl, this.fxn.x, this.fxn.y, this.fxn.width, this.fxn.height, this.qaz, this.eyn, this.hie, 0)
        }
        tvj.slh.hng(c, this.hgo, this.pwl, this.upx.x, this.upx.y, this.upx.width, this.upx.height, this.qaz, this.stc, this.hie, "center", true);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].mdb()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].mdb()
        }
    };
    this.smh = function(c) {
        var f = this.zcr.lkr("abuttons"),
            d = this.zcr.lkr("adisplays"),
            g = this.zcr.lkr("acheckboxes");
        tvj.slh.hng(c, this.rtw, this.pwl, this.ryz.x, this.ryz.y, this.ryz.width, this.ryz.height, this.qaz, this.stc, this.hie, "center", true);
        tvj.slh.iuq(c, this.uou, this.pwl, this.uvj.x, this.uvj.y, this.uvj.width, this.uvj.height, this.qaz, this.dnt, this.hie, 0);
        tvj.slh.edu(c, this.fak, this.pwl, this.uxy.x, this.uxy.y, this.uxy.width, this.uxy.height, this.qaz, this.dnt, this.hie);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].mdb()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].mdb()
        }
        for (var e = 0, b = g.length; e < b; e++) {
            g[e].mdb()
        }
    };
    this.bym = function(c) {
        var d = this.zcr.lkr("hbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].mdb()
        }
    };
    this.ihq = function(c) {
        var d = this.zcr.lkr("sbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].mdb()
        }
    };
    this.kfs = function() {
        a.wgk = (a.wgk < a.dhw.length - 1) ? a.wgk + 1 : 0;
        a.parent.xbq.ruf("btn");
        a.zcr.tew("gamesd", "#zja", [(a.dhw[a.wgk] > 0) ? a.dhw[a.wgk] : "---"]);
        a.mdb();
        return (a.wgk >= a.dhw.length - 1)
    };
    this.sis = function() {
        a.wgk = (a.wgk > 0) ? a.wgk - 1 : a.dhw.length - 1;
        a.parent.xbq.ruf("btn");
        a.zcr.tew("gamesd", "#zja", [(a.dhw[a.wgk] > 0) ? a.dhw[a.wgk] : "---"]);
        a.mdb();
        return (a.wgk <= 0)
    };
    this.kmd = function() {
        var b = a.zcr.mmc("cmincredit") == null || a.zcr.tew("cmincredit", "#sdn");
        if (b === true) {
            if (++a.aal > 10) {
                a.pbm = 10
            }
            a.jzs = (a.jzs + (a.afr * a.pbm) <= a.parent.bex) ? a.jzs + (a.afr * a.pbm) : a.parent.bex;
            a.parent.xbq.ruf("btn");
            a.zcr.tew("mincreditd", "#zja", [(a.jzs > 0) ? a.parent.axw(a.jzs) : "---"]);
            a.zcr.tew("mmincredit", "#tzp", [b && a.jzs < a.parent.bex]);
            a.zcr.tew("lmincredit", "#tzp", [b && a.jzs > 0]);
            a.mdb();
            return (a.jzs >= a.parent.bex)
        }
        return true
    };
    this.qjn = function() {
        var b = a.zcr.mmc("cmincredit") == null || a.zcr.tew("cmincredit", "#sdn");
        if (b === true) {
            if (++a.aal > 10) {
                a.pbm = 10
            }
            a.jzs = (a.jzs - (a.afr * a.pbm) > 0) ? a.jzs - (a.afr * a.pbm) : 0;
            a.parent.xbq.ruf("btn");
            a.zcr.tew("mincreditd", "#zja", [(a.jzs > 0) ? a.parent.axw(a.jzs) : "---"]);
            a.zcr.tew("mmincredit", "#tzp", [b && a.jzs < a.parent.bex]);
            a.zcr.tew("lmincredit", "#tzp", [b && a.jzs > 0]);
            a.mdb();
            return (a.jzs >= a.parent.bex || a.jzs <= 0)
        }
        return true
    };
    this.jfa = function() {
        var b = a.zcr.mmc("cmaxcredit") == null || a.zcr.tew("cmaxcredit", "#sdn");
        if (b === true) {
            if (++a.aal > 10) {
                a.pbm = 10
            }
            a.fmy = (a.fmy + (a.rok * a.pbm) > 0) ? a.fmy + (a.rok * a.pbm) : 0;
            a.parent.xbq.ruf("btn");
            a.zcr.tew("maxcreditd", "#zja", [(a.fmy > 0) ? a.parent.axw(a.fmy) : "---"]);
            a.zcr.tew("lmaxcredit", "#tzp", [b && a.fmy > a.parent.bex]);
            a.mdb();
            return (a.fmy <= a.parent.bex)
        }
        return true
    };
    this.fra = function() {
        var b = a.zcr.mmc("cmaxcredit") == null || a.zcr.tew("cmaxcredit", "#sdn");
        if (b === true) {
            if (++a.aal > 10) {
                a.pbm = 10
            }
            a.fmy = (a.fmy - (a.rok * a.pbm) > a.parent.bex) ? a.fmy - (a.rok * a.pbm) : a.parent.bex;
            a.parent.xbq.ruf("btn");
            a.zcr.tew("maxcreditd", "#zja", [(a.fmy > 0) ? a.parent.axw(a.fmy) : "---"]);
            a.zcr.tew("lmaxcredit", "#tzp", [b && a.fmy > a.parent.bex]);
            a.mdb();
            return (a.fmy <= a.parent.bex)
        }
        return true
    };
    this.hcv = function() {
        var b = a.zcr.mmc("cmaxwin") == null || a.zcr.tew("cmaxwin", "#sdn");
        if (b === true) {
            if (++a.aal > 10) {
                a.pbm = 10
            }
            a.hry = (a.hry + (a.rok * a.pbm) > 0) ? a.hry + (a.rok * a.pbm) : 0;
            a.parent.xbq.ruf("btn");
            a.zcr.tew("maxwind", "#zja", [(a.hry > 0) ? a.parent.axw(a.hry) : "---"]);
            a.zcr.tew("lmaxwin", "#tzp", [b && a.hry > a.rok]);
            a.mdb();
            return (a.hry <= a.rok)
        }
        return true
    };
    this.wuv = function() {
        var b = a.zcr.mmc("cmaxwin") == null || a.zcr.tew("cmaxwin", "#sdn");
        if (b === true) {
            if (++a.aal > 10) {
                a.pbm = 10
            }
            a.hry = (a.hry - (a.rok * a.pbm) > 0) ? a.hry - (a.rok * a.pbm) : a.rok;
            a.parent.xbq.ruf("btn");
            a.zcr.tew("maxwind", "#zja", [(a.hry > 0) ? a.parent.axw(a.hry) : "---"]);
            a.zcr.tew("lmaxwin", "#tzp", [b && a.hry > a.rok]);
            a.mdb();
            return (a.hry <= a.rok)
        }
        return true
    };
    this.lwx = function() {
        var b = a.zcr.mmc("cmincredit") == null || a.zcr.tew("cmincredit", "#sdn");
        a.jzs = a.parent.bex;
        a.zcr.tew("mincreditd", "#zja", [(b === true && a.jzs > 0) ? a.parent.axw(a.jzs) : "---"]);
        a.zcr.tew("lmincredit", "#tzp", [b]);
        a.zcr.tew("mmincredit", "#tzp", [b && a.jzs < a.parent.bex]);
        a.mdb()
    };
    this.zmd = function() {
        var b = a.zcr.mmc("cmaxcredit") == null || a.zcr.tew("cmaxcredit", "#sdn");
        a.fmy = a.parent.bex;
        a.zcr.tew("maxcreditd", "#zja", [(b === true && a.fmy > 0) ? a.parent.axw(a.fmy) : "---"]);
        a.zcr.tew("lmaxcredit", "#tzp", [b && a.fmy > a.parent.bex]);
        a.zcr.tew("mmaxcredit", "#tzp", [b]);
        a.mdb()
    };
    this.leo = function() {
        var b = a.zcr.mmc("cmaxwin") == null || a.zcr.tew("cmaxwin", "#sdn");
        if (a.hry === 0) {
            a.hry = a.rok
        }
        a.zcr.tew("maxwind", "#zja", [(b === true && a.hry > 0) ? a.parent.axw(a.hry) : "---"]);
        a.zcr.tew("lmaxwin", "#tzp", [b && a.hry > a.rok]);
        a.zcr.tew("mmaxwin", "#tzp", [b]);
        a.mdb()
    };
    this.ksb = function() {
        a.ywp = 0;
        a.zcr.tew("bett", "#vdy", [true, false, false]);
        a.zcr.tew("autot", "#vdy", [false, false, false]);
        a.zcr.tew("helpt", "#vdy", [false, false, false]);
        a.zcr.tew("settingt", "#vdy", [false, false, false]);
        a.zcr.tew("returnt", "#vdy", [false, false, false]);
        a.zcr.knk("bbuttons", "#vxc", [a.bfi]);
        a.zcr.knk("bbuttons", "#tzp", [a.bfi]);
        a.zcr.knk("abuttons", "#vxc", [false]);
        a.zcr.knk("acheckboxes", "#vxc", [false]);
        a.zcr.knk("hbuttons", "#vxc", [false]);
        a.zcr.knk("sbuttons", "#vxc", [false]);
        a.mdb()
    };
    this.hhe = function() {
        var d = a.zcr.mmc("cmincredit") == null || a.zcr.tew("cmincredit", "#sdn"),
            c = a.zcr.mmc("cmaxcredit") == null || a.zcr.tew("cmaxcredit", "#sdn"),
            b = a.zcr.mmc("cmaxwin") == null || a.zcr.tew("cmaxwin", "#sdn");
        a.ywp = 1;
        a.afr = (a.nqt > 0) ? a.parent.zyd() * a.nqt : a.afr;
        a.rok = (a.tyz > 0) ? a.parent.zyd() * a.tyz : a.rok;
        a.zcr.tew("bett", "#vdy", [false, false, false]);
        a.zcr.tew("autot", "#vdy", [true, false, false]);
        a.zcr.tew("helpt", "#vdy", [false, false, false]);
        a.zcr.tew("settingt", "#vdy", [false, false, false]);
        a.zcr.tew("returnt", "#vdy", [false, false, false]);
        a.zcr.knk("bbuttons", "#vxc", [false]);
        a.zcr.knk("abuttons", "#vxc", [true]);
        a.zcr.tew("mmincredit", "#tzp", [d && a.jzs < a.parent.bex]);
        a.zcr.tew("lmaxcredit", "#tzp", [c && a.fmy > a.parent.bex]);
        a.zcr.tew("lmaxwin", "#tzp", [b && a.hry > a.rok]);
        a.zcr.knk("acheckboxes", "#vxc", [true]);
        a.zcr.knk("hbuttons", "#vxc", [false]);
        a.zcr.knk("sbuttons", "#vxc", [false]);
        if (a.mma === true) {
            a.zcr.tew("cmincredit", "#vxc", [false])
        }
        a.mdb()
    };
    this.liw = function() {
        a.ywp = 2;
        a.zcr.tew("bett", "#vdy", [false, false, false]);
        a.zcr.tew("autot", "#vdy", [false, false, false]);
        a.zcr.tew("helpt", "#vdy", [true, false, false]);
        a.zcr.tew("settingt", "#vdy", [false, false, false]);
        a.zcr.tew("returnt", "#vdy", [false, false, false]);
        a.zcr.knk("bbuttons", "#vxc", [false]);
        a.zcr.knk("abuttons", "#vxc", [false]);
        a.zcr.knk("acheckboxes", "#vxc", [false]);
        a.zcr.knk("hbuttons", "#vxc", [true]);
        a.zcr.knk("sbuttons", "#vxc", [false]);
        a.mdb()
    };
    this.wll = function() {
        a.ywp = 3;
        a.zcr.tew("bett", "#vdy", [false, false, false]);
        a.zcr.tew("autot", "#vdy", [false, false, false]);
        a.zcr.tew("helpt", "#vdy", [false, false, false]);
        a.zcr.tew("settingt", "#vdy", [true, false, false]);
        a.zcr.tew("returnt", "#vdy", [false, false, false]);
        a.zcr.knk("bbuttons", "#vxc", [false]);
        a.zcr.knk("abuttons", "#vxc", [false]);
        a.zcr.knk("acheckboxes", "#vxc", [false]);
        a.zcr.knk("hbuttons", "#vxc", [false]);
        a.zcr.knk("sbuttons", "#vxc", [true]);
        a.zcr.tew("gamble", "#vxc", [a.qra]);
        a.mdb()
    };
    this.ohk = function() {
        a.parent.hxs();
        a.zcr.tew("returnt", "#vdy", [false, false, false])
    }
}
tmq.prototype = new kpu;

function yjk() {
    var a = this;
    this.qaz = null;
    this.hie = "bold";
    this.ggg = "rgb(0,0,0)";
    this.tvd = null;
    this.pwl = "rgb(255,255,255)";
    this.edr = null;
    this.uhb = "rgb(60,60,60)";
    this.cej = null;
    this.xtk = null;
    this.unn = false;
    this.ekz = [];
    this.hde = [];
    this.ctq = null;
    this.zxs = 19;
    this.hiv = 15;
    this.pvq = 120;
    this.ezi = 2;
    this.fgo = 2;
    this.hyp = 2;
    this.clk = 10;
    this.are = 12;
    this.xpk = function(b, d, c) {
        yjk.prototype.xpk.call(this, b, d, c)
    };
    this.sqc = function(b) {
        try {
            this.are = b.eyf;
            this.zxs = b.auf;
            this.hiv = b.tsp;
            this.pvq = b.mga;
            this.ezi = b.sun;
            this.fgo = b.ocl;
            this.hyp = b.yhz;
            this.clk = b.lhn
        } catch (c) {
            console.error(c)
        }
    };
    this.gmo = function(b) {
        try {
            this.qaz = b.font;
            this.hie = b.rxk;
            this.ggg = b.backgroundColor;
            this.tvd = b.gia;
            this.pwl = b.riz;
            this.uhb = b.fsc;
            this.edr = b.fnk;
            if (this.tvd) {
                this.cej = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.cej.addColorStop(0, this.tvd);
                this.cej.addColorStop(0.5, this.ggg)
            } else {
                this.cej = this.ggg
            }
            if (this.edr) {
                this.xtk = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.xtk.addColorStop(0, this.edr);
                this.xtk.addColorStop(1, this.uhb)
            } else {
                this.xtk = this.uhb
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.nyv = function(b, g, c) {
        var e = b - this.x,
            d = g - this.y,
            f = (c && c === true) ? this.clk : 0;
        if (e >= this.x && e <= this.x + this.width && d >= this.y && d <= this.y + this.height + f && this.skl()) {
            this.parent.wlc();
            return true
        }
        return false
    };
    this.kxj = function(d, b, c) {
        this.hde.push({
            id: d,
            uwj: b,
            value: c,
            iiy: null
        })
    };
    this.ulx = function(e, c, d, b) {
        this.hde.push({
            id: e,
            uwj: c,
            value: d,
            iiy: b
        })
    };
    this.iht = function(d, b, c) {
        this.ekz.push({
            id: d,
            kpr: b,
            value: c
        })
    };
    this.ibc = function(e, d) {
        for (var c = 0, b = this.hde.length; c < b; c++) {
            if (this.hde[c].id == e) {
                this.hde[c].value = d;
                return true
            }
        }
        return false
    };
    this.ebp = function(c, e) {
        for (var d = 0, b = c.length; d < b; d++) {
            if (c[d] == e) {
                return d
            }
        }
        return -1
    };
    this.ypq = function(e, d) {
        for (var c = 0, b = this.ekz.length; c < b; c++) {
            if (this.ekz[c].id == e) {
                if (this.ekz[c].value != d) {
                    this.ekz[c].value = d;
                    return true
                } else {
                    return false
                }
            }
        }
        return false
    };
    this.arz = function(b) {
        this.ctq = b
    };
    this.vxc = function(b) {
        this.unn = b
    };
    this.skl = function(b) {
        return this.unn
    };
    this.gmq = function(c, b) {
        if (this.ibc(c, b)) {
            window.uhk(a.mdb)
        }
    };
    this.zxt = function(c, b) {
        if (this.ypq(c, b)) {
            window.uhk(a.mdb)
        }
    };
    this.qdn = function(b) {
        this.arz(b);
        window.uhk(a.mdb)
    };
    this.mdb = function() {
        if (!a.dse() || !a.parent.kez()) {
            return
        }
        var e = (a.height - a.are) / 2 + a.fgo,
            c = a.ezi + a.zxs * a.hde.length,
            d = a.width - c - (a.pvq * a.ekz.length),
            b = a.context2D;
        b.save();
        tvj.slh.ayc(b, 0, 0, a.width, a.height, a.cej, 1);
        a.jsd(b, e);
        a.fwp(b, e);
        if (a.ctq && a.ctq != "") {
            tvj.slh.edu(b, a.ctq, a.pwl, c, e, d, a.are, a.qaz, a.are, a.hie)
        } else {
            if (a.skl()) {
                a.cqi(b)
            }
        }
        a.eaq(b, 0, a.height - a.hyp / 2, a.width, a.height - a.hyp / 2);
        b.restore();
        if (a.uek && a.gvg) {
            a.uek.drawImage(a.gvg, a.x, a.y)
        }
    };
    this.jsd = function(d, g) {
        var c = 0;
        for (var f = 0, b = this.hde.length; f < b; f++) {
            if (this.hde[f].iiy) {
                var e = this.ebp(this.hde[f].iiy, this.hde[f].value);
                if (this.hde[f].uwj instanceof Array) {
                    tvj.slh.edu(d, this.hde[f].uwj[e], this.pwl, c, g, this.zxs, this.are, this.qaz, this.are, this.hie)
                } else {
                    if (this.hde[f].uwj instanceof Image || this.hde[f].uwj instanceof HTMLCanvasElement) {
                        d.drawImage(this.hde[f].uwj, e * this.hiv, 0, this.hiv, this.hde[f].uwj.height, c + this.ezi, g - this.fgo, this.zxs - 2 * this.ezi, this.are)
                    }
                }
            } else {
                d.save();
                d.globalAlpha = (this.hde[f].value == true) ? 1 : 0.3;
                if (this.hde[f].uwj instanceof String) {
                    tvj.slh.edu(d, this.hde[f].uwj, this.pwl, c, g, this.zxs, this.are, this.qaz, this.are, this.hie)
                } else {
                    if (this.hde[f].uwj instanceof Image || this.hde[f].uwj instanceof HTMLCanvasElement) {
                        d.drawImage(this.hde[f].uwj, c + this.ezi, g - this.fgo, this.zxs - 2 * this.ezi, this.are)
                    }
                }
                d.restore()
            }
            c += this.zxs;
            this.eaq(d, c, 0, c, this.height)
        }
        return c
    };
    this.fwp = function(d, f) {
        var c = this.width - this.ezi - this.pvq * this.ekz.length;
        for (var e = 0, b = this.ekz.length; e < b; e++) {
            if (this.ekz[e].id == "freeplay") {
                tvj.slh.ayc(d, c, 0, this.pvq, this.height, "red", 0.4)
            } else {
                if (this.ekz[e].id == "freespin") {
                    tvj.slh.ayc(d, c, 0, this.pvq, this.height, "rgb(100,255,100)", 0.5)
                }
            }
            this.eaq(d, c, 0, c, this.height);
            tvj.slh.edu(d, this.ekz[e].kpr + this.ekz[e].value, this.pwl, c, f, this.pvq, this.are, this.qaz, this.are, this.hie);
            c += this.pvq
        }
    };
    this.eaq = function(b, d, f, c, e) {
        b.save();
        b.strokeStyle = this.xtk;
        b.lineWidth = this.hyp;
        b.beginPath();
        b.moveTo(d, f);
        b.lineTo(c, e);
        b.stroke();
        b.restore()
    };
    this.cqi = function(c) {
        if (this.parent.afx.mmc("topb") == null) {
            return
        }
        var g = 3 * this.height,
            h = this.hyp,
            e = 9,
            d = Math.floor(this.height / 5),
            b = (this.width - g) / 2,
            j = this.hyp;
        c.save();
        c.strokeStyle = this.uhb;
        c.lineWidth = h;
        c.beginPath();
        for (var f = 0; f < d; f++) {
            c.moveTo(b + (e - 1) * f, j);
            c.lineTo(((b + g - e * f) + (b + e * f)) / 2, ((this.height - j - h) - f * 2 * h));
            c.lineTo(b + g - (e - 1) * f, j)
        }
        c.stroke();
        c.restore()
    }
}
yjk.prototype = new kpu;

function nos() {
    var b = this;
    var c = 0;
    var a = 1;
    this.sql = 7;
    this.rzv = 89;
    this.roo = 10000;
    this.zcr = null;
    this.unn = false;
    this.cfp = false;
    this.udv = -1;
    this.fpp = 0;
    this.qaz = null;
    this.hie = "bold";
    this.ggg = "black";
    this.bpo = null;
    this.pbn = null;
    this.eac = null;
    this.pwl = "white";
    this.zzt = 0.8;
    this.old = 0;
    this.mtl = 0;
    this.rtk = 0;
    this.akx = 0;
    this.wdp = 0;
    this.bws = 0;
    this.fur = 0;
    this.ezi = 10;
    this.fgo = 5;
    this.gtv = 10;
    this.phr = this.ezi;
    this.wpb = 10;
    this.lzy = 20;
    this.jms = 40;
    this.qtj = 4;
    this.are = 10;
    this.zeu = null;
    this.lqz = null;
    this.vdm = "";
    this.enb = null;
    this.xpk = function(d, f, e) {
        nos.prototype.xpk.call(this, d, f, e);
        this.zcr = new lts();
        this.zcr.xpk();
        this.zcr.yhs("buttons");
        this.zcr.yhs("system");
        this.zcr.yhs("setting")
    };
    this.sqc = function(d) {
        try {
            this.are = d.eyf;
            this.wpb = d.utd;
            this.lzy = d.guw;
            this.jms = d.wps;
            this.qtj = d.ioh;
            this.ezi = d.sun;
            this.fgo = d.ocl;
            this.gtv = d.dka
        } catch (f) {
            console.error(f)
        }
    };
    this.gmo = function(g, l) {
        try {
            var j = this.zcr.lkr("buttons"),
                h = (l === true) ? g.jpc.grh : g.smu.grh;
            this.qaz = g.font;
            this.hie = g.rxk;
            this.ggg = g.backgroundColor;
            this.bpo = g.gey;
            this.pbn = g.lpa;
            this.pwl = g.riz;
            this.zzt = g.euq;
            if (this.bpo && this.pbn) {
                this.eac = this.context2D.createLinearGradient(0, 0, this.width, 0);
                this.eac.addColorStop(0, this.bpo);
                this.eac.addColorStop(0.5, this.pbn);
                this.eac.addColorStop(1, this.bpo)
            }
            for (var f = 0, d = j.length; f < d; f++) {
                j[f].gmo(h)
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.nyv = function(o, n) {
        var m = this.zcr.kub(),
            p = this.zcr.mmc("audio"),
            q = this.zcr.mmc("language"),
            f = this.zcr.mmc("history"),
            e = o - this.x,
            d = n - this.y;
        if (this.cfp) {
            return true
        }
        for (var k = 0, l = m.length; k < l; k++) {
            var g = m[k];
            if (e >= g.x && e <= g.x + g.width && d >= g.y && d <= g.y + g.height && g.dse()) {
                if (g.skl() && !g.oax()) {
                    if (g != p && g != q) {
                        this.parent.xbq.loh("btn");
                        this.parent.xbq.ruf("btn")
                    }
                    g.vdy(true, true, false);
                    g.kgs();
                    for (var h = 0; h < l; h++) {
                        m[h].che(true)
                    }
                    if (g != f) {
                        if (this.udv >= 0) {
                            clearTimeout(this.udv);
                            this.udv = -1
                        }
                        this.udv = setTimeout(this.qby, this.roo)
                    }
                }
                return true
            }
        }
        if (this.dse() && this.skl()) {
            if (o < this.x + this.wdp || o > this.x + this.wdp + this.bws || n < this.y || n > this.y + this.height) {
                if (this.udv >= 0) {
                    clearTimeout(this.udv);
                    this.udv = -1
                }
                return false
            }
        }
        return true
    };
    this.hxa = function() {
        var g = this.zcr.kub();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.tmr() == true) {
                e.vdy(false, true);
                return true
            }
        }
        return false
    };
    this.qgb = function(e) {
        var n = this.zcr.kub(),
            d = this.zcr.lkr("system"),
            l = this.zcr.lkr("setting"),
            p = this.zcr.mmc("audio"),
            k = 0,
            h = 0,
            m = 0,
            g = 0;
        if (this.cfp) {
            return true
        }
        for (k = 0, m = l.length; k < m; k++) {
            var f = l[k];
            if ((e == f.wyv || e == f.wpd) && !f.oax()) {
                if (f != p) {
                    this.parent.xbq.loh("btn");
                    this.parent.xbq.ruf("btn")
                }
                f.vdy(true, true, false);
                f.kgs();
                for (h = 0, g = n.length; h < g; h++) {
                    n[h].che(true)
                }
                if (this.udv >= 0) {
                    clearTimeout(this.udv);
                    this.udv = -1
                }
                return true
            }
        }
        for (k = 0, m = d.length; k < m; k++) {
            var f = d[k];
            if ((e == f.wyv || e == f.wpd) && f.skl() && !f.oax()) {
                if (f != p) {
                    this.parent.xbq.loh("btn");
                    this.parent.xbq.ruf("btn")
                }
                f.vdy(true, true, false);
                f.kgs();
                for (h = 0, g = n.length; h < g; h++) {
                    n[h].che(true)
                }
                if (this.udv >= 0) {
                    clearTimeout(this.udv);
                    this.udv = -1
                }
                return true
            }
        }
        if (this.dse() && this.skl()) {
            if (this.parent.ayv) {
                for (k = 0, m = this.parent.ayv.osc.length; k < m; k++) {
                    var o = this.parent.ayv.osc[k];
                    if (o.woo == e || o.woo == e) {
                        if (this.udv >= 0) {
                            clearTimeout(this.udv);
                            this.udv = -1
                        }
                        return false
                    }
                }
            }
        }
        return false
    };
    this.zct = function() {
        var g = this.zcr.kub();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.tmr() == true) {
                e.vdy(false, true, false);
                return true
            }
        }
        return false
    };
    this.awi = function(e, l) {
        var j = this.zcr.kub(),
            k = e - this.x,
            h = l - this.y;
        this.lqz = this.zeu;
        this.zeu = null;
        for (var g = 0, d = j.length; g < d; g++) {
            var f = j[g];
            if (k >= f.x && k <= f.x + f.width && h >= f.y && h <= f.y + f.height && f.dse() && f.skl() && !f.oax()) {
                this.zeu = f
            }
        }
        if (this.zeu) {
            this.uxm(true)
        } else {
            this.uxm(false)
        }
        return true
    };
    this.trn = function(e, f, g, h, l, d, m) {
        this.fur = g.width;
        var k = new mfo(this.phr, this.fgo, this.fur, this.fur);
        var j = new fde();
        j.xpk(k, this.context2D);
        j.parent = this;
        j.kgs = h;
        j.uso = f;
        j.mkg(d, m);
        j.sqc(this.parent.hue.rkt.rlo);
        j.gmo(this.parent.style.rkt.smu.grh);
        j.nkk(g);
        if (l != null) {
            j.wpd = l.huo;
            j.wyv = l.woo;
            j.ief = l.value
        }
        this.zcr.zxg(e, j, ["buttons", "setting"]);
        this.phr += this.fur + this.ezi;
        this.bws = this.phr
    };
    this.ozf = function(k, j, h, g, e) {
        this.fur = h.width;
        var f = new mfo(this.phr, this.fgo, this.fur, this.fur);
        var d = new fde();
        d.xpk(f, this.context2D);
        d.parent = this;
        d.kgs = g;
        d.uso = j;
        d.sqc(this.parent.hue.rkt.rlo);
        d.gmo(this.parent.style.rkt.smu.grh);
        d.nkk(h);
        if (e != null) {
            d.wpd = e.huo;
            d.wyv = e.woo;
            d.ief = e.value
        }
        this.zcr.zxg(k, d, ["buttons", "system"]);
        this.phr += this.fur + this.ezi;
        this.bws = this.phr
    };
    this.znx = function() {
        var f = this.zcr.kub();
        this.bws += 2 * this.gtv;
        this.wdp = Math.round((this.width - this.bws) / 2);
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].x += this.wdp + this.gtv
        }
    };
    this.bbi = function() {
        return this.bws
    };
    this.vxc = function(d) {
        this.unn = d
    };
    this.skl = function() {
        return this.unn
    };
    this.ein = function(g) {
        var f = this.zcr.kub();
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].vxc(g)
        }
        this.parent.mdb()
    };
    this.ugz = function(g) {
        var f = this.zcr.lkr("system");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].vxc(g)
        }
        this.parent.mdb()
    };
    this.rew = function(g) {
        var f = this.zcr.lkr("setting");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].vxc(g)
        }
        this.parent.mdb()
    };
    this.dns = function() {
        if (this.dse()) {
            return
        }
        if (this.cfp) {
            if (this.akx === a) {
                this.enb = this.dns
            } else {
                this.enb = null
            }
        } else {
            this.enb = null;
            this.dgk();
            this.eyk()
        }
    };
    this.qnh = function(d) {
        if (this.parent.awf) {
            this.parent.awf()
        }
        this.stop();
        this.cfp = false;
        this.enb = null;
        this.tzp(true, d);
        if (this.udv >= 0) {
            clearTimeout(this.udv);
            this.udv = -1
        }
        this.udv = setTimeout(this.qby, this.roo)
    };
    this.qby = function() {
        if (b.dse()) {
            b.parent.xbq.loh("panel_out");
            b.parent.xbq.ruf("panel_out");
            b.dwo()
        }
    };
    this.dwo = function() {
        if (!this.dse()) {
            return
        }
        if (this.cfp) {
            if (this.akx === c) {
                this.enb = this.dwo
            } else {
                this.enb = null
            }
        } else {
            this.enb = null;
            this.phn();
            this.eyk();
            if (this.udv >= 0) {
                clearTimeout(this.udv);
                this.udv = -1
            }
        }
    };
    this.flf = function(d) {
        if (this.parent.ljh) {
            this.parent.ljh()
        }
        this.stop();
        this.cfp = false;
        this.enb = null;
        this.tzp(false, d);
        if (typeof this.kae === "function") {
            this.kae();
            this.kae = null
        }
    };
    this.dgk = function() {
        this.tzp(true);
        this.cfp = true;
        this.unn = false;
        this.akx = c;
        this.old = Math.floor(this.height / this.sql);
        this.rtk = 1;
        this.mtl = Math.floor(this.height / this.sql)
    };
    this.phn = function() {
        if (this.parent.ljh) {
            this.parent.ljh()
        }
        this.cfp = true;
        this.unn = false;
        this.akx = a;
        this.old = -Math.floor(this.height / this.sql);
        this.rtk = 1;
        this.mtl = this.height
    };
    this.eyk = function() {
        this.fpp = setInterval(this.nrg, this.rzv)
    };
    this.add = function() {
        if (b.akx == c) {
            if (b.parent.awf) {
                b.parent.awf()
            }
            if (b.udv >= 0) {
                clearTimeout(b.udv);
                b.udv = -1
            }
            b.udv = setTimeout(b.qby, b.roo)
        }
        clearInterval(b.fpp);
        if (b.enb) {
            b.enb()
        }
    };
    this.stop = function() {
        clearTimeout(this.udv);
        clearInterval(this.fpp);
        this.udv = -1
    };
    this.nrg = function() {
        if (!b.unf()) {
            b.add()
        }
    };
    this.unf = function() {
        if (b.rtk < b.sql) {
            b.parent.mdb(b.x, b.y, b.width, b.height);
            b.mtl += b.old;
            b.rtk++;
            return true
        } else {
            b.cfp = false;
            b.unn = true;
            if (b.akx == a) {
                b.tzp(false);
                if (typeof b.kae === "function") {
                    b.kae();
                    b.kae = null
                }
            }
            b.parent.mdb(b.x, b.y, b.width, b.height);
            return false
        }
    };
    this.mdb = function(n, m, o, g) {
        if (!this.dse() || !this.parent.kez()) {
            return
        }
        var p = this.context2D,
            e = (n != null && m != null && o != null && g != null),
            l = this.zcr.kub(),
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
        this.akz(p);
        for (var f = 0, j = l.length; f < j; f++) {
            l[f].mdb()
        }
        if (this.zeu && this.vdm != "") {
            k = this.zeu.x - this.ezi - this.fur;
            d = 3 * this.fur + 2 * this.ezi;
            if (k + d >= this.wdp + this.bws) {
                k = this.wdp + this.bws - d;
                tvj.slh.wpo(p, this.vdm, this.pwl, k, this.zeu.y + this.zeu.height, d, this.are, this.qaz, this.are, this.hie, this.ezi)
            } else {
                tvj.slh.edu(p, this.vdm, this.pwl, k, this.zeu.y + this.zeu.height, d, this.are, this.qaz, this.are, this.hie)
            }
        }
        p.restore();
        if (this.cfp) {
            if (this.uek && this.gvg && this.mtl > 0) {
                this.uek.drawImage(this.gvg, 0, this.height - this.mtl, this.width, this.mtl, this.x, this.y, this.width, this.mtl)
            }
        } else {
            if (e) {
                this.parent.mdb(this.x + n, this.y + m, o, g)
            } else {
                if (this.uek && this.gvg) {
                    this.uek.drawImage(this.gvg, this.x, this.y)
                }
            }
        }
    };
    this.akz = function(d) {
        var f = this.qtj,
            e = f / 2;
        d.save();
        d.strokeStyle = this.eac;
        d.fillStyle = this.ggg;
        d.lineWidth = f;
        d.beginPath();
        d.moveTo(e, 0);
        d.arcTo(e, this.wpb, this.wpb + e, this.wpb, this.wpb);
        d.arcTo(this.wdp, this.wpb, this.wdp, this.height - this.lzy - e, this.jms);
        d.arcTo(this.wdp, this.height - e, this.wdp + this.lzy, this.height - e, this.lzy);
        d.lineTo(this.wdp + this.bws - this.lzy, this.height - e);
        d.arcTo(this.wdp + this.bws, this.height - e, this.wdp + this.bws, this.height - this.lzy - e, this.lzy);
        d.arcTo(this.wdp + this.bws, this.wpb, this.width - this.wpb - e, this.wpb, this.jms);
        d.arcTo(this.width - e, this.wpb, this.width - e, 0, this.wpb);
        d.stroke();
        d.closePath();
        d.globalAlpha = this.zzt;
        d.fill();
        d.restore()
    };
    this.uxm = function(d) {
        if (this.zeu && this.zeu != this.lqz) {
            if (d && this.zeu) {
                this.vdm = this.zeu.uso.toUpperCase();
                if (!tvj.slh.evd) {
                    this.vdm = (this.zeu.ief) ? this.vdm + " [" + this.zeu.ief + "]" : this.vdm
                }
            } else {
                this.vdm = ""
            }
            this.parent.mdb(this.x, this.y, this.width, this.height)
        } else {
            if (d && (this.zeu && this.vdm != this.zeu.uso.toUpperCase())) {
                this.vdm = this.zeu.uso.toUpperCase();
                if (!tvj.slh.evd) {
                    this.vdm = (this.zeu.ief) ? this.vdm + " [" + this.zeu.ief + "]" : this.vdm
                }
            }
            this.parent.mdb(this.x, this.y, this.width, this.height)
        }
    };
    this.kae = null
}
nos.prototype = new kpu;

function mmz() {
    var a = this;
    this.qax = "LOADING ... ";
    this.vzc = "ERROR";
    this.anv = null;
    this.ono = null;
    this.djs = false;
    this.lvk = false;
    this.rmp = true;
    this.jzx = null;
    this.bmh = null;
    this.fpp = 0;
    this.zaf = 0;
    this.eyy = false;
    this.goc = false;
    this.sjc = 0;
    this.rju = 60;
    this.wmi = 0;
    this.nkp = null;
    this.vdm = null;
    this.rym = null;
    this.zjk = true;
    this.qaz = null;
    this.hie = "bold";
    this.wpf = "black";
    this.qph = "rgb(0,100,10)";
    this.vfl = "rgb(80,255,100)";
    this.vmi = "rgb(120,120,120)";
    this.vct = "red";
    this.esb = "white";
    this.are = 14;
    this.krw = 18;
    this.gbk;
    this.azw;
    this.tgx;
    this.kcb;
    this.gtv = 5;
    this.ezi = 12;
    this.fgo = 5;
    this.tgw = 2;
    this.rwq = 7;
    this.tpd = new mfo();
    this.hmm = 0;
    this.zhe = 0;
    this.bvz = 0;
    this.olr = new mfo();
    this.jiy = new mfo();
    this.vlm = new mfo();
    this.czc = new mfo();
    this.xpk = function(b, d, c) {
        mmz.prototype.xpk.call(this, b, d, c);
        if (tvj.wxo.value45 == tvj.vwh.hfy) {
            this.jzx = document.createElement("canvas");
            this.bmh = this.jzx.getContext("2d")
        }
    };
    this.sqc = function(b) {
        try {
            this.are = b.eyf;
            this.krw = b.sjg;
            this.gtv = b.dka;
            this.ezi = b.sun;
            this.fgo = b.ocl;
            this.tgw = b.bud;
            this.rwq = b.fro;
            this.gbk = b.mng;
            this.azw = b.hwt;
            this.tgx = b.gqu;
            this.kcb = b.ivz;
            this.tpd = b.ayn.mom;
            this.hmm = b.ayn.x;
            this.zhe = b.ayn.spo;
            this.bvz = b.ayn.oww;
            this.olr = b.icw;
            this.jiy = b.icf.icw;
            this.vlm = b.icf.hwt;
            this.czc = b.icf.yup;
            if (tvj.wxo.value45 == tvj.vwh.hfy) {
                this.jzx.width = Math.round(this.tpd.width);
                this.jzx.height = Math.round(this.tpd.height)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.gmo = function(b) {
        try {
            this.qaz = b.font;
            this.hie = b.rxk;
            this.wpf = b.backgroundColor;
            this.qph = b.cep;
            this.vfl = b.ncv;
            this.vmi = b.vhw;
            this.vct = b.urv;
            this.esb = b.leq;
            this.ono = b.ono
        } catch (c) {
            console.error(c)
        }
    };
    this.mdb = function(b) {
        if (b && b >= 0) {
            this.zaf = b
        }
        if (!this.dse()) {
            return
        }
        if (tvj.wxo.value45 == tvj.vwh.slx) {
            this.acq()
        } else {
            if (tvj.wxo.value45 == tvj.vwh.faz || tvj.wxo.value45 == tvj.vwh.hfy) {
                if (!this.anv && this.vdm && this.rym) {
                    this.bmo()
                } else {
                    if (tvj.wxo.value45 == tvj.vwh.faz) {
                        this.gun()
                    } else {
                        if (tvj.wxo.value45 == tvj.vwh.hfy) {
                            if (b === 100) {
                                this.frp()
                            }
                            this.cem()
                        }
                    }
                }
            }
        }
    };
    this.acq = function() {
        if (this.djs) {
            var c = this.context2D,
                b = this.tgx.width / 100;
            c.save();
            if (this.lvk === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.xbq.ire("splash"), 0, 0, this.width, this.height);
            if (this.ono) {
                tvj.slh.ayc(c, this.gtv, this.gtv, this.width - 2 * this.gtv, this.height - 2 * this.gtv, this.ono, 0.3)
            }
            if (this.anv != null && this.anv != "") {
                this.wuc(this.kcb, true)
            } else {
                if (this.vdm != null && this.vdm != "") {
                    this.emw(this.kcb, true)
                } else {
                    if (this.rmp === true) {
                        if (this.lvk === false) {
                            tvj.slh.ayc(c, this.gbk.x, this.gbk.y, this.gbk.width, this.gbk.height, this.wpf, 0.5)
                        }
                        var e = this.qax + " " + this.zaf + "%";
                        var d = c.createLinearGradient(this.tgx.x, this.tgx.y, this.tgx.x + this.tgx.width, this.tgx.y);
                        d.addColorStop(0, this.qph);
                        d.addColorStop(1, this.vfl);
                        tvj.slh.edu(c, e, this.esb, this.azw.x, this.azw.y, this.azw.width, this.azw.height, this.qaz, this.are, this.hie);
                        tvj.slh.lml(c, this.tgx.x - this.tgw, this.tgx.y, this.tgx.width + 2 * this.tgw, this.tgx.height, this.tgw, this.wpf, 0.8, this.vmi, this.tgw, 0.8);
                        tvj.slh.ayc(c, this.tgx.x, this.tgx.y + this.tgw / 2, b * this.zaf, this.tgx.height - this.tgw, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.gun = function() {
        if (this.djs) {
            var c = this.context2D,
                b = this.tgx.width / 100;
            c.save();
            if (this.lvk === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            if (this.eyy === true && this.nkp) {
                c.beginPath();
                c.rect(this.nkp.x, this.nkp.y, this.nkp.width, this.nkp.height);
                c.closePath();
                c.clip()
            }
            c.drawImage(this.parent.xbq.ire("splash"), this.olr.x, this.olr.y, this.olr.width, this.olr.height);
            if (this.anv != null && this.anv != "") {
                this.wuc(this.kcb, false)
            } else {
                if (this.vdm != null && this.vdm != "") {
                    this.emw(this.kcb, false)
                } else {
                    if (this.rmp === true) {
                        var e = this.qax + " " + this.zaf + "%";
                        var d = c.createLinearGradient(this.tgx.x, this.tgx.y, this.tgx.x + this.tgx.width, this.tgx.y);
                        d.addColorStop(0, this.qph);
                        d.addColorStop(1, this.vfl);
                        var f = c.createLinearGradient(this.tgx.x + (b * this.zaf) - this.rwq, this.tgx.y, this.tgx.x + (b * this.zaf), this.tgx.y);
                        f.addColorStop(0, "rgb(100,100,100)");
                        f.addColorStop(1, "rgb(255,255,255)");
                        tvj.slh.edu(c, e, this.esb, this.azw.x, this.azw.y, this.azw.width, this.azw.height, this.qaz, this.are, this.hie);
                        tvj.slh.ayc(c, this.tgx.x, this.tgx.y, this.tgx.width, this.tgx.height, "rgb(12,15,25)", 1);
                        if (this.zaf > 0 && this.zaf < 100) {
                            tvj.slh.lml(c, this.tgx.x + (b * this.zaf) - this.rwq + this.tgw / 2, this.tgx.y - this.tgw, this.rwq, this.tgx.height + 2 * this.tgw, this.tgw, f, 0.5)
                        }
                        tvj.slh.ayc(c, this.tgx.x, this.tgx.y, b * this.zaf, this.tgx.height, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.cem = function() {
        if (this.djs) {
            var c = this.context2D,
                b = this.tgx.width / 100;
            c.save();
            if (this.lvk === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.xbq.ire("splash"), this.olr.x, this.olr.y, this.olr.width, this.olr.height);
            if (this.goc) {
                c.drawImage(this.jzx, this.tpd.x, this.tpd.y)
            }
            if (this.anv != null && this.anv != "") {
                this.wuc(this.kcb, false)
            } else {
                if (this.vdm != null && this.vdm != "") {
                    this.emw(this.kcb, false)
                } else {
                    if (this.rmp === true) {
                        var e = this.qax + " " + this.zaf + "%";
                        var d = c.createLinearGradient(this.tgx.x, this.tgx.y, this.tgx.x + this.tgx.width, this.tgx.y);
                        d.addColorStop(0, this.qph);
                        d.addColorStop(1, this.vfl);
                        var f = c.createLinearGradient(this.tgx.x + (b * this.zaf) - this.rwq, this.tgx.y, this.tgx.x + (b * this.zaf), this.tgx.y);
                        f.addColorStop(0, "rgb(100,100,100)");
                        f.addColorStop(1, "rgb(255,255,255)");
                        tvj.slh.edu(c, e, this.esb, this.azw.x, this.azw.y, this.azw.width, this.azw.height, this.qaz, this.are, this.hie);
                        tvj.slh.ayc(c, this.tgx.x, this.tgx.y, this.tgx.width, this.tgx.height, "rgb(12,15,25)", 1);
                        if (this.zaf > 0 && this.zaf < 100) {
                            tvj.slh.lml(c, this.tgx.x + (b * this.zaf) - this.rwq + this.tgw / 2, this.tgx.y - this.tgw, this.rwq, this.tgx.height + 2 * this.tgw, this.tgw, f, 0.5)
                        }
                        tvj.slh.ayc(c, this.tgx.x, this.tgx.y, b * this.zaf, this.tgx.height, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.bmo = function() {
        if (this.djs) {
            var b = this.context2D;
            b.save();
            b.clearRect(0, 0, this.width, this.height);
            if (this.rym) {
                b.drawImage(this.rym, this.jiy.x, this.jiy.y, this.jiy.width, this.jiy.height)
            }
            if (this.vdm != null && this.vdm != "") {
                tvj.slh.hng(b, this.vdm, this.esb, this.vlm.x, this.vlm.y, this.vlm.width, this.vlm.height, this.qaz, this.are, this.hie, "center", true)
            }
            if (this.zjk === true) {
                tvj.slh.hng(b, "[ " + this.parent.language.lis + " ]", this.esb, this.czc.x, this.czc.y, this.czc.width, this.czc.height, this.qaz, 2 * this.are, this.hie, "center", true)
            }
            b.restore()
        }
    };
    this.wuc = function(c, l) {
        var k = this.context2D,
            n = [],
            d = this.are,
            j = this.anv,
            f = "",
            s = 0,
            u = 0,
            r = 0,
            t = 0,
            m = "center",
            e = Math.round(d * 1.5),
            h = Math.round(this.krw * 1.5),
            b = 0,
            v = 1,
            p = 0,
            g = 0;
        k.save();
        k.font = this.hie + " " + d + "px " + this.qaz;
        for (var o = r; o < j.length; o++) {
            f += j.charAt(o);
            t = k.measureText(f).width;
            if (j.charAt(o) == " ") {
                s = o
            }
            if (o == j.length - 1) {
                n[u] = j.substring(r, j.length)
            } else {
                if (j.charAt(o) == "|") {
                    n[u] = j.substring(r, o);
                    u++;
                    r = o + 1;
                    f = j.substring(o + 1, o + 1)
                } else {
                    if (t >= c.width - 2 * this.ezi) {
                        n[u] = j.substring(r, s);
                        u++;
                        r = s + 1;
                        f = j.substring(s + 1, o)
                    }
                }
            }
        }
        b = u * (e);
        if (b > (c.height - h - this.fgo)) {
            v = (c.height - h - this.fgo) / b;
            d = Math.round(d * v) - 1;
            k.font = this.hie + " " + d + "px " + this.qaz;
            e = Math.round(d * 1.5);
            b = u * (e)
        }
        if (d < 10) {
            v = 10 / d;
            d = Math.round(d * v);
            k.font = this.hie + " " + d + "px " + this.qaz;
            e = Math.round(d * 1.5);
            b = u * (e);
            g = (c.height - (h + b + this.fgo));
            c.height = h + b + this.fgo;
            c.y += g
        }
        k.textAlign = m;
        k.lineJoin = "round";
        k.lineCap = "round";
        if (l && l === true) {
            tvj.slh.ayc(k, c.x, c.y, c.width, c.height, this.wpf, 0.7)
        }
        if (this.vzc != null) {
            k.font = this.hie + " " + this.krw + "px " + this.qaz;
            k.fillStyle = this.vct;
            k.textBaseline = "bottom";
            k.fillText(this.vzc, c.x + c.width / 2, c.y + this.krw + this.fgo)
        }
        k.font = this.hie + " " + d + "px " + this.qaz;
        k.fillStyle = this.esb;
        if (n.length == 1) {
            p = h + b + e;
            k.fillText(n[0], (c.x + c.width / 2), c.y + p)
        } else {
            for (var o = 0, q = n.length; o < q; o++) {
                p = h + (b + e) / (q + 1) * (o + 1);
                if (m == "start") {
                    k.fillText(n[o], (c.x + this.ezi), c.y + p)
                } else {
                    k.fillText(n[o], (c.x + c.width / 2), c.y + p)
                }
            }
        }
        k.restore()
    };
    this.emw = function(c, d) {
        var b = this.context2D;
        b.save();
        if (d && d === true) {
            tvj.slh.ayc(b, c.x, c.y, c.width, c.height, this.wpf, 0.7)
        }
        if (this.zjk === true) {
            tvj.slh.hng(b, this.vdm, this.esb, c.x, c.y, c.width, c.height, this.qaz, this.are, this.hie, "center", true)
        }
        b.restore()
    };
    this.start = function() {
        this.eyy = true;
        this.sjc = new Date().getTime();
        this.nkp = new mfo(this.tpd.x, this.tpd.y, this.tpd.width, this.tpd.height);
        this.wmi = 0;
        this.nrg()
    };
    this.stop = function() {
        this.eyy = false;
        this.nkp = null;
        clearTimeout(this.fpp)
    };
    this.nrg = function() {
        var b = 0,
            c = new Date().getTime();
        if (a.wmi < 6) {
            a.nkp.x -= a.hmm;
            a.nkp.width += 2 * a.hmm
        } else {
            if (a.wmi < 12) {
                a.nkp.y -= a.bvz;
                a.nkp.height += a.zhe
            } else {
                a.stop();
                if (typeof a.juf === "function") {
                    a.juf()
                }
            }
        }
        a.mdb();
        a.wmi++;
        if (a.wmi <= 12) {
            b = (a.wmi * a.rju - (c - a.sjc));
            a.fpp = setTimeout(a.nrg, b)
        }
    };
    this.teq = function() {
        this.goc = true;
        this.sjc = new Date().getTime();
        this.wmi = 0;
        this.rju = 89;
        this.lkz()
    };
    this.frp = function() {
        this.goc = false;
        clearTimeout(this.fpp)
    };
    this.lkz = function() {
        var d = 0,
            e = new Date().getTime(),
            b = a.bmh,
            c = a.parent.xbq.ire("splashanim");
        if (a.goc === true) {
            a.wmi++;
            b.save();
            b.clearRect(0, 0, c.width, c.height);
            b.translate(c.width / 2, c.height / 2);
            b.rotate(Math.PI / 6 * (a.wmi % 12));
            b.translate(-c.width / 2, -c.height / 2);
            b.drawImage(c, 0, 0);
            b.restore();
            a.mdb();
            d = (a.wmi * a.rju - (e - a.sjc));
            a.fpp = setTimeout(a.lkz, d)
        }
    };
    this.dpw = function() {
        return (this.eyy || this.goc)
    };
    this.zfp = function(c, b) {
        this.vdm = c;
        this.rym = b;
        this.eyy = true;
        this.zjk = true;
        this.fpp = setInterval(this.gmw, 800);
        this.mdb()
    };
    this.gmw = function() {
        a.zjk = !a.zjk;
        a.mdb()
    };
    this.juf = null
}
mmz.prototype = new kpu;

function rpe() {
    var b = this;
    var c = 0;
    var a = 1;
    var d = 2;
    this.type = -1;
    this.szr = "";
    this.exp = "";
    this.uso = "";
    this.nyw = -1;
    this.tka = [];
    this.oir = null;
    this.qaz = "arial";
    this.hie = "bold";
    this.ggg = "rgb(30,30,30)";
    this.tvd = "rgb(0,0,0)";
    this.uhb = "white";
    this.pwl = "white";
    this.tgs = [];
    this.uhl = 24;
    this.are = 24;
    this.stc = 12;
    this.jyi = new mfo();
    this.gxq = new mfo();
    this.gbk = new mfo();
    this.bpb = new mfo();
    this.oyd = 5;
    this.qtj = 3;
    this.gmo = function(f) {
        try {
            this.qaz = f.font;
            this.hie = f.rxk;
            this.ggg = f.backgroundColor;
            this.tvd = f.gia;
            this.uhb = f.fsc;
            this.pwl = f.riz;
            this.dmp = f.nze;
            this.tgs = f.eag;
            this.oir.gmo(f.grh)
        } catch (g) {
            console.error(g)
        }
    };
    this.sqc = function(f) {
        try {
            this.uhl = f.juz;
            this.are = f.eyf;
            this.stc = f.hju;
            this.oyd = f.cuj;
            this.qtj = f.ioh;
            this.jyi = f.mck;
            this.gxq = f.skx;
            this.gbk = f.mng;
            this.oir.gae(f.bwm);
            this.oir.sqc(f.rlo)
        } catch (g) {
            console.error(g)
        }
    };
    this.tuz = function() {
        this.tka = [];
        this.oir = this.hsz(this.bpb, this.parent.language.ok, null, this.parent.ayv.ok);
        this.tka.push(this.oir)
    };
    this.hsz = function(g, j, h, f) {
        var e = new jki();
        e.xpk(g, this.context2D, null, null, j);
        e.parent = this;
        e.kgs = h;
        if (f != null) {
            e.wyv = f.woo
        }
        return e
    };
    this.nyv = function(f, l) {
        var k = f - this.x;
        var j = l - this.y;
        for (var h = 0, e = this.tka.length; h < e; h++) {
            var g = this.tka[h];
            if (k >= g.x && k <= g.x + g.width && j >= g.y && j <= g.y + g.height && g.dse() === true) {
                if (g.skl() === true && g.oax() === false) {
                    g.vdy(true, false);
                    this.parent.mdb();
                    this.parent.xbq.loh("btn");
                    this.parent.xbq.ruf("btn");
                    this.kgs()
                }
                return true
            }
        }
        return false
    };
    this.hxa = function() {
        for (var g = 0, e = this.tka.length; g < e; g++) {
            var f = this.tka[g];
            if (f.tmr() === true) {
                f.vdy(false, false);
                this.parent.mdb();
                return true
            }
        }
        return false
    };
    this.qgb = function(h) {
        for (var g = 0, e = this.tka.length; g < e; g++) {
            var f = this.tka[g];
            if (h == f.wyv && f.dse() === true) {
                if (f.skl() === true && f.oax() === false) {
                    f.vdy(true, false);
                    this.parent.mdb();
                    this.parent.xbq.loh("btn");
                    this.parent.xbq.ruf("btn");
                    this.kgs()
                }
                return true
            }
        }
        return false
    };
    this.zct = function() {
        for (var g = 0, e = this.tka.length; g < e; g++) {
            var f = this.tka[g];
            if (f.tmr() === true) {
                f.vdy(false, false);
                this.parent.mdb();
                return true
            }
        }
        return false
    };
    this.dns = function() {
        b.ein(true);
        b.msr();
        b.anp();
        for (var f = 0, e = b.tka.length; f < e; f++) {
            b.tka[f].vdy(false, false, false);
            b.tka[f].tzp(true)
        }
        b.tzp(true);
        b.parent.mdb()
    };
    this.dwo = function() {
        this.type = -1;
        this.ein(false);
        for (var f = 0, e = this.tka.length; f < e; f++) {
            this.tka[f].tzp(false)
        }
        this.tzp(false);
        this.parent.mdb()
    };
    this.ein = function(g) {
        for (var f = 0, e = this.tka.length; f < e; f++) {
            this.tka[f].vxc(g)
        }
    };
    this.mdb = function() {
        if (!this.dse() || !this.parent.kez()) {
            return
        }
        var f = this.context2D,
            h = f.createLinearGradient(0, 0, 0, this.height);
        h.addColorStop(1, this.tvd);
        h.addColorStop(0, this.ggg);
        f.save();
        f.clearRect(0, 0, this.width, this.height);
        if (this.szr) {
            tvj.slh.ryr(f, 0, 0, this.width, this.height, this.oyd, h, this.uhb, this.qtj);
            tvj.slh.edu(f, this.szr, this.dmp, this.jyi.x, this.jyi.y, this.jyi.width, this.jyi.height, this.qaz, this.uhl, this.hie)
        } else {
            tvj.slh.ryr(f, 0, this.jyi.height, this.width, this.height - this.jyi.height, this.oyd, h, this.uhb, this.qtj)
        }
        if (this.exp) {
            tvj.slh.hng(f, this.exp, this.pwl, this.gxq.x, this.gxq.y, this.gxq.width, this.gxq.height, this.qaz, this.are, this.hie, "center", true)
        }
        if (this.uso) {
            tvj.slh.edu(f, this.uso, this.pwl, this.gbk.x, this.gbk.y, this.gbk.width, this.gbk.height, this.qaz, this.stc, this.hie)
        }
        for (var g = 0, e = this.tka.length; g < e; g++) {
            this.tka[g].mdb()
        }
        f.restore();
        if (this.uek && this.gvg) {
            this.uek.drawImage(this.gvg, this.x, this.y)
        }
    };
    this.msr = function() {
        if (this.type === tvj.exp.gzp || this.type === tvj.exp.fzi || this.type === tvj.exp.lkb) {
            this.nyw = a;
            this.szr = this.parent.language.dro;
            if (this.type === tvj.exp.fzi) {
                this.uso = this.parent.language.cls
            } else {
                if (this.type !== tvj.exp.lkb) {
                    this.uso = this.parent.language.tpq
                }
            }
            if (this.type === tvj.exp.lkb) {
                this.exp = this.parent.language.lwr
            } else {
                this.exp = this.parent.language.tps
            }
        } else {
            if (this.type === tvj.exp.vim || this.type === tvj.exp.wmj) {
                this.nyw = c;
                this.szr = "";
                this.uso = this.parent.language.cls;
                this.exp = this.parent.language.jqe
            } else {
                if (this.type === tvj.exp.roulette.fcg || this.type === tvj.exp.roulette.yxq) {
                    this.nyw = a;
                    this.szr = this.parent.language.dro;
                    this.uso = this.parent.language.tpq;
                    if (this.type === tvj.exp.roulette.fcg) {
                        this.exp = this.parent.language.aga
                    } else {
                        if (this.type === tvj.exp.roulette.yxq) {
                            this.exp = this.parent.language.hqg
                        }
                    }
                } else {
                    if (this.type === tvj.exp.ouy) {
                        this.nyw = a;
                        this.szr = "";
                        this.uso = "";
                        this.exp = this.parent.language.kov
                    } else {
                        if (this.type === tvj.exp.sch) {
                            this.nyw = d;
                            this.szr = this.parent.hhv;
                            this.uso = "";
                            this.exp = this.parent.language.nns + "|" + this.parent.nto + " " + this.parent.language.tia + "!||" + this.parent.language.mvu
                        } else {
                            if (this.type === tvj.exp.kui) {
                                this.nyw = d;
                                this.szr = this.parent.hhv;
                                this.uso = "";
                                this.exp = this.parent.language.xup + " " + (this.parent.nto - this.parent.wao) + " " + this.parent.language.wli + "||" + this.parent.language.mvu
                            } else {
                                if (this.type === tvj.exp.fow) {
                                    this.nyw = d;
                                    this.szr = this.parent.hhv;
                                    this.uso = this.parent.language.cls;
                                    this.exp = this.parent.language.kxm + ": " + this.parent.wao + "|" + this.parent.language.trq + ": " + this.parent.hcd
                                }
                            }
                        }
                    }
                }
            }
        }
        this.oir.zja(this.parent.language.ok, false);
        this.uhb = this.tgs[this.nyw];
        this.dmp = this.tgs[this.nyw]
    };
    this.anp = function() {
        if (this.type === tvj.exp.gzp || this.type === tvj.exp.lkb || this.type === tvj.exp.roulette.fcg || this.type === tvj.exp.roulette.yxq) {
            this.kgs = this.parent.trv
        } else {
            if (this.type === tvj.exp.fzi) {
                this.kgs = this.parent.htj
            } else {
                if (this.type === tvj.exp.vim || this.type === tvj.exp.wmj || this.type === tvj.exp.fow) {
                    this.kgs = function() {
                        window.location.reload()
                    }
                } else {
                    if (this.type === tvj.exp.ouy || this.type === tvj.exp.sch || this.type === tvj.exp.kui) {
                        this.kgs = function() {
                            b.dwo();
                            tvj.cdg.kwn(tvj.cdg.lpe)
                        }
                    }
                }
            }
        }
    };
    this.kgs = function() {}
}
rpe.prototype = new kpu;
tvj.wxo = new Settings();
tvj.slh = new lmb();

function oib() {
    this.ebc = "";
    this.bgu = "";
    this.nme = null;
    this.canvas = null;
    this.context2D = null;
    this.vrv = null;
    this.dlw = null;
    this.offsetLeft = 0;
    this.offsetTop = 0;
    this.bbo = 0;
    this.wnl = 0;
    this.awy = false;
    this.width = 0;
    this.height = 0;
    this.pxw = 0;
    this.vqb = 0;
    this.igm = 1;
    this.hln = 1;
    this.glk = false;
    this.lzv = false;
    this.style = null;
    this.hue = null;
    this.jgb = -1;
    this.bhu = false;
    this.ipy = false;
    this.elf = false;
    this.vae = false;
    this.zgp = false;
    this.iye = "";
    this.cgz = "";
    this.nnt = "";
    this.zcl = "";
    this.fva = "";
    this.vna = "";
    this.vyg = "1_1_60";
    try {
        if (tvj.wxo.value19) {
            this.iye = sessionStorage.sessionValue2;
            this.cgz = sessionStorage.sessionValue2
        } else {
            var c = a("hash");
            if (c != "") {
                sessionStorage.sessionValue2 = c
            }
            if (sessionStorage.sessionValue2 != "freeplay") {
                this.nnt = sessionStorage.sessionValue2
            } else {
                this.iye = sessionStorage.sessionValue2;
                this.cgz = sessionStorage.sessionValue2;
                if (a("w") != "") {
                    this.nnt = sessionStorage.sessionValue2
                } else {
                    this.nnt = ""
                }
            }
        }
    } catch (b) {}
    this.vdt = null;
    this.lcb = null;
    this.rea = false;
    this.xaa = null;
    this.xbq = null;
    this.afx = null;
    this.zvu = true;
    this.zyz = [0, 0.5, 1];
    try {
        if (sessionStorage.sessionValue6) {
            if (sessionStorage.sessionValue6 == "false") {
                this.hwc = 0
            } else {
                if (sessionStorage.sessionValue6 == "true") {
                    this.hwc = this.zyz.length - 1
                } else {
                    this.hwc = Number(sessionStorage.sessionValue6)
                }
            }
        } else {
            this.hwc = this.zyz.length - 1
        }
    } catch (b) {
        this.hwc = 0
    }
    this.zqd = 0;
    this.language = new sce();
    this.nov = 0;
    this.blk = 1;
    this.nji = this.blk;
    this.yna = [tvj.pym.wio, tvj.pym.kmv, tvj.pym.nxg];
    this.kby = (tvj.slh.ksk()) ? 0 : this.yna.length - 1;
    try {
        if (localStorage.localValue1) {
            this.kby = Number(localStorage.localValue1);
            if (!tvj.slh.ksk() && this.yna[this.kby] === tvj.pym.wio) {
                this.kby = this.yna.length - 1
            }
        }
    } catch (b) {}
    this.cca = false;
    this.bdh = "";
    this.ivv = "";
    this.kda = 0;
    this.lpe = 0;
    this.kxt = false;
    this.mmp = 5000;
    this.vao = 0;
    this.xdb = 0;
    this.idg = 0;
    this.uli = false;
    this.ojf = false;
    this.bmf = false;
    this.ayv = null;
    this.zee = 0;
    this.duv = 0;
    this.gag = 0;
    this.qtd = -1;
    this.mvm = -1;
    this.tqt = 0;
    this.wng = 0;
    this.idd = null;
    this.uzy = false;

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
    this.xpk = function(d) {
        tvj.slh.ndg();
        tvj.slh.aoa();
        this.ayi();
        if (!this.uli) {
            this.jhw()
        }
        this.zzy(this.okq(d.hue));
        this.vin();
        this.cyo();
        this.vza();
        this.mqq();
        this.bor();
        this.liv();
        this.orp();
        this.fvi();
        this.kdg();
        this.bek();
        return this
    };
    this.vza = function() {};
    this.fvi = function() {
        try {
            if (tvj.wxo.value64 && !this.bmf) {
                this.xaa = new osr();
                this.xaa.connect("ws://127.0.0.1:2001/vltclient")
            }
        } catch (d) {
            console.error("Can not connect to terminal!")
        }
    };
    this.ayi = function() {
        try {
            var h = a("exit");
            if (h != "") {
                sessionStorage.sessionValue5 = h
            }
            if ((!sessionStorage.sessionValue5 || sessionStorage.sessionValue5 == "null") && tvj.wxo.value8) {
                sessionStorage.sessionValue5 = tvj.wxo.value8
            }
            var f = a("w");
            if (f != "") {
                sessionStorage.sessionValue7 = f
            }
            if (sessionStorage.sessionValue7 && sessionStorage.sessionValue7 != "") {
                this.fva = sessionStorage.sessionValue7
            }
            var d = a("curr");
            if (d != "") {
                sessionStorage.sessionValue8 = d
            }
            if (sessionStorage.sessionValue8 && sessionStorage.sessionValue8 != "") {
                this.vna = sessionStorage.sessionValue8;
                if (tvj.wxo.value21.e === true && tvj.wxo.value72) {
                    var j = tvj.wxo.value72[this.vna];
                    if (j) {
                        tvj.wxo.value21.s = j.s;
                        tvj.wxo.value21.m = j.m;
                        tvj.wxo.value21.ts = j.ts;
                        tvj.wxo.value21.cs = j.cs
                    }
                }
            }
        } catch (g) {
            console.error(g.exp)
        }
    };
    this.orp = function() {
        if (!(tvj.slh.rbf == tvj.os.wok && tvj.slh.nqk == tvj.aox.sng)) {
            document.ontouchstart = tvj.cdg.wgi
        }
        if (tvj.slh.nqk != tvj.aox.igp && tvj.slh.nqk != tvj.aox.sng) {
            document.ontouchmove = tvj.cdg.lxc;
            document.ontouchend = tvj.cdg.iqw
        }
        if (!tvj.slh.xxa) {
            document.onmousedown = tvj.cdg.jvz;
            document.onmouseup = tvj.cdg.yfg;
            document.onmousemove = tvj.cdg.asa
        }
        document.onkeydown = tvj.cdg.fee;
        document.onkeyup = tvj.cdg.naq;
        document.oncontextmenu = tvj.cdg.xzd;
        if (tvj.slh.ada() === false && tvj.slh.rbf === tvj.os.zag && tvj.slh.ucg() === true && screen.width <= 414 && this.uli === false && this.ojz()) {
            this.wng = setInterval(this.tyc, 1000)
        }
    };
    this.wgi = function(d) {
        tvj.cdg.pse();
        tvj.cdg.fnt();
        tvj.cdg.nyv(d)
    };
    this.iqw = function(d) {
        if (tvj.cdg.bhu === true) {
            tvj.cdg.hxa(d)
        } else {
            if (tvj.cdg.rwt()) {
                tvj.cdg.jgs()
            }
        }
    };
    this.lxc = function(d) {
        tvj.cdg.evu(d)
    };
    this.jvz = function(d) {
        window.focus();
        if (tvj.cdg.bhu === true) {
            tvj.cdg.pse();
            tvj.cdg.fnt();
            tvj.cdg.nyv(d)
        } else {
            if (tvj.cdg.rwt()) {
                tvj.cdg.jgs()
            }
        }
    };
    this.yfg = function(d) {
        tvj.cdg.hxa(d)
    };
    this.asa = function(d) {};
    this.fee = function(d) {
        if ((d.keyCode == 122 && (tvj.slh.rbf == tvj.os.rzw || tvj.slh.rbf == tvj.os.olq)) || (d.keyCode == 70 && d.ctrlKey && tvj.slh.rbf == tvj.os.gei)) {
            return
        }
        tvj.cdg.pse();
        tvj.cdg.fnt();
        tvj.cdg.qgb(d)
    };
    this.naq = function(d) {
        tvj.cdg.zct(d)
    };
    this.xzd = function() {
        return false
    };
    this.nyv = function(d) {};
    this.hxa = function(d) {};
    this.qgb = function(d) {};
    this.zct = function(d) {};
    this.evu = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        return
    };
    this.equ = function() {
        var f = this.afx.mmc("topb"),
            e = this.afx.mmc("settings"),
            d = this.afx.mmc("topi"),
            g = this.afx.mmc("gameb");
        if (tvj.slh.nqk == tvj.aox.igp || tvj.slh.nqk == tvj.aox.rer) {
            this.lzv = (window.innerWidth == window.outerWidth)
        } else {
            if (tvj.slh.nqk == tvj.aox.bvy || tvj.slh.nqk == tvj.aox.cva) {
                this.lzv = (window.innerHeight >= window.outerHeight)
            } else {
                if (tvj.slh.nqk == tvj.aox.kof) {
                    this.lzv = (document.fullscreenElement) ? true : false
                } else {
                    if (tvj.slh.evd) {
                        if (tvj.slh.nqk == tvj.aox.kzq || tvj.slh.nqk == tvj.aox.hkx || tvj.slh.nqk == tvj.aox.myt) {
                            this.lzv = (document.webkitFullscreenElement) ? true : false
                        } else {
                            if (tvj.slh.nqk == tvj.aox.sng) {
                                this.lzv = (document.mozFullScreenElement) ? true : false
                            }
                        }
                    }
                }
            }
        }
        if (d) {
            d.ibc("fullscreen", this.lzv)
        }
        if (f) {
            f.zcr.tew("fullscreen", "#ibc", [(this.lzv) ? 1 : 0])
        }
        if (e) {
            e.zcr.tew("fullscreen", "#ibc", [(this.lzv) ? 1 : 0])
        }
        if (g) {
            g.zcr.tew("fullscreen", "#ibc", [(this.lzv) ? 1 : 0])
        }
        this.qxx();
        this.slw();
        this.ilc();
        if (tvj.slh.ucg() === true && tvj.slh.ada() === false) {
            document.body.style.height = "5000px"
        }
        if (!tvj.slh.ada() && tvj.slh.nqk === tvj.aox.myt && this.wnl < screen.width) {
            window.scrollTo(0, 0)
        }
    };
    this.kyt = function() {
        tvj.cdg.equ();
        tvj.cdg.tyc()
    };
    this.tyc = function() {
        if (tvj.slh.ucg() === true && tvj.slh.ada() === false) {
            if (tvj.cdg.ojz() === true && tvj.cdg.vae === true) {
                var d = document.getElementById("slideUpOverlay"),
                    e = document.getElementById("slideUp");
                if (d && e) {
                    if (window.innerHeight < screen.width) {
                        e.className = "slideUpAnim";
                        d.style.display = "block";
                        document.ontouchstart = null;
                        document.ontouchend = null;
                        document.ontouchmove = null;
                        if (window.ontouchmove == null) {
                            tvj.cdg.equ();
                            window.ontouchmove = tvj.cdg.kyt
                        }
                    } else {
                        e.className = null;
                        d.style.display = "none";
                        document.ontouchstart = tvj.cdg.wgi;
                        document.ontouchmove = tvj.cdg.lxc;
                        document.ontouchend = tvj.cdg.iqw;
                        if (window.ontouchmove != null) {
                            tvj.cdg.equ();
                            window.ontouchmove = null
                        }
                        window.scrollTo(0, 0)
                    }
                }
            }
        }
    };
    this.zwr = function(g) {
        var j = document.getElementById("rotateOverlay"),
            e = document.getElementById("rotatePanel"),
            k = document.getElementById("rotate"),
            f = document.getElementById("rotateInfo"),
            d = 500,
            l = 700,
            n = window.innerHeight / d,
            m = window.innerWidth / l,
            h = (n < m) ? n : m;
        if (j && k) {
            if (g === true) {
                if (h < 1) {
                    tvj.slh.khn(e, h, h)
                }
                f.innerHTML = tvj.cdg.language.nbi;
                k.className = "rotateAnim";
                j.style.display = "block";
                tvj.cdg.zgp = true
            } else {
                j.style.display = "none";
                k.className = null;
                tvj.cdg.zgp = false
            }
        }
    };
    this.iry = function() {
        var d = this.afx.mmc("settings");
        this.equ();
        if (d) {
            d.zcr.tew("adjustment", "#ibc", [(this.jgb === tvj.hue.jif) ? 0 : 1]);
            d.mdb()
        }
        if (this.cca === true) {
            this.zgp = true;
            this.wzm(true);
            this.zwr(true)
        } else {
            this.zgp = false;
            this.wzm((this.zyz[this.hwc] === 0));
            this.zwr(false)
        }
    };
    this.qxx = function() {
        this.bbo = window.innerWidth, this.wnl = window.innerHeight;
        this.awy = false;
        if (tvj.slh.ada() == true && tvj.wxo.value69 === true) {
            if (tvj.slh.frv() === true) {
                this.awy = true;
                this.bbo = (window.innerWidth > window.outerWidth) ? window.outerWidth : window.innerWidth;
                this.wnl = (window.innerHeight > window.outerHeight) ? window.outerHeight : window.innerHeight;
                if (this.bbo > this.wnl) {
                    this.wnl *= 0.98
                }
            } else {
                if (tvj.slh.ucg() === true) {
                    this.awy = true;
                    if (window.orientation === 90 || window.orientation === -90) {
                        if (screen.height === 1024) {
                            this.bbo = 1024;
                            this.wnl = (window.innerHeight < 704) ? 662 : 704
                        } else {
                            if (screen.height === 736) {
                                this.bbo = 736;
                                this.wnl = (window.innerHeight < 414 || window.innerHeight === 475) ? 370 : 414
                            } else {
                                if (screen.height === 667) {
                                    this.bbo = 667;
                                    this.wnl = 375
                                }
                            }
                        }
                    } else {
                        if (screen.height === 1024) {
                            this.bbo = 768;
                            this.wnl = (window.innerHeight < 960) ? 928 : 960
                        } else {
                            if (screen.height === 736) {
                                this.bbo = 414;
                                this.wnl = 628
                            } else {
                                if (screen.height === 667) {
                                    this.bbo = 375;
                                    this.wnl = 559
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.ilc = function() {
        var g = 0,
            j = 0,
            f = 1,
            e = 1,
            h = this.bbo,
            d = this.wnl;
        this.glk = (this.lzv || h < this.width || d < this.height || this.hue.vwg);
        g = this.aee(this.glk);
        f = ((h - j) / this.width).toString();
        f = Number(f.substring(0, (f.length > 5) ? 5 : f.length));
        e = ((d - g) / this.height).toString();
        e = Number(e.substring(0, (e.length > 5) ? 5 : e.length));
        if (this.glk) {
            if (this.hue.mmr) {
                if (f > e) {
                    this.igm = e;
                    this.hln = e
                } else {
                    this.igm = f;
                    this.hln = f
                }
            } else {
                this.igm = f;
                this.hln = e
            }
        } else {
            this.igm = 1;
            this.hln = 1
        }
        tvj.slh.khn(this.canvas, this.igm, this.hln);
        if (this.vrv != null) {
            tvj.slh.khn(this.vrv, this.igm, this.hln, ((this.hue.vrv.mom.x) - ((this.hue.vrv.mom.x + this.hue.vrv.yuo) / 2 * (1 - this.igm))), ((this.hue.vrv.mom.y) - ((this.hue.vrv.mom.y + this.hue.vrv.ibu) / 2 * (1 - this.hln))))
        }
        if (this.glk) {
            this.offsetLeft = Math.floor((h - (this.canvas.width * this.igm))) / 2;
            this.offsetTop = Math.floor((d - (this.canvas.height * this.hln))) / 2
        } else {
            this.offsetLeft = this.nme.offsetLeft;
            this.offsetTop = this.nme.offsetTop
        }
    };
    this.slw = function() {
        if (this.ojz() === true) {
            var e = null;
            if (this.yna[this.kby] === tvj.pym.wio) {
                if (window.orientation === -90) {
                    e = tvj.hue.vtc
                } else {
                    e = tvj.hue.jif
                }
            } else {
                if (this.yna[this.kby] === tvj.pym.kmv) {
                    e = tvj.hue.vtc
                } else {
                    if (this.yna[this.kby] === tvj.pym.nxg) {
                        e = tvj.hue.jif
                    }
                }
            }
            this.cca = (this.wnl > this.bbo);
            this.zzy(e);
            this.xjg(false);
            if (this.vae === true) {
                this.mdb()
            } else {
                this.afx.tew("loading", "#mdb")
            }
        } else {
            if (tvj.slh.evd) {
                var f = (this.bbo > this.wnl) ? this.blk : this.nov,
                    d = this.hue.cjk,
                    e = null;
                if (f != this.nji) {
                    this.nji = f;
                    if (this.uli) {
                        e = (this.nji == this.blk) ? tvj.hue.jsm : tvj.hue.nfy
                    } else {
                        e = (this.nji == this.blk) ? tvj.wxo.value33 : tvj.wxo.value32
                    }
                    this.zzy(e);
                    this.xjg((d != this.hue.cjk) || this.uli);
                    if (this.vae === true) {
                        if (this.uli && this.ojf) {
                            this.sti(this.language.csy.toUpperCase())
                        } else {
                            this.mdb()
                        }
                    } else {
                        this.afx.tew("loading", "#mdb")
                    }
                }
            } else {
                if (!this.uli) {
                    e = (this.lzv) ? tvj.wxo.value15 : tvj.wxo.value14;
                    this.zzy(e);
                    this.xjg(false);
                    if (this.vae === true) {
                        this.mdb()
                    } else {
                        this.afx.tew("loading", "#mdb")
                    }
                }
            }
        }
    };
    this.ojz = function() {
        return false
    };
    this.zzy = function(d) {};
    this.vin = function() {
        this.style = new mqf()
    };
    this.aee = function(d) {
        var e = 0;
        if (tvj.slh.frv() && window.innerWidth > window.innerHeight && d) {
            if (this.bhu === true && document.body.style.backgroundColor !== this.style.izh.backgroundColor) {
                document.body.style.backgroundColor = this.style.izh.backgroundColor
            }
        }
        return e
    };
    this.hsk = function() {
        if (tvj.slh.frv() && !tvj.slh.ada() && window.innerWidth > window.innerHeight) {
            return 0
        }
        return 0
    };
    this.vnd = function() {
        return false
    };
    this.mqq = function() {
        if (tvj.slh.xxa) {
            this.xbq = new yqt()
        } else {
            this.xbq = new qqf()
        }
        this.xbq.xpk();
        this.xbq.lrw(this.gwb())
    };
    this.bor = function() {
        this.afx = new lts();
        this.afx.xpk();
        this.afx.yhs("jackpots")
    };
    this.gwb = function() {
        var d = new zab();
        d.xpk();
        return d
    };
    this.jhw = function() {
        this.ayv = new djy()
    };
    this.cyo = function() {
        try {
            var d = a("lang"),
                f = a("uselang"),
                n = [],
                o = [];
            if (d != "") {
                sessionStorage.sessionValue1 = d
            }
            if (f != "") {
                sessionStorage.sessionValue11 = f
            }
            if (sessionStorage.sessionValue11) {
                n = sessionStorage.sessionValue11.split(",");
                for (var k = 0, l = n.length; k < l; k++) {
                    for (var h = 0, g = tvj.wxo.value5.length; h < g; h++) {
                        if (n[k] === tvj.wxo.value5[h]) {
                            o.push(n[k])
                        }
                    }
                }
                if (o.length == 0) {
                    o.push(tvj.wxo.value5[0])
                }
                tvj.wxo.value5 = [];
                for (var k = 0, l = o.length; k < l; k++) {
                    tvj.wxo.value5.push(o[k])
                }
            }
            if (sessionStorage.sessionValue1 == null) {
                var p = tvj.slh.jgz();
                if (this.qhd(p)) {
                    sessionStorage.sessionValue1 = p
                } else {
                    if (p === tvj.language.EN && this.qhd(tvj.language.US)) {
                        sessionStorage.sessionValue1 = tvj.language.US
                    } else {
                        if (p === tvj.language.DE && this.qhd(tvj.language.AT)) {
                            sessionStorage.sessionValue1 = tvj.language.AT
                        } else {
                            if (p === tvj.language.ES && this.qhd(tvj.language.MX)) {
                                sessionStorage.sessionValue1 = tvj.language.MX
                            } else {
                                if (p === tvj.language.ES && this.qhd(tvj.language.CO)) {
                                    sessionStorage.sessionValue1 = tvj.language.CO
                                } else {
                                    if (p === tvj.language.ES && this.qhd(tvj.language.CL)) {
                                        sessionStorage.sessionValue1 = tvj.language.CL
                                    } else {
                                        if (p === tvj.language.ES && this.qhd(tvj.language.VE)) {
                                            sessionStorage.sessionValue1 = tvj.language.VE
                                        } else {
                                            if (p === tvj.language.EN && this.qhd(tvj.language.BR)) {
                                                sessionStorage.sessionValue1 = tvj.language.BR
                                            } else {
                                                sessionStorage.sessionValue1 = tvj.wxo.value5[0]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this.qhd(sessionStorage.sessionValue1)) {
                for (var k = 0, l = tvj.wxo.value5.length; k < l; k++) {
                    if (tvj.wxo.value5[k] == sessionStorage.sessionValue1) {
                        this.zqd = k;
                        break
                    }
                }
                this.language = this.qhv(sessionStorage.sessionValue1)
            } else {
                this.zqd = 0;
                this.language = this.qhv(tvj.wxo.value5[this.zqd]);
                sessionStorage.sessionValue1 = tvj.wxo.value5[this.zqd]
            }
        } catch (m) {
            this.zqd = 0;
            this.language = this.qhv(tvj.wxo.value5[this.zqd]);
            console.error(m.exp)
        }
    };
    this.kdg = function() {
        var d = (tvj.wxo.value45 == tvj.vwh.slx) ? this.hue.vwh.cdg : (tvj.wxo.value45 == tvj.vwh.faz) ? this.hue.vwh.rlr : this.hue.vwh.xwn;
        this.nme = document.getElementById("gameArea");
        if (this.awy === false) {
            this.nme.style.marginTop = (-d.mom.height / 2) + "px";
            this.nme.style.marginLeft = (-d.mom.width / 2) + "px"
        } else {
            this.nme.style.left = "0px";
            this.nme.style.top = "0px";
            this.nme.style.marginTop = ((window.innerHeight - d.mom.height) / 2) + "px";
            this.nme.style.marginLeft = ((window.innerWidth - d.mom.width) / 2) + "px"
        }
        this.nme.style.width = (d.mom.width > window.innerWidth) ? window.innerWidth + "px" : d.mom.width + "px";
        this.nme.style.height = (d.mom.height > window.innerHeight) ? window.innerHeight + "px" : d.mom.height + "px";
        this.canvas = document.getElementById("canvas");
        this.canvas.width = Math.round(d.mom.width);
        this.canvas.height = Math.round(d.mom.height);
        this.context2D = this.canvas.getContext("2d");
        this.obz(d)
    };
    this.obz = function(d) {
        var e = new mmz();
        e.xpk(d.mom, this.context2D);
        e.parent = this;
        e.qax = (this.uli) ? this.language.hyl : this.language.hqd;
        e.vzc = this.language.error;
        e.sqc(d);
        e.gmo(this.style.vwh);
        this.afx.zxg("loading", e)
    };
    this.rcb = function() {
        var d = new yjk();
        d.xpk(this.hue.klc.mom, null, this.context2D);
        d.parent = this;
        d.sqc(this.hue.klc);
        d.gmo(this.style.klc);
        if (tvj.wxo.value11 && tvj.wxo.value49) {
            d.iht("time", "", "--:-- [--:--]")
        } else {
            if (tvj.wxo.value11 || tvj.wxo.value49) {
                d.iht("time", "", "--:--")
            }
        }
        if (this.nwk()) {
            d.iht("freeplay", "", this.language.ide)
        } else {
            d.iht("id", "", "")
        }
        this.afx.zxg("topi", d)
    };
    this.kte = function() {
        var d = new nos();
        d.xpk(this.hue.rkt.mom, null, this.context2D);
        d.parent = this;
        d.sqc(this.hue.rkt);
        d.gmo(this.style.rkt, false);
        d.tzp(false);
        this.afx.zxg("topb", d)
    };
    this.vln = function() {};
    this.lhm = function() {
        var d = new zbk();
        d.xpk(this.hue.qjx.mom, null, this.context2D);
        d.parent = this;
        d.zfl(this.hue.qjx);
        d.gmo(this.style.qjx);
        d.tzp(false);
        this.afx.zxg("stats", d)
    };
    this.aqs = function() {
        var d = new rpe();
        d.xpk(this.hue.ptk.mom, null, this.context2D);
        d.parent = this;
        d.tuz();
        d.gmo(this.style.ptk);
        d.sqc(this.hue.ptk);
        d.tzp(false);
        this.afx.zxg("msg", d)
    };
    this.bxt = function(e) {
        var d = new rfr();
        d.xpk(this.hue.bna.mom, null, this.context2D);
        d.parent = this;
        d.nrg = true;
        if (e) {
            d.kkg(e)
        }
        d.zfl(this.hue.bna);
        d.msr(this.language);
        d.gmo(this.style.bna);
        d.sqc(this.hue.bna);
        d.tzp(false);
        this.afx.zxg("autop", d)
    };
    this.iny = function(d) {
        var e = new tmq();
        e.xpk(this.hue.dmx.mom, null, this.context2D);
        e.parent = this;
        if (d) {
            e.ywx(d)
        }
        e.tzp(false);
        this.afx.zxg("settings", e)
    };
    this.xjg = function(d) {};
    this.dqa = function() {
        var d = this.afx.mmc("stats");
        if (d) {
            d.gae(this.hue.qjx.mom);
            d.sqc(this.hue.qjx)
        }
    };
    this.ach = function() {
        var d = this.afx.mmc("msg");
        if (d) {
            d.gae(this.hue.ptk.mom);
            d.sqc(this.hue.ptk)
        }
    };
    this.jvf = function() {
        var d = this.afx.mmc("autop");
        if (d) {
            d.gae(this.hue.bna.mom);
            d.sqc(this.hue.bna)
        }
    };
    this.mfg = function() {
        var d = this.afx.mmc("settings");
        if (d) {
            d.gae(this.hue.dmx.mom);
            d.sqc(this.hue.dmx)
        }
    };
    this.nvm = function() {
        var d = this.afx.mmc("topi");
        if (d) {
            d.gae(this.hue.klc.mom);
            d.sqc(this.hue.klc)
        }
    };
    this.eah = function() {
        var d = this.afx.mmc("topb");
        if (d) {
            d.gae(this.hue.rkt.mom);
            d.sqc(this.hue.rkt)
        }
    };
    this.zcq = function() {
        var e = this.afx.mmc("loading"),
            d = (tvj.wxo.value45 == tvj.vwh.slx) ? this.hue.vwh.cdg : (tvj.wxo.value45 == tvj.vwh.faz) ? this.hue.vwh.rlr : this.hue.vwh.xwn;
        if (e) {
            this.canvas.width = 0;
            if (this.awy === false) {
                this.nme.style.marginTop = (-d.mom.height / 2) + "px";
                this.nme.style.marginLeft = (-d.mom.width / 2) + "px"
            } else {
                this.nme.style.left = "0px";
                this.nme.style.top = "0px";
                this.nme.style.marginTop = ((this.wnl - d.mom.height) / 2) + "px";
                this.nme.style.marginLeft = ((this.bbo - d.mom.width) / 2) + "px"
            }
            this.nme.style.width = (d.mom.width > this.bbo) ? this.bbo + "px" : d.mom.width + "px";
            this.nme.style.height = (d.mom.height > this.wnl) ? this.wnl + "px" : d.mom.height + "px";
            this.canvas.width = Math.round(d.mom.width);
            this.canvas.height = Math.round(d.mom.height);
            e.gae(d.mom);
            e.sqc(d)
        }
    };
    this.liv = function() {
        if (tvj.slh.evd && !tvj.slh.xxa) {
            if (!this.xbq.xjm && tvj.slh.nqk != tvj.aox.vhu) {
                this.zvu = false;
                this.hwc = 0
            }
        }
    };
    this.okq = function(d) {
        if (tvj.slh.evd) {
            if (!this.uli) {
                return tvj.hue.yjc
            } else {
                if (!this.bmf) {
                    return tvj.hue.jsm
                }
            }
        }
        return d
    };
    this.ajp = function() {
        var d = this.afx.mmc("loading");
        this.equ();
        if (d) {
            d.djs = true
        }
        if ((tvj.slh.nqk === tvj.aox.kzq || tvj.slh.nqk === tvj.aox.cva || tvj.slh.nqk === tvj.aox.idv) && tvj.slh.rbf === tvj.os.wok && tvj.slh.gtq === true) {
            if (this.xbq.xjm === false || tvj.slh.ddd() === false || tvj.slh.yxu() === false) {
                tvj.nks = tvj.dkd.jni
            }
        }
        if (tvj.nks == 0) {
            if (this.zvu === true && tvj.slh.wgg().length === 0) {
                this.zvu = false
            }
            if (d) {
                if (tvj.wxo.value45 === tvj.vwh.faz) {
                    d.start()
                } else {
                    if (tvj.wxo.value45 === tvj.vwh.hfy) {
                        d.teq()
                    }
                }
                d.mdb(0)
            }
            this.xwr();
            if (this.zvu === true) {
                this.eyc()
            }
            if (d && d.dpw() && tvj.wxo.value45 === tvj.vwh.faz) {
                d.juf = tvj.cdg.xbq.start
            } else {
                this.xbq.start()
            }
        } else {
            if (d) {
                if (tvj.nks == tvj.dkd.wqh && tvj.slh.nqk === tvj.aox.myt) {
                    d.anv = this.language.krt;
                    d.mdb(0)
                } else {
                    if (tvj.nks == tvj.exp.ndc) {
                        d.anv = this.language.ddo;
                        d.mdb(0)
                    } else {
                        d.anv = this.language.mnz;
                        if (tvj.slh.rbf === tvj.os.wok || tvj.slh.rbf === tvj.os.olq) {
                            if (tvj.nks != tvj.dkd.wqh && sessionStorage.sessionValue1 === tvj.language.TR) {
                                d.anv += "|Google Chrome" + this.language.joq
                            } else {
                                if (tvj.nks != tvj.dkd.wqh && (sessionStorage.sessionValue1 === tvj.language.GE || sessionStorage.sessionValue1 === tvj.language.HU)) {
                                    d.anv += "|" + this.language.ixd + " Google Chrome" + this.language.jlh
                                } else {
                                    d.anv += "|" + this.language.joq + " Google Chrome"
                                }
                            }
                        } else {
                            if (tvj.slh.rbf === tvj.os.rzw || tvj.slh.rbf === tvj.os.olq) {
                                if (tvj.nks != tvj.dkd.wqh && sessionStorage.sessionValue1 === tvj.language.TR) {
                                    d.anv += "|Google Chrome, Mozilla Firefox" + this.language.joq
                                } else {
                                    if (tvj.nks != tvj.dkd.wqh && (sessionStorage.sessionValue1 === tvj.language.GE || sessionStorage.sessionValue1 === tvj.language.HU)) {
                                        d.anv += "|" + this.language.ixd + " Google Chrome, Mozilla Firefox" + this.language.jlh
                                    } else {
                                        d.anv += "|" + this.language.joq + " Google Chrome, Mozilla Firefox"
                                    }
                                }
                            }
                        }
                        console.error("Errorcode: " + tvj.nks);
                        d.mdb(0)
                    }
                }
            }
        }
    };
    this.xwr = function() {};
    this.eyc = function() {};
    this.bek = function() {
        var e = this.ebc + this.hue.type + "/",
            d = this.afx.mmc("loading");
        if (tvj.wxo.value45 == tvj.vwh.slx) {
            e += "load.jpg"
        } else {
            if (tvj.wxo.value45 == tvj.vwh.faz) {
                e += "load_amatic.png"
            } else {
                if (tvj.wxo.value45 == tvj.vwh.hfy) {
                    this.xbq.pnw("splashanim", tvj.wxo.value30 + "/basic/images/" + this.hue.type + "/loadanim.png");
                    e += "load_amanet.png"
                }
            }
        }
        if (e.indexOf(".png") >= 0) {
            if (d) {
                d.lvk = true
            }
        }
        this.xbq.pnw("splash", e);
        this.xbq.swl()
    };
    this.cbf = function() {};
    this.qhd = function(e) {
        for (var d = 0; d < tvj.wxo.value5.length; d++) {
            if (tvj.wxo.value5[d] == e) {
                return true
            }
        }
        return false
    };
    this.hiu = function() {
        tvj.cdg.ipy = true;
        if (!tvj.cdg.uli) {
            tvj.cdg.iub();
            if (tvj.cdg.xsz()) {
                tvj.cdg.qvc()
            }
        } else {
            tvj.cdg.jxm()
        }
        tvj.cdg.connect()
    };
    this.iub = function() {};
    this.jxm = function() {};
    this.connect = function() {
        this.vdt.connect(this.bdh, this.iye, this.cgz, this.nnt, this.vyg, this.fva, this.vna)
    };
    this.zer = function(d) {
        if (typeof d === "undefined") {
            tvj.cdg.vdt.zer(0)
        } else {
            tvj.cdg.vdt.zer(d)
        }
    };
    this.wga = function(d) {
        this.vao = 0;
        this.xdb = 0;
        this.idg = d;
        clearInterval(this.zee);
        this.zee = setInterval(this.pas, 1000)
    };
    this.pas = function() {
        var d = tvj.cdg.afx.mmc("loading");
        tvj.cdg.vao++;
        tvj.cdg.xdb = Math.round(tvj.wxo.value47 / 1000) - tvj.cdg.vao;
        tvj.cdg.xdb = (tvj.cdg.xdb > 0) ? tvj.cdg.xdb : 0;
        if (!tvj.cdg.bhu) {
            if (d) {
                d.anv = "Can not connect to game server!|Tries to connect: " + tvj.cdg.idg + " (" + tvj.cdg.xdb + " sec)";
                d.mdb(0)
            }
        }
    };
    this.gln = function() {
        return tvj.wxo.value74
    };
    this.mdb = function(d, g, e, f) {};
    this.kez = function() {
        return (this.vae === true && this.bhu === true && this.cca === false)
    };
    this.sti = function(e) {
        var d = this.afx.mmc("history");
        this.vae = true;
        if (this.bhu) {
            if (this.hue.nff) {
                tvj.slh.ayc(this.context2D, this.hue.cdg.mom.x - this.hue.cdg.ioh, this.hue.cdg.mom.y - this.hue.cdg.ioh, this.hue.cdg.mom.width + 2 * this.hue.cdg.ioh, this.hue.cdg.mom.height + 2 * this.hue.cdg.ioh, "black", 1)
            }
            tvj.slh.edu(this.context2D, e, "white", this.hue.cdg.mom.x, this.hue.cdg.mom.y, this.hue.cdg.mom.width, this.hue.cdg.mom.height, "arial", 28, "bold");
            if (d) {
                d.mdb()
            }
        }
    };
    this.htj = function() {
        tvj.cdg.afx.tew("msg", "#dwo");
        tvj.cdg.bam(false);
        tvj.cdg.ljg.ein(false);
        tvj.cdg.ljg.zcr.tew("exit", "#vxc", [true]);
        if (tvj.slh.zov()) {
            tvj.slh.rlu()
        }
        if (tvj.wxo.value67 > 0) {
            tvj.cdg.zer(tvj.wxo.value67)
        }
    };
    this.trv = function() {
        clearTimeout(tvj.cdg.qtd);
        if (tvj.cdg.ljg) {
            tvj.cdg.ljg.ein(false)
        }
        if (!tvj.cdg.uli) {
            tvj.cdg.stop();
            if (tvj.cdg.ljg) {
                tvj.cdg.ljg.zcr.tew("info", "#ylv", [tvj.cdg.language.ica]);
                tvj.cdg.mdb()
            }
            if (tvj.cdg.ojz() === true && tvj.slh.zov()) {
                tvj.slh.haq();
                tvj.slh.rlu();
                setTimeout(tvj.cdg.vdt.doy.close, 800)
            } else {
                tvj.cdg.vdt.doy.close()
            }
        } else {
            tvj.cdg.vdt.close()
        }
    };
    this.ryh = function() {
        tvj.slh.rlu()
    };
    this.mbn = function() {
        var d = (tvj.cdg.ojz() === true) ? "smartphone" : "desktop";
        if (tvj.cdg.mdi != "") {
            var e = window.open(tvj.wxo.value30 + "/gamerules/en/" + d + "/" + tvj.cdg.bdh.toLowerCase() + ".html?rtp=" + tvj.cdg.mdi, "_blank", (d === "desktop") ? "width=800,scrollbars=yes" : null);
            if (typeof e === "undefined") {
                window.location.href = tvj.wxo.value30 + "/gamerules/en/" + d + "/" + tvj.cdg.bdh.toLowerCase() + ".html?rtp=" + tvj.cdg.mdi
            }
        }
    };
    this.qhm = function() {
        tvj.cdg.rea = false;
        tvj.cdg.zfy();
        tvj.cdg.pfh();
        tvj.cdg.wxq()
    };
    this.lqr = function() {
        var d = tvj.cdg.afx.mmc("stats");
        if (d) {
            d.puq(true, true)
        }
        tvj.cdg.lcb.close(true)
    };
    this.maq = function() {
        var d = tvj.cdg.afx.mmc("stats");
        tvj.cdg.stop();
        if (d && d.dse()) {
            d.puq(true, true)
        }
        tvj.cdg.vdt.doy.close();
        if (tvj.cdg.lcb) {
            tvj.cdg.lcb.close(false)
        }
    };
    this.xib = function() {
        clearTimeout(tvj.cdg.qtd);
        tvj.cdg.ljg.ein(false);
        tvj.cdg.stop();
        tvj.cdg.vdt.doy.sty()
    };
    this.byx = function() {
        if (tvj.cdg.ojf) {
            return
        }
        var d = tvj.cdg.afx.mmc("history");
        if (d) {
            d.ein(false)
        }
        tvj.cdg.stop();
        tvj.cdg.vdt.ehb(tvj.cdg.kda)
    };
    this.ryd = function() {
        if (tvj.cdg.ojf) {
            return
        }
        var d = tvj.cdg.afx.mmc("history");
        if (d) {
            d.ein(false)
        }
        tvj.cdg.stop();
        tvj.cdg.vdt.srp(tvj.cdg.kda)
    };
    this.jdp = function() {
        var d = tvj.cdg.afx.mmc("history");
        if (d) {
            d.ein(false)
        }
        tvj.cdg.stop();
        tvj.cdg.ypc();
        tvj.cdg.vdt.close()
    };
    this.ekh = function() {
        tvj.cdg.xbq.loh("btn");
        tvj.cdg.xbq.ruf("btn");
        tvj.cdg.urt()
    };
    this.bmu = function() {
        var f = tvj.cdg.afx.mmc("topb"),
            e = tvj.cdg.afx.mmc("settings"),
            g = tvj.cdg.afx.mmc("gameb"),
            d = tvj.cdg.afx.mmc("topi");
        if (tvj.cdg.xbq.xjm === true) {
            tvj.cdg.hwc = (tvj.cdg.hwc === tvj.cdg.zyz.length - 1) ? 0 : tvj.cdg.hwc + 1;
            tvj.cdg.txo(tvj.cdg.zyz[tvj.cdg.hwc])
        } else {
            tvj.cdg.hwc = (tvj.cdg.hwc === tvj.cdg.zyz.length - 1) ? 0 : tvj.cdg.zyz.length - 1;
            tvj.cdg.wzm((tvj.cdg.zyz[tvj.cdg.hwc] === 0))
        }
        sessionStorage.sessionValue6 = tvj.cdg.hwc;
        if (tvj.cdg.zyz[tvj.cdg.hwc] > 0) {
            tvj.cdg.xbq.ruf("audioon")
        }
        if (d) {
            d.gmq("audio", tvj.cdg.zyz[tvj.cdg.hwc])
        }
        if (f) {
            f.zcr.tew("audio", "#ibc", [tvj.cdg.hwc])
        }
        if (e) {
            e.zcr.tew("audio", "#ibc", [tvj.cdg.hwc])
        }
        if (g) {
            g.zcr.tew("audio", "#ibc", [tvj.cdg.hwc])
        }
        tvj.cdg.mdb()
    };
    this.jgs = function() {};
    this.lrx = function() {
        var d = tvj.cdg.afx.mmc("settings");
        if (d) {
            if (d.dse()) {
                tvj.cdg.hxs()
            } else {
                tvj.cdg.chn()
            }
            tvj.cdg.xbq.ruf("btn");
            if (tvj.cdg.hue.abu === false) {
                tvj.cdg.ljg.zcr.tew("setting", "#bml", [d.dse()])
            }
        }
    };
    this.ypl = function() {
        var d = tvj.cdg.afx.mmc("settings"),
            e = "";
        tvj.cdg.kby = (tvj.cdg.kby < tvj.cdg.yna.length - 1) ? tvj.cdg.kby + 1 : (tvj.slh.ksk()) ? 0 : 1;
        localStorage.localValue1 = tvj.cdg.kby;
        tvj.cdg.equ();
        if (d) {
            d.zcr.tew("adjustment", "#ibc", [(tvj.cdg.jgb === tvj.hue.jif) ? 0 : 1]);
            if (tvj.cdg.yna[tvj.cdg.kby] === tvj.pym.kmv) {
                e = tvj.cdg.language.left
            } else {
                if (tvj.cdg.yna[tvj.cdg.kby] === tvj.pym.nxg) {
                    e = tvj.cdg.language.isz
                } else {
                    if (tvj.cdg.yna[tvj.cdg.kby] === tvj.pym.wio) {
                        e = tvj.cdg.language.cmd
                    }
                }
            }
            d.zcr.tew("adjustment", "#zja", [e])
        }
    };
    this.wie = function(e, d) {
        this.ljg.zcr.tew("creditd", "#zja", [this.gch(e), d])
    };
    this.ssg = function(e, d) {
        if (e > 0) {
            this.ljg.zcr.tew("betd", "#zja", [this.gch(e), d])
        } else {
            this.ljg.zcr.tew("betd", "#zja", ["", d])
        }
    };
    this.oay = function(e) {
        var d = this.afx.mmc("topi");
        this.kda = e;
        if (d) {
            d.zxt("id", (e > 0) ? e : "")
        }
    };
    this.myd = function() {
        var e = "",
            d = tvj.cdg.afx.mmc("topi");
        if (tvj.wxo.value49) {
            e += tvj.cdg.xuv()
        }
        if (tvj.wxo.value49 && tvj.wxo.value11) {
            e += " ["
        }
        if (tvj.wxo.value11) {
            e += tvj.cdg.pcb()
        }
        if (tvj.wxo.value49 && tvj.wxo.value11) {
            e += "]"
        }
        if (d) {
            d.zxt("time", e)
        }
    };
    this.pcb = function() {
        return this.getTime(new Date().getTime() - this.sth)
    };
    this.xuv = function() {
        var d = new Date();
        return this.tfc(d.getHours()) + ":" + this.tfc(d.getMinutes())
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
        return this.tfc(d) + ":" + this.tfc(f)
    };
    this.tfc = function(d) {
        if (d < 0) {
            return "00"
        } else {
            if (d < 10) {
                return "0" + d
            }
        }
        return d
    };
    this.fbb = function() {
        if (tvj.wxo.value11 || tvj.wxo.value49) {
            if (tvj.wxo.value49) {
                this.xuv()
            }
            this.sth = new Date().getTime();
            this.myd();
            this.duv = setInterval(this.myd, 1000)
        }
    };
    this.eku = function() {
        clearInterval(this.duv)
    };
    this.rha = function(d) {
        this.sth -= d
    };
    this.bgp = function(d, f) {
        var e = this.afx.mmc("loading");
        if (e && e.anv == null) {
            if (f && f !== "") {
                e.vzc = f
            } else {
                e.vzc = this.language.error
            }
            e.anv = d;
            e.mdb(this.xbq.gev())
        }
    };
    this.chn = function() {};
    this.hxs = function() {};
    this.tye = function() {};
    this.wcq = function() {};
    this.urt = function() {
        var g = false,
            h = this.afx.mmc("topb"),
            f = this.afx.mmc("settings"),
            j = this.afx.mmc("gameb"),
            d = this.afx.mmc("topi");
        this.zqd = (this.zqd + 1 == tvj.wxo.value5.length) ? 0 : this.zqd + 1;
        sessionStorage.sessionValue1 = tvj.wxo.value5[this.zqd];
        this.language = this.qhv(tvj.wxo.value5[this.zqd]);
        this.msr();
        if (h && g == false) {
            var e = h.zcr.mmc("language");
            if (e) {
                e.nkk(this.wqp(tvj.wxo.value5[this.zqd]));
                g = true
            }
            h.uxm(true)
        }
        if (f && g == false) {
            var e = f.zcr.mmc("language");
            if (e) {
                e.nkk(this.wqp(tvj.wxo.value5[this.zqd]));
                g = true
            }
        }
        if (j && g == false) {
            var e = j.zcr.mmc("language");
            if (e) {
                e.nkk(this.wqp(tvj.wxo.value5[this.zqd]));
                g = true
            }
        }
        if (g == false) {
            var e = this.ljg.zcr.mmc("lang");
            if (e) {
                e.ifr = this.wqp(tvj.wxo.value5[this.zqd])
            }
        }
        if (d) {
            d.ibc("language", sessionStorage.sessionValue1)
        }
        this.mdb()
    };
    this.msr = function() {};
    this.qhv = function(d) {
        if (d == tvj.language.EN || d == tvj.language.US) {
            return new bnz()
        } else {
            if (d == tvj.language.ES || d == tvj.language.CO || d == tvj.language.MX || d == tvj.language.CL || d == tvj.language.VE) {
                return new rtq()
            } else {
                if (d == tvj.language.DE || d == tvj.language.AT) {
                    return new thf()
                } else {
                    if (d == tvj.language.PT || d == tvj.language.BR) {
                        return new dtc()
                    } else {
                        if (d == tvj.language.RU) {
                            return new sgq()
                        } else {
                            if (d == tvj.language.EE) {
                                return new raq()
                            } else {
                                if (d == tvj.language.TR) {
                                    return new pwg()
                                } else {
                                    if (d == tvj.language.CZ) {
                                        return new zez()
                                    } else {
                                        if (d == tvj.language.GR) {
                                            return new iwa()
                                        } else {
                                            if (d == tvj.language.BG) {
                                                return new yip()
                                            } else {
                                                if (d == tvj.language.GE) {
                                                    return new lfp()
                                                } else {
                                                    if (d == tvj.language.HU) {
                                                        return new lhu()
                                                    } else {
                                                        if (d == tvj.language.RO) {
                                                            return new wyr()
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
    this.wqp = function(d) {
        if (d) {
            return this.xbq.ire(d)
        }
        return null
    };
    this.ybp = function() {
        this.xbq.hzd()
    };
    this.ypc = function() {};
    this.wzm = function(d) {
        this.xbq.tpa(d)
    };
    this.txo = function(d) {
        this.xbq.lci(d)
    };
    this.qvc = function() {
        this.lcb = new tec().xpk(this, tvj.wxo.value6)
    };
    this.vrr = function() {
        if (this.lcb) {
            this.lcb.connect(this.bdh, this.iye, this.cgz, this.nnt, this.vyg, true)
        }
    };
    this.wxq = function() {
        if (tvj.cdg.lcb) {
            tvj.cdg.lcb.connect(tvj.cdg.bdh, tvj.cdg.iye, tvj.cdg.cgz, tvj.cdg.nnt, tvj.cdg.vyg, false)
        }
    };
    this.pfh = function() {};
    this.afg = function() {};
    this.ckh = function(d) {
        clearTimeout(this.gag);
        this.gag = setTimeout(this.qxu, d)
    };
    this.qxu = function() {
        tvj.cdg.rea = true
    };
    this.xsz = function() {
        return tvj.wxo.value36 || tvj.wxo.value37
    };
    this.gsi = function() {
        this.vln();
        var d = this.afx.mmc("history");
        this.bhu = true;
        this.ojf = true;
        if (d) {
            d.fja(true)
        }
        this.sti(this.language.csy.toUpperCase())
    };
    this.jmr = function() {
        loadGame("hist_" + tvj.cdg.bdh.toLowerCase(), tvj.wxo.value30 + "/" + tvj.cdg.bdh.toLowerCase() + "/src/hist_" + tvj.cdg.bdh.toLowerCase(), "UTF-8");
        removeGame(tvj.cdg.bdh.toLowerCase(), tvj.wxo.value30 + "/" + tvj.cdg.bdh.toLowerCase() + "/src/" + tvj.cdg.bdh.toLowerCase())
    };
    this.ttc = function() {
        window.location.href = "./history_" + this.bdh.toLowerCase() + ".html"
    };
    this.wji = function() {
        if (tvj.cdg.bmf) {
            return
        }
        if (sessionStorage.sessionValue5 != null) {
            sessionStorage.exitGame = "true";
window.parent.postMessage('CloseGame',"*");
        } else {
            removeGame(tvj.cdg.bdh.toLowerCase(), tvj.wxo.value30 + "/" + tvj.cdg.bdh.toLowerCase() + "/src/" + tvj.cdg.bdh.toLowerCase());
            removeGame("hist_" + tvj.cdg.bdh.toLowerCase(), tvj.wxo.value30 + "/" + tvj.cdg.bdh.toLowerCase() + "/src/hist_" + tvj.cdg.bdh.toLowerCase());
            loadMenu("menu", tvj.wxo.value1001, "UTF-8", true)
        }
    };
    this.oje = function() {
        if (sessionStorage.sessionValue5 != null) {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue5)
        } else {
            removeGame(tvj.cdg.bdh.toLowerCase(), tvj.wxo.value30 + "/" + tvj.cdg.bdh.toLowerCase() + "/src/" + tvj.cdg.bdh.toLowerCase());
            removeGame("hist_" + tvj.cdg.bdh.toLowerCase(), tvj.wxo.value30 + "/" + tvj.cdg.bdh.toLowerCase() + "/src/hist_" + tvj.cdg.bdh.toLowerCase());
            loadMenu("menu", tvj.wxo.value1001, "UTF-8", false)
        }
    };
    this.cdw = function(d) {
        var e = this.afx.mmc("msg");
        clearTimeout(this.tqt);
        if (e) {
            e.type = d;
            this.tqt = setTimeout(e.dns, 300)
        }
    };
    this.stop = function() {
        this.eku();
        this.ezl();
        this.opb();
        clearTimeout(this.gag);
        clearTimeout(this.tqt);
        clearInterval(this.wng);
        this.afx.tew("autop", "#stop");
        this.afx.tew("settings", "#stop");
        this.afx.tew("topb", "#stop")
    };
    this.nwk = function() {
        var d = false;
        if (this.zcl.toLowerCase().indexOf("freeplay") === 0) {
            d = true
        } else {
            if (this.iye == "freeplay" && this.cgz == "freeplay") {
                d = true
            } else {
                if (this.nnt && (this.nnt == "b71d982ffcbe56eb8cd11fa05963bbee" || this.nnt.toLowerCase() == "freeplay")) {
                    d = true
                } else {
                    if (tvj.wxo.value68 != null && this.vna.toLowerCase() === tvj.wxo.value68.toLowerCase()) {
                        d = true
                    }
                }
            }
        }
        if (d === true) {
            tvj.wxo.value21.e = false
        }
        return d
    };
    this.nin = function() {
        return (tvj.wxo.value65 > 0)
    };
    this.rwt = function() {
        return (((tvj.slh.rbf === tvj.os.zag && tvj.slh.qwg() === true) || tvj.slh.rbf === tvj.os.wok) && this.uli === false)
    };
    this.wjz = function() {
        return false
    };
    this.frk = function() {
        if (tvj.cdg.nin() && tvj.cdg.wjz()) {
            clearTimeout(tvj.cdg.qtd);
            tvj.cdg.qtd = setTimeout(tvj.cdg.trv, tvj.wxo.value65)
        }
    };
    this.pse = function() {
        if (tvj.cdg.nin() && tvj.cdg.qtd >= 0) {
            if (tvj.cdg.wjz()) {
                clearTimeout(tvj.cdg.qtd);
                tvj.cdg.qtd = setTimeout(tvj.cdg.trv, tvj.wxo.value65)
            } else {
                clearTimeout(tvj.cdg.qtd);
                tvj.cdg.qtd = -1
            }
        }
    };
    this.ezl = function() {
        if (tvj.cdg.nin()) {
            clearTimeout(tvj.cdg.qtd);
            tvj.cdg.qtd = -1
        }
    };
    this.zri = function() {
        return false
    };
    this.gju = function() {
        return false
    };
    this.gsf = function() {
        if (tvj.cdg.zri() && tvj.cdg.gju() && tvj.cdg.mvm < 0) {
            clearTimeout(tvj.cdg.mvm);
            tvj.cdg.mvm = setTimeout(tvj.cdg.nsn, tvj.cdg.mmp)
        }
    };
    this.fnt = function() {
        if (tvj.cdg.zri() && tvj.cdg.mvm >= 0) {
            if (tvj.cdg.gju()) {
                clearTimeout(tvj.cdg.mvm);
                tvj.cdg.mvm = setTimeout(tvj.cdg.nsn, tvj.cdg.mmp)
            } else {
                clearTimeout(tvj.cdg.mvm);
                tvj.cdg.mvm = -1
            }
        }
    };
    this.opb = function() {
        if (tvj.cdg.zri()) {
            clearTimeout(tvj.cdg.mvm);
            tvj.cdg.mvm = -1
        }
    };
    this.nsn = function() {};
    this.hfl = function() {};
    this.lpo = function(f) {
        var e = Number(f.replace(/_*/g, "")),
            d = Number(this.vyg.replace(/_*/g, ""));
        if (e > d) {
            this.vyg = f
        }
    };
    this.bam = function(g) {
        var e = (g && !this.qsy),
            f = this.afx.mmc("topb"),
            d = this.afx.mmc("topi");
        if (d) {
            d.vxc(e)
        }
        if (f) {
            f.vxc(e);
            f.ein(e)
        }
    };
    this.uux = function(g) {
        var e = (g && !this.qsy),
            f = this.afx.mmc("topb"),
            d = this.afx.mmc("topi");
        if (d) {
            d.vxc(e)
        }
        if (f) {
            f.vxc(e);
            f.ugz(e)
        }
    };
    this.mgn = function(g) {
        var e = (g && !this.qsy),
            f = this.afx.mmc("topb"),
            d = this.afx.mmc("topi");
        if (d) {
            d.vxc(e)
        }
        if (f) {
            f.vxc(e);
            f.rew(e)
        }
    };
    this.wlc = function() {
        var d = this.afx.mmc("topb");
        if (d && !d.dse()) {
            this.xbq.loh("panel_in");
            this.xbq.ruf("panel_in");
            d.dns()
        }
    };
    this.zfy = function(d) {
        var e = this.afx.mmc("topb");
        if (e && e.dse()) {
            this.xbq.loh("panel_out");
            this.xbq.ruf("panel_out");
            if (d) {
                e.kae = d
            }
            e.dwo()
        }
    };
    this.axw = function(f) {
        if (tvj.wxo.value21.e == false || this.bmf == true) {
            return f.toString()
        } else {
            var e = Number(f),
                d = 0;
            if (tvj.wxo.value21.m != 1) {
                e = f * tvj.wxo.value21.m;
                var g = tvj.wxo.value21.m.toString().indexOf(".");
                if (g > 0) {
                    d = tvj.wxo.value21.m.toString().length - (g + 1)
                }
            }
            e = e.toFixed(d).toString();
            e = this.cco(e, (d == 0) ? 0 : d + 1);
            return e
        }
    };
    this.gch = function(f) {
        if (tvj.wxo.value21.e == false || this.bmf == true) {
            return f.toString()
        } else {
            var e = Number(f),
                d = 0;
            if (tvj.wxo.value21.m != 1) {
                e = f * tvj.wxo.value21.m;
                var g = tvj.wxo.value21.m.toString().indexOf(".");
                if (g > 0) {
                    d = tvj.wxo.value21.m.toString().length - (g + 1)
                }
            }
            e = e.toFixed(d).toString();
            e = this.cco(e, (d == 0) ? 0 : d + 1);
            if (tvj.wxo.value21.s) {
                e = tvj.wxo.value21.s + " " + e
            }
            return e
        }
    };
    this.cco = function(k, j) {
        var e = "",
            g = "",
            f = "",
            d = [];
        k = k.toString();
        j = (j) ? j : 0;
        f = k.substring(k.length - j, k.length);
        g = k.substring(0, k.length - j);
        if (g.length < 4) {
            if (tvj.wxo.value21.cs != null) {
                k = k.replace(/\./, tvj.wxo.value21.cs)
            }
            return k.toString()
        } else {
            d[0] = g.substring(g.length - 3, g.length);
            for (var h = 1; h * 3 < g.length; h++) {
                d[h] = g.substring(g.length - (h + 1) * 3, g.length - h * 3)
            }
            for (var h = d.length - 1; h >= 0; h--) {
                e += d[h];
                if (h > 0) {
                    if (tvj.wxo.value21.ts != null) {
                        e += tvj.wxo.value21.ts
                    }
                }
            }
            if (tvj.wxo.value21.cs != null) {
                f = f.replace(/\./, tvj.wxo.value21.cs)
            }
            return e + f
        }
    };
    this.gox = function(f) {
        if (tvj.wxo.value76.f == false || this.bmf == true) {
            return f.toString()
        } else {
            var e = Number(f),
                d = 0;
            if (tvj.wxo.value76.m != 1) {
                e = f * tvj.wxo.value76.m;
                var g = tvj.wxo.value76.m.toString().indexOf(".");
                if (g > 0) {
                    d = tvj.wxo.value76.m.toString().length - (g + 1)
                }
            }
            e = e.toFixed(d).toString();
            e = this.ckn(e, (d == 0) ? 0 : d + 1);
            return e
        }
    };
    this.aqx = function(f) {
        if (tvj.wxo.value76.f == false || this.bmf == true) {
            return f.toString()
        } else {
            var e = Number(f),
                d = 0;
            if (tvj.wxo.value76.m != 1) {
                e = f * tvj.wxo.value76.m;
                var g = tvj.wxo.value76.m.toString().indexOf(".");
                if (g > 0) {
                    d = tvj.wxo.value76.m.toString().length - (g + 1)
                }
            }
            e = e.toFixed(d).toString();
            e = this.ckn(e, (d == 0) ? 0 : d + 1);
            if (tvj.wxo.value76.s) {
                e = tvj.wxo.value76.s + " " + e
            }
            return e
        }
    };
    this.ckn = function(k, j) {
        var e = "",
            g = "",
            f = "",
            d = [];
        k = k.toString();
        j = (j) ? j : 0;
        f = k.substring(k.length - j, k.length);
        g = k.substring(0, k.length - j);
        if (g.length < 4) {
            if (tvj.wxo.value76.cs != null) {
                k = k.replace(/\./, tvj.wxo.value76.cs)
            }
            return k.toString()
        } else {
            d[0] = g.substring(g.length - 3, g.length);
            for (var h = 1; h * 3 < g.length; h++) {
                d[h] = g.substring(g.length - (h + 1) * 3, g.length - h * 3)
            }
            for (var h = d.length - 1; h >= 0; h--) {
                e += d[h];
                if (h > 0) {
                    if (tvj.wxo.value76.ts != null) {
                        e += tvj.wxo.value76.ts
                    }
                }
            }
            if (tvj.wxo.value76.cs != null) {
                f = f.replace(/\./, tvj.wxo.value76.cs)
            }
            return e + f
        }
    };
    this.mgp = function() {
        for (var e = 0, d = this.vdt.doy.ifj.length; e < d; e++) {
            this.afx.zxg(this.vdt.doy.ifj[e].kpr, this.cxj(this.vdt.doy.ifj[e], this.hue.idd.mom[e], this.hue.idd.display, this.style.idd.jdg[e], null), ["jackpots"])
        }
        this.afx.zxg("jwp", this.cxj(null, this.hue.idd.nib.mom, this.hue.idd.nib, this.style.idd.nib, this.xbq.ire("jackpot")));
        this.afx.tew("jwp", "#tzp", [false])
    };
    this.rmg = function() {
        var e = this.afx.lkr("jackpots"),
            f = this.afx.mmc("jwp");
        for (var g = 0, d = e.length; g < d; g++) {
            e[g].gae(this.hue.idd.mom[g]);
            e[g].sqc(this.hue.idd.display)
        }
        if (f) {
            f.gae(this.hue.idd.nib.mom);
            f.sqc(this.hue.idd.nib)
        }
    };
    this.cxj = function(f, j, h, g, d) {
        var e = new edk();
        e.xpk(j, null, this.context2D);
        e.parent = this;
        e.ifr = d;
        e.gmo(g);
        e.sqc(h);
        if (f) {
            e.cvm(f.szr);
            e.yeu(f.value)
        }
        return e
    };
    this.vho = function(f) {
        if (this.okx() === true) {
            for (var e = 0, d = f.length; e < d; e++) {
                this.afx.tew(f[e].kpr, "#yeu", [f[e].value])
            }
            this.mdb()
        }
    };
    this.rpp = function(d) {
        if (this.okx() === true) {
            this.idd = {
                kpr: d.kpr,
                value: d.value,
                bex: d.bex
            }
        }
    };
    this.qoh = function() {
        this.idd = null
    };
    this.egj = function() {
        return false
    };
    this.okx = function() {
        return (!this.uli && this.vdt.doy.ifj.length > 0 && this.egj())
    };
    this.yaz = function() {
        return (this.idd != null)
    }
}

function vxq() {
    this.xpk = function() {
        this.iyd("btn", this.tzh);
        this.iyd("gamble_on", this.tzh);
        this.iyd("gamble_off", this.tzh);
        this.iyd("panel_in", this.tzh);
        this.iyd("panel_out", this.tzh);
        this.iyd("audioon", this.tzh);
        for (var a = 0; a < 12; a++) {
            this.iyd("step" + a, this.tzh)
        }
        this.iyd("maxstep", this.tzh);
        this.iyd("start", 0.2);
        this.iyd("gambleprop", this.wzi);
        this.iyd("freespinstart", 0.5)
    }
}
vxq.prototype = new zab;

function ijn() {
    this.rpn = {
        woo: 84,
        huo: -1,
        value: "T",
        osb: null
    };
    this.mlp = {
        woo: 82,
        huo: -1,
        value: "R",
        osb: null
    };
    this.chk = {
        woo: 80,
        huo: -1,
        value: "P",
        osb: null
    };
    this.moe = {
        woo: 77,
        huo: -1,
        value: "M",
        osb: null
    };
    this.start = {
        woo: 32,
        huo: -1,
        value: "SPACE",
        osb: null
    };
    this.qsy = {
        woo: 16,
        huo: -1,
        value: "SHIFT",
        osb: null
    };
    this.wtg = {
        woo: 38,
        huo: -1,
        value: "\u25B2",
        osb: null
    };
    this.fzt = {
        woo: 40,
        huo: -1,
        value: "\u25BC",
        osb: null
    };
    this.tly = {
        woo: 39,
        huo: -1,
        value: "\u25B6",
        osb: null
    };
    this.hnr = {
        woo: 37,
        huo: -1,
        value: "\u25C0",
        osb: null
    };
    this.fzw = {
        woo: 71,
        huo: -1,
        value: "G",
        osb: null
    };
    this.vja = {
        woo: 27,
        huo: -1,
        value: "ESC",
        osb: null
    };
    this.language = {
        woo: 76,
        huo: -1,
        value: "L",
        osb: null
    };
    this.fcw = {
        woo: 13,
        huo: -1,
        value: "ENTER",
        osb: null
    };
    this.wuz = {
        woo: 27,
        huo: -1,
        value: "ESC",
        osb: null
    };
    this.med = {
        woo: 39,
        huo: -1,
        value: "\u25B6",
        osb: null
    };
    this.uam = {
        woo: 37,
        huo: -1,
        value: "\u25C0",
        osb: null
    };
    this.qes = {
        woo: 27,
        huo: -1,
        value: "ESC",
        osb: null
    };
    this.brl = {
        woo: 32,
        huo: -1,
        value: "SPACE",
        osb: null
    };
    this.ruc = {
        woo: 8,
        huo: -1,
        value: "BACKSPACE",
        osb: null
    };
    this.qap = {
        woo: 82,
        huo: -1,
        value: "R",
        osb: null
    };
    this.ccv = {
        woo: 66,
        huo: -1,
        value: "B",
        osb: null
    };
    this.eis = {
        woo: 72,
        huo: -1,
        value: "H",
        osb: null
    };
    this.jxh = {
        woo: 68,
        huo: -1,
        value: "D",
        osb: null
    };
    this.qhf = {
        woo: 83,
        huo: -1,
        value: "S",
        osb: null
    };
    this.suk = {
        woo: 67,
        huo: -1,
        value: "C",
        osb: null
    };
    this.osc.push(this.rpn);
    this.osc.push(this.chk);
    this.osc.push(this.start);
    this.osc.push(this.qsy);
    this.osc.push(this.wtg);
    this.osc.push(this.fzt);
    this.osc.push(this.tly);
    this.osc.push(this.hnr);
    this.osc.push(this.fzw);
    this.osc.push(this.vja);
    this.osc.push(this.language)
}
ijn.prototype = new djy;

function vnq() {
    this.cau = new Image();
    this.wmg = 0;
    this.zvc = 0;
    this.eqs = 0;
    this.xpk = function(c, a, b, d) {
        this.cau = c;
        this.zvc = b;
        this.wmg = a;
        this.eqs = d;
        return this
    }
}

function wsa() {
    this.asx = 0;
    this.zxc = 0;
    this.qio = 0;
    this.qaz = "sans-serif";
    this.hie = "bold";
    this.pwl = null;
    this.uhb = null;
    this.edr = null;
    this.ggg = null;
    this.are = 16;
    this.cse = 0;
    this.rpw = 0;
    this.qtj = 2;
    this.trk = 3;
    this.rln = 3;
    this.eoa = 3;
    this.uko = 3;
    this.sqc = function(a) {
        try {
            this.are = a.eyf;
            this.cse = a.wul;
            this.rpw = a.qhj;
            this.qtj = a.ioh;
            this.trk = a.xpe;
            this.rln = a.ywn;
            this.eoa = a.kuh;
            this.uko = a.ujb
        } catch (b) {
            console.error(b)
        }
    };
    this.gmo = function(a) {
        try {
            this.qaz = a.font;
            this.hie = a.rxk;
            this.pwl = a.riz;
            this.uhb = a.fsc;
            this.edr = a.fnk;
            this.ggg = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.svt = function(a, c, b, d) {
        this.asx = a;
        this.zxc = c;
        this.qio = b;
        if (d && d === true && this.context2D != null && this.dse() === true) {
            this.parent.mdb(this.x, this.y, this.width, this.height)
        }
    };
    this.xua = function(a, b) {
        this.qio = a;
        if (b && b === true && this.context2D != null && this.dse() === true) {
            this.parent.mdb(this.x, this.y, this.width, this.height)
        }
    };
    this.mdb = function() {
        if (!this.dse()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.edr) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.uhb);
            b.addColorStop(1, this.edr);
            tvj.slh.dsq(a, this.x, this.y, this.width, this.height, this.trk, this.rln, this.eoa, this.uko, this.ggg, 1, b, this.qtj, 1)
        } else {
            tvj.slh.dsq(a, this.x, this.y, this.width, this.height, this.trk, this.rln, this.eoa, this.uko, this.ggg, 1, this.uhb, this.qtj, 1)
        }
        tvj.slh.iuq(a, tvj.cdg.language.kxm + ":", this.pwl, this.x + this.qtj + this.cse, this.y + this.rpw, 2 * this.width / 3 - this.qtj, this.height / 2, this.qaz, this.are, this.hie, 0);
        tvj.slh.iuq(a, tvj.cdg.language.trq + ":", this.pwl, this.x + this.qtj + this.cse, this.y + this.height / 2 + this.rpw, 2 * this.width / 3 - this.qtj, this.height / 2, this.qaz, this.are, this.hie, 0);
        tvj.slh.wpo(a, this.zxc + " " + tvj.cdg.language.of + " " + this.asx, this.pwl, this.x + this.qtj + 2 * this.width / 3, this.y + this.rpw, this.width / 3 - this.qtj - this.cse, this.height / 2, this.qaz, this.are, this.hie, 0);
        tvj.slh.wpo(a, this.qio, this.pwl, this.x + this.qtj + 2 * this.width / 3, this.y + this.height / 2 + this.rpw, this.width / 3 - this.qtj - this.cse, this.height / 2, this.qaz, this.are, this.hie, 0);
        a.restore();
        if (this.uek && this.gvg) {
            this.uek.drawImage(this.gvg, this.x, this.y)
        }
    }
}
wsa.prototype = new kpu;

function drg() {
    var a = this;
    this.awx = false;
    this.zcr = null;
    this.unn = false;
    this.bno = -1;
    this.unz = 0;
    this.hti = null;
    this.jtk = 800;
    this.yoe = 0;
    this.ggg = null;
    this.tvd = null;
    this.ivt = null;
    this.vun = 0;
    this.cpj = null;
    this.tef = null;
    this.jpt = null;
    this.diz = null;
    this.pjz = 0;
    this.wkf = 0;
    this.dbi = new mfo();
    this.aor = new mfo();
    this.lsi = 30;
    this.xpk = function(b, d, c) {
        drg.prototype.xpk.call(this, b, d, c);
        this.kid()
    };
    this.zfl = function(c, b) {
        try {
            this.lsi = c.smr;
            this.dbi = c.atu;
            this.aor = c.gxp;
            this.tuz(c);
            this.egp(c);
            this.rwy(c);
            this.jqg(c);
            this.dan(c);
            this.gmo(b, false)
        } catch (d) {
            console.error(d)
        }
    };
    this.sqc = function(g, p) {
        try {
            var d = {},
                c = this.zcr.mmc("info"),
                j = this.zcr.mmc("win"),
                q = this.zcr.mmc("creditd"),
                n = this.zcr.mmc("betd"),
                m = this.zcr.mmc("idd"),
                o = this.zcr.mmc("timed"),
                b = this.zcr.mmc("freeround"),
                l = this.zcr.lkr("buttons");
            if (p) {
                if (this.parent.gln() != null) {
                    d = g.uje
                } else {
                    d = g.gup
                }
            } else {
                if (this.parent.gln() != null) {
                    if (!this.parent.ccd()) {
                        d = g.fnb
                    } else {
                        d = g.eck
                    }
                } else {
                    if (tvj.wxo.value57 === tvj.ui.owg || this.yyr()) {
                        if (!this.parent.ccd()) {
                            d = g.kmk
                        } else {
                            d = g.isa
                        }
                    } else {
                        if (tvj.wxo.value57 === tvj.ui.uvn) {
                            if (!this.parent.ccd()) {
                                d = g.smw
                            } else {
                                d = g.swb
                            }
                        } else {
                            if (tvj.wxo.value57 === tvj.ui.gmi) {
                                if (!this.parent.ccd()) {
                                    d = g.zob
                                } else {
                                    d = g.ujd
                                }
                            }
                        }
                    }
                }
            }
            this.lsi = g.smr;
            this.dbi = g.atu;
            this.aor = g.gxp;
            if (q) {
                q.sqc(g.display);
                q.gae(g.aic)
            }
            if (n) {
                n.sqc(g.display);
                n.gae(g.alm)
            }
            if (m) {
                m.sqc(g.hek);
                m.gae(g.yal)
            }
            if (o) {
                o.sqc(g.hek);
                o.gae(g.vqo)
            }
            if (c) {
                c.sqc(g.uso);
                c.gae(g.uso.mom)
            }
            if (j) {
                j.sqc(g.qio);
                j.gae(g.qio.mom)
            }
            if (b) {
                b.sqc(g.exm);
                b.gae(g.exm.mom)
            }
            for (var f = 0, h = l.length; f < h; f++) {
                if (l[f] instanceof dto) {
                    l[f].sqc(g.gjw)
                }
            }
            if (this.parent.gln() != null) {
                this.zcr.tew("astart", "#sqc", [g.cyi]);
                if (this.parent.ojz() === true) {
                    this.zcr.tew("start", "#sqc", [g.cyi])
                } else {
                    this.zcr.tew("start", "#sqc", [g.xgy])
                }
            } else {
                this.zcr.tew("start", "#sqc", [g.xgy]);
                if (tvj.wxo.value57 === tvj.ui.owg || this.yyr()) {
                    this.zcr.tew("astart", "#sqc", [g.xgy])
                }
            }
            if (p) {
                this.zcr.tew("start", "#gae", [d.yup]);
                this.zcr.tew("astart", "#gae", [d.ofx]);
                this.zcr.tew("setting", "#gae", [d.gai])
            } else {
                this.zcr.tew("start", "#gae", [d.yup]);
                this.zcr.tew("astart", "#gae", [d.ofx]);
                this.zcr.tew("bet", "#gae", [d.qgw]);
                this.zcr.tew("gamble", "#gae", [d.kqn]);
                this.zcr.tew("exit", "#gae", [d.nti]);
                this.zcr.tew("lang", "#gae", [d.tty]);
                this.zcr.tew("line", "#gae", [d.fok]);
                this.zcr.tew("setting", "#gae", [d.gai])
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.gmo = function(b, p) {
        try {
            var d = this.zcr.mmc("info"),
                k = this.zcr.mmc("win"),
                c = this.zcr.mmc("freeround"),
                h = this.zcr.lkr("displays"),
                n = this.zcr.mmc("idd"),
                o = this.zcr.mmc("timed"),
                m = this.zcr.lkr("buttons"),
                g = (p === true) ? b.jpc : b.smu;
            this.ggg = g.backgroundColor;
            this.tvd = g.gia;
            this.ivt = g.gmz;
            this.vun = g.ddw;
            this.tef = g.soi;
            this.jpt = g.gsn;
            if (d) {
                d.gmo(g.uso)
            }
            if (k) {
                k.gmo(g.qio)
            }
            if (c) {
                c.gmo(b.exm)
            }
            for (var f = 0, j = m.length; f < j; f++) {
                m[f].gmo((this.parent.hue.abu === false) ? g.grh : (this.parent.jgb === tvj.hue.jif) ? g.soz : g.mlc)
            }
            for (var f = 0, j = h.length; f < j; f++) {
                h[f].gmo(b.display)
            }
            if (n) {
                n.gmo(b.hek)
            }
            if (o) {
                o.gmo(b.hek)
            }
            if (this.parent.ojz() === true) {
                this.zcr.tew("bet", "#gmo", [b.fmf])
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.nyv = function(s, r, t) {
        var q = this.zcr.lkr("buttons"),
            f = this.zcr.mmc("line"),
            g = this.zcr.mmc("bet"),
            c = this.zcr.mmc("start"),
            o = this.zcr.mmc("betd"),
            e = this.zcr.mmc("creditd"),
            b = this.parent.afx.mmc("betsel"),
            d = this.parent.afx.mmc("linesel"),
            n = s - this.x,
            l = r - this.y;
        for (var m = 0, p = q.length; m < p; m++) {
            var h = q[m];
            if (n >= h.x && n <= h.x + h.width && l >= h.y && l <= h.y + h.height && h.dse() == true) {
                if (h.skl() && !h.oax()) {
                    if (h === g || h === f) {
                        h.vdy(true, true, false);
                        for (var k = 0; k < p; k++) {
                            q[k].che(true, false)
                        }
                        h.kgs();
                        this.hti = function() {
                            if (h.kgs() === true) {
                                clearInterval(a.unz);
                                h.vdy(false, true);
                                for (var u = 0; u < p; u++) {
                                    q[u].che(false)
                                }
                            }
                        };
                        this.unz = setInterval(this.hti, h.oqi)
                    } else {
                        if (h === c && c.kgs === this.qka) {
                            h.vdy(true, true, false)
                        } else {
                            h.vdy(true, true)
                        }
                        h.kgs();
                        for (var k = 0; k < p; k++) {
                            q[k].che(true)
                        }
                    }
                    return true
                }
            }
        }
        if (g && g.skl() && !g.oax() && g.dse()) {
            if (o && n >= o.x && n <= o.x + o.width && l >= o.y && l <= o.y + o.height) {
                if (!t) {
                    if ((b && b.skl()) && ((d && d.skl()) || !d)) {
                        this.parent.rkd()
                    }
                    return true
                }
            } else {
                if (e && n >= e.x && n <= e.x + e.width && l >= e.y && l <= e.y + e.height) {
                    if (!t) {
                        this.parent.ewj()
                    }
                    return true
                }
            }
        }
        return false
    };
    this.hxa = function() {
        var f = this.zcr.lkr("buttons"),
            h = this.zcr.mmc("bet"),
            k = this.zcr.mmc("line"),
            g = this.zcr.mmc("start");
        for (var d = 0, b = f.length; d < b; d++) {
            var e = f[d];
            if (e.tmr() === true) {
                e.vdy(false, true);
                if (e === h || e === k) {
                    clearInterval(this.unz);
                    for (var c = 0; c < b; c++) {
                        f[c].che(false)
                    }
                } else {
                    if (e === g && g.kgs === this.qka) {
                        clearTimeout(this.yoe);
                        if (this.parent.qsy === false) {
                            this.parent.xbq.loh("auto_fill");
                            this.zcr.tew("start", "#qum")
                        }
                    }
                }
                return true
            }
        }
        return false
    };
    this.qgb = function(g) {
        var f = this.zcr.lkr("buttons"),
            h = this.zcr.mmc("bet"),
            k = this.zcr.mmc("line");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (g == d.wyv) {
                if (d.skl() && !d.oax() && d.dse()) {
                    d.vdy(true, true);
                    d.kgs();
                    for (var c = 0; c < b; c++) {
                        f[c].che(true)
                    }
                }
                return true
            }
        }
        if (g == this.parent.ayv.fzt.woo) {
            if (h && h.skl() && !h.oax() && h.dse()) {
                this.parent.afn();
                for (var c = 0, b = f.length; c < b; c++) {
                    f[c].che(true)
                }
            }
            return true
        } else {
            if (g == this.parent.ayv.hnr.woo) {
                if (k && k.skl() && !k.oax() && k.dse()) {
                    this.parent.alr();
                    for (var c = 0, b = f.length; c < b; c++) {
                        f[c].che(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.zct = function() {
        var e = this.zcr.lkr("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.tmr() == true) {
                c.vdy(false, true);
                return true
            }
        }
        return false
    };
    this.uwe = function(l, k, m) {
        var j = this.zcr.lkr("buttons"),
            d = this.zcr.mmc("bet"),
            c = this.zcr.mmc("line");
        if (l != null && k != null) {
            var g = l - this.x;
            var e = k - this.y;
            for (var f = 0, h = j.length; f < h; f++) {
                var b = j[f];
                if (g >= b.x && g <= b.x + b.width && e >= b.y && e <= b.y + b.height && b.dse() && b.skl() && !b.oax()) {
                    return b.kgs
                }
            }
        } else {
            if (m != null) {
                for (var f = 0, h = j.length; f < h; f++) {
                    var b = j[f];
                    if (m == b.wyv && b.dse() && b.skl() && !b.oax()) {
                        return b.kgs
                    }
                }
                if (m == this.parent.ayv.fzt.woo && d && d.dse() && d.skl() && !d.oax()) {
                    return this.parent.afn
                } else {
                    if (m == this.parent.ayv.hnr.woo && c && c.dse() && c.skl() && !c.oax()) {
                        return this.parent.alr
                    }
                }
            }
        }
        return null
    };
    this.kid = function() {
        this.zcr = new lts();
        this.zcr.xpk();
        this.zcr.yhs("displays");
        this.zcr.yhs("buttons");
        this.zcr.yhs("allbuttons");
        this.zcr.yhs("infos");
        this.zcr.yhs("start");
        this.zcr.yhs("collect");
        this.zcr.yhs("freespin");
        this.zcr.yhs("game");
        this.zcr.yhs("settings")
    };
    this.dan = function(b) {
        var c = this.hhf(b.uso.mom);
        c.sqc(b.uso);
        this.zcr.zxg("info", c, ["infos"])
    };
    this.jqg = function(b) {
        var c = this.hhf(b.qio.mom);
        c.font = this.parent.zwy;
        c.ifr = this.parent.xbq.ire("s_symb");
        c.pqq = this.parent.xbq.ire("s_symb").height / this.parent.cgs.length;
        c.sqc(b.qio);
        this.zcr.zxg("win", c, ["infos"])
    };
    this.rwy = function(b) {
        var c = new wsa();
        c.xpk(b.exm.mom, this.context2D, null);
        c.parent = this;
        c.sqc(b.exm);
        c.tzp(false);
        this.zcr.zxg("freeround", c)
    };
    this.tuz = function(c) {
        var b = {};
        if (this.parent.gln() != null) {
            if (!this.parent.ccd()) {
                b = c.fnb
            } else {
                b = c.eck
            }
        } else {
            if (tvj.wxo.value57 === tvj.ui.owg || this.yyr()) {
                if (!this.parent.ccd()) {
                    b = c.kmk
                } else {
                    b = c.isa
                }
            } else {
                if (tvj.wxo.value57 === tvj.ui.uvn) {
                    if (!this.parent.ccd()) {
                        b = c.smw
                    } else {
                        b = c.swb
                    }
                } else {
                    if (tvj.wxo.value57 === tvj.ui.gmi) {
                        if (!this.parent.ccd()) {
                            b = c.zob
                        } else {
                            b = c.ujd
                        }
                    }
                }
            }
        }
        if (this.parent.gln() != null) {
            this.zcr.zxg("astart", this.vfj(b.ofx, this.parent.language.pbd, "---", this.parent.xbq.ire("btn"), null, this.parent.vnf, (!this.parent.uli) ? this.parent.ayv.qsy : null, c.cyi), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
            if (this.parent.ojz() === true) {
                this.zcr.zxg("start", this.vfj(b.yup, (this.parent.hue.smb === false) ? this.parent.language.start : null, "---", (this.parent.hue.smb === false) ? this.parent.xbq.ire("btn") : this.parent.xbq.ire("btn_sp"), null, (this.parent.ojz() === true) ? this.qka : this.parent.tud, (!this.parent.uli) ? this.parent.ayv.start : null, c.cyi), ["buttons", "allbuttons", "start", "collect", "freespin", "game"])
            } else {
                this.zcr.zxg("start", this.hsz(b.yup, (this.parent.hue.smb === false) ? this.parent.language.start : null, (this.parent.hue.smb === false) ? this.parent.xbq.ire("btn") : this.parent.xbq.ire("btn_sp"), null, (this.parent.ojz() === true) ? this.qka : this.parent.tud, (!this.parent.uli) ? this.parent.ayv.start : null, c.xgy), ["buttons", "allbuttons", "start", "collect", "freespin", "game"])
            }
        } else {
            this.zcr.zxg("start", this.hsz(b.yup, (this.parent.hue.smb === false) ? this.parent.language.start : null, (this.parent.hue.smb === false) ? this.parent.xbq.ire("btn") : this.parent.xbq.ire("btn_asp"), (this.parent.hue.smb === false) ? null : this.parent.xbq.ire("btn_asph"), (this.parent.ojz() === true) ? this.qka : this.parent.tud, (!this.parent.uli) ? this.parent.ayv.start : null, c.xgy), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
            this.zcr.zxg("astart", this.hsz(b.ofx, this.parent.language.qsy, (tvj.wxo.value57 === tvj.ui.owg || this.yyr()) ? this.parent.xbq.ire("btn") : this.parent.xbq.ire("btn_s"), null, this.parent.vnf, (!this.parent.uli) ? this.parent.ayv.qsy : null, c.gjw), ["buttons", "allbuttons", "start", "collect", "freespin", "game"])
        }
        if (this.parent.ojz() === true) {
            this.zcr.zxg("bet", this.oqz(b.qgw, "+", null, this.parent.vpk, (!this.parent.uli) ? this.parent.ayv.wtg : null, c.yjd), ["buttons", "allbuttons"])
        } else {
            this.zcr.zxg("bet", this.hsz(b.qgw, this.parent.language.rul, this.parent.xbq.ire("btn_s"), null, this.parent.vpk, (!this.parent.uli) ? this.parent.ayv.wtg : null, c.gjw), ["buttons", "allbuttons"])
        }
        this.zcr.mmc("bet").oqi = 300;
        this.zcr.zxg("gamble", this.hsz(b.kqn, this.parent.language.fzw, this.parent.xbq.ire("btn_s"), null, this.parent.qch, (!this.parent.uli) ? this.parent.ayv.fzw : null, c.gjw), ["buttons", "allbuttons", "game", "collect"]);
        if (this.parent.gln() != null) {
            this.zcr.zxg("exit", this.hsz(b.nti, (this.parent.hue.smb === true) ? null : (tvj.wxo.value50.g === true) ? this.parent.language.mxq : this.parent.language.wjr, (this.parent.hue.smb === false) ? this.parent.xbq.ire("btn_s") : this.parent.xbq.ire("btn_e"), null, this.parent.trv, (!this.parent.uli) ? this.parent.ayv.vja : null, c.gjw), ["buttons", "allbuttons", "collect"])
        } else {
            if (tvj.wxo.value57 !== tvj.ui.gmi) {
                this.zcr.zxg("exit", this.hsz(b.nti, (this.parent.hue.smb === true) ? null : (tvj.wxo.value50.g === true) ? this.parent.language.mxq : this.parent.language.wjr, (this.parent.hue.smb === false) ? this.parent.xbq.ire("btn_s") : this.parent.xbq.ire("btn_e"), null, this.parent.trv, (!this.parent.uli) ? this.parent.ayv.vja : null, c.gjw), ["buttons", "allbuttons", "collect"])
            }
            if (tvj.wxo.value57 !== tvj.ui.owg && !this.yyr() && this.parent.gln() == null) {
                this.zcr.zxg("lang", this.zaj(b.tty, this.parent.wqp(sessionStorage.sessionValue1), this.parent.ekh, (!this.parent.uli) ? this.parent.ayv.language : null), ["buttons", "allbuttons"])
            }
        }
        if (this.parent.ccd()) {
            this.zcr.zxg("line", this.hsz(b.fok, this.parent.language.tss, this.parent.xbq.ire("btn_s"), null, this.parent.cuq, (!this.parent.uli) ? this.parent.ayv.tly : null, c.gjw), ["buttons", "allbuttons"]);
            this.zcr.mmc("line").oqi = 300
        }
        this.zcr.zxg("setting", this.hsz(b.gai, null, this.parent.xbq.ire("btn_m"), null, this.parent.lrx, null, c.gjw), ["buttons", "settings"])
    };
    this.egp = function(c) {
        var b = null;
        if (!(this.parent.uli && this.parent.okj) && this.parent.style.cdg.dxd === false) {
            b = this.parent.xbq.ire("display_effect")
        }
        this.zcr.zxg("creditd", this.hqn(c.aic, (this.parent.nwk()) ? this.parent.language.ide : this.parent.language.bex, this.parent.gch(this.parent.bex), b, c.display), ["displays"]);
        this.zcr.zxg("betd", this.hqn(c.alm, this.parent.language.rul, this.parent.gch(this.parent.zjo), b, c.display), ["displays"]);
        this.zcr.zxg("idd", this.hqn(c.yal, null, (this.parent.nwk() === true) ? this.parent.language.ide : "" + ((this.parent.kda > 0) ? this.parent.kda : ""), null, c.hek), ["displays"]);
        if (tvj.wxo.value11 || tvj.wxo.value49) {
            this.zcr.zxg("timed", this.hqn(c.vqo, null, "", null, c.hek), ["displays"])
        }
    };
    this.vtx = function() {
        if (this.bno == 1) {
            this.ein(this.unn)
        } else {
            if (this.bno == 2) {
                this.xqu(this.unn)
            } else {
                if (this.bno == 3) {
                    this.khm(this.unn)
                } else {
                    if (this.bno == 4) {
                        this.oia(this.unn)
                    } else {
                        if (this.bno == 5) {
                            this.xmn(this.unn)
                        } else {
                            if (this.bno == 6) {
                                this.rew(this.unn)
                            }
                        }
                    }
                }
            }
        }
    };
    this.ein = function(d) {
        var c = this.zcr.lkr("allbuttons"),
            e = 0,
            b = 0;
        this.unn = d;
        this.bno = 1;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].vxc(d)
        }
    };
    this.xqu = function(d) {
        var c = this.zcr.lkr("allbuttons"),
            f = this.zcr.lkr("start"),
            e = 0,
            b = 0;
        this.unn = d;
        this.bno = 2;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].vxc(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].vxc(d)
        }
    };
    this.khm = function(d) {
        var c = this.zcr.lkr("allbuttons"),
            f = this.zcr.lkr("game"),
            e = 0,
            b = 0;
        this.unn = d;
        this.bno = 3;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].vxc(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].vxc(d)
        }
    };
    this.oia = function(d) {
        var c = this.zcr.lkr("allbuttons"),
            f = (this.awx === true) ? this.zcr.lkr("collect") : this.zcr.lkr("game"),
            e = 0,
            b = 0;
        this.unn = d;
        this.bno = 4;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].vxc(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].vxc(d)
        }
    };
    this.xmn = function(c) {
        var b = this.zcr.lkr("allbuttons"),
            d = this.zcr.lkr("freespin");
        i = 0, khf = 0;
        this.unn = c;
        this.bno = 5;
        for (i = 0, khf = b.length; i < khf; i++) {
            b[i].vxc(false)
        }
        for (i = 0, khf = d.length; i < khf; i++) {
            d[i].vxc(c)
        }
    };
    this.rew = function(e) {
        var c = this.zcr.lkr("allbuttons"),
            d = this.zcr.lkr("settings"),
            f = 0,
            b = 0;
        this.unn = e;
        this.bno = 6;
        for (f = 0, b = c.length; f < b; f++) {
            c[f].vxc(false)
        }
        for (f = 0, b = d.length; f < b; f++) {
            d[f].vxc(e)
        }
    };
    this.hqn = function(c, g, f, e, b) {
        var d = new eno();
        d.xpk(c, this.context2D, null, g, f);
        d.parent = this;
        d.ifr = e;
        d.sqc(b);
        return d
    };
    this.hsz = function(f, j, h, b, g, d, e) {
        var c = new dto();
        c.xpk(f, this.context2D, null, h, b, j);
        c.parent = this;
        c.kgs = g;
        c.sqc(e);
        if (d) {
            c.wyv = d.woo
        }
        return c
    };
    this.vfj = function(f, j, g, b, k, c, h, e) {
        var d = new dto();
        d.xpk(f, this.context2D, null, b, k, j);
        d.parent = this;
        d.kgs = c;
        d.value = g;
        d.sqc(e);
        if (h) {
            d.wyv = h.woo
        }
        return d
    };
    this.oqz = function(e, h, g, f, c, d) {
        var b = new jki();
        b.xpk(e, this.context2D, null, g, h);
        b.parent = this;
        b.kgs = f;
        b.sqc(d);
        if (c) {
            b.wyv = c.woo
        }
        return b
    };
    this.zaj = function(d, f, e, c) {
        var b = new oqn();
        b.xpk(d, this.context2D, null, f, null);
        b.parent = this;
        b.kgs = e;
        if (c) {
            b.wyv = c.woo
        }
        return b
    };
    this.hhf = function(b) {
        var c = new idy();
        c.xpk(b, this.context2D);
        c.parent = this;
        return c
    };
    this.yyr = function() {
        return (this.parent.nto > 0 && this.parent.wao < this.parent.nto)
    };
    this.prs = function(c, b) {
        var d = this.zcr.mmc("info");
        if (d) {
            d.bxf(b);
            d.lpl(c, b)
        }
    };
    this.stop = function() {
        clearInterval(this.unz)
    };
    this.jlk = function(b, c, d) {
        this.diz = b;
        this.pjz = c;
        this.wkf = d
    };
    this.mdb = function(m, j, n, f) {
        if (!this.dse() || !this.parent.kez()) {
            return
        }
        var c = (m != null && j != null && n != null && f != null),
            k = (c === true) ? new mfo(m, j, n, f) : new mfo(this.x, this.y, this.width, this.height),
            o = this.context2D,
            b = this.zcr.kub();
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
        if (this.diz != null) {
            if (this.parent.jgb === tvj.hue.qic) {
                o.drawImage(this.diz, this.x + this.dbi.x + this.pjz, this.y + this.dbi.y + this.wkf, this.dbi.width, this.diz.height - (this.y + this.dbi.y + this.wkf), this.dbi.x, this.dbi.y, this.dbi.width, this.dbi.height)
            } else {
                o.drawImage(this.diz, this.x + this.dbi.x + this.pjz, this.y + this.dbi.y + this.wkf, this.dbi.width, this.dbi.height, this.dbi.x, this.dbi.y, this.dbi.width, this.dbi.height)
            }
            if (this.aor && this.aor.width > 0 && this.aor.height > 0) {
                o.drawImage(this.diz, this.x + this.aor.x + this.pjz, this.y + this.aor.y + this.wkf, this.aor.width, this.aor.height, this.aor.x, this.aor.y, this.aor.width, this.aor.height)
            }
        }
        if (this.aor && this.aor.width > 0 && this.aor.height > 0 && this.parent.hue.abu === false) {
            var l = o.createLinearGradient(this.aor.x, this.aor.y, this.aor.x + this.aor.width, this.aor.y),
                e = this.parent.xbq.ire("btn_back");
            l.addColorStop(0.2, this.tef);
            l.addColorStop(1, this.jpt);
            o.fillStyle = l;
            if (this.parent.jgb === tvj.hue.jif) {
                o.fillRect(this.aor.x, this.aor.y, this.aor.width, this.aor.height);
                if (e) {
                    o.drawImage(e, this.aor.x, this.aor.y, this.aor.width, this.aor.height)
                }
            } else {
                if (this.parent.jgb === tvj.hue.vtc) {
                    o.save();
                    o.translate(this.aor.width / 2, this.aor.height / 2);
                    o.rotate(Math.PI);
                    o.translate(-this.aor.width / 2, -this.aor.height / 2);
                    o.fillRect(this.aor.x, this.aor.y, this.aor.width, this.aor.height);
                    if (e) {
                        o.drawImage(e, this.aor.x, this.aor.y, this.aor.width, this.aor.height)
                    }
                    o.restore()
                }
            }
        }
        for (var d = 0, g = b.length; d < g; d++) {
            b[d].mdb()
        }
        if (this.parent.gyw === true && !(this.parent.ojz() === true && this.parent.hue.abu === false)) {
            this.parent.jsj(o, k)
        }
        o.restore();
        if (this.uek && this.gvg) {
            if (c) {
                this.uek.drawImage(this.gvg, m, j, n, f, this.x + m, this.y + j, n, f)
            } else {
                this.uek.drawImage(this.gvg, this.x, this.y)
            }
        }
    };
    this.qka = function() {
        a.parent.tud();
        if (a.parent.nug() === true) {
            if (a.parent.qsy === true) {
                a.yoe = setTimeout(a.hjo, a.jtk / 2)
            } else {
                a.parent.xbq.ruf("auto_fill");
                a.zcr.tew("start", "#btm", [a.jtk]);
                a.yoe = setTimeout(a.hjo, a.jtk)
            }
        }
    };
    this.hjo = function() {
        a.parent.vnf();
        if (a.parent.qsy === true) {
            a.zcr.tew("start", "#rtv")
        } else {
            a.zcr.tew("start", "#qum")
        }
    }
}
drg.prototype = new kpu;

function vvm(e, b, a, c, d) {
    this.mom = {
        x: e.x || 0,
        y: e.y || 0
    };
    this.cau = b;
    this.wvw = 0;
    this.eqs = 21;
    this.nhh = a;
    this.srr = c || 0;
    this.fpy = d || 0;
    this.ojy = 100;
    this.qig = 96;
    this.wjx = function() {
        if (this.wvw < this.eqs) {
            this.wvw++
        }
        return (this.wvw >= this.eqs)
    };
    this.mdb = function() {
        a.drawImage(this.cau, this.wvw * this.ojy, 0, this.ojy, this.qig, this.mom.x, this.mom.y, this.srr, this.fpy)
    }
}

function zsg() {
    this.cvp = false;
    this.pqm = false;
    this.obs = false;
    this.gjz = [];
    this.sgx = [];
    this.jrb = [];
    this.eke = [];
    this.aum = [];
    this.opr = 89;
    this.mix = 400;
    this.zmx = 3;
    this.font = "arial";
    this.rxk = "bold";
    this.gsh = true;
    this.uhw = true;
    this.sam = null;
    this.eyy = false;
    this.buo = [];
    this.ebg = 0;
    this.mog = false;
    this.jza = false;
    this.nqe = 0;
    this.rmu = 0;
    this.jdn = false;
    this.noh = true;
    this.fze = false;
    this.dbl = false;
    this.eao = 0;
    this.ghh = 0;
    this.hrz = [];
    this.eyr = false;
    this.wde = 0;
    this.tsv = 0;
    this.wmw = 0;
    this.wts = -1;
    this.ckq = 0;
    this.hpk = 0;
    this.fha = true;
    this.ppg = null;
    this.uju = [];
    this.ndz = [];
    this.eac = null;
    this.uim = null;
    this.smo = 0;
    this.ttt = null;
    this.pbn = null;
    this.ngr = null;
    this.wmy = null;
    this.kbv = 0.05;
    this.jqs = 4;
    this.xnz = 5;
    this.qtj = 1;
    this.rde = 0;
    this.cbq = 0;
    this.are = 40;
    this.ymb = 12;
    this.sug = 5;
    this.nvn = 0;
    this.uds = 100;
    this.tsu = 96;
    this.diz = null;
    this.pjz = 0;
    this.wkf = 0;
    this.wtz = 0;
    this.lmo = new mfo();
    this.awr = [];
    this.fuw = 3;
    this.avv = 6;
    this.rlm = 0;
    this.xep = new mfo(0, 0, 920, 160);
    this.uit = [0, 515, 405];
    this.uuc = 40;
    this.vfv = new mfo(0, 165, 920, 160);
    this.ymg = [0, 330, 420];
    this.scw = 40;
    this.fqc = new mfo(0, 330, 920, 160);
    this.ylf = [0, 440, 415];
    this.guc = 20;
    this.eyk = function() {};
    this.lzd = function() {};
    this.bim = function() {};
    this.qyk = function() {};
    this.naw = function() {};
    this.ouv = function() {};
    this.sqc = function(a) {
        try {
            this.jqs = a.lineWidth;
            this.xnz = a.fmv;
            this.qtj = a.ioh;
            this.rde = a.uaa;
            this.cbq = a.pqq;
            this.are = a.eyf;
            this.ymb = a.occ;
            this.sug = a.tlp;
            this.uds = a.ufy;
            this.tsu = a.vwr
        } catch (b) {
            console.error(b)
        }
    };
    this.gmo = function(a) {
        try {
            this.ndz = a.tic;
            this.smo = a.omt;
            this.ttt = a.sui;
            this.pbn = a.lpa;
            this.ngr = a.tpn;
            this.wmy = a.aqz;
            this.kbv = a.sgi
        } catch (b) {
            console.error(b)
        }
    };
    this.dns = function() {
        this.obs = false;
        this.tzp(true)
    };
    this.dwo = function() {
        this.obs = false;
        this.tzp(false, true)
    };
    this.dpw = function() {
        return this.eyy
    };
    this.vmg = function(d, b) {
        if (d && b) {
            this.buo = b;
            this.ppg = [];
            for (var c = 0, a = d.length; c < a; c++) {
                this.ppg[c] = d[c]
            }
            if (this.uhw) {
                this.parent.xbq.loh("winline");
                this.parent.xbq.ruf("winline")
            }
        } else {
            this.ppg = null
        }
        this.eyy = false;
        this.fze = false;
        this.dbl = false;
        this.obs = true;
        this.tzp(true, true)
    };
    this.start = function() {
        this.eyy = true;
        this.fze = true;
        this.dbl = false;
        if (!this.mog) {
            this.wde = 0
        } else {
            if (this.wde >= this.wmw) {
                this.wde = 0
            }
        }
        this.noh = true;
        this.parent.ttm = false;
        this.jza = (this.parent.hkp >= (this.parent.aar - 1));
        if (this.mog && this.uhw) {
            if (!this.parent.uiu && this.parent.tdh) {
                this.parent.xbq.loh("winline");
                this.parent.xbq.ruf("winline")
            }
        }
        this.eyk()
    };
    this.stop = function() {
        this.eyy = false;
        this.fze = false;
        this.gjq();
        clearInterval(this.nqe);
        clearTimeout(this.rmu);
        clearTimeout(this.parent.ajf)
    };
    this.obk = function(d, c, a, f, h, e, b, g) {
        if (this.obs) {
            this.obs = false;
            this.parent.mdb()
        }
        this.wts = f;
        this.ebg = d;
        this.buo = c;
        this.hpk = h;
        this.ckq = e;
        this.fha = a;
        this.mog = g;
        if (b) {
            this.atf()
        } else {
            this.atr()
        }
    };
    this.atf = function() {
        this.eum();
        this.start()
    };
    this.atr = function() {
        this.eyy = true;
        this.fze = true;
        this.noh = false;
        this.dbl = this.gsh;
        this.gjq();
        if (!this.parent.uiu && this.uhw) {
            this.parent.xbq.loh("winline");
            this.parent.xbq.ruf("winline")
        }
        this.mdb();
        this.bim()
    };
    this.nrg = function() {
        if (this.eyr) {
            this.eao++;
            if (this.eao == 6 || this.eao == 10 || this.eao == 15 || (this.parent.vmm == 2 && (this.eao == 48 || this.eao == 55 || this.eao == 64))) {
                this.ggv()
            }
            for (var a = this.hrz.length - 1; a >= 0; a--) {
                if (this.hrz[a].wjx()) {
                    this.hrz.shift()
                }
            }
        }
        if (this.gsh) {
            if (this.mog) {
                this.dbl = true
            } else {
                if ((this.wde % 3) == 0) {
                    this.dbl = !this.dbl
                }
            }
        }
        if (((!this.mog || this.jza) && this.wde < this.wmw)) {
            this.parent.mdb();
            this.wde++;
            if (this.mog) {
                this.tsv++
            }
        } else {
            if (this.mog && !this.jza && this.tsv < this.zmx) {
                this.parent.mdb();
                this.tsv++;
                this.wde = (this.wde < this.wmw) ? this.wde + 1 : 0
            } else {
                this.tsv = 0;
                clearInterval(this.nqe);
                this.caa()
            }
        }
    };
    this.caa = function() {
        this.eyy = false;
        this.fze = (this.cvp && this.noh);
        if (this.fze == true && this.jza == true && this.parent.uiu == false && this.parent.qsy == true) {
            this.fze = false
        }
        if (!this.mog || this.jza) {
            if (!(this.pqm && this.cvp) && !this.eyr) {
                this.dwo()
            }
        }
        this.parent.mdb();
        this.parent.xka();
        this.parent.bop();
        this.parent.mie()
    };
    this.eum = function() {
        this.wmw = 0;
        for (var a = 0; a < this.buo.length; a++) {
            for (var b = 0; b < this.buo[a].length; b++) {
                if (this.buo[a][b] >= 0) {
                    if (this.gjz[this.buo[a][b]].eqs > this.wmw) {
                        this.wmw = this.gjz[this.buo[a][b]].eqs
                    }
                }
            }
        }
    };
    this.fzv = function() {
        if (this.dse()) {
            this.hrz = [];
            this.eyr = true;
            this.eao = 0
        }
    };
    this.glb = function() {
        this.eao = 0
    };
    this.gjq = function() {
        this.eyr = false
    };
    this.ggv = function() {
        var e = (Math.random() > 0.7) ? 4 : 3,
            d = this.uds * e,
            g = this.tsu * e,
            a = Math.random();
        while (Math.abs(a - this.ghh) < 0.3) {
            a = Math.random()
        }
        this.ghh = a;
        var f = Math.round(a * (this.width - d));
        a = Math.random();
        var c = Math.round(a * (this.height - g));
        var b = new vvm({
            x: f,
            y: c
        }, this.parent.xbq.ire("firework"), this.context2D, d, g);
        this.hrz.push(b)
    };
    this.uwq = function(b) {
        this.jdn = true;
        this.wde = 0;
        this.wtz = b;
        if (this.wtz >= this.parent.rrr) {
            this.lmo = this.xep;
            for (var c = 0, a = this.uit.length; c < a; c++) {
                this.awr[c] = this.uit[c]
            }
            this.parent.xbq.ruf("megawin");
            this.parent.rtu(48);
            this.wmw = this.uuc
        } else {
            if (this.wtz >= this.parent.mjs) {
                this.lmo = this.vfv;
                for (var c = 0, a = this.ymg.length; c < a; c++) {
                    this.awr[c] = this.ymg[c]
                }
                this.parent.xbq.ruf("bigwin");
                this.parent.rtu(48);
                this.wmw = this.scw
            } else {
                if (this.wtz >= this.parent.dpx) {
                    this.lmo = this.fqc;
                    for (var c = 0, a = this.ylf.length; c < a; c++) {
                        this.awr[c] = this.ylf[c]
                    }
                    this.parent.xbq.ruf("nicewin");
                    this.parent.rtu(24);
                    this.wmw = this.guc
                }
            }
        }
        this.wmw += (this.awr.length - 1) * this.avv;
        this.rlm = 0;
        this.parent.zpc(true);
        this.naw()
    };
    this.tqg = function() {
        this.jdn = false;
        clearInterval(this.nqe);
        if (this.wtz >= this.parent.rrr) {
            this.parent.xbq.loh("megawin")
        } else {
            if (this.wtz >= this.parent.mjs) {
                this.parent.xbq.loh("bigwin")
            } else {
                if (this.wtz >= this.parent.dpx) {
                    this.parent.xbq.loh("nicewin")
                }
            }
        }
        this.dwo();
        this.parent.zpc(false);
        this.parent.jno()
    };
    this.jlk = function(a, b, c) {
        this.diz = a;
        this.pjz = b;
        this.wkf = c
    };
    this.mdb = function() {
        if (!this.dse() || !this.parent.kez()) {
            return
        }
        var d = this.context2D;
        d.save();
        d.clearRect(0, 0, this.width, this.height);
        d.lineWidth = this.jqs;
        d.lineCap = "round";
        d.lineJoin = "round";
        if (this.obs) {
            this.auq()
        }
        if (this.fze) {
            if (this.eyy && this.cvp && this.fha) {
                for (var b = 0; b < this.buo.length; b++) {
                    for (var f = 0; f < this.buo[b].length; f++) {
                        if (this.buo[b][f] != -1) {
                            if (this.noh) {
                                this.yow(b, f)
                            } else {
                                this.odk(b, f)
                            }
                        }
                    }
                }
                if (this.fha) {
                    this.zbp(this.ebg)
                }
                for (var c = this.hpk; c < this.hpk + this.ckq; c++) {
                    if (this.wts >= 0 && (this.buo[c][this.aum[this.ebg][c] - 1] == this.wts || this.parent.fww(this.buo[c][this.aum[this.ebg][c] - 1]))) {
                        if (this.noh) {
                            this.yow(c, this.aum[this.ebg][c] - 1)
                        } else {
                            this.odk(c, this.aum[this.ebg][c] - 1)
                        }
                    }
                }
            } else {
                if (this.eyy && this.fha) {
                    this.zbp(this.ebg)
                }
                for (var b = 0; b < this.buo.length; b++) {
                    for (var f = 0; f < this.buo[b].length; f++) {
                        if (this.buo[b][f] != -1) {
                            if (this.noh) {
                                this.yow(b, f)
                            } else {
                                this.odk(b, f)
                            }
                        }
                    }
                }
            }
            if (this.sam) {
                for (var b = 0; b < this.buo.length; b++) {
                    for (var f = 0; f < this.buo[b].length; f++) {
                        if (this.buo[b][f] != -1) {
                            d.drawImage(this.sam, 0, f * this.cbq, this.sam.width, this.cbq, this.jrb[b][f].x, this.jrb[b][f].y, this.rde, this.cbq)
                        }
                    }
                }
            }
            if (this.eyy) {
                if (this.ebg < 0) {
                    if (this.ndz[this.ndz.length - 2]) {
                        for (var b = 0; b < this.buo.length; b++) {
                            for (var f = 0; f < this.buo[b].length; f++) {
                                if (this.parent.poi >= 0 && this.buo[b][f] == this.parent.poi) {
                                    this.ayc(b, f, this.ndz[this.ndz.length - 2])
                                }
                            }
                        }
                    }
                } else {
                    for (var c = this.hpk; c < this.hpk + this.ckq; c++) {
                        if (this.wts >= 0 && (this.buo[c][this.aum[this.ebg][c] - 1] == this.wts || this.parent.fww(this.buo[c][this.aum[this.ebg][c] - 1]))) {
                            this.ayc(c, this.aum[this.ebg][c] - 1, this.ndz[this.ebg])
                        }
                    }
                }
            }
            if (this.eyr) {
                for (var e = 0, a = this.hrz.length; e < a; e++) {
                    this.hrz[e].mdb()
                }
            }
        } else {
            if (this.jdn) {
                this.kon()
            }
        }
        d.restore();
        if (this.parent.zrw()) {
            if (this.uek && this.gvg) {
                this.uek.drawImage(this.gvg, this.x, this.y)
            }
        }
    };
    this.kon = function() {
        var l = this.context2D,
            f = this.parent.xbq.ire("wins"),
            b = (this.height / 2 - this.lmo.height) / 2,
            g = this.awr[0],
            a = this.wde % this.avv,
            k = (a < this.fuw) ? Math.floor(this.awr[this.rlm + 1] / this.fuw) * a : this.awr[this.rlm + 1],
            j = (a < this.fuw) ? Math.floor(this.lmo.height / this.fuw) * a : this.lmo.height,
            c = 1,
            e = 5;
        l.save();
        if (this.wde >= this.wmw - e) {
            c = (this.wmw - this.wde) * (1 / e)
        }
        l.globalAlpha = c;
        for (var d = 0; d <= this.rlm && d < this.awr.length - 1; d++) {
            if (d == this.awr.length - 2) {
                b += this.height / 2
            }
            if (d == this.rlm) {
                l.drawImage(f, g, this.lmo.y, this.awr[d + 1], this.lmo.height, ((this.width - this.awr[d + 1]) / 2 + (this.awr[d + 1] - k) / 2), (b + (this.lmo.height - j) / 2), k, j)
            } else {
                l.drawImage(f, g, this.lmo.y, this.awr[d + 1], this.lmo.height, (this.width - this.awr[d + 1]) / 2, b, this.awr[d + 1], this.lmo.height)
            }
            g += this.awr[d + 1]
        }
        l.restore()
    };
    this.auq = function() {
        if (this.ppg) {
            this.uju = [];
            for (var b = 0; b < this.buo.length; b++) {
                for (var d = 0; d < this.buo[b].length; d++) {
                    if (this.buo[b][d] != -1) {
                        this.odk(b, d);
                        if (this.sam) {
                            this.context2D.drawImage(this.sam, 0, d * this.cbq, this.sam.width, this.cbq, this.jrb[b][d].x, this.jrb[b][d].y, this.rde, this.cbq)
                        }
                    }
                }
            }
            for (var c = 0, a = this.ppg.length; c < a; c++) {
                this.atd(this.ppg[c])
            }
        } else {
            for (var c = 0; c < this.parent.tss; c++) {
                this.zbp(c)
            }
        }
    };
    this.zbp = function(c) {
        var a = this.context2D;
        a.save();
        a.strokeStyle = (this.dbl) ? this.ndz[c].qvh : this.ndz[c].irh;
        a.lineWidth = this.jqs;
        a.beginPath();
        for (var b = 0; b < this.eke[c].length; b++) {
            if (b == 0) {
                a.moveTo(this.eke[c][b].x, this.eke[c][b].y)
            } else {
                a.lineTo(this.eke[c][b].x, this.eke[c][b].y)
            }
        }
        a.moveTo(this.eke[c][0].x, this.eke[c][0].y);
        a.stroke();
        a.strokeStyle = (this.dbl) ? this.ndz[c].xlt : this.ndz[c].qfo;
        a.lineWidth = this.jqs - 2 * this.qtj;
        a.stroke();
        a.restore()
    };
    this.atd = function(d) {
        var a = this.context2D,
            c = null;
        a.save();
        for (var b = 1; b < this.eke[d].length; b++) {
            c = this.eke[d][b - 1].x + "_" + this.eke[d][b - 1].y + "_" + this.eke[d][b].x + "_" + this.eke[d][b].y;
            if (this.uju.indexOf(c) < 0) {
                this.uju.push(c);
                a.beginPath();
                a.moveTo(this.eke[d][b - 1].x, this.eke[d][b - 1].y);
                a.lineTo(this.eke[d][b].x, this.eke[d][b].y);
                a.moveTo(this.eke[d][b - 1].x, this.eke[d][b - 1].y);
                a.strokeStyle = (this.dbl) ? this.ndz[this.ndz.length - 1].qvh : this.ndz[this.ndz.length - 1].irh;
                a.lineWidth = this.jqs;
                a.stroke();
                a.strokeStyle = (this.dbl) ? this.ndz[this.ndz.length - 1].xlt : this.ndz[this.ndz.length - 1].qfo;
                a.lineWidth = this.jqs - 2 * this.qtj;
                a.stroke()
            }
        }
        a.restore()
    };
    this.yow = function(a, c) {
        var b = this.context2D;
        b.save();
        if (this.diz != null) {
            this.context2D.drawImage(this.diz, this.jrb[a][c].x + this.pjz, this.jrb[a][c].y + this.wkf, this.rde, this.cbq, this.jrb[a][c].x, this.jrb[a][c].y, this.rde, this.cbq)
        }
        if (this.gjz[this.buo[a][c]].eqs <= this.wde) {
            b.drawImage(this.gjz[this.buo[a][c]].cau, (this.gjz[this.buo[a][c]].eqs - 1) * this.gjz[this.buo[a][c]].wmg, 0, this.gjz[this.buo[a][c]].wmg, this.gjz[this.buo[a][c]].zvc, this.jrb[a][c].x + (this.rde - this.gjz[this.buo[a][c]].wmg) / 2, this.jrb[a][c].y + (this.cbq - this.gjz[this.buo[a][c]].zvc) / 2, this.gjz[this.buo[a][c]].wmg, this.gjz[this.buo[a][c]].zvc)
        } else {
            b.drawImage(this.gjz[this.buo[a][c]].cau, this.wde * this.gjz[this.buo[a][c]].wmg, 0, this.gjz[this.buo[a][c]].wmg, this.gjz[this.buo[a][c]].zvc, this.jrb[a][c].x + (this.rde - this.gjz[this.buo[a][c]].wmg) / 2, this.jrb[a][c].y + (this.cbq - this.gjz[this.buo[a][c]].zvc) / 2, this.gjz[this.buo[a][c]].wmg, this.gjz[this.buo[a][c]].zvc)
        }
        b.restore()
    };
    this.odk = function(a, c) {
        var b = this.context2D;
        b.save();
        if (this.diz != null) {
            this.context2D.drawImage(this.diz, this.jrb[a][c].x + this.pjz, this.jrb[a][c].y + this.wkf, this.rde, this.cbq, this.jrb[a][c].x, this.jrb[a][c].y, this.rde, this.cbq)
        }
        b.drawImage(this.sgx[this.buo[a][c]], this.jrb[a][c].x + (this.rde - this.sgx[this.buo[a][c]].width) / 2, this.jrb[a][c].y + (this.cbq - this.sgx[this.buo[a][c]].height) / 2);
        b.restore()
    };
    this.ayc = function(a, d, c) {
        var b = this.context2D;
        b.save();
        if (c) {
            b.lineWidth = this.xnz;
            b.strokeStyle = (this.dbl) ? c.qvh : c.irh;
            b.strokeRect(this.jrb[a][d].x + this.xnz / 2, this.jrb[a][d].y + this.xnz / 2, this.rde - this.xnz, this.cbq - this.xnz);
            b.strokeStyle = (this.dbl) ? c.xlt : c.qfo;
            b.lineWidth = this.xnz - 2 * this.qtj;
            b.strokeRect(this.jrb[a][d].x + this.xnz / 2, this.jrb[a][d].y + this.xnz / 2, this.rde - this.xnz, this.cbq - this.xnz)
        }
        b.restore()
    }
}
zsg.prototype = new kpu;

function elm() {
    var a = this;
    this.eyk = function() {
        this.lzd();
        this.nqe = setInterval(a.lzd, a.opr)
    };
    this.lzd = function() {
        a.nrg()
    };
    this.bim = function() {
        this.rmu = setTimeout(a.qyk, a.mix)
    };
    this.qyk = function() {
        a.caa()
    };
    this.naw = function() {
        this.nqe = setInterval(this.ouv, 60)
    };
    this.ouv = function() {
        if (a.wde < a.wmw) {
            a.wde++;
            if ((a.wde % (a.avv)) == 0) {
                a.rlm++
            }
            a.parent.mdb()
        } else {
            a.tqg()
        }
    }
}
elm.prototype = new zsg;

function lss() {
    var a = this;
    this.kfq = 0;
    this.jxw = 1;
    this.sql = 7;
    this.fpp = 0;
    this.omu = 0;
    this.kky = 0;
    this.rtk = 0;
    this.akx = this.kfq;
    this.ido = this.kmv;
    this.dgk = function() {
        this.tzp(true);
        this.cfp = true;
        this.unn = false;
        this.akx = this.kfq;
        this.omu = Math.floor(this.width / this.sql);
        this.rtk = 0;
        this.kky = 0
    };
    this.phn = function() {
        this.cfp = true;
        this.unn = false;
        this.akx = this.jxw;
        this.omu = -Math.floor(this.width / this.sql);
        this.rtk = 1;
        this.kky = this.width
    };
    this.unf = function() {
        if (a.rtk < a.sql) {
            a.kky += a.omu;
            a.rtk++;
            return true
        } else {
            a.cfp = false;
            a.unn = true;
            if (a.akx == a.jxw) {
                a.tzp(false)
            }
            return false
        }
    };
    this.ruf = function() {
        if (this.ywp == this.xyw) {
            this.parent.xbq.ruf("maxstep")
        } else {
            this.parent.xbq.ruf("step" + (this.ywp % 12))
        }
    };
    this.pai = function(b, d) {
        var c = false;
        this.ywp = b;
        if (this.ywp < this.tbc) {
            c = true;
            this.ywp = this.tbc
        }
        if (this.ywp >= this.xyw) {
            c = true;
            this.ywp = this.xyw
        }
        this.xkw = this.ywp + 1;
        if (c) {
            this.kgs(this.ywp)
        }
        if (d && d === true) {
            this.parent.mdb()
        }
    };
    this.saz = function() {
        a.ulh = false
    };
    this.mdb = function() {
        if (!this.dse() || !this.parent.kez()) {
            return
        }
        this.urd();
        if (this.uek && this.gvg) {
            if (this.cfp) {
                if (this.kky > 0) {
                    if (this.ido === this.nxg) {
                        this.uek.drawImage(this.gvg, this.width - this.kky, 0, this.kky, this.height, this.x, this.y, this.kky, this.height)
                    } else {
                        if (this.ido === this.kmv) {
                            this.uek.drawImage(this.gvg, 0, 0, this.kky, this.height, this.x + this.width - this.kky, this.y, this.kky, this.height)
                        }
                    }
                }
            } else {
                this.uek.drawImage(this.gvg, this.x, this.y)
            }
        }
    };
    this.eqc = function(c) {
        var f = this.pwl,
            e = this.pwl,
            b = 0,
            d = 0;
        if (this.ido === this.kmv) {
            b = this.cse;
            d = this.kqq.x - 2 * this.cse
        } else {
            if (this.ido === this.nxg) {
                b = this.kqq.x + this.kqq.width + this.cse;
                d = this.width - this.cse - (this.kqq.x + this.kqq.width + this.cse)
            }
        }
        if (this.ywp > 0 && this.ywp < this.eee.length - 1) {
            tvj.slh.ayc(c, b, this.kqq.y + ((this.wue - this.xkw) * this.wmi), d, this.wmi, this.mdw, this.kwg);
            tvj.slh.wpo(c, this.parent.axw(this.eee[this.ywp]), this.uim, b, this.kqq.y + ((this.wue - this.xkw) * this.wmi) + (this.wmi - this.are) / 2, d, this.are, this.qaz, this.are, this.hie, this.cse)
        } else {
            if (this.ywp == 0) {
                f = this.uim
            } else {
                if (this.ywp == this.eee.length - 1) {
                    e = this.uim
                }
            }
        }
        tvj.slh.ayc(c, b, this.kqq.y + (this.wmi * (this.wue - 1)), d, this.wmi, this.mdw, this.kwg);
        tvj.slh.wpo(c, this.parent.axw(this.eee[0]), f, b, this.kqq.y + (this.wmi * (this.wue - 1)) + (this.wmi - this.are) / 2, d, this.are, this.qaz, this.are, this.hie, this.cse);
        tvj.slh.ayc(c, b, this.kqq.y, d, this.wmi, this.mdw, this.kwg);
        tvj.slh.wpo(c, this.parent.axw(this.eee[this.eee.length - 1]), e, b, this.kqq.y + (this.wmi - this.are) / 2, d, this.are, this.qaz, this.are, this.hie, this.cse);
        tvj.slh.edu(c, "+", this.pwl, this.ugl.x, this.ugl.y, this.ugl.width, this.ugl.height, this.qaz, this.are, this.hie);
        tvj.slh.edu(c, "", this.pwl, this.hvd.x, this.hvd.y, this.hvd.width, this.hvd.height, this.qaz, this.are, this.hie);
        if (this.szr) {
            tvj.slh.edu(c, this.szr, this.pwl, this.jyi.x, this.jyi.y, this.jyi.width, this.jyi.height, this.qaz, this.are, this.hie)
        }
    }
}
lss.prototype = new baa;

function ons() {
    var a = this;
    this.kfq = 0;
    this.jxw = 1;
    this.sql = 7;
    this.fpp = 0;
    this.omu = 0;
    this.kky = 0;
    this.rtk = 0;
    this.akx = this.kfq;
    this.dgk = function() {
        this.tzp(true);
        this.cfp = true;
        this.unn = false;
        this.akx = this.kfq;
        this.omu = Math.floor(this.width / this.sql);
        this.rtk = 0;
        this.kky = 0
    };
    this.phn = function() {
        this.cfp = true;
        this.unn = false;
        this.akx = this.jxw;
        this.omu = -Math.floor(this.width / this.sql);
        this.rtk = 1;
        this.kky = this.width
    };
    this.unf = function() {
        if (a.rtk < a.sql) {
            a.kky += a.omu;
            a.rtk++;
            return true
        } else {
            a.cfp = false;
            a.unn = true;
            if (a.akx == a.jxw) {
                a.tzp(false)
            }
            return false
        }
    };
    this.ruf = function() {
        if (this.ywp == this.xyw) {
            this.parent.xbq.ruf("maxstep")
        } else {
            this.parent.xbq.ruf("step" + (this.ywp % 12))
        }
    };
    this.saz = function() {
        a.ulh = false
    };
    this.mdb = function() {
        if (!this.dse() || !this.parent.kez()) {
            return
        }
        this.urd();
        if (this.uek && this.gvg) {
            if (this.cfp) {
                if (this.kky > 0) {
                    if (this.ido === this.nxg) {
                        this.uek.drawImage(this.gvg, this.width - this.kky, 0, this.kky, this.height, this.x, this.y, this.kky, this.height)
                    } else {
                        if (this.ido === this.kmv) {
                            this.uek.drawImage(this.gvg, 0, 0, this.kky, this.height, this.x + this.width - this.kky, this.y, this.kky, this.height)
                        }
                    }
                }
            } else {
                this.uek.drawImage(this.gvg, this.x, this.y)
            }
        }
    };
    this.eqc = function(c) {
        var f = this.pwl,
            e = this.pwl,
            b = 0,
            d = 0;
        if (this.ido === this.kmv) {
            b = this.cse;
            d = this.kqq.x - 2 * this.cse
        } else {
            if (this.ido === this.nxg) {
                b = this.kqq.x + this.kqq.width + this.cse;
                d = this.width - this.cse - (this.kqq.x + this.kqq.width + this.cse)
            }
        }
        if (this.ywp > 0 && this.ywp < this.eee.length - 1) {
            tvj.slh.ayc(c, b, this.kqq.y + ((this.wue - this.xkw) * this.wmi), d, this.wmi, this.mdw, this.kwg);
            tvj.slh.iuq(c, this.eee[this.ywp], this.uim, b, this.kqq.y + ((this.wue - this.xkw) * this.wmi) + (this.wmi - this.are) / 2, d, this.are, this.qaz, this.are, this.hie, this.cse)
        } else {
            if (this.ywp == 0) {
                f = this.uim
            } else {
                if (this.ywp == this.eee.length - 1) {
                    e = this.uim
                }
            }
        }
        tvj.slh.ayc(c, b, this.kqq.y + (this.wmi * (this.wue - 1)), d, this.wmi, this.mdw, this.kwg);
        tvj.slh.iuq(c, this.eee[0], f, b, this.kqq.y + (this.wmi * (this.wue - 1)) + (this.wmi - this.are) / 2, d, this.are, this.qaz, this.are, this.hie, this.cse);
        tvj.slh.ayc(c, b, this.kqq.y, d, this.wmi, this.mdw, this.kwg);
        tvj.slh.iuq(c, this.eee[this.eee.length - 1], e, b, this.kqq.y + (this.wmi - this.are) / 2, d, this.are, this.qaz, this.are, this.hie, this.cse);
        tvj.slh.edu(c, "+", this.pwl, this.ugl.x, this.ugl.y, this.ugl.width, this.ugl.height, this.qaz, this.are, this.hie);
        tvj.slh.edu(c, "", this.pwl, this.hvd.x, this.hvd.y, this.hvd.width, this.hvd.height, this.qaz, this.are, this.hie);
        if (this.szr) {
            tvj.slh.edu(c, this.szr, this.pwl, this.jyi.x, this.jyi.y, this.jyi.width, this.jyi.height, this.qaz, this.are, this.hie)
        }
    }
}
ons.prototype = new baa;

function gni() {
    this.ifr = new Image();
    this.frm = [];
    this.etm = 0;
    this.kkh = 0;
    this.pzz = [];
    this.ntl = 0;
    this.imd = 0;
    this.lhh = 0;
    this.xdy = [];
    this.diz = null;
    this.pjz = 0;
    this.wkf = 0;
    this.sqc = function(a) {
        try {
            this.xdy = a.fok;
            this.imd = a.ojy;
            this.lhh = a.qig
        } catch (b) {
            console.error(b)
        }
    };
    this.nyv = function(b, f, c) {
        var e = this.parent.ljg.zcr.mmc("line"),
            a = this.parent.afx.mmc("betsel"),
            d = this.parent.afx.mmc("linesel");
        if (b >= this.x && b <= this.x + this.width && f >= this.y && f <= this.y + this.height && this.dse() === true) {
            if (e && e.skl() && !e.oax()) {
                if (!c) {
                    this.parent.xbq.loh("panel");
                    this.parent.xbq.ruf("panel");
                    if ((a && a.skl()) && ((d && d.skl()) || !d)) {
                        this.parent.rkd()
                    }
                    return true
                }
            }
        }
        return false
    };
    this.mdb = function() {
        if (!this.dse() || !this.parent.kez()) {
            return
        }
        var c = this.context2D,
            e = false;
        if (this.diz != null) {
            c.drawImage(this.diz, this.x + this.pjz, this.y + this.wkf, this.width, this.height, this.x, this.y, this.width, this.height)
        }
        if (this.pzz.length > 0) {
            for (var f = this.etm - 1, d = 0; f <= this.kkh - 1; f++, d++) {
                e = false;
                for (var b = 0, a = this.pzz.length; b < a; b++) {
                    if (this.frm[f] === this.pzz[b]) {
                        e = true;
                        c.drawImage(this.ifr, 0, this.ifr.height / 2 + (this.frm[f] - 1) * this.lhh, this.imd, this.lhh, this.x, this.y + this.xdy[d], this.imd, this.lhh)
                    }
                }
                if (e === false) {
                    c.drawImage(this.ifr, 0, (this.frm[f] - 1) * this.lhh, this.imd, this.lhh, this.x, this.y + this.xdy[d], this.imd, this.lhh)
                }
            }
        } else {
            for (var f = this.etm - 1, d = 0; f <= this.kkh - 1; f++, d++) {
                if (this.frm[f] <= this.ntl) {
                    c.drawImage(this.ifr, 0, this.ifr.height / 2 + (this.frm[f] - 1) * this.lhh, this.imd, this.lhh, this.x, this.y + this.xdy[d], this.imd, this.lhh)
                } else {
                    c.drawImage(this.ifr, 0, (this.frm[f] - 1) * this.lhh, this.imd, this.lhh, this.x, this.y + this.xdy[d], this.imd, this.lhh)
                }
            }
        }
    };
    this.qei = function(a, b) {
        this.ntl = a;
        if (b && b === true) {
            this.mdb()
        }
    };
    this.dke = function(b, d) {
        this.pzz = [];
        if (b) {
            for (var c = 0, a = b.length; c < a; c++) {
                this.pzz[c] = b[c]
            }
        }
        if (d && d === true) {
            this.mdb()
        }
    };
    this.nkk = function(a) {
        this.ifr = a;
        this.width = this.imd;
        this.height = this.xdy[this.xdy.length - 1] + this.lhh;
        this.gae(new mfo(this.x, this.y, this.width, this.height))
    };
    this.jlk = function(a, b, c) {
        this.diz = a;
        this.pjz = b;
        this.wkf = c
    }
}
gni.prototype = new kpu;

function fff(g, c, f, e, h, a, d, b) {
    this.jpx = g;
    this.iqq = f;
    this.qre = e;
    this.ylr = h;
    this.bdh = c;
    this.vyg = a;
    this.fva = d;
    this.vna = b;
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
    this.mic = [];
    this.xjl = [];
    this.phm = [];
    this.nce = [];
    this.blv = [];
    this.ucq = [];
    this.emr = 5;
    this.ato = [];
    this.ssi = [];
    this.qeu = [];
    this.dvc = [];
    this.wch = [];
    this.rvw = [];
    this.kry = [];
    this.wgr = [];
    this.vsg = [];
    this.sob = [];
    this.ezk = [];
    this.usy = [];
    this.xff = [];
    this.fru = [];
    this.oer = [];
    this.bge = [];
    this.xsv = [];
    this.kro = [];
    this.cbr = [];
    this.zkh = [];
    this.kda = 0;
    this.bex = 0;
    this.qio = 0;
    this.oxk = 0;
    this.lot = 0;
    this.oub = 0;
    this.tss = 0;
    this.tij = 0;
    this.mdh = 0;
    this.idf = 0;
    this.wew = 1;
    this.egi = 1;
    this.jnr = 0;
    this.xxb = 0;
    this.mzc = 0;
    this.wna = 0;
    this.lty = 0;
    this.vzu = 1;
    this.cte = 1;
    this.pal = 0;
    this.wao = 0;
    this.nto = 0;
    this.hcd = 0;
    this.hhv = "";
    this.pin = "";
    this.mdi = "";
    this.lyr = function(j) {
        return this.zxm(j)
    };
    this.lez = function(m) {
        if (m != null) {
            this.pml = 0;
            this.ggc = this.pyd(m);
            if (this.ggc == 0) {
                this.rl = this.pyd(m);
                this.r1 = this.lyr(m);
                this.r2 = this.lyr(m);
                this.r3 = this.lyr(m);
                if (this.rl >= 4) {
                    this.r4 = this.lyr(m)
                }
                if (this.rl >= 5) {
                    this.r5 = this.lyr(m)
                }
                if (this.rl >= 6) {
                    this.r6 = this.lyr(m)
                }
                if (this.rl >= 7) {
                    this.r7 = this.lyr(m)
                }
                if (this.rl >= 8) {
                    this.r8 = this.lyr(m)
                }
                if (this.rl >= 9) {
                    this.r9 = this.lyr(m)
                }
                if (this.rl >= 10) {
                    this.mic = this.lyr(m)
                }
                if (this.rl >= 11) {
                    this.xjl = this.lyr(m)
                }
                if (this.rl >= 12) {
                    this.phm = this.lyr(m)
                }
                if (this.rl >= 13) {
                    this.nce = this.lyr(m)
                }
                if (this.rl >= 14) {
                    this.blv = this.lyr(m)
                }
                if (this.rl >= 15) {
                    this.ucq = this.lyr(m)
                }
                this.emr = this.pyd(m);
                if (this.emr > 0) {
                    this.ato = this.lyr(m);
                    this.ssi = this.lyr(m);
                    this.qeu = this.lyr(m);
                    if (this.emr >= 4) {
                        this.dvc = this.lyr(m)
                    }
                    if (this.emr >= 5) {
                        this.wch = this.lyr(m)
                    }
                    if (this.emr >= 6) {
                        this.rvw = this.lyr(m)
                    }
                    if (this.emr >= 7) {
                        this.kry = this.lyr(m)
                    }
                    if (this.emr >= 8) {
                        this.wgr = this.lyr(m)
                    }
                    if (this.emr >= 9) {
                        this.vsg = this.lyr(m)
                    }
                    if (this.emr >= 10) {
                        this.sob = this.lyr(m)
                    }
                    if (this.emr >= 11) {
                        this.ezk = this.lyr(m)
                    }
                    if (this.emr >= 12) {
                        this.usy = this.lyr(m)
                    }
                    if (this.emr >= 13) {
                        this.xff = this.lyr(m)
                    }
                    if (this.emr >= 14) {
                        this.fru = this.lyr(m)
                    }
                    if (this.emr >= 15) {
                        this.oer = this.lyr(m)
                    }
                }
                this.kml = this.vsb(m);
                this.exp = this.pyd(m);
                for (var k = 0, j = (this.rl < 5) ? 5 : this.rl; k < j; k++) {
                    this.bge[k] = this.aws(m)
                }
                this.kda = this.aws(m);
                this.bex = this.aws(m);
                this.qio = this.aws(m);
                this.oub = this.vsb(m);
                this.oxk = this.aws(m);
                this.lot = this.aws(m);
                this.tss = this.vsb(m);
                this.tij = this.aws(m);
                this.mdh = this.aws(m);
                this.idf = this.aws(m);
                this.wew = this.aws(m);
                this.egi = this.aws(m);
                this.jnr = this.aws(m);
                this.xxb = this.aws(m);
                this.mzc = this.vsb(m);
                this.wna = this.vsb(m);
                this.lty = this.vsb(m);
                this.vzu = this.aws(m);
                this.cte = this.vsb(m);
                for (var k = 0, j = (this.emr < 5) ? 5 : this.emr; k < j; k++) {
                    this.xsv[k] = this.aws(m)
                }
                for (var k = 0; k < 8; k++) {
                    this.kro[k] = this.vsb(m)
                }
                var n = this.vsb(m);
                for (var k = 0; k < n; k++) {
                    this.cbr[k] = this.aws(m)
                }
                var l = this.vsb(m);
                for (var k = 0; k < l; k++) {
                    this.zkh[k] = this.aws(m)
                }
                this.xpp(m);
                if (this.kml == 0) {
                    this.hxg("A/u250")
                } else {
                    this.vdt.ukj()
                }
            } else {
                if (this.ggc == 1) {
                    this.kml = this.vsb(m);
                    this.exp = this.pyd(m);
                    this.kda = this.aws(m);
                    this.bex = this.aws(m);
                    this.qio = this.aws(m);
                    for (var k = 0, j = (this.rl < 5) ? 5 : this.rl; k < j; k++) {
                        this.bge[k] = this.aws(m)
                    }
                    this.oub = this.vsb(m);
                    this.tss = this.vsb(m);
                    this.tij = this.aws(m);
                    this.mdh = this.aws(m);
                    this.idf = this.aws(m);
                    this.wew = this.aws(m);
                    this.egi = this.aws(m);
                    this.jnr = this.aws(m);
                    for (var k = 0, j = (this.emr < 5) ? 5 : this.emr; k < j; k++) {
                        this.xsv[k] = this.aws(m)
                    }
                    var l = this.vsb(m);
                    for (var k = 0; k < l; k++) {
                        this.zkh[k] = this.aws(m)
                    }
                    for (var k = 0; k < 8; k++) {
                        this.kro[k] = this.vsb(m)
                    }
                    this.xpp(m);
                    if (this.exp == 0) {
                        if (this.kml == tvj.odd.jef.loy) {
                            this.vdt.ukj()
                        } else {
                            if (this.kml == tvj.odd.jef.slx) {
                                this.vdt.das()
                            } else {
                                if (this.kml == tvj.odd.jef.pro) {
                                    this.vdt.fmo()
                                } else {
                                    if (this.kml == tvj.odd.jef.mui) {
                                        this.vdt.spl()
                                    } else {
                                        if (this.kml == tvj.odd.jef.ogo) {
                                            this.vdt.ntr()
                                        } else {
                                            if (this.kml == tvj.odd.jef.wsy) {
                                                this.vdt.axb()
                                            } else {
                                                if (this.kml == tvj.odd.jef.wfl) {
                                                    this.vdt.kex()
                                                } else {
                                                    if (this.kml == tvj.odd.jef.rey) {
                                                        this.vdt.lyl()
                                                    } else {
                                                        if (this.kml == tvj.odd.jef.zle) {
                                                            this.vdt.ftn()
                                                        } else {
                                                            if (this.kml == tvj.odd.jef.tex) {
                                                                this.vdt.wtk()
                                                            } else {
                                                                if (this.kml == tvj.odd.jef.knr) {
                                                                    this.vdt.qwa()
                                                                } else {
                                                                    if (this.kml == tvj.odd.jef.dvt) {
                                                                        this.vdt.rgs()
                                                                    } else {
                                                                        if (this.kml == tvj.odd.jef.gde) {
                                                                            this.vdt.wrg()
                                                                        } else {
                                                                            this.zns()
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
                        this.vdt.ilw(this.exp)
                    }
                } else {
                    if (this.ggc == 2) {} else {
                        if (this.ggc == 3) {
                            this.bex = this.aws(m);
                            this.vdt.wie()
                        } else {
                            if (this.ggc === 6 || this.ggc === 7) {
                                this.rhk(m.substring(this.pml))
                            } else {
                                if (this.ggc === 8) {
                                    this.hxg("8")
                                } else {
                                    if (this.ggc == 9) {
                                        this.vdt.mgv.zcl = m.substring(this.pml)
                                    } else {
                                        this.nks = this.pyd(m);
                                        this.vdt.znn(m.substring(2))
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.xpp = function(m) {
        var n = null,
            l = [],
            k = null,
            j = null;
        if (this.ggc == 0) {
            n = this.wrt(m);
            if (n != "") {
                l = n.split("#");
                if (l.length >= 1) {
                    k = l[0].split("|");
                    this.pin = k[0];
                    if (k.length > 1) {
                        this.mdi = k[1]
                    }
                    if (l.length >= 2) {
                        j = l[1];
                        if (j) {
                            this.pml = 0;
                            this.pal = this.vsb(j);
                            this.wao = this.aws(j);
                            this.nto = this.aws(j);
                            this.hcd = this.aws(j);
                            this.hhv = this.wrt(j)
                        }
                    }
                }
            }
            if (tvj.wxo.value21.e === true && tvj.wxo.value21.s !== "") {
                this.pin = ""
            }
        } else {
            n = this.wrt(m);
            if (n != "") {
                l = n.split("#");
                if (l.length > 1) {
                    j = l[1];
                    if (j) {
                        this.pml = 0;
                        this.wao = this.aws(j);
                        this.nto = this.aws(j);
                        this.hcd = this.aws(j)
                    }
                }
            }
        }
    };
    this.zns = function() {};
    this.play = function(k, j, l) {
        this.hxg("A/u251," + k + "," + j + "," + l)
    };
    this.bpj = function() {
        this.hxg("A/u254")
    };
    this.iip = function() {
        this.hxg("A/u258")
    };
    this.fzw = function(j) {
        this.hxg("A/u257," + j)
    };
    this.gqv = function(k, j, l) {
        this.hxg("A/u256," + k + "," + j + "," + l)
    }
}
fff.prototype = new prx;

function dxg() {
    this.xpk = function(a, b) {
        this.jpx = b;
        this.mgv = a;
        return this
    };
    this.connect = function(c, f, e, g, a, d, b) {
        this.iqq = f;
        this.qre = e;
        this.ylr = g;
        this.bdh = c;
        this.fva = d;
        this.vna = b;
        this.doy = new fff(this.jpx, c, f, e, g, a, d, b);
        this.doy.xpk(this)
    };
    this.play = function(b, a, c) {
        this.doy.play(b, a, c)
    };
    this.gqv = function(b, a, c) {
        this.doy.gqv(b, a, c)
    };
    this.bpj = function() {
        this.doy.bpj()
    };
    this.iip = function() {
        this.doy.iip()
    };
    this.fzw = function(a) {
        this.doy.fzw(a)
    };
    this.ukj = function() {
        var c = this.doy.kml;
        this.mgv.r1 = this.doy.r1;
        this.mgv.r2 = this.doy.r2;
        this.mgv.r3 = this.doy.r3;
        this.mgv.r4 = this.doy.r4;
        this.mgv.r5 = this.doy.r5;
        this.mgv.r6 = this.doy.r6;
        this.mgv.r7 = this.doy.r7;
        this.mgv.r8 = this.doy.r8;
        this.mgv.r9 = this.doy.r9;
        this.mgv.mic = this.doy.mic;
        this.mgv.xjl = this.doy.xjl;
        this.mgv.phm = this.doy.phm;
        this.mgv.nce = this.doy.nce;
        this.mgv.blv = this.doy.blv;
        this.mgv.ucq = this.doy.ucq;
        if (c == tvj.odd.jef.ogo || c == tvj.odd.jef.wsy || c == tvj.odd.jef.wfl || c == tvj.odd.jef.rey || c == tvj.odd.jef.zle) {
            this.mgv.r1 = this.doy.ato;
            this.mgv.r2 = this.doy.ssi;
            this.mgv.r3 = this.doy.qeu;
            this.mgv.r4 = this.doy.dvc;
            this.mgv.r5 = this.doy.wch;
            this.mgv.r6 = this.doy.rvw;
            this.mgv.r7 = this.doy.kry;
            this.mgv.r8 = this.doy.wgr;
            this.mgv.r9 = this.doy.vsg;
            this.mgv.mic = this.doy.sob;
            this.mgv.xjl = this.doy.ezk;
            this.mgv.phm = this.doy.usy;
            this.mgv.nce = this.doy.xff;
            this.mgv.blv = this.doy.fru;
            this.mgv.ucq = this.doy.oer
        }
        this.mgv.mav = this.doy.bge;
        this.mgv.bex = this.doy.bex;
        this.mgv.oxk = this.doy.oxk;
        this.mgv.lot = this.doy.lot;
        this.mgv.wna = this.doy.wna;
        this.mgv.lty = this.doy.lty;
        if (this.odq()) {
            for (var b = 0, a = this.doy.cbr.length; b < a && this.doy.cbr[b] <= this.doy.lot; b++) {
                this.mgv.cbr[b] = this.doy.cbr[b]
            }
        } else {
            for (var b = 0, a = this.doy.cbr.length; b < a && this.doy.cbr[b] * this.doy.mzc <= this.doy.lot; b++) {
                this.mgv.cbr[b] = this.doy.cbr[b]
            }
        }
        if (c == tvj.odd.jef.loy || ((c == tvj.odd.jef.slx || c == tvj.odd.jef.knr) && this.doy.qio == 0) || c == tvj.odd.jef.pro || c == tvj.odd.jef.tex || c == tvj.odd.jef.zle) {
            this.mgv.ffg = true
        } else {
            this.mgv.ffg = false
        }
        this.mgv.tss = this.doy.tss;
        this.mgv.cwv = this.doy.oub;
        this.mgv.aww = this.mgv.cbr[this.mgv.cwv];
        this.mgv.qio = this.doy.qio;
        for (var b = 0; b < this.doy.zkh.length; b++) {
            this.mgv.eli[b] = this.doy.zkh[b]
        }
        this.mgv.lzu = this.doy.xsv;
        this.mgv.idf = this.doy.idf;
        this.mgv.jnr = this.doy.jnr;
        this.mgv.mdh = this.doy.mdh;
        this.mgv.tij = this.doy.tij;
        this.mgv.oqo = this.doy.tij;
        this.mgv.wew = this.doy.wew;
        this.zrm();
        this.mgv.fcj();
        this.mgv.ybw(c, this.doy.kro, this.doy.kda)
    };
    this.das = function() {
        this.mgv.lpe = this.doy.kml;
        this.mgv.mav = this.doy.bge;
        this.mgv.bex = this.doy.bex;
        this.mgv.tss = this.doy.tss;
        this.mgv.cwv = this.doy.oub;
        this.mgv.qio = this.doy.qio;
        for (var a = 0; a < this.doy.zkh.length; a++) {
            this.mgv.eli[a] = this.doy.zkh[a]
        }
        if (this.mgv.hfs && this.mgv.qio > 0) {
            this.mgv.hfs.zcr.tew("history", "#ugf", [this.doy.kro])
        }
        this.mgv.edj = false;
        this.zrm();
        this.mgv.xxy();
        this.mgv.oay(this.doy.kda)
    };
    this.fmo = function() {
        this.mgv.lpe = this.doy.kml;
        this.mgv.bex = this.doy.bex;
        this.xch = false;
        this.zrm();
        this.mgv.wmp();
        this.mgv.oay(this.doy.kda)
    };
    this.wtk = function() {
        this.mgv.lpe = this.doy.kml;
        this.mgv.mav = this.doy.bge;
        this.mgv.bex = this.doy.bex;
        this.mgv.tss = this.doy.tss;
        this.mgv.cwv = this.doy.oub;
        this.mgv.qio = this.doy.qio;
        for (var a = 0; a < this.doy.zkh.length; a++) {
            this.mgv.eli[a] = this.doy.zkh[a]
        }
        this.mgv.edj = false;
        if (this.mgv.hfs && this.mgv.qio > 0) {
            this.mgv.hfs.ugf(this.doy.kro[0], this.doy.kro, true)
        }
        this.zrm();
        this.mgv.qsv();
        this.mgv.oay(this.doy.kda)
    };
    this.qwa = function() {
        this.mgv.lpe = this.doy.kml;
        this.mgv.bex = this.doy.bex;
        this.mgv.qio = this.doy.qio;
        if (this.mgv.hfs) {
            this.mgv.hfs.ugf(this.doy.kro[0], this.doy.kro, false)
        }
        this.mgv.yrs();
        this.mgv.oay(this.doy.kda)
    };
    this.rgs = function() {
        this.mgv.lpe = this.doy.kml;
        this.mgv.bex = this.doy.bex;
        this.mgv.qio = this.doy.qio;
        this.mgv.bgs();
        this.mgv.oay(this.doy.kda)
    };
    this.spl = function() {
        this.mgv.lpe = this.doy.kml;
        this.mgv.mav = this.doy.bge;
        this.mgv.bex = this.doy.bex;
        this.mgv.tss = this.doy.tss;
        this.mgv.cwv = this.doy.oub;
        this.mgv.qio = this.doy.qio;
        for (var a = 0; a < this.doy.zkh.length; a++) {
            this.mgv.eli[a] = this.doy.zkh[a]
        }
        this.mgv.edj = (this.doy.tij > this.mgv.tij);
        this.mgv.idf = this.doy.idf;
        this.mgv.jnr = this.doy.jnr;
        this.mgv.mdh = this.doy.mdh;
        this.mgv.tij = this.doy.tij;
        this.mgv.oqo = this.doy.tij;
        this.mgv.wew = this.doy.wew;
        this.zrm();
        this.mgv.ktx();
        this.mgv.oay(this.doy.kda)
    };
    this.ntr = function() {
        this.mgv.lpe = this.doy.kml;
        this.mgv.lzu = this.doy.xsv;
        this.mgv.mav = this.doy.bge;
        this.mgv.bex = this.doy.bex;
        this.mgv.tss = this.doy.tss;
        this.mgv.cwv = this.doy.oub;
        this.mgv.qio = this.doy.qio;
        for (var a = 0; a < this.doy.zkh.length; a++) {
            this.mgv.eli[a] = this.doy.zkh[a]
        }
        this.mgv.edj = (this.doy.tij > this.mgv.tij);
        this.mgv.idf = this.doy.idf;
        this.mgv.jnr = this.doy.jnr;
        this.mgv.mdh = this.doy.mdh;
        this.mgv.tij = this.doy.tij;
        this.mgv.oqo = this.doy.tij;
        this.mgv.wew = this.doy.wew;
        this.zrm();
        this.mgv.rwb();
        this.mgv.oay(this.doy.kda)
    };
    this.axb = function() {
        this.mgv.lpe = this.doy.kml;
        this.mgv.lzu = this.doy.xsv;
        this.mgv.mav = this.doy.bge;
        this.mgv.bex = this.doy.bex;
        this.mgv.tss = this.doy.tss;
        this.mgv.cwv = this.doy.oub;
        this.mgv.qio = this.doy.qio;
        for (var a = 0; a < this.doy.zkh.length; a++) {
            this.mgv.eli[a] = this.doy.zkh[a]
        }
        this.mgv.edj = (this.doy.tij > this.mgv.tij);
        this.mgv.oqo = this.mgv.tij;
        this.mgv.idf = this.doy.idf;
        this.mgv.jnr = this.doy.jnr;
        this.mgv.mdh = this.doy.mdh;
        this.mgv.tij = this.doy.tij;
        this.mgv.wew = this.doy.wew;
        this.zrm();
        this.mgv.syl();
        this.mgv.oay(this.doy.kda)
    };
    this.kex = function() {
        this.mgv.lpe = this.doy.kml;
        this.mgv.lzu = this.doy.xsv;
        this.mgv.mav = this.doy.bge;
        this.mgv.bex = this.doy.bex;
        this.mgv.tss = this.doy.tss;
        this.mgv.cwv = this.doy.oub;
        this.mgv.qio = this.doy.qio;
        for (var a = 0; a < this.doy.zkh.length; a++) {
            this.mgv.eli[a] = this.doy.zkh[a]
        }
        this.mgv.edj = (this.doy.tij > this.mgv.tij);
        this.mgv.oqo = this.mgv.tij;
        this.mgv.idf = this.doy.idf;
        this.mgv.jnr = this.doy.jnr;
        this.mgv.mdh = this.doy.mdh;
        this.mgv.tij = this.doy.tij;
        this.mgv.wew = this.doy.wew;
        this.zrm();
        this.mgv.knl();
        this.mgv.oay(this.doy.kda)
    };
    this.lyl = function() {
        this.mgv.lpe = this.doy.kml;
        this.mgv.lzu = this.doy.xsv;
        this.mgv.mav = this.doy.bge;
        this.mgv.bex = this.doy.bex;
        this.mgv.tss = this.doy.tss;
        this.mgv.cwv = this.doy.oub;
        this.mgv.qio = this.doy.qio;
        for (var a = 0; a < this.doy.zkh.length; a++) {
            this.mgv.eli[a] = this.doy.zkh[a]
        }
        if (this.mgv.hfs && this.mgv.qio > 0) {
            this.mgv.hfs.zcr.tew("history", "#ugf", [this.doy.kro])
        }
        this.mgv.edj = (this.doy.tij > this.mgv.tij);
        this.mgv.idf = this.doy.idf;
        this.mgv.jnr = this.doy.jnr;
        this.mgv.mdh = this.doy.mdh;
        this.mgv.tij = this.doy.tij;
        this.mgv.oqo = this.doy.tij;
        this.mgv.wew = this.doy.wew;
        this.zrm();
        this.mgv.gwj();
        this.mgv.oay(this.doy.kda)
    };
    this.ftn = function() {
        this.mgv.lpe = this.doy.kml;
        this.mgv.lzu = this.doy.xsv;
        this.mgv.mav = this.doy.bge;
        this.mgv.bex = this.doy.bex;
        this.mgv.tss = this.doy.tss;
        this.mgv.cwv = this.doy.oub;
        this.mgv.qio = this.doy.qio;
        for (var a = 0; a < this.doy.zkh.length; a++) {
            this.mgv.eli[a] = this.doy.zkh[a]
        }
        this.mgv.edj = (this.doy.tij > this.mgv.tij);
        this.mgv.idf = this.doy.idf;
        this.mgv.jnr = this.doy.jnr;
        this.mgv.mdh = this.doy.mdh;
        this.mgv.tij = this.doy.tij;
        this.mgv.oqo = this.doy.tij;
        this.mgv.wew = this.doy.wew;
        this.zrm();
        this.mgv.mup();
        this.mgv.oay(this.doy.kda)
    };
    this.zrm = function() {
        this.mgv.pin = this.doy.pin;
        this.mgv.mdi = this.doy.mdi;
        this.mgv.wao = this.doy.wao;
        this.mgv.nto = this.doy.nto;
        this.mgv.hcd = this.doy.hcd;
        this.mgv.hhv = this.doy.hhv;
        if (this.mgv.nto > 0 && this.mgv.wao < this.mgv.nto) {
            this.mgv.cwv = this.doy.pal
        }
    };
    this.odq = function() {
        return false
    }
}
dxg.prototype = new tjm;

function bhl() {
    var a = this;
    this.yta = false;
    this.cex = -1;
    this.gpe = 0;
    this.oyu = null;
    this.mlt = 3;
    this.rdc = 0;
    this.wwb = null;
    this.kql = null;
    this.esh = false;
    this.mti = false;
    this.xya = false;
    this.fye = [];
    this.jlp = null;
    this.aqm = false;
    this.wyq = [];
    this.unn = false;
    this.ivt = null;
    this.nwu = null;
    this.wmi = 0;
    this.wue = 0;
    this._y = 0;
    this._d = 0;
    this.ivs = 0;
    this.spr = 4;
    this.qmg = 2;
    this.ktz = 9;
    this.dmn = true;
    this.scq = 0;
    this.ybg = -1;
    this.rsp = 0;
    this.tlo = -1;
    this.ait = -1;
    this.eps = -1;
    this.sur = false;
    this.cno = [];
    this.fpp = 0;
    this.sjc = 0;
    this.xvj = 0;
    this.rju = 89;
    this.ttl = 0;
    this.ozi = 0;
    this.hqj = null;
    this.diz = null;
    this.pjz = 0;
    this.wkf = 0;
    this.lfk = [];
    this.vyi = [];
    this.wwz = [];
    this.afs = [];
    this.stb = [];
    this.xpk = function(f, j, h, c, b, d, g, e) {
        bhl.prototype.xpk.call(this, f, j, h);
        this.mlt = d;
        this.scq = this.height / this.mlt;
        this.oyu = b;
        this.kql = g;
        this.wue = e;
        this.wmi = Math.round(c);
        this.wwb = [];
        this.rdc = 0;
        this.ivs = 0;
        this.ktz = Math.round(this.wmi / 20);
        this.spr = Math.round(this.wmi / 12);
        this.qmg = Math.round(this.wmi / 2);
        this.wyq.length = 0
    };
    this.gmo = function(b) {
        try {
            this.ivt = b.gmz;
            this.nwu = b.eer
        } catch (c) {
            console.error(c)
        }
    };
    this.gae = function(c, b) {
        bhl.prototype.gae.call(this, c);
        try {
            this.wmi = Math.round(b);
            this.ktz = Math.round(this.wmi / 20);
            this.spr = Math.round(this.wmi / 12);
            this.qmg = Math.round(this.wmi / 2);
            this._y = this.y + (this.mlt - 1) * this.scq
        } catch (d) {
            console.error(d)
        }
    };
    this.nyv = function(b, e) {
        var d = b - this.x - ((this.parent.vnd()) ? this.parent.hue.vrv.mom.x : 0),
            c = e - this.y - ((this.parent.vnd()) ? this.parent.hue.vrv.mom.y : 0);
        if (d >= 0 && d <= this.width && c >= 0 && c <= this.height) {
            if (this.parent.ctg && this.parent.ukq && !this.parent.rpn && !this.yta && this.parent.pku()) {
                this.ton()
            } else {
                if (!this.parent.ctg) {
                    if (tvj.wxo.value43) {
                        if (this.parent.emh()) {
                            this.parent.tud();
                            if (this.parent.ljg) {
                                this.parent.ljg.zcr.knk("buttons", "#che", [true])
                            }
                        }
                    } else {
                        if (this.unn) {
                            this.ybg = c;
                            this.rsp = 0;
                            this.parent.awf();
                            this.parent.lfg();
                            this.parent.exj()
                        }
                    }
                }
            }
            return true
        }
        return false
    };
    this.hxa = function() {
        if (this.ybg >= 0) {
            this.bpe();
            return true
        }
        return false
    };
    this.awi = function(b, f, c) {
        var e = b - this.x - ((this.parent.vnd()) ? this.parent.hue.vrv.mom.x : 0),
            d = f - this.y - ((this.parent.vnd()) ? this.parent.hue.vrv.mom.y : 0);
        if (this.ybg >= 0) {
            if (e >= 0 && e <= this.width && d >= 0 && d <= this.height) {
                if (d > this.ybg) {
                    this.ttl = uhk(this.yii)
                } else {
                    if (d < this.ybg) {
                        this.ttl = uhk(this.gqa)
                    }
                }
                this.ybg = d;
                if (c) {
                    clearTimeout(this.ozi);
                    this.ozi = setTimeout(this.bpe, 500)
                }
                return true
            } else {
                this.bpe();
                return true
            }
        }
        return false
    };
    this.mdb = function() {
        var g = 0,
            h = 0,
            d = 0;
        if (!this.dse() || !this.parent.kez()) {
            return
        }
        if (this.rdc >= 0) {
            this.context2D.save();
            if (this.parent.uzy === false) {
                this.context2D.beginPath();
                this.context2D.rect(this.x, this.y, this.width, this.height);
                this.context2D.closePath();
                this.context2D.clip()
            }
            if (this.diz != null) {
                this.context2D.drawImage(this.diz, this.x + this.pjz, this.y + this.wkf, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            for (var f = 0, b = this.vyi.length; f < b; f++) {
                if (this.vyi[f]) {
                    this.context2D.drawImage(this.vyi[f].ifr, this.vyi[f].vgm * this.width, 0, this.width, this.vyi[f].ifr.height, this.x, this.y + f * this.scq, this.width, this.vyi[f].ifr.height)
                }
            }
            g = this._y - this.height + this.rsp;
            for (var f = 0; f < this.mlt + 1; f++) {
                h = this.rdc + f;
                d = this.wwb[h];
                try {
                    if (this.xya === false) {
                        this.context2D.drawImage(this.oyu[d], this.x, g)
                    } else {
                        this.context2D.drawImage(this.fye[d], this.x, g)
                    }
                } catch (k) {
                    if (!this.parent.uli) {
                        console.error("can not display image " + this.oyu.length + "" + d + "" + h + "" + this.wwb.length + "" + this.wwb)
                    }
                }
                g += this.scq
            }
            g = this._y - this.height;
            for (var f = 0; f < this.mlt + 1; f++) {
                h = this.rdc + f;
                d = this.wwb[h];
                try {
                    for (var c = 0, b = this.cno.length; c < b; c++) {
                        if (this.cno[c] == d && this.lfk[d] && (this.lfk[d].qlk || !this.lfk[d].uqw)) {
                            this.context2D.drawImage(this.lfk[d].ifr, this.lfk[d].vgm * this.width, 0, this.width, this.lfk[d].ifr.height, this.x, g + (this.scq - this.lfk[d].ifr.height) / 2, this.width, this.lfk[d].ifr.height);
                            break
                        }
                    }
                } catch (k) {
                    if (!this.parent.uli) {
                        console.error("can not display image " + this.lfk.length + "" + d + "" + h + "" + this.wwb.length + "" + this.wwb)
                    }
                }
                g += this.scq
            }
            for (var f = 0, b = this.wyq.length; f < b; f++) {
                if (this.wyq[f]) {
                    this.context2D.drawImage(this.wyq[f], this.x, this.y + f * this.scq)
                }
            }
            for (var f = 0, b = this.wwz.length; f < b; f++) {
                if (this.wwz[f]) {
                    this.context2D.drawImage(this.wwz[f].ifr, this.wwz[f].vgm * this.width, 0, this.width, this.wwz[f].ifr.height, this.x, this.y + f * this.scq, this.width, this.wwz[f].ifr.height)
                }
            }
            if (this.esh) {
                this.context2D.fillStyle = this.ivt;
                this.context2D.fillRect(this.x, this.y, this.width, this.height)
            }
            if (this.mti) {
                this.context2D.fillStyle = this.nwu;
                this.context2D.fillRect(this.x, this.y, this.width, this.height)
            }
            if (this.hqj != null) {
                this.context2D.drawImage(this.hqj, this.x, this.y)
            }
            this.context2D.restore();
            if (this.uek && this.gvg) {
                this.uek.drawImage(this.gvg, this.x, this.y)
            }
        }
    };
    this.jvo = function(b) {
        this.ait = -1;
        this.eps = -1;
        this.gpe = b;
        this.yta = false;
        this.tlo = -1;
        this.rdc = 0;
        this.dmn = true;
        this.cex = -1;
        this.wwb.length = this.wue;
        for (var c = 0; c <= this.mlt; c++) {
            this.wwb[this.wwb.length - 1 - this.mlt + c] = this.wwb[c]
        }
        this.rdc = this.wwb.length - 1 - this.mlt;
        this.dmn = true;
        this.app(false)
    };
    this.brr = function(d, f) {
        for (var b = 0; b < this.wue; b++) {
            if (b < this.kql.length) {
                this.wwb[b] = this.kql[b]
            } else {
                var c = b % this.kql.length;
                this.wwb[b] = this.kql[c]
            }
        }
        if (f) {
            var e = (this.mlt > 1) ? d - 2 : d - 1;
            if (e < 0) {
                e = this.kql.length + e
            }
            for (var b = 0; b <= this.mlt; b++) {
                this.wwb[b] = this.kql[e];
                e += 1;
                if (e == this.kql.length) {
                    e = e - this.kql.length
                }
            }
        }
        this.rdc = 0;
        this._y = this.y + (this.mlt - 1) * this.scq
    };
    this.ton = function() {
        this.aqm = true;
        if (this.rdc > this.mlt) {
            var c = this.rdc;
            var d = this.mlt;
            for (var b = 0; b <= this.mlt; b++) {
                this.wwb[d + b + 1] = this.wwb[c + b]
            }
            this.rdc = this.mlt + 1
        }
    };
    this.qxi = function() {
        this.rdc = 0;
        this.tlo = 0;
        this.hcp()
    };
    this.yii = function() {
        if (a.rsp < a.scq / 4) {
            a.rsp = a.rsp + 2;
            if (a.parent.uzy === false) {
                a.mdb()
            } else {
                a.parent.stn()
            }
        }
    };
    this.gqa = function() {
        if (a.rsp > 0) {
            a.rsp = a.rsp - 2;
            if (a.parent.uzy === false) {
                a.mdb()
            } else {
                a.parent.stn()
            }
        }
    };
    this.bpe = function() {
        clearTimeout(a.ozi);
        a.parent.ljh();
        if (a.rsp > 0) {
            a.gqa();
            a.ttl = uhk(a.bpe)
        } else {
            a.jng()
        }
    };
    this.jng = function() {
        itn(this.ttl);
        this.ybg = -1;
        this.rsp = 0
    };
    this.pln = function(c) {
        if (this.rsp > 0) {
            this.rsp = 0
        }
        if (this.mlt === 1 && this.tlo < 0 && this.ait >= 0 && this._y === this.y + this.height - this.wmi) {
            this.dch(this.ait, this.eps, this.sur)
        }
        if (this.rdc >= 0) {
            if (this.rdc > 0) {
                if (!this.aqm || !this.parent.djd) {
                    this._y += this.wmi;
                    this._d += this.wmi
                } else {
                    this._y += (this.wmi + this.wmi / 2);
                    this._d += (this.wmi + this.wmi / 2)
                }
            } else {
                if (this.rdc == 0) {
                    if (this.tlo == -1) {
                        this.cex += 1;
                        this.rdc = this.gpe - 1 - this.mlt;
                        this._y += this.wmi;
                        this._d += this.wmi;
                        for (var b = 0; b <= this.mlt; b++) {
                            this.wwb[this.gpe - 1 - this.mlt + b] = this.wwb[b]
                        }
                    } else {
                        if (this.ivs < this.qmg && this.dmn) {
                            this._y += this.spr;
                            this.ivs += this.spr;
                            if (this.ivs >= this.qmg) {
                                this.dmn = false
                            }
                        } else {
                            if (this.ivs > 0 && !this.dmn) {
                                this._y -= this.ktz;
                                this.ivs -= this.ktz;
                                if (this.ivs <= 0) {
                                    this.yta = true;
                                    this.aqm = false;
                                    if (typeof this.fjy === "function") {
                                        this.fjy()
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this._d > this.scq - this.wmi && this.rdc > 0) {
                if (c && this.tlo >= 0) {
                    if (this.rdc == 1) {
                        if (typeof this.wbe === "function") {
                            this.wbe()
                        }
                        if (this.jlp) {
                            this.jlp.play()
                        }
                        if (!this.parent.ezp && !this.parent.cca) {
                            if (this.jag()) {
                                this.iyz()
                            }
                        }
                    }
                }
                this.rdc -= 1;
                this._d = 0;
                this._y = this.y + (this.mlt - 1) * this.scq
            }
        }
    };
    this.eoz = function(e, c, f) {
        for (var d = 0, b = this.wwz.length; d < b; d++) {
            if (this.wwz[d]) {
                if (this.wwz[d].put === false && this.wwz[d].vgm < this.wwz[d].eqs - 1) {
                    this.wwz[d].vgm += 1
                } else {
                    if (this.wwz[d].put === true && this.wwz[d].vgm > 0) {
                        this.wwz[d].vgm -= 1
                    } else {
                        if (this.wwz[d].loop === true) {
                            this.wwz[d].vgm = (this.wwz[d].put === false) ? 0 : this.wwz[d].eqs - 1
                        } else {
                            if (this.wwz[d].dwo === true) {
                                this.wwz[d] = null
                            }
                        }
                    }
                }
            }
        }
        if (f && f === true) {
            this.mdb()
        }
    };
    this.sdy = function() {
        for (var c = 0, b = this.wwz.length; c < b; c++) {
            if (this.wwz[c] && ((this.wwz[c].put === false && this.wwz[c].vgm < this.wwz[c].eqs - 1) || (this.wwz[c].put === true && this.wwz[c].vgm > 0))) {
                return true
            }
        }
        return false
    };
    this.czd = function(d) {
        for (var c = 0, b = this.vyi.length; c < b; c++) {
            if (this.vyi[c]) {
                if (this.vyi[c].put === false && this.vyi[c].vgm < this.vyi[c].eqs - 1) {
                    this.vyi[c].vgm += 1
                } else {
                    if (this.vyi[c].put === true && this.vyi[c].vgm > 0) {
                        this.vyi[c].vgm -= 1
                    } else {
                        if (this.vyi[c].loop === true) {
                            this.vyi[c].vgm = (this.vyi[c].put === false) ? 0 : this.vyi[c].eqs - 1
                        } else {
                            if (this.vyi[c].dwo === true) {
                                this.vyi[c] = null
                            }
                        }
                    }
                }
            }
        }
        if (d && d === true) {
            this.mdb()
        }
    };
    this.dxn = function() {
        for (var c = 0, b = this.vyi.length; c < b; c++) {
            if (this.vyi[c] && ((this.vyi[c].put === false && this.vyi[c].vgm < this.vyi[c].eqs - 1) || (this.vyi[c].put === true && this.vyi[c].vgm > 0))) {
                return true
            }
        }
        return false
    };
    this.tmy = function(d, c, b) {
        this.ait = d;
        this.eps = c;
        this.sur = b;
        if (this.mlt > 1) {
            this.dch(this.ait, this.eps, this.sur)
        }
    };
    this.dch = function(h, g, d) {
        var j = 0,
            c = 0,
            e = 0,
            b = [];
        this.cex = -1;
        this.tlo = h;
        j = (this.mlt > 1) ? this.tlo - 2 : this.tlo - 1;
        if (j < 0) {
            j = this.kql.length + j
        }
        c = (d === true) ? this.wwb.length + g : this.mlt + g + 1;
        for (var f = 0; f <= this.mlt; f++) {
            e = this.rdc + f;
            if (e >= this.wwb.length) {
                e = e - this.wwb.length
            }
            b[f] = this.wwb[e]
        }
        for (var f = 0; f < c; f++) {
            this.wwb[f] = this.kql[j];
            j += 1;
            if (j == this.kql.length) {
                j = j - this.kql.length
            }
        }
        this.rdc = this.mlt + g + 1;
        for (var f = 0; f <= this.mlt; f++) {
            this.wwb[this.rdc + f] = b[f]
        }
        this.app(true);
        this.ait = -1;
        this.eps = -1;
        this.sur = false
    };
    this.app = function(h) {
        var d = -1,
            m = -1,
            b = 0,
            n = true,
            e = false,
            l = 0,
            k = 0;
        if (this.afs.length > 0 && this.stb.length > 0) {
            if (h) {
                for (var g = 0; g < this.afs.length; g++) {
                    for (var f = 0; f < this.afs[g].length - 1; f++) {
                        if (this.wwb[this.mlt] == this.afs[g][f]) {
                            d = f;
                            m = g
                        }
                    }
                }
                if (m >= 0 && d >= 0 && d < this.afs[m].length - 1) {
                    if (this.mlt + this.afs[m].length - d - 1 < this.rdc) {
                        for (var g = d + 1, f = 1; g < this.afs[m].length; g++, f++) {
                            this.wwb[this.mlt + f] = this.afs[m][g]
                        }
                    }
                }
            }
            d = -1;
            m = -1;
            for (var g = 0; g < this.afs.length; g++) {
                for (var f = 1; f < this.afs[g].length; f++) {
                    if (this.wwb[this.rdc] == this.afs[g][f]) {
                        d = f;
                        m = g
                    }
                }
            }
            if (m >= 0 && d > 0) {
                if (this.rdc - d > this.mlt) {
                    for (var g = d - 1, f = 1; g >= 0; g--, f++) {
                        this.wwb[this.rdc - f] = this.afs[m][g]
                    }
                }
            }
            d = -1;
            m = -1;
            for (var g = 0; g < this.afs.length; g++) {
                for (var f = 0; f < this.afs[g].length; f++) {
                    if (this.wwb[this.rdc + this.mlt] == this.afs[g][f]) {
                        d = f;
                        m = g
                    }
                }
            }
            if (m >= 0 && d >= 0 && d < this.afs[m].length - 1) {
                if (!h) {
                    for (var g = d + 1; g < this.afs[m].length; g++) {
                        this.wwb[l++] = this.afs[m][g]
                    }
                } else {
                    if (this.rdc + this.mlt + this.afs[m].length - d - 1 < this.wwb.length) {
                        for (var g = d + 1, f = 1; g < this.afs[m].length; g++, f++) {
                            this.wwb[this.rdc + this.mlt + f] = this.afs[m][g]
                        }
                    }
                }
            }
            l = (h) ? this.mlt + 1 : l;
            k = (h) ? this.wwb.length : this.rdc;
            for (var c = l; c < k; c++) {
                if (h == false || (c < this.rdc || c > this.rdc + this.mlt)) {
                    d = -1;
                    m = -1;
                    for (var g = 0; g < this.afs.length; g++) {
                        for (var f = 0; f < this.afs[g].length; f++) {
                            if (this.wwb[c] == this.afs[g][f]) {
                                d = f;
                                m = g
                            }
                        }
                    }
                    if (m >= 0 && d >= 0) {
                        n = true;
                        b = 0;
                        for (var g = 0; g < this.afs[m].length && n; g++) {
                            if (this.wwb[c - d + g] != this.afs[m][g]) {
                                n = false
                            } else {
                                b++
                            }
                        }
                        if (n) {
                            c += this.afs[m].length - d - 1
                        } else {
                            if (b == 0) {
                                this.wwb[c] = this.stb[Math.floor(Math.random() * this.stb.length)]
                            } else {
                                if (b == this.afs[m].length - 1 && (c + b < this.rdc || c + b > this.rdc + this.mlt) && c + b < this.wwb.length) {
                                    e = false;
                                    for (var g = 0; g < this.afs.length && !e; g++) {
                                        for (var f = 0; f < this.afs[g].length && !e; f++) {
                                            if (this.wwb[c + b] == this.afs[g][f]) {
                                                e = true
                                            }
                                        }
                                    }
                                    if (!e) {
                                        this.wwb[c + b] = this.afs[m][this.afs[m].length - 1];
                                        c += b
                                    } else {
                                        this.wwb[c] = this.stb[Math.floor(Math.random() * this.stb.length)]
                                    }
                                } else {
                                    for (var o = 0; o < b; o++) {
                                        if (c + o < this.rdc || c + o > this.rdc + this.mlt) {
                                            this.wwb[c + o] = this.stb[Math.floor(Math.random() * this.stb.length)]
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
    this.vxc = function(b) {
        this.unn = b
    };
    this.skl = function() {
        return this.unn
    };
    this.jag = function() {
        for (var c = 0, b = this.cno.length; c < b; c++) {
            if (this.cno[c] >= 0) {
                return true
            }
        }
        return false
    };
    this.tcb = function(b) {
        this.cno = b
    };
    this.nhp = function(b) {
        return this.cno
    };
    this.iyz = function() {
        for (var d = 0, b = this.cno.length; d < b; d++) {
            var c = this.lfk[this.cno[d]];
            if (c) {
                c.qlk = true;
                c.mqb = c.loop;
                c.uqw = c.dwo
            }
        }
        if (this.parent.uzy === false) {
            this.mdb()
        } else {
            this.parent.stn()
        }
        this.xvj = 0;
        this.sjc = new Date().getTime();
        this.vdo()
    };
    this.hcp = function() {
        for (var c = 0, b = this.lfk.length; c < b; c++) {
            if (this.lfk[c]) {
                this.lfk[c].qlk = false
            }
        }
        clearTimeout(this.fpp)
    };
    this.tuf = function() {
        for (var c = 0, b = this.lfk.length; c < b; c++) {
            if (this.lfk[c]) {
                this.lfk[c].mqb = false
            }
        }
    };
    this.fyi = function() {
        for (var c = 0, b = this.lfk.length; c < b; c++) {
            if (this.lfk[c]) {
                this.lfk[c].uqw = true;
                this.lfk[c].vgm = 0
            }
        }
    };
    this.dpw = function() {
        for (var c = 0, b = this.lfk.length; c < b; c++) {
            if (this.lfk[c] && this.lfk[c].qlk) {
                return true
            }
        }
        return false
    };
    this.vdo = function() {
        var f = true,
            d = null;
        a.xvj++;
        for (var e = 0, b = a.cno.length; e < b; e++) {
            d = a.lfk[a.cno[e]];
            if (d && d.qlk) {
                d.vgm = (d.vgm < d.eqs - 1) ? d.vgm + 1 : (d.uqw) ? 0 : d.vgm;
                if ((d.vgm === 0 && d.mqb === false) || (d.vgm === d.eqs - 1 && d.uqw === false)) {
                    d.qlk = false
                }
                if (f === true && d.qlk === true) {
                    f = false
                }
            }
        }
        if (a.parent.uzy === false) {
            a.mdb()
        } else {
            a.parent.stn()
        }
        if (f === false) {
            var c = (a.xvj * a.rju - (new Date().getTime() - a.sjc));
            if (c < 2) {
                c = 0
            }
            a.fpp = setTimeout(a.vdo, c)
        } else {
            clearTimeout(a.fpp);
            a.parent.iyx()
        }
    };
    this.qky = function(d) {
        for (var c = 0, b = d.length; c < b; c++) {
            if (d[c]) {
                this.lfk[c] = {};
                this.lfk[c].ifr = d[c].ifr;
                this.lfk[c].loop = d[c].loop;
                this.lfk[c].dwo = d[c].dwo;
                this.lfk[c].eqs = this.lfk[c].ifr.width / this.width;
                this.lfk[c].vgm = 0;
                this.lfk[c].qlk = false;
                this.lfk[c].mqb = false;
                this.lfk[c].uqw = true
            }
        }
    };
    this.jlk = function(b, c, d) {
        this.diz = b;
        this.pjz = c;
        this.wkf = d
    };
    this.ohx = function(b) {
        this.hqj = b
    };
    this.fhx = function(f, e, b, d, c) {
        if (e == null || f < 0) {
            return
        }
        this.wwz[f] = {
            ifr: e,
            vgm: 0,
            eqs: e.width / this.width,
            loop: b,
            dwo: d,
            put: c
        }
    };
    this.hty = function() {
        return this.wwz
    };
    this.fsx = function(f, e, b, d, c) {
        if (e == null || f < 0) {
            return
        }
        this.vyi[f] = {
            ifr: e,
            vgm: 0,
            eqs: e.width / this.width,
            loop: b,
            dwo: d,
            put: c
        }
    };
    this.umr = function() {
        return this.vyi
    };
    this.ogu = function(g, c) {
        this.afs = [];
        this.stb = [];
        for (var f = 0, b = g.length; f < b; f++) {
            this.afs[f] = [];
            for (var e = 0, d = g[f].length; e < d; e++) {
                this.afs[f][e] = g[f][e]
            }
        }
        for (var f = 0, b = c.length; f < b; f++) {
            this.stb[f] = c[f]
        }
    };
    this.wbe = null;
    this.fjy = null
}
bhl.prototype = new kpu;
tvj.odd = {
    jef: {
        loy: 0,
        pgz: 1,
        zaa: 2,
        slx: 3,
        pro: 4,
        mui: 5,
        ogo: 6,
        knr: 7,
        dvt: 8,
        tex: 9,
        wsy: 10,
        wfl: 11,
        rey: 12,
        ubx: 13,
        zle: 14,
        ium: 15,
        zcx: 16,
        fox: 20,
        tqz: 21,
        wrb: 22,
        kzt: 23,
        uea: 24,
        xxw: 25,
        won: 30,
        fvu: 31,
        kta: 32,
        led: 33,
        gde: 68
    }
};

function rvy() {
    this.ion = null;
    this.zyy = null;
    this.qsl = null;
    this.ocd = null;
    this.nic = null;
    this.yet = [];
    this.ljg = null;
    this.bcy = null;
    this.bdk = null;
    this.hfs = null;
    this.qfx = null;
    this.ljx = null;
    this.ivp = null;
    this.vsv = null;
    this.mav = [];
    this.eli = [];
    this.qio = 0;
    this.aww = 1;
    this.cwv = 0;
    this.zjo = 1000;
    this.cbr = [];
    this.oxk = 0;
    this.lot = 0;
    this.tss = 10;
    this.bex = 0;
    this.rqk = 0;
    this.zkh = [];
    this.hwg = 0;
    this.poi = -1;
    this.lem = -1;
    this.gvw = -1;
    this.r1 = [];
    this.r2 = [];
    this.r3 = [];
    this.r4 = [];
    this.r5 = [];
    this.r6 = [];
    this.r7 = [];
    this.r8 = [];
    this.r9 = [];
    this.mic = [];
    this.xjl = [];
    this.phm = [];
    this.nce = [];
    this.blv = [];
    this.ucq = [];
    this.mvz = 3;
    this.uua = 5;
    this.cgs = [];
    this.lty = 1;
    this.wna = 1;
    this.nfu = 1;
    this.dkk = [];
    this.lzu = null;
    this.qzj = false;
    this.mdh = 0;
    this.wew = 1;
    this.tij = 0;
    this.oqo = 0;
    this.idf = 0;
    this.jnr = 0;
    this.yku = true;
    this.edj = false;
    this.ffg = false;
    this.cfr = false;
    this.qsy = false;
    this.yjp = false;
    this.jgi = false;
    this.url = 1;
    this.pvx = true;
    this.pin = "";
    this.jhg = false;
    this.gyw = false;
    this.yhb = false;
    this.bzv = true;
    this.kmp = false;
    this.nto = 0;
    this.wao = 0;
    this.hcd = 0;
    this.hhv = "";
    this.mdi = "";
    this.uxt = null;
    this.ezp = true;
    this.hxb = false;
    this.ctg = false;
    this.kep = 20;
    this.lqi = true;
    this.ukq = false;
    this.sdh = false;
    this.osx = [15, 20, 25, 30, 35];
    this.wxa = [8, 8, 8, 8, 8];
    this.mct = [0, 0, 0, 0, 0];
    this.blz = this.osx;
    this.juq = 16;
    this.yly = 16;
    this.cbp = this.juq;
    this.kli = 12;
    this.iph = 0;
    this.xpg = 0;
    this.oyu = [];
    this.djd = true;
    this.gkc = false;
    this.mwa = false;
    this.ngi = false;
    this.npo = true;
    this.gog = 0;
    this.tlw = 0;
    this.vfg = [];
    this.wvk = true;
    this.woe = false;
    this.fwn = false;
    this.mli = false;
    this.trh = false;
    this.ttm = false;
    this.vmm = 1;
    this.rrr = 400;
    this.mjs = 200;
    this.dpx = 100;
    this.yvx = true;
    this.bou = true;
    this.lrh = false;
    this.vus = [];
    this.oyp = 50;
    this.pih = null;
    this.gtk = null;
    this.zwh = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ];
    this.llx = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ];
    this.jlg = false;
    this.hkp = 0;
    this.vni = 0;
    this.waz = -1;
    this.crc = 0;
    this.axq = false;
    this.rjv = false;
    this.qzc = -1;
    this.red = false;
    this.nsr = true;
    this.zmx = 3;
    this.fid = false;
    this.aar = 0;
    this.gkz = true;
    this.nuw = 330;
    this.cvy = [];
    this.eke = null;
    this.jrb = null;
    this.aum = [
        [2, 2, 2, 2, 2],
        [1, 1, 1, 1, 1],
        [3, 3, 3, 3, 3],
        [1, 2, 3, 2, 1],
        [3, 2, 1, 2, 3]
    ];
    this.bos = [];
    this.zik = 1;
    this.hjm = 5;
    this.adb = 1;
    this.eew = 5;
    this.bng = true;
    this.mtd = 0;
    this.udr = 0;
    this.hoa = 30;
    this.zpb = 50;
    this.hoh = false;
    this.cam = 0;
    this.anm = 0;
    this.uiu = false;
    this.tdh = true;
    this.fpo = 0;
    this.ykw = 0;
    this.dwz = false;
    this.ahi = 0;
    this.bhc = false;
    this.nql = true;
    this.vij = false;
    this.fzw = false;
    this.wmr = null;
    this.rpn = false;
    this.xss = true;
    this.seb = 0;
    this.ypy = 0;
    this.aie = 0;
    this.ysh = 0;
    this.awx = true;
    this.kgn = null;
    this.bdg = false;
    this.gws = false;
    this.ilg = true;
    this.tql = "";
    this.gow = false;
    this.idl = 0;
    this.gih = 0;
    this.ajf = 0;
    this.yim = 0;
    this.dja = 0;
    this.id = 0;
    this.xve = 0;
    this.mbo = 0;
    this.jgv = 0;
    this.mhe = 0;
    this.tzu = 0;
    this.bwg = -1;
    this.ioa = 0;
    this.woa = 0;
    this.wuj = -1;
    this.kvf = 0;
    this.ebm = 0;
    this.dyo = -1;
    this.gwb = function() {
        var b = new vxq();
        b.xpk();
        return b
    };
    this.jhw = function() {
        this.ayv = new ijn()
    };
    this.udw = function() {
        this.lgx();
        var f = [];
        while (this.cwv < this.jsa()) {
            this.cwv++
        }
        var e = this.ggx(this.ffg);
        if (this.cwv > e) {
            var d = (e < 0) ? 0 : e;
            this.cwv = d
        }
        this.aww = this.cbr[this.cwv];
        this.zjo = this.zyd();
        this.nyx();
        this.oja();
        this.rzd();
        for (var c = 0, b = this.xbq.apw("symb"); c < b; c++) {
            this.oyu[c] = this.xbq.ire("symb" + c)
        }
        if (tvj.wxo.value38) {
            f[tvj.os.rzw] = "w";
            f[tvj.os.olq] = "l";
            f[tvj.os.gei] = "m";
            f[tvj.os.zag] = "i";
            f[tvj.os.wok] = "a";
            this.djd = tvj.wxo.value38[f[tvj.slh.rbf]]
        }
    };
    this.biu = function() {
        this.mot();
        this.gxi();
        this.wne();
        this.zca();
        this.mdd();
        this.nae();
        if (this.nql) {
            this.hmi()
        }
        if (this.hue.yvm) {
            this.esw();
            this.eme()
        }
        if (this.hue.mfd) {
            this.nuo();
            if (this.ccd()) {
                this.ite()
            }
        }
        if (this.hue.pmi) {
            this.rcb();
            if (!this.hue.rnr) {
                this.kte()
            }
        }
        if (this.hue.ixs) {
            this.htt()
        }
        if (this.uli) {
            this.vln()
        } else {
            this.sgf();
            if (this.hue.cjk) {
                this.zbv()
            }
            if (this.xsz()) {
                this.lhm()
            }
            if (this.okx()) {
                this.mgp()
            }
            this.aqs();
            if (this.gln() != null && !this.ojz()) {
                this.bxt(this.gln())
            }
        }
        if (!(this.uli && !this.bmf)) {
            this.ymr();
            this.mfm()
        }
        if (this.hue.rnr) {
            this.iny(this.gln())
        }
        this.ylb()
    };
    this.fcj = function() {
        if (!this.elf) {
            if (this.awy === false) {
                this.nme.style.marginTop = (-this.height / 2 + this.hsk()) + "px";
                this.nme.style.marginLeft = (-this.width / 2) + "px"
            } else {
                this.nme.style.left = "0px";
                this.nme.style.top = "0px";
                this.nme.style.marginTop = ((this.wnl - this.height) / 2 + this.hsk()) + "px";
                this.nme.style.marginLeft = ((this.bbo - this.width) / 2) + "px"
            }
            this.nme.style.width = (this.width > this.bbo) ? this.bbo + "px" : this.width + "px";
            this.nme.style.height = (this.height > this.wnl) ? this.wnl + "px" : this.height + "px";
            this.canvas.width = Math.round(this.width);
            this.canvas.height = Math.round(this.height);
            this.context2D = this.canvas.getContext("2d");
            this.qfx = document.createElement("canvas");
            this.qfx.width = this.hue.ggo.mom.width;
            this.qfx.height = this.hue.ggo.mom.height;
            this.ljx = this.qfx.getContext("2d");
            if (this.vnd() === true && typeof WebGL2D != "undefined") {
                try {
                    this.vrv = document.getElementById("canvas2");
                    this.vrv.width = Math.round(this.hue.vrv.mom.width);
                    this.vrv.height = Math.round(this.hue.vrv.mom.height);
                    WebGL2D.enable(this.vrv);
                    this.dlw = this.vrv.getContext("webgl-2d");
                    this.uzy = true;
                    this.ivp = document.createElement("canvas");
                    this.ivp.width = this.hue.ggo.mom.width;
                    this.ivp.height = this.hue.ggo.mom.height;
                    this.vsv = this.ivp.getContext("2d")
                } catch (b) {
                    this.vrv = null;
                    this.dlw = null;
                    this.uzy = false
                }
            }
            this.offsetLeft = this.nme.offsetLeft;
            this.offsetTop = this.nme.offsetTop;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.elf = true
        }
    };
    this.ylb = function() {};
    this.rcb = function() {
        rvy.prototype.rcb.call(this);
        var b = this.afx.mmc("topi");
        try {
            if (b) {
                if (tvj.wxo.value57 === tvj.ui.owg || this.gln() != null) {
                    b.ulx("language", this.xbq.ire("icon_l"), sessionStorage.sessionValue1, [tvj.language.EN, tvj.language.DE, tvj.language.RU, tvj.language.EE, tvj.language.ES, tvj.language.TR, tvj.language.CZ, tvj.language.GR, tvj.language.AT, tvj.language.US, tvj.language.BG, tvj.language.CO, tvj.language.MX, tvj.language.CL, tvj.language.VE, tvj.language.BR, tvj.language.GE, tvj.language.HU, tvj.language.RO, tvj.language.PT])
                }
                if (this.ojz() === false) {
                    b.kxj("help", new String("?"), true)
                }
                if (tvj.wxo.value27 && this.zvu) {
                    b.ulx("audio", this.xbq.ire("icon_a"), this.zyz[this.hwc], this.zyz);
                    if (this.cuv() === true) {
                        b.kxj("melody", this.xbq.ire("icon_m"), this.bzv)
                    }
                }
                if (((tvj.slh.evd) ? tvj.wxo.value51.m : tvj.wxo.value51.d) && tvj.slh.ddd()) {
                    b.kxj("fullscreen", this.xbq.ire("icon_f"), this.lzv)
                }
                if (tvj.wxo.value28 && this.xss) {
                    b.kxj("turbo", this.xbq.ire("icon_t"), this.rpn)
                }
                b.kxj("auto", this.xbq.ire("icon_as"), this.qsy);
                b.kxj("gamble", this.xbq.ire("icon_g"), this.fzw)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.kte = function() {
        rvy.prototype.kte.call(this);
        var c = this.afx.mmc("topb");
        try {
            if (c) {
                if ((tvj.wxo.value5.length > 1) && (tvj.wxo.value57 === tvj.ui.owg || this.gln() != null)) {
                    c.trn("language", this.language.language, this.wqp(tvj.wxo.value5[this.zqd]), this.ekh, this.ayv.language, 0, 1)
                }
                if (tvj.wxo.value27 && this.zvu) {
                    c.trn("audio", this.language.audio, this.xbq.ire("btn_a"), this.bmu, this.ayv.audio, this.hwc, this.zyz.length);
                    if (this.cuv() === true) {
                        c.trn("melody", this.language.bqj, this.xbq.ire("btn_mu"), this.yoz, this.ayv.moe, (this.bzv) ? 1 : 0, 2)
                    }
                }
                if (((tvj.slh.evd) ? tvj.wxo.value51.m : tvj.wxo.value51.d) && tvj.slh.ddd()) {
                    c.trn("fullscreen", this.language.lzv, this.xbq.ire("btn_f"), this.ryh, this.ayv.lzv, (this.lzv) ? 1 : 0, 2)
                }
                if (tvj.wxo.value28 && this.xss) {
                    c.trn("turbo", this.language.rpn, this.xbq.ire("btn_t"), this.vyz, this.ayv.rpn, (this.rpn) ? 1 : 0, 2)
                }
                c.ozf("help", this.language.qiq, this.xbq.ire("btn_p"), this.ilk, this.ayv.chk);
                if (this.mdi != "") {
                    c.ozf("rules", this.language.xrc, this.xbq.ire("btn_gr"), this.mbn, this.ayv.mlp)
                }
                if (tvj.wxo.value12 && !this.nwk()) {
                    c.ozf("history", this.language.koc, this.xbq.ire("btn_h"), this.xib, this.ayv.koc)
                }
                if (tvj.wxo.value36 && !this.nwk()) {
                    c.ozf("statistic", this.language.qjx, this.xbq.ire("btn_st"), this.qhm, this.ayv.qjx)
                }
                c.znx()
            }
        } catch (b) {
            console.error(b)
        }
    };
    this.iny = function(b) {
        rvy.prototype.iny.call(this, b);
        var d = this.afx.mmc("settings"),
            e = "",
            c = 0;
        if (d) {
            if (tvj.wxo.value5.length > 1) {
                c++;
                d.trn("language", this.language.language, this.wqp(tvj.wxo.value5[this.zqd]), this.ekh, 0, 1)
            }
            if (tvj.wxo.value27 && this.zvu) {
                c++;
                d.trn("audio", this.language.audio, this.xbq.ire("btn_a"), this.bmu, this.hwc, this.zyz.length);
                if (this.cuv() === true) {
                    c++;
                    d.trn("melody", this.language.bqj, this.xbq.ire("btn_mu"), this.yoz, (this.bzv) ? 1 : 0, 2)
                }
            }
            if (((tvj.slh.evd) ? tvj.wxo.value51.m : tvj.wxo.value51.d) && tvj.slh.ddd()) {
                c++;
                d.trn("fullscreen", this.language.lzv, this.xbq.ire("btn_f"), this.ryh, (this.lzv) ? 1 : 0, 2)
            }
            if (tvj.wxo.value28 && this.xss && c < 4) {
                d.trn("turbo", this.language.rpn, this.xbq.ire("btn_t"), this.vyz, (this.rpn) ? 1 : 0, 2)
            }
            d.trn("gamble", this.language.fzw, this.xbq.ire("btn_g"), this.qch, (this.fzw) ? 1 : 0, 2);
            if (this.yna[this.kby] === tvj.pym.kmv) {
                e = this.language.left
            } else {
                if (this.yna[this.kby] === tvj.pym.nxg) {
                    e = this.language.isz
                } else {
                    if (this.yna[this.kby] === tvj.pym.wio) {
                        e = this.language.cmd
                    }
                }
            }
            d.trn("adjustment", e, this.xbq.ire("btn_l"), this.ypl, (this.jgb === tvj.hue.jif) ? 0 : 1, 2);
            d.kfj("help", this.language.chk, this.xbq.ire("btn_p"), this.ilk);
            if (this.mdi != "") {
                d.kfj("rules", this.language.qmt, this.xbq.ire("btn_gr"), this.mbn)
            }
            if (tvj.wxo.value12 && !this.nwk()) {
                d.kfj("history", this.language.koc, this.xbq.ire("btn_h"), this.xib)
            }
            if (tvj.wxo.value36 && !this.nwk()) {
                d.kfj("statistic", this.language.qjx, this.xbq.ire("btn_st"), this.qhm)
            }
            d.fvg = this.ccd();
            d.zfl(this.hue.dmx);
            d.sqc(this.hue.dmx);
            d.gmo(this.style.dmx);
            d.msr(this.language, true)
        }
    };
    this.mot = function() {
        var b = (this.uli && this.okj) ? this.hue.ciq : this.hue.qus;
        this.ljg = new drg();
        this.ljg.parent = this;
        this.ljg.awx = this.awx;
        this.ljg.xpk(b.mom, null, this.context2D);
        this.ljg.zfl(b, this.style.qus);
        this.ljg.prs(this.pih, 0);
        this.ljg.prs(this.gtk, 1)
    };
    this.nae = function() {};
    this.sgf = function() {};
    this.mfm = function() {
        this.bdk.tuz(this.hue.yyz, this.style.yyz, this.xbq.ire("btn_s"))
    };
    this.kjk = function() {};
    this.ytg = function() {};
    this.zbv = function() {
        var b = new ofv();
        b.xpk(this.hue.top.mom, null, this.context2D);
        b.parent = this;
        this.afx.zxg("tops", b)
    };
    this.wne = function() {
        this.cvy = []
    };
    this.gxi = function() {
        var e = [],
            c = (this.lpe == tvj.odd.jef.ogo || this.lpe == tvj.odd.jef.wsy || this.lpe == tvj.odd.jef.wfl || this.lpe == tvj.odd.jef.rey || this.lpe == tvj.odd.jef.zle) ? true : false;
        if (c) {
            if (this.yku) {
                e = this.lzu
            } else {
                e = this.mav
            }
        } else {
            e = this.mav
        }
        this.ion = new bhl();
        this.zyy = new bhl();
        this.qsl = new bhl();
        this.ocd = new bhl();
        this.nic = new bhl();
        this.ion.jlp = this.xbq.xhq("stop1");
        this.zyy.jlp = this.xbq.xhq("stop2");
        this.qsl.jlp = this.xbq.xhq("stop1");
        if (this.ocd != null) {
            this.ocd.jlp = this.xbq.xhq("stop2")
        }
        if (this.nic != null) {
            this.nic.jlp = this.xbq.xhq("stop1")
        }
        if (this.uzy === false) {
            this.ion.xpk(this.hue.ion.mom, this.context2D, null, (this.djd) ? this.hue.ion.jsi : this.hue.ion.avu, this.oyu, this.mvz, this.r1, this.blz[0])
        } else {
            this.ion.xpk(this.hue.ion.ylh, this.dlw, null, (this.djd) ? this.hue.ion.jsi : this.hue.ion.avu, this.oyu, this.mvz, this.r1, this.blz[0])
        }
        this.ion.brr(e[0], true);
        if (this.uzy === false) {
            this.zyy.xpk(this.hue.zyy.mom, this.context2D, null, (this.djd) ? this.hue.zyy.jsi : this.hue.zyy.avu, this.oyu, this.mvz, this.r2, this.blz[1])
        } else {
            this.zyy.xpk(this.hue.zyy.ylh, this.dlw, null, (this.djd) ? this.hue.zyy.jsi : this.hue.zyy.avu, this.oyu, this.mvz, this.r2, this.blz[1])
        }
        this.zyy.brr(e[1], true);
        if (this.uzy === false) {
            this.qsl.xpk(this.hue.qsl.mom, this.context2D, null, (this.djd) ? this.hue.qsl.jsi : this.hue.qsl.avu, this.oyu, this.mvz, this.r3, this.blz[2])
        } else {
            this.qsl.xpk(this.hue.qsl.ylh, this.dlw, null, (this.djd) ? this.hue.qsl.jsi : this.hue.qsl.avu, this.oyu, this.mvz, this.r3, this.blz[2])
        }
        this.qsl.brr(e[2], true);
        if (this.uzy === false) {
            this.ocd.xpk(this.hue.ocd.mom, this.context2D, null, (this.djd) ? this.hue.ocd.jsi : this.hue.ocd.avu, this.oyu, this.mvz, this.r4, this.blz[3])
        } else {
            this.ocd.xpk(this.hue.ocd.ylh, this.dlw, null, (this.djd) ? this.hue.ocd.jsi : this.hue.ocd.avu, this.oyu, this.mvz, this.r4, this.blz[3])
        }
        this.ocd.brr(e[3], true);
        if (this.uzy === false) {
            this.nic.xpk(this.hue.nic.mom, this.context2D, null, (this.djd) ? this.hue.nic.jsi : this.hue.nic.avu, this.oyu, this.mvz, this.r5, this.blz[4])
        } else {
            this.nic.xpk(this.hue.nic.ylh, this.dlw, null, (this.djd) ? this.hue.nic.jsi : this.hue.nic.avu, this.oyu, this.mvz, this.r5, this.blz[4])
        }
        this.nic.brr(e[4], true);
        this.yet = [this.ion, this.zyy, this.qsl, this.ocd, this.nic];
        this.uxt = [true, true, true, true, true];
        for (var d = 0, b = this.yet.length; d < b; d++) {
            this.yet[d].parent = this;
            this.yet[d].gmo(this.style.kql);
            this.yet[d].ohx(this.xbq.ire("reelfront"))
        }
    };
    this.ymr = function() {
        this.bdk = new mtt();
        this.bdk.xpk(this.hue.yyz.mom, null, this.context2D);
        this.bdk.parent = this;
        this.bdk.pva(false);
        this.bdk.sqc(this.hue.yyz);
        this.bdk.gmo(this.style.yyz)
    };
    this.hmi = function() {
        var c = this.hue.fzw,
            b = this.xbq.ire("g_back");
        if (this.uli && this.okj && this.style.cdg.fzp) {
            c = this.hue.mmy;
            b = this.xbq.ire("m_g_back")
        }
        this.hfs = new rzr();
        this.hfs.parent = this;
        this.hfs.xpk(c.mom, null, this.context2D);
        this.hfs.ifr = b;
        this.hfs.zfl(c);
        this.hfs.gmo(this.style.fzw);
        this.hfs.cvu();
        this.hfs.prs(this.wmr, 0);
        this.hfs.tzp(false)
    };
    this.zca = function() {};
    this.mdd = function() {
        this.bcy = this.mzm();
        this.bcy.parent = this;
        this.bcy.eke = this.eke;
        this.bcy.tic = this.lso;
        this.bcy.aum = this.aum;
        this.bcy.jrb = this.jrb;
        this.bcy.zmx = this.zmx;
        this.bcy.mix = this.nuw;
        this.bcy.gjz = this.cvy;
        this.bcy.cvp = this.jlg;
        this.bcy.pqm = (this.axq == true || this.rjv == true);
        this.bcy.gsh = this.gkz;
        this.bcy.yvx = this.yvx;
        this.bcy.sqc(this.hue.ayn);
        this.bcy.gmo(this.style.ayn)
    };
    this.nuo = function() {
        var b = new lss();
        b.xpk(this.hue.ouh.mom, null, this.context2D);
        b.parent = this;
        b.szr = this.language.aww;
        b.kgs = this.jis;
        b.cmx = this.ayv.wtg.woo;
        b.hfu = this.ayv.fzt.woo;
        b.eky = this.xbq.ire("effect");
        b.sqc(this.hue.ouh);
        b.gmo(this.style.fvj);
        b.udw(this.cbr, this.jsa(), this.ggx(false));
        b.pai(this.cwv, false);
        b.tzp(false);
        this.afx.zxg("betsel", b)
    };
    this.ite = function() {
        this.dkk = [];
        for (var b = this.lty; b <= this.wna;) {
            this.dkk.push(b);
            b += this.nfu
        }
        var c = new ons();
        c.xpk(this.hue.dfk.mom, null, this.context2D);
        c.parent = this;
        c.szr = this.language.tss;
        c.kgs = this.pqj;
        c.cmx = this.ayv.tly.woo;
        c.hfu = this.ayv.hnr.woo;
        c.eky = this.xbq.ire("effect");
        c.sqc(this.hue.dfk);
        c.gmo(this.style.fvj);
        c.udw(this.dkk, 0, this.dkk.length - 1);
        c.cab(this.tss, false);
        c.tzp(false);
        this.afx.zxg("linesel", c)
    };
    this.htt = function() {
        this.afx.zxg("llinep", this.yhr(this.hue.nul.mom.x, this.hue.nul.mom.y, this.xbq.ire("winlines"), this.zik, this.hjm, this.hue.nul));
        this.afx.zxg("rlinep", this.yhr(this.hue.mul.mom.x, this.hue.mul.mom.y, this.xbq.ire("winlines"), this.adb, this.eew, this.hue.mul));
        this.afx.tew("llinep", "#qei", [this.tss]);
        this.afx.tew("rlinep", "#qei", [this.tss])
    };
    this.esw = function() {
        var c = new hzp(),
            b = this.xbq.ire("m_win");
        if (this.uli && this.okj && this.style.cdg.fzp) {
            b = this.xbq.ire("m_m_win")
        }
        c.xpk(this.hue.soa.mom, this.context2D, null, b, "");
        c.parent = this;
        c.sqc(this.hue.soa);
        c.gmo(this.style.soa);
        c.tzp(false);
        this.afx.zxg("winp", c)
    };
    this.eme = function() {};
    this.vln = function() {
        var b = new vtv();
        b.xpk(this.hue.koc.mom, null, this.context2D);
        b.parent = this;
        b.zfl(this.hue.koc);
        b.gmo(this.style.koc);
        this.afx.zxg("history", b)
    };
    this.yhr = function(b, h, d, g, c, e) {
        var f = new gni();
        f.xpk(new mfo(b, h, 0, 0), this.context2D);
        f.frm = this.bos;
        f.parent = this;
        f.etm = g;
        f.kkh = c;
        f.sqc(e);
        f.nkk(d);
        f.tzp(true);
        return f
    };
    this.mzm = function() {
        var e = [];
        for (var d = 0, b = this.xbq.apw("symb"); d < b; d++) {
            e[d] = this.xbq.ire("symb" + d)
        }
        var c = new elm();
        c.xpk(this.hue.ayn.mom, null, this.context2D);
        c.sgx = e;
        c.sam = this.xbq.ire("reelfront");
        c.tzp(false);
        return c
    };
    this.jlo = function() {
        if (this.mwa === true) {
            for (var c = 0, b = this.yet.length; c < b; c++) {
                if (!this.uzy) {
                    this.yet[c].jlk(this.qfx, this.hue.ggo.yuo, this.hue.ggo.ibu)
                }
            }
            if (this.bcy) {
                this.bcy.jlk(this.qfx, this.hue.ggo.yuo + this.bcy.x, this.hue.ggo.ibu + this.bcy.y)
            }
        }
        if (this.ljg) {
            this.ljg.jlk(this.qfx, this.hue.ggo.yuo, this.hue.ggo.ibu)
        }
    };
    this.ybw = function(d, c, b) {
        this.bhu = true;
        this.lpe = d;
        this.kda = b;
        clearInterval(this.zee);
        if (this.zvu) {
            if (this.xbq.xjm === true) {
                this.txo(this.zyz[this.hwc])
            } else {
                this.wzm((this.zyz[this.hwc] === 0))
            }
        }
        if (this.cca === true) {
            this.zgp = true
        }
        this.udw();
        this.biu();
        this.fbb();
        if (this.hfs) {
            this.hfs.zcr.tew("history", "#ugf", [c])
        }
        this.bip();
        window.uhk(this.slp)
    };
    this.slp = function() {
        tvj.cdg.oay(tvj.cdg.kda);
        tvj.cdg.vae = true;
        tvj.cdg.equ();
        tvj.cdg.ppy();
        tvj.cdg.jlo();
        tvj.cdg.mdb();
        if (tvj.cdg.cca === true) {
            tvj.cdg.zwr(true)
        }
        if (tvj.slh.rbf === tvj.os.wok && tvj.slh.nqk !== tvj.aox.kzq) {
            tvj.cdg.cdw(tvj.exp.ouy)
        } else {
            if (tvj.cdg.nto > 0) {
                if (tvj.cdg.wao === 0) {
                    tvj.cdg.cdw(tvj.exp.sch)
                } else {
                    if (tvj.cdg.wao < tvj.cdg.nto) {
                        tvj.cdg.cdw(tvj.exp.kui)
                    }
                }
            } else {
                tvj.cdg.kwn(tvj.cdg.lpe)
            }
        }
        if (tvj.wxo.value37 && !tvj.cdg.nwk()) {
            tvj.cdg.vrr()
        }
        if (tvj.cdg.okx()) {
            setTimeout(tvj.cdg.mdb, 20)
        }
    };
    this.iub = function() {
        this.vdt = new dxg().xpk(this, tvj.wxo.value6)
    };
    this.jxm = function() {
        this.vdt = new iqk().xpk(this, tvj.wxo.value6)
    };
    this.nyv = function(q) {
        if (q.preventDefault) {
        //    q.preventDefault()
        }
        if (q.stopPropagation) {
            q.stopPropagation()
        }
        if (this.zgp) {
            return
        }
        var k = 0,
            j = 0,
            u = false,
            l = false,
            f = false,
            g = this.afx.mmc("msg"),
            v = this.afx.mmc("stats"),
            t = this.afx.mmc("topb"),
            c = this.afx.mmc("topi"),
            d = this.afx.mmc("betsel"),
            n = this.afx.mmc("linesel"),
            o = this.afx.mmc("llinep"),
            w = this.afx.mmc("rlinep"),
            z = this.afx.mmc("finfop"),
            p = this.afx.mmc("finfoc"),
            m = this.afx.mmc("autop"),
            b = this.afx.mmc("settings"),
            h = this.afx.mmc("jwp");
        if (q.touches) {
            var e = q.touches[0];
            u = true;
            if (!this.glk) {
                k = e.pageX - this.offsetLeft;
                j = e.pageY - this.offsetTop
            } else {
                k = Math.round((e.pageX - this.offsetLeft) / this.igm);
                j = Math.round((e.pageY - this.offsetTop) / this.hln)
            }
        } else {
            if (q.which != 1) {
                return
            }
            if (!this.glk) {
                k = q.pageX - this.offsetLeft;
                j = q.pageY - this.offsetTop
            } else {
                k = Math.round((q.pageX - this.offsetLeft) / this.igm);
                j = Math.round((q.pageY - this.offsetTop) / this.hln)
            }
        }
        if (g && g.dse()) {
            if (g.nyv(k, j)) {
                return
            }
        }
        if (m && m.dse()) {
            if (m.nyv(k, j)) {
                return
            }
        }
        if (t && t.dse()) {
            if (t.nyv(k, j)) {
                clearTimeout(this.kvf);
                return
            } else {
                f = true
            }
        }
        if (d) {
            if (d.dse()) {
                if (d.nyv(k, j, u)) {
                    clearTimeout(this.kvf);
                    return
                } else {
                    l = true
                }
            }
        }
        if (n) {
            if (n.dse()) {
                if (n.nyv(k, j, u)) {
                    clearTimeout(this.kvf);
                    return
                } else {
                    l = true
                }
            }
        }
        if (f) {
            this.zfy(this.ljg.uwe(k, j, null));
            return
        } else {
            if (l) {
                if ((d && d.skl()) && ((n && n.skl()) || !n)) {
                    this.xcz(this.ljg.uwe(k, j, null))
                }
                return
            }
        }
        if (this.ccd() && o && w) {
            if (o.nyv(k, j, l)) {
                return
            } else {
                if (w.nyv(k, j, l)) {
                    return
                }
            }
        }
        if (z) {
            if (z.nyv(k, j)) {
                return
            }
        }
        if (p) {
            if (p.nyv(k, j)) {
                return
            }
        }
        if (b && b.dse()) {
            if (b.nyv(k, j)) {
                return
            }
        }
        if (c) {
            if (c.nyv(k, j, u)) {
                return
            }
        }
        if (v && v.dse()) {
            if (v.nyv(k, j)) {
                return
            }
        }
        if (this.bdk && this.bdk.dse()) {
            if (this.bdk.nyv(k, j)) {
                return
            }
        }
        if (this.hfs && this.hfs.dse()) {
            if (this.hfs.nyv(k, j)) {
                return
            }
        }
        if (h) {
            if (h.nyv(k, j)) {
                return
            }
        }
        if (this.ljg) {
            if (this.ljg.nyv(k, j, l)) {
                return
            }
        }
        for (var r = 0, s = this.yet.length; r < s; r++) {
            if (this.yet[r].nyv(k, j)) {
                return
            }
        }
    };
    this.hxa = function(c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.zgp) {
            return
        }
        var f = this.afx.mmc("msg"),
            k = this.afx.mmc("topb"),
            j = this.afx.mmc("autop"),
            e = this.afx.mmc("settings"),
            b = this.afx.mmc("betsel"),
            d = this.afx.mmc("linesel");
        if (f && f.dse()) {
            if (f.hxa()) {
                return
            }
        }
        if (j && j.dse()) {
            if (j.hxa()) {
                return
            }
        }
        if (b) {
            if (b.hxa()) {
                return
            }
        }
        if (d) {
            if (d.hxa()) {
                return
            }
        }
        if (this.bdk && this.bdk.dse()) {
            if (this.bdk.hxa()) {
                return
            }
        }
        if (this.hfs && this.hfs.dse()) {
            if (this.hfs.hxa()) {
                return
            }
        }
        if (this.ljg) {
            if (this.ljg.hxa()) {
                return
            }
        }
        if (k) {
            if (k.hxa()) {
                return
            }
        }
        if (e) {
            if (e.hxa()) {
                return
            }
        }
        for (var g = 0, h = this.yet.length; g < h; g++) {
            if (this.yet[g].hxa()) {
                return
            }
        }
    };
    this.qgb = function(c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.zgp) {
            return
        }
        var k = false,
            f = false,
            e = this.afx.mmc("msg"),
            l = this.afx.mmc("topb"),
            b = this.afx.mmc("betsel"),
            d = this.afx.mmc("linesel"),
            h = this.afx.mmc("finfop"),
            j = this.afx.mmc("finfoc"),
            g = this.afx.mmc("autop");
        if (e && e.dse()) {
            if (e.qgb(c.keyCode)) {
                return
            }
        }
        if (g && g.dse()) {
            if (g.qgb(c.keyCode)) {
                return
            }
        }
        if (l) {
            if (l.qgb(c.keyCode)) {
                clearTimeout(this.kvf);
                return
            } else {
                if (l.dse() && l.skl()) {
                    f = true
                }
            }
        }
        if (h) {
            if (h.qgb()) {
                return
            }
        }
        if (j) {
            if (j.qgb(c.keyCode)) {
                return
            }
        }
        if (b) {
            if (b.dse()) {
                if (b.qgb(c.keyCode)) {
                    clearTimeout(this.kvf);
                    return
                } else {
                    k = true
                }
            }
        }
        if (d) {
            if (d.dse()) {
                if (d.qgb(c.keyCode)) {
                    clearTimeout(this.kvf);
                    return
                } else {
                    k = true
                }
            }
        }
        if (f) {
            this.zfy(this.ljg.uwe(null, null, c.keyCode));
            return
        } else {
            if (k) {
                if ((b && b.skl()) && ((d && d.skl()) || !d)) {
                    this.xcz(this.ljg.uwe(null, null, c.keyCode))
                }
                return
            }
        }
        if (this.bdk && this.bdk.dse()) {
            if (this.bdk.qgb(c.keyCode)) {
                return
            }
        }
        if (this.hfs && this.hfs.dse()) {
            if (this.hfs.qgb(c.keyCode)) {
                return
            }
        }
        if (this.ljg) {
            if (this.ljg.qgb(c.keyCode)) {
                return
            }
        }
    };
    this.zct = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        if (this.zgp) {
            return
        }
        var c = this.afx.mmc("msg"),
            b = this.afx.mmc("autop"),
            e = this.afx.mmc("topb");
        if (c && c.dse()) {
            if (c.zct()) {
                return
            }
        }
        if (b && b.dse()) {
            if (b.zct()) {
                return
            }
        }
        if (this.bdk && this.bdk.dse()) {
            if (this.bdk.zct()) {
                return
            }
        }
        if (this.hfs && this.hfs.dse()) {
            if (this.hfs.zct()) {
                return
            }
        }
        if (this.ljg) {
            if (this.ljg.zct()) {
                return
            }
        }
        if (e) {
            if (e.zct()) {
                return
            }
        }
    };
    this.ojz = function() {
        return (tvj.slh.mqc() && !this.uli)
    };
    this.cuv = function() {
        return (this.yhb === true && this.xbq.xjm === true)
    };
    this.oei = function() {
        if (this.cuv() === true) {
            this.xbq.ruf("melody")
        }
    };
    this.nad = function() {
        if (this.cuv() === true) {
            this.xbq.loh("melody")
        }
    };
    this.plr = function(c, b) {
        if (this.cuv() === true && this.bzv === true) {
            this.xbq.nvj("melody", c, b)
        }
    };
    this.hbr = function() {
        return false
    };
    this.vme = function() {
        return 1
    };
    this.rud = function() {
        return 0
    };
    this.zzy = function(b) {
        this.hue = this.qjw(b);
        this.width = this.hue.canvas.mom.width;
        this.height = this.hue.canvas.mom.height;
        this.mnd();
        this.fii();
        this.kzi()
    };
    this.vin = function() {
        this.style = new xox()
    };
    this.qjw = function(b) {
        this.jgb = b;
        if (b == tvj.hue.yhw) {
            return new fvr()
        } else {
            if (b == tvj.hue.iqn) {
                return new kjw()
            } else {
                if (b == tvj.hue.uvn) {
                    return new hbx()
                } else {
                    if (b == tvj.hue.qic) {
                        return new vxt()
                    } else {
                        if (b == tvj.hue.nfy) {
                            return new fjf()
                        } else {
                            if (b == tvj.hue.iig) {
                                return new wso()
                            } else {
                                if (b == tvj.hue.rlb) {
                                    return new zvw()
                                } else {
                                    if (b == tvj.hue.jsm) {
                                        return new vsc()
                                    } else {
                                        if (b == tvj.hue.yjc) {
                                            return new bmt()
                                        } else {
                                            if (b == tvj.hue.vtc) {
                                                return new drh()
                                            } else {
                                                if (b == tvj.hue.jif) {
                                                    return new wvr()
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
    this.kzi = function() {};
    this.xjg = function(b) {
        if (this.elf) {
            this.rtt();
            this.ydx(b);
            this.jlo()
        } else {
            this.zcq()
        }
    };
    this.rtt = function() {
        this.canvas.width = 0;
        if (this.awy === false) {
            this.nme.style.marginTop = (-this.height / 2 + this.hsk()) + "px";
            this.nme.style.marginLeft = (-this.width / 2) + "px"
        } else {
            this.nme.style.left = "0px";
            this.nme.style.top = "0px";
            this.nme.style.marginTop = ((this.wnl - this.height) / 2 + this.hsk()) + "px";
            this.nme.style.marginLeft = ((this.bbo - this.width) / 2) + "px"
        }
        this.nme.style.width = (this.width > this.bbo) ? this.bbo + "px" : this.width + "px";
        this.nme.style.height = (this.height > this.wnl) ? this.wnl + "px" : this.height + "px";
        this.canvas.width = Math.round(this.width);
        this.canvas.height = Math.round(this.height);
        this.width = this.canvas.width;
        this.height = this.canvas.height
    };
    this.ydx = function(b) {
        this.fbq();
        this.lcy();
        this.eny();
        this.pju();
        this.req();
        if (!(this.uli && !this.bmf)) {
            this.vle()
        }
        if (!this.uli) {
            this.gze();
            if (this.hue.cjk) {
                if (this.afx.mmc("tops")) {
                    this.roh()
                } else {
                    this.zbv()
                }
            } else {
                this.afx.agn("tops")
            }
            if (this.xsz()) {
                this.dqa()
            }
            this.ach();
            this.jvf();
            if (this.okx()) {
                this.rmg()
            }
        } else {
            this.vln()
        }
        if (this.hue.yvm) {
            this.aea();
            this.ijz()
        }
        if (this.hue.mfd) {
            this.wtd();
            if (this.ccd()) {
                this.epv()
            }
        }
        if (this.hue.pmi) {
            this.nvm();
            if (!this.hue.rnr) {
                this.eah()
            }
        }
        if (this.hue.ixs) {
            this.eeo()
        }
        if (this.hue.rnr) {
            this.mfg()
        }
        this.hud();
        if (b) {
            this.cyp()
        }
    };
    this.fbq = function() {
        if (this.ljg) {
            var b = (this.uli && this.okj) ? this.hue.ciq : this.hue.qus;
            this.ljg.gae(b.mom);
            this.ljg.sqc(b, this.qzj);
            if (this.hue.abu === true) {
                this.ljg.gmo(this.style.qus, this.qzj)
            }
        }
    };
    this.lcy = function() {
        if (this.ion) {
            this.ion.gae((this.uzy === false) ? this.hue.ion.mom : this.hue.ion.ylh, (this.djd) ? this.hue.ion.jsi : this.hue.ion.avu)
        }
        if (this.zyy) {
            this.zyy.gae((this.uzy === false) ? this.hue.zyy.mom : this.hue.zyy.ylh, (this.djd) ? this.hue.zyy.jsi : this.hue.zyy.avu)
        }
        if (this.qsl) {
            this.qsl.gae((this.uzy === false) ? this.hue.qsl.mom : this.hue.qsl.ylh, (this.djd) ? this.hue.qsl.jsi : this.hue.qsl.avu)
        }
        if (this.ocd) {
            this.ocd.gae((this.uzy === false) ? this.hue.ocd.mom : this.hue.ocd.ylh, (this.djd) ? this.hue.ocd.jsi : this.hue.ocd.avu)
        }
        if (this.nic) {
            this.nic.gae((this.uzy === false) ? this.hue.nic.mom : this.hue.nic.ylh, (this.djd) ? this.hue.nic.jsi : this.hue.nic.avu)
        }
    };
    this.aea = function() {
        var b = this.afx.mmc("winp");
        if (b) {
            b.gae(this.hue.soa.mom);
            b.sqc(this.hue.soa)
        }
    };
    this.ijz = function() {};
    this.eny = function() {
        if (this.bcy) {
            this.bcy.gae(this.hue.ayn.mom);
            this.bcy.eke = this.eke;
            this.bcy.jrb = this.jrb;
            this.bcy.sqc(this.hue.ayn)
        }
    };
    this.eeo = function() {
        var c = this.afx.mmc("llinep"),
            b = this.afx.mmc("rlinep");
        if (c) {
            c.x = this.hue.nul.mom.x;
            c.y = this.hue.nul.mom.y;
            c.sqc(this.hue.nul)
        }
        if (b) {
            b.x = this.hue.mul.mom.x;
            b.y = this.hue.mul.mom.y;
            b.sqc(this.hue.mul)
        }
    };
    this.wtd = function() {
        var b = this.afx.mmc("betsel");
        if (b) {
            b.gae(this.hue.ouh.mom);
            b.sqc(this.hue.ouh)
        }
    };
    this.epv = function() {
        var b = this.afx.mmc("linesel");
        if (b) {
            b.gae(this.hue.dfk.mom);
            b.sqc(this.hue.dfk)
        }
    };
    this.roh = function() {
        var b = this.afx.mmc("tops");
        if (b) {
            b.gae(this.hue.top.mom);
            b.tzp(this.hue.cjk)
        }
    };
    this.vle = function() {
        if (this.bdk) {
            this.bdk.gae(this.hue.yyz.mom);
            this.bdk.sqc(this.hue.yyz);
            if (this.hue.abu === true) {
                this.bdk.gmo(this.style.yyz)
            }
        }
    };
    this.req = function() {
        if (this.hfs) {
            var b = (this.uli && this.okj) ? this.hue.mmy : this.hue.fzw;
            this.hfs.gae(b.mom);
            this.hfs.sqc(b);
            if (this.hue.abu === true) {
                this.hfs.gmo(this.style.fzw)
            }
        }
    };
    this.pju = function() {};
    this.gze = function() {};
    this.hud = function() {};
    this.cyp = function() {
        if (this.afx.mmc("tops")) {
            this.bdk.iqy(true);
            this.ytg()
        } else {
            this.awk = null;
            this.bdk.vyu(this.kdp, true)
        }
        this.bdk.wjx()
    };
    this.mnd = function() {
        var c = 0 - this.hue.ayn.mom.x,
            b = 0 - this.hue.ayn.mom.y;
        this.jrb = [
            [{
                x: this.hue.ion.mom.x + c,
                y: this.hue.ion.mom.y + b
            }, {
                x: this.hue.ion.mom.x + c,
                y: this.hue.ion.mom.y + b + this.hue.ayn.pqq
            }, {
                x: this.hue.ion.mom.x + c,
                y: this.hue.ion.mom.y + b + 2 * this.hue.ayn.pqq
            }],
            [{
                x: this.hue.zyy.mom.x + c,
                y: this.hue.zyy.mom.y + b
            }, {
                x: this.hue.zyy.mom.x + c,
                y: this.hue.zyy.mom.y + b + this.hue.ayn.pqq
            }, {
                x: this.hue.zyy.mom.x + c,
                y: this.hue.zyy.mom.y + b + 2 * this.hue.ayn.pqq
            }],
            [{
                x: this.hue.qsl.mom.x + c,
                y: this.hue.qsl.mom.y + b
            }, {
                x: this.hue.qsl.mom.x + c,
                y: this.hue.qsl.mom.y + b + this.hue.ayn.pqq
            }, {
                x: this.hue.qsl.mom.x + c,
                y: this.hue.qsl.mom.y + b + 2 * this.hue.ayn.pqq
            }],
            [{
                x: this.hue.ocd.mom.x + c,
                y: this.hue.ocd.mom.y + b
            }, {
                x: this.hue.ocd.mom.x + c,
                y: this.hue.ocd.mom.y + b + this.hue.ayn.pqq
            }, {
                x: this.hue.ocd.mom.x + c,
                y: this.hue.ocd.mom.y + b + 2 * this.hue.ayn.pqq
            }],
            [{
                x: this.hue.nic.mom.x + c,
                y: this.hue.nic.mom.y + b
            }, {
                x: this.hue.nic.mom.x + c,
                y: this.hue.nic.mom.y + b + this.hue.ayn.pqq
            }, {
                x: this.hue.nic.mom.x + c,
                y: this.hue.nic.mom.y + b + 2 * this.hue.ayn.pqq
            }]
        ]
    };
    this.fii = function() {
        var e = 0 - this.hue.ayn.mom.x,
            b = 0 - this.hue.ayn.mom.y;
        this.eke = [];
        for (var g = 0, f = this.hue.eke.length; g < f; g++) {
            this.eke[g] = [];
            for (var d = 0, h = 0, c = this.hue.eke[g].length; d < c; d += 2, h += 1) {
                this.eke[g][h] = {
                    x: this.hue.eke[g][d] + e,
                    y: this.hue.eke[g][d + 1] + b
                }
            }
        }
    };
    this.nyx = function() {
        this.pih = [];
        if (this.nwk() === false && this.pin != "") {
            this.pih.push(this.pin)
        }
        this.pih.push(this.language.ohp);
        this.pih.push(this.language.mhw + " " + this.axw(this.muc()) + ((this.ojz() === true) ? "|" : " ") + this.language.wys + " " + this.axw(this.wnm()));
        this.pih.push(this.language.lny)
    };
    this.oja = function() {
        this.gtk = [];
        this.gtk[0] = this.language.sii;
        this.gtk[1] = this.language.dye
    };
    this.rzd = function() {
        this.wmr = [];
        this.wmr[0] = this.language.lpb;
        this.wmr[1] = this.language.hur
    };
    this.mqq = function() {
        rvy.prototype.mqq.call(this);
        if (this.rwt() === true) {
            this.xbq.stw(true);
            this.xbq.bmd(tvj.wxo.value45 === tvj.vwh.faz || tvj.wxo.value45 === tvj.vwh.hfy)
        }
    };
    this.eyc = function() {
        var c = "";
        this.xbq.qbt("spin", null, false, this.bgu + "reels");
        this.xbq.qbt("stop1", null, false, this.bgu + "stop_reel2");
        this.xbq.qbt("stop2", null, false, this.bgu + "stop_reel2");
        this.xbq.qbt("start", null, false, this.bgu + "onstart");
        if (this.cuv() === true) {
            this.xbq.qbt("melody", null, true, this.bgu + "background")
        }
        if (this.gog > 0) {
            this.xbq.qbt("wincountfade", null, false, this.bgu + "count_fade")
        }
        c = tvj.wxo.value30 + "/slot/sounds/";
        this.xbq.qbt("winfinal", this.jsq, false, c + "winfinal");
        if (this.vmm <= 2) {
            this.xbq.qbt("wincount", null, false, c + "countup" + this.vmm + "1");
            this.xbq.qbt("wincount1", null, false, c + "countup" + this.vmm + "2");
            this.xbq.qbt("wincount3", null, false, c + "countup" + this.vmm + "3");
            this.xbq.qbt("wincount5", null, false, c + "countup" + this.vmm + "4");
            if (this.xbq.xjm === false) {
                this.xbq.qbt("wincount2", null, false, c + "countup" + this.vmm + "2");
                this.xbq.qbt("wincount4", null, false, c + "countup" + this.vmm + "3");
                this.xbq.qbt("wincount6", null, false, c + "countup" + this.vmm + "4")
            }
            this.xbq.qbt("winline", null, false, c + "winline");
            this.xbq.qbt("collect", null, false, c + "collect");
            this.xbq.qbt("collectend", null, false, c + "collect1")
        }
        c = tvj.wxo.value30 + "/basic/sounds/";
        this.xbq.qbt("silence", null, false, c + "silence");
        this.xbq.qbt("audioon", null, false, c + "audio_on");
        if (!tvj.wxo.value55) {
            if (this.ojz() === false) {
                this.xbq.qbt("btn", null, false, c + "btn");
                this.xbq.qbt("auto_on", null, false, c + "auto_on");
                this.xbq.qbt("auto_off", null, false, c + "auto_off");
                this.xbq.qbt("gamble_on", null, false, c + "gamble_on");
                this.xbq.qbt("gamble_off", null, false, c + "gamble_off");
                if (this.cuv() === false && this.vmm <= 2) {
                    this.xbq.qbt("gambleprop", null, true, c + "gambleprop")
                }
                for (var b = 0; b < 12; b++) {
                    this.xbq.qbt("step" + b, null, false, c + "step" + (b + 1))
                }
                this.xbq.qbt("maxstep", null, false, c + "maxstep")
            } else {
                this.xbq.qbt("btn", null, false, c + "btn2");
                this.xbq.qbt("auto_fill", null, false, c + "auto_fill");
                this.xbq.qbt("auto_off", null, false, c + "auto_off")
            }
        } else {
            this.xbq.qbt("btn", null, false, c + "ama_btn");
            if (this.ojz() === false) {
                this.xbq.qbt("gamble_on", null, false, c + "ama_gamble_on");
                this.xbq.qbt("gamble_off", null, false, c + "ama_gamble_off");
                if (this.cuv() === false && this.vmm <= 2) {
                    this.xbq.qbt("gambleprop", null, true, c + "ama_gambleprop")
                }
                for (var b = 0; b < 12; b++) {
                    this.xbq.qbt("step" + b, null, false, c + "ama_step")
                }
                this.xbq.qbt("maxstep", null, false, c + "ama_step")
            }
        }
        if (this.egj() === true) {
            this.xbq.qbt("jackpot", null, false, c + "jackpot")
        }
        if (this.ojz() === false) {
            this.xbq.qbt("panel_in", null, false, c + "panel_in");
            this.xbq.qbt("panel_out", null, false, c + "panel_out")
        }
        c = tvj.wxo.value30 + "/gamble/sounds/";
        this.xbq.qbt("gamble1", null, false, c + "deal_2");
        this.xbq.qbt("gamble2", null, false, c + "deal_2");
        this.xbq.qbt("gamblewin1", null, false, c + "win1");
        this.xbq.qbt("gamblewin2", null, false, c + "win2");
        this.xbq.qbt("gamblewin3", null, false, c + "win3");
        this.qyz();
        this.tja();
        this.nas()
    };
    this.qyz = function() {
        for (var b = 0; b < this.hwg; b++) {
            this.xbq.qbt("symb" + b, this.zmh, false, this.bgu + "symb" + (b + 1))
        }
    };
    this.tja = function() {
        var b = tvj.wxo.value30 + "/slot/sounds/";
        this.xbq.qbt("bigwin", null, false, b + "bigwin");
        this.xbq.qbt("megawin", null, false, b + "megawin");
        this.xbq.qbt("nicewin", null, false, b + "nicewin")
    };
    this.nas = function() {};
    this.xwr = function() {
        var b = this.ebc + this.hue.type + "/";
        this.xbq.pnw("icon", b + "icon_out.png");
        if (this.rwt() === true && (tvj.wxo.value45 === tvj.vwh.faz || tvj.wxo.value45 === tvj.vwh.hfy)) {
            this.xbq.pnw("device_info", b + "info_" + ((this.ojz() === true) ? "smartphone.png" : "tablet.png"))
        }
        if (this.bng) {
            this.xbq.pnw("winlines", b + "wl.png")
        }
        this.xbq.pnw("s_symb", b + "symbols_small.png");
        b = tvj.wxo.value30 + "/basic/images/" + this.hue.type + "/";
        if (this.egj() === true) {
            this.xbq.pnw("jackpot", b + "jackpot.png")
        }
        if (this.ojz() === true) {
            if (this.hue.abu === false) {
                this.xbq.pnw("btn_back", b + "buttonback.png")
            }
        }
        b = tvj.wxo.value30 + "/slot/images/" + this.hue.type + "/";
        if (this.ojz() === true) {
            if (this.hue.abu === true) {
                this.xbq.pjv(b, "gui_mobile_v24.json")
            } else {
                this.xbq.pjv(b, "gui_mobile_v13.json")
            }
        } else {
            if (tvj.wxo.value57 === tvj.ui.owg || this.gln() != null) {
                this.xbq.pjv(b, "gui_desktop_v23.json")
            } else {
                this.xbq.pjv(b, "gui_desktop_v13.json")
            }
        }
        if (this.yvx && !this.uli) {
            this.xbq.pnw("firework", b + "firework.png")
        }
        this.gxj();
        this.rby();
        this.pjy();
        this.fkx();
        this.yob()
    };
    this.rby = function() {
        var b = this.ebc + this.hue.type + "/";
        this.xbq.pnw("m_back", b + "main.png");
        this.xbq.pnw("g_back", b + "gamble.jpg");
        this.xbq.pnw("m_win", b + "winPanel.png");
        this.xbq.pnw("h_paytable", b + "wthelp.jpg");
        this.xbq.pnw("h_winlines", b + "wlhelp.jpg")
    };
    this.pjy = function() {
        var c = this.ebc + this.hue.type + "/";
        this.xbq.pjv(c, "symbols.json");
        for (var b = 0; b < this.hwg; b++) {
            this.xbq.pnw("anim" + b, c + "symbanim" + (b + 1) + ".jpg")
        }
    };
    this.fkx = function() {
        var b = tvj.wxo.value30 + "/slot/images/" + this.hue.type + "/";
        this.xbq.pnw("wins", b + "wins.png")
    };
    this.gxj = function() {
        var b = tvj.wxo.value30 + "/gamble/images/" + this.hue.type + "/";
        this.xbq.pnw("g_red", b + "red_orig.png");
        this.xbq.pnw("g_blue", b + "blue_orig.png");
        this.xbq.pjv(b, "gamble.json")
    };
    this.yob = function() {};
    this.cdl = function() {
        var b = this.bex;
        if (this.yjp && !this.jgi && !this.kmp) {
            b = b - this.qio
        }
        if (this.idd) {
            b = b - this.idd.value
        }
        if (!this.kmp) {
            this.wie(b, true)
        }
        this.ssg(this.zjo, true);
        this.afx.tew("tops", "#mdb");
        this.afx.tew("settings", "#svt", [this.axw(this.aww), this.tss, this.axw(this.zyd())])
    };
    this.mdb = function(q, p, r, D, f) {
        if (tvj.cdg.kez()) {
            var b = (q != null && p != null && r != null && D != null),
                d = (b === true) ? new mfo(q, p, r, D) : ((tvj.cdg.hue.abu === true) ? new mfo(tvj.cdg.hue.qus.mom.x, tvj.cdg.hue.qus.mom.y, tvj.cdg.hue.qus.mom.width, tvj.cdg.hue.qus.mom.height) : new mfo(tvj.cdg.hue.cdg.mom.x, tvj.cdg.hue.cdg.mom.y, tvj.cdg.hue.cdg.mom.width, tvj.cdg.hue.cdg.mom.height)),
                A = tvj.cdg.context2D,
                g = (tvj.cdg.bmf === true) ? tvj.cdg.style.cdg.ukl : tvj.cdg.style.cdg.backgroundColor,
                G = tvj.cdg.afx.mmc("stats"),
                n = tvj.cdg.afx.mmc("msg"),
                c = tvj.cdg.afx.mmc("history"),
                E = tvj.cdg.afx.mmc("topb"),
                j = tvj.cdg.afx.mmc("topi"),
                k = tvj.cdg.afx.mmc("betsel"),
                t = tvj.cdg.afx.mmc("linesel"),
                u = tvj.cdg.afx.mmc("tops"),
                l = tvj.cdg.afx.mmc("winp"),
                m = tvj.cdg.afx.mmc("fwinp"),
                v = tvj.cdg.afx.mmc("llinep"),
                I = tvj.cdg.afx.mmc("rlinep"),
                H = tvj.cdg.afx.mmc("finfop"),
                z = tvj.cdg.afx.mmc("finfoc"),
                s = tvj.cdg.afx.mmc("autop"),
                F = tvj.cdg.afx.lkr("jackpots"),
                o = tvj.cdg.afx.mmc("jwp"),
                e = tvj.cdg.afx.mmc("settings");
            tvj.cdg.gyw = false;
            if (tvj.cdg.uzy === true) {
                tvj.cdg.stn()
            }
            A.save();
            if (b) {
                A.beginPath();
                A.rect(q, p, r, D);
                A.closePath();
                A.clip()
            }
            if (f == null || f === false) {
                A.clearRect(0, 0, tvj.cdg.width, tvj.cdg.height)
            }
            if (tvj.cdg.hue.nff) {
                if (tvj.cdg.uzy === false) {
                    tvj.slh.ayc(tvj.cdg.context2D, tvj.cdg.hue.cdg.mom.x - tvj.cdg.hue.cdg.ioh, tvj.cdg.hue.cdg.mom.y - tvj.cdg.hue.cdg.ioh, tvj.cdg.hue.cdg.mom.width + 2 * tvj.cdg.hue.cdg.ioh, tvj.cdg.hue.cdg.mom.height + 2 * tvj.cdg.hue.cdg.ioh, g, 1)
                } else {
                    tvj.slh.ayc(tvj.cdg.context2D, tvj.cdg.hue.cdg.mom.x - tvj.cdg.hue.cdg.ioh, tvj.cdg.hue.cdg.mom.y - tvj.cdg.hue.cdg.ioh, tvj.cdg.hue.cdg.mom.width + 2 * tvj.cdg.hue.cdg.ioh, tvj.cdg.hue.cdg.mom.height + 2 * tvj.cdg.hue.cdg.ioh, null, 0, g, tvj.cdg.hue.cdg.ioh, 1)
                }
            }
            if (c) {
                c.mdb()
            }
            if (j) {
                j.mdb()
            }
            if (u) {
                u.mdb()
            }
            if (G && G.dse()) {
                G.mdb()
            } else {
                if (tvj.cdg.bdk && tvj.cdg.bdk.dse()) {
                    tvj.cdg.bdk.mdb()
                } else {
                    if (tvj.cdg.hfs && tvj.cdg.hfs.dse()) {
                        tvj.cdg.hfs.mdb()
                    } else {
                        if (tvj.cdg.uzy) {
                            A.drawImage(tvj.cdg.ivp, tvj.cdg.hue.ggo.mom.x, tvj.cdg.hue.ggo.mom.y)
                        } else {
                            A.drawImage(tvj.cdg.qfx, tvj.cdg.hue.ggo.mom.x, tvj.cdg.hue.ggo.mom.y)
                        }
                        if (l && l.dse()) {
                            l.mdb()
                        } else {
                            if (m && m.dse()) {
                                m.mdb()
                            }
                        }
                        if (v) {
                            v.mdb()
                        }
                        if (I) {
                            I.mdb()
                        }
                        if (tvj.cdg.uzy === false) {
                            for (var B = 0, C = tvj.cdg.yet.length; B < C; B++) {
                                if (tvj.cdg.yet[B]) {
                                    tvj.cdg.yet[B].mdb()
                                }
                            }
                        }
                        if (tvj.cdg.bcy) {
                            tvj.cdg.bcy.mdb()
                        }
                        if (tvj.cdg.ljg) {
                            tvj.cdg.ljg.mdb()
                        }
                        for (var B = 0, C = F.length; B < C; B++) {
                            F[B].mdb()
                        }
                        if (o) {
                            if (o.dse()) {
                                tvj.cdg.jsj(A, d)
                            }
                            o.mdb()
                        }
                        if (H) {
                            if (H.dse()) {
                                tvj.cdg.jsj(A, d)
                            }
                            H.mdb()
                        }
                        if (z) {
                            if (z.dse()) {
                                tvj.cdg.jsj(A, d)
                            }
                            z.mdb()
                        }
                    }
                }
            }
            if (k) {
                k.mdb()
            }
            if (t) {
                t.mdb()
            }
            if (E) {
                E.mdb()
            }
            if (s) {
                s.mdb()
            }
            if (e) {
                e.mdb()
            }
            if (n) {
                if (n.dse()) {
                    tvj.cdg.jsj(A, d)
                }
                n.mdb()
            }
            A.restore()
        }
    };
    this.jsj = function(b, c) {
        this.gyw = true;
        tvj.slh.ayc(b, c.x, c.y, c.width, c.height, "black", 0.5)
    };
    this.mmb = function() {
        for (var c = 0, b = this.yet.length; c < b; c++) {
            if (this.yet[c] && this.uxt[c] === true) {
                this.yet[c].mdb()
            }
        }
    };
    this.stn = function() {
        var d = this.dlw,
            c = this.xbq.ire("m_back"),
            f = this.xbq.ire("f_back");
        if (this.uli && this.okj && this.style.cdg.fzp) {
            c = this.xbq.ire("m_m_back");
            f = this.xbq.ire("m_f_back")
        }
        if (this.kez()) {
            d.save();
            if (this.qzj) {
                d.drawImage(f, 0, 0)
            } else {
                d.drawImage(c, 0, 0)
            }
            for (var e = 0, b = this.yet.length; e < b; e++) {
                this.yet[e].mdb()
            }
            d.restore()
        }
    };
    this.ppy = function() {
        var d = tvj.cdg.ljx,
            g = (tvj.cdg.hue.ggo.mom.width - tvj.cdg.hue.cdg.mom.width) / 2,
            e = 0,
            c = (tvj.cdg.qzj) ? tvj.cdg.xbq.ire("f_back") : tvj.cdg.xbq.ire("m_back"),
            j = (tvj.cdg.qzj) ? tvj.cdg.xbq.ire("f_left") : tvj.cdg.xbq.ire("m_left"),
            h = (tvj.cdg.qzj) ? tvj.cdg.xbq.ire("f_right") : tvj.cdg.xbq.ire("m_right");
        if (tvj.cdg.uli && tvj.cdg.okj && tvj.cdg.style.cdg.fzp) {
            c = (tvj.cdg.qzj) ? tvj.cdg.xbq.ire("m_f_back") : tvj.cdg.xbq.ire("m_m_back")
        }
        d.save();
        d.clearRect(0, 0, tvj.cdg.hue.ggo.mom.width, tvj.cdg.hue.ggo.mom.height);
        d.drawImage(c, g, e);
        if (tvj.cdg.jgb === tvj.hue.vtc || tvj.cdg.jgb === tvj.hue.jif) {
            if (j) {
                d.drawImage(j, 0, 0)
            }
            if (h) {
                d.drawImage(h, tvj.cdg.hue.ggo.mom.width - h.width, 0)
            }
        }
        d.restore();
        if (tvj.cdg.uzy) {
            d = tvj.cdg.vsv;
            d.save();
            d.drawImage(tvj.cdg.qfx, 0, 0);
            for (var f = 0, b = tvj.cdg.yet.length; f < b; f++) {
                d.clearRect(tvj.cdg.yet[f].x + g, tvj.cdg.yet[f].y + e, tvj.cdg.yet[f].width, tvj.cdg.yet[f].height)
            }
            d.restore()
        }
    };
    this.rtu = function(f) {
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
        if (this.wuj < 0) {
            for (var d = 0; d < f; d++) {
                this.vus[d] = c[e];
                e = (e < c.length - 1) ? e + 1 : 0
            }
            this.udr = 0;
            this.iph = new Date().getTime();
            this.jdu()
        }
    };
    this.kns = function() {
        clearTimeout(this.wuj);
        this.wuj = -1;
        tvj.slh.khn(this.canvas, this.igm, this.hln);
        if (this.vrv != null) {
            tvj.slh.khn(this.vrv, this.igm, this.hln, ((this.hue.vrv.mom.x) - ((this.hue.vrv.mom.x + this.hue.vrv.yuo) / 2 * (1 - this.igm))), ((this.hue.vrv.mom.y) - ((this.hue.vrv.mom.y + this.hue.vrv.ibu) / 2 * (1 - this.hln))))
        }
    };
    this.jdu = function() {
        var b = tvj.cdg.oyp,
            d = new Date().getTime(),
            c = null;
        if (tvj.cdg.udr >= tvj.cdg.vus.length) {
            tvj.cdg.kns()
        } else {
            c = tvj.cdg.vus[tvj.cdg.udr];
            tvj.slh.khn(tvj.cdg.canvas, tvj.cdg.igm * c.sx, tvj.cdg.hln * c.sy, c.tx, c.ty, c.rx, c.ry);
            if (tvj.cdg.vrv != null) {
                tvj.slh.khn(tvj.cdg.vrv, tvj.cdg.igm * c.sx, tvj.cdg.hln * c.sy, ((tvj.cdg.hue.vrv.mom.x) - ((tvj.cdg.hue.vrv.mom.x + tvj.cdg.hue.vrv.yuo) / 2 * (1 - tvj.cdg.igm * c.sx))) + c.tx, ((tvj.cdg.hue.vrv.mom.y) - ((tvj.cdg.hue.vrv.mom.y + tvj.cdg.hue.vrv.ibu) / 2 * (1 - tvj.cdg.hln * c.sy))) + c.ty, c.rx, c.ry)
            }
            tvj.cdg.udr++;
            b = tvj.cdg.oyp + (tvj.cdg.udr * tvj.cdg.oyp - (d - tvj.cdg.iph));
            if (b < 10) {
                b = 10
            }
            tvj.cdg.wuj = setTimeout(tvj.cdg.jdu, b)
        }
    };
    this.tud = function() {
        clearTimeout(tvj.cdg.tzu);
        if (tvj.cdg.pvx) {
            if (tvj.cdg.ctg) {
                if (!tvj.cdg.rpn && tvj.cdg.pku()) {
                    setTimeout(tvj.cdg.uti, 2)
                }
            } else {
                if (!tvj.cdg.qzj) {
                    if (tvj.cdg.qio > 0 && !tvj.cdg.jgi) {
                        if (tvj.cdg.uiu) {
                            tvj.cdg.fxk();
                            if (tvj.cdg.kuc()) {
                                tvj.cdg.pvx = false;
                                tvj.cdg.ljg.ein(false);
                                setTimeout(tvj.cdg.zss, 400)
                            }
                        } else {
                            if (tvj.cdg.dwz) {
                                tvj.cdg.puc()
                            } else {
                                if (!(tvj.cdg.uiu || tvj.cdg.dwz)) {
                                    if (tvj.cdg.kuc()) {
                                        tvj.cdg.pvx = false;
                                        tvj.cdg.ljg.ein(false);
                                        tvj.cdg.zss()
                                    } else {
                                        tvj.cdg.fxk()
                                    }
                                }
                            }
                        }
                    } else {
                        if (!tvj.cdg.ctg) {
                            if (tvj.cdg.rea) {
                                tvj.cdg.rsd();
                                tvj.cdg.qhm();
                                return
                            }
                            tvj.cdg.fwn = true;
                            tvj.cdg.pvx = false;
                            if (tvj.cdg.ojz() === true) {
                                tvj.cdg.url = (!tvj.cdg.fzw) ? 1 : 0
                            } else {
                                if (tvj.wxo.value62 === true) {
                                    tvj.cdg.url = 0;
                                    if (tvj.cdg.qsy) {
                                        tvj.cdg.url |= 2
                                    }
                                    if (tvj.cdg.fzw) {
                                        tvj.cdg.url |= 4
                                    }
                                } else {
                                    tvj.cdg.url = (tvj.cdg.qsy && !tvj.cdg.fzw) ? 1 : 0
                                }
                            }
                            if (tvj.cdg.kmp || (tvj.cdg.bex >= tvj.cdg.zyd() && tvj.cdg.zyd() >= tvj.cdg.oxk)) {
                                tvj.cdg.acu();
                                for (var c = 0, b = tvj.cdg.yet.length; c < b; c++) {
                                    tvj.cdg.mav[c] = -1;
                                    if (tvj.cdg.yet[c]) {
                                        tvj.cdg.yet[c].jvo(tvj.cdg.blz[0])
                                    }
                                }
                                tvj.cdg.bzp();
                                tvj.cdg.vdt.play(tvj.cdg.tss, tvj.cdg.cwv, tvj.cdg.url);
                                tvj.cdg.ljg.ein(false);
                                tvj.cdg.ljg.zcr.tew("start", "#vxc", [true])
                            } else {
                                tvj.cdg.nir();
                                tvj.cdg.rsd();
                                tvj.cdg.ljg.ein(true);
                                tvj.cdg.bam(true);
                                tvj.cdg.pvx = true
                            }
                            tvj.cdg.own()
                        }
                    }
                } else {
                    if (tvj.cdg.idf > 0) {
                        if (tvj.cdg.uiu) {
                            tvj.cdg.fxk()
                        } else {
                            if (!(tvj.cdg.mli || tvj.cdg.fwn)) {
                                tvj.cdg.xts()
                            } else {
                                tvj.cdg.exj()
                            }
                        }
                    }
                    if (tvj.cdg.mdh > 0 && !(tvj.cdg.edj && !tvj.cdg.bdg)) {
                        if (tvj.cdg.rea) {
                            tvj.cdg.rsd();
                            tvj.cdg.qhm();
                            return
                        }
                        tvj.cdg.fwn = true;
                        tvj.cdg.pvx = false;
                        tvj.cdg.acu();
                        for (var c = 0, b = tvj.cdg.yet.length; c < b; c++) {
                            tvj.cdg.mav[c] = -1;
                            if (tvj.cdg.yet[c]) {
                                tvj.cdg.yet[c].jvo(tvj.cdg.blz[0])
                            }
                        }
                        tvj.cdg.ilp();
                        if (tvj.cdg.ojz() && tvj.cdg.mdh == 1) {
                            tvj.cdg.url = (!tvj.cdg.fzw) ? 1 : 0
                        } else {
                            if (tvj.wxo.value62 === true) {
                                tvj.cdg.url = 0;
                                if (tvj.cdg.gln() == null && tvj.wxo.value44.e && tvj.cdg.mdh == 1) {
                                    if (tvj.cdg.gow) {
                                        tvj.cdg.url |= 2
                                    }
                                } else {
                                    if (tvj.cdg.qsy) {
                                        tvj.cdg.url |= 2
                                    }
                                }
                                if (tvj.cdg.fzw) {
                                    tvj.cdg.url |= 4
                                }
                            } else {
                                if (tvj.cdg.gln() == null && tvj.wxo.value44.e && tvj.cdg.mdh == 1) {
                                    tvj.cdg.url = (tvj.cdg.gow && !tvj.cdg.fzw) ? 1 : 0
                                } else {
                                    tvj.cdg.url = (tvj.cdg.qsy && !tvj.cdg.fzw) ? 1 : 0
                                }
                            }
                        }
                        tvj.cdg.vdt.gqv(tvj.cdg.tss, tvj.cdg.cwv, tvj.cdg.url);
                        tvj.cdg.ljg.ein(false);
                        tvj.cdg.ljg.zcr.tew("start", "#vxc", [true]);
                        tvj.cdg.dag()
                    }
                }
            }
        } else {
            if (!tvj.cdg.lqi && tvj.cdg.ctg && !tvj.cdg.rpn && tvj.cdg.pku()) {
                tvj.cdg.sdh = true
            }
        }
    };
    this.vnf = function() {
        var b = tvj.cdg.afx.mmc("topi"),
            d = 0,
            c = 0,
            e = 0;
        if (!tvj.wxo.value55) {
            tvj.cdg.xbq.loh("auto_on");
            tvj.cdg.xbq.loh("auto_off")
        }
        if (tvj.cdg.qsy) {
            tvj.cdg.qsy = false;
            tvj.cdg.flz();
            if (tvj.cdg.gln() == null && tvj.wxo.value44.e && tvj.cdg.qzj) {
                tvj.cdg.gow = false
            }
            tvj.cdg.ljg.zcr.tew("astart", "#bml", [tvj.cdg.qsy]);
            if (!tvj.cdg.ctg) {
                tvj.cdg.ljg.zcr.tew("start", "#zja", [tvj.cdg.language.start, true])
            }
            if (!tvj.wxo.value55) {
                tvj.cdg.xbq.ruf("auto_off")
            }
            if (tvj.cdg.vij && !tvj.cdg.qsy && !tvj.cdg.fzw && !tvj.cdg.fzd() && !tvj.cdg.qzj && tvj.cdg.qio > 0 && !tvj.cdg.jgi && !tvj.cdg.dwz && !tvj.cdg.ctg) {
                if (!tvj.cdg.ljg.zcr.tew("gamble", "#imv")) {
                    tvj.cdg.ljg.zcr.tew("start", "#zja", [tvj.cdg.language.bpj, true]);
                    tvj.cdg.ljg.zcr.tew("gamble", "#xwv");
                    if (!tvj.cdg.uiu) {
                        tvj.cdg.ljg.zcr.tew("info", "#ylv", [tvj.cdg.language.vtl.toUpperCase() + ": " + tvj.cdg.axw(tvj.cdg.qio)])
                    }
                    tvj.cdg.dxc()
                }
            }
        } else {
            if (tvj.cdg.gln() != null && tvj.cdg.seb <= 0 && tvj.cdg.ojz() === false) {
                if (b && b.skl() === true) {
                    tvj.cdg.bam(false);
                    tvj.cdg.ljg.ein(false);
                    tvj.cdg.id = setTimeout(tvj.cdg.tye, 300)
                }
            } else {
                tvj.cdg.qsy = true;
                if (tvj.cdg.gln() == null && tvj.wxo.value44.e && tvj.cdg.qzj) {
                    tvj.cdg.gow = true
                } else {
                    if (tvj.cdg.gln() != null && tvj.cdg.ojz() === true) {
                        tvj.cdg.seb = tvj.cdg.afx.tew("settings", "#mzz");
                        d = tvj.cdg.afx.tew("settings", "#mll");
                        c = tvj.cdg.afx.tew("settings", "#erl");
                        e = tvj.cdg.afx.tew("settings", "#wob");
                        tvj.cdg.ypy = (d > 0) ? d : 0;
                        tvj.cdg.aie = (c > 0) ? c : 0;
                        tvj.cdg.ysh = (e > 0) ? e : 0;
                        tvj.cdg.wls()
                    }
                }
                tvj.cdg.ljg.zcr.tew("astart", "#bml", [tvj.cdg.qsy]);
                if (!tvj.cdg.ctg) {
                    tvj.cdg.ljg.zcr.tew("start", "#zja", [tvj.cdg.language.start, true])
                }
                if (!tvj.wxo.value55) {
                    tvj.cdg.xbq.ruf("auto_on")
                }
                if (!tvj.cdg.ctg) {
                    tvj.cdg.tud()
                }
            }
        }
        if (b) {
            b.gmq("auto", tvj.cdg.qsy)
        }
    };
    this.trv = function() {
        if (tvj.nks == 0 && tvj.cdg.uli === false && tvj.cdg.qio > 0 && !tvj.cdg.jgi && tvj.cdg.kuc()) {
            if (!tvj.cdg.dwz) {
                tvj.cdg.pvx = false;
                tvj.cdg.ljg.ein(false);
                if (tvj.cdg.uiu) {
                    tvj.cdg.fxk();
                    setTimeout(tvj.cdg.zss, 400)
                } else {
                    tvj.cdg.zss()
                }
            }
            tvj.cdg.kgn = tvj.cdg.trv
        } else {
            rvy.prototype.trv.call(this)
        }
    };
    this.vpk = function() {
        if (tvj.cdg.cwv < tvj.cdg.cbr.length - 1) {
            if (tvj.cdg.cwv >= tvj.cdg.ggx(true)) {
                tvj.cdg.cwv = 0;
                while (tvj.cdg.cwv < tvj.cdg.jsa()) {
                    tvj.cdg.cwv++
                }
            } else {
                tvj.cdg.cwv++
            }
        } else {
            tvj.cdg.cwv = 0;
            while (tvj.cdg.cwv < tvj.cdg.jsa()) {
                tvj.cdg.cwv++
            }
        }
        tvj.cdg.wrg(false, false);
        if (tvj.cdg.cwv >= tvj.cdg.ggx(true)) {
            return true
        }
        return false
    };
    this.afn = function() {
        if (tvj.cdg.cwv > 0) {
            if (tvj.cdg.cwv <= tvj.cdg.jsa()) {
                tvj.cdg.cwv = tvj.cdg.cbr.length;
                while (tvj.cdg.cwv > tvj.cdg.ggx(true)) {
                    tvj.cdg.cwv--
                }
            } else {
                tvj.cdg.cwv--
            }
        } else {
            tvj.cdg.cwv = tvj.cdg.cbr.length;
            while (tvj.cdg.cwv > tvj.cdg.ggx(true)) {
                tvj.cdg.cwv--
            }
        }
        if (tvj.cdg.cwv < 0) {
            tvj.cdg.cwv = 0
        }
        tvj.cdg.wrg(false, false);
        if (tvj.cdg.cwv <= tvj.cdg.jsa()) {
            return true
        }
        return false
    };
    this.cuq = function() {
        var c = tvj.cdg.tss,
            b = tvj.cdg.afx.mmc("betsel"),
            e = tvj.cdg.afx.mmc("llinep"),
            d = tvj.cdg.afx.mmc("rlinep");
        c += tvj.cdg.nfu;
        if (c > tvj.cdg.wna) {
            c = tvj.cdg.lty
        }
        tvj.cdg.tss = c;
        if (e) {
            e.qei(c)
        }
        if (d) {
            d.qei(c)
        }
        if (b) {
            b.mns(tvj.cdg.jsa(), tvj.cdg.ggx(true))
        }
        tvj.cdg.wrg(true, true);
        tvj.cdg.mdb();
        if (c >= tvj.cdg.wna) {
            return true
        }
        return false
    };
    this.alr = function() {
        var c = tvj.cdg.tss,
            b = tvj.cdg.afx.mmc("betsel"),
            e = tvj.cdg.afx.mmc("llinep"),
            d = tvj.cdg.afx.mmc("rlinep");
        c -= tvj.cdg.nfu;
        if (c < tvj.cdg.lty) {
            c = tvj.cdg.wna
        }
        tvj.cdg.tss = c;
        if (e) {
            e.qei(c)
        }
        if (d) {
            d.qei(c)
        }
        if (b) {
            b.mns(tvj.cdg.jsa(), tvj.cdg.ggx(true))
        }
        tvj.cdg.wrg(true, true);
        tvj.cdg.mdb();
        if (c <= tvj.cdg.lty) {
            return true
        }
        return false
    };
    this.qch = function() {
        var b = tvj.cdg.afx.mmc("topi"),
            c = tvj.cdg.afx.mmc("settings");
        if (tvj.cdg.ojz() === false && tvj.cdg.vij && tvj.cdg.qio > 0 && !tvj.cdg.ctg) {
            tvj.cdg.oic()
        } else {
            tvj.cdg.xbq.loh("gamble_on");
            tvj.cdg.xbq.loh("gamble_off");
            tvj.cdg.fzw = !tvj.cdg.fzw;
            if (tvj.cdg.fzw) {
                tvj.cdg.xbq.ruf("gamble_on")
            } else {
                tvj.cdg.xbq.ruf("gamble_off")
            }
            tvj.cdg.ljg.zcr.tew("gamble", "#bml", [tvj.cdg.fzw]);
            if (b) {
                b.gmq("gamble", tvj.cdg.fzw)
            }
            if (c) {
                c.zcr.tew("gamble", "#ibc", [(tvj.cdg.fzw) ? 1 : 0])
            }
        }
    };
    this.ilk = function() {
        if (!tvj.cdg.bdk.dse()) {
            tvj.cdg.zfy();
            if (tvj.cdg.qzj) {
                tvj.cdg.exy()
            }
            tvj.cdg.tmx()
        } else {
            tvj.cdg.yea()
        }
    };
    this.vyz = function() {
        var d = tvj.cdg.afx.mmc("topb"),
            c = tvj.cdg.afx.mmc("settings"),
            b = tvj.cdg.afx.mmc("topi");
        tvj.cdg.rpn = !tvj.cdg.rpn;
        if (b) {
            b.gmq("turbo", tvj.cdg.rpn)
        }
        if (d) {
            d.zcr.tew("turbo", "#ibc", [(tvj.cdg.rpn) ? 1 : 0])
        }
        if (c) {
            c.zcr.tew("turbo", "#ibc", [(tvj.cdg.rpn) ? 1 : 0])
        }
    };
    this.ryh = function() {
        var b = tvj.slh.rlu();
        if (tvj.cdg.ojz() === true) {
            if (b === true) {
                tvj.slh.xil("landscape")
            } else {
                tvj.slh.haq()
            }
        }
    };
    this.jgs = function() {
        if (tvj.cdg.xbq.ynj()) {
            tvj.cdg.afx.tew("loading", "#stop");
            setTimeout(tvj.cdg.hiu, 100);
            tvj.cdg.xbq.ruf("silence");
            if (tvj.slh.ddd()) {
                tvj.cdg.ryh()
            }
        }
    };
    this.yoz = function() {
        var d = tvj.cdg.afx.mmc("topb"),
            c = tvj.cdg.afx.mmc("settings"),
            b = tvj.cdg.afx.mmc("topi");
        tvj.cdg.bzv = !tvj.cdg.bzv;
        if (tvj.cdg.bzv === true) {
            tvj.cdg.oei();
            if (tvj.cdg.zrw() === false) {
                tvj.cdg.plr(0, 0)
            }
        } else {
            tvj.cdg.nad()
        }
        if (b) {
            b.gmq("melody", (tvj.cdg.bzv) ? 1 : 0)
        }
        if (d) {
            d.zcr.tew("melody", "#ibc", [(tvj.cdg.bzv) ? 1 : 0])
        }
        if (c) {
            c.zcr.tew("melody", "#ibc", [(tvj.cdg.bzv) ? 1 : 0])
        }
        tvj.cdg.mdb()
    };
    this.bzp = function() {
        this.lqi = false;
        this.ukq = false;
        this.sdh = false;
        this.jgi = false;
        this.bam(false);
        this.ljg.zcr.tew("info", "#ylv", [this.language.epj, true]);
        this.xbq.loh("collectend");
        if (this.dyo >= 0) {
            clearTimeout(this.dyo);
            this.dyo = -1
        }
        this.lfg();
        this.dih();
        if (this.ctg == false) {
            this.ljh();
            for (var c = 0, b = this.yet.length; c < b; c++) {
                this.yet[c].jng()
            }
            this.ctg = true;
            this.yfo = false;
            this.ezp = false;
            this.ulu();
            this.iph = new Date().getTime();
            if (this.djd) {
                this.id = window.uhk(this.ffz)
            } else {
                this.id = setTimeout(this.ffz, 10)
            }
        }
    };
    this.ilp = function() {};
    this.ffz = function() {
        var c = tvj.cdg.cbp,
            e = 0;
        tvj.cdg.tlw = 0;
        if (!tvj.cdg.djd || tvj.cdg.drz) {
            if (tvj.cdg.xpg == 0) {
                tvj.cdg.iph = new Date().getTime()
            } else {
                e = new Date().getTime();
                c = tvj.cdg.cbp + (tvj.cdg.xpg * tvj.cdg.cbp - (e - tvj.cdg.iph))
            }
            if (tvj.cdg.ezp) {
                c = tvj.cdg.kli
            }
        }
        if (tvj.cdg.xpg > 0 && !tvj.cdg.pvx && tvj.cdg.lqi) {
            tvj.cdg.pvx = true
        }
        for (var d = 0, b = tvj.cdg.yet.length; d < b; d++) {
            if (tvj.cdg.uxt[d] && !tvj.cdg.yet[d].yta) {
                if (d == tvj.cdg.uua - 1) {
                    tvj.cdg.yet[d].pln(true)
                } else {
                    tvj.cdg.yet[d].pln((!tvj.cdg.ezp && !tvj.cdg.rpn))
                }
            }
        }
        if (typeof tvj.cdg.fjo === "function") {
            tvj.cdg.fjo()
        }
        if (tvj.cdg.uzy === false) {
            tvj.cdg.mmb()
        } else {
            tvj.cdg.stn()
        }
        if (c <= 0) {
            c = 0
        }
        if (tvj.cdg.hxb) {
            return
        }
        if (!tvj.cdg.xtl()) {
            tvj.cdg.xpg += 1;
            if (tvj.cdg.djd && !tvj.cdg.drz) {
                tvj.cdg.id = window.uhk(tvj.cdg.ffz)
            } else {
                if (c == 0) {
                    tvj.cdg.ffz()
                } else {
                    tvj.cdg.id = setTimeout(tvj.cdg.ffz, c)
                }
            }
        } else {
            tvj.cdg.ctg = false;
            tvj.cdg.fop();
            tvj.cdg.xpg = 0;
            tvj.cdg.woe = false;
            tvj.cdg.iyx()
        }
    };
    this.fjo = function() {};
    this.iyx = function() {
        if (tvj.cdg.cca === false) {
            var d = tvj.cdg.xtl();
            clearTimeout(tvj.cdg.woa);
            for (var c = 0, b = tvj.cdg.yet.length; c < b && d; c++) {
                if (tvj.cdg.yet[c].dpw()) {
                    tvj.cdg.yet[c].tuf();
                    d = false
                }
            }
            if (d) {
                for (var c = 0, b = tvj.cdg.yet.length; c < b; c++) {
                    tvj.cdg.yet[c].hty().length = 0;
                    tvj.cdg.yet[c].umr().length = 0;
                    tvj.cdg.yet[c].fyi()
                }
                tvj.cdg.pvx = true;
                if (tvj.cdg.yaz()) {
                    tvj.cdg.exw()
                } else {
                    if (tvj.cdg.dzm() === true) {
                        tvj.cdg.ohc()
                    } else {
                        tvj.cdg.fnz()
                    }
                }
            } else {
                tvj.cdg.pvx = false
            }
        } else {
            tvj.cdg.woa = setTimeout(tvj.cdg.iyx, 50)
        }
    };
    this.xtl = function() {
        for (var c = 0, b = this.yet.length; c < b; c++) {
            if (this.yet[c] && !this.yet[c].yta) {
                return false
            }
        }
        return true
    };
    this.pku = function() {
        return (tvj.wxo.value79 === 0)
    };
    this.uti = function() {
        var c = 0,
            b = tvj.cdg.yet.length;
        if (!tvj.cdg.ezp) {
            tvj.cdg.hxb = false;
            tvj.cdg.ezp = true;
            if (!tvj.cdg.ukq) {
                if (!tvj.cdg.qzj) {
                    tvj.cdg.ukq = true;
                    for (c = 0; c < b; c++) {
                        if (tvj.cdg.yet[c] && tvj.cdg.uxt[c]) {
                            tvj.cdg.yet[c].tmy(tvj.cdg.mav[c], tvj.cdg.blz[c] - tvj.cdg.blz[0], tvj.cdg.gkc)
                        }
                    }
                } else {
                    tvj.cdg.ukq = true;
                    for (c = 0; c < b; c++) {
                        if (tvj.cdg.yet[c] && tvj.cdg.uxt[c]) {
                            tvj.cdg.yet[c].tmy((tvj.cdg.yku) ? tvj.cdg.lzu[c] : tvj.cdg.mav[c], tvj.cdg.blz[c] - tvj.cdg.blz[0], tvj.cdg.gkc)
                        }
                    }
                }
            }
            for (c = 0; c < b; c++) {
                if (tvj.cdg.yet[c] && tvj.cdg.uxt[c]) {
                    tvj.cdg.yet[c].ton()
                }
            }
        }
    };
    this.iog = function() {
        this.hxb = true;
        this.qio = 0;
        for (var c = 0, b = this.yet.length; c < b; c++) {
            if (this.yet[c] && !this.yet[c].yta) {
                this.yet[c].qxi()
            }
        }
    };
    this.acu = function() {
        if (this.rpn) {
            this.blz = this.wxa;
            this.cbp = this.yly
        } else {
            this.blz = this.osx;
            this.cbp = this.juq
        }
        this.drz = this.lgx()
    };
    this.ulu = function() {
        this.xbq.ruf("spin")
    };
    this.fop = function() {
        this.xbq.loh("spin")
    };
    this.mqy = function() {};
    this.dih = function() {
        if (!this.qzj) {
            this.mnk()
        } else {
            if (this.hbr() === true) {
                this.xbq.nvj("freespinstart", 1, 300)
            }
        }
        for (var c = 0, b = this.yet.length; c < b; c++) {
            this.yet[c].jlp = ((c % 2) == 0) ? this.xbq.xhq("stop1") : this.xbq.xhq("stop2");
            this.yet[c].nhp().length = 0;
            this.yet[c].aqm = false;
            this.yet[c].wbe = null;
            this.yet[c].fjy = null
        }
        for (var c = 0, b = this.mct.length; c < b; c++) {
            this.mct[c] = 0
        }
    };
    this.uzw = function(b) {
        if (this.qzj === true) {
            if (this.hbr() === true) {
                this.xbq.nvj("freespinstart", 0, 300)
            }
            this.ljg.zcr.tew("start", "#zja", [this.language.start, true])
        } else {
            this.plr(0, 0);
            this.ljg.zcr.tew("info", "#jpi");
            if (!this.fzd()) {
                this.ljg.zcr.tew("start", "#zja", [this.language.bpj, true])
            } else {
                this.ljg.zcr.tew("start", "#zja", [this.language.start, true])
            }
        }
        this.ljg.ein(false);
        this.bcy.dns();
        this.bcy.uwq(b)
    };
    this.fnz = function() {
        if (!tvj.cdg.qzj && tvj.cdg.qio >= tvj.cdg.zjo * tvj.cdg.dpx) {
            tvj.cdg.uzw(tvj.cdg.qio / tvj.cdg.zjo)
        } else {
            if (tvj.cdg.qzj && tvj.cdg.idf >= tvj.cdg.zjo * tvj.cdg.dpx) {
                tvj.cdg.uzw(tvj.cdg.idf / tvj.cdg.zjo)
            } else {
                tvj.cdg.jno()
            }
        }
    };
    this.jno = function() {
        if (this.qio > 0 && !this.qzj) {
            this.mli = false;
            this.fwn = false;
            this.ehd();
            if (this.twr()) {
                this.ckk()
            } else {
                this.plr(0, 200);
                this.ljg.ein(false);
                this.id = setTimeout(this.kch, 200)
            }
        } else {
            if (this.idf > 0 && this.qzj) {
                this.mli = false;
                this.fwn = false;
                this.ehd();
                if (this.twr()) {
                    this.ckk()
                } else {
                    this.ljg.ein(false);
                    this.id = setTimeout(this.mna, 200)
                }
            } else {
                this.frk();
                this.vfg = [];
                this.aar = 0;
                if (this.twr()) {
                    this.ckk()
                } else {
                    if (this.dvg()) {
                        this.wod()
                    } else {
                        if (this.qzj && this.mdh > 0 || !this.qzj) {
                            this.bam(true)
                        }
                        this.qyk()
                    }
                }
            }
        }
    };
    this.tmx = function() {
        this.uiu = false;
        clearTimeout(this.gih);
        this.hff(this.qio);
        this.mnk();
        this.bam(false);
        this.lfg();
        this.exj();
        this.pcx();
        this.ljg.zcr.tew("info", "#jpi");
        this.ljg.ein(false);
        this.raj(false);
        this.bdk.dns();
        this.bdk.ein(true);
        this.afx.tew("settings", "#dwo");
        if (this.hue.abu === false) {
            this.ljg.zcr.tew("setting", "#bml", [this.afx.tew("settings", "#dse")])
        }
        if (this.qzj === true && this.hbr() === true) {
            this.xbq.nvj("freespinstart", 0, 0)
        } else {
            if (this.qzj === false) {
                this.plr(0, 0)
            }
        }
    };
    this.yea = function() {
        this.bdk.ein(false);
        if (!this.qzj) {
            this.ljg.ein(true)
        } else {
            this.ljg.xmn(true)
        }
        this.bam(true);
        this.raj(true);
        this.bdk.dwo();
        if (!this.qzj) {
            if (this.qio > 0) {
                this.ljg.zcr.tew("info", "#ylv", [this.language.vtl.toUpperCase() + ": " + this.axw(this.qio)])
            } else {
                this.ljg.zcr.tew("info", "#sto", [0])
            }
            this.plr(1, 200)
        } else {
            this.eet(true);
            this.exy();
            if (this.hbr() === true) {
                this.xbq.nvj("freespinstart", 1, 200)
            }
        }
    };
    this.oic = function() {
        var b = tvj.cdg.ljg.zcr.mmc("gamble");
        tvj.cdg.rvt();
        if (b) {
            b.xuf();
            b.bml(tvj.cdg.fzw)
        }
        tvj.cdg.uiu = false;
        clearTimeout(tvj.cdg.gih);
        tvj.cdg.mnk();
        tvj.cdg.lfg();
        tvj.cdg.exj();
        tvj.cdg.pcx();
        clearTimeout(tvj.cdg.ebm);
        if (tvj.cdg.qzj === false) {
            tvj.cdg.plr(1, 300)
        }
        tvj.cdg.ljg.zcr.tew("info", "#jpi");
        tvj.cdg.ljg.ein(false);
        tvj.cdg.bam(false);
        tvj.cdg.raj(false);
        if (tvj.cdg.hfs) {
            tvj.cdg.hfs.ein(true);
            tvj.cdg.hfs.ing(tvj.cdg.bex, tvj.cdg.qio);
            tvj.cdg.hfs.zcr.tew("history", "#uys");
            tvj.cdg.hfs.dns();
            tvj.cdg.hfs.uxp()
        }
    };
    this.phx = function() {
        tvj.cdg.frk();
        tvj.cdg.raj(true);
        if (tvj.cdg.hfs) {
            tvj.cdg.hfs.esm();
            tvj.cdg.hfs.utl();
            tvj.cdg.hfs.ein(false);
            tvj.cdg.hfs.tzp(false, true)
        }
        tvj.cdg.ljg.zcr.tew("start", "#zja", [tvj.cdg.language.start, true]);
        tvj.cdg.jgi = true;
        if (tvj.cdg.qsy) {
            tvj.cdg.ljg.khm(true);
            tvj.cdg.tzu = setTimeout(tvj.cdg.rkv, 400)
        } else {
            tvj.cdg.ljg.ein(true);
            tvj.cdg.bam(true);
            if (tvj.cdg.qio > 0) {
                tvj.cdg.ljg.zcr.tew("info", "#ylv", [tvj.cdg.language.vtl.toUpperCase() + ": " + tvj.cdg.axw(tvj.cdg.qio)])
            } else {
                tvj.cdg.ljg.zcr.tew("info", "#sto", [0])
            }
        }
    };
    this.exy = function() {
        var b = this.afx.mmc("tops");
        if (b) {
            if (b.ahs() == 1) {
                b.pai(0)
            } else {
                b.pai(1)
            }
            this.mdb()
        }
    };
    this.cck = function() {
        var b = this.afx.mmc("topi"),
            c = this.afx.mmc("settings");
        this.fzw = !tvj.cdg.fzw;
        this.ljg.zcr.tew("gamble", "#bml", [this.fzw]);
        if (b) {
            b.gmq("gamble", this.fzw)
        }
        if (c) {
            c.zcr.tew("gamble", "#ibc", [(this.fzw) ? 1 : 0])
        }
    };
    this.yzi = function() {
        if (this.uli) {
            return false
        }
        var b = new mfo(197, 24, 246, 200),
            c = tvj.wxo[tvj.cdg.language.dzz.toLowerCase().replace(/\s/g, "") + (b.y / 4)];
        if (c && c.indexOf(":" + b.ror() + "/") >= 0) {
            return false
        }
        return true
    };
    this.bip = function() {
        if (this.vae === false) {
            this.pwd = 100;
            return
        }
        if (this.yzi()) {
            var c = new Date().getTime(),
                b = c % this.yet.length,
                d = c % this.yet[b].kql.length;
            if (this.pwd <= 0 && ((this.qzj && this.idf == 0) || (!this.qzj && this.qio == 0)) && c & 1 == 1) {
                if (this.qzj && this.yku) {
                    this.lzu[b] = d
                } else {
                    this.mav[b] = d
                }
            } else {
                this.pwd = (this.pwd > 0) ? this.pwd - 1 : 0
            }
        }
    };
    this.kch = function() {
        tvj.cdg.hkp = 0;
        tvj.cdg.yqb();
        tvj.cdg.pyp();
        tvj.cdg.idm(tvj.cdg.mav);
        tvj.cdg.qdl();
        tvj.cdg.myf();
        if ((tvj.cdg.axq || tvj.cdg.rjv || tvj.cdg.uzy) && tvj.cdg.qio > 0 && tvj.cdg.aar > 0 && !tvj.cdg.woe) {
            tvj.cdg.bzc(tvj.cdg.axq, tvj.cdg.rjv)
        }
        if (tvj.cdg.qio > 0) {
            if (!tvj.cdg.woe) {
                tvj.cdg.vcq();
                tvj.cdg.ljg.ein(false)
            }
            if (!tvj.cdg.fzd()) {
                if (!tvj.cdg.uli) {
                    tvj.cdg.ljg.zcr.tew("start", "#zja", [tvj.cdg.language.bpj, true])
                }
            } else {
                tvj.cdg.ljg.zcr.tew("start", "#zja", [tvj.cdg.language.start, true])
            }
            tvj.cdg.tpx();
            tvj.cdg.ngi = true;
            tvj.cdg.ajf = setTimeout(tvj.cdg.drn, 10)
        } else {}
    };
    this.mna = function() {};
    this.drn = function() {
        if (!tvj.cdg.woe) {
            if (!tvj.cdg.qzj) {
                tvj.cdg.eaw()
            } else {
                tvj.cdg.gdw()
            }
        }
        if (!tvj.cdg.fwn) {
            if (tvj.cdg.wvk) {
                tvj.cdg.mie()
            } else {
                tvj.cdg.azc()
            }
        }
    };
    this.tpx = function() {
        var b = this.ljg.zcr.mmc("info");
        if (b) {
            if (!this.fzd()) {
                if (b.uvf()) {
                    b.ylv(this.language.gvt, true)
                }
            } else {
                b.ylv(this.language.jyx, true)
            }
        }
    };
    this.vcq = function() {};
    this.aik = function() {};
    this.zxf = function() {
        for (var b = 0; b < this.wna; b++) {
            this.eli[b] *= this.aww
        }
        this.eli[this.wna] *= this.zyd()
    };

    function a(d, c) {
        return c[1] - d[1]
    }
    this.ehd = function() {
        var c = [],
            d = 0;
        this.zxf();
        this.vfg = [];
        this.aar = 0;
        d = this.eli[this.wna];
        for (var b = 0; b < this.wna; b++) {
            c[b] = [b, this.eli[b]]
        }
        c.sort(a);
        if (this.okh(d, c)) {
            this.eli[0] = d;
            this.vfg[0] = this.wna;
            if (this.eli[0] > 0) {
                this.aar++
            }
            for (var b = 1; b < this.wna + 1; b++) {
                this.eli[b] = c[b - 1][1];
                this.vfg[b] = c[b - 1][0];
                if (this.eli[b] > 0) {
                    this.aar++
                }
            }
            this.wvk = false
        } else {
            for (var b = 0; b < this.wna; b++) {
                this.eli[b] = c[b][1];
                this.vfg[b] = c[b][0];
                if (this.eli[b] > 0) {
                    this.aar++
                }
            }
            this.eli[this.wna] = d;
            this.vfg[this.wna] = this.wna;
            if (this.eli[this.wna] > 0) {
                this.aar++
            }
            this.wvk = true
        }
    };
    this.okh = function(c, b) {
        return c > b[0][1]
    };
    this.bop = function() {
        this.hkp = this.hkp + 1
    };
    this.xka = function() {
        this.tlw = this.tlw + 1
    };
    this.mie = function() {
        if (!this.jgi) {
            if (this.hkp < this.vfg.length && this.vfg[this.hkp] < this.aum.length) {
                if (!this.jlg) {
                    this.yqb()
                }
                var b = this.gge(this.vfg[this.hkp]);
                this.vni = this.xiy(b);
                if (!this.jlg) {
                    this.nhy(b)
                }
                if (this.eli[this.hkp] > 0) {
                    this.wvg(this.waz, this.vni, this.hkp);
                    this.bcy.dns();
                    if (!this.mli && !this.woe && this.hkp == 0) {
                        if (this.npo) {
                            this.xbq.ruf("symb" + this.waz);
                            if (this.gog > 0) {
                                this.ebm = setTimeout(this.yab, this.gog)
                            }
                        } else {
                            this.zmh()
                        }
                    } else {
                        if (this.ewz) {
                            this.eid()
                        }
                    }
                    this.obk()
                } else {
                    this.bop();
                    this.mie()
                }
            } else {
                if (this.poi >= 0 && this.wvk && this.hkp <= this.aum.length) {
                    this.azc();
                    this.ngi = false
                } else {
                    this.ase()
                }
            }
        }
    };
    this.xiy = function(b) {
        var e = 0,
            c = 0;
        this.vni = 0;
        this.crc = 0;
        this.waz = b[e];
        if (this.waz == this.poi) {
            return 0
        }
        for (var d = e; d < 5; d++) {
            if (this.waz == b[d]) {
                this.vni += 1
            } else {
                break
            }
        }
        if (this.vni == 0) {
            return 0
        }
        c = this.zkh[this.waz][this.vni - 1];
        if (c > 0) {
            return this.vni
        }
        return 0
    };
    this.azc = function() {
        if (!this.jgi) {
            if (!this.jlg) {
                this.yqb()
            }
            var b = this.nzo();
            if (b > 0 && this.zkh[this.poi][b - 1] > 0) {
                this.wvg(this.poi, b, this.hkp);
                this.bcy.dns();
                if (!this.mli && !this.woe && this.hkp == 0) {
                    if (this.npo) {
                        this.xbq.ruf("symb" + this.poi);
                        if (this.gog > 0) {
                            this.ebm = setTimeout(this.yab, this.gog)
                        }
                    } else {
                        this.zmh()
                    }
                } else {
                    if (this.ewz) {
                        this.eid()
                    }
                }
                this.luz()
            } else {
                this.ase()
            }
        }
    };
    this.obk = function() {
        if (this.uiu && this.qsy || !this.qsy) {
            if (!(this.fzw && this.vij && !this.uiu && !this.woe)) {
                this.xco([this.vfg[this.hkp] + 1]);
                if (this.fid && this.qsy && this.tlw > 0 && !this.woe) {
                    this.bcy.obk(this.vfg[this.hkp], this.zwh, this.nsr, this.waz, this.crc, this.vni, true, true)
                } else {
                    this.bcy.obk(this.vfg[this.hkp], this.zwh, this.nsr, this.waz, this.crc, this.vni, true, false)
                }
            } else {
                if (!this.lrh) {
                    this.xco([this.vfg[this.hkp] + 1]);
                    if (this.fid) {
                        this.bcy.obk(this.vfg[this.hkp], this.zwh, this.nsr, this.waz, this.crc, this.vni, true, true)
                    } else {
                        this.bcy.obk(this.vfg[this.hkp], this.zwh, this.nsr, this.waz, this.crc, this.vni, false, false)
                    }
                } else {
                    this.ljg.zcr.tew("win", "#jpi");
                    this.xco([this.wna + 1]);
                    this.bop();
                    this.mie()
                }
            }
        } else {
            if (this.qsy && !this.woe && !this.lrh) {
                this.xco([this.vfg[this.hkp] + 1]);
                if (this.fid) {
                    this.bcy.obk(this.vfg[this.hkp], this.zwh, this.nsr, this.waz, this.crc, this.vni, true, true)
                } else {
                    this.bcy.obk(this.vfg[this.hkp], this.zwh, this.nsr, this.waz, this.crc, this.vni, false, false)
                }
            } else {
                this.ljg.zcr.tew("win", "#jpi");
                this.xco([this.wna + 1]);
                this.bop();
                this.mie()
            }
        }
    };
    this.luz = function() {
        if (this.uiu && this.qsy || !this.qsy) {
            this.xco([this.wna + 1]);
            if (!(this.fzw && this.vij && !this.uiu && !this.woe)) {
                if (this.fid && this.qsy && this.tlw > 0 && !this.woe) {
                    this.bcy.obk(-1, this.zwh, false, this.poi, this.crc, this.vni, true, true)
                } else {
                    this.bcy.obk(-1, this.zwh, false, this.poi, this.crc, this.vni, true, false)
                }
            } else {
                if (!this.lrh) {
                    if (this.fid) {
                        this.bcy.obk(-1, this.zwh, false, this.poi, this.crc, this.vni, true, true)
                    } else {
                        this.bcy.obk(-1, this.zwh, false, this.poi, this.crc, this.vni, false, false)
                    }
                } else {
                    this.ljg.zcr.tew("win", "#jpi");
                    this.bop();
                    this.mie()
                }
            }
        } else {
            if (this.qsy && !this.woe && !this.lrh) {
                this.xco([this.wna + 1]);
                if (this.fid) {
                    this.bcy.obk(-1, this.zwh, false, this.poi, this.crc, this.vni, true, true)
                } else {
                    this.bcy.obk(-1, this.zwh, false, this.poi, this.crc, this.vni, false, false)
                }
            } else {
                this.ljg.zcr.tew("win", "#jpi");
                this.xco([this.wna + 1]);
                this.bop();
                this.mie()
            }
        }
    };
    this.xco = function(b) {
        if (this.bou === true) {
            this.afx.tew("llinep", "#dke", [b, true]);
            this.afx.tew("rlinep", "#dke", [b, true])
        }
    };
    this.wvg = function(c, d, b) {
        var e = this.ljg.zcr.mmc("win");
        if (e) {
            if (this.qio > 0 && !this.qzj) {
                if (this.eli[b] > 0) {
                    if (c == this.poi) {
                        e.hyr(this.language.xtd, this.language.qio + ": " + this.axw(this.eli[b]), c, d)
                    } else {
                        e.hyr(this.language.bmr + " " + (this.vfg[b] + 1) + ": ", this.language.qio + ": " + this.axw(this.eli[b]), c, d)
                    }
                }
            } else {
                if (this.qzj && this.idf > 0) {
                    if (this.eli[b] > 0) {
                        if (this.wew > 1) {
                            if (c == this.poi) {
                                e.hyr(this.language.xtd, this.language.qio + ": " + this.axw(this.eli[b]) + " x " + this.wew, c, d)
                            } else {
                                e.hyr(this.language.bmr + " " + (this.vfg[b] + 1) + ": ", this.language.qio + ": " + this.axw(this.eli[b]) + " x " + this.wew, c, d)
                            }
                        } else {
                            if (c == this.poi) {
                                e.hyr(this.language.xtd, this.language.qio + ": " + this.axw(this.eli[b]), c, d)
                            } else {
                                e.hyr(this.language.bmr + " " + (this.vfg[b] + 1) + ": ", this.language.qio + ": " + this.axw(this.eli[b]), c, d)
                            }
                        }
                    }
                }
            }
        }
    };
    this.yab = function() {
        tvj.cdg.xbq.ruf("wincountfade")
    };
    this.yqb = function() {
        for (var b = 0; b < this.zwh.length; b++) {
            for (var c = 0; c < this.zwh[b].length; c++) {
                this.zwh[b][c] = -1
            }
        }
    };
    this.pyp = function() {
        for (var b = 0; b < this.llx.length; b++) {
            for (var c = 0; c < this.llx[b].length; c++) {
                this.llx[b][c] = -1
            }
        }
    };
    this.idm = function(e) {
        for (var d = 0; d < this.uua; d++) {
            for (var b = 0; b < this.mvz; b++) {
                var c = (e[d] - 1 + b >= 0) ? e[d] - 1 + b : this.yet[d].kql.length + e[d] - 1 + b;
                c = (c > this.yet[d].kql.length - 1) ? c - (this.yet[d].kql.length) : c;
                this.llx[d][b] = this.yet[d].kql[c]
            }
        }
    };
    this.qdl = function() {
        if (this.jlg) {
            for (var d = 0; d < this.aum.length; d++) {
                if (this.vfg[d] < this.aum.length) {
                    var c = this.gge(this.vfg[d]);
                    this.vni = this.xiy(c);
                    if (this.eli[d] > 0) {
                        for (var b = this.crc; b < this.crc + this.vni; b++) {
                            if (this.red && c[b] == this.lem) {
                                this.zwh[b][this.aum[this.vfg[d]][b] - 1] = this.qzc
                            } else {
                                this.zwh[b][this.aum[this.vfg[d]][b] - 1] = c[b]
                            }
                        }
                    }
                }
            }
        }
    };
    this.myf = function() {
        if (this.jlg) {
            if (this.poi >= 0) {
                var d = 0;
                for (var c = 0; c < this.llx.length; c++) {
                    for (var b = 0; b < this.llx[c].length; b++) {
                        if (this.llx[c][b] == this.poi) {
                            d++
                        }
                    }
                }
                if ((this.eli[this.aum.length] > 0 && this.wvk) || (this.eli[0] > 0 && !this.wvk)) {
                    for (var c = 0; c < this.llx.length; c++) {
                        for (var b = 0; b < this.llx[c].length; b++) {
                            if (this.llx[c][b] == this.poi) {
                                this.zwh[c][b] = this.llx[c][b]
                            }
                        }
                    }
                }
            }
        }
    };
    this.gge = function(d) {
        var c = [];
        for (var b = 0; b < this.aum[d].length; b++) {
            c[b] = this.llx[b][this.aum[d][b] - 1]
        }
        return c
    };
    this.nhy = function(c) {
        for (var b = this.crc; b < this.crc + this.vni; b++) {
            if (this.red && c[b] == this.lem) {
                this.zwh[b][this.aum[this.vfg[this.hkp]][b] - 1] = this.qzc
            } else {
                this.zwh[b][this.aum[this.vfg[this.hkp]][b] - 1] = c[b]
            }
        }
    };
    this.nzo = function() {
        var d = 0;
        for (var c = 0; c < this.llx.length; c++) {
            for (var b = 0; b < this.llx[c].length; b++) {
                if (this.llx[c][b] == this.poi) {
                    this.zwh[c][b] = this.llx[c][b];
                    d++;
                    break
                }
            }
        }
        return d
    };
    this.fww = function(b) {
        if (((this.red && b == this.qzc) && this.qzc >= 0) || (b == this.lem && this.lem >= 0)) {
            return true
        }
        return false
    };
    this.qyk = function() {
        if (this.edj) {
            this.ljg.zcr.tew("start", "#zja", [this.language.start, true]);
            if (!this.qzj) {
                this.lfg();
                this.ljg.ein(false);
                this.yim = setTimeout(this.rii, 600)
            } else {
                this.haa()
            }
        } else {
            if (!this.qzj) {
                this.tnt()
            } else {
                this.spe()
            }
        }
    };
    this.tnt = function() {
        if (this.qio > 0) {
            if (this.fzw && this.vij) {
                setTimeout(this.oic, 400)
            } else {
                if (this.qsy || this.yjp) {
                    if (!this.dwz && !this.jgi) {
                        if (this.yjp) {
                            this.dwz = true;
                            this.lfg();
                            setTimeout(this.bpj, 400)
                        } else {
                            clearTimeout(this.jgv);
                            this.jgv = setTimeout(this.tud, 400)
                        }
                    }
                }
            }
        } else {
            this.ljg.zcr.tew("info", "#ylv", [this.language.uob, true]);
            this.imw();
            if (this.nto > 0 && this.wao >= this.nto) {
                this.bam(false);
                this.ljg.ein(false);
                this.rsd();
                this.uvk()
            } else {
                if (this.qsy) {
                    this.tzu = setTimeout(this.rkv, 400)
                } else {
                    this.ljg.zcr.tew("info", "#qlc", [0]);
                    this.ljg.ein(true);
                    this.bam(true)
                }
                this.ljg.zcr.tew("start", "#zja", [this.language.start, true])
            }
        }
    };
    this.spe = function() {};
    this.cao = function() {
        return ((this.qsy || (this.fzw && this.vij && !this.uiu)) && this.aar > 1 && this.lrh)
    };
    this.obs = function() {
        var c = [],
            f = [],
            e = (this.wvk) ? 0 : 1,
            b = ((this.wvk && this.eli[this.wna] > 0) || (!this.wvk && this.eli[0] > 0)) ? this.aar - 1 : this.aar;
        for (var d = 0; d < b; d++, e++) {
            c[d] = this.vfg[e];
            f[d] = this.vfg[e] + 1
        }
        this.trh = true;
        this.fwn = true;
        this.pyp();
        this.yqb();
        this.idm((this.qzj === true) ? this.lzu : this.mav);
        this.qdl();
        this.myf();
        this.ljg.zcr.tew("win", "#ylv", [this.language.qio + " " + b + " " + this.language.tss, true]);
        this.xco(f);
        this.bcy.stop();
        this.bcy.vmg(c, this.zwh);
        this.dyo = setTimeout(this.jow, 1000)
    };
    this.jow = function() {
        if (tvj.cdg.dyo >= 0 && !tvj.cdg.qsy) {
            tvj.cdg.dyo = -1;
            tvj.cdg.lfg()
        }
        if (tvj.cdg.dvg()) {
            tvj.cdg.wod()
        } else {
            tvj.cdg.qyk()
        }
    };
    this.ase = function() {
        this.mli = true;
        this.woe = true;
        if (!this.qzj) {
            if (!this.uiu) {
                if (this.cao()) {
                    this.obs()
                } else {
                    this.jow()
                }
            }
            if (!(this.jgi || this.fwn || ((this.trh) && !this.uiu))) {
                if (!(this.fzw && this.vij && !this.uiu)) {
                    this.ert()
                }
            }
        } else {
            if (!this.uiu) {
                if (this.cao()) {
                    this.obs()
                } else {
                    this.jow()
                }
            } else {
                if (!(this.jgi || this.fwn || (this.trh && !this.uiu))) {
                    this.ert()
                } else {}
            }
        }
    };
    this.ert = function() {
        this.woe = true;
        if (!(this.bcy.dpw() || this.ttm)) {
            this.ttm = true;
            if (!this.qzj) {
                this.kch()
            } else {
                this.mna();
                if (!this.edj && this.mdh > 0) {
                    if (!this.uiu) {
                        this.bam(true);
                        this.ljg.xmn(true)
                    }
                }
            }
        }
    };
    this.dzm = function() {
        return false
    };
    this.twr = function() {
        return false
    };
    this.dvg = function() {
        return false
    };
    this.ohc = function() {};
    this.ckk = function() {};
    this.wod = function() {};
    this.fzd = function() {
        return this.edj
    };
    this.upk = function() {
        if (!tvj.cdg.dwz && !tvj.cdg.jgi) {
            tvj.cdg.tud()
        }
    };
    this.rkv = function() {
        if (tvj.cdg.gln() != null && (tvj.cdg.seb <= 0 || (tvj.cdg.qzj === false && tvj.cdg.kmp === false && tvj.cdg.bex - tvj.cdg.zyd() < tvj.cdg.ypy) || (tvj.cdg.qzj === false && tvj.cdg.kmp === false && tvj.cdg.aie > 0 && tvj.cdg.bex >= tvj.cdg.aie) || (tvj.cdg.qzj === false && tvj.cdg.ysh > 0 && tvj.cdg.qio > tvj.cdg.ysh))) {
            if (tvj.cdg.qsy === true) {
                tvj.cdg.vnf()
            }
            tvj.cdg.bam(true);
            if (tvj.cdg.qzj === true) {
                tvj.cdg.hff(tvj.cdg.qio);
                tvj.cdg.lfg();
                tvj.cdg.exj();
                tvj.cdg.pcx();
                tvj.cdg.ljg.zcr.tew("info", "#jpi");
                tvj.cdg.eet(true);
                tvj.cdg.ljg.xmn(true)
            } else {
                tvj.cdg.ljg.zcr.tew("info", "#ufm");
                tvj.cdg.ljg.ein(true)
            }
        } else {
            if (!tvj.cdg.ctg) {
                tvj.cdg.tud()
            }
        }
    };
    this.tsq = function() {};
    this.pks = function() {};
    this.qwk = function() {};
    this.jog = function() {};
    this.haa = function() {};
    this.rii = function() {};
    this.vfn = function() {};
    this.umy = function() {};
    this.jpm = function() {};
    this.piw = function() {
        var b = this.afx.mmc("tops");
        if (b) {
            b.pai(1)
        }
    };
    this.pba = function() {
        var b = this.afx.mmc("tops");
        if (b) {
            b.pai(0)
        }
    };
    this.nrs = function() {};
    this.gnm = function() {};
    this.qzr = function() {};
    this.omn = function() {};
    this.llc = function() {
        if (!(this.edj && this.qzj && this.qsy)) {
            this.ilg = false;
            if (!tvj.slh.evd) {
                this.tql = this.language.tel
            } else {
                this.tql = this.language.wff
            }
            this.dja = setInterval(this.wyt, 1000)
        }
    };
    this.wyt = function() {
        var b = tvj.cdg.ljg.zcr.mmc("info");
        if (b) {
            if (tvj.cdg.ilg) {
                b.ylv(tvj.cdg.tql, true)
            } else {
                b.jpi()
            }
            tvj.cdg.mdb();
            tvj.cdg.ilg = !tvj.cdg.ilg
        }
    };
    this.jww = function() {};
    this.aaw = function() {};
    this.drf = function(b) {};
    this.ncd = function(b) {
        if (b) {
            this.r1 = this.vdt.doy.ato;
            this.r2 = this.vdt.doy.ssi;
            this.r3 = this.vdt.doy.qeu;
            this.r4 = this.vdt.doy.dvc;
            this.r5 = this.vdt.doy.wch
        } else {
            this.r1 = this.vdt.doy.r1;
            this.r2 = this.vdt.doy.r2;
            this.r3 = this.vdt.doy.r3;
            this.r4 = this.vdt.doy.r4;
            this.r5 = this.vdt.doy.r5
        }
        this.ion.kql = this.r1;
        this.zyy.kql = this.r2;
        this.qsl.kql = this.r3;
        this.ocd.kql = this.r4;
        this.nic.kql = this.r5
    };
    this.dju = function() {};
    this.eaw = function() {
        if (!(this.fzw && this.vij)) {
            setTimeout(this.dxc, 500);
            if (!this.qsy && !this.yjp && !this.fzw && !this.fzd()) {
                this.ljg.zcr.tew("gamble", "#xwv")
            }
        }
        this.hoh = (this.qio > this.zjo) ? true : false;
        this.udr = 0;
        this.fpo = 0;
        this.msv = 0;
        this.cei = 0;
        this.cam = 0;
        this.anm = this.qio;
        this.iph = new Date().getTime();
        this.uiu = true;
        this.ykw = 0;
        this.pcx();
        this.xbq.loh("winfinal");
        this.gih = setTimeout(this.njw, this.hoa)
    };
    this.dxc = function() {
        if (tvj.cdg.qsy || tvj.cdg.fzd()) {
            tvj.cdg.ljg.xqu(true)
        } else {
            tvj.cdg.ljg.oia(true)
        }
    };
    this.gdw = function() {};
    this.flh = function() {};
    this.fxk = function() {
        this.lfg();
        this.exj();
        if (this.qzj) {
            this.trh = true
        }
        this.pvc()
    };
    this.xts = function() {};
    this.lfg = function() {
        this.fwn = true;
        this.mli = true;
        if (this.axq || this.rjv || this.uzy) {
            this.bzc(false, false)
        }
        this.ljg.zcr.tew("win", "#jpi");
        this.xco(null);
        this.bcy.stop();
        this.bcy.dwo()
    };
    this.exj = function() {
        if (this.npo) {
            for (var c = 0, b = this.xbq.tuq("symb"); c < b; c++) {
                this.xbq.loh("symb" + c)
            }
        }
    };
    this.zmh = function() {
        if (tvj.cdg.uiu) {
            tvj.cdg.tdh = false;
            tvj.cdg.ykw = new Date().getTime();
            tvj.cdg.xbq.ruf("wincount");
            tvj.cdg.tlw += 1;
            tvj.cdg.fpo = 0;
            tvj.cdg.msv = 0
        } else {
            clearTimeout(tvj.cdg.ebm);
            if (tvj.cdg.qzj === true && tvj.cdg.hbr() === true) {
                tvj.cdg.xbq.nvj("freespinstart", tvj.cdg.vme(), 300)
            } else {
                if (tvj.cdg.qzj === false) {
                    tvj.cdg.plr(1, 300)
                }
            }
        }
    };
    this.pcx = function() {
        this.xbq.loh("wincount");
        this.xbq.loh("wincount1");
        this.xbq.loh("wincount2");
        this.xbq.loh("wincount3");
        this.xbq.loh("wincount4");
        this.xbq.loh("wincount5");
        this.xbq.loh("wincount6")
    };
    this.jsq = function() {
        tvj.cdg.tdh = true;
        if (tvj.cdg.qzj === true && tvj.cdg.hbr() === true) {
            tvj.cdg.xbq.nvj("freespinstart", tvj.cdg.vme(), 300)
        } else {
            if (tvj.cdg.qzj === false && tvj.cdg.edj === false) {
                tvj.cdg.plr(1, 300)
            }
        }
    };
    this.njw = function() {
        var d = 0,
            b = tvj.cdg.hoa,
            c = 0;
        if (tvj.cdg.cam < tvj.cdg.anm) {
            if (tvj.cdg.vmm == 1) {
                tvj.cdg.hdh()
            } else {
                if (tvj.cdg.vmm == 2) {
                    tvj.cdg.bbd()
                } else {
                    if (tvj.cdg.vmm == 3) {
                        tvj.cdg.qyn()
                    }
                }
            }
            d = tvj.cdg.vvu(tvj.cdg.anm - tvj.cdg.cam);
            tvj.cdg.cam += d;
            tvj.cdg.hff(tvj.cdg.cei + tvj.cdg.cam);
            tvj.cdg.udr++;
            c = new Date().getTime();
            b = tvj.cdg.hoa + (tvj.cdg.udr * tvj.cdg.hoa - (c - tvj.cdg.iph));
            tvj.cdg.gih = setTimeout(tvj.cdg.njw, b)
        } else {
            tvj.cdg.pvc()
        }
    };
    this.hdh = function() {
        if (this.ykw > 0) {
            var b = new Date().getTime() - this.ykw;
            if (b > 7112 && this.fpo == 0) {
                this.xbq.ruf("wincount1");
                this.fpo = 1
            } else {
                if (b > (7112 + (3556 * this.fpo))) {
                    if (this.fpo % 2 == 0) {
                        if (this.cam >= this.zjo * this.mjs) {
                            this.xbq.ruf("wincount5");
                            if (this.yvx) {
                                if (!this.bcy.tjl) {
                                    this.bcy.fzv()
                                } else {
                                    this.bcy.glb()
                                }
                            }
                        } else {
                            if (this.cam >= this.zjo * this.dpx) {
                                this.xbq.ruf("wincount3")
                            } else {
                                this.xbq.ruf("wincount1")
                            }
                        }
                    } else {
                        if (this.cam >= this.zjo * this.mjs) {
                            this.xbq.ruf((this.xbq.xjm === true) ? "wincount5" : "wincount6");
                            if (this.yvx) {
                                if (!this.bcy.tjl) {
                                    this.bcy.fzv()
                                } else {
                                    this.bcy.glb()
                                }
                            }
                        } else {
                            if (this.cam >= this.zjo * this.dpx) {
                                this.xbq.ruf((this.xbq.xjm === true) ? "wincount3" : "wincount4")
                            } else {
                                this.xbq.ruf((this.xbq.xjm === true) ? "wincount1" : "wincount2")
                            }
                        }
                    }
                    this.fpo += 1
                }
            }
        }
    };
    this.bbd = function() {
        if (this.ykw > 0) {
            var b = new Date().getTime() - this.ykw;
            if (b > 4173 && this.fpo == 0) {
                this.xbq.ruf("wincount1");
                this.fpo = 1
            } else {
                if (b > (4173 + (4173 * (this.fpo + this.msv)))) {
                    if (this.fpo % 2 == 0) {
                        if (this.cam >= this.zjo * this.mjs) {
                            this.xbq.ruf("wincount5");
                            if (this.yvx) {
                                if (!this.bcy.tjl) {
                                    this.bcy.fzv()
                                } else {
                                    this.bcy.glb()
                                }
                            }
                            this.msv += 1
                        } else {
                            if (this.cam >= this.zjo * this.dpx) {
                                this.xbq.ruf("wincount3")
                            } else {
                                this.xbq.ruf("wincount1")
                            }
                        }
                    } else {
                        if (this.cam >= this.zjo * this.mjs) {
                            this.xbq.ruf((this.xbq.xjm === true) ? "wincount5" : "wincount6");
                            if (this.yvx) {
                                if (!this.bcy.tjl) {
                                    this.bcy.fzv()
                                } else {
                                    this.bcy.glb()
                                }
                            }
                            this.msv += 1
                        } else {
                            if (this.cam >= this.zjo * this.dpx) {
                                this.xbq.ruf((this.xbq.xjm === true) ? "wincount3" : "wincount4")
                            } else {
                                this.xbq.ruf((this.xbq.xjm === true) ? "wincount1" : "wincount2")
                            }
                        }
                    }
                    this.fpo += 1
                }
            }
        }
    };
    this.qyn = function() {};
    this.pvc = function() {
        if (this.anm > 0) {
            clearTimeout(this.ebm);
            this.xbq.nvj("wincountfade", 0, 300);
            if (this.ykw > 0) {
                this.xbq.ruf("winfinal")
            } else {
                if (this.qzj === false && this.edj === false) {
                    this.plr(1, 300)
                }
            }
        } else {
            this.jsq()
        }
        this.pcx();
        this.hff(this.qio);
        this.eud(this.qio);
        this.uiu = false;
        clearTimeout(this.gih);
        if (!(this.qsy || this.yjp)) {
            if (!(this.tij > 0)) {
                if (!this.fzw) {
                    this.xve = setTimeout(this.eid, 500)
                }
            } else {
                if (this.qzj && this.mdh > 0) {
                    this.ljg.xqu(true);
                    if (!this.edj && !this.dvg()) {
                        this.bam(true)
                    }
                }
            }
        }
        if (this.mli) {
            if (this.cao()) {
                this.obs()
            } else {
                this.jow()
            }
        }
    };
    this.vvu = function(c) {
        var b = this.aww;
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
    this.kuc = function() {
        return !(this.fzd() || this.yjp || this.qzj)
    };
    this.zss = function() {
        var d = tvj.cdg.ljg.zcr.mmc("gamble"),
            c = tvj.cdg.ljg.zcr.mmc("info"),
            b = tvj.cdg.ljg.zcr.mmc("win");
        tvj.cdg.rvt();
        if (d) {
            d.xuf();
            d.bml(tvj.cdg.fzw)
        }
        if (b) {
            b.jpi()
        }
        if (c) {
            c.ylv(tvj.cdg.language.vtl.toUpperCase() + ": " + tvj.cdg.axw(tvj.cdg.qio))
        }
        tvj.cdg.vdt.bpj()
    };
    this.bpj = function() {
        if (!tvj.cdg.jgi) {
            if (tvj.cdg.kgn != tvj.cdg.trv) {
                tvj.cdg.ljg.xqu(true)
            }
            tvj.cdg.lfg();
            tvj.cdg.mtd = 20;
            if (tvj.cdg.qio < tvj.cdg.mtd) {
                tvj.cdg.mtd = tvj.cdg.qio;
                tvj.cdg.mkh()
            } else {
                if (tvj.cdg.qio >= tvj.cdg.zyd() * 25) {
                    tvj.cdg.mtd = 40
                }
                tvj.cdg.mkh()
            }
        }
    };
    this.puc = function() {
        this.jgi = true;
        this.dwz = false;
        this.anm = 0;
        clearTimeout(this.mbo);
        this.xbq.loh("collect");
        this.xbq.loh("collectend");
        this.xbq.ruf("collectend");
        this.wie(this.bex, true);
        this.mnk();
        this.imw();
        this.ljg.zcr.tew("start", "#zja", [this.language.start, true]);
        if (this.nto > 0 && this.wao >= this.nto) {
            this.bam(false);
            this.ljg.ein(false);
            this.rsd();
            this.uvk()
        } else {
            this.bam(true);
            if (!this.qsy) {
                this.ljg.ein(true)
            } else {
                this.tzu = setTimeout(this.rkv, 500)
            }
        }
    };
    this.mkh = function() {
        this.bhc = false;
        this.hoh = (this.qio > this.zjo) ? true : false;
        this.udr = 0;
        this.cei = this.qio;
        if (this.kmp) {
            this.ahi = this.hcd - this.qio
        } else {
            this.ahi = this.bex - this.qio
        }
        this.cam = 0;
        this.anm = this.qio;
        this.iph = new Date().getTime();
        this.dwz = true;
        this.mbo = setTimeout(this.cqv, this.zpb)
    };
    this.cqv = function() {
        var d = 0,
            b = tvj.cdg.hoa,
            c = 0;
        if (tvj.cdg.anm > 0) {
            if (!tvj.cdg.bhc) {
                tvj.cdg.xbq.loh("collect");
                tvj.cdg.xbq.loh("collectend");
                tvj.cdg.xbq.ruf("collect");
                tvj.cdg.bhc = true
            }
            d = Math.round(tvj.cdg.anm / tvj.cdg.mtd);
            tvj.cdg.anm -= d;
            tvj.cdg.udr++;
            tvj.cdg.mtd -= 1;
            if (tvj.cdg.anm < 0) {
                tvj.cdg.anm = 0
            }
            tvj.cdg.hff(tvj.cdg.cei - (tvj.cdg.qio - tvj.cdg.anm));
            if (tvj.cdg.kmp) {
                tvj.cdg.nhg(tvj.cdg.ahi + (tvj.cdg.qio - tvj.cdg.anm), true)
            } else {
                tvj.cdg.wie(tvj.cdg.ahi + (tvj.cdg.qio - tvj.cdg.anm), true)
            }
            c = new Date().getTime();
            b = tvj.cdg.zpb + (tvj.cdg.udr * tvj.cdg.zpb - (c - tvj.cdg.iph));
            tvj.cdg.mbo = setTimeout(tvj.cdg.cqv, b)
        } else {
            if (!tvj.cdg.jgi) {
                tvj.cdg.xbq.loh("collect");
                tvj.cdg.xbq.ruf("collectend");
                tvj.cdg.dwz = false;
                tvj.cdg.jgi = true;
                clearTimeout(tvj.cdg.mbo);
                tvj.cdg.mnk();
                tvj.cdg.imw();
                tvj.cdg.ljg.zcr.tew("start", "#zja", [tvj.cdg.language.start, true]);
                if (tvj.cdg.nto > 0 && tvj.cdg.wao >= tvj.cdg.nto) {
                    tvj.cdg.bam(false);
                    tvj.cdg.ljg.ein(false);
                    tvj.cdg.rsd();
                    tvj.cdg.uvk()
                } else {
                    if (tvj.cdg.kgn == tvj.cdg.trv) {
                        tvj.cdg.kgn()
                    } else {
                        if (!tvj.cdg.qsy) {
                            tvj.cdg.ljg.ein(true)
                        } else {
                            tvj.cdg.ljg.khm(true)
                        }
                        tvj.cdg.bam(true);
                        if (tvj.cdg.qsy || tvj.cdg.yjp) {
                            tvj.cdg.ljg.zcr.tew("info", "#ylv", [tvj.cdg.language.vtl.toUpperCase() + ": " + tvj.cdg.axw(tvj.cdg.qio)]);
                            if (tvj.cdg.qsy) {
                                tvj.cdg.tzu = setTimeout(tvj.cdg.rkv, 400)
                            } else {
                                if (tvj.cdg.yjp) {}
                            }
                        }
                    }
                }
            }
        }
    };
    this.bzk = function(b, c, d) {
        if (b <= c) {
            return 1
        }
        var e = 0,
            f = this.vtw(b, c, d),
            g = 0;
        while (b > g) {
            f = this.vtw(b - g, c, d);
            g += f;
            e++
        }
        return e
    };
    this.vtw = function(e, b, c) {
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
    this.kwn = function(b) {
        this.kxt = true;
        this.zzp();
        this.ljg.zcr.tew("info", "#ylv", ["", true]);
        this.cdl();
        this.luj(b);
        if (b == tvj.odd.jef.loy) {
            this.frk();
            this.ljg.zcr.tew("info", "#sto", [0]);
            this.wxy((this.nto > 0 && this.wao < this.nto), false, true);
            this.ljg.ein(true);
            this.bam(true);
            this.uph()
        } else {
            if (b == tvj.odd.jef.slx) {
                if (this.qio > 0) {
                    this.woe = true;
                    this.jgi = false;
                    this.mli = false;
                    this.fwn = false;
                    this.ehd();
                    this.hff(this.qio);
                    this.ljg.zcr.tew("info", "#ylv", [this.language.vtl.toUpperCase() + ": " + this.axw(this.qio)]);
                    this.uiu = false;
                    this.bzc(this.axq, this.rjv);
                    this.vcq();
                    if (this.ojz() === false) {
                        this.vij = true;
                        this.ljg.zcr.tew("start", "#zja", [this.language.bpj, true]);
                        this.ljg.zcr.tew("gamble", "#xwv");
                        this.xve = setTimeout(this.eid, 10)
                    } else {
                        this.vij = false
                    }
                    if (this.twr()) {
                        this.ckk()
                    } else {
                        this.kch();
                        this.ljg.oia(true)
                    }
                } else {
                    this.frk();
                    this.ljg.zcr.tew("info", "#sto", [0]);
                    this.wxy((this.nto > 0 && this.wao < this.nto), false, true);
                    this.ljg.ein(true);
                    this.bam(true);
                    this.uph()
                }
                this.tij = 0;
                this.mdh = 0
            } else {
                if (b == tvj.odd.jef.pro || b == tvj.odd.jef.tex) {
                    this.tij = 0;
                    this.mdh = 0;
                    this.jgi = true;
                    this.frk();
                    this.ljg.zcr.tew("info", "#sto", [0]);
                    this.wxy((this.nto > 0 && this.wao < this.nto), false, true);
                    this.ljg.ein(true);
                    this.bam(true);
                    this.uph()
                } else {
                    if (b == tvj.odd.jef.mui || b == tvj.odd.jef.ogo || b == tvj.odd.jef.wsy || b == tvj.odd.jef.wfl) {
                        this.cqt(b)
                    } else {
                        if (b == tvj.odd.jef.rey) {
                            this.ncd(false);
                            this.tij = 0;
                            this.mdh = 0;
                            this.vij = true;
                            this.jgi = false;
                            if (this.qio > 0) {
                                this.hff(this.qio);
                                this.ljg.zcr.tew("info", "#ylv", [this.language.vtl.toUpperCase() + ": " + this.axw(this.qio)]);
                                if (this.ojz() === false) {
                                    this.ljg.zcr.tew("start", "#zja", [this.language.bpj, true]);
                                    this.ljg.zcr.tew("gamble", "#xwv");
                                    this.xve = setTimeout(this.eid, 10)
                                } else {
                                    this.vij = false
                                }
                                this.ljg.oia(true)
                            } else {
                                this.frk();
                                this.ljg.zcr.tew("info", "#sto", [0]);
                                this.wxy((this.nto > 0 && this.wao < this.nto), false, true);
                                this.ljg.ein(true);
                                this.bam(true);
                                this.uph()
                            }
                        } else {
                            if (b == tvj.odd.jef.zle) {
                                this.ncd(false);
                                this.tij = 0;
                                this.mdh = 0;
                                this.jgi = true;
                                this.frk();
                                this.ljg.zcr.tew("info", "#sto", [0]);
                                this.wxy((this.nto > 0 && this.wao < this.nto), false, true);
                                this.ljg.ein(true);
                                this.bam(true);
                                this.uph()
                            } else {
                                if (b == tvj.odd.jef.knr) {
                                    this.tij = 0;
                                    this.mdh = 0;
                                    this.yrs();
                                    this.kxt = true;
                                    if (this.qio == 0) {
                                        this.wxy((this.nto > 0 && this.wao < this.nto), false, true);
                                        this.uph()
                                    }
                                } else {
                                    if (b == tvj.odd.jef.dvt) {
                                        this.tij = 0;
                                        this.mdh = 0;
                                        this.bgs();
                                        this.kxt = true
                                    } else {
                                        this.isi(b)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.cqt = function(b) {};
    this.isi = function(b) {};
    this.luj = function(b) {
        if (tvj.wxo.value9 && tvj.slh.nqk == tvj.aox.myt && tvj.slh.qwg() === false) {
            return
        }
        if (b == tvj.odd.jef.ogo || b == tvj.odd.jef.wsy || b == tvj.odd.jef.wfl || b == tvj.odd.jef.mui) {
            this.xbq.ruf("freespinstart")
        } else {
            if (!((b == tvj.odd.jef.knr && this.qio > 0) || b == tvj.odd.jef.dvt)) {
                this.xbq.ruf("start");
                this.oei()
            }
        }
    };
    this.ytk = function() {
        this.bip();
        this.cdl();
        if (this.ion.rdc < this.mvz || this.ion.cex > 0) {
            this.rxu()
        } else {
            var b = this.ion.rdc * this.kep;
            setTimeout(this.rxu, b)
        }
    };
    this.rxu = function() {
        if (!tvj.cdg.ukq) {
            if (!tvj.cdg.rpn && tvj.cdg.pku()) {
                tvj.cdg.ljg.zcr.tew("start", "#zja", [tvj.cdg.language.yop, true])
            }
            tvj.cdg.mqy();
            for (var c = 0, b = tvj.cdg.yet.length; c < b; c++) {
                if (tvj.cdg.yet[c] && tvj.cdg.uxt[c]) {
                    tvj.cdg.yet[c].tmy(tvj.cdg.mav[c], tvj.cdg.blz[c] - tvj.cdg.blz[0] + tvj.cdg.mct[c], tvj.cdg.gkc)
                }
            }
            tvj.cdg.ukq = true;
            tvj.cdg.lqi = true;
            if (tvj.cdg.sdh === true) {
                tvj.cdg.uti()
            }
        }
    };
    this.qaf = function() {};
    this.uyi = function() {};
    this.xxy = function() {
        this.kxt = false;
        this.yjp = false;
        this.vij = true;
        this.trh = false;
        this.zzp();
        this.ytk();
        this.ljg.khm(true);
        this.wls()
    };
    this.qsv = function() {
        this.kxt = false;
        this.yjp = true;
        this.vij = false;
        this.trh = false;
        this.zzp();
        if (this.hfs && this.hfs.dse()) {
            this.wie(this.bex, false);
            this.hfs.ing(this.bex, this.qio, true);
            setTimeout(this.hfs.skj, 1000)
        } else {
            this.ytk();
            this.ljg.khm(true);
            this.wls()
        }
    };
    this.wmp = function() {
        this.kxt = false;
        this.vij = false;
        this.pvx = true;
        this.zzp();
        this.ezl();
        if (this.hfs && this.hfs.dse()) {
            this.hfs.esm();
            this.wie(this.bex, false);
            setTimeout(this.hfs.skj, 100)
        } else {
            this.bpj()
        }
    };
    this.bgs = function() {
        this.kxt = false;
        this.zzp();
        if (this.hfs) {
            if (!this.hfs.dse()) {
                this.oic()
            } else {
                this.hfs.uxp()
            }
            this.wie(this.bex, false);
            this.hfs.ing(this.bex, this.qio, true);
            this.hfs.ein(true)
        }
    };
    this.yrs = function() {
        this.kxt = false;
        this.zzp();
        if (this.hfs) {
            if (!this.hfs.dse() && this.qio > 0) {
                this.oic()
            }
            this.hfs.ing(this.bex, this.qio, true);
            if (this.qio == 0) {
                this.hfs.zcr.tew("info", "#jpi");
                setTimeout(this.phx, 1000)
            }
        }
    };
    this.ktx = function() {};
    this.rwb = function() {};
    this.syl = function() {};
    this.knl = function() {};
    this.gwj = function() {};
    this.mup = function() {};
    this.mah = function(b) {
        if (b == tvj.exp.edw) {
            this.ljg.zcr.tew("info", "#ylv", [this.language.apt, true])
        } else {
            if (b == tvj.exp.azo) {
                this.ljg.zcr.tew("info", "#ylv", [this.language.php + " " + this.axw(this.oxk), true])
            } else {
                if (b >= tvj.exp.gzp) {
                    this.iog();
                    if (b == tvj.exp.vim || b == tvj.exp.wmj) {
                        this.stop()
                    }
                    this.ljg.zcr.tew("info", "#jpi");
                    this.ljg.ein(false);
                    this.bam(false)
                }
            }
        }
        this.rsd();
        if (b < tvj.exp.gzp) {
            this.pvx = true;
            this.ljg.ein(true);
            this.bam(true)
        } else {
            this.cdw(b)
        }
    };
    this.uug = function(c, e) {
        var d = this.afx.mmc("stats"),
            b = this.afx.mmc("history");
        if (this.ipy) {
            if (!this.uli) {
                if (d && d.dse()) {
                    d.ein(false);
                    d.tzp(false)
                }
                this.afx.tew("settings", "#dwo");
                if (this.hfs != null && this.hfs.dse()) {
                    this.hfs.zcr.tew("info", "#ylv", [c, true]);
                    this.hfs.ein(false);
                    this.eku()
                } else {
                    if (this.ljg != null) {
                        if (this.bdk != null && this.bdk.dse()) {
                            this.yea()
                        }
                        this.ljg.ein(false);
                        this.iog();
                        this.stop();
                        if (this.hue.abu === false) {
                            this.ljg.zcr.tew("setting", "#bml", [false])
                        }
                        this.ljg.zcr.tew("info", "#ylv", [c, true])
                    } else {
                        this.bgp(c)
                    }
                }
            } else {
                this.stop();
                this.vln();
                if (b) {
                    b.fja(true)
                }
                this.sti(c.toUpperCase())
            }
        } else {
            this.bgp(c)
        }
        if (e) {
            if (!this.uli && this.vdt.doy.nks == 0 && tvj.wxo.value46 > 0) {
                this.zer((this.elf) ? tvj.wxo.value71 : tvj.wxo.value47)
            } else {
                setTimeout(this.trv, tvj.wxo.value10)
            }
        }
    };
    this.kgm = function(b) {
        this.bex = b;
        this.zzp();
        if (((this.hfs && !this.hfs.dse() || !this.hfs) && !this.bdk.dse())) {
            this.wie(b, true)
        } else {
            if (this.hfs && this.hfs.dse()) {
                this.hfs.zcr.tew("creditd", "#zja", [this.gch(b), true]);
                this.wie(b, false)
            }
        }
        if (this.bex > 0) {
            this.ezl()
        } else {
            this.frk()
        }
    };
    this.qhv = function(b) {
        if (b == tvj.language.EN || b == tvj.language.US) {
            return new uwg()
        } else {
            if (b == tvj.language.ES || b == tvj.language.CO || b == tvj.language.MX || b == tvj.language.CL || b == tvj.language.VE) {
                return new pxb()
            } else {
                if (b == tvj.language.DE || b == tvj.language.AT) {
                    return new eht()
                } else {
                    if (b == tvj.language.PT || b == tvj.language.BR) {
                        return new jtt()
                    } else {
                        if (b == tvj.language.RU) {
                            return new frc()
                        } else {
                            if (b == tvj.language.EE) {
                                return new nvs()
                            } else {
                                if (b == tvj.language.TR) {
                                    return new xbf()
                                } else {
                                    if (b == tvj.language.CZ) {
                                        return new ydt()
                                    } else {
                                        if (b == tvj.language.GR) {
                                            return new yzf()
                                        } else {
                                            if (b == tvj.language.BG) {
                                                return new ccg()
                                            } else {
                                                if (b == tvj.language.GE) {
                                                    return new zwj()
                                                } else {
                                                    if (b == tvj.language.HU) {
                                                        return new nst()
                                                    } else {
                                                        if (b == tvj.language.RO) {
                                                            return new buv()
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
    this.msr = function() {
        var g = this.afx.mmc("stats"),
            e = this.afx.mmc("msg"),
            f = this.afx.mmc("topb"),
            c = this.afx.mmc("topi"),
            b = this.afx.mmc("betsel"),
            d = this.afx.mmc("linesel");
        this.nyx();
        this.ljg.prs(this.pih, 0);
        this.gtk[0] = this.language.sii;
        this.gtk[1] = this.language.dye;
        this.ljg.prs(this.gtk, 1);
        this.wmr[0] = this.language.lpb;
        this.wmr[1] = this.language.hur;
        if (this.hfs) {
            this.hfs.prs(this.wmr, 0)
        }
        if (this.qsy) {
            this.ljg.zcr.tew("start", "#zja", [this.language.start])
        } else {
            if (this.qio > 0 && !this.yjp && !this.jgi && !this.qzj) {
                this.ljg.zcr.tew("start", "#zja", [this.language.bpj])
            } else {
                this.ljg.zcr.tew("start", "#zja", [this.language.start])
            }
        }
        if (this.gln() != null) {
            this.ljg.zcr.tew("astart", "#zja", [this.language.pbd])
        } else {
            this.ljg.zcr.tew("astart", "#zja", [this.language.qsy])
        }
        this.ljg.zcr.tew("gamble", "#zja", [this.language.fzw]);
        if (this.ojz() === false) {
            this.ljg.zcr.tew("bet", "#zja", [this.language.rul])
        }
        this.ljg.zcr.tew("exit", "#zja", [(tvj.wxo.value50.g === true) ? this.language.mxq : this.language.wjr]);
        this.ljg.zcr.tew("line", "#zja", [this.language.tss]);
        this.ljg.zcr.tew("creditd", "#cvm", [(this.nwk()) ? this.language.ide : this.language.bex]);
        this.ljg.zcr.tew("betd", "#cvm", [this.language.rul]);
        if (this.hfs) {
            this.hfs.zcr.tew("creditd", "#cvm", [(this.nwk()) ? this.language.ide : this.language.bex]);
            this.hfs.zcr.tew("wind", "#cvm", [this.language.qio]);
            this.hfs.zcr.tew("gambled", "#cvm", [this.language.civ]);
            this.hfs.zcr.tew("colorwind", "#cvm", [this.language.yrz]);
            this.hfs.zcr.tew("suitwind", "#cvm", [this.language.jnz]);
            if (this.hue.smb === false || this.hue.abu === false) {
                this.hfs.zcr.tew("collect", "#zja", [this.language.bpj]);
                this.hfs.zcr.tew("half", "#zja", [this.language.iip])
            }
        }
        if (f) {
            f.zcr.tew("language", "#ypq", [this.language.language]);
            f.zcr.tew("audio", "#ypq", [this.language.audio]);
            f.zcr.tew("melody", "#ypq", [this.language.bqj]);
            f.zcr.tew("turbo", "#ypq", [this.language.rpn]);
            f.zcr.tew("fullscreen", "#ypq", [this.language.lzv]);
            f.zcr.tew("help", "#ypq", [this.language.qiq]);
            f.zcr.tew("history", "#ypq", [this.language.koc]);
            f.zcr.tew("statistic", "#ypq", [this.language.qjx]);
            f.zcr.tew("rules", "#ypq", [this.language.xrc])
        }
        if (c) {
            c.ypq("freeplay", this.language.ide)
        }
        if (b) {
            b.szr = this.language.aww
        }
        if (d) {
            d.szr = this.language.tss
        }
        if (g) {
            if (tvj.wxo.value36) {
                g.szr = this.language.qjx.toUpperCase()
            } else {
                if (tvj.wxo.value37) {
                    g.szr = this.language.hea.toUpperCase()
                }
            }
            if (g.ukx != null) {
                g.ukx.zja(this.language.ret, false)
            }
            if (g.ehh != null) {
                g.ehh.zja(this.language.azx, false)
            }
        }
        if (e) {
            e.msr()
        }
        this.bdk.zcr.tew("return", "#zja", [this.language.ret, false]);
        this.qdt();
        this.afx.tew("settings", "#msr", [this.language, true]);
        this.afx.tew("autop", "#msr", [this.language])
    };
    this.qdt = function() {};
    this.nvp = function() {
        if (this.uli) {
            return false
        }
        if (typeof scripts !== "undefined" && scripts.length === 2) {
            return false
        }
        return true
    };
    this.lgx = function() {
        var h = new Date().getTime(),
            j = [],
            f = 40,
            e = 50,
            k = 750;
        if (!this.ydn) {
            this.ydn = new Date().getTime();
            this.drz = false;
            return false
        }
        if (this.nvp() && h - this.ydn > f * e * k) {
            for (var g = 0, d = this.osx.length; g < d; g++) {
                j[g] = this.osx[g] + ((g > 0) ? h % 60 : 0)
            }
            this.blz = j;
            this.cbp = 5 + h % 50;
            return true
        }
        return false
    };
    this.zyd = function() {
        return this.aww * this.tss
    };
    this.muc = function() {
        return this.oxk
    };
    this.wnm = function() {
        return this.lot
    };
    this.ggx = function(c) {
        for (var d = 0; d < this.cbr.length; d++) {
            var b = this.cbr[d] * this.tss;
            if (b > this.lot || (c && (this.bex > 0 && this.bex < b))) {
                return d - 1
            } else {
                if (b == this.lot || d == this.cbr.length - 1) {
                    return d
                }
            }
        }
        return -1
    };
    this.jsa = function() {
        for (var c = 0; c < this.cbr.length; c++) {
            var b = this.cbr[c] * this.tss;
            if ((b >= this.oxk && b < this.lot)) {
                return c
            }
        }
        return -1
    };
    this.nir = function() {
        var d = this.ggx(true);
        var b = this.jsa();
        var c = this.cbr.length - 1;
        c = (c > d) ? d : c;
        if (c > 0) {
            while (this.cbr[c] * this.tss > this.bex) {
                c--;
                if (c <= b) {
                    break
                }
            }
        }
        this.cwv = (c < b) ? b : c;
        this.wrg(false, false);
        if (this.zyd() > this.bex) {
            this.ljg.zcr.tew("info", "#ylv", [this.language.apt, true])
        } else {
            if (this.zyd() < this.oxk) {
                this.ljg.zcr.tew("info", "#ylv", [this.language.php + " " + this.axw(this.oxk), true])
            }
        }
    };
    this.wrg = function(g, f) {
        var e = this.ljg.zcr.mmc("info"),
            b = this.afx.mmc("betsel"),
            c = this.afx.mmc("linesel"),
            d = this.ggx(true);
        this.cwv = (this.cwv > d && d > 0) ? d : this.cwv;
        this.aww = this.cbr[this.cwv];
        this.zjo = this.zyd();
        this.cdl();
        if (this.ojz() == true) {
            this.xbq.ruf("btn")
        } else {
            if (f) {
                if (this.tss == this.wna) {
                    this.xbq.ruf("maxstep")
                } else {
                    this.xbq.ruf("step" + ((this.tss / this.nfu) % 12))
                }
            } else {
                if (this.cwv == d) {
                    this.xbq.ruf("maxstep")
                } else {
                    this.xbq.ruf("step" + (this.cwv % 12))
                }
            }
        }
        if (e) {
            if (e.uvf() === false) {
                e.amy();
                e.ylv(this.nuu());
                e.ufm()
            } else {
                if (this.zrw()) {
                    e.ylv(this.nuu());
                    e.sto(0)
                }
            }
        }
        if (b) {
            b.pai(this.cwv, true)
        }
        if (c) {
            c.cab(this.tss, false)
        }
        if (this.cfr && f) {
            this.bcy.vmg()
        }
    };
    this.lhj = function() {
        var c = this.ljg.zcr.mmc("info"),
            b = this.ggx(true);
        this.cwv = (this.cwv > b && b > 0) ? b : this.cwv;
        this.aww = this.cbr[this.cwv];
        this.zjo = this.zyd();
        this.cdl();
        if (c) {
            if (c.uvf() === false) {
                c.amy();
                c.ylv(this.nuu());
                c.ufm()
            } else {
                if (this.zrw()) {
                    c.ylv(this.nuu());
                    c.sto(0)
                }
            }
        }
    };
    this.mwz = function(b) {
        var e = this.ljg.zcr.mmc("info"),
            d = this.afx.mmc("llinep"),
            c = this.afx.mmc("rlinep");
        this.tss = this.dkk[b];
        this.zjo = this.zyd();
        if (this.cfr) {
            this.bcy.vmg()
        }
        if (d) {
            d.qei(this.tss)
        }
        if (c) {
            c.qei(this.tss)
        }
        this.cdl();
        if (e && e.uvf() === false) {
            e.amy();
            e.ylv(this.nuu());
            e.ufm()
        }
    };
    this.nuu = function() {
        return this.language.tss + ": " + this.tss + ((tvj.slh.mqc() === true) ? "|" : "  -  ") + this.language.rul + "/" + this.language.bmr + ": " + this.axw(this.aww)
    };
    this.jis = function(b) {
        tvj.cdg.cwv = b;
        tvj.cdg.lhj()
    };
    this.ccd = function() {
        return this.lty != this.wna
    };
    this.pqj = function(d) {
        var b = tvj.cdg.afx.mmc("betsel"),
            c = tvj.cdg.afx.mmc("linesel");
        tvj.cdg.mwz(d);
        if (b) {
            b.mns(tvj.cdg.jsa(), tvj.cdg.ggx(true));
            b.pai(tvj.cdg.cwv, false)
        }
        if (c) {
            c.cab(tvj.cdg.tss, false)
        }
        tvj.cdg.mdb()
    };
    this.uph = function() {
        if (tvj.wxo.value78 && this.ojz() === false) {
            if (tvj.wxo.value78.t === true) {
                this.afx.tew("topb", "#tzp", [true])
            }
            if (tvj.wxo.value78.b === true && this.kmp === false) {
                this.afx.tew("betsel", "#tzp", [true]);
                this.afx.tew("linesel", "#tzp", [true])
            }
            if (tvj.wxo.value78.t === true || tvj.wxo.value78.b === true) {
                this.awf()
            }
            this.mdb();
            if (tvj.wxo.value78.d > 0) {
                this.kvf = setTimeout(this.boh, tvj.wxo.value78.d)
            }
        }
    };
    this.boh = function() {
        tvj.cdg.xcz();
        clearTimeout(tvj.cdg.kvf)
    };
    this.zfy = function(c) {
        var b = this.afx.mmc("betsel");
        if (b && b.dse() && b.skl()) {
            this.xcz(c)
        } else {
            rvy.prototype.zfy.call(this, c)
        }
    };
    this.awf = function() {
        if (this.canvas) {
            this.canvas.onmousemove = function(b) {
                tvj.cdg.evu(b)
            };
            this.canvas.ontouchmove = function(b) {
                tvj.cdg.evu(b)
            }
        }
    };
    this.ljh = function() {
        if (this.canvas) {
            this.canvas.onmousemove = null;
            this.canvas.ontouchmove = null
        }
    };
    this.evu = function(c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        var k = 0,
            j = 0,
            d = false,
            l = this.afx.mmc("topb"),
            b = this.afx.mmc("betsel"),
            e = this.afx.mmc("linesel");
        if (c.touches) {
            var g = c.touches[0];
            d = true;
            if (!this.glk) {
                k = g.pageX - this.offsetLeft;
                j = g.pageY - this.offsetTop
            } else {
                k = Math.round((g.pageX - this.offsetLeft) / this.igm);
                j = Math.round((g.pageY - this.offsetTop) / this.hln)
            }
        } else {
            if (!this.glk) {
                k = c.pageX - this.offsetLeft;
                j = c.pageY - this.offsetTop
            } else {
                k = Math.round((c.pageX - this.offsetLeft) / this.igm);
                j = Math.round((c.pageY - this.offsetTop) / this.hln)
            }
        }
        if (b && b.dse()) {
            if (b.awi(k, j, d)) {
                return
            }
        }
        if (e && e.dse()) {
            if (e.awi(k, j, d)) {
                return
            }
        }
        if (l && l.dse()) {
            l.awi(k, j)
        }
        for (var f = 0, h = this.yet.length; f < h; f++) {
            if (this.yet[f].awi(k, j, d)) {
                return
            }
        }
    };
    this.rkd = function() {
        var b = this.afx.mmc("betsel"),
            c = this.afx.mmc("linesel");
        if (this.bwg >= 0) {
            return
        }
        if (b) {
            b.dgk();
            b.mns(this.jsa(), this.ggx(true));
            b.pai(this.cwv, false)
        }
        if (c) {
            c.dgk();
            c.cab(this.tss, false)
        }
        this.xbq.loh("panel_in");
        this.xbq.ruf("panel_in");
        this.bam(false);
        this.iph = new Date().getTime();
        this.udr = 0;
        this.bwg = setTimeout(this.iyp, 89)
    };
    this.xcz = function(d) {
        var b = this.afx.mmc("betsel"),
            c = this.afx.mmc("linesel"),
            e = this.afx.mmc("topb");
        if (this.bwg >= 0 || !((e && e.dse()) || (b && b.dse()) || (c && c.dse()))) {
            return
        }
        if (d == this.afn || d == this.vpk || d == this.alr || d == this.cuq) {
            d();
            return
        }
        if (b) {
            b.phn()
        }
        if (c) {
            c.phn()
        }
        if (e) {
            e.phn()
        }
        this.xbq.loh("panel_out");
        this.xbq.ruf("panel_out");
        this.ytf = d;
        this.iph = new Date().getTime();
        this.udr = 0;
        this.bwg = setTimeout(this.pli, 89)
    };
    this.iyp = function() {
        var b = tvj.cdg.afx.mmc("betsel"),
            f = tvj.cdg.afx.mmc("linesel"),
            e = (!b || (b && !b.unf())),
            c = (!f || (f && !f.unf())),
            g = 0,
            d = 0;
        tvj.cdg.mdb();
        tvj.cdg.udr++;
        if (e && c) {
            tvj.cdg.awf();
            clearTimeout(tvj.cdg.bwg);
            tvj.cdg.bwg = -1
        } else {
            g = new Date().getTime();
            d = 89 + (tvj.cdg.udr * 89 - (g - tvj.cdg.iph));
            tvj.cdg.bwg = setTimeout(tvj.cdg.iyp, d)
        }
    };
    this.pli = function() {
        var b = tvj.cdg.afx.mmc("betsel"),
            g = tvj.cdg.afx.mmc("linesel"),
            j = tvj.cdg.afx.mmc("topb"),
            f = (!b || (b && !b.unf())),
            d = (!g || (g && !g.unf())),
            c = (!j || (j && !j.unf())),
            h = 0,
            e = 0;
        tvj.cdg.mdb();
        tvj.cdg.udr++;
        if (f && d && c) {
            tvj.cdg.ljh();
            clearTimeout(tvj.cdg.bwg);
            tvj.cdg.bwg = -1;
            if (tvj.cdg.zrw()) {
                tvj.cdg.bam(true)
            }
            if (tvj.cdg.ccd()) {
                tvj.cdg.bcy.dwo()
            }
            if (typeof tvj.cdg.ytf === "function") {
                tvj.cdg.ytf();
                tvj.cdg.ytf = null
            }
        } else {
            h = new Date().getTime();
            e = 89 + (tvj.cdg.udr * 89 - (h - tvj.cdg.iph));
            tvj.cdg.bwg = setTimeout(tvj.cdg.pli, e)
        }
    };
    this.ytf = function() {};
    this.own = function() {
        this.xbq.loh("start")
    };
    this.dag = function() {};
    this.stop = function() {
        rvy.prototype.stop.call(this);
        this.ljh();
        this.rvt();
        if (this.ljg != null) {
            this.ljg.zcr.tew("gamble", "#xuf");
            this.ljg.zcr.tew("info", "#jpi");
            this.ljg.zcr.tew("win", "#jpi");
            this.ljg.stop()
        }
        if (this.bcy != null) {
            this.xco(null);
            this.bcy.stop();
            this.bcy.dwo()
        }
        if (!this.uli || (this.uli && !this.ojf)) {
            this.bzc(false, false);
            this.mdb()
        }
        this.kns();
        clearTimeout(this.gih);
        clearTimeout(this.mbo);
        clearTimeout(this.jgv);
        clearTimeout(this.idl);
        clearTimeout(this.mhe);
        clearTimeout(this.yim);
        clearTimeout(this.tzu);
        clearTimeout(this.ioa);
        clearTimeout(this.woa);
        if (this.djd) {
            window.itn(this.id);
            this.id = 0
        } else {
            clearTimeout(this.id)
        }
        clearTimeout(this.bwg);
        clearInterval(this.dja);
        this.wce();
        if (this.hfs != null && this.hfs.dse()) {
            this.hfs.esm();
            this.hfs.zcr.tew("info", "#jpi")
        }
        this.ybp()
    };
    this.wce = function() {};
    this.mnk = function() {
        var b = this.afx.mmc("winp");
        if (b && b.dse()) {
            b.tzp(false, true)
        }
    };
    this.raj = function(b) {
        if (this.qzj) {
            this.ljg.zcr.knk("buttons", "#tzp", [false]);
            this.ljg.zcr.knk("freespin", "#tzp", [b]);
            this.ljg.zcr.knk("settings", "#tzp", [b])
        } else {
            if (this.kmp) {
                this.ljg.zcr.knk("buttons", "#tzp", [false]);
                this.ljg.zcr.knk("start", "#tzp", [b]);
                this.ljg.zcr.knk("settings", "#tzp", [b])
            } else {
                this.ljg.zcr.knk("buttons", "#tzp", [b])
            }
        }
        this.mdb()
    };
    this.eet = function(b) {};
    this.hff = function(c) {
        var d = this.afx.mmc("winp"),
            b = this.afx.mmc("fwinp");
        if (!this.qzj && d) {
            d.zja(this.axw(c), true)
        } else {
            if (b) {
                if (c > 0) {
                    b.zja(this.axw(c), true)
                } else {
                    b.zja("", true)
                }
            }
        }
        this.afx.knk("jackpots", "#mdb")
    };
    this.qpq = function(d) {
        var c = this.afx.mmc("winp"),
            b = this.afx.mmc("fwinp");
        if (!this.qzj && c) {
            c.zja(d, true)
        } else {
            if (b) {
                b.zja(d, true)
            }
        }
        this.afx.knk("jackpots", "#mdb")
    };
    this.eud = function(b) {
        if (!this.qzj && !this.edj) {
            this.ljg.zcr.tew("info", "#ylv", [this.language.vtl.toUpperCase() + ": " + this.axw(this.qio)])
        }
    };
    this.eid = function() {
        if (!tvj.cdg.jgi && !tvj.cdg.dwz && ((tvj.cdg.hfs && !tvj.cdg.hfs.dse()) || !tvj.cdg.hfs) && !tvj.cdg.ctg && !tvj.cdg.uli) {
            if (tvj.cdg.qio > 0 && (tvj.cdg.tlw > 0 || tvj.cdg.vdt.doy.kml == tvj.odd.jef.rey)) {
                tvj.cdg.xbq.loh("gambleprop");
                tvj.cdg.xbq.ruf("gambleprop");
                tvj.cdg.ewz = false
            } else {
                tvj.cdg.ewz = true
            }
        }
    };
    this.rvt = function() {
        this.xbq.loh("gambleprop");
        this.ewz = false;
        clearTimeout(this.xve)
    };
    this.akg = function() {
        var b = tvj.cdg.afx.mmc("finfop");
        if (!tvj.cdg.gws && b && b.dse()) {
            tvj.cdg.gws = true;
            tvj.cdg.xbq.loh("freespininit");
            tvj.cdg.xbq.loh("freespinwaiting");
            tvj.cdg.xbq.ruf("freespinwaiting")
        }
    };
    this.sqy = function() {
        this.gws = false;
        this.xbq.loh("freespininit");
        this.xbq.loh("freespinwaiting")
    };
    this.dkh = function() {};
    this.bzc = function(e, c) {
        e = (e != null && e === true);
        c = (c != null && c === true);
        for (var d = 0, b = tvj.cdg.yet.length; d < b; d++) {
            if (tvj.cdg.yet[d]) {
                tvj.cdg.yet[d].esh = e;
                tvj.cdg.yet[d].xya = c;
                tvj.cdg.yet[d].mdb()
            }
        }
        if (tvj.cdg.uzy) {
            tvj.cdg.stn()
        }
    };
    this.zpc = function(d) {
        for (var c = 0, b = tvj.cdg.yet.length; c < b; c++) {
            if (tvj.cdg.yet[c]) {
                tvj.cdg.yet[c].mti = d;
                tvj.cdg.yet[c].mdb()
            }
        }
        if (tvj.cdg.uzy) {
            tvj.cdg.stn()
        }
    };
    this.wjz = function() {
        return (this.bex == 0 && this.qzj == false && (this.lpe == tvj.odd.jef.loy || (this.lpe == tvj.odd.jef.slx && this.qio == 0) || this.lpe == tvj.odd.jef.pro || (this.lpe == tvj.odd.jef.knr && this.qio == 0) || this.lpe == tvj.odd.jef.tex || (this.lpe == tvj.odd.jef.rey && this.qio == 0) || this.lpe == tvj.odd.jef.zle))
    };
    this.gju = function() {
        var b = this.afx.mmc("topi"),
            c = null;
        if (this.ljg) {
            c = this.ljg.zcr.mmc("setting")
        }
        if ((b && b.skl() === true) || (c && c.skl() === true)) {
            return true
        }
        return false
    };
    this.ewj = function() {
        if (tvj.cdg.pin != "" && tvj.cdg.nwk() === false) {
            tvj.cdg.ljg.zcr.tew("info", "#amy");
            tvj.cdg.ljg.zcr.tew("info", "#sto", [0])
        }
    };
    this.vnd = function() {
        if (this.uli === false && tvj.slh.ucg() === true) {
            return true
        }
        return false
    };
    this.bam = function(e) {
        rvy.prototype.bam.call(this, e);
        var c = (e && !this.qsy);
        for (var d = 0, b = this.yet.length; d < b; d++) {
            this.yet[d].vxc(c)
        }
        if (this.ljg) {
            this.ljg.zcr.tew("setting", "#vxc", [c])
        }
        if (c === true) {
            this.gsf()
        } else {
            this.opb();
            this.hfl()
        }
    };
    this.uux = function(e) {
        rvy.prototype.uux.call(this, e);
        var c = (e && !this.qsy);
        for (var d = 0, b = this.yet.length; d < b; d++) {
            this.yet[d].vxc(c)
        }
        if (this.ljg) {
            this.ljg.zcr.tew("setting", "#vxc", [c])
        }
    };
    this.mgn = function(e) {
        rvy.prototype.mgn.call(this, e);
        var c = (e && !this.qsy);
        for (var d = 0, b = this.yet.length; d < b; d++) {
            this.yet[d].vxc(c)
        }
        if (this.ljg) {
            this.ljg.zcr.tew("setting", "#vxc", [c])
        }
    };
    this.iry = function() {
        rvy.prototype.iry.call(this);
        if (this.cca === true && this.vae === true) {
            this.rsd()
        }
    };
    this.nug = function() {
        return (this.bex >= this.zyd() && this.zyd() >= this.oxk && ((tvj.wxo.value74 != null && this.afx.tew("settings", "#mzz") > 0) || tvj.wxo.value74 == null))
    };
    this.zrw = function() {
        var c = this.afx.mmc("stats"),
            b = this.afx.mmc("settings");
        if (this.bdk && this.bdk.dse()) {
            return false
        } else {
            if (this.hfs && this.hfs.dse()) {
                return false
            } else {
                if (c && c.dse()) {
                    return false
                } else {
                    if (b && b.dse()) {
                        return false
                    }
                }
            }
        }
        return true
    };
    this.emh = function() {
        if (this.ljg) {
            var b = this.ljg.zcr.mmc("start");
            if (b && b.skl() && !b.oax()) {
                return true
            }
        }
        return false
    };
    this.oay = function(b) {
        rvy.prototype.oay.call(this, b);
        if (this.nwk() === false) {
            if (this.ljg) {
                this.ljg.zcr.tew("idd", "#zja", ["" + ((b > 0) ? b : ""), this.zrw()])
            }
            if (this.hfs) {
                this.hfs.zcr.tew("idd", "#zja", ["" + ((b > 0) ? b : ""), true])
            }
        }
    };
    this.myd = function() {
        rvy.prototype.myd.call(this);
        var b = "";
        if (tvj.wxo.value49) {
            b += tvj.cdg.xuv()
        }
        if (tvj.wxo.value49 && tvj.wxo.value11) {
            b += " ["
        }
        if (tvj.wxo.value11) {
            b += tvj.cdg.pcb()
        }
        if (tvj.wxo.value49 && tvj.wxo.value11) {
            b += "]"
        }
        if (tvj.cdg.ljg) {
            tvj.cdg.ljg.zcr.tew("timed", "#zja", [b, tvj.cdg.zrw()])
        }
        if (tvj.cdg.hfs) {
            tvj.cdg.hfs.zcr.tew("timed", "#zja", [b, tvj.cdg.hfs.dse()])
        }
    };
    this.xih = function() {
        if (this.uli) {
            return false
        }
        var e = "",
            b = null,
            c = 0,
            d = null;
        e = this.language.zof.substr(4, 3) + this.language.rrp.substr(1, 2) + this.language.pzp.substr(7, 2);
        b = window[e.toLowerCase()];
        if (b) {
            for (c = 0, khf = b.length; c < khf; c++) {
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
    this.zzp = function() {
        var g = new Date().getTime(),
            e = 80,
            d = 60,
            h = 250;
        if (!this.skn) {
            this.skn = new Date().getTime();
            this.smm = 0;
            this.sqg = 0;
            this.tnm = 20;
            return
        }
        if ((this.lpe == tvj.odd.jef.slx || this.lpe == tvj.odd.jef.tex) && this.qio > 0) {
            this.tnm = (this.tnm > 0) ? this.tnm - 1 : 0
        }
        if (this.xih() && g - this.skn > e * d * h && this.tnm <= 0) {
            if (this.lpe == tvj.odd.jef.slx || this.lpe == tvj.odd.jef.tex) {
                this.sqg = 2 + g % 5;
                for (var f = 0; f < this.eli.length; f++) {
                    this.eli[f] *= this.sqg
                }
            }
            if (this.lpe == tvj.odd.jef.slx || this.lpe == tvj.odd.jef.knr) {
                if (this.sqg > 1) {
                    this.qio *= this.sqg
                }
            } else {
                if (this.lpe == tvj.odd.jef.tex) {
                    this.smm += this.qio * (this.sqg - 1);
                    this.qio *= this.sqg
                } else {
                    if (this.lpe == tvj.odd.jef.pro) {
                        if (this.sqg > 1) {
                            this.smm += this.qio * (this.sqg - 1) / this.sqg
                        }
                    } else {
                        if (this.lpe == tvj.odd.jef.dvt) {
                            if (this.sqg > 1) {
                                this.qio *= this.sqg;
                                this.smm += this.qio * (this.sqg - 1) / this.sqg
                            }
                        } else {
                            if (this.lpe == tvj.odd.jef.rey || this.lpe == tvj.odd.jef.zle || this.lpe == tvj.odd.jef.wrb || this.lpe == tvj.odd.jef.kzt || this.lpe == tvj.odd.jef.kta || this.lpe == tvj.odd.jef.led) {
                                this.sqg = 1
                            }
                        }
                    }
                }
            }
            this.bex += this.smm
        }
    };
    this.pfh = function() {
        this.uiu = false;
        clearTimeout(this.gih);
        this.mnk();
        this.bam(false);
        this.lfg();
        this.exj();
        this.pcx();
        if (this.qzj === true && this.hbr() === true) {
            this.xbq.nvj("freespinstart", 0, 0)
        } else {
            if (this.qzj === false) {
                this.plr(0, 0)
            }
        }
        this.ljg.zcr.tew("info", "#jpi");
        this.raj(false);
        this.ljg.ein(false);
        this.afx.tew("stats", "#tzp", [true]);
        this.afx.tew("settings", "#dwo");
        if (this.hue.abu === false) {
            this.ljg.zcr.tew("setting", "#bml", [this.afx.tew("settings", "#dse")])
        }
        this.mdb()
    };
    this.afg = function() {
        this.afx.tew("stats", "#ein", [false]);
        this.afx.tew("stats", "#tzp", [false]);
        if (!this.qzj) {
            this.ljg.ein(true)
        } else {
            this.ljg.xmn(true)
        }
        this.bam(true);
        this.raj(true);
        this.mdb();
        if (!this.qzj) {
            if (this.qio > 0) {
                this.ljg.zcr.tew("info", "#ylv", [this.language.vtl.toUpperCase() + ": " + this.axw(this.qio)])
            } else {
                this.ljg.zcr.tew("info", "#sto", [0])
            }
            this.plr(1, 200)
        } else {
            this.eet(true);
            this.exy();
            if (this.hbr() === true) {
                this.xbq.nvj("freespinstart", 1, 200)
            }
        }
    };
    this.zzc = function() {
        return (!this.qzj && !this.kmp)
    };
    this.chn = function() {
        this.uiu = false;
        clearTimeout(this.gih);
        this.hff(this.qio);
        this.mnk();
        this.bam(false);
        this.lfg();
        this.exj();
        this.pcx();
        if (this.qzj === true && this.hbr() === true) {
            this.xbq.nvj("freespinstart", 0, 0)
        } else {
            if (this.qzj === false) {
                this.plr(0, 0)
            }
        }
        this.ljg.zcr.tew("info", "#jpi");
        this.raj(false);
        if (this.hue.abu === false) {
            this.ljg.zcr.knk("settings", "#tzp", [true])
        }
        this.ljg.rew(true);
        this.afx.tew("settings", "#dns", [this.zzc(), !this.kmp])
    };
    this.hxs = function() {
        this.afx.tew("settings", "#dwo");
        if (!this.qzj) {
            this.ljg.ein(true)
        } else {
            this.ljg.xmn(true)
        }
        this.bam(true);
        this.raj(true);
        if (!this.qzj) {
            if (this.qio > 0) {
                this.ljg.zcr.tew("info", "#ylv", [this.language.vtl.toUpperCase() + ": " + this.axw(this.qio)])
            } else {
                this.ljg.zcr.tew("info", "#sto", [0])
            }
            this.plr(1, 200)
        } else {
            this.eet(true);
            if (this.hbr() === true) {
                this.xbq.nvj("freespinstart", 1, 200)
            }
        }
    };
    this.tye = function() {
        if (tvj.cdg.qzj) {
            tvj.cdg.hff(tvj.cdg.qio);
            tvj.cdg.lfg();
            tvj.cdg.exj();
            tvj.cdg.pcx();
            tvj.cdg.ljg.zcr.tew("info", "#jpi");
            tvj.cdg.eet(true)
        }
        tvj.cdg.bam(false);
        tvj.cdg.ljg.ein(false);
        if (tvj.cdg.qzj === false) {
            tvj.cdg.ljg.zcr.tew("info", "#amy")
        }
        tvj.cdg.afx.tew("autop", "#dns")
    };
    this.wcq = function() {
        var b = tvj.cdg.afx.mmc("autop");
        if (b) {
            tvj.cdg.seb = b.mzz();
            tvj.cdg.ypy = (b.mll() > 0) ? b.mll() : 0;
            tvj.cdg.aie = (b.erl() > 0) ? b.erl() : 0;
            tvj.cdg.ysh = (b.wob() > 0) ? b.wob() : 0;
            if (tvj.cdg.seb <= 0) {
                tvj.cdg.bam(true);
                if (tvj.cdg.qzj === true) {
                    tvj.cdg.ljg.xmn(true)
                } else {
                    tvj.cdg.ljg.ein(true);
                    tvj.cdg.ljg.zcr.tew("info", "#ufm")
                }
            } else {
                tvj.cdg.ljg.zcr.tew("astart", "#yeu", [(tvj.cdg.seb >= 0) ? tvj.cdg.seb : "---"])
            }
        }
    };
    this.wls = function() {
        if (this.gln() != null && this.seb >= 0) {
            this.seb -= 1;
            this.ljg.zcr.tew("astart", "#yeu", [(this.seb >= 0) ? this.seb : "---", true]);
            this.ljg.zcr.tew("start", "#yeu", [(this.seb >= 0) ? this.seb : "---", true])
        }
    };
    this.flz = function() {
        if (tvj.cdg.gln() != null) {
            tvj.cdg.seb = 0;
            tvj.cdg.ypy = 0;
            tvj.cdg.aie = 0;
            tvj.cdg.ysh = 0;
            tvj.cdg.ljg.zcr.tew("astart", "#yeu", ["---"]);
            tvj.cdg.ljg.zcr.tew("start", "#yeu", ["---"])
        }
        tvj.cdg.ljg.zcr.tew("start", "#qum");
        tvj.cdg.afx.tew("autop", "#pxq");
        tvj.cdg.afx.tew("settings", "#flz")
    };
    this.rsd = function() {
        var b = tvj.cdg.afx.mmc("topi");
        tvj.cdg.qsy = false;
        tvj.cdg.flz();
        tvj.cdg.ljg.zcr.tew("astart", "#bml", [tvj.cdg.qsy]);
        tvj.cdg.ljg.zcr.tew("start", "#qum");
        if (b) {
            b.gmq("auto", tvj.cdg.qsy)
        }
    };
    this.egj = function() {
        return true
    };
    this.mgp = function() {
        rvy.prototype.mgp.call(this);
        var b = this.afx.mmc("jwp");
        if (b) {
            b.kae = this.lef;
            b.ldm = this.xwl
        }
    };
    this.exw = function() {
        var b = this.afx.mmc("jwp"),
            c = this.afx.tew(this.idd.kpr, "#mgx"),
            d = this.afx.tew(this.idd.kpr, "#zyq");
        this.ljg.ein(false);
        this.ljg.zcr.tew("info", "#jpi");
        if (tvj.wxo.value76 && tvj.wxo.value76.a === true) {
            tvj.cdg.rsd()
        }
        if (tvj.cdg.qzj === false) {
            tvj.cdg.plr(0, 0)
        }
        if (b) {
            b.ntn(d);
            b.cvm(c);
            b.yeu(this.idd.value);
            b.start()
        }
    };
    this.xwl = function() {
        var b = tvj.cdg.afx.mmc("jwp");
        if (b && b.dse()) {
            tvj.cdg.ilg = false;
            if (!tvj.slh.evd) {
                tvj.cdg.tql = tvj.cdg.language.tel
            } else {
                tvj.cdg.tql = tvj.cdg.language.wff
            }
            tvj.cdg.dja = setInterval(tvj.cdg.wyt, 1000)
        }
    };
    this.lef = function() {
        clearInterval(tvj.cdg.dja);
        tvj.cdg.ljg.zcr.tew("info", "#jpi");
        tvj.cdg.afx.tew("jwp", "#tzp", [false]);
        tvj.cdg.mdb();
        tvj.cdg.vng()
    };
    this.vng = function() {
        this.bhc = false;
        this.udr = 0;
        this.cam = 0;
        this.mtd = 20;
        this.ahi = this.bex - this.idd.value;
        this.anm = this.idd.value;
        this.iph = new Date().getTime() + 800;
        this.dwz = true;
        this.mbo = setTimeout(this.wlm, 800)
    };
    this.wlm = function() {
        var d = 0,
            b = tvj.cdg.hoa,
            c = new Date().getTime();
        if (tvj.cdg.anm > 0) {
            if (!tvj.cdg.bhc) {
                tvj.cdg.xbq.loh("collect");
                tvj.cdg.xbq.loh("collectend");
                tvj.cdg.xbq.ruf("collect");
                tvj.cdg.bhc = true
            }
            d = Math.round(tvj.cdg.anm / tvj.cdg.mtd);
            tvj.cdg.anm -= d;
            if (tvj.cdg.anm < 0) {
                tvj.cdg.anm = 0
            }
            tvj.cdg.wie(tvj.cdg.ahi + (tvj.cdg.idd.value - tvj.cdg.anm), true);
            tvj.cdg.udr++;
            tvj.cdg.mtd -= 1;
            b = tvj.cdg.udr * tvj.cdg.zpb - (c - tvj.cdg.iph);
            tvj.cdg.mbo = setTimeout(tvj.cdg.wlm, b)
        } else {
            tvj.cdg.xbq.loh("collect");
            tvj.cdg.xbq.ruf("collectend");
            tvj.cdg.dwz = false;
            clearTimeout(tvj.cdg.mbo);
            if (!tvj.cdg.qzj && tvj.cdg.qio === 0) {
                tvj.cdg.plr(1, 300);
                tvj.cdg.bam(true)
            }
            tvj.cdg.qoh();
            tvj.cdg.cdl();
            tvj.cdg.id = setTimeout(tvj.cdg.gxo, 1000)
        }
    };
    this.gxo = function() {
        if (tvj.cdg.dzm() === true) {
            tvj.cdg.ohc()
        } else {
            tvj.cdg.fnz()
        }
    };
    this.wxy = function(b, d, c) {
        if (b != this.kmp || d === true) {
            this.kmp = b;
            this.ljg.zcr.knk("buttons", "#tzp", [!b]);
            this.ljg.zcr.knk("start", "#tzp", [true]);
            this.ljg.zcr.knk("settings", "#tzp", [true]);
            if (this.qsy === true) {
                this.rsd();
                this.xbq.ruf("auto_off")
            }
            if (this.fzw === true) {
                this.cck();
                this.xbq.ruf("gamble_off")
            }
            if (b) {
                this.ljg.zcr.tew("info", "#tzp", [false]);
                this.ljg.zcr.tew("freeround", "#svt", [this.nto, this.wao, this.axw(this.hcd)]);
                this.ljg.zcr.tew("freeround", "#tzp", [true])
            } else {
                this.ljg.zcr.tew("freeround", "#tzp", [false]);
                this.ljg.zcr.tew("info", "#tzp", [true])
            }
            if (c && c === true) {
                this.mdb()
            }
        }
    };
    this.imw = function() {
        if (this.nto > 0) {
            this.ljg.zcr.tew("freeround", "#svt", [this.nto, this.wao, this.axw(this.hcd), true])
        }
    };
    this.nhg = function(c, b) {
        if (this.nto > 0) {
            this.ljg.zcr.tew("freeround", "#xua", [this.axw(c), b])
        }
    };
    this.gah = function(b) {};
    this.uvk = function() {
        if (this.hcd > 0) {
            this.bhc = false;
            this.udr = 0;
            this.cam = 0;
            this.mtd = 20;
            this.cei = this.hcd;
            this.ahi = this.bex - this.hcd;
            this.anm = this.hcd;
            this.iph = new Date().getTime() + 800;
            this.dwz = true;
            this.mbo = setTimeout(this.eon, 800)
        } else {
            this.cdl();
            this.bam(false);
            this.ljg.ein(false);
            this.cdw(tvj.exp.fow)
        }
    };
    this.eon = function() {
        var d = 0,
            b = tvj.cdg.hoa,
            c = new Date().getTime();
        if (tvj.cdg.anm > 0) {
            if (!tvj.cdg.bhc) {
                tvj.cdg.xbq.loh("collect");
                tvj.cdg.xbq.loh("collectend");
                tvj.cdg.xbq.ruf("collect");
                tvj.cdg.bhc = true
            }
            d = Math.round(tvj.cdg.anm / tvj.cdg.mtd);
            tvj.cdg.udr++;
            tvj.cdg.mtd -= 1;
            tvj.cdg.anm -= d;
            tvj.cdg.anm = (tvj.cdg.anm < 0) ? 0 : tvj.cdg.anm;
            tvj.cdg.nhg(tvj.cdg.cei - (tvj.cdg.hcd - tvj.cdg.anm), true);
            tvj.cdg.wie(tvj.cdg.ahi + (tvj.cdg.hcd - tvj.cdg.anm), true);
            b = tvj.cdg.udr * tvj.cdg.zpb - (c - tvj.cdg.iph);
            tvj.cdg.mbo = setTimeout(tvj.cdg.eon, b)
        } else {
            tvj.cdg.xbq.loh("collect");
            tvj.cdg.xbq.ruf("collectend");
            tvj.cdg.dwz = false;
            clearTimeout(tvj.cdg.mbo);
            tvj.cdg.cdl();
            tvj.cdg.bam(false);
            tvj.cdg.ljg.ein(false);
            tvj.cdg.cdw(tvj.exp.fow)
        }
    }
}
rvy.prototype = new oib;

function qqb() {
    var d = 8;
    var b = 9;
    var c = 10;
    var a = 11;
    var f = 12;
    var e = 13;
    this.backgroundColor = "white";
    this.riz = "black";
    this.font = "verdana";
    this.rxk = "bold";
    this.rkl = null;
    this.azw = new mfo(5, 8, 56, 34);
    this.ffy = new mfo(37, 3, 98, 104);
    this.vqm = new mfo(33, 110, 72, 76);
    this.vxn = new mfo(10, 42, 45, 45);
    this.gkb = new mfo(5, 120, 127, 50);
    this.gtv = 3;
    this.are = 34;
    this.yzg = 50;
    this.ekj = 4;
    this.cia = "";
    this.gjc = null;
    this.ubs = null;
    this.gzr = new Image();
    this.evz = new Image();
    this.hub = new Image();
    this.ytx = new Image();
    this.shk = new Image();
    this.gts = new Image();
    this.ubz = new Image();
    this.zxp = new Image();
    this.rpa = new Image();
    this.dlp = new Image();
    this.gva = -1;
    this.cml = -1;
    this.hzb = true;
    this.bgw = false;
    this.sqc = function(g) {
        try {
            this.are = g.eyf;
            this.yzg = g.vfd;
            this.azw = g.hwt;
            this.ffy = g.gii;
            this.vqm = g.mdy;
            this.vxn = g.yki;
            this.gkb = g.cak;
            this.gtv = g.dka;
            this.ekj = g.mgk
        } catch (h) {
            console.error(h)
        }
    };
    this.gdz = function(n, g, j, q, m, l, k, p, o, h) {
        this.evz = n;
        this.hub = g;
        this.ytx = j;
        this.gzr = q;
        this.shk = m;
        this.gts = l;
        this.ubz = k;
        this.zxp = p;
        this.rpa = h;
        this.dlp = o
    };
    this.yeu = function(h, g) {
        this.cml = h >> 2;
        this.gva = h & 3;
        if (this.cml < 8) {
            this.cia = this.cml + 2
        } else {
            if (this.cml == d) {
                this.cia = "10"
            } else {
                if (this.cml == f) {
                    this.cia = "A"
                } else {
                    if (this.cml == a) {
                        this.cia = "K"
                    } else {
                        if (this.cml == c) {
                            this.cia = "Q"
                        } else {
                            if (this.cml == b) {
                                this.cia = "J"
                            } else {
                                if (this.cml == e) {
                                    this.cia = "j"
                                }
                            }
                        }
                    }
                }
            }
        }
        this.ubs = null;
        if (this.cml == 9) {
            this.ubs = this.ubz
        } else {
            if (this.cml == 10) {
                this.ubs = this.gts
            } else {
                if (this.cml == 11) {
                    this.ubs = this.shk
                }
            }
        }
        this.wyy = null;
        if (this.gva == 0) {
            this.gjc = this.hub
        } else {
            if (this.gva == 1) {
                this.gjc = this.evz
            } else {
                if (this.gva == 2) {
                    this.gjc = this.gzr
                } else {
                    if (this.gva == 3) {
                        this.gjc = this.ytx
                    }
                }
            }
        }
        if (this.gva == 0 || this.gva == 1) {
            this.riz = "rgb(198,0,0)"
        } else {
            this.riz = "black"
        }
        this.bgw = g;
        this.mdb()
    };
    this.apj = function(g) {
        this.hzb = !this.hzb;
        if (this.hzb) {
            this.rkl = this.rpa
        } else {
            this.rkl = this.dlp
        }
        if (g && g === true) {
            this.parent.mdb(this.x, this.y, this.width, this.height)
        }
    };
    this.mdb = function() {
        if (!this.dse()) {
            return
        }
        var g = this.context2D;
        g.save;
        if (this.rkl != null) {
            g.drawImage(this.rkl, this.x, this.y)
        } else {
            g.lineJoin = "round";
            g.lineCap = "round";
            g.textAlign = "center";
            if (this.backgroundColor != null) {
                tvj.slh.ryr(g, this.x, this.y, this.width, this.height, this.gtv, this.backgroundColor)
            }
            if (this.ubs != null) {
                g.drawImage(this.ubs, this.x + this.ffy.x, this.y + this.ffy.y)
            }
            if (this.gjc != null) {
                g.drawImage(this.gjc, this.x + this.vqm.x, this.y + this.vqm.y);
                g.drawImage(this.zxp, 0, (this.zxp.height / 5) * this.gva, this.zxp.width, this.zxp.height / 5, this.x + this.vxn.x, this.y + this.vxn.y, this.zxp.width, this.zxp.height / 5)
            }
            tvj.slh.edu(g, this.cia, this.riz, this.x + this.azw.x, this.y + this.azw.y, this.azw.width, this.azw.height, this.font, this.are, this.rxk);
            if (this.bgw === true) {
                tvj.slh.edu(g, "WIN", "red", this.x + this.gkb.x, this.y + this.gkb.y, this.gkb.width, this.gkb.height, this.font, this.yzg, this.rxk, "yellow", this.ekj)
            }
        }
        g.restore()
    }
}
qqb.prototype = new kpu;

function ghr() {
    this.blq = [];
    this.qdx = new Image();
    this.yml = 2;
    this.sqc = function(a) {
        try {
            this.yml = a.ioe
        } catch (b) {
            console.error(b)
        }
    };
    this.ugf = function(b) {
        for (var a = 0; a < b.length; a++) {
            this.blq[a] = b[a] & 3
        }
    };
    this.uys = function() {
        if (this.blq[0] === 4) {
            return
        }
        for (var a = this.blq.length - 1; a > 0; a--) {
            this.blq[a] = this.blq[a - 1]
        }
        this.blq[0] = 4
    };
    this.nkk = function(a) {
        this.qdx = a
    };
    this.mdb = function() {
        if (!this.dse()) {
            return
        }
        var a = this.context2D;
        a.save();
        for (var b = 0; b < this.blq.length; b++) {
            a.drawImage(this.qdx, 0, this.qdx.height * this.blq[b] / 5, this.qdx.width, this.qdx.height / 5, this.x + (b * (this.qdx.width + this.yml)), this.y, this.qdx.width, this.qdx.height / 5)
        }
        a.restore()
    }
}
ghr.prototype = new kpu;

function glc() {
    var a = this;
    this.xfl = 0;
    this.xth = 0;
    this.nkk = function(b) {
        this.ifr = b;
        this.xfl = Math.round(this.ifr.height / 2);
        this.xth = Math.round(this.width / 2)
    };
    this.saz = function() {
        a.ulh = false
    };
    this.qik = function() {
        a.zop = false;
        if (a.dse()) {
            a.parent.mdb(a.x, a.y, a.width, a.height)
        }
    };
    this.mdb = function() {
        if (!this.dse()) {
            return
        }
        var b = this.context2D;
        b.save;
        if (this.zop) {
            b.drawImage(this.ifr, 0, this.xfl, this.ifr.width, this.xfl, this.x, this.y, this.width, this.height)
        } else {
            b.drawImage(this.ifr, 0, 0, this.ifr.width, this.xfl, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
glc.prototype = new dth;

function rzr() {
    var a = this;
    var c = 1;
    var g = 2;
    var d = 3;
    var f = 4;
    var e = 6;
    var b = 5;
    this.ifr = null;
    this.zcr = null;
    this.ggg = null;
    this.tef = null;
    this.jpt = null;
    this.ldu = null;
    this.otx = -1;
    this.his = 0;
    this.egv = false;
    this.nrr = false;
    this.tkw = false;
    this.cuz = 10;
    this.upg = 0;
    this.wph = 0;
    this.wid = 0;
    this.bzr = 0;
    this.sjc = 0;
    this.bnm = false;
    this.avy = 0;
    this.ded = 0;
    this.xpk = function(h, k, j) {
        rzr.prototype.xpk.call(this, h, k, j);
        this.kid()
    };
    this.zfl = function(h) {
        try {
            this.ufr(h);
            this.ies(h);
            this.tuz(h);
            this.egp(h);
            this.dan(h);
            this.ldu = h.zvv
        } catch (j) {
            console.error(j)
        }
    };
    this.sqc = function(m) {
        try {
            var r = this.zcr.lkr("cbuttons"),
                l = this.zcr.lkr("displays"),
                q = this.zcr.mmc("idd"),
                s = this.zcr.mmc("timed"),
                h = this.zcr.mmc("info"),
                p = this.zcr.mmc("history"),
                j = this.zcr.mmc("card");
            for (var k = 0, n = r.length; k < n; k++) {
                r[k].sqc(m.rlo)
            }
            for (var k = 0, n = l.length; k < n; k++) {
                l[k].sqc(m.display)
            }
            if (q) {
                q.sqc(m.hek);
                q.gae(m.yal)
            }
            if (s) {
                s.sqc(m.hek);
                s.gae(m.vqo)
            }
            if (h) {
                h.sqc(m.uso);
                h.gae(m.uso.mom)
            }
            if (p) {
                p.sqc(m.koc);
                p.gae(m.koc.mom)
            }
            if (j) {
                j.sqc(m.bmb);
                j.gae(m.bmb.mom)
            }
            this.zcr.tew("collect", "#gae", [m.hbi]);
            this.zcr.tew("half", "#gae", [m.rac]);
            this.zcr.tew("hart", "#gae", [m.qnf]);
            this.zcr.tew("diamond", "#gae", [m.cyu]);
            this.zcr.tew("spade", "#gae", [m.qyp]);
            this.zcr.tew("club", "#gae", [m.dvr]);
            this.zcr.tew("red", "#gae", [m.wnq]);
            this.zcr.tew("black", "#gae", [m.faf]);
            this.zcr.tew("creditd", "#gae", [m.wwm]);
            this.zcr.tew("wind", "#gae", [m.cak]);
            this.zcr.tew("gambled", "#gae", [m.bqi]);
            this.zcr.tew("colorwind", "#gae", [m.jdd]);
            this.zcr.tew("suitwind", "#gae", [m.wwv]);
            this.ldu = m.zvv
        } catch (o) {
            console.error(o)
        }
    };
    this.gmo = function(h) {
        try {
            var p = this.zcr.lkr("cbuttons"),
                j = this.zcr.lkr("cdisplays"),
                r = this.zcr.lkr("gdisplays"),
                o = this.zcr.mmc("idd"),
                q = this.zcr.mmc("timed"),
                k = this.zcr.mmc("info");
            this.ggg = h.backgroundColor;
            this.tef = h.soi;
            this.jpt = h.gsn;
            for (var l = 0, m = p.length; l < m; l++) {
                p[l].gmo((this.parent.hue.abu === false) ? h.grh : (this.parent.jgb === tvj.hue.jif) ? h.soz : h.mlc)
            }
            for (var l = 0, m = j.length; l < m; l++) {
                j[l].gmo(h.display)
            }
            for (var l = 0, m = r.length; l < m; l++) {
                r[l].gmo(h.yql)
            }
            if (o) {
                o.gmo(h.hek)
            }
            if (q) {
                q.gmo(h.hek)
            }
            if (k) {
                k.gmo(h.uso)
            }
        } catch (n) {
            console.error(n)
        }
    };
    this.nyv = function(t, s) {
        var r = this.zcr.lkr("buttons"),
            n = this.zcr.mmc("half"),
            k = this.zcr.mmc("collect"),
            q = t - this.x,
            p = s - this.y;
        for (var m = 0, o = r.length; m < o; m++) {
            var h = r[m];
            if (q >= h.x && q <= h.x + h.width && p >= h.y && p <= h.y + h.height && h.dse() === true && h.skl() === true && h.oax() === false) {
                if (h == n || h == k) {
                    this.parent.xbq.loh("btn");
                    this.parent.xbq.ruf("btn");
                    h.vdy(true, false, true)
                } else {
                    h.vdy(true, false, false)
                }
                this.mdb();
                h.kgs();
                for (var l = 0; l < o; l++) {
                    r[l].che(true)
                }
                return true
            }
        }
        return false
    };
    this.hxa = function() {
        var l = this.zcr.lkr("cbuttons");
        for (var k = 0, h = l.length; k < h; k++) {
            var j = l[k];
            if (j.tmr() === true) {
                j.vdy(false, true);
                return true
            }
        }
        return false
    };
    this.qgb = function(p) {
        var o = this.zcr.lkr("buttons"),
            k = this.zcr.mmc("half"),
            q = this.zcr.mmc("collect");
        for (var n = 0, h = o.length; n < h; n++) {
            var m = o[n];
            if (m.wyv == p) {
                if (m.skl() === true && m.oax() === false) {
                    if (m == k || m == q) {
                        this.parent.xbq.loh("btn");
                        this.parent.xbq.ruf("btn");
                        m.vdy(true, false, true)
                    } else {
                        m.vdy(true, false, false)
                    }
                    this.mdb();
                    m.kgs();
                    for (var l = 0; l < h; l++) {
                        o[l].che(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.zct = function() {
        var l = this.zcr.lkr("cbuttons");
        for (var k = 0, h = l.length; k < h; k++) {
            var j = l[k];
            if (j.tmr() === true) {
                j.vdy(false, true);
                return true
            }
        }
        return false
    };
    this.ing = function(k, h, j) {
        this.zcr.tew("creditd", "#zja", [this.parent.gch(k)]);
        this.zcr.tew("wind", "#zja", [this.parent.gch(h)]);
        this.zcr.tew("gambled", "#zja", [this.parent.axw(h)]);
        this.zcr.tew("colorwind", "#zja", [this.parent.axw(h * 2)]);
        this.zcr.tew("suitwind", "#zja", [this.parent.axw(h * 4)]);
        if (j && j === true) {
            this.mdb()
        }
    };
    this.ugf = function(j, m, k) {
        var n = this.zcr.mmc("card"),
            l = this.zcr.mmc("history"),
            h = 0;
        this.ded++;
        if (n) {
            n.rkl = null;
            if (j >= 0) {
                n.yeu(j, (this.parent.qio > 0))
            }
        }
        if (l) {
            l.ugf(m)
        }
        if (!this.parent.uli) {
            if (this.dse() && this.parent.qio > 0) {
                h = (this.ded <= 3) ? this.ded : 3;
                this.parent.xbq.ruf("gamblewin" + h);
                if (!k) {
                    setTimeout(a.jvw, 2000)
                }
            }
        }
    };
    this.jvw = function() {
        var h = a.zcr.mmc("history");
        a.utl();
        if (h) {
            h.uys()
        }
        a.mdb();
        a.uxp();
        a.ein(true)
    };
    this.lqa = function(h) {
        if (h == c) {
            this.zcr.tew("red", "#vdy", [true, false, false])
        } else {
            if (h == g) {
                this.zcr.tew("black", "#vdy", [true, false, false])
            } else {
                if (h == d) {
                    this.zcr.tew("diamond", "#vdy", [true, false, false])
                } else {
                    if (h == f) {
                        this.zcr.tew("hart", "#vdy", [true, false, false])
                    } else {
                        if (h == e) {
                            this.zcr.tew("spade", "#vdy", [true, false, false])
                        } else {
                            if (h == b) {
                                this.zcr.tew("club", "#vdy", [true, false, false])
                            }
                        }
                    }
                }
            }
        }
    };
    this.utl = function() {
        var k = this.zcr.lkr("buttons");
        for (var j = 0, h = k.length; j < h; j++) {
            k[j].vdy(false)
        }
    };
    this.dns = function() {
        var h = this.zcr.mmc("card"),
            j = this.zcr.mmc("info");
        this.ded = 0;
        this.his = 0;
        if (h) {
            h.apj(false)
        }
        if (j) {
            j.tzp(true)
        }
        this.tzp(true, true);
        if (j) {
            j.sto(0)
        }
    };
    this.cvu = function() {
        var h = this.zcr.mmc("card"),
            j = this.zcr.mmc("history");
        if (h) {
            h.gdz(this.parent.xbq.ire("g_hart"), this.parent.xbq.ire("g_diamond"), this.parent.xbq.ire("g_spade"), this.parent.xbq.ire("g_clubs"), this.parent.xbq.ire("g_king"), this.parent.xbq.ire("g_queen"), this.parent.xbq.ire("g_jake"), this.parent.xbq.ire("g_suit"), this.parent.xbq.ire("g_red"), this.parent.xbq.ire("g_blue"))
        }
        if (j) {
            j.nkk(this.parent.xbq.ire("g_suit"))
        }
    };
    this.prs = function(k, h) {
        var j = this.zcr.mmc("info");
        if (j) {
            j.bxf(h);
            j.lpl(k, h)
        }
    };
    this.uxp = function() {
        if (this.otx < 0) {
            this.egv = true;
            this.parent.xbq.loh("gamble1");
            this.parent.xbq.loh("gamble2");
            this.otx = setInterval(a.bdz, 200)
        }
    };
    this.bdz = function() {
        var h = a.zcr.mmc("card");
        if (h) {
            h.apj(true)
        }
        if ((a.his % 4) == 0) {
            if (a.egv) {
                a.parent.xbq.ruf("gamble1");
                a.parent.xbq.loh("gamble2")
            } else {
                a.parent.xbq.ruf("gamble2");
                a.parent.xbq.loh("gamble1")
            }
            a.egv = !a.egv
        }
        a.his++
    };
    this.esm = function() {
        clearInterval(this.otx);
        this.otx = -1;
        this.his = 0;
        this.parent.xbq.loh("gamble1");
        this.parent.xbq.loh("gamble2")
    };
    this.kid = function() {
        this.zcr = new lts();
        this.zcr.xpk();
        this.zcr.yhs("buttons");
        this.zcr.yhs("displays");
        this.zcr.yhs("cbuttons");
        this.zcr.yhs("cdisplays");
        this.zcr.yhs("gdisplays")
    };
    this.tuz = function(h) {
        this.zcr.zxg("collect", this.hsz(h.hbi, (this.parent.hue.smb === false || this.parent.hue.abu === false) ? this.parent.language.bpj : null, (this.parent.hue.smb === false || this.parent.hue.abu === false) ? this.parent.xbq.ire("btn") : this.parent.xbq.ire("btn_co"), this.kaf, (!this.parent.uli) ? this.parent.ayv.brl : null, h.rlo), ["buttons", "cbuttons"]);
        this.zcr.zxg("half", this.hsz(h.rac, (this.parent.hue.smb === false || this.parent.hue.abu === false) ? this.parent.language.iip : null, (this.parent.hue.smb === false || this.parent.hue.abu === false) ? this.parent.xbq.ire("btn") : this.parent.xbq.ire("btn_ha"), this.vba, (!this.parent.uli) ? this.parent.ayv.ruc : null, h.rlo), ["buttons", "cbuttons"]);
        this.zcr.zxg("hart", this.zoe(h.qnf, this.parent.xbq.ire("g_hartbtn"), this.qfs, (!this.parent.uli) ? this.parent.ayv.eis : null), ["buttons"]);
        this.zcr.zxg("diamond", this.zoe(h.cyu, this.parent.xbq.ire("g_diamondbtn"), this.azf, (!this.parent.uli) ? this.parent.ayv.jxh : null), ["buttons"]);
        this.zcr.zxg("spade", this.zoe(h.qyp, this.parent.xbq.ire("g_spadebtn"), this.esc, (!this.parent.uli) ? this.parent.ayv.qhf : null), ["buttons"]);
        this.zcr.zxg("club", this.zoe(h.dvr, this.parent.xbq.ire("g_clubbtn"), this.eri, (!this.parent.uli) ? this.parent.ayv.suk : null), ["buttons"]);
        this.zcr.zxg("red", this.zoe(h.wnq, this.parent.xbq.ire("g_redbtn"), this.sdg, (!this.parent.uli) ? this.parent.ayv.qap : null), ["buttons"]);
        this.zcr.zxg("black", this.zoe(h.faf, this.parent.xbq.ire("g_blackbtn"), this.iyy, (!this.parent.uli) ? this.parent.ayv.ccv : null), ["buttons"])
    };
    this.egp = function(j) {
        var h = null;
        if (!(this.parent.uli && this.parent.okj) && this.parent.style.cdg.dxd === false) {
            h = this.parent.xbq.ire("display_effect")
        }
        this.zcr.zxg("creditd", this.hqn(j.wwm, (this.parent.nwk()) ? this.parent.language.ide : this.parent.language.bex, this.parent.gch(this.parent.bex), h, j.display), ["displays", "cdisplays"]);
        this.zcr.zxg("wind", this.hqn(j.cak, this.parent.language.qio, this.parent.gch(this.parent.qio), h, j.display), ["displays", "cdisplays"]);
        this.zcr.zxg("gambled", this.hqn(j.bqi, this.parent.language.civ, this.parent.axw(this.parent.qio), null, j.display), ["displays", "gdisplays"]);
        this.zcr.zxg("colorwind", this.hqn(j.jdd, this.parent.language.yrz, this.parent.axw(this.parent.qio * 2), null, j.display), ["displays", "gdisplays"]);
        this.zcr.zxg("suitwind", this.hqn(j.wwv, this.parent.language.jnz, this.parent.axw(this.parent.qio * 4), null, j.display), ["displays", "gdisplays"]);
        this.zcr.zxg("idd", this.hqn(j.yal, null, (this.parent.nwk() === true) ? this.parent.language.ide : "" + ((this.parent.kda > 0) ? this.parent.kda : ""), null, j.hek), ["displays"]);
        if (tvj.wxo.value11 || tvj.wxo.value49) {
            this.zcr.zxg("timed", this.hqn(j.vqo, null, "", null, j.hek), ["displays"])
        }
    };
    this.dan = function(h) {
        var j = new idy();
        j.xpk(h.uso.mom, this.context2D);
        j.parent = this;
        j.sqc(h.uso);
        this.zcr.zxg("info", j)
    };
    this.ufr = function(j) {
        var h = new qqb();
        h.xpk(j.bmb.mom, this.context2D);
        h.parent = this;
        h.sqc(j.bmb);
        this.zcr.zxg("card", h)
    };
    this.ies = function(h) {
        var j = new ghr();
        j.xpk(h.koc.mom, this.context2D);
        j.sqc(h.koc);
        this.zcr.zxg("history", j)
    };
    this.zoe = function(k, m, l, j) {
        var h = new glc();
        h.xpk(k, this.context2D);
        h.parent = this;
        h.kgs = l;
        h.nkk(m);
        if (j) {
            h.wyv = j.woo
        }
        return h
    };
    this.hsz = function(l, o, n, m, j, k) {
        var h = new dto();
        h.xpk(l, this.context2D, null, n, null, o);
        h.parent = this;
        h.kgs = m;
        h.sqc(k);
        if (j) {
            h.wyv = j.woo
        }
        return h
    };
    this.hqn = function(j, n, m, l, h) {
        var k = new eno();
        k.xpk(j, this.context2D, null, n, m);
        k.parent = this;
        k.ifr = l;
        k.sqc(h);
        return k
    };
    this.ein = function(j) {
        var l = this.zcr.lkr("buttons");
        for (var k = 0, h = l.length; k < h; k++) {
            l[k].vxc(j)
        }
    };
    this.kaf = function() {
        a.esm();
        a.ein(false);
        a.parent.vdt.bpj()
    };
    this.vba = function() {
        a.esm();
        a.ein(false);
        a.parent.vdt.iip()
    };
    this.qfs = function() {
        a.esm();
        a.ein(false);
        a.parent.vdt.fzw(f)
    };
    this.azf = function() {
        a.esm();
        a.ein(false);
        a.parent.vdt.fzw(d)
    };
    this.eri = function() {
        a.esm();
        a.ein(false);
        a.parent.vdt.fzw(b)
    };
    this.esc = function() {
        a.esm();
        a.ein(false);
        a.parent.vdt.fzw(e)
    };
    this.sdg = function() {
        a.esm();
        a.ein(false);
        a.parent.vdt.fzw(c)
    };
    this.iyy = function() {
        a.esm();
        a.ein(false);
        a.parent.vdt.fzw(g)
    };
    this.skj = function() {
        var h = a.zcr.mmc("info");
        if (h) {
            h.jpi()
        }
        setTimeout(a.mkh, 10)
    };
    this.mkh = function() {
        a.nrr = false;
        a.tkw = (a.parent.qio > a.parent.zjo) ? true : false;
        a.cuz = 20;
        if (a.parent.qio >= a.parent.zjo * 25) {
            a.cuz = 40
        }
        a.upg = 0;
        a.wph = a.parent.qio;
        a.wid = a.parent.bex - a.parent.qio;
        a.bzr = a.parent.qio;
        a.sjc = new Date().getTime();
        a.bnm = true;
        a.avy = setTimeout(a.cqv, a.parent.zpb)
    };
    this.cqv = function() {
        var h = 0,
            j = a.parent.zpb,
            k = new Date().getTime();
        if (a.bzr > 0) {
            if (!a.nrr) {
                a.parent.xbq.loh("collect");
                a.parent.xbq.ruf("collect");
                a.nrr = true
            }
            h = Math.round(a.bzr / a.cuz);
            a.bzr -= h;
            if (a.bzr < 0) {
                a.bzr = 0
            }
            a.zcr.tew("wind", "#zja", [a.parent.gch(a.wph - (a.parent.qio - a.bzr)), true]);
            a.zcr.tew("creditd", "#zja", [a.parent.gch(a.wid + (a.parent.qio - a.bzr)), true]);
            a.upg++;
            a.cuz -= 1;
            j = a.parent.zpb + (a.upg * a.parent.zpb - (k - a.sjc));
            a.avy = setTimeout(a.cqv, j)
        } else {
            a.parent.xbq.loh("collect");
            a.parent.xbq.ruf("collectend");
            a.bnm = false;
            clearTimeout(a.avy);
            setTimeout(a.parent.phx, 100)
        }
    };
    this.mdb = function(r, p, s, n) {
        if (!this.dse() || !this.parent.kez()) {
            return
        }
        var k = (r != null && p != null && s != null && n != null),
            t = this.context2D,
            q = null,
            j = this.zcr.kub(),
            m = (this.parent.hue.abu === false) ? this.parent.xbq.ire("btn_back") : (this.parent.jgb === tvj.hue.jif) ? this.parent.xbq.ire("g_right") : this.parent.xbq.ire("g_left");
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
            t.drawImage(this.ifr, (this.ldu.x == 0) ? this.ldu.width : 0, this.height - m.height);
            q = t.createLinearGradient(this.ldu.x, this.ldu.y, this.ldu.x + this.ldu.width, this.ldu.y);
            q.addColorStop(0.2, this.tef);
            q.addColorStop(1, this.jpt);
            t.fillStyle = q;
            t.save();
            if (this.parent.hue.abu === false) {
                if (this.parent.jgb === tvj.hue.vtc) {
                    t.translate(this.ldu.width / 2, this.ldu.height / 2);
                    t.rotate(Math.PI);
                    t.translate(-this.ldu.width / 2, -this.ldu.height / 2)
                }
                t.fillRect(this.ldu.x, this.ldu.y, this.ldu.width, this.ldu.height)
            }
            t.drawImage(m, this.ldu.x, this.ldu.y, this.ldu.width, this.ldu.height);
            t.restore()
        } else {
            t.drawImage(this.ifr, 0, 0);
            if (this.ggg != null) {
                tvj.slh.ayc(t, this.ldu.x, this.ldu.y, this.ldu.width, this.ldu.height, this.ggg, 1)
            } else {
                if ((this.height - this.ifr.height) > 0) {
                    t.drawImage(this.ifr, this.ldu.x, this.ldu.y, this.ldu.width, this.ifr.height - this.ldu.y, this.ldu.x, this.ldu.y, this.ldu.width, this.ldu.height)
                }
            }
        }
        t.restore();
        for (var l = 0, o = j.length; l < o; l++) {
            j[l].mdb()
        }
        if (this.uek && this.gvg) {
            if (k) {
                this.uek.drawImage(this.gvg, r, p, s, n, this.x + r, this.y + p, s, n)
            } else {
                this.uek.drawImage(this.gvg, this.x, this.y)
            }
        }
    }
}
rzr.prototype = new kpu;

function kgb() {
    this.umh = "verdana";
    this.hpj = "verdana";
    this.szk = "bold italic";
    this.tzs = "white";
    this.vyk = 26;
    this.stc = 12;
    this.gbk = new mfo();
    this.gkb = [];
    this.sqc = function(a) {
        kgb.prototype.sqc.call(this, a);
        try {
            this.vyk = a.etn;
            this.stc = a.hju;
            this.gbk = a.mng;
            this.gkb = a.cak
        } catch (b) {
            console.error(b)
        }
    };
    this.gmo = function(a) {
        kgb.prototype.gmo.call(this, a);
        try {
            this.umh = a.dqx;
            this.hpj = a.inx;
            this.szk = a.sby;
            this.tzs = a.rrv
        } catch (b) {
            console.error(b)
        }
    };
    this.mdb = function() {
        if (!this.dse()) {
            return
        }
        var a = this.context2D;
        a.save();
        a.fillStyle = this.pwl;
        if (this.bpo) {
            a.strokeStyle = this.bpo
        }
        a.lineJoin = "round";
        a.lineCap = "round";
        a.font = this.hie + " " + this.are + "px " + this.qaz;
        a.textBaseline = "alphabetic";
        a.textAlign = "center";
        a.drawImage(this.ifr, 0, 0);
        for (var b in this.oes) {
            this.hng(this.oes[b], this.yuv[b], this.are, this.qaz)
        }
        if (tvj.cdg != null) {
            this.szz(0, this.gkb[0]);
            this.szz(1, this.gkb[1]);
            this.szz(3, this.gkb[2]);
            this.szz(4, this.gkb[3]);
            this.szz(6, this.gkb[4]);
            this.szz(7, this.gkb[5])
        }
        if (tvj.cdg.mdi) {
            a.fillStyle = this.tzs;
            this.hng(tvj.cdg.language.enn.toUpperCase() + " " + tvj.cdg.language.mdc.toUpperCase(), this.gbk, this.stc, this.hpj)
        } else {
            tvj.slh.edu(a, tvj.cdg.language.enn.toUpperCase(), this.tzs, this.gbk.x, this.gbk.y, this.gbk.width, this.gbk.height, this.hpj, this.stc, this.szk)
        }
        a.restore();
        if (this.uek && this.gvg) {
            this.uek.drawImage(this.gvg, this.x, this.y)
        }
    };
    this.szz = function(e, d) {
        var a = this.context2D,
            c = this.vyk,
            f = 0,
            h = 0,
            g = 0;
        a.save();
        a.fillStyle = this.pwl;
        if (this.bpo) {
            a.strokeStyle = this.bpo
        }
        a.lineJoin = "round";
        a.lineCap = "round";
        a.font = "bold " + c + "px " + this.umh;
        a.textBaseline = "bottom";
        a.textAlign = "center";
        a.lineWidth = this.jqs;
        for (var b in tvj.cdg.zkh[e]) {
            if (tvj.cdg.zkh[e][b] > 0) {
                f++
            }
        }
        g = d.height / f;
        for (var b = tvj.cdg.zkh[e].length - 1; b >= 0; b--) {
            if (tvj.cdg.zkh[e][b] > 0) {
                if (e != tvj.cdg.poi) {
                    a.fillText(tvj.cdg.axw(tvj.cdg.zkh[e][b] * tvj.cdg.aww), d.x + d.width / 2, d.y + g * h + c)
                } else {
                    a.fillText(tvj.cdg.axw(tvj.cdg.zkh[e][b] * tvj.cdg.aww * tvj.cdg.tss), d.x + d.width / 2, d.y + g * h + c)
                }
                if (this.bpo) {
                    if (e != tvj.cdg.poi) {
                        a.strokeText(tvj.cdg.axw(tvj.cdg.zkh[e][b] * tvj.cdg.aww), d.x + d.width / 2, d.y + g * h + c)
                    } else {
                        a.strokeText(tvj.cdg.axw(tvj.cdg.zkh[e][b] * tvj.cdg.aww * tvj.cdg.tss), d.x + d.width / 2, d.y + g * h + c)
                    }
                }
                h++
            }
        }
        a.restore()
    }
}
kgb.prototype = new tnl;

function fxq(g, c, f, e, h, a, d, b) {
    this.jpx = g;
    this.iqq = f;
    this.qre = e;
    this.ylr = h;
    this.bdh = c;
    this.vyg = a;
    this.fva = d;
    this.vna = b;
    this.ukn = [];
    this.sqi = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ];
    this.xpp = function(p) {
        var o = [
            [-1, -1, -1],
            [-1, -1, -1],
            [-1, -1, -1],
            [-1, -1, -1],
            [-1, -1, -1]
        ];
        for (var n = 0, k = (this.rl < 5) ? 5 : this.rl; n < k; n++) {
            this.ukn[n] = this.aws(p)
        }
        for (var n = 0, k = o.length; n < k; n++) {
            o[n] = this.zxm(p)
        }
        for (var n = 0, k = this.sqi.length; n < k; n++) {
            for (var m = 0, l = this.sqi[n].length; m < l; m++) {
                if (o[n][m] == 15) {
                    this.sqi[n][m] = -1
                } else {
                    this.sqi[n][m] = o[n][m]
                }
            }
        }
        fxq.prototype.xpp.call(this, p)
    };
    this.zns = function() {
        if (this.kml == tvj.odd.jef.won) {
            this.vdt.shv()
        } else {
            if (this.kml == tvj.odd.jef.kta) {
                this.vdt.oiw()
            } else {
                if (this.kml == tvj.odd.jef.led) {
                    this.vdt.mwe()
                }
            }
        }
    };
    this.sgs = function(k, j, l) {
        this.hxg("A/u2531," + k + "," + j + "," + l)
    }
}
fxq.prototype = new fff;

function ukf() {
    this.xpk = function(a, b) {
        this.jpx = b;
        this.mgv = a;
        return this
    };
    this.connect = function(c, f, e, g, a, d, b) {
        this.iqq = f;
        this.qre = e;
        this.ylr = g;
        this.bdh = c;
        this.fva = d;
        this.vna = b;
        this.doy = new fxq(this.jpx, c, f, e, g, a, d, b);
        this.doy.xpk(this)
    };
    this.zrm = function() {
        var e = this.doy.kml;
        if ((e == tvj.odd.jef.kta && this.doy.qio == 0) || e == tvj.odd.jef.led) {
            this.mgv.ffg = true
        }
        this.mgv.slu = this.doy.wew;
        this.mgv.ukn = this.doy.ukn;
        for (var d = 0, a = this.doy.sqi.length; d < a; d++) {
            for (var c = 0, b = this.doy.sqi[d].length; c < b; c++) {
                this.mgv.sqi[d][c] = this.doy.sqi[d][c]
            }
        }
        ukf.prototype.zrm.call(this)
    };
    this.shv = function() {
        this.mgv.lpe = this.doy.kml;
        this.mgv.mav = this.doy.bge;
        this.mgv.bex = this.doy.bex;
        this.mgv.tss = this.doy.tss;
        this.mgv.cwv = this.doy.oub;
        this.mgv.qio = this.doy.qio;
        for (var a = 0; a < this.doy.zkh.length; a++) {
            this.mgv.eli[a] = this.doy.zkh[a]
        }
        if (this.mgv.qio > 0) {
            this.mgv.hfs.zcr.tew("history", "#ugf", [this.doy.kro])
        }
        this.mgv.edj = false;
        this.zrm();
        this.mgv.fik();
        this.mgv.oay(this.doy.kda)
    };
    this.oiw = function() {
        this.mgv.lpe = this.doy.kml;
        this.mgv.mav = this.doy.bge;
        this.mgv.bex = this.doy.bex;
        this.mgv.tss = this.doy.tss;
        this.mgv.cwv = this.doy.oub;
        this.mgv.qio = this.doy.qio;
        for (var a = 0; a < this.doy.zkh.length; a++) {
            this.mgv.eli[a] = this.doy.zkh[a]
        }
        if (this.mgv.qio > 0) {
            this.mgv.hfs.zcr.tew("history", "#ugf", [this.doy.kro])
        }
        this.mgv.edj = false;
        this.zrm();
        this.mgv.dta();
        this.mgv.oay(this.doy.kda)
    };
    this.mwe = function() {
        this.mgv.lpe = this.doy.kml;
        this.mgv.mav = this.doy.bge;
        this.mgv.bex = this.doy.bex;
        this.mgv.tss = this.doy.tss;
        this.mgv.cwv = this.doy.oub;
        this.mgv.qio = this.doy.qio;
        for (var a = 0; a < this.doy.zkh.length; a++) {
            this.mgv.eli[a] = this.doy.zkh[a]
        }
        this.mgv.edj = false;
        this.zrm();
        this.mgv.uwi();
        this.mgv.oay(this.doy.kda)
    };
    this.sgs = function(b, a, c) {
        this.doy.sgs(b, a, c)
    }
}
ukf.prototype = new dxg;

function rto() {
    this.lfj = null;
    this.nky = "";
    this.olr = new mfo();
    this.zkq = 0;
    this.tks = 1;
    this.sqc = function(a) {
        rto.prototype.sqc.call(this, a);
        try {
            this.olr = a.icw;
            this.zkq = a.vou
        } catch (b) {
            console.error(b)
        }
    };
    this.tpc = function() {
        return this.tks
    };
    this.rwr = function(a) {
        this.tks = a
    };
    this.hyr = function(b, a, c) {
        this.vgj = b;
        this.nky = a;
        if (c && c === true && this.context2D != null) {
            this.tzp(true, true)
        }
    };
    this.mdb = function() {
        if (!this.dse() || !this.parent.kez()) {
            return
        }
        var b = this.context2D,
            c = null,
            a = (this.gvg != null) ? 0 : this.x,
            d = (this.gvg != null) ? 0 : this.y;
        b.save();
        if (this.gvg == null) {
            b.beginPath();
            b.rect(this.x, this.y, this.width, this.height);
            b.closePath();
            b.clip()
        }
        if (this.pid === true) {
            if (this.diz != null) {
                b.drawImage(this.diz, this.x + this.pjz, this.y + this.wkf, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            if (this.ifr != null) {
                b.drawImage(this.ifr, a, d)
            }
            if (this.tks > 1) {
                b.drawImage(this.lfj, this.olr.width * (this.tks - 1), 0, this.olr.width, this.olr.height, a + this.olr.x, d + this.olr.y, this.olr.width, this.olr.height)
            }
        }
        c = b.createLinearGradient(a + this.width / 2 + this.ezi, d, a + this.width / 2 + this.ezi, d + this.height);
        c.addColorStop(0, this.hii);
        c.addColorStop(1, this.mnm);
        tvj.slh.edu(b, this.vgj, c, a + this.gtv + this.ezi, d + this.fgo, this.width - 2 * this.gtv, this.height, this.qaz, this.are, this.hie, this.bpo, this.okp);
        tvj.slh.edu(b, this.nky, c, a + this.gtv - this.ezi, d + this.fgo, this.width - 2 * this.gtv, this.height, this.qaz, this.are, this.hie, this.bpo, this.okp);
        b.restore();
        if (this.uek && this.gvg) {
            this.uek.drawImage(this.gvg, this.x, this.y)
        }
    }
}
rto.prototype = new hzp;

function bfa() {
    var b = this;
    var d = 0;
    var c = 1;
    var a = 2;
    var e = 3;
    this.nds = [];
    this.ptq = [];
    this.lfj = null;
    this.qwj = "black";
    this.afo = [];
    this.wby = 0;
    this.lbm = 0;
    this.dgr = 0;
    this.tuv = 0;
    this.gdy = 1;
    this.wgs = [
        [{
            lau: -1,
            zvl: 0,
            lpe: d
        }, {
            lau: -1,
            zvl: 0,
            lpe: d
        }, {
            lau: -1,
            zvl: 0,
            lpe: d
        }],
        [{
            lau: -1,
            zvl: 0,
            lpe: d
        }, {
            lau: -1,
            zvl: 0,
            lpe: d
        }, {
            lau: -1,
            zvl: 0,
            lpe: d
        }],
        [{
            lau: -1,
            zvl: 0,
            lpe: d
        }, {
            lau: -1,
            zvl: 0,
            lpe: d
        }, {
            lau: -1,
            zvl: 0,
            lpe: d
        }],
        [{
            lau: -1,
            zvl: 0,
            lpe: d
        }, {
            lau: -1,
            zvl: 0,
            lpe: d
        }, {
            lau: -1,
            zvl: 0,
            lpe: d
        }],
        [{
            lau: -1,
            zvl: 0,
            lpe: d
        }, {
            lau: -1,
            zvl: 0,
            lpe: d
        }, {
            lau: -1,
            zvl: 0,
            lpe: d
        }]
    ];
    this.sjc = 0;
    this.rju = 89;
    this.jft = 250;
    this.hru = 2000;
    this.nqe = 0;
    this.qif = 0;
    this.bnq = 0;
    this.qcn = 10;
    this.rvb = 0;
    this.gmo = function(f) {
        try {
            this.qwj = f.mhi
        } catch (g) {
            console.error(g)
        }
    };
    this.sqc = function(f) {
        try {
            this.afo = f.ste;
            this.wby = f.uaa;
            this.lbm = f.pqq;
            this.dgr = f.epy;
            this.tuv = f.viy
        } catch (g) {
            console.error(g)
        }
    };
    this.gad = function(k, m) {
        for (var l = 0, f = this.wgs.length; l < f; l++) {
            for (var h = 0, g = this.wgs[l].length; h < g; h++) {
                this.wgs[l][h].lau = k[l][h];
                this.wgs[l][h].lpe = c
            }
        }
        if (m && m === true) {
            this.parent.mdb()
        }
    };
    this.caj = function(k) {
        this.gdy = 1;
        for (var l = 0, f = this.wgs[0].length; l < f; l++) {
            for (var h = 0, g = this.wgs.length; h < g; h++) {
                if (this.wgs[h][l].lau >= 0 && this.wgs[h][l].lau === k[h][l]) {
                    this.wgs[h][l].zvl = this.gdy++
                }
            }
        }
    };
    this.uyd = function() {
        for (var k = 0, f = this.wgs.length; k < f; k++) {
            for (var h = 0, g = this.wgs[k].length; h < g; h++) {
                this.wgs[k][h] = {
                    lau: -1,
                    zvl: 0,
                    lpe: d
                }
            }
        }
    };
    this.start = function() {
        this.qif = 0;
        this.bnq = 0;
        if (this.gdy > 3) {
            this.parent.xbq.ruf("multistart")
        }
        this.wgs[this.qif][this.bnq].lpe = a;
        if (this.wgs[this.qif][this.bnq].zvl > 0) {
            this.sjc = new Date().getTime();
            this.rvb = 0;
            this.uyn()
        } else {
            this.parent.mdb();
            this.nqe = setTimeout(this.uep, b.jft)
        }
    };
    this.stop = function() {
        clearTimeout(this.nqe)
    };
    this.uep = function() {
        b.wgs[b.qif][b.bnq].lpe = e;
        b.eoi(b.wgs[b.qif][b.bnq].zvl);
        if (b.qif < b.wgs.length - 1) {
            b.qif++
        } else {
            b.qif = 0;
            b.bnq++
        }
        if (b.bnq === b.wgs[b.qif].length) {
            b.parent.xbq.ruf("multiend");
            b.parent.mdb();
            b.nqe = setTimeout(b.qyk, b.hru)
        } else {
            b.wgs[b.qif][b.bnq].lpe = a;
            if (b.wgs[b.qif][b.bnq].zvl > 0) {
                b.parent.xbq.ruf("multi" + b.wgs[b.qif][b.bnq].zvl);
                b.sjc = new Date().getTime();
                b.rvb = 0;
                b.uyn()
            } else {
                b.parent.mdb();
                b.nqe = setTimeout(b.uep, b.jft)
            }
        }
    };
    this.uyn = function() {
        var f = 0;
        b.parent.mdb();
        if (b.rvb < b.qcn - 1) {
            b.rvb++;
            f = (b.rvb * b.rju - (new Date().getTime() - b.sjc));
            b.nqe = setTimeout(b.uyn, f)
        } else {
            f = (b.rvb * b.rju - (new Date().getTime() - b.sjc));
            b.nqe = setTimeout(b.uep, f)
        }
    };
    this.mdb = function() {
        if (!this.dse() || !this.parent.kez()) {
            return
        }
        var g = this.context2D;
        g.save();
        g.clearRect(0, 0, this.width, this.height);
        for (var l = 0, f = this.wgs.length; l < f; l++) {
            for (var k = 0, h = this.wgs[l].length; k < h; k++) {
                if (this.wgs[l][k].lpe === c) {
                    g.drawImage(this.nds[this.wgs[l][k].lau], 0, 0, this.wby, this.lbm, this.afo[l].x, this.afo[l].y + this.lbm * k, this.wby, this.lbm)
                } else {
                    if (this.wgs[l][k].lpe === a) {
                        if (this.wgs[l][k].zvl === 0) {
                            tvj.slh.ayc(g, this.afo[l].x, this.afo[l].y + this.lbm * k, this.wby, this.lbm, this.qwj, 1);
                            g.drawImage(this.nds[this.wgs[l][k].lau], 0, this.lbm, this.wby, this.lbm, this.afo[l].x, this.afo[l].y + this.lbm * k, this.wby, this.lbm)
                        } else {
                            if (this.rvb < this.qcn) {
                                g.drawImage(this.ptq[this.wgs[l][k].lau], this.wby * this.rvb, 0, this.wby, this.lbm, this.afo[l].x, this.afo[l].y + this.lbm * k, this.wby, this.lbm)
                            }
                        }
                    } else {
                        if (this.wgs[l][k].lpe === e) {
                            if (this.wgs[l][k].zvl === 0) {
                                tvj.slh.ayc(g, this.afo[l].x, this.afo[l].y + this.lbm * k, this.wby, this.lbm, this.qwj, 1)
                            }
                            g.drawImage(this.nds[this.wgs[l][k].lau], 0, this.lbm, this.wby, this.lbm, this.afo[l].x, this.afo[l].y + this.lbm * k, this.wby, this.lbm);
                            if (this.wgs[l][k].zvl > 0) {
                                g.drawImage(this.lfj, this.dgr * (this.wgs[l][k].zvl - 1), 0, this.dgr, this.tuv, this.afo[l].x + (this.wby - this.dgr) / 2, this.afo[l].y + this.lbm * k + (this.lbm - this.tuv) / 2, this.dgr, this.tuv)
                            }
                        }
                    }
                }
            }
        }
        g.restore();
        if (this.uek && this.gvg) {
            this.uek.drawImage(this.gvg, this.x, this.y)
        }
    };
    this.eoi = function(f) {};
    this.qyk = function() {}
}
bfa.prototype = new kpu;

function iex() {
    this.bdh = "LightningHot";
    this.ivv = "Lightning Hot";
    this.ebc = tvj.wxo.value30 + "/lightninghot/images/";
    this.bgu = tvj.wxo.value30 + "/lightninghot/sounds/";
    this.hwg = 8;
    this.kdp = null;
    this.awk = null;
    this.pot = null;
    this.csv = null;
    this.slu = 1;
    this.ukn = [];
    this.sqi = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ];
    this.dso = null;
    this.vza = function() {
        this.r1 = [];
        this.r2 = [];
        this.r3 = [];
        this.r4 = [];
        this.r5 = [];
        this.bos = [10, 4, 2, 6, 8, 1, 9, 7, 3, 5];
        this.zik = 1;
        this.hjm = 10;
        this.adb = 1;
        this.eew = 10;
        this.aum = [
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
        this.zkh = [
            [0, 0, 100, 500, 1000],
            [0, 0, 30, 100, 300],
            [0, 0, 30, 100, 300],
            [0, 0, 20, 50, 150],
            [0, 0, 10, 25, 75],
            [0, 0, 10, 25, 75],
            [0, 0, 5, 20, 50],
            [0, 0, 2, 10, 50]
        ];
        this.cgs = [3, 3, 3, 3, 3, 3, 3, 3];
        this.poi = 7;
        this.lpo("1_1_61");
        if (tvj.wxo.pef != undefined) {
            if (tvj.wxo.pef.value1) {
                this.osx = tvj.wxo.pef.value1;
                this.blz = this.osx
            }
        }
    };
	gameController=this;
    this.iub = function() {
        this.vdt = new ukf().xpk(this, tvj.wxo.value6)
    };
    this.ylb = function() {
        this.naf()
    };
    this.wne = function() {
        iex.prototype.wne.call(this);
        this.cvy[0] = new vnq().xpk(this.xbq.ire("anim0"), this.hue.ayn.w1, this.hue.ayn.h1, 20);
        this.cvy[1] = new vnq().xpk(this.xbq.ire("anim1"), this.hue.ayn.w1, this.hue.ayn.h1, 12);
        this.cvy[2] = new vnq().xpk(this.xbq.ire("anim2"), this.hue.ayn.w1, this.hue.ayn.h1, 12);
        this.cvy[3] = new vnq().xpk(this.xbq.ire("anim3"), this.hue.ayn.w1, this.hue.ayn.h1, 12);
        this.cvy[4] = new vnq().xpk(this.xbq.ire("anim4"), this.hue.ayn.w1, this.hue.ayn.h1, 12);
        this.cvy[5] = new vnq().xpk(this.xbq.ire("anim5"), this.hue.ayn.w1, this.hue.ayn.h1, 12);
        this.cvy[6] = new vnq().xpk(this.xbq.ire("anim6"), this.hue.ayn.w1, this.hue.ayn.h1, 12);
        this.cvy[7] = new vnq().xpk(this.xbq.ire("anim7"), this.hue.ayn.w1, this.hue.ayn.h1, 20)
    };
    this.naf = function() {
        var d = [],
            b = [];
        for (var c = 0, a = this.xbq.apw("mask"); c < a; c++) {
            d[c] = this.xbq.ire("mask" + c)
        }
        for (var c = 0, a = this.xbq.apw("maskanim"); c < a; c++) {
            b[c] = this.xbq.ire("maskanim" + c)
        }
        this.dso = new bfa();
        this.dso.xpk(this.hue.dso.mom, null, this.context2D);
        this.dso.parent = this;
        this.dso.eoi = this.eoi;
        this.dso.qyk = this.xaz;
        this.dso.nds = d;
        this.dso.ptq = b;
        this.dso.lfj = this.xbq.ire("maskmulti");
        this.dso.gmo(this.style.dso);
        this.dso.sqc(this.hue.dso);
        this.dso.tzp(false)
    };
    this.esw = function() {
        var b = new rto(),
            a = this.xbq.ire("m_win");
        if (this.uli && this.okj && this.style.cdg.fzp) {
            a = this.xbq.ire("m_m_win")
        }
        b.xpk(this.hue.soa.mom, this.context2D, null, a, "");
        b.parent = this;
        b.lfj = this.xbq.ire("winmulti");
        b.sqc(this.hue.soa);
        b.gmo(this.style.soa);
        b.tzp(false);
        this.afx.zxg("winp", b)
    };
    this.hud = function() {
        if (this.kdp) {
            this.kdp.gae(this.hue.yyz.chk.mom);
            this.kdp.sqc(this.hue.yyz.chk)
        }
        if (this.csv) {
            this.csv.gae(this.hue.yyz.qio.mom);
            this.csv.sqc(this.hue.yyz.qio)
        }
        if (this.pot) {
            this.pot.gae(this.hue.yyz.lzi.mom);
            this.pot.sqc(this.hue.yyz.lzi)
        }
        this.idx()
    };
    this.idx = function() {
        if (this.dso) {
            this.dso.gae(this.hue.dso.mom);
            this.dso.sqc(this.hue.dso)
        }
    };
    this.mfm = function() {
        this.kjk();
        this.tan();
        this.ktr();
        this.ytg();
        iex.prototype.mfm.call(this)
    };
    this.kjk = function() {
        this.kdp = new kgb();
        this.kdp.xpk(this.hue.yyz.chk.mom, null, this.bdk.context2D, this.xbq.ire("h_paytable"));
        this.kdp.parent = this.bdk;
        this.kdp.oes[0] = this.language.sel;
        this.kdp.sqc(this.hue.yyz.chk);
        this.kdp.gmo(this.style.yyz.chk);
        if (!this.afx.mmc("tops")) {
            this.bdk.vyu(this.kdp)
        }
    };
    this.ytg = function() {
        var a = this.afx.mmc("tops");
        if (a) {
            this.awk = new kgb();
            this.awk.xpk(this.hue.top.chk.mom, null, a.context2D, this.xbq.ire("h_paytable_top"));
            this.awk.parent = a;
            this.awk.oes[0] = this.language.sel;
            this.awk.sqc(this.hue.top.chk);
            this.awk.gmo(this.style.yyz.chk);
            a.vyu(this.awk)
        }
    };
    this.tan = function() {
        this.csv = new tnl();
        this.csv.xpk(this.hue.yyz.qio.mom, null, this.bdk.context2D, this.xbq.ire("h_winlines"));
        this.csv.parent = this.bdk;
        this.csv.oes[0] = this.language.hyb;
        this.csv.sqc(this.hue.yyz.qio);
        this.csv.gmo(this.style.yyz.dus);
        this.bdk.vyu(this.csv)
    };
    this.ktr = function() {
        this.pot = new tnl();
        this.pot.xpk(this.hue.yyz.lzi.mom, null, this.bdk.context2D, this.xbq.ire("h_symbol"));
        this.pot.parent = this.bdk;
        this.pot.oes[0] = this.language.ykm;
        this.pot.oes[1] = this.language.wfc + " " + this.language.yvq;
        this.pot.sqc(this.hue.yyz.lzi);
        this.pot.gmo(this.style.yyz.dus);
        this.bdk.vyu(this.pot)
    };
    this.qdt = function() {
        if (this.kdp != null) {
            this.kdp.oes[0] = this.language.sel
        }
        if (this.awk != null) {
            this.awk.oes[0] = this.language.sel
        }
        if (this.csv != null) {
            this.csv.oes[0] = this.language.hyb
        }
        if (this.pot != null) {
            this.pot.oes[0] = this.language.ykm;
            this.pot.oes[1] = this.language.wfc + " " + this.language.yvq
        }
    };
    this.qyz = function() {
        for (var a = 0; a < this.hwg; a++) {
            this.xbq.qbt("symb" + a, this.zmh, false, this.bgu + "symb" + (a + 1))
        }
    };
    this.rby = function() {
        var a = this.ebc + this.hue.type + "/";
        this.xbq.pnw("m_back", a + "main.png");
        this.xbq.pnw("m_win", a + "winPanel.png");
        this.xbq.pnw("h_paytable", a + "wthelp.jpg");
        this.xbq.pnw("h_winlines", a + "wlhelp.jpg");
        this.xbq.pnw("h_symbol", a + "symbol_help.jpg");
        this.xbq.pnw("h_paytable_top", a + "wthelptop.jpg");
        if (this.ojz() === true) {
            this.xbq.pnw("g_back", a + "mobile_gamble.jpg");
            this.xbq.pjv(a, "mobile_panels.json")
        } else {
            this.xbq.pnw("g_back", a + "gamble.jpg");
            if (this.uli === true) {
                this.xbq.pnw("m_g_back", a + "mobile_gamble.jpg");
                this.xbq.pnw("m_m_back", a + "main.png");
                this.xbq.pnw("m_m_win", a + "winPanel.png")
            }
        }
    };
    this.yob = function() {
        var b = this.ebc + this.hue.type + "/";
        this.xbq.pjv(b, "masks.json");
        for (var a = 0; a < this.hwg; a++) {
            this.xbq.pnw("maskanim" + a, b + "maskanim" + (a + 1) + ".jpg")
        }
        this.xbq.pnw("maskmulti", b + "maskmultiplier.png");
        this.xbq.pnw("winmulti", b + "winmultiplier.png")
    };
    this.nas = function() {
        this.xbq.qbt("multistart", null, false, this.bgu + "multi_start");
        this.xbq.qbt("multiend", null, false, this.bgu + "multi_end");
        for (var a = 1; a <= 15; a++) {
            this.xbq.qbt("multi" + a, null, false, this.bgu + "multi" + a)
        }
        this.xbq.qbt("stopr1", null, false, this.bgu + "stop_reel3");
        this.xbq.qbt("stopr2", null, false, this.bgu + "stop_reel3")
    };
    this.wce = function() {
        if (this.dso) {
            this.dso.stop()
        }
    };
    this.fzd = function() {
        return (this.lpe == tvj.odd.jef.won)
    };
    this.tpx = function() {
        var a = this.ljg.zcr.mmc("info");
        if (a && a.uvf()) {
            a.ylv(this.language.gvt, true)
        }
    };
    this.dvg = function() {
        return (this.fzd())
    };
    this.wod = function() {
        this.trh = true;
        this.ljg.ein(false);
        this.ljg.zcr.tew("win", "#jpi");
        this.ljg.zcr.tew("info", "#jpi");
        this.xco(null);
        this.bcy.stop();
        this.bcy.dwo();
        this.dso.gad(this.sqi);
        this.dso.tzp(true, true);
        this.rsj()
    };
    this.rsj = function() {
        if (!this.uli) {
            for (var a = 0; a < this.uua; a++) {
                this.mav[a] = -1;
                this.yet[a].jvo(this.blz[a])
            }
            this.pvx = false;
            this.bzp();
            if (this.kmp === true) {
                this.url = 1
            } else {
                if (this.ojz() === true) {
                    this.url = (!this.fzw) ? 1 : 0
                } else {
                    if (tvj.wxo.value62 === true) {
                        this.url = 0;
                        if (this.qsy) {
                            this.url |= 2
                        }
                        if (this.fzw) {
                            this.url |= 4
                        }
                    } else {
                        this.url = (this.qsy && !this.fzw) ? 1 : 0
                    }
                }
            }
            this.vdt.sgs(this.tss, this.cwv, this.url)
        }
    };
    this.dih = function() {
        iex.prototype.dih.call(this);
        if (this.lpe === tvj.odd.jef.won) {
            for (var b = 0, a = this.yet.length; b < a; b++) {
                this.yet[b].jlp = ((b % 2) == 0) ? this.xbq.xhq("stopr1") : this.xbq.xhq("stopr2")
            }
        }
    };
    this.dzm = function() {
        this.afx.tew("winp", "#rwr", [this.slu]);
        return ((this.uli || !this.kxt) && (this.lpe == tvj.odd.jef.kta || this.lpe == tvj.odd.jef.led))
    };
    this.ohc = function() {
        this.ljg.ein(false);
        this.ljg.zcr.tew("start", "#zja", [this.language.start, true]);
        this.ljg.zcr.tew("info", "#ylv", [this.language.sfv, true]);
        this.afx.tew("winp", "#rwr", [1]);
        this.idm(this.mav);
        this.dso.caj(this.llx);
        this.dso.start()
    };
    this.eoi = function(a) {
        if (a > 0) {
            tvj.cdg.afx.tew("winp", "#rwr", [a, true]);
            tvj.cdg.hff(tvj.cdg.qio * a / tvj.cdg.slu)
        }
    };
    this.xaz = function() {
        for (var b = 0, a = tvj.cdg.mav.length; b < a; b++) {
            tvj.cdg.mav[b] = tvj.cdg.ukn[b]
        }
        tvj.cdg.ion.brr(tvj.cdg.ukn[0], true);
        tvj.cdg.zyy.brr(tvj.cdg.ukn[1], true);
        tvj.cdg.qsl.brr(tvj.cdg.ukn[2], true);
        tvj.cdg.ocd.brr(tvj.cdg.ukn[3], true);
        tvj.cdg.nic.brr(tvj.cdg.ukn[4], true);
        tvj.cdg.dso.tzp(false, true);
        tvj.cdg.dso.uyd();
        tvj.cdg.hff(tvj.cdg.qio);
        tvj.cdg.eud(tvj.cdg.qio);
        tvj.cdg.fnz()
    };
    this.obk = function() {
        if (this.uiu && this.qsy || !this.qsy) {
            if (!((((this.fzw && this.vij) || this.fzd()) && !this.uiu) && !this.woe)) {
                this.xco([this.vfg[this.hkp] + 1]);
                this.bcy.obk(this.vfg[this.hkp], this.zwh, this.nsr, this.waz, this.crc, this.vni, true, false)
            } else {
                if (!this.lrh) {
                    this.xco([this.vfg[this.hkp] + 1]);
                    this.bcy.obk(this.vfg[this.hkp], this.zwh, this.nsr, this.waz, this.crc, this.vni, false, false)
                } else {
                    this.ljg.zcr.tew("win", "#jpi");
                    this.xco([this.wna + 1]);
                    this.bop();
                    this.mie()
                }
            }
        } else {
            if (this.qsy && !this.woe && !this.lrh) {
                if (!this.fzd()) {
                    this.xco([this.vfg[this.hkp] + 1]);
                    this.bcy.obk(this.vfg[this.hkp], this.zwh, this.nsr, this.waz, this.crc, this.vni, true, false)
                } else {
                    this.xco([this.vfg[this.hkp] + 1]);
                    this.bcy.obk(this.vfg[this.hkp], this.zwh, this.nsr, this.waz, this.crc, this.vni, false, false)
                }
            } else {
                this.ljg.zcr.tew("win", "#jpi");
                this.xco([this.wna + 1]);
                this.bop();
                this.mie()
            }
        }
    };
    this.luz = function() {
        if (this.uiu && this.qsy || !this.qsy) {
            this.xco([this.wna + 1]);
            if (!((((this.fzw && this.vij) || this.fzd()) && !this.uiu) && !this.woe)) {
                this.bcy.obk(-1, this.zwh, false, this.poi, this.crc, this.vni, true, false)
            } else {
                if (!this.lrh) {
                    this.bcy.obk(-1, this.zwh, false, this.poi, this.crc, this.vni, false, false)
                } else {
                    this.ljg.zcr.tew("win", "#jpi");
                    this.bop();
                    this.mie()
                }
            }
        } else {
            if (this.qsy && !this.woe && !this.lrh) {
                this.xco([this.wna + 1]);
                if (!this.fzd()) {
                    this.bcy.obk(-1, this.zwh, false, this.poi, this.crc, this.vni, true, false)
                } else {
                    this.bcy.obk(-1, this.zwh, false, this.poi, this.crc, this.vni, false, false)
                }
            } else {
                this.ljg.zcr.tew("win", "#jpi");
                this.xco([this.wna + 1]);
                this.bop();
                this.mie()
            }
        }
    };
    this.eaw = function() {
        if (!(this.fzw && this.vij)) {
            setTimeout(this.dxc, 500);
            if (!this.qsy && !this.yjp && !this.fzw && !this.fzd()) {
                this.ljg.zcr.tew("gamble", "#xwv")
            }
        }
        if (this.fzd()) {
            this.hoh = (this.qio > this.zjo) ? true : false;
            this.udr = 0;
            this.fpo = 0;
            this.msv = 0;
            this.cei = 0;
            this.cam = 0;
            this.anm = this.qio;
            this.iph = new Date().getTime();
            this.uiu = true;
            this.ykw = 0;
            this.pcx();
            this.xbq.loh("winfinal");
            this.gih = setTimeout(this.njw, this.hoa)
        }
    };
    this.hff = function(a) {
        var b = this.afx.mmc("winp");
        if (b) {
            b.hyr(this.axw(Math.floor(a / b.tpc())), this.axw(a), true)
        }
        this.afx.knk("jackpots", "#mdb")
    };
    this.eud = function(a) {
        if (this.lpe != tvj.odd.jef.won) {
            this.ljg.zcr.tew("info", "#ylv", [this.language.vtl.toUpperCase() + ": " + this.axw(this.qio)])
        }
    };
    this.eid = function() {
        if (tvj.cdg.fzd()) {
            return
        }
        iex.prototype.eid.call(this)
    };
    this.mnk = function() {
        if (this.fzd()) {
            return
        }
        iex.prototype.mnk.call(this)
    };
    this.isi = function(c) {
        if (c == tvj.odd.jef.won) {
            this.tij = 0;
            this.mdh = 0;
            if (this.qio > 0) {
                this.vij = false;
                this.woe = true;
                this.jgi = false;
                this.trh = true;
                this.mli = false;
                this.fwn = false;
                this.ehd();
                this.afx.tew("winp", "#rwr", [this.slu]);
                this.hff(this.qio);
                this.uiu = false;
                this.bzc(this.axq, this.rjv);
                this.vcq();
                this.ljg.zcr.tew("start", "#zja", [this.language.start, true]);
                this.ljg.zcr.tew("info", "#jpi", []);
                this.ljg.zcr.tew("info", "#ylv", [this.language.gvt, true]);
                this.wxy((this.nto > 0 && this.wao < this.nto), false, true);
                if (this.twr()) {
                    this.ckk()
                } else {
                    this.kch()
                }
            } else {
                this.wxy((this.nto > 0 && this.wao < this.nto), false, true);
                if (this.dvg()) {
                    this.wod()
                }
            }
        } else {
            if (c == tvj.odd.jef.kta) {
                this.tij = 0;
                this.mdh = 0;
                this.woe = true;
                this.jgi = false;
                this.mli = false;
                this.fwn = false;
                this.ehd();
                this.afx.tew("winp", "#rwr", [this.slu]);
                this.hff(this.qio);
                this.ljg.zcr.tew("info", "#ylv", [this.language.vtl.toUpperCase() + ": " + this.axw(this.qio)]);
                this.uiu = false;
                for (var b = 0, a = this.mav.length; b < a; b++) {
                    this.mav[b] = this.ukn[b]
                }
                this.ion.brr(this.ukn[0], true);
                this.zyy.brr(this.ukn[1], true);
                this.qsl.brr(this.ukn[2], true);
                this.ocd.brr(this.ukn[3], true);
                this.nic.brr(this.ukn[4], true);
                this.bzc(this.axq, this.rjv);
                this.vcq();
                this.wxy((this.nto > 0 && this.wao < this.nto), false, true);
                if (this.ojz() === false) {
                    this.vij = true;
                    this.ljg.zcr.tew("start", "#zja", [this.language.bpj, true]);
                    this.ljg.zcr.tew("gamble", "#xwv");
                    this.xve = setTimeout(this.eid, 10)
                } else {
                    this.vij = false
                }
                if (this.twr()) {
                    this.ckk()
                } else {
                    this.kch()
                }
                this.ljg.oia(true)
            } else {
                if (c == tvj.odd.jef.led) {
                    this.tij = 0;
                    this.mdh = 0;
                    this.jgi = true;
                    this.frk();
                    this.wxy((this.nto > 0 && this.wao < this.nto), false, true);
                    this.ljg.zcr.tew("info", "#sto", [0]);
                    this.ljg.ein(true);
                    this.bam(true);
                    this.uph()
                }
            }
        }
    };
    this.fik = function() {
        this.kxt = false;
        this.yjp = false;
        this.vij = false;
        this.trh = true;
        this.zzp();
        this.ytk();
        this.ljg.khm(true);
        this.wls()
    };
    this.dta = function() {
        this.kxt = false;
        this.yjp = false;
        this.vij = true;
        this.trh = false;
        this.zzp();
        this.mrh();
        this.ljg.khm(true)
    };
    this.uwi = function() {
        this.kxt = false;
        this.yjp = true;
        this.vij = false;
        this.trh = false;
        this.zzp();
        this.mrh();
        this.ljg.khm(true)
    };
    this.mrh = function() {
        this.cdl();
        if (this.ion.rdc < this.mvz || this.ion.cex > 0) {
            this.zkm()
        } else {
            setTimeout(this.zkm, this.ion.rdc * this.kep)
        }
    };
    this.zkm = function() {
        if (!tvj.cdg.ukq) {
            for (var b = 0, a = tvj.cdg.yet.length; b < a; b++) {
                if (tvj.cdg.yet[b] && tvj.cdg.uxt[b]) {
                    tvj.cdg.yet[b].tmy(tvj.cdg.mav[b], tvj.cdg.blz[b] - tvj.cdg.blz[0], tvj.cdg.gkc)
                }
            }
            tvj.cdg.ukq = true;
            tvj.cdg.lqi = true;
            if (!tvj.cdg.rpn && tvj.cdg.pku()) {
                tvj.cdg.ljg.zcr.tew("start", "#zja", [tvj.cdg.language.yop, true])
            }
            if (tvj.cdg.sdh === true) {
                tvj.cdg.uti()
            }
        }
    };
    this.mmb = function() {
        for (var b = 0, a = this.yet.length; b < a; b++) {
            if (this.yet[b] && this.uxt[b] === true) {
                this.yet[b].mdb()
            }
        }
        if (this.dso) {
            this.dso.mdb()
        }
    };
    this.mdb = function(p, o, q, C, e) {
        if (tvj.cdg.kez()) {
            var a = (p != null && o != null && q != null && C != null),
                c = (a === true) ? new mfo(p, o, q, C) : ((tvj.cdg.hue.abu === true) ? new mfo(tvj.cdg.hue.qus.mom.x, tvj.cdg.hue.qus.mom.y, tvj.cdg.hue.qus.mom.width, tvj.cdg.hue.qus.mom.height) : new mfo(tvj.cdg.hue.cdg.mom.x, tvj.cdg.hue.cdg.mom.y, tvj.cdg.hue.cdg.mom.width, tvj.cdg.hue.cdg.mom.height)),
                z = tvj.cdg.context2D,
                f = (tvj.cdg.bmf === true) ? tvj.cdg.style.cdg.ukl : tvj.cdg.style.cdg.backgroundColor,
                F = tvj.cdg.afx.mmc("stats"),
                m = tvj.cdg.afx.mmc("msg"),
                b = tvj.cdg.afx.mmc("history"),
                D = tvj.cdg.afx.mmc("topb"),
                g = tvj.cdg.afx.mmc("topi"),
                j = tvj.cdg.afx.mmc("betsel"),
                s = tvj.cdg.afx.mmc("linesel"),
                t = tvj.cdg.afx.mmc("tops"),
                k = tvj.cdg.afx.mmc("winp"),
                l = tvj.cdg.afx.mmc("fwinp"),
                u = tvj.cdg.afx.mmc("llinep"),
                H = tvj.cdg.afx.mmc("rlinep"),
                G = tvj.cdg.afx.mmc("finfop"),
                v = tvj.cdg.afx.mmc("finfoc"),
                r = tvj.cdg.afx.mmc("autop"),
                E = tvj.cdg.afx.lkr("jackpots"),
                n = tvj.cdg.afx.mmc("jwp"),
                d = tvj.cdg.afx.mmc("settings");
            tvj.cdg.gyw = false;
            if (tvj.cdg.uzy === true) {
                tvj.cdg.stn()
            }
            z.save();
            if (a) {
                z.beginPath();
                z.rect(p, o, q, C);
                z.closePath();
                z.clip()
            }
            if (e == null || e === false) {
                z.clearRect(0, 0, tvj.cdg.width, tvj.cdg.height)
            }
            if (tvj.cdg.hue.nff) {
                if (tvj.cdg.uzy === false) {
                    tvj.slh.ayc(tvj.cdg.context2D, tvj.cdg.hue.cdg.mom.x - tvj.cdg.hue.cdg.ioh, tvj.cdg.hue.cdg.mom.y - tvj.cdg.hue.cdg.ioh, tvj.cdg.hue.cdg.mom.width + 2 * tvj.cdg.hue.cdg.ioh, tvj.cdg.hue.cdg.mom.height + 2 * tvj.cdg.hue.cdg.ioh, f, 1)
                } else {
                    tvj.slh.ayc(tvj.cdg.context2D, tvj.cdg.hue.cdg.mom.x - tvj.cdg.hue.cdg.ioh, tvj.cdg.hue.cdg.mom.y - tvj.cdg.hue.cdg.ioh, tvj.cdg.hue.cdg.mom.width + 2 * tvj.cdg.hue.cdg.ioh, tvj.cdg.hue.cdg.mom.height + 2 * tvj.cdg.hue.cdg.ioh, null, 0, f, tvj.cdg.hue.cdg.ioh, 1)
                }
            }
            if (b) {
                b.mdb()
            }
            if (g) {
                g.mdb()
            }
            if (t) {
                t.mdb()
            }
            if (F && F.dse()) {
                F.mdb()
            } else {
                if (tvj.cdg.bdk && tvj.cdg.bdk.dse()) {
                    tvj.cdg.bdk.mdb()
                } else {
                    if (tvj.cdg.hfs && tvj.cdg.hfs.dse()) {
                        tvj.cdg.hfs.mdb()
                    } else {
                        if (tvj.cdg.uzy) {
                            z.drawImage(tvj.cdg.ivp, tvj.cdg.hue.ggo.mom.x, tvj.cdg.hue.ggo.mom.y)
                        } else {
                            z.drawImage(tvj.cdg.qfx, tvj.cdg.hue.ggo.mom.x, tvj.cdg.hue.ggo.mom.y)
                        }
                        if (k && k.dse()) {
                            k.mdb()
                        } else {
                            if (l && l.dse()) {
                                l.mdb()
                            }
                        }
                        if (u) {
                            u.mdb()
                        }
                        if (H) {
                            H.mdb()
                        }
                        if (tvj.cdg.uzy === false) {
                            for (var A = 0, B = tvj.cdg.yet.length; A < B; A++) {
                                if (tvj.cdg.yet[A]) {
                                    tvj.cdg.yet[A].mdb()
                                }
                            }
                        }
                        if (tvj.cdg.bcy) {
                            tvj.cdg.bcy.mdb()
                        }
                        if (tvj.cdg.ljg) {
                            tvj.cdg.ljg.mdb()
                        }
                        if (tvj.cdg.dso) {
                            tvj.cdg.dso.mdb()
                        }
                        for (var A = 0, B = E.length; A < B; A++) {
                            E[A].mdb()
                        }
                        if (n) {
                            if (n.dse()) {
                                tvj.cdg.jsj(z, c)
                            }
                            n.mdb()
                        }
                        if (G) {
                            if (G.dse()) {
                                tvj.cdg.jsj(z, c)
                            }
                            G.mdb()
                        }
                        if (v) {
                            if (v.dse()) {
                                tvj.cdg.jsj(z, c)
                            }
                            v.mdb()
                        }
                    }
                }
            }
            if (j) {
                j.mdb()
            }
            if (s) {
                s.mdb()
            }
            if (D) {
                D.mdb()
            }
            if (r) {
                r.mdb()
            }
            if (d) {
                d.mdb()
            }
            if (m) {
                if (m.dse()) {
                    tvj.cdg.jsj(z, c)
                }
                m.mdb()
            }
            z.restore()
        }
    };
    this.qjw = function(a) {
        this.jgb = a;
        if (a == tvj.hue.yhw) {
            return new whv()
        } else {
            if (a == tvj.hue.iqn) {
                return new xei()
            } else {
                if (a == tvj.hue.uvn) {
                    return new agu()
                } else {
                    if (a == tvj.hue.qic) {
                        return new hki()
                    } else {
                        if (a == tvj.hue.nfy) {
                            return new qjp()
                        } else {
                            if (a == tvj.hue.iig) {
                                return new vhp()
                            } else {
                                if (a == tvj.hue.rlb) {
                                    return new iwn()
                                } else {
                                    if (a == tvj.hue.jsm) {
                                        return new vsq()
                                    } else {
                                        if (a == tvj.hue.yjc) {
                                            return new wve()
                                        } else {
                                            if (a == tvj.hue.vtc) {
                                                return new xrw()
                                            } else {
                                                if (a == tvj.hue.jif) {
                                                    return new bvn()
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
    this.vin = function() {
        this.style = new mds()
    };
    this.qhv = function(a) {
        if (a == tvj.language.EN || a == tvj.language.US) {
            return new fhc()
        } else {
            if (a == tvj.language.ES || a == tvj.language.CO || a == tvj.language.MX || a == tvj.language.CL || a == tvj.language.VE) {
                return new eov()
            } else {
                if (a == tvj.language.DE || a == tvj.language.AT) {
                    return new utm()
                } else {
                    if (a == tvj.language.PT || a == tvj.language.BR) {
                        return new alx()
                    } else {
                        if (a == tvj.language.RU) {
                            return new dcr()
                        } else {
                            if (a == tvj.language.EE) {
                                return new roy()
                            } else {
                                if (a == tvj.language.TR) {
                                    return new ouu()
                                } else {
                                    if (a == tvj.language.CZ) {
                                        return new vdp()
                                    } else {
                                        if (a == tvj.language.GR) {
                                            return new amq()
                                        } else {
                                            if (a == tvj.language.BG) {
                                                return new yey()
                                            } else {
                                                if (a == tvj.language.GE) {
                                                    return new frb()
                                                } else {
                                                    if (a == tvj.language.HU) {
                                                        return new ogs()
                                                    } else {
                                                        if (a == tvj.language.RO) {
                                                            return new jhh()
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
    this.wjz = function() {
        if (this.bex == 0 && (this.lpe == tvj.odd.jef.led || (this.lpe == tvj.odd.jef.kta && this.qio == 0))) {
            return true
        }
        return iex.prototype.wjz.call(this)
    };
    this.nug = function() {
        if (this.dso.dse()) {
            return false
        }
        return iex.prototype.nug.call(this)
    }
}
iex.prototype = new rvy;

function esg() {
    tvj.cdg = new iex();
    tvj.cdg.xpk({
        hue: tvj.wxo.value14
    });
    window.focus()
}

function fki() {
    if (tvj.cdg != null) {
        tvj.cdg.equ()
    }
}

function gjr() {
    if (tvj.cdg != null) {
        tvj.cdg.iry()
    }
}
if (tvj.slh.mqc()) {
    window.onorientationchange = gjr;
    window.onresize = gjr
} else {
    window.onresize = fki
}
if (tvj.wxo.value9) {
    window.onload = esg
} else {
    esg()
};